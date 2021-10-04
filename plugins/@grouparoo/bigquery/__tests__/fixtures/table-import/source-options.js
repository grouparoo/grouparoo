const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1631152727861";

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
      "00000002ffedd34b7282300000d0bb642d0e103fd09d442255270a227e364c8c6102a10201a969a777afd36bd47787f70d2863bc6dd3ae92fc06de80a6b63b64c355ed78f3cf3c592f13b8d39d97578a41ff9e1506d9e019ab16d6633b0ddb9d819da9ec47b3c3baeaa232d4f1e490df5cab22c17b66287157e1b20c5062d2b8a6bee8179014cc09b2581a850a5024ae7126b94d52bf2b8ea6e1ea5c9df0bcb1cb0c617395541b261b891b55ce0471be1617fc311102e9c954404aa29d388fc8e9e863a67b7c468e358e54efed47f3005ed585d8d2a41d6cc5726fa02d0ac758debde1cbcbff0506803fea5cf136cd9fdbe1d87507e0af7edae99a3fff7b9c2aaec0cf2fcee517b519040000",
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
      "Thu, 09 Sep 2021 01:58:48 GMT",
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
  .get("/bigquery/v2/projects/sample-sources/datasets/test/tables")
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffb5955d4bc3301486ff4bbc55c9479b26855d280c1c1b083ad885c8c8b2b3aeda353549d131f6dfcda6db85132cb5bb0b276f1fcec339341bf49a977394a2599ebdd560d7175ecd0a18e5cea34b045e65e1ae7f6fe8c2b2c9c7e39dc6e37818bbc9709ef57a21b14f3b943e6d7e078548beab3ab5aa0ab872a6b61a5ceac1f96ba5b5a94bef0e980758808552034a37a8b2e605b41f9c7e1ce273e59583afcb1dea40d8178ed86da8aeab4043e39bdb513f84b405e573538ef3d5ae4c38c55c321a614a5888b770d0ca76ddff1ef977efb1a4440a4e2491b25def4b93bd2bebddb476d0b9c50f78131f8c71cc05178cb6f309cd2ef202ba3639629bee931411c3c9ff1c083e934500379885489284711161815b7a84f33274d3f9308edc2616824731891349e276165fb5e9b9644ef00d360c53ce084ba288b4dc305719dbf93ff71bda68b3c46ead284fc24c9e43de78550c3cacc22322b69fbd49e2d98f060000",
    ],
    [
      "ETag",
      "EOo2fr3WxSHc0T5K5sWKdg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
