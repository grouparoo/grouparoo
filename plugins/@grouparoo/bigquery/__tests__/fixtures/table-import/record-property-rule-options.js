const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1636475691664";

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
      "41",
      "72",
      "82",
      "300040d1bb646d1d5a4492ee888276024a11d476c3048c0411080953219ddebd4eaf51df05feea7f039ae74ca9b46f2bd6805730d21734cda74440ecdd8aec94f14417e2588a65cd3addb65b5c2d140cf9a5ca9da0ba0ef0c265e620d331ca9be77c2edc1537c9a955b17e5e6e9a4091dd00b7e94744b9210f732856e3a6b6ca731747e3be7f3bbddb7beee2822b23ea68aa12b3bdc7f2a01bd7beab6acfbe5ab6779cc5b0f25771837b02eb5da1d7da133884913c6b8e9a2cd0dc9715b58eb13e6ceb0419c4fe72c97cd9423483f1de9c4b9f944f0d946148a70f0fff179800368852329596f7db4d0ba109f85b3fed47c1eeff63462593e0e717a0f727d019040000",
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
      "Tue, 09 Nov 2021 16:34:51 GMT",
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
      jobId: "grouparoo-job-1-1636475691664",
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
      "6d",
      "4f",
      "db3010fe2b95f76da2cd5bf3d24a6843906d19a5ddd274d3f6056cf7120c699cda0e1342fcf79d1b28b049f0adf13d2ff7dc5defc8b568d6644a98a8b61da8db7757929103028656f89a2b79fa75f16d91b559a1d56fff4bbc4d8ba3c3434408cbd274d3d630d4b2531cf474b51c554a762d55520e5168e80dbd2888c671184dbc281a234d435dce44738de44b635a3d759c47eb51256555036d851e71b9d9bf3b37bed32a7905dc68e7a5a38326da79d5f3432d3935423687ab25fa771ad4396ca8a8b18327e29a7d7ca93c127433aa107c233850ce65d718db154a70d994a2ead44e954cefc8aecb673fc8329da5c7c5e0fde053be381b5cb4a8784935e88bc12c3bcb8a81e7a2cc1ab411cd4ea4a0ac062bf01033fb7fb696400d8af4c5f3d88da897b81356b298974910b2d205c612168734602e9f8c61bc66409167acfa8e451bd904dec44d023f08c32849c6c1047cee5137f43de68734a431a71c229e44e4fe80fc51c2c089d0add4a20f4b7ee659919e17f96a7e7c54a4bb1825ed6a73d23767433cefd3604804bd92ebde568544273bb96c5ea4f9d17191fd48fb65cda0a2fc76b9c57595b4d680705c7271dbe2bcc8f7559aff22fd530e252868f8db7344f0aef0d6a93e1e0e42f174d0451bfcc6a5716d3db8827e7962637b79624fc676bd0856e6df9aef4631d6f607631561038d7908d41f0eb97f30ebf41e64ff8cabf93c9b7fc6ea5fe8dc8114b6030000",
    ],
    [
      "ETag",
      "RroKJOPOIpITsrZ2H7qETA==",
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
      "Tue, 09 Nov 2021 16:34:52 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1636475691664"
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
      "9d",
      "94",
      "51",
      "6f",
      "da",
      "3010c7bf8bf74a989dc40946ea43ba650589761d84974dd564120361244e1d6715457cf75dd28a84cd63a32f7039eee7bfff77e4f6e8479a27688816e9eab1126af76e25f4973a988ab2daea12be0a999702f590d07c0595cf6e46b07a3f4abeae479bc7395e85633f0eaeaea0a28cd722e368b847cb546c93120dbfed51ce3301589a4081de15753cbe8bc29b700a894c2675e26e3e9904d793101d7a47408958aae4fbc55c51a978cd9b1bbf62b3683abebb394ff14c56b96e994f93cf41741e49b8ee887c0ca2f07c7da97956b44034be0d6751707b6fa21e0e3db4918ba9580a25f258d43d2d94dc88588feb719570d45658a504b3a2444d71f3c34ac9aae04a4a0b3216b188e778ae4f3d463ccf85baad8cb94e650ea5f319dc0e69a9f9762a9f60588860a8504d0c835b369f3f21ef34364ea39956fc692194da1d53761fb731b6b1856d0bb704e9d301f61dc2984b43d678ec8a9016a697aa74d85a85388ee733d724e2bfdd4a876d44984ba851841a8c0405ccabd5ee13f7cf56d1d35631ec8209eaf9261f768b5fa2d1e11a0f1433b307c2de28c04e046c425cc72cd0d6fde57ce00d4d22a74da29411e3f9fe3fef6f3effb72163dfa7cd1006cc203230fc9bfe4764702a022f293337a965dd4b043a5c23e00dece3141e5edff9eb9d16e5bd92b03f4a51af0efcb2463ec87ab5c06a1b6a55891e8a396cf551aa5f9e0fbf0085ebdd9232060000",
    ],
    [
      "ETag",
      "z4m10r/HdZhHjqU0gEI7cA==",
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
      "Tue, 09 Nov 2021 16:34:52 GMT",
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
      "300000d0bb642d8c062949770d6dca277c44e874d83014a3460cc6c808d8e9ddebf41af5dde17d83ba69f8e552f5a79677e0194c35c46663860a113aec8bb7ce3d04e4687d2c628ad3da53ec4657ca28dd5d3a0e2c73a7c399e550ec460987b073a86f941d0e0b6af7a19dd0d3576ba00d63e741439c96914593f0b8849970a47c8a5661a2d7dbd683197ced159e43c2b23a72ad512ed135b879ebd5a44edbab45e05a069f4474058b0cd66d260cfd7cf02352be8fc8299ca250c868b57018cc83d8af7c5a92bd76d98beaa53cc43c5fb816cad13cdd79c27c78f8bfc00cf05109cd2f95b86fb76c8c67e0af7ed54f8adfff135e6baec1cf2f447af33819040000",
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
      "Tue, 09 Nov 2021 16:34:52 GMT",
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
      jobId: "grouparoo-job-2-1636475691664",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85525b4fdb3014fe2b95f7b6d1e6d6a449a56a43259b22b59d48d34de3a5d8ee4930a471b01d5087f8ef3b49a00321c15be2ef766e0fe446543b32254c14b70da8c3a76bc9c80901430b7c8d9a0bbaf8522f6e22ffb45cfe558ebac8e6e7b3193244abd2745f9730d4b2511cf474b31e154a363555520ed168e80e9dc00bc6133f889c2018a34c43992f447583e22b636a3db5ace7e85121655102ad851e71b93fbe5b77ae552b790ddc68eb75a28521da7a37f36b2939354256b3cd1af31b0d6a0b7b2a4aace0bf70c7bebd761e09ba1f1548be131c28e7b2a94c5b155a7059e5a26854e74aa60fa4abf2c50759c78b789e0d3e0fbea73f9783cb1a1dafa8067d395824cb241b3836daec401b517526196525b4064f6d266f67db0aa841931edc4eec803aa11db19c4d781e7a3ecb6d602c64139f7acce6d118c63b061475a675ef54b49295e74476e8b99eef076138f62270b9436ddf7598eb539f4e38e510f030208f27e45e09036742d7528bbe59f23b4db2789ba59bd5fc348bbb3672da94e6ac2fae6de2659d069b44d23b7d3db6a89098d44e2e5965717a3acf925f71bfac0514941fd6b7b8ae9c961a908e4bce0e35ce8b9c6fe2f40fe99f52c84141c53f9e23923be0a3537d3e1ca4e2e9608a36f88f4be3bacde00afae5897d5bcb51edfa51443ab2326fb0891322763c98d611f65099a786fac3218f4f618d3e9210c499af92d50f44ff01d3409e1db6030000",
    ],
    [
      "ETag",
      "9uZaL+pLk95AlMzr1rZTCQ==",
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
      "Tue, 09 Nov 2021 16:34:52 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1636475691664"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff9d94516fda3010c7bf8bf74a589cc40946ea035d338a46691bc2d3544d2631346d8833db698510df7d97b42261f3d8e80b5c8efbf9efff1db91d7ace8a140dd1325bffacb8dc7e5a737d5f07115755ae157c95a2501cf510d76c0d95cfd9f8457fbeba9e2d3235f92672e6e4d3f5fdc50554a8e4916f181aeed02ae379aad0f0fb0e156cc301cb5228d0dbb28e27b3381c8711243622ad13b3c5743aba9c8668df3b00922742a63fcee6ca4a268facb9f13b368fa3c96c7c9a621b5115ba65be4e6f47f1692465ba2372358ac3d3f54ab34dd902f1e4269cc7a39b3b13f5b0efa127b18cf88a4b5e24bcee6929c5134ff4a41e9782a3726e290166b9424d71f3c35a8aaa6452080b32966361dff5bd80f814fbbe0775b94898ce4401a58b39dc0e69a1591e89571816c23654c82686c1ad9acf17c8bb8d8de368ae257b5d7229b78794d3b7dbd8766ccb762cbb25709f0cecc0c5947a24a48dc7ae086e6172ae4a87ad55b0ebfa01f54c22c1c7ad74d846847a98184588c1c8a88479b5da7decfdd92a72dc2a6a7b6082f881c987d3e2e76874b8c603b1a9d903a61f14a047020ec69e6b1668ebfe723ef08626e1e3261142b1f1fce09ff7379fffdb90ed2020cd1006d4203230fc9bfe4764702c022f293537a965bd73043a5c23e00f9cc3141ededff9cbade6ea4e0ad81f8ad7abc37e5b235f44bd5a60b50db5ac780f250cb6fa75a6df9ef7bf003d59d61a32060000",
    ],
    [
      "ETag",
      "kiGvt/DHNUisIKola2lLgQ==",
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
      "Tue, 09 Nov 2021 16:34:53 GMT",
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
