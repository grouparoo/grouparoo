const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1635259702250";

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
      "d0bb64ad8ca250e88ee8401dbe56f9c44d06d24454c024107f9ddebd4eaf51df1dde372809a17d8f87f38976e01ddc4bddd688e6730bbafb1aa6c620b8376d18bca7917f425d755d2b53e162bf9d0779153b3ef28c8b7a4cc64d9f0556ba49a3a0dab7f1c224091fc34a58dd11eec6358a8519de3a464a53d76539590fd17283a7c6669de3a50c179795dc31477762a68e9cf90bab0ed1238f76dba65b2a8f3719eaebab7b295c6fa606412cc1126467648504ef9dfa986cdbb3bc7646927ed979804556d4d347ab56cc21619e7d7ab3b93b797360fba1bdbcfc5f6004e88d1f24edf1e1b97d66d8f608fcd5c7c39dd3e77f484b4925f8f9052ef5634219040000",
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
      "Tue, 26 Oct 2021 14:48:26 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
            parameterValue: { value: "profiles" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-1-1635259702250",
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
      "da3014fd2b91f7b54078845024b4329a766c1046125a4dd31439ce4de636c4347698aa8affbe6ba7b05695da4fb17dcfb9e7dc479ec83d2f53322609cf1f6aa81e3fdd89849c115034c7d75bff9aeebf7d190ebebb0fdeccedaed734b95e4f2688e09a25e97657404b8aba6220c79bb09d57a2ded14a8816266a755bdd61dfe939e7aeddeb3936d22414d98297f748fea3d44e8e3b9da3743b17222f80eeb86c33b13dbd77f6bdceae1277c094ecbc56eca088ecbcabf9b9108c2a2ecac92644fd5a4215c396f2021dfc27a6c9c5ebcc6d4eb7ed1cc17bce803226ea52695798828932e3795d99ac64fc448ccb1707127a0b6f16594c14f5b68c4bba85332ba58ac6ea7107d655b05a5a73ff6a152ca7d17ce5c7e1ecabb79cb667abc566e987d6ed572ff02c4593020cd79a5817e6e6e305f553908a97463dd2cf5af9b93ff3b743d1049496d00463d71ed2eec83e4fb2c465d9a8ef24990d49324a5c87f6139b9d0f609026409167440d8b96a24cdccce90e1216f7870ce2810b6e4c1da0b10b0029037bd8b3537238237f2baee092cb9d90bce910b90de6911747c1c69f4d23cf9490d1ba50978d315dc04b8f0a0b44d03b351d74940b54d2ed9efb91174c67d1fcc66b26bc809cb2c7f001679cd14202a26985cd53502d458a0d23fe74e95d22d84cecc73128c9f8d713d13dd72e5eb4fc448f7080daae325f1246c1dcbf36768e881b5ad406b26f0eba8c8c17daf4e1370271459b2464bdf1829fa4790a20830a4af6f130116c021ffd68c7b547282e3eaa488577dc1c26b506aba0d9206e8a3db15d7be41003aed49b58af3f3af64ce7d019610ba57a2ea8597bacb311abe50984411cbe6f7a75f807ca89d12674040000",
    ],
    [
      "ETag",
      "WNGavJB64K7qEC71QQabGQ==",
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
      "Tue, 26 Oct 2021 14:48:27 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1635259702250"
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
      "dd",
      "4e",
      "db",
      "40",
      "1085df657beb882490102c71e1d09446320975cc4d2b642dbb63b3b0de71f727288af2ee1d1b9a56a592b9b16766bf9167ce1eefd9b33292c5ec41553f03d8dda70afcb736c8c005ed1dbd1a340e58c4c0f38a489f3d9f84b038a9dceafb0676b3ab1940965c5e12e1c423d49cc57b562ad0d2b1f8c79e195e03b509d4a136459745ccef9ab6b8c9b3e5ea9af21a659bafeed23499a70b76888e8d927b5e74fc07daee0f117bc2870c4ab06004b4b334169f40f865bba6e375a361e03058018e75707750590c0db78803aa0c4683d1f474329e5c9c0fc7e3c990388d827b8586d0bb0d8dc73c7aae337ca125d9e89408dbc5b470d93db75457b25ba40d97ab7c7ad6cdf737c085c0607cd10b96ca3aff2ade6ff04d847f49cd3f08d24d29dd07556024d83e4a350597d28273bd24ba8237cd119bafd7e97b558cb4a8643fb8553d80f6db23f0255d27ff9396fcf547abcf49be7847384fae3922f9f266b1c9939bdb96bb7f33c27ce7c1dd5a24533968fd341a9ecd26e7d3e1abc5aeb0b51d7d27f63640c404a73fe5abf22c2eb97670f805e73e437487030000",
    ],
    [
      "ETag",
      "tRk/uuE/gsNZSey8C8eeRA==",
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
      "Tue, 26 Oct 2021 14:48:28 GMT",
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
          "SELECT `first_name`, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `first_name`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1635259702250",
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
      "7f",
      "6f",
      "da",
      "3010fd2a91f7cf26f13310084855c7daac8d44030ba155354de03897cc25c4a9edb44215df7d97a4b465955a09299cdf7bf7eecee727b2e15944c624e4c97d0172f7e54e84a44140d3044f2797e0ceade1dd66d649a9633ab177bf618f2727c8e0a54ad16d9e425389423250e3e5a2954851e4540ad1c4444db3d91df42cd31a0d3ba6697550a6208da73cdba0f8afd6b91ab7db07eb5622449202cdb96a31b17d396f3f98ed5c8a3b605ab58f1ddb68a2da1f7a9ea68251cd4576b25ca07fa140ae604b798a15bc0aa3f0fb71e616a7db5682e407ce8032268a4c9755610a26b2982785acb292f113a9aa7cf3872c9ca9731618eb984ba55719ddc2ba61ac79b436a83256ab7c63fcf46757c61abb8a790a6a6ddc5c3abe63d41cd733969ee72c02e3ebe937e3c29f2de7c68fdb0a6b1ce5c45a22509a675525010d5328ab789e95fbfe824a01d554410dae869d01edda9d5118874316db3d2b8c3b10867638b4682fecb0511ffa51081475bacc5ea96826b2087ae668685bbd816d5a11d0911959d4eef7a3018bbb766442df8cba36d864df208f926b38e72a178ad7132337be1b38abc05f7a6793c0a9da886991eaf3bab8b289b7756a6c12491ff4b52f512ed0a91cbfeb058e3f390bdc6ba7bef1292494ed16f778e7314d15209b4a9ca0067925221c1a99cf166ee0cebcc91415d535ce0f0c45c6bf9f5e05c12eafa6acab2f99f8fee41635544abafb0fc33a067db2dfbfb1bba66951512a7e15d5f91f6a8074b197d7c83c8afa47d180ecffecf1d720b8f5b533f9b574fc5b521ff91083848c7dbe1348ae80cfdeeee1252115df12ba288d312e2053a50793502f22df569d1cd476d71e908a2cf53bccb4fb87899739ca8cb0854c3f3754bfa46a862554a8171282b83f9eeb5d20fa0f3a8e5e67c7040000",
    ],
    [
      "ETag",
      "AHeIP57jkO0laE2EfNqkcw==",
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
      "Tue, 26 Oct 2021 14:48:28 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1635259702250"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff6d515d4fc23014fd2fd7d72de20474243cf0b120092132e0454348e9ee66615b67db6916c27ff7b61824c197b6e79e739a73da231c4499400f7622fbac513577199a853dc4a8ebdc68da2a596a040fd0b08c94cfebb1407c0b8343cd9b50362ab99f848b7e9f149a7f60c1a0778454609e68e8bd1fa16405922d154a9bad031e98a6b2b3e52a9ece27840b99583c5fcf6683e12c829377f16db7d5e1cf319dafa24914ff67d99c3cd8cb5d8c292a2c39da1895927be4666a1b6a565439fa5ad68aa306277644a6645d3125a54f133ff01fba8f9da0133eb582a0d3225d2e39334296245d2f291a1869581ecb6fea076d122877a4aaa95bbf681c2981ae85050f2edc353dc6525ce8ee0d3d625ce4571704378a41c10cbbf06dcb6f7e830d1b83fa55492aa9d1f66b9dbb8ea4ed6fe85d8caad103cee8b75e8439e3d30f724d9fd10a020000",
    ],
    [
      "ETag",
      "8UDieeZ92kucy9oyrd/G9Q==",
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
      "Tue, 26 Oct 2021 14:48:28 GMT",
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
      "0002ffedd34b7282300000d0bb642d4c0c0aa43b3e32140c5a1ba265c32004412b844f05ecf4ee757a8dfaeef0be4192a6bcebe2bebef00abc802941584e655fe8a6732a9b4c9daab316ef8df19eab708123b2861d0b257fd3d0135548c802c16dbbfdfa3c04fd1da3f056fb6ed40cbae608186962ae9a0a457598f69449235e7f40432be1713ba7907bbc409e6812cb1e83527ac3bb5db6e8952098bf6e90b632919f8ddee0a201ad589151ca3b091337b2f76a4d968560b7b1182a954e55d844b9532aef7c0b0d145eadfd99e81129ba9a31bdcd5a7139a0981caf8569e9b9fcf4f47f8119e0a3285bdec5e563bbb2c47806feeac7fd24f8e3bfc99396b7e0e7174d9ced7e19040000",
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
      "Tue, 26 Oct 2021 14:48:28 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
            parameterValue: { value: "profiles" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-3-1635259702250",
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
      "000002ff85536b6fda3014fd2b91f7b54008af80845646c38a06610da1d5344d91e3dc642e2186d8695555fcf75d3b85b5aad47e8aed7bce3de73ef24cb6bc48c888c43c3b54503e7db91731b920a06886af87597ed3beb9de6e85cc0f3faa1fb3c9b778f1381e23826b96a4bb7d0e0d29aa92811c6dd6cdac14d59e9642343051a3d368f73b3da7371cd88ed3b39126214f17bcd822f9af527b396ab54ed2cd4c882c07bae7b2c9c4eefcde7a705afb52dc0353b2f556b18522b2f5a1e6d75c30aab828c69b35ea5712ca087694e7e8e03f31892fdf666e72ba6b66087ee00c2863a22a947685299828529e55a5c94a46cfc4b87c75206b6fe14d438b89bcda1551417770612554d1483dedc19a05aba535f767ab603909e72b3f5a4fafbde5a4395d2d364b7f6ddd5d7b8167291ae760b8d6d8ba34371f2fa89f8054bc30eaa17ed6ca2ffd99bf1f8a26a0b4843a180dec3e6dbbf6304ee3014bdd4e2f4e6d8863371ef46827b6d9b00bdd24068a3c236a58b41045425d4613c78d3ab6eb445d37ee46ae3d70229a0c529676fb0300468e17e4b1e40aaeb8dc0bc9eb0e91bb601e7a51186cfce924f44c0929ad7275551bd305bcf6a8b040047d50d35147b94025ddeeb91f7ac1641ace6fbd7ac20bc8287b5a1f70c629cd25209a96d83c05e55224d830e24f96de1582cdc47e9e82928c7e3f13dd73ede255cbcff41007a8ed2af325eb3098fbdf8d9d13e296e695813cd4075d46ca736dfaf80781b8a2751272b3f1825fa47e0a2085120af6f930116c029ffd68a7b547282e3eaa488577dc1c26b5062ba1de206e8a3db35db7dd27065caa77b1a1333cf54ce7d0196107857a29a85e7bacb316abe41984411cbe6f7a75fc0747f1cecc74040000",
    ],
    [
      "ETag",
      "qFlQ1QHkkoslqKuKFABbLw==",
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
      "Tue, 26 Oct 2021 14:48:28 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1635259702250"
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
      "0000000002ff8d936f6fda3010c6bf8bf73668fc29b045ea0bb2b10d290506e99b4e5564ec4b66eaf832db614388efbe73dad1699d94be49eecebf53ee1e3f39b10765248bd94e953f1ab0c73725f8af21d8806bb477f4aad138601103cf4b2247493228d6a92f7f3dec61f7b69edf1decb4bcbe26c289ef5071169f58a1404bc7e26f27667805d426503795c9db2c62fe5887e236db2c969f29af50867c799ba6b3249db373746994dcf3bce55fd1767f8ed81e771b28c082111066a92dee41f84558d3f1aad6d073d858018eb5707b505a6c6a6e117b54e98d7a83c9683c1cbf9ff687c3719f388d827b8586d0db2d8dc73c7aae37f8939664831111b68d69e1a27d1ea8ae64bb480817cb6c72d5cef737c085c0c6f8bc132c9475fe51bc3fe09308ff929abf12a49b52ba0b2ac148b05d94aa732ea505e73a497439afeb0b96ac56e94b558cb4a8643778501d80f6870bf0295dcdfe272df9eb59ab8fb36cfe82709e5c7341b2c5cd7c9bcd6ed681bb7f324272f4e0d616c9540e829f06fdab77e3e9a4ff68b10f186c47df89bd6d206282d39ff2457916175c3b38ff06174d26bf87030000",
    ],
    [
      "ETag",
      "3BB1fPLtgxkjeb/pEZvr7g==",
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
      "Tue, 26 Oct 2021 14:48:29 GMT",
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
          "SELECT `first_name`, `last_name`, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `first_name`, `last_name`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-4-1635259702250",
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
      "fd4fdb3010fd5722ef974dea479236fd9210eb4ac62295b4a429084d53eb24766a48e3603b6c15eaffbe8b43810e0da44ae9f9bd77efee7c7e44772c4fd008452cbd2f89d87dbae5116a20a2700aa7831f1b874f439b4ca23f537bbe71fad2db5c9e9c0083552a89b745469a9297222672b45cb452c1cb020bce9b90a8d96d5abd8e633bc3be69db8e093249323a65f91d88374a1572d46e1fac5b29e7694670c1642be6dbe7f3f683dd2e04bf25b192ed63c73698c8f6bb9ea7198fb1623c3f592ec0bf9444acc816b30c2a781126d1d7e3cc2d86b7ad14c80f2c26388e7999abaa2a4811f39cb2b4143a2b1a3d225de5ab3f68e14edd4968ac291352ad72bc25eb86b1cef0ab80256b034b63b52aee8cefc1ecc258438b946544ae8deb1f6ee01a35c7f38da5efbb8bd0f87cfac5380f66cbb9f1ed46638dff1b409509918ae5bac6104719a9ea7b9aa2f7f6ea2a015658921a5cf5cd1eb606e630a2513fa6838e13519344d120ea3bb81399f1b04bba494430e854955dab70ce7373408714e36438a0b645633a8c7a9643131bc7d8749c8e1d59d8261649d0be817e0ba6c819930597ac9e25ba0ebcd05d85c1d29f8c4357b7417199a9b3bab8aa89d7752a681248eff4b5af50c6c1a9ba18cf0fdd603c09bd2bb7de85294971bc5bdcc336509c49026c2c60828a880b9ec0d0d07cb6f0426fe68fa7a0d0173c3f30241afd7c7c1184bb424f59e92f1a07c1f806345808bcfb07833a7a5db4dfbfb2bbc259a9299aafa33aff430d200b7a7989eca3a87b14f5d0fed71e7e0d04efa17646974b37b841f551402811248f3fde09206be0a3577d7863408557062e52410c0b18cbca2316a45e44b6d59d1cd4c39e65234d16ea0dd6773a87895739aa8c644b72f5d450fdc6f40c2ba894cf2400617f7ccf3f07f42f71b21e5be1040000",
    ],
    [
      "ETag",
      "8Hh5oLT2eCbxL2Ph57sIhQ==",
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
      "Tue, 26 Oct 2021 14:48:29 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1635259702250"
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
      "92",
      "cd",
      "6e",
      "c2",
      "30",
      "10",
      "84",
      "dfc5bd06897f54240e40234a15a534c0850a21936c5283934d6d078410efde75a802123df5e27876bf71d6239fd95e6411ebb3ad48be0b50a7a704cc87dd04a00b69347d72cc34308781e10991ad7c7558f4269e3b4319bc8f5a2b7f951e93c180081d7e41ca59ffcc620132d2acff7966194f816cb150da6c4ae13073ca6d6dbe08a6fe84748a91d5fed2f38623cf6517a7f249fe2fdb6693ef6f8ea9bf70276ef097657d71d80eb701c4a0200bc14e9f2bdc4168a63618cdd35c424d63a142d0ac84cb46a2b0c8b942ac51a5d6ae35baad4eb3f3dcab379b9d3a7112436e0466842ee7341a3368b80cf048b1b03601aadc524271b91ea8ec2a01e52dac78037540a12bdd2887bdc75f2013557b1e72297825bb0ff4988742de9def727313cd077c9872733b6e8c06748c2aaa2a6deb58ff5e6b74a2f64c2145a4c1a653bf2635469b1efda76f54010e0b393d915761aefaf203f622bb8d7f020000",
    ],
    [
      "ETag",
      "3pZvT7GLEPolROB3ZNZmwg==",
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
      "Tue, 26 Oct 2021 14:48:30 GMT",
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
      "30",
      "00",
      "00d0bb642d8e0594a43b45400d88e2a00e1b06212821fc12b040a777afd36bd47787f70da2382642846d9593127c822192d1349ee21aaecc7b1699c686ae462a9a1d4acf6ea5064c5b56bef5088fe6429931d6b42c84782e36fbc6b1d675ae7527bd70a177e4aa303c03a95c4f559661e9e2245b3d48e353f76195cfb37bb649b53bd8f432f240f7f2eb32175f5763318ebd9d645b8b774a6adf9d472f7b0821b81ea0243b346c7c3af353c9d4b5b6551d7e2b5aaeb1a0dfd7c90696b59e3c5323a70cf21dc603be2c141c2b03b60f0f7a2fa954dca4ebf4ededff021340fa3ae34484d96bbb32476802feea87ed5093d7ff158938e1e0e71711e3245e19040000",
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
      "Tue, 26 Oct 2021 14:48:30 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
            parameterValue: { value: "profiles" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-5-1635259702250",
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
      "85536b4fdb3014fd2b91f795b62169fa92aa519530cada744b53d0364d91e3de04431a87d829aa50fffbae1dca4048f029b6ef39f79cfbc813b9e7c5868c48c2b3871aaafd973b919013028a66f87a75a9ae76b76eb15749975d47bdefe2f1f7ede3788c08ae59926ecb1c5a52d41503395aafda5925ea925642b43051cb6b9df65ccff1867ddb713c1b6912f274ce8b7b24df2a55ca51a773946e67426439d092cb3613db97f7cecee99495b803a664e7ad62074564e743cdafb9605471518cd72bd4af2554316c29cfd1c17fe226397b9bb9cde9b69d2178c71950c6445d28ed0a533051a43cab2b93958c9e8871f9ea4056fedc9f46161379bd2de2826ee1c4da504563b52fc1ba08970b6b165c2cc3c5249a2d837835bdf41793f674395f2f82957573e987bea5689283e15a63ebccdc02bca0fe06a4e285518ff4b3567eeecfecfd503401a52534c1b86ff7e8e9c01e2669d267e9c0f592d4862419247d8fba89cd865de86e12a0c833a286450b51d8b4efb98e338c5d06bdb83b806e3cecb910771dd77393819b0275c8e1843c565cc13997a590bce910b90967911f47e13a984e22df9490d23a57e78d315dc06b8f0a0b44d007351d74940b54d2ed9e05911f4ea6d1ecda6f263c878cb2fdea01679cd25c02a26985cd53502dc4061b4682c9c23f47b099d88f635092d19f27a27bae5dbc6af90b3dc2016abbca7cc92a0a67c13763e788b8a6796d20bbe6a0cb4879ae4d1ffe221057b449427eaefdf017699e4248a182827d3e4c049bc0673fda71ed118a8b8f2a52e11d378749adc12a6836889b628fec53dbed0f890157ea5dcc7386c79ee91c3a236ca150cf05356b8f753662b57c016110871f985e1dfe015915653474040000",
    ],
    [
      "ETag",
      "JHtJvh3nytb4cVT6KowZhw==",
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
      "Tue, 26 Oct 2021 14:48:30 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1635259702250"
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
      "301086ff8bf9b8546a0b6959243eb45058a4d0421a24a40945c6be0433c797d94e4755f5bfef125899c6a4f025b93b3fa7dcbd7eb3633f94912c628faafcd980dd1e95e06fdb2005d768efe855a371c002069e9744c6f3ea745ae1645c8717d94b08d3fb2f97e9edd919114e3c41c559b46385022d1d8bbeef98e115509b40dd5426efb280f96ddd16d7591a2faf28af50b6f9f22e4966f364c1f6c1a15172cff38eff44dbc33e60cff8984201168c807696dae233081fb76b3a5ed51a060e1b2bc0b10eee0e4a8b4dcd2de2802a8370309a1c87e3f0eb74381e8743e2340aee151a42efd6341ef3e8b94ef1172dc946c744d82ea6858beeb9a1ba92dd226d182fb3c94937dfdf0017021be3f35eb050d6f957f1fe806f22fc4b6afe49906e4ae93ea80423c1f651aaceb994169ceb25d1e5bcae0fd87cb54a3eaa62a44525fbc18dea01b4df1c80cb6435fb9fb4e4af77ad2e66d9e203e13cb9e68064f1f5629dcdae6f5aeee1cd08f3ad077763914ce5a0f5d36878721a4e27c3578b9d636b3bfa4ee46d0301139cfe946fcab3a8e0dac1fe37b135814787030000",
    ],
    [
      "ETag",
      "IBm87mo62p5DTx5e7X+FRQ==",
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
      "Tue, 26 Oct 2021 14:48:31 GMT",
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
          "SELECT `last_name`, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `last_name`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-6-1635259702250",
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
      "7f",
      "6f",
      "da",
      "30",
      "10",
      "fd",
      "2a",
      "91f7cf2601f9454240aa3ada665d241a6812daa16902c738a9db10a7b1d309557cf75d92d2c22ab5125238bff7eedd9dcfcfe881e56b3442314b1f2b5a6ebfdcf3187510953885d3feedafd83fb3c270aca6336b129a77fdc5757a72020c56ab04de1419ed0a5e95848ad13ceca525af0a5c72de85445dbbabdba66558c381661896063241b364c2f20710df49598891aaeead7b29e7694671c1448ff0cdebb9fa64a845c9ef2991423d7654c144a81f7a9e669c60c9787e320fc1bf12b45cd20d661954f0265cc7df8f33f718def452203f31423121bcca655d15a4203c4f585a954d56347a464d95077f50e84edcf348596558c8658e3774d551566cbd52b05096cbe241f9114caf94153495b08c8a9572fbd30d5ca5e578be32f77d378c94afa7df94cb603a9f29678b06eb1ca6844ad654489637754438ce685dc3cba4bcf7d7530bb0c482b6e072a0d95877b4619cc4039238a615271a8d63271e58d88c3532ecd3fe3aa61874b2cedea870ce73c7267a32b0861ad16c6212c8a3d184987a9218c4d61ddb34081d380941bb0efa5b32492f9828b860edbcd06de045ee320ae6fef938729b36125c65f2a22dae6ee2b04e094d02e983be7635ca3838d5c3f7fcc80dc6e79177e3b6f73da12926dbf0116e3cc199a0c0c6254c50d2f28aaf616868360dbdc89bfae309289a4b9ced19028d7e3fbf09a26dd14c59365f340e82f10234b82cf1f63f0ceab0fb68b73bb0bbc159d5501a7e13b5f99f5a00e9d0cb5b641c45fda3c846bb3f3bf87510ec7ceb8caee76eb040ed5140135ad29c7cbe13406e80cf5eeefe1d01155e12b80809312c2011b5072969bb886cd374f2a2d675c37050432ee53bccec",
      "3bfb89d739ea8c744373f9d250fb8e9a19d650255e4900c2fef89e7f09e83fa65709a5c5040000",
    ],
    [
      "ETag",
      "4WXbNB5SSA/gP5LS3h4YQg==",
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
      "Tue, 26 Oct 2021 14:48:31 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1635259702250"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff6d915b6f82401085ffcbf41512a54a2b890fd5522f31c6a2f6a531668581a2c0d0dd45638cffbdb3d8d026ed0b3b97ef6cce592e70488b083cd8a5c96785f27c97a07e354580aacab4e2a3a4422158805a244ce66ae116c7b17e1ebebd3cbaabe9acd71be3a9df6742851f980bf02e10a798450abcf70b142247966542e96d5d5ba0cfa5192d57c1643ee23ea7c8f4f3f56cf63498f970b51ad9765b1e7e1493f9ca1ff9c17f92cdd5823ded028c516211a271514ada63a82726a0127999a1ada892212aa8e17a9148aa4a21896c9ed8aedd76efbb4eb7f7d0729c6e8bb98c42a1532a185d2fd91a68d2220be8c4f1a0c380ac4b4e1ad7df238fa7288f94aa3a88e9dbb5bfdfc43214592a1ac0fd03f84263b376feac87a451c524a386e91866f36d6f70e6f5421247556852b66e8987645e816ff6b4acd08250f02f1ba7fad65fbf004d95d50b0f020000",
    ],
    [
      "ETag",
      "msP6nvHtDCVF86TJL99Hew==",
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
      "Tue, 26 Oct 2021 14:48:31 GMT",
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
      "82300000d0bb646d1d2a514377304a2ac8475068bb61300d02da4008844fa777afd36bd47787f70d5242a810495b5d29032f604c17da9ccced1a19e6a548c516a153cb51104f59052994ea202ed2f0ece2d67f720e776fbccdc952d5634f8ccec1114a6249c5dd607592cde0d2ed8d7f84ded9d27978f39df5697d8db8144518608529f617cc33b3df7692a4c9b1e2f9e6d982acce58e52018f98dde189b299abca91ecd83daed02e7e915ab9ecfcee5bbd2c5681515668c701f32e8128728b4f793320f065965ab303d1dc56a81d962dfe27d0cf1d976cb6b3d7f78f8bfc00cd0a12e1a2a92e2be5d5d6ada0cfcd54fdab1a6f7ff064d1bda809f5f26d921c419040000",
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
      "Tue, 26 Oct 2021 14:48:31 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
            parameterValue: { value: "profiles" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-7-1635259702250",
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
      "2b",
      "c8",
      "fbda04f26a48a468cd52da464ac806a4dd344dc8980b730b38c5a65555e5bfefda345dba49ed276cdf73ee39f7c133b9e3554aa624e1f97d03f5d3a75b919013028ae6f8ba0277c3834bf8f278e73f6ee4f7db613009e7b31922b866495aee0ae848d1d40ce4741b76f35a343b5a0bd1c1449d71a7773a18f54793b1d3ef8f1ca44928b215afee90fc5ba99d9cdaf641ba9b0b911740775c7699285fdfed87bebdabc52d3025edb78a368a48fb5dcdcf8560547151cdb621ea3712ea184aca0b74f0979826676f3377392dbb39821f3803ca98682aa55d610a26aa8ce74d6db292e933312e8f0e24f456de22b298289ab28a2b5ac28995524563f5b403eb22d8acada57fb109d6f368b9f1e37071e5ade7ddc566b55dfba17573e5059ea5685280e15a33ebccdc7cbca07e0a52f1caa847fa592bbff467f9ff503401a525b4c178ec9cd29eeb4c922c19b3cc1d8c92cc81247193f1880e12874d86304c13a0c833a286452b51256c000c69f1c8614e3c4cd9384e7ace30765da797f5b3011d504af627e4b1e60aceb9dc09c9db0e919b60197971146cfdc53cf24c09196d0a75de1ad3051c7b54582082dea969afa35ca0926ef7d28fbc60be8896d75e3be115e4943d85f738e38c1612104d6b6c9e827a2d526c18f1e76bef1cc166625f0f4149a63f9f89eeb97671d4f2577a8403d47695f992300a96fea5b173405cd3a2319087f6a0cbc878a14def7f211057b44d42be6dbde007699f02c8a0868a7d3c4c049bc0473fda61ed118a8b8f2a52e11d378749adc16a6837889b620fec5ecf9d4c8801d7eadf58dfe98d0f3dd339744628a1522f05b56b8f75b6628d7c0561",
      "1087ef9b5eedff005277da0f74040000",
    ],
    [
      "ETag",
      "Le8OiRGeBwkNwOsXj4R9SA==",
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
      "Tue, 26 Oct 2021 14:48:32 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1635259702250"
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
      "000002ff8d93614fdb301086ff8bf73595da42db11890fed2810296da10d48684291b12fc1ccc905db695455fdef3b0756a631297c49eececf2977afdfecd92f554a16b22795bfd66076df7270b73e5883adb5b3f4aab0b4c002068ee7448e1f92abb3fb46648d5b440d3ce8fcf22269cecf89b0e2190acec23dcb14686959f873cf4a5e00b509d47551a66d1630b7ab7c7193aca3e515e5054a9f2fefe2783a8be7ec101c1b25773c6df92fb43d1e02f6824f6bc8c04029c0cf52197c01e122bfa6e545a5a167b136022c6be1f620375857dc20f6a8d29bf406e393d1707436e90f87a33e711a05770a4b42ef36341e73e8b85e63434bb2c10911a68d69e1ac7d6ea9ae64bb880fa365323e6de7fb1be042605dbab413cc94b1ee4dbc3fe0bb08ff929a7f11a49b52ba0bcaa19460ba2855a55c4a03d6769268535e55476cb65ac59f5529a54125bbc1adea00b4db1e81cb7835fd9fb4e4af0fad2ea6c9fc13611db9e68824d162be49a68b1bcf3dbe1b61b673606f0c92a92c783f0dfaa7df479371ffcd623fd0db8ebe133a5343c004a73fe55a3916665c5b38fc06073b696287030000",
    ],
    [
      "ETag",
      "6YTG9VwcfwtMIweYlgFDTw==",
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
      "Tue, 26 Oct 2021 14:48:32 GMT",
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
          "SELECT `ltv`, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `ltv`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-8-1635259702250",
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
      "7f",
      "6f",
      "da",
      "30",
      "10",
      "fd",
      "2a",
      "91f7cf26f123044200a9ea589bb168347421b4aaa6096cc749dd8698da0e15aaf8eebb38a52d9dd44948e1fcdebb77773e3fa17b5e24688408cf1e4a26779fee04410dc434cee07437b87dc0038c7f4a6732e94bbbc8767eeff1e40418bc5229bcdee4aca944292953a3c5bc9549516eb014a209899a8366a7df751d77e8d98ee3da20532c4fa7bcb807f1add61b356ab70fd6ad4c882c6778c3558b8af5cb797bebb43752dc31aa55fbd8b10d26aafda1e7692e28d65c14278b39f8978ac9255b639e4305afc2847c3dcedce278ddca80bce594614a4559e8aa2a48414591f2ac94262b1a3d2153e59b3f68ee4ffdb3d85ae57abb6a582b9eac2cacace572736f7d8f6617d60ada4979ced4cabafee147be557382d05a84a13f8fadcfa75fac49345b5c5adf6e0cd6a893817bc294e685f18e31c959e5fb3c9de0df2ba9045863c56a70e9d97ddc19d84392128fa683ae4b529b1132209e8bbbc4a6c31eeb258461d0e92abb51e14214cc737a76d2716dc2d224e9dac394922e237dc25caf9fba3d920ca837743cb46fa047c9353be76a2314af6784aea320f69771b408cfc6b16fda487199ebf3bab8aa89b7756a6812481ff4b5af502ec0a91a7810c67e343e8b832bbfbee329cb30ddcd1fe096539c2b066c2cf19a69262f4402434397b3791007b3703c0585b9b8cb0343a1d1efa75741bcdb98296bf345e3281adf80064b8977ef30a8a3df43fbfd1bbb2b9c978662f826aaf36f6b0075a097d7c8398a7a47511fedffece1d740b0e7b533fab5f0a31b541f452c659215f4ff3b016403fcefb51ede0e50e1f5808bd210c30252557950c9ea45e46bd3c9b3bae30c5d0719b2d4ef31581df730f12a47",
      "9591ad59a19f1baadf8e99610595ea850420ec4f18841340ff02968dbd3cb9040000",
    ],
    [
      "ETag",
      "y8hqa8aaKr2GG6r0ngyE4w==",
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
      "Tue, 26 Oct 2021 14:48:33 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1635259702250"
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
      "6d915f4fc23014c5bfcbf5755bc6187f131ec04cc54c9409316a0829db650cb675b61d8410bebbb7c3cc187c697beef9ddf49ef604bb248fa00fab24fe2a511c6f6254537d085096a992b4153c970806a06231911ff8f4c8627cce6c76509917bdbd97fbcd74302042861bcc18f44fb04e308d24f43f4f90b30ca92d557b22d4b1d0e2ce7f1ece48663cd27232f7fde1c8f7e06cd4fc7259ec7e1bc6939977ef05ffb52cce066cf92ac0350acc43d4d717826f3154639d4cb2ac48d194bc14214aa8e0ca88052f0b263837a96276cd46bbd9725abd8eed382d9bb894874c253c2774fe4aa381e28aa5013f502e700910d59122aeab754f65eab71a4e9543cb4635de1fa0d3b47add1a685f013dd76ab66bdfb9f2dd6ecfb26bdfd5fee267b4d151a17c119c624ad409ed4bda5bae5f40d1cb2851a20121a37f7a48d4459fbf01bfdb55c004020000",
    ],
    [
      "ETag",
      "ZeMJageOm0awtmEdWYuvhQ==",
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
      "Tue, 26 Oct 2021 14:48:33 GMT",
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
      "02ffedd35d6e82300000e0bbf4598c4aa8766f9649f8478420f242901405ba526c4171d9dd67768df9dde1fb064559122172d9b584810f30152b342fe70edf60e3d22c732f2e901379bca107fd1e97f264bb0b56c1334c20fdf28b1467cf40610fe12a7ab694eb7420ba591fccfeaa4bd71aa358c412c971f2188563122e044775954094db94f6762ccf7a63aaea69fdc9354d51f376f036039661e0aeeeddd5de5a981f17ccafe0bed9d7ac770c633bad2abf8b30cdb42e35ae24c48dd5331fb7c740836d105c7427dd8970f7c8a6f1301895ba3723da9fb756d82e954d3d7f7bfbbfc00c9007af6f44e4f56bbbaa2134037ff5733971f2fa8f49712337f0f30b1d2ae21019040000",
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
      "Tue, 26 Oct 2021 14:48:33 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
            parameterValue: { value: "profiles" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-9-1635259702250",
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
      "2b91f795b669d2d287548dae0da35293b23405a6698a1ce72633a471891d2640fdefbb76680742824fb17dcfb9e7dc479ec91d2f53322609cfef6ba81ebfdc8a849c105034c7d7ae7852ee4a3ea96fe737fe4d955ef6e6c57d3e9920826b96a4db5d012d29ea8a811c6fd6edbc12f58e5642b430516bd4ea9eba7da73f1ad88ed3b79126a1c896bcbc43f21fa57672dce91ca4dbb910790174c7659b89edf1bdf3e0747695b805a664e7ad62074564e743cdaf85605471514e366bd4af2554316c292fd0c17f629a9cbdcddce674dbce11fcc01950c6445d2aed0a533051663caf2b93958c9f8971f9ea40d6ded29b45161345bd2de3926ee1c44aa9a2b17adc81751eae7c6b119caf427f1a2d5641bc9e5d78feb43d5b2d377eb0b6ae2fbcd0b3144d0a305c6b629d995b8017d44f412a5e1af5483f6be597fe2cde0f4513505a42138c07f629ed0eed51922503960ddd7e92d99024c364d0a76e62b3510f7a6902147946d4b068294ad7e902757a2c3ec5aec6bd74d08d47ae0371dab5133b4b69e2504af627e46fc515ccb9dc09c99b0e91eb70117971146e82d934f24c0919ad0b356f8ce9025e7b545820823ea869afa35ca0926ef72288bc703a8b16575e33e125e4943daeef71c6192d24209a56d83c05952f526c1809a6be3747b099d8e52128c9f8d733d13dd72e5eb5fc488f7080daae325fb28ec245f0ddd83920ae68511bc84373d06564bcd0a6f7bf11882bda24213f365ef893344f21645041c93e1f26824de0b31fedb0f608c5c54715a9f08e9bc3a4d66015341bc44db10776d71df65c62c0957a171b99d871dd7546d842a95e0a6ad61eeb6cc46a79046110871f985eedff01810039a774040000",
    ],
    [
      "ETag",
      "1ozt3OsztBFXMXrdP4Dlqg==",
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
      "Tue, 26 Oct 2021 14:48:33 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1635259702250"
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
      "dd",
      "6e",
      "db",
      "30",
      "0c",
      "85",
      "df",
      "45",
      "bb",
      "9c03246992ae067a916cd916c075fedcaba1301489f6d4caa227c9298220ef5ecaedb2a12de0ded824f511268f8e8fec4119c962b653e59f06ece153097e1d820db8467b47af1a8d031631f0bc24f2b0e2ebd1c83f4c76eb590a9f1b5ca68ff3f5f535114efc868ab3f8c80a055a3a16ff3a32c32ba03681baa94cde6611f3873a14b7d96691fea0bc4219f2f43649a6b364ce4ed1b95172cff396ff40dbdd2962f7b8db4001168c80304b6df11e845f84351daf6a0d3d878d15e0580bb707a5c5a6e616b14795de556f30b9180fc75797fde170dc274ea3e05ea121f4764be3318f9eeb0d3ed2926c7041846d635ab8689f7baa2bd92e12c2459a4d46ed7cff035c086c8ccf3bc14259e79fc5fb0bbe88f09ad4fc8320dd94d25d50094682eda2549d73292d38d749a2cb795d9fb1d97299bc55c5488b4a76837bd50168bf3f03df93e5f43d69c95fffb4fa36cde66f08e7c93567245bdcccb7d9f46615b8bb1723cc0e1edcca2299ca41f0d3a03ffa32be9cf49f2df61583ede83bb1b70d444c70fa537e2acfe2826b07a7275c25e01b87030000",
    ],
    [
      "ETag",
      "yPaQ44tk6bQBNe+uoONwEQ==",
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
      "Tue, 26 Oct 2021 14:48:34 GMT",
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
          "SELECT `ltv`, `last_name`, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `ltv`, `last_name`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-10-1635259702250",
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
      "0002ff8554fd6f9b3010fd5790f7cb26e503081f49a4aa4b5bda21a5494648ab6a9a12630c734330c5265554e57fdf619ab659a7564282f37befeeddd9e609ad591ea3218a58fa50d172f7e59e47a885a8c429ac2e82223c7b10ebd9d81a3d568fee657273d94b4f4e80c16a95c09b22a36dc1ab9250315ccc3b69c9ab02979cb72151dbd0db86d3b34d7be0eaa669eba013344bc62c5f83fa8f94851876bb87da9d94f334a3b860a243f8e665bdbb35bb45c9ef2991a27b5cb20b5544f7e3a2a7192758329e9f2ce660a012b45cd20d6619587855c6d1f7e3d41d86379d14c85b4628268457b9ac6d410ac2f384a555a9b2a2e1135236df7ca0b937f6ce436d95c9edaa052f2ce432c71b5a072c5e695868cb65b1d62e83e9b5b682e6129651b1d26e7f7881a7351c7fa22d26136f1e6a5f4fbf6957c17431d3ceee14d6fa4f66f015532159ae5c8538ca68ede87970fefbedaa055862411b70e9ea0e36fafa204a229724fd9e1d253a8da27ee4dab817e96460512b8e28069dacb32b15ce796edb966e1b9115c7bad3771d57b70c378a4cd3e80d6ceaeafd9860621b3645fb167a2c99a4174c145cb0667ae836f0436f19068bc9f928f4541b09ae3279d198ab9b78eb53429340faa0af7d8d320e95eaadf027a1178cce43ffc66b767f4c534c76f307d8ff046782021b97304149cb6b1ec3d0d06c3af7437f3a198d41a1b67476600834fcf5f42a0877859ab2546f340a82d11d687059e2dd3f18f8702cb4dfbf297783b34a51145f454dfe6d0320037a798dcca3c83a8a1cb4ffbd87a785e00a3495d1cf8517dca16629a0092d694e3e3f134056c0a737f970adeaffc4bc2e2324c4700289a88b90923627916d542bcf6ac372cc0152e452bec35cc73e8cbcce5167a41b9acbe78e9a6ba586584395782101080768e24fae00fd0be1f5d2d1d6040000",
    ],
    [
      "ETag",
      "URpTBqskPL4Awuw7FfVF3g==",
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
      "Tue, 26 Oct 2021 14:48:34 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1635259702250"
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
      "7d",
      "92",
      "dd",
      "6e",
      "82",
      "40",
      "10",
      "85df657b8b06117f30f1420db536d4b6884d9ac69815464581a1bb8bad31be7b67b1c1346d7ab3cc99f94e983dd913dbc759c47a6c156fde0b10c79b0da8675df8208b4449fae49849600603c53744bec4afae176dfd4835215a3d6c83ddf8b335e8f78990e11652ce7a27b68e218924ebbd9d58c653205ba20e44a863aec5adf7380848a61869399d7bde60e8b9ec6c5c792ed5b2ac2bd72cf027d3f1ffb6e532df5f1d9369e08e5dff2fcbe26cb01dae7c5883802c04bd752e7007a19ae840244ff3046a120b118264255c0e36028b9c0bc41a756a0db3d668375b56cbe99896d532094c30e42ac68cd8f98c76630a154f7cfca03c984d80284b8a665d9e076a93bfdeb0ca8b68790fe280b1ac74a3dcf787a1d3ac3bdd0a98853c897925dbbf78c7ae37dbd5dce50a2a61fd82edae5337abf90815c8358aa8ead8dab1f8bed8f048e327819492041d9079096b843a40fa4f4f89020c16727a1d77b1bae8f3175ac5ebcf7a020000",
    ],
    [
      "ETag",
      "ViYELdhRdt3edbMhTjGx5A==",
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
      "Tue, 26 Oct 2021 14:48:35 GMT",
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
      "51",
      "6e82300000d0bbf4db184119b03fd9da21302b509df2432a946241ab2d1271d9dd67768df9eef0be012d0aa675dec9869dc02b18a8e98e8b7178763cc4f97220c705cb43b18ec9b5c3fc83a455dad5114f3cd6ae967b4750c926ea2b7515bb6c202a771b72b424b57adf22da784b97219f2f04ee73078af9358866655bd5461f45cea5e24dedbfe0e9c634ed2e5b6c2d6140868cec9e06131e07d240ba6b3c1f96d5e950240a667d846c510dbb1b9ec692125846ef6ba2cb6da63152355e85f73847c95cb5d2b4af1053d5b87e3c2b8d5a923dfccc5a2c2ea7f1d3d3ff054680ddce07c5747e786c9f5aae3b027ff5f36e38b3c77f8f51c514f8f905f3bf9de819040000",
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
      "Tue, 26 Oct 2021 14:48:35 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
            parameterValue: { value: "profiles" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-11-1635259702250",
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
      "2b",
      "c87b6d12482040a468cd52ba22256425a455354dc81843dd124cb1e9d455f9efbb364dd7aa52f784ed7bce3de77ef08cee599da319ca58f9d0d1f6e9cb1dcfd009a21297f05addee64b55cbadda57f77feedb2bda9c91fbc98cf01c1144be07d53d181e05d4ba898edb6c3b2e55d835bce0790686059036b3a71c68eef9ae3b163024fd0aa58b1fa1ed8b7523662361a1db58725e7654571c3c490f0fdebfbe8713c6a5a7e478914a3f792235011a3cf45bf569c60c9783ddf6dc14027689bd23d661558f8c7ccb3d3f7a9870cef8725801f19a19810ded552d9821484d7052bbb566745b367a46dbe39a06db00a96894178d5edebb4c67b7a62e458e2543e35d4388f376b238cce37f17a91849b28dd2e2f82f562b8dcac76eb686b5c5f047160489c5554738db971aa6f115c403fa742b25aab27ea5929bf3428fc381645006941fb60ea9a536c79a69f15994b0a6fe2648549b3cccb5c074f3293f836b5f38c62e06951cdc235afedc2f3f28967a79858d3d4b64d37f5a79e93fa996fb976e68dad898b0e27e877cb243d63a2e182f51d42d77198046912efa2e52209740905ee2a79d61b5305bcf528a140007d52d34145190725d5ee304a8278b14cc2aba09ff08a96983c6d1f60c605ae0405346ea17992b66b9e43c350b458076700d613fb710c0a34fbf98c54cf958b372d7fa52730406557ea2fda2671187dd7768e882b5c751af2d81f541905ab94e9c32f00c28ef649d0e52e886f50ff14d382b6b426ff1f268075e0bfbfda71ef010b9b0f3242c21d56870825425adaaf10d3d51ed9963399fa48835bf92166fbe6b1692a87ca48f7b4962f15f57b0f85f6629d78054110a61fe9661dfe02e2f8a67577",
      "040000",
    ],
    [
      "ETag",
      "lhUtlCC7uQ9jFBQrYnczaA==",
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
      "Tue, 26 Oct 2021 14:48:35 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1635259702250"
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
      "dd",
      "6e",
      "db",
      "30",
      "0c",
      "85df45bb7580387fed0cf422e9b2d6809bb4897bb3a1301489f6d4c9a226c9198220ef3edaedb2611de0ded824f511268f8e8fecbb3292256ca7aa1f0db8c3870ac2431b6cc0373a787a59341e58c420f08ac8891dab99fb727b132e73378a1bb57b48afabab2b22bcf8063567c991950ab4f42cf97a6486d7406d0275539ba2cb22160eb62d6ef34dbabaa1bc46d9e6abc72c9b2fb2253b45e746c9032f3afe1d6d4fa7883de36e0325383002da59acc36710216dd7f4bcb61a061e1b27c0b30eee0e2a878de50e714095411c0fe2d9783a9a7ebc188e46d321811a050f0a0db18f5b9a8f050c5c6ff0276dc9e23111ae8b69e3b27beea9ae64b7491ba6ab7c36e906fc1be042606342d10b96caf9f0a2de6ff055857f49cddf09d25529dd07556024b83e4ad9824be9c0fb5e127dc1ad3d638bf53a7bab8a910e95ec07f7aa07d0617f063e67ebf9ffa42583fdd1ead33c5fbe217c20db9c913cbd5b6ef3f9dd7dcb3dbd1a617108e0ef1d92ab3cb4868a8793cbe9c56cf8e2b16b6c7d47df49826b206282d3af72ab024b4aae3d9c7e019ed0a40488030000",
    ],
    [
      "ETag",
      "4p3i6rZHGt8Tr21uibQICg==",
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
      "Tue, 26 Oct 2021 14:48:36 GMT",
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
          "SELECT `ios_app`, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `ios_app`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-12-1635259702250",
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
      "fd",
      "6f",
      "da",
      "30",
      "10",
      "fd",
      "57",
      "22ef974de22309103ea4aaa36dd665a2a10d818a4d1338c6493d429cda0e13aaf8df77714a29abd44a48e4fcdebb77773e3fa135cb56688022963c1654ec3efde111aa21aa7002a7b30bb2dbba3f1fa2eb68bbde9a3f7c7f3677efcece80c14a95c49b3ca575c90b41a81c4c278d44f022c782f33a24aa5b76dd725a1dbbd3ef9ab6dd314127691a8f58b606f58352b91c349b07ef46c27992529c33d9207cf372dedcdacd5cf03f9428d93cb56c828b6cbe6f7a9e728215e3d9d974020514928a05dd6096420947e52afa7a9abac1f0a6910079cb08c584f0225365599082f02c6649217456347842bacc571f68e28edccbd058322e1738cf9735f85c2d0d2c8dc5225f1bdf82f18db1849e629652b934eebfbb816b541ccf37a6beef4e42e3f3f917e33a184f6f8d8bb9c66ac78450c58a4ac5325d4388a39496fecf63f2de5e4e29c00a4b5a818baee960ab67f6a338ea92b8d7ea44b149a3a817753bb81599a4dfa6ed554431e854995dab70c633bb4fcc6e64f6624c5a26894d8c2da7ddc38ed36bc119b6fa74155b7de2a07d0dfd154cd12b26732e59352b741f78a1bb0883a97f390c5ddd468c8b545d55c5954dbcae534193407aa7af7d89320e4ee5e03d3f7483e165e8cddceaae4734c164377984db8e712a29b0b1c01baaa8b8e12b181aba1d4fbcd01bfbc31128f405de1e18120d7e3d1d05e12ed75356fa1f0d836038070d1602effec3a00ea78df6fb5776339c169aa2f93aaaf26f2b0059d0cb31b24fa2f64904c3fdbd875f0dc1c257cee86eea0673541d0534a68266e4e39d00b2063e7cb78747045c7846602315c4b08144962644d06a13d946b7f2acb61cbbd5469a2cd41bac",
      "e53887919739ca8c744333f5dc51f588f4104ba8902f240061817ccfbf06f41fc91a7100c4040000",
    ],
    [
      "ETag",
      "VBcyvEZhbGbvkv0JNNVYEQ==",
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
      "Tue, 26 Oct 2021 14:48:36 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1635259702250"
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
      "7d",
      "51",
      "4d",
      "4f",
      "c2",
      "40",
      "10fd2fe3d136a115309070006d046d401038600859cab414dacebabbd510c27f77b61839f871d99d791fc97bbb47d8a7c506dab04e93b712d5e12a4133b6c304759919cd97a4422338804624acbc9f5f0f16fdb9d75a44d37ef0b4db76c7f5c78f4e87153ada622ea07d8438c56ca3a1fd7a8442e4c8b694f44a48c92a739016e88d4661d01d3290d3c602c35918767b610027e7dbb55ac9fdc532184e838760f29b6579726047eb09c6a8b088d086908a76189981eda7452e337435952a420d95b8221245a5148ac865c4f57cd76bde34fc46ebb6e6fb8d1a0b338a8449a960edec85b3812123b2097d703da8b3405523378dabf39d61a34aac6ad8c5abd2fd49377fd0b1c8f485f7ffb7d72dbdfc4ad53b18d4cf8ab8a246dbae766e7a47b6bde157b15e0722c13fd54fcd793f7d02dab3a03c06020000",
    ],
    [
      "ETag",
      "DV+IZHV19ZcTHEKjhAQ4Jw==",
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
      "Tue, 26 Oct 2021 14:48:36 GMT",
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
      "edd3497282401400d0bbf4da580a387476ca28c8a022063614211f44e66e5ac054ee1e2bd788ef0eef1b45710c94865d9d4385ded11871781a4f8d66bd55d2ebca9fc9e06fae0393bf1e29eecfa5ab9f1285db09d8bf7554502575d9c554361f159f36f2bcb584965ef7ce41536652119b67629be61cb4b42e132994525678e2919b333fbf1fb8bd2862128c5039f7c42c2e606852eb490b9fad4f0e1b89116e646dd9f68e7dc9a177737da8d5648823c80adba03c5706ae7b1394c076c1a3bd19b89d46777ec5ed1cd695cac71b188dfab9ae091e5866056d6445ab449fbebcfc5f68826068320234cc9edbf905c613f4573fecc6069effb7101120e8e7172d9b744d19040000",
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
      "Tue, 26 Oct 2021 14:48:37 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
            parameterValue: { value: "profiles" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-13-1635259702250",
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
      "00000002ff85535d6f9b3014fd2bc87b6d1208a12491a2354ae91a29211b9056d33421e35c985b822936edaa2aff7dd7a6e95a556a9fb07dcfb9e7dc0f9ec82daf76644a325edcb5d03c7eb911193921a06881affe822571c656352c2ee2f9e6af737a556d1e66334470cd92745f97d093a26d18c8e936ee178d686bda08d1c3443dc7ed39a7ae37f426be3d1c7a36f22494f98a57b7c8fea3542da783c151bb5f085194406b2efb4cec5fde07f7c341dd881b604a0ede4a0e50450e3e16fd5a0a461517d56c1ba381564293c29ef2122dfc67eeb2b3b7a9fb9ceefb0582ef3903ca98682ba56d610a26aa9c176d63b292e91331365f1d481cac8245623151b6fb2aade81e4eac1d5534558f355817d1666d2dc38b4db49e27cb4d98c68bcb603def2f36abed3a8cadebcb200a2c45b3120cd79a5967e616e205f5772015af8c7aa29fb5f2738396efc7a209282da10ba6be7d4a9db13dc9f2cc67f9d8f5b2dc862c1b67be47ddcc6693118c761950e41951c3a295a846aeeffa9eefa6cccdf374744a27e97848fdd4b13dc8fc9133660e238713f2d07005e75cd642f2ae43e43a5a26419a44db70314f0253424edb529d77c67401af3d2a2c10411fd474d0512e5049b77b192641345f24cbaba09bf00a0aca1ee33b9c714e4b0988a60d364f41b3163b6c1809e7ebe01cc16662df8f4149a6bf9e88eeb976f1aae52ff40407a8ed2af32571122dc36fc6ce117145cbd640eebb832e23e7a5367df88d40dcd12e09f9b10da29fa47b8a2087062af6f930116c029ffe6ac7bd472c6e3eca4885775c1d26b5086ba05b216eaa3db21ddf1b8f890137ea5dccb7dd63d3740e9d11f650a9e78ababdc7423bb156be803088d30f4db30eff003d182efb77040000",
    ],
    [
      "ETag",
      "7CcTSbcLpeCFSAOx16VnOw==",
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
      "Tue, 26 Oct 2021 14:48:37 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1635259702250"
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
      "301086ff8bf73595d2969411890f2d745bb43485363069084526be64668e2fb39d6ea5ea7fe71258876052f892dc9d9f53ee5ebfd9b19f520b16b23b59fe6ac06c3f94e02edb6005b651ced2ab466d81790c1c2f899cfbfae4fbe2e1cf79b2c1e8dbc357ff3a48d697a7a744d8fc07549c853b564850c2b2f066c734af80da72544da5b32ef398dbd66d719daea2e433e5158a364faee2783a8be76cef1d1a05773cebf877b4ddee3d768f772b28c080cea19da536780fb98bda352daf6a05038b8dc9c1b20eee0e4a834dcd0de2802a83e178309c8c83517072ec8f46814fa0c29c3b899ad8ab35cdc71c3aae56f89bb664c33111a68b69e3a27b6ea82e45b7491b46493a39ea067c09f03cc746bbac172ca4b1ee49bdbfe0b30aaf49c5df09d25549d50795a005983e4ad61917c280b5bd24da8cd7f5019b2d97f15b55b43028453fb8913d80729b03f0295e4eff272d19ec9f56e7d374fe86b08e6c7340d268315fa7d3c545cbdd3e1b61b675602f0c92ab2cb4861afa471f83e389ffe4b1336c7d47df099d69c06339a75fe58b742c2cb8b2b07f04ec3f7ddf88030000",
    ],
    [
      "ETag",
      "E0n9ZMzxDNvoIWzK0V5NSQ==",
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
      "Tue, 26 Oct 2021 14:48:38 GMT",
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
          "SELECT `ios_app`, `last_name`, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `ios_app`, `last_name`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-14-1635259702250",
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
      "02ff8553eb4edb30147e95c8fbb349bda469d3a49510eb4a60914a0a690a62d3d43a8e9319d238d80e5385faee3b7128d0a18154293dfe2ee7e2e34774c78a048d51ccb2fb8a8aeda75b1ea316a20a6770fa43f572be282fefc8a9bc7482ebe9ed5444d9d1113058ad927853e6b42d79250895e3e5a293095e955870de06a3766fd0ee0dfbb6658f1cd3b26c137492e6e98c1577a0fead5429c7ddee3e7727e33ccb292e99ec10be793eef3e58dd52f05b4a94ec1ea6ec4216d97d3fe971ce09568c1747cb051450492a567483590e25bc2893f8eba17587e14d2703f203231413c2ab42d5658105e145cab24a6857347e44bacc577fd0c29b79d3c858332e57b82cd72d639d63a95605ded03a60c9dac0d258adca3be3349c9f1b6b68306539956be3fabb177a46c3f103631904de22323e1f7f31cec2f9f2c2f876a3b1d67fdca1be844ac50a5d5d84e39cd6953d0dd07f7b6db5002b2c6903ae1c73887bae398ad3d821a9dbb7e3d4a471ecc68e8dfbb14946033a48628a41a76a77adc2052fdcbe1b9bce8058ce28c516185816352d7b983a8ee9da6e620e493274e311dab5d01fc1143d61b2e492355344d7a11f79ab285c06d349e4e936525ce5eaa429ae6ee2759d0a9a04d23b7ded6a9471c8545f891f445e389946fe95d76cc18c66986c17f7b00729ce25053616304145c5394f6068e862bef0237f1e4c66a0d0577bb1674834fef9f82288b6a59eb2d25f3409c3c90d68b01078fb0f06750c0768b77b95ee0ae795a668be8e1aff8706403de8e525b20ea2c1413444bb5f3bf8b5103c852633ba5c7ae10d6a8e429a52410bf2f14e0059031fbee8fdf3022e3c30482315c4b08144d64988a0cd26b28d6ee549dd73edbe853459a8379863f5f723af3d6a47baa1857aeaa8795e7a883554c9671280b040811f9c01fa17b372aba3de040000",
    ],
    [
      "ETag",
      "Zt1loSpQkcFsQ7NWCjCrTg==",
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
      "Tue, 26 Oct 2021 14:48:38 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-14-1635259702250"
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
      "7d92514fc2301485ff4b7d8504706058c2039005c165e8800763c852c6dd2c6cbbb5ed3048f8efde0e331e545eba7b4fbfd3dd9ef4c4f6a2d832976d44fa51823adea5605e6c11822e33a3e923b1d0c01a0c0c4f897c4dc493e83b7a56f0d29bacf2b23fee7e0d07032274fc0e3967ee892502b2ad66eedb89153c07b209d41197922873945618cde7be370c48c8716b8560e5fbc391efb173a376655c9ba8aa6bdf62194e83c96d5b14c9fdd5310d96dec40bffb2accf0db6c34d0809282862b0b34b853b88cdd4c6a2792e33686a2c550c9a5570b5912a2c2557884d529a6da7d9eedd773bddfe43abd3e9b608cc30e6466041ec6a41b331838667217e522acc21405525059454eb8164a34aa8ae619b19a8030a5df7ed6ada7ff145cc33c1ebb6f78b4e78a6afb8c7cdb5e9dc3e7a8c0674826a5b2b8e35ac7fee343ad2f6b3420a4883cda675c9698c363bfa8d6b4f6bb098d3f37814e6d29fbf01daa617607b020000",
    ],
    [
      "ETag",
      "YfiKi94sJnauEGUmu9C5zA==",
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
      "Tue, 26 Oct 2021 14:48:39 GMT",
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
      "dd",
      "6e82301800d077e9b51a0415bb3b88881490298380370de0077445cadf12ebb2779fd96bccf30ee71b654501e34827c1a1456f48662a5e140bb7db9afbaae6969c63c54e3c2d1f1b16b4c623ba8f8eda92360cdc4be085f5e146e2bcd18d220202916588b595d562e5f28070766e36b642fd7d99f65f94dccc2d7b1fa2a3621d43620b1f2e86e0cb50763b5d26a165caf4e4e353a956955f7df45caf97549deb7b5b5ef5cc7c00d3578e6b24c2a3537db0fb5e3bdb90444a2c6235c7717a251570755d92e64edb15db7dce31e4dcc1c5a63ca7fea485f40a9766f1f2f27fa119827bc70618297b6ed7d618cfd05f7d3ac90e9eff4dc80618d0cf2f91e1fad819040000",
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
      "Tue, 26 Oct 2021 14:48:39 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
            parameterValue: { value: "profiles" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-15-1635259702250",
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
      "0002ff85536b4fa34014fd2b64f6ab6da105fb489ab5a9b83669e90a5463361b320c177694322c33688ce97fdf3b83753526fa8999b9e7dc73ee836772cfab8ccc48ca8bbf2d344fdfee444a4e08285ae06b7d79950ffc477e5b16ed68176de27a7b3b2de6734470cd92745f97d093a26d18c8d92eea178d686bda08d1c3443dc7eb39a7236fe84dc7f670e8d9c89350e66b5edd23fb8f52b59c0d0647ed7e21445102adb9ec33b17f7d1f3c0c077523ee802939782f39401539f85cf47b2918555c54f35d84065a094d027bca4bb4f09f99a567ef53f739ddf70b043f70069431d1564adbc2144c54392fdac66425b367626cbe3990c85ffbcbd862a26cf75552d13d9c58195534514f355817e17663ad828b6db859c4ab6d9044cb4b7fb3e82fb7ebdd2688ac9b4b3ff42d45d3120cd79a5b67e616e005f533908a57463dd6cf5af9a541ab8f63d1049496d00593b17d4a9d893d4df374ccf2c9c84b731bd274928e3d3a4a6d3675c1cd52a0c833a286452b513976ea3aa3899b001bdb89eb0ed36492654ee2661e267332e6804d0e27e4b1e10aceb9ac85e45d87c84db88afd240e77c17211fba6849cb6a53aef8ce902de7a545820823ea9e9a0a35ca0926ef72a88fd70b18c57d77e37e13514943d457f71c6392d25209a36d83c05cd4664d830122c36fe3982cdc47e1e8392cc7e3d13dd73ede24dcb5fe9310e50db55e64ba2385c053f8c9d23e29a96ad813c74075d46ce4b6dfaf01b81b8a35d1272b5f3c35bd23d8590430315fb7a980836812f7fb5e3de2316371f65a4c23bae0e935a8435d0ad1037d51ed9ced4b5a7c4801bf521e6b9d363d3740e9d11f650a9978ababdc7423bb156be823088d30f4cb30eff00e6fb696977040000",
    ],
    [
      "ETag",
      "pHQf/EwiYlgu3USMTpOY9g==",
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
      "Tue, 26 Oct 2021 14:48:39 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-15-1635259702250"
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
      "51",
      "6f",
      "9b",
      "30",
      "10",
      "c7",
      "bf",
      "8bf74aa4242d6986d487a4c936249274401fa6a9422e3ea83be363b6491545f9ee3bd32e9bd649f405eecebf13777fff39b21f520b16b10759ffecc01c3ed4e0befa2005db2967e9d5a2b6c002068ed74466d9348719a4ab9bc739df7c5baee2f97ef37c7d4d842d1fa1e12c3ab24a82129645df8f4cf306a8ad44d535bae8b380b943eb8b599ec6dbcf9437287cbebd4b92c53259b353706e14dcf1a2e7dfd1767f0ad8133ea45081015d829fa535f804a58bfd9a9637ad8291c5ce9460590ff707b5c1aee506714495d1241c4d6617e134fc78359e4ec331810a4bee246a62ef329a8f39745ca5f84c5bb2c90511a68f69e3aa7feea92e45bf890fe36d3ebbec07fc1be065899d76c520584963dd8b7abfc15715fe25157f27485725d510548316608628d9165c0803d60e92680bdeb6676cb9db256f55d1c2a014c3e05e0e00caedcfc0a764b7f89fb464b03f5aad16f9fa0d611dd9e68ce4f1669de58bcdade7ee5f8db03c38b0b706c95516bca126e3cb7978351bbf78ec06bdefe83b91331d04ace4f4ab7c918e451557164ebf007f1142d388030000",
    ],
    [
      "ETag",
      "SS2Te6eRDCh8aMYBDI8vMw==",
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
      "Tue, 26 Oct 2021 14:48:40 GMT",
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
          "SELECT `date`, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `date`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-16-1635259702250",
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
      "7f",
      "4f",
      "db",
      "30",
      "10",
      "fd2a91f7cfa695364d93fe9210eb208c482565694a85a6a975dc4b6648e3103b8c0af5bbefe2b440870452a4f6fcdebb77773e3f913b9eadc890443cb92fa1d87cba151169105034c1d364d2ff7a096a525e9c4e92f6bc9c9f3fce1e47c7c7c8e0954ad2759ec2911465c1400e67d366528832a785104798e8a8ddc5afe358cea0675a9663a24e421a8f797687ea3f4ae572d86aedbd9b8910490a34e7b2c9c4faf9bcf560b5f242dc0253b27568d94217d97adff424158c2a2eb2e3d9140b2825140b58539e560d3e2b57d1b7c3d44d4ed7cd04c90f9c01654c9499aacac2144c64314fca426725c327a2cb7cf5874cddb17b1a1acb1555b06c184bbe5a1a541a8b457e679c07934b63890dc53c05b934e6176ee01a35c7f38d99efbbd3d0f87cf2c5f8114c6657c6f71b8d3576d9d07f0552f14cbb87344aa172de0dc87b7b2d95802a2aa106173db34bdb7d7310c5518fc5fd8e13c52644513fea39b413996c6083bd8a80a24e55d9b58a66226bf71dbb6bd3fe800d2cd6359d9e09762f8a699bd1d836cdc8a44ec4cc419f6c1be46fc1159c71990bc9eb299179e085ee220c66fee92874751b312d537556175735f1ba4e854d22e99dbeb615ca053a5523f7fcd00d46a7a177edd6b73c8684b2cdf41eef39a6a90464d382ae414171295638347235997aa137f1476354e8abbbda332419fe7a7a11849b5c4f59e95f320a82d10d6a6851d0cd7f18d6d1b5c976fbcaee9aa6a5a668be8eeafc0f3540dad8cb4b641d44f641d425dbdf5bfc1a0457bd76263f676e7043eaa300622820631fef049235f0e18bdd3f1fe4e203421ba930c60d64b2326105d49bc8d7ba959dda323bdd0ed1e442bdc11cabb71f7995a3ca086bc8d4aea3faf9e8215650299f4908e202f99eff03d17f51cb",
      "f739be040000",
    ],
    [
      "ETag",
      "gO8+MetOuHCOg1WuWFxUxA==",
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
      "Tue, 26 Oct 2021 14:48:40 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-16-1635259702250"
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
      "75",
      "91",
      "51",
      "4f",
      "c2",
      "30",
      "10",
      "c7",
      "bfcbf9ba255b655397f0003a05834426bc680829db3107db3adb4e240bdfddeb30f30592a6bdbbfeaebdff5d03bbac4c208075967ed5280f5729ea9931225475ae151d9528158205a8794aa4cf9e6f3db6973fc93b3e66e9cb78344cdc59bf4f848a3fb1e01034b0c9304f14041f0d94bc404a4bb8368fe84365bc87c13c24af1089f1a68bc964309c8470b43a7eb5aa76fffc783a0f9fc2e85ccaf268c156ac23dca0c43246f37d25c516633d36ca142faa1c6d256a19a382166e2f5229ea8a4b216c8ad8ae4febda63dedd8dc398e710988b98eb4c94c42edea836d042f33c127b12063d02646b92c64dbb7f539839ccb11d663b6e2bc684dcb6c6b390df41fe65887510bb0cf53aa867a0e55fb1c38346f52a05295768443ba706dc0bd3149a48a0658d16c49c4637caf4c93ffe0245fb41b317020000",
    ],
    [
      "ETag",
      "62J852wrxdZeFigMIHBd1Q==",
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
      "Tue, 26 Oct 2021 14:48:40 GMT",
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
      "000000000002ffedd3417282300000c0bfe42c4e8822d05b831014452826b45c3208b1621590800a9dfebd4ebf51f70ffb0dd22c1352f2b6fa122578017d8acc7136f66a033b9f8764b54f42f7552f6d7d539d96e780dfb04b4500071c62c3b66b2a95d6dc51dfeaa17723924d9dc97bb88479f81644b93e75082a76e84ea989f5f3b6207b99681bf9a1eb6b724aac8befbb1aeffab65ba934f27d2fcc870e4137e6b3f9c9a89bba8be0555530a7f8125b57e62c9a78b96d948cab6ed495f392f944edd6951d304e88725d30521c16138db547cf8331f2868804c741236dc10cab4208cec64f4fff17180171af8b46485e3cb64f34d31c81bffabced6bf1f88f45da8806fcfc02afb5347819040000",
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
      "Tue, 26 Oct 2021 14:48:41 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
            parameterValue: { value: "profiles" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-17-1635259702250",
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
      "02ff85536b4fdb3014fd2b91f795b649fa485ba91a5509a35a9b429a16a1698a1ce72633a471891d1842fdefbb76280321c1a7d8bee7dc73ee23cfe48e9729199384e7f735544fdf6e45424e08289ae3eb2a2cbba9933d6eb7f548fe5d8eb2abcb9f37d3c904115cb324dded0b684951570ce478b36ee795a8f7b412a285895a8ed77206ddbedb1f79b6ebf66de44928b2052fef90fd47a9bd1c773a47ed762e445e00dd73d96662f7fade79703bfb4adc0253b2f35eb2832ab2f3b9e8f74230aab828279b351aa8255431ec282fd0c27f669a9cbe4fdde674d7ce11fcc01950c6445d2a6d0b533051663caf2b93958c9f89b1f9e640d6fec29f45161345bd2be392eee0c44aa9a2b17ada83751eae96d63c385f85cb69345f05f17a76e12fa7edd96ab159066bebfac20f7d4bd1a400c3b526d6a9b9057841fd14a4e2a5518ff4b3567e69d0fce3583401a52534c1d8b307d419daa3244b3c960dbbfd24b321498689d7a7ddc466a31ef4d20428f28ca861d152948e37a0d466100f068351dcf380c6c39e9dc4aceff553cf495d970dc9e1843c565cc119977b2179d321721dce233f8ec24d309b46be2921a375a1ce1a63ba80b71e151688a04f6a3ae82817a8a4db3d0f223f9ccea2f9d66f26bc809cb2a7f53dce38a3850444d30a9ba7a05a8a141b4682e9d23f43b099d8e53128c9f8d733d13dd72edeb4fc951ee100b55d65be641d85f3e087b173446c69511bc84373d06564bcd0a60fbf11883bda2421571b3fbc21cd5308195450b2af87896013f8f2573bee3d6271f351462abce3ea30a9455805cd0a7153ed91ed3a4e7f480cb8521f62eea07b6c9acea133c20e4af55251b3f758682356cb57100671fa8169d6e11fd1dfa6aa77040000",
    ],
    [
      "ETag",
      "ORn3d1fwVVu9sxM9fQPKYA==",
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
      "Tue, 26 Oct 2021 14:48:41 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-17-1635259702250"
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
      "02ff8d93516fd33010c7bf8b794da5b65bdb11690f296425226b479a3d2034459e7d092e8e6d6ca7a854fdee9cb3511043ca5e92bbf3ef94bbbfff39926f4271129347d17cefc01ede34e03f85a000d749eff065b4724022029e36489addf623789566abe2e6ea275da5ed9c7f4eaeaf9170ec2bb494c447520b90dc91f8cb9128da02b6312dbb56557d16117f30a1b82d8b6cbdc2bcd53ce4ebfb3c4f96794a4ed1b991534fab9e7f45dbc329223bfd58400d161483308bb17a07cc67614d475b2361e474671938d2c3fd41637567a8d57a8495d164319acc2f66d3d9dbc5783a9d8d11949a512fb442f67e8bf311af3d9585fe815b92c90512b68f71e3ba7feeb12e78bf4908b37539bfec07fc1ba08ce94ef96a10ac8575fe49bddfe0b30aff9292be12c4ab1272086a4071b043943015e5dc827383a4761535e68c2d379bfca52a8a5b2df830b8170380f4fb3370936f92ff498b06fba3d5fba44c5f10cea36dce4899dda6db32b9bd0bdcc3b31196070feece6a74958360a8c9f8f26ab6988f9f3cf64e07dfe177626f3b8808a3f8ab7c109ec435950e4ebf00308d979188030000",
    ],
    [
      "ETag",
      "pjSKetnEIGRF8zaGEm6dYA==",
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
      "Tue, 26 Oct 2021 14:48:41 GMT",
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
          "SELECT `date`, `last_name`, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `date`, `last_name`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-18-1635259702250",
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
      "7f",
      "4f",
      "db3010fd2a91f7cf26953649d3f48784580719649414d21484a6a9751c2733a471b01da682fadd77712850368154293dbff7eede9d7d8fe89615091aa19865771515eb4f373c462d4415cee0f4213d199fbaa70fa5f5f063eda5499cfbd9e9c5fe3e3058ad927855e6744ff24a102a47f3593b13bc2ab1e07c0f12ed59833dcbedf6ecdeb06fda76cf049da4793a61c52da87f2b55ca51a7b3adddce38cf728a4b26db84af9ecf3bf776a714fc8612253bbb253b504576de2f7a90738215e3c5fe7c06062a49c582ae30cbc1c28b3289bfeea66e33bc6a6740be678462427855a8da16a420bc485956099d158d1e91b6f9ea0f9a7913ef303296095674d9329639966a51e0950e58b234b034168bf2d6f81e4ecf8c257497b29ccaa57175e2859ed170fcc0980781378b8ccf075f8ce3703a3f37be5d6bacf5bfd4e02ca152b142fb8a709cd3dad3d3e8fc7f2fac166085256dc045df74b1353087711af7493ae8f6e2d4a4713c88fb3ddc8d4d3274a893c414834ed5d9b50a17bce89bc475dcbe65bb9474fb34711cc726e9d0a25dcb49523bb66d920cdcae83362df44730458f982cb964cdfcd055e847de220ae7c1e138f2741b29ae7275d498ab9b78ed534193407aa7af4d8d320e95eacbf083c80bc787917fe935f73fa11926ebd91dbc8014e792021b0b98a0a2e28c273034743e9df9913f0dc61350e84b3ddf32241afd7c7c1144eb524f59e92f1a87e1f81a345808bc7e83810f1746b07955ee12e795a668be8e9afcf70d802ce8e525b27722672772d1e6d7067e2d044bd0544617732fbc46cd5148532a68413e7e1340d6c087bbbc5d2ce0c26a4119a920861748645d8408dabc44b6d2ad3ca96d6be8d84893857a8bd9e6b0b71d799da3ce4857b4504f1d358ba5875843957c2601080f28f0836340ff02fb600f78d8040000",
    ],
    [
      "ETag",
      "zfHAK6Kzp1zJyEfdblIgKQ==",
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
      "Tue, 26 Oct 2021 14:48:42 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-18-1635259702250"
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
      "7d",
      "92",
      "4f",
      "6f",
      "82",
      "40",
      "10",
      "c5",
      "bf",
      "cb",
      "f6",
      "0a09e07f120f6a89b531da22a687c69815468b024377178d317ef7ce62bbbdd85ed879b3bf07b36fb9b0435a24cc679b74f75981383fec40bdea220459654ad252622181590c14df11a9e6f9b893bccddd68d9855e63e3b426f1e8d4ef1321e30fc839f32f6c9b429648e6bf5f58c173205bc2957e893a975a3d0ea280548e8956b3e5743a184e0376b50c9f71a9d6756d4c8b289cccc6ffdbd6ebf2f0eb98cca2601c84f72cababc5f6b809610b028a18f4d4a5c03dc46aa203913c2f33b025562206c96ab8ded809ac4a2e106dead86ed776db8d96d7ea751ccf6b3904661873956241ec7241b331858a67219e280fd62440d42545b3ad9f476a7b8ee7d88e673b6e7d18dd7a0671c4541aedd633df35b50db48879967223db7f7b3c0305fa667e84f7b7a369a0112a905b1489e934b56df57dd4e199b65f04526e127464ce2dbe11ea48e963be1215582ce6f4bf3ca5eaa6af5f9e8c597b8c020000",
    ],
    [
      "ETag",
      "tOmG7dWO1TU8e93b05IcCw==",
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
      "Tue, 26 Oct 2021 14:48:42 GMT",
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
      "5b",
      "72",
      "82",
      "301400d0bde45b1caaf248ff0a429d8a86a918a03f0cc62baf91601205ec74ef75ba8d7af670be51ce18489929de408b5ed198cff0944dd79dedf845697e7469d16cc555635e0283bc5cad8434e18a7eb1d2277719ac530d5bbdbb5eaa68f00ba6a73a1deed5f2e536dc38ae5b2b8c8e19ed716296bdae645ff1b1b8288dbb31708f18bd85a1e634d8cccdebd1602c5f1946bc6f75d8887ad74b1875d70889f0ded98a06dbcad3cf51b30b0e5e62c7cedb81c7e4b419634d707b38ab651dba67a0bcc48b53d1da51bea004541490acf29ccf7a86650dfbcbf4e9e9ff4213044357099059f5d83e37309ea0bffa991a3b78fc77201720d0cf2f12aa57c919040000",
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
      "Tue, 26 Oct 2021 14:48:42 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
            parameterValue: { value: "profiles" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-19-1635259702250",
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
      "14fd2bc87b6d42424a2191a2354ae99a29212b9056d33421e35c985b82136cba6555fefbae4dd3b5aad43e61fb9e73cfb91f3c927b5eadc98864bcd83550ef3fdd898c9c1050b4c0d7ddd7fc7effc7890360d98efa76f8f7cebebc1e8f11c1354bd2cdb6848e144dcd408e5671b7a845b3a5b5101d4cd4e90f3bfdb381ebb843afe7386e0f7912ca7cceab7b64ff526a2b47b67dd4ee16421425d02d975d2636cfeff683636f6b71074c49fbb5a48d2ad27e5ff4732918555c54e3558c061a09750a1bca4bb4f09fb9cece5fa7ee72bae916087ee00c2863a2a994b6852998a8725e34b5c94a468fc4d87c712071300fa689c544d96caab4a21b38b1d654d154edb7605d46cb85350b2f97d16292cc96611a4faf82c5a43b5dce578b30b66eaf8228b014cd4a305c6b6c9d9b5b8817d45f8354bc32ea897ed6ca4f0d9abd1d8b26a0b48436987abd33daf77bc32ccf3c96fb0337cb7b90657ee6b97490f5d8f0144ed71950e41951c3a295a860e0fb8c0ef21472e8a7a73463291daef3d4eb53ea7b4ecf1dba43723821bf6baee082cbad90bced10b98d66499026d12a9c4e92c09490d3a65417ad315dc04b8f0a0b44d03b351d74940b54d2ed9e8549104da6c9ec2668273c8782b27dbcc319e7b49480685a63f314d40bb1c6869170b2082e106c26f6ed189464f4e391e89e6b172f5afe4c4f7080daae325f1227d12cfc62ec1c1137b46c0ce4a13de832725e6ad3879f08c41d6d9390eb55107d27ed53844dada1621f0f13c126f0e1af76dc7bc4e2e6a38c5478c7d561528bb01ada15e2a6da23db71bcbe4b0cb8566f62bee31d9ba673e88cb0814a3d55d4ee3d16da8a35f21984419c7e689a75f80712e3c83177040000",
    ],
    [
      "ETag",
      "qJfkyx2SEecbqa8/Nzj/FQ==",
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
      "Tue, 26 Oct 2021 14:48:42 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-19-1635259702250"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d93514fdb3010c7bf8bf79a4a6da1ed1a898716caa8149ad2061e36a1c88d2f9999e30bb653a8aa7e77ce811534268597e4eefc3be5eeef7ff6ec8fd482856c238bc71accee5b01eec6072bb0b572965e156a0b2c60e07841e44dac7f3e5e5dc6e717cb3b188e9fa71b03a3a7b333226cf61b4acec23dcb25286159f86bcf342f81da325475a9d3260b98db55beb84e56f3c50fca4b143e5fdc46d1641acdd82138360aee78daf05f68bb3f04ec01372bc8c180cec0cf52197c80cccdfd9a969795828ec5da64605903370785c1bae206b143954e6fdce90d4f06fdc178d4edf7075d021566dc49d4c4deae693ee6d071b5c227da92f54e88304d4c1be7cd734b75299a4d7c385f24c3d366c08f00cf32acb54b5bc15c1aeb5ed5fb0bbea9f02fa9f81741ba2aa9daa002b400d346c92ae54218b0b695449bf2aa3a62d3388e3eaba2854129dac1ad6c0194db1e81cb289efc4f5a32d8bb56179364f689b08e6c734492f9f56c9d4cae979ebb7f33c274e7c02e0d92ab2c7843f5baa7df07a361f7d563e7e87d47df099da9216019a75fe54a3a16e65c5938bc005308182c88030000",
    ],
    [
      "ETag",
      "QOnZqHFOCDPVe69xBbre7w==",
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
      "Tue, 26 Oct 2021 14:48:43 GMT",
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
          "SELECT `stamp`, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `stamp`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-20-1635259702250",
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
      "02ff85537f4fdb3010fd2a91f7cf26f5479a3669a9845807a18b565a4853109aa6d6762e99218d43ec74ab50bffb2e09053a24902239f67befdeddf9fc48ee451a922161227e2820df7eba938c3408681ae3697f3cf6f85f6e657274de9e75363fc285ed5c1d1f2343942a45d759024d258b9c831a2ee6ad3897454673299b18a86999cd8ed3b52dfba86f5a966da24e41124d447a8feadf5a676ad86eefbd5bb19471023413aac5e5faf9bcbdb1da592eef806bd53eb46ca38b6abf6f7a92484eb590e9f1628e09140af225aca94830851765c8be1e866e09ba6ec548de080e947359a4ba4c0b43709946222ef22a2a193e922acd573f64ee4edcd3c058298d31570d6325c2954195b15c66f7c6b93fbb305658512412502be3e6bbebbb46cdf1a6c6623a75e781f1f9e48b31f6678b4be3db6d8535f6e1308310941669e51f509640e9fdd422efedc59402aaa9821a5cf64d877606e6118b589f4783aecd2213181bb0be4dbbcce4473de8850c28ea7419bd52d154a68c4661d78efabdae3330a9cd7a4e27e2110f19eb83cd001ce874c0e126d935c89f5c6838132a934ad47d2237be17b8cbc05f4c4f47815b9511d122d16775726511aff3d4582492dea96b57a242a253d9746f1ab8fee834f0aeddfa9e271053be9d3fe04d473451806c9ad33568c82f64884d2397b3b91778b3e968828aeaf22ef70c45863f1f5f04c136abbaacab958c7c7f748b1a9ae774fb1f8679383db2dbbdb2bba64951512a7eb5abe36f6a8074b096979d75b0eb1dec1cb2fbb5c3af4170d86b6772b570fd5b521ff910410e29ff7826905c011fbed9fd03422e3e21b4c139d4022790abd284e7504fa25857a53ca92d5c06a422e7fa0de638e6bee5658c3222ac21d54f15d50fa86a620915ea9984200ed0d49b8e11fd0769f5238ac0040000",
    ],
    [
      "ETag",
      "7GGIcxc2poAF/O1vKdU56Q==",
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
      "Tue, 26 Oct 2021 14:48:43 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-20-1635259702250"
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
      "6d91516f823010c7bfcbed5516405031f1010dd95c9039d48765594cc593a140b12d2ec6f8dd77c5659b992fedddbfbf6beffe3dc12e2bd7d0875596ee6b14c7bb14d58b0e629475ae246d152f25420b50b194487f724846f2298ceae8b96b39afee3e0c993f181021930f2c18f44fb0c9305f4be8bf9da06405529954aca88851c74aa7f3f12498cdfdc994a482afb5142dc2d01f86019c5b3f55cb65b5fb2d1a47f3e021886f95bc9f5bb0e5ab183728b04c50375109bec5448df57c925ecfd190bc16094a68e0e62015bcae98e0dc20c5b04dc3eab45ddbf5baa66dbb2681394f98ca7849ec6246bd81e28ae531ffa4f1c0214034214dba69d603c9d6bddb335dd7b33c27f09a791ab569f31fe779d635d7b9cd751cbaf12f67dfe67a56af7dc5399a7bff6e7c785428a782930b12b501e6c58c11d70629324e891a5b9030faccc74c5df2f3173a5a2e3f29020000",
    ],
    [
      "ETag",
      "AMvcCsJLNuNO714Y5qLLaA==",
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
      "Tue, 26 Oct 2021 14:48:43 GMT",
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
      "000002ffedd34b7282300000d0bb64ad0e22d4d01d041005a4ca4770c304922adff28928747af73abd467d7778df00a729edfb987d15b406ef60c4bcb44817660315fd92b79b2a864d16420f3a736fb490a54e0d5f054c249d7aa0be8011772a995c50f4769cb6f97d270cfb4223db7ed06d81a61c9793b69c17161ff9c19a47919884aa7ed7cd83ad26ca38900b64c1d23b6a17ba9a92a8ec9d30aa5db4c403f35000cfcc6467e2de545c38d2e05e8fb74269cd75806454a9783f7deebacc181f8a76aa3e36b2bc31e21a2d617cc88c3e2f2dc33fa15b8bbaabcdb9988cf59484d7c5cbcbff0566803e9aaca37d9c3db7af44499a81bffa311b1bfafcaf50dcd10efcfc02b0938c8c19040000",
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
      "Tue, 26 Oct 2021 14:48:44 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
            parameterValue: { value: "profiles" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-21-1635259702250",
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
      "6b6fda3014fd2b91f7b59010a03c24b422485724085d125a4dd314d9e626751b62889d4e55c57fdfb553ba5695da4fb17dcfb9e7dc479ec98328b7644c98c80f35544fdfee2523670434cdf1f55a4e0b97757d75fd90a9bbc3ec300f2b954f26881086a5e86e5f404bc9bae2a0c69bb89d57b2ded34aca16266af99d56e7bcdbf7fba381e7fb7d0f790a8a6c29ca0764df69bd5763d73d69b77329f302e85ea83697bbd777f7d177f795bc07ae95fb5ed24515e57e2efabd909c6a21cbc9264603b5822a851d15055af8cfdcb28bf7a9db82eeda39821f0507cab9ac4b6d6c610a2ecb4ce47565b392f133b136df1c481c2c8359e27059d4bb322de90ece9c2dd534d54f7b702ea3f5ca598497eb68354d16eb308d6757c16ada9ead979b55183bb7574114389ab2022cd7993817f616e205f5b7a0b428ad7a629e8df24b83161fc7620828ada009a603ef9c7686de88656cc0b361b7cf320f181bb2419f7699c7473de86d1950e45951cba2a52c29f5066cc83ba9df3fa7690f322fa574c052247bacdfcb469d2e23c733f2b7121ae642eda5124d87c86db44882348936e16c9a04b6848cd6859e37c64c016f3d6a2c10419fd47434512151c9b47b112641349d258b9ba099f01272ca9fe203ce38a3850244d30a9ba7a15ac92d368c84d3553047b09dd8f529a8c8f8f733313d372edeb4fc959ee0008d5d6dbf244ea245f8c3da39216e68515bc86373306564a230a68f7f10883bda24213f3741f48b344f11645041c9bf1e26826de0cb5fedb4f788c5cd4719a5f18eabc39511e115342b246cb527b6dff33d9f5870a53fc4badee0d43493c364841d94faa5a266efb1d046ac56af200ce2f443dbace33f44433da677040000",
    ],
    [
      "ETag",
      "PoAl/b32sPkfshqCqDNrsg==",
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
      "Tue, 26 Oct 2021 14:48:44 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-21-1635259702250"
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
      "da301086ff8bf771412250e816a91f0283152985165269d55445c6bea4ee9c5c663b540cf1df774e3b3aad93d22fc9ddf939e5eef59b03fba12ac922b655c5cf06ccfe4301eec6076bb08d76965e35561658c0c0f18248375477bf9ee287f974fa6dbe55bbd5e54717c617174458f1002567d181e50ab4b42cfa7e60152f81da04eaa6acb2360b98dbd7beb849d78be557ca4b943e5fde26493c4966ec189c1a25773c6bf977b4dd1f03f688db35e460a012e067a90d3e82700bbfa6e565ada167b131022c6be1f6a030d8d4dc20f6a8d21b84bd703c1c0d469fcffb83c1a84fa046c19dc28ad8db0dcdc71c3aaed7f8445bb27048846963da386f9f3baa2bd96ee2c3c5321d9fb503fe0d7021b0a95cd609e6ca58f7acde1ff045857f49cddf09d25529dd05155049305d94aa332ea5016b3b49b419afeb133659ad92b7aa54d2a092dde04e7500daed4ec03c59c5ff93960cf6aad597389dbd21ac23db9c90747135dba4f1d5b5e7ee5f8c30d93bb0d706c95516bca1c2fed9a7d1f9b8ffecb1297adfd17722671a0898e0f4ab5c2ac7a29c6b0bc7df6d9b4fe188030000",
    ],
    [
      "ETag",
      "t3iYzwAhFCCXFbivOH+t1A==",
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
      "Tue, 26 Oct 2021 14:48:44 GMT",
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
          "SELECT `stamp`, `last_name`, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `stamp`, `last_name`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-22-1635259702250",
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
      "53eb6e9b30147e15e4fdd9b45c08017291aa2e4bd9869692969076d13425c618ea1630c5a65554e5dd77304ddbac532b4522f67739179ff3806e581ea1310a59725bd172fbe19a87a885a8c409dc6657d5f96a98fe64b9557d4ecddefdaf9ba97f7f74040c56ab04ce8a94b605af4a42c578b9e82425af0a5c72de06a3b661b47b76df32acd140370c4b079da0693c63f90da8afa42cc4b8dbddc7ee249c2729c505131dc2b3a7fbee9dd12d4a7e4d8914ddc3905d8822ba6f073d4e39c192f1fc68b980042a41cb35cd304b21856765147e39b4ee309c751220df31423121bcca659d1658109ec72ca94ae58ac60f48a5f9e20f5a3833671a681b21c173d3d2362916729de38cd607166d342cb4f5bab8d1bef9f3536d03e5c52ca562a35dfe707c476b38aea72d3dcf5904dac7e34fda777fbe3cd3beae14d6faaf37e416512159ae320b7098d23aabc7e6b9af9fac166089056dc0f540b7716fa88fc2381c9078d8b7c258a761380c0716ee873a1999d48c428a41276b77a5c239cf75cb1e118cfbb13934488887248a89658ce2d8207a64f76d5da7a66d9923b46ba1fb92497ac244c1056b3a882e7d3770d681bff4a693c05165c4b84ae549935c5dc4cb3c251409a437eadad528e310a97e0ed70b1c7f320ddc0ba79980194d30d92e6e6106629c0a0a6c5c4207252d4f79044d4367f3851bb8736f3203857ad6b33d43a0f1ef876741b02d5497a5faa289ef4f56a0c16589b7ff6090876da2ddee45b80b9c568aa2f8ead4f8df3500ea412dcf27e3e0641e9c6cb4fbb3835f0bc11a3491d1f9d2f157a8b9f2694c4b9a93f76702c80a78779bf7ab055c582e08034329194c2011751052d2661259a64a795483d6b0912297f215d6b38d7dcb6b8fda916634978f1535aba59a5843957822010803e4b9de7740ff02c7e76cedda040000",
    ],
    [
      "ETag",
      "mhuQY8lKin5u+l41wXkCRw==",
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
      "Tue, 26 Oct 2021 14:48:45 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-22-1635259702250"
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
      "7d",
      "92",
      "51",
      "6bc2301485ff4bf638dd6cb5ce0a3ea814a7a8d356616c88c47a75d5d8db25a922e27fdf4d1ddd64b297e4de93f3919b434e6c1bc54b56678b68fd99823cdead418f4de1834a8556b425182b6005069aafc9691f64dc7b491edfdaaf4135bcaff584ed8b71a3410e157ec08eb3fa89ad22104bc5eaef2716f31d10a634df25e4d1c7c4b493eec00b26cdc188a41d2e8d349cf6fbcd56df63e7424e09aef43cab733298f8dd61e77f6c3e4fb63f447738f13a9e7f0b999d0b6c830b1f5620210ec1cc9e48dc40a8bb261645430b282a4c65088a65e6ec602d314db8442c9252b4eda2552d3bb6e33e956cdb29915160c875843179a701cdc6346a2e7c3c502aac4206999514d02a5bf7245b0f4eade438aee5563c377b8f517b20f718a9bcb7b2b1ff70ae6b5d7341c845c4f3b67a1bab56e8c2df98c735e48d7d1baa59b5f215d4460d6a8572992b1543cebe9fdd3ad2f1482265a8c0c457ba44d946132fdd57d73285020b39fda0e7485ffaf317c6bdeea99e020000",
    ],
    [
      "ETag",
      "2wrnJOp/ZCXS6c+8Jl2RlQ==",
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
      "Tue, 26 Oct 2021 14:48:45 GMT",
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
      "30",
      "00",
      "00",
      "d0",
      "bb64ad0c582aa43b2316c152840a296e981062b4a0a404e4e3f4ee757a8dfaeef06e8050caa44c9baa6017f0020632830a5536c244affc78f15a2ca36b8d9260ae0dde56975a6e9425125ed3045e9b57b16641cc22d4b5bb25d563b5c96655d66ba65fe85e5ae071be6b91bdd1f6ef7a9fbb7e72a6b0991a5fcba8e468fce824e65dbc469bccec2c9e8e2b54c7739f166bb8139c93c815240ba7656879d58aa9a4ef496e196fe21c8cddb7896dbc0db77e374d5ab9c0aaba5fe8f0609cb1b44337ca74c73ace7a860e365f0ec1e824cef593d25c551e1efe2f3001ac17a79ac9f474dffef40ce104fcd54f9b41b0fb7fc448cd6af0f30b1f30c1df19040000",
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
      "Tue, 26 Oct 2021 14:48:45 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
            parameterValue: { value: "profiles" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-23-1635259702250",
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
      "536b6f9b3014fd2bc8fbda248440f390a2354be91a29211b9054db3421e35c985b8229369da22aff7dd7a6e95a556a3f61fb9e73cfb90f1ec91d2f776442529edf37501f3edd8a949c115034c7d72fe1f6677e738836cc2d4aa8d2ad6a54359b4e11c1354bd27d5540478aa66620279ba89bd7a2a9682d440713759c41a77f3ef01c6f3cb41dc7b39127a1c896bcbc43f61fa52a39e9f54edadd5c88bc005a71d96562fffcde7b707a552d6e8129d97b2dd94315d97b5ff4732118555c94d34d84061a0975027bca0bb4f09fb94b2f5ea7ee72baefe6087ee00c2863a22995b685299828339e37b5c94a268fc4d87c712091bff4e7b1c544d1eccba4a47b38b37654d1441d2ab0aec2f5ca5a0457eb70358b17eb2089e6d7fe6ad69daf979b55105937d77ee85b8aa60518ae35b52ecc2dc00beaef402a5e1af5583f6be5a7062dde8e4513505a421b4c86f639ed8fec719aa543968d065e9ad990a6a374e8d1416ab3b10bee2e058a3c236a58b414a57bee32c7062f19646327713d2f4d523b8564c75cb06ddaef8fdc21399e91bf355770c96525246f3b446ec245ec2771b809e6b3d8372564b429d4656b4c17f0d2a3c20211f44e4d471de5029574bb1741ec87b379bcd8faed849790537688ee71c6192d24209ad6d83c05f54aecb0612498adfc4b049b897d3b052599fc7a24bae7dac58b963fd3631ca0b6abcc974471b808be1a3b27c496168d813cb4075d46c60b6dfaf81b81b8a36d12f27de3873f48fb1442063594ece36122d8043efcd54e7b8f58dc7c94910aefb83a4c6a115643bb42dc547b623bded0738801d7ea4d6c6c0f4e4dd3397446d843a99e2a6af71e0b6dc51af90cc2204e3f30cd3afe03198fbf6677040000",
    ],
    [
      "ETag",
      "BRVZgWySUc4lnepbVtutpA==",
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
      "Tue, 26 Oct 2021 14:48:46 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-23-1635259702250"
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
      "da",
      "3010c6bf8bf73648fc69608bd41761631b53800ec28b75aa22d7be6406c74eed0b13437cf75dd28e4eeba4f44d7277fe9d72f7f8c989ed95912c62f7aa78a8c11ddf14805f9b600dbed6e8e95559e381050c901744deee1ec4e4d77eb2fff2ad0e0bd4db458187f8fa9a082f7e40c9597462b9022d3d8bbe9f98e125509bb0ba2e4dd66601c363d51437e97abefc44796965932fb749124f93193b079746c991672dff8ab6bb73c076f67e0d393830029a592a67772070deace9795969e8795b3b019eb5707b50385b57dc59dba34a6f38ea0dc6a37018be9bf487c3b04fa0b682a3b286d8ed86e6636891ebb5fd495bb2c18808d7c6b471de3e0f5457b2dda409e7cb747cd50ef837c085b0b5c1ac13cc95f3f8a8de1ff049857f49cd5f09d25529dd05156024b82e4a551997d281f79da4f519afaa0b365dad9297aa18e9ac92dde04175001a0f17e063b28aff272d19ec59ab0f713a7b417824db5c9074be986dd27871d370774f46981e11fc8db3e42a0f8da106fdabb7e164dc7ff4d87bdbf88ebe13a1ab216082d3aff259218b72ae3d9c7f03ff86cb6688030000",
    ],
    [
      "ETag",
      "Zjqc7zk7kJYu5gtlUMgtvA==",
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
      "Tue, 26 Oct 2021 14:48:46 GMT",
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
          "SELECT `first_name`, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `first_name`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
                { value: "another@example.com" },
                { value: "acotesford3@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-24-1635259702250",
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
      "54",
      "6b4fdb3014fd2b91f765d3fa4c49d35642502063d54acad214c4a6a9759c9bcc90c6c576d82ad4ffbe1b87021d02a4484d7cceb9e7bedc7b72c3f3980c48c4d3db02e4fac3b588488d80a6299e3a453767a747b213e5dd4bea7ffbfc63d20cd3fd7d64f052a5e87295415d8942325083d9b4914a51aca814a28e81eaf65ebddded38b6d3775bb6edb450a7204bc63cbf41f56fad576ad06c6ebd1ba910690674c5558389e5e379f3ce6eaea4b806a65573d7b2892eaaf9b6e9412618d55ce4fbb329265028907358529e610a4fca383adc0ddde074d948917cc71950c64491eb322d0cc1449ef0b490262a19dc1393e6b31732f5c6de71682d122e959ee774098b9ab530ae0b8b2a6b3e5fdd585f82c999b5c0ca129e815a58975fbdc0b31e6923df9af9be370dad8f079facd360323bb78eaeb6706d2738261583d23c37298534caa04ce7a16ba397b32a055453051538775b5ddaeeb5fa5112b92ce9759c28694114f522d7a19da8c5fa7bb017474051a7cbe846457391c70eb39338eef569cf61ee9eed24b1db4da0edc6bdb8c56cd6899d6e42994b3635f247720d275cad84e255ebc865300abd7918ccfce361e89932125a64faa44aae2ce2799e1a8b44d21b756d4a940b742ae730f2432f181e87a30baf1afd1852cad6d35b1c7e423305c8a6123ba8419e89189b46ce27d351389af8c3312acc3ccfb70c45063fef9f04e17a65baaccd2f1906c1f00a35544abafe0f9b86c1c83f259bcd33bf0b9a15866304e6ab32b8ab0002d7b87c82abd621fc35459af5dbd49e18b8981adaafc2381ffd1be4eb3813d8d044c8b8b3cbf9b5c1a746f036557590ef332fb822d551000948c8d9fb1b866403bcfba7b0bda1c8c53b8a364ae337ee3353a5099350ed355f96c96cd576d7e97588214bfd0273dbfded00cb1865445842ae1f2aaa6ea899480915ea918420aea35fcdeb1f9fae8fc921050000",
    ],
    [
      "ETag",
      "5u6ncGBr3bn6WaNK+ZO/Tg==",
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
      "Tue, 26 Oct 2021 14:48:46 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-24-1635259702250"
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
      "0000000002ff8d915f6bc23014c5bf4bf6b876549dfb2308531115c46955f63044627adba5b6bd5d92ba39f1bbef260e913d8cbda43937bf03e7dc1ed85616116bb18d4cde2b50fbab04cccc5e42d05566347d4a2c34308f81e10991bb97def37511c1c3702abfaa4114a05aa4b3769b082dde20e7ac7560b1842cd2acf57a6005cf816cb154daac9df098d99776365f84a3c980748e91d593e578dce98efbece89d7deb75b9fd8f6375f4588a9b1062505008b0294a85290833b20535cfcb0c7c8d9512a09983dd43a2b02ab942f469e2d76ffdda5da3596f3ede07f57a33203043c18dc482d8e59ca231838667217e503fd62040b92b558dddb9a3715f49702dac8014d40ea50e9ee0d3a5b81198bbc497961e1732bb7009e0066a7f5a3a3937fc6ce0020de81855d4f8ed5afd84eeee89982aa40d68b0e583d3227a6869434b33aa028f094e7f7228cd491fbf01ca9067df26020000",
    ],
    [
      "ETag",
      "vWCO+nde8HPizuGd0orTjQ==",
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
      "Tue, 26 Oct 2021 14:48:46 GMT",
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
      "c9",
      "72",
      "82",
      "30",
      "00",
      "80e177c9591cb652e80d5059a4c5565a09170630c832269145483a7df7327d8dfa3dc17ff9bf415614a8efd381b4088317c032d95817eb3dd5addde5d292bb909ce1206f3087e8edc024fd46d1e816ef5e37160caa9b63d6e49e25700ca7e8c33990807f926b3bb9b5ef0f8a28c8f93c98783209b535471494b43f444a2ff9bac65cfbd46637d450dfad12fdb95415ee954d5519b0e43c883b8bc7bea0c6ec2ce308fa4ebb37d98638390e0b6a2f395d148ae45ec134d9dee3af1c8fe6c8c6f27842f375305e9d38d16a591ca550ca77dbc6ae0213f7aa3eaf1f1efe2fb00268a67587fab45e6e579e0c6305fed64f0746d1f2bf85b20e75e0e7174ff87d8f19040000",
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
      "Tue, 26 Oct 2021 14:48:47 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
            parameterValue: { value: "profiles" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-25-1635259702250",
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
      "4010fd15b47d8d6d82f155b21acb210dad8d53c089aaaa42cb32904d30ebb04b2a37f2bf777689d344919a27333be7cc3973f113b9e75546a624e5c54303f5fed39d48c90901450b7ccde37db11eda7fae263e9b7ffd769bf9f5252d66334470cd9274bb2ba12345533390d34dd42d6ad1ec682d44070b759c41e774d81f3883c9c8769c818d3c0965bee4d53db26f95dac969af77d4ee16421425d01d975d26b62fefbd47a7b7abc51d30257b6f257ba8227bff17fd5c0a461517d56c13a18146429dc096f2122dfc6366e9d9dbd25d4eb7dd02c18f9c01654c3495d2b6b0041355ce8ba63655c9f489189baf3e48e42dbd456c315136db2aa9e8164eac8c2a9aa8fd0eac8b70bdb2fce0621daee6b1bf0e926871e9ade6ddc57ab95905917573e9859ea5685a82e15a33ebcc440106a89f8154bc32eab17ed6cacf03f2dfaf4513505a429b4c46f6909e8eed499aa723968ffb8334b7214dc7e96840fba9cd262eb8590a147946d4b06825aa34875166f7f3c401e626ee04c6497aea60c83076b361ee8e801c4ec8ef9a2b38e77227246f27446e423ff69238dc048b79ec991672da94eabc35a61b78ed51618308fa4f4f079de50295f4b8fd20f6c2f922f6afbd76c34b2828db470fb8e39c9612104d6b1c9e827a25321c1809e62bef1cc1666357c7a424d39f4f44cf5cbb7835f2177a8c0bd47695f925511cfac11763e788b8a66563208fed876e23e7a5367df88540bcd1b608f9bef1c21fa47d0a21871a2af6f132116c121ffed58e778f58bc7c94910a633c1d26b508aba13d216eba3db29d91e38c8901d7ea5dae3f708f43d3357445d842a59e3b6aef1e1b6dc51af902c2246e3f30c33afc0504be50f977040000",
    ],
    [
      "ETag",
      "fTygO60zP9IcAJKhdIrHag==",
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
      "Tue, 26 Oct 2021 14:48:47 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-25-1635259702250"
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
      "da",
      "30",
      "10",
      "86",
      "ff",
      "8b",
      "f73548101ad822f5036c6c630ad0422a214d5564ec4b6ae6f832dba14288ffbe4bdad16a9d947e49eececf2977afdf9cd82f65248bd94e15bf6bb0c70f05f8db265883abb577f4aad038600103cf0b22f7db500c178f06c73f060fdbed761f8d76beb8be26c2890728398b4f2c57a0a563f1cf1333bc046a13a8ebd2646d16307fac9ae2265dcf97df282f5136f9f22e4926d364c6cec1a55172cfb3967f47dbfd39607bdcad21070b4640334b65710fc2cf9b351d2f2b0d3d87b515e0580bb70785c5bae216b147955e18f506a36114469fc6fd308cfa046a14dc2b34c4de6d683ee6d173bdc647da920d8644d836a68df3f679a0ba92ed264d385fa6a3ab76c0d70017026be3b34e3057d6f927f5fe82cf2afc4b6afe4e90ae4ae92ea80023c17651aacab894169ceb24d165bcaa2ed874b54adeaa62a44525bbc183ea00b43f5c80afc96af23f69c9602f5a7d99a4b33784f3649b0b92ce17b34d3a59dc34dcfdb311a6470feec622b9ca4163a841ffea63341ef59f3cf6191bdfd177626f6b0898e0f4ab7c579ec539d70ece7f0067b59a9388030000",
    ],
    [
      "ETag",
      "jX2c3Mwno7J1hXXXj56btg==",
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
      "Tue, 26 Oct 2021 14:48:47 GMT",
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
          "SELECT `first_name`, `last_name`, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `first_name`, `last_name`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
                { value: "another@example.com" },
                { value: "acotesford3@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-26-1635259702250",
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
      "85546b6fda3014fd2b91f765537924d0908054b5ac645d2a1a5808add834819338d434c4a9edb0a18affbe1ba7b474555b0909ec73cebde73ecc03baa3598c7a28a4cbfb82f0eda7150b510d118997703bdb18993e5e5d26d7721053ebe7e5e0081ff54f4e80414b95c0eb3c2575c10a1e11d19b4e1a4bce8a1c73c6ea10a8deead48d4edb6c995d4b6fb54c1d7482a4c9906677a0be953217bd66739fbbb1646c99129c53d188d8fae9beb9693573ce562492a2f9326513b288e6fb494f531661495976329d808142103e276b4c53b0f0ac8cc3b397a11b14af1b4b206f68447014b12293a52d0811b12ca1cb82aba8a8f78094cd831f68e20c9df3405b24940b39cff09a2c6ada22c507076561a161a1cde7f99df6cd1f5d690b2833a129110bede6bbe33bda13cdf5b4a9e7399340fb7cfa45bbf047d3b1f675b6876b6f6702bb31119266ca6c80c39494461ffbe9be9e6229c0120b5281734bef60c3d6bb61125a5162b7cd30d14918daa165e276a847dd63721c8704834e96d1950a672cb3e3d86a61dd0a4dc3ecd8c08eb11176cd6e62256dcb4e6cb86cdb5664a05d0dfde1549201153913b46a2abaf1ddc09907fed43bef078e2a23c1452a0795b9b288439f128a04d23b75ed4a9432c8544ec8f502c7ef9f07eeb5532dc5902c71b49ddcc35a24381504d898430725e1572c86a6a1f168e206eec8eb0f41a1263dde3304eafd7a781604db5c7559aa6fd4f7fdfe0c349873bcfd0f9b04beeb5da0ddee20df354e0bc5510275aa126c2a009115ac25a3423f237f55916a3177b56706acac24c69b30cc47de12fe361e316868c278dc7ec9f9bd834f0dc13babea403fa68e3f43d5954f12c249167dbc614056c0877f17fbb70b5c78bd90464838c33e47a24c127152ed355d9766f6ea96ad77da4891b97c8519dde3fd00cb186544b226997caca87abb6a22255488271280b08e5e35af7fce30b29b3b050000",
    ],
    [
      "ETag",
      "Yv1n0PjJfVtDdi7ZJD+a+A==",
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
      "Tue, 26 Oct 2021 14:48:48 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-26-1635259702250"
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
      "52",
      "61",
      "4f",
      "c2",
      "30",
      "10",
      "fd",
      "2f",
      "f5",
      "eb",
      "66606418494c04420083a843228921a474b759d876b3ed4024fc77af4327f183317e69efbdbe77b97be99ead6516b2165bcaf8b500b53b8bc13cd822005d2446d39563a681390c0c8f49d9c0717f00dbd9dd7b56bf9d3d353bfeda64dbab2b5268f1022967ad3d8b2424a166ade73dcb780a648ba4d266510287995d6eb9c963301cf709a7185a3c9e8e46edcea8c70e4ee54bf8bf6c8b45befe8b637e70d80a970144a020136087cf15ae4098a1cd45f3344fc0d55828019a95e2f2215658e45c21bac4b85ed3ad371bbee75f5ed43ccfaf913041c18dc48cb4d3098dc60c1a9e04b8d5364412a8b2a484a2f2dc10dd5312ca2d2cb801b541a92b0cab2351bb86b772aa738169b9c1698b2e173239e9d2e3e61b082054ffd5df4eb9e195a18b0674842aac182ebea8c6cf3ef3cf1d3b3b52dc2ba4c034d8ac6ac7dcba68d5344ecba8021c2638fd978134477cf800f4f5ca928c020000",
    ],
    [
      "ETag",
      "3oNGHewXOzn1MXW6B5ktnw==",
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
      "Tue, 26 Oct 2021 14:48:48 GMT",
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
      "08000000000002ffedd3db9243300000d07fc9736b8cea621fa36a08bdd00b5e32d93445b48a60d1d97fdfcefec6f6fcc3790242291302b78f8295e0138c4431242aa14a87eb941f53a18c01d24e322cdd3aafe73177f5958dce17d95e4c6450c9ae2876519b1c965da4c1100625f5f8477abc9b1dda98feb6bcd528b493ec7cfda2e543adb1d9a7eb3c2776bfc57b2186ccd9583d9d0817b15c391db42e2b1a2a76d6a62e2a1ab157c3be14b16219b1eca997d10e0cff1a25fc1e6018f882c7cafc903627c7ac272794a96ef896f3ddb7a789a2506baccef335371b6ef8e1928a8f5785496f6fff179801365479c304ce5fdb174bc39881bffab81d2bf6fa0f196958037e7e0160ca5fa919040000",
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
      "Tue, 26 Oct 2021 14:48:48 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
            parameterValue: { value: "profiles" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-27-1635259702250",
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
      "85535d6f9b3014fd2bc87b5c13080981448ad628a56ba48474405a6dd3848c31cc2de0149bb45595ffbe6bd374ad2ab54fd8bee7dc73ee074fe896d5199aa29415772d6d1ebfdcf0149d202a7101af95d7b879b4ba0cf3eabef86a39dbbb5f0ffbf96c0608a6580257bb92f6046f1b42c5741bf58b86b73bdc70de83443ddbed0dc643c77626ae65db8e053c41cb7cc5ea5b60ff957227a6a679d4ee179c1725c53b26fa84572fefe6de36770dbfa1440af3ada4092ac2fc58f45bc909968cd7b36d04065a419b8456989560e13f334b4fdfa6ee335cf50b00ef19a19810ded652d9821484d7392bda466745d327a46dbe3aa0c85ff98bd820bc6cab3aa971454f8c0c4b9cc8c71d35cec3cdda5806e79b703d8f979b20891617fe7ade5f6c56db751019d7177ee81b12a725d55c63669cea5b0017d0cfa890acd6eab17a56cacf0d5abe1f8b2280b4a05d3071ad311e78d624cd5397e4ded049738ba6a997ba0e1ea616998ce8284b29069e16d52c5cf37a98799963b95932f2dc3419b9f624c1dec44dd2a135709da1830763071d4ed07dc3243d6362c705eb3a84aec365ec2771b80d16f3d8d725e4b82de559674c15f0daa3840201f4414d0715651c9454bb9741ec87f345bcbcf2bb09af6881c963740733ce712928a07103cd93b459f30c1a8682f9da3f03b09ed8e53128d0f4f713523d572e5eb5fc851ec300955da9bf288ac365f05ddb3922ae70d96ac8be3ba83272562ad3873f00841ded92a01f5b3ffc89baa790e6b4a135f97c9800d6814f7fb5e3de0316361f6484843bac0e114a8434b45b21a6ab3db26dcf1d7a48831bf92ee68dc7c7a6a91c2a23ad682d9f2beaf61e0aedc45af10282204c3fd0cd3afc033f0ef03677040000",
    ],
    [
      "ETag",
      "m8r7fSLPRfmwg+05UqZxvA==",
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
      "Tue, 26 Oct 2021 14:48:48 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-27-1635259702250"
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
      "51",
      "6fda3010c7bf8bf71aa4000546a43e842ddb905228101ea6a98adcf892b9737c99ed5021c477df39edd8d4564a5f92bbf3ef94bbbfff39b15f520b16b17b59fd6ec11c3f54e0363ed8826d95b3f46a505b600103c72b22f5ec7bbda99270b51fcf452c93f55c3f1e36d7d744d8e227d49c4527564a50c2b2e8c789695e03b515a8da5ae75d1630776c7c71976d97abaf94d7287cbedaa769bc4813760e2e8d823b9e77fc3bdaeece017bc0fb2d94604017e067690c3e40e1967e4dcbeb46c1c0626b0ab0ac83bb83ca60db708338a0ca60341b0ca7e3c968329f85a3d124245061c19d444dec7e47f331878eab2d3ed2966c3826c274316d5c76cf03d5a5e836f1e172954dafba01ff07785160ab5dde0b96d258f7a4de5ff0598597a4e2ef04e9aaa4ea832ad0024c1f259b9c0b61c0da5e126dce9be6822dd6ebf4b52a5a1894a21f3cc81e40b9c305f892aee3b7a42583fdd3ea739c25af08ebc83617245bde24bb2cbeb9f5dcddb311164707f6d620b9ca8237d430bcfa38994dc3278f7d42ef3bfa4ee44c0b012b38fd2adfa46351c99585f31ff292a3b788030000",
    ],
    [
      "ETag",
      "n7YmQgE0NU39dAiEO9nwvQ==",
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
      "Tue, 26 Oct 2021 14:48:49 GMT",
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
          "SELECT `last_name`, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `last_name`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
                { value: "another@example.com" },
                { value: "acotesford3@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-28-1635259702250",
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
      "00000002ff85546b4fe24014fd2bcdec97dd2c8f52281412a3acd6952c166d8bc66c36306d6f71b0747066ea4a0cff7d6fa7e2638d9a34a19d73ce3df7353c901b9627644022b6b82d406cbe2c79446a04145de0a9b91cde5bc1fdf145669da4e7e3efbf96e1aa77beb7870c56aa245dad33a84b5e8818e4601a341682176b2a38af63a0bae5d45bddb66dd9fd9e6959b6893a09593a66f90daaaf955acb41b3b9f36e2c385f6440d74c3662be7a3a6fde59cdb5e04b88956cbeb66ca28b6c7e6cba9ff1982ac6f3bd6980091412c40c56946598c2b332890e5e876e30ba6a2c907cc762a071cc8b5c9569618898e7295b144247258307a2d37cf1420277ec1e86c63ca352cd72ba8279cd986bd3b941a5319bad6f8c637f726accb1b0946520e7c6e589ebbbc6136de41953cf7383d0f8baffcdf8e94fa667c68fab1d5c7b191b534a402a96eb84421a655026f3d8b3d1db499502aaa8840a9cf5cc2e6d39663f4aa35e9c3a6d3b4a4d882227ead9b41d9971bf039d24028a3a5546d72a9af33ce980159bd48cd2c4e9b55a1d0765a96375bb4e3701cb6ab56cd3b1bbdd36d9d6c85fc1141c31b9e692558d2397fe287467a13ff50e87a1abcb486991a9a32ab9b28897792a2c12491fd4b52d51c6d1a99cc2c80b5d7f78188e2edc6af06358d07813dce2e8539a49403615d84105e29427d83472360946e168e20dc7a8d0d33cdb312419fc7e7816849bb5eeb2d2bf64e8fbc32bd45021e8e63f2c08fd91f7936cb72ffc2e6856688e16e8afcae0ae02082c71f53893e601dceb22f5f26d6bcf0c5c4b05ad77619c8fba06f13e1e736c68ca45d27ecdf9b3c5a746f02e557590f3a9eb5f91eac8871404e4f1e71b86640d7cfa97b0bb9fc8c51b8a3652e137ee732c4b935840b5d76c5526b3535b7dbb6d114d16ea0dd6edd8bb019631ca88b0825c3d5654dd4f3d91122ae41309415c47af9ad73f27dd1a871f050000",
    ],
    [
      "ETag",
      "0jAx2SxFVl2HfQL+KjTm7Q==",
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
      "Tue, 26 Oct 2021 14:48:49 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-28-1635259702250"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d91414fc2401085ffcb786d15da20da844440444c43b4c8c918b26ca7b5d076eaee1645c27f77b628311e8c9776deebf79237d31dacb33286009659fa5aa3da9ea4681eec10a1ae73a3f95551a9111c40235226af6fba55f8e17b457896ccc4b85d87fd42f47b3d26b47cc14240b08324c33cd6103ceda01405722c17da2c9ad901b3adac357b8c26d331eb8262aba7f330ec0fc211ec9d636cb1a8d6ff493cef1d58d132c2041596126d894ad10aa599d8fdb428aa1c5d4db592a8a1819b0fa9a2ba128ac865c7f52edcf6b9dff13a97dd96e7755a0ce62485c9a864763ee36a60c8883ca2375e0f7c065433f2a649f3dcb07d876a43996e16b11a5707a37585ef4d9153494553fa676a240c1e231259b5ffe487645027a4e26348c86fcbff9d7cfe2a3ed83271af88afa0d11ea07538c6902ccd0502a36a74400afe99b79939e8fd275881b7f529020000",
    ],
    [
      "ETag",
      "DF7pLz32mL/fSaG1uLAmaA==",
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
      "Tue, 26 Oct 2021 14:48:49 GMT",
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
      "300000d0bb64ad4c231fa13b329052b0561145d864128c101d2002f269a777afd36bd47787f70d6896f1b6255d7de5157805135d584aa604d24438179b4fd7c748041ec9ef0eaa532e6da4dd70bc6bd9405448f523c295dfefcffe3ea9d32d53a7af332a4b396787cb8abb1f1e9bd436593aeeb04960bd09c5dd34b77c2051797dd14ed8d0e691755b42bd33caf2b886eefd8d1367552c7cc4b43894027a32b7a733cd4ec35804d53c36fc69d01723128cc5014c0b5eaf9797dcb9e6d9813aea76d7e208a7d258a73d637617d2e4fd62f74d9113038e3d0a0be5e9e9ff0233c047291ade12f1d8aeea9635037ff5493749fef88f386d78037e7e014be6657a19040000",
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
      "Tue, 26 Oct 2021 14:48:50 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
            parameterValue: { value: "profiles" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-29-1635259702250",
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
      "da",
      "30",
      "14",
      "fd",
      "2b",
      "91",
      "f75a2004420009ad88861609429704ba699a22db7132b7494c6387a9aaf8efbb764ad7aa52f714dbf79c7bcefdc8337ae0558aa688f0fcb161f5d3977b41d005620ae7f07abdad96c13116d5f2e138e6fbf0fbe456ecf3d90c105cb3242e0f05eb48d1d494c9e92eeae6b5680eb816a203893acea4d31f0d5cc79d78b6e3b836f0242bb235af1e80fd5ba9839cf67a67ed6e2e445e307ce0b24b45f9fade3b3abd432dee1955b2f75eb2072ab2f7b9e8d74250acb8a866bb080c3492d5092b312fc0c23f664a2edfa7ee725c7673001f39659852d1544adb8214545419cf9bda6445d367646cbe39a0c85ffb8bd8a2a268ca2aa970c92eac142b9ca8a703b396e17663ad82e536dccce3d53648a2c58dbf997717dbf56e1344d6dd8d1ffa96c2a460866bcdac4b730be002fa29938a57463dd6cf5af9a541ab8f63d1049096ac0d269e3dc2fdb13d2119f168361eb824b3192163e2b978406c3a19b2614a18069e11352c5c89ca267daf8f094b3297a4c9d0c16e321e0dd26464dbc49b38763a72293a5da03f3557ec8acb8390bced10ba0b57b19fc4e12e58cc63df9490e1a65057ad315dc05b8f0a0a04d027359d74940b50d2ed5e05b11fce17f16aefb7135eb31cd3a7e811669ce1423240e31a9aa758bd1129340c05f38d7f056033b1db7350a2e9cf67a47bae5dbc69f92b3d86016abbca7c511487abe0dad83923f6b8680ce4d81e7419192fb4e9d32f00c28eb649d0b79d1ffe40ed53c83256b38afe7f98003681fffe6ae7bd072c6c3ec8480577581d2ab508ad59bb42dc547b660f6c673042065cab0fb1c1d03b374de7d01959c92af55251bbf750682bd6c857100461",
      "fa8169d6e92f8434ac4677040000",
    ],
    [
      "ETag",
      "GOnFNvTonFkv8iVRX9PoVg==",
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
      "Tue, 26 Oct 2021 14:48:50 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-29-1635259702250"
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
      "4f",
      "db3010c6bf8bf772a9d4ff8c48bc4847d93a8516da5463432832f12598393ecf76cabaaadf7d9700dd0493c29be4eefc3be5eef1931dfb21b56021bb95c5cf0aecf65d01feb20e96e02ae51dbd0c6a072c60e07941646cdee36fbdbe2a06fcfbd7e1b72fc92f7379179d9c10e1b23b28390b772c97a08463e1f58e695e02b565a8aa52a74d1630bf357571952c67f34f949728ea7cbe8ee368124fd93e38340aee79daf06f68bbd907ec1e6f979083059d413d8bb1780f999fd56b3a5e1a051d8795cdc0b1066e0e0a8b95e116b143954effb8d31b0f46fdd1f151b7df1f75095498712f5113bb5ed17ccca3e76a890fb425eb0d88b04d4c1be7cd734375299a4dea70364fc6c366c07f019e6558699fb682b9b4ce3faaf70c3ea9f09254fc8d205d95546d50015a806da3a449b910169c6b25d1a5dc980336592ce2d7aa6861518a7670235b00e53707e02c5e44ff93960cf657abd32899be229c27db1c9064763e5d25d1f945cddd3c1961b2f5e02e2c92ab1cd486ea75871f4647e3eea3c73e62ed3bfa4ee86d0501cb38fd2a9fa56761ce9583fd1f22f73cf688030000",
    ],
    [
      "ETag",
      "Lp+oznUXg3aZW4YJTxpQhA==",
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
      "Tue, 26 Oct 2021 14:48:50 GMT",
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
          "SELECT `ltv`, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `ltv`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
                { value: "another@example.com" },
                { value: "acotesford3@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-30-1635259702250",
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
      "85546b6fda3014fd2b91f765d37824040820552d6bb30e8d42170255354d603b4eea36c4a9edd0a18affbe1ba7f4b1aaad1489c4e79c7beecbdca31b9e456880084f6e0b26b79fae054135c4344ee0f4a79b9d16d9dda220f6e2eb309597b71b52240707c0e0a54ae1759eb2ba1285a44c0de6b3462245916329441d02d55dbbee74dd4eabd3f7ec56ab63834eb1341ef3ec06d4575ae76ad06ceebd1b891049ca70ce55838af5e37973d36ae6525c33aa55f3a565135c54f37dd3c35450acb9c80ee63348a0504c2ed91af31452785246e4e865e806c7eb4602e40da70c532a8a4c976941082ab29827853451d1e01e99349fbda0993ff68f436b95eacdaa66ad8cddcac2ca5a2ef31beb7b303db3565052cc53a656d6c50f3ff0ad47da6862cd27137f165a9f0fbf58a7c1747e6e7dbbdcc3b52a2aa41131a57966920831495999c0439f46afa7530ab0c68a55e0d2b3bbd8e9d97d12138fc63db743629b11d2235e07bbc4a6fd366b478461d0e932ba51e14c647d1747b64368cf71dafd9e6d3b5ee4f5ba2e8e1dbbef75a296d725b84da88376357427b966275ce542f1aa59e8221885fe320ce693e361e89b32625ca4faa44aae2ce2799e1a8a04d23b75ed4a940b702a3b3f9a847e303c0e470bbf1af69825986e67b730ee18a78a011b4bbc669ac9331141d3d0f974360a47d3c9700c0a33c1f33d43a1c1effb2741b8cd4d97b5f945c320185e82064b89b7ff61b330184d4ed16ef7cc6f81d3c2708cc07c55069b0a40ec1ad64d70651fb1bfa648b370bbda1303565133e74d18e6a3af987c1ba7021a1a0b19b92f397f76f0d410dc9faa0ef46bee0797a83a0a58cc24cbe8c71b0664037cf837b0bf93c0855b09364ac337ec3355a50995acda6bbe2e93d9ab5dc7eeb491214bfd0a737aedfd00cb186544b666997ea8a8ba9366222554a8471280b08e936a5eff005320126313050000",
    ],
    [
      "ETag",
      "K3nGunwVub0V+AlrYqvbug==",
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
      "Tue, 26 Oct 2021 14:48:51 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-30-1635259702250"
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
      "7d",
      "91",
      "6d",
      "6b",
      "c2",
      "30",
      "14",
      "85",
      "ff4bf6b52d7db16e0ac254dc2614ddaac260c888e96d576d7b6b92fa82f8df775b871b63ec4b9273f31c72cfcd896dd222625db64a936d05f27893807ea90f21a82ad38ab6120b05cc60a07942e4f4908c6239745e6db7ddf146db691cf87adfeb11a1c407e49c754f2c4e218b14ebbe9d58c173205ba67744e863598b8760da9f93cc31aae5641104fd41306267e3cabfbf979b6fc36c1e8e278f7f39966783ad7115420c120a01f5eba5c435083dae83299e9719980a2b2940b1066e2e128955c925a24915d3b34da7edf9aedfb9b55dd7b709cc50709d6241ec6246ad318d9a6721ee2917f30890cd9122c6cdbaa332f92dc76d72d412d62077982afb1e0e4d1f96c0bce9f9a7a9d3b2bcf6d523806b70fe35b4ee3a967d3570811a548c32f27ebb965f4d0f8e443c4ba40928a8c3db97410cb1a6350d4dcb0a0c2638fde053aa2ffafc09a671dbfa1e020000",
    ],
    [
      "ETag",
      "OxgEfrC1X02693EqOfL5tw==",
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
      "Tue, 26 Oct 2021 14:48:51 GMT",
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
      "000000000002ffedd35d7243400000e0bbec7364a810fac61a212111a5b15e76fc6c5811c1d2904eefde4cafd17c77f8be41926584313cdc2ea401ef604eded465b6dcb58a6e16741d6917bd283036eb1bdc941e341f154addd8196b29083591c2989f7732a21fcc3896e707166aecac427b88c7fbb50c538d1d94b31ca963b31ec46ecf426b3aa505fbf479c9d96bab4847d0ce8f47097d5dadc69f5cce18f94e945bcb57309ceef966c5a3c86eabca8b4f0e21423ba7a9411e73b0f5649874863de300b999b71d04ca71870a55a477a2c22f833b129bbc6b34b316222b86f4846b4e29b8e5cbcbff0516804c2ded09c3f4b95d94547501feeae3616ec9f3bf4e929ef4e0e717a2c99d3f19040000",
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
      "Tue, 26 Oct 2021 14:48:51 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
            parameterValue: { value: "profiles" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-31-1635259702250",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85536b4fdb3014fd2b91f795b669d2d287548daa0d90a94d214d61d334458e73130c695c62078650fffbae1dca4048f029b6ef39f79cfbc833b9e3654ac624e1f97d0dd5d3b75b919023028ae6f8bae4178b1f7f4fcff8fcd2be9f899b8d7f9dfe7c9c4c10c1354bd2edae80961475c5408e37eb765e897a472b215a98a8e5765bdd63b7eff44703db71fa36f22414d9829777c8be516a27c79dce41bb9d0b911740775cb699d8bebe771e9cceae12b7c094ecbc97eca08aec7c2efabd108c2a2ecac9668d066a09550c5bca0bb4f09f992627ef53b739ddb673043f7006943151974adbc2144c9419cfebca6425e367626cbe3990b5b7f06691c544516fcbb8a45b38b252aa68ac9e76609d86aba5e507a7ab70398dfc5510af67e7de72da9ead169b65b0b6aecfbdd0b3144d0a305c6b629d985b8017d44f412a5e1af5483f6be59706f91fc7a209282da109c603fb987687f628c99201cb866e3fc96c48926132e85337b1d9a807bd34018a3c236a58b4142585d485d419c62ecbdcb8d767764c5318c5cec8edb3de900e69724cf647e4b1e20ae65cee84e44d87c875e8475e1c859b60368d3c534246eb42cd1b63ba80b71e151688a04f6adaeb2817a8a4dbed0791174e67917fe535135e404ed9d3fa1e679cd14202a26985cd53502d458a0d23c174e9cd116c267671084a32fefd4c74cfb58b372d7fa54738406d57992f5947a11f9c193b07c4152d6a0379680eba8c8c17daf4fe0f0271479b24e472e385bf48f31442061594eceb6122d804befcd50e7b8f58dc7c94910aefb83a4c6a115641b342dc547b60bbdd81e31003aed487d8f0d839344de7d019610ba57aa9a8d97b2cb411abe52b088338fdc0346bff0f09fc33db77040000",
    ],
    [
      "ETag",
      "MiPLJxFGiDQ0qCohUIWdXw==",
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
      "Tue, 26 Oct 2021 14:48:51 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-31-1635259702250"
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
      "51",
      "4f",
      "db",
      "30",
      "10",
      "c7",
      "bf",
      "8b",
      "79",
      "5c2a352d2d5b241e5ae8a052684b1b78604291892fc1ade3cb6ca7a8aafadd770eaca03129bc2477e7df29777fffb3671ba9058bd8932c7ed760762705b85b1f2cc1d6ca597a55a82db08081e30591faf97ab3598cc3bcbcdcadb5ba7f80d9b78b97f373226cf60c2567d19ee51294b02cfab5679a97406d19aabad4699305cced2a5f5c25cbe9ec8af21285cf6777713c1ac71376088e8d823b9e36fc17da1e0f015be3d3127230a033f0b35406d790b9a95fd3f2b252d0b1589b0c2c6be0e6a0305857dc2076a8d2e9879d70d81ff4063fcebabddea04ba0c28c3b899ad8bb15cdc71c3aae96f8425bb2b04f846962da386f9e5baa4bd16ce2c3e92c199e36037e04789661ad5dda0ae6d258f7aade5ff04d857f49c5bf08d25549d50615a00598364a562917c280b5ad24da9457d5111bcfe7f16755b43028453bb8952d8072db23f0339e8ffe272d19ec5dabcb5132f9445847b63922c9f466b24a46370bcf3dbe1961bc73601706c95516bca1c2eee9f7c1d9b0fbeab10bf4bea3ef44ced410b08cd3af722d1d8b72ae2c1cfe00aab84d8d88030000",
    ],
    [
      "ETag",
      "nhHkkPB1fmDyjnlVZeN+Cw==",
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
      "Tue, 26 Oct 2021 14:48:52 GMT",
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
          "SELECT `ltv`, `last_name`, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `ltv`, `last_name`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
                { value: "another@example.com" },
                { value: "acotesford3@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-32-1635259702250",
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
      "00000002ff8554694fdb4010fd2bd6f64babe6f091c38984200597ba0a0e380e085555b276c661c1f186dd756884f2df3b5e138e5240b264efce7bf3e6f43db961f99cf449cc16b70588cda76b1e931a014517781bfaade0e7d713b7109cde397767a6bd62f26c6f0f11ac6449ba5c655097bc1009c8fe64dc58085eaca8e0bc8e8eea8e5db73a4edb6ef7baa66db74de449c8d221cb6f907da5d44af69bcd9d7663c1f922038a1a8d842f1fef9b6bbbb912fc1a12259b2f259ba8229bef8bee673ca18af17c6f32c6000a09620a4bca320ce189398f0f5eba6e30ba6c2c10bc6609d024e145aecab0d045c2f3942d0aa1bd92fe3dd1613efb20636fe81d46c62c53eb590d5f54aa694e97501eb4f6cca0d2984e5737c6f7707462cc30bf94652067c6c50f2ff48c47981f189320f0c691f179ff8b711c8e26a7c6b7cb9db9f61f090c700e52b15c8717d1388332b4870afaaffb5612a8a2122ae3b46b76a8e59abd388dbb49ea3aed3835218eddb8dba64e6c26bd16b4e63150e4a9d2bb66d19ce74ea7975a166db5cc79afd3b52dd385c48a5bbd8edda3ad2e4d53d7eecd9dd425db1ab9134cc111932b2e5955467211fa91378dc2497038883c9d464a8b4c1d55c195493c8f536192087a27af6d69651c95ca9ef841e48583c3c83ff7aa3118c282269bf12d0e424a330988a6022ba8409cf039168d9c8ec67ee48f82c11019bab7a73b8424fd5ff74f8468b3d25556fa4d066138b8440e15826efeb18da3d00f8ec976fb4cef9c6685c668823e5502ebca40e01a079133691ec01f9da41ec56ded098143aac07ad38cfd515720deb6271c0b9a7231775e627e6ff1a911dcac2a0f7236f1c24b525d859082803cf978c210ac0d1ffe2076db8a58dc5794910acf38cf892c451201d55cb36519cc8eedd81dd7211a2cd42b9b6b75770d2c7d941e6109b97ac8a8da56dd91d254c84750f90fc4f5abfaf5175016d9f02d050000",
    ],
    [
      "ETag",
      "RI4NJ+M8uroaw3wQ02pisQ==",
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
      "Tue, 26 Oct 2021 14:48:52 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-32-1635259702250"
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
      "00000002ff8d92414fc2401085ffcb7a052c2da0909008888a3680050e680859b6d35a683b75778b10c27f775ab41a0fc44b77def47b9b99973db04d10bbacc55681ff9e82dc5ff8a09fb3c20195865ad19160ac80951868ee13399e83bd735ee64fe232dccd2723b3b379baf5db6d2294788388b3d681790184ae62add7038b7904640bf59608bd4f3271678f3a539211ba991cce6cbbd3b5fbec58fae1b9d2cbbc2e5c93a93318de9fb72d97c9e63f8ec5b1c4d6b872c00309b1806ce844e21a841e6479281e25219415a6528062399cfff025a609978865ea942db35c6d5875b3debc324cb36e1018a2e03ac098d8d98446631a350f1dfca038984580cc4b4ac6cbbf5b6a93bf5235f33d32f908728b812a34ac4f0de30676f95c158151bec3ef4b9ab58ad5283c7daea110024855cfba6bd7cd8a51187aa8417928dda2c3c577cbfa7bcfe26bc7ee9e88b1440a4c41969571caad87194de3b4b44ca1c404a777f210e8933e7e02dd96de2784020000",
    ],
    [
      "ETag",
      "PYeLxRZYKc/lxYSO2AkKDg==",
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
      "Tue, 26 Oct 2021 14:48:53 GMT",
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
      "000002ffedd34b7282300000d0bb642d0e15f97507522c653023848add641002828624462ae0f4ee757a8dfaeef0ee202f0a2225beb213e9c02b18f3853d2fe621b75cbf6ed598b2a3cf7974c48d1baec2eabc1dc3203be709e5fe6678df5a4a50c7f46d7df35e862597135e18e894b1653a78c64142b68131d43532d58154ed34b2e81536fdd4d7e55ed94626721358b531e2c2d9d1a5382026349b96bae529195f095494ba397de5c5b88b28e442dbac17927baa690b2b09db5ee96f65ca7ae4a95989519d265e47a0fc3047a24dd52df9668673d29ce37adf7e363eeebaa016f3a7a7ff0bcc001978732112378fed9a6edb33f0571f5f474e1eff5d925fc805fcfc02656a325719040000",
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
      "Tue, 26 Oct 2021 14:48:53 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
            parameterValue: { value: "profiles" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-33-1635259702250",
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
      "da3014fd2b91f75a2010d200125a190d2b12843509eda6698a1c7393b94b621a3b9d50c57fdfb553ba5695daa7d8bee7dc73ee471ec91f5eedc884a43cbf6fa03e7cba13293923a0688eaf87eabb1705e54d305b7c09c39a8daea285bc9e4e11c1354bd2725f40478aa6662027dba89bd7a2d9d35a880e26ea384ea77feeb80377ecd983816b234f4291ad78f507d9bf95dacb49af77d2eee642e405d03d975d26cae7f7dec3a0b7afc51d30257baf257ba8227bef8b7e2e04a38a8b6aba8dd04023a14ea0a4bc400bff99bbf4e275ea2ea7653747f003674019134da5b42d4cc14495f1bca94d56327924c6e68b0389fc953f8f2d268aa6ac928a967066eda8a2893aecc15a849bb5b50c169b703d8b979b2089e657fe7ad69d6f56db751059b7577ee85b8aa60518ae35b52ecc2dc00beaef402a5e19f5583f6be5a7062ddf8e4513505a421b4c3cfb9cf647f638cd528f6523c74d331bd274947a2e75529b8d8730dca5409167440d8b56a282314bb3d178947843364c86236f9c50188c93ac0f0e73061e3899438e67e46fcd155c72b91792b71d22b7e132f69338dc06f359ec9b1232da14eab235a60b78e9516181087aa7a6a38e72814abaddcb20f6c3d93c5edef8ed845790537688ee71c6192d24209ad6d83c05f55aecb0612498adfd4b049b897d3b052599fc7c24bae7dac58b963fd3631ca0b6abcc974471b80cbe1a3b27c40d2d1a0379680fba8c8c17daf4f117027147db24e47aeb873f48fb1442063554ece36122d8043efcd54e7b8f58dc7c94910aefb83a4c6a115643bb42dc547b623bced0768901d7ea4dccedf74f4dd339744628a1524f15b57b8f85b6628d7c066110a71f98661dff013ca8456f77040000",
    ],
    [
      "ETag",
      "ynX7SNmVNAFBRRrc8HSFsQ==",
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
      "Tue, 26 Oct 2021 14:48:53 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-33-1635259702250"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d936f6f9b3010c6bf8bfb96a8f9d3a41b525f9035ddb291a42344da3455c8b50fe6ce70d436995094efbe33edb2699d44dfc0ddf977e2eef1c381fd50956421bb57c56303a63d2bc07df64102b6d1ced2abc6ca020b18385e10f9d88edb68fb75b443fb71f529c72ffbf3a489aeae88b0e23b949c8507962bd0d2b2f0db8155bc046a13a89bb2caba2c60aead7d719b26cbf57bca4b943e5fefe2389ac70b760c4e8d923b9e75fc2bdaee8e017bc0fb0472305009f0b3d4061f40b8a55fd3f2b2d630b0d818019675707750186c6a6e100754194c2683d16c321d4fdf5e0ec7e3e990408d823b8515b1bb2dcdc71c3aae13fc495bb2d18408d3c5b471de3df75457b2dbc487cb753abbe806fc1be0426053b9ac17cc95b1ee49bddfe0b30aff929abf12a4ab52ba0f2aa09260fa2855675c4a03d6f69268335ed7276cbed9c42f55a9a44125fbc1bdea01b4db9f809b7813fd4f5a32d81fadaea374f182b08e6c7342d2e56ab14da3d5ade7ee9e8d306f1dd85b83e42a0bde50a3e1c59be9e56cf8e4b177e87d47df099d69206082d3aff2413916e65c5b38fe0282ff38e288030000",
    ],
    [
      "ETag",
      "qy2yASY1UosJMKfoXv/RuA==",
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
      "Tue, 26 Oct 2021 14:48:54 GMT",
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
          "SELECT `ios_app`, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `ios_app`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
                { value: "another@example.com" },
                { value: "acotesford3@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-34-1635259702250",
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
      "00000002ff85546b4fe24014fd2bcdec97dd04a1b4541e895156bb4a82a0a568c86603d3e1b68e964e9d99ba12c37fdfdba988ae519326b473ceb9e7be862772c7b325e9918827f705c8f5b75b11911a014d133cbd8d8af5e975d296f6597339be7cf42ef2f62c393840062f558aaef214f694282403d59b4eea8914454ea5107b1868cf6ded35f75dcff1ba6ddb713c1b750ad278c8b33b54df689dab5ea3b1f5ae27422429d09cab3a13ab97f3c683d3c8a5b805a655e3ad65035d54e373d3c35430aab9c80ea6134ca05020e7b0a23cc51476ca6574f436749dd3553d41f2036740191345a6cbb430041359cc93429aa8a4f7444c9aaf5ec8c41ffac7a1b5e042cd699e2f6ad6c2582e2caaacf93cbfb37e05e3736b8165c53c05b5b0aecffcc0b75e688391351d8dfc49687d3ffc619d06e3e985f573b6856bbbc898ce1294e6994926a4510a6522cffd1abc9f5229a09a2aa8c079dbdea7cd8edd8de2a8cde28eeb45b10d51d489da1e75239b755bd05a464051a7cbe846453391b9fb31380e63fb51abe52c3d605edbf3ec66b7c3a26697b62176ec8e8321c9a646fe4aaee184ab5c285e358d5c0783d09f87c17474dc0f7d53464c8b549f54c99545bcce53639148faa4ae4d8972814ee50406a3d00ffac7e1e0caaf863e8484b2f5e41ec71ed35401b2a9a42bd020cfc5129b462ec6934138188ffa435498495e6c198af47e3fed04e13a375dd6e697f483a03f430d9592aeffc3266130189d92cde695df154d0bc33102f355193c5400815b5c3bc1957d048fa648b3789bda8e812ba9a1f9218cf3d137203fc699c086c6422eddb79c3f1b7c6a04ef515507b99cfac18c544701c42021635f6f18920df0e5dfc1f66e22176f27da288ddfb8cf4c95264c42b5d77c5526b355bbad66b7490c59ea7798eb7adb019631ca88b0824c3f5754dd4d3391122ad40b09415cc75135af7f032ca4bc1b050000",
    ],
    [
      "ETag",
      "jbuyGWg7r0H1dOQx5Pp7Yg==",
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
      "Tue, 26 Oct 2021 14:48:54 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-34-1635259702250"
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
      "02ff7d91514fc2301485ff4b7d74d3c10495844430a818041d12490c21a5bb9b1bdbee683b6421fc776f871135c697b53dfd4e7b4eb765cb28f3598b2da27055802c8f42d04f66e2812a12ad68c83153c02c069a8744c27198b8cbf8e665fa305d5fdc6f9ae3d569d969b78950e20d52ce5a5b164490f88ab55eb72ce329902d4235e7794e942e73237447a341af33242145df08c3c960d0e90e7a6c677db9e6f37c79b08c9fbdfef0f62fc76c67b118171e042021136032e4126310ba6fea299ee609d80a0b2940b10aae36428945ce25a24d8aed9ed9b5a6dba8372ecf9d7abde11098a0e03ac28cd8c998a2318d9a271ebe533be61220ab29150daaef9a642d0ba85a9805c420d71829e70a36558a13816995f8bb25e0893a7804700db57f0d3feee00235a800a5effe36cd3e13774b221e25527d05a6b9b37f856b34b4a61733275a4c70fa897791deaf771ffaa8ff0621020000",
    ],
    [
      "ETag",
      "e+gl3kjFWXMXv8Jx6Sq/yA==",
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
      "Tue, 26 Oct 2021 14:48:54 GMT",
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
      "82300000d0bb64ad8ec0a0d01d415110ac888065c3040c34f2958401e2f4ee757a8dfaeef09e00a529a634664d816bf0012624aa8b7471681568e4a4d3db30f2238f24b0cd2f1674b4b34e6bfcd8a2c43a068c9a79691abca2539dcd5de3763d7b4471564e741d2c9499b1736b78b17fc4a67cdaee96da3e941097362b9825d6a9efdd89fb060ef28a1d49e5ce19426371efef872fdf1e73dd826e3990aae09a107e92c60a5b68f8b7383004f9d2289b5e41a9b45c6fcd130b081ca284fb5dc976d5da1daad5b7a053d1b6c52cef78d60862e06ad416bdc851176f6fff1798013cb6a4c33426afed92acaa33f0573f66538b5fff21461deec0cf2f2a56631d19040000",
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
      "Tue, 26 Oct 2021 14:48:54 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
            parameterValue: { value: "profiles" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-35-1635259702250",
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
      "0002ff85536b4fdb3014fd2b91f795b6216dfa92aa51b561546a534853109aa6c8766e82218d4bec3021d4ffbe6b8732d824f814dbf79c7bce7de4853c88322563c244fe5843f5fced5e32724240d31c5fefa6737e772bfa34bfbccaeec5f2667e95fbf964820861588aeef605b494ac2b0e6abcddb4f34ad67b5a49d9c244adaedf3aed777dcf1f0d5ccff35de42928b2a5281f4c76adf76adce91cb5dbb9947901742f549bcbdddb7be7c9ebec2b790f5cabce47c90eaaa8cee7a2df0bc9a916b29c6c3768a0565025b0a3a2400b7f99293bfb98ba2de8ae9d23f84970a09ccbbad4c616a6e0b2cc445e57362b19bf106bf3dd816c8265308b1d2e8b7a572625ddc18993524d13fdbc07e73c5aaf9c4578be8e56d378b10e93cdec22584ddbb3f572bb0a37cecd4510058ea6ac00cb7526ce99bd857841fd149416a5558fcdb3517e6dd0e2ffb118024a2b6882c9c0edd3d3a13b62191bf06cd8f559e602634336f06997b97cd4835eca8022cf8a5a162d65e97959067c34484e194b939e9f0e93a1cb68e2a73deaba7dcff591743821bf2ba1612ed45e2ad17488dc448b3848e2681bcea671604bc8685de87963cc14f0dea3c60211f4494d07131512954cbb17611c44d359bcb80e9a092f21a7fc79f38833ce68a100d1b4c2e669a85632c5869170ba0ae608b613bb3c061519ff7c21a6e7c6c5bb96bfd1631ca0b1abed976ce26811feb0768e886b5ad416f2d41c4c1999288ce9c32f04e28e3649c8d536886e49f31441061594fceb6122d806befcd58e7b8f58dc7c94511aefb83a5c19115e41b342c2567b64777b23cf23165ce97f63bedb1f1e9b6672988cb08352bf56d4ec3d16da88d5ea0d84419c7e689b75f803c196981077040000",
    ],
    [
      "ETag",
      "hADchYi6agPQfjiLWDQg5g==",
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
      "Tue, 26 Oct 2021 14:48:55 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-35-1635259702250"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d936f4fdb3010c6bf8bf73695d23f0923122f5a56b64aa165692a5e201499f892191cdbd84ebbaaea77e71c5887c6a4f026b93bff4eb97bfce4409eb86424210fbc7e6ec1ecbfd4e07efa2003db0a67f1a595b44002028ed6489edf5efd8ed79ba7ddf3ee76134fea30bbacf5eee202095bfe828692e4402a0e825992dc1d88a40d605ba944dbc8a2cb02e2f6da17d779b6587ec7bc51cce7cb4d9a4e67e99c1c835323a38e161dff89b6fb63401ed5430615189025f859b4518f50ba855fd3d2460b1858d59a122ce9e0eea036aad5d42835c0ca601c0d86f1381a45e767e1681485080a5552c7954476b3c6f988538e8a4ced704b321c2361ba1837aebae716eb9c759bf870b1cce34937e07b8096a56aa52b7ac18a1beb5ed5fb03bea9f02f29e82741bc2a2efaa01a2403d347715d50c60c58db4b2a5b50ad4fd86cb54a3faa2299519cf5835bde0308b73d0157e96afa3f69d1607fb5fa36cde71f08ebd03627245f5ccfd7f9f4fac673f76f4698ed1dd81ba3d05516bca186e1e46b741687af1ebb54de77f89dc49916025252fc557e7047928a0a0bc7176c369dd888030000",
    ],
    [
      "ETag",
      "9WFx6SUkwqwWU64g0RCgpw==",
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
      "Tue, 26 Oct 2021 14:48:55 GMT",
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
          "SELECT `ios_app`, `last_name`, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `ios_app`, `last_name`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
                { value: "another@example.com" },
                { value: "acotesford3@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-36-1635259702250",
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
      "00000002ff85546b4fdb3014fd2b91f765934a9ba4ef4a083ac85844494b9a82d034b58e7b530c691c6c87ad42fdefbb71288f2140aad4dae79c7beecb7d20b73c5b920189f9eaae00b9f97223625223a0e90a6fcf2f4fdd781206adfc74744efdeeac376ad3e1fe3e3278a952749da7b0a7442119a8c16c5a5f4951e4540ab18781f69a9d3da7d36cbbed7ed776ddb68d3a056932e2d92daaafb5ced5a0d1d879d75742ac52a039577526d64ff78d7bb7914b71034cabc66bcb06baa8c6c7a607a960547391edcfa69840a140ce614d798a293c2b97f1e1ebd0754ed7f51592ef3903ca9828325da6852198c812be2aa4894a060fc4a4f9e207997a23ef28b2165ca839cdf345cd5aa454e97946d7501e8cffc2a2ca9acff35beb47383eb3165863c253500bebf2a7177ad613cd0fac591078d3c8fa7af0cd3a09c7b389f5fd6a07d7deb1c14497a034cf4c9a118d5328537ceca4ff767ea5806aaaa002e75dbb439d9edd8f93b8cb925eb31d2736c4712feeb66933b659bf05ad650c1475ba8c6e54341319b3fb7d97369d9e63b7bac87230106b3b8c3acb250ea4d7efb86e9ff562b2ad913f926b38e62a178a57ed2497a11f79f3289c0547c3c8336524b448f571955c59c4cb3c351689a40feada962817e854cec60f222f1c1e45fe8557adc30856946da677b810094d15209b4aeca006792696d83432194ffdc81f07c3112acc8c273b8622835f0fcf8268939b2e6bf34d866138bc420d95926efec3a651e8072764bb7de17741d3c2708cc09c2a83fb0a2070830b29b8b20fe1af29d2ace4b6f6ccc065d5e0bc0be37cf435c8f77126b0a18990cbe66bceef2d7e6a045f585507399f79e115a9ae42484042c63edf30241be0d33f8addab452ebe5bb4511acfb8cf4c95264c42b5d77c5d26b353373b76ab490c59ea37186ef36e80658c3222ac21d38f1555afd64ca4840af5444210d731a8e6f50f97a68b5435050000",
    ],
    [
      "ETag",
      "QWK2bPRN4pKLQaI7U8L5aA==",
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
      "Tue, 26 Oct 2021 14:48:56 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-36-1635259702250"
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
      "0000000002ff8d52d14ec24010fc97f3d1560b08c6262402218a698a1689898690e3d8d642db2d77578410feddbda2457d20bef476e666f67627ddb1659ccd99cb6671b42a406ecf22d04fa6084015895674e49829601603cd2352ae36cb97ccf38395be4cce2fe568f87a15cfa2769b144abc43ca99bb63610cc95c31f76dc7329e02d96254539ee7a4d2dbdc10dde1d0eb777c22529c1bc21f7b5ea7ebf5d9deaa5c09577a5ad6956ff41c0cfcbbd3b6e9345ffec731d95b6c81b3004290900930a3e7121720f4c0a4a2789a27602b2ca400c54a717911492c722e116d62ec46cbaeb51acd7af3e6daa9d79b0e0913145cc79891763ca2d19846cd93003f2814d620812c4bca272cbf6ba2b52ca0dcc28007906b8c55856171209c5bd894535d084ccb0d7eb60879a28e3dfa5c1f810042b593ee5f03f450830a51ce2b868b6faaf1b7cde46bc1ee96148f12292d052628e7105a0f8d9aa671cd1b16139c7e95fb581ff0fe13298f596587020000",
    ],
    [
      "ETag",
      "qxkWnLNRqt/l+/rSOZ4ibg==",
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
      "Tue, 26 Oct 2021 14:48:56 GMT",
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
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "642d8e0252e80e8aff500be8f0d930804988f20921a8d0e9ddebf41af5dde17d8334cf51d725a2b9a21abc8321958d693edd33dd5a9162bd72606d93002a3e83b36574d78eb0d4cf51100e112ecd8f98f0b56cf27659e1a39beed4dbadaf472f9444300b866877f1adb2b1aef358f7b644761fd576ee66388dbc8a641b7c870b7650072dcc65a9b8c42c29d595dfcbc4e01abc88a2ddd3446aeb2f153b0d6db70dd762dfdd53cf0f9d9d16e34d38eafc5cf59964d4cca44161f558bc9d64626eb2fa1c8dee48c529a40e1c3f6d083bfb80e342594e5f5efe2f3001e8c128475d429fdb9585614cc05ffd440c0c3dff5b28e588839f5f23b7210b19040000",
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
      "Tue, 26 Oct 2021 14:48:56 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
            parameterValue: { value: "profiles" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-37-1635259702250",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85536b6f9b3014fd2bc8fbda04f22040a4688d52ba444dc806a4d5344dc8c085b92538c3a65555e5bfefda345dab4aed276cdf73ee39f7c113b963754ea62465e5df169ac72fb73c256704242df1d58b96f67a7d35a6de0eecf6815d4657e6f261364304532c41f7870a7a82b74d0662ba8bfa65c3db036d38ef61a2dec8e90d26237b687b8e351cda16f20454c59ad577c8fe23e5414c4df3a4dd2f392f2ba00726fa19dfbfbc9bf743f3d0f05bc8a430df4a9aa822cc8f45bf563ca392f17ab68bd0402ba049604f598516fe33f3f4fc6dea3ea3fb7e89e07b9601cd32ded652d9c21419af0b56b68dce4aa64f44db7c752091bff617b191f1aaddd7494df77066e454d2443e1ec0b80cb71b63155c6ec3cd3c5e6d83245a2cfdcdbcbfd8ae779b20326e967ee81b92a61568ae3133cef52dc00beae72024abb57aac9e95f2738356efc7a208282da00b268e35a103d7f2d22275b2c21dd96961419abaa963d3516a65de18c6790a14795a54b368cdebc1c84bbdc9609814051d2563cfc913d74e27c9b000cb76c68e45ad9c1ccfc843c3245c3071e082751d2237e12af69338dc058b79eceb120ada56f2a233a60a78ed51628108faa0a6a38a328e4aaaddab20f6c3f9225e5dfbdd84d750d2ec31fa8b332e682500d1b4c1e64968363cc7869160bef12f10ac27f6fd141464faeb89a89e2b17af5afe428f7180caaed45f12c5e12af8a6ed9c10d7b46a35e4be3ba8320a5629d3c7df08c41ded92901f3b3ffc49baa7100a68a0ce3e1f268275e0d35fedb4f788c5cd471921f18eab9309259235d0ad10d3d59ed8a3893371880637f25dcc75dd53d3540e9511f650cbe78ababdc7423bb156bc803088d30f74b38eff002dfcc2b377040000",
    ],
    [
      "ETag",
      "9SH5LLK4a9Ue5uwiFSK/Hw==",
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
      "Tue, 26 Oct 2021 14:48:56 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-37-1635259702250"
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
      "6f4fdb3010c6bf8b799b8afe4bcb22f1a261dd5629b4ac0d42da8422635f3283631bdb29eaaa7ef79d032bd3400a6f92bbf3ef94bbc74ff6e441284e127227aac706eceea402ff3d046b708df40e5f462b072422e06985e4f2f14cc663fee3869f8a51fedbb0347d889fcecf9170ec17d494247b520a90dc91e4e79e285a03b6312d9b5a156d1611bf33a1b8c9d78be557cc6bcd43bebcceb2599acdc9213a3672ea69d1f21f68bb3d44e45edfada1040b8a4198c5587d0fcc2fc29a8ed64642cfe9c63270a485db83caeac650ab750f2bbdd1b437988ce261fc69da1f0ee33e825233ea8556c85e6f703ee2b5a772ad9f704b32182161db18372edbe716eb82b79b8470b1cc27e376c07f01ca986e942f3ac15258e79fd5fb0bbea8f03f29e90741bc2a21bba00a1407db45095350ce2d38d7496a5750638e58ba5a656f5551dc6ac1bbc1ade800a4df1e812fd96af69eb468b057ad3ecff2f91bc279b4cd11c91797f34d3ebbbc0adced8b11d29d07776535baca4130d4a03f3e8ba793feb3c72e74f01d7e27f1b68188308abfca37e1495252e9e0f007066d70b588030000",
    ],
    [
      "ETag",
      "Nq8l54dZWd/i3TzpcBBk5w==",
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
      "Tue, 26 Oct 2021 14:49:01 GMT",
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
          "SELECT `date`, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `date`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
                { value: "another@example.com" },
                { value: "acotesford3@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-38-1635259702250",
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
      "85546b4fdb3014fd2b91f76593fa4c9bbe24041d842d5269599a82d034b58e73135cd238d80eac42fdefbb71288f21408ad4c4e79c7bcf7db80fe486671119919027b705c8ed97b508498d80a6099e16ce42399d6dd15fb74ec7ce7ad6bcf716697270800c5eaa14dde429d495282403355acc1b8914454ea510750c54ef0ceaed5ec7b19d61bf65db4e0b750ad278c2b31b545f6b9dab51b3b9cfdd48844852a039570d26364fe7cd3bbb994bb106a655f375ca266651cd8f931ea68251cd4576b098a38142815cc286f2142d3c2ba3f0e875e806a79b4682e43bce8032268a4c97b630041359cc93429aa864f4408ccd172f64ee4edce3c05a4554c3aa66ad4cbe954595b55ce637d6a93f3bb3565853cc53502bebf2a7ebbbd613cd9b5a8be9d49d07d6d7c36fd60f7fb638b7be5fede1da6358341281d23c3336021aa6505a78ec94f7763ea5806aaaa00297fd568fb607ad6118877d160f3a4e18b7200c0761dfa19db0c5865de8462150d4e932ba51d14c64439bb5ed5ed8ef45761cb236d05e1cb71ddbb6a3f6b0dbed77866114f58711905d8ddc4baee184ab5c285eb58b5cfa5ee02e037f313d1e07ae2923a645aa4f2a7365112f7d6a2c12491fd4b52b512e3053d97b6f1ab8fef838f02edc6adc134828dbce6f71e0314d15209b4aba010df24ca0cb11399fcdbdc09b4dc7135498199eef198a8c7e3f3c0b826d6ebaaccd2f19fbfef80a35544abafd0f9b07be37fd4176bb17f92e685a188e1198af2ac15d051058e3c209ae5a47f0d71469566e577b66e0326a68bf0be37cf435c8f77126b0a1b19051e735e7cf0e9f1ac11b54d5417e2d5cff8a54473ec42021639f6f18920df0e91fc1fe562217ef25a6511abf719f992a933009d55ef34d6966afeeb6716b89214bfd061bf4bafb019631ca88b0814c3f5654dd4a3391122ad41309415cc76935af7f017e875615050000",
    ],
    [
      "ETag",
      "u5Us53yu7j0FA5jO/wIUlg==",
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
      "Tue, 26 Oct 2021 14:49:01 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-38-1635259702250"
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
      "8d916f4fc23010c6bf4b7de966ca26fe594222202a4a880e78a18690d2dde660db8db64309e1bb7b1d0613c30bdfb477d7dfd3de73ddb2655a442c60f3345955a036270998171b84a0abcc68da4a2c34308781110991e8e1e47175fada1d176f4fd9ea31ea9be2aedd6a11a1e507e482055b16a790459a05ef5b56881c481609632f319bd266b7ed718fb21c239b0d278341bb33e8b19d73e067b372f9cb8fc6617f787f4c31dd396c81f31062505048b0af970a17204ddf1ad3222f337035564a8266355c1f240aab522844972aae7fe5362efca6d7bcbee49ed7e40466288549b1207632a2d6984123b2103fc917f30950754816e37a5d53d9e31e77b9e7f246edc59660016a8da9e637f055f7722631affb3e2af40e420934b2c6ff54e70795906840c7a822ffaf74fa63a1b321e25921cd43831d05df8fa58b96a66f0a8caac06152d07f3ea4669fefbe014244080c2c020000",
    ],
    [
      "ETag",
      "o2oUJq+YCTnZKlqJdItnFA==",
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
      "Tue, 26 Oct 2021 14:49:02 GMT",
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
      "000000000002ffedd34b7282300000d0bb64ad4cf929e98e148880a2a00dda0d831003f8c3848fd8e9ddebf41af5dde17d8334cba81049733dd20b780743aa402993fcda400eab2ece2386eab6cf9d012f763854ee0c29855a779637ce64a2d35b39cf8a3e0af544f33a5bb3c862a8c8c76a58e57bb52d85db61eb86d4095aa379204ecc75967c59b7485e6b46800e781332bb9fc6a1997c61773f356d4a7cc3bedae891b2f08499e7b45d1a781b3d549c211630bf4541b31d13d89236ae659bf4bc501a8cdf66f2aabae40d173038b2d84cceeeacb054aeef14efb38a8c833f391f2cedde4b2f2fff1718017aaf4b4e45523eb7ab3a8423f0573f69869a3eff239a72cac1cf2f3d29f67a19040000",
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
      "Tue, 26 Oct 2021 14:49:02 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
            parameterValue: { value: "profiles" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-39-1635259702250",
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
      "91f795b6a169fa92aad195302ab5e948d3a26d9a22dbb9c90c695c628789a1fef75d3b948190e0536cdf73ee39f79147722bca948c0913f95d0dd5c3a71bc9c809014d737cfdeda7c56d35fdc1bff8c36b999659916fff5e4d26881086a5e86e5f404bc9bae2a0c69b753baf64bda795942d4cd4f246add3bee777fdd1c0ed767d17790a8a6c21ca5b935debbd1a773a47ed762e655e00dd0bd5e672f7fcdeb9ef76f695bc01ae55e7b564075554e77dd1cf85e4540b594e366b34502ba812d85151a085ffcc949dbd4edd1674d7ce117c2f3850ce655d6a630b5370596622af2b9b958c1f89b5f9e240d6c12298c50e9745bd2b9392eee0c449a9a6897ed8837311ad96ce3cbc5845cb693c5f85c97a76192ca7edd96ab159866be7fa32880247535680e53a13e7ccde42bca07e0a4a8bd2aac7e6d9283f3568fe762c8680d20a9a603270fbf474e88e58c6063c1b7a3ecb5c606cc8063ef598cb473de8a50c28f2aca865d15296a769ea0d29634936846ed2eb79fd6434ccfa49e6b2accf7d489937228713f2a7121ace85da4b259a0e91eb681e07491c6dc2d9340e6c0919ad0b7dde183305bcf4a8b14004bd53d3c144854425d3ee791807d17416cfb74133e105e4943facef70c6192d14209a56d83c0dd552a6d830124e97c13982edc4be1d838a8c7f3e12d373e3e245cb9fe9310ed0d8d5f64bd671340fbf5a3b47c49616b585dc37075346260a63faf00b81b8a34d1272b509a2efa4798a20830a4afef130116c031ffe6ac7bd472c6e3eca288d775c1dae8c08afa0592161ab3db27bdd9eef130baef49b98ef7bc7a6991c2623eca0d44f15357b8f853662b57a066110a71fda661dfe01da41b8da77040000",
    ],
    [
      "ETag",
      "h5dlkrAZcB58WodnflgVzQ==",
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
      "Tue, 26 Oct 2021 14:49:02 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-39-1635259702250"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d93dd6edb300c85df45bd750027a9d3d5402f922e6d03383f4bdc9b0d85a158b4a754163549ce100479f7d26e9b0deb00f7c626a98f3079747c64cf520b16b3ad2c7fd5600f1725f86f4db006572befe865503b600103cf4b220fbbf9728bb7f3e8a1b81b3eef4cb8c2ef4979734384cb7f42c5597c648504251c8b7f1c99e615505b8eaaae74d66601f307d31437e97ab6b8a7bc42d1e48bc724194f92293b05e746c13dcf5afe136d4fa780ed70bb86022ce81c9a598cc51de47ed6ace9786514f41cd63607c75ab83d282dd6865bc41e557ac3eb5e7f348c06d1f55538184421810a73ee256a621f37341ff3e8b95ae36fda92f58744d836a68d8bf6b9a7ba14ed264d385ba4a3cb76c0bf019ee7586b9f758285b4cebfaaf70ebea9f02fa9f82741ba2aa9baa012b400db45499371212c38d749a2cbb831676cb25c261f55d1c2a214dde05e7600caefcfc05db21cff4f5a32d81fadbe8ed3e907c279b2cd194967f3e9261dcf570df7f46684c9c1835b59245739680cd50f2fbf4457a3f0d563b7d8f88ebe137b5b43c0724ebfca83f42c2eb872707a01d3ac088c88030000",
    ],
    [
      "ETag",
      "yjMOboCM5HfF3kjp0PoZLg==",
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
      "Tue, 26 Oct 2021 14:49:03 GMT",
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
          "SELECT `date`, `last_name`, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `date`, `last_name`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
                { value: "another@example.com" },
                { value: "acotesford3@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-40-1635259702250",
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
      "0002ff85546b4fdb3014fd2b91f76593fa489ba62f094107190b2b6d97a620344dade3dc14431a17db012ad4ffbe1b87f2181b489552e79c73cf7d390fe49a6731e993882f6f72909b4f57222215029a2ef1edb47177623b4dd7ed69a7deba714f8e7edc4feef6f690c10b95a2ab750a552572c940f567d3da528a7c4da510550c546dd9d546db719b6eaf63379bae8d3a056932e4d935aa2fb55eab7ebdbef3ae2d8558a640d75cd598583dbdafdf36eb6b29ae8069557f6d594717557fdf743f158c6a2eb2bdd91413c815c839ac284f318567651c1dbc0e5de374555b22f99633a08c893cd3455a1882892ce1cb5c9aa8a4ff404c9a2ffe90a937f40e436b11530d8b8ab548a9d2f38caeccc1982f2caaacf97c7d6d7d0bc6a7d6020b4c780a6a619d7ff702cf7aa2f9236b361a79d3d0fabcffc53a0ec6b389f5f5620757fee58129c6a034cf4c82218d5228927beca1ff767285806aaaa004e71dbb4d1b5dbb17255187255dc78d121ba2a81b755cea4436ebb5a015474051a78be84645339135e266d462aedd7022b7db8bdb4d1a3bcc6e30d602daeb50277628eb74db09d956c89de41a8eb85a0bc5cb4692f3c00fbd7918cc468783d0336524344ff551995c51c4cb3c351689a477eada162817e8544cc51f855e30380cfd33af5c84212c29db4c6f7015129a2a403695d8410df254c4d83432194ffdd01f8f06435498e94e760c45fabf1e9e05e1666dbaaccd930c826070811a2a25ddfc854dc3c01f1d93edf685df194d73c33102732a0d6e4b80c015aea2e0ca3e807b53a459c66de599816baaa1f15f18e7a32f41fe1f67021b9a08193baf39bfb7f8ab10bc5b651de4e7cc0b2e48f92a80042464ece30d43b2013efc44ecee2b72f1c6a28dd278c67d66aa306112cabde6ab22999dbae5347be603a3a9d46fb056a3b71b6011a388082bc8f46345e57d351329a05c3d9110c4751c95f3fa038cbf33982f050000",
    ],
    [
      "ETag",
      "S1wJ032559t3/4q5JDKxPw==",
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
      "Tue, 26 Oct 2021 14:49:03 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-40-1635259702250"
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
      "0002ff8d52cb6ec23010fc17f74a2a135e0209a940510b42a8e571a01542c659d240924d6d074811ffde7528395455c5c5de19cfac76473eb15d107bacc5d681ff9982caee7c30afb698804e43a3e94a30d6c04a0c8cf049f9354b17d9a272ac379a6fc363f9b0e3591cfaed3629b4fc8048b0d6896d02083dcd5aef27168b08c8e609639b982cb1e8b133eb138ad0b3683c1f8d3add519f9d4b853e14daacf2ba304d6793c1f8e97fdb6a95ec6e712ccf25b6c5f50436a0209660874e146e419a81cd438b2809c1d1982a099ae5e2fcc157982642213ac43855ee94eb959a5b6b36b8ebd638094394c2041893763ea5d1984123c2091e280e562181ca4b4a66939f7ba25dee7287bb0e2fe7bb586a086a8f812e306c2f047f80633edbbdc428dfe3cf466e61ecdbe0af4002a1f26d2daa85ab8706f406955730425ea9caef66cb9f8dbb19295e14527c1a6c72fc92620fad9a666a199542894941bfe63930177cfe065795699092020000",
    ],
    [
      "ETag",
      "zTuYyY3x679ZJx1wk0ynlg==",
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
      "Tue, 26 Oct 2021 14:49:03 GMT",
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
      "30",
      "00",
      "00",
      "d0",
      "bb646d1d4b04a54b28849f1022d5d40dc384c84f3e4352413bbd7b9d5ea3be3bbc6f9031c6854865dff00ebc815ba6e84bb6f487ad6117c5eefd9cad71245e262b9d14356ca7c3d4e1aa8a6b9bb0c2ee2aa38c6695b6fe31be5f37356aa487c30ceba5805d4a515b38502872c6bbafa273234e2f01a70c4975469a273f031bb6919fc4c5568bf23e0c66c58d55c5229e1912c9e846c1f9e9b43bc8cd9e20ad5d1d8909132341fede77180af1d9598b92b9ece37eaded9e4a4b85836be58efe4a1ac7b32f08729263adc76602f14dd05550fbcba7a7ff0b2c009f876ae422ad1edba1aaeb0bf0573f95b7813ffe1b3c1bf9087e7e01108296f819040000",
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
      "Tue, 26 Oct 2021 14:49:03 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
            parameterValue: { value: "profiles" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-41-1635259702250",
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
      "02ff85535d4fdb3014fd2b91f74a9bb4496953a91a551b20124db73405a1698a1cf72618d2b88b1d5885fadf77ed50069b044fb17dcfb9e7dc8f3c93075e6dc89864bcf8d540bdff722f32724240d1025f9fdcc1fe6e39fb3db4efc28bf9ed7a0843874f27134470cd9274bb2ba12345533390e3f5aa5bd4a2d9d15a880e26ea78bd4eefd41df407fed0e9f7070ef22494f915af1e907da7d44e8e6dfba8dd2d84284aa03b2ebb4c6c5fdfedc7bebdabc53d3025edf79236aa48fb63d1afa5605471514dd62b34d048a853d8525ea285bfcc4d76f63e7597d36db740f023674019134da5b42d4cc14495f3a2a94d56327e26c6e69b03590557c12cb198289b6d9556740b27d6862a9aaafd0eacf378b9b0c2e87c192fa649b88cd2d5ec32584cbbb3e5d57a11adac9bcb200e2c45b3120cd79a5867e616e105f5372015af8c7aa29fb5f24b83c2ffc7a209282da10da643e794f6468e9fe5d990e5237790e50e64d9281b0ea89b39ccf7c0db64409167440d8b56a262ae97b93db797baae334abd7e1fd291eb3929b87e36f0990fb81de470429e6aae60cee54e48de7688dcc46112a449bc8e66d3243025e4b429d5bc35a60b78eb51618108faa0a6838e72814abadd619404f1749684d7413be12b2828dbaf7ee18c735a4a4034adb1790aea85d860c348345d0473049b897d3b062519ff7826bae7dac59b96bfd2131ca0b6abcc97ac92388c2e8c9d23e29a968d813cb6075d46ce4b6dfaf01381b8a36d12f27d1dc4b7a47d8a21871a2af6f930116c029ffe6ac7bd472c6e3eca4885775c1d26b508aba15d216eaa3db23dd7f7cd8faa68adfe8d79bd9e736c9acea133c2162af55251bbf758682bd6c857100671fa9169d6e10f817b6bb177040000",
    ],
    [
      "ETag",
      "w35yhOCx7/hIGDYU7e70iA==",
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
      "Tue, 26 Oct 2021 14:49:04 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-41-1635259702250"
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
      "02ff8d93514fdb3010c7bf8b795c2ab5216959241eda2d6c91424b9bf0845064ec4b3073e2603b9d4ad5efce39404163527849eecebf53eefefe674ffe88869388dc89eab103bd3ba9c0ae5db001d3496bf0d5aac600f108585a211907fa5b2cb2209b9d5d848fe993bf7ef293f5f9391286dd434d49b427a500c90d896ef6a4a135601b53b2ab9ba2cf3c6277ad2b66f92659fec2bc56dce5cbeb349d2fd2981cbc6323a796163dff85b6db83471ed4dd064ad0d03070b3b45a3d00b3895bd3d0ba953032aad30c0ce9e1fea0d2aa6ba9566a84955130194da6a7a11f7e9f8d7d3f1c232815a356a806d9eb0ce72356592a37ea2f6e4926a748e83ec68dcbfeb9c5bae0fd262e4c96f934e807fc0850c654d7d862102c8536f645bd37f055857f4949bf08e25509390455d070d04394680bcab906630649650adab6476cb15aa59f5569b856820f835b310048bb3d0217e96afe3f69d160ef5afd9ce7f127c258b4cd11c993cb38cbe797578ebb7d35c26267c15c6985ae32e00c35190767e16c3a7ef1d80fe57c87df89aceec0238ce2aff25b581295541a383c038b8327cb88030000",
    ],
    [
      "ETag",
      "E4r+EiS4S78F5qLz2Qz2IQ==",
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
      "Tue, 26 Oct 2021 14:49:04 GMT",
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
          "SELECT `stamp`, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `stamp`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
                { value: "another@example.com" },
                { value: "acotesford3@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-42-1635259702250",
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
      "54",
      "6b",
      "4f",
      "db",
      "30",
      "14",
      "fd",
      "2b91f765d3fa48da942695107490b148d0429a82d034b58e73530c695c6c8751a1fef7dd3894c71020456aea73ce3df7e53c901b5ea4644012beb82d41aebf5c8b84340868bac0d3cee4f48046cbf42af45d3fb9574172f83d3cdbdd4506af548a2e5739349528250335984e5a0b29ca159542343150d3ed349d9d6eafd3f3fb76a7d3b351a720cf8e797183ea2bad576ad06e6fbd5b0b211639d015572d26964fe7edbb4e7b25c53530addaaf2ddbe8a2da1f9beee58251cd45b13b9d6002a502398325e539a6f0ac4c93fdd7a15b9c2e5b0b24df710694315116ba4a0b433051647c514a13950c1e8849f3c50b9904c7c1416ccd95c698f386353786738b2a6b365bdd583fa3f18935c7a2329e839a5b17bf8228b09e68e1c89a8e46c124b6beee7db38ea2f1f4d4fa71b9851bdbb8984a0a4af3c22412d324872a89c75e856f275409a8a60a6a70d6b777a8e3d97e92257d9679dd5e92d990245ed2efd16e6233df05374d80a24e57d18d8a16a27053b7ef75d2ccf17bbeefb16ca7b3e3d93da79bf5329bb9491ffa5dc7ebba1ed934c85fc9351c72b5128ad70d2317511807b3389a8e0e867160cac86899ebc33ab9aa8897796a2c12491fd4b5a9502ed0a9ea7e388a8368781087e7413df0635850b69edce2c8339a2b40369574091ae48948b169e4743c09e3703c1a1ea3c24cf174cb5064f0fbe15910af57a6cbdafc9261140d2f5143a5a4ebffb0491c85a323b2d9bcf03ba77969384660fed506773540e01a574e7065efc3bd29d22cdda6f1ccc075d4e0bc0be37cf415c8f77126b0a1999069f735e7cf069f06c13b54d741cea6417449eaa308329050b0cf370cc906f8f453b0bd97c8c59b8936b8d59ae33e3355993009f55ef36595cc56",
      "edba9ee3104396fa0de6779ded00ab1855445842a11f2baaefa599480595ea898420aee3a89ed73f551e0aff17050000",
    ],
    [
      "ETag",
      "2SPCaRmdhI949bxsEbD+IQ==",
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
      "Tue, 26 Oct 2021 14:49:04 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-42-1635259702250"
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
      "85",
      "91",
      "6d",
      "6bc2301485ff4bf6555d5facb38230159932955915064324a6b75a6d7bbb24d575e27fdf6d1d7b877d49724fce43eeb939b17d98f8acc5d6e1e63903995f6d404f8b83072a8bb4a22dc54401ab30d07c43ce38f0fcbc77df781d4c1faf07e34e6c65dbc5b1dd2687125b88396b9d581042e42bd67a3ab184c74098d23c4ec9a3f3b428e7c3717f36ef8c1f488ad12fa4c96234ea74477d76ae7c50ab55baff8466736f38b9fb8b589e2b6c876b0f02909008287a4825ee40e861114fd1e311541566528062a5b9bcd848cc522e11aba454eb56d56cd88ee5b837866539061923145c8798907731a3d69846cd230f8f948ed96490e5918206e57a20d9ac394dc3715cd3adf7dd324ea1c20ee4014365dcc24bd94e4d605cb6fe8b6dd489feca0ae01accffc1a6d9b4bf815ca00615a0f4ed9ff4f23d4b3727c783441a8c826226c6653e3d2cdc9a66a965061526387def20d497fafc06f7bba72a3b020000",
    ],
    [
      "ETag",
      "mfRdyCK6zHQX/HMAm2uhUw==",
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
      "Tue, 26 Oct 2021 14:49:05 GMT",
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
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "64",
      "2d8efc04bac40f45108c5111360c62aa7c34690842707af73abd467d77784f90e5396e9a94930adfc1071099628df3b1474d7b79b9a2b5f08d4373eaaadd6162c9dc8f568ba9e30f673c1c6765b1d28dd0aaaad02675ac04e7d21113b37c10a66aa5b8841e55ed6c085cee79b12ab5c67ebbcb03117d91d084ccb0e52894905edcdbcf53d076df529d26897958b4fbdebdf0b982421d4d106cb4720f9d7abda484c35b0ca75addaf24166d7274cb8d2e7bc4d2f1319b12a82a5ca1db2e71e6e7c2ddcc53b234054b74dfed2b7958074836e015d1f1dbdbff054600f7b460b8498bd77655b7ac11f8ab9f7241f1ebbf8d338619f8f90592a0184e19040000",
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
      "Tue, 26 Oct 2021 14:49:05 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
            parameterValue: { value: "profiles" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-43-1635259702250",
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
      "4f",
      "a3",
      "40",
      "14",
      "fd",
      "2b64f6d5164a696b9b346b53716d62a902d56c361b320c17761498ca0c6e1ad3ffbe7706eb6a4cf48999b9e7dc73ee07cfe481d719999194178f2d34fb6ff722252704142df0b5f1afedbd13d0e8dacfdd6200ed43e58437f33922b866495aed4ae849d1360ce46c1bf58b46b43bda08d1c3443d6fd81b8c872377349d38ae3b729027a1ccaf78fd80ec3f4aede4ccb68fdafd4288a204bae3b2cf44f5fa6e3fb9f6ae11f7c094b4df4bdaa822edcf45bf978251c5453ddf4668a095d02450515ea285ffcc2c3d7b9fbacf69d52f10fcc41950c6445b2b6d0b533051e7bc681b9395cc9e89b1f9e64022ffca5fc61613655bd5494d2b38b132aa68a2f63bb02ec2cdda5a05179b70bd88579b20899697fe7ad15f6eaeb6eb20b2ee2efdd0b7144d4b305c6b6e9d995b8017d4cf402a5e1bf5583f6be59706ad3e8e4513505a42174c26ce980e4e9d699aa713969f0e4769ee409a9ea693111da60e9b7ae0652950e41951c3a2b5a85d707367ea8e1317609278de8425d3e9709c4c8759e60d18c07840c9e184fc6db882732e7742f2ae43e42e5cc57e1287db60b9887d53424edb529d77c674016f3d2a2c10419fd474d0512e5049b77b15c47eb858c6ab5bbf9bf0151494eda3479c714e4b0988a60d364f41b31619368c048bb57f8e6033b1eb635092d9af67a27bae5dbc69f92b3dc6016abbca7c491487abe087b17344dcd2b23590a7eea0cbc879a94d1f7e231077b44b426eb67ef893744f21e4d040cdbe1e26824de0cb5fedb8f788c5cd4719a9f08eabc3a416610d742bc44db547b637f2262e31e0467d888d879363d3740e9d112aa8d54b45ddde63a19d582b5f4118c4e907a659877fac8ca45b77040000",
    ],
    [
      "ETag",
      "rEP/y0NaSPEf2g1eukm0RQ==",
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
      "Tue, 26 Oct 2021 14:49:05 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-43-1635259702250"
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
      "da",
      "30",
      "10",
      "c6",
      "bf",
      "8b",
      "f7",
      "3648fc0bac91fa023ad6320568219db44e5564e24beacef165b6438510df7de7b463535b297d93dc9d7fa7dc3d7e7260bfa4162c625b59fcaec1ec3f15e06e7cb0065b2b67e955a1b6c002068e17449e61f17df0638ce3851cde6dafbe3d5c86fdfae6fc9c089b3d40c9597460b904252c8b7e1e98e625505b86aa2e75da640173fbca1737c97abebca4bc44e1f3e56d1c4fa6f18c1d8353a3e08ea70dff81b6fb63c01e71bb861c0ce80cfc2c95c147c8dcdcaf69795929e858ac4d06963570735018ac2b6e103b54e90c079dde6810f6c3b371b7df0fbb042accb893a889bdddd07ccca1e36a8d4fb425eb0d88304d4c1be7cd734775299a4d7c385f26a36133e0ff00cf32acb54b5bc15c1aeb9ed5fb0bbea8f09a54fc83205d95546d50015a8069a3649572210c58db4aa24d79559db0e96a15bf55450b8352b4833bd90228b73b015fe3d5e43d69c960ffb4fa3249666f08ebc8362724992f669b64b2b8f6dcfd8b11a67b07f6da20b9ca823754af3bfc1c8e47dd678f5da0f71d7d2772a68680659c7e952be958947365e1f807e044270888030000",
    ],
    [
      "ETag",
      "9ogV3Y7o7Mi4ZbHJhG52uQ==",
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
      "Tue, 26 Oct 2021 14:49:06 GMT",
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
          "SELECT `stamp`, `last_name`, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `stamp`, `last_name`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
                { value: "another@example.com" },
                { value: "acotesford3@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-44-1635259702250",
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
      "02ff85546b4fdb3014fd2b91f765934a9bb44d4a2a21e8208348a5409a32a1696a1de72618d2b8d80e0ca1fef7dd3894c71820456ae273ce3df7e53e906b5ea66448129edf5420efbf5c8984b408689ae3692fba7420bfb307e9e1f2ecf6a8920327bcbcdbd94106af558a2e57056c295149066a389bb67329aa1595426c61a0ad7e7fcbf17a6ed7f50776b7ebdaa8535064635e5ea3fa52eb951a763a1bef762e445e005d71d56662f974deb9ed7656525c01d3aaf3dab2832eaaf3b1e96e2118d55c943bb329265029907358525e600acfca34d97b1dbacde9b29d23f99633a08c89aad4755a18828932e379254d54327c2026cd172f641a8c83fdd85a288d31172d6b5150a5e7255d42fd61dc171655d67cbebab67e4427c7d6022bcc78016a61fd3c0aa2c07aa285136b369904d3d8fabafbcd3a8c4e66a7d6f78b0ddcfaaf09269982d2bc3429c63429a04eefb18be1dbd9d502aaa982069c0f6c8f3adbb69f64c98065db3d37c96c4892ed64e0d25e6233bf0ffd34018a3a5d47372a5a62631cc7eb7653d7a75de6b09eeb7b9e9fb0be970ebabeedda341bf8a997f92e59b7c89de41a0eb85a09c59b56929f511807f3389a4df6477160cac86855e88326b9ba8897796a2c12491fd4b5ae512ed0a99e4b38898368b41f87e741b30a63c829bb9fdee03264b450806c2ab1831ae4b148b169e4f4641ac6e1c96434468599efe986a1c8f0d7c3b320be5f992e6bf34b465134ba400d9592deff834de3289c1c92f5fa85df392d2ac33102f3d518dc3600812b5c46c195bd077f4c91661dd7ad67062eaa06e75d18e7a32f41be8f33810dcd844c7baf39bfd7f8b408deaea60e72360ba20bd21c45908184927dbe614836c0a77f129b1b8b5cbcb368832bae39ee3353b50993d0ec355fd6c96cd47dafe738c490a57e83f55d6f33c03a461d119650eac78a9a1b6b265243957a222188eb3869e6f51748499e2a31050000",
    ],
    [
      "ETag",
      "3Rh1egw07dGmQvHur71Ihw==",
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
      "Tue, 26 Oct 2021 14:49:06 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-44-1635259702250"
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
      "000002ff8d526b6bc24010fc2fd7af2a89265603425582b5a8581f145a44cecbc646936cbcbb68adf8dfbb896de803da7e49762633c3ee9013db06b1c71cb60ad6bb14e4f16a0dfa3e1b26a0d2502b7a25182b6025069aaf49d93b8c4567376dcbc787fb767d14bfce6d6b7c68b548a1c433449c3927e607107a8a394f2716f308c8a6348f12d2e86392c1597fe84e67ede198a808bd8c1acd07837667e0b273a970855ce9653e17cee96cd21ff57eb72d97c9f63f8ec5b9c436b89a800f126201d9ea89c40d08ddcf5a51b473086585a914a0582ece3fac25a60997886562ca965536eb35bb6a37af8d6ad5364818a2e03ac098b4f329adc6346a1e4ef040a5b01a09643e523f7efedc136d56ec8661db4db369b9cdfc9c8cbd03b9c74015183617c2b881977cbd8ac0283fe54756dda2b4cf592ed750000184ccbf531a66a3f625a58b1a948fd22b182e3ea8daf7bcc5fbe99d2329c612a947055985c6a5ce2e666a5acbd1328512139c7ea2db405ff0f90d790e64d9a1020000",
    ],
    [
      "ETag",
      "GwPcBqSArZWQA6NnzU54Pw==",
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
      "Tue, 26 Oct 2021 14:49:06 GMT",
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
      "d3db7243400000d07fd9e7d4b804d1b76e88220d8311d917b364b111972ec625d37f6fa6bfd19c7f380f80b38cf47d32b41569c03b58b0a87119e7743b7828a8d14c94c94a6c43d337c3982f8f836cb84ee894588cefc135d464887035acd69a9a07a6eb94b88d7218a7d0c1eaa511776e2ff2fe51ed2cde4455abbaf4f2e544427e3ba3233202ab98cb74f2c7a455d3d18beacf3ab846926fce88ad7ea1c76b0e730bee652618d8f0babd1715776b60a7cba912e0f7ad94dade152dfc51a77c22265385901ddfa565169c312bb6f59b32eb88d9546ab6540a6947ce36f7f2f27f810d20734719e913fadc2ec99ab6017ff59361e9c8f33f249811067e7e013d8f21d119040000",
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
      "Tue, 26 Oct 2021 14:49:06 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-45-1635259702250",
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
      "14fd2bc8fbd8269007218914ad514ad74c09590969364d1332ce85ba054cb0e91455f9efbb98a66b37a9fd84ed7bce3de73e78220f3cdf91318978b2afa03c7cba17113927a06882afee36fe5aa99bfd36ea743a67ddef670266879bc90411bc66499a1529b4a4a84a0672bc59b7935254052d856861a256df6e75063dbb6b8f1cabdbb52de44948e305cf1f907da75421c7a679d26e27422429d082cb3613d9cbbbf9d8358b52dc0353d27c2b69a28a34df17fd9c0a461517f964b34603958432848cf2142dfc65eea28bb7a9db9c66ed04c18f9c01654c54b9aa6d610a26f2982755a9b392f113d1365f1dc8da5db8b3c06022adb23ccc6906e7c68e2a1aaa4301c695bf5a1a73ef6ae52fa7c17ce585ebd9b5bb9cb667abc566e9ad8dedb5ebbb86a2510a9a6b4c8c0b7df3f082fa3b908ae75a3da89f6be5e706cdff1f4b4d4069094d3074ac01ed0cad5114470e8b873d3b8a2d88a261e4d8b417596cd487fe2e028a3c2daa59341739b31d6bc8a01f0e46031af6994dc3c8b2bb211b8dac81150fe3d8e992e339f95d7205975c1642f2a64364ebcf03370cfc8d379b06ae2e21a655aa2e1b637501af3d2a2c1041efd474aca35ca052ddeeb917b8fe7416cc6fdd66c20b48283bacf738e398a612104d4b6c9e82722976d830e24d97ee2582f5c4be9d82928c7f3e91bae7b58b572d7fa10738c0daaed25fb20efcb9f745db39216e695a69c8637320055abec3dad0f5f1172271499b2ce466e3fa3f48f3e4430c25e4ece3692258073efcd74e8b8f585c7d94910aefb83b4cd622ac846687b82ef7c4ee0f709e44834bf56fcce9f4ac53d7ea1c7546c82057cf15358b8f853662957c016110c7efe96e1dff00ce567e2678040000",
    ],
    [
      "ETag",
      "EWfJutQqWb111+2X+oeCyQ==",
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
      "Tue, 26 Oct 2021 14:49:07 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-45-1635259702250"
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
      "61",
      "4f",
      "82",
      "501486ffcbe92b6c6a82c5e6072d2d9b1a21b65573ee020745818bf75e72cef9df3b97cc5ab5d51738e7f09ccbfbbeb087759247e040902c36258addd902d5832e3c9465aa24dd0a9e4b040350b10591dbf5733e7d2cdceec69f043270edbba7cbfeb6dd2642864bcc18387b88134c2309cecb1e729621ad853c2db37c5e7506a85da18713df1b8c6fa8cf78a4fbf17438ec74873d3818a7c5882936aff87faccd0e06ac78e0618c02f310b59642f015866aa06d4a9615299a9297224409155c3d58085e164c706ed2c46c5a66dd3eb71ad665abd668583502531e3295f09cd8e984f481e28aa51edf924bb00910554986e3eafa4ae324aa8ce87230f6ed66a5ef2b40d2e224c5f9df20e95d32fa0c1fd83182ef1ccb7899ab13d51fde777e3b8e32fd3ceabae3f77e1052515227c41f8c7a13bf337235373b7aefee144a57700a52a2ceb05e6b5e582dbbf61eeb15d751d37b1c254a342064f477dc260a9c98a5120f6f1be1b3ac7b020000",
    ],
    [
      "ETag",
      "wkZnUVpPBqTSbsbP6JY9Fw==",
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
      "Tue, 26 Oct 2021 14:49:07 GMT",
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
          "SELECT `purchase`, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`, `purchase`, `stamp` ORDER BY `stamp` DESC",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-46-1635259702250",
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
      "02ff85547b6f9b3010ff2ac8fb6793f2244f22555d96b0162d251d21adaa694a8c39a85bc0149b6c5195efbe0392a659a5564202fb7e8fbbf39967f2c8139f8c88c7c3a71cb2eda707e1911a014543dc1d3e3cc1904d2f6d7b7671fb773edfc4d68f8bf1d9192278c192344e23a84b91670ce468b9688499c8539a095147a17ab75f6ff73b3dbd670c5abade6b214f4214cc78f288ec7ba552396a360fde8d508830029a72d960227ed96f6ef4669a8907604a364f2d9be8229bef9b9e478251c54572b65c6002b9846c0531e511a67064faded753e906a7712344f08633a08c893c51455a28c14412f030cf4a55327a26659aaf3ec8c29c9913575ba728754f25ac6bf89d898047b0e2fe5aa3525badd247edbb33bf3aa2e45abbbd341d533b055bb6b6b46d73e16a9fcfbf6817ce7c79ad7dbb3bc1d44eada4c252d6dadc999a4e09dd6f4ccdc504f3f7412a9e94d9bbd48ba0c87cdf60ebedb11604aa50b90aae06ad3e6d0f5b86177803160c3b3d2f6881e70dbd418f76bc1633bad0f53da0c853857ac9a28948069dbec7007acc878052dfa3bd41db4335bdddf33b2ce8ea7adf00c3f0c9ae46fe645cc194cb54485e7599dc3a966bae5c67694fc6ae599611d03c52d32ab9a288d7792a2c1241efd4b52ba25ca053716496ed9ace78e25a37663525330829db2e9e704e021a494034cd680c0ab22be163d3c8f57c61b9d6dc1ecf90511efdf50121c9e8d7f391e06ed3b2cbaa7c93b1e38cef9043b38c6eff8b611efd2ed9ed5ed9ddd0282f2125be5c55fa9b2a40da58cb71a59facba27ab3ed9fddee1532378552a67f273693a77a4da7220800c12f6f14c20b80c7c78e30fd70fb17801d1068751719c40260b13964135893c2e4bd9b3bb8361f5bf5034536f6286d13ab4bcd02814218644ed2baaae5fd9c42294cb17100671806ccbbec0e83f5b079709fe040000",
    ],
    [
      "ETag",
      "8jqe8cDHNNLGWxOOvmIKGA==",
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
      "Tue, 26 Oct 2021 14:49:08 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-46-1635259702250"
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
      "b5",
      "52",
      "db6ec2300cfd97ecb59568074c20f1001b826a8c4b01096d422814f7026d9325295355f1ef73cac436318178d84b12dbc7f6b1730ab28bd20d69927514bc6720f2bb00d4443f5c9059ac245e9ca512884140d10091753f781e85fd4563b18727efd5774656f83269b51021bd10124a9a05f12388379234df0a92d204308d67c20b695948e55c7ba633d719f6d04ed846dbc3f960d0ee0cbae4609cb2562bbefbce7086b36eafebfe95b23c1864cbd62ef82020f54093e0826dc1538e9e4fd284c7604a86344092125c0602c1324e0563267acc6addb4eaf735bbd678a8d876ad82c0987954452c45ec7c8adc88628ac62efbc0f18855458428df38aa5f9e7bf48f044d032827d1a65512fc096873a4738adb67f14e9cc11a84c82fd4180315174afc6e718d42f5ff29dedee2ea1acf399c37b97d4dcbaf4feee40ae45830548c042d96ca51388f4c8b49a1c894c8c0201e45e1f72375b40f9f38c16ae655030000",
    ],
    [
      "ETag",
      "6fgKOhHX9XveDcZfIO1hMQ==",
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
      "Tue, 26 Oct 2021 14:49:08 GMT",
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
      "0002ffedd3db6e82300000d07fe9b33172b77b1b0c1817310a08f5a5a9a5619da960690434fbf799fdc63cff701e8050ca8601abeecc2ee00dcc44874bba4cfab51bb43c1357dfb06f87318f2ad518de7c1ff99ed6ab5640a1f1e0149ae7a1d826ed7a4da331a5683f1f5ade159ed866ddc6d221ec56481c3b94316bda69a768ca55901de3da4c6b8eb13277292d6d02bd00112add8c637fd008fd96f9d588dd32c53cfe6844b267f7fcaa234635deed2247be379b5a7d25292dc25b4b8292d9a3f5592aff2ec224a96654985a3b58bad49c4b3cabbea81a6713063af2dd7cf9f2f27f81056053cf251b307f6e372c0817e0af3e5673cf9eff5d462493e0e717f6cee73e19040000",
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
      "Tue, 26 Oct 2021 14:49:08 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-47-1635259702250",
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
      "85535d6f9b3014fd2bc87b6d0249082191a2354be81a29211b21add66942c65ca85b8229369da22aff7d17d374ad2ab54fd8bee7dc73ee074fe49e1709999098670f3554872f772226670414cdf0b564416f7623c7d2991737d57df9edf6b05ecca65344f08625e9becca123455d319093ddb69b55a22e692544071375ec51a7e70c86fde17864f5fb430b7912f274c58b7b64df2a55ca89699eb4bb9910590eb4e4b2cbc4fee5dd7cec9b6525ee802969be953451459a1f8b7ecd05a38a8b62badba2815a4215c19ef21c2dfc6726f1f9dbd45d4ef7dd0cc18f9c01654cd4856a6c610a268a946775a5b392c913d1365f1dc8d65b79f3d06022aff74554d03d9c190955345287128c8b60b33696fec52658cfc2e5c68fb6f34b6f3debce37abdddadf1ad7975ee0198ac63968ae3135cef5cdc70bea2720152fb47ad83c37cacf0d5abe1f4b434069096d301a590eedb9d6384ee3114bddc1304e2d8863371e0de920b6d8d8063b8981224f8b6a162d4491d074c81c8028b19334b2ddb11b8d07d628b29d81e3f62ccb6663971ccfc8df8a2b5870590ac9db0e91eb60197a5118ecfcf92cf4740929ad73b5688d3505bcf6a8b040047d50d3b18972814a4dbb977ee805b379b8bcf2da09af20a3ecb07dc019a7349780685a61f314546b9160c3883f5b7b0b04eb89fd38052599fc7e224dcf1b17af5afe420f71808d5da5bf641b064bffbbb673425cd1bcd690c7f6404ab47c8bb5a1ebe31f44e292b659c8cf9d17fc22ed5300295450b0cfa789601df8f45f3b2d3e6271f551462abce3ee30d988b00ada1de2badc13db769de1886870a5dec55c6b70ea5a93a3c9087b28d47345ede263a1ad582d5f4018c4f1fbba5bc77fae5eac0578040000",
    ],
    [
      "ETag",
      "pcR1AZs9s6CnZrkpBhyMDA==",
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
      "Tue, 26 Oct 2021 14:49:08 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-47-1635259702250"
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
      "00000002ff8d92dd6e82401085df657a8b895afc298917da624b82d6025e348d312b0c88051677178d31be7b67a9b54ddba4bd8199e19be59c0347784d8b082c58a5c9b64271b84a503de9c24359654ad2ade485443000154b881c571bf5fc342d4a7bdbdfeda376680a7fbf1f0c8890e11a7306d611e214b34882f5728482e5486b21cfaabc58d69d01ea50eaa11f78cef49efa9c47ba9fce5d7738726d381997c58829b6acf97fac2d4e066cf8cac3180516216a2da5e01b0c95a36d4a9697193624af4488126ab87e90085e954c70dea049c3ec355addeb4ebb73d36bb6db9d2681190f994a7941ecdc277da0b86299c7f7e412ba0488ba24c3717dddd1388d6a23ba74a641d7acf57d05485a9c66b8fc1b24bd6b469fe1033b47f09d6339af0a75a1c6eee3f0b7e328d3cfa3ee8681fd83908a92ba208133b1fd603899696e71f63e3a289433c12948893ac356d3ec777adde67bacb75c474defb194a8d08090d1dff1902ab06296493cbd01c358d4477b020000",
    ],
    [
      "ETag",
      "FujtYQNnpEq8vwd2c4rSww==",
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
      "Tue, 26 Oct 2021 14:49:09 GMT",
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
          "SELECT `purchase`, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`, `purchase`, `stamp` ORDER BY `stamp` ASC",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-48-1635259702250",
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
      "fd",
      "6f",
      "9b",
      "30",
      "10fd5790f7cba6e5837c4048a4aacb52d632a5a423a455354d890d36750b9862932eaaf2bfef80a46956a9952205fbde7bf7ee7cf78c1e781aa211223c7a2c68bef9742f086a20aa7004b7d67d4cff9e3ffd1cde3f7ebd5b2f2e92acfb958d4f4e00c14b96c44916d3a614451e50395acc5b512e8a0ce7423441a8d9b79a1db367748de140ef760d1d7892c66ccad30760df2995c951bbbdcfdd8a8488628a332e5b81485eeedbeb6e3bcbc53d0d946c1fa76c4316d97e3fe9692c02acb8484f16733050489a2f6982790c160ecc907c3b966e719cb42200af79407110882255a52d900844ca7854e4952a1a3da3cae6ab0f34b7a7f6c4d7561948dd6149570df8ce05e3315df270a561a92d97d983f6c39b5d1e5072a5dd5cd89ead1d831d575bb8ae3df7b5cfa75fb4736fb6b8d2bedf1e611ac7a9a4825256dacc3bb3bd0ababb18cf27603fa452f1b432ef6312d3d2f8aebfcedb572d095881701d5c0e7413772c7d48181904ccea1984e994108b0c0cdc237a30ecd37e4828069e2ad52b164e456a99a6a50f06618730d6eb3062308351c2023ae813d30a756c0db1d5a31db46da0a79c2b7ac6652624af9b8c6e3cc7b797beb7702763dfaeca60b888d5596dae2ce2b54f054502e89dbab665940bc854be98e3fab6379ef8ceb55d0fc9944638d8cc1f614c188e250534ce714215cd2f45084d4357b3b9e33b33773c0546f5f2577b8444a3dfcf0782bfc9aa2eabea1f8d3d6f7c0b1c9ce778f35f0c7c987db4ddbe4a778de3a28254f8ea54ebafeb002a5b7638758f4efda39389b67fb6f06b20d8943a33fab5b0bd5b545f7994d19ca6c1c73301e02af0e1c2efb70fb0b07f900666517198c0409649829cd693c893aa941dbb3f34fa5d548173f526665ac37dcb4b8d5291263455bb8aeaedab9a58860a",
      "f90282200c90ebb8e710fd07609c80cafd040000",
    ],
    [
      "ETag",
      "8jlexGwJ9jq+hvUHmp2+fA==",
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
      "Tue, 26 Oct 2021 14:49:09 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-48-1635259702250"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffad52514fc23010fe2fe7eb96c00451121e4017c420e080274348378e31d8d6da769049f8ef5e8741c98809892f6defbeef7adfb5df1e3651ba8026f851f891a1cc6f42d46fe6e0a1ca62ad68133c550816a066213147eeb8916c7793e1baed3fbd6401be7a9f326cb588a18215260c9a7b5846182f1434dff790b204a94c643258b1e2229d0b93194fbcdea04b71c217261e4cfbfd76a7efc2c13a55cde762f353d11b4cdcaeeb5d2a991d2c5873dfc3254a4c03342284e46b0c74cfcca7582262b4152719a8a020174028792698e4dca68c5dbbb7ab77b775a7fed0a8384ebd42c498074c473c25ee744cda4073cd628fef683ca8d688218b338dba2cd62de5db82ba158398a85ae8fb8d8f90c913ec94e04e9ca18f52e6274eadc4194a96867ff538d7506e72a6a17c7f59c3f52dcef1728f7f7fa6eb255e7ac6d9f72777728d6a24393946a1314be5689c476ecca4c9645a666841c0c8f8cf913ec6872fdb1a548355030000",
    ],
    [
      "ETag",
      "PES7mvwTOjAbDJuceMRzrg==",
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
      "Tue, 26 Oct 2021 14:49:10 GMT",
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
      "30",
      "00",
      "00",
      "d0bb642d4ea12ad25d03a6d8282af2096e1888d10605430025767af73abd467d7778df20a394354dda5e4eac026f40658635a4432ca6101d8fa258428409a9e3ddd9b00f508b3c54d4e731bcaf1a2810f7b4b2c77ddb99d20df1b276cdb9da599f917e88e9256ea736f1dd8de16f03479b1d85727dba5caf75fdc57149828bb2886cb9cfe3531a78f3b4b0556a77fcca835ec224373f482fda0a65a6ae7c8aaa5112854eb7eac4c629f349a913bf1a8577f405333bdb86242f66de75a7e8dee20bb4b94f48c557dc28e142f66ef2eedfda5ae3585478f8f4f47f810160bde09235297f6c7f1d5bd600fcd54f5b25d8e33f64996412fcfc0245911fda19040000",
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
      "Tue, 26 Oct 2021 14:49:10 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-49-1635259702250",
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
      "00000002ff85536b4fa34014fd2b64f6ab6de983be92666d2a6a9342574a359bcd86cc4c2f380a0c324377d5f4bfef65b0aec644c30798b9e7dc73ee8367722ff21d99122692870acac76f77929113029a2678fbf4b7f2d8feeae9c21be40fc5889eabf0be7b359b2142d42c45b32285969255c9414db79b7652caaaa0a5942d4cd41a4c5add61dfe9399391ddeb3936f214a4f14ae4f7c8bed5ba50d34ee7a8dd4ea44c52a085506d2eb3d7fbcebed7294a79075cabce7bc90eaaa8cee7a2df53c9a916329f6d3768a0525046905191a285ffcc1d3b7d9fba2d68d64e10bc171c28e7b2ca756d0b537099c722a94a93954c9f89b1f9e6836cdc95bb082d2ed32acba39c667062eda8a6917e2cc03a0fd69eb5f4cfd781370f976b3fda2c2e5d6fde5eac575bcfdf5837976ee05a9ab2140cd79a59a7e6e4e301f577a0b4c88d7a585fd7ca2f0d5a7e1c4b4d4069054d301ad943da1ddb1316b3118fc77d87c5363036662387f699cd270318ec1850e41951c3a2b9ccc703bbefc06810419f413418321e3118f7236c0edd51bb6b0f2736399c903fa5d07026542195683a446e8265e84661b0f517f3d03525c4b44af55963ac2ee0ad478d0522e8939a0e75544854aadbbdf44337982fc2e5b5db4c780509e58f9b079c714c530588a625364f43e9c91d368cf873cf3d43b099d88f635091e9af6752f7bc76f1a6e5aff4100758dbd5e64d3661b0f42f8c9d23e29aa69581ec9b0f52a0e55bac0d5d1f7e231297b4c942aeb66ef093345701c45042cebf9e26824de0cb7fedb8f888c5d54719a5f18cbbc3552dc24b68764898728f6cc7ee4f1c62c0a5fe10c3e7d8b53a479d1132c8f54b45cde263a18d58a55e4118c4f1fba65b877fbad4b81078040000",
    ],
    [
      "ETag",
      "zxuMbvQzGM4nqp7aFsTk1Q==",
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
      "Tue, 26 Oct 2021 14:49:10 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-49-1635259702250"
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
      "51",
      "53",
      "82501085ffcbf68a336a8ac98c0f5696cca019e253d3385758880496eebd94e6f8dfdb4b664d35532fb0bb7c7b39e7c00ed669118103ab3479aa506e4f12d4b7a6f0515599567c2ba9500816a01609931b4dee783327bfff9af43ab2b7f6567dfb76306042850f980b707610a798450a9cbb1d1422475e0b29abf262597716e86d6986f3c077a7d7dce714997ebaf0bce1b93782bd755c8c8416cb9affc7dafdde82475af918a3c42244a3a594f488a1768d4d25f232c386a24a86a8a086eb0789a4aa1492a8c19346a7df68d9a7dd76b7df6bb6dbdd2683198542a75430bb98b33ed0a445e6d30bbb049b0159976c38aeafcf3c4ea3da8829dd6960776a7d5f019616a7192eff0659ef83e0cff0811d22f8ce899caa421fa92bef66f8db719ce9e75197c360f483509a933a22813b19cd83e16466b8fb83f7f3ad463593c4412a3419b69a9db36ecf6ebec77a41266a7e8fa36585168482ff8e71aac18945a670ff06204d6fd07b020000",
    ],
    [
      "ETag",
      "xtoIHxSoR9zg74r7kLb96Q==",
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
      "Tue, 26 Oct 2021 14:49:11 GMT",
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
          "SELECT `purchase`, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`, `purchase`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-50-1635259702250",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8553fd6fda3010fd5722ef974d02f201091f52d5b19275d16868436885a6091ce3a46e439cda0e15aaf8df77494a81556a252462df7bf7de9def5ed023cb56688022963c15546cbf3cf00835105538815b9598f3edb34dcde188ebf96f6f331ff5a63767678060254be2759ed2a6e48520540e66d35622789163c1791312356da3693a6ddbb2fb5dc3b26c037892a6f198658fc0be572a97035ddf6bb712ce9394e29cc916e1ebb77b7d63e9b9e00f9428a99f4aeaa022f58f45cf534eb0623c3b9b4dc14021a958d035662958383057d1f7d3d42d86d7ad04c01b4628268417992a6d410ac2b3982585a8b2a2c10baa6c1e7da0a93b762f426d9943aa7b2ce9b201df82c72ca50bb65a6a586a8b45fea8fd0c265707945c6a77bfdcc0d54ec19eafcd7cdf9d86dad7f36fda6530995d6b3fe62798c69114185c51a95856d90b7194d2d2da6b07bdf7ef5612b0026a1d5c740d079b3da31fc55197c4bdb61dc5068da25ed4b5713b3248bf433bab8862e0a9327bc5c219cf0ccb689b510f3bb8e3184ed4274ebfdb36faed5eafeb10bb83c98a3a6dc3b1d0ae819e055374c464ce25abdb88ee022f74176130f32f86a15b9511e32255a3da5c59c4b14f054502e883ba76659471502adfc4f34337185e84dead5b8fc19826986ca74f3008314e25053416784d1515577c054d43d793a9177a137f380646f5b6d77b8444833f2f0742b8cdab2eabea1f0d836038070e16026fff8b810fa78376bb23b95b9c1615a4c257a73affa60e20136a399cac9353e7e4e4a0dddf1dfc1a0876a1564637333798a3fa2aa0311534239fcf0480abc0a72bbddf2fc0c286818c5470860924b2142182d693c8d65529af6cdb34db5d5481857a17b33af6bee5658e32235dd34cbd5654ef57d5c43254c837100461807ccfbf84e83f913c5dd4df040000",
    ],
    [
      "ETag",
      "tg1Yyw5e1ADo/pKIvYD8SQ==",
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
      "Tue, 26 Oct 2021 14:49:11 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-50-1635259702250"
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
      "85",
      "52",
      "5d",
      "4f",
      "c2",
      "30",
      "14",
      "fd",
      "2f",
      "f5",
      "91",
      "2d19d3f941c20310824b08c28407358494ed3206db5a6f3b6521fc776f8bd118145fdade7bcefd3ab77bb6cdca84b5d8324b5f2bc0fa22053d318f0854956b459714a502e630d03c25e6ad8761a37ac278bad96d93dea068ec82e749bb4d0c15afa1e0acb567ab0cf244b1d6cb9e95bc000a9315c66b6e13e95a1acfe3340a4703b20b91187b341b0e3bdd619f1d9cafa8c5426ebf23c2d1b43fe847bf85cc0f0edb8865042b402863304d48141b887568e653bc9039b84a501ba098255b204551498e42b8e47103cf6d5e5f067e7077e3f97ee011311731d79928893b7ba4de98169ae7917857460c22a07dd2a42b7bbe91bb23a9989dc358be6def6fbcf90f7e75823f202fd37309ba79054b40accf2439e59ce61903c73373fc806d85f9a73edd5a831aa320b115189dbda3e63d61f6a0693f1a2b7058cce9cfdc67fa681f3e0000f7267290020000",
    ],
    [
      "ETag",
      "80rI+uYrcTjxkdCGm+x5ZQ==",
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
      "Tue, 26 Oct 2021 14:49:11 GMT",
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
      "000002ffedd34b7282300000d0bb642d4e0449a0bbf8a38a46ab56291b0642a080341150089ddebd4eaf51df1dde370819e3751d34a2e05fe005a850b7876ce84a6bb24873bb4ec6a18fa13cb9ac0f5625ca682c5242f4f5dd23cb329944ad2f1437701167470baa694b238da40e19d94c8b1a48b7c7feb03f30edd2371bfaeec7f1828afbb5403ea689eacc59041d7eff843df66e1652d2d07717babcae65b8271dac6fe6ab89b6029621765499c1110b5ae8746fb9956c2b579fafbabc71bddd8791ce4a8ccf18b1d8833aaaf2f349cc37e4c0319923b3f07034de69d39114e3e1d3d3ff0506807732ab781d648fed8669db03f0573f6894e48fff131e56bc023fbfbeb8948219040000",
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
      "Tue, 26 Oct 2021 14:49:11 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-51-1635259702250",
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
      "000002ff85535d4fdb3014fd2b95f738daa669d33695aa5195302ad1742429d5344d91eddc04431a87d86162a8ff7d370e652024788aed7bce3de77ee489dc89222133c244765f43f5f8e55632724240d30c5fbf32b11b2fc3c5cdf8ef666b57bbc5151bb36c3e478468588aeecb1cba4ad6150735db86bdac9275492b29bb98a8eb0cba83f1d0b11d7762d9b663214f419e5e8ae20ed9375a976ad6ef1fb57b9994590eb414aac7e5fee5bdff60f7cb4ade02d7aaff56b28f2aaaffb1e8b75c72aa852ce6db100dd40aaa18f654e468e13f3361a76f53f704ddf732043f080e94735917bab18529b82c5291d595c94a664fc4d87c7520a177e92da30e9779bd2fe282eee1a493504d63fd5842e73cd8ac3b2bff7c13ac17d16ae3c7e1f2c25b2f7acbcde576ed879ddd8517781d4d590e86db99774ecdcdc70bea27a0b4288c7ad43c37cacf0d5abd1f4b434069056d309e58633a985a2e4bd984a7d3a1c3520b189bb2894387cce2ee084609038a3c236a58b490c5d09e001bb93c4eddb1138f123b89e9d4a5b19ba483c4e23060ee901c4ec89f4a683813aa944ab41d22bb60157971146cfde522f24c0929ad737dd61a6b0a78ed51638108faa0a643131512959a76affcc80b16cb6875edb513be848cf2c7f01e679cd25c01a26985cdd350ad65820d23fe62ed9d21d84cecc731a8c8ecd713697adeb878d5f2177a84036cec6af3256114acfcefc6ce11714df3da401eda0329d1f20dd686ae0fbf11894bda6621575b2ff849daa70052a8a0e09f4f13c126f0e9bf765c7cc4e2eaa38cd278c7dde1aa11e115b43b244cb947b633984c6d62c0957e17736debd8b526479311f650e8e78adac5c7425bb15abd803088e3f74db70eff00710a781078040000",
    ],
    [
      "ETag",
      "+biW6CSAh6zOU2rWAQb6bg==",
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
      "Tue, 26 Oct 2021 14:49:11 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-51-1635259702250"
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
      "000002ff8d92dd4e83401085df65bc8584d6d22a492fa8564bd25f4a1313d3345b18281558dc5db44dd37777166b356aa23730337cb39c73e0004f69118103eb3479ae50ec2f1254335df828ab4c49ba95bc900806a06209913b6f16f9bd9990f6435e4dbc4eb06b8e07b36e9708196e3067e01c204e318b24388f0728588eb416f2acca8b55dd19a0f6a51ece03df1bdf539ff348f7e3c570e8f6867d381ae7c58829b6aaf97fac2d8f066cf9dac7180516216a2da5e05b0c95a76d4a9697199a9257224409355c3f4804af4a2638376962da0db3d1beb49bf675c76a366d8bc08c874ca5bc207631277da0b86299cf5fc925b40910754986e3fafa42e334aa8de8d21b07ed56adef2b40d2e234c3d5df20e9dd30fa0c1fd82982ef1ccb7955a83375379cb8bf1d47997e1e75eb06fd1f845494d41909bc517f1eb8a3a9e69627efbdbd4239159c8294a8336c58ad2bbbd3b6de63bde13a6a7a8fa3448506848cfe8e41aac0895926f1f806ee5a49157b020000",
    ],
    [
      "ETag",
      "xIQdRBQrs5XmuOI7Tx2NHQ==",
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
      "Tue, 26 Oct 2021 14:49:12 GMT",
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
          "SELECT COALESCE(AVG(`amount`), 0) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-52-1635259702250",
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
      "85537f6fda3010fd2a91f74f2b5148c26fa4aa6334eba2d1d0860042d3048e7349dd86388d1d3654f1dd77494a5b56a9959082fddebb7b77be7b220f3c09c880f83c7acc21db7db9173ea9115034c2db85b70b5802f3c564cbf85fb371bd14f6cfdbf37364f04225e9268de14c8a3c632007b3693dca449ed24c88330c74d636cf8c4eb36db6fb5ddd34db3aea24c4e198270fa8be532a958346e390bb1e0911c540532eeb4c6c5eee1b5bb39166e21e98928de3940dcc221b1f27bd8805a38a8be47c364503b9846c051bca63b4f0aa0cfcafc7a1eb9c6eea1192b79c01654ce4892a6c61082692904779564625832752da7cf3874cadb135f2b4d16438b6a623eb6438bf3a59d34d11637d5ad3f4538d4aed7051d3d6585ec86358f1605d20ab55faa07d7727d788a0993b2a41aeb5c50fcbb5b463b2ed6833c7b1a69e767271aa5db993d98df66d79c441c30148c593d2ae47fd180aabcf1db5dfbf6321a00a7356e0aaab77a8d1d3fb7ee87759d86bb6fd5007dfeff9dd366dfa3aebb7a015f84051a78ae8a58a2622e907bd26508aa0d167b4056d8090fa5dc36066d8a20133c068f69a0623fb1af9937105975ca642f2aaad64e1da9eb5f2dc99331a7a56594648f3585d56e68a22defa545824923ea86b5fa05c60a6e28d6cc7b3dce1c8b3e7563516638828db4d1f7130421a4b4036cde8061464d722c0a6919bc9d4f6ec89331ca3a27ceb9b034392c1afa75781b74bcb2eabf24b86ae3b5ca2866619ddfd87a18f4e8becf76fd2cd699c9794925f9eaaf8db0a2006d6f27a328f4eada35387ec7feff15723b81b5566723bb3dc25a9ae5c082183847d3e13482e814f57fcb06fc8c58dc33452e1192790c92209cba09a44be294b7956b7cd4eaf454a72a6de61ddbe7e687911a388081b48d47345d5be954d2ca05cbe9010c401726ce70ad17fa06e6613ef040000",
    ],
    [
      "ETag",
      "WTydcneVWOvcix2/MYoIKQ==",
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
      "Tue, 26 Oct 2021 14:49:12 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-52-1635259702250"
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
      "ff6d91dd6e82401085df657a59680005d4c40b6d693521da52bd6a8c5971441458babb688df1dd3b8b8dd6c4b9d89d9fef2473768fb04d8b2574609126df158ac34382ea432711ca2a5392ae921712c100542c2152046d6b3b1e3bbefbe8ad5f9aadc18fbb9becbb5d2264bcc69c41e708ab14b3a584ced7110a9623c958ceab4211a40ea5ae5fc3716f4265ce97ba1c4dc3b0d70f03381917c97c5e6eaf82e16812bc05d13dc9ec64c0862f225ca1c02246bd4129f8066335d4e624cbcb0c4dc92b11a3841aae0789e055c904e726754cd7316dafe13a6edbb71cc7b508cc78cc54ca0b62a79fb41b28ae5816f13d79830601a24ec9e6aa3e77d4b69f5abe67fd8b466d4a8f9c7ad75bd8bf8eed3b63d7f66ee20237353cfbdba87f5028df05277b12b533ebecf2996be78a5e44890a0d88197dd12055e7faf40b7aa71ba4ff010000",
    ],
    [
      "ETag",
      "rE90kOO275+6hD48Hx5vTw==",
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
      "Tue, 26 Oct 2021 14:49:13 GMT",
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
      "edd3497282400040d1bbf45a2922327476cc3288a2458b6e28689a4112c40699acdc3d56ae11dffa6fff13c41893b68dba5b456af009a6780519cc388da4187981b59338fa231ce52cb063c9d67912ee24ada8c214d55764c6333e1fa877d71485a2adca06dbc79d73c24d3864ee10b4ab7e12a6894f109137816e062ceb2d87e1c8de507fcd954eaf7a4b1bb3139a1b7d892fbc50a8c7d4956b94871f02140ece16ad2f52ac8a9e3cf38963efbf6895bec2a832f27b7226dc4d29c27e8d5432d0a53fba42bf2b61f6103db3cb6655aa28b6f6dfc4cbacc32ec030f1b161306f6fff175800323625256d54be6ee7780817e06ffda89b1af2fa5f21312514fcfc02ea71641c19040000",
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
      "Tue, 26 Oct 2021 14:49:13 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-53-1635259702250",
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
      "00000002ff85536b6f9b3014fd2bc8fbda248447f390a2354ae91a2d211b21ada66942c65ca85bc0149b4c5195ffbe8b69ba5695da4fd8bee7dc73ee8327f2c0cb844c49ccb3c706eac3977b119333028a66f82a6801d6a1b8776cefe1bb45c78563a675369b2182b72c498b2a879e144dcd404e77db7e568ba6a2b5103d4cd473eddef0dc762d7732322dcb359127214f57bc7c40f69d52959c0e0627ed7e26449603adb8ec3351bcbc0ff6d6a0aac53d3025076f2507a822071f8b7ecd05a38a8b72b6dba28146421d4141798e16fe3393f8e26dea3ea7453f43f09e33a08c89a654ad2d4cc14499f2aca97556327d22dae6ab03d97a2b6f111a4ce44d514625b6f1cc48a8a2913a54605c059bb5b1f4af36c17a1e2e377eb45d5c7beb797fb159edd6fed6b8bdf602cf5034ce41738d9971a16f3e5e503f01a978a9d5c3f6b9557e6ed0f2fd585a024a4be882d1c83ca7c3b13989d378c4d2b1edc6a909713c8e472eb563934d1c70921828f2b4a866d15294f1706239c3218bdcd419470e8c5844274e123198406adb74327687e47846fed65cc125979590bceb10b90d96a11785c1ce5fcc434f9790d22657979db1b680d71e151688a00f6a3ab6512e50a96df7d20fbd60be0897375e37e11564941db68f38e394e612104d6b6c9e827a2d126c18f1e76bef12c17a623f4e4149a6bf9f48dbf3d6c5ab96bfd0431c606b57e92fd986c1d2ffa6ed9c1037346f3464df1d488596efb036747dfc83485cd22e0bf9b9f3825fa47b0a20851a4af6f93411ac039ffe6ba7c5472cae3eca488577dc1d265b115643b7435c977b62bbb66dba44836bf52ee60ccd53d7da1c6d4628a054cf15758b8f8576628d7c016110c7efeb6e1dff01b2dbeaee78040000",
    ],
    [
      "ETag",
      "oame2ymj43EkK2a8m40frg==",
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
      "Tue, 26 Oct 2021 14:49:13 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-53-1635259702250"
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
      "5b",
      "4f",
      "83",
      "40",
      "1085ffcbf84a935ea4b5247da85a2d09c55ea8899aa65961a05460712f35a4e97f7716b51a35d1179819be59ce39b087a7b488c081c73479d628aa9304d5cc1473943a53926e252f248205a85842e4ddedf8deefa73eea4a2455ecee3c5ff76683011132dc60cec0d9439c621649701ef650b01c692de499ce8b75dd59a0aad20c17c1dcf5afa9cf79647a7fe979c3736f0407ebb81831c5d635ff8fb5d5c1822d7f9c638c028b108d9652f02d86ca353625cbcb0c1b926b11a2841aae1f2482eb9209ce1b3469d89d46abdbb1db76bfd76cb7ed2681190f994a7941ec7241fa4071c5b2397f2197d02540d425198eebeb8ec669541b31a5eb07ddd35adf5780a4c56986ebbf41d2bb61f4193eb0f708be732ce7ba5047eacabb19fe761c65fa79d4e53018fd20a4a2a48e48e04e468b6038991a6ef5eefdbc5228a7825390124d86ade6e999ddeb36df62bde0266a7a8fa384460b42467fc73855e0c42c93787805a062d7d27b020000",
    ],
    [
      "ETag",
      "YVHZN9iNeuyrgyfIvLNu7Q==",
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
      "Tue, 26 Oct 2021 14:49:13 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-54-1635259702250",
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
      "02ff8553614fa34010fd2b64ef8be6da022d50dac478bdca7924952a054d73b9b4cb76c15560915d348de97fbf01acda33d1a4099d7defcdbc999d7d46f72cdfa0318a58f250d172fbed8e47a883a8c4099ccabba7d1d2bd51bfcf2eb4a72b125d87d89b252727c060b54ae0ac486957f0aa24548cc3452f297955e092f32e24ea9a4657b70666df1c0db57edfd44027681acf587e0fea5b290b3156d57ded5ec27992525c30d1233c7b3d571ffb6a51f23b4aa4500f4baa5045a89f173d4d39c192f1fc245c80814ad0724533cc52b0f0a6dc443f0e53f718ce7a09901f19a198105ee5b2b6052908cf6396546593158d9f5163f3dd1fb47066ce3450a6f3d00b8ed638abc5eb63050b651f749435f414b394aed8665d23ab5571affcf2e7178080835b2ca8582b37bf1ddf510ec9aea7849ee72c02e5e8f45839f7e7e1a5f27379c001971b2a24cb1b8f018e525afb7b19a3fbf1f26a019650b3055743cdc2baad8da2381a92d81e9851acd128b2a3a1890791464606353611c5a09375f64685739eeb866e51c3a0038bda233dc2361de0d8b02c62dab61963a38fedd168139b68d7414f2593f48c89820bd6ce12ddf86ee0ac023ff4a693c069da887195cab3d65cddc47b9f129a04d2277ded6a9471a8545f8ceb058e3f9906eeb5d3eec28c26986c170fb00d314e0505362e7146252d2ff80686862ee70b3770e7de64068ae6822ff70c81c67f9edf04c1b668a62c9b2f9af8fe64091a5c9678fb1f063e2c03ed76efca5de3b46a280dbf89dafc8f2d8074e8e52dea1f44c64164a1dddf1dfc3a081e445b195d858ebf44ed914f635ad29c7cbd13406e802fdff5fe9101179e1994111262d84022ea22a4a4ed26b2ac69e5456d1ada50470db9941fb0beaeef475ee7a833d28ce6f2a5a3f6913543aca14abc92008405f25cef1cd07f76d25b18e4040000",
    ],
    [
      "ETag",
      "tjw9YIW/+LM0wQcbVUaNLg==",
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
      "Tue, 26 Oct 2021 14:49:14 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-54-1635259702250"
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
      "50",
      "4d",
      "4f",
      "c2",
      "4010fd2fe3d136c142319070b08600118916391942b6655a0b6d67dd9daa84f0df9d2d869878f1b23bf33eb2efed11f645bd85212445fedea0395ce5c8cf6e88d136255bb934d516c10364958b7239f932d3b81a3ce8248966fbe23aca1eb37c3412854ddfb052303c425660b9b5307c3d42ad2a149baaa8a959447cd06e9f2d5ec693712c40455b072c56f3f95d341fc3c9bb98361bbdff97657df26047498c191aac537419b4a11da63c73f5acaa7489bea5c6a468a115b7446ea8d1ca10f982f861cfbfe977c3201cdc768220ec88b0a4547141b568574bc9064cacca983ea51d744560da518a66edf92170d8767053d046fbcdf52fdccd1fae7be17a8e5bff3c161d18ed9321496ed185ee9c0bdc932bc552964d831ea44afe7f5af0793f7d03a95b07a3dc010000",
    ],
    [
      "ETag",
      "SGxrHRm9KpbbBIki+BfMfg==",
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
      "Tue, 26 Oct 2021 14:49:14 GMT",
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
      "30",
      "00",
      "00",
      "d0bb642d4c4440d29dc857b11a3468dc30948910a918f928e0f4ee757a8dfaeef09e20495356d771732d58093e409f28484ee5a5304c27cba8f539eea4a2346191a9f54d8797854e889a97cd7929fcd32468bce58e3bbd1bcc85b589d231553d2134eb14ef9c4ecf0ffb0843bb152937424eb390348ed0c9fcfbaba4d83de3fc1e2c7c9a3cae4ebfd91247bab83171a9b84ffcd97a7bc408d92da25e1b858d98b68fc19c715caa70cf3c58c4777c136b25986683522be395211988722a6d7b6893a887d5daba2a838d6dbb7657fc70d43cc61751ebc96f6fff171801d6095eb13ae6afed130da111f8ab1f37bd60afff264b2a56819f5f22cb135d19040000",
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
      "Tue, 26 Oct 2021 14:49:14 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-55-1635259702250",
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
      "0000000002ff85536b6f9b3014fd2bc8fbda2484474323456b94d205a9211b21ada66942c65ca85b822936d9aa2aff7d17d374ad2ab59fb07dcfb9e7dc074fe49e5719999294170f2d348f5fee444a4e08285ae0eba280e54d5817b5f7b7e0cb5b33907b0f8ad90c11bc6349baab4b1848d1360ce474bb19168d686bda0831c04403d71d8c4f6dd772cf26a665b926f22494f915afee917dab542da7a3d1517b58085194406b2e874cec5ede477b6b5437e20e9892a3b792235491a38f45bf968251c54535db6ed0402ba1496047798916fe33b3f4fc6dea21a7bb6181e03d674019136da53a5b9882892ae745dbe8ac64fa44b4cd5707b2f1affc456c3051b6bb2aa9e80e4e8c8c2a9aa8c71a8ccb68bd3282f0721dade671b00e93cd62e9afe6c3c5fa6abb0a37c6cdd28f7c43d1b404cd3566c6b9be857841fd0ca4e295568fbbe74ef9b941c1fbb174049496d0079389794ac79e7996e6e984e59eeda6b90969eaa51397daa9c9ce1c70b21428f2b4a866d14a54b66d671665569266a69538de699e78631b4f96091330616c3b0e399c903f0d5770c1652d24ef3b446ea220f69338da868b79eceb1272da96eaa237d615f0daa3c20211f4414d872eca052a75ed0ec2d88fe68b38b8f6fb095f4141d9e3e601679cd35202a26983cd53d0ac44860d23e17ce55f20584fecfb3128c9f4d713e97adeb978d5f2177a8c03ecec2afd259b380ac26fdace11714dcb5643f6fd81d468f9166b43d787df88c425edb3901f5b3ffa49faa7087268a0629f4f13c13af0e9bf765c7cc4e2eaa38c5478c7dd61b213610df43bc475b947b6eb4c1c8f6870a3dec53cc73e76adcbd165841d54eab9a27ef1b1d05eac952f200ce2f843ddadc33f705d1fdb78040000",
    ],
    [
      "ETag",
      "CgeHWNpgp8xgiHh0Isv8eg==",
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
      "Tue, 26 Oct 2021 14:49:14 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-55-1635259702250"
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
      "83",
      "40",
      "1085df65bc85a4ad8556925e50c54aa4fff4ca34cd1686960a2cee2e9adaf4dd9dc55a8d9ae80dcc0cdf2ce71c38c0635ac4e0c03add3c5528f6171b54535dcc50569992742b7921110c40c536448eefbd64e17a0337942d9174ed6dc78a5ea7bd1e1132da62cec039409262164b701e0e50b01c692de2599517abba3340ed4b3d9c87337f34a03ee7b1ee478b2070fb810747e3bc1833c55635ff8fb5e5d1801d5fcf30418145845a4b29f80e23e56b9b92e56586a6e4958850420dd70f36825725139c9b34312dcb6cda9756cbbaea345a2dab4160c623a6525e10bb98933e505cb16cc65fc825d80488ba24c3497d7da6711ad74674e98f42bb5debfb0a90b424cd70f537487ab78c3ec307768ae03bc7725e15ea4cdd0663f7b7e328d3cfa36edcd0fb414845499d91d01f7af3d01d4e34b73c79efef15ca89e014a4449d61b3d1ee5a1dbbf11eeb35d751d37b1c252a342062f477dca50a9c8465128f6f39316dae7b020000",
    ],
    [
      "ETag",
      "OKEfUAEGATs2rf86h75czQ==",
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
      "Tue, 26 Oct 2021 14:49:15 GMT",
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
          "SELECT COALESCE(SUM(`amount`), 0) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-56-1635259702250",
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
      "02ff8554fd4fdb3010fd5722ef17d0fa917ea44d2b21969500994acaf20142d3d4daa9130c491c6287ad42fddf777128d0218154a9b5df7b77efce777d42f72c5fa329222c79a868b9f972c7096a212a7102b7777f8dc5e2d6724e7f64e7ced54978762f82afd6d1113058ad12382b52da16bc2a232aa6a1df494a5e15b8e4bc0d81dac6a8dd1b0d8cbe3119ebfdbea1834ed0349eb3fc1ed4b7521662daedee727712ce9394e282894ec4b397fbee63bf5b94fc8e465274f75376218be87e9cf438e511968ce747a10f062a41cb25cd304bc1c2ab724dbeed87ee309c7512203fb288e228e2552e6b5b1022e279cc92aa5451d1f409299b6f7e20df9edbb3409b2dacb9edcfec033fbc3858e1ac8eb13a6c69faa18685b6bb68692b282f66295db2f5aa4696cbe25e3bf516178080995b2ca85869d7e7b6676bfb64c7d542d7b5fd403b383ed4cebc4578a97dbfd9e380e1351592e5ca6e80494a6babcf1d75debf632dc0127236e072ac8f70cfd4272426e32836070689754a8849c6061e103d9a0ce9704d28069daca32b15ce794ec9c42443780462c663734449d41b9906a68361a413bd3fe893013171dc43db16fa5332494f9828b8604d5bd1b5e704f632f042776605b62a23c6552a4f1a7375116f7d4a2812481fd4b5ad51c62153fd468e1bd89e350b9c2bbb198b394d70b4f11f6030629c0a0a6c5ce28c4a5a5ef035340d5d2e7c277016ae3507857aebcb1d43a0e9afa75741b0295497a5fa4696e75937a0c1658937ff61e0633444dbed9b745738ad1445f1d5a989ffd800a86ed9eba9bf771aee9d4668fb7b0b9f1682dd6832a39fa1eddda0e6caa3312d691e7d3e134056c0a72bbedb37e0c2c6411a21e10c1318893a4954d2661259a64a79561b8631507f101297f21d66aac82f7b5647a419cde57345cdbea926d650255e4800c200b98e7b06e83f5ef430aeef040000",
    ],
    [
      "ETag",
      "jx5OOhAIFJmHIVDUGksT+A==",
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
      "Tue, 26 Oct 2021 14:49:15 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-56-1635259702250"
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
      "6d",
      "51",
      "5d",
      "6b",
      "c2",
      "30",
      "14",
      "fd",
      "2f",
      "d9",
      "6b",
      "2bfdb03a051f54dc265437ab32d81089f5b6abb6bd5d926e54f1bf7b538713b63c24f7e49c03e72447b64ff22debb24d127f9620aabb18d44c0f01c83255928e027309cc60a0784c4ae5bebd6e86936072489bd3c5611e55ca9ecf7a3d52c8f00332ceba471625906e25ebbe1f59ce33201bcfb0cc1589545568fce03ff7170433dc6a385dfa7e7fe08fd8c9b85ad6eb62ff6b184f17a3c751f09f657532d80e37014420200f41272804ee2054635d4ef2ac48c194588a1024abc535110b2c0b2e104dba31bd9669b75ccff13a6dcb713c8b8429865c2598937639a76c4ca1e26980dfd48db92410f54835a37affa2eb4ec36d776e57dd49334e1df5566b5b0df7fecadb7ff866c3f3ae7453d3ab9f0c834a817c11488524e82ed6a5d7107557456fa04409060b397dca53a22ef8740662d594ecf1010000",
    ],
    [
      "ETag",
      "t3ZWbCMRMzl4NTzSfyt1SQ==",
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
      "Tue, 26 Oct 2021 14:49:16 GMT",
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
      "02ffedd3417282300000c0bfe4ac0ed68690de84a0208a8810910b23181011411245e8f4ef75fa8dba7fd86f704812c67924aa825dc117e80e1f78948cac5a5167595e4e36fb8d9d4b215d59027515415eb3d8853abcf44739766ea89cc6ecc2eecafa0cf5359f8f6ff9f53921f676c65ddff1d65b12e9a905cba0a5cb4518719d2d4e195f3215a910227fded310a5e7c0c8a6552391cfca3e29f7db50a544840fa7dd6a665bf532c34e30b6f79d2c4eae95bac79d31d664d28b18612192c62834df5b85b08c4d13493e8178df52d7ab1f327557965654c37960f858b668a12c476f6fff171800f6acf386f1287f6d9f408c07e0af7e24ba9abdfeabecd0b006fcfc020463022419040000",
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
      "Tue, 26 Oct 2021 14:49:16 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-57-1635259702250",
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
      "3014fd2b91f795b6a14dfa92aa51b561746ad32d4d816d9a22dbb90966691c6207d4a1fef7dd38948190e0536cdf73ee39f79147f247e431191326d2bb0acafda75bc9c809014d537cfdabc475117c9d5fabdecff5727f4133c9ee1e261344889aa5e8aec8a0a564557250e3eda69d96b22a6829650b13b5dc41ebb4df73bbee686077bbae8d3c0559b214f91f64df685da871a773d46ea752a619d042a83697bbe7f7ce7db75394f216b8569dd7921d54519df7453f6792532d643ed96ed040a5a08c6047458616fe336376f63a755bd05d3b45f0bde040399755ae6b5b9882cb3c1169559aac64fc488ccd1707b2f196de2cb4b8ccaa5d1ee5740727564c358df4be00eb3c58afac857fbe0e56d370b1f6a3cdecc25b4ddbb3f572bbf237d6d585177896a62c03c3b526d699b9f97841fd189416b9510febe75af9a9418bb763a90928ada0094603bb4f4f87f688256cc09361cf65890d8c0dd9c0a53d66f391034ecc8022cf881a16cd653e00e60e7a7d27721d3b8910751a0d47c3386249d24f58dc739c514c0e27e4a1141ae642155289a643e42a58845e14065b7f360d3d534242ab4ccf1b6375012f3d6a2c1041efd474a8a342a252ddee851f7ac174162e2ebd66c24b4829df6fee70c609cd14209a96d83c0de54ac6d830e24f57de1cc16662df8e4145c6bf1e49ddf3dac58b963fd3431c606d579b2fd984c1c2ff62ec1c119734ab0ce4be3990022ddf606de8faf01b91b8a44d16f27deb053f48f314400225e4fce36922d8043efcd78e8b8f585c7d94511aefb83b5cd522bc8466878429f7c876fb8ee312032ef59b98dbb78f5dab73d4196107b97eaaa8597c2cb411abd4330883387edf74ebf00fd40ddba778040000",
    ],
    [
      "ETag",
      "zsiXpRJDXs3ZOLyHalobqw==",
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
      "Tue, 26 Oct 2021 14:49:16 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-57-1635259702250"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d92dd4ec2401085df65bcb424502968132e0a229200f2532e88216469a750d876ebee1624847777b6221a35d19b7666facdf69cd31e611ba721b8b08c572f39cac3d50af5c814635439d78a6e9948158205a8d98ac8d7c9661767a36b6fdf99495e196c2bb396bd6f348850c11a1306ee11a21879a8c07d3e42ca12a4b540f03c49174567813e646638f1c7dd4187fa4484a61f4c7b3dafd96bc3c9ba2c864cb345c1ff636d7eb2602396638c50621aa0d19249b1c140778d4dc5928c6349895c06a8a0808b072b29f28c49214a342939f552a576e3d8ce5dbd6cdb4e99402e02a66391123b9d903ed042333e167b72093502645192e1a8b8ee681c8785115376077ead5ae8fb0a90b428e6b8f81b24bd6b469fe1033b47f09d6389c8537da11e7a4fde6fc751a69f47dd7b7efb07a134257541fc6ebf3df1bdfed070f3b3f7e641a31a4a41412a341956cad55ba75e2bbfc7da12266a7a8fab658e16048cfe8ec758831b31aef0f406c474f70b7b020000",
    ],
    [
      "ETag",
      "xSjvipQ+AwGYrl1Nk1YC2w==",
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
      "Tue, 26 Oct 2021 14:49:17 GMT",
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
          "SELECT MIN(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-58-1635259702250",
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
      "00000002ff8554614fe24010fd2bcdde174d104a69a125311ea7d5ab81a2a568cce502dbedb6aeb6ddbabbf5420cfffda6ada89cc99990c0ec7b6fdeccec2c2fe89115311aa388a54f15159b6f0f3c421d44154ee1b47aba9ce187209f99974c5e13e79c18a9991e1f0383d52a89f332a34792578250395e2ebaa9e0558905e74790e8c8b28ffac3816558ce48370c4b079da4593265c523a8ef952ae5b8d7db797753ced38ce292c92ee1f9db79efd9e895823f50a2646fdfb2072eb2f77fd3938c13ac182f8e970b28a09254ac688e590625bc2be3e8fb7eea2ec3793705f233231413c2ab42d565410ac28b84a59568b2a2f10b6acafcf0032ddca97b1a6a33cf3f58e3bc96ae0f352cb55dd0d1d6d051c232ba62f1ba4656abf2513b0fe63340c0ff1e4b2ad7daed4f3770b57db2e76b4bdf7717a1767072a85d04f3e595f6e36e8f0335c6542a5634158638ca685dddeb10bdcf57570bb002cf165c8df421eedbba1325d18824f6c08a129d46911d8d2c3c8874e298d48c238a41a7eaec8d0a17bcb0fa03db897533193a0e19529dc483c8746cdd702c9b266464d98e85b16ea26d07fd114cd133264b2e593b49741b78a1bb0a83a57f3a09dda68d0457993a6b8bab9bf858a7822681f49fbeb635ca3838d5d7e2f9a11b4c4e43efc66d37614a534c368b27d885046792021b0b9c5345c58cc7303474355f78a137f727535034d77bb5634834fef5f22e0837653365d57ca349104cee408385c09b7f30a8630823d87eb0bbc159d5501a7e13b5f99f5b00f5a197f7c8d88bccbd6888b6bfb7f0e920780ead33ba5ebac11d6a8f029a50410bf2f54e00b901be7cd5bb27065c7864602315c4b08144d62644d0761359deb4f2aab64686d1fc27282cd4276c605abb91d739ea8c34a7857aeda87d62cd106ba8926f240061817ccfbf00f42f5c9354b9e2040000",
    ],
    [
      "ETag",
      "uqJMajRmM4JisQc9Fc2g4g==",
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
      "Tue, 26 Oct 2021 14:49:17 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-58-1635259702250"
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
      "6d515d6f824010fc2fd7573088e057e2835a6b4d88558a2f6d8c3961a128b07877d81ae37fef1e36b64dfb72b7b333939bc99dd93e2d22d667db343954204e7709a8a51e7c9055a6245d25161298c140f18494c75e30be9fe647e7237282787158c9c34b7b39189042866f9073d63fb338852c92acff7a6605cf816c3cc7aa502452a752e307ef691810cc31d270bef2bce1c89bb08b71b36c36e5fedb309b0793e9c4ffcfb2be186c875b1f62105084a01394027710aa992e27795e66604aac440892d5e29a480456251788266d4cb76b36db2dd7767b1dcbb65d8b8419865ca5589076f54cd99842c5331fdfa91b6b9140d423d58cebf3486babd1e9d63534b0eb743fe966c3b16f74f30ffdcbed687afdf5eae8a4402e045205093abd756d3246dd4e516b252a3058c8e91b1e5375c5974ffef0cc1ee3010000",
    ],
    [
      "ETag",
      "v9TCDGmv4xd4TfPqUsqZ6Q==",
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
      "Tue, 26 Oct 2021 14:49:17 GMT",
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
      "4b7282300000d0bb642d8c02a2745705520bd8a0944f360c60e43b900418a09ddebd4eaf51df1dde3748b28cf47d3c743569c10b5812491333d1a2fb8399e73b2dcd3b0409dbef51ec7b383794430635e456034321ede1faae5fb062850afff00bfaa660b7f1c37a8ba2d364141baf63d7c886beffb5aea4a23c5ffb31c02593ef4255372e721864737feee3f2e418b375d9989bd6538be8c8a40baa24d660af19de214e77bc1e53746b783a0447d5306f6d21a8e1ebe8a993e94ab2e3cbad9eed4c9b366d6c04ebe953e65a6853fdda767ce11cc38c46962238f6283e3dfd5f6005c84c4b4e1ee71edbe5ada6adc05ffd78582879fc3f9084130e7e7e01d866edf619040000",
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
      "Tue, 26 Oct 2021 14:49:17 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-59-1635259702250",
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
      "2b",
      "c8",
      "7b",
      "5c1368124a8814ad514a974809590969354d1332e642dd02a6d864abaafcf75d4cd3b5aad43e61fb9e73cfb91f3c917b5e266442629e3d34503f7eb913313921a06886af855a9c6d7270ec82cff7aa5cfc856bf3ebd5748a08deb2242daa1c7a5234350339d96dfb592d9a8ad642f43051cf767ba767437b60bb8e3518d816f224e4e98a97f7c8be55aa9213d33c6af73321b21c68c5659f89e2e5dddc0fccaa1677c09434df4a9aa822cd8f45bfe58251c54539dd6dd14023a18ea0a03c470bff99497cfe36759fd3a29f2178cf1950c64453aad616a660a24c79d6d43a2b993c116df3d5816cbd95370f0d26f2a628a3921670622454d1483d56605c069bb5b1f42f37c17a162e377eb49d2fbcf5ac3fdfac766b7f6bdc2cbcc033148d73d05c636a9ceb9b8f17d44f402a5e6af5b07d6e959f1bb47c3f969680d212ba60e45867f4746cb9711a3b2c1d0fed38b5208ec7b163d3616c317704a324068a3c2daa59b4142538636c29b851321adbd1281e59919bbaa3c8195934b5d2e1191b26e47042fed45cc105979590bceb10b90996a11785c1ce9fcf424f9790d22657179db1b680d71e151688a00f6a3ab4512e50a96df7d20fbd60360f97d75e37e11564943d6e1f70c629cd25209ad6d83c05f55a24d830e2cfd6de0582f5c47e1c83924c7e3d91b6e7ad8b572d7fa18738c0d6aed25fb20d83a5ff5ddb3922ae69de68c8be3b900a2ddf626de8faf01b91b8a45d1672b5f3829fa47b0a20851a4af6f93411ac039ffe6bc7c5472cae3eca488577dc1d265b115643b7435c977b64dbcef8744c34b856ef62eec03a76adcdd16684",
      "024af55c51b7f8586827d6c817100671fcbeeed6e11f0609b15d78040000",
    ],
    [
      "ETag",
      "mtH6Ole75miCvtnHxeV/+Q==",
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
      "Tue, 26 Oct 2021 14:49:17 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-59-1635259702250"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d925b4fc2401085ffcbf85a126e2dd284076e2aa6a0d212130d214b3b8562bb5b77b72221fc77672ba251137d6967a6df6ccf39ed1e9e121e810bcb64f55ca0dc9dad50df99628aaa48b5a25b2eb842b000355b11c9078eef7bf7ec61db9fbcb61d6eabbc71bded748850e11a3306ee1ee204d34881fbb807ce32a4b550a445c617656781dee566e807d3d1e492fa4c44a69fcc3cafdbf38670b04e8b11d36c51f2ff589b1f2cd888e5146394c843345a72293618ea91b1a95896a75851a290212a28e1f2c14a8a226752880a4d2a76bb52731a76dd6eb7aaf5ba5d25301521d389e0c4ce7cd2075a68964ec5965c8243802c4b321c97d7171a275169c494a349e0344b7d5f01921627292efe0649ef9ad167f8c08e117ce758260aae4fd48577d3fded38caf4f3a8413718fe2094a6a44e48301a0ffda03bbe35dcfce8bdb7d3a86ea5a020159a0c6bd5e6b9dd72aaefb1f685899adee36a59a00521a3bfe32ad1e0c62c55787803400d68d27b020000",
    ],
    [
      "ETag",
      "nD6SSLWaZwCNx96n5sp3Jw==",
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
      "Tue, 26 Oct 2021 14:49:18 GMT",
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
          "SELECT MAX(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-60-1635259702250",
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
      "85537f4fa34010fd2a64ef1f8db6a5b450dac478b5722797962a507fe472699765c15560915dbceb997ef71bc0aa3d134d9ad0d9f7debc99d9d92774cfb2108d50c0e2879216eb2f773c4087884a1cc3e9c1e4da73c94576e0fdf8f3f7f2ccbf989df4447c74040c56a9044ef384b6042f0b42c568e1b5e38297392e386f41a296a1b6ba464fd7f4e140d5345d059da0493465d93da86fa5ccc5a8d3d97ab763cee384e29c8936e1e9cb79e751ebe405bfa3448aceae65075c44e763d3e384132c19cf8e161e14500a5a2c698a590225bc2ac3e0eb6eea36c3693b06f223231413c2cb4c5665410ac2b388c565516745a3275497f9e60ff2aca935f195d9f87a6f85d34abada57b050b6c1a1b2828e2296d0250b5715b25ce6f7ca37773e0304fc6fb1a062a55c9d59aea5ec926d4759388ee5f9cadef1bef2dd9d2fce95939b1d0ed4185221595657e8e320a15575cf43b4df5f5d25c0123c1b7039500ddc35d56110050312993d3d88541a046630d0712f50c9b04ffb614031e86495bd56e18c67e1d0d487dd813ee8132dd42262068616995114eac35e570b0c5325ddb03788d0e610fd2e98a4a74ce45cb06692e8cab57d6be9bb0b6732f6adba8d0897893c6d8aab9a785ba7842681f4415f9b0a651c9caa6bb11ddf72c713dfbeb49a4d98d21893b5f700bb10e1445060e302a754d262c643181a3a9f7bb66fcf9df11414f5f59e6f19028d7e3ebd0afc755e4f59d65f3476ddf10d687051e0f57f18d461f4d166f3c6ee1227654da9f975d4e47f6c00d4855e5e236d27eaef4406dafcdac0ef10c173689cd1c5c2726f5073e4d2881634239fef04906be0d357bd7d62c08547063642420c1b484465420ada6c224beb569ed5ba097b826a7221df61c6b0bf1d7995a3ca48539ac9e78e9a27560fb1824af142021016c8b19def80fe03ef640f8de2040000",
    ],
    [
      "ETag",
      "+CXSRcQn+SJxzVHTQMB3sg==",
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
      "Tue, 26 Oct 2021 14:49:18 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-60-1635259702250"
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
      "02ff7d515d4fc24010fc2feb6b4b4af98a243c80a2120a6a8107620839daa514da6ebdbb421ac27f77af18f4c1f872b7b333939bc99de1106721746113479f05caf22e42fd6e061f559168c5574e9942b000b58858392bc26367f9760a27e349b93b44e3e9523e46bd1e2b54b0c35440f70cdb18935041f7e30c9948916d22a522d32cd2656ef093f7da9f334c293470baf0bcfec01bc2c5ba59d6ebfcf063184de7c3e7a1ff976575b1604f1b1fb728310bd024c825ed31d023534e89344fd05654c8001554e28a882415b99044366fecb663d7db8d96dbbaef38aedb7258985020744c196b1733ce069ab4487c3a713768b0405623d7dc56e7d1ac6bf56655c300b74af79b766b6ee346d7ffa79b865e7dbf3a2835aa37495c41a149ef5c9b3c9069a7b9b596055a1008fe8697585ff1e50b53ca47a6e3010000",
    ],
    [
      "ETag",
      "Sudv7YPwdMKMyhkgKNYrDg==",
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
      "Tue, 26 Oct 2021 14:49:18 GMT",
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
      "d35d6e82300000e0bbf4590d2805ba3709c84f1541a4385f1aec8a30b590021134bbfbccae31bf3b7c4f9033c6db9676f5850bf001c67c8e666c861bd35a9dab4d54eb818ffb31a183b2264792de70e75c15c44ab1acf47065a98370ae9be851ae847183addb8e66589477d52df4842c0ab366e643fa75dcefe2c6a5616450214e74bab51fbe21d6682b32671e8b3dd97b4552637680f969cc20363419385bb2cb8ee78a646ad2a91a25c174917ac7722a0d98aeddafa10d0fda26fdccf5a63714bb1fa0a6d99258953d1f620f29be27ddcb0d2fb1406a0883effb9245b3b7b7ff0b4c001f9a4af29656afed0b88d004fcd5a7ddd8f0d77f8be7924bf0f30b4c0cac9b19040000",
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
      "Tue, 26 Oct 2021 14:49:19 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-61-1635259702250",
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
      "54",
      "5d",
      "6f",
      "a2",
      "40",
      "14",
      "fd",
      "2b",
      "64",
      "f6b1555144d1c46c5da55b13c55d84369bcd860ce3854e0b0c3243374de37fdfcb50bb6d9ab44f3073cfb9e7dc0f7822f7bcd8932989797aa8a17afc722762724e40d1146ffdb3bc588667f2db5099c5c1cc20774248673344f08625695e66d091a2ae18c869b8eba695a84b5a09d1c1449d51bfd31f59f6c09e8ccdc1c0369127214bd6bcb847f6ad52a59cf67a27ed6e2a449a012db9ec3291bfdcf71e06bdb21277c094ecbd95eca18aec7d2cfa35138c2a2e8a59b84303b5842a829cf20c2dfc67eee38bb7a9bb9ce6dd14c10f9c01654cd4856a6c610a268a84a775a5b392e913d1365fbd909dbb761781c14456e74554d01cce8d3d5534528f251897fe7663acbccbadbf9907abad17ed1657ee66de5d6cd7e1c6db193757aeef1a8ac61968ae31332ef4c9c303eaef412a5e68f5a0b96e949f1bb47a3f968680d212da60343647b4ef98933889c72c712c3b4e4c8863271edbd48a4d3619c2701f03459e16d52c5a88c271289856c222ab3f8468e858c3c819f5ad888d621b6000ce683c20c773f2b7e20a965c9642f2b643e4c65f056e14f8a1b79807ae2e21a175a696adb1a680d71e151688a00f6a3a36512e50a969f7ca0b5c7fbe0856d76e3be135a4943dee0e38e3846612104d2b6c9e826a23f6d830e2cd37ee12c17a623f4e4149a6bf9f48d3f3c6c5ab96bfd0031c606357e927d905fecafbaeed9c10d734ab35e4a17d21255abec5dad0f5f10f227149db2ce467e8fabf487be543021514ecf3692258073efdd64e8b8f585c7d94910acfb83b4c3622ac827687b82ef7c4b62783fe886870a5dec5aca17dea5a93a3c9083914eab9a276f1b1d056ac962fa0e67712",
      "7a9eeed6f11fc1510a7378040000",
    ],
    [
      "ETag",
      "R+mnDU+sB4t0nq0lem8Ueg==",
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
      "Tue, 26 Oct 2021 14:49:19 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-61-1635259702250"
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
      "41",
      "4f",
      "83",
      "40",
      "10",
      "85",
      "ff",
      "cb",
      "78a509ad824ad203daaac4b6d616bc98a65961a8b4c0d0ddc5a669fadf9d45ad464df40233c337cb7b0f76b0caca043c78ca16eb1ae5f66881fade14135475ae15df2a2a158205a8c582c9075a45bda877b90d9cdb637bddd9f4c458fadd2e132a7ec64280b78334c33c51e03deea01405f25a4c795d94f3a6b3406f2b339c86936074cd7d4189e947d160e05f0cfab0b70e8b89d062def0ff589bed2d58d2d304539458c668b454929618ebc0d854a2a8726c29aa658c0a1ab879b09054574212b578d272dbadb67bec749cf353bbd3716c06738a85cea864369ab23ed0a4453ea10dbb049701d9946c386dae2f3cce92c688298351e89e34fabe022c2dcd729cff0db2de67c19fe1037b8fe03b270aaa4b7da0ae0677fe6fc771a69f47f5fcb0ff83509a933a206130ec4f437f3836dcecddfbc556a31a4be220159a0cdbf6c99973eada6fb15e92899adfe36959a305b1e0bfe326d3e0a52257b87f05af25e3a77b020000",
    ],
    [
      "ETag",
      "VokUDUDCyI5K30q2wDaPrA==",
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
      "Tue, 26 Oct 2021 14:49:19 GMT",
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
          "SELECT COUNT(`date`) as `date`, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-62-1635259702250",
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
      "61",
      "6f",
      "da",
      "30",
      "10",
      "fd",
      "2b91f7a5958084401240aa3a46b32e120d5d08add834819d38a94b8853dbe9842afefb2e4969cb2ab51212b1df7bf7eece774f68c3f2188d1061e94349c5eecb3d27a885a8c229dc5ac38b6c9039c38121635de4bfbac4586ed2b33360b04a25f1b6c8685bf25244548e16f34e2a785960c1791b02b56db3ddb57b96690d1dc3342d03749266c994e51b50df2955c891ae1fbc3b29e7694671c16427e2db977bfdd1d40bc1ef69a4a47e6ca9838bd43f363dcf788415e3f9d9620e0994928a15dd6296410aafca987c3d0edd6178db4981fcc8228aa38897b9aad2821011cf139696a28e8a464fa84ef3cd079abb5377126a93d9c20f4fd63156747daa61a9359f2d6d0df5242ca32b16afabfbd5aad868df83d91520e07e8725956bedf6871bb8da31d9f3b585efbbf3503b393fd52e83d9e25afbb63ce2408631958ae5757e212619ad727b6ea1f7fee12a0156e0d9802bc7b07177600c49429c2819f42c9218949001712cdc234634ecd37e4c28069daaa2d72a9cf31c5bc4e9f7edb8670d21403731ec04538358f6a06bf4fa7d123b0631a3b88ff62df45730452f982cb8644d1fd16de085ee2a0c16fe641cba7519092e3375d1245715f1364f054502e983baf615ca3838558fe2f9a11b8c27a177e3367330a5298e76f3079884046792021b0bbca58a8a2b1e43d3d0f56cee85decc1f4f41513feef58121d1e8f7d3ab20dc15759755fd8fc641305e82060b8177ff6190870d2dd8bfb1bbc15959536a7e7d6ae23f3600ea422daf27f3e8d43f3ad968ff670fbf168265689cd1cf851b2c517315d0840a9a479fcf04906be0d39d3e2c187061c5c0462a38c30446b23289046d26916deb529ed5b6d1b51d5493857a87f54ce3d0f22a4615",
      "916e69ae9e2b6a16ac6e620595f28504200c90eff99780fe036af0bb2be0040000",
    ],
    [
      "ETag",
      "59Dl8l7980sd/rnZ1b0Ykg==",
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
      "Tue, 26 Oct 2021 14:49:20 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-62-1635259702250"
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
      "000002ff8d50c14ec24010fd97f1da26d052d4261cc010c410d42a2743c8b29dd642dba9bb530921fcbbb3d510132f5e7667de7bb3fbde9c605fd429c4b02df28f16cdf12a477e764582b62dd9cad5506d113c4056b9286f0eb32a307acc93ed4065d1e3f2c160381e8d4461f53b560ae213640596a985f8ed04b5aa50c652c5ee113e36ae9b2f5fa7b369224045a90396abc5623c594ce1ec5d46369b66ffaf91f5d9831d6d13ccd060add139680ced50f3dc85b3aa6a4af42db546a3854edc11b9a1b65186c817c41f067e7f184641747bdd0b82a827c292b4e2826ad1ae5ec41b30b12a133a4836084560ba526266ddf92970d4657055d059fbcd0d2f5cff0f175eb881e3d63f9f4d8e8cf6c99038b7e84cf7be03dc910b254b8dd9b4e88156b2fdfb82bffbf31768d471d1da010000",
    ],
    [
      "ETag",
      "8wGm2rcAtBb4af5ONJre3A==",
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
      "Tue, 26 Oct 2021 14:49:20 GMT",
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
      "edd3597282300000d0bbe45b1927c00cf4cfc852f6456d959f0c2641402b10763abd7b9d5ea3be3bbc6f9012c2da1677d58d3dc01b9853a80a44706a0519d73cde983480fbbb73247a39d90a43a387fc0fef24f95d2fe65a3b495971d04d42d3665a764a3c43a49eaa3c18b6e398c4be824d4b8e6e1784fb6aa38ae1bb612d946b89ce1f4873597639c94918391cb67a2fe1b3710c8c03ed3f21aee19dfae2d9e5795b368d54e8be46102fc2f9ce3112b375ec6916b198d3ed606637fd52957a804d8a3c5a94f544a3071cd470d8a2855cc9dab5f65f6824a66da7c2cbcbff0556804d75c1598b8be7765156d515f8ab8fbbb966cfff88a59c71f0f30b5876a3a319040000",
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
      "Tue, 26 Oct 2021 14:49:20 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-63-1635259702250",
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
      "3014fd2bc8fbda24e4017948d11a51da464ac80aa4dd344dc8980b754b30c5265354e5bfef629aaedda4f613b6ef39f79cfbe0993cf222213312f3eca986eaf0e541c4e48c80a219bedeee9d34bfee33477d77a6c1d5663da9c4e0663e47046f5892eeca1c3a52d4150339db06ddac1275492b213a98a8630f3b7d7b680dace9d81c0c2c137912f274c58b4764df2b55ca59af77d2ee66426439d092cb2e13bbd7f7de7ed02b2bf1004cc9de7bc91eaac8dec7a25f73c1a8e2a2986f0334504ba822d8519ea385bfcc243e7f9fbacbe9ae9b2178cf1950c6445da8c616a660a2487956573a2b993d136df3cd8104eeca75428389bcde1551417770662454d1481d4a302efdcdda587a971b7fbd08971b2f0a9c6b77bde83a9bd576ed05c6ddb5ebbb86a2710e9a6bcc8d737df3f082fa0948c50bad1e36cf8df24b8396ff8fa521a0b48436188d4d9bf627e6344ee3314b27432b4e4d88e3493cb6e83036d97404a324068a3c2daa59b4104542add4b6a11f59f19846a364644593d4b22318f6872ca1630b6c468e67e477c5155c70590ac9db0e913b7f19ba51e86f3d6711baba8494d6b9ba688d3505bcf5a8b040047d50d3b18972814a4dbb975ee8fa0b275cdebaed8457905176089e70c629cd25209a56d83c05d55a24d830e22dd6ee0582f5c4be9d8292cc7e3e93a6e78d8b372d7fa58738c0c6aed25f1284fed2bbd2764e885b9ad71ab26f0fa444cbf7581bba3efe42242e699b85dc6c5dff07699f7c48a182827d3e4d04ebc0a7ffda69f1118bab8f3252e11d7787c9468455d0ee10d7e59ed8b639b1a744832bf56fac6f9ae6a96b4d8e2623eca0502f15b58b8f85b662b57c056110c7efe96e1dff009b99048278040000",
    ],
    [
      "ETag",
      "VvCflH1cCtXC9SGOM8ro2Q==",
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
      "Tue, 26 Oct 2021 14:49:21 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-63-1635259702250"
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
      "ff8d92dd6e82401085df657a0b09fea125f142adad246aad627ad118b3c2a058d8c5dda5d618dfbdb3d4daa66dd2dec0ccf0cd72ce81233c273c020f56c97a57a03c5cad513f98628aaa48b5a25b2eb842b000355b13c91de56c03f6180df86ed0db6f7afeebaab56fb78950e1063306de11e204d34881f77404ce32a4b550a445c6976567813ee466380ba6fef88efa4c44a61fcf87c34e77d8879375598c9866cb92ffc7dae264c156aca618a3441ea2d1924bb1c550fbc6a662599ea2ad4421435450c2e583b51445cea410364d6cb76657dc5aa3dab86e3ad56ac321301521d389e0c4ce67a40fb4d02c9d8a3db9049700599664382eaf2f344ea2d28829fd71e0d64b7d5f01921627292eff0649ef86d167f8c0ce117ce758260aae2fd4edf0bef3db7194e9e751379da0ff83509a92ba20813feacf82ce6862b8c5d97bf7a0514da4a020159a0c2b4ebdd568bace7bac3d61a2a6f7785a166841c8e8ef18241abc98a50a4f6f78c346827b020000",
    ],
    [
      "ETag",
      "n0s0jTaWdHnqHCwhCIxb8w==",
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
      "Tue, 26 Oct 2021 14:49:21 GMT",
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
          "SELECT MIN(`date`) as `date`, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-64-1635259702250",
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
      "00000002ff8553fd4fa34010fd57c8de2f9af41b4a3f12e3f594eb91545a29d598cba55d9601d7028beca2694cfff71bc0aa3d9333695276df7bf36666675ec896a70119139f478f05e4bb6f0fc2270d028a46783be05b63bab89e4ee96592b9d3e78c7b761a9d9d2183972a49932c86a61445ce408e57cb56948b22a3b9104d0cd4348d66d7d4fbbdfe68d0e9f5fa1dd44988c3194fb7a8be572a93e376fbe0dd8a848862a019972d2692b7fbf653af9de5e2019892ed63cb36bac8f6ff4dcf63c1a8e2223d5b2d31814242be8684f21853785706fef7e3d02d4e935684e427ce8032268a549569610826d29047455e4525e31752a5f9e1832cad9975e16957b673b209a882cda946a5567f36b40d5613f218d63cd894f7eb75b6d57ebaf32b44d0fb9e4a901bedf697e55ada31d976b495e3584b4f3b393fd5a6ee7cb5d07edc1d7130bf00a4e269959d47fd18cacc5e1b687f7eb65240157ad6e07ad0316977d819f9a13f60e150effb61077c7fe80ffa54f73b6c648011f84051a7cae8958aa622ed83ce066c4483a11ee848ef32d60f291d515d1f1943f003d3a7866130b26f90e79c2bb8e4321392d75d24b7aeed596bcf5d391713cfaaca086911abcb3ab9b2888f792a2c1249ffa96b5fa25ca053f924b6e359eee4c2b36fac7a0a661051b65b3ee21c843496806c9ad30414e45722c0a691c57c697bf6dc99cc50513dede2c09064fcfbe55de0edb2aacbaafa2713d79ddca186e639ddfd83611ea641f6fb0f7637342e2a4ac5af4e75fca71a205dace5fdd43b3a19472793ecffecf1d720b80ab533b95e59ee1da9af5c082187947d3d1348ae802f37fab05ec8c505431ba9f08c13c86469c272a82791275529af6ab33b1819a422e7ea1386d10f2d2f639411218154bd5654af57d5c4122ae41b09411c20c776a688fe052a3de7cdde040000",
    ],
    [
      "ETag",
      "7ik4GPQGGaDmpRGwpiTIng==",
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
      "Tue, 26 Oct 2021 14:49:22 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-64-1635259702250"
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
      "75",
      "91",
      "51",
      "6b",
      "c2",
      "30",
      "10",
      "c7",
      "bf",
      "cbedb5851a5bc5820f752b9b20e23a7d902112d3b3abb64d97a41b227ef75de2702f0e4272ffcbef92fb276738964d0e31eccae2b343757a28d0bcda2043dd5546d3d2ca462378808617448ec229664326d67931c0b9c26451eea2643c26428b0fac39c467d89758e51ae2f73334bc462acbb9b18798536bd553b24c49d532b76abe9acd92c92c858b77e3b7dbf6f8c74fe7cbf439cdee956c2e1e1ce42ec33d2a6c04daeb5b250f28ccd43ad3bc6e2bf4b5ec94400d0e761b85925dcb95943e65fc41e8f706fd8845a361c05814105849c14d291b62576fd41b18697895c96f32067d02940bc9e3decd5f9466010bfc80d170665ccaf57817eadda0deff507883420b6d7efb989c0cea8592644aa3f5135cbd3d4aeb971e3b36aa430f04a75f7929cd555f7e00aba1aca7f2010000",
    ],
    [
      "ETag",
      "94IeR72cYdg6eNreAPib5A==",
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
      "Tue, 26 Oct 2021 14:49:22 GMT",
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
      "30",
      "0080e1bb64ad0c4425d29d48516a9547c111364c48431a79c5883cecf4ee757a8dfa1de0dffddf001342afd7b46d0a5a83173062682844d989a56933b6b5bc99d832e648ff6247273dde091639b1d3bb3cc832783ad69e994f2f55a845f600cb7a8d860f68696268bb0241b1f01c4e8eb8a98720b91d2ab4ee52acaed43767492b7fdadafb6e15f278d4be3c16362e996fe2c1c3d87aa4e70b5d35a435dfb3ce767bbcd149ad6628f19b3c708ce46cb233171e59f93297adeb9f0aa4bf93fc907cea2c2d7be2deacecb54ca2706c223a4d5165deb333cde19e284f4fff1798003a082ee935e58fdb670bc39880bff5d37614f4f1bf49b1a412fcfc02ce61d27619040000",
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
      "Tue, 26 Oct 2021 14:49:22 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-65-1635259702250",
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
      "00000002ff85536b6f9b3014fd2bc8fbda3c0a212f295ab384b6d902d980b4aaa6091973a16e09a6d874aaaafcf75d4c93b5aad47ec2f63de79e731f3c937b5e24644a629e3dd4503d7db913313921a06886af037a5e7e8f0328b3efee8f1b997fbbb097b7d96c8608deb024dd953974a4a82b0672ba0dba5925ea9256427430516768774e87966dda9351df34ed3ef224e4e99a17f7c8be55aa94d35eefa0ddcd84c872a025975d2676c7f7dea3d92b2b71074cc9de5bc91eaac8dec7a25f73c1a8e2a2986d0334504ba822d8519ea385ffcc243e7b9bbacbe9ae9b21f89133a08c89ba508d2d4cc14491f2acae7456327d26dae6ab03099cb5b3080d26f27a574405ddc18991504523f5548271ee6f5c63e59d6f7c771eae365e142c2e1d77de5d6cd65bd70b8ceb4bc7770c45e31c34d7981967fae6e105f513908a175a3d6c9e1be59706adde8fa521a0b48436188dfa437a3aee4fe2341eb1746cd971da87381ec7239b5a719f4d06304862a0c8d3a29a450b5198a7161b4d064934b6fa5634188c9268625a76640de870883953cb64647f42fe565cc192cb5248de76885cfbabd089427feb2de6a1a34b48699dab656bac29e0b547850522e8839af64d940b546adabdf242c79f2fc2d595d34e780d19654fc103ce38a5b90444d30a9ba7a07245820d23dedc759608d613fb79084a32fdfd4c9a9e372e5eb5fc480f71808d5da5bf2408fd9577a1ed1c105734af35e4b13d90122ddf626de87aff0791b8a46d16f26bebf837a47df221850a0af6f93411ac039ffe6b87c5472cae3eca488577dc1d261b115641bb435c977b600f4ddb1a130daed4bbd850673e2e7c93117650a8978adac5c7425bb15a1e4118c4f17bba5bfb7f1eb996b678040000",
    ],
    [
      "ETag",
      "4aFpJbSepgJMKYslBG5Dhg==",
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
      "Tue, 26 Oct 2021 14:49:22 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-65-1635259702250"
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
      "92dd6e82401085df657a8b095a4125f142eb7fd4b688de34c6ac30201658babbb435c677ef2cb5b6699bb43730337cb39c73e0088f71168003db387a2a501cae2254f7ba705116899274cb7926110c40c5222207abe1e415dd517369aebcc9246af5bcba17b5db44487f872903e708618c4920c1793842c652a4359f27459a6dcace0075c8f570e1b9e3f990fa9407ba9f2fa7d34e77da879371590c98629b92ffc7dafa64c09e6f5d0c5160e6a3d6920bbe475f8db54dc9d23cc18ae485f0514209970f22c18b9c09ce2b34a9d856a56a5f5b35abd5306b35cb2430e13e5331cf885d2e481f28ae58e2f21772093601a22cc970585e9f691c07a5115d8ee79e5d2ff57d05485a1827b8f91b24bd3b469fe1033b47f09d63292f3275a106d3dbce6fc751a69f47f53a5eff072115257541bcf1acbff03ab33bcdadcfdebb0785f24e700a52a2ceb06ad69b56c336df63bde13a6a7a8fa3448106f88cfe8e51acc0095922f1f406d2e962cc7b020000",
    ],
    [
      "ETag",
      "FVGJxeRH8U0VTJJg9DT4Tg==",
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
      "Tue, 26 Oct 2021 14:49:23 GMT",
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
          "SELECT MAX(`date`) as `date`, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-66-1635259702250",
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
      "fd",
      "4f",
      "a3",
      "4010fd57c8de2f9af48352a01f89f17aca2949a54aa99eb95cda65197095b2c82e9ac6f47fbf01acda3339932665f7bd376f6676e6853cf02c226312f2e4b18462f3ed5e84a44540d1046fef9c9e6d4c8dab243c5fe7fe54b8e72eb39f8f8e90c12b95a4eb3c85b61465c1408e17f34e528832a785106d0cd4b6ed76cfee5b86351ae88661e9a89390c6539e3d54d195cae5b8dbdd79771221921468ce658789f5db7df7c9e8e685b807a66477dfb28b2eb2fb7fd3e35430aab8c88e16734ca094502c614d798a29bc2ba3f0fb7ee80ea7eb4e82e427ce803226ca4c5569610826b2982765514725e31752a7f9e183cc9da973126817935f07ab882a581d6a546acd674b5b6135314f61c9a35575bf5ce60fda4f7f7681087adf510972a5dd9c3bbea3ed935d4f5b789e330fb483e343edcc9f2d2eb51fb77b1ccc2f02a978566717d030852ab3d706ba9f9fad1250859e0db81ce836ed0df551188703160ffb5618eb1086c37060d17ea8b39109661402459daaa2d72a9a896c30322844a03393c51618a3a105bdc1c8d62dd30e6da6d3ea49423334c8b6459e0baee094cb5c48de7491dcf86ee02c037fe19d4c02a72e23a665aa4e9be4aa223ee6a9b04824fda7ae6d8572814ed593b85ee0f89393c0bd769a29984242d966fe887310d35402b26941d7a0a0b81011368d5ccee66ee0cebcc91415f5d35eee18928c7fbfbc0b824d5e7759d5ff64e2fb935bd4d0a2a09b7f30ccc336c976fbc1ee9aa6654da9f9f5a989ffd400a487b5bc9f8cbd93b977b2c9f6cf167f2d82abd03893ab85e3df92e6ca87180ac8d8d73381e41af872a377eb855c5c30b4910acf38814c5626ac806612f9ba2ee5556df78d518fd4e4427dc24c73b06b7915a38a086bc8d46b45cd7ad54daca052be9110c401f25cef0cd1bf3b9300b8de040000",
    ],
    [
      "ETag",
      "hE162L2QgbHmpRLoIHIc6w==",
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
      "Tue, 26 Oct 2021 14:49:23 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-66-1635259702250"
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
      "75",
      "91",
      "51",
      "6f",
      "82",
      "301080ff4bf70a49417193c4077564ba383399ce87c5980a274381c3b6b830e37fdf1517f7e25edadef5bbf6bef6c4f66911339f6dd2e45081acef12d033b30841559956349558286016032d122267d5cb120ffa811f978efcae47c7f7e1ee79d6eb11a1a24fc805f34f6c9b42162be67f9c582172a0b258687388ae4b133df6e7014539c6269a2e2693fe6012b0b375e5d7eb72ffc78fa7f3e029086f95acce16dbe126842d48282230d797127710e9b13153222f33b015563202c51ab8d9482456a590883665ec4ec7763a2dcff5baf7dc753d4e608691d02916c42edea837a6518b2cc42f12632d0264b324c76d331e29ed7297dbdcb59d6e23d3a49a1e6f412ebf42cebf90d3be426d03ad7efb18d41ad4ab449252607cf8c56d88c6971edbd7b2028b45827e6594ea4b7cfe012ac58813f2010000",
    ],
    [
      "ETag",
      "QuMWoqt80vW1rzyHvVCjJQ==",
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
      "Tue, 26 Oct 2021 14:49:23 GMT",
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
      "edd3d97243500000d07fb9cf61ac0d7dbb8aaa10d158c28bb15c5bc415d7d4d2e9bf37d3df68ce3f9c6f90e639222499f015f5e015ac2927d3397d182445afda9aeaeabc488fb9f1b96d61267076d7689e12099a67667d414581ab6ed9448533d1b6e33407f69db4c7c965f920704f57ea25bc852eac903320eb8ccbbef6f717d7ee52139f59ed2d133c021be6d4f56e71ab75d8147a59445212c4cb61e419a8243167f20bbfeadbddf85017e73dcba06f759871f66d53499cdf2d0ca741039a1a6665252dd996e4accaa04b8b04f52b5ae7d83244b3775069f5a28ea9857e7afabfc00ea06568464492e6b19d17657907feea27d33aa0c77f05a5231ac1cf2fe68d764219040000",
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
      "Tue, 26 Oct 2021 14:49:23 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-67-1635259702250",
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
      "0002ff85536b6f9b3014fd2bc8fbb826900781448ad628a56bb4846c84349ba6091973a16e09a6d864aaaafcf75d4cd3b5aad47ec2f63de79e731f3c923b5e246442629eddd7503d7cba15313923a06886af4efc2d9707b995bb1b9a8ad9fae7e7eb7a379b4e11c11b96a4fb32878e1475c5404eb69b6e5689baa495101d4cd419399dde6860f7edb163f5fbb6853c0979bae4c51db26f942ae5c4344fdadd4c882c075a72d96562fffc6e1efa6659895b604a9aaf254d5491e6fba25f72c1a8e2a2986e3768a0965045b0a73c470bff99497cfe3a7597d37d3743f08133a08c89ba508d2d4cc14491f2acae7456327924dae68b03d9784b6f1e1a4ce4f5be880aba873323a18a46eaa104e33258af8c857fb90e56b370b1f6a3cdfcca5bcdbaf3f572bbf237c6eeca0b3c43d13807cd35a6c6b9bef97841fd04a4e285560f9be746f9a9418bb7636908282da10d468e35a23dd71ac769ecb0d41dd8716a411cbbb163d3416cb1f11086490c14795a54b368218a51321eb8ae3b8c7a56d28b86b663476e7f388e1cc74dc1750643371e90e319f95b7105175c9642f2b64364172c422f0a83ad3f9f859e2e21a575ae2e5a634d012f3d2a2c1041efd4746ca25ca052d3ee851f7ac16c1e2eaebd76c24bc8287bd8dce38c539a4b4034adb0790aaa9548b061c49fadbc0b04eb897d3f052599fc7e244dcf1b172f5afe4c0f71808d5da5bf6413060bffabb673425cd3bcd690437b20255abec1dad0f5f10f227149db2ce4c7d60b7e91f62980142a28d8c7d344b00e7cf8af9d161fb1b8fa282315de7177986c445805ed0e715dee893d1a5a239b6870a5dec47a63ebd4b526479311f650a8a78adac5c7425bb15a3e833088e3f775b78eff00b13fb73678040000",
    ],
    [
      "ETag",
      "7bKlsvsUsWhafoAOX+VuWA==",
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
      "Tue, 26 Oct 2021 14:49:24 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-67-1635259702250"
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
      "41",
      "6f",
      "82",
      "40",
      "10",
      "85",
      "ffcbf48aa95a054be2015b5b4dd05ac05e1a635618100b2cee2e36c6f8df3b4bad6dda26ed0566866f96f71e1ce0252d22b0619526db0ac5fe2241f5a80b0f65952949b7921712c100542c21f2fa723e9bec841ac5ccf12d55f57aada76dd2ef1321c335e60cec03c429669104fbf90005cb91d6429e5579b1ac3b03d4bed4433ff0c6d37bea731ee97e3a775d67e00ee1689c1723a6d8b2e6ffb1b6381ab0e12b0f63145884a8b594826f3054636d53b2bcccb0217925429450c3f58344f0aa6482f3064d1aa6d5689957dd76f7da6ab6dbdd2681190f994a7941ecdc277da0b86299c75fc925980488ba24c3717dddd1388d6a23ba1c4f03b353ebfb0a90b438cd70f937487ad78c3ec307768ae03bc7725e15ea4cddb90fce6fc751a69f47dd3ac1f007211525754682f164e807ce64a6b9c5c9fb60af50ce04a72025ea0c5bcd4eaf6b99cdf7586fb88e9ade632b51a10121a3bf63942ab06396493cbe0115cc68677b020000",
    ],
    [
      "ETag",
      "9/UPMvrtHfaAS7tu881Vqg==",
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
      "Tue, 26 Oct 2021 14:49:24 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `id` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-68-1635259702250",
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
      "ff85547f6f9b3010fd2ac8fba795f23b4048a4a8cb52b621a52421d0aa9aa6c43886ba054cb1691555f9ee3b43d3365bd74a4870bef7eebdb3cf3ca13b966dd108852cbe2f69b1fb72cb43d44054e2185697bb6899714116d6a51b717f164c1ef572391e03822996c0699ed0a6e06541a81805ab565cf032c705e74d28d434ad66d7ec1b3d6338e8f47a4607788226d18c6577c0be913217a376fba0dd8a398f138a73265a84a72febed875e3b2ff82d2552b48f25dba022da1f8b9e259c60c978360e5660a014b458d314b3042cbc32b7e1d7e3d22d86d3560ce00746282684979954b6a004e159c4e2b2a8aaa2d113aa6cbef9402b7b664f7d6d3a0f5cff64835345de9c6a586887a0a16da0a7882574cdb61b9559aff33bedbb37bf800c38b8c1828a8d76f5d3f66c4ddb28d0583bd326eeb9764c755c2d705d7be56b2767a7da0f6f1e2cb46fd74718f0bca542b2ac72ece330a1caedf3a63aff1ea52260090eeae47ad03171d7ea0cc3281c90c8ea1b61d4a16168850303f7c30e19ea54df8614034faaea150b673c33c990f409d1cdfed6e80ea33eb5866634a078008763e0c8d0fbb4070b03b46fa0c782497ace44ce05ab77165d798e6faf7d2f70a713dfaeda887099c8f3da9c6ae2ad4f094d02e883bef62acb3828a963725cdff62653dfb9b4ebc998d11893ddea1e6623c289a080c6054ea9a4c505dfc2a6a1c57ce5f8cedc9dcc80511df7e2801068f4ebe995e0eff26a9765f5565aa65ee91f009738292bc443fd81ba06daef1bff2f31f1bcc935c8e2a2c0bbf7cbbf5bbfc257516df1450f29b543d43b8af4a3c844fbdf7b781a086e58ad8c9681ed5da37ac9a3112d68463e1f2b0057894f7f14875b0b58b8b7202324c430c444281152d07a98595ab5f2cc3675cbb050052ee4df39a3d3b50ea7a66aa88a34a5997ceea8beb5d526aa54295e40908419741df70764ff00314b030e35050000",
    ],
    [
      "ETag",
      "QyfQnoscP8VNfoTLUAw4uQ==",
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
      "Tue, 26 Oct 2021 14:49:25 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-68-1635259702250"
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
      "90",
      "51",
      "6b",
      "c2",
      "30",
      "14",
      "85",
      "ffcbdde35a563b742af8a0a33837275b9d301822315e6bb5cdad493a91d2ffee4d953def25b939f90e3927151c52b5813eacd3e458a23edf25683fdd10a329336b782b4819040fd08a84c9e0be778a263dd98dd4ebdb2efc3ebe3fccc7c3c180092377980be857b04d31db18e8ff54a0448e6c133995ca3264cf853b4f665fd1388a59c869e384d9623a1d8ea611d4de9f69b52a0effb22c6b0ff6b48e718b1a954497a1d0b4476927ae9e117991a16fa8d4120d34707391682a0ba1897c56fc4ed76f751edb61bbf71484613b603023296c4a8ad9c59cb381252bb2984edc0e5a0ce866e4a2db66fd6d64d7e1362debe5cd343a5b341f9a388141f778700df24c2e9ce5d05697e88114fc8f2fa9bd9eeb0b9ad54881a4010000",
    ],
    [
      "ETag",
      "0+9wEI9c8EnJKh2XqM/SGA==",
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
      "Tue, 26 Oct 2021 14:49:25 GMT",
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
      "300000d0bb64ad0e4650d39d40f84c451345c16e32180313514803e26f7af73abd467d77784f90712e9a86b575292af001ee1944033ef85453db2ba4777460e09e509adf1c98289356f63eb08a44973455496726dff85a1ed233456c7fc93a0a435e5baa60464d244568681b77f3ba5ebac7dc99046b640deded42622857fb47783e08c4376d1a471ec1d1b849356bb520bb86e43374ead3709597f3f291443ce82f2ffed7b508269b83808e5a4eeb235b595ba65193d191ede2ddcc33498cbafc31e517ecc40b7fac63b736e06456e1d89877ea566f888fcf83b7b7ff0bf480b829a945c3e46bfbc842a807feeab3f6aec4ebbf2d322d34f8f90522b2f00819040000",
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
      "Tue, 26 Oct 2021 14:49:25 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-69-1635259702250",
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
      "2bc8fbb826813cc8438ad628a16da4403620ada66942c65ca85b822936a9aa2aff7d17d374ad2ab59fb07dcfb9e7dc07cfe49e1709999198670f35544fdfee444cce08289ae16b712fd8caa52cbcf41e926576b9f87e757bfd389f2382372c49f7650e1d29ea8a819ced826e5689baa495101d4cd4b1a71dcb1e8cfaa3e9d8ecf74726f224e4e98617f7c8be55aa94b35eefa4ddcd84c872a025975d26f6afefbd43bf5756e20e9892bdf7923d5491bdcf457fe48251c54531df0568a0965045b0a73c470bff99497cfe3e7597d37d3743f08133a08c89ba508d2d4cc14491f2acae7456327b26dae69b03099c8db30c0d26f27a5f4405ddc39991504523f5548271e16f5d63ed5d6c7d7711aeb75e142caf1c77d15d6e373bd70b8c9b2bc7770c45e31c34d7981be7fae6e105f513908a175a3d6c9e1be59706ad3f8ea521a0b48436188d4d9b5a13731aa7f198a593c1284e4d88e3493c1ed1416cb2e91086490c14795a54b368218a291d4cc1b269442d9a46436b684534b521ea5b03cb3287d68032931ccfc863c515acb82c85e46d87c88dbf0e9d28f477de72113aba8494d6b95ab5c69a02de7a545820823ea9e9d844b940a5a6dd6b2f74fcc5325c5f3bed84379051f6143ce08c539a4b4034adb0790a2a5724d830e22d5c6785603db19fa7a024b33fcfa4e979e3e24dcb5fe9210eb0b1abf49704a1bff62eb59d13e29ae6b5861cda0329d1f22dd686ae8f7f11894bda6621bf768eff9bb44f3ea45041c1be9e268275e0cb7fedb4f888c5d54719a9f08ebbc36423c22a687788eb724f6c7b34b22da2c195fa10b327e353d79a1c4d46d843a15e2a6a171f0b6dc56af90ac2208edfd3dd3afe03e686d9a678040000",
    ],
    [
      "ETag",
      "nkocDMacTGNqdCgGA+HhVw==",
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
      "Tue, 26 Oct 2021 14:49:25 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-69-1635259702250"
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
      "0000000002ff8d92db6e82401086df657b0b091ec04ae2055a0f24482de25563cc0a036281a5bb4b8d35be7b67a9b54ddba4bd5966866f867f7ef6449eb2322636d966e9730dfc7893827c504100a2cea5c047c54a01442320698aa4253b878c4f44f7f03aa52d6feacfb6bb9133182021a21d1494d827926490c782d88f2752d202b02d62795d949b26d3883c56aab80c03d79f625eb058e5fecaf39ca1372667edda185349370dff8fb6f559237bb60d20010e65044a4bc5d91e22e9aa35052daa1c74c16a1e81200ddcbc4839ab2bca19d3b1a25b7dbd6575ccb6d9ef19edb6692098b388ca8c95c8ae96a88f4826691eb083509e20c09b10174e9af305cb59dc2ca242d70fad6ea3ef2b80d2922c87cddf20eadd51fc0d1fd8c582ef1c2d585dca2b35f1ee9ddfc6a1a79fa3ee9c70fc8310129dba22a13b1f2f4367be50dcfab2fbf028412c38432305280f5b46f7d6ec59c6bbad23a6acc6efd892d7a09188e2ed986592d809cd059cdf00ad48caf77b020000",
    ],
    [
      "ETag",
      "6t3wirFs4wzGa1LGNHbhCA==",
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
      "Tue, 26 Oct 2021 14:49:26 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-70-1635259702250",
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
      "54",
      "fd",
      "4f",
      "db",
      "30",
      "10",
      "fd",
      "57",
      "22",
      "ef",
      "1790fa917ea7952ad6958c552a694953104c536b3b4e30a471881d5085fabfefec50a0636352a4e47cefdd7b679ff38cee791aa201223c7e2858befd722708aa20a6700cab318b43120bea04b31b96cce64fe10d39bb180e01c1354be24d96b0aa14454e991c2c17b5381745867321aa50a8dab3ab8d6eabd3ecf47b76b3d9b1812759124d797a0fec5ba53239a8d7f7dab55888386138e3b246c5e675bdfed8ac67b9b86354c9faa1641d5464fd73d1934450acb84887cb05182824cb576c8379a21b7c6586e4eb61e91ac79b5a0ce0474e19a65414a9d2b6a0041569c4e3223755d1e019199bef3ed0c29dbae3c01acf965e70b4c61b4d5e1f5b585afba062ada1a788276cc5c3b5ceac56d9bdf5dd9f9d43061cdc62c9e4dabafae1faaef5b6b4b686d68935f24eadc30213cf5a7a9ebb08aca39363ebcc9f2de7d6b7eb030c380f99543c35be034c12a63dbf6cede4e3816a0256205a26573dbb8b1b8edd2711e9d1c86975486433421cd2ebe016b169bfcdda216118784a57372c9c8a1437fbdd2eb59d7ed8260d4ada246c86347460cd099d86d3b03bacdd8f228c7615f49473c54eb9cc84e4e5fea22b7f12b8abc05f7ae351e09a36225c24eab434a79b78ef53419300faa4af9dce72014afab0265ee0faa37130b974cbf998b218d3ede2012624c2896480c639de30c5f27311c2a6a1f96c310926336f34058639f4f91e21d1e0e7f31b21d86666979579a345e04fbc3363608fb8c44961208fe5071a65e015ed76957f9719f9fee81aa4719ee3ed1f3968a7dbd6f4bf4818bc894a9b7bc906d26afba87910b50fa22edafddac15341",
      "70d74a6574b174fd6b542ef92c62394be9ff470bc026f1df5fc6fefe02166e30c84805310c32955a84e6ac1c68be31adbcb0bbdd66af8f0c38571f72ad7e6b7f72ba86aec8362c552f1d95f7d76ca24e15f21504499843cf1ce2ee37c51a5da73f050000",
    ],
    [
      "ETag",
      "gegdbgoc8TOZelOPwdZbGQ==",
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
      "Tue, 26 Oct 2021 14:49:26 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-70-1635259702250"
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
      "50",
      "4d",
      "4fc24010fd2fe3d13629c54a24e1208a4a428856f0a0216469875a6877eaeeb40609ffddd9628889172fbb33ef23fbdeee619beb14fab0cab38f1acdee2c437e72438cb62ed8ca5591b6081e20ab4c94e75fcd5d36bb8db6b16e9accbebe34e92cfd1c0c446193772c15f4f7b0ceb1482df4dff6a05589625325d59a45c4bbcaede3e96c743f8a05282975c0743e995c0f2723387827d372596dff65591c3cd8d02ac6351ad409ba0c95a10d263c76f5ac2aab027d4bb549d0422b6e89cc505d2943e40be2f702bf73d98dc2e8aa1784611488b0a044714e5ab4f367c9064cac8a983ea51d744560da518aaedbb36961d7c14d611bed37179eb8ce1fae73e22e1cb7f8796cb863b48f8624b945173a3816b821578aa52c9b1a3d4894fcff43cec7fdf00d374b9d73dc010000",
    ],
    [
      "ETag",
      "+zvFgTD5kRnvvgsZVvdTdw==",
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
      "Tue, 26 Oct 2021 14:49:26 GMT",
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
      "8b08000000000002ffedd34b7282300000d0bb646d19f90add692af2515b15015799c0841031080958d0e9ddebf41af5dde13d00ce732225eaae15a9c13b18b1e628b91236f6c2a5e516c365410f66e63a4148e6d26e2b3697956e26f911862d6c86487c43516ea2378c76556d06c921f3f43be903d8dfa259695e7a3f1b4f9ae5b534a664efb602f70da3456622c4f0fab0d657ce47e0d45778a4d486fbf354abf74131c832b4385733985fd21de72eece86ca51a57cb37ce6963b3af78ebf14848c1e2b287aaf5b93911b4dcc59e7f3b0b4e2ac372a7e9544235bfab5591687eba891738505e5efe2f30016468982012b1e776dd749c09f8ab8fbab121cfff0b820511e0e7174240e80f19040000",
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
      "Tue, 26 Oct 2021 14:49:26 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-71-1635259702250",
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
      "9b3014fd2bc87b6d1220212491a2354ac88a94900e48ab699a903186ba054cb149db55f9efbb98a66b37a97dc2f63de79e733f784677ac4cd00cc52cbb6f68fdf4e596c7e80c518933787d5cfdceb2f564143ef86473b1bc5c1f92f1d5c37c0e08d6b2042eaa9cf6046f6a42c56c1ff4b39a3715ae39ef41a29e6df48cf1d032ada9ad9ba6a5034fd03cddb0f20ed83752566236189cb4fb19e7594e71c5449ff0e2f57d70300755cd6f299162f05e72002a62f0b1e8d79c132c192fe7fb000c3482d6112d30cbc1c25f66129fbf4fdd67b8e867003e30423121bc29656b0b52105ea62c6b6a9515cd9e91b2f9e6800267e32c438df0bc29caa8c4053dd3122c71249f2aaaadfddd5673bdf5cedf2e4277e745c1f2c2d92efacbdd66bff502edfac2f11d4de238a78aabcdb57375f3e002fa091592954a3d6c9f5be59706b9ff8fa52580b4a05d30b2f5313626fa344e639ba493a115a73a8de3496c5b7818eb643aa2a324a618784a54b170c94b6baa9bc389358c0cdb22d168328d236c5b6944529d5889619b668cd1f10c3dd44cd215131517aceb10baf6ddd089427fef2d17a1a34a487193cb5567ac2de0ad47090502e8839a8e6d9471506adbed7aa1e32f96a17be57413ded00c93a7e01e669ce25c5040e31a9a2769bde509340c798badb302b09ad8e52928d0ece7336a7bdeba78d3f2577a08036ced4af54541e8bbde3765e784b8c279a32087ee802ab07c03b581ebe32f40c2927659d0f7bde3ff40dd934f535ad3927c3e4d00abc0a7ffda69f1010bab0f3242c21d7687885684d4b4db21a6ca3db1c7e3a96d2205aee5bf31db308c53d7da1c6d465ad052be54d42d3e14da8935e215044118bfa7ba75fc03be0e8a6d78040000",
    ],
    [
      "ETag",
      "xDzggF84TwRcLHCPFvd6Vw==",
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
      "Tue, 26 Oct 2021 14:49:27 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-71-1635259702250"
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
      "41",
      "4f",
      "c2",
      "40",
      "1085ffcb786d938214a4090740d42680588a1743c8d24e4b71dbadbb5b0921fc77672ba25113bdb433d36fb6efbdf600cf59118307eb2c7da950ee2f52d40fa60850555c2bba95a2500816a06629915538593cfa41d0daecbbdd616b10f049b1d8f57a44a868833903ef0049863c56e03d1da06039d25a24789517abbab340ef4b339c87813fbda53e17b1e9a78bf1b83f188fe0689d1763a6d9aae6ffb1b63c5ab015eb001394584468b494526c31d2beb1a9585e72b495a864840a6ab87e904a51954c0a61d3c4ee34ec46fbd26dbadd8ed36cba0e815c444c67a2207631277da085663c103b72096d02645d92e1a4bebed2388b6b23a6f4a761bb55ebfb0a90b424e3b8fa1b24bd1b469fe1033b45f09d63b9a80a7da66ec6f7fddf8ea34c3f8fbaee87a31f84d294d41909fdc9681ef62733c32d4fde077b8d6a260505a9d064d8705a576ea7edbcc73a14266a7a8fa7658516448cfe8ebb4c839730aef0f806485763af7b020000",
    ],
    [
      "ETag",
      "uTMUVIRR4hy99C4BRlMnUw==",
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
      "Tue, 26 Oct 2021 14:49:27 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-72-1635259702250",
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
      "54",
      "61",
      "4f",
      "e2",
      "40",
      "10",
      "fd",
      "2b",
      "cdde174d904281164888875895040b96a2672e17d89669592ddddadd722186ff7ed3ada89c779a346967e7bd796f7667fb4c1e59b2245de2b3e829876cfbed81fba44240d208577f4c2e56fe46bf5adddd6c75bb7d165cb4a11ef57a8860054bd0751ac389e0791680e8cea6d528e3794a33ce4fb0d089659cd4cd46cb6875ac9a61b46ac813108723963c227b25652abababed7ae469c4731d094896ac0d7afebfac6d0d38c3f4020857e28a9a38ad03f173d8d794025e3496f364503b9806c0e6bca62b4f0c65cfadf0f4b57195d5723046f58003408789ec8c21696087812b228cf5455d27d26cae6bb0f32b547f6c0d306e399e31d2de8ba202f8e352ab47d50d116d853c86298b3e5a2c8cce7e9a376e18eaf31830e56548058687757b66b6b6f4b0bada79d6a7de75c3b2c3074b499e3d8534f3b3a3dd62eddf16ca29ddd1f60d0f912846489f2ed513f86c2f3cbd60e3f1e6841a01245cbe4dcaa99b4deae75fcd0b782b0dd68f9610d7cbfed5b2ddaf06b41a709cda50f1479b2a8ae5834e14940ad8e1936da66db30a1d3682eebad4ecb04803a566c34ad567d090ddf30c8ae427e674cc239132917acdc5f72e70e3d7beeb93367d0f76cd54648f3589e97e68a26defb94d824823ee96b57641947a5e2b0868e67bbfd8137bcb5cbf918414483edf4092724a4b10044d38cae414276cd97b86964329e0ebde1d8e98f90a10e7db24708d2fdf9fc46f0b6a9da65a9de64eab943e75219d8236e699c2bc8a6fc203445af64b7abfcbf4cdf75fbf7284db38c6effca613b66b3a0ff4342e15554dadc4bd649a1b68f8c83a879109964f76b874f85e05d2b95c9cdcc76ef49b9e442081924c1d7a38560",
      "95f8f297b1bfbf88c51b8c3242628c831c884224c8a01c68b656adbcb04dcb6a1b448133f921d7a937f62757d4282ac21a12f9d251797fd52616a95cbc82308973e8a843dcfd017e3b6ee13f050000",
    ],
    [
      "ETag",
      "XPFhbv/HhWQy/E8BcF8e1g==",
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
      "Tue, 26 Oct 2021 14:49:27 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-72-1635259702250"
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
      "904f4fc3300cc5bf8bb9b6d25654262aedc060ffa46a40a12784a6acf5ba6e6d1d12475335edbbe314c49953f29e7f769e738153dd9590c0aeaebe1c9afea6427ef5970cad6bd8caa1a9b3080120ab4ac8a65dac741f1deaa7e378f17c1eaddc52e7e7e954085b1cb055905c605f63535a483e2ed0a916a54db5e43a16887bedf57af33e5fce33315a2abdb1c9d3f46196cee11afc356db7faf4af96cf6b0047da65b847835d813e833674c482d77e3dab5add6068c999022d0cf050a80c39ad0c51284e3889c2f1dd6d1cc5f7935114c523011b2a14d7d4099bbf49366062d5647496edc003839ef58cf6c5900cb758fe5664e223f97759f2b0711840a1e48b5635ffe8eb372d9f7d957f010000",
    ],
    [
      "ETag",
      "lmFHpy2hiDj1FOw0HuGpUw==",
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
      "Tue, 26 Oct 2021 14:49:28 GMT",
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
      "4b7282300000d0bb646d9dcaa798ee48ad1d81821f50649309984908945fc0809ddebd4eaf51df1dde37205946a5c47d5dd00abc828968709ecddd6689d68ceb53952cf9466f313e16fe80dea241a4d2c48c87bd87a5a0c3f5891ff4ea66f95a327e156cc750faceb8d3f91a4c89ed3ca3c85a3b7e1007d54a41c5a796329988838d9a58d930333edd32ca122cac3e0e83689f5b31fe30c37cefb278b313e5d95549646ce58d38a52ae2d2c37cebadfb8e54a31aac93e605575cdbe95598ea5439d3895dd00bd4e485b5c6e2d835e6d63ad7ad228da088a7c96a317f78f8bfc00cd0b1c93b2a717edfae9b10cec05f7ddc4f0dbdff479474b4033fbf4a3b38af19040000",
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
      "Tue, 26 Oct 2021 14:49:28 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-73-1635259702250",
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
      "535d4fa34014fd2b64f6716d0b6d81b649b33615956c4b5d4a75379b0d19a6171ca50c3283c698fe772f83753526fac4ccdc73ee39f7832772cb8b2d999084677735548fdf6e44428e08289ae16bf1f3d4fbfd5d2cce01e8edf22abb989d81fd309d2282372c4977650e1d29ea8a819c6cd6ddac1275492b213a98a8e30e3a9633b0fbf6d835fb7ddb449e843c5df0e216d9d74a9572d2eb1db4bb9910590eb4e4b2cbc4eef5bd77dfef9595b801a664efbd640f5564ef73d11fb9605471514c376b34504ba862d8519ea385ffcc6d72fc3e7597d35d3743f03d6740191375a11a5b98828922e5595de9ac64f244b4cd3707b2f616de3c3298c8eb5d1117740747c6962a1aabc7128cd370b534fce074152e6791bf0ae2f5fcdc5bcebaf3d562b30cd6c6d5b9177a86a2490e9a6b4c8d637d0bf082fa5b908a175a3d6a9e1be59706f91fc7d210505a421b8c5dd3a1d6c81c2769e2b27434b093d484241925ae4d0789c9c643186e13a0c8d3a29a450b51581883a165c5e6c0b1e2a19b5871623bc3d872adb133b4536a22697f441e2aaee084cb5248de76885c857ee4c551b809e6b3c8d325a4b4ced5496bac29e0ad47850522e8939af64d940b546adaed079117cee6917fe9b5135e4046d9e3fa0e679cd25c02a26985cd53502dc5161b4682d9d23b41b09ed8c52128c9e4ef13697adeb878d3f2577a84036cec2afd25eb28f483336de780b8a479ad21f7ed819468f91a6b43d7fb7f88c4256db3905f1b2ffc43daa71052a8a0605f4f13c13af0e5bf76587cc4e2eaa38c5478c7dd61b2116115b43bc475b907b633b26d976870a53ec41cd73a74adc9d164841d14eaa5a276f1b1d056ac96af200ce2f803ddadfd33a8ce232178040000",
    ],
    [
      "ETag",
      "nKFEX+oLHeeakMWgPAGe5w==",
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
      "Tue, 26 Oct 2021 14:49:28 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-73-1635259702250"
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
      "6e82401085df657a8b09feb7245e608bd504ad55bca88d312b0c8a2e2cee2e6d8cf1dd3b4bad6dda26ed0dcc0cdf2ce71c38c22ec922706095acf705cac3d51af5a32926a80aae15dd729129040b50b33591bc56f7e6fd6cce7afb5df254f52377a5c3c74e8708156e3065e01c214e90470a9ce723642c455a0b052fd26c597616e8436e86d3603218dd539f8ac8f4a399efbb5ddf839375598c9866cb92ffc7dae264c156ac2618a3c42c44a32597628ba11e189b8aa539c78a12850c514109970fd6521439934254685269d72bd556bd596bdeb4ed5aad6913c845c8742232626753d2075a68c627e2955c428b00599664382eaf2f344ea2d2882907a3a0d528f57d05485a9c705cfe0d92de0da3cff0819d23f8ceb1541499be503dffc1fded38caf4f3a83b37f07e104a53521724180cbd69e00ec7865b9cbd770f1ad5580a0a52a1c9b06a37ae9bed96fd1eebad3051d37b1c2d0bb42064f477f4130d4eccb8c2d31b5d6086707b020000",
    ],
    [
      "ETag",
      "l23EZHnZaFqkiY1LdAbtcQ==",
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
      "Tue, 26 Oct 2021 14:49:29 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `date` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-74-1635259702250",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85547f6fda3010fd2a91f74f2bf1230d040252d5b136dbd068e84268d54d1338ce25b88498c60e13aaf8ee3b27a52debd64a9192f3bd77ef9d7dce0359f22c227d12f2e4be807cfbe14e84a44640d10457373f26340deebf45e9c229ecaeb75d146a999c9e22826b96a4ab750a75298a9c81ec4f278d2417c59ae642d4b150bddbae9f745ab665f7baa665d926f224a4f188674b642f945acb7eb3b9d76e24422429d035970d26564febcd8dd55ce7e20e9892cd43c926aac8e6dba267a9605471919d4e2768a09090cf6045798a169e9951f8f1b07483d3552341f08633a08c892253da169660228b7952e46555d27f20a5cd171f64e28edcf3c0381f4fbde0684e579a3c3f36a834f641cd98634f314f61c6a3b9cecc66eba5f1d91f5f62061d2ca80439376ebebabe6b18f3882a981ba7c69931f02e8c43f2d033a69ee74e02e3e8ecd8f8e28fa757c6a7db030cba8e402a9e959e031aa6a0fd3e6eebf0f5616a0255e8a14aceba66879e38662f8cc32e8b9d961dc62684a113766dda0a4dd66b433b0a81224fe9ea258b6622635d081dc76c3b51cbec74a28881431984bd5ebbdb7370d18e5bccb64220bb1af99d7305175cae85e4d5de921b7f18b8b3c09f7ae783c02ddb886991aa8bca9c6ee2a54f854d22e88dbe763acb052ae9831a7a81eb0fce83e1b55bcdc60812cab6937b9c8e98a612104d73ba0205f9a58870d3c8d578320c86636f30424679e0577b8424fd9f0fcf8460bb2e7759956f72a11bd8bd28784dd3a2046caa0f6299965937adfa894d76bbdaff2b0d7c7f708bea34cfe9f6af1c76d4696bfa3f744a7c19554ef7ba2744ab3db93888da075187ec7eedf0a911bc6a9532f93e75fd5b522df910430e197b7fba105c26defd63ecaf2f62f102a38c5418e32c33a945580ed54cf355d9ca23bbd36bb52c528273f52ad7ee98fbc3d33574455841a61e3baaae6fb9893a55c82710267114bda1f705b37f00dae6097b3e050000",
    ],
    [
      "ETag",
      "vZSalTqKdlh8u57Nyhutkg==",
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
      "Tue, 26 Oct 2021 14:49:29 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-74-1635259702250"
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
      "90",
      "cd",
      "6e",
      "c2",
      "30",
      "10",
      "84",
      "df",
      "65",
      "7b4dc44f9b22903840052d2aa234402f1542266cd240924ded352d427977d601f5dc8bbd1e7f23cff80c87b4d8410fb669f26d519fee12e4773784686cc646b6920a83e001b24a848c97bfb6f1b11f1ff3c6bcbb18bc8e8356f896f4fb4298e80b7305bd33c429663b03bdcf33142a47b1a99c6cc102f1a974e7c96c397a1e8522e4b473c26c359d0e86d31154de9f69b3290fffb2ac2b0ff6b40d31468d45842e43a9698f114f5c3da3f23243df90d5111aa8e1fa22d1644ba5897c51fcce83df7abc0fda41b7d36cb783a68019458a532a845d2d241b30b1ca42fa9176d01240d7a3148debf558cbaec36d5a57eb9b69786234734d92c0a07bbc790df2442e1c4b68d6163d8894fce34bcad773750180cfad32a4010000",
    ],
    [
      "ETag",
      "fTxu/VjFvm/P9SAKF51ROg==",
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
      "Tue, 26 Oct 2021 14:49:29 GMT",
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
      "5b",
      "72",
      "82",
      "30",
      "14",
      "00",
      "d0",
      "bde45b1c0a414dff8aa08510b020f2f871305e115384e151c44ef75ea7dba8670fe71b659c43dbeebb4ac015bda23153c8944f69bdd057799ec0c771479af79bc0e2e2093bf41d7c8da8b46dd3d83c39d2d23767a73633721626ec60f7e5d119cafb0127bb5c7f6181da8e6fd45f2d4bbec9a2b09178c0bfcc54f1cc6e382b86b5a24d41d74ceeab54896c37af3873a5c8e298a6e7cfa1745359bb9064e769b1608576b0cea6226dc8c20ae6d819ab78bdee01887b97b52d1335b712f30a7459fb943279de83ba51bb30884434c3b5ed1a9eaee204a64f4fff179a20b8d54503edbe786c57354226e8affebe1b6b78fcd7216ba0413fbf73a4306919040000",
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
      "Tue, 26 Oct 2021 14:49:29 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-75-1635259702250",
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
      "2b",
      "c8",
      "7b",
      "5c9390049210295aa384ae4809d90869574d1332e642dd124cb1695755f9efbb98a66b37a97dc2f63de79e733f7822b7bc48c894c43cbbaba17afc742362724240d10c5f3f5b2e5ffef0f9c36fdbbb32d959ff21e1c57c3643046f5892eecb1c3a52d4150339dd6dbb5925ea925642743051676c77faa3a13db09db13918d826f224e4e98a17b7c8be56aa94d35eefa8ddcd84c872a025975d26f62fefbdfb41afacc40d30257b6f257ba8227bef8b7ec905a38a8b62b6dba2815a4215c19ef21c2dfc6526f1e9dbd45d4ef7dd0cc1f79c01654cd4856a6c610a268a946775a5b392e913d1365f1dc8d65db98bd06022aff74554d03d9c18095534528f251867c1666d78fed92658cf436fe347dbc5b9bb9e77179bd56eed6f8dcb7337700d45e31c34d79819a7fae6e305f513908a175a3d6c9e1be5e70679ff8fa521a0b48436188dcd11ed4f4c274ee3314b27433b4e4d88e3493cb6e9303699638195c44091a745358b16a21825a371620de2c8194e9cc8729815396c6047566a9b233bb1467d07c8e1843c545cc192cb5248de76885c065ee84661b0f317f3d0d525a4b4ced5b235d614f0daa3c20211f44e4d8726ca052a35edf6fcd00de68bd0bb70db09af20a3ec717b87334e692e01d1b4c2e629a8d622c186117fbe769708d613fb760c4a32fdf9449a9e372e5eb5fc851ee2001bbb4a7fc9360c3cffabb673445cd0bcd690fbf6404ab47c8db5a1ebc32f44e292b659c8f79d1b5c91f62980142a28d8c7d344b00e7cf8af1d171fb1b8fa282315de7177986c445805ed0e715dee913d721ca74f34b852ffc4c6667f601fbbd6e468",
      "32c21e0af55c51bbf858682b56cb17100671fcbeeed6e10fa9c4a02f78040000",
    ],
    [
      "ETag",
      "+4EiDXNiwx5IY0cF1wdinA==",
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
      "Tue, 26 Oct 2021 14:49:30 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-75-1635259702250"
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
      "6f",
      "4f825014c6bfcbe92d6e6aa2c5e60b4c3216fe49716d35e7ae70400cb874efa574ceefdeb964d6aaaddec03987dfb93ccf037b784af2102c5825f17389627716a3bad3c51465992a49b782e712c100542c26d2891efaf9d61b0fca56e48c59e3f67eeb6ced6e970819ac316360ed214a300d25588f7bc85986b416f0b4ccf265d519a076851ecefca93b1a509ff150f7a3b9e7d93dcf8183715a0c9962cb8affc7dae260c086afa618a1c03c40ada5107c838172b54dc9b222c59ae4a508504205570f62c1cb8209ce6b34a975cc5aa37d6e36cdcb4ebdd934eb04a63c602ae139b1f319e903c5154ba7fc955c429b0051956438aaae2f344ec2ca882edd91df6e55fabe02242d4a525cfe0d92de35a3cff0811d23f8ceb18c97b93a51d7ded8feed38caf4f3a8beed3b3f08a928a913e2bb4367e6dbc389e61647efbd9d4239119c8294a8336cd45b1766a75d7f8ff58aeba8e93d9612251a1030fa3b6e120556c4528987378426a7bb7b020000",
    ],
    [
      "ETag",
      "EfZDnxLOGu4fEOa1KWxExA==",
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
      "Tue, 26 Oct 2021 14:49:30 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `stamp` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-76-1635259702250",
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
      "00000002ff8554fd6f9a4018fe57c8ed973653f950414c4c675bb691285ac476edb2e8711cf45ae42c77b898c6ff7d2f50dbba6e6d420277eff3bceff37ef188ee5916a13e0a59f250d07cfbe98e87a881a8c409dcea6a3b1e7e3ef5432f9bdda81737a70fc1e64732180082952c8157eb9436052f7242457f3e6b25392fd638e7bc098e9a96d9d4cd76d7e8da9666185d0d7882a6f18865f7c0be95722dfaaaba8fdd4a384f528ad74cb4085f3ddfab1b435de7fc8e1229d4c3902a4411eafb414f524eb0643c1bcc6720a010345fd015662948786146e19743d72d8657ad04c01b4628268417992c65810bc2b39825455e7945fd4754c97cf58166cec8390b94b3c9dc0b8e9678559297c70a16cafed050969053cc52ba60d1b2b42c16eb7be5ab3f19830514dc6241c552b9faeef88ea22c8504754b65a09c2843ef5c3964bb9e32f73c6716284727c7ca377f329f2aa7d70718901d51215956890e7098d252f0535dddb7dd2c09588288dab8b03413eb3dcd0ee3d02271afdd0d638d86612fb4bab81d6ac4eed04e14520c3c597aaf5838e399159951d425ba6e9bed88e800b23b26e9994668138b52abddb323db8c35b46ba0df3993f49c893517ac2e2ebaf2ddc05904fedc3b1b064e95468c8b549ed7e2ca245eeb94902480dec96b575a19874865a75c2f70fce159e05e3af5708c6882c976f600e311e3545040e31cafa8a4f998475034349dccdcc09d78c31130aa8e4ff70881fa3f1f5f08c1765d5559566f14b863e8d1703cad34ec4197382d2ad4a6fe408666684dcd68eadd4037fa7abbaf775a9aa6dda0ddaef17fe743df1f5e83209ce778fb970d92343b25fd1f512b7c75aac5ef55e8a88cf6ace9e0d439389968f76b074f03c1fad591d1c5dcf1af517de5d398e634231f0f1c802bc3877f91fd4a0316961ac2c07a4806e34d441984e4b41e73b6aa5279625b5a4fabfe4112e7f28dcdee76f6fd2c7d941ee98a66f229a37aa5ab2296a6423c83c008d3e9b9de37b0fe0185a97a2c52050000",
    ],
    [
      "ETag",
      "1/3fA+BRbNnSZ/QZBqTvXg==",
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
      "Tue, 26 Oct 2021 14:49:31 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-76-1635259702250"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d90414fc2401085ffcb786d23605a9484839846319568918b8690a54c4b4bdb29bb534943fadf9d2dc4b397ddd9b7dfcbbeb7673864d50e26b0cdd26383babd49913fec10a1690a36b2d55419040790552aa49f7e79a1599d16f7f9fe6d568c5f97edf1f6349d0a61e23d960a266748322c760626df67a8548962532535150bc46d6dcff3c567f01c442294b4b3c26215868fb33080cef9336d36f5e15f9675e7404edb0813d458c56833d49a728c796eeb1955d605ba861a1da3811eee2f524d4dad34912b8a3bf6dda17fe78dbc87f16034f2060216142bcea81276b5946cc0c4aa88e824ed602880ee47299af4eb4f2fdb0ed769ddadafa659cb68de35490283f6f1c125c813d9702ca15937e840ace41f5f32be9cbb5fe48cb6a9a4010000",
    ],
    [
      "ETag",
      "6gZ5LsUwN8jhMBl7JSyq/w==",
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
      "Tue, 26 Oct 2021 14:49:31 GMT",
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
      "30",
      "00",
      "00",
      "d0bb64ed3844d481ee840a82460bc58ad96430448c918f84c8a7d3bbd7e935eabbc3fb0609a54c4ad2948215e00df4c9c41cd3f1ba322c27e3d238de763ee6c46ef58fa64953e5db385f0cf13aa4f5b590abb223115b54a10b8fc96ab68dfc049924e3a2d651600d27d8a1cf2335fd3cbe69a2946843a17a9f3c0e22535f9bcc9ed30d94582bbdd3a50806434bdd65abcdbc18de63a74fdb7cdeed1dc551dd4c9410eaf438a07c3a3405f1a07ff513bc0edbca508b90b33ad8a39c04e554d0a0c0d8e923525c5c85f5f3ddda2d236f798665e05a5b397e79f9bfc008b0aee23593843fb7eb33d31c81bffaa4e92bf6fc6fb1a46635f8f9059ccc76ff19040000",
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
      "Tue, 26 Oct 2021 14:49:31 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-77-1635259702250",
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
      "0000000002ff85536b6f9b3014fd2bc8fbb82601f2208914ad28216ba4866c84b49aa6091973a1ee00536c5a5555fefb2ea6e95a556a3f61fb9e73cfb90f9ec85f5e26644e629edd35503f7eb915313923a06886af6eedad73fbe2c1bd2bd62b3f70150cd9d76cb140046f599216550e3d299a9a819c1ff6fdac164d456b217a98a8e7383d6b321cdbe39963daf6d8449e843cbde4e55f64df2855c9f96070d2ee67426439d08acb3e13c5cbfbe0de1e54b5b805a6e4e0ade40055e4e063d16fb9605471512e0e7b34d048a8232828cfd1c27f66129fbf4ddde7b4e86708bee70c2863a229556b0b533051a63c6b6a9d95cc9f88b6f9ea40f6dea5b70c0d26f2a628a3921670662454d1483d5660ac83ddd6d8f8eb5db075c3cdce8ff6cb0b6febf697bbcbc3d6df1bd7175ee0198ac63968aeb130cef5cdc70bea2720152fb57ad83eb7cacf0ddabc1f4b4b4069095d3072cc09b5a6e62c4e6387a5d3e1384e4d88e369ec8ce93036d96c04a324068a3c2daa59b414a535b253cb9c8ea3a13534a3d12449a3590293885a43b067332b89a7408e67e4a1e60a565c5642f2ae43e43ad8845e1406077fe9869e2e21a54dae569db1b680d71e151688a00f6a3ab6512e50a96df7c60fbdc05d869b2baf9bf02564943deeef70c629cd25209ad6d83c05f55624d830e2bb5b6f85603db11fa7a024f3df4fa4ed79ebe255cb5fe8210eb0b5abf497ecc360e37fd7764e882b9a371a72df1d4885966fb036747dfc83485cd22e0bf979f0825fa47b0a20851a4af6f93411ac039ffe6ba7c5472cae3eca488577dc1d265b115643b7435c977b623bd6d8768806d7ea5d6c321a9dbad6e668334201a57aaea85b7c2cb4136be40b0883387e5f77ebf80f98deab9a78040000",
    ],
    [
      "ETag",
      "ArEFl2HwAqmFDNRAte3c+g==",
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
      "Tue, 26 Oct 2021 14:49:31 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-77-1635259702250"
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
      "d1",
      "4e",
      "c2",
      "40",
      "10",
      "45",
      "ff",
      "657c2d4941a0d2840750d02680584a4c34842cdb6929b4ddbabb5509e1df9dad88464df4a59d999ed9de7bdb3d6c933c04175649fc54a2dc9dc5a8ef4ce1a32a53ade856885c2158809ac5440eb7bbd7ad7d77afa270e075f0813b3eefc7dd2e118aaf3163e0ee214a300d15b88f7bc85986b4c6455a66f9b2ea2cd0bbc20c6781ef4daea9cf4468fac97c34eaf547033858a7c59069b6acf87fac2d0e166cc4cac70825e61c8d96428a0d72ed199b8a65458a35254ac9514105570f6229ca8249216a34a9394eadde3e6f355a1dc76e345a3681a9e04c272227763e237da08566a92f5ec825b40990554986a3eafa4ce324ac8c98d29b04ed66a5ef2b40d2a224c5e5df20e95d33fa0c1fd83182ef1ccb4499eb13351cddf67e3b8e32fd3ceaaa170c7e104a53522724f0c68359d01b4f0db7387aefef34aaa91414a4429361dd6e5eb49cb6fd1eeba53051d37b5c2d4bb48033fa3b6e120d6ec452858737f42b10ec7b020000",
    ],
    [
      "ETag",
      "Fkyxk0QWsfdEI9eZc7RcBg==",
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
      "Tue, 26 Oct 2021 14:49:32 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `amount` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-78-1635259702250",
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
      "54",
      "fd",
      "4f",
      "a3",
      "40",
      "10",
      "fd",
      "57",
      "c8",
      "de2f9ab48552a01f49e3f52a7ac44a3d4a35dee5d22ecb82ab7c5476b1694cfff71b165bed79a7499332cc7bf3decccef28c1e5816a2010a58fc58d262f3e53e0f5003518163789b25671717c93a64ed0775fdf3b1dd2f3abd703d1c0282552c8ed355429b3c2f0b42f9603e6bc5455eae7091e74d28d4ecf69a6dab63ea66bfabe9baa9018fd3249ab0ec01d87742acf8405577daad38cfe384e215e32d92a7fbf7ea93aeae8afc9e12c1d543491554b8fab1e84992132c589e0de7333050725a2c688a5902165e9961f0f5b0748be1b41503f889118a09c9cb4c54b6a004c9b388c56521aba2c1339236df3ca0993db1c7be329ece5dff6889d38abc3c56305776414359424f114be88285cb2ab358ac1e94336f7a091970708739e54be5e6bbedd9ca9ea60c951365e49e2a8774c755e6ae6bcf7ce5e8e45839f7a6f32be5dbed01067c87940b9649d73e0e125a397e19acf3fe382b0216e0a24e2eba9a85db3dad1f44419744bd8e19441a0d825ed0357127d048dfa04618500c3c5155972c9cc1ac4233303a3a09231c456dd33408098c9e11865a976a56d8b1f45ebf878d3eda36d0ba60829e32beca39aba78b6e3cc7b717be3777c723df966d44b84cc4696dae6ae2ad4f014d02e883beb65596e5a0541d95e3fab6371afbceb55d6fc784c6986c668fb01f114e3805342e704a052d2ef3108686aea633c777a6ee68020c79e4573b0447835fcfaf047fb3925316f21f9d4da623df32a4831de41a27a5c43cd50fa8dd3201b16dfcbfccc8f346b7208d8b026ffeca413b96a4ff4341e26554dbdc2ba24a6d17e9079171105968fb7b0bbf06829b562ba31f73dbbb",
      "45f52b8f46b4a019f97cb5002c139f7e3076b717b0707f41860b88619109af444841eb8566a96ce585ddd53ba68524b810ef7286a5ef4eaeaa5155a429cdc44b47f5ed9543ac5225df8320097be83aee3964ff00770f3e033d050000",
    ],
    [
      "ETag",
      "nlFKKlwdi1k/wZq19r38dw==",
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
      "Tue, 26 Oct 2021 14:49:32 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-78-1635259702250"
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
      "50",
      "4d",
      "4f",
      "c2",
      "40",
      "10",
      "fd",
      "2fe3b58d50ac280907d106490891226a620859daa1b6b49db23b8510c27f77b618e2c978d99d791fd9f7f6089bb48ca107ab34d9d6a80f5709f2d40e219a3a67235745a54170005925a2dca745fe16c73cdfee3e82d9d3fbf43adb0e937e5f1426fac24241ef08eb14f3d840eff308a52a506caaa0ba6411f1a1b2fb68f21a0c83508082620b4ce6e3f1c3601cc0c9b99896cb6af32fcbe2e44046ab10d7a8b18cd066a8346518f1c8d633aaa872740dd53a42038db821124d75a534912b88dbbd73dbb71ddff3efbb2dcff35b22cc29529c5229daf94cb20113ab3ca4bdb4838e0874334ad17573ee04f69a0e766a37d17e73ed0be7fdc1dd586ef1f3d8e0c0685e344972833674eb5ce0916c2996b2ac6b742052f2ffcf299ff7d3377bb0a5badc010000",
    ],
    [
      "ETag",
      "wimlVddtUqvXESDWQ/jqGg==",
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
      "Tue, 26 Oct 2021 14:49:32 GMT",
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
      "6e",
      "82",
      "40",
      "00",
      "00",
      "d0",
      "bb",
      "cc",
      "5a887c0cd09d2830a020f28d6c26031d65207c1cc00a4def5ed36bd47787f70d7051906140635793167c80198b1a5ff0875ed5cd5be9d3c0c39f95fc909fea9511644e52b868f9da0bd6e73b91212cafb67f121d3ae8f96ea72e997092d18d63e54339323b9115db991cc8fa349e383789dc8e8e46429a43baa7f11657b9849ba77f5116a523d96614a35032eaaf871a7aa19d5a1a0e883196f57e3b19693ec1fa2438b038fb52145f5aecb54d455d51493a216a9078a46d05b9dc364d756b9f8bfb229a56b6dfe5332c3d5f43b1557103aa04feededff022b409e3d656440f4b55dda68da0afcd547e3dc93d77f9d604618f8f90507f77e6619040000",
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
      "Tue, 26 Oct 2021 14:49:32 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-79-1635259702250",
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
      "da",
      "30",
      "14",
      "fd",
      "2b",
      "91",
      "f7",
      "d84252200d20a11541ba2141d84268374d53649b9bd46d12a7b1c35655fcf7dd38a56b37a97d8aed7bce3de77ee491dc896247c68489f4be86eae1c3ad64e49480a629befe866c75e254bbc29ee7c560abf7e7df4ebce9648208d1b014cdcb0c3a4ad6150735de6eba6925eb925652763051c71b75cecefb6ecf1d794eafe73ac85390254b51dc21fb46eb528d6dfba8dd4da54c33a0a5505d2ef3e7777bdfb3cb4ade02d7ca7e2d69a38ab2df16fd98494eb590c564bb4103b5822a869c8a0c2dfc65eed8c5ebd45d41f36e8ae0bde040399775a11b5b9882cb2211695d99ac64fc488ccd1707b2f197fe2cb2b8cceabc880b9ac3a9b5a39ac6faa104eb325cafac4570b90e57d368b10ee2cdecb3bf9a7667ebe576156cacebcf7ee85b9ab20c0cd79a5817e616e005f577a0b4288c7ad43c37ca4f0d5afc3f968680d20ada60ec39e7f46ce88c58c23c9e0cfb2e4b1c606cc83c97f699c3470318ec1850e41951c3a2852c188c868cb967f1d0ebf37800ae175317580c30640e3d1f70ee39e4704a7e5542c35ca8522ad176885c878bc88fa3701bcca6916f4a48689de9796bac29e0a5478d0522e88d9a0e4d5448546adabd08223f9ccea2c595df4e780929e50f9b7b9c7142330588a615364f43b5923b6c1809a62b7f8e6033b12fc7a022e31f8fa4e979e3e245cb9fe9110eb0b1abcd976ca270117c32768e882b9ad506b26f0fa444cb37581bba3efc44242e699b857cddfae177d23e85904005057f7f9a08368177ffb5e3e22316571f6594c63bee0e578d08afa0dd2161ca3db2bdde68e81103aef4bfb1be33728f5d6b7234192187423f55",
      "d42e3e16da8ad5ea1984411c7f60ba75f80300ffd96378040000",
    ],
    [
      "ETag",
      "xelM+0rdn/Dmn4Utv6X+7A==",
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
      "Tue, 26 Oct 2021 14:49:33 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-79-1635259702250"
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
      "83",
      "40",
      "10",
      "85",
      "df",
      "65bc94465afba3245ea056db84d64ae995699a2d0c2d16767077d1344ddfdd59d46ad4446f6066f86639e7c00e36994cc08365b67aaa506d8f5668ee6d11a2ae72a3f95692d4080ea0112b269f9aad915c0fa2cdd9715fde9f480a5cb9f62f2e98d0f11a0b01de0ed20cf34483f7b003290ae4b598f2aa908bba73c06c4b3b9c46e1707ccb7d4189edc7b320f02f833eec9dc362228c58d4fc3fd6e67b071e6919628a0a658c564ba9e8116333b436b528ca1c1b9a2a15a3861aae1fac1455a550440d9e347ae78d66f7b4d3ea9cf7dc56abe33298532c4c4692d9d994f5812123f2905ed82574195075c986d3fafacce32ca98dd872388ebaed5adf5780a5a5598e8bbf41d6bb16fc193eb0f708be73a2a04a9a037513dcf9bf1dc7997e1e75ed47fd1f84369cd4018986a3fe34f24713cbcddfbd5f6e0dea89220e52a3cdb0e9b6cf3abdaefb16eb15d9a8f93d9e51153a100bfe3b0699012f15b9c6fd2b4a6a930a7b020000",
    ],
    [
      "ETag",
      "q12MnhHTk8+EnQ/noL0nhA==",
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
      "Tue, 26 Oct 2021 14:49:33 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `id` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-80-1635259702250",
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
      "54",
      "fd",
      "4f",
      "a34010fd57b8bd5f34e907a51fd0268dd75354924a3d4a35bdcba55d960557814576f1d233fddf6f16acdae8694202b3f3debc37bbb33ca23b968568840216df97b4d87cbde5016a202a710cabc231cead72891d7cfab37bf357377a26cde3f118104cb1044ef38436052f0b42c568316fc5052f735c70de84424d4b6f7606ddbed11f9aba61f475e0099a445396dd01fb46ca5c8cdaed9d762be63c4e28ce9968119e3eafb71f8c765ef05b4aa468ef4bb64145b43f163d4a38c192f16cbc98838152d0624553cc12b0f0c20c836ffba55b0ca7ad18c00f8c504c082f33a96c4109c2b388c565515545a34754d97cf581e6f6d43ef6b5e3d9c2f50fd63855e4f5a18685b60b1ada1a7a8a5842572c5cabcc6a95df69a7deec0232e0e0060b2ad6daf5b9edd99ab656a02f63ed489bb827da3ed771b585ebda735f3b383ad4cebcd9e252fbbedcc380e9900ac9b2cab28f83842abb4fbbeabc3d4b45c0122cd4c995a90f70c7d28741149824b2bafd20d269105881d9c7dd4027c31eed8501c5c093aa7ac5c219cf7ac3c08c74d3e89230e8461635ba6110116b10e9b813199486c381a50ffa16da36d09f82497ac244ce05abb7165d7b8e6faf7c6fe11e4f7cbb6a23c265224f6a73aa89d73e253409a00ffadaaa2ce3a0a4cec9717ddb9b1cfbce955d8fc694c6986ce6f7301c114e0405342e704a252d2e78089b862e6773c77766ee640a8ceabc2f77088146bf1e5f08fe26af7659566fa535e855fa3bc0154eca0af1507fa04e1f6db78dff979878de6409b2b828f0e6fdf2efd6aff055545b7cd6434a6d17197b516f2f1aa0edef2d3c0d0457ac56463f16b6b744f59247235ad08c7c3e5600ae129ffe2976d716b07071414648886188895022a4a0f530b3b46ae5896d76cd610f55e042bec90d61d01a2fd75555a429cde45347f5b5ad3651a54af10c8224cca0ebb8",
      "6790fd079a82c39c36050000",
    ],
    [
      "ETag",
      "sI2H8uYaIaFZ3hz0247epg==",
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
      "Tue, 26 Oct 2021 14:49:34 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-80-1635259702250"
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
      "50",
      "db",
      "4ec24010fd97f1b54d4a6b15497828069184a0948b268690a50cb5d076ea5e3485f0efce16c38b3ef8b23b732ed973f608fbacdc4007d659fa6150d65729ea891d625426d78aaf8a4a85e0006a91b2b21dcc162fafa17c4807d3a73a0aa2d6616126dd2e2b54f28e8580ce11b619e61b059db72394a240b689824ca959a4ebcaeec3f1ac3fe8c70c14b4b1c0783e1a45bd511f4ecec5b45a55fb7f5996270776b48e718b12cb046d864ad20e133db4f59428aa1c5d454626a8a01137442ac9544212b98cb86dcf6ddd04a11fdedd7abe1f7a2ccc29113aa392b5f32967034d5ae4317d713b0858209b918b6e9bf393e1b0e96027bf89f637d7fac50517eeda72cb9fc77ab546f52c89932bb4a1bd73817bb2a53497d5d2a00389e0ff7fccf4793f7d0397c2185ddc010000",
    ],
    [
      "ETag",
      "83TVWX5rFgGSOyA3A1zVuQ==",
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
      "Tue, 26 Oct 2021 14:49:34 GMT",
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
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "64",
      "ad8ea814d21dc8c7e1230a08d60d0331022d08e453834eef5ea7d7a8ef0eef01728430a519ebbef015bc83315fc0199ab9bdaa5b6525f4cfeda530b415e6d3ca39a8d86ee479dfa153f87d296d2fb10dfec145b05caa51928fbad6673ee3cdde43b4e5fc3ca83231a9c2ea624bcec328217fed2ca052847d866247b1f334d0f6466edf8988b38e6c19751a7fba48add069c56d43537a6c4626f1e0342f214f5825553012c6b1e858b81b86b57bd8e8ed545fc5e6bdf4b4126ab1e092efdeaeb632b2f26d38ef4cab7054911cc92a3a98e8ea05b39797ff0b4c00167d4d30cdeae7f6a50ce104fcd5cfd8d8e3e77f1de70413f0f30b51c8f4de19040000",
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
      "Tue, 26 Oct 2021 14:49:34 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-81-1635259702250",
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
      "000000000002ff85535d6f9b3014fd2bc87b6d124220a191a2354b688794901548bb699a906d0c750b9862d3a9aaf2df77314dd7aa52fb84ed7bce3de77ef084ee7895a239223cbf6f59f3f8e55610748298c239bcfe5417d16de9f95616de6f2ed7df2c5be4abe5620108deb1242eeb820da4681bcae47c1f0df346b4356e841840a2813b1e8ca713c7724e67a6653926f0242bb20dafee807da3542de7a3d1517b980b91170cd75c0ea9285fde470fd6a86ec42da34a8ede4a8e40458e3e16fd5a088a1517d5621f818156b2266125e60558f8cf4cc9d9dbd4438ecb610ee0074e19a654b495ea6c410a2aaa8ce76da3b3a2f913d2365f1d50e46dbc556c5051b4659554b86427468a154ed463cd8cf370b735fce07c176e97b1bf0b9268f5dddb2e87abdd66bf0d22e3fabb177a86c2a4609a6b2c8c337d0be002fa29938a575a3dee9e3be5e706f9efc7d211405ab23e98cccc291ebbe629c9c88c66eec42199c90871c9ccc11362d2539bd9296118785a54b370252a3699da6ee692c4c5ae9dd8996b26783a7613c7a5139a127396111b1d4ed0df862bb6e6b21692f71d42d7a11f7b491cee83d532f67409196e0bb5ee8d7505bcf6a8a040007d50d3a18b72014a5dbbfd20f6c2e52af6afbc7ec21b9663fa18ddc38c335c480668dc40f3146bb6228586a160b9f5d600d613fb710c4a34fffd84ba9e772e5eb5fc851ec3003bbb4a7f5114877e70a1ed1c1157b86835e4a13fa01a2cdf406de0faf00790b0a47d1674b9f7c25fa87f0a59c61a56d1cfa709601df8f45f3b2e3e6061f541462ab8c3ee50d989d086f53bc475b947f6cc766c0b6970a3dec5a6f6f8d8b52e47979195ac52cf15f58b0f85f662ad7c014110c61fe86e1dfe01b6fbd41b78040000",
    ],
    [
      "ETag",
      "XtGSjmEI2fRqLQDB24ogCA==",
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
      "Tue, 26 Oct 2021 14:49:34 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-81-1635259702250"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d925b6f82401085ffcbf41553a5de4ae283b6d692a055c4a7c6981506c4028b7ba931c6ffde596a6dd336695f6066f86639e7c0115ed2220207d669b2d3280e5709aa99297c943a53926e252f248205a85842a4bd19db8bd84be5f54cbbc90e0b3dc7d1bed72342861bcc1938478853cc2209cef3110a9623ad853cd379b1aa3a0bd4a134c379e0bb9311f5398f4c3f59785e7fe00de1645d1623a6d8aae2ffb1b63c59b0e56b1f6314588468b494826f3154aeb129595e6658935c8b10255470f520115c974c705ea349addba835da372dbb75dba9db76ab4e60c643a6525e10bb98933e505cb1cce77b72096d02445592e1b8babed2388d2a23a6742741bb59e9fb0a90b438cd70f537487a378c3ec307768ee03bc772ae0b75a11ebca7fe6fc751a69f47ddf783e10f422a4aea8204ee78380ffae3a9e19667ef83834239159c829468326cd49bdd56a75d7f8ff58e9ba8e93d8e121a2d0819fd1d8fa902276699c4d31b50497b657b020000",
    ],
    [
      "ETag",
      "2hM2UfLis/QuIgqenuSeGw==",
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
      "Tue, 26 Oct 2021 14:49:35 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `purchase` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-82-1635259702250",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8554fd6f9b3010fd5798f74b2be58384902f29ea58ca3aa4847484b48ba629318ea16e01536cba6655fef71da6699b756b252438df7bf7ded9671ed00d4b3768880216dd1634df7ebce601aa212a7104abd677f7967492d9fdfcfef7a567e9d31b67ba8c462340b092257092c5b42e7891132a868b7923ca7991e19cf33a14aaf7dbf556d730dbe6a0a7b7dba60e3c41e370c2d21b605f49998961b3b9d76e449c4731c519130dc293a7f5e65dbb99e5fc9a12299a87924d5011cdb7454f624eb0643c1d2de660a010345fd104b3182c3c3337c1a7c3d20d86934604e03b4628268417a92c6d4109c2d3904545aeaaa2e10352365f7ca0b93db1c7be369e2d5cff688d9392bc3ed6b0d0f6414d5b434f218be98a6dd66566b5ca6eb42fde6c0a1970708505156bedf2abedd9daf3d25afb30d24e34cb3dd50e2b38aeb6705d7bee6b4727c7da99375b9c6b9f970718b0bea142b25419f77110d3d2f4e3de3aaf4fb4246009aa5572d5d3bbb8d5d7074118f448d837cc20d46910f4839e898d4027830eed6c028a8127cbea8a85539e9a21ed04a6d9c7467f60b4c36e3820446f6133c4a6d1ede921e9066647a706dad5d0af9c497aca44c605ab36185d7a8e6faf7c6fe18e2ddf566d84b888e56965ae6ce2a54f094d02e88dbe76659671502a4fcb717ddbb3c6be7361570332a11126dbf92d8c48886341018d739c5049f329dfc0a6a1f3d9dcf19d996b4d80a14efd7c8f1068f8e3e199e06f33b5cb52bdd1dcf71cf74c19d8232e705c28c85df581ac0cbca2ddaef6ff3296e7594b90c6798eb77fe5a09d6ea7a4ff4342e15554d9dc4bb650a9b68fda0751e720eaa2ddcf1d3c350497ad5246df16b6b744d59247439ad394bc3f5a00568977ff19fb0b0c58b8c2202324c430c844942224a7d540b344b5f2c8ee9986d9420a9ccb57b94ecfd89f5c59a3ac48139acac78eaa0bac36b14c15e20904499843571de2ee0fe231446040050000",
    ],
    [
      "ETag",
      "AXNqc4mOxSxzWRA0MkIMYg==",
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
      "Tue, 26 Oct 2021 14:49:35 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-82-1635259702250"
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
      "ff8d504d6bc24010fd2fd36b021ab555c1838a54d14a4d9b5e8ac81ac7349aeca4bb134b10ff7b6763919e4a2fbb33ef837d6fcf704cf50efab04d93cf124d759720afdc10a22d33b67215a42d8207c82a1125564fbdeedb305a1de7a771daeae9ed74ae578381286cfc81b982fe19f629663b0bfdf7336895a3d8544ea566117155b87db67c9d3c4e420172da3960192d16c3d1620217ef66da6c8ae3bf2ceb8b0707da86b847833a4697a13074c09867ae9e557991a16fa934315aa8c53591182a0b65887c41fc6ee037ef5b9da0d37b680441a721c28c62c52969d1462f920d985865217d493b6889c0d4a314ddd7e749e076ddc14dcd3ada6f2eb871ed3fb8c071eb9fc74615a37d3624c92dbad08d6b8131b9522c65d994e841ace4ffa7295ff7cb379ade164bdc010000",
    ],
    [
      "ETag",
      "eyM98VAUQkKvCi39nbHKnQ==",
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
      "Tue, 26 Oct 2021 14:49:35 GMT",
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
      "d34b7282300000d0bb64ad0e34fcd29d0c0d41d45611946e32010252143041043bbd7b9d5ea3be3bbc6fc0d2944b49bba6e2357805237b41b374e6b7968d8b3250423f6a91f13e25a7ed5d7af7e9e5dc417a887dbfd762afea8eb6292266aa8badc893d1a2059927f955399c9d2cdb63b4fe2c065c46a11630a7f10a53a1325b582655f4c3e026f9b24edade40b706270a165e34a719dcf18db953d79845391c4f47da572e7acb5d55b3c35a14a267172a6c3a5d7c195acdf703821456abdbb5ece066904b272631090377f456478675bdd208f9f09cb5acf5fdca2cceb3a7a7ff0b4c001fda527049cbc776a82334017ff56937b6fcf1dfe64c70017e7e0193c1c12a19040000",
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
      "Tue, 26 Oct 2021 14:49:35 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-83-1635259702250",
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
      "6fda3014fd2b91f7b590f0080424b4229ab648256c21944dd314d9e626b80d711a3b4555c57fdf8d53ba5695da4fb17dcfb9e7dc479ec9bdc8b7644c98481f2a289fbedd4946ce08689ae26b0fa6eed56e237f1d76a94eedc368bf711f0e93092244cd52745f64d052b22a39a8f17ad54e4b5915b494b285895a5eafd519f4dcae3b1a3addaeeb204f4196dc88fc1ed93bad0b35b6ed93763b9532cd801642b5b9dcbfbedb8f5dbb28e51d70adecf79236aa28fb73d1ef99e4540b994fd62b3450292863d85391a185ffcc2d3b7f9fba2de8be9d22f85170a09ccb2ad7b52d4cc1659e88b42a4d56327e26c6e69b0359f937fe2cb2b8ccaa7d1ee7740f67d6966a1aeba702accb70b9b0e6c1e5325c4ca3f9328857b36b7f316dcf9637eb45b0b236d77ee85b9ab20c0cd79a58e7e616e005f5b7a0b4c88d7a543fd7ca2f0d9a7f1c4b4d4069054d301e3a03daf19c114bd890275ecf6589038c796ce8d21e73f8a80ffd2d038a3c236a583497b9c7583248188b817a2ceed364188ffa5d1e77c0e9308f53d77112723c23875268b810aa904a341d229b701ef97114ae83d934f24d0909ad327dd118ab0b78eb51638108faa4a6631d151295ea76cf83c80fa7b3687eeb3713be8194f2a7d503ce38a1990244d3129ba7a15cc82d368c04d3857f816033b11fa7a022e33fcfa4ee79ede24dcb5fe9110eb0b6abcd97aca2701e5c193b27c42dcd2a03796c0ea440cb3bac0d5d1fff221297b4c9427eaefdf037699e4248a0849c7f3d4d049bc097ffda69f1118bab8f324ae31d7787ab5a8497d0ec9030e59ed8c381d377890197fa43ac33f04e5dab73d419610fb97ea9a8597c2cb411abd42b088338fec074ebf80f993db13d78040000",
    ],
    [
      "ETag",
      "3eA5GhWoXwhgtg/w9mW5qw==",
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
      "Tue, 26 Oct 2021 14:49:36 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-83-1635259702250"
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
      "5b",
      "4f",
      "c2401085ffcbf86889dcc1263c948bda04904b3131c690a59d42b1edd4ddad8610febbb315d1a889beb433d36fb6e79c760f4f511a800dab68fd9ca3dc9dad514f4d314395c75af12da3542158805aac99ec4bd53b77bd60d26d4fb73abd9b6ee8e2dee9749850fe061301f61ec208e34081fdb0875424c86b3ec579922e8bce02bdcbcc70eecddcf135f70905a61f2f8643a73b1cc0c13a2d06428b65c1ff63edf160c19656330c5162eaa3d19249daa2af5d635389248bb1a428973e2a28e0e2c15a529e094954e249a95d2b559ab546b571d92a57ab8d328331f942479432bb98b33ed0a4453ca35776094d066451b2e1b0b8bef0380a0a23a674c75eb35ee8fb0ab0b4308a71f937c87a37823fc307768ce03b2712ca537da2ae86b7ce6fc771a69f47f51d6ff083509a933a219e3b1acc3d673431dce3d17b77a7514d2471900a4d869572bddd6835cbefb1f6c844cdefb1b5ccd1025ff0df711369b043112b3cbc0125957fb37b020000",
    ],
    [
      "ETag",
      "DrsC+ITdPB8QjtnVQho/YA==",
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
      "Tue, 26 Oct 2021 14:49:36 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `purchase` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-84-1635259702250",
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
      "54fd6f9b3010fd5798f74b2be5938f90448aba2c655da494b4045a75d3941863a85b822936d9a22afffb0ed3b44bb7b512129cefbd7befec338fe89e65111aa290250f252db61fef78881a884a9cc0ea7c937cdbfecab01158dbf938f1164120ce2e472340b08a25f03a4f6953f0b220540c83452b297899e382f326146af6cd66b76758ba35b03bba6e758027681acf58760fec5b2973316cb7f7daad84f324a53867a245f8fa79bdbdd1db79c1ef2891a27d28d90615d17e5bf424e5044bc6b351b00003a5a0c592ae314bc1c20b330a3f1d966e31bc6e2500de30423121bccc64650b4a109ec52c290b55150d1f91b2f9c7075a383367e26b9379e0fa472bbcaec8ab630d0b6d1f34b415f414b3942e59b4aa32cb657eaf7df1e6e7900107b75850b1d2aebf3a9ea3bd2cadb40f23ed441bbba7da6185a9ab05aeeb2c7cede8e4583bf3e6c185f6f9e60003d6232a24cb94711f8729ad4c3fededf4ef13ad0858826a9d5cda9d1eeef63b83300e6d12f70d2b8c3b340cfba16d6123ec908149cd28a41878b2aaae5838e319350786a1139d58b863f423ab4fbb91de33ccc836ac6e6c74ed9e6e93aed947bb06fa5930494f99c8b960f506a36b6fea3b4bdf0bdcc9d877541b312e53795a9bab9af8d3a7842601f4465fbb2acb382855a735757dc71b4ffce995530fc88c26986c170f3022314e0505342ef09a4a5a9cf308360d5dcc17537f3a77c73360a853bfd823041a7e7f7c21f8db5cedb2546fb4f0bda97ba60cec1157382d1564537f209c8357b4db35fe5f66ec79e31b90c64581b7af72d04ecface8ff90507815d536f7925d54a9ed23fd20320fa21edafdd8c1d34070d96a65741938de0daa973c1ad38266e4fdd102b04abcfbcfd85f60c0c21506192121864126a2122105ad079aad552b4f6cbb373075a4c0857c9db3bb86b13fb9aa465591ae69269f3aaa2fb0dac42a558a671024610e5d7588bbdf734ea52540050000",
    ],
    [
      "ETag",
      "OvgZyxna3U5yOAgRSUUsGQ==",
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
      "Tue, 26 Oct 2021 14:49:37 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-84-1635259702250"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d504d6bc24010fd2fd3631388d1582b78a8455a21484d1b7a28226b32a69baf89bb1b5b11ffbbb3b148a1975e7667de07fbde1ea190750a63d8c86cd7a23adc646896768850b7a5d17c35546b0407d0888c95efb9bcf58bc13e2ebc74f92d63ad47bb329b4c58a1934fac048c8fb09558a61ac61f47a845856c1315b5b561913934769f2fde664fb388818a520b2ce2307c988633383957d37add14ffb2ac4e0ee4b489708b0aeb046d8646518e8999db7a5a544d89aea65625a8a1137744a6a86d84227219714703b737ec077e707fe7f97ee0b1b0a4441849356be357ce06868c2823fae276d06781ea462ebaedce3dc341d7c14e7e17ed3737bc72bd3f5cffca0d2cb7fa796c7a30a85f1471728d36b47729f048b694e1b246b5e84022f8ff9fa5b9eca733d375b0f5dc010000",
    ],
    [
      "ETag",
      "Wji+2k4vUk0dQxiUss8qlg==",
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
      "Tue, 26 Oct 2021 14:49:37 GMT",
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
      "ffedd3516e82300000d0bbf45b0d0808dd1f38406c50102de80f29ac130485b42054b3bbcfec1af3dde13d01c973ca79da3515bd810f20c81ccef2196a0dcb395f3635418bb8101a447240129f4ab989e46f76e8cdb5166cecb20f3fd7cade323266e37129b55fb14c68c8f7f55db14d41ddad28ca34bd8dc323d2f154839bb166d1bcb9eb8be38915b8320aecd859e55ea3aee18af2e0c639b9495bda432c2eaa19ee7a0f2fb8a6fae5ddd375757555d72caa4eb5457d266ce9ec1feb141fa6eed0f8c89706b433bd2ec9a195a021760fb611064b2f68e455e791d0c9e2fdecededff021340c7b66494a7e56bbba24138017ff5d34eb4f4f5dfa28451067e7e015ab69e3119040000",
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
      "Tue, 26 Oct 2021 14:49:37 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-85-1635259702250",
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
      "535d6f9b3014fd2bc87b5c131208218914ad514ad76809e980b4daa609d9c650b7802936a9aa2aff7d17d374ad2ab5bc807dcfb9e7dc0f9ed01d2f1334438467f70dab1fbfdc0a824e10533883db64fde3f6615acbe157db2e2e9bf1ef30709cc57c0e08deb2242eaa9cf5a4686acae46c17f6b35a3415ae85e841a2dec4e90dc7b6633953776059ce007892e5e99a9777c0be51aa9233d33c6af73321b29ce18acb3e15c5cbbdb9b7ccaa16b78c2a69be953441459a1f8b7ecb05c58a8b72be0bc14023591db302f31c2cfc6726e4f46dea3ec7453f03f09e538629154da95a5b90828a32e55953ebac68f684b4cd571f28f4d6de3232a8c89ba28c4b5cb01323c10ac7eab162c679b0dd182bff7c1b6c16d16aebc7e1f2c2db2cfacbed7ab7f143e3fac20b3c43619233cd35e6c6a93ef97000fd8449c54bad1eb5d7adf2738356efc7d212405ab22e18bb83311e4e0653921297a613db21e980113221ae836d32a0d3111b258461e06951cdc2a5286d6c3ba93b2531751d168f2cdb8a49ea8e202171f168e88eddb1830e27e8a1e68a9d715909c9bb0ea1eb6015797114ecfce522f27409296e7275d6196b0b78ed51418100faa0a6431be50294da76affcc80b16cb6875e575135eb30cd3c7f01e669ce25c3240e31a9aa758bd1109340cf98b8d7706603db1cb6350a2d99f27d4f6bc75f1aae52ff40806d8da55fa8dc22858f9dfb59d23e20ae78d86ecbb0f5481e51ba80d5c1ffe021296b4cb827eeebce017eaae0296b29a95f4f3690258073efdd78e8b0f58587d90910aceb03b54b622b466dd0e715dee910d8f65210daed5bbd8c4991ebbd6e66833b28295eab9a26ef1a1d04eac912f2008c2f87dddadc33f181a869978040000",
    ],
    [
      "ETag",
      "dLKjw9rs1+33mPu6ZSR55A==",
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
      "Tue, 26 Oct 2021 14:49:37 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-85-1635259702250"
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
      "0002ff8d925f53825010c5bfcbf618cc98091a333ee09fca46cd147b691ce70a0b62c0a57b2f1ae3f8dddb4b664d35532fb0bbfcf672ce813d3cc759000eace2e8a540519e45a81e74314559244ad22de799443000158b88cc3b846e6debb5bc73bb8faa3ef6cfeddeaedd2642fa6b4c19387b08634c0209ced31e329622adf93c29d26c597506a832d7c399371d8c6fa84f79a0fbf17c38743bc33e1c8cd362c0145b56fc3fd6160703367c35c51005663e6a2db9e01bf4d540db942ccd1334252f848f122ab87a10095ee44c706ed2c46c59e6857d69d5adab66ad5eb76a0426dc672ae619b1f319e903c5154ba67c472ec126405425190eabeb96c6715019d1e560ecd98d4adf5780a4857182cbbf41d2bb66f4193eb06304df3996f2225327ea7a78effe761c65fa7954cff5fa3f08a928a913e20d46fd99e78e269a5b1cbd774a857222380529516778516bb4aca65d7b8fb5cb75d4f41e4789020df019fd1db7b102276489c4c31bba6490397b020000",
    ],
    [
      "ETag",
      "pBigqv65xyJACVt2Nc+6Dw==",
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
      "Tue, 26 Oct 2021 14:49:38 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `date` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-86-1635259702250",
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
      "54",
      "7f",
      "6f",
      "9b",
      "30",
      "10",
      "fd",
      "2a",
      "cc",
      "fb",
      "a7959240f8119248519726b48b94928c9076dd3425060c750b38c5a65554e5bbef0c4ddbacdb2a21c1f9debbf7ce3ef384ee681ea13e0a68725f9262fbf99605a88188c009aca6edcee2874bbeabf96d32e7e5d96c7bba4d1f07034050c9e238dba4a4c959598484f7978b5652b072830bc69a50a8d9ed34db1dc3d2ad9eade9baa5018f93349ed2fc0ed837426c785f55f7daad84b124257843792b64d9cbbafaa0ab9b82dd925070f550520515aefe5ff42465211694e583e5020c949c142b92619a82855766147c392cdda2386b25007ea021c161c8ca5c485b502264794c93b2a8aaa2fe13aa6cbef9400b67ea8c7c65345bbafed11a6792bc3e563057f6414359434f314dc98a466b9959ad3677ca9937bb800c38b8c19cf0b572f5d5f11c4559475890b5f269a09c284377ac1cb227aeb2745d67e12b4727c7cab9375bce95d3eb030cd88e081734af4cfb38488934fcbcaf93f7a729095880893ab9b2b50e6e77b55e10077618770d2b88351204ddc0b6b0116861cf246614100c3c21ab572c9cb35c33c2d83063d3ee5abd5e6044a1a5d95db36bb53b7ac7d26d588b8caea1db68d7408f0515644cf986715a6f2ebaf226beb3f2bda53b1afa4ed5468ccb548c6b73b289b73e053409a0fff4b59359ca40499ed4c4f51d6f38f227974e3d1c5392e070bbb887f18871ca09a0718133224871c122d834349f2d26fe64e60ea7c0a84e7cbe4770d4fff9f44af0b79b6a9745f54663d9c0ee4dc14b9c9615e0a1fe40baa66b4d4d6fb62db4db35fe5d69e879c36b50c74581b77fe4a0a38e29e97fd1a9f055543bddebb691547b",
      "71711099075107ed7eede06920b86bb532fab674bc6b542f79242605c9c38fa70bc055e2c35fc6fefe02166e30c8700131cc72c8a54858907aa66956b5f2cc8671b3ab1f8ec0857897b30d737f78b286ac4832928be78eeafb5b6da24c95fc050449184577e29e43f637ed2db6ab3f050000",
    ],
    [
      "ETag",
      "l16SZNeX/njgPsuFOyBylw==",
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
      "Tue, 26 Oct 2021 14:49:38 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-86-1635259702250"
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
      "50",
      "4d",
      "4f",
      "c2",
      "4010fd2fe3d136c1625149388069904088b692180d214b3b9442dba9bb534943f8efce16c3450f5e7667de47f6bd3dc23e2b13e8c33a4b3f6bd4cd558afc6287104d9db391aba2d2203880ac525106f8be6ddee6079e46c928da8ed7f9f43a1a0e06a230f1160b05fd236c32cc1303fd8f2394aa40b1a982ea9245c44d65f7c9fc351807a100052516982f66b3e16816c0c9b99856ab6aff2fcbf2e4c08ed6216e506319a3cd5069da61cc135bcfa8a2cad13554eb180db4e2964835d595d244ae20ee7dcfbde9757dcf7fb8eb789edf11614eb1e28c4ad12e22c9064cacf2900ed20eba22d0ed284537edf925b0df76b093d746fb9bbbf9c5752fdcade5963f8f8d1a46f3ac49921bb4a13be7028f644bb194655da303b192ff7fcaf8bc9fbe010e3b4d0adc010000",
    ],
    [
      "ETag",
      "EeZhyXNwtKSdBShGblK+SA==",
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
      "Tue, 26 Oct 2021 14:49:38 GMT",
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
      "7282300000d0bb64ad4e25b5407744a25463954ff86d188ce1d352488016b0d3bbd7e935eabbc3fb062963bceb92be79e735780653aae80bb6d80b0d6df21cc978ebb9769c396cde0993644c53a055e083b4b4adede57417f7aae1b3d296e7a8a171b581c7c04b28ae30190c9389c6ce5e91080e6779ec9493395d118ebcf4a15fe5613b9161398663a0a9b59415c108670595e4114e2574f4f5f50219d1aec5f2f0f1b9cc6989334ad7ee3eb72f86f5d422c31f39f79dda44ae12d7cc3c2b3b2bf0c2e1ede837ca0eaaaea346fe36f99a57e2a508318fb4d340a2c5ddddff0566808fa26c799794b7ed70a5eb33f0573fe927c16fff114f5bde829f5f8e8712ee19040000",
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
      "Tue, 26 Oct 2021 14:49:39 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-87-1635259702250",
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
      "2b",
      "c8",
      "fbb826a4240412295aa394ae5409d90869f7d0846c63a85bc0149b765195ffbe8b69ba5695da4fd8bee7dc73ee834774cbcb044d11e1d95dc3eadda71b41d011620a67f0facb5315b998bb8938ff7bf143eed2b3e3cfdbf96c0608deb2242eaa9cf5a4686acae474bbe967b5682a5c0bd183443dd7e91d8f87b6654f9c8165d903e04996a74b5ede02fb5aa94a4e4df3a0ddcf84c872862b2efb5414cfefe6bd6556b5b8615449f3b5a4092ad27c5ff44b2e28565c94b3ed060c3492d5312b30cfc1c27f66424e5ea7ee735cf43300df73ca30a5a229556b0b525051a63c6b6a9d154d1f91b6f9e28036ded25b44061579539471890b76642458e158ed2a669c85eb95e10767eb70358ffc75106f16e7de6ade5fac97db55b031aecebdd033142639d35c63669ce85b0017d04f9854bcd4ea51fbdc2a3f35c87f3b969600d29275c1d8198cf1b13b989094383475873649078c109738361e92019d8cd828210c034f8b6a162e4569a54382094ee2b1e5e27864d351ec5a131ad3f1d8765dec38b66da1fd117aa8b962a75c5642f2ae43e82af4232f8ec26db098479e2e21c54dae4e3b636d012f3d2a281040efd4b46fa35c8052db6e3f88bc70be88fc4baf9bf0926598ee367730e314e792011ad7d03cc5ea9548a0612898afbc5300eb897d3b04259afe7e446dcf5b172f5afe4c8f6080ad5da5bf6813857ef055db39202e71de68c87d77401558be86dac0f5fe0f206149bb2ce8fbd60b7fa2ee296429ab59493f9e268075e0c37fedb0f88085d50719a9e00ebb43652b426bd6ed10d7e51ed8cec4b22ca4c1b57a131b8ec687aeb539da8cac60a57aaaa85b7c28b4136be433",
      "088230fe40776bff0f4991dd2578040000",
    ],
    [
      "ETag",
      "ZEtpbJA8doHxJXsyfF1+UA==",
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
      "Tue, 26 Oct 2021 14:49:39 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-87-1635259702250"
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
      "6f",
      "6f",
      "82",
      "3010c6bf4bf7161374828ec417fedd4cd439c4f86231a69643d142595b74c4f8dd7765ce2ddb92ed4db93b7e773cf7d013d9c769483cb28e372f39c8e26603fac9043ea89c6b858f4ca40a884540d30d926e11bf2e3abdeea0cbd9a136efed172cc98fad16128a6d21a1c43b9128061e2ae23d9f484a13c03626789ea4ab32b3882e32539c05fe70728f792242934fe6a351bb33ea93b3756d0ca9a6ab92ff47dbf26c919d58fb1081849481d19249b103a687664d45938c4345895c3250a484cb171b29f28c4a212a58a9341b95aa7bebd49cbb865dab3936825c30aa6391223b9fa13ea285a6dc1747653c414096212e1c95e701cb71582e62c2e12470eba5beaf004a8b620eabbf41d4bba5f81b3eb08b05df399a883cd5576a307a6cff360e3dfd1cd56b07fd1f84d2e8d4150986e3fe2c688fa7865b5e76ef141ad4540a345281f1b06ad79b4ec3b5df6ded0a63357ec7d332078b308ab7e321d6c48b2857707e038f7bbf427b020000",
    ],
    [
      "ETag",
      "6yixWBDCFClcv2UDkWcmuw==",
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
      "Tue, 26 Oct 2021 14:49:40 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `stamp` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-88-1635259702250",
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
      "546b6f9b3014fd2bccfbd24a79f00a2491a28ea5ac634a484a48bb6e9a12434cea1630c526535ae5bfef024ddbac5b2b21817dcfb9f7dc170fe896a62bd447015ddf1524df7ebc61016a2022f01a6e93eff27d3eea69c699b5f976aedd2b99654cadc10010b464719c6431697256e421e1fdf9acb5ce5991e19cb126386a76bb4dc5d03a6aa767caaada9181c7491c8d687a0bec6b2132de6fb7f7b15b6bc6d631c119e5ad90254ff7ed8ddace72764342c1db8721db1085b7df0e7a12b3100bcad2c17c06020a4ef20549308d41c23373157c3a74dda23869ad01bca121c161c88a5494b2c045c8d288ae8bbcf28afa0fa892f9e203cdec913df4a5e164eefa474b9c94e4e5b184b9b43f34a425e414d1982ce86a595a168bec56fae24dc6600105d79813be942ebfda9e2d494b2e40dd52fa30904e24cb3d950ee98e2bcd5dd79ef9d2d1c9b174e64de653e9f3d5010674af081734ad54fb388849a9f8b1b0ceeb7696042c40456d5c98b28195aedc0ba2c00ca3aed6092299044137303b580be4b0a7137d15100c3c517aaf583865a961a88a86b595d1338dc05c45504c4deda85d45870b1d7846b7679a3844bb06fa9d53414e29cf18a77575d1a5e7f8f6c2f7e6eed0f2ed2a8d0817b138adc59549bcd429204900bd91d7aeb4520691ca5639ae6f7bd6d0772eec7a3a46648dc3edec0ee623c2312780c6394e8820f998ada068683a9939be3371ad1130aa964ff7088efa3f1f9e09fe36abaa2caa37f29d31f4c81a4f2b0d7bd0058e8b0ab5a93f902aab7253569b4ac757d4bea2f515bd25cbf20fb4db35feefdcf23ceb0a04e13cc7dbbf6c90a4a197f47f44adf0d5a916bf57a1a032da93a683937e7032d0eed70e9e0682fdab23a3f3b9ed5da1faca2311c9491abe3f7000ae0ceffe46f63b0d58d86a0803fb21288c77c8cb20614eea31a74995ca23bb2b6b4af513123817af6cbaaeecfb59fa283d9284a4e231a37aa7ab2296a6823f81c008d3e93aee",
      "1958ff00e86c698d53050000",
    ],
    [
      "ETag",
      "mX0zrL936GAvJQ3z1pA6PA==",
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
      "Tue, 26 Oct 2021 14:49:40 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-88-1635259702250"
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
      "50",
      "4d",
      "4f",
      "c24010fd2fe39136e9075520e12084280912ad7232842ced500b6da7ee4e250de1bf3b5b0c173d78d99d791fd9f7f60487bc4a6104db3cfb6c50b73719f28b1d62344dc146ae9a2a83e000b2ca44396ca715f9bdbeff947adcdbe7532f8cf9381e8bc2241f582a189d609763911a18bd9fa052258a4d95d4542c226e6bbbcf976fb387592c4049a90596abc5e27eb298c1d9b99a369bfaf02fcbfaecc09eb631ee506395a0cd506bda63c2735bcfa8b22ed035d4e8040d74e28ec83435b5d244ae20ee60e0fab7611444c33b2f08224f8405258a73aa44bb7a956cc0c4aa88e928ed201481ee4629baebce2f81a3ae839d822edadf9cff8b0baf5cdf72eb9fc7262da379d624c90ddad0dea5c0946c2996b2ac1b742051f2ff8f395ff6f3373ceef360dc010000",
    ],
    [
      "ETag",
      "9yCno1+41Md0t+jiC03Rtw==",
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
      "Tue, 26 Oct 2021 14:49:40 GMT",
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
      "ffedd34b7282300000d0bb646d1c44b1d01d88a8a9f503114b374cc404c39f9089854eef5ea7d7a8ef0eef1b9024a15d17cb3aa71578053dd1ad71327e6b4cc74bb37d146d59d3e79aef1d921b54a521e6a55116431c0529842e979ba0d652d767ec667aed04b3102572a24256f7b53d6b9d8c043a0df2b933df7b942825514bcb41edcee6a1386d0c88709843f4be6e44c49036d5d799e7463a8adb082f15b77b5b71f385a8ea8365da6ce7428f6977cc27a6b54b0d74ab2ec3292f7826c5f15e2f2e195c7eba77bfc7abb0b3ae985ccfe1aaa9a4bde5d82fac2312dbc5f8e9e9ff022340bf1a2e6817f3c7f6a9615923f0573f967d431fff1d4a0415e0e717e3412f7019040000",
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
      "Tue, 26 Oct 2021 14:49:40 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-89-1635259702250",
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
      "85536b6f9b3014fd2bc8fbda0402794bd11aa574cd94900d48db699a903117ea1630c5a65355e5bfef629aaedda4f613b6ef39f79cfbe089dcf132217312f3ecbe81faf1d3ad88c9090145337c95c185b9fb9aac8adaf37779515dfbfbe9f572b140046f599216550e3d299a9a819cef837e568ba6a2b5103d4cd49bce7a83b133b247b38965db230b7912f274c3cb3b64df2855c9b9691eb5fb9910590eb4e2b2cf44f1f26e3ed866558b5b604a9a6f254d5491e6fba29f73c1a8e2a25cec0334d048a8232828cfd1c25f66129fbe4ddde7b4e867087ee00c2863a229556b0b533051a63c6b6a9d95cc9f88b6f9ea400277e3ae428389bc29caa8a4059c18095534528f1518e7fe6e6bacbdf39dbf5d86eb9d1705ab0b77bbecaf769bfdd60b8cab0bd7770d45e31c34d75818a7fae6e105f513908a975a3d6c9f5be5e706adff1f4b4b4069095d309a58633a985ab3388d272c9d3aa338b5208ea7f164449dd862b3210c931828f2b4a866d15294893db3acd9d88a1c3a1c4743b0c7d1d44ed20826136700b11327e090c309f95d7305675c5642f2ae43e4ca5f876e14fa7b6fb50c5d5d424a9b5c9d75c6da025e7b54582082dea9e9d046b940a5b6dd6b2f74fde52a5c5fbadd84379051f618dce38c539a4b4034adb1790aeaad48b061c45b6edd3304eb897d3b062599ff7c226dcf5b17af5afe420f7180ad5da5bf2408fdb5f745db39222e69de68c8437720155abec1dad0f5e117227149bb2ce4fbdef57f90eec987146a28d9c7d344b00e7cf8af1d171fb1b8fa282315de7177986c45580ddd0e715dee918dabe18c8806d7eadfd8c072ac63d7da1c6d4628a054cf15758b8f8576628d7c016110c7efe96e1dfe00de7407a978040000",
    ],
    [
      "ETag",
      "sSH/OJdCmrNROlmpXRU8XA==",
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
      "Tue, 26 Oct 2021 14:49:41 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-89-1635259702250"
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
      "92dd4ec2401085df65bcb4248050b0091745119b14e4a75c1843c8d24e4b71dbadbb5b0921bcbbb315d1a889deb433d36fb6e79cf600cf691e8103eb34792951ee2f12d45353cc50955c2bba1522570816a0660991433d892ff96e11a0d7d93dbab12f17893dedf58850e1063306ce01e21479a4c0793a40ce32a4b550f032cb57556781de1766380f66de78487d2622d38f17beeff6fd011cadf362c4345b55fc3fd696470bb6623dc31825e6211a2d85145b0cb5676c2a96151c6b4a94324405155c3d48a4280b2685a8d1a4d6bdae35ecab76b37ddda9379bed3a815c844ca722277631277da085667c2676e4126c02645592e1b8babed2388d2a23a6f4c681ddaaf47d05485a9c725cfd0d92de0da3cff0819d22f8ceb14c94b93e5377fe83fbdb7194e9e751b76e30f841284d499d91c01b0de6813b9a186e79f2dedf6b54132928488526c346bdd56d77ecfa7bac37c2444def71b42cd18290d1df719f6a7062c6151edf007b97ff887b020000",
    ],
    [
      "ETag",
      "GtPf+lwUTeI7wYAfLrUg6Q==",
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
      "Tue, 26 Oct 2021 14:49:41 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `amount` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-90-1635259702250",
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
      "000000000002ff85547f6fda3010fd2a99f74fabf12350080409750cb20e8986368456749ac0719cd46d1287d8614215df7d17a7d0b26ead142939df7bf7ded9e73ca14796f8a8873c16ae739a6d3f3f700f551095388455e6786b7f7a11de89c5c693775fecd97a945df7fb8060054be0388d6855f03c2354f4e6b35a98f13cc519e755285435f56ac3386b37db66476f36db3af0048d82094b1e817d2f652a7af5fa5ebb16721e4614a74cd4088f0febf54db39e66fc811229eac792755011f5f745cf234eb0643ce9cf67602017345bd218b3082cbc307defeb71e91ac3712d04f086118a09e179220b5b5082f02460619ea9aaa8f78494cd571f68664daca1ab0da773db3d59e1b820af4e352cb47d50d156d053c022ba64feaac82c97e9a3f6dd995e42061cdc6341c54abbfd61399676a0699ffadab936b047da317f6c6b73dbb666ae76727eaa5d38d3f995f66d718401e33e159225cab68bbd8816969f7776fcf63c0b029660a34c2e3bba811b5dddf402af4382ee59db0b74ea795dafd3c6679e4ecc166df91ec5c0934575c5c2094f4c3d308c00076dc8faa6498246c70f3a5d23a0704ec159c3ebea1e693608da55d0ef8c493a6222e58295db8b6e9db16b2d5d676e0f07aea5da08701ec95169ae68e2b54f094d02e89dbe76459671502ace6a6cbb963318bae31bab1c8f090d31d9ced63020018e040534ce704c25cd2eb90f9b86aea6b3b13b9eda830930d4995fed1102f57e3ebd10dc6daa7659aa37fa3e990e5ca3a51cec213738ca1566537ea046ad0d885de5ff65068e33588034ce32bcfd2b07ed188afe0f0585575169f3a0880ab57dd43c8a5a47918176bf76f054105cb552195dcf2d6781ca25870634a309f978b400ac121ffe31f6d717b070814146488861908928444846cb8166b16ae599dd6dc0802105cee49b9cd9d2f72757d4282ad29826f2b9a3f2faaa4d2c52b93880200973688fed0bc8fe016f421b233e050000",
    ],
    [
      "ETag",
      "iRbqdOGgZsYvbtZ+NSqDrQ==",
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
      "Tue, 26 Oct 2021 14:49:42 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-90-1635259702250"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d504d4fc24010fd2fe3b54d4aa128241cc4104109d1428dc610b2b4d35a683bcbee562484ffee6c315cf4e06577e67d64dfdb236cf32a813eacf36c57a33a5c65689eed10a2ae0ba3f99254690407d0888c956f2f9bf1c3e33c126124835d4b7fa9d7eecd7e3060858e3fb014d03f429a639168e8bf1fa11225b24d9454578645e620ed3e992d46f7a3908192120bcca2e9f476381dc1c9b998562bb9fd976579726043eb10535458c5683348451b8ccdc4d6d3a29405ba9a6a15a38646dc1099a25a0a45e432e2f63cb7d56d077ed0bbf67c3ff05858502c4c4e156ba339670343461421edb91db459a09a918ba6cdf9c970a7e96027bf89f637d7fac5f917ae63b9e5cf63c38341fda488936bb4a1bd73813bb2a50c9735aa460762c1ff3fcecd793f7d03dced4d88dc010000",
    ],
    [
      "ETag",
      "YVjHJKSUaRUp5q1sxrX68w==",
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
      "Tue, 26 Oct 2021 14:49:42 GMT",
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
      "5b",
      "72",
      "82",
      "30",
      "14",
      "00",
      "d0bde45b181e52a07fc5675127a20c147f98245c3150259030153add7b9d6ea39e3d9c6f4418032973d5d47043af682096af337d23bc6059964e5c84ded78b6c53e05c536f5424bd50c316f33c5539db6e8a6352b1b4ed3c388cf6fa23e476e10efda580b61fcb2289afa1812fd95e45d32b68bbeacebc6916e17a659cd75c9c92c8f5dd3832dfb52a0ea459192106b65f259412b36fa28cca7e1e8cab9363697777315bee1ab528edbd9308cda8f2b6b7186dcfa9cc4ad1c2c59a7722cb48fc49e8781c8a6176e36eecd898183b5a4b4acda8c3587f7afabfd004c15df00e64ce1fdb6dc7f727e8af7eae06018fff01900e3af4f30bc81d0e6e19040000",
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
      "Tue, 26 Oct 2021 14:49:42 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-91-1635259702250",
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
      "00000002ff85536b4fa34014fd2b64f6ab6de983b634695652519b6d6905aabbd96cc8305c705cca2033688ce97fdfcb605d8d897e6266ee39f79cfbe099fce545426624e6d97d0dd5d3b73b119313028a66f87a11783fb7b757ce8ffb47eecbd1d661db2b789ccf11c11b96a4fb32878e1475c540ce764137ab445dd24a880e26ead8fd4e7f3cb406963d310703cb449e843c5df1e22fb26f952ae5acd73b6a773321b21c68c9659789fdeb7bef61d02b2b71074cc9de7bc91eaac8dee7a2df73c1a8e2a298ef0234504ba822d8539ea385ffcc243e7d9fbacbe9be9b21f88133a08c89ba508d2d4cc14491f2acae7456327b26dae69b0309dc95bb080d26f27a5f4405ddc38991504523f5548271ee6fd6c6d23bdff86b275c6ebc28585cba6ba7bbd8ac766b2f306e2e5ddf35148d73d05c636e9cea9b8717d44f402a5e68f5b0796e945f1ab4fc38968680d212da603431c7b43f35ed388d272c9d0ead3835218ea7f1c4a2c3d864f60846490c14795a54b368210a3bb619054823938e87d1a81f0fa3a99d4ca3d18059f688a67402037238218f155770c66529246f3b446efc65e846a1bff3164ee8ea12525ae7eaac35d614f0d6a3c20211f4494d8726ca052a35ed5e7aa1eb3b8b7079edb6135e4146d953708f334e692e01d1b4c2e629a8d622c18611cf59bb6708d613db1e8392cc7e3f93a6e78d8b372d7fa58738c0c6aed25f1284fed2bbd0768e886b9ad71af2d01e4889966fb136747df883485cd2360bb9dab9fe2fd23ef990420505fb7a9a08d6812fffb5e3e22316571f65a4c23bee0e938d08aba0dd21aecb3db2a703cb1a120daed487d878323e76adc9d164843d14eaa5a276f1b1d056ac96af200ce2f83dddadc33f0618e30d78040000",
    ],
    [
      "ETag",
      "GSNXPhQAKqwiRs4PAcPQew==",
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
      "Tue, 26 Oct 2021 14:49:42 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-91-1635259702250"
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
      "41",
      "4f",
      "c2401085ffcb786d13400ad2840368554841857232842cdb2914b7ddbabb9520e1bf3b5b118d9ae8a59d997eb37defb57b784af3187c58a6abe712d5ee6c85e6c11613d4a5309a6e85cc35820368d88ac875e90df5eb709672d1d82a3edb065eb8db76bb4468bec68c81bf872445116bf01ff790b30c698d4b5166f9a2ea1c30bbc20ea7d16430bea13e93b1edc7b330ecf5c3000ece693166862d2afe1f6bf383031bb99c60820a738e564ba1e406b919589b9a65854057cb5271d450c1d583959265c194942e4ddc4eddadb7cebd86d769d71a0daf46a0909c9954e6c4cea6a40f8c344c4ce4965c428b0055956438a9ae2f344ee3ca882d07e3a8d5acf47d05485a920a5cfc0d92de35a3cff0811d23f8ceb14c96b93951d7e15defb7e328d3cfa3ae7a51f083d086923a21d160144ca3dee8de72f3a3f7fecea0be579282d46833acd79a175ebb557b8ff552daa8e93dbe51253ac019fd1db7a9013f6142e3e10d9be201d37b020000",
    ],
    [
      "ETag",
      "hu5JszJUicl2wrcUwE5Lyw==",
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
      "Tue, 26 Oct 2021 14:49:43 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`id`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: "%15%" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-92-1635259702250",
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
      "c5",
      "54",
      "6d",
      "4f",
      "db",
      "30",
      "10",
      "fe",
      "2b",
      "962704487d81be0195102b90b18892746902ab26d4b8891b0c491c6c07a942fdef3b3b0456c1d8c74991e2f33d77cfe3bbb39ff103cb633cc40b963c9654acbedcf3056e60aa4802bb6474473a817511f99764e21f742785fb538c8e8f01c17494245991d2a6e4a588a81c06d35622785910c1791312358f3acdfd41b7dfe91f1dec753afd3d8893345d8e59fe00d1774a1572d86ed7dcad84f324a5a460b215f1ec75bffdd4691782dfd348c9f626651b5864fb73d293944744319e1f075310504a2ae634232c05096f91f1e2eb66ea1623592b01f0138b2889225ee64acb821411cf972c2985c98a87cfd8c8fc6381a7d6d83af3d1991b38fe4e48321d1cee2222516d345008675ab294ce591c6acf7c5e3ca06f9e7b051e507047249521baf96e79164263f7c6f2764280eea2b17d69a1133472ced16612db4181e358531fed9ceca20bcf0d26e874b68101f5315d923255e7440183d2aae36a69eb962a2a15805eea6dbfef325e6b2fe382297d52dbf12d6f74e6dbd75655dc314d48b49a3e427997249514d044908c2a2aae784c2164e24e6ddf769dd118224cc5263542e2e1afe7b7007f55502d5099bfe61af40c7f0db8266969104fd5026fedf7b7f07addf87b9291e78d66404c8420ab8f093e6430786355226bc67dacd96aabb361f536ac015edfaee16b6018d38a19ff082c6f86ab2d8f2ea9a07964e83e6980011bc73f6f5b3dfa8085e1071aa9c0968a45529344821ab7cf32739497e8c36eaf7b880d58a8f7be7e57bf1079fca1e785a334f9a9105c7854c2b86913d8a4d1c272a809bc200d9c512949a2d304399c4452b248293243815e7b80c210b11ce926a1d09f4dacb96914dca153",
      "1283470d7ac814798874ffebf5b636b6b522a3a36adb7fd2705b9545939cbb8e0533f61bfe1dbc3d7b050000",
    ],
    [
      "ETag",
      "aAha2UEGcTKaPT73PpOXrA==",
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
      "Tue, 26 Oct 2021 14:49:43 GMT",
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
      "30",
      "00",
      "00",
      "d0bb642d8c8814d29d8011828258b4231b8642c4c0c82f41099ddebd4eaf51df1dde3748b38c3096f0a622357807225d403993bdd630514145e068780125dfddc4033c661d3d6d9639ba2b86b2accf6ee9c4e71ca17c8ed58f5b59fa9e6de3e688f6c8e78562b8ebc78944e1e586463b984481fdd08165b00f0649edf2c4ccc36527d538e2c6562c5489de3563d8f0c3aae01613f88ed2b73238f5d378d30e11db790768456b93762e23b1ee58a8a9a4af6c40c28b59acd81c5b18ed8c6b95e9731dad3ffbf10275caedfa4a68bbdf3e9ac05cc513965f5efe2f3003646c694f58429fdb550dc219f8ab9f70d192e77f93a43de9c1cf2f6821fd4f19040000",
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
      "Tue, 26 Oct 2021 14:49:43 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-93-1635259702250",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b6f9b3014fd2bc8fbb8362181242452b446295d23256423a4d5344dc8980b754b30c5a68f55f9efbb364dd7aa52fb09dbf79c7bce7df0446e7899920949787edb40fdf8e55a24e48880a2b97e8ddcbf598f8f83f2f2c64d86cb87faebc37d3e9d22826b96a4bbaa8063299a9a819c6c379dbc164d456b218e31d1f1d839ee0d9d417f301ed9fdfec0469e84225bf2f206d9574a5572d2ed1eb43bb9107901b4e2b2c3c4eee5bd7bd7ef56b5b806a664f7ad64175564f763d16f85605471514eb71b34d048a863d8515ea085ffcc3439799bbac3e9ae9323f88e33a08c89a654da16a660a2cc78ded4262b993c1163f3d5816cfca53f8f2c268a6657c625ddc19195524563f558817516ae57d622385b87ab59b45807f1667eeeaf669df97ab95d051bebf2dc0f7d4bd1a400c3b5a6d689b9057841fd14a4e2a5518ff4b3567e6ed0e2fd583401a525b4c178640f69cfb3c749968c58e6398324b32149bc6434a04e62b3b10b6e9a00459e11352c5a8a92f5b3a1ed322776dcc13076bdd48e936cc462a797ba2ef4c003af4ff647e4bee60a4eb9ac84e46d87c865b888fc380ab7c17c16f9a6848c36853a6d8de9025e7b545820823ea869afa35ca0926ef72288fc70368f16177e3be125e4943d6e6e71c6192d24209ad6d83c05f54aa4d83012cc56fe2982cdc47e1c82924c7e3f11dd73ede255cb5fe8110e50db55e64b3651b808be1b3b07c4052d1a03b96b0fa442cb57581bbadeff41242e699b85fcdcfae12fd23e8590410d25fb7c9a0836814fffb5c3e22316571f65a4c23bee0e935a84d5d0ee1037e51ed89ee3d90362c0b57a171bdbbd43d7740e9d117650aae78adac5c7425bb146be803088e30f4cb7f6ff00f8fe8d2278040000",
    ],
    [
      "ETag",
      "bT4zf1i9NnWk4b6Lxr+xwg==",
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
      "Tue, 26 Oct 2021 14:49:43 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-93-1635259702250"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92dd4ec2401085df65bcb42450fea48917a8a0202094e28d216469a7a5d876eaee564308efee6c55346aa237edccf49bed39a7ddc3639c05e0c03a8e9e0a94bb9308f5cc142eaa22d18a6f39650ac102d42262d2be1dceb3d97d713ab187f71b8ac37ce3f6a3f3732694bfc15480b38730c62450e03cec211329f29a4f499166abb2b340ef72339c7bee6072cd7d4a81e9278bd1a87b31eac1c13a2e06428b55c9ff636d79b0604b6b17439498f968b4e492b6e8eb81b1a9449a27585154481f159470f9209254e44212557852e9d42bb556bd69373bedaa6d37ab0c26e40b1d53c6ec62cefa409316894b2fec125a0cc8b264c361797de6711c94464c399878ad46a9ef2bc0d2c238c1d5df20ebdd08fe0c1fd87b04df39915291e923d51fdd757f3b8e33fd3ceaaaebf57e104a735247c41b8c7b73af3b9e1a6ef9eefd62a7514d2571900a4d86b56ae3acd96e55df62bd241335bfc7d1b2400b7cc17fc74dacc10945a2f0f00a5064ecdd7b020000",
    ],
    [
      "ETag",
      "2KJSnQVu+N2JVhoifphRFg==",
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
      "Tue, 26 Oct 2021 14:49:44 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%app%" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-94-1635259702250",
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
      "54",
      "8f",
      "4f",
      "9b4014fe57c82d269af4076da1d026c6758a8eacd20a54e396a53de0a8a7c02177b835a6fffb1e87a89d9b2624f0ee7ddffbdeafe311ddd12c426314d0f57d498acda75b16a0162202afe1f4f78597fa66393875e7f97737376f4f69564e0e0f01412b16c7699e9036676511123e5e789d75c1ca1c178cb521507ba4b57bc381ded74786daefeb2af03849e229cdee807d2344cec7dd6ea3dd5933b64e08ce29ef842c7d3eef3ef4bb79c16e4928787757b20b2abcfbbee851c2422c28cb0e171e245072522c498a690229bc30a3e0f36ee80ec569670de0071a121c86accc44951684085916d37559c8a868fc88649aaf3e90674dad635f399e2d1c7f7f85d38abc3a5030571aa3a5aca0a698266449a355e5592ef33be5d49d9d830732b8c19cf09572f5d5722d4599ceae2c77ffd901b1a6f6374b395226ce89b21bca769485e3589eafec1f1d2867ee6c3157be5cef60a0868870413359818f838454d93f35d97e3bda8a800508d7cea5a10e71cf5447411c18616c0ef4205649109881a1e341a086238d68514030f044155db270c63218490f087a6f1069714f8f716c8efaaa11e3d0884686a19961dfd486ea006d5be857410539a13c679cd69d4657aeed5b4bdf5d38c713df9265c4b84cc4499d5c55c4eb3c051409a077eada565eca40a91a9bedf8963b39f6ed4babde942959e370e3ddc3aec438e104d0b8c02911a4386711340dcd679eeddb33673205861cffbc417034fef1f842f037b9ecb2906fe4f9aeed9cc9041ac4254e4a0979a83fd01ecef33db4ddb6fe1f66e2ba936b90c64581377ff9a09ca156d1ff2121f1d2aad36c247ba8526bacfe8ea5ed5843b4fdb985a785e0d6d5cae86261b9d7a83e72494c0a92851faf1680a5e3c39f477393010b771964b8001b1639e4954858907aa1692a4b79629b9aae9b48820bf1c667e8bd6672558c2a22494926",
      "9e2aaa6fb26c62e52af933089cb0878e1ce2f60fc6090b9b49050000",
    ],
    [
      "ETag",
      "xQSmT8u3FRPpZRp8jFinuA==",
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
      "Tue, 26 Oct 2021 14:49:44 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-94-1635259702250"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d504d6bc24010fd2fd36b0226515b050f55820a566a5a4128226b32c668924977271511ff7b676391422fbdeccebc0ff6bdbdc0312b13e8c3364b3f6bd4e78714796187084d9db391aba2d2203880ac5251fa93c9b8fb149e8a8882c3cb68e1ed6915a48381284cbcc74241ff02bb0cf3c440ffe302a52a506caaa0ba6411f1b9b2fb74fe1e8ec3488082120bcc97b3d9f37016c2d5b99b369beaf82fcbfaeac081b611ee506319a3cd50693a60cc535bcfa8a2cad13554eb180d34e2864835d595d244ae206eafed7adda0e3777a8f2ddfefb4449853ac38a352b4cb37c9064cacf2884ed20e0211e86694a2bbe6fc6a60dbc14e7e13ed37e7df39ef0fe7ddb9b6e5d63f8f0dcf8ce6559324376843b76e0546644bb194655da303b192ff9f647cdbafdf29f19e68dc010000",
    ],
    [
      "ETag",
      "2HHG68EwmRo3jMCQ1hoX3g==",
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
      "Tue, 26 Oct 2021 14:49:45 GMT",
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
      "59",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bbe45b18097bff0cb6e0508aac8a3f4c80c8529648508a9ddebd4eaf51df1dde37c0794e184ba7e193f4e0052c18ea7ccedb54436f6529098127ae3775600a4adfba71dcf9556cce4d72770ad6cd826185999cc3ecf53ccbdbcb7ddec4622a12d9c18a8ae012f9e634e263e4efc6db2c5932f4af83de0aef236b2b1db956a6065edbc290a387c24b3073ec92a3a85225375927e9eda3c8990a0763db9fa8745a760e36322dbb10cf716a4dea8f5a32294a91e32b32b8bdd8417bbf4569df889b3838744b14d86b896be8b9a1374ebd8775d97989c63f3dfd5f6005c817ad47c2d2fab15d94757d05feeaa7d342c9e33f22782423f8f90574f2526519040000",
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
      "Tue, 26 Oct 2021 14:49:45 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-95-1635259702250",
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
      "85535d4fa34014fd2b64f6515b6a91963669d6a6a292b47497528dd96cc8305c7094329419da18d3ffbe97c1ba1a137d6266ee39f79cfbc10b79e24542c624e6d9b686eaf9c7a388c9290145337cf54ef60f37d3edf589b9add9c97071bfbcda59fbc90411bc6149ba2973e84851570ce478bdea6695a84b5a09d1c1449d91dd391b5876df1e0d7bfdbedd439e843c9df3e209d90f4a95726c9a47ed6e264496032db9ec32b1797b37777db3acc4233025cd8f9226aa48f36bd19fb9605471514cd62b34504ba822d8509ea385ffcc24bef898bacbe9a69b2178c71950c6445da8c616a660a2487956573a2b19bf106df3dd81acdcb93b0b0d26f27a534405ddc0a991504523f55c8271152c1786e75f2d83c534f4967eb49addb88b6977b69caf17fecab8bb7103d75034ce41738d8971a16f3e5e503f01a978a1d5c3e6b9517e6d90f7792c0d01a525b4c168d81bd033a7378ad378c852c7b2e3b40771ecc4439b5a718f8dcee13c8981224f8b6a162d4441072c1db2018d12ea58d1f988b228668c46a935b2a197d098390e399c927dc5155c72590ac9db0e91bbc00bdd280cd6fe6c1ababa8494d6b9ba6c8d3505bcf7a8b040047d51d3a18972814a4dbb3d3f7483e92cf46edd76c273c8287b5e6d71c629cd25209a56d83c05d54224d830e24f17ee2582f5c47e1d83928cffbc90a6e78d8b772d7fa38738c0c6aed25fb20a03cfbfd6768e885b9ad71ab26b0fa444cb0f581bba3efc45242e699b85fc5ebbc13d699f0248a182827d3f4d04ebc0b7ffda71f1118bab8f3252e11d7787c9468455d0ee10d7e51ed98edd772ca2c195fa14b39cd1b16b4d8e26236ca050af15b58b8f85b662b57c036110c7efeb6e1dfe01f35f14b978040000",
    ],
    [
      "ETag",
      "I+whHAqG+/quc+7MYOFv3w==",
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
      "Tue, 26 Oct 2021 14:49:45 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-95-1635259702250"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92d14ec2401045ff657ca44d0ad2224d7800446902a850a28931646da7b5b0edd6ddad8410feddd9aa68d4445fda99e999edbdb7ddc3262b62f0e1314b9f2b94bb9314f58d29e6a82aae15dd4a5128040b50b394c8bb8673cadd216eab2b6fdc90b76d19c49b6daf47848a9e3067e0ef21c990c70afcfb3d142c475a8b04aff262557716e85d69868b701ecc2ea9cf456cfad97232e90f26233858c7c59869b6aaf97fac3d1c2c588bc7392628b188d06829a55863a4036353b1bce4682b51c90815d470fd2095a22a9914c2a689dd75eda677eab6dc6ec769b55c87402e22a6335110bb5c903ed042333e175b72091e01b22ec970525f5f689cc5b5115306b3d06bd7fabe02242dc938aefe0649ef13a3cff081bd47f09d63b9a80a7da42e2657fddf8ea34c3f8f3aef87a31f84d294d4110983e96811f6a7d7867b78f73ed86954d75250900a4d864da77de6763ce72dd6a13051d37b7c2d2bb42062f4778c330d7ec2b8c2c32b9ecd107b7b020000",
    ],
    [
      "ETag",
      "X+03l5CewuO6H+rW4rIdkw==",
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
      "Tue, 26 Oct 2021 14:49:45 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%app%" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-96-1635259702250",
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
      "54",
      "8f",
      "4f9b4014fe57c82d269af407a5b4d026c655651b59a51da51ab72ced01079e0287dc51d398feef7b1ca2766e9a90c0bbf77def7bbf8e477447b3108d914fe3fb9214db4fb7cc472d44048ee17446b85d9e6e8435bdbd4f7f3a64925f7af387e36340d08ac5719a27a4cd595904848f978b4e5cb032c705636d08d41e0ddbbd617fa00d4686aa690315789c24d1946677c0be1122e7e36eb7d1eec48cc509c139e59d80a5cfe7dd8dd6cd0b764b02c1bbfb925d50e1ddf7454f121660415976bc5c40022527c58aa4982690c20b33f43fef87ee509c7662006f68407010b03213555a1022605944e3b29051d1f811c9345f7da08535b5ce3ce56cb674bcc3354e2bf2fa48c15c698c96b2869a229a90150dd79567b5caef942feeec023c90c10de684af95ab6f966b29ca747665b987cf0e8835b5bf5bca893271ce95fd50b6a32c1dc75a78cae1c991f2d59d2de7cae9f51e066a08091734931578d84f4895fd5393edb7a3ad08588070ed5c19ea10f74c75e447be1144667fe0472af17dd33706b8efabc148277ae8130c3c5145972c9cb10c46d203c2a0d70ff5a8378870648e34d58870608423c3d0cd4033f5a1da47bb167a28a820e794e78cd3bad3e8cab53d6be5b94be76ce259b28c08978938af93ab8a789da7802201f44e5dbbca4b19285563b31dcf7227679e7d69d59b3225310eb68b7bd89508279c001a1738258214172c84a6a1f96c617bf6cc994c8121c73f6f101c8d7f3dbe10bc6d2ebb2ce41b2d3cd776beca041ac4254e4a09d9d41fe800e7f901daed5aff0f3371ddc93548e3a2c0dbbf7c50ce50afe8ff90907869d56936923d54a93596b667e97bd610ed7eefe06921b875b532fab1b4dc6b541fb9242205c9828f570bc0d2f1e1cfa3b9c98085bb0c325c800d8b1cf04a242848bdd03495a53cb1cda16a6a48820bf1c6a7e97a33b92a461591a424134f15d5375936b17295fc19",
      "044ed843470e71f70794322e9749050000",
    ],
    [
      "ETag",
      "OesIuBvtELjqmZNeApVTPw==",
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
      "Tue, 26 Oct 2021 14:49:46 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-96-1635259702250"
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
      "50",
      "4d",
      "4f",
      "c2",
      "40",
      "10fd2fe39136d06231907010ac884122554e8690653bd442db29bb5b0910febbb3c510132f5e7667de47f6bd3dc1362d62e8c12a4d7615aac34d8266668708759519cd5749854670008d4858b91bcea2c6e3b368047214ce5ef6c7fca1d94cfa7d5668f989b980de09d62966b186dec7090a9123db444e556158640ea5ddc7d3f77014460ce4145b603a9f4cee079310ceced5b45c96db7f5916670736b48a708d0a0b893643a96883d28c6d3d2df232435753a5246aa8c5359128aa4aa1885c46dc6ec7f53aedc00fba772ddf0f5a2ccc480a9352c1daf91b670343466411edb91db459a0ea918baeebf3ab866d073bf975b4df9c7fe5bc3f9c77e56e2db7f8796c7030a85f1571728d3674eb526048b694e1b24655e88014fcff4fa9b9ece76fd9298c37dc010000",
    ],
    [
      "ETag",
      "qCQR+FJa+5cGEQMwzmD//g==",
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
      "Tue, 26 Oct 2021 14:49:46 GMT",
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
      "49",
      "72",
      "82",
      "40",
      "1400d0bbf45aa9a022909da08d96a2e004f48682e68b0c61683a3258b97bac5c23be3bbc270a2885a6f1799941813e511f4c54810adb4ad1701c2f195c613e5d1abee90cfc515f6415765ea1386929127943c7b9e1cdeae40eac8d14835cf0466daaf2264ef0dad565cfaaf419bb97b5199a4df791ad576232a443febd75230a07e673c2f7fb9027a7121bc5893499f815d1d09e6757fd4ab5767c4e6ded583faa83e7dce42e4b3938244c3562f452ac463bc2ac5b308d15763ec47713af246bd6b7e6e9888b0d1eaf5cd3a3b9b8d02ddb1e24afc03916db85f0f6f67fa11182ae4a18347ef2da3e95547584feeafbbcafe0f55f838001433fbfc54b3ed919040000",
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
      "Tue, 26 Oct 2021 14:49:46 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-97-1635259702250",
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
      "0002ff85536b6f9b3014fd2bc8fbda24843c8048d11aa574cd9490969056db3421632ed42dc1149b4c5d95ffbe8b69ba5695da4fd8bee7dc73ee832772cf8b844c48ccb3871aaac72f772226270414cdf0f5fbecb62e418ceff6f6dffca7555c9af638bd9a4e11c11b96a4bb32878e1475c5404eb69b6e5689baa495101d4cd471ed4e7f3c185923d7362d6b64224f429e2e79718fec5ba54a39e9f58edadd4c882c075a72d96562f7f2dedb5bbdb21277c094ecbd95eca18aec7d2cfa35178c2a2e8ae97683066a0955043bca73b4f09f99c4a76f537739dd753304ef3903ca98a80bd5d8c2144c1429cfea4a67259327a26dbe3a908db7f4e6a1c1445eef8aa8a03b383112aa68a41e4b30ce83f5ca58f8e7eb60350b176b3fdacc2fbcd5ac3b5f2fb72b7f63dc5c788167281ae7a0b9c6d438d5371f2fa89f8054bcd0ea61f3dc283f3768f17e2c0d01a525b4c1c836c7b4ef986e9cc6364b9dc1284e4d886327b64774109bcc1dc2308981224f8b6a162d4461536ac7d698457db0dc6838888711b5fa49e40caca163c6890d2e90c309f9537105675c9642f2b643e42658845e14065b7f3e0b3d5d424aeb5c9db5c69a025e7b545820823ea8e9d044b940a5a6dd0b3ff482d93c5c5c7bed84979051f6b879c019a7349780685a61f314542b9160c3883f5b796708d613bb3c062599fc7a224dcf1b17af5afe420f71808d5da5bf6413060bff9bb673445cd3bcd6907d7b20255abec5dad0f5e137227149db2ce46aeb053f48fb14400a1514ecf3692258073efdd78e8b8f585c7d94910aefb83b4c3622ac827687b82ef7c876c6b6e3120daed4bb98e38e8e5d6b7234196107857aaea85d7c2cb415abe50b0883387e5f77ebf00f90dfac7a78040000",
    ],
    [
      "ETag",
      "JAhupeo6jv7zlZ2nP076fQ==",
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
      "Tue, 26 Oct 2021 14:49:46 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-97-1635259702250"
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
      "6e",
      "82",
      "40",
      "10",
      "85",
      "df",
      "657a0b895a4125f1027f6a49d45ac5de34c6ac30201658babbd858e3bb77965adbb44dda1b9819be59ce397084a7240fc1814d123f97280e5731aa7b5dcc5196a992742b782e110c40c56222f7b6e5cdfaf6c06f8e7af79d70f2f0da1eba71b74b840cb69831708e10259886129cc723e42c435a0b785a66f9baea0c5087420f17fedc9b8ea8cf78a8fbe9723c767be3219c8ccb62c8145b57fc3fd6562703767c33c70805e6016a2d85e03b0c94a76d4a9615299a9297224009155c3d88052f0b2638376962765a66ddbeb61a56a7556b34ac1a81290f984a784eec7241fa4071c5d2397f2197601320aa920c47d5754fe324ac8ce8d29bfa76b3d2f71520695192e2fa6f90f46e197d860fec1cc1778e65bcccd585ba19dfb9bf1d47997e1e3570fde10f422a4aea82f8de64b8f0ddc94c73abb3f7de41a19c094e414ad419d66bcdb6d5b26befb1f6b98e9adee32851a20101a3bfe33651e0442c95787a03e8db2f4d7b020000",
    ],
    [
      "ETag",
      "v65IPC6DT4GBQ9dMVz8EAg==",
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
      "Tue, 26 Oct 2021 14:49:47 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`stamp`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-98-1635259702250",
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
      "d5",
      "54",
      "61",
      "6f",
      "da",
      "30",
      "10",
      "fd",
      "2b",
      "96f7a59580b41468cb5475b4645b34083409ad5055819b38a94b1207dba9842afefbce0e94b16edde7494870bef7eebd3b9f79c50b9647b88b1f59b22ca9587d7ae68fb886a922099c9e2c0279d32f9732f19b77e9f351689d04abe4e202104cb324c98a94d6252f45486577e23712c1cb8208ceeb50a87e7e563fee9cb49bedf3d3a366b37d043c49d378c0f205b09f942a64d7b2b6da8d84f324a5a460b211f2eceddc7a695a85e0cf3454d2da97b440455a1f8b5ea63c248af1fc62e28381525231a319612958d831a3c72ffba51b8c648d04c02f2ca4240c79992b6d0b4a843c8f59520a5315775fb1b1f9cb0fecdb03fb3a40d7a3891b1ccc49a6c9f3434424da063534879e6296d2198be63a339b150bf4d51b0d21030e9e88a4728eeebedb9e8dd06074677b0773a9c023141a383f6c74897a6e1fedd7715c34715ddb0fd0c1e521fae68d26637435ddc34003118d4999aa3e5120a2b4f1a8fae9e85b55542a006d46eebcbf68bcd659c60553ba59c70d6caf771d38b77635df014d48b8f29730e198a492029a08925145c590471428e391ef04cec8ed0d80618636de2224eedebfee08c1aaa0daa032df387086d05c6f38c6eb75edefb09ee7f5a6509a084156bfe5c06ea7a5e93bf62d494b0331781355365eaa043ec65a6d1b35f7a2d65ed4c1eb87357c6a1876b152c63713db9be2eac8a33115340f8ddc0723366093f8e793daee376061c34106b64431a95828b54828a849072c33ad6cd867a7adf3163660a1dee5da9d53fd3790477fcc6c344a539f0ac18547252c940e414d1a2f2c8799b0e8c63c893d97cbcd5146a524892eef729411153eb13c41922539d41614c55ca0b8cc434d",
      "ab5e8039222229339a2ba42f5476d1db4e34905f1605178a46bb2a00a81e8f1f788efbedf0f326bc9a06b60f4f52a1fbe3ee59f34137655aa96efeff6de3a1ba1ceda73f726dd8f49f78778fd5e6050000",
    ],
    [
      "ETag",
      "3kTsQDuqsgS2Wlj0c/3Tyg==",
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
      "Tue, 26 Oct 2021 14:49:47 GMT",
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
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "64ad8c2680d01d1f89c84f2aa0b861220d1aa1042333053abd7b9d5ea3be3bbc6f40ca923e1e45cf6bda82373012a84ba5e4759ae95c583594481e5acb52ea065eed8cfb85e6737633fd49b043a9e7ab7315b54e9aa47c500cf2e132622772a0b8d81629561378adab78a185485d7379b7599fb41c7df5f3d8e8e69af3ae57e3d41f4f53186b436d41f54e57b9370f2d99f9e127ba2f38814a0f0fdbda4b3cec048588467d697a7c7139e2a4cd6e418cc4593de10cee58d4987babca6c11907aef3b0871e3ae603bf4fc62e3e2296ab6a16ae0a5f4f2f27f8119a043c7047d14ecb91d29ba3e037ff58b7eece8f3bf4989a002fcfc02f75661dd19040000",
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
      "Tue, 26 Oct 2021 14:49:47 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-99-1635259702250",
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
      "000002ff85535d6f9b3014fd2bc87b6d0209258148d19aa574454ac84648ab699a90ed5ca85b822936a9ba2aff7d1768ba7693da276cdf73ee39f7832772278a2d991026b2fb1aaac74fb7929113029a66f86ad64e4e2b1eecc1fd525de9df8e35cce60fd3292244c3527457e6d053b2ae38a8c966ddcf2a5997b492b287897a9ed71b8c6c67e878636b38742ce429c8d38528ee907da375a926a679d4ee67526639d052a83e97bb9777733f34cb4ade02d7ca7c2b69a28a32df17fd9c4b4eb590c574b34603b5822a811d15395af8cbdcb2b3b7a9fb82eefa1982f78203e55cd6856e6c610a2e8b546475d566259327d2da7c75206b7fe1cf6383cbbcde1549417770626ca9a6897e2cc1b888564b23082f56d1721607ab3059cf2ffde5ac3f5f2d36cb706d5c5ffa916f68ca7268b9c6d4386b6f215e507f0b4a8ba2558f9be746f9b941c1ff63690828ada00b26636b4407aee5b1948d79eada0e4b2d60cc656387dacce2de299c6e1950e4b5a22d8b16b2b0c743374d1d96309bb3e4d41d0c1246d928f100526adbe311785b7238210f95d0702e542995e83a44aea320f69338da84f359ecb725a4b4cef57967ac29e0b5478d0522e89d9a0e4d5448546ada1d84b11fcde67170e577135e4046f9e3fa1e679cd25c01a26985cdd3502de5161b46c2d9d23f47703bb16fc7a022939f4fa4e979e3e255cb5fe8310eb0b1abdb2f59c751107e6ded1c115734af5bc8be3b90122ddf606de8faf00b91b8a45d16f27de3473f48f714410a1514fce36922b80d7cf8af1d171fb1b8fa28a334de7177b86a447805dd0e89b6dc23db1dbb9e475a70a5ff8db996ed1ebbd6e46832c20e0afd5c51b7f858682756ab17100671fc61dbadc31f16b96b8978040000",
    ],
    [
      "ETag",
      "/u5larcIve8BrVtz502gCw==",
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
      "Tue, 26 Oct 2021 14:49:48 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-99-1635259702250"
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
      "d1",
      "53824010c6ff97ed154734c164c6072d3367d00cb1879ac63961411438ba3b4ac7f17f6f8fcc9a6aa65e6077f9edf17d1fec6193e42138b04ce2e712c5ee2c4675a70b0f65992a49b782e712c100542c267253df2ebd7868a2bbc1721b74ee8b61fd21ee768990c10a3306ce1ea204d35082f3b8879c65486b014fcb2c5f549d016a57e8e1ccf7469321f5190f753f99bb6eafef0ee0609c1643a6d8a2e2ffb1f6743060cd971e4628300f506b29045f63a046daa6645991624df2520428a182ab07b1e065c104e7359ad43a9d5ac33eb79a56a76d369b964960ca03a6129e133b9f913e505cb1d4e3afe4126c02445592e1a8babed038092b23ba1c4d7cbb55e9fb0a90b4284971f137487a578c3ec307768ce03bc7325ee6ea445dbbb7bddf8ea34c3f8fbaeaf9831f845494d409f147e3c1ccef8da79a7b3a7aefef14caa9e014a4449d61c36c5d586ddb7c8ff592eba8e93d8e12251a1030fa3b6e12054ec45289873766e332497b020000",
    ],
    [
      "ETag",
      "k/xbRgG0eLkeuxc9VpG/Zg==",
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
      "Tue, 26 Oct 2021 14:49:48 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`stamp`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-100-1635259702250",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffd554ef6fda3010fd572cef4b2b5102b4fc1853d5519a6dd120d024b44355056ee2a46e9338b59d4aa8e27fdfd98132d66dfd3c0909cef7debd77e7332ff891e511eee33b963c9554ac3e3cf03b5cc35491044ec7c359b7ed5c37921fe7dda24756a1356a5c26a7a780609a254956a4f448f2528454f6677e3d11bc2c88e0fc080a1d351b8da366e7b8dd6a7fec365aad76038892a6f188e58f40bf57aa907dcbda8ad713ce93949282c97ac8b3d773ebb96515823fd050496b5fd3021969bda37a96f29028c6f3d3990f0e4a49c5826684a5e061478dee3eefd7ae3392d513003fb3909230e465aeb42f2811f23c6649294c55dc7fc1c6e72f3fb06f8fec61808693991b1c2c49a6c9cb434424da0635b484a66296d2058b963ab358148fe88b371943061cdc1349e5125d7fb33d1ba1d1e4daf60e96528147283472bedbe80c0ddc0bb45fc771d1cc756d3f40076787e8ab37994dd1f97c0f030d44342665aa2e880211a58d47d54f47dfaba25201683373e7ed55e3b5ce322e98d2cd3a6e607b8361e05cd9d57c473421e1ca7f8209c7249514d044908c2a2ac63ca240994e7c277026ee60040c33b4e9162171ffe66547085605d50695f9c6813386e606e3295eaf6b7f870d3c6f3087d24408b2fa2d07763b279abe635f91b4341083375165e3b94ae026d66adba8b5179dec451dbcbe5dc3a78661192b657c39b3bd39ae8e3c1a5341f3d0c8fd63c4066c12ef3faaed820318561c74604d14938a8552ab84829a74c032d3cb86ddeb757a1d6cc042bdc9758f7bfa9f208ffe98d96894a63e15820b8f4ad8281d829a345e580e4361d1a579137b2e9f364719959224babccb51465478cff2044996e4505b50147381e2320f35ad7a02e68888a4cc68ae90be51d947af4b51477e59145c281aedaa00a07a3d7ee039eed7c34f9bf07c1ed83ebc49856e9afd5eeb5637655aa9aefeff6de3b6ba1cede762e2dab0ea3f013fca7797e9050000",
    ],
    [
      "ETag",
      "MCU75IW0gXB7p8ayc/L0Qg==",
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
      "Tue, 26 Oct 2021 14:49:48 GMT",
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
      "d1",
      "56",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "7f",
      "d9b3781258bade18b834d020269a2f1c60135094b921019dfe3d4fbf91f71fee3748b28c2b1537f5895fc00be8131d8db3b12b6698e4458597d753559115db2974b652d8b56723de44b969e2186ec3a5ef1913b83299923bab8ee63a6a9bf22a7040b197e35a9fa3eef3a87db96ff61993613d6599ed0cafaca1a6b12f32f3d03b42d14d0349222b78486f13677653654ba7c5a5f6987e8c6e349db792d5a96ba950db3f2babf3a54d1a9593b0d7d6c122a0dd060d56e06caf5463bd3beddf0bbc2770ed2fc42567bec86a6b873dfb432ebba7281c3f3cfc5f600478274ac9555cdeb71b10a111f8ab1f37bde0f7ff9827924bf0f30bb6c4f75519040000",
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
      "Tue, 26 Oct 2021 14:49:48 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-101-1635259702250",
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
      "85536b6f9b3014fd2bc8fbda84474a4222456b94d21529211b9076d33421db18ea1630c3a6535be5bfef629aae55a5f513b6ef39f79cfbe009ddf13a430b4478f1bb63edc3a75b41d009620a17f0ea64dde33c7083d0db09f29d938d79f1b829964b40f09e2571d5946c2445d7522617fb785cb4a26b702bc408128d6ccb1ed9d389ebb8f399e538ae0544c9ca7cc3eb3ba0df28d5c885691ec5c7851045c970c3e5988aeae5ddbc77cca615b78c2a69bed53441469a1fa87e2e05c58a8b7ab98fc14127599bb20af3123cfca366e4ec6dee31c7d5b800f03da70c532aba5af5be20051575ce8baed559d1e209699faf0e28f637fe3a31a828bbaa4e6b5cb11323c30aa7eaa161c645b4db1a4178b18bb6ab24d88569bcbef4b7abf17ab7d96fc3d8b8bef423df5098944c738da571a66f215c403f6352f15aab27fd73affcdca1e0fd607a02484b3604d39935c5b667cd494e6634f7262ec92d468847662e9e108bce4fd9694618069e16d52c5c8b7ae2b89eed102fb52c8cd3d38c65e97c9a93d4994083dca99dcf6c1b1d4ed09f962b76ce6523241f3a84aea320f1d324da87eb55e2eb1272dc95ea7c30d617f0daa3820201f49f9a0e7d940b50eadb1d84891fadd64970e50f13deb002d387f837cc38c7a56480c62d344fb1762b3268180a575bff1cc07a625f8f4189163f9f50dff3dec5ab96bfd01318606f57e92f8a932808bf683b47c4152e3b0db91f0ea801cb37501bb83efc02246ce990057ddbfbd10f343c452c672dabe9c7d304b00e7cfcb71d371fc0b0fba02315dc6179a8ec5568cb8625e2bade23db9b5bd309d2e056bd8b39ceecd8b63e479f9155ac56cf250d9b0f950e629d7c014110e61fea761dfe022be3852c7b040000",
    ],
    [
      "ETag",
      "2duz9I5IN8OobXibL/FzLg==",
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
      "Tue, 26 Oct 2021 14:49:49 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-101-1635259702250"
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
      "0000000002ff8d92dd4ec2401085df65bc2db1fc63132e8a829200022d8989216469a7506c3b7577ab21847777b6221a35d19b7666facdf69cd31ee029ce4270601d6f9e0b94fb8b0dea9929e6a88a442bbee59429040b508b0d93979edbf107ebb036109dba08f65b120f34eb769950c1165301ce01a218935081f378804ca4c86b0125459aadcace02bdcfcdd0f3e7c3c92df72985a69f2c4623b737eac3d13a2f86428b55c9ff636d79b46047eb394628310bd068c925ed30d043635389344fb0a2a890012a28e1f2c14652910b4954e149a56a572bd556bd596b5eb5ed5aad6933995020744c19c30b8f0582262d9239bdb24d683120cb921d47e5f585c771583a31e570e2b71aa5c0af006b8be204577f832c782bf83b7c60a70cbe7322a522d3676a30ba777f3b8e43fd3ceac6f5fb3f08a539aa33e20fc77dcf77c753c32d4fde7b7b8d6a2a8993546842acda8d4eb3ddb2df73bd269335bfc7d1b2400b02c1bfc75dacc18944a2f0f8060a6837c07c020000",
    ],
    [
      "ETag",
      "/SA8TFbd2Fa83acyhoaXoQ==",
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
      "Tue, 26 Oct 2021 14:49:50 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`amount`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "%1.54%" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-102-1635259702250",
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
      "c5",
      "54",
      "7f",
      "4f",
      "db",
      "30",
      "10",
      "fd",
      "2a",
      "96",
      "2704d3da86165a4625c40a0416ad24254d41dd841a37718321898bed802ad4efbeb3d3001d6cfc39a9527dbe77f7defd709ef01dcb63dcc55396dc17542c3eddf229ae61aa4802b7b3de3e9d2ecec68f2af8d2b9b0a29f8e35721e0f0e00c1749424d93ca575c90b1151d91d0d1b89e0c59c08ceeb90a8dedc6ed59b9d9d76abbdbfb7dd6ab5b72150d274d667f91d84df2835975dcbaac81b09e7494ac99cc946c4b3e77beba165cd05bfa59192d63aa70534d2fa80f530e511518ce707a32128282415139a1196828697d078fa6d3d778391ac9100f881459444112f72a575418a88e7339614c264c5dd276c74be3ae0a1ddb78f0374ec8ddc602b24990e0e3f23225165d4500845cd584a272c0eb5673299dfa153df3b070f28b82192ca105d7db77d1ba1be7765fbaf32f59d1f363a443df704ad27725c34725d7b18a0adc3cfe8ccf7460374345ec34005319d9122552744018bd2cae3f2e8e8c12a2a1580564d77dece1a2fb59771c194aed67103dbef1d07cea55d36b84f13122d86f7d0e219492505341124a38a8a731e530819784327703cb7d78708d3b5418590b8fbebe9252058cca916a8cc3f3eed7bbda0b36b1454904b921606f3501ef046b3d1deddc0cb65edef897abedf1b033911822cfef041419ae25d0e83375629b4e26c62cd5659ad356b77cdeae0e5f5127e350cfb5a32e38b91ed8f7179e5d31915348f0cdd3f8660c0c6f1f1bbabde0080e115008f54604bc522a95922418d3b6099a96515bdbfbdd7fc8a0d58a8b7be9da6fe58e4f1bb9e154761f25321b8f0a9849dd326b049a385e5d014f898d47046a524894e33caa11449c934",
      "a5c86c067a1e020a43c472a4a784c2603cb027ab7580e774446214f3424799467751b90595b5599a9b5a9891538eefff4ab92e9ba4b94e3cd78695fb0d45c2565f94050000",
    ],
    [
      "ETag",
      "fA9ebyGYwtT+6Q/cZI/UIw==",
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
      "Tue, 26 Oct 2021 14:49:50 GMT",
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
      "ffedd3db6e82300000d07fe9b39a2003646f30600b02660a187c21502b2d28945ea897ecdf67f61bf3fcc379800a42c47929860ef5e01ddcaaa5bd808b355db941435a3fdf4b7cc02a627be36d3c701a74a91776beebf4d8da51bb556bae25caa73ae55adee33a155e7c1ca18ae9d66a383b3155d70699bc48c290c339d5f6587d6d74923634bbde8e032f4e5b2338eae125c9a87937d96014d481b499924d1cad649b4cc367e0b41fb15568a2a9cf9047234c97840be149fd2ed5f75af4324a5c635c95d1ced187696bed18caf050f8fe25bb7b667e0ef3f906cb82548b9797ff0bcc00ba52c2102fc973bb6ed8f60cfcd52fc58da2e77f17550c31f0f30b957b666d19040000",
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
      "Tue, 26 Oct 2021 14:49:51 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-103-1635259702250",
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
      "000000000002ff85535d6f9b3014fd2bc87b6d4248424822456b96d29535211b21edaa6942c65ca85b82293699aa2aff7d17d374ad2aad4fd8bee7dc73ee074fe49e1709999298670f35548f9fee444c4e08289ae1eb7e6b8ec797beb8f956f09fd52a4d1f8a2fe97c3643046f5892eeca1c3a52d4150339dd6eba5925ea925642743051c7ea0d3ad66860f7ed89d3ebf7ed1e1225e4e99217f748bf55aa9453d33c8a773321b21c68c9659789ddcbbbb9ef9b6525ee802969bed53451469a1fa87ece05a38a8b62b6dda0835a4215c18ef21c3dfca326f1e9dbdc5d4e77dd0cc17bce803226ea4235be30051345cab3bad259c9f489689faf0e64e32edd45683091d7bb222ae80e4e8c842a1aa9c7128cf360bd323cff7c1dace6a1b7f6a3cde2c25dcdbb8bf572bbf237c6f5851bb886a2710e9a6bcc8c537df3f182fa0948c50bad1e36cf8df27387bcf7836908282da10d464e6f44ad716f12a7b1c3d2f1c08ed31ec4f138766c3a887b6c3284611203459e16d52c5a88c2b61c3b4d6227b2eca1150d53368a26231ba2496a53b0622b7160480e27e44fc5159c71590ac9db0e91ebc00bdd280cb6fe621ebaba8494d6b93a6b8d3505bcf6a8b04004fda7a64313e502959a767b7ee806f345e85db9ed84979051f6b879c019a7349780685a61f314542b9160c3883f5fb96708d613fb7e0c4a32fdf5449a9e372e5eb5fc851ee2001bbb4a7fc9260c3cffabb673445cd1bcd6907d7b20255abec5dad0f5e13722714bdb2ce4c7d60d6e48fb14400a1514ece3692258073efedb8e9b8f60dc7dd4910aefb83c4c362aac827689b8aef7c89e58d6d8261a5ca977b1fec43ab6adc9d164841d14eab9a476f3b1d256ac962f200ce2fc7dddaec35ff148008b7b040000",
    ],
    [
      "ETag",
      "vU/88KNoYJniXrMffqnBfA==",
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
      "Tue, 26 Oct 2021 14:49:51 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-103-1635259702250"
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
      "92dd4ec2401085df65bc2da1fc6b132e8a229214145aa2c410b2b453286ebb7577ab21847777b6221a35d19b7666facdf69cd3eee129c922706095ac9f0b94bbb335ea8929a6a80aae15dd729129040b50b335913aa95527f7d9c3dcaff2b917c6cad7a381dbed12a1c20da60c9c3dc409f24881f3b8878ca5486ba1e0459a2dcbce02bdcbcdd00fa6c3f180fa5444a61fcf3ccfed797d3858a7c58869b62cf97fac2d0e166cc56a8a314acc42345a7229b618eaa1b1a9589a73ac2851c810159470f9602d45913329448526959adda8d4da8d56bd75d1b1ebf5964d241721d389c8089ef92410b4d08c4fc52bd9843601b22cc9715c5e5f689c44a513530ec741bb590afc0a90b638e1b8fc1b24c11b46dfe1033b66f09d63a928327da2aebd5bf7b7e328d4cfa3aedca0ff83509aa23a21c170d4f703777467b8c5d17b6fa751dd4941492a3421d6ece679abd3b6df73bd14266b7a8fa3658116848c7e8f9b44831333aef0f006ca6020427c020000",
    ],
    [
      "ETag",
      "ti1/QWnXYS/lYLcfsStMGA==",
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
      "Tue, 26 Oct 2021 14:49:51 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`id`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: "%15%" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-104-1635259702250",
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
      "000002ffc5546d4fdb3010fe2b962704487da1a52d6b25c40a6410ad245d9a80aa09356ee206431217dbe956a1fef79d1d02ab60e3e3a44af5f99ebbe7b917e7093fb03cc6033c67c96341c5fad33d9fe31aa68a2470fbeb308d7e92bb23af7dd1e1fdd35570218af9f0f818104c4749922d535a97bc1011958360d248042f9644705e8744f5d641a7deea1d76dbddfed141bbdd3d804049d3c588e50f107ea7d4520e9acd8abc91709ea4942c996c443c7bb96faedacda5e0f73452b2b9cdd9041ad9fc80f524e511518ce7c7c1041414928a19cd084b41c36b683cffb29dbbc148d64800bc62112551c48b5c695d9022e2f98225853059f1e0091b9d7f1cf0c41a59673e3a7303c7df0b49a683c37d4424aa8c1a0aa1a8054be98cc5a1f6cc66cb07f4d573afc0030aee88a43244379796672134726f2c6f2f04e83e725c1f8dec6f163a4143e71c6d27b21d14388e35f1d1dec93ebaf0dc608c4ea75b18a820a60b52a4ea9c2860515a795c1e6d3d5845a502d073d3edb7b3c61bed655c30a5abb51ddff28667be7d6d950d1ed18444ebc923b478415249014d04c9a8a2e28ac71442c6eec4f66dd7198e20c2746d5c21241efc787a0df0d74baa052af3afb97a1dc35f01ae495a18c4aa3ce09d5677076f36b5bf27197ade700ac44408b27e9fe05d0683375629b2626c61cd5659ed2dabb365f5f0e67603bf1a865d2d99f1f7c0f2a6b8bcf2e8820a9a4786ee1f033060e3f8f8cd55fb0f607801c02315d852b1486a964850e3f659666a798eeeb7fa872d6cc042bdf5753feb0f451ebfeb79e6284c7e2a04171e95b06fda043669b4b01c9a021f921acea89424d169821c4a9194cc538acc56a09721a030442c477a4a28f4a7636b6626050fe994c4e051bd0e325d1e20bd00d579571bbb5a91d151ceed3f69b82ddba249ce5dc78225fb0d4efa9f6f82050000",
    ],
    [
      "ETag",
      "x3lcwah7R2G4o9BvUGrubA==",
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
      "Tue, 26 Oct 2021 14:49:52 GMT",
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
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "64",
      "2d0e1004e94e06e5a702b5cae82683317c8422e4438d9ddebd4eaf51df1dde37c831268c217e6b4807de80cc757b8aa7513f775665a56dfa544f87b248030d9d235132abafa149b7a7c05c50ab0bd623efb0b7d685b16f6e461567b54cf27d14b9dd10175179ccbd651e9ec929a2f5fd682e613b4fd2267e1483afeb45b071fdd0b34a4682af1dc61767ef1ee445040a6cf96aa566523972f8aeb1989359758eadc1c8949e24e135143b6753a2ed683c12043f3c858951c487caffb4246c6f0bdf5efba2758c90aac555c7d512a5dc906ac6e7d39797ff0b4c00b9f735250cd5cfed7066db13f0571f71d993e77f87e49450f0f30b0cd99fec19040000",
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
      "Tue, 26 Oct 2021 14:49:52 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-105-1635259702250",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6f9b3014fd2bc8fbb82690272452b466295d9912b212d26a9a2664cc85ba054cb1e95455f9efbb98a66b5569fd84ed7bce3de73e782277bc4cc89cc43cbb6fa07efc742b62724240d10c5fa757dfd7c1678f5f3a63d34a69755f785f8bcbc50211bc65495a5439f4a4686a0672bedff5b35a3415ad85e861a2dec09af406d3d1643899d9d67038b19028214fd7bcbc43fa8d52959c9be651bc9f0991e5402b2efb4c142fefe6c3d0ac6a710b4c49f3ada68932d2fc40f54b2e18555c948bfd0e1d3412ea080aca73f4f08f9ac4a76f73f7392dfa19821f3803ca98684ad5fac2144c9429cf9a5a6725f327a27dbe3a909dbb7657a1c144de146554d2024e8c842a1aa9c70a8cf360bb313cff7c1b6c96a1b7f5a3ddeac2dd2cfbabed7abff177c6f5851bb886a2710e9a6b2c8c537df3f182fa0948c54bad1eb6cfadf27387bcf7836909282da10b46b635a503c79ac5696cb3d4194de2d4823876627b4247b1c5666318273150e46951cda2a528a77162d9007694a414a2b16da5513c1b2691ed4c07309e3a6348127238217f6aaee08ccb4a48de75885c075ee84661b0f757cbd0d525a4b4c9d55967ac2de0b547850522e83f351dda2817a8d4b6dbf3433758ae42efcaed26bc868cb2c7dd3dce38a5b90444d31a9ba7a0de88041b46fce5c63d43b09ed88f635092f9af27d2f6bc75f1aae52ff41007d8da55fa4b7661e0f9dfb49d23e28ae68d863c740752a1e51bac0d5d1f7e2312b7b4cb422ef76ef093744f01a45043c93e9e268275e0e3bfedb8f908c6dd471da9f08ecbc364abc26ae89688eb7a8fecd970680f8806d7ea5d6ce4d8c7b6b539da8c5040a99e4bea361f2bedc41af902c220cedfd7ed3afc0532e8786e7b040000",
    ],
    [
      "ETag",
      "6VJLR+IiQ84/0fapqmIBmQ==",
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
      "Tue, 26 Oct 2021 14:49:52 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-105-1635259702250"
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
      "000002ff8d92416f82401085ffcbf48a095ac196c403b6566dd02ae2a58d312b0c880596ee2e36c6f8df3b4bad6dda26ed0566866f96f71e1ce0392d2270609d262f158afd45826aa60b1f65952949b7921712c100542c21d2bcf767bb8ddb54a21884a637dc4ea4fd38eb768990e1067306ce01e214b34882f3748082e5486b21cfaabc58d59d016a5feae13cf0479301f5398f743f59789edbf3fa7034ce8b11536c55f3ff585b1e0dd8f2b58f310a2c42d45a4ac1b718aa91b629595e66d890bc12214aa8e1fa4122785532c17983268da669359af6a5d5b2ae3b66ab659944663c642ae505c18b390904c515cb7cfe4a36c12640d425398eebeb8ec669543bd1e56812d8ed5ae05780b4c56986abbf4112bc61f41d3eb05306df3996f3aa5067eace7b707f3b8e42fd3cead60dfa3f08a928aa33128cc6fd79e08ea79a5b9ebcf7f60ae554704a52a20eb169b6afac8e6dbee77ac375d6f41e47890a0d0819fd1ec3548113b34ce2f10d488123bd7c020000",
    ],
    [
      "ETag",
      "0JRQvhA1trnGc0LHjNs6ZQ==",
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
      "Tue, 26 Oct 2021 14:49:52 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%oran%" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-106-1635259702250",
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
      "85540d4fdb3010fd2b912724d0fa95a46dda4a88756dc6324a0a690a42d3d43aa9133cd238d84e2786fadf777628a3ec03295272bef7eeddb3cf794477345fa1018a687a5f12fef0ee3b8b500d118953584dfd9bf7ddb3cdcffbeb2f63dc2d392f6697e1f0f8181054b1045e1719a90b56f29888c17cd648392b0bcc19ab43a1bad9ead6cdaeddb13a7da765599d161005c99209cdef807e2b652106cde64ebc913296660417543462b67e5e6f6eac66c1d977124bd1dcd76c828c68bea17a92b1184bcaf2e3f90c3a2805e10bb2c63453169fa9abe8c37eed06c5eb460ae00d8d098e6356e652f50525629627342db9ae8a068f48f7f9e203cddc893b0a8dd174ee87874bbc56e4e5918185b10b6ac6124c2534230bba5aaacc6251dc199f82e93964a0835b2c88581ad79fddc0358cc9f4da0d0e9f1350cb9f86c6c43b738d1363e88f8dfd729e6fcc7ddf9d85c6e1c991711a4ce717c6c79b3d0cf858112169ae5d8438ca8872f0b4d3de9f07ac08588278955c38ad2e367bad7e94444e9cf4ec4e94b44814f522a783eda815f7dba4bd8a08069e54d5350be72c8f238c4dd2ee391d92f4ac8e851dd3746cdbb27b6ddb363ba6e5f4da51cfb2d0b6867e702ac9988a82095aed36ba0ebcd05d84c1dc1f0d4357db487099c971d59c32f1b24f092601f41f5f5b95a50c94d4d1797ee806c351e85db9d5b44c488ae387d93dcc4b823341008d395e1349f8395bc1a6a18be9cc0bbda93f9c00438fc0c50e21d0e0ebe36f42f850e85d96fa8d6661e0f9a7ba811de20a67a5866caa0f74c038ce0fd0765bfb779d61100c6f401b738e1f5ee5c04fb7ade87fd1d0781d557dee344da4d47691b517b5f7a22eda7edbc2534370f72a65743977831b542d0524219ce4f1dbb305609d78fb1fb2bbcf00861b0d3a42420ca31c0ba51273528d345d6b2f4fecbed5772ca4c15cbeced9adbebd3b3b554355246b92cb274bd57dd6bba852a57806411226d1d7c7b8fd05d4d0bc0d51050000",
    ],
    [
      "ETag",
      "gNY+6KvzqWJDa6urrpSQTA==",
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
      "Tue, 26 Oct 2021 14:49:53 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-106-1635259702250"
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
      "02ff8d514d4fc24010fd2fe3d136292d4525e1000691a42152e4640859ca500bedcebabb9554c27f77b61862e2c5cbeeccfbc8be973dc1a1905be8c3a6c83f6ad4cd4d8e76ee86144d5d5ac3972269103c402b7256de37d172a19279f76b2fe74fb78bc9fd110fc3c18015267bc74a40ff04bb02cbad81fedb09a4a8906da2a25a5a16d946b97d3a7b1d4fc62903156d1d305b26c970948ce1ec5d4debb53afccbb23a7bb0a74d8a3bd42833741994a63d6676eaea1951a9127d43b5ced0402b6e895c53ad8426f219f13b41cfeff4a2388c1fee82308c03569694095b9064f172c1e1c09215654a47ae07110b743b72d35d7b7e321cb725dc14b6d97e73dd2bd7f9c34557aeebb8d5cf63a3c6a279d1c4d10dbad4c1a5c123b95696db5a5da30799e00f782eec653f7f03c60270addd010000",
    ],
    [
      "ETag",
      "8y3USpLQ4zjnQF+SG8wekA==",
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
      "Tue, 26 Oct 2021 14:49:53 GMT",
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
      "ffedd34d7282300040e1bb642d0ea30849770852059c014501379908e147a4061228e8f4ee657a8dfaadde05de0b9024a19c63f1a8e817f8002359a0793277185c5bf9ad40d9b9b1a34b007364da0aebc2ded1164ade3d4d2165ccf003e1e6cee7e5705160abab8bbe8bcdb8c6a9bcdb8e541d740ca5755d5c59544961840aef3b8b7b5f52eae054fbc7c67bf861dcbb8f53ce5329c4cdcaa80692db83eb8c82541b1613581d77aad7a5ee99ef59b9d3e49411d91fd3a576b7fbb6e29179df66b67610a16a0aa85b94df36500a9e7bab5e619d0d966ba457ea3585e61b259a72fef6f67f8119a0032b5bca7139ddbe5c2134037feb6331323afdbfa6a4a52df8f905990dc04419040000",
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
      "Tue, 26 Oct 2021 14:49:53 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-107-1635259702250",
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
      "6b6f9b3014fd2bc8fbda242484bca4688d52baa225a425a4d5344dc8980b710b986193aaabf2df77314dd7aad2fa09dbf79c7bce7df04c1e781193198978fabb86eae9cbbd88c8190145537c3d30dbf9b35beffdeb6ab3bf8f1749fee87cbf99cf11c11b96a4799941478aba622067bb6d37ad445dd24a880e26eaf4cd71a73fb2ec813d1d9b83816d22514296ac78f180f4bd52a59cf57a27f16e2a449a012db9ec3291bfbef70e835e59897b604af6de6bf65046f63e51fd9a09461517c57cb74507b5842a849cf20c3dfca3c6d1f9fbdc5d4ef36e8ae0036740191375a11a5f98828922e1695de9ac64f64cb4cf3707b27556ce323098c8eabc080b9ac39911534543f5548271e96fd686eb5d6efcf52270375eb85d5e39eb4577b959edd6ded6b8bb727cc75034ca40738db971ae6f1e5e503f06a978a1d583e6b9517ee990fb71300d01a525b4c1706c8e687f624ea3241ab36462d9516242144da2b14dadc864d3210ce30828f2b4a866d1421423b30ff6743208ad01eb87c3816586349e44a1c5cc384e2c98b091498e67e4b1e20a2eb82c85e46d87c89def064e18f83b6fb9081c5d4242eb4c5db4c69a02de7a54582082fe53d3b18972814a4dbb5d2f70fcc532706f9d76c22b48297bdafec61927349380685a61f314546b1163c388b7583b1708d613bb3e052599fd7c264dcf1b176f5afe4a0f70808d5da5bf641bf8aef74ddb39216e69566bc8a13d90122defb136747dfc8548dcd2360bb9d939fe0fd23ef990400505fb7c9a08d681cfffb6d3e62318771f75a4c23b2e0f938d0aaba05d22aeeb3db1a7d6b8df271a5ca90fb1c970746a5b93a3c9083914eaa5a476f3b1d256ac96af200ce2fc3dddaee35fbcb1cab97b040000",
    ],
    [
      "ETag",
      "vc5EzUMhRPrOhjdAfmwEKQ==",
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
      "Tue, 26 Oct 2021 14:49:53 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-107-1635259702250"
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
      "5b",
      "6f",
      "82401085ffcbf4b190e2052f243ea8b59544ad177c6a8c5961402cb0b8bbd418e37fef2cb5b6699bb42f30337cb39c73e0042f711680039b38da17288e3711aa992ee6288b4449bae53c930806a0621191fbd6b65fddf583190e6b76bb75975bb7ca3d743a44487f8b2903e704618c4920c1793e41c652a4359f27459aadcbce0075ccf570e1cdddc923f5290f743f598e46ddde680067e3ba1830c5d625ff8fb5d5d9801ddfcc314481998f5a4b2ef80e7de56a9b92a57982a6e485f0514209970f22c18b9c09ce4d9a9815ab69561a35bb6ab79b56b56a5b4426dc672ae619c1cb050904c5154be6fc4036a14180284b721c96d7571ac741e94497eec46bd44b815f01d216c609aeff0649f096d177f8c02e197ce758ca8b4c5da987d153f7b7e328d4cfa3eebbdee00721154575453c773c5878ddf15473ab8bf7de51a19c0a4e494ad42156ac7acb6e36acf75cfb5c674def719428d0009fd1ef318c1538214b249edf00eee713f07c020000",
    ],
    [
      "ETag",
      "q8hC2jCdQeH3598/p0+tIw==",
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
      "Tue, 26 Oct 2021 14:49:54 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%oran%" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-108-1635259702250",
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
      "54",
      "0d",
      "4f",
      "db",
      "3010fd2b912724d0fa953469d24a8815c8205a49599a14b1696a9dd4c90c695c6287ad43fdef3b3b14e8d88654a93edf7bf7eed9e73ca05b5a2cd000c534bbab48b97e77c362d44044e00c76a3f73af979f3e557741ce6e7794533eb783a1d1e1e02824a16c7cb554e9a9c556542f8209ab4b292552b5c32d684424dbde334f55ed732acbedd310cab03444ef274448b5ba07f1762c507edf656bc953196e504af286f256cf9b4dfbe37daab92dd9044f0f6ae661b6478fb0dd5a39c255850561c4613e8a0e2a49c9125a639f4f04c5dc41f766bb7285eb63200dfd384e024615521645f502261454ab3aa5455d1e001a93e5f2cd0c41db927a176328efc707f8e97923c3fd030d7b641439b83a994e6644617739999cd56b7dac7607c0119e8e03be684cfb5ab733770356d34be7283fda704d4f2c7a136f23eb9da9136f44fb5dd729eaf45beef4e426dffe8403b0bc6d1a5767cbd83011f0bc2052d948b10c739910e1e4fda7b7dc192800588d7c999dde961dde9f4e334b693d4e95a71da2171ecc4b685bb7127e99bc45cc404034fc8ea8a850b562431c63a311ddb22a9635806b675ddee768dae6376bbbaa51bb663c68e61a04d03fd28a920a794af18a7f569a3abc00bdd591844fec93074958d1457b938ad9b93265ef629c02480fee36b23b3948192bc3acf0fdd6078127a53b79e9611c970b29edcc1bca438e704d0b8c44b224879c1167068e8723cf1426fec0f47c0502370b9457034f8faf04c08d72b75ca42fda3491878fe996a608b98e2bc5290fb7a81f658898b3db4d934fe5d671804c36bd0c66589d77fe4c04fcf94f4bf6828bc8aea3eb79a3a926adbc8d889cc9da88736df36f06b20787bb532fa1cb9c135aab70292929214c9dbb305609578fb1bb27dcff21335913a5c400ca39c70a99294a41e69ba545e1ed97d131648814b",
      "f12a675be6f6ee640d59912c49211e2dd5ef599da24c55fc09044998445f5de3e6376cc629c551050000",
    ],
    [
      "ETag",
      "U+1exjZzUBTlHluig5BVVA==",
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
      "Tue, 26 Oct 2021 14:49:54 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-108-1635259702250"
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
      "51",
      "4d",
      "4fc24010fd2fe3b54d4a4bfd20e1204a146d102a1c8c216429d35a683b6577aa2184ffee6c31c4c48b97dd99f7917d2f7b806d5eada107ab3cdb35a8f71719f2d40e319aa66023574d954170005965a24ca3b7c87bba9fcd621e4fa29766173c4fb3acdf1785493eb054d03b409a63b136d07b3f40a54a149b2aa9a95844bcafed3e1acf860fc3588092d61618cfa3e876100de1e89c4dcb65bdfd976571746043ab1853d458256833d49a3698f0c8d633aaac0b740d353a4103adb825324d4dad34912b88dbf1aeddce6510fae1cd95e7fba127ca8212c53955229ebf4a38606255c4f425f52010816e47699ab6e7a7c0615bc24e7e9bed37d73d739d3f5c70e6ba965bfc3c36d8339a8926896ed0a6f64e0deec8b66269cbba410712251ff098f3693f7e037d8299d1dd010000",
    ],
    [
      "ETag",
      "fLYL0JDTTRtNPLOuq3KQgg==",
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
      "Tue, 26 Oct 2021 14:49:55 GMT",
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
      "5b",
      "72",
      "82",
      "30",
      "14",
      "00",
      "d0",
      "bd",
      "e4",
      "5b199e02fdab6d80081470ac53fdc9f0b858de24512b74baf73add463d7b38df28cd7310829e87067af484a654b5a55cf2476bed9c2a7f369b6e966b45dd30bd10050d789c7c41b1f7c8b10dab5a364dacb026cdb3b9985d022b4cb381faa55861d659dbd316ebbbe7519f48ace94a10c54ea76fd22c050207a5bc1c38e0c46d36d5ecbd9dcc5e6b77255bd25bad9c7d2b2757b93f8a8f50655efcd9773e265d38d6de72509c975ea6d17b126b01e3af7b410d57b48311d38a093281cfead2520936b47d77f5ca4b14c86ddfaa897ce14e243d3cfc5f6881e036561c04adeedb35c3b617e8af3e3d4f23dcffaf21e5c0d1cf2f12e679bc19040000",
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
      "Tue, 26 Oct 2021 14:49:55 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-109-1635259702250",
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
      "000002ff85535d6fa24014fd2b64f6b50a2aa89898adb1743551dc22b6d96c36646618e8b4c8e0ccd0c634fef7bd0cb5dba6c9f60598b9e7dc73ee072fe89197299a20c2f343cde4f1db8320e802318d73b8bdc5eef860cb78f15c8a581ee6378be340cca65340f086a5f0be2a5847895a52a626bb6d3797a2aeb014a203893a3dc7eff48603afeff923a7dff71c202a56642b5e3e02fd5eeb4a4d6cfb2cdecd85c80b862baeba54ecdfeeeda7be5d49f1c0a856f6474d1b6494fd85eaf74250acb928a7bb2d38a8159309db635e80877fd4945c7eccdde578dfcd01fcc429c3948abad48d2f48414599f1bc96262b9abc20e3f3dd07da06ab601e5b5414f5be4c4abc6717568a354ef4b162d675b4595bcbf07a13ad67f1721326dbf92258cfbaf3cd6ab70eb7d6dd2288024b635230c3b5a6d6a539857000fd9429cd4ba31e37d78df26b87969f07d310405ab136988c9c21ee8d1d9f646444b3f1c02399c3081993918707c4a1becbdc94300c3c236a58b814251df7465946dc84a4f07089374cc6a99f256c98a543e667fd91db43a70bf42cb966575c5542f1b643e82e5ac6411247bb703e8b03534286eb425fb5c69a02de7bd4502080fe53d3a98972014a4dbb97611c44b379bcbc0dda09af588ee9717b801967b8500cd05842f334936b9142c350385b0757003613fb790e2a34f9fd829a9e372edeb5fc8d1ec3001bbbdabcd1368e96e10f63e78cb8c5456d204fed07aac0f23dd406ae4f7f00095bda664137bb20fa85daab88654cb2927e3d4d009bc0d77fdb79f3010cbb0f3a4ac3199687aa46854ad62e1137f59ed9bee70e06c880a5fe14f35ce7dcb626479391ed59a95f4b6a371f2a6dc56af5068220cc3f34ed3afd05b2691d327b040000",
    ],
    [
      "ETag",
      "Va48q/rTHwnoTrqCQHy3oA==",
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
      "Tue, 26 Oct 2021 14:49:55 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-109-1635259702250"
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
      "02ff8d92d14ec2401045ff657c2db1a08034e101040502584b498c8690653b2dc5b65b76b71a42f877672ba251137d6967a667b6f7de760fcf71168003ab38da1628776711ea7b5378a88a442bbae522530816a06611913eefb9e1433e2ad8a376b77c34d89d7b5ed46e13a1f81a5306ce1ec218934081f3b4878ca5486b5c24459a2dcbce02bdcbcd70e67bc3e92df5a9084c3f9d8fc79deeb80f07ebb41830cd9625ff8fb5c5c1828d587918a2c48ca3d1924bb141ae87c6a662699e60458942725450c2e583488a226752880a4d2a55bb55a9362eeab57aab69d76a759bc84470a66391113c9f9140d042b3c413af64131a04c8b224c761797da1711c944e4c399cfa8dcb52e05780b4857182cbbf4112bc66f41d3eb06306df39968a22d327ea667cd7f9ed380af5f3a85ec7efff2094a6a84e883f9cf4677e67e21a6e71f4dedd6954ae1494a4421362d5bebcaa371bf67baed7c2644def71b42cd002cee8f718c41a9c90250a0f6f2c2b9c7d7c020000",
    ],
    [
      "ETag",
      "TcDPfXpJuaZtPqcJHy/RRg==",
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
      "Tue, 26 Oct 2021 14:49:59 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`date`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "DATE" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-110-1635259702250",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ffd5546d4fdb3010fe2b96f705a4be8f16e884588100d14a02490aaa106addc409a6499cda0e5385fadf7776da751ddbf83ca9527bbee7e5eeeceb1b9eb33cc27d3c63c9a2a462f9e985cf700d5345123875c8593efbeeddb73a876def6e7e35bf6cb3c5e0e404104cb324c98a94d6252f4548657fe43712c1cb8208ceeb20546fb75bf576ef73b7d33d3e6c753add1610254de321cbe7407f56aa90fd667363de48384f524a0a261b21cf7e9e375f3bcd42f0171a2ad9dcf56c828d6c7ee07a9af29028c6f393910f1594928a09cd084ba1862d359a7dddd56e3092351200bfb2909230e465ae745d2011f23c6649298c2aeebf6153e72f3fb06f0dadf3009dbb2327d89b924c93a7fb8848b4096a680a4dc52ca513164d75663229e6e8d2736f2003153c1349e5143d5c5b9e85d0d07db0bcbd694414051dc70dd0d0fe66a15334702ed0ae94eda091e3587e80f64ef7d195e78e6ed1d97807033d44342665aa2e88021fa56b8faa9fb6be5a45a502d07aecf6fbdbc62b9d655c30a5fbb59dc0f206e7817d6f55231ed284844b7f01438e492a29a08920195554dcf08802e5d6f5edc0769dc11018666eb71b84c4fdc7b72d2158165417a8cc37be1804165ead6a7f470c3c6f300655220459fe96834a7b079abe65df93b4341083375155c16b95c06dacdd365167273ad8897a78f5b4824f0dc353ac9cf1ddc8f2c6b83af2684c05cd4363f78fe91ab0497cbc529be70d6078e0e02315c452b1506a975050930e58667a59b38f8f8f5a5d6cc042bdcf1df6f4ff401efd31b3f6288d3e15820b8f4a784c3a0437696a61390c854577662376aa5cac8f322a2549b4bcc3514654f8ccf2044996e4a02d288ab9407199879a562d8039222229339a2ba46f54f6917e0f0de49745c185a2d1560072d5daf881673b57fb5fd6e1d938b07c5846851edbfda3ce93eec77451ddfa7fd9c1537525663f5c47efc70f4809cb2ddd050000",
    ],
    [
      "ETag",
      "NaBnbwRV0271RQkGkF1iqA==",
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
      "Tue, 26 Oct 2021 14:49:59 GMT",
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
      "dd",
      "56",
      "82",
      "30",
      "00",
      "00e077d9b579c0186edd492320b10404cb1b0ecee9f849e718c8ecf4ee797a8dfcdee1fb0605a5ac6d7375aad9113c015d4cf0988ee702392f075e36fd399cba56ad3bb61f762bfd1a149b78930cb12b63d3235c7079f6f94e97e68114a8aebd6b7066d595e6b1ccd5fbf121837d97ad19b23f0d1cf9d922b49551afa49fb90969dea2615b4169f576de76cad6aae9d77cd05e6a72b434e6be791a02a4f7976a8627645a75105a2a142849224ee6a2bfd2d4c37a194e61132c56ee47952616e4d4b8502f3251f16578a1d465ff9c3a5db4754f0413118cefeefe2f30026c10a5646d5edeb63f428c47e0af7eaeb460b7ff0e2b2493e0e717cc5d12f819040000",
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
      "Tue, 26 Oct 2021 14:50:00 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-111-1635259702250",
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
      "2b",
      "c8",
      "fbb826902749a468cd52ba464ac806a4d5344dc83617ea96608a4da6aaca7fdfc5345dab4aeb276cdf73ee39f7c113b9174542668489eca186eaf1d39d64e48c80a619beaaebea6b7943dd8c0dd3cbc4f93c626279bb98cf11211a96a2fb32878e9275c541cd766137ab645dd24aca0e26eaf47abd4e6f3c18f54753d7e9f7470e1215e4e95a14f748bfd5ba5433db3e89773329b31c68295497cbfdcbbb7de8db6525ef806b65bfd5b45146d91fa87ec925a75ac862be0bd141ada08a614f458e1efe511376fe367757d07d3743f04170a09ccbbad08d2f4cc165918aacae4c56327b22c6e7ab0309bdb5b78c2c2ef37a5fc405ddc39995504d63fd588275196c37d6cabfdc069b45b4dafa71b8bcf2368bee72bbde6dfcd0bab9f202cfd294e560b8d6dc3a37371f2fa89f80d2a230ea51f3dc283f7768f57e300d01a515b4c1d875c6b43771a62c652e4f2783114b1d606cc2dc111d30874f87304c1850e41951c3a2852c78c22877a017f760308e87493a8c599a8c63773ae17dc6fa0992c9f18cfca984860ba14aa944db217213ac222f8e829dbf5c449e2921a575ae2f5a634d01af3d6a2c1041ffa9e9d8448544a5a6dd2b3ff282c5325a5d7bed84d79051fe183ee08c539a2b4034adb0791aaa8d4cb061c45f6cbc0b049b897d3f051599fd7a224dcf1b17af5afe428f70808d5d6dbe248c8295ffcdd83921ae695e1bc8a13d90122ddf626de8faf81b91b8a56d16f263e7053f49fb14400a1514fce36922d8043efedb4e9b8f60dc7dd4511aefb83c5c352abc82768984a9f7993d7190ee1203aef4bbd860dc3fb5adc9d164843d14fab9a476f3b1d256",
      "ac562f200ce2fc7dd3aee35fcfb184847b040000",
    ],
    [
      "ETag",
      "sVrBpWa7gb4fFd0+5biChA==",
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
      "Tue, 26 Oct 2021 14:50:00 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-111-1635259702250"
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
      "ff8d92dd4ec2401085df65bcb4440ab46a132e405031fc594a3031842cedb414da6edddd4a08e1dd9dad88464df4a69d997eb33de7b47bd8c459000e2ce3e8a540b13b8b503deac24559244ad22de799443000158b88ac8f860fe78818cc66134f6d9e2e06f58ebd6d368990fe0a5306ce1ec218934082f3bc878ca5486b3e4f8a345b949d016a97ebe1c4737bc33bea531ee87e38edf75bed7e170ec66931608a2d4afe1f6bf383016bbe74314481998f5a4b2ef81a7dd5d336254bf3042b9217c24709255c3e88042f722638afd0a4629a66c5b4eb56cdbabeacd66a5695c884fb4cc53c23783a2181a0b86289cbb764136c02445992e3b0bcbed2380e4a27baec0d3dbb510afc0a90b6304e70f1374882578cbec30776cce03bc7525e64ea44ddf647addf8ea3503f8feab4bcee0f422a8aea8478bd4177e2b50663cdcd8fdedb3b85722c382529518768561b57d6a55d7dcff586ebace93d8e12051ae033fa3dee63054ec8128987370d34cca07c020000",
    ],
    [
      "ETag",
      "3ONJ+eeedWWSTtkX/M3D6w==",
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
      "Tue, 26 Oct 2021 14:50:00 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`stamp`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-112-1635259702250",
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
      "d5",
      "53",
      "6d4fdb3010fe2b96f705a4be8fd74e8815c8205a9bb4490aab106addc4091e491c6ca75385fadf77765aba8e6d7c9e54a939dff3dcf3dcf9fc829f581ee12e9eb3e4b9a462f9e13b9fe31aa68a2470ca26ade58d1a89d37811043774f4ed3a99cf7f9c9d01826996245991d2bae4a508a9ec8efd4622785910c1791d0ad5dbed4ebd7df4f1b073787adcea740e5b4094348dfb2c7f02faa35285ec369b1bf146c27992525230d90879f67ade5c749a85e0df69a8647357b30932b2f98eea79ca43a218cfcfc63e38282515539a119682872d359a7fdeaddd60246b24005eb0909230e465aeb42f2811f23c6649294c55dc7dc1c6e72f1fd8b7fad665802eddb113eccd48a6c9b37d4424da04353483a66296d2298b663a339d164fe88be70e20030e1e89a47286ee6e2ccf42a8efde59dede4c2af008851c37407dfbab85ce51cfb942bbb56c078d1dc7f203b477be8fae3d773c4417931d0c3411d19894a9ba220a8494361f559fb6be5b45a502d07aeef6dbebc62b9d655c30a51bb69dc0f27a97817d6b5533eed384844bff19a61c93545240134132aaa818f0880265e8fa7660bb4eaf0f0c33b8e1062171f7fe654b089605d50695f9c7813d80e67a83215ead6a7f87f53caf3781d24408b2fc2d07768f0e347dcbbe25696920066fa2cac6a24ae036d66a9ba8b3131dec444778f5b0825f0dc34256ca7834b6bc09ae8e3c1a5341f3d0c8fd63c4066c12ef3faccd920318d61c74605514938a8552ab84829a74c032d34bc53e69b55bc76d6cc042bdc9b50f748ee6d11f336b8dd2d4a74270e151091ba5435093c60bcb61282c1a9977b1e3f2797d94512949a2cb3b1c6544858f2c4f9064490eb505453117282ef350d3aa67608e8848ca8ce60ae91b955df4ba140de49745c185a2d1b60a00aa17e4079eed5cef7f5a871793c0f2e15d2a74dfee9e741e7453a695eaeaffdf361eaacbd17eae5cc78255ff09b6002ba0ed050000",
    ],
    [
      "ETag",
      "iY0yHtQr9fvTTHeQXGgbbw==",
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
      "Tue, 26 Oct 2021 14:50:01 GMT",
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
      "08000000000002ffedd3497282400040d1bbf45a291995ec14d21846010dc386c2a603880c3620432a770f956bc47780bffbdf204608b76dd4d505aec01b986246a410a535bb034cf30ccdf7ae74d4d884eaf9160b756f111dda3cc7effdcaff0a5c3ad783b4f1b6772895ed9c3f8489092ead21eafdd5e1d708a1d08ea0a368ef599ad1ac115bd84bd5539e1e95d46ed8b0668c60280b2c7dbae661cbccdab81736a4949d3e9907ba85a23c069cf4e8b8a9b61463f0ed224cceb77969aa4f35d4b2caa8dd28b0fc6bdfd3e3f3941c27b2a3cb415b0b727df1fc410d0bedc3f461bfc93a9a4f469e7a79f9bfc00ae0b1c9096ea37cb99de5457105fed68fbaa9c1cbff071c134cc0cf2f5145cd7f19040000",
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
      "Tue, 26 Oct 2021 14:50:01 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-113-1635259702250",
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
      "2b",
      "c8",
      "fbda0412202f295aa394369112d20169d54d13b28da16e01536c325555fefb2ea6e95a555a3f61fb9e73cfb90f5ed0232f13344384674f0dab9fbf3d0882ce10533883577ebd0afca7ebd5e1fe8efc349d62e397c5d5623e07046f59121755ce7a5234356572b60ffb592d9a0ad742f420516f30b07b8391ed0edde9d81a0e5d0b8892e5e986978f40bf57aa9233d33c89f73321b29ce18acb3e15c5dbbb79189a552d1e1855d2fca869828c34bf50fd9e0b8a1517e57c1f828346b23a6605e63978f8474dc8f9c7dc7d8e8b7e06e003a70c532a9a52b5be20051565cab3a6d659d1ec05699fef0e28f436de3232a8c89ba28c4b5cb03323c10ac7eab962c665b0db1a6bff72176c17d17ae7c7e172e56d17fde56eb3dffaa171bbf202cf5098e44c738db971ae6f3e5c403f6152f152ab47ed73abfcdaa1f5e7c1b4049096ac0bc6636b8407136b4a5232a6e9c476496a31422664ec629b5874ea3027210c034f8b6a162e45695b638cad911d13668f62c7b1d218a7891d53e2da698addc9900cd0f10cfda9b962175c5642f2ae43e83658475e1c057b7fb9883c5d428a9b5c5d74c6da02de7b54502080fe53d3b18d72014a6dbbd77ee4058b65b4bef1ba096f5886e973f804334e712e19a0710dcd53acde8a041a86fcc5d6bb00b09ed8f52928d1ecd70b6a7bdeba78d7f2377a04036ced2afd456114acfd2b6de784b8c179a32187ee802ab07c0fb581ebe36f40c2967659d08fbd17dca1ee296029ab5949bf9e268075e0ebbfedb4f90086dd071da9e00ecb4365ab426bd62d11d7f5beb227d6c099ba48836bf529e64e9d53dbda1c6d4656b052bd96d46d",
      "3e54da8935f20d044198bfafdb75fc0bf43c189a7b040000",
    ],
    [
      "ETag",
      "iPHRNqPHvhYbZ/4mLNnmGA==",
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
      "Tue, 26 Oct 2021 14:50:01 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-113-1635259702250"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d925b6f82401085ffcbf4155351f142e2835a6c4dbc1531316d8c5961402cb0747769638cffbdb3d4daa66dd2bec0ccf0cd72ce81233cc55900366ce3e8b94071b88a50ddebc24559244ad22de799443000158b885c997ef6e00cb1a5f2597b5e5fb507d79d7dd4ed1221fd1da60cec238431268104fbf108194b91d67c9e1469b6293b03d421d7c385e78ea6b7d4a73cd0fd74391ef7fa63074ec66531608a6d4afe1f6beb93017bbe75314481998f5a4b2ef81e7d35d236254bf3042b9217c24709255c3e88042f722638afd0a4629af58ad9ac5b35abd3aad66a5695c884fb4cc53c2378b92081a0b86289cb5fc92634091065498ec3f2fa42e338289de87234f59a8d52e05780b48571829bbf4112bc63f41d3eb07306df3996f22253176a389ef57e3b8e42fd3ceaa6e7393f08a928aa0be28d26cec2eb4de69a5b9fbdf70f0ae55c704a52a20ed1ac36da56ab597dcf75c075d6f41e5b89020df019fd1e77b1023b6489c4d31b5f0db9fa7c020000",
    ],
    [
      "ETag",
      "X1cnZEFe7tpO8P3X8C/9jg==",
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
      "Tue, 26 Oct 2021 14:50:02 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`amount`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "%1.54%" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-114-1635259702250",
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
      "c5",
      "54",
      "6b",
      "4f",
      "db",
      "30",
      "14fd2b962704487dd0ae8f5109b152c216ad245d9a80ba09356ee206431207db41ea50fffbae1d0a74b0f17152a5fafa9e7bcfb90fe701dfb23cc603bc60c95d49c5eac30d5fe01aa68a24703b8a57fd1fbdc37eb10858e2f77fc5fec1440c8f8e00c17494245991d2bae4a588a81c04d34622785910c1791d12d55bad4ebdd5fbd86d770ffb07ed76f70002254d976396df42f8b552851c349b1bf246c27992525230d98878f674dfbc6f370bc16f68a464739bb30934b2f90eeb71ca23a218cf8f822928282515739a11968286e7d078f1793b778391ac9100f89e459444112f73a575418a88e74b9694c264c583076c74be38e0a935b6463e1ab981e3ef8524d3c1e13e22126d8c1a0aa1a8254be99cc5a1f6cce7c52d3af3dc73f080826b22a90cd1e557cbb3101abb9796f72293e3fa686c7fb3d0311a3aa7683b99eda0c071aca98ff68ef7d117cf0d26e864b685812a62ba2465aa4e890226a5d5c7d5d1d6c355542a003d36de7e3d6fbcd65ec60553ba62dbf12d6f38f2ed0bab6af29826245a4defa0cd4b924a0a682248461515e73ca6103271a7b66fbbce700c11a673930d42e2c1cf87e7007f55502d50997f7c3676877eaf63146c2017242d0de6be3ae09d56a3dbd9c1eb75edef89869e379c01391182acfef041419ae24d0e8337562574c3d9c29a6d63b5b7acce96d5c3ebab35fc6a1876b662c6df03cb9be1eacaa34b2a681e19ba7f0cc1808de3fdb7b77907008697003c52812d158ba4668904356e9f65a6962afa1344b77bd880857aedebb6f407238fdff43c7294263f15820b8f4ad8396d029b345a580e4d810f4a0d67544a92e834410ea5484a1629456633d0d31050182296233d2514fab389357f5c077852272446312f759469f400555bb0b1762b73570b3372aaf1fd5f2957559334d7a9",
      "eb58b072bf017de2700398050000",
    ],
    [
      "ETag",
      "Cdy7Z697pbUigT7zdT0PrA==",
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
      "Tue, 26 Oct 2021 14:50:02 GMT",
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
      "5d",
      "6e",
      "82",
      "30",
      "00",
      "00",
      "e0",
      "bbf45908a2a0dd5b01090cc589c61f5e9ad2962a88a005535876f7995d637e77f8be01a1944b89dbbae437f0017a62429dea5133777c21ae5688d28592e79d43c76cb95f34055e0969e0caa224f73c57e5c77c6e0b97736f3a50b66a620487c48f4cdc9d62388bb6342445b2ddd09d71f5cc695639fed3d6aebc72622dbd4fbca2106e278ee396e1a4d79e7e42d334b6e4d36885a9c2a1d4f636db1ce07d3895b7f52c6377ecdafe213b772d924cf1b02208a9cfafbc23c756d46bc992d80c4ec4af116561b40ce81c2e1bb3569b60372e9191e96f6fff171801ae9acb834b7c796d9f58108ec05f7ddcf60d7ffd773879f007f8f9057a08b9ef19040000",
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
      "Tue, 26 Oct 2021 14:50:02 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-115-1635259702250",
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
      "2b",
      "c87b5c132009098914ad514adb4809e980b45aa709d9c650b7802936ada22aff7d17d374ad2aad4fd8bee7dc73ee072fe88197099a21c2b3c786d5fb6ff782a013c414cee0756cdfdecafdad7c7c762f7dbff8beb8287c3f9bcf01c15b96c44595b39e144d4d999cedc27e568ba6c2b5103d48d4b36da7678f87cec0994eacc1c0b18028599eae79f900f43ba52a3933cda3783f1322cb19aeb8ec5351bcbd9b4f03b3aac53da34a9a1f354d9091e617aa3f7241b1e2a29cef4270d04856c7acc03c070fffa80939fd98bbcf71d1cf00fcc429c3948aa654ad2f48414599f2aca97556347b41dae7bb030abdb5b78c0c2af2a628e31217ecc448b0c2b1da57cc380fb61b63e59f6f83cd225a6dfd385c5e7a9b457fb95def367e68dc5c7a8167284c72a6b9c6dc38d5371f2ea09f30a978a9d5a3f6b9557eedd0eaf3605a02484bd605e38935c6b66b4d494a263475870e492d46884b260e1e128b4e476c94108681a745350b97a224763a1eb86337b693e9341e11328a5d8be018e03619d2e130a10e3a9ca0e79a2b76c6652524ef3a846e8255e4c551b0f3978bc8d325a4b8c9d55967ac2de0bd47050502e83f351dda2817a0d4b67be5475eb05846ab6baf9bf09a6598eec34798718a73c9008d6b689e62f54624d030e42f36de1980f5c4ae8e418966bf5f50dbf3d6c5bb96bfd12318606b57e92f0aa360e55f683b47c435ce1b0d79ea0ea802cb77501bb83efc01246c699705fddc79c12fd43d052c65352be9d7d304b00e7cfdb71d371fc0b0fba02315dc6179a86c5568cdba25e2bade57b66b0d1c778234b8569f62136b7a6c5b9ba3cdc80a56aad792bacd874a3bb146be812008f3f775bb0e7f01ce3dea727b",
      "040000",
    ],
    [
      "ETag",
      "61ZZsyZsqw8HNNm+AGmNNg==",
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
      "Tue, 26 Oct 2021 14:50:02 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-115-1635259702250"
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
      "c2401085df65bc2d097f2dd2840b40d4268008e5ca10b2b45328b69dbabb1591f0eece5644a3267ad3ce4cbfd99e73da033cc659082eace2f55381727fb1467d6f8a29aa22d18a6f39650ac102d462cde48bdf5263aa7b7d7cdd470d994eda4ee6ec3a1d2654b0c154807b8028c62454e03e1c201329f25a40499166cbb2b340ef73339cf9536f7cc37d4aa1e9c7f3e1b0db1b0ee0689d1743a1c5b2e4ffb1b6385ab0a5d5142394980568b4e492b61868cfd85422cd13ac282a64800a4ab87cb09654e44212557852a9d5ec4acd69d875bbddaad6eb7695c98402a163ca189ecf582068d22299d28e6d82c3802c4b761c95d7671ec761e9c494ded8779aa5c0af006b8be204977f832c7823f83b7c60a70cbe7322a522d367ea7a78d7fded380ef5f3a8abae3ff84128cd519d11df1b0d667e773431dce2e4bdb7d7a8269238498526c45ab57969b79cea7bae7d3259f37b5c2d0bb42010fc7bdcc61adc48240a8f6f688b1a6f7c020000",
    ],
    [
      "ETag",
      "xT7sNo2ICezyf3rmP96n6w==",
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
      "Tue, 26 Oct 2021 14:50:03 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `id` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-116-1635259702250",
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
      "00000002ff85546b6f9b3014fd2bc8fbd24a79f3c8438aba2c611b524252425a55d3941863a85382293699a22aff7dd7d0b48ddaad12125cdf73ee39d7bee6093db034440314b0f8b1a0f9e1cb9607a886a8c431ac8ebde96c1f2e66dbfb703411365ef88b707b3d1c02822996c0bb2ca175c18b9c5031582d1b71ce8b0ce79cd7a150bdddb6ea6d4b373b66bfdbea74cc1610054da2294b1f807e2f652606cde649bc11731e2714674c3408dfbdac37f79d6696f32d255234cf359b20239a9fa85e259c60c9783a5c2dc1412168bea63bcc12f0f04a0d83afe7b51b0cef1a3180f78c504c082f52a97c4109c2d388c5455e5645832754fa7cf38196f6d41efbda78be72fd8b0dde29f2e652c3423b05356d034d452ca16b166e5466bdce1eb4efde7c061970708f05151bedf6a7edd99ab651a0a176a58ddc89764e755c6de5baf6d2d72eae2eb51fde7cb5d0bedd9d61c07348856469e9d8c7414295dbe75d75de1fa62260090eaae4badbb270bbd7ea0751d025514f3783a84583a017744dac072dd237a8110614034faaea250ba73cb5489fe88418961e9aed7ea4d35edf8aba1477e1704c1c99864e3bb0d045c71afa933349274c645cb06a67d1ade7f8f6daf756ee78e4db651b112e1239a9cca926defa94d02480fed3d75165190725754c8eebdbde68ec3b37763519531a6372583ec26c44381114d038c73b2a693ee3216c1a5acc978eefccddd11418e5712f4e088106bf9e5e09fe212b7759966fa56519a5fe09708393a244ecab0fd436d1f158fb778991e78dee4016e7393e7c5cfec3fa25be8c2a8b2f7a48a99da2ce59649c45163afe3ec2534370c52a6574bdb2bd3b542d7934a2394dc9e76305e032f1f9afe2746d010c171774848418a69808a542725a4d33db95bd54ec5e4bd78df24723712edfe50c533f1d9baaa12ad21d4de5734bd5b52d7751a50af10282240ca1ebb83f20fb17c872973a38050000",
    ],
    [
      "ETag",
      "CRLMvdPMjhdADsEaPTPdjQ==",
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
      "Tue, 26 Oct 2021 14:50:03 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-116-1635259702250"
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
      "90",
      "41",
      "4f",
      "83",
      "40",
      "10",
      "85",
      "ffcb781422b45223490f5689366988457b324db3a503d20283bb431bd2f0df9da58d672fbbb36fbf977d6fcf7028ea1d84b02df29f16757793232fed90a0694b36b235541b040790552ea477bc5bc5e4e9178ef34e2da3dbf978797f9a4e8530e937560ac2336405963b03e1d7196a55a1d854456dcd0271d7d8f33cfe8c5ea344848a765688578bc5d36c1141effc99369be6f02fcbba77604fdb0433d458a76833349af698f2dcd633aa6a4a740db53a4503033c5ce49ada4669225714d7f727ae3f1907a3e0f1c11b8d024fc89252c505d502af3e241c30b12a133a493df005d0c3284db3613d0eb22d719dd6fdfa6a9a758ce65d934430685ff72e499ec9a66349cdba450752251ff956f0e5dcff023c324edba5010000",
    ],
    [
      "ETag",
      "0v/UNo0rDtNgyaQE+I3Q4w==",
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
      "Tue, 26 Oct 2021 14:50:03 GMT",
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
      "30",
      "0000d0bb646d1c94c192ee04ca1f8c6329e0261363443e0af24941a777afd36bd47787f7009431de75a4af4b7e05ef60a24b346773af5135332b0e8b726bd567bf8e2edb139e849d5e0513da7248db2488334b88ed39f39cb729107bf333551191f19dc971b09329938a0db252393a8caafe410c3fc2894818aefca636aeb764d48795196d4e14afb0118eb27b216dba84344e8e463754ce7d909470e7adfdd876a71e6233576ba3bef7a852a0ebd0410a1c1d42fb74b1dc8591df2a984a150af7a5bf8bcde0480b6df49d46b195a2d4bf480195451baebfe72f2fff1798013e3679cb3b923fb7cb0a4233f0579ff453c39fff354e5bde829f5f38a8204519040000",
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
      "Tue, 26 Oct 2021 14:50:03 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-117-1635259702250",
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
      "536b6f9b3014fd2bc8fbb82640420a8914ad514ad76809d90869374d1332e642dd124cb1e94355fefb2ea6e9da4d5a3f61fb9e73cfb90f9ec80d2f53322109cf6f1ba81f3f5c8b841c115034c7d779ee8987267b58e7e62db59dcbf2e397efe16c3a45046f5992eeaa027a5234350339d96efa792d9a8ad642f43051cfb6dd9e7d3c1c0d4663d71a0c4616122514d992973748bf52aa9213d33c88f77321f20268c5659f89ddcbbb793730ab5a5c0353d27cab69a28c34df51fd5408461517e574bb41078d843a861de5057af8434d9393b7b9fb9ceefa3982ef3803ca98684ad5fac2144c9419cf9b5a67259327a27dbe3a908dbff4e791c144d1eccab8a43b383252aa68ac1e2b30cec2f5ca580467eb70358b16eb20decccffdd5ac3f5f2fb7ab60635c9efba16f289a14a0b9c6d438d1b7002fa89f8254bcd4ea51fbdc2a3f7768f1ef605a024a4be882b16b1d53dbb3c64996b82cf386a324b32049bcc41dd16162b1b1034e9a00459e16d52c5a8a3275132b1d522f0670b2d8f11c3b4e604863779c7989978d4760bb647f44ee6baee094cb4a48de75885c868bc88fa3701bcc6791af4bc86853a8d3ce585bc06b8f0a0b44d07f6adab7512e50a96df72288fc70368f16177e37e125e4943d6e6e71c6192d24209ad6d83c05f54aa4d83012cc56fe2982f5c4be1e82924c7e3e91b6e7ad8b572d7fa14738c0d6aed25fb289c245f059db39202e68d168c85d7720155abec2dad0f5fe1722714bbb2ce4dbd60f7f90ee29840c6a28d9fbd344b00ebcffb71d361fc1b8fba82315de7179986c55580ddd12715def33dbb386e3a14334b8567fc71cdbb60e6d6b73b4196107a57a2ea9db7cacb4136be40b088338ff40b76bff1b26fdc3807b040000",
    ],
    [
      "ETag",
      "Cg8oxufxOg/qa14Wn+KXRA==",
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
      "Tue, 26 Oct 2021 14:50:04 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-117-1635259702250"
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
      "5b",
      "4f",
      "c2",
      "40",
      "1085ffcbf8684928daa24d78e0521405e4528cd110b2b4d35268bb7577ab2184ffee6c45346aa22fedccf49bed39a7ddc126ce0270601947cf058aed49846aac8b09ca2251926e39cf248201a85844e4fd4dfcd03eddd8aa3b1a79ebdbc8ed3c9adeb8d12042fa2b4c19383b08634c0209ced30e329622adf93c29d26c517606a86dae87536fd21b5e519ff240f7c359bfdf6cf55dd81bc7c58029b628f97faccdf706acf97282210acc7cd45a72c1d7e8ab9eb629599a275891bc103e4a28e1f24124789133c179852615d3ac574cfbccaa5997f56aad6655894cb8cf54cc3382675312088a2b964cf82bd9049b005196e4382caf2f348e83d2892e7b43cf3e2f057e05485b1827b8f81b24c12b46dfe1033b64f09d63292f3275a4bafdbbe66fc751a89f47759a9efb83908aa23a225e6fe04ebde660a4b9f9c17b6bab508e04a72425ea10cdeaf98555b7abefb9b6b9ce9adee32851a0013ea3dfe33a56e0842c91b87f030481c5817c020000",
    ],
    [
      "ETag",
      "VJiXC+k6tFPPTjKgEDZ1TQ==",
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
      "Tue, 26 Oct 2021 14:50:04 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-118-1635259702250",
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
      "54",
      "fd",
      "6f",
      "9b3010fd5790f74b2be583a4f92091a22e4b598794920e48ab6a9a12634cea0630c1a65954e57fdfd9346db36eab8404e77befde3bfbcc135ab32c424314b2d5a6a4c5eed3030f510d5189576ad577b651b8219be9fa26f5adedaf2b4ecaed680408a65802a77942eb829705a16238f71bab8297392e38af43a17aab65d55bbdb36ebb3be89bed76d704a2a0493c65d91ae8f752e662d86c1ec41b2bce5709c539130dc2d397f5e663bb9917fc8112299ac79a4d9011cd0f54cf134eb0643c1bcd7d70500a5a2c688a59021e5ea951f8f9b87683e1b4b102f023231413c2cb4c2a5f5082f02c66abb2d055d1f009699f6f3e906f4fed49604c6673373859e2549197a70616c621a8194b682a66095db068a9328b45be36be7ab32bc880837b2ca8581ab7df6ccf365e9796c6c83837c6ee85715cc0718db9ebda7e609c9c9f1a97de6c7e6d7cb93bc280f3880ac932ed3bc0614295e7e7bd75de1fa9226009a25572d1377bb8659983300efb24b6ceba616cd230b4c27e179f8526197468270a29069e54d5350b673cc3ed41af474c6b1075c216093b61d48e4864c19a15592dab6576696710c718ed6b685b30492f98c8b960d5fea25bcf09ec45e0cdddc938b0751b312e13795199534dbcf529a14900fda7afbdca320e4aeab01c37b0bdf124706eec6a3ea67485c9cedfc084c4381114d0b8c02995b4b8e2116c1aba9ef94ee0ccdcf11418fad0af0f0881863f9e5e09c12ed7bb2cf51bf981e7b897dac00171839352431eab0f34cec12bdaef6bff2e33f6bcf11d48e3a2c0bb3f72d04eafa3e87f91d0781d55360f922da4d40e51fb28ea1c453db4ffb987a786e0b255cae8fbdcf6ee50b5e4d1981634231f8f168075e2e39fc6e1020318ae30e80809314c32114a8514b49a6896ea5e2ab66576fabd36d2e042becb59fdeee1e8540d5591a63493cf2d551758efa24a95e2050449",
      "1844579fe2fe37bf070e3b42050000",
    ],
    [
      "ETag",
      "bSIwdbqcqLkVmS8wxMocuw==",
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
      "Tue, 26 Oct 2021 14:50:04 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-118-1635259702250"
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
      "51",
      "db",
      "4e",
      "c2",
      "40",
      "10",
      "fd",
      "97",
      "f1b58db48817121e04091049a3454cd410b294a114da4edd9d4a1ad27f77b61862e28b2fbb33e7923d277b847d92afa10bab24fe2c51571731f2b31d423465ca46ae827283e000b28a4559bd7a6fdbc709bd07ab203583313e5c0e46875e4f1426da62a6a07b844d82e9da40f7e308b9ca506c2aa33267117155d87d12bc0c47c350808cd61608e6d3e97d7f3a84da399b96cb62ff2fcba2766047ab1037a8318fd0662834ed30e289ad675456a4e81a2a7584061a7143c49aca4269225710d7f36e5defbaddf13b77372ddfefb4449952a438a15cc4f39984032656694807a9076d11e86694a69be6fc6a605bc24e7e93ed37e79f39ef0fe79db92bcb2d7e1eeb578ce6499344376853b74e0d06645bb1b4655da20391920f18277cdaeb6fec9a92c9dd010000",
    ],
    [
      "ETag",
      "yV1YhKIoZNbNlsCHeD/CGw==",
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
      "Tue, 26 Oct 2021 14:50:05 GMT",
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
      "1f8b08000000000002ffedd34d7282301800d0bb646d1d30a2d29d0c04d10a5ae4c7151343c00f50281109767af73abd467d7778df8832c685486e75c9afe81d0d74a28fd978d32c0c92034cbcfb2ec01974e572566c75aa76dca9abfded841f455df11af63308b5a3122a2df891930beb2aba6a887d912a1308a3cc68fac4a1e7a4f59b78b3a679dfad2a723c9c24f63f6cc08b73552ded5c5a94c40f3bc81ac35bb82ac31ebb871174bd245df1b596f3a197ae70e9ce53d355a9a5b50d46464c0266e99a9b8bd4a735beb3280e3ed5431094537af12e2475d5d0b1cc6dce5673452b55ff0d17e39797ff0b8d10970db45c24f0dc8e355d1fa1bffac96d68f8f3bfc169cb5bf4f30b167d937519040000",
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
      "Tue, 26 Oct 2021 14:50:05 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-119-1635259702250",
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
      "00000002ff85536b6f9b3014fd2bc8fbda24e4410291a2354a691729211b9056d33421dbb950b78029369daa2aff7d17d374ad2aad9fb07dcfb9e7dc07cfe45e940732274c640f0dd44f5fee2423670434cdf0352d80ba51ed3e04e1d52edeaf76137b34cd160b448896a56851e5d053b2a939a8f93eea67b56c2a5a4bd9c344bde1d0eb0da76367e478337b34726c242ac8d38d28ef917eab75a5e683c149bc9f4999e5402ba1fa5c16afef83c7d1a0aae51d70ad06ef350728a3069fa87ecd25a75ac872b18fd041a3a04ea0a022470fffa80776fe3e775fd0a29f21f85170a09ccba6d4ad2f4cc165998aaca94d56327f26c6e79b0389fc8dbf8a2d2ef3a62893921670661da8a6897eaac0ba0c775b6b1d5ceec2ed325eef82245a7df3b7cbfe6ab7d96f83c8baf9e687bea529cbc170ad85756e6e015e50ff004a8bd2a8c7ed73abfcd2a1f5c7c1b4049456d00593993da543d7f658ca663c75c70e4b6d60cc6533878e99cdbd094c0e0c28f28ca861d15296de341dda53db4e6c9779c904198937656ec2c69ccd0e333a046f488e67e44f2d345c08554925ba0e919b701dfb491cee83d532f64d09296d727dd1196b0b78eb51638108fa4f4dc7362a242ab5ed5e07b11f2e57f1fadaef26bc818cf2a7e801679cd25c01a2698dcdd3506fe5011b4682e5d6bf40b099d8f7535091f9af67d2f6bc75f1a6e5aff41807d8dad5e64ba2385c0757c6ce09714df3c6401ebb03a9d0f22dd686ae8fbf11895bda65213ff67ef893744f21a45043c93f9f26824de0f3bfedb4f908c6dd471da5f18ecbc355abc26be89648987a5fd8aeed8c3d871870ad3fc49cd1e8d4b636479b110a28f54b49dde663a59d58a35e4118c4f907a65dc7bfb6a592227b040000",
    ],
    [
      "ETag",
      "fmea8Sr8qNRGOTUCO4026g==",
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
      "Tue, 26 Oct 2021 14:50:05 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-119-1635259702250"
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
      "41",
      "4f",
      "c2",
      "40",
      "10",
      "85",
      "ffcb782d09458ad28403086a4d41847232842cedb456da4edddd6208e1bf3b5b118d9ae8a59d997eb37defb57bd8a445042eacd3e4a542b93b4b503f986286aacab4e25b498542b000b54898f44797ced029bcebfcaebb096cda8e6fd526e9f59850e113e602dc3dc429669102f7710f85c891d742caaabc58d59d057a579ae13c9879931bee738a4c3f59f87e7fe08fe0609d1623a1c5aae6ffb1b63c58f04ceb19c628b108d16829253d63a83d635389bcccb0a1a892212aa8e1fa4122a92a85246af0a461dbdd86dd39775a4ef7a2d96a394d26330a854ea96078316781a0498b6c46af6c133a0cc8ba64c7717dddf2388d6a27a6f42641a75d0bfc0ab0b638cd70f537c8829f047f870fec98c1774ee45415fa445dfbf7fddf8ee3503f8f1af683d10f42698eea8404de78340ffae3a9e19647ef839d463595c4492a3421dacdf6a573d169bee77a45266b7e8fab65851684827f8fdb54831b8b4ce1e10d80d0e2487c020000",
    ],
    [
      "ETag",
      "LE85D5nIFmJ9kT1ovMHskg==",
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
      "Tue, 26 Oct 2021 14:50:06 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-120-1635259702250",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85547f6f9b3010fd2ac8fba795d2849084fc90a22e4bd91629252921eda2694a0c1cd429608a4db7a8ca77df619ab659b7554282f3bd77ef9d7de691dcb1342003e2b1e8be807cf761cb3d5223206984abdf6c2fff151adbf9cadb1a5da1834cfde46a3844042b598226590c678217b90f62b05cd4a39c1719cd393fc342674d433f6b9aad8ed1e97775c3e8e8481410875396de21fd56ca4c0c1a8d83783de23c8a81664cd47d9e3caf371e8c4696f32df852348e351b28231aefa89ec7dca792f174b85ca0834240be8684b2183dbc5003efe371ed3aa3493d42f003f381fa3e2f5259fac2123e4f431615b9aa4a068f44f97cf54116d6d41abbda78b6b4dd930d4d4af2e654a3423b04356d834d852c86350b366566bdceeeb4cfceec1233e8e0960a101bede6abe558dacbd2461b6ae7dac8bed08e0b4c6c6d69dbd6c2d54ece4fb52fce6c39d73ead8e30e83c002159aa7cbbd48ba1f4fcb4b793b7475a12a844d12ab9eeea266df6f4be177a5d3fecb53a5ea883e7f5bc6e87b63cddefb7a11d78409127cbea8a45539efab4db37c356cfec1926f45beda0d9e9774c006862c556bbdb6906d0f20c83ec6be467ce245c309171c1aafd2537cec4b5d6aeb3b4c723d7526d84b488e54565ae6ce2b54f894d22e83f7dedcb2ce3a8541ed6c4762d67347627d756351f5388a8bf5bdce38484341680689ad30424e4973cc04d23f3d962e24e66f6688a0c75e8f3034290c1f7c71782bbcbd42e4bf5260bd799d85f948103e29ac685823c541f8466e895ecf7b57f971939ce6885d234cfe9ee8f1cb663b64bfa5f24145e4595cd836493946a87c8388ada479149f63ff6f8d4085eb64a995c2d2d6745aa250742c821f5df1f2d04abc4fb3f8dc30546305e61d41112639c645f942a7e0ed544b344f552b17bbad9364da2c0b97c93c3f287a32b6b94152181543eb5545d60b58b65aa10cf204ce220daea14f7bf01a636b1e342050000",
    ],
    [
      "ETag",
      "XNbrxf2jPYbj27s0etncmQ==",
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
      "Tue, 26 Oct 2021 14:50:06 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-120-1635259702250"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d90414fc2401085ffcb78b44d4a158d241c0489a095d02207630c59daa12eb49dba3b0d691afebbb3d578f6b4fbde7c33fb663b38ea2a8311ec74fed5a0692f72e4d85d12b44dc1568e9a2a8be001b2ca857c9aee2e75f176bd785ec7ab8756d3fc25e6d3782c844d3fb15430ea60afb1c82c8cde3ba85489d2a64a6a2a1688dbdae9c5f275f6384bc4282973c6721345f793680667efaf69bbad8fff6af9387b70a05d827b3458a5e832d4860e98f2c2ad67555917e85b6a4c8a167ab82fe4869a5a19225f1c7f1006fee0e66a180eef6e83301c064216942ad65409bc594b38606255247492f5c001bd9eb48c766548a65bcc7e2b32724aee6196406c1af42055f24773cd3ffafc0ddcc28c3680010000",
    ],
    [
      "ETag",
      "JCb+ilY4IKSQPDyioHMQtw==",
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
      "Tue, 26 Oct 2021 14:50:06 GMT",
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
      "30",
      "00",
      "80",
      "e1bb642d4e2b2aa13b233a3caca128886c9818a281608984f2b0d3bbd7e935ea77807ff77f034229532a6d2ac13ec11b18c8c41cd3b127215a5ff2ce85d0d103862b2d9b36c28a30892378c21d1768b33094ee58c45909795756bf5bf90d8ada5793f67e35258e9f9c8282e6b8e7d29fe91f378304fc3a89996a4ab5df9063d872addc79db902b1c37c48bb5388325b70f6dd29efb725f1cd37590dca83177a35d210bed92c27bd5b95f89ee544ba45d6dfa3ec803dc7b2f78d28a47793b2d953097acb8166737a7d235196a550633ded55b918476341f3f3dfd5f6004582ff39aa9347fdcaecf4c7304fed64f9b41b2c7ff88919ad5e0e7177a87ac9719040000",
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
      "Tue, 26 Oct 2021 14:50:06 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-121-1635259702250",
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
      "fd2bc8fbda2484401322456b94d23553423a20ada66942c65ca85b8229367dacca7fdfc5345dab4aeb276cdf73ee39f7c133b9e5654aa624e1f95d03f5d3971b919023028ae6f86a89bcb9bc59fc89cee1f8f191bbd5f7517591cf6688e02d4bd25d55404f8aa66620a7dbb09fd7a2a9682d440f13f586d6b0373c1e3996e38e4dcb724c244a28b2152f6f917ead5425a783c141bc9f0b9117402b2efb4cec5edf07f7d6a0aac50d302507ef35072823079fa87e2d04a38a8b72b60dd14123a18e614779811efe51d3e4e47dee3ea7bb7e8ee07bce8032269a52b5be30051365c6f3a6d659c9f499689f6f0e24f456de223298289a5d1997740747464a158dd55305c659b0591b4bff6c13ace7d172e3c7e1e2dc5bcffb8bcd6abbf643e3eadc0b3c43d1a400cd3566c689bef97841fd14a4e2a5568fdae756f9a543cb8f836909282da10bc663f3980e27a69b64c99865939193642624c924193b749498ccb5c14e13a0c8d3a29a454b5152ca26ae9d8e6373042cb687233ba6600e63c7b259ead20c268e43f647e4a1e60a4eb9ac84e45d87c855b08cbc380ab6fe621e79ba848c36853aed8cb505bcf5a8b04004fda7a67d1be50295da762ffdc80be68b6879e975135e414ed953788733ce682101d1b4c6e629a8d722c586117fbef64e11ac277671084a32fdf54cda9eb72edeb4fc951ee1005bbb4a7f4918054bff9bb673405cd2a2d190fbee402ab47c8db5a1ebfd6f44e2967659c88fad17fc24dd530019d450b2cfa789601df8fc6f3b6c3e8271f751472abce3f230d9aab01aba25e2bade17f6c41c9bee986870ad3ec42cd33eb4adcdd166841d94eaa5a46ef3b1d24eac91af200ce2fc7dddaefd5f165b55ba7b040000",
    ],
    [
      "ETag",
      "2oguVjCzTHe6xxi9pJ3pPg==",
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
      "Tue, 26 Oct 2021 14:50:07 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-121-1635259702250"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d925b4fc2401085ffcbf868495ae4a24d7828884a28c8a53c88216469a750dc76ebee564308ffddd98a68d4445fda99e937db734ebb87a7248bc08555b27e2e50eeced6a8c7a698a02ab85674cb45a6102c40cdd644f2d5f960fe304ee64178af74daf59bfd4e7fdc6a11a1c20da60cdc3dc409f24881fbb8878ca5486ba1e0459a2dcbce02bdcbcd701a4c7ac35bea5311997e38f37dafed77e1609d1623a6d9b2e4ffb1b63858b015ab09c628310bd168c9a5d862a87bc6a66269ceb1a24421435450c2e583b51445cea410159a549caa53711a17f56afdaa6957ab759b482e42a61391113c9b9240d042333e11af64131a04c8b224c771797da17112954e4cd91b068d5a29f02b40dae284e3f26f90046f187d870fec98c1778ea5a2c8f489baf1efbddf8ea3503f8fbaf682ee0f42698aea8404bd41771a788391e11647efed9d463592829254684274ecda65bdd9b0df73ed089335bdc7d5b2400b4246bfc75da2c18d19577878039f2cf7b77c020000",
    ],
    [
      "ETag",
      "lb+MZYQiZTcOstmEL7KCKQ==",
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
      "Tue, 26 Oct 2021 14:50:07 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `date` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-122-1635259702250",
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
      "54",
      "fd",
      "6f",
      "9b",
      "30",
      "10",
      "fd",
      "57",
      "90",
      "f74babe583902f1229eab2946d9152d211d2ae9aa6c49883ba059c62d32aaaf2bfef0c4ddbacdb2a21c1f9debbf7ce3ef3486e7916922109787c5740befd7023025223a0688cab66af303faaf975ef47b1bd97e9792ccc017d188d10c1354bd27493405d8a22672087cb4523ce45b1a1b910752c546f5956bdd56b77adeea06f5a56d744a284249af1ec16e9d74a6de4b0d9dc8b376221e204e886cb0613e9f37af3de6a6e7271034cc9e6a166136564f31dd5934430aab8c846cb053a2824e42b48294fd0c30b350c3e1dd66e709a366204df7306943151644afbc2124c64118f8bbcac4a868fa4f4f9ea832c9c9933f18dc97ce9fa476b9a6af2fad8a0d2d80735638d4d453c81150fd73ab35a6d6e8d2fdefc0c33e8e09a4a906be3f29be33986b10ea982b531324e8cb17b6a1c92a7aeb1745d67e11b4727c7c6576fbe3c373e5f1d60d0750852f1acf4ecd32001edf7695fa76f8f5313a8420f5572d5377bb4659b83200afa2cb2dbdd20322108eca0dfa5edc064830e74c20028f294ae5eb2682632d687c0b6cd8e1db6cd5e2f0c19d89441301874fa031b17bb519b75ad00c8ae461e72aee094cb8d90bcda5b72e94d7d67e57b4b7732f69db28d8816893aadcce9265efb54d82482fed3d74e67b940257d5053d777bcf1c49f5e38d56ccc20a66cbbb8c3e988682201d134a72928c8cf44889b46cee78ba93f9dbbe31932ca033fdf232419fe7c7c21f8db4db9cbaa7c9353ddc0ee55c10b9a1425e0befa209669997513e7b74b76bbdabf2b8d3d6f7c85ea34cfe9f68f1c76d4eb68fa5f744a7c19554ef7ba2da2d59e5d1c449d83a84776bf76f8d408de",
      "b54a997c5f3ade15a9963c8820878cbd3f5d082e13efff33f6f717c1788351472a8c719899d42a2c876aa8795af652b16db36fb75aa404e7ea4d0ea76f7f7aba86ae082964eaa9a5eafe96bba853857c06611267d19dba5f31fb1b1706d37b41050000",
    ],
    [
      "ETag",
      "06u0+tOh6XuyvsmPgo09aw==",
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
      "Tue, 26 Oct 2021 14:50:08 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-122-1635259702250"
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
      "90",
      "51",
      "6b",
      "c2",
      "30",
      "14",
      "85",
      "ffcbdda32d684795093ea8c874886c750e6488c47adb55d3de2eb99d38e97ff7a6ca9ef792dc9c7c879c930b1cb3620f7dd865e97785e6fc9022bfb921425b69b6b2955458040f90552a644fada7fa43e997ee7afc7b6ae1c244ade5703010c2c65f982be85f20c950ef2df43f2f50a81cc5a672aa0a1688cfa53bcf16ef93e74924424e7b272c56f3f970349f40edfd99b6dbf2f82fcba6f6e040bb08133458c4e83294860e18f3ccd5b32a2f35fa962a13a385066e2e524355a90c912f8adf0902bfd37d0c83f0a9d70e82b02da4a658714685c0aba5840326563aa293d4838e00a619a569d2ac3f8dec4adca74dbdb99b466746fb6a48225874afb76f49c6e4d2b1a46653a107b1928f9c667c3bd7579870bf0fa5010000",
    ],
    [
      "ETag",
      "7aYHlValJ6YCzw+eNrR+SA==",
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
      "Tue, 26 Oct 2021 14:50:08 GMT",
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
      "30",
      "00",
      "00",
      "d0bb64ad0ef8a1a63b11a241f05381c22a0331628c222454829ddebd4eaf51df1dde37c828654a91e6265809de41970de1800e56d5d4460557c70b292cc4356cb687d37e4b83b4c233ace065ddaa453bd673fb4b5ca2f9e2d01f31d2f44dcce39a626d256fe9e97a9fefa9e9915a8441ebe5bb6026723d895aff333a1f7599556763ec7c0cd5d53e1b9d15792d5a0ea7abc24438dfc488a60d4f46cbd5c69f1546ee39615817d92d5195c4cea1deadfd50f40de2de62b6185f1b57fb71e71665a20c57a035d602de11e48849b9393a65fab0eac06ce474f0f2f27f811e60bae29229c29fdb4713087be0af3e69ba8a3dffdb2c934c829f5f059cb87719040000",
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
      "Tue, 26 Oct 2021 14:50:08 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-123-1635259702250",
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
      "6f9b3014fd2bc87b6d022124a491a2354ae8ca94900d48ab699a903117ea9660864da7aaca7fdfc5345dab4aeb13b6ef39f79cfbc113b9e75546e624e5c5ef169ac74f7722256704142df0f57a7d6b4adb156c79fff56e153900969a148b052278c792f450973090a26d18c8f93e1a168d686bda0831c04483913d1e8ca6e3893d39772ddb9e58489450e61b5edd23fd56a95ace4df3243e2c84284aa0359743260e2fefe6836dd68db803a6a4f956d34419697ea0fab9148c2a2eaac53e4207ad84268103e5257af847cdd28bb7b9879c1e8605821f3803ca98682bd5f9c2144c54392fda466725f327a27dbe3a90c8db78abd860a26c0f5552d1039c19195534518f351897e16e6bf8c1e52edc2e637f1724d1eacadb2e87abdd66bf0d22e3e6ca0b3d43d1b404cd3516c685be057841fd0ca4e295568fbbe74ef9b943fefbc174049496d00713d79ad2d1cc3a4ff3d465f96c3c49730bd27496ba133a4e2d76ee8093a54091a745358b56a21a8f98eb58f93899429a254eeed849cad828c947763ea59903e33c27c733f2a7e10ad65cd642f2be43e426f4632f89c37db05ac69e2e21a76da9d6bdb1ae80d71e151688a0ffd474eca25ca052d76e3f88bd70b98afd6baf9ff0060aca1ea3df38e39c9612104d1b6c9e82662b326c1809965b6f8d603db16fa7a024f39f4fa4eb79e7e255cb5fe8310eb0b3abf4974471e8075fb49d13e29a96ad863cf40752a3e55bac0d5d1f7f2112b7b4cf42beefbdf007e99f42c8a1818a7d3c4d04ebc0c77fdb69f3118cbb8f3a52e11d9787c94e8535d02f11d7f53eb367d66c6ae97f55d146bd8bb996736a5b97a3cb0807a8d47349fde663a5bd582b5f4018c4f907ba5dc7bf6ee6f9147b040000",
    ],
    [
      "ETag",
      "VDh/s27ocAkJjCS4ee0t5g==",
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
      "Tue, 26 Oct 2021 14:50:08 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-123-1635259702250"
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
      "5b",
      "4f",
      "c2",
      "401085ffcbf85a2217016dc243b988248008c598184296765a16b7ddbabb8510c27f77b6221a35d1977666facdf69cd31ee085a721b8b0e2f16b8e6a7f11a379b0c514752e8ca65b26538de0001a161339e3bb7ecc2f9f4433ed72efb11d6d6bd8f15a2d2274b0c684817b8088a30835b8cf07485982b416489127e9b2e81c30fbcc0e67fe7430ee539fc8d0f6e3f970e8b5873d383ae7c59019b62cf87fac2d8e0e6ce46a8a112a4c03b45a322537189881b5a95992092c6999ab00351470f1205632cf9892b2449352a55a2b551ab57ab57ed32c57abf532914206cc7099123c9f914030d23031953bb2090d02545192e3a8b86e69ccc3c2892d0763bf715508fc0a90b6880b5cfe0d92e035a3eff0819d32f8ceb144e6a93953b7c37befb7e328d4cfa3ba9edffb416843519d117f30eacd7c6f34b1dce2e4bdbd37a8274a52921a6d8895f2d575bdd928bfe7da91366b7a8f6b548e0e048c7e8f3b6ec08d98d0787c0350b5513e7c020000",
    ],
    [
      "ETag",
      "SiwGgi/Xl7nDiAVBfv3eCA==",
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
      "Tue, 26 Oct 2021 14:50:09 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `stamp` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-124-1635259702250",
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
      "54",
      "6b",
      "6f",
      "9b",
      "30",
      "14",
      "fd2bc8fbd24a7900212444aaba2c651d53423242da65d3941863a857c0149b4e5195ffbe0b346db36eab8404f63de7de735f3ca05b968568840216df95b4d8bdfbc903d44254e2186e4514af8d9de5cd8be56431995e7de6b3d5d7f8ec0c10ac62099ce6096d0b5e16848ad16ad9890b5ee6b8e0bc0d8eda9a6eb435b3d7d7fbd640d5f5be0a44419368cab25ba0df48998b51b77b08de89398f138a73263a84a74ff7dd7bbd9b17fc272552748f6376218ce8be11f53ce1044bc6b3b3d512149482161b9a62968086676a18bc3ff6dd6138edc400be678462427899c94a17b8203c8b585c16b557347a40b5ce171f68694fed89af4ce62bd73fd9e2b4226f4f152c94c3a1a56c21a9882574c3c26d65d96cf25be5a3379f810514dc6041c556b9fe647bb6a26c8504755be54c3957c6ee8572cc765c65e5baf6d2574ece4f954b6fbe5a281fd64718901d522159568bf67190d04af063619dd7fdac08588288c6b819a826d686aa1544c18044c35e3f88541a04c360d0c7bd402596418d30a01878b2f25eb370c6b3416886619f689a65f642a201c8324c3234f5c022034a07bda1155a66a4a27d0bfd2a98a4174ce45cb0a6b8e8da737c7be37b2b7732f6ed3a8d089789bc68c45549bcd429214900fd27af7d65651c22559d725cdff6c613dfb9b29be198d21893ddf20ec623c289a080c6054ea9a4c58c875034b4982f1ddf99bbe32930ea8e2f0e088146df1f9e09fe2eafab2ceb37f29d19f4683c5bd41a0ea02b9c9435eabef940baaaab6d556f6b7d5fd3475a6fa4191d5555bfa1fdbef56fe763cf1baf41102e0abcfbc306499a4645ff4bd41a5f9f1af107151aaaa23d693a3a19472713ed7fece16921d8bf2632fab2b2bd356aae3c1ad18266e4ed8103",
      "706d78fb3f72d86900c356431cd80fc960be89a8a290823673ced23a97860dd3db334d54830bf9ca660c8d43432b1f95479ad24c3ea6d4ec745dc5ca548a271018613c5dc7bd04eb6f26131d4855050000",
    ],
    [
      "ETag",
      "sfgY4y9ROrSCPCLVJoMUXg==",
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
      "Tue, 26 Oct 2021 14:50:09 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-124-1635259702250"
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
      "90",
      "51",
      "4f",
      "c2",
      "301485ffcbf5754b608a46121e448912170253226a08e9cadd1c6cbbb3bd5381ecbf7b3b88cfbeb4b7a7df49cfe901b659b9863ec459fa59a3d99da5c833374468eb9cad6c159516c10364950a99e8b878594cefe29fc92234c3d7b7741f3dce060321acfec04241ff004986f9da42fffd00a52a506caaa0ba64817857b9f378f23cba1f452214b476c2641e8637c370048df7675aadaaedbf2ccbc6830dc5112668b0d4e832548636a879ecea59555439fa966aa3d1420bb717a9a1ba5286c817c5ef06177ef7f2bc17f4aeaf3a41d0eb089993569c5129f0fc49c20113ab3ca26fa9075d014c3b4ad3a45dbf5ad995384dcb6679320d778c766a48225874af778e496ec9a56349cda6460fb4928f7cc8f8786e7e0170e285ffa5010000",
    ],
    [
      "ETag",
      "fcbmWXPDbxNXLrBYZgzRKQ==",
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
      "Tue, 26 Oct 2021 14:50:09 GMT",
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
      "00000002ffedd34b7282300000d0bb642d0c4429a44ba8da2a93d8daf8db301182411448402038bd7b9d5ea3be3bbc3b6071cceb3a6aca9c17e015680691199bcbcaf367a7f36ebdd198e42c9746586fedb9f84e3d8c1da106e27cdc06b826fbab3c647378d97db97025726b22098d8adab05fa054a1b3b287b3eba411a9dae46a310add4dd1c912193ccb7aa334904eb408de21a6b2b960224a9460cba74a14c7fa6d455170b2bae2848d6668a1379e362c2049d89507ba8da73665830e4588c6f2964f16173a11689e1e6748f59ed6bee32ff4be45305e069f22b9babb786f55e6d3d3ff054680f755a6781d658fed6307a111f8ab1f35bae28fff3e678a2bf0f30bf36e256f19040000",
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
      "Tue, 26 Oct 2021 14:50:09 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-125-1635259702250",
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
      "0000000002ff85536b6f9b3014fd2bc8fbda2440de91a2354ae98a94900d48ab759a90712ed42dc12936a9b22aff7dd7a6e95a555abf00f63de79e731f3c93075e6ec884a43c7faca13a7cb917293923a0688eb7c170de5ddd64ae77b8a297fb5bff4f750bd1d3748a08ae59926e7705b4a4a82b0672b28eda7925ea1dad846861a296e3f65bcea0db77fbe3a1edba7d1b89128a6cc1cb07a4df29b593934ee724dece85c80ba03b2edb4c6c5fef3b7bb7b3abc43d30253bef353b28233b9fa87e2d04a38a8b72ba8ed0412da14a604b79811efe5137e9f9fbdc6d4eb7ed1cc17bce803226ea52695f98828932e3795d99ac64f24c8ccf371f24f216de3cb69828ea6d9994740b67d6862a9aa8c30eaccb70b5b4fce072152e67b1bf0a92687ee52d67edf96ab15e06917573e5859ea5685a80e15a53ebdc9c023ca0fe06a4e2a5518ff5b5567ee990ff71309a80d2129a6032b407d419d9e3344b872c1b75fb6966439a8ed2619f76539b8d7bd0dba4409167440d8b96a21c8cdc51cfe96e921e501b1f633b190ff4c306773c1ab09e63f7c9f18c3c555cc105973b2179d3217213fab197c4e13a98cf62cf9490d1ba50178d315dc05b8f0a0b44d07f6a3aea2817a8a4dbed07b117cee6b17fed35135e404ed9217ac41967b49080685a61f314544bb101bddcb3a577816033b1efa7a024935fcf44f75cbb78d3f2577a8c03d476957993280efde09bb173425cd3a236907df3417668f90e6b43d7c7df88c42d6db2901f6b2ffc499aab1032a8a0649f4f13c126f0f9df76da7c04e3eea38e5478c6e56152abb00a9a25e2a6de17f6c8b16ddb21065ca90f31c7714e6dd3397446d842a95e4a6a361f2b6dc46af90ac220ce3f30ed3afe0544d2f97a7b040000",
    ],
    [
      "ETag",
      "N7C3OWf2EyHaFvZIzrZeSw==",
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
      "Tue, 26 Oct 2021 14:50:10 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-125-1635259702250"
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
      "925b4fc2401085ffcbf85a126e2ddac4074054948b96f2640c59b65328b69dbabbd510c27f77b6221a35d1977666facdf69cd3eee029c923f06199ac9e4b54db93159a7b5b04a8cbd468be15946b0407d08815934f2da903ea85d3e859d26dde5f37bc9be0f5fc9c092dd79809f077102798461afc871de422435e93949659bea83a07ccb6b0c359180c2757dc6714d97e321f8dbabdd100f6ce713112462c2afe1f6b8f7b0736b40c304685b944aba550b4416986d6a6165991624d53a9246aa8e0eac14a5159084554e349add1746b0dafe536ddb34ebdd974eb4ca62485492867783e638160c88834a057b6091e03aa2ad9715c5d5f789c4495135b0e27a1d7ae047e05585b9ca4b8f81b64c16bc1dfe1033b64f09d131995b9395297a369f7b7e338d4cfa32ebae1e007a10d477544c2e178300bbbe33bcb3d1ebcf7b606f59d224e52a30db1516f9fba1daffe9e6b9f6cd6fc1edfa8121d90827f8febc4801f8b54e3fe0d605fc9f17c020000",
    ],
    [
      "ETag",
      "k3csRoBTOdqcoKnCh16JRw==",
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
      "Tue, 26 Oct 2021 14:50:10 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `amount` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-126-1635259702250",
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
      "54",
      "6b",
      "6f",
      "a2",
      "40",
      "14",
      "fd",
      "2b64f64b9bf840047c24a66b2ddd25b5d822b6319b8d0ec340c7f22a3374631afffb5e866a6bf7d1c4442ef79c7bcebd738717f4c8d2000d91cfa2a79216db2f9bcc470d44058ee06dc759b2a56e9328389f5ddd4e7a5781bed944a3112058c5e238c963dae4595910ca878b792b2ab232c7459635a150b3a399cd8ed9353463d05335cd5081c8691c4e59fa08f40721723e6cb7f7e2ad28cba298e29cf116c992c3fbf6b3d6ce8b6c4389e0ed63cd36c8f0f627aa677146b060593a5accc141c969b1a20966317878a306fed7e3da2d86935604e067462826242b5351f98212244b43169585ac8a862f48fa7cf780e6d6d49a78ca64b670bc93354e2af2fa54c15cd9070d650d4d852ca62b16acabcc6a953f2a97eeec1a32e0e00173cad7cafd77cbb594034d192967cad8b9508ee9b6a32c1cc79a7bcac9d9a9f2cd9d2d6e94f3e511067c07940b964ad71ef6635a397e9dacfde78156042cc0459d5cf5541377faeac00ffd1e09fb5dc30f55eafb7dbf67e0aeaf92814ef5c0a71878a2aa2e593885590586af77351284380c3b86a113e2eb7d3d08d41e55cda06b6afd411feb03b46ba05f0513f482f13ce3ac9e2eba776dcf5a79eec2998c3d4bb611e2321617b5b9aa89f73e053409a0fff4b5abb22c03a5eaa86cc7b3dcf1c4b3efac7a3ba634c2643b7f82fd0871cc29a07181132a68719d05303474339bdb9e3d73c65360c823bfd923381afe78792378db5c4e59c87f74399d8d3d53970ef6903b1c9712f35c3fa04ecb00c4aef1ef3263d71d2f411a1705de7ec8413ba6a4ff4541e26554db3c28a24a6d1f6947917e149968f77307bf0682ab562ba3db85e52e51fdcaa5212d684a3e5f2d00cbc4e79f8cfdf505305c60",
      "d0e10262d864c22b1552d07aa359227ba9d9fd8e3a808d92e0427ccc41b2b73fbaaa465591263415af2dd5d7574eb14a95fc0082242ca2633bdf20fb1bbac3592540050000",
    ],
    [
      "ETag",
      "1NYiY4IcgdBOKQC7Kd4jjg==",
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
      "Tue, 26 Oct 2021 14:50:11 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-126-1635259702250"
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
      "000002ff8d514d4fc24010fd2fe3b54de82210493888214a4250aa7831842cedb416b63b753f3048f8efce16433c192fbb33ef23fb5ef608bb4ae730844d557e783487ab12dd220c295aaf9ce5ab216d112240274b566e1fd5fe3519a87e298ac1fecba763abcd62346285cddeb196303c4251a1ca2d0cdf8ea0658d6c933579ed58e40e4dd8a7f397c9fd2465a0a63c00f3e56c763b9e4de0145d4ceb75b3fb9765758a604b9b140b34a8330c191a435bccdc34d4b3b26e14c696bcc9d0422b6e89d2906fa4218a198913d18f937eb7277a37838e10bd0e2b1565d255a459bc7ce670e0c84995d227d7832e0b4c3b72d3a23df70c8bb644989236db6f2eb970e20fee3a70ab9fc7c60787f6c91047b7185277ce0dee28b472dcd6198f1164923fe0a172e7fdf40da33af5e8dd010000",
    ],
    [
      "ETag",
      "jOlvV17l6g2f7vzuRBsnrQ==",
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
      "Tue, 26 Oct 2021 14:50:11 GMT",
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
      "000002ffedd34b7282300000d0bb64ad0e128aa13b28848f74101d34b861202410a5824051707af73abd467d77780f9052caba2ee9eb33bb807730a6b2b6a08b75830c5c1471728b0e623cfa79aed79e96d152b1c91e118fb72810113efae6b4af8930230e1b98998a3d6f5c892d6d1439c882e33094ee156e579b6e7baae4ef5d96561369cf9971bf4219565cd70e9fc1573986c12a540a2859dc8f92e92381bbd351bfe9355c862a1ed1daf204e9375e4f08721cf9e439c361c859ac52be97c2b92ff1b3c07e98a254a9906bf526a671bc76949ded62cc6dd3bba8dc5e36066d172f2fff179801766f44cbba443cb7c3374d9b81bffa493f36ecf9df6069cb5af0f30b363c2a9619040000",
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
      "Tue, 26 Oct 2021 14:50:11 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-127-1635259702250",
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
      "2b",
      "c8",
      "fbda8447124822456b94d235524256425aadd3848cb950b704336c3a4555fefb2ea6e95a555a3f61fb9e73cfb90f9ec9232f53322509cf7f37501fbe3c88849c115034c7d72272e7d5e071b232a1b8be7b3c08d7b95bcc673344f09625e9be2aa02745533390d3ddb69fd7a2a9682d440f13f56cc7ebd9ee60e48c269ee538230b89128a6cc5cb47a4df2b55c9a9699ec4fbb9107901b4e2b2cfc4fef5dd7c72ccaa160fc09434df6b9a2823cd4f54bf168251c54539db6dd14123a18e614f79811efe51d3e4fc7dee3ea7fb7e8ee027ce8032269a52b5be30051365c6f3a6d659c9f499689f6f0e64ebaffc4564305134fb322ee91ece8c942a1aab4305c665b8591bcbe07213aee7d17213c4dbc595bf9ef7179bd56e1d6c8ddb2b3ff40d45930234d79819e7fa16e005f553908a975a3d6a9f5be5970e2d3f0ea625a0b4842e187b964bedb13549b2c463d978304a320b92649c78233a482c3619c2304d80224f8b6a162d45e978c3b1ed0edd38b5932c1e02d8f1d84b693cb05c6be066e9d04b6d723c237f6aaee082cb4a48de7588dc86cbc88fa370172ce691af4bc86853a88bce585bc05b8f0a0b44d07f6a3ab6512e50a96df73288fc70be8896377e37e115e4941db6bf71c6192d24209ad6d83c05f55aa4d83012ccd7fe0582f5c4be9f82924c7f3e93b6e7ad8b372d7fa54738c0d6aed25fb28dc265f04ddb39216e68d168c8537720155abec7dad0f5f11722714bbb2ce47ae7873f48f71442063594ecf3692258073effdb4e9b8f60dc7dd4910aefb83c4cb62aac866e89b8aef7853db66dd7718906d7ea43cc1b5aa7b6b539da8cb08752bd94d46d3e56da",
      "8935f21584419c7fa0db75fc0b4bf0ca0b7b040000",
    ],
    [
      "ETag",
      "lT6Ap3k9L/elQZkyo62ZCA==",
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
      "Tue, 26 Oct 2021 14:50:11 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-127-1635259702250"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d92416f82401085ffcbf48a0958c196c4035a6d4d845ac45363cc0a83a2c0d2dda58d35fef7ce526b9bb6497b8199e19be5bd0707d86565022eacb2f5538d627fb146f5a08b10659d2b49b78a9712c100546c4de4cef2edcda013a5ec751aee0236f25568bdf47a44c878830503f70069867922c17d3c40c90aa4b598e775512e9bce00b5aff4701685e3e096fa8227ba0fe69389d79f0ce1689c1713a6d8b2e1ffb1b6381ab0e5ab10531458c6a8b554826f3156636d53b2a2cab125792d6294d0c0cd83b5e075c504e72d9ab4ac76b765399776dbbeee9aedb66d1299f398a98c9704cf67241014572c0ff90bd9048700d194e4386daecf34ce92c6892ec741e4741a815f01d29666392eff0649f086d177f8c04e197ce758c1eb529da9d1e4defbed380af5f3a81b2f1afe20a4a2a8ce4834f687b3c8f3a79a5b9cbcf7f70ae554704a52a20ed1323b5776d731df731d709d35bdc755a246036246bfc75da6c04d592ef1f8068e7259277c020000",
    ],
    [
      "ETag",
      "k1M5hC4TfazPRkNaFMtR1w==",
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
      "Tue, 26 Oct 2021 14:50:12 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `id` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-128-1635259702250",
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
      "54",
      "fd",
      "4f",
      "db",
      "30",
      "10",
      "fd",
      "5722ef17904a9b8f26fd90102b6dc6229594a5290c6d53eb384e30a471899da282fabfef9c50a0820d295272bef7eebdb3cf7942772c8f511f452cbd2f69b1f972cb23d44054e214561fd76ee7e1671e4e4fa7b786d9b22363f478ff707c0c08a658022f57193d12bc2c0815fdd9b49916bc5ce182f32328746498dd23c3b16cd3ee7574d3b475200a9a256396df01fd46ca95e8b75a3bf166ca799a51bc62a249f8f265bdb5365bab82df5222456b5fb30532a2f589ea49c609968ce7c7b3293828052de6748959061e5ea971f475bf7693e1653305f09a118a09e1652e952f2841789eb0b42caaaaa8ff842a9f6f3ed0d41dbbc3501b4e667e78b0c04b455e1c6a5868bba0a12da0a9846574cee285cacce7ab3bed5b3039870c38b8c1828a8576f5dd0d5c4d5b28d0ef52d72daa9d68037fa4edf33d5f9bf9be3b0db5839343ed2c98cc2eb4d3eb3d0c188fa9902caf6c8738caa8b2fcbcb5defb1355042cc1469d9c7774071b5dbd17255187245dcb8e129d465137ead8d88a74d26bd3761c510c3ca9aa572c9cf3bc6d3a7164253a312c62d924b1ba444fe29ed9c64eecc4664269c78a1c4ad0b6811e0a26e988891517acde5e741578a13b0f83993f1c846ed54682cb4c8e6a73aa89b73e253409a0fff4b55559c641499d95e7876e301886dea55b8fc798a6986ca6f7302009ce0405342ef0924a5a9cf318360d5d4ca65ee84dfcc11818d5995fec1002f57f3dbd12c2cdaada6559bd9596d3aef477804b9c9515625d7f20c346db6de3df25064130b806595c1478f371f90feb57f82aaa2dbee821a5b68bccbda8bd173968fb670b4f03c13dab95d18f991b5ca37a29a0092d684e3e1f2b005789cfff17bbbb0b60b8bda02324c4",
      "30c544281552d07a9ad9b2eaa566770dd3ea5aa80217f25dceb6f4ddb1a91aaa225dd25c3eb754dfdd6a1755aa142f2048c210fa9e7f06d9bf00d203573d050000",
    ],
    [
      "ETag",
      "zvE7wXnTSBSj12/5b1Dzqw==",
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
      "Tue, 26 Oct 2021 14:50:12 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-128-1635259702250"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d50d16ac24010fc97ed6b423525ad157c88255441a48d0a820439e3268de6b2e9dda645c47fef5e943ef5a12f77b3b333c7cc9de158d67b18c2ae2c3e5b34a7bb02f9dd81046d5bb195aba1da227880ac0a514e4c9c54f1345aaf97c5e07eadf56aa177d168240a9b7da056303c435e62b5b730dc9ca1561ac5a634b5358b884f8d9ba7f365fc1a274268da3b62be9acda2f12c868bf76bda6e9be3bf2ce9c58303ed12ccd1609da1cbd0183a60c65357cf2add54e85b6a4d86163a71b7280cb58d3244be307e3f18f8fdc78730089f9f7a4110f6445951a6b8a45ac4ab85840326565542df520f0211980e4ad3bc3bbf3ada95b8a1d4e1bf767db74b6f0f8e4f8cf6cd90c4b3e892f5ae295fc8256769c4a6450f32259f3c29f93a5f7e00b742207dc1010000",
    ],
    [
      "ETag",
      "HrERlEIAXXTg8/XmmUSmbA==",
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
      "Tue, 26 Oct 2021 14:50:12 GMT",
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
      "41",
      "72",
      "82300000c0bfe4ac0e2891a6b7582a58501163477261628c9408880422d8e9dfebf41b75ffb0df80712e944a9acb5994e015f46c8c467ce4572fb3792aa5a7df42eca6f6f4883a3adcad0365582d8d7c46d19a5acb887c5d22ed88dd4d1ff2b04910099371088d854dd4de24abf866e119ccef8e1c369373d9090f33fbc825a778889236cef2abc5d1e7fc8319b141716a97511a865946ef53cf97da3ec0fe842daf8b838ac0ed6263348a3a35952bbb9205d4529075a7d4356a35e4efae5a5e49cb969673da177bd34f73569eb7e646abc22fdcdbf852dc83d1d3d3ff0506407455560b95648fed1388d000fcd54f9abe128fff33c16a51839f5fb3440a5a19040000",
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
      "Tue, 26 Oct 2021 14:50:13 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-129-1635259702250",
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
      "0000000002ff85536b6f9b3014fd2bc8fbda04421e9048d11aa574454a4807a4d5344dc83817ea96608a4daba8ca7fdfc5345dab4aeb276cdf73ee39f7c10b79e0e58ecc48caf3c706eac3b77b919233028ae6f87ab8dee61e8bfc78f360964eb81ab381b8cbe77344f09625e9be2aa02745533390b36dd4cf6bd154b416a287897a037bda1b4c86637b3c752cdb1e5b489450642b5e3e20fd4ea94ace4cf324decf85c80ba015977d26f66fefe6936d56b5b807a6a4f951d34419697ea1fabd108c2a2ecaf93642078d843a813de5057af847dda5e71f73f739ddf773043f71069431d194aaf585299828339e37b5ce4a662f44fb7c772091b7f296b1c144d1eccba4a47b38337654d1441d2a302ec3cddaf083cb4db85ec4fe2648a2e595b75ef4979bd5761d44c6ed95177a86a269019a6bcc8d737d0bf082fa3b908a975a3d6e9f5be5d70ef99f07d312505a42174c1c6b4207ae354db3d461993b1ca7990569eaa6ce980e538b4d4730daa54091a745358b96a2746dd761ee649a587606c9883a4ee2ba2c4b3267e8646cb873dde9841ccfc873cd155c705909c9bb0e91dbd08fbd240eb7c172117bba848c3685bae88cb505bcf7a8b04004fda7a6631be50295da76fb41ec858b65ecdf78dd8457905376881e71c6192d24209ad6d83c05f55aecb0612458acbd0b04eb895d9f8292cc7ebf90b6e7ad8b772d7fa3c738c0d6aed25f12c5a11ffcd0764e881b5a341af2d41d488596efb036747dfc8348dcd22e0bf9b9f5c25fa47b0a21831a4af6f53411ac035fff6da7cd4730ee3eea4885775c1e265b155643b7445cd7fbca7607c3c1644434b8569f62b66b9ddad6e66833c21e4af55a52b7f9586927d6c837100671fe816ed7f12f96e5dfbf7b040000",
    ],
    [
      "ETag",
      "yPUgEcSITOk/n7RL5c1ohg==",
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
      "Tue, 26 Oct 2021 14:50:13 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-129-1635259702250"
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
      "6e",
      "82",
      "40",
      "10",
      "85df657a8b89e25f25f1025b5b49d02a60d2a4316685015160e9eed2c618dfbdb3d4daa66dd2dec0ccf0cd72ce8123ecd322020b3669f25ca1385c25a816baf050569992742b7921110c40c5122297a197b417fb3272fca0bff0278b47d616f67048840cb79833b08e10a7984512aca723142c475a0b7956e5c5baee0c5087520ffdc07366f7d4e73cd2fd6ce9baf6c81dc3c9b82c464cb175cdff636d753260c7371ec628b008516b2905df61a81c6d53b2bcccb0217925429450c3f58344f0aa6482f3064d1a2d73d068f5da5db33be8374db3db2432e32153292f74043e0904c515cb3cfe4a36a14780a84b721cd7d7171aa751ed4497ce2ce8756a815f01d216a719aeff0649f096d177f8c0ce197ce758ceab425da83bf7c1feed380af5f3a85b3b18ff20a4a2a82e48e04cc77e604fe79a5b9dbd8f0e0ae55c704a52a20eb1d5ec5c77fbbde67bae375c674defb194a8d08090d1ef3149155831cb249ede00abcbca737c020000",
    ],
    [
      "ETag",
      "UcRg3QkpdIST7QSHQXa3rA==",
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
      "Tue, 26 Oct 2021 14:50:13 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `purchase` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-130-1635259702250",
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
      "02ff85547f6fda3010fd2a91f74f2b5108248180547594665d241a5808fda16d023b7152af499cc64e2756f1dd77714a5bd66d9590e07cefdd7be73bf388ee581ea111222cb9af68b9f9f08313d44254e2044e37a773231fdabf26f3f3ebebfbc5a99d7949941c1f0382d52c81b322a54782576548c568b9682725af0a5c727e04858eba867ed4ed1b56cf1a0ef45ecfd28128681a4f597e07f45b290b31ea7476e2ed84f324a5b860a21df2ecf9bcf3d0eb1425ff4143293afb9a1d90119d77544f521e62c9787ebc5c80834ad0724533cc52f0f0428dc8c7fdda6d86b37602e00716521c86bcca65ed0b4a843c8f595295aa2a1a3d22e5f3d50fb470a6ce24d026b3a5171cac715693d7871a16da2e68696b682a66295db1685d6756abe24efbe4cf2e20030e6eb1a062ad5d7d767c477b395a6bdf2a5d37a876a28dbd336dbf8aeb694bcf731681767072a89dfbb3e55c3bbdd9c380fd880ac972653ec024a5b5f1a70b76dfceb5266009ca4d7235d0fbb86beb4312934118db8645629d12629381850da28743939a11a11878b2aeae5838e77968903eb1ad617f68f5ec3022301d2bd66d8392ae3920dd8165d3be39189a68db423f4b26e919130517acb96474e5bb81b30afca53719078e6a23c6552acf1a737513af7d4a681240ffe96b5b671907a57a62ae1738fe7812b8974eb324539ae070b3b8873589712a28a07189332a6979c123b834349f2ddcc09d79e32930d4e4e73b8440a3af8f2f846053a85b96ea1b2d02dff5ce95811de212a795823c343fd0b800af68bb6dfdbbccd8f7c737208dcb126ffec8413b7db3a6ff4542e155d4d8dc497651adb68b7a7b91b917f5d1f6fb163e2d042fae51465f968e7f839a239fc6b4a479f8fe6a015825deffe7d8bd6200c33b061d2121864d0e45ad1296b4d96896a95e1ab6dd3575c3420a5cca3739d8e3dde8ea1a75459ad15c3eb5d4bc62758b75aa12cf2048c2227a6a8adbdf99bf556747050000",
    ],
    [
      "ETag",
      "yBP3n98zCPGXXqSB8mNgdg==",
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
      "Tue, 26 Oct 2021 14:50:14 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-130-1635259702250"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d514d6bc24010fd2fd363131aa3d62a78a8455a21151b2b428bc81ac76d34c9a4bb931611ffbbb3b1484fa597dd99f7c1bec71e6097166be8c12ad59f159afd95467e71438cb6cad8ca555261113c40565a946f9dbb3976c379f63cb9e9063ad0d73c8d74bf2f0a9b7c60aea077804d8ad9da42effd0085ca516c2aa7aa6011f1be74fb68fc3a7c1cc602e4b476c0781645f783680847ef625a2ecbddbf2c8ba3075b5ac5b8418345822e4369688b098f5c3dabf23243df526512b4508b6b421baa4a65887c41fc4633f01bb7cd76d8ee7682306c07a2cc28519c5221e2d954c20113ab2ca66fa9074d11987a94a69bfafc12b855977053a3cef69b0b2f5ceb0f2e74dce2e7b1c19ed14e0c49748b2e75706ef040ae154b5b36157a9028f980a794cffbf10468f4a50fdd010000",
    ],
    [
      "ETag",
      "Z78We92WlMP/90g0g+tSLg==",
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
      "Tue, 26 Oct 2021 14:50:14 GMT",
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
      "02ffedd3d97282301840e177c9b53ab294a5772071039ca8082937198cbf12696d4c70a19dbe7b9dbe46fd9ee0dc9c6f54710e5ab3f6b381137a455d65fa033e88a5178e0f82e8e5ae488ff655d4b366744f2b5a1c45c4e64cbfb9268ecf12a7b5dd9d6e5109b658f0b6bf51b53fa659e069414a93a9c2ed6abca93835ac64dee46b7b8fe7d68d7b172ba6390505d2e9c71b7a168617debafda589bf7692ad4a5cefd757d9264e488c75cbbc45fd4eb2f440865042b0d8159399232b81afd1304f6c826711d11f1387076130ecf2911adfe9d66cb26cdb4449e23e7a97d3334c610583a7a7ff0bf510dca550a09978dc6ebdf87e0ffdadcfda4ec2e3ff102a050afdfc021eabb69219040000",
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
      "Tue, 26 Oct 2021 14:50:14 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-131-1635259702250",
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
      "54",
      "5d6fa24014fd2b64f6b52aa2289a98ad6be99644b1056cb3d96cc8305ee8b4c85066d0348dff7d2f43edb669b27d82997bce3de77ec00b79e4c5964c49c2b3a71aaae76f0f2221670414cdf036c8cdd47dfc717de324d7fb41eed587c9213ccc6688e00d4bd25d9943478aba6220a79bb09b55a22e692544071375fa837ea73f1ad8963d199b96659b489490a74b5e3c22fd5ea9524e7bbd9378371322cb81965c7699d8bdddf7f656afacc40330257b1f357b28237b5fa87ecf05a38a8b62b609d1412da18a6147798e1efe51b7c9f9c7dc5d4e77dd0cc17bce803226ea4235be30051345cab3bad259c9f485689fef5e48e82edd45643091d7bb222ee80ece8c2d553456cf251897c17a6578fee53a58cd236fedc7e1e2ca5dcdbb8bf572b3f243e3eeca0d5c43d12407cd3566c6b93ef97840fd2d48c50bad1e35d78df26b87bccf836908282da10dc6637344fb8e3949d264cc52676027a90949e224639b0e12934d8630dc264091a745358b16a2d8b2a105e9d88a9963a5f1d01ed2d8199b496cd2a16d8d181bc0c421c73372a8b8820b2e4b2179db21721778911b47c1c65fcc23579790d23a5717adb1a680f71e151688a0ffd4746ca25ca052d36ecf8fdc60be88bc5bb79df01232ca9ec3279c714a730988a615364f41b5125b6c18f1e72bf702c17a62d7a7a024d3df2fa4e979e3e25dcbdfe8110eb0b1abf4938451e0f93fb59d13e296e6b586ecdb1752a2e57bac0d5d1fff2012b7b4cd426e366ef08bb45701a45041c1be9e268275e0ebafedb4f908c6dd471da9f08ccbc364a3c22a689788eb7a5fd94e7fe85863a2c195fa149b8cec53db9a1c4d46d841a15e4b6a371f2b6dc56af9066afe281bdfd7ed3afe05023326cc7b040000",
    ],
    [
      "ETag",
      "Rl0fEkBPQ8bPv3lIuw9wSw==",
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
      "Tue, 26 Oct 2021 14:50:15 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-131-1635259702250"
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
      "ff8d925b4fc2401085ffcbf85a9272c7263c14446cc24d282f1a4296765a8adb6ed9ddaa84f0df9dad88464df4a59d997eb33de7b447784ab2101cd824f1be4079b88a51df9b628eaae05ad12d179942b000358b89f486db6123e59dfbc643df1d4f17af2cb2f771b74b840ab69832708e1025c84305cee311329622ad05821769b62e3b0bf42137c3853ff72643ea53119a7eb21c8ddcde680027ebb21832cdd625ff8fb5d5c9829dd8cc3142895980464b2ec50e03ed199b8aa539c78a12850c504109970f62298a9c49212a34a954ebd54ab5556fd69ad76dbb566bda447211309d888ce0e5820482169af1b978219bd022409625398ecaeb338d93b074624a6fe2b71aa5c0af00698b128eebbf4112bc65f41d3eb07306df39968a22d317ea7634757f3b8e42fd3ceac6f5073f08a529aa0be27be3c1c277c733c3adcede7b078d6a260525a9d08458b51b9d66bb65bfe7da17266b7a8fa3658116048c7e8fbb44831331aef0f4063e77786c7c020000",
    ],
    [
      "ETag",
      "IGhG4ml8Q4ZCAMOSxaf0qg==",
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
      "Tue, 26 Oct 2021 14:50:16 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `purchase` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-132-1635259702250",
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
      "02ff8554fd4fdb3010fd5722ef17904a9baf7e4a88756dd82a9514921484b6a9b5132718d238c40e5b87fabfefe210a0631b52a4e47cefdd7b679ff388ee5816a111222cb92f69b1fd70cb096a212a7102ab5bfd67665ddc44856ee15f63bc1c5bd3533f393e0604ab58026ff2941e095e162115a3a5df4e0a5ee6b8e0fc080a1d19967964f4acaed91df675d3ecea4014348de72cbb03fa8d94b918753a8d783be13c4929ce9968877cf3bcde79303b79c16f692845675fb30332a2f38eea49ca432c19cf8e973e3828052d567483590a1e5ea811f9b85fbbcdf0a69d00f881851487212f3359f9821221cf62969485aa8a468f48f97cf5817c67ee4c026db258bac1c11a6f2af2fa50c3426b8296b686a66296d2158bd65566b5caefb4536f71061970708305156bedea8be339dacbd25afb56eaba45b5136dec4eb5fd2a33575bbaaee307dac1c9a1f6d95b2ccfb54fd77b18b01f512159a6cc0798a4b432feb4c1b3b7e75a11b004e53ab9eaeb3d6c0cf42189493f8c075697c43a256440fa5d6c113d1cdad48e08c5c0935575c5c219cf2cdda0c4b24333eee926b6fa83989278601aa1610ea221e90d87b131ec128a762df4a360924e99c8b960f526a32b6f1638abc05bba9371e0a836625ca6725a9bab9a78ed53429300fa4f5fbb2acb38285527367303c71b4f82d9a5530fc99c2638dcfaf73026314e0505342ef0864a5a9cf108360d9d2ffc59305bb8e33930d4c99f370881465f1f5f08c13657bb2cd51bf98137733f2b030de212a7a5823cd41f08e7e015ed76ad7f97197bdef81aa47151e0ed1f3968a76757f4bf4828bc8a6a9b8da4812ab52632f7227b2feaa1ddf71d3c2d0437ae5646174bc7bb46f59247635ad02c7c7fb400ac12efff399a5b0c60b8c7a02324c430c9a1a854c282d613cd36aa979a3d307a76df400a5cc837b99e6d374757d5a82ad20dcde4534bf52d56bb58a54af10c82240ca2ab4e71f71bc922ad4447050000",
    ],
    [
      "ETag",
      "y0xn3Qhdr03azAaUA3DFSg==",
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
      "Tue, 26 Oct 2021 14:50:16 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-132-1635259702250"
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
      "0000000002ff8d90414f83401085ffcb7885d842aab1490fad1225691a457b50639a2d0c480b0cdd9d8da184ffee2c1acf9e76df9b6f66df6c0fc7b2c9600efbb23859d4dd4581fce42e091a5bb191a3a5c6207880ac0a21e3eeedf2f5ae8ee2736e12bbc4b03a95e7e5622184493fb15630ef212fb1ca0cccdf7b68548dd2a66ab20d0bc45deb74bc7989eea3448c9a32676cb6ebf572b58e60f0fe9a76bbf6f8af968fc18303ed13cc516393a2cbd06a3a60cab15bcfa8baadd03764758a0646782c149a6cab34912f8e3f0d037f7a15ce82d9cdf524086613212b4a1597d408bc7d9670c0c4aa4ae84bd603078c7ad5319a474d32dd60f65b9191b7e41e6609c4daa207a9923f7a28f9470fdf2949659580010000",
    ],
    [
      "ETag",
      "IyZ/YDmEIzfsRuAe3lqizA==",
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
      "Tue, 26 Oct 2021 14:50:16 GMT",
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
      "db",
      "72",
      "43",
      "40",
      "00",
      "00",
      "d0",
      "7fd9e7c81097d037d2d22c5baa328617e3b26e5174972c3afdf766fa1bcdf987f30dd23cc79426d370c53d78026b7ad0f6f9de1e55c3ac6afb80dc376867d083d690c4d0a8da0fd2cd506dbaf996e9486171bd78fa7a6a7566c93317d05c2b996ef6487c45ce7b1f46b13f143163e54511bcaa4d8f12743b4e70093f482f91d6165cd03a8bdf667c37ca53391371d9469b625c9094ba8d11dbfe996527d1578895ac9fd3666f1da597a31a6a39927dc86783800251952caccb8a174d75b89ac15238e4c6d545b916668d50d85d51c09ecf9cfab57f78f8bfc00ee0656c08a64973df2eca9ab6037ff593691df1fdbf81538209f8f905c776e25a19040000",
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
      "Tue, 26 Oct 2021 14:50:17 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-133-1635259702250",
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
      "6b6f9b3014fd2bc8fbda0412a07948d11aa5748b96900d48ab699a903117ea1630c5a65557e5bfef629aae55a5f513b6ef39f79cfbe089dcf22a257392f0fcae85e6f1d38d48c8090145737c8d385fee6d60e6b69cdc59e545f6a708be3d2c1688e01d4bd2b22e602045db3090f37d38cc1bd1d6b4116280890623db1e8c4e6d77ecce26d678ec5a489450641b5edd22fd5aa95ace4df3283ecc85c80ba035974326ca9777f37e6cd68db801a6a4f956d34419697ea0fab9108c2a2eaac53e4407ad84268692f2023dfca3a6c9d9dbdc434ecb618ee07bce803226da4a75be30051355c6f3b6d159c9fc89689faf0e24f436de2a329828dab28a2b5ac28991524563f558837111ecb6c6dabfd805db65b4def971b8faea6d97c3d56eb3dffaa171f5d50b3c43d1a400cd3516c699bef97841fd14a4e295568fbae74ef9b943ebf783e908282da10fc613eb948ea6d62cc99209cba6b69b641624c93499b8d44e2c3673c04913a0c8d3a29a452b513106d3996d27b19b4e59ec64b3714c67961b3b369da4aec5d83875c8e1843c345cc13997b590bcef10b90ad6911747c1de5f2d234f9790d1b650e7bdb1ae80d71e151688a0ffd474e8a25ca052d7eeb51f79c17215ad2fbd7ec21bc8297b0cef70c6192d24209a36d83c05cd56a4d830e22fb7de3982f5c4be1f8392cc7f3d91aee79d8b572d7fa14738c0ceaed25f1246c1daffa2ed1c1197b46835e4be3f901a2d5f636de8faf01b91b8a57d16f263ef053f49ff1440060d54ece3692258073efedb8e9b8f60dc7dd4910aefb83c4c762aac817e89b8aef7993d1d4d46d353a2c18d7a17b31de7d8b62e4797114aa8d47349fde663a5bd582b5f4018c4f9fbba5d87bfbe6d8af07b040000",
    ],
    [
      "ETag",
      "TiiAU3ec/Mm7q0mFfzlRKw==",
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
      "Tue, 26 Oct 2021 14:50:17 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-133-1635259702250"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92dd4ec2401085df65bc2d09e5df265c80a036015428578690a59d9662db29bb5b0812deddd98a68d4446fda99e937db734e7b8497380bc081551c6d0b9487ab08f59329a6a88a442bbee59429040b508b8849dfce7463638f07345ceddcd762db99449b7db7cb84f2d7980a708e10c698040a9ce723642245b346499166cbb2b3401f72339c79537772c77d4a81e927f3d1a8d71f0de1645d1603a1c5b2e4ffb1b63859b0a1d514439498f968b4e49236e86bd7d85422cd13ac282aa48f0a4ab87c10492a7221892a3ca9d8f57ac56ed59bb5e675bb5aab35ab4c26e40b1d53c6f07cc602419316c994f66c135a0cc8b264c76179ddf1380e4a27a674275eab510afc0ab0b6304e70f937c882d782bfc30776cee03b27522a327da16e470fbddf8ee3503f8f1af4bce10f42698eea8278ee7838f37ae347c32dcedefb078dea511227a9d08468571b9d66bb557dcff5864cd6fc1e47cb022df005ff1ef7b106271489c2d31bf605ddb27c020000",
    ],
    [
      "ETag",
      "c1nt4j1MDoEbvIzuq8Ngjw==",
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
      "Tue, 26 Oct 2021 14:50:17 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `date` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-134-1635259702250",
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
      "85546b6f9b4a10fd2b68fba555fd00fc005b8a72dd98a656139c60dc28bdf7ca5e96816e032cd95d52a591ff7b07a8d3b8af4848303be7cc39b33bcb03b9e1454ca624e2e96d05f2fec56711910e014d535c3d7f9bfaf9d72ffefcf54779fa5eae2faf4adfb93c3a4204af598ae665065d252ac9404dd7ab5e2a4555522944170b75adc1b06b8d07237b34714cdb1e994854902567bcb841fa27ad4b35edf7f7e2bd548834035a72d563227f5cefdfd9fd528acfc0b4ea1f6af65146f59f513dce04a39a8be268bd42079502b9819cf20c3dfca0c6d13f87b57b9ce6bd14c1779c01654c5485ae7d6109268a84a7956caa92e903697c3ef9202befcc3b098d93e5da0f5f6e695e93b7af0caa8c7dd031b6d854c233d8f0785b67369bf2c6781b2ccf31830e3e51056a6b5cbdf302cf30b631d5b035feab4c7300c6b131f3e7c66185856fac7ddf5b85c6cbe357c669b05c5f186fae0f30683d06a579d1180f6994416dfafbe62e7e3dd39a40351a69931bc71c53cb35275112392c7107a32831218adcc819d14164b2c9108671041479baaedeb068210adb7186e026347119c40367620f46f170ecbad604a2380666b9908c230664d7215f24d730e7aa148ab71b4cae8245e86dc260ed9fcc42af6923a155a6e7adb9ba89a73e353689a0bff4b5abb35ca0527d5a0b3ff482d949b8f8e0b50372062965f7ab5b1c9184660a104d25cd41833c17316e1ab958ae16e162e9cfce90d19cfac51ea1c8f4df871f84f0be6c7659376f32af1bd83d29f881665503b86b3f886dda66d7b4bbd688ec769d3f579a05c1ec1ad5a994f4fea71c76341ed6f4dfe834f8266a9dee752d52ab3dba38888607d198ecfedfe1d32178e15a6572b9f6826bd22e05908084823d3f5d086e12cfff38f69718c1788d5147698c719899aa55988476a879def4d2b25dcb998c9bdf8ea652ff9c732d6bb03fbdba465d117228f4f796da4bdcec629daad4230893388bfec23fc5ec377a67dc5346050000",
    ],
    [
      "ETag",
      "MFgNmzwND+ZrGKrUQWpN7Q==",
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
      "Tue, 26 Oct 2021 14:50:18 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-134-1635259702250"
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
      "50",
      "cb",
      "6e",
      "c23010fc97ed359148685a81c4a154b4458d78a4e5542164c2920692acb137208af877d601f5d4432ff6ecec8c35e3136cf36a055d58e6d9ae4673bccb90a70e2468eb82ad5c9a2a8be001b2ca44a9f69378abc7d3777d18775ef260378e7eccb4d713854dbfb154d03dc13ac76265a1fb75824a95e86c25d5158b888fdacdc3d1e7e075900851d2ca11a3591c3ff5e3019cbd5fd362a1b7ffb2cccf1e6c6899e01a0d5629ba0cdad006531eba7a5695ba40df526d52b4d0889b4566a8d6ca10f9c2f841fbde0f1eda5118751e5b6118b5445950aa38a74ac4b30f09074cac8a840e520f421198064ad37573ee1bda95b8a1b9c37fed02b79bdf1eec1f19edc490c4b3e892b5ae299fc9256769c4a6460f52259ffc96f3753e5f009c138e51c1010000",
    ],
    [
      "ETag",
      "avPLkpOQKpwO9Fi1qO5zrQ==",
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
      "Tue, 26 Oct 2021 14:50:19 GMT",
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
      "000002ffedd34d7282300040e1bb64ed38140684ee128401f107052c74c3c4181154884900c1e9ddebf41af55bbefd7b024c08152297cd85d6e0130c58b5a6641a3013b9c519b62e21a396857a78d397a7632d3aef559c4c2eb26fb3d7d9966b49f3704ae8dad6c1c1c2c03462ebe4363b6f5584a20374eb6a17b9f27459214da445d62bd0af06c6b43b431b2518fd2f23677b85b0823963e51a4d3c777658c242553ab11eecddc711b7611b8e64467856773e44e9d25e5f554f97a84f5b2e64c5a220eebd45ba6a88b7b1bb870257bc46d7bd39bfe734894f75e5973641f86a75d3b7b7ff0b4c007db092539197afdb35ddb226e06ffd5c0e8cbefe471473cac1cf2f97aa57f519040000",
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
      "Tue, 26 Oct 2021 14:50:19 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-135-1635259702250",
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
      "02ff85536b4fa34014fd2b64f6ab6da12d7d25cdda54d4262d5d81ea9acd860cc30547814166a86b4cfffb5e06eb6a4cd64fcccc3de79e731fbc90075ec46446229e3ed6503d7fbb17113921a0688aaf7fbcbabfa54f17fdf8f6a773bf36b77d51f957f3392278c392342f33e84851570ce46ce777d34ad425ad84e860a28e35b03bd66860f7ede9d8ecf76d138912b264cd8b07a4df2955ca59af7714efa642a419d092cb2e13f9db7b6fdfef9595b807a664efa3660f6564ef0bd5ef9960547151cc773e3aa8255421e49467e8e11f358e4e3fe6ee729a775304ef3903ca98a80bd5f8c2144c14094feb4a6725b317a27dbe3b10df593bcbc06022abf3222c680e27464c150dd57309c6b9b7dd182bf77ceb6d16c16aeb86fef2d2d92cbacbed7ab7717de3e6d2f11c43d12803cd35e6c6a9beb97841fd18a4e285560f9ae746f9b543abcf836908282da10d86637344ad89398d9268cc92c9c08e1213a268128d6d3a884c361dc2308e80224f8b6a162d446127341958531646931184432b36430a908498c8066b3886c1c8248713f2547105675c9642f2b643e4c65b054e18783b77b9081c5d4242eb4c9db5c69a02de7b54582082fe53d3a18972814a4dbb576ee0788b65b0ba76da09af21a5ecd97fc41927349380685a61f314541b1163c388bbd8386708d613fb710c4a32fbf5429a9e372edeb5fc8d1ee0001bbb4a7f891f782bf742db3922ae69566bc8be3d90122ddf616de8faf01b91b8a56d1672b573bc5bd23e7990400505fb7a9a08d681afffb6e3e62318771f75a4c23b2e0f938d0aaba05d22aeeb7d654face9c81a100daed4a7d878343eb6adc9d164841c0af55a52bbf958692b56cb37100671feae6ed7e12f21f1575a7b040000",
    ],
    [
      "ETag",
      "xRu2OawG2dYXEjL0O2orSQ==",
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
      "Tue, 26 Oct 2021 14:50:19 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-135-1635259702250"
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
      "000002ff8d92dd6e82401085df657a8bf117b5245ea8c5d604ad556c9a348d5961401458babbd450e3bb77965adbb44dda1b9819be59ce3970805d94fa60c13a0a9f7314c54588ea4e17739479ac24dd329e4a040350b190c89139acbeeebae2bea586bbead076fd07a7d8f77a44486f830903eb004184b12fc17a3c40ca12a4358fc77992aecace0055647ab870e7e3e935f509f7753f5d3a4e7fe0d87034ce8b3e536c55f2ff587b3a1ab0e5eb39062830f5506bc904dfa2a7c6daa66449166345f25c7828a184cb07a1e079c604e7159a54ea4db3526f37cd8679d9a9351a668dc8987b4c453c2578b92081a0b862f19cefc926b4091065498e83f2fa42e3c82f9de8723c75dbad52e05780b405518cabbf4112bc61f41d3eb05306df3996f03c55676ae4dcf67f3b8e42fd3ceaaaefda3f08a928aa33e28e27f6c2ed4f669a7b3a791f140ae54c704a52a20eb15e6b75cd4ebbf69eeb90ebace93d9612391ae031fa3d6e220556c06289c737a6a026a07c020000",
    ],
    [
      "ETag",
      "F5C/zk8rV4tCk/CETdXLyw==",
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
      "Tue, 26 Oct 2021 14:50:21 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `stamp` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-136-1635259702250",
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
      "546b6f9b3014fd2bc8fbd24a4978e545a4aacb52b6a1252423a455f750628ca16e01536cda4555fefb2ed0b4cdbaad1212d8e79c7bcfb5efe501ddb02c442314b0f8b6a4c5f6dd350f500b518963d8bdb022374c27b69e17e7c32fbfe6f7ee54bd8e4f4e80c12a95c0699ed0b6e06541a818ad969db8e0658e0bcedb10a8ad9bfdb6de377b46cf1a6886d1d3402868124d597603f22b29733152d57df24ecc799c509c33d1213c7dda57ef0c352ff8352552a88739554823d437b29e269c60c97876b25a828352d0624d53cc12f0f02c0d83f787b13b0ca79d18c8778c504c082f3359f982108467118bcba28e8a460fa8f6f9e2032deda93df195c97ce5fa471b9c56e2cdb18285b25fb4940d1415b184ae59b8a990f53abf513e7af31920e0e00a0b2a36cac567dbb315652324b8db283f4a4d33a972aa8cdd33e53084e32a2bd7b597be72747aac7cf2e6ab85f2e1f28003de432a24cb6ae73e0e125ab97e3c5de7f5a556022cc14903ae075a1feb43cd0aa26040a2a1d90b228d06c13018f4b01968c4ead26e18500c3a5945af5538e3d980004ead280a86a46b055618457d0d5686d90bad9e61682135070362a15d0bdd174cd23326722e5873c2e8c2737c7bed7b2b7732f6edba8c0897893c6bcc5545bcf429a14820fda7ae5d85320e99aaeb725cdff6c613df39b79b0e99d21893edf2167a24c289a0c0c6054ea9a4c58c87706868315f3abe3377c75350d4d7bed833041a7d7f7816f8dbbc3e6559bf91efcce08ec6b345ed614f3ac74959b3ee9a0f646886d6d68cb6def37563a49b23bddbd134ed1bdaed5aff0e3ef6bcf12518c24581b77f605064bf5bc9ff92b5e6d7abc6fcde858eaa6c4f9e0e56dd83551fed7eeee0692118c22633fabab2bd4bd46c7934a205cdc8db0d07e41a78fb67b21f6c20c368431e1812c9a0bf89a8b29082367dced2ba96463d34f441d74035b990afb0e150df5f6815a38a48539ac9c7929ac1ae4fb1824af1440210dad375dc4f80fe0641fd",
      "6b065a050000",
    ],
    [
      "ETag",
      "W9fNdmCE1prV8KxOwNL/jg==",
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
      "Tue, 26 Oct 2021 14:50:21 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-136-1635259702250"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d50c16e824010fd97e91512c16853130fda186b626ca5f5501a625618100586ee0e6d0ce1df3b8ba6a71e7ad97df3e6bdcd7bdbc239af1298c021cf3e1bd497bb0c796b4180a629d8c8555365101c40569928d3f72c4ca85c8648cfb83dd2bc98edc2ed742a0a131fb154306921cdb1480c4c3e5aa8548962532535158b882fb59d579bb7c572110851526289cd6ebd9ecdd70be89c5fd37e5f9fff65893a074e740830458d558c3643ade98431af6c3da3caba40d750a36334d08bfb45a6a9a99526728571bde1d8f5c6c3913f7ab81ff8fe6820ca8262c5395522debd4a3860625504f42df5c01781eea1344dfbf3aba76d891b8a2cfe6be7d95d747b707e61342f9a249e419b6c704df94836394b23d60d3a102bf9e4a79caf73f703991a70b8c1010000",
    ],
    [
      "ETag",
      "fYgZdomGZeoOeQhoBlAUZQ==",
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
      "Tue, 26 Oct 2021 14:50:22 GMT",
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
      "00000002ffedd3497282401400d0bbf45a2d1410c84ec3a420a828a01b8ae14bb728b44c0256ee1e2bd788ef0eef85c23886aa0aea22831c7da13e9c499378625071a9a68411ec71ef741be3bac152a3325172c787413896f4510f6ef6b056cdd8b5e9d99843cd9041037c6ecf6b624ef920e89aadd738ed6eafd770a84278d26bb664b5982cd66e12285ee19fb03833132bbdc89a4981d9eef5a84b1b6885537e23c334158bc27a62cf738fecaa6dbecbdd96f02291f7913353620edfa69b5ccc9c93ebdbf38463f835ae3bd3b8ea90dbe2c56d7d4ed0e41dbf90054730adaa230aa8f7c9c7c7ff8546083a4a4aa802f2decef29234427ff583baa7f0febf84b08412fdfc0285827fc119040000",
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
      "Tue, 26 Oct 2021 14:50:22 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-137-1635259702250",
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
      "02ff85536b4fdb3014fd2b91f771b44d9bbea56a542540259a429282b6698a1ce7261892b8c44e1943fdefbb762803218d4fb17dcfb9e7dc479ec93d2f13322531cf1e6aa89ebedc89981c115034c3d74db2a9b2af67bb51c17e8bcbb3f40ffc701eaf66334470cd92b4d8e6d092a2ae18c8e926686795a8b7b412a285895a5d67d4ea0e9d416f3019d9bddec046a2843cbde0e53dd26f95daca69a773106f67426439d02d976d268ad7f7ceaed7d956e20e98929df79a1d94919d4f54bfe58251c54539db04e8a096504550509ea3877fd4243e7e9fbbcd69d1ce10bce30c2863a22e95f685299828539ed595c94aa6cfc4f87c7320817be12e428b89bc2ecaa8a4051c59095534524f5bb04efdf5ca5a7aa76b7f350f976b2f0a16e7ee6ade5eac2f362b2fb06ece5ddfb5148d73305c6b661d9b9b8717d44f402a5e1af5503f6be5970e2d3f0e4613505a42138c46f69076c7f6244ee3114bc7ce204e6d88e3713c1a5027b6d9a40ffd24068a3c236a58b41425eb394e0a837144131a47fd1886511c0f2172c60013a7efd876c2c8fe883c565cc109975b2179d32172e32f43370afd8db79887ae2921a575ae4e1a63ba80b71e151688a0ffd4b4d7512e5049b77be985ae3f5f84cb6bb799f00564943d050f38e394e612104d2b6c9e826a25126c18f1e62bf704c166629787a024d39fcf44f75cbb78d3f2577a8803d47695f99220f497de99b173405cd3bc36905d73205bb47c8bb5a1ebfd2f44e2963659c8d5c6f5bf93e6c987142a28d9e7d344b0097cfeb71d365fffcc81d6910aefb83c4c6a155641b344dcd4fbc21ef77afd51971870a53ec486dde1a16d3a87ce080594eaa5a466f3b1d246ac96af200ce2fc3dd3aefd5f4feb76367b040000",
    ],
    [
      "ETag",
      "UdUrg+Gv7mcxoPGfzeZ3wQ==",
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
      "Tue, 26 Oct 2021 14:50:22 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-137-1635259702250"
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
      "00000002ff8d92dd4ec2401085df65bcb4442814b40917454149ca8f506288216469a75068bb7577ab36847777b6221a35d19b7666facdf69cd3ee6117a501d8b08ad64f398ae26c8dea5e17139479ac24dd329e4a040350b13591c5dc4a46ad0773eeb2cbdd45af8bc579f2eab4db44487f8309037b0f61847120c17edc43ca12a4359fc779922ecbce0055647a38f526fde12df5090f743f9cb9aed371bb70304e8b01536c59f2ff585b1c0cd8f2d504431498faa8b564826fd1577d6d53b2248bb122792e7c9450c2e583b5e079c604e7159a546af556a5d6ac5ba675d5aa9aa6552532e63e53114f099e4d492028ae583ce12f64139a0488b224c761797da67114944e74d91f7acd4629f02b40dac228c6e5df2009de30fa0e1fd83183ef1c4b789eaa13d57347ce6fc751a89f47dd385ef7072115457542bcfea03bf59cc158738ba3f74ea1508e05a72425ea106bd5c6a5d56a56df73bde63a6b7a8fad448e06f88c7e8fbb48811db258e2e10de8aec4907c020000",
    ],
    [
      "ETag",
      "yY5mO7W2YLa8k/FEey+mxA==",
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
      "Tue, 26 Oct 2021 14:50:23 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `amount` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-138-1635259702250",
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
      "ff8554fd4fdb3010fd5722ef1790fa9136cd472b2196b581752a29a429086d53eb384e312471891da60af57fdfc5a1858e6d489192f3bd77ef9d7dce337a60798c062862abc792169b4ff73c420d44255ec1aa77fee875ed6f9bece12a1865513efd3acc2df7e40410ac62099cad53da14bc2c081583f9acb52a78b9c605e74d28d4ec184eb3631966d7ecdb7ab76bea4014344d262c7f00fa9d946b3168b777e2ad15e7ab94e235132dc2b3fd7afba9db5e17fc9e1229da879a6d9011ed0f544f534eb0643c3f99cfc0412968b1a01966297878a5c6d1e7c3da2d86b3d60ac04f8c504c082f7359f9821284e7095b9585aa8a06cf48f97cf38166dec41b86da703af7c3a325ce2af2f258c342db050d6d094d252ca50b162fabcc62b17ed0ce82e90564c0c11d16542cb59baf5ee0697b9af6a3d475836aa79aeb8fb4c31a635f9bfbbe370bb5a3d363ed3c98ce2fb52fb70718301f532159aeac87384a6965fb657bc7ef4fb522600956eae4c2d62ddc71f47e944436491cc38c129d469113d92636229df47bb4174714034f56d5150be73c276612e3b8d33188e56023c63ae9e95614f7931ee9448e490c3bb663c7e9a36d03fd2a98a42326d65cb07a8bd14d300ebd4518ccfda11b7aaa8d0497a91cd5e6aa26defa94d02480fed3d7b6ca320e4ad5798dfdd00bdc6138bef6ea1199d015269bd9230c49825341018d0b9c51498b0b1ec3a6a1cbe96c1c8ea7be3b01863af7cb1d42a0c1f7e75742b859ab5d96ea8dce265337b47acac10e728dd352619eea0fd4699980d836fe5dc60d02f716a47151e0cd1f3968c752f4bf2828bc8a6a9b7b4554a9eda2ee41d43b882cb4fdb985a781e0bed5cae86aee05b7a85e0a68420b9a938f470bc02af1f17f637787010cb718748484182699884a8514b49e6896a95e6ab6d3350ccb440a5cc8773953b7774757d5a82ad28ce6f2a5a5fa0eab5dac52a5d883200983e88ffd73c8fe0615e6b2cc45050000",
    ],
    [
      "ETag",
      "EGqE27JymkQRDmbnOHCn6A==",
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
      "Tue, 26 Oct 2021 14:50:23 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-138-1635259702250"
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
      "51",
      "c9",
      "6e",
      "c2",
      "30",
      "10",
      "fd",
      "97",
      "e93591b2942e481c4a452915426dda9c2a848c19428293496d071421febde380e0d04b2ff6cc5be4f7e4036cf36a057d58e6d94f83babdc9d07eb82141d3286bf8aaa932081ea015192b75a19317b551d4e22e1dc7d95bdaee653618b0c2c80d9602fa0758e7a85606fadf07a844896c1325359565916d6bb74f665fa3f12861a0a4950366e974fa349c8ee0e85d4c8b45bdfd97657ef4a0a065826bd4584974196a4d054a3b71f58c286b85bea1464b34d0893b22d3d4d44213f98cf861fce08777712fea3dde0751d40b58a9480a9b53c5e2f493c381252b54427bae07310b743772d37577ee188eba12e769eee62b175eb8db3fdcd5173a6e7e7e6cd85a34ef9a38ba41973a38357826d7ca725bab1bf4400afe80d7dc9ef6e32f564e880ddd010000",
    ],
    [
      "ETag",
      "rjrRFlhloyevUG3gJUywcg==",
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
      "Tue, 26 Oct 2021 14:50:23 GMT",
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
      "5b",
      "72",
      "82",
      "30",
      "14",
      "00",
      "d0",
      "bd",
      "e45b1d0554d24f047c8140ad8afe64102f105e861079d8e9deeb741bf5ece17ca3200ca1ae89b86750a20fd407121e85a32d533533a67af649e0e8f5c94dbd063a2b4e4527b71651d2056ced4b57aad01db55cf0f1ce1a826f248ee5efa98d71971d4468709fe819cc7af62c035575b793593efea2ad17b7d2099f2273a23cd24da43a916e4e67beb01b2f5bef17fbd895e8a5e7a54b874544d8717e5d254db1ae2ac35b1ebcaab4a1481ea9abb48ee49a78b558cb8963c8e94d648ecfe6d179a33726e1fcaec4f3e7f21c2fabc6877b4fcebbfc528fdedefe2f3440d031caa126f4b55d9e623c407ff589e819bcfe6b1070e0e8e71724b22dc019040000",
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
      "Tue, 26 Oct 2021 14:50:23 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-139-1635259702250",
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
      "4f",
      "db",
      "3014fd2b91f738da86a4256da56a54258c4e6dca9214344d53e43837c190c621764008f5bfefdaa10c84349e62fb9e73cfb91f792677bccac894a4bcb86fa179fa722b52724440d1025f6fee7f44972cff5adf0a7b74f9781dba391f3fce6688e09a25e9ae2ea12745db3090d36dd42f1ad1d6b411a287897ac7eea4777ce28e9cd1c4b31d676423514299af7875a7d32b55cbe9607010ef17421425d09acb3e13bbd7f7c18333a81b710b4cc9c17bcd01cac8c127aadf4ac1a8e2a29a6d2374d04a6812d8515ea2877fd42c3d7d9fbbcfe9ae5f20f88133a08c89b652da17a660a2ca79d136262b993e13e3f3cd8144feca5fc4161365bbab928aeee0c8caa8a2897aaac13a0f376b6b199c6fc2f53c5e6e82245a5cf8eb797fb1596dd741645d5ff8a16f299a9660b8d6cc3a35b7002fa89f8154bc32eab17ed6ca2f1d5a7e1c8c26a0b4842e9878f6093d1edb93344f3d968fdd519adb90a6e3d41b5137b5d96408c32c058a3c236a58b412559a4346278e9da42e1b27430fd284daae9730fb0479dec8cb268cec8fc863c3159c71590bc9bb0e91eb7019fb491c6e83c53cf64d09396d4b75d619d305bcf5a8b04004fda7a6bd8e72814abaddcb20f6c3f9225e5ef9dd84575050f614dde38c735a4a40346db0790a9ab5c8b0612498affd33049b895d1e82924c7f3f13dd73ede24dcb5fe9310e50db55e64ba2385c06df8d9d03e28a96ad813c740752a3e51bac0d5defff2012b7b4cb427e6efdf017e99e42c8a1818a7d3e4d049bc0e77fdb61f3118cbb8f3a52e11d978749adc21ae896889b7a5fd86367680f5d62c08dfa10731ce7d0369d4367841d54eaa5a46ef3b1d24eac95af200ce2fc03d3aefd5fa3e1e4837b040000",
    ],
    [
      "ETag",
      "hqJSPcf+pjo05PwWR3fi8w==",
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
      "Tue, 26 Oct 2021 14:50:24 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-139-1635259702250"
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
      "02ff8d925b4fc2401085ffcbf85a12ee48131e8a029214e452121343c8d24ea1b8edd6bd6880f0df9dad88464df4a59d997eb33de7b447784ab2085c58279b6783727fb5413db5c50c95e15ad12d179942700035db10391f3cd4fdcc1cd8b4c70f09bef6cd74cbbd4e8708156e3165e01e214e90470adcc723642c455a0b053769b62a3a07f43eb7c379301b8e07d4a722b2fd78e1fb5ed7efc1c9b92c464cb355c1ff636d79726027d6338c516216a2d5924bb1c3500fad4dc5d29c63490923435450c0c5838d1426675288124d4a955abb5469d61ad546bb55ae561b6522b908994e4446f0624e02410bcdf84cbc924d6812208b921cc7c5f585c6495438b1e5701c34eb85c0af00698b138eabbf4112bc65f41d3eb07306df39960a93e90bd5f7efbddf8ea3503f8fbaf582de0f42698aea8204c3516f1e78a389e59667efddbd4635918292546843ac94ebd78d56b3fc9eeb8db059d37b5c2d0d3a1032fa3dee120d6eccb8c2d31be97872107c020000",
    ],
    [
      "ETag",
      "SGX4LnuzaQElziewFuQhlA==",
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
      "Tue, 26 Oct 2021 14:50:24 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `id` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-140-1635259702250",
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
      "54",
      "fd",
      "4f",
      "db",
      "30",
      "10",
      "fd",
      "57",
      "22",
      "ef",
      "1790fa917ea45f12625dc9a05349599a82aa6d6a6de7520c691c62078450fff79d130a7463438a949cefbd7befec739ec8ad484232204cacef72c81e3fdd48462a04345de3eaedf04ca93cb8ffb64867f549de4ece16603f1c1d21421896a29b3486aa9279c6410de6b3da3a93794a3329ab58a8da68dbd546a7e5349d7ed76e361d1b890ae26822925ba45f6b9daa41bdbe13afada55cc74053a16a5c6e5ed6ebf7cd7a9ac91be05ad5f735eb28a3ea1fa81ec792532d6472349fa1835c41b6840d15317a78a586ecf37eed9aa09bda1ac1f78203e55ce68936beb004974924d679565425832752f87cf34166eec41d05d6683af7828315dd18f2ead0a2cada05156b854d452286a5085726b35ca6b7d6577f7a8e1974704d15a8957575e6faae65ad0ce8676edb2d6e1d5b43efc4dae78f3d6bee79ee2cb00e8e0fad537f3abfb0be2cf630683c04a54552d80e288bc1587ededaf1df276a0854a38d32b9ecda1ddae8d97d16b12e8f7a2d87453630d6635d87b698cdfb6d68870c28f2b4a95eb06822934ec301883a2ce258a21572da771863516437ba0e442d1636c16e75c23ed956c84326349c08954a25caed2557fe387097813ff746c3c02dda88681eeb93d29c69e2ad4f8d4d22e83f7d6d4d564854326735f602d71f8e82f1a55b8ec704d6943fceee7040221a2b4034cde8063464e732c44d2317d3d938184fbde10419c5995fec108a0c7e3cbd1282c7b4d8655dbc8d56a75de8ef009734ce0bc47df9411a0ed96e2bff2e31f4fde102656996d1c7f7cbbf5bbfc0175169f1458f18b55dd4dc8bda7b51876c7f6df1a9",
      "10bc67a532f93e77fd0529977c882083847f3c56082e121fff2f767717c1787b5147698c718ab9322a3c83729ac5a6e8a564f79aed5eaf470a70a6ffcc3976b3b13b3653c354840d24fab9a5f2ee16bb6852b97a01611287d01b7ba798fd0d1cabaedb3d050000",
    ],
    [
      "ETag",
      "kAHssuTvJYpS/Lu4nHYe0w==",
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
      "Tue, 26 Oct 2021 14:50:25 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-140-1635259702250"
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
      "51",
      "db",
      "6ac24010fd97e96b82b998960a3e68915610a969ad9422b2c6318d26997477b622e2bf7736963e95d297dd997361cf614fb02fea0df4605de41f16f5f12a479eb92145634b367235541b040f90552eca4e50bec68738abd2a4335b2c5e6c38e022eff74561b277ac14f44eb02db0dc18e8bd9da056158a4d55646b16111f1bb78fa7cfa3fb512a40451b074ce793c9603819c1d9fb31ad56cdfe5f96e5d9831dad53dca2c63a4397a1d1b4c38cc7ae9e515553a26fc8ea0c0db4e296c835d94669225f103fec067e781d2751727b1344511288b2a44c7141b588e74f120e985895291da41ec422d0ed284db7edf9d9c2ae849ba236dbef5cf807d775dcf2fbb1e191d13c6a92e8065deae0d2e08e5c2b96b6ac2d7a9029f98087822ffbf90b983a8bbbdd010000",
    ],
    [
      "ETag",
      "/0lY3w3cmR5/QWWVu1Atig==",
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
      "Tue, 26 Oct 2021 14:50:25 GMT",
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
      "8b08000000000002ffedd34b7282300000d0bb64ad0e0111d29d880c7f14418d9b0c608a02151250814eef5ea7d7a8ef0eef1b245946db967475496fe0030c898866d9cc6954cdc873592487db683d0a4f998fb07214a15ac3bed57dc6f0692a49e9d23149a92e972c8a917cb191ce4d7cbc386bdc1cc2f81e6945c61c6ff45a7731e6417cb47aa50b602a878581192e369c22bf1e60888c2f5f3bee9385fd50f0e746905ca98715f13bdd7ceef14a7c0ee47426296a02d7bfaf18b2d5e7d9adb44012eb5d51d2d4d01dccb33b9dceb75091939c6e15a28656591730ca3bd808ec3cd248e4f5ecededff021340fbe6ca694baeafed928cd004fcd527ddd0d0d77f8d269c72f0f30be63e8b1119040000",
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
      "Tue, 26 Oct 2021 14:50:25 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-141-1635259702250",
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
      "00000002ff8553db4ee33010fd95c8fb4a2f699bdea46aa94a804a6d0a494ab55aad22db9904431a87d82942a8ffbe1387b220a4e529b6e79c39672e79258f228fc99430913e5550befc78908c9c11d034c5577b33d70fbbf9657a9b4f4086e1cdaeb8ba7a9ecd10216a96a2fb2283969255c9414db7413b2d6555d052ca16266ad903bb650ffb4ecf998cbabd9ed345a2822c5989fc11e9f75a176adae99cc4dba9946906b410aacde5fefdbd73e8758a523e00d7aaf359b38332aaf38deacf4c72aa85cc67db001d540aca08f65464e8e11f3566e79f73b705ddb753041f0407cab9ac725dfbc2145ce68948abd26425d357627c7e3890c05db98bd0e232abf67994d33d9c5931d534d22f055897fe666d2dbdcb8dbf9e87cb8d17058b6b773d6f2f36abedda0bacddb5ebbb96a62c03c3b566d6b9b9797841fd189416b9510febe75af9ad43cbaf83a90928ada00946a3ee90dae3ee84256cc49371df614917181bb39143fbaccb270318c40c28f28ca861d11c6b9e74277d18f7a264c49268e0b07e44e35e1cd131eddb304998d31f92e319792e85860ba10aa944d321b2f397a11b85fed65bcc43d79490d02ad3178db1ba808f1e351688a0ffd474aca342a252ddeea517bafe7c112eefdc66c22b48297f099e70c609cd14209a96d83c0de55ac6d830e2cdd7ee0582cdc46e4e4145a6bf5f49ddf3dac58796bfd3431c606d579b2f09427fe95d193b27c41dcd2a0339340752a0e57bac0d5d1fff2012b7b4c9426eb7aeff8b344f3e245042cebf9f26824de0fbbfedb4f908c6dd471da5f18ecbc355adc24b689648987adfd8e39ee3d80e31e0527f890d1dfbd4b63a479d11f690ebb7929acdc74a1bb14abd833088f3f74cbb8e7f01b3c3a3167b040000",
    ],
    [
      "ETag",
      "1OAtjWAFgQn9eoTTPWpGGw==",
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
      "Tue, 26 Oct 2021 14:50:25 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-141-1635259702250"
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
      "61",
      "4f",
      "82",
      "50",
      "14",
      "86",
      "ff",
      "cb",
      "e9",
      "63b0a989269b1f30b5d8d44c71e59a73573820065cbaf79233e77fef5c326bd5565fe09cc3732eeffbc21e9ee22c001b5671f45ca0d89d45a8ee74314159244ad22de799443000158b880ce6f7aaf33a6fedce43d15f658578e83ac1b6dd2642fa6b4c19d87b08634c0209f6e31e329622adf93c29d26c597606a85dae87536fe28eaea94f79a0fbd16c30703a831e1c8cd362c0145b96fc3fd6160703367c35c11005663e6a2db9e01bf495ab6d4a96e6099a9217c24709255c3e88042f72263837696256eb55b3dab8b06a56ab59a9d5ac0a9109f7998a7946f06c4a024171c59209df924d681020ca921c87e5f585c671503ad1a53bf21af552e05780b4857182cbbf4112bc66f41d3eb06306df3996f2225327aa3fb8757e3b8e42fd3caaeb78bd1f845414d509f1dc616fea39c3b1e61647ef9d9d4239169c9294a843ac56ea9756b35179cff58aebace93db612051ae033fa3d6e620576c812898737e2cbaf997c020000",
    ],
    [
      "ETag",
      "dYWtBzY9y+frFbnurXDAdw==",
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
      "Tue, 26 Oct 2021 14:50:26 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `purchase` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-142-1635259702250",
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
      "54",
      "6b",
      "6f",
      "9b",
      "30",
      "14",
      "fd",
      "2b",
      "c8",
      "fb",
      "d24a7910200f22555d96b22d52423202adb28712e398d42dc1149b445195ffbe8b296db36eab8404d7f79c7bceb5af7944f72c59a33e0ad9e621a7d9e1c31d0f510d518937b0bab08cc5fe7b2076329c90d9dcbca5fbc97a7f71010856b004dea631ad0b9e67848a7e306f6c329ea738e3bc0e85ea2dcba8b73a66db68db5ddd30da3a10058da3314bee817e2b652afacd6625ded870be89294e996810be7d5e6fee8c669af13b4aa4689e6a36414634df51bd8c39c192f1e4229883835cd06c49b798c5e0e185ba0e3f9ed66e30bc6d6c00bc63846242789ec8c21794203c89d826cf5455d47f44cae7ab0f3477c6ced0d786d3c0f5cf56785b9057e71a165a15d4b4153415b1982ed97a556496cbf45efbec4d27900107b75850b1d26ebe3a9ea3bd2cadb49fb9ae9b44bbd406ee95765a65e46a81eb3a735f3bbb3cd7be78d360a67d5a9c60c0fe9a0ac91265dec7614c0be34f1b3c7a7bae05014b502e93cbaedec1ad9e6e8751d82551cf6c87914ec3b01776dbd80c75625bd45a8714034f16d5150b273cb15b1610d756cf8c684842bbd3eb9ab685ed5e68da5dcbd27b96d1354dcb40c71ada674cd22b26522e58b9c9e8c61bf9ced2f7027738f01dd54684f3585e95e68a265efb94d02480fed3d7b1c8320e4ac5898d5cdff106437f74ed944332a61b4c0ef307189308c782021a67784b25cd267c0d9b8666d3f9c81f4dddc11818eae4671542a0fe8fc717827f48d52e4bf54673df1bb95f94810a718de35c4176e5071aa4e0151d8fb57f971978de6001d238cbf0e18f1cb4d3b10afa5f24145e45a5cd4ab2850ab52a324e22eb24eaa0e3",
      "af233c350437ae5446df02c75ba072c9a311cd6842de1f2d00abc4fb7f8eea160318ee31e80809314c3211850ac96839d16cab7a29d93da363745a488133f92667daedeae88a1a4545baa5897c6aa9bcc56a178b542e9e4190844174d5291e7f03208b75e147050000",
    ],
    [
      "ETag",
      "Y42YwZUsvtbMcPS3hewMdw==",
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
      "Tue, 26 Oct 2021 14:50:26 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-142-1635259702250"
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
      "90",
      "41",
      "4f",
      "83",
      "40",
      "10",
      "85ffcb7885d8a26824e9c11aa24d49a3945e34a659608ab4b04377873484f4bf3b5b8d674fbbefcd37b36f768443ad4b8820afab638f66b8aa90dfdc2545db376ce5e8485b040f905525a42ed57b76ccd6d7cba4c2dc6e303f26cbd36c26842dbeb055108db0abb1292d441f2368d5a2b4a9967acd02f1d039bd5865f1739c8ad152e98cd526491ee7490c67efaf69bbed0eff6af93c7bb0a73cc51d1ad405ba0c9da13d16bc70eb59d5760dfa967a53a0850b7c295486fa4e19225f1c7f7a1bf8d3bb9b30081fee2741104e846ca8505c931678b39670c0c4aa49e924eb81032e7a3e30da574332dd62f95b91914fe41e6609c4a6470f0a257ff452f38f3e7f035b2aafc680010000",
    ],
    [
      "ETag",
      "ndaZTqTS/KLgebsUebqLKw==",
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
      "Tue, 26 Oct 2021 14:50:26 GMT",
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
      "8b08000000000002ffedd3597282300000d0bbe45b1cc46aa47f05d929bb11fd61220602b4ec65ebf4ee757a8dfaeef0be018e63d275515f15a404af60c61cbf8ed7467d10e4346336ce7d941b8b4d14a174cd192143a9b5ba4884beb71d2474994d711096471a4631ea71784e20d760eed42d1abd93d4b955e2e7213f63738163d5b0d0a1ad565c7dd8a67b35372f99242e69116d3989becdc80f3c465755fdbe7bc16ce6993d1c2c4b4247e3547ee18bc62c1b86ca1fca4446efecb8b76450108b68293a79721b610e4762ef223d7595b07183f7a9e5ed78b88a4c33517befe7d509f9e1fae9e9ff022b40a63a6b4917658feddb1dcfafc05ffda89f6bf2f82f10dc9216fcfc02714348cb19040000",
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
      "Tue, 26 Oct 2021 14:50:26 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-143-1635259702250",
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
      "9b3014fd2bc87b6d0281249048d11aa5748d94908d9046d33421e35ca85bc0149b565d95ffbe8b69ba7693d6276cdf73ee39f7836772c7cb0399928467f70dd44f9f6e4542ce08289ae16b499dab2a99cfdd620c8fbff6725f5ae67d369b2182b72c498b2a879e144dcd404e77db7e568ba6a2b5103d4cd41b0c9dde60ec8cecd1c4b56c7b642151429eae787987f41ba52a3935cd93783f1322cb81565cf699285edfcd07dbac6a710b4c49f3bda68932d2fc40f5732e18555c94b3dd161d3412ea180aca73f4f0877a48cedfe7ee735af433043f70069431d194aaf585299828539e35b5ce4aa6cf44fb7c73205b7fe52f228389bc29cab8a4059c1907aa68ac9e2a302ec3cdda5806979b703d8f969b20de2eaefcf5bcbfd8ac76eb606becaffcd037144d72d05c63669ceb5b8017d43f8054bcd4ea51fbdc2abf7468f9ef605a024a4be882b16b8de9c0b326499ab82cf59c51925a90245ee28ea893586c3284e121018a3c2daa59b4142538077bc0c62c1e0c98130f27e361ecb9a349ec316be05809b009f3c8f18c3cd65cc105979590bceb10d987cbc88fa370172ce691af4b486993ab8bce585bc05b8f0a0b44d07f6a3ab6512e50a96df73288fc70be8896d77e37e11564943d6def71c629cd25209ad6d83c05f55a1cb0612498affd0b04eb897d3d052599fe78266dcf5b176f5afe4a8f7080ad5da5bf641b85cbe08bb673425cd3bcd19087ee402ab47c83b5a1ebe34f44e2967659c8b79d1f7e27dd530829d450b28fa789601df8f86f3b6d3e8271f751472abce3f230d9aab01aba25e2bade17b6678f27f6886870adfe8eb9d6d03eb5adcdd16684024af55252b7f9586927d6c857100671fe816ed7f137afb195537b040000",
    ],
    [
      "ETag",
      "na3HpbAA7m6ewzWsWn0/qg==",
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
      "Tue, 26 Oct 2021 14:50:27 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-143-1635259702250"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92dd4ec2401085df65bcb424fcb568132e40503005b19468620859da2914b7ddbabb9510c2bb3b5b118d9ae84d3b33fd667bce69f7f09c6411b8b04c562f05caddd90af5bd297c5405d78a6eb9c8148205a8d98ac8167fbc8d060fe733bfd1e0f6da9ba073d7dbb6db44a8708d2903770f71823c52e03eed216329d25a287891668bb2b340ef72339c06fe707c437d2a22d38f679ed7e97a7d3858a7c58869b628f97faccd0f166cc4d2c7182566211a2db9141b0cf5d0d8542ccd3956942864880a4ab87cb092a2c89914a242934aadd9a8d49c865db72f5bd57addae12c945c874223282675312085a68c67db1259be01020cb921cc7e5f595c649543a31e5701c38cd52e05780b4c509c7c5df20095e33fa0e1fd83183ef1c4b4591e91375eddd757e3b8e42fd3caad709fa3f08a529aa13120c47fd69d0194d0c373f7aefee34aa891494a4421362addabcb05b4ef53dd72b61b2a6f7b85a166841c8e8f718241adc98718587378690ba137c020000",
    ],
    [
      "ETag",
      "7lXJdHW+UR33l5hLPe6ODw==",
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
      "Tue, 26 Oct 2021 14:50:27 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `purchase` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-144-1635259702250",
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
      "0002ff85547f4fdb3010fd2a91f70f48a54ddaa6692b21d6958c452a294b537e689b5ac77182218943ec0015ea77dfc52140c736a44af5f9debbf7ce67e709ddb22c446314b0f8aea4c5e6d30d0f500b518963d81d5dce2f07d7c5ec31e6d347e3626899e1039f1c1e0282552c81d33ca107829705a162bc5cb4e38297392e383f80420746bf7f600c7a66d71c597ab76bea40143489662cbb05fab594b918773a8d783be63c4e28ce9968139ebeec77eebb9dbce0379448d1d9d5ec808ce87ca07a94708225e3d9e172010e4a418b154d314bc0c32b350c3eefd66e339cb66300df33423121bccc64e50b4a109e452c2e0b55158d9f90f2f9668116f6cc9efada74be74fdbd354e2bf27a5fc3426b8296b686a62296d0150bd75566b5ca6fb5afdefc1432e0e01a0b2ad6dac537dbb3b5d7adb5f6b3d4f51ed18eb4897baced56715c6de9baf6c2d7f68ef6b5136fbe3cd3be5ced60c07e4885649932efe320a195f1e70376decfb5226009ca757265e9036c0cf55110051689863d3388741a04c3c032712fd0c9a84ffb614031f064555db170c6b320227a141824b474d3ea993aac88151a5d1307a145ba210c6da09b3a41db167a2898a4c74ce45cb0fa90d185e7f8f6caf796ee74e2dbaa8d0897893caecd554dbcf529a14900fda7af6d95651c94aa8939ae6f7b93a9ef9cdbf52599d11893cde20eae49841341018d0b9c52498b531ec2a1a1b3f9c2f19db93b9901434dfeac410834fef1f44af037b93a65a9fed1c2f71cf744196810e7382915e4be5e209c8357b4ddb6fe5d66e279932b90c64581377fe4a09d41bfa2ff4542e15554db6c240d54a935517727eaef4403b4fdb5855f0bc18bab95d1f7a5ed5da17acba3112d68463ebe5a0056898fbf1ccd2b0630bc63d0111262b8c944542aa4a0f58d66a9eaa5660fbbd660a8be3b1217f25d6e6898cde8aa1a55459ad24c3eb754bf62758a55aa142f2048c24574d514b7bf01d8622feb47050000",
    ],
    [
      "ETag",
      "9XOX6hrLxgoCx1W875dwoA==",
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
      "Tue, 26 Oct 2021 14:50:27 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-144-1635259702250"
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
      "51",
      "5d",
      "4f",
      "c2",
      "30",
      "14",
      "fd",
      "2fd7d72dc2c65048781033118344a724268690522e73b0f5d6b6d310c27fe7761862e28b2fedbde7233d27ddc3b6502be8c3b2c83f6b34bb8b1cddb31f32b475e92c5f9a944508009dc8593956e9f67194e9f85a5ebedd6d62f9403dca07035658f9819580fe1ed605962b0bfdf73d285121db4445b5722c723bedf7f1f4351da5190315ad3c309d4d2637c3490a87e06c5a2cf4f65f96f921800d2d335ca34125d167d0863628ddd8d7b3a2d22586966a23d142236e88dc50ad85210a1909db9d4ed8eec64994f4ae5a5194b458599214ae20c5e2d90b8703474e94197d733d8859609a919bae9bf38be1a429e1a7a8c9f69beb9eb9f61f2e3e731dcfcd7f1e1bee1cda27431cdda24fdd3a35b825dfca715b676a0c400afe80fbc29df6c31103195d63dd010000",
    ],
    [
      "ETag",
      "InEkMGRp38c/XFj3cJo9og==",
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
      "Tue, 26 Oct 2021 14:50:28 GMT",
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
      "0000000002ffedd34b7282300000d0bb646d194844a0cb28144405a546e986014c30f29184b403d3e9ddebf41af5dde17d83bc2ce93064ea5ed30ebc8229878e566a616f63afaadc06eb975ac4a2102d41305cb2afe1fa394f25b57ae26c8edc6f4d736d842719f913ce9ac288d44ee9bcdb0a1b9f388af391b5f571802f1f2befcedb3cbcba817e4bee089e29bb20de11cf90295eab005e567be77a2822dbd8eaf1c8d4bcde9f0338d94529c44e2425b777d1326037ab72fdb6763b9327fb902c1891167d433a4a475f35074c4ed6bb599db3b4b1d8a6838e1e2fd6c9e051834c426eb4a7a7ff0bcc001d7b2ee990f1c776643ace0cfcd5cfd4d4d3c77f4c734925f8f9058963245019040000",
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
      "Tue, 26 Oct 2021 14:50:28 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-145-1635259702250",
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
      "14fd2b91f711daa68fb4692534aa1246a536ddd21484a629729c9b6048e2103b4508f5bfefdaa10c84343ec5f63de79e731f79210fbc4cc88cc43c7b6ca07efe762f62724a40d10c5f59ff44e627778be07a5aac36b7fb4be6cadba7b3334470cd92b4a872e848d1d40ce46cb7ed66b5682a5a0bd1c1449dfec8e9f4c74367e04c27f660e0d8489490a72b5e3e20fd4ea94ace7abda378371322cb81565c769928dede7bfb41afaac53d30257b1f357b28237b5fa87ecf05a38a8bf26cb745078d843a8282f21c3dfca326f1f9c7dc5d4e8b6e86e03d674019134da9b42f4cc14499f2aca94d56327b21c6e7bb03d97a2b6f115a4ce44d5146252de0d44aa8a2917aaec0ba0c366b6be95f6e82f53c5c6efc68bbb8f2d6f3ee62b3daadfdad7573e5059ea5689c83e15a67d6b9b9f97841fd04a4e2a5510ff5b3567eedd0f2f3603401a525b4c168628f69dfb5a7711a4f58ea0e9d38b5218edd78e2d0616cb3e90846490c147946d4b068294a3a76c6b61bb3289df6211af5131ab92e4c22c74e52a6d3c1604c0ea7e4a9e60a2eb8ac84e46d87c84db00cbd280c76fe621e7aa6849436b9ba688de902de7b54582082fe53d34147b94025ddeea51f7ac17c112eafbd76c22bc8287bde3ee28c539a4b4034adb1790aeab548b061c49fafbd0b049b89fd3c062599fd7e21bae7dac5bb96bfd1431ca0b6abcc976cc360e9ff30768e886b9a3706b26f0fa442cb77581bba3efc41246e699b85fcda79c12d699f0248a186927d3d4d049bc0d77fdb71f3118cbb8f3a52e11d978749adc26a6897889b7a5fd9eec01d8e46c4806bf5293672a6c7b6e91c3a231450aad792dacdc74a5bb146be813088f3f74dbb0e7f017a280cf27b040000",
    ],
    [
      "ETag",
      "c1+sl+hCRV9mLOYvFc8sYw==",
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
      "Tue, 26 Oct 2021 14:50:28 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-145-1635259702250"
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
      "41",
      "4f",
      "c2",
      "40",
      "10",
      "85",
      "ff",
      "cb",
      "78",
      "2d09548adac403202a06abd072d110b2b653286c3b6577ab2184ffee6c55346aa2977666facdf6bdd7ee609d1509f8f0942d3615aaedd102cdd81613d495349a6f25151ac1013462c164fb72e5ba37abbe6c6d88d60f57c13208abf1f939133a5e622ec0df419aa14c34f88f3b28448ebc1693acf2625e770e986d69876134190657dce794d83e988e46ddde68007be7b0980823e635ff8fb5d9de81153d4d304585458c564ba96885b1195a9b5ae4a5c486a64ac5a8a186eb070b455529145183278d56db6bb43ac79eeb9d9d345dd76b3229291626a382e169c802c1901172422f6c133a0ca8ba64c7697d7de67196d44e6c390ca24ebb16f815606d692671fe37c8829782bfc307f69ec1774ee45415e6405d8eeebabf1dc7a17e1e75d18d063f086d38aa03120d6f0761d4bdbdb7dcecdd7b6f6b50df2be22435da105bcdf6a977d269bee5da279b35bfc737aa420762c1bfc77566c04f85d4b87f053d150d547c020000",
    ],
    [
      "ETag",
      "4Fj22JjCl1qookZGNhNSuQ==",
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
      "Tue, 26 Oct 2021 14:50:29 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `date` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-146-1635259702250",
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
      "ff8554616f9b3010fd2bc8fbd24a4920901088547559c33aa4947484b4abb629316052b7802936e9a22aff7d6768da64dd560909ec7befdebbf39927744ff3180d5148570f1529371fee58885a8808bc82ddab71f68b629b7c1b65d7c1da7b98dc8ed5d1e3c90920a864719c15296973569511e1c3f9acb32a5955e092b136246a777b66bb6b1a7dbd6f0f345def6b40e4244d2634bf07faad10051faaea4ebcb3626c95125c50de8958f6b2afae75b528d91d8904570f355590e1ea3baaa7298bb0a02c3f99cfc041c549b92019a6297878a5c6e1c7c3dc1d8ab3ce0ac06b1a111c45acca85f405292296277455957556347c42b5cfbd0f347326ce59a09c4de75e70b4c499242f8f15cc95dda2a52ca1a884a66441e3a58c2c16c5bdf2d99f5e40041cdc624ef852b9fee2f88ea22c632cc852f951699a1129a7cac81b2b87195c4f997b9e330b94a3d363e5dc9fce2f954f370718b01e132e685e1b0f70981269fab9b9eedb3395042cc048135c0c3413772dcd0e9370102596d10f138d84a1150efad808b5c8ee915e1c120c3c21b3d72c9cb33c36e3c4d48d30b6ed9ead99619c58a165e8312156179ba66d8486d58bad2edab6d063490519535e304e9b06a36bdf0d9c45e0cfbdb351e0d46524b84ac5b831278bd8f729a04800fda7aead8c52064af2b45c2f70fcd159e05e39cd804cc80a479bd9038c4882534e008d4b9c1141ca0b1643d3d0e574e606eed41b4d80519ffae50ec1d1f0fbd32b21d814759745fd466359c0762fe1154eab1ab06e3e90aee95a5bd3dbdd3eda6e5bffce34f2fdd10da8e3b2c49b3f625091d993f4bfe8d4f87ad538dde9cae6efb93858f50e5626dafedcc2d34270e11a65f475eef837a8d9f249424a9247ef4f1780ebc0fb3f8edd2506305c63d0e102d630cc11972a51499aa1a6595d4bc3b674bb6bf4500d2ec59b98a10f76a72773c88c2423b9782ea9b9c4751765a8e22f2008c22c7aae770ed1dfa323e46346050000",
    ],
    [
      "ETag",
      "VDmxia9eXAmWTvNqLhD/Aw==",
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
      "Tue, 26 Oct 2021 14:50:29 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-146-1635259702250"
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
      "514d4fc24010fd2fe3b54d4aa125927010824852518ae0c110b26c875a683b7577ab41d2ffee6c319e8cf1b23bf33eb2ef65cf70ccca0406b0cbd2b71ad5e92a45b3b0438cbace8de6aba25223388046a456f9bc0cd6e3f97db73f0d6f7bd1834c3ef57a311cb242cb572c040cceb0cf304f340c5ece508a02d9260aaa4bc32273aaec3e9b3f4da693988182120bcc575174338a26d0383fa6edb63afecbb2691c38d02ec63d2a2c25da0c95a2034a33b3f5b428aa1c5d4db592a8a115b744aaa8ae84227219713bbdd0ed84ddc00faefb9eef071e2b7392c26454b278b5e47060c8883ca60fae075d16a876e4a6fbf67c6f615bc24e7e9bed77aef307d7b3dce6fbb1d1c9a07e54c4d135dad4dea5c1986c2bc36d8daad10129f803ee3273d99b2f0d7b0aacdd010000",
    ],
    [
      "ETag",
      "bWS5VCNM37G6F4LOcdzsVQ==",
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
      "Tue, 26 Oct 2021 14:50:29 GMT",
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
      "02ffedd3497282401400d0bbf45a2d1c98b2130933418965031b0aa11983f9340d0153b97bac5c23be3bbc6f94a429e9fb987d36e4865ed09c6ce455bab24152b4a2826630b4506802d9f93036011f8136de62f1b5dde72e74d8cfc3dde4ea46d2574bce14c66e089300e372ba5f226fb6b69c484ce672f6101b8ca386e3645e07a3cf2ddb169812181ef8896462bd15d6702d190f8ceeca20eb2229ea4eda310db378fd05c1c60ddfb11e0ec599c7da04d13185916535f805b5749baa4c7db3d5729fab752692f62e1de4737dc5856a65b3295f9ae622f9e7d3187907cd5e3d3dfd5f6881c80415257d5c3db66f79595ea0bffa319b813cfe2b24a184a29f5f31add8d819040000",
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
      "Tue, 26 Oct 2021 14:50:29 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-147-1635259702250",
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
      "9b3014fd2bc87b6d0281109248d11aa5748dd4908d9076d33421632ed42d60864da6aaca7fdfc5345dbb49eb13b6ef39f79cfbc11379e0554ae624e1f9cf169ac70ff72221670414cdf135355b73ea665fa3c30492d2ddbab31bcfca170b44f08e256959173090a26d18c8f97e37cc1bd1d6b41162808906a3b137184d1cd776679e65dbae8544094576cdab07a4df2955cbb9699ec487b9107901b4e672c844f9f26e1e6cb36ec43d3025cdb79a26ca48f31dd58f85605471512df63b74d04a686228292fd0c31f6a9a9cbfcd3de4b41ce6083e70069431d156aaf3852998a8329eb78dce4ae64f44fb7c75203bffda5f450613455b5671454b383352aa68ac1e6b302ec3edc6580797db70b38cd6db20deadaefccd72b8da5eef37c1ceb8bdf243df50342940738d8571ae6f015e503f05a978a5d5a3eeb9537eeed0fadfc174049496d00763cf9ad0d1d49a2559e2b16ceab8496641924c13cfa54e62b1d918c6690214795a54b368252a7be68c3cc79ac409d8e3789c58e3783a665eecd91638a3494a679092e319f9d57005175cd642f2be43e4365c477e1c85fb60b58c7c5d4246db425df4c6ba025e7b54582082fe53d3b18b72814a5dbbd741e487cb55b4bef1fb095f434ed9e3ee27ce38a3850444d3069ba7a0d988141b4682e5c6bf40b09ed8e7535092f9f727d2f5bc73f1aae52ff40807d8d955fa4b7651b80e3e693b27c40d2d5a0d39f40752a3e53bac0d5d1f7f2012b7b4cf42beecfdf01be99f42c8a0818abd3f4d04ebc0fb7fdb69f3118cbb8f3a52e11d9787c94e8535d02f11d7f53eb3a7f66ce67944831bf557ccb14696736a5b97a3cb082554eab9a47ef3b1d25eac952f200ce2fc03ddaee36f59a933567b040000",
    ],
    [
      "ETag",
      "d/u/85fXTv6ebm5O59V70g==",
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
      "Tue, 26 Oct 2021 14:50:30 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-147-1635259702250"
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
      "6e82401085df657a594cd48a5a122fb0556ba2d61f4c2f1a635618105d58dc5d34c6f8ee9da5d6366d93f60666866f96730e9c601ba70138b08aa35d8ef27813a19e98628a2ae75ad12d13a942b000358b889cbf6073b2ef4db63bdedd049b7578e8a9db49ab4584f2d79830704e10c6c80305ceeb09529620adf982e749ba2c3a0bf43133c39937ed8f7ad4272230fd683e18b8ed4107ced67531609a2d0bfe1f6b8bb3051bb19a628812531f8d964c8a0dfaba6f6c2a96641c4b4ae4d24705055c3c88a4c833268528d1a454a9354a95fa9d5db5ef1be56ad52e13c985cf742c5213c18c0482169af1a938904da813208b921c87c5754fe338289c98b23ff2eab542e05780b48531c7e5df20095e33fa0e1fd82583ef1c4b449eea2bd51d3cbbbf1d47a17e1ef5e87a9d1f84d214d515f1fac3cecc738763c32d2ededb478d6a2c0525a9d0845829d79a76a35e7ecff54198ace93d8e96395ae033fa3d9e620d4ec8b8c2f31b09ac4d877c020000",
    ],
    [
      "ETag",
      "UWe8QvGQkqlFjdjhfwGs+Q==",
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
      "Tue, 26 Oct 2021 14:50:30 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `stamp` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-148-1635259702250",
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
      "54",
      "6b",
      "4f",
      "a3",
      "40",
      "14",
      "fd",
      "2b",
      "64",
      "f68b267d0caf429b18b75b5925515a29d5b88fb4c330d451ca5466d0b8a6ff7d2f60d5aebb6b420233f79c7bcf7df1846e799ea0018af9f2ae64c5e3a71b11a316628a2ce196fcba714f46d9243a920feec8f02ef39ba4777e7000085eb12459ad33d696a22c289383d9b4b32c44b92685106d70d4d62db7adf74cdbb0fb0e360c1b0351b22c3de5f92dd0af955acb41b7bb0dde590ab1cc185973d9a162f572dfbd37baeb42dc30aa6477376617c2c8ee07510f334189e2223f984d4141295931672bc233d0f04a4de2cfbbbe3b9cac3a4b00df73ca08a5a2cc55a50b5c5091a77c5916b557347842b5ce371f68ea9d7aa3481b8d6741b4b720ab8abcd8d788d4b68796b680a4529eb1394f1695653e5fdf6a5fc3f1195840c135914c2eb4cb132ff4346d2115a85b683f4a8c4daa1d6ac3e048db75e107da2c08bc69a4ed1dee6bc7e17836d1be5ced60407bc2a4e279ad3c2271c62ad5cfd5f5df37b52210054a1ae3dcc13da2bbb81fa7b14353d7b4e314b3387663c726668c69df62561233023c5579af592417b96d6317c79665509ba6a66bf69224d153277199edf69c84987dc7c1ae93a04d0b3d145cb1232ed742f2a6c2e832f4236f1e85b360348cbc3a8d9494993a6ac45549bcd5a9204900fd27af4d65e5022255edf283c80b87a3c8bff09a0939654b421fa777302329c924033429c88a29569c89048a8626e3a91ff9e360780a8cbaed932d42a2c1f7a75742f4b8aeabacea378afc33e8d1f06c526bd8822e4856d6a8fbe60319d8c06d6cb4753bd28d816e0e74ab8331fe86369bd6bf9d0fc370780582485190c73f6c9064cfaae87f895ae3eb",
      "53237eab424755b4174d3b276be7d4439b9f1b785a0896b0898cce675e78859aab90a5ac6039fd78e0005c1b3efe996c171bc0b0da1007964471986f2aab28b460cd9cf3559d4bc3764d98441dd5e042bdb3f52d63dbd0ca47e591ad58ae9e536a16bbae62652ae50b088c309e811f1c83f537c1d1dc325a050000",
    ],
    [
      "ETag",
      "azj8HClPTDsw8C2EWnjd6Q==",
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
      "Tue, 26 Oct 2021 14:50:31 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-148-1635259702250"
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
      "51",
      "4d",
      "4f",
      "c2",
      "40",
      "10",
      "fd",
      "2f",
      "e3",
      "d136810222241c0089a2885ae4640859ca500b6d67dd9d9510c27f77b6184fc678d99d791fd9f7b247d865e51abab0cad20f87e6709122bff82146eb72b672692a2d4200c82a15e580daf74fea31bab9b47dfdd071b354ed86fb5e4f143679c74241f7089b0cf3b585eedb114a55a0d85441ae6411f141fb7d3c7d1ddd8e62010a5a7b603a9f4cfa83c9084ec18f69b9d4bb7f5916a700b6b48a718306cb047d066d688b098f7d3dab0a9d6368c999042d54e28a480d39ad0c512848586f5e87f5ab462b6a75dab5286ad5449953a238a352c4f39984032656794c7ba9070d11986a94a69beafcac605fc24f5195ed77aefe07d7f4dce2fbb1c181d13e1b92e8167deadab9c1907c2b96b66c1c069028f980bb8ccffbe90b5e589a4fdd010000",
    ],
    [
      "ETag",
      "Bo7JOaM2D+sApK9uSgakCw==",
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
      "Tue, 26 Oct 2021 14:50:31 GMT",
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
      "000002ffedd34b7282300000d0bb642d0e8292d29d09e080461145a31b26c414142ae1e388717af73abd467d77784fc038176d9b745521aee0133c98610ff9702e3f909765f31c1bd09aa2ca98b89c5e5675b1c01d2d1081b9574bba9281c3d4c69c1ee20374d3cd0c9a11370876741fc70b67598ca861a51aa7704cc35895559404a7bc9c6b9799945e5a7a3babae9a5d9d0a62afd7e62253a73050fe3d94df12918c785fbedc86ddd18179af7ca50b3bd03cd533bddcadae7714a723ac6f31718e1646869fb57ecb1a7ebb64eec4bc52a289727f739768b6677d1d9df3c886e3e1dbdbff050640f4f2dc883639bfb69b13db1e80bffa49f790e2f51f09d68806fcfc0292ca04c819040000",
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
      "Tue, 26 Oct 2021 14:50:31 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
      jobId: "grouparoo-job-149-1635259702250",
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
      "00000002ff85535d6f9b3014fd2bc87b6d1208019248d19a25b4454ac806a4d5344dc81843dd02a6d8a4eaaafcf75d4cd3b5aab43e61fb9e73cfb91f3ca37b56a5688e12963fb4b479fa72c7137486a8c439bc6eac473dbd74b220f037de3aac6fdc6f7fb2c7c50210ac63095cd6051d08de36848af93e1ce60d6f6bdc703e80440363321b18b6698dad99a38fc7960e44418b6cc3aa7ba0df4a598bf96874121fe69ce705c5351343c2cbd7f7d1613caa1b7e478914a3f79a239011a34f54bf169c60c978b5d887e0a015b489698959011efe51d3e4fc7dee21c3e53007f081118a09e16d253b5f9082f02a6379dba8ac68fe8c94cf370714ba1b77156984176d59c5152ee99996628963f95453ed22d86d35cfbfd805db65e4edfc385c5db9dbe570b5dbecb77ea8dd5cb981ab499c145471b58576ae6e3e5c403fa542b24aa947dd73a7fcd221efe3603a02480bda076347b7b131d567499638249b9a5692e93449a689636133d1c96c4227694231f094a862e18a578e638e4d43b7633bb5f578929a463ccdd2716c4db299935886839d041dcfd063c3245d335173c1fa0ea19bc08bdc380af6fe6a19b9aa840cb7855cf7c6ba02de7a94502080fe53d3b18b320e4a5dbb3d3f7283e52af2aedd7ec21b9a63f2143ec08c335c080a68dc40f3246db63c8586217fb975d7005613fb7e0a0a34fff58cba9e772edeb4fc951ec1003bbb527d5118059e7fa9ec9c10d7b86815e4d01f500d966fa136707dfc0d48d8d23e0bfab177839fa87f0a68461b5a91cfa7096015f8fc6f3b6d3e8061f7414748b8c3f210d1a99086f64bc454bd2feca9694c6c132970233fc42cc73eb5adcbd165a425ade44b49fde643a5bd582b5e411084f9fbaa5dc7bf1312904a7b040000",
    ],
    [
      "ETag",
      "L5w0dG7fRRNLIDSpWEBzfw==",
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
      "Tue, 26 Oct 2021 14:50:31 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-149-1635259702250"
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
      "00000002ff8d92dd6e82401085df657a594cd18a56122fb4b5ad09fe14315e34c6ac30200a2cee2e1a637cf7ce526b9bb6497b0333c337cb39078eb089b3006c58c6d1b64071b88a50bde8c24559244ad22de799443000158b88dc65b3cdf8a63e1be1e46e10e72331bb5e6ef7ed3611d25f61cac03e4218631248b05f8f90b11469cde74991668bb233401d723d9c786e7ff8447dca03dd0fa78ed3e93a3d381997c58029b628f97faccd4f06acf9d2c51005663e6a2db9e06bf4555fdb942ccd13ac485e081f259470f92012bcc899e0bc42934ab5deaa541bb756cd6a35cd5acd32894cb8cf54cc3382a71312088a2b96b87c4f36a14180284b721c96d71d8de3a074a2cbfed06bd44b815f01d216c6092efe0649f08ad177f8c0ce197ce758ca8b4c5da84767d4f9ed380af5f3a8878ed7fb414845515d10af3fe84dbcce60acb9f9d97bf7a0508e05a72425ea10ab66fdce6a36ccf75cefb9ce9ade632b51a0013ea3dfe3395660872c91787a03ffee5e497c020000",
    ],
    [
      "ETag",
      "vnWkP/4WOeS8MipOrW+bqw==",
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
      "Tue, 26 Oct 2021 14:50:32 GMT",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `amount` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-150-1635259702250",
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
      "54",
      "61",
      "6f",
      "9b",
      "30",
      "10",
      "fd",
      "2b",
      "c8fbd24a6942201012a9eab294765153d21248576d53628c49dd024eb1e91455f9ef3b4c9336ebb64a4870bef7eebdb3cf3ca30796c7a88f22b67c2c69b1fe74cf23d44054e225ac3267e6d08b56381bdcafc5f8dbf8c28fc3ebebe36340b08a2570b64ae991e06541a8e887d3e6b2e0e50a179c1f41a1a3b6a51fb56dd332ac5e57370c4b07a2a0693266f903d0efa45c897eabb5156f2e395fa614af9868129eedd65b4f466b55f07b4aa468ed6bb64046b43e503d4939c192f1fc389c828352d0624e33cc52f0f04a8da3cffbb59b0c67cd25809f18a198105ee6b2f2052508cf13b62c0b5515f59f91f2f9e6034dddb13b0cb4e124f4828305ce2af2e250c342db060d6d014d252ca573162faacc7cbe7ad0cefcc92564c0c11d16542cb49bafaeef6a3b9af6a3d475936827dac03bd5f66b8c3c2df43c771a68072787dab93f09afb42fb77b18301f532159aeac07384a6965fb657b47ef4fb522600956eae4bcabdbb8ede8bd2889ba24714c2b4a741a454ed4b5b019e9a4d7a19d38a21878b2aaae5838e779cf211d9bf47a7a62e2b6ed9849c7b0ec28b6b065749d8e1d536a46a6a1b7d1a6817e154cd25326565cb07a8bd18d3f0adc79e087de7010b8aa8d0497a93cadcd554dbcf529a14900fda7af4d95651c94aaf31a7981eb0f86c168e6d62332a64b4cd6d347189204a782021a1738a39216973c864d435793e928184dbcc11818eadcafb60881fadf9f5f09c17aa57659aa373a1b4f0681dd510eb690194e4b8579aa3f50bb690162d3f8779981ef0f6e411a17055eff9183766c45ff8b82c2aba8b6b9534495da3632f6a2ce5e64a3cdcf0d3c0d04f7ad5646d7a1ebdfa27a",
      "c9a7092d684e3e1e2d00abc4c7ff8ded1d0630dc62d01112629864222a1552d07aa259a67aa9d98e69b41d07297021dfe5ccb6b93dbaaa4655916634972f2dd57758ed62952ac50e044918446fe49d43f637915d96a045050000",
    ],
    [
      "ETag",
      "i8V8eK/UVAjysLXLKRdUQQ==",
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
      "Tue, 26 Oct 2021 14:50:32 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-150-1635259702250"
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
      "51",
      "4d",
      "4f",
      "c24010fd2fe3d136698bf583848328c12a12ac72308690a50ca5d076eaee540284ffee6c315cf4e06577e67d64dfcbee619d957368c32c4b3f6bd4dbb314f9c50e319a3a67235745a541700059a5a21c2dcdfd79b8899e1f77eb59f4a4afc3fe7b94763aa230c9120b05ed3d2c32cce706da1f7b285581625305d5258b88b795dda3e15bafdf8b0528686e81e17830b8ed0e7a70704ea6e9b45affcb323938b0a2598c0bd458266833549a56987064eb19555439ba866a9da08146dc10a9a6ba529ac815c4f543cff52f5b6110de5c7941107aa2cc29519c5129e2f1ab84032656794c1ba9072d11e86694a68be6fc1238684ad8c96fb2fdcd05bf38ffc45d586ef2f35877cb68469a24ba419bda3b36b823db8aa52deb1a1d48947cc043c6c7fdf00d796e1723dd010000",
    ],
    [
      "ETag",
      "PhsD+5wIMJzkbIKr85GYIg==",
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
      "Tue, 26 Oct 2021 14:50:32 GMT",
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
      "ffedd34b7282300000d0bb64ad4cf869d21da8fc6241aa48ed26832105058510b560a777afd36bd47787f70d32c6b894f4d254fc0c5ec0906958610a6991ed14e5789186eb9b255f8f6373ecefdc2ffba0cd8cb0572bbd806e0bb7a4af73ec097f492c170677d2e433096f699f6f77a5ba613d114116b96f8ebd8e0987ab7a9f16937774df7cceafc687280db9eaf6de40d46d502c18eeb2a37a12a171ab3378bd78685e98968ea28aee18d298cece93dc281c1cdef529cd65099d3830db39968d57fbd3ba89a244c489565d8764694d5444ed90a7d40a04a9fc41a0d352b4cad3d3ff054680f7eda1e3921e1edb7513e311f8ab4f2f43cb1fff6d9e75bc033fbf5e55e80c19040000",
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
      "Tue, 26 Oct 2021 14:50:32 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
            parameterValue: { value: "accounts" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-151-1635259702250",
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
      "ff85536b6f9b3014fd2bc8fbda24e4410291a2354a698b9490959056d33421632ecc2d60864dd7aaca7fdfc5245dab4aeb276cdf73ee39f7c10b79e06542e624e6d9ef06eae72ff72226670414cdf0d5f59ea6fbf5c6595e7b57c9beb97c5adddcd06cb140046f599216550e3d299a9a819cef77fdac164d456b217a98a837b486bde1746c8d2c67668e469689440979bae6e503d27f2955c9f9607012ef67426439d08acb3e13c5ebfbe07134a86a710f4cc9c17bcd01cac8c127aa5f73c1a8e2a25cec77e8a091504750509ea3877fd4243e7f9fbbcf69d1cf10fcc81950c64453aad617a660a24c79d6d43a2b99bf10edf3cd81ecdcb5bb0a0d26f2a628a3921670662454d1483d57605c06db8de1f997db60b30cbdad1fed56d7ee66d95f6dd7fb8dbf33eeaeddc035148d73d05c63619ceb9b8f17d44f402a5e6af5b07d6e958f1df23e0ea625a0b4842e18cdcc291ddaa613a7f18ca5f6d88a5313e2d88e67161dc7267326304962a0c8d3a29a454b51ce26e058b6154769c2cc68625b4964a70944d6d449c774665313498733f2a7e60a2eb8ac84e45d87c85de0856e14067b7fb50c5d5d424a9b5c5d74c6da02de7a54582082fe53d3a18d72814a6dbb3d3f7483e52af46edd6ec26bc8287bdefdc619a7349780685a63f314d41b9160c388bfdcb81708d613fb760a4a32fff142da9eb72edeb4fc951ee2005bbb4a7fc92e0c3cff4adb39216e69de68c8637720c7e541d3879f08c425ed92909bbd1b7c27dd530029d450b2cf8789601df8fc673b2d3e8271f551472abce3ee30d9aab01aba1de2badc23db1e8fcda14334b8561f62c3d1e8d4b536479b110a28d5b1a46ef1b1d24eac91af200ce2f87dddadc35f22781dab7a040000",
    ],
    [
      "ETag",
      "EIx6ULM9AHIGdUuFxCQQag==",
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
      "Tue, 26 Oct 2021 14:50:33 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-151-1635259702250"
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
      "91",
      "516bc23010c7bfcbedb585b65add0a3ee8182a38d9aa3ec81089e9b5aba64d97a41b227ef75da21b63ec612fcdddf577f0ff25273894750609eccae2ad4575bc29d03cdb2245dd0aa3e96864ad113c40c30a22db3c2a0febc95aefd69d2e1f3fb22cde2f868301119abf62c52039415ea2c834242f27a85985b4c6a568ab7aeb3a0fccb1b1c3c5329dcec7d45732b3fd7c359b0d47b307387bdf8b19336cebf87fac6dce1eece52ec51c15d61c6d9646c93d7233b59a9a558d405fcb5671d4e060f7a350b26d9892d2a7891fc6a11ff63a7114dff583288a032285e4cc94b22678b5a08060a46122951fa4091d02942bc93877df771a979933b1e574beec755dc09f8073fc42ae5abf9946b0fa0f66734d303a1ad44f4a928f46ab1206dddbb8df0b2e76f7d21a1bba09a35af480337aa4496920c999d078fe04dfcf940602020000",
    ],
    [
      "ETag",
      "uf2ikYHYsbY34cGMad5jSA==",
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
      "Tue, 26 Oct 2021 14:50:33 GMT",
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
      "ffedd34b7282300000d0bb642d0c8a207407948f46e8f0abe886a16980180b21d01aecf4ee757a8dfaeef0be4185101ec772ea29eec01398ab9529231932c3f69af6541facaa52a4c0ba91737459bec3d9f637f3d5a70e51b357e7982a546d78cd1d3aa90d832414863d4431dcfb9d4e544faa132c31b3b68e7aa105bb531fb479b45aba69eb144ac819cba358b137741bece369683e861782eb5e47b771de950ec7b9b72e613c58e2f4150aa153e42699af79e1f5b9116b735a26b113d0569cdf102c0a0b9946d25fb46ceebacfc30837e9c146869b55dbbc2ec2754a7d49931f1efe2fb0005830c2f15892fb765533cd05f8ab5f4e33c3f7ff36ae38e6e0e717ae05cd0119040000",
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
      "Tue, 26 Oct 2021 14:50:33 GMT",
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
            parameterValue: { value: "accounts" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-152-1635259702250",
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
      "54",
      "6b",
      "6f",
      "9b",
      "30",
      "14",
      "fd",
      "2bc8fbda0402a17948d11aa5748d94908e9056db3421632ecc0dc12936adaa2aff7dd726e9da4d5a3f817dcfb9e7dc07bc902daf323226292f1e1aa89f3fdd8b949c1150b4c0dba8c91aa72cededf6566cec9befae771fda4f930922b86649badb97d091a2a919c8f166dd2d6ad1ec692d440713757abedbe99d7bbeeb8f068eebfa0e122594f982575ba4ff526a2fc7b67d12ef16421425d03d975d2676aff7f6a36bef6b710f4c49fbbda68d32d2fe40f5732918555c5493cd1a1d3412ea04769497e8e10f354b2fdee7ee72baeb16087ee40c2863a2a994f6852998a8725e34b5c94ac62fc4f87cf342d6c12298c5161365b3ab928aeee0cccaa8a2897ade837515ad96d63cbc5a45cb693c5f85c97a761d2ca7ddd96ab159866bebee3a88024bd1b404c3b526d68539857840fd0ca4e295518ff5b5563e7668feef603401a525b4c164e09cd3ded019a5793a60f9d0f3d3dc81341da6039f7aa9c3467de8672950e41951c3a295a8462367e065902759cf7593bedb6309cdcfd364e0513f757dea0c18258733f2547305975cee85e46d87c85d348f83248e36e16c1a07a6849c36a5ba6c8de902de7a54582082fe53d34147b94025ddee791807d17416cf6f8376c20b28287b5e3fe08c735a4a4034adb1790aeaa5c8b061249c2e834b049b89dd9c82928c7fbc10dd73ede24dcb5fe9310e50db55e649d671340fbf183b27c42d2d1b03796c5fc87179d0f4e127027149db24e4eb2688be91f62a821c6aa8d8c7c344b0097cfcb19d161fc1b8faa823159e717798d42aac867687b829f7c81e7adec8f58801d7eaef58dff146a7aee91c3a23eca052c792dac5c74a5bb146be82f40f651386a65b87dfdfb36d1c7a040000",
    ],
    [
      "ETag",
      "Rudu0ll/kkVoU/PZ23jN/w==",
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
      "Tue, 26 Oct 2021 14:50:34 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-152-1635259702250"
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
      "91",
      "514f833010c7bfcbf90a09b0b109c91e9c51872e8b639b5934cbd2c181cc42b12d1ab2ecbb7bd4698cf1c1177a77fc2ef9ffda03bc14550a21ec8afcb541d99ee5a8e75d11a36ab85674d4a2520816a0663991399fdcba6d70bdaea3bb87c53ae839ce63301f8d8850c933960cc2036405f25441f874808a95486b89e04d596d4d67816eeb6eb858c6d1ec86fa52a45d3f5b4da717e3e9151cadefc59469b635fc3fd636470bf66217638612ab04bb2cb5147b4c74d4692a56d61c6d251a99a002039b1fb9144dcda410364d6cd7f76c77d0f33d3f183a9ee73b447291305d888ae0d5820282169af158bc9326f40890a624e3cc7cdf685ca4c6a42ba3d972d037017f02c6f10b3969fd666aceaa3f98cd29c1b8d5a8eea5201f859d8aebf4cffde1c0f9b4bb149db1a69bd0b2410b12468f3429348419e30a8f1fc2d0a1af02020000",
    ],
    [
      "ETag",
      "glHJ1y9FXpIKVSX9300Z9Q==",
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
      "Tue, 26 Oct 2021 14:50:34 GMT",
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
          "SELECT `name`, `id` as __pk FROM `accounts` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `name`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-153-1635259702250",
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
      "000002ff8553eb6e9b30147e15e4fdd9b42440088144aaba2ca51d524a5a425a55d3941863981b8229369da22aefbe83497a59a5554202fcddce39b69fd08615091aa398650f35ad769fee798c3a884a9cc1ead73a7ca05387dfebd772944d8d8d21b3f3eb931360b04625f0b6cc6957f0ba22548c978b5e56f1bac415e75d30ea9ab6d5358796ddb7478ed1efdb060805cdd3192b3620ff2d6529c6ba7e0cef659c6739c525133dc2b7cfebfa635f2f2b7e4f8914fadb4c1d6284fe41ea69ce09968c1727cb0554500b5aade816b31c6a789126f1b7b7de3d86b7bd0cc88f8c504c08af0bd9d40516841729cbea4ab9a2f1135275befa400b6fe64d236d5de02d5d77b4354bd61a16da6a556eb4f3707ea9ad0f8e62adddfef0424f6b397ea02d83c05b44dae7d32fda45385f5e69dfef14d639b8417e428564854a8f709cd326f93021fffdc634022cb1a02db8728c21365d6314a7b14352d7b2e3d4a071ecc68e8dadd820a3011d2431c5a0938dbb52e18217c3d48d0dcb495cc736062419a4341d9a940c9c78e48e86c4341dc34a9c3e41fb0efa533149cf9828b960ed94d06de847de2a0a97c1741279aa8d14d7b93c6b8b6b9a785da7842681f49fbef60dca38243523f783c80b27d3c8bff1da5d9ed10c93dde201f639c5b9a0c0c6154c50d2ea9227303474355ff8913f0f263350a8adbb3a32041aff7c7a1144bb524d59aa379a84e1e40e34b8aaf0ee1f0cea180ed07eff2aee06e7b5a228befa6bfd1f5b009968ff6b0f4f07c1096efdd0f5d20bef50bb14d29456b4201fef349015f0f14d3cde0a20c3bd801c21e11f0e16114d0aa9687bc0d85655d8aa5d6b000648912bf90e732df338c9c6a371a45b5ac8434bedad50b369a05a3c9300847311f8c105a07f01b521e43897040000",
    ],
    [
      "ETag",
      "+uRqeC7oj/Qt9gC0k0tgFQ==",
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
      "Tue, 26 Oct 2021 14:50:34 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-153-1635259702250"
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
      "6d",
      "90",
      "41",
      "6f",
      "c2",
      "30",
      "0c",
      "85",
      "ff8b776d250a2ad390380c543110ab5807a709552135a5d0d659923221c47f9f13a6edb24b6c27ef25dfcb154e555bc0087655f9d9a1be3c9468df5c93a1e96a6bb8286a0d42006845c9ca7ab55b1f5667395d2c06c5709146fa759394e3312b8c3c60236074857d85756160f471855634c8365f02b017e5a6f775364f673c3754b839dd2c97cf936502b7e0d791e7eaf4e798a7eb649664ff59b6b7008eb4cb708f1a5b890e40693aa2b47397cd8846d5181aeab444035eec0f4a4d9d129a28e49d308a0761341cc4fdf8e9b1d7efc73d56d62485ada865f1e69de1c0921575465f9c0d221668df72ccbd5fcfeeb94ea1ce1b2c452e492b1fe9ece54cbafdb96272b168569a18c8a063e9ddb9a6e4582d67b0bac300a4e03f7da9ec7dbe7d03c5d56cd0b0010000",
    ],
    [
      "ETag",
      "lPbThPvcCJJ3d6JN1rMUEg==",
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
      "Tue, 26 Oct 2021 14:50:35 GMT",
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
      "000000000002ffedd3db7243400080e177d9eb30ea58bd8b21942592382c3766978da849c9d2209dbe7b4d5fa3f9aeffdbff1be0b2a4c3508c5d4b3fc11b58b0a8f325eff5afc6ae6ef6a186c524b652686f5b52a2c21b599ca8c796dd5f26c40e5cc64d1f57ac5fe27a37a7d9dda925adea9ce01689a17e52fa61118ca54caf37d652096e05a566b99c47051224e1fde047550c537f66f2030685dc4a443516ebec739d1ab8d148fd3c1edd0491d03c92c585d4ad1824de8920391dfb79cd26225d1ab9966163fbf3575921ed8cd37eda736ee6424c1cd3561cdfb414c6906143a26b35fff4f47f810da073df303a14cd7abba4e8fa06fcad5f8c4b4fd7ff0d8a1965e0e717a707164d19040000",
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
      "Tue, 26 Oct 2021 14:50:35 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-154-1635259702250",
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
      "0000000002ff85535d6fda3014fd2b91f75a2001020409ad08d2150d42978476d33445b67393b90b318d9d5655c57fdf8d53ba5695d6a7d8bee7dc73ee479ec81f51a6644a98c8ef6aa81e3fdd4a46ce08689ae36b74c9c5721238eafb95d017dbdd573a57eec36c8608d1b014dd1f0ae82859571cd4741775f34ad6075a49d9c1441dc71d769cd1c0edbbded8eef75d1b890a8a6c2dca3f48ffadf5414d7bbd93783797322f801e84ea72b97f79efddf77b874ade02d7aaf756b38732aaf781eae74272aa852c67bb081dd40aaa04f65414e8e11f3565e76f737705dd777304df0b0e94735997baf18529b82c3391d795c94aa64fc4f87c752091bff617b1c56551efcba4a47b38b352aa69a21f0f605d84db8db50a2eb6e1661eafb641122d2efdcdbcbbd8ae779b20b26e2efdd0b734650518ae35b3cecd2dc00beaa7a0b4288d7adc3c37cacf1d5abd1f4c434069056d3019db23ea4c6c8f656cccb3c9c065990d8c4dd8d8a50366736f08c39401459e11352c5aca32059b79e00d9351065e32741c9678d9c84decd4660387327b3272c8f18c3c5442c352a88354a2ed10b90957b19fc4e12e58cc63df9490d1bad0cbd65853c06b8f1a0b44d07f6a3a36512151a969f72a88fd70be8857d77e3be135e4943f467738e38c160a104d2b6c9e866a23536c1809e61b7f896033b1ab535091e9cf27d2f4bc71f1aae52ff41807d8d8d5e64ba2385c055f8c9d13e29a16b581dcb707520197558a9e8fbf10873bdae620df767ef883b44f21645041c93f9e25824de0e37fedb4f708c6cd471da5f18eabc355a3c22b685748986a9fd9b80f83719f1870a5dfc586e3e1a9694d8e2623eca1d4cf25b57b8f95b662b57a016110a71f98661dff02d612323179040000",
    ],
    [
      "ETag",
      "SHciD8N1sXPitFOUKaAs5w==",
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
      "Tue, 26 Oct 2021 14:50:35 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-154-1635259702250"
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
      "90",
      "41",
      "6f",
      "c2",
      "30",
      "0c",
      "85",
      "ff8b776da5c2288c4a1c609a185a85581987699a50484d29a47597b8da10e2bfcf29d2ce3b25cff99efd9c0b9cca3a87047665f1d5a23ddf15c8affe92a16b0d3b391aaa1d4200c8aa1072a9302d5f4e3fe99c57a3f1fbe290cdd3f5743211c2e903560a920bec4b34b983e4e302b5aa506c9a4c5bd5db4e05c0e7c617d76fd96239175d51eef57293a6d359fa04d7e0cf982b56db8eff87edf31ac0917619eed162add167692c1d51f3c2afe954d5180c1db556a3830eee1e0a4b6da32c512895b0170fc2def03eeec7e351d4efc7919086b4e2926a81376b09084cac4c46dfb22678a0d3b333a35b5992ee0e7de35e34788847c3e836eb91fc7c965c6c5b0c402bf9b2e79221d92be3f0fa0badcf37c690010000",
    ],
    [
      "ETag",
      "NaeLiKkxLGtP79YIhRGLSA==",
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
      "Tue, 26 Oct 2021 14:50:36 GMT",
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
      "ffedd34b7282300000d0bb642d0e9f914077a4a1828509285070c3841014a9fca562a7772fd36bd47787f70d28637c18d2b1a9780d5ec04c657dcdd6efad86de4ea52d5c9a9dddd8a136d40f57bc166e44340c2bcdb3904f051ef8e526109baede1a24c91cdc6728e0e239c8bd2b54b16c756cabb34e4ca587f219df66a16062e887d6445f235741799590bd604e898d89a9a953e23a1eceabdcdfde27cfeac73dcd6b1893ebce419c1ea263c113915e42633467637793d4234b52cbc0e52c7f44c6598a954185d08c61287799d750d9e86b45c6275b2b3ae4a0af8210b27e7afabfc00af07b5bf67c48cb65bbb2d1f515f8ab9f8e73cb97ffcbb49ef7e0e717a80fec8a19040000",
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
      "Tue, 26 Oct 2021 14:50:36 GMT",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-155-1635259702250",
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
      "0002ff85536b6fda3014fd2b91f771054220bc24b4521a5624086d08adaa698a6cc7c94c434c6d87aaaaf8efbb764ad7aad29a2f897dcfb9e7dc475ed0032f53344284e78f1593cfdfb682a033c434cee136deca8b0bb19db937fdf8fbf2fee9fa7e86af6ec6634070c35278b72f5843894a52a6469b753397a2da632944031235dabedf68f73abee70ffbaee7f92e10152bb2052f1f80fe47ebbd1ab55a27f1662e445e30bce7aa49c5eeedbe75f05a7b29b68c6ad5faa8d90219d5fa42f5472128d65c94e3cd1a1c548ac984ed302fc0c33f6a4ace3fe66e72bc6be6003e70ca30a5a22ab5f10529a828339e57d26645a317647dbefb40eb60114c63878aa2da95498977eccc49b1c6897ede336716ad96ce3c9cada2e5249eafc2643dbd0a9693e674b5d82cc3b57377154481a3312998e53a63e7dc9e4238807eca94e6a5558fcdb5517eedd0fcf3600c01a415ab8349dfede1f6c01d928cf46936e8f82473192103d2f77187b874d865dd94300c3c2b6a59b814a5dff748daa3ddc4ef905ed2a56d372143ea2519f3bbe669f77c8a8e67e84972cd2eb9da0bc5eb0ea1bb681e07491c6dc2e9240e6c0919ae0a7d591b3305bcf7a8a14000fda7a6a38972014aa6ddf3300ea2c9349edf06f584172cc7f479fd0833ce70a118a0b184e6692697228586a170b20c2e016c27767d0a2a34faf5824ccf8d8b772d7fa3c730406357db375ac7d13cfc69ed9c10b7b8a82ce4507f20c9a89029783efe061cec689d03dd6c82e81ed55711cb986425fd7a9600b681afffb5d3de0318361f74948633ac0e5546854a56af10b7d5beb2079d9ed7f790054bfd29d66d774f4d33394c46b663a57e2da9de7ba8b416abd41b088230fdd036ebf817d5be05cf79040000",
    ],
    [
      "ETag",
      "TjrBBojF0Q7T+MYwPYFaHQ==",
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
      "Tue, 26 Oct 2021 14:50:36 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-155-1635259702250"
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
      "90",
      "41",
      "4f",
      "c3",
      "30",
      "0c",
      "85ff8bb9b6a22b64834a3b301863d29858c74e084d69ea968eb4ee1217344dfdef2445e2cc2979cef7ece79ce1b36a724820abca6387e67451226ffc2545db69b6ee68a9b1080120cbd291f34316ef8e0fb347dc1e976b71197d3ddbc5663a7584551f584b48ce5054a8730bc9db191a59a3b329d25dddec0715009f5a5fdcbea6cbf5c2e99a72afd7bbd5ea6eb69a431ffc1973c9723ff0ffb0bdf7011c284bb140838d429fa5357440c54bbfa69575ab31b4d4198516067878280d75ad3444a1ab842321c2d1f84ac4e27612c5b1881ca94949aea871f06eeb0202134b9dd2b75b133c30e8d989d1be1872dd2dfac6a3e8fa464cc6d1efac7bf2f3d9e562d361004aba2f7baa1892426a8bfd0f928b0aef90010000",
    ],
    [
      "ETag",
      "Ejb2UqDBFeSqIN5/0vMsGQ==",
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
      "Tue, 26 Oct 2021 14:50:36 GMT",
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
