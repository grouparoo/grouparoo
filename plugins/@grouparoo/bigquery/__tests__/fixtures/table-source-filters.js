const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1631152722964";

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
      "0002ffedd34b7282300000d0bb64ad0c958fa63b18e4532d021a67d24dc6c60836444212abe2f4ee757a8dfaeef0ee604729d39a988eb3137805b7dd045ad45ac859185d6ad4c4363e17898c4eddc56cf8d0dba2fef4c4d52814eb329bd4ee78123a746d7f6fb206adc42587f4ec275a9954b57e4ac9b1928b39a187b008834ab742477137344bb7c5685d06ba5af96f4d117e0dd9807900e1661a13e7c5a9ce01ef0f8b9ccfbcba737bd3965bcfbccf535b62b62e525471122418cd8491b844c22f923cebb7cb8f659be3db56acc670d8e3e949ed25c2258c4c76d568e0b1df594f4fff171801769547c534393eb63b1e8423f0579f989b648fff21db29a6c0cf2ffe2d4c4119040000",
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
      "Thu, 09 Sep 2021 01:58:43 GMT",
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
      jobId: "grouparoo-job-1-1631152722964",
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
      "02ff85536b4fdb3014fd2b91f715fa489fa9548dae8491a94d599a82a6698a6cf72618d238c40e1342fdefbb76680742824fb17dcfb9e7dc479ec9bd28b6644298c81e6aa89ebedc49464e08689a99d7da93759f2fbf05d1d5ed8fd583779d53319b4e11210c4bd15d99c3a99275c5414d36eb5656c9baa49594a798e8b47bda1df6badd813b725d6fd8479a823c5d88e21ec9b75a976ad26e1fa45b9994590eb414aac5e5eef8de7e74db6525ef806bd57eabd84611d5fe50f36b2e39d54216d3cd1af56b0555023b2a7274f09fb865676f33b704ddb532043f0a0e94735917dab8c2145c16a9c8eaca66259367625dbe3a90b5bff0e7b1c3655eef8aa4a03b3871b654d3443f95e05c44aba5138417ab68398b835598ace797fe72d69aaf169b65b8766e2efdc87734653958ae3375ceec2dc40bea6f41695158f5d83c1be597fe04ef87620828ada00926a3ce9076c71d8fa56cc4d3716fc0d20e303666a301edb10ef7fad0df32a0c8b3a296450b59506fd477c70396001df693be3bea256cd87113af3370a9e751c67b5db23f217f2ba1e15ca8522ad17488dc4441ec2771b409e7b3d8b725a4b4cef57963cc14f0daa3c60211f4414d7b131512954cbb8330f6a3d93c0eaefd66c20bc8287f5a3fe08c539a2b4034adb0791aaaa5dc62c348385bfae708b613bb3a041599fc7e26a6e7c6c5ab961fe9310ed0d8d5f64bd6711484dfad9d03e29ae6b5853c360752a2e55bac0d5defff201277b4c9427e6efce817699e2248a182827f3e4d04dbc0677fda61ef118a9b8f2a4ae31d57872ba3c12b685648d86a8fec5eaf3320165ce9f7b1f1f8d03493c364841d14faa5a066efb1ce46ac5647100671faa16dd6fe1f55d8a1ca75040000",
    ],
    [
      "ETag",
      "bu9ou4cMBIRPhJOq9VlaiA==",
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
      "Thu, 09 Sep 2021 01:58:43 GMT",
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
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1631152722964"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92dd4ec2401085df65bc2d09e5579b704115950808a55c1843c8d24ea1d876eaee5645c2bb3b5b118d9ae84d3b33fbcd74ced9eee021ce42706019af1e0b94db9315ea89093c5445a215bf72ca148205a8c58ac9176f5cafd65fdde10db9779be759afce8d934e870915ac3115e0ec208a31091538f73bc8448adc165052a4d9a2cc2cd0dbdc14a7bed71f5d719e5268f2d16c30e8ba831eecad636328b45894fc3fdae67b0b36b4f4304289598066975cd20603dd37329548f3042b8a0a19a082122e0f56928a5c48a20a572a76c56ed56dbb596bd76a67ad0673090542c794313a9bf27aa0498bc4a36716092d066419b2dea87c3e71390e4b1d26ec8f7c1e63d6fb0af066519ce0e26f90d75d0bbe850fece0c0774ea45464fa485d0e6ebbbf8d634b3f475d74fdde0f426936ea88f8fd616fea778763c3cd0fdaddad463596c43e2a3416dad5c669b3ddaabebb7a4ec669fe8ea365811604827f8eeb5883138944e1fe0da27e18157a020000",
    ],
    [
      "ETag",
      "xRP303zBMKoBYjwUE3queQ==",
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
      "Thu, 09 Sep 2021 01:58:43 GMT",
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
