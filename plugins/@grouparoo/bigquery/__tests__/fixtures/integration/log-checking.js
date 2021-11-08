const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1636335930777";

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
      "02ffedd35b7282301400d0bde45b1c1545e85f432c6a1c501ea2fc30c85c79446b2019883add7b9d6ea39e3d9c27caf21c8448e58dc137fa40f76c620df321e526fe2a6abfeeed98379e17698b7db7d8cb6695f7e2aa3dce4a8972179f3dd6790f180b98b353a6342723337f6c5253f1edc50daf859c4ef1a4e7239a87a7305a06b0ba10a70c5abb723cb2af491d1f5db6eb18d79756ebc4cd52cc376be91aa7d8ec46d1d66eca845d2ffc9c56b40f80ba38dbea93f5a191760e6d581a0a63ffe0ae12f2098645a37b516c74427cdf052fc5c9b86409759240deb04166e15169c3b7b7ff0b0d10285eb520d2eab55d9f59d600fdd54fe59dc3eb3f86ac8516fdfc02b787431519040000",
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
      "Mon, 08 Nov 2021 01:45:32 GMT",
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
        query: "SELECT first_name FROM test.records WHERE id = 1",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-1-1636335930777",
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
      "5b",
      "6f",
      "9b",
      "30",
      "14",
      "fe2bc87b5c1308841022455bd5b22d529ba984acca5e22db1c985bc0d4369da2aaff7dc7d066ad2ab56fc1dfeddcf2406e4593930561a2bceb401d3edd48464e08185ae2eb761db43c37bf3f673797326c76a76a57eeae964b6408abd2b46e2b1869d9290e7ab1dd8c4b25bb962a294768349a8c26b3601604611c785114a14c43555c88e616c57f8c69f5c2759fa3c7a5946505b4157acc657d7c77ef7db755f206b8d1eeeb441743b4fb6ee6974a726a846c96db0de6771ad41e6a2a2aace0bf30675f5f3b8f05adc72592ef0507cab9ec1a63ab420b2e9b42949dea5dc9e281f455bef84136c9457296398550daec1b5a83f32dfd79e918d066ac804b956be7fa4792268ec89da53341d31c31d1f49619651558bba7a6576f276d05d4500d03b88fbc199dccbd98152ce2c53c0859e1016373168534601e8fa730cd1950d419ebdeab68239bdc8f733f88591014e1b498328f4efdd984cfa8c78ac86741eee5a1cf629f3c9e90bf4a183817ba955a0cad93eb749525fb2cddaecf4eb3a46fa3a05d65ce87e26c132febb40340d23b7d3d5a54484cb2735cadb3243d3dcb56bf9261751750527ed8dce1f20a5a69403aae3c3bb4382f72b54dd21d199e52284041c33f9e23927be0a3c37d3e23fbafd8d8146df01b97c6b5cde00a86e589dad67254fbd134263d599937d83cb4ab3f9e8f75841a1af3d4d07046e4f129acd347128238f3f56afd1dd17fd308d355c4030000",
    ],
    [
      "ETag",
      "UN3pcdtZ+TjMo5nYArYgYQ==",
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
      "Mon, 08 Nov 2021 01:45:32 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1636335930777"
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
      "02ff2d90514f833010c7bfcbf90ac916e2884bf6b02d8b23e254e6f4c12ca683033b8183f6d09085efee95f9d2defffa6bef975ee05bd719cce1a48bb643d3df14c82fae48d076255bd91aaa2d8207c8aa10b2e2ac8d1ecdbacd0ecbddc3dbfbd3b60cd7c56221844dbfb05230bf40aeb1cc2ccc3f2e50ab0ae55aae8de5cf3178c07de37afbd724dadd4bae2873797788e3e52adec0701c3c38d329c11c0dd629ba371b43674c3972ba56554d89bea5cea4686184c783c250d72843e44bc79ffad359300b82dbbb601286a17025a58a35d5821ef6205398589509fd8a2c4c05306329def9b8fe487b63343aa5e33fbdea19edb321996cd10d9d5c05d6e4a45864d974e841aae43fb69aaf79f8034f19a3646c010000",
    ],
    [
      "ETag",
      "mtdqIMrCqdUANKVWOHl7Cg==",
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
      "Mon, 08 Nov 2021 01:45:33 GMT",
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
