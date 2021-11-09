const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1636475695878";

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
      "02ffedd35b7282301400d0bde45b1c1179a47fd168a5f2102a55fc61e0368d88d51804834ef75ea7dba8670fe78e720056d7d9e554b1237a415d3ec47de82f84339e5d7954b5400fda29d47377da39d31194a66faf5d99318d8b22bc45a14ce33a29bf6e6405785f5c5746f849bc9ba84cb9d5135d2a88137c5c50b5ea3c6244fba651cc691aebdddebe4264cc71f616e42af5d310461639ee5caa7b67a7b037da773cf5d7760e7c76955c11c29667935bed6848e353e97a6a5725f371c735479a746b04b543c1c7bb8f25135cca78d01c641a9059d05a422b2e9b0905b00793fed3d3ff857a8829514a5667e563bb6162dc437ff5b34b27d8e3ff98e59249f4f30b1f3e0ab319040000",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-1-1636475695878",
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
      "2bc87b6d4258124823456b94d03553425620ada66942365ca85b822936e9a22aff7d17d364ad2ab54fd8bee7dc73ee07cfe48117091913c6b3c71aaafd977bc1c8190145337c95c2fcbbbf4fe4cdf4769e04d68f727d2daf9e261344f08625e9b6cca123455dc520c79ba09b55a22e692544071375ac8e65f7ed8133b4cf87236784340979bae4c50392ef942ae5d8348fd2dd4c882c075a72d98dc5f6f46eeebe9a6525ee2156d27cab68a288343fd4fc968b982a2e8ac92640fd5a4215c196f21c1dfc2726ece26de62ea7db6e86e01d8f81c6b1a80bd5b8c214b128529ed595ce4ac6cf44bb7c752081bb7467a1118bbcde165141b770662454d148ed4b302efdf5ca5878976b7f350d176b2f0a6657ee6ada9dad979b951718b757aeef1a8ab21c34d7981817fae6e105f513908a175a3d6c9e1be597fe2cde0fa521a0b4843618393d9b5aa3de394b9913a7a3fe90a53d606cc49c21edb35e7c3e8041c280224f8b6a162db0668b597dcb8188d9cc8906788c4630b4a3617fc0c0817eda1bd9e470469e2aae60ce6529246f3b446efd45e846a1bff166d3d0d525a4b4ced5bc35d614f0daa3c20211f4414d8726ca052a35ed5e78a1eb4f67e1e2c66d27bc848cc6fbe011679cd25c02a26985cd5350ad44820d23de74e5ce11ac27f6f3189464fcfb99343d6f5cbc6af9891ee2001bbb4a7f4910fa0befbbb67344dcd0bcd6905d7b20255abec3dad0f5e10f227147db2ce47ae3fabf48fbe4430a1514f1e7d344b00e7cf6a71df71ea1b8f9a82215de717562d968c415b42bc475b527b66de11835b852ef62fddef0d8b426479311b650a89782dabdc73a5bb15a9e4018c4e97bba59877f87e405d375040000",
    ],
    [
      "ETag",
      "so/xyjdsVAWDdS1JpOQsHw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1636475695878"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92dd4ec2401085df65bc6d13d152b00917fca9240852ea952164d90ea5da76eaee5621847777b62a1a35d19bedccf49be99cd3ddc3635ac410c02a4d9e2a54bb9304cdcc0621ea2a339a1f25151ac101342261b20aa772ee45fde95574f6ecc9b84cb683edacd36142cb0de602823dac53cc620dc1fd1e0a9123b749caaabc58d699036657dae23c0a47932bce738a6d3eb91b8fbbbdf1100eceb13116462c6bfe1f6d8b83030fb40a718d0a0b89769752d1034a33b232b5c8cb0c5d4d9592a8a186eb1789a2aa148ac8e58adb701bfeb9efb59afe45b3dd6a3397911426a582d1bb39af07868cc8427a6191e033a0ea90f5aeebf399cb695cebb0e16812f95ebdde5740a124152fffe44ade7623f8277c60ef067ce7444e55618ed4e578dafd6d1c3bfa396ad08d863f086dd8a723128d6e86f3a87b736bb9c5bbf4decea0be55c4366ab40e364ebd76b3e59fbe99da276b347f2730aa4207a4e0bb719d1a08d622d37878051340e1a879020000",
    ],
    [
      "ETag",
      "uROcS4TCOGT2v4cdpgxDxQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
