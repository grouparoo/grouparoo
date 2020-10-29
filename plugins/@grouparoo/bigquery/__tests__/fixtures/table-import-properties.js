const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1604009372790";

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
      "00000002ff1dcfdb6e82300000d07fe9b31a0285d1bd710d29432e22a3bc10ac6514862037c165ff3eb3f307e7071494b271cca7ae6137f00eb64244077a707b41878f12ad79efba653a8737932d912366e9c34f499778a6a757702e62f1edee397ce1a1e42e816fc79daacaa4883b05712c51a88d70db1b4abe502db1786570eb4b81f89e2d1356377c6e3166ba80a6385aed10d17c9fb6dfad60d94426118a8a5396a8ebc5a8a93f63272ac93e3945b3894a273c93ae26b2b5a9b0fbec7d6b0853848ec235a87bb182f47a313f664d3e96812ec40dacb7ead9c4a51d821d606bcf0736e6fc9595648476e07f9e4f5bcf5e7d9d15031bc0ef1f750939ae18010000",
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
      "Thu, 29 Oct 2020 22:09:37 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-1-1604009372790",
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
      "6b6f9b3014fd2bc8fbb82690572191a2354ac81aa9212d21edaa6942365ca83b82536c3a7555fefbae4d93b59bd47ec2f63de79e731f3c939fbc4cc988309e3fd4503d7dba178c9c105034c7d7f94cf66fefe6deeadb655af0cf369c7bbfa757e33122b86649badd15d092a2ae1290a3cdba9d57a2ded14a8816266a755a9d53a7ef38c39edb75870ed22414d9052f7f22f94ea99d1cd9f641ba9d0b911740775cb613b13dbedb8f5d7b57897b4894b4df2ada2822ed7735bf1422a18a8b72bc59a37e2da18a614b79810efe125376f636739bd36d3b47f0234f802689a84ba55d618a449419cfebca6425a367625cbe3a90b57fe14f232b1145bd2de3926ee1c44aa9a2b17ada81350f574b6b11cc57e172122d5641bc9e9efbcb497bbabad82c83b57573ee87bea5282bc070adb175666e015e503f05a97869d423fdac955ffab3f87f289a80d2129a60ec3aa7b4e33943963137c9bcde80650e30e63177407bcc49867de8a70c28f28ca861d1529430ecb25377e0c4993318c4fd21edc72c4d21ee781dc78541d603d623fb13f2abe20a665cee84e44d87c84db888fc380a37c17412f9a6848cd6859a35c67401af3d2a2c1041efd4b4d7512e5049b77b11447e3899468b6bbf99f005e434795a3fe08c335a484034adb0790aaaa548b16124982cfd1982cdc42e0f414946df9f89eeb976f1aae5477a8403d47695f99275142e82afc6ce01714d8bda401e9b832e23e38536bdff81405cd12609b9daf8e12d699e42c8a08232f978980836818f7eb4c3da2314171f55a4c23b6e4e22b5465241b341dc147b64bb5ea74b0cb852ffc6bc7e7778e899cea133c2164af55250b3f658672356cb23088338fcc0f46aff0722f4364b74040000",
    ],
    [
      "ETag",
      "FDs4YhF8OXPdli+/eH8zCQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1604009372790"
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
      "0002ff8d93514fdb400cc7bfcbed35d552d63523120f2914e8145a68c3c334a1cae49cecd825ceee2e45a5ea77c71758378d49e125b19d9f75fefbfed9899faa962216f7aafcd5a2d97e28d1ddf86089b6d5cef2aba1daa208043a28990c73f9f522da9c6d9f92297cbbd4b0808fd1e3c9091336ff81158878270a855a5a117fdf891a2ae4b69c745bd5eb2e0b84db36beb8ca96b3f905e715499fcf6fd33499a453b10f0e8d121cac3bfe1d6d77fb403cd0fd120b3458e7e867690c3d60ee665ea685aad138b0d49a1cade8e0ee4369a86dc0100db832180e86e3701486c79fa2a3e838644e530e4e51cde8ed8ac7138e1ce8253db248313c62c274310b2ebae786eb4a76427c389b67e35137dfdf40a18c752f3bf90dbe6afb97d4f04e902f40e93ea8c45aa2e9a354b306290d5adb4b925d43d31cb0c96291be81a0968694ec0737aa07d06e7300ced345f2bfd5b26dfeecea2cc9a66f08ebd80c07249b5d4d57597275edb9bbd7fb9d6c1dda6b43ec158bde26c370f4e573340e5f9c734ade4d7c4eec4c8b81c8817f804be5445c80b6b87f0670bb24185e030000",
    ],
    [
      "ETag",
      "0cdJG7vDyzAEaYHlaOa/7w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT `first_name` as __result, `id` as __pk FROM `profiles` WHERE `id` IN (?) GROUP BY `id`, `first_name`",
        types: ["NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1604009372790",
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
      "fd2b64f6cb6eb68fa12d459a18572b2a9bdaba946acc66d30ec3851d050699c18d31fdef7b01eb2326fa09b8f79c7bce7df0486e451e91090945725741f9f0e54686a44340b304a3541e59eef79f6e9a45eee9d9909e8ca3e42ad9df4784a8598a65450a5d25ab92839aac96bda49455c14a29bb58a83be89a633aa2d419da03dba1485390c63391df22f9afd6859af4fb3be95e226592022b84ea71993dc7fbf7837e51ca1be05af5df2af65144f53fd43c4825675ac87c7fb544fd4a41b9868c89141dbc10a3f0c7dbca3dc1b25e82e07bc181712eab5cd7aeb00497792c92aa6caa92c923695cbe7a214b77e64e0363138b52e975ce32d8184c19eb7509aa4a75c7d888e82952dc1a27fee2dcd86087b148416d8cab33d7775b883737be1e7c334efdc5eac238ba6e829d3775d14f044a8bbc7113b03085dac9d3bcbcf74baa094c33056d726dd33133f7a813c6a1cde3bda115c614c2702fb42d360c297746308a4260c8d375f586c572995b7c6cd278680dc201f0d8312d6738b26cea98b6c561ec0c06e690526e32b2ed907fa5d0702c54219568a746ae7c2f70d781bf9a4f0f03b7692366389ce3d65cddc46b9f1a9b44d0077d6debac90a854afc09b07ae7f380dbc4bb7ddfa0c12c61f9677b8f798a50a10cd4a9ca086f25c46383472b1587a81b7981fce90d1acf262875064f2fbf185103c14cd9475f324f3d5b9eb7bd3c6c10e72c9d2aac1dcb72fc424dbed1f44e089b674f26be5fad7a40df910430939ff7c79086e129ffd68bbb347281e3eaa288ddf78295cd51abc84f66244d6b8dbb11d8b8e48032ef5bbdc7864ef4653d7a82b4206b97e6aa83d7becb315abd4330893b8",
      "e8b9373fc5ec7f48fa5cda74040000",
    ],
    [
      "ETag",
      "0oB5E+JElmdEGH30F6dgWg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1604009372790"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff6d90d16bc23010c6ff97dbe35aa86e280a3ee8e89c58ca5675204324c6b3abb6bd2e49954efcdfbdc4c1f6b097e4eef2fb92efcb190e59b9853e6cb2f4ab46d5dca568de6c91a0ae73a379aba8d4081ea0112993f1bb9cc64b15cfabe5fd73d19936d1f0bb771a0c98d0f2130b01fd33ec32ccb71afa1f672845812c5baf95bb9131d35476329b279378cc7d415bdbc78b281a8ea2102ede1f5575f8554ce279380e93ff24ab8b077bda24b84385a5446ba252b4476926369f164595a3afa956123538d81da48aea4a28229f277edb6f7582c720e83d74dbdd5ec05c4e52988c4a461733b606868cc8133a713a6831a05cc941776e3df2385419ba1447c7b0b9d58f6ed418d4af8ad88346fb7c70b3f244d69e61db46d5e88114fc952f99b9f5972b4967d647a7010000",
    ],
    [
      "ETag",
      "NVcKNYrNTpY+Fm6KyLAz9w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "cd",
      "6e",
      "82300000e077e9590c938276371059a0514109052f4d6105f9112affbaecdd4776fe4edf0f6049c2bb8ef64dc96bf0095e6c83d6c91a0bd98053d229d35b6eac50dff8ec3c41db3b8db22b0d6e41cb677a30dcbda1e453c5cae60219cccc7b11a872d4567046e54e94d2933acce903ace2dad1099ce96c981fb8c2290bedf26d37237ac48a351c4f66fe758ff7c483d79b954666ab895daa070893ef40dda624ac50dda47e46e2c8b6631c6d34a5da9238a3b97864e1688ca12574af2e58310f67535a242ee045c9383c68fde84bfd581d39be4d6005f82cf29677345fb28a8ad00afccf69ff127ce91b9cb5bc05bf7fdb22947b18010000",
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
      "Thu, 29 Oct 2020 22:09:40 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-3-1604009372790",
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
      "5d6fda3014fd2bc87b5c8100811024b4229aae99206c4968374d53e4383799db10d3d8e95655fcf75d3ba56b55a97d8aed7bce3de77ee481dcf02a233392f2e2b681fafec3b548c90901450b7cf587838f59f9b78ae08b1fd5360cbe7f89ce17f33922b86649badb97d095a2a919c8d936ea15b568f6b416a28b89baa3ee6062d996e58e9ca1e35a489350e62b5edd20f9b7527b39ebf78fd2bd4288a204bae7b2c7c4eee9bd7f37ecef6b710d4cc9fe4bc53e8ac8fe9b9a9f4ac1a8e2a29a6f23d46f24d409ec282fd1c17f62969ebeccdce374d72b107cc71950c6445329ed0a533051e5bc686a9395cc1e8871f9ec40226fe52de30e1365b3ab928aeee0a49351451375bf87ce79b85977fce07c13ae17b1bf09926879e1ad17bde566b55d0751e7eac20bbd8ea2690986db99774ecd2dc00bea672015af8c7aac9fb5f2637ffcd743d1049496d00613c79ad0c1d472d33c75583e1d8dd3dc82349da6ce988e528bb936d8590a147946d4b06825aa347533ea3a4e42a90589ed4e06899b0eed643a71adb13b1a5136017238217f6aaee08ccbbd90bced10b90afdd84be2701b2c17b1674ac86953aab3d6982ee0b947850522e88d9a0e3aca052ae976fb41ec858b65ec5f7aed84575050761fdde28c735a4a4034adb1790aeab5c8b0612458acbd33049b897d3d062599fd7c20bae7dac5b3963fd1631ca0b6abcc974471e8079f8d9d23e292968d81dcb5075d46ce4b6dfaf00b81b8a26d12f26deb853f48fb14420e3554ecfd6122d804defbd18e6b8f505c7c54910aefb8394c6a0d5643bb41dc147b644fadf170420cb856af628e6d1f7ba673e88cb0834a3d16d4ae3dd6d98a35f20984411c7e607a75f807d17b4efa74040000",
    ],
    [
      "ETag",
      "I21+dlxnSeJISr4e1XJSFA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1604009372790"
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
      "8d93c16ee2301086df65f61aa4d0b2d046e200bb8122a5d086543dac1072e34930ebc4a9ed5021c4bb779cb6b45a564a2fc9cce41b79fef19f03fc152587009e44fe5ca3deffc8d1debb2046534b6be855a9d220788096e54466fee6713a89f5cda2d79d6ec39768b39d84f7c3211126dd60c120384026507203c19f0394ac406a4b95ac8b72dd641ed87de58acb249ecda794178abb7cfe1045a37114c2d13b357266d9bae1bfd1b63a7ab0554f3166a8b14cd1cd5269b5c5d4ce9c4cc38a4a62c7a85aa768a0819b0fb95675c5b4521daa742e3bddbedff3fdebcbc1c5e0da274eaa9459a14a421f96341e5865998cd50b8984ee0511ba894970d63c775417bc11e2c2d93ce9f79af9be0299d0c6beede4037cd7f62f29d93741ba0021dba01c4b8eba8d12d59a71aed19856529935abaa13365e2ca23388955c2bc1dbc19d6801a4dd9d8049b418fd6fb5649bcf5dfd1e25e119612c99e18424b3db70998c6eef1cb77abfdff1dea2b9d38abc62d0d9a4ebf7ae7e0efafe9b737e29e7263a27b0ba460f52463fc08db010644c1a3cbe02afabb3635e030000",
    ],
    [
      "ETag",
      "f0hWGFRrHO41GjEwLhjFEQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT `ltv` as __result, `id` as __pk FROM `profiles` WHERE `id` IN (?) GROUP BY `id`, `ltv`",
        types: ["NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-4-1604009372790",
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
      "59",
      "6f",
      "9b",
      "40",
      "10fe2b68fbd24ab6c198806dc94a5d87a6483e528c13455565efc24037c12c6117a769e4ffde01ec1cad943c0133df31178fe49667111912c693bb128a870f378291160145138c5efdb6c60375395efdf1443eb60d26e9ccbb1f8d10c12b96a4db3c85b6146511821cae969da410654e0b21da28d4b6da5ddbb00c63d0734c6760204d421a4f79768be45f4ae572a8eb47eb4e22449202cdb9ec8462fb14d777a69e17e2064225f5d78e3a9a48fd4dcfd354845471918d564bf42f25146bd8529e6205cfc4887d7eaddce174db4910bce321d0301465a6aaaa50221459cc93b2a855c9f091d455be78214b77ea4e026d93aadd46a3525baf0b9065aa5ada864787487eab7df517336d83adc53c05b9d1aebeb9bedb40bcb9f6f1f49376ee2f5617da97eb3ad86a04b18208a4e259ed1f509642e57d9890f7ff5a2a02555442935c3b864dbb7d63c062e68471bf77c2620318eb33e784f698110e2cb022061479aa52af59341399e538a6454d8820366d83daf6c0b299d5738051801e7368c4eca84f81ec5be4bee00aceb8cc85e4cd9cc895ef05ee3af057f3c93870eb36628a53396b8aab9a7859a7c22611f4465ffb2acb053a5543f7e681eb8f278177e9367b9e4242c387e51d6e3aa6a90444d3826e41413113110e8d5c2c965ee02de6e32932eae55d1c11920c7f3c3e138287bc9eb2aa9f64be9ab9be37a92b38422e695ad6985df342ba64bfff89083cca864ebeaf5cff9a34211f6228200bdf5f1e82ebc47bbfd6f1d0118aa78e2e52e1375e4a282b8fb080e662f8b6aeeec0ee77fb275d52830bf56fce34adee71349546a5085bc8d4a1a1e6d0b1cfc6ac944f204ce2a2e7defc1cb37f018e3aefcd660400",
      "00",
    ],
    [
      "ETag",
      "Wx4A9tVAUzIopA60bsaMIw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1604009372790"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff6d90df4fc23010c7ff97f375d3f1db91f000069564011cf0600c21651cb3b0ed66dba140f8dfbd16137df0a5ed5d3fdfe6733dc35e161be8c25aa61f15aae34d8ae6c51e62d45566346f25151ac103342265721a4ef6a7bb53eb5e06ed5739997dbd968d5dbfd7634227ef980be89e612b31db68e8be9da11039726cb552ee45c6ccb1b49dc768d29f7399d3c696e34514f507d1102ede9f50b9ff0d8cc6f3e1d330fe2fb2bc78b0a3758c5b545824681d4a453b4cccc88ea7455e66e86baa54821a1cec2e524555291491cf1dbfe9d7da413308c246a7de0903e6324a84915430ba98b11a1832228be99387831a03ca1d79cead5b0fdcaeb7c2db5addcd717014eb2d7f9283a3413d55c4161aad40709579202b6858dca80a3d4804ffe5b334d7faf20d75811132a8010000",
    ],
    [
      "ETag",
      "P9Okz/z58i06YiOSxYp3jA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "08000000000002ff1dcf4b7282300000d0bb646d1d3e52487710a40a569b0a086e180c113058201103767af73a7d37783f2027840a91dd5a46bfc11b98720dcec93ce81467218ba5639e0a7cb19426c6ae4d8ce4ac924db0f555822c3692a081a5c122a9f5b9b14b356866ec2224d3dbc1dd920db60e796f97b5a6bc226e5bf4581daf0e4cd6fef42145bf6d98bbaadff9be0a31bd763124f4d39bbcb13ae95ab943a7ac90be9ac4bdf7122949b5fa6a5188cc6141f83aa8c9b2add0c3178f14a1f1dad4428dee328cba343d9e876a807be8e3c49614bb163edc652b31e39e3ada6006e8d8d59c8aac7e667503c219f89f67b7a9a3cfbe43734e39f8fd03513c39ec18010000",
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
      "Thu, 29 Oct 2020 22:09:42 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-5-1604009372790",
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
      "4fdb3014fd2b91f738daa66968934ad5a84a1895da742429884d53643b4e6648e2123b4c80fadf77ed50064282a7d8bee7dc73ee479ed02daf3334458417772d6b1ebedc08828e1053b880d7f2a71b2fcebe3e5ededc15c926cf1e6bee5f5fcc6680e09a2571b52b594f8ab6a14c4eb771bf6844bbc38d103d48d43bee0dc7b66bdbfe68e24c7c1b689295f98ad7b740fea3d44e4e07838374bf10a22819de71d9a7a27a791fdc3b835d236e185572f05671002272f0a1e6b75250acb8a867db18f45bc99a94559897e0e03f3123276f33f739aefa0580ef39659852d1d64abb821454d4392fdac66445d327645cbe3aa03858058bc4a2a26cab3aad71c58eac0c2b9caa871db3cea2cdda5a86679b683d4f969b308d17e7c17ade5f6c56db75185b57e74114580a939219ae35b34ecc2d840be8674c2a5e1bf5443f6be5e7fe2cdf0f4513405ab22e984eec311e7ab64f7232a1b9373a26b9cd08f1c8e4188f884d7d97b91961187846d4b0702dea0971e9907a381d0f29495dc71ba5c49bb869ee0e7dea90ccf71d1bed8fd0df862b76cae54e48de75085d45cb244893681b2ee649604ac8715baad3ce982ee0b547050502e8839af63aca0528e9762fc32488e68b64791974135eb102d387f80e669ce3523240e3069aa758b31619340c85f375700a6033b11f87a044d35f4f48f75cbb78d5f2177a0203d47695f9a2388996e17763e780b8c4656b20f7dd419791f3529bdeff0620ac6897045d6c83e81a754f11cb59c36afaf930016c029ffd6887b507282c3ea8480577d81c2ab5066d58b741dc147b607b23db76900137ea5d6c38760e3dd339744656b15a3d17d4ad3dd4d989b5f2050441187e687ab5ff071fcc180a74040000",
    ],
    [
      "ETag",
      "lZ4SCF+zVjqgTOfdzni9YQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1604009372790"
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
      "db",
      "30",
      "10",
      "86",
      "ff8bf791544ba0b434121f5ad6b14ea1a56d909010aa4c7c09664e6c7c4e4755f5bfef1ca0a08114be247797e7e47bcf6fb6ec8fac048bd99d2c1e6bb09b6f05b8b90f1680b572482fa32b04163070bc20f2da4483c7a7de7572f47d39af7f3f45733ce8cf4f4f89c0ec1e4acee22dcb2528812cbed9b28a97406d99567559ad9a2c606e637c71992e26d373ca4b2d7c3ebd4a92e12819b35db06f14dcf155c37fa1ed7617b0077db7801c2c5419f8598cd50f90b9899789bc340a3aa86b9b01b2066e3e1456d7865bad3b54e91c77a25ed80dc3c151ffb03f0889533ae34eea8ad0ab258dc79c765c2df45f12c9a243226c1393e0bc79aea92e4523c4879369daeb36f3bd077269d13defe4157cd1f63fa9f81741ba00a9daa0022a01b68d9266c585b080d84a6a5c7163f6d868364b3e40bc12564bd10eae650ba0dc7a0ffc4c66c3cf564bb679dbd58f613afe40a02333ec917472315ea6c38b4bcfddbedcef68e3002fad26af20789b4461f7e4b8df0b9f9d73a6bd9be89cd8d91a029671fa017e49c7e29c2b84dd3f23d977ad5e030000",
    ],
    [
      "ETag",
      "Xp19qx6XL3/SQuJx1Qs+7Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT `ios_app` as __result, `id` as __pk FROM `profiles` WHERE `id` IN (?) GROUP BY `id`, `ios_app`",
        types: ["NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-6-1604009372790",
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
      "02ff8553db6e9b4010fd15b47d69255fd6578ca528756c9a22d9d8c538515455f6b20c6413cc1276491445f9f70e60e7a248c9133073ce9c33179ec8ad484332268188ef0ac81fbfddc880340868166374465396c11977dcebf524a2c9d9ea61664f4e4e10214a9662fb2c81a69245ce418d37eb569ccb2263b9944d2cd41c363b43daa7d4ea995dd3a2485390447391de22f95aeb4c8ddbeda3742b96324e806542b5b8dcbfc4dbf7dd7696cb1be05ab5df2bb65144b53fd53c4d24675ac8f464b346fd4241be853d13093a782586c1cff7955b82ed5b3182ef0507c6b92c525dbac2125ca691888bbcaa4ac64fa472f9e685acedb93df58d9d906acbb26c6730656cb739a822d10d0c878748766bfcf2960b6387ed452201b5332e7fdb9e5d431cd7f87efac338f7969b95717655051baf45d149084a8bb4f2e1b32081d2c36152cec7f59404a699823ab935e9907546d40aa2c0e4d1a83708220a41300acc01eb05945b7de8870130e4e9b27ac562a94c69d7442e356910763a34307b211b5a16ebf447bd088086940ec3c1a0db21cf0df2900b0d33a132a9443d2f72e939bebdf5bd8d3b9df876d546c47032b3da5cd9c45b9f1a9b44d0277d3d97592151a91cbee3fab63799face855def7b0e31e38feb3bdc78c41205886639db83867c21431c1a592dd78eef2cddc91c19d51257478422e3bf4faf04ff31aba6acab2771370bdb73a6958323e482254585b9af5f08cee1f91f22f0386b3af9b3b1bd2b52873c882087947fbd3c045789af7eb1e3c123144f1e5594c66fbc14ae4a0d9e437d31625fb93bb047bdd1b0472a70ae3fe42c6b741c4d59a3ac087b48f5a1a1fae0b1cf5aac502f204ce2a25dc73dc7ec7f75a798b06e040000",
    ],
    [
      "ETag",
      "D0napeBcINhSAf0lBPwDEA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1604009372790"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff6d905f4fc23014c5bfcbf5758b430502090fcc2c4a5c4027c4184348199751d8764bdb6108e1bb735b4cf4c197fe39fd9df69c9e6027eb15f461298b7d83fa7853a07d738b0c4d535ac393a2da20048056144cc6edd496aade7fcadbb4bd490a255fa61fc3c18009936fb012d03fc15a62b932d0ff3a412d2a64db62a1fd8d8cd9a3724a3c99a4c970cc42452b278c67693a8cd304cec11f9bdafd5a46e369f29464ff59e6e700b6b4cc708d1aeb1c5d0aa5698bb91db9824654aac4d050a37334e0617f50686a94d044212b61276c75a28728eadd77efbabd88b992726125d58ccede391a58b2a2cce89beb418b01ed97dc74edc703cb5637e85b1c3cc3e1e63fbef868d1bc6ae20c06ddf3d135ca23b97896633b6f00b9e0bf7c96f6ba3f5f0044ff7607a8010000",
    ],
    [
      "ETag",
      "B5LtlpnqYi/L5hEgpiKTWA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000000002ff1dcf4b7282300000d0bb64ad8e7c44e80e671010c50016840d83213601ca2701043abd7b9dbe1bbc1f902184394ffba6c435f80073266a1bb471daed417ee5c202d97e7796a1dba847b88653a063dd8791e710187b5f29d44e51140eb0ca083219499d7b8d23674f50171ebdb2506eee93b8e462987ec172c50fca17bfd05eb6655a46b241afd7560ce99896c1a0c7360f280d3361e94f8ba951cbdcce0f411d706548f220ae1364e785b44c0a9fbcd0cbfb8075ac46dcea6cde0b49cdabef676299437e43aa3aced02056dc3cceed208ce2dd22e2e76c051e58013cb594619ed27756da69da0afccfd37e6ef1bb7fc019c30cfcfe0197e9936318010000",
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
      "Thu, 29 Oct 2020 22:09:44 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-7-1604009372790",
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
      "ff85535d6fda3014fd2bc87b2d1008690009ad0cd29609421742ab699a22c7b9c9dc86388d9d76a8e2bfefda295dbb49ed536cdf73ee39f7234fe48e170919939867f73554fb4fb72226270414cdf035999e8ba0dc7f2de6e5f24b3fb1af1e2f7ee78f930922b86649ba2b73684b51570ce478bbe96495a84b5a09d1c6446db7dd3bb5069635b2ddbe3bb29026214f97bcb843f22fa54a39ee768fd29d4c882c075a72d96162f7f2de7de877cb4adc0253b2fb56b18b22b2fbaee6e75c30aab82826db0dead712aa087694e7e8e02f3189cfde66ee70baeb64087ee00c2863a22e947685299828529ed595c94ac64fc4b87c75201b6fe9cdc2161379bd2ba282eee0a495504523b52fa1751eac57ad857fbe0e56d370b1f6a3cdecd25b4d3bb3f572bbf237ad9b4b2ff05a8ac639186e6bd23a33371f2fa89f8054bc30eaa17ed6cacffd59fc3f144d4069094d3072ad53da1b5aa3388d5d960e6d274e2d88e361ec3ad48e2d361ac020898122cf881a162d44d18ba9cdc07622c7b192683018dad170d87323707b0e63ee8825764c0e27e4b1e20ae65c9642f2a643e42658845e14065b7f360d3d53424aeb5ccd1b63ba80d71e151688a0776a3ae82817a8a4dbbdf0432f98cec2c5b5d74c78091965fbcd3dce38a5b90444d30a9ba7a05a89041b46fce9ca9b23d84cecea189464fce389e89e6b17af5afe420f7180daae325fb20983857f61ec1c11d734af0de4a139e832529e6bd3879f08c4156d92906f5b2ff84e9aa70052a8a0601f0f13c126f0d18f765c7b84e2e2a38a5478c7cd61526bb00a9a0de2a6d8237b38709d1131e04afd1b73ac51ffd8339d4367841d14eab9a066edb1ce46ac962f200ce2f07dd3abc31f04d766e974040000",
    ],
    [
      "ETag",
      "dAFoRpyJnDpLB2d3PwGxlw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1604009372790"
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
      "6f",
      "da",
      "301086ff8bf7354881315823f50374b4430d50204c5aab0ab9f12575e7f83cdba14288ffbe73dab1699d947e49ee2ecfc9f79edf1cd80fa9054bd8832c7fd660f71f4af0cb10acc0d5ca3b7a19d40e58c4c0f392489c98dbeb6bb9d83cc2f7de72a977df661771797e4e84cb1fa1e22c39b04282128e257707a67905d496a3aa2bbd6db288f9bd09c575b69aceaf28af50847cbe49d3d1389db063746a14dcf36dc3bfa3edfe18b1277c58410116740e611663f109723f0d321daf8c828ec3dae6e05803371f4a8bb5e116b14395ceb0d31dc4fd383efb38ec0dcf62e214e6dc4bd4846ed6341ef3e8b95ae1338964dd1e11b6894970d13c775497a21112c2e93c1bf49bf9fe060a699d7fd9c96ff055dbbfa4e2ef04e902a46a834ad0026c1b25cd960b61c1b95612dd961b73c2c68b45fa06e25a5894a21ddcc91640f9dd09b84c17a3ffad966cf367575f46d9e40de13c99e18464d3d9649d8d663781bb7fbddff1de83bbb1485e71106cd28dfb9f3f0d07f18b732e30b889ce49bcad216239a71fe0abf42c29b87270fc05b63246695e030000",
    ],
    [
      "ETag",
      "oEpZKKiOUheY2QQnvVMC0g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT `date` as __result, `id` as __pk FROM `profiles` WHERE `id` IN (?) GROUP BY `id`, `date`",
        types: ["NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-8-1604009372790",
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
      "db",
      "6e",
      "9b",
      "40",
      "10",
      "fd",
      "15",
      "b4",
      "7d6925dbe01bd896a234756882e4d809c649d3aab27797816e022c61974451e47fef00762ead943c0133e7cc3973e189dc8a2c2413c2447c5742f1f8e94632d222a0698cd18bd3d43ccd0789edffa062fad3730bb37bf37070800851b1144df304da4a96050735592d3b7121cb9c1652b6b1507bd4eedad6c0b2c67da7e78c2da42948a299c86e91fc47eb5c4d4c732fdd89a58c13a0b9501d2ed3e7b879df33f342de00d7ca7cab68a28832dfd53c4c24a75ac8ec60b544fd5241b186948a041dbc1043f6f56de58ea0692746f0bde040399765a62b575882cb2c127159d455c9e489d42e5fbd90a53b73a781b109a9868d4195b15e17a0ca44b78c8d087791fcd6f8ee2fce8c0df6168904d4c6b83a757db7817873e3f3e117e3c45facce8d6fd775b0b5ab881e42505a64b58380b2042af5dd8cbcff175311a8a60a9ae4dab16cda1d596316318747a3fe904516303662ce90f699c5c70318840c28f27455bd66d14c66633ea451cfee8df8783888ba168b465d6631c69cb06fb3d0e981dd8d06831ed9b6c84321341c0b954b259a49912bdf0bdc75e0afe6d3a3c0addb88288ee5b8315735f1daa7c62611f44e5fdb2a2b242a5563f7e681eb1f4d03efd26d363d8398f2c7e51dee3aa2890244d382a6a0a13893210e8d9c2f965ee02de6473364d4eb3bdf231499fc7a7a21048f793d655d3fc97c75e6fadeb476b0875cd2a4ac31f7cd0be992edf63722f02c1b3ab958b9fe3569423e445040c63f5e1e82ebc4473fd7fed4118ac78e2a4ae3375e0a5795062fa0b91891d6ee76",
      "ecd170dcef931a5ce87f7376cfb2f7a3a96a541521854cef1a6a4e1dfb6cc44af50cc2242e7aeecd4f30fb17106b321368040000",
    ],
    [
      "ETag",
      "QHm/Hp4l6RXaiCZIEr/1jw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1604009372790"
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
      "00000002ff6d90514fc23010c7bfcbf9e816cb2422243c802e4a421007688c21a48cdb1c6cbbd9769865e1bb7b2d26fae04bdbbbfefecdefdac2212b7730806d967ed6a89a8b14cdb33d44a8ebdc68de2a2a3582076864cae4d5db7cdc2ccc6bf3f2d44dba0126fbf965980e874ce8f8030b098316920cf39d86c17b0ba52c90639b8d722f32669aca76ee47cb90ab8276b69aada6d3d1781ac2c9fb93a90ebffc64b60c1fc2e8bfc8fae4c19eb61126a8b08cd12a548af6189b899d4ecba2cad1d754ab183538d85da48aea4a2a229f3bfeaddfb9115d21fad7bda0d717cce5144b9351c9e86ac16a60c8c83ca22f9e0d3a0c2877e43113b71eb91d8840f822f045c7cd7274242bae7fd2e3c6a09e2b62138d56429c85eec84a1a9637aa460f62c9dff99899737dfa069fb18f66ab010000",
    ],
    [
      "ETag",
      "/YPByStWyVO4f42efjP+Eg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00d07fe9b333948bc0decaad88d338a592f8d240530571525a84aad9bfcfecfcc179819231ae141dba96dfc0277894a63f67f39530027b62b96851e4e615499116c7308f3f6a981d0b338a4eaa45ccf2263b857a80fd8d14faa42ecfab7613b73c7a4b0bfa428f13de6d0cf8eddee5591eaef9d8564891d8aeb362cd3a93b9ab44764a6477072f43e27541a917c6181fecd120a9d3465387b6f1c45cbcb7ce359e9e3b4e6fa8c530a4bdec6314fe6cbc7dace488d719d6b6d915c5028ea861b022ecb03df1d59062892f55f645ef469f9cc10c702d1ac9156dde59cbf1fd19f89fd3e121f8bb1ff05272097eff0019ca816e18010000",
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
      "Thu, 29 Oct 2020 22:09:46 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-9-1604009372790",
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
      "db",
      "30",
      "14",
      "fd",
      "2b",
      "91",
      "f74a9b4003692a55a32a61546a534853609ba6c8716e32431a87d88131d4ffbe6b8732d824788aed7bce3de77ee489dcf22a232392f2e2ae85e6f1d38d48c91e01450b7c3db9fb757d1dcc6378f8f67be1f1f38bdcaded8bf118115cb324ddd425f4a4681b0672b45ef58b46b4356d84e861a29edfdb3f725cc7f107de81e73b489350e6735edd22f9a752b51cd9f64eba5f085194406b2efb4c6c5edeedfb03bb6ec40d3025edb78a368a48fb5dcdcfa5605471518dd72bd46f2534096c282fd1c15f62961ebfcddce774d32f107ccf1950c6445b29ed0a533051e5bc681b93958c9e8871f9ea4056c13c98c6161365bba9928a6e60cfcaa8a2897aacc13a8d960b6b169e2ea3c5249e2dc364353d0b1693fe74395f2fc2957575164481a5685a82e15a63ebd8dc42bca07e0652f1caa8c7fa592b3ff767f6ff503401a52574c1c4738ee8fed0f1d33cf5583e1c1ca6b903693a4cbd433a481de6bbe0662950e41951c3a295a8bc0c3ccfcb9dc44f3d2771b3cc4bfcc1419e3027f5876e3ea403c8c9768f3c345cc10997b590bceb10b98a667190c4d13a9c4ee2c09490d3b654279d315dc06b8f0a0b44d03b356d75940b54d2ed9e8571104da6f1ec32e8263c8782b2c7d51dce38a7a50444d3069ba7a059880c1b46c2c9223841b099d8f92e28c9e8fb13d13dd72e5eb5fc851ee300b55d65be641547b3f08bb1b3435cd2b23590fbeea0cbc879a94d6f7f201057b44b422ed641f495744f11e4d040c53e1e26824de0a31f6db7f608c5c54715a9f08e9bc3a4d6600d741bc44db13bf6f0c81f98",
      "df54d146fd1bf3f65d77d7339d4367840d54eab9a06eedb1ce4eac952f200ce2f043d3abed1f98975ef574040000",
    ],
    [
      "ETag",
      "DqxXXELTewZzM7iPQf4p/Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1604009372790"
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
      "4fe3300c86ff4bf8da491d373656890f1d0c98d46db07512e284a6d0b82590c6254987a669fffd9c02e3749c54beb4b6fb58f1ebbcddb117a9058bd8a32c5e6b30dba302dcad0f16606be52cbd2ad41658c0c0f182c819d69b69f862574f77358cf242dfebcb617c764684cd9ea0e42cdab15c82129645bf774cf312a82d4355977add640173dbca1797e96232bba2bc44e1f3d92a49e2513266fbe0d028b8e3eb86ff41dbc33e60cff8b8801c0ce80cfc2c95c167c8dcc4cbb4bcac14742cd62603cb1ab8f95018ac2b6e103b54e90c3bdd7ed80bc3e1afc1f1601812a730e34ea22674b5a4f19843c7d502df4824eb1e13619a9804e7cd734375291a213e9cccd27eaf99ef6f2097c6baf79d7c821fdafe2515ff21481720551b54801660da2859adb91006ac6d25d1ae79551db0d17c9e7c83b81606a5680737b205506e73002e9379fcbfd5926dbe767511a7e36f8475648603924ea6e3651a4f6f3cf7f071bfa3ad037b6390bc62c1dba41bf64e4f06fdf0dd39e7e8dd44e744ced410b08cd30f702d1d8b72ae2cecff00faa5c84a5e030000",
    ],
    [
      "ETag",
      "NouvM0ksUhXueBfgnZnF9A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT `stamp` as __result, `id` as __pk FROM `profiles` WHERE `id` IN (?) GROUP BY `id`, `stamp`",
        types: ["NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-10-1604009372790",
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
      "db",
      "6e",
      "9b",
      "40",
      "10",
      "fd",
      "15b47d69255ff00d6c4b519a3824a5b5718a71a2b4aaecdd65a09b6096b04ba234f2bf77003b97564a9e58cd9c33e7cc85477223d2908c0913f16d01f9c3876bc9488380a6314693ae979b577f02383db384a37ff4d9f1d76ff707078810254bd14d964053c922e7a0c6cb452bce6591d15cca26166a76cc66c732fba639ead95d7b64224f41124d457a83ecdf5a676adc6eefb55bb19471023413aac5e5e629debeebb6b35c5e03d7aafd5ab28d2aaafdb6e8612239d542a607cb051a2814e42bd85091a0856766c83ebf2edd1274d38a117c273850ce6591ead21696e0328d445ce45555327e2495cd170fb270a6ce2430d64a63cdb54195b15ae5a08a44378cb5087791ecc638f5e733638ddd452201b5362ebf38be53435ccff878f8c938f3e7cb73e3f8aa0a36f625d145084a8bb4f210509640a9bf1b93fbff724a02d554419d5cd9a6453b4373c42266f368d81bb0c804c686cc1ed01e33f9a80ffd9001459e2eab572c9a62e794b2e1c0eaf522d6899805d40a6d6a0d7968f5f8c8866e37ec50304736d936c87d2e349c08954925ea59914bdf0d9c55e02fbdc951e0546d4414e772529b2b9b78e9536393087aa3af6d99151295cac1bb5ee0f84793c0bd70ea5d4f21a6fc61718bdb8e68a200d134a71bd090cf64884323e7f3851bb873ef688a8c6a81e77b8422e39f8fcf84e021aba6acab2ff19633c7772795833de482264585b9ab1fa443b6db5f88c0cbace9e4fbd2f1af481df221821c52fefef2105c25defdc1f6d78e58bc7794c183d1024f85ab5284e7509f8cd854f676eca13d1af44805cef5bfb9616760ee6753d6282b",
      "c20652bdeba8be766cb4162bd4130893b869cff5ce30fb177dbf73806d040000",
    ],
    [
      "ETag",
      "l2Nr0YzTeFG6iEtZ4bBJKw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1604009372790"
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
      "000002ff6d904f6f824010c5bfcbf40a0d54a962e2411baa266a15b597c69815078a024377178d317cf7ce6293f6d0cbfe79fbdee4f7f606a7b438400ff669f255a1bc3e24a897e610a2aa32ad782ba9500816a016093b155dbcd7f7383e775bd5a51c55e3eef28d06fd3e3b54f489b980de0de214b38382dec70d0a9123c7763bd94c649bbe9646594f66c16a3d982d58cae960a4f9663a1d0ca701d4d69f6079fa0d4de6eb601484ff45b6b50547da8718a3c42242c3514a3a62a427a6a2127999a1ada892112a68cccd4322a92a8524b259b15dc7769f9db6e3f8adce53c777d8985124744a057b372b66034d5a64215db821b86c90cd91cbc6cd7a36f2a3d7753ccf77fd76e0377d1ad5606e7f060caf1ad54212d3283420ce1dea850ca8e6025a56684124f85fc7a9bedfeb6f5a44d5d5b4010000",
    ],
    [
      "ETag",
      "sow5FVffv83uwpGuH8QOoA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "1dcf4b7282300000d0bb642d8e1011d31d5f2305ab49a1c086a1101110f945013bbd7b9dbe1bbc1f90a4291b86983715bb81373027125aa6cbf776a5adc773b64be8f824e3ca9b2c71e205247b2c62b1fea043df612e0efaddcf293db8bbd671515460829891e919ff3ac665aee29bec55ca8cf028740fa5c45783438534f5d32b033ae30b8c7ad7b6a56fff2113075a41b0351d749d481d8b9a2209929a6e02f2c9e38d6da9ea554051840ea6ed5e2aae1c1c4bd1c3b413f384867e4a3da3bc1b669377fb630577492bdc350b5be7b06edc4277f56cbbb64f23580036b545cf86b87865a18cd002fccf633eb7ecd5d758d2b31efcfe016f49f73c18010000",
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
      "Thu, 29 Oct 2020 22:09:48 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-11-1604009372790",
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
      "5d4fe24014fd2bcdecab402b208584ac2c542581b2b64576b3d934d3e1b68e964eed4c31c6f0dff7ce545c8d893e7566ee39f79cfbd16772cf8b2d199184670f35544fdfee44424e08289ae1eb66711bd6c3eb5f7253fe8866a1bb712ff7dbc7f118115cb324dd9539b4a4a82b0672b40edb5925ea925642b43051cb715ace99ddb3ed6177703a18dac89390a70b5edc23fb56a9528e3a9da3763b1322cb81965cb699d8bdbe77f6a79db21277c094ecbc97eca08aec7c2efa3d178c2a2e8af13a4403b5842a861de5395af8cfdc26e7ef53b739ddb53304ef3903ca98a80ba56d610a268a94677565b292d1333136df1c48e82dbc69643191d7bb222ee80e4eac2d5534564f255817c16a69cdfd8b55b09c44f3951f87d32b6f39694f578bf5d20fadcd95177896a2490e866b8dad7373f3f182fa5b908a17463dd2cf5af9a541f38f63d1049496d004e3817d461dd71e26693260a9dbed27a90d49e226833eed26361bf6a0b74d8022cf881a162d44d175dc2e7306fd98f5fb10f790170f539ac66ed7a536b353803e90c30979acb8821997a590bce910d904f3c88ba360ed4f2791674a48699dab59634c17f0d6a3c20211f4494d071de5029574bbe77ee405936934bff19a092f20a3ec297cc019a7349780685a61f314544bb1c586117fb2f466083613fb790c4a32faf34c74cfb58b372d7fa54738406d57992f09a360ee5f1a3b47c40dcd6b03d937075d46ca736dfaf01781b8a34d1272bdf682dfa4790a20850a0af6f530116c025ffe6ac7bd472c6e3eca4885775c1d26b508aba059216eaa3db25d77d01f1003aed487d8d0718e4dd3397446d841a15e2a6af61e0b6dc46af90ac2204edf37cd3afc03a3be853a77040000",
    ],
    [
      "ETag",
      "WLhSu9QXsWpBTDS8W8Gvdw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1604009372790"
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
      "02ff8d93514fa34010c7bfcbfa4a13b0bdd692f840b57736c156293e5d4cb3b203b7ba30b8b3d4d4a6dffd06f47a97d3045f6066f84d76feb37ff6e249574a84e24117cf0dd8dd4901eeb60d12a0c638e2578d1581f004385930f99a3c130d87b753583f9de5c38b08a7c1aa383f6782b25f504a11ee45aec12812e1cfbda86409dc96a169ca6ad3659e70bbba2daed364b1fcc17989aacd9777711ccde2b93878c746259ddc74fc17daee0f9e78c4870472b05065d0ce525b7c84cc2d5a9924cbdac080b0b11990e8e0ee4361b1a9a5451c706510048360ec8f7c7f3a9c9c4ea63e830633e93456ccdead793ee1d04993e00bab14c12913b68b5971de3db75cd7aa53d2868b653a1e7503fe0be4da927b5bca1ff05ddcffa4915f04f906b4e9830aa814d83e4ad71ba99405a25e126923ebfa88cd56abf803242b6551ab7e70ab7b00e3b647e07bbc8a3e5b2dfbe6efae2ea374fe8120c76e3822e9e27abe4ea3eb9b96bb7fbfdfd9ce01dd5864b310b43e09fcd1d9b7c9d87fb3ce05b676e27342671bf04426f90fb8d24e84b9340487dfb0616cf95f030000",
    ],
    [
      "ETag",
      "zRqss33Q9eSk8f3CAo91Og==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT `first_name` as __result, `email` as __pk FROM `profiles` WHERE `email` IN (?) GROUP BY `email`, `first_name`",
        types: ["STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: ["ejervois0@example.com"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-12-1604009372790",
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
      "db6eda4010fd156bfbd2aa800d068c91a284262eb54480189328aa2ad8b5c7ee26c6eb78d769a3887fef781d7251a5e4093373ce9c33977d24b73c8fc998309ede55503e7cba118cb408289a62746a15d776cf65aebb1c98f96c72d19fd2af17474788e0354bd25d91415b8aaa8c408ed7ab4e5a8aaaa0a5106d2cd4eef6dadda1d5b72cd7767a8e6b214f4296cc787e8becdf4a15726c9a07ed4e2a449a012db8ec4462f71c37ef7b66518a1b889434df4a9aa822cdf7458f331151c5457eb45ea1814a42b9811de5195a7861c6ece46de90ea7bb4e8ae07b1e018d2251e5aab685252291273cad4a5d958c1f89b6f9ea83acbc99771a1adb8497526d72ba83ad41a5b1d99420ab4cb58cad76f0142c6e8defc1e2dcd8629709cf406e8dab1f5ee03da3fcb9f1f9f88b310d16eba5f1edfa106fbd1140633148c5736d2ba42c83dad2d3e4fcfff75513a8a2129ae4c6b186b43bb25c9630274a46f6802516303662ce80dacc8adc3ef463061479aaaeae593417f9703460e044030b1c66b9f170d08b29503b71ec91d3efda7d27ee45ccb60664df227f4aaee08ccb4248de8c8f5c057ee86dc2603d3f9d849e6e23a138a5b3c65cddc46b9f0a9b44d03b7dedeb2c17a854efc29f875e30390dfd4baf59ff0c521a3daceef000129a4940342d71820aca7311e3d0c872b1f2437f319fcc90a177ba3c202419ff7c7c21840f859eb2d2bf641506fe7caa0d1c109734ab34e4bef92070833725b8b44ee0aff6adaf6abfff852cbcdfa622b9587bc1356942012450421e7dbc4f04ebc487cff0f026108baf0265a4c2ff783d91ac45a2129a2be2bbdacc813d728743876870a9fecb8d86ee615c758dba22ec20574f1d356f021b6dc42af90cc2242e7fae27b7ff07dec7a15f93040000",
    ],
    [
      "ETag",
      "G0pY329b99P5/nLAQ4Ga+Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1604009372790"
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
      "ff8d90d14fc23010c6ff97f3753303cd0824243a4294841019128d8690d21d65b0ed6adba148f6bf7b1d3ef8e84b7bdff57797efeb190e7995c10036b9faa8d19cae14bab92f52b475e12c5f9a2a8b10003aa1984cdef44bb28bfbe3c9b79ac78b3813a357a5864326acdc61296070866d8e456661f07e864a94c863ebb5693732e64eda7716cfe964f6c0baa4ccebd9723abd4fa66368823f53faf09f895513c09e36296ed16025d17bd086f628ddc4c7b3a2d40586966a23d1420bb70fca50ad85210ab91376ba61278e6ea3a87fd3ebf6fa11830549e172aa985d2ed81a3872a248e993d3418701d3961c74db9e476e8f4d8e6d0a2f708fe648b98deef0ab75712da9f48e57bfbb929343fb64888d59f49ea28bbf1179da7116676a0c400afedec7dc5d74f30389cb9556bb010000",
    ],
    [
      "ETag",
      "BZpWBh69EIzgQ6S6daCXgg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "cf4b7282300000d0bb64ed384c804aba33ad50948f55022d1b2624292095444030767af73a7d37783f80322686a118652b3af00c348568c9963b65606b1647c2267cf0ae55c2919a280e0c95af2f563e5d36b5c53ed6bd1f061e33dfbb990f9a1bb1acada1bb99115f873a70b78d47dd4455fa3b4c1ab3c26353bca650424dd066eff93e81a572f6bbcc87e72321193c50497cfb6ee8f633c65ada2f316a5df374109ea37391daa9eae1f6aec6f68b757865190ea764f2a23a8c60779acf79fab4aade5c1e65d70e95c23583b0a25c8e654f64680494cf6001c44d35bd188ae691356d8416e07f5e8c5a89471f0bda8b1efcfe01133e5a4e18010000",
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
      "Thu, 29 Oct 2020 22:09:50 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-13-1604009372790",
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
      "6f9b3014fd2bc8fbb8269090b714ad514237a484b484b47b6842b631cc2d608a4da7a8ca7fdfb569ba5695da0f08ec7bce3de73e784477bc4cd00c119edd37ac3e7cba15049d21a67006b7767a55dff2e27e7548bcc94ff7fb673fbfbccce6734070cd92b8a872d691a2a92993b3fdae9bd5a2a9702d440712757a6ea73772068e3375c7fdf1d4019e6479bae6e51db0ff2855c9996d9fb4bb991059ce70c565978ae2f9de7ee8db552d6e1955d27e2d69838ab4df17fd920b8a1517e57cbf03038d6475cc0acc73b0f09f9990f3d7a9bb1c17dd0cc00f9c324ca9684aa56d410a2aca94674d6db2a2d92332365f7ca09db7f696914545de14655ce2829d5909563856878a5917e17663f9c1c536dc2c227f1bc4bbe5376fb3e82eb7ebfd26d85937dfbcd0b3142639335c6b6e9d9b530007d04f9854bc34ea91bed6ca4f0df2df8e4513405ab236188f9d11ee4d9c2949c998a61377485287113221e321768943a703364808c3c033a286854b5112d24f5cb747e39183493c183a2cc6fdc1309e8c27d471a70378303a9ea1bf35576cc56525246f3b846e423ff2e228dc07cb45e4991252dce46ad51ad305bcf4a8a04000bd53d35147b90025dd6e3f88bc70b18cfc6baf9df09a65981e76f730e314e792011ad7d03cc5ea8d48a06128586cbc1580cdc42e4f418966bf1e91eeb976f1a2e5cff40806a8ed2af346bb28f483afc6ce09718df3c6401eda0f5d46ca736dfaf81b80b0a36d1274b5f7c21fa8bd0a59ca6a56d28f87096013f8f0573bed3d6061f341462a38c3ea50a94568cdda15e2a6da137bea8c7a4364c0b57a139b38c353d3740e9d9115ac544f15b57b0f85b6628d7c064110a61f98661dff01b91bd64877040000",
    ],
    [
      "ETag",
      "/fQrjimqDydE8Z3X+IlPPg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1604009372790"
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
      "02ff8d93616fd3301086ff8bf99a8aa4cd5a1a691f5228a352da8e36139ad05479f1257838be603b85aaea7fe79c8d0e31a4ec4b7277794ebef7fce6c8be4b2d58c2ee65f5a30573785381fbec830dd856394baf06b505163070bc22f2ea6d7cf1451ec6bf2662348cf59447f5ed32bdbc24c216dfa0e62c39b252821296255f8f4cf31aa8ad40d5d67ad765017387c617b7f966b1baa2bc46e1f3d54d96a5b36cce4ec1b95170c7771dff8ab6bb53c01ef07e032518d005f8591a830f50b885976979dd2818586c4d01967570f7a132d836dc200ea832884683681cc661381d4d86936948a0c2823b899ad89b2dcdc71c3aae36f89354b2684884e962525c76cf3dd5a5e894f870b1cac77137e0df40298d758f4bf9033e89fb9754fc9520dd80547d50055a80e9a364b3e34218b0b69744bbe34d73c666eb75f602e25a1894a21fdccb1e40b9fd19f898add3ffad967cf3bcab0f693e7f4158476e3823f96239dfe6e9f2da73774ff73b3b38b0d706c92c16bc4fa2307e773119878fd6798fde4e744ee24c0b012b38fd019fa46349c99585d36f389c14015f030000",
    ],
    [
      "ETag",
      "G/45Wiy6x7d324n9a1mYMA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT `ltv` as __result, `email` as __pk FROM `profiles` WHERE `email` IN (?) GROUP BY `email`, `ltv`",
        types: ["STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: ["ejervois0@example.com"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-14-1604009372790",
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
      "e2",
      "40",
      "14",
      "fd",
      "2b",
      "cd",
      "ec97dd04e8832294c4286a57bb41704bd198cd06a6e5b63bd2766a678a12c37fdfdba9f888897ea2dc7bceb9e73ee689ac59be224312b2e4be8272fbed8e87a44540d204a3c6c5af47335d9fd8f3073f7bdc8e07a13e188f0e0f11c16a96a05991425bf0aa8c400ce7b34e52f2aaa025e76d146a9b76db3c306cc370ba7dabef18c81390c66396af91fd4fca420c757d5fbb93709ea4400b263a11cf5ee2fac6d28b92df412485febea48e5584fe79d1a3944754329e1fce6768a012502e20a32c450bafcc5578fc5ebac368d64910bc6111d028e2552e6b5b2811f13c6649552a55327c22cae69b0f3273c7ee69a02d53b9596a54688b4509a24a654b5baad2cfc162adfdf4a797da12db8b590a62a9dd5cb8befb82f226daf7a31fdab93f9d5f6927b7fb78ab51462b2b1092e5ca4840c3146a13cfb3f23e6ea82650490534c945df38a0e6c070c238ec47f1a0db0b6303c27010f67bb41b1a916383bd0a81224fd6ea8a45736cbf67583436a965766d2beadb96d5a3a103d4e99930b02cd4a451688045762df2503209674c145cb06660e4c6f7027711f8f3c9e92870551b31c5f19c35e6ea26defa94d824823ee96b576719c74af5f4bd49e0faa3d3c0bb769b858f21a1d176768f2b8f692a00d1b4a41948282ff90a8746aea6332ff0a693d118196a8b577b8420c33f4faf84605ba8294bf54b6681ef4dce95813de29aa695826c9a0f027778459c09e3181e956f7547bbdd5f64e1c5368ae4f7dcf56f4913f2218612f2e8eb7d225825be7c78fb5780587c07584648fc",
      "8fd71389ba48544273452cabcdecd98ed9b34da2c0a5fc903b1838fb71d51ab5226490cbe78e9a57808d36c52af102c2242e7fa226b7fb0fb4a19cdc85040000",
    ],
    [
      "ETag",
      "0HJx1lkB4UwRmxyL8b/8LA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-14-1604009372790"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff6d90414fc2401085ffcb78b4252d22041212c188121b9402170d21cb322d85b65377b71442f8efce16133d78d99d99fddee4bd3dc33ec937d08375127f95a84e37319aa92d42d4656a345f05e51ac101342266f2a3da7be56da6aa51bbace4619bc5afd328eef799d0728b9980de19a204d38d86dee719729121cb562b556f64cc9c0a3b19056f8339b7196d6c3b5904c160183cc1c5f9232af6bf82d93c1c4f9eff532c2f0eec681d62840a7389d642a16887d28c6d3a2db222455753a9246aa8e1fa215654164211b93c71fd96ebb7bd96e775ef3acd4ed7633025294c4239b38b195b034346a421551c0e7c06545d72cea83e0f3c6ede771b7eb3ce615bdca13a50a2bd073cd63e1a9232eb79f9b36d7832a8df15b1358dd6957775f84896369cc6a8121d9082fff72531d7fef20d1e271836bc010000",
    ],
    [
      "ETag",
      "Zwk0u+mrwF6uwcvhmgKQfg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "51",
      "6e",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "f45b0d538b657f20682d425418c857d3749dab80625b91baecee337b37783f80712eb4a6e65a8b0b7807964dbd099fc49d13cc1f9fbd0b37edb53dad4a4c2244cae6a9116f9ae9709efbe947d648e334fbe4965624a1d5d21ab38a7c193db770973f8b781de3d671bf6685d70fbbc48deb754a52df68cb095cca1bbc277dd82ec665e123145ec3b5d9eaf02c8ce1f5f87b166cf09df96941fb2e442c906907d1431d31f4760e9d4a5e44cb60a18a438969ae728c4f3c234a3867974a2d2b662fa12b6ba3b3cae2f6d848348cdff66004c4d049253495afec0c7ade08fccfa9b19d78f503c19450e0f70fe17fc04518010000",
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
      "Thu, 29 Oct 2020 22:09:52 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-15-1604009372790",
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
      "6fda3014fd2b91f7b59000e129a11541da2241d84268554d53649b9bd46d8869ec744315ff7dd74ee95a556a3fc5f63de79e731f79260fa2d8921161227baca03c7cbb978c9c11d034c3d7bfae7fb87d9c2976e7f72f55b585bbb0d59f8cc7881086a5e86e9f4343c9aae4a0469b75332b65b5a7a5940d4cd468751bad9ee77bdeb0d36ff7871ef214e4e942140fc8bed37aaf46ae7bd26e66526639d0bd504d2e77afefee53dbdd97f21eb856ee7b49175594fbb9e8f75c72aa852cc69b351aa8149409eca8c8d1c27fe6969dbf4fdd1474d7cc10fc243850ce655568630b537059a422ab4a9b958c9e89b5f9e640d6c12298c60e9779b52b9282eee0ccd9524d137dd8837311ad96ce3cbc5845cb493c5f85c97a7a152c27cde96ab159866be7e62a880247539683e53a63e7dcde42bca0fe16941685558fcdb3517e69d0fce3580c01a515d4c1a4eff5686be00d59cafa3c1d74ba2cf580b101eb776987797ce883bf65409167452d8b16b2e8a55e9aa63e2403da85c4f7989f50e60df1d4f33bc000dabc4d8e67e44f2934cc84da4b25ea0e919b681e07491c6dc2e9240e6c0929ad723dab8d9902de7ad45820823ea9e968a242a29269f73c8c8368328de7d7413de10564941fd68f38e394e60a104d4b6c9e867229b7d830124e96c10cc176623f4e414546bf9e89e9b971f1a6e5aff4180768ec6afb25eb389a8797d6ce09714df3ca429eea83292315b9317dfc8d40dcd13a09f9b909a25b523f4590420905ff7a9808b6812f7fb5d3de2316371f6594c63bae0e5746849750af90b0d59ed8c3b6efb5880597fa43acd71a9c9a6672988cb08342bf5454ef3d165a8b55ea1584419c7e689b75fc076380639c77040000",
    ],
    [
      "ETag",
      "x/4yYqDsbh47GsudehN17A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-15-1604009372790"
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
      "516fd3400cc7bf8b794da574742d8db487140a54cadad1a43c0c4dd52de7841b9738bbbb9495aadf1d5fb615c490b297c4767ed6f9effbe7003f542d21825b55deb768f66f4a745f7cb046db6a67f9d5506d110240274a26937bf1eb6b1a4f3734916999c8cdf43a79882f2e98b0f977ac04440728146a6921fa76805a54c86d39e9b6aab75d1680db37be9866ebc5f213e715499f2f374912cf92391c8353a3144e6c3bfe156d37c700eee8768d051aac73f4b33486ee30770b2fd38aaad138b0d49a1c2d7470f7a134d436c2100db832189e0f86e3701486d3b793b3c9346450532e9ca29ad94dcaf3812327f49a7eb24a189e3161ba981517dd73c775253b253e5c2cb3f1a81bf06fa050c6bac7a53c834fe2fe25b57825c837a0741f54622dd1f451aad90a290d5adb4b92dd8aa63961b3d52a7901895a1a52b21fdca91e40bbdd09f898ace2ffad967df367571fe26cfe82b08edd7042b2c5e53ccde2cb2bcfdd3cddef6cefd05e1962b358f43e1986a377e79371f8689df7e4edc4e744ceb418402ef80ff8ac1c4485d0168fbf01341adfb45f030000",
    ],
    [
      "ETag",
      "LqazVSA9Uo7dSgLdU9ZLxA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT `ios_app` as __result, `email` as __pk FROM `profiles` WHERE `email` IN (?) GROUP BY `email`, `ios_app`",
        types: ["STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: ["ejervois0@example.com"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-16-1604009372790",
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
      "0000000002ff85536d4fa34010fe2b64efcb5d525bec0bd826463de53c72b5554a35e67269779781db0a2cb24b3d35fdef372cd69798684202cc3ccfcc336f8fe446e41119112692db0acafb2f2bc9488b80a6095aaf1fae7e156e35397d1838fc6295f7791c8477fbfb8810354bd1ac486147c9aae4a046f3593b296555d052ca1d0cb4b3ebe063f76d7bd873bbeed0469e82341e8bfc06d97fb52ed4a8d3d9e66e27522629d042a83697d9b3bdb3ee768a52ae806bd5799bb2835954e7e3a407a9e4540b99efcf6728a052502e20a32245092fcc881dbe0ddd16346b27085e0b0e947359e5ba968521b8cc639154a5894a468fc4c87cf54166ded83b0eada5906a418b626951652d1625a82ad52d6b69d23f198b1beb47303db39658622c52504bebeaa71778cf287f627d3df8669d06d3f9b9f5fd7a6b6fbd44474911282d722328a42c855acc53cffcf793aa095453058d73e1da0eddddb3872c662e8ff77a0316dbc0d81e7307b4c76c3eec433f624091a7ebe886457399db91cdfa31670e44947601b1346671e40c99c307ddc1609752db75dc21d9b4c85d29349c085548259ac691abc00fbd4518cc27c747a167ca8829b6e8a4115717f15aa7c62211f4415d9bda2b2466aaa7e04f422f383a0efd4baf19fc1812caef67b738fa98a60a104d4b9a8186f24c46d834723e9df9a13f9d1c8d9161a679be452832fafdf84208ef0bd3656dde641606fee4d408d8222e695a19c8baf920b0c26d9242d987f0cfe836fbb4d9fc41166e6e13915cccbde09a34a600622821e79fcf13c1c6f1e9016eaf01b1780f984669fcc7ede1aa4ec24b68b64864b5982d7bd873ba3d62c0a57ee7739dc1b65d758c3a226490eba78a9a6bc0429b64957a06a113873f319ddbfc07285d66e08d040000",
    ],
    [
      "ETag",
      "YzWKp7uNGz56cQjn4cfRTw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-16-1604009372790"
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
      "6f",
      "6b",
      "c2",
      "30",
      "10",
      "c6bfcbed6d1d55c74441983aa742d1adea700c9118cfaeb5ed7549ea9f89df7d9738d85e0c427279f2bbe37972865d9c6fa005eb38fa2c519d6e22342fb6085197a9d17c14946b040fd08888c941ed310f67f5b7a89ff4c205be0e17c3afa743bbcd84961f9809689d611b63bad1d07a3f432e32e4b6d54ab9898c99536195ee6412f43b631632da58613c0f824e37e8c3c5fbd356ec7e5ba6b370341efcd7b1bc7890d03ac42d2acc255a1385a204a519d97c5a64458a154da592a8c1c1ee2152541642115558a954ef79f977bedfac376a8da6cf604a5298987266e753b606868c48433a703ca832a05cc949b76edfb36c54892e85bd60826a4fb1f61ff0e85cdc4acaace3e5cfaceec9a07e56c4c6345a4ffed55f8f2c6d388b9de78114fcbfc3d85cef976f84de8edbbc010000",
    ],
    [
      "ETag",
      "G2DnRT3YgEjCRXeVHXHzFw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "300000d0bb64ad0e20a94377222450102a5fcb86e113302031028e80d3bbd7e9bbc17b81ac28c830a4e3ad250c7c823993944db1b1b8a0ca4f5295aea3ea8d87bb6c7ae003951774f9c84e8d58bbeb693f4a12636164c8f72c5ad3ee744ed504fb5e34d8a746cb63185aa860f2f3079a6e0f1572d8dbbb81e6f19123140ab45596c80b3ac2b1b6bbce761143cde3ebb3b14dcab922cd38898c79718a780b0b07debf4251b807d5d8ea46925f0db3b6cd89218c15e739cb7a60a15b6a34e1c5610f7a39968e1ab7ec1bf7feec8ae2b4d43bffb81f6ab00264e2b427434adfd92d549415f89fa7e3ccc9bbaf92ac273df8fd037e8b3b3618010000",
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
      "Thu, 29 Oct 2020 22:09:54 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-17-1604009372790",
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
      "0000000002ff85535d4fa34014fd2b64f6d5b658a9409366edb6b8366969a55463361b320c171ca54c65068d31fdef7b67b0aec6449f98997bce3de77ef042ee799591214979f1d040fdfce34ea4e48880a205bebaabd5e5a4e0d3ab077bb9f2c2f1cdcd2fef763c1a21826b96a4db5d091d299a9a811c6ed6dda216cd8ed642743051e7d8ed1c9fda8e6dfb276edff56de44928f339afee917dabd44e0e7bbd8376b710a22881eeb8ec32b17d7bef3df67bbb5adc0153b2f751b2872ab2f7b5e8cf5230aab8a8469b351a6824d4096c292fd1c27f66969e7d4cdde574db2d10fcc81950c64453296d0b533051e5bc686a93950c5f88b1f9ee40d6c13c98c4161365b3ad928a6ee1c8caa8a2897ade81751e2d17d62c3c5f468b713c5b86c97a72112cc6ddc972be59846bebfa2288024bd1b404c3b546d699b9857841fd0ca4e295518ff5b3567e6dd0ecf3583401a525b4c1c4b54fe9b167fb699eba2cf74e06696e439a7aa93ba027a9cd7c079c2c058a3c236a58b412151bd86ee6e6a789eff84ee2f8e0251e735842072ccf3227cbfbae47f647e4a9e60aa65cee84e46d87c875348b83248e36e1641c07a6849c36a59ab6c67401ef3d2a2c10415fd4b4d7512e5049b77b16c641349ec4b3aba09df01c0aca9ed70f38e39c9612104d6b6c9e827a21326c1809c78b608a6033b1d52128c9f0cf0bd13dd72edeb5fc8d1ee300b55d65be641d47b3f0b7b173405cd1b23190c7f6a0cbc879a94defff221077b44d422e37417443daa70872a8a162df0f13c126f0edaf76d87bc4e2e6a38c5478c7d561528bb01ada15e2a6da03db7706769f1870ad3ec5dcfee0d0349d4367842d54eab5a276efb1d056ac916f200ce2f443d3acfd3f4b5c37a177040000",
    ],
    [
      "ETag",
      "7PPQCgiDVq0OP8NAYYB8hA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-17-1604009372790"
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
      "4f",
      "db",
      "30",
      "10",
      "c7",
      "bf8bf79a4a29946644e221dd3aa8165a68c3c334a1ca8d2f9999e333b6d3ad54fdee3b07d64d63527849ee2ebf93ef7ffe67cfbe4b2d58ca36b27e6cc1eeded5e06f43b004d72aefe865503b601103cf6b22b5f8bcb1975fb29f57893973d5933a7df44fb7171744b8f21b349ca57b564950c2b1f4eb9e69de00b595a8da46afbb2c627e674271552c67f34bca1b14219fdfe57936c9a7ec101d1b05f77cddf16f68bb3f44ec01374ba8c0822e21cc622c3e40e96741a6e38d513070d8da121cebe0ee436db135dc220ea832182683e1381ec5f1f96972929cc7042a2cb997a889bd5bd17ccca3e76a893f48251b9e1061bb981457dd734b75293a25219ccd8bf1a81bf06fa092d6f9e7a5fc065fc4fd4b2afe46906e40aa3ea8062dc0f651d2acb910169ceb25d1adb931476cb258e4af20ae854529fac1adec0194df1e814ff922fbdf6ac9377f76f5312ba6af08e7c90d47a4985d4f5745767d13b8fb97fb9dec3cb81b8b641607c127c378f4fe2c19c7cfd6f980c14e744eea6d0b112b39fd0157d2b3b4e2cac1e117652e893c5f030000",
    ],
    [
      "ETag",
      "ndKbrGYAxH7p5sfzl3qtzQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT `date` as __result, `email` as __pk FROM `profiles` WHERE `email` IN (?) GROUP BY `email`, `date`",
        types: ["STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: ["ejervois0@example.com"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-18-1604009372790",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b4fe24014fd2bcdec97dd0468a14029895157ab3641704bd198cd06a6d3db3a5a3ab533d52586ffbeb753f01113f713e5de73ce3df7312fe481e731199388a78f15949b6ff722222d028aa618cd5cc7bdbbbbe89a9bb3aa8823b07a6a78f17c7080085eb3245d1719b4a5a84a0672bc9877d25254052d8568a350bb3b6a778756dfb25cdbe939ae853c095932e1f903b2ef942ae4d834f7b53ba9106906b4e0b2c3c4fa356e3ef5cca214f7c094343f9634b18a34bf2e7a9809461517f9c1628e062a09e512d6946768e18d1947471fa53b9cae3b29829f3803ca98a87255db420926f284a755a955c9f885689bef3ec8dc9b7827a1b18aa9829541a5b15c9620ab4cb58c95aebd0b160fc65930bb3456d85fc233902be3e6c20bbc57943f35be1ffe30ce83d9e2caf879bb8fb776d2682606a978aead8434caa0b6b19b96ff794735812a2aa1492e1d6b48bb23cb8d92c861c9c81e44890551348a9c01b5238bb97de8e3e229f254adae5934173962e2a8dfed8d2cdbedb9f180ba76c47a2388dd118bfb3d0769b69d0c63b26d91e7922b38e5b2109237232337811f7acb30584c4f8e434fb791509ccf6963ae6ee2bd4f854d22e88bbeb675960bac54cfdf9f865e707c12fad75eb3f209a4946de68fb8f4846612104d4bba0605e5a5887168e46a36f7437f363d9e2043eff16a8f9064fcfbe58d106e0a3d65a57fc93c0cfce9b936b0475cd3acd290a7e683c03dde91e0d23a82bfdab7bea4edf60fb2f0661b45f26be105b7a4090590400939fbff3e11ac13ff7d7afb7780587c0958462afc8fd7c3645d8495d05c115fd766f66c7730e80e880697ea53ce19dafb71d51ab522ac2157bb8e9a77808d36c52af90ac2242e7faa27b7fd0798559e8d87040000",
    ],
    [
      "ETag",
      "l979hhH1/yFupdbe02t6Hw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-18-1604009372790"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff6d90614fc2301086ffcbf97533dd30222424821225212863241a4348e98e31d876b3ed5024fc77afc3443ff8a5bd7bfbdce57d7b845d5626d0855596bed7a80f1729daa92b2234756e0d5f159506c103b43265326b2525555f65ade44bf41491d9bcc634edf598306a838584ee11d619e68981eedb114a59208f2d97bad9c8983d544eb9efc743ee0a4a5c37998fc7fdc1780827efcf4cb5fbe56771349a3cfc37b13879b0a555846bd4582a740e2a4d5b5476e4c219595439fa866aadd04003370fa9a6ba929ac867c50f6efce05a5c09d169b5c376473098939236a392d9f98cad81252bf3883e381b040ce8a6e498ebe6dcb31c8a50f822f445d06471126e51ef2933e2163f1b2f978a0ae77bf1b37170b0689e35b13d83ce9938bbbc23475b4e64758d1e28c95ffc98d9737ffa066a50f60ebf010000",
    ],
    [
      "ETag",
      "i3dnopznucaXRORoshYToQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "02ff1dcf4b7282300000d0bb64ad8e808c4d7721144a15148712e88689217ccad70415e8f4ee65ba79fbf70328635cca64e82ade82573051156ed8e6d06f8ddd33b382a2c1d255209a745b4ac7c138bad919cc74c44fb6bbd78ed185d4ad47f18ce411a9c8d37db4a74a743be783fafda62ccecc75592354918e618889a18c5b723a3b569cd48addd653a406f7b9f47848bb549c3d424a9f7866346856615e4d2b41e2f23e940fa88f6ad23736d562767d04cc879214d81421fac0d921fea22f7eda6b99c5cdcffb2cd78a5dc9b2223bda99633e16eb5ca0f00956808f7d29b84cca25abe910aec0ff3c19a69e2f7d8353c105f8fd030ca17c3d18010000",
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
      "Thu, 29 Oct 2020 22:09:56 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-19-1604009372790",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b4fdb3014fd2b91f771d08434e94baa4657c2a8d4a6234d616c9a22c7bd0986242eb1c354a1fef75d3b948190c6a7d8bee7dc73ee234fe49e571b322229cf1f1aa8779fee444a8e08289ae36b39087afce6d2ff09b6f3f907d833f7ebeef6723c4604d72c49cb6d01c752343503395aaf3a792d9a2dad8538c644c727c3e3939ee339ceb0db77fb430779128a6cceab7b64df2ab59523db3e68777221f202e896cb0e13e5cbbbfde8dadb5adc0153d27e2b69a38ab4ff2ffaa5108c2a2eaaf17a85061a09750225e5055af8c7dca4a76f5377382d3b39821f3903ca98682aa56d610a26aa8ce74d6db292d11331365f1dc82a9807d3d862a268ca2aa9680947d6862a9aa8dd16acf368b9b066e1f9325a4ce2d9324c56d38b6031e94c97f3f5225c59d7174114588aa60518ae35b64ecd2dc40bea6f402a5e19f5583f6be5e706cdde8f4513505a421b4cfa4e8f9e0c9c619aa57d960dba7e9a3990a683b4efd36eeab0a107de26058a3c236a58b4129597c290ba7d485cb73748bcbeef2703604ee2f95ed775322f03cf23fb23f2a7e60aceb8dc0ac9db0e91eb681607491cadc3e9240e4c09196d0a75d61ad305bcf6a8b04004fda7a6bd8e72814abaddb3300ea2c9349e5d05ed84e79053b65b3de08c335a484034adb1790aea85d860c34838590467083613fb7e084a32faf54474cfb58b572d7fa1c738406d57992f59c5d12cfc66ec1c1057b4680ce4b13de832325e68d3fbdf08c41d6d9390cb7510dd90f629820c6aa8d8c7c344b0097cf8ab1df61eb1b8f9282315de717598d422ac867685b8a9f6c01ef6bcee801870addec57cd73f344de7d019a1844a3d57d4ee3d16da8a35f20584419c7e689ab5ff0b70806fb677040000",
    ],
    [
      "ETag",
      "m8E6iYQ5Ze/0+Xe/I2ByhQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-19-1604009372790"
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
      "da",
      "40",
      "0c",
      "c7",
      "bf",
      "8bf71aa4d0321891fa001b65682974217d98aa0a5d734e76ed25ceee2e3086f8eef3a51d9dd649e94b623b3febfcf7fd738047554988e05e153f1a34fb7705baaf3e48d036da597ed554598400d08982c9f39f97bfe6d997c6cd9b38f9367e2c76e170bdbbb860c266dfb114101d2057a8a585e8f600952891db32d24d596dda2c00b7af7d719d268be59cf392a4cf9737713c99c6333806a746299cd8b4fc1bdaee8e013cd07d82391aac32f4b3d4861e30730b2fd38ab2d6d8b3d4980c2db470fba130d4d4c210f5b8d2eb8f7bfd613808c3f1f9e86c340e19d49409a7a862f666cdf381232774423b5609fd33264c1bb3e2bc7d6eb9ae64abc4878b653a1cb403fe0de4ca58f7b4943fe0b3b87f492dde08f20d28dd05155849345d94aa37424a83d676926437a2ae4fd874b58a5f41a2928694ec06b7aa03d06e7b022ee3d5e47fab65dfbcecead3249dbd22ac63379c907471355ba793ab6bcfdd3ddfef74efd05e1b62b358f43ee987830fef47c3f0c93a1fc9db89cf899c6930804cf01ff059398872a12d1e7f0374e812a05f030000",
    ],
    [
      "ETag",
      "3xFzGcKutGuLRY9kgw06Sw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT `stamp` as __result, `email` as __pk FROM `profiles` WHERE `email` IN (?) GROUP BY `email`, `stamp`",
        types: ["STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: ["ejervois0@example.com"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-20-1604009372790",
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
      "000002ff8553db4edb4010fd156bfbd24a49ecdce3480828186a2924d47140a8aa92ddcdd86c70bcc6bb264528ffdef11a7311123cd99a39e7cc99cb3e913b91aec9983011df17903f7edb48461a04348d31ba3bbbbef5069b89ed7a74d7bb97ed7071bbdb1d1c2042942c45b759024d258b9c831a2fe6ad3897454673299b28d4ec38cdf6c0e9398edb1d7686ae833c05493411e91db26fb5ced4d8b6ebdaad58ca38019a09d5e272fb12b71f3a7696cb0d70adecf7256daca2eccf8b1e2692532d647ab098a3814241be842d15095a7865aed9d17be996a0db568ce007c181722e8b5497b65082cb341271911b55327e22c6e69b1f32f726de4968ad9446cd954595b55ce6a08a4437ac9529fe1ccceeacb3607661adb0c14824a056d6f52f2ff05e50fed4fa7ef8c33a0f668b4bebe74d1d6fd4da68670d4a8bd49809294ba034f23c2fffe3964a02d55441955c0e9d016d8f1c97456cc8a351b7cf2207181bb1619f7699c3dd1ef4d60c28f274a96e583495a9eb72703b23a7bbeeb1761b80b7a31e0360ce301ab9fdaed3e9b529edaffb64df20bb5c6838152a934a544323d7811f7acb30584c4f8e43cfb411511cd06965ae6ce2ad4f8d4d22e893bef6655648ac546ec09f865e707c12fa575eb5f409c4943fceef71ed114d14209ae6740b1af20bb9c6a191cbd9dc0ffdd9f478820cb3c9cb1aa1c8f8cfd32b217ccccc94b5f9927918f8d37363a0465cd1a4309087ea87c0062f490ae51cc13fe3dbdcd27eff175978b59522f9bdf0821b528502882087947fbd4f049bc4978faf7e0988c5b78065f086b4c0ebe1aa2cc273a8ae486c4b3335db45fa801870ae3fe4fa23a71e57a9512ac21652fddc51f512b0d1aa58a15e4098c4e54fcde4f6ff01f977fec589040000",
    ],
    [
      "ETag",
      "wFWhE6jL/9Eaw4qo1TUhww==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-20-1604009372790"
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
      "00000002ff6d906d6bc2301485ff4bf6d54a7c5f05613a7416aa68ad381822b1bdedaa6d6f97a46e45fcefbba983edc3bee4e5e43997737265e7240fd9901d93f8a304593dc4a0d7e6e0812a53ad682b3057c01a0cb488899c87bebf839d333bcedcfe6b14659d4e05ebd1880815bc4326d8f0caa204d250b1e1db95e52203b21d0eb29e4898ae0aa3f8ce62baf1c78b15491986465a6e5d773c71a7ecd6f8632ccebfa68def39cb97ff1cfb5b839df0e8410412f2004c8c42e20902ed98864a64450a96c25206a0580dd70fb1c4b21012d122c56a73abd5e75dceedcea03db03981290642279813bbdd5034a6518bd4c34f2ac85a04c8fa485da37abd18b9d97be4bd9eddb2bb53bbae63543881bc60a2f8137cd5719a016626fafe67e8a4d2a0561229a102138edf833ea3a13595d2b284060b047df53cd1f7fbed1bd3a2edacc7010000",
    ],
    [
      "ETag",
      "HdTTWeWIFbFL6Xffm33yeQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "c1",
      "6e",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "7f",
      "e9598d502a7637400484282838f442b02d8aa89416076cd9bf8fecf4ceef07e4843029b3b6aed80b7c802157f18ccc7c3e37b58ef21e8955e1707ad0cc871d58aee67405155eea351571858f8dcf766ea1382ba46b075bd81d6a0b8d24f15db20bb3e268789c497c0cddd42e9a2484365754989cd4a501b3f7ba84e4becd8e674dae22eff9deec8c9ba2eb390e177d12d80a6d5e43e34ecf16bb26e1b3bc8a2fdd5f2e10359a30525385f9a74bc42bfc6c5f7ce5d4f5db5c1725ae90afef88534d9d8eb6e92df7f6bbefc586d0a3180c3001ace7a560322bc72c44184fc0ff3c6b07cec6bec972c104f8fd034573f0a318010000",
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
      "Thu, 29 Oct 2020 22:09:58 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-21-1604009372790",
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
      "02ff85536b4fdb3014fd2b91f795b6214d9f5235aa3640a53665690a62d314d9ce4d30a471881d3640fdefbb71280321c1a7d8bee7dc73ee23cfe44ee431191326d2fb0acac76fb7929123029aa6f89a396efe34ef5cc0fc761d0eaf9fceaabf3f67d3c90411a26629ba2b32682959951cd478bb69a7a5ac0a5a4ad9c2442de7b875dcb75ddb1e7507ce6064234f41962c457e87ec1bad0b35ee740edaed54ca34035a08d5e672f7fade79703a45296f816bd5792fd94115d5f95cf47b2639d542e693ed060d540aca0876546468e13f336627ef53b705ddb553043f080e947359e5bab68529b8cc139156a5c94ac6cfc4d87c73201b6fe9cd428bcbacdae5514e777064c554d3483f16609d06eb95b5f04fd7c16a1a2ed67eb4999d7bab697bb65e6e57fec6ba3af702cfd2946560b8d6c43a31371f2fa81f83d22237ea61fd5c2bbf3468f1712c3501a51534c16860f7e9f1d01eb1840d7832ecf6586203634336e8d12eb3f9c8053766409167440d8be63277c065c9700491ebc42c72fbb417b1fea01b0d7ab1cb624e6d70fa647f44fe9442c35ca8422ad174885c058bd08bc260ebcfa6a1674a486895e97963ac2ee0ad478d0522e8939af675544854aadbbdf0432f98cec2c5a5d74c780929e58f9b7b9c7142330588a625364f43b99231368cf8d3953747b099d8c521a8c8f8d733a97b5ebb78d3f2577a8803aced6af3259b3058f867c6ce017149b3ca401e9a0329d0f20dd686aef7bf11894bda64213fb65e704d9aa700122821e75f4f13c126f0e5bf76587cc4e2eaa38cd278c7dde1aa16e125343b244cb907f668e88cfac4804bfd21e6f6bb87aed539ea8cb0835cbf54d42c3e16da8855ea1584411cbf6fbab5ff0748de7ffc78040000",
    ],
    [
      "ETag",
      "l24nzD/PeDjOT8YzGuxZCA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-21-1604009372790"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92dd4ec2401085df65bc6d6341046dc245511412407e8a378690a59d9662dba9bb5b0921bcbbb315d1a889deb433d36fb6e79c760fcf491e820bab247e2951eece62d413534c5195a9567c2b28570816a016b12187c36db6a3282a6b93de683c0fbdf3476fd26e33a182356602dc3d4409a6a102f7690fb9c890d7024acb2c5f569d057a5798e1cc9ff647f7dc67149a7e341f0cbccea00b07ebb4180a2d9615ff8fb5c5c1820dada618a1c43c40a3a590b4c140f78d4d25b222455b5129035450c1d583585259084964f3c4aed7ec5ad36938cef545abdeba76184c29103aa19cd9f98cf581262dd2296dd92534199055c986a3eafacae324ac8c98b23ff29b8d4adf5780a545498acbbf41d6bb16fc193eb06304df39915199eb13753778f07e3b8e33fd3cead6f3bb3f08a539a913e2f787dd99ef0dc7865b1cbd77761ad5581207a9d06458731a5797ada6f31eeb0d99a8f93dae96255a1008fe3b7a89063712a9c2c31b3158d9c47b020000",
    ],
    [
      "ETag",
      "bMMwmyoffu1QHNPUdA/VAQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COALESCE(AVG(`amount`), 0) as __result, `profile_id` as __pk FROM `purchases` WHERE `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-22-1604009372790",
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
      "4014fd2b64f68b267d007d4113e3762beb92d4b6525a63369b76985eda5160901934d5f4bfef05acda98e82786b9e7dc73ee635ec83d4fd6a44f02be79c821dbfdb81301a911507483b7c676d199b29dfe9cdddccee227f3f979ebf7aecfce10c10b96a4711a415d8a3c6320fbf3596393893ca59910754c5437cdbad1d5dbba6eb77a66cfd69127210a473cb947f656a954f69bcd83766323c426029a72d960227ebb6f3e9acd341377c0946c1e4b36514536bf163d8f04a38a8be46c3e4303b9846c0931e5115a7867ae839fc7a91b9cc68d0d821f3903ca98c81355d8c2144c2421dfe4599995f45f4869f3c381cc9c9133f4b5e16430726643e764b0b83c59d1b8c8b13aad69faa946a5b65c6620f348d5b4159617f208967cbdaa22e9bdf6db9b5c6104cd6ca904b9d26efe389e738c75c7dac9f9a976e94de653edd7ed51108dae412a9e94367d1a4450587ceda4fb797e05812ad4aa82cb9edea586a5db4118f45868b53a41a843105841af435b81ceec36b4d70150e4a9227bc9a28948986574c23618065beb8119b0c004665b9d6ec7b2ba2dda6a1b1ddbb26cdd24fb1a79cab8820b2e532179d54e72e3b9beb3f4bdf97838f09db28c90629f2e2a7345111f7d2a2c12415fd4b52fa25ca052311b77ec3bde60e8bb0ba75a87116c28dbcd1e7021421a494034cd680c0ab22bb1c6a691e964e6faee643c1821a39cf1f48090a4fff7e59de0efd2b2cbaafc92f1fccaf1dc61e9e00059d0282f318fd5811864bfff87085cde8a4eaee78e774baa2b0f42c82061df0f0fc165e0db3778781088c527813252e13fae0a938508cba05a191e97f65ed9b66d76bba40467ea53ac6df40ebd29721419218644bd56543d082cb412cbe51b088338e9b13bbe",
      "c4e87ff2fcbf1f90040000",
    ],
    [
      "ETag",
      "1hV5Pcy0zrWYSmw2zzhT7Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-22-1604009372790"
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
      "30",
      "14",
      "fd",
      "97ebeb66363012487c008282595007841843482997b9b1edd6b61309e1dfbd2d26fae04b7bcfe939ed393dc13eafb7d0834d9e7d34a88f5719da1737a4689ad21ade14d5062100b422636581f16cb894f1d7522d1e67af541cc6c3cde1ee8e1546be6325a077825d8ee5d640efed04b5a8906debb5f637b2cc1e9563ee93a7fe9c61455b07a78b24e90f92119c833f26b5ff354ca6f3d1c328fdcfb23a0750d026c51d6aac25ba0c4a5381d24e5c3d232a556268a8d1120d78b13fc834354a68a29099b0d50ae3dbe8268abaed4eabd38d5858921436a79ab58b1967034b5694291db81dc42cd07ee4a23bbf7e3afabad3f6353c70e9563fbec1d1a279d6c4210cbaf7a34b9621b97c96735bdd600052f0578e737bc1e76f16eb74bda7010000",
    ],
    [
      "ETag",
      "je1SCWc1xWpUJSYojwHCbw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:09:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "08000000000002ff1dcfcb7282301400d07fc95a1c30464a775514a4505e56814d86c04530ca233008d3e9bfd7e9f983f383d22c83bea743c3a146ef684e57da325b7eb6f276fdcc95bec67a42dce739b6469d44eed1bd1d98d7d6078647953ad5defae6f92332ee9737212920256be2fb19f7d56ae59caf66c977aad7867c0a4a1b88003b77e36670410fd25372e49e1a48e594c61ddeceb5b596f7232bc1888c4ba4e5a6cce6aaa347e8726f93130ddf9920a7af83790ec444d350193e34854809ded4451d348fce6232ef0b07ef41a563694f3e0f03f34adce2be2b6dd231eb76450b04535b09e869f5ca62a2690bf43fa7c3dcc2abbf85548040bf7f9d0b3cfc18010000",
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
      "Thu, 29 Oct 2020 22:09:59 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-23-1604009372790",
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
      "2b64f671aba0a2a889d91a4bb76c147711db6c361b320c173a2d3294196c4ce37fdfcb50bb6d9ab40f0466ee39f79cfbc113b9e74542a624e6d9430dd5e1cb9d88c919014533bcb54adf53a3fcf6b16787d9e147117f3527c57c3643046f5892eeca1c3a52d4150339dd6eba5925ea925642743051a73fe8f446966d599381d3772616f224e4e99217f7c8be55aa9453d33c69773321b21c68c9659789ddcbbdb9ef9b6525ee802969be953451459a1f8b7ecb05a38a8b62b6dda0815a4215c18ef21c2dfc6726f1f9dbd45d4e77dd0cc17bce803226ea4235b630051345cab3bad259c9f489689baf3ec8c65dba8bd06022af774554d01d9c190955345287128ccb60bd323cff721dace6a1b7f6a3cde2ca5dcdbb8bf572bbf237c6cd951bb886a2710e9a6bcc8c737df2f180fa0948c50bad1e36d78df27383bcf7636908282da10d468e35a2bdb13589d3d861e978308c530be2781c3b433a882d36b1c14e62a0c8d3a29a450b51d8ce880124c32861a37e64db7414c58e358ea803c3a44f6d701220c733f2587105175c9642f2b643e426f042370a83adbf9887ae2e21a575ae2e5a634d01af3d2a2c10411fd4746ca25ca052d36ecf0fdd60be08bd6bb79df01232ca0e9b079c714a730988a615364f41b512e8724afcf9cabd40b09ed8cf535092e99f27d2f4bc71f1aae52ff41007d8d855fa4d3661e0f9dfb59d13e29ae6b586ecdb0f52a2e55bac0d5d1fff221297b4cd427e6ddde03769af0248a182827d3e4d04ebc0a7ffda69f1118bab8f3252e1197787c9468455d0ee10d7e53eb3f1b19c31d1e04abd8bf57bd6a96b4d8e2623eca050cf15b58b8f85",
      "b662b57c016110c7efeb6e1dff013c0caf9178040000",
    ],
    [
      "ETag",
      "0pNIt6lhw14TgyJnb+/9nA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-23-1604009372790"
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
      "925b6f82401085ffcbf41513bc142b890fd86a2541eb059f1a63b6302876617177b1b1c6ffde596a6dd336695f6066f86639e7c0119ed33c06179ed2f5ae4479b85aa39e9a6286aae45ad1ad10b942b000355b13d918723dd815bed7aaf3e961bb1f66afa9f6ba5d2254b4c18c817b8424451e2b701f8f90b30c692d12bcccf255d559a00f8519cec3993fbea73e13b1e9c78b20f07a411f4ed66531669aad2afe1f6bcb93055bf134c30425e6111a2d85145b8cb46f6c2a96151c6b4a94324205155c3d584b51164c0a51a349add1acd51dbb65db9d66bbd1eed8047211319d8a9cd8c59cf481169af199782197e01020ab920c27d5754fe334ae8c98d21f874eabd2f715206949ca71f537487a378c3ec307768ee03bc73251e6fa420d8207efb7e328d3cfa3eebcb0ff83509a92ba20a13feacf436f3431dcf2ecbd77d0a8265250900a4d8675bb7573dd76ecf7586f85899adee36a59a20511a3bf63986a7013c6159ede005418e5d77b020000",
    ],
    [
      "ETag",
      "2HltFqpIA41lQyjvHmzitA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-24-1604009372790",
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
      "00000002ff85536d4fa34010fe2b64ef8b26b6504aed4b62bcda721e49a51e058db95cda651970155864178d31fdef3780557b97e887a6cbccf3cc3cf3f642ee791e91090979f25041f9fced4e84e48880a2095a73d78bad399fa7c1d399bb1ad3697c3e4aa6272788e0354bd2ac48a123455532909360d54d4a5115b414a283813aa6d5e91d1b96618cfb437338369027218d173cbf47f6ad52859ce8fa2e773711224981165c7699c8deecfaa3a917a5b803a6a4be9f52c72c52ff3ce9692a18555ce427c10a055412ca356494a728e19d1985dff7437739cdba09821f3903ca98a87255cbc2104ce4314faab2894a262fa491f9e14156f6c29ef9da6c19b8fec18666357973a851a9add725c82a5547da066b8a790a6b1e6d5a4f71affdf09617e84105b75482dc68d73f6dcfdec73aae76707aa89d7bcbe0523bbbd973a2ba08a4e279a3cda7610ab5aed7f639ff0fad265085b95ae77a681cd3dec81887713864f1a83f086303c270140e07b41f1a6c6c8115854091a7eae80d8be622ef0f683c1c8c422b3699655983d0b44cab17e30c2cb419c79145810e0c8b6c8fc853c915ccb92c84e46d0fc9b5e7f8f6daf7027736f5eda68c98629fe6adb8ba888f3a151689a04feadad65e2e30533d10c7f56d6f3af39d2bbbdd810524943daf1e700b629a4a40342d69060aca0b1161d3c8e572e5f8ced29d2e90d10cf672879064f2fbe59de03f174d9755f34fdce0c2f69c59a36007b9a269d5601edb07e991edf60f2270635b3af915d8de0d694d1ec45042cebe1e1e821bc79787b7bb02c4e21d601aa9f01b5785c93a092ba15d199e35f25a76fd339bb355b454fffa7af8daf5a68e5147840c72f55a517b0558689bac926f2074e2a45dc73d47ef5fd192c69f85040000",
    ],
    [
      "ETag",
      "nNRf4DiDlUwBNS9aAfG8gA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-24-1604009372790"
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
      "5f",
      "4f",
      "c2",
      "30",
      "14",
      "c5",
      "bf",
      "cbf5d12d19032190f020860c0c129d121f0c21a5dccdc1b65bdb0e5c08dfdddbe2838fbef4cfe9efb4e7f40c87a2dec108b645fed5a06e6f72b42f6e91a2694a6b7852541b8400d08a9c495975299edd3e6e937d529e964f77e25d7de7e33113467e6225607486acc0726760f471865a54c8b6cd46fb1b19b3ad72ca7cf9364da6290b15ed9cb05c2d16f793c5142ec11f9b3afccbb2be04b0a76d8a196aac25ba144ad31ea59dbb824654aac4d050a3251af0b03fc835354a68a2909530ee859d7ed48ba26177100f8611832549610baa995dbd7236b0644599d289fb418701ed975c35f3e391e5beef70f400475bff9a26ad45f3ac891318748f47d7200fe4c2590e6d75830148c13f392bec757ff901c2ea2c80a6010000",
    ],
    [
      "ETag",
      "cm3o2H+JbGjGlwNM5aWpxg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000002ff1dcfc97282300000d07fc9d9715844a137104663b42860095e3210c3522a84b5814effbd4cefeff27e404c29eb3ad2d725abc01b9862c558d335e292b5f97e0e37589ccba62abe1055493a42b8875ac83c4ff88a96e9680c2f61985bcecbb2f071d7ea53e08e72fd8e1f3e33aac3671478436d3d4643724e90fb3889d2e4be23bbd9714bb477f6cd016fb14cf8318bce24f594d4b5fbe6fa91b0d14cc38673136ecc93245f3a3a67948f11aa077c676a26b6ed14f86e735772c596737fe165da5107c5da56d73324849df5ee45f7e75ad4f9f3ba915eb11be21b58012678d1b28e144b56d50c6305fee7a49f385bfa168b5bd682df3f64c18f3c18010000",
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
      "Thu, 29 Oct 2020 22:10:01 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-25-1604009372790",
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
      "64",
      "f6",
      "ab2db4f44593666d2aae242d55a09acd664386e182a3944166d018d3ffbe97c1ba1a13fdc4ccdc73ee39f7c10bb9e7654ae624e1f94303f5f38f3b919013028ae6f87a15c086053c91b7ab87a7ebc1bdc792cccb170b44f09625e9be2aa02745533390f35dd8cf6bd154b416a287897ac3716f30b14696e5d8d3e1d4b19027a1c8d6bcbc47f6ad52959c9be651bb9f0b9117402b2efb4cecdfdecdc7a159d5e20e9892e647491355a4f9b5e8cf4230aab82817bb100d3412ea18f6941768e13f334d4e3fa6ee73baefe7087ee40c2863a229556b0b533051663c6f6a9d95cc5f88b6f9ee404277edae228389a2d9977149f77062a454d1583d57609c07db8de1f9e7db60b38cbcad1f87ab0b77b3ecafb6ebddc60f8d9b0b37700d45930234d75818a7fae6e305f553908a975a3d6a9f5be5d706799fc7d212505a42178ca7d6840e66969364c99465337b9c641624c92c998ea99d58cc19c1284d80224f8b6a162d45391965e3c974cc62db990de211a4b3985ac32cce86c3e1d4b6a995b28c1c4ec853cd159c715909c9bb0e919bc08bdc380a76fe6a19b9ba848c36853aeb8cb505bcf7a8b040047d51d3a18d72814a6dbb3d3f7283e52af2aedd6ec26bc8297b0e1f70c6192d24209ad6d83c05f546a4d830e22f37ee1982f5c42e8f4149e67f5e48dbf3d6c5bb96bfd1231c606b57e92f09a3c0f37f693b47c4352d1a0d79ec0ea442cbb7581bba3efc45242e6997855ceddce037e99e02c8a086927d3f4d04ebc0b7ffda71f1118bab8f3252e11d",
      "7787c95684d5d0ed10d7e5beb247d660663b44836bf529e6ccec63d7da1c6d46d843a95e2bea161f0bedc41af906c2208edfd7dd3afc0355449d5578040000",
    ],
    [
      "ETag",
      "QReMcRibshCqwV1kIcbfIg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-25-1604009372790"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92dd4ec2401085df65bc2d494168a50917fca9240514ca8d8690a59d96e2b65b76b72a21bcbbb315d1a889deb433d36fb6e79cf6004f691e8107eb34d99528f71709ea7b53cc50955c2bba1522570816a06609917dd75f4fdd87c6625abc0ef7f5dd8063dd493a1d2254b8c18c81778038451e29f01e0f90b30c692d14bcccf255d559a0f78519ce83d96872437d2622d34f16bedfedf943385ae7c58869b6aaf87fac2d8f166cc57a86314acc43345a0a29b618ea91b1a9585670ac2951ca10155470f52091a22c9814a246935aa355ab3b76d3b6db976ec36ddb047211329d8a9cd8c59cf481169af199782197e01020ab920cc7d5f599c669541931e5681238cd4adf5780a4c529c7d5df20e9dd30fa0c1fd82982ef1ccb4499eb3375ed4fbbbf1d47997e1e35e806c31f84d294d4190946e3e13ce88eef0cb73c79efed35aa3b2928488526c3baddbc6ab98efd1e6b5f98a8e93d9e96255a1032fa3b6e530d5eccb8c2e31b5bad3e457b020000",
    ],
    [
      "ETag",
      "C7LbO7Z2UOpxEy1qDle16g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COALESCE(SUM(`amount`), 0) as __result, `profile_id` as __pk FROM `purchases` WHERE `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-26-1604009372790",
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
      "000000000002ff85536b4fa34014fd2b64f68b266da10fa034316eb7b22ebb7d28a51ab3d9b433c380a3c02033d418d3ffbe17b06a63a29f18e69e73cfb98f7946f73c0bd108111e3f94ac78fa7627086a21a6700cb7ba9ffdd912154c6c49635a1af96537fefd787202085eb1244ef384b5a5280bcae468b5ecc48528735c08d18644ed9ed5ee5ac6c0309cbeddb31d03789225d19467f7c0be552a97235ddf6b776221e284e19ccb0e15e9ebbdbeede97921ee1855523f94d44145ea9f8b9e268262c54576b25a828152b262cd52cc13b0f0c60cc9f7c3d41d8ed34e0ce02da70c532aca4c55b620051559c4e3b2a8b3a2d133aa6dbe3ba0a53b75278136598ca7ee72e21e2d57b3a30d4eab1c9be396661c6b586aeb75c16499a896b681f2229eb0350f374d24bfd77efa8b1944c0cc2d964c6eb4eb5faeef1e62bdb976747aac9dfb8bd585f6e3e6200846432615cf6a9b012609ab2cbe74d2fb38bf8a80156835c1b56d58b83b341c12119b46c3be492283113224b689fbc4a0ce800d42c230f05495bd66e14c643d0777a9dd1f3a941851cfa4fdd06264e038a1691a8361685ac434ad3032d1ae851e0baed81997b990bc6927baf6bdc05d07fe6a3e19076e5d4684a14f678db9aa88f73e151409a04feada55512e40a99a8d370f5c7f3c09bc2bb75987298b317d5a3ec0424438910cd0b8c02953ac9889109a862e164b2ff016f3f11418f58c2ff60889467f9fdf08c1535e7759d55f345fcd5cdf9bd40ef6902b9c943566db1c5017ed76ff0001cbdbd0d1e5caf56f5073e5b388152ca35f0f0fc075e0cb37b87f10808527013252c13fac0a9595082d58b3323caded35ec81d1b38716aac185fa10739cfebe37558e2a234b59a65e2a6a1e0414da8895f215044198f4dc9b9f43f43fa5d6860f90040000",
    ],
    [
      "ETag",
      "/RnKvbtTC7scgcu0pQ1gJw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-26-1604009372790"
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
      "6d905f4fc23014c5bfcbf575330574fc4978404520595007c4444348199739d8766bdb6990f0ddbd2d26fae04bdb737b4ef33b3dc23eaf36d083759ebdd7a80f1719da277748d0d48535bc29aa0c42006865c6ceebf1a09389483d27fbd94b35ea8eef265f51d6efb3c3a46f584ae81d619b63b131d07b3d42254be4d86aa5fd8b6cb307e526f7f1c360ceb2a48d93d3451c0f6ee2219c823f21b5ff0d4ca6f3e16898fc17599e02d8d13ac12d6aac52740c4ad30e533b71f58c2c5581a1a15aa768c09bfd45a6a9565213853c099b51d888c49510dd56bbd9ee0a3616944a9b53c5dec58cd9c0929545429fdc0e1a6cd0fec845b77efd706371d9eaf81e5e39bce54ff0e660d13c6a620a830e409c616ec9015a06b7bac60052c97f39ceed599fbe0156f8a7bda8010000",
    ],
    [
      "ETag",
      "5HA8g06pWRkSZnG9HDIz6g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "ff1dcfdb6e82300000d07fe9b335049cdabd79192a1481306ebe340dedbaa2b5086a8165ff3eb3f307e707d0aae25d47eefaccafe01d0cd446d36aea37d67a6618fa8c38d579a36ede62ecfd2c96f560a2f3b39cc9ca202acffd653c41782d7a11c3912ce87e68e7970db252d53894d6c4485dcc6f4ccca0f34531b636f2283f64a7216fc6bbb1ad67c272378b833ab14a4fbab910297c640f866d9586e4db2cb22442811fc5ce6e25b6e1eaa86b81f6f870700f1a9b42a472b9c69eb0cb53c888da7a41e8f0cc834b4fe52162dadee1304e9463aa02899d0013c0fb46b6bc23f29575de109a80ff39b90f0d7ff5d79cb6bc05bf7f4c0350b518010000",
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
      "Thu, 29 Oct 2020 22:10:03 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-27-1604009372790",
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
      "14fd2bc87b6d0221694822452b4a691b29211b9056d33421632ed42dc1149b4c5195ffbe8b69ba5695da276cdf73ee39f78367f2c8cb94cc48c2f3a706eac3b707919033028ae6f85aa783699e24abf27a152ed6d22de4f5c174e77344f09625e9ae2aa02745533390b36dd8cf6bd154b416a287897ab6d31b8cad91654d878eed4c2de44928b2152f1f917daf542567a679d2eee742e405d08acb3e13bbd777736f9b552d1e802969be973451459a9f8b7e2f04a38a8b72be0dd14023a18e6147798116fe33d3e4e27dea3ea7bb7e8ee03d674019134da95a5b98828932e37953ebac64f64cb4cd3707127a2b6f11194c14cdae8c4bba833323a58ac6ea508171156cd6c6d2bfda046b375a6efc385cdc786bb7bfd8acb66b3f34ee6ebcc033144d0ad05c636e5ce89b8f17d44f412a5e6af5a87d6e955f1ab4fc38969680d212ba60ec58633a9858d3244b1c964d86e7496641924c12e79c0e138b4d47304a13a0c8d3a29a454b515aa99d6594416c5b03168fc683714c5367103b194cb27434b62d9b92e319f95b7305975c5642f2ae43e42e58465e1c055b7fe1469e2e21a34da12e3b636d016f3d2a2c10419fd4746ca35ca052dbeea51f7981bb8896b75e37e115e4941dc2279c71460b0988a635364f41bd1629368cf8eedabb44b09ed88f535092d9ef67d2f6bc75f1a6e5aff40807d8da55fa4bc22858fad7dace09714b8b4643f6dd815468f91e6b43d7c73f88c425edb2909f5b2ff845baa70032a8a1645f4f13c13af0e5bf765a7cc4e2eaa38c5478c7dd61b2156135743bc475b92fec91359cd836d1e05a7d884d1debd4b536479b117650aa978abac5c7423bb146be823088e3f775b78eff0099d9bc",
      "0678040000",
    ],
    [
      "ETag",
      "rd19gbbLnGLSCMsAlsGy/A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-27-1604009372790"
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
      "d1",
      "4e",
      "c2",
      "40",
      "10",
      "45",
      "ff657c6d938208d2840710d4268008054d0c214b3b85e2b65b76b70212feddd98a68d4445fda99e999edbdb7ddc3739c86e0c23c5eac7394bbb305ea7b530c51e55c2bba6522550816a0660b221f37e3edbcfcba5d7bedf203cf2613be69cdef1b0d2254b0c48481bb8728461e2a709ff690b204692d103c4fd259d159a07799198efca1d7bfa13e11a1e9fbe36eb7d9ea76e0609d1643a6d9ace0ffb1363d58b012f3214628310dd068c9a45861a03d6353b124e3682b91cb00151470f16021459e3129844d13bb5cb34b55a7e238f5f35ab9567708e422603a1629b1e311e9032d34e343b121975025401625198e8aeb0b8de3b030624aafef572b85beaf00498b628eb3bf41d2bb64f4193eb06304df3996883cd527eaba7bd7fced38caf4f3a876d3effc2094a6a44e88eff53a23bfd91b186e7af4deda6954032928488526c39253b9bca8559df758af84899adee36a99a30501a3bfe336d6e0468c2b3cbc0130799fa37b020000",
    ],
    [
      "ETag",
      "XwUxb2zxqID2WlpVVlwBbQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT MIN(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-28-1604009372790",
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
      "4fa34014fd2b64f68b666d8b7d519a18b75bd165d352a55463369b76062e3816186406ddc6f4bfef05acda98e82786b9e7dc73ee639ec99aa7011912c6a38702f2cdb77bc1c811014523bc5577e79bf4e9fbe8ac0b17ffc46db6368cdffceae40411bc64499a643134a428721fe470316f46b928329a0bd1c0448df6a071dcd7bbba6e768cb661eac8931087139eae917da7542687add64ebb190911c540332e9bbe485eef5b8fed56968b7bf0956ced4bb65045b63e173d8d854f1517e9c9628e060a09f91212ca63b4f0c60cd88ffdd44d4e936684e047ee03f57d51a4aab485297c91863c2af22a2b193e93cae6bb03995b136bec6953db3958d1a4a4ae0e352ab5e5320759c4ea485b6145218f61c983551dc9d6dab93b9b6204f5efa804b9d26e7e59aeb58fb51dede0f450bb70678b4bede7ed5e10bd0520154f2b671e653194ae5e9a677f1c5949a00ab5eae0d2d0fbf478a09b2c64861f0e3a3d16eac0d880193dda61ba6f76a11b30a0c85365f68a455391020b74d6e9f7da3a838eef9bfd4e8719a66184ed7ed83321e8b407388a2e23db23f2947305675c6642f2ba83e4c6b53d6be9b90b673cf2acaa8c90629fce6a736511ef7d2a2c12419fd4b52da35ca052390edbf12c7734f6ec6babde800944d4dfcc1f7007421a4b4034cd69020af2a908b069e47236b73d7be68c26c8a8c67ab9434832fcf3fc46f03659d565557d89b3985aae3dae1cec20d7342e2acc637d20c764bbfd8b08dcd79a4eae16967b4bea2b1742c821f5bf1e1e82abc097cf6ef706108baf0065a4c27f5c155f96227e0ef5caf0a4b257b3bb7ad7e8f54905ced58798d91bec7a53e628334202a97aa9a87e0358682d56c857100671d28eed5c60f43f57671c9f83040000",
    ],
    [
      "ETag",
      "thFynw+AD4eGxoYpk77JiQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-28-1604009372790"
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
      "6d505d4fc23014fd2fd7d7cd0c2422243c80994ab2800c88268690b2dd8db18f3bdace4908ffdddb62a20fbeb4f79c9ed39ed333e45915c31076597a6c509e6e52d40b3384a89a422bde6aaa148203a845caca7c3ff85abcabc49bb72dc5fa6d798cbdbc1d8d58a1a23d9602866748322c6205c38f3354a244b66db7d2dec8327daa0df314ccc72b8625c506ced641309e043e5c9c3fa63aff354c672bffd90fffb36c2e0e1c6817628212ab084d865ad201233d35f59428eb025d458d8c508115db835452530b49e432e3761fdccebdd7f3bcc15dbfdb1f782c2c28123aa38ab5eb2567034d5a1421b5dc0e3a2c9076e4a2895d3f0d7ddbebda1a1698749b1fdfe4a451bd4ae2100acdfbde35cb23997c9a736bd9a00391e0af7cc9f4155fbe01af1aca7ca7010000",
    ],
    [
      "ETag",
      "kh9xQXsf0OwwodtWSqd0kw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "82301800e077e9b518053cb03b4bada23804ba1077431af8c7284c0ae52098bdfbccbe37f89e8827092815b7550177f48646ae5bf3647e960b6c0ea918a77d53ef7a066c5f0f074dc4971f61e597d4a32ca763ea60e844a435eb1ba18768d911c7048fd130a83c9981772240c7ae5224f5824caa6f3b91eef64bf012b3e0935495bbab8df3c339e2d16a7bb774ca4186b4bc94a97f7f6fd7c7429bb6da6d19c646ad099959ebd532a9b89f92d36430b52113117bdde7b88f0afde0833999fac28df0f19a5f7d9bdf64d843d7666a60e74dd1841ff68066081e326f40c5f92b6bac2c6b86fee7713b4a78f531f0061af4fb070c3122a618010000",
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
      "Thu, 29 Oct 2020 22:10:06 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-29-1604009372790",
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
      "02ff85545d4fa34014fd2b64f6d5b6d8d2d23669d6a6e28a69a94b6975b3d9909961c05160901934aee97fdf3b83753526fa0433f79c7bcefd806774c7cb044d11e1d97dc3eaa76fb782a023c414cee036bcacf2b0bcde397f0b7b84b3edeee2e2f17a3e9b01826b96c44595b38e144d4d999c6e37ddac164d856b213a90a8d39f748e47b663db9381db772736f024cbd3252fef807da35425a7bdde41bb9b0991e50c575c76a9285eef7b0ffd5e558b5b4695ecbd97ec818aec7d2efa3d17142b2ecad97603061ac9ea981598e760e13f332127ef5377392eba19801f38659852d1944adb8214549429cf9ada6445d367646cbe79411b6fe92d228b8abc29cab8c4053bb212ac70ac9e2a669d85eb95e50767eb70358ffc75106f16e7de6ade5dac97db55b0b1aecebdd0b3142639335c6b669d98530007d04f9854bc34ea91bed6ca2f0df23f8e4513405ab23618bb30cae3b13d212971693a1e0c496a3342c6c41de201b1e9c4614e4218069e11352c5c8a72e2d2c16098d2988cdd2476704ae231b647b1938cd321e9f7879462b43f428f3557ec94cb4a48de76085d857ee4c551b80d16f3c83325a4b8c9d5696b4c17f0d6a3820201f4494d7b1de5029474bbfd20f2c2f922f2775e3be125cb307ddadcc38c539c4b06685c43f314ab57228186a160bef24e016c267679084a34fdfd8c74cfb58b372d7fa54730406d579927da44a11ffc30760e881dce1b0379685f5005966fa03670bdff034858d2360bfab9f5c25fa8bd0a59ca6a56d2afa7096013f8f25b3b2c3e6061f541462a38c3ee50a94568cdda1de2a6dc17b6638ffaa31132e05a7d880d86cea16b3a87cec80a56aa978adac587425bb146be82f4ef641b04a65bfb7f6f7a21f278040000",
    ],
    [
      "ETag",
      "RPplRnXV4zm06agUVJJwXA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-29-1604009372790"
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
      "02ff8d92d14ec2401045ff657cb44d8a2248131f8aa26210104a8c3186acedb416b69dbabbd510c2bf3b5b118d9ae84b3b333db3bdf7b66b5866450c3e3c66e973856ab597a2b9b1c50475258de65b49854670008d48993cbc9ac577cd647f79db0e65a69e67a384f2e0e484091d3d612ec05f4392a18c35f8f76b28448ebc1691acf2625e770e98556987d370d21f5e709f536cfbe16c3008ba831e6c9cdd622c8c98d7fc3fd61e360e2ce87182092a2c22b45a4a450b8c4cdfdad4222f25ba9a2a15a1861aae1fa48aaa5228229727ee41c76db4bca6e7750edb07ed8ec7a0a448988c0a666753d607868c90137a6597d06240d5251b4eeaeb0b8fb3b83662cbfe306c356b7d5f0196966412e77f83acf749f067f8c0b6117ce7444e556176d4f96014fc761c67fa79d45910f67e10da70523b24ec5ff7a661703db6dcc3d67b7765508f1571901a6d860daf797cd46e79efb19e928d9adfe31b55a10391e0bfe33233e027426adcbc012c10d2027b020000",
    ],
    [
      "ETag",
      "3JUdY4f+kW7TlirqUOfomA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT MAX(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-30-1604009372790",
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
      "4014fd2b64f68b26b6504b8136316eb7a292ed6b29d5359b4d3b331d705a609019ba51d3ffbe17b06a63a29f18e69e73cfb98f79461b9eae500f111e3d142c7ffcb616049d20a67004b73f9f2ebdcdba330fa7867e1dad9fe29b6b3a8ccece00c14b96c44916b38614454e99eccd67cd2817458673211a90a8d1361a2dcb300da3dbb64fedae013cc9e270c8d30db0ef95ca644fd7f7dacd4888286638e3b24945f27aaf6f4ff52c176b4695d40f25755091fae7a2e7b1a05871919ecd6760a0902c5fb004f3182cbc3157e4fb61ea26c7493302f0965386291545aa4a5b90828a34e45191575951ef195536df1dd0cc1dba83401bf57f1f2d71525297c71a96da62913359c4ea445b4245218fd982af967524db6897fe640411d0bfc792c9a5767bedfaee21d61b6b47e7c7da953f994fb51f770741f0b66252f1b472166012b3d2d54bf3bc8f232b095881561d5cd886855b8ed12521b169e8b43b243418210eb13bb84d0cda3599b9220c034f95d92b164e45ea740cab6b51e65072dab26d4a5897d0f62ab4da8e695b8e615a2de2d8a6897627e85fce15bbe0321392d71d44b7be17b88bc09f8f07fdc0adca0831f4e9a2365716f1dea7822201f4495dbb32ca052895e3f0c681ebf7078177e3d61b306411a68fb307d88110c792011ae738618ae523b182a6a1e964e605de64dc1f02a31aeb748f90a8f7e7f98d103c66559755f545e3f9c8f5bd41e5600fb9c1715161b6f501b5d06ef71710b0af351dfd9abbfe1daaaf7c16b29ca5f4ebe101b80a7cf9ecf66f00b0f00a40462af88755a1b214a139ab57862795bd9a6d1a76bbdb421538571f629661ec7b53e62833b284a5eaa5a2fa0d40a1b558215f411084498fbdf11544ff03891e482583040000",
    ],
    [
      "ETag",
      "KzFIkj5UfP0/HgjzlVHcLg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-30-1604009372790"
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
      "41",
      "4f",
      "c2",
      "40",
      "10",
      "85",
      "ff",
      "cb786db5808140c2014c559206b4423c1842b6655a0b6da7ee4e2184f0df9d5d4cf4e0657766f67bbbefed19f645bd85112445fed5a23edde4c8afb688d1b4251bd91aaa0d8207c82a17323cbca3c91679db8fa33b2295ecf9a8f3f15808937e62a5607486acc0726b60f471865a5528b2cd46bb1b05e35363278fd162b294b6a2ad6de7ab289a4ca3102ede1f51b3ff15cce6cbf0298cff93ac2f1eec288931438d758ad643a3698729cf6c3ca3aaa644df50ab5334e06077906b6a1ba5897c99f8bdc0eff483fb2018f606ddc13010b0a4547141b5b0ab37f1064cacca988e920e3a0268574ad0ccad0719776fbb3d17e3e01871b7fed14d4f8ce64593983068df0fae5e1ec8fa63f1cdba450f52255ff95cf0b5bf7c037460e66fa7010000",
    ],
    [
      "ETag",
      "EvWesfOgu6RL/ooabktwrg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "02ff1dcf4b7282300000d0bb646d1d2228a43b92421105c40a45364c08513e2212918f9ddebd4edf0dde0fa08cf1fb3de99a8a5fc13b98e802cdd97c7393b032f0e8c3eea9d6ab92a4b7be751ec6f42d55dc83894b4785f6c21a8dd06c76b20d831ed7d76fc7f1f68fec906459805ca53c7b2b3108767c08f695fb64d1a6a4672b3ba0d339ea2852d16834591be6c65438148664fbb95dcbc8369f64d463e3e878fd8eb4cd4687d672dc556e14778f3584cc1ff4cef29eb95315248d702d6db428b764ac9c228a72c864acb50dbdd62499dcb8bc586d7539a983560a1fcc001f6f85e0f7a47865e5254233f03f4fbae9c65f7dcca9e002fcfe012ce2174418010000",
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
      "Thu, 29 Oct 2020 22:10:08 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-31-1604009372790",
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
      "2b",
      "c8",
      "7b",
      "6d1212480891a2354ae99a2d211b21adaa6942c65ca85bc0149b565595ffbe8b69ba5695d6276cdf73ee39f7836772c7cb84cc48ccb3fb06eaa72fb72226270414cdf0555ec97d21ce85bc77aad1d6fe71fdddf6bdc7f91c11bc65495a5439f4a4686a0672b6dff5b35a3415ad85e861a29e35ec0d27a66d9aaee58c1cd7449e843c5df3f20ed9374a557236181cb5fb9910590eb4e2b2cf44f1fa3e78180daa5adc025372f05e72802a72f07fd1afb960547151cef73b34d048a8232828cfd1c23f66129fbe4fdde7b4e867087ee00c2863a229556b0b533051a63c6b6a9d95cc9e89b6f9e64076deda5b86061379539451490b383112aa68a49e2a30ce83edc658f9e7db60b308575b3fda2d2fbccda2bfdcaef71b7f675c5d788167281ae7a0b9c6dc38d5371f2fa89f8054bcd4ea61fbdc2abf3468f5712c2d01a52574c1c83127743835dd388d1d964ead719c9a10c7d3d819532b36996b839dc44091a745358b96a274ac519cc4b11bc1c461918d292277688da3e96462a749e28e1270c9e1843cd65cc119979590bceb10b90a56a11785c1de5f2e424f9790d22657679db1b680b71e151688a0ffd47468a35ca052dbee951f7ac16219ae2ebd6ec26bc8287bdadde38c539a4b4034adb1790aea8d48b061c45f6cbc3304eb89fd3c062599fd7e266dcf5b176f5afe4a0f7180ad5da5bf6417062bff9bb673445cd2bcd19087ee402ab47c83b5a1ebc31f44e2927659c8afbd175c93ee2980146a28d9e7d344b00e7cfaaf1d171fb1b8fa28",
      "2315de7177986c45580ddd0e715dee0bdb36a7b6a5ff54456bf521369e5ac7aeb539da8c5040a95e2aea161f0bedc41af90ac2208edfd7dd3afc05e8a52e5678040000",
    ],
    [
      "ETag",
      "sWsUmoFosq7p2O4KYJ4NEw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-31-1604009372790"
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
      "d1",
      "4e",
      "83",
      "401045ff657c85842ab64ad207aa55896dd5164c13d3345b182a0a0cee2ed6a6e9bf3b8b5a8d9ae80bcc0c67967b2f6ce0312b13f060912d9f6a94ebbd25ea1b538c51d5b9567caba8540816a0164b26a7812856abcb5b7916bdf482a97b1eed3be477bb4ca8f81e0b01de06d20cf3448177b7815214c86b31e57551ce9bce02bdaecc70128e83d139f70525a61f458381df1bf4616bed1613a1c5bce1ffb136db5af0408b31a628b18cd168a9243d60ac03635389a2cad15654cb18153470f36029a9ae8424b279621fb4ec56db711de7f8a0b3df397618cc29163aa392d968c2fa409316f99856ec12da0cc8a664c369737de6719634464c198cc2b6dbe8fb0ab0b434cb71fe37c87aef057f860fec3d82ef9c28a82ef58e3a1b5cf9bf1dc7997e1e75ea87fd1f84d29cd40e0983617f12fac36bc3cddebdf7d61ad5b5240e52a1c9b0e5b847879db6f316eb0999a8f93d9e96355a100bfe3b2e320d5e2a7285db570dfafde67b020000",
    ],
    [
      "ETag",
      "XIamwwKVrFUxBIX4GU20oA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`date`) as __result, `profile_id` as __pk FROM `purchases` WHERE `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-32-1604009372790",
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
      "e2",
      "4010fd2bcdde174d040a145a488cc7414f7bc182a568cce502dbedb4aeb6dddadd7a3186ff7ed3565462727ea2ec7b6fde9b99dd17f2c0b3908c49c0e3c7128ae76ff722202704148df1d4eda717cb5f3d6e77af2633233196b7faccba3a3d4506af5492a679022d29ca82811caf57edb810654e0b215a58a8d5efb5ba43ddd0f551dfec99231d75129268ceb30754df2995cb71a7b3f76ec742c409d09ccb3613e9db79e7a9d7c90b710f4cc9cea165075d64e7ffa66789605471919dae5718a094506c20a53cc108efca30f87e58bacd69da8e91fcc41950c64499a92a169660228b785c167555327e2175cc0f1f6465cfeda9af4d176bd73fda8654c1f658a352db6c0a9065a24eb42d7614f104363cdc3648fea0fdf4169788a0ff1d9520b7dacd85edd9875cc7d58ece8eb5736fb15e6a3f6e0f40cc1682543cab93f93448a04af53a3ce7f3ca2a0155e8d5801b531fd2aea58f8228305964f50741a44310588139a0fd406723038c30008a3a5555af55341399a15ba6898839a4a119e8c36eaf6719dd5037c3be651a9615823e1c3030c8ee84fc2db8821997b990bc9920b9f11cdfdef8deda9d4e7cbb6e23a238a75913ae6ae2634e854d22e93f7ded2a940b74aad6e1b8beed4da6be736d3737600e3165cfab47bc03114d24209b16340505c5a508716864b95839beb370277354d46b5dee19928c7fbfbc0bfce7bc9eb2aa7f89bbbeb43d675a27d853ae6952d69ca7e68374c96ef70719785f1b39b95adbde2d698e3c88a0808c7dbd3c24d7c097cf6eff06908baf006da4c2ff785598ac4c5801cd95e1691daf511bfa683032484d2ed427ccea9bfbd95435aa8a9042a65e3b6ade0036da9895f28d84206eda75dc7344ff013b5fa5",
      "fd83040000",
    ],
    [
      "ETag",
      "N3mHPJ2iE1QAD4l4PY0D8Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-32-1604009372790"
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
      "5f",
      "6b",
      "c2",
      "30",
      "14c5bfcbdd6b0b5587c5820f3aca261471754ec61089edb5abb6b935491d55fceebb897bd8e35ef2e7e4779273728563297388605716a71655f750a079b58b14755b19cd53435223788046144c9ed6c3200cf545e61f9362bdbc74efad5c4cc6632674f685b580e80afb12ab5c43f47905296a64db76abdc8d8c99aeb1ca6cfe163fc7290b35e55698af9264324d62b8797f6ccdf15f96cdcd8303ed52dca34299a14dd1283a606666b6a0167553a1afa955196a70b03b2814b58d50443e2bfea0eff786c163108c06613f1c050c56940953926476b5e46c60c8882aa56fee073d06945b72d5bd1bcf2c0f5d87b30338dae6d734ed0cea85224ea0d13e1edc833c910d6738b4512d7a9009fec997d2dcf7b71fd69eb814a6010000",
    ],
    [
      "ETag",
      "qW6077szndYAgWSzyVunPA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000d07fc9d93aa981017a933065b36a058470618024acc32e8b9dfe7b9dbe3f783f204e53368ed1d456ac011f608b0fca3edddb1d54858592d4e244ba898453da9ea9bf5caafb06f59a5cdbb4fcecdfed130c50158a5c383c73a50fdcaf050bc91acdb20cef2e32ccb3c4f3863b33ceb0d595d049ed04f9f971711688e99be996e8b605688832aa6dd88b1ea53b309d56df24afa90b0d942704e59d378db584cb501a6deba1cb1b91aedc114a7e3aea66f75ccd208b4915f8ac571b840c6d0c17b5228536f38064ad7391a8863dd1a119d801b676c5c0c6a8786591a8283bf03f8fa6ad63afbecae2810de0f70ff1136b2118010000",
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
      "Thu, 29 Oct 2020 22:10:10 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-33-1604009372790",
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
      "6f9b3014fd2bc87b6d1202242491a2354a681b2d212b8154db3421db18ea96608a4dbbaeca7fdfc5345dab4aed13b6ef39f79cfbc113bae545822688f0ecae66d5e3971b41d009620a67f0ca7feec6e7f65f7f41bf457f2e2b7b175937f4613a05046f5812efcb9c75a4a82bcae424da76b34ad425ae84e840a28e6d77fa43d331cdb1ed5aeed8049e6479bae2c52db0af952ae5a4d73b6a773321b29ce192cb2e15fb97f7debdd52b2b71c3a892bdb7923d5091bd8f45bfe68262c545318db660a096ac8ad91ef31c2cfc6726e4f46dea2ec7fb6e06e07b4e19a654d4856a6c410a2a8a946775a5b3a2c913d2365f1dd0d65b79f3d0a022aff7455ce03d3b3112ac70ac1e4b669c059bb5b1f4cf36c17a162e377ebc9d5f78eb5977be59456b7f6b5c5d788167284c72a6b9c6d438d5371f2ea09f30a978a1d5c3e6b9517e6ed0f2fd581a02484bd60663d71ce2fec81c9394b8341dd903929a8c90117107d826261d3bcc4908c3c0d3a29a850b510c07ae85599fc676dfb26327ed3b31e90f499cb8438ab1858993b8e870821e2aaed882cb5248de76085d05cbd08bc320f2e7b3d0d325a4b8ced5a235d614f0daa3820201f4414d8726ca052835ed5efaa117cce6e172e7b5135eb10cd3c7ed1dcc38c5b96480c615344fb16a2d126818f2676b6f01603db1efc7a044935f4fa8e979e3e255cb5fe8210cb0b1abf4176dc360e99f6b3b47c40ee7b586dcb7075482e56ba80d5c1f7e031296b4cd822e232ff881daa780a5ac6205fd7c9a00d6814fffb5e3e20316561f64a4823bec0e958d08ad58bb435c97fbcc76faa63370900657ea5d6c685ac7ae35399a8c6ccf0af55c51bbf850682b56cb17100461fcbeeed6e11fe2619d0378040000",
    ],
    [
      "ETag",
      "iZV9G3zNDcKUxQr3VU2jcw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-33-1604009372790"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92515382501085ffcbf6184e948ac94c0f5a5a4e6889f8d438ce1516c580a57b2f99e3f8dfdb4b654d35532fb0bb7c7b39e7c00e1e933c021716c9f2a944b93d5aa21e9bc24755a65af1ada05c2158805a2c991c178dfeed9a4e1c4f1d6fece64b1e16f17a7c71c1840a5798097077102798460adc871de422435e0b292db37c5e7516e86d618693c01f8caeb9cf2832fd68ea799daed783bd75588c8416f38affc7da6c6fc19a163ec628310fd1682924ad31d403635389ac48b1a6a894212aa8e0eac1525259084954e349ad5eaf9d3a76c3b6dbf5d659ab6d33985228744239b3d309eb034d5aa43e6dd825380cc8aa64c371757de6711255464c3918054ea3d2f71560697192e2fc6f90f5ae047f860fec3d82ef9cc8a8ccf581ea7b779ddf8ee34c3f8fbaea04bd1f84d29cd4010906c3de24e80cef0d377bf7dedd6a54f79238488526c353bb71de6c39f65bac9764a2e6f7b85a96684128f8efb84934b8b14815ee5f0154e59b217b020000",
    ],
    [
      "ETag",
      "Qp4FKjo/6Ls+w05xncpfjQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT MIN(`date`) as __result, `profile_id` as __pk FROM `purchases` WHERE `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-34-1604009372790",
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
      "8553ef4fe24010fd579abd2f9a0814f9d196c4781e56af0914ae148d77b9c0763bad2ba55bbb5b0c67f8df6fda8a4a4cf41365df7bf3deccec3e93154f433220018f1f0bc8b7df1e44404e08281ae3e9bd7d2579e76ebbb1575b4ffcbedf6efff5e64f6767c8e0a54ad2759640438a22672007f35933ce4591d15c8806166a74ba8d765fefeabad5314e0d4b479d84241af1745556572a9383566befdd8c858813a019974d26d6afe7adcd692bcbc50330255b87962d7491adcf4dcf13c1a8e2223d9bcf304021215fc09af20423bc29c3e0fb61e926a7eb668ce40d6740191345aaca5858828934e271915755c9e0995431df7d90993db287be3676dca36548152c8f352ab5c522075924ea445b623f114f60c1c3658d642bedca9b8c1141f77b2a412eb5db9fb6671f721d573b3a3fd6aebdc97caafdb83b0031590852f1b4cae5d3208132d3cbe89c8f0b2b0554a1570d2e0cbd4fdba66e055160b0c8ecf4824887203003a3473b81ceac2e74c30028ea5459bd52d154a4a66e509df54c2bec9b26d3ad1e03cb3a8dc26ebf6f85286cf7fb1099618fec4ec853ce155c729909c9ebf9915bcff1ed85efcddde1856f576d4414e77459872b9b789f53619348faa4af5d8972814ee5321cd7b7bd8ba1efdcd8f5fe471053b69d3de20d88682201d934a76b50908f45884323d3c9ccf19d897b314245b5d4e99e21c9e0cff39bc0df66d59455f54bdcf9d8f69c6195604fb9a149517136f5076993ddee2f32f0b6d672f26b6e7b77a43ef220821c52f6f5f2905c015f3ebafd0b402ebe01b4910affe35561b2346139d45786afab78b5badb6e777b16a9c8b9fa8019bab19f4d59a3ac086b48d54b47f50bc0466bb342be9210c44dbb8e7b8de87fece0643381040000",
    ],
    [
      "ETag",
      "hEFsi3YyvEkyRoZhyyz5Uw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-34-1604009372790"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff6d90516bc23010c7bfcbedb585b4ca3a051f74ab9b20323b7d101189f5ec5adb5e97a48a88df7d9738d81ef692e42ebf7ff85dae70cceb3df46197675f2daacb4386666e0f09eab6349ab7866a8de0011a9931f9148da3d37cb53aeb32188d7745ce54311c0c98d0e9275612fa5738e458ee35f4d757a865851cdb6e957b913173696ce765b888b9aa686fabd9723a1d8ea631dcbc3f99e6f8cb4f668bf8354efe8b6c6e1e14b44bf0800aeb14ad42a3a8c0d44cec745a564d89bea656a5a8c1c1ee2253d4365211f9dcf13b5d3f78145d217a9d288c7a82c192526972aa995d7eb01b1832b24ce8ccc341c08072479ef3e0d613b743110a5f84be08dc302747b2e3e6273dba18d4ef8a5845a3b51077a367b29686ed8d6ad18354f27fbee5e65edfbe01ba241e27ac010000",
    ],
    [
      "ETag",
      "87F7vQYYwsl1BFbjiltsjA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "dd",
      "96",
      "42",
      "40",
      "0000e07799ebea2046f6ce54d65fd1f46372e3f81909216c8ccebefb76f67b83ef0dc238a65d17f475412bf0055828288b7861351c1287d43af1a4d8130ebb18ed52254bd804db57931dbdabc92e96787946384f7eb8cdf3c119b96a1af3ed51197d3fae3bd7d1ab8008fb9790ac5087453777d42b7ce1417e94df65844eb7919f2a895a10aff7aa73eb399135ebe18c9c522343a4f3368b6bea102fdca0f24ea442591e3c55967d38ed6a07ce43e24396e567c3e4b6528aa602eb6a9baaba691f57b6e41a8de0f191d14bf0a9f9e3016a817b19c00cd0b1b9b7b40bee9fec52529419f89f073d6be8a78f68d8d216fcfe010540303e18010000",
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
      "Thu, 29 Oct 2020 22:10:12 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-35-1604009372790",
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
      "ff85535d6f9b3014fd2bc87b6d1212421222456b94d2355a425620adb66942c65ca85b8229369da22aff7d17d374a92ab54fd8bee7dc73ee07cfe4811709999298678f3554fb2ff72226670414cdf055cc13fb7a33f83528ccd57e60a59befe122cb663344f08625e9aecca123455d3190d36dd0cd2a5197b412a283893a96dde98fcca1693ad67830764ce449c8d3152f1e907da75429a7bdde51bb9b0991e5404b2ebb4cec5edf7b4f835e59897b604af6de4af65045f63e16fd9a0b461517c56c1ba0815a4215c18ef21c2dfc6726f1f9dbd45d4e77dd0cc14f9c01654cd4856a6c610a268a946775a5b392e933d1364f0e247057ee223498c8eb5d11157407674642158dd4be04e3d2dfac8da577b9f1d7f370b9f1a26071e5aee7ddc566b55d7b81717be5faaea1689c83e61a33e35cdf3cbca07e0252f142ab87cd73a3fcd2a0e5fbb134049496d006a3b139a2fd89e9c4693c66e9c4b2e3d484389ec4639b5ab1c99c210c931828f2b4a866d14214d608db6082193106100d270e8d623bed4790f6c176520bc634268733f2b7e20a2eb82c85e46d87c8adbf0cdd28f4b7de621ebaba8494d6b9ba688d35059c7a545820823ea8e9d044b940a5a6dd4b2f74fdf9225cdeb8ed84579051b60f1e71c629cd25209a56d83c05d55a24d830e2cdd7ee0582f5c47e1c83924c7f3f93a6e78d8b9396bfd2431c606357e92f09427fe97dd3768e881b9ad71af2d41e488996efb036747df883485cd2360bb9debafe4fd23ef990420505fb7c9a08d6814fffb5e3e22316571f65a4c23bee0e938d08aba0dd21aecb7d610ffb03cb19120daed4bb983db28f5d6b7234196107857aa9a85d7c2cb415abe52b0883387e4f77ebf00f6fc9f6ea78040000",
    ],
    [
      "ETag",
      "oAd5QO2Z2n0Ly23fOKTCgg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-35-1604009372790"
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
      "02ff8d92416f82401085ffcbf48a09564525f180ad5553b58a981e1a635618100b2cdd5daac6f8df3b4bad6dda26ed0566866f96f71e1ce139ce02b0611d472f058ac355846aa60b1765912849b79c6712c100542c2272e75443efb1efeebd796330bb57fb7dcb69ed3a1d22a4bfc194817d8430c62490603f1d216329d29acf9322cd566567803ae47a38f7dce1a44f7dca03dd4f16a391d31df5e0645c1603a6d8aae4ffb1b63c19b0e56b17431498f9a8b5e4826fd157436d53b2344fb02279217c9450c2e58348f0226782f30a4d2ab546a56a9975d36cd79ad7cdb64960c27da6629e11bb98933e505cb1c4e53b72091601a22cc970585e5f691c07a5115d0e279e552ff57d05485a1827b8fa1b24bd1b469fe1033b47f09d63292f3275a1ee460fce6fc751a69f47dd3a5eef072115257541bce1b837f79cf15473cbb3f7ee41a19c0a4e414ad41956cd7aabd1b4ccf7586fb88e9ade632b51a0013ea3bf63102bb04396483cbd016c99146d7b020000",
    ],
    [
      "ETag",
      "wA1fTWGRxTS5HQKtxx8A8w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT MAX(`date`) as __result, `profile_id` as __pk FROM `purchases` WHERE `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-36-1604009372790",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8553ef4fe24010fd579abd2f9a08b4142990188fc3ea35c70f2d45cfbb5c607799e26ae9d6ddad1762f8df6fda8a4a2ed14f947defcd7b33b3fb4c1e44ba243dc2c4ea3107b5f9722f19392260e80a4fe36618ff38df8c36bf78c6853af3d54d76757572820c51a8345d6709d4b4cc1507dd9b4deb2b25f38c2a296b58a8e6b66b4edb6ed976d7f59a5ed7469d86241e8af401d577c664bad768ecbceb2b295709d04ce83a97ebd7f3c653b39129790fdce8c6be65035d74e363d3d344726a844c4f66530c906b5073585391608437e5927ddd2f5d17745d5f21f94970a09ccb3c35452c2cc1651a8b55aecaaaa4f74cca98ef3ec8d41ffa83c81af57f1e2c96d4c0e2d0a2da9acf15e83c3147d602fb89450273b15c5448f6609d87931122e87e4735e88575f3dd0ffd7d6e30b60e4e0fad8b7032bbb4beddee81986c09da88b4cc1551964091e96574c1ff0b2b04d4a05705ce3dbb4d9d8edd6531f378dc718f596c03631de61d5397d9bcdb82d69201459d29aa972a9aca9403d8ed6697529b73e6da6dc7f61838bce3b61d16f30e6fbb3138de3123db23f2570903674267528b6a7ee4260c227f1e85b3f1a01ff9651b31c5399d55e18a26dee734d824923ee86b5ba042a253b18c601cf9617f1005d77eb5ff21ac28df4c1ff106c434d1806caae81a0ca8915ce2d0c8e5641a44c164dc1fa2a25ceae58ea149eff7f39b20da64e5944df94bc6b3911f068332c18e724d93bce43c551fc421dbed1f64e06dade4e46ae687b7a43a0a21060538d34f9787e412f8f4d1ed5e0072f10da08d36f81faf0ad7850957505d19b12ee355ea96e3ba4e8b946465fec35a5e77379ba2465111d6909a978eaa17808d5666b97e2521889b1e07e30b44ff01b5f77b2881040000",
    ],
    [
      "ETag",
      "f2RfKFyMyZcpcirDErWpQQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-36-1604009372790"
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
      "00000002ff6d90514fc23010c7bfcbf9bac5320c04121e4086828832414d0c21651c73b0ed66db4108e1bb7b2d26fae04bdbbbfefecdef7a825d5aaca10dab34f9aa501daf1234537b88505799d1bc955468040fd0c884c9fd6ef23a7a7c6f4c7b83fe537734a8cb87b7eb69a7c3848e3f3197d03ec126c56cada1fd718242e6c8b1e552b9171933c7d276fadd59c8554e6b5b4de6e371b7370ee1ecfdc994bb5f7e3899857761f45f6471f6604bab0837a8b088d12a948ab6189ba19d4ecbbcccd0d754a9183538d85d248aaa522a229f3b7ebde1d71ae2468856bd19345b82c18c6269522a989dbfb01b1832328be8c0c3418d01e58e3ce7c6ad7b6e072210be08fc40b861f68e64c7c54fba7734a89f15b18a466b212e46b7642d0ddb1b55a107b1e4ffbc4fcda53e7f03870a1b0cac010000",
    ],
    [
      "ETag",
      "vkNVJMX6QBFDOAJF3aKW/Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00",
      "00",
      "d0bb646d1d31f24977f207d106c4c0b061220d92aa80100ad8e9ddebf4dde0fd005a14acef73d15c590ddec14cd768592c77ed4adf8cc5b7def92596c73aa3357ee2bdd278a6accabe71b649c9bb5bc08c0f1ec0fe7e1ac2183ffcd6dc337b2df94e656bc356944d38d0471c7d25c880e9ca51cf637d8457f329f05a649a5b5b3bde6893616735c433952acf4df1e59ef668579050e887f2748ca280123aa889865485f06adb8aa345138b386f0f5e369fd964f96e9344372619d646564c498b4398ddcfe98156815256e84072d8ee3d8b5cc002b0a9e51deb73feca4219a105f89fe7626ed9abaf33dab10efcfe0175807c5518010000",
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
      "Thu, 29 Oct 2020 22:10:13 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-37-1604009372790",
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
      "40",
      "14",
      "fd",
      "2b",
      "64",
      "f6",
      "d51668a9b44d9ab5dbe24ad25205aad96c3664985e7094322c33688ce97fdfcb605d8d893e3133f79c7bcefde099dcf37247a624e5f9df06eaa76f772225270414cdf1752caf4d7f29aac7ddfde5f930f41657e98fc77c3643046f5992eeab027a5234350339dd46fdbc164d456b217a98a837747bf6a9e558d664e80edc89853c0945b6e2e53db26f95aae4d4348fdafd5c88bc005a71d96762fffa6e3e0cccaa1677c09434df4b9aa822cdcf45bf178251c54539db4668a0915027b0a7bc400bff99bbf4ec7dea3ea7fb7e8ee007ce8032269a52b5b630051365c6f3a6d659c9f499689b6f0e24f256de223698289a7d9994740f27c68e2a9aa8a70a8cf370b336fce07c13aee7b1bf09926871e1ade7fdc566b55d07917173e1859ea1685a80e61a33e34cdf02bca0fe0ea4e2a5568fdbe756f9a541fec7b1b4049496d00513d73aa5f6d89aa459eab26c3c1ca59905693a4edd111da6169b38e0ec52a0c8d3a29a454bac79301eb9b63d4a6cc799240eb8a7094d2924d9c0198133a10043208713f25873054b2e2b2179d7217213fab197c4e13658cc634f9790d1a650cbce585bc05b8f0a0b44d027351dda2817a8d4b6db0f622f9c2f62ffdaeb26bc829cb2a7e82fce38a3850444d31a9ba7a05e8b1d368c04f3b5b744b09ed8e53128c9f4f733697bdeba78d3f2577a8c036ced2afd25511cfac14f6de788b8a645a3210fdd815468f9166b43d7873f88c425edb290abad17fe22dd530819d450b2afa789601df8f25f3b2e3e6271f55146",
      "2abce3ee30d98ab01aba1de2badc17b6633bf6d8251a5cab0fb1a16d1dbbd6e66833c21e4af55251b7f8586827d6c857100671fc81eed6e11f0564bb0c78040000",
    ],
    [
      "ETag",
      "8sV/IDopwdkPF3RECQbBwg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-37-1604009372790"
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
      "02ff8d92d153824010c6ff97ed15264cd264c6072c2d1b35457c6a1ce7840531e0e8eea8711cfff7f62eb3a69aa917d85d7e7b7cdf077b78caca183c5867e9738d627796a29ae9224059e74ad2ade2a544b000154b8974b3e4393ec799df18574a5683c97dd88966dd2e1132da60c1c0db4392611e4bf01ef750b202692de2795d942bd359a076951ecec36038b9a5bee0b1ee278bd1c8ef8dfa70b04e8b31536c65f87fac2d0f166cf93ac0040596116a2d95e05b8cd450db94aca872b425af4584120c6c1ea482d715139cdb34b19b6dbbd1725cc7e934db17ed8e4360ce23a6325e12bb98933e505cb13ce0afe4125a04085392e1c45c5f689cc5c6882e8793b0e51a7d5f0192966439aefe0649ef86d167f8c08e117ce758c1eb529da8c1e8c1ffed38caf4f3a81b3fecff20a4a2a44e48381cf7e7a13f9e6a6e79f4dedb299453c12948893ac386e35e5db65bce7bacd75c474deff194a8d18288d1df719729f012964b3cbc01c2487be67b020000",
    ],
    [
      "ETag",
      "4ifqd/eQA1MptspFNJT9cQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `id` = ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["INT64", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-38-1604009372790",
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
      "0000000002ff85545d4fa34014fd2b64f64593b640a1963669dc6e4597586997525db3d9b433d30147814166d018d3ffbe17b06a63569f80b9e7dc73eec7f08cee78b6414344787c5fb2e2e9dbad20a88598c2319ca66966eac16f754a6e2ead2b637e9e9f9a93c7d10810bc62499ce6096b4b511694c9e172d1890b51e6b810a20d89da96d3368f0cdb300656bfdb1f18c0932c89a63cbb03f68d52b91ceafa4ebb130b11270ce75c76a8485fcff587ae9e17e2965125f57d491d54a4feb9e8712228565c64a3e5020c9492152b96629e808537e6867cdf4fdde138edc4007ee094614a4599a9ca16a4a0228b785c167556347c46b5cd772f68e14edd49a84d664b3f3c58e3b422af0f352cb5d5aa60b24c544b5b434d114fd88a6fd64d24bfd34e83d90544c0c10d964caeb5ab9f6ee06adaba028db4636dec9fec333d5f3b383ed4ce82d972aefdb8de0b82d70d938a67b5d3109384552e5f9ae97d1c6145c00a949be0aa6f1c61d3310624227d1a39568f440623c421fd1eb688410736b3378461e0a92a7bcdc299c800431d6a991bab6b1323eada940c30b64d87f569d7b18c8161c06c7a0edab6d063c1153be1321792371d45578117baab3058fa9371e8d6654418ba76d298ab8a78ef53419100faa4ae6d15e50294aaf1787ee806e349e85dbacd464c598ce9d3e21e7622c2896480c6054e9962c585d840d3d07cb6f0426fe68fa7c0a8c73cdf21241afe797e23844f79dd65553f2bad23bbd6df012e7152d68887e605993db4ddb6fe9fc25f5eb88137f92209e4f80b08b8020d1dfd5abac1356a8e0216b18265f4ebf903b80e7c799377d70ab070b140462af8866da3b212a1056bb68ea7b5bd866d9b3dd3aaff030a17ea43ac3bb077edad72541959ca32f5525173adaa66d5a152be822008cbe27bfe1944ff01376a919ed6040000",
    ],
    [
      "ETag",
      "mmn1/RXtFbhV3W0PKpF1Cw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-38-1604009372790"
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
      "00000002ff8d90416f82401085ffcbf45848d66a6b25f150ab694988a9582f6d885971a028307477d112c27fef2c7ae8b11776f6f1bdddf7b6856356eec1835d967ed7a89a9b14cdca0e21ea3a379a978a4a8de0001a993229d627713b1f51b912a324f1effdf9ece3e73c9d32a1e32f2c24782d2419e67b0dde670ba52c906ddbadea4f64cc349555fce5fbe26511b250d0de0acb4d103ccd820574ce1f5b75fc9725ea1c38d02ec404159631da1495a203c6c6b705b52caa1c5d4db58a51430ff73f524575251591cb8a3b7c74070f6224c46438be1b4f048339c5d2645432bb5973363064641ed299fbc18001d58f5c35e9bfa75eb61dae53d44557d3ac31a8df1471028df6727109f24c369ce1d046d5e8402cf9255f3373d977bf53662ab4a6010000",
    ],
    [
      "ETag",
      "0Sv0+D4onQ04ffI5IDBZxw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "7282300000d07fc9591c8920d01b8bb28445a85ae0c2843420652d208b9dfe7b9dbe3f783f001342872119db9236e00dac184a5bb245dd4ee1667ab313617ae7444f99785e170f827a430d4273fb31ba28efd8d516b591af9b0396ad0b39a4569905e1c9d36b2da2262156cced0adf601284b9c2b0ab6aeea1fc08bf9756539d24c3f56a042e85b253c5c5a35c2086eb9d9ad042fd732c78a56bd0f1cb67755d5d3db567dda77cf5fdcfa3f310e2ea6476e52e6a3d9aa6b6b677bdb373596a9cd58ca8480233c2803dfb776172aed912192413ea731ee66003e8d2153d1d92e295ddf392b401fff3645c3bfaea2b14f7b407bf7f1632cc5b18010000",
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
      "Thu, 29 Oct 2020 22:10:15 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-39-1604009372790",
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
      "0002ff85535d4fdb3014fd2b91f73868d3b4d0a65235aa12b66a4dcad214344d53643b37c190c42176600cf5bfefc6a10c84044fb17dcfb9e7dc8f3c921b5126644a98c86e1ba81f3e5d4b460e08689ae16be167beab2ece733ba93ea7f9df9befc51f793f9b2142b42c458b2a8743259b9a839a6e37bdac964d456b290f31d1e1d03d1c1cdb23db76876367ecdac85390a72b51de20fb4aeb4a4dfbfdbd762f9332cb815642f5b82c9edffb774ebfaae53570adfaaf25fba8a2faef8b7ec925a75ac872b6dda08146411d4341458e16fe331376f23a754fd0a29721f84e70a09ccba6d4ad2d4cc165998aaca94d56327d24c6e68b03d9782b6f11595ce64d51c6252de0c04aa8a6b17ea8c03a0bd7beb50cced6a13f8f96eb20de2cbe79febcb758afb67eb0b12ebf79a16769ca72305c6b669d985b8017d44f4069511af5a87d6e959f1ab47c3b969680d20aba603cb68fe96062bb2c65639e4e86472cb581b1091b1fd121b3b93b8251c28022cf881a162d65399a0c1c0eee381e3aa91b8fc6c92466cc496398a4c729b3a963278cec0ec87d2d349c0a554925ba0e91cb70197971146e83c53cf24c09296d727dda196b0b78e9516381087aa7a65d1b151295da762f83c80be78b6879e175135e4146f9c3e616679cd25c01a2698dcdd350fb32c1869160ee7ba70836133bdf071599fe7a246dcf5b172f5afe4c8f7080ad5d6dbe641385cbe0abb1b3475cd0bc3190bbee402ab47c85b5a1ebdd6f44e2927659c88fad17fe24dd530829d450f28fa7896013f8f05fdb2f3e6271f5514669bce3ee70d58af01aba1d12a6dc27f608bf8e430cb8d66f6283a3d1be6b6d8e36231450eaa78abac5c7423bb1463d833088e30f4cb776ff004c170dc478040000",
    ],
    [
      "ETag",
      "mMgM9sVPl0dp+flzkKmxow==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-39-1604009372790"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92d14ec2401045ff657c2d49112cd28487a28824800825d1184296760ac5b65376b71224fcbbb315d1a889beb433d333db7b6fbb87e7380bc18545bcdc142877674bd4f7a618a32a12adf89653a6102c402d964cd6237f530b9decb5aba78fd3ed433c9434d8b65a4ca86085a900770f518c49a8c07dda432652e4b5809222cde6656781dee56638f1c7bd6197fb9442d30fa7fdbed7ee77e0609d1643a1c5bce4ffb1363b58b0a6c5182394980568b4e492d618e89eb1a9449a27585154c800159470f96029a9c88524aaf0a4526b56aa8e5db7ed66ad71de68da0c2614081d53c6ec74c2fa409316c998b6ec121c066459b2e1a8bcbef0380e4b23a6ec0d7da75eeafb0ab0b4284e70fe37c87a57823fc307768ce03b27522a327da26efa77de6fc771a69f475d7b7ee707a134277542fcdea033f1bdc1c870b3a3f7f64ea31a49e220159a0cab76fdf2a2e1d8efb15e91899adfe36a59a00581e0bfe336d6e04622517878036ed4470e7b020000",
    ],
    [
      "ETag",
      "4fTq3d6nzGtUYUwXiNroMw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["STRING", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-40-1604009372790",
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
      "40",
      "10fe2b64ef8b267da12f94d2a4f16ae594a4d21ea57adee5d22ecb826b814576d118d3ff7ec362d5c69c7e62d9799e679e999d79465b968568840216df97b478fa76c703d44054e2186eef32cc6e4c6f7bf17b41cddbe8f4d4099d5f8fe3312058c51238cd13da14bc2c0815a3d5b21517bccc71c17913849a7dbdd919e87d5db77a66d7b474e0099a4433966d817d2b652e46edf63e772be63c4e28ce9968119ebedeb71fbaedbce0779448d13e4cd9862ca2fd79d29384132c19cfc6ab251828052dd634c52c010b6fcc30f87e28dd62386dc5007e608462427899c9ca1648109e452c2e0ba58a46cf48d97c77404b7b664f7d6d3a5fb9fed106a7157973ac61a1add7051565221bda066a8a5842d72cdcd4917cabfdf0e697100107b75850b1d1ae2f6ccfd6deae36da583bd126eed921df71b5a39363eddc9baf16dae9cd41101c8754489629bf3e0e125a797d69a9f3f1212b029690ac0eae4d7d803b43dd0aa2c024d1b06704914e8360189806ee053ab1fab41f0614034f56ea8a85339e19c170d03742b3dbd1038bf4426bd0e91986412bad81a55b5dd2377b5ddd44bb067a2c98a4674ce45cb0baafe8da737c7bed7b2b773af16d554684a17767b5b9aa88f73e251409a04feada5551c62153f5488eebdbde64ea3b57763d17331a63f2b4bc87c988702228a07181532a6971c943681a5acc978eefccddc90c18eab1177b8440a33fcf6f04ff29575d96ea8b96bee7b8e7cac01e71859352411eea039ae4e015ed768dffcbb8ab4bdb73a69feb7440e32f2060196a3afab9b2bd1b545f7934a205cdc8d733006015f872a7f70b06585831482324fcc3c41151252105ad278fa5ca5ecdee774cbd6720052ee487584729",
      "bf2e56a548539ac9978aea05ab9aa542a57805411006c655dddefd03da94673ee0040000",
    ],
    [
      "ETag",
      "jnaiY7RkHZPe7hfBBIdIXw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-40-1604009372790"
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
      "0002ff8d905f6f823014c5bfcbdd2b24d59919487cc0853813e7269b4f8b3115ae0c052eb6454308df7db7750f7bdc4bff9cfe4e7b4e7b38177506211c8afcd2a2ea1e72341bbb4850b7a5d13c35546b040fd0c8dc92afd15b90d4d142248bac6a14dd26e565339b31a1d36fac24843d1c0b2c330de1570fb5ac906dfbbd72373266bac62acbf567bc8813162acaacb0deae56d17c15c3e0fdb135e77f59768307273a24784485758a3605873b616a96b6a0965553a2afa955296a70b03bc815b58d54443e2bfe44f8a327311122789c8ea78160b0a4549a826a66b71f9c0d0c19592674e37e306240b925573dbaf1caf2d875b83a80a3ed7e4df3cea07e57c40934dac7c53dc833d97086431bd5a207a9e49f7c29cc7d3ffc0022994934a6010000",
    ],
    [
      "ETag",
      "bMAO9RnAG0RGdmprow4lqQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "7243400000d07fd9e7c84890a9be112b1249b64b517dd941562d7559773afdf7667afee0fc80284968d791be2e68055ec112edd56db2b51b5197a79408bbca4d5a9731181c0e539d4f2f50890d037b065f4cf57257b593c8a9e2ddbb55504d331f95e1a3d49ca9d7a8b31a230c51981e8ad4b5a55bb343b8c2233fde2e257f5c271ed8ac0d2919f62b8c9b4721c19c7024f858a83264974b564ad77763e0dfe88d59723f66d66c8475307f86c2dd47b60857d93997e7ce24886517ab184e7bad92adf66bc4419aaffa721c1f9104a19e62df13e2ee5c60b001746e584b3bc29e594951d50df89f937e69e8b3afd3a8a52df8fd03219cf31b18010000",
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
      "Thu, 29 Oct 2020 22:10:18 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-41-1604009372790",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6f9b3014fd2bc8fbb82690840412295aa394b69112b212d2eea109d9c650b7802936a9ba2aff7d17d364ad2ab59fb07dcfb9e7dc07cfe89e17319a20c2d3879a554f5fee04412788299cc2ebeed7f0e2ab487e387f1f437235de493ecacf1fa75340f08625715e66ac23455d512627db4d37ad445de24a880e24ead8bd4e6f64d996351e387d676c014fb22c59f2e21ed8b74a9572629a07ed6e2a449a315c72d9a5223fbe9bbbbe5956e28e5125cdb79226a848f363d16f99a05871514cb71b30504b56452cc73c030bff9931397d9bbacb71de4d01bce394614a455da8c616a4a0a248785a573a2b9a3c236df3d5016dbca5370f0d2ab23a2fa202e7ecc488b1c2917a2a99711eac57c6c23f5f07ab59b858fbd1667ee9ad66ddf97ab95df91be3e6d20b3c43619231cd35a6c6a9bef97001fd9849c50bad1e36cf8df24b8316efc7d210405ab2361839d608f75c6b4c12e2d0c41d0c496231425ce20cf18058746c333b260c034f8b6a162e4431706d8afb3889d888f4229be161e452d78ea81313cb25cce9c714ed4fd063c5153be3b21492b71d4237c122f4a230d8faf359e8e912125c67eaac35d614f0daa3820201f4414dfb26ca052835ed5ef8a117cce6e1e2da6b27bc6429a64f9b0798718233c9008d2b689e62d54ac4d030e4cf56de1980f5c4be1f82124d7e3fa3a6e78d8b572d3fd24318606357e92fda84c1c2bfd0760e886b9cd51ab26b0fa804cbb7501bb8deff01242c699b055d6dbde0276a9f0296b08a15f4f3690258073efdd70e8b0f58587d90910aeeb03b543622b462ed0e715dee0bdbeeb93dd7451a5ca977b1818e1d17bec9c87256a8978adac587425bb15a1e411084f1fbba5bfb7fce7fc93a78040000",
    ],
    [
      "ETag",
      "vZ5G+ofX7zwTbQ9vsi6mFw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-41-1604009372790"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92dd6e82401085df657a0b095a8a95c40badb692e04f15bd698c5961402cb07477b131c677ef2cb5b6699bb43730337cb39c73e008cf6911810b9b3479a9501cae12548fba98a1ac3225e956f2422218808a2544065eb329853f91cb49e594cb3d0efbc526e9748890e1167306ee11e214b34882fb748482e5486b21cfaabc58d79d01ea50eae13c9879e307ea731ee97ebcf0fd6ecf1fc0c9b82c464cb175cdff636d753260c737338c516011a2d6520abec35079daa6647999a1297925429450c3f58344f0aa6482739326a6dd301b8e655b56fbbad56cb52d02331e3295f282d8c59cf481e28a6533fe4a2ec12140d425198eebeb9ec669541bd1a5370e1cbbd6f7152069719ae1fa6f90f46e197d860fec1cc1778ee5bc2ad485baf727dddf8ea34c3f8fea7783c10f422a4aea8204de68300fbaa3a9e65667efbd834239159c8294a8336c58f6ed4dcbb1de63bde33a6a7a8fab448506848cfe8e61aac08d5926f1f406492945a57b020000",
    ],
    [
      "ETag",
      "TI22srLOsVOu6pVveHDnbg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["STRING", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-42-1604009372790",
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
      "000000000002ff8553ef4fe24010fd579abd2f9af0a350104a423c0eabd7048b570ac65c2eb0bb9dd6d5d2adddad1763f8df6fda8a4acce9a76e77de7bf36676e699dc8b342423c244fc5040fef4ed4e32d220a0698cb7d1797706c98a4e98c996967717afe44ac6e3312244c952749b25d054b2c839a8d172d18a7359643497b28942cd5eb7d939317ba6695b83eec03691a720896622bd47f6add6991ab5dbfbdcad58ca38019a09d5e272fb7adf7eecb6b35cde01d7aa7d98b28d5954fbf3a4a789e4540b998e970b345028c8d7b0a522410b6fcc907d3f946e09ba6dc5087e141c28e7b24875690b25b84c23111779a54a46cfa4b2f9ee4016cecc9906c674bef482a30ddd96e4cdb14195b15ee7a08a44378c0dd6148904d622dcd491ecde38f7e797184107b75481da18d73f1ddf31deae36c6d8383526ded921dff58ca3d363e3c29f2faf8c1f370741741c82d222adfc069425507a7d69a9fbf1214b02d598ac0eae07e609ed0c4d9b456cc0a3a1d56791098c0dd9a04f2d6672bb07bd9001459e2ed52b164d656ab26e08b609bc033d935b834e8786f690dbfd7e643166f170d8195a3d18925d83fccd858633a132a944dd5772edbb81b30efca5379d044e554644b17767b5b9b288f73e351689a04feada9551213153f948ae1738fe641ab82ba79e8b19c4943f2d1e7032229a284034cde91634e49732c4a691abf9c20ddcb9379921a37aecab3d4291d1efe73742f094555dd6d5972c02dff52e2a037bc48a26450579ac0f8466e895ec768dffcb78cb4bc777a79feb7450e30f2270196a3af9b574fc1b525ff910410e29ff7a06105c05bedce9fd822116570cd3288dff38715c9549780ef5e4896d65af66f73a76dfb64805cef587d86068ed5b5c6a948ab08554bf54542f58d9ac2a54a85710067160bcaadbbb7ff3e8f5eae0040000",
    ],
    [
      "ETag",
      "fF2LelVaAb0bU3NjgVoVog==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-42-1604009372790"
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
      "4f",
      "c3",
      "30",
      "0c",
      "85ff8bb9b652d926a655da8141352a8db1152621213465a95bbaa5714952c154f5bfe3741c38724afcfcf9e5391d9c2a9d430c87aafc6cd19caf4a745b7fc9d0b6ca593e1ad216210074a264f2bb48d436d5f2f83879dd8cad7eaaee97e3723e67c2ca0fac05c41d1415aadc42fcd6811635f2d87e6f0647c6dcb9f14aba7e499649c6424db917d6bbd5ea76b14aa00ffe8c35a77f8dbcf7011ce990618106b5449fa2317444e952bfa01575a330b4d41a89160678689486da4618a2909570320aaf6fa24914cdc6d3d1741631a8480a57916676f7ccd9c091132aa32fde0f3c30d48bb343bb31c4e616f3df0e3bde917fd7711e675a0c400afea487ca5deafe070f4adcbc81010000",
    ],
    [
      "ETag",
      "xfElQIncjM4XP3snOiDG3g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "52",
      "83300000d07fc9b976a010016f6c65694a4759442e0c60588a404b526270fc7719bfe0cdfb0145556142723af578042f8017076d5fed4f37c190595df6f9b111470b1a89bc24054aa041bc876a310cc3d01c39915c476caabe093237886dcba7b16cb2702c6df8c6220365c7c949e9c5cec35c5da76b94215fb1ba5eae95e8dcaa6e716d554f43d28321ba9c68e56bee78b8a8563a43cdf15ac296676b7cc7d483fc9eae26e6ca9a9c9f2636dc3d81ea859e95af25afccafd56da42ceece6893074e82e633709048ebc747b01c52a1b4035db9c803033b80bf6fdd8c49de6d59096ada0efccf73ca6f78eb1bb898f10c7eff00c825609718010000",
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
      "Thu, 29 Oct 2020 22:10:20 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-43-1604009372790",
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
      "8553db4ee33014fc95c8fb4a9b4bd3ab542ddd362c95da1492b408ad5691ed38c190c621764015eabfef89435910123cc5f6993933e79217f4c08b044d10e1d963cdaac38f7b41d019620a67f0faaba6778b64e71c2e9f7bd7d14531ae76b757d7d3292078c392785fe6ac23455d512627dbb09b55a22e712544071275dc5ec71e58ae658d7b436738b68027599eae78f100ec3ba54a3931cd9376371322cb192eb9ec52b17f7b379f1cb3acc43da34a9a1f254d5091e6d7a23f7341b1e2a2986e4330504b56c56c8f790e16fe331372fe317597e37d3703f013a70c532aea4235b620051545cab3bad259d1e405699bef0e28f456de3c32a8c8eb7d111778cfce8c042b1cab43c98c8b60b33696fec52658cfa2e5c68fc3f9a5b79e75e79bd576ed87c6cda5177886c224679a6b4c8d737df3e102fa09938a175a3d6a9e1be5d7062d3f8fa52180b4646d301e5a036c8fac3149c990a6a35e9fa416236444867ddc23161dbbcc4d08c3c0d3a29a850b510cb16de3940de251923ab14b1d128ffad88e5342529bdab8ef601b1dcfd073c5155b70590ac9db0ea19b60197971146cfdf92cf2740929ae73b5688d3505bcf7a8a040007d51d3b18972014a4dbb977ee405b379b4dc79ed84572cc3f4103ec28c539c4b06685c41f314abd6228186217fb6f61600d613bb3a05259afc79414dcf1b17ef5afe468f60808d5da5bf288c82a5ff5bdb39217638af35e4a93da0122cdf416de0faf81790b0a46d1674bdf5825bd43e052c65152be8f7d304b00e7cfbaf9d161fb0b0fa202315dc6177a86c4468c5da1de2badc57b6eb58aed3431a5ca94fb1c1c03a75adc9d164647b56a8d78adac587425bb15abe812008e3f775b78eff009dfd6d2778040000",
    ],
    [
      "ETag",
      "BuchDdV2yHw3QTFn9rVYPQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-43-1604009372790"
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
      "000002ff8d92dd4ec2401085df65bcb4c462f991265c80a2620a6229578690a59d96e2b65b77b71224bcbbb315d1a889deb433d36fb6e79c76074f691e810bcb34792e516e4f12d40fa6f051955c2bba1522570816a0660991fc54fade5972378a5f9dbed3f43a932cad6fba5d2254b8c28c81bb8338451e29701f7790b30c692d14bcccf245d559a0b785194e037f38bea13e1391e9c733cfebf5bd01ecade362c4345b54fc3fd6e67b0bd662e9638c12f3108d96428a35867a686c2a96151c6b4a94324405155c3d48a4280b2685a8d1a4d6706af596ddb0ed8ed33e6f776c02b908994e454eec6c4afa400bcdb82f36e4125a04c8aa24c371757da1711a55464c391c07ad46a5ef2b40d2e294e3e26f90f4ae187d860fec10c1778e65a2ccf591baf6ee7bbf1d47997e1e75d50b063f08a529a923120c478369d01b4d0c373f78ef6f35aa891414a4429361dd6e5c34db2dfb3dd64b61a2a6f7b85a966841c8e8efb84d35b831e30af76f68381e917b020000",
    ],
    [
      "ETag",
      "l+rRL/gJMfz3B35L9Pmi1w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `date` = ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["DATE", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-44-1604009372790",
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
      "0000000002ff85536d4fa34010fe2b64ef8be6fa0294bed0a4f17a2da7242df528d598cba55d60c055ca22bb78d798fef71bc0aa8d39fd54bacfcb3c333bfb44ee591a9221f159fc5040befb72c77dd22020698ca7f3bf5fe9f221b3c3c9851bea136d3c8bce77e3d10819ac5409bacd12680a5ee40188e16ad98a735e6434e7bc89464dc3686a3dd55055b3d3d7fba68a3a01493463e93daa6fa5ccc4b0dd3ed46ec59cc709d08c8956c0b72fe7ed47bd9de5fc0e0229dac725db5845b43f2e7a96f0804ac6d3d16a89010a01f91ab6942518e15519fadf8ead5b8c6e5b31921f590034087891ca32165a043c8d585ce4952b193e912ae69b0fb2b466d6c453268b95e39d6ce8b6146f4e152a94f53a075124b2a16cb0a78825b066e1a646b27be587bb982382096ea900b151ae2f2cd752944d48256c949172a68c9de9b1d6769493b353e5dc5dac2e95ef374720a60d41489656593dea2750e67c1ea7fdfe124b019558bb06d77db547b5816afa91df0fa241a7eb472af8fec0ef7769c75703d30023f481a24e96ee958aa63cf543bf0b7a147542959a86aef67b0353d37bfd281ca05aa326f4cc20f47db26f903f3993306522e382d53325d7aeed596bcf5d3993b167556d4414e736adc3954dbccd29b149247dd0d7be4419c74ae505d98e67b9e389675f59f54ecc20a6c16ef9805b11d14400b2694eb720219ff31087462e174bdbb317ce78868aeaa22f0f0c4186bf9e5e05de2eaba62cab5f322d1bd8bf31bca24951111eeb0fa2abbada54f5a6d625fb7de3ff4ece6a6eb9f6e463330d3d7e2303df422d273f57967b43ea231722c8210d3e5f032457c0a74ffaf0be908b2f0ccb0889ff71e90251160972a8978f6dab78b5dad03543ed918a9ccb7758b7ab1fa65c7a948eb085543e7754bfaf7258155488171282b8338eed9c23fa0f64d3ebd0df040000",
    ],
    [
      "ETag",
      "Mx+aSqpIdCHRd2C1ALfGyA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-44-1604009372790"
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
      "ff8d90c16ec2301044ff657b4da450a222903840155a2484dab49c2a848c595c43920df6a61545f9f7ae03871e7b89d79337f68c2f70b4d50e46b0b5e6d4a03bdf19e4d730e4e89b82bd2c35551e21026465849cccac3a659cf6cdd19aa1d6e6275fce26e3b1105e7f62a9607481bdc562e761f471814a9528b6cdc675270ac6e73a28f3e57bf694e52294b40bc272b5584ca68b0cdae88fad3efecbb26e2338d036c73d3aac348614b5a3036a9e87825e957581b1a7c669f4d0c1dd0fe3a8a995238a4589d334ee3d2469920cfb83fbc13011b020add85225ecea4db20113ab22a76fe9073d015c374ad57df7fdeae4d0e136addbf5cd343d33fa174792c063b83cb90679a4108e2534bb0623d04a5ef2d9f275dffe020fbbcfd6a6010000",
    ],
    [
      "ETag",
      "AFiaqEt43gkig9ccgzRNFA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "4b7282300000d0bb642d0e13a44a7780a27cb47c0a71d864300682164809ff4eef5ea7ef06ef076484502170d73c690ddec19c416d4dd62e978dcd489abe099cc144b7026a77c5ed0f257a5a091443e60d6283a353446a382003e6681931aa0b6e2efe1b6717ee75713fedec3093adb3016777aac348aa34864534aa66d28676f7083ddbe51e79906b623113fb178bd9fcf835771597269371e47cded243a19a7a6fa452a37c7b087e5ce3dc2301eef502a9e7269aec98d37beb9f525a6176938f81a439c7adbef3a73da6fb65dc26fa264be59ced590056804ebc6ca9c0e52baba89ab602ff73dccd9cbefa06cd5ada82df3fa167e10618010000",
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
      "Thu, 29 Oct 2020 22:10:22 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-45-1604009372790",
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
      "02ff85536b4fdb3014fd2b91f795b6699bd087548daa0d5ba536dd9214c4a629b29d9b6048e3103b4c80fadf77e3500642824fb17dcfb9e7dc479ec8ad281232254c647735540f5f6e2423270434cdf0d5bd4a36eceaae785cab0ba59d5ffc315a06d96c8608d1b014dd97397494ac2b0e6aba0bbb5925eb925652763051c7713bfd53dbb1edc97034184d6ce429c8d3b5286e917dad75a9a6bdde51bb9b4999e5404ba1ba5cee5fde7bf7835e59c91be05af5de4af65045f53e16fd9a4b4eb590c56c17a2815a4115c39e8a1c2dfc6726ecec6deaaea0fb6e86e07bc181722eeb4237b6300597452ab2ba3259c9f489189baf0e24f4d6de22b2b8cceb7d1117740f275642358df54309d679b0dd582bff7c1b6ce6d16aebc7e1e2bbb7997717dbf56ee387d6e5772ff02c4d590e866bcdac3373f3f182fa09282d0aa31e35cf8df2738356efc7d210505a411b8c47f629ed8fed094bd988a7e3a1cb521b181bb3914b87cce613079c8401459e11352c5ac8c2a6c9d819bb4e4c077d3776d810e2311d9cc629771dce184fd870400e27e46f25342c852aa5126d87c865b08abc380a76fe621e79a68494d6b95eb6c69a025e7bd45820823ea8e9d0448544a5a6dd2b3ff282f9225a5d78ed84d79051fe10dee18c539a2b4034adb0791aaa8d4cb061c49f6fbc2582cdc47e1c838a4c7f3f91a6e78d8b572d7fa14738c0c6ae365f1246c1caff66ec1c111734af0de4be3d90122d5f636de8faf00791b8a46d16f273e70557a47d0a20850a0afef934116c029ffe6bc7c5472cae3eca288d77dc1dae1a115e41bb43c294fbcc760683fea44f0cb8d2ef62436774ec5a93a3c9087b28f47345ede263a1ad58ad5e4018c4f1fba65b877fb01963f978040000",
    ],
    [
      "ETag",
      "5YdMbYqnzLsVst4ZczTDRg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-45-1604009372790"
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
      "5b",
      "4f",
      "c2401085ffcbf8dac6a25ca4090f452e62b859ca932164d94ea1d876cbee164308ffddd98a68d4445fda99e937db734e7b8497380bc18555bcde15280f576bd44fa6f05115895674cb45a6102c40cdd644469dfd76f7983772ee5f47696f32617d1e7bad16118a6f3065e01e218a310915b8cf47c8588ab4c64552a4d9b2ec2cd087dc0c67813f18f7a94f4568faf17c38f4dac32e9caccb62c8345b96fc3fd616270bb662e5638412338e464b2ec516b91e189b8aa57982b61285e4a8a084cb076b298a9c49216c9ad8d59a5da93b55c769de366e1a4d87c04470a66391113b9f913ed042b3c417afe412ea04c8b224c35179ddd3380e4b23a61c8c837ab5d4f7152069519ce0f26f90f46e187d860fec1cc1778ea5a2c8f485ea0d27de6fc751a69f4775bca0fb83509a92ba20c160d49d05de686ab8c5d97bfba0514da5a020159a0c2b4ef5aed6a83befb1de0b1335bdc7d5b2400b38a3bfe321d6e0462c51787a0397c28fde7b020000",
    ],
    [
      "ETag",
      "fDvjqJp7pcR/fmFOOaGciA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `stamp` = ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-46-1604009372790",
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
      "546d4fe24010fe2bcdde174d80be4281c4781cf6bc2650b0148d77b9c076bbadab6db776b71a63f8ef376d4525e6f413cd3e2ff3ccec2ccfe88ee5111aa39025f7152d9fbeddf210751095388153439d0a467379a1db9994d63a618f5cbf38390106ab550267454abb825725a162bc5ef5929257052e39ef8251d71a74f5816669dac8b40d7ba4814ed0349eb1fc0ed437521662acaafbdabd84f324a5b860a24778f67aae3e186a51f25b4aa4500f4baa5045a89f173d4d39c192f1fc64bd820095a0e5866698a510e14d1985df0fad7b0c67bd04c80f8c504c08af7259c7020bc2f3982555d9b8a2f1336a62befb402b67e64c0365ba587bc1d11667b5787bac60a16c362515552a3bca167a8a594a372cdab64871a7fcf417734020c10d16546c95ab5f8eef28ca564848b7554e945365e29d1d8a5d4f393a3d56cefdc57aa9fcb83e00216e448564791336c0614aeba02ff3743fde622dc0128ab7e0c6d606581f6aa3300e6d120fcd7e186b340c87a1ddc766a8919145ad28a41874b2766f5438e7f988ea614c4c8b68763804654c6c6c8f6c3336ad7e34d0681c633beaf72db4eba0c792497ac644c1056b878aae7c37703681bff6a693c069da88310ceeac0d5737f13ea7842681f4495fbb1a651c2ad537e47a81e34fa6817be9b44b31a309264fab7b588b18a782021b9738a39296731ec1d0d072b1720377e14d66a0686e7ab9670834fef3fc26089e8a66cab2f945813b7756c164be6c32ec499738ad1ad643fb810ccdd0ba9ad1d5fb816e8c7573ac5b3d4dd37ea3ddaef37f736f3d777c77fab9b50e1e7f8101efa395a38bb5e35fa3f6c8a7312d694ebede0c2037c097cf7cffe6800baf0ecac0fe4a067b48445d8494b4dd479635f15ab56598fa60801a72293f609665ee075f7bd48e34837fa7978eda37570fab812af14a0210d6c873bd7340ff01e8eb4d4ff3040000",
    ],
    [
      "ETag",
      "2/CsientQ17mtt4Ugiwo1Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-46-1604009372790"
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
      "0002ff8d90414fc2401085ffcb786d9322040209073155898440957830842c655a0b6da7ce4e2540fadf9d2d1c3c7ae9cebe7e6ff7bdbdc0212b7730826d967ed7c8a7bb1465e986086d9d8bd5a5a2d222788062522517cba5e192853fbaf3d72c790acee77e741c8f95b0f117160646174832cc7716469f17284d816adb6cb83d513139554e99cedfc3e73052a1a09d13e6abd9ec61320ba1f1fed8aac3bf2cebc6833d6d234c90b18cd1a5a898f618cbd415b4a6a872f42dd51ca385166e7fa44c756598c857c5eff5fd4e3fe805c1b03bb81f0c0305738a8d64542abb7ad36c2024268fe8a8fda0a300b7a3564ddaef4f2bbb0eb769ddac6fa6c949d02e983481457779700df2482e9c6868e11a3d888dbee44b26d77df30be6f77eefa6010000",
    ],
    [
      "ETag",
      "PQQarnrtrW3NKifF0zz6Rw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00d07fe9b318e466d81b204e070c2b5a832f0dd4ca45a8d002d22cfbf7999d3f383f2023840a8187e78332f00164a6d94bb20c3ad5355e34e548ae59435962716851bd25777cf1cb9b5b8f5b073d6fdaa723671b13ef7c4a50818a2ad424eaa6eda94672539a1d63f6fa20027577e72bde17ed34c024252c2f277d16e1b54e4bacab7596b79b68dc1c5f91a5acfc360ffba33fbb8d78ecf66bab50f6ae7b5edd7b518f59e441e2a58aafc66d7c3eb0efae088f9af461925fe234b8f6a2c9e0c98391917cb53bd5a91c0fc2b18f47234078360bb00074ee2a4e05aede59ddb4ed05f89fe34176f4dd7769c62907bf7fa212237918010000",
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
      "Thu, 29 Oct 2020 22:10:23 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-47-1604009372790",
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
      "000000000002ff85535d6fda3014fd2b91f75a2084d00424b4221a5a24085b08ada6698a6c7393ba0d711a3b4c55c57fdf8d53ba5695daa7d8bee7dc73ee479ec9832876644c98c81e6ba89ebedd4b46ce08689ae16b2985ebacae0e72379a1fe6b63dbc5d4eb3e9648208d1b014dd97397494ac2b0e6abcdd74b34ad625ada4ec60a28eeb75fae7b66bdba381e778231b790af274298a0764df695daa71af77d2ee66526639d052a82e97fbd7f7dec1e99595bc07ae55efbd640f5554ef73d1efb9e4540b594cb61b34502ba812d85391a385ffcc1dbb789fba2be8be9b21f8203850ce655de8c616a6e0b248455657262b193f1363f3cd816c8265308b2d2ef37a5f2405ddc399b5a39a26faa9046b1ead57d6229cafa3d5345eacc36433bb0e56d3ee6cbddcaec28d757b1d4481a529cbc170ad8975616e215e507f074a8bc2a8c7cd73a3fcd2a0c5c7b134049456d00613cf3ea77ddf1eb194793cf5074396dac098cfbc211d309b8f5c70770c28f28ca861d14216ee900275284bbc611f12d7ef9f27beeff8c98839fd91e7ba6c6053723c237f2ba1e152a8522ad17688dc468b3848e2681bcea671604a48699debcbd65853c05b8f1a0b44d027351d9ba890a8d4b47b11c641349dc58b9ba09df01232ca9f368f38e394e60a104d2b6c9e866a2577d830124e57c12582cdc47e9c828a8c7f3f93a6e78d8b372d7fa5c738c0c6ae365fb289a3457865ec9c103734af0de4d01e488996efb036747dfc83485cd2360bf9b90da25fa47d8a20850a0afef534116c025ffe6ba7c5472cae3eca288d77dc1dae1a115e41bb43c294fbc2761db7ef3bc4802bfd21367006a7ae35399a8cb08742bf54d42e3e16da8ad5ea1584411c7f68ba75fc07d540842478040000",
    ],
    [
      "ETag",
      "poi42MGvod9FvF005WLAgA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-47-1604009372790"
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
      "0000000002ff8d92dd4e83401085df65bca509d54a2d492f50abc5d01f5b7a654cb385a1ddbab0b8bb6848d37777166b356aa23730337cb39c7360074fbc48c187155f3f57a8ea93359a7b5bcc5057c268ba95b2d0080ea0616b22ef5651e84deae16acaeba1d073e437f975d0ef13a1930de60cfc1d641c45aac17fd841c172a4b5448a2a2f964de780a94b3b9cc7b3707c4b7d2e53db8f1751145c4603d83bc7c59419b66cf87fac3dee1dd8cad50c3354582468b5944a6e3131a1b5a9595e0a6c6959a904353470f360ad64553225658b26ad4eb7d5f6dc8eebf6cebaa7dd9e4ba09009335c16c42ee6a40f8c344ccce42bb9048f00d59464386bae2f34e66963c496e138f63a8dbeaf0049cbb8c0e5df20e9dd30fa0c1fd82182ef1ccb6555982375134d82df8ea34c3f8fba0ee2c10f421b4aea88c4e168308f83d1d4728f07ef97b5413d559282d468336cbb9d8bf3aee7bec77a256dd4f41edfa80a1d4818fd1d436ec0cf98d0b87f039eb628da7b020000",
    ],
    [
      "ETag",
      "JbLI6OyHbPiyHlsSeiFmDA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `amount` = ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["FLOAT64", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-48-1604009372790",
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
      "536d4fe24010fe2bcdde174d7829506821211e62cf6b02454bd198cb05b6db695d2ddddaddea79c6ff7ed35654624e3f51f679996766679fc82d4f433222018fef0ac81fbfdd88803408281ae3e9e04fd7eacce71749f0f7c1f5afaf4e8f8147e7e3313278a992749b25d094a2c819c8d16ad98a7351643417a289464dc36a7606baa1ebc39ed935873aea2424d18ca7b7a8be562a93a3767b57bb150b112740332e5b4c6c5fcfdbf7dd76968b1b604ab6f74bb6b18a6c7f5ef428118c2a2ed2f16a89010a09f91ab6942718e14d1906dff7ad5b9c6e5b3192ef3903ca98285255c6420b26d288c7455eb992d113a962befb204b7b664f7d6dba58b9fec1866e4bf1e650a3525baf739045a21ada067b8a78026b1e6e6a24bbd57e788b392298e09a4a901bedf2a7edd99ab6f3d0c6da9136714ff6d58eab1d1c1d6aa7de6275a61d5fed81983704a9785aa5f569904099f465a0cec76b2c055461f51a5c9bfa80762c7d184481c922abd70f221d82c00acc3eed053a1b1a60840150d4a9d2bd52d154a48615853a850ed375d3d0fbbd010c07c3ae4ef588861d93f506fda8d735428b3c37c843ce159c709909c9eba9924bcff1edb5efaddce9c4b7ab36228a933ba9c3954dbccfa9b049247dd2d77389728195ca2b725cdff62653dfb9b0ebad98414cd9e3f20ef722a2890464d39c6e41413e17210e8d9c2d968eef2cdcc90c15d5559fed18928c7e3dbd09fcc7ac9ab2aa7ec98fd962e20f8c2ac18e724193a2e2dcd71fa4d3ea23e3b9f17f1b7735b73d67fa850d7afc46063e855a4ece57b67745ea230f22c821655fef00922be0cb17bd7b5ec8c5078665a4c2ffb8714c9645580ef5e6f16d15af561bdd7ec7ea938a9cab0f58cf3077232e3d4a47d842aa5e3aaa9f5739ac0a2ae42b09415c18d7714f11fd07edbf0140de040000",
    ],
    [
      "ETag",
      "6x281MMVlbzwNThYGBeifQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-48-1604009372790"
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
      "5f4f833014c5bfcbf515224ce264c91e36254a42a6a2332666590adc210cb8ac2dd365d977f7b6f3c1475ffae7f477da737a846dd5153081ac2a7703cac34589fad92c525443a3154f3d750ac101d4a264721747f577fd9ecd8ac7bbe22dbcf4a3621b94d329132affc456c0e4089b0a9b42c1e4e3089d68916debb5b43732a60fbd51e2c56b741fa52cb4541861b14c92d93c89e0e4fcb1f5db7f595627076aca52dca0c42e4793a2975463ae63535089b66fd05534c81c1558d81e9492865e4822971537b871fd6b2ff0bcf06a3c1a871e830de54257d431bb7ce16ca0498b26a52fee073e03d22eb9eac68e7b9647b6c3de021c6df56b9a1f34aa27499c40a179dc3b07b925134e73682d07742017fc930f953eef4f3fa6f0560fa6010000",
    ],
    [
      "ETag",
      "qIEjxjXbAdODdV9/1Edk4g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00",
      "00",
      "d0",
      "bb",
      "64ad4e0a444377221d1481a2286ddd64424830fe081f09e8f4ee75fa6ef09e8032c69b86b4e599dfc03b18a8614fd864ada063e9dc4f6823e61406074b5fbef2c3ce8169c2fab4f7b01acf2224cd783c3b29eb722c53ffb3aba3cc257ee9cf3d310dee38a9d29a5438a619dae000b9740807d869f6f84ef6198cb49d9a6b892cea7ef48feecddcdccbf48ad5f654248213a35de761b4db6ac845f6e31a2859ec572436f2dc3bbbd3db494aa1fb8a32b8b42b5aa85c50558802addab3349778cb82bbe6d7a00b9dd86b17c7f032f8588311e0bd92356f887c654d64db23f03f27eda0f8abef705af31afcfe0107edd47e18010000",
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
      "Thu, 29 Oct 2020 22:10:25 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-49-1604009372790",
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
      "6f9b3014fd2bc8fbb826405e2491a235a2748d9490959054d33421632ed42dc1149b765d95ffbe8b69ba5695da4fd8bee7dc73ee832772cb8b844c49ccb3bb1aaac72f372226270414cdf0d5fdfaf77a07d9ce3d2f2f59f8676bf3fe78349fcd10c11b96a4fb32878e1475c5404eb79b6e5689baa495101d4cd4194c3af6c81a58d6a4eff49c89853c0979bae4c52db2af952ae5d4348fdadd4c882c075a72d96562fff26edef7ccb21237c09434df4a9aa822cd8f45bfe58251c54531db6ed0402da18a604f798e16fe3393f8f46dea2ea7fb6e86e07bce803226ea4235b630051345cab3bad259c9f489689baf0e64e32d3d373498c8eb7d1115740f274642158dd46309c679b05e190bff7c1dace6e162ed471bf7c25bcdbbee7ab95df91be3eac20b3c43d13807cd3566c6a9bef97841fd04a4e285560f9be746f9b9418bf7636908282da10d468e35a2f6d89ac469ecb074dc1fc6a905713c8e9d21edc7169b0c6090c44091a745358b16a24846493cec253442ee381a508823dab759e48c1367304c46f67034268713f2507105675c9642f2b643e42a58845e14065bdf9d879e2e21a575aece5a634d01af3d2a2c10411fd47468a25ca052d3ee851f7ac1dc0d173baf9df01232ca1e377738e394e612104d2b6c9e826a25126c18f1e72bef0cc17a623f8e4149a6bf9e48d3f3c6c5ab96bfd0431c606357e92fd984c1c2ffaeed1c113b9ad71a72df1e488996afb136747df88d485cd2360bb9dc7ac14fd23e0590420505fb7c9a08d6814fffb5e3e22316571f65a4c23bee0e938d08aba0dd21aecb7d660f7a23dbb6890657ea5dacdfb78f5d6b723419610f857aaea85d7c2cb415abe50b0883387e5f77ebf00fd06fd35178040000",
    ],
    [
      "ETag",
      "C+zhVegVCFpQcTxU1i386A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-49-1604009372790"
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
      "0002ff8d92dd4ec2401085df65bcb42445fea409174551218050ca8d8690a59d4271bb5b77b71a427877672ba25113bd6967a6df6ccf39ed1e9e52118307ab74fd5ca0da9dadd14c6d11a02eb8d174cba5d0080ea0616b22d5609ae8c1b9bf553c7a680c84c86a45e0773a44e8688319036f0f498a3cd6e03dee41b00c692d92bcc8c4b2ec1c30bbdc0e6761d01fdf529fc9d8f6e3f970e877873d3838a7c59819b62cf97fac2d0e0e6ce52ac004158a08ad965cc92d46a66f6d6a96e51c2b5a162a420d255c3e582b59e44c4959a149a5deae549b6edd75dbb5d645abed12c865c44c2a05b1f319e903230de3817c2597d024409525194ecaeb0b8dd3b83462cbfe386cd64b7d5f019296a41c977f83a477c3e8337c60c708be732c93853027ea6678efff761c65fa79d4b51ff67e10da50522724ec8f7ab3d01f4d2cb7387aefee0cea899214a4469b61d5ad5f365a4df73dd62b69a3a6f7784615e840c4e8efb84b0d7809e31a0f6f2ff998267b020000",
    ],
    [
      "ETag",
      "rJQfsJ+AjrlcZ5Jnnm3uRA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `id` != ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["INT64", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-50-1604009372790",
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
      "99",
      "f70524da267d4b52a962a5642c5249bb3485b1696a6dc70986240eb1c38650fffb2e09052a34f8d4d4f7bcddf9fc886e7916a211223cbe2b59f1f0f94610748498c2319cfe4d5dece7cb255bfc2466df38392b88f831198f01c12b96c4699eb096146541991cad96edb810658e0b215a20d41ae82d63a8f775ddee995dd3d681275912cd78760bec6ba57239ea7476deed5888386138e7b24d45fa7cdeb9ef76f242dc30aa6467dfb2032eb2f3bee9712228565c64e3d512029492156b96629e4084176648beec4bb7394edb3180ef396598525166aa8a05125464118fcba25645a34754c77cf58196cecc9906da74bef282830d4e2bf2e650c3525baf0b26cb441d691be829e2095bf370d354f25bedab3f3f870a24b8c692c98d76f9cdf11d4ddb54a04f63ed589b78a7fb54d7d30e8e0fb5337fbe5a6827577b45081b32a97856470d30495815f3699aeedb3bac08588175535c9bfa101b966e93889834b27a0312e98c108b9803dc233ab5fbac1f128681a72af59a853391d9038275d3b208ee1abacd4243ef85383269576786ad0fc39e4523d32011da1ea13f0557ec94cb5c48de8c145dfa6ee0ac037fe54d278153b7116118db6913ae6ae2754e054d02e89dbeb655950b70aaeec7f502c79f4c03f7c2695662c6624c1f9677b014114e2403342e70ca142bce450843438bf9d20ddcb9379901a3bee7c50e21d1e8d7e30b2178c8eb29abfab7f21af66bff1de00227658db86f3e903140dbedd1ff25bcd5b9e3bbd30f4440e33720e00d3474f47de5f857a839f259c4",
      "0a96d18fef1fc075e1c3a7bc7b57808597053652c17fd8362a2b135ab066eb785ac76bd8fdae695816aac1857a53eb0deddd782b8d4a91a52c534f1d35efaa1a565d2ae533088ab02c9eeb9d41f51f6ddc892fd7040000",
    ],
    [
      "ETag",
      "xmIaRpSSePZb741BGrboXA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-50-1604009372790"
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
      "5f",
      "4f",
      "c2",
      "30",
      "14",
      "c5",
      "bf",
      "cbf5d12d192a12487800329448880cd1074348e9eec660db1d6d87c165dfdddbe2838fbef4cfe9efb4e7b4816356c630805d969e6a54979b14cdd22e22d4756e344f15951ac103342265f2568ae93279997c4f76abbc775a7dbcefa7e168386442cb3d1602060d2419e6b186c16703a528906ddbad723732662e9555668bb7f0298c582828b6c2623d9f8fc6f3105aef8fad3afecbb2693d38d02ec2041596126d8a4ad101a599d9825a14558ebea65a49d4e06077902aaa2ba1887c56fc6ee0771e838720e8dff7ee7afd80c19ca4301995ccae579c0d0c199147f4c5fda0c380724bae9ab8f1cc72d775383b80a36d7e4de38b41fdaa881368b48f07d72013b2e10c8736aa460fa4e09f7ccecc75dffe006d0cc71ea6010000",
    ],
    [
      "ETag",
      "+caFQfKCzCbSl7qSWVhFEA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "8b08000000000002ff1dcf4b7282300000d0bb642d4e41acd25da013f9090a14900d434360f848025130767af73a7d37783fa0c098709edf684706f00144a1686bbc76d89bae2ea53290206b2a68875109f7c3a7b458a597ef5c9f1999d1e8f26c186618e5a3caeb274dc828dd171c4364ee5a3a3349179908ad8d3c417c1e2e9d604a2a896315f7718246d99b929686e86841ef7ceadf23ff8baac19c6eaf26be781d27f1042573e9fb7d8b982b6ac8be0319aa2ed50a1ffba97f283c76cf9cc4843e4fd5a4423419da02c95578776c34e353d4da75191e9e900f8e904de54a16b002e4c19a89f0bc7965375b4d5b81ff797e138cbcfa3a29263281df3f18895c2818010000",
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
      "Thu, 29 Oct 2020 22:10:27 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-51-1604009372790",
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
      "2b64f6ab6da97d509a346bd3e2caa6a52b508d6e3664182e382e6590196a8ce97fdfcb605d8d897e6266ee39f79cfbe099fce54542a624e6d9430dd5d3b77b119313028a66f8baffe9bb57b7972a776eecdbcdfc722f97d6c3e36c8608deb024dd953974a4a82b0672ba0dba5925ea92564274305167d4eff4c7e6d034ed81756ad926f224e4e98a177f917da75429a7bdde51bb9b0991e5404b2ebb4cec5edf7bfbd35e59897b604af6de4bf65045f63e17fd9e0b461517c56c1ba0815a4215c18ef21c2dfc6726f1d9fbd45d4e77dd0cc17bce803226ea4235b630051345cab3bad259c9f499689b6f0e247056ce223498c8eb5d11157407274642158dd45309c6b9bf591bae77bef1d7f3d0dd7851b0b870d6f3ee62b3daaebdc0b8be707cc75034ce41738d9971a66f1e5e503f01a978a1d5c3e6b9517e6990fb712c0d01a525b4c1c832c7b43f31ed388d2d964e06a33835218e27b135a283d864f61086490c14795a54b36881358fc660c1d08c46b6398886d63889284dc7114bd2a1d54f6c7b40fbe470421e2bae60c96529246f3b44ae7d3774a2d0df7a8b79e8e812525ae76ad91a6b0a78eb51618108faa4a64313e502959a76bb5ee8f8f345e85e39ed84579051f6143ce08c539a4b4034adb0790aaab548b061c49baf9d2582f5c47e1d83924c7f3f93a6e78d8b372d7fa58738c0c6aed25f1284beebfdd0768e882b9ad71ab26f0fa444cb77581bba3efc41242e699b855c6e1dff86b44f3ea45041c1be9e268275e0cb7fedb8f888c5d54719a9f08ebbc36423c22a687788eb725fd8c3d38969d944832bf521d6b7c6c7ae35399a8cb08342bd",
      "54d42e3e16da8ad5f21584411cbfa7bb75f8072856486078040000",
    ],
    [
      "ETag",
      "vJRIVZQtlEY9ZOAQvsD7qw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-51-1604009372790"
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
      "000002ff8d925b4f83401085ffcbf84a23d55e2c491fa85625a1b517da9898a6d9c240a90b8bbb8b4dd3f4bf3b8bb51a35d1179819be59ce39b087e7348fc081559abc9428776709eab12926a84aae15dd0a912b040b50b384c8a433f6e65c8ff2d07e1cdaf3d5b9db68fadb6e970815ae3163e0ec214e91470a9ca73de42c435a0b052fb37c597516e85d6186d360e20defa8cf4464fae1ccf7dd9edf8783755a8c9866cb8affc7dae260c146ac2618a3c43c44a3a5906283a1f68c4dc5b282634d895286a8a082ab07891465c1a410359ad49af55abd65376cbb73d9be68776c02b908994e454eec6c4afa400bcdf8446cc925b40890554986e3eafa4ae334aa8c98d21b06ad46a5ef2b40d2e294e3f26f90f4ae197d860fec18c1778e65a2ccf589baf51fdcdf8ea34c3f8fba7183fe0f42694aea8404dea03f0ddcc1c8708ba3f7de4ea31a4941412a3419d6edc655b3ddb2df63bd16266a7a8fa3658916848cfe8efb54831333aef0f006271d89557b020000",
    ],
    [
      "ETag",
      "g9QIVltPnc0XN0Vb/A45Lw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` != ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["STRING", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-52-1604009372790",
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
      "0000000002ff85536d4fdb3010fe2b99f705b4bea4a14d5fa48a9592b14c25853401a1696a1dc70986240eb15356a1fef75d1c0a5468f0298eef799e7bee7cf784ee5916a2110a58fc50d262f3f58e07a881a8c431dcfeed3df6987567e8fea379b2fe157d734e37eee5780c0856b1044ef38436052f0b42c5c85fb4e28297392e386f8250b367343ba6ded5f5e151dfe80f75e0099a443396dd03fb56ca5c8cdaed5dee56cc799c509c33d1223c7db96faf8d765ef03b4aa468efa76c4316d1fe38e971c209968c67637f01064a418b254d314bc0c22b330cbeef4bb7184e5b3180d78c504c082f3359d90209c2b388c565a154d1e809299b6f0e6861cdaca9a74de7bee31dac705a9157871a16da7259505126b2a1ada0a6882574c9c2551dc9efb51feefc1c22e0e0160b2a56daf54fcbb5b4d7ab95f665ac1d6b13e7745fc076b483e343edcc9dfb17dac9cd5e102c8754489629c31e0e125a997deea9fdfe252b029690ad0e2efbba893b037d1844419f4483a35e10e934080641bf878f029d0cbbb41b0614034f56ea8a85339e01260a87b84bfb64483a3da36384c4308d411f6313240c13871d9009d1b6811e0b26e929133917ac6e2cba766dcf5a7aaeef4c279ea5ca883034efb4365715f1d6a7842201f4415ddb2aca3864aa5ec9763ccb9d4c3dfbcaaa076346634c368b07188d082782021a1738a59216e73c84a6a18bf9c2f6ecb933990143bdf6c50e21d0e8f7d32bc1dbe4aacb527dd1c2736de74c19d821ae70522ac8ba3ea0490e5ed176dbf8bf8ce39f5bae3dfd58a7031a7f0001db50d3d1a56fb937a8be7269440b9a91cf6700c02af0e952ef360cb0b063904648f8878923a24a420a5a4f1e4b95bd9add3586bad9410a5cc87731c3ecee5a5c69548a34a5997caea8deb0aa592a548a17100461601cd5eded3f1fc45e56e1040000",
    ],
    [
      "ETag",
      "x5w5iEj20Uw6BvJf+NDyRQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-52-1604009372790"
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
      "904b4fc3301084ffcb724d44faa24aa41e685541a5aa82404115aa2ac7d984b44936d84e5154e5bfb3763970e4e2c7f81b7bc6173815750a112445fed5a2ea6e7234cf7611a36e4ba3796aa8d6081ea0113993e1a2dabd957292dd62f1be0b572ad88e927c366342cb4fac044417c80a2c530dd1c7056a5121db0e07e56e64cc748d55569bd7e5c33266a1a2d40a9bed7a7d3f5f2fa1f7fed89ad3bf2cfbde8323253166a8b0966853348a8e28cdca16d4a26a4af435b54aa20607bb835c51db0845e4b3e24f86fee02e180741389a0ea761c060495298826a66b72f9c0d0c1951c6f4cdfd60c080724bae9ab9f1ccf2d875383b80a3ed7f4df3cea07e52c40934dac7836b9005d97086431bd5a20752f04f3e16e6baef7f00966ba9aba6010000",
    ],
    [
      "ETag",
      "9CmYVlc5f/eiWY9Ir0U3bg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000000000002ff1dcf4b7282300000d0bb642d8e447ee90e1510521064422b9b0c9f4041c40854a29ddebd4edf0dde0fc88a828d239dae67d68337f0c8205a164bcc571b652e64652b8fcc5cc978f4dfe336f916de2e4c5c8bb41fddb542cde3a977a7890992d9a42ea3e2525988a25eb54aed2edd0e83312781a29cecbcabee9f52e5ae43f7cb4c899d40c518a951b3bcd5742fd89163cd63a986a56a1203e39c6b42e89a5733631d423dba0d97439a56cd96b367c92d3d686e6e847cd8d3ed11777b278ed233d6e3d3dd1982be7466b2c1228442cded987ba69d9762efabcf24020bc0046f0636d2e6955dab082dc0ff9c4e0fce5efd0dcb063680df3f80d8008718010000",
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
      "Thu, 29 Oct 2020 22:10:29 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-53-1604009372790",
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
      "6b6f9b3014fd2bc8fbda0412c8538ad628a16bb2403620ada66942c618ea96608a4daaaeca7fdfb569ba7693da2f807dcfb9e7dc47f284ee5899a2294a587edfd0faf1d32d4fd019a212e7701bac9b5d66fe7eb07c6ffdd5c997f63a5cdfcc67334030c512785f15b4237853132aa6bbb09bd7bca970cd790712750676a737b41ccb9ad8a3fe6862014fd022dbb0f20ed8375256626a9a27ed6ece795e505c31d1257cff726f1efa6655f35b4aa430df4a9aa022ccf7453f179c60c97839db8560a011b48ee91eb3022cfc65a6c9f9dbd45d86f7dd1cc0074628268437a554b62005e165c6f2a6d659d1f409699baf3e50e86edc4564105e34fb322ef19e9e19299638968f15352e82ad67acfc8b6de0cda3d5d68fc3c5a5ebcdbb8bed66e7f9a1717de906ae21715250cd3566c6b93ef97000fd940ac94aad1ea96ba5fcdca0d5ff6351049016b40dc6236b887b636b9264c98864637b9064164d9271321a603bb1c8c4a14e9a500c3c2daa59b8e4e5202513dcebf76327b3ecd821561227e3141e36b547bd3149871641c733f4503349974c545cb0b643e83a58456e1c053b7f318f5c5d42869b422e5b63aa80d71e251408a0776a3aaa28e3a0a4dabdf22337982fa2d595db4e7843734c1ec37b9871860b41018d6b689ea4b5c7536818f2e79ebb04b09ed8b75350a0e9cf27a47aae5cbc6af90b3d82012abb52bf5118052bff8bb673425ce1a2d19043fb812ab07c03b581ebe32f40c292b659d0f79d1bfc40ed5540335ad3927c3c4d00ebc087bfb5d3e20316561f64848433ec0e114a84d4b4dd21a6cb7d663bfdc96430441a5ccb7f62b6d5b39d53d7540e9591ee69299f2b6a171f0a6dc51af102527f273bdfd7dd3afe0133af689778040000",
    ],
    [
      "ETag",
      "RJuUf/zw0NMJK4gD3JSJhA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-53-1604009372790"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d926f4f825014c6bfcbe92d6e98ff92cd17586834d442dc5acdb92b1c14032edd7bc999f3bb772e99b56aab3770cee1772ecff3c01e9e923c020b96c9eab944b13b5ba1bad3858fb24c95a45bc1738960002ab6225239dd6ebf9834d86cf8708f2aba799d3506db5e8f0819ae316360ed214e308d24588f7bc85986b416f2b4ccf245d519a076851e4e03df1d0fa9cf78a4fbf1ccf3ecbee7c0c1382d464cb145c5ff636d7e3060c3973ec628300f516b2904df60a85c6d53b2ac48b1267929429450c1d58395e065c104e7359ad45a8d5abd6d364db3dbe89c77ba2681290f994a784eec6c4afa4071c5529f6fc925b40910554986e3eafa42e324aa8ce8d21d07ed66a5ef2b40d2e224c5c5df20e95d33fa0c1fd83182ef1ccb7899ab1335f026f66fc751a69f475dd981f383908a923a21813b72a6813dbad5dcfce8bdbf53286f05a72025ea0ceb66f3a2d5699befb15e721d35bdc752a2440342467fc775a2c08a592af1f006ae8d2d997b020000",
    ],
    [
      "ETag",
      "tE99BpO3aUGZXetdJzU3Fw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` != ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["STRING", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-54-1604009372790",
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
      "855461539b4010fd2bf4fa45674c2026842433199b466a99894409d13a9d4e721c0b9e0287dca1759cfcf72e60d4b453e50be4f6bdb76ff776f3446e7916921109787c5742f1f8f94604e48080a2319e76fdd9a5e55ff3dfc60f73f6505acbd2b6f4f3f11811bc62499ae609b4a4280b0672b45cb4e34294392d8468a150cbecb53a7da36718c3ae75680d0de44948a219cf6e917dad542e47babecddd8e858813a039976d26d29773fdfe50cf0b71034c497d37a58e59a4fe7ed2a34430aab8c8c6cb051a2825142b48294fd0c22b330cbeec4ab7394ddb3182ef3903ca98283355d9420926b288c76551ab92d113a96dbef9200b7b664f7d6d3a5fbafede9aa61579bdaf51a9ad5605c8325107da1a6b8a78022b1eae9b487eab7df3e6a7184107d754825c6b97df6dcfd65e8fd6daa7b176a44ddce35d01c7d5f68ef6b5136fbe3cd3be5eed04d1720852f1ac36ecd32081caec734f9d7f6fb2225085d99ae0ca32fab43330864114582c1a74cd20322008068165d26e60b0610f7a61001479aa52af593413591082d161746018c1b047cd7ebf0f0163fd1e8b0cf3d0ea520b42d38c589f6c0ec843c1151c73990bc99bc6924bcff1ed95ef2ddde9c4b7eb32228acd3b6ecc5545bcf5a9b04804bd53d7a68a728199aa5b725cdff62653dfb9b09bc198414cd9e3e20e4723a2890444d382a6a0a0381521368d9ccd178eefccddc90c19f56d9f6d11928c7e3ebd12fcc7bceeb2aadf64e17b8e7b521bd8222e6852d690fbe683d01cbd92cde6e0ff32eef2d4f69ce9fb3a1dd4f88508dc86864ece97b677459a230f222820631fcf0082ebc0874bbddd30c4e28e611aa9f0374e1c935512564033793caded35ec5ed71876eabf04450bf577ac83cfb6c59546a5082964eab9a266c3aa66d5a152be80308803e3d6dddefc017076f59de1040000",
    ],
    [
      "ETag",
      "3TLW7Thix0X5Lwu7UuE7/Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-54-1604009372790"
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
      "0002ff8d90cd6ec2301084df657b4da4d0a62090384015b54814b5a19c2a844cb249933859633b208a78f7ae4d0f3df6e29ff137f68c2fd0545d0e13d857e5a1477dbe2bd1bebb458aa697d6f0a4a8330801a0152593eb227e3d3452f7bafe9e2dd27cbc91223d4da74c98ec0b5b01930b1415cadcc0e4f3029d68916dbb9df6373266cfca298bd547f29ca42cb4943b61b5592e67f36502d7e08f4d35ffb26caf01d4b44fb1408d5d862e85d254636617aea011ad92181aea7586063cec0f4a4dbd129a2864257c8cc3c1308aa368fc30ba1f8d23062565c256d431bb597336b064854ce9c4fd60c080f64bae5af8f1c8f2d077387a80a36d7f4df3b345f3a6891318748f47b7204fe4c2590e6d758f0164827ff2a5b2b7fdf507bc1dc806a6010000",
    ],
    [
      "ETag",
      "Sf4MqklrurjzAIRd9UlaRw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00",
      "00",
      "d0bb642d8e6000e9ce08a90aca574ad9301002221a49d002edf4ee75fa6ef07e404e08edfbec716f29036f60ca15634ee676b74070a04e9b31176d398c3466c65cc7d0dc9edd545466394c574548a7c0bf49656211a87bc1fd744c61f37ef83ae8faea1a3632772cf219424d3539c93fe403c677c42ea31991855ada96d42d690b63547aa1bd91832c2d8ada9336473d95f7f4e9ed99bb4a304f0345d47d1d5a037a5e7c0147cdc034aeb73b1ca58f5b9bc49636b14c65818f62cf193bbec145f5bd73d7bc724ad348503b44e763ae2bfe1acc001dbb46d03e6b5ed9a56a1833f03fcf1e53475f7d44734105f8fd0305aff74118010000",
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
      "Thu, 29 Oct 2020 22:10:31 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-55-1604009372790",
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
      "64",
      "f6",
      "ab6db10f4a9b346b53a93669a902d56c361b320c171c05069941d335fdef7b19acab31d14fcccc3de79e731fbc90075ec4644a229e3ed650ed7fdc8b889c105034c557d38275796df62f86fba5b3becfddfddfe5e6793643046f5892e665061d29ea8a819ceefc6e5a89baa495101d4cd4198d3aa7963934cdc960dc1f4f4ce449c892352f1e907da75429a7bdde51bb9b0a9166404b2ebb4ce46fefbda77eafacc43d30257b1f257ba8227b5f8bfecc04a38a8b62b6f3d1402da10a21a73c430bff997174f6317597d3bc9b22f88933a08c89ba508d2d4cc14491f0b4ae7456327d21dae6bb03f19db5b3080c26b23a2fc282e67062c454d150ed4b3096de7663acdce5d6dbcc83d5d60dfdc5a5b3997717dbf56ee3fac6eda5e33986a251069a6bcc8c337d73f182fa3148c50bad1e34cf8df26b83569fc7d210505a421b0cc7a6454f6d731225d19825f66014252644911d8d477410996c3284611c01459e16d52c5a8882c5a35104d6388c2d36098774c042bb3f88c3be695900cc36eda1450e27e4b9e20aceb92c85e46d87c8adb70a9c30f076ee621e38ba8484d6993a6f8d3505bcf7a8b040047d51d3a18972814a4dbb576ee078f345b0ba71da09af21a56cef3fe28c139a494034adb0790aaa8d88b161c49d6f9c7304eb895d1d83924c7fbf90a6e78d8b772d7fa30738c0c6aed25fe207decabdd0768e881b9ad51af2d41e488996efb036747df883485cd2360bb9de39de2fd23e7990400505fb7e9a08d6816fffb5e3e22316571f65a4c23bee",
      "0e938d08aba0dd21aecb7d650f07a763cb261a5ca94f317b323a76adc9d164841c0af55a51bbf858682b56cb37100671fcaeeed6e11fc09ece6078040000",
    ],
    [
      "ETag",
      "06eLpQ02G4yFELjmNyzFMw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-55-1604009372790"
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
      "0002ff8d92414f83401085ffcb788504b4a596a407aad56268ad949e4cd36c61a054607177d1344dffbbb358ab5113bdc0ccf0cdf2de833d3ce555022eacf3ecb941b13bcb503de82244d9144ad2ade69544300015cb88ec8fb39720b1626776d71f667626985dd7d96040848c37583270f790e6582412dcc73d54ac445a8b79d194d5aaed0c50bb5a0fe751e84f6fa92f79a2fbe92208bc61308283715a4c9862ab96ffc7daf260c096af434c516015a3d6520bbec558f9daa664655da02979236294d0c2ed834cf0a6668273932666b76bda8ed5b1acfe45efbcd7b7082c78cc54ce2b621773d2078a2b5684fc955c824380684b329cb6d7171ae7496b4497fe34723aadbeaf00494bf302577f83a477c3e8337c60c708be73ace44da54ed44d70effd761c65fa79d4b5178d7e105251522724f227a379e44d669a5b1ebd0f770ae54c700a52a2ced0b63a97dd9e63bdc77ac575d4f41e5789060d8819fd1de35c819bb242e2e10d625e823d7b020000",
    ],
    [
      "ETag",
      "9HgvLd0c6PJ9Bg1gra1ppg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `date` != ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["DATE", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-56-1604009372790",
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
      "ff85536d739a4010fe2bf4fa2599f10511159c7152ab3465aa681193663a1d3d8e835c021ce10e3369c6ffde05621227d3e49378cfcb3ebbb7f7886e591aa021f2597457d0fce1f30df751035189233875fe1a7c9e45d3fb49e6fefab1d4cc89babb8e462360b052257092c5b4297891132a86eb552bca7991e19cf32618357bfd66a7afeaaa6a7607dac0544127681cce587a0bea6b2933316cb70fb55b11e7514c71c6448bf0e4f9bcbdd3da59ce6f2891a27d5cb20d5544fbfda267312758329e8ed62b0850089a6f6882590c115e9481ffe5d8bac570d28a80bc638462427891ca321658109e862c2af2ca150d1f5115f3d5075a59336be22993c5daf14eb63829c5db53050b65b3c9a92862d950b6d053c862ba61c1b646b25be59bbb98030209aeb1a062ab5c7eb75c4b51b6019674ab7c1a2967cad8991e8b6d4739393b55ceddc57aa97cbd3a02216e4085646915d6c37e4ccba04ff3b4dfde6229c0128ad7e066a0f671c7504d3ff4072434ba3d3f54a9ef1bfea087bbbe4a4c9dea814f31e864e95ea970cad36ee87748bfd7d7a8de3170d0097c3dd0fba6a6878619507310fa5d62841d15ed1be83e67924e99c8b860f550d1a56b7bd6c673d7ce64ec59551b2186c14deb706513af734a681248eff4b52f51c6a1527943b6e359ee78e2d91756bd14331a61f2b0ba83b508712c28b0718e132a693ee7010c0d2d172bdbb317ce78068aeaa697078640c3df8f2f02ef21aba62cab5f342d1bd8bf32bcc071511176f507d2544d6daa5ab3d343fb7de3ff4ece7a6eb9f6e47db30e78fc01063c865a8e7eae2df70ad5472e0d694e53f2f11a00b9023e7cd38707065c7862504648f80f4b47445984e4b45e3e9654f16ab5ded5fa3d1355e45cbec10c553f4cb9f4281d694253f9d451fdc0ca615550219e4900c2ce38b6730ee83f0f8b04fbe0040000",
    ],
    [
      "ETag",
      "Nz8oMpgDwCpRXKP29C0vhg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-56-1604009372790"
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
      "5f4f833014c5bfcbf51512a6630b4bf620066509998af2a066593ab8201b70b12d3364d977f7b6f3c1475ffae7f477da737a8243dd15b0805d5d7d0d28c7ab0af5b359a4a886462b9e7aea148203a845c5a4c2d8bf0fc3204bdfa659fc2e8fe9e31854cb25132affc456c0e204658d4da160f171824eb4c8b6ed56da1b19d3636f94d5fa357a8852165a2a8cb0ce92e4364c22383b7f6cfde15f96cdd9813ded522c516297a349d14bda63ae57a6a0126ddfa0ab6890392ab0b03da8240dbd90442e2bae3f7327336fea79c1cdfc7a1e780c36940b5d53c76cf6c2d94093164d4adfdc0f260c48bbe4aaa51d8f2cfbb6c3d1021c6df36b0a478dea49122750681ef72e41eec884d31c5acb011dc805ff645cebcbfefc0320e2c921a6010000",
    ],
    [
      "ETag",
      "seH5FBB9URY4UHZrvROy9g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00",
      "00",
      "d0",
      "bb",
      "64ad0e0a14d29d4268f91694d1c22683217c24400a08a2d3bb97e9f6edde0b2484d0bec7435bd106bc8339d9c10dd9d85c384813891f680e3558bad79e1691f2dd13bb4d9d310b77fea23c18d113afd9d769c4fe7c71f68a11dd2d3d396b35eaf442a95afbd3e43994a720c91d7b42278156a2e58ff0487888758d59eb9955b586c2412004abb258c4c737cf0f2a79ef9a1e645bd9f4ba11254776be47ae6e8857bff4b911db65ce3a6bbab8c6c70fcba42c6aca8c20c6eb753ad4c89d554fed9fcfb8dda64173cb82f48c6e12e6135801fae065477b5c2e5951867005fee77898395dfa079a74b403bf7fbd27badf18010000",
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
      "Thu, 29 Oct 2020 22:10:33 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-57-1604009372790",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85535d4fa34014fd2b64f6d5b620d0d226cdda54dced6e4b5d4a3566b321c370c151ca2033b851d3ffbe97c1ba1a137d6266ee39f79cfbc113b9e5654a2624e1f95d03f5c3971b919023028ae6f87afcb3b974cfe78fe9ed8f75e55c3f56e7fe55359b4e11c15b96a4bbaa809e144dcd404eb69b7e5e8ba6a2b5103d4cd473473d6b683aa639b647c7a3b1893c0945b6e4e52db2af95aae464303868f77321f20268c5659f89ddcbfbe0fe7850d5e206989283b792035491838f45bf168251c54539dd6ed04023a18e6147798116fe33d3e4e46dea3ea7bb7e8ee07bce8032269a52b5b630051365c6f3a6d659c9e489689baf0e64e32ffd7964305134bb322ee90e8e8c942a1aab870a8cb370bd3216c1d93a5ccda2c53a8837f3effe6ad69faf97db55b0312ebffba16f289a14a0b9c6d438d1b7002fa89f8254bcd4ea51fbdc2a3f3768f17e2c2d01a52574c178640ea9e599e3244b462cf36c37c94c48122f19b9d44e4c3676c04913a0c8d3a29a454b515ab6e53a9e358a4d2fa3b1e3b9107b40f16a0de93075c1b2cc94ec8fc8df9a2b38e5b21292771d2297e122f2e328dc06f359e4eb1232da14eab433d616f0daa3c20211f4414dfb36ca052ab5ed5e04911fcee6d1e2c2ef26bc849cb287cd1dce38a3850444d31a9ba7a05e89141b4682d9ca3f45b09ed8f92128c9e4f713697bdeba78d5f2177a84036ced2afd259b285c04dfb49d03e282168d86dc770752a1e56bac0d5defff201297b4cb427e6dfdf08a744f21645043c93e9f268275e0d37fedb0f888c5d54719a9f08ebbc3642bc26ae87688eb729fd98e6d3b964d34b856ef62b80187aeb539da8cb083523d57d42d3e16da8935f20584411c7fa0bbb5ff07d4bd179c78040000",
    ],
    [
      "ETag",
      "2KuW5PCzdkJOp4hzpPEYpA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-57-1604009372790"
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
      "5b4f83401085ffcbf80a09bdb7247d68b52a965ea1d1c434cd1686960a2cee2e9aa6e97f77166b356aa22f30337cb39c73e0004f7116820deb78f35ca0d85f6c50cd74314759244ad22de79944300015db1059bd6bd7d0ad3d6c87ea7e325ccc84e5acbd59b74b840cb69832b00f10c5988412ecc703642c455a0b7852a4d9aaec0c50fb5c0f3d7fee8c6fa84f79a8fbf1c2757b7d770047e3bc1832c55625ff8fb5e5d1801d5fcf31428159805a4b2ef80e03e5689b92a57982a6e48508504209970f36821739139c9b34311b2db3d2b4ea96d5a9b5aaad8e4560c203a6629e11bbf0481f28ae5832e7afe4129a0488b224c351797da1711c964674e98cfd66bdd4f7152069519ce0ea6f90f46e197d860fec14c1778ea5bcc8d499ba7627bddf8ea34c3f8fbaeaf9831f845494d419f19dd1c0f37ba3a9e69627effdbd4239159c8294a833ac58f576a3d5b4de63bde43a6a7a8fad448106048cfe8edb58811db144e2f10ddb94eac37b020000",
    ],
    [
      "ETag",
      "2J83eL3XhKtWOKUQr0IbSQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `stamp` != ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-58-1604009372790",
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
      "6f",
      "9b",
      "30",
      "10",
      "fe",
      "2b",
      "cc",
      "fbd24a4d3084bc4a5197a5aca34a484648ab6e9a12438ed42de0149b6c5d95ffbe039ab551b5f613c8cfcb3d773e3f923b9eae488f047c7d9f43f6f0f15604e48480626b3c1d5d50371e6de77e22ad8b0b90f2fe8ffe7bd0ef2383172ac9924d0c3529f22c04d99bcfeaeb4ce41b96095143a35ab353335ad4a2b4db689bed2e459d84381af1f40ed5374a6d644fd7f7b5eb6b21d631b00d97f55024ffcef5ada96f32710ba192fa61491dab48fdeda2a7b10899e222edcf67182097902d20613cc608cfca55f0e9d0bace59525f2379cb43606128f25415b1d0221469c4d77956ba92de232963bef821337b640f7d6d3899bbfed19225857879ac31a92d1619c83c5627da127b8a780c0bbe5a56c8e64efbe24dc68860821b26412eb5abafb6676bda522a4cb7d43ef4b5536de09e1daa1d573b3a3dd6cebdc97caa7dbe3e0031ef0aa4e26999d667410c45d2a7813aafafb1103085d52b70d1a62d6674683788827618751acd20a210049da0dd648d80865d0bac55000c75aa702f552c1569a3dba4acdd8a804541d46226ac3a416451730551db422fd6023334ac06d99d905f195770c6e546485e4d955c798e6f2f7c6fee0e07be5db611319cdc5915ae68e2654e854d22e98dbe7605ca05562aaec8717ddb1b0c7de7d2aeb662046b163eccee712f22164b4036cb58020ab2b158e1d0c87432737c67e20e46a828af7aba6748d2fbf1f82cf01f36e59455f925be33b667fe603c2d33ec49972cce4bd6b6fa212635698d9a35a3e91b66cf68f40cab4e29fd4e76bb93ff9bbb",
      "f3b1ed39c3b7ad0df4f8890c7c20959c7c9bdbde35a98e3c882083347c7f33905c02efbef3fda3432e3e3b2c830bac38ee61288b226106d53ef2a48c57a9ad46d3300d529233f50a6b50633ff8c2a370840452f5d451f5e88a6195502eff9110c435721df71cd1bf6ea6d0cdf4040000",
    ],
    [
      "ETag",
      "LJ0NlLvUTms4JJessqz/xA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-58-1604009372790"
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
      "5f",
      "4f",
      "c23014c5bfcbf5d12d192222243c002e4a42502684184348d92e63d0edd6b6c39085efee6df1c1475ffae7f477da73dac0b1a832e8c3b6c8bf6ad4e79b1ceddc2d1234b5b486274595410800adc899fc582db2bd7a1aaac9fc55caa51cb76f57793e183061d23d9602fa0dec0a949981fe67039528916d9b8df6373266cfca2993d9227e8e13164aca9c305b4ea7c3d134864bf0c7a68effb2ac2f011c689be00e355629ba144ad301533b71058d2895c4d050ad5334e0617f906baa95d044212b61e7316c3d44f751d46b77efbabd884149a9b00555cc2edf391b58b24226f4cdfda0c580f64baebaf3e389e58eef70f200475bff9a46678be64d132730e81e8fae41c6e4c2590e6d758d01a4827ff2a5b0d7fde50700becef4a6010000",
    ],
    [
      "ETag",
      "YWTdhpDApIQOllUlC3+Wgg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0002ff1dcfdb7243400000d07fd9e724a328d137a915a12e7589f0b2b3d894ba5bd774faefcdf4fcc1f901384d09a5686c4bd28037b061563aa407a3634efc721fa99df46cb604c6de5463280a104503f41475f9b4e837b55e08b3d7c57cc9144d4b78e7ba05bc3c763a1cf3beaa9a95b9b9191602553bd77a1c0667ce2b38b845965867da7a55562b5ee6c909636cb52e79cfeb4bd73ceefe1cadbc72fca0aa7211fad46d8f5a564eae5d3a2b9a4b4b6ba650757abf8e213b0af2e0a39b9c2ca664c04650300a2a46376d9de0ce6e3d9f7537d6a043df3ff45468bfc00e90b52b064251f1cc72af92b403ff73346e1d79f64f040f6400bf7fe4c7e79f18010000",
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
      "Thu, 29 Oct 2020 22:10:35 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-59-1604009372790",
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
      "64",
      "f6",
      "ab2d6069699b346badb83669e92ea5ba66b321c370c1b1944166f011d3ffbe97c1ba1a13fdc4ccdc73ee39f7c133d9f222216312f3ecae86eae9dbad88c9110145337c7da4d7db537977b5ccce2f5d353abdddfe3e160f93092278c3927457e6d091a2ae18c8f166ddcd2a5197b412a283893afd51c71e588e658d7aeeb13bb29027214f17bcd822fb46a9528e4df3a0ddcd84c872a025975d2676afefe6fdb15956e2169892e67b491355a4f9b9e8f75c30aab828269b351aa8255411ec28cfd1c27f66129fbc4fdde574d7cd107ccf1950c6445da8c616a660a2487956573a2b193f136df3cd81acbd85370b0d26f27a574405ddc19191504523f55482711eac96c6dc3f5f05cb69385ff9d17a76e12da7ddd96ab159fa6be3eac20b3c43d13807cd3526c689bef97841fd04a4e285560f9be746f9a541f38f636908282da10d46ae35a0f6d01ac569ecb274d8ebc7a905713c8cdd3eedc5161b39e0243150e46951cda28528867d7be8d8f628b28730881c1a2711b5623b7298ed0efb96e332ab4ff647e4a1e20aceb82c85e46d87c855300fbd280c36fe6c1a7aba8494d6b93a6b8d3505bcf5a8b040047d52d3be8972814a4dbbe77ee805d35938bff4da092f20a3ec697d87334e692e01d1b4c2e629a89622c186117fbaf4ce10ac27f6f3109464fce799343d6f5cbc69f92b3dc401367695fe927518ccfd1fdace017149f35a43eedb0329d1f20dd686aef77f11894bda6621bf365e704ddaa70052a8a0605f4f13c13af0e5bf76587cc4e2eaa3",
      "8c5478c7dd61b2116115b43bc475b92f6ca737b0ac01d1e04a7d88d98e73e85a93a3c9083b28d44b45ede263a1ad582d5f4118c4f1fbba5bfb7f1eede2bf78040000",
    ],
    [
      "ETag",
      "xaYkBsqWMgFV7t9BjkX2ow==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-59-1604009372790"
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
      "5b",
      "4f",
      "83",
      "40",
      "10",
      "85",
      "ff",
      "cb",
      "f8",
      "0a09d5da0b491fe84d1b69ad949a18d3345b18281558dc5dda344dffbbb358ab51137d8199e19be59c03077849f2106c5825f16b89627f11a37ad08587b24c95a45bc1738960002a161359bb7b7c6af5dd55d375bced7053f46a7137db753a44c8608d1903fb0051826928c17e3e40ce32a4b580a765962fabce00b52ff470e67ba3c90df5190f753f99bbaed375077034ce8b21536c59f1ff585b1c0dd8f09587110acc03d45a0ac13718a891b6295956a4684a5e8a00255470f52016bc2c98e0dca48979dd366b0dab6e59edabe665b36d1198f280a984e7c4ce67a40f14572cf5f88e5c42830051956438aaae5b1a2761654497a389dfa857fabe02242d4a525cfe0d92de35a3cff0819d22f8ceb18c97b93a5343f7def9ed38caf4f3a8bee30f7e1052515267c41f8d0733df194f35b73879efee15caa9e014a4449d61cdaab7ae9b0deb3dd61ed751d37b6c254a342060f477dc260aec88a5128f6ff9ce59c37b020000",
    ],
    [
      "ETag",
      "1KVY8DLb7LARvFjpC1gBmw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `amount` != ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["FLOAT64", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-60-1604009372790",
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
      "53",
      "9b4010fe2bf4fa4567f242de20c94cc6a609b64c136209d16aa7931cc7124f8143eed0b18effbd0b1835ed543f85dcf3b2cfeeed3d906b9e0464487cbebdc921bbff78257c5223a0e8164f2fbefd9e2b5dc1dd187ecce2cb63777a91c777a3113278a192344e23a84b91670ce470b56c6c3391a73413a28e467543afb70cbdabeb838ed936073aea2444e18c27d7a8be542a95c3667357bbb115621b014db96c30113f9f376fdbcd341357c0946cee976c6215d97cbbe8512418555c24a3d51203e412b235c4944718e14519f89ff6ad1b9cc68d2d926f3903ca98c81355c4420b2692906ff3ac7425c30752c67cf54196d6cc9a78da64b172bc830d8d0bf1e650a3525baf339079a46ada067b0a79046b1e6c2a24bdd68eddc51c114c704925c88d76f6d5722d4ddb79681f46da913676a6fb72dbd10e8e0eb52fee6275a27d3edf0331700052f1a48ceb513f8222ead344ed7fefb1105085e52b706dea066df5f5811ffa260bfb9d9e1feae0fb7ddfecd18eafb34117ba810f1475aa702f55341149db0859cb403030991142d00386343ff0a949195e10f82d6a863e238f3572977105532e532179355672e6da9eb5f6dc9533197b56d946487174d32a5cd1c4eb9c0a9b44d21b7d3d16281758a9b823dbf12c773cf1ec53ab5a8b196c29bb5fdee062843492806c9ad11814647311e0d0c8c962697bf6c219cf5051def5c98e21c9f0e7c38bc0bb4fcb29abf2971ccf1663cfe896097694531ae525e7b6fa20ad460f198fb5ffdb38abb9e5da93776cd0e31732f02d5472f27d65b9e7a43a7221840c12f6fe0e20b904de7dd2bbf7855c7c6158462afc8f1bc764518465506d1e8fcb7895badb3106ed3e29c999fa1b335bedf66ec48547e1083124eaa9a3ea7d15c32aa15c3e9310c485",
      "716ce70ba27f00aec2fe98df040000",
    ],
    [
      "ETag",
      "ZKzMt0tewAeXLmhFRDZumw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-60-1604009372790"
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
      "00000002ff8d905f4fc23014c5bfcbf5754b3a45084b781082429c4427bc680829e36e16b6ddd9762012bebbb7c5071f7de99fd3df69cfe90976aade400c6b557cb6a88f5705da17b748d1b4a5353c35541b8400d0ca824925eebff3a7b97a9c8ce8ed56145f5162d2c360c084c93eb092109f2057586e0cc4ef27a865856c5badb4bf91317b6c9c329dcdc70fe394858a364e982d92e46e988ce11cfcb135bb7f5996e700b6b44e31478d75862e45a3698b999dba8246564d89a1a1566768c0c3fea0d0d436521385ac845d11465dd111a27fd3bbeef505832565d22aaa995dbc7236b0646599d281fb41c480f64bae9afb71cf72c777d87b80a32d7f4dc3a345f3ac891318748f8b4b9011b97096435bdd620099e49f9c287bd99f7f0032b837fca6010000",
    ],
    [
      "ETag",
      "i0FzfMTiKHCoZ50gx1LsRw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "d9",
      "72",
      "82301400d07fc9b338801149dfb41487a522aec84b26c68b22293b0475faef757afee0bc10e31c9a86b6450639fa400fa693311f7ba5bac012866f53780775c8a847b160b551494b23b7b9295dd73973adcd414fef7ca1d553c71f2018eceeeb3639183e6b861dc75765db806d15cf3c560fec5865e6f6229ca51bfac185e8ca3db1491aed8db2b3e82eeb496c24fda727647e968fc8c79c5689d5ad37d8d9b3fe5acc3627715be14d384b9b19d6c22e6eafcf2568a4743d62aea263586970daca25983f90ac4551edb0ecb3c08e64602b80c5648e46088632ada1a1e93b3b99123242ff73da3e4a78f717c06aa8d1ef1f583e64a218010000",
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
      "Thu, 29 Oct 2020 22:10:37 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-61-1604009372790",
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
      "5d6f9b3014fd2bc87b6d1292d04022456b94d29529212b21adb66942c65ca85b82293669bb2aff7d17d374ed26b54fd8bee7dc73ee074fe4961709999098677735548f9f6e444c8e08289ae1ebc38d977eddd4773fecdfde384f1e2e46b35d964da788e00d4bd26d9943478aba6220279b7537ab445dd24a880e26ea8cfa9dfec8b44c733cb407f6d8449e843c5df0e216d9d74a9572d2eb1db4bb9910590eb4e4b2cbc4f6e5bdb71bf4ca4adc0053b2f756b2872ab2f7bee8e75c30aab828a69b351aa82554116c29cfd1c25f66129fbc4ddde574dbcd10bce30c2863a22e54630b533051a43cab2b9d954c9e88b6f9ea40d6eec29d87061379bd2da2826ee1c848a8a2917a2cc1380b564bc3f3cf56c172167a2b3f5acfcfdde5ac3b5f2d364b7f6d5c9dbb816b281ae7a0b9c6d438d1371f2fa89f8054bcd0ea61f3dc283f37c8fb7f2c0d01a525b4c1c83647b4ef98e3388d6d963ac3e33835218e9dd83ea6c3d864630bac24068a3c2daa59b4100505930d122b8906a3d88a2c27194414c6c3c88947c8b606d41e02d91f91fb8a2b38e5b21492b71d22578117ba51186cfcf92c74750929ad7375da1a6b0a78ed516181087aa7a67d13e502959a767b7ee806b379e85dbaed84179051f6b8bec319a7349780685a61f314544b9160c3883f5bbaa708d613fb76084a32f9f9449a9e372e5eb5fc851ee2001bbb4a7fc93a0c3cff8bb673405cd2bcd6905d7b20255abec6dad0f5fe17227149db2ce462e306df49fb14400a1514ece3692258073efcd70e8b8f585c7d94910aefb83b4c3622ac827687b82ef7996d0ded71df261a5ca97f634effd83974adc9d164842d14eab9a276f1b1d056ac962f200ce2f87dddadfd1fdd05224978040000",
    ],
    [
      "ETag",
      "xjIfJUuqZ7zI9ldxQ6Avgg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-61-1604009372790"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92dd4e83401085df65bca509b5152c492fa85625e99f94f6c634cd1686960a2cee2e9adaf4dd9d5d6b356aa23730337cb39c73600f8f59998007ab6cfd54a3d89dad51ddeb224459e74ad2ade2a544b000155b6bd29e142d3b9d4c5fe6f3304da5acc6afaedfed1221e30d160cbc3da419e68904ef610f252b90d6629ed745b9349d056a57e9e1340a83d12df5054f743f9a0d067e6fd08783755a4c98624bc3ff636d71b060cb5721a628b08c516ba904df62ac026d53b2a2cab121792d62946060f3602d785d31c17983260da7d9683a76dbb63b2df7dcedd804e63c662ae325b1b329e903c515cb43fe422ec1214098920ca7e6fa4ce32c314674198c22a76df47d05485a9ae5b8fc1b24bd1b469fe1033b46f09d6305af4b75a26e0663ffb7e328d3cfa3aefda8ff83908a923a215130ec4f237f38d1dce2e8bdb75328278253901275864dbb7d79e13af67bac575c474deff194a8d18298d1df719729f052964b3cbc016f7001407b020000",
    ],
    [
      "ETag",
      "b0Pm30fPSwVVRffsspOz7A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`id`) LIKE ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["INT64", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: "%15%" },
          },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-62-1604009372790",
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
      "53",
      "6d",
      "4f",
      "db",
      "30",
      "10",
      "fe",
      "2b",
      "96",
      "2704486dd337caa884182bd916ad6d4a9a82aa09356e720d86242eb6c38410ff7d6787c22a36f6719fe2f89e379fcf8ff4961709edd3254fef4a900f1f6ec492d6286896e2eecff9306ec5e71d68b56f3a4b77c42e72799d1e1f23821b9662f93a83ba12a58c41f567d3462a45b96652883a0ad57bed7aabd7ec369b479dc3f6e15113790ab2d59017b7c8bed67aadfa8eb3f16ea442a419b035578d58e42ffbce7ddb594b7103b156ceb6a5832eca79dff4241331d35c14c7b329062815c805e48c6718e195992c3f6d4b3738cb1b2982ef790c2c8e455968130b256251ac785a4aab4afb8fd4c6fc6d41a7eed01d8464e0cfc6e15ec472438ef6095364b190a0ca4cd74884675af10c163c89aacafa967c09fc115630c13553a02272f9cd0d5c4286fea51bec4508dd2743efbb4b4ec8e9f86c5bc31b93bd937df235f06713f279be55c4d409ac181a9f318dcadaa44daaa567ae5283d2087aeeb3f7f676e993a97221b93627f4c6a11b9c0e42efc2ad9a3a8494c50fd33b6ceb8a650a10cd24cb41831c89049032f1a75ee8f9e3d321326ca7261b84a2fd1f8faf84f0610d26a0b65fe3d5eb5aff0de08265a545dc570bbad33ad8a14f4fb5bf8b8c672337f006efcbb450e30a113847159d9ecfdc604eabad005620a1882de59d4e59b02dfcf3396c6613b1389d68a334fe2bcd63654c6209b61cf2dcc6abd8ddcec7a34e875ab0d46f6bdd03f3848be48f95678fd2ea839442067620cd2fba299b8517d8117ce2359a83522c3532b3024fa2802d3320f6f6c84b1f4914115e10d3691285f389",
      "bbb05716d5c867966045f7bac4b6b84fcc456dd6bbe667d724b239aa21f84f19aeaab61893337fece21cfc021af892791c050000",
    ],
    [
      "ETag",
      "wYLc1cQ3e12j3bEMaVmrhg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "82300000d0bb64ad0e7f487744a8025665e4eb2643434050208016a2d3bbd7e9bbc17b818c103a8ef8de5d690b3e00cf24b8222b8f0948998a03ce2d5b50afed93c3462c70536a19b959958f541dfa9e64d471da59652bdd764883e952b8f8e2182e0bc218eada729d1cf28c8b013d796737709dfa2b46df1bc50fcf9f963c1e55e732433ecbcbe969f4911796e1f0782466be0d2447ec211a0c871b1845940a8db14f0f4960ef8a9f5e3e5e056d8da5935d6d747763f64efcb0b2bc6cb7ca3405db3aeaaadddee77a53d4911e5146d2c12c54cb2d7db0007466d540475cbdb3b20ae102fccff19d33faee239a0d7400bf7fdc5a8a6518010000",
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
      "Thu, 29 Oct 2020 22:10:39 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-63-1604009372790",
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
      "4fdb3014fd2b91f738daa64ddba495aa5195c02ab5e996a6a0314d91edde04431287d86142a8ff7d370e652024788aed7bce3de77ee489dc89624fa68489f4be86eaf1cbad64e48480a629be7e2d64e0c93d4fae2fe6a2bebbce03b9b94f6733448886a5685e66d051b2ae38a8e96edb4d2b5997b492b283893a63a7d31fdb43db9e38eec09dd8c85390252b51dc21fb46eb524d7bbda376379532cd80964275b9cc5fde7b0f835e59c95be05af5de4af65045f53e16fd96494eb590c56cb74503b5822a869c8a0c2dfc67eed9e9dbd45d41f36e8ae007c181722eeb4237b63005974522d2ba3259c9f489189baf0e64ebaffc45647199d57911173487136b4f358df56309d679b8595bcbe07c13aee7d17213c4dbc5777f3def2e36abdd3ad85a57dffdd0b734651918ae35b34ecd2dc00beaef41695118f5a8796e949f1bb47c3f968680d20ada60ecda63daf7ec094b98cb13cf19b1c406c63ce68ea8c36c3e19c270cf8022cf881a162d64c1dc097874dc8f29f2e3619f25b137a693d876bc010377e8d8fd11399c90bf95d07026542995683b44aec265e4c751b80b16f3c8372524b4cef4596bac29e0b5478d0522e8839a0e4d5448546adabd0c223f9c2fa2e5a5df4e780529e58fdb7b9c7142330588a615364f43b5967b6c1809e66bff0cc166623f8e4145a6bf9f48d3f3c6c5ab96bfd0231c6063579b2fd946e132b830768e884b9ad506f2d01e4889966fb036747df883485cd2360bf9b9f3c35fa47d0a21810a0afef934116c029ffe6bc7c5472cae3eca288d77dc1dae1a115e41bb43c294fbcc1e3a13c71b1103aef4bbd8683c3876adc9d164841c0afd5c51bbf858682b56ab17100671fc81e9d6e11fe5a067b478040000",
    ],
    [
      "ETag",
      "+noN8odcfZGAiukZmNoOqg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-63-1604009372790"
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
      "000002ff8d92dd6e82401085df657a594cf0a7a8245e68b5ada95245bc6a8c5961502cece2ee52638cefde596a6dd336696f6066f86639e7c0115e121e810bab64bd2b501eaed6a8a7a6f05115a95674cb05570816a0666b22e5987bceeebac56bde3e5bb5367dd67ecca79d0e112adc60c6c03d429c601a29709f8fc05986b4168ab4c8f8b2ec2cd087dc0c67813ff4eea9cf44647a6f3e1a757ba3019caccb62c4345b96fc3fd616270bb662e5638c127988464b2ec516433d343615cbf2142b4a14324405255c3e584b51e44c0a51a149c5a957aa8eddb0ed76bd596bb66d025311329d084eec7c46fa400bcd525fecc9253804c8b224c371797da5711295464c39f402a751eafb0a90b4384971f937487a378c3ec307768ee03bc73251707da1ee464fdddf8ea34c3f8fea7783c10f42694aea8204c3f1601674c713c32dcede7b078d6a220505a9d06458b51bad9ba663bfc77a2b4cd4f41e57cb022d0819fd1d0f89063766a9c2d31b6a5f77cd7b020000",
    ],
    [
      "ETag",
      "rMnN6q+8n2Nwmb8hDa9KpQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) LIKE ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["STRING", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%app%" },
          },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-64-1604009372790",
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
      "000002ff85530d4fdb3010fd2b91272490fa91b6e9a784582981652b294b532a344daded38c190c42176400cf5bfefe2d08e0a0da448497cefbd7b77be7b41f73c0dd008111e3d142c7ffe722708aa21a67004a7d1902fa7a75eda4e94bffcf3fdfce23c1e584fc7c780e0254be2248b595d8a22a74c8e16f346948b22c3b9107510aaf7ac7aab675aa639ecf4dbfda1093cc9e270cad37b60df2a95c951b3b9cddd8884886286332e1b5424bbf3e663bb99e5e28e51259bfb299b9045363f4e7a120b8a1517e9f1620e060ac9f2154b308fcb0277cc807cdd976e709c3422003f72ca30a5a24855690b24a848431e15b95645a317a46dbef940737b6a4f7c63325bb8fee11a2725797d646069ac56399345ac6ac61a6a0a79cc563c585791ecde38f76697100107b75832b93696df6ccf368ce96c697b87bb00684d9d1fb671628cddb37d25c7350e4f8e8c0b6fb6b8324e6ff682e03d6052f1543bf7318959e9fab5b9cefb2b2d095841c22ab8ea9b3ddc1a984312923e0d079d2e094d46c880f4bbb8434c3ab49815108681a74a75cdc2a948bb9deeb06f0e5bb437204137b0da411062b36d91009bb88dbb9d4ed8ea11d2469b1a7acab962675c6642f2aac368e939bebdf2bd853b19fbb62e23c4d0c5b3ca5c59c45b9f0a8a04d007756dca281790a9bc2ec7f56d6f3cf19d6bbb9a90298b307d9e3fc08c8438960cd038c709532cbf1401340d5dcde68eefccdcf11418fadaafb6088946bf5efe11fce74c7759e9379afb9ee35e68035bc4358e0b0d79ac3ed001ceb203b4d9d4fe2fe32e2e6dcf997cacd3028ddf8080b5a8e8e8e7c2f66e5075e4b190e52ca59fcf008075e0d3eddeae1a6061d9208d54f00f1347659984e6ac9a3c9e687b15dbb24c789006e7ea5dacd7ea6c5b5c6a948a2c61a97aada85ab5b2593a54c81d08823030aeeef6e62ff663bcb8ea040000",
    ],
    [
      "ETag",
      "g9iWLBRn2mtTWzJFGFl84w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-64-1604009372790"
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
      "5f",
      "4f",
      "c2",
      "30",
      "14",
      "c5",
      "bfcbf5d12d0e5c2090f0004a84b01099a0268690b25de660db9d6d37b32cfbeede161f7cf4a57f4e7fa73da72d5cd22286311cd3e4ab42d9dc24a8376611a2aa32ad782aa950080ea01609937ef178e7e7e7f745bd7a6de25575fb366d8e9bc98409157d622e60dcc229c52c5630fe68a11039b2ed7090f646c674531a65b9dece9fe6210b39c54658ef82603a0be6d0397f6ce5e55f967de7c0998e219e506211a149514a3a63a497a6a0127999a1aba892112ab0b03d482455a590442e2beec0777b03cff7bcd1fdb03f1c790c6614099d52c1ecee85b381262db290beb91ff4189076c9554f76ac59eedb0eb50538dafed7346b34aa67499c40a179dcbb067920134e73682d2b742012fc938b545ff7dd0f1ad2d531a6010000",
    ],
    [
      "ETag",
      "4nD/4mjXHvKVydKu+WAybQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "300000d07fc9591c76a13782946a414471810bc31208c8121681d8e9bfd7e9fb83f703a22441c3108eed0335e003d08857d7c9fa9bb0509c33479c6c0aef9ecc1b438d9f96606868c1b1298707ae94a632a0d7bdc292b09674cf4dcdfdaebb6ff1a633f31432168f2e6739abfc4c3be1a66b6e4dfc29d1615b6d889e3ff460b1b48c42227d29b037daf0759d2ac19d02150d35174d9473e68af1166376d98e73c4a51f3bad30e95183f171de47adc0a4e5ce139ed6d1876d4364112d16164759c90e2ff1c64fcc85f2be8f1f7569b367fb8c6755c8c10aa085143d1ac2e29d1524555d81ff79385282de7d88a21ef5e0f70f24fdcf1e18010000",
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
      "Thu, 29 Oct 2020 22:10:41 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-65-1604009372790",
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
      "a24014fd2b64f6b52a2a8a9898ad51ba75a3d8056cb3dd6cc8305ee8b4c8506668d336fef7bd0cd56dd3a47d6266ee39f79cfbc10bb9e3f9968c49ccd3fb0acaa76fb722262704144df135b8f1947dfdec8cb2e74b0896dddbf94feffa71324104af5992ee8a0c5a5254250339de04edb41455414b215a98a8351cb4ba43d3324da76ff76cc7449e842c59f2fc0ed9374a1572dce91cb4dba9106906b4e0b2cdc4eef8de79e8758a52dc0253b2f35eb2832ab2f3b9e8f74c30aab8c8279b000d5412ca0876946768e13f731b9fbe4fdde674d74e11fcc01950c64495abda16a660224f785a953a2b19bf106df3cd8104eed29d85061359b5cba39ceee0c4d8524523f5548071e6af57c6c23b5bfbab69b8587b51303b7757d3f66cbddcacbcc0b83a777dd75034ce40738d8971aa6f1e5e507f0b52f15cab87f573adfcdaa0c5c7b1d4049496d00423db1cd2eec874e224b65932ea0fe2c484381ec5f680f66393391658db1828f2b4a866d15ce4261b38acd785288ead5e64f56110395d368c126734746c7360756d87ec4fc863c915ccb92c84e44d87c895bf08dd28f437de6c1ababa848456999a37c6ea02de7a545820823ea9695f47b940a5badd0b2f74fde92c5c5cbacd84979052f614dce38c139a4940342db1790aca95d862c388375db97304eb895d1c82928cffbc90bae7b58b372d3fd2431c606d57e92f09427fe1fdd0760e884b9a551af2d01c4881966fb03674bdff8b485cd2260bf9b571fddfa479f221811272f6f53411ac035ffe6b87c5472cae3eca488577dc1d266b115642b3435c97fbcab6ac6edfec110d2ed587d840c78e0b5f67841de4eab5a266f1b1d046ac9247100671fc9eeed6fe1f79e5a35078040000",
    ],
    [
      "ETag",
      "ShNt7Zz98lzVeSL1jDJNZw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-65-1604009372790"
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
      "00000002ff8d92416f82401085ffcbf40a09b68a95c4035adb92a0b588a7c6981506c4028bbb8bad31fef7ce526b9bb6497b8199e19be5bd070778ceca181c5865e9b646b1bf48513dea224059e74ad2ade2a5443000154b894c6db18ea3a4b077c9105fab787eb99d7a6ebf4f848cd65830700e906498c7129ca70394ac405a8b785e17e5b2e90c50fb4a0f6761e04deea82f78acfbc9dcf7dd813f82a3715e8c9962cb86ffc7dae268c086af024c506019a1d65209bec14879daa6644595a329792d2294d0c0cd8354f0ba6282739326a6dd315bb6d5b6acde55f7b2dbb308cc79c454c64b62e733d2078a2b9607fc855c824d80684a329c34d71d8db3b831a24b6f12daed46df5780a425598ecbbf41d2bb66f4193eb05304df3956f0ba5467ead67f707f3b8e32fd3ceac60d473f08a928a933127ae3d12c74c753cd2d4ede077b85722a3805295167d8b2dad79dae6dbdc73ae43a6a7a8fa3448d06448cfe8efb4c8193b05ce2f10d89b93f557b020000",
    ],
    [
      "ETag",
      "g6rhdcfm6vfCexpdU2qPIA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) LIKE ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["STRING", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%app%" },
          },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-66-1604009372790",
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
      "40",
      "10",
      "fe",
      "2b",
      "64",
      "2f269a6b0ba5405f12e3f55af4c855daa354e35d2eed2e2cb80a2cb28bc698fef71bc0aa8d39fd54bacfcb3c333bfb846e5916a211222cbe2b69f1f8e58613d44254e2b83a4d4fb9fe5b68ea94b39eab2d2cf3a6fcfa707c0c0c56a9044ef384b6052f8b808ad16ad9890b5ee6b8e0bc0d466dcb6a772dcdd0b461afaff7871ae8044da219cb6e417d2d652e46aabaabdd89398f138a73263a014f5fced57b5dcd0b7e430329d4fd922a5411eac7454f121e60c97876bc5a428052d0624d53cc1288f0aa0cc9b77deb0ec3692706f23d0b280e025e66b28a051601cf22169745ed8a464fa88ef9e6032ded993df195c97ce5fa871b9c56e2cd918285b25e175494896c291be82962095db370d320f9ad72eacdcf018104d75850b1512e7fd89ead28b3f9a5ed1dbe00e035737edaca893276a7fb4e8eab1c9e1c2967de7cb550be5fed81903da442b2ac4eee6392d02af5f3709df7575a09b084820db8ee6b16ee0eb42189483f88063d93441a256440fa26ee112d181ad40809c5a093957badc219cfcc9e39ec6bc36e600d486886861e8611d674838458c33a367bbda86b11a2a36d0b3d144cd229133917ac9930baf41cdf5efbdeca9d8c7dbb6e23c230c56913ae6ae26d4e094d02e983beb615ca3854aaaecb717ddb1b4f7ce7c26e366446631c3c2eef6047229c080a6c5ce0944a5a9cf310868616f3a5e33b73773c03457ded8b1d43a0d19fa75781ff98d75396f52f5afa9ee39ed501768c0b9c9435e5bef9400738cf0fd076dbfabf8dbb3ab73d67f2b14f173cfe02039e452347bf56b6",
      "77859a238f46b4a059f0f90e00b9063e7dddbba7065c786c504648f80f1b1788aa4850d066f3585ac76bd486a15b868e6a7221df6103c3dc8db8f2a81c694a33f9dc51f3d4aa61d550295e4800c2c2b8f5b4b7ff00180ffe4fea040000",
    ],
    [
      "ETag",
      "bmFo2Zs0/Doi3N0P65ju+w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-66-1604009372790"
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
      "cd",
      "6e",
      "c2",
      "301084df657b4da40055a220712855d42221046939541542266c524392756d071a21debd6bc3a1c75efc33fec69ef1058eb2ddc31876b2faee50f70f15da955be468bada1a9e14b5062100b4a262b24956cb0fdcc963aa17a3e8e720b35ee5e7c98409537c6123607c815262bd3730febc402b1a64db76abfd8d8cd95e3965b678cf5eb29c8586f64e58ace7f3a7e93c836bf0c7a68effb26cae011c689763891adb025d0aa5e980859db9824634aac6d050a70b34e0617f5069ea94d044212b611c8783387a8ca274940c933462b0a64258492db3eb37ce0696aca8733a733f1830a0fd92ab967e3cb13cf41d4e1ee0689bbb69da5b344b4d9cc0a07b3cba05792617ce7268ab3b0ca010fc93afd2def6d75ff385f289a6010000",
    ],
    [
      "ETag",
      "m7QPYebik9rN30xjiEypRw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "cfc97282300000d07fc9591c6411d31b6b2908b48445b83008910406647129e9f4dfebf4fdc1fb016555e165296ed70e0fe00daca500b7d5d61d794d7a5e1a9275cbe9c1e50c51a62836bccb484c74786fceb2333a90403b5f3aa271fa9e247c63e6640c738e8b7814ca91de4a64ccd5784e059591bd30a1536858302c8570727c64fb62440eb6ab0f3b994f6bcf9e7bfa64ca5ab51aed7a9b10b31de2e082063fb5ae0fab3e065f9848b4cfd420e6fbda7276087a89d43549c50257f03c94a95a78ce025963efecd0d3041bc4e08eed3415ecd35c1f1f0dd800fc3dd2192f057d654519c20df89f17b775c4afbe86cb19cfe0f70f04af51c118010000",
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
      "Thu, 29 Oct 2020 22:10:43 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-67-1604009372790",
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
      "0000000002ff85535d6f9b3014fd2bc87b6d0249082491a2354ae91629212d9056d33421632ed42dc1149b4e5195ffbe8b69ba5695da276cdf73ee39f78367f2c0cb94cc48c2f3c706eac3b77b919033028ae6f83ab11e0e87ebe26a6c46aa0c168f19dbde0cf3f91c11bc6549baaf0ae849d1d40ce46c17f6f35a3415ad85e861a29ee3f6068e655bd674e40edda9853c0945b6e6e503b2ef94aae4cc344fdafd5c88bc005a71d96762fffa6e3e0dcdaa16f7c09434df4b9aa822cdcf45bf178251c54539df8568a09150c7b0a7bc400bff996972fe3e759fd37d3f47f013674019134da95a5b98828932e37953ebac64f64cb4cd3707127a6b6f19194c14cdbe8c4bba873323a58ac6ea508171196c37c6cabfdc069b45b4dafa71b8fce96d16fde576bddbf8a171fbd30b3c43d1a400cd35e6c6b9bef97841fd14a4e2a5568fdae756f9a541ab8f636909282da10bc6aee5d0c1c49a2659e2b26c321a279905493249dc311d25169bda60a70950e46951cda2a5289d414add349dc4a3d100627b3a4ee22473a6b1c3b2045c3b1b0e539b1ccfc8df9a2bb8e0b21292771d22b7c12af2e228d8f9cb45e4e91232da14eaa233d616f0d6a3c20211f4494dc736ca052ab5ed5ef991172c96d1eac6eb26bc869cb243f88833ce682101d1b4c6e629a83722c586117fb1f12e10ac2776750a4a32fbfd4cda9eb72edeb4fc951ee1005bbb4a7f4918052bff87b67342dcd0a2d190a7ee402ab47c87b5a1ebe31f44e2927659c8f5ce0b7e91ee29800c6a28d9d7d344b00e7cf9af9d161fb1b8fa282315de7177986c45580ddd0e715dee0bdbb647e3914334b8561f62ce7878ea5a9ba3cd087b28d54b45dde263a19d58235f4118c4f1fbba5bc77fc423bacd78040000",
    ],
    [
      "ETag",
      "80kyyQlP5/TtnRAqfcOV2g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-67-1604009372790"
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
      "dd4e83401085df65bca509d50a4ad28b56ab36fdb1b6345e18d36c61402cece0ee626d9abebbb3a8d5a889dec0ccf0cd72ce812dac32194300cb2c7daa506d0e523437b698a2ae72a3f95692d4080ea011a92507d7b2bb6c0ecece0fe59caa97158683db75bbcd848e1eb010106c21c9308f3504775b90a2405e8b28af0ab9a83b07cca6b4c35938ed8f2fb92f28b6fd783e1c76bac31eec9cfd622c8c58d4fc3fd6ee770e3cd2728a092a94115a2da5a2478c4cdfdad4a228736c68aa54841a6ab87e902aaa4aa1881a3c69787ea3e9b92dd73d3df20ffd5397c19c22613292ccce67ac0f0c19914f69cd2ec16340d5251b4eeaeb338fb3b83662cbfe38f45ab5beaf004b4bb21c177f83acf741f067f8c0de23f8ce89822a69f6d4c5f0baf3db719ce9e751e79db0f783d08693da23617fd49b859dd1c472f7efdebb1b837aa28883d468336cbaad9363df73df623d231b35bf2730aa420722c17fc75566204844ae71f70af18840e97b020000",
    ],
    [
      "ETag",
      "bKOnBb1KCD2nUouxkeTKWw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`stamp`) LIKE ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-68-1604009372790",
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
      "ef",
      "4f",
      "db3010fd572cef0b68b4693bc68f4e889512205b9bb6490a4208b56e7209a6491c6c070921fef75d9c1656b1b1cfcb973877efbd7bbebb3cd325cf23daa50b9e3c94209f3edd8b05dda1a05982d1bc75e15c68d7ff7136d156a03f27c522f93a393a4204af588a65450a0d254a1982ea4efd6622455930294403851a7b078df65e6bb7d53afcb2dfd93f6c214f411a0f78be44f69dd685ea5ad6ba763311224981155c354391bdc6adc78e5548710fa156d666490bab28ebe3a2c7a90899e6223f9afa68a054206790319ea2853766b4f8be29dde42c6b26087ee421b0301465ae2b5b28118a3ce649298d2aed3e5363f3b703f5ed81dd0f487f347583ad39cb2af27c9b3045663309aa4cf50e99e39d629ec28c47f33a532cc999371a62061ddc31056a4eae2e6ccf266430bab2bdadb9d2e8118506ce4f9b1c939e7bba29e3b864eb789b9c7ba3e9989c5c6f24d1780431c3daa74ca3b8ae0c47f5d1a9a6a9416904ad5aedbc1f307da9b25c48aeab4b3a6e607bbd7ee05cda755f0790b0f0c97fc0cec62c5580682659061ae450448094f1c8770267e4f606c830cd1aaf118a766f9edf08c1530195416dde347086b61ff48663faf2b2f377983b1dda9ed33746d7904b969606f3581f681b356e1181cb52d3e9646a7bd7b40e791083843c34940f7a61c026f1cf9d5f2f20627105b10c8e5173a579a8aa22a104930e7866ecd5ec5d7c3a6d6ac052bfcf1dec56ff691efd31b3aa511a7d905248cf6c5df589d594f1c273ec088f266667375c3eac421928c512d3584132a6c33b9e2744f124476d09241692c4651e56b47a454d88c9a4cc20d7a49a8aea92d7e135895f1685901aa2371504d4dbed079ee39e6f7f5b7d9e5c07b68fff8c2637edee41e7b6ba94b94abd29ffef35",
      "6eebe1547e4e47ae8ddbf80bc2be406587050000",
    ],
    [
      "ETag",
      "n0HIHtNSJFQt/Tt+gpbg5Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "ff1dcf4b7282300000d0bb646d1d4014e88ea81844b0e360f96c9888413118693e0838bd7b9dbe1bbc17c065498428e48312063ec1800d675a4e835683e6f3ec9c0216aed319a7651df9c52e1041367ab1b13517a3df8fcba31ee9839dd596f1cd3e687b8860eb1ead6da9c77e9638de014b01cf49c5f27d79ed4fd966fd5cc0d49434c1c7d920f4bb32ba4a4531e2492c6fcc4e6f2bb7f228ac2e427315b949e7da78d4769b47a77662d96577e52fab80ab11b9117e74ddd86b773ee6cfc60a59986e904abed6a8bab02bde5b39a23095da4f130a84e69badbd72c10490bead391145fdcecee68e3301fff3420e2d79f721c19c70f0fb07e80569b718010000",
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
      "Thu, 29 Oct 2020 22:10:44 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-69-1604009372790",
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
      "14fd2bc87b6d1292d01022456b94d29529211d21ada66942b631d42d606a9b4c5d95ffbe8b69ba5695da276cdf73ee39f7832774cfab14cd10e1f943c3e4e3973b41d009621ae7f0ba9791f8aecbabe1e461777be1057f77132df3f91c10bc65295cd605eb29d148cad46cb7ede75234359642f420516fe2f58613dbb16d6fec8e5ccf069e6245b6e2d53db06fb5aed56c30386af77321f282e19aab3e15e5cbfb603f1ad452dc31aad5e0ade40054d4e063d1af85a0587351cd775b30d028261356625e8085ffcc949cbd4ddde7b8ece700de73ca30a5a2a9746b0b525051653c6fa4c98a664fc8d87c75405b7fe52f638b8aa229aba4c2253bb152ac71a21f6b665d449bb51584179b68bd88834d986c9797fe7ad15f6e56bb75b8b56e2efdc8b7342605335c6b6e9d995b0817d04f99d2bc32ea71fbdc2a3f3728783f969600d28a75c1c4b5277838b53d92119766d3f129c96c46c894b8a7784c6cea39cc4909c3c033a286852b51b9c4f5dcd394241e76d20450763225cc4b5c36b49d8937b247a98b0e27e88fe49a9d73550bc5bb0ea19b2888fd248e76e17211fba6840c37853eef8cb505bcf6a8a140007d50d3a18d72014a6dbb8330f6a3c5320eaefd6ec22b9663fab87d801967b8500cd05842f334936b9142c350b858fbe7003613bb3a06159afd7a426dcf5b17af5afe428f6180ad5d6dbe681b4741f8cdd83922ae71d118c8be3ba01a2cdf426de0faf01b90b0a45d16f463e7473f51f714b18c4956d1cfa7096013f8f45f3b2e3e6061f5414669b8c3ee50d58a50c9ba1de2a6dc67b6e33853778c0c58ea77316fea1cbbd6e66833b29255fab9a26ef1a1d04eac512f2008c2f843d3adc33f59f890a878040000",
    ],
    [
      "ETag",
      "vrRoJtmP16qUhF9IzU6trg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-69-1604009372790"
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
      "dd6e82401085df657a0b09568b95c40bb55a49f0a78ae94563cc0a036281a5bb4b0d31be7b67a9b54ddba4bd8199e19be59c0347784ef2101cd826f14b89a2ba8a513de86281b24c95a45bc1738960002a1613d9a8326fe0ee9adbf1ac9a8fc4aa1a4c1fdd43b74b840c769831708e10259886129ca723e42c435a0b785a66f9a6ee0c5055a1874b7fe14eefa9cf78a8fbe9caf37a7d6f0827e3b21832c53635ff8fb5f5c9803ddf2e30428179805a4b21f81e03e56a9b9265458aa6e4a50850420dd70f62c1cb8209ce4d9a9876c76cd856cbb23acdf675bb631198f280a984e7c4ae96a40f14572c5df003b9049b0051976438aaafaf344ec2da882edda96fb76a7d5f01921625296efe0649ef8ed167f8c0ce117ce758c6cb5c5da89137ebfd761c65fa79d45dcf1ffe20a4a2a42e88ef4e864bbf37996b6e7df6deaf14cab9e014a4449d61c36adddeb46deb3dd601d751d37b1c254a342060f4778c13054ec45289a737d6ce762e7b020000",
    ],
    [
      "ETag",
      "1ymLCIh3bHOyPFrUyCNWIw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`stamp`) LIKE ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-70-1604009372790",
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
      "d553db4edb4010fd95d5f605247283b481548886c450ab89136c071a21942cf6d859b0bdceee3a1242fc7bc7eb041ad1d2e73e653d73ce9933973cd3479e85b44bef79bc2a403e7d7a10f7f48082663146076255a417ab9f47add170b69eb84be175d6f1e9292278c9522ccd13a82951c8005477ead563298a9c49216a2854eb346bad2fcd76b37972d439ec9c3491a72089863c7b44f652eb5c751b8d6ded7a2c449c00cbb9aa07227d8d37d6878d5c8a0708b46aec966c6015d5f8b8e8592202a6b9c84ea71e1a2814c839a48c2768e18d19de7fdb95ae7396d66304af79002c084491e9d2164a04228b785c48a34abbcfd4d8fced413d6b68f57dd21f4f1d7f6fc1d292bcd8274c91f95c822a127d4016d853c41398f3705165f24772e18e479841074ba6402dc8cd77cbb508198e6f2c776fa1347a44a1a1fdc32267a4e70c76656c87ec9ded934b773c9d90f3d94e128d871031ac3d601ac5756938ac9e76b94d0d4a2368336afbfd82e94b99e542725d36693bbee5f6fabe7d6d55731d42cc82276f85938d58a200d14cb21434c89108012993b167fbf6d8e90d91618635d92214edde3ebf11fca71c4a83dafc52df1e599edf1b4de8cbcbc1df61ce7464b976df18dd42ae595218ccba7ad0166adc21028fa5a2d3aba9e5ce6815722102095960281fccc2804de29f37bf3d40c4e20962195ca3e64af3409545020926edf3d4d8abd8edf6e7ce519b1ab0d4ef72c7ed5219b2f08f994d8dc2e8839442bae6eaca4faca68c179ee1447878656e76c7e56a134a4129169bc10a92321d2c791613c5e30cb52590484812155950d2aa13352126e322854c93722baa4b5e9757275e91e7426a08df5410505db7e7bbb673b9ff75f3793ef32d0fff339adcb6bac787776553a695ea52fedf36eeaae5947e0663c7c26bfc051ae1f80687050000",
    ],
    [
      "ETag",
      "DoqumFqX31MLYvPRhoS7vg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "4d",
      "72",
      "82301800d0bb642d8e42a9a53b02e1c7a282b628d964287e428c204da8209ddebd4edf0dde0fca8b029462dd5540835ed13dd7ad69317d6b67f8a92f8a7b3cf8e9c2739b5d7f6859199d62e7db56a60867da4b65dad18ad26dfda58993e431a39407c692e98ba1179d72abab0e24ea7cf39658d8ddf00c8343ab4f936f9c7e24c1fe00c17c77f144e2b9eb7af6bc1a65da6e0d2f5d5afebc242a1bc326697746e4d2204b847626b80a1a6fe4f3b550c778cb2ee579c832dfd6ec83f111710bd8fba9d4489e3a748f43d8eb54424dae41818990c7d0ab7b344130b45c8262fc91354ccb9aa0ff39ebee2d3cfa18720912fdfe01bfbfec3a18010000",
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
      "Thu, 29 Oct 2020 22:10:46 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-71-1604009372790",
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
      "40",
      "14",
      "fd",
      "2b",
      "64f6d5b6b485b63469d6a6e2da4d4b5da01ab3d99061b8e028302c33688ce97fdfcb605d8d893e3133f79c7bcefde099dcf332217312f3ec6f03f5d3b73b119313028a66f8bab9d9327bf298fe5c254e20f797bbb15324d9628108deb2242daa1c7a5234350339df07fdac164d456b217a98a8371df68613d3324d673c1d4d1d137912f274c3cb7b64df2a55c9f96070d4ee67426439d08acb3e13c5ebfbe06134a86a71074cc9c17bc901aac8c1e7a2df73c1a8e2a25cec0334d048a8232828cfd1c27f66129fbe4fdde7b4e867087ee00c2863a229556b0b533051a63c6b6a9d95cc9f89b6f9e6400277e3ae428389bc29caa8a4059c18095534524f1518e7fe6e6bacbdf39dbf5d86eb9d1705ab0b77bbecaf769bfdd60b8ceb0bd7770d45e31c34d75818a7fae6e105f513908a975a3d6c9f5be59706ad3f8ea525a0b4842e184dcd091dce4c274ee3294b67633b4e4d88e3593cb5e9383699638195c44091a745358b96a29c0d1d3b4dd259341ddab3c84a462c8a2d1845760cd6c8b2ed619298e470421e6baee08ccb4a48de75885cfbebd08d427fefad96a1ab4b486993abb3ce585bc05b8f0a0b44d027351dda2817a8d4b67bed85aebf5c85eb2bb79bf00632ca9e82bf38e394e612104d6b6c9e827a2b126c18f1965bf70cc17a6297c7a024f3dfcfa4ed79ebe24dcb5fe9210eb0b5abf49704a1bff67e683b47c415cd1b0d79e80ea442cbb7581bba3efc41242e699785fcdabbfe0de99e7c48a186927d3d4d04ebc097ffda71f1118bab8f3252e11d7787c95684d5d0ed10d7e5beb02d6b82c3241a5cab0f31cb191fbbd6e6",
      "68334201a57aa9a85b7c2cb4136be42b0883387e4f77ebf00fcf54956978040000",
    ],
    [
      "ETag",
      "LYMc56wfJCd9SsUPO39mdg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-71-1604009372790"
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
      "d1",
      "4e",
      "83",
      "40",
      "10",
      "45ff657ca509d55a2c491faa5625c15a29c6a8699a2d0c4805067717b536fd7767b156a326fa0233c399e5de0b2b78c8ca185c9867e9638d72b993a2be344580aaceb5e25b45a542b000b54899bc991fd4fee275ecbc24c56ddc3bb9f02ee93aedf79950d13d1602dc152419e6b102f76e05a52890d722caeba29c359d057a5999e1240cbcd129f705c5a61f5df9fee0d01fc2dada2ec6428b59c3ff636dbab66041f3001394584668b45492161869cfd854a2a8726c29aa65840a1ab879904aaa2b21895a3c6939ed56bb6b776cbbb7e7ec3a3d9bc19c22a1332a99bd9ab03ed0a4451ed033bb842e03b229d970d25c9f789cc58d11537aa3b0db69f47d05585a92e538fb1b64bdf7823fc307b689e03b270aaa4bbda54efc8bc16fc771a69f471d0fc2e10f42694e6a8b84def970120ecec7869b6ebc1f2e35aab1240e52a1c9b06d770ef69daefd1eeb1199a8f93dae96355a1009fe3bce320d6e227285eb3752c3f10d7b020000",
    ],
    [
      "ETag",
      "Yb8uLjzP7xfmZd9FOIQoWg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`amount`) LIKE ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["FLOAT64", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "%1.54%" },
          },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-72-1604009372790",
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
      "000000000002ffc5536d4fdb3010fe2b96270488be42815109b1d20616ad34254d4168428d9b5c8321898bed54ea10ff7d678702151bfbb84fb17dcf9bcf9727fac0f398b6e994278f05c8e5977b31a5150a9a2578bab3975d2faf96bde60efccabd61ec7ebdec2d2e8f8f11c10d4bb16c9e4255894246a0dae3512d91a2983329441585aa87bbd5e641a3d5681ced1dee1e1e3590a7209df579fe80ec3bade7aa5dafafbc6b8910490a6cce552d12d9eb797db15b9f4b710f9156f575cb3abaa8fae7a627a98898e6223f1e8f3040a1404e20633cc5086fcc78fa6d5dbac659564b10bce011b0281245ae4d2c9488443ee34921ad2a6d3f511bf3dd828e9cbed30d48d71b0f82ad9065861c6e13a6c864224115a9ae9010ef34e3294c781c9695f90339f3bd0bac60823ba64085e4fabbe33b84f4bd6bc77fa7d4777f38e4847406bd751d7740b64eb6c9b9ef8d87e4f466ad88c963983134ef318deada248ecba56b9e5383d2087ae9b5fbf185e9b3a97221b936b7740781e377ba817be5948ded43c2a2e5e8115b3b63a9024433c932d0202f440c48197a233770bd41a78f0cdbade10aa168fbe7d31b2158cec104d4f64bcffa5e273868d9042bc8154b0b8b59940bbad1acedb736e8f373e5ef4283f185e3bbddcf859aa8718b089ca7924e2fc78e7f43cb231f6620218f2ce5936e59b02dfcf3b758cd2862714ad14669dc2bcd23654c2209b61cf0ccc62bd9ad16d2f7a9054bfdb17674607ee53cfe63e5c5a3b0fa20a590be1d4cb3453765b3f01c3b82bf7a8566a0144b8ccc38c79b2860d314887d41f2da47128684e7c4749a84c1cdd099bc3c5b5821a72c26b1280ccb76b94dcad75aed36cbeda60966e394f3f07fa3dc964d325e3d6fe0e054fc06d175be1232050000",
    ],
    [
      "ETag",
      "+3mWyVyD1+eznOPdI8QDvQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "02ff1dcfc97282300000d07fc9599db04b6fe0a045968aecbd300122db4c09048a49a7ff5ea7ef0fde0f405585292d9671c05fe00d3024ea87eae01068ca1bce0acf80e9b4e1285fa67616b4070db540b0e28f8dacbd37562345016ce55456cbe9ae72db751b12f05eca9aba59eb497d38c8cc1d5ea363bb24bd7559cc4b37eda399942b9762d1a1772b0d38f38f2596af9f67388a391a05867cf796419f49643ad34d1735ff66c2edc995270e42f19a2691743ad98a5a1a1135c69939d071877d6e050b1918d9ec3c7ee74d926adceb3037bf8bd04d563169c00ee027e9664c8bee9595145ddf81ff79b130825f7d13a319cfe0f70f46ae40ba18010000",
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
      "Thu, 29 Oct 2020 22:10:47 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-73-1604009372790",
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
      "0002ff85535d6f9b3014fd2bc87b5c9390848610295aa394ae6809d980b4daa60919e742dd124cb1c99655f9efbb98a66b55a97dc2f63de79e733f782077bcd890094978765f43b5ff702b12724240d10c5fbf44bb8ffefe4f52c0c8f1aabf59fea3deef66d3292278c392745be6d091a2ae18c8c93aec6695a84b5a09d1c1441d7bd8e98f4ccb349da13db01d137912f274c18b3b64df2855ca49af77d4ee66426439d092cb2e13dba7f7de6ed02b2b710b4cc9de4bc91eaac8dedba29f72c1a8e2a298ae4334504ba862d8529ea385ffcc4d72f6327597d36d3743f08e33a08c89ba508d2d4cc14491f2acae7456327920dae6b30309dd853b8f0c26f27a5bc405ddc289b1a18ac66a5f827111ac9686e75fac82e52cf2567e1cce2fdde5ac3b5f2dd64b3f34ae2fddc035144d72d05c636a9ce99b8f17d4df8054bcd0ea51f3dc283f36c87b3d968680d212da606c9b23da1f9b4e9226364bc7c3d324352149c6897d4a8789c91c0bac4d0214795a54b368218ac160e498709ac67dcb4e620b6f7192f607b14391ed5843cbe9dbe470427e575cc13997a590bced10b90ebcc88da360edcf6791ab4b48699dabf3d65853c0738f0a0b44d01b351d9a2817a8d4b4dbf3233798cd23efca6d27bc808cb27d788f334e692e01d1b4c2e629a89662830d23fe6ce99e23584feceb3128c9e4e703697adeb878d6f2277a84036cec2afd25611478fe676de788b8a279ad21bbf6404ab47c83b5a1ebc32f44e292b659c8b7b51b7c27ed5300295450b0f7a789601d78f75f3b2e3e6271f551462abce3ee30d988b00ada1de2badc47b665d9f6704034b852af62637b74ec5a93a3c9085b28d46345ede263a1ad582d9f4018c4f1fbba5b877f3994e9ef78040000",
    ],
    [
      "ETag",
      "KTv+Nyxbne69IrzglZuyvA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-73-1604009372790"
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
      "92d153824010c6ff97ed319c300d93191fd04c993153c4971ac73961410c38ba3b32c7f17f6f8fcc9a6aa65e6077f9edf17d1fece129c943b06195c4cf258add598c6aaa0b0f65992a49b782e712c100542c2672301e9e3baf1745171f7afddcab27d395676d3b1d2264b0c68c81bd8728c13494603fee216719d25ac0d332cb97556780da157a38f33d773ca03ee3a1eec7f3d1c8e98efa70304e8b21536c59f1ff585b1c0cd8f09587110acc03d45a0ac137182857db942c2b52ac495e8a00255470f52016bc2c98e0bc46935aab51ab5b66d334db8dd665ab6d1298f280a984e7c4ce67a40f14572cf5f8965c824580a84a321c55d7171a2761654497eed8b79a95beaf00498b9214977f83a477cde8337c60c708be732ce365ae4ed4ede8def9ed38caf4f3a81bc7efff20a4a2a44e88efdef567be7337d1dce2e8bdbb53282782539012758675b3797dd5b2ccf7587b5c474defb19528d18080d1df314c14d8114b251ede005454c7967b020000",
    ],
    [
      "ETag",
      "GNH+Ax/pBeZCEnR1iQbR6w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`id`) NOT LIKE ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["INT64", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: "%15%" },
          },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-74-1604009372790",
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
      "000002ffc5536d4fdb3010fe2b962704487d83154a2b21464bb6652b494953a66a428d9b5c83691217db614388ffbeb34361151bfbb84f717ccf9bcfe707bae445427b74ced3db12e4fdbb1b31a7350a9aa5b8ebf7e167f7cb51e6b93f96f3e5200f06d37e72717c8c086e588ae5ab0cea4a943206d59b8c1ba914e58a4921ea2854efb4eb7b87ad76abd57ddfd9ef745bc853902d86bc5822fb5aeb95ea359b6bef462a449a015b71d58845febcdfbcdb6faea4b88158abe6a665135d54f36dd3934cc44c73511c4fc618a054206790339e6184176632ffb029dde02c6fa408bee331b0381665a14d2c948845b1e06929ad2aed3d501bf3b7051d3b43671092813ff1c29d88e5861ced12a6c86c26419599ae9108cfb4e019cc78125595d5927c0cfc73ac60826ba64045e4db6727700819fadf9c602742e82ef1fc900cddaf0e3921a7ded9a68eeb919d935df229f02723d29f6e143179020b86e6674ca3ba3689936ae99aebd4a034829e7aedbebe61fa68aa5c48aecd295d2f7482d341e85e3a55638790b2f87e7c8bad5db04c01a29964396890e72201a48cfcb11bbabe773a4486edd6688d50b4f7fde18510deafc004d4f66bbc0edbd67f0db86459691177d5826eed1d6cd1c7c7dadf45bcc9b913b883b765f650e30a11384b159d5e4c9c604aabad001620a1882de58d4e59b02dfcf349ace713b138a168a334fe2bcd63654c6209b61cf2dcc6abd8edf651a7dba5162cf5abda51fbc03ce322f963e5c9a3b4fa20a590811d4af38b6eca66e10576049f798de6a0144b8dcca4c0932860f30c88bd3df2dc4712458417c4749a44e174e4ccec954535d2670956f4619bd816f788b9a8f57adbfc6c9b4436473504ff29c355d5166372e67b0ecec12f4da1adbf20050000",
    ],
    [
      "ETag",
      "OBex9J8lNIwkbkCmRCYBdQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "08000000000002ff1dcfdb6e82300000d07fe9b318574a087b1b22748048817ae1c5b0521da168a11d8a66ff3eb3f307e7092ac6b852477d6df905bc83a982ce9ccd23b970d18d196fc5926e51ddb55f5e73e05d6621d9e7b4667ebda19e76929350df34c40df248fca88ba5f9b91fb3fc232cfdaccd1063468cccd5e567e151c7f63524d33a0e11b7c3585891de20abbcef25a5a4950d8f92a14bb53457b9d10f0772d62d9ed65048acc2be1b716fddc936dfba7993d124bb0903fa6a371251e22182aa4c8353005d1b0664973e0ab867b7949eccbeb8d8e81ae7eea38b043e8319e077d90c5c1d9b57d6b41c6706fee7473d49feeabbbc1af8007eff002a200dce18010000",
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
      "Thu, 29 Oct 2020 22:10:49 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-75-1604009372790",
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
      "2bc87b5c1348420a8914ad5142d748095981b45aa7091963a85bc0149b545595ffbe6bd374ad2ab54fd8bee7dc73ee07cfe89e55299aa284e50f2d6d9ebeddf1049d202a710eaf64f970b377b7fb3cf3dbdd77e68e6eacdbe072360304532c81cbbaa03dc1db865031dd85fdbce16d8d1bce7b90a8e78c7b8353cbb6acc9c8193a130b788216d99a55f7c0be95b21653d33c6af773cef382e29a893ee1e5ebbbb91f9a75c3ef2891c27c2f69828a303f17fd51708225e3d56c17828156d026a625660558f8cf4c93b3f7a9fb0c97fd1cc07b46282684b79554b62005e155c6f2b6d159d1f419699b6f0e28f4d6de2232082fdab28a2b5cd21323c512c7f2a9a6c679b0dd182bff7c1b6ce6d16aebc7e1e2c2dbccfb8bed7ab7f143e3fac20b3c43e2a4a09a6bcc8c337df3e102fa291592555a3d52cf4af9a541ab8f6351049016b40bc68e758a07ae3549b2c421993b1a27994593c44d9c311e251699d8d44e138a81a745350b57bc1abb9695da932cc6a963c5b66b0f637c3a18c46e961077648d9d513a468713f4d83049974cd45cb0ae43e83a58455e1c053b7f318f3c5d4286db422e3b63aa80b71e251408a04f6a3aa828e3a0a4dabdf2232f982fa2d595d74d784d734c9ec2079871860b41018d1b689ea4cd86a7d030e4cf37de12c07a62bf8e4181a67f9e91eab972f1a6e5aff40806a8ec4afd456114acfc9fdace1171858b5643f6dd01d560f9166a03d787bf808425edb2a0cb9d17fc46dd534033dad08a7c3d4d00ebc097ffda71f1010bab0f3242c21d76870825421adaed10d3e5beb06d7b32b40748831bf92166bb8363d7540e",
      "959196b4922f15758b0f857662ad78054110c6efeb6e1dfe01efd56b3678040000",
    ],
    [
      "ETag",
      "cDqZv8OvgfNuU+i83Z0hRQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-75-1604009372790"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92dd4e83401085df65bc8584fe8125e905d5aa8d6dad2dbd324db385815261177717b569faeece62ad464df40666866f96730eece131e331f8b0ced2a70ae5ee2c457d6f8a19aa2ad78a6ea5e00ac102d42c25b219dfea46b4e0b2645b7ce5fd56a8bcd7a0d72342451b2c18f87b4832cc6305fec31e382b90d6229157055fd59d057a579ae13c9c0d27d7d4172236fd64311a05fdd1000ed66931669aad6afe1f6bcb83055bb19e6182127984464b29c516233d3436152bca1c6d252a19a1821aae1fa45254259342d834b1bd8edd709db6e3745b5ed3eb3a04e622623a139cd8c59cf481169ae533f1422ec12540d625194eeaeb338db3b83662cae12474dbb5beaf00494bb21c577f83a477c3e8337c60c708be73ac1015d727ea6a7417fc761c65fa79d465100e7e104a535227241c8e07f330184f0db73c7aefef34aaa91414a4429361c3699f773cd7798ff54298a8e93dbe96155a1031fa3b6e320d7ec2728587374469757d7b020000",
    ],
    [
      "ETag",
      "2dKt1cUnrpajexnB3Ts7xA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) NOT LIKE ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["STRING", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%oran%" },
          },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-76-1604009372790",
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
      "10fe2b912724d0fa92be26ad845829198bd6a62549416c9a5ac7bd14431297d88155a8ff7d978402151a7c6aeae7e59e3b9f9fc81d4f96a44f02bebacf20dd7cb91501a910507485a7d99537f0c693e98537fd65c65fff6e1af7fcf4f1f818193c57491aaf23a84a91a50c647fe6d556a9c8d63415a28a4655a35b6d74f5b6aef75a46d3e8e9a8931085239edca1fa46a9b5ecd7ebbbdab59510ab08e89acb1a13f1cb79fda1595fa7e2169892f5fd9275ac22eb1f173d8904a38a8be478e661804c423a8798f20823bc2a97c1b77deb1aa7716d85e407ce803226b244e5b1d0828924e4ab2c2d5c49ff891431df7c10cf1a59435f1b4e668e7fb8a0712e5e1c69546af3790a328b54455b604f218f60ce978b1259df69dfddc918114c704325c88576f5c3722d4d1b4dae2cf7f005402f67e26b23fba7a59d6803e76cdfcd76b4c39323eddc9dcca6dae9f51e88f99720154f8af43e0d22c8933f0fd87e7fadb9802a2c5a827343efd286a9f78230305868b63a41a843109881d1a1ad4067bd36b4970150d4a9dcbd50d144240dd0cdb66e1aacd1648db61e3699617641d799d1315b34a4d00423ec763b645b218f295770c6e55a485e4e995cb9b66fcd7d77e60c07be55b411529ce459192e6fe26d4e854d22e983beb639ca0556caafcc767ccb1d0c7dfbd22ab764042bca36de3dee49482309c8a6298d41413a164b1c1a994e3cdbb727ce60848ae2eaa73b8624fddf4faf027fb32ea6ac8a5fe2f9aeed9c1701768c4b1a6505e5a1fc200722a5c901d96e2bfff7716663cbb5871f1b35d0e30f32f06d94727231b3dc6b521eb910420a09fb7c09905c009f3ef1dd7b432ebe382c2315fec79563322fc25228578fc745bc52",
      "ddeee89d8e490a72aade6146abb79b71ee913b420c897aeea87c6ff9b00a28932f240471639c62dcdb7fdd211d4bef040000",
    ],
    [
      "ETag",
      "uWSASMOPQSPZ8m+xy1qiBw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-76-1604009372790"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d905f6f823014c5bfcbdda310518944121fe642361762269b4f8b3115ae880297b545430cdf7db7d5873deea57f4e7fa73da7373817750621ec8bfca745d93de5a8d76691a06a4bad786aa856080ea016399379361c0f8ffea07a9f741b3158e5de3a0eaef339132a3d622520bcc1a1c03253107edfa01615b26db793f646c674d71865b9fa8a5ea384858a3223ac3671fcbc8823e89d3fb6e6fc2fcbb677e044fb040f28b14ed1a468249d30d54b535089aa29d155d4ca141558d81ee492da46482297153798baa3a9e77bde6c128c8399c76049a9d005d5cc6e3e391b68d2a24ce8cafd60c480b44bae7ab0e38565df76b85880a36d1fa645a7517d48e2040acde3de3dc80b99709a436bd9a203a9e09f7c2bf47ddfff02768b5e7da6010000",
    ],
    [
      "ETag",
      "gd/2/h4+mJ3yUa+Ng0QL7w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "c9591d3495a53765136451965ab864208412104259c54effbd4edf1fbc1f90604cfa1e0dac220d78074bb2933678736eb9e3db9ca18eec466bccdcc27e0e9cca647cbb12276c96bcd24eebbc80bcdd932832ea0bef7a25941bbe9d0dc5d4fcf05443561a4a9f9f771748f53aae748badbb3d7b76c218533c8fdfc23d6f2d3798d35af6c4acd66f1a4e276511225a52af705c73bb86e7c8e486bb9a31757258e0cf7e28a36a54154d0cec9e1994c5a18126f811a65b2fa0ee21503eef13b1b5d139688680a18af8d60c44de61be7efd022b401e2ded488fe82b0bf792b402ff73342c2d79f58f24e948077eff00f045509418010000",
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
      "Thu, 29 Oct 2020 22:10:51 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-77-1604009372790",
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
      "c8fbda2490472191a2354ae99a29212b21ada66942b6b950b704336cb27555fefb2ea6e95a556a3f61fb9e73cfb90f1ec9bd281232214c64bf6aa81e3edd49464e08689ae1ebd771603b7fcbb0cc6ef67bf5e7ee9282a457d3292244c3527457e6d051b2ae38a8c976d3cd2a5997b492b283893aaedb714eeda16d8f076edf1ddbc85390a74b51dc23fb56eb524d7abda376379332cb81964275b9dc3dbff7f6fd5e59c93be05af55e4bf65045f5de17fd9c4b4eb590c574bb4103b5822a861d15395af8cf4cd8d9ebd45d4177dd0cc17bc181722eeb4237b6300597452ab2ba3259c9e491189b2f0e64e32ffd79647199d7bb222ee80e4eac846a1aeb8712ac8b70bdb216c1c53a5ccda2c53a8837f34b7f35ebced7cbed2ad85837977ee85b9ab21c0cd79a5a67e616e005f513505a14463d6a9e1be5a7062dde8ea521a0b4823618bbf629753c7bcc52e6f2d41b8c586a03631e734774c06c3e1ec23061409167440d8b16b2e8f37eea7a0e8bb93366f1f0d4f1e271e2f198017313cf1e8efa69420e27e47725349c0b554a25da0e919b7011f971146e83f92cf24d0929ad737dde1a6b0a78e9516381087aa7a643131512959a762f82c80f67f36871edb7135e4246f9c3e617ce38a5b90244d30a9ba7a15ac9041b4682d9ca3f47b099d8b7635091c98f47d2f4bc71f1a2e5cff40807d8d8d5e64b3651b808be183b47c435cd6b03d9b70752a2e55bac0d5d1f7e221297b4cd42aeb67ef89db44f21a45041c13f9e26824de0c37fedb8f888c5d54719a5f18ebbc35523c22b68774898729fd8c391331a0e880157fa4dcced3b",
      "c7ae35399a8cb083423f55d42e3e16da8ad5ea1984411c7f60ba75f8075fc68ab578040000",
    ],
    [
      "ETag",
      "J9N01zpRpgWvvsxjHaeoaQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-77-1604009372790"
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
      "df65bc2d4941a0d2840b105062417eca95216469a7506c3b75778b21847777b6221a35d19b7666facdf69cd31ee139ce4270611d6f5e0a9487ab0deaa92966a88a442bbee59429040b508b0d9387a057cc6db56f79e143ab96561b3b1ac869bbcd840ab6980a708f10c598840adca7236422455e0b2829d26c557616e8436e86737f361cdf719f5268faf1c2f33a5daf0f27ebb2180a2d5625ff8fb5e5c9821dad6718a1c42c40a32597b4c3400f8d4d25d23cc18aa24206a8a084cb071b49452e2451852715c7a9549b76ddb65bd74ecd69d90c2614081d53c6ec62cefa409316c98c5ed92534199065c986a3f2bae7711c96464c391cfbcd7aa9ef2bc0d2a238c1d5df20ebdd0afe0c1fd83982ef9c48a9c8f4851a788f9ddf8ee34c3f8fea75fcfe0f42694eea82f8c3517fee774613c32dcfdebb078d6a228983546832acdaf59b86d3b4df63bd251335bfc7d5b2400b02c17fc77dacc18d44a2f0f4068511dca07b020000",
    ],
    [
      "ETag",
      "ycDuS0sv9LdK92m15joFrQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) NOT LIKE ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["STRING", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%oran%" },
          },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-78-1604009372790",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85536d4fdb3010fe2b91272490fa92be26ad8458d7665bb49276690242d3d43aeea5982671889d2284fadf77492850a1c1a7a67e5eeeb9f3f9896c79b2264312f0cd7d0ed9e3973b11901a014537783ab51e7a7d7d9ecfa9bdcbfd6431e96c75363a3f47062f5492c669047529f28c811cfa8bc62613794a3321ea685437cc7aabaf77757dd031dac640479d84289cf2648bea5ba552396c360fb51b1b213611d094cb0613f1cb7973d76ea699b803a664f3b86413abc8e6c7452f22c1a8e22239f717182097902d21a63cc208afca75f0f5d8bac169dcd82079c71950c6449ea822165a3091847c9367a52b193e9132e69b0fb2b0a6d6d8d3c633dff14e57342ec4ab338d4a6db9cc40e691aa692bec29e4112cf97a5521e956fbeece2e11c104b754825c69d73f2dd7d2b4e9ecda724f5f00f472669e36b57f59da85367226c76eb6a39d5e9c693fdc993fd7bedd1c81987f0d52f1a44cefd1208222f9f380edf7d75a08a8c2a215b834f43e6d99fa200803838566a717843a048119183dda097436e842771d00459d2adc4b154d44d202ddeceaa6c15a6dd6eaea619b19661f749d193db343430a6d30c27ebf47f635f2907105132e532179356572edda9eb5f45cdf198f3cab6c23a438c94915ae68e26d4e854d22e983bef605ca05562aaecc763ccb1d8d3dfbcaaab6640a1bca1e17f7b827218d24209b66340605d9a558e3d0c87cb6b03d7be68ca6a828af7e7e604832fcf3f42af01ed372caaafc250bcfb59d1f658003e38a467949d9551fe44464343921fb7dedff3e8e7f69b9f6f863a3167afc4506be8d4a4e7efb967b43aa231742c820619f2f01924be0d3277e786fc8c5178765a4c2ffb8724c16455806d5eaf1b88c57a9bbbdb6d96993929ca977d8c0300e332e3c0a47882151cf1d55efad185609e5f28584206e8c538e7bff0f23b753bcef040000",
    ],
    [
      "ETag",
      "LEw560PuPaIvuUnSD3k0cA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-78-1604009372790"
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
      "4010c5bfcb78b44d0a1210120e62881209c1562e1a429632ad2d6d67dd9d621ac2777776f1e0d1cbfe79fb7bbbefed198e45738009ec8bfcab45d3dde4c8af6e11a36d2bb632696a2c4200c82a17b2e6c496bac3774a927edede1ed7c3974d3e9d0a61d34fac154cce9015581d2c4c3eced0a81ac5b6db197fa360dc69a72c566ff3a7792c424d0727ac36cbe5c36c39874bf0c7a68fffb26c2f0194b48f3143834d8a2e85365462ca0b57d0aa5a57185a6a4d8a163cec0f7243ad56862814251cdd87bd613488a2f1dda83f1a470256942a2ea81176934836606255c5f42dfda02780f14ba99af9f124f2c077387940a26d7f4db38ed1ae0d49028beef1e81ae4915c3896d06c5a0c2055f293cf055ff7971fe9233495a6010000",
    ],
    [
      "ETag",
      "mtSsjpyeZoSS2gu+kP6KUg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "c97282300000d07fc9d93a28a0a1b7428a46d41236a91786252c820809c8d2e9bfd7e917bc793f208c63ca79d03d4a5a837730856b65192f8d4650a521b1114fb99020afca6f9143da9e78fb91cc114ecbac7bfa1737df496fc7d255c2d672f077e97dd4fb7b1d89dbcf54d6c55d7286b6d19f576b4968fd9e504fcd2f1944b2a231b61ef769bfc527324cba9027d5a93221d67a8cd06c59f394b0dafc62b57fdc38256c28869aaceb95a4c401acb9d512217bccd38b71bc0b9e77e9cd1a32b341e63de286cb5b8bae1aef70888acedf0893ede7d7ab814c0216808e4dc1280f8a575694156501fee7413735f4d55769c82803bf7f5b835cda18010000",
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
      "Thu, 29 Oct 2020 22:10:53 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-79-1604009372790",
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
      "fd2b64f6b52aa2a89898adb1744ba2b80bd866b3d99061bce058642833d8348dff7d2f43edb669d23e3133f79c7bcefde099dcf3624ba624e1d9430dd5d3b7bd48c8050145337c95bb426cfc5d65a5b69f877478b3df97c7f96c8608deb0243d943974a4a82b0672ba09bb5925ea92564274305167ec74fa2373689ace606c8d1d137912f274c98b7b64ef942ae5b4d73b6b773321b21c68c9659789c3eb7bef68f5ca4aec8129d97b2fd94315d9fb5cf47b2e18555c14b34d88066a09550c07ca73b4f09fb94d2edfa7ee727ae866083e720694315117aab185299828529ed595ce4aa6cf44db7c7320a1bb741791c1445e1f8ab8a007b830b654d1583d95605c07eb95e1f9d7eb60358fbcb51f878b1b7735ef2ed6cbcdca0f8dbb1b37700d45931c34d7981997fae6e305f5b720152fb47ad43c37ca2f0df23e8ea521a0b48436188fcd11ed4f4c274993314b27033b494d48924932b6e92031993384e136018a3c2daa59b41045dfb159d2b79c786b0f693cb4ad414c2713168f6c1320b5d2be9d4ec8e9823c565cc11597a590bced10b90bbcc88da360e32fe691ab4b48699dababd65853c05b8f0a0b44d027359d9a2817a8d4b4dbf32337982f22efd66d27bc848cb2a7f001679cd25c02a26985cd5350adc4161b46fcf9cabd42b09ed8cf735092e99f67d2f4bc71f1a6e5aff40807d8d855fa4bc228f0fc1fdace19714bf35a438eed8194687987b5a1ebd35f44e292b659c8af8d1bfc26ed5300295450b0afa789601df8f25f3b2f3e6271f551462abce3ee30d988b00ada1de2badc17f6d01ed813876870a53ec4c6d6e8dcb5264793110e50a8978adac5c7425bb15abe823088e3f775",
      "b74eff003b1408da78040000",
    ],
    [
      "ETag",
      "shnoUNhr2f5NlSa4HjjpvA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-79-1604009372790"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d925b4f83401085ffcbf84a136a2b58923ed08b16edcd963e99a6d9c240a9c0e2ee62539bfe7767b156a326fa0233c337cb39070ef094e42138b04ee2e712c5fe2246f5a08b19ca3255926e05cf258201a8584c64ff5576d59d1c6dbb3d736035baf1fd24eeedda6d2264b0c18c81738028c13494e03c1e206719d25ac0d332cb57556780da177a38f767def896fa8c87ba1f2f8643b733ecc3d1382f864cb155c5ff636d793460cbd7338c50601ea0d65208bec54079daa6645991624df2520428a182ab07b1e065c104e7359ad4ec56ad6e994dd36c35ec4bbb651298f280a984e7c42ee6a40f14572c9df11db9048b0051956438aaae2f344ec2ca882ebdb16f352b7d5f0192162529aefe0649ef86d167f8c04e117ce758c6cb5c9da99be1c4fded38caf4f3a89eebf77f1052515267c4f746fdb9ef8ea69a5b9ebc77f60ae554700a52a2ceb06e36afaf6ccb7c8fb5cb75d4f41e4789120d0818fd1d83448113b154e2f10d3c78da727b020000",
    ],
    [
      "ETag",
      "EzsCtJsMjCD0H63CgKOgDw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`date`) NOT LIKE ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["DATE", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "DATE" }, parameterValue: {} },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-80-1604009372790",
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
      "5d",
      "4f",
      "db",
      "3014fd2b56f60212fd8232201362a5cd205a496892821042ad496e82218953dbe98410ff7dd74e3b56b1b1e73dc5f13de7dce3ebe317eb899589655bf72c5bd4209e3f3df27b6bc7024533dcbdee05ee8fabc9e979be5cb8295723b737399f1c1f23826996a44595434bf25ac420ed69d8ce04af2b2a386fa150ebb0dbea7deef6bbdda3bd83dd83a32ef224e4e998954fc87e50aa9276a7b3eeddce38cf72a01593ed9817bff63bcbdd4e25f823c44a76365b76b08bec7cdcf424e731558c97c7d3100dd412c40c0aca72b4f0c64ceebf6e4ab7192dda1982972c061ac7bc2e95b68512312f5396d5c2a85af68b656cfeb6b04267ec0c2332f4a75eb435a78526cfb7099564361320eb5ced90399e296539cc58326f2ad513f916f8175841070f54829c93eb7327700819fbd74eb0354fa802d4f1fc888cddef0e3921036fb4a9e47a64eb649b9c05fef4929cde6c14d17b0229c5f623aa505f69cf49b374f5852a900a41ab69bbefefd87ad555c60553fa9cae1739c16018b9574e33da3164347e0e1738dc94e612104d052d4081b8e00920e5d20fddc8f5bdc11819665e976b84b4ecdb973742f45c8136a8ccd71a0d22c77a7dddf93bc29b5e38813b341ed7902b9ad706b36c16560f35ee10815169e8d664ea043756b315400a02cad8503e1883019bc23f13bf8e1f623180d8462afc978ac5523789059872c40a63af61f7f7fbfd3df35e1415ea5d6dbf7fa45f6999fcb1b2ea511b7d10828bc0644eff623769bcb01227c2928949ec86cbc56aab0029696606cb494155fcc0ca8c489695a82d80a45c90b42e634d6b026ab6a8c8ea024a45f4ad489be87b6b93b0ae2a2e14246f02586b621d4681eb9d6d7f59fd9ede444e888f4591db9e7db87ba7cf634ed1e4",
      "e3bf3cc15d732526c7bea773fc13130800777b050000",
    ],
    [
      "ETag",
      "W1RIwVQBHlvqIfotDI1QHQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000000002ff1dcfdb7243400000d07fd9e7c88875ed5b88ba84a06e8d17b3d8b26e31561ad2e9bf37d3f307e707a0b2c494e6cbadc32378031be2947db93f4facca3f4a2fa4dab1e0d2608a0ee297f179626227c8565bd520649e2dea74367ce8559fa91cc4f773112f0e6e56cf27feb76ac666429da286cc653e4a7523f5c3e286ee9df4627dd567141bb53cb5ae6653af1d1b33ac4e1d69cb34d9f8de1cde636821522ec961502dff4371edeec6a5ac35d78ae53502a485abc0086a62cf4f849137c931842cbe4457cbf38f99d9479c55546d288b918b9e86b78e99240e01d801bc4e64c63427af2c14146507fee7f9b24df8d557319af10c7eff00e5e4a08918010000",
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
      "Thu, 29 Oct 2020 22:10:54 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-81-1604009372790",
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
      "db",
      "30",
      "14",
      "fd",
      "2b",
      "91",
      "f738daa46ddaa695aa51b5012a35294b53d0344d91ed38c190c621764008f5bf73ed50069b044fb17dcfb9e7dc8f3ca33b5ea6688a08cfef1b563f7dbb15049d20a6700eaff3e0bb63d7d53a3d772e97653c091779df7f9ccd00c1354be27d55b08e144d4d999ceeb6ddbc164d856b213a90a8e3f53abd91e33ace6430ee8f270ef0242bb2352fef807da35425a7b67dd4eee642e405c315975d2af66feff643dfae6a71cba892f647491b54a4fdb9e88f4250acb82867bb2d186824ab13b6c7bc000b7f992939fd98bacbf1be9b03f881538629154da9b42d48414599f1bca94d56347d46c6e6bb03dafa6b7f115b5414cdbe4c4abc6727568a154ed453c5acb3681358abf06c1305f378b50993ede2c20fe6ddc566bd0bc2ad757de147bea5302998e15a33ebd4dc42b8807ecaa4e2a5518ff5b3567e6dd0eaffb16802484bd60693b133c23dcf99908c8c69e60d86247318211e190ff1803874e23237250c03cf881a162e4549065ecf1d91619239e361e252af974c8843126f40463ddc4f7ba3fe001d4ed063cd155b725909c9db0ea1eb6815fb491cedc2c53cf64d09196e0ab56c8de902de7b545020803ea9e9a0a35c80926ef72a8cfd68be8857577e3be135cb317ddadec38c335c4806685c43f314ab039142c350380ffc2580cdc42e8f4189a6bf9f91eeb976f1aee56ff41806a8ed2af345db385a85e7c6ce1171858bc6401eda03aac0f20dd406ae0f7f00094bda66413f777ef40bb54f11cb58cd4afaf534016c025ffe6bc7c5072cac3ec8480577d81d2ab508ad59bb43",
      "dc94fbca7687ee6464fe54856bf56f6cd877dc63d7740e9d91ed59a95e2b6a171f0a6dc51af90682208c3f34dd3abc001019fecd78040000",
    ],
    [
      "ETag",
      "AM+0/rpLdG0PDnT9NCg2Ew==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-81-1604009372790"
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
      "00000002ff8d92dd4ec2401085df65bcb4c422ff4db80045252988502e8c2164d94e4b71dbadbb5b9510deddd98a68d4446fda99e937db734ebb83c7240bc18355123f15a8b627319a3b5b4c5117c268bae532d3080ea06131919db896f9f79a37daafa76930e2e2cc3492b8db2542f335a60cbc1d44098a5083f7b0838ca5486b5c8a22cd9665e780d9e676380ba6c3f135f5a90c6d3f9efb7eafef0f60ef1c174366d8b2e4ffb1b6d83bb091ab2946a830e368b5e44a6e909ba1b5a9599a0bac6859288e1a4ab87c102b59e44c4959a149a55dad549b6edd753bb5d679abe312282467269119b1f319e903230d1353f9422ea149802a4b321c95d7671a276169c496c371d0ac97fabe02242d4a042eff0649ef9ad167f8c00e117ce7582a8bcc1ca92bffb6f7db7194e9e75197bd60f083d086923a22c170349805bdd1c4728b83f7fed6a09e2849416ab41956dd7abbd16abaefb15e481b35bdc733aa400738a3bfe32631e0454c68dcbf01933e774d7b020000",
    ],
    [
      "ETag",
      "9g3nLYsc58x+mTMcl/t5ig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`stamp`) NOT LIKE ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-82-1604009372790",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffd553db52db3010fd158dfa0233e45ac2251d8686e0524f123bd80e0cc33089b0d746c4b68c24d3320cffdeb59c40d30b7dee93e5dd73ce1eedae9ee992e711edd35b9e3c94209f3edc8b5bba4341b304a3a3def7b3c2f19de5c5de68f77ca495c8baf7df8e8e10c12b966259914243895286a0fa33bf994851164c0ad140a1c641b7d1d96befb6db871ff7bbfb876de42948e331cf97c8bed3ba50fd566b5dbb990891a4c00aae9aa1c85ee3adc76eab90e21e42ad5a9b255b5845b5de2f7a9c8a90692ef2a3998f064a05720e19e3295a786346b79f37a59b9c65cd04c18f3c041686a2cc75650b254291c73c29a551a5fd676a6cfe74a0be35b6860119ba3327d85ab0ac222fb60953643e97a0ca54ef9005de29e629cc79b4a833c5927cf1dc0966d0c11d53a016e4f2abe559848cdd4bcbdb5a288d1e51c8710332b64716392603e77453ca76c8d6f13639f3dcd9949c5c6d24d17c0431c3faa74c63015d998eeaa35d4d5483d2085ab5dbfe7dc8f4a5ca7221b9ae2e6a3b81e50d86817d61d5bd1d43c2c227ff01bb1bb35401a2996419689013110152a6ae6f07b6eb0cc6c8300d9bae118af6af9fdf08c1530195416dbe34b027961f0c2653faf2b2f37798339b589e3d3446d7900b969606f3581f6807356e10810b53d3e9f9ccf2ae681df2200609796828eff4c2804de29f7bbf5e42c4e21a62191ca5e64af35055454209261df0ccd8abd9bbbdde61fd6a3493fad7dc5ea7d3abde6a1efd31b3aa511a7d905248cf6c5ef58bd594f1c273ec088fcecdde6eb87c588532508a25a6b182644c87773c4f88e2498eda12482c2489cb3cac68f59a9a1093499941ae493515d527afc36b12bf2c0a2135446f2a08a837dc0f3cdb39dbfeb4fa3db90a2c1fdf8d26d79dfe41f7a6ba94b94abd29ffef356eeae1547e4e5dc7c26dfc01016fd6ec8b050000",
    ],
    [
      "ETag",
      "K5xGpNSNkV6K4QKtsom2jw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000000002ff1dcfc97282300000d07fc9591c65a7b78082806c4e45e8858134404459832c9dfe7b9dbe3f783f2045080f43429b0ad7e0032c29ab6cd1d66e772a3fa1338435a9d87d867993c0ab3be85e21af873ae83288a62ceb8224dd45c2fe36aaaf4c200dccbd00b25439e127c195d5cd6354a8c6913ad639c765e2ab42780a17c1f7ee055c446db6572e2e5d34498b31ea3e195f78ea66ad350a49b41177848eebae8c2664f59c33dfbc37a561fd90e17033262622e5f3eb5eb93aeff4fdf069792165e8d83fae63ad48b109e370e645b989a86216f6c1f0cd4b12800dc0734b7a3c24e49de50445d980ff79429716bffb2a4e7bdc83df3faae409fc18010000",
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
      "Thu, 29 Oct 2020 22:10:56 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-83-1604009372790",
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
      "0002ff85536b6f9b3014fd2bc8fbda04d2840091a2354ae91a29211b8f56d33421630c750b9861d329aaf2df776d9aae55a5f613b6ef39f79cfbe0093db026470b94b1f24f4fbbc3977b9ea13344252ee1d5c1d56a8b9d3638982c4962bf26bbfba25c2e01c1144be0baade848f0be23542c92685c76bc6f71c7f908128ddce96832b76696e54d9d73c7b3802768556c59f300ec3b295bb130cd93f6b8e4bcac286e9918135ebfbc9b8fe766dbf17b4aa430df4a9aa022cc8f45bf569c60c978b34c2230d00bdaa5b4c6ac020bff997976f136f598e17a5c02f891118a09e17d23952d48417853b0b2ef7456b47842dae6ab038afcadbf8e0dc2abbe6ed206d7f4ccc8b1c4a93cb4d4b80af73b63135cedc3dd2adeec83345a5ffbbbd578bddf26bb20326eaffdd03724ce2aaab9c6d2b8d0b7002ea09f532159a3d563f5ac949f1bb4793f16450069418760ea58733c712d2f2b328714eed4ce0a8b66999b39369e6616f16674966714034f8b6a166e78736e135cb8f93cb53d7b9ece2659962a6cea4d30769d299e4f0a828e67e86fc724bd64a2e5820d1d42b7e126f6d3384c82f52af6750905ee2b7939185305bcf628a140007d50d35145190725d5ee4d10fbe16a1d6f6efc61c25b5a627288fec08c0b5c090a68dc41f324ed763c8786a160b5f32f01ac27f6fd141468f1eb09a99e2b17af5afe428f6180caaed45f14c5e126f8a6ed9c1037b8ea35e47138a0162cdf416de0faf81b90b0a44316f423f1c39f68780a69413bda90cfa709601df8f45f3b2d3e6061f5414648b8c3ee10a1444847871d62badc67f6cc9edbb68b34b893ef6273cf3e754de55019694d1bf95cd1b0f850e820d68b17100461fc81eed6f11f29b8ca4878040000",
    ],
    [
      "ETag",
      "7alALa7pNy/iUUTEmcMjfg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-83-1604009372790"
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
      "5b",
      "6f",
      "82401085ffcbf41513bc1495c407b5b4355e2a8a4f8d312b0c88028bbb8b8d35fef7ce526b9bb649fb0233c337cb39074eb08bb3006c58c7d1be4071bc8950b9ba98a12c1225e996f34c2218808a4544f69ddabee94e7ad162980b571c5277377c753b1d22a4bfc194817d8230c62490603f9f206329d29acf9322cd566567803ae67a38f76683c903f5290f743f598c46dddec881b3715d0c9862ab92ffc7daf26cc096af6718a2c0cc47ad25177c8bbe1a689b92a5798215c90be1a384122e1f44821739139c57685269d52b55cb6c9866bbdeac35db268109f7998a7946ec624efa4071c592197f2197601120ca920c87e5f540e338288de87230f1ac46a9ef2b40d2c238c1d5df20e9dd30fa0c1fd82582ef1c4b7991a92b753f7aeafe761c65fa79d45dd7737e1052515257c41b8c9db9d71d4f35b7bc78ef1d15caa9e014a4449d61d56cb46e9b96f91e6b9feba8e93db612051ae033fa3b1e630576c81289e737394f96a67b020000",
    ],
    [
      "ETag",
      "CE2q7QNBgUKprQrvmQkKzQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`amount`) NOT LIKE ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["FLOAT64", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "%1.54%" },
          },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-84-1604009372790",
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
      "53",
      "5b",
      "4f",
      "db",
      "30",
      "14",
      "fe",
      "2b96270448bdb2d2ae95102b6d60d1daa4a4090c4da8711337189238d84e2586f8ef3b762850b1b1c73dc5f6f96e3e3e79c4772c8ff1002f59725f52f1f0e9962f710d53451238ed768a1f6e5f38eb93ae7b336e8fc7ab74faebfce808104cb324c98a94d6252f4544e520983712c1cb8208ceeb2054ffd2a9b7bbad4eabd5ffdc3be8f55bc093345d4d587e07ec1ba50a39683637de8d84f324a5a460b211f1ece5bcb93e681682dfd248c9e6b665135c64f363d3e3944744319e1f057308504a2a1634232c8508afcc78f9755bbac148d64800bc66112551c4cb5ce9582011f17cc5925218553c78c426e69b059e5b136be4a3911b38fe5e48324d0ef7119168b1105496a9aaa110eeb462295db038ac2ac51d3af5dc295420c10d915486e8f29be559084ddc4bcb7ba3e4b83e9ad8df2d748c86ce785bcb76d0def13e3af3dc60864eaeb68a903ea62b0201c6448183d2a9e36a69eb2755542a003df7db7effcaf8495719174ce99bda8e6f79c3916f5f585573273421d1c3fc1edabb22a9a480268264545131e53105cacc9ddbbeed3ac309304cc7661b84c4839f8faf04ffa1a03aa0325f7c3a71877eb763126c2017242d0d665d2df04ebb71d8d9c14f4fb5bf0b39c1d4f2ecd1c7426dd0b80604cc5445c7e781e55de1eac8a32b2a681e19ca07dd326053f8e7afb19953c0c2a4828d54b0978a45529b44829ab2cf3213af62770e7bbd4e1f1bb050ef6b3d5da379fcc7cab34769f4a9105c786638f516dca4c9c272e808fcee359c512949a265821c6e222959a6149917442f7d446188588e74a751e85fcdacc5f3b3853574426214f352b34c9707a87aadcd6eb7",
      "daeeea60264e350fff37ca75d524ed35761d0ba6e237d7ec96a436050000",
    ],
    [
      "ETag",
      "64pXO9rNvB6OhD1DDflMzQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0002ff1dcfcb7282301400d07fc95a1d0109a53b830ce521502a0a6c98102e181f400195d8e9bfd7e9f983f3832863300cf9d89ea141ef4850595fb085db2dc9ea013cb5c22a1db14645278edb616ef8f5143a9144f7375225577101d9ddf058ad6453c544ac23624d60d78d6ae902af5d5cd07ea75b53463e2c4f6a33c7cc6d2e49e5d1493ca3bf77dfe6930b7b33e6cecd682fc20b02a629cff250eae6f69a44b66f14786ae3a694e20c3bbb84d63ebbefe12d0e20fca23475e074ae64ff54ef5d323f44cb70252bbe87f18d3333ab9e5ac13eaf4468722a7c3e9cd7688660ea780f43ce5f5945d5f519fa9fe7a3e8e0d527407be8d1ef1f57400d4b18010000",
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
      "Thu, 29 Oct 2020 22:10:58 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-85-1604009372790",
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
      "71b44de92369a56a74258c4e6dba25296c4c5364bb37c190c621767808f5bfefc6a10c84049f62fb9e73cfb98f3c926b916fc8983091de54503e7cba928c1c10d034c5d73cfcfef5f3d9f155767f7171227c797fb75affba9b4c10216a96a2db2283969255c9418dd7613b2d6555d052ca16266ab983567768f76d7bd4730e9d918d3c0559b210f935b22fb52ed4b8d3d96bb75329d30c6821549bcbedf37be7f6b05394f20ab8569dd7921d54519df745bf6492532d643e598768a05250c6b0a522430bff991b76f43a755bd06d3b45f0ade040399755ae6b5b9882cb3c1169559aac64fc488ccd1707127a0b6f16595c66d5368f73ba85036b43358df54301d649b05a5a73ff64152ca7d17ce5c7e1ecd45b4edbb3d562bdf443ebfcd40b3c4b539681e15a13ebc8dc7cbca0fe069416b9518feae75af9a941f3b763a90928ada009c68e3da45dd71eb184393c717b0396d8c098cb9c01ed319b8ffad0df30a0c833a2864573990fed64d41d30166f5c48e27e97f6e31173ba311b0c5d70fb3d673860647740ee4aa1e158a8422ad174889c07f3c88ba360edcfa691674a486895e9e3c6585dc04b8f1a0b44d03b35edeaa890a854b77bee475e309d45f333af99f00252ca1fc21b9c7142330588a625364f43b9941b6c18f1a74bef18c166623ff64145c67f1e49ddf3dac58b963fd3231c606d579b2f09a360ee7f3376f688339a550672db1c4881962fb13674bdfb8b485cd2260bf9b9f682dfa4790a20811272fef134116c021ffe6bfbc5472cae",
      "3eca288d77dc1dae6a115e42b343c294fbc4ee0fdcaedb23065cea37b19ed3dd77adce5167842de4faa9a266f1b1d046ac52cf200ce2f87dd3addd3f091dd86f78040000",
    ],
    [
      "ETag",
      "nSJB+VDjlxZZFiNoxwOUXw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-85-1604009372790"
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
      "6e",
      "82401086df657b8504aba29278c04a5b12b48a706963cc0a036281c5dda5c61adfbdb3d4daa66dd25e9699e19be19f9f3d92e7ac8c8945d659baab811fae52907315f820ea5c0a7c54ac1440340292a6489aed705e954eb786f071ff5acc33878e77f670888488365050621d4992411e0b623d1d49490bc0b688e57551ae9a4c23f250a9e222f0dde91de6058b553e0d3dcf1e790e396997c6984aba6af87fb42d4f1ad9b2b50f09702823505a2aceb6104957ad296851e5a00b56f3080469e0e645ca595d51ce988e15bddfd55ba6d1318c41bb77dd1b1808e62ca2326325b2e102f511c924cd7db617ca13047813e2c24973be60398b9b4554e84e03b3d3e8fb0aa0b424cb61f537887a37147fc30776b6e03b470b5697f242dd7a0ff66fe3d0d3cf51633b707e1042a25317247027ce22b02733c52dcfbb8f0e12c48c33345280f2b06574fadd9e69bcdb7ac394d5f81d4bf21a341251bc1df7992456427301a7379d48bdc17b020000",
    ],
    [
      "ETag",
      "63UQpnE5ueUZwzmQiEaDqA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `id` = ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["INT64", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-86-1604009372790",
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
      "000000000002ff85535d4fe24014fd2bcdec8b2608050ab424c465b1bbdb048b9656d76c36301d6eeb68dba99da9ae31fcf7bd6d452566f58932f79c73cffd7a22b73cdb903109797c5742f1f8e54684a44540d1185fbb0f83691c9cff0d53ff1a7e0d7cc7f28617e793092278c59234cd133892a22c18c871b06cc78528735a0871844247e6f0a83bd40d5db7faa3dec8d291272189e63cbb45f6b552b91c773abbdced588838019a73d966227d79efdcf73a79216e8029d9d94fd9c12cb2f371d2e34430aab8c826c1120d94128a15a4942768e195b909bfee4bb7394ddb3182ef3903ca98283355d9420926b288c76551ab92f113a96dbef9204b7b6ecf7c6db6085cff604dd38abc3ed4a8d456ab026499a896b6c69a229ec08a6fd64d24bfd5be7b8b538ca0836b2a41aeb5cb9fb6676bdaba024db4636dea9eec331d573b383ed47e788be04cfb76b51744af1b908a67b5539f8609542e9f9be9bc1f6145a00a3337c1d5481fd2aea95b61148e5864f60761a443189ae16840fba1ce2c038c4d081479aa52af593413196298c9fadd4dbf67847ad4335868516a744d18b19ed9d72d5dc7d90c4cb26d9187822b38e1321792371d25979ee3db2bdf0bdcd9d4b7eb32228a5d3b69cc5545bcf5a9b048047d50d7b68a728199aaf138ae6f7bd399ef5cd8cd46cc21a6ec7179873b11d14402a269415350509c8a0d368d9c2d968eef2cdce91c19f598cf760849c6bf9f5e09fe635e7759d5bf55aea151e7df012e6852d688fbe683740764bb6dfd5fc20d4e6dcf997d22821a7f108127d0d0c979607b57a479f220820232f6f9fc115c073ebde4dd5921160f0bd34885ff71db98ac92b0029aade3696daf611b03ab3b1c911a5ca877b19ea9efda5b69548a9042a69e2b6aceaa6a561d2ae50b0883b82caee3fec0e83f8235c00ad6040000",
    ],
    [
      "ETag",
      "1w5AgUQxbmTheX5TI9R6VQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-86-1604009372790"
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
      "0002ff8d90416f82401085ffcbf40a09b68d16130f6aacc512d2d29a1e1a635618105d18babbd412c37fef2c7ae8b11776f6f1bdddf7f60cc7a24a610cbb22ff6a50b537399a573bc4a81b69342f35551ac101342267721fe4ede9c77ff6fca55ccd1fc3d5473495d3c984099decb114303e4356a04c358c3fcf508912d9b6ddaafe44c64c5b5b2588de17cb45cc4249a915a275184e67e1023ae78fad3efecbb2e91c38d02ec60c155609da14b5a2032626b005b5286b89aea64625a8a187fb1fb9a2a6168ac865c57d18ba83a177ef79fedde876e47b0c4a4a8429a86276fdc6d9c0901132a613f7830103aa1fb96ad67fbf7bd976b84e9b6e7335cd5a83fa451127d0682ff72e41e664c3190e6d54830e24825ff2a930977df70b1a11fff2a6010000",
    ],
    [
      "ETag",
      "hIgywx9K09GlJCFLJWNAlA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:10:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "cfc98e82300000d07fe9590c14143a4740166589b23872210c2d5289941dc1ccbf8f99f707ef0db23c277d9f0eac2235f8024b06d136df9e1a5e95e6fcdcb2a4a5d44febf861bb7db5c6035bd08b8712beec8d240aa6c1ac4acea233f42d85cafccd36cd4453b8198d43c9bec941eca831e92bcbe472c547f6cc9da1754c2ee8c6976049d124de9443ecfa488a6c473e21abd7a770de5f7143b9420d2b2c99f242f75d79b635888b272727b6fee4f9c7cfb14609968debdd3fdacd58e401bc3c6e65bdd33cd320100ba2274e6d228477573c281eab23f774071b405e0ded489fd24f56dc21b401fff374581af2e9ab24eb48077eff006409ace818010000",
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
      "Thu, 29 Oct 2020 22:10:59 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-87-1604009372790",
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
      "535d4fdb3014fd2b91f74a5bd3a64d52a91a5509a3a84d214d41d334458ee304431a07db29aa50fffb6e1cca6093e029b6ef39f79cfb9117f4c8cb148d51c2f3a79ac9fdb70791a013c434c9e1d549f71c5f5f159737b4ba9aee66f29ac87e3e990082372c45b655c13a4ad4923235deacbbb9147545a4101d48d4719dcee908db187b03a7ef7818788a15d982978fc0bed7ba52e35eefa8ddcd85c80b462aaeba546cdfde7bbb7eaf92e28151ad7a1f257ba0a27a9f8b7e2f04259a8b72b25983815a3119b32de10558f8cb4c93b38fa9bb9c6cbb3980779c3242a9a84bddd88214549419cf6b69b2a2f10b3236df1dd0da5ff8b3c8a2a2a8b7655c922d3bb152a249acf715b32ec2d5d29a0717ab70398de6ab205ecf2efde5b43b5b2d36cb606ddd5dfaa16f699214cc70ad8975666e015c403f654af3d2a847cd73a3fcdaa0f9ff63690820ad581b8c1d3c22a72ef6922c7168e60e8649865992b8893324830453cf66769a30023c236a58a41425c56ce8e16c14b381e3c43649fb31714776ecd241dfc5ae3df06c0f1d4ed0b3e49a9d735509c5db0ea1bb701ef971146e82d934f24d0919a90b7dde1a6b0a78ef51438100faa4a64313e502949a76cf83c80fa7b3687eebb7135eb09cd0fdfa09669c914231401309cdd34c2e450a0d43c174e99f03d84cecfa185468fceb05353d6f5cbc6bf91b3d82013676b5f9a27514ce831fc6ce11714b8ada4076ed015560f91e6a03d787df8084256db3a09b8d1ffe44ed53c832265949bf9e26804de0cb7fedb8f88085d50719a5e10ebb43552342256b77889b725fd9f6d0733d0f19b0d4ffc4461863f7d8b5264793916d59a95f2b6a171f0a6dc56af50682208c3f30dd3afc012d7da15e78040000",
    ],
    [
      "ETag",
      "7dyi0PJlHQcpJAvCrPar2g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-87-1604009372790"
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
      "83",
      "40",
      "10",
      "85",
      "df65bd85486d8596a417545149e81fa5c6d434cd16064a051677174dd3f4dd9dc55a8d9ae8cd32337c339c39ec9e3c65654c6cb2ced2e71af8ee2c0539554100a2cea5c047c54a01442320698aa419272eadbb622cfcc57db86d2fceddf1c3b4df4742441b2828b1f724c9208f05b11ff7a4a405605bc4f2ba28574da611b9ab54711606dee816f382c52a1fcd7ddf19f82e3968a7c6984aba6af87fb42d0f1ad9b2750009702823505a2aceb610494fad296851e5a00b56f3080469e0e645ca595d51ce988e15bd6be92dd3e81846af6d5d583d03c19c455466ac44763e437d443249f380bd0ae50902bc0971e1a4395fb09cc5cd222af446a1d969f47d05505a92e5b0fa1b44bd1b8abfe1033b5af09da305ab4b79a26efcb1f3db38f4f473d4b513ba3f0821d1a913127a4377163ac389e296c7dd073b0962c2191a294079d8323add4bcb34de6dbd62ca6afc8e2d790d1a8928de8ebb4c123ba1b980c31be905c4957b020000",
    ],
    [
      "ETag",
      "6dfEau8sOsLZVTj3Z/EOXQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["STRING", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-88-1604009372790",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85536d4fa34010fe2b64ef8b267da1af94268dd7ab9c476ca952aa31974bbb2c03ae028bece2c598fef71bc0aa8d39fdc4b2f33ccf3c333bf34cee791a9031f179f45040fef4ed4ef8a44140d1086f236be82bfd969e5bf7d033ce23b93813f2723241042f599226590c4d298a9c811caf57ad2817454673219a28d41c8d9a9da1ded775b367740d53479e84389cf3f41ed9b74a6572dc6eef73b72221a21868c6658b89e4f5befdd86d67b9b803a664fb30651bb3c8f6e7494f62c1a8e2229dac5768a090906f20a13c2e0b7c6506fef743e916a7492b42f0236740191345aa4a5b28c1441af2a8c82b55327e2695cd7707b2b2e6d6ccd366cbb5e31d6d695292b7c71a95da6693832c62d5d0b65853c863d8f0605b47b27beda7bb5c60041ddc520972ab5dffb25c4b7bbbda6a13ed449b3aa7877cdbd18e4e8eb53377b9bed07edc1c04d1710052f1b4f2eb513f86d2eb4b4bed8f0f5912a8c264757063e843da19e9a61ffa060b47bd811feae0fb23df18d09eaf33b30ffdc0078a3c55aa572c9a8a74e08f86fd4160743bba6fb25e600e3bbdc16000a5d6d0d4cd2eeb1bbdae6e905d83fccdb982532e332179dd5772edda9eb5f1dcb5339b7a56554648b177a7b5b9b288f73e151689a04feada95512e3053f948b6e359ee74e6d957563d177388287b5a3de06484349680689ad30414e40b1160d3c8c572657bf6d299ce91513df6c51e21c9f8f7f31bc17bcaaa2eabea4b569e6b3b6795813de28ac6450579ac0f649aa157b2db35fe2fe3ac17966bcf3ed7e9a0c61f44e032d47472b9b6dc1b525fb910420e29fb7a06105c05bedce9fd822116570cd34885ff38714c9649580ef5e4f1a4b257b3fb43ddd03ba402e7ea436c64f4f72d2e354a454820552f15d50b5636ab0a15f21584411c18a7eaf6ee1f7d2542fce0040000",
    ],
    [
      "ETag",
      "gE6bt0haKEke37KgsMGosQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-88-1604009372790"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d904b6fc2301084ffcbf6d8440ab42a0f894341884642b40438550819b3a479ae6b3ba922c47fefda70e8b1173fc6dfd833be4091d52718c3314bbf1bd4dd438a76ed16099aa6b4862745b5410800ad4899949bf732ce28a7bced3fead962ab5591af2713268cfcc24ac0f802e70ccb9381f1e7056a5121db0e07ed6f64cc76ca29f16a3b5fcc13162a3a3961b55b2e5fa7cb395c833f3655fccbb2bf0690d331c1336aac25ba144a538ed2c6aea011952a3134d46889063cec0f524d8d129a2864251c0ec3de4bf41c45a3a7417f308a182c490a9b51cdec6ec3d9c0921565423fdc0f7a0c68bfe4aa673fb62cf77d87d6031c6d7f374d3b8be643132730e81e8f6e4166e4c2590e6d75830148c13ff996d9dbfefa0bd5505f05a6010000",
    ],
    [
      "ETag",
      "cSOlIiojojv2+rCGTrpkjQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00",
      "00",
      "d0",
      "bb642d8e406d9bee8260545a7e831fdc30118282844f8210707af73a7d37784f4092840a1177f59d56e00b8c4483f3646e370be36dc806b14957bb88b1c89ddc123ffab2af59a6aa3e66db40f97c5fe1b62a646068780a5399ad94b5b4033aed2f474e212af2c7c6f6a393796d63b53b4ea34f4a4bd34373a8741bf5777251db9f7ae36607fd162f899f5ddc249569f051a8e8db85b1b98f346462a7c69cf152b3462f5df6a1454f08a68ea3208fe35278b2d21d56eecfd7066a323cb72d3bfa6b8f1c72efb4bb59e642af15951487ada008cc00954dcea988f357565f423803fff3b81b1bfaea1b9470cac1ef1f686f785c18010000",
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
      "Thu, 29 Oct 2020 22:11:01 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-89-1604009372790",
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
      "02ff85535d6fda3014fd2b91f75a2040800409ad88a61b12843609ada6698a6c7393ba0d711a3b9d50c57fdf8d53ba5695daa7d8bee7dc73ee479ec9832876644a98c81e6ba80edfee2523670434cdf0f5f1100f587aedb2b00c6eaeb7f9d8edbb57f3d90c11a26129ba2f73e82859571cd4741b75b34ad625ada4ec60a28eeb75fa63dbb16d6f38194c3c1b790af274258a0764df695daa69af77d2ee66526639d052a82e97fbd7f7ded3a05756f21eb856bdf7923d5451bdcf45bfe792532d6431db4668a0565025b0a722470bff993b76fe3e7557d07d3743f093e040399775a11b5b9882cb2215595d99ac64fa4c8ccd370712f92b7f115b5ce6f5be480aba87336b47354df4a104eb32dcacad6570b909d7f378b9099268f1d35fcfbb8bcd6abb0e22ebf6a71ffa96a62c07c3b566d6b9b9057841fd1d282d0aa31e37cf8df24b83961fc7d210505a411b4c26f698f65ddb63299bf0d41d8e586a03632e9b8ce890d9dc73c0d931a0c833a286450bacd971fb7ce73ac9c0f54689c3384fa83b7493010c9dd4f3fa74cc46e47846fe5642c38550a554a2ed10b90d97b19fc4e13658cc63df9490d23ad717adb1a680b71e351688a04f6a3a36512151a969f73288fd70be8897377e3be11564941fa2479c714a730588a615364f43b5963b6c1809e66bff02c1666257a7a022d3dfcfa4e979e3e24dcb5fe9310eb0b1abcd974471b80c7e183b27c40dcd6b03796a0fa444cb77581bba3efe41242e699b855c6ffdf017699f4248a182827f3d4d049bc097ffda69f1118bab8f324ae31d7787ab468457d0ee9030e5beb09d717fe40d880157fa436c329e9cbad6e46832c21e0afd5251bbf858682b56ab57100671fc81e9d6f11fe656671678040000",
    ],
    [
      "ETag",
      "qyT2bfQ8bRpNVQUl6818PA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-89-1604009372790"
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
      "d1",
      "4e",
      "c2401045ff657c2d49510469e2435514928a08c5448d214b3badc56da7ee6e2548f877672ba251137d6967a667b6f7de760d4f59118307f32c7dae50adf65234d7b618a3aea4d17c2ba9d0080ea01129933777c5ad7f36a545d25cf64741f52afbcf497a7ccc848e1e3117e0ad21c950c61abcfb351422475e8b48567931ab3b07ccaab4c349381e0c2fb8cf29b6fd701a04fe49d0838db35b8c8511b39affc7dac3c68105cdc798a0c22242aba554b4c0c80cac4d2df252624353a522d450c3f5835451550a45d4e049e3a8db68b6dd96eb760f3afb9daecba0a448988c0a66a713d607868c90635ab24b6833a0ea920d27f5f585c7595c1bb1e56018b65bb5beaf004b4b3289b3bf41d6fb28f8337c60db08be7322a7aa303bea3cb8f27f3b8e33fd3ceacc0f7b3f086d38a91d120e2e7b93d0bf1c59ee61ebfd6465508f1471901a6d864db77574d869bbefb19e928d9adfe31955a10391e0bfa39f19f01221356ede0085fa88d47b020000",
    ],
    [
      "ETag",
      "VZnYADUojf1wHPLuzlHqfg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["STRING", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-90-1604009372790",
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
      "00000002ff8553ef4fa34010fd57c8de17cdd9427f5968d278bdca792495f628d533974bbb2c435d0596b24b8d31fddf6f00ab36e6f413cbce7b6fdeccce3c917b9e86644002bede14903f7eb913013921a0e81a6fe7bfa7b3cdfc7af3d59b99b792db794fd7b70fc3212278c99234c962684851e40ce460316fae7351643417a281420dcb68b44e8dae61589d7ebb6f19c8931047139ede23fb56a94c0e747d9fbbb916621d03cdb86c3291bcdcebdbb69ee5e20e9892fa614a1db348fde3a467b1605471910e1773345048c89790501ea3855766187c3b946e729a34d708de7206943151a4aab485124ca4115f1779a54a064fa4b2f9e640e6f6c41efbda78ba70fda3154d4af2ea58a3525b2e739045ac4eb415d614f118963c5cd591ec5efbe14d2f31820e6ea904b9d2ae7fda9eadbd5eadb4a176a68ddcf343bee36a4767c7da85375dccb4ef370741741c82543cadfcfa3488a1f4fadc52e7fd439604aa30591d5cf68d53da320d2b88823e8bcc4e2f880c080233e8f768273098d5856e1800459e2ad52b164d456a04ed102c03580bba06ebf45b2d1a5a26b37abda813041d169a2db3d30593ec4ec843ce159c739909c9ebbe926bcff1eda5ef2ddcf1c8b7ab32228abd3bafcd9545bcf5a9b048047d50d7ae8c728199ca47725cdff64663dfb9b2ebb998c09ab2c7f9062723a2b10444d39c26a020bf1421368dcca673c777a6ee68828ceab1677b8424833f4faf04ff31abbaacaa2f99fb9ee35e5406f6882b1a1715645b1f08cdd02bd9ed4efe2fe32e2e6dcf197facd3428dbf88c065a8e9e4d7c2f66e487de5410439a4ecf319407015f874a7f70b86585c314c2315fee3c43159266139d493c793ca5ecdee9eb67b7d9354e05cbd8bf5cdf6bec5a546a90809a4eab9a27ac1ca6655a142be80308803e356dddefd030c3e9f06e0040000",
    ],
    [
      "ETag",
      "SXOPqSWq+RP8hsiEr5//vw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-90-1604009372790"
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
      "6f",
      "83",
      "30",
      "0c",
      "c5bf8b77058dfdad40ea61add05aa9aa5606a769aa02180a05cc12a30d557cf7396c871d774afcfcf3cb732e70aeba1c0248abf263403d5e95c8077b89d00c0d1b397aea0c8203c8aa1492b95b8fa73a4ebf4cf170f0fc8dbe4ee272b914c264276c150417282a6c7203c1db053ad5a28c1d8f7a76148cc7de2adb7d1c3e8791082de556d827bbddd36a17c2e4fc19ebcfff1a799f1ca8298db0408d5d863645afa9c68cb77641a3dabe41d7d0a0333430c373a3d434f44a13b9a2b8bee7de3c7af79ee7df2d6e17be27604399e28a3a619357c9064cac9a883e653fb0c05caf4646f3a249cc0de6bf1d715c937d97250feb011dc8947cd2a6e29f7afa06df51737c81010000",
    ],
    [
      "ETag",
      "ttnCyhjTbxsf5Q09Hr/UTg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "02ff1dcf417282300000c0bfe42c8e4811d39b2828a42a5814e82593c4308958844025e8f4ef75ba3fd827208cf1b6c5ddade41578070399c2311ba37ae2bef50585a5bf8394a5a60e2ef1a4142251c745e255f838d0fd521261d967b8f132bb39e945ec7a5566b6e77eeb4fe557a9a9d28d4e23b547f5f0f361cc9d5e34937d60a5d8b05677a890e0c12722b36213e11311e1ceb92db8d3d5a1c22471674b6e5e5c582466e38a6f9653945ec395d3e08aef98290d8470dba9874c99e1dfe7877c6bfa06bdaee3a9bd8e6e329fc1dee8a3439cd1043aa1ad8f0f118311e0ba968ab758beb2960de108fccf7137d4fcd57739515c81df3f3818cd7b18010000",
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
      "Thu, 29 Oct 2020 22:11:03 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-91-1604009372790",
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
      "fbda24e4498814ad594ad74c095981a4daa609d970a16e01536cba5555fefb2ea6e95a556a3f61fb9e73cfb90f1ec92d2f6232238ca77735540f9f6e04232704144df175237e0ecabfd6b77d16df7cb1ada1df677971399f2382372c49f332838e147515819cedfc6e5a89baa495101d4cd4b1fb9dfec41c99a63db406966d224f4296ac79718bec6ba54a39ebf58edadd548834035a72d98d44fefcdebb1ff4ca4adc40a464efb5640f5564ef7dd1cf9988a8e2a298ef7c34504ba842c829cfd0c27f66cc4e5fa7ee729a775304dff308681489ba508d2d4c118922e1695de9ac64f648b4cd1707e23b6b67191891c8eabc080b9ac38911534543f5508271ee6d37c6ca3ddf7a9b45b0dabaa1bfbc70368bee72bbde6d5cdfb8ba703cc7509465a0b9c6dc38d537172fa81f8354bcd0ea41f3dc283f3568f5762c0d01a525b4c1d03227b43f356d96302b4aa6c3314b4c606ccaac311d3233b247308a1950e46951cda205d66cda16d2ac703a063b1cd93009a79499211b509858493265e3981c4ec89f8a2b38e3b21492b71d2257de2a70c2c0dbb9cb45e0e812125a67eaac35d614f0d2a3c20211f44e4d8726ca052a35ed5eb981e32d96c16aefb4135e434aa307ff0e679cd04c02a26985cd53506d448c0d23ee62e39c21584fecfb3128c9ecd723697adeb878d1f2677a80036cec2afd257ee0addcafdace11b1a759ad21f7ed819468f91a6b43d787df88c4256db390cb9de3fd20ed9307095450441f4f13c13af0e1bf765c7cc4e2eaa38c5478c7dd8964231255d0ee10d7e53eb14793e1",
      "6834241a5ca937b1f16472ec5a93a3c9083914eaa9a276f1b1d056ac96cf200ce2f85dddadc33f82f9d0fa78040000",
    ],
    [
      "ETag",
      "MoZ2px7JVldjB973S1bmnQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-91-1604009372790"
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
      "ff8d92dd4ec2401085df65bc2d49110469c2455154903fa124268690a59d9662dba9bb5b0921bcbbb315d1a889deb433d36fb6e79c760fcf71168003ab387a2950eece22d40fa698a22a12adf89653a6102c402d222667b5565f9c8f77c57df4d8d72ecdeb24d5b6dd6642f96b4c05387b08634c0205ced31e329122aff9941469b62c3b0bf42e37c39937ed8d6eb94f2930fd683e18b89d41170ed66931105a2c4bfe1f6b8b83051b5a4d314489998f464b2e6983beee199b4aa47982154585f4514109970f2249452e245185279556b5526dd875db6ed59ae7cd96cd6042bed03165ccce67ac0f3469914c69cb2ea1c1802c4b361c96d7571ec74169c494bd91d7a897fabe022c2d8c135cfe0db2deb5e0cff0811d23f8ce89948a4c9fa89bc1d8fded38cef4f3a86bd7ebfe2094e6a44e88d71b76679e3b9c186e71f4ded9695413491ca4429361d5ae5f5e341bf67bac5764a2e6f7385a1668812ff8efb88b3538a148141ede0070e740347b020000",
    ],
    [
      "ETag",
      "S39Ja2OyuKgXJtAoU4orsw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `date` = ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["DATE", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-92-1604009372790",
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
      "53ff6f9a4014ff57c8ed97365141501113d339651d8b4587d8ae5b163d8e835e0b1ce58e764de3ffbe07d4b6a659fb93789f2feff3debd7b44372c0bd108052cbe2d69f1f0e99a07a885a8c4319c9289fbf7dcf40db52c7263e97eeffdbcfca5de8fc7c060954ae0344f685bf0b220548cd6ab4e5cf032c705e76d306a5b7abb3bd07a9a6619a66e5a1ae8044da239cb6e407d25652e46aabaafdd89398f138a73263a84a7cfe7ea9daee605bfa6440af5b0a40a5584fa7ed19384132c19cfc6eb150428052d3634c52c81082fca30f87c68dd6138edc440be638462427899c92a1658109e452c2e8bda158d1e511df3d5075ad9737bea2bd3c5daf58fb638adc4db63050b65b329a82813d952b6d053c412ba61e1b641f21be5abb7380304125c6141c556b9f8667bb6a26c432ce956192b27cac49d1d6a1d57393a39564ebdc57aa97cb93c00216d488564599dd5c74142ab9c4fe374de5e6225c0126a37e0c6d406b83bd4ac200a4c120d8d7e106934088681d9c746a011ab477b614031e864e55eab70c6b3200cfa548f2223d4b0d5d3357330b4bafac08cc221a8bbd8a2038b844180762d745f3049674ce45cb066a6e8c2737c7be37b6b773af1edba8d08c3dc664db8aa89d739253409a477fada5528e350a9ba20c7f56d6f32f59d73bbd989398d317958ddc25644381114d8b8c02995b438e3210c0d2d172bc77716ee640e8afaa2977b8640a3df8f2f02ff21afa72ceb5f34ab1ad8bd323cc7495913ee9a0fa46bbad6d6606ffb68b76bfddfc95d9fd99e337ddfac0b1e7f80016fa191a31f6bdbbb44cd9147235ad08c7cbc0640ae810f9ff4fe7d01175e18941112fec3d211511521056d968fa575bc46dd1bf40c63806a7221df60bdbeb99f72e55139d29466f2a9a3e67d55c3aaa1523c9300849d711df714d07f89066258df040000",
    ],
    [
      "ETag",
      "cANxV7T3/urp3PNJ4XYZ/w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-92-1604009372790"
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
      "514fc2301485ffcbf5754b061a10121ec02c3a45d0296a621652bacb1c6cbbb3ed2073d97ff776f0e0a32febedd977da73dac03e2d6218c3264dbe2b54f54582e6d90e21ea2a339a97920a8de0001a9130f9114cfbcbe5ea51d2e0f013bc5dbfcf1eeec3e364c284965f980b1837b04d318b358c3f1b28448e6c5baf55772263a62ead122c5efd5b3f6421a7d80a8bd57c3e9dcd7d689d3fb672ff2f4bd43ab0a34d885b545848b4294a453b9426b005b5c8cb0c5d4d9592a8a183bb1f89a2aa148ac865c51df5dddec0bbf2bcd1e5b03f1c790c66248549a96076f5c2d9c09011594847ee073d06543772d56df73d74b2ed709ea2363a9b66b541fda4881368b4977ba7203764c3190e6d54850e48c12f79979ad3befd05ab9719dda6010000",
    ],
    [
      "ETag",
      "XIA2OOUMco6vzIV8WBKJRw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00",
      "00",
      "d0",
      "bb",
      "64",
      "6d1d4a41a13b2902160c1f9dfad93091048c0804124b42a777afd37783f703505110ce73d1d5a405ef4021dd9e17f390698e31e276df75323ddc5734a5a581608a7045b6de2522b7fdb53841638a2adfd7f9fe61279fa630f93a6d149c448555e6f1e5f23cd2727ced84ee7e18309417216a79a40adf065a5b7435c29c6d76faf7f698bd3c9273d236f106e22143a397407aea2f9efb557aa18a522d78188dc5476cfbc7d28d82245cfb8b5ddc5ccfb5bac18a2c0e596fae25779873b84f13324e8d6cb926adde8d572cea315b8641056680484607c273faccbe99b63d03fff35c28469e7d87a0810ce0f70fa2699b9518010000",
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
      "Thu, 29 Oct 2020 22:11:04 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-93-1604009372790",
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
      "536b4fdb3014fd2b91f795b669d3572a55a3940095da744b53d0344d91eddca486340eb1538610ff7d370e652024f814dbf79c7bce7de489dc893c2613c2447a5f41f9f8ed5632724240d3145fdddd01fe8ab3cbe1999b5ce903dcad76c5cdc3748a0851b314dd1719b494ac4a0e6ab2ddb4d35256052da56c61a296ebb4ba43bb6fdbae33ea8d5c1b790ab26429f23b64efb42ed4a4d3396ab75329d30c6821549bcbfdeb7be7d0eb14a5bc05ae55e7bd64075554e773d1ef99e4540b994fb71b3450292823d85391a185ffcc989dbe4fdd1674df4e117c101c28e7b2ca756d0b5370992722ad4a93954c9e88b1f9e64036ded29b87169759b5cfa39ceee1c48aa9a6917e2cc0ba08d62b6be15fac83d52c5cacfd6833bff256b3f67cbddcaefc8d7573e5059ea529cbc070ada9756a6e3e5e503f06a5456ed4c3fab9567e69d0e2e3586a024a2b6882d1c81ed2eed87659c2463c193b0396d8c0d8988d06d4613677fbd08f1950e41951c3a2b9cc634a93011b8f2327e939519fc634623d3688783749dc5197f6fbae4b9e4fc84329349c0b5548259a0e919b60117a51186cfdf92cf44c0909ad327dde18ab0b78eb51638108faa4a6e73a2a242ad5ed5ef8a117cce6e1e2da6b26bc8494f2c7cd3dce38a1990244d3129ba7a15cc9181b46fcd9ca3b47b099d88f635091c9ef2752f7bc76f1a6e5aff4100758dbd5e64b3661b0f02f8d9d23e29a6695811c9a0329d0f20e6b43d7cf7f10894bda64213fb75ef08b344f01245042cebf9e26824de0cb7fedb8f888c5d54719a5f18ebbc3552dc24b68764898725fd8fde1a0ebf4880197fa43cce939c7aed539ea8cb0875cbf54d42c3e16da8855ea1584411cbf6fbaf5fc0f6aa35e2378040000",
    ],
    [
      "ETag",
      "9hvexiBG6B9fHtvekMhpWw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-93-1604009372790"
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
      "00000002ff8d92614f82501486ffcbe963b8300d93cd0f58946e6a0ab8b535e7ae70400cb874efa566ceffdeb964d6aaadbec03987e75cdef7851d3ca6450436acd2e4a942b13d4950cd74e1a1ac3225e956f2422218808a25447af338199cceddc4399d0567d37b3f7aa5a6d72342866bcc19d83b8853cc2209f6c30e0a9623ad853cabf262597706a86da9877ee00d27b7d4e73cd2fd643e1a39fd910b7be3b81831c59635ff8fb5c5de800d5f7918a3c02244ada5147c83a11a6a9b92e565860dc92b11a2841aae1f24825725139c3768d2e8b61a4dcb6c9b66b7d539ef744d02331e3295f282d8b94ffa4071c5328fbf904bb00810754986e3fafa4ce334aa8de8723809ac76adef2b40d2e234c3e5df20e95d33fa0c1fd82182ef1ccb7955a8237533ba737e3b8e32fd3ceada09dc1f845494d411098663d70f9cf154738b83f7fe56a19c0a4e414ad41936cdf6e545c732df63bde23a6a7a8fad448506848cfe8e41aac08e592671ff06033de8397b020000",
    ],
    [
      "ETag",
      "RUfgH+UEgA+QT/PXSdzUEg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `stamp` = ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-94-1604009372790",
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
      "3010fd5790f7a5d5f2c324242491a22e4d598794908c40ab6e9a12e318ea1630c5a65d55e57fdf014ddb6c5afb09cbf7debb77e73b9ed02d4fb76884021edd152c7ffc742302d4404c91086e5d863ba79264bf3d3f898a87cfeaee52150fe3312078c99224c962d694a2c82993237fd58a7251642417a20942cda1d1d4fbd8c078d8353be610034fb2389cf1f416d8d74a6572d46eef73b72221a298918ccb1615c9cb7dfbbed3ce7271c3a892edc3946dc822dbef273d8905258a8b74ecafc0402159be6609e1315878656e832f87d22d4e925604e07b4e19a15414a92a6d81041569c8a322af54d1e8095536df1cd0ca9a59534f9b2e7cc73bda90a4246f8e3522b5f53a67b2885543db404d218fd99a6f377524bbd5beba8b3944c0c135914c6eb4cb6f966b69da462a70b7d1c6da893671ce0ec9b6a31d9d1c6be7eec25f6aa7570741b0bb6552f1b432eb912066a5d1e77edaffbe6249200a92d7c1b589fb441fe0611006260d07dd5e1062160483c0ec916e80e9d060c636600478aa54af582415e990e94148bb06c566300066484d620ecd6ed8357adb3e666148cc6daf67a05d033de45cb1332e332179dd5474e9da9eb5f65cdf994e3cab2a2324d0b8b3da5c59c45b9f0a8a04d03b75edca281790a97c21dbf12c7732f5ec0bab1e8a198b087d5cddc1588424960cd0242709532c9f8b2d340d2d172bdbb317ce64068ceaa5977b8444a39f4faf04ef31abbaacaa2ff2ecb9b5f226f365e5610fba207151a1eeeb03eae00e6ee24e53ef797a67a47747bad1c218ff40bb5de3ffe28e3fb75c7bfabeb40e1abf0001fb51d3d177df72af507de5b290e52ca51f4f0680abc0876bbedf39c0c2d6411a985fc5610ea92c93d09cd5f3c893ca5ecd36",
      "fafdc1c0441538577fc74cdce9ef1b5f6a948a2c61a97aaea8deb9b25955a8902fa0f24fe63b8eed9c43f40f2331bf93f3040000",
    ],
    [
      "ETag",
      "Re02BsapxTUmguw+tqWtuw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-94-1604009372790"
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
      "0002ff8d90416f82401085ffcbf40a11abd14ae2a136a4921a5369f1d218b3ae034581a1bb8b8610fe7b67d1438fbdb0b38fefedbeb72d9cb3f2083e1cb2f4a746d53ca46836768850d7b9d1bc54546a0407d08894c9c9d3e4ba0d933819687a8be532186497d1663e6742cb6f2c04f82d2419e6470dfe570ba528906dfbbdea4f64cc349555c2f567f01a442c1474b4c23a5ead9e17ab003ae78fad3affcbb2eb1c38d121c2041596126d8a4ad109a5096d412d8a2a475753ad246ae8e1fe47aaa8ae842272597167637738f1c69e371b4d1fa7338fc19ca4301995ccc61f9c0d0c19914774e57e306440f523574dfaefa5976d87fbb4eb7677d3a231a8df1571028df672ef16e4856c38c3a18daad10129f8259799b9edbb5f2781793da6010000",
    ],
    [
      "ETag",
      "686wVIfUf/soKUcHE/iv3Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "02ff1dcf4b7282300000d0bb642d0ee12774074a40517eb6226c18844c8a148b091262a777afd37783f703aabac68c95e377876fe00d884ab196f532186447e34d74c34db10920a510c135161cee14c2cbbb7d79d0533a35d1d57e7762d6b58f8f0b0983e9704cc6a6ccb9dba89fc9ac44c9bab0b7b7a8cfb33961fdd930f369d4213aa4b3a4ecbbf1140c6ef19cc984f330fd0a7bdf9eb80846cd256d206556acc899902dbd6f99f7d0dd423eeef5305c6d623fbff799a76d1426f9ab1ae5aeb91d88e0daddb0d0ce54a19188336a188ae160741539a3eb214592c7c102e07968296665fbcaaaba652dc0ffbc1cc5805f7d07571453f0fb0704589c3518010000",
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
      "Thu, 29 Oct 2020 22:11:07 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-95-1604009372790",
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
      "02ff85536b6f9b3014fd2bc8fbda04f20422456b94d2152d211b21adaa6942c6b910b704536c3a6555fefb2ea6e95a556a3f61fb9e73cfb90f9ec83d2fb66442129e3dd4501dbedc89849c115034c3d7e07e242ab6dbecfe1efca20aad5b73f0bd9e4da788e00d4bd27d9943478aba6220279b7537ab445dd24a880e26eab8a34e6f6c0d2dcb1dd87ddbb59027214f17bcb847f64ea9524e4cf3a4ddcd84c872a025975d26f62fefe663df2c2b71074c49f3ada4892ad2fc58f46b2e18555c14d3cd1a0dd412aa18f694e768e13f739b9cbf4ddde574dfcd10fcc81950c6445da8c616a660a2487956573a2b993c116df3d581acbd85378f0c26f27a5fc405ddc399b1a58ac6ea50827119ae96861f5caec2e52cf25741bc9e5f79cb5977be5a6c96c1dab8b9f242cf5034c941738da971ae6f015e507f0b52f142ab47cd73a3fcdc20fffd581a024a4b6883b16d8d69cfb1dc244d6c963a8351925a90244e628fe820b1983b84e136018a3c2daa59b410853d1c0ddd1e73e271324ee2a1357263c71d6c63700703a04e9f5a7d468e67e44fc5155c70590ac9db0e919bd08fbc380a37c17c1679ba8494d6b9ba688d3505bcf6a8b040047d50d3b18972814a4dbbfd20f2c2d93cf2afbd76c20bc8283bac1f70c629cd25209a56d83c05d5526ca159edd9d2bb40b09ed88f535092c9af27d2f4bc71f1aae52ff40807d8d855fa4bd651e807dfb49d13e29ae6b5863cb60752a2e51dd686ae8fbf11894bda66213f375e784bdaa71052a8a0609f4f13c13af0e9bf765a7cc4e2eaa38c5478c7dd61b2116115b43bc475b9cfece1d8b6473da2c1957a1773c7cea96b4d8e2623eca150cf15b58b8f85b662b57c016110c71fe86e1dff015d517d3278040000",
    ],
    [
      "ETag",
      "Nk5orchUhzyInrR0Y/3KuA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-95-1604009372790"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d92414fc2401085ffcb78b4245511a489872a882415118a070d21cb765a8b6da7ee6e3184f0df9dad88464df4d2ce4cbfd9bef7da0d3ca745041e2cd2e4a542b53e48d0dcd9628cbaca8ce65b49854670008d489894ab7ba983abae2cfafee143be948794d0ebf939135a3e612ec0db409c621669f01e3750881ced1a65555eccebce01b32eed70128e07c33ef73945b61f4e83c0bf087ab075f68b9130625ef3ff589b6d1d58d2628c312a2c245a2da5a2254a33b036b5c8cb0c1b9a2a2551430dd70f12455529145183278dce69e3a8e5365db773d23e6e775c063392c2a454303b9db03e30644436a65776092d06545db2e1b8beae789c46b5115b0e8661ab59ebfb0ab0b438cd70fe37c87a9f047f860f6c17c1774ee45415664f5d05b7fe6fc771a69f4775fdb0f783d08693da23e1e0a63709fd9b91e5663bef176b837aa48883d468333c729b67a7ed96fb1eeb25d9a8f93d9e51153a2005ff1dd7a9012f1699c6ed1b3fd7e4047b020000",
    ],
    [
      "ETag",
      "cvVcsLFDcnGA+Zmjc+ogow==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `amount` = ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["FLOAT64", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-96-1604009372790",
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
      "fe2b91f705a4d2ba6dfa924a15eb4a60914acad21484a6a9759c4bf048e2103b4508f1df7749282f9b069f9afa79b9e7cee747722bb2904c4820e2bb128a872fbf65405a04348bf1948393f4b2b35d6ce57c244eef17663c4b67d3293244a5522ccd133852b22c38a8c97ad58e0b59e6ac90f2088d8eace15177484d4aadfea837b228ea1424d14264b7a8bed13a57934e675fbb1d4b1927c072a1da5ca62fe79d5daf9317f23770ad3aef4b76b08aea7c5cf438919c6921b3e97a85014a05c5065226128cf0aa0c83afefaddb82a5ed18c93bc181712ecb4c57b1d082cb2c127159d4ae64f248ea986f3ec8ca5ed873df982fd7ae7fb0656925de1e1a4c199b4d01aa4c74cbd8624f91486023c26d83e4b7c6a9b73c470413dc30056a6b5c7db73ddb30f61ec6d4383666eec97bb5e31a07c787c699b75c5f18dfaedf81983704a54556a7f559904095f479a0cebfd7580998c6ea0db819d121eb8ea91544c18847e3fe20882804c138180d583fa0dc32c10c0360a8d3957bad6299cccc711452065d4ee9c8a483fe10aca1d5a38c462cec8e787f3888fa3d331c93a716b92f848613a172a944335572e539bebdf1bdb53b9ff976dd46c47072274db8aa89b739353689a40ffa7aaa5021b15275458eebdbde6cee3b9776b3150b88197f58dde15e442c51806c56b0143414e732c4a1918be5caf19da53b5ba0a2beea8b3d4391c9cfc75781ff90d753d6f52f395d2c67fed0ac13ec29972c296bceaef920ddf600194fadffdbb8eb73db73e69fd8a0c72f64e05368e4e4c7daf6ae4973e441040564fcf31d40720d7cfaa2f7cf0bb9f8c0b08cd2f81f378eabaa082fa0d93c91d6f11ab5",
      "391c8fa9496a72a1ffc62c4ae97ec49547e5082964fab9a3e67955c3aaa152bd9010c485711df70cd13f232d49b1de040000",
    ],
    [
      "ETag",
      "ceIl2nGvg9pc7iFwL4gAmA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-96-1604009372790"
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
      "4b",
      "6f",
      "c2",
      "30",
      "10",
      "84",
      "ff",
      "cb",
      "f69aa88156a02071800ab548298fb45c5a21e4844d0879acb19d5414f1dfbb363df4d88b1fe36fec195fa02c9a3d8c2029f2538bea7c97a359db458cbaad8ce64952a3113c402372265fbf8bfb705d26d3d34a1e3e9687e3325c7693f198099d1eb01630ba405660b5d730fabc40236a64db6ea7dc8d8c99b3b4ca7cf13e7b9ec52cd4b4b7c262134593693483abf7c726cb7f59b6570f8e94c498a1c226459b422a3a626ae6b6a016b5acd0d7d4aa143538d81de48a5a291491cf8a1f0efcde20780c82f061d81f86018315a5c214d430bb79e36c60c8882aa62fee073d06945b72d5cc8d1dcb7dd7a1730047dbfe9aa667837aa5881368b48f07b7204f64c3190e6d548b1ea4827ff2a530b7fdf507b47ee208a6010000",
    ],
    [
      "ETag",
      "Mzi/9QkbBqPphZOhjO9OvA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "82300000d07fe9b3180308ba37f0c6bc556e0abc345d290a02b2962274d9bf8fec074e727e002684728edad793d6e0030c585d4ec9f4d0cc6cfd9df5db50bcbab8e4b9dccb43e488f2bbd60b09033d5ca12eb39428f334abaefd82f58d70d47be92656f5351324a9bca2332ab7fab41eb91d470ebc14894d7cf56612f72460ba504e6b8d934a1d528c67b253f36bb0585f8ef212d467477153a3f4ccc7f9a6272416e48a8ce7a6eda0bc2ada3be903e7d86228cdf6cce74554aeac0aefe06b0befc8657ca35134e2beb63f8682e54d1697f1ee404376071340fb266794a37ccc6af3e57202fee7a81d1a3af66d8a1965e0f70f8c5b237118010000",
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
      "Thu, 29 Oct 2020 22:11:09 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-97-1604009372790",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85535d4fdb3014fd2b91f738daa6a56b924ad5a84a0ad5da742429689aa6c8766f82218d43ec3010ea7fdf8d43196c123cc5f63de79e733ff2446e45b12563c244765743f5f8e94632724440d30c5f9d6f991d3d683ebf0952fbe1acba98c3677631992042342c4577650e1d25eb8a831a6fa26e56c9baa495941d4cd4f19c4e7f640f6ddb3b76068e67234f419e2e45718bec6bad4b35eef50edadd4cca2c075a0ad5e572f7f2debb1ff4ca4ade00d7aaf756b2872aaaf7bee8d75c72aa852c269b080dd40aaa047654e468e12f73cb4edea6ee0abaeb6608be171c28e7b22e74630b537059a422ab2b93958c9f88b1f9ea40227fe9cf628bcbbcde1549417770646da9a6897e2cc19a87eb95b508e6eb70358d17eb208966e7fe6ada9dad979b55105957e77ee85b9ab21c0cd79a5827e616e005f5b7a0b4288c7adc3c37cacf0d5afc3f968680d20ada60e2d823da776d8fa5cce1a97bfc85a53630e632e70b3d6636f78630dc32a0c833a286450b598c8600a3c190279c7a6e321c8c0689ebf569021ef33cd6779d0165647f447e5742c3a950a554a2ed10b90a17b19fc4e126984d63df9490d23ad7a7adb1a680d71e351688a0776ada37512151a969f72288fd703a8b17977e3be12564943f467738e394e60a104d2b6c9e866a25b7d830124c57fe2982cdc4be1f828a8c7f3e91a6e78d8b572d7fa1c738c0c6ae365f12c5e1223833760e884b9ad70672df1e488996afb13674bdff85485cd2360bb9d8f8e10fd23e8590420505ff789a0836810fffb5c3e22316571f6594c63bee0e578d08afa0dd2161ca7d660f479eeb8d880157fa9f9863db7df7d0b5264793117650e8e78adac5c7425bb15abd803088e30f4cb7f67f00f5ca47fc78040000",
    ],
    [
      "ETag",
      "7Kg0SxtcFjNf0xGrQFe+bQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-97-1604009372790"
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
      "0002ff8d92dd4ec2401085df65bc6d63110469e205685512407e4abc30842ced148bdb4edddd6208e1dd9dad88464df4a69d997eb33de7b43b784ef3187c58a6ab9712d5f66485666c8b09ea521acdb782728de0001ab162f2b45e7f8983a4b8f21e3637676d4dcb755d8e2f2f99d0d1136602fc1d2429ca5883ffb8835c64c86b11c932cb1755e780d91676380d27bde12df719c5b61fcefafd4eb71fc0de392ec6c28845c5ff636dbe77604dcb0926a8308fd06a2914ad31323d6b538bac90e86a2a55841a2ab87ab05254164211b93c71db2db7d6f41a9ed7aeb7ce5a6d8f4149913029e5cccea6ac0f0c192127f4ca2ea1c980aa4a369c54d70d8fd3b83262cbde306c362a7d5f019696a412177f83acf749f067f8c00e117ce74446656e8ed44dffbef3db719ce9e751d79d30f84168c3491d91b03708a6616730b2dcfce0bdbb35a8478a38488d36c39ad7b8386f35bdf758afc846cdeff18d2ad18148f0df71971af0132135eedf00534dd27f7b020000",
    ],
    [
      "ETag",
      "/33qdEfpC0WvF29sobj3lQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `id` > ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["INT64", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-98-1604009372790",
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
      "6f",
      "a2",
      "40",
      "10",
      "fe",
      "2b",
      "64",
      "ef",
      "4b9bf882a222264dcf53ee8ec4a28768d37b892ecb60b7026bd9a5d7a6f1bfdf00b5ad69aefd24ee3c6f333bfb48b63c0dc980047c739b43f6f0e94604a44640d10d9e8e87d2b1dcfb991cdda75bb95c76fbdbc5cfe1d9192278c19234d9c5509722cf18c8c162ded86422dfd14c883a0ad5ad7ebdd5d33bba6e1966dbb474e44988a3094fb7c8be566a2707cde6c1bbb111621303dd71d96022793e6fdeb59bbb4cdc0053b2796cd94417d97cdff43c168c2a2ed2b3c51c03e412b2152494c718e18519069f8fa51b9c268d0d82ef3803ca98c85355c4420926d2886ff2ac5425834752c67cf541e6f6c41ef9da68ba70fd93354d0af2fa54a3525bad329079ac6ada1a7b8a780c2b1eaeabca6eab7df5a61758c104d754825c6b97df6dcfd6b47501fa9debba01dab93674c7c774c7d54ece4fb56fde7431d3be5c1d1531700852f1b48cebd3208622ead3449db7f75810a842fbaab832f51e6df5752b880293457da31b443a04413f30bbd408746675a013064091a70af592455391b6dbbdb00dd0b258c0986918513b08a1cd5a61cfd02933faedd0d0c37e2720fb1af99b7105632e7742f26aace4d2737c7be57b0b7734f4edb28d88e2e8c655b8a289d739153689a077fada17552ed0a9b823c7f56d6f38f29da55dadc50436943dcc6f7131221a4b4034cd68020ab20b11e2d0c86c3a777c67ea0e27c828ef7a76404832f8f5f842f01f76e59455f95b78f53aa5ff01b0a4715e22eeaa0fd2ea92fdbef67f097771617bcee80311d4f883087c07159dfc58",
      "d8de15a98e3c882083947d7cff082e0b1f3ee7c3db422cbe2eb4910affe3b6315998b00caaade34919af62774cddb4faa40467ea4dcd32adc3780b8d42111248d55347d5db2a86559672f90cc2222e8bebb8dfb0fa0f1266cf54db040000",
    ],
    [
      "ETag",
      "DAsI9NxPsCxnksVV58kUZA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-98-1604009372790"
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
      "ff8d905f4fc23014c5bfcbf5912d0e24e24878108342b22c3a20d118424ab99b836d77b61d6659f8eedc161f7cf4a57f4e7fa73da71d1cf36a0f63d8e5d97783aabdc9d0bcd94582ba298ce6a9a64a23788046644c96b7890cd7bd5e1a3772feb15aced3e1f37b369930a1e5179602c61da439167b0de3cf0e2a5122dbb65be56e64ccb4b55516f16af6324b5828696f85781d458fd3680667ef8fad3efecbb2397b70a05d82292aac24da14b5a2034ab3b005b528eb027d4d8d92a8c1c1ee2053d4d44211f9acf8e183dfbf0f864110de8d06a33060b020294c4e15b3eb25670343461409fd703fe833a0dc92aba66e3cb13c701d4e0ee0689b5fd3b435a85f1571028df6f1e01ae4896c38c3a18d6ad00329f827e7b9b9eecf17a1c40e2da6010000",
    ],
    [
      "ETag",
      "m/Rc9U++fNucHYTSHf4FXg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00",
      "00",
      "d0",
      "bb646d1d1a344a77801f022da0d566609349420a08468620029ddebd4edf0dde0f604248ad6977aba4026f6064d09a8b79d018cee22154c08d550a476aa230f64e199419a9f38f4fc5ee43bd3f04d91afb6e66bf463a93e64d1c0f854776b2e1e41450e4d9a8d283dae69bc9f33b141aea985b6c4aa36b78c1751d8b6acc50249623ee4ad3ee946a7625ee392c7a7d7bc4c9146ef767e96862e7da9229dc044934851c2d5edc940c7485f9f795041d6c706230035da2e90cb1db96e93aaac9cab706117397defb829598f0aff70adb6006e4d094add4b47c66cda565cdc0ff9c7663239f7d47b256b6e0f70fe3f842fd18010000",
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
      "Thu, 29 Oct 2020 22:11:11 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-99-1604009372790",
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
      "40",
      "14",
      "fd",
      "2b",
      "64",
      "f6d5165a5a294d9ab56951892d7581aa9bcd86cc0c038e52069941634cfffb5e06eb6a4cf48999b9e7dc73ee072fe89e97299a22c2f38786d5cf3fee04414788299cc3ab7b7bb334c3902cceae361737cbeba1e4fec5d36c0608deb224de5505eb49d1d494c9e936eae7b5682a5c0bd183443dd7ed0d8ead9165b9b633745c0b789215d98a97f7c0be55aa9253d33c68f77321f282e18acb3e15bbb777f3716856b5b8635449f3a3a4092ad2fc5af4672128565c94b36d04061ac9ea84ed302fc0c27f664a4e3ea6ee73bcebe7007ee494614a4553aad616a4a0a2cc78ded43a2b9abe206df3dd0145deca5bc4061545b32b9312efd89191628513f55c31e334dcac0d3f38dd84eb79ec6f82245a9c7beb797fb1596dd741645c9f7ba167284c0aa6b9c6cc38d1b7002ea09f32a978a9d5e3f6b9557e6d90ff792c2d01a425eb8289631de3c1c47249461c9a4dec31c92c46c88438636c138bba23364a09c3c0d3a29a854b514e6c67321c8eed848c33928c26244bb06bdb49ca2c3ab66c87a46e86f647e8a9e68a2db9ac84e45d87d075e8c75e1287db60318f3d5d42869b422d3b636d01ef3d2a2810405fd4b46fa35c8052db6e3f88bd70be88fd2baf9bf08ae5983e470f30e30c1792011ad7d03cc5eab548a1612898afbd2580f5c42e0f4189a67f5e50dbf3d6c5bb96bfd16318606b57e92f8ae2d00fceb49d03e20a178d863c76075481e55ba80d5cefff021296b4cb827e6dbdf037ea9e4296b19a95f4fb69025807befdd70e8b0f58587d90910aeeb03b54b622b466dd0e715dee2b",
      "7be40c8e1d176970ad3ec5dc817de85a9ba3cdc876ac54af15758b0f8576628d7c034110c61fe86eedff01c562193c78040000",
    ],
    [
      "ETag",
      "9hXD/RRbCGVOKXDW2siIKw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-99-1604009372790"
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
      "00000002ff8d925b6f82401085ffcbf41512acd60b890fd87a21516b011f9ac6981506c4028bbb4b1b63fcef9da5d6366d93f60566866f96730e1ce1392d22b0619326fb0ac5e12a41f5a00b0f65952949b7921712c100542c21524d1e36cdeab16b7547bb99b35ff8adb15724fd3e1132dc62cec03e429c621649b09f8e50b01c692de4599517ebba33401d4a3df403cf9d8fa9cf79a4fbf9723a7506d3219c8ccb62c4145bd7fc3fd6562703767ce3618c028b10b59652f01d86cad53625cbcb0c4dc92b11a2841aae1f24825725139c9b34317b3db3d1b65a96d56b76ae3b3d8bc08c874ca5bc2076e9933e505cb1cce3afe412da0488ba24c3717d7da1711ad54674e9ce8376abd6f7152069719ae1fa6f90f46e197d860fec1cc1778ee5bc2ad4851a4def9ddf8ea34c3f8fba7382e10f422a4aea8204ee6ce807ce6ca1b9d5d9fbe0a0502e04a72025ea0c1b56ab7bd3695befb1de721d35bdc756a2420342467fc7245560c72c93787a0363ee6d437b020000",
    ],
    [
      "ETag",
      "tHQb3uY808FjMAqPS4GRng==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` > ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["STRING", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-100-1604009372790",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8553ef4fe24010fd579abd2f9a20941fa594c4781cf4bc2658bc52f4f4ee02dbedb4ae966eed6e35c4f0bfdfb4159598d34f9499f7debc999d7922773c0dc990043cbe2f20df7cb9150169105034c6e8f5e32f3ad924f4cab4d2cb8bcdf5606117f4f1f81811bc6449bace123892a2c819c8e162de8c7351643417e208858edaba7ed4eeeb3d5db7ba66c7b474244a48a2294fef907ea3542687add6ae783316224e80665c369958bfc45b0f9d56968b5b604ab6f66bb6b08c6c7d52f524118c2a2ed2e3c51c1d1412f225ac294fd0c32b350cbeee6b37395d3763043f7006943151a4aaf485124ca4118f8bbc5225c32752f97cf341e6f6d41efbda78b670fd83155d97e4d5a146a5b65ce6208b4435b4153615f104963c5cd599ec4efbeecdce30830e6ea804b9d22e7fd89eadbd8656da9f42d7bba09d682377b22fe2b8dac1c9a176eacd16e7dab7abbd24da0e412a9e56a67d1a24501a7e1eacf3fe3d4b025558b14e2e4dbd4fdb03dd0aa2c064d1a06b04910e4130084c8376039d593de8850150e4a952bd62d154a4ba611a03165a56df30811ab46f99186141172cda8fc236d5596898618f6c1be431e70a265c6642f27ab8e4d2737c7be97b0b773cf2edaa8d88e20027b5b9b289b73e153689a00ffada96592eb052f9528eebdbde68ec3b1776bd1c538829dbccef713d229a484034cde91a14e46722c4a191f3d9dcf19d993b9a22a37af1f31d4292e1efa75782bfc9aa29abea97cc7dcf714f2b033bc4054d8a0af2507f9051865ec976dbf8bf8cbb38b33d67fcb14e1b35fe22024fa2a6939f0bdbbb2275c883087248d9e73b80e02af1f969efce0cc1786858472afc8f2bc7645985e550af1e5f57fe6a76cfecf4fb1d528173f52e3730ccdd8c4b8d5211d690aae796ea332ba755a50af902c2246e8c5b8d7bfb0f00a89640e8040000",
    ],
    [
      "ETag",
      "ZwXaDylaY79nWVyZ8UEuaw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-100-1604009372790"
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
      "dd",
      "4f",
      "c2",
      "30",
      "14",
      "c5ff97ebeb9674ca8790f0004a944810870b514348197773b0eeceb6c310c2ffee6df1c1475ffa71fa3bed393dc1bea8b6d0874d917f35a88f5739da17b788d134a5353cd554198400d0ca9cc9fbb7f9fb535b45ed64a996994a8687ceedf3703060c2a49fa824f44f9015586e0df43f4e5049856c5bafb5bf91317bac9d3299bd8e1fc6310b8ab64e9825d3e970341dc339f863abf7ffb2acce01ec681363861aab145d8a5ad30e533b71058d547589a1a146a768c0c3fe20d7d4d4521385ac84911061d4112d217a37ddeb6e4f3059522a6d4115c3c982c381252bcb98beb920440c68bfe4ae991f0f2cb77c89830738dbead7343a5a34734d1cc1a07b5d5c92dc914b6739b5d50d06904afecac7c25ef6e71f344396cfa7010000",
    ],
    [
      "ETag",
      "DYPZK5m15UWmWfmUAv68OA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "1dcf4d7282301800d0bb64ad4ea0414d77f2272802ad9a8e6c3218bf2836604aa88a9ddebd4edf0dde0f2a8500637877f98406bda2beb4e9488c961abbe42617a6b266258f82759b6d3db86e565327daed2733cb52b12ac19fedf6492f341906699de25bc6c8723dd55303d723e6ec616da02e2e4d83896b14f11eba9dbb4e4c337dfe58642485fc90f4fd18d4302dce09f75bcae6e14e7ce96eff908651e107b866a0029e845b266521c36d6ee5388c0e8d3f8e1bf95ef3efd3c99bb8a256c18a8cebb72a3ed881ec1cdcafb34916a74ce950169c464bcf3ea20182bbae5a30bc7a665f1c4a07e87fcebb5ec3b3ef42d9428b7eff0030d4b03218010000",
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
      "Thu, 29 Oct 2020 22:11:13 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-101-1604009372790",
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
      "0000000002ff85536b6f9b3014fd2bc8fbb8362109e425456b94d21529211b9056eb3421632ed42bc1149b4e5595ffbe6bd374ad2aad9fb07dcfb9e7dc074fe48e571999939417f72d348f9f7e8b949c1050b4c0d7dd6795deeccacb86b39173e32fefe83a2c978b0522b86649baaf4b3895a26d18c8f92eea158d686bda08718a894e07f6e07430b61ddb9e8d26c3c9cc46a284325ff3ea0ee9b74ad572deef1fc57b85104509b4e6b2c7c4fee5bdff30ecd78df80d4cc9fe5bcd3ecac8fe07aa5f4ac1a8e2a25aec2274d04a6812d8535ea2877fd42c3d7b9bbbc7e9be5720f88133a08c89b652da17a660a2ca79d136262b993f11e3f3d58144deda5bc5161365bbaf928aeee1c4caa8a2897aacc1ba08b71bcb0f2eb6e16619fbdb20895697de66d95b6dd7bb4d1059d7975ee8598aa62518aeb5b0cecc2dc00bea672015af8c7aac9fb5f27387fcf783d1049496d00593893da683a93d4bf374c2f2e9c84d731bd2749a4e5c3a4a6d3673c0c952a0c833a286452b51c1d0c99c114b93e1289f25ce90e5c9349b4232a5537becda2eb813971c4ec89f862b38e7b21692771d22d7a11f7b491cee82d532f64c09396d4b75de19d305bcf6a8b04004fda7a6838e72814abadd7e107be17215fb575e37e13514943d46f738e39c9612104d1b6c9e826623326c1809961bef1cc16662df8e4149e63f9f88eeb976f1aae52ff41807a8ed2af325511cfac15763e788b8a2656b200fdd81d468f9166b43d7875f88c42dedb290ef3b2ffc41baa7107268a0621f4f13c126f0f1df76dc7cfd33475a472abce3f230a9555803dd127153ef33db998c5c774c0cb851ef6263d739b64de7d019610f957a2ea9db7cacb4136be50b088338ffc0b4ebf0175e920eea7b040000",
    ],
    [
      "ETag",
      "U+tbZUlHric34ZIAkaLRlA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-101-1604009372790"
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
      "5b",
      "4f",
      "83",
      "40",
      "10",
      "85",
      "ff",
      "cbf80a916a6d2d890fb456adf6668b89d134cd0ac34581a1bb8ba669fadf9d45ad464df40566866f96730e6ce0292d4270e1218d5715caf55e8cfada14335455a615df4a2a148205a845cce47c757999ec4fda7757c90b2653eaf7fcd3dbf8e484091524980b703710a598850adcfb0d1422475e0b28abf262597716e8756986737f36189f739f5368faf1cd70e875877dd85abbc55068b1acf97fac2db6163cd2c30c2394580468b494921e31d003635389bcccd05654c90015d470fd209654954212d93cb11b4ec36eb49ca6e3740edb07ed8ec3644681d029150cdfcc592068d2229bd10bdb841603b22ed971545f9f799c86b513530ec67eab590bfc0ab0b628cd70f937c88213c1dfe1037bcfe03b2772aa0abda3ce8613efb7e338d4cfa34e3dbfff83509aa3da21fe60d49ffbde686ab8c5bbf7ee5aa39a4ae224159a101b4ef3f8a8dd72de72ed91c99adfe36a59a10581e0dfe322d5e0462253b87d05e10585657c020000",
    ],
    [
      "ETag",
      "SqJJh/O7ZKhwehPoECTDXg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` > ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["STRING", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-102-1604009372790",
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
      "00000002ff8553ef4fa34010fd57c8de174dfa634b299426c6eb55f4482af528d598bb4bbb2c0bae5216d9a5a631fddf6f00ab36e6f413cbce7b6fdeccce3ca3079e456884429e3c96acd87ebb17216a21a64802b778981993c1d6b80887e37323b936e978839f4e4e00c12b9624eb3c656d29ca8232395acc3b4921ca9c1442b441a8ddc37abb67620363bb6fe9968d8128591a4f79f600f43ba57239ea76f7c93b891049ca48ce65878af5eb7d77a377f342dc33aa64f7306717d2c8ee17594f534189e2223b59ccc1412959b1646bc253f0f0468dc2ef87da1d4ed69d04c01b4e19a1549499aa7c81041559cc93b2a855d1e819d53edf1dd0dc993a93409bcc165e70b422eb8abc3ad688d496cb82c932552d6d0545c53c654b1ead9a48fea09dfbb34b8880833b22995c69373f1ddfd1deae56da9f12e33ed34eb5b1777628e27adad1e9b176e1cf1657da8fdb8320d88e98543cab4d07244c5965f8a5b1eec7f7ac084441c626b8b4b0497a436c877168d178d81f84316661380cad01e98798da0633a29011e0a94abd66914c64d1a0670e701899b665c6ba6e113c6006ee8726b5747b1011db88a8aedb26dab5d053c1153be332179237cd4537be1b38cbc05f789371e0d465c4041a78d698ab8a78ef53419100faa4ae5d15e50232552fe57a81e38f27817bed34c3316509a1dbf9238c474c52c9004d0ab2668a15972282a6a1abd9dc0ddc99379e02a37ef1ab3d42a2d1efe73742b0cdeb2eabfa8be681ef7a17b5813de29aa4650dd934074472f08a76bbd6ff65bcc5a5e3bb93cf757aa0f11710b0120d1dfd5a38fe2d6aae7c16b38265f4eb1900701df87ab5f76b06605834c82315fcc3c8515965a1056b468faf6b7f0ddbb08cbe69a01a5ca80f31c3b6f73dae342a45b666997a29a959b3aa5b75a894af2008c2c47875bb77ff00c359fcfde8040000",
    ],
    [
      "ETag",
      "08n4C5y4Gb8AF4gV6cAv0w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-102-1604009372790"
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
      "00000002ff8d90414fc2401085ffcb786d938246a409076b1a25168255121263c8d20eb5b0ed94dd69b021fdefce560f1e3dedce9b6fdebed90b1ccb3a87107665716ad1745705f28bbba4685bcd568e866a8be001b22a1c19e1a25e7d9de2bba2d05c058b74f3accfb3991036fbc44a4178817d893ab710be5fa05615cad8766b0647c1b86b9c325fbec58f712a4245b91396eb24b98f92187aefcf5873fcd7c847efc1817629eed1609da14bd1183a60c673b7a05555a3d1b7d49a0c2d0cf0d0280cb58d3244be28fe2818fba3dbe02608a6d793f1641a08a929535c522df0fa55c201132b9dd2591604070c75d431da952171b798ff76c4f281dcc32c81d8b4e841a6e4979e4afea9fb6fadb7f98d82010000",
    ],
    [
      "ETag",
      "bBeMnPxqE8ggltm0MRXKlw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "dd",
      "7643300000e077c975dbd322d6ec4e8ead3f56b61274378e12a3944854d0b3779fb337f8be278893840a11754d496bf00ac65841ab6465b135d664565f7ba5e83f1a43f7125fd6b5b9351b67ef84cb0b2b2f47b5382a76ef506d9311a572731b7f07cedd28b98b267e3bb02aa00acc2211666cb3ac307c4f07ac0f4890315560bbb1fd5d58bde51d36c90db6c643cb7dcfaa4fc4dfe346bea856ceef0c5dc4956354bb67a7ca846e777c5b79931fc3b6095c9a46664f0ee7d95904d3a32865ef1218c86447eeaa667bebaf93d4dadd341832c59fe1f80316800eace05444c59c5521420bf03f8fba91d1b98f69cc2907bf7fd5c9e16b18010000",
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
      "Thu, 29 Oct 2020 22:11:15 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-103-1604009372790",
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
      "0000000002ff85536b6f9b3014fd2bc8fbda0442424822456b1e64454a4807a455354dc81843dd02a6d864aaaafcf75d4cd3b5aab47ec2f63de79e731fbca0475626688662963d35b47efef6c0637481a8c419bc9a835b37b537777b7db97ce4d7cbf5c65cde2ce67340b096257051e5b4277853132a6687a09fd5bca970cd790f12f506c6b037181b23c3980e6dd39e1a4014344fb7ac7c04fabd949598e9fa59bc9f719ee514574cf4092fdedef5a3a957357fa0440afda3a60e3242ff42f57bce09968c97f343000e1a41eb881698e5e0e11f35892f3fe6ee335cf433001f19a19810de94b2f50529082f539635b5ca8a662f48f97c774081b37556a14678de146554e2825e6809963892cf15d536fe7ea7b9de66efef16a1bbf7a26075e5ec16fdd57e7bd87981767be5f88e26719c53c5d5e6daa5ba797001fd840ac94aa51eb6cfadf26b87dccf836909202d68178c6c638c0713631aa7b14dd2c9d08a5383c6f124b62d3c8c0d321dd15112530c3c25aa58b8849aadc4b2139c44d88ac7d1683c88a3c9d834a35192e264324d2d4c2c74ba407f6a26e99a898a0bd67508ddfa6ee844a17ff0568bd05125a4b8c9e5ba33d616f0dea3840201f49f9a4e6d9471506adbed7aa1e32f56a17be37413ded20c93e7e009669ce25c5040e31a9a2769bde309340c798b9db306b09ad8f53928d0ecd70b6a7bdeba78d7f2377a08036ced4af54541e8bbde0f65e78cb8c179a320c7ee802ab07c0fb581ebd36f40c2967659d0cf83e3dfa1eec9a729ad6949be9e268055e0ebbfedbcf90086dd071d21e10ecb4344ab426ada2d1153f5beb247b6651a1652e05a7e8a0d87f6b96d6d8e36232d68295f4bea361f2aedc41af1068220ccdf53ed3afd05512468367b040000",
    ],
    [
      "ETag",
      "21WIf7FYO/BBkoPBDF2BVA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-103-1604009372790"
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
      "8d92d14ec2401045ff657cb4244510a4090f20284d00118a2131842ced148a6da7ec6e2584f0efce5644a326fad2ce4ccf6cefbded015ea234000796d16a9ba3dc5fac503f9a628c2a8fb5e25b46a942b000b55831392b3f5163e876e9b2d39b6d47c19edacbfaaed96442f96b4c04380708238c0305cef301529120aff914e749ba283a0bf43e33c389377687f7dc2714987e38edf75bed7e178ed67931105a2c0afe1f6bf3a3051b5a8e314489a98f464b266983be768d4d25922cc692a25cfaa8a0808b072b49792624518927a5b25d29956b76d5b61b95fa55bd613319932f744429c3d3090b044d5ac463dab14da831208b921d87c5f595c751503831a53bf46ad542e05780b585518c8bbf4116bc16fc1d3eb05306df3991509eea3375d77f68fd761c87fa7954a7e5757f104a735467c47307dd89d71a8c0c373f796fef35aa91244e52a109b16c576faeeb35fb3dd75b3259f37b1c2d73b4c017fc7bf4220d4e286285c737244ea4047c020000",
    ],
    [
      "ETag",
      "X1Vo9NIEo+DHXqPdyoBb7w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `date` > ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["DATE", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-104-1604009372790",
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
      "e2",
      "40",
      "10",
      "fe",
      "2bcdde17cdf1b2855a2889f138a85e132c5a8a9eb9bbc0b69dd6d5d285eed68b31fcf79bb6a21273fa89b2cfcb3c333bfb44ee791691010978b229207ffc722702d220a05882a786273cd7df9c7dfdb9f1ae2fc75971ca6f27c9f1313278a9926cb54ea1294591872007f3592bc945b166b9104d346aead468ea263528b5babd4ecfa2289490c6139edda3fc56a9b51cb4dbbbe2ad44882405b6e6b2158ad5cb79fba1d35ee7e20e4225dbfb35db5846b63fa97a928a90292eb2e3f90c131412f205ac184f31c3ab340abeed7bb7385bb512243ff01058188a2253652eb4084516f3a4c82b5732782255ce371f64664fec91af8da673d73f58b255295e1e6a4c6a8b450eb24855435b6253314f61c1a3658dacefb5536f7a8e0826b86512e452bbfe617bb6a62d23a660a9fd2e28ed8276a20dddf1be81e36a072787da99379d5f68df6ff6408c1c81543cab02fb2c48a10cfb3c54e7fd5d9602a630400d2e7ad4647a9f5a411cf4c2b8df3d0a620a41d00f7a47ac1bd0d032c0880260a853a57ba56299c80c8bf6208ecc200eadbe494da0168bf0529861996627d469c7eaf7030a64db207f73ae60cce55a485e0f965c7b8e6f2f7c6fee8e86be5db511331cdeb80e5736f136a7c22691f4415fdb12e5022b95b7e4b8beed0d47be7365d78b318184858fb30dae46cc5209c866395b8182fc5c44383472319d39be337587135454b77db1634832f8f5f42af01fd7d59455f54bc66503db3786572c2d2ac243fd413ab4439bb4d3d48fc876dbf8bf933b3fb73d67f4b1998e1e7f90812fa29693cbb9eddd90fac8831872c8c2cfd700c915f0f9cb",
      "debd3224e33bc33a52e17fdcba509655c21ceaede3ab2a5fad367aa66ef64945ced53bacab7777632e3d4a475841a69e5baa5f5939ad0a2ae40b09415c1ad771cf10fd07c088583ee7040000",
    ],
    [
      "ETag",
      "4RoRNTqG+XqRWQDnuFihLg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-104-1604009372790"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d905f4fc23014c5bfcbf5754b3a2022243c88214a5c884e79308690d25de660dbad6d072c84efee6df1c1475ffae7f477da737a867dd9e430864d597cb768ba9b02ddab5f6468dbca599e343516210274b260b2df7dd8dec9b546df3d0ba94b254e797e9c4c98b0ea0b6b09e3336c4bac720be3cf3334b246b6add726dcc898ebb457e68bf7d9e32c63a1a6dc0b8b659ade4fd3195ca23f36bdff9765758960479b0cb768b051e85368433b546eee0b5a59eb0a634bad516821c0e1a030d46a69886256e2440ce2e4560c8418f587bde14830599192aea486e1e51b8703474e56191db920240c98b0e4aedb301e58ee8512870070b6d5af69da39b42f86388245ffbab82679209fce716a675a8c4049fecaa7d25df7971fb72cd92ba7010000",
    ],
    [
      "ETag",
      "3yYs2xturp8K0apic0xddw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "ff1dcf4d7282301800d0bb646d1d0aa423dd893f154c69a65262d930013e14821a130b04a777afd377837747bc2840ebec76117046afc870db9b16d3adb47cb787c347e33d633552c0d26ad633c5bf47750c56a23bd56c17cb43fa546c929c92c53c906df5de6c2fd40e394bc0faa2367193808b97da76e386a6b911c45458b57da8a569e70bb519bb03c91b49927db7d0dd757e2cdd25d6bb5287fccad9394ac32061a995ff0cc33a88e184c7ed9b497b9d9d696a205a09db7521a9385d467eec44845dea72df7d868d67415d08468619c6a27566d09f74e5f468826090b5029dd58fac833d6f82fee7d9cd4878f47de00a14fafd0375a3b6f618010000",
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
      "Thu, 29 Oct 2020 22:11:16 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-105-1604009372790",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85535d6fa24014fd2b64f6b52a0a8a9a98ad51bab251dc22b6d96c3664182e745a64283374631afffb5e86da6dd364fbc4ccdc73ee39f78367f2c08b844c49ccb3c71aaae3977b11930b028a66f82a26ee7e35768e57dfe3fb248655652db9753d9b2182372c490f650e1d29ea8a819cee77ddac1275492b213a98a8d337879dfec8b44d7362390367622251429eae79f180f43ba54a39edf5cee2dd4c882c075a72d965e2f0fade7b1af4ca4adc0353b2f75eb38732b2f789ead75c30aab82866fb1d3aa82554111c28cfd1c33f6a125fbecfdde5f4d0cd10fcc41950c6445da8c617a660a2487956573a2b993e13edf3cd81ecdcb5bb080d26f2fa5044053dc08591504523752cc1b80ab61bc3f3afb6c1661e7a5b3fda2d56ee66de5d6cd7fb8dbf336e576ee01a8ac63968ae31332ef5cdc70bea2720152fb47ad83c37ca2f1df23e0ea621a0b484361839e688f6c7e6244e6387a5636b18a726c4f1387686d48a4d36b1c1c67153e46951cda285282c2bb14703664516a4a3c89e384e140fc65634647d3a02d34a818dc8e982fca9b8822597a590bced10b90dbcd08dc260ef2fe6a1ab4b48699dab656bac29e0ad47850522e83f359d9a2817a8d4b4dbf34337982f42efc66d27bc868cb2e3ee11679cd25c02a26985cd53506d44820d23fe7ce32e11ac27f6e31c9464faeb99343d6f5cbc69f92b3dc401367695fe925d1878fe376de78cb8a179ad214fed819468f90e6b43d7a7df88c42d6db390ebbd1bfc24ed5300295450b0cfa789601df8fc6f3b6f3e8271f751472abce3f230d9a8b00ada25e2bade17b6ed38a665130daed487d8c01e9fdbd6e46832c2010af55252bbf958692b56cb57100671febe6ed7e92f7a5f342f7b040000",
    ],
    [
      "ETag",
      "o9EUH87yFJbjdbeHr3Di3Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-105-1604009372790"
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
      "ff8d92dd4ec2401085df65bcb4c4227fd2840bd08a248008c51b43c8b29d9662dbadbb5ba421bcbbb315d1a889deb433d36fb6e79c760fcf51ea8303ab287cc951166721ea07534c51e5b15674cb44aa102c40cd42226b17a3dd8eb98fe1e4bce0fdfbc8e5db4d2bec7488507c8d0903670f4184b1afc079da43ca12a4352ee23c49976567812e32339c79d3c1b84f7d227cd38fe7c361b73774e1609d167da6d9b2e4ffb1b63858b011ab29062831e568b464526c90eb81b1a95892c5585122971c159470f9209422cf9814a242934ad56e54aa4dbb6edbed5aebb2d5b6898c05673a1229c1f31909042d348ba7e2956c4293005996e43828af5b1a477ee9c49483b1d7ac9702bf02a42d88625cfe0d92e035a3eff0811d33f8ceb144e4a93e51b7c3fbee6fc751a89f47dd743df707a134457542bcc1c89d79ddd1c4708ba3f75ea1514da4a024159a10ab76fdaad16adaefb95e0b9335bdc7d132470b38a3dfe32ed2e0042c567878030bc359d17c020000",
    ],
    [
      "ETag",
      "3/MxxaEVgP+ycGOiEcvj7g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `stamp` > ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-106-1604009372790",
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
      "6d6f9b3010fe2bc8fbd24a7931e40512a9eab294754809c90869d56e5362e048bd124cb1695555f9ef3ba0699b4d6b3f81fcbcdc73e7f313b9e569448624e09bbb02f2c74fbf45401a0414dbe0697a7eae2c5fcef3ab6b198cfa82f169261e4e4e90c14b9564db2c81a614451e821c2e17ad4d2e8a8ce54234d1a8a9d37e53efd32ea5838e6998038a4209493ce1e92dca6f94cae4b0ddde176f6d84d824c0322e5ba1d8be9cb7ef8d76968bdf102ad93eacd9c632b2fd41d5d344844c71919e2c1798a09090af60cb7882195ea551f0f9d0bbc5d9b6b541f23d0f8185a1285255e6428b50a431df1479e54a864fa4caf9e6872cec893df6b5f16ce9fa476bb62dc5eb638d496db5ca4116896a686b6c2ae609ac78b4ae91ec56fbeacda68860821b2641aeb5cb6fb6676bda5a2a4cb7d67e169476403bd546eed9a183e36a47a7c7dab9375bceb52f570720668e402a9e56897d162450a67d9eaaf3ef659602a630410dae4cda67ba4507411c98616c757a414c2108acc0ecb14e40c34117ba51000c75aa74af542c15a961826541d48be310e28ed5b5cc786086c62066560411ebf4fabdbe4e8d0ed935c843ce159c719909c9ebc9924bcff1ed95ef2dddf1c8b7ab366286d33babc3954dbccda9b04924bdd3d7ae44b9c04ae53539ae6f7ba3b1ef5cd8f5664c60c3c2c7c51dee46cc1209c86639db82827c2a221c1a99cf168eefccdcd10415d575cff70c49863f9e5e05fe63564d59555fe23b537be18fa6f32ac39e74c192a262ddd73fc4a0066d52a3a9f77cdd18ea9da1de6d514aafc96ed7f8bfb9bb9cda9e337edf5a478f5fc8c05752cbc9f7a5ed5d91fac883187248c38f3703c915f0f16bdfbf3c24e3dbc33ab8c58ae32286b2ac12e6502f24df56f96a75d73407dd2ea9c8b9fa1bb3f4beb19f7ce9513ac21652f5dc52fdf2ca695550215f4808e21eb9",
      "8e7b8ee81fa1b185d1fb040000",
    ],
    [
      "ETag",
      "nGGt8TsPrYZsbA6oaiMpow==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-106-1604009372790"
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
      "cd",
      "6e",
      "c2",
      "30",
      "10",
      "84",
      "df",
      "657b2491128a8840e2102a0448116ad37269859049366920c9bab6138a10efdeb5e9a1c75efc33fec69ef1154e559bc3140e55f9d5a1ba3c94685eec2245ddd546f324a9d5081ea0112593d161708e0671b11a35ef98cba4afc3e5773c9b31a1b34f6c044caf505458e71aa61f576845836cdbef95bb9131739156596fde16cb45ca4243b91536db2489e7c9026ede1f9b3cfdcbb2bb7970a4438a052a6c33b429a4a22366666d0b6ad1c81a7d4d9dca508383dd41a9a8934211f9acf86130f6c371300a82c963348c2601933565c254d432bc7de57060c8883aa53317849001e596dcb57063cff2d095e81dc0d976bfa6f9c5a07e56c41134dad7837b9227b2e90ca736aa430f32c15fb9aacc7d7ffb01c4ea27eaa7010000",
    ],
    [
      "ETag",
      "7b+w7+AfH4mZedpLvl1GxA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "ff1dcfdb6e82300000d07fe9b3318845606f320aa82018958dbd10288d726b2b450a98fdfbccce1f9c17c8302642a43dab09051f60ca5473899707ae5850e2ac3076ad9277d477f3746b41b6f39a431736c4fc19ac1b0cb2fe33a9143dbab1959e575677daa3048e3372701dd727ea1dbf504ae7c6a57792bb17c96df18471f8b090b66acf3e9af46bac4889d531e0c1c1d035c3a8ab9e737585a2b219e267a816fbe946fd2b2bd331d1af767bbc78dfdb0d7cd8a2a043231b09d1cc6da3f0144608638613221c641256775224ad831d579cb5b5d86fa2cd690b16808cbcec8848cb7776ad99e602fccfd37ee2e4ddb748d6910efcfe018e20268f18010000",
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
      "Thu, 29 Oct 2020 22:11:18 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-107-1604009372790",
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
      "9b3014fd2bc8fbda24901749a4684d13ba460a6423a4d5344dc8980b754a30c5265314e5bfef629aae55a5f513b6ef39f79cfbe0449e781e93098978fa5c4179fcb21311b922a0688aafc3f879578075b8392ed8dcbd99899d69decda65344f09a25e9bec8a0254555329093eda69d96a22a6829440b13b52cd36e5943b36f9ae39eddb5c726122564c98ae74f487f54aa90934ee722de4e854833a005976d26f6afef9d43b7539462074cc9ce7bcd0ecac8ce27aa5f33c1a8e2229f6e37e8a0925086b0a73c430fffa87174fd3e779bd37d3b45f08133a08c892a57b52f4cc1449ef0b42a7556323911edf3cd816c9c95330f0c26b26a9f8739ddc39511534543752cc0b8f5d7aeb1f46ed7be3b0b966b2fdcccef1c77d69eaf575bd7db180f778eef188a461968ae3135aef5cdc30beac72015cfb57a503fd7ca2f1d5a7e1c4c4d4069094d30b4cd21b546e6384a229b25a3de204a4c88a251640f682f32d9b80ffd38028a3c2daa593417b9ddeddad680c6e160348cc3bedd1f8794da56d863cc46ca201ef72372be227f4aae60c16521246f3a441efc65e08481bff5e6b3c0d12524b4cad4a2315617f0d6a3c20211f49f9ace75940b54aadbbdf402c79fcd83e5bdd34c78052965c7cd33ce38a1990444d3129ba7a074458c0d23decc751608d613fb7e094a32f9752275cf6b176f5afe4a0f7080b55da5bf6413f84bef9bb67341dcd3acd290437320055a7ec4dad0f5f93722714b9b2ce4c7d6f17f92e6c987044ac8d9e7d344b00e7cfeb75d361fc1b8fba82315de717998ac555809cd12715def0bbb6f8f46964534b8541f62e351f7d2b63a479d11f690ab97929acdc74a1bb14abe823088f3f774bbce7f01e0ebd1517b040000",
    ],
    [
      "ETag",
      "6dqjpe1vByDcCMBAoj00HA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-107-1604009372790"
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
      "0000000002ff8d92d153824010c6ff97ed1566300d95191fd0ac68d44cf1a9719c1316c50e8eee8e1a72fcdfdb23b3a69aa917d85d7e7b7cdf077b784cf3183c58a79ba7126575b6417d6f8a19aa926b45b742e40ac102d46c436430e0fe30710af775da6c56497adb9954d54baf47848ab69831f0f690a4c86305dec31e729621ad45829759beaa3b0b745598e13c9c05936bea33119b7eb2188dfcfe680807ebb41833cd5635ff8fb5e5c1829d58cf3041897984464b21c50e231d189b8a6505475b895246a8a086eb071b29ca8249216c9ad80da76d375ca7e538dd66fbbcdd7588e422623a1539c18b3909042d34e333f14236c12540d625394eeaeb338dd3b87662ca6012baad5ae05780b42529c7d5df2009de32fa0e1fd83183ef1ccb4499eb137535baf37f3b8e42fd3cead20f873f08a529aa131206e3e13cf4c753c32d8fdefb9546359582925468426c38adce45db75de731d089335bdc7d3b2440b2246bfc74daac14b1857787803ee9bba0c7c020000",
    ],
    [
      "ETag",
      "IClAEf0p6zP33yfiJ8Nyyw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `amount` > ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["FLOAT64", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-108-1604009372790",
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
      "40",
      "10",
      "fe",
      "2b",
      "64ef8b26b505fa42dbc478bd4a15d3528f523def25edb20c752db0955d34c6f8df6f00abf62e77e50bb0f33ccf3c333bf34cd63c0d499f047c759f43f6f4e94e04a44640d1159e5ad1fa623cba684d9ae7df8c241d7d7fec26cee3f1312278c19234d9c47024459e3190fdf9acbeca44bea1991047287464e8dd23a3a3b774bdd7b44caba72351421c8d79ba46faad521bd96f34b6c9eb2b215631d00d97752692b7f3c683d9d864e20e98928ddd9c0d4c231b7bb29ec48251c5457a3c9fa1835c42b68084f2183dbc53c3e0f3ae769dd3a4be42f0036740191379aa0a5f28c1441af1559e95aaa4ff4c4a9f1f3ec8cc1edb435f1b4ee7ae7fb0a449415e1e6a546a8b4506328f554d5b6251118f61c1c36515d9acb591379d60041ddc520972a95d9fdb9ead695b0ded67aeeb4dd04eb4817bba2be1b8dac1c9a176e64de797da979b9d209a0e412a9e96967d1ac450d87d6dabf3f76d1604aad042155c587a871a5dbd174481c5a26eb31d443a044137b0dab419e8acd782561800459e2ad44b164d45da0b4d7c98d50d291811f4dad06251d8699996c94c8b32931aed760742f252238f195770cae546485eb5965c7b8e6f2f7c6fee0e07be5d9611516cdf6965ae28e2a34f854522e83f75bd14512e3053714f8eebdbde60e83b5776351a635851f634bbc7e188682c01d134a30928c82622c4a691cbe9ccf19da93b1823a3bcefcb2d4292fe8fe77782ffb429bbacca37198da703bfd32a1d6c215734ce4bcc43f5418c7a1b112fb57fcbb8f389ed39c33d32a8f10b11b810159d7c9ddbde0da98e3c88208394ed9f01049781fd8b",
      "bd5d3204e39a611ea9f01f478ec9220bcba01a3d9e94fe2a76cbea758d1e29c199fa23d6d575dddcf6b8d02814218154bd96542d59d1ad3294cb37100671625cc73dc3e86f0b2c5f63e6040000",
    ],
    [
      "ETag",
      "7fkJLFJ4M3HX1mnFZw8mIw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-108-1604009372790"
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
      "ff8d90cd6ec2301084df657b4d24035581481c4a455b04426d682ead10326649034936b11d5014f1ee5d9b1e7aecc53fe36fec197770caca3d44b0cbd2ba41dddea568dfdd2246d3e4d6f05451691002402b53269bb1b82c0665325ad7e6b4889fc5675eab743261c2a86f2c24441d1c32ccf706a2af0e4a5920dbb65bed6f64ccb69553e6ab8fd9cb2c66a1a0bd1356c972f9385dcee01afcb155a77f5936d7008eb48bf1801a4b852e45a5e988cace5d41238b2ac7d050a3151af0b03f48353595d444212b614f8cc2de83b817623c18f68763c1644e4ada8c4a86933587034b56e6315db820f418d07ec95d0f7e3cb3dcf725ce1ee06c9b5fd3b4b568de34710483ee75714bf2442e9de5d45637188092fc95af99bdedaf3f1804f212a7010000",
    ],
    [
      "ETag",
      "u90wK3nU8SqskKRF0Zlqcg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "08000000000002ff1dcfd16e82301400d07fe9b31a4641e8de28205a3320a3a83c116037410d505a0461f1df6776fee0fca2a2aa40a97ce8eed0a24f34173ad9549ba3d0a831815e4fdd196e4e1780042332a9fbe527edc2869da59d17ce0e6532c67be6d0e82076fedaea8e01ad16fd39b90430d59af631e0ac5e73bc2dd339f26dce7033da24bbfe94d8ae12f5f02ef96844a7442f42ee94b221f06d77323b4198c6674938bb01d856179f9cfe38b626eb67c99d270e8c127f88fdacf735776d45e36d3fcdca4b5963e98be55d541c614f547719a6b0784a64a9da87c4412b044f7195a0f2eb3b8b4d4256e87f9e0fb380779f422141a2d71f59520ae318010000",
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
      "Thu, 29 Oct 2020 22:11:20 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-109-1604009372790",
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
      "fbda0412685e52b446095d9112d211d26a9a2664cc85ba054cb1495555f9efbb98a66b5569fd84ed7bce3de73e78210fbc4cc88cc43c7b6ca07efe762f62724640d10c5f9fae8bdb4de63e8487ab75d078ce93b95a5d67f3392278cb92b4a872e849d1d40ce46cbfeb67b5682a5a0bd1c344bd8135ed0d46966359537b3c1c4f2d244ac8d3352f1f907ea7542567a67912ef67426439d08acb3e13c5dbbb79189a552dee8129697ed43451469a5fa87ecf05a38a8b72bedfa18346421d4141798e1efe5193f8e263ee3ea7453f43f08133a08c89a654ad2f4cc14499f2aca97556327b21dae7bb03d9b96b77191a4ce44d5146252de0cc48a8a2917aaec0b80cb61bc3f32fb7c166117a5b3fda2dafdccda2bfdcaef71b7f67dc5eb9816b281ae7a0b9c6dcb8d0371f2fa89f8054bcd4ea61fbdc2abf76c8fb3c989680d212ba6034b6467430b1a6711a8f593ab1cfe3d482389ec4e3736ac7169b3ae0243150e46951cda2a528ede178341c0044c3783a8a9cc47222ca1c3bb2e23401668f06c92426c733f25473052b2e2b2179d721721b78a11b85c1de5f2e42579790d22657abce585bc07b8f0a0b44d07f6a3ab6512e50a96db7e7876eb05886de8ddb4d780d1965cfbb479c714a730988a635364f41bd1109368cf88b8dbb42b09ed8f52928c9ecf70b697bdeba78d7f2377a88036ced2afd25bb30f0fc1fdace097143f346430edd815468f90e6b43d7c73f88c42dedb2909f7b37f845baa70052a8a1645f4f13c13af0f5df76da7c04e3eea38e5478c7e561b2556135744bc475bdaf6c67",
      "628ded01d1e05a7d8a4dede1a96d6d8e36231450aad792bacdc74a3bb146be813088f3f775bb8e7f0153c8c9d97b040000",
    ],
    [
      "ETag",
      "wPmWMgEkTvHLRuI4w/DDPg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-109-1604009372790"
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
      "ff8d92dd4ec2401085df65bc2db1400569c24551100c203f25261a4296760ac576b7ee6e350de1dd9dad88464df4a69d997eb33de7b47b788a79082eace3cd738eb238dba09e9a62862a4fb4a25b26b842b00035db1059e33b7ebf9d9ff7eabdc829fab7aad5af3d4cdb6d2254b0c59481bb8728c62454e03eee81b314692d10499ef255d959a08bcc0ce7fe6c30bea13e15a1e9c78be1d0eb0cbb70b04e8b21d36c55f2ff585b1e2cd889f50c2394c803345a32297618e881b1a9589a2558512297012a28e1f2c1468a3c6352880a4d2a55bb55a9366cc7b65bf566add9b2894c44c0742c38c18b3909042d344b66e2956c4283005996e4382aaf2f348ec3d289290763bfe19402bf02a42d8a135cfd0d92e02da3eff0811d33f8ceb154e45c9fa8def0cefbed380af5f3a86bcfeffe2094a6a84e883f1875e7be379a186e79f4de2934aa891494a4421362d5762e2f9a0dfb3dd72b61b2a6f7b85ae66841c0e8f7e8c71adc88250a0f6f745655bd7c020000",
    ],
    [
      "ETag",
      "2njnWhS/F3Ff4yHJs9H2ZQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `id` < ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["INT64", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-110-1604009372790",
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
      "0000000002ff8553db6e9b4010fd15b47d49545fc0576c294a5d87b648364e30769a5e642fcb403601d661175751e47fef0071122b6afd64bc73ce9933b72772cfd3800c89cfa3871cb2c70f77c22735028a46f8ea2c47ad1feca391b8dba5198fbf83330d1657676788e0054bd26413435d8a3c6320878b7923ca44bea199107514aa1b865e377a7a47d707ed7eab3fd09128210e273cbd47faad521b396c36f7c91b9110510c74c3658389e4e5bdb96d353799b803a664f3306713d3c8e691ace7b1605471919e2de6e8209790ad20a13c460fafd4c0ff74a8dde034694408de7206943191a7aaf085124ca4218ff2ac5425c32752fa7cf341e6d6c41a7bda78b670bc93354d0af2fa54a3525bad329079ac6ada1a8b0a790c2b1eacabc8e65efbe2cea6184107b754825c6bd7df2cd7d2b47501fa95eb7a9b69e7dac8b938a4db8e76727eaa7d75678b4bedf3cd41100d0720154f4bbb1ef56328ac3eb7d47e3fc9824015a6af82abbedea386a90ffcd0efb3d06c77fd5007df37fd7e97b67d9d0d3ad0097ca0c853857ac9a2a948cd3635db00418ff6fafd56ab071d6a0c029c8ac1c06741b7d705a0fea0437635f227e30a2eb8dc08c9abb6926bd7f6ac95e72e9cf1c8b3ca32428aadbba8cc1545bcf5a9b04804fda7ae5d11e502331533b21dcf724763cf5e5ad55a4c20a2ec71fe808b11d25802a269461350904d45804d2397b3b9edd9336734414639ebcb3d4292e1cfa75782f7b829bbaccadf2257af2cf305b0a4715e22b6d50731ba64b7abfd5bc2594c2dd71e1f11418ddf88c043a8e8e46a61b937a47a7221840c52767cfe082e03c70f7a7f5c08c6f3c23c52e17f5c37268b2c2c836aed7852faabd81dd3e81b2629c1997a171be8fabebf8546a10809a4eab9a4eab88a6e95a15cbe803088dbe2d8ce578cfe057836a182de040000",
    ],
    [
      "ETag",
      "NVA2Zc+1mRvV8lCXeNMdUQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-110-1604009372790"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d905f6bc23014c5bfcbdde35a685514051fe6d04d10ddea84c11089f5da55dbde2eb9513af1bbef26ee618f7bc99f93df49cec9058e79b583016cf3eccba26eee32e457b748d0d8828d4c3555062100649509d95a759b45a73b59be8f98eeed76927d2fec793814c2a49f582a185c609f63b13330f8b840a54a14db66a3fd8d8271533b653a7f1b3f8d13114ada3961be9acd1e46b3315c833fb6faf82fcbfa1ac081b609ee516395a24b516b3a60ca5357d0a8b22e303464758a063cec0f324db6569a2814258ce3288cbb51278afaed5eabd78f842c28559c5325f06a29e180895591d0590a422c80f64be9baf7e349e4b62f71f280645bff9a460da379d124110cbad7a35b924772e95852b3b61840aae42b9f73beedaf3f15706b6ba7010000",
    ],
    [
      "ETag",
      "2U6yO46FSXBto+ubFgzOuw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "1dcf4b7282300000d0bb64ad8e42f975578c1408115a3a4ad9309910354485045442a777afd37783f70308a5acefaba115ec0a5e812686b7a00bd42dfd9747addc5baa4ecdf50c0f71bf3f637c60183ac6c5b2c818894c7274965b9699aee0729dac5a27e121d2a31920417de50faa99abedd217dfbabf26c55bcd335bdbefcb28c381a928be50ab08915b9472fa38364e3d1a705cef485eaf36821e7202db342d8cd56567c7d589c453aa3398d47b17cd8fb9101267f453b6f7a18f8e4a2738ed4cef1494f73a44fc0b4ed2dac0218e941d8725d9deccd47d80196063c715eb2bfecc9a96e7cdc0ffbc1a74c79e7d9f11c514f8fd0383e4991d18010000",
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
      "Thu, 29 Oct 2020 22:11:22 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-111-1604009372790",
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
      "00000002ff85535d6fda3014fd2b91f7b80201020124b4229ab64c10d624b49aa62972cc4dea36c469ecb46215ff7dd74ee95a555a9f62fb9e73cfb91f7926f7bcd892094978f65043b5ff722712724240d10c5f377de68c2fc49f7dd19bf9f5d5f76df595aeb3e914115cb324dd9539b4a4a82b0672b209db5925ea925642b43051abdbedb6ba43dbb1ed71dfedb9631b8912f274c98b7ba4df2a55ca49a773146f67426439d092cb3613bbd7f7ce63af5356e20e98929df79a1d94919d4f54bfe58251c54531dd84e8a09650c5b0a33c470fffa8dbe4f47dee36a7bb7686e047ce803226ea42695f98828922e5595d99ac64f24c8ccf3707127a4b6f1e594ce4f5ae880bba83136b4b158dd5be04eb3c58afac857fbe0e56b368b1f6e3707ee9ad66edf97ab959f9a17573e9059ea5689283e15a53ebd4dc7cbca0fe16a4e285518ff4b3567ee9d0e2e3603401a52534c1d8b587b43bb2c7499ab82c1df507496a43928c127740fb89cdc60e38db0428f28ca861d14214890da94307bd98f61c3b76a0ebc6d44e589c328752660fbae3614a0e27e4a9e20aceb82c85e44d87c84db088bc380a36fe7c1679a68494d6b93a6b8ce902de7a54582082fe53d34147b94025ddee851f79c16c1e2daebd66c24bc828db870f38e394e612104d2b6c9e826a25b6d830e2cf56de1982cdc47e1c83924c7e3d13dd73ede24dcb5fe9110e50db55e64bc22858f817c6ce11714df3da401e9b0329d1f22dd686ae0fbf11895bda6421571b2ff8499aa70052a8a0609f4f13c126f0f9df76dc7cfd33875a472abce3f230a9555805cd127153ef0bdb19f5063d971870a53ec48643e7d8369d4367841d14eaa5a466f3b1d246ac96af200ce2fc7dd3aec35f3e9a2db07b040000",
    ],
    [
      "ETag",
      "U3c49Gozyn2ANuQJdr+aOg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-111-1604009372790"
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
      "85df657a8b09b4162b8917586d6bc43fc4f4a23166854151607177b131c677ef2cb5b6699bb43730337cb39c73e008db248fc08165b2da95280e572b54135df828cb5449ba153c970806a0622b22c37c7ff0fccea031b2597fdb2e46cfc35d7fd26a1121c335660c9c23c409a69104e7e50839cb50aff1b4ccf245d519a00e851e4e03bf377ca43ee391ee8733cf73db5e174ec66531628a2d2afe1f6bf393011bbef431468179885a4b21f80643d5d33625cb8a146b9297224409155c3d58095e164c705ea349cdb2ac9a659b75d36cde34ae1b4d93c894874c253c2778362581a0b862a9cf5fc926d80488aa24c77175ddd338892a27baec0d03bb5e09fc0a90b6384971f1374882d78cbec30776cee03bc7325ee6ea423d7823f7b7e328d4cfa33a6ed0fd414845515d90a037e84e037730d6dcfcecbd7d5028c78253921275889659bfbb6dd8e67baef75c674def719428d18090d1eff194287062964a3cbd01f4d999147c020000",
    ],
    [
      "ETag",
      "cnvyLRDM7O6aKkBpOWNqKQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` < ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["STRING", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-112-1604009372790",
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
      "ef",
      "4f",
      "a3",
      "40",
      "10",
      "fd57c8de174d6a0b94166862bc5a398f58a9c70f8db9bbb4cbb2d45560915dbc33a6fffb0d60d5c69c7e62d979efcd9bd9992774c78a044d50ccd6f735ad1ebfdcf218f51095780db7b333ab0846310bd8d5b1ad5bd1594ccabfd3c34340b08625705e66f440f0ba22544ca2a0bfae785de28af303103ad034fd401bab86aada4353376d15888266e99c157740bf91b21493c1609bbcbfe67c9d515c32d1273c7fb91f3ce883b2e2b7944831d8cd39803462f049d6a38c132c192f0ea3001cd482564b9a63968187576a127fddd5ee339cf7d7007e60846242785dc8c61748105ea46c5d57ad2a9a3ca1d6e79b030a9cb9330b95d922f2c2bd15ce1bf26a5fc142592e2b2aea4cf694151495b28c2e59b2ea22e59df2cd5f9c43041cdc6041c54ab9faeef88ef27ab5527ed5aa3a24ca9132f54e76455c4fd93bda574efd4574a11c5fef04c176428564456b3ac471461bc3cf8d75dfbf6743c0123276c1a5a98eb166a9769cc62649ade1284e551ac7566c8ef03056896d50238929069e6cd45b162e786160736452ddd487896ed83ab1c6d44e0c8d6ac41ea95aa28e3463646343459b1efa5331494f9828b9605d73d195ef86ce32f4236f360d9db68c1443034f3a734d116f7d4a2812401fd4b569a28c43a6e6a55c2f74fce92c742f9d6e38e6748dc963700fe391e24c5040e30ae754d2ea9c27d03474b108dcd05d78d33930da17bfd822049afc7c7a25848f65db65d97e5110faae77da1ad8222e7156b79087ee80a62578459b4defff325e74eef8eeec631d0d347e030256a2a3a31f91e35fa3eecaa729ad68413e9f0100b781cf577bbb66008645833c42c23f8c1c114d1652d16ef458de",
      "faebd886351cdb3a6ac1957c17b34c7ddbe346a351a4392de47349dd9a35dd6a43b57801411026c66bdbbdf907474958eee8040000",
    ],
    [
      "ETag",
      "CK8nS5biSiWB928UKbcpxA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-112-1604009372790"
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
      "0002ff8d90414f83401085ffcb788508d5484ad243ab4431a4516a63a231cd0253a40506778734b4e97f77163d78f4b43b6fbe79fb664fb0afda0242c8aaf2ab473d5c94c8cff692a2e96b367274d41a0407905529e465103fdef1aacdf0b53fbe9587e0e845663e9b0961f24f6c148427d856581706c2f713b4aa4119db6cf4e828180f9d55e2e54b741fa52234545861b94e92f92289e0ecfc19ebf6ff1af9383bb0a32cc52d6a6c73b4293a4d3bcc39b60b1ad57435ba867a9da381111e1ba5a6be539ac815c5f5fd89ebdf78d79e37bd0a26c1d413b2a65c7145adc0eb9584032656754a0759102c30d68b81d13c69127783c56f472c6fc93ecc1288758f0ee44a7ee9a1e29ffafc0d2da9c7d282010000",
    ],
    [
      "ETag",
      "/7IJDtSnbeWuzZgw7z0EsA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "08000000000002ff1dcf4b7282300000d0bb642d0e01a14377a59420a10511536593899829c8c7181093767af73a7d37783f8055151f473a5d5a3e8067a099e52dab2516a6bfba9f36de6c1ae7acce0a36f4d5692aa3a73db38203898f440623c17ddc162954d446a2dfd1ab6b867589c7ae426927ed016f1b984ba4d91a4295952ed93719b657c7b65fdb301b863e4ce9bc1e92e82d47b79dcbbedafd0a712888b309d2d995e9a1dedeacca8f78898c8b30746e7dd36bee482c5192964a69fa7ade60a9a38284fa94f9751c70a1107a511fa8081258e4da76ebcf608eea77d2ddc10270251ac947da3cb2b6e3790bf03fa79316fcd1f739935c82df3fb24e173318010000",
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
      "Thu, 29 Oct 2020 22:11:24 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-113-1604009372790",
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
      "00000002ff85535d6f9b3014fd2bc87b5c939084048814ad5142b768095981b49aa6091973a16e09a6d874aaaafcf75d4cd3b5aab43e61fb9e73cfb91f3c913b5ea66446129edf37503f7eba15093923a0688eaf9feb6b18450b767f138ac9caf3c697df83e2723e47046f59921eaa027a5234350339db87fdbc164d456b217a98a8371c8e7bc3a96999a63bb647b66b225142916d787987f41ba52a391b0c4ee2fd5c88bc005a71d967e2f0f23e78180daa5adc025372f05673803272f081ea974230aab828e7fb101d3412ea180e9417e8e11f354dcedfe6ee737ae8e7087ee00c2863a22955eb0b533051663c6f6a9d95cc9e88f6f9ea40426fe32d238389a2399471490f7066a454d1583d56605c04bbadb1f62f76c17611ad777e1c2ebf79db457fb9dbecb77e685c7ff302cf50342940738db971ae6f3e5e503f05a978a9d5a3f6b9557eeed0fafd605a024a4be882b16d4ee9d031dd244b6c9639e349929990244e624fe83831996b8195264091a745358b9658b39b39b63bb26373c826b1054e1a3ba9cb62ea58a93da28c3a744a8e67e44fcd15acb8ac84e45d87c875b08ebc380af6fe721179ba848c36855a75c6da025e7b54582082fe53d3b18d72814a6dbbd77ee4058b65b4bef2ba096f20a7ec31bcc71967b49080685a63f314d45b9162c388bfd87a2b04eb89fd38052599fd7a226dcf5b17af5afe428f7080ad5da5bf248c82b5ff55db3921ae68d168c8437720155abec1dad0f5f13722714bbb2ce472ef053f49f71440063594ece3692258073efedb4e9b8f60dc7dd4910aefb83c4cb62aac866e89b8aef7996d39d6c4728806d7ea5d6cea4e4f6d6b73b419e100a57a2ea9db7cacb4136be40b0883387f5fb7ebf817c21f0c107b040000",
    ],
    [
      "ETag",
      "+rWe2TAcqhSo5DEE3QKRlQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-113-1604009372790"
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
      "0000000002ff8d92dd4e83401085df65bca509d85a2c492fa8562581da1f7a614cd36c61a054607177a9a94ddfdd59acd5a889dec0ccf0cd72ce813d3c65650c0eacb2f4b946b13b4b514d74314559e74ad2ade2a5443000154b890cbc016e0675953d14f63628da93d7328dd37e9f0819adb160e0ec21c9308f25388f7b285981b416f1bc2eca65d319a076951ecec2a937baa5bee0b1ee4773df7707fe100ec66931668a2d1bfe1f6b8b83011bbe9a628202cb08b5964af00d46cad336252baa1c5b92d72242090ddc3c4805af2b26386fd1a46559ed96d5353ba6d96bdbe776cf2432e71153192f099ecf482028ae583ee52f6413ba0488a624c74973ddd2388b1b27baf44661b7d308fc0a90b624cb71f9374882d78cbec30776cce03bc70a5e97ea44ddf8f7ee6fc751a89f475dbbe1f0072115457542422f18ce4237186b6e71f43ed8299463c12949893a44cbec5c5ed85df33dd72baeb3a6f7384ad46840c4e8f7b8cb143809cb251ede0061049c7b7c020000",
    ],
    [
      "ETag",
      "MIBejBupiYm7vMm3Qzngdg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` < ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["STRING", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-114-1604009372790",
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
      "ef",
      "4f",
      "a34010fd57c8de174dfa032895b689f16ae5ee482af528d5e8dda55db603aea52c65173d63fabfdf00566dcce927969df7debc999d79222b9e2ec980843cde14903f7eb9132169105034c65bb17137d7375729fb2b6ee291eaadc4b4387d383e46042f5992aeb3049a5214390339984d5b712e8a8ce6423451a8691856d338d22d5def776cd3eeeb48949044639eae907eab542607edf62e792b16224e80665cb69858bfdcb7efcd76968b3b604ab6f773b6318d6c7f92f524118c2a2ed2e3d9141d1412f239ac294fd0c32b75197eddd76e71ba6ec508bee70c2863a24855e90b259848231e1779a54a064fa4f2f9e640a6ced81905da6832f38283055d97e4c5a146a5369fe7208b4435b4051615f104e67cb9a823d94afbe64fce31820e6ea904b9d0ae7e38bea3bd5e2db4df85ae779876a20dbdb37d11d7d30e4e0eb5effe6476a19d5eef05d1f612a4e269653aa06102a5e1e7c6baefdfb324508519ebe0dcd68fa8d1d3fb6114da2cea75ba61a44318f642bb4b3ba1cefa1658cb1028f254a95eb1682a52dbb6c29e1dda9da5011dab6f1a960966641afd6ebf470d466d302d23ea5864db200f395770c6652624af9b4bae7c3770e6813ff346c3c0a9ca882836f0ac365716f1d6a7c22211f4415ddb32ca05662a5fcaf502c71f8e02f7d2a987630c31658fd30d8e4744130988a6395d8382fc5c2cb169e46232750377e20dc7c8a85efc62879064f0ebe995103c66559755f525d3c077bdef95811de292264505b9af0f8466e8956cb78dffcb78b373c777471feb18a8f10711b812359dfc9c39fe35a9af7c882087947d3e0308ae029faff66ecd108c8b8679a4c27f1c3926cb2c2c877af4f8baf257b3ad5ed7324d528173f52ed6ed76763d2e354a455843aa9e4baad7acec5615",
      "2ae40b088338315ed5eeed3f5fe56697e8040000",
    ],
    [
      "ETag",
      "oqIqYZWncxoZgCt8koSuBw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-114-1604009372790"
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
      "00000002ff8d90cd6ec2301084df657b249192168140e2001451d488b6819c2a848c59d24092756d872a45bc7bd7a6871e7bf1cff81b7bc6173815f51e86b02bf2cf06757b97a37d738b144d535ac393a2da20048056e44c2af952afe69da6933c179396d6dfd3ec518c4723268cfcc04ac0f0028702cbbd81e1fb056a5121dbb65bed6f64ccb6ca298be57a369fa52c54b477c2324b92f12499c135f86353a77f5936d7008eb44bf1801a6b892e85d274446917aea011952a3134d46889063cec0f724d8d129a2864258ce36e18f7a26e140d1efaf7fd41c4644952d8826a86b31587034b5694297d71418819d07ec95d0f7e3cb3dcf325ce1ee06c9b5fd3a4b5685e35710483eef5e896644a2e9de5d45637188014fc954f85bdedaf3ff185969ca7010000",
    ],
    [
      "ETag",
      "pcOnSG+u+LKiByoTzCUDaA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "02ff1dcf516e82300000d0bbf4db185a2baefb0327b8e8406520e387146ca582d25190d665779fd9bbc1fb01b42c995279dfd6ec065e81a1884ccbe9465a2e1e4ff7c7dd33e7f0dd8b6a79a06de422df9728553857622dc3ad8dfa413b8d8b8c5dadf3a4b70b1cf95dc39c80c6db2a902f634bd8a5ac47c432bfc3c551bf45b715e618a26f032fd5926f0b7882d642cb70c076161d9d83109738d067941656a0ae9b616714d479f60177248dbdd54c78465b16a9484cf788a320dd5c1bfee572e5a3b1e7141da0e92ad7165932e741f879f4a9910bbdacf78903268069293aa672f1cccee6844cc0ff3cef8d64cfbecb68c73af0fb079683dec918010000",
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
      "Thu, 29 Oct 2020 22:11:26 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-115-1604009372790",
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
      "9b3014fd2bc8fbb8369090b714ad514ad74c09d980b49aa609d9e642bd124cb1c99455f9efbb98a66b5569fd84ed7bce3de73e7824f7a248c89430913dd4501d3efc928c9c11d034c3d7fbf91f6edb639bed3faac31708afe5d0ef65b3192244c3527457e670ae645d7150d36dd8c92a5997b492f21c139d77bb83f3eed0e93bcec41df5461307890af274258a7ba4df695daaa96d9fc43b9994590eb414aac3e5eef9dddef7ecb292bf806b65bfd6b45146d9efa87eca25a75ac862b60dd141ada08a6147458e1efe511376f13a7747d05d2743f05e70a09ccbbad08d2f4cc165918aacae4c56327d24c6e78b0309bd95b7882c2ef37a57c405ddc19995504d637d28c1ba0a366b6be95f6d82f53c5a6efc385c5c7beb7967b1596dd77e68dd5e7b816769ca72305c6b665d989b8f17d44f40695118f5a8796e949f3ab47c3b988680d20ada603c7286b43b76262c65239e8edd014b1d606ccc4603ea32874ffad04f1850e41951c3a2852ce8d0ed4d26a334e67de6c6fdb10b311df4289e381db1d41da749428e67e47725345c0a554a25da0e91db60197971146cfdc53cf24c0929ad737dd91a6b0a78e951638108fa4f4dc7262a242a35ed5efa9117cc17d1f2c66b27bc828cf243f880334e69ae00d1b4c2e669a8d632c186117fbef62e116c26f6f5145464fae391343d6f5cbc68f9333dc2013676b5f992300a96fe6763e784b8a1796d20fbf6404ab47c87b5a1ebe34f44e296b659c8b7ad177c27ed5300295450f0f7a789601378ff6f3b6d3e8271f7514769bce3f270d5a8f00ada2512a6de27767f3cecf606c4802bfd26e6baeea96d4d8e2623eca0d04f25b59b8f95b662b57a066110e7ef9b761dff022e3851d17b040000",
    ],
    [
      "ETag",
      "kAzc//8/bv+syJeSHo6N2g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-115-1604009372790"
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
      "ff8d92414f83401085ffcb789426a0955a921ea8566d526ba5f4649a660b035281c1dd45ad4dffbbb358ab5113bdc0ccf0cdf2de830d3c64650c1e2cb3f4b146b93e4851df9a224055e75af1ada2522158805aa44cc62b37397c15b397e07c95623d989270c67eafc7848aeeb110e06d20c9308f1578771b284581bc16515e17e5a2e92cd0ebca0ca761301c5f725f506cfaf16c34f2fba3016cadfd622cb45834fc3fd6e65b0b56b40c3041896584464b256985911e1a9b4a14558e2d45b58c504103370f5249752524518b272dc7396939aeddb6edee71e7a8d3b599cc29123aa392e1d9940582262df2809ed926b80cc8a664c749737de27116374e4c391c876ebb11f815606d4996e3e26f9005df0bfe0e1fd82e83ef9c28a82ef59eba18ddf8bf1dc7a17e1e75ee87831f84d21cd51e0987d78369e85f4f0c37df79efaf35aa89244e52a109d1b1dba7271dd77ecff58c4cd6fc1e4fcb1a2d8804ff1e5799062f11b9c2ed1bbf180f4d7c020000",
    ],
    [
      "ETag",
      "dj6f+zaUxRDjgeuESoa1NA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `date` < ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["DATE", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-116-1604009372790",
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
      "000002ff85536d4fa34010fe2b64ef8b26b65dfa426d13e369e53c924a3d4a35de4bda651970155864178d67fadf6f00ab36e6f40301769ee7996766679ec8adc84232268188ef4a281ebfdcc880ec11d02cc653ebf234751face3b34075ffaabb9fc14266667c70800851b1144bf3045a4a960507355eccdb7121cb9c1552b650a8659a56cbb4689fd2516fd81d8e28121524d15464b748bfd63a57e34e6793bc1d4b1927c072a1da5ca62fe79dfb6e272fe40d70ad3adb393b9846753ec97a9848ceb490d9c1628e0e4a05c512522612f4f04a0d83afdbda6dc1d2768ce07bc181712ecb4c57be5082cb2c127159d4aa64fc446a9f6f3ec8dc9eda13df98cc16aebfb36269455eed1a4c19cb6501aa4cf49eb1c2a22291c05284ab2692df1adfbcd91946d0c13553a056c6e577dbb30d6315320d2be37749698f1b87c6917bb22de0b8c6cee1ae71eacd16e7c6f1d556102d87a0b4c86ac33e0b12a8cc3e37d5797f9715816934d00497436a31739f8e822818f268bf3708220a41b01f0c07ac17503eea433f0c80214f57ea358b6532b3385018d0517f6086561f9feeb0df8b80076046ccead2d032479c9940d67be4a1101a4e84caa5124d63c9a5e7f8f6d2f716eee4c8b7eb322286cd3b69cc5545bcf5a9b148047d50d7ba8a0a8999aa5b725cdff68e26be73613783318598f1c7f91d8e46c412058866054b41437126436c1a399fcd1ddf99b9475364d4b77dbe412832fef5f44af01ff3bacbba7e9393aa80f51bc10b969435e0bef9205ddaa52dda6d9903b25eeffd5fc95d9cd99e33f958cc448d3f88c08d68e8e4c7c2f6ae4873e441040564fcf33140701df87cb3375b8660dc33cca334fee3d4715565e10534d327d2da5fc3eeef0f69af476a70a1dfc5ccfe68d3e64aa352841432fd5c52b36555b7ea50a95e4018c4a1711df714a3ff009b8a2d46e7040000",
    ],
    [
      "ETag",
      "6WGmNw6BMbs2zsqZbUon1g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-116-1604009372790"
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
      "904f4fc24010c5bfcb786d93560c04120ec5348a368d54e1620859cab416da4edd9d6290f0dd9d5d3c78f4b27fdefedeee7b7b8643d5ee6002dbaafcec519f6e4ae4855d6468fa9a8d4c1db506c10364550af9ac63ca54faf4cd6914b5c6a4910a568be95408937f60a3607286a2c27a6760f27e86563528b6cd46bb1b05e353679579fa163fc499080dedac902e93249a25315cbc3fb6eef02fcbfae2c19eb61916a8b1cdd1a6e834ed31e7b92d6854d3d5e81bea758e061cec0e4a4d7da734912f8a1f86433f1c067741301e8c6e47e340c89a72c515b5022f5f251c30b1aa33fa9282100aa0dd52ba166e3c8a3c70258e0e906ceb5fd3ecc4685e34490483f6f5e09ae49e6c3a96d4ac7bf42057f2958f155ff7971f34f8f4bfa7010000",
    ],
    [
      "ETag",
      "KrEoRaNJztNAAnssNAa0VQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000002ff1dcf4b7282300000d0bb64ed388048a53bc3c7228282896237990001525b48082da8d3bbd7e901dee23d002d0aa61419ba2b6bc12bb851c39e17f35068d01c0b2ba5b16c8f15fa7497508b54abdcfb79133e45b16bb174e17a7768bab46986ac8476e9e72fa6a8cf4916e72b93139e69ba1ebd19571869ba79caefa14d46ec7d078da808b2f0a696a352d7921e5d79e1d2186577f99a50b0ace176bf5f05254e5dd9b5536c1d0c146d637c6a95c7f6d482e8e37d9b7b664cf2468fb2defa591fc3c959182b9e2495afdbb11f0a2e424b22a71f385f385a5fe35d0266804d82f74c11fecc2e96b63d03ff7332dc047bf621a33debc1ef1f5d6651d118010000",
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
      "Thu, 29 Oct 2020 22:11:27 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-117-1604009372790",
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
      "5d6f9b3014fd2bc87b6c9390869410295aa394769112b20249b54d1332e642dd02a6d8748aaafcf75d4cd3b5aab43e61fb9e73cfb91f3c93075e26644a629e3d3650efbfdc8b989c125034c3d7abed4fd3df35f2445c5bc5647f52ee8acabe99cd10c15b96a44595434f8aa66620a7dba09fd5a2a9682d440f13f58643bb373c372dd37446f699ed98489490a72b5e3e20fd4ea94a4e0783a3783f1322cb81565cf699285edf074f6783aa16f7c0941cbcd71ca08c1c7ca2fa35178c2a2ecad93640078d843a8282f21c3dfca326f1c5fbdc7d4e8b7e86e027ce8032269a52b5be30051365cab3a6d659c9f499689f6f0e247057ee223498c89ba28c4a5ac0a991504523b5afc0b8f2376b63e95d6dfcf53c5c6ebc28587c73d7f3fe62b3daaebdc0b8fde6faaea1689c83e61a33e342df3cbca07e0252f152ab87ed73abfcd2a1e5c7c1b4049496d00523db3ca7c389e9c4696cb374321ac7a909713c89ed311dc526732cb0921828f2b4a866d15294093814ecd8892649328aac214da298811539303e4fe99859d4a2e4704afed45cc125979590bceb10b9f597a11b85fed65bcc43579790d22657979db1b680b71e151688a0ffd47468a35ca052dbeea517bafe7c112e776e37e1156494ed83479c714a730988a635364f41bd1609368c78f3b57b89603db1efc7a024d35fcfa4ed79ebe24dcb5fe9210eb0b5abf49704a1bff4aeb59d236247f346439eba03a9d0f21dd686ae0fbf11895bda6521375bd7ff41ba271f52a8a1649f4f13c13af0f9df76dc7c04e3eea38e5478c7e561b2556135744bc475bd2f6c6b62db6716d1e05a7d884d6cebd8b636479b110a28d54b49dde663a59d58235f4118c4f97bba5d87bfef133d447b040000",
    ],
    [
      "ETag",
      "FUZ0RVus+oG4m8y+nVmp7Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-117-1604009372790"
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
      "414fc2401085ffcb782d49ab58a00987a28818402ce5640859da695968bb75772b2184ffee6c45346aa2977666facdf6bdd71e60cb8b183c58f1f4a542b9bf48513f99224055655ad1ad148542b000354b898cb7db34f6eda0e9240fed090e74caf960d7ed12a1a235e60cbc03241cb35881f77c8082e5486b91c8aabc58d69d057a5f9ae12c0c869301f5b9884d3f998f467e6fd487a3755e8c9966cb9affc7dae268c146ac024c506211a1d1524ab1c1480f8d4dc5f232c38612958c50410dd70f5229aa9249211a3469384eabe1b876d3b63b57adcb56c726321311d35c1404cf672410b4d02c0bc48e6c824b80ac4b729cd4d7571af3b87662cae124749bb5c0af00694b7886cbbf4112bc66f41d3eb05306df39968baad067ea6ef4e8ff761c85fa79d4ad1ff67f104a535467241c8efbb3d01f4f0db73879efed35aaa91494a44213a26337dbd72dd77ecff54698ace93d9e96155a1031fa3deeb9062f6199c2e31b6d8aa3887c020000",
    ],
    [
      "ETag",
      "dkkgdA0R41fJ8NeGtgiiGw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `stamp` < ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-118-1604009372790",
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
      "ff85535b4fe24014fe2bcdec8b265ca65ca4901897c5ea7603054bd1b897c0747a8aa3a5533b5337c6f0dff7b4159598d527ca7c97f39d33679ec89d484232208158dfe7903d7eb99501a911d06c8da7e9a2a7fd8999643367da66ad0c7ecc266717c7c7c810854ab14d1a435dc93ce3a0068b79639dc93c6599947534aa9ba655378f6887d27ebbd7eaf5290a15c4d158247728bfd13a5583667357bcb196721d034b856a70b979396f3eb49a69266f816bd5dcafd9c432aaf949d5935872a6854c8e17734c902bc896b06122c60cafd230f8baefdd106cd35823f94170609ccb3cd1452eb4e03289c43acf4a5732782265ce371f646e8fed916f8ca60bd73f58b14d215e1d1a4c19cb65062a8f75cd58615391886129c25585a477c699379d2082096e9802b532aebedb9e6d182ba531ddcaf89d53dae6c68931744ff71d1cd738383934cebde962667cbbde033173084a8ba44cecb3208622edf3549df797590898c60415b8ecd123665ab41f44418f4756bb1b441482c00a7a5dd60e28ef77a01306c050a70bf752c51299d07e1801041dd6e5d4e45d3043e858a11975fb216510b5f00f3bb2cc906c6be46f26349c0a954a25aac9922bcff1eda5ef2ddcd1d0b7cb362286d33badc2154dbccda9b149247dd0d7b64085c44ac53539ae6f7bc391ef5cdad5668c61cdf8e3fc1e772362b10264b38c6d40433691210e8dcca673c777a6ee708c8af2ba673b8622835f4faf02ff312da7accb5fe23b137bee0f27b332c38e74c9e2bc643d541fa4455bb44e5b75b3eb9bad81d91e989d06a5f427d96e6bff37771713db73461f5b9be8f10719f84a2a39b958d8de35a98e3c882083847fbe19482e81cf5ffbeee52119df1ed6c12dd6021791aba20acfa05a48b129f355ea8e65f54c8b94e44cbfc3fafdf66ef28547e1081b48f4734bd5cb2ba65542b97a2121887be43aee39a2ff00006f92d3fb040000",
    ],
    [
      "ETag",
      "pU7tTM1nrPIO3a2reJPMFQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-118-1604009372790"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d904b4fc2401485ffcb75699bb4624448588069a44a8854eb4243c8506eeb40db5be7812184ffce9dc1854b37f338f39d9973e6083bd96e60086b597d5b5487ab0acdc22d32d4b6369aa78e5a8d10001a513139951ff2e93d8ff2f47a47cfadb4768cc962346242175fd808181ea194586f340c3f8fd08a06d9b65a297f2363e6d039259dbf258f49c642431b27ccf3d96c3c9925700afed8baddbf2ccb53005b5a6758a2c2b64097a253b4c5c2a4aea0164d5763a8c9aa023578d81f548a6c271451c84a18c7f7617c17dd46d1a0d7bfe90f22266b2a8491d4329cbf72383064449dd10f17849801e597dcb5f4e39ee59e2fb1f700675bfe9a260783fa451147d0e85e8f2e491ec8a5339cda288b011482bf722acd657f3a0346108c2fa7010000",
    ],
    [
      "ETag",
      "HiZiJVU0UI+koKniuuAeEQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000000000002ff1dcf4b7282300000d0bb646d1c10a8d25dc1f21190f0d3ea86819800d2861450039ddebd4edf0dde0f283026c3908f5d4b18780553b1d29778e971c9501f1829f3b990ad238d1bcf1c9988bb5ede7012863e5b9bc6a6ac53dbf1eb51de9f663e9fee57e7cdbc901d8eac244be5fbc50cab736089aee80b9b9507e551a1bde640e15fcb52f2b6eefe3d931ab633e8713e7c4c488bb37095083afaf691c9fea717b6ba1d4258331566090adc2fd5512cb34628a1fc369c52455d0b5a6d8c1b47434f0566ad1da8db6f2d7d61790e3b37302c298bed99e718469447600188e04d4f86bc7966154dd717e07f9e8f1327cfbe418a9ef4e0f70f4061191518010000",
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
      "Thu, 29 Oct 2020 22:11:29 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-119-1604009372790",
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
      "535d4fa34014fd2b64f6d5166ab14093666d5a549296ae403566b32133c380a3c0b0cce0c698fef7bd0cd6d598ace10166ee39f79cfbc10b7ae47586e688f0e277c7dae76f0f82a013c4142ee0d67dcc56258fcbd8bec4b93d8dababcbf5ddf5620108deb324ae9a928da4e85acae47c1f8f8b56740d6e851841a2d164e28d2633cbb62c6fea9c3a9e0544c9ca7cc3eb47a0df2bd5c8b9691ec5c7851045c970c3e5988aeaedde7c3a359b563c30aaa4f951d30419697ea1fabd14142b2eeac53e06079d646dca2acc4bf0f08f9a91f38fb9c71c57e302c04f9c324ca9e86ad5fb821454d4392fba566745f317a47dbefb40b1bff157894145d955755ae38a9d1819563855cf0d332ea2ddd608c28b5db45d26c12e4ce3d595bf5d8e57bbcd7e1bc6c6ed951ff986c2a4649a6b2c8c737d0ae100fa19938ad75a3de9af7be5d70e059f07d313405ab221983ad60c4f5ccb23397168ee4ecf486e31425ce29ce129b1a867333b230c034f8b6a16ae454d893dcd67194edd097553dbc16e8a5d7c9a122fb7c99943a7d62c478713f4a7e58aadb96c84e44387d06d14247e9a44fb70b54c7c5d428ebb52ad07637d01ef3d2a281040ffa9e9d047b900a5bedd4198f8d172950437fe30e10d2b307d8e7fc38c735c4a0668dc42f3146bb7228386a170b9f5d700d613fb710c4a34fff982fa9ef72edeb5fc8d9ec0007bbb4abf519c444178a9ed1c1137b8ec34e469f8400d58be87dac0f5e11720614b872ce87aef477768b88a58ce5a56d3afa709601df8fa6f3b6e3e8061f741472a38c3f250d9abd0960d4bc475bdaf6cdbf51ccb431adcaa4f31788e6deb73f41959c56af55ad2b0f950e920d6c937100461fea16ed7e12f4bd8dd4d7b040000",
    ],
    [
      "ETag",
      "8kdCliSlS4Gaf43SmHGDYQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-119-1604009372790"
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
      "5b",
      "4f",
      "c2",
      "40",
      "10",
      "85ffcbf868894511a4090fdc252297d23e194296760a8576b7ee6e2548f8efce5644a326fad2ce4cbfd99e73da036c631e8203cb78f59ca3dc5fac504f4de1a2ca13ade89609ae102c40cd5644eeb7adcbb6dfeb8ff5984fae1ebcceebd4cf778d06112a5863cac039401463122a709e0ec0598ab41688244ff9a2e82cd0fbcc0c679e3b18f5a94f4568fa913f1c365bc32e1cadf362c8345b14fc3fd6e6470b3662e96284127980464b26c506033d3036154bb3044b4ae4324005055c3c584991674c0a51a249a95cae97ca55bb62dbf59bda75ad6e13998880e9587082fd1909042d344b5cb1239b5025401625398e8aeb0b8de3b07062cac1c8ab560a815f01d216c5092efe0649f09ad177f8c04e197ce7582a72aecf546f386efe761c85fa7954a7e9757f104a535467c41b3c76675ef37162b8f9c97b6baf514da4a024159a10cb76e5eeb656b5df736d0b9335bdc7d132470b0246bfc77dacc18958a2f0f806601619dc7c020000",
    ],
    [
      "ETag",
      "ykB+CUFGOtOnP/KTDzQUuw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `amount` < ? AND `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["FLOAT64", "NUMERIC"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
          {
            parameterType: { type: "NUMERIC" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-120-1604009372790",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8554614fa34010fd2b64ef8be66c0b2d85b689f17a154f2e952aa51a73776997ed50d7028beca2698cfffd06b06a63eefa09d879efcd9bd9199ec99aa74b3220215f3d14906fbedc8b901c11507485a7f1d964f3733354eb6b0ed6f9577965ccdcced3f1312278c99234c962684851e40ce460366dae7251643417a281420da3ad370c4b3775bddfb1db765f47a284381af3748df43ba5323968b5b6c99b2b215631d08ccb2613c9db79ebb1ddca72710f4cc9d66ece16a691ad3d594f62c1a8e2223d9e4dd14121219f4342798c1edea9cbf0dbae7693d3a4b942f0236740191345aa4a5f28c1441af1559157aa64f04c2a9f1f5ec8d4193ba3401b4d665e70b0a049495e1c6a546af3790eb288d591b6c0a2221ec39c2f1775245b6b67fee40223e8e08e4a900bede6dcf11d4ddb6a68bf0b5def30ed441b7aa7bb12aea71d9c1c6a3ffcc9ec52fb7ebb1344d34b908aa795e580863194765fdbea7ebecd9240155aa883735bb7a8d1d3fb6114da2cea75ba61a44318f642bb4b3ba1cefa2698cb1028f254a95eb1682ad21ea540f51042ab6758665b6f2fed3e33faedced2a4a6c9bac0a865db9d88bc1c91a79c2b38e5321392d7ad2537be1b38f3c09f79a361e054654414db775a9b2b8bf8e853619108fa4f5d2f65940bcc54de93eb058e3f1c05eeb5538fc61856946da60f381c118d25209ae6340105f9855862d3c8e564ea06eec41b8e9151ddf7e51621c9e0d7f33b21d864559755f52467e3c930b0cccac116724de3a2c23cd62fc4687611f172f46f196f76e1f8ee688f0c6afc41042e444d275733c7bf25f5910f11e490b2fd3380e02ab07fb1b74b86605c33cc23157ee3c83159666139d4a3c793ca5fcd36fbba6554bf054573f52966dbfab6c7a546a90809a4eab5a47ac9ca6e55a142be81308813e3b9de0f8cfe0594cfd90ce6040000",
    ],
    [
      "ETag",
      "lFOyJyAtkVie6H+sQ1UI3w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-120-1604009372790"
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
      "02ff8d905f4fc23014c5bfcbf5754bba811296f020049504890c79504348d92e63b0edceb69b9984efee6df1c1475ffae7f477da737a86535ea510c12ecf3e1b54dd4d8666691731eaa6309aa79a2a8de0011a9931d97f2f1fbed343783b68c544af9ed3deeead598e464ce8e480a584e80cfb1c8b5443f471864a96c8b6ed56b91b19335d6d95d9e275fa388d592829b5c2623d9fdf8fe753b8787f6cf5e95f96cdc58323ed62dca3c22a419ba25674c4c4cc6c412dcbba405f53a312d4e0607790296a6aa9887c56fc20147e7027fa420c7b837030144c1694489353c5f07ac5e1c09091454c5f5c100206945b72d7bd1b5b964357a2750067dbfc9ac69d41fda2882368b4af8b6b9209d97486531bd5a00789e4af7ccacd757ff901ec17e720a7010000",
    ],
    [
      "ETag",
      "4ZmFzdh257v0CsSMd3bYuQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "300000d0bb64ad0e8254d29db4602814b49042d9303104e220bf2445b4d3bbd7e9f6edde0f209432290bd537ac03cfe04674b8a22b7fd0eccdb5aa8c3954714e82cf5476e94997783a0a9b39d65d7a472226ecc588252f9735a22dcc97648a4abde7dfcebed7b6e8a4ae067fba8c619da20c8db79237d7963401194b5cf45855efb18a0f119b157c7359379fcd3cc4feddd13cdeef421ead856324d2f16162dfd7153fb526ae03cbf5f76e04ddc24eda749379f58342bd15ddced99902bd7e4593557f44de52995b34c8b4a2b63199073ed3293b820560f370164c16e747d630215c80ff79a16e037bf46d460413e0f70fe1f5044418010000",
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
      "Thu, 29 Oct 2020 22:11:31 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-121-1604009372790",
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
      "a34014fd2b64f6ab6da10ffa489ab5a9b836b65481ea9acd860cc3851da54c65861a63fadff7ce605d8dc9fa0966ee39f79cfb8017f2c0cb944c48c2f3c71aaae76ff72221270414cdf136b8beba0c973d71eede2d2f57b53bf87929fda7e914115cb324ddee0a684951570ce46413b6f34ad43b5a09d1c2442da7ebb41cd7eedbf6b837ec0ec736122514d992970f48ffa3d44e4e3a9da3783b17222f80eeb86c33b17dbbefecbb9d5d25ee8129d9f9a8d94119d9f942f57b2118555c94d34d880e6a09550c5bca0bf4f08f9a26a71f73b739ddb67304ef3903ca98a84ba57d610a26ca8ce77565b292c90b313edfbd90d05b7af3c862a2a8b7655cd22d9c5829553456cf3bb0ce83f5ca5af8e7eb60358b166b3f0ee717de6ad69eaf979b951f5ab7175ee0598a260518ae35b54ecdc9c703eaa720152f8d7aa4afb5f26b87169f07a309282da109c643dba5cec81e27593264d9a83748321b9264940c07b497d86cdc877e9a00459e11352c5a8ad21e26a9e3b8341eb3911df7c7ce301e25ae1ba783be83690690ba19399c90a78a2b38e37227246f3a446e8345e4c551b0f1e7b3c8332564b42ed459634c17f0dea3c20211f49f9a0e3aca052ae9762ffcc80b66f36871e335135e424ed973f88833ce682101d1b4c2e629a85622c586117fb6f2ce106c2676750c4a32f9f54274cfb58b772d7fa34738406d57992709a360e1ff30768e881b5ad406b26f5e7419192fb4e9c36f04e2923649c8f5c60bee48731540061594eceb6122d804befed88e8b8f605c7dd4910acfb83b4c6a155641b343dc94fbcac6b90e9c2e31e04a7d8ab963e7d8359d4367842d94eab5a466f1b1d246ac966f20fd43d9f8bee9d6e12fe850fc777a040000",
    ],
    [
      "ETag",
      "RQPKSL3oF6YLKMu65XKsNw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-121-1604009372790"
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
      "ff8d93616fd3301086ffcbf1359592d2b52cd23eb4a340216bba349d90d05479f125b838b1b19d4e55d5ffce391b0531a4ec4b7277794ebef7fce6083f44c321860751fd6cd11cde54e86e7d90a16da5b3f4d2aab10801a0631591c36c95dd6de46a7c915ecfbfaeef3eef74fae5f6ea8a085b7cc79a417c8452a0e416e26f4768588dd45628d9d6cdb6cb027007ed8beb3c5b2c3f525e2beef3e52649a6b3640ea7e0dcc89963db8e7f45dbfd29809d7ac8b044834d817e166dd40e0bb7f0322dabb5c48155ad29d04207771f2aa35acd8c5203aa0ca2613488c6e1280c2fdf4e8693cb9048a90ae6846a08deac694070ca3199a9479209d19008d3c524b9ec9e7baa0bde49f1e162998f47dd847f03a530d63d6de537f8acee5f52b25782740542f64115361c4d1f25f496716ed0da5e52d92dd3fa8ccdd2347901b1861b25783fb8173d8074fb33f02149a7ff5b2d19e7cfaede4ff3f90bc23ab2c319c91737f3753ebd5979eefef97e670787766514b9c5a2374a148ede5d4cc6e19377ae95f7139d133bd3620005a35fe0937010974c5a3cfd02c1ba3b5860030000",
    ],
    [
      "ETag",
      "2RPRVUlP65OCEXSVJjpOKQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "7243400000d07fd9e74cc65df48d4111a948c83479316b67ad4595b564e9f4df9be9f983f3032042789a0afedde21ebc81152ad61eed8f83e4684fc4cb834cb2d948fce544998f14c5b3881386f0c335d1e5d460d1952e3ba4089e938c3ccb8346fb4d29127625ba53cee3a368fb219337321cebf1d4a7e7369ad1436b237511a174f7d9cdb58394e38b5fe5e13cc6468c32dfab43c95e8db8109e1208536c8899551eb8d5307b41b65c0dd3ecc69cc03b2fe1f2a544d4225caeb56d9a755a474df479a1be758b721e366ae622bb5ad3b852c57b47c00e60315086a782beb2aa6e593bf03f2ff83ae057dfc19061067eff003e8a843618010000",
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
      "Thu, 29 Oct 2020 22:11:32 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-122-1604009372790",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85535d6f9b3014fd2bc87b5c9310a0218914ad514ad64881b4405a4dd3848cb930b70467d874caaafcf75d4cd3b5aab43e61fb9e73cfb91f3c91075e65644a525efc6aa03e7cba17293923a06881af967bedf9eb43fd602f3f8faa68ecffc9dce5cd6c8608deb224dded4be849d1d40ce4741bf58b5a347b5a0bd1c344bda165f58623d331cd89ed5aeec444a284325ff3ea01e93f95dacbe9607012ef17421425d03d977d26762fef83476bb0afc53d3025076f35072823071fa87e2905a38a8b6ab68dd04123a14e604779891efe51b3f4e26dee3ea7bb7e81e047ce8032269a4ab5be30051355ce8ba6d659c9f489689faf0e24f2d6de223698289b5d95547407674646154dd4610fc632dcf8c62a586e427f1eaf3641122dae3c7fde5f6cd65b3f888cbb2b2ff40c45d31234d7981917fa16e005f533908a575a3d6e9f5be5e70eadde0fa625a0b4842e98b8e6880ec7e624cd5397e563fb3ccd4d48d371ea9e533b35d9c401274b81224f8b6a16ad4465dbd628b328248e333213e73cb312ca867932012b4f4dead8e7e090e319f95d7305975cee85e45d87c85db88abd240eb7c1621e7bba849c36a5baec8cb505bcf6a8b04004fda7a6631be50295da76af82d80be78b7875eb75135e4341d921fa8533ce692901d1b4c6e629a87d9161c34830f7bd4b04eb895d9f82924cbf3f91b6e7ad8b572d7fa1c738c0d6aed25f12c5e12af8aaed9c10b7b46c34e4b13bb465e4bc6c4d1f7f201097b44b426eb65ef88d744f21e45043c53e1e268275e0e39fedb4f808c6d5471da9f08ebbc364abc26ae87688eb729fd9cec4726d976870addec526c3d1a96b6d8e3623eca052cf25758b8f9576628d7c016110c71fe86e1dff026091da877a040000",
    ],
    [
      "ETag",
      "27PEMLyrk3F+6nS8Mzd7FQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-122-1604009372790"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d93614fdb301086ff8bf771a99686ae2d91f8d04237aa8516da808410aa4c7c09664eceb39d4255f5bfef1c584103297c49ee2ecfc9f79edf6cd96f590916b33b59fca9c16cbe14e02e7cb0005b2b67e9a5b1b2c002068e174446aeb8cf4f1f4f66d757bf864fcbafc3c1b7545f1c1d1161b37b28398bb72c97a08465f1cd9655bc046acb50d565b56ab280b98df6c565ba98ce7e525ea2f0f9ec324946e364c276c1be5170c7570dff89b6db5dc01ef06e013918a832f0b368830f90b9a9976979a915742cd62603cb1ab8f95018ac3537881daa74ba51d4e9f6c35e181e1e0ca2c16148a4c28c3b8915c1974b1a9039745c2df09164b26e44846962929c37cf35d5a568a4f8703a4bfbbd66c2b7402e8d75cf5bf907bea8fb9f54fc93205d81546d50019500d34649bde24218b0b69544bbe25aefb1f17c9ebc8378250c4ad10eae650ba0dc7a0ffc48e6a38f564bc679ddd5c9289dbc23ac233bec91747a3659a6a3b373cfddbedcef78e3c09e1b24b758f046e986bde1f7413f7cf6ce317a3fd139b13335042ce3f40b9c4ac7e29c2b0bbbbf4880c3e460030000",
    ],
    [
      "ETag",
      "2tghfHwDNYVK8xS+87/TpQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 29 Oct 2020 22:11:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
