const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1640212613029";

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
      "4b7282300000d0bb64ad4c2a3fd31d504541821050e28641081451a0043fd0e9ddebf41af5dde17d83244d19e771df54ac06ef60486648488523d4a21b1c03c7d566196e2e92dc5791b6d7b3b983e9c0e90a7905ce57fe488ad368a5aa4c37e8718cdd20eadc8edf0a82afa83cbfd5a32df6ad713fafa52a9403f120d272b02e77a69e3fb721bc3607337450a08796424cdbd63c5c125292d532dfec8c023778e7e67c4d6c1f4d1dc8b6a322599acda751bf53e162b9d7b8fae16265b11fe530839bc83b99539cd5f72f9af9c60cc729f7e6662f3916caafe65c0ad6691e62dac2a8a6c2cbcbbf0326803ddab2633c2e9fdb4519a109f8ab1ff743cb9eff759674ac033fbfc088057419040000",
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
      "00",
      "000002ffb592414bc3301886ff4bbcaa344babb5b0c3040f830e61543c8848967e8b99691393afc228fdef7e9bd41df430063be6cdc3431e48cf3e4c5bb382ad8cfeec206c2f50ae2c942622bb648052d3dd6266dd9736cf952f97eb45feb479d436eae994883d1d59f1d2ff2f22c4ecd6281b6fe12aba2e28880542c4b724e1d75229d7b51847d512d610a055c08a9ef9e036a070fe5740782d5146f8b91c75a3653ffeaa075ab79e8cac9add970f04a900128d6b2bd3ec667e932693446482e7935bc24f6cf1747ea7379d23e6e03eb2868bbb948bf4f49a00ca85fa1c2da3f9e8929c679960c32bf10ea59d2334f4e5c4f00d3b88cf78bd020000",
    ],
    [
      "ETag",
      "MAlovgiWTpLRfM8UjOglsg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
