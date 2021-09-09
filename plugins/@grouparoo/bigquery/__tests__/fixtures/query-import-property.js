const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1601915350219";

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
      "000002ff1dcf4b7282300000d0bb642d8e0858e8ae24400045a528c22603318d198a38e16fa777afd37783f7030a4a59db92aea9d81dbc83b9585b4bba0c1bd3d6c6eb58f61fdf119a5418e5bc477a066bddbac5fb535687e8cc9b68bd472b41e09a58d3108ceea575788fcb8d904db58252aaca910ac612e66e33e5aa780176aba4b54be9d7497ce1b1efd0996fe8e0d96aa81afa17f6a582b966f639d3b959fa4fac7be7a357eda62283c2a141f04ced0341c6a1b9a7334fd33aaf3fe35b56a1370def3acce6c481106d07c33d810560d34348d612f19a6986652dc07f9374f383bdae362b2493e0f70f955414a605010000",
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
      "Mon, 05 Oct 2020 16:29:12 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-1-1601915350219",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85525b6f9b3014fe2bc87b6c136e818448d156a56c8dd4662b21ebf6141973a04e01536c1a4555fefb8e21cd5a556adfc0dfeddc9ec903af52322509cf1f5b68f65fb62221e70414cdf1755eadff9c45e16a7775b6756fc35ff27ec947bbd90c195cab242deb020652b40d03395daf867923da9a36420cd068600f6cdfb203db733dcbb103944928b26b5e3da0f85ea95a4e4df3257a980b9117406b2e874c94a777f3c931eb466c812969be4d3431449a1f667e2d04a38a8b6ab65e617e2ba1d94049798115fc17a6c9b7b7ce434ecb618ee427ce803226da4ae9aad082892ae379db74ae64fa4cba2a5f7d9055781dce6323e38d549b8a96607c8f7ede180aa41a6227192f401a775761141a3c3566868dae2982bcea3c639a14a0fd8e5d2fde8f5a0ba8a2127a7033b67c6a4fac20c99231cb26ae97641624c924197bd44d2c168c6094264051a7b47ba7a295a83c145146bdc0f15dc7c63fc7f2d30904a96f4116d0804d469933b252723827bb862bb8e4b21692f7bd93bb6811879b385a2fe71771d8b591d1b650977d71ba89d775ea0920e983be0e1ae50293f42017cb388c2ee6f1e277d8efee1a72caf6ab47dc5e460b0948c79dc7fb1ae7456ed761f497f44f1164d040c53e9f23923be0b3cb7db923a4e225618a54f88f4b635267b006fae5f152d77252bb8ee7928edca87798ef6be7d3fd684728a152c786fa3b228763582b4f240471e6cbc5f207a2ff00eb5ffecbc5030000",
    ],
    [
      "ETag",
      "CnUX+RESwH+j3QEPshNi4w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:29:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1601915350219"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff2d90514fc23010c7bfcbf9ba2514c484253c082142325107f8628829e3368bdd6eb437cc42f8ee5ea72fedddf5d7fe7fe915be4d7d84040ea63cb7e8babb12f92d1419fad6b297ada1da234480ac4b2147e7cd64f9de0dd3743b2bedfab97b595ce6e5742a84cfbfb0d2905ca130688f1e928f2bd4ba42b95618e7f9b36f22e0ae09b3cd365bad9fa4afe818faf52e4d1f67e9026efb5b04273a6458a0c33ac7f066e3e88439af82aed7556331f6d4ba1c3df4707f503a6a1bed886299c42a560f033551e3d178305413e12ce59a0dd582ee3620294cac6d463f220b4a00d797e25df4eb45c60b673028edffe959c7e85f1d49b2c710aac6f77f0a730a5a2cbaec5a8c20d7f2234bc39014da7abcfd02adb227e96f010000",
    ],
    [
      "ETag",
      "3qS9HVy2LLTBglNMyOEvCg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:29:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "72",
      "43",
      "400000d07fd9e724336bddb66fa88c8ddb60d4e88b1196084a7617d14effbd999e3f383fa0ac2aca7921a69e7e8137b097123e552777d24db4d5e172cbab08cd8151784698ee7ea4c38a25f8663a919a798dd2f4e2fa71f62d69c183bd8ce9ba3888e5c873713210cd7cf8a3d5e5c13640b19530cb126fb10d7e49097b9fbf4d97ab49fb1071c99f15a98f76208933a441a4ae7a13622ab748e339895719b58cb4fd674c475f4e211dac3b268abe67ae33ae6e3369f5fdd8aa57e8d89e65fb94e491a25e267000f439778cf2a27bcd9082f101fc370bb1cff4753569c92803bf7fe8fa3f3805010000",
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
      "Mon, 05 Oct 2020 16:29:14 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-2-1601915350219",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6f",
      "da",
      "40",
      "10",
      "fc",
      "2bd6f5b1c15f186c23a136228622112a8c499a277477acdd4b8ccff19d4969c47fef1a139a2852f266dfecccececee337910c5860c0813d9630dd5fecbbd64e48280a619becaf164f1ebabfd77797713fe99cfaec7ba0c268be1102b44c352745be6d051b2ae38a8c16a696695ac4b5a49d941a18edb71fab6133abd6ecf769d10690af274268a0724ffd6ba5403cb7ab1363329b31c682994c9e5f6fc6eed5cabace43d70adacb78e169a28eb43cf6fb9e4540b590c574bf4af15546bd852916307ff891bf6fdadb229e8d6ccb078273850ce655de8a62b94e0b2484556574755327826c72e5f7d9065348b468991eb9d318e7f5e1b1a943631422a7250c6ed8f288e0cb131868683721b044571144b28cba1113ac59dbe9f7143a09a2a68c1b56ff7a913d8214b99cfd3a0db63a90d8c05ccefd12eb379e881b7614091a71bf5238b16b2b07ba9cf1907e633d7e9071e4f3d4a3d9bb910d090b3aed30dddbe072e395c90a74a68b812aa944ab4a1c96d3c4da27512afe6a3cb243ac648699debabb6b926c4eb3e9b0960d107b90e0d2a243a35139cce9328be1c25d39ba85dda0c32caf7cb475c5b4a7305588ecb4ef625ce8b2c56517c47daa71852a8a0e09fcf118b8fc06727fb7240588a27842e4ae33f2e8dabc68357d02e4f6c9b5eceec9ed31ebca6957e87f97680d8f9701a45d842a14f81da0322879359adce4508e2cce7d3f904d17f1951cb50be030000",
    ],
    [
      "ETag",
      "oFGQX+0zSYV9xNLMFtp8GQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:29:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1601915350219"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff2d90dd4ec3300c46dfc5dcaea82d1ad04abbd8d02a40dd607f0809ed22ebdcd291d625713755d3de7d4ee126b19d937c4739c34f59ef21865d59fcb668ba9b0279e18a25da56b395ada1da220c005915423e26b344279faf73ff61fdb1c069b9d233731a8d84b0d937560ae233e425eabd85f8eb0cb5aa50ae693e0ac15de39a247d1bafa5ad68efdaf9264dc793740a97ed650007da2d3147837586eeadc6d001337e719a56558d46cf526b32b4d0c3fd4161a86d9421f264e2855e70ef075130bc1bfa611009a729535c522de8660592c2c44a2fe92492100860fa527cf37e3dca381c46b741e8a4b6fffca463b4ef8624dba28b95983f892772622cc26c5a1c40a6e42f9e4b863857dae2e50a66cf870569010000",
    ],
    [
      "ETag",
      "8FMFlFXJN07TVQeEiSlMrw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:29:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "72",
      "43",
      "40",
      "00",
      "00",
      "d0",
      "7fd9e7241377fa16e29ac81a94d48b41172b12ec5221d37f6fa6e70fce0b644581284dc7ee861ee0032c19abec8adda993556e2eb67b32a4c2b8c055d5bc4a97271c044fb5e493c9740edc5122a472ceb5cbf895271ac3211c8b12dbecc2e1af129acbc45371089cd53464cbd3ad88b94a81eb4ab651278c2e3ccb49133ba36d1c322679136fa9c2ad2dafc513849d19da93199d7179bc5f2369b65a5f5d1ed1656e70dfdc7df85d18e129fb74a89dc715644bfd06c39aedf38b60e73f752bce5ebc071b809e3d2688a6f83de30445d980ff663a2e3d7a5f55941144c0ef1f6592eb4205010000",
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
      "Mon, 05 Oct 2020 16:29:17 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-3-1601915350219",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5b4fa34014fe2b64f6d51606680b4d9a5da3e836d19a52bac6a766667a60472983cca0694cfffb9e01ed6a4cf40de6bb9ddb0b7990d5964c0997c5630bcdfec7bde2e484806105be26511b5ede89e5f5faf9f13a4ee1621166fe72364386b42acd76750903adda46809eae57c3a2516dcd1aa5066834080674ecd1988e8291e7d318651acafc4a560f28fe6b4cada7aefb163d2c942a4a60b5d443a176c777f7c977eb46dd8330dafd98e8628876bfccfc592ac18c54d56cbdc2fc5643b3811d932556f05fb8e5bf3e3a0f25db0d0b243f49014c08d556c65685164255b92cdaa67325d317d255f9ee83ac92abe42c73a4d21b56d7ce457a73ed18d066886de4b204eddcfe4ed2c4915b67e650b4dc2228abce3063bc046bf6daf2fcf39cad8019a6a10737136fcc68e4c53ce7139147c188e71e701ef1c98805dc137108e19603439db1ee9d8a55aaa2d48f621e47631f829c86db2808263ee594e694b1711882c7c3604403723821cf8d34702e75adb4ec1b27b7e93c4b3659ba5e9c9d6649d746cedad29cf7c5d926ded7692780a42ffa3a58542a4cb2539c2fb2243d3dcbe67f927e71575030b15f3de2ea72566a403a2e3cdbd7382fb25c27e91de99f52c8a1814a7c3f472477c07767fb764448c533c2146df01f9726b4cd100df4cb933b5bcb513df17dbb5e2437e61316d208b1e3f15847d841655e1bea8f881c5ec35a7d242188335fcc179788fe035ab179b8c2030000",
    ],
    [
      "ETag",
      "E8u4GYcQMUwqM9ReFN4T2Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:29:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1601915350219"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff2d90616bc2400c86ff4bf6d542ab7360c10fba09538a6e3a411832ce9ad6bab6b95d52458aff7db96e5feec27b4f92876be1bba88f10c3a1c87f1a74b7871ce5dd176be4a614d6cb52cd083d4031b9922e59e4f2b8da9cfaf3ddcbe243220e2ff3eb78ac04a727ac0cc42d6405964786f8b385da54a86d05f197b15629b9591f4c57ab6436596a50d1d107cb6d924ca6c90ceefb7b0fce745863860eeb14fd44ebe88ca9ccbd2c9bca961830352e45860eee1e72478d358e28d0241804d153188da2e16018f6a3917225a5460aaa15dd6e40b7088929d77455558814705da9d659775e3416d7a057daffd3d39b20bf39d2cd8c7ee928fc3378266f256aeb5b7a901afd8ed74220ce4cc978ff05846ad8966c010000",
    ],
    [
      "ETag",
      "rLJgt4OSh2IXDJTt1s0vIw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:29:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "cfdd7643300000e077c975f52054ed8e56bb31b6a16bb8c92127ba2065e27f67efbe9e7d6ff0fd808c102a04ee9b8adec1135832d5dc92add7ec6d38d1136c19b694bd91dcd62126ae721e5162f2eb3134424f1d23e7ec078b40df2abcf4936b24c552c73e8a6adf6d76d290afe87635ef5f71f8ca53b1b62c81efbcccd9bc5b8e21f17929b763f9511e2c359fbdd2160a0e91e3bd7ca6a85863224bacc3d545d32c31f5d6b8165c7f8ea197d987d129df2a46254b6ba1eda7ba3de07a6515f7a63e0a4e3c311239d065b001746e594705668f19d44d7303fe9bb85f5afab8da34eb68077eff00453441d405010000",
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
      "Mon, 05 Oct 2020 16:29:18 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-4-1601915350219",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85525d6f9b3014fd2bc87be84b1348f80a91a2b54ad916a9cb544256ed29b2cd35730b986093adaafadf7781346b55a97d039f73ee39f7e391dccb2a2373c264be6fa179f874a718392760688eaffbfd6cb2dda866934b2132337502ffe0dc2c16c8909d4ad3b22e60a455db70d0f3ed669c37aaad69a3d4080b8dbcd1247026d1c4777d673a8950a6a110d7b2ba47f16f636a3db7ed67eb71ae545e00ada51e73559edeedc3d4ae1b7507dc68fbb5a38d26da7ed7f373a1383552558bed06fd5b0dcd0e4a2a0b4cf05f98b18bd795c79296e31cc907c98172aedaca74a9b00457959079dbf455c9fc91f4295f7c904d7c1d2f534bc8469b5d454bb0be243fbe5b06b41963274216a0addb6f71125b7d146b619dc11d7a29a99d0bf8db27e9dcced02e4395ac7ab394b2023aa3e338566f77d009a8a11a0670173a019dcc9c8809167231737d261c606cc6429fbacce191075ec680a2ce74d57b15ad5405a18878e6449e1b84be3b7343ee791e0f22c18200a6ae103c0b189f7ae4e99cfc69a4812ba96ba5e53014729bacd2789726dbf5f2328dfb36046d0b733584eb9a7899b31b0d92dee9eba943a542a76ec2ab751a2797cb74f5331e967a0d39e50f9b3dae55d04203d2f118d2871ae7456eb671f28b0c4f090868a0e21fcf11c93df0d1493f1f1852f1c4d0451bfcc7a571dd79f00686e5c9b2cb7252cf3c3f243db9316fb02070103b1d5657114aa8ccb1a1e1c0c8d3d1acd527128238f3f56afd15d17f8b8cf6fade030000",
    ],
    [
      "ETag",
      "qq81USorSgiffdt2065v0Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:29:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1601915350219"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4fc23010c7bfcbf9ba250cc4a44b78700695641219f2400c3165dc4671dbcdf6a64ec277f73a7d69efaebff6ff4bcff06e9a03c4b037e54787b6bf2a9157bec8d075153bd95a6a1c4200c8ba14d22ed5cf5ca949313936db4592eaa7fbef7e359b09e1f223d61ae2331406ab8383f8f50c8dae51ae15c63a7e1b9a00b86ffd6cfd922d960fd2d774f0fd7293a6b7493a87cbee12c089f6191668b1c9d1bfd95a3a61ce0bafeb74dd56183aea6c8e0e067838282d75adb644a14cc2eb30ba19452a9a4ea6a371a484ab28d76ca81174b3064961625d65f425b21009608752bc8b61fd94f1dc1af44abb7f3ae919ddb3254976e843c74afd29dc91d762d165db6100b9961f79340c71a12b87975fcff70da06f010000",
    ],
    [
      "ETag",
      "rN9zE993f3hnYIBLaMFxyQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:29:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "bb642d8e2560a1bb2852412c257e026c184863f828e1aba19ddebd4edf0dde0f4829657d9f0ca26235780353aa9a733adf0963051fd43a1c97ecaae958b5149c849a4934e47f4a2af7b6c2d5215ae77032f1b12a4fe5764499d74ab2387706415f627b8762b74f8cc82639b3e2a02d1c1e56de86c195033987ef8fcd8168a677ce8c963b6e99be46e26c092851fd3d1c9a17d21c2f375c55591c5e359128f64df7f1e27ed975645a2e5a2cf8700a2ce4499aafddf64472ee8e4620c718d76bf6e18708cc00934dd1b13e299e33a89be60cfc3793616ad8f3ba6269c73af0fb07a74653b805010000",
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
      "Mon, 05 Oct 2020 16:29:19 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-5-1601915350219",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8552d16eda4010fc15ebfa9097806d0c1823a126254e834aa9624c689fd0ddb1760f8ccff19d6951c4bf77cf263451a4e4cdbe99d9d99ddd27b215f99a0c0913e96305e5e1d34632724940d3145fbf7c9bab29bf5ddf019de674fcb8fc29b60ff7a31132845129ba2b32682959951cd470316fa7a5ac0a5a4ad9c242ad5ecbed3b6ee0f6bc9ed371039429c892a9c8b728fead75a186b6fd6cdd4ea54c33a085506d2e77e7777bdfb18b526e806b65bf76b4d144d9ef7a7ece24a75ac87cb498a37fa5a05cc18e8a0c3bf82f5cb3abd795db82eeda2992f78203e55c56b9365d61092ef344a455595725c3275277f9e283ccc369388ead4cefaddbe8c7774b83d26d1c211119286b791746a155f7608dac0bd8a08914cab982bf750bc6e6027dd6a81279ed125396817138e530791bbe11504d1534e0ca77fad41d38014b98cf9381d76389038c0d98dfa31e7378d085ee9a01459d36d56b15cd65ce3d6f1df85ee0f6fd7e025edfe9ba7e2f1870a7cb128f75a81ff4075d04c9f192fc2985861ba10aa9449306594693385cc5d16236be8ec37a8c845699be699a3343bcecd34483a477e63a1a54487432d14e6671185d8fe3c943d86c730a29e587f923ee33a19902a4e315c48702f322f78b30fa459aa708122821e71fe788e41af8e8969f2f0ba9785be8a234fee3d2b8321ebc84667962677a39ab03bfe3919a5cea3758d071103b5f94a9083bc8f569a0e6b2c8f16456a9330941cc7c36997d45f41faf683b3dd7030000",
    ],
    [
      "ETag",
      "BKSsLcFdHeaLnaCqWXikVQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:29:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1601915350219"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff2d904d6f83300c86ff8b7785095a31a9483dd06ed33e58bb76ad76987a48a9617401b3c430a18aff3e87ed92f8759ec48f7281afb23e410cc7b2f86ed1f45705f2c6155bb4ad662b5b43b545f0005915422e4d976f303248bbf5fb72b5b9ed9e9e5f92f95c089b7d62a520be405ea23e59883f2e50ab0ae59ae64e08ee1b17eed375b29358d1c9c5d53e4d93457a07c361f0e04cc72de668b0ced0bdd5183a63c68f4ed3aaaad1e85b6a4d861646783c280cb58d3244be74fcc80f6f82701646d328988433e134658a4baa05ddbf814c6162a5b7f42392100a60c6527cf371eda43d8966d7e1c4491dfef945cf685f0dc96c8b6eec3488fe2496e4c45884d9b4e841a6e42f1e4a863857dae2f00be864c7c869010000",
    ],
    [
      "ETag",
      "CrvfQe5reoTOWCNQDvJKMA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:29:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "82300000d07fc9d93a65eb406f502c6a588a382c5e9814826c424c02013bfdf73a7d7ff07e002a0acc58cec70e0fe01dac4836b6c5168ebaa508dc381981fd209208aef7d3093574366dea44e66b2c95a4993e45a98acb00a1d1eafc5ca43a74a85195e937e1a669d56334a6ee5a09cfc4c3ea413f6cc5e4abb3fb9585fb0fdeb15b19d784b7923a55d38b7d95e0a58db03c648cc9a11bbcb9333d3887e05a277a9bd198ceaabb8b1a73b297ae46fbe3a4dd7dadc35e20653b6c2447c66e8f1ecde7de5584b6146003f0421a8a59de3c678a66181bf0dfccf94af0f36a61443105bf7f77d4c56a05010000",
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
      "Mon, 05 Oct 2020 16:29:20 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-6-1601915350219",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85525d4fdb4010fc2bd6f58187127f05e74b8a0a0aa68d9406e138a57d8af62e6bf782e333be332d42fcf7eed9818290e0cdbe9dd9999ddd077623cb2d9b302ef3db06ebfb4f3bc5d931430339bd663f2fd79fcb3a0a83e57501f1c545aabdfc6a3a2584b42c0dfbaac09e564d2d504fd62b37af555341ad548f1af506bd60e007e320ea477e188c89a6b1c816b2bc21f26f632a3df1bc276937572a2f102aa95da1f6cfefde5de855b5daa130da7bade89108397a4ff34ba10418a9cae97a45fa8dc67a837b900539f84fdcf2d3d79d5d097b3727f09d140842a8a634d615b510aacc64ded46d57367960adcb171f6c152fe259ea48a5375055ce4572f9dd31a88d4b6364b240ed5c7f8b93d8697d3853e7087724a4a4f64ff16f6bc34a1d91d69658b26c9552e0055a954316f3b70bb00430a0b12b6e86fe0082913fe6191f8a6cd48f78e623e7233e8ca0cf7d313ec1932d47209eb1dd5b1694aa043ff48722f0793f03ca713b1ef37ec00584905118510428faf434608fc7ec4f2d0d9e4b5d292dbb44d875324fe34d9aac97b3b3346ec7c8a029cc7967ce0ef1d2a78d8640efccf568ab5291928d77be4ce3e46c96ce7fc4dd46179883b85fddd24e332834129c2e21bdaf282f76b58e935fac7b4a30c31a4bf1718e046e0b1fddf3d3751194ee8b54b4a17f5a9ad05643d4d82d4feead9727f62008fc016bc1b579530ba3806acf57653be21e4b7318a8bb2ef678106bf433888a94f972befc4ad57f7d3f0d76db030000",
    ],
    [
      "ETag",
      "fXOU+nr521NWlaEFFTs/gQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:29:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1601915350219"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6b",
      "c2",
      "30",
      "1086ffcbedab6556a9d3821f74081b549d8ab03164c4f6daa5b6bd2c976e48f1bfefd2ed4b72bc79eeee211d5c7493410c675d7cb568af7705ba9d2ff6c86de5582e430d230c009d2a84bcbceed6e5fd820f7a372dd5389caed76f0fc57c2e04a79f582b883bc835561943fcde41a36a94364dfca18c11ca5d8d0f96db6db25a6c24a829f3c1e698248b65b282dbe9368092ce7bccd16293a29f682c9598ba672fcbaa3615064cad4d91a187fb87c2526b94250a24092641381986b3301a47c3513813aea254394d8da0c703c816474e557bfa11550805b07d29d6797f7e4bec6c8b5ee9f44f2faf0ef9c5926c66f44b47e3e84fe191bc96135ddf338054c97f3c690771ae2ac6db2fe49398df6d010000",
    ],
    [
      "ETag",
      "kXQMj/AsSiQ8ja318MMY7g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:29:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
