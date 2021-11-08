const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1636335955632";

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
      "edd34b7282300000d0bb64ad4e05d4a63b307c8a327ca450d83011032a1201630838bd7b9d5ea3be3bbc07c0794e6eb78c5d2b42c10718b00467f96cd3bc6b46592e1cfd52b3dc47ceb2b61d4ff6ef96921636ecfcc0849192319b68788bb1157197aed563e8b927435462ea0701e452e0aaadd87530be7cae025d61ed65347ad78886904bc78823b380633ceeba444b558f56fd41b537f7f86bdb4ea594da6f5632b50e15477a7cd553cf94f3b332ae22634c967c3d376a81123dc463dfc03b3d43792798fd6d0e7aa0146a8950ccd3754411a5fb6110e51c35ab22d9b3d9cbcbff05268088e6d4915b767a6e9717104ec05ffd8c0d0d79fed708ee48077e7e0162abe60b19040000",
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
      "Mon, 08 Nov 2021 01:45:55 GMT",
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
      jobId: "grouparoo-job-1-1636335955632",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8552ed6f9a4018ff57cceddb520544104dcc662c5b48d0a6885bfc64efce077a2d70943b5c4ce3ffbe07b0b6dd92f61bdcefed797b268fa2d8932961227daaa13a7e79908c5c11d034c5572ec3e3364cdc3a5e8badb5d4f3ec7063dece66c8108d4ad1bccca0af645d7150d3cd7a9056b22e6925651f8dfa56df726dd7b69d89e3b8f610650ab22414c5238aefb52ed5d4305ea207a9946906b4146ac0657e79370e43a3ace40370ad8cf789068628e3c3cc6f99e4540b59cc366bccaf15543bc8a9c8b08257e19e7d7fef3c10341fa4483e080e94735917baa90a2db82c1291d655eb4aa6cfa4adf2cd0759fba1bf887b5f7b3fa29b65efae44c77baa40ddf5c26019c43dcb449b3d282d8ad624a62c83c6e0dc66f0ff6c1b01d568d281bbb1e952cb33272c61639e78b6c3121318f3d8d8a13633f96404a33d038a3addb8b72a5ac8c2b626a6670f6d1c8ee78dec090cb9454d6768b1a1431d3ae69483cb3d979caec89f4a68b816aa944a74cd92df5110fbbb38daac16f3d86fdb48689de9ebaeb8a689b7756a6c12491ff4756a502131a9995cb08afd68be88835f7eb7ac1052ca8feb275c5742330548c725c7c712e7456e377eb425dd5304095450f0cfe788e416f8ec545f0e07a9783a98a234fee3d2b86a327805ddf244ded4f2aa9e8c46a42557fa5fcc351d0fb1cbc1348e9043a1cf0d7587434ee7b05a5d4808e2cc57c1ea27a27f019c6139d6b6030000",
    ],
    [
      "ETag",
      "coLyYLf6uTSiY1MtAlvO0Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1636335955632"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff9d94516fda3010c7bf8bf73882e2244e30521fc29a5124a05d489faa6a328981508833c7194288efde4b5a91b07a6cf4052ec7fdfcf7ff8edc01bda45982fa689e2e7f955ceebf2cb9fa5105212fca8d2ae02b1759c1510771c59650b99ba5ebc1fddd64e57c1d862f033b0bc9e2d6bfb9818a225ef12d43fd035aa47c9314a8ff744019db72c0d2040ad43eafe2d1340a86410889ad48aac4f4713cf607e3001d3b2740f258c8e4e7d55c5eca78c5ea1bbf63b3281c4d879729b61565a61ae6fbf8de8f2e2309532d915b3f0a2ed7178a6df3068846936016f993071df57ceca0b598877cc125cf625ef5349762cd6335aac655c0511b6e1402ccf202d5c5f50f4b29ca9c49210cc818d8c0aeedda36a184b8b605751b1133958a0c4a1f67703ba484629b50ec6058089b5021eb1806b7a83f7f43deae6d9c473325d96ecea5dc9f5256d76c62d3320dd332cc86c05dd2333d1b53ea9080d61edb22b881c9b52a2db652c1b6ed7ad4d189789fb7d2626b11ea60a215211a237e0ef36ab4bbd8f9d82a72de2a6a3a6082b89ece87d5e0d768b4b8da0331a9de03a69f14a0670216c68ead1768eafe723ef09a26e1f3261142b1f67cef9ff7d79fffc7904dcf23f5107a5423d2d3fc9bfe47a4772e022f29d537a9619d6b045a5c2de0f6acd3149edfdff9c15ef1e2410ad81f05af5687f9b646be896ab5c06aeb2b59f20e8a196cf5bb54bd3d1f5f01dfeacf7332060000",
    ],
    [
      "ETag",
      "wSijBOHMh4+GRkB3nR5fDA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
