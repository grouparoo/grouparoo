const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1601915945096";

nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
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
      "1d",
      "cf",
      "c9",
      "72",
      "82",
      "300000d07fc9591d8a2ca5374014cb260e2070c9404c596549a0443afdf73a7d7ff07e408610a6144e7d833bf0019e19afecd0ceeadfb5fd8272d373a276c823ae2a1b921d874338f2da3806fe3a4d92ab9378126db3805b5a408b2476242d11fb0ccda75f73755f1b71ace694c9461a8c2a7f344e1cc36ea17e15022b59e4da5753584d6fd6e161157dedc4e50b4cee6fddfddc89e496ca5a930fe94d2a3dfdd1a5dbb3d30b06bed0cbdc2ca13a4a9d2e75adcdd083f190172d67f612192235f8be8a68e45a016c006643453085d56bb617156503fe9b707a0ef875d570463001bf7f2c459e5505010000",
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
      "Mon, 05 Oct 2020 16:39:05 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-1-1601915945096",
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
      "00000002ff85536b6f9b3014fd2bc8fbda04c89b48d11aa574454a480ba45d354dc83686ba05ccb0c95655f9efbb98a60f556a3f61fb9e73cfb90f9ed0032f13344784677f1a563f7ebb17049d20a67006af69f3b3beb0aecc5b15f9fe8cef77ffee6e2eaf160b40f096257151e5ac2745535326e7bbb09fd5a2a9702d440f12f5ec9e3db16cc71e3ba3b1e54c8026599eae79f900e43ba52a3937cda3743f1322cb19aeb8ec5351bcbc9bfb8159d5e29e5125cdf78a268848f353cdefb9a05871512e7621e83792d5312b30cfc1c12b3121a7ef33f7392efa1980f79c324ca9684ad5ba8214549429cf9a5a6745f327a45dbe39a0d05dbbabc8a0226f8a322e71c14e8c042b1cabc78a19e7c1766378fef936d82c236febc7e1eac2dd2cfbabed7ab7f143e3e6c20d5c43619233cd3516c6a9bef97001fd8449c54bad1eb5cfadf2737fbc8f436909202d59178ca7d604db33cb212999d274361c93d46284ccc8748c87c4a2ce888d12c230f0b4a866e15294c924193816b66227b587f1c8769cd8b10989291c877840a61336408713f4b7e68a9d715909c9bb0ea19bc08bdc380a76fe6a19b9ba841437b93aeb8cb505bcf5a8a040007d52d3a18d72014a6dbb3d3f7283e52af2aedd6ec26b9661fa18fe8119a738970cd0b886e629566f44020d43fe72e39e01584fecf2189468feeb09b53d6f5dbc69f90b3d8201b67695fea2300a3cff87b673445ce3bcd1907d77401558be83dac0f5e137206147bb2ce86ae706b7a87b0a58ca6a56d2afa709601df8ea4f3bee3d4061f341452ab8c3ea50d96ad09a752bc475b5afecd1d0421a5cab0fb1a9631d9bd6e66833b28295eab9a06eefa1ce4eac912f2008c2f47dddacc37f0017ef9475040000",
    ],
    [
      "ETag",
      "fuXrH0Q/YtTNN8ivUxhWPQ==",
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
      "Mon, 05 Oct 2020 16:39:05 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1601915945096"
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
      "8d",
      "92",
      "dd",
      "4e",
      "c2",
      "40",
      "1085df65bcb4243429204dbc0005c4f05b4ad4184296760a856db7ec6e31487877672ba25113bd6967a6df6ccf39ed0136711a820b8b78b9cd51ee2f96a8c7a6f050e55c2bba6522550816a0664b221f37fcd57ba83d5deeee9d75cd1f8ef24e7b3bbebe2642052b4c18b8078862e4a102f7f900294b90d602c1f3249d179d057a9f99e1c4f7ba830ef589084d3f98f67a8d66af0547ebbc1832cde605ff8fb5d9d182b5587818a1c43440a32593628d81ee1a9b8a2519c79212b90c504101170f9652e4199342946852b24b76b56cd7ed4adda994eb55e2b808988e454ae87442f2400bcdb8275ec82418401625f98d8aeb8ec67158f8306577e0579d42de5780944531c7f9df20c95d31fa0a1fd82981ef1c4b449eea33d5ee0d1bbf1d47917e1e75dbf05b3f08a529a833e277fbad89dfe88f0c373b796fee35aa911494a34213a15d76ae2ab56af93dd51b6192a6f7b85ae66841c0e8e7b88b35b811e30a8f6fb24ae7887a020000",
    ],
    [
      "ETag",
      "XklzRW7Y+vJ4j7TOPuGFqQ==",
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
      "Mon, 05 Oct 2020 16:39:06 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
