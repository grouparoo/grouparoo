const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1636335954574";

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
      "ffedd34b7282300000d0bb64ad0ea280e90ea415903a8206c14d260d919f852818094eef5ea7d7a8ef0eef0108a5ac6d71d754ac066f4012154ee864cd17d647961501357d7775314fda5783f05dc409d26d1d8d61bf519ac8082b99439d2b432bdc012dd318ef39f14a57b2f01395719c26f50516fe61d3ebcdd917e5542107e2a89ddfa24a6edff1d11bee2b7776acfdf1d13087e5a2f1a89081350dd4b9969ef7a7e9321ad23c8d764679e76a483b5da7c8098ceded16d6446bb0cb4f73a592f372bd298a1d17d8924e1608b963959dad933aefc5def672f3e2c0ef28e4939797ff0b8c00eb7971652d2e9edb671a8423f0571f7792b3e77f8b912bbb829f5f13543a0319040000",
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
      "Mon, 08 Nov 2021 01:45:54 GMT",
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
  .get("/bigquery/v2/projects/sample-sources/datasets/test/tables")
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ffb5955d4fc2301486ff4bbdf423fdd8ba76091768bc00b932245e1843ca2863b8ada3ed3448f8ef1e40d48889cb32ef96d3774fce93d3b36dd07356ce508ca659baaab55d9f7935cdf528731e5d20ed550a67e9035eaeea60988f86fd627973f732785b9cf77b3d48ecd30ec58f9bdf4110c97655a78a2ad797ced436d12ef6daf92b9524a62ebd3b62eef55c5b5d261ac51b5459b3d4891f9cbe0cf199f2cae9c3e10e7524ec0b9fd82d54d715d0d0b87f3dba855062b5f29929c759b12b134e31978c06981206f1160e89b25df7bf47fedd7b282991821349a46cd7fbc2a4afca7a37a99deedce207bc890fc638e4820b46dbf940b3f30c6e23c11dbb7c0337f0105114312e022c704b0f785e40375d8fe48bdb603318678c5119863c6a67617562ecac6b8723b5a941140821c3760687dae4bfc671826fe084296704a402d2722aae32b6f32fee07b4d16e88dd62501ec14c9e206fbcca075e17f00b11db7756e8dab38d060000",
    ],
    [
      "ETag",
      "gW0jqu4JlLJAmjCKvIzh+A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
