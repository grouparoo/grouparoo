const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1640201495372";

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
      "000002ff1dd04b7282300000d0bb64ad4ec082d21d20ce140c7f31b8612244342292f011747af73a3dc27b6f40f29cb66dd63d6eb406df6022b2b6c81727a8e301be6237706bd2b46eba5e6d12668eabe182c7676d1d0567e7e886fdd634040fefd116f9d664f7d216f16dd449d6be9437d229f10e64fd0c1ca254bd887938545837c3ce3f637cc09624712f68a96c0c15673f518991413376ac617f89392d0bf87ad4aa2d332985e154acf6652af0c0fb47e7c5aafe850ca2f8cef21834a8b2e7f6044d6dae3b775733d8bd60a18cfad441977c18cb6457bb743a78e6deb29266a7424749c10cd0b1b90ada66d78f7ba968da0cfc2764ddd4d0cf844189a002fcfe017bb0d08123010000",
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
      "Wed, 22 Dec 2021 19:31:36 GMT",
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
      jobId: "grouparoo-job-1-1640201495372",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8552d16e9b4010fc95e8fa9097d81c3660b014b569821a24d76a6ddc2a4fd6deb1d04b8023dc91288af2ef5d207113456adee066666767771fd98daa33b6644215b71db60f9faeb560270c2d14f4fa3371f1ba70f1c74dca3757dfebaff7f3d5e5d9e9293154af325035254e8cee5a8966b9db4e8b56770db45a4fa8d0c49db881c767dcf5227fbe9891cc6099af547d43e23fd63666e9382fd6d342eba2446894994a5d1dde9dbb99d3b4fa1aa535ce5b47874c8cf35fcfcfa5966095ae4f775bf2ef0cb67bac4095d4c13f6126bebcad3c55504d0b22df298920a5ee6adb774525a4ae735574ed50952d1fd9d0e5ab0fb68d57f1797a747c991c1f8139aaa142d26568acaa07550aa2c45ef19c2b793fcc5e00160c8ee07ec10370431e895c2c641ece7d91731422140b1fe682cbc8432f1308a4b37df54105b5aebd28f28319649e10c122cc3c19cd3c0e21647388f290730822eee751c09e4ed87dab2c5e28d368a3c674ecf72649e37dbad9adcfcfd27888914357da8bb1b93ec4eb3e2d85dc73ee12f13fd99e7a546972ebc795acd37873769e26bfe271432b2c403e6c6f6947399406894e9b4d1f1aec6f72176faed8f8b4c11c5bace5c7b324f2007c749f2fd74254ba17723196fe6971d2f41eb2c57181aaea7b39a88379e8b381dcda7798cf17841daea4af8815d6f639d0782dece9d9ac3307128134f775b2fe46e85f22bf031eab030000",
    ],
    [
      "ETag",
      "QI1ejg1ePkT0RYMnBw3LHA==",
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
      "Wed, 22 Dec 2021 19:31:36 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1640201495372"
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
      "0002ff2d90416f83300c85ff8b7705093ada69483dac55b522d16aa3eba19a7a488361b0806912365588ff3e87ee12fb399ff39e32c077d5e610c3a52aaf3deadb4389f6dd35199a5e59c3a5a3d620788056944cee707355eb54d6bbe4a0f2a89987c9e2542e974c18f9858d807880a242951b883f07684583bc36150fecad73eaf09125fb57d60de54eef8f69fab24a37309e470f6aba6458a0c656a27badd354a3b4890b6a44d329f40df55aa281099e2e4a4d7d273491cf133ff4c34514cc82307a9e3f3ecd98532485ada865f4780076b16485cae8976342c8809e5a4e5c4ce70f8fb7890b74fe6757378be64d13fb1a7496c1dd7e4d2e92e5a856f7e88114fc0fdbcadef5f8077314c92d64010000",
    ],
    [
      "ETag",
      "MeEqlCLcjMISld4m51I6Yg==",
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
      "Wed, 22 Dec 2021 19:31:36 GMT",
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
