const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1636335934317";

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
      "82300000d0bb642d0e864f4b7782664a15905610bbc9040c1010c404ab49a777afd36bd47787f70d48515021f0786a690f5e8024d09916d35c9f675fbada46e850c1596ee765086dd4256a88fc6ebd6c2d7d6ec6113bb23d5674f7e9bbe7fd4aef2aae679780bf8b6d6f6f76974c202d76b9b1c3b5b530d5d03e5d7b998d84a168d335be6cf243a296fb8f5b396cb454427d5d698d920c3aae57b0d9d14bd8fce479694daa30f72db1ad85e63ee35872fc4692c1371314c35b6ca68691e6e796b768168476cd7146881998bd576674d1206d652dcb2ab4d5b8a6eaac5da200be9ad387877f074c00bd0d8c5381d97dbb6139ce04fcd5c7a31ce8fdbf4b09a71cfcfc02358e566019040000",
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
      "Mon, 08 Nov 2021 01:45:35 GMT",
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
        query: "SELECT 'HI' as name",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-1-1636335934317",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85525d4fdb4010fc2be8fac04349ece0af3852d4a2e0964851a4244e2b9ed0de796d0e6c9fb93bd322c47fefda861484046ff6cdccceceee3eb25b59676cc6b82cee5ad40f5f6e1467270c2d14f4aab77fa362b291d75f2b7b195fb88d8e7f6c36f3393164a7325035258e8c6ab54033dbefc685566d035aa911151a4d4693d00b3d2f883ddf9b44243358e62b59df92f8dadac6cc1ce7c57a5c285594088d3463a1aac3bb737fea345adda0b0c679ebe89089713ef4fc562a0156aa7abedf917f6b505f6105b2a40efe0b33fefd6de5b1846a5c10f95e0a0421545bdbae2b2a21549dcba2d57d55367b647d97af3ed82e59258bf4e8f862797c04e6a8860a4997a1b1b2ee5529f0123bc573aee5fb617602b0607000af223784c9d48d79ce23914fbd80e72e723ee551001e7745eca39f7104d2d9ae7aaf825ad57e1c07e129643ee76134cd7c119ffa2e4c21f320cea7ae0b61ec06791cb2a713f6474b8be7d234cac8211dfbbd5da6c955baddaf176769d2c7c8a12dedf9d05c17e2759f964212e9835c4f1d2a153975a35aaed3647bb64897bf92613b2b2c403cecee683f399406894e5b4d1f1a9a17dbec93ed251b9eb698a3c65a7c3e4722f7c067b7f9722944a55b211763e99f96264ce721340ecb9355d7cb411df8e184f5646ddf6141141376b890ae225658dbe740c3a5b0a767b3d61c4804d2ccd7cbf54f42ff015d2f72f4a7030000",
    ],
    [
      "ETag",
      "rRx7g1Qih+mtY9H0pr9FQQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1636335934317"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff2d90416f83300c85ff8b7705a994b5d32af500dbd422b16aa3eb65530f6930940e709a844d08f1dfe7d05d623fe773de5306f8aeda1c5670aaca6b87babf2bd1bebb2643d3d5d67051d41a040fd08a92491125b3e05ca8cf57357fbea666be59c465b45e3361e4191b01ab018a0aebdcc0ea6b805634c86b53f1c0f6caa9fd4796ec36ac1bca9dde1dd2348ad317188fa307173a6558a0c656a27b4d69baa0b4890b6a44a36af40d755aa281099e2e4a4d9d129ac8e7891ff8c1325c86e1e231bc0f8307e66a92c256d4327ad803bb58b2a2cee8976342c0809e5a4e5c4ce70f8fb7890b74fc67e3dea279d3c4be069de5ec66ff442e92e5a85677e88114fc0fdbcadef4f807a31011f464010000",
    ],
    [
      "ETag",
      "aAI01hfpZMp2DqLs2G5BgA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
