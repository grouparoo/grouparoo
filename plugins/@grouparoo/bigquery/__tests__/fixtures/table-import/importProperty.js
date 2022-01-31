const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1640212585510";

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
      "bb646d1d5084d09d801fc0f211a8cac649347c54084282844eef5ea74778ef07a0cb8574dd99d13ba9c1271068a64f2f532c2d8fbd34c67e5cdc1e7473535fa31b9a4a06af8afb4006d5ace8190e496e93539b1595c3c980e5574d90d5c262dd6cc4761495cf53b8ed4dd777d71e4e7aedb6db0d941fcad5ac570337632be185ec63fc6ec7fa58345160fa8e752c5487b97613d7b17c8a975511a90697d062ff85eb747e1a0c38238204014cbd4ef34c816347b1230907d0a74f5e760ede5bd77c9343952a2f3be443956616320e662433ae5276c7f2f2603d1230016468ca9674e7f2ed9e2f747d02fe13ce4c34e43d6110d49216fcfe015501766723010000",
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
      "Wed, 22 Dec 2021 22:36:27 GMT",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-1-1640212585510",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b6fda3014fd2b91f7b54002a43c24b432485734086b125a4dd31439e626731be2d476a8aa8affbe1ba7b05695da4fb17dcfb9e7dc479ec93d2fb6644c129e3d54209fbedc89849c11d034c3575b7f13f31ffafafa6e7d5f3d96a957e655944d2688e0354bd15d99434b894a3250e34dd8cea4a84a2a856861a296d372cefb76d7e9ba43d7756ca429c8d3252fee91fc57eb528d3b9da3743b1322cb81965cb599d89dde3bfb6ea794e20e98569db78a1d14519d0f35bfe68251cd4531d984a85f299031ec28cfd1c17fe236b9789bb9cde9ae9d2178cf1950c64455e8da15a660a24879564993958c9f8971f9ea40426fe9cd228b89bcda1571417770666da9a6b17e2ac1ba0cd62b6be15fae83d5345aacfd389c5d79ab697bb65e6e567e68dd5e798167699ae460b8d6c4ba30371f2fa8bf05a57961d4a3fab9567ee9cfe2fd506a024a2b6882f1c03ea7ced01e25693260e9b0e726a90d49324c062eed25361bf5a1bf4d8022cf881a162d44c17a5d0acca5719a8cdcb80fa3241ef5fa6edc63908e0698c119327238238f926b9873550ac59b0e91db60117971146cfcd934f24c0929ad723d6f8cd505bcf6a8b1c0d8b61d047e50d7a18e72816a75cb177ee405d359b4b8f19a292f21a3ec297cc039a7345780682ab1811ae44a6cb169c49faebc3982cdd47e1e838a8c7f3f93baefb593576d3fd1231c626d599b2f09a360e17f37768e881b9a5706b26f0e440213728b9e0f7f10875bdae420d71b2ff8459aa700529050b0cfe7896013f8ec5f3b6e3e4271f7514569bce3f230556b3009cd127153eb893de83b4362c052bf8bb95df7d8b23a479d117650e897829acdc73a1bb14a9d4018c4f9fba655877f71e16e2e77040000",
    ],
    [
      "ETag",
      "0tBoDKtQQjOkuwpfEpluTg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:27 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1640212585510"
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
      "ff8d93516fda3010c7bf8bf71a24c2084391fa002dddd052e8207dd95445ae7dc9cc1c5f663b5408f1dd7b4e3b36b593d297e4eefc3be5eeef7f8eec973292a5ec4155bf5bb0870f15f86f21d8806bb577f46ad038601103cf2b22aff8d7d141a995ff9e5ce348efc61ad5f4f1e28208277e42cd597a64a5022d1d4b7f1c99e135509b40ddd6a6e8b288f943138adb7cb35c7da6bc4619f2d55d96cde6d9829da273a3e49e171dff8eb6fb53c476f8b081122c18016196c6e20e845f86351daf1b0d0387ad15e05807770795c5b6e116714095413c8827e3e1281e25d3248987c46914dc2b3484de6d693ce6d173bdc1475a92c51f89b05d4c0b97dd734f7525bb4542b85ce5937137dfbf0017025be38b5eb054d6f967f1fe802f22bc26357f274837a5741f54819160fb28d5145c4a0bcef592e80ade34676cbe5e676f5531d2a292fde05ef500daefcfc075b69efd4f5af2d75fadae66f9e20de13cb9e68ce4cb9bc5369fdddc06eefec508f38307776b914ce520f8291e8ea7c9a7c9f0d96297186c47df49bd6d216282d39ff2457996965c3b383d01db1f796787030000",
    ],
    [
      "ETag",
      "DaK2yiiNtZ5Fo2lj4loi8w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:28 GMT",
      "Server",
      "ESF",
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
          "SELECT `first_name` as __result FROM `records` WHERE  `id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1640212585510",
    },
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
      "40",
      "10",
      "fc",
      "2b",
      "e8fa35366083ed58b2d23c688a6ae314e3445555e1e358e8a598237747222bf27fef02711e8a947c3266677676669747f28f9729999284e77735c8dd975b919023029ae6f87647cfe44d7a565d2e033d1cfeb003669a8b87d90c11bc6129baad0ae829514b066aba5ef57329ea8a4a217ad8a837e8d923c71ad80377e2bab68534054536e7e53f24ffd5ba5253d33c48f77321f20268c5559f89edf37bf37e605652dc02d3ca7cab68a288323fd43c2904a39a8b72b65ea17ead40c6b0a5bcc0095e8869f2f56de73ea7db7e8ee07bce803226ea523753610b26ca8ce7b56cbb92e92369a77cf54056dedc3b8f8c4dc6a5d27149b7b031a832e25882aa0b6d7c0b970b6323810999aa8d71f3dd0b3dc3d8f07463cc8c1363ee2ffcc8b0512a05a579d90a453429a011798ac27f9f7f43a09a2ae88af1d81a517b621d27593266d964e8269905493249c62e1d26163b76c04913a0c8d34df796454bb4670d6dfb38b32d1bcb69426d965297d2913b742cc7193bce2805b0a845f647e441720d175c5542f12e107213fa911747e13a383f8dbcd64646d1f745375c63e2f59c1a4dc696d5f8fdc0dbbea972816a4dc27e1079e1e979e45f7bdd52e79053b65bdde15a335a2840349518bc06b910290647ae962b3ff297c1e91c19eda6ae0e0845a6bf1f5f08d1ae6a93d6ed6fa335725afd03e09a16758bb8ef1e884df6fb3f88c0fbebc8e4e7da0b7f91ee5508194828d9e7eb43705bf8ec2b3adc3442f1aa514569fc8fb7c254a3c1247437c3b7ed7407f664e036292358ea77355ced2198a647d311b650ea2743dd4da3cf4eac56cf202ce2aa033fb8c4ea7f9b48345751040000",
    ],
    [
      "ETag",
      "yaBrWdBpGONt33K1Nc//Mw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:28 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1640212585510"
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
      "0000000002ff2d904d6fc2300c40ff8b77a552dbad6c42e20013dd400c6d054e134221b85f6beb2e713721d4ff3ea7ec92d8ceb3fd942b7c15cd1926702ab2ef0ecde52e43fe704182b6abd8cad55263114680ac3221ef1f57d12c5fe99ce3ec6dac36f3d2c671369d0a61758eb582c915d202abb385c9e7151a55a3b41d8f669828185f5a57d9ee92e5e645f29ace2edfecd7ebd97cbd80fed08fa0a45382291a6c34ba89ada112352f9dac55755ba167a9331a2d0cf0f09019ea5a65883ca978a1178c1ffc3008a3a7280a7ce12ad28a0b6a04dd6f41b630b1aa12fa15550804304328d6e970fe4879610a744a877f7a7e61b4ef8664b345b7d4bf093c9393629165d3e108b492df782df896f77f02adc68d6a010000",
    ],
    [
      "ETag",
      "37J5AhJchtFgM6aNBjsFFg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:28 GMT",
      "Server",
      "ESF",
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
      "0000000002ffedd34b8e82300000d0bb742d86afb5b313242895ef60013706b01a14a550208899bb8f996b8cef0eef05b2a2a09c1fbbfa461fe00b3c3319cd8b792eae92419c220756372c6bc4b34c3c045178cb2ffbf2b07e1a27be30abcc8e2f2b6dbfda48cde0b2cae8856d0ef354d98a0b39202226f6bdf00ecd55ddaa4bd484a5c4bca5c207d6efa0b31ebffd4ed2eeaaa842ec57a6f630f83e4d9a496f770b3fe8ae13d604378067388d67e4a39df740728ca35354c97922f7a67badbb497170e6d6d625a2a3ddb8bd64b7acce447a2716d9e8a3052d868453ce6b32e294c587500f88179c755ecf3f3efe1d30037464654bf9b17c6f57348466e0affeb17b32fafeafd3aca52df8f9050155868519040000",
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
      "Wed, 22 Dec 2021 22:36:28 GMT",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-3-1640212585510",
    },
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
      "da3014fd2b91f75a2040800409ad88a62d12842e8476d334458e7393ba0b31d84eabaae2bfefc629acdda4f629b6ef39f79cfb9117f29b9729199384e7fb0ae4f39707919033029ae6f89a0ddca7457173b5bf29ee1e20b9de7bf7df87f96482085eb314ddee0a68295149066abc59b77329aa1d9542b43051abdfea0e1dbbd7ed0ddcc1a06b234d41912d78f91bc9f75aefd4b8d3394ab77321f202e88eab3613dbd37be7b1d7d949f1004cabce7bc50e8aa8ce879a5f0bc1a8e6a29c6cd6a85f2990316c292fd0c15f629a9cbfcfdce674dbce11fcc81950c64455eada15a660a2cc785e4993958c5f8871f9e640d6fec29f45161345b52de3926ee1cc4aa9a6b17ede817519ae96d63cb85c85cb69345f05f17a76ed2fa7edd96ab159066bebeeda0f7d4bd3a400c3b526d6b9b9057841fd1494e6a5518feae75af9b53ff3ff875213505a41138c47f690765ddb4bb264c432b73f48321b92c44d4603da4f6ce639e0a40950e41951c3a2a528dd919330d77363c74bb3d84919c4d44eedb8078ee7f5a1d74b870e399c9127c9355c70b5138a371d2277e13cf2e328dc04b369e49b12325a15faa2315617f0d6a3c60263dbee22f083ba0e75940b54ab5b3e0f223f9ccea2f9addf4c79013965cfeb3dce39a385024453890dd4209722c5a69160baf42f106ca676730c2a32fef942eabed74edeb4fd448f7088b5656dbe641d85f3e0cad839226e695119c8637320129890297a3efc421c6e6993837cdbf8e10fd23c85908184927d3e4f049bc067ffda71f3118abb8f2a4ae31d9787a95a83496896889b5a4f6cd71b9a3f5553a9ff8d79b6d73fb6acce5167842d94fab5a066f3b1ce46ac5227100671fe8169d5e10f22efd52e77040000",
    ],
    [
      "ETag",
      "f58wLlPGqPlWjebHq9hX6g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:29 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1640212585510"
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
      "4f",
      "db",
      "3010c6bf8bf792544aa02d28122f5ae846b5b48534bce98422635f82996307ff29aaaa7ef79d03eba63129bc49eecebf53ee1e3fd9939f427192924751bf7830bb2f35b8bb10e460bd74165fad56164844c0d11a49ff3aaeae668bcdb5cf73f93dde9cc727cda6bebc44c2b227682849f7a41220b925e98f3d51b4016c635afa46955d1611b76b43715de4f3e537cc1bcd43bebccfb2c9349b9143746ce4d4d1b2e33fd1f67088c8b37ecca102038a4198a535fa19989b87352d6d5a0903abbd616049077707b5d1bea546eb0156066783643c8c4f93d3d1c56894c4c849cda8135a217abfc6f188d38eca5cbfe292243943c274312e5c75cf2dd605ef1609e17c598c87dd7c7f039431ed952b7bc14a18ebdec4fb0dbe8bf02f29e92741bc2921fba01a1407d34789b6a49c1bb0b697d4b6a46d7bc4a6ab55f65115c58d16bc1fdc8a1e40baed11f89aad26ff9316fdf547abeb4931fb405887ae3922c57c315b1793c56de01ede8d30dd39b0b746a3a92c043f25f1f062743e8edf2c76a583edf03ba9331e22c228fe2937c291b4a2d2c2e117e5e6959087030000",
    ],
    [
      "ETag",
      "uw6fCEMZDuRRlK0Z70+mZg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:29 GMT",
      "Server",
      "ESF",
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
          "SELECT `ltv` as __result FROM `records` WHERE  `id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-4-1640212585510",
    },
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
      "000002ff85535b6f9b3014fe2bc87b5c1b2009e422455dd7b28d2949db84b49aa629399803734b706a9b6c5d95ffbe0334bda852fb84f1f92ee7e67b76238a840d592cb2db12d5dd876b19b303860632bafd3cc67fe7df3b938f7d6f22d5df20b7e12ab9188d08212a9686f526c7432d4bc5510f17f356a664b90125e521091d760f5dbfebb4ddb6d7f73cd7219ac63c1d8be286c8bf8dd9e8a16defad5b9994598eb011bac5e5faf1dedeb6ed8d92d7c88db65f3ada64a2ed373d8f72c9c108598c1673f22f35aa25ae41e494c11331893fbd546e0958b732026f0547e05c9685a9b222092e8b5464a5aa55d9f09ed5593e3bb079300e4e226b959bedca026d2d970a75991bebcbec6c62ad1472a912bdb2aebe05b3c0b25622595923ebc81a879330b25cf248501b51d40e11c43956ea0f3d085f37be2280018d4d70d9737c70fbce204ee31e4ffb1d2f4e1d8ce37edcf3a0133b7cd0c56e122310cf54ea350b0a5940a7d307afed386e2fe9a0d74e9c9e3f1800f8ae9fc65e0cdd0e42cf4f52b63b607f9430782af4466ad174825dcdc2285846b3c5f4e4380aea3252a0ba4f9be4aa229ee769a8c8257911f08dda7655544872ab5a1b4ea360767c1285974133cd3166c0efe6b734cf14728d8406056b34a82632a1c6b1f3b379188567d3e33131ea119def119a0d7fde3f11a2bb4ddd69537f2b2fbf5bfbef019790973562db1c98cb76bb5f84a0c56bc8ec6211cc7eb0e66a86292a2cf8fbe323701d78eff9ec9799a0b4cee4a20dfdd3ae705d797085cdce88759ddd9e3de8bb559709acccabd8a0edef1b5369548ab8c6c23c14d42c33d5d99895fa1144411af5349c7ea5e87ffa3d44364a040000",
    ],
    [
      "ETag",
      "BLezPJ3M+85MorxEl/aWdQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:29 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1640212585510"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff2d90df4f83400c80ff97fa0a3a702c8e640f4c5dd4107fe0e68b59961b146402c5bba25908fffb7acc97bbb6f7b5fd723d7c974d0621eccbe2a7437dbc2890df6c90a0e92a3672b5d4180407905521645bcca3bb8f6c39cb637e5a5ff175be52582c164298f40b6b05610f7989556620fceca151354adb6ea7c78982f1b1b59555fc12ad25ad29b3e9f3268ea3657c0fc37670e040fb0473d4d8a46807b69a0e98f2a37535aa6e2b740d753a4503233c3e149aba566922572aeed4f566d389eff9c14d107813e12a4a1597d408ba7907d9c2c4aa4ae84f4cc113408fa148e7e3f92b653f985f7abe95dafef3cb23a379d524bb0ddab593b3c22d592d165dd61d3a902af98e8792cff9700251b0ba826b010000",
    ],
    [
      "ETag",
      "pg9ADVdB6fLtJT/t3fFaeg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:30 GMT",
      "Server",
      "ESF",
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
      "4d",
      "72",
      "82",
      "300040e1bb642d8e854648774130a91d5a145b840d0331208df2170a924eef5ea7d7a8dffa6ddf374819e352267d2d78059ec094ea68cee6d9021f8685dafbe1387a798dcf54665e88d7e569cf075df641c14371199115b8b959e6cc699dd6fc82d5353efad033f7e7671c5968d804f5fad132c60abf27515540d73e374b3df89074eb169a8f09eb78dee0ca9956c60e85abb5daa8062a4b4dd0129156c6a26078630b780c329a13a54862bc08ac13c2acbe3b2c5b5fc226a6f5ca47a386f3213aa5f4f2c988f66aba9015f1b6455eff36e835b9e5f4218d02ad3cb5341bc4fceeeedf0133c0af4dd9719994b7db0d88d00cfcad9ff453c36fffdb3ced78077e7e01276ebada19040000",
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
      "Wed, 22 Dec 2021 22:36:30 GMT",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-5-1640212585510",
    },
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
      "000002ff85536b4fdb3014fd2b91f795b66949fa92aad195303ab5e996a6b087a6c8766e82218d8bed8010ea7fdf8d431908093ec5f63de79e731f792437a24cc9983091df56a01e3e5d4b468e08189ae36b71e5e63f4f4bf30d3cff37f46fbe5cde86f9fd64820851b334ddee0a686959290e7abc59b77325ab1d5552b63051cb6f75fb9edbebf6fca1ef775da46928b285286f907c65cc4e8f3b9d83743b97322f80ee846e73b97d7eefdcf53a3b25af811bdd79add84111dd7957f373213935429693cd1af52b0d2a812d15053af84f4cd9c9ebcc6d41b7ed1cc1778203e55c56a5a95d610a2ecb4ce495b259c9f89158972f0e641d2c8259ec705954db3229e9168e9c941a9a98871d3867d16ae9ccc3b355b49cc6f35598ac67e7c172da9ead169b65b8762ecf8328700c650558ae33714eec2dc40beaa7a08d28ad7a5c3fd7ca4ffd99bf1d4a4d40690d4d3019b87dda1dba2396b101cf86c73ecb5c606cc8063e3d662e1f79e0a50c28f2aca865d15296de80f56837ed27dca32cf132ce13e665c3c43dce7afd1ea33d6094ec8fc8bd12064e85de492d9a0e91cb681e07491c6dc2d9340e6c0919ad0a73da18ab0b78e9d1608189eb7611f84e5dfb3a2a24aad52d9f8771104d67f1fc2268a6bc809cf287f52dce39a385064453850d34a09632c5a69170ba0c4e116ca7f6fd10d464fce791d47daf9dbc68fb333dc621d6968dfd92751ccdc3afd6ce0171418bca42ee9a0351c0a54ad1f3fe2fe2704b9b1ce4c726887e91e629820c1494fce37922d8063efad70e9b8f50dc7d54d106efb83c5cd71a5c41b344c2d67a608f5caf3f2416accc9b983f1a1c5a56e7a833c2164af35450b3f958672356e967100671fea16dd5fe1f642db7fe77040000",
    ],
    [
      "ETag",
      "lh0gXDntJe45Ze6kBWqNgw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:30 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1640212585510"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d93616f9b301086ff8bf79548d085ac43ea8764c93a249ab409a9264d1572ed83b9331cb34daa34ca7fdf9976d9b44ea25fe0eefc9cb87bfd72603f542359c2ee55f5b303b37f5781bbf1c11a6ca79da5578b8d05163070bc2272cecbcbf866fe318d6fbf6ec72e0f6f674ff2f1e282082bbe43cd597260a5022d2d4bbe1d58c36ba03681baab9ba2cf02e6f6ad2f6ef275babca4bc46e9f3e536cba6b36cc18ec1a95172c78b9e7f43dbdd31600f78bf86120c3402fc2cadc107102ef56b5a5eb71a46163b23c0b21eee0f2a835dcb0de2882aa378144dc6e15974169fc7711412a75170a7b02174bba1f19843c7f51a1f694916bd27c2f4312d5cf6cf1dd595ec17f161bacc27e37ebebf012e04768d2b06c15219eb9ec5fb0dbe88f02fa9f91b41ba29a587a00a1a096688526dc1a53460ed2089b6e06d7bc266ab55f65a95461a547218dca90140bbdd09f89cada6ff9396fcf547abf9345fbc22ac23d79c903cbd5a6cf2e9d5b5e7ee5e8c30db3bb0d706c95416bc9fa2707c1e7f9884cf16fb84de76f49dc4990e022638fd295f946349c9b585e32fdaa07e1287030000",
    ],
    [
      "ETag",
      "DafG5QD9I5VXU4tT0VBzdw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:31 GMT",
      "Server",
      "ESF",
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
          "SELECT `ios_app` as __result FROM `records` WHERE  `id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-6-1640212585510",
    },
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
      "ff8553ef6fda3010fd5722efe30a04482020a10ed16c8b44a10da1d5344d603b97d46d8853dba1aa2afef75d92d21faad47e8ae37befdebdbbf313b913794cc68489f4be04f5f8ed56327242c0d0146faf83a81f3bcb7b3e0882fdecfbd94d114e179793092244c5d2745764d0d2b2541cf478bd6aa74a96055552b630516bd0ea0e1cbbd7edb99eeb766da469c892b9c8ef907c634ca1c79dce51ba9d4a9966400ba1db5cee5eee3bfb5ea750f216b8d19df78a1d14d19d4f354f33c9a911329fac57a85f6a501bd851916105afc498fd789fb92de8ae9d22782f3850ce65999baa2a4cc1659e88b4547556327e2275956f0e64e5cffd59646d85d41b5a145b8b6a6bb351a0cbcc583fc3e5b9b555c0a58af5d6bafeed87be85d8786b4dac536b1e9c0791d5459d18b41179ad12519641a5f0dc87e063f32b0235544313dc0ced01ed7af688256cc813afefb2c406c63c3674699fd97ce4801333a0c83355f69a457399bbc38479ae078ec3291fc6dc4e06b13364d84d36721dd773f0d873a84b0e27e4410903674217528ba61be43a0c227f1385ebc56c1af9b58d84a2efb3a6b8cac4db3a0d9adcd876e5f7136f872a2a24aa55ed0d16911f4e675170e537139d434af9e3ea1e679ad04c03a2a9a23b30a0ce658c8d2317cb551005cbc5748e8c7a4c17478426e3bf4faf84e8b1a83b6dea6fa535706afd23e08a66658dd83707d22587c33f44e0f2356472b9f6c33fa4b90a21010539ff7a7c08ae035f3da1e3422314571a55b4c17fdc15ae2b0daea0d919b1abab7b668fbafd9e476ab0321f628e671f1b53e5a832c20e72f36ca85968f4d98895fa0584411cf52258fcc2e87fd460b9184e040000",
    ],
    [
      "ETag",
      "WIT3d4Oqc6IIvC+DhpRANQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:31 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1640212585510"
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
      "0000000002ff2d90db4e83401086df65bc8504aa5425e945314d34c1b6561b434cd36c61c02d87c1dd454308efde59eacd1efefd66e6cb0e50ca2683104eb2f8e950f537059a377bd8a1ee2aa3796ba9d1080ea0110593624bf7b25754be3eca3af9f84ca2db3229160b2674fa8db58070805c62956908bf0668448d5c763caaa92363a66f6d126d36f16ab9e6a0a6cc06eb7d1c2fa37805e36174e04ca71de6a8b049d1b66c159d31352fd6568bbaadd0d5d4a914354cf0f45028ea5aa1885c4edcb9ebcfefbc993f0b1e82c0f798ab28154652c3e8fe1d788a2123aa1dfdb12bf80ca8e9c8daf9b4fe726c548756e9f04f47bd41bd55c49335daa1de55e089ac9461595be1402af83b9ea5b9dec70b4f468bb26b010000",
    ],
    [
      "ETag",
      "aPo7iyrokM9imYTWYB3kYg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:31 GMT",
      "Server",
      "ESF",
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
      "db",
      "92",
      "43",
      "30",
      "00",
      "00d07fc97375a86a65df141b5d14bde2c5b88451b7345253e9ecbf6f673fe19c3748f31c8f63c28606f7e00bcce90a2ef365266ae124f2b32b999ea1aab2c9296a504f85ed35da549c4e859cd64585c4a9ff796ca5eaaa8f2ab4e77d6a791e8ba8c35ef088b2d5e595d819ef1c5b278f7b408c8014e221e2d258a7a7882b3b74e966a84a5b420564f8fdf77098d71539afdb35458e19c4cf3083b9ae1e57fb9d5cc8c2e91cb3b2a39ac66fdebdb115f7d66a0443ab1a93fbbe8165e1b0c96bfd6763b121f2626123449c4c76a81ba5e61f95da37dd2c9cca0d574cb000f8456a8ac7a4feb86505c205f84f48d84cf0676287538a29f8fd03757e52ae23010000",
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
      "Wed, 22 Dec 2021 22:36:31 GMT",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-7-1640212585510",
    },
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
      "00000002ff85536b4fdb3014fd2b91f7953669daa40fa91a5509a382a6234d41689a22c7b9c90c695c6c07c450fffb6e1cca4048f029b6ef39f79cfbc833b9e355462624e5c57d0df2e9dbad48c911014d0b7cf5ff6ea2cde98d8e2eedbe2bfae7f9793e9a3d4ea788e00d4bd1edae848e12b564a0269b75b790a2de512944071375869d9e3f70dc9eeb8d3cafe7204d41995ff0ea0ec97fb4dea9896d1fa4bb8510450974c7559789edebbbfde0da3b296e816965bf57b45144d99f6a7e2f05a39a8b6aba59a37ead4026b0a5bc4407ff89597afc3e7397d36db740f0036740191375a51b579882892ae7452d4d56327926c6e59b03590717c13cb69828eb6d9554740b475646354df4d30eacd368b5b416e1e92a5acee2c52a4cd6f3b36039ebce57179b65b8b6aecf8228b0344d4b305c6b6a1d9b5b8817d4cf40695e19f5b8796e945ffab3f838948680d20ada6032747cda1b39e3344f872c1ff5bd3477204d47e9d0a3fdd461e3010cb21428f28ca861d14a5419a51e80ef274e8fb9c980f9c38482334cc630f4fccccd070eeb93fd1179945cc309573ba178db21721d2de22089a34d389fc5812921a775a94f5a634d016f3d6a2c30719c1e023fa96bdf44b940b5a6e58b300ea2d93c5e5c05ed942fa0a0ec697d8f73ce69a900d154620335c8a5c8b069249c2d8313049ba9fd3c041599fc7a264ddf1b276fdafe4a8f71888d656dbe641d478bf087b173405cd1b2369087f64024302133f4bcff8d38dcd23607b9dc04d10d699f22c84142c5be9e27824de0ab7fedb0f908c5dd4715a5f18ecbc354a3c124b44bc44dad07f6d8753c9f18b0d41f626e7f70685993a3c9085ba8f44b41ede6639dad58ad5e4118c4f987a655fb7fdf173e3d77040000",
    ],
    [
      "ETag",
      "6zURUFYtRQ/32o3KfKf8Aw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:32 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1640212585510"
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
      "db301086ff8bf735951ad6962a121f52d66d41a1656d2ac4261419fb929939b9cc768a4ad5ffce39b0328d49e14b72777e4eb97bfd66cf7ea95ab288dda9f2770b66f7a104f7cd072bb0ad76965e0dd61658c0c0f192c8f822be29be5f4fb73cb979b49bcd45f9585c3f9c9d1161c54fa8388bf6ac50a0a565d18f3dab7905d42650b7559d7759c0dcaef1c575b64a165f28af50fa7cb149d37896ced92138364aee78def1ef68bb3d04ec1eef565080815a809fa531780fc2257e4dcbab46c3c0626b0458d6c1dd4169b06db8411c5065703a0827a3e14978329e8ec7e190388d823b8535a19b358dc71c3aae57f8404bb2f02311a68b69e1a27b6ea9ae64b7880f9345361975f3fd0d7021b0ad5dde0b16ca58f72cde1ff045847f49cddf09d24d29dd0795504b307d946a722ea5016b7b49b4396f9a23365b2ed3b7aad4d2a092fde056f500da6d8fc0e77419ff4f5af2d7ab569fe26cfe86b08e5c7344b2e472becee2cb2bcfddbe1861b67360af0c92a92c783f85c3d1747c3a193e5bec1cbdede83b91332d044c70fa53be2ac7a2826b0b8727df1c37ca87030000",
    ],
    [
      "ETag",
      "AJAYfZW8vaIYzsUUJgzfWw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:32 GMT",
      "Server",
      "ESF",
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
          "SELECT `date` as __result FROM `records` WHERE  `id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-8-1640212585510",
    },
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
      "5b",
      "6f",
      "9b",
      "30",
      "14",
      "fe",
      "2b",
      "c87b6d02249042a4a8ab5ab621a5694748bb699a12630ecc1d606a9bb65995ffbe0334bd6c52fb84f1f92ee7e607f29b5729999284e7370dc8ed876b919003029ae678eb7e5b4abfe465b6cdb3622c2e8a3f57f7f777b3192278cb52b4ac0b1828d148066aba5a0e73299a9a4a21062834f006f6c4b146f6c8f55cd7b690a6a0c8e6bcfa8de45f5ad76a6a9a7beb612e445e00adb91a32513edd9bb723b396e21a9856e66b47134d94f9a6e7512118d55c54b3d512fd1b05720d25e50566f04c4c938faf95879c96c31cc1b79c01654c34956eb3420926aa8ce78dec54c9f4817459be389065300f4e626393520d1b832a63bd96a09a421b9fa2f3336323810999aa8d71f5258802c3d8f07463cc8c23631e9e85b161a3490a4af3aab3886952402bffd884f0ffceb704aaa9823eb83eb426d4f62c3fc9924396796337c92c48122f3974e938b198ef8093264091a75bf58e452b51819bf82336f232f09cd4a32c736c2f757c1ba897d8605b90b963e6d813b23b2077926b38e5aa168af7ad2057511807eb385a2d4e8ee3a02b23a358f7699f5c5bc4cb3c3516b9b6acb6de376adbb5512ed0aded6db88883e8f8240e2f837e9c73c829db2e6f70a0192d14209a4a5a82067926526c1cb9385f867178be389e23a39bd1c51ea1c8f4c7c33321ded65da775f76dbd264ee7bf075cd2a2e910b7fd81d864b7fb8908dcbc9e4cbeae82e83be9af22c84042c5de1f1f82bbc07bef67bfcd08c57d4617a5f11f7785a9d68349e87786975d768f6c7fe4bb63d281a5fe3736b6adc9be31ad46ab082554fab1a07e9bb1cedeac514f200ce2a817e1e23346ff026ad5a58c4b040000",
    ],
    [
      "ETag",
      "5XSr9mimfygfl3oPlzWxxw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:33 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1640212585510"
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
      "516bc2400c80ff4bf66ae15aaa88e083cec206dd986e45c61039afb156dba6bb4bb739f1bf2f57f77297e4be241f778153d9e430815d597c7668cf7705f2d2072b745dc54eae961a873000645d08f9bb7e6a93c5814e269ebfc7eb9f0367e968399d0ae1cc016b0d930bec4bac7207938f0b34ba4669db6e6d3f51303eb7beb298bd2592d594fbec394bd3d93c4de0bab90ee048bb15eed16263d0cf6b2d1dd1f0a35775ba6e2b0c1c75d6a0831eee1f0a4b5dab2d512095601c84a3584561341c0f87a112ae22a3b9a446d0ec15640b13eb6a45df220aa100b60fc579df9f5f528e54a40215052af4629bff9ef999d1bd5892fd0efd6a75d3b827afc6a2ccb6c301182d3ff250f22dbffe019368df3d6e010000",
    ],
    [
      "ETag",
      "zWMpEDhokc4BY4WxhtUL6Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:33 GMT",
      "Server",
      "ESF",
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
      "d3597282300000d0bbe45b1db43686fe8528d6ca2203b2fd302c51344290cd40a777afd36bd47787f70de234a54d13b59cd1127c80215ec8b3749648d8efa5d131b4bb46ae8d5f509742cb081c757b633820a7f8a078d71b21c166650ac656fcb3738682c0526222dd4d59af2f5bed12385c35889bc3244a43291a08d47395fbc632115d6dee17d6bed8e1fbe99c298e279f558d8b2deafa957bdc300b214104f672054ed74580323c2f908ca099f125d6e02db13d095943a37ee9d6dc1447199efde3a068ae198ed56823b3207698850ceb073b3fcda5aa3ea07515d565e26cf883cd5e5efe1d30015454979a36d1e5b9fded5d9627e0af7ed40e157dfe57685cd31afcfc022bfcff2519040000",
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
      "Wed, 22 Dec 2021 22:36:33 GMT",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-9-1640212585510",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8553ef6f9b3010fd5790f7b54920bf2091a2354a69cb94908d9056d33421630ee696608a4daaaecaffbec3345daa4aed276cdf7bf7eede1dcfe49e1709999298670f35544f5fee444cce08289ae16b2dacbde395b65dcf8bfbbfdff6fc6a65fa8fb3192278c3927457e6d091a2ae18c8e976d3cd2a5197b412a283893a938e351e9a7dab3f724623cb449a843c5df2e21ec97f942ae5b4d73b4a773321b21c68c9659789ddeb7b6fdfef9595b803a664efad620f4564ef43cdafb960547151ccb61bd4af255411ec28cfb182ffc4243e7f9bb9cbe9ae9b2178cf1950c6445da8a62a4cc14491f2acae7456327d26baca9303d9b84b77111a4ce4f5ae880aba833323a18a46eaa904e33258af0ccfbf5c07ab79e8adfd68b3b87657f3ee62bddcaefc8d717bed06aea1689c83e61a33e35cdf7cbca07e0252f142ab87cd73a3fce28ff77e280d01a525b4c1c836c7d472cc499cc6364b9dc1284e4d886327b64774109b6c3284611203459e16d52c5a88c232fb8ec52844ac9fd8d170c026516c3b93c8b22790b2716c01a3e470461e2baee082cb5248de3a446e032f74a330d8fa8b79e8ea16525ae7eaa22dac69e0b446850d46a66921f083be0e4d940b546b2cf7fcd00de68bd0bb71db292f21a3ec69f380734e692e01d1b4420315542b91a069c49fafdc0b04eba97d3f062599fe7a268def4d2527b6bfd2431c6253b2d25fb20903cfbfd2e51c113734af3564df1e48054c5409d67cf88d38dcd23607f9b175839fa47d0a20850a0af6f93c11ac039ffd6bc7cd4728ee3eaa4885775c1e261b0d5641bb445cf77a644f06e371633d822bf52ee698ced1b2264793117650a89786dacdc73e5bb15abe823088f3f7b555877fb96fda1477040000",
    ],
    [
      "ETag",
      "uo1v8Ip77uAnkzJviGM0Nw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:33 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1640212585510"
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
      "8d93516fda3010c7bf8bf7b82025145817a90f61651b52800ed2ed61aa22135f3233c797da0e0821befbce69c7a67552fa92dc9d7fa7dcfdfdcf89fd945ab0986d65f5d88239bea9c07df1c11a6cab9ca55783da020b18385e11b95c1ca2701ba9b7bbeceaf02886dfb4fe7a9bdcdc10618b1f5073169f58294109cbe2ef27a6790dd456a06a6b9d7759c0dcb1f1c54db69e2f3f515ea3f0f9f23e4d93693a63e7e0d228b8e379c7bfa2ede11cb01d6ed75082015d809fa531b883c2cdfd9a96d78d8281c5d614605907770795c1b6e106714095c1fb41341985c36838be1e8fa390388505771235a1f71b1a8f39745cadf1404bb2e88a08d3c5b470d93df75497a25bc487f365361975f3fd0df0a2c056bbbc172ca5b1ee49bcdfe0b308ff928abf12a49b92aa0faa400b307d946c722e84016b7b49b4396f9a0b365dadd297aa6861508a7e702f7b00e5f617e063ba4afe272df9eb8f56b749367b415847aeb920d97c31db64c9e2ce730fcf46981e1dd83b83642a0bde4f5138ba1ebf9b844f16fb80de76f49dd89916025670fa533e4bc7e2922b0be75f3d461dd187030000",
    ],
    [
      "ETag",
      "NMw10b1l+jT3wqd2WnnVDA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:34 GMT",
      "Server",
      "ESF",
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
          "SELECT `stamp` as __result FROM `records` WHERE  `id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-10-1640212585510",
    },
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
      "6fda3010fe2b91f7b540124248905057b5d91a8dd21602d5344de038e7cc6d88c1763a7515ff7d97a4f44595da4f44bee7e59ebbe391dc89322323928a7c57817af8722b537244c0d01c5fb5705595db37d3ddf2f487bb3bcfd4bf25bf1e8f11216a96a69b6d011d2d2bc5408f16f36eae64b5a54aca0e0a751cbbe3f89eed3aee20180c1c1b791a0a3e11e51db2ff18b3d5a35eefe0ddcda5cc0ba05ba1bb4c6e9edf7bf76e6fabe42d30a37b6f2d7be8a27b1f9b1e1792512364395eccb1814a835ac1868a025b786166e9d7b7d25d4137dd1cc1f78201654c56a5a9db4209264b2ef24a35aa64f4489a365f7d907934894e136bad0d6aae2daaadd54a81ae0a637d9b5d5e586b054caa4cafad9bf3681659d65a646b6b6c1d5b93f8224e2c075d32d046948d4742d3026afda731c4ef875f13a8a11adae26a68fbd409ec30e5e990f1a03f48b90d691aa4c301eda7360b3df0b21428f24caddeb06829cb7e300c390fb2a11d06dc0fddc08190f721606ed807bfeffa619f53dbe3647f44fe2a61e04ce8add4a29d05b999c549b44a668be9e94912353138c5dc676d737588d77d1a0cb9b2ed3aef07d9f675554874ab871b4f936876729ac4cba8dde70472ca1ee63bdc28a785064453453760405dc80c0747ae2ee771125f4e4f26c868967475406832faf5f842481eb6cda44df35b7bf95ee37f002c69513588fbf6833864bfff8d08bcbd964cae17d1ec27699f66c04141c93e5f1f829bc2a77fa1c33d23162f1a6df0ca8cc06361ba36610adaa3119ba6bd2776e80d5c8f346065ded57cdf3b4ca6d6a8156103a5794ad4de33066dcd2afd0cc222ee7a1a4fbf63f53f73902b6c4f040000",
    ],
    [
      "ETag",
      "si2rug0WNqVCK2qHdrzVfQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:34 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1640212585510"
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
      "dd",
      "6e",
      "82",
      "40",
      "10",
      "46",
      "df",
      "657a0b2d18b755122fb4a1ad093616b4378d312b0c140b0cdd5d6a88f1dd9dc5deeccfb767664ef60c3f6593410087b2f8ed50f577059a0f7b88517795d1bcb5d4680407d0c882c970f4f0ba1a3fbd7c2e451e9dda6d1caa645ecc664ce8f41b6b09c119f212ab4c43f0758646d6c865fbbd1a3a3266fad6269be52a4c36f3d59aa39a321bbd6fa368be8842b8ec2e0e1ce910638e0a9b146dd356d11153b3b4be5ad66d85aea64ea5a8618087874251d74a45e472e2fa9eeb3f8ebd913f1213217c8fc18a52694a6a98dd26c0630c1959c574625df01950c391cdf361fdb3f1bd9878424cfde9389c5ab9dd7fd9a237a8d78ad841a31defdd549ec9ea19d636aa430752c95ff3569adbfd7205fe67aa2f77010000",
    ],
    [
      "ETag",
      "E2/GM47FVI5fLwpURErSAg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:34 GMT",
      "Server",
      "ESF",
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
      "41",
      "72",
      "82",
      "30",
      "00",
      "40",
      "d1",
      "bb",
      "642d4ea280d25d0169088a550443364c80942a5628c480767af73a3dc05ffcf703785188becf64538b2b7801773eb3a6c53487af54c1c7e15d1e51ce7de7e62e591291a22b155a4179642b2d090c6a6119f6aeb9259bd47b53b587a2052df5614dec87c6cfc66553db7ecc59b22387f84218c6634369133afbddd035e8c3cb189795b75dafced0471129e9c6093fbf4c5b67799a0622dae666cb74a566c1b377bc71a0eba373586823bd8d719c8ae41c612fb01b8ebe2b9764660c71555dfdb9ab97586baac7d2daab0497b0903307d6766a48de5fe77754413001626c4f9de8b3d3f37b6e58d604fc2364f2de8aa7842d78273af0fb07d256c89323010000",
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
      "Wed, 22 Dec 2021 22:36:35 GMT",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-11-1640212585510",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b6f9b3014fd2bc8fbb8360112c8438ad628a55db4846c84b49aa6091973616e094e6d93adabf2df77314dd7aa52fb09dbf79c7bce7df0406e799591314979715783bcff702352724240d3025fffa8d5ed177f565ff65632143dbeffdb878fd3c90411bc6129badd9570aa442d19a8f166dd29a4a877540a718a894e1de7d4f1fbb6ebb8ded0f31c1b790aca7cc1ab5b64ffd27aa7c6ddee51bb5308519440775c7598d83ebd77f76e7727c50d30adba2f25bba8a2ba6f8b7e2a05a39a8b6ab259a3815a814c604b798916fe33b3f4ec65ea0ea7db4e81e03d6740191375a51b5b9882892ae7452d4d56327e20c6e6b30359078b60165b4c94f5b64a2aba85132ba39a26fa7e07d645b45a5af3f062152da7f17c1526ebd9e76039edcc568bcd325c5bd79f8328b0344d4b305c6b629d995b8817d4cf40695e19f5b8796e941f1b347f3d968680d20ada6032b07dea0ced519aa703960f7b5e9adb90a6c374e0d15e6ab3511ffa590a147946d4b06825aade80513a726902becb92bed3779361d6f3121f90eefb769ed919399c90df926b38e76a27146f3b44aea3791c2471b40967d3383025e4b42ef5796bac29e0b9478d0526b6ed20f08dba0e4d940b546b5a3e0fe3209acee2f955d04e79010565f7eb3b9c734e4b0588a6121ba8412e45864d23e174199c23d84cedeb31a8c8f8c70369fade3879d6f6277a8c436c2c6bf325eb389a8797c6ce117145cbda40f6ed8148604266e8f9f01371b8a66d0ef26d1344df49fb14410e122af6fe3c116c02effe6dc7d5472c2e3fca288d77dc1ea61a1126a1dd226e8a3db2479eebf8c480a57e15ebb9deb1674d8e26236ca1d28f15b5ab8f85b662b57a026110172034bd3afc03293778437a040000",
    ],
    [
      "ETag",
      "xsOkK6CuG3OrNo3ivz4e+A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:35 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1640212585510"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d93516f9b3010c7bf8bf74aa490255985d407d2656b241232421fb6a9420e3ea83be3a3b6c91445f9ee3bd32e9bd649f405eecebf13777fff39b11f520b16b1bdac9f3a30c77735b82f3ec8c076ca597ab5a82db08081e335918bcdb72799edf4fa363d1c793a79d87edddfc4d7d744d8f2011acea213ab24286159f4fdc4346f80da4a545da38b3e0b983bb6beb8cbb3d5e633e50d0a9f6fee92245e244b760e2e8d823b5ef4fc1bdaeecf017bc47d061518d025f8595a838f50ba955fd3f2a65530b2d899122cebe1fea036d8b5dc208ea8320ac351389f8e27e16476359b8563021596dc49d4c4deed683ee6d07195e14fda9285ef89307d4c1b57fdf3407529fa4d7cb8dae4f3693fe0df002f4becb42b06c14a1aeb9ed5fb0dbea8f02fa9f81b41ba2aa986a01ab4003344c9b6e04218b07690445bf0b6bd608b344d5eaba285412986c1831c00943b5c804f491aff4f5a32d81fad3ec6f9f215611dd9e682e4abf57297c7ebade7ee5f8cb0383ab05b83e42a0bde50e1787a35fb301f3f7bec06bdefe83b91331d04ace4f4abdc4ac7a28a2b0be75f9cd85ea288030000",
    ],
    [
      "ETag",
      "BNZqiRSnMHOvyaO2hPYbCA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:35 GMT",
      "Server",
      "ESF",
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
          "SELECT `first_name` as __result FROM `records` WHERE  `email` = ? LIMIT 1",
        types: ["STRING"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "ejervois0@example.com" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-12-1640212585510",
    },
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
      "536b4fdb3014fd2b91f771b44dd2a64d2b55d041362295026900a1696a1de7261892b8d80e1b42fdefbb71280f21c1a7d8bee7dc73ee234fe48e5729999084e7f735c8c76fb722217b0434cdf1b514d737c7655e8fafd310c6deecbb9cff88cea75344f086a568b929a0a3442d19a8c9c5b29b4b516fa814a283893a8edb718603db755ccff73cc7469e82229bf3ea0ed9375a6fd4a4d7db69777321f202e886ab2e13e5cb7befc1ed6da4b805a655efbd640f5554ef73d1fd4230aab9a8a6174b34502b902b28292fd0c22b334d0edea7ee725a7673043f700694315157bab1852998a8329ed7d264259327626cbe399065300f0e636b9d71a9f4aaa225ac2daaacd54a82aa0b6dfd8c4e4facb5042664aad6d6d571100596b536b6d6d6d4dab7e6e149185b0eaaa5a034af8c564c93021a9de776841f87d010a8a60adae06a640fa9e3dbe3244b462cf3fb5e92d990247e32f2683fb1d978008334018a3cdd64372c5a89ca4b90e7dafdd4cfc0e98ff03aa62337f5dc81ef6723b78f3df13d9f0dc9768ffc955cc311571ba178db1372158571b08aa38bc5e12c0e4c1919c5d28f5a734d116f7d6a2c7265db4dbd9fd4b66da25ca05ad3e4701107d1ec300e2f8376ae73c8297b5cdee364335a28403495d87b0df244a4d8387276ba0ce3f074319b23c30ceb6c875064f2fbe995103f6e4ca7b5f992651c858b5fc6c00e71498bda401eda03815b5c16c1957d00ff8c6fb32edbed1f64e162b619c9f945105d93f629820c2454eceb9922d804befcbf76cb8e585c7794511aefb8414c35224c42bb49bc6cccecd8e3a16d8f89014bfd21e60cfd5dbb9a1c4d4628a1d2cf15b5cb8e85b662b57a0161101760613ab7fd0ff56270536c040000",
    ],
    [
      "ETag",
      "moYhHmgu9YdIe95A+rLBRQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:36 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1640212585510"
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
      "0000000002ff2d90516f82301080ffcbed153220d319131fa6318e849181f3c12cc6d472220e38688b0b31fcf75d712fedddf5bbbb2fbdc34f516730875391b71daafe294793d82045dd9546f3d550ad111c402372263f5edb5b9c646117ce2e7b6fbac9d376f59c2c164c6879c14ac0fc0ee702cb4cc3fcfb0eb5a890db8e47354e64ccf48dad6cbfd230de705e5166f37817456fcb680dc36170e04aa714cfa8b0966827368aae284d6865b5a89a125d4d9d92a86184c7875c51d70845e472c5f503d79fbe78811f4c669389ef31589214a6a09ad9dd16788d2123ca947ed9157c06d418b2f6793c6f5c5eab02add3e19f5ef606f5a7225eadd16ef51e062bb256866d8dead00129f83bde0bf3c8873f9c34547c6b010000",
    ],
    [
      "ETag",
      "M7qvNQdIuI8hY06GgRqC/Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:36 GMT",
      "Server",
      "ESF",
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
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "64ad0ef211e84e5a0a158c4691a46e32018280412350149cdebd4e8ff0de13b034e56d4bbbeb995fc01b18986acfd259a22c49af8cd126a05ab18e4bcbe2771ddfb655b8469932e6fe48b606a9e9c3765957664d1f68734f6299889b772f9cc51923494c5d37a6d1f4ee8c78306168479ee7df20db5abbd38ed69a7ff80e9a7e3ddf579fd9d5456d553e82037c4709a785aa32818e97858e42351a14919bb0368f6db7d9f30a8782c45f35c9c902ba54c26576e246634a91feacc20a1d3e5c3fcfa16d208e6229af52818984da2a70cdbd93e144145964b96002f843960d6f69f9726b866d4fc07f02ed06c95f130e670d6fc0ef1f3aef2e4f23010000",
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
      "Wed, 22 Dec 2021 22:36:36 GMT",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-13-1640212585510",
    },
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
      "6b4fdb3014fd2b95f795b649db344da56a54258c6a341d690a7b688a1ce72633a471b01d1842fdefbb71280321c1a7d8bee7dc73ee238fe4869729999284e7b735c8874fd72221470434cdf175c87e7ecfabaff2ef7d205d59a4176e988dee673344f086a5e8ae2aa0ab442d19a8e976d3cba5a82b2a85e862a2ae3decdae39135b007cec4716c0b790a8aec9c9737c8fea375a5a6fdfe41bb970b9117402bae7a4cec9edffb77837e25c53530adfaaf25fba8a2faef8b7e2e04a39a8b72b6dda0815a818c6147798116fe33d3e4f875ea1ea7bb5e8ee03bce803226ea5237b630051365c6f35a9aac64fa488ccd1707b2f1cffd45d461a2a877655cd21d1c7552aa69ac1f2ae89c86eb5567199caec3d53c5aae8378b338f357f3de627dbe5d059bced5991ffa1d4d93020cb733eb1c9b5b8017d44f41695e1af5a8796e949f1ab47c3b968680d20ada60ec5a636a4f2c2fc912976593a193641624c924711d3a4c2ce68d609426409167440d8b96a2f4b289e7d0891d678e0df16834a431f5865e3c60947996e5b85e3222fb23722fb98613ae2aa178db2172152e233f8ec26db09847be2921a375a14f5a634d012f3d6a2c30b62c1b81efd4b56fa25ca05ad3f26510f9e17c112d2ffd76cae79053f6b0b9c53967b45080682ab1811ae44aa4d83412cc57fe0982cdd4be1d828a4c7f3d92a6ef8d93176d7fa64738c4c6b2365fb289c265f0c5d839202e69511bc85d7b20129890297adeff461cae699b835c6cfdf007699f42c84042c93e9e27824de0c3bfedb0fa88c5e54719a5f18edbc35423c224b45bc44db107b63776876362c052bf894ddcc1a1674d8e2623eca0d44f15b5ab8f85b662b57a066110172030bddaff03a94af8167a040000",
    ],
    [
      "ETag",
      "3cZXgpKrxwNr7rldQ7Rf4w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:36 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1640212585510"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d93614fdb301086ff8bf771a9d640db5591f8d042cbaa8596b5414c9a5064ec4b66e6f88ced145555fffb2e8175684c0a5f92bbf373caddeb377bf64b19c91276afcac71adcee4309e15b13acc1d73a787a59341e58c420f092c84fb7369bcfbf7e5c9d8fcbc70b9986efd34b5d9e9d11e1c54fa8384bf6ac50a0a567c98f3d33bc026a13a8ebcae46d16b1b0b34d7193ad17cb4bca2b944dbebc49d3c9349db143746c943cf0bce5dfd1767788d803deafa100074640338b75f800222c9a353dafac869ec7da09f0ac85db83d2616db943ec51a5179ff6e2d1a07f129f0cc7c361dc2750a3e041a121f66643f3b18081eb353ed1962c3e25c2b5316d5cb4cf2dd5956c3769c2c5321b0dda015f035c08ac4dc83bc142391f9ed5fb03bea8f02fa9f93b41ba2aa5bba0128c04d745299b73291d78df49a2cfb9b5476cba5aa56f5531d2a192dde05675003a6c8fc03c5d4dfe272d19ecaf5617936cf686f0816c7344b2c5d56c934daeae1beeeec508d35d007fed905ce5a13154dc1f8c879f47fd678f9d63e33bfa4e125c0d11139c7e952f2ab0a4e0dac3e137de70b19988030000",
    ],
    [
      "ETag",
      "/WpTFFK+OC8gqDdLtXBGlg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:37 GMT",
      "Server",
      "ESF",
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
          "SELECT `ltv` as __result FROM `records` WHERE  `email` = ? LIMIT 1",
        types: ["STRING"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "ejervois0@example.com" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-14-1640212585510",
    },
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
      "e24010fd2bcdde578152281412a21cf6b4098296a277b95c60bb9dd6d5d2c5dd2d779ee1bfdf742b9ec6443fb5dd796fde9bb7d32772cf8b840c49ccb38712e4e3973b119323029a66783afe7a360e77dfff76cee79341c16faffb9c2557a3112278c55274b3cda1a1442919a8e172d1cca428b7540ad1c0468d76b7d1ee756da7edb89eebb66de429c8d3292fee917dabf5560d5bad8376331322cb816eb96a32b179396fed9cd6568a3b605ab5de4ab65045b53e163dce05a39a8b62b45ca08152815cc186f21c2dfc6726f1c9dbd64d4e37cd0cc13bce803226ca4257b6b0051345cab3529aae64f8448ccd572f64e14ffd4964ad73bd5b5b5459ab950455e6dafa16ce2facb5042664a2d6d6cdb91ffa96b5367ed6d6c83ab6a6c14510596d944940695e189188c6395402cf3904efd3af085453057571d5b77bb4edd983388dfb2cf53a6e9cda10c75edc776927b6d9a00bdd24068a3c5d75372c5a8882328776dbbdd476bd24454e0f98c76cc7eec75e6a3b9eebf49c8e9d765cb23f22bf25d770cad556285e87416ec220f25751b89c4dc6916fc648298e7e5a9bab8678ed53e3902bdbaee6fd60b67d55e502d5aa748359e487e349145cfbf5854e21a3ec71f180579ad25c01a2a9a41bd0202f4482c191cbf9228882f96c3c4586b9a5cb034291e1cfa7ff84e8716b92d6e649165118ccce8c8103e29ae6a581ecea170277b825822bfb04fe18df664ff6fb5fc8c28dac3b92aba51ffe20f55108294828d8e7778a6053f8f4c73a6c396271cf514669fcc60d62aa126112ea4de29bcacc813de87b4e953d82a57e571b747a87b8aa1e5547d840a19f27aab71c07adc54af502c2222ec0cc24b7ff078ac5723c65040000",
    ],
    [
      "ETag",
      "ABGARvXz3HOC9nihV7icdQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:37 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-14-1640212585510"
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
      "4d",
      "6f",
      "83",
      "30",
      "0c",
      "40ff8b771c4c0541b521f500d3be24d40dba9ea6aa0a60181d609684550cf1dfe7d05d12db79b69f32c157dd1510405657df03caf1aa429d98204535345af1d553a7102c402d2a263d37d90ee5cefb6dbceba728f45b5c67e764b36142e59fd80a0826286b6c0a05c1c7049d6891db8e47b94c644c8fbda93cc6afe13ba72d1526ddeee3388ce207980fb30527ca522c516297a319d84b3a61ae5f8cab126ddfa0ad6890392a58e0e5a19234f44212d95cb11dcf76d6deca755cffd6f79d15830de542d7d431bbdf01afd1a44593d29955c161402e215b97cbf9c365d7bfbb715c6375f8e7a351a37a93c4cb159abdab8bc33d192fcdbe5a0e68412ef83f9e6b7dc9e73faef16ac46c010000",
    ],
    [
      "ETag",
      "42QNufS4zl4+GBA5me6bwQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:38 GMT",
      "Server",
      "ESF",
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
      "1dd04b7282300000d0bbb05647be86ee4265906a46ac5152374c4852a3c8471240ecf4ee757a84f77e0cca98502ad375212ae3cd18a9e5cfd82c9f43d2cf9f38b15844464fa838a936074dd470752c45f99ec075f070f9b18424dc559edb501bd32872cecc0f8685db21ad018ccdd34a974eb25445f39c9a5c1e9089650112d23c30049c2c838c439cdfb7859591051f4e69d4a17d8556bc9f2e25bbe31cd90ca4635adbf19e77bb63426ea6fe5ec71f6e67e3afba2abd4a1f94b70ddbbbdb7f961480a896f0fd2ce3557f73402f53ff690f577446f988eaad6387d2093789a58c89211ecda5152abbbcdcb6ebfb13e33f21d363235e1381a0ad688ddf3f72ea645d23010000",
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
      "Wed, 22 Dec 2021 22:36:38 GMT",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-15-1640212585510",
    },
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
      "00000002ff85535d6f9b3014fd2bc87b6d1248430291a2354a681bad212b21adb66942b6b9307704a7d874caaafcf75d4cd3b5aad43e61fb9e73cfb91f3c92dfa24cc9983091dfd750ed3fdd49464e08689ae36bd8fff2dd8e2e64fff25a2ee765cffdbbf747d793092244c35274bb2ba0a3645d7150e3cdba9b57b2ded14aca0e26ea386ec7190eecbed3773dd7756ce42928b22b51fe46f62fad776adceb1db5bbb994790174275497cbedf37befa1dfdb55f20eb856bdd7923d5451bdf7453f1792532d6439d9acd140ada04a604b458116fe335376f63a7557d06d3747f083e040399775a91b5b9882cb3213795d99ac64fc488ccd1707b20eae82596c7159d4db3229e9164eac946a9ae8fd0eacf368b5b416e1f92a5a4ee3c52a4cd6b3cb6039edce56579b65b8b66e2f8328b034650518ae35b1cecc2dc40beaa7a0b4288d7adc3c37ca4f0d5abc1d4b434069056d3019d943ea78b6cf3236e29977eab2cc06c63c3672e929b3b93f8041ca8022cf881a162d65093e638eef7a499f323f19a4b69d781ea40930eafbd44e33cff6c8e184fca98486b9503ba944db21721b2de22089a34d389bc6812921a375a1e7adb1a680971e351698d8b683c077ea3a34512151ad69f9228c83683a8b1737413be52bc829dfafef71ce192d14209a56d8400dd552a6d0acf77419cc116ca6f6f5185464fce391347d6f9cbc68fb333dc6213696b5f992751c2dc20b63e788b8a1456d200fed8154c06595a2e7c34fc4e19ab639c8f52688be91f629820c2a28f9c7f344b0097cf8b71d571fb1b8fc28a334de717bb86a447805ed160953ec91ed7b6e7f480cb8d26f6243c73bf6acc9d164842d94faa9a276f5b1d056ac56cf200ce20284a657877fc8643e807a040000",
    ],
    [
      "ETag",
      "N2KZ0RGo2HQoMDn/5zy97Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:38 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-15-1640212585510"
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
      "30",
      "10",
      "c7bf8b794db566346544da43cb0a2b64ed6833f180a6c8b32fc1c5f119dbe954aa7e772ed9e8268694bd2477e7df29777fffb3673f95912c6577aafad580dbbda9207c6d8315f846074f2f8bc6038b18045e1179b25bdacb13fc7df17ef32dd49fb3f24b699bfbf37322bcf8013567e99e950ab4f42cfdbe6786d7406d0275539ba2cb221676b62daef3d57cf189f21a659b2f6eb26c32cd66ec101d1b250fbce8f857b4dd1e22b6c1bb1594e0c0086867b10e3720c2bc5dd3f3da6a18786c9c00cf3ab83ba81c36963bc4015506713288c7a3e1697c9a9c25493c2450a3e041a121f6664df3b18081eb15ded3962c7e4b84eb62dab8ec9e5baa2bd96dd286f3453e1e75033e07b810d89850f482a5723e3ca8f7177c54e15f52f3578274554af741151809ae8f52b6e0523af0be97445f706b8fd874b9cc5eaa62a44325fbc1adea0174d81e818fd972f23f69c9604f5a5d4cf2d90bc207b2cd11c9e757b3753eb9ba6eb9db47234c7701fcb543729587d650f1707496bc1b0f1f3cf6015bdfd177d2e01a8898e0f4ab5caac0d2926b0f873fe255317088030000",
    ],
    [
      "ETag",
      "/yOpH/ozD9jWtmJLfKfpuw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:39 GMT",
      "Server",
      "ESF",
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
          "SELECT `ios_app` as __result FROM `records` WHERE  `email` = ? LIMIT 1",
        types: ["STRING"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "ejervois0@example.com" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-16-1640212585510",
    },
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
      "536b4fdb3014fd2b91f771d0a64ddf52050c328854da2e4941d334b5b6739319d238d80e1b42fdefbb71280f218114298eef39f79cfbc823b9154542268489ecae02f5f0e546327240c0d00c6f678b72952657dfa25e7261be7aac5a86e7cb6c3a4584a8599a6ecb1c0eb5ac14073d5945ad4cc9aaa44aca434c74d819e0d373bb9d6e7fd4ef775ce469c8d399286e91fdc798524fdaedbd762b9332cb819642b7b8dc3edfb7efbbed52c91be046b7df4ab65145b73f163dca25a746c862ba8ad040a541ad614b458e165e98093b7e9bba25e8b69521f85e70a09ccbaa30b52d4cc165918aac52362b993c126bf3d58144fecc3f8d9d8d907a4dcb72e350edacd70a74951be77bb8b874360ab85489de38d7177ee83bcec67ada3853e7c899059741ec74502a016d44618562ca72a8459e7a11bc9f404da0866a6882eba13ba09d913b66291bf274e4f559ea02632336ec538fb97cdc835ec28022cfd4d92d8b16b2f0b8475348077cecd16e3218e099f5b1a3e3a43b641ef45c9726a9e776c9ee80fc55c2c099d0a5d4a26908b90e83d85fc7e16a7e7a12fbb68c9462e9678db9ba88d73e0d16b976ddbade0f6adbd5512151adee70308ffdf0e4340eaefc66a833c8287f88ee70ac29cd35209a2aba0503ea5226d838b25c44411c2ce6273364d8492df7084d26bf1e5f08f143693b6dec9b447118cccfad813de28ae69585dc37070237b8295268f718fe59df765776bbdfc8c2ad6c32921f2b3ffc499aab10525050f0cf678a601bf8f4e7da6f3a6271d751461bfcc60de2ba16e10a9a4d12dbdacc9e3d1e7bbd1eb16065dec5fa9dcebe5d758e3a236ca1304f15359b8e853662957e06611017606e3bb7fb0f4c2b062f69040000",
    ],
    [
      "ETag",
      "LOpUfdVBS4dHt+3buPRGPg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:39 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-16-1640212585510"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff2d90614fc2301086ffcbf9758b1b3a6396f0017411cd0202e18b8690526e63b8ede6b5539685ffee759834edf5ed73f7be690f5f457d8018f645fedd22773739daa52b5668dad21a391aaa0d820768552ee46dc07c9a3ddf45bc7ea397f478ce3fcec9723c16c2e823560ae21eb202cb8381f8b3875a55286dbb1d0f1305b35de394e962912693b908151d9c30dfa4e9649a2670d95e3c38d17e851932d61addc886e984dabebab446554d89bea196351a18e0e121676a1bc544be287ef820eb3e1885a3e8318ac240c092b4b205d5c26ed6203696ac2a57f42b6121148087527267c3fe23b2e5165da6ed3f3ded2c9a7726b136e85c836b822772a9aca4751d1e6825ff312becf57ef9036f5c0cdb6c010000",
    ],
    [
      "ETag",
      "/0rrjHD35rSJoGLhxgZxEQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:39 GMT",
      "Server",
      "ESF",
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
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "646d1d14f9a43ba0a64aa5148315b3c9f0898244888040e8f4ee757a84f77e409ca6ac6d695797ac02af40c64b384fe7896245bd3285fe96555d229a82bc23aae7c3ceda483942e57cf48482a6f1ece32311b76c514176958beae0c6db4769eeb272dfac5de3a6190e09d436d5379de9926c7b437e78b922c3a31cf6779a4a7fc8ee7d3b60b2bfe074c52dead96722d0d2091e53f8216d5c1789da404f77898f86151eebb8aeef7a1f0d9a4abe0a13055ab4ccd71c178e391ede0eaea95e6bc923ef73cabb1747b838304f171a9fecefaeb4029e85250ff8c60233c0465134aca5c5d3ad6a10cec07f02eda460cf099bc50d6bc0ef1fdc8c496223010000",
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
      "Wed, 22 Dec 2021 22:36:39 GMT",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-17-1640212585510",
    },
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
      "02ff85536b4fdb3014fd2b91f795b649fa4a2b55a32a0122b5e94853d0364d91e3dc6486342eb60342a8ff7d370e652024f814dbf79c7bce7de499dcf12a235392f2e2be06f9f4ed56a4e48480a605bec22f57dfa7c145b498f0feaddc3e3edeafe4d56c8608deb014dded4be828514b066abadd740b29ea3d9542743051c719779cd1c0761d77e80d878e8d3c0565bee4d51db2ff6abd57d35eefa8dd2d84284aa07baeba4cec5edf7b0f6e6f2fc52d30ad7aef257ba8a27a9f8b7e2f05a39a8b6ab6dda0815a814c6047798916fe33b3f4f47dea2ea7bb6e81e007ce803226ea4a37b630051355ce8b5a9aac64fa4c8ccd3707b2f197fe22b69828eb5d95547407275646354df4d31eacf368bdb282f07c1dade671b00e93cde2d25fcdbb8bf572bb0a37d6cda51ff996a66909866bcdac53730bf182fa1928cd2ba31e37cf8df24b83828f63690828ada00d26637b441dcf9ea4793a66b9d71fa6b90d69eaa5e321eda7369b0c6090a5409167440d8b56a27246e321e4fd3cc9733a48061ed8893770bc6490d17c927aae977a437238218f926b38e36a2f146f3b446ea220f69338da868b79ec9b12725a97faac35d614f0d6a3c60213db7610f8495d8726ca05aa352d0fc2d88fe68b38b8f6db292fa1a0ec69738f73ce69a900d154620335c895c8b069249caffc33049ba9fd38061599fe7e264ddf1b276fdafe4a8f71888d656dbe641347417861ec1c11d7b4ac0de4a13d10094cc80c3d1ffe200ed7b4cd41aeb67ef493b44f11e420a1625fcf13c126f0e5df765c7dc4e2f2a38cd278c7ed61aa116112da2de2a6d817f6c8b6edc98818b0d41f62aeeb1e7bd6e46832c20e2afd5251bbfa58682b56ab571006710142d3abc33f8a3d32f37a040000",
    ],
    [
      "ETag",
      "eZ2tqbIGRC9i3jrUwwqMrQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:40 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-17-1640212585510"
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
      "6b",
      "db",
      "30",
      "10",
      "c6bf8bf6720ec4cd9f16435f385bd685ba4996b8d0318a51a5b3a74ed679929c1142befb4e6e978e75e0beb1ef4ebfc3778f1e1fd80f65244bd883aa7eb660f7ef2af05f42b001d76aefe8d5a071c022069e5744ae47a3f84a5fd7b371f3fe2edd965ec45fafabcb4b229cf80e3567c981950ab4742cf9766086d7406d02755b9ba2cb22e6f74d286ef3cd627945798d32e4cbdb2c4b67d99c1da353a3e49e171dff86b6fb63c41ef1610325583002c22c8dc547107e11d674bc6e340c1cb65680631ddc1d5416db865bc4015506f1f9209e8e8767f1d9e462328987046a14dc2b34c4de6e693ee6d173bdc15fb4258b4744d82ea68dcbeeb9a3ba92dd26215c2cf3e9b81bf06f800b81adf1452f582aebfc937a7fc06715fe25357f234857a5741f54819160fb28d5145c4a0bcef592e80ade34276cb65a65af5531d2a292fde04ef500daef4ec0a76c95fe4f5a32d88b561fd37cfe8a709e6c7342f2c5cd7c9ba737ebc0dd3f1b61b6f7e0d616c9550e82a1e2e1f862723e1d3e79ec0306dfd177126f5b8898e0f4ab7c569e2525d70e8ebf014d93dc7988030000",
    ],
    [
      "ETag",
      "P331GlKmB4p+XASftc1YKg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:40 GMT",
      "Server",
      "ESF",
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
          "SELECT `date` as __result FROM `records` WHERE  `email` = ? LIMIT 1",
        types: ["STRING"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "ejervois0@example.com" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-18-1640212585510",
    },
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
      "85536b6f9b4010fc2be8fa35b6c1c1065bb292c8a10d92e3a418c7aaaaca3e8e859e039c7b77e4a1c8ffbdcb11e7d14ac927e0766667766f7822b7bc4ac998243cff53837cfcb215093922a0698ea73a7870e7ab584f57f945b95a6ccb8b651ddd4f2688e00d4bd172574047895a3250e3e5a29b4b51efa814a2838d3a8edf7186aedd77fa037f30706ce42928b219af6e91fd5beb9d1af77a07ed6e2e445e00dd71d565a27c39efddf57b3b29b6c0b4eabd97eca18aea7d2c7a5208463517d564b94003b502b98692f2022dbc32d3e4f47deb2ea7653747f01d6740191375a51b5bd882892ae3792d4d57327e22c6e69b17b20866c134b63629d5b0b1a8b2d66b09aa2eb4f535babab436129890a9da58ab8b200a2c6b630c6dac897562cdc2cb30b61cd44941695e1995982605340acf8b08ff5f7f43a09a2a688b6bcf1e52c7b7474996782cf38f0749664392f88937a0c789cd462eb869021479bae96e58b4129507c7dec0775cd71bbabecb7cd7a65e36f4467d2fa17d4a7dd74f59320087ec8fc8bde41aceb9da09c5db6d905514c6c13a8e96f3e9591c9831328aa39fb7e69a21defad438e4dab69b793f986ddf54b940b566bde13c0ea2b3691cde04ed8dce20a7ec71f107ef34a385024453494bd0202f458a8b23d7578b300eafe6673364986bba3e201419ff7c7a25c48f3bb3696d9e641147e1fc9b317040dcd0a23690bbf685c0166322b8b24fe1c1f83641d9ef7f210b23d97624df9741f483b447116420a1629fdf29824de1d33feb1073c462d0514669fcc60431d58830096d9278d99879660f6d7be40e88014bfd6fcdb13dffb0aea647d3114aa8f4f3446dcc71d056ac562f202c6200e66673fbbf6d23e17b66040000",
    ],
    [
      "ETag",
      "tEx4NWTtCWgHmWSjmHUuRw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:41 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-18-1640212585510"
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
      "6d6bc2301080ffcbedab85b4ac5b27f8419da05086763a1c4324c6b32f6b7b5d924ea4f4bfef52f725b9bb3c77f7900ebef3fa0c6338e5e94f8bfaf690a2ddb82041d396d6f0d5506d10468056a64c7e162f72b589b2ebf37cdb64aa5d2ff7c5473a993061548695847107971ccbb381f15707b5ac90db8e473d4c64ccde1a57799d6e179c557476d9db2e8ea7b37801fda11f4141a7042fa8b156e8e6359a0a5476e5548dac9a123d43ad5668608087875453db484de471c5f323cf7f7a14811f845118fa82c19294b439d5cceede81d758b2b24ce8caa6e033a08790a52fc3f9cbe54004c21381277c6776f8ef99dd2c9ab5261630e8768bbbc79c9c9b6567ab5b1c8192fc25cbdcdef3fe0f96495ad06f010000",
    ],
    [
      "ETag",
      "Yj9aIQ8hw7CTphcuPHXjVg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:41 GMT",
      "Server",
      "ESF",
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
      "4b7282300000d0bb64ad0ee29098ee00a32022185152360ec42058f0138431747af73abd467d7778df20e55c34cde171fd1217f00154aae3111f659ac93aad8fc2e57cc95a19314aa55bb41bcff350b430eb5c6f690153c9902162e79c4c693acd73acfa5847da67cd0377ed13c32a51ce56eb55474c49753cc9a1be9b8c49908f7185adbdadc6b4a2b05774e642d25d8b40d9d4bf5fd0b37ed43239d1db460d61e838c438994542a0bd5f77a88b6cc32b1616abb97f1149359b25654b8f686bafeef159d778ef98d950055bdac0b062d26fc37607ab2c99cb58eb8e64bf430af1d1dbdbbf0306403c6fa514cda17c6d9f18180fc05ffdc343ddc4ebbf25522924f8f905db72706619040000",
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
      "Wed, 22 Dec 2021 22:36:41 GMT",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-19-1640212585510",
    },
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
      "ff85535d6f9b3014fd2bc87b6d0269124222456b96d02d52423a42da4dd3848cb930b70453dbb4abaafcf75d4cd3b5aad43e61fb9e73cfb91f3c921b5ea66442129edfd6201f3e5d8b849c10d034c757a5a32f45d8bffdb1b81aa4d2b9d8fc5d28b89f4e11c11b96a2fbaa808e12b564a026bb6d3797a2aea814a283893abd71a7e70e9cd3dee9d01b0e7b0ef21414d98a9737c8fea375a526b67dd4eee642e405d08aab2e13fbe777fbeed4aea4b806a695fd5ad2461565bf2ffab9108c6a2ecae96e8b066a0532863de5055af8cf4c93b3d7a9bb9ceebb3982ef3803ca98a84bddd8c2144c9419cf6b69b292c92331365f1cc8d65ff9f3c862a2a8f7655cd23d9c5829d534d60f1558e7e1666d2d83f34db89e45cb4d106fe7dffcf5ac3bdfac76eb606b5d7df343dfd23429c070ada975666e015e503f05a57969d4a3e6b9517e6ad0f2ed581a024a2b6883f1c87169cf73c649968c58e6f58749e6409278c96848fb89c3c60318a40950e41951c3a2a5280158daa7d48bdd91ebc6833eedc55e364e633a4adde1381d785e9291c309b9975cc382ab4a28de76885c85cbc88fa37017cc67916f4ac8685de8456bac29e0a5478d05c68ed343e03b751d9a2817a8d6b47c19447e389b47cb4bbf9df20a72ca1eb6b738e78c160a104d253650835c8b149b4682d9da5f20d84cede2185464f2eb91347d6f9cbc68fb333dc2213696b5f9926d142e83afc6ce1171498bda40eeda0391c0844cd1f3e137e2704ddb1ce4fbce0f7f92f629840c2494ece37922d8043efcdb8eab8f585c7e94511aefb83d4c35224c42bb45dc14fbc4761d3cb8c480a57e131b8dfac79e35399a8cb087523f55d4ae3e16da8ad5ea1984415c80c0f4eaf00f641f433d7a040000",
    ],
    [
      "ETag",
      "stTBlR3qXDW4dr0POxDsew==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:41 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-19-1640212585510"
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
      "db3010c7bf8bf79a4a0d6b0a8bc443bbb52352da421b78604291892fc1e0f882ed74aaaa7ef79d0394694c0a2fc9ddf977cadddfffecd993d482c5ec5e56cf2d98dd970adc950fd6605be52cbd1ad41658c0c0f18ac868661e9ed57c94dcde9c5ecdc345b882725a9d9f13618b07a8398bf7ac94a08465f1af3dd3bc066a2b50b5b5cebb2c606ed7f8e2265b27cb9f94d7287cbebc4ed3c9349db143706c14dcf1bce33fd1767708d823deafa10403ba003f4b63f0110a97f8352daf1b05038bad29c0b20eee0e2a836dc30de2802a83f0db201c8f8627e149741645e190408505771235b1d71b9a8f39745cadf1376dc9c2af44982ea68dcbeeb9a5ba14dd263e4c96d978d40df837c08b025bedf25eb094c6ba17f5dec05715fe2515ff24485725551f54811660fa28d9e45c0803d6f6926873de34476cba5aa51f55d1c2a014fde056f600ca6d8fc03c5d4dfe272d19ec5dab1f936cf681b08e6c7344b26431db6493c5a5e7ee5e8d30dd39b09706c95516bca1c2e1e82c3a1d0f5f3cf61dbdefe83bb1332d04ace0f4ab5c48c7e2922b0b873fba85d66288030000",
    ],
    [
      "ETag",
      "5ErhqlF4IZV7QF1M1OefBg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:42 GMT",
      "Server",
      "ESF",
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
          "SELECT `stamp` as __result FROM `records` WHERE  `email` = ? LIMIT 1",
        types: ["STRING"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "ejervois0@example.com" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-20-1640212585510",
    },
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
      "0002ff8553614fdb3014fc2b91f795366e9aa6a552055dc9585069214d41db34b576e26486242eb6d351a1fef7bd38948190e0532cbfbb77f79e2f4fe89e97091a22cab3878ac9dd973b41d111629a64704bbef6b7f30b673ef979fd783ebe982405d9d9e3d10810bc6629526c72d652a2923153c3e5a29d49516d8814a2058d5a0e6e753c173b1da737e8f53a18788ae5e99497f7c0fea3f5460d6dfba0ddce84c87246365cb56351bcdcdb5bc7de4871c762adecb79236a828fb63d1935cc44473518e960b3050292657ac203c070bff99093d7ddbbacd49d1ce00bce53123712caa52d7b6a0452cca946795345dd1f009199baf0e68e14ffd4964ad95869e6b8b286bb5924c55b9b6be85f34b6b2d592c64a2d6d6ed773ff42d6b6d1cadad9175624d83cb20b23a209430a5796964224273564b3c6f2278bfff9a403451ac29aefad8239d013ea629edc7e9a0dba32966940e68bf47ba14c7c72e7313ca08f074ddddb048294a42069dd4ed326740b1e362af8fbbd8a51e763c4a130ff7d2c4a5d8c329da1fa1bf926b76c6d54628deac03dd8641e4afa270399b8c23df8c911218fdac31570ff1daa786215718d7f37e30dbbeae72016af57e8359e487e34914dcf8cd934e5946e2dde2011e3525b962802692144c33792912581cba9a2f822898cfc653609877ba3a20141afe7afa4f88761bb3696dbe681185c1ecdc1838206e485e19c8b63920760739115ce153f6687c9ba4ecf7bf8105996c3aa2eba51ffe40cd55c8522659197ffea60036854f7fad43ce010b490719489fe690a058d522b1644d9278519b7966c3abf6b0f9313591fa5dcd73bdc3baea1e754756b0523f4fd4e41c066dc42af502822204606636b7ff07d7d6cede67040000",
    ],
    [
      "ETag",
      "aB7vOJ2OCZQxGAJCdmay/A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:42 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-20-1640212585510"
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
      "0000000002ff2d90db6e82401086df657a5968800851122fb031114fb12a174d63cc0a23c50243779736c4f0ee9dc5deece1df6f66beec1dbe8a3a83102e45fedda2ec9e72d46fe6b047d5965af1d650ad102c402d72269fcb264ee2ed6a81cbf720af565db0c4209a4e9950e9275602c23b5c0b2c3305e1c71d6a5121979dcf72e8c898ee1a931ce3cdfc708c363b8e2aca4cb44dd6eb68b69e437fea2db8d1658f579458a7689a36926e98ead8f82a513525da8a5a99a282011e1e72496d232491cd89ed39b61b8c1ccff5fcb1efbb0e8325a5421754339b1c80c768d2a2dcd32feb82cb801c8e6c7e1dd61f13bff863c7f727ee64349f18b9d37fd9acd3a87692d841a119ef3c545ec9e869d6d6b2450b52c15fb328f4e3deff01d400e28777010000",
    ],
    [
      "ETag",
      "+lpIUINKHeJY6gmKy6Je6A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:42 GMT",
      "Server",
      "ESF",
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
      "0000000002ff1dd04b7282300000d0bb64ad4e0445e80e91af226a4244371988a1205a3428129cdebd4e8ff0de1ba48cf1a6a18fbae23fe00bc85431466c94413369618f378725e94d861c4af46cc8ee6d851a03f72ffbd959f4eea86ae739fb9d19c5414fb0032fabba0f6a315451520919bf6649bb08c9e4722d365e2505ad48763014e146114be68e848676ca74f48d99459aa90ed7c9d6c308c3bad0d4d30685636d2ac679ebeebcd05f69e3c04acc7646ef51d95cad8b2d85b6a8ca89b2b7e8e3f05c0fa15ba0a35d28931b828b1cfb962c8ee9f2bc3ee75b623f65095d2fe57ec1ca580b423000bcbb958237b4fcb8d5a9610cc07f027dc81bff4ccc792ab800bf7fc6d9ce5f23010000",
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
      "Wed, 22 Dec 2021 22:36:43 GMT",
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
      jobId: "grouparoo-job-21-1640212585510",
    },
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
      "14fd2bc87b6d0224909048d19a2574454ac80aa4d1344dc81843dd02a6d874eaaafcf75d4cd3b5aad43e61fb9e73cfb91f3ca13b56a5688e1296dfb7b479fc72cb137486a8c439bc86177f6fb3553dce6b71b85f7f3be4beed5e5e2d1680601d4be0b22ee840f0b62154ccf7e1306f785be386f301241a8ccc8139b18c9139b21ddb360de0095a641b56dd01fb46ca5acc75fda43dcc39cf0b8a6b268684972feffac348af1b7e4b8914fa5b491d5484feb1e8d782132c19af16fb100cb48236312d312bc0c27f669a9cbf4d3d64b81ce6007e60846242785bc9ce16a420bcca58de362a2b9a3f2165f3d50185eec65d451ae1455b5671854b7aa6a558e2583ed654bb08765bcdf32f76c17619793b3f0e5797ee76395ced36fbad1f6a874b3770358993822aaeb6d0ced5cd870be8a754485629f5a87bee949f1be4bd1f4b47006941fb603c3526d8748c599225539239633bc90c9a244e32b5f13831c8cca2569a500c3c25aa58b8e2958529c6d3c934368dd124b64c3b8b1dc39cc6b633c5336796a4a961a1e319fad33049d74cd45cb0be43e81078911b47c1de5f2d23579590e1b690ebde5857c06b8f120a8c0dc304e007751dbb28e3a0d6b5dcf3233758ae22efdaeda7bca139268fe13dcc39c385a080c60d3450d266cb53681af2975b770d6035b51fa7a040f35f4fa8eb7be7e455db5fe8110cb1b32cd5178551e0f9df959d13e21a17ad823cf4075483e51ba80f5c1f7f031216b5cf82aef66ef013f54f01cd68432bf2f94401ac029ffe6fa7e5072cac3fc8080977d81f223a11d2d07e8f982af7993d31c623cb460adcc87731cb744e5deb72741969492bf95c51bffc50682fd68a17100461057cd5ade33f02c5b9507c040000",
    ],
    [
      "ETag",
      "SFzjfCp3gpsWqDBWgN5EHQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:43 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-21-1640212585510"
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
      "1085df65bc2d91222069c24551fe12402cc51b43c8b21da0d876eaee564308efee6c45346aa237db99e937d339a77b80a7388bc08355bc792e50ed2f3668ee6d10a02e12a3f99153a6111c4023364cf6073bd1e95d7633f970a55ee35a3195a4fc769b092db7980af00eb08e318934788f07c8448adc262929d26c59660e987d6e8bb330184efa9ca714d97c321f8dfccea80b47e7dc1809239625ff8fb6c5d1811dad025ca3c24ca2dd2557b443698656a616699e604553a1246a28e1f2c54651910b4554e14aa5e656dc66bd5a736b8d56a3e156194c480a1353c6ec7cc6fb81212392805e592534195065c882d7e5f9c2e5382a85d87038099bf572bfaf8042f62e5afec9e5bcee56f05ff8c04e0e7ce7444a4566ce546f74e7ff368e2dfd1c75eb87dd1f84366cd4190987e3ee2cf4c753cb2d4ed23b7b837aaa887dd4682d74abf556e3ba597d77f586acd3fc1dcfa8021d90822fc72036e0ad45a2f1f806cea7169e7a020000",
    ],
    [
      "ETag",
      "GHjaBF/EncV3rwi2uPcorA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:44 GMT",
      "Server",
      "ESF",
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
          "SELECT COALESCE(AVG(`amount`), 0) as __result FROM `purchases` WHERE  `record_id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-22-1640212585510",
    },
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
      "0000000002ff85535b4fa34014fe2b64f64513db02a52d6dd2b8b5a24b525bb745cd66b36987e180a3c0e0cca0694cfffb1ec07a8989bec030e7bb9c1bcfe49ee711199190270f25c8ed8f3b119223029a2678db3dcdce389cd8f7dbc5ed2a1c8a5fd9c974fa341e2382572c45b322859612a564a04657ab762245595029440b855ab6ddb2fa8e695b76cfedf52c13790ad278c6f37b64df6a5da851a7b3f76e27422429d082ab3613d9eb7de7d1ee1452dc01d3aaf3d1b2832eaaf3b5e9712a18d55ce4e3ab1526502a906bc8284f3185376614fefc28dde6346b27087ee40c2863a2cc7595164a3091c73c2965ad4a46cfa44ef3dd81acbc99370d8ce96232f35653ef60727d7eb0a159a5b1393c32cc43832a63bd96a0ca541b67cbc585b129d0f6962a501be3e697b7f40c6323810919ad79b431c6c6b131f32ffcc0b030830894e679ed1fd03085cafba545fee7c15404aa51ba09ae07669f5aae390ce370c062b7db0b6313c2d00d073dda0d4d3674c08942a0c8d3957acda23956dd65835e68f507ce208e5dd3e93ab61b41cf19f6dd380ecdc1d07218f4872ed91d9127c9359c725508c59b3e919ba51f78eb6079359f4e02af2e23a6d880d326b9aa88f7796a2c726d9a55bd5fd4b6aba25ca05bd5787f1e78cbc934f0afbd66d6334828dbae1e70da314d15209a4a9a81067921226c1cb95cacfcc05fcc273364d403bcdc231419fd7d7e2304dba2eeb4aedf9557dfa9fdf7806b9a9635e2b139108bec76ff10817bd990c9ef2b6ff98734574b884142cebe1f1f82ebc0b7bfd77ed7118bdb8e364ae3372e0b53950993d02c0dcfeaf41a76df74f0416ab0d49f6276b7bbef4ca551294206b97ea9a8d9752cb4312bd52b088338ebb93f3fc7e87fba8011b76b040000",
    ],
    [
      "ETag",
      "3DmFieB2kyOhSb9oHmBCCw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:44 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-22-1640212585510"
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
      "02ff3590df6f82400c80ff97ee553621e21c890fb86958c27ec8e6d362cc8985e180b2bba231c4ffdd1e6e2fbdb6f7b5f7e53af829ea1d04b02df2df16f5e926475eda2441d3966ce468a83608034056b9900f4ff94b46b33b3ec46eb88ce68bfae847e1742a8449bfb1521074901558ee0c045f1dd4aa4219db6c74bf51303e35b6b388dfc24f292bdad9f27515c7e12c9ec3797d1ec09eb60966a8b14ed12e6c34ed31e567eb6a54d594e8186a758a067ab8bfc835b58dd2448e741ccf73dcf168e8b99e3ff17d77286049a9e2826a61571f20cf30b12a133a8a2ab802e83e15ebac8f07dbbe1d7bfebd3bf226ffd11aaeff66672746f3ae49440c5a87e1d5e791ac238b3beb1607902af99ba8e06b7dbe00d66abe5978010000",
    ],
    [
      "ETag",
      "9DgMfoB/tvL1AQHEFnw5HA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:44 GMT",
      "Server",
      "ESF",
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
      "0000000002ff1dd0c97282300000d07fc9d93a6814a537416551c4854d2f99240405654b14219dfe7b9d7ec27b3f0053ca8440cfeace4af00d7a3cd68674489445dc2ad2dfdd2af32a83757a90732f7827ac933e8ed5c8dacfa37264c075dce085f40308f1ea386b5b7d137077337ebcdee275262417a22f1577c6b7a6f1885835cadb4dbaefccad3ab9236e37655a6887ba9ebb23e29dd69c121a91ac837dd358c5174d35c3d8f255728a2991373b0ba7c52a0a7d4b75ba9de8bcfccc1c17c9a412baebc1034c5d0dd98eb354cfe5a5a03b8a26366e2ea91993e5a5ce29ab7b51f47178a24fe5780503c0ba3ae34ca0ece386534d1b80ff04f4ec6bf699d019e68c83df3f0a9cb12423010000",
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
      "Wed, 22 Dec 2021 22:36:44 GMT",
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
      jobId: "grouparoo-job-23-1640212585510",
    },
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
      "00000002ff85536b4fdb3014fd2b91f771b479b4216da56a546d804e6dba2529689aa6c8716f82218d43ec3021d4ffbe1b873210127c8aed7bce3de73ef244ee78b9231392f2fcbe81faf1cbad48c9090145737c854ccdbe6fca0bb5c8cf235b3af3c557d3994da788e02d4bd27d55404f8aa6662027dba89fd7a2a9682d440f13f59c41cf3e1d5a8eedb823d7b52de44928b2152fef907da3542527a679d4eee742e405d08acb3e13fb9777f3c131ab5adc0253d27c2b69a28a343f16fd5608461517e5741ba18146429dc09ef2022dfc67eed2b3b7a9fb9ceefb39821f3803ca98684ad5dac2144c9419cf9b5a67259327a26dbe3a90c85ff9f3d860a268f66552d23d9c183baa68a21e2b30cec3cdda5806e79b703d8b979b2089e697fe7ad69f6f56db751019d7977ee81b8aa60568ae3135cef42dc00beaef402a5e6af5b87d6e959f1bb47c3f969680d212ba60e259a7d41e59e3344b3d968d066e9a5990a6a3d473e920b5d87808c35d0a14795a54b368294af0069eb5b3ed840138c99065908c1d48136a7bcc1d8c6ddbb33d7238217f6bae60c1652524ef3a44aec365ec2771b80de6b3d8d72564b429d4a233d616f0daa3c20213cbb211f8415d8736ca05aab52d5f06b11fcee6f1f2caefa6bc829cb2c7e81ee79cd14202a2698d0d5450afc50e9b4682d9da5f20584fedc73128c9e4f71369fbde3a79d5f6177a8c436c2d2bfd25511c2e830b6de788b8a245a3210fdd815468f906eb43d7873f88c445edb2909f5b3ffc45baa71032a8a1649f4f14c13af0e9ff765c7ec4e2faa38c5478c7fd61b2156135747bc475b9cfec536be8b9a744836bf52e3672c7c7aeb539da8cb087523d57d42d3f16da8935f20584415c814077ebf00f676606a97c040000",
    ],
    [
      "ETag",
      "eftAJOnGtDgFS1s2CD+/2A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:44 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-23-1640212585510"
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
      "00000002ff8d92dd4ec2401085df65bc2d09ff90265e14042501045aae0c214b3b40b1edacbb5b8110deddd98a68d4446fb633d36fa6734ef704cf7116810bab78f392a33ade6cd04c6d30439d2746f34352a6111c40233696f47cbd97999c477dd59287eef830af55a7b7b74ce8708ba900f704eb18934883fb74824ca4c86d2125799a2d8bcc017394b6e807b3c1f89ef394229b8fe7c3a1d719f6e0ec5c1b2361c4b2e0ffd1b6383bb0a3d50cd7a8300bd1ee2215ed3034032b538b542658d294ab10351470f162a32897421195b852aad64a9566bd5cad541bed46a3526630a15098983266e73eef07868c4866b46795d0644015210b5e17e72b97e3a81062c3c13868d68bfdbe020a4352d1f24f4ef2ba5bc17fe103bb38f09d1329e599b952fde1a3f7db38b6f473d49d17f47e10dab0515724188c7a7ee08d26965b5ca4778e06f54411fba8d15a5829d7db8d56b3fcee6a97acd3fc1dd7a81c1d08055f8e87d880bb1689c6f31b3cbc2ffd7a020000",
    ],
    [
      "ETag",
      "bASswpnpUdFr7pxCNxU32Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:45 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-24-1640212585510",
    },
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
      "0002ff85535b6f9b3014fe2bc87bd9b426e112121229eaa294ad4c69d212d26a9aa6c49803750b986293adaaf2df7780a617556a9f303edfe5dcfc406e791e9131097972574179ffe94684e48880a209debabb192b405cfdcbbd957fbb3cfd7951985fa793092278cd92342b52e84851950ce478bdea26a5a80a5a0ad141a18ed9ef1883be6e1aa6edd8b6a1234f421acf797e8bec6ba50a39eef50ededd448824055a70d965227bbaefedcc5e518a1b604af65e5bf6d045f6de373d4e05a38a8b7cb25e61029584720319e529a6f0cc8cc26fafa5bb9c66dd04c13bce803226aa5cd569a1041379cc93aa6c54c9f8813469be3890953b776781365bae17c1e72dcd6af2f68b46a5b6d99420ab5469dffde599b62dd0eb9a4a905bedead4f55d4ddb96c044196d78b4d526dab136f7cebc4033d03602a978de9806344ca1367cec8bf7761a35812a946e839ba13ea086a38fc2381cb2d8b1ec30d6210c9d7068532bd4d9a80ffd28048a3c55ab372c9a8bdc648e69dbcc01c78a46966e9b238b465477a2c81e3943231eea86053658647f44fe965cc109978590bc6d0eb9f2bdc0dd04fe7a319b066e53464cb101276d7275112ff35458e446d7eb7adfa96d5f47b940b7badbde2270fde92cf02edd76c0734828bb5fdde188639a4a40342d69060aca331161e3c8f972e505de72319d23a399daf90121c9f8f7c33321b82f9a4eabe65b7b0dfa8dff017049d3aa41ecda0331c87eff0711b88c2d995cac5dff1769af7c88a1849c7d3c3e0437810fdfd461c1118b2b8e3652e13f2e0b93b5092ba15d1a9e35e9b5ec816edb96451a70a9dec406c3c1a133b546ad0819e4eab1a276c1b1d0d6ac924f200ce2ac17dee20746ff031a5976c560040000",
    ],
    [
      "ETag",
      "EvCcpeoWxnISRkOHJQp2+A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:45 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-24-1640212585510"
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
      "2d90414f83401085ffcb782d0990a20d490fa24489a45ab4979aa6d92e03a50283bb8b8610febbb3d4cbeeec9b6fe6bdec085f559b4308a7aafcee510d37259aad2d32d47d6d345f1db51a61016844c9e4abe6e659efdb281294bc3cc6d97e556cd76b26b43c6323201ca1a8b0ce35849f23b4a2411e3b1ed5bc913133745649361ff1539cb1d0506e85cd2e4defa33486e9302de042a70c0b54d84ab42b3b45179426b169b568ba1a1d4dbd92a86186e746a9a8ef8422725871fca5e3dd2e5ddff3835510782e833549612a6a99ddbd03db1832a2cee897c382c7809a4bce5dcce70fcb7736d0e11f8d0683fa4d11fb6ab496eed5fe816c24c3518dea710152f0673c57e6fa9efe00e024a3c369010000",
    ],
    [
      "ETag",
      "OsryRhsZnBBaoIKDERZ8fQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:45 GMT",
      "Server",
      "ESF",
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
      "4b7282300000d0bb646d1d09a0a63bb0b406f9a910821b06626022205fa5d0e9ddebf408effd808431def7f15017fc0edec19440b464cb74a5d1e76af6bda8da27be4d43711db4437c631fa8245b6fbe67f5e86567f7da09ed44252642b7949ff25b7e39b4733fd5814de0d174a3623dfad4c91b3973944a8708b9f8b6bb61e9c4bd601d12bf5108b4703ad3118f5261496699ab8e6f4ab06dec2bb53ed7a971da6245d933611e3359f00bd5f1e82bbbb655497d778df3a68fac84e436c6ed14e807b39af1a407559e1847bbd4cac75e57a0478a470eadb01d33eb4bda740c61b000fcbb111def63f172cb2a420bf09f100f53c35f133a4f3ade81df3f3e7b979c23010000",
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
      "Wed, 22 Dec 2021 22:36:46 GMT",
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
      jobId: "grouparoo-job-25-1640212585510",
    },
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
      "da2440202f295ab394aed112b211d26a9a2664cc85ba054cb1695555f9efbb98a66b55a9fd84ed7bce3de73e7822b7bc4cc88cc43cbb6ba07efc722362724240d10c5ffd54063f8ae9585db0f5563eacbfc97a6d2de67344f096256951e5d093a2a919c8d97ed7cf6ad154b416a287897ab6dbb3468e695bb63b715dcb449e843c5df3f216d9d74a557236181cb5fb9910590eb4e2b2cf44f1f23eb8b707552d6e802939782b39401539f858f46b2e18555c94f3fd0e0d3412ea080aca73b4f09f99c4a76f53f7392dfa1982ef3903ca98684ad5dac2144c9429cf9a5a6725b327a26dbe3a909db7f696a1c144de146554d2024e8c842a1aa9c70a8cf360bb3156fef936d82cc2d5d68f76cb0b6fb3e82fb7ebfdc6df1957175ee0198ac63968ae31374ef5cdc70bea2720152fb57ad83eb7cacf0d5abd1f4b4b4069095d301a9b236a4dcc699cc663964e866e9c9a10c79378ecd2616cb2a9034e1203459e16d52c5a8ad299d834194e9228751c3772a83b8cb0c193681a5b3004739ca4b6450e27e4a1e60aceb8ac84e45d87c855b00abd280cf6fe72117aba849436b93aeb8cb505bcf6a8b0c0c8342d047e50d7a18d72816a6dcb577ee8058b65b8baf4ba29af21a3ec717787734e692e01d1b4c6062aa837228176bd171bef0cc17a6a3f8f4149667f9e48dbf7d6c9abb6bfd0431c626b59e92fd985c1caffaeed1c1197346f34e4be3b900a2d5f637de8faf01791b8a85d16f26bef05bf49f714400a3594ecf3892258073efddf8ecb8f585c7f94910aefb83f4cb622ac866e8fb82ef7993d3247b6ed120daed5bbd8d0991ebb",
      "d6e668334201a57aaea85b7e2cb4136be40b0883b802beeed6e11fc223f6b47c040000",
    ],
    [
      "ETag",
      "NfsRKm97tHcLOswLBsrL1A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:46 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-25-1640212585510"
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
      "4fc2400cc7bf4b7d1d1190212ee161280ac94084f16408396f0586db3aef6e2212bebbbd8968d4445f6e6df76bd7ff7fb783c7388bc0838778f954a0da9e2cd1dcd9608cba488ce6474e994670008d583279711a9ebdbcba9d6cb8e96190af64d808e5a6dd6642cb15a602bc1d2c624c220ddefd0e329122b7494a8a349b979903669bdbe2241cf787379ca714d97c380d02bf137461ef1c1b2361c4bce4ffd136db3bb0a687312e506126d1ee922b5aa3347d2b538b344fb0a2a95012359470f962a9a8c88522aa70a552772bb566a35aafd5dd96ebd6aa0c262485892963763ae1fdc09011c99836ac129a0ca83264c18bf27ce6721c95426cd81f86cd46b9df5740a12415cdffe4725e7725f82f7c600707be7322a5223347ea3ab8f57f1bc7967e8ebaf2c3ee0f421b36ea8884fd417712fa8391e56607e99dad413d52c43e6ab416d6aa8d967bdeacbebb7a49d669fe8e6754810e48c197a3171bf01622d1b87f03b0d65f297a020000",
    ],
    [
      "ETag",
      "9/T3xz5BnNwHeLphcT4Tcw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:46 GMT",
      "Server",
      "ESF",
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
          "SELECT COALESCE(SUM(`amount`), 0) as __result FROM `purchases` WHERE  `record_id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-26-1640212585510",
    },
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
      "ff8553596f9b4010fe2b68fb92a8b10dd8c68764a596435b245fb171a2aaaaec6519c826c092ddc56d14f9bf7780388722254fc0cc77ccc523b9e359488624e0f17d01f2e1cbad08c819014d638cae5d3783af57d162f30f96f7fbe27a398b2f2f472344f092a5689a27d050a2900cd470b36ec652143995423450a8613b0dcbe998b66577fbddae65224f41124d797687ec1bad73356cb58edecd588838019a73d564227d8eb7f6762b97e2169856adb7962d7451ad8f4dcf13c1a8e6221b6dd65840a1406e21a53cc1125e9861f0edad7493d3b4192378cf1950c64491e9b22c9460228b785cc84a950c1f4955e6ab171cdcd49df8c664319ebaeb897bb2decc4e76342d3576a76786796a50656cb712549168e3fb6a31337639dade50056a675cff7457ae61ec243021c32d0f77c6c83837a6deccf30d0b2b0841699e55fe3e0d1228bd9f46e4bd5f4c49a01aa5ebe4b6673ad4ea9b83200a7a2ceab7bb41644210f4835e97b603930d3ad00903a0c8d3a57ac5a299c8daac13469d3084d019b43b60db4e7f6077c1018c0fec9ed9a1a1351898941ccec85fc9355c70950bc5eb3991eb95e7bb5b7fb5994fc6be5bb511511cc0455d5cd9c4eb3a3536b935cdb2df0f7a3b94592ed0ad1cbc37f7ddd578e27b576ebdeb29c4943dacef71db114d14209a4a9a82063913210e8e2c176bcff716f3f11419d50297478422c3df8f2f04ff21af26adab67e9e5742aff23e08a264585d8d72fc42287c31f44e05dd66472b97157bf481d5a41041232f6f9fa105c253efdbd8eb78e58bc76b4511abff158982a4d9884fa68785a9557b31d135767930a2cf5bb9ce538c7c9941aa522a490e9a78eea5bc7466bb3423d833089bb9e7bf31f98fd0f14f0102e6b040000",
    ],
    [
      "ETag",
      "SEEne+VfOUxePqvuWPMgQQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:47 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-26-1640212585510"
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
      "6d",
      "6b",
      "83",
      "30",
      "10",
      "80ffcbed63755537a508fdd0ee851564ebba1506a39454cf4ca79e4de28688ff7d17bb2fc9dde5b9bb870cf05d3419c4702ae4b943d55f4934af36d8a1ee2aa3f96aa9d1080ea0119249998bcd3c8a825951861fb34edf6fdbf35c2e974ce8f40b6b01f100798155a621fe1ca0113572dbf1a8a6898c99beb595c7e465f5ce694d994d9ff749b25a270f301e46074a3aed3047854d8a7660aba8c4d46cacab16755ba1aba953296a98e0e9412aea5aa1885caeb841e4fad1ad17f841b80843df63b0a25498821a66f76fc06b0c1951ede89755c167404d215be7d3f963cbfef5cdc24a1dfef1756f506f15f16e8d76ad7751b823ab6558d7a80e1d48057fc753612ef9f807d10413a66b010000",
    ],
    [
      "ETag",
      "gfaI/662+ij5X+usDPpq/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:47 GMT",
      "Server",
      "ESF",
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
      "000002ffedd35952c2300000d0bbe49b3269816afc63ab71421dba18127e3269894ce84637d3e2787719af21ef0eef1bc834556d2bba2a53257801a374d0349d2670c9bee02d7e9f8f6c9dc0dd2aa50ededa12f62697413caf85b5fd921789c30c1227e84ce412590e027b9c1dadc059d4e1f06986e15644eb9c063379827c5fe41fd6a2c6be9ddaf37d5d14ac53c36bcc5da7d2fd796368157ab19dbb3d767d4493715df8c8bf72da1e0886251dab24cb4f746950c3b4f172dd902895f1c10a2e8d49c284783c1b197fe6222a65dcdbf209e942e8655793ec3c2b772bc1e40692121f6f6f55357d78f877c004a8e1aa1bd50a7ddf3e5b2034017ff545375ed5fdff4ac94635e0e7175cbc07a719040000",
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
      "Wed, 22 Dec 2021 22:36:47 GMT",
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
      jobId: "grouparoo-job-27-1640212585510",
    },
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
      "85536b6f9b3014fd2bc8fbda04f2204923456b96d0356a425620aba66942c65ca85bc0149b3e56e5bfef629aae55a5f613b6ef39f79cfbe089dcf022265312f1f4b686eaf1cbb588c8110145537c3d7b4862f6ed8a3e2cffa6e7f7e7b759ee9be6c56c8608deb024cdcb0c3a52d4150339ddf9ddb41275492b213a98a8d31f777aa3a1d5eff5ed896df72ce449c892352f6e907da55429a7a679d0eea642a419d092cb2e13f9cbbb79d737cb4a5c0353d27c2b69a28a343f16fd9a09461517c56ce7a3815a4215424e798616fe33e3e8e46dea2ea7793745f01d6740191375a11a5b98828922e1695de9ac64fa44b4cd5707e23b6b6711184c64755e8405cde1c888a9a2a17a2cc138f5b61b63e59e6ebdcd3c586dddd05f9c399b7977b15def36ae6f5c9e399e63281a65a0b9c6cc38d137172fa81f8354bcd0ea41f3dc283f3768f57e2c0d01a525b4c1706c8d686f621d47493466c96460478905513489c6361d44163b1ec2308e80224f8b6a162d443186211d222f1c0c2c1a0e6dab1f4efaf6204c925e6f482d16b3c422fb23725f71054b2e4b2179db2172e9ad02270cbc9dbb98078e2e21a175a696adb1a680d71e1516185a560f811fd4b56fa25ca05ad3f2951b38de7c11ac7e3aed94d79052f6e8dfe29c139a494034adb0810aaa8d88b169c49d6f9c2582f5d47e1c82924c7f3f91a6ef8d93576d7fa10738c4c6b2d25fe207decafdaeed1c103f69566bc85d7b20255abec2fad0f5fe0f227151db2ce462e778bf48fbe441021514ecf3892258073efddf0ecb8f585c7f94910aefb83f4c3622ac82768fb82ef7993db2c6a3639b6870a5dec5c693c1a16b4d8e2623e450a8e78adae5c7425bb15abe8030882be0ea6eedff01d1d4c5f27c040000",
    ],
    [
      "ETag",
      "HxfdcBhaxDzgKwKqlmS//Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:47 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-27-1640212585510"
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
      "40",
      "0c",
      "c6",
      "bf",
      "4b7d3b1220fccb125e004e5d020863181343c8b115186cebb8bb8184f0dded4d44a326fae6d676bf767d9edd09b6511a820d8b68b5cb511e6f56a8c726f050e5b156fcc828550816a0162b2677bda7e1f6999ce6e1b0f1f683b0eb4e5f9d71bbcd840ad69808b04fb08c300e15d82f27484582dc16509c27e9bcc82cd0c7cc1427bee70eef394f2834f970daef77ba7d07ced6b531145acc0bfe1f6db3b3051b5a78b84489698066974cd20603ed1a994a24598c2545b90c504101172f5692f24c48a212574ad566a9d2a895ab956abd55af57ca0cc614081d51caec74c2fb81262d628f0eac121a0cc82264c1cbe2dc73390a0b212674877ea356ecf7159018900ce77f7219afbb16fc173eb08b03df3991509eea2b75d77fecfc368e2dfd1c75dbf19d1f84d26cd415f1dd8133f13b8391e16617e9dda3463592c43e2a341656cab556bdd928bfbbda23e3347fc7d632470b02c197e321d2602f45acf0fc064c88f9e37a020000",
    ],
    [
      "ETag",
      "qCVNkXoE7wwjRvMdBIUxEQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:48 GMT",
      "Server",
      "ESF",
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
          "SELECT MIN(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-28-1640212585510",
    },
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
      "5b",
      "6f",
      "a2",
      "40",
      "14",
      "fe",
      "2b64f66537a90a56104d4cd758764ba2b6556cf7928d0ec3814e0b0c9d196c4ce37fdf03d45ed2a47d6298f35dce6d1ec91dcf233224214fee4b90bb2fb722244704344df0f6d7997779b52b61e7899b89bf751ec6e19fe472344204af588a66450a2d254ac9400d57cb762245595029440b855a5db765393db36b756dd7b62d13790ad278caf33b64df685da861a773f06e27422429d082ab3613d9f37d67dbed1452dc02d3aaf3d6b2832eaaf3b1e9492a18d55ce4a3d512132815c8356494a798c20b330abfbf956e739ab513046f3903ca9828735da585124ce4314f4a59ab92e123a9d37c75204b6fea4d0263e6cfbf6e68565137df0caa8cf55a822a536dfc589ccf8c4d814e375481da18d767dec2338c8d042664b4e6d1c6181927c6d49ff98161a169044af3bcb60c68984265f7d415fffd2c2a02d528dd04d77dd3a1966b0ec238ecb3d83db6c3d8843074c3be4d8f43930d7ad08b42a0c8d3957acda2b9c807cc741ce6321a7521ec9bf6c0b52c139c7e488fe36ecfb4e980f5a308fa647f441e24d770ca5521146f5a43ae177ee0ad83c56a3e19075e5d464cb101a74d725511aff3d458e4da34ab7a3fa86d5f45b940b7aad7fe3cf016e349e05f79cd78a79050b65bdee380639a2a40349534030d7226226c1cb9385ffa817f3e1f4f9151cfece2805064f8f7f18510ec8abad3bafe565e4eaff63f00ae685ad6886d732016d9efff210257b12193cb95b7f84d9aab05c42021679f8f0fc175e0d31775586fc4e282a38dd2f88fcbc25465c224344bc3b33abd86ed986ecfee911a2cf5bb98edb887ce541a95226490eba78a9af5c6421bb3523d833088b39efbf39f18fd0ff600cfb55e040000",
    ],
    [
      "ETag",
      "XHEQVyueyEohCIv6wAbZgQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:48 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-28-1640212585510"
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
      "c1",
      "6e",
      "83",
      "30",
      "0c",
      "40",
      "ff",
      "c5",
      "bb",
      "9609d0a82aa41eda69d526b1ae83f5304d559506436901b3241421c4bfcfa1bb24b6f36c3f65806b51a710c2a9c87f5b54fd438ee6d30631eab6349aaf866a8d3003342267b2bb8aef1d6d642da2f32d4efa64febe75bbe592092dcf58090807c80a2c530de1cf00b5a890db8e47354d64ccf48dad6ca28fd517a715a536ddeea368b58e5e603c8c33b8d029c60c15d612edc046d105a579b3ae5a544d898ea65649d430c1d343aea86d842272b8e2f80bc79b3fb9bee7078b20f05c064b92c2145433bb4f80d71832a28ca96355f0185053c8d6d974de6cf9d1b54a877f78dd1bd43b45bc59a35deade059ec94a199635aac51948c19ff15a987b3efe01807452e269010000",
    ],
    [
      "ETag",
      "wkaYPoFcnaLhvRSyS6MN0w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:48 GMT",
      "Server",
      "ESF",
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
      "72",
      "82",
      "30",
      "0000d0bb64ad0e8218d31d1401f1936241c04d260db1fc414219a0d3bbd7e935eabbc3fb0694312e04e9ea9c57e0058c54460bb6f890b4b09726ef78d6c2d8e6370f217c20bb44c7432588345521299019cd4d186bb46cadb13d384903154fba2e6dbfee8a5af63b23af68ed0eeba3371949be34b4c6aacbcdbc33e4814494d8dc64ef6a09af058952e15e227f2562d862a6ac7439a47d079bc195ac28f3f77b7ec338780dd879cbddcc4127f970d67b6b63671b658d4ffbaf294cf1e898e44e6cab50634381477507b7a5aecac1505fcdf4c23e93c0cb2221cabbfab6138ba7a77f07cc001f9ab4e582a48fed8a8ad00cfcd527ddd8f0c77f9dd396b7e0e7173473b57319040000",
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
      jobId: "grouparoo-job-29-1640212585510",
    },
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
      "c8fbda24e4415e52b446296dd112b211d2689a2664cc85ba054cb1499556f9efbb98a66b55a9fd84ed7bce3de73e7826f73c8fc894843c79a8a03c7cbb13213923a06882afd992f327efc7425deff687c39375bb3838578fb3192278cd92342b52684951950ce474bb6927a5a80a5a0ad1c244addea4d51d0ecc5eb7678d2dab6b224f421a2f797e8fec5ba50a39ed744edaed448824055a70d966227b7defec7b9da21477c094ecbc97eca08aec7c2efa3d158c2a2ef2d97683062a09650019e5295af8cf8cc2f3f7a9db9c66ed04c17bce803226aa5cd5b630051379cc93aad459c9f499689b6f0e64632fed856f309156591ee434833323a28a06ea508071e9ad5786e35eaebdd5dc77d66eb0595cdbab797bb15e6e57eec6d85ddb9e6d281aa6a0b9c6cc38d737172fa81f81543cd7ea7efd5c2bbf34c8f938969a80d2129a60303287b43b3627611c8e583cee5b616c42188ec39145fba1c9260318442150e46951cda2b9c8ad61af3f322d2be85903160c226b1850d38c02b058184f2c0bfa43931ccfc863c9155c705908c99b0e919de7f876e07b5b7731f76d5d424cab545d34c6ea02de7a545860609a5d047e52d7b18e72816a75cb1dd7b7bdf9c2776eec66ca4b48283b6c1e70ce314d25209a96d84005e54a44d834e2ce57f60582f5d47e9e82924cff3c93baefb593376d7fa5fb38c4dab2d25fb2f13dc7bdd2764e881b9a561ab26f0ea440cbb7581fba3efe45242e6a9385fcdadade6fd23c7910430939fb7aa208d6812fffb7d3f22316d71f65a4c23bee0f93b5082ba1d923aecb7d610fcd49b73f201a5caa0fb1de6878ea5a9da3ce0819e4eaa5a266f9b1d046ac92af200ce20ab8ba5bc7",
      "7f44ac39337c040000",
    ],
    [
      "ETag",
      "mLiizRKCtHWvyyz5hCyIGw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-29-1640212585510"
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
      "40",
      "0c",
      "c7",
      "bf",
      "4b7d74445860e8121f26a29220e2184fc69063ebc664bbcebb9b8610bebbbd8968d4445f6e6df76bd7ff7fb785752e13f0619967cf35aacd5186e6de0621eaba309a1f15498de0001a9131b97603ef58c9c875bdab682097fde9c99c5ecfcf99d0f10a4b01fe16d21c8b4483ffb005294ae4b6988aba948b2673c06c2a5b9c45e16872cd794989cd27f3f138b8180f61e71c1a1361c4a2e1ffd1f6b873e0899621a6a850c66877a9143d616c4656a6166555604b53ad62d4d0c0cd8b4c515d0945d4e24acb3d6b75bc6edbedb8bdd35eafd366b0a058989c24b3f319ef07868c28427a6595e031a09a9005a7cdf9c2e53c6984d8703489bc6eb3df5740614c2a59fcc955bcee4af05ff8c0f60e7ce74449b53407ea6a7c17fc368e2dfd1c751944c31f84366cd4018946b7c35914dc4e2df7b8977eb131a8a78ad8478dd6c24ebb7bdaeb7bed775707649de6eff846d5e8402cf872dce406fc54141a776f7d4bc6907a020000",
    ],
    [
      "ETag",
      "k2A6+rnT226FTCnb7P/Uow==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "ESF",
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
          "SELECT MAX(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-30-1640212585510",
    },
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
      "5b",
      "6f",
      "9b",
      "30",
      "14",
      "fe",
      "2b",
      "c8",
      "7bd9b4263109492052d4452deb9892b425a4dd344d898103750b98daa65355e5bfef004d2faad43e617cbecbb9f981dcf022261312f2f4b60279ffe95a84e480806629deaefa8e25a4fff3ab7d7e01fe090dd5d989954ea788e0354bb1bccca0a34425235093f5aa9b4a51954c0ad141a1ce8076cc9145fb667f680f8726459e822c99f3e206d9575a976ad2ebedbdbba9106906ace4aa1b89fce9be77d7ef95525c43a455efb5650f5d54ef7dd3c34c444c73514cd72b4ca052203790339e610acfcc38fcf65abacb59de4d117cc723605124aa42d769a144248a84a7956c54c9e4813469be3890953b778f026331fbf579cbf29abafd6230656c3612549569e3bb7fba30b6253a5d31056a6b5cfe707dd730b6122221e30d8fb7c6d43834e6dec20b0c134d63509a178d65c0c20c6abbc7ae786f6751139846e936b819d311336dea8449388e127b300c130a616887e3211b8434722cb0e21018f274addeb058218ab03f6689e38c214c6287993486c168e42460d1816d9bfd3889ed31759c88ec0ec83fc9351c73550ac5dbd6904bdf0bdc4de0af9747b3c06dca481836e0b84dae2ee2659e1a8bdc505ad7fb4e6dbb3aca05bad5bdf69681ebcf8e02efc26dc73b879445f7ab5b1c70c23205886692e5a0412e448c8d2367a72b2ff04e97b339329a999ded118a4cfe3c3c1382fbb2e9b46ebeb5d7c86afcf7800b96550de2ae3d1093ec767f1181abd892c9f9daf57f93f6ca87042414d1c7e3437013f8f045edd71bb1b8e068a334fee3b244aa368924b44bc3f326bd963d3229a53669c052bf8999d678df995aa356841c0afd5851bbde58686b56a927100671d64b6f7982d1ff6f",
      "7071465e040000",
    ],
    [
      "ETag",
      "S294orRJ+8QVeRG0bsPG4g==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-30-1640212585510"
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
      "6d",
      "4f",
      "c2",
      "40",
      "0c80ff4bfdba996d802f4bf80046a3661105a71f0c21c756c6d84be75d074ec27fb737fc72d7f69eb64fee08455ea710c23acfbe5bd4dd4586fc6683399ab664235743b5417000596542fea4e533d2e7b6f8d8ff7271edcfbc617c7b188f8530c9162b05e111363996a981f0eb08b5aa50da562bdd4f148cbbc6561ea2d9e45dd28a529bbec451349946f7705a9e1cd8d17a8e1bd458276807369a7698f0937535aa6a4a740db53a41033ddc3f649ada466922572aeec073fdaba117f8c1e86634f23d014b4a14e7540b1b2f40d630b12ae7741055f005d07d28d69bfedc4b39b80c06d669f94f4f3b46f3aa49561bb45bbdb3c11d592b165bd62d3a9028f98dc79ccff9e90f8cf3a9f46a010000",
    ],
    [
      "ETag",
      "xdlJeoWhkVvztk71O04U9w==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "41",
      "72",
      "82",
      "30",
      "0000c0bfe42c0e8a4ad31ba24044238250e0924112228d201844b4d3bfd7e913767f4096e74c4ad25d05abc12778665338cec727d5887bf575dc433788dc62bd4daca5d43797e81446751de05eb78db3ef9d69d7da83f4b3455159ba364149b8dfe21e2fe8b668dca684928a2eceab903e4ba312be8ed3f8ece2467cf1a156bb4aab0919dc8cd89bc5c1dc999e63b568b7bb2729137b036e525910319badfcb950586b35ce61c0b0f5c2558adae13e2b3d55e1a61204e821b9b3fcf8468f2347c7ab192ba7c905cfcbd4a6548506b3f855f1f97aaaad131e991a75280223c086a6bc3149cab75b9b433802ff09a47b36ec3db164d98dddc0ef1fbe062fc123010000",
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
      "Wed, 22 Dec 2021 22:36:50 GMT",
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
      jobId: "grouparoo-job-31-1640212585510",
    },
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
      "535d4fa34014fd2b64f6d5b640a12d4d9ab5a9a8645bba02d5ec6e366418061c05069941d398fef7bd0cd6d598e8133373cfb9e7dc0f9ed13dab52344709cb1f5adaecbfddf1049d202a710eaf17fbddedbdb4aeac1f17bfcf57e6ba31a7eed5d3620108d6b1042eeb820e046f1b42c57c170ef386b7356e381f40a2c1d81818134b370dd39ed9b6a1034fd0225bb3ea1ed8b752d6623e1a1db58739e7794171cdc490f0f2f57df4688eea86df5122c5e8bde40854c4e873d1ef052758325e2d76211868056d625a62568085ffcc34397d9f7ac87039cc01fcc808c584f0b6929d2d48417895b1bc6d5456347f46cae69b030addb5bb8a34c28bb6ace20a97f4444bb1c4b1dcd7543b0fb61bcdf3cfb7c16619795b3f0e5797ee66395c6dd7bb8d1f6a37976ee06a122705555c6da19daa9b0f17d04fa990ac52ea51f7dc29bf34c8fb38968e00d282f6c178aa4fb031d39d244ba6249b8ded24d36992cc92a98dc7894e1c8b5a694231f094a862e18a574e6a9a8e31b163f8eab13571ec7806a9e2d4491da08d496258e870829e1a26e919133517acef10ba09bcc88da360e7af9691ab4ac8705bc8b3de5857c05b8f120a8c75dd00e027751dba28e3a0d6b5dcf3233758ae22efdaeda7bca63926fbf001e69ce1425040e3061a2869b3e129340df9cb8d7b066035b59fc7a040f33fcfa8eb7be7e44ddb5fe9110cb1b32cd5178551e0f917cace11718d8b56411efb03aac1f22dd407ae0f7f01098bda6741573b37f885faa78066b4a115f97aa20056812fffb7e3f20316d61f6484843bec0f119d086968bf474c95fbc29e18fac4b6900237f2436c6ae9c7ae7539ba8cb4a4957ca9a85f7e28b4176bc52b0882b002beead6e11f896b10317c040000",
    ],
    [
      "ETag",
      "GyUhkt4Q4KGZFC2Lr27EQw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-31-1640212585510"
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
      "df",
      "65",
      "bc",
      "a509d4b65a925e54ad8af64f4abd31a65961401418dc5dacb5e9bb3b8bb51a35d19b6566f8669873d8353ca645042edca5c9538572b597a0be32818faacab4e247498542b000b548988c13ffdabe7cb950ddc1ebc1a4d96d7ae271b4ecf59850e13de602dc35c429669102f7660d85c891db42caaabc58d499057a559ae22cf0bdf119e73945261fcf87c3fed170001b6bd718092d1635ff8fb6db8d050f74e7638c128b10cd2ea5a4070cb567642a919719361455324405355cbf482455a590440dae34f69d86d369d94da7d93e6cb71d9bc18c42a1532a989dcf783fd0a445e6d3925542870159872c38aecf672ea7512dc484de38e8b4eafdbe02124392d1e24faee475ef05ff850f6cebc0774ee454157a479d0e27fddfc6b1a59fa34efac1e007a1341bb543026f349805fdd1d470b75be9472b8d6a2a897d54682c74ecd661fba063bfbb7a4cc669fe8eab65851684822fc779aac18d45a670f306d86c53ea7a020000",
    ],
    [
      "ETag",
      "fgRV0KxJs9Ez7O292IakMw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`date`) as __result FROM `purchases` WHERE  `record_id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-32-1640212585510",
    },
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
      "5b",
      "6f",
      "9b",
      "30",
      "14",
      "fe",
      "2bc87bd9a42640280989147551ca56aa5cba84b49aa629b1cd81ba054cb1e95455f9ef3b40d38b2ab54f189fef726e7e24b7228fc8883091dc55503e7cb9918c1c11d034c1dbbbf39b0b16af4d67e1d17338b3877c9e2d27e3312244cd52342b52e82859951cd468b3ee26a5ac0a5a4ad941a18ed3ebd8fd63ab67f75ccf756d0b790ad27826f25b645f6b5da891691ebcbb8994490ab410aacb65f67c6fdef7cca29437c0b532df5a9ae8a2cc8f4d4f52c9a916321f6fd69840a5a0dc4246458a29bc3023f6fdad7457d0ac9b20f85e70a09ccb2ad7755a28c1651e8ba42a1b55327a244d9aaf0e64edcffc69684c979b45f87517510dbb6f0655c6765b82aa526dfc582de7c6ae40a76baa40ed8cab337fe51bc6ae042ecb682ba29d31364e8c59300f42c346d30894167963195296426df7d495e0fd2c6a02d528dd06b703ab4f6dcf1ab2980d78ec392e8b2d60cc6303973acce2c363388e1850e4e95abd61d15ce68eed4491cb99e7388ee541dfb37bac3f1c32864adc8d7a943100673024fb23f2af141a4e852aa4126d6bc8d52a08fd6db8da2ca693d06fca882936e0b44dae2ee2759e1a8bdc5a565def07b5edeba890e856f73a5884fe6a320d834bbf1def0c12ca1fd67738e098a60a104d4b9a8186722e236c1cb958ae8330582e2633643433bb38201419fd797c21840f45d369dd7c6baffe71e37f005cd2b46a10f7ed81d864bfff8b085cc5964c7e6dfcd56fd25ead20861272fef9f810dc043e7d5187f5462c2e38da288dffb82c5cd526bc84766944d6a4d7b2fbb6ed0c5cd2804bfd2ee63623785eeb5a1132c8f55345ed7a63a1ad59a59e4118c4592f82c54f8cfe07b55311245e040000",
    ],
    [
      "ETag",
      "qJjPbfS/3N8aJeH19cMmOA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-32-1640212585510"
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
      "dd",
      "4e",
      "83",
      "40",
      "10",
      "85",
      "df",
      "65",
      "bc85841fc1a6492f5aaddaa4a98af6ca34cd0253a40283bb430d21bcbbb3d49b9dd9b3dfce399901becb268739a465f1d3a1ee6f0ae437db2468ba8a8d94961a83e000b22a84ac0a9af5797a495ec2e021e730f0e2f871b9580861b22fac15cc07389558e506e69f0334aa46f9763cea69a260dcb756d9ec3ed64feb44849a722becf6dbed72b55dc378181d38539ae009353619da91ada63366bcb1698daadb0a5d439dced0c0044f0f85a6ae559ac815c50d03d78f6fbdc00fa25914f99e8015658a4b6a84ddbf83d830b1aa12fa95b0e00ba0a756729fa6f322f29d0d74f847573da379d524be06ada577b5bf271b89252aeb0e1dc8942ce3b9e4eb7dfc032f0fcd9169010000",
    ],
    [
      "ETag",
      "lgo8ydbvRO32Ddt32066FA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "ffedd34b7282300000d0bb64ad8e207ed21df8878032208d6c3244c3275203095868a777afd36bd47787f70d92cb8529451a716377f006fa4487a3cb888e4dfc187f85aee044065addb1286b985516c7210d91ef633b8930129375d5f531cc36c1fcaad2559b657b63899c743bb5a14336b9aa63273f4fbcad1fe229dec9e538d04ff41a43d418fb48e67c17e324f4916969466122f5a1cf70ebdef7d793900e5fb58a46078dd2c6733fc33329cebc344fa9b3b0236ee821d5e647cc2b448fbbbbf95ed7f0705b94bd372c366d9fcf52970be13d04b502326bca9ede54260feb5647998db662f4f2f2ef8001605d5548a648f1dc3e994238007ff549d357ecf9df62896412fcfc02b2c3f65419040000",
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
      "Wed, 22 Dec 2021 22:36:51 GMT",
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
      jobId: "grouparoo-job-33-1640212585510",
    },
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
      "6b6f9b3014fd2bc8fbda2410425e52b446295d3325a423a4d1364dc8762ed42dc1149b6e5d95ffbe8b69ba7693da4fd8bee7dc73ee8347722bf21d191326d2bb0aca870f37929113029aa6f89a6d936fcb5f97bbc576f3f93738fd41741baae964820851b314dd1719b494ac4a0e6abc59b7d35256052da56c61a296ebb69c7ecfee3a5d6fe8798e8d3c0559b210f92db2afb52ed4b8d3396ab75329d30c6821549bcbfdf37be7bedb294a79035cabce6bc90eaaa8cedba21f33c9a916329f6cd668a05250c6b0a722430b7f993b76fa3a755bd07d3b45f0bde040399755ae6b5b9882cb3c1169559aac64fc488ccd1707b2f617fe2cb2b8ccaa7d1ee7740f27d68e6a1aeb8702acf370b5b4e6c1f92a5c4ea3f92a88d7b30b7f396dcf568bcd32585bdb0b3ff42d4d5906866b4dac53730bf082fa3b505ae4463daa9f6be5a706cdff1f4b4d4069054d301ed87dea0ced114bd8802743d763890d8c0dd9c0a32eb3f9a807bd1d038a3c236a583497799f0d939e37e8c609ef0de21eefd398b95d1e7bde907a23060e735d7238213f4ba1e14ca8422ad174886cc379e4c751b80966d3c8372524b4caf45963ac2ee0a5478d05c6b6ed20f08dba0e75544854ab5b3e0f223f9ccea2f995df4c790129e50feb3b9c7342330588a625365043b9943b6c1a09a64bff0cc1666a97c7a022e3ef8fa4ee7bede445db9fe9110eb1b6accd97aca3701e7c32768e882b9a550672df1c488196afb13e747df881485cd4260bf9b2f1c3afa4790a21811272fefe44116c02effe6fc7e5472cae3fca288d77dc1fae6a115e42b347c294fbc4ee3bce683424065cea7f635dc7718f5dab73d419610fb97eaaa8597e2cb411abd4330883b80281e9d6e10f277150527c040000",
    ],
    [
      "ETag",
      "lWfZMxPdLWUJze167TkRsA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:52 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-33-1640212585510"
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
      "db4ec2401086df65bcb4249c0f4db8288a5a03954389178690a51da0d876eaee564208efee6c45346aa237db99e937d3f9ffee019ea334041b96d1fa2547b9bf58a31e9b60822a8fb5e24746a942b000b55833e9761c958d3bdee3667b3f0c5bfea5b71b6d9d6e9709156c3011601f6015611c2ab09f0e908a04b92da0384fd2459159a0f799294efd89ebdd729e5068726f361838bd411f8ed6b931145a2c0afe1f6df3a3055b5a4e708512d300cd2e99a42d06da35329548b2184b8a7219a082022e5eac25e599904425ae946ab552a5592f572bd546bbd1a894198c29103aa294d9d994f7034d5ac413dab14a6832208b9005af8af395cb51580831a1ebf9cd7ab1df57406240325cfcc965bcee46f05ff8c04e0e7ce7444279aacfd4cde0c1f96d1c5bfa39eadaf1fb3f08a5d9a833e2bbc3fed4778623c3cd4fd27b7b8d6a24897d54682cac94ebed46ab597e77f58a8cd3fc1d5bcb1c2d08045f8ebb4883bd12b1c2e31bda76e7227a020000",
    ],
    [
      "ETag",
      "I9AspQ9NWhjJMd7T+NwPjA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:52 GMT",
      "Server",
      "ESF",
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
          "SELECT MIN(`date`) as __result FROM `purchases` WHERE  `record_id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-34-1640212585510",
    },
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
      "5b",
      "4f",
      "db",
      "30",
      "14",
      "fe2b91f7b249b4b9b5495ba962083216a92dd0a6b0699a5ac7390986240eb6c3c450fffb4e123a4048f014c7e7bb9c9b1fc92d2f13322131cfee6a900f9f6e444c0e08689ae1ede2ef1a0a17bc609dc4a7b7e1c8bcfb51c0c5748a08deb0142daa1c7a4ad492819aac57fd4c8abaa252881e0af5dc41cff60696633bc3d170685bc85390a7335ede22fb5aeb4a4d4c73efddcf84c872a015577d268afff7e6bd635652dc00d3ca7c6d69a28b32df373dcc05a39a8b72ba5e6102b502b98182f21c53786626f1d7d7d27d4e8b7e86e07bce803226ea523769a1041365cab35ab6aa64f248da345f1cc82a9805c791310f179fb709d5b0fd6250656c3612549d6be3dbf26c6e6c2bf4b9a60ad4d6b8fa1e2c03c3d84a6042261b9e6c8da97168ccc2791819365a26a0342f5bc388c63934664f3d09df4ea221508dd25d70e35b1eb547d6384e639fa5237718a716c4f128f687d48d2d361ec0208981224f37ea2d8b96a274a86f3b6317113471fd24b663df06eab81e2e853f7686e3c44bedd13821bb03f247720d275c5542f1ae31e46a1946c1265aae17c74751d09691526cc049975c53c4cb3c3516b9b1aca6de776adb35512ed0ade974b88882e5d171145e06dd70679051f6b0bac3f1a6345780682a69011ae45c24d838727eb60aa3f06c713443463bb1f33d4291c9afc76742f450b59dd6edb7f1f206adff1e7049f3ba45dc77076293ddee372270113b32b95807cb9fa4bb5a420a124af6f1f810dc063e7c4ffbe5462cae37da288dffb82c4c35264c42b734bc68d3ebd89eedf8be4b5ab0d46f62a3b1b7ef4ca3d1284201a57eaaa85b6e2cb433abd57f100671d68b70718ad17f355b83375c040000",
    ],
    [
      "ETag",
      "NzUem3e6EUdbGkI8/qXmeQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:52 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-34-1640212585510"
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
      "51",
      "6f",
      "82",
      "40",
      "0c",
      "80ff4bf72ac9c1605b4c7cd0cd4413b2289b4f8b31271486026577651b23fef7f5d097bbb6f7b5fd72039ccb2683291ccbe2ab43d3df15c85b172468bb8aad5c2d35166102c8ba10323a3761d615d126fee570f5f7d8867ebfdece6642d8f4136b0dd301f212abccc2f4638046d7286d878319270ac67deb2a2ff3f7a56435652e7bddc5f17c112fe1b2bf4ce044c7047334d8a4e8e6b5864e98f2daa95a5db7157a963a93a285111e1f0a435dab0d912715ef3ef4fc8750057e103d4591af04ac28d55c5223ecee0d640d13eb2aa11f31055f003386229d8fe7b7940315284f059ef29dd9fed6b3e819edc690085874bbd5d5e3999c1b8b339b0e27906af99255c9d7fcf20fa39a64396f010000",
    ],
    [
      "ETag",
      "5kn4dug5PLxt4Hz7p41yIQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:53 GMT",
      "Server",
      "ESF",
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
      "300000d0bb64ad4ecad77487564190200484b8611002c50f50022238bd7b9d1ee1bd1748d294711e77f59555e0138c898016e9e20cb5e80127df763421c3f55d92bb6ba485ab6c69633a726a20b7c0b9e14da4b84c66aaca748f9ee7d8f1a3d669f9a320b847e5eda39a2cb16bd6c36d275d03d9174f222d47f33e30f5f67d08605f9ff4c046fe2a3015a25b96e6e292909218db7c7f5c17b8c64727e73b6279686e43769814c9d42c3e8fbaa30a37db50e3ea9783954d38c94106f7917bd1e738ab861f9a796b01c72977977a27d926ca7b7d29f9bb340f306d6054513003ecd9942de371f9768b324233f09f107763c3de132b96b4ac05bf7f82cd7b8223010000",
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
      "Wed, 22 Dec 2021 22:36:53 GMT",
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
      jobId: "grouparoo-job-35-1640212585510",
    },
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
      "2bc8fbb826bc4292468ad62ca52b52425620ada66942b631d42dc1149b4c5595ffbe8b69ba5695da4fd8bee7dc73ee832774cfab0ccd10e1c543cb9ac72f7782a013c4142ee0352bbf5f965fdbe4e2ce0f36dc974eb1f2ae16f3392078c7927857976c2045db502667db785834a2ad7123c400120d5c6f608f4796633bded4f36c0b789295f98a57f7c0be55aa9633d33c6a0f0b218a92e19acb2115bb977773ef987523ee1855d27c2b69828a343f16fd560a8a1517d57c1b838156b226653bcc4bb0f09f9991b3b7a9871cef860580f79c324ca9682bd5d982145454392fda466745b327a46dbe3aa0d85ff9cbc4a0a26c77555ae11d3b3132ac70aa1e6b665c449bb51184179b68bd48824d98c6cb4b7fbd182e37abed3a8c8d9b4b3ff20d8549c934d7981b67fa16c205f4332615afb47ad23d77cacf0d0ade8fa52380b4647d309d58636c4fad53929309cda7ae47728b113225130fbbc4a2a72336ca08c3c0d3a29a852b51652ecd47747c9ae23c9fa4a3dccbe144acd4c18e977b649cb9c4418713f4b7e18a9d73590bc9fb0ea19b2848fc3489b6e17291f8ba841cb7a53aef8d7505bcf6a8a0c0d4b26c007e50d7a18b72016a5dcb8330f1a3c53209aefd7eca2b5660fa183fc09c735c4a0668dc4003156bd62283a6a170b1f6cf01aca7f6f3189468f6fb09757def9cbc6afb0b3d8121769695fea2388982f087b673445ce3b2d5907d7f403558be85fac0f5e10f206151fb2ce86aeb47bf50ff14b19c35aca29f4f14c03af0e9ff765c7ec0c2fa838c547087fda1b213a10debf788eb729fd963db1dd90ed2e046bd8b79eee8d8b52e479791ed58a59e2bea971f0aedc55af9028220ac40a8bb75f807d70caeb27c040000",
    ],
    [
      "ETag",
      "dlBHl+uTFjEIOiEs2gL5QA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:53 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-35-1640212585510"
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
      "ff8d92614f83400c86ff4bfd3896808eb990f881e9d4256c2a435d6296e50665c301c5bb43b32cfbeff650a75113fd72b4e569e9fb725b586765021e2cb2e5538d7273b0447d638210559d6bc58f8a4a8560016ab164d296d45af7eea66590ac2e1791d37aba9f6efc93132654bcc24280b78534c33c51e03d6ca11405725b4c795d94f326b3406f2a539c44e1707cc1794189c9c7b741e0f78301ecac7d6322b49837fc3fda663b0b1e6911628a12cb18cd2e95a4478cf5d0c854a2a8726c2baa658c0a1ab879b19454574212b5b9d23e72db4eb7631f3a876ecf751d9bc19c62a1332a99bd9df07ea0498b3ca41756095d066413b2e0b4399fb99c258d10130ec751b7d3ecf7159018934ce67f7215afbb12fc173eb07707be73a2a0bad47bea3cb8f27f1bc7967e8e3af3a3c10f4269366a8f44c3d16012f9a36bc3cddea5f7371ad5b524f651a1b1d0b13b3df7b86bbfb97a4ac669fe8ea7658d16c4822fc765a6c14b45ae70f70abc1b48d77a020000",
    ],
    [
      "ETag",
      "0ro+k8VXnLdhHbT1+qWXyA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:54 GMT",
      "Server",
      "ESF",
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
          "SELECT MAX(`date`) as __result FROM `purchases` WHERE  `record_id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-36-1640212585510",
    },
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
      "85535b6fda3014fe2b91f7b2492d49808480843a06d916096807a1dd344de03827a9d710a7b643872afefb4e92d28b2ab54f717cbecbb9f99edcf03c260312f1f4b604b9fff05744e48480a629de8ecdabf49a4d7a5f5cfbd2bbd997939d1cffbb1b0e11c12b96a2db228353254ac9400d56cb562a45595029c4290a9d76dc53dbed5a6dbbed788e635bc8539025539edf20fb5aeb420d4cf3e8dd4a854833a005572d26b68ff7e6ae6d1652fc05a695f9d2d2441765be6d7a9609463517f970b5c4044a05720d5bca334ce18919479f5f4ab738ddb65204ef3803ca9828735da585124ce4094f4b59ab92c13da9d37c76204b7fea8f436336faf97113530d9b4f0655c67a2d41959936be2ece67c6a6409f6baa406d8cabeffec2378c8d042664bce6f1c6181a67c6349805a161a3650c4af3bc360c69944165f6d093e0f5242a02d528dd04d73dcba5b667f5a324eab1c4eb38516241147951cfa19dc862fd2e74e30828f274a55eb3682e72f06cd789c1e958b46f5bd0b7589752cf869eeb403b72dc3ed83d1a7b8c1c4ec89de41a265c1542f1a631e46a1184fe3a5cace6e351e8d76524141b306992ab8a789ea7c622d79655d5fb466d872aca05ba559d0ee6a1bf188dc3e0d26f863b8594b2fdf216c79bd04c01a2a9a45bd0206722c6c6918bf3651006e7f3d11419f5c42e8e084506bfef9f08e1bea83badeb6fe5e5766bff23e09266658dd835076293c3e10f2270111b32f9b1f217bf4873b5800424e4ecfdf121b80ebcfb9e8ecb8d585c6fb4511aff715998aa4c98846669f8b64eaf61bb76b76d77480d96fa55acd3e91e3b5369548ab0855c3f54d42c3716da9895ea1184419cf53c987fc3e87f977a46935c040000",
    ],
    [
      "ETag",
      "C/WghcD7B61V8kyuDvrCxw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:54 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-36-1640212585510"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff2d90514bc3301080ffcbf9680369668714f6d0e9608352743a44648c34bbd5ceb65793541963ffdd4be74b7277f9eeee2367f8aabb3da450d6d5f780f67453a17f0ec11addd078c7574f9d438800bdae982c56f9665e243479d3b5c9de6f4d172fcb6c3663c2994f6c35a46738d4d8ec1da41f67e8748bdcb6dbd9712263fed487ca63f6bae0aca57dc88a4d9e67f37c0197ed258223956b3ca0c5ce6098d75b3aa2f1aba0ea74db37281c0dd6a083111e1f2a4b43af2d91e08a984c453cbd932a56c97d92c492c1868cf63575cc6e5e80d778f2ba59d32f9b42cc801d43963e8ce70f979554524825940c66dbff9ef9c9a37bb2c4020ec36e79f578a0e0e6d9d9db0123309abf6459fb6b7ef903f886f5256f010000",
    ],
    [
      "ETag",
      "NILUBN5o3WaicAY+cn1HbA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:54 GMT",
      "Server",
      "ESF",
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
      "000000000002ff1dd04b7282300000d0bb646d1c09424877505b94028a7c26b8c90046e523550262e8f4ee757a84f77e4056145c08d67fd7bc056f406688cc8b79be30e96331453e59efee9b064e384c89da28f6559d12b35d9ad1f89e612234831767df73bd8fbbac2f12d1330aae7e99e891e785eb8352acfbcc56cf156ec6cadea5e48457cbc3d094348d6fc1e054d78b4b27cf96da17b77207e5954ef5ee98516c40ea1363b0d8b66ea34a735b67f58c7b02ebfe223e1f9a88d3d65353164afd8831b4b4fc98c73e366d86b162842d2c05da17dbdd21e1f518b3490ec1c94a421b41b1d840076dc00cf0e7adecb860e5cbad6a84ccc07f02ebe58dbf262c9e75bc03bf7ff8104eaa23010000",
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
      "Wed, 22 Dec 2021 22:36:54 GMT",
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
      jobId: "grouparoo-job-37-1640212585510",
    },
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
      "02ff85536b6f9b3014fd2bc8fbda0408212f295aa394ae688174405a4dd3848c31d42d608a4db6b6ca7fdfc5345dab4aed276cdf73ee39f7c113ba63558a162861f97d4b9b872fb73c4127884a9cc3ab45bcbff7dfad919f145772be7f1cb917978fabe51210ac63095cd6051d08de36848ac52e1ce60d6f6bdc703e8044036b3a30276363648eec996d9b06f0042db20dabee807d23652d16ba7ed41ee69ce705c5351343c2cb97777d3fd2eb86df522285fe56520715a17f2cfab5e0044bc6abe52e0403ada04d4c4bcc0ab0f09f9926a76f530f192e873980f78c504c086f2bd9d98214845719cbdb4665458b27a46cbe3aa0d0d938eb4823bc68cb2aae70494fb4144b1ccb879a6ae7c1d6d35cff7c1b78abc8ddfa71b8be70bcd570bdddec3c3fd4ae2f9cc0d1244e0aaab8da523b55371f2ea09f522159a5d4a3eeb9537e6e90fb7e2c1d01a405ed83f1d498607366cc932c99926c66d94966d0249925531b5b8941e6633a4e138a81a744150b57bcb2eca9359aa7466c9996198f538bc48995a5f10ce309c126c138b3d1e104fd6998a4674cd45cb0be43e83a7023278e829dbf5e458e2a21c36d21cf7a635d01af3d4a2830360c13801fd475e8a28c835ad772d78f9c60b58edc2ba79ff286e6983c84f730e70c1782021a37d040491b8fa7d034e4af3ce70cc06a6a97c7a0408b5f4fa8eb7be7e455db5fe8110cb1b32cd5178551e0fadf949d23e20a17ad82ecfb03aac1f20dd407ae0fbf01098bda67413f764ef013f54f01cd68432bf2f94401ac029ffe6fc7e5072cac3fc8080977d81f223a11d2d07e8f982af7993d31c7b3f114297023dfc5e6b675ec5a97a3cb484b5ac9e78afae587427bb156bc8020082be0ab6e1dfe01ebb6ed877c040000",
    ],
    [
      "ETag",
      "3cMxqK32NblVt9vz2IHPzA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:55 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-37-1640212585510"
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
      "514f83400cc7bf4b7d8538744c43b207a653974c9c8cc507b32cb7a3431428de1d33cbb2ef6e0f751a35d197a32dbf96feffdc169ef22a85009679f6dca0da1c64686e6d10a36e0aa3f95153a5111c40233226d777325a2e0f378917c7e252a22f927896f5fb4c68f980a580600bab1c8b544370bf854a94c86d928aa6ac166de680d9d4b6384de25174c97949a9cda3d9781c0ec643d839fbc65418b168f97fb4cd770e3cd232c6152aac24da5d6a458f28cdc8cad4a2ac0b7435354aa286166e5f648a9a5a2822972beef189ebf5ba9d23efc83ff57dafc3604152989c2a666753de0f0c1951c4f4c22aa1c7806a4316bc6acf3597f3b41562c35194f4baed7e5f01859254baf893ab79dd07c17fe1037b77e03b274a6a2ab3a72ec637e16fe3d8d2cf51e76132fc4168c346ed9164743d9c26e1f5c472f377e9838d413d51c43e6ab4167a9deea97fd2ebbcb97a46d669fe4e6054830e48c197e32a3710ac44a171f70a37e612697a020000",
    ],
    [
      "ETag",
      "vWcNbb/yT1RRaGce5aTRUg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:55 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` IS NOT NULL  LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-38-1640212585510",
    },
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
      "5b6fa24014fe2b93d997dda45550416b62bac6d29604b1ab58f7928dcec00c9d16193a33b4318dff7d0f507b4993ee93c8f96ee7c213be13798287988af4be646af7e556527c84992129bccd6f18dd85ab3bf9c89de9cfe5c5efd565703e1e8d00212a9626db2263c75a962a667ab85cb45225cb8228298f41e8b83b38b6dd9ed5b13bcec0716c0b789a653c10f91db06f8c29f4b0dd3e78b75229d38c9142e8562cb72fefdb0f9d76a1e42d8b8d6ebfb76c838b6e7f6e7a9ac9981821f3d17201014acdd49a6d89c820c22b33a1dfdf4bb704d9b652003f8898913896656eaa582011cb9c8bb454b52a1e3ee13ae69b07bcf0026f12a1c96c19465f37645b9137df10d168bd564c979941e7f3d9146d0af0ba219ae90d5a5d7a730fa18d62b154c95a241b3442a7681c9ea157dc06f90b14ce22142e8300a1c09ffa11b22153c2b411799d28223463559ae7a1f91f5755118801bda6b8ee5b2eb107d609e5b41ff341d7a1dc62940e68df215d6ac5273dd64b2823c033957acd22b9cc5dbbc739ef7639a7e404f87d9a804c9727eec0b538e1b4d3733af1a08ff747f85109c3ce842ea416cde4f06aee47de3a9a2fc3c938f2ea363881e99c35e1aa26dee634d0e4dab2aa7e3fe96d5f558504b76a157e1879f3f124f2afbd66fb014b49bc5bdcc3fe39c93403345164cb0c535399c0e0f0d56ce147fe2c1c07c0a8577a7540683cfcf3f44a8876453d6953ff565e6eaff63f00ae4956d68887e601db78bfff0b08b8d4868c7f2cbdf92fdcbc9a33ce14cbe3ffaf0fc075e1bf1fdce1fa010bf70f36dac07f3896585726b162cdd1886d1daf61bbb603745c8395f950731de730994aa352645b969be78e9aeb87461bb352bf80a008bb0efdf002aaff00854dec8a7d040000",
    ],
    [
      "ETag",
      "nhebyNWkowf5MXUGZWHLFA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:55 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-38-1640212585510"
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
      "41",
      "6f",
      "c2",
      "30",
      "0c",
      "85",
      "ff",
      "8b",
      "77",
      "844a2d1b1d42e20053b72255080a6c8709a1909a2eacadbb246562a8ff1da7ec123b2f5ffc9e7c856f5565308683ca7f1ad497871cedca35299aa6b0864b4d9541e8035a9133f987e775dc7bfd0857a58a7bd360b659be3f4f2713268cfcc252c0f80a4785456660fc79854a94c8dff67bdd4d64cc5e6aa7cc179be82d4a59282973c2629b24d3591241bb6bfb70a2438a47d4584974236b4d279476eed21a51d6057a861a2dd14007770fb9a6a6169ac863c57b1c7941f8e40f82c170341c063e830549611555cc6ed7c03696ac2852fae5b01030a0bb96731fbbf3cc72e802edfed1d9c5a2596a625f83ced2bfdbbf908b6439aad50df6410a5e46acecfddede000b70155069010000",
    ],
    [
      "ETag",
      "zevSH+FW6QmiH+A1BTPV7A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:55 GMT",
      "Server",
      "ESF",
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
      "08000000000002ff1dd04b7282300000d0bb642d0e68694b7702258a1270d016d86402c6986208e123a0d3bbd7e911de7b005214b46d71274b5a810f309185352fe6b9be4a6efafd101db9747c996b5bda5d6da35bdf43b21f726bb5dbc6d0d736f640cf014ee16123a456fe9c7c87353c213a0bcb73ac47dd1762cc7aebd994920ac6a7a5ac4fc7283ec27a41ab5899a3876ec1d515022aec30c5dc01870758046ed8a2bc6c123d4344897eefefa49badb9a62bbaccfae6f2eab5c558e59e898d55ff3941c2d4d8470eaa7266b3175b5dbad410129a5519aa08f2c0bb7c8be95ded10cf4a340ad318c00cd0b1e60d6d317fba97a665cdc07f02eea69a3e276c4a1ada80df3fc172c01623010000",
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
      "Wed, 22 Dec 2021 22:36:56 GMT",
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
      jobId: "grouparoo-job-39-1640212585510",
    },
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
      "fd2bc8fbda04c8ab2452b446095d33256423a4d5344dc83817ea1630c3a65554e5bfefda345dab4aed276cdf73ee39f7c113b9e7e59e4c48c2b3bf0dd4872f772221670414cdf0b5ea493fbfb20ff56277c8769bc7211cdcefd9748a08ae599216550e1d299a9a819cecb6ddac164d456b213a98a8d31f77dcd1c0e9b9bda1371cba0ef224e4e98a97f7c8be55aa9213db3e69773321b21c68c5659789e2e5dd7ee8d9552dee802969bf95b45145da1f8b7ecd05a38a8b72badba28146421d4341798e16fe33f7c9c5dbd45d4e8b6e86e007ce8032269a52695b98828932e559539bac64f2448ccd5707b2f557fe3cb298c89ba28c4b5ac099b5a78ac6ea508175196ed6d632b8dc84eb59b4dc04f1767ee5af67ddf966b55b075bebe6ca0f7d4bd12407c3b5a6d685b9057841fd3d48c54ba31ee967adfcdca0e5fbb168024a4b6883f1b933a2aee78c93343967a9d71f26a90349e225e743da4f1c361ec0609f00459e11352c5a8a72c4463dd749211e78ae1b0fdc018bc77baf1fbb30ee7ba9db473e25c733f25873050b2e2b2179db2172132e233f8ec25d309f45be2921a54dae16ad315dc06b8f0a0b8c1dc745e007751d75940b54d32d5f06911fcee6d1f2da6fa7bc828cb2c3f62fce39a5b90444d31a1ba8a05e8b3d368d04b3b5bf40b099da8f535092c9ef27a2fbae9dbc6afb0b3dc2216acbca7cc9360a97c13763e784b8a67963200fed815468f916eb43d7c73f88c4456db3909f3b3ffc45daa71052a8a1649f4f14c126f0e9ff765a7ec4e2faa38c5478c7fd61528bb01ada3de2a6dc67f6c81db99eee3e826bf52ed677c7a7aee91c3a231450aae78adae5c7425bb146be8030882b10986e1dff01eaf59fdc7c040000",
    ],
    [
      "ETag",
      "p2sElH/yrDUygUOw5ey1Jg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:56 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-39-1640212585510"
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
      "83",
      "400cc6bf4b7d294b361d7392f882292a09cefd612ec698e50665a240f1ee7099cbbebb3d9cd3a889be39daf26be9f3706b784a8b181c98a78be70ae56a6f817a688211aa2ad38a1f25150ac102d462c1e47937184c6dffe676ea4d4fabb6dc1fbcbac3e5c909132a7ac05c80b38624c52c56e0dcada11039725b44599517b33ab340af4a531c8723bf7fc1794eb1c9fb9320707b81071b6bd7180b2d6635ff8fb6fb8d058f341f6182128b08cd2ea5a4478cb46f642a919719361455324205355cbf5848aa4a21891a5c691c1e375a9d76f3a07560776dbbd56430a348e8940a662763de0f3469918d68c92aa1c380ac43169cd4e70b97d3b8166242bf1f76daf57e5f018911c978f62757f2ba0f82ffc207b675e03b2772aa0abda3ce836bf7b7716ce9e7a83337f47e104ab3513b24f4afbc71e85e0d0c77bf95de5b69540349eca3426361abd9eeda479de6bbaba7649ce6ef385a56684124f8725ca61a9c44640a376faf2645ad7a020000",
    ],
    [
      "ETag",
      "F8LPW5IVYWEWCu4r+PzAQw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:56 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` IS NULL  LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-40-1640212585510",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6fda3014fd2b96f765930a24944040421da2d916290d2d8456d33481e3dc50d310a7b6d30d55fcf7dd24a58f4d5a3fc5f13de79e731f7ea477224fe888c662735f82da7fd8ca989e50306c83b74538b4e2df8177abb6fae62a186ef97eb6988cc78810154bb35d91414bcb5271d0a3e5a2bd51b22c9892b285895a3dab65f77b56d7ee3aaee3d816f234646920f23b64df1a53e851a773d46e6fa4dc64c00aa1db5cee9eef3b0fdd4ea1e416b8d19db7921d54d19dff8b9e65923323643e5e2ed040a941ad60c74486165e9849fcf96deab660bbf606c10f8203e35c96b9a96c610a2ef3546c4a5567a5a3475adb7c75a00b2ff0a61199ce9661f471cd761579fd89304d562b05bacc0cf9329f5d9075815ab74c835e939b6fdedc2364ad804b95ac44b22663724626e13979c1ad89bf20e132080809fc0b3f2236fa49401b91d76e2216675039796a98ffef982a023398ab09ae06569fd9ae358cd378c053f7d489530be2d88d070e3b8d2d3eec412f898121cf54d96b16cb65ce8771b71f0f39b7989da6dd9eeb72d74e9c2e0c9daec35d18c020b5fa09a38713fa4b0903e74217528ba66bf466ee47de2a9a2fc3e924f2ea3252869d396fcc5545bcf669b0c8956555f5fea7b643151512d5aa31f861e4cd27d3c8bff69ac907b0617cbfb8c7d9a72cd38068a6d80e0ca80b9960e3e8e56ce147fe2c9c04c8a8c7797944683afaf1f84288f645dd69537f2bad7eafd63f02ae5956d68887e6406d7a38fc44046e6943a6574b6ffe9d365773484141cedf1f1f82ebc0bb8fedb8f988c5dd47196df01f9785eb4a842b689646ec6a7b0dbb6ff787ce29adc1cafc1d1b5803f7d8992a47951176909ba78a9acdc7421bb1523f833088b30efdf02b46ff00e00367de79040000",
    ],
    [
      "ETag",
      "pN90bxLEhrjsWQL9jcyOSA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:57 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-40-1640212585510"
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
      "61",
      "6f82301086ffcbedab24606433267ed0c54c133493cd996c31a696839501876dd9c208ff7d57dc97def5edd37bdf5c075faa4a600617955d1bd4ed5d8676ef9a184d5358c3a5a6ca208c00adc8980c1fd461f13b7d3f3657b96ef3edf62d54e3fd7cce84919f580a9875902a2c1203b38f0e2a51227f3b9ff5309131dbd64ed9ec5e574fab9885921227ec0e51b458462be84ffd0872bac498a2c64aa21b596bca51da8d4b6b445917e8196ab44403033c3c649a9a5a68228f156fe27bc1fdc41f07e3701a8681cf604152584515b38717601b4b561431fd70580818d043cbb9d3e1fc1e640e74fa4797ad45f3ac897d0d3a4bff66ff482e92e5a8563738022978196b656ff7fe0f25d1631d69010000",
    ],
    [
      "ETag",
      "57iUAz8ZWuqcHyjMMV5i2Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:57 GMT",
      "Server",
      "ESF",
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
      "00000002ff1dd04b7282300000d0bb642d8e608ad21d41a90444e527b8c9f0091f51a12151b1d3bbd7e911defb01699ed36120bc6be90d7c823155b4693ecd667a7c9fbd827d84b413c6fbd3c2ba1666efe331567808a3919d3d03875d8db3d290ddd50c6fda6b121ddaa359cd156425eb731ed86287d8c0514fc7e2e1251941d05a4afa7163e04129837ac9545257502e5a9ba971635a5c73bb85e2fae9e5cee35a2d6f7efaf47348fafce4126a3858c4962bcb65233d110c855c6dd50c3ac742a842afb6f5cbbcec1a8685d70d1caf2c15baceaaad64fb3b29ede45098ebc5977ec67c9444d08209a0cfbe617420cddb3dffd0b409f84f207cece97b02d19451067eff00c43ff37123010000",
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
      "Wed, 22 Dec 2021 22:36:57 GMT",
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
      jobId: "grouparoo-job-41-1640212585510",
    },
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
      "02ff85536b4fdb3014fd2b91f795b6699b3ea56a54258c4e6d3a9214c4a629729c9b6096c62176401dea7fdfb5431908093ec5f63de79e731f79227f789190298979765f43b5ff722762724240d10c5fb783bf378b7ba7fa7eb37fa4755986e14f757e399b21826b96a4bb3287961475c5404eb7413bab445dd24a8816266a39dd5677e8d8bd6e6f301e0cba36f224e4e98a177f907dab5429a79dce51bb9d0991e5404b2edb4cec5ede3b0fbd4e59893b604a76de4a765045763e16fd9a0b461517c56c1ba0815a4215c18ef21c2dfc6726f1e9dbd46d4e77ed0cc10f9c01654cd485d2b630051345cab3ba3259c9f489189baf0e247057ee22b498c8eb5d11157407275642158dd4be04ebdcdfacada577bef1d7f370b9f1a26071e1aee7edc566b55d7b81757de1faaea5689c83e15a33ebd4dc3cbca07e0252f1c2a887fa592b3f3768f97e2c9a80d2129a6034b287b43bb627711a8f583aee0fe2d486381ec7a301edc7369b38e0243150e41951c3a2852846496c0fe37e1a5167d28f9c893d8cc6b46f4769af3f86492f717abd21399c90c78a2b38e3b21492371d22d7fe3274a3d0df7a8b79e89a12525ae7eaac31a60b78ed516181916d7711f8415d071de502d574cb975ee8faf345b8bc729b29af20a36c1fdce39c539a4b4034adb0810aaab548b069c49bafdd33049ba9fd38062599fe7a22baefdac9abb6bfd0431ca2b6accc9704a1bff4be193b47c415cd6b0379680ea444cbb7581fba3efc46242e6a93855c6e5dff86344f3ea45041c13e9f28824de0d3ffedb8fcfa6f0eb48c5478c7fd61528bb00a9a3de2a6dc67f6b03b1a0d46c4802bf52e86b98f5dd3397446d841a19e2b6a961f0b6dc46af902c220ae8067ba75f807add8e4a77c040000",
    ],
    [
      "ETag",
      "U5zYCq4rJYywauppTTZtFQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:57 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-41-1640212585510"
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
      "40",
      "0c",
      "86",
      "ff",
      "4bfdc89630c2902ce10320200920c2881a43c8b115186eebbcbb4990f0dfed4d44a326fae5d6764fbbbeefee004f511a8207cb68fd9ca3dc5fac51df9a60822a8fb5e24746a942b000b55833294bcb8a4b71bb54dae16baf3b7e98dd25f7bb468309156c3011e01d6015611c2af01e0f908a04b92da0384fd2459159a0f799294efd497fd4e33ca1d0e4a3d960d06c0d3a70b4ce8da1d06251f0ff689b1f2dd8d272822b9498066876c9246d31d07d235389248bd15694cb00151470f1622d29cf8424b2b962571ddba955cb15a7e2d65dd72933185320744429b3b329ef079ab48827b4639550634016210b5e15e70b97a3b01062c2fec8af558bfdbe02120392e1e24f2ee3753782ffc2077672e03b2712ca537da6ba839be66fe3d8d2cf51574dbff383509a8d3a237e7fd899facde1d870f393f4d65ea31a4b621f151a0b9d72b5ee5ed6caefaeb6c938cddff1b4ccd18240f0e5b88e34782b112b3cbe0172e2f1c67a020000",
    ],
    [
      "ETag",
      "r+b25olC++wezGFPYUWmXw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:58 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `id` = ? LIMIT 1",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-42-1640212585510",
    },
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
      "00000002ffa553db6e9b4010fd15b47d69d5d8e6626c6cc94a2d9bb454be24364e545595bdc040360196ec2ea9acc8ffde01e25c142979e813cbcc3973e6fa406e591e91210958725782d87fbae1013921a06882d6e9b99cf4bdc185e7eebf8e630fceb81dfd1c8f468860154bd2ac48a12579294290c3cdba9d085e165470dec240adaed9327a5ddd344cdbb16d43479e84349eb1fc16d9d74a1572d8e91cb5db09e7490ab460b21df2ecc9deb9373b85e037102ad9792dd94115d9795ff434e521558ce7a3cd1a132825882d6494a598c233330abebd0edd66346b2708be6721d030e465aeaab43044c8f39825a5a8a392e103a9d37cf1206b77e64e7c6db2dc2cfccf3b9a55e4dd178d4a6dbb1520cb546967abe55cdb15a8754d25c89d76f5c35db99ab6131072116d59b4d346daa9365e4cd178fc9b7973cfd70c4c2202a9585ea7e0d320854afeb14bdedbd95404aa50a8716efb7a8f1a8e3e08e2a01fc68e6507b10e41e0047d9b5a811e0ebad08d02a0c85355f49a45739edb03bddf1b3803dbb460d0b322c7b1a2d831bba665f5032b30a9a51b340a28399c90bf822998325970c99a5691ab95e7bb5b7fb5594cc6be5b9711536cc7b449ae2ae2659e0a8bdcea7a55ef3bb51d2a2fe3a856f5de5bf8ee6a3cf1bd4bb719f70c121aeed77738f098a612104d05cd408198f3081b47ce976bcff7968bf10c19f50ccf8f084986bf1f9e09febea83badea6fa5d5ebd6fa47c0254dcb1a71df3c88410e8793ff8b6063883f08c1ed6ed8e462e3ae7e91c6b4821804e4e1c71b80e0daf1e1911e2f06b17833282315fee3be85b2120905347bc7b23abf86dd339c6ebf9a1482857ae3b36bdfd3a5541121835c3d56d45c4cd5abda55ca27103a715d16dee23b7aff0166988852b1040000",
    ],
    [
      "ETag",
      "DPsC7I9QIEy+AfIeFo5dJA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:58 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-42-1640212585510"
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
      "000002ff2d90616b83301086ffcbed6b0575756d857e6887ac0591d5ad3018a5a47a3a3bcdb924ae88f8df77b1fb92bbbc7972efcb0df05dc91c42b854e54f87aa7f28d11c6c93a2ee6aa3b9b42435c20cd08892c9e5e6632177ada2c5a18e137c5cad6e4553aed74ce8ec0b1b01e100458575ae21fc1c408a06f9dbf9aca6898c99beb5ca3e798f5ea2948586722b24c738de6ce308c6d338832b5d522c50a1ccd08e64c72b66666fd36ad1b4353a9a3a95a186099e1e4a455d2b1491c38a33f71def69eefa9e1f2c83c07319ac2913a622c9ecf10dd8c69011754a370e0b1e036a6a3977319dbf93cc814effe8b637a85f15b1af466be9deed9fc946321cd5a80e6790095ec6ae32f7fbf807a2a54dc169010000",
    ],
    [
      "ETag",
      "8AX7nHpro7QlLNe399wfmg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:58 GMT",
      "Server",
      "ESF",
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
      "00000002ff1dd04b7282300000d0bb64ad8e864249776015e30f5150e9c60921442a084290249ddebd4e8ff0de0f2094b2b6bd88eac6eee0032802d1888e92b1737e8e75e86369e824c519ba5b618f0feb6df3a5e1acb04c542e1da4c32a74ab06ade3215c9c64ef9c3762794cf282122859c58d95a2dd9bf4e6e3ce80c509619a0692578d4a2371c5d974a3e379481e6a4326ef3697b1381d778997f1e8ce826b76ed54a068dde34ccc8b88f9591a793ab6caedaa34bdf8cc137bf82071bb30fad2f56fd06fdd407a850df77a5fe3efd9765f75359f5ae2617e3a863ed83bbe4b565c2cbb491e810160b2ce1bd65ef297db30111a80ff848b50357b4db88c34ac01bf7f7a713a2123010000",
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
      "Wed, 22 Dec 2021 22:36:58 GMT",
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
      jobId: "grouparoo-job-43-1640212585510",
    },
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
      "535d4fa34014fd2b64f6d5b6b485963669d6a6a23669e90a5477dd6cc8305c709432c80caec6f4bfef65b0aec6449f98997bce3de77ef04cee789190298979765f43f5f4ed56c4e48880a219be5e272cdb5e0fec9fced5d67ff4d3c7fc2c985fcc6688e00d4bd25d9943478aba6220a7dba09b55a22e692544071375ac61a73fb2cc417f603bb6dd379127214f57bcb843f68d52a59cf67a07ed6e264496032db9ec32b17b7def3d0c7a65256e8129d97b2fd94315d9fb5cf47b2e18555c14b36d80066a0955043bca73b4f09f99c4c7ef537739dd7533043f700694315117aab185299828529ed595ce4aa6cf44db7c732081bb7217a1c1445eef8aa8a03b383212aa68a49e4a304efdcdda587aa71b7f3d0f971b2f0a16e7ee7ade5d6c56dbb5171857e7aeef1a8ac63968ae31338ef5cdc30bea2720152fb47ad83c37ca2f0d5a7e1c4b434069096d301a9b23da77cc499cc663963a433b4e4d8863271edb74189b6c628195c44091a745358b16a29898236b623b10b1411a47566cd9d164344aa33183b13d1c59347612b23f227f2baee084cb5248de76885cf9cbd08d427feb2de6a1ab4b48699dab93d65853c05b8f0a0b8c4cb38fc04feada37512e50ad69f9d20b5d7fbe0897976e3be51564943d05f738e794e612104d2b6ca0826a2d126c1af1e66bf704c17a6a3f0e4149a6bf9f49d3f7c6c99bb6bfd2431c626359e92f09427fe99d693b07c425cd6b0d79680fa444cb37581fbadeff41242e6a9b855c6c5dff17699f7c48a182827d3d5104ebc097ffdb61f9118beb8f3252e11df787c9468455d0ee11d7e5beb047fd89e98c890657ea436c301c1fbad6e46832c20e0af55251bbfc58682b56cb57100671053cddadfd3fd198e7997c040000",
    ],
    [
      "ETag",
      "ZdcgUZ25X8WURxRfxlGSAQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:59 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-43-1640212585510"
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
      "40",
      "0c",
      "c7",
      "bf",
      "4b",
      "7d",
      "ddc2a60cc8121ea6a29000e298fa600c39b73287db3aee6e1242f8eef6a6a251137db9b5ddaf5dffffdd0e9eb332011f1eb3745da3dc1ea5a8af4d10a2aa73adf85151a9102c402d5226bd62d3bd0d83e16a235beb3bd5725bea425ff7fb4ca8f8090b01fe0e9619e68902ff7e07a52890db62caeba25c3499057a5b99e23c0a47d34bce0b4a4c3ebd198f83d3f100f6d6a131115a2c1afe1f6d0f7b0b56f418e2122596319a5d2a492b8cf5c8c854a2a872b415d53246050ddcbc4825d59590443657ecf689ed76daceb17becf53ccf7518cc29163aa392d99b39ef079ab4c843dab04ae830209b90052f9bf385cb59d20831e1681a75dacd7e5f018931c964f12757f1ba4f82ffc207f6eec0774e145497fa405d8caf82dfc6b1a59fa3ce8368f083509a8d3a20d168329847c16466b88777e9a75b8d6a26897d54682c749d76cfeb769c3757cfc838cddff1b5acd18258f0e518661afca5c815ee5f010b36ce7d7a020000",
    ],
    [
      "ETag",
      "5mw7VRAHjwr/qWs/1/sFtQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:00 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` = ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-44-1640212585510",
    },
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
      "5b",
      "6f",
      "9b",
      "30",
      "14fe2bc87bd9a4260142d22452d44509db9072e90869d54d5362cc81ba054c6dd329aaf2df7780a617556b9f303edfe5dcfc406e791e91110979725782dc7fba11213921a06982b7573711e4bfd6ab7c1facae9c6ebe77ec72968cc788e0154bd1ac48a1a5442919a8d166dd4ea4280b2a8568a150cb715a56df316dcbee0d7a3dcb449e82349ef3fc16d9d75a176ad4e91cbddb8910490ab4e0aacd44f674dfb9b73b851437c0b4eabcb6eca08beabc6f7a960a463517f978b3c6044a05720b19e529a6f0cc8cc2afafa5db9c66ed04c1f79c01654c94b9aed2420926f29827a5ac55c9e881d469be3890b53b77a781315d6d96c1e71dcd2af2ee8b4195b1dd4a5065aa8d6ffe6a61ec0af4baa60ad4ceb8fce1faae61ec243021a32d8f76c6d8383326cb99f18c6beee6dec20b0c0b538940699ed78904344ca14ae2b157dedb095504aa51a6096e4fcd3eb506e6308cc353160fbabd3036210c07e1698f7643930d1d70a21028f274a55eb3682ef2d0b6c0a67dd66710857dca6c3b1eb0a119b268381c441665949a360c7be47042fe4aae61c65521146f1a462e7d2f70b781bf594e27815b9711536ccaac49ae2ae2659e1a8bdc9a6655ef3bb51daa2817e8564dc05b06ae3f9906de85db0c7d0e0965fbf51d8e3da6a90244534933d0201722c2c691f3d5da0bbcd5723247463dc9f3234291d1ef876742b02fea4eebfa5b79f59ddaff08b8a0695923ee9b03b1c8e170f27f8575e07bcbefef4b4c0aac1665fe200af7bc51203f37ae7f459a2b1f629090b38fb700c175e0c3e77a7c3b88c5d783364ae33fee1c53950993d0ec1ecfea2a1b76df36bb6697d460a9dfc49c81736c70a551294206b97eaca8793b55bfea50a99e4018c49559d69d3afc03f85dbf1fbb040000",
    ],
    [
      "ETag",
      "YjdenZSOnyTOY43ny42uDg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:00 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-44-1640212585510"
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
      "0002ff2d905f4f833014c5bfcbf5514860016348f6e00cd1e95c94498c31cbd2950bf2f7625b54b2f0ddbd65beb4b7a7bf9e73d213d465974104c7b2f81a508d17059a173b24a887c668de7aea3482036844c164bbad7699784b1f1e9f7e379b9b5abc37f565b15c32a1e527b602a213e425369986e8e3049d68919f1d0e6a7664cc8cbd55d6dbd7f82e4e586829b3c23665bfd52686693f3950d131c11c157612ad65afa84269d6b6ad166ddfa0ab69501235ccf07c51281a7aa1885c56dc2070fdabc05bf88bf03a0c7d8fc186a4302575cca63be01843463409fd7059f01950f3c8bdf379fd6679610bedffd1d568503f2be25c8d36d23bc7df92ad64b8aa51033a20057fc67d69cee7e90ff294a46a69010000",
    ],
    [
      "ETag",
      "mNjSdaWUJKMxLLAkaYlk+g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:00 GMT",
      "Server",
      "ESF",
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
      "0000000002ff1dd04b7282300000d0bb642d0e20a8e90e102b5650a07c7493892454062142904f9cdebd4e8ff0de0be02ca39ca38e95b4061f60c22a9c67f3ab6ca4bd2cbe3d293995cc311357d38a265db65b1662b45c22bb8c2647dcf677324265dc116d5d2fcc38133e2bb21d7a348aba27f58a051b03d9cf674bf38d2a5675e890503ad637ae14e5d7288587a369dbf9e53cb060ed0c6e0549af054633f817d909c85a9dfa7b5e68fc649d5d06bda83af8d6366d02733c1a9eab5a5cf7b438f77a510556ca6b0c27a108fda947d3664ca4eeb0db4b9d1c879f61e5e3e1b468ae31263772f9896c1bcc001d1f454b392adeee850ee10cfc27a06e7ad0f78449714b5bf0fb070ef3b61223010000",
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
      "Wed, 22 Dec 2021 22:37:00 GMT",
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
      jobId: "grouparoo-job-45-1640212585510",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b4fa34014fd2b64f6ab6da12df491346bd3e2da4d4b574ad5cd664386e182a3c02033688ce97fdfcb605d8d897e6266ee39f79cfbe099dcf122265312f1f4be86eae9dbad88c8090145537cb57e7a67701daff3fde3d2dadf5cdfcf47195ccc6688e00d4bd2bccca023455d3190d3fdae9b56a22e6925440713758676c7728666dfeadb63dbb64ce449c892352fee907da35429a7bdde51bb9b0a9166404b2ebb4ce4afefbd877eafacc42d30257bef257ba8227b9f8b7ecf04a38a8b62b6dfa1815a4215424e798616fe33e3e8f47dea2ea7793745f0036740191375a11a5b98828922e1695de9ac64fa4cb4cd3707b273d7ee223098c8eabc080b9ac38911534543f5548271e66f37c6ca3bdbfa9b79b0da7ae16e71ee6ee6ddc576bddf783be3eadcf55d43d12803cd3566c6a9be797841fd18a4e285560f9ae746f9a541ab8f636908282da10d8623d3a1d6d89c44493462c9786047890951348e46361d44269b0c6118474091a745358b16a288468e3d1c4cccd0a4fd241cda2c09a3d1d80a6366dbd4016b30721c7238218f1557b0e4b21492b71d2257fe2a70c3c0df7b8b79e0ea12125a676ad91a6b0a78eb516181a1695a08fca4ae4313e502d59a96afbcc0f5e78b6075e9b6535e434ad9d3ee1ee79cd04c02a269850d54506d448c4d23de7ce32e11aca7f6eb189464fae799347d6f9cbc69fb2b3dc021369695fe925de0afbc1fdace117149b35a431eda0329d1f20dd687ae0f7f11898bda6621177bd7ff4dda271f12a8a0605f4f14c13af0e5ff765c7ec4e2faa38c5478c7fd61b2116115b47bc475b92f6ca76f9963876870a53ec4fad6e4d8b5264793117228d44b45edf263a1ad582d5f4118c415f074b70eff005ab6cac07c040000",
    ],
    [
      "ETag",
      "1JNFeXdLmUwD1UhXqA7leQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:01 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-45-1640212585510"
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
      "0000000002ff8d926f4fc2400cc6bf4b7d3b924136244b7831149564fc11868618428eadc0705be7dd0d4308dfddde44346aa26f6e6df76bd7e7d91de039c963f06099ac5f4a94fb8b35ea7b138c5195a956fc2828570816a0166b26edd963d89a05ce70f7309ced6c1a8d5acbbedf6e33a1a20d6602bc03ac124c6305ded301729121b745949659bea8320bf4be30c54938ee0d6e39cf2836f9601a047e27e8c2d13a37c6428b45c5ffa36d7eb4604bcb31ae50621ea1d9a590b4c548f78c4c25b222c59aa25246a8a082ab176b49652124518d2b35c7add59b8edda837dc96ebd66d06538a844e2867763ae1fd409316e9985e592534199055c88257d5b9e3721257424cd81b844da7daef2b203122192ffee40a5e7723f82f7c602707be7322a332d767ea2618fabf8d634b3f475dfb61f707a1341b7546c25ebf3b09fdfec870f393f4ce5ea31a49621f151a0bebb6d3722f9bf6bbab57649ce6ef785a96684124f872dc251abc9548151edf00b28a452b7a020000",
    ],
    [
      "ETag",
      "0YWT8YL4OvVOYv0oPP8bMA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:01 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` = ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-46-1640212585510",
    },
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
      "5b",
      "6f",
      "9b3014fe2bc87bd9a4260102b949511725ac43cba525a4dd4553628ca16e0153dba4cbaafcf71da069da4d6b9f303edfe5dcfc806e5916a2010a587c5750b17b77c3037482a8c231dc7ee1abefa97ee1cef8efc9af8bf42cdb7edda9fbe11010ac64499ce6096d485e0842e560b56cc6821739169c3740a861751a46c7d24dc3b47bb66de8c0933489a62cbb05f6b552b91cb45a07ef66cc799c509c33d9243c7dba6f6dcd562ef80d254ab65e5ab6c045b65e373d4d38c18af16cb85a420285a4624d53cc1248e1c80c838f2fa59b0ca7cd18c05b4628268417992ad30209c2b388c585a854d1e00155693e3ba0a53375c6be365eace6fefb0d4e4bf2e68386a5b65e0b2a8b44699fbcc54cdbe4e0758d25951bedeab3e3399ab611947011ae59b8d186daa9369a4fb423aebe9bba33d7d70c4825a452b1ac4ac4c74142cb241e7be5fe3ba1928015c8d4c17557ef60a3a7f78328e892a8d7b68348a741d00bba366e073ae95bd40a038a81a74af58a85339e11db08bbed20d489d5ef5aa1695a6d6c139bd0b06f1add48ef1856c70a8d1eda9fa07bc1149d309973c9ea86a12bcff59db5efade6e391ef546544189a32a9932b8b789ea78222d7ba5ed6fb4a6dfb32ca38b8951370e7bee38dc6be7be9d4439fd21893ddf20ec61ee1445240638153aaa898f1101a87ce174bd77717f3d11418d524cf0f0889063f1e8e047f97579d56d5b7f4ea5895ff01708993a2426ceb0332d07e7ff27f85a5efb9f3b3d725700ed582cc4f40c19ed70ae862e578df507de5d1880a9a91b7b700c055e0cde77a783b8085d7033652c13fec1c91a50911b4de3d965655d6ec8e69f47a7d548185fa3b66ea46f7d0e052a354a429cdd46345f5db29fb55850af9048220acccbcead4fe0faa544c6cbb040000",
    ],
    [
      "ETag",
      "KoUZm0QIMozDxQmGnvXytw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:02 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-46-1640212585510"
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
      "616bc2301086ffcbede32cb445652bf8c10edd84a2b353980c91989eb5aeedd524dd28c5ffee25db97e4f2de73f7bea487efa2ce208263915f5b54dd438e666d8b14755b1acd5743b54618001a913319effcf566b512cff3cff9f9119bf09aeee474326142cb335602a21e4e05969986e8ab875a54c8638783721b19335d6395c572337b9da52c54945961b94d92699ccce0b6bf0de042c7144fa8b0966857368a2e28cdc2a6d5a26a4af434b54aa20607bb46aea86d8422f258f186632f180ffd3008474fa351e033589214a6a09ad9ed07b08d2123ca947e392c040c285772ee933b7f58f66da0fd3f1a7706f5bb22f6d598b9aeb37f211bc97054a35a1c8014fc196f85f97bdfeee9d2eb6869010000",
    ],
    [
      "ETag",
      "BY0QTOOa9FXFh+ep2qRYcA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:02 GMT",
      "Server",
      "ESF",
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
      "30",
      "00",
      "00",
      "d0bb642d0eca044c770282e5636a0005361988c1a67c44a028747af73a3dc27b3f20638cf73d1d6e256fc01b98b2355ab2652e6fe3519e436c5e5d143ce975ef4598d2463a4ea966ae2a87dce52867eee9533455e193f05dba0471a8ab9e4d590e8b9d6ccc7727f53fd28ed5e9d174490c4b52d591358e68d8a1c471b03a2ab581bf10ac7b6210b6734d8d95c545c4879448d6835b3cb4494f9f5ab9decc50cee54301237fb24e8a7467f688070e8970ecb847df4a5b9bca3e19bae064aaca796e6f3ee4116689c82a9a5a627df604deeaa3bb8a1f5db211cd0d2c007fb6a2e33d152fb702115a80ff043a4c2d7f4de83ceb78077eff004871a92b23010000",
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
      "Wed, 22 Dec 2021 22:37:02 GMT",
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
      jobId: "grouparoo-job-47-1640212585510",
    },
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
      "ff85535d4fa34014fd2b64f6716da1145adaa4594945b7494b15a8bad96cc8300c380a0c3283ab31fdef7b19acab31d12766e69e73cfb91f3ca33b56a5688e1296dfb7b479fa76cb137484a8c439bcde4767e76739bfc85cf7f1f1fafb5abf2ef2e062b10004eb58029775410782b70da162be0b8779c3db1a379c0f20d1c09a0e4613cb3047a6edd8f6c8009ea045b666d51db06fa4acc55cd70fdac39cf3bca0b866624878f9faae3f987addf05b4aa4d0df4beaa022f4cf457f149c60c978b5d88560a015b4896989590116fe33d3e4f87dea21c3e53007f003231413c2db4a76b62005e155c6f2b65159d1fc19299b6f0e28f4d6de32d2082fdab28a2b5cd2232dc512c7f2a9a6da69b0dd682bff741b6cdc68b5f5e370f9d3dbb8c3e576bddbf8a176f5d30b3c4de2a4a08aab2db46375f3e102fa291592554a3dea9e3be59706ad3e8ea52380b4a07d309e1a133c728c599225539239633bc90c9a244e32b5f13831c8cca2569a500c3c25aa58b8e2d5d871cc743cb363822d2bb6d2691a3b8e63c486834d92910919db19da1fa1bf0d93f484899a0bd677085d05abc88ba360e72fddc8532564b82de4496fac2be0ad470905c6863102e02775edbb28e3a0d6b57ce5475ee02ea3d5a5d74f794d734c9ec27b9873860b41018d1b68a0a4cd86a7d034e4bb1bef04c06a6ae787a040f3dfcfa8eb7be7e44ddb5fe9110cb1b32cd5178551b0f2cf949d03e21217ad823cf4075483e51ba80f5cefff001216b5cf822e765ef00bf54f01cd68432bf2f54401ac025ffe6f87e5072cac3fc8080977d81f223a11d2d07e8f982af7853d314d7bacfe56891bf92136993987ae7539ba8cb4a4957ca9a85f7e28b4176bc52b0882b002beead6fe1f09b784e77c040000",
    ],
    [
      "ETag",
      "qTGPGgoQfAAxxX+L/XlgRQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:02 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-47-1640212585510"
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
      "0002ff8d92614fc2400c86ff4bfd3a122030c8123e0022a230718cc4c410726c650cb775dedd2084f0dfed4d44a326fae5d6764fbbbeefee082f71168203ab387a2d501eae22d48f26f050158956fcc829530816a01611934ff7fbedca13524f33fb6ee86a35ecefdca8d36142051b4c05384758c798840a9ce7236422456e0b2829d26c596616e8436e8a33df1bb943ce530a4deecec7e36e6f3c809375690c8516cb92ff47dbe264c196561eae516216a0d92597b4c5408f8c4c25d23cc18aa24206a8a084cb1791a4221792a8c2954aa355a9d98d6abd566fb69bcd5a95c18402a163ca989dcf783fd0a445e2d19e5582cd802c4316bc2ecf1d97e3b01462c291ebdb8d72bfaf80c48064b8fc93cb79dd8de0bff0819d1df8ce89948a4c5fa89bf143f7b7716ce9e7a8ebae3ff84128cd465d107f3419ccfcee646ab8c5597aefa0514d25b18f0a8d85b56aa3dd6cd9d57757fb649ce6ef385a16684120f872dcc61a9cb548149ede00adfd0ab27a020000",
    ],
    [
      "ETag",
      "XKwjbRartPn6JGNtsGCvNg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:03 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `date` = ? LIMIT 1",
        types: ["INT64", "DATE"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-48-1640212585510",
    },
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
      "eb4fdb3010ff5722efcb26d1e6d136692b55ac6ab311a90f6853109ba6d6712ec190c6c1764008f57fdf25e13184069fe2f87e8fbbf3dd23b9e1794c8624e2e96d09f2e1cbb588c811014d53bcf52ec52f3a3899cb71711699a5a453b8bf4f472344f08aa5e8bec8a0a5442919a8e166dd4ea5280b2a8568a150abdb6fd96ed7726ca7d7eff56c0b790ab264c6f31b645f695da8a1693e7bb75321d20c68c1559b89fdcbbd79e7988514d7c0b432df5a9ae8a2cc8f4d8f33c1a8e6221f6dd69840a9406e614f798629bc32e3e8fb5be936a7fb768ae03bce803226ca5c5769a1041379c2536c47a54a868fa44ef39f0359fb337f121a93e566117eddd17d45de7d33a832b65b09aaccb4f163b59c1bbb02bdaea802b5332e4efc956f183b094cc878cbe39d31328e8df1628a9731d5d0fccf8279101a36a61183d23caf930869944195c0539f82f7af5311a846ab26b8f52c97da7d6b102591c7927ea717251644513ff27ab413596cd0856e1c01459eaed46b16cd45de81811b5b7dcb8da16b7512cfeb761da7e7c649d2a1d4b63dcff68081c3c8e188dc4bae61ca5521146f9a452e5641e86fc3d5663119877e5d4642b121d326b9aa887ff3d458e4d6b2aa7a3fa8ed5045b940b7aafbc122f457e349189cfbcd83cf20a5ec617d8b4f9ed04c01a2a9a47bd020e722c6c691d3e53a0883e5623c4346fd8aa7cf084586bf1f5f09e14351775ad7dfcacbedd6fecf80739a9535e2ae39109b1c0e47ff5798566df850c0b11cab65392dbb874a7f108a63de8890b38dbfba24cdd50a129090b3cf0701c175e0d36d7d5e1dc4e2f2a08dd2f88f63c75465c22434e3c7f775a10ddb753a6ec7233558ea7731af8ebdac4ca5087bc8f55345cdea542dab43a57a016110a766112c7e62f42f50d96d06ba040000",
    ],
    [
      "ETag",
      "7YoZa9HMrApQb/uraDewwg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:03 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-48-1640212585510"
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
      "d1",
      "4a",
      "c3",
      "40",
      "1045ff657cb481a4b6a504fa60a46821548d562852ca3699aca94926ee4e2a21e4df9d4d7dd999bd7b76ee657af82eea0c423815faa745d3dd68e457d72468db92ad94866a8b300164a585dc6bf3bc8d6fe96e1164b5d95ffc8f2867bd5a0961d32fac14843de405969985f0b3875a5528df8e47334e148cbbc6299bedfbfa719d885051e684ed2e8eefa3780dc36198c0994e09e668b04ed18d6c0c9d31e58d4b6b55d594e8596a4d8a1646787cd086da4619224f146fb6f482c5cc9f06d3f9723e0f7c014b4a1517540bbb7b03b161625526f42b612110c08cade4cec7f332ca12e8f08f461da37d3124be169da57fb57f201789252a9b1627902a59c653c1d7fbf00758520e6669010000",
    ],
    [
      "ETag",
      "YgrONL+o361dnrYv0VBftg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:04 GMT",
      "Server",
      "ESF",
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
      "08000000000002ff1dd04b7282300000d0bb64ad0e91ea90eef8e800a191221670930918217e221204c1e9ddebf408efbd002b0aae146d6f672ec12718d81ccd8a59ae9969a78df1c656399dae7d4f5ca1af4b2f8c861d74881f4defbe9df4ada1d7cf60a7b65dfd53949a2fd9666b3001b96ba0c080e9d1a46731b01cce2becded6c48a8ed4399504afce18f2205b2ec53cca2aa6f4271ea65e70309bab10781f85396cd75a97f8f682c0be92e47b8ca1baf0719fde6f569f5da435ca23311f98a3712720d596a738a325321ee17595349a92034e42b7ff3a89addb3623f2a2d8cd1cf671e808b3450126803f6bd17045c5dbad2f109a80ff04da0e357f4f589c35bc01bf7ff463276323010000",
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
      "Wed, 22 Dec 2021 22:37:04 GMT",
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
      jobId: "grouparoo-job-49-1640212585510",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6f9b3014fd2bc8fbd8262109794ad11aa574454bc80aa4d5344dc8980b750b986293adaaf2df77314dd7aa52fb09dbf79c7bce7df044ee791193398978fa5043f5f8e54e44e49480a229be3a455d57df2727e93ef7eff6277fef12c776af160b44f08625695e66d091a2ae18c8f9ceefa695a84b5a09d1c1441d6bd6e98f2d73d01f8ca6a351df449e842c59f3e21ed9b74a9572deeb1db5bba9106906b4e4b2cb44fef2dedb0f7a6525ee8029d97b2bd94315d9fb58f46b2618555c148b9d8f066a09550839e5195af8cf8ca3b3b7a9bb9ce6dd14c17bce803226ea4235b630051345c2d3bad259c9fc89689baf0ec4b7d7f62a3098c8eabc080b9ac3a911534543f5588271e16d3786e35e6cbdcd3270b66ee8af2eedcdb2bbdaae771bd7376e2e6dcf36148d32d05c63619ce99b8b17d48f412a5e68f5a0796e949f1be4bc1f4b434069096d309c9863da9f9ab32889262c990e47516242144da3c9880e2393cd2cb0e20828f2b4a866d142147498c40c8656384de249680d4749185953331c9b236bc618c4744ac9e194fca9b882732e4b2179db2172e339811d06dece5d2d035b9790d03a53e7adb1a680d71e1516189a661f811fd47568a25ca05ad372c70d6c6fb90a9c6bbb9df21a52ca1efd079c7342330988a615365041b51131368db8cb8d7d8e603db51fc7a024f35f4fa4e97be3e455db5fe8010eb1b1acf497f881e7b8dfb49d23e29a66b586ecdb0329d1f22dd687ae0fbf11898bda6621573bdbfb49da270f12a8a0609f4f14c13af0e9ff765c7ec4e2faa38c5478c7fd61b2116115b47bc475b9cfecf1c01a9a63a2c1957a17b3868363d79a1c4d46c8a150cf15b5cb8f85b662b57c01611057c0d5dd3afc03cd8e070e7c040000",
    ],
    [
      "ETag",
      "InuurK7+gvmSjv+xjfIENQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:04 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-49-1640212585510"
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
      "40",
      "0c",
      "c7",
      "bf4b7d1d11c886b884878128c40102e3c910726c0586db3aef6e22217c777b13d1a889bedcdaeed7aeffffee004f7116810bcb78fd5ca0dc5fac518f4d304155245af123a74c2158805aac991cc7e357df5966e3cd68baf4eed5656c777abb568b09156e3015e01e6015631229701f0f908914b92da4a448b3459959a0f7b9294e83497f78c7794a91c98733dff7da7e178ed6b931125a2c4afe1f6df3a3055b5a4e708512b310cd2eb9a42d86ba6f642a91e609561415324405255cbe584b2a7221892a5ca9d8d7955ac3aed66b75a7e938b52a83098542c794313b9bf27ea0498b64423b56090d066419b2e05579be70398e4a2126ec0f83865deef7159018928c167f7239afbb11fc173eb09303df39915291e93375eb8fbcdfc6b1a59fa36ebca0fb83509a8d3a23417fd09d06dee0c170f393f4f65ea37a90c43e2a3416d6aa76d3b96a54df5ded90719abfe36a59a005a1e0cbd18b35b82b91283cbe0123f723007a020000",
    ],
    [
      "ETag",
      "QiQxL5bnQhOSbAKs/i4CHw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:05 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `stamp` = ? LIMIT 1",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-50-1640212585510",
    },
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
      "5b",
      "6f",
      "9b",
      "30",
      "14",
      "fe",
      "2bc87bd9a42618120289147551ca36a45cba84a4daa62931c650b780896dba5555fffb0ed0f4a26a6d5e827cbedb393ebe43d7bc88d108453c3d544cde7eb812113a414c93144ebdbf09f766f6d69da78a0ee7536f7bb0cc743c0604af598ae465c63a4a54923235daacbba9145549a4101d10ea38b8630dfad8b66cc7731c0b034fb12c99f1e21ad8975a976a649a47ef6e2a449a315272d5a5227f3c376f6cb394e28a51adcc979626b828f36dd3d34c50a2b928c69b3504a814933b96139e418427661c7d7e29dde524efa600bee194114a4555e83a16485051243cad64a38a4677a889f9ec03adfd993f0d8de972b3083fee495e93f79f0ca28cdd4e325565daf8b25ace8d7d095e974431b5372ebef92bdf30f6925121e31d8ff7c6d83835268b3338541ac2b507b3601e8486053962a6342f9a142189325627781854f0fa7a6a02d1e0d516772e1e10cbc3c328895c9a783d274a308b222f721dd28b301df6593f8e18019eaed51b16294411dbbd9eeb0e62665931b62260db7d9b38b1e762ecdac39e3d4c7a438f5ae8fe04fd915cb333ae4aa1783b2d74b10a427f17ae368be924f49b36120213396bc3d54d3ccfa9a1c91dc675bf6ff4765f57b900b77afcc122f4579369186cfdf6c6672c25f4767d803b4f48a618a0892439d34cce450c8343e7cb751006cbc564068ce61acf8f088546bfee9e08e16dd94c5a37ffb5d7a0dff81f015b92550de2a6fd403089fb93ff2b84c1dc5f8793f9f9db2a36b67107db1dcb092d7b64f54656bf8b31fe09e2bf8108abdfeaa2ef1b7ff503b5472b9630c90afafe6e00b829bcfb828fcf09b0f0a0c006765373d844aa6a132a59bb913c6f7a6fd903dbe95b43d480a57e5583df71ecb546",
      "adc87256e8878edae7544fb12955ea11044558a445b0f80ad57f61d27963ce040000",
    ],
    [
      "ETag",
      "8xfi8L2V7Mgsc9MC8Vq1/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:05 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-50-1640212585510"
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
      "2d90414fc2401085ffcb78a48d2d718d21e14009510c415be5400c214b3bd462dba9bb534d43f8efce2e5e7666df7e3bef65cef055b5054ce05095df3d9ae1a6444e5d93a1ed6bb6523a6a2d4200c8ba14b2799e8d5233bc1ce64aa9629b0cebf476944ea742d8fc131b0d93331c2bac0b0b938f33b4ba41f9b6df1b3f51301e3aa72cd7ef8bc7452642438513d69bd56a96ac1670d95d0238d121c3231a6c7374233b4327cc79e9d25add743586967a93a3050ffb87d250df6943148a12aa288cefefa2713c560f4ac5918035e59a2b6a85ddbc81d830b1ae33fa95b0100b607c2bb98ffefcf1b204dafda3c9c0685f0d89af4567195dede7e422b14465d36300b996653c557cbd5ffe00c213976269010000",
    ],
    [
      "ETag",
      "mJA+QryObC555dYByNQ/+Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:05 GMT",
      "Server",
      "ESF",
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
      "0000000002ffedd3597282300000d0bbe4db38b259e81f8b5a1417508af093811824040c9b223abd7b9d5ea3be3bbc278831266d8b3acec8057c822116b5311e2713fd789b3c0e5b04af0f772e5b5fc8f3cb99bb4a481178072e458e47a454af6a24507451d636a6e2a9288cd69c8bd939702c4cd3a5c4765c86f6a6d46eedb7d2f50bb80df48f25c9a734e1c23e5679196326903a0a20856e9feb4e6cf894cc540daa57539ee7e169c5f23beba6a5db6469b68061e8e1de3b9e87922fb3366b068179f1de91bac8baab7db2a3a9b5ae177a181807bf32141cf1a43dd9c546545d5336ed0d53d90cd6833f7e7bfb77c008907b451bd222fada2e299a36027ff5513754e4f5df2071431af0f30b8a5d867b19040000",
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
      "Wed, 22 Dec 2021 22:37:05 GMT",
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
      jobId: "grouparoo-job-51-1640212585510",
    },
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
      "ff85535d6f9b3014fd2bc87b5c132025098914ad514257a484ac405a4dd3848c31d429608a4daa28ca7fdfc5345dab4aed13b6ef39f79cfbc1113db232415314b3eca9a1f5e1db8ec7e80251893378fd7efd7093e1ddce2d6e9764f7b85f1e3cdb7f9ecd00c15a96c04595d39ee04d4da8986e837e56f3a6c235e73d48d41b9a3d736419037330b48743d3009ea079ba62e523b01fa4acc454d7cfdafd8cf32ca7b862a24f78f1faaeef077a55f31d2552e8ef25755011fae7a23f724eb064bc9c6d0330d0085a47b4c02c070bff99497cf53e759fe1a29f0178cf08c584f0a694ad2d48417899b2aca95556343d2265f3cd0105ceca59841ae179539451890b7aa12558e2481e2aaa5dfb9bb5e67ad71b7f3d0fdd8d17058b1b673def2f36abedda0bb4fb1bc7773489e39c2aae36d3aed4cd830be8275448562af5b07d6e955f1ae47e1c4b4b006941bb60343646d8b48d499cc66392da97c33835681cdbf178882f63834c2c6a2531c5c053a28a854b5e927802602b8dc616b1226b6427111e99244a49628d8dcb381ddb063a5da0e79a49ba64a2e282751d42f7be1b3a51e86fbdc53c745409296e72b9ec8cb505bcf528a1c0c8304c007e52d7a98d320e6a6dcb5d2f74fcf92274ef9c6eca2b9a6172089e60ce29ce050534aea18192d66b9e40d390375f3b4b00aba9fd3a07059afe39a2b6efad93376d7fa58730c4d6b2545f1484beebfd5476ce883b9c370ab2ef0ea802cb0f501fb83efd05242c6a9705dd6e1dff37ea9e7c9ad29a96e4eb89025805befcdfcecb0f58587f901112eeb03f44b422a4a6dd1e3155ee0b7b341819131b29702d3fc40683e1b96b6d8e36232d68295f2aea961f0aedc41af10a8220ac80a7ba75fa07785dc93a7c040000",
    ],
    [
      "ETag",
      "+FhHgajjImQDcjkvDyN8Rw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:06 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-51-1640212585510"
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
      "00000002ff8d92614f83400c86ff4bfdca92b10c54927dd81495644eb7316334cb7283826c40f1ee509765ffdd1eea346aa25f8eb63c2d7d5f6e0bebac8cc18365963ed628370729eab10926a8ea5c2b7e54542a040b508b94c9f0f87c307655705b1cbf0cd637e35b9f367769afc7848a1eb010e06d21c9308f1578f75b284581dc16515e17e5a2c92cd09bca14a7e124189d735e506cf2d16c38ec0f863eecac7d632cb45834fc3fdae63b0b56b49c608212cb08cd2e95a415463a30329528aa1c5b8a6a19a182066e5ea492ea4a48a216575a8eddb2dd6ebb63779c23c7b1db0ce614099d51c9ec6ccafb81262df2093db34a7019904dc88293e67ce2721637424c188c42b7dbecf7159018918c177f7215affb20f82f7c60ef0e7ce7444175a9f7d4d9f0aaffdb38b6f473d4693ff47f104ab3517b240c2efd69d8bfbc36dcfc5dfa60a3515d4b621f151a0bed76f7c83974db6fae9e90719abfe36959a30591e0cb719169f012912bdcbd02fc586b847a020000",
    ],
    [
      "ETag",
      "T9GBQ6sIXm9xBkVQXEoyZg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:06 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `amount` = ? LIMIT 1",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-52-1640212585510",
    },
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
      "02ff85536d6f9b3010fe2bc8fbb2694d7869802452d44529ed9068d226a4d5344d898183ba054c6dd3a9aaf2df7740d3974d6b3f85dc3d6f77b61fc92d2b13322611cbee6a100f9f6e78440e08289a6135a0ebd280e9adfd55064972cab38b3ad7a793092258c392b4a872e8495e8b18e478bdea6782d715159cf750a8675b3dd319189669d943db360de449c8d38095b7c8be56aa92635ddf7bf733ceb31c68c5643fe6c5735dbfb7f44af01b8895d4df5aeae822f5f74d8f721e53c5783959af30402d416ca0a02cc7082fcc24faf656bacf68d1cf107ccf62a071cceb5235b15022e665cab25ab4aa64fc48da98af3ec8ca0bbc59a8cd16eb79f8794b8b86bcfda251a96d3602649d2bed64b938d3b6157a5d530972ab5d7df7969ea66d05c45c241b966cb58976a44de7c7587c92682b817fe6879a894112908a956d8c90463934119e36e5ff7b3e0d812a34eb9a1bd770a8393446511ab9713a3cb4a3d480281a46ae4d0f23231e0d6090444091a71af596454b5e5af6c08074e4a4b69bd8966b8c6c2ba5cea1110d46d4b0231b12b0a969ba6477407e0ba6e098c98a4bd6ad8b5c2dfdd0db84cbf57c360dbd768c94e24a8ebb70cd10af732a1c726318cdbcefccb66bba8ca35bb37f7f1e7acbe92cf42fbdeec803c868fcb0bac3434f692e01d154d0021488339ee0e2c8f962e587fe623e0d90d19ee3f91e21c9f8e7e30b217ca8da4dabf6b7f17206adff1e7049f3ba45dc771fc424bbddc1ff154e82c5f4638dbe8d88dd2f04e12def14c8c5da5bfe205d6909290828e38f6f0182dbc6878f75ff72108b6f076da4c2ff78e762d998c402babbc78a3661c7762c67e40c490b16eaef9e6bb8c67ec18d46a3080594ea69a2eee534fb6a5bb57c066113afccdc9f9f62f70f0b9664f3b9040000",
    ],
    [
      "ETag",
      "LaUn0eAk5+sLddGogQul/A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:07 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-52-1640212585510"
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
      "0000000002ff2d90616f82301086ffcbedab2440c6b291f8611aa626c44c3696c8624cad27e280c3b68c10c37fdf15f7a5777dfbf4de3777839fa23e42088722bfb6a8fa871ccdc63609eab6349a4b43b54698001a9133890b77fef5b2798bbb65969caf57b54db3ac9b4e99d0f28c9580f006a702cba386f0fb06b5a890bfedf76a9cc898e91babacd69fd1224a58a8e86885751ac7afb3388261374ce04287044fa8b0966847368a2e28cdcaa6d5a26a4a7434b54aa286111e1f72456d231491c38a13f88ef7f4e8fa9e1f3c0781e732589214a6a09ad9f403d8c6901165421d87058f0135b69cfb349ebf2cfb36d0ee1f9df506f5bb22f6d5682dddbbfd9c6c24c3518d6a710252f0329685b9df873f5993ab4269010000",
    ],
    [
      "ETag",
      "eG0CV9QFLwHZRhqqrYUZZw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:07 GMT",
      "Server",
      "ESF",
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
      "00000002ffedd34b7282300000d0bb64ad0e1ab0d29d164414e45b4036193e41094a2204159cdebd4eaf51df1dde13245986db16715ae11a7c823e99c9936c920acbe8260cbebdec42bd740fc4eee825f5719c07a41d778b69ad10096ef378962c8ac08b16c3d222f575de9954b028bd143144e48e4d29562d23dd9e4f4955fb952baa0d41eeb1d970835b36676b7d6daceeb43294f42b2b2496d9fe45784c09749cdb58b79189f977fee0f28e69ac08e95468f7075119ccfeac84ae051587c2287671702d71d17bf30d9b7bda87dedbfbe07c0bb47cabe791e489a201d171471cc5094bf534cbd0608893b7b77f078c007eb0b2c12d2a5fdba124cb23f0571ff19ee1d7ff154e1adc809f5f432475c919040000",
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
      "Wed, 22 Dec 2021 22:37:07 GMT",
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
      jobId: "grouparoo-job-53-1640212585510",
    },
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
      "02ff85536b4fa34014fd2b64f6ab6de9030a4d9ab56951bb69a902d56c361b32330c389532c80c9ac6f4bfef65b0aec6443f3133f79c7bce7df0821e7891a009223c7bac5975f8b113049d21a67006af97039198bb67f26b3ebbbe5dc9ebc36ee18537d3292078c392785fe6ac23455d512627dbb09b55a22e712544071275ac61a76f8fcc417f603996d5378127599eae78f100ec7ba54a39e9f54edadd4c882c67b8e4b24bc5feedbdf734e89595d831aa64efa3640f5464ef6bd19fb9a05871514cb72118a825ab62b6c73c070bff990939ff98bacbf1be9b01f8895386291575a11a5b90828a22e5595de9ac68f282b4cd7707147a2b6f1e1954e4f5be880bbc67674682158ed5a164c645b0591b4bff6213ac67d172e3c7e1fcca5bcfbaf3cd6abbf643e3eeca0b3c43619233cd35a6c6b9bef97001fd8449c50bad1e35cf8df26b83969fc7d210405ab236188f4d1bf71dd3252919d3d4195a243519210e195b78484cea8ed828210c034f8b6a162e44e1607784eda113133771e2919bb0d87107a39860d7762866636c5be878869e2baed882cb5248de7608dd05cbc88ba360ebcf6791a74b48719dab456bac29e0bd470505c6a6d907e017751d9b2817a0d6b47ce9475e309b47cb5baf9df28a65981ec24798738a73c9008d2b68a062d55a24d034e4cfd6de02c07a6ad7a7a044933f2fa8e97be3e45ddbdfe8110cb1b1acf4178551b0f42fb59d13e216e7b5863cb5075482e57ba80f5c1fff021216b5cd826eb65ef01bb54f014b59c50afafd4401ac03dffe6fa7e5072cac3fc8480577d81f2a1b115ab1768fb82ef7956d0fc6f6d0461a5ca94fb1b1ed9ebad6e46832b23d2bd46b45edf243a1ad582ddf40108415f075b78eff00c71edf407c040000",
    ],
    [
      "ETag",
      "G2od0jwbJCAPVLsPyjDESQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:07 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-53-1640212585510"
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
      "00000002ff8d92514fc2400cc7bf4b7d1dc94086b284075050e240d8c69321e4d80a0cb775dedd2484f0dded4d44a326fa726bbb5fbbfeffbb033c27790c2e2c93f54b89727fb1463d35818faa4cb5e24741b942b000b5583319fb0fa25d7a83c6be1de85df6ac96816d4f3b1d2654b4c14c807b80558269acc07d3a402e32e4b688d232cb17556681de17a61884fe707cc77946b1c9c733cfebf6bc3e1cad73632cb45854fc3fdae6470bb6b4f4718512f308cd2e85a42d467a68642a911529d61495324205155cbd584b2a0b21896a5ca93997b57aab6937ea0de7da71ea36832945422794333b0b783fd0a445ead38e55428b0159852c78559daf5c4ee24a880987e3b0d5acf6fb0a488c48c68b3fb982d7dd08fe0b1fd8c981ef9cc8a8ccf5991a788fdddfc6b1a59fa36ebb61ff07a1341b7546c2e1a81f84ddd1c470f393f4de5ea39a48621f151a0beb76f3dab96ad9efaede90719abfe36a59a20591e0cb719f6870572255787c037c81f7b47a020000",
    ],
    [
      "ETag",
      "dRKa9uLF2y9StwmksbS00Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:08 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `id` != ? LIMIT 1",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-54-1640212585510",
    },
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
      "0000000002ffa5536d6fda3010fe2b99f765930a049a408a843a06d91a894207a1d5364de03897d46d12a7b6d30955fdef3b27a52faad47ed8a7c477cfcbddf97c47ae7911932189787a5381dc7dbc12113920a0698a51d609449a9f9c7ff532f5ebc2eb4fc5c9ce1e8f4688e086a5685e66d052a2920cd470bd6aa75254259542b450a8e53aad6edfb17bdd9eebb96ed7469e822c99f1e21ad9975a976ad8e9ecbddba9106906b4e4aacd44fe18efdcf63aa51457c0b4eabcb4eca08beabc6d7a9c09463517c568bdc2022a05720339e51996f0c48ca32f2fa5db9ce6ed14c1b79c01654c54853665a1041345c2d34ad6aa647847ea329ffd90953ff327a13559ace7e1a72dcd0d79fbd9a2cada6c24a82ad3d6b7e5e2d4da96e8754915a8ad7571e22f7dcbda4a6042c61b1e6fad91756c8de7530c9ad307739c05a7416875b18a1894e6455d4348a30c8cffc39882d797630854a35393dc0cec3eed7af6519444039678876e94d810455e3470e96164b323079c38028a3c6dd46b162d44e17a4749df49a2c471bceec0b507f6c03b4ce0d0663d172049e21ec4ccf3bae4fe80fc955cc394ab5228decc8a5c2c83d0df84cbf57c320efdba8d84e23ca64d71a689e7756a6c7263dba6df377abb37592ed0cd0c3f9887fe723c098373bfb9ef19a494ed563778e309cd14209a4a9a8306792a621c1c395bac823058ccc73364d49778b6472832fc7df7440877653d695d7f8d57dfa9fdf780739a5535e2b6f9213889fb83ff537051e20f4270bd1b36f9b1f6973f49135a4202120af6fe0620b84ebcfb4af74f06b1f868d046693ce3be31654c988466ef785ed7d7b0fb3dcf7107a4064bfd2a87e2fbe11a0da3083914faa1a3e6c99859d5a94a3d823089eb320fe6df31fb0f20ad8a17b2040000",
    ],
    [
      "ETag",
      "c/IogmHVB8lsZW86DoHy0A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:08 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-54-1640212585510"
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
      "00000002ff2d90416f82401085ffcbf40a89a0d8d6c4436d486b438dc5726963ccba0e880283bb4b0d21fc7767b1979dd9b7dfce7b990ece79758019ecf3ecd2a06a1f32345fb689513785d15c6aaa3482036844c6a4ff7c19cba43a3f96e7cfcd4ffc31591fc7cd753e6742cb239602661da43916070db3df0e2a51227fdbedd4309131d3d65659aebec3b73066a1a48315564914bd2ca210fa6defc089f631a6a8b0926847d68a4e28cdd2a6d5a2ac0b7435354aa286011e1e32454d2d1491cb8a1b4c5c6f3a19f99e1f3c05813762b020294c4e15b3c906d8c69011454c570e0b1e036a6839773a9c7f2c4f6da0ed3fba680deab522f6d5682d4777fb57b2910c4735aa4107a4e065bce7e67eef6fc870902869010000",
    ],
    [
      "ETag",
      "29q3cUnk7mkMSZRJ4Ph3uw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:08 GMT",
      "Server",
      "ESF",
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
      "08000000000002ff1dd0db6e82300000d07fe9b3311461d0bd311498b1141102e38570e9b87414575029cbfe7d669f70ce0f28aa8a4e533e8f8c72f00a64a1a26db52d152bbd2b6b8433819711debc011d35ed4c627f54dcfb607deae63757d8be139dbe4fd247d3cac1e87b79ac0d6ef67ae49c82045a386fa03f3bc9f0a1c010c73311ccc6c84769d0c27646b4f1e3500bc4a3e00d7a41b57a661919d37c1f696b73540f4b7f3355c37ddf1da8cf3b39f64a4dcac0b9538d35cbf5464a1b275f167743e4ae49293dd4316ed32813b1ed653c8611abea1af5549e8a69098901b5cb8124a620ed19830da0cbb51374cabba77ba723b401ff09f92caff439f1460b4105f8fd034a6693b923010000",
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
      "Wed, 22 Dec 2021 22:37:09 GMT",
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
      jobId: "grouparoo-job-55-1640212585510",
    },
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
      "6f9b3014fd2bc8fbda242404f290a2354ae98a94900d48ab699a903117ea05708a4dbbaaca7fdfc5345dab4aed0704f63de79e731f3c913daf52322709cfef1aa81fbffc11093923a0688eb7c5d2bde3a1f7f0775f5a35cdf7d95535be5e2e1688e02d4bd2f250404f8aa66620e7bbb09fd7a239d05a881e26ead9766fe88ccdd170644f6d7b68224f4291ad79b547f6ad5207391f0c4edafd5c88bc007ae0b2cf44f9723fb81f0d0eb5f8034cc9c15bc901aac8c1c7a25f0bc1a8e2a25aec4234d048a86328292fd0c27f669a9cbf4ddde7b4ece708bee70c2863a2a9546b0b533051653c6f6a9d95cc9f88b6f9ea8384eeda5d45061345535671454b383352aa68ac1e0f605c06db8de1f997db60b38cbcad1f87ab2b77b3ecafb6ebddc60f8d9b2b37700d45930234d75818e7fae4e301f553908a575a3d6aaf5be5e70679efc7d212505a42178c27a6438753739664c9846553cb4e321392649a4c6c6a25269b8d619c264091a745358b56a2b292ccb16c96c496e3d0783cb3c7f12ca54e0c2cb5a83385c9649291e31979a8b9820b2e0f42f2ae43e426f022378e829dbf5a46ae2e21a34da12e3a636d01af3d2a2c3036cd21023fa8ebd846b940b5b6e59e1fb9c1721579d76e37e535e4943d867738e78c1612104d6b6ca0827a23526c1af1971bf702c17a6adf4f4149e6bf9e48dbf7d6c9abb6bfd0231c626b59e93709a3c0f3bf693b27c4352d1a0db9ef3ec8012ddf627de8faf81b91b8a85d16f263e7063f49771540063554ecf3892258073efddf4ecb8f585c7f94910acfb83f4cb622ac866e8fb82ef799ed8c6643cb261a5cab77317c4e5d6b73b419a1844a3d57d42d3f16da8935f20584415c015f77ebf80f9cc467df7c040000",
    ],
    [
      "ETag",
      "lAEqiSIwxkm3ragkfHn4VA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:09 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-55-1640212585510"
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
      "df65bc2d09108aa40917c8411b395313a32164d90ea5d876eaee564308efee6c45346aa237db99e937d3f9ffee019ee22c040fd671f45ca0da5f4468663698a32e12a3f99153a6111c402322268b40ddfac9fd60d737dd87b42e7b13399b46ed36135a6e3115e01d601363126af01e0f908914b94d5252a4d9aacc1c30fbdc1617c1dc1f5f739e5268f3f1dd70d8b91af6e1e89c1b4361c4aae4ffd1b63c3ab0a3f51c37a830936877c915ed501adfcad422cd13ac682a94440d255cbe881415b9504415ae545cb7526b36aaf55add6db96eadca60425298983266ef16bc1f18322299d32bab842603aa0c59f0a63c5fb81c87a5101bfae3a0d928f7fb0a2894a4c2d59f5cceeb6e05ff850fece4c0774ea45464e64c0d8693ce6fe3d8d2cf51bd4ed0ff4168c3469d91c01ff517416734b5dcf224fd6a6f504f15b18f1aad85b56aa3e55e36abefae76c93acddff18c2ad00129f872dcc406bc8d48341edf00ffe976837a020000",
    ],
    [
      "ETag",
      "uTrKIlXFjEtCZm2cDOcQPg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:10 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` != ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-56-1640212585510",
    },
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
      "0002ff85535b4fdb3014fe2b99f7b249b44d2f494ba58a7525db32f5026d0a9ba6a9b59d936248e2103b0586fadf779c502e9a064f717cbecbb9f99e5c8934247dc2c4e6ba80fceefda564e48080a61bbc9dd03f3fd2dbcf57eab605a797c132feded9766e06034408c35234c962a82959e41c547fb9a86f7259643497b2864235c7ad35dd8edd6ab69c9ee3346de42988a3b148af907da175a6fa8dc6debbbe91721303cd84aa73993cde37b6ad4696cb4be05a355e5a36d045355e373d8a25a75ac874b05c600285827c05091531a6f0c40cd9a797d2754193fa06c15bc181722e8b549bb45082cb34129b222f5549ff9e94693e3b908537f64681359a2da7c187354d0c79fdd1a2ca5aad725045acad2ff3d9c45a67e8754115a8b575fecd9b7b96b5ce81cb3c5c89706d0dac236b383db69e706beb9db91cfb133fb09a984b084a8bb4cc24a02c0693c543b3fc7f47640854a34e155c756d97367bf6218b589747bdb6c3221b18ebb1ae43dbcce6871de8840c28f2b4512f593495698fb59d56c45ce6b4c166ed0e431ced31eeb89cb110c208d8a10d5d9bec0ec84d2e341c0b954925aa8e91f3b91f78ab60be9c8e868157961151ecca71959c29e2799e1a8b5cd9b6a9f795da76262a24ba9911f8d3c09b0f47817fe655531fc386f2bbc535ce3da2b10244d39c26a0219fc8101b474e660b3ff067d3e11819e5284ff60845fabfee9f08c15d56765a975fe3e5764aff3de08cc64589d85607d224bbddc1ff1516c1dc9f7e7d5d629861b528f31b51b8e89502395d7af39fa4ba9a430439a4fced2d40701978f3bdee1f0f62f1f9a08dd2f88f3bc79531e13954bb2792b2ca8aedb6eda66ba685e05cff136bf5ec7d838d8651840452fd5051f5784cbfca50a11e4118c49599969ddafd05657f0240bc040000",
    ],
    [
      "ETag",
      "MazXnxBksx2eQjTUlJ4v4w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:10 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-56-1640212585510"
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
      "000002ff2d90d14ec2401045ff657cb48d2d526248781053958410a812130d21cb765a0b6da7ee4e354dc3bf335b7cd999bd7b76eecdf4702aea14a67028f29f164d7793236f5c93a06d4bb6521aaa2d8207c82a17323935667dc7f6b6ec56cf1f59709f6af3b999cd84b0fa1b2b05d31eb202cbd4c2f4ab875a5528dff67b334c148cbbc6298bd57bfc12272254943a61b55d2e1fe7cb18cebbb307473a2498a1c15aa31bd9183aa2e6854b6b55d594e85b6a8d460b033c3ce486da4619225f143f9af8e1641c8cc251f41045612060495a7141b5b0db37101b265665427f12164201ccd04aee6c387f451ebb40bb7f74de31dab521f1b5e82c83abfd13b9482c51d9b4e88156b28cd782aff7f30525cb32a869010000",
    ],
    [
      "ETag",
      "RkprP/ts+lyNFWf03dcrZQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:10 GMT",
      "Server",
      "ESF",
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
      "4d",
      "72",
      "82",
      "30",
      "18",
      "00",
      "d0bb646d1d20fc98eed4518906444c45dd3010bea2050101d1d0e9ddebf41af5dde17da34808689ab02d3328d03b9291468662182be37da7f4dcbb5c47b4f0b5e662339cca0416496dcd77e3a05e5f3b4f3b7ac2142d397ccc1a69e58fb562aa24eb589015712023653167babb7283c94ac7f73dbfd307e51d8c54478d59dad0153e1daf07233504bb7d816babf6ee92857ca95b4e256ec08eda1b9dfa66bf746649349b7a53f9393294b4e5581ebc6d6fe71cee8b13f393d8ccba759eaa56b6d19745e8736a603c21d47adb4a9710d3ddf47ba8ca2e77a45fb95096bb6cf8f2f2efa001824775aea109cfcfedd8206480feea87adace0f97f02510d35faf9054b94d61619040000",
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
      "Wed, 22 Dec 2021 22:37:10 GMT",
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
      jobId: "grouparoo-job-57-1640212585510",
    },
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
      "0002ff85535d6f9b3014fd2bc87b6d0234212491a2354ae98a94908d9056d33421dbb950b704336c3a4555fefb2ea6e95a556a9fb07dcfb9e7dc0f9ec8832877644a98c8ff34501fbedc4b46ce08689ae3ebadad0b2fbbd37178588e3c71982cedd1433e9b2142b42c45f755013d259b9a839a6e37fdbc964d456b297b98a8e7f93d773474cedd736fec79ae833c0545b614e503b2efb4aed4d4b64fdafd5ccabc005a09d5e772fff26e3f9edb552def816b65bf95b45145d91f8b7e2d24a75ac872b6dda08146419dc29e8a022dfc67eed8c5dbd47d41f7fd1cc18f8203e55c36a56e6d610a2ecb4ce44d6db292e91331365f1dc82658068bc4e2b268f6655ad23d9c593baa69aa0f155857f17a6585d1d53a5ecd93701da59bc575b09af717ebe576156dacdbeb200e2c4d5901866bcdac0b738bf082fa3b505a94463d699f5be5e70685efc7d212505a41174c7d6744ddb1336119f379361e782c7380b131f33d3a600e9f0c61b863409167440d8b96b274bdcc1b804fd3cc676e3ae4fe249df8832c052fdb9db36c34767d468e67e46f2d345c0a554925ba0e91db384c823489b7d1629e04a6848c3685beec8cb505bcf6a8b1c0d4715c047e50d7b18d0a896a6dcbc32809e2f922096f826eca4bc8293f6cfee09c335a284034adb1811aea95dc61d348345f0597083653fb7e0a2a32fdf544dabeb74e5eb5fd859ee0105bcbda7cc92689c3e89bb17342dcd0a23190c7ee402ab47c87f5a1ebe36f44e2a27659c88f6d10ff24dd530c19d450f2cf278a6013f8f47f3b2d3f6271fd514669bce3fe70d58af01aba3d12a6dc67f668e0f8fe881870addfc5268e7fea5a9ba3cd087b28f57345ddf263a19d58a35e4018c415884cb78eff00749ba1e67c040000",
    ],
    [
      "ETag",
      "W/tl5fhtRIyL65iy9L/6kg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:10 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-57-1640212585510"
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
      "400c86ff4bfde84880b06196f861282ac94464c3c41842ce5b81e96d9d77370d21fc777b53d1a8897eb9b5ddd3aeefbbdbc2635e6610c27dbe7aaa516f0e5668af5d3045532b6bf8515169103c402b564cde1aa58a6432981d06c94b2e6faa7ed08fa3e363268c5c632120dcc23247951908efb6508a02b94d92aa8b72d1641ed84de58a493a1d8dcf392f2873f97816c7d1201ec2cedb3766c28a45c3ffa36dbef3e081eea7b8448da544b74ba5e901a51d3999461495c296a15a4b34d0c0cd8b95a6ba129aa8c59596df6f75825ebbdbe9fa47bedf6933a8480a9b53c9ec2ce1fdc092156a4a2fac1202067413b2e065733e7339cf1a212e1c8dd3a0d7ecf715d02849678b3fb98ad75d0bfe0b1fd8bb03df3951505dda3d75165f45bf8d634b3f479d46e9f007612c1bb547d2d1e53049a3cb89e3e6efd2071b8b66a2897d34e82cecb47b477e3f68bfb97a42ce69fe4e68758d1e48c197e322b7102e8532b87b05775763827a020000",
    ],
    [
      "ETag",
      "YsllmSPBU+6SwicVp767LA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:11 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` != ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-58-1640212585510",
    },
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
      "5b",
      "6f",
      "9b3014fe2bcc7bd9a426014248881475594237a434e90869b54d53628ca1ee0053dbb4aaaafcf71d43d38baab54f189fef726ebe477f5999a0318a59765d5371f7f18ac7e808518533b82d4ece7fd113a5dcaf786ed3f54a45fddbf476320104d32c898b2aa71dc96b41a81c6fd6dd4cf0bac282f30e087506a38ee53aa66dd983d1606099c093344f17acfc0bec4ba52a39eef50ededd8cf32ca7b862b24b78f178dfbbb17b95e0579428d97b69d90317d97bdbf438e7042bc6cbc9660d09d4928a2d2d30cb21852766127f7929dd65b8e86600be61846242785d2a9d1648105ea62cab45a38ac6f7a849f3d901adfd853f8b8cd96ab38c3eed70a1c9bbcf0696c6762ba8ac73659c84ab53635781d7259654ee8c8bef7ee81bc64e50c245b265c9ce9818c7c67439379e703be383be5c04a7416458904b42a56265934984e39cea2c1e9a15bc1e912660053a6d703b345d6c8d4c2f4ee3214947fd419c9a348e47f17080fbb1493c873a494c31f094566f58b8e4e530b19dd8eb3bae65c75692c48eddc79e476c6c2683c41a9a187bee28c50eda1fa15bc1149d335971c9da8ea18b3088fc6d146e96b369e43765a418ba326f93d3453ccf5341915bd3d4f5be51db5e471907373d826019f9e1741605e77e3bf505cd30b95b5fc3dc539c4b0a682c70411515a73c81c6a1b3d53a8882d572ba004633cab30342a2f1effb27427457359d56cd577bb94da98f80739cd70de2a63d200bedf747ff57584761b0fcf6b604aea05a90f9032858f45601fdd8f8e14fd45e8534a58296e4fd2d00701378f7bd1e1e0f60e1f9808d54f00f3b47a4362182b6bbc78aa6ca96edf6ad91eda2062cd4ab98e77887066b0dad480b5aaa878adac7a3fbd5846af9088220acccb2e9d4fe1f527269b7bc040000",
    ],
    [
      "ETag",
      "mFVZeFtt6BaD2eSOtT3wfw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:12 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-58-1640212585510"
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
      "0002ff2d90414f83401085ffcb7885581a692a490f4589d634b5a25c6a9a660b035281c1ddc18690fe7767a9979dd9b7dfce7b9901becb2683008e65f1d3a1ee6f0ae437dbc468ba8a8d94961a83e000b22a840c7761f57a7bbe27de25a76d6f5ee68f45bc5c2c8430e917d60a8201f212abcc40f03940a36a946f87831e270ac67d6b95d5e6237a8a62116acaacb049d6eb65b88ee0b2bf3870a2638c396a6c52b4235b4d274c7965d31a55b715ba863a9da281111e1f0a4d5dab34912b8aebcf5d6f7637997a537feefbde44c08a52c52535c226ef20364cacaa98ce12163c01f4d84aee7c3c7f459ed940fb7f34ec19cd5693f81ab49693abfd03d9482c515977e840aa6419cf255fef973fa25e55bf69010000",
    ],
    [
      "ETag",
      "BZBlO/w9otZUjPysJ8DgRA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:12 GMT",
      "Server",
      "ESF",
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
      "59",
      "6e",
      "82400000d0bbccb731ec4aff104150566901f999b08c04109019f6a677afe935eabbc3fb06719a224260df56a8011f608919719b6e134a0a476afd34b345e2277511a6aa49711e590d3bf88874d09bf76ce59cf87371f5c2322b291729c42e3937f703eaa874ee2d1179a6f62eb9c75f69693a9b5d6628ed51bf7f3d5cb7a81c75189545d84b5ca4d37518a9ac2aed46d5ef02aed2485b37ba168aa34c42f961e5739c9c4ccb464fd80f49aa1b8ea8b76cff88d0d0f9dea809328b271afbb79db197292b8476995470cd0a6738078b8f9dfac20cb2aa1d94fb7ac1862d476bba7d7bfb77c006a0f959604460f1dacef2a2b8017ff561bf3cd1ebff01c51861f0f30b4f283c1e19040000",
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
      "Wed, 22 Dec 2021 22:37:12 GMT",
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
      jobId: "grouparoo-job-59-1640212585510",
    },
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
      "00000002ff85536b4fa34014fd2b64f6ab2db4425f49b33615b5494b9552dd47366466b8e028659019dc18d3ffbe97c1ba1a13fdc4ccdc73ee39f7c133b9174542268489eca186eae9db9d64e48880a619bedaf69d5838bf86fafe7a7939663f86ae777e76359d2242342c4577650e1d25eb8a839a6c37ddac9275492b293b98a8e38d3bbd81ebf47b7d6fe4793d07790af274298a7b64df6a5daa896d1fb4bb9994590eb414aacbe5eef5dd7eecdb6525ef806b65bf97b45145d99f8b7ecf25a75ac862badda0815a4115c38e8a1c2dfc6726ece47deaaea0bb6e86e047c181722eeb4237b6300597452ab2ba3259c9e499189b6f0e64e32ffd79647199d7bb222ee80e8eac846a1aeba712acb370bdb216c1d93a5ccda2c53a8837f30b7f35ebced7cbed2ad85837177ee85b9ab21c0cd79a5a27e616e005f513505a14463d6a9e1be597062d3e8ea521a0b48236180f9d01ed8d9c314bd990a7a3638fa50e303662438f1e33878f5d701306147946d4b068210bca9837480162840e62d74d8e63e60c7b31837e3fe15e3a721c4ef647e46f25349c0a554a25da0e919b7011f971146e83f92cf24d0929ad737dda1a6b0a78eb516381b1e3f410f8495dfb262a24aa352d5f04911fcee6d1e2da6fa7bc848cf2a7cd03ce39a5b90244d30a1ba8a15ac9049b4682d9ca3f45b099dae521a8c8e4f73369fade3879d3f6577a84436c2c6bf3259b285c04e7c6ce01714df3da401edb0329d1f22dd687aef77f10898bda6621575b3ffc49daa71052a8a0e05f4f14c126f0e5ff76587ec4e2faa38cd278c7fde1aa11e115b47b244cb92fecc171df755d62c095fe10f3bce1a16b4d8e2623eca0d02f15b5cb8f85b662b57a056110572030dddaff03c0eac8087c040000",
    ],
    [
      "ETag",
      "//jiI0Z7tkVLP9bX745GFQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:12 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-59-1640212585510"
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
      "83400cc7bf4b7d65094c4025d903d3a94bd8d40d7d31cb7283b2e180e2dda12ecbbebb3dd469d4445f8eb6fc5afaff735b58e7550a012cf2e563837273b0447d638209aaa6d08a1f35550ac102d462c9e4a13dba7b09d77a13752faffc4ca4b12bd761afc7844a56580a08b690e558a40a82fb2d54a2446e4ba868ca6ade6616e84d6d8ad378321c5f705e526af2f16d1485fd68003b6bdf980a2de62dff8fb6d9ce82075a4c304389558266975ad203267a68642a51d6057614353241052ddcbe584a6a6a21893a5ce978271dc777edaed3f58e3dcfb1192c28113aa78ad9db29ef079ab42826f4cc2ac16740b6210bcedaf389cb79da0a31e1701cfb6ebbdf57406242329dffc9d5bcee4af05ff8c0de1df8ce89929a4aefa9f3e82afc6d1c5bfa39ea2c8c073f08a5d9a83d120f4783691c8eae0d377b97dedf6854d792d84785c642c7768fbd23df7e73f5948cd3fc9d40cb062d48045f8ecb5c43908942e1ee155941528e7a020000",
    ],
    [
      "ETag",
      "30MVxAktyL2HO6fadT4rkA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:13 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `date` != ? LIMIT 1",
        types: ["INT64", "DATE"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-60-1640212585510",
    },
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
      "3010fe2b99f7659368ebbc342d952a5695b0452a05da14364d53eb38976048e3123b3084fadf774e282f42834f71ee9e97bbf3f9815c8b222103128beca682f2fef3958cc91e01cd328c1e7d3fa367979de9d1cfdecd9d6d177f8bb37976371c2242189662eb4d0e2d25ab92831a2ce6edac94d5869552b650a8e5d396ed7bd4b19d6ebfdbb529f214e4e94414d7c8bed47aa3069dcecebb9d4999e5c03642b5b95c3fc53bb74e6753ca2be05a755e5b76d04575de373dc825675ac862b8986301958272096b26722ce19999c4df5e4bb7055bb73304df0a0e8c735915da9485125c16a9c8aab2562583075297f9e240e6c1241847d6f864318dbeacd8da90575f2da6ace5b20455e5da3a9a9d1c5bab0d7a5d32056a655dfc08668165ad4ae0b24c9622595943ebc01a4d0f3198300d2beb93094cc2e330b26cac2301a545515711b1380753c1e3a0c2b7d763084ca357935cf6a8cfec3edd8fd3b8c7d3bedb8d530a71dc8f7b5de6c694ef7be0253130e469a35eb358210be6a5b66f3bb407bee3f2beedb97e02d4b7bd94f6f6fb3dafcb81a6ae9d92ed1eb92b858643a1365289665ae4621646c1329a2da6e35114d46da40c2772d814679a7859a7c62697949a7edfe96d6bb242a29b197f388d82d9681c85e74173e313c818bf9fdfe09da72c57806856b23568288f65828323a727f3300a4fa6a30932ea6b3cdd211419fc7e782644f79b7ad2bafe1a2fdfabfd778073965735e2b639109b6cb77bff573834637857c0a10e6d51a7657751e90f4271cf1b1172b60866bf48139a410a2514fce34540709df8f0b9eede0e62f1f5a08dd2f88f6bc79531e12534eb27d675a30ddb775d97baa40697fa4dcef39cdd8c8d8651843514fab1a3e6ed9891d5a94a3d8130895b330da7df31fb0f113e7213bb040000",
    ],
    [
      "ETag",
      "FGQ0Qh/NFX7qw11nxnQSgw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:13 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-60-1640212585510"
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
      "000002ff2d90d16a83401045ff65faaa54439522e4a129360948486c130225848d8e46ab8ed95ddb8af8ef9d357dd999bd7b76ee6506f82a9a1402b814f9ad43d93fe4a877a689517595565c5a6a148205a845cee4d12faf6a7ba81e9dd56d79f87d7348e5b49bcf9950c9156b01c100598155aa20f81ca01135f2b7f3594e1319d37d6b94f5e6235c86310b35a546d8eca3e8651185309e460b4abac498a1c4264133b2955462a2d726ad12755ba1ada893092a98e0e92197d4b54212d9acd8be63bbfe93337367deb3e7b90e8315254217d430bb7f07b6d1a44515d30f8705970139b59c3b9bce6f967d13e8f48f2e7a8d6a2b897d151a4be76eff4a2692e6a85a766841227819ab42dfefe31fd606fe0c69010000",
    ],
    [
      "ETag",
      "X6jhsPVl/0HqGVxF0osgoQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:13 GMT",
      "Server",
      "ESF",
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
      "000002ff1dd0d97282301400d07fc9b33a2c83357d2394b2a8016529f892217815dc5804c438fdf73afd84735e28cb73b8df59579de1863ed13353f02c9f71494f06498434e8a686ba5df23579147e4cd48ba3426cca128c8155f67a95086a06b2de1f8683c518cf4c276c3e7c7d131f2dd30e58c7a3ebfedccf592505def000a80b2da53fa3dcda97958d17a396fbc9171ce252a4cbc57ec057873c9ce3d2eabfe5a029864c559453bd7bbab433420033e4b192f9fc24d99670e3511879bb2347b7699ccd341a578d10b6bb868b82f1dc6ec8c2a1375e86094d0d4ba35ee4eadb824cbd1deb72344130d6650b7756beddaa86f104fd27b0ee59c37b8240d6428b7eff00adaf88b623010000",
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
      "Wed, 22 Dec 2021 22:37:13 GMT",
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
      jobId: "grouparoo-job-61-1640212585510",
    },
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
      "00000002ff85536b6f9b3014fd2bc8fbda2440c8538ad628256ba4847484b49ba6091973a16e09a6d8a48daafcf75d4cd3b59bd47ec2f63de79e731f3c937b9ec7644c229e3e54501ebedc89889c115034c5d7d13cb6d5615f2dedc1f249cc7f5c5d16f7fc71324104af5992ee8a0c5a5254250339de6eda6929aa829642b43051ab6fb5acbe63da96dd1bf67a96893c0959b2e4f93db26f952ae4b8d33969b75321d20c68c1659b89ddeb7b676f778a52dc0153b2f35eb2832ab2f3b1e8d74c30aab8c827db0d1aa8249421ec28cfd0c25f661c9dbf4fdde674d74e11bce70c2863a2ca556d0b533091273cad4a9d958c9f89b6f9e64036eed29d05061359b5cbc39ceee0cc88a9a2a13a1460ccfdf5ca5878f3b5bf9a068bb5176e6697ee6ada9ead97db95b7316e2e5ddf35148d32d05c63629ceb9b8717d48f412a9e6bf5a07eae955f1ab4f87f2c3501a52534c17060f6a935344751120d5832ecf6a2c484281a46831eed46261b39e0c41150e46951cda2b9c8e9281900c24307ec7ee80cec241c021b84d01ff6980310f56d468e67e4b1e40a2eb82c84e44d87c88dbf08dc30f0b7de6c1ab8ba84845699ba688cd505bcf5a8b0c0d0342d047e50d7b18e72816a75cb175ee0fad359b0b8769b292f21a5ecb079c03927349380685a620315942b1163d388375db91708d653bb3a052519ff7a2675df6b276fdafe4a0f7088b565a5bf6413f80bef9bb673425cd3acd2907d7320055abec5fad0f5f1372271519b2ce4fbd6f57f92e6c987044ac8d9e71345b00e7cfabf9d961fb1b8fe282315de717f98ac455809cd1e715dee0bbbdfed8e4643a2c1a5fa37e65856f7d4b53a479d117690ab978a9ae5c7421bb14abe8230882be0e96e1dff00bde18ea27c040000",
    ],
    [
      "ETag",
      "9Fd2tyvuL27LxoFXPHpkiw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:14 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-61-1640212585510"
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
      "5d",
      "4f",
      "c2",
      "50",
      "0c",
      "86",
      "ff",
      "4bbd1d9111986689174351d10908235e18420e5b99c36d1de7434308ffdd9e8968d4446fcedaee69d7f7ddd9c2735626e0c3224bd706e5e628457d6f83312a936bc58f8a4a85e0006a9132191eaf83abe9433e5437ade76b4ad7b72b635ecfce9850f1131602fc2d2c33cc1305fee3164a5120b7c5949ba29cd799037a53d9e2241af707579c1794d87c300dc3a01bf660e71c1a13a1c5bce6ffd136db39b0a2c5189728b18cd1ee52495a61acfb56a612459563439191312aa8e1fa452ac954421235b8d2f0dc86ebb59b2db7d539ed74dc268339c5426754323b9df07ea0498b7c4cafac123c06641db2e0657dbe70394b6a2136ec0f22af5deff7159018934ce67f7215affb24f82f7c607b07be73a22053ea0375190e83dfc6b1a59fa32e82a8f783509a8d3a2051ffae378982bb91e5667be9dd8d463592c43e2ab416bacdf669e7c46bbebb7a4ed669fe8eafa5410762c197e33ad3e02f45ae70f7066814b0287a020000",
    ],
    [
      "ETag",
      "L/qAGUWlOsJ2kHogqKjuuw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:14 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `stamp` != ? LIMIT 1",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-62-1640212585510",
    },
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
      "6d",
      "6f",
      "da",
      "3010fe2b99f765930a71422080547588665b24de06a1d5364d603b4e6a1ae234765a5515ff7de7a4acadaab59f887ccfdb9dcf3ca06b91c76888a8486f2a5ede7fdc498a4e10d72485d325bff3693edf659ddda2d2b83bb2c329494f4f01210c4b917d91f1969255c9b81aae57edb49455414a295b20d4eab92da7e761d771bbfd6ed7c1c0533c4b2622bf06f695d6851adaf6d1bb9d4a99669c1442b599dcff3bb76f5dbb28e58e33adec979636b828fb6dd3b34c32a285cc4fd72b0850295e6ef89e880c223c3163fae5a5745b907d3b05f0ad609c3026ab5c9b5820c1649e88b42a6b55347c4075cc671f68154c8271648de7eb59f4694bf686bcfd6c11656d36255755a6adafcbf9d4da16e0754514575bebf27bb00c2c6b5b7226cb7823e2ad756a9d59a3d9391c2a0de1b6d607733209a76164391024e64a8bbc8e11119a7113e17152e1ebfb3104a2c1ac296e7cdc234e1f0f68427d96f43b5d9a604e699ffa5dd2a1980d3ceec59413e069a35eb3482e73cc63b7475dda4928f193be1763d7f7071d8209f7fa3d36205e87b2be3340871374570acdcf852aa412cdb8d0e5328c824db45ccfc6a328a8db48088ce4bc09679a789e5343931b8c4dbf6ff476305521c1cdcc3f9c45c172348ec28ba0b9f2094f09bb5fddc0a52724531cd0a4247bae793995310c0e2de6ab300ae7b3d10418f53d2e8e088586bf1f9e08d17d514f5ad7bfc6abe7d5fe47c005c9aa1a71db7c20071d0e27ff5788c269b08a46d3c5db2a2e76710bc3767723c71d3a9da1e3b531c6bf40fc0f1061f71b5df4631d2c7fa2e668c9135ef29cbdbf1b00ae0bef3ee1e37b022cbc28b081e5d40236912963c24ade6ca4d8d7bd37ec5ec7f37d1fd5e052bfaaf57def3876a36114f99ee7fab1a3e63d9929d6a54afd03997fa9f56c16cebe41f52f3559a471cf040000",
    ],
    [
      "ETag",
      "Rew7bnOjl3jPut05A/IMag==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:14 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-62-1640212585510"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff2d90d16a83401045ff65fa58050d518a9087264813b069631b089410363a5a5375ecee983648febdb3a62f3bb377cfcebdcc005f559b4304c7aafcee515fee4ae48d6d52347dcd464a47ad417000599542ee729c76457abf0b9f97f1f19717a7f34bb899cd8430d927360aa2018a0aebdc40f43140ab1a946f87831e270ac697ce2aabf57bfc14a72234945b61bd4d92c77912c3757f75e044c7140bd4d8666847769a4e98f1caa635aae96a740df53a4303233c3e949afa4e69225714379cb87e38f526fe24780802df13b0a64c7145adb0db37101b2656754a3f12167c01f4d84aee623ccf228736d0fe1f9d5f18cdab26f135682dbd9bfd826c2496a8ac7b742053b28c65c5b7fbf50f6b787b6369010000",
    ],
    [
      "ETag",
      "Xde4pfR+X6MHEbxtCjvO6Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:15 GMT",
      "Server",
      "ESF",
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
      "0000000002ff1dd0dd6e82301880e17be9b19aeac0b53b03111448248a2b78d214f814a83f20ff2cbbf791ddc09bbccf0f12710c55c5eb978427fa428358d145bc88b016b478f40f81d4cce4cccb325bab05b500ccbd0756bf9466d2289b6e494cea3c92ad93aebb5256b2694f4cb9e6964b945c63fbcfb1a577d0af2c149545882e58131dd949a439eb3db963561f9f2414e1d0b99cdb4dc1bbdcbe11cd812648979838243a5c0fb63b4f8fad1ec1b7595fb0a217198dcead31de1a7fb5e31ed5a6b6f042fcd4c2f1e8ee3a635bceeb017cff1587f63abf1b763a3742553c12bc71fd9a44585c249a21e88bec0d15cfa6ef0f95d219fa47e0f550c024a18378c31bfdfe0172ccf1a823010000",
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
      "Wed, 22 Dec 2021 22:37:15 GMT",
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
      jobId: "grouparoo-job-63-1640212585510",
    },
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
      "91f795b6e923a5ad548daa8411a94d479a82d83445b673130c499cc54e1142fdefbb71280321c1a7d8bee7dc73ee23cfe4411431991126d2bf35544fdfee25232704344df1f5660c4ef0cbbb7abc38ad459ed9fcd6deb3c7f91c11a261299a97197494ac2b0e6ab6db76d34ad625ada4ec60a2ce78d8e98f47f6a03f70268ed3b791a7204b56a27840f69dd6a59af57a47ed6e2a659a012d85ea7299bfbef7f6835e59c97be05af5de4bf65045f53e17fd9e494eb590c57cb74503b5822a829c8a0c2dfc67c6ecec7deaaea0793745f05e70a09ccbbad08d2d4cc1659188b4ae4c56327b26c6e69b03d9ba2b77195a5c66755e4405cde1c48aa9a6917e2ac1ba08366bcbf32f36c17a117a1b3fda2e2fddf5a2bbdcac766b7f6bdd5cba816b69ca32305c6b6e9d999b8f17d48f41695118f5b0796e945f1ae47d1c4b434069056d303ab5c7b43fb1a72c61a73c990c1d96d8c0d8849d3a74c86c3e1dc12866409167440d8b16b2187244f218a2416cf7a3111b4ea3e98425d1948e06a338a13049801c4ec86325349c0b554a25da0e919bc00bdd280c76fe7211baa68484d6993e6f8d3505bcf5a8b1c0c8b6fb08fca4ae43131512d59a967b7ee8068b65e85dbbed94579052feb4fd8b734e68a600d1b4c2066aa8d632c6a6117fb176cf116ca6f6f3185464f6fb99347d6f9cbc69fb2b3dc4213696b5f9926d1878fe0f63e788b8a6596d20fbf6404ab47c87f5a1ebc31f44e2a2b659c8d5ce0d6e49fb1440021514fceb8922d804befcdf8ecb8f585c7f94511aefb83f5c3522bc82768f8429f7853d1e3a23c7fcad9a56fa436c6c4f8e5d6b723419218742bf54d42e3f16da8ad5ea1584415c01df74ebf00f14",
      "8c5f7b7c040000",
    ],
    [
      "ETag",
      "W6e5RZIQwF7uiml0cY0vbw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:15 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-63-1640212585510"
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
      "02ff8d925d4fc2500c86ff4bbd1dc9866c92255c8020620015c68d8690c356e6745be7f9c010c27fb7672a1a35d19bb3b67bdaf57d77f6f094950984b0ced26783727792a2beb5c10c95c9b5e24745a5427000b54899bc9af7bc272f386dfb9766e7bef486777db34d3b1d2654fc808580700f9b0cf3444178bf875214c86d31e5a6285775e680de55b6388f66a3e990f382129b4f17e371b7371ec0c1393626428b55cdffa36d7970e091d633dca0c43246bb4b25e911633db2329528aa1c1b8a8c8c51410dd72f5249a61292a8c1954670daf08296dbf49a7edbf73d97c19c62a1332a995dcc793fd0a4453ea31756090103b20e59f0a63eb75cce925a880d47d32868d5fb7d0524c62493d59f5cc5eb3e08fe0b1fd8bb03df39519029f591ba185f777f1bc7967e8eea77a3c10f426936ea8844a3c9601e752737965bbe4befed34aa1b49eca3426ba1e7b6dafe59e0beb97a4ed669fe4ea8a5410762c197e332d3106e44aef0f00ad40d52ad7a020000",
    ],
    [
      "ETag",
      "JSB1k16385Huy0wBGZDuvg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:16 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `amount` != ? LIMIT 1",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-64-1640212585510",
    },
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
      "5b6f9b3014fe2bcc7bd9a42681241012a9eaa2846e6829e90869574d53628ca16e0153db74eaaafcf71d43d38baab54f9873becbb9d8f7e89a95099aa09865373515771faf788c0e10553883e8cfd165987f8fc378393c5b05177fed59be9c4f0f0f01c1344be2a2ca6947f25a102a27eb553713bcaeb0e0bc03421d67d8b19ca1d9b7fab66bdb96093c49f374c1ca6b605f2a55c949afb7f7ee669c6739c515935dc28bc778efb6dfab04bfa244c9de4bcb1eb8c8dedba647392758315e1eae5750402da9d8d002b31c4a786226f19797d25d868b6e06e05b46282684d7a5d2658104e165cab25a34aa68728f9a329f1dd0ca5b78b3c8982dd741f4698b0b4dde7e36b034361b41659d2be3385c9e18db0abc2eb1a4726b9c7ff342cf30b682122e920d4bb6c6a171644c8339041f248c0f3ab4f04ffcc8b0a092844ac5caa68e08c739d5353c8cca7fbd204dc00adcdae466643ad872cd719cc62392ba033b4e4d1ac76e3cb2f12036c9784887494c31f094566f58b8e4a51b136b6c53d771697f384e13628d869ade27ce007e5d37c1fdd82603b43b407f045374ce64c5256be785ce433ff23651b80e66d3c86bda4831cc64de16a79b785ea7822637a6a9fb7da3b79dce320e6e7a017e1079e17416f9675ebbf305cd30b95bddc0d6539c4b0a682c70411515273c81c1a1d3e5ca8ffc65305d00a359e4e91e21d1e4d7fd1321baab9a49abe6abbd9c61e3bf079ce1bc6e10b7ed015968b73bf8bfc2f162397d5fa36b0362f71b4070cd5b05f463ed8517a80d8534a58296e4fd5b00e026f1ee6bdd3f1dc0c2e3011ba9e01fee1c91da8408dade3d563415b66c67e0d88e831ab050af7223d3dc0f586b68455ad0523d74d43e1d3daf2655cb471024e1ca047ef015b2ff00306f3377ba040000",
    ],
    [
      "ETag",
      "X7hRlKbRbO4VSNYz5ClODA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:16 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-64-1640212585510"
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
      "61",
      "4f83301086ffcbf9d11161197321d90767a62e32e2984b346659baee40b070d8160d21fbef5e995f7ad7b74fef7d733d7c15f509223816f9778bbabbcad16e5c93a26995355c1aaa0dc208d08a9c49f5bc96ebd9b528bbece156bd276515bcdd6ce673268cfcc44a40d44356a03a19883e7aa84585fced70d0c344c66cd7386595bc2e1f97290b159d9c90ece2f86e112fe1bc3f8fa0a4638a196aac25ba918da612a55db9b446548d42cf50ab251a18e0e121d7d436421379ac78d389174c27fe381887b3300c7c061549610baa99dd6d816d2c59a152fae5b01030a087967367c3f9c372e802edffd14567d1bc68625f83ced2bfd8df938b6439aad52d8e400a5ec653612ff7f31f1a33c0c269010000",
    ],
    [
      "ETag",
      "lKMcM8+ajyfF7lYNjm1X/Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:16 GMT",
      "Server",
      "ESF",
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
      "c9",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d07fc9599dc816e80d1515170a0353960bc3121418a224312574faef75fa09effd80a2aa3063397ff498800f200bc55a55ab12da898073f4b9ed3a71b89ab33aec87044e5cf87267ed6036d2ee91cc638d235d29511c927368f020d54ce38675531385b48df1e4b8baae47e9d892e91bc6cccee0ebd574ec46941ad34812791c9caf898f878b83b4a916eec643a86aadbe0b19526820723f84a15d95ed5a35f1dddb1cf7088d2422f1859bb1104b1e069363f8ee3aad1ea8cfdb619b28f7c45ba6372a9b6349e686a9f252e0d950a3a664da1c9faf5bf394396001f0f46c296679fb76abba652dc07f42cee513bf2736b8a09882df3f126b9b9a23010000",
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
      "Wed, 22 Dec 2021 22:37:17 GMT",
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
      jobId: "grouparoo-job-65-1640212585510",
    },
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
      "3014fd2bc87b6d1248202191a2354ae99a2a211b21ada66942c65ca85bc0149b4e5d95ffbe8b69ba5695da276cdf73ee39f7832772c7cb84cc48ccb3fb06eac72fb72226270414cdf0f5723dbcbeb2367cc8ff9ea9edc8498b4b6a2de67344f096256951e5d093a2a919c8d97ed7cf6ad154b416a287897a63a7678d6d73680d1dd7712c137912f274cdcb3b64df2855c9d96070d4ee67426439d08acb3e13c5cbfbe06138a86a710b4cc9c15bc901aac8c1c7a25f73c1a8e2a29cef7768a091504750509ea385ffcc243e7d9bbacf69d1cf10fcc01950c64453aad616a660a24c79d6d43a2b993d116df3d581ecbcb5b70c0d26f2a628a3921670622454d1483d56609c07db8db1f2cfb7c16611aeb67eb45b5e789b457fb95def37feceb8bef002cf5034ce41738db971aa6f3e5e503f01a978a9d5c3f6b9557e6ed0eafd585a024a4be882d1c41c53cb35a7711a4f58ea8e9c3835218edd78e2d0516cb2a90d761203459e16d52c5a8a7232b54dd7b5ddc874dc6164bb8c4634193bd138899d249d0ca73100399c903f355770c6652524ef3a44ae8355e84561b0f7978bd0d325a4b4c9d55967ac2de0b547850546a66921f083ba0e6d940b546b5bbef2432f582cc3d595d74d790d19658fbb7b9c734a730988a635365041bd1109368df88b8d7786603db5efc7a024b35f4fa4ed7bebe455db5fe8210eb1b5acf497ecc260e57fd3768e882b9a371af2d01d4885966fb03e747df88d485cd42e0bf9b1f7829fa47b0a20851a4af6f94411ac039ffe6fc7e5472cae3fca488577dc1f265b115643b7475c97fbcc1e8f2643cb261a5cab77b1913d3976adcdd16684024af55c51b7fc586827d6c817100671057cddadc33f25a272e97c040000",
    ],
    [
      "ETag",
      "JL2WV1Mi2izDtO35fmJa1A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:17 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-65-1640212585510"
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
      "000002ff8d92514fc2400cc7bf4b7d1d094336c9121ea682620011e68331841c5b19c36d3def6e1a42f8eef626a251137db9b5ddaf5dffffdd0e9eb23281009659fa5ca1da9ea468ee6c30455de546f34352a9111c40235226d79bd9e821e9df4cd253295b6d775bb43c1976bb4ce8788d85806007ab0cf34443f0b8835214c86d31e555512eeacc01b395b6388ba683f115e70525361fdf0f87e1f9b0077be7d89808231635ff8fb6f9de810d2da7b84285658c7617a96883b11958995a1432c786a64ac5a8a186eb17a9a24a0a45d4e04ac3f71aaedf6eb6dc96d7f13cb7c9604eb1301995ccdecf783f3064443ea55756093e03aa0e59f0aa3e5fb89c25b5101b0ec691dfaef7fb0a288c49258b3f39c9ebae05ff850fece0c0774e145495e648f587b7e16fe3d8d2cf519761d4fb4168c3461d916830eacda27034b1dcfc20fd7c6b504f14b18f1aad856eb3ddf1cefce6bbab17649de6ef044655e8402cf8725c67068295c835eedf00f781a78b7a020000",
    ],
    [
      "ETag",
      "hjSMYdFJPg3pp241ym25pA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:17 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`id`) LIKE ? LIMIT 1",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: "%15%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-66-1640212585510",
    },
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
      "5d",
      "4f",
      "db",
      "30",
      "14",
      "fd",
      "2b",
      "96",
      "2704686dd3b22643952ac620dbb2f583b5290c4da8719ddb6048e2623b2084f8efbb76280c31b1873deca9f6bde7dc73727c7b472f4599d21e5d88ecaa0275fbe6422e6883826119567ff8ddd15bfe55cc3edff8c1f949e49b6a646efa7d4408cbd2ac58e5d0d4b2521c746f366d654a562ba6a46ce2a06610343b41b7bdd3d9f1777dbfd3469e867c3910e525b2cf8d59e99ee7adb55b9994590e6c25748bcbe2b1ee5def782b252f801bed3d97f450457baf8beee592332364d99f4dd140a541cda16022470b4fcc74f1e1f9e89660452b43f0b5e0c038975569ac2d1cc165b91459a5dc54dabba3cee66f073a0d07e1414c0ec6b351bc95b0c292936dc23499cf15e82a37e4d3643c24c90ab5ce99069d90932fe124242451c0a54ae7224d489fec91fdd1212183f14938d94ab0b64d06d1b710eb836818c5a483765258329c78c80c0e32d6465a1f23fb4606b499b7db16f81062f4f2e9e8bded0aa984b1f6a3511c4ef60fe2e838ac131b40c6f8edf40a335bb25c03a29962051850439902528ec6d3288ec6a3fd01325c0c476b84a6bd9f774f84f87605d6a471bf562be83afd35e098e595435cd707daa1f7f78d7f9ab0d1f13770c8198270456a3efd3e0b27a7b42e4d60090a4aee58afe4e4c0aef1d74d5faf1d6271f150461bbc6b23b8b6225c816bc7a270df58b38377bbedf75deac0cabce875dab60765fac7ce8346e5e68352524ddcaed92baa69e74594180afe7b1bb400ad5966c7cc4afc120d6c9103716f471ea324494244496cd424894f8fc2b98b3b69908f2cc58e09bac4a5dc2336e4f579d35e36ad23e7a35e81ffe4e1ac8ec58a1c8e4721eec12f8860fbfb",
      "f7040000",
    ],
    [
      "ETag",
      "X54N+cJiUGw56hWI5tuNtw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:18 GMT",
      "Server",
      "ESF",
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
      "ff1dd04d7282301800d0bb64ad0e0151d31d14059b50b1fcb361003f11508a8012e8f4ee757a84f77e509265d07571ff5d418dded0988864912d5241099ec2e458022fc5c42983885e3d954512e55c300d02d050cf0eabfa1e6b83625248edca6876ea70d5ba44d70472a6ae749848d85fa29dd3f67770757bcfe7ecfce5b7aebfc2cdfc213e302df200a643e80ef229d2047ef112b1345854b08f23954f38d52dd659ea608959a90ce3d2e03857bced66bddc77988c606ed2335cf72b77704863d6d5cd67812505b5ebe44fb656e49b5fe57c8b757c9ca80a3a09e967f12e1d70a1a01902de142d7471f1724b322133f49f10f76303af091592165af4fb073ad424b323010000",
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
      "Wed, 22 Dec 2021 22:37:18 GMT",
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
      jobId: "grouparoo-job-67-1640212585510",
    },
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
      "9b3014fd2bc87b6d0209849048d11aa5b4cdd4908d9056d33421632ed42dc10c9b545d95ffbe8b69ba5695da276cdf73ee39f7832772cfcb944c49c2f33f0dd48f5fee44424e08289ae3ab634f4afeb7fa36beb874f7a677978ad5f5e4613643046f5992eeaa027a5234350339dd6efa792d9a8ad642f43051cf1df706ae630d07c391371a0d2ce44928b22b5ede23fb56a94a4e4df3a8ddcf85c80ba015977d26762fefe67e6856b5b803a6a4f956d24415697e2cfab5108c2a2ecad97683061a09750c3bca0bb4f09f9926a76f53f739ddf57304ef3903ca98684ad5dac2144c9419cf9b5a6725d327a26dbe3a908d7fe52f228389a2d9957149777062a454d1583d56609c87eb95b10cced7e16a1e2dd741bc595cfaab797fb1bedaae828d7173e987bea1685280e61a33e354df02bca07e0a52f152ab47ed73abfcdca0e5fbb1b4049496d005e3b1e5d281674d922c19b3ccb3474966419278c97844edc46213079c34018a3c2daa59b414e5d0cd6ce65810bbb63b899d4132883dd74e62cf031b20b5bcd44ac8e1843cd45cc119979590bceb10b90997911f47e13658cc235f9790d1a650679db1b680d71e1516185bd600811fd47568a35ca05adbf26510f9e17c112daffd6eca579053f6b8f98373ce682101d1b4c6062aa85722c5a69160bef2cf10aca7f6fd189464faeb89b47d6f9dbc6afb0b3dc221b69695fe924d142e830b6de788b8a645a321fbee402ab47c8bf5a1ebc36f44e2a27659c88fad1ffe24dd530819d450b2cf278a601df8f47f3b2e3f6271fd51462abce3fe30d98ab01aba3de2badc67b66b7bce784234b856ef62aee51cbbd6e66833c20e4af55c51b7fc586827d6c8171006710502ddadc33f4effbca67c040000",
    ],
    [
      "ETag",
      "439nizpJ7GH6v/8jdoMV9w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:18 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-67-1640212585510"
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
      "0002ff8d92514f83400cc7bf4b7d85b899c126c91e984e256153197bd198e50665a240d9dda12ecbbebb3dd469d4445f8eb6fc5afaff735b78ccab143c58e6ab75837273b0427d6d8208555368c58f9a2a8560016ab1627236583f872f37c1f1cba1d36c1e07f3b4a7fbfe70c8844aeeb114e06d21cbb1481578b75ba84489dc9650d194d5a2cd2cd09bda146771144ccf392f2935f9741e86fe281cc3ceda37a6428b45cbffa3ed6e67c1032d23cc506295a0d9a596f480890e8c4c25caba405b51231354d0c2ed8b95a4a61692c8e68aedf6edaedbeb1c758f9c81e3743b0c1694089d53c5ec7cc6fb81262d8a889e5925b80cc83664c1597b3e71394f5b21260ca6b1db6bf7fb0a484c48a68b3fb99ad7bd17fc173eb07707be73a2a4a6d27bea2cbcf47f1bc7967e8e3af5e3f10f4269366a8fc4c1643c8bfdc995e1eedea58f361ad59524f651a1b1b0dbe90d9cbedb7973f5848cd3fc1d4fcb062d48045f8e8b5c83978942e1ee1553bf1b3b7a020000",
    ],
    [
      "ETag",
      "S8qwLxZI9x/5uyk8Ud4t7A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:19 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`purchase`) LIKE ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%app%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-68-1640212585510",
    },
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
      "79",
      "6f",
      "9b3014ff2ac853a54ecb4102e492a22e4bd98646938e9056db3425c618ea1630b54da7aeca77dfc3343d54adfd0be3f73bdee53b74c58a184d50c4d2eb8a8adb77973c422d44154ee1b6f04bb718af62e727fee0c6f86ff8c9146e3a9d0282d52c89f332a36dc92b41a89cac579d54f0aac482f33608b507a3766f609bfd5edf19394ecf049ea459e2b3e20ad8174a9572d2edeebd3b29e7694671c96487f0fce1be7bd3ef96825f52a264f7b965175c64f775d3a38c13ac182fa6eb152450492a3634c72c83141e9971f4f1b97487e1bc9302f886118a09e155a1eab44082f022616925b42a9adc219de693035ab9be3b0f8df972bd080fb738afc9dbf70696c66623a8ac32657c0e9627c6b604af0b2ca9dc1ae75fddc0358cada0848b78c3e2ad31358e8cd9e2d830fce5b91b1c3ea041caf7beb910f5bd132f347a90544ca562854e29c45146eb74eebbe6bd9c554dc00aa49ae066680e706f648ea3241a926464395162d2281a4543075b9149c636b5e38862e0a95a5db370c18bbe65478e39b41dd3b287d8227692f4281e2724c6a669c5d1b83fb4cc0846bf6ba13f82297acc64c9256b5a87ce032f743761b05ecc67a1abcb4830b4e7b849ae2ee2699e0a8adc98665def2bb5edea28e3e056cfc25b846e309b87de99db8cdfa72926b7ab6b5880046792021a0b9c5345c5098fa171e874b9f2426fb998f9c0d0333ddd23249afcba7b2484b7a5eeb4d2dfda6b606bff3de00c679546dc3407d443bb5debff0aab30f0165f5e9738c065790032bf01051bdf28a0ef6b37f8819aab802654d082bcbd0500d681371feefe150116de11d84805ffb07344d62644d066f758aeab6cd8036bdc1f3b4883857a11b36d7bdfe05aa356a4392dd47d45cd2baafba543957c0041105666a13bb5fb0797c800d7c5040000",
    ],
    [
      "ETag",
      "nLpEn9Sd5Za+EdazTB0rEg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:19 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-68-1640212585510"
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
      "d1",
      "4e",
      "83",
      "40",
      "10",
      "45",
      "ff657c141220d210923e5825da041b8b36319aa65960401018dc5db484f0efce525f7666ef9e9d7b33137c555d0e21a455f93da01caf4ad47bd324a886462b2e3d750ac102d4a264b276823ef0deeba74139d7f7e7b7ee9c3a72bf5e33a1b24f6c058413141536b982f063824eb4c8df4e27b94c644c8fbd51b6bbd7e8214a58682937c2ee10c7b79b3882f9385b50539a608112bb0ccdc85e528d99de9ab44ab47d83b6a24166a86081978752d2d00b4964b362af02db5ddd389eebf981efbb0e830d654257d4317b7801b6d1a44593d02f87059701b9b49cbb58ce1f963d13e8f88f6e468dea5912fb2a3496cec5fe8e4c24cd51b51cd0824cf0321e2b7db9cf7fd1e2505569010000",
    ],
    [
      "ETag",
      "j08p82ZjMus0+DxXnxb0rQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:19 GMT",
      "Server",
      "ESF",
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
      "08000000000002ff1dd04d7282300040e1bb642d0e24404977288d8816350205360c62b018a9127e9438bd7b9ddee0bdef09f2a2606d9b7557ce7ec03b187388a7c5f4a0daf1a0ca603b2ef443b5f0637241dcbaec67eb21e4859bade7510e91ce6654f55a9dba9a7f8dca141dfda44eb0eff1facc247431ad95334de6bbe62bf2502c23340f97862ad5d0805ddf9c1cabf2de6c256a2a8a1b61564d924a38d4e6829ad966e338274d04dfacdeeee925b0d930eec6cf5752e6f096df09de963d91691d1c43c8c8fdee0c63b2392e113485461ee58a8a5e114aa03f6828c9c72ab5084fa5b0905db6f6550513c01eb74ab036ab5edfc8c07802fe11b26ebcb197c48ce58209f0fb0709c3f37823010000",
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
      "Wed, 22 Dec 2021 22:37:19 GMT",
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
      jobId: "grouparoo-job-69-1640212585510",
    },
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
      "14fd2b64f6a3b640df6dd2ac4dc5b5494b77816acc664366860b8e520699c18d31fdef7b19acab31d12fc0cc3de79e731f3c937b5124644698c81e6aa89ebedd49464e09689ae1edd5f2c4d99dd0cc0e6f68302efb69cefb2a9bcf11211a96a2fb32878e9275c541cd766137ab645dd24aca0e26ea8ca61d7734707a6e6f38190e5d07790af2742d8a7b64df6a5daa996d1fb5bb9994590eb414aacbe5fef5de7eecd96525ef806b65bf97b45145d99f8b7ecf25a75ac862be0bd140ada08a614f458e16fe331376f63e7557d07d3743f0a3e040399775a11b5b9882cb2215595d99ac64f64c8ccd371f24f4d6de32b2b8cceb7d1117740fa75642358df55309d645b0dd582bff621b6c16d16aebc7e1f2d2db2cbacbed7ab7f143ebfad20b3c4b539683e15a73ebcc9c7c3ca07e024a8bc2a847cd75a3fcd2a0d5c7b134049456d006e3b133a2eec499b2948d793ae90f59ea006313361ed23e73f87400838401459e11352c5ac862928e0603b7efc66e928ce341bf4763c6d269dc1bd2513a19f51260137238257f2ba1e15ca8522ad176885c07abc88ba360e72f1791674a48699debf3d65853c05b8f1a0b8c1dc745e027751d9aa890a8d6b47ce5475eb05846ab2baf9df21a32ca9fc2079c734a730588a615365043b59109368df88b8d778e6033b59fc7a022b3dfcfa4e97be3e44ddb5fe9110eb1b1accd9b8451b0f27f183b47c415cd6b03796c3f4889966fb13e747df883485cd4360bf9b5f3821bd25e0590420505ff7aa20836812fffb7e3f22316d71f6594c633ee0f578d08afa0dd2361ca7d61e3d37106c4802bfd21e6f69d63d79a1c4d46d843a15f2a6a971f0b6dc56af50ac220ae806fba75f8073c8fcabf7c040000",
    ],
    [
      "ETag",
      "VC+0U+ag/SYaR7p3flc3sg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:20 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-69-1640212585510"
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
      "83",
      "40",
      "0cc7bf4b7d65099b1b3a121f984e256eb8317cd198e584b2a140f1ee9899cbbebb3d9cd3a889be1c6df9b5f4ffe736f0949509b8f0902d9e6b94eb8305eaa909425475ae153f2a2a158205a8c582c9497a8bd595bf8aeca517bc1e759ffb8745313d396142c54b2c04b81b4833cc1305eedd064a5120b7c594d745396f320bf4ba32c55914fac105e70525260f6e46236f301ac2d6da3726428b79c3ffa3ed7e6bc1233d8498a2c43246b34b25e91163ed1b994a14558e2d45b58c514103372f1692ea4a48a216575a4ebfd576ba76a7dde91df77a6d9bc19c62a1332a99bd99f17ea0498b3ca41756090e03b2095970da9c2b2e674923c4847e1039dd66bfaf80c4986432ff93ab78dda5e0bff081ed1cf8ce8982ea52efa9f3d1b5f7db38b6f473d499170d7f104ab3517b24f2c7c359e48d2786bbdf491fac35aa8924f651a1b1b06d778f7b478efdeeea2919a7f93bae96355a100bbe1c9799063715b9c2ed1bffb8070e7a020000",
    ],
    [
      "ETag",
      "PfZepKIvT0hANz74q93mmQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:20 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`purchase`) LIKE ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%app%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-70-1640212585510",
    },
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
      "7d4f9b4018ff2ae4161397d8420b2db449e39a8a9359db4aa96e5996f6ee38f01438e40e4d63faddf7005667ccf41f5eeef9bd3c6ff784ee7816a221223cbe2f59b1fd722b083a424ce1184eb7cef287777feadefc24e5a27fe79d3d9eeb8bcbd10810bc62499ce6096b49511694c9e16ad98e0b51e6b810a205422ddb6875fa96d1ed747b4eafd731802759124d797607ec1ba57239d4f5bd773b16224e18ceb96c5391be9ceb0f5d3d2fc42da34aea6f2d757091fac7a6c789a05871918d564b48a094ac58b314f30452786586e4db5be936c7693b06f003a70c532aca4c556981041559c4e3b2a855d1f009d569fef38196eed49d04da64be9a05871b9c56e4cd570d4b6dbd2e982c13a59dfaf30b6d9383d70d964c6eb4eb33d777356d53302a8a70cdc38d36d28eb5f1ec44d3a6f36bd73f7c4183d4d43b77213af52ebc40eb405221938a67754a012609abd279ee9af77e5615012b906a826bdbe8e38e630c48446c1a39668f440623c421760f9bc4a0038b5921611878aa52af59381359d7b448cfb0ad9e615a3636a915451d8607110db161982119746dd32030fadd117a2cb862275ce642f2a675e8daf702771df8abd9641cb875191186f69c34c95545fc9ba78222d78651d5fb416dbb2aca05b855b3f06681eb8f278177e536e39fb218d3edf21e1620c2896480c6054e9962c58508a17168315f7a81379f8da7c0a867bad823241afe7e7a2504dbbceeb4aadf9557dfaafdf7802b9c9435e2a1f9401db4db1dfd5f6119f8deecfbc7120738cf0f40e60fa060e31b0574b972fd5fa839f259c40a96d1cfb700c075e0d38bbbbf4580857b043652c13fec1c9595092d58b37b3cadab6cd8f0b49d6a5a002ed4bb98e398fb06571a95224b59a69e2b6a6e51d5af3a54ca17100461656675a7767f011a797416c5040000",
    ],
    [
      "ETag",
      "y8SJIqFEhXbuP6kIHwK/PQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:20 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-70-1640212585510"
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
      "90414f83401085ffcb782d09104125e9410ca94db0519443639a660b035281c1dd854a08ffdd59ea6567f6edb7f35e6682efaacd21805355fef428c79b12f59b6912547dad15978e5a85b002d4a26472488b30cfe9b71c1f86bdef6daade7ff12eeb35132afbc24640304151619d2b083e27684583fced7894cb44c6f4d81965bbfb883651c24243b91176691c3f867104f3615ec1994e091628b1cdd08cec249d31d35b935689a6abd152d4cb0c152cf0f2504aea3b21892c56ac3bdb72fc5bdb755cefdef31c9bc19a32a12b6a994ddf816d3469512774e1b0e0302097967317cb39b0ec9a40877f341c35aa5749ecabd058da57fb2732913447d5b2c715648297f15ce9eb7dfe03cba064c969010000",
    ],
    [
      "ETag",
      "vUfBddoxgy9vY65Giu6M5w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:21 GMT",
      "Server",
      "ESF",
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
      "0000000002ff1dd0db6e82300000d07fe9b318049de9dea0442b5aa5c535c20b1156a0131128c8c5ecdf67f609e7bcc03549845251fbb889127c82f16ac079328f75ebf2d4a733e9dcfec171ba84a43591aa73247b523277d93b44ab4dfd2ea7a2a6e130161b767fe68d7d73b1ce5ae96d715432ba76f2ca1c4c8c62ef6e4c012a3545c9c7cd97b48be13e3c9d362a310aa3764bcbe169d4645390660585f62e3c26dcd7328cb443ea75cee541105eec7810e4be3b4a8883e5407c121f3be633e551fb874c446cfb2ae49bba929c1e160994ebbd5d59ce25cd56d6584ab63ff1eff8b985f5197d81191043251ba122f9769b2b0867e03f216ac74abc276c716d44037eff00db15147a23010000",
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
      "Wed, 22 Dec 2021 22:37:21 GMT",
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
      jobId: "grouparoo-job-71-1640212585510",
    },
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
      "6d0224909048d19aa6748d94908d9056d33421e35c885b8229369dba2aff7d17d364ad2ab54fd8bee7dc73ee07cfe49e175b322609cf1e6aa89ebedc89849c115034c357b3c7ab70e3f83bf5b09117f9f46237bcfa3b9d4c10c11b96a4fb32878e1475c5408e37eb6e5689baa495101d4cd419da1d7be0583dbbe77aae6b5bc89390a70b5edc237ba75429c7a679d4ee66426439d092cb2e13fbd3bbf9d833cb4adc0153d27c2b69a28a343f16fd9a0b461517c564b34603b5842a863de5395af8cfdc26e76f537739dd7733043f720694315117aab185299828529ed595ce4ac6cf44db7c75206b7fe1cf228389bcde177141f770666ca9a2b17a2ac1b80a574b631e5cadc2e5349aaf82783dbbf697d3ee6cb5d82c83b5717bed87bea1689283e61a13e35cdf02bca0fe16a4e285568f9ae746f9a541f3f7636908282da10dc6436b406dcf1a25693264a9d77793d48224f192a14bfb89c5460e38db0428f2b4a866d14214a3fec8b52cd78e9d81ebc54e7f34883d1b86b16725a937487ba9d577c8e18cfca9b8824b2e4b2179db21721bce233f8ec24d309b46be2e21a575ae2e5b634d01af3d2a2c30b62c1b811fd47568a25ca05ad3f27910f9e17416cd6ffc76ca0bc8287b5a3fe09c539a4b4034adb0810aaaa5d862d348305dfa9708d653fb7e0c4a32fef54c9abe374e5eb5fd448f70888d65a5bf641d85f3e09bb67344dcd0bcd690c7f6404ab4bcc3fad0f5e137227151db2ce4c7c60f7f92f62984142a28d8e71345b00e7cfabf1d971fb1b8fe282315de717f986c445805ed1e715dee0b7be0d87dafe93e822bf52e",
      "e6e8d869e99b8cb08742bd54d42e3f16da8ad5f204c220ae40a0bb75f807df83ed3a7c040000",
    ],
    [
      "ETag",
      "/2irRU4EhtqUsBlABh7FzA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:21 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-71-1640212585510"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92514fc2400cc7bf4b7d1d09333070090fa0a84b06c2182f18428eadc0605be7dd4d4208dfddde44346aa22fb7b6fbb5ebffbf3bc22ec963706199ac5f4a9487ab35eab109025465aa153f0aca158205a8c5da90bb729fccf219ed5347fb9b1d1637e160dce930a1a20d6602dc23ac124c6305eef311729121b745949659bea8320bf4a130c5491878c307ce338a4d3e9cfa7eb7e7f7e1645d1a63a1c5a2e2ffd1363f59b0a565802b949847687629246d31d29e91a94456a4585354ca08155470f5622da92c8424aa71a5d6b26bb6d3a85fdbd7cd76b369d7194c29123aa19cd9e984f7034d5aa401ed5925380cc82a64c1abea7ce5721257424ce80d43a751edf7159018918c177f7205afbb11fc173eb0b303df39915199eb0b75ef3f757f1bc7967e8ebaeb86fd1f84d26cd40509bd417f12760723c3cdcfd27b078d6a24897d54682cb4eb8d76b3e5d4df5dbd25e3347fc7d5b2440b22c197e331d1e0ae44aaf0f406d1a7e6187a020000",
    ],
    [
      "ETag",
      "bkuwiZnZowl6tLhkep9TMQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:22 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`stamp`) LIKE ? LIMIT 1",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-72-1640212585510",
    },
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
      "0000000002ffd5535b4fdb3014fe2b56f60212bd021dcb54b10eb22d234ddb240521845ae39c06b3240eb6c38410ff7dc74e0b436cec794f717cbe9b8f8f1f9c1fbc4c1dd7b9e2d96d0df2fedd8db872761cd034c3ddefb3884d66e954c427373f7d48fbbb85cc46c32122b861295a5439b494a82503e5cee37626455d5129440b855aeffbadde60afdbeff5f70ff6f77b5de429c857012f7f20fb5aeb4ab99dcec6bb9d0991e5402baeda4c144ffb9dbb7ea792e20698569d97961d74519db74d0f73c1a8e6a21cce630c502b900b2828cf31c23333bdfaf452bacd69d1ce107cc71950c6445d6a130b259828573caba55575dc07c7c6fc6de1c45ee01d25e468320f93ad252d0c79b94da8228b850455e79a7c892663b2acd0eb9a2a504b72f6cd8b3c4296129890e982a74b32248764141e13124ccebc686ba93446449dc03ff1b014f8633f213d4c94c28aa2e831d5a8a54d92b459fae69a3428bde8760d70dd47fff5ed398fa6ca85e4da9cc00f132f1a1d25fea9d7342d808cb2fbf816dbb6a2b9024453490bd020c72205a44c27b19ff893701420c37662ba4128c7bd78782624f7159890da7e8dd760cffa6f00a734af2de2ae59383de7f171e7ef0a893ff6e264349e22ec1285700e1a84339b7bd1b9d36c45b0020925b3cc373a61c1b6f0cf71decc166271bad006af4873a53953c68449b0e58417f6140d7bb0d71fec9adb40b0d4af6b1ffae60996e91f2b6b8fdaea8394424676a0cc2fba299b8597d8389eceec38be4879bbde2a40299a19f95090826a76cdcb8c289e95a82d81ac8424abba6486d68c9fdda232ab0b2835318d572e796a7c9bc4755509a9217d56414033b97112f9e1d7ed8febdfcfe78917e373d0e4a2e71ef42ecda1ec519a39f97f8f71d95c8ec9733c093d9cc65f48b9933462050000",
    ],
    [
      "ETag",
      "JQRcOQdPoSKjwIed23mrgA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:22 GMT",
      "Server",
      "ESF",
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
      "ff1dd0cb7282301400d07fc9da3aa8b436dd095679280289086c18c85c91120225288f4effbd4e3fe19c1f94320652265d5d82401f684c9778cee699b2091fca448f5a6f57b2066d41a2ad89c7bc72bf99ed3d70907fde75489a4ba65e79962de826f66b55f0f5369fb44e2c2b5db15e0c6a60e2e27518ab5665d1ee1ee9d821391c26253eba98ed481aaac3dea68eb7567c437df7f02d70c49ef9b7336ea361e4beb72c75d06d068fa198443f119f57604e65507c9dab8369367c150bf574dd5c037ae19e43fa44574e2e496f2ec928b78c88db449ee96e2864f696eec4e96e275a28d10cc1d0142dc8a478ba57af18cfd07f42d28d0d3c2734485b68d1ef1f6bb9120223010000",
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
      "Wed, 22 Dec 2021 22:37:22 GMT",
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
      jobId: "grouparoo-job-73-1640212585510",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85535d6fa24014fd2b64f6b52aa8209a98adb1742551dc22b6d96e3664800b9d1619ca0c366ee37fdf3b50bbed6ed23e3133f79c7bcefde0993cb022211312b1ecb186eaf0e59e47e48c80a419be5e5a4f6972751b2cf4f4f7bd71bb48f6cc3567d32922986209ba2b73e8085e573188c976d3cd2a5e97b4e2bc83893aa341c7b0867adfe89bb6691a3af204e4e992150fc8be93b214935eefa4ddcd38cf72a02513dd98ef5edf7bfb7eafacf83dc452f4de4bf65045f43e16fd9af3984ac68be97683066a0155083bca72b4f0979944e7ef537719dd753304ef590c348e795d48650b53c4bc485956574d563279268dcd3707b27196ce3cd0629ed7bb222ce80eceb4844a1aca4309daa5bf5e69ae77b9f657b3c05d7be166be7056b3ee7cbddcaebc8d76b3707c479334caa1e16a53edbcb9797841fd04846445a31ea867a5fcd220f7ffb128024a0b6883e148b7a861ebe3288d46716a0fcc28d5218aec6864d241a4c7e3210c930828f21ad186450b5e8cfb893e327508adb16587436a582105c30ead74600e281d4743b0c9f18c3c554cc205132517aced10b9f1ddc009037febcd6781d39490d23a9717ad3155c05b8f120b0c75dd40e007751d55947154532d77bdc0f167f3c0bd76da292f21a3f161f388734e692e00d1b4c2064aa8563cc1a6116fb6722e10dc4cedfb2928c8e4e733517d574edeb4fd951ee0109565d97cc926f05def5b63e784b8a679dd40f6ed819468f90eeb43d7c75f88c4456db390abade3ff20ed930f295450c49f4f14c14de0d3ffedb4fc88c5f5471921f18efb130b251257d0ee116bca7d615bc3fe78acba8fe04afe1b1be876ffd435954365841d14f2a5a276f9b1d056ac16af200ce20a784db78e7f0089d017b17c040000",
    ],
    [
      "ETag",
      "F6wfdQZTH0fzj1ZHdviI5A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:23 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-73-1640212585510"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92db4e83401086df65bca549e939245ea06db5b127295e99a6d92e434b05067717b569faeecea256a3267ab3cc0cdf0cf3ffec011e923c020fd6c9e6b144b53fdba0b9b54180ba4c8de64741b94670008dd830e9bf6cb599a6f18d99ed9afd4516c89e3bbc3d3f6742cb2d6602bc03c409a69106effe00b9c890db24a56596afaacc01b32f6c711106a3e915e71945369fde8dc7fec5780047e7d41809235615ff8fb6e5d1811dad038c51612ed1ee5228daa134232b538bac48b1a6a95412355470f562a3a82c8422aa71a5d66dd6dc4eabde701bed5ebbedd6194c490a9350ceecdd82f7034346a4013db34ae830a0aa9005c7d5f9c4e524aa84d870340d3bad6abfaf8042492a5afdc915bcee56f05ff8c0de1df8ce898ccadc9ca8e178e6ff368e2dfd1cd5f7c3c10f421b36ea8484a3c96011fa93b9e596efd22ff606f55c11fba8d15ae8d65bbd76b7537f73f592acd3fc1dcfa8121d90822fc77562c08b45aaf1f80a16924b697a020000",
    ],
    [
      "ETag",
      "AxhstNlfKtOj3DSmRc81FQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:23 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`stamp`) LIKE ? LIMIT 1",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-74-1640212585510",
    },
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
      "02ffd5535b4fdb3014fe2b56f60212bd04da5275aa58078145f402490a4308b5ae73120c491c6c070921fefb8e9d1686d8d8f39eea9cf3dd7c7cfaecdcf3227606ce8aa70f15c8a72f7762e5ec38a0698ad58ceaabcecfbcdfa926a7abeec5c95e719c5c9e0f8788e086a5685e66d050a2920cd4601e365329aa924a211a28d4d8ef34dc5ea7bdebee76fbddaedb469e822c19f3e21ed9b75a976ad06a6dbc9ba9106906b4e4aac944fe5a6f3deeb64a29ee8069d57a6fd94217d5fadcf420138c6a2e8ae13cc4009502b9809cf20c23bc31e3d5b7f7d24d4ef3668ae047ce803226aa429b5828c14491f0b49256d5193c3b36e66f0727f4c6de61440e67f369b4b5a4b9212fb7095564b190a0aa4c93e3603621cb12bd6ea902b524973fbcc02364298109192f78bc2443724046d32342c6b34b2fd85a2a8d115167ec9f7ad81afb133f222e268a21a1287a44356a699324ae8fbe79260d4a2fda6d035ccfd1fff87ace8be97221b93637f0a791178c0e23ffc2ab87368694b2a7f001c796d04c01a2a9a439689013110352ce66a11ff9b3e9688c0c3b89b30d423983ebe73742f4548209a9edaff1ea75acff067041b3ca221eeb83e33a2f2f3b7f5788fc891746a3c919c26e5008f7a04638e7732fb872ea520009482898657e32090bb68d7faef366b7108bdb8536f8449a2bcd9932264c826d473cb7b7a8d9bdcedefe5ecfb160a93ff4faaee94111ffb1b3f6a8ac3e4829646017ca7ca29bb259788183e3f1b95dc777291fd6a51c94a2a9919f0a9253cd6e799112c5d302b52590444892540533b47afd6c89cab4caa1d0c40c5e0dc8ebe09b24acca52480df19b0a02eacd0da3c09f9e6c7f5d7f7ebf8abc10ff0e9a5cbb83be7b632e65af52efc9ff7b8d9bfa714c9ea3d9d4c36dfc054ff71bd662050000",
    ],
    [
      "ETag",
      "latY4Xm84uMKb5VG3nFfWQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:23 GMT",
      "Server",
      "ESF",
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
      "02ff1dd04b7282300000d0bb64ad0e5f91ee00290a4641c277c3404c954f210101b5d3bbd7e911defb0139c66418b27b5793167c80672ea82bbc2a382d9eb81782c2364c95c6b3c53174ef5ff1d21a202bb161571bc79b7de4d7b1829c135a27b391497a443f75d67176122006713ccb12be5eae559aedeaf508f75891d9b2e6cfbd6d97374625be501c4dd908fb504e0a516e095f8d53d7d63b816e6d63ae55a7758f0212ccd29d5c2f7ff5c1707838145ad598678d7a1b4496de22258f4ccd6a0e336d2e92434bd30ab913bfbcc86c9774e62bf0c4efc43f6ea038eb9169b81d39d12b060b401eb4ecc990956fb728abea02fc2764f72725ef099de43de9c1ef1fe5e47db623010000",
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
      "Wed, 22 Dec 2021 22:37:24 GMT",
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
      jobId: "grouparoo-job-75-1640212585510",
    },
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
      "5c931012421a295aa394ae6809690969374d1332e642dd124cb1c95455f9efbb98a64b55a97dc2f63de79e733f78260fbc48c884c43c7baca17afa722f62724240d10c5fbd1f37e262e35f5fdfef326b19ffb4af16c5d76c3a45046f58926ecb1c3a52d4150339d9acbb5925ea925642743051c7b13bfdd1d0b4fa963db6edbe893c0979bae0c503b2ef942ae5a4d73b68773321b21c68c9659789edeb7b6f67f5ca4adc0353b2f756b2872ab2f7b1e8b75c30aab828a69b351aa82554116c29cfd1c27f66129fbd4ddde574dbcd10bce30c2863a22e54630b533051a43cab2b9d954c9e89b67974206b77e1ce438389bcde165141b770622454d1483d95605c04aba5e1f917ab60390bbd951fade797ee72d69daf169ba5bf366e2fddc035148d73d05c636a9ce99b8f17d44f402a5e68f5b0796e945f1ae4bd1f4b434069096d3072cc11ed8fcdd3388d1d968e07769c9a10c7e3d8b1e92036d9e91086490c14795a54b368210a66d9264da9193976328886a66945d4a283c871120a7ddb023b1d91fd09f95b7105e75c9642f2b643e436f042370a838d3f9f85ae2e21a575aece5b634d01c71e15161899661f811fd4b56fa25ca05ad372cf0fdd60360fbd1bb79df20232ca9ed68f38e794e612104d2b6ca0826a29126c1af1674bf71cc17a6a5787a02493dfcfa4e97be3e4a8edaff41087d85856fa4bd661e0f9dfb59d03e286e6b586ecda0329d1f21dd687aef77f10898bda6621d71b37f845daa70052a8a0609f4f14c13af0e9ff76587ec4e2faa38c5478c7fd61b2116115b47bc475b92fecd170d81f8d890657ea5dcc720687ae",
      "35399a8cb08542bd54d42e3f16da8ad5f21584415c015f776bff0ff8f670a57c040000",
    ],
    [
      "ETag",
      "IKVoFUNQQjvg2MbX5PLn+g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:24 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-75-1640212585510"
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
      "40",
      "0c",
      "c7",
      "bf4b7d744b80b06996f8800a4a823861bc6808396e654cb7ebbcbba984f0dded4d45a326fa726bbb5fbbfeffbb2d3ce42a85089679f658a3de1c64686f5c30415317d6f0a32265103c402b3226554726f1adcae243f512d3782383e07a909d9c3061e41a4b01d116563916a981e86e0b4a94c86d928aba548b26f3c06e2a579c2693e1f882f39252978f67a351ef74d4879db76f4c85158b86ff47db7ce7c13d2d27b8428d4aa2dba5d2748fd20e9d4c23caaa40df50ad251a68e0e645a6a9ae8426f2b9e21f057e3becb63aed4e701c04ed16830549617352cccea6bc1f58b2a298d033ab849001dd842c78d59c4f5cced346880b87e324ec36fb7d05344ad2e9e24faee275d782ffc207f6eec0774e94542bbba706a3ebde6fe3d8d2cf51e7bda4ff8330968dda23c9f0aa3f4d7a57b1e3e6efd24f37164dac897d34e82c6cb7bac7c151d87a73f58c9cd3fc9dc8ea1a3d90822fc7656e215a89c2e0ee153908b6c67a020000",
    ],
    [
      "ETag",
      "n2cTPZngP+nxPoNyc55OFg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:24 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`amount`) LIKE ? LIMIT 1",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "%1.54%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-76-1640212585510",
    },
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
      "00000002ffc5536d4fdb3010fe2b9627c426b54dcbda6e54aa5807a9c8161a96a62034a1c64daea9471217dbe98410ff7d6787f22236f8b84fb17dcfcbf9f1e5965ef132a503bae0d97505f2e6dd2fb1a00d0a9a65781a1cfbb9f36d368eae569b63b15265108cf9efe11011dcb0142bd6393495a864026a309bb63229aa3593423451a8f9a9dfecf4bbedbdce5eef73afd769234f41bef4797985ec95d66b35709cad772b1322cb81adb96a25a2783877367bce5a8a5f9068e53cb774d04539af9b1ee422619a8b72389b62039502398782f11c5b7864a68b2fcfa55b9c15ad0cc11b9e004b125195dab485128928973caba455a5835b6adb7cb2a053d7770f237218cc26d1fb9815861c7f204c91f95c82aa724dc6617042e2357aad98021593f36337740989252442a6739ec664480ec8687244881f9cbbe11321dffbee62cdf74ebc8874b0a514960c558f9846316d5a49eba567de4983d2f376db00ef83f45e3e1fbd33552e24d7e60ade2472c3d161e49db9756a3e642cb9995e636e4b962b403493ac000df244a48094d360ea455e3019f9c8b0519c6e118a0e7ede3e12a29b359826b5fd1aaf7ed7fa6f01672caf2c62532f6887dedd35fead30f683d19b1a3b9d56afbb83429708c351a935e88f991b5ed0fa288425482813cb7b252b0bb68537277e3b7e88c501441ba571af344f94314924d872c40b7bcf9addef76f73f9af742b0d42f6bdd7df39796e95f2bf71e95d50729850cedcc992dba29db0b2f3116fc8b1bb400a55866646625de44015be440ecfb918730491c135e12133789a38b53777e1f79dc205f594a525119968d7a40eaa4b7bbdd7abb6b1ab3edd4d3f07f5bb9ac43325e47c1c4c5a9f8039e6fbbfd0d050000",
    ],
    [
      "ETag",
      "OHLl/JUFTkhvHohsnOOFiw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:25 GMT",
      "Server",
      "ESF",
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
      "72",
      "82",
      "30",
      "0000d0bb642d0c1211d31dd8caa720e38f889b4c802086a21062059ddebd4eaf51df1dde03d02c635d47e4a56267f00606aa23355353cdda7f6bf76d348d23575f043c3328a77b5869e3a95593d551b1862bd1fcbe7d9f4a52fb5e6a375c9c76b95122f9b559a48563e7a6c2ef1493436c946290300b943009b169439e6efb827a9b7372742b6f58af3f26759c16f9e72d803a729c76a1172d663309fddc3c4c6a05bba271767dd717b054b2e0ca82aa0c71d235c5069379db9bfce8c45e380bdc9910e572b945a289629c5e64b9af6bc73756732bbc9991bbe3eb683c46fa457d79f977c008b0be3909d691d3733b34101a81bffa440e0d7bfeb719154c809f5f84e3cecd19040000",
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
      "Wed, 22 Dec 2021 22:37:25 GMT",
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
      jobId: "grouparoo-job-77-1640212585510",
    },
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
      "02ff8553db4ee33010fd95c8fbb8b44d7a492f52b5542540b46dcaa62968b55a45b6e304431287d80155a8ffbe6387b22024788aed3933e7cc99c933bae765826688f0eca161f5fedb9d20e80431853378ddab5bfffee7c6a1df2f2ef6d74fe73745b526d97c0e08aeb3242eaa9c75a4686acae46cb7ed66b5682a5c0bd181429df1b8e3b843bbeff44793d1c8b1214fb23c5df1f21eb26f95aae4acd73b72773321b29ce18acb2e15c5eb7befb1dfab6a71c7a892bdf7943d6091bdcf497fe48262c54539df6d414023591db302f31c24fccf4cc8e9fbd25d8e8b6e06e0474e19a65434a5d2b2a0041565cab3a63655d1ec1919996f0e68ebadbc6564519137451997b860275682158ed5be62d679b8595b7e70be09d78bc8df04f17679e9ad17dde566b55b075bebe6d20b3d4b619233936bcdad53730be002fc09938a97863dd2cf9af9c520ffe3587402504bd606e3b1ed6267624f494ac6349d0c4624b5192113321ee101b1e974c886096118f20ca9c9c2a5280778389ab8741a133270e2a13349623ca1c3d84ded24e9b3e9005c478713f45473c5ceb8ac84e4ad43e826f4232f8ec25db05c449e6921c54daece5a61ba81b71a153418dbb603c04ffa3ae82817c0a62df783c80b17cbc8bff6da29af5886e97efb00734e712e19a0710d062a56af4502a6a160b1f6ce006ca676750c4a34fbf38cb4ef5ac91bdb5fd32318a296accc176da3d00f2e8c9c23e21ae78d813cb6075481e45be80f541ffe021216b5ad827eedbcf0376a9f4296b29a95f4eb8902d804befcdf8ecb0f58587fa0910aeeb03f546a125ab3768fb869f725db1d8efaae761fc0b5fa101bb8eed1355d435764052bd54b47edf243a32d59235f41108415088c5b877f7184d8947c040000",
    ],
    [
      "ETag",
      "ythIkKO1c+GGyVwFWmpMbg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:25 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-77-1640212585510"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92514fc2400cc7bf4b7d74240c1990253c80021201718c2743c8b17563b8adf3eea62184ef6e6f221a35d1975bdbfddaf5ffdf1de029c943706193c4cf25cafd458cfac1041eaa32d58a1f05e50ac102d4226632dcd8d2995e26a3e1f42eba92cb78e7f529ee769950c1163301ee01a204d35081fb78805c64c86d01a56596afabcc02bd2f4c71e17be3d988f38c4293cf969349af3f19c0d13a3786428b75c5ffa36d75b460471b0f2394980768762924ed30d063235389ac48b1a6a894012aa8e0ea452ca92c8424aa71a5d66ed7ec56b3deb01b4ec771ec3a83290542279433bb5cf07ea0498bd4a35756092d066415b2e0a83a5fb89c849510138e677eab59edf7159018900cd77f7205afbb15fc173eb09303df39915199eb33359cdcf77e1bc7967e8ebae9f9831f84d26cd419f1c7d3c1c2ef4de7865b9da4f7f71ad55c12fba8d05868d79b1da7ddaabfbb7a4dc669fe8eab65891604822fc76da2c18d44aaf0f8062ddb959e7a020000",
    ],
    [
      "ETag",
      "db1r5M+iGFMKf3rUgjRBog==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:25 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`id`) NOT LIKE ? LIMIT 1",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: "%15%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-78-1640212585510",
    },
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
      "d1",
      "4e",
      "db3014fd15cb1302b4b669abb6a04a1563256861a161690a42136adce436189238d80e1242fcfbae1d0a434cec610f7b8aed7bee39c7c7378ff49697291dd315cfee6a900f9f6ec48ab6286896e1e975cf5d5fde95d1c9f4f866fa7955f5e74a9d67930922b8e952aca872682b51cb04d47831ef6452d4159342b491a8bdb7dfee8d06dd7eaf3fdc1f0e7b5dec5390af7d5ede1a76ad2b35769c8d76271322cb81555c751251bc9c3bf77da792e20612ad9cb7920eaa28e763d1835c244c73514e167334502b904b2818cfd1c26b67bafaf296bac359d1c9107ccf13604922ea521b5b48918872cdb35a5a563a7ea4d6e66f0b3a777d771a9169b098453b312b4c73bc4b9822cba50455e79a1c87c129892bd4ba660a544c2ebeb9a14b482c2111325df234261372400e674784f8c1851beec478b64b6641447cefbb8b35df3bf522d2434b29ac19b21e318d64da58499ba567de4983d2cb6ed7009f83f4de3f1f7d32552e24d7e60ade2c72c3c369e49dbb4d6a3e642c7998df616e6b962b403493ac000df254a4802d67c1dc8bbc6076e863878de26c835074fcf3f1b5217aa8c098d4f66bb44603abbf019cb3bcb688fb66417bf4e9a9f54f0c5bbde116925c2108c7a4e9a73f166e78499ba310d620a14c6cd7073959b02dfc75da37a387581c3e94511af74af344199144822d47bcb0776cba47835177b4472d58eaf7b57dc30c65fac7cab3466df9414a21433b6f668b6aca7ae12586827f708b16a014cb0ccda2c49b2860ab1c887d3bf212258963c24b62a226717479e62e6ddc718b7c652956f468406cca636242deacb7cd66db38b23e9a11f84f1eae9a588cc8513073710e7e01bd6ffd1ffb040000",
    ],
    [
      "ETag",
      "h1EfYqnTJCFjC+bp2SssVg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:26 GMT",
      "Server",
      "ESF",
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
      "1f8b08000000000002ffedd35b7282301400d0bde4db712c2094fec1684087870a88fa9349e016795430112374baf73add463d7b38df88661908416e6d0d17f48106aa98d36cca66d6e13e1be34018fe182c1da2f77510e98bc248aa6bb9612c24795d6572de58852e849de0f3c99464edc986098892f682ed91ad79ebe6b2710c773c8738cb2876a1d74aebf08eaba0cdf0235f76919cc1ce2c9c8bdc2577aef9a951713af4b5ba493d18f869ebe9012ef89e29705412af5ca4a2d8e9473f56f3db55c4bd579bae8fa33ea5e917d5214ece549d9fe85621367d7370181a5295caead359f1089855effb861c3b6dfaf2f2efa0098247577210a47c6e57e7a639417ff5c96de8e0f9df06ca81a39f5fac6fc4c719040000",
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
      "Wed, 22 Dec 2021 22:37:26 GMT",
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
      jobId: "grouparoo-job-79-1640212585510",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85535d6f9b3014fd2bc87b5c1320090122456b94d23552423642da4dd3848c73a1ee08a6d8b4abaafcf75d4cd3b5aad43e61fb9e73cfb91f3c923fbcdc910949797edb40fdf0e946a4e48480a239bede5c0d02d35d3a7fe5e70bf1a3b2f9bdf4d6b3e91411bc6549baaf0ae849d1d40ce464bbe9e7b5682a5a0bd1c3443dd7efd9e39135b0078ee738b6853c0945b6e4e51f645f2b55c989691eb5fbb9107901b4e2b2cfc4fef9ddbc1b98552d6e802969be963451459aef8b7e2904a38a8b72badda08146429dc09ef2022dfc67eed2d3d7a9fb9ceefb3982ef3803ca98684ad5dac2144c9419cf9b5a67259347a26dbe38904db00ce6b1c144d1eccba4a47b38317654d1443d54609c47eb95b108cfd7d16a162fd661b2995f04ab597fbe5e6e57e1c6b8ba08a2c050342d40738da971aa6f215e507f0752f152abc7ed73abfcd4a0c5dbb1b4049496d00513d71a53dbb3fc344b5d96794327cd2c48532f751d3a4c2de68f60b44b81224f8b6a162d4569393be68d294d866e3648463eb513dff5dd24737d07dcc1d81e7b0e399c90fb9a2b38e3b21292771d2257d1220e9238da86f3591ce81232da14eaac33d616f0d2a3c20213cbb211f84e5d8736ca05aab52d5f847110cde6f1e232e8a6bc849cb287cd2dce39a3850444d31a1ba8a05e891d368d84b3557086603db56fc7a024935f8fa4ed7bebe445db9fe9310eb1b5acf4976ce268117ed5768e884b5a341a72d71d488596afb13e747df88d485cd42e0bf9be0da29fa47b8a20831a4af6f14411ac031ffe6fc7e5472cae3fca488577dc1f265b115643b7475c97fbc41e8fc643cf251a5cab37b1913f3a76adcdd166843d94eaa9a26ef9b1d04eac91cf200ce20a84ba5b877fd86333697c040000",
    ],
    [
      "ETag",
      "jW2E/7L5xs+HoXp1iws8OA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:26 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-79-1640212585510"
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
      "df65bc2d49518e4db800ad42520e42b932842cedb414db4edddd6208e1dd9dad88464df4663b33fd663affdf3dc2739287e0c026895f4a9487ab18f5a309e6a8ca542b7e14942b040b508b98c98327f6376ddfd60d77b1cc867677ea894edceb31a1822d66029c234409a6a102e7e908b9c890db024acb2c5f579905fa5098e2c29f8f260f9c67149a7cb2f4bcfec073e1645d1a43a1c5bae2ffd1b63a59b0a3cd1c2394980768762924ed30d023235389ac48b1a6a894012aa8e0ea452ca92c8424aa71a5d6eed6eaad867d5dbf6e769acdbacd604a81d009e5cc2e17bc1f68d2229dd32bab841603b20a5970549d7b2e276125c484a389df6a54fb7d05240624c3f59f5cc1eb6e05ff850fececc0774e6454e6fa42dd7bd3fe6fe3d8d2cf51777ddffd4128cd465d107f3476177e7f3c33dcea2c7d70d0a86692d84785c6c2badde834db2dfbddd55b324ef3771c2d4bb420107c398689062712a9c2d31b78dbf6af7a020000",
    ],
    [
      "ETag",
      "yLav37T0t4ESUmH09OLa8g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:27 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`purchase`) NOT LIKE ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%oran%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-80-1640212585510",
    },
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
      "0000000002ff85537b6fda3010ff2a91a74a9d5420e10d12ea18a45b340a348456db3481ed5ca8bb24a6b6d389557cf75d92d287aab57f117cbfd79dcff7e4b74843d2274c6c6e3350bb0f3792911302866ef074f7e36ca4c675dfbffd3baf5f479fe7d97c747131182042e42c4d936d0c152d33c541f7978bea46c96c4b95941514aa74ed8ad36eda75a7deeab65a8e8d3c0d713411e96f645f1bb3d5fd5aede05ddd48b989816e85ae72993c9ed7eeeab5ad9237c08daebdb4aca18baebd6d7a1a4b4e8d90e960b9c0009906b582848a18233c3143f6e9a57455d0a4ba41f09de0403997596af25828c1651a894da60a55d2bf2745cc671f64e14edc51608d66cb6970bca6494e5e7fb4a8b6562b053a8b8d75e6cfceadf516bdaea906bdb6aebebabe6b596b055caa7025c2b535b04eade1746c5993d995eb1f3fa2516a3a0bac89f7cd45c4c43bf702cbc160216823d2225640590c79a487c979afef2b275083726571d5b1dbd4e9da3d16b10e8fba8d168b6c60accb3a2dda6036ef35a11932a0c833b97ac1a2a94cc16e3abd5ea3cd5918761c064ec83b6dca9a94858d9031da09ebd0a22190fd09f9a38481b1d05ba945393e72e57b81bb0afce574340cdca28d88e288c665b8bc89e7390d36b9b2edbcdf377adbe75521d12dbf0f6f1ab8fe701478976eb90213d850be5bdce2124434d68068aa680206d4b9c4a47d329f2dbcc09b4d87136414f73a3f2034e9ffbc7f2204bb6d316953fce65eed66e17f005cd2382b1077e50771c87e7ff27f8545e07bd32f6f4b1c4945d323d4f985305cfb52825c2c5dff3b298f7c884041cadf5f03041785775fefe12921161f13da6883ff71e9b8ce4db88272f94452b459b2dbcd8ed36e9002acccab5ac36e1c269c6be48a90406a1e3a2a9f523eb0a294e94710167167a6c5a8f6ff0075c4e975ca040000",
    ],
    [
      "ETag",
      "yZFCrD2RRqzP2hfBPuPCQQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:27 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-80-1640212585510"
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
      "d1",
      "6a",
      "c2",
      "40",
      "10",
      "45",
      "ff",
      "65",
      "fa",
      "9ad0c41a2b011fd4865648a58d150a45645dc73436c9a4bb931411ffddd9d8979dd9bb67e75ee60c3f45bd87187645fedba239dde5c8efaec9d0b6255b290dd516c10364950ba9ef57a3d787cfa49b475ce2b47b0c574fa3e9642284d5df582988cf7028b0dc5b88bfce50ab0ae5db766bfa8982f1a971ca62f9913c27990815ed9db05ca7e974962670d95c3c38d22ec3031aac35ba918da1236a5eb8b456554d89bea5d668b4d0c3fd436ea86d9421f245f1c7811f8e86c1201c44e3280a03014bd28a0baa855daf406c98589519fd49580805307d2bb90ffdd9893c748136ffe8ecc468df0c89af456719dcece7e422b14465d3a2075ac9325e0abedd2f57e9cf0f4869010000",
    ],
    [
      "ETag",
      "c/S6M3XEvC5tleAv71SD6A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:27 GMT",
      "Server",
      "ESF",
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
      "0000000002ff1dd04d7282301800d0bb642d0e8302d29d28a058232282b2c940f8f81194081a899ddebd4e8ff0de0f4a2885be278fb6861bfa4222518c311da7f2fcc4e577e06d8af55037716491405a4f9ca3d5ef5ea007eaa3cd8bab462af0a3426d2be3a5d9eed4730504f62bd735ec06ae2962a2c21cd7761b1f4b453883c2b1ce5963641799a6213c57bac74fc05a1a49e19b1d956d18126d8627bebe8cf0a1b9878e7c523aebac0eb12482a43c5756c9b2eb8c7b36af77d3642b9951395f3c05bfdd7b7bc9972b1d0f37e9bdf0c27a3bcd8a3df369fdcdf1396f2e4eb6a19bdc94e4bd9a2ed2351a211858d5414faa8f7ba21ac608fd27908760f0993021e9a043bf7ffeed0d7623010000",
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
      "Wed, 22 Dec 2021 22:37:27 GMT",
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
      jobId: "grouparoo-job-81-1640212585510",
    },
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
      "85535d6fda3014fd2b91f75ac0010229125a11a40309c21a42ab699a22c7b949dd86388d9d6e55c57fdf8d53ba7693baa7d8bee7dc73ee479ec9bd28123221b1c81e6aa89e3eddc9989c11d02cc35711ccf265198cd902ca6c2df365baffe55e4da788100d4bb143994347c9bae2a026fb5d37ab645db24aca0e26eab876c71e0d69dfee3baee3d814790af2742d8a7b64df6a5daa49af77d2ee66526639b052a82e9787d7f7de63bf5756f20eb856bdf7923d5451bd8f453fe792332d6431ddefd040ada08ae0c0448e16fe3093f8e27deaae60876e86e047c181712eeb4237b6300597452ab2ba3259c9e499189b6f0e64e7adbd79687199d787222ad801ceac846916e9a712accb60bbb156fee536d8ccc2d5d68f76f3a5b79975e7dbf57ee3efac9ba517789666710e866b4dad0b73f3f182fa09282d0aa31e36cf8df24b8356ff8ea521a0b48236188de988d92e3d8fd378cc5377e0c429853876e3b1c30631e5e74318263130e41951c362852c68c2dc988e9288b33e44c384f6233618d8913b626eea509a9c2731399e919f95d0b010aa944ab41d2237c12af4a230d8fbf359e899125256e77ad11a6b0a78eb51638111a536023fa8ebd8448544b5a6e52b3ff482d93c5c5d7bed94d79031feb47bc039a72c57806856610335541b9960d3883fdb780b049ba97d3d0515997c7f264ddf1b276fdafe4a0f71888d656dbe6417062bff8bb173425cb3bc3690c7f6404ab47c8bf5a1ebe30f44e2a2b659c8d5de0bbe91f62980142a28f8ff278a6013f8efff765a7ec4e2faa38cd278c7fde1aa11e115b47b244cb92fecd170ec8e47c4802bfd77cca5d43975adc9d164840314faa5a276f9b1d056ac56af200ce20af8a65bc7dfd7f9fe1a7c040000",
    ],
    [
      "ETag",
      "iRAlHpR7aDepgLolHfUx8Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:28 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-81-1640212585510"
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
      "514f83400cc7bf4b7d9425638eb990f8808a3ac539198b0fc62c3728c8048a7787cbb2ecbbdb439d464df4e568cbafa5ff3fb781a7bc4ac085459e3d3728d77b19ea5b1384a89a422b7ed45429040b508b8cc97562f79657fb67574e30090f7c5fdedd5ecad5d111132a7ec45280bb8134c72251e0de6fa01225725b4c455356f336b340af6b539c46e1687cce794989c9c7b320f08e031fb6d6ae31115acc5bfe1f6d0f5b0b96b408314589558c66975ad212633d32329528eb023b8a1a19a382166e5f64929a5a48a20e573a43bb630ffadd9edd73868e6377192c28163aa78ad9d994f7034d5a1421ad58250c18906dc882d3f67ce1729eb4424c381a47837ebbdf5740624c3299ffc9d5bceea3e0bff081bd3bf09d13253595de5167c18df7db38b6f473d4a917f93f08a5d9a81d128daefd69e45d4f0cf7f02efd78ad514d24b18f0a8d8576b73f740e07dd37574fc838cddf71b56cd08258f0e5b8c835b8a928146e5f018fcdda1b7a020000",
    ],
    [
      "ETag",
      "yd12jK+FK5LPR3EErWQJrw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:28 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`purchase`) NOT LIKE ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%oran%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-82-1640212585510",
    },
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
      "10fe2b912724a6d136e97b2b55ac946c8b565a4853109aa6d676aec190c4c5768a3ad4ffbe4b4219080d3e35f53d6f773e3f923b9186a44f9888ee3350db4fb7929123028646789ab82306d109fb727ad1bafdb36dccae37b39387c100112267699aac63a86899290eba3f9f552325b33555525650a8d2ad579c76d3ae3bf556b7d5726ce46988576391de21fbc698b5eed76a7bef6a246514035d0b5de532793eaf6deab5b592b7c08daebdb6aca18baebd6f7a1c4b4e8d90e9603ec3009906b580848a1823fc6386eceb6be9aaa0493542f04670a09ccb2c35792c94e0325d892853852ae93f9222e68b0f3273c7ee28b046d3f924385cd224272f3f5b545b8b85029dc5c6fae64fcface51abd6ea806bdb4ae7eb8be6b594b055caa7021c2a535b08eade1e4d4b2c6d32bd73f7c46a3d4641a5863efa78b88b177e6059683c142d046a445ac80b218f2484f93f3dede574ea006e5cae2a263b7a9d3b57b6cc53a7cd56db4d8ca06c6baacd3a20d66f35e139a21038a3c93ab172c9aca14eca6d3eb35da9c8561c761e084bcd3a6ac4959d80819a39db00e2d1a02d91d9107250c9c0abd965a94e32357be17b88bc09f4f46c3c02dda58511cd169192e6fe2654e834d2e6c3beff79dde7679554874cbefc39b04ae3f1c05dea55baec01822cab7b37b5c82158d35209a2a9a8001752631699f9c4f675ee04d27c331328a7b3ddf2334e9ff7afc4708b6eb62d2a6f8cdbddacdc27f0fb8a471562036e50771c86e77f47f8559e07b93efef4b1c4845d303d4f98d305cfb52825ccc5dff9a94473eac4041ca3f5e030417850f5feffe2921161f13da6883ff71e9b8ce4db88272f94452b459b2dbcd6ea75e2705589937b56eb3b19f70ae912b4202a979eaa87c4af9c08a52a69f4158c49d9914a3dafd055b2d04d2ca",
      "040000",
    ],
    [
      "ETag",
      "mECbegBb+DQ5jzy3SYvSBw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:28 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-82-1640212585510"
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
      "41",
      "6f",
      "82",
      "40",
      "10",
      "85ffcbf4a82442a4b1241e2aa1d5849a8af5d418b3c08058d8a1bb4b0d25fef7ce622f3bb36fbf9df732037c55328700d2aafcee50f50f259a9d6d12d45d6d349796a44698021a5132397992e7762d5fba70ff16aa9d682665fa7b5d2e99d0d9191b01c100458575ae21f81c408a06f9dbe9a4c6898c99beb5ca66fb11bd46090b0de556d81ee2f8791547703bdea670a134c10215ca0cedc856d10533b3b169b568da1a1d4d9dca50c3088f0fa5a2ae158ac861c559788efb389f79aee72f7cdf9d315853264c4592d9c31ed8c690117542570e0b2e036a6c3977319e3f2ccf6da0e33fbaea0dea7745ecabd15aceeef621d94886a31ad5e11432c1cb5857e67ebffd01cec3f2a869010000",
    ],
    [
      "ETag",
      "+9nhpHnFuCSMCrQam+gbzw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:29 GMT",
      "Server",
      "ESF",
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
      "dd",
      "96",
      "42",
      "40",
      "0000e07799ebea488bec1d72c4347e0ac5cd9cc168105b684df6ecbb6f671fe1fb7e00c9733a0c78fc6a68073ec18b88ea2a5f658276f916e6d0afdcf461f6d8425ce3fbb8331ec4f3746a9ea84184d8aef2a13fdb6994880c85e3b3cda4983706dc478e32975559d75b2a974c366ac173cfca538eca726d3d44c468b1af85aa65176dd4f20e47e874086faddbd5d648b21d64284d5018649b4b3a73fd0a8b54bc39870006a3946bb1b264da1a667e92e0a255cd2b274fa7fb5097f39153c353b7ccdcc9d371b6f497e71687a9b183db444d1b4a3ef4b184943e761ab00094dfab9e0eb87abb3792aa2ec07f021e5f77fa9ed029e9690f7eff00e25f5e6823010000",
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
      "Wed, 22 Dec 2021 22:37:29 GMT",
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
      jobId: "grouparoo-job-83-1640212585510",
    },
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
      "4fa34014fd2b64f6d5b6d096963669d66e452569a94ba9c6dd6cc8305c709432c80c1ad7f4bfef1db0aec6449f98997bce3de77ef04cee789190298979765f43f5f4ed56c4e48880a219be7acaf9bb18b9e5f5a2b6ac1f677c78f9ebfae671364304d72c4977650e1d29ea8a819c6e37ddac1275492b213a98a8e30c3ad66868f6adbeedd8b665224f429e2e797187ec1ba54a39edf50edadd4c882c075a72d96562f7fade7be8f7ca4adc0253b2f75eb2872ab2f7b9e8f75c30aab82866db0d1aa8255411ec28cfd1c27f66121fbf4fdde574d7cd10fcc01950c6445d286d0b533051a43cabab262b993e93c6e69b03d9b84b77111a4ce4f5ae880aba832323a18a46eaa904e33458af0ccf3f5d07ab79e8adfd68b3387757f3ee62bddcaefc8d7175ee06aea1689c43c33566c67173f3f182fa0948c58b463dd4cf5af9a541dec7b168024a4b6883d1d81c51cb3127711a8f59ea0cec3835218e9d786cd3416cb2c91086490c14798d68c3a285289cd190516a8e22db31c7d170024934a17d1aa5fd64e0001d0c923425fb23f2587105275c9642f2b643e42af042370a83adbf98876e53424aeb5c9db4c674016f3d2a2c30324d0b819fd4b5d7512e504db7dcf34337982f42efd26da7bc848cb2a7cd3dce39a5b90444d30a1ba8a05a89049b46fcf9ca3d417033b58b435092e9ef67a2fbae9dbc69fb2b3dc4216acbaaf9924d1878fe5963e780b8a479dd401eda0329d1f20dd687aef77f10898bda66213fb76e704ddaa70052a8a0605f4f14c14de0cbffedb0fc88c5f54719a9f08efbc3a4166115b47bc49b725fd8a3e16430d1dd4770a53ec46ccb3e744de7d0196107857aa9a85d7e2cb415abe52b0883b8027ed3adfd3fd0a8d0be7c040000",
    ],
    [
      "ETag",
      "It8zC6EpYCu11BGi4VZYhw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:29 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-83-1640212585510"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92614fc2400c86ff4bfd3a125036c8123f0002920022ccc4c410726c650cb775de751a42f8eff6a6a25113fd726bbba75ddf777780c7248fc08775123f95a8f76731f2ad0de668ca948d3c0aca0d8203c82a1672c82f8334f7eed75b5ef4b6ed16bb654bc597974298708b9902ff009b04d3c880ff70805c65286d21a56596afaacc01de17b6b808e6a3e950f28c229b4fefc6e34e77dc87a3736a8c14ab55c5ffa36d79746047eb396e50631ea2dda5d0b4c3904756a651599162cd50a9433450c1d58b585359284d54934aad7d516b78cdfa79e3dc6dbb6ea32e604aa1e2847261ef16b21f30b14ae7f4222ac1134057a108de54e7b39493a81262c3d134f09ad57e5f018d21e968f52757c8ba5b257fe1037b77e03ba7322a733e5183f14de7b77162e9e7a8ab4ed0ff411816a34e48309af417416732b3dcf25d7a77cf68669ac44783d6c246bdd9765b5efdcdd51e59a7e53b3eeb121d08955c8eeb84c1dfa8d4e0f11548b70afc7a020000",
    ],
    [
      "ETag",
      "GtwFln6XbhtSCh87t5u7ag==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:30 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`date`) NOT LIKE ? LIMIT 1",
        types: ["INT64", "DATE"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "DATE" }, parameterValue: {} },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-84-1640212585510",
    },
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
      "000002ffd5535b4fdb3014fe2b56f60212bd04b55dd7a96205b211ad2490a4450ca1d638a7c190c4c176d810e2bfefd869c7101b7bde536c9fef727cfce5d1b9e565ea8c9c2b9eddd5201fdedd882b67c7014d333c2de6bdf03614efe3f95172930dbecdcbfcc7fef7f11811dcb0142daa1c5a4ad492811acde27626455d5129440b855ac35ecb1df4babbee6e7fd8efbb5de429c857535ede22fb5aeb4a8d3a9d8d773b1322cb81565cb599287e9d77ee773b951437c0b4eabcb4eca08beabc6dba970b463517e578166303b502b98082f21c5b7866a6579f5e4ab7392dda1982ef3903ca98a84b6dda420926ca15cf6a69559dd1a363dbfc6de1c4ded43b48c841380b92ad252d0c79b94da8228b850455e79a7c8ec263b2acd0eb9a2a504b7276e4451e214b094cc874c1d32519933d32090e099986675eb4b54ca9069409c2844cfdaf1e56a7feb19f10179b4a614551f7906a94d3a699b459fae6a53428bde8760d703d4afff5033a4fa6ca85e4da5cc20f122f9a1c24fedc6be636858cb287f80e27b7a2b9024453490bd0208f450a483909633ff1c3603245861dc6c906a19cd1c5e3332179a8c034a9edd7780d7ad67f0398d3bcb688fb66e1b8ced3d3cedf150e278987884bd4c0143445e774e645e74e7314c10a2494cc92de188205dbc23fc3bc491662315b68a334ee95e64c191326c196135ed80b34ec41bfeb76878e054bfdba36f8607ec032fd6365ed515b7d9052c8c8c6c96cd14dd95e788933e3e9a90de38b2eefd64705284533231f085250cdae799911c5b312b525909590645597ccd09af0d9232ab3ba8052133373352266e66d12d75525a486f459006b4d64e324f2832fdb1fd7dbfdf3c48bf13fd0e4c21d0ddd4b731f7b8b261dffe50d2e9b27b1190c0393c19fc998090e56050000",
    ],
    [
      "ETag",
      "mV4OkOo7SVHTjg6ZVnlxBw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:30 GMT",
      "Server",
      "ESF",
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
      "d1",
      "96",
      "42",
      "401800e07799ebeac450ec5db513da89509bed660efa4923314874f6ddb7b38ff07d2f14c631d4356bee1c0af481fa50d627f1249a2e82c774d8db843a5457eaeffdc0dd4135b716093f3d3fddad7d63a5f9e5caf55ab92b07c6ac648907fadc9e2da795baaa0e8d3e9e277c51ac5467695e2545788250dc4192e2bb7e3b2c9c1f76ed4cc89dc86f53ef58044498a9b0823d649eec52663eca46cac1e077326d3b02d231d96611dd60db75c55a1e7bc2ec654db948faa98aa2f1ec8b362eb5ade2245429dc81529597db214fc49c47da8964e7e303cbdce209de04f92c462304cf321350b3ecedc6aaae8fd07f026bfa12de134b080508f4fb07fbd82a9f23010000",
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
      "Wed, 22 Dec 2021 22:37:30 GMT",
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
      jobId: "grouparoo-job-85-1640212585510",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b6f9b3014fd2bc8fbb82690077949d11a2574454b484748bb872664cc85ba259862d32aabf2df77314dd7aa52fb09dbf79c7bce7df0486e791e930989787a5741b9ff742322724240d1145f3fffedf5aedd45f6edd70f2bcb7a41b62fd5e5c3748a085eb324dd1519b4a4a84a0672b2ddb4d35254052d856861a2d6c86e75067dabdbe9da23dbee58c89390254b9edf22fb5aa9424e4cf3a8dd4e854833a005976d2676cfefe67dd72c4a71034c49f3b5a4892ad27c5ff44b2618555ce4d3ed060d5412ca1076946768e13f338e4e5fa76e73ba6ba708bee70c2863a2ca556d0b533091273cad4a9d954c1e89b6f9e24036ced29907061359b5cbc39ceee0c488a9a2a1da17609cf9eb95e17a676b7f350bdcb5176ee6e7ce6ad69eaf97db95b731aece1ddf31148d32d05c636a9cea9b8717d48f412a9e6bf5a07eae959f1ae4be1d4b4d4069094d301c5a03da1959e32889862c19f5ec28b1208a46d1d0a6bdc862e33ef4e30828f2b4a866d15ce4d610c6e3a8cfc251dc1b84fd0e1de189b2b06b7787fd241ed0018dc8e1843c945cc182cb4248de74885cf96ee08481bff5e6b3c0d12524b4cad4a2315617f0d2a3c20243cbea20f09dba0e75940b54ab5bee7a81e3cfe6817be934535e424ad97e7387734e682601d1b4c4062a285722c6a6116fb6721608d653bb38062599fc7e2475df6b272fdafe4c0f7088b565a5bf6413f8aef755db39222e695669c87d7320055abec6fad0f5e10f2271519b2ce4fbd6f17f92e6c987044ac8d9c71345b00e7cf8bf1d971fb1b8fe282315de717f98ac455809cd1e715dee137b605bfde1806870a9dec4ec61e7d8b53a479d117690aba78a9ae5c7421bb14a3e8330882be0e96e1dfe01e49869847c040000",
    ],
    [
      "ETag",
      "+z33hIDlKZX0ll3TlyrtVw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:30 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-85-1640212585510"
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
      "6f4fc2400cc6bf4b7d3b22236c9225be009d8a014418897f42c8b17563b8adf3eea62184ef6e6f221a35d137b7b6fbb5ebf3ecb6f094161178b04c93e70ae5e628417d6b8209aa2ad38a1f25150ac102d422613218fb32be7b2837eef1b5d3bbf755a49776727aca840a57980bf0b610a798450abcc72d1422476e0b29abf262516716e84d698ad360d21f5d729e5364f2d16c30e8f6063eecac436324b458d4fc3fdae63b0bd6b49c608c128b10cd2ea5a43586ba6f642a919719361455324405355cbf482455a590440dae343a4ec376dbcd96dd723a8e633719cc28143aa582d9d994f7034d5a64137a6595e03220eb9005c7f5f9c2e534aa8598b03f0adc76bddf57406248325afcc995bcee4af05ff8c0f60e7ce7444e55a10fd4c5e0a6fbdb38b6f473d47937f07f104ab3510724e80ffd69d01d8e0d37df4bef6d34aab124f651a1b1d06eb63bce89db7c77f58c8cd3fc1d4fcb0a2d08055f8eab5483178b4ce1ee0dd5804f7b7a020000",
    ],
    [
      "ETag",
      "TPErfXZpy6/J5BYEsdtb1g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:31 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`stamp`) NOT LIKE ? LIMIT 1",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-86-1640212585510",
    },
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
      "dd",
      "4e",
      "db30147e152bbb0189360dd0aacb54b102198b96a62549a91042ad71dcd490c4a9ed30558877dfb1d3c2101bbbde551c9fefcfc7c74fd6032b53cbb5ee58b6aea9d87cbae777d6814515ce60f76a95cc2e679be4e7fae2f3d1691d0cbdcec4ce06034030cd92b8a872da92bc16844a771ab733c1eb0a0bce5b20d4eaf75a4eefb873e81c76fbddaed3019ea4f93260e503b0574a55d2b5ed9d773be33ccb29ae986c135ebcecdb8f877625f83d254ada6f2d6d7091f6c7a627392758315e0ea63104a82515735a6096438457667af7f5ad749be1a29d01f891118a09e175a9742c9020bc5cb2ac1646d5729f2c13f3b785157b817796a0b3f1344cf616b8d0e4c53ec212cde782ca3a57e85b341ea145055e2b2ca95ca0d9772ff2105a084ab848e72c5da0013a41c3f01ca1603cf3a2bd8554101174c2718202ff8707e5c01ff9097220554a971884cfb1023da5d3a4cdd2d757a5a854f34e4703b7bdf4dfdfa0f5acab8c0ba6f429fc30f1a2e159e25f794de3029a61b289d7d0ba25ce25053416b8a08a8a114f295026e3d84ffc71380c8061ba31d921a4e5de3cbd12924d45754865bedaab776cfc77802b9cd706f1d82c2cc77a7e3ef8bb42e28fbc38198e2600bb0521988506615d4ebde8da6ab622baa48296c4303fe884019bc23f477a375f808509031bb826c5a462446a1322a82927ac30a768d8bdae73e4e8db00b050ef6bbdbe7e8665fac7cad6a336fa54082e223354fa17dca4c9c24a681c4b2fcd48be49b9de6e15544a9c69f990a3022bb262658624cb4ad016142db940cbba249ad68ca0d9c222ab0b5a2aa41b2f5df4d2f8368aebaae242d1f4550500cdf4c649e48717fb5fb6bfa7d78917c39350e8c671fbcead3e94394a3327ffef316e9bcbd179cec7a107d3f80b158d111866050000",
    ],
    [
      "ETag",
      "VhTWQWyTwqG93BuLAE0P/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:31 GMT",
      "Server",
      "ESF",
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
      "497282401400d0bbf4dab21882d0d909c89002193441b2a19ae6a32834d82083a9dc3d568ef0de0f229442df67437b0386ded14224bca6eb5cd89e46e179f44dd597710a87bb6be38f4420cc3eb3ceeabe0bd537216a1ebb82d2a0f65880a323ff225577f2c6b378386c22ceda2d0d9c528b127c190d23bdc9f2a594dd3b57a72137f6b3c7e226d3689fe3cfb753b097ac425b24a24b5773d704d8dca49391255ebb75d2e5ea6e9eceeed188a3e92af054863086b9d6cb3ad98b5340426a0b920e62249ec3249c0b850f579657e665a98f6d2c69fd047a56f9b15f5a2a8ec0e58e805608e6aee2d067d5cb2d2b18afd07f42362c1dbc2674201c38fafd0386f38f0423010000",
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
      "Wed, 22 Dec 2021 22:37:31 GMT",
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
      jobId: "grouparoo-job-87-1640212585510",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85535d4fa34014fd2b64f6d516a8c5d226cdda545cbb69e92ea5baeb664386e182a3c02033681ad3ffbe97c1ba1a137d6266ee39f79cfbc113b9e365422624e6d97d03f5eecbad88c9110145337c7d9c5bd73bfbfa9e7f0faf1dd7ac92f1f657f1389d2282b72c498b2a879e144dcd404eb69b7e568ba6a2b5103d4cd473473dfb64680dec81e33a8e6d214f429e2e797987ec1ba52a3931cd83763f1322cb81565cf699285edecd878159d5e2169892e65b491355a4f9b1e8d75c30aab828a7db0d1a6824d4111494e768e13f33894fdfa6ee735af433043f70069431d194aab585299828539e35b5ce4a264f44db7c75201b6fe9cd438389bc29caa8a4051c1909553452bb0a8cf360bd3216fef93a58cdc2c5da8f36f30b6f35ebcfd7cbedcadf1857175ee0198ac63968ae31354ef5cdc70bea2720152fb57ad83eb7cacf0d5abc1f4b4b4069095d301a5927d476ad719cc62396bac74e9c5a10c76e3c72e8716cb1f11086490c14795a54b36829ca6348062e73d32805b0a2613c762377004e64330a23364c868e1393fd1179acb982332e2b2179d72172152c422f0a83ad3f9f859e2e21a54daece3a636d01af3d2a2c30b22c1b811fd4b56fa35ca05adbf2851f7ac16c1e2e2ebd6eca4bc828db6dee71ce29cd25209ad6d84005f54a24d834e2cf56de1982f5d47e1c82924cfe3c91b6efad93576d7fa18738c4d6b2d25fb2098385ff4ddb39202e69de68c8437720155abec1fad0f5fe2f227151bb2ce4e7d60b7e93ee2980146a28d9e71345b00e7cfabf1d961fb1b8fe282315de717f986c45580ddd1e715dee33fbc4b147964b34b856ef62ae6d1fbad6e668334201a57aaea85b7e2cb4136be40b0883b802beeed6fe1f3c900b2c7c040000",
    ],
    [
      "ETag",
      "wC0Zy1ZqiJTZ58/pd9UXmw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:31 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-87-1640212585510"
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
      "02ff8d92dd4ec2401085df65bcb42494f067132e40504b00a12d578690a51da0d876eaee564208efee6c45346aa237db99e937d339a77b84e7388bc08155bc7929501eae36a86726f050158956fcc829530816a0161b2687bded5e78f3be7dede1e1a6e7bbfb6114cd3a1d2654b8c554807384758c49a4c0793a422652e4b6909222cd966566813ee4a6e8079e3bb9e73ca5c8e493f968d4ed8d0670b22e8d91d06259f2ff685b9c2cd8d1cac3354acc4234bbe49276186ad7c85422cd13ac282a64880a4ab87cb19154e4421255b85269b72a76b35eadd9b546bbd1b0ab0c26140a1d53c6ecdce7fd40931689477b56094d066419b2e07579be72398e4a2126742741b35eeef7159018928c967f7239afbb15fc173eb0b303df39915291e90b75377aecfe368e2dfd1cd5ef06831f84d26cd40509dcf1c00fbae3a9e11667e9bd83463595c43e2a3416dad57abbd16a56df5dbd25e3347fc7d1b2400b42c197e321d6e0ac45a2f0f4066ad581b07a020000",
    ],
    [
      "ETag",
      "JBhwaRUD1+Rey9BSIwJddQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:32 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`amount`) NOT LIKE ? LIMIT 1",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "%1.54%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-88-1640212585510",
    },
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
      "535b4fdb3014fe2b9627c4a6f5beb663952ad6b541440b0db429084da87193d36048e2d4769018e2bfefd8a15cc4068f7b8aed73be8b3f9fdcd16b9ec77440573cd994206f3f5c8915ad51d02cc15350e3c3cf132f3d997a979bdf5f36d03fef1c8e8643ece006a55856a45057a29411a8c162de48a4280b2685a823517d6fafdeee775b9d76a7b7d7ebb55b885390ae3d9e5f23fa52eb420d9acdad762311224981155c3522913d9e376f3acd428a2b88b46abe946ca28a6abe2dba9f8a88692ef2e1628e064a05720919e3295a7842c6abef2fa91b9c658d049b6f78042c8a44996b630b292291af79524acb4a0777d4da7cb6a073c773c60119fb8b69f031649901879f085364b994a0ca549383997f44c202b52e99021592b34367e610124a88848c973c0ec990ec93d1744288e79f39b36744533f209efbd3c1bae71eb90169a3ad18d60c99274c23a13676e26ae99ab7d2a0f4b2d5328d0f61baaf9f90de9b2a17926b730d771a38b3d138704f9d2a390f1216ddce3798dd9aa50ab09b4996810679246240c8b13f7703d79f8e3c44d8388eb71d8a0e7edd3d0182db028c496dbf46abdfb5fadb86539696b6e3a65ad036bdbfaffd9be1c0f347ef72ecb41bbdee0e125d601b8e4bc5414f16ceec9c5647335883843cb2b837b2b2cdb6f0eed46f47107b7108514669dc2bcd2365442209b61cf0ccdeb342f77b9deed76fd4364bfdaad66b75cc9f9ac77fad3c6894961fa4147266e7ce6c514d592f3cc758f04faed10c946289a159e47813056c9502b1ef471ec3246148784e4cdc240cce8f9de543e4618dfc60318945695036ea01a992deee76abedae3166ed54d3f07fad5c542119ad893f75702afe00f9098e3011050000",
    ],
    [
      "ETag",
      "esCH+DLlQNLhqz3qe6Y2HA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:32 GMT",
      "Server",
      "ESF",
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
      "02ffedd34b7282300000d0bb646d1d842aa43b90f8c1d6102a1ad8302466308a42819a88d3bbd7e935eabbc3bb839c73d1b659579dc405bc815b6ec2211f32c3a557a3df60eabb1554723acad12aa1362e4e746fcc3fd62e97335dbca767ecc46c77146c1cb359426ac38f268dfb4578c76013ca035cf73c8db5e723cdf536b609ce7ac683c8cb71a017958d7d754e851d984bf48dc2f9fcf56c76cbb28c96b4355e64cf7a1464e5a8f2d5419242850e6141416b7c2dafabf67364895d5797d3fd319055b4f1336c7a5aa14519a284f49c5e1cc3b3a9675b0ad65b89d68e8a262c3e42ee24c3a7a77f070c80d0b56c449bc9c7766b0ce100fcd5cfba5b2d1eff3d9137a2013fbf69bd72cc19040000",
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
      "Wed, 22 Dec 2021 22:37:32 GMT",
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
      jobId: "grouparoo-job-89-1640212585510",
    },
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
      "5d6f9b3014fd2bc87b6d1292901022456b94d23553423620edaa6942c65ca85b822936d9ba2aff7d17d374ad2ab54fd8bee7dc73ee078fe48e170999929867f735540f9f6e454c4e08289ae1ebd74078e3bf17d73ff87a58399edcdbb5fd279bcd10c11b96a4bb32878e1475c5404eb74137ab445dd24a880e26ea4c9c4e7f6c9983fe6034198dfa26f224e4e98a1777c8be51aa94d35eefa8ddcd84c872a025975d2676cfefbdfda05756e2169892bdd7923d5491bdf7453fe78251c54531db0668a0965045b0a33c470bff99497cfa3a7597d35d3743f09e33a08c89ba508d2d4cc14491f2acae7456327d24dae68b0309dc95bb080d26f27a574405ddc18991504523f5508271ee6fd6c6d23bdff8eb79b8dc7851b0b870d7f3ee62b3daaebdc0b8ba707dd75034ce41738d9971aa6f1e5e503f01a978a1d5c3e6b9517e6ad0f2ed581a024a4b6883916d8e697f623a711adb2c9d0c47716a421c4f627b4487b1c91c0bac24068a3c2daa59b410c53001cbb6c793c87652882cc71a444e9f5a91090ed8a69358261b93c309f95d7105675c9642f2b643e4ca5f866e14fa5b6f310f5d5d424aeb5c9db5c69a025e7a545860649a7d04be53d7a18972816a4dcb975ee8faf345b8bc74db29af20a3ec21b8c739a7349780685a610315546b9160d388375fbb6708d653fb760c4a32fdf9489abe374e5eb4fd991ee2101bcb4a7f4910fa4bef8bb673445cd2bcd6907d7b20255abec1fad0f5e117227151db2ce4fbd6f5af49fbe4430a1514ece3892258073efcdf8ecb8f585c7f94910aefb83f4c3622ac82768fb82ef7893d1e0d267d9b6870a5dec49cc1e0d8b5264793117650a8a78adae5c7425bb15a3e8330882be0e96e1dfe01312667897c040000",
    ],
    [
      "ETag",
      "JSoN6zHYXiM3r9Nsv7u7xg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:32 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-89-1640212585510"
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
      "02ff8d92614fc2400c86ff4bfd3a92a10371891f005189883a863131841c5b87c3db3aef6e9285f0dfed4d44a326fae5d6764fbbbeef6e03cf691e830f8b74f952a2aa0e9668ee6c10a02ea5d1fc2828d7080ea0114b261fe27e9504f2ca7dd1a5d73b12f7f2a25adf9d9e32a1a327cc04f81b485294b106ff7103b9c890db22926596cfebcc015315b6380983e1f882f38c629b8fa7a351b7371ac0d6d937c6c28879cdffa36db67560458b001354984768772914ad3032432b538bac90d8d054aa0835d470fd62a9a82c84226a70a5d1396934db9e7bd83c6c755aada6cba0a44898947266a713de0f0c1921035ab34a6833a0ea900527f5f9cae534ae85d870380edb5ebddf574061442a9effc915bcee93e0bff081ed1cf8ce898ccadceca9f3d14df7b7716ce9e7a8b36e38f84168c346ed9170783d9884ddeb5bcbcd76d27b95417dab887dd4682d6cba5ea775dc76df5ded93759abfe31b55a20391e0cb71991af01321356edf0004ebe98e7a020000",
    ],
    [
      "ETag",
      "XdCyfRlK0qsu4B3aVlGywQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:33 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `id` = ? LIMIT 1",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-90-1640212585510",
    },
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
      "ffa5536d4fdb3010fe2b91f765d3689b97a64d2b55ac826c442a2d6b53d0364daded38c190c4c1764008f5bfef9c505e36093eec539cbbe7e5ee7c7e40d7bc4cd018119eddd44cde7fb812041d20a67106d14bf7ba744bfe53daf1c2bf5bb393cf64b59a4e2680e086a57051e5aca3442d2953e3f5aa9b495157580ad101a1cec8ee3883beed3aae1ff8be63034fb13c9df1f2daa86b5da971afb7f7ee66426439c315575d2a8aa778efd6ed55525c31aa55efb5650f5c54ef6dd3c35c50acb92827eb1514502b2637acc03c87129e9909f9f25abacb71d1cd007ccb29c3948abad4a62c90a0a24c7956cb46158d1f5053e68b035a85b3f028b68e16eb79fc718b0b43de7eb2b0b2361bc9549d6bebeb72716a6d2bf0bac48aa9ad7571122e43cbda4a46854c363cd95a13ebd09ace8f21b8ff9b45a7516c395044c294e66553428c49ce8cfde394a27fefc610b006a336b919da03ec04f688a46448d3c0f3496a33420232f4b1476c3aeab37e4218069e36ea0d0b97a2f447f670300a46beebb1d1c04b82c04bd2c0edbb9e37241e71b1673b382118ed0ed09de49a1d735509c5db51a18b6514879b78b99e1f4de3b06923c5308ee3b638d3c4cb3a3534b9b16dd3ef1bbded4c960b7033b38fe671b89c1ec5d179d85ef78c6598deaf6ee0c2539c2b06682c71c13493a72281c1a1b3c52a8aa3c57c3a03467387677b8442e35f0fcf84f8be6a26ad9baff11af41bff3de01ce77583b86d0fc841bbddc1ff29f820f11b20b0dd2d1b7d5f87cb1fa80d2d59ca242be9fb1b00e026f1ee23ddbf18c0c29b011ba5e11ff68d2a6342256bf78e174d7d2d7be07bc3a18f1ab0d47fe7fa4edfde0fd768184556b0523f76d4be1833ab2655ab271024615de6d1fc1b64ff005259c8b7b1040000",
    ],
    [
      "ETag",
      "h2kn2niZr0TO5wUeH+bSSA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:34 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-90-1640212585510"
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
      "0002ff2d90dd6ec2300c85dfc5bba552cb56c490b8181bda98101ae5e762134221b85dbb36ee9294aa427df7396137b173f2c5e7c857f8c9d5192670cab3df06757797a15dbb2641d394d670a949198401a0151993e377b5bfcfd69bcba81db6fb629bbc149ffbf574ca8491df5809985c21cdb13c1b987c5d41890af9dbf1a8fd44c66c573b65b1dace5fe7090b159d9db0da2d974fb3e51cfa433f80824e09a6a8514974236b4d054abb70698da8ea1203438d9668c0c3fe21d3d4d4421305ac048f61108d1ec261348cc7711c850c962485cd4931bbdb00db58b2a24ca8e5b01031a07dcbb9537f5ebccc810effe8acb3683e34b1af416719deec9fc945b21cd5ea060720052fe32db7b77bff07fc8f83cd69010000",
    ],
    [
      "ETag",
      "8JnV3gQSv6w2wVjTRDjZVQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:34 GMT",
      "Server",
      "ESF",
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
      "7282300000d0bb64ad0e0141d31d1688a3893f2258370c6622042aa12445b1d3bbd7e911defb0139e742ebcca85a34e00d0cb98d267c72b1fc536f3d19450b480a2c2bb6a7350f2b651fb23b675b7720490f2b89866815e8029b027bc929857de47a2bd47ee44c25db663ddf5cedd9f70ceebdc6d05bb03d5ec9463dc8809737e81bb41e7f92db5d7bc971ae88330d8e215e7424d9417e6d139a963dceca77274424fb6acfbc8c242d1b75a0aabe90a271a1ee2379f2996be67b1ca44e1dc772cab4953a671a8e111bdb2c82e96a1ae595ef2ebb780707d2b628de1863693002e2d1ca4ee84cbedc8e8bd008fc27646668c56b6221f24e74e0f70f61827ab923010000",
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
      "Wed, 22 Dec 2021 22:37:34 GMT",
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
      jobId: "grouparoo-job-91-1640212585510",
    },
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
      "0000000002ff85536b6f9b3014fd2bc8fbda2490405e52b446295d23256403d26a9d2664cc85ba25986293a8aaf2df77314dd7aa52fb09dbf79c7bce7df04c1e789190298979f65843f5f4ed5ec4e48c80a219be5e66f12dbf0d927d727fa7aa87c743a8ae2787d90c11bc6149ba2b73e84851570ce4741b74b34ad425ad84e860a2cec4ea5843dbec5b7d67ec3896893c0979bae2c503b2ef942ae5b4d73b69773321b21c68c9659789ddeb7b6fdfef9595b807a664efbd640f5564ef73d1efb960547151ccb6011aa8255411ec28cfd1c27f66129fbf4fdde574d7cd10bce70c2863a22e54630b533051a43cab2b9d954c9f89b6f9e6400277e52e428389bcde1551417770662454d1483d95605cfa9bb5b1f42e37fe7a1e2e375e142caedcf5bcbbd8acb66b2f306eae5cdf35148d73d05c63669ceb9b8717d44f402a5e68f5b0796e945f1ab4fc38968680d212da60343287d41a9b93388d472c1d0f9c3835218ec7f1c8a183d864131bec24068a3c2daa59b410058d07767f1c5b913348edc8b6581a8d61c4a274000e0548ad419a90e31939545cc10597a590bced10b9f197a11b85fed65bcc43579790d23a5717adb1a680b71e15161899a685c04fea3a36512e50ad69f9d20b5d7fbe0897d76e3be51564943d058f38e794e612104d2b6ca0826a2d126c1af1e66bf702c17a6a3f4f4149a67f9e49d3f7c6c99bb6bfd2431c626359e92f09427fe9fdd0764e886b9ad71ab26f0fa444cb77581fba3efe45242e6a9b85fcdabafe6fd23ef990420505fb7aa208d6812fffb7d3f22316d71f65a4c23bee0f938d08aba0dd23aecb7d610f1d7b38b4890657ea436ce48c4f5d6b7234196107857aa9a85d7e2cb415abe52b0883b8029eeed6f11fb3907bf87c040000",
    ],
    [
      "ETag",
      "FgbZiZSdvdjhtrkqwTtV9w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:34 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-91-1640212585510"
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
      "4e83401085df65bca5119afe49d28b56ab36d65a29bd324db385815281c1dd45254ddfdd59acd5a889de2c33c337c39cc3eee031c94370619dc44f25caea24467d6f020f55996ac58f82728560016a113369cb59e43dad6f16c3f5cb6bf51a774fb7951ff7fb4ca8608399007707518269a8c07dd8412e32e4b680d232cb57756681ae0a539cfbde787ac57946a1c9a78bc964309c8c606f1d1b43a1c5aae6ffd1b6dc5bb0a5b587114acc0334bb1492b618e8b191a94456a4d85054ca0015d470fd22965416421235b8d238731a4ea765379d66bbd76e3b3683290542279433bb98f37ea0498bd4a31756091d06641db2e0a83e9fb99c84b510138ea77ea755eff7159018900c577f7205afbb11fc173eb08303df39915199eb237539b91bfc368e2dfd1c7531f0473f08a5d9a823e28f6f47737f703b33dcf2207d5869543349eca34263a163b77aed6ec77e77f59c8cd3fc1d57cb122d08045f8eeb44831b8954e1fe0d20b7186f7a020000",
    ],
    [
      "ETag",
      "0rPfRqbKUBbwxyxg7/jyTg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:35 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` = ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-92-1640212585510",
    },
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
      "02ff85535b6f9b3014fe2bc87bd9b426011268881475514a37a494b484b4aba629b1cd81ba034c6dd3a9aaf2df67a0e945d5da278ccf7739373fa03fac4cd0041196ddd620ee3fdd70820e10289c35b774e1da5f4fa8e90ee92abe4ac8cf10c4f974aa11ac61495c5439f424af05053959affa99e0758505e73d2dd4f3ec9ee58e4cdbb29db1e358a6e649c8d3052bff68f6b552959c0c067bef7ec6799603ae98ec535e3cdd0feeec4125f80d502507af2d07da450ede373dca39c58af172ba5ee9046a0962030566b94ee19999906fafa5fb0c17fd4c83ef18054c29af4bd5a4a525282f5396d5a255459307d4a6f9e28056fec29fc7c67cb90ee3cf5b5c34e4ed17034b63b31120eb5c1927d1f2d4d856daeb1a4b905be3f2871ff986b11540b948362cd91a53e3c89885c7c633aebb5b04a7416c583a9504a462659b488c490e4d128fbd0ade4ea82160a565bae0e6d074b135363d9292439a8e870e494d20644c0e1d3c2426f546304a0860cd538d7acbc2252f896d818d5dea5248888ba96da763ea9984269e374e2c4c31366df01cb43b407f055370cc64c525eb1a862ea320f63771b40ee7b3d86fcb48b16eca71975c53c4cb3c952e72639a4dbdefd4b66ba28c6bb766024118fbd16c1e07177e37f4056498deaf6ef5d8539c4bd0682c70010ac4294f74e3d0d97215c4c1329c2d34a39de4d91e21d1e4d7c33321beafda4eabf6db78b9a3d67f0fb8c079dd22eeba03b2d06e77f07f85551c05e1f7f7256695ae56cbfcd628bde79d023a5ffbd115eaae22484140493fde020d6e031f3ed7fddbd158fd7ab48d54fa5fef1c958d0915d0ed1e2bda2a3bb6eb38c3a1875ab0506f6223d7dc37b8d16814a180523d56d4bd9da65f6da8964f201dd42b13b69ddafd039a3e1a17bb040000",
    ],
    [
      "ETag",
      "bcL62+Fc063cSTYdbXNerQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:35 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-92-1640212585510"
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
      "90416f82401085ffcbf40aa990da5a120fa521c5c4984aebc918b3c2b0a2c0d0dda18d25fef7ce622f3bb36fbf9df732039cabb680080e95feead15cee34f2da3519dabe662ba5a3d6227880acb490c7fbb4e8abdfb59e9df59ad3f88929253d9f0b61f323360aa201ca0aebc242b41da0550dcab7fdde8c1305e34be794c5ea33794b32111a2a9cb0da2c972ff13281ebeeeac1890e199668b0cdd18dec0c9d30e7854b6b55d3d5e85bea4d8e1646787cd086fa4e19225f14ff39f483c787491884d3d9741a4c04ac29575c512bece603c48689559dd18f8485400033b692bb1ccf6f91431768f78fc61746fb6e487c2d3acbc9cdfe955c2496a86c7af42057b28cb4e2dbfdfa0746ca2ebf69010000",
    ],
    [
      "ETag",
      "h/HduizQg8kgQtHB7toHog==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:35 GMT",
      "Server",
      "ESF",
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
      "e1",
      "92",
      "42",
      "40",
      "00",
      "00e077d9df69b432b87f8c92ba588b923f06b78368dbacb035f7eed7dc237cdf1be4654938cf867b4b28f8022287c6b25c16b2998cf22b42fb8794e26c73d64c55bd9c1aa5131692a7edb6e7b8738f129579790fce2a8d0f5572734eb876e3224383e6973e6c4f95e2dda1a0a9bfa69235b3ab5c32a3550a06073bbe4c3b338781e34d9111bf9418ddbeb59f73e6e8c1c3c1c3e4d67a1716615a6d924817835f3dad9eec55677ddd63f4bc8efd9c72b8a2b64e23266a6d44486f76f9e172b4c37532d60c8aaaebbc26485fed7cdcd65e4ac207c6b96a27dc94562e580032b3a6273c6b3e6e45358c05f84fc806c1c867c222794f7af0fb07614c7d8e23010000",
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
      "Wed, 22 Dec 2021 22:37:35 GMT",
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
      jobId: "grouparoo-job-93-1640212585510",
    },
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
      "000002ff85536b6fa24014fd2b64f66b15505131315b63e99644b1456cf7910d19c60b9d1619ca0c364de37fdfcb50bbed6ed27e6266ee39f79cfbe099dcf3624b2624e1d9430dd5d3973b919013028a66f80a8f74fbf3fabbb9ea8b85ebdf0c67e6a6bfbf9a4e11c11b96a4bb32878e1475c5404e36eb6e5689baa495101d4cd471fb1d7b38b07a76cf193b8e6d214f429e2e78718fec5ba54a3931cda376371322cb81965c7699d8bdbe9bfb9e5956e20e9892e67b491355a4f9b1e8d75c30aab828a69b351aa8255431ec28cfd1c25fe636397d9fbacbe9ae9b2178cf1950c6445da8c616a660a2487956573a2b993c136df3cd81acbd85378f0c26f27a57c405ddc189b1a58ac6eaa904e33c5c2d0d3f385f85cb59e4af82783dbff096b3ee7cb5d82c83b57173e1859ea1689283e61a53e354df02bca0fe16a4e285568f9ae746f9a541feff636908282da10dc6236b48edb1e526693262e9b8ef24a90549324e460eed2716730730d8264091a745358b16a2b001a8ebdaa378dcef39f1201958f138b5d27898ba83813dc21c0e258713f2587105675c9642f2b643e426f4232f8ec24d309f459e2e21a575aece5a634d016f3d2a2c30b62c1b811fd47568a25ca05ad3723f88bc70368ffc6baf9df20232ca9ed60f38e794e612104d2b6ca0826a29b6d83412cc96de1982f5d42e8f414926bf9e49d3f7c6c99bb6bfd2231c626359e92f5947a11f7cd3768e886b9ad71ab26f0fa444cbb7581fba3efc46242e6a9b855c6dbcf007699f4248a182827d3e5104ebc0a7ffdb71f9118beb8f3252e11df787c9468455d0ee11d7e5beb0878ee33afa6f55b452ffc68696eb1ebbd6e46832c20e0af55251bbfc58682b56cb571006710502ddadc31f73cd894c7c040000",
    ],
    [
      "ETag",
      "ewadZVX/O3oL9IW6A/U3vQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:36 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-93-1640212585510"
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
      "df65bc2d09202034e1021411c39fa5c40b43c8d24e4ba1edd4ddad8a847777b6221a35d19bedccf49be99cd3ddc3364a7db06115858f39cadd5988face040eaa3cd68a1f19a50ac102d422647252ddf55fb6addbfb348cf244bc06516beb3eb7db4c286f8d89007b0f4184b1afc07ed8432a12e4368fe23c4997456681de65a638739dc1b8cf7942bec9c7f3e1b0d31df6e0609d1a7da1c5b2e0ffd1b63858b0a19583014a4c3d34bb649236e8e98191a94492c55852944b0f151470f122949467421295b8526a9d972a8d5ab95aa9d69bf57aa5cc604c9ed011a5ccce67bc1f68d22276e8995542830159842c3828ce272e477e21c48483b1dba815fb7d05247a24fde59f5cc6ebae05ff850fece8c0774e2494a7fa445d0f279ddfc6b1a59fa3ae3a6eef07a1341b7542dcc1a837733ba3a9e11647e9dd9d463595c43e2a341656cab566fda2517e77f5928cd3fc1d5bcb1c2df0045f8e9b48831d8858e1e10d4e6d66d57a020000",
    ],
    [
      "ETag",
      "O2yGxk9JWngiumazfi9kTw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:36 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` = ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-94-1640212585510",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85535b6f9b3014fe2bc87bd9a4268104c8458aba28652b5b4a5a425a6dd3941863a85bc0d436ddaa2aff7d07d3f4a26aed13c6e7bb9c9befd1352b13344131cb6e6a2aee3e5cf1181d20aa7006b785152cc6df63abf8e65be6f2f86fffe7f5e0e66c3a05046b581217554e3b92d782503959afba99e0758505e71d10ea8ced8ee5da66dfea3b23c7b14ce0499aa70b565e03fb52a94a4e7abdbd7737e33ccb29ae98ec125e3cdef76efbbd4af02b4a94ecbdb4ec818becbd6d7a98738215e3e574bd82046a49c5861698e590c21333893fbf94ee325c743300df32423121bc2e55931648105ea62cab855645937ba4d37c76402b6fe1cd2363be5c07d1c72d2e1af2f69381a5b1d9082aeb5c195fc2e589b1adc0eb124b2ab7c6c5b1177a86b1159470916c58b235a6c6a1310b8e8c275c7bb7f04ffcc8b02095844ac54a9d4884e39c36493cf4ca7f3da1868015c8b4c1cdd074b13532c7711a0f493a1a38716ad2381ec543070f62938c6d6a2731c5c0538dba66e19297c4b192e1204e4c628f8776d2efdb03ec1087d064dcb786a9e95ab66b27d608ed0ed01fc1143d62b2e292b50d4317a11f799b285c07f359e4e932520c4d396a936b8a789ea7822237a6d9d4fb466dbb26ca38b83513f083c80b67f3c83ff7daa12f6886c9ddea06c69ee25c524063810baaa838e109340e9d2e577ee42f83d902187a92a77b8444935ff74f84e8aed29d56fadb78b9b6f6df03ce715e6bc46d7b4016daed0efeafb08a423ff8fab604aea05a90f90d28d8f356019dadbdf0076aaf429a52414bf2fe16005807de7daefbb70358783d602315fcc3ce11d9981041dbdd6385aeb265bb8e3b745da4c142bd8a8d9cd1bec18d46a3480b5aaa878adab7d3f44b876af9088220ac4ca03bb5fb07471eaea7bb040000",
    ],
    [
      "ETag",
      "m1NL9Kb1mJI10OHx2Zk3qQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:36 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-94-1640212585510"
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
      "41",
      "6f",
      "82",
      "40",
      "10",
      "85",
      "ff",
      "cb",
      "f4",
      "2a2910302d890735a43525b6503d98c6981506c4024377975a43fcef9dddf6b23bfbe69b792f3bc267dd1510c1b1aebe0694d7bb0a756a8a0cd5d068c5574f9d4298006a513199bafefdeb4fb0999efae56ede05bb346c5f2eb319132a3f612b201aa1acb12914441f2374a2451e3b1ca4ddc898bef64659ad37f1539cb1d0526184f53649e68b2486dbfe3681331d332c516297a359d94b3a63ae5726ad126ddfa0a36890392ab0b06d5492865e48228715e73170bc69e0fa9e1f3e84a1e732d8502e744d1db3db77601b4d5a34195d382c780c485b72eed29edf2cbb26d0fe1f5d5c35aa3749ecabb0b05d6bbf24134973542d079c402ef8339e6bfdf7befd026d28b2b969010000",
    ],
    [
      "ETag",
      "Q02/Ox4T6hpCYAn4YQ5mKw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:37 GMT",
      "Server",
      "ESF",
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
      "000002ff1dd04b7282300000d0bb642d0e9a1149778448104450fc4037193ea1520aa40445e8f4ee757a84f77e4092655c4ad6b7156fc01b1893259a67f35435a2873a9d823837b90c22412ca533a95753323276b40e74b1aac53ece5925c3eb42718dd41af33046e40ca58b6ffb2b67030dec26c50e4e8d8b0ffd6e52e3353a35e561396431c161522c89890c836d49f8056d7c47a218f4826aa5793b7e8e5a79b2692527f1c1d6be5a47ba12749a2bb68cb58a2f75e935e2f1eedcc537c9266f635ee1be86c62e6b067bd7b62e8abce7b987520b920bdf3d1647ea389bb6c735bf48cd6e2b3003fc29ca8e4b56bedc7085d00cfc27b07e14fc358179d2f10efcfe01964d66d623010000",
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
      "Wed, 22 Dec 2021 22:37:37 GMT",
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
      jobId: "grouparoo-job-95-1640212585510",
    },
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
      "000002ff8553ef6fda3010fd5722efe30a841f690009ad88a61b12842d84b2699a22db5c52b7210eb1d3a9aaf8df77764ad7aa52fb29b6efddbd77ef2e8fe44e143b32264c64871aaa874fb7929133029a66f8eae7d181429f6db65b10f4507bbb9f9f6fb3c90411c26429ba2f73682959571cd478b36e6795ac4b5a49d9c242ad91d7ea9e0fdc5eb7e70d3dafeb629e823c5d88e20eb36fb42ed5b8d33971b73329b31c6829549bcbfdf37be7bed7292b790b5cabce6bca0eb2a8cefba45f72c9a916b2986cd628a0565025b0a7224709ff3377ece275e9b6a0fb7686e07bc181722eeb421b595882cb2215595dd9aa64fc48accc1707b20e16c12c76b8cceb7d9114740f67ce8e6a9ae887129cab68b574e6e1d52a5a4ee3f92a4cd6b36fc172da9ead169b65b876b6df822870346539d85c67e25cd85b8817e4df81d2a2b0ecb17936cc4f06cddf8ec52420b5822698f8ee39ed0edd114b99cfd361df63a90b8c0d99efd13e73f96800831d038a7996d466d142161c587fe4024f10942683d44f93d1f9a09f309fa57d8a7ebbdd1e399e91bf95d07029542995681c22db681e07491c6dc2d9340e6c0b29ad737dd908330dbcd4a8b1c1c475bb087ca7afa3890a896cc6f2791807d17416cfaf8366ca0bc8287f581f70ce29cd15209a5668a0866a2977681a09a7cbe012c1766adf4f4145c6bf1f89f1dd287961fb737a8c433492b5fd92751ccdc3af56ce09714df3da42ee9b032951f20df687aa8f7f10898bda54213f3641f48b344f11a450011afde144116c031ffe6fa7e5472cae3fd2288d77dc1fae0c09afa0d92361db7dca3ef7fcbe6fdc4770a5dfc406c3c1c93553c354843d14faa9a366f9b1d186ac56cf200ce20a84d6ade33f50b3f6017c040000",
    ],
    [
      "ETag",
      "7lRqae3bUWWeiaqu5dX+jg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:37 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-95-1640212585510"
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
      "40",
      "0c",
      "c7",
      "bf",
      "4b",
      "7d",
      "1d09103661890f80888b8038c68331841c5b19c36d9d77370c217c777b13d1a889bedcdaeed7aeffffee00cf491e810bab247e2951ee2f62d40f26f05195a956fc2828570816a016319399ec63739275867e79b7daedc7bbbe377f8cafae9850e1063301ee01d609a69102f7e900b9c890db424acb2c5f5699057a5f98e22cf0bdc990f38c22934fe6a351b7371ac0d13a3746428b65c5ffa36d71b4604b2b1fd728310fd1ec5248da62a83d235389ac48b1a6a894212aa8e0ea452ca92c8424aa71a5d6b16b0da7556f369a76dbb61b7506530a854e2867763ee3fd409316a94fafac121c066415b2e07575eeb89c449510137a93c06955fb7d05248624a3e59f5cc1eb6e04ff850fece4c0774e6454e6fa4cdd8ceebbbf8d634b3f475d7783c10f426936ea8c04de78300bbae3a9e11627e9bdbd463595c43e2a341636eaadb67de9d4df5ded93719abfe36a59a205a1e0cb719b6870d72255787c03ddd10b3a7a020000",
    ],
    [
      "ETag",
      "mrCe2Nm9GRuKbvyMvCIUYg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:38 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `date` = ? LIMIT 1",
        types: ["INT64", "DATE"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-96-1640212585510",
    },
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
      "c8fbb2494d0204c88b1475514257a434c912d26e9aa6c49883b8054cb1e9d456f9ef3ba0e95a556b3f61ee9e97bbf3f991dcf02c244312f0f8b684e2fed3b508c8090145638cea13773971f6bad89f2da7c6c3c3f9f487b5198f4688e0154bd2344fa02545593090c3cdba1d17a2cc6921440b855a03a76538966e1aa6ddb76d43479e84249af1ec06d97ba57239ec748edeed588838019a73d966227d8e77eecc4e5e886b604a765e5b76d04576de373d4d04a38a8b6cb4596301a584620b29e50996f08f19065f5f4bb7394ddb3182ef3803ca982833559585124c64118fcba25625c3475297f9e240d6eecc9df8da64b199fb9f7734adc8bb2f1a95da765b802c13a59dad1617da2e47af3d952077dad5b9bb72356d57001345b8e5e14e1b69a7da783ec560481534ff33efc2f33503cb08412a9ed545f83448a02ae0694ededbdba90854a15593dcf674871a7d7d1044418f45fdae1d443a04413fe8d9b41be86c608115064091a72af59a4533917561e0847a5f7742b0f46ed4eb599669da4e18455d4a0da3d7337ac0c064e47042fe145cc194cb5c48de0c8b5cad3cdfddfaabcd7c32f6ddba8d88e240a64d7155132feb54d8e456d7ab7edfe9ed5065b940b76afadedc7757e389ef5dbacd85cf20a6ec7e7d8b571ed14402a269415350505c88100747968bb5e77b8bf978868cfa1697478424c35f8fff08fe7d5e4f5ad5dfcacbb16aff23e09226658db86b0ec42087c3c9ff15a6d518de153075536fe966cbb051e9374271cd1b11f27de3ae7e9226b482080ac8d8c78b80e03af1e16b3d3e1dc4e2e3411ba9f01fd78ec9ca8415d0ac1f4feb461bb663f70da34f6a70a1dee44c73709c71a55129420a997a",
      "eaa8793ad5c8ea54299f4198c4ad997bf36f98fd0bf62fd6f7ba040000",
    ],
    [
      "ETag",
      "0CEPC6h0ohFPD1zzHDX4UA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:38 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-96-1640212585510"
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
      "61",
      "6f",
      "82",
      "30",
      "10",
      "86",
      "ff",
      "cbede320011cc691f8418ddb5c0c196c26cb16636a3d180a1c6b8bc610fefbaeb82fbdebdba7f7beb90e4e457d8008f645fedba2badee56812dba4a8dbd2682e0dd51ac10134226772129f82e4e9727f96c1e835f85c245fe88f66d329135afe602520ea202bb03c6888be3ba84585fc6db753c344c6ccb5b1ca2afe583e2f53162a3a5821deacd7b3f97a09fdb677e048fb143354584bb4231b4547946665d36a513525ba9a5a2551c3000f0fb9a2b6118ac865c57d1cbbfef8c10bfc209c84a1ef31589214a6a09ad9cd3bb08d2123ca942e1c167c06d4d072ee6c38cf83cc81b6ffe8fc6a50bf29625f8dd6d2bbd92fc846321cd5a8161d908297f15298dbbdff033ab97bef69010000",
    ],
    [
      "ETag",
      "8Nk2QFw+vc23J2XCQZe13A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:38 GMT",
      "Server",
      "ESF",
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
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "64",
      "ad4e00c5a43b3e55844241c214dc6402c612d30a1250b0d3bbd7e911defb01acaab852b46f24bf801730311d2faa4509adfc061f244a1ce9e3bb21a49ac3edd885991ec57e8cbe3e7032d56766acb57ad022dd4497381d2b1aa8a034336c75b6d6521131d13bd7377c231015c58d2115cb3e549c09f37c1d0c4206275c79073d4ac8aeadcbeb61a01b616d32cd1a3bab90fabe343d32af1fb2c55043c754f8d49bc8b814b23e555ea358f38d067b7df602681ff82b2a56dbdd2e742e6630baefdcbd2f555ef03936127f3a7ec253caf3f6640559ee0e0d98013eb6a2e38a8aa7db58613c03ff09b49f5afe9cb039eb78077eff00e17e60ae23010000",
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
      "Wed, 22 Dec 2021 22:37:38 GMT",
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
      jobId: "grouparoo-job-97-1640212585510",
    },
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
      "0002ff85535d6f9b3014fd2bc87b6d1212422091a2354be91a29211d9056db3421db18ea1630c5265354e5bfef629aae55a5f609dbf79c7bcefde0093df03241334478f6d8b0faf0e55e10748698c219bc1e2cf3cedd3f36bf926fd1c3b5efe7d9adc3b2f91c10bc65495c5439eb49d1d494c9d92eec67b5682a5c0bd18344bda9d31b4ec6e66838b25ddb1e9ac0932c4fd7bc7c00f69d52959c0d0627ed7e264496335c71d9a7a278791fec4783aa16f78c2a39782b39001539f858f46b2e28565c94f35d08061ac9ea981598e760e13f3321e76f53f7392efa1980f79c324ca9684ad5da8214549429cf9a5a6745b327a46dbe3aa0d05b7bcbc8a0226f8a322e71c1ce8c042b1cab43c58ccb60bb3156fee536d82ca2d5d68fc3e595b759f497dbf56ee387c6ed95177886c224679a6bcc8d737df3e102fa09938a975a3d6a9f5be5e706adde8fa52580b4645d3076cc091ebae694a4c4a1a96bd9243519212e716c6c11934ec76c9c108681a745350b97a234a93b1d636b1213cb72e2f188d29838d630a6e92819132bc58452743c437f6baed805979590bceb10ba0d56911747c1ce5f2e224f9790e22657179db1b680d71e1514189be610801fd4756ca35c805adbf2951f79c16219ad6ebc6eca6b96617a081f61ce29ce250334aea1818ad51b9140d390bfd8781700d653bb3e05259afd7e426ddf5b27afdafe428f6088ad65a5bf288c8295ff5ddb39216e70de68c8be3ba00a2cdf417de0faf80790b0a85d16f463e7053f51f714b094d5aca49f4f14c03af0e9ff765a7ec0c2fa838c547087fda1b215a135ebf688eb729fd913db752c1b6970addec5dc9173ea5a9ba3cdc80a56aae78abae587423bb146be8020082be0eb6e1dff01db2c332d7c040000",
    ],
    [
      "ETag",
      "y30h8vquZdBTkPNNlgW7eg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:38 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-97-1640212585510"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d926f4fc2400cc6bf4b7de94880f0cf25bc00455d04843112a321e4d8ca186eebb8bb6916c277b737118d9ae89b5bdbfddaf579767b788ed2006c5845e12e47599c85a8a7267051e5b156fcc828550816a0162193e74eb48b9d8770b49b4e8b471ab9f22e75a7dd2e13cadf6022c0dec33ac23850603fed211509729b4f719ea4cb32b340179929ce3cd719df709e5060f2f17c38ecf587033858a7c64068b12cf97fb42d0e166c69e5e21a25a63e9a5d32495bf4b563642a9164315614e5d24705255cbe0825e599904415ae542eda955aab51add7eacd4eb359ab3218932f744429b3f319ef079ab4885d7a6595d0624096210b5e97e70b97a3a014624267ecb51ae57e5f01893ec960f92797f1ba1bc17fe1033b3af09d1309e5a93e51d7c3fbde6fe3d8d2cf51573d6ff083509a8d3a219e331accbcde6862b8c5517abfd0a82692d84785c6c25ab5d169b65bd577572fc938cddfb1b5ccd1025ff0e5b88d34d86b112b3cbc0117e1f0647a020000",
    ],
    [
      "ETag",
      "+IiqlIXgMqQQyZoMRrKnRQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:39 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `stamp` = ? LIMIT 1",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-98-1640212585510",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85535b6f9b3014fe2b88bd6c5293181202891475514a37a65cda84b4eaa62931c6507780a96dd24555fffb8ea1e945d5da27d039e7bb9c8befcd3fac88cda119b1f4b6a262ffe98647e69149154e217ab60b6e677b7a75e507f2477a8aff66d7eef9dd6804154ca324cecb8cb624af04a172b85eb553c1ab120bce5b40d41a782dabdf43b6653b9ee35808709266c994157f007dad5429879dce41bb9d729e6614974cb609cf9fe29d9ddd2905bfa144c9ce6bc90ea8c8cefba2c7192758315e8cd62b3050492a3634c72c030bcfc838fafa9abacd70de4ea178c708c584f0aa50da1650105e242cad44cd6a0eefcddae68b1f73e54ffd49684c16eb79f8798b730dde7e31b034361b41659529e374b99819db12b4aeb1a4726b5c7ef797be616c05255cc41b166f8d91716c8ce72710940acc358169300b42c3021f31958a15b58b104719d50e1e0715bc5d8f0660055a4d72e3a23eb63c348892c82589d775a204d128f222d7c1dd0891418ff6e28862c029cd5ea370c18bd8ee765db71f53cb8a911501daeed9d8893d1721d71e74ed41d21d78c4321f8ecc3bc1143d61b2e49235d3322f9741e86fc2e57a3e19877edd46826122278d39ddc44b9f0a9adc20a4fb7da7b7079d651cd4f4f88379e82fc79330b8f09b8d4f698ac97e750b3b4f70262954638173aaa898f198ea535fac823058ccc75340d46b3c3b544873f8ebfe1910eecb7ad2aafe6aad7eafd63f145ce0acaa2b76cd8f09937838fa3f4318ccfc55389e9dbdcf62231bb590ddb29cd0b287567768f5da08a19f40fe1b8070fa0daf79bef6975766135ad2840a5a908f6f038aebc4872ff8f09ca0161e14c8c06d2a069748a41621823617c9f2baf706dd77063d4fef108a857a93ebdbe83076cda119694e0bf5d851f39cf414eb54259f8a200987340fe6df20fb0fc4eee30cce040000",
    ],
    [
      "ETag",
      "PvIqMyeYYEIsJgFaxlh7Qw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:39 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-98-1640212585510"
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
      "dd",
      "4e",
      "83",
      "40",
      "10",
      "85",
      "df",
      "65",
      "bc",
      "85088d68dba41762886d421a8be5a6a669161890f233b8bb6890f0eece526f7666cf7e3be76446a8ca3683352465f1d5a31cee0ad407d344a8fa5a2b2e1db50ac102d4a260b272caf8545155dd079d7adac6bfc7959f1c361b2654fa898d80f508798975a660fd31422b1ae46f978b9c2732a687ce28bbfd31780d22161aca8cb08fc3f0d90f0398ce9305574a22cc51629ba219d949ba62aa7726ad124d57a3ada897292a98e1f9a190d4774212d9acd8aba5ed3e3e380b77e12d3dcf7518ac2915baa496d9f81dd846931675443f1c165c06e4dc72ee7c3ebf6799039dff517fd0a8de24b1af4263e9dcec5fc844d21c55cb1e2d48052f635beadb7dfa03929f080869010000",
    ],
    [
      "ETag",
      "k0iUZkokk/Eps7HUzT9BbQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:39 GMT",
      "Server",
      "ESF",
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
      "08000000000002ffedd34b7282300000d0bb64ad4e0825487760a345a41a45d46e327c02021a6240143bbd7b9d5ea37d77785f204a12de34acad2b2ec02be823648d92510ced7d071fc1ea60e422f0517038d3cdd149babadc66966f42f783b6eb5bafaf8e0df3f29464fe698c89f2d463cc04e56638f7f560b1244e3c8f91b0d7e3c2bb4b0385d7c546c1069d0d1d4f6f4e9ddb43124c2eecd28a74a7edd952a7f23a63544fd416bd63635290dcbc9fe1548b61e3668f053219b1ddca919f723bdc770cf7f33eabf865960da9c64a3becd2f28d5455e4616ab92f321532b46aa3acf5a23ce21bdeb9ae38690738faf7efcf0103c0efb250bc61c573bb6e58d600fcd6676d2ff9f3bfc323c515f8fe01f8a73d9319040000",
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
      "Wed, 22 Dec 2021 22:37:40 GMT",
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
      jobId: "grouparoo-job-99-1640212585510",
    },
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
      "0002ff85536b4fa34014fd2b64f6e3da164a5b689366ed56749bb4d4a554f7910d19a6171c050699c18d9afef7bd0cd6d598e82766e69e73cfb90f1ec90d2f766442629eded650dd7fba16313922a0688aafe6705d9c9fc50f0f76ffa6f8ea5ce5bf7ed89fd3e91411bc61499a971974a4a82b0672b2dd74d34ad425ad84e860a2ce78dcb14603b36ff587ee706899c89390254b5edc20fb4aa9524e7abd8376371522cd80965c7699c89fdf7b77fd5e59896b604af65e4bf65045f6de17fd9209461517c574bb4103b5842a829cf20c2dfc67eee2e3d7a9bb9ce6dd14c1779c01654cd4856a6c610a268a84a775a5b392c923d1365f1cc8c65b7af3d06022abf3222a680e47c68e2a1aa9fb128cd360bd3216fee93a58cdc2c5da8f36f36fde6ad69daf97db95bf312ebf798167281a67a0b9c6d438d6371f2fa8bf03a978a1d5c3e6b9517e6ad0e2ed581a024a4b688391638ea8e59ae338891d96b8f6304e4c8863377686d48e4d361ec0601703459e16d52c5a88c2b677eea0ef2411756c371a58cc895c2b1e476e9238636b0896edf4c9fe88fcadb882132e4b2179db2172192c422f0a83ad3f9f859e2e21a175a64e5a634d012f3d2a2c30324d0b81efd4b56fa25ca05ad3f2851f7ac16c1e2e2ebc76ca4b4829bbdfdce29c139a494034adb0810aaa95d861d3883f5b792708d6533b3f042599fc7e244ddf1b272fdafe4c0f71888d65a5bf6413060bff4cdb39202e68566bc85d7b20255abec2fad0f5fe0f227151db2ce4fbd60b7e92f62980042a28d8c71345b00e7cf8bf1d961fb1b8fe282315de717f986c445805ed1e715dee137b34322d674434b8526f62b6393874adc9d164841c0af55451bbfc58682b56cb67100671057cddadfd3f2a5af75d7c040000",
    ],
    [
      "ETag",
      "05OnPGbzz32knB7hmZX3+g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:40 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-99-1640212585510"
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
      "83",
      "400cc7bf4b7d94256006db48f6c074ea926d6e800f6acc72423751a0787768e6b2ef6e0fe7346aa22f475b7e2dfdffb90d3c66650a3edc65aba71ae5fa60857a6e8210559d6bc58f8a4a8560016ab162f2ecfad5cbe6574e1151e44e43fbf02aea642ffd3e132ab9c74280bf81658679aac0bfd940290ae4b684f2ba28174d66815e57a618c5e1687ac67941a9c9a797e37130180f616bed1b53a1c5a2e1ffd176bbb5e081ee425ca2c43241b34b25e901133d32329528aa1c5b8a6a99a082066e5eac24d59590442daeb47abd96e3b5ed23e7c8edbaae6333985322744625b39711ef079ab4c8437a6195e031209b90052f9bf399cb59da0831e1681a7bed66bfaf80c48464baf893ab78dd7bc17fe103db39f09d1305d5a5de53a7e38be0b7716ce9e7a893201efe209466a3f6483c9a0ca33898cc0c77bb933e586b543349eca34263a163b7bb6ec7b3df5d3d26e3347fc7d7b2460b12c197e33cd3e02f45ae70fb069d01af747a020000",
    ],
    [
      "ETag",
      "GZz6iQY1mSoS5NR0+YS7iw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:41 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `amount` = ? LIMIT 1",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-100-1640212585510",
    },
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
      "0002ff8553eb6f9b3010ff5790f765539b04524c1e52d4452d6dd9f2e812d26a9aa6c4c041dd02a6b6e95455f9df7740d387aa2d9f42ee7eaf3bdb4fe48ee71119928027f725c8c74fb722208704344bb04abfdf1f00dc5c47771767f303e77c2a0fbe5d8d472344f08aa55856a4d052a29421a8e16ad94ea4280b268568a150cb32cd96e5d866d7ead23ea596894405693ce1f91dd26fb42ed4b0d3d999b71321921458c1553b14d94bbdf3d0ed1452dc42a855e7bd67076d54678feb712a42a6b9c847ab25262815c835648ca798e1951a055fdf6bb739cbda09821f78082c0c4599eb2a174a84228f7952ca5a950c9f489df3cd0759ba13f7c4374ee6ab99ff79c3b28abcf9623065acd71254996ae36c319f1a9b02bd6e9802b531ae2fdc856b181b09a190d19a471b63641c1be3d929169f25eacac49b7abe6161900894e6791dc367410a5584e755791f4fa822308d664d73dd331d66f5cd411007bd30ee1fd120362108fa418fb2a3c00c0736d851000c79ba52af592c177997da26c40327a6bd88767be6807663e61c99813d60260d2844409965f5c8f690fc915cc329578550bc5917b95e78bebbf617abd9c9d877eb3162862b396dc25543bccda971c8b56956f3fe67b66dd5e502ddaafd7b33df5d8c4f7cefca6d8e7c02090b1f97f778e8314b15209a499681063915112e8e5cce979eefcd67e30932ea73bcdc211419fe7a7a25f88f45bd695dff565e8e5dfbef00572c2d6bc443f3412cb2dd1efe5be16c321fefd76853446c7f2308af79a3407eacdcc54fd294161083843cdc7f0b105c37f63fd7ddd341303e1ef4511affe3a50b55e5124a682e1fcfea880ddb712cbb6f931a2cf5879e437bbb0d571a95226490ebe7919aa7532dac6e95ea05844dbc33336f768eddbf6a3db790bc040000",
    ],
    [
      "ETag",
      "5Kq+eehWdkHFO+6GMr+JVA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:41 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-100-1640212585510"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff2d90414f83401085ffcb781422103184a4076b486dc446d0c683699a2d0c08024377171b24fdef9da55e7666df7e3bef6526f8a9ba1c423854e5714039de94a813d3a4a886462b2e3d750ac102d4a264f2187475f07292b7779fc1ca4dd2f6f5afaf92c58209957d632b209ca0a8b0c915845f1374a245feb6dfcb7922637aec8db2de7c44ab2865a1a5dc089b6d1c3f2ee308cebbb305351d522c506297a119d94baa31d36b935689b66fd05634c80c15ccf0fc504a1a7a21896c566cd7716cf7e1def15ccf0f7cdf75986c2813baa28ee1ed3bb08f262d9a944e9c165c06e4dc72f0623e7f59f64ca2dd3fba1c35aa37496cacd0783a57ff2732993467d572400b32c1db78aef4f57ebe00409f95206a010000",
    ],
    [
      "ETag",
      "q8nj8Kwr+/W8G1QRmMzpiQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:41 GMT",
      "Server",
      "ESF",
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
      "000002ff1dd04b7282300000d0bb646d1c7e06e94e502a51ac68aac08609310544207c463e4eef5ea74778ef052863bc6da3aeca79093ec0481563cee6b1b4f29fd244be0e3bf3533f75a7c7aef8665854d5d88c873e0ecf8a38d6cad3a401bea9adbcada1471c96d2b58d94de2f300db6a8ed1f42bb84762a3f726a91c1bd427e30bad8970b51e71485f17153dc8c4d93326823ed07cb539f11a2732f6357013d2b3e4f587569c0e472e03e93bcbba59fca6ad01c6cedef22bfdc9753e9236ca950210b47768a04f5fb6484da4a6b5a24616bea0837d2245c07d2d287fae075deda1d71ed8219e083c81ade46d9dbad2e0c6306fe13a26e14fc3d6172daf006fcfe014f7c473e23010000",
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
      "Wed, 22 Dec 2021 22:37:42 GMT",
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
      jobId: "grouparoo-job-101-1640212585510",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b6f9b3014fd2bc8fbda8447202f295aa394ae9112b20269554d1332ce85ba25986293a9aaf2df77314dd7aad2fa09dbf79c7bce7df0421e79b9235392f2fca981faf9db8348c9190145737c759f0ed7f6ba88eeb2d074e360e89bd48ce7b3192278cb92745f15d093a2a919c8e936eae7b5682a5a0bd1c3443ddbb27bf6d0b51cdbf1c69e675b489450642b5e3e22fd5ea94a4e4df324decf85c80ba015977d26f66fefe6c131ab5a3c0053d2fca869a28c34bf50fd5e08461517e56c1ba18346429dc09ef2023dfca3eed2f38fb9fb9ceefb39820f9c01654c34a56a7d610a26ca8ce74dadb392e90bd13edf1d48e4affc456c305134fb3229e91ece8c1d553451cf151897e1666d2c83cb4db89ec7cb4d90448b2b7f3def2f36abed3a888cdb2b3ff40d45d30234d79819e7fa16e005f57720152fb57adc3eb7caaf1d5a7e1e4c4b4069095d301959436a8fad499aa523968d075e9a5990a6e374e4d1416ab1890bee2e058a3c2daa59b41465ca9c913b1e58c980a66ee24ec66e32b1064e02ccb53dc7f2261370c8f18cfca9b9820b2e2b2179d721721b2e633f89c36db098c7be2e21a34da12e3a636d01ef3d2a2c30b12c1b81ffa9ebd846b940b5b6e5cb20f6c3f9225edef8dd94579053f61c3de19c335a484034adb1810aeab5d861d348305ffb1708d653fb790a4a32fdf542dabeb74edeb5fd8d1ee3105bcb4a7f491487cbe087b67342dcd0a2d190437720155abec7fad0f5f137227153bb2ce47aeb8777a47b0a21831a4af6f54411ac035fff71a7ed4730ee3fea4885775c20265b155643b7485cd7fbca1e0e1d7b38211a5cab4f31c7f34e6d6b73b419610fa57a2da9db7eacb4136be41b0883b803816ed7f12f5da978607f040000",
    ],
    [
      "ETag",
      "4qvQ1MlSYfR/4TN6E/a/TA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:42 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-101-1640212585510"
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
      "926f4f83400cc6bf4b7d0b092cdb5492bd606e2a71ff64cc458d594ee8261328de1d9a65d977b7873a8d9ae89ba32dbf963e0fb785c7b448c083fb74f554a1dc1cac505f9a204455655af1a3a4422158805aac982cae7be9d571f72a9bdf9c07a7f3b01aa9f185dfe930a1e207cc05785b58a698250abcdb2d1422476e8b29abf262516716e84d698ad3280c46679ce794987c341b0cfceea00f3b6bdf98082d1635ff8fb6bb9d056bba0f7189128b18cd2ea5a435c63a303295c8cb0c6d45958c51410dd72f5692aa5248229b2bb6ebb8b6db6e3a0db7d13a6ab55c87c98c62a1532a189e4d7941d0a44516d20bcb843603b20e59f1b23e9fb99c26b5121306a3a8ddac17fc0a488c49268b3fb992f77d10fc1b3eb0770bbe7322a7aad07bea7430f67f1bc79e7e8eeaf951ff07a1343bb547a260d89f46fe7062b8bb77e9dd8d463591c4462a341eba4ef3a875d876de6c3d2163357fc7d3b2420b62c1b7e33cd5e02d45a670f70a56c0a2427b020000",
    ],
    [
      "ETag",
      "nYDiV9BVlWZHIFWRuNsOKA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:42 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `id` > ? LIMIT 1",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-102-1640212585510",
    },
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
      "a5",
      "54",
      "db",
      "6e",
      "9b",
      "40",
      "10",
      "fd",
      "15",
      "b4",
      "7d69a5d8e662886dc94a2d87b6488e9dd83849d556f6b20c64136009bb248a22ff7b6721cea5959a873e0133e7cc39333bcb23b9e1454c4624e2e96d0dd5c3876b119103028aa6185db333757e115e8afbfb985fdf5ef9fc925967e33122b866499a971974a4a82b0672b45e75d34ad425ad84e860a18e65da1dcbeb9bb665bb03d7b54c244ac892192f6e907ea5542947bdde5ebc9b0a9166404b2ebb4ce4cff1de9ddd2b2b710d4cc9de5bcd1ecac8de3baa4799605471518cd72b74504ba83690539ea187176a1c7d7e5bbbcb69de4d117cc71950c6445d28ed0b4b3051243cadaba62a193d92c6e7ab17b2f267fe3434a68bf53cfcb8a5b9266f3f19541a9b4d05b2ce94f165b93831b6256a5d5109726b5c7cf397be616c2b60a28a373cde1a63e3c898cc8f31a8bf7ed6a6e9008666c149101a163a89412a5e343e421a65a03d3ccd2af8fb8834812a546b939b43d3a3d6c01c464974c89281e34689095134880e5dea44261bf6a11f474091a774f586450b5150afef3ae0982e3843db360726b8716c7a5e12b9b1e3589e0b91ed4691477607e4bee20a8eb92c85e4edbcc8c53208fd4db85ccfa793d06fda4828cee4b835a79b78ed5361931bd3d4fdfea3b79dce72816afa008279e82f27d33038f7db339f414ad9c3ea164f3da1990444d38ae6a0a03a11310e8e9c2e5641182ce69319329a833cdd232419fd787c21840f653369d53cb596d76ff4f780739ad50de2ae7d2116d9ed0efeaf828b257e210477bc6593b3b5bffc4edad01212a8a060ef6f00829bc4fb77757f6ff4af60a575a4c26f5c3826b50aaba05d3c9e37065bb6e7d943bb4f1a70a5fecce1",
      "ca0cf6d3d5357445c8a1504f2db5f7460fab49d5f2198449dc977930ff8ad9df32059b1cb9040000",
    ],
    [
      "ETag",
      "UcQtVWTXowwdijqhEiXc1Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:43 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-102-1640212585510"
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
      "41",
      "6f",
      "82",
      "40",
      "1085ffcbf40a29506d1b130fb521d5c4d88ae5648c5961a42830b83b5089e1bf77167bd9997dfbedbc97b9c139af5298c021cf2e0deaee21435edb2642d3146ca4d454190407905526e46614a48753ccd7c773177eb6d779fb4297f5742a84497eb05430b9c131c7223530d9dea05225cab7fd5e0f1305e3aeb6ca62f51d7e84910825a55658c5cbe5db6c1942bfeb1d38d121c2236aac12b4236b4d274c7861d31a55d605ba861a9da081011e1e324d4dad34912b8aeb7b81eb3f8fbcc00fc6afe3b1ef095950a238a74ae07803e2c3c4aa88e857d2822f801e5a097e1cce56e4279b68f78fce3a46f3a5498c0d5a4fefeeff4e36134b56d60d3a9028d9c63ce7fbbdff035f3f41556a010000",
    ],
    [
      "ETag",
      "S42dbjUtx/kyEOvxHv7oqQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:43 GMT",
      "Server",
      "ESF",
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
      "00000002ff1dd0d97282301400d07fc9b33804dcd237612a82404134425f328a97adb24820884effbd4e3fe19c173ac73170cebafa072af481c6b342a6f1f422af43213f0f4e103ada6df8f2602b42fb733825574189f74ca45b34dcb315652cadb62d6e0c6356478f5e1f04e8554a14adfdae8ba1cc83e329585a7ae7e427a57431b5d31d363c79e4522a8e38306bc5ee704caebde65253a76a11bba3b2a0b1b81c578624eb2bc16ffe26b135d3d87b55989650e2a109e76caf45f39cab8e2583c0feac6ea38c26bb6728f50f9781cf177030fcc269969d2ddfd79b6db3a8339fb944cd55ab57533441f068f21638cbdf6e754ec804fd27b06e6ce03da1c1b98516fdfe01c39ea74723010000",
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
      "Wed, 22 Dec 2021 22:37:43 GMT",
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
      jobId: "grouparoo-job-103-1640212585510",
    },
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
      "fd2bc87b5c1b488090468ad62ca52b524236425a4dd3848c73a16e01536c325555fefb2ea6e95a555a9fb07dcfb9e7dc0f9ec83daf76644a529e3fb4d03c7eba13293921a0688eaffb22fbbaaf46b17953ba666e5ac1e77ba7c8673344f08e25695917702a45db3090d3ed669037a2ad6923c429263a1d5af6e970ec58a3e1c89db8eed042a284225bf2ea1ee9b74ad5726a9a47f1412e445e00adb91c3051bebc9bfb915937e20e9892e65b4d1365a4f981ea974230aab8a866db0d3a68253409949417e8e11f75979ebfcd3de0b41ce408de73069431d156aaf3852998a8329eb78dce4aa64f44fb7c75201b7fe92f628389a22daba4a2259c183baa68a21e6b302ea3f5ca08c2cb75b49ac7c13a4c368b2b7f351f2cd6cbed2adc1837577ee41b8aa60568ae3133cef52dc40beaef402a5e69f5b87bee949f3b14bc1f4c474069097d30f1ac311d4eacb3344b3d964d6c37cd2c48d349eab9d44e2d76e680b34b81224f8b6a16ad44059e635b2c7312d71bb1c4f16c2749339625999d79b6e74dc64e0ae47042fe345cc10597b590bcef10b98982d84fe2681b2ee6b1af4bc8685ba88bde5857c06b8f0a0b4c2c6b88c0ffd475e8a25ca05ad7f2208cfd68be88836bbf9ff21272ca1e370f38e78c1612104d1b6ca082662576d83412ce57fe0582f5d4be1f83924c7f3d91aeef9d93576d7fa1c738c4ceb2d25fb289a320fca6ed1c11d7b4683564df1f488d966fb13e747df88d48dcd43e0bf9b1f5a39fa47f8a2083062af6f14411ac031fff71c7ed4730ee3fea4885775c20263b15d640bf485cd7fbcc1e8f6dd7d5ffaba28d7a171b3bdeb16d5d8e2e239450a9e792faedc74a7bb156be8030883b10ea761dfe029cfb6f4a7f040000",
    ],
    [
      "ETag",
      "vlfBvn2T/Wm5/g/0I+k4lg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:43 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-103-1640212585510"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92514fc2400cc7bf4b7d74c44d61e8121f4051490011c68bc690e3d6cde9b6cebb1b0609dfddde44346aa22fb7b6fbb5ebffbf5bc3535a4410c0224d9e2b54abbd04cd8d0d26a8abcc687e9454680407d088844977f82ad03f1adeb66514d36cb1dc5f1e9c24a7a74c68f980b980600d718a59a421b85b432172e43649599517f33a73c0ac4a5b9c8693fee892f39c229b8f668341a73be8c1c6d93546c28879cdffa3ed7ee3c0232d2618a3c242a2dda554f488d2f4ad4c2df232c386a64a49d450c3f58b4451550a45d4e04ac3738f1a9edf740fbdc3d671abe5b94c66248549a9607836e505c19011d9845e5826f80ca83a64c5717d2eb99c46b5121bf647a1dfac17fc0a2894a4a2f99f5cc9fb3e08fe0d1fd8d682ef9cc8a92acc8eba185c777e1bc79e7e8e3aef84bd1f8436ecd40e09fbc3de34ec0cc796bbdf4aefae0ceab1223652a3f5d0739bc7adb6efbedb7a46d66afe4e6054850e48c1b7e32a3510c422d3b87903f59ed8587b020000",
    ],
    [
      "ETag",
      "0Mzae63MZ7cdfoUbv+v/9g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:44 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` > ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-104-1640212585510",
    },
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
      "535b6f9b3014fe2bc87bd9b42640022189147551ca36b45c5a425a751725c6395067802936ddaa2aff7d07687a51b5f609e3f35dcecd77e437cfb66448421e5f9750dcbedb89901c115034c6dbe564b79b797af6ed92597ffd5d34fefed15767a3112278c59234cd13684951160ce470b56cc78528735a08d142a19669582db367191db363f76ddb3490282189a63cfb8df42ba57239d4f583793b16224e80e65cb699481feef59b8e9e1762074c49fdb9a78e36527fc3f538118c2a2eb2d16a891994128a35a4942798c323751b7e7aaedde6346dc708bee10c2863a2cc5495174a3091453c2e8b5a950cef489de7930359ba5377126893c56a1ebcdfd0b4226f3e68546aeb7501b24c94f6d95fccb44d8e5e575482dc68175f5ddfd5b44d014c14db35df6eb49176ac8de727da236ea3fd2c0da30b18987a332fd04ccc670b52f1acce26a061025526f71df35e0eaa2250855a4d70ed183d6af68d4118850e8bfa5d3b8c0c08c37ee8d8b41b1a6c6081b50d81224f55ea358b6622eb772da737a0e0208175bac0ec8169771c7b10597dc62cd3023b624ee890fd11f9537005275ce642f2a66be4c2f702771df8abf9641cb8751911c5ce9c34c955453ccd5361916bc3a8ea7da5b67d15e502ddaa3178f3c0f5c793c03b779bc94f21a6ec76798db38f682201d1b4a029282866628b8d23a78ba517788bf9788a8c7a9ca7078424c31f778f84e036af3badea6fe5d5b36aff03e09c26658db8690ec424fbfdd1ff159681efcdbfbc2e31ceb15a94f98528dcf646819cad5cff9234573e445040c6dede0204d781b75fede1052118df10fa4885ffb8744c562eac8066f9785a97d9b07b3dab33b0480d2ed48b98d5ed1f3a5c69548a9042a6ee4b6a5e50d5b03a54ca0710067167e675abf6ff0071f1f3a8c3040000",
    ],
    [
      "ETag",
      "SCjjMI/nKYc4xRjfAZ+RtQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:44 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-104-1640212585510"
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
      "41",
      "6f",
      "83",
      "300c85ff8b772d12203a75483dac13ea98aa6e63eba9aaaa341846079826661342fdef73e82eb1f3f2c5efc9237c576d0e319caaf2d2a319ee4ae477d76468fb9aad948e5a8b300364550a592c8687d7214ca334ec5f34af9bf0b235e5722984d55fd8288847282aac730bf17e84563528df8e47334d148c87ce29e9f633592799080de54ed8ee369bc7d52681ebe13a83339d322cd060abd18dec0c9d5173ead25ad574357a967aa3d1c2044f0fa5a1be5386c813c50bfcc80bee233f0cc2f9623e0f7c216bd28a2b6a05de7d80f830b1aa33fa95b4100860a6568217d3f92372e4121dfed1d5c068df0c89b145e7e9dffc9fc86562c9caa6c7196825db78aef876bffe01695e660a6a010000",
    ],
    [
      "ETag",
      "f8y9Oy2I4I2uJctGm2qNrg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:44 GMT",
      "Server",
      "ESF",
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
      "d0d97282301400d07fc9b338040a95bea12c52d416a16c2f99845e91b16280b0e9f4dfebf413ce79205a14d07544dc2e50a3373453c558164b269be920dfa3fd2d6058cfe1621d0e58aa4dbc519d29f966961497b0aabca3371197471b7aba3025e3914aa6f7ea3ab2321cd94a5a63b28acaa0bf395e7a2a8071af96ddbdb26b9326f7332aa9dce6fe369c3ff5f88e8739cb65acbb2dfdc9bc60638b203cc354faf9351a65c10b5fdd9fc9dd345fe2b3db10b74bb544a1af3e8f455fe8812c60de75fdd068b99b99c1d791a67dd5275e5983f8c07523b696351cdb71ce4ad5e81d1b2d104cbc6aa123d5d3ad6a86b140ff0944cc1c9e136ba02db4e8f70fe1d565cb23010000",
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
      "Wed, 22 Dec 2021 22:37:45 GMT",
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
      jobId: "grouparoo-job-105-1640212585510",
    },
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
      "6b6f9b3014fd2bc8fbda04f27e48d19aa5b4454a4807a4d5344dc83817ea94608a4daaaaca7fdfb569ba5695d64fd8bee7dc73ee8317f2c08b2d999284678f3554cfdf762221670414cdf4abec06c58fab70c71c0f76fe15bbb19fb26c364304d72c49f7650e2d29ea8a819c6ec2765689baa495102d4cd4ea38835667d877ba9dee603c18741c244ac8d3252f1e907eaf5429a7b67d126f67426439d092cb3613fbb777fbd0b5cb4aec8029697fd4b45146da5fa87ecf05a38a8b62b609d1412da18a614f798e1efe51b7c9f9c7dc6d4ef7ed0cc107ce803226ea42695f98828922e5595d99ac64fa428ccf770712ba4b7711594ce4f5be880bba87336b4b158dd57309d665b05e599e7fb90e56f3c85bfb71b8b87657f3f662bddcacfcd0babb7603d75234c9c170ad99756e6e3e5e507f0b52f1c2a847fa592bbf76c8fb3c184d4069094d301e3943da193b93244d462c1df70649ea40928c93d180f612874dfad0df26409167440d8b16a2e8f7c65d878e46f180757b713fc5d3b8df1fc5c31e75921eb0c9783421c733f2547105175c9642f2a643e42ef022378e828dbf9847ae2921a575ae2e1a63ba80f71e1516183b4e0781ffa9eba8a35ca09a6eb9e7476e305f44deaddb4c79091965cfe123ce39a5b90444d30a1ba8a05a892d368df8f3957b816033b59b535092e9ef17a2fbae9dbc6bfb1b3dc2216acbca7c4918059e7f65ec9c10b734af0de4d01c488996efb13e747dfc8348dcd4260bf9b971835fa4790a20850a0af6f544116c025fff71a7ed4730ee3fea4885775c2026b50aaba059246eea7d650f8748d6ed4770a53ec7269353db740e9d11f650a8d7929aedc74a1bb15abe8130883be09b761dff027ab2c88e7f040000",
    ],
    [
      "ETag",
      "bs2RnBGSjc0IejNGcP/wgg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:45 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-105-1640212585510"
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
      "40",
      "0c",
      "86",
      "ff",
      "4b",
      "fd3a928d30c0257e98884802283094c41872deca9c6eebbcbb6990f0dfed4d45a326fae5d6764fbbbeef6e0b0f69114300b769f258a1da1c2468a63698a1ae32a3f95152a1111c40231226978334890f654fbe2cabab22ef34cfa7d3cbe4e888092def3017106c619d62166b08aeb750881cb94d5256e5c5aace1c309bd216e7d16c3819709e536cf3c962340a8f477dd839fbc65818b1aaf97fb4ddec1cb8a7db19ae516121d1ee522aba47698656a6167999614353a5246aa8e1fa45a2a82a85226a70a5e1b97ec36bb7dca6d7f4bbbeefb94c66248549a9607831e705c19011d98c9e5926b4195075c88ad7f5f9c4e534ae95d8703889daad7ac1af8042492a5efdc995bcef9de0dff081bd5bf09d13395585d953a7a3f3f0b771ece9e7a89330eaff20b461a7f648341cf7e75138beb0dccdbbf4e38d417da1888dd4683df4dc56d7efb4dd375b7b64ade6ef044655e880147c3bce5203c15a641a77aff88abbb77b020000",
    ],
    [
      "ETag",
      "XGigd9cCczXuWnm72OQQVg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:45 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` > ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-106-1640212585510",
    },
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
      "ff85535b6f9b3014fe2bc87bd9b42681140889147551ca36b45c5a42da4ddb941863a83b82a96dd24555fefb8ea1e945d5da278ccf773937dfa13fac48d000c52cbba9a8d8bdbbe6313a4254e10c6eb3e536fc9e5ede9e4fcd8ffd6f19dd45acfbf776380404d32c8937654e5b9257825039582eda99e0558905e72d106a59a6dbb25cdbec5a5dc7731ccb04a2a4793a61c51fa05f2955ca41a773306f679c6739c525936dc2370ff79d6db7530a7e4d89929de79e1db0919d375c4f724eb062bc182e17904125a958d10d66b92ef1819ac49f9e6bb719deb433006f19a198105e154ae70512841729cb2a51aba2c11daaf37c72400b7fe28f23633c5fcea2f76bbcd1e4f507034b63b5125456b9323e87f3a9b12ec1eb0a4b2ad7c6e5573ff40d632d28e12259b1646d0c8d1363343b351e716be357659ac7140293601a448605f924542a56d4d94438cea9cee4be63c1cb41690256a0d504573dd3c59667f6e334ee91d43b76e2d4a471ecc53d071fc726e9dbd44e628a81a7b47acdc2052f12ec79896dbb96639bfdaeeb75d37e62bb896bd9493f4d1cefd8724c9bd83db43f42b782297aca64c9256bba862ec320f25751b89c8d47915f979162e8cc69939c2ee2699e0a8a5c99a6aef795daf63aca38b8e93104b3c80f47e328b8f09bc94f6886c96e7103b34f712e29a0b1c01baaa898f2041a87cee68b200ae6b3d10418f538cf0e0889063fef1e09d1aeac3badeaaff672eddaff00b8c0795523b6cd015968bf3ffabfc2220a83d997d7257009d582cc6f40c1b6370ae87ce9873f507315d2940a5a90b7b700c075e0ed577b7841008637043e52c13f2c1d91da8508da2c1fdbd465366cd7753cdb413558a817b1bee31d3aac35b422ddd042dd97d4bc20ddb03a54c907100461676675abf6ff00731b5e2cc3040000",
    ],
    [
      "ETag",
      "gUvRXfWwQM0+9KgeyTi2xw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:46 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-106-1640212585510"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff2d90d16ac2401045ff65fa9a6022d596800f55a40d0d62d28a9422b226638c4d32e9eec422c17fefecb62fbbb377ceccbdec005f555b400487aafcee515fef4ae4d416199abe66235747ad41f000599542f2e89460faf01a8f16f1b6e1d5c7a5599b743613c2e4276c1444031c2bac0b03d1e700ad6a50c6f67bed360ac6d7ce2af1ea7df9bccc4468a8b0c26a93244ff36409b7ddcd83331d323ca2c63647bbb2d374c69c639bd6a8a6abd137d4eb1c0d38d8354a4d7da734912f8a1f06533f9cde07e3703c799c4cc240c89a72c515b5026fde407c9858d519fd485a0805d0ae94e047775e440e6ca2dd3f3abf329ab526313658b8aef35f90cdc49295758f1ee44a7ee3a5e2bff7ed170db47ae56a010000",
    ],
    [
      "ETag",
      "t/hLeQ7KI/CIWmtNYvmPsQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:46 GMT",
      "Server",
      "ESF",
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
      "08000000000002ffedd3417282300000c0bfe4ac0c8801e90dd02a88406c15e4c290100163a31240a1d3bfd7e937eafe61bf41460815226d2e8c72f006fa6c624844c2b21977f2f019927952cea27319f8ccd13b1ada4c438ea604cc11184337e4c5a3af48ae1cf910dcf764825539b2e858b70f6cdab8ceba255ae489f464c64b32a8688dea1d567080bd3ef66e1b6f656ffdf316f1642167c485fb6e67274e9b1f0f210c2cf57d4ce5cd470b23c60b969675dca8db79967fcd36ab43aba559e89b36bc4ce1cd540a63285174179a3ed008f9f7653d383c39ebf1daeba727b555fcb1855cc817f955ccb580482f2fff0e1801fab856351569f5dcae42c31881bffa69d35fe9f3bf45b39ad6e0e717a208678f19040000",
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
      "Wed, 22 Dec 2021 22:37:46 GMT",
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
      jobId: "grouparoo-job-107-1640212585510",
    },
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
      "02ff85536b6f9b3014fd2bc8fbda2490077948d11aa574899690959056d33421dbb95037802936adba2aff7d17d374ad2aad9fb07dcfb9e7dc07cfe420f23d99102692fb0acaa72f77929133029a26f89a7dbfb95bdcaadd1f3b5e2dbc4bf731b93a1caea65344889aa56856a4d052b22a39a8c96edb4e4a5915b494b285895a8e3d6c396edfee3addc16830706c242a48e395c80f48bfd5ba50934ee724de4ea44c52a085506d2eb3d7f7ce43b75394f20eb8569df79a1d94519d4f54bfa692532d643edd6dd141a5a08c20a322450fffa87b76fe3e775bd0ac9d20f84170a09ccb2ad7b52f4cc1651e8ba42a4d56327926c6e79b03d97a2b6f1e5a5ca655964739cde0ccda534d23fd548075196cd6d6d2bfdc04eb59b8dcf8d176bef0d6b3f67cb3daadfdad75b3f002cfd294a560b8d6d43a37371f2fa8bf07a5456ed4c3fab9567ee9d0f2e3606a024a2b6882d1d076a933b2c72c66431e8f7a0316dbc0d8880d07b4c76c3eee437fcf8022cf881a16cd65ce78d771c7308ed8a8db8bfac31e8d98db65118bf70023e83b6e6c93e319792c85860ba10aa944d32172132c432f0a839d3f9f859e2921a655aa2f1a6375016f3d6a2c30b26d0781ffa9eb58478544b5bae54b3ff482d93c5c5e7bcd94579050feb4bdc739c7345580685a620335946bb9c7a6117fb6f62e106ca6f6e3145464f2eb99d47daf9dbc69fb2b3dc421d696b5f9926d182cfd6fc6ce09714dd3ca401e9a0329d0f22dd687ae8fbf11899bda6421573b2ff8499aa700622821e79f4f14c126f0f91f77da7e04e3fea38ed278c705e2aa56e125348b244cbd2f6cd775fbc30131e0527f88b9cef0d4b63a479d1132c8f54b49cdf663a58d58a55e4118c41df04dbb8e7f011397941b7f040000",
    ],
    [
      "ETag",
      "mKWjHhsUz0fLHEF6wgQkkQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:46 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-107-1640212585510"
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
      "000002ff8d926f4fc2400cc6bf4b7de94836c2802ce105282291ff8c6834841c5b81e1b6cebb1b8610bebbbd8968d444dfdcdaeed7aecfb33bc0739486e0c1325abfe428f7176bd463134c50e5b156fcc828550816a0166b26fdcaf0ee723fbd779d414deea4ae3d3e8c3ae3468309156c3011e01d6015611c2af09e0e908a04b92da0384fd2459159a0f799294efd4977d0e13ca1d0e48359afd76cf5da70b4ce8da1d06251f0ff689b1f2dd8d272822b9498066876c9246d31d05d235389248bb1a42897012a28e0e2c55a529e094954e24ac9b16b25a75ab1cb4ed9adbbae6333195320744429c3b3292f089ab48827f4ca32a1ca802c4256bc2ace1d97a3b05062c2eec0af568a05bf02120392e1e24f2ee37d37827fc30776b2e03b2712ca537da66e7ac3e66fe3d8d3cf51d74dbffd83509a9d3a237eb7df9efacdfec870f393f4d65ea31a496223151a0f1dbb52776b55fbddd62b3256f3773c2d73b420107c3b6e230dde4ac40a8f6fa3cfca287b020000",
    ],
    [
      "ETag",
      "T4OK+ySW51N7rvrt7ZXPGQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:47 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `date` > ? LIMIT 1",
        types: ["INT64", "DATE"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-108-1640212585510",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8553596f9b4010fe2b68fbd24ab1bd188c0fc94add98b6483e521b278ddaca5e96816c0a2c61974451e4ffde01e21c8a9a3c19cf7cc75c7b4ffe8a2c24231288f8ba84e2eec3950cc81101cd628c4ee757e1f52dbf0894039127be306eb19f93f11811a2622996e609b4942c0b0e6ab459b7e34296392ba46ca150cba48396e9d8b46b767b835ecfa4485490443391fd45faa5d6b91a753a07f3762c659c00cb856a73993ec63b37dd4e5ec82be05a755e7a76d04675de713d4e24675ac86cbc596305a582620b291309d6f0440d83cf2fb5db82a5ed18c1378203e35c9699aeea42092eb348c46551ab92d13da9eb7cf641d6eecc3df18d93e566e17fdcb1b422ef3e194c19db6d01aa4cb4f175b59c1bbb1cbd2e9902b533cebfbb2bd73076057059845b11ee8cb1716c4c16530c864cc3cef85d526a010667dedcf30d136b09416991d595f82c48a0aae2615adeeb255504a6d1af496efbd461e6800e8328e8f36860f5828842100c827e8f5901e5431bec3000863c5da9d72c96c9cca1c361341c3861dfb47b604643cead9e4d873c18722b722c1a4411b3439bec8fc86d21344c85caa512cdc4c8f9caf3ddadbfda2c4e26be5bb711319ccab429ae6ae2799d1a9bdc525af5fb466ffb2a2b24ba552bf016bebb9a9cf8de99db6c7d0631e377eb6bdc7bc412058866054b41433197210e8e9c2ed79eef2d17931932ea559e1e108a8c7edd3f11fcbbbc9eb4ae7f2b2fa76ef51170c692b246dc341fc424fbfdd1ff15a6d518de14e8d22e6dd16ecbeca1d21f84e2b13722e4c7c65d5d9026b482080ac8f8fb8780e03af1fea33d3c2004e313421fa5f13fde1d57950b2fa0b93f91d69d366cc7e977ad01a9c1857e95b36c7a1872a55129420a997e68a97940d5ccea54a91e4198c4b359788b6f98fd07f867bb4bc2040000",
    ],
    [
      "ETag",
      "DMjdqwcYbs6efIiBac3aXA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:47 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-108-1640212585510"
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
      "02ff2d90d14e83401045ff657c85045ad186a40f6288d690aa68d56a9a660b035281c1dd4524847f7796fab2337bf7ecdc9b19e0aba853f0e150e4df2dcafe2c47fd689a18555b6ac5a5a15a2158805ae44cbe6c9dcbdfecfe2eedb76f81ea9cd7f7795e75cb25132af9c44a803f405660992af03f06a84585fc6dbf97d344c674df1865b57e0e6fc298858a5223ac3751741544218cbbd182231d62cc50629da019d9483a62a25726ad125553a2ada895092a98e0e92197d4364212d9acd8aeb3b0dd8b7367e6cebc85e7b90e93252542175433bc7902f6d1a4451953c769c165404e2d07cfa6f387e5b949b4fb47835ea37a90c4c60a8da773f2bf26934973562d5bb42011bc8ddb429feee31fea69350e6a010000",
    ],
    [
      "ETag",
      "VY07xfOJdyYXBsw0WZ3gmw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:47 GMT",
      "Server",
      "ESF",
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
      "000002ffedd3417282300000c0bfe42c8e6823d01b8d15148a016c8ba74c94c840841012a4d8e9dfebf41b75ffb0df809e4e4c29a205670d7806239d3bd3d3f43873b3ebecb68f6c2de37cd17b035af3e28a8c5824a915ce77be6e5ab5894b99b8889e23129eed3ef54cd5d62b82780561995674e83b84fdcf756a9b4db78dc29b55e13d4fe1554b1c6c6be4d0d44074ccb96fac5974ce2efee2601a87a6df7191f59c647e2e6dbd72dd212896a8552dc43d3cee717539721958c5207b1d8c64663e592877e46b123a546181066526b41678290aaf6eaa08df3e82c1f0e19b0de5c623ef862da60f0fff0e9800f6d5961d53a4bc6f5f40c79980bffa448f2dbbff7f61b4631df8f90519ecee6719040000",
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
      "Wed, 22 Dec 2021 22:37:47 GMT",
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
      jobId: "grouparoo-job-109-1640212585510",
    },
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
      "000002ff85535d4fa34014fd2b64f6d5b6b4a52d6dd2acb5456dd252a554b3bbd99061b8e02830c80cba6afadff732585763b23e3133f79c7bcefde085dcf13c221312f2e4be82f2e9dbad08c9110145137cadbcf4faf2cfc9223d513fb3e7b238bb78a6ea713a4504af599266450a2d29aa92819cecb6eda41455414b215a98a8d535c7adeed0327bdddec01e0cba261225a4f18ae77748bf51aa90934ee720de4e844852a005976d26b2b7f7ce43af5394e21698929d8f9a1d94919d2f54bfa78251c5453edd6dd14125a10c20a33c450fffa85178fc31779bd3ac9d20f88133a08c892a57b52f4cc1441ef3a42a7556327921dae7bb03d93a2b67ee1b4ca455960739cde0c888a8a2817a2ac038f5366b63e99e6ebcf5cc5f6edc603b3f77d6b3f67cb3daadddad717dee788ea1689882e61a53e358df5cbca07e0452f15cabfbf573adfcdaa1e5e7c1d4049496d004839139a45ddb1c87713862b1dd1f84b109616887a301ed87261b5b60452150e46951cda2b9c8cd701c59acd70dfa83be1958031a0663002bb0ac281eda96dda73422fb23f25872050b2e0b2179d32172ed2d7d27f0bd9d3b9ff98e2e21a655aa168db1ba80f71e15161898661781ffa96b5f47b940b5bae54bd777bcd9dc5f5e39cd94579050f6b4bdc739c7349580685a620315946b1161d3883b5b3b0b04eba95d1c82924c7ebd90baefb593776d7fa3fb38c4dab2d25fb2f5bda57ba6ed1c105734ad34e4a13990022ddf607de87aff1b91b8a94d1672b973bc1fa479f220861272f6f54411ac035fff7187ed4730ee3fea4885775c20266b155642b3485cd7fbca1e0e47b63d241a5caa4fb1f1c83ab4adce5167840c72f55a52b3fd58692356c937100671075cddaefd5f6cc790817f040000",
    ],
    [
      "ETag",
      "uRlWQxBDlBtZmzrpGPzatw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:48 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-109-1640212585510"
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
      "4fc2400cc6bf4b7d3b928d7fea125e0c452422200c1335841cb702d36d9d77370d217c777b13d1a889beb9b5ddaf5d9f67b785a7388bc08745bc7a2e506d8e56686e6c30465d2446f323a74c23388046ac98bcefdeb59fabedabc93090a99cd6c29aa8de06ad16135aae3115e06f6119631269f01fb6908914b94d5252a4d9bccc1c309bdc1627e1b837e8729e5264f3c1b4df0fdafd0eec9c4363248c9897fc3fda663b071e6931c6252acc24da5d72458f284dcfcad422cd13ac682a94440d255cbe58292a72a1882a5ca978ee69c56bd6ddaa576d9c341a9ecb64425298983286a7135e100c19918ce995654293015586ac78599e2f5c8ea352890d7b83b0592f17fc0a2894a4a2f99f5ccefbae05ff860f6c6fc1774ea45464e6405df487c16fe3d8d3cf51e741d8f94168c34e1d90b077dd9984c1f5c872b3bdf4f6c6a01e296223355a0f3db77ed2386ebaefb69e91b59abfe31b55a00352f0edb88c0df84b9168dcbd011965c8cf7b020000",
    ],
    [
      "ETag",
      "ZGYBq2BKSOAcmcU3T3a2VA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:48 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `stamp` > ? LIMIT 1",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-110-1640212585510",
    },
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
      "8553596f9b4010fe2b68fbd24ab159b0f12559a965d316c9478a71d253f6b20c6413cc3aec924391ff7b078873286af204da99ef98eb9e5c8a2c2203128ae4aa80fceec3850cc91101cd127c35edf1e23676fc1f9e9fe87375ba2ca693db9be110334489526cbb4ba1a16491735083d5b299e4b2d8b15cca0612352c8b36ac4e9bda96edf41cc7a2085490c653915d22fc5ceb9d1a98e641bc994899a4c0764235b9dc3ebe9bd7b6b9cbe50570adcc979a26ca28f31dd5e35472a685cc86ab253a2814e46bd83291a2872768147e7ec9dd146cdb4c30f95a70609ccb22d3a52fa4e0328b4552e4152b19dc93cae7b31fb274a7ee3830c68bd53cf8b861db12bcf9643065acd739a822d5c6177f3133363bd43a670ad4c638fbe6faae616c72e0328fd622da1843e3d818cd27f8a8349adb187f0a4a5b80af536fe60586856622505a64959580852994361edae5bd9e5209601a05ebe0ba4b3bccead17e18875d1ef75a4e185308c35ed875582ba4bcdf86761402439c2ed92b14cb64d66ef57b8e0d7d2b66166f5307586485344226bbeff056e838314491c5c9fe88dce442c344a89d54a26e1939f3bdc05d07fe6a3e1e056e5546ccb02d93da5c59c4739f1a8b5c535ad6fb466dfb322a24aa9533f0e681eb8fc68177ead6639f42c2f8ddf20a071fb3540166b39c6d41433e9311368e9c2c965ee02de6a32922aa599e1c321419fcbe7f020477bbaad3bafa965a9d76a57f4838656951655cd73fc422fbfdd1ff19026fe62e83d1ece46d169bdab441ed86e504963db05a03abdda494fe42f2bf08c403a879c9f795ebff24f5930f31e490f1f7770393abc0fb877c382a4cc6b3421ddc502d7015b92a55780ef54a8a6d557c8dee747a4eb743aae45cbf8a75baf6a1ef2547c9085bc8f44349f551956dac42857a4cc2206ed2dc9b7fc5e83f75c5cadad6040000",
    ],
    [
      "ETag",
      "/2COxf5RXIRgthsVSuLDxw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:48 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-110-1640212585510"
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
      "d1",
      "6f823010c6ff97db2b24e0c6b298f8301cdb488853a6be2cc6d47a321ce5b02d3384f0bfef8a7be95dbffe7adf97ebe1a7ac8f308543595c5ad4dd5d8176e59a1c4d5b59c3a5a1da20788056144caee3d5cb55be7e6c2fe95cb54b4575a9f03a9b3161e4372a01d31e4e25564703d3af1e6aa190bfedf77a9cc898ed1aa7a48b75f296e42c283a3a61b1c9b2e7384b60d80d1e9ce990e30935d612ddc846d319a54d5d5a235453a16fa8d5120d8cf0f850686a1ba1897c56fc300cfcf0f121988493e8298ac280c98aa4b025d50c6f3e817d2c5951e574e5b41032a0c796839fc6f397e57b9768f78fc69d45b3d4c4c6069d6770f39f93cb6439abd52d7a20056fe3bdb4b7fbf007cdea96c06a010000",
    ],
    [
      "ETag",
      "TBQDwcFOVqICmuPmonimew==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:48 GMT",
      "Server",
      "ESF",
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
      "30",
      "00",
      "00d0bb646d9d14114b77e2072b9a20a2021b26c42034f2692042707af73a3dc27b4f4028654d13b7156725f8048a68e6988e13380f1e70f051b9b8d8753670352d3ab86f6eb5a6735bcac9eaedd68547be3c1f737237d2d63c165516ac0dfe48e56982af8c73c3cbf4dc3c1ff67da976bc70622db352a95ae3864abe15a2dae19cd8985a778c16918ee7c30c25340ad84f4e6594261b140fd4b589b6f71ada2ebfd287a31f7ac4dd8f4e05f0e2ada4387dcffbca092365613bd9e8457d25b3035c772271437d9761bf4c6dff1dc1cae935e56f9dd0779d4e4e3d0f8211607d9d0bd6c4f9cb3d999ae608fc27c4adaad96bc2624430017eff002299445023010000",
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
      "Wed, 22 Dec 2021 22:37:49 GMT",
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
      jobId: "grouparoo-job-111-1640212585510",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85536b6f9b3014fd2bc8fbb826409a1791a2354ae91a29900e48ab699a903117ea1630c3a65555e5bfef629aae55a5f513b6ef39f79cfbe099dcf32a250b92f0fc4f0bcdd3973b919013028ae6f8fa187a57bb9de39ae52df7c677945d7c2dedd5728908deb1242deb020652b40d03b9d887c3bc116d4d1b2106986860dbf6c09e8ead913d9acc2713db42a28422dbf2ea1ee9b74ad572619a47f1612e445e00adb91c3251bebe9b0f23b36ec41d3025cdf79a26ca48f313d56f85605471512df7213a68253431949417e8e11f354dcedee71e725a0e73043f70069431d156aaf3852998a8329eb78dce4a16cf44fb7c7320a1bb75d791c144d196555cd1124e8c942a1aaba71a8c8b60e7191bff621778ab68b3f3e3707de97aabe17ab7dd7b7e68dc5cba816b289a14a0b9c6d238d3371f2fa89f8254bcd2ea51f7dc29bf7468f371301d01a525f4c178664da93db79c244b662c9b9f4e92cc82249927b3093d4d2ce68c619c264091a745358b56a24a1863d92463b1e38c583c4e531a532b9bc65327cb00c69425539b1c4ec863c3159c73590bc9fb0e919b6013b97114ecfdf52a727509196d0b75de1beb0a78eb516181b165d908fc4f5d872eca05aa752ddff8911bacd6d1e6daeda7bc859cb2a7f00fce39a3850444d3061ba8a0f1448a4d23feca73cf11aca776750c4ab2f8f54cbabe774edeb4fd951ee1103bcb4a7f4918051bffbbb673445cd3a2d59087fe406ab47c8bf5a1ebc36f44e2a6f659c88fbd1bfc24fd5300193450b1cf278a601df8fc8f3b6e3f8271ff51472abce30231d9a9b006fa45e2bade17f674ead8ce8c6870a33ec44e6de7d8b62e4797114aa8d44b49fdf663a5bd582b5f4118c41df075bb0e7f0192dec4df7f040000",
    ],
    [
      "ETag",
      "wSMPOO9E/mhiM4jacF+m1A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:49 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-111-1640212585510"
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
      "0002ff8d92514fc2400cc7bf4b7d74240c01c9121ea6229200e2184fc690732b63785bc7dd4d2084ef6e6f221a35d1975bdbfddaf5ffdfede125cd63f0e0394dd625aadd5982e6c10601ea521acd8f82728de0001a9130297beb51b1cefdc4dfea9bed464e2fce3bfd876e97091d2d3113e0ed6191a28c35788f7bc84586dc16912cb37c5e650e985d618bd330188cfb9c6714db7c3c1b0efdab610f0ecea9311646cc2bfe1f6d4f070756f41ce00215e611da5d0a452b8cccc0cad4222b24d634952a420d155cbd48149585504435aed45cd7adb9ed66bde1365a9d56cbad3329291226a59ce1d99417044346c880362c13da0ca82a64c58bea7ce5721a574a6c381887ed66b5e0574061442a9effc915bcef52f06ff8c08e167ce74446656e4ed4edf0deff6d1c7bfa39eac60f7b3f086dd8a913120e46bd69e88f26967b3a4abfda19d413456ca446eba15b6f765a97edfabbadd764ade6ef784695e84024f876dca506bc85901a0f6f84b7c3ba7b020000",
    ],
    [
      "ETag",
      "lEqMpqnAgAxsDxwlS3+8GQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:49 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `amount` > ? LIMIT 1",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-112-1640212585510",
    },
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
      "5b",
      "6f",
      "9b",
      "30",
      "14",
      "fe",
      "2bc87bd9a426811002891475594a37a4947484b4ea2e4a8c31d42d606a9b4c5195ffbe0334bda8daf28439e7bb9c8bfd88ee5911a3318a58fa5051b1fb70c7237482a8c229447723ef7cb61beaa9eb98cb2f37f18fed250ea693092058cd92382f33da91bc1284caf16ad94d05af4a2c38ef8050c730fa1d6338d0fb46df722ccbd081286996cc59710ff45ba54a39eef50ee6dd94f334a3b864b24b78fe1cef6dfbbd52f03b4a94ecbdf5ec818dec1d713dcd38c18af162b25a420595a4624d73cc32a8e1851a479fdf6a7719cebb2980b78c504c08af0a55d705128417094b2bd1a8a2f1236aea7c75404b77eece426db658f9e1c70dce6bf2e69386a5b65e0b2aab4c69e7c1e242db94e0758b25951bedfa9b1bb89ab611947011af59bcd126daa936f5cf20f824a1fdaa74dda4109e7b175ea819504d4ca56245534b88a38cd6753ccdcb7bbfa69a801538b6c9b5ad0fb1e1e8a328896c9238a615253a8d2227b22d6c463a190de8208e28069eaad51b162e78610e92011e919838043b6664eb23db364d474ffac620c6498c6dac8f4c87a2fd09fa2398a2674c965cb27666e83af042771d062b7f360ddda68d04c35ccedae2ea265ed7a9a0c9b5aed7fdfea7b77d9d651cdcea25787ee806d359e85db9eddee734c564b77c80cd27389314d058e09c2a2a2e780c8343978ba5177a0b7f3a0746b3cccb0342a2f1cfc71742b82b9b49abe65b7b0d078dff017085b3aa416cdb0332d07e7ff26f85f3f9627a5ca36b0162ff1b4070d75b05f47de50637a80d0534a18216e4f82d00709338fe660fef07c0f082c0472af8874b4764ed42046d2f1fcb9b125bf6d0d6e1831ab050ef7286651d265c6bd48a34a7857a6aa97d3ff5c0",
      "9a54259f4190843be37bfe57c8fe054b0ab71fc1040000",
    ],
    [
      "ETag",
      "y9IFCy60gE83SBYdZvPaRA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:50 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-112-1640212585510"
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
      "41",
      "4f",
      "c2",
      "40",
      "10",
      "85",
      "ff",
      "cb",
      "78",
      "6d13b68a314d3808a98aa92015f4600859ca505ada4edd9daa0de1bf3b5bbcecccbefd76decb9ce098d73b08619b675f2d9aee2a435eb82641db966ca534545b040f9075e648fc985f2fa6c7e86152bd1c7ee7cf851abf67a39110363d60a5213cc13ec7726721fc3c41ad2b946f9b8de9270ac65de394e96c193d46890815ed9c305bc5f1fd388ee0bc3e7b50d036c13d1aac5374231b4305a63c7569adae9a127d4bad49d1420ff70f99a1b6d186c817c5572af0d5edcd2050c1f06e385403214b4a35e7540bbc7a03f161625d26f42369410960fa5682effbf35be4c0255affa3e38ed1be1a12638bce7370f19f90cbc492954d8b1ea45ab6f194f3e57efe0313d2a8576a010000",
    ],
    [
      "ETag",
      "beWO3QIkEFCmMhxOJj1BVg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:50 GMT",
      "Server",
      "ESF",
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
      "417282300000c0bf70b68e6845d21b2a2d1488a218904b262101a3184452103bfd7b9d7ea3ee1ff65b2359c69b06abeac4a5f6a6f5640c86d9908eaca41ddda3d55819ee79d341336449814ec2545280c58ebe4c0ead648b3cb7891f9149afefd3fce8d96dbd452851ec88a8ed61d3f76679e558074f77254387ba1a75e415ee730232389da9309acb772203d601bc8c51302dc2b4958ecfacd280a74d252bbd44a5fec519b42d01765d70399a1da6d45e07c5de4f3fc2c86fe255587bd2e97d4cc5c6a5852bcd5bb6825b58975c20238a3e9d388dfba5e20669e03d30cf69b22e864f4fff8e36d0f8ed22aebcc1e2b17d320560a0fdd5c7aabff0c7ff3927577ed57e7e01f5bc76e719040000",
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
      "Wed, 22 Dec 2021 22:37:50 GMT",
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
      jobId: "grouparoo-job-113-1640212585510",
    },
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
      "fe2bc8fbb82640129a17295ab394ae9912b212d2174d1332ce41dd124cb1e99455f9ef3b9ba66b5569fd84ed7bee9ee79e3b9ec83d2f366444129e3dd450ed3edd89841c115034c3d7afd7373732093e7b766effb9db0d52797bfdfd623c4604d759926ecb1c5a52d41503395aafda5925ea925642b4b050cb75bb2df7b8e774dc8e37f03cd7c14409793ae7c53da6df2a55ca916d1fc8db9910590eb4e4b2cdc4f6e5dd7eecd86525ee802969bfe5b49146da1fb07ec905a38a8b62bc5ea1825a4215c396f21c35fc4bdd24276f6bb739ddb633043f7206943151174aebc2124c1429cfeaca5425a3276274be3a90953ff7a791c5445e6f8bb8a05b38b23654d158ed4ab0cec2e5c29a0567cb70318966cb205e4dcffdc5a43d5dced78b60655d9dfba16f299ae46072adb175626e015e907f0352f1c2b047fa59333f3b347b3f189d80d4129a60dc778ea93b7086499af4593ae87a49ea40920c92be47bb89c3863de86d12a09867484d162db0e76eda1d823b8c5376bc897bbde120a65eaf1b7b1d48c1e962b1ce90ec8fc8ef8a2b38e5b21492370e91ab7016f97114ae83e924f24d0b29ad7375da08d30dbcd6a8b0c1d8715c04fea7afbd8e72816cdaf25910f9e1641acd2efd66ca73c828dbad1e70ce29cd25209a5668a0826a2136681a09260bff14c1666a3f0e4149463f9f88f65d2b7965fb4b7a8443d49295f9925514ce826f46ce017149f3da401e9b032951f22df687aaf7bf10899bda5421176b3fbc21cd5388465650b08f278a6013f8f88f3b6c3f8271ff91472abce30231a9595805cd2271d3ef73f6312e495fdb8fe04abd8bf5fb9d836dba86ae085b28d4734bcdf663a70d592d5f4018c41d088c5dfbbf826ae42d7f040000",
    ],
    [
      "ETag",
      "BXYYsbN+5/l/zjy8fshXJQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:50 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-113-1640212585510"
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
      "40",
      "0c",
      "86ff4bfde8880c01cd123f4c455d04c46d408c21e4dc3a9c6eebbcbb6990f0dfed4d44a326fae5d6764fbbbeef6e058f6911830377e9e2a942b9dc59a0be36818faacab4e247498542b000b55830b97b514e5e6f2ebd60ea8f26496baf7d367d0ddca3232654748fb9006705498a59acc0b95d412172e4b688b22a2fe67566815e96a61884be373ce73ca7d8e4c371bfef1ef77bb0b6b68db1d0625ef3ff689bad2d78a03b1f13945844687629253d60a43d235389bcccb0a1a892112aa8e1fac54252550a49d4e04ac3b6f71b76b7dd6cd9adce61a7633799cc28123aa582e171c00b82262d329f5e582674199075c88a93fa7ce6721ad74a4ce80dc36ebb5ef02b20312219cfffe44adef75ef06ff8c036167ce7444e55a1b7d459ffcafd6d1c7bfa39ead40d7b3f08a5d9a92d127a835e10ba8391e1661be9c74b8d6a24898d54683cb49bedc3ce41b7f96eeb0919abf93b8e96155a1009be1d17a906271199c2f51bfd22e3307b020000",
    ],
    [
      "ETag",
      "+HpVzYKISWRPVf2/4FWzSA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:51 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `id` < ? LIMIT 1",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-114-1640212585510",
    },
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
      "a5",
      "53",
      "db",
      "6e9b4010fd15b47d69a5d8061b6c6cc94a5d872648be24364e54b595bd2c03d90458875d9c4691ffbdb310e7a248cd439f5866ce99736666f791dcf23c220312f2e4ae84e2e1d38d08c9110145138ceeccd5388aef2f7a7f12654fbb37cbb3c9b7d38be110115cb324cdb62934a4280b0672b05a369342945b5a08d1c0420dcbb21b56d736db56db711dc7329128218d273cbf45fab5525b3968b50ee2cd44882405bae5b2c944f61c6feddaad6d216e8029d97aabd94219d9fa40f538158c2a2ef2e16a890e4a09c51a32ca53f4f0428dc2af6f6b3739cd9a0982779c01654c94b9d2beb0041379cc93b2a8aa92c123a97cbe3a90a537f1c681319eaf66c1e70dcd3479f3c5a0d258af0b9065aa8cef8bf9d4d86c51eb9a4a901be3eacc5b7886b1298089225af368630c8d6363343bc1a0fefb559a66876168e24ffdc0b0d0490452f1bcf211d03005ede16956fefb15690255a85627d73db34b2dd7ec8771d863b1db71c2d8843074c39e433ba1c9fa36d8510814794a57af583417b91b9b5ddb31dd88b9fd8859513fb662938561bbd3813eb800aec9986302d91f91fb822b38e1722b24afe745ae167ee0ad83c56a361e055ed5464c712627b539ddc46b9f0a9b5c9ba6eef71fbded75960b54d30bf06781b7188d03ffd2ab773e8184b287e51d6e3da6a90444d38266a0a0988a080747cee74b3ff0e7b3d10419d522cf0f0849063f1f5f08c1c3b69ab4aabe5aab6b57fa07c0254dcb0ab1ab0fc422fbfdd1ff5570b0c46f84e01dafd9e462e52d7e903ab480180ac8d9c73700c155e2e3b77a783708c697833a52e13f5e3826b50a2ba0be783cab0cd6ec6ecfb2bb7a55082ed4bb9cd3750ed3d5357445c820574f2dd5ef460fab4a95f2198449bc2f337f768ad9bf057e5b70b9040000",
    ],
    [
      "ETag",
      "v0UCdfwQ7xgt4M6jSHLBGQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:51 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-114-1640212585510"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff2d90d16ac2401045ff65fa6a20b14929011f6a912a04dbc60a4a115993318d4d76e2ee4491907fef6ceccbceecddb3732fd3c16fa97388e15016e716cdeda140fe744d8ab6add84a69485b841120ab42c87075d19b229d6ff4f972e5f996a6b97dbf4e2642d8ec076b057107c712abdc42fcdd815635cab7fdde0c1305e35be394c5f26bf6364b45a82977c2729d242fd36406fdae1fc1890e291ed1a0ced08d6c0c9d30e3854b6b55dd54e8596a4d8616067878280cb58d32449e285e10845ef014fae3601c3d4751e00b5951a6b8242df07a05e2c3c4aa4ae92a692110c00cad043f0ee745e4479768f78f4e6f8cf6c390185b749efeddff955c2696ac6c5a1c41a6641bf392eff7fe0f80e0facb6a010000",
    ],
    [
      "ETag",
      "4SvnXgRHXnqvwtHYoBdsOw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:51 GMT",
      "Server",
      "ESF",
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
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "642d4e00abd01d08163580838c0a9b4ca0a14224fc02084eef5ea74778ef05489ad2aec3a26294834f3011455fa6cb041ab701cea11f723389d02ae9b39fd0aafc7d5e1ead3470e48955d6313d65b851b73db703e75bd4a3ad0927449e2119ee193770c2e6a06a67029b792e6e6166310d6eae580924494698fbb6182c0319ed6c78d36190a412d3fbde71b59bc359df46488de09916a346bcf27157ea6045a6ed8eda3c71e5d5e6b41e32c6e4ee508cd1572fc1222e633432315f62bfdbf1915f2f02cbc75877cbc7e8664dd0af35d23d5156a566de32b000f459e72ded70fe76ab1fbabe00ff09584c357d4f9894b4b405bf7f845aa26023010000",
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
      "Wed, 22 Dec 2021 22:37:52 GMT",
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
      jobId: "grouparoo-job-115-1640212585510",
    },
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
      "4fa34014fd2b64f6d516684ba94d9ab5a9b892b45429d598cd860cc3858e52069941634cfffb5e06eb6a4cd61760e69e73cfb91fbc92075ea6644a129e3f3650bffcb817093921a0688eb7d510c2957f7759f8ee64b9db5d5c79a929af673344f09625e9be2aa02745533390d3eda69fd7a2a9682d440f13f56cdbe9d9e39135b007cec4716c0b89128a6cc9cb07a4ef94aae4d4348fe2fd5c88bc005a71d96762ff7e6f3e0dccaa16f7c094343f6b9a2823cd6f547f168251c54539db6ed04123a18e614f79811efe51d3e4ec73ee3ea7fb7e8ee027ce8032269a52b5be30051365c6f3a6d659c9f495689f1f3ec8c65b7a8bc860a268f6655cd23d9c18295534562f151817e17a65f8c1c53a5ccd237f1dc49bc5a5b79af717ebe576156c8cdb4b2ff40c45930234d7981967fa14e001f553908a975a3d6aaf5be5b70ef95f07d312505a42178c5d6b4ced89759a6489cbb2c9d049320b926492b80e1d26163b1dc1284d80224f8b6a162d45690fd9e9d04e9c789c586e8c9834a66cc462371b53e6baa93d1c8cc9e1843cd75cc139979590bceb10b90dfdc88ba3701b2ce691a74bc86853a8f3ce585bc0478f0a0b8c2dcb46e07fea3ab4512e50ad6db91f445e385f44fe8dd74d790939652f9b479c73460b0988a635365041bd1229368d04f395778e603db5ab635092e9ef57d2f6bd75f2a1edeff40887d85a56fa4d3651e807bfb49d23e286168d863c751fa442cb3bac0f5d1ffe201237b5cb42aeb75e7847baab1032a8a164df4f14c13af0fd1f77dc7e04e3fea38e5478c60562b2556135748bc475bd6fecb18b8f11d1e05a7d890d86ceb16d6d8e3623eca1546f2575db8f9576628d7c0761107720d0ed3afc055debe9f27f040000",
    ],
    [
      "ETag",
      "p3eRMIYHlI78LhhFPEd/sQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:52 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-115-1640212585510"
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
      "40",
      "0cc7bf4b7d1dc9661892253e80222e418431e38331e4bc9531dcaef3eea62184ef6e6f2a1a35d1975bdbfddaf5ffdfede0b1501944f050e44f0deaed518e76ee82044d535ac38f9a9441f000adc899ace4f825c56d57e452a4be0a1315df3ecd4f4f9930728d95806807ab02cbcc4074b703252ae436496553a9659b7960b7b52b2ed2249e8e39af2873f9f46632190c2723d87b87c64c58b16cf97fb4ddef3dd8d043822bd4a824ba5d6a4d1b943676328da8ea123b861a2dd1400bb72f724d4d2d3451872b9d20083b41afeb1f07c7613f0c039fc992a4b00529866f16bc2058b2a24ce88565428f01dd86ac78d59ecf5c2eb256890be369daebb60b7e05344ad2d9f24faee67dd7827fc307f66ec1774e54d4287ba02e26d783dfc6b1a79fa3ce07e9e807612c3b7540d2f86ab448075733c7ddbf4b1f6e2d9a992636d2a0f330f0bbfdf0a4e7bfd97a46ce6afe4e6475831e48c1b7e3b2b010ad446970ff0a83ae5fed7b020000",
    ],
    [
      "ETag",
      "mcGwTey4agcaT0n5RnIWqQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:52 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` < ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-116-1640212585510",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85535b6f9b3014fe2bc87bd9b4260112c8458abaa8651b554a3a42da5d951873a05e01536cba4555fefb0ed0f4b269ed13c6e7bb9c9b6fc915cf233221214fae2b28b7af7e8a901c105034c1dbeaccf117fce4ade37dfe7d559d7cdd5aae314aa65344f09a256956a4d091a22a19c8c96ad94d4a5115b414a283421dc3b03b863dd04dc3b4469665e8489490c6739e5f21fd52a9424e7abdbd793711224981165c7699c8eeef7b3766af28c54f604af69e7af6d046f65e703d4c05a38a8b7cba5a62069584720d19e529e6f0408dc2774fb5bb9c66dd04c1379c01654c54b9aaf3420926f2982755d9a892c92d69f27c74204b67ee1c05dad162e505af3734abc99b371a95da7a5d82ac52a5bdf717a7daa640af4b2a416eb48b8f8eef68daa60426ca68cda38d36d50eb59977ac3de036daf74ad7fb0c0373f7d40d3403f389402a9e37d904344ca1cee4ae63eebf83aa0954a1561b5c0f759b1a237d1cc6e190c5a3be15c63a84e1281c5ab41fea6c3c80411402459eaad51b16cd456e0e462c8a4d880c3a0c2333eadb301c45cc324c18ea21c4f638b441372cb23b20bf4aaee098cb4248de768d5cf86ee0ac037fe51dcd02a72923a6d899e336b9ba88c7792a2c72adeb75bdcfd4b6aba35ca05b3d06d70b1c7f7614b8e74e3bf93924946d97d738fb98a612104d4b9a8182f25444d83872b658ba81bbf066736434e33cdb2324997cbb7d2004dba2e9b46abeb5973d68fcf780739a560de2a63d1083ec7607ff575806beeb7d785e625660b528f30351b8edad02f9b472fc2fa4bdf221861272f6f21620b809bcfc6af72f08c1f886d0472afcc7a563b2766125b4cbc7b3a6cc966d0fcdd178401a70a9fe8ef575d3dc77b8d6a81521835cdd95d4bea0ba614da892f7200ce2ce784dab767f00487fb648c3040000",
    ],
    [
      "ETag",
      "uPEROiJ+ENXxkuJZy5I18g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:53 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-116-1640212585510"
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
      "61",
      "6bc2301086ffcbed6b0bc65519821f74944d28323b059988c4f65aab6d2f4bd26d52fadf77c9f625b9bcf7dcbd2fe9e156b539cce05c959f1deafb438976e38a144d575bc397a2d620048056964c2ab197fa31da6f6f517a518b8fa4fed9b59bf99c09935db09130eba1a8b0ce0dcc0e3db4b2411e3b9db4dfc898bd2ba7acd6dbf8254e59682877c27a97248b6512c3701c02b8d239c50235b619ba954ad31533bb72698d6c548da1a14e6768c0c3be516aea94d444212ba110d3504ca3d1588c274f938918315953266d452dc3bb77601f4b56d6297d735a100c685f72f0c29f5f2c8f5ca2e33fbabc5b346f9ad8d860eebbdeff995c26cb59adee30804cf26fbc56f6ef3dfc02d98e86806a010000",
    ],
    [
      "ETag",
      "p1Xar34XTk4RhpAZLlxUnQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:53 GMT",
      "Server",
      "ESF",
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
      "0000000002ff1dd04b7282300000d0bb646d1c8182a43b2942152d7e2a8d6c328091001a280412ecf4ee757a84f77e409265b4eb88a82bcac12b18131d4db3693a5be061f6f8dc325758f77b16e1d2c0e3c23fa90c371ce2833eb345dfd1304c6266f26b1bc5bca89976bc564775bbe1f995bdc7f373928dd1c10f58dd8c5aca07d5ab551a46b0d8b04be36d3f6e4699561bcb53fd63ade3d2dabdc81cc66df265844ba44701d5573db58370b9a95342a0cb96a4522633fd3ce8768e2cf3396f0743aec36fef4d5ea4a5195c799cc801e63b888818bcadb0d089ca3e46ae6dd942dbb333741de5576002a86a8a9676a478ba0d13a109f84f20626ce873c2a1494b5bf0fb07e6ae9eeb23010000",
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
      "Wed, 22 Dec 2021 22:37:53 GMT",
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
      jobId: "grouparoo-job-117-1640212585510",
    },
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
      "14fd2b64f6d516b02dd026cddab4a84d5aba52aabbd96cc8305c709432c80c1a63fadff732585763b23e3133f79c7bcefde085dcf332251392f0fca181faf9db9d48c8090145737cfdc92f7926bcdd627071fd70154aaf5987d5d3748a08deb224dd5705f4a4686a0672b2dbf6f35a3415ad85e861a29e6dbb3ddb195aa7f6e9c81b8d6c0b89128a6cc5cb7ba4df2a55c989691ec5fbb9107901b4e2b2cfc4feeddd7c3c35ab5adc0153d2fca869a28c34bf50fd5e08461517e574b745078d843a863de5057af8474d93b38fb9fb9ceefb39821f3903ca98684ad5fac2144c9419cf9b5a67259317a27dbe3b90adbff2e791c144d1eccbb8a47b383152aa68ac9e2b30cec3cdda5806e79b703d8b969b20dece2ffdf5ac3fdfac76eb606bdc5cfaa16f289a14a0b9c6d438d3b7002fa89f8254bcd4ea51fbdc2abf7668f979302d01a52574c1d8b51c6a7bd638c9129765de60946416248997b8233a482c361ec2304d80224f8b6a162d45e925e38133a65e4c1d9bc6431bb278cc06563c723dcf7520cd869e450e27e4a9e60a165c5642f2ae43e4265c467e1c85bb603e8b7c5d42469b422d3a636d01ef3d2a2c30b62c1b81ffa9ebd046b940b5b6e5cb20f2c3d93c5a5efbdd94579053f6bc7dc03967b49080685a630315d46b9162d348305bfb0b04eba9fd38062599fc7e216ddf5b27efdafe468f7088ad65a5bf641b85cbe042db3922ae69d168c8637720155abec5fad0f5e10f227153bb2ce46ae787bf48f71442063594eceb89225807befee38edb8f60dc7fd4910aefb8404cb62aac866e91b8aef795edb803c71e100daed5a7986b3bc7b6b539da8cb08752bd96d46d3f56da8935f20d8441dc8140b7ebf0178dce442f7f040000",
    ],
    [
      "ETag",
      "XiHifo8UD3GVqQRs8uMRpw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:53 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-117-1640212585510"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d926f4fc2400cc6bf4b7d3b1286fccb125f0c055932106124248690632b63b0adf3eea62184ef6e6f221a35d137b7b6fbb5ebf3ec8eb04ff2081c5827f17389f27015a37e34c11455996ac58f82728560016a113359f417fe62df182cfcd9b5f2e3a2315cdb5e7c73c3840ab79809708eb049308d14384f47c84586dc16525a66f9aaca2cd087c21467c1d41bdf739e5164f2f1dcf7dd9edf879375698c8416ab8aff47dbf264c18ed653dca0c43c44b34b216987a1f68c4c25b222c59aa25286a8a082ab17b1a4b21092a8c6959a6d776a76bb596fd88d56b7d5b2eb4ca6140a9d50cef07cc60b82262dd229bdb24c683320ab90156faaf385cb49542931a1370edacd6ac1af80c49064b4fa932b78dfade0dff0819d2df8ce898cca5c5fa881ffe0fe368e3dfd1c75e706fd1f84d2ecd40509bc517f16b8a389e19667e9bd83463591c4462a341edaf566b7d569d7df6dbd2563357fc7d1b2440b42c1b763986870362255787a037b8127637b020000",
    ],
    [
      "ETag",
      "pEXLXk2FXLS3sLgp2Hb1Ig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:54 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` < ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-118-1640212585510",
    },
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
      "000002ff85535b6f9b3014fe2bc87bd9a42601c225891475514a37b65c3a42da55db9418639853c0d4369dba2aff7d07687a51b5f609e3f35dcecd77e88a15311aa188a5d71515b7ef763c4247882a9cc2ed974b77be9ae83b37fafbf54a9e9e59bbefc3d3c9780c0856b324cecb8c7624af04a172b45e7553c1ab120bce3b20d4318c41c7702cdd344c7b60db860e4449b364c68a2ba0ff56aa94a35eef60de4d394f338a4b26bb84e70ff7bd1bb3570abea344c9de73cf1ed8c8de1baec7192758315e8cd72bc8a092546c688e5906393c52e3e8e373ed2ec3793705f00d231413c2ab42d5798104e145c2d24a34aa6874879a3c9f1cd0ca9b79d3509b2ed78bf0fd16e73579fb41c352db6c049555a6b4d36039d7b62578fdc692caad76f1d90b3c4ddb0a4ab888372cde6a63ed589b2c4eb447dc56fb59e97a9f4060e6cffd5033209f984ac58a269b104719ad33b9ef98ff725035012bd06a831b5777b031d0875112b92419f4ed28d169140d22d7c6fd4827438b5a714431f054addeb070c10b6c1097621cf587b649f0c084436245a6619bba6399663fb1636c58ae8bf647e88f608a9e305972c9daaea18bc00fbd4d18ac17d349e8356524183a73d2265717f1344f05456e74bdaef795daf675947170abc7e02f422f984c43ffdc6b273fa32926b7ab6b987d823349018d05cea9a262ce63681c3a5baefcd05f2e26336034e33c3b20241afdb87b2484b765d369d57c6b2fc76afc0f80739c550de2a63d2003edf747ff57588581bff8f4ba042ea15a90f90528d8f656017d5b7bc1256aaf029a50410bf2f61600b809bcfd6a0f2f08c0f086c0472af887a523b2762182b6cbc7f2a6cc96edb856df19a2062cd48b98dd770e1dae356a459ad342dd97d4bea0ba614da8920f2008c2ce2c9a56edff019057546fc3040000",
    ],
    [
      "ETag",
      "JY7MSA0j7bzKksFP4jX9FA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:54 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-118-1640212585510"
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
      "41",
      "6f",
      "82",
      "40",
      "10",
      "85ffcbf42a09abc558130f52496b628ca572681a635618281618ba3bd418e27fef2cf6b233fbf6db792fd3c377d96430875359fc7468ae0f05f29b6b62b45dc5564a4b8d451801b22e847cda855532d907ab4bc1fc414bb55a7693cb6221844dbfb0d630ef212fb1ca2ccc3f7b68748df2ed7834c344c1f8da3a65bddd472f512c424d9913b6c966b30c3711dc0eb7119ce914638e069b14ddc8d6d019535ebbb456d76d859ea5cea46861808787c250d76a43e489e22935f3d4f4d11fab71300b02e50b5951aab9a446e0e41dc487897515d345d28212c00cad04cf87f357e4a94b74f847c32ba3dd1912638bced3bffb3f93cbc492954d872348b56ce3b5e4fbfdf607b01776e96a010000",
    ],
    [
      "ETag",
      "9PBlU3T5DwgttYoA1DAu3w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:54 GMT",
      "Server",
      "ESF",
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
      "8b08000000000002ff1dd04b7282300000d0bb642d0e1204d31db440b5f22b02910d0318944f4009c324767af73a3dc27b3fa0a82ac2583e8f1d19c01b108582d6d5ba940dbcc8cf933fdcb4bd158c812f627833719125dde5a9e8d3e451cdeffcba8ea2fb733708515830ce1254e6f0723194435b66bacd7b6684711b6f371f0176d43395868712a75fd6f9fd5360479760edc83738cb663a1fb01a22ca98bbb40887fbc4a059d2d7de2c732a452de15332a88bd38c22b4b8697f537bd69b746f703bbd22f728e50f1acbe3f6dc3a2adfeca40607fde1ea5598696c619d23f5ca5129fdcc355c6fd64e50052b40f8bd9908cb9b971b6e115a81ff847c1677f29a3049319109fcfe0120e7ebf823010000",
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
      "Wed, 22 Dec 2021 22:37:55 GMT",
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
      jobId: "grouparoo-job-119-1640212585510",
    },
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
      "da",
      "4010fc2bd6f5b101db803141420d01274105d31a93b4aa2aeb7c5e3b97189ff19d534511ffbdeb734813456a9ef0edceeccc7ef044ee799190318979b6afa17afc742762724240d10ca3de39fddcfb91667deb629e9c5f7e1d567c1f4e271344f08625e9aecca123455d3190e3eda69b55a22e692544070b756cfbb4630f0756cfee3923c7b12d244ac8d3252fee917eab5429c7a67914ef66426439d092cb2e13bb97b8f9d033cb4adc0153d27cab69a28c343f50fd920b461517c564bb4107b5842a821de5397af8474de2b3b7b5bb9ceeba19821f3803ca98a80bd5f8c2124c1429cfea4a5725e327a27dbefa201b6fe9cd428389bcde1551417770622454d1483d96605c04eb95b1f02fd6c16a1a2ed67eb4995d79ab6977b65e6e57fec6b8b9f202cf5034ce41738d8971a65f3e3e503f01a978a1d5c326dc283f4f68f17e310d01a525b4c9c8b586d41e59a7711abb2c1df59d38b5208e47b1ebd07e6cb1d3010c921828f2b4a866d142147de638cc7169c40086d16018a7514cdd414431dc779c94f660480e27e44fc515ccb92c85e4ed84c84db008bd280cb6fe6c1a7aba8594d6b99ab7c69a065e7b54d86064593602ffd3d7a1c972816acdc8177ee805d359b8b8f6da2d2f21a3ec71b3c73da7349780685ae10015542b91e0d0883f5d797304ebad7d3b262519ff7a22cddc1b27afc6fe420f71898d65a57fc9260c16fea5b673445cd3bcd69087f6839468f916fb43d787df88c44b6dab90ef5b2ff849da5000295450b08f378a609df8f81f77bc7e04e3fda38e54f8c60362b2516115b487c475bfcfeca1ebd88e4334b852ef72bd917b1c5b53a3a9083b28d4734bedf563a7ad582d5f4098c41bf0f5b80e7f01c800fe6f7f040000",
    ],
    [
      "ETag",
      "EBa+2Xfg30FDdBGK6riqTA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:55 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-119-1640212585510"
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
      "1085df65bc2d494ba062132e8a0292f02714b930842ced00c5b65376b71a427877672ba25113bdd9ce4cbf99ce39dd233cc759041eace2cdbe4079b8daa07e30c104559168c58f9c328560016ab161d2f6e78d46bb2b3aca9fef57fbc76e7534705f9b4d2654b8c554807784758c49a4c07b3a422652e4b6909222cd966566813ee4a6380d26bd6197f39422930f67fdbedfeab7e1645d1a23a1c5b2e4ffd1b63859b0a3d504d728310bd1ec924bda61a87b46a612699e60455121435450c2e58b8da4221792a8c2958ae3dc541cb766579d6abd51af3b3693098542c794313c9bf282a0498b6442af2c135c066419b2e27579be70398e4a2526ec0d03b7562ef8159018928c967f7239efbb15fc1b3eb0b305df39915291e90bd5e98ffcdfc6b1a79fa3eefca0fd83509a9dba20416fd09e06fe606cb8c5597aeba0518d25b1910a8d878e5d6bd4af5dfbddd65b3256f3773c2d0bb420147c3bee630dde5a240a4f6f72fbfa767b020000",
    ],
    [
      "ETag",
      "0AW88EGaFsAWqbqVG2OM6w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:55 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `date` < ? LIMIT 1",
        types: ["INT64", "DATE"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-120-1640212585510",
    },
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
      "02ff85535b6fda3014fe2b91f7b249059c400841421b826ccbc4a585d06add26701c27759bc4a9ed305515ff7d2749e965d3da27c239dfe5dc7c8f6e781ea1210a79725b3279f7ee5a84e804314d12889e1783fdf565e906ceb7b8777ab6c1787e998e472340f08aa54856a4aca544292953c3cdba9d485116440ad102a19669e196d9ef61cbb4ec816d9b18888aa5f18ce73740bfd2ba50c34ee768de4e844852460aaeda54648ff1cedeea14525c33aa55e7a567076c54e70dd78fa9a04473918f366ba8a0544c6e5946780a353c51a3f0d34bed3627593b01f09e5346281565aeabba40828a3ce649296b5534bc47759dcf3ed0da9b7993c0982c378be0fd8e641579f7c120cad86e255365aa8dcfabe5dcd815e0754514533be3e2abb7f20c6327191532daf268678c8c8fc6783185604434db193f4b8cbb1482337fee078609b5444c699ed79504244c5955c5c3b4fc7f9754118806bf26b975709f9803ec8671e8d078d0b5c318b3301c848e4dba21a66e8ff5a29011e0e94abd66915ce47d6645143bc4b519e9b9714407bdd80ead08bbb6e3c68eedda2eb6fbdd081d4ed06fc9359b725508c59b89a18b951f78db60b5594cc68157b7111398cab429ae6ae2799d1a9adc625cf5fb4a6f872acb05b8552bf01781b71a4f02ffdc6bb63e6309a177eb5bd87b4c52c5004d24c99866722e22181c3a5daefdc05f2ec63360d4ab3c3d22141afeb87f220477453d695dff565efd5eed7f049c93b4ac11fbe60399e87038f9bfc2b41ac3ab021686c3c656cbb441e91740e1d81b1174b6f156df51135ab1984996d3b70f01c075e2ed477b7c40008627043e4ac37fb83baa2a172a59737f3cab3b6dd87d3802a7876ab0d47fe7fa26b68e43ae342a4596b15c3fb4d43ca06a6675aa548f2048c2d92cfcc517c8fe01857ce945c2040000",
    ],
    [
      "ETag",
      "Vp8vjZu9T7Jf4PQU00MZlA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:56 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-120-1640212585510"
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
      "000002ff2d90dd6e83300c85dfc5bb1c48c0c67e907ad14ea8ad86d04ac76ea6aa4ac130186096844d08f5ddebd0ddc4cec9179f234ff05d75390470aaca9f01e57853a2de99264135345a71e9a9530816a0162593cfe17e78dd5549877592c69bc7f5c76d1a2d170b2654f685ad806082a2c22657107c4ed08916f9dbf128e7898ce9b137ca367e0fd761c2424bb911e2348a96ab2884f3e16c414da7040b94d8656846f6926accf4d6a455a2ed1bb4150d324305333c3f9492865e48229b15dbf51cdb7db8773cd7f39f7cdf75986c2813baa28ee1740feca3498b26a13f4e0b2e03726e3978319fbf2cdf9944877f74356a546f92d858a1f174aefe2f643269ceaae580166482b7b1a9f4f57ebe00b7fa07396a010000",
    ],
    [
      "ETag",
      "9ESuKQiRnejRUNH7GV+ULA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:56 GMT",
      "Server",
      "ESF",
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
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb64ad4e82f8a13b5084a246c988a01b26406c49d1440808747af73abd467d7778df80a629abaa58892f76036fa0a39a314a470934a306f6075c9083d28f2bd33bc5d81c237b86374b4a48862c142e0457d210ee5c906be44521777a5f0f745b05fed66bd9c5ed1381e7b25b9374bd9421820c6af86ea963a6450d83de47b324d929280d2bafb92fbcd9cc71f3b0297abb18969b8b34e946e8054a77926f697e87f724d6b753ab4a1f75be9bbf0793695553f333bbaeea5ae77be2c8cbad164e38ecc81a09746e1a7f6fab29b92e5a77dfb3129f35ee676dcc7102472f2fff0e1800d6cabc64559c3fb78f278631007ff563d549f6fc6f315ab212fcfc028f68ca4919040000",
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
      "Wed, 22 Dec 2021 22:37:56 GMT",
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
      jobId: "grouparoo-job-121-1640212585510",
    },
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
      "0000000002ff85536b6f9b3014fd2bc8fbda24e44d22456b94d01529211d90760f4dc83686ba054cb1e99455f9efbb364dd7aad2fa09dbf79c7bce7df084ee7999a039223c7b68587df87427083a434ce10c5ed7572b8f5c4ccac20b9dd5b71f87f5e6f24f962d1680e09a257151e5ac2345535326e7fbb09bd5a2a9702d44071275fa837ea73f19d983fe60ec8cc77d1b8892e5e98697f740bf55aa92f35eef24decd84c872862b2ebb54142fefbdc741afaac51da34af6de6af64046f63e50fd9c0b8a1517e5621f828346b23a6605e63978f8474dc8f9dbdc5d8e8b6e06e0474e19a65434a5d2be20051565cab3a63659d1fc09199faf0e287437ee2ab2a8c89ba28c4b5cb0332bc10ac7ea5031eb22d86d2dcfbfd805db65e4edfc385c5dbadb6577b5dbecb77e68dd5cba816b294c7266b8d6c23a37371f2ea09f30a97869d423fdac959f3be4bd1f8c2680b4646d309eda13dc77ec1949c994a6ce704c529b11e290e9180f894d6723364a08c3c033a286854b510e1267a0613175ec341e2536896753c78e2783d49ee1091926ce141dcfd0ef9a2bb6e6b21292b71d42378117b97114ecfdd532724d09296e72b56e8de9025e7b5450606cdb7d00fea7aea38e72016abae59e1fb9c1721579d76e3be50dcb303d840f30e714e792011ad7d040c5eaad48a069c85f6edd3580cdd4ae4e4189e63f9f90eebb76f2aaed2ff40886a82d2bf345611478fe1763e784b8c67963208fed015560f916ea03d7c75f80844d6db3a0af7b37f88edaa780a5ac6625fd78a20036818fffb8d3f60318f61f74a4823b2c10955a85d6ac5d246eea7d664fa61348800cb856ef62537b786a9bcea133b28295eab9a476fba1d256ac912f2008c20ef8a65dc7bf5f6e45817f040000",
    ],
    [
      "ETag",
      "DPCIbF6nmIS8CXZyDLHzgg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:56 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-121-1640212585510"
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
      "1085df65bca50934fd51122fb056ad62b5945e99a6d92e538a0283bb8ba6367d776751ab5113bd5966866f863987ddc2435626e0c3324b1f6b549b8314cdc40611ea3a379a1f15951ac101342265b29d054772f03833e6ea32ecbf143a5a66dee4f898092dd75808f0b7b0ca304f34f8775b284581dc2629af8b72d1640e984d658bd3381a8dcf392f28b1f9781686c14938849db36f4c84118b86ff47db7ce7c03d2d235ca1c252a2dda552748fd28cac4c2d8a2ac796a65a49d4d0c0cd8b54515d0945d4e24acb6b7b2dafd771db5ebb7bd8ed7a2e93394961322a199e4d79413064441ed133cb841e03aa0959f1aa399fb89c258d121b8ec671afd32cf815502849258b3fb98af75d0bfe0d1fd8bb05df3951505d9a3d7516de04bf8d634f3f479d06f1f007a10d3bb547e2d1f5701a07d7b7969bbf4b3fd918d4b78ad8488dd643cfed1c76fb3df7cdd60159abf93bbe51353a2005df8e8bcc80bf12b9c6dd2bd4e002bf7b020000",
    ],
    [
      "ETag",
      "2iA9cCqUttKJL7zmsRbi1Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:57 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `stamp` < ? LIMIT 1",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-122-1640212585510",
    },
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
      "0002ff85535b6f9b3014fe2bc87bd9a4263104c8458abaa8651b52423a425aaddb941863a85b82a96d327555fefb0ed0f4a26aed13c8e77c9773bb4737bc48d018c53cbbad98bcfb702d627484982619bc16950a77e717aecd6fa2e925cb827c9efecd2613c8e0354a916d99b38e1295a44c8d57cb6e26455512294407883aa665754cd7c696693943c731310015cbd3192f6e007ea575a9c6bdde41bc9b0991e58c945c75a9d83ebef77656af94e29a51ad7a2f357b20a37aefa81ee78212cd4531592dc141a5985cb32de13978788226f1e797dc5d4eb6dd0c92779c3242a9a80a5dfb020a2a8a9467956c58d1f81e353e9ffda0a537f34e22e364b10aa28f1bb2adc19b4f0651c67a2d99aa726d7c091773635382d615514c6d8c8b6f5ee819c646322a64b2e6c9c69818c7c634388547a5c1dcc6f85561dca7f03af3e77e64986026614af3a2b112913867b58d8776f9afa754038806c136b81e609798433c8ad37840d361df8953cce278180f1cd28f311dd9cc4e624600a76bf606450a518cd291e526c4c4a639a4a68d09c18ee558c4762c175a6f13ec8ef0b0efa2fd11fa23b966a75c9542f1b665e822f4236f1d85abe0641a794d192981b69cb6e6ea229efbd450e41ae3bade376adbd7512e40ad9e811f445e383d89fc73af1dfb8c6584de2d6f61f029c915836c22c9966926e72281c6a1b3c5d28ffc45309d01a299e5d92143a1f1cffb27407457369dd6cdb7d672ed46ff90704ef2aac9d8b53fc844fbfdd1ff19227fee2da3e9fcec6d160b5bb88361c39dc8b4c6667f6cda5d8cf12590ff06201c40cb8bbeafbcf0076a9f429632c90afafe6e40721378ff900f4705c97056a0031baa39ac2255b50a95ac5d49be6d8a6fd1ee60d0376dd4244bfd2a665b8343df6b8e9a916d59a11f4a6a8faa6e6313aad46312046193023ff80ad17fa7d6e1a3d6040000",
    ],
    [
      "ETag",
      "nusRvVW64ikTAZegNlMfzg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:57 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-122-1640212585510"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff2d90414f83401085ffcb788514a81843d28398a6d69046d1f6a0699a2d4c910a0cee0e3684f0df9da55e7666df7e3bef6506f82e9b1c223896c54f87babf29905f6d93a2e92a36525a6a0c8203c8aa107216eeb6bccbbd9c3ee2e47955adea7836bf2c164298ec0b6b05d100a712abdc40f43940a36a946f87839e260ac67d6b95f5e67db95aa622d4945b61b34d92873859c2b81f1d38d331c5136a6c32b4235b4d67cc786dd31a55b715ba863a9da181099e1e0a4d5dab34912b8aeb0781ebdfdd7a811f84f761e87b425694292ea91178fb06e2c3c4aa4ae92269c117404fad043f4de7afc8739b68ff8fc63da379d124c606ada777f57f249b89252beb0e1dc8946ce3a9e4eb7dfc03cbfd27406a010000",
    ],
    [
      "ETag",
      "/5VUtVd0doZBLJGlGmB/3w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:57 GMT",
      "Server",
      "ESF",
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
      "000002ff1dd0db6e82300000d07fe9b333a860e8de5a719a40b96805e60ba9a528145604aaa2d9bfcfec13ce7901c6b9e8fb6c5052fc804f30b2399cf2e9c940e9cd7852420f4885982de342f3caa2ce602faa040634fa18ac8cd95515a4c43ba59c20e2fb057692ce3dec70b4ced5e86e7444fde27e561be4d4b7123547eddddafdfd1e98f3bedf316999e3375d8dd1aed367ffba74ada365378d3e86b5b864386575136ed06aabd0ac7d9625dc3b332ca032d632957582c319cee59e18732f378b874748f815c469bc8d17e76591c76afd58b9d2d490ebe49273d3a363494e92d822be46369800f168cb4ef459f9762f2c0827e03f211bc656bc27b0609de8c0ef1f0168d55e23010000",
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
      "Wed, 22 Dec 2021 22:37:57 GMT",
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
      jobId: "grouparoo-job-123-1640212585510",
    },
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
      "ff85536b4fa34014fd2b64f6ab6da1a52d6dd2acb5e2daa45005aafbc8860cd30b8e52069941634cffbb97c1baba9bac9f98997bce3de73e782677bcd892294978765f43f5f4e55624e48880a219be5efc94f9f7fb30e2cec9f5e8726e3b172799f7389b2182372c4977650e1d29ea8a819c6ec26e5689baa495101d4cd4b1fa838e35b2cdbed51f3ac3a1652251429eae787187f41ba54a39edf50ee2dd4c882c075a72d96562f7f6de7be8f7ca4adc0253b2f751b38732b2f789ead75c30aab828669b101dd412aa187694e7e8e10f759b1c7fccdde574d7cd10fcc01950c6445da8c617a660a2487956573a2b993e13edf3dd8184eeca5d44061379bd2be282eee0c8d8524563f554827116ac3d63e99fad036f1e2dd77e1c2ece5d6fde5dac571bcf0f8deb7337700d45931c34d79819c7fae6e305f5b720152fb47ad43c37caaf1d5afe3b988680d212da603c3647d472cc49922663963a8361929a90244e321ed24162b2890df636018a3c2daa59b410054bccf178429dd81ed8fdd8ee6f27311d3a663ca0cec8b400c94e42f647e4b1e20a4eb92c85e46d87c875b08cdc380a36fe621eb9ba8494d6b93a6d8d3505bcf7a8b0c0d8342d04fea7ae7d13e502d59a962ffdc80de68b6879e5b6535e4146d953788f734e692e01d1b4c2062aa83cb1c5a6117feeb9a708d653bb38042599fe7a264ddf1b27efdafe468f70888d65a5bf248c82a5ff4ddb3920ae685e6bc8437b20255abec1fad0f5fe37227153db2ce472e3063f48fb14400a1514ecf3892258073effe30edb8f60dc7fd4910aefb8404c362aac827691b8aef7953d1a8f9d894334b8527fc71cd31c1ddad6e46832c20e0af55a52bbfd58692b56cb37100671077cddaefd0b75709f277f040000",
    ],
    [
      "ETag",
      "PZslXqSTi8BW6QA48PBgMw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:58 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-123-1640212585510"
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
      "40",
      "0c",
      "c6",
      "bf",
      "4b7d3b12060cc8125e808292f04f1889c610726c650cb775dedd2440f8eef626a251137d736bbb5fbb3ecfee08cf511a800bab287cc951eeaf42d4f72698a2ca63adf89151aa102c402d42261bd55ec5d93d3ec4fbed58362279380821c3568b09e56f3011e01e611d611c28709f8e908a04b9cda7384fd2659159a0f79929cebc697f74cb794281c947f3c1a0dd1974e1645d1a03a1c5b2e0ffd1b63859b0a5d514d72831f5d1ec9249daa2affb46a61249166349512e7d5450c0c58b50529e094954e24ac9ae544b76bd56aed815a7e9387699c9987ca1234a199ecf7841d0a4453ca51dcb843a03b20859f1ba385fb91c05851213f6475ebd562cf81590e8930c967f7219efbb11fc1b3eb0b305df3991509eea0bd51b8cdbbf8d634f3f47ddb4bdee0f426976ea8278fd6177e6b58713c32dced23b7b8d6a22898d54683cb4cbb5a6d3a897df6dbd2663357fc7d532470b7cc1b7e32ed2e0ae45acf0f406f0e0ec867b020000",
    ],
    [
      "ETag",
      "73F25wYXlyjOr7irzzaarg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:58 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `amount` < ? LIMIT 1",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-124-1640212585510",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85536d6f9b3010fe2bc8fbb2694d8004421229eaa2846e68796913d26edaa6c49883ba054cb1e95455f9ef3ba0e98ba62d1fa298bbe7e5ee7c7e24b73c0bc990043cbe2ba17878772302724240d118a3baf50d3e3acc59e6f3e9c01a2ccbd8bdfc7a311a2182572c49d33c81961465c1400e37eb765c8832a785102d146a991dab65f62ca36376ecbe6d9b06122524d18c67b748bf562a97435d3f98b76321e20468ce659b89f439aedf77f4bc1037c094d4df7aea6823f523aea789605471918d366baca094506c21a53cc11a5ea861f0e9ad769bd3b41d23f89e33a08c893253555d28c14416f1b82c6a55327c24759daf0e64edcedc89af4d969b85ff7e47d38abcfba051a96db705c83251dad96a39d776397a5d530972a75d7d7157aea6ed0a60a208b73cdc6923ed541b2fa6187c92d07e9686d165189e7973cfd74cac2604a97856d7e2d32081aa8ea779797f5f5345a00a1d9be4d6317ad4ec1b83200a1c16f5bb7610191004fdc0b1693730d8c0022b0c80224f55ea358b66220bac81dd0f1884263064063d137fd0b18c7030b09c5ec458c764fdd021fb13f2bbe00aa65ce642f26666e46ae5f9eed65f6d1693b1efd66d4414e7326d8aab9a785da7c226b78651f5fb9fdef655960b74ab2ec15bf8ee6a3cf1bd4bb7b9f719c4943daceff0e6239a4840342d680a0a8ab9087170e47cb9f67c6fb918cf90515fe6f90121c9f0c7e30bc17fc8eb49abfabff2ea59b5ff01704993b246dc37076292fdfee4df0a67b3e5f8b846db46c4fe178270d71b0572b17157df49135a41040564ecf81620b84e1c7fb387f783607c41e823157ee3d23159b9b0029ae5e3695d62c3ee397d3c901a5ca8bf728edd3d4cb8d2a81421854c3db5d4bc9f6a6075aa94cf204ce2ce2cbcc567ccfe0170af0f68c1040000",
    ],
    [
      "ETag",
      "/4Xe+7c7OpMD949OugEVKQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:58 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-124-1640212585510"
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
      "d1",
      "6a",
      "c2",
      "401045ff65fa9a8049d516c1076dad1582ada942a1886c36933436c9a4bb134b10ffddd9d8979dd9bb67e75ee60c3f459dc2049222ff6dd1747739f2c63531dab6642ba5a1da227880ac72213f77e176fc166d96596c5fe659953c9f1ecc6c3a15c2ea6fac144cce901558a616265f67a85585f2ed7030fd44c1b86b9cb25a6f17cb452c4245a913d6bb289acda3055cf6170f8e94c498a1c15aa31bd9183aa2e6954b6b55d594e85b6a8d460b3ddc3fe486da4619225f143f08877e301e0ec2201c3d8e46c140c892b4e2826a81771f203e4cacca98fe242d040298be95e0597f9e44be7789f6ffe8bc63b4ef86c4d8a2f31cdcfc9fc86562c9caa6450fb4926dbc167cbb5faefdd1af936a010000",
    ],
    [
      "ETag",
      "XU2T6OLQGfRsFBfmbDv7rA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:59 GMT",
      "Server",
      "ESF",
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
