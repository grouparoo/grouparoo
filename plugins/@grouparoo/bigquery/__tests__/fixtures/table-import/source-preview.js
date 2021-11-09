const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1636475696017";

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
      "72",
      "82",
      "30",
      "14",
      "00d0bde45b9d8e4c2cf48f04507cf0064b7f32945c0a581121bc74baf73add463d7b387794a429b42d13971354e80d4dc95259a48b5d2d1363286cba2527f5d59ef3de77e47ad2b2a8cfd6f442ba41e2629fbbdcafd8552aa33ef6bf40f44b6a7da6f1f9ea60acd26d700bb10a220c5812172155d7223fcf39f3460fd891be87131e41fe1edc68b08c0a67a6d4f58e7d8a36bbd82b75db572ece7ab90970ab8331d79dd06f63ab54ba23217576a056b4daaac9e1c673b3f69b91eb695115f0a1a59230c56e439420e65ad9e5ab975c3657d2959ddd6ed82f9e9efe2f344330d645032d2b1edb25ac2833f4579f89a986c77f0249030dfaf905f098a0eb19040000",
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
      "Tue, 09 Nov 2021 16:34:56 GMT",
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
        query: "SELECT * FROM `purchases` LIMIT 10",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-1-1636475696017",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5b6fda3014fe2bc87bdb0ab9910b4868ab683665a24c0d61d3f6426d73125c421c62a715aaf8ef3b49286d55a97d4bfcddceed916c45b12663c244b6afa13a7cba938c5c10d034c3d7c5cf7f9b7059a7fb69b99df22f86e1a70ff6cd64820cd1a814dd9539f495ac2b0e6abc5c0cb24ad625ada4eca351dfea5b9ee30d7dd71b79a6e5a34c419ece44b145f146eb528d0de3297a904999e5404ba1065ceeceefc6bd6d9495bc03ae95f13ad1c01065bc9bf935979c6a218bc97281f9b5826a053b2a72ace059b866df5e3b0f04dd0d3224df0b0e94735917baa90a2db82c5291d555eb4ac68fa4adf2c5075984b3709af43ef7bec7bfae7bb7253a6ea80275db9b45d751d2b34cb45983d2a2684d12ca72680c4e6d466f67db08a846930e5cf9a647adc01cb194f93c0d1c97a526301630dfa50e33f96808c335038a3addb8b72a5ac8c2b14666e0d88eeb7a4130744660738b9aae6d31dba52ef539e5e0f1c023c70bf250090d5742955289ae59f2278e927095c4cbf9f43209db36525ae7faaa2bae69e2659d1a9b44d23b7d1d1b54484c6a2617cd9330be9c26d1efb05bd60c32ca0f8b3dae2ba5b902a4e392934389f32237cb30fe4bbaa71852a8a0e01fcf11c92df0d1a93e1d0e52f174304569fcc7a571d564f00abae5895d53cbb37a68baa42557fa0de63a0d763e98c6117650e85343dde190e329ac5667128238f37934ff81e87faef9fc0ab6030000",
    ],
    [
      "ETag",
      "SJZhEUufqCpkCc+//7fw2Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1636475696017"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff9d94616fda301086ff8bf795203bc40946ea87b44b3b244a5b48a54d533599c4403a1267b6b30a21fefb2e6945c2e6b1d12f7039eef1ebf78edc0e7dcf8a148dd0225bfda884da7e5809f3500733a1ab8dd1f055ca420bd443c2f015545e8f27eb30ff72157f8e85cafce86e5ab9fae1e2022a74b2163947a31d5a6662936a34faba4305cf0560590a05665bd6f1781a4737d10c12b94cebc4f47132092f2711daf70e80128954e9b7b3b9b252c99a37377ec3e6f16c3cbd394df15c56856999ebc95d189f46526e3a221fc3383a5daf0dcfcb1688c7b7d13c0e6fef6dd4d3be879ee562269642892211754f4b259f4562c6f5b8341cb5118e96605668d414373fac94ac4aaea47420e31087f803df0ba8cf7c4c02a8dbc8849b4c1650fa3887db21230ddfcce40b0c0b110c15aa896170cbe6f327e4078d8de3686e147f5908a5b68794dbc76d8c5dec60d7c12d41fa7488830161cca3116b3c7645480bd373553a6cad4206033f609e4d2478bf950edb88308f50ab08b518094b9857abdd27de9fada2c7ad62d80313d40f6c3edc163f47a3c3351e2866760f84bd53801d09b8847803bb405bf797f381b734891c37895246ace707ffbcbffdfcdf868c8380364318328bc8d0f26ffa1f91e1b108bca4ccdea496f5ce11e8708d803f740f53787a7be72fb746e87b25617f6851af0efcba46ae64bd5a60b58d8caa440f251cb6faa7ccbc3eef7f01a2e97a2432060000",
    ],
    [
      "ETag",
      "FILhAmYCTXTeri6EONu2sQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
