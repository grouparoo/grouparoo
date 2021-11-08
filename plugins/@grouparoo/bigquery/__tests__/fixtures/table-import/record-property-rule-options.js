const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1636335950628";

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
      "cb",
      "72",
      "82",
      "30",
      "0040d17fc95a1c0806a13b4014a2205a5060c3f0081d8b3c4cd4804effbd4e7fa39efd5dde27c88a8230965ebb9ab4e0038c19d4a6c53417f5e82e3e822dd40f0a6eba617fe11c679eed6ddd61653191f850356d4de4560b4f34cb4d398b84209eefa3af756424410be57a87e5ba53aef496ceda572a5d9888fa2512ed5b982367116ef8aa49f8c6153e3b84acc40c667a7d8ce9b662503a1798aabb52e2e5f0ed7acdd8fbd185a9c5fc819d7562d70fcf2c6f952ba5791a4a099cf1fd7857506e5bce32623d0ae2a46b8ce3f9b0800ef51561e4741ee25015d695669838f6bbe9dbdbbf0326800cfd8912969e5eb7cb48d326e06ffdf43af6e4f5bf41324a28f8f905b7d9c4bc19040000",
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
      "Mon, 08 Nov 2021 01:45:50 GMT",
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
      jobId: "grouparoo-job-1-1636335950628",
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
      "000000000002ff85525b6fda3014fe2bc87bdb0a49c88504096d154d5124a01d844d7ba2b639495d421c62a715aaf8ef3b49286d37a97d4bfcddceed996c45be2143c244baafa03c7c79908c5c10d034ad5f83d9d3c491db6b776b39df56b7fbdb6a92a6a3113244ad52745764d055b22a39a8e16ad94b4b5915b494b28b465dab6b79b667db6ee09a5edf4799822c998a7c8be27bad0b35348c97e85e2a659a012d84ea71b93bbf1b8f7da328e50370ad8cf789068628e3c3ccef99e4540b998f564bccaf14946bd851916105afc20dfbf1deb927e8ae9722f95170a09ccb2ad7755568c1659e88b42a1b57327c264d956f3ec8329c86e3b8f3b573bdb89975ee0a74bca70ad45d671acda2b8639968b301a545de98c49465501b9cda8cfe9f6d2da01a4d5a703d303d6af966c01236e0896fbb2c3181319f0d5c6a3393070e381b061475ba766f543497b96d05a66ff76dd7f57cdfb103e8738b9a6edf627d97ba74c029078ffb1e395e90a75268b812aa904ab4cd92df8b280ed7f162351f5fc661d34642ab4c5fb5c5d54dbcad53639348faa0af638d0a8949f5e4a2791c2e2ec771f42b6c97358594f2c3728feb4a68a600e9b8e4f850e0bcc8cf55b8f843daa705245042ce3f9f23921be0b3537d391ca4e2e9608ad2f88f4be3aacee025b4cb13bbba965775e0d8a42197fa5fcc321d07b1f3c1d48eb0835c9f1a6a0f871c4f61953a9310c499cfa3f904d1bf9937e75db6030000",
    ],
    [
      "ETag",
      "b9MwG4okF5k14+UPqPuGgg==",
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
      "Mon, 08 Nov 2021 01:45:51 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1636335950628"
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
      "9d94516fda3010c7bf8bf74a989dc4498cd407ba651d12655d489fa66a3289a1e920ce6ca70821befb2e6945c2e6b1d117b81cf7f3dfff3b727bf4a3287334428b62f5b3166af76e25ccd7264884aed746c357254b2dd00009c35750a9bd679347d3e5fb551dd4c6a5c6ad4bbdbdba820a9d3d8a0d47a33d5a16629d6b34fab64725df08c08a1c0accae6ae2c92c8d6fe204121b993789d9fd743abe9ec6e83038024a6452e5df2fe6aa5a658fbcbdf12b364f93c9ece63cc537b22e4dc77c9a7e19a7e7919c9b9ec8c7711a9fafd7866faa0e4827b7f13c1ddfded9a887c3003dc9452296428932134d4f2b259f446626cdb8341cb5168e96605668d416b73fac94ac2baea47420e31087045ee07994511cb811d4ad65c64d214b28bd9fc3ed909186af13b985612182a142b5310c6ed97e3e43de6b6d9c4673a3f8762194da1d53ee10773176b1835d07770419d208871e61cca7316b3df6454807d34b557a6ca3423c2f08996f1309df6ea5c7b622cc27d42a422d46c615ccabd31e12ffcf56d1d35631ec83091a84361f6e875fa2d1e35a0f1433bb07c2de28c04e045c427ccf2ed0d5fde57ce02d4d22a74da29411ebf9e13fef6f3fffb721e330a4ed10226611892cffa6ff11894e45e02565f62675ac7f89408f6b0582c83d4ee1e1f59dbfde19a1ef9484fda145b33af0cb1af9209bd502ab6d64542d0628e3b0d53f17e6e5f9f00b15066e3332060000",
    ],
    [
      "ETag",
      "s3vtd8Lf/gu6ut25t2unsw==",
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
      "Mon, 08 Nov 2021 01:45:51 GMT",
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
      "0002ffedd34b7282300000d0bb642d0c8808765710d2204a04516193496948a1fc248c889ddebd4eaf51df1dde37a059c6842043fbc51af002263a5fc999bce94ccbe5a5871de851ac1c1acd164975bc53755b5a7c5bb954c0f032e785a206e3c9ada5da82d11ad12b9e4c81b4625dbb93f749eea9eb8e8b40f0d140f94762d038e2bcc3754b5e83b4682a5dcd470d11b8566c1fed4b075abd247405e59271dd0d75e777889228df433f339659851dc509df4d1291a8e5ba6d36adf2d622f5722e132d0ced7394f83e5c1e8e4d9c18bbd8baa6d3a2588c3b47c727a7f7a5bcd9c84f4fff17980176eb8a9e09523cb66bfa6a35037ff5c93075ecf1df62b4673df8f90557c136f819040000",
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
      "Mon, 08 Nov 2021 01:45:51 GMT",
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
      jobId: "grouparoo-job-2-1636335950628",
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
      "0000000002ff85526d6fda3010fe2bc8fbb615f2464240421ba3591589322d84adfb446d7349dd86388d9d56a8e2bfef9c50d6aa52fb2df13d2ff7dcdd13b913e5964c0813f97d03f5fed3ad64e48c80a639be5e5d344c0edd6cb1b4e997d94a66c1f7ec6a369d22421896a2bbaa80be924dcd414dd6ab415ecba6a2b5947d14eabb7d27f002cff3c7be1db821d21414d942947748bed1ba5213cb7ab61ee452e605d04aa80197bbd3bbf5e05a552d6f816b65bd76b4d04459ef7a7e2d24a75ac872ba5ea17fa3a0dec08e8a023bf84fdcb26faf950782ee0639821f0407cab96c4a6dba42092ecb4ce44dddaa92c91369bb7cf14156d1229aa7bdcfbd1fc9cfcbde75858a375481baee2de2cb38ed3936ca6c416951b622296505188163ccf8ed6c0d816a14e98a9b911d5027b4c72c63239e859ecf321b180bd9c8a71eb3f97808c32d038a3c6dd45b162d65e939633bf45ccff783301c7a6370b9436ddf7598eb539f8e38e510f030208733f2580b0de7425552892e2cf993c469b44993f5723e4ba33646469b429f77cd99102ffbd4181241efe43a98aa90e86426172fd32899cdd3f877d42d6b0139e5fbd53dae2ba3850284e392d37d85f322bfd651f297744f09645043c93f9e2382dbc247a7fa7c3808c5d34117a5f11f97c695f1e03574cb133bd3cb89edf8be435a70addfd482d0acfe743046117650ea63a0ee70c8e168d6a813088b38f365bcbcc0ea3f7f52313bb6030000",
    ],
    [
      "ETag",
      "XGubo42fLN0a+ASof6BfXA==",
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
      "Mon, 08 Nov 2021 01:45:51 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1636335950628"
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
      "0000000002ff9d94516f9b3010c7bf8bf7b810d9800147ea035d5917294d5b429ea66a72c049e90033dbb48aa27cf71a5a05b279d9d297e4b8dccf7fffefc2edc0cfbccac004acf2cdaf8689eda70d53f76d1033d9144aeaaf9a57928111608a6e74e5b621f72f52a59b72f5f9b988e16db2bccac38b0b5d21d347565230d98175ce8a4c82c9f71da868c9349667ba406deb369ece93e83a8a75a2e4599b982f67b3f0721681fde80008967291fd389bab1b913ed2eec6efd82289a7f3ebd3142d7953a99ef93abb0d93d34846d540e42a4ca2d3f552d1b2ee81647a132d92f0e6ce443dec47e089af62b6668255296b7b5a0bfec452356dc725f55105b324d76699045d71f7c346f0a6a682734b672cdb429ee3390e26187a76a0eb0a9e5295f34a972e17fa764071458b98bfe86101047585e8623db875f7f9acf34e67e3385a28415f564c88ed21658f611f431b5ad0b6604fa0310ea0ef20425c1c91cee35004f5303e5765c0b62ac8713c9fb82611ffe356066c27425c848d22d86024acf5bc7aed3172ff6c153e6e1581ae36813ddfe4c3eef17334065ce7014362f680c80705c891808d90eb9805fababf9caf794393d071933026c878beffcffb9bcfff6dc8d0f771378480184402c3bfe97f44826311fd921273937ad63d4760c075025e601fa6f0f0fece5f6e15937782ebfd2159bb3ae0db1af9c2dbd5a257db4489868d404af556ff96abb7e7fd2b3b548a5732060000",
    ],
    [
      "ETag",
      "yu9Qwstcgmb+vlR0OTUDiA==",
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
      "Mon, 08 Nov 2021 01:45:51 GMT",
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
