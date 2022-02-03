const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1640212608718";

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
      "0000000002ff1dd04b7282300000d0bb64ad0e8218d21d14f9a89862413e9b4c1a6201f949a80338bd7b9d1ee1bd27a08c7121c8d0de7803dec04465b462ab2f498f1fd21c78673dce1c7e0d10c247e2e6061e1b41a4b9894985ac6469c14ca7756f4ffd719f775009a474ed84ed50b5723898b786b6feb8f582d9cc6f6b53efecb6d69683298f24a1c4e116fb546b98562429847f49c28dc8608f99b231e4983e06d88dbe6427657838f02bc6d17bc4ce3bee977b74928f67e3616b4ea9295b7c3afccc7181a7bd45eec4b12b353315e8a92edcd5862a47639b5ac5857de751502642d477f5c3156001f8d8153d17a478b91515a105f84f20c3d4f1d784c169cf7bf0fb07a8c2393d23010000",
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
        query: "SELECT 'HI' as name",
        defaultDataset: { datasetId: "test_001" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-1-1640212608718",
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
      "ff85525d4fdb4010fc2be8fac00b89ede0f82352d406b0da4851a4244eab3e457be7b57b60fb8cef0c8a10ffbd7b3644202478b36f66767676f789ddc93a6333c66571df617bfc76ab38bb6068a0a0d7a2d92c8aabb5bc3b169b2daccaacbbf227c57c4e0c69551aaaa6c491565d2b50cff6bb71d1aaae8156a911151a79232ff0dd893709dc28f42292692cf395acef48fccf9846cf1ce7d57a5c285594088dd463a1aad3bbf330719a56dda230da79efe89089763ef5fc5e2a0146aa7abedf917fa7b13d6005b2b4f14ec28cff785f792ca11a17447e90024108d5d5c676452584aa7359746d5f95cd9e58dfe59b0fb64b56c9757a76fe6b797e06faac860a4997a136b2ee5529f012ade225d7f2e330ad000c681cc043e806e0456ecc731e8a3cba9cf2dc45ce231e4ee192bb22f6d1cf3802e98caddeaba056b51fc7d3600299cf791046992fe289ef4204d925c479e4ba10c4ee348f03f67cc11e5b69f046ea466939a4637fb6cb3439a4dbfdfa7a91267d8c1cbad2dc0ccdd9106ffb3414f2e0ba1e113fc9f66c51a9c8cd8e6bb94e93ede23a5dfe4e860dadb00071dcddd38e722835129d369b1e1b9a19dbec93ed5f363c6d31c7166bf1f52c89dc035fdde7ebb51095ee855cb4a17f5a9cd0d643b4382c5056b697933a0ea390f5e4d67cc062cf8ee37425b62256589b9740c3b5b0e717b34e9f4804d2dcd7cbf54f42ff0372cfff21ab030000",
    ],
    [
      "ETag",
      "gpQAgBNikygQRaLlduB42g==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1640212608718"
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
      "30",
      "0c",
      "85",
      "ff",
      "8b",
      "77",
      "058974535b21f5d04ed55a89552b5d77997a08c13018609604265af1dfe7d05d623fe773de536ef05d3429849014f94f877a78c8d11e5d13a3e92a6bb8b4d418040fd0ca9cc9b27c141fa7ea551da3f5b55ff6c9621b5cd7ab1513467d612d21bc415660951a083f6fd0c81a796d2a1ed8a175eaf41eef0f2fac6b4a9d3e9ca368bd89b6305e460f4a4a62cc5063a3d0bdd66a2a51d9bd0b6a64dd56e81beab44203133c5de49aba566a229f27bef0c5fc299889d93c582ec492b98a94b405358c9e4fc02e96acac62fae5982018d053cb89b3e9ec79bcdbbb40977f763358346f9ad8d7a0b30ceef6cfe422598e6a75871e28c9ffb02bec5d8f7f69885b0b64010000",
    ],
    [
      "ETag",
      "jj31VSlMcQLAzv8vb7E0zA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
