const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1640212611269";

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
      "0002ff1dd04b7282300000d0bb64ad0e207ed21da8a8105006a4914d8668f8446a200195767af73a3dc27b3f20bb5c9852a4133776071f60c80c38b94ca866e187f61dfb821319e9ed8b2545c7ecba3a8e698cc210bb598291986e9ad790c2c289165795affba2d89b2be4e5db990b3de294aa4dbdf23c0db6618c677827575a649ce83585a833f7892cf92ec5591c22cbd6cdca42eacb98e3debfefaf27213dbeee154d0e3aa55de03fe333a9cebcb64eb9b774136e1a31d51747cc1b448fbbbbf5d9b6f0705bd64330ae9c7e28e7b9cf85081e82da119977f5406faa90874d6fa0c2455b014680bd9a4a3245aab77b3a837004fe13483734ec3d61b34c32097eff00bfadcd4d23010000",
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
      "Wed, 22 Dec 2021 22:36:51 GMT",
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
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-1-1640212611269",
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
      "db6ea33010fd15e47d6d12720f91a26d94d26da4847481b47bd10a1933503704536c5a5555fe7dc7a6e94595da0704f69c3367e6ccf04476bc48c894c43cbbaba17afc762b62724240d10c6f77c92fbede8d2eaf36bb45cf91fdf33fab7af3309b21826b96a4fb3287961475c5404eb7413bab445dd24a8816266a755bddd1c0ee757ba32e3e0ed224e4e98a173b24df2855ca69a773946e67426439d092cb3613fb97fbce7daf5356e21698929df78a1d14919d4f35bfe78251c54531db06a85f4ba822d8539e6305afc4243e7d9fb9cde9be9d21f89e33a08c89ba50ba2a4cc14491f2acae4c56327d22a6ca371f247057ee22b498c8eb7d1115740f275642158dd46309d6b9bf595b4bef7ce3afe7e172e345c1e2c25dcfdb8bcd6abbf602ebfac2f55d4bd13807c3b566d6a939797840fd04a4e285510ff5b5567ef667f971289a80d2129a6034b647b43bb19d388dc72c9df487716a431c4fe2f190f6639b390318243150e41951c3a2852846bd7448d96810d101ed4603db194793c49e44a378e03893710cc3a1430e27e4a1e20aceb82c85e48d43e4da5f866e14fa5b6f310f5dd3424aeb5c9d3585e906ded6a8b0c1c8b6bb08fca4af838e72816adaf2a517bafe7c112eafdc66ca2bc8287b0cee70ce29cd25209a5668a0826a2d12348d78f3b57b866033b5cb635092e9df27a27dd795bcb1fd851ee21075c9cabc4910fa4bef8729e788b8a2796d20f7cd0729b1e41bec0fab3efc4324ee699385fcdcbafe6fd25cf990420505fb7aa2083681affeb6e3ee2314b71f55a4c233ae0f935a8355d0ac1137ddbeb2878e361fc195fa101bf7fa47d3740e9d11f650a8e7869addc73e1bb15abe8030881be019b30eff01b1456c6f79040000",
    ],
    [
      "ETag",
      "kdXiMk6PVOkC29s3FZLuOw==",
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
      "Wed, 22 Dec 2021 22:36:51 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1640212611269"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92c14e83401086df65bc422c0651493cb45adb1aac95e2418d69b630ad54607077b162d37777166b356aa2076066f69b65fe7f77058f6991800fd374fe54a1ac77e6a8af4c10a2aa32adf85352a1102c402de64cde7476dd7e50bfde3e87a3def251bd9c8f7b9dabe3632654fc80b9007f05b314b344817fb78242e4c86d3165555e4c9acc025d97a6388ec2c1b0c7794e89c987d741d0ee045d585bdbc644683169f87fb4ddaf2d58d034c4194a2c6234b394921618eb8191a9445e66682baa648c0a1ab859984baa4a21896caed88eed786e6bcfd9f31c7e8e98cb28163aa582d1eb318f079ab4c8425ab248f018904dc87a67cdfb99cb69d2e830e16018796e33de5740624c3299fcc9953ced83e043f8c036067ce7444e55a1b7d45970d9fe6d3b76f473abd376d4fd4128cd3e6d916870d11d47ed8b91e1ee37d23bb5463592c4362a340e3a2df770ffc06bbd9b7a42c668fe8faf658516c482ef463fd5e0cf44a670fd0694cb90c679020000",
    ],
    [
      "ETag",
      "YB/4HLyzZvRPGwksxJSGBQ==",
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
      "Wed, 22 Dec 2021 22:36:52 GMT",
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
