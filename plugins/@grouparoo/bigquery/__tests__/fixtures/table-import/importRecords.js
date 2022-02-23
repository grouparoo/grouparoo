const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1645646000696";

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
      "d44b7282300000d0bb642d0c2abf748720f2b11d9416309b0c60ea0f4cf809c4e9ddeb74db2bf00ef19e20cd73d234b8a53772076f604c1750ccc54c329287c43f834375ed14280f5f4eef50851af03ce77de1847797d6c86fdf356a66a1e7e7dd5a3e5848e0c662b18e31f77cf58336d74d1abaf1a8a986ea09812e632d834354165ba48e96e67a377347b854a326dce84c1078b68cae0f9d754d75188216b58a3bec24eb848947837d9df1889b55b1e5c74428f11e5d94b32cd3ddb1f24cd821cd8673665589b1ae5c9b943e36626765666a6723b68ddbfbc95ed1827fbb6a2a3cf6ac172793c93f6006c8c02e3569f0e5f5c152817006fe72c0edc8c86b8815496b52839f5f4c246a243b040000",
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
      "Wed, 23 Feb 2022 19:53:23 GMT",
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
  .get("/bigquery/v2/projects/sample-sources/datasets/test_001/tables")
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
      "b5",
      "92",
      "41",
      "4b",
      "c3",
      "301886ff4bbcaa344babb5b0c3040f830e61543c8848967e8b99691393afc228fdef7e9bd41df430063be6cdc3431e48cf3e4c5bb382ad8cfeec206c2f50ae2c942622bb648052d3dd6266dd9736cf952f97eb45feb479d436eae994883d1d59f1d2ff2f22c4ecd6281b6fe12aba2e28880542c4b724e1d75229d7b51847d512d610a055c08a9ef9e036a070fe5740782d5146f8b91c75a3653ffeaa075ab79e8cac9add970f04a900128d6b2bd3ec667e932693446482e7935bc24f6cf1747ea7379d23e6e03eb2868bbb948bf4f49a00ca85fa1c2da3f9e8929c679960c32bf10ea59d2334f4e5c4f00d3b88cf78bd020000",
    ],
    [
      "ETag",
      "MAlovgiWTpLRfM8UjOglsg==",
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
      "Wed, 23 Feb 2022 19:53:23 GMT",
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
  .get("/bigquery/v2/projects/sample-sources/datasets/test_001/tables")
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
      "b5",
      "92",
      "414bc3301886ff4bbcaa344babb5b0c3040f830e61543c8848967e8b99691393afc228fdef7e9bd41df430063be6cdc3431e48cf3e4c5bb382ad8cfeec206c2f50ae2c942622bb648052d3dd6266dd9736cf952f97eb45feb479d436eae994883d1d59f1d2ff2f22c4ecd6281b6fe12aba2e28880542c4b724e1d75229d7b51847d512d610a055c08a9ef9e036a070fe5740782d5146f8b91c75a3653ffeaa075ab79e8cac9add970f04a900128d6b2bd3ec667e932693446482e7935bc24f6cf1747ea7379d23e6e03eb2868bbb948bf4f49a00ca85fa1c2da3f9e8929c679960c32bf10ea59d2334f4e5c4f00d3b88cf78bd020000",
    ],
    [
      "ETag",
      "MAlovgiWTpLRfM8UjOglsg==",
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
      "Wed, 23 Feb 2022 19:53:24 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query: "SELECT * FROM `records` LIMIT 10",
        defaultDataset: { datasetId: "test_001" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-1-1645646000696",
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
      "52",
      "5b",
      "4f",
      "db",
      "30",
      "14",
      "fe",
      "2b",
      "95f736d1266dd25c2aa10d41982295a2b5e9a63d15db390e86340eb6c314a1fef79d24d08190e02df1773bb727722fab9c2c0893c54303bafd72a7183921606981af4d0bd7cbabba6def6e69996697db8b76d39e9d9e2243762a43f7750963a31acdc12cb69b49a1555353add4188dc6d3f134f0e7811fb8ae1bc401ca0c946229ab7b14df5a5b9b85e3bc444f0aa58a12682dcd84abfdf1dd799c39b55677c0ad71de263a18629c0f33bf958a532b5575badd607e6340ef604f658915fc17e6ecfb5be789a4fb4981e447c98172ae9aca7655a10557959045a37b57b278227d95af3ec8265926e7d9e8ebe8727d7d35bad1c095cecdcd68995ea5d968eaa2490ec6caaab7c8282ba1933f3799be9f6c27a0961a18c05de806741ab931132ce422f2e64cb8c058c4c239f598cb631ffc9c01459deddc7b15ad5415879ef044eef9b1001ad18845f3c817732a721efa3c16f92c8ce75e38238713f2574b0b17d2d4cac8a155f27b9d66c92e5b6f57e76759d2b7216853da8ba1b8ae89d7755a6c72e7ba53247ed0dba143a5c2b46e76e92a4bd667e759fa2b19d6b58482f276f3800b13b43480745c73d6d63833f2739bacff90e1690d023454fcf35922b9073e3bd697d3412a1e0fa6188bffb8386eba0cae6158a0dc77b51cd5fe2cf0494fd6f61de6452162c793e91c610f957d6e68381d72780e6bcc918420ce7d95ae7e20fa0f145e735db8030000",
    ],
    [
      "ETag",
      "uyeOLMpyyjhalITFUDySyA==",
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
      "Wed, 23 Feb 2022 19:53:24 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1645646000696"
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
      "000002ff9d976d6fda4810c7bf8bef6d58ed7afdb448958e240ea547480b54957aaaa28dbd980dc64bd74bee5094ef7e6327f1837039dc37b0339e21f3f37f66ec3c5b1b99c5d6d07a90c9cfbdd0873f1261be1487b9c8f7a9c9e16ba7b25c581796303c81c8f0e7cd6631ce67ebccdecdbe6ff8e1db927d493e7c80883c5a8b2db786cfd64a8a34ceade1dfcf56c6b702d2640c01e6b02bce93d9321c8773706c555c38665fa7d3d1e534b45e2eaa041e456a9f99fbde892ba973735f1a55e262399fccc6a7f352fe5b69402cd37e2989c862a1fbe5c8dd3d8f632df2bc679ecaeff96e57275ddedd4dc3d1ec7f6e7e166b25e3dfc87c927d3352f35467dc4cef46cbd3f131370d89ae47cbf0747c6ef8b651d372721b2e96a3dbcf5d593f5e2eac47f530172ba1451689a297775a3d8ac84c8a31c9e1a75231c8d55e47a2500282cb0b8956fb1dd74a0dc0332003e239aee77818638f791097aa881ba93208fdba80ea2ca30c4fe7ea1f18128b6088d0e5190666557e3e813f28318a935d9dc6421b292af36aff208da9cc242a6dff4ff16f59298ad4b6ba7803ad9ad6a9c4a6c8765d442846b653b9573ccdc52f2ca3f7b5113804396e5d22b6f100db035c574d901b10e251c69c909537b74947eab8ea14ea06db27a19f94cc2b5b3cbe3a7027dd6d8bcd05241fd100f97677f527c06c9721621f83911618765d463ac16807d8580b23d286a9f6918a36b570c99bc73e473a9b1014409104837a4e6f40cf0b103de6a36d3e9f1210cef5fc0e44afa333af45262b6311f154f2ca8cf3d276cfea4b508d50828803eaf587b37d8a58704ce7b5e91823ddeab10eb4e95ea74264957d09c32ad25acef4e1d5119c255ec1062d06a3e7d073f0da960763dbd0bce2632d3e62bb9876f2d55475775ef148a68dc90b8b15fb6e44022c7216994b41350fc162b01bd37242acf625e620ea1d93d96de560b3bad0971d686e977452d76df849adb3dca85ac8f4f1cde39cc357e079450d88b1fe74815da41fe3b96d3c861dbf1cbb80752d4d5c45d7bd73adb4591f2a73d2428c65",
      "61b273f89c626b12e4395027ed0f68338cdce3bdd228b9ec4c4a3dbfb333eba6ae7b67b4e5a6d6ef4a1991af948e2b0f8fde5df4acddc260390064f1c4f3ba997e6d38b072f1b17e4e5bbf8004f455bf0e44bfa3433f8a34a911ff4a45e391b7de14a6770e5a50881720d89d6ed09b0cfb08773ccafdb672d8f7dd77e57ebcbdc25c1ee0fe7fd60a5e877211971d0a5bad7c31ba5245cdb04986c51fbbb0220eff1f7c94c61a967df3f21f94d367407d0c0000",
    ],
    [
      "ETag",
      "EqFkSGsNhn2pNZkayWT9Qg==",
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
      "Wed, 23 Feb 2022 19:53:25 GMT",
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
  .get("/bigquery/v2/projects/sample-sources/datasets/test_001/tables")
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
      "02ffb592414bc3301886ff4bbcaa344babb5b0c3040f830e61543c8848967e8b99691393afc228fdef7e9bd41df430063be6cdc3431e48cf3e4c5bb382ad8cfeec206c2f50ae2c942622bb648052d3dd6266dd9736cf952f97eb45feb479d436eae994883d1d59f1d2ff2f22c4ecd6281b6fe12aba2e28880542c4b724e1d75229d7b51847d512d610a055c08a9ef9e036a070fe5740782d5146f8b91c75a3653ffeaa075ab79e8cac9add970f04a900128d6b2bd3ec667e932693446482e7935bc24f6cf1747ea7379d23e6e03eb2868bbb948bf4f49a00ca85fa1c2da3f9e8929c679960c32bf10ea59d2334f4e5c4f00d3b88cf78bd020000",
    ],
    [
      "ETag",
      "MAlovgiWTpLRfM8UjOglsg==",
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
      "Wed, 23 Feb 2022 19:53:25 GMT",
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
  .get("/bigquery/v2/projects/sample-sources/datasets/test_001/tables")
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
      "b5",
      "92",
      "41",
      "4b",
      "c3",
      "30",
      "1886ff4bbcaa344babb5b0c3040f830e61543c8848967e8b99691393afc228fdef7e9bd41df430063be6cdc3431e48cf3e4c5bb382ad8cfeec206c2f50ae2c942622bb648052d3dd6266dd9736cf952f97eb45feb479d436eae994883d1d59f1d2ff2f22c4ecd6281b6fe12aba2e28880542c4b724e1d75229d7b51847d512d610a055c08a9ef9e036a070fe5740782d5146f8b91c75a3653ffeaa075ab79e8cac9add970f04a900128d6b2bd3ec667e932693446482e7935bc24f6cf1747ea7379d23e6e03eb2868bbb948bf4f49a00ca85fa1c2da3f9e8929c679960c32bf10ea59d2334f4e5c4f00d3b88cf78bd020000",
    ],
    [
      "ETag",
      "MAlovgiWTpLRfM8UjOglsg==",
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
      "Wed, 23 Feb 2022 19:53:25 GMT",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1645646000696",
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
      "ef",
      "6f",
      "9b",
      "30",
      "10",
      "fd",
      "57",
      "90f7b549c82f4222456b94d2152d211b90b6db3421630ee61630c5a65355e57fdf619aa8dda4f513b6efbd7b77ef8e6772cfcb842c48ccb38706eaa70f772226670414cdf0352b6edde2eefb0dfbbc4b57552ccc07f736582d9788e02d4bd2a2caa127455333908b7dd0cf6ad154b416a287897aa3ded09a4cad89659aa635b79026214f37bcbc47f22fa52ab9180c8ed2fd4c882c075a71d967a238bd0f1e4783aa1677c0941cbc551ca0881cfc57f3632e18555c94cb7d80fa8d843a8282f2bc6def444ce2f3b799fb9c16fd0cc18f9c01654c34a56aabc2144c9429cf9a5a67258b67a2ab7c752081b371d6a1c144de146554d202ce8c842a1aa9a70a8c4b7fb7355cef72e76f57a1bbf3a2607de56c57fdf56eb3df7a817173e5f88ea1689c83e61a4be35cdf3cbca07e0252f152ab87ed73abfce28ffbef505a024a4be882d1ccb4e8d036e7711acf586a8fa7716a421cdbf16c4ac7b1c9e61398243150e46951cda2a5282db053db4c66d12c89ad6862313bb2f11e8d27c9680e2c9e8da9450e67e477cd155c705909c93b87c88def864e14fa7b6fbd0a1ddd424a9b5c5d7485b50dbcae51618391690e11f89fbe0e6d940b546b2d77bdd0f157ebd0bd76ba296f20a3ec2978c039a7349780685aa3810aeaad48d034e2adb6ce0582f5d4be1c83922c7e3c93d6f7b69257b69fe8210eb12d59e92f0942dff53ee9728e886b9a371af2d81d480d4cd409d67cf88938dcd22e07f9ba77fc6fa47bf221851a4af6fe3c11ac03effd6bc7cd4728ee3eaa4885775c1e265b0d5643b7445cf77a624fe7c339d1e05afd1db3ccd1f868599ba3",
      "cd080594eaa5a16ef3b1cf4eac9127100671fe9eb6eaf00764699c3e77040000",
    ],
    [
      "ETag",
      "gmXImjZWcKOfApbo0qIXSA==",
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
      "Wed, 23 Feb 2022 19:53:26 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1645646000696"
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
      "00000002ff8d93514fdb3010c7bf8b795c2aa55032168987160a740b2d6bc3c336a1c8d89760707c99ed74eaaa7ef79d03eba63129bc2477e7df29777fffb3654fca4896b27b557d6fc16e0e2af09f43b004d76aefe8d5a071c022069e57443ebccb8fce4f0e9f84fbf4f14aaedb6cf2f3cbd7eaf49408271ea0e62cddb25281968ea5dfb6ccf01aa84da06e6b537459c4fca609c555be9ccd2f29af51867c7e9b65e3493665bb68df28b9e745c7bfa1ed6e17b147bc5f4209168c80304b63f111849f85351daf1b0d0387ad15e05807770795c5b6e116714095c1e160988c8e935112c771f221214ea3e05ea121f47645e3318f9eeb25fea025d9f08808dbc5b470d93dd75457b25b2484b3799e8cbaf9fe06b810d81a5ff482a5b2ce3f8bf71b7c11e15f52f3378274534af741151809b68f524dc1a5b4e05c2f89aee04db3c7268b45f65a15232d2ad90fae550fa0fd7a0f5c648bf1ffa4257ffdd1ea7c9c4f5f11ce936bf6483ebb9eaef2f1f54de0ee5e8c30d978703716c9540e829f86f1e8e4f87d123f5bec0c83ede83ba9b72d444c70fa53ae946769c9b583dd2f9c8fabb587030000",
    ],
    [
      "ETag",
      "h+T3D82kcsKJHdvuLBzYZg==",
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
      "Wed, 23 Feb 2022 19:53:26 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query: "SELECT * FROM `records` LIMIT 10",
        defaultDataset: { datasetId: "test_001" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-3-1645646000696",
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
      "85526d4fdb3010fe2b95f76da24ddaa479a9843604198ad415ad4d37f1a9d8ce397349e3603b0c86f8ef3b37d08190e05be27b5eeeb9bb07722d9b92cc0893d54d07fafed356317244c0d20a5f2feea016e398cffffadbf3cb9ac2ea2ed956c7c788908e65e8aead616854a73998d97a35aab4ea5aaa951aa2d030188ea3701a8591effb511a21cda0e05c36d748fe6d6d6b669ef76c3daa94aa6aa0ad3423ae768777ef76e2b55a6d815be3bd76f4d0c478ef7a7ea915a756aae678bd42ffce80dec08eca1a3bf84f2cd9d7d7ca234977a30ac1b79203e55c758d755da104578d9055a7f7aa64f640f65dbef820ab6c9e9d1683cf836fcb8bef832b0d5ce9d25c0de6f9f7bc188c7d1429c158d9ec250aca6a70f4a790f9dbc93a02b5d4405fdcc47e44c7899f32c1622e9260ca840f8c252c9ed280f93c0d212c1950e459a7be67d14635691c88409441980aa0094d58324d4231a5a2e471c853514ee2741ac413f27844fe6869e14c9a5619d94725bf9679916d8ae57a717a5264fb188276b53deb9b73215ef66931e4c6f7c7087c27dba3ab4a856e6e76f9a2c89627a745fe33ebd735878af2fbd50d2e4cd0da00c271cdc57d8b33233fd6d9f292f44f4b10a0a1e11fcf12c1fbc247c7fa7c3a08c5e3411763f11f17c78df3e01afa05ca9debe5c08ee2898b8c606ddfd492895bffe1649c22eca0b14f81fad3218f4f669d3980b088735fe48b73acfe03e4d91f0ab8030000",
    ],
    [
      "ETag",
      "Oxelf17cLz0jGYlaeSx8jg==",
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
      "Wed, 23 Feb 2022 19:53:26 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1645646000696"
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
      "97",
      "6d",
      "73",
      "da",
      "38",
      "10c7bf8bef6dd04996255b99e94c49a0293d92f4087dd39b4ec6b1053131162789dc31997cf75b99c40f83cbe1be01ed7a97eccfffddb5f3e23d6545ea9d7b0fd9f2efadd4bbdf96d2fee90e3369b6b935f0b5518591de99276dbc84c848e0dff948e399f9be5bf1899cdd8ee862f9e1034498e451ae63effcc55b64324f8d77fed78b57c46b0969590a0176b771e7c9cd7c7c359e8163ad52e7b8f9369d0e2fa663eff5ac4a8893446d0b7bdf3b71916963ef4ba34abc9bcf263757c7f3f2f897d28038cbfba52c65914add2f27dbdcc769aaa5313df394b98f379b3ae9e2f6763a1edefccfcd2f52adb2f417329fb3be19b97dae333e4d6f87f3e3f1696c1b128d86f3f1f17863e375a3a6f9e47a7c371f5e7fedcafaf17ae6add4c34c2ea49645225d2f6fb45ac9c44edc9818f8a95c0e8cdaea443a2520b8bcb0d46abb89b55203f00ce880f080f180638cb9e01097ab24b6992a20f4db1d54e75965e37ca6fe8121f10886085d9e616016e5e7b31bb512c39dfcea7425b5cd64655e6e1f326b2b73999476f851fe5b568a12b5ae2e7e8256cdeb54e253e4338608c5c80f2af722ce8dfc8965f5b636a280a080d525621f0fb03fc075d504b188104e8508c6a2bcb94d3a52c755a7b16eb07d91fa5965a6b2e56aefc09d74d72d36064821a2110afdeeea8f80f94c20e21f82911618664c904e30da0176a5a59579c354db44254fb570cb378f7f8a743e212882220906f582de809c47881ef2d1365f480908c778d881c83b3a73248bac32ee9238cfe2ca4c4d69b393fa125423942012807afde1fc9022111dd2f1369d10a45b3dd18136ddea5ccaa2b22f6058655ecb993fec1dd149e23936683118bd809e82d7b6",
      "388c6d43f38a4fb4f888cf30ede4aba9eaeebc8c932c6f4cded8add8772391609193c81805d53882c5e037a6e58858ed4b2240941f92f96de560b332e8cb0e34d6255da6eb36fca21e0b63552d64be7af304a7f0393cee6a4042f4a78b7c977e88c7da78020761397691e85a9ab88aae7b67a4b47ddc55e6a4859866ce14a7f0056e6b12c403a893f607f40546ec70af344a2e3b93521e767666ddd475ef0cd7b1adf5bb54569a85d269e5899377173d69b708580e00e99e78bc9be9e746002b171fea17b4f58b4844f7fa7520861d1dfa59e6cb1af18f5c361e798f4fcee4a7a0454ebc08c1ee64516f321c22dcf1280fdbcae13064efcafd787b85b9d8c1fdffaa15bc0e19e9de84f0feade852b982618d9cbbbf74e62531fc73f039b37bfbf53f9b7bb525790c0000",
    ],
    [
      "ETag",
      "890/6Dr0RsZyj6IeROD3fg==",
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
      "Wed, 23 Feb 2022 19:53:27 GMT",
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
  .get("/bigquery/v2/projects/sample-sources/datasets/test_001/tables")
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
      "b5",
      "92",
      "41",
      "4b",
      "c3",
      "301886ff4bbcaa344babb5b0c3040f830e61543c8848967e8b99691393afc228fdef7e9bd41df430063be6cdc3431e48cf3e4c5bb382ad8cfeec206c2f50ae2c942622bb648052d3dd6266dd9736cf952f97eb45feb479d436eae994883d1d59f1d2ff2f22c4ecd6281b6fe12aba2e28880542c4b724e1d75229d7b51847d512d610a055c08a9ef9e036a070fe5740782d5146f8b91c75a3653ffeaa075ab79e8cac9add970f04a900128d6b2bd3ec667e932693446482e7935bc24f6cf1747ea7379d23e6e03eb2868bbb948bf4f49a00ca85fa1c2da3f9e8929c679960c32bf10ea59d2334f4e5c4f00d3b88cf78bd020000",
    ],
    [
      "ETag",
      "MAlovgiWTpLRfM8UjOglsg==",
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
      "Wed, 23 Feb 2022 19:53:27 GMT",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-4-1645646000696",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8553616fda3010fd2b91f7b54028210124b4229a8e4810ba105a4dd314d9e692b98498c60e5555f1df77710a6b55a9fd14dbf7debdbb779717b215c5868c0813d96305e5f3b707c9c805014d337cfd1b805315dba99a3b0fdbdb839ccda630c9c66344889aa5e86e9f434bc9aae4a046eb553b2b65b5a7a5942d4cd4725a5dd7e9bb8e6bdbb63b7491a6204fe7a2d8d6c9b5deab51a773926e67526639d0bd506d2e77e7f7cee1b2b32fe50370ad3aef153b28a23a9f6a7ecf25a75ac862bc5ea17ea5a04c6047458e15fc276ed8d5fbcc6d4177ed0cc107c181722eab42d755610a2e8b54645569b292d10b3155be3990953ff7a7b1c5655eed8aa4a03bb8b03654d3443fefc1ba89960b2b086f96d1621207cb30594d67fe62d29e2ee7eb45b8b2ee677ee45b9ab21c0cd71a5b57e616e205f537a0b4288c7a5c3fd7caaffe041f875213505a41134c3cdba5dd813d6429f3783ae8f5596a036303e6f5698fd97ce880b361409167440d8b16b2f02ed9d075bb6e422f3d9a38ccee27cced0f93de608086f71cdb8601395e90a75268b8166a2f95681c22f75110fb491cadc3e924f64d0b29ad727ddd145637f0b6468d0d26b6dd45e0277d1deba890a8565b1e84b11f4da67170e737539e4346f9f3ea11e79cd25c01a26989066a28177283a69170b2f0af116ca6767b0a2a32fafd426adfeb4aded87ea6c738c4ba646dbe64154741f8c3947342dcd1bc32904373202570596eb0e6e31fc4e1963639c8cfb51ffd22cd5304299450f0afe7896013f8ea5f3b6d3e4271f7514569bce3f270556bf0129a2512a6d733db735d8f1870a93fc4bca177b2acce5167841d14fab5a166f3b1cf46ac5267100671fea1b1eaf80f80d96b0d77040000",
    ],
    [
      "ETag",
      "hIe4unkCsL4jkPvoHHCeAg==",
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
      "Wed, 23 Feb 2022 19:53:27 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1645646000696"
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
      "02ff8d93616f9b301086ff8bfb95a844a36c43ea87a4cbd6a834e908ada64e1572f1c19c191fb34db228ca7fdf9976d9b44ea25fe0eefc9cb87bfdb267dfa5162c618fb2fed181d99dd4e03efb2003db2967e9d5a2b6c002068ed744c2ddcfa5c8378dbbbaba5c6fbf64a7f51dde6fcfcf89b0e53768384bf6ac92a08465c9d73dd3bc016a2b51758d2efa2c606ed7fae22acfe68b4f9437287cbeb84dd3c9349db143706c14dcf1a2e75fd1f67008d81a1f33a8c0802ec1cfd21a5c43e9e67e4dcb9b56c1c862674ab0ac87fb83da60d7728338a2ca281a8de3e82c8ee2300ce3f731710a4bee246a426f57341e73e8b8ca704b4bb2f11b224c1fd3c255ffdc505d8a7e111fce17791cf5f3fd0df0b2c44ebb6210aca4b1ee49bcdfe0b308ff928abf12a49b926a08aa410b3043946c0b2e84016b0749b4056fdb23365d2ed397aa6861508a6170230700e53647e063ba9cfc4f5af2d71fad3e4cf2d90bc23a72cd11c9e7d7b3553eb9bef1dcc3b311a63b07f6c62099ca82f7d3388cde9dbd8dc3278b5da0b71d7d2771a68380959cfe944be958527165e1f00be73cdd4487030000",
    ],
    [
      "ETag",
      "eVxOdTvmtKKHjwXR/gVoZw==",
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
      "Wed, 23 Feb 2022 19:53:28 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query: "SELECT * FROM `records` LIMIT 10",
        defaultDataset: { datasetId: "test_001" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-5-1645646000696",
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
      "525b4fdb3014fe2b95f736d1266d73ad84b6aa4d47a452b4341dda5e8aed1c6786340eb1034288ffbe93043a1012bc25fe6ee7f6486e649991196132bf6da07ef872ad18392160688eafabb3f07279fb27cdce82ddfd72be6a929b95c84f4f91215b95a687aa80a1564dcd41cf76db515eaba6a2b55243341abac3b1e7b89ee3d9b6ed851eca3414622dcb1b14ff35a6d233cb7a891ee54ae505d04aea115787e3bb7537b1aa5a5d0337da7a9b686188b63eccfc56284e8d54e5e96e8bf98d867a0f072a0bace0bf3063dfdf3a8f243d8c7224df490e9473d594a6ad0a2db82a85cc9bba7325b347d255f9ea836ca375b448075f07abe4e27c7055035775a6af06ebf83c4e07631b4d32d046969d454a5901adfcb9c9f8fd645b013554430fee7ddba3e3c00e99603e17c1d465c206c602e6bb74ca6c1e3ae0640c28ea4cebdea968a9cad09f8aa9c8a64e2880063460811b38c2a522e3bec343914dfcd09dfa13f27442ee6b69602975a5b4ec5b2597499c46fb34d96d16f334eada10b429ccb22fae6de2759d069bdcdbf618891ff4f6d4a252615a3bbb789346c97c91c6bfa27e5d6bc8297fd8dee2c2042d34201dd79c3e543833f2731725bf49ff9480801a4afef92c91dc019f1debcbe920158f0753b4c17f5c1cd76d06afa15fa03cb4b51cd5813bf64947aecd3bccf326881d4fa675840394e6b9a1fe74c8d37358a38f240471ee9b78f303d17f8243cdf9b8030000",
    ],
    [
      "ETag",
      "FH9WDqZTdH8UwDAFuRkFfg==",
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
      "Wed, 23 Feb 2022 19:53:28 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1645646000696"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff9d976d6fdb380cc7bf8bef6d2348b625db05065c927a5d7669bba5d93060180ad55612b58e9593956c45d1ef7e94d3fa01f172f1de24224da6fcf94fd2eeb3f328f3d43977eee5f2dfadd04f7f2d85f96c0f33516c3353c0d746e58570ce1c61f81222bf51fd95853b32a6241f7dbd9afed278a57fbe7b071145b2126bee9c3f3b0b29b2b470cebf3f3b395f0b4893290498a78d3d4faee7f1653c03c75aa5d671fd653a1d8ea6b1f3725625f02451dbdcdcf54e5c485d98bbd2a8126fe7b3c9f5e5f1bc8cff511a10cbac5fca52e4a9d0fd72e4e68ea7a91645d1334f15777cb3a993463737d37878fd3f373f4fb592e91f64ee64df8cccecea8cf7d39be1fc787cca4d43a28be13c3e1e5f18be6ed4349f5cc5b7f3e1d5a7aeac1f2f67ce83ba9f8985d0224f84ede58d560f2231133b2605fc54260685daea44582520b8bcb0d46abbe15aa90178067440984f99cf30c62c621097a9841ba97208fd720bd53946199ecdd44f1812876088d0e5190666517eeec01f9618f6e456a74ba18d149539dede4b632a73999476f0b7f855568a12b5ae2ebe8756cdea54e27ac8a514110f23d7afdc0b9e15e23796d1dbda087d827c5a97885d3cc0ee00d755134443429817457e1c9537b74947eab8ea14eb06db47a1774a16952d1ef60edc4977d562a38014202f4481db5dfd1130974688b88760a40586298d482798d70176a9851159c354db44258fb570cb578f7b8a742e212884220906f5fcde808c85c83be4f3da7c81474038ca820e44d6d19917229795719bf04cf2ca4c8bd2a627f525a8463c82880feaf58773030f45e1211d6bd34511e9562fea409b6e7526445ed923185691d57266f77b47789278960d5a0c46cff74ec16b5b0cc6b6a179c517b5f8884bb1d7c95753d5dd39e689cc1a9317db15fb6624022c721219f54035866031b88d69392256fb52e4238f1d92b96de560b352e8cb0e34da259dd4751b7e54abbc30aa16327b78f5f8a7f0593c666b4051d49f2e746dfa211e6de345d80fcab10ba3aea589abe8ba772e9436aba7ca9cb4105369cde8143edf6e4d82980f757afd01dd08237ab8571a25979de9792ce8ecccbaa9ebde19aeb9a9f51b2b238a85d269e5e1c99bcb3b69b744b01c00d23ef158",
      "37d3ef0d1f562e3ed4cf6feb1792d0dbebd781187474e807912d6bc47f32d178e4ad1eadc94e410bad782182dd49c3de643840b8e3511eb495c34140df94fbf1fa0a337a82fbff492b781d2a847d13c2fbb7a2b1b205c31a39b77fe9cc4938fc73f0419abdfdf21f788a02a1790c0000",
    ],
    [
      "ETag",
      "X5rV68v1C51nBVMLxr0hrw==",
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
      "Wed, 23 Feb 2022 19:53:28 GMT",
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
      "d4",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "64",
      "ed38095fe94e10858af211076193811828e5638414844eef5ea7db5ec17788f70d524268df637eab680bdec0940ada922c33b8be0c700e0ff3a034309025d9a9dd04224b6463ba5a497ec630552f5f45d0dac6347ffa92e0f1623dd1960b7a7f14d7891b3adc344296074c197a39cb0e2487cac67dc4cc3e8e9613c62aae698dcef39e1744f34d6610518efdc9a83c31caf2ed70afb47073de1dd02d4d826ca322d743a76807c7c6164ca1826ea38f39367d721ddccb1d358ed26a76dd45c816c771b525e5febdb81a27eb03936354459e9f27fb7ce25caa1a4b5abebcbcfc0316803e58d9d11e97cf0f4459d316e02f07cc27469f43e834ed68077e7e01ae2b06403b040000",
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
      "Wed, 23 Feb 2022 19:53:29 GMT",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-6-1645646000696",
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
      "db",
      "4e",
      "e3",
      "30",
      "14",
      "fc",
      "95",
      "c8fb4adba4a4e945aa96aa0d4b576d0a490a42ab55643b4e30a471b01d1042fdf73d71681784044fb17d66ceccb9e4153df03245134478fe5833f9f2e35e10748298c639bc5e8dfad5e5e0ee369ddfc8882d66bf2f0b6f389b4e01c11b96c2bbaa601d256a49999a6ca36e2e455d612944071275bc8ee3b903cff56cdbf6c61ed0142bb2152f1f807ca775a526bdde41ba9b0b91170c575c75a9d81ddf7b4ffd5e25c53da35af53e2af64044f5bed4fc59088a3517e5741b817ead984cd80ef3021cfc27a6e4ec63e62ec7bb6e0ee0274e19a654d4a56e5c410a2aca8ce7b53459d1e4151997ef0e28f257fe3cb6a828ea5d999478c74eac146b9ce8978a59e7e1666d2d83f34db89ec5cb4d9044f30b7f3debce37abed3a88ac9b0b3ff42d8d49c10cd79a5a67e616c005f453a6342f8d7adc3c37ca6ffd597e1e4a430069c5da6032b43dec8cec31c9c89066a3d301c96c46c8880c07f894d874ec3237250c03cf881a162e4539726d82c74e3f193904276e367612923a6ee2f6fb18dbded0758887f627e85972cd165c5542f1b643e8265cc67e1287db603e8b7d534286eb422f5a634d01ef3d6a2830b16d07805fd4b56fa25c805ad3f26510fbe16c1e2faffd76ca2b9663fa123dc29c335c2806682ca1819ac9b548a1692898adfd0580cdd42e0f4185267f5e51d3f7c6c9bbb61fe9310cb1b1accd174571b80c7e193b07c4352e6a03796a0f48322a640a9ef77f01075bdae640575b3fbc45ed53c832265949bf9f27804de0bb7fedb0f90085dd0715a5e10ecb4355a341256b97889b5a8fec717fdc47062cf5a7184cfbd0b2",
      "26479391ed58a9df0a6a371fea6cc56a75044110e61f9856edff0162518e5677040000",
    ],
    [
      "ETag",
      "Q82pP5hYdCWrSeDAJPl67A==",
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
      "Wed, 23 Feb 2022 19:53:29 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1645646000696"
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
      "0002ff8d93516fd33010c7bf8b792415a9e80c8db487761408cadaad4d5f86a6c8b32fc1c3c905db295455bf3be76c948921652fc9ddf977cadddfff1cd877dd2896b03b5dfde8c0ee5f55e0af43b006d719efe8d562e380450cbca888dcdbd7dd453add2ecd7435fec5df7c99c737f5f5f939114e7e835ab0e4c04a0d4639967c3db046d4406d124d5737459f45ccefdb50dce4eb74f989f21a55c897db2c9bcdb3053b46a74625bc287afe056db7c788dde3dd1a4ab0d04808b3b416ef41fa34ace944dd1a1839ecac04c77ab83fa82c76adb08823aa8cf868cc27677cc2e338e6534e9c4129bcc686d0ed86c6631ebd306bfc494bb2f15b226c1fd3c265ffdc515dab7e9110a6cb9c4ffaf99e02424aec1a5f0c82a5b6ce3f88f7077c14e15fd28817827453da0c4115340aec10a5db422865c1b941125d21daf684cd57abecb92a8db2a8d530b8d30380f1bb13f0315bcdfe272df9ebaf561f66f9e219e13cb9e684e4e9e56293cf2eaf0277fb6884f9de83bbb248a67210fc348e27efcfdef1f8c16217186c47df49bced206252d09ff2597b9694c23838fe0606250fe587030000",
    ],
    [
      "ETag",
      "yr+uCI9UNl9O1x6/JB0ZmQ==",
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
      "Wed, 23 Feb 2022 19:53:30 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `records` ORDER BY `stamp` ASC, `id` ASC LIMIT 100 OFFSET 0",
        types: [],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-7-1645646000696",
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
      "db",
      "6e",
      "9b",
      "40",
      "10",
      "fd15445fdaca36eb1bd896a29638b84272ec1670ab3cd9cb3290ad817576174751947fefac2f69a248c90b5acdcc997366e6f0686f799dd9133be5c55d03f2e1d35f91da2d1b342d30ea17d3bdb3bdcb60c6f69737fef67e3f5cd4c5c50556708352b4da95d056a2910cd46415770a299a1d9542b4b151db6b77ddc1d01db8841077ec224c4199cf79bd45f0add63b35719c3375a710a22881eeb8ea30513dc79d7dcfd949f1179856ce6b46074994f32ee7b75230aab9a82f5631f2370ae41a2aca4b54f01f98a5df5f77ee705a750a2cde73069431d1d4daa8c2164cd4392f1a79e86a4f1eed83ca170f3b0ee6c134b1beb6acd89f05eba91f279f374a23c1c6a2ca8a93285cfcf8629e9bf5faf6beda58b368796d6d24302133b5b196d15510599737d619e5c7d396b5e1d9e165cdc3eb30b1ba8458cbd92c0e128ba0ac0c94e6f5415442d3128ca0d3dac2b7b73200aaa9826372ed11977647649ce6a9c7f2517f98e604d274947a43da4f091b0f6090a54011a74df7038ad6a24ebb6c4088d7ef81e70df2f168d4a363e6a6e36cd8f720cb09c9a18b5f6a3fb5ec7bc9355c71b5138a1f9767ff89c2245827d16a31f593e030464e9b525f1dc599215eead438e49a902e16be33db93c972816ce61ae12209227f9a84bf83a301e65050f610dfa105725a2ac06a2a69051ae4b5c87071f6cf651c26e172e1cf4d2f7455f2b033f15fab20ba398522c84142cd3e5e34161f121ffd1b67a762297a1559f0f89ae35599321c4cc2f1babc325acee82ee9f5cdfdb158ea37b901319d9f1d6a3a4205b53e0d7474aafd74226bd4731126f1280b342a66ff0173d907fb27040000",
    ],
    [
      "ETag",
      "AgCv/kqdeFcvBYAkwv5Nng==",
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
      "Wed, 23 Feb 2022 19:53:30 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1645646000696"
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
      "976d53db3810c7bfca8defe51157b22cd9ca4c672e404a6903f442fa869b4ec6b195c4a044395909700cdffdd606fcd0089fd31721dad5eeb0bfffea294fce5dba4e9cbe334b17ff6c857efc7d21cc5ff9602cb2ad34197c6dd43a13ce91234cb480c8afb31b31bfd10f838b7fbdd5cd15d5cb0f0fbbfb8f1f21228b97621539fd27679e0a99644effef27671dad04a4a5090498c74d3e3ebf9c0ccf866370ac54923b2ebf8f4683e3d1d0793e2a13a23856dbb5991e9c384f7566a68551265e4fc6e79767ed7932faa534204ee561290bb14e843e2c27dd4ca324d122cb0ecc53d934da6caaa4e3ababd17070f93fe2af13add2e4173277e9a119d2ecaa8c4fa3abc1a43d3e894cad45a783c9b03d3e33d1aa56d3e4fc62783d195c7c6bcf9a4e97f7ab2e52ff783e726ed56c2ce6428b752cf2e5bfd1ea56c4e63cdf5919fc77297a99daea58e4cd83e06262a1d5761369a57ae0e9053dcc7cca7c8610629c419c54716452b586d0efd7509a639489e458ddc3be723082085d8c618fcd8bbfbbdc5f303447439d8ad2f822f44ea559698bdb1707fa533c1495bab15a95b31791ac5231753d3f7049e8065ee9347a5b45cc239909fb9447b98bab340f79a887bc1eaa15ecd21051ca31f787dc12f81bf6fa98f4b1ff074285ec756ecfc27d12c5a9aca10ff385f366c4022c6c85fe045b5ad62b272ef699eb63d7ab95dbc2da9ce2be4bd83e8fd70487e653ee531bb95792bb14211b3db1d09f696184ac996a1babf8ae742c16af1eaf930818bb217410231713ffe0ee3316ba649f8c34350808e6a0010b6c2a909a0a2cb0a9e05b5418ac2213552b421991cd954e4a4f14bfb948171930272e875d80e0c3eca8ef1b3e0888f6c1fca608210e4921426853c16fa810da9703adf2cad128d5950e5fd4729d19385ade1cf2f6d5e3775121df102c2fd6e5bc4bf79b53a197a7efa3d1a60e1cf9c18b0edc26046d0ac1",
      "ad42308b10a7629d96c6751cc9b4d225c90a9b765a0a700e6282e16880f3f0f01de105b092c27d2ef6930a1cbf731eb2d6f330b0907f167251b17e95a2760d2cef729375010ff36b2074819e8676b6962d8002b7d6e812266850631404d44e1db4528716ea33a14ded1238d9ce5263aa53302eeca053c761e17a9442d7f3edff4e935b5a1ec20de25be0c3263c6684dbe1c356786e811f6db514a2dae7c7f06410b2ba15e4ecc51176ba03f2d50ed73848e0133b629b160ce4ab5d1d25156fe27b14113b3e6fc5c7d5d15a1577aab4593e96e679e3d04bd2dce45dd0fd7ccd6397f97072912ebd6e4e791cb974fffeab955ca013c2022b3a463fa3ff787d0e1e3fc2f5f54d2b785a6622296480de148fcc139553c193a79f5776e4c411fc3cfb9c1aa75f14f7fc1f1665ba7cfc0d0000",
    ],
    [
      "ETag",
      "KbZefZrxAMz2mZO5rh/xvw==",
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
      "Wed, 23 Feb 2022 19:53:30 GMT",
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
      "d4",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "64",
      "2d0e5040e90e299300da50a14abbc94088082a20e1eff4ee75baed157887780f1051ca38274d79610578056324eb4bba8c4523ecc429c09b445213f1db16b0a489a896338acdd493776b566670ec268e4858c6f430586f7b57a2d870a172cebfd6852ef88e62b8f47aee18de09fd87b96a029247a7348c8f56d0ca9e72be79a4510b5816d10a71b337637f8f4a6ffb696f6a4d51d779e56a560b719cdc70dab6bd76bf06b8a94ed0c1a1cfcdc30a25ee605d4c031eeb76db619d75573bea65041d96cb3c2d8814b4e9e5368459b9bbbf7b50a285836cdf9d4ee272369bfd0316800d5556334eb2e7072faaae2fc05f0ea4192bf61c62c3a29ad5e0e7171c8e46e83b040000",
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
      "Wed, 23 Feb 2022 19:53:31 GMT",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-8-1645646000696",
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
      "000002ff85536b6f9b3014fd2bc8fbda0442087948d19aa5b48d96908d9056db3421632ecc2dc1149b745595ffbe8b69ba5695da4fd8bee7dc73ee834772cb8b844c48ccb3bb1aaa874f372226270414cdf075f8659ffffc6b0f2e20adbd24f83ab2cd19bd9f4e11c11b96a4bb32878e1475c5404eb69b6e5689baa495101d4cd419757aae33701dd7b22c77ec224d429e2e79718be43f4a9572629a47e96e264496032db9ec32b17b7e37f7b65956e2069892e66b451345a4f9aee6e75c30aab828a6db0dead712aa087694e7e8e03f31894f5f67ee72baeb6608de730694315117aa7185299828529ed595ce4a268f44bb7c71201b6fe9cd438389bcde1551417770622454d1483d94609c07eb95b1f0cfd7c16a162ed67eb4995f7aab5977be5e6e57fec6b8bef402cf5034ce41738da971aa6f3e5e503f01a978a1d5c3e6b9517eeacfe2ed501a024a4b6883d1d072696f648de3341eb274d41fc4a905713c8a8703da8f2d3676c04962a0c8d3a29a450b51d82c1d8c92248d064e6c454eeadad1b83fa451df496dd61f386eafef92c309b9afb882332e4b2179db21721d2c422f0a83ad3f9f859e2e21a575aece5a634d012f3d2a2c30b2ac1e02dfa9ebd044b940b5a6e50b3ff482d93c5c5c79ed94979051f6b0b9c339a7349780685a610315542b9160d3883f5b796708d653fb760c4a32f9f5489abe374e5eb4fd991ee2101bcb4a7fc9260c16fe85b673445cd1bcd6907d7b2015305125e8f9f01b71b8a56d0ef27deb053f48fb14400a1514ece3792258073efad78e9b8f50dc7d54910aefb83c4c361aac827689b8aef5c8eef56c774434b8526f628e6d1d5bd6e46832c20e0af55450bbf958672b56cb67100671febe6ed5e11f0740ff7d77040000",
    ],
    [
      "ETag",
      "7BvlZx25GefuEdRK82/Aaw==",
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
      "Wed, 23 Feb 2022 19:53:31 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1645646000696"
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
      "93",
      "61",
      "6f",
      "d3",
      "30",
      "1086ff8bf99a8a54edcc16691f5a2850296bd7364395d01479f6257838b6b19d96aaea7fe79c8d821852f625b93b3fa7dcbd7e7324dfa51624230fb2fed1823bbca921ac62b006dfaae0f1658df640120281d5486ed9b6b9fab90ff4ad9b8db62b3ba2abfd97fafa1a09cfbf41c34876249504253cc9be1e89660d601b37aa6d74d9650909071b8b9b623d5f7cc2bc3122e68bbb3c9f4cf3193925e746c1022b3bfe156df7a7843c9a873554e0407388b358671e8187795cd3b3c62a1878d33a0e9e747077503bd35ae68c196065703918d2f1051dd3344de915454e19ce82341ad1bb0d8e4782094cadcd1e9724c31112ae8b71e1aa7beeb02e45b7480ce78b828ebbf9fe0618e7a6d5a1ec052be97c7812ef37f82cc2bfa462af04f1a6a4ea836ad0025c1f256dc98470e07d2f697cc9ac3d63d3e5327fa98a16ce48d10fee640fa0c2ee0c7ccc9793ff498bfefaa3d58749317b41f880ae3923c5fc66b6292637b791bb7f36c2f410c0df3a83a6f210fd344cc79717ef68fa64b1f726da0ebf9305d7424238c33fe5b30c24ab98f270fa05a95721f487030000",
    ],
    [
      "ETag",
      "XaXm9xwt6/rE3XQp36QwVg==",
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
      "Wed, 23 Feb 2022 19:53:32 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `records` WHERE `stamp` >= ? ORDER BY `stamp` ASC, `id` ASC LIMIT 100 OFFSET 0",
        types: ["TIMESTAMP"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-07T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-9-1645646000696",
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
      "db",
      "4e",
      "e3",
      "30",
      "10fd95c8fbb2bba2add3a6695309b1dd1296687b812480d88b5ac79904431a97d88145887fdf4942b908099e6c79ce9973663c734fae441e931189447a5d4271f7e952466487806629be5e9efbf0effafa308939fde95e38f3e4987e4f777711212a9662eb4d062d25cb82831a9d04edb490e5861552b63051cb6999b6d5b72d9b526a3b36d21464c954e45748bed07aa3469dce56ba9d4a9966c03642b5b95c3fbd776eba9d4d212f816bd579add84111d57957732f939c6921f3dd9300f54b05c512d64c64e8e0991847df5e676e0bb66ea708be111c18e7b2cc75e50a53709927222d8b3a2b19dd93dae58b0b09dca93b098daf3b46303e70979371107e5e298d022b832923087d6ffee34b755d2d9717b7eb9571e02f66c6aa002e8b58ad8cb343d7778d2de54f49690f768d3d63e1efbbbef1fdfc29340e263bc64ac4f5cd987a332f344c4a8dc5c141e0860645bb31282df2da6cc8a20c2aa38fedf4defe6145609a296882cb01b59939a44e9444039e0c7bfd28a11045c368d067bd8872c7022b8e80214f57d96b16cbb14503cbb4231a3b033a88796cc5d6a0eb0c1d3e049bda368035ec3be0383df2b0436e0ba1615fa88d54a2692a39f3bdd05d86fec97c320eddba8c849599de6fcc5545bcf4a9b1c825a52602dfa9eda18a0a896ad52f79f3d0f5c793d03b759bc19842caf85d708da391b04c01a259c1d6a0a198c9181b478e1681177a8bf9788a8cfab78fb6084546bfef9f09e1dda6eeb4ae4f127a333708c7b3a3dac31674cab2b246dd3417d2a55ddaa2dd161d84667764f646a6d5c631fe451e1efe2211c7bbc94b8e4f5cff9c344f3e245040ce3ffe5904d7818f9674bb3208c5a541159c362d708c",
      "b8aa347801cd388975e565cb36bbe6b04f6a70a1dfc47a74b8ed5995a3ca086bc8f56341cdca609d8d58a99e4018c42998e3c660f43fb4f0a90fb0040000",
    ],
    [
      "ETag",
      "jYRexqqHfdc0KEh9NfQ0Bg==",
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
      "Wed, 23 Feb 2022 19:53:32 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1645646000696"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff9d956d6fda3010c7bfcae4bd1c44769e48902a0d5a4ad178e8289d344d1532c911dc9a38b39db6a8ea779f934d01d68c41df80ffe7fb8bfbddd9e6053db034466db460c9cf1ce4e66302fa6bb19882cab956e62b13a902d440a0696232479b7eeecae76f9307f5257b9a8dd65783efcbe4eccc64a868056b8ada2f68c980c70ab57fbca094aec1d8586c12f4262bd683f1acd7ef4d4d602de22230be1d0e3bdd610fbd362a038d2291a77a7eb271c9a4d2f35254c69bd97430ee1ff671fa2e9b2166fc344b02690cf2340fcbe6348e252875a24fa839cdb2ada93b990c7b9df17f9a9fc652b0f81dce4776aa83ebc7ade37238e9cc0ee7c754ef8ce8a233eb1dce579aae776a9a0d46bd9b5967747dd8359faf9ed6c7b4faeeb581eec5620a4b909046501cff4c8a7b88f4a0b859cafc3a87a612b98ca0189e492e371229f28c4a219a26d20c9bc4773ddff531c67ee89b3c2e22aa99484deaed8d290d69a1299f8a2773af906b1264b934576c597e3e9a70ab44285676b5ba029ed04a7de1c054a5560f85f43fc37359a5158975b577694e36874a069e65bb811558c40baaa096391c215cdcb2b0b7ad0ddbb889ed26de964b2c2f20b8d5f242b717d6247e20769b386de27ec2b8ecf92e755043dd07a9d9b682f37cc1b4ae641295ba750c38b11dcbf63c8b38d874a00a2f2957f00fb5071fb8c4726be0837d78e23b613d7c70103eac811fe69203a495ee9aa3029c579a2f7e078263f86d87989987966981ebd4231eea856fdae7b86fa9c27d7cdbc34e3d7e78109fe0cab12dee4248bdda5472a0b4d8362366850c8f41778b334f2cdfb5cc748e99f5fe961d62cb73de10ed945ca23b8edfaa4527f86ff4bb3faf4077a3415d4b615e140571d906339bf26d391705957922db45650d1451f3af7cc5346a97c5bdfe021ee2dca2f3070000",
    ],
    [
      "ETag",
      "MyGu4rxVOksKpwTMmHIYfg==",
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
      "Wed, 23 Feb 2022 19:53:32 GMT",
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
      "08000000000002ffedd44b7282300000d0bb642d4eb07e48773123b4545040f974c3c41090ffcf22a1d3bbd7e9b657f01de27d03ca18effbf056e7bc02af40d0059ab3f905627f80d3c9f07c1159a9168432d98d5c88b86cfd1b7bcf37b10303bff152ab4e1d842e681f4d6480076781cf36ba72c72615a42b4751ed254a76e7dc3c4a433155c7ee64607b7ceb1329241b5679f55e4491b4f448b485adea1035f0728eb5fbc6b6ca7597b5be46836c599db8c5ee92ebee3c2cc78dde91e8cbb09b32832dc9759628f92a18b3adfc29bb1a190e544cdad15d574589b0e08bf587aec8a6290af51a9c699c2a169e3f3d3dfd0366808f4ddaf13e4c1f1fbcac109a81bf1cc29b68f863882da71defc0cf2f88dc34243b040000",
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
      "Wed, 23 Feb 2022 19:53:33 GMT",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-10-1645646000696",
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
      "0002ff85536b4fdb3014fd2b91f795b669d3a40fa91a5d1b20539b429a02d33445b6e36486342eb603aa50fffb6e1cca4048f029b6ef39f79cfbc833bae7658ac688f0fca16272ffed4e10748298c639bcba3f9ceafc16cf483057174fce7effb317dc5e4d2680e0354be1edae602d252a49991a6fd6ed5c8a6a87a5102d48d4eadaadaed777bdbe67dbb637f280a758912d78790fecbf5aefd4b8d3396ab77321f282e11d576d2ab6afef9dc75e6727c51da35a75de4b764045753e17fd5e088a3517e564b30603956232615bcc0bb0f09f9992d3f7a9db1c6fdb39801f396598525195bab60529a828339e57d26445e367646cbe39a0b5bff067b14545516dcba4c45b7662a558e344ef77cc3a8b564b2b08cf56d1721a07ab3059cf2efce5b43d5b2d36cb706ddd5cf8916f694c0a66b8d6c43a35b7102ea09f32a57969d4e3fab9567e6950f0712c3501a4156b82c9c0f67077688f484606341b3a2ec96c46c8900c5cec109b8efaac9f12868167440d0b97a21cb17e77344a7b89eb3a4ed21f609c10cf4b134c9cd42699eb0ea9830e27e84972cde65ced84e24d87d04d14c47e12479b70368d7d534286ab42cf1b6375016f3d6a2830b1ed2e003fa9eb5047b900b5bae54118fbd1741607d77e33e505cb31ddaf1f60ce192e14033496d040cde452a4d034144e97fe1cc0666a97c7a042e3dfcfa8ee7bede44ddb5fe9310cb1b6accd17ade32808cf8d9d23e21a1795813c36072419153205cf873f8083356d72a0ab8d1ffd42cd53c432265949bf9e27804de0cbbfedb8fa8085e50719a5e10edb43552d42256bb6889b628fecaed3eb3bc880a5fe107306deb167758e3a23dbb252bf54d4ac3e14da8855ea1504415880d0f4eaf00f6f9d068e7a040000",
    ],
    [
      "ETag",
      "5B3uGXaCbIDsHw3yyJ2IXQ==",
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
      "Wed, 23 Feb 2022 19:53:33 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1645646000696"
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
      "93",
      "61",
      "6f",
      "9b",
      "30",
      "1086ff8bf77144225a4a3ba47e201debb2d12423b4d23455c8b50fe6ce70cc36a9a228ff7d67daa5d33a897e81bbf373e2eef5cb9efd54ad6431bb53f5af1eccee4d0deeab0f72b0bd76965e1db61658c0c0f19ac8e8f44b7a395f579f376697eafc5b7273f6f6a23e3f27c28a1fd07016ef59a5404bcbe2ef7bd6f206a84da0ee9bb61cb280b95de78b9b225f2c2f296f50fa7c799d65c93c4bd92138364aee7839f0af68bb3d04ec1eef72a8c0402bc0cfd219bc07e1167e4dcb9b4ec3c4626f045836c0c3416db0efb8419c5065320d27d3687612cda2300ca3f711811a05770a5b62af37341f73e8b8cef181b664d377449821a68dabe1b9a5ba92c3263e5c2c8b68360cf837c085c0be75e528582963dda37a7fc02715fe25357f254857a5f41854432bc18c51aa2bb99406ac1d25d196bceb8ed87cb5ca5eaad24a834a8e835b350268b73d021fb355f23f69c960cf5a7d488af405611dd9e688148bab745324576bcfdd3e1961be7360d706c95516bca1a6e1ecece4340a1f3d7681de77f49dd8991e022638fd2a9f946371c5b585c36f76a0d39a88030000",
    ],
    [
      "ETag",
      "67KEGBPfJSryElRYAV8+Cg==",
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
      "Wed, 23 Feb 2022 19:53:33 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `records` WHERE `stamp` >= ? ORDER BY `stamp` ASC, `id` ASC LIMIT 100 OFFSET 0",
        types: ["TIMESTAMP"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-11T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-11-1645646000696",
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
      "db",
      "4e",
      "e3",
      "30",
      "10",
      "fd95c8fbb2bba2ad93b6e945426c69d325522f900458f6a2d67126c14b1a97d88145887fdf4942b908099e6c79ce9973663c734fae441691210945725d407ef7e9af0cc91e01cd127cfdd73949fafd1f104d8e6c7e52e457ecf06236dadf478428598a6db62934942c720e6a78ea37935c165b964bd9c0440dd36c9876a76b776c4aa93db091a7208d6722bb42f6a5d65b356cb576dacd44ca2405b615aac9e5e6e9bd7563b5b6b9fc0b5cabd66bc916aaa8d6fba207a9e44c0b99ed9ffa68a05090af60c3448a169e9951f8ed75eaa6609b6682e01bc181712e8b4c97b6300597592c9222afb292e13da96cbeb810df9939e3c0f8ba67f8a3a9b31a8ffce0f35a6914581b4c197ee0b98bef5fcaeb7ab5babcddac8da9b79c1beb1cb8cc23b536ce8f1ccf317694df05a56dd8370e8ca537713ce3f0e22934f2c77bc65a44d5cd98b97337304c4a8de574ea3b8141d16e044a8bac321bb03085d2e8633fddb7bf581298660aeae0aa476d66f6e9208cc31e8ffbed6e185308c37ed8ebb27648f9a0039d2804863c5d66af582c9399d5e67d68736ed2d86eb3288201985d66773b0cf13dd6b74db0a29076c9c31eb9cd858689505ba944dd5472eeb981b30abcd3c57814385519312b523da9cd9545bcf4a9b1c815a52602dfa9eda18c0a896ae52fb98bc0f146e3c03d73eac19841c2f89d7f8da311b35401a259ce36a0219fcb081b478e97be1bb8cbc568868ceab78f77084586bfee9f09c1ddb6eab4ae4e12b873c70f46f3e3cac30e74c6d2a242ddd41762518b36a885431c98d6d06c0fcd4e13c7f8277978f883449cef3a2f393975bc0b523f7910430e19fff867115c053e5cd3ddce2016b70665",
      "70dcb4c039e2aa14e139d4f32436a5991ddbec98e68054e05cbf89595d6bd7b4324799113690e9c78aea9dc1426bb1423d81308863b0c095c1e87f18dfb806b3040000",
    ],
    [
      "ETag",
      "x4Qg88XedDH6cQurkaBYLA==",
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
      "Wed, 23 Feb 2022 19:53:34 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1645646000696"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff9d93514fc23010c7bf4b7d8564c4b9c4253e0c1c4a3240c78826c62c653d66b1dbcdb69310c277f786467842c753afd7ffefee7aed6dd9bb2c05f3d942e61f35e8cd450ef6b1316230b5b286960a4b03acc3c0f29c94f5f4e32976078be279f6ec2e86da0d79f0b8beb92185c9dea0e0ccdfb2a504250cf35fb6ace40510260509eca66aecd12409efc2981c058ac631994751d08f42b6ebfc023ccbb02e6dda1a5c4a6d6cbadffc82b3241e4dee4e738a9f85d18da56a87e4500ad0ed1859a55c080dc6b4e4d0a4bcaa0e507f3a8dc260f247f34ba1518a33c84fd99650f6f3400ca369909cd60b6e8f9ee83648c2d37a6379715453321a87b324183f9ca6d2f46d5dfca7d5afbb0e5be122862568283368be7fa57105991d35936528bb82aec15a67d03c1e89f707b9c6bae21ab14b9e6eafd7ed79ee95e77a8ee378d71e091566dc4a2c493b9f516dcca2e52ac6350d1673d8cfbebfb1601e345270034ddc9ee35e7ea71960939abae55b5d4387659c06f45e5ae62fb932b0fb0206e2b91bfe030000",
    ],
    [
      "ETag",
      "uOqWR4CbmXSX4bFr4EaAQw==",
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
      "Wed, 23 Feb 2022 19:53:34 GMT",
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
      "0000000002ffedd44b7282300000d0bb646d1d3e4d997447f0838226c580b0ca400c15ac8a098ad0e9ddeb74db2bf80ef1be412e84d49ab7e7833c8177d0e7161a8b7161b8e9cd18180dea2eb92dcf3e35578856cb239f785dd252078b40ac95dfc8887b49424bb9b89757ab7899d979e9da9de39fd5ca0bebed87eaa1c9aa0d5c178b419ffc55744cebade8d0fd6a0e4762c1b47e733b866bd23736c18eab66198a323a6058ed4dcc0e9b463137da7fd24bbb682f78e0254c50f41567300ee7641316228064b76d49e5cc434f378c506e984e96a9577df5a6651ac4bb7d61af595f5bf685c5d3d9c4fcd0c6f8e9e9e91f3002f2de544a6a5e3d3eb0214223f097036ffb463e86c0325752819f5f3d85af463b040000",
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
      "Wed, 23 Feb 2022 19:53:34 GMT",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-12-1645646000696",
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
      "000002ff85535d4fe24014fd2bcdece30a2d528a90909540553650dc522466b369a6d3dbee68e9e0cc14630cff7d6fa7e26a4cf4a93373cfb9e7dc8f3e937b5ea66448129e3f54209fbedd89849c10d034c7577bd3b5ede9e5f8e7dd46df86f9f76bf178efe6a3112278cd5274bb2ba0a5442519a8e17ad5cea5a876540ad1c244adce69abe3b93dcff51cc7f1061ef21414d99c97f7c8feabf54e0d6dfba8ddce85c80ba03baeda4c6c5fdfedfda9bd93e20e9856f67b491b5594fdb9e88f4230aab92847eb151aa814c818b6941768e13f334dcedfa76e73ba6de708de730694315195bab685299828339e57d26425c367626cbe3990953ff72791c544516dcbb8a45b38b152aa69ac9f76605d84cb85350b2e96e1621ccd9641bc9a5cf98b717bb29caf17c1cada5cf9a16f699a1460b8d6c83a37b7002fa89f82d2bc34ea51fd5c2bbf3468f6712c3501a51534c1b8ef78b473e60c922ce9b3ecacdb4b320792e42ce9f7683771d8c005374d8022cf881a162d4599a49475137710f71cda8f5dcfebc603af4763483d6034ed75fa7d971c4ec8a3e41aa65ced84e24d87c8269c457e1c85eb60328e7c534246ab424f1b6375016f3d6a2c30769c0e023fa9eb5047b940b5bae5b320f2c3f1249addf8cd94e79053f6b47ac03967b45080682ab1811ae442a4d834128c17fe14c1666ad7c7a022c3dfcfa4ee7bede44ddb5fe9110eb1b6accd97aca270165c1a3b47c40d2d2a03d9370722810999a2e7c31fc4e19a3639c8afb51fde92e629840c2494eceb7922d804befcdb8eab8f585c7e94511aefb83d4cd5224c42b345dc147b64777acea94b0c58ea0fb18edb3ff6acce5167842d94faa5a266f5b1d046ac52af200ce20204a657877fd82a7e667a040000",
    ],
    [
      "ETag",
      "/W3//DGAJjWtYRg+Powk4g==",
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
      "Wed, 23 Feb 2022 19:53:35 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1645646000696"
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
      "93",
      "61",
      "4fdb301086ff8bf73595d2ad8411890f2deba05a68a10d62124291b12fc19de30bb653d455fdef3b07d64d6352f892dc9d9f53ee5ebfd9b11fca4896b207553db560b71f2af0d72158826bb577f46ad038601103cf2b224fbe65f3eff2e7edd3da6ccf1f577633ad6e9fabd353229c78849ab374c74a055a3a96deed98e135509b40ddd6a6e8b288f96d138aab7c399b9f535ea30cf9fc26cbc6936ccaf6d1a15172cf8b8e7f47dbfd3e626b7c584209168c80304b63710dc2cfc29a8ed78d8681c3d60a70ac83bb83ca62db708b38a0ca60f871304c4647c92889e338394908d428b8576888bd59d17ccca3e77a89cfb4251b7e22c276316d5c76cf0dd595ec3609e16c9e27a36ec0bf012e04b6c617bd60a9acf32feafd065f55f897d4fc9d205d95d27d50054682eda3545370292d38d74ba22b78d31cb0c96291bd55c5488b4af6831bd50368bf39005fb3c5f87fd292c1fe68f5659c4fdf10ce936d0e483ebb9caef2f1e555e0ee5f8d30d97a705716c9550e82a186f1e8f3d17112bf78ec0c83efe83ba9b72d444c70fa552e946769c9b583fd2fb41ac61088030000",
    ],
    [
      "ETag",
      "9KLNXdzWqjnyGhSrvEgWwg==",
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
      "Wed, 23 Feb 2022 19:53:35 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `records` ORDER BY `stamp` ASC, `id` ASC LIMIT 4 OFFSET 0",
        types: [],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-13-1645646000696",
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
      "8553db6e9b4010fd15445fdaca1730186c4b51eb3ab845724c03eba679b2976520db00ebb04ba234cabf77d6973451a4e46d3573ce9c33977d30af799d991333e5c54d0bcdfd873f22353b26285a6094dcce83df3f004844cfcb0bf7fa6f70378ace4f4e10c1354bd26a5b42578ab6612027aba45734a2ddd246882e16eada4ed7f6dca1e77a966579630f7912ca7cc1eb6b645f29b595937effa8dd2b84284aa05b2e7b4c544ff1feeda0bf6dc41f604af65f4af65145f6df16fd520a461517f5c92a4103ad84660d15e5255af8cfccd2af2f4bf738ad7a05826f3903ca98686ba56d610926ea9c176db3ab6a4e1ecc9dcd670f330916c18c189f3b46329d07ebd934211f3752a1c0c6a0d248481c2ebf7fd2cfcd7a7d75576d8c791c9d199b06986832b931a2f834888d6f97c691354d661d63c3b3ddcb58846721315c239acf938018169aca402a5eef2c119a96a0ed1ca616bede9526504525ec936bdff2a83db2c6699efa2c1f39c334b7204d47a93fa44e6ab1b10b6e9602459ed2d5772c5a8bdaa6aeeb31cf767c70729a7903e60f1d8bd97430ce98efdb96e3e7fe8031f3b163de355cc129975b21f97e74e6451c92604de2d5723625c1ae8d9cb6a53add9bd34d3cf7a9b0c9b565d9087ca3b7479de502d5f42ec22509e2e98c84bf82fdfa175050769fdce001e4b4948068dad00a14346722c3c1993fa3242461b49c2e742d3c2a72bfd5f1f355105f1e4231e4d040cdde1f3482778977ffc6f150118ba78a32b87bc571ad4c6a11d6c07ebdbcd2668e6c7b38f2f44010dca857b9f1c8c1dcd381ea8a5041ad0e1ded0fd57c3c88b5f2098449dcca12ef14b3ff00ed3b756928040000",
    ],
    [
      "ETag",
      "TvFEXHeeTOaQlW4kzEw8OQ==",
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
      "Wed, 23 Feb 2022 19:53:36 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1645646000696"
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
      "55",
      "61",
      "4f",
      "db",
      "30",
      "10",
      "fd",
      "2b",
      "93",
      "f7",
      "71ad67c74e9a54425a6181756b0b6bcb409a506512b7842671b09d7608f1dfe70448539175940f697ce7f7d47bef7cce0358466908bae03a5adce55cde7f5c70fdb3588cb9ca63adcc2b13a9e2a005b8660b83bc08473fac614612beec7dfe75b99cd0cbf5c5fae0c0205470c31306ba0f601ef13854a0fbfb01a42ce186168506a0efb362dd1f4dfd137f6c1289088bc4e87c30e81d0e7cf0d8aa082c08449eead9dec47924959e9541459c4cc7fdd1c96e5eccde45338aa3783fca82a72197fb71a26cc6c25072a5f6e409356359b6211d9e9e0efcdee83fe6a7a11451f80ee62ada9711ebd586713c38ed4d77e343a66b2dfada9bfabbf14ab3a456d3b43ff427d3def06c376b36bb59276fb1faeab1056ec5f598cfb9e469c08be39f4971cb03dd2f264b997f8f795b895c06bc689e01971b0b29f28c4921da26d3c6a48d1d6a3bd44108399e6380b108988e446ab0e713531bd042b3782cd666b0003500592ecd8ccdcbdf9549e352c3f6ca9711af82ef5cae44a4aa98df3e25d017fea7ac140622a976872cde50b10d2dda81c4851dab4a6a996f1073162bdebc65d91ec41b9a852cd446561bd50a86b68b6cdbc31ef5bd06e0076c7531e962fa09a1d2f6ba6eab41f7110ba2b826dd2f0ece4b107013e146d1c766a4e37ae50462ea408aa1552b7787d6ed2d8f42e2bcd6636d0b37bdb73d6a3729b72ae5d046a8493d69507f22b9e6712d147920826595582c9e33d69b4cc018baa68318414ce8dedd771c1792d7cac8b6071d823de381d3697281d45c",
      "703a4d2ed006177a09d36c732284e66a2e64586558f092226fb1017b047a660a90799c66a9ff0ea83110bd1646b74d70b14b4a13dc2617e8960b6e751cae9e6f87c37b23e74c0a73d5285edc321851f274e91c89429d19816e51550b04cc7caebf451a74cbc63dfe0526607d720c080000",
    ],
    [
      "ETag",
      "WdNK2Mp3mekA/VXkS4XwWw==",
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
      "Wed, 23 Feb 2022 19:53:36 GMT",
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
      "edd44b7282300000d0bb642d4e54c049778018514454c0cf8641881210c227a8a1d3bbd7e9b657f01de27d83288e49db869ce5a4045f404463348c8717a81d1fb0f7dcc9532af0c6c60b1eb4f046fb6e697978acd60bab12b1b220ea35d39c39315765983173b63e9479256fa332e11ec31e7ec87e21b44cb9427d73e9f2edc3e9134d1a8de2c050ed7029fa9754dd732386895dee6a759272f3646f8ff91c655286cd88726be7b7860cd3b64e6e48174cbb1787a0a42f6ab0f56aae478e425deb06d9193387e7dd7dafe02944e37d3d2d02bc6ece9274c2bedf9d65178d94549869a5ce2eae3ffcf8f8f8070c007955b4216d48df1f4c148406e02f87908b8abc87d049d49006fcfc0295ed07cd3b040000",
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
      "Wed, 23 Feb 2022 19:53:36 GMT",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-14-1645646000696",
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
      "000002ff85535d4fdb3014fd2b91f74adbb44dd3a65235aa1246b5361d690a4cd31439ce4d6648e3603b2084fadf77e35006421a4fb17dcfb9e7dc8f3c933b5ea6644a129edfd7209fbedc8a849c10d034c7d7e8bb737f3b78945152097d7399dddc5cb983f96c8608deb014dd57057494a8250335dd6dbbb9147545a5101d4cd4e93b9dbeeb8c5cc7b56ddbf55ce42928b2152fef90fd47eb4a4d7bbda3763717222f80565c7599d8bfbef71e06bd4a8a5b605af5de4bf65045f5fe2ffab5108c6a2ecad96e8b066a0532863de5055af8c74c93d3f7a9bb9ceebb39821f3803ca98a84bddd8c2144c9419cf6b69b292e9333136df1cc8d65ff98bc862a2a8f7655cd23d9c5829d534d64f1558e7e1666d2d83f34db89e47cb4d106f1717fe7ade5d6c56bb75b0b5ae2ffcd0b7344d0a305c6b669d9a5b8017d44f41695e1af5a8796e945f1ab4fc38968680d20ada603cb65dda9fd85e922563964d86a324b3214926c978448789cd3c079c34018a3c236a58b414e590d27434198de2f170d08f1d1840ecd1711aa7e00e1c461dcf4d537238218f926b38e3aa128ab71d22d7e132f2e328dc058b79e49b12325a17faac35d614f0d6a3c60263dbee23f03f751d9a2817a8d6b47c19447e385f44cb2bbf9df20a72ca9eb6f738e78c160a104d253650835c8b149b4682f9da3f43b099da8f635091e9af67d2f4bd71f2a6edaff40887d858d6e64bb651b80cbe193b47c4152d6a0379680f4402133245cf87df88c3356d7390cb9d1ffe24ed5308194828d9e7f344b0097cfab71d571fb1b8fc28a334de717b986a449884768bb829f6c8eebbaee3110396fa436cecf58f3d6b723419610fa57ea9a85d7d2cb415abd52b0883b80081e9d5e12ffdb4ba197a040000",
    ],
    [
      "ETag",
      "TK4qj2wrTbpotXQfXXV62A==",
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
      "Wed, 23 Feb 2022 19:53:36 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-14-1645646000696"
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
      "93",
      "6f",
      "6f",
      "9b",
      "30",
      "10",
      "c6",
      "bf",
      "8b",
      "f772440295b00da92f48976ed168fe524d555521d73e983b6333db304551befbceb44ba776127d0377e7df89bbc70f07f253284e52722fea5f1d98fdbb1adcc6075bb09d74165fad56164840c0d1da937c7ab689faeff1ae071389f5fb6f371b959d9f2361d90f6828490fa41220b925e9ed8128da00b6312dbb4695431610b76f7d71576c17cb2f98379afb7c799de7d92c9f9363706ae4d4d172e0dfd076770cc883bedf42050614033f4b6bf40330b7f06b5adab412265677868125033c1cd446772d355a4fb03289e24994c4d3244ec2304c3e25084acda8135a217bbdc3f988d38ecaadfe8d5b92e80c0933c4b871353c7bac0b3e6ce2c3c5b248e261c07f01ca98ee942b47c14a18eb1ed5fb0b3ea9f09294f48d205e959063500d8a8319a3445b52ce0d583b4a6a5bd2b63d61b3d52a7fad8ae2460b3e0ef6620490ae3f0197f92afb9fb468b067ad3e67c5fc15611ddae684148babf9aec8aed69ebb7b32c26cefc0ae8d465759f0868ac2f8e3f443123e7aec427bdfe17752673a0808a3f8ab7c158ea41595168e7f00e50215a588030000",
    ],
    [
      "ETag",
      "bd53Q1vW4Sver1iP+KYQnA==",
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
      "Wed, 23 Feb 2022 19:53:37 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `records` WHERE `stamp` >= ? ORDER BY `stamp` ASC, `id` ASC LIMIT 4 OFFSET 0",
        types: ["TIMESTAMP"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-04T12:13:14.567Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-15-1645646000696",
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
      "0002ff8553696f9b4010fd2b68fba56d627bf101b6a528751dd2a2fa2ae044e9217b81816c0cacc32e89d2c8ffbd03c4391429f9c48a796fde9beb9e6c78169221f1797c5d407ef7e14af8e490806231fe8dce9cd45a38ff0e36c9e5c162737017eb3fbab7474788e0254bb2749b40438a220f400e976e33ce45b165b9100d4cd4d07b0ddde8f68cae4129350606f22424d184671b645f2ab595c3566bafdd8c858813605b2e9b81481fffb76edaad6d2eae2050b2f552b2852ab2f5b6e8712202a6b8c88e962e1a2824e42b48194fd0c21333f4bfbc4cdde42c6dc608bee101b0201045a64a5b98221059c4e322afb292e13da96c3e7b10d79a58634ffb7ca8b9a3536b351eb9dec7b55428b0d698d45ccfb167df3e95cff56a75799baeb553673ed5d63904220fe55a3bff6e3996b6a7fc2928edc09176accd9d13cbd1be5e3c8646eef8505bf3b07a69137b6a7b5a579b9f9eba96a751341b82543cabac7acc4fa0b4f9d04dfbf50c4b02534c421d5c99d4607a9f0efcc83783a8dfe9f91105dfeffb668f757c1a0cbad00d7d60c85365f68ac532918546046d60543799016114e9ac13f8613b62834e140dfa3db3df03d3ec986477486e73aee084cbad90bc6e2939776ccf5a79ce72361e79565546c48a449dd4e6ca229efb5458e48a521d816fd4b62ba35ca05a39237be659ce68ecd96756bd1613885970e75ee362442c91806896b31414e4531162e3c862eeda9e3d9f8d26c8a866bdd8232419febe7f227877dbaad3aafa12cf9e5aae379a2e2a0f7bd0194b8a0a75533f489bb66983b61bb4ebe9eda1de19eadd66cf307f91ddee2f1271bbebbce4e7d2722e48fdcb810872c882f7278be02af0ee91ee2f06b178332883cba638ee51204b9120877a9f785a9ad9b375b3d72f2780e05cbd8a99667bdfb43247991152c8d44345f5c560a1b558211f4118c43598e1c160f43f3abfb83ab1040000",
    ],
    [
      "ETag",
      "fVRmEPRz+klh+Pk+yg1K4w==",
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
      "Wed, 23 Feb 2022 19:53:37 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-15-1645646000696"
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
      "00000002ff9d555d4f223114fd2b9beea33069996f12934545c54570614c341b43ea4c816a673ab6459718fffbb6a3ce80ceb2e003c3bdb7e730f79cf69667704fb304b4c12d9d3d2c88587e9f11f5cb042322174c49fd95f34c12d00044e199462eef87f2ecf6e7c37512ef8d0fafaf4ea22b98ccf6f73542c6739262d07e06534a582241fbf733c8704a348d261aa096b9897b83a87bd21de942ca1353185cf6fb9d837e17bc344a028e63bec8d46467e2940aa926455212c7d1a83738d9cc63f84b34ad98b2dd2833922544ecc6a1f90427892052eec8e37282f3bc221d0c87fd6e67f01ff3b344709a7c81f948776530f558318efbc34eb4199f60b5b245479da8bb192f154e577a8a7ae7dd71d439bfd8cc9a4ce64fe93656dfbc34c01dbf1d912911248b8939feb9e07724563d335952bf9d91a6e40b1113b3791a5c2ccc045fe45870ded49526729bc8735ccff120845ee86920e3315694671a7b39d6bd01c5156623fea4070b381a208a50cfd8b4783e1665a3c144a88c3a2956b8cc0eb92272ca45525670fc5eb27f903f45bb56ccd372fd581f7146aa1f0e6d2bb45a0ed41fafac2ab1205b244e105ab0cc5ab0059bb0d5842b6d5b6e000314d8a136c30fba610df81b6ab591dd468e652010ee4158ecc3aa116ec52ba33e15950f677c9e49a5dd7d2fb0bbb78ab38d0bae6d21cf346b85558b53cce43f84af2f052d43ff2ccd5df721848effea43586784bb6e44586b845763c411c968998c63cc68e54b228bdcddea28d881856c642127b07c671be16b4b2d5f9fa4e0b32eef830b2142a1536780571a50a7dcaf517e4ad8acd2fa93112acb6c7e6f526f1be181ab0f7f6069f56e50af6dc30840df5ad9e8528cbfa61a41df77eb55fb1f55dfbc5d0d074b3dc71782eb7b461273c520e8d8af37ce213792f4c5d936bd34408cf57ff52955a05deccfcb5fcc91e96e09080000",
    ],
    [
      "ETag",
      "ykOsJbKqYdc+SCYXGTX0dg==",
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
      "Wed, 23 Feb 2022 19:53:38 GMT",
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
      "d4",
      "41",
      "72",
      "82",
      "30",
      "00",
      "00",
      "c0bfe4ac0e6021a6b7404a950a1504152f4ca4a986464492a2c1e9dfebf4da2fb88fd81ba065c9a42cd4e98bd5e019686aa15139da1978d3197d1a5131574eb0cfebaea53b2d87d6ee92a4a70dace655a0d69fb2376a05f581e41787683f2ea2eccacc95f3b60c122fc524e3c83e737788fb4a40cb4a4d1272ff4c85d5cdbed976d2bf17e9318a2a4f91d26de87ed23f2518e1797c9c8aeba588b3716e9217b8c49c905763e52cfca97710b049c2b639cfb270bcaf271f38b64549362230332cfd9c65d936b6d90a354eb7d6507a1d0f758f61129323556ab82e17c8c5a38787877fc000b06bc35b260b7eff606c2334007f39144a37ec3e84cb68cb5af0f30b7beb8bfd3b040000",
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
      "Wed, 23 Feb 2022 19:53:38 GMT",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-16-1645646000696",
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
      "ff85537f4fa34010fd2a64ef5f2d545b4a9b98b3a97892b4f4a454632e17b22c03b74a59dc5dea35a6dffd86c57a1a134d486077de9bf7e607cfe4815719999094178f0dc8ddb77b919223029a16782b86191f07d4b187d3ddd35df137a4f5767e7d768608deb214ddd4251c2bd148066ab25ef50a299a9a4a218e31d171dfc567307407aee338eed8459e82329ff3ea01d97fb4aed5c4b60fdabd4288a2045a73d56362f37a6f6f4fec5a8a7b605ad9ef256d5451f6e7a2df4bc1a8e6a23a5bafd040a34026b0a1bc440bff99597afe3e758fd34daf40f09633a08c89a6d2ad2d4cc14495f3a291262b993c1363f3cd0759f9737f165b4c94cda64a2aba81232ba39a267a578375192d1756105e2ea3c5340e9661b29a5df98b696fb69caf17e1cababdf223dfd2342dc170ad33ebdc9c423ca07e064af3caa8c7ed75abfcd2a0e0e3585a024a2be882c9c87169df73c6699e8e58ee9d0ed3dc8134f5d2d1909ea60e1b0f6090a5409167440d8b56a272191b8cdd9361e28d465e32c87237a174dc4f06399c7ade493fcb462ed91f9127c9355c70550bc5bb0e91db2888fd248ed6e16c1afba6849c36a5bee88cb505bcf5a8b1c0c471fa08fca4ae7d1be502d5da960761ec47d3591cdcf8dd94e75050b65b3de29c735a2a403495d8400d7221326c1a09a70bff02c1666a3f0f414526bf9e49dbf7d6c99bb6bfd2631c626b599b3759c55110fe30760e881b5a3606b2ed3e88042664869ef7bf11876bdae520d76b3fba23dd55043948a8d8d7f344b0097cf9b71d561fb1b8fc28a3349e717b986a4598846e8bb829f6c0ee7bb815c480a5fe101b0ffb879eb539da8cb0814abf54d4ad3e16da8935ea1584415c80d0f46aff0f1073843d7a040000",
    ],
    [
      "ETag",
      "o5di9Ia0/5AywYgxNapvLQ==",
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
      "Wed, 23 Feb 2022 19:53:38 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-16-1645646000696"
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
      "93",
      "61",
      "6f9b301086ff8bf7b144221a611b523f902edb22d1a44b8826b5aa906b1fd49df131db644da3fcf71eb4cbaa75129510dc1dcf89bb97d77bf65319c91276a3aa5f2dd8ddbb0afcf72e58816bb577f468d038600103cf2b22c368ba3db93c318b07b3defcb89ddc9f5d662a3d3d25c2895ba8394bf6ac54a0a563c9d59e195e03b509d46d6d8a3e0b98df355d719dafe68baf94d728bb7cb1c9b2749acdd82138364aee79d1f36f68bb3e04ec0e6f5650820523a09ba5b17807c2cfbb351daf1b0d2387ad15e0580ff72f2a8b6dc32de2882aa3714c573489a3380cc3f8534ca046c1bd4243ec664df3318f9eeb15fea62dd9f83d11b68f69e3b2bf6fa9ae64bf4917ce17791cf503be04b810d81a5f0c82a5b2ce3fa9f7077c56e15f52f33782f4ab941e822a3012ec10a59a824b69c1b941125dc19be6884d97cbecb52a465a547218dcaa0140fbed11f8922dd3ff494b06fbabd5e7349fbd229c27db1c917c7e3e5be7e9f945c75d3f1b61baf3e02e2c92ab1c74861a87d1c7c987387cf2d81976bea3ef24deb61030c1e9a87c539e2525d70e0e8f2493633088030000",
    ],
    [
      "ETag",
      "04Bv+Z+nNznSUWh5xCZLiA==",
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
      "Wed, 23 Feb 2022 19:53:39 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `records` WHERE `stamp` >= ? ORDER BY `stamp` ASC, `id` ASC LIMIT 4 OFFSET 0",
        types: ["TIMESTAMP"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-07T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-17-1645646000696",
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
      "69",
      "6fa33010fd2bc8fb657795c304420e29eab209d945cab5405a750f25c618e296e0149b565595ffbe03343d54a9fd64cbf3debc37e3990774cdb3080d51c8939b82e5f79fae44881a882992c0eb9d61d82b3969ef76374b63309b84c4bc10c96804085eb224d91f52d694a2c82993c3b5df4a72511c482e44131235f55e53b7ccae655a18636b60014fb2349ef1ec1ad83ba50e72d86e9fb45b891049cac881cb1615fba7f7f66da77dc8c515a34ab65f4bb64145b6df173d4b05258a8b6cb4f6c1402159be617bc253b0f0cc8cc26faf53b738d9b71200df72ca08a5a2c854690b525091c53c29f22a2b1a3ea0cae68b0bf29d99330eb4af0dcdb7a7ce666cfbc1e7ad5420b0d588d4fcc073173fbe94d7ed66b3bbdb6fb5a9b79c6bdb9c51914772ab5dfc743c473b51fe16181b6ca49d694b6fe278daf7cba790ed8f1bda9647d54d9bb97337d04c6d399dfa4ea061301b31a97856590d4898b2d2e66337ddb77f5812882292d5c14d0f5b44efe34118873d1af78d6e18631686fdb0d7254688e9c064661432023c5566af58241359c40640eb593a6646846383d05e0f773031ba3436fba66976ba866198313a36d05dce159b70791092d72d45179e1b389bc05b2fc676e05465c4a448d5a4365716f1d2a782223718eb007ca7b66319e502d4ca3f721781e3d9e3c03d77eab198b184d07bff06062326a964802639d933c5f2b988a07168b5f4ddc05d2eec1930aabf5e9d10120dff3c3c1382fb43d569559d2870e78e1fd8f355e5e1043a276951a16eeb0bea40879ab8d3c4bd40ef0c7563a89b2d18e2dfe878fc074498ee3a2ffab576bc4b543f792c6639cbe8c73f0be02af0e1929e3606b0b0332003c3a638cc1195a508cd593d4f7c5f9a39b1f58135e8a20a9cab37b17e079f9a56e62833b23dcbd46345f5",
      "c640a1b558219f4010843158c0c240f43ffe96271cb1040000",
    ],
    [
      "ETag",
      "w33APsD/hhqO39LDba4Wog==",
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
      "Wed, 23 Feb 2022 19:53:39 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-17-1645646000696"
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
      "000002ff9d956f6fda3010c6bfcae4bd1c6476fe9120551ab42945a394512a4d9a2a649203dc9a38b31d5a54f5bbcfc9a6006bc6a06fc0cff91e71bf3bdbbca0479626a88d666cf13307b9f9b800fdad588c41e55c2bf3958954016a20d0746132d7a14b96df1ff15dd6fb1c3d8c462312af464f67672643c54b5851d47e4173063c51a8fde305a57405c6c61293a03759b1ee0f27512f1a9bc04a24456078371874ba8308bd362a038d6391a77a7ab271cea4d2d35254c6dbc9b83fec1df671fa2e9b2166fc34cb02d204e4691e964d69924850ea449f50539a655b53f7e666107586ff697e9a48c1927738d7ec5407d7ebade37270d3991cce4fa8de19d14567121dce579aae766a9af4afa3db49e77a74d8359d2e9f56c7b4fafeb5811ec46c0c739090c6501cff4c8a078875bfb859cafc3a87a612b98ca1189e492e371652e4199542344da4495a4de2bb9eeffa18633ff44d221731d54ca426f7eed6d486b4d0948fc593b958c83509b25c9a3b362f3fd726dc2a198a955dadae802f68a5be7260aa52cbc742fa5fe0b92cd38ac5aadabb34479b432503cfb2ddc00a2ce2055550cb1c8e102e6e59d8dbd6866ddcc476136fcb25961710dc6a79a11b8535891f88dd264e9bb89f302e9bbe4b1dd450f7406ab6ade03c9f31ad2bb9884bdd3a069cd88e657b9e451c6c3a5085e7942bf887da830f5c62b935f0c13e3cf19db01e3e38081fd6c00f72c901d24a77cd5101ce2bcd67bf03c131fcb643cccc43cbb4c075ea110ff5c237ed73dcb754e13ebeed61a71e3f3c884f70e5d8167721a45e6e2ad9575a6c9b91b04286c7a0bbc5992796ef5a663ac7cc7a7fcb0eb1e5396f88764a2ed11dc76fd5a213fc37fafd9f57a0bbd1a046529827454152b6c1cca67c5cce454165dec876515903c5d4fc2d5f318dda6571afbf0066f3f6b1f4070000",
    ],
    [
      "ETag",
      "v941hXk0UpG/EjPPP1cmPw==",
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
      "Wed, 23 Feb 2022 19:53:40 GMT",
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
      "d4",
      "4b7282300000d0bb642d0e8d62a03b511114456c14ea8609101050c3cf60707af73addf60abe43bc272051449b266859416fe0130802b561340ce5a9cfe51e3b6a53a1652ad9c1c36cb24e4650e38be36c2298e7f568ad737b8530c4c5fe26e61f9604d9ce11a95857d24d2be21966fcba655f8a042def64aae3ef30dac4c447f5d24c13aaceed7c5549e89cd7b0bec67debaf2f5d6e1edcfd25213c31b5224befa7ddd89e8e0c7e6571851d7b939c37f70bec0d3d2879988755e6e547e12a10b5f9dd220b1d32358bdcc69958a855f0d990396947936d2fba58c10a4d0e25aedc234e876f6f6fff8001a08f32ab691364af0f468aa60dc05f0e412b4afa1a42a7a4a635f8f905d1fe5bd53b040000",
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
      "Wed, 23 Feb 2022 19:53:40 GMT",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-18-1645646000696",
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
      "6b",
      "6f",
      "9b",
      "30",
      "14",
      "fd",
      "2bc8fbda242625e421456b96d2152d211b218da66942c618e61630b54dbbaaca7fdfc5345dab4aed276cdf73ee39f7c123bae1558a6628e1f96dc3e4c3a76b91a013c434c9e155b2fdb76a3f2a920b713a5ce83d29a3bf5ff2f91c10bc652952d605eb29d148cad46cb7ede75234359142f42051cf9ef46cd719b98e8b3176a72ef0142bb215af6e80fd47eb5acd0683a3763f17222f18a9b9ea53513ebf0fee86835a8a6b46b51abc961c808a1abc2ffab91094682eaaf96e0b061ac564cc4ac20bb0f09f992667af53f73929fb3980ef38658452d154bab50529a8a8329e37d26445b347646cbe38a0adb7f296914545d194555c91929d5829d124d60f35b32ec2cddaf2838b4db85e44fe2688b7cb4b6fbde82f37abdd3ad85afb4b2ff42c4d928219ae35b7cecc2d800be8a74c695e19f5a87d6e959f1ae4bf1d4b4b0069c5ba603cc62eb127789a64c9986693d3519261962493643c22a709a653873969c208f08ca861910a6a76c7e3d4c13826133a8d1d82a731c143121327190e6dc7b69d29468713742fb966e75cd542f1ae43681ffa911747e12e582e22cf949091a6d0e79db1b680971e351418636c03f09dba0e6d940b506b5bee0791172e96917fe575535eb19cd087ed2dcc392385628026121aa8995c8b149a8682c5da3b07b099daf76350a1d9af47d4f6bd75f2a2edcff40886d85ad6e68bb651e8075f8d9d23e28a148d81dc7507f893a89029783efc061cac699703fdd879e14fd43d852c639255f4e37902d8043efcdb8eab0f58587e90511aeeb03d54b52254b26e8bb829f6c81ee2d110230396fa4dcc75ec63cfda1c6d4656b24a3f55d4ad3e14",
      "da8935ea1904415880c0f4eaf00fdac064877a040000",
    ],
    [
      "ETag",
      "reWKnW5lbFo32AtWamTxBg==",
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
      "Wed, 23 Feb 2022 19:53:40 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-18-1645646000696"
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
      "000002ff8d93516f9b3010c7bf8bf74a34a2519621f5816cd982449336217bd85421d73e985bc351db648aa27cf79d69974deb24fa0277e7df89bbbfff1cd9836a254bd89daa1f7b30873735b81b1f6cc0f6da597a75d85a600103c76b22bfa69159e5d1e3b7d9c372a7de2ec33adbab9bcb4b22acf8010d67c991550ab4b42cf97e642d6f80da04eabe69cb210b983b74beb82d36d9ea0be50d4a9faf76799ecef3053b05e746c91d2f07fe156db7a780dde3dd062a30d00af0b37406ef41b8ccaf6979d3699858ec8d00cb067838a80df61d378813aa4ca6b3c9348e2ee2280ec330fe1013a85170a7b02576b7a5f99843c7f5067fd2966cfa8e0833c4b471353cf7545772d8c487d9aa88a361c0bf012e04f6ad2b47c14a19eb9ed4fb0d3eabf02fa9f92b41ba2aa5c7a01a5a09668c525dc9a53460ed2889b6e45d77c6e6eb75fe5295561a54721cdcab1140bbfd19f89cafd3ff494b06fba3d5a7b458bc20ac23db9c9122bb5a6c8bf4eada73b7cf46981f1cd86b83e42a0bde50d3309a5dbc8fc3278f7d44ef3bfa4ee24c0f01139c7e95a5722ca9b8b670fa05197cdfaa88030000",
    ],
    [
      "ETag",
      "VA4rNL4qZ8kHUi/H0gIviQ==",
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
      "Wed, 23 Feb 2022 19:53:41 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `records` WHERE  `id` > ? AND  `id` < ? ORDER BY `stamp` ASC, `id` ASC LIMIT 100 OFFSET 0",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 4 } },
          { parameterType: { type: "INT64" }, parameterValue: { value: 7 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-19-1645646000696",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ffa553db6e9b4010fd95d5f6a5ad7c01db806d294a1d1bb7a88e9d028e15b595bdbb2cce26c03aec92348df2ef1d20ce459192873eb19a3967ce9961e60e5f8a2cc2434cc5f6aae0f9ed870b497103734db610cd6d1db0ce7773c54e5663ef2cb89afc39fa3b3a38008428598aa4bb8437952c72c6d57019b4b6b92c762497b209859ae6a069da3dcbeed98661d8031b788a27f14c6497c03ed77aa786edf65ebbb595729b70b213aac564fa186f5f77dabb5c5e70a655fba5641b5454fb6dd1c34432a285cc0e9601182814cfd73c2522010b4fcc887e7959ba2548dada02f85a304e189345a64b5b5082c92c16db22afaae2e11dae6c3e7be0c09db9e3107d6ea0603475d7e351107edc280d021b44140a42df9b7ffd543e37ebf5f94dba41537f718c363967328fd406adbeb9be8bd046441bf4ab308c2e478768349f3c0f31082dfc89eba3a333b4af3e0ac68d1a032f34f38ebd1099868116d369e086c800fb11575a6495f990d08497c61fe6ebbdfeab258168a2789d5c3b864dccbe31a0317558dcef5a343638a57dea58a44b0d36e8f15e4439019e2eab572c92c9cce44e2732292196e9384edce7863518740736edd288c556b76b721a3b9d18df37f04d2e349f08b5934ad443c62bdf0bdd75e82fe7e351e8566dc4a448f4a4365736f1dca78626d7866102f08ddeeecbac90a056fe356f1ebafe681c7aa76ebd2833be25ec36b882558949a238a0494e52ae797e2c23181c3e59045ee82de6a31930aabf7fb247283cfc79f744086f77d5a475f52db5ec5ea5bf079c92a4a810d7f50343fabef15f151ca8f01b1070163519ff58bafe19ae433e8f79ce33f6fe0200b84abc7bddfb53032c1c1bc8c0566a01ebc65429c2725eaf9d484b337b76c7ec75bab802e7fa55ceb2ccfd6ccb1a65459ef24c3f74549f5a39aa2a55a8471024615be6706990fd07fe468937ea040000",
    ],
    [
      "ETag",
      "r6tSc2K1WcPWCIYSqDxBzA==",
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
      "Wed, 23 Feb 2022 19:53:41 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-19-1645646000696"
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
      "54",
      "5d",
      "6fda3014fd2b93f73888ec104212a9d2604d195b0a2dd0a7a9426e7201331367b6a1a588ff3e27a309db182b7d49eec739cebdc7f7668bbeb33441017a60b31f2b909bf733d0b7b93104b5e25a9957265205a88640d399413addec4986cf0ce65f9fbd5ebbd5e57ce1dc5e5c18848ae7b0a428d8a229039e28147cdba2942ec1d05862007a93e576af3f0ebbe1d0049622c903fdbb286a77a210ed6a2581c6b158a57a723671caa4d293c22989a3f1b0d7ef9ee671fa269ae998f1f32833481390e7715836a1492241a93379424d689655a4ce601085edfe7fc44f132958f206e69a9dcbe07a5d31aea2417b7c1a9f507d704597ed71781aaf345d1ed434ee5d87a371fbfae6346b32993f2e5f23f5fdae8616e26108539090c6908f7f26c50262ddcb374b99af73a82bb19231e49767c0456226c52aa35288ba89d4895f27aed3741d1763ecfaae01721153cd446ab07723531bd242533e148f66b1906d00b230cd8e4d8be7da849b450feb02f062454cd2d2f922e6a9d2e6d097005fec23ce47782a6ab562b12cd35766be39946eb3611197584dcff2fd3238a55c55102d57f08f9467e7f4aa446ce33ab6ebb8aa3a3f1afbd869f9468b96e787fe11f43b6207a41110c72a30f803c6c53d1c0ae11e11e21252563aa3987256e992a8c26fbe4604d2f02cd22016713cabe5bca6f1df5276ab61f9dedf7db97fa8e013e23bc704704b01f69ddfef67a3b3d1a06ea43083a6209f31829dc6af91fb24f2aecce604792d351453f3b3fecc340a8a4a773f01a9726f820a060000",
    ],
    [
      "ETag",
      "4GpxrEziehKz8IA7Gllj4Q==",
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
      "Wed, 23 Feb 2022 19:53:41 GMT",
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
  .get("/bigquery/v2/projects/sample-sources/datasets/test_001/tables")
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
      "b5",
      "92414bc3301886ff4bbcaa344babb5b0c3040f830e61543c8848967e8b99691393afc228fdef7e9bd41df430063be6cdc3431e48cf3e4c5bb382ad8cfeec206c2f50ae2c942622bb648052d3dd6266dd9736cf952f97eb45feb479d436eae994883d1d59f1d2ff2f22c4ecd6281b6fe12aba2e28880542c4b724e1d75229d7b51847d512d610a055c08a9ef9e036a070fe5740782d5146f8b91c75a3653ffeaa075ab79e8cac9add970f04a900128d6b2bd3ec667e932693446482e7935bc24f6cf1747ea7379d23e6e03eb2868bbb948bf4f49a00ca85fa1c2da3f9e8929c679960c32bf10ea59d2334f4e5c4f00d3b88cf78bd020000",
    ],
    [
      "ETag",
      "MAlovgiWTpLRfM8UjOglsg==",
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
      "Wed, 23 Feb 2022 19:53:42 GMT",
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
      "d4",
      "4b7282300000d0bb642d4e0c4aa5bb100ca0a0821fc40dc32732200206948fd3bbd7e9b657f01de2bd401045acaefda6bcb2027c833e40f2381a87109f9e70d86f2ccd92bca76bdfa6c6e22a1891f8c044282315f6dc4af3cd9cb68be16eee7011e69210518f95903f31c75b34e8ae423cd6520a91bdc4cbbe5a6967a14cd5e3349494d437339eecd731d12eaadccd0d9a4fec3881ed2aa085613dd6886ce30cae74f1f44087f3c686bb895a5cbaed97ceacfcd02d7c93dc8984d637b742a57e74867d2093cc0cd1598559d1b90df6a62255fc83e9cc73276c32ed16c384d6ce0cab1321197f7c7cfc0346807555ca59eda7ef0fc4992c8fc05f0e7ed357ec3d84c202ce38f8f905627051313b040000",
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
      "Wed, 23 Feb 2022 19:53:42 GMT",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-20-1645646000696",
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
      "0000000002ff85536b6f9b3014fd2bc8fbda2440087948d11aa574454bc80aa4dd4313b21dc3dc114c6dd3aaaaf2df77314dd7aa52fb09dbf79c7bce7df088fef26a876688f0e2b661f2e1d38d20e804318d0b787578f0dd6bfcafea3e4cc9ed84bbe3faf2e7fd7c0e08deb214ded725eb29d148cad46c9bf40b299a1a4b217a90a8e7da3dc7f746bee7dbb6ed4f7de02956e62b5efd05f61fad6b351b0c8edafd4288a264b8e6aa4fc5fef97d70e70e6a296e18d56af05a72002a6af0bee8e75250acb9a8e6db040c348ac98ced312fc1c27fe68e9cbe4edde778df2f007cc729c3948aa6d2ad2d48414595f3a291262b9a3d2263f3c50125c12a58a6161565b3afb20aefd989b5c31a67faa166d679bc595b6174be89d78b34dc4459b2bc08d68bfe72b3daaea3c4babe08e2c0d29894cc70adb9756a6e115c407fc794e695514fdbe756f9a941e1dbb1b4049056ac0b6663dbc7cec49e929c8c693e198e486e334226643cc24362d3a9c7bc1d61187846d4b07025aa89cff2a1eb4e338c9d51e639fe349bf824cf803e728883291e0fd1e104dd4baed91957b550bceb10ba8ec334c8d2781b2d1769604ac87153eab3ce585bc04b8f1a0acc6cdb01e03b751dda2817a0d6b63c8cd2205e2cd3f02ae8a6bc6205a60fc92dcc39c7a56280c6121aa8995c8b1d340d458b7570066033b56fc7a042b35f8fa8ed7bebe445db9fe9290cb1b5accd1725691c465f8c9d23e20a978d81dc750724191572079e0fbf01076bdae54097db20fe81baa798e54cb28a7e3c4f009bc0877fdb71f5010bcb0f324ac31db687aa56844ad66d1137c51ed9aeeb4d87c880a57e13f35defd8b336479b91ed59a59f2aea561f0aedc41af50c82202c40647a75f80733b3e9197a040000",
    ],
    [
      "ETag",
      "1iEX4u6KswITbq8i27pQZw==",
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
      "Wed, 23 Feb 2022 19:53:42 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-20-1645646000696"
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
      "00000002ff8d93516f9b3010c7bf8bf758229195b00da90f499b756834e912aa3d4c1572ed83b8311cb34daa28ca77df9976d9b44ea22f7077fe9db8fbfbcf816d552359c21e54f5b303b37f5781fbe68315d84e3b4baf161b0b2c60e07845e4d9f6fa2a9d3c6dcebf8bf472536fab7d74f6b5bab820c28a0dd49c2507562ad0d2b2e4c78135bc066a13a8bbba29fa2c606edffae23a5fa58b6bca6b943e5fdc65d97496cdd93138354aee78d1f36f68bb3f06ec111f5650828146809fa535f808c2a57e4dcbeb56c3c862670458d6c3fd4165b06bb9411c5165f43e1c8de3681247711886f1a798408d823b850db1776b9a8f39745caff089b664e373224c1fd3c665ffdc515dc97e131fa68b3c8efa01ff06b810d835ae18044b65ac7b56ef37f8a2c2bfa4e66f04e9aa941e822a682498214ab50597d280b58324da82b7ed099b2d97d96b551a6950c96170a70600ed7627e073b69cfe4f5a32d81fadaea6f9fc15611dd9e684e4e9cd7c9d4f6f6e3d77ff6284d9de81bd3548aeb2e00d350ea38f930f71f8ecb14bf4bea3ef24ce741030c1e957f9a21c4b4aae2d1c7f01a900d59988030000",
    ],
    [
      "ETag",
      "+kGDI5wh3WcIChmkgy4+Kg==",
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
      "Wed, 23 Feb 2022 19:53:43 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `records` ORDER BY `stamp` ASC, `id` ASC LIMIT 4 OFFSET 0",
        types: [],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-21-1645646000696",
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
      "db",
      "6e",
      "9b",
      "40",
      "10",
      "fd",
      "15445fdaca366030d896a2d6717045e5d82de03679b29765209b00ebec2e89a228ffde595fd2449192b7d5cc3973ce5cf6d1bc614d6e8ecd8c95b72d88874fd73c333b26285262f474115fdc8f2e6e13f5b39a5f126fd8cf2c3e39394104d32c49ea6d055dc95b41418e5749af14bcdd12c179170b75fb4ed7f1bd81eff9b66dfb231f7912aa62ce9a1b645f29b59563cb3a6af74acecb0ac896c91ee5f573dcbaeb5b5bc1af812a69bd96b450455aef8b7eab38258af1e66495a081568258434d588516fe33f3ecfbebd23d46ea5e89e03b468150cadb46695b5882f2a660652b7655cdf1a3b9b3f9e26126e13c9ca6c6d78e914c66e17a3a49d2cf1ba9506063106924691c2d7e7cd1cfcd7a7d755f6f8c59bc3c3736022817b9dc18cbf82c8c8dd34be3c89a24d38eb161f9ee65cca3f328353c63399b25616ad8682a07a958b3b39492ac026de730b5e8edae34812822619f5c07b64f9ca13dca8a2ca0c5d01d64850d5936cc820171339b8e3cf0f20c08f294aebe639186370ef13c9ffa8e1b805b90dcefd360e0dad421fd514e83c0b1dda008fa949a4f1df35e3005674c6eb964fbd1997fe3280dd769bc5a4c2769b86ba3206da5cef6e674132f7d2a6c726ddb0e02dfe9ed4967194735bd8b689186f1649a467fc2fdfae75012fa90dce20114a492806822480d0ac439cf7170e6af6512a5d1723199eb5a7854e9c356c77fafc2f8f2108aa100010dfd78d008de253efc1bc743452c9e2acae0ee15c3b552a945a880fd7a59adcd1cd97dd773f540102cd49bdcc0d3959f0f5457841a1a75e8687fa8e6d341ac95cf204ce2561678a798fd070d",
      "9b451f28040000",
    ],
    [
      "ETag",
      "BNRXw9XqStJlLYa482b/oA==",
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
      "Wed, 23 Feb 2022 19:53:43 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-21-1645646000696"
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
      "0002ff9d55ef6f9b3010fd5726f6718965832110a9d26847bb4cf9d1a6a93469aa22179c841630b34ddaaceaffbe83b684a82c6bfa81e03bbfa7dc7be7338fc65d9c4546dfb88997bf0b2e379f975c5f948b295745a215bc7291296e740caed91290a3ab61713ef0fd6031e9ad36e4a71dfdb95f5d1c1d0142852b9e32a3ff682c629e44cae8ff7a34329672a0c51100f4262fd783f12c380ba69048455426c657c3a17f3c0c8ca74e4d6061288a4ccf0f262e62a9f4bc0a6ae2e56c3a189fede725ec4334501c278751963c8bb83c8c13e7731645922b75204fa839cbf32de978321906fef83fe667911471f401e63a3e9491e8f596713a9cf8b3fdf888e9468bbef9b3603f5e6996366a9a0d46c1e5cc1f9def67cde7abfbf43d565f3f758c5b7133e50b2e7916f2f2f8e752dcf2500fcac952f0ef09ef2a51c89097cd0370b5b194a2c89914a20b99ae49bac4a1b6431d8cb1e339004c44c8742c32c05e5d426d86169a2553710f83655000c86a0933b6a87ed790269586dd5520635e073fb85c8b58d531bf7d4ee0affca1aa148522ad77472cd952898d4cda43968b7a669dd4b2d822162c51bc7dcbb43d44b634139bb88bcd2e6e148c6c17dbb6473c1a782dc04fc4ec13ab4fe8178c2bdb9bbacd16dd272c8c9386f4a03c38af41c82122ada24f61a49366e51622d4419420b351ee1eadbb5b1e4596f3568fb92b1c7a6f7bd46e536ed6ca918d719b7aab45fd99e49a278d5014a108efeac472f99231df650221c8850e128c88450feebee3b8c87aabccdaf5a067110f3c707a6d2e580d179c5e9b0bb4c5053f659a6d4f84d05c2d848cea0c0b5f53d67b6c209e853c98020c8fd32ef5df010503f15b6174d70497b8566582dbe602dd71c1ad8fc3f5cbed70bc0139e752c055a37879cbe0e71be74494d2e0fcf7cb923a46c8e05bfd3dd6cff1d35f3fa41afe08080000",
    ],
    [
      "ETag",
      "MULuPIAAEfO7hy1X5dzwhQ==",
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
      "Wed, 23 Feb 2022 19:53:43 GMT",
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
      "d4",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "64ad0ecaa0a53bc00181a0fcacd24d064240e513fe109cdebd4eb7bd82ef10ef09428c49dba28e66a4049f80851b71855711275d076ef68f699dfaa8be6a873281b9c7e69d36ebc9c3d80cd63216f673e0a76bd64ec679eeb57a4c6001ad3e4cca4ba256e6f465e84e26e6db3b35f25e906cc5b519dd44cbed607ed030a0b71c46eea8ea06163afb74b40cb9e75418df02732d8463d61c541db938367d8725ae425a7e80a5f6cd9fb046ec424242be6ba9e79f9d8c8b91ac3d024c14185d469a379ec4ab1399524e970fd5daebfa1aed8aed1ec6ce50c4353c326bf5f6f6f60f58003255f786b4e8fefa8017447101fe72401dabc86b0899840d69c0cf2f2aedeeff3b040000",
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
      "Wed, 23 Feb 2022 19:53:43 GMT",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-22-1645646000696",
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
      "6b",
      "4f",
      "db",
      "30",
      "14",
      "fd",
      "2b",
      "91",
      "f7",
      "95b649489f5235aa12a0539b429a82b6698a1ce726332471b11d3684fadf77e3500642824fb17dcfb9e7dc479ec81daf52322109cfef6b908f5f6e45428e08689ae36b74fe635885a3b2c8fae3d9e5b700c2bfceddd5748a08deb0142d77057494a8250335d96ebab914f58e4a213a98a8e3ba1d67e0f507dec0b6edc178803c0545b6e4d51db27f6bbd53935eefa0ddcd85c80ba03baeba4c942fefbd07b7b793e2169856bdb7923d5451bd8f45bf168251cd4535dd6ed040ad40c650525ea085ffcc3439799bbacb69d9cd11fcc01950c6445de9c616a660a2ca785e4b93954c9e88b1f9ea4036fed29f471613455d5671454b38b252aa69ac1f77609d85eb95b508ced6e16a162dd641bc995ff8ab5977be5e6e57c1c6bab9f043dfd23429c070ada975626e015e503f05a57965d4a3e6b9517e6ed0e2fd581a024a2b6883f1d01e5067648f932c19b26c74dc4f321b9264940cfbf438b1d9d8032f4d8022cf881a16ad44e5819b52cf4be3643cb2632f3976e38439a3d8eea743ea8c6dea8e33b23f227f24d770cad54e28de7688dc848bc88fa3701bcc67916f4ac8685de8d3d65853c06b8f1a0b8c6ddb41e00775ed9b2817a8d6b47c11447e389b478b6bbf9df21272ca1e37f738e78c160a104d253650835c89149b4682d9ca3f45b099dae521a8c8e4e71369fade3879d5f6177a84436c2c6bf3259b285c04e7c6ce01714d8bda401eda0391c0844cd1f3fe17e2704ddb1ce46aeb87df49fb144206122af6f93c116c029ffe6d87d5472c2e3fca288d77dc1e",
      "a61a1126a1dd226e8a3db05dcff13c62c052bf8bb9fdc1a1674d8e26239450e9e78adad5c7425bb15abd8030880b10985eedff018d283a3b7a040000",
    ],
    [
      "ETag",
      "TGZ7nR8mlf59APJNeRx1kQ==",
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
      "Wed, 23 Feb 2022 19:53:44 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-22-1645646000696"
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
      "93",
      "61",
      "6f",
      "9b301086ff8bf79548a44dd986d40f64cb36269ab4844a9ba60ab9f6419d198eda26551ae5bfef4cbb6c5a27d12f70777e4edcbd7ed9b39faa952c66b7aabeefc1ecded4e0ae7c9083edb5b3f4eab0b5c002068ed7449ea6778bfcfef181af125c6ff051cdbf7dff5a9f9f1361c51d349cc57b5629d0d2b2f8c79eb5bc016a13a8fba62d872c606ed7f9e2bac8d3e567ca1b943e5f5e675932cf16ec101c1b2577bc1cf857b4dd1c02b6c1db1c2a30d00af0b3740637205cead7b4bce9344c2cf6468065033c1cd406fb8e1bc409552627279369343b8b66511886d1fb88408d823b852db1d76b9a8f39745ce7f8405bb2e92911668869e36a786ea9aee4b0890fd36511cd8601ff06b810d8b7ae1c052b65ac7b52ef37f8acc2bfa4e6af04e9aa941e836a682598314a752597d280b5a324da9277dd119baf56d94b555a6950c97170ab4600edb647e053b64afe272d19ec8f561f9362f182b08e6c73448af462b12e928b4bcfdd3c1b61be73602f0d92ab2c78434dc3d9bbb3b751f8e4b10fe87d47df899de9216082d3aff2453916575c5b38fc027837d88388030000",
    ],
    [
      "ETag",
      "3IhERqzwaOAoSjoziBXYJg==",
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
      "Wed, 23 Feb 2022 19:53:44 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `records` ORDER BY `stamp` ASC, `id` ASC LIMIT 4 OFFSET 4",
        types: [],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-23-1645646000696",
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
      "db",
      "6e",
      "9b",
      "40",
      "10",
      "fd",
      "15445fdaca17b031d896a2d6757084e44b0bb8559ef0b20c641360c9ee92288df2ef9df5254d5a29795bcd9c33e7cc651fcd1b5667e6d44c5971db8278f870cd53b363822205464327bf84cc5eac6edadf1b31b8289b6d3d2fcece10c1344b92aa29a12b792b28c8e936ea1582b70d119c77b1507730ecdaae33721dd7b22c77e2224f42992f597d83ec2ba51a39edf74fdabd82f3a204d230d9a3bc7a8ef7ef06fd46f06ba04af65f4bf65145f6df16fd52724a14e3f5d9364203ad04914045588916fe32b3f4ebebd23d46aa5e81e03b468150cadb5a695b5882f23a67452bf655cde9a3b9b7f9e26146fed29fc7c6e78e11cd167e329f45f1c79d5428b0338834a2380cd6179ff473972457f7d5ce58849b95b11340b9c8e4ced884e77e687cbb344eac5934ef183b96ed5fc6325805b1e1189bc522f2f181a632908ad57b4b31494bd0768e530bfedf95261045241c928967b9c41e5b93344f3d9a8f87a334b7204dc7a93722c3d4a213079c2c05823ca5abef59a4e6f5d0b6a997e71e19e0b8bdb19eb807f670e8daee28b506e00c616c674e6a3e75cc7bc1149c33d970c90ea3337f8541ec2771b85dcf67b1bf6f23276da9ce0fe674132f7d2a6c32b12c1b816ff4f6a4b38ca39ade45b08efd70368f839ffe61fd4b28087d886ef10072524a403411a4020562c5331c9cf97d130571b059cf96ba161e55fcd0e8f88fad1f5e1e4321e420a0a6ef0f1ac1fbc4bb7fe374a888c5534519dcbd62b8562ab5081570582fabb499137be04c5c7d000816eadfdcc8b627987b3e505d112aa8d5b1a3c3a19a4f47b1563e83f4f7dfaed778a798fd033511",
      "bb8b28040000",
    ],
    [
      "ETag",
      "R4fYed1FMkuzOr2GlpUnCg==",
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
      "Wed, 23 Feb 2022 19:53:45 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-23-1645646000696"
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
      "555d4fdb3014fd2b93f7b836b213e7ab12d25a08d0ad14d616216d429549dcd4e0c49ded9421c47f9f93b1a4b0d0b5bc24bed7e7a4f79c6bdf3e823b9627a0076e58fab3a0f2e1634af5b77231a1aae05a99d74ae48a820ea09aa406b91ed3ef99c8aef4145f1df17888073f9d497a7060102a5ed28c80de235830ca13057a3f1e414e326a682c3100fdb02ad7c3f12c3a8926269189a44c8c2f47a3fe601481a74e4d20712c8a5ccff7262e98547a5e0535713a9b0cc727db799cbc8b661433be1f25a57942e57e1cb69a93249154a93d7942cdc96ad59006e7e7a3a83ffe8ff97922054bdec15cb37d195caf1bc6f1e8bc3fdb8e4f88de68d1517f166dc72b4db28d9a66c3b3683aeb9f5d6c67cde7cbfb6c17abaf9f3ae056dc4ce8824a9ac7b43cfe2b296e69ac87e5cd52e6d739ed2a51c89896cd33e06a2395a258112944d764bab6d3451e763dec4108bdd033402e62a299c80df6726a6a035a68c227e2de5c2c800d40564b73c716d5736dd26ea5a15cd9f56ac424a9832f62992b6d3efa37c16f9f33f833fd55d56ac522abb78fcdf9e6b40e5dc7421eb2dcc00ac33ab9205c35102d0bfac6566097f4a64468c32eb4bbb0a9bafc340c21f643e3851f8451d882fe80ec1e727a085b15067e82b0eac3a6115e8b1147346775308d09678d2f89aa62771713901358c84116c281e5e35d84bfd8b27dc70a837f7579af5c08110a719b015e6d409b72bf45f929e569a3f52ba74cd5d1f2ae0cbd5d8407ae651bcd46bd1bb46b7b3bc0d0b7361a5d8bf15fa846d0f7dd76d5fe56d5418bea132a356b2a382c6e98d67598c655ecefd47173706dd7355d87c681379abca5e50146166e111fbc148f3c276c171fbc167ffd3c0e060f9aaa0b29cc6c51b41c2b0862e7cf943914a52c332c7b652d1d1013f3ff7cca34e855953efd060865f042fd070000",
    ],
    [
      "ETag",
      "vNeZmomWtS4WDlcI4Bq3Rg==",
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
      "Wed, 23 Feb 2022 19:53:45 GMT",
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
      "ffedd44b7282300000d0bb64ad0ea222e92e285523c452c5a89b4c1223032d91123e4aa777afd36dafe03bc4fb065c4a650cabae1f4a831770e7361cc881b0d0a1b1baddc66c25caf4e5bd5a89f68c5154902326b17f0cea6869999d831613cef96a7ded08956df1799527e89c1b96356538bcf7dd3036eb906a7408764d41433c254134f76ba8fb8e8614396262aa60ac5dba154988582b2e599dc7388724faf22556442c5ef7278fb95e7eb14561d994f051ebc00eee7929d8688cd321d4eed6c7b3a45fcee81bb136627a3a66191ccf9770dd26328e659dc3e636f452ea4f3154679b2683a7a7a77f400fa85b9196cab0f4f1c16802610ffce5c0aa7ba11e43788a97aa043fbfe18b730e3b040000",
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
      "Wed, 23 Feb 2022 19:53:45 GMT",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-24-1645646000696",
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
      "6b6f9b3014fd2bc8fbda2424844722456b96d03552423a20adb66942c618e60e706a9b565995ffbe8b69ba7693da4fd8bee7dc73ee8347f48bd5199aa29415770d15870fb73c4567882a5cc0abbc7a70d34f3189dc83bb8ccccbf8f7b780cd673340b0962571b52f694ff246102aa7bba85f08deecb1e0bc07897aa3716fe88c6d67ec98a6e94c1ce0495ae66b56ff02f64fa5f6723a189cb4fb05e74549f19ec93ee1d5f3fbe07e34d80b7e4b899283d79203509183b7453f969c60c5783ddb4560a0915424b4c2ac040b7f99597afe3a759fe1aa5f00f89e118a09e14dad5a5b9082f03a6745237456347d44dae68b038afcb5bf880dc2cba6aa931a57f4ccc8b0c2893aeca971116e37c62ab8d8869b79bcda0649b4b8f437f3fe62bbde6d82c8b8b9f443df50382da9e61a33e35cdf02b8807e46a562b5568fdbe756f9a941abffc7d212405ad22e98b8a683879e3949f3d425b967d9696ed234f552d7c6566a92c9988eb39462e06951cdc235afb19be599eb6489654f46c918675e828769968c2c6be299ae3dc4968d8e67e8413045974ceeb9645d87d04db88afd240e77c1621efbba841c37a55a76c6da025e7a545060629a4300be51d7b18d320e6a6dcb5741ec87f345bcbaf6bb29af6981c921ba8339e7b89414d058400315151b9e41d35030dff84b00eba95d9d82124dbf3fa2b6efad93176d7fa6c730c4d6b2d25f14c5e12af8aced9c10d7b86c34e4be3b2041091719783efe001cac6997037dd9f9e157d43d8534a782d6e4fd79025807defddb4eab0f58587e90910aeeb03d44b62244d06e8b982ef6c41ed99ee5210d16eadf98630ebd53cfda1c6d465ad15a3d55d4ad3e14da8935f2190441588040f7eaf807a3465a837a040000",
    ],
    [
      "ETag",
      "sPw7bBTcS7y7DS0HTzZNiA==",
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
      "Wed, 23 Feb 2022 19:53:46 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-24-1645646000696"
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
      "02ff8d93616fd3301086ff8bf99a4a29640122ed430b652b4adbadcd242434459e7d091e4eceb39d7655d5ffce391b0531a4ec4b72777e4eb97bfde6c07eaa56b28cdda9faa103bb7f5383bf0ec11a5ca7bda397c1d6018b18785e13394b1e37c9427f73c9d70b2e7273b9bd7ed8edcecf8970e207349c65075629d0d2b1ecfb81b5bc016a13a8bba62dfb2c627e6f427153ace7cb0bca1b94215fdee4f9649acfd8313a354aee79d9f3af68bb3d46ec1eefd6508185564098c558bc07e1e7614dc71ba361e4b0b3021cebe1fea0b6d8196e11475419bd4d46e334394b93348ee3f4634aa046c1bdc296d89b0dcdc73c7aaed7b8a32dd9f81d11b68f69e3aa7f6ea9ae64bf4908e7cb224dfa01ff06b810d8b5be1c042b659d7f52ef37f8acc2bfa4e6af04e9aa941e826a6825d8214a99924b69c1b941125dc98d3961d3d52a7fa94a2b2d2a390c6ed500a0fdf6047cc95793ff494b06fba3d5e749317b41384fb63921c57c31db1493c555e06e9f8d30dd7b705716c9550e82a1c671f2e1ec7d1a3f79ec1306dfd177326f3b8898e0f4ab5c2acfb28a6b07c75f9f71909488030000",
    ],
    [
      "ETag",
      "E4xS4MlXs4JGacLpHvQqww==",
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
      "Wed, 23 Feb 2022 19:53:46 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `records` ORDER BY `stamp` ASC, `id` ASC LIMIT 4 OFFSET 8",
        types: [],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-25-1645646000696",
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
      "db",
      "6e9b4010fd15445fdaca36d8c6605b8a5ad7c115922f29e0467932bbcb403601d6d95d124551febd03b6d3449192b7d5cc3973ce5cf6c9bce5556a4e4dcaf3bb1ae4e3971b41cd8e099ae41875c3ec22dfae6f66eceea2b85c6dc7d7f703959f9d2182372c45ca7d015d256ac9404db7512f97a2de132944170b7507a36edf7546aee3dab6ed4e5ce42928b225af6e917dadf55e4d2deba4ddcb85c80b207bae7a4c942f71eb7e60eda5b801a695f556d24215657d2cfaa3108c682eaab36d84066a05720725e1055af8cf4ce9cfb7a57b9c94bd1cc1f79c01614cd4956e6c610926aa8ce7b56cab9ad327b3b5f9ea6146fed29fc7c6f78e11cd16fe6e3e8be2af89d22890184419511c06ebdfdf9a67b2db5d3f9489b108372b2391c0844c55626cc2733f347e5d1927d62c9a778c84a7edcb5806ab20361c63b358447e6c8cd1540a4af3aab514135a4063e738b5e0fdae1a02d144c121b9f36c97f4c7f68466d463d97838a2990d948ea93722436ab389034e4a81204f37d55b16a944d5f79c3425e91852ea646498a61ea59e638f3cc761c41e0c32c826e9984ccce78ef920b98673aef642f1c3e8cccb3088fd5d1c6ed7f359ecb76d64a42ef4f9c15cd3c46b9f1a9bdcd9761f811ff4f6dc64b940b56617c13af6c3d93c0efefa87f52f2127ec31bac303c848a100d144921234c895487170e6c5260ae260b39e2d9b5a7854f1e3be89ffd9fae1d531144206122af6f9a011dc263efd1ba743452c9e2acae0ee35c7b532d588300987f5f2b23173620f5ccf9d982d58ea77b9c9d0c3dccb813615a1844a1f3b3a1caaf97c14abd50b0893b89535de2966ff01efd07f1128040000",
    ],
    [
      "ETag",
      "6RfPgUNjAcqPlWMU8hv2sg==",
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
      "Wed, 23 Feb 2022 19:53:46 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-25-1645646000696"
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
      "54",
      "5d",
      "6f",
      "da",
      "30",
      "14",
      "fd",
      "2b",
      "93",
      "f7",
      "3888ec7c8d44aa3458d30e890203ba97a98a4c7c09694d9cd90e2d42fcf739d996a0ad65a52f89eff539ce39d7f7668f1eb29ca1102db3f4470972f73e05fdb55acc40955c2bf32a44ae007510689a1a24fe3667de740ccbc13aa1db1ef1d6b30737bdb8300895ac614351b847ab0c385328fcbe4739dd80a165cc00f4aea8d6c3f122ba8e6626b111ac4a8c6f47a3fe6014a143a721d0241165aee3b389ab4c2a1dd741439c2f66c3f1f5691ea76fa219c7193f8f9242ce409ec7c98a98322641a9337942c5b4285ad260321945fdf17f8a9f332932f606e6363b97c1f5b6655c8d26fdc5693ca3fae88a2efb8be8345e69ba39d2b418de44f345ff667a9a15c7ebc7cd6b4a7d77e8a07bb19cc10a24e40954ed5f48710f891e5693a5ccd7397495286502d5e51970bd914a5116540ad13599aeed7589ef7abeeb638cfdc037402e12aa33911beceddc68435a68ca67e2d10c16b20d40d64b3363abfab935e9a0f6b0ad017f56a3527280bc890786079c37315ffe4af43ec1532dd64ac4a6d9bd320dcea13dd62116f102cbf32cd769b25a962d6445b97a29f26dc772dcf6346ce32eb6bbb8d54d2caf476c0f3b811b05cf00df113b244e48dc0f18d7d53fb64f70c368c55d0aa9d7bb261c2a2dda62b0ac0a83d758773dcb7689e5bb16f19d17fc9d28841d60cb73fe717424b9b6ee38fec767ad13fcb7f5bbdf2d31d8695053294c7f29607519ccddd49df65954aeccc08495b20e4aa8f9477fc9340a6b71879f2e9060bb01060000",
    ],
    [
      "ETag",
      "0VSd5PNebBhcav815hRk4g==",
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
      "Wed, 23 Feb 2022 19:53:47 GMT",
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
      "d4",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb64ad4e08a2a63b29ada0510481021b0631183e2a3f89b1d3bbd7e9b657e01de27d83384968db46ddada057f006448cf024991ce1d2efe1d3314de91e2ac5cdadd4f7dc59a1607646684aacab1bac3c761047ecc8bef6d5ab294f8b3690842fb844aa5e5d17252beae9798fd9769ef6d642cb4906b3fc03f5e6cc8b3ba8cb97923378cd376b64d85aeae731bf085e749569a3a75186a7d43bf90b4a42376a050b965b815d756cef906d243139ea2b231897bb93a5f34f6726d716d9d67a742885b49baa9635269281e799061dd6ed378b8b720b1b8f4501ab1982f7864f0683c13f6004e8a3ca1ada46d9eb0359c17804fe72883a51d1d7102a8d1bda809f5f5f12267d3b040000",
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
      "Wed, 23 Feb 2022 19:53:47 GMT",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-26-1645646000696",
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
      "6b",
      "6fda3014fd2b91f7b540782580845644d3160d421742bb6a9a22dbb9c94c434c63a72daaf8efbb714ad76e52fb29b6ef39f79cfbc833b913794c468489f4be8462ff6523193921a0698aaf4fdff69b1bf134948ac1adda0c2eba3ff6ebc7f11811a26229badd65d050b22c38a8d17ad54c0b59ee6821650313353a4ea3edf4fa4ecfb16ddb193ac85390257391df21fbb7d63b356ab58edacd54ca3403ba13aac9e5f6f5bdf5d069ed0ab901ae55ebbd640b5554eb63d1af99e4540b998fd72b34502a2822d85291a185bfcc989dbe4fdd1474db4c11fc203850ce6599ebca16a6e0324f445a16262b193d1363f3cd81acbcb9370d2d2eb3729b4739ddc28915534d23bddf81751e2c17d6cc3f5f068b49385bfad16a7ae92d26cde972be5ef82bebe6d20b3c4b539681e15a63ebd4dc7cbca07e0c4a8bdca887d573a5fcd2a0d9ff63a90828ada00e46aeedd0f6c01eb284b93c1974fb2cb181b10173fbb4cb6c3eec412f66409167440d8be632ef76edd869b36ed4ee7458d4e32e8b063d6718b96e0249ecb20e8f637238218f85d07026d44e2a517788dc04b3d08bc260ed4f27a1674a486899e9b3da5855c05b8f1a0b8c6cbb8dc00fea3a54512151ad6af9cc0fbd60320d67d75e3de539a494ef57f738e784660a104d0b6ca0866221636c1af1270bef0cc1666a57c7a022a39fcfa4ea7be5e44ddb5fe9210eb1b2accd97acc260e65f183b47c435cd4a0379a80fa4002e8b183d1f7e210ed7b4ce41beafbde096d44f01245040ce3f9f27824de0d3bfedb8fa88c5e54719a5f18edbc35525c20ba8b74898628fec8e3becdbc4800bfd6f0c37c73ef6acca5165842de4faa5a27af5b1d05aac54af200ce202f8a657873f2057572f7a040000",
    ],
    [
      "ETag",
      "xKyjWix9osbeYsj8G3XyUw==",
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
      "Wed, 23 Feb 2022 19:53:48 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-26-1645646000696"
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
      "93",
      "61",
      "4f",
      "db",
      "30",
      "10",
      "86ff8bf73595d211bc2d121f5ad68d4e69cbda2081261419fb92b973eccc7682aaaaff7de70005c1a4f025b93b3fa7dcbd7eb3277fa416242577b2fadb82dd7da8c0ff0cc11a5cabbcc35763b4031211f0ac42b2a65e2cb6ddcd6aeb1717d94d779efcb89ede9f9d21e1f86fa81949f7a494a08423e9af3dd1ac066ce346b5b52efa2c227ed784e2265fcf97df31af8d08f9f22acb26d36c460ed1b15130cf8a9e7f47dbed21225b73b786122c680e6196c69a2d703f0f6b3a56370a46ceb49683233ddc1f54d6b40db3c68cb032fa4847639a9cd284c6714cbf500495e1cc4ba391bddae07cc41bcfd4dadce396647c8284ed63dcb8ec9f1dd6a5e83709e17c99d3a41ff025c03837adf6c520584aebfc837a4fe0a30aaf49c5de09e25549350455a005d8214a360513c2827383a471056b9a23365dadb2b7aa68618d14c360270700e5bb23f02d5b4dfe272d1aec59abaf937cf686701e6d7344f2f962b6c9278bcbc0dd3e1a61baf3e02ead41573908861ac7c9e7d34f347ef0d8b909bec3efa4deb61011cef057b9909ea425530e0eff004cc33b1c88030000",
    ],
    [
      "ETag",
      "m6tdMjvYOjtMHLYvC4JXBw==",
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
      "Wed, 23 Feb 2022 19:53:48 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `records` WHERE  `id` > ? AND  `id` < ? ORDER BY `stamp` ASC, `id` ASC LIMIT 100 OFFSET 0",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 4 } },
          { parameterType: { type: "INT64" }, parameterValue: { value: 7 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-27-1645646000696",
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
      "ffa553db6e9b4010fd95d5f6a56d7c59dfc0588a5262e316c9971470a2f4227b5916b209661d76491445f9f70e10e7d24ac9439f58cd9c33e7cc30738faf4416e1110e45725df0fceec3a50c7103734d1388eea6c575bfdb3bb6e4d4fe11ddceaec607f383e4f01010a26429badda5bca9649133ae462bbf95e4b2d8d15cca26146a76cd66c7e80f8cbe4108312c03788aa7f14c6457c0bed07aa746edf65ebb954899a49cee846a31b97d8ab76fbaed5d2e2f39d3aafd5ab20d2aaafdb6e8512a19d54266872b1f0c148ae76bbea522050bcfcc28fcf2ba744bd06d2b01f08d609c32268b4c97b6a00493592c9222afaae2d13dae6cbe7860df9939e3007d6e20df9e3aebb1ed071f374a83c0065185fcc073175f3f95cfcd7a7d71bbdda0a9b79ca34dce99cc23b54167df1ccf416823a20dfa5510d2e3e808d98bc9cb1083d0d29b381e3a3e47fbeab63f6ed41878a1993b7703d421042da753df091001fb11575a6495f98086292f8d3fced7fdf7af9604aaa9e275726d12837686c40ae3d064f1b0370863c2c370189a03da0b09b3fabc1f859c024f97d52b16cd64d6e16637ea84940e3aa669c6434e0696d5b38cb017462c1ef47a1d1ec66637c60f0d7c9b0bcd2742eda412f590f199e706ce3af0568bb11d38551b312d523da9cd954dbcf4a9a1c935211d00bed1db43991512d4cabfe62e02c7b3c7817bead48b32e3096577fe35ac4a4c53c5014d73bae59ae77319c1e0f0c9d2770377b9b067c0a8fefec91ea1f0e8e7fd3321b8db5593d6d5b7d432fa95fe1e704ad3a242dcd40f0ce987c67f5530a1c26f40c059d464fc7de578e7b80e793ce639cfd8fb0b00e02af1ee75ef4f0db0706c20035ba905ac1b53a508cb79bd76625b9ad9b3bbc3a1d1c51538d77fe72c4286fbd99635ca8a7ccb33fdd8517d6ae5a8aa54a19e4090846d59c0a541f60f75335232ea040000",
    ],
    [
      "ETag",
      "pFuq423B9oFAZdwLkC+M+g==",
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
      "Wed, 23 Feb 2022 19:53:49 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-27-1645646000696"
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
      "000002ff9d546d6fda3010fe2b93f771247342080952a5c19a764c143a08d3b4a9426e72805b1367b6034588ff3e27a509db18837e49eee5799cbbc777d9a0479ac4a885eee9ec670662fd7606ea4b6e0c41664c49fd4a792201d5102832d3c82746931032dfe38f61fcfddb57e77d188d5717171a21a3392c086a6dd094028b256afdd8a0842c40d368ac016a9de676b71f06d7c15007163cce03fd71afd7eef402b4ad950412453c4bd4e46ce2940aa92685531247e1b0dbbf3ece63e45534dd3165e7516690c420cee3d07442e258809467f2b89c9034ad489dc1a017b4fbff113f8905a7f12b984b7a2e83a965c5b8ea0ddae1717c4cd4de155db6c3e0385e2ab2d8ab29ecde04a3b07d737b9c3599cc578b53a4bedbd6d003bf1fc214042411e4e39f0afe0091eae69b25f5d7191892672282fcf234b848cc04cf5222383774c4b09b86e53a0dd77131c6aeef6a20e3115194271a3b1ee9da90e28ab0215fe9c542b60688c2d43b362d9e4b1d6e143d2c0bc08bd5a38294ce673e4fa4d287be04d8c32ee27c80a7a25633e28b327da5e79b41e936eaa6e55a66c3337dbf0c4e09931544890cfe91f2ec9c5e95886d6c60dbc055d5f9d1d8c74ed3d75a343d3ff00fa0df5876cbaab72cc72c30f81dc6c53dec0be11e10e212125a3aa388305ae912cbc26f9c228255f74cab6e9996e3994de794c67f4bd9cdbae97b7ff7e5fea1826f59be734800b71460d7f9dd6e363a6b05f256703d6812f219c3cff3f691e72de9b569e585d45044f49ffa1355cffef6173dbe6b1c06060000",
    ],
    [
      "ETag",
      "xlinTeu98okTdZXV4/TcUw==",
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
      "Wed, 23 Feb 2022 19:53:49 GMT",
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
  .get("/bigquery/v2/projects/sample-sources/datasets/test_001/tables")
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
      "b5",
      "92",
      "41",
      "4b",
      "c3",
      "30",
      "18",
      "86ff4bbcaa344babb5b0c3040f830e61543c8848967e8b99691393afc228fdef7e9bd41df430063be6cdc3431e48cf3e4c5bb382ad8cfeec206c2f50ae2c942622bb648052d3dd6266dd9736cf952f97eb45feb479d436eae994883d1d59f1d2ff2f22c4ecd6281b6fe12aba2e28880542c4b724e1d75229d7b51847d512d610a055c08a9ef9e036a070fe5740782d5146f8b91c75a3653ffeaa075ab79e8cac9add970f04a900128d6b2bd3ec667e932693446482e7935bc24f6cf1747ea7379d23e6e03eb2868bbb948bf4f49a00ca85fa1c2da3f9e8929c679960c32bf10ea59d2334f4e5c4f00d3b88cf78bd020000",
    ],
    [
      "ETag",
      "MAlovgiWTpLRfM8UjOglsg==",
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
      "Wed, 23 Feb 2022 19:53:49 GMT",
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
