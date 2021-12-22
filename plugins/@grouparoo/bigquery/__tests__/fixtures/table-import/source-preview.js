const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1640201496623";

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
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb64ad4ec0a2d21d20ce140c7f21b8612246342292f011ecf4ee757a8dfaeef0be01c973da34597bbfd20a7c8291c8ea2c9f1da0867bf88c1cdfa948dd38e96ab98e99312cfb331e1e95b9179c9dc22bf61a43173cb8851be499a3d5491bc437612b99bb425e4b87d84dc8eae1db44293b11f1a02fb16604ad77c238c1a62471d76fa8acf725675f6181914e33b6af60778e382d8ef079af1696cca41406e371b92b52817bdedd5b375a681f48278a67cff77e8d4a6b6a8dd050a79a7d73549ddd8e2c905197dae89cf743116f2b878e896bec4c33aeb70b682be9ecededdf01134087fa2268935d5edbe78aaa4ec05ffdac1d6bfafaaf5322a8003fbf33d47af119040000",
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
        query: "SELECT * FROM `purchases` LIMIT 10",
        defaultDataset: { datasetId: "test_001" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-1-1640201496623",
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
      "0002ff85525b6f9b3014fe2b91f73635c110022152b45509ab9868aa26a4d3f6921a73206e01536c5aa555fefb0e21bd6d52fb06fe6ee7f6446e45999009894576d740bdfb722363724240b30c5fe97ca8fe384ef878595dcd9b9f67fee3361c3d4ca7c810ad4ab1a2caa1af6453735093f56a90d5b2a9582d651f8dfa66df746c6a51d3f61cc71aa24c419e86a2bc45f156eb4a4d0ce3397a904999e5c02aa1065c162fefc6bd6554b5bc01ae95f13ed1c010657c98f92d979c6921cbe97a85f98d827a0305133956f02a4ce2efef9d078215830cc9f78203e35c36a56eab420b2ecb54644d7d7025932772a8f2cd0759f9a13f8b7a5f7b3f9617e7bdeb0a1db74c81baee85c17910f54c8a3609282dca8349c4e21c5a83639bc1ffb36d054ca349076e5cea30734cbd388d5d9e8e87a338a510c7e3d81db1614cb967839dc4c050a75bf7838a95b2f46c13c0f21c8f73cfb53cdbf24c06c09311052b316dee7a89091675c8fe843cd442c35ca84a2ad1354b7e2d83c8df44cbf562761af9873652d6e47ade15d736f1b64e8d4d6e283591f8416ffb161512d3dae9058bc85f9ecea2e0caef161642c6f86e75872b4b59ae00e9b8e86857e1ccc8e5da5ffe26ddd31252a8a1e49fcf12c907e0b3737d3e1ea4e2f9608ad2f88f8be3aacde035740b14455bcbabda1bb72b4672adffc55c938e117b399ad6110a28f5b1a1ee78c8fe18d6a817128238f745b03843f42ffd57fc2cba030000",
    ],
    [
      "ETag",
      "0D3sZ66LzQpVDuJGEzhL5w==",
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
      "Wed, 22 Dec 2021 19:31:37 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1640201496623"
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
      "02ff9d946f6fda3010c6bf8bf796203b7f31525fc0967648296b43fa66533599c4405a8833db296288efbe4b5a91b0796cf40d392ecfcf8fef0e6e8f9ef322434334cf973f2a2e771f965cdfd741cc55b5d60a1ea52814473dc4355b82d25ebcd0e7d5e4faa79bc7fed7e87e1ce9b1de5e5d8142a52bbe6168b8478b9caf338586dff6a8601b0e589e8140efca3a9e4c93f0268c21b111599d983e44d1681c85e8d03b0292a74266df2fe6ca4aa62bd6dcf80d9b25f1647a739e621b5115ba65aea32fa3e43c9231dd31f9344ac2f37aa5d9a66c8164721bce92d1ed9d897a3cf4d09398c77cc1252f525ef7b494e289a77a528f4bc1516b6e2901c572851a71f36229455532298405198b58c477b18d894b7ddf7640b71629d3b92840fa3083db212d345bc7620bc34204834236310c6ed17cbe40de69ca388d665ab2ed9c4bb93ba6ec3e6e6370b5b06de196207d6f80038750ea7a216d6aec9a9016f62e75e9b0b50b711c3fa0aec924787f291db631a12ef18c269ea1905109f36abdfbc4fdb355de69ab2876a108cf0f4c75d82d7e8947876b6af03035d740e83b0de889814d88eb980d5add5fce07ded02472da24cfa3c4787ef0cffb9bcfff6dc83808bc6608036a3019187e4dff6332383521be43cd4d6a59f712830ed718f803fb3885c7b7fffc78a7b9ba9302f687e2f5eac0af6be4a3a8570bacb6a19615efa194c156ff9cebd7ef875f05f7050a32060000",
    ],
    [
      "ETag",
      "2fv9khIFz4iR6ZLQBLtBtw==",
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
      "Wed, 22 Dec 2021 19:31:37 GMT",
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
