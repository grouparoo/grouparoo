const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1620860323827";

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
      "d0",
      "c9",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "7f",
      "c9",
      "d9716451a0475284100405c5944b86252cb2c8d6b238fdf73afd84f75e208c63360c747c96ac011f600979651b6f712bab344bdc9b68d06209d1548963a82529377a18fbbce026dc2284e67e3dc6daf8ed12de0a3ae4422409e2eee8ccba737ed0484fb3a9cf77fc6c5f3536a898235dc5dbac849f04617fcadb951835164a266975a95bea749ba4aad596baf127b9385415ce50b190bb8f6c584bf462dd310ce02346f2608ffa70ad84c836b2f474ca09749849fc153697de8c56e5603541e7995f3ffa9942ab2d3de7f12c624beec006b0b92d7a36d0e2cd15f68ab201ff763a2e2d7b07a82cec590f7eff009ac787e41a010000",
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
      "Wed, 12 May 2021 22:58:45 GMT",
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
        query: "SELECT id FROM profiles ORDER BY id ASC LIMIT 1000 OFFSET 0",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-1-1620860323827",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85525b4fa34014fe2b64f6716d81420b6d6276bb2d1a36b5ae94eeae4f666638e054ca2033688cf1bfef19d0aec644df60ce773b97477223aa8ccc0813c56d0bcdc3979d64e48880a605bede79bbd5eeba56a7eaeff2d7fce7a51dc55feb8be3634408c352745f973050b26d38a8d976332c1ad9d6b4917280420377e04e464e3871bc91178e02a42928f395a86e907cad75ad66b6fd623d2ca42c4aa0b550432ef78777fb6e64d78ddc01d7ca7eeb68a389b23ff4fc564a4eb590d5f17683fead82e60af6549498e03f3163dfdf2a0f05dd0f0b04df090e9473d956daa442092eab5c146dd3a992d923e952befa209b68152d524b64d649727e6661f85c94a0acf3641925d68f4b53996f16d62a3e8b53cb751cc73a3f39d944a9e5a07e064a8baa534f292bc1283ff71fbf1fba21504d15f4c5abc099503774a62c6701cf436fcc7207180b5930a61e73f8d4073f634091a78d7ac7a295acc09f069e1378f9884eb3cc73439779d4053f308a53361de5beebf8e3903c1d91fb4668580a554b25fa29903f499c465769b25d2fe669d4b591d3b6d4cb3e9c69e2754e8d4d22e883be9e4c55487432238dd76994cc1769fc3beab7b88282f287cd2dee31a7a50284e3f6d3871ae7452eb6517249faa7047268a0e29fcf11c15de1b31b7eb92884e24da18bd2f88f4be3ca78f006fae589bdc972604fdcb1473a70a3dfd57ccfacfe70494611f650e9e786fa8b224fcf66ad3a80b088335fc7eb53acfe038ff995a2cf030000",
    ],
    [
      "ETag",
      "v3jLjhpsGsXDPAJY/EI+pQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 12 May 2021 22:58:46 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1620860323827"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff6591514fc2301485ffcbf5952563c0984b7810439440880c3046c343d9eec670db9d6da79964ffdddbe983495fda93afa7ede9e915def32a81104e79f6d1a06c6f32d45b2322544da1154f35550a6100a845c6ceedebf764755eedfdf1f3449ff35ddabeec65369bb143c5672c05845748732c1205e1db152a51226fcb1336e8b6367ab9d92f1e1611839212033687f5fa6ebe5e4077ec0670a15384294aac623487d5922e18eba5c9a9445917e8286a648c0a7a73bf90496a6a21891c26ced019fa9e1bf8eec81b05de947d05c542e754b1f5b003be45931645445f9c12862e3b64af3971da8f9f86f781fe13cf22238b8c2d32b1886f91a945028bdc5a8493333afe3d67de6a544f92b81a85a695c0fdade89e4c6d9aebd4b2c101c482bfea31d710a6a250d8fd00480c39ac08020000",
    ],
    [
      "ETag",
      "QZz5KhKT64V5thiSfyXTrg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 12 May 2021 22:58:46 GMT",
      "Server",
      "ESF",
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
      "1d",
      "d0",
      "db",
      "6e",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "7f",
      "e9",
      "b3189914706f05c60051870161bc344d298594dbb80868f6ef33fb84739e8050ca86018fad600d78072b793b6ce9f6d8e906e679a5653367fc3bc3a8be86923c2d8a0f55369a42f654c2f60357e326dae7e6e038e7e4827d3fb205b4214c47ff4828e2280caf3b3c18e8ecabb70f2bebba389b1a2c022d1245ad2669bd08bcbbcc59fe5061af8f52dbb4329cbce2d6c6e5d79c8cd4b032c1a891a3d96412ee4977e7d2492f891b5dee533137e8f35c378a272bedfca33b7242d313592c5788d5ab906d7a6e80bcb6c70f29d02a9f830d604b57f66cc0e58bbb8787c306fcdbf1b876ec156030d2b31efcfe014a19bffe1a010000",
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
      "Wed, 12 May 2021 22:58:46 GMT",
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
      jobId: "grouparoo-job-2-1620860323827",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85525b6f9b3014fe2bc87b5c13c0b99148d5962564624a530d48a73e45b63930a704536c9a5655fffb0ed066ad2ab57922fe6ee7f6486e64919019e132bbada17af8b2579c9c11302cc3d7f85e1e47abfdd78af2c8b93dfef2d5d5f0fa787e8e0cd9a8343b9439f4b4aa2b017ab68dfa59a5ea92554af5d0a8477bee983aded819d081472728d390a76b59dca0f8af31a59ed9f64b743f532acb819552f7853a9cdeed3b6a9795da8330da7e9b686388b63fccfc962bc18c54c5f936c2fc5a43b58303933956f05f98f0ef6f9dfb921dfa1992efa4002684aa0bd35485164215a9cceaaa7525b347d256f9ea8344feda5fc4964cac5578796161f1a9cc415b97e1d20fad1fd70d328f16d63ab80862cb751ceb72b58afcd89ae20f1312d04616ad7fcc780e8df7f30482f7636f04cc300d1db89b3863e67ace94a77c22526f30e2a9039c7b7c326203ee88e910860907863ad3b8b72a56a862984e9d948f844387032f15e04e5d3a6663e1b943ea25d3010598246336224f67e45849034ba94ba5653707f2270c627f1787dbcd621efb6d1b29ab73b3ec8a6b9a785da7c12691f4415f4f0d2a152635430d36b11fce177170e5777b5c43c6c443748b9b4c59ae01e9b8fff8a1c47991df5b3fbc26dd530829545088cfe788e416f8ec8a5f6e0aa9785598a20dfec7a509dd64880abae5c94353cb493d714694b4e4cabcc32875113bdd52e3080728cc7343dd4d91a7e7b05a9f4808e2cc37c1e627a2ff0096e8cfcfd1030000",
    ],
    [
      "ETag",
      "Txiw5Fj+r2bS0qwJEoV4Yw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 12 May 2021 22:58:47 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1620860323827"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff2d8f416b83401085ffcbf45805ab9086400e499134454c6a1b48293daceb68d7ae8ed95d2922fef78e694e3bf3e6db376f46f8516d012bc85575e9d10c7715bad7b9c8d0f6da597e3a6a2d8207e844c5a4cefb4318941f179d1ee5ee109debeae57eb35e3361e53736025623940a756161f539422b1ae46faa60c00ddd5cefd3f77817672c3454cc427a4a92cd368961fa9a3ca829cfb04483adc4d9ac3354a374fb39a7154da7d1b7d41b8916aef0755019ea3b61887c56fcd07f5884c172114461b40c1f99d3248553d4327a7a03dee2c8099dd12fa784006efd7670688f86d8db62719bb0e113cd6b1dc771a6470fa4e0539f95fbefa73febd82a8d47010000",
    ],
    [
      "ETag",
      "lbuO20fYqlNPcGO3XjgJ+A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 12 May 2021 22:58:47 GMT",
      "Server",
      "ESF",
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
      "000000000002ff1dd0c97282300000d07fc9d938118481de4070031744d64b0631201535242c864effbd4e3fe1bd1f90e539e11cb7af3b79822f2032499fe653876a262e8b4a241be26e3c910c7407f5f7924ba5d23772e078aa6e6af0512af1e90e07031f5784b9d94949a480b673246fd502b9d08bad3e3df678a8c7e6865eb115253c0dce5bf4f267594743088bfc6cf936dfef6ad7ee32d67111356e93da79af89100fe1c26086eddea23542c62330190e17eb34567ce1e9e8702851c0774e79ec6634de3fc74a5dd597c0be526bfead0d6353a4cfe112c5245feec7ab5dc0a2011340deb46284e3eac395155d9f807f3b6e05259f0093648c30f0fb07abb2620e1a010000",
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
      "Wed, 12 May 2021 22:58:47 GMT",
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
      jobId: "grouparoo-job-3-1620860323827",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85525b4fa34014fe2b64f6d5965b0ba589d9ad956e88b56629d5f5c9cc0c67d851ca2033b831c6ffbe07d0aec644df60bedbb93d913b59e5644e982cee5b681ebfdd2a468e08185ae0abd84daf6bf1fbcaf6c393b3e52a3a0b2fd364717c8c0cd9a934ddd7258cb46a1b0e7abedb8e8b46b5356d941aa1d1c81fb981e7cc02c7f7fc9917a24c4329d6b2ba43f11f636a3db7edd7e871a1545102ada51e73b53fbcdb0f9e5d37ea16b8d1f6fb441b43b4fd69e6f752716aa4aa8e775bcc6f353437b0a7b2c40afe0b73f6e3bdf358d2fdb840f283e44039576d65baaad082ab4ac8a26d7a57327f227d956f3ec8365ec7cbcc92b9b54a2fce2d2c5ec812b475919ec6a97572dd218bedd25a27e749664dac8bd56a1b679683e6396823abde3aa3ac84cef6a5f9e4e3c43b013554c300de844e40dd991331c1422e66fe940907189bb1704a7de6f06802939c01459de9dc7b15ad54e5055e001140eee6ae9343e0fa4110faee54e4228fa89838912f262e8bc8f311f9db4803a752d74acb6104e42a4db2f8264b779be5228bfb36046d4b733a14d735f1b64e834d22e993be9e3b542a4ceae6996cb2385d2cb3e4321e56b88682f2c7ed3d2e51d05203d271f5d9638df322bf76717a4d86a714043450f1afe788e41ef8ea805fcf09a9785098a20dfee3d2b8ee327803c3f2e4beabe5a00ec389477a72633e60b3c847ec70469d23eca1322f0d0de7449e5fc25a7d20218833df249b9f88fe03b0ead70bcc030000",
    ],
    [
      "ETag",
      "fU5YpfXW/37BKCF9K7VRIA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 12 May 2021 22:58:47 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1620860323827"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff65904d6fc2300c86ff8b77a552691163481cc687000921e8c669e2105ab70b6beb2e71a93ac47f9f537698c425719e3c89dfe40a5fba4c600c279d7dd768daa70c79ef8a086d9db395a9a2d222f40059656236e45fe67bfcd1cbddeca5e165b66a937933998861e34f2c148caf906acc130be38f2b94aa4039a61311b8ad5cbddebe2f968b4840418903dbc366f33add2ce076bcf5e04ca708533458c6e82eab0c9d31e6b5cb695551e5e859aa4d8c163ab9dbc80cd59532449e102ff4fac3c01f0dfd300847c1b37839c58a3595a21ede40ba30b1ca236a24250c44305d2981d36ebc08ee7779fe93e081840f64e0c8f1afc1b465b43b4312d6a2cbe9df33cfc8bd83e57d6c6aec41ace4ef569aefebdb2f4a63377b98010000",
    ],
    [
      "ETag",
      "wo0vDQeziGPC9wtGgHydDw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 12 May 2021 22:58:48 GMT",
      "Server",
      "ESF",
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
      "0000000002ff1dd04b7282300000d0bb64ad8e0af2e98e5894000a520bc826134344c04280a880d3bbd7e911de7b014229eb3a2cea9255e0030c64a9cfe8cce11ac4193d28b54188a5579fc97d71a845d419e334e5d3271aeff7c60e0cb51619e4325a87412aa19d9d24d793fc08b59d3f5663d8f8d1910ca75d1b0badc883bd6a37fd58672b3a4891a4734d82e7dc348ac8fdbe785dc2ddccb717a8776f4586bdabb585beec50c5884bf1635e0257854724ac72d8b61bea6776bb217325b0946517d19b7642cff53c455f785f98aa42712370e1f3867bdae6ec8d10474efc684c034c00eb79deb20ee76faeb4d2f509f8b7633170f60e808cb4ac05bf7fb1326bdc1a010000",
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
      "Wed, 12 May 2021 22:58:48 GMT",
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
      jobId: "grouparoo-job-4-1620860323827",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "a2",
      "40",
      "14",
      "fe2b64f6b50a2a0a9a985d577143e2a58bb89b3e9999e1404791a1cc60631afffb1ec0ba6d9ab46f30dfeddc5ec841641119112692a7128af3b7bd64e48e80a609be0eb73cd236bf3fecf74b717f7a946694f893f11819a252297acc53682959161cd468bb6927852c735a48d942a396ddea0cba963bb07add9edb7550a6208d17223ba0f851eb5c8d4cf335ba9d4899a44073a1da5c1e6fefe6a96be685dc03d7ca7c9f686288323fcdfc9e4a4eb590d978bbc1fc5241b18323152956f05f18b11fef9ddb821edb09924f8203e55c9699aeaa420b2eb358246551bb92d10ba9ab7cf34136dec29b8686888c79b05e1a587c2c5250c63a987981f1f3a142269ba9b1f0977e68d8c67a3edf78f881e611282db2da3aa42c85caf6dabcff71e295806aaaa001778e35a01dd71ab298393c767b7d165bc098cb9c3eed318b0f6db023061475ba72af553493d9c075bb2ce6ccb607cc42567fe8f4ddbe6381cbc1a19d01e70c8ddd0eb9dc91e742689809954b259a1190bf811f7abb30d8aea693d0abdb886999ea59535cd5c4db3a353689a44ffaba54a8909854cdd35f855e309986fe1faf59e10212cacf9b275c624c530548c7d587e71ce7457e6fbde081344f01c45040c6bf9e23926be0ab037e3d27a4e241618ad2f88f4be3aacae00534cb13c7aa969bdab5dd1ea9c985fe80397617b1db19558e70844c5f1b6ace895cae61a5ba9110c499affcd52f44ff016e19b613cc030000",
    ],
    [
      "ETag",
      "9Ucdt4cPkjjMiPvho/dgIA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 12 May 2021 22:58:48 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1620860323827"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "905d4fc2301486ffcbf152964cc0b12ce102cc829885e814e347b8e8bab331dc7666db89b8f0df3d1d5e9870d39e3e7ddaf3b61d7c14750a012445fed9a23a5ce4681e6c11a36e4ba3796aa8d60803402372362fefc2f2a78e5f64f4fa3d7b4eb76fb1bb48f6d3291b5a6eb1121074901558a61a82f70e6a51211f2b5216cca1b1f572f5142ec2984145a905ab7514cde65108c7cd71003b4a62cc50612dd15ed628daa1344b9b538baa29d1d1d42a891a7ab9dfc815b58d50440e1367ec5c7943d7f7dcd170e40f27ec95248529a86675fd08dcc59011654c7b4e096316545f72e0ac1fbf185ff779fe13ef8c4cce886fc9e6afc1fc6050df2be2b01a6d4ef794f986ec3b0cbfcfa816072005ffdd6d614eebe32f0d53740e98010000",
    ],
    [
      "ETag",
      "+JElznRXcLYxAVdhZR0Gbw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 12 May 2021 22:58:49 GMT",
      "Server",
      "ESF",
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
      "1d",
      "d04b7282300000d0bb646d1d06044c770410a1223012053619841029d16af8d4d0e9ddebf408effd80b2aa68df93e1aba337f00e64a9c265b5fcb8af1161d4b10a9e21d6a93cd1a6c6f23bef10afdd197b46bcb3f3e13aa8112227fb0de9013bd81af365c2561c0582eb9a2a7756505bdc09bd2d8646691de207fa1c661e46248ab3c1fce67c52b03ec28b0e5993ef75b22d3253d2b4af84a9cd711c8a717e88c9b8d41be8f66a8ac6fd3151997772795fd074d5664a952a89d59e3d6d83ed5b0d2374767c343982cfb9c4d22dc7fad804787a84d5d52778b7070b409ff756d09eb42faea643b800ff7632c83b7d05205a0a2ac0ef1ff8ccc13f1a010000",
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
      "Wed, 12 May 2021 22:58:49 GMT",
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
      jobId: "grouparoo-job-5-1620860323827",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "f7",
      "4a9b5bdba495d056da74cb28454bd3219e90ed9c6486340eb1c35450fffb8e1be84048f096f8bb9ddb13b9135546268489e2be8566f7e55632724240d3025fefd5f0c763f8589c073b9d166dbbbcf27f9e4d4f4f91218c4ad16d5d424fc9b6e1a0269b75bf68645bd346ca1e1af5863d77e439e1c8f13d3ff402942928f3a5a8ee50fc47eb5a4d6cfb25ba5f485994406ba1fa5c6e8feff68367d78dbc05ae95fd36d1c610657f98f9b5949c6a21abd3cd1af35b05cd0d6ca928b182ffc28c7d7bebdc1774db2f90fc203850ce655b6953155a7059e5a2689b832b993c914395af3ec83a5a46b3d41299b5482e2f2c2c3e172528eb3299478975766d90e97a662de38b38b506d6e562b18e522b44f30c9416d5c13aa5ac0463fbdc7cfc7ee246403555d081378133a26ee88c59ce029e87fe90e50e3016b260487de6f0f1000619038a3a6ddc0f2a5ac96ae8bad41950ee711ef081eb7360197899e7652370836ce80d7c8fba3923fb13f2b7111ae642d552896e04e42a89d3e8264d36abd9348d0e6de4b42df5bc2bce34f1ba4e8d4d22e983bef606151293cc3ce3551a25d3591aff8eba152ea1a07cb7bec725e6b45480745c7dbaab715ee4d7264aae49f794400e0d54fcf33922f9007c76c02fe784543c284c511aff71695c990cde40b73cb135b51cd563df31eb4572a3df6123cf43ec7846c611b650e9e786ba7322fbe7b0561d4908e2cc57f1ea3ba2ff00764938ebcc030000",
    ],
    [
      "ETag",
      "qs5Hz8zgK7ytTguuLW3JBA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 12 May 2021 22:58:49 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1620860323827"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff4d90514f833010c7bfcbf90a09638ab8640f6e4144c9547489c6eca1830399c0b1b66890f0ddbd321f7c69affffeeefa4b07f82c9b0c16b02f8b6387b23f2b503f992241d5555af1d652a3102c402d0a26bd07df7b3bef8eebf0aee87fc2e8e69e92d762b96442a51f580b580c909758650a16ef0334a2466e2b330674df9a3adabc0461907050536682cd368eaf577100e36eb4e040fb047394d8a46886b5920e98eac8782a51b715da8a3a99a282099e2e0a495d2b2491cd897d61cf3cd7f13d67eece7df792b98a52a14b6a18dd3e03bfa2498b2aa16fb604970139952c9c4feb17c75793cfff64e69868f7d7bdea35aa47496ca2d0483827a1351949cdf25a7668412af8636e4b7d3a8fbfd2c51baa75010000",
    ],
    [
      "ETag",
      "6O86Y4uqCGJgyzGIFKoRXg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 12 May 2021 22:58:49 GMT",
      "Server",
      "ESF",
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
