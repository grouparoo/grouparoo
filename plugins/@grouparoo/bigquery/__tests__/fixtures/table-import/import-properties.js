const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1635192891311";

nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", { grant_type: /.+/g, assertion: /.+/g })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffedd3db6e82300000d07fe9b3104ac3227babdc2230e9205cf48510a8dcb11654c0ecdf67f61bf3fcc379822ccfe938a6d3a5a503f8044b26ab622e3a6cbb33cbba55d8bde115bc4ee9be28aced413205340faee0c9d387b79ce93148ad878163ce947964a19147c18055bb846168f6b1d666bede10e1115cc8b77e48daaf3118742c90ec1891e55671e6f74ce25a2ccbdd72c6f82a190546ee09c1f234edab687f8acf1d817a303b7d639b70c550f23bbe120bc51caeb37c2f1e9ea45a5a33b8ade6efa2c9bb26919f8c76ed6034afddcd4747b62404c6a1190dd052c5b7b7ff0b6c009d59cde998d6afed4851d50df8ab9f4e0ba3afff3b9a71cac1cf2f61f001ff19040000",
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
      "Mon, 25 Oct 2021 20:14:53 GMT",
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
      jobId: "grouparoo-job-1-1635192891311",
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
      "6f",
      "9b",
      "30",
      "10fe2bc8fbb8e685bc4122456b94d2365a423642da4dd3848c39985b82536cb24655fefbcea6c95a556abf00f63dcf3d77cf1d4fe49e1709199198670f1594fb4f772226670414cdf0f6fae6f3eeeac7606f07fbc76172d729be0e1ebf66e33122b86649bad9e6d090a22a19c8d17ad5cc4a516d692944031335ec863de8f6ed61c71dda5ddb469a843c9df3e21ec97f94daca51ab75946e66426439d02d974d2636a7fbd6aed3da96e20e9892add78a2d1491ad7735bfe48251c545315eaf50bf925046b0a13cc70afe1393f8fc75e626a79b6686e01d6740191355a1745598828922e559559aac64f4444c952f3ec8ca9b7bd3d06222af364554d00d9c5909553452fb2d5897c17261cdfccb65b09884b3a51fada6d7de62d29c2ee7eb85bfb26eafbdc0b3148d73305c6b6c9d9b938f07d44f402a5e18f5505f6be5677f666f87a209282da10e464e7b406db73d8cd3d861a9dbedc7691be2d88d9d3eedc66d36ec412f898122cf881a162d44e152b7efd81d274a1c7cf45cd68b86fd348d681b929ed306368c811ccec8df922bb8e0722b24af1d22b7c12cf4a23058fbd349e89916525ae5eaa22e4c37f0b246850d22e89d9e0e3aca052a69bb677ee805936938bbf1ea09cf21a36cbf7ac019a7349780685aa2790aca8548d030e24f16de0582cdc4be1d83928c7e3d11edb9aee285e5277a8803d4e52af326ab3098f957a69c23e286e69581ecea0fdd46ca735df4e137027145eb24e4fbda0b7e92fa2a80144a28d8c7c344b0097cf4a31dd71ea1b8f8a822159e717398d41aac847a83b869f6c4ee3a9d0e31e052bd89b97dfbe899cea133c2060af5dc50bdf6d8672d56c9130883387cdf7875f80717cc59d274040000",
    ],
    [
      "ETag",
      "HV+vGX6y1Ryx9dj2nK6xKg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:14:53 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1635192891311"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d93514fdb3010c7bf8bf7b854222b7410898776b4b45368a00d4f138a8c7d0906c797d94e5155f5bbef1c588760527849eecebf53eefefe67c79e94912c61f7aafadd82dd7ea9c0df846005aed5ded1ab41e380450c3caf8834d9c5d79fcf4febd9839df3491967b37a7e79737e4e84130f507396ec58a9404bc7925f3b66780dd42650b7b529ba2c627edb84e23a5f2d969794d72843bebc4dd3f1249db27d746894dcf3a2e33fd176b78fd823deafa0040b464098a5b1f808c22fc29a8ed78d8681c3d60a70ac83bb83ca62db708b38a0ca201ec4a3e1497cf6edf42c1ec631711a05f70a0da1b76b1a8f79f45caff0999664f19008dbc5b470d93d375457b25b24848b653e3aeee67b0b7021b035bee8054b659d7f11ef2ff82ac27b52f34f8274534af741151809b68f524dc1a5b4e05c2f89aee04d73c02659967e54c5488b4af6831bd50368bf3900b3341bff4f5af2d73fad2ec6f9f403e13cb9e680e48babe93a1f5f5d07eeeed50893ad07776d914ce520f8293e3a3e3df93e3a7ab1d80f0cb6a3ef24deb61031c1e94f992bcf92926b07fb3fb83515c587030000",
    ],
    [
      "ETag",
      "nOD+JwkSFhrHaBf1OFmHGQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:14:54 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-2-1635192891311",
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
      "22",
      "ef",
      "974de32b1f40825475ac646b241ada105a55d3048ee3309710a7b6d30955fcefbb38a52d9dd44a48e1fcdebb77773e3fa20d2b523442095bdf5754ec3eddf104b51055780da7f6cd4536c9ec22fc1a55e71b32a9768ebfb93a390106ab55126fcb9cb625af04a172b49877d6825725169cb72151db6a9b03bb6f7a96eb99b669824cd23c9bb26203e23f4a9572d4ed1eac3b6bced739c525931dc2b7cfe7dd07ab5b0a7e478992dd63c72e98c8eebb9ea7392758315e9c2ce6e05f492a96748b590e15bc08d3e4db71e60ec3dbce1ac80f8c504c08af0a55570529082f32b6ae84ce8a468f4857f9ea0f9afb53ff2c36561913522d0bbca5ab96b162e9cac0d2582ecb8df1239a5d182be82a6339952be3e6dc8f7ca3e104a1b108437f1e1b9f4fbf183fa3d9e2d2f87eabb1d6514ea825a552b1425712e324a775154fb30afebfa05a801596b40197c3de009b6ecf4bb2644832d7ee27598f26899b0cfbd84e7ac473a8932614834ed5d9b50a17bc48a96d7943b76f0f5cab9f52ec59691fbb8e930e4866baa9451d2b355deaa27d0bfd154cd109932597ac9918ba8982d85fc6d1223c1bc7be6e23c355ae264d717513afeb54d02490dee96b5fa38c83533dfe208cfd687c1607d77e73e353bac66437bf873bcf702e29b0b180092a2a2e780a434397b3791007b3703c0585bec6cb0343a2d1afc71741bc2bf59495fea271148d6f418385c0bb3718d43170d07effcaee1ae795a668be8e9afc0f0d804ce8e525b28e22e7281aa0fdef3dfc5a08b6be7146570b3fba45cd5144332a68413ede09206be0a3b77b78494085b7042e52410c0b4864ed41",
      "046d16916d752707b5e3f56ca4c942bdc5fa3dd33b4cbcce5167a45b5aa8a7869a97a4675843957c260108fb1306e14f40ff01bd1a7b73c7040000",
    ],
    [
      "ETag",
      "3WMfDf3nN+RuHkcDuy4EkQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:14:55 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1635192891311"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff6d51cb6ec23010fc97ed35919a406941e2c023a548282a099c2a848cd9a486240eb6431b21febdeb5051247ab13d3b33d68c7d82bd28b6d0838d480f15aafa214533b787087595194d5b290b8de0001a96923266633f7c1ebcc69d6ad4de8cbf8f75280ef37e9f149a7f62cea077824460b6d5d0fb3841c172245b229436eb063860ead2cee245340d278473b9b5385cce6683e12c80b373f5add7e5fecf310d17c12488feb3acce0eece426c20415161c6d8c52c91d7233b50d35cbcb0c5d2d2bc55143236e8854c9aa644a4a9726aeef7a9dd693d7f55fba5ecbf3489749ce8c90054997314503230dcb22f945fda04d02d51ca96ad2ac471a074a60d3c202af09774b8fb11057ba73478f1817d9cd05fe9d629033c3ae7cdbf2abdf60c3daa07e57924a6ab4fd1e2f5d47d2f637f42e4655e80067f45b6fc25cf0f9077849714f0a020000",
    ],
    [
      "ETag",
      "SaD2N7AFS6uC4bDxvyNiqQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:14:55 GMT",
      "Server",
      "ESF",
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
      "4b7282300000d0bb642d4c6b00a13b283f0147441d3e1b864f2a2116690242e8f4ee757a8dfaeef0be41515588b17cb811d48137c08bb52656a2dfab867dc1f7323390499538b74a5c9ce31779280cff96e0653ab5dbf133f2627e0816dd0987d14ff7304aa81f9e375d33c1933cd583bb514b721d1bf372bc16ea224863e6284ef9deebaec58e6d44bc8fd9b2a5f60aa1ce9dbdbb93d0ac328312da5ae1dd2c673e4fe1b1f96250633baf4e6781ac7b1624b5c5cd9c68a855ba28ed5cc3614e688dfc90da719b04cb6b701230610ba550c74809970e575bddcbd8467c7afabfc00aa0b9c714b11c3fb64359d356e0af7e3ef01e3dfe1ba8a088829f5f22e3266219040000",
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
      "Mon, 25 Oct 2021 20:14:55 GMT",
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
      jobId: "grouparoo-job-3-1635192891311",
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
      "00000002ff85536b6f9b3014fd2b91f7b57910f296a2354ae81aa9900d48ab699a903117e696608a4dbaa8ca7fdfb569b25695da4fd8bee7dc73ee8367f2c08b84cc48ccb3c71aaac3977b11930b028a66f8bafdbb707df750ae9e38137ead0efbbbf03e9bcf11c1354bd25d99435b8aba622067dba09355a22e6925441b13b5edb635b287d6b43f995ab665214d429edef0e201c97f942ae5acdb3d49773221b21c68c9658789ddf9bdbbef77cb4adc0353b2fb56b18b22b2fba1e6d75c30aab828e6db00f56b0955043bca7374f09f98c4976f337738dd753204ef3903ca98a80ba55d610a268a94677565b292d933312e5f1d48e0dc38cbb0c5445eef8aa8a03bb8682554d1481d4a685df91bb7b5f6ae36bebb08d71b2f0a96d78ebbe82c37375bd70b5a77d78eefb4148d7330dcd6bc75696e1e5e503f01a97861d443fdac955ffab37e3f144d4069094d301af746d49af4a6711a8f593ab18771da83389ec4e321b5e31e9b0e6090c4409167440d8b16a2e8d3643c8e0756c428d068600f209ad03e44094d87a35e6a59710ce478419e2aae60c56529246f3a44eefc75e844a1bff5968bd03125a4b4ced5aa31a60b78ed51618108faa0a6a38e72814abadd6b2f74fcc5325cdf3acd846f20a3ec103ce28c539a4b4034adb0790a2a5724d830e22d5c67856033b1efa7a024b35fcf44f75cbb78d5f2333dc4016abbca7c4910fa6bef9bb17342dcd2bc36907d73d065a43cd7a68fbf11882bda24213fb68eff93344f3ea45041c13e1f26824de0b31fedb4f6fa2f0eb48a5478c7cd61526bb00a9a0de2a6d8337b38b6c7c4802bf52e3619d9a79ee91c3a23eca0502f05356b8f753662b53c833088c3f74caf8eff00b76572ad74040000",
    ],
    [
      "ETag",
      "UxAMRMypDwicoRutyvWTjg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:14:55 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1635192891311"
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
      "9b3010c7bf8bf7382295a54d13a43e902ddb22d12425742f53855cfba0ee8c8fd9265314e5bbf74cbb6c5a27d117b83bff4edcfdfde7c07e282359c2ee55fdb303bb7f5783bf09410eaed3ded1ab45e380450c3caf89e472970ac44dbe7e308b6f97ef67f1b4e86eaeae8870e2011ace9203ab1468e958f2fdc00c6f80da04eaae31659f45ccefdb50dc16f972f585f20665c857b75996ceb3053b46a746c93d2f7bfe0d6d77c7883de27d0e15583002c22cadc547107e19d674bc69358c1c765680633ddc1fd416bb965bc4115546e3513c195fc4b30fd3593c8e63e2340aee151a426fb7341ef3e8b9cef1172dc9e23111b68f69e1aa7feea8ae64bf480897ab6272decff737c085c0cef87210ac9475fe59bcdfe08b08ff929abf11a49b527a08aac148b043946a4b2ea505e7064974256fdb13365fafb3d7aa186951c96170a70600ed7727e073b64eff272df9eb8f569fd262f18a709e5c73428ae5f5625ba4d79bc0ddbd1861bef7e03616c9540e829fe2b3f3e9c5e5e4ecd9621f31d88ebe9378db41c404a73fe5abf22ca9b876707c02d7bf3bee87030000",
    ],
    [
      "ETag",
      "advAcooPROhnEV7+918TuQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:14:56 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-4-1635192891311",
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
      "8553fd4fdb3010fd5722ef974dea57fa91369510eb6860914acad20486a6a9751c3b18d238d80e5b87fabfef925068870652a5f4fcdebb77773e3fa23b9ec5688c229edc17546e3edc8a083510d53881531ddf44dfa7611af2c11f8bfe3eb50764da498e8e80c14b95c2eb3ca54d250a49a81a878b56224591632944131235fb4dd3ea0d4cbb3bb2cd9e69824cd194cd787607e21bad73356eb777d6ad448824a538e7aa45c4faf9bcfdd06de752dc52a255fbd0b10d26aafda6e7712a08d65c6447e102fc0b45e592ae314fa18217611c7d3eccdce278dd4a80fcc009c5848822d365559082888cf1a4905556347e4455957b7fd0c299392781b1625c2abdccf09aae1ac62ac57b018f570656c67299df19a7fefcdc58418b8ca754ad8cabaf8eef1835c7f58cd0f39c45607c3cfe649cf9f3f0c2f8725d618dff1b409531559a67558d018e525ad6f73445f7f5d59502acb1a235b81c762c6c8e3a76c4a22161a3de20621d1a45a36838c0bda843ec3eedc711c5a0d365f64a8533917546cc6618c7f688754d46981d59e680c55d4c706730e875231377a94963b46da05f926b3ae52a178ad7b34457be1b38cbc00fbd9349e0546d305ca47a5a175736b15fa7862681f4465fdb12e5029cca8b71bdc0f12727817be9d4bb30a309269bc53d6c03c3a9a2c0c61226a8a93c17310c0d5dcc176ee0cebdc90c14d5055fec180a8d7f3cbe08824d5e4d59575f34f1fdc93568b09478f30f0675587db4ddeed95de2b4a82815bf8aeafc0f35804ce8e525ea1e44fd83c842db9f5bf83510bc87da197d0b1dff1ad5473e6554d28cbcbf1340ae80f75ef5ee8d01155e19b8280d312c2051a50791b45e44beae3ad9a92dcbb4514596fa1536ec59bb899739ca8c744d33fdd450fdc6aa199650a19e4900c2fe78ae7706e85f5026d4e5e1040000",
    ],
    [
      "ETag",
      "tdhbXDUlUi5z6exF95cD0g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:14:56 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1635192891311"
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
      "51",
      "4f",
      "c2",
      "301485ff4b7ddd12068840c203e004941018a04643481977b3b0edceb6c320e1bf7b3bcc20c1275fba9e7bbfd3dd9ef4c0b62259b3265b89f03303b9bf09414fccc60395455ad127c54401b318681e1259de56ea0fc16be9ce7bee7f874fdef8ed453626ad1611caff8098b3e6810502a2b562cdf7034b780c640b84547a990b8be97d6a6ad3993718f548c7b8367a341f0edb9da1cb8e56e18bf8bf6ccb65ba3d3b06a399db73bdbf2c8ba3c536b8f2200009890f66fa54e2067c3d30c1281ea711d80a33e98362399c37428959ca25a24d15bb6a3bb5caadd328d71b4ec571888bd0e75a6042e87c4aa3318d9a471e7e512cac4a80ccb7945090af3b2abb52407e0b231e41ee50a8423bf9b097f83d24a2684f7d1e095ec8da15dde5be882ece77b93e8bf215de8eb93e1fd7450d2a40b92e2a55e358fc5eabb3a7f6582245a4c0a4533a25d545931efda7a9650616f3393d91bed0277dfc0157359fb77f020000",
    ],
    [
      "ETag",
      "2k38FfX07RVHzgKRPZWr9Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:14:57 GMT",
      "Server",
      "ESF",
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
      "0000000002ffedd34b7282300000d0bb642d4c0a854877827cfc827552c76e188c01011bd2242560a777afd36bd47787f70d0a42a894b9ea5acac00b180bcb3389b9e2533faa1a693d7983d2ddf1dc6e6c81d7b0db148a185173d3fd4963b2b3498a9dcada505b5a8612435fc6ba1d4ed5f2a8e6dd3042510752ea9664b0e4cea29f4df7fd7b12e42cdb55dac657947d06c8ca0be8f7f5b546b67f086fee9693d040154b70d3111c95b7375fe8e670a14c422f4d5755fc0c5f9b20585e102f65fc010b946c953a88eb3cc16b77c6dcafd04b10c9f2b3459acb7ecf167c778463c8e2ce7c78f8bfc004d081d782cabcbe6fb71dcf9b80bffab91a39bdfff76921a8003fbf2b6d85f619040000",
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
      "Mon, 25 Oct 2021 20:14:57 GMT",
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
      jobId: "grouparoo-job-5-1635192891311",
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
      "00000002ff85536b6f9b3014fd2bc8fbda3c6842f390a2354ae99a2d212b903e344dc8980b73079862d3aaaaf2df776d9aac55a5f613b6ef39f79cfbe099fce56542a624e6d97d03f5d3973b119323028a66f87a6c578f9be236a0d2819bef9737d5fccaf9f1389b21826b96a4459543478aa66620a7dba09bd5a2a9682d440713759c8e7d3270ecc9f178620f6c1b6912f274c5cbbf48fea35425a7bdde5eba9b0991e5402b2ebb4c1487f7dec371afaac51d30257b6f157b28227b1f6a7ecd05a38a8b72b60d50bf91504750509ea383ffc4243e7d9bb9cb69d1cd10fcc01950c644532aed0a533051a63c6b6a93954c9f8971f9ea400277e52e428b89bc29caa8a4051c59095534524f1558e7fe666d2dbdf38dbf9e87cb8d17058b0b773def2e36abedda0baceb0bd7772d45e31c0cd79a59a7e6e6e105f513908a97463dd4cf5af9a53fcbf743d1049496d006a351ff84dae3fe244ee3114bc703274efb10c7e378e4d041dc6793210c931828f28ca861d15294f184a5f6e864142543a71f0d531846e3f1208ec690b094c683f864046477441e6baee08ccb4a48de76885cfbcbd08d427feb2de6a16b4a486993abb3d6982ee0b547850522e8839a763aca052ae9762fbdd0f5e78b7079e5b6135e4146d953708f334e692e01d1b4c6e629a8d722c186116fbe76cf106c26f6731f9464faeb99e89e6b17af5a7ea08738406d57992f09427fe97d3376f6882b9a3706f2d01e741929cfb5e9dd6f04e28ab649c8e5d6f56f49fbe4430a3594ecf36122d8043efbd1f66b8f505c7c54910aefb8394c6a0d5643bb41dc147b608f9cc9901870addec546fdfebe673a87ce080594eaa5a076edb1ce56ac9107100671f89ee9d5ee1f9372996b74040000",
    ],
    [
      "ETag",
      "21pwOmYSas5eXJQXpAV5Kw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:14:57 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1635192891311"
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
      "f7",
      "9a6a64a50522f19042b7550b2db4e101211419fb929839b6673badbaaadf7de7c0ca3490c24b7277fe9d72f7f73f3bf253284e12f228aa5f2dd8eda70afc4d0896e05ae91dbe8c560e4844c0d30ac9cd497c53dbfa8efea8cb3aa5ebdfca7c5e6ccecf9170ac86869264474a01923b92dcef88a20d601bd3b26d54d16511f15b138aab7c399b7fc3bcd13ce4f3db2c4b27d994eca34323a79e161dff81b6877d449ef4e3124ab0a01884598cd54fc0fc2cace96863240c9c6e2d03473ab83ba8ac6e0db55a0fb032180de2f170149f7d393d8b87718c9cd48c7aa115a2b72b1c8f78eda95cea0d2e49e22112b68b71e1b27baeb12e78b7480867f37c7cdccdf72f4019d3adf2452f580aebfcb3787fc11711fe2725fd20883725641f5481e260fb28610acab905e77a49ed0a6acc019b2c16d95b5514b75af07e702d7a00e9d707e06bb648df9316fdf5aad5659a4fdf10cea36b0e483ebb9aaef2f4ea3a700f2f46986c3db86babd1540e829fe2a3e3d3d1c9f8e8d962173ad80ebf9378db424418c53fe5bbf02429a974b0ff032a2bd76d87030000",
    ],
    [
      "ETag",
      "w71QhrhYaKhfhAavznp/Ow==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:14:58 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-6-1635192891311",
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
      "0002ff8553616fda3010fd2b91f765932824044240aa3ad6665d541ada105a55d3048e7132b7499cda0e1baaf8efbb38a585556a25a4707eefddbb3b9f9fd0032b56688462963e56546c3eddf318b510553885d31fcccd031544d71755e4fef5cf2e64b64eaf8f8f81c16a95c47999d123c92b41a81ccd67ed54f0aac482f3234874e41c598eddb7865d7768d996053249b364c28a0710ff56aa94a34e6767dd4e394f338a4b26db84e72fe79d75b7530a7e4f89929d43c70e98c8cebb9e27192758315e1ccf67e05f492a1634c72c830a5e85abf8eb61e636c3793b05f29a118a09e155a1eaaa2005e145c2d24ae8ac68f48474957b7fd0cc9b78a791b1ccb0548b02e774d932966cb534b034168bf2c1f81e4e2f8d253495b08ccaa571fbc30b3da3e1f881310f026f16199f4fbe18e7e1747e657cbbd3586b3f2554b2a252b142d711e138a3750dcf93f2df5e4f2dc00a4bda808b81e960cb358771120f48e2dafd3831691cbbf1a08fedd824c31eedad628a41a7eaec5a850b5eb80eb192417f6812d32136813c264d886d2549973896ebd85d42076e42d0b685fe08a6e819932597ac9917ba0dfdc85b44e13c381d479e6e23c155a6ce9ae2ea26f6eb54d02490dee96b5ba38c83533d7c3f88bc707c1af9375e73df139a62b2993dc28d27389314d858c0041515977c05434357d3991ff9d3603c0185bec4ab1d43a2d1cfa75741b429f59495fea271188eef408385c09bff30a8c3e9a1ed76cfee066795a668be8e9afceb064016f4f21a750fa2de41e4a0edaf2dfc5a0876be7146d7732fbc43cd5148132a68413ede09206be0a397bb7b47408597042e52410c0b4864ed41046d1691e5ba939ddab5072ed264a1de607dd3de4dbcce5167a4392dd47343cd3bd233aca14abe900084fd09fce01cd07f9862394ac5040000",
    ],
    [
      "ETag",
      "Hi8mNtNTQKuT8xIDKslvgQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:14:58 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1635192891311"
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
      "91",
      "5d",
      "4f",
      "c2",
      "30",
      "14",
      "86",
      "ff",
      "4b",
      "bddd120788b0840b300b6208eaf850620829ddd92c6c3bb3ed2084f0df3d1d669ae0cd7a3e9eb779dfeec476328f98cf3632f92a411d6f1230afb6084197a9d17414986b600e03c31322076f9d45df44f7fd65f63c3c2cc43288dee5a1d723428b4fc838f34f2c9690469af91f2796f30c4896726dd655ed30732cec683a0b479321f51946b69fccc7e3fe601cb0b353cbd6eb62f7ab184d66c13008ff93acce0edbe226841814e402ac8b42e1168419d9809a67450aaec65209d0ac82ab45a2b02cb8427469e2b65dafddbcf3ba8d4ed76b7a1e71290a6e24e684cea7648d19343c0df140f1588b0055959434aebe7b1a3f81daa3d45510db7b95bfbfc454f054f21a685f01013750af1b57eb0734a0635451cdb42cb3fab13738d2fa452145d56053de5e123fa07d05bad937aa0487094ebfec519a4b7ffe0634c788a50f020000",
    ],
    [
      "ETag",
      "BW8VAtd7AYmOGwVcYEdXiw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:14:58 GMT",
      "Server",
      "ESF",
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
      "edd34b7282300000d0bb646d198a68a53b4114f9080814860d93a401a4e5173e019cdebd4eaf51df1dde1d408c49d7257dfd452af00e6628481ce68c66271fb322f55bc728bbb3a5dbc268da473b28602aaa6423ca7bab86ba0c0f5315951f7cdbb311399a5921459807e478437e0ddd788758d1ebb3a804132f451a992eba37b4bd1d3959a29883175f85835b28b15aa68be44669935a9fdb8566114a5455af4ff5ab9397360d7cf486f3703cc3a9e587743f32b4b58a334d2ef1cdaac21723c684ad97d6a792ebe7b8ea4596299ea36b07f61d9583c1636aa3916dd413f7f4f47f8115205373a3a44b6e8fedeb8d24adc05ffda49f1bf2f82f134809053fbfaba0a14419040000",
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
      "Mon, 25 Oct 2021 20:14:59 GMT",
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
      jobId: "grouparoo-job-7-1635192891311",
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
      "000002ff85536b4fe24014fd2bcdec57a140811612b212ac2b59286e29ba8f6c9a99e96d1d2d1dec4c35c6f0dff7762aacc6443f7566ee39f79cfbe833b9134542c68489ecbe82f2e9cbad64e48480a619be7eef0bd776fddf773fd3cca63797ecb6675f3c4e268810354bd1ed2e87969255c9418d37eb7656ca6a474b295b98a8e5b6ba4367d01df5bc51d7e97691a6204f17a2b843f28dd63b35b6ed83743b9332cb81ee846a73b93dbedb0f3d7b57ca5be05ad96f156d1451f6879a5f73c9a916b2986cd6a85f292863d85291a383ffc4849dbecddc1674dbce10fc203850ce6555e8da15a6e0b248455695262b193f13e3f2d581acfd853f8b2c2ef36a5bc405ddc28995504d63fdb403eb3c5c2dad7970be0a97d368be0ae2f5ecc25f4edbb3d562b30cd6d6f5851ffa96a62c07c3b526d6a9b9057841fd04941685518feae75af9a53ff3f743a90928ada009c66e6748bb5e67c452e6f2d473062ced00631e7307d4611d3eea433f61409167440d8b16b2703d0a6c34f0e284a65edceff7216689cb629e8c1cc7a3d419824bf627e4b1141ace84da49259a0e91eb701ef971146e82d934f24d0929ad727dd618ab0b78ed51638108faa0a67d1d151295ea76cf83c80fa7b3687ee537135e4046f9d3fa1e679cd25c01a26989cdd3502e65820d23c174e99f21d84cecf2105464fce799d43daf5dbc6af9911ee1006bbbda7cc93a0ae7c13763e780b8a27965200fcda12e2315796d7aff1781b8a24d12f263e387bf48f314420a2514fcf36122d8043efbd10e6b8f505c7c54511aefb8395cd51abc8466838429f6c81ef5861e31e052bf8b399e73e8599da3ce085b28f44b41cdda639d8d58a58e200ce2f003d3abfd3f40f976e474040000",
    ],
    [
      "ETag",
      "K4i7/7EZkXfg/ahPbj2/Hw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:14:59 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1635192891311"
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
      "c7bf8b794da5662d8546e221ddba5129b4ac0d0f08a1c8b52fc1c5f165b6535655fdee5c021434268597e4eefc3be5eeef7ff6ec5119c922b656c59f1aeceea400ffbb0996e06aed1dbd2a340e58c0c0f38248bcadebb1d8c0101f0df46fd77f4dfa103f5d5c10e1c403949c457b962bd0d2b1e86ecf0c2f81da04eaba34599b05ccefaaa6b84a97b3f92fca4b944d3ebf499278924cd92138364aee79d6f25f68bb3f046c83eb25e460c1086866a92c6e40f859b3a6e365a5a1e7b0b6021c6be1f6a0b05857dc22f6a8d23beb85a3c16938fe763e0e0761489c46c1bd4243e8cd8ac6631e3dd74b7ca225593820c2b6312d9cb7cf2dd5956c1769c2d93c1d0ddbf93e025c08ac8dcf3ac15c59e75fc47b035f45f897d4fc8b20dd94d25d50014682eda2549571292d38d749a2cb78551db1c962917c56c5488b4a76835bd50168bf3d023f9345fc3f69c95fef5afd88d3e927c27972cd11496757d3551a5f5d37dcfdab11263b0feeda2299ca41e3a7b03f3c3f3d1bf55f2cf61d1bdbd177226f6b0898e0f4a75c2acfa29c6b078767fcf8971d87030000",
    ],
    [
      "ETag",
      "oYuu9cje4okne0YbxnThAw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:00 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-8-1635192891311",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85537f4fdb3010fd2a91f7cf269536497fa61262053216a9a45d9a82d834b5b6e36486240eb153d4a17ef75d1c0a744820554acfefbd7b77e7f323bae37984c688f0e4be62e5f6d3ad20a88598c2099c66997d2e4fffce9df2b457d93fafec8769584c8e8f81c16b95c45991b22329aa9232395e2eda4929aa0297421c41a2a3d19135e8f62dc71e3956d7b24026591a4f797e07e23f4a1572dce9ecaddb891049ca70c1659b8aecf9bcb3b13b45296e1955b273e8d80113d979d7f32415142b2ef2e3e502fc2bc9ca15cb304fa182176144be1e666e739cb513206f3865985251e5aaae0a525091c73ca94a9d158d1f91aef2d51fb470a7ee5968ac53b559b78c358fd60696c66a55dc19df82d9a5b18676629e32b936aebfbb816b341ccf3796beef2e42e3f3c917e322982de7c6e98dc65a4d32708f98543cd7de212629ab7d9fa6e3bdbd925a801596ac0157437380ad91e990980c693ceaf6496c32424664d8c75d6252a7c77a11611874aaceae553817391bda3d33b2fa26617114754d27a6a4cbc880b0fe7010f77b241ad1a1630fd1ae851e4aaed839978590bc9911ba0ebcd05d85c1d23f9b84ae6e23c655aace9be2ea265ed7a9a04920bdd3d7ae46b900a77ae09e1fbac1e42cf4aedce68ea72cc174bbb8875b8e712a19b0718933a658792922181a9acf165ee8cdfcc91414fae2e67b8644e35f8f2f82705be8292bfd45932098dc80069725defe87411d831edaed5ed95de1b4d214cdd751937fd300c8825e5e22fb20ea1d4403b4fbbd835f0bc19e37cee8c7d20d6e507314b098952ca71fef049035f0d16bddbf1da0c2eb0117a9208605a4b2f6a0256b169167ba9346ed9866cfb4912697ea0dd6ef3afb89d739ea8c2c63b97a6aa8793b7a863554c9671280b03fbee75f00fa0f569620d5b9040000",
    ],
    [
      "ETag",
      "mm2DsBzP9rB4u2ZV2wLTpA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:00 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1635192891311"
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
      "91",
      "5f",
      "4f",
      "c2",
      "30",
      "14",
      "c5",
      "bf",
      "4b7d650bfb036e243c00998a59d04d78504348299731d8d6d976e842f8eede0e3363f0a5edb9e777d37bda1339a4c5860cc83a4d3e2a10f54d022ad28718649529895bc90b09a44340d104c9e0b11e478b094b52ffed8b45bba8bb7ef5a2e11009c97690533238916d0ad94692c1fb891434076ccbd4110955975adc854fa339ca9c6fb49c2dc270340e0372eeb4fc6a551e7e1ba6b379701fc4ffb52ccf1db2e7eb18b620a060a0af2f05df0353539d4cd2bcccc090bc120c2469e0c64804af4a2a3837b0627886d5777a966f7bbee5581672196754a5bc4074f182a311c515cd62fe89b9888b80688e1871dbac472cdb3ddfb4ec2687965633de1fe0d6317daf05fa5780ef9a4ebff5ed2bdff57cb3dbfaaef6973fa38d6b05f259708c294127ec5ed24eb87e01852fa344051dc228fed343aa2efafc0d2d47ead204020000",
    ],
    [
      "ETag",
      "EJyBQUCcgi9ZxcQhQ0bY8Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:00 GMT",
      "Server",
      "ESF",
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
      "4b7282300000d0bb642d8efc9bee443eca47330449eb86a1692a084220a260a777afd36bd47787f70d724a9910d9a5ad58035ec1942b704ee7017fb1dc63f1469852d3c3ea0eb1e46c028a4597b7c71d86613bc46b54effdc6b0866d342de4e4bc8f8c289486b53d16b98e8aad321d8eb5b061ea8cc83fad0dc94e4574d38c4b1d3b13b6554795613eea9d58ed2391c22491cb765923bafcda0d5a1728d8d44f01a9a0d7121cbb28bcca27357311779dcf64a1719c71f3da697d95dc692817de1936bc6e4c2f20fe3b293799de59a9699e1d22f9d5eee621d2b4dac7fce9e9ff0233c0465ef64c64e563bbaa4338037ff5b3cbc4d9e3bfc5f29ef5e0e717cf39432919040000",
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
      "Mon, 25 Oct 2021 20:15:01 GMT",
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
      jobId: "grouparoo-job-9-1635192891311",
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
      "fd",
      "95",
      "c8fb4a2f697a97aaa56ac312a94dd9340556ab5564bb93ac218d4bec7011eabfefd8a12c0809f2d0c49e73e6cc9c993e935b516cc9983091dd55503e7dbb918c9c10d034c3dbb338b87abc1bae66fef9ea7aa6ae2fe2f99c3e4c26881086a5e86e9f4343c9aae4a0c69b75332b65b5a7a5940d4cd41835dcbed773479de1c8f55c17690af274218a5b24ffd57aafc6add651ba994999e540f74235b9dcbddeb7ee3bad7d296f806bd57aafd84211d5fa54f37b2e39d5421693cd1af52b0565023b2a72ace03f71cb4edf676e0aba6b6608be171c28e7b22ab4a90a537059a422ab4a9b958c9f89adf2cd0759fb0b7f163b5ce6d5ae480aba8313674b354df4d31e9cb368b57482f06c152da771b00a93f5ecdc5f4e9bb3d562b30cd7ced5b91ff98ea62c07cb7526cea93d857840fd2d282d0aab1e9b6ba3fce24ff071288680d20aea603268f7a93b6c8f58ca063c1d7a3d96b681b1211bf4a8c7da7cd485ee9601459e15b52c5ac8820ff049dd7ee20da1937447fd6e42073d9ef43803e632fce977c8e1843c9442c35ca8bd54a276885c4541ec2771b40967d3d8b72da4b4caf5bc2ecc34f0b6468d0d22e8939e0e262a242a19bb8330f6a3e92c0e2efd7ac20bc8287f5adfe18c539a2b40342dd13c0de5526ed130124e97fe1cc1766217c7a022e3dfcfc4786eaa7863f92b3dc6019a72b57d93751c05e10f5bce117149f3ca42eeeb0fd3462a7253f4e10f027145eb24e4e7c68f7e91fa2a82144a28f8d7c344b00d7cf5473bae3d4271f15145693ce3e67065347809f50609dbec0b7bd476bd4e9b5870a93fc4ba5ef7e899c96132c20e0afdd250bdf6d8672d56a957100671f8a1f5eaf00fbea6a6",
      "2a74040000",
    ],
    [
      "ETag",
      "FTIWxq8OCEHOXCsXPTDDaw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:01 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1635192891311"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d93514fdb3010c7bf8bf7b854222b141a898714baad5368a10d0f6842916b5f8299e30bb6535455fdee3b07d6a13129bc2477e7df29777fffb363bf94912c616b553db560b79f2af0372158826bb577f46ad038601103cf2b227fd4a7f3cfa9a82f9fdc9d78e038cad6e5c5cdf939114e3c40cd59b263a5022d1d4b7eee98e135509b40ddd6a6e8b288f96d138aab7c399b7fa3bc4619f2f96d96a5936ccaf6d1a15172cf8b8eff40dbfd3e628fb85e4209168c80304b63f111849f85351daf1b0d0387ad15e05807770795c5b6e116714095c178108f8627f1f8cbd9381ec631711a05f70a0da1b72b1a8f79f45c2ff1999664f19008dbc5b470d93d375457b25b2484b3793e3aeee67b0b7021b035bee8054b659d7f11ef0ff82ac2bfa4e61f04e9a694ee832a30126c1fa59a824b69c1b95e125dc19be6804d168becbd2a465a54b21fdca81e40fbcd01f89a2dd2ff494bfefaabd5659a4fdf11ce936b0e483ebb9aaef2f4ea3a70f7af46986c3db86b8b642a07c14ff1d1f1d9c9e9e8e8c56217186c47df49bc6d216282d39ff25d7996945c3bd8ff06d5502aab87030000",
    ],
    [
      "ETag",
      "Jm7N+AcmDqsYchao6LbfCQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:02 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-10-1635192891311",
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
      "0002ff8553fd6f9b3010fd5790f7cb26e503120849a4aacb5ad6b1a6a425a41f9aa6c418c3dc02a6d8a48aaafcef3b4cd336ebd44a91c8f9bd77f7eeec7b44772c8fd018852cb9af68b9f974cb43d44254e2044eaf8bd968edff34af53cf3c75260fb3d32b1d5f1c1c0083d52a81b322a56dc1ab9250315ecc3b49c9ab02979cb72151dbd0dbc6a06f19a3de7064f40d037482a6f194e577a0fe236521c6ddeeae7627e13c49292e98e8109e3d9f77d7bd6e51f25b4aa4e8ee97ec4215d17dbfe861ca09968ce7078b3918a8042d9734c32c050b2fca28fcba9fbac370d64980bc668462427895cbda16a4203c8f5952952a2b1a3f2265f3d51f3477a6ce51a0ad52b95eb5e083855ce638a375c0a2958685b65c1677da777f76a6ada0b998a554acb4ab1f8eef680dc7f5b485e739f340fb7cf8453bf1678b73eddb8dc25affc90cbe222a24cb95ab008729ad1d3d0dce7d7b5db5004b2c68032e6d7d808da13e0ae3d026f1b06f85b14ec37018da16ee873a1999d48c428a4127ebec4a85739e5b96a95b466846913e18da035b370d3b0c7b3da33fb2a8ad0f2382896558146d5be8a164921e335170c19ae9a12bdf0d9c65e02fbca349e0a836625ca5f2b8315737f1daa7842681f44e5fdb1a651c2ad557e17a81e34f8e02f7d2696e7f4a134c36f37bb8ff18a782021b97304149cb331ec1d0d0f96cee06eecc9b4c41a1aef47cc71068fcebf145106c0a3565a9be68e2fb931bd0e0b2c49b7f30f03130d176fbaadc254e2b45517c1535f9d70d800ce8e525eaed45e65e3440dbdf5bf8b510ac4053195d2c1cff0635473e8d694973f2f19b00b2023edce4dd5a0117160bca080931bc4022ea22a4a4cd4b64996aa5518ff45eafaf23452ee51bac6f1bbb91d739ea8c34a3b97ceaa8592b35c41aaac433094078409eeb9d00fa1756580adcd6040000",
    ],
    [
      "ETag",
      "XpO9vRJ4XlN4KEAwOKW0aQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:02 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1635192891311"
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
      "0002ff7d92616bc2301086ff4bf6512b46abb3821fd43975886eb5c2d81089f574d5b657935411f1bfef52476538f625bdf7ee79e9e52567b60be2156bb265b0d9a7204f0f1bd06fa67041a5a156f4493056c08a0cb4d810792844b0ff1878d382a77647de78779ff4a4dd6a11a1fc2f88046b9ed93a8070a558f3f3cc621101d9427d20429f12239e4793b64732c29591e3d968d4ee8c7aec52bcf142e94556e7aea9e70ec7fdff6d8b45b2bb398663afd7efb97f59e69722dbe2d2853548887d305b2712b7e0eba10944892809c152984a1f14cbe06cb091982642225ad4b178d9e2f56a8d3b9586c3ab9c1318a22f748031b1b329edc6346a11ba78a43c984d80cc4a8a669d9d076a576a4e8957b28b18f902f28081ca35cff6fd6578ac969c460e4c7d11062297f53bdeb14bd57a3eef090db9a8dcc176c32995f3791735a835ca55deb18d63fe73b1ce89c6af1229250526a0f235ac2e9a00e93f4d2d5328325fd0eb1804faaa2fdfc683b52d7a020000",
    ],
    [
      "ETag",
      "v+meqZHTS+Tskw18XRDtOA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:02 GMT",
      "Server",
      "ESF",
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
      "0000e0bbf4d992283f95bd0911840251603878692a2de054408a2298dd7d66d798df1dbe27a079ce85207d73e235f800235de8522ee176695865553bbb07ee7d31b7aa608b967e688d2e3b52bc20cbbb1b38251a123aaf545931d7f81495db03dec4b56943dc7d9de160df4213a7ee4091a21d9a762313716f5a9c94780d61319dafa5c543a23913fbce9c933db03cb6f5dbb5407815b2c8bd277b53efe5c24e50964622e668afd58d300d0f7691b5d1a7d45b29d0bb5c8b5d198c0afa8475a65e10a553d8162e9bc6a6e36b39f54762997ec5985129b6f4f6f67f8119e08ff6d871418eafedb2aaeb33f0579ff463cb5fff0d4e3bde819f5f826496b819040000",
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
      "Mon, 25 Oct 2021 20:15:02 GMT",
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
      jobId: "grouparoo-job-11-1635192891311",
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
      "536b6f9b3014fd2bc8fbb826400809448ad628a16da4847484b47b6842c631cc2d608a4dabaaca7fdfb569ba5695da4fd8bee7dc73ee832774cbaa3d9aa094e5772d6d1ebfdcf0149d202a710eafe7a1735ddf59b3f1edd75f95fd6321aeb0c81ea6534030c512b8ac0bda13bc6d081593ddb69f37bcad71c3790f12f56cbb678f1cd7f6079e6f3bb60d3c418b6cc5aa5b60ff95b21613d33c6af773cef382e29a893ee1e5cbbb793f30eb86df502285f956d20415617e2cfaade0044bc6abe96e0b065a419b8496981560e13f739f9ebe4ddd67b8ece700be67846242785b49650b52105e652c6f1b9d154d9e90b6f9ea80b6c12a98c706e1455b5649854b7a62ecb1c4897caca971166dd6c6323cdb44eb59bcdc84c9767e11ac67fdf966b55b875be3fa22880243e2b4a09a6b4c8d537d0be102fa7b2a24abb47aac9e95f2738396efc7a208202d68174cc6d608db9ee5a7593a2699e7b86966d134f5d2b18b9dd422fe900ef729c5c0d3a29a852b5e0d9ccc1d79be9bb8969f25c374384a3cc71b24242563df1e5a7be2d8e870821e1a26e982899a0bd675085d47cb3848e26817ce6771a04bc8705bc845674c15f0daa3840201f4414d0715651c9454bb97611c44b379bcbc0aba09af688ec9e3f60e669ce1425040e3069a2769b3e67b68180a67eb6001603db1cb6350a0c9ef27a47aae5cbc6af90b3d86012abb527fd1368e96e1b9b673445ce1a2d590fbeea0cac858a14c1ffe001076b44b82beef82e827ea9e229ad18656e4f3610258073efdd58e7b0f58d87c901112eeb03a442811d2d06e8598aef699ed5b8e6db948831bf92e3618dac7a6a91c2a232d69259f2beaf61e0aedc45af10282204c3fd4cd3afc03e9f8a03f77040000",
    ],
    [
      "ETag",
      "GN3Wpq0A7k+Zn1XDsVasfw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:03 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1635192891311"
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
      "000002ff8d93614fdb301086ff8bf73595ea153288c48776ebb6aaa185360c69138a5cfb9299393ecf768aaaaaff1d3bb0328d49e14b72777e4eb97bfd664f7e492d484636b2fedd82ddbdabc15fc76005ae55de859741ed8024043cab0349bf371b3fb7e9b7cdf07662d6d57ceed287eb8b8b4038fe131a46b23da92428e148f6634f346b20b471546da3cb2e4b88df99585c17abd9e24bc81b14315fdce4f978924fc92139360ae659d9f16f68bb3b24e41e372ba8c082e610673116ef81fb595cd3b1c62818386c2d07473ab83ba82db68659c441a80c281dd074744acfdf9f9dd311a50154c89997a8037bb30ef3118f9ea9153eb8a8c92810b68bc3c655f7dc86ba14dd26319c2d8af4a41bf06f80718eadf6652f5849ebfc937a7fc06715fe25157b2318ae4aaa3ea8062dc0f651d2944c080bcef592e84a66cc119b2c97f96b55b4b028453fb8953d80f2db23f0395f8eff276d30d88b569fc6c5f415e17cb0cd11296697d37531bebc8adcddb311263b0feeca6270958368283a3c393bfd900e9f3cf611a3efc277326f5b480867e157f92a3dc92aa61c1c1e0198516e2d88030000",
    ],
    [
      "ETag",
      "1ZmbtKr6Vb0WBpSfKKs6wQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:04 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-12-1635192891311",
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
      "3010fd2b91f765d38024040241aa3ada666d341ada105a55d3048e71529710a7b143c52afefb2e4e2965955a09899cdf7bf7eecee767b464d9020d50c492c792169b2f0f3c420d44254ee0d41c752fbe5b4ff7a35fdee4efc9d231dd5877af8f8e80c12a95c0ab3ca54dc1cb825031984e5a49c1cb1c179c372151d36c374ddbea9a4ebbef989669824ed0341eb16c09ea7b297331d0f59d772be13c4929ce996811be7a3dd7d76d3d2ff8032552e887963ab808fd63d3e394132c19cf8ea61328a014b498d115662994b0572ea21f87a95b0caf5a0990d78c504c082f335995052908cf62969485ca8a06cf4895f9e6034ddc917b1a6a73c6c50ce7f9bc019f8bb98685369be54bed6730bed4e6d053cc522ae6daed851bb85acdf17c6deafbee24d4be1e7fd3ce83f1f44a3bb95358639f10aa58502159a66a087194d2caff654cdefbcba9045862416b70d6336c6cf60d278aa31e89fb56378a0d1a45fda8d7c5566410a7433b8b8862d0c92abb52e18c676d8718bdc8e8c7985806890d8c4dbbd3c7b6ddb7e00c9b0e5dc4a6436cb46da0a782497ac644ce05ab67856e032f74676130f54f87a1abda887199cab3bab8aa89b7754a6812481ff4b5ad50c6c1a91abce7876e303c0dbd1bb7beeb114d30d94c1ee1b6639c0a0a6c5ce01595b4b8e40b181aba1a4fbcd01bfbc31128d4055eed18020d7e3fef05e126575396ea1f0d836078071a5c1478f31f0675d81db4ddbeb1bbc169a9288aafa23affba069009bdeca3f641d4398860b87fb6f06b2058f8da195d4fdde00ed547018d694133f2f94e0059019fbedbdd23022e3c23b0111262d840222a1352d07a13d94ab552ab1da3d36e77912217f21d66d9bdddc8ab1c5546baa2997ce9a87e446a8815548a571280b040bee79f03fa0f9661db3ac4040000",
    ],
    [
      "ETag",
      "1L5H+3whLKISzBk91Ef/EQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:04 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1635192891311"
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
      "5b4fc23014fe2ff5d12dd88144487800332e711932e5454348196773b0edd4b6d3e0c27ff7741879f0f2d29ef35d92ef6b6bb6cfca2debb34d96be56a00e172998851d22d0556e345d124b0dcc6160444acaf27218964fb30fcec763f05aadbbe9c40b1683012974fc028560fd9a2519e45bcdfacf352b450164cb50af8594a432076981d17c1ef8c3908002b716089741301c053e3b3adfaef55aeecf9659f8e84ffce837cbeae8b01d6e2248404119830d2115ee203633db4f8b42e6e06aac540c9a35e2864815565228449710977b2eefb6af79cfbbe9f136e724cc311626c392b4cb07cac60c1a9147f84ef5588704aa19a969d29c6f041b554153c32ebc49f727ddfd412722d767defbdfdeb1f4ea2bd5e86040df2ba48a1a6cbbab53d35bb4ed0dbd8af53a2c16f453d3cc9cf6e327f4dab8fc06020000",
    ],
    [
      "ETag",
      "n+ANnZIz11FFe2//KHG2LQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:05 GMT",
      "Server",
      "ESF",
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
      "000000000002ffedd3597282300000d0bbe45b1814a9d03fd906ca2e62303f198a2950f64520edf4ee757a8dfaeef0be4192a6641cf1d496a401af80263b894d59ab13653d2bd4f72eaf98a28cc59a6132ec612b8a681d9ba3f84531d534ffee0a973e44a74a320f1e0cac6521fdf1484ac75119d1375c6796dc46dfeb01b639ea37b99f71224fb44f2b9b3878a070e182a8850caf467d4e542b66b6ca1a28f5ae0ea5fc3a9bedf69ccb1ff3c5b3afa8e56fe36ab91e6a607b7f81f44d70387b40bab12f1c7357284699f0ae6ad4b1ebd3e59cf990540a9c3b5909338490a6234eb985ecd3d3ff053680ac5d319011178fedbc20491bf0571f4fb4238fff32490632809f5f9cac3faf19040000",
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
      "Mon, 25 Oct 2021 20:15:05 GMT",
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
      jobId: "grouparoo-job-13-1635192891311",
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
      "0000000002ff85536b6fda3014fd2b91f7b53cd2100248684510da4810d6105a4dd314d98e93b98498c60e13adf8efbb764ad7aa52fb29b6ef39f79cfbc833daf23245234478fe58b3eaf8ed4110748198c239bc6e1fbd09bf9ecf6e693a3ff0eed353b02dc8643c0604d72c8977fb82b5a4a82bcae468b36ee795a8f7b812a205895ab6d3b2fb8e6b0f2f0743dbb16de04956640b5e6e81fd47a9bd1c753a67ed762e445e30bce7b24dc5eef5bd73b8ecec2bf1c0a8929df7921d50919dcf45bf178262c54539deacc1402d5995b01de60558f8cf4cc9d5fbd46d8e77ed1cc0074e19a654d4a5d2b620051565c6f3ba3259d1e819199b6f0e68ed2ffc696c5151d4bb3229f18e5d5829563851c73db3e6d16a6905e17c152d2771b00a93f5f4c65f4edad3d562b30cd7d6fd8d1ff996c2a460866b8dad2b730be102fa29938a97463dd6cf5af9a541c1c7b16802484bd60413afdbc7f6a03b2419f16836705c9275192103e2b9d8215d3aecb15e4a18069e11352c5c8a92daeea09f629c783dcf4b7aa9ed26c41bd2c4266ecfa18e432e87049d2ed0df8a2b36e3722f246f3a84eea320f69338da84d349ec9b12325c176ad618d305bcf5a8a040007d52d34947b90025ddee208cfd68328d833bbf99f082e5981ed78f30e30c1792011a57d03cc5aaa548a161289c2cfd1980cdc47e9c83128d7e3d23dd73ede24dcb5fe9310c50db55e68bd6711484d7c6ce1971878bda400ecd419791f1429b3efd0620ec689304dd6efce8276a9e2296b18a95f4eb6102d804befcd5ce7b0f58d87c90910aeeb03a546a115ab16685b8a9f6853decba7db78f0cb8521f629eeb9d9ba673e88c6cc74af55251b3f750682356cb57100461faa169d6e91f6591251477040000",
    ],
    [
      "ETag",
      "kq7AiGFDQcdFvi0zzIklbA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:05 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1635192891311"
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
      "000002ff8d93614fdb301086ff8bf99a0ad2d20291f8d0b26eed145ad6a6486c4291b12fc19de3cb6ca7a8abfadf7709aca031297c49eececf2977afdfecd84f65248bd883ca7f5560b74739f86f75b0005769efe855a271c002069ee744fe5e3f7627df276766f2542dbf76fb57b7abbbe3fcf29208271ea1e02cdab14c81968e453f76ccf002a84da0ae0a933659c0fcb6ac8bcb64319d7da1bc4059e7b3551c0f47f198ed8343a3e49ea70dff81b6fb7dc0d6f8b0800c2c1801f52ca5c535083fadd774bc2835741c565680630ddc1ce416ab925bc40e553a61af130e7afdf0a27b7e11f6c290408d827b8586d8d592e6631e3dd70b7ca22d59d823c236316d9c35cf0dd5956c36a9c3e92c199c3603be05b81058199fb68299b2ce3fabf7177c51e15f52f30f8274554ab741391809b68d5265caa5b4e05c2b892ee56579c046f379fc5e15232d2ad90e6e540ba0fde6007c8ee7c3ff494b067bd5ead33019bf239c27db1c90647a3d5e26c3eb9b9abb7f31c268ebc1dd58245739a80d159e9c9ef7cf0627cf1ebbc2da77f49dc8db0a022638fd2a13e5599471ed60ff07126e60ba88030000",
    ],
    [
      "ETag",
      "zjh2HZH7nHwuSJ25CVUY/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:06 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-14-1635192891311",
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
      "eb",
      "4e",
      "db",
      "30",
      "14",
      "7e95c8fbb349a54dd236974a887590b1482585340575d3d43a8e9319d238c40eac437df79d3814e8d040aa941e7f9773f1f103ba614582462866d96d4dabcd876b1ea30ea21267707a7df1e7d76f63721adc7f5fc88b71c82613fb2a3b3c04066b5402afcb9c1e085e57848ad17cd6cd2a5e97b8e2fc008c0e8cc18161f587866b3aaed1370cd0099aa71356dc80fa9794a518f57abbdcdd8cf32ca7b864a24bf8fae9bc7767f6ca8a5f5322456f3f650fb288dedb498f724eb064bc389ccfa0805ad06a49d798e550c2b332893fef5b77195e773320df31423121bc2e64531658105ea42cab2be58a460f4895f9e20f9a7913ef38d2568c8b252ecb55475be558c86581d7b40958b2d2b0d096cbf246fb1a4ecfb4153498b29c8a9576f5cd0b3dade5f881360f026f16691f8f3e69a7e1747eae7d5928acf31f77a82fa142b2425517e138a74d658f03f45f5f5b23c0120bda824b5bb7b0e1e86e9cc636499dfe304e751ac74e6c0f713fd6893ba08324a61874b271572a5cf0c2e93bb16e0f8869bb2936c1c034a96e0eadd4b67567e824ba4512cb895db4eda0fb8a497ac244c9056ba788ae423ff29651380f8ec791a7da48719dcb93b6b8a68997754a6812486ff4b56d50c6215373257e1079e1f838f22fbd760b2634c36433bb853d48712e28b071051394b43ae3090c0d9d4f677ee44f83f10414ea6acf770c81463f1e9e05d1a6545396ea8bc661385e80065715defc83411dd6006db72fd25de2bc5614c55751eb7fd702c8805e9e23732f1aec4516dafedcc2af83e029b499d1c5dc0b17a83d0a694a2b5a90f77702c80a78f745ef9e1770e181411a2121860d24a249422ada6e225bab565ab5ab5b03d7418a5cc957986538bb91371e8d235dd3423e76d43e2f35c406aac513094058",
      "a0c00f4e01fd0b24a26f42de040000",
    ],
    [
      "ETag",
      "jQzhx1LGNwZYtQARiLL7Wg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:06 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-14-1635192891311"
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
      "7d92cd6ec2301084dfc5bd12a9018a0a12074011a58a420950f547283261931a4c36d80e2d42bc7bd7a10a87b65c9cddf137ce7ae423db886cc53a6c29d25d01ea70938299d822045d48a3e99363a681d518189e12f9927de9a67c9bec86fef3eb2eebfba20ebdb4db2542c71fb0e5ac73648900b9d2acf37e6419df02d904ea88e73951e6905ba13f1efb5e2f20618b2b2b0473dfeff57d8f9d6a954b726da2b2ae7cd359380a86d76d51946f2e8e5130f3865ef8976571aab1352e4348404116839d3d57b886d88c6c2c9a6f73098ec642c5a05909971ba9c222e70ad121c5719b8edb6adcb9edfa7ddb6db82e8112636e0466c4cea7341b3368b80cf19352614d025459524049b9ee4936aa80f21ab67904b547a1abde2da7fd179fc65c0a5eb5ad5f74c2a5bee01e3797a67efde8011ad009aa55a534ad61f173a7fe81b69f1452401a6c36b7e79c0668b3a3df74ec693516737a1e0fc29cfbd3373c9b71c17b020000",
    ],
    [
      "ETag",
      "Xnxs4lZQqGLVYqnBLi2eAg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:06 GMT",
      "Server",
      "ESF",
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
      "02ffedd3cb7282300040d17fc95a1c1541e84e9e4a46ea0b04369990468ca0401215ecf4dfebf437ead9dfe5fd0698102a04927549afe003f478620ec9103686e5154c78e41038f7b8bf227f2f771bf24c9eb815303deae9a1f4d4dca87c349e277edc9e743f83fe8118d9723e0e23cfbded2f6db7ab5fe162f6c0b330939566f2b072bee0767d6393cda25ab72e5c0537d729ace97521a7305ee997949f236b3b7e1844746ecbcb91c302af5744ae25c88d94d3fd98217d97c77163977c7f37b1d70466ce462d0e26ca28ac0bb5fb9cf3a4d6a1adc882e5347065b28cd4654ecef6f0ededff020340bb86712a107bddae6aa639007feb23d937f4f5bf4531a71cfcfc025952b1a319040000",
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
      "Mon, 25 Oct 2021 20:15:07 GMT",
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
      jobId: "grouparoo-job-15-1635192891311",
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
      "ff85536b6fda3014fd2b91f7b54052de486845342d4810ba108ab6698a6ce726751b621a3b4c55c57fdfb553ba5695da4fb17dcfb9e7dc479ec983281232224c648f15944fdfee2523670434cdf075c81f7992a8bbcdeca6d3dbfe3accaaeef5d5643c4684302c4577fb1c1a4a56250735daac9b5929ab3d2da56c60a286d76d78bd76d71b9e0f865edbf390a7204f17a27840f69dd67b356ab54edacd4cca2c07ba17aac9e5eef5bd75386fed4b790f5cabd67bc916aaa8d6e7a2df73c9a916b2186fd668a05250c6b0a322470bff9909bb789fba29e8ae9921f8203850ce655568630b537059a422ab4a9b958c9e89b5f9e640d6fec29f460e9779b52be282eee0cc49a8a6b17eda837315ae96ce3cb85a85cb49345f05f17a3af39793e674b5d82c83b5b39df9a1ef68ca72b05c67ec5cd85b8017d44f40695158f5c83c1be59706cd3f8ec510505a411d8cfb6e8f7a0377c852d6e7e9a0dd65a90b8c0d58bf4bdbcce5c30e741206147956d4b2688135b37e427b5d1a0f3bbc1f77584a6396f4699c006bb39eeb75dbe092e319f95b0a0d9742eda5127587c8369c477e1c859b603a897c5b424aab5c5fd6c64c016f3d6a2c10419fd47434512151c9b47b1e447e389946f35bbf9ef00232ca9fd68f38e394e60a104d4b6c9e867229136c1809264bff12c1766237a7a022a3dfcfc4f4dcb878d3f2577a84033476b5fd927514ce836b6be784b8a579652187fa60ca48456e4c1fff201077b44e427e6cfcf027a99f4248a184827f3d4c04dbc097bfda69ef118b9b8f324ae31d57872b23c24ba85748d86a5fd843b7df3e77890597fa43ace3f54e4d33394c46d841a15f2aaaf71e0badc52af50ac2204e3fb0cd3afe03a6499a9277040000",
    ],
    [
      "ETag",
      "9cqcddshUHP46WZvHu5GFA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:07 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-15-1635192891311"
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
      "da",
      "3010c7bf8bf71ab47a144a23f5216c6c430bd042aa3d4c5564ec4beacec965b6438510dfbde7b463d33a297d49eecebf53eefefee7c07eea5ab1986d75f9ab05bb7f5782bf09c11a5c6bbca35783b5031631f0a224f2f69be1c562fb5e2fef47edf86231d137c9f7c7ab2b229cbc874ab0f8c00a0d463916ff38b05a54406d124d5bd5799745ccef9b50dc64ebf9f20be515aa902f6fd33499a633768c4e8d4a789177fc1bdaee8e117bc0ed1a0ab0504b08b334161f40fa7958d389aa313070d85a098e757077505a6c1b6111075419f0d1808f87237ef96172c9879c1368500aafb10e0a6c683ee6d10bb3c647da92f12111b68b69e3a27beea8ae55b74908e7cb6c7cde0df83720a4c4b6f6792f5868ebfcb37abfc11715fe258d78234857a54d1f5442adc0f651bac98552169ceb25d1e5a2694ed874b54a5fab522b8b5af5833bdd0318bf3b019fd355f23f69c9607fb4fa9464b35784f3649b1392cd17b34d962cae0377f76284e9de83bbb648ae72100cc5cfce27a38bf1d9b3c73e62f01d7d27f6b685884941bfca57ed595c08e3e0f8047d500f9888030000",
    ],
    [
      "ETag",
      "UKl1fMb/iNh5u67M8iQAWw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:08 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-16-1635192891311",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8553616f9b3010fd2bc8fbb2496980040844aabaac652d524a32425a55d3941863985b822936eda22aff7d8769da669556092939bff7eedd9d7d4fe88e95291aa384e5f70dadb79f6e79827a884a9cc3e9e31fc398f325d6f5e8dc73aac1d496e262727c0c0cd6aa04de54053d12bca90915e3e5a29fd7bca970cdf911243a321df886b6e90d5ccf1c9a26e8042db2292bef40fd5bca4a8c757defddcf39cf0b8a2b26fa846f5ecef587815ed5fc961229f4434b1d5c84fe7fd39382132c192f8f970b28a011b45ed10d660594f0aa4c93af87a9fb0c6ffa39901f18a19810de94b22d0b52105e662c6f6a95158d9f902af3cd1fb4f0a7fe69acad532ce9baa7ad59bad6b0d056abea4efb1ecd2eb5353494b1828ab5767de147bed67182505b86a1bf88b5cf275fb4f368b69c6bdf6e14d67bce06fe29159295ca3dc649415be7e70105efafa515608905edc0d5c870b0e91a5e92252392b9433bc90c9a246e32b2f130318867512b4d28069d6cb32b152e7969bab6e558d8f58837208e618f0c6a8d920c9b046796612406b61362782edaf5d063cd243d63a2e282755342d75110fbab385a86a793d8576d64b829e459575cdbc4db3a253409a4fff4b56b51c6c1a91d7910c67e34398d832bbfbbe529cd31d92eeee19e335c080a6c5ce30d95b4bee4290c0dcd678b200e66e1640a0a7575f33d43a0f1cfa75741bcadd494a5fa4593289adc8006d735defe83411d8e8576bb377657b8681445f155d4e57fe80064422fafd1e020b20e2207ed7eede0eb2178ea9d33fab1f4a31bd41d4534a3352dc9c76f02c80af87063f7eb035c5820b0111262788144b426a4a6dd4b641bd54aa7f60cd7b6d5be4b5ccb7798e35afb91b739da8c74434bf9dc51b73e6a882dd488171280f080c2203c07f42fb86cd1c0be040000",
    ],
    [
      "ETag",
      "wx00PoUa//RG96p2L5tsHA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:08 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-16-1635192891311"
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
      "30",
      "10",
      "c7",
      "bf",
      "cb",
      "ed",
      "15128ace28890fb8113473663279d9624c851351a0ac2d5b8cf1bbef8a0b7bd1a469efaebf6bef7f7786635ea5e0c136cfbe1a94a7870cf5d21811aaa6d08a8e5a540ac102d43c2332f5439e542f61ee07d37d381aee3f5e63b61c8f8950c91e4b0ede19763916a902eff30c152fd1a4716d1ed1a7da78cffe2a20af14a9f116f17cee4fe6015cac8edf6ceae33f3f5bac8230886ea5ac2f161cc436c21d4aac1234dfd7521c30d133a34cf1b22ed056a291092a68e1f62293a2a9b914c2a688cd06b47a8f6ce40e47acc718818548b8ce45456cfc4eb581169a1791f82161d02740b62669dcb5fb37855dc7756cc7b51dd68a3121d6d678131a74d0e03ee476907b1fea7750df40ebbf6227278dea4d0a52aed08876ae0d7812a62934114fcb062d48388d6e9aebab7ff905177a4bcd17020000",
    ],
    [
      "ETag",
      "dAGacnKGiAEHhG98hZMU1Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:09 GMT",
      "Server",
      "ESF",
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
      "d34b7282300000d0bb646d1c1522d29d3fc062051441dd30180226291012ac62a777afd36bd47787f70d528c8952495b73528137d0a523b38ffbae98ccac8255e13e54316fd4d48f47f6c030105b6de166dc4cbcba1ea43b647de443e37830185feb733aa87cb283d05add6ecb28c8d292235c5e37d1c22b87fec3aad4a7b66c4bf930932f97da71d7840f889437c3f3d6c8dbc2b8e80543149e9d80d7bad71c2ef482cfd345776ddc3b86d97b644782cb2d3533694e852e1ab10e179c2557271f43b60fd6d1d0399db4dcc97372bc8db29d4c0b66c79aafbbc10655137aefbfbcfc5fa007c85d504954429fdb35649a3df0573f693b419eff67249544829f5fa067d18619040000",
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
      "Mon, 25 Oct 2021 20:15:09 GMT",
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
      jobId: "grouparoo-job-17-1635192891311",
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
      "00000002ff8553ef6fda3010fd5722ef6b21a44009486865345d91206c49a0daa629729c4bea368969ec307515fffbce4ee95a556a3f11dfbd77efdd0f1ec91daf52322109cfef1ba81f3edd8a849c105034c768e9f4edcb6d1f6af6f7e6e797e5a0acbc2de4d32922b866495aee0ae848d1d40ce4641376f35a343b5a0bd1c1421d67d471cefa43677cea8e9dbee3204f42912d797587ec1ba5767262db47ed6e2e445e00dd71d965a27c8edbfb537b578b5b604adaaf256d5491f6fba29f0bc1a8e2a29a6e4234d048a86328292fd0c27f669a9cbf2edde5b4ece608de73069431d1544adbc2124c5419cf9bda54259347626cbef820a1b7f4e691c544d194555cd1124eac942a1aab871d5897c17a652dfccb75b09a458bb51f87f32b6f35ebced7cbcdca0fadeb2b2ff02c4593020cd79a5ae7e6e5e303f553908a57463dd261adfc34a0c5dbb568024a4b6893f1a877461db7374eb264c432b73f4cb21e24899b8c86b49ff4d878008334018a3c236a58b412d569cace7a3dd78d9d3463f1c0a54e4c47f81c627038d2d924238713f2a7e60a2eb8dc09c9db0991eb60117971146cfcf92cf24c0b196d0a75d11ad30dbcf4a8b04104bdd3d34167b940253dee851f79c16c1e2db65ebbe125e4943d84f7b8e38c1612104d6b1c9e827a25521c18f1672bef02c16663df8e494926bf1e899eb976f162e4cff40817a8ed2af34bc22858f85f8d9d23624b8bc640f6ed876e23e385367df88d40bcd1b608f9bef1821fa40d0590410d15fb78990836890fff6ac7bb472c5e3eca48856f3c1d26b508aba13d216eba7d628f7be3d170400cb8566f72aeeb1c87a66be88a5042a59e3a6aef1e1b6dc51af90cc2246edf37c33afc033525781a77040000",
    ],
    [
      "ETag",
      "m13/FV3erczhZBL4mnEVeg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:09 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-17-1635192891311"
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
      "300c85df45bb75807af96963a017ce966de99ca44bdcdd0c85a14ab4a74e9634494ee00679f7516e9b0eeb00f7c626a98f3079747c20bf84e2242177a2fadd806ddf55e0bf856003ae91dee1cb68e58044043cad90bc2aa7633eaf53db7ebdda9bedf2a1fdee47fbcb4b241cfb093525c9819402247724f971208ad6806d4ccba656459745c4b72614b7f966b1fa8c79ad79c857375996ceb2393946a7464e3d2d3afe0d6db7c788dcebbb0d9460413108b318abef81f94558d3d1da481838dd58068e7470775059dd186ab51e6065109f0fe2c9701c4fdf5f4ce3611c232835a35e6885eccd16e7235e7b2a377a8f5b92788884ed62dcb8ec9e3bac0bde6d12c2c52a9f8cba01ff062863ba51bee8054b619d7f54ef197c52e15f52d23782785542f64115280eb68f12a6a09c5b70ae97d4aea0c69cb0d97a9dbd564571ab05ef0777a207907e77023e65ebf47fd2a2c15eb4fa98e6f35784f3689b13922f96f36d9e2eaf0377fb648459ebc15d5b8dae72100c159f8d2ec6e793b3478f7dd0c177f89dc4db0622c228fe2a5f84274949a583e31fee8eaf9488030000",
    ],
    [
      "ETag",
      "Jf95dEmAryKJwpSMzyVt4w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:10 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-18-1635192891311",
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
      "02ff8553fd6f9b3010fd5790f7cb26e50308251f52d5651dcb9052d21192ae9aa6c418c3dc124c6dd32eabf2bfef304ddbac532b4522e7f7deddbbb3ef1e5db322412314b3eca6a262fbee8ac7a885a8c2199c164bf21de7c1d9d524338b65f67bb2fd33f5ef8e8f81c16a95c49b32a76dc92b41a81c2de69d4cf0aac482f336246a5b83b6e5f68eaca13d185a3dcb029da4793a65c535a87f2955ca51b7bbafddc938cf728a4b263b846f1ecfbbb776b714fc8a1225bb8725bb5045765f2f7a92738215e3c5f1620e062a49c58a6e30cbc1c29332893f1ea6ee30bce96440be658462427855a8da16a420bc485956099d158dee91b6f9ec0f9a7b53ef3432d6095674dd32d639966a55e08d0e58b236b03456abf2daf812cece8c357497b29ccab571f1d50b3da3e1f881b108026f1e19ef4f3e189370b638373e5d6aacf5bfd4e02ca152b142fb8a709cd3dad3c3e8fc9717560bb0c29236e0aa6fbad81a98c3388dfb241df48ee2d4a4713c88fb47b8179b64e850278929069daab36b152e78d13789ebb87dcb7629e9f569e2388e4dd2a1457b9693a4766cdb2419b83d07ed5ae84e30453f335972c99af9a18bd08fbc55142e82d371e4e936525ce5ea7363ae6ee2b94f054d02e995be7635ca3854aa2fc30f222f1c9f46fed26bee7f4a334cb6f31b780129ce25053616304145c5194f6068e87c36f7237f168ca7a0d0977abe674834fa71ff2488b6a59eb2d25f340ec3f12568b01078fb0f063e5c18c1ee59b925ce2b4dd17c1d35f96f1b0059d0cb53641f44ce41e4a2ddcf1dfc5a0896a0a98cbe2dbcf0123547214da9a00579fb4d0059036feef27eb1800bab0565a482185e209175112268f312d946b7d2a88796e9ba36d264a15e6003b3bf1f799da3ce4837b4500f1d358ba5875843957c2401080f28f08309a07f017101fb1ad8040000",
    ],
    [
      "ETag",
      "nVcXalNMjGg0nVgxGyzLIw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:10 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-18-1635192891311"
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
      "000002ff7d92416f82401085ffcbf6a8a480d6208907b5446dac6951939ac69815068a024377175b63fcef9dc5965e6c2fecbcd9efc1ec5b4e6c9fe42173d93689df4b10c79b18d4b32e7c9065aa242d05e612589381e23191b79fce2a7a5c0d9dc4c95ecc46231d1cc651bfd72342066f9071e69e5894401a4ae6be9e58ce33205bc8957e893a165addf7171ea90c43ad66cbe9b43f987aecdcacf9944bb5a9eada345ff893d9e87fdb6653ec7f1d93d9c21b79fe35cbfadc643bdcfa1081803c003d75217007819ae84024cf8a140c89a50840b20aae36628165c105a2411dc3720cabd3bab3bab6d3b55a9645608a015709e6c42ee7341b53a878eae307e5c1da0488aaa468a2ea79a0b66ddaa661da86695587d1ad0710074c64adad6ae6aba64e0dcd039e26bc969dbf3d760d79fa667e84fdb7a35d43435420231461dd696bdbfafba883236d3f09a4dc24e8c8cc4b7c43d491d2c75c254a68b280d3ff324ed4459fbf0036d371488c020000",
    ],
    [
      "ETag",
      "/x8YfMYC8i8mX0++lBvHfA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:11 GMT",
      "Server",
      "ESF",
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
      "4b7282300000d0bb64ad0c42c398ee1a0a5204a58a61e8261320c8d740c00f767af73abd467d7778df80a5291f063a8a9a9fc02b989886945459774b6c1f4bb7d43d61f439a3bb6333302db1c7b42dd7bd9751bcaa8dba88c43284c17e63e21eba9e563696a8bdf3e51af6761c990e8e99b4f2a2f1638db1bc5de86602e3973ccecf1f060936fea76cd1bc13f671b8dbe43add9b8239c6f6724db3a2463874b884279ad02a10fdca727d77ab0704a1cd3d731c57bd8d721e59aae654d55b72397496d8fb4432a2c61a2705aba6056cd52ff49ebbc11266a4bb1dd699f2f4f47f8119e0b7ae947ca0e563bb0e119a81bffa749c3afef88f39935c829f5f3af7f55b19040000",
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
      "Mon, 25 Oct 2021 20:15:11 GMT",
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
      jobId: "grouparoo-job-19-1635192891311",
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
      "14fd2bc8fbda84409e448ad628a16ba4846c40564dd3848c73616e01a7d8a4aaaafcf75d9ba66b55a9fd84ed7bce3de73e782277bcda932949797edf40fdf8e556a4e48280a239be7aa97b2cb7c5c3385c44bd4a295f16d5723e9b21826b96a4e5a1808e144dcd404e775137af4573a0b5101d4cd471bc8e33ea0f1dcf9d784edf719027a1c8d6bcba43f65fa50e726adb67ed6e2e445e003d70d965a27c79b78fae7da8c52d3025edb79236aa48fb63d1af8560547151cd76111a6824d40994941768e13f739f5ebe4ddde5b4ece6083e72069431d1544adbc2144c5419cf9bda6425d327626cbe3a90c85ffb8bd862a268ca2aa9680917d69e2a9aa8c7035857e17663ad82ab6db899c7ab6d90448b6b7f33ef2eb6ebdd2688ac9b6b3ff42d45d3020cd79a5997e616e005f5f72015af8c7aac9fb5f2738356efc7a209282da10d26e3de883a939e9766e9986593fe30cd7a90a693743ca4fdb4c7bc010cf62950e41951c3a215d6ec0d5d976634194dd8301978bd34a1ae47131865ce90eedd41e6f6c8e9823cd45cc192cb8390bced10b90957b19fc4e12e58cc63df9490d1a650cbd6982ee0b547850522e8839a4e3aca052ae976af82d80fe78b78f5d36f27bc869cb2c7e81e679cd14202a2698dcd53506fc41e1b4682f9c65f22d84cecfb3928c9f4f713d13dd72e5eb5fc851ee300b55d65be248ac355f0cdd839237ed2a23190637bd06564bcd0a64f7f10883bda26213f767ef88bb44f21645043c53e1f26824de0d35fedbcf788c5cd4719a9f08eabc3a4166135b42bc44db5cf6ccf7186fd0931e05abd8b8d06deb9693a87ce082554eab9a276efb1d056ac912f200ce2f403d3acd33fc68a87a777040000",
    ],
    [
      "ETag",
      "9b2vmOlw7RCS0nttEslnDA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:11 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-19-1635192891311"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d93514fdb3010c7bf8b794d25b2424b23f190b26e440b6d698378985064ec4b30737cc1763a5555bf3b9700058d49e125b93bff4eb9fbfb9f1dfba38c6411bb57e55303767b5482bf6e8315b8467b47af1a8d031630f0bc24723b1d27eba7712c1e547a819b5bf36ba946d7e7e74438f1001567d18e150ab4742cfabd638657406d02755399bccb02e6b7755b5c67ab64fe93f20a659bcf6fd2349ea633b60f0e8d927b9e77fc17daeef6017bc4fb151460c1086867a92d3e82f049bba6e355ad61e0b0b1021cebe0eea0b4d8d4dc220ea83208278370343c0d27dfce26e1300c09d428b8576888bd59d37ccca3e77a857f694b160e89b05d4c1b17dd73437525bb4dda309967a3936ec08f0017021be3f35eb050d6f917f5dec05715fe2535ff224857a5741f54829160fb2855e75c4a0bcef592e8725ed7076cba58a49f5531d2a292fde046f500da6f0ec08f7411ff4f5a32d8bb56dfe36cf689709e6c7340b2e46ab6cee2ab65cbddbd1a61baf5e09616c9550e5a4385c72767a7e3d1f18bc72eb0f51d7d27f2b68180094ebfcaa5f22c2ab876b07f06e4123bce88030000",
    ],
    [
      "ETag",
      "yB7ISq7AchiLCovWnKPi6Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:12 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-20-1635192891311",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85537b6fda3010ff2a91f7cf26f10a81f090aa8e42d645a2a10ba155354d603b17e636c469ecd0a28aefbe4b52dab24aad8414ecfb3deece774fe44e2421191226d6f73964bb2fb792911a014dd778cbd5bdb61ed3ec2a996c27ec31199f4df3f1c3c9092244c1527493c6505732cf38a8e162de5867324f6926651d85eaed56ddb4adae3968f707a6659ac85310475391dc21fbafd6a91a369b07efc65aca750c3415aac1e5e6e5beb96d37d34cde02d7aa796cd94417d5fcd8f434969c6a219393c51c13c815644bd85011630aafcc907d3f966e08ba69ac11bc151c28e7324f7491164a709944629d67a52a193e9132cd377fc8dc993ae3c058298d9aab9ab112e1caa0ca582ed33be3873fbb305658512462502be3faa7e33b4685713d63e179ce3c30be9e7e33cefdd9e2d238bb2963b5831c661082d22229fd03ca6228bc9f5be4be7f9882403555500597bd964dcd7e6bc022d6e351dfeab2a8058cf559af4b2dd6e2830e7442061479ba502f59349109a3516875a35ec7b2fb2dda651ddb8c78c443c67ad06500369826d8bc45f635f290090d13a152a944d52772edbb81b30cfc85371e054e594644f3584faae48a22dee6a9b148047d50d7be880a894e45d35d2f70fcd13870af9cea9da7b0a67c37bfc7978e68ac00d134a31bd0905dc8109b462e6773377067de688a8cf2f12e0f084586bf9f5e09c12e2dbbaccb2f19f9fee8063934cbe8eebf18e66177c87effc6ee8ac6790929f1e5a9d2df560162622dafa7f6d1a97374b2c9fecf1e7f3582c35e39935f0bc7bf21d5950f116490f0cf6702c165e0d39d3d2c10627185d006e7500b9c40ae0a139e41358962539652b10766bb6359a40467fa5dac6bf50f2d2f340a45d840a29f2baa16a86c6211cad50b088338409eeb9d63f41fc1070aa3c0040000",
    ],
    [
      "ETag",
      "csqt3xprVnDvDbxnCBLuCw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:12 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-20-1635192891311"
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
      "91",
      "614fc2301086ff4bfde8a6746c6425e103d3454980e018d1c41052c63107db3adb4eb310febbd76154225fdabbb7cfb5776f0f649f951bd227eb2c7daf41365729e8271344a0ea5c2bdc2a512a201601cd5324d3e0d9e13b76fd5234531d07de2d8bf2fb74304042256f5070d23f906d06f94691feeb8194bc002c539a171532baa94c1a8f26e13c1e4e6628156263a4e9623c1e06e3901cad9faad5aadaff168da671f81046974a96478becc43a822d482813304d5452ec20d123339fc2d773b095a865028ab4707b904a51575c0a61a3623b1d9bf6ba1e658ecf689752047391709d8912d9c51c7b235a689e47e213c7232e02b20d71d26dbb7ea04c6f3cbfe3798c323764ed3caddab6f98f638c9e73bdcb5ccfc51bff72ce65cea77ef78c730db7fc6e3c6834a89914e882026340e764c69d300669344ecb1a2c9270fcccc74c9ff2e3175d9c7e0029020000",
    ],
    [
      "ETag",
      "gBW2aj9+XmyNtTB5/9RlDg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:12 GMT",
      "Server",
      "ESF",
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
      "edd34d7282301800d0bb64ad8e4523d29da2888a31f2e334dd6498f443d228d0402ce2f4ee757a8dfaeef0ee281502ea9a37a58202bda25b6a390331d856d3b977ca7dd149d1014d6b95b271531df666a88efe107266e10c43d6d889535c5adc2a315bb6fe8e88f07392db5aac64e6dbfd7772ab4a1a63db5ad35d9abd493e5de6e3f24cdca40958255cde951f67f5755840624c10464094adc3e3e87b433a0fd896526f318a359eb931a38768620c8cf96a1617666773f7aabb8d2c70842fa750052521e77dd246ac7c298a6b22d68ee5ae4d7fb26856274687f9d40be4e0e9e9ff423d046d2535d45c3eb68fb0e3f4d05f7ddedc2a78fc9f43aa41a39f5fe2ab8af519040000",
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
      "Mon, 25 Oct 2021 20:15:13 GMT",
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
      jobId: "grouparoo-job-21-1635192891311",
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
      "4fdb3014fd2b91f79536495f3495aa5195302ab5e94853d8344d91e3dc6486242eb103ab50fffbae1dca4048f029b6ef39f79cfbc813b9e3554a2624e1f97d03f5fecbad48c8090145737c4d137b7f156ca332eddff61eff7ae18f44f5afa6534470cd92b4dc15d091a2a919c8c976d3cd6bd1ec682d440713757a6ec71df587aed71b7b6edf759127a1c896bcba43f61fa5767262db47ed6e2e445e00dd71d965a27c79b71f7af6ae16b7c094b4df4adaa822ed8f45bf168251c54535dd6ed04023a18ea1a4bc400bff996972f6367597d3b29b23f88133a08c89a652da16a660a2ca78ded4262b993c1163f3d5816cfca53f8f2c268aa6ace28a967062a554d158ed77605d84eb95b5082ed6e16a162dd641bc995ffaab5977be5e6e57c1c6bab9f443df523429c070ada975666e015e503f05a97865d423fdac959f1bb4783f164d4069096d303e7546d41d3b5e9225a72c1bf78749e640928c93d321ed270ef306304813a0c833a286452b51c1281d392e83789481130f7acc8b93d419c4a76e9a0e5cc7f3304a0e27e4b1e60aceb9dc09c9db0e919b7011f971146e83f92cf24d09196d0a75de1ad305bcf6a8b040047d50d34147b94025ddee4510f9e16c1e2daefd76c24bc829db6fee71c6192d24209ad6d83c05f54aa4d83012cc56fe3982cdc4be1f83924c7e3d11dd73ede255cb5fe8110e50db55e64b3651b808be193b47c4352d1a0379680fba8c8c17daf4e137027147db24e46aeb873f49fb1442063554ecf36122d8043efdd58e7b8f58dc7c94910aefb83a4c6a115643bb42dc54fbcc4672df1d1303aed5bbd860343c364de7d019a1844a3d57d4ee3d16da8a35f20584419c7e609a75f807d5db934377040000",
    ],
    [
      "ETag",
      "db/yQNUTmd3j2wx9RXbt3Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:13 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-21-1635192891311"
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
      "301086ff8bf7359508850e22f12165eda8145a48c32436a1c8c497cc9de34b6da7a8aafadf770e50d09814be2477e7e794bbd76f76ec8fd48245ec5156eb16ccf64b05eed60729d856394baf06b505163070bc22b2bc8d87f7f554ffd0eb6996ac2ed793ab9fe9d3c50511b6f80d3567d18e951294b02cfab5639ad7406d05aab6d6799705cc6d1b5f5c66e96cfe9df21a85cfe77749128f9309db078746c11dcf3bfe136d0ffb80adf03185120ce802fc2c8dc115146ee6d7b4bc6e140c2cb6a600cb3ab83ba80cb60d378803aa0c8ec341381a9e86e7c767e7e1300c095458702751137bb7a4f99843c7558a4fb4250b8744982ea68dcbeeb9a1ba14dd263e9ccdb3d14937e07b801705b6dae5bd60298d75cfeabd822f2afc4b2afe4990ae4aaa3ea8022dc0f451b2c9b91006aced25d1e6bc690ed878b1483eaaa2854129fac18dec0194db1c8069b288ff272d19ec4dab6f7136f9405847b63920d9ec7ab2cce2eb1bcf3dbc1861bc75606f0c92ab2c784385472767a75f4747cf1ebb44ef3bfa4ee44c0b012b38fd2a57d2b1a8e4cac2fe2f13d221fb88030000",
    ],
    [
      "ETag",
      "fQA3YmFnVnqFTLjCqEHZRw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:14 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-22-1635192891311",
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
      "eb",
      "4edb30147e95c8fbb349a54dd2343495102b90b148252d690a42d3d43a8e9319d238d84ea70af5dd77e250a0631a52a5d4fe2ee7e2739ed0032b53344209cb1f6b2ab69fee79823a882a9cc36d7aede2cbdbcdd0c26aa36edcd9596607fdfce40418ac5149bcae0a7a24792d0895a3c5bc9b0b5e5758707e044647b67d64b9fd81e5d943cfea5b16e8242db2092b1f40fd4ba94a8e7abd7dec6ece795e505c31d9257cfd72dfdbd8bd4af07b4a94ec1d86ec4114d9fb7fd0d38213ac182f4f167348a096542ce91ab302527855a6c9d743eb2ec3eb6e0ee40d231413c2eb5235698105e165c6f25a6857347a423acd377fd0dc9ff8e7b1b1920a3c571d635560a996255ed3e6c0d29581a5b15c560fc6b7687a65aca0bc8c1554ae8cdbef7ee41b2d27088d4518faf3d8f87cfac5b88ca68b997176a7b1ce3fbd21b7944ac54a9d598c938236593d372f78ff648d002b2c690b2e8f4d175b43d34bb2e49864c3fe20c94c9a24c3e47880fb89493c873a694231e854e3ae55b8e4a539703d82713f73863649f090a41919d85e96d9c44cddbe6b9ad471078e87761df45b30452f98acb8646d07d16d14c4fe328e16e1f938f6751919ae0b75d126d714f1364f054502e93f75ed1a947188d43c4710c67e343e8f831bbf9d8009cd31d9ce1f6106325c480a6c2ca0838a8a2b9e42d3d06c3a0fe2601a8e27a0d0cf3adb33241afd787a15c4db4a7759e92f1a47d1f80e345808bcfd0b833c5c07ed766fc2dde0a2d614cdd7a7d67fd302c8825a5e4ff6c1c93938b968f77307bf0e82356823a3eb851fdda1f62aa21915b4241fcf049035f0e136ef570bb8b05c10068652319840229b2044d07612d95a97d2aa3dcb19b836d264a1de61ae67ee5bde78348e744d4bf55c51bb5aba890d54cb171280304061105e02fa0703b3450cda040000",
    ],
    [
      "ETag",
      "dQ6aGWv81atvtV6PBf2I3g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:14 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-22-1635192891311"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff7d92516bc2301485ff4bf6aac368152bf8a0529c4345abc26088c47a5ba3b5b74b52878aff7d37757493c95e927b4fce476e0eb9b0bd4c36acc5d632fac8409d9e2230535bf8a0b3d868da524c34b012032322722612b6e1f90cde38337aa8a0d295c7b769bb4d0e1d6ce12058ebc24209f146b3d6fb8525e2008469230e2979cc29b5ed7c30f266f3ce6842d20137561a2f86c34e77e8b16ba9a062a1cd2aaf0b7236f707e3feffd86a95ee7f88c178eef53dff11b2bc96d80ed73e84a02009c0ce9e2adc41600636164d43c750d698a90034cbcdf941a4304b85422c9352ae56cbbc51ab73b7da74798d7332c61808233121ef6246b3318346c43e7e522acc2183ca4b0a28ccd723c9fcb9deacd4eb2e771dcfcddf63d557504794bae8793ef61fce75f93d370b442c45d1361e630d872efc8d79c240d1541f434ddeacdd413d34a043549b42712cb9fc7e76f744c7138594a1061b5fe516650f6dbc745fcba80c4a2c10f4835ea4b9f5d72fd37a135e9e020000",
    ],
    [
      "ETag",
      "niehfzzeENutsLre0BivXQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:14 GMT",
      "Server",
      "ESF",
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
      "595283300000d0bbe4bb764a0125fe35b255f692cac00fc31298802c85208be3dded780dfbeef0be419265641c63d6d5a405af604d8e709fed8d5e426a595a82d7b9da26964280a552cfbc5171f960ba5d031897131455c81feb72c0a1d8d26bbf6869341b54a6f3aa27214598b3f358d69cac883e459714663bea84b9c546966979512e21c7aae6e633d1c843997352f929282c932f1cb73a2d4d5e512e394384cd130efd4be7ab8a33927323ccd6f60e0f6e644d38f83a6c70352e935f3936fae03ccf3ee72b4431666a409fdfb455613e8ad42857eb543248b47f78f8bfc00e90a5a70319637adfce8b10eec05ffd98ad3db9ff472419c8007e7e01422384d319040000",
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
      "Mon, 25 Oct 2021 20:15:15 GMT",
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
      jobId: "grouparoo-job-23-1635192891311",
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
      "14fd2bc87b6d1208490991a2354ae91a29211d9056d33421e35c985b82193699aa2aff7dd7a6e95a556a9fb07dcfb9e7dc0f9ec803af76644a325efc69a179fc722f32724640d1025fb95d37fee8a10d6fdc75e51f6a750b7653cc6688e09a25e9be2ea12745db3090d36ddc2f1ad1d6b411a287897a43b7e79cbb63c71f4e7cc7751ce44928f315af1e90fd5ba95a4e07839376bf10a22881d65cf699d8bfbc0f0ec341dd887b604a0ede4a0e50450e3e16fd5a0a461517d56c1ba381564293c29ef2122dfc67eeb28bb7a9fb9ceefb05820f9c01654cb495d2b630051355ce8bb63159c9f489189baf0e240e56c122b19828db7d9556740f67d68e2a9aaac71aacab68b3b696e1d5265acf93e5264ce3c575b09ef7179bd5761dc6d6dd75100596a25909866bcdac0b730bf182fa3b908a57463dd1cf5af9b941cbf763d1049496d00553cf3ea7cec4f6b33cf3583e71c7596e43964d326f4cddcc66fe0846bb0c28f28ca861d14a54c3dcf627947aa9e70c9d74945396fa3081d4f3262c033f1b79ee881ccfc8df862bb8e4b21692771d2277d13209d224da868b7912981272da96eab233a60b78ed51618108faa0a6a38e72814abaddcb3009a2f92259de06dd84575050f618ffc119e7b4948068da60f314346bb1c3869170be0e2e116c2676730a4a32fdf94474cfb58b572d7fa12738406d57992f899368197e33764e885b5ab60672e80eba8c9c97daf4f117027147bb24e4fb36887e90ee29821c1aa8d8e7c344b0097cfaab9df61eb1b8f9282315de717598d422ac816e85b8a9f699ed3b6377e412036ed4bbd8d8764f4dd3397446d843a59e2beaf61e0bedc45af902c2204e3f34cd3afe03b3e33bfb77040000",
    ],
    [
      "ETag",
      "i0pr94kuNP3Mn9vptVe0rg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:15 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-23-1635192891311"
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
      "0000000002ff8d93616fda301086ff8bf7714122a5656da47e088c6d99021448b54a5315b9f62573e7d89eed8010e2bff79c766c5a27a55f92bbf373caddeb3707f253284e12f220ea5f2dd8fdbb1afc2a046b70adf40e5f462b072422e0698d64b632bbbbe936fbba5b4d5762337c3fdf7dbb4bafaf9170ec0734942407520990dc91e4fb8128da00b6312ddb46955d1611bf37a1b829d6d9e233e68de6215fdce6793ac967e4189d1a39f5b4ecf837b4dd1f23f2a81fd6508105c520cc62ac7e04e6b3b0a6a38d913070bab50c1ce9e0eea0b6ba35d46a3dc0cae06c3488c7a38bf8eaecf22a1ec531825233ea8556c8de6e703ee2b5a772ad77b825894748d82ec68dabeeb9c5bae0dd2621cc16c5f8bc1bf06f8032a65be5cb5eb012d6f967f57e832f2afc4b4afa4610af4ac83ea806c5c1f651c29494730bcef592da95d4981336592ef3d7aa286eb5e0fde056f400d26f4fc0a77c99fe4f5a34d81fad3ea6c5ec15e13cdae68414d97cb629d2f94de0ee5f8c30d97b703756a3ab1c0443c5c3f3cb8b0fe3e1b3c7a63af80ebf9378db424418c55fe58bf024a9a874707c023ed84c4e88030000",
    ],
    [
      "ETag",
      "IQpwXCvIJwQCQiS0+MwWXA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:16 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-24-1635192891311",
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
      "2b",
      "91",
      "f7",
      "6593fa4a5f692b21e820db2a9514d214544d53eb3837c190c6c5763a2ad4ffbe1b87021d02a4484d7cceb9f7dc87fb48ee781691010979729f83dc7eb91521a910d034c1d30b7b7cdd7d48d27367637bbc7bf6903bf3ecf2e80819bc5029ba5aa7505522970cd46036ad2552e46b2a85a862a06ab35db5bbad8edd6ff6fa76cbb651a7208dc73cbb43f58dd66b35a8d7f7b96b8910490a74cd558d89d5f3797dd3acafa5b805a655fd30651db3a8fac7498f53c1a8e6223b9a4dd140ae402e6045798a165e9451787218bac6e9aa962079c31950c6449ee9c2168660228b79924b13950c1e89b1f9ea854cddb17b1a58cb984ba517195dc1b2622d4dd6a54595b558acefac1ffee4dc5a6265314f412dadeb5faeef5acfb49167cd3ccf9d06d6d7e36fd64f7f32bbb0becff770e520389a8a40699e194b010d5328ec3c756df4765685806aaaa004174ea34bed5ea31fc6a1c3e25eab13c60d08c35ee874682b6cb07e1bda51081475ba886e54341359d461cd388a7a7ddaeb30a7ddecc491d38dc176a25ed4604dd68a3add983287ec2ae4afe41aceb85a0bc5cbd6916b7f14b88bc09f79a7c3c03565c4344ff55969ae28e2b54f8d4522e983ba7605ca05662ae630f202d71f9e06a32bb71cfd1812cab6d37b1c7e4c5305c8a6123ba8419e8b088a9d9f4c47c168e20dc7a830f3bcd8331419fc7e7c1104dbb5e9b236bf64e8fbc3396aa89474fb1f360dfc91f793ec76aff25dd134371c23305f65824d0910b8c5e5135c354ee0c11469d66f577961e0626ab0df85713efa06e4fb3813d8d058c8a875c8f9b3c3a742f036957590cb99ebcf4979e4430c1232",
      "f6f98621d9009ffe29ec6f2872f18e621aa5f11bf799a922099350ee355f15669ed47dbbdb6cb589214bfd066bdbbdfd008b1845445841a69f2a2a6fa8994801e5ea998420aea357ceeb1f805a826a21050000",
    ],
    [
      "ETag",
      "P1LW6xglM7v1Ni6Dxu7YnQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:16 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-24-1635192891311"
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
      "02ff8d91514fc2301485ff4b7ddd0c638a42422210221824322031318494ee6e16b6ddd976e824fc776f8b21c607e34bd773fb9de49cbb03dbc922661db691e95b05aabe48c1ccec25025d6546d3a7c44203f318189e1219dccc93f1484d3f5b69fe1cf51fea583d2e66dd2e115abc42ce59e7c0120959ac59e7e5c00a9e03d912a9b4593be131539776365f44e3e93de91c63aba7cbc9a4d79f0cd9d13bfbd6eb72f71fc7eae8b12d6e2248404121c0a628156e4198b12da8795e66e06bac9400cd1cec1e528555c915a24f13bf79e507adf03a68376fdb411804046628b8915810bb9c533466d0f02cc277eac7420294bb52d5c49d7b1a0f9504d7c20ad882daa3d48d3bf870292e05e62ef14fcb800b99fd7009e006823f2dbd9c1b7e3670810674822a0e7fbb56dfa1fb35114f0a69031a6cf9c6691103b4b4a1a5195581c704a73f3992e6a48f5f8f354bfc26020000",
    ],
    [
      "ETag",
      "17SfIHrNz6gmXRBJydrMTQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:16 GMT",
      "Server",
      "ESF",
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
      "000000000002ffedd3417282300000c0bfe42c4e4003a4b74a45d14150a802974c841050504b84809dfebd4ebf51f70ffb0d689a3221c8fd7a6617f00606aae1713a5edfcc99cd4f1b64d79f96b2f525b59c7dd17d3568088d70c213d5f6d06a88cfd74c98279d4d97735f9f57adbc43ab8d124aa2e0f188a61885d78ef03aaf659cf6865f2c8315dee59bdea994b5a5857ea4efa144471316be390beb92ae094968a5c5ed42701867989f3b7dc27be4500f67aaa19b65a7f6767e78548bf9013b2dee2322778abc08f73df120740522dbad06032f330afc21f352e1b10b9994d3a35726e39797ff0b8c00eb6f65c304299fdb2708e311f8ab4feec38d3dffcf186d58037e7e01bc9bc88a19040000",
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
      "Mon, 25 Oct 2021 20:15:16 GMT",
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
      jobId: "grouparoo-job-25-1635192891311",
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
      "fb",
      "da3c20e441a4688d52ba664bc806a4d5344dc80643dd0226b6e95455f9efbb364dd7aad2fa09dbf79c7bce7df084ee599da13922ac38b4543c7ebae3049d21aa7001af07426eafaa6f5fe90d137e2326d9a58a0ecbc502104cb324ae9a92f6246f454ae57c1ff50bc1db060bce7b90a8e78c7bf66434b63d67e6d923db069ea465be61f53db06f956ae47c303869f70bce8b92e286c97ecaab97f7c183336804bfa3a99283b79203509183ff8b7e2e798a15e3f5621f8181565291d00ab3122cfc6366e4fc6dea3ec355bf00f0034b294e53ded64adb821429af7356b4c26445f327646cbe3aa0c8dff8abd84a79d9567552e38a9e59195638518f0db52ec3ddd65a0797bb70bb8cd7bb20895657fe76d95fed36fb6d105937577ee85b0a93921aaeb5b0cecd2d800be867542a561bf5583f6be5e706addf8f4513405ad22e984c87136ccf861ec9c934cd67a331c987949019998ef1880c53cfa56e4628069e11352c5cf39a38eecc9d384e42a7999db80e9cbcdc761397b8aee37ab933c3181dcfd01fc114bd60b2e192751d4237e13af69338dc07ab65ec9b1272dc96eaa233a60b78ed51418100fa4f4d471d651c9474bbd741ec87cb55bcbef6bb096f6881d3c7e80033ce712929a0b180e6292ab63c8386a160b9f52f006c26f6fd149468feeb09e99e6b17af5afe428f6180daae325f14c5e13af862ec9c10d7b86c0de4a13be83272566ad3c7df00841ded92a01f7b3ffc89baa790e654d03afd78980036810f7fb5d3de0316361f64a4823bac4e2ab5482a68b742cc54fbccf6eca9ed9a1f5561a1dec59cc9f4d4349d4367a415add57345",
      "ddde43a19d582b5f401084e907a659c7bf5fcbde3e77040000",
    ],
    [
      "ETag",
      "qbbhHmKJeWirEpr6dFtSqA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:17 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-25-1635192891311"
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
      "93614fdb301086ff8bf7359508a15d89c4879695ad23b4ac0d12d38422135f3283e30bb6d3ae54fdef9c0374684c0a5f92bbf373caddeb375b762fb56031bb95e5430366f3a904f7c3070bb08d72965e356a0b2c60e07849e4cfa87a88ce87f2eccffafaf1bb52d57931bc5f9f9c1061f3df5071166f59214109cbe25f5ba67905d496a36a2a9db559c0dca6f6c565ba98cebe525ea1f0f9ec2a4946e364c276c1be5170c7b396ff40dbcd2e607778bb80020ce81cfc2cb5c13bc8ddd4af6979552be8596c4c0e96b5707b501a6c6a6e107b54e91df67be120ea87c787c3e3300a430215e6dc49d4c45e2d693ee6d071b5c0356dc9c28808d3c6b471d13e575497a2ddc487d3593a386a077c0bf03cc746bbac132ca4b1ee59bd57f045857f49c53f08d25549d50595a005982e4ad61917c280b59d24da8cd7f51e1bcfe7c97b55b430284537b8921d8072ab3d7096cc47ff93960cf657ab2fa374f28eb08e6cb347d2e9c564998e2e2e3d77f36284f1c681bd3448aeb2e00d151e1c0dfb9f0707cf1e3b45ef3bfa4eec4c0301cb39fd2adfa46371c19585dd13bd7b891788030000",
    ],
    [
      "ETag",
      "Y3mq3K8iFxwXzJllmKf8kw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:18 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-26-1635192891311",
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
      "000000000002ff85546b6fda3014fd2b91f765d3788500094855cbdab48b44a10da11d9b2670921b6a1a626a3bdd50c57fdf8d535abaaaad8404f639e7de731fe681dcb22c263d12b2c55d0e62f369c9435221a0e8026f6d989ef1d1a9ffc36a71f8f9d53e93c9b2797970800c56a8245dad53a84a9e8b08646f32ae2d04cfd754705ec540d566a76a76acb6d96d3a5dd3324dd449489301cb6e517da3d45af6eaf55deeda82f3450a74cd642de2aba7fbfa7db3be167c099192f59729eb9845d6df4f7a98f2882ac6b383c9180de412c40c5694a568e1591987472f43d7185dd51648be6711d028e279a60a5b1822e259c216b9d05149ef81689b7b3fc8d81db8c781314f98906a96d115cc2bc63ca57b076d616e5069cc66eb5be3d41f9d1b732c336129c8b971fdddf55de389e60d8dc970e88e03e3f3e117e3cc1f4d2e8c6fd31d5c793b13da8d412a9669b3010d53288c3ef6d37b3dc542401595508233bbd1a1a6d3e8864968478963b5c3a40161e884769b5a6123eab6a015874051a78ae85a45339e39716c3769c30edb66bbe3203ba666d86d77133bb16c2771f0d272ecc824db0af92398821326d75cb2b2a9e4daf7027716f893e1713f70751909cd5375529a2b8ad8f7a9b04824bd53d7b64019c74cc584bc61e0fafde3c0bb72cba518c082469bf11dae45425309c8a6023ba8409cf3189b462e46632ff046c3fe00157ad2173b8624bd5f0fcf8260b3d65d56fa9bf47dbf3f450d15826efec3c681ef0dcfc876bb97ef8aa6b9e668813e9509ee4b80c012d79233d93882bfba48bd98dbca3303575681f9268cf3513720dec6238e0d4db888ad979cdf5bfc5408beb3b20e723971fd2929af7c484040167dbc6148d6c0877f17bbb78b5c7cbd98462a3ce33e47b248120928f79aad0a338feaaee9580d8b68b250afb056cbda0db0885144841564eab1a2f2edea8914502e9f4808e23a0ecb79fd0325fb9cad3b050000",
    ],
    [
      "ETag",
      "7eYGoOFRX34oeZ+7Gsfj2Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:18 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-26-1635192891311"
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
      "5d",
      "4f",
      "c2",
      "40",
      "10",
      "fc",
      "2f",
      "e76b6b288d284d480402ca47500bbc680839aedb7ad076ebdd152184ffeeb668253e18e3cbddcedccc66777207b69169c03cb692d15b0e6a7f1181792a0a1f741e1b4d5786a9066631303c22e56cd08fb3dc1fbd3f3ff4a35173770de9308f5a2d5268f10a0967de818512e24033efe5c0529e00d942a9b45996c062669f15dc74e60f267784130c0a3c998fc7edceb8c78e56e58bf9bf6ccb65b6f98b6371b4d81a573e84a02015500c9f295c8330832217cd932c065b63ae0468568acb8748619e7185681363d71bb6d370af9c66fda6e9b88e43c21805371253d2cea7341a336878ece33bc5c25c12a8b2a484c2f2dc12dd5312ca2d0a3004b545a92b0ceb1351bb855d39d5a5c0a4dce0bc45970b199f75e971f30d0410727ef5b7136e7865e8a2011da20a2a868b2fcafdd967f1b963674f8a478514988622abda29b72e166a1ac7332a078b094effe55e9a133e7e00dc892aac8c020000",
    ],
    [
      "ETag",
      "TIFlpuRKwZOFgK9x7enJug==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:18 GMT",
      "Server",
      "ESF",
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
      "000002ffedd3c16e82300080e177e959884050dc8d3a09d3000e28152e0dd4220c95d22282cbde7d66af31bff37ffdbf414e299392f46dc3aee00d4cb9be52a9bae316744e55704cb3e21eddc7ba6e31d10dbf1946918650541e16f74bdad175c050304dda7cb063046b8da34439687e575a42215ab80d264efc644ff1643ff4e5d5ade6a773833f4aba2458c6d83b400f26bddcc6d841bc38db65a50c49ed9a83d172ebddd9e8f95ccadb9e8c72ef8ae56de76e160119645f6ce460a075eb7c5efc2fb3104d913fbbc83a5a51ec45477b9b1d165ed9dad9a90b7dd9410d9d19456bf5e5e5ff0233c0465e0b2649fdbcdd3057ab19f85b9ff41367cfff21cb0513e0e717973d326319040000",
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
      "Mon, 25 Oct 2021 20:15:18 GMT",
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
      jobId: "grouparoo-job-27-1635192891311",
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
      "3014fd2bc8fbb82601f220448ad62ca52b524236425a6dd3848c31d40d608a4dabaeca7fdfb569ba5695da4fd8bee7dc73ee8347b467558a662861f96d4b9b874f373c4127884a9cc36b7abd77beae7eb9fb853ff91b7c6eed6cea67f7f339209862095cd605ed09de36848ad96edbcf1bded6b8e1bc07897ab6d3b326c3b1e5da53d71a5a16f0042db215abf6c0be96b216b3c1e0a8ddcf39cf0b8a6b26fa8497cfef833b7b5037fc86122906af2507a02206ef8b7e2938c192f16abedb828156d026a625660558f8cf4c93d3d7a9fb0c97fd1cc0778c504c086f2ba96c410ac2ab8ce56da3b3a2d923d2365f1cd0d65b79cbc820bc68cb2aae70494f8c144b1ccb879a1ae7e1666df8c1f9265c2f227f13c4dbe585b75ef4979bd56e1d6c8dab0b2ff40c8993826aae31374ef52d800be8a754485669f5483d2be5a706f96fc7a208202d68178c1d7382ada9e92659e2906c3a1c27994993649a38633c4c4ce28ee8284d28069e16d52c5cf16a623aa63d1e0de31121d37884711263c7b5633bb1ec746ca6ee04a7e87082ee1b26e919133517aceb10ba0afdc88ba370172c1791a74bc8705bc8b3ce982ae0a547090502e89d9a0e2aca3828a976fb41e4858b65e45f7add845734c7e4617b0b33ce702128a07103cd93b459f3141a8682c5da3b03b09ed8f76350a0d9ef47a47aae5cbc68f9333d82012abb527fd1360afde09bb673445ce2a2d590bbeea0cac858a14c1ffe001076b44b827eecbcf027ea9e429ad18656e4e3610258073efcd58e7b0f58d87c901112eeb03a442811d2d06e8598aef689ed5aae659948831bf926665be363d3540e959196b4924f15757b0f857662ad78064110a61fe8661dfe01c8ac16ed77040000",
    ],
    [
      "ETag",
      "dhk7BLZ9kAI6zN+u2f8Ifw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:19 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-27-1635192891311"
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
      "8bfbb2442acd9fb6487d41d67443224943485f6caa906b1fcc99b1a96d324551befbceb4cba675127d0377e7df89bbc70f07f243284e22f22caa9716ccfeac02b7f24106b695cee2abd1ca020908385a21f9c8e7f5d779b21b9f678fdb517ebf8a179b70757b8b8465dfa1a6243a905280e49644df0e44d11ab08d69d9d6aae8b280b87de38beb3c4b169f31af35f7f96293a6f1349d9163706ae4d4d1a2e33fd0f6740cc8563f67508201c5c0cfd218bd05e612bfa6a575236160756b1858d2c1dd416574db50a3f5002b83cbab4138198ec39bcbeb9b701886084acda8135a21bb59e37cc4694765a67fe296241c2261ba18372ebbe70eeb82779bf83059e4935137e0df00654cb7ca15bd60298c75afeafd06df54f89794f483205e95907d50058a83e9a3445350ce0d58db4b6a5bd0a63961d3e5327daf8ae2460bde0fee440f20ddee04dca7cbf87fd2a2c1fe687517e7b3778475689b139227f3d93a8fe70f9e7b7a33c274efc03e188daeb2e00d155e8caec757938b578f7dd2de77f89dc8991602c228fe2a5f84235149a585e32fccd25be688030000",
    ],
    [
      "ETag",
      "VdMmZMIv5+RVj4TFQANU1Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:20 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-28-1635192891311",
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
      "fd2b91f765d3fa48d2575a0941818c552b2d4b5350374dad93dc14431207db012ad4ffbe1b87f2181a48919af89c73cf7db90fe49a6511199080ad6f0a109b4f573c2035028aaef1d4f76e02083273f17536fce11ee6f7bf169bf46e6f0f19ac54499ae609d4252f440872309f35d6821739159cd73150dd76ea56b7d5b1fab6d3b75a96853a09493c66d935aa2f95cae5a0d9dc7937d69caf13a039938d90a74fe7cd5bbb990b7e05a192cdd7964d7491cdf74df7131e52c578b6379f61028504b18494b20453785646c1c1ebd00d46d3c61ac9b72c041a86bcc854991686087916b3752174543278203acd172f64e68edd23df582554aa65465358d58c95365d19541acb657e6d7cf3a6a7c60a0b8b590272655c7c773dd778a28d26c67c327167bef179ff8b71e24de767c6e16207d75ec6c69422908a653a219f060994c93cf66cf47652a5802a2aa102973db34b2dc7ec0771d00b63a7d509621382c0097a1dda0accb0df86761400459d2aa36b15cd7816b5c10e4d6a0671e4f42cabeda02c76ec6ed7e94660db96d5319d4eb7db22db1ab9134cc131933997ac6a1cb9f046bebbf4bdf9e468e8bbba8c9816893aae922b8b7899a7c22291f44e5ddb12651c9dca298c26beeb0d8ffcd1b95b0d7e0c6b1a6e663738fa982612904d0576508138e511368d9c4d67237f349d0cc7a8d0d33cdb312419fc7e7816f89b5c7759e95f32f4bce102355408baf9079bf9de687242b6db177ee7342934470bf45765705b0104ae70f53893e601dceb22f5f26d6bcf0c5c4b05d67f619c8fba04f17f3ce4d8d0988ba8f59af3678b4f8de05daaea203fe7aeb720d591073108c8c28f370cc91af8f02f61773f918b37146da4c26fdce7509626a1806aaf595a26f3a8eedba6d56b134d16ea0dd6b2bbbb01",
      "9631ca889042a61e2baaeea79e480915f2898420aee3a49ad75fe59c069c1f050000",
    ],
    [
      "ETag",
      "TRqbebn0Y+SAKEBpxZYymw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:20 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-28-1635192891311"
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
      "ff8d91414fc2401085ffcb786d0da56aa0098940501142a4c84543c8b29dd642db29bb5b9410febbd34589f160bcb4f35ebf97bc991e6093161104b04a936d856a7f91a099d64388baca8ce65749854670008d4898341379d597ab5e9e6e468391f0b6ddbb97d6b4d36142cb37cc0504078853cc220dc1eb010a9123c732a1cdd2ce0e987d595bb3e77038b9679d5354ebc97c3ceef6c603383ae7d872596efe93581c1d58d32ac418151612eb12a5a2354a33acf7d3222f337435554aa2060bdb0f89a2aa148ac865c76db65cefc6bff6dacd56dbf33d8fc18ca4302915ccce675c0d0c199185f4ceeb81cf80b2236f1adbe78eed47543b4ab55da4d6b83e198d5bfcb0452e25e5b6f4cfd440183c4724b2f2fee4fb6450c7a4a27348c86fcbff9d5c7c15efed997852c457d0581fa0713a469f6a9a0b044655e88014fc331f5273d2c74f3217ece429020000",
    ],
    [
      "ETag",
      "tNc4CcbBmikKEKa1qAFZ8Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:20 GMT",
      "Server",
      "ESF",
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
      "82",
      "30",
      "14",
      "00d0bb64ad8e0441d31d680015a823a8d04d06e19302824cc046ecf4ee757a8dfaeef0be5192a6d075acbf56d0a0373424984cd2c9b65d9816ff747d8b4887b8c9d12db06cd633527f9c300b573ae58ab6192b17d7c86bff207165fafe39aa25954b65ca37a9a1d5430781133bb35b5d57f63db02bc8222b32e7b9971466f9d85decf334a69809cf5d6a910f9e37ce33e3312c4e9aadad9b43afd303d6dfaf97228bf65dec1c6fba43d8175f0b3b0e2110d469312ef341ecb292cd2584a6ec3b955b2a952b8b6f1b5bc506bb9612e856610c8210f3f3e4e5e5ff422304f7b610d0b1e2b95dd50819a1bffaac1f5a78fe37211120d0cf2fdcf1fc4819040000",
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
      "Mon, 25 Oct 2021 20:15:20 GMT",
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
      jobId: "grouparoo-job-29-1635192891311",
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
      "0000000002ff85536b6fda3014fd2bc8fbb8f248028520a115d1744522a10ba1d5344d91636e32971067b1438b2afefbae9dd2b5aad47e8aed7bce3de73ef244b6bcd890314978f6b786eaf0e55e24e48c80a219beee0f5fd5cd463efa0fe5b6a075fae8df6edd6c324104d72c4977650e6d29ea8a811caf579dac1275492b21da98a86dbb6debdc1958ae3d722dc7b29027214f17bcd822fb8f52a51c77bb27ed4e264496032db9ec30b17b79efeeed6e59897b604a76df4a765145763f16fd960b461517c564bd4203b5842a861de5395af8cfdc24176f537738dd753204ef3903ca98a80ba56d610a268a94677565b292f11331365f1dc8ca5b78b3a8c5445eef8ab8a03b386b6da8a2b13a94d0ba0a977e6b1e5c2d437f1acd9741bc9a5d7bfeb4335b2ed67eb06add5d7ba1d75234c9c1705b93d685b9057841fd0d48c50ba31ee967adfcdca0f9fbb168024a4b6882f1b0774ead51cf4dd264c8d2913348d21e24c928190ea893f498db87fe26018a3c236a58b410c5d0766cd61b0e63975983b8efd8e7b17b0e34a67d37b5dd9103ced021c733f2507105975c9642f2a643e42e9c475e1c85eb60368d3c53424aeb5c5d36c67401af3d2a2c10411fd474d4512e5049b77b1e445e389d45f35baf99f00232ca0eabbf38e394e612104d2b6c9e82ca171b6c1809a6be77896033b19b535092f1af27a27bae5dbc6af90b3dc2016abbca7cc92a0ae7c17763e784b8a5796d20fbe6a0cb4879ae4d1f7f231077b449427eacbdf027699e4248a182827d3e4c049bc0a7bfda69ef118b9b8f3252e11d5787492dc22a6856889b6a9fd9ae6d593d871870a5dec7dcc1a9693a87ce083b28d47345cdde63a18d582d5f4018c4e907a659c77f036f7fb277040000",
    ],
    [
      "ETag",
      "vy+tPdsxMwpknaufxMVk9g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:21 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-29-1635192891311"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d93c14ee3301086dfc55c538950e8d2481cd2dd0291420b6d7a5aa1c8d893d4e0d8c6768aba55df9d71600b5a560a976466fc8d32f3fbcf8e3c09c549421e44fddc82dd1ed5e0ef42b000d74aeff065b4724022029ed648562f53c8f2a55bdd31f9dcaeff346b7a65d28b0b241c5b434349b2239500c91d497eef88a20d601bd3b26d54d96511f15b138acb6291cdae306f340ff96c95e7e9249f927d7468e4d4d3b2e3bfd176bf8fc8a37e584005161483308bb1fa1198cfc29a8e3646c2c0e9d63270a483bb83daead650abf5002b8393f1201e0dcfe2f1c9f9381ec631825233ea8556c8ae96381ff1da53b9d02fb825898748d82ec68dabeeb9c1bae0dd2621cc66c5e8b41bf0334019d3adf2652f5809ebfc9b7a7fc17715fe2525fd26885725641f5483e260fb28614acab905e77a49ed4a6acc019bcce7f9575514b75af07e70237a00e93707e0329fa7ff93160df6a1d5afb4987e219c47db1c9022bb992e8bf4e63670f7ef46986c3db85babd1550e82a1e2e3d3f3b31fa3e3378ffdd4c177f89dc4db1622c228fe2ad7c293a4a2d2c1fe1546bb8bd888030000",
    ],
    [
      "ETag",
      "fwEeILSsUQclquhzmhaGpA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:21 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-30-1635192891311",
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
      "2b",
      "91",
      "f76593fa489abe25041d64505152485358374dade338c1348d83ed7454a8ff7d370e2d300448919af89c73efb90ff7112d591aa23e0a587c9f53b1f972c703544154e1184e97cb9f77aeff6b160f1eceafcfcee34e7b5dbfbd3a3800062b5412afb2845625cf05a1b23f9dd462c1f30c0bceab10a86a9b55ab6db7ac5ea3dbb36ccb029da4493462e912d4b74a65b25fafef72d762cee384e28cc91ae1abfd797ddda86782df51a264fd75ca3a6491f58f931e269c60c5787a309d80815c5231a72bcc12b0f0ac0c83a3d7a16b0caf6a3190d78c504c08cf5355d8821084a7118b73a1a3a2fe23d2365fbca08933728e7d6391a8f5a2622c74ba8581a5319f674be38737be30165052c4122a17c6cd99e339c69e36748da9eb3a13dff87af8cd38f5c6d34be3fb6c0757caa86023a452b1549bf07190d0c2c0539f866fa75308b0c29296e0bc63b6b1d5357b41147448d4b55b4164d220e8069d16b60393f49ab4190614834e15d1b50aa73cedd93834ad80742dabd9eb9aa6d5093bddb68d23cbec755a61a3d30e70332016da56d05fc1143d6132e39295cd4237ded077e6be37758f07bea3cb88709ea893d25c51c44b9f0a8a04d207756d0b9471c854747ee8fa8e3738f687d74e39ec118d31d94cee61dc114e2405361678451515173c84a6a1cbf164e80fc7ee60040a3dc1cb1d43a2feefc76781bfc9749795fe4503cf1bcc408385c09bffb089ef0ddd53b4ddbec8778d935c73b4407f9509d62580e81dac1b67d23ca20fba48bd70dbca3303565151eb5d18e6a36ea9781f271c1a1a7111daaf397fb6f05410dc9fb20e743575bc192a8f3c1a514153f2f9860159039ffe0d",
      "ecee2470e156421aa9e01bf699c8220911b4dc6bb62acc3ca97b8d86d56a204d16ea0d666b6c7f178b88744553f554517927f5440a28977b1280b08e6e39af7fa90e9cfd13050000",
    ],
    [
      "ETag",
      "kkXjNTZYgAxKVHKg76v/hQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:22 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-30-1635192891311"
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
      "6f",
      "4f",
      "c2",
      "30",
      "10",
      "c6",
      "bf4b7d295b360684919008448164a2fc8b268690526eb8b1ed66db8148f8ee5e8741638c6fda3ed7df93de733db26d94ad598bada2cd5b01f270b5013d368709a822d18ab61c3305acc240f30d91d74f71fff9a3bef7ba30a80d78efa17fdf1befdb6d2294788594b3d6918511246bc55a2f4796f114c896e81d11fa901b71173c746624535c1b399a0741a71bdcb253e5c22f97f9f6db309d4d86a3fe5f8ec5a9c2625c4d2004099900f37a2e3106a1872698e2699e80a5b09002142be1f26223b1c8b944b4a862798ee536bcbaeb579bbeebb92e81090aae23cc889d4fa935a651f364827bcac53c026479a48861b9eea85cadfbb65b2d73180931c81d46cab981f7b20f5b605af6fcd3e4d76caf71f108e01adc7f0db5a66f3b170317a8418528d7de6fd7e2abe9ee8188478934010526bc731e440f0dad69685a16506182d30f0e227dd6a74f032a12871e020000",
    ],
    [
      "ETag",
      "+WjGXz5w3BeH4HaCOGMCQw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:22 GMT",
      "Server",
      "ESF",
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
      "02ffedd3516e82300000d0bbf45b8c5441d91fa5681b1133dd40fd2185160541d15204ccee3eb36bcc7787f7042c498494517d3d8b0bf8001d83d630192eab199a1f4f1a2134bd216c1acc1ec9cdf16bd16bf18ee926e5b06da781474a4de9a70b76f4ba4f9d83328524b6ca285d983c08e15125bcce7377e23c20da5705467a593db65a9ca70d9c3a389a7d9231c90a9f620b11e320e1488768d2f8fa3576d7a4d862b90f66634ebb6b16f2b9e785a2de315e9e6397172bb2d66e79155d1ab781c8dfd4fe2da5b47be408a962b7543135bf954c0c1bf7c5d9232bc21a7ff8f6f67f8101106d95dd858cb2d7f6b1615903f0573faabb4abcfe23c1eee20e7e7e019f7a83ea19040000",
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
      "Mon, 25 Oct 2021 20:15:23 GMT",
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
      jobId: "grouparoo-job-31-1635192891311",
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
      "db3014fd2b91f7953ed2772b55a32be9e8d4a65b9a166dd314d9ce4d6648e3103b3084fadf77ed5006421a9f62fb9e73cfb98f3c921b91c7644298486f2b281f3e5c4b46ce08689ae2eb3ef943d7ed2f493cfa115e7bf3c5a7c57ec5eea7534408c352f45064d050b22a39a8c96edb4c4b5915b494b281891a5db7e10eba7d77dc198dddaeeb224f4196ac447e83ecdf5a176ad26a9db49ba9946906b410aac9e5e1f9bd75d76915a5bc06ae55ebb5640b5554ebffa21f33c9a916329feeb668a052504670a022430bff98313b7f9dba29e8a19922f84e70a09ccb2ad7c616a6e0324f445a95362b993c126bf3c5816cbd95370f1d2eb3ea9047393dc09913534d23fd5080b308366b67e92f36c17a162e377eb49d5f7aeb5973be59edd6fed6b9baf402cfd1946560b9ced439b7371f2fa81f83d222b7eaa17936ca4f0d5abe1d8b21a0b4823a180ddb03ea8eda6396b0214f46dd3e4bdac0d8880dfbb4cbda7cdc835ecc8022cf8a5a16cdb1e601b0046216d12ea5518f331e8df98847bd61a74d9341d2ee777ae47846ee4ba1e142a8422a5177885c05cbd08bc260e7cf67a1674b486895e98bda9829e0a5478d0522e83f351d4d54485432ed5efaa117cce6e172efd5135e414af9c3f616679cd04c01a26989cdd350ae658c0d23fe6ced5d20d84eeceb29a8c8e4e723313d372e5eb4fc991ee2008d5d6dbf641b064bffb3b57342ec695659c85d7d3065242233a68fbf10883b5a2721df765ef09dd44f01245042cedf1f26826de0dd5fedb4f788c5cd4719a5f18eabc39511e125d42b246cb54fec71a7ebf6fbc4824bfd26d619baa7a6991c26231c20d74f15d57b8f85d662957a066110a7efdb661dff023958e0c577040000",
    ],
    [
      "ETag",
      "VfxaM0Jfd8ZTjECFBFVLbw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:23 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-31-1635192891311"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d93616fd3301086ff8bf99a8a856e658db40f2d74b452d676698684d01479f625783839633bad4ad5ffce391b0531a4ec4b72777e4eb97bfde6c0beab46b2843da8ea470b76ffa6027f1b820c5cabbda397c1c6018b18785e11b9fbbc723fafb32c7f3b9e1a359fefdaf597b4baba22c2896f5073961c58a9404bc792af07d6f01aa84da06eeba6e8b288f9bd09c54d9e2d969f28af51867c7997a693693a63c7e8d428b9e745c7bfa2edfe18b1477cc8a0040b8d80308bb1f808c22fc29a8ed746c3c0616b0538d6c1dd4165b135dc220ea83218c6837834bc88c7ef2ec7f1308e09d428b857d8107bb7a1f99847cf75863bda92c543226c17d3c665f7dc525dc96e93102e96f9e8bc1bf06f800b816de38b5eb054d6f927f57e83cf2afc4b6afe4a90ae4ae93ea8824682eda39429b894169ceb25d115dc9813365dadd297aa34d2a292fde056f500da6f4fc075ba9afc4f5a32d81fad3e4ef2d90bc279b2cd09c91737b34d3eb95907eefed908d3bd07b7b648ae72100c159f9d5f5ebc1f9d3d79ec0306dfd177126f5b8898e0f4abcc956749c9b583e32f7a2b383688030000",
    ],
    [
      "ETag",
      "wVOszFRRT/9BpiHHwuPYLg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:23 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-32-1635192891311",
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
      "ff85546b4fdb3014fd2b91f76593fa489ad23695107425b048a565690a43d3d43ac94d30a471b19db20ef5bfefc6a13cc600a952ea9c73eeb92fe79edcb03c267d12b2f4b600b1f974cd435223a0688a6f87dd517778f2a7756e1d0fc3f007bb607c23eff6f791c14a95a4cb550675c90b1181eccfa68d54f0624505e7750c54b75b75ab63ef594eabe758b665a14e42968c587e83ea2ba556b2df6ceebc1b29e7690674c56423e2cbc7f7cd75abb912fc1a22259b2f2d9be8229bef9b1e643ca28af17c7f36c5040a09620e4bca324ce1491987872f4337185d365224af5904348a7891ab322d0c11f13c6169217454d2bf273acd677fc8d41db9c3c058646abda8e1834a35cfe912ca83f65e18541af3f9eac638f627a7c602eb4b580672615c7c737dd778a4796363361ebbd3c0f87cf0c538f127b333e3ebe50eaefdc702138c412a96ebf4021a6650a6f6d041eff5dc4a0155544205cebb66875a3dd30993b01b253d7b2f4c4c08c35ed8dda37668464e1bda71081475aa8cae5534e7b9dd7112cba2edb6193b9d6ecb327b105961dbe9b41cdaeed224e9b59cd84e7a645b23778229386272c525abda482e7c2f70e7813f1b0f0781abcb486891a9a32ab9b288e7792a2c1249efd4b52d51c6d1a99c89370e5c7f300cbc73b75a8311a434da4c6f7111129a49403615d84105e294c7d8347236997a8137190f46a8d0b33ddb3124e9ffbc7f12049b95eeb2d24f32f0fdc1256aa81074f30f360d7c6f7c42b6db677ee7342b34470bf4a932585700816b5c44cea47908bf75917a15b7b527062ea902eb4d18e7a3ae40bc8d471c1b9a7011db2f39bfb6f8ab11bc59551de4fbccf52f49f5ca870404e4d1c71b86640d7cf881d8dd56e4e27d451ba9f08cfb1cc9d2241250ed355b96c93ca89d56dbec394493857a85594e6737c0324619119690ab878aaadbaa275242857c242188eb38aee6f517f9b389d32d050000",
    ],
    [
      "ETag",
      "C7L7CGz2V1FCbbXiWioysw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:24 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-32-1635192891311"
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
      "1085ffcbf62a44448d9898548d561b422deaa58d31eb3a501418babbd812e37fef802d6d7a687a61e70ddfdbccbcec991da374cffa6c1785af39c8e22604fd58163ea83cd68a8e0c5305acc140f390484ffbdd855a4d678555cca3c92ef53ad3a7e1604084122f9070d63fb3208278af58fff9cc529e00d9627d2242175929a6eec3704532c17d29bdb5eb0e47ee845d1adf3c577a5bd5b56bb9f2e7dedddfb6ed363bfec7b1b934d801773e04202115500e9d493c80d0f3320fc5932c0643612e052856c1d58f50629e71896850c7b05b86d5b53b96d3ea39966d5904c628b88e302576bda4d19846cd631fdf280e661320ab929209aaef89daad8e635aad6a8f52de833c61a46a0d876ba3790befd55ca6c0a4dae1e7254edbb4bbb567c235d4420029eb4f77bbe798cdda30460d2a40b9af3b5c7cb5ecdff76c3e771c15442c2452600acaac9ad7dcc658d2344e5fcb1c1a4c707a27b3485ff5e503def5305b84020000",
    ],
    [
      "ETag",
      "NtR6PsTFHy1yIiEbnN5FZA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:24 GMT",
      "Server",
      "ESF",
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
      "000002ffedd34d7282300040e1bb646d9d91004277fc48c498416b51ea261330a2021a13a411a777afd36bd4ef046ff31e801505578ab6978a9fc13bb833c31d16432c1c3f2a4f416232a94f7889a2cdc84f5923e0f964dcb5e9646d9125514cfa5500b7e3a5316dc22b555638812eeccfa5fd8db0ccf696b149f6d5f89a7971ba851f6ae998eba4eeb19bfa738d76f5cac27d474836733c848210d5bb55a0ca83bd896db5f709a9935693982ebec26adae5e9a7eef0680619f70e31af3b9b32cb7a93c6cde023dc7a79229ecd542029703e2365135f9abc9bac2b3d77f56d914647b31bbebcfc5f6000b81647c9153d3e6f8796eb0ec0dffab4bd0bfefcdfe74c72097e7e01e4d4620919040000",
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
      "Mon, 25 Oct 2021 20:15:24 GMT",
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
      jobId: "grouparoo-job-33-1635192891311",
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
      "da3014fd2bc8fb5a1e690825486865346d9120ac490055d31439ce4dea36c42c769850c57fdfb553ba5695da4fb17dcfb9e7dc479ec9132f53322209cfffd4501dbe3d8a849c115034c757f523dfdf3ce5b0393cf4efd7a1dc4c2ed63777e33122b86649badd15d096a2ae18c8d12aece495a877b412a28d89dab6ddb606b663b9e743d7b22d0b79128a6ccecb27643f28b593a36ef7a4ddc985c80ba03b2e3b4c6c5fdfbbfbf3eeae128fc094ecbe97eca28aec7e2efabd108c2a2ecaf12a4403b5842a862de5055af8cf4c93cbf7a93b9c6e3b3982f79c01654cd4a5d2b630051365c6f3ba3259c9e899189b6f0e24f4e6de346a3151d4db322ee916ce5a29553456871db4ae83e5a235f3af97c16212cd967e1c4e6fbdc5a4335dce570b3f6c6d6ebdc06b299a1460b8ad71ebd2dc7cbca07e0a52f1d2a847fa592bbf3468f6712c9a80d2129a607cd11b506bd873932cb960d9d07692ac0749324c2e1c6a273de6f6a19f26409167440d8b96a264436ca89b5ab13bb09cb86f43120f336710a7fdcc729ca1d3839e4b8e67e46fc5155c71b91392371d229b6016797114acfce924f24c0919ad0b75d518d305bcf5a8b040047d52d35147b94025ddee991f79c1641acdd65e33e139e4941dc23f38e38c1612104d2b6c9e826a21526c18f1270bef0ac166623f4f414946bf9e89eeb976f1a6e5aff40807a8ed2af3256114ccfc1b63e78458d3a236907d73d06564bcd0a68fbf11883bda2421772b2fb827cd5300195450b2af87896013f8f2573bed3d6271f351462abce3ea30a9455805cd0a7153ed0bdb3d777afd0131e04a7d88598e7d6a9acea133c2164af55251b3f758682356cb57100671fabe69d6f11faf9156ec77040000",
    ],
    [
      "ETag",
      "tBgvGkgeWyh4YVSsWA7VGQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:25 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-33-1635192891311"
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
      "c7bf8bf79a4a84d00e22f190426195d216d2f034a1c8d89760e6e432db69d555fdee9c03eba63129bc2477e7df29777fffb3673f542359cc9e54f5b303b3fb5281bbf74106b6d3ced2abc5c6020b18385e1159dffc9a2c709ddd6b95d4a7d7dbf173b55d2497974458f10c3567f19e950ab4b42cfebe670daf81da04eaae6e8a3e0b98dbb5beb8ceb3f9f296f21aa5cf970f699a4cd3193b04c746c91d2f7afe136d8f8780bde0530625186804f8595a832f20dcdcaf6979dd6a1859ec8c00cb7ab83fa80c762d378823aa8ca268144ea27178717a7e11466148a046c19dc286d88735cdc71c3aae33dcd2962c8c88307d4c1b97fd73437525fb4d7c385fe693b37ec0bf012e04768d2b06c15219ebded4fb0dbeabf02fa9f92741ba2aa587a00a1a096688526dc1a53460ed2089b6e06d7bc4a6ab55fa5195461a547218dca80140bbcd11b84957c9ffa42583fdd1ea3ac9671f08ebc83647249f2f66eb3c59dc79eef1dd08d39d037b67905c65c11b2a3c393b1f7f9d9cbc79ec0abdefe83bb1331d044c70fa55be29c7e2926b0b87577288e37088030000",
    ],
    [
      "ETag",
      "mFz6MoSRQliAm2Dw5hgwMA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:26 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-34-1635192891311",
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
      "000002ff85546b4fdb3014fd2b91f765934af368d39784a0836ceb545a4853109aa6d6716f82218d83edb055a8ff7d370ee5310448919af89c73cf7db9f7e486e72b3220314f6f4b909b4fd722260d029aa678bab22f873074e6caef6c2e9c9f0ebdb1d3e9d9fe3e3278a552745d64b0a7442919a8c17cd64ca5280b2a85d8c3407badf69edb69f96edfebf5dd96eba24e41968c797e83ea2bad0b35b0ed9d77331522cd80165c3599583f9edb779e5d48710d4c2bfba5a58d2eca7edff420138c6a2ef2fdf90c132815c805ac29cf308527e52a3e7c19bac9e9ba9922f98e33a08c8932d7555a1882893ce169294d5432b82726cd672f64168c83a3c85a72a116b428960d6b692c971655d66251dc58dfc2e989b5c4b2129e815a5a173f8230b01e69a389359f4c8259647d3ef8627d0fa7f353ebebe50e6e3c45c67456a034cf4d32118d33a81279e8d7e8f5942a01d554410d2eba4e87ba3da71f27719725bd961f270ec4712feefab4153bacdf86f62a068a3a5d45372a9a8bbcd549c0f318ebc4edb6b7f281f95ddf77dc7e8fc56e9f7621f19c9e8721c9b641fe48aee198ab42285e378d5c84a3285844e17c72348c02534642cb4c1fd7c955453ccf536391487aa7ae6d8572814ed504469328088747d1e83ca8873e8694b2cdec16c79ed04c01b2a9a46bd0204fc40a9b464ea7b351349a4e86635498499eee188a0c7edd3f09a24d61baaccd2f1986e1f01235544abaf90f9b45e168f29d6cb7cffcce69561a8e1198afdae0ae06085ce3da09ae9c43f86b8a348bb76d3c31702535b86fc2381f7d05f26d9c096c6822e4aaf592f37b8b4f83e03daaeb2067f320bc24f551080948c8d9c71b8664037cf877b0bb9bc8c5db89364ae337ee335395099350ef355f57c93ca8fb5ea7ddf188214bfd0af37b9ddd00ab1855445843ae1f2aaaefa699480595ea918420aee3a49ed73f08fd7be81b050000",
    ],
    [
      "ETag",
      "d/YAeA0Us56yW0J0ak/gOQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:26 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-34-1635192891311"
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
      "5f",
      "4fc23014c5bf4b7ddd0c636884844430a8980564c08b8690d2ddcdc1b65bdb8ebfe1bb7b3b8ca831beacede9efb4e77407b64a8b88b5d8224dde4b50bb8b04ccc84e42d06566340d120b0dcc61607842e4cb53301289a9df8b86f6f37d964c36db4dd26e13a1c51be49cb50e2c4e218b346bbd1e58c173205b8a7acea524caeca415bac361d0eb0c48c831b2c2601a049d6ed06347e7cb359fcbd5d9329e84fdc1c35f8ed9d1614b5c841083824280cd20152e4198beada7792e337035964a8066155c6d240a4bc915a24b8aeb375cefdabff29af59ba6e77b1e81190a6e522c889d8e291a33687816e286da319f00554da9685c7dd7241b5542d5c22e60096a8da9aeddc2b64a712930af127fb7c43cd3678f006ec0fbd7f0e30e2ed0808e5145fe6fd3ec33717747c4b342aaafc136af9d5ee10e2d6de8c5ec890e139c7ee2636a4eebe30777c37e4b21020000",
    ],
    [
      "ETag",
      "ZJLQcgt2Fc4s3mzlgTwxwg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:26 GMT",
      "Server",
      "ESF",
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
      "72",
      "43",
      "40",
      "00",
      "00",
      "e0",
      "bbec739a21686cdf2242e32754c2b22f4665d5966e1621e8f4eecdf41acd7787ef1b64794eba2ebd5e2ac2c00b98b2155ce64b9bab9af141bdb8dd44d7293112aacc43915e44cba274d00d3fdc2b2e0a557d3d175e9c2666661b98e716edf926aef5dd8c0f0ec64c87ced01fe4b50febd07cdde14bc54d594b5a811c4d0b8ea3d9e761893e29aa022742522723e7369662254c457654cf6ea9f1f4f9c62a214b185457368be5f09da823d65d0c9f34ff4449d1b02d69bad31035c176681a146c09139997efa47af6dbbdd2bb22d26cf98d7967f76bf9f0f07f81052023a72de9527adf2e29102ec05ffdf43a7172ffaf91ac252df8f9058b54223619040000",
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
      "Mon, 25 Oct 2021 20:15:27 GMT",
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
      jobId: "grouparoo-job-35-1635192891311",
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
      "0000000002ff85536b6fda3014fd2b91f77105f2e01524b4229aae4810b6105a6dd31439e626731b621a3b54ace2bfefda295dab4aeda7d8bee7dc73ee238fe48e971b322229cfef6ba80e9f6e454ace08289ae36b9c668392feed3d78659e079fe3eb83fd339b8cc788e09a25e97657404b8aba622047eb553baf44bda395102d4cd4f27a2da7eff51cdf1dfa8ee738c8935064735ede21fb8f523b39ea744edaed5c88bc00bae3b2cdc4f6f9bdb3773bbb4adc0253b2f35ab2832ab2f3bee8974230aab828c7eb151aa82554096c292fd0c27fe6263d7f9dbacde9b69d2378cf1950c6445d2a6d0b533051663caf2b93958c1e89b1f9e24056c13c98c6161345bd2d93926ee1ccda50451375d88175192d17d62cbc5c468b493c5b86c96a7a152c26ede972be5e842bebe62a88024bd1b400c3b5c6d6b9b9857841fd0d48c54ba31eeb67adfcd4a0d9dbb168024a4b6882c9c0ee536768fb69960e5836f47a6966439a0ed3418f7aa9cdfc2e74372950e41951c3a2a528edcceebb5ee62776179ca4ebb9ddc41fb05ed2777cdb731dd6f7fb8c1ccfc843c5155c70b91392371d2237d12c0e92385a87d3491c9812325a17eaa231a60b78e9516181087aa7a6a38e72814abaddb3300ea2c9349e5d07cd84e790537658dde38c335a484034adb0790aaa85d860c34838590417083613fb760a4a32faf54874cfb58b172d7fa6c738406d57992f59c5d12cfc6aec9c10d7b4a80d64df1c7419192fb4e9e36f04e28e3649c8f77510fd20cd5304195450b28f87896013f8f0573bed3d6271f351462abce3ea30a9455805cd0a7153ed13db7707aeef1103aed49b58d71d9c9aa673e88cb085523d55d4ec3d16da88d5f21984419c7e689a75fc07e34a158477040000",
    ],
    [
      "ETag",
      "Tbf7naz5w3nggE+TVy0ZfA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:27 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-35-1635192891311"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d93514fdb3010c7bf8bf7b8546a565a20120f2974a352da421b9e261419fb12cc1c5f663b4555d5efbe7380328d49e125b93bff4eb9fbfb9f3dfba58c64097b50d5ef16ecee4b05fe36046b70adf68e5e0d1a072c62e079456465acaa77cf9be1e46b7a9d1971b9b8ad4fab8b0b229c78849ab364cf4a055a3a96fcdc33c36ba03681baad4dd16511f3bb261437f97abefc41798d32e4cbbb2c4ba7d98c1da263a3e49e171dff89b6fb43c49ef0610d25583002c22c8dc527107e1ed674bc6e340c1cb65680631ddc1d5416db865bc4015506a3f1209e8cc6f1f9b7b3f37814c7046a14dc2b34c4de6d683ee6d173bdc667da92c523226c17d3c665f7dc525dc96e9310ce97f9e4a41bf06f800b81adf1452f582aebfc8b7a6fe0ab0aff929a7f12a4ab52ba0faac048b07d946a0a2ea505e77a4974056f9a23365dadb28faa186951c97e70ab7a00edb747e07bb64aff272d19ec5dabab349f7d209c27db1c917cbe986df2747113b8fb57234c771edc8d4572958360a8787872363e9d0c5f3c7689c177f49dc4db16222638fd2ad7cab3a4e4dac1e10f881cfcf388030000",
    ],
    [
      "ETag",
      "gnrimywS06+AHLncCMQm7g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:28 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-36-1635192891311",
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
      "02ff85546b4fdb3014fd2b91f765934a9b34f4914a084ac95850494b9ac2d034b58ee304431a07db61ab50fffb6e1c5a6008902ab5f639e79efb721fd11dcb633440114bef4b2ad65f6e79841a882a9cc22d19c6d36375a602e7e7e8c6c6fec83e4bfb170707c060954ae25591d13dc94b41a81ccc67cd54f0b2c082f33d08b46777f7acaeddb19c76dfb16ccb029da4593266f91da86f942ae4a0d5da7a3753ced38ce282c926e1abdd7deba1dd2a04bfa544c9d66bcb16b8c8d6c7a687192758319e1fcc67904029a958d0156619a4f0ac8ca3a3d7a19b0caf9a29901f18a198105ee6aa4a0b42109e272c2d858e8a068f48a7f9e2079ab96377141a4bc6e50217c5b2612c332cd522c72b5a1db4ffd2c0d2582c8a3be37b303937965063c2322a97c6d50f37708d1dcdf38db9efbbb3d0f87af8cd380d26f3a9717cbd851befd840a231958ae53acd104719ad527ceaa4f7767e95002b2c690d2e7a66175b7dd38992a84792bedd89129346513fea75b01d99c4d9a7fb714431e854155dab70ce73623a4e1bdb56df32f77bc0b22010e958045b71dcee987da7db6e3ba41fa14d03fd114cd113260b2e59dd4e741578a1bb0883b93f1a86ae2e23c165a64eeae4aa225ee6a9a048207d50d7a6421907a76a369e1fbac170147a976ebd0e639a62b29eddc34224389314d85840071515e73c86a6a1e964e685dec41f8e41a1673cdd32241afc7a7c1684eb427759e96f340c82e13568b01078fd1f360b03cf3f459bcd0bbf4b9c959aa305fa541b3cd400a2b7b0909c49f388fed545ea95dc349e19b0ac8a5aefc2301f7543c5fb38e1d0d0848bd87ecdf9bd814f03c10babeb40177337b846f55540132a684e3edf30206be0d33f8aedab052ebc5bb0910aceb0cf44562644d07aafd9aa4ae6490d7aabd3419a2cd41bac8ebc7bad5544baa2b97aaaa87eb57a221554ca1d09405847bf9ed73f5763dca435050000",
    ],
    [
      "ETag",
      "cAdPBtJtR9XCh3aNC3Jg8Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:28 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-36-1635192891311"
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
      "52",
      "d1",
      "4ec24010fc97f3b528b591080989804441042dd61763c871dd9642dbad7757b012feddbda2457d20bef476e666f67627ddb25594faacc5e651f896832c4e42d08fa67041e5b1567464982a601603cd43523e4feec34ee16b55781f67d777c3fea231f436ed3629945840c2596bcb8208625fb1d6cb96a53c01b245a8663ccb48a58bcc10ddc964d4ef8c8948d037c4d81b8d3add519fedacca1573a567655df9a64fee607c73dc369b65abff385e77165be2dc850024a402cce899c425083d30a9289e6431d414e6528062a5b8bc0825e619978835626a4ea366379c0bbb797ed9b41ddb26618c82eb0853d27a531a8d69d43c767143a1308704b22c299fa0fcae89d63287720b038620d718a90ac3724fd4afe0bd9cea5460526ef0b345c06375e8d1e7fa000410b28fba7f0dd0430d2a40e9570c17df94f3b7cdebd782dd82140f12292d0526a8fa3eb41e1a354dd3326f584c70fa556e23bdc7bb4f20cdc20d87020000",
    ],
    [
      "ETag",
      "VOMgAydtsyUz/DKJEh6JUw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:28 GMT",
      "Server",
      "ESF",
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
      "edd34b7282300000d0bb642d8c0d20d05d286351242655e4b3618244255021a054ecf4ee757a8dfaeef0be01dbef79df6797a6e267f00a46066d75affaade5cc8f276ec17524833c9a615fccc3b88999d1f03785d1fee4ad3124711949c2625164fdd85e5d8213484bfb4bba69c0a8dc42ce16dd14db837247e8c22d6fc52c0da270f669dcd38530c855a7c568d55e2ba612471b6f57b8bc8e0ff5a6c01f4748d1a0c5d6e8d397554806e20f22c7293a1d02452ca9e2c01c0db0daa57a999b614316ba5d49612466f29e0541417689dc1e97eeb9be19a6763f98d5784bd4a7a7ff0b4c00bfb565c7fbac7c6cd70cdb9e80bffad9656cf9e3bfc359c73bf0f30b77eea3e919040000",
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
      "Mon, 25 Oct 2021 20:15:28 GMT",
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
      jobId: "grouparoo-job-37-1635192891311",
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
      "fd2bc8fbda24903791a2354ae91a29212b21ada66942b6b930b704a7d8b48aaafcf75d9ba66b55a9151fc0bee7dc73ee8367722fca944c0813f9430dd5e1db9d64e48c80a639de0a3a7bca1f0ec319bbbe5f8ef3fbbd9f8dc2ebe91411c2b014dded0b682959571cd464bb69e795acf7b492b285895abd51cb1bf6069edf1dfb5ecff390a7a0c896a2bc47f65fadf76ad2e99cb4dbb9947901742f549bcbddeb7de7b1dbd957f20eb8569df7921d54519dcf45bf1792532d6439dd6ed040ada04a6047458116fe335376fe3e755bd05d3b47f0a3e040399775a98d2d4cc1659989bcae6c56327926d6e69b0fb20996c13c76b82cea5d99947407674e4a354df4610fce65b45e398bf0721dad66f1621d269bf955b09ab5e7ebe576156e9cdbab200a1c4d590196eb4c9d737b0af180fa29282d4aab1e9b6ba3fcd2a0c5c7b118024a2b6882c9c81d526fecfa2c63239e8d7b0396b9c0d8988d06b4c75ceef7a19f32a0c8b3a296454b590e690f98eb43e2b2ae97f47dcf4b68c6bb499f0d52b73fa4e968c8c8f18c3c5542c385507ba944d321721b2de22089a36d389fc5812d21a375a12f1a63a680b71e351688a04f6a3a9aa890a864dabd08e3209acde3c54dd04c780939e587cd03ce38a3850244d30a9ba7a15ac9141b46c2d92ab840b09dd8cf535091c9ef67627a6e5cbc69f92b3dc6011abbdabec9268e16e10f6be784b8a1456d218fcd8729231385317dfc8340dcd12609b9de06d12fd25c4590410525ff7a9808b6812f7fb5d3de2316371f6594c633ae0e57468457d0ac90b0d5beb0f171fd2eb1e04a7f8875ddc1a9692687c9083b28f54b45cdde63a18d58ad5e4118c4e987b659c77f288a5b8c77040000",
    ],
    [
      "ETag",
      "iaAwgqy6AbQkL8gkp9f7NQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:29 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-37-1635192891311"
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
      "db",
      "30",
      "10",
      "c6",
      "bf",
      "8b",
      "f736950881029178d142b715a57f96060d694291b12f9999934b6da75355f5bb730ed0a18114de2477e7df29778f9fecd81f554b16b30755ae5b30db2f25b81f3e48c1b6da597a35585b600103c74b22ab1b111e5fcdaa74fd73b25c635456f39bbbf2f292082b7e43c559bc6385022d2d8b7fed58cd2ba03681baadeabccb02e6b68d2faeb2743aff467985d2e7f3db24198d9309db078746c91dcf3bfe136df7fb803de2430a0518a805f8591a838f20dcd4af6979d56818586c8d00cb3ab83b280db60d378803aa0ca2b341388c4ec38be3f38b300a4302350aee14d6c4deae683ee6d0719de25fda92851111a68b69e3a27b6ea8ae64b7890fa7f36c78d20df816e042605bbbbc172c94b1ee59bd57f04585ff49cd3f09d25529dd0795504b307d946a722ea5016b7b49b4396f9a03365e2c92f7aad4d2a092fde046f500da6d0ec0d76431fa485a32d83fadae47d9e41d611dd9e68064d3d964958d664bcfddbf1861bc75609706c95516bca1c2a393f3d3b3e1d1b3c7aed0fb8ebe133bd342c004a75fe5bb722c2eb8b6b07f02b37d7ba288030000",
    ],
    [
      "ETag",
      "mJc12CMmRqWEPqo3gmNJXg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:29 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-38-1635192891311",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85546b6fda3014fd2b91f765932810c22b4855cbda6c8b44431b42ab6a9ac0716ea8db1083ed744515ff7d370ef435b51548109f73ee3df7e13c923b9e27644062be581720375f6e454c6a04345de0e943bc7686c128e9d25eaff3b076619a4dc6178787c8e0a54ad1e52a8303250ac9400da693fa428a6245a5100718e8c0e91fd85da763bbadbe6b3bb68d3a05593ae2f91daa6fb45ea941a3b1cf5d5f08b1c880aeb8aa33b17c3a6fdcb71a2b296e8169d5789db2815954e3e3a44799605473911f4e2768a0502067b0a43c430bcfca243e7e1dbacee9b2be40f23d6740191345ae4b5b1882893ce58b429aa864f0488ccd177fc8c41b792791354fa88679cd9a9b7c738b2a6b365bdd593fc2f19935c79a529e819a5b57bfbcd0b39e687e604d83c09b44d6d7a36fd6cf703c3db7be5fefe1da2e2c1a4940699e1b1b118d33282dec3ae5ff3f9f524035555081b35eb34bed7ed38dd3b8c7d2bed389d326c4713fee75a8133799db86761203459d2ea31b15cd45eeb698ddeac6bd6ed24a636603eda6a9dd69b55a89edb6db3dc78d93a4e72640b635f257720da75cad84e255bbc855e847de2c0aa7c1c930f24c19292d327d5a992b8b78e953639148faa0ae6d89728199cadefb41e485c393c8bff4aa718f6041d966b2c681a73453806c2ae91234c833812e07e47c3cf1237f1c0c47a830333cdf331419fc7e7c16449b95e9b236bf641886c36bd45029e9e60d3689423ff849b6db17f92e6956188e1198a72ac17d0510b8c585135c358fe1c11469566e5b7b66e0326ab0df85713efa06e4fb3813d8d054c8c479cdf9b3c56f8de00daaea2017532fbc26d551082948c8d9e71b8664037cfa22d8df4ae4e2bdc4344ae333ee3353651226a1da6bbe2ccdecd4f871dd263164a9df604ed3763afb019631ca88b0845cef2aaa6ea599480915ea898420ae6350cdeb1f533ac9c915050000",
    ],
    [
      "ETag",
      "xbq3ANLd6a775xq9eUlSOQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:30 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-38-1635192891311"
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
      "6f",
      "4f",
      "c2",
      "3010c6bf4b7dbb99fd51034b48648a482488035e19424a771b836d37da0e2484efee75184c0c2f7cd3de5d7f4f7bcff5c8365919b3802db3745b833cdca4a03f4c1081aa73ad68abb054c02c069aa744be87bbadd7ef97a3b774334ec368bf725fea6ea74384122b28380b8e2cc9208f150b3e8face405902ce6da5ca20f95c99ebbd31e6505c6261bcd86c36e38ecb19375e1178b6af3cb4fa6d160d4bfa6989f2cb6c665040948280598d72b896b107a608c295e5439d80a6b2940b1066e0e528975c525a24d15db6fd9ee837fefb6bd56dbf55d97c01c05d71996c4ce26d41ad3a8791ee19e7c319f00d984643169d61d953dc7736cc7b31db7f1624ab006b9c34c398ff0d5f4722bb068fabe2af42e42013432f77faabb8b8a0bd4a01294b1ff573affb1101e88184ba4792830a370ce63794243d337055ad66031c1e93f5f337dce4fdfba03edb22c020000",
    ],
    [
      "ETag",
      "OBvq2GGnNKgkPgBRwh1FuA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:30 GMT",
      "Server",
      "ESF",
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
      "edd34d7282300040e1bb64ad8e43a490ee8a168354a7fc08c28621180203420c2806a7772fd36bd4ef046ff39e20cd32da7549df56b401ef40a60a5a640b9beb86c98a0816f888d9755f8c8f71c06b5263adbed3f8522e0f7c537736b2e83eb08939607c96017210ac35ad5dea68d3443bae86439c18515a76ad3a7ac4bf112d4f9d30617de12415394198fbdfe86e5ae1d90b3baef275cf2c33c497de35bcab10997d6f8faa21255e65621b5c1599c3afb96f4e45056595160f8781e46e36ca53fa7993c171b58bc923122e547c8998781b1a2ffe3030d3f5569f1fbc6db47879f9bfc00cd0072f05ed9272ba1daa08cdc0dffa492f399dfe37682aa8003fbfea0a295219040000",
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
      "Mon, 25 Oct 2021 20:15:30 GMT",
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
      jobId: "grouparoo-job-39-1635192891311",
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
      "9b3014fd2b91f7714d80d03c8814ad594a57a4846c84b49aa6091973a16e094eb1e99455f9efbb364dd7aa52fb09dbf79c7bce7df048ee78959109497971df40bdff742b52724240d1025ffbfd28fd6ce55f836016de38b7a3bfcbc5be994da788e09a25e9765742578aa66620279b75afa845b3a3b5105d4cd475bdae3374078ed71f7b8eeb38c89350e60b5edd21fb46a99d9c58d651bb5708519440775cf698d83ebf5b0f7d6b578b5b604a5aaf252d5491d6fba25f4ac1a8e2a29a6ed668a0915027b0a5bc440bff99597af63a758fd36daf40f003674019134da5b42d4cc14495f3a2a94d56327924c6e68b0359fb0b7f1e7798289b6d9554740b279d8c2a9aa8fd0e3a17d16ad909c28b55b49cc5c12a4cd6f34b7f39ebcd578bcd325c77ae2ffdc8ef289a9660b89d69e7ccdc42bca07e0652f1caa8c7fa592b3f3528783b164d4069096d3019d943ea8c6d2fcdd311cbc7ee20cd6d48d3713a1a5037b599770aa7590a147946d4b068252a9b42e6e69426a76906c9291d3bc998b26132b43d973919759d814d0e27e44fcd159c73b91392b71d22d75110fb491c6dc2f92cf64d09396d4a75de1ad305bcf4a8b04004bd53d34147b94025ddee208cfd68368f832bbf9df0020acaf6eb7b9c714e4b0988a635364f41bd1419368c84b3a57f8e6033b1efc7a024935f8f44f75cbb78d1f2677a8c03d47695f992751c05e13763e788b8a26563200fed419791f3529b3efc4620ee689b84fcd8f8d14fd23e4590430d15fb78980836810f7fb5e3de2316371f65a4c23bae0e935a84d5d0ae1037d53eb13dd71e0f46c4806bf526e60ded63d3740e9d11b650a9a78adabdc7425bb1463e833088d30f4db30eff0009095a2377040000",
    ],
    [
      "ETag",
      "22Rb+/fBIIANh1j7zMLyuA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:31 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-39-1635192891311"
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
      "000002ff8d93616bdb301086ff8bf6d5817a69b3c4d00fce96ad06d7e912174647318a74f694ca922ac91921e4bff7e476e95807ee17fbeef41cbe7bf5fa401e84e224211bd13c7660f71f1af0df43b002d749eff065b4724022029e36482ed4a3997657f3e247493770573cd82cdfa697974838f60b5a4a9203a90548ee48f2f340146d01db98965dabaa3e8b88df9b505c97abacf88679ab79c88bdb3c4fe7f9821ca35323a79e563dff8eb6fb6344b67ab3821a2c2806611663f51698cfc29a8eb646c2c8e9ce3270a487fb83c6eace50abf5082ba3f16c144fc617f1ece374168fe31841a919f5422b646fd7381ff1da53b9d2bf714b128f91b07d8c1bd7fd738775c1fb4d429815e5e4bc1ff06f8032a63be5ab41b016d6f967f5fe802f2afc4b4afa4e10af4ac821a801c5c10e51c25494730bce0d92da55d49813365f2ef3b7aa286eb5e0c3e04e0c00d2ef4ec0d77c99fe4f5a34d8ab565fd272f186701e6d7342caec7ab12ed3eb9bc0ddbf1861bef7e06eac46573908868acfcea7179f2667cf1efbac83eff03b89b71d448451fc55ae8427494da583e313d4283e0f88030000",
    ],
    [
      "ETag",
      "Enqp8uHBNXTabeZNkrILjA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:31 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-40-1635192891311",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85546b4fdb3014fd2b91f76593fa489abe2504a164ac5269214d416c9a5ac7b92986342eb603ab50fffb6e1cca630c902ab5f639e79efb721fc80dcf62d227115fdee620375fae45442a04345de2adb88f8fbcc94970f6530d025879d038cca4b7b7870c5ea8145dad53a82a914b06aa3f9bd69652e46b2a85a862a06ad3ae3a6db7e5f41add9ee33a0eea14a4c9886737a8bed27aadfaf5facebbb6146299025d73556362f5745fbf6bd4d7525c03d3aafedab28e2eaafeb1e97e2a18d55c647bb32926902b907358519e620acfca383a781dbac6e9aab644f21d6740191379a68bb430041359c297b9345149ff8198345ffc20537fe40f426b11530d8b8ab548a9d2f38caeccc1982f2caaacf97c7d637d0f2627d6020b4c780a6a615dfcf003df7aa20dc7d66c3cf6a7a1f575ff9b751c4c66a7d6e1e50eaefccf03538c41699e9904431aa55024f7d8c3e1dbc91502aaa982129c77ec3675ba762f4aa20e4bba6e2b4a6c88a26ed4695137b259af09cd38028a3a5d44372a9a89cc891b5193b56cc78d5add5edc6ed0d865b6c3581368af43ddd8a5acd36d27645b21f7926b38e26a2d142f1b492e8261e8cfc360361e78a16fca48689eeaa332b9a28897796a2c12491fd4b52d502ed0a998ca701cfa81370887e77eb908235852b699dee22a243455806c2ab1831ae48988b169e474321d86c3c9d81ba1c24cf774c750a4ffebe159106ed6a6cbda7c132f08bc4bd45029e9e61f6c1a06c3f131d96e5ff89dd334371c2330a7d2e0ae04085ce32a0aaeec03f8638a34cbb8ad3c33704d3538efc2381f7d05f27d9c096c682264ecbee6fcdee2a742f06d957590b3991f5c92f22a80042464ecf30d43b2013efd8bd8bd57e4e28b451ba5f18cfbcc5461c224947bcd5745328fea9eebb4db2d62c852bfc1ba9dc66e80458c2222ac20d38f1595efd54ca48072f5444210d7715cceeb2f3797611b2f050000",
    ],
    [
      "ETag",
      "owdDAOMRQZsCRemAe2BnrA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:31 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-40-1635192891311"
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
      "52",
      "5d",
      "6b",
      "c2",
      "40",
      "10",
      "fc",
      "2f",
      "d7",
      "d7",
      "a44da22d6d40a85aa916118d11fa81c879596d34c9a677173f10ff7bf762cd4329c597bb9db9996577b8035bc759c47c368f975f05c8fdd512f4c81401a822d18aae1c3305cc62a0f99294e1dbb0a36f8613b14bf075f33eea6ef34d386a3448a1c427a49cf907b688218914f33f0e2ce329902de2da34d1fbdca0a766d821946264d060d2ef375bfd0e3b5a953ee14acfcaba328dc3a03778fedf369be5eb4b1cd3a3c556380f600112320166e85ce20a84ee993c144ff3046c858514a058292e1f96128b9c4b449b18bbeed8ee5dedd67df0ee1fdc9aeb923041c1758c196927631a8d69d43c09704b71b01a09645952328bf2dc10ed399e633b9eedb8e52e867a01b9c15855185627c279845d39dbb5c0b4dce3cf465e65ec98e0cf400021f7b216f5cad5460d6a8132aa182ece54ed77b3e9cfc6ad3d298612293e052639e794621b8d9a66f2b52cc06282d3afe9c6fa848fdfe921052892020000",
    ],
    [
      "ETag",
      "TYPEt/PUcxloXvZQHwpvTQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:32 GMT",
      "Server",
      "ESF",
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
      "08000000000002ffedd34b7282300000d0bb646d1d1bfeddc947548c8aa2809b4c4823a2089a807c9cdebd4eaf51df1dde13104a9910b82a2fac005fa023d018d2a177d3cd499aca22cace16599b9b44dd3b967920dd1e273d813b7acc61b4913555ae43649e9c9d967c623d6eeae575e5230bc2b83b042d3e2af2c8a2b9962c20d25c431a07bd9f4e6d348afbd02e23df16a1ea0593224073b4701eabf518177577420dd367f69e7eb75bf1e88b48a26aee57ba9ed9f330846c2219a577bd7865a5f0bb38f374fd518f1b1772ee766cb7edc95239de7345b35c827287a1643abace90bfdac2e1dbdbff050680b5b78c3381b3d77649318c01f8ab8fabeec65eff4d4638e3e0e717d61e85f219040000",
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
      "Mon, 25 Oct 2021 20:15:32 GMT",
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
      jobId: "grouparoo-job-41-1635192891311",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b6f9b3014fd2bc8fbda3cc88b10295aa394ae9112b212d26e9a2664c3853925986093a9aaf2df776d9aae55a5f613b6ef39f79cfbe0893cf0222113c27876a8a17afcb2138c5c105034c3d7db727848773b391cec7a6a4e0f3707fe23c9a6534470cd92745fe6d092a2ae629093eda69d55a22e6925440b13b50676cb1ef587b6db1bbb76dfb69127214f97bc7840f61fa54a39e974cedaed4c882c075a72d98ec5fee5bd73ec75ca4aec2056b2f356b2832ab2f3b1e8d75cc45471514cb71b34504ba822d8539ea385ffcc845dbe4ddde674dfce107ce431d0381675a1b42d4c118b22e5595d99ac64f2448ccd5707b2f196de3cb46291d7fb222ae81e2eac842a1aa9c712aceb60bdb216fef53a58cdc2c5da8f36f31b6f356bcfd7cbedcadf58f7375ee0598ab21c0cd79a5a97e6e6e305f513908a17463dd4cf5af9b9418bf763d1049496d00423a73ba2f6b8ebb29439713aee0f59da05c6c6cc19d23eebc6ee000609038a3c236a58b410450263963abd5e6477c18906ace7466ee2b008894318303b1d7487e47441fe565cc11597a590bce910b90f16a11785c1d69fcf42cf9490d23a57578d315dc06b8f0a0b44d007359d74940b54d2ed5ef8a117cce6e1e2ce6b26bc848cc68f9b03ce38a5b90444d30a9ba7a05a89041b46fcd9cabb42b099d8f7735092c9af27a27bae5dbc6af90b3dc4016abbca7cc9260c16fe3763e78cb8a3796d20c7e6a0cb4879ae4d9f7e231077b449426eb75ef093344f01a45041117f3e4c049bc0a7bfda79ef118b9b8f3252e11d5727965a24aea059216eaa7d66bbfdde68647e54452bf52ee638eeb9693a87ce087b28d47345cdde63a18d582d5f4018c4e9fba659a77f8d2fcb9477040000",
    ],
    [
      "ETag",
      "Qp5qfjjs54j2tCaqHqiXdg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:32 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-41-1635192891311"
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
      "6d",
      "6f",
      "9b",
      "30",
      "10c7bf8bf796486579588bd417a44bb748e4618448eba60ab9f8a06e8d8fd9265514e5bbef4cdb6c5a27d1377077fe9db8fbfbcf813d4a2d58c4ee64f5ab05b3ff5081fbe683146cab9ca55783da020b18385e1179bfff9195572e1dd7378bedfafba22e93ebc7f8f292085bdc43cd597460a504252c8b7e1e98e635505b81aaad75de650173fbc61737593a5f7ea1bc46e1f3e53649e2693263c7e0d428b8e379c7bfa3edf618b007bc4ba10403ba003f4b63f0010a37f76b5a5e370a06165b5380651ddc1d5406db861bc4015506a370104e86e3f0e2e3f945380c43021516dc49d4c46e37341f73e8b84af189b664e19008d3c5b471d93d775497a2dbc487f36536197503fe0df0a2c056bbbc172ca5b1ee59bd57f045857f49c5df09d25549d50755a005983e4a363917c280b5bd24da9c37cd099bae56c95b55b43028453fb8933d8072bb13709dace2ff494b06fba3d5e7389bbd21ac23db9c906cbe986db278b1f6dced8b11a67b07766d905c65c11b2a3c1b9d8f3f4dce9e3d7685de77f49dc89916025670fa55be4ac7a2922b0bc7df9e5fdad388030000",
    ],
    [
      "ETag",
      "hyZTfCtR5mYMUPXMmfLFkA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:33 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-42-1635192891311",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85546b4fdb3014fd2b91f765934adb347da495107410582448214d41689a5ac7bd0986340eb603ab50fffb6e1cca6308902235f539e79efb721ec92dcf976444629ede9520d7df6e444c1a04344df1f4e834383ff48bf854cdd8ea2ae5e387f3ebe261771719bc5229ba2a32d851a2940cd468366da65294059542ec60a09d6e67c7ee3b3d7bd87187b663dba8539025273cbf45f5b5d6851ab55a5bef662a449a012db86a32b17a3e6fdd775a851437c0b46abdb56ca18b6a7d6eba9709463517f9ee6c8a09940ae41c56946798c28b7219efbf0ddde474d54c917ccf1950c64499eb2a2d0cc1449ef0b494262a193d1293e6ab1732f54ebc83c85a288d31170d6b610c171655d67c5edc5a47e1e4d45a605109cf402daccb5f5ee859cf343fb06641e04d23ebfbde0feb389cccceac9f575bb8b18d8ba92c41699e9b44221a675025f1d42bfffd842a01d554410dce07ed3eb5ddf6304ee2014b5ca717276d8863371ef4a813b7d9b00bdd650c1475ba8a6e5434177977d91db89d65620f7bc3a1cb927ea7efb67bb693f49236ebc6031838b6eb745db2699007c9351c725508c5eb8691cbd08fbc7914ce828371e49932125a66fab04eae2ae2759e1a8b44d227756d2a940b74aabaef0791178e0f22ffc2ab077e022965ebe91d8e3ca1990264534957a0419e8a25368d9c4da67ee44f82f1092acc14cfb60c4546bf1f5f04d1ba305dd6e6978cc3707c851a2a255dff874da3d00f8ec966f3caef8266a5e11881f9571bdcd700811b5c39c1557b1ffe9a22cdd26d1a2f0c5c470df68730ce475f83fc1867021b9a08b974de72fe6cf06910bc43751de47ce68557a43e0a21010939fb7ac3906c802f3f05db7b895cbc9968835bad39ee335395099350ef355f55c93ca9878ed3ebf789214bfd0eebbbce7680558c2a22ac20d74f15d5f7d24ca4824af54c4210d731a8e7f50f77269f5b17050000",
    ],
    [
      "ETag",
      "FMNQDIpbMsUcmYgiAwQhpw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:33 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-42-1635192891311"
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
      "6f",
      "6b",
      "c2",
      "30",
      "10",
      "c6bf4bf6d68ab1565a41980e99828ab30a832112d3b3abb6bd2e49dd9cf8dd77a963ff616f92dc93e747eeb99cd83ec923d6619b247e2a411daf623077f630075da646d35660ae81d518181193135f5e7b72e8cbbc9f2713cf17e3c17d14c6dd2e39b47c844cb0ce896d134823cd3a0f27968b0c08d346640579ccb1b0e5623419848bde644652869195a6cbf1b8d71f0fd8b9f641add7c5fe130a17f3d1f4f62f6275aeb11d6ee6b00505b904db43a17007d28c6c3c4d8fa7e0682c9504cd2a7375112b2c0ba1101d529c56d3e16dd7e341d30fb8cb39195394c22498937719526bcca011e91c9f291d73c9a0aa2305dd56eb81645ef7fc86e7053c680d822a8e556107ea80896e5cc34bd54e5d6256b5fe8b6db788feca4a1006f8ffa0cf7df71b28241ad05b5491fb935ebd67e91fc931534883d16067d2b8cce706addbd02c8d2aa1c6a4a0ef1d26e6529fdf00b0cf69843b020000",
    ],
    [
      "ETag",
      "oxzAcH8cnBniM58aLEXdSg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:33 GMT",
      "Server",
      "ESF",
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
      "642dce443e86ee9a425211a77e6a6bd9301142301a0c4451d3e9ddebf41af5dde17d035614dc98fc74dcf3063c811b1b85c36238d508135127ea489df2032f70c6e0c4082ca41e89c2dd7c0648ece3f66d217734939745b949892c1bd5565fd573444bbc6d6238f3d330edcbf1a5594538934eebf4c77a460c951e8aa1a7152273af1b57362311112f957b99aabd82fa504f4735a68720eadb5b4697eb023a50be9f972a69d621b35bc3d791d281df7b416f12f95c91c2ba9357d422666795b9ba637ba62821e7dc6e2ca15b2862bc9a1b9fa5c38787ff0b0c00bfea5dc74dbebb6f77fd301c80bffaf9e9a6f9fd3fe6ace31df8f90557a4957519040000",
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
      "Mon, 25 Oct 2021 20:15:34 GMT",
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
      jobId: "grouparoo-job-43-1635192891311",
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
      "2bc8fbdabc0a4943a468cd52b25225a405d26e9a2664cc85b92538c5a65b55e5bfefda345dab4a1d5fc0bee7dc73ee832772c7ab8c4c48ca8bfb06eac74fb722254704142df0f65bf0c7c917e2b2b8f02f16b1e747375f7873359d22826b96a4db5d091d299a9a819c6ca26e518b66476b213a98a8e3d89dc1c81e0edce3b13bb00703e44928f325afee90fd4ba99d9cf47a07ed6e21445102dd71d96562fb72df7b38eeed6a710b4cc9de5bc91eaac8dec7a29f4bc1a8e2a29a6e2234d048a813d8525ea2857fcc2c3d7d9bbacbe9b65b20f88133a08c89a652da16a660a2ca79d1d4262b993c1163f3d50789bca5378f2d26ca665b2515ddc29195514513f5b8036b11ae57961f2cd6e16a16fbeb2089e6e7de6ad69daf979b55105937e75ee8598aa62518ae35b54ecd29c003ea672015af8c7aacafb5f27383fcf763d1049496d0069393fe880ec67d37cdd313968fed619af7214dc7e9c990da699fb90e38590a147946d4b06825aaccb6477d2783e498654ee2b8599ab8fd932cb15377e08c5d0a0ecbc9fe88fcaeb982332e7742f2b643e426f4632f89c34d309fc59e2921a74da9ce5a63ba80d71e151688a00f6adaeb2817a8a4dbed07b117cee6b17fedb5135e4241d963748f33ce692901d1b4c6e629a85722c3869160b6f2ce106c267679084a32f9f14474cfb58b572d7fa1c738406d57993789e2d00fbe1a3b07c4352d1b0379683f7419392fb5e9fd4f04e28eb649c8d5c60bbf93f62a841c6aa8d8ff87896013f8efaf76d87bc4e2e6a38c5478c6d561528bb01ada15e2a6da67b66b3bf81003aed5bbd870d43f344de7d019610b957aaea8dd7b2cb4156be40b088338fdc0346bff176a7f46ba77040000",
    ],
    [
      "ETag",
      "XNx4fFoPgJIJFTEISWBiuQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:34 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-43-1635192891311"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d93616fd3301086ff8bf99a8a8576658bb40f292dac52d68e361312688abcf812bc393e633b994ad5ffce391b0531a4ec4b72777e4eb97bfd66cf1ea4162c6177b2fed182ddbda9c17f0ec1065cabbca39741ed80450c3caf897cbc7c88bfcebaf9eaed4f934f17f517d7cdabf4e28208577e8786b364cf2a094a38967cdb33cd1ba0b61255dbe8a2cf22e6772614b7f966b9fa44798322e4ab9b2c4b67d9821da263a3e09e173dff8ab6db43c4eef16e031558d02584598cc57b28fd32ace97863148c1cb6b604c77ab83fa82db6865bc411554693f1289e8e4fe3f37767e7f1388e095458722f51137bb3a5f99847cfd5061f694b168f89b07d4c1b57fdb3a3ba14fd26215caef2e9a41ff06f809725b6da17836025adf34feafd069f55f89754fc95205d955443500d5a801da2a429b810169c1b24d115dc9823365bafb397aa6861518a61b0930380f2dd11f898add3ff494b06fba3d53ccd172f08e7c93647245f5e2db6797a751db8db6723cc761edcb54572958360a8f8647276fa7e7af2e4b10f187c47df49bc6d216225a75fe5527a96545c3938fc020be41fdb88030000",
    ],
    [
      "ETag",
      "wHk1ZBvDN/zpT6EgWsvDfA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:36 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-44-1635192891311",
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
      "ff85546b6f9b3014fd2bc8fbb2497991041222556dd6b20e29251921adaa694a8c31d42dc1d43659b32aff7d17d3f4b1aead8414f039e79efb72eed10dcb633442114b6f4b2ab69fae79841a882a9cc269dc25dcbb9b5d91c82f8b29cffef08bed263d380006ab5412af8b8c36252f05a172b498b752c1cb020bce9b10a8d9ef374dbb67994e77e8983dd3049da4593261f90da8af942ae4a8ddde7bb752ced38ce282c916e1ebc7f3f6a6db2e04bfa644c9f64bcb36b8c8f6fba687192758319e1f2ce6904029a958d2356619a4f0a48ca3a397a15b0caf5b2990378c504c082f7355a5052108cf139696424745a37ba4d37cf682e6eec43d0e8d95541073d5305619966a99e335ad3eb4fbcac0d2582e8b1be35b303d33565061c2322a57c6c57737708d479ae71b0bdf77e7a1f1f9f08b711a4c1733e3ebe51e6efcd704928ca9542cd7298638ca6895de4317bdd7b3ab045861496b7039e8d8d81c769c2889062419f6ac28e9d0281a46030bf7a20e71fab41f4714834e55d1b50ae7d018d3b4bbddd872709798a46739b6ed44a46fc783aed3b13a381938b19d3816da35d06fc1143d61b2e092d5ad44178117bacb3058f8c7e3d0d56524b8ccd4499d5c55c4f33c151409a477eada5528e3e054cdc5f34337181f87deb95bafc284a6986ce7b7b00c09ce24053616d04145c5198fa16968369d7ba137f5c71350e8f9cef60c89463fef9f04e1b6d05d56fa178d83607c091a2c04defe83cdc3c0f34fd16ef7ccef1c67a5e66881feaa0d363580e8352c2367b27344ef74917a1d778d27062caaa2e69b30cc475d51f1364e383434e122eebde4fcdac1d34070bbea3ad08f851b5ca2fa28a0091534271f6f189035f0e19fc4fec60217ee2cd8c08a2b06fb4c64654204adf79aadab641ed44ecf1ef4fa4893857a850d2d7b3fc02a461591ae69ae1e2aaa6fac9e480595f2910420aca35fcfeb2f4521274931050000",
    ],
    [
      "ETag",
      "d2coIxPhcbNupOolzoWyvg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:36 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-44-1635192891311"
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
      "526b6bc24010fc2fd7af2a5e63c40842d5866a51f1891f8ac879596d34c9a677171f15ff7b37b10d7d40db2fc9ce6466d81d72663b3ff2589dadfccd4b02ea74b301334a8731e824309a5e31461a588181111b52f64dd419f936005fb9bbb977afe6c7d7f9a1d1208596cf100a563fb3b50f81a759fde9cc221102d9b411614c1a738a5338edf6ddc9b4d91f1215a297528359afd76cf55c7629e4ae4068b3cce6dc39998ebb8387df6dcb65bcfb8f637129b02daec6b00605918474f558e116a4e9a6ad68da3980a2c64449d02c13671f360a935828c42231c54aa5c8ab96cd9ddb9ac32dce4918a014c6c788b4b309adc60c1a118cf140a5308b042a1ba99f75f6dc13cd4b76ad6cdb0e772aae939d93b28fa0f6e8eb1cc3f64a94efe098ad57921866a7fcc8aa5628ed73962b0ce4400221fe774a8dd7ac2f296d34a0d7a8bc9c11f283b2bee72dde4f6f9d483154483d6a482b2c5feb6c63aaa6b5ea4625506052d04fd4f1cd155fde00f76ed731a1020000",
    ],
    [
      "ETag",
      "MtnHQi5ee1bEkWdDrWxzWw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:37 GMT",
      "Server",
      "ESF",
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
      "cb",
      "76",
      "43",
      "400080e1779975e40871eb2ec8b44a55d47de30c260415cc48494fdfbd4e5fa3f9d6fff6ff0628cf312129bd36b8034f60419cb2cdb7662fabb0ac05573b4cd2de905fe2ae41420d0f669e1913a3b7c7a82ee2e1bdd4d47b64dd389d8a7c0aa91edabe563b75c5dcfca632f73b9b71f7e7cb49278378756131b4f46eb69f95ed71d409bd89f7be24a5256b82ac6614a7442341609639df165065c3c53e27b36c11e8c5b603a99f8d92138a9c13272c4f621d75a98876898ea4d75e3db1aa77c48a6c71c1eeb96896549c3f8c892881f03672f5c45401ca2279fbf0f07f810dc0737f1931492febedbca0281bf0b77e4a971eafffab188d78043fbf8a799ffb19040000",
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
      "Mon, 25 Oct 2021 20:15:37 GMT",
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
      jobId: "grouparoo-job-45-1635192891311",
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
      "db3014fd2b91f711fa4c4bda4ad5a84a60d5da744b52d0344d91eddc04431a87d829ab50fffb6e1cca4048f029b6ef39f79cfbc813b917794c268489f4a18272ffe54e32724a40d3145ff7c5d5f7dde5081ef4c989af6f8275ffefa2789c4e11216a96a2db2283969255c9414d36413b2d6555d052ca16266a0d86adde993dec8dfba371cfeef590a7204b9622bf47f6add6859a743a47ed762a659a012d846a73b97d79efecfa9da29477c0b5eabc95eca08aea7c2cfa35939c6a21f3e9264003958232822d15195af8cf8cd9f9dbd46d41b7ed14c13bc181722eab5cd7b63005977922d2aa3459c9e489189baf0e247097ee3cb4b8ccaa6d1ee5740ba7564c358df4be00ebd25fafac8577b9f657b370b1f6a260fecd5dcddaf3f572b3f202ebe69bebbb96a62c03c3b5a6d6b9b9797841fd189416b9510febe75af9b9418bf763a90928ada009464ef78cf646dd314b98c393913d644917181b3167486dd6e5e3010c6206147946d4b0682e739bd151cf1975a3843b4e34183add88f55912d1988d1d886d3e64037238258fa5d07021542195683a446efc45e846a1bff1e6b3d0352524b4caf44563ac2ee0b5478d0522e8839a0e75544854aadbbdf042d79fcdc3c5b5db4c780929e5fbe001679cd04c01a26989cdd350ae648c0d23de6ce55e20d84cecc731a8c8e4f713a97b5ebb78d5f2177a8803aced6af32541e82fbc2b63e788b8a6596520bbe6400ab47c8bb5a1ebc31f44e2923659c8cf8debff22cd930f099490f3cfa7896013f8f45f3b2e3e6271f5514669bce3ee70558bf0129a1d12a6dc67f6d87686673631e052bf8b9d39dd63d7ea1c7546d842ae9f2b6a161f0b6dc42af502c2208edf33dd3afc03c6d8d0d778040000",
    ],
    [
      "ETag",
      "ypGKvF8eqt++RtWSO2xIpw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:37 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-45-1635192891311"
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
      "10",
      "85",
      "df",
      "65",
      "bc2d099552a10917a0a83580fc9478610859da6929b6ddbabb9520e1dd9d5d118d9ae84d3b33fd667bce69f7f094161178b04a93e70ac5ee2c4135d1c51465952949b7921712c102542c21526cc7f39e6a89d583539fac5fcffdc6e46ebeed748890e11a7306de1ee214b34882f7b88782e5486b21cfaabc589ace02b52bf570164cfdd10df5398f743f9a0f06dddea00f07ebb41831c59686ffc7dae260c186afa618a3c02244ada5147c83a1f2b54dc9f232c39ae49508518281cd8344f0aa6482f31a4d6a4eb366bb8da6dd3e6fb5ed866d1398f190a99417c4ce67a40f14572c9bf22db9049700614a321c9beb0b8dd3c818d1a53f0a5cc7e8fb0a90b438cd70f937487ad78c3ec307768ce03bc7725e15ea445d0feebbbf1d47997e1e75d50dfa3f08a928a91312f8c3fe2ce80ec79a5b1cbdf7760ae558700a52a2ced0ae3bade6855b7f8ff592eba8e93d9e12155a1032fa3b6e53055ecc32898737122851f87b020000",
    ],
    [
      "ETag",
      "rwPUBt8rbW40Qhz2I3QJUw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:39 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-46-1635192891311",
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
      "5722ef974de22b84af20551d83ac8d4a439784766c9ac0719cd425c4a9ed50a18aff7d97a494b249ad8444ec7befddbbf3dd335ab334444314b0f831a762f7e98107a886a8c231dc5e794fbf3cff6774797d95c65be38945fdf5223e3b03042b58126fb284d625cf05a17238f71ab1e0798605e77510aa777a75bd677475b33d307543d7812769124d59ba06f6bd52991c369b87dc8d98f338a13863b241f8e6f5beb96d3733c11f2851b2799ab2095964f3fda4e7092758319e9ecd3d30904b2a9674835902168ecc30f87a2add6078d38801bc65846242789eaac21648109e462cce45a98a86cfa8b4f9e60379d6d41afbda2a03a97b2ce9aa06df82472ca14b16ae342cb5e5325b6bdfddd9f5112557dadda5e55ada29d876b4b9e3589eaf7d3effa25db8b3f98df66d7182a99da6920a4a5969337762b925f4e562627963f01f52a9585abaf77190d0c2f94b83edff9fb5206005ca5570d96ff5b03e68994114f4493430ba41d4a2413008fa5d6c042d627668270c28069e2ad44b164e79da377a01a1b44b421a611c06b8dbd703506bebddd02051a7ddee99d43443b4afa127c1149d309971c9aa2ea33bd7f6ada5efce9df1c8b7ca32229c276a52992b8a78eb534191007aa7ae7d11651c32154f663bbee58ec6be7d6b555332a531263bef11e624c289a480c6026fa8a2e29a87d0347433f36cdf9e39a32930caa7bf3920241afe7e3e12fc5d56765995ff68e4baa30570b01078f74f0c7cf43a68bf7f93ee1627790929f1e5a9d2df5601a4432dc753fbe4d43939f5d0fecf1e7e3504ab5265463fe696bb40d5954b232a684a3e9e090097810f37feb07e8085058434308c8ac10412592421825693c836652915db344cbd63a0122cd47fb176b77d",
      "6879a15128d20d4dd54b45d5fa954d2c42b97c05411006c8b19d0b88fe05b03cb8effe040000",
    ],
    [
      "ETag",
      "KSwZSTXfHMKngv3wif7kYg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:39 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-46-1635192891311"
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
      "c1",
      "6e",
      "c2",
      "30",
      "0c",
      "fd",
      "17",
      "ef",
      "da4a2b3044913814848009182b70d9845028a614da2624e95085f8f73965629b98401c764962fbd97e76de01b651ba843a2ca27097a1cc1f42d4afe6e1a3ca62ade8123c550816a066212137ad5d7717b8b5b43460a370e0c5cfee5bbe6f3408a18235260cea075845182f15d4df0f90b204294d643258b3a290ce85f18c277e6fd8213be14b630fa7fdbed7ecb7e1689db3e673b1fdcee80d27ed4edbff2b6576b460c3173eae50621aa0212124df60a07b663ec51211a3ad38d1400505b8088492678249ce6df2d895aaed54cb4f8e5baab94ed9710818f380e988a7849d8e891b68ae59ecf33d8d074e8510b278d3a8abe2fc20ff8b646988c524c6740a823f019e203ae778e922de8c335ca094f9951a2364f24a89df2d6e51a8fc3fc5fb5bdc5ce32587cb26f7af69f6f5c9cd5ca31a494e8a5168c4f278124e8b1b3169129996195a1030127e37d227fbf8097eeae69e55030000",
    ],
    [
      "ETag",
      "jCqHqc98n2MaPgMAlJ9Zyw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:39 GMT",
      "Server",
      "ESF",
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
      "08000000000002ffedd34b7282300000d0bb64ad4cf92add89150546018b58d83011824424894190d0e9ddebf41af5dde17d0398e7a86db33bad1101ef4040c59472c96373cb3e5fe666c2f3923a587886f02fa9e2b862aa6a3d867d540add34fcab522ddaf32eaaf22eb695d36e595acd6de625b487fb47ecca2e1c91b6e6c4c0c3d2b911fbc8c8b9ced4c2add0dbacb2ab3acda021cf82fa4b6dfa4db409466e758dea3359b3fd6933d27d2bea4d917ae9e9ee847d53a3a40b6e845f86c3673c6e43a2b78147572bea653239acaf21c45df8b130341807aececa15c2fee1081f45b1970bb6955e5efe2f3001686098a336c3cfedaa6e9a13f0573fbb0b869eff2d0439e2e0e7171f6b4a9e19040000",
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
      "Mon, 25 Oct 2021 20:15:39 GMT",
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
      jobId: "grouparoo-job-47-1635192891311",
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
      "6f9b3014fd2bc87b6d1268a08448d11a25748d94900648ab699a906d0c754b30c5265554e5bfef629aaedda4f609dbf79c7bcefde0053df23245634478fed4b0faf0ed4110748698c239bc3e17f3787d3b5cc5ae7998dd449ba5e56ee4663201046f5912efaa82f5a4686acae4781bf5f35a3415ae85e841a29eedf6ac8ba16379e723cf1a5a16f0242bb2252f1f817daf5425c783c149bb9f0b91170c575cf6a9d8bdbd0ff6e783aa160f8c2a39f82839001539f85cf47b2128565c94936d04061ac9ea84ed302fc0c25f664a2e3fa6ee73bcebe700de73ca30a5a229556b0b525051663c6f6a9d158d5f90b6f9ee80227fe9cf62838aa2d995498977eccc48b1c2893a54ccb80ad72b63115cadc3d5345eac83249a5dfbab697fb65e6e574164dc5dfba16f284c0aa6b9c6c4b8d4b7002ea09f32a978a9d5e3f6b9557e6dd0e2ffb1b4049096ac0b26ae7981ad91e9918cb8341b0d1d92998c9011711d3c2426f56c66a78461e06951cdc2a5282dd7b918a5cc4e3ce027b6439cc4733333492923a9377446a64dd0f10c3dd75cb139979590bceb10ba0b17b19fc4e136984d635f9790e1a650f3ce585bc07b8f0a0a04d027351ddb2817a0d4b67b11c47e389dc58b5bbf9bf092e5981ea2279871860bc9008d6b689e62f54aa4d030144c57fe1cc07a6237a7a044e35f2fa8ed79ebe25dcbdfe8310cb0b5abf4174571b8087e683b27c42d2e1a0dd977075481e57ba80d5c1f7f031296b4cb82365b3ffc89baa79065ac6625fd7a9a00d6812fffb5d3e20316561f64a4823bec0e95ad08ad59b7435c97fbcaf6869e67eb3f55e15afd13b34dd3b14f5d6b73b419d98e95eab5a26ef1a1d04eac916f2008c2f803ddade31fd8485f3078040000",
    ],
    [
      "ETag",
      "wlDTOV3MT70yCPSQL17QsQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:40 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-47-1635192891311"
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
      "8d92dd4ec2401085df65bcb4442b50a0091745519b00f253f4c210b26ca75068bb6577ab21847777b6221a35d19b7666facdf69cd3ee61136721b8b08897db02e5ee6c897a648a31aa22d18a6eb9c8148205a8d992c88c7774ffc9978ffdf3d1459d6f9cfacade8eda6d22145f61cac0dd431463122a709ff790b114698d8ba448b379d959a077b9194e82b13fb8a33e15a1e907d35ecfebf4ba70b04e8b21d36c5ef2ff589b1d2c588bc51823949871345a7229d6c8b56f6c2a96e609569428244705255c3e584a51e44c0a51a149a5d6a8d84eb56eb7ae9a2dbb6adb042682331d8b8cd8e984f481169a2563f14a2ec121409625198ecaeb0b8de3b034624a7f1038b552df5780a4457182f3bf41d2bb62f4193eb06304df39968a22d327eab6f7e0fd761c65fa79d48d17747f104a53522724f0fbdd49e0f587869b1dbd77761ad5500a0a52a1c9d0beac35eb0de7f23dd66b61a2a6f7b85a16680167f477dcc71adc88250a0f6f9544e61d7b020000",
    ],
    [
      "ETag",
      "ncBtMWIrVM+Q/5ck65h1qQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:40 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-48-1635192891311",
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
      "6d6f9b3010fe2bc8fbb2694980260112a9eab294764829e980b4eaa629b1894ddd124cb1491755f9ef3ba0699a556a2524b0ef79b93b9f7942f73c5ba221223c792869b1f97427086a21aa7002bba7f95f3b5b3fe85d927e0d3376367934a35fc9f1312078c5927895a7b42d4559c4540e676127294499e342883608b57b4edbb4ba7d7370e40cccae69024fd2944d78760fec5ba57239d4f59d772711224929ceb9ecc462f5b2afaf8ff4bc10773456523fb4d4c145eaef9b9ea422c68a8bec78164202a5a4c59cae304f21853d7349be1d4a77385e751200af794c711c8b3253555a20118b8cf1a42c6a55347c42759aaf3e50e84edc71a42d7290bac5922e5af05d08c6533ae7cb8586a5369fe7f7da5930bdd8a3e442bbfee106ae7608f67c6de6fb6e18699f4fbe68e7c17476a97dbf39c0b40eada4825216da343875831afabc310ac790fe924ac5b33af908939456893ff7d77b7baa15012b106e8273dbb0b0e91803c2881d33a7db27cca08438c4eee32e31e2418ff6968462e0a94abd66e14c648e6539866d2f4dc258d764a4cffa8c121653bb472c67696067809d2e35d1b6851e0baee82997b990bc6932ba0ebcc89d47c1cc1f8f22b72e83e13255a74d725511aff354502480dea96b5b45b900a7eac43c3f7283d138f2aedc66482634c1f1267c803161389514d0b8c02baa68712196d03474390dbdc89bfaa30930ea93bfdc21241afe7eda13a24d5e7759d56f340a82d10d707051e0cd7f31c8c3eaa1edf695dd154ecb1a52e3eb55a3bf6e02a86ad97e7574b0ea1dac2cb4fdb385a785e0a634cee8e7cc0d6e50b31550460b9ac51fcf0480ebc087177e77fb000bf70f6c60161587098c65651217b49944beaa4b69d8839e615bf5ef42e142bd89398eb16b79a55129d215cdd47345cdedab9b58854af90282200c90eff9e710fd074f7b1f65fd040000",
    ],
    [
      "ETag",
      "Dpx7nvq/3bl+SnfFLw1TZg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:40 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-48-1635192891311"
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
      "ad",
      "52",
      "51",
      "6b",
      "c2",
      "30",
      "10",
      "fe",
      "2f",
      "b7",
      "d7",
      "1656ed9c0a3ee828aee09cabf66988c47ad66adb64493a29e27fdfa50e37a90c84bd24b9fbbecb7d977c07d825f90abab04ce28f02657917a37e33870055916a459be0b942b000358b89e9067eebd1536528c2bdff328d8b4dc85bfb5e8f182ada60c6a07b807582e94a41f7fd0039cb90ca4421a30dab2ed2a53099e92cf0c7438a33be32f1381c8dfa83910747eb5cb55888dd4f853f9e79432fb856323f5ab0e5cb00d728318fd08810926f31d2be994fb14ca4682b4e32504145ae8058f24230c9b94d19db6ddb4eabf9e0741aed8ed3741c22a63c623ae13971c3296903cd354b03bea7f1c0718921ab338dbaaed64fcaf70575ab06319153e9fb8d4f90c933dca8c183b4c0254a599e396e8df32a591effd5e35243bdc98586fafd750db7b7b8c4eb3dfefd996e9778ed19e7df9f3c2835aa89e4e41885c62cf727e33c7163264d26d3b2400b2246c67f4ef4293e7e01c5e8254b55030000",
    ],
    [
      "ETag",
      "4RI67EsyUpUwIMSguhUo6w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:41 GMT",
      "Server",
      "ESF",
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
      "d3db6e82300000d07fe9b3215c86c8de8a40e532099369f58540d754ae2b948075d9bfcfec37e6f987f30d0a42a810f9f4d5d01ebc0259e8b64294886f1c9fd509fa884ee1c1123deeadb25fac90c0a35b18daf53db6791c6076b9e70376f5b82db300cd4d91325d047037a487740b178f43333a774d6b461756fb906ff7d7d6bb219762d52cc9514c75888c583bad074b340e8f17ff20e494acdbb333a8f32c7752f3eefb3bdc2c3695decbe715c39091ec2de8f2cd29719a4bb24e7b9f769e6be93033488f661ab92933da44db55482f27d9e9b150f151ed64161acad3d3ff055680de78355291578fed8669db2bf0573f9f24a78fff0e2d463a829f5fe300f67c19040000",
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
      "Mon, 25 Oct 2021 20:15:41 GMT",
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
      jobId: "grouparoo-job-49-1635192891311",
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
      "000002ff85536b6f9b3014fd2bc8fbda2410f22252b466295d9112d20269b54d13b28da16e09a6d864cdaafcf75d4cd3b5aad47ec2f63de79e731f3ca17b5e24688a08cf1e6a56edbfdc09824e10533883d7c77cdf9f3cde67dff6c4bcfa39f72e83bafa7b359b0182372c89b765ce3a52d4156572ba09bb5925ea12574274205167e074ac913db49cfec4b16ccb029e6479bae4c53db06f952ae5b4d73b6a773321b29ce192cb2e15db97f7deaedf2b2b71c7a892bdb7923d5091bd8f45bfe68262c54531db8460a096ac8ad916f31c2cfc6726e4f46dea2ec7db6e06e01da70c532aea4235b620051545cab3bad259d1f409699baf0e287497ee2232a8c8eb6d111778cb4e8c042b1cab7dc98cf360bd323cff7c1dace691b7f6e37071e1aee6ddc57ab959f9a17173e106aea130c999e61a33e354df7cb8807ec2a4e285568f9ae746f9b941defbb134049096ac0dc6637384ad89e990948c693ab1872435192113321e629b98d419b0414218069e16d52c5c40cd80a423bb1f63e28c63409118d3fe283629f012db7292a1890e27e84fc5153be3b21492b71d42378117b971146cfcc53c72750929ae7375d61a6b0a78ed51418100faa0a64313e502949a767b7ee406f345e45dbbed84972cc3741f3ec08c539c4b06685c41f314ab56228186217fbe72cf00ac2776790c4a34fdf5849a9e372e5eb5fc851ec1001bbb4a7f5118059eff5ddb3922ae715e6bc8ae3da0122cdf426de0faf01b90b0a46d1674b571831fa87d0a58ca2a56d0cfa709601df8f45f3b2e3e6061f541462ab8c3ee50d988d08ab53bc475b9cf6c67600dcd11d2e04abd8b8d2cfbd8b5264793916d59a19e2b6a171f0a6dc56af90282208cdfd7dd3afc03ed8e07a178040000",
    ],
    [
      "ETag",
      "xly28xkgByb0QZAIPRurzQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:41 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-49-1635192891311"
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
      "82401085df657a8ba9544525f1425bdb92e01fe24d1b635618100596ee2e6dacf1dd3b4bad6dda26ed0dcc0cdf2ce71c38c02ec943b0619dc44f258afd458c6aa60b0f65992a49b782e712c100542c26b22d1fc693e479ba799d956c170f2e3dcbc759af47840c369831b00f1025988612ecc703e42c435a0b785a66f9aaea0c50fb420fe7bee78cefa8cf78a8fbf1c275fb03770847e3bc1832c55615ff8fb5e5d1802d5f7b18a1c03c40ada5107c8b8172b44dc9b222c59ae4a508504205570f62c1cb8209ce6b34a935bb35d36ab4ccee55a76b364c93c094074c253c277631277da0b862a9c75fc825580488aa24c351757da67112564674e98c7dab59e9fb0a90b4284971f537487a378c3ec307768ae03bc7325ee6ea4cddba93fe6fc751a69f47ddf4fde10f422a4aea8cf8ce6838f7fba3a9e69627ef83bd4239159c8294a83334ebcd4eab6dd5df63bde63a6a7a8fad448906048cfe8efb44811db154e2f10df8a77c7c7b020000",
    ],
    [
      "ETag",
      "7sZNOivPhzQuakgB/R6TeQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:42 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-50-1635192891311",
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
      "02ff8553fd4fdb3010fd5722ef17d0fa9536fd94100b256391da94a5291d9ba6d6712fc1238943ecb075a8fffb2e09053a24902aa5f67befeeddf9ee81dcf2644346c4e7e15d0ed9f6c32fe1931a014543bcdd7e5b2a673a9b9e8dbfb3bffc4f5b051f97ca3c3941062f5492c669047529f28c811c2de68d3013794a3321ea18a8de6dd5f55ea7ab0fdb83a1ded175d4498882094f6e517da3542a47cde63e772314228c80a65c3698889fee9bf7ed669a895fc0946c1ea66c6216d97c3be9692418555c24278b391ac825642b88298fd0c2b372e37f3a0cdde0346e8448bee70c2863224f54610b433091043cccb3322a193d90d2e68b3f646e4dacb1a78d67e6c49a8fad23f3eae2684de322c6fab8a6b58e352ab5fd454d5b6379018f60c537eb0259add25bedb33b9b2282666ea804b9d6965f2cd7d20ec9b6a32d1cc79a7bdad1e9b176e1ce1697dad9f501070d6f402a9e94763dea4750587deca8fdfa1d0b015598b30257fd568fea83d6d00ffc3e0b069dae1fb4c0f7077ebf4b3b7e8b0d0d30363e50d4a9227aa9a28948869b41072845501f326a401720a07e5fd7593b30e886e9a077061d9d915d8dfcceb882732e532179d556b2746dcf5a79eec2199b9e559611d03c52e795b9a288973e151689a437eada15281798a97823dbf12cd71c7bf695558dc50442cab6f33b1c8c804612904d331a83826c2a36d83472399bdb9e3d73cc092acab7bedc332419fd78781678dbb4ecb22abfc4745df31a3534cbe8f63f0c7df40cb2dbbd487745a3bca494fcf254c5bfaf00a2632dcfa7f6c1c93838f5c8eee70e7f3582bb5165265f17967b4daa2b1702c82061efcf04924be0dd15dfef1b7271e3308d5478c60964b248c232a82691c76529957a68b4dbbd3e29c9997a8519adf6bee5458c2222c490a8c78aaa7d2b9b5840b97c22218803e4d8ce05a2ff00d4cd3f12ef040000",
    ],
    [
      "ETag",
      "yXWtNMOMBCZczix2tf+WtA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:42 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-50-1635192891311"
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
      "91",
      "5d",
      "4f",
      "c2",
      "30",
      "14",
      "86",
      "ffcbf1763394c967c20520280aa813bc318474dbd91c6ceb6c3bc942f8ef9e0e0392702edaf3f1bcc979db3d6ce32c802e7871f45da02c6f22d46f26715115895674e522530816a0e611914f38f498578edbf71d167ccc66e176f85cdff57a4428ff0b530edd3d8431268182eee71e329e22c9782a8a4c13a4cbdcd4e3e94b7f41652a0253ce97d3697f301dc1c13a49d6eb7c7b164ce68bd1c3c8bd26591d2cd808cfc51025663e9a0d722936e8eb8931a7789a27682b51481f1554703588a428722e85b0a963376a366b3a0dd6a9b73bcc618cc044f85cc7222376f94ebb81169a27aed89137700890554a36c3eafca136bb6db79ab57fe154a6cca85eed7a09b7ce637665dc60cd8b38c177065efd6d342835aa5729c89e42e3ac76743914c6b9a617d1b2400b7c4e5ff418eb637df80508034c30ff010000",
    ],
    [
      "ETag",
      "JeCb1byF8D91dVMMfkCK2w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:42 GMT",
      "Server",
      "ESF",
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
      "8b08000000000002ffedd3516e82300000d0bbf45b892845d81f1508088a88caf0a7c1ae91a2426d190866779fd935e6bbc37b829c102a256eea0badc007e8f3a9a91025e00672cfe52144b84079c610e2bb1aaad8839be54368d7bee19334ae8a3e7593a5d0e3f9bd6b733a770c72dc7ad8772efa8a06ae28f46e62ed63e806f9f8fbbe8acd999ec84dcb636bbdf47b72c17aac6a88d9da541dc6e750d8d781b0a836b61ddf7367df945608e9e22a351f79379c789f51263babb6776156d92c494f4114ade4b9a8e6bd6e3a61162d54bf2cd3e18b1cd7edd09d5c088fa631a418b14d78706e0fe5ededff0223401f9c092a317b6d9f41d31c81bffab8e9397dfd47341754809f5f6ca3569b19040000",
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
      "Mon, 25 Oct 2021 20:15:43 GMT",
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
      jobId: "grouparoo-job-51-1635192891311",
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
      "2b",
      "64f6d5b6d0d2429b346b53519bb454816acc664386e905472983cc50634cfffb5e06eb6a4cf48999b9e7dc73ee07afe491175b322109cf9e6aa85e7e3d88849c105034c3d76516560f005efe189d5fdfed671743d51f3e4fa788e00d4bd25d9943478aba6220279bb09b55a22e6925440713758656c71a0d86d6b8ef8ead8165214f429e2e79f188ec7ba54a39e9f58edadd4c882c075a72d96562f7fededbf77b65251e8029d9fb2cd94315d9fb5ef4772e18555c14d34d88066a09550c3bca73b4f09fb94d4e3fa7ee72baeb6608de730694315117aab185299828529ed595ce4a26af44dbfc7020a1b7f4e691c1445eef8ab8a03b3831b654d158bd94609c07eb95b1f0cfd7c16a162dd67e1cce2fbdd5ac3b5f2f372b3f346e2fbdc033144d72d05c636a9cea9b8f17d4df8254bcd0ea51f3dc28bf3568f1752c0d01a525b4c1d83147d472cd7192260e4bddc130494d48123771867490986c6c83bd4d80224f8b6a162d44e19a6e7fe49883b86f3ba3d81ea5a338011b62dbb6fb8ee9382cd9dae470429e2baee08ccb5248de7688dc068bc88ba360e3cf6791a74b48699dabb3d65853c0478f0a0b44d037351d9a2817a8d4b47be1475e309b478b1baf9df01232ca5ec2279c714a730988a615364f41b5125b6c18f1672bef0cc17a6257c7a024933fafa4e979e3e243cbdfe9110eb0b1abf4978451b0f02fb49d23e286e6b586ecdb0329d1f23dd686ae0f7f11894bda6621d71b2fb823ed5300295450b09fa789601df8f15f3b2e3e6271f551462abce3ee30d988b00ada1de2badc37f6d81e5863976870a5bec406a679ec5a93a3c9083b28d45b45ede263a1ad582ddf4118c4f1fbba5b877fdcc2e664780400",
      "00",
    ],
    [
      "ETag",
      "LgSrjeeElkTFQYvAG5t25w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:43 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-51-1635192891311"
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
      "02ff8d92d14ec2401045ff657c2d0915a8d084070aa818408592688c214b3b2dd5b65377b72a21fcbbb315d1a889beb433d333db7b6fbb85c7240fc18555123f9528374731ea6b53cc5095a9567c2b28570816a0163193783bf09d8b57df6bd3e6c6f1567d2f9a1fc7dd2e132a586326c0dd4294601a2a70efb6908b0c792da0b4ccf265d559a0378519cefdd9687ac67d46a1e9a78bf1b8e78d87b0b30e8ba1d06259f1ff58bbdf59f040ab194628310fd06829243d60a047c6a6125991624d5129035450c1d583585259084954e349ad65d76ca7d1b23bc7ed8eddb06d06530a844e28677631677da0498b74462fec121c066455b2e1a8ba3ef338092b23a61c4d7da759e9fb0ab0b4284971f937c87ad7823fc307b68fe03b27322a737da04ec797bddf8ee34c3f8f1af4fce10f42694eea80f8a3c970eef7265786bbdf7bf7361ad595240e52a1c9d0ae37dbad13a7fe1e6b9f4cd4fc1e57cb122d0804ff1de789063712a9c2dd1b55cf399d7b020000",
    ],
    [
      "ETag",
      "eYDT6JxTB8oyX6BbCBfS2g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:44 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-52-1635192891311",
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
      "000000000002ff85537f4fa34010fd2a64ef1fcdd91f148ab489f16ae5944ba51e05bde672691718ea2ab0c82ebd34a6dffd06b06acf44932674f6bd37f36676f6893cb02c224312b0d56309c5e6cb3d0fc811014957783af2a7d199916bbf82af8e7bf963adce26737b7472820c56a9044df3045a8297450862e8cfdaab8297392d386f61a256bfd7520dadaf0e7ae640d5541575029278c2b20754df49998b61a7b3abdd5e71be4a80e64cb4439ebe9c77d6bd4e5ef07b08a5e8ec97ec6015d1f9b8e869c2432a19cf4efc191a2805140b48294bd0c2ab320abeeda76e339ab657485eb3106818f23293952d4c11f22c66abb2a8b392e113a96dbef94366d6c41a7bca78ea3bdec192a6957879a850a1ec822365893dc52c81058b9615b258e40fca77777a85083ab8a302c452b9bdb45c4bd927db8ee23b8e35f39483d343e5c29dfad7cad97c8f832e23109265b5478f060954fe9ec768bfbfbc4a4025d66cc0c571d7a0aad91d0471701cc6a6d60fe22e0481191cf7a91674c3810e7a1400459dacb2d72a9af14cd55503741d340370fe013541a3b16e1861df34fb31d57bd41c0ca2b84fb647e46fc1249c339173c19a59925bd7f6ac85e7face78e459751b312d1379de98ab9a78eb53629348faa0af6d85328e95aa8bb11dcf724763cfbeb19a5d98c08a869bd9236e434c1301c8a6054d414271c5231c1ab99ece6ccf9e3aa3092aea0bbede310419fe7e7a15789bbc9eb2acbf64e4baa3396a6851d0cd7f18fa3074b2ddbe29774393b2a6d4fc3a6af2af1b80a8d8cb6bd4db8bf4bdc820db3f5bfc1d117c104d65f2d3b7dc39698e5c88a1802cfc7c27905c039fbeebdd23432e3e332c2324c6b881a1a88a8405349bc8d2ba95463dd0f55e572735b990ef304d337623af72541921854c3e77d43cb27a8815548a171282b8408eed5c20fa0f39c4e332e4040000",
    ],
    [
      "ETag",
      "AUOdB6p3Xb+NRHJv1SLYIA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:44 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-52-1635192891311"
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
      "2f",
      "e3",
      "b58d9602b1241cc0104409912a0735846c97a116da9dba1f2a21fc77678b21265ebceccebc8fec7b7b805da1d6d083acc8df1deafd458e76ee87148d2bade1ab26651002402b72568aacfba5c6cff7c9249917976ed0cee4cbdd67bfcf0a23dfb012d03bc0a6c0726da0f77a00252af4b68a9cb22cb2fbdaef93d9d3683c4a19a868ed81d9623a1d0ca723380667d36a55effe65591e03d85296e206352a893e43ad698bd24e7c3d23aabac4d090d3120d34e286c835b95a68a29091b0d30aa36edc8992d67512c551c4c292a4b00529d62e1e391b58b2a24ce993db41cc02dd8c5c74d39c1f0c779a0e7e6a35d17e73dd3317fde1e233d7f6dcf2e7b1e1dea279d0c4c90dfad057a70237e44b592e6bb5c300a4e0ffbf2dec693f7e03fac586f2dc010000",
    ],
    [
      "ETag",
      "ab6xnGYK9I9Qi/uA4bcZJw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:44 GMT",
      "Server",
      "ESF",
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
      "02ffedd3417282300000c0bfe4ac0ca008f4a685362da0a840f0c484186b0049205840a77fafd36fd4fdc3de0126844a9975bca435780123d66d85289eb0566f5f053b4c55132fea9ac94e5466ca0ddca7ad27fc2ba23573301cbac8dfe6cb3e456e2958b3a1b31e6e3c9bbc87a81eae5a641718267e6440752d33d3f5f8f765da44e73cc937fdc04b383a3c158b4b3fec92d7b8b12a6b1a332d4f861dd26f312c8b203f71171d25091dd7dad20e0b3fd7d76d587dec57462ce7f388862856e7a373ee33e2a416f43e975aa21e8b404737484e76a2cfe2fa501dd4205cecb9f2f4f47f8109a083602d95197b6c9f19b63d017ff5b36e14f4f17f45714b5bf0f30bd33b8c8219040000",
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
      "Mon, 25 Oct 2021 20:15:44 GMT",
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
      jobId: "grouparoo-job-53-1635192891311",
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
      "4fdb3014fd2b91f74adba44ddba45235aa368c686d0a690adaa629b25d3b18d238c40e08a1fef7dd38948190e029b6ef39f79cfb916774278a1d9a2022b2fb9a554fdf6e25412788699cc1ab5f0efcdf6470f9d3e67eb820cbc7dcab82cbe91410a26129bc2f73d651b2ae285393eda69b55b22e71256507127586838e331a0c1dbfeff9cec07180a758ce97a2b803f68dd6a59af47a47ed6e266596335c0ad5a572fffade7be8f7ca4ade32aa55efbd640f5454ef73d1efb9a4580b594cb71b30502b56a56c8f450e16fe3377e4f47deaaec0fb6e06e0074119a654d6856e6c410a2a0b2eb2ba3259d1e419199b6f0e68132c8379625199d7fb222df09e9d583bac71aa9f4a669dc5eb95154667eb78354bc275946ee6e7c16ad69daf97db55b4b1aecf8338b0342639335c6b6a9d9a5b0417d0df31a54561d493e6b9517e6950f8712c0d01a4156b83e9d81e61c7b37dc2c998726f3024dc668478643cc4036253df65ee8e300c3c236a58b89085cfb9ebbabe93b2914f53d7233cf5bc3e49c73bd7b639e39c782e3a9ca0c74a68b610aa944ab41d42d771980469126fa3f92c094c091cd7b95eb4c69a02de7ad45020803ea9e9d0448504a5a6dd619404f16c9e8457413be125cb307ddadcc38c39ce150334aea0799a552bb98386a168b60a16003613bb3806159afc79464dcf1b176f5afe4a4f60808d5d6dbe6893c461f4c3d83922ae705e1bc8437b402558be81dac0f5e12f206149db2ce8721bc4bf50fb1433ce2a56d0afa7096013f8f25f3b2e3e6061f5414669b8c3ee50d588d08ab53b244cb92f6cdf1d3af6081970a53fc4fa7defd8b526479391ed59a15f2a6a171f0a6dc56af50a82208c3f32dd3afc030190427978040000",
    ],
    [
      "ETag",
      "9p39Zb3QK0f9IDbLwl8rEQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:45 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-53-1635192891311"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92d14ec2401045ff657cb42454284a131e8aa2d6002294c4680859da69296ebb75772b41c2bf3b5b118d9ae84b3b333db3bdf7b65b784af3085c58a4c97389727394a0be33c51855c9b5a25b21728560016a9610e9add4cdeb31779a7e90dedbbd45d68e1e26eb4e8708152e3163e06e214e91470adcc72de42c435a0b052fb37c5e7516e84d61869360ec0fafa8cf4464fae1b4dff7bafd1eecacc362c4349b57fc3fd6663b0b566231c61825e6211a2d85142b0cb56f6c2a96151c6b4a94324405155c3d48a4280b2685a8d1a4e6346a76abe1d8ed93b3b6ddb06d02b908994e454eec7442fa400bcdf858acc925b40890554986e3eafa42e334aa8c98d21f06ad66a5ef2b40d2e294e3fc6f90f42e197d860f6c1fc1778e65a2ccf581baecdf7abf1d47997e1e75e105bd1f84d294d40109fc416f12788391e1667befdd8d4635928282546832b4ebcd33e7b4557f8ff55c98a8e93dae96255a1032fa3bae530d6eccb8c2dd1b48a24a057b020000",
    ],
    [
      "ETag",
      "AjsJz+l54ITiX1Ebm9dZSw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:46 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-54-1635192891311",
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
      "2a91f74f2b51f2830001a9ea18cdba4834d024b4eaa6096ce304af214e638709557cf75d92d296556a25a460bff7eede9def9ed003cf566888084f1e4b56ecbefc1104b5105338815b7bbd9e5ee9e67636a2a999d8be59e0fce7cdf9393078a5927893a7ec4c8ab2a04c0ee7613b294499e34288330874d6b5cfcc5ea76b0e2c6760764c137492a5f184670fa05e2b95cba1ae1f72b713219294e19ccb36159b977b7d6be97921fe30aaa47e9c52872c52ff38e9452a28565c64e7f3100c9492150bb6c13c050bafca15f97a1cbacdf1a69d0079cb29c3948a3253952d08414516f3a42ceaa868f8846a9b6ffea0d09db8e3481b4f4713371cbb27e1fcfa648937558ce5694b334e352cb5c3454b5b4279314fd982af9615b258e40fdaf7607a0d08985963c9e452bbfbe106ae764cf67c6deefb6e18692717a7da55309dcfb46ff7471c30bc6252f1acb61b6192b2caea7347bdf7ef5809b0829c0db8e81b3d6c3ac680c4a44f63a7d325b1c1087148bf8b3bc4a0039bd92bc230e85415bd56e14c648c0c1c621b96459cb8eff418a166cfe962d6b1a9410cab63910e71706ca27d0bfd2db862975ce642f2a6ade82ef022771105737f3c8adcba8c1897a9ba6ccc5545bcf5a9a048207d50d7be42b9804cd51b797ee406a371e4ddbacd584c5882e92e7c84c188712a19b07181374cb1e25aaca06968360dbdc89bfaa30928eab79e1d18120d7f3dbd0aa25d5e7759d55f340a82d13d687051e0dd7f18f8e8d968bf7f93ee16a7654da9f9f5a989bf6d0054b5ecf5641d9deca3530fed7fefe1d742b01b4d66743377837bd45c052c6605cbe8e73301e41af874c50ffb065cd8384823159c6102a9ac92d0823593c83775298d7a60f7acbe856a72a1de61b6",
      "651c5a5ec5a822b20dcbd47345cdbed54daca052be90008401f23dff0ad07f316f5a03ef040000",
    ],
    [
      "ETag",
      "4hhOG/1vPAcl1g4N1rapZQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:46 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-54-1635192891311"
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
      "d1",
      "6e",
      "82",
      "30",
      "14",
      "fd",
      "97",
      "ee158c886c62e2836e4edd8853a64f8b3105ae0c042eb6658618ff7db7b83893ad0fed3d3de724e7b427b64f8a88f55990c4870a447d17835aeac10759654ad251622181190c148f49f9220fd16b102c534c8f53bbb3b0cbd9d3e438189042869f9073d63fb15d02592459ffe3c40a9e03d9788e55a148a4ea52e367ef6db8229863a4e17ced79c391376667e36ad96ecbfdaf61365f8d2763ff3fcbe66cb014031f7620a00841272805a610aa992e27795e66604aac44089235e28688055625178826dd984ed7b4ee6dc7723b3dd7b22d8b8419865c25589076fd4ed99842c5331f8fd48dd92410cd483577cdfe45d76ecb7e706f57d349339d26eaadd66ab7ecde95b7fef0dd96e35ce9aea6373f1946b502b910488524e82eed4baf47d45d15bd811215182ce4f429d3445df0f91be189ec67f1010000",
    ],
    [
      "ETag",
      "JsqdKbbQjojwH32P3pIDGw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:46 GMT",
      "Server",
      "ESF",
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
      "d0bb64ad8e04b0a43b919f3288a3a2c8864924208df249400d9ddebd4eaf51df1dde37c0e7331522ed6a462bf009248668729ef88d613a45790ae2ccd887872d3950c142a5d763384e7655b2f0ba4b60b90f554dcdcc9a913612bd11ed96c55df670967cad36f8e69b1556c74e5697e4ea5e2ce8a5752e3ddc6b45a1d81f1ee5f33b5b9de461c32b9bf9cc5cc3e97549ae5b3fbe1d9db68e0ac6b09bb5adaa79036aec00e7259c123f8f4c34efc5be7bc4b13a5b5f82e1a43dc48a13d8de066e25c671613b524339a96363ad87e3545198abcb1007399abcbdfd5f6004e8b329391569f9daaeea088dc05ffdb4930d7dfd3729e694839f5ff0906ab719040000",
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
      "Mon, 25 Oct 2021 20:15:47 GMT",
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
      jobId: "grouparoo-job-55-1635192891311",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b6f9b3014fd2bc8fbd8260492340fa95aa384ae9112b211d2eea109d9e642dd02a6d874ebaafcf75d4cd3b5aad47dc2f63de79e731f3c925b51c4644a9848ef6aa81e3edc48468e09689ae2ebddd7f1f7daddd8f268555de68babfa8f3afa3d3b3d458468588ae665061d25eb8a839aeeb6ddb49275492b293b98a8331c769c93fed099b8e389d3771ce429c89295286e917dad75a9a6b67dd0eea652a619d052a82e97f9f3bb7defda65256f806b65bf96b45145d9ef8b7ecc24a75ac8e274b74503b5822a829c8a0c2dfc63c6ecec75eaaea0793745f0bde040399775a11b5b9882cb2211695d99ac64fa488ccd1707b2f556de3cb4b8cceabc880a9ac3b115534d23fd5082751e6cd6d6d23fdf04eb59b8dcf8d1767ee1ad67ddf966b55bfb5bebeac20b3c4b539681e15aa7d699b9f97841fd18941685510f9be746f9a941cbb763690828ada00d46a3de0975c6bd094bd88827e3fe90253d606ccc4643da673d3e19c02066409167440d8b16b26074042eb871344cd8301a50a717b1d8ed4540f13318c727ce7844f6c7e45725342c842aa5126d87c855b00cbd280c76fe7c167aa68484d6995eb4c69a025e7ad4582082dea969df448544a5a6dd4b3ff482d93c5c5e7aed84579052feb0bdc31927345380685a61f334546b1963c3883f5b7b0b049b897d3e041599fe78244dcf1b172f5afe4c0f71808d5d6dbe641b064bff93b173405cd2ac3690fbf6404ab47c8db5a1ebfd4f44e292b659c8979d177c23ed5300095450f0ff4f13c126f0df7fedb0f888c5d54719a5f18ebbc35523c22b68774898729fd893c1c81db8c4802bfd26d69f0c0e5d6b7234192187423f55d42e3e16da8ad5ea1984411cbf6fbab5ff0b112d2c3d78040000",
    ],
    [
      "ETag",
      "qX8Zu2O/o+LrVmDWuzs+xA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:47 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-55-1635192891311"
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
      "1085ffcb789426c516b4241ea856ada958293d19d36c61401418dc5db44dd3ffee2c6a356aa2179819be59de7bb081c7bc4ac083659e3d3528d77b19ea1b5384a89a422bbed55429040b508b8cc9fdfa3c7b0983bc5ad1e53c98ad480ea65dfff8980915df6329c0db409a639128f06e37508912792da6a229ab45db59a0d7b519cea2701c9c735f5262fa603e99f8c3c908b6d66e31115a2c5afe1f6b775b0b1e6819628a12ab188d965ad203c67a6c6c2a51d6057614353246052ddc3ec82435b590441d9e741ca763bb3dc71e1c1c0dec9e6d3358502c744e15b3f319eb034d5a1421bdb04b7019906dc986d3f6facce33c698d98721c446ebfd5f7156069695ee0e26f90f5de0bfe0c1fd87b04df39515253e91d7536b9f67f3b8e33fd3cead48f463f08a539a91d128daf46b3c8bf9a1aeeeeddfb70ad514d2571900a4d8676b77fe41cbaddb7584fc844cdeff1b46cd08258f0df71916bf0525128dcbe0262ea84117b020000",
    ],
    [
      "ETag",
      "+pGgwRNinxoJUNSxor9P0A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:48 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-56-1635192891311",
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
      "02ff8553614fa34010fd2b64ef8b26b585162834315e4f518995564a35e672699765c15560915d343dd3ff7e0358b567a249133afbde9b37333bfb821e581ea1110a59f258d172fde39e87a883a8c4099cea57937078debff86b9e169698dd79ee05b97a3e3c0406ab550267454a0f04af4a42c56831ef2625af0a5c727e00890e0cf34033078666f72d5b1b681ae8044de309cb1f407d27652146bdded6bb9b709ea414174c7409cfdece7b4ffd5e51f27b4aa4e8ed5af6c045f4be363d4a39c192f1fc703187022a41cb25cd304ba184776514fedc4ddd6538eb26407e628462427895cbba2c4841781eb3a42a9bac68f4829a323ffc417367e21c07caa5ebedad70564b57fb0a16ca36e8282be82866295db2685523cb65f1a09cfad34b40c0ff0e0b2a56cacdb9e33bca2ed9f59485e739f340d93bda57cefce962a6fcbadde1408d111592e54d85010e535a57f73a44f7f3d5d5022cc1b3059743d5c49aa5da611c0e496c0d8c305669185ae1d0c0835025b64ef528a41874b2cedea870ce73431b5876a4eab169dbc4a42a8906a16e5b6adf362c1a93a161d906c6aa8e361df45c32494f9828b860ed24d18def06ce32f017def138709a36625ca5f2a42dae6ee2639d129a04d2177d6d6a947170aaafc5f502c71f1f07eeb5d36ec2842698ace78fb00b314e0505362e7146252d2f79044343b3e9dc0ddca9379e80a2b9ded99621d0e8f7cbbb205817cd9465f34563df1fdf820697255eff87411d268c60f3c1ee1aa7554369f84dd4e67f6a01a4412fef517f27d27722136dfe6ce0d741f01c5a6774b570fc5bd41ef934a625cdc9f73b01e406f8f6556f9f1870e191818d9010c30612519b9092b69bc8b2a695566debd6c0eca3865cca4f983eb4b623af73d419694673f9da51fbc49a21d65025de4800c20279ae7706e83fb14cfc8be2040000",
    ],
    [
      "ETag",
      "4QLb7H2Kz6Fp8sPhNIKcQw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:48 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-56-1635192891311"
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
      "4f",
      "c2",
      "4010fc2feb6b8b1e5f02090f40509a34a8159e0c21d7b2d442db2d77574c43f8efee15831a7db9dbd999c9cde44eb04ff20d0c204ce24389aaba89d1bcd821405da646f35550ae111c40236356deceaad80b8fca5b6098cf546f692687ee683864858ede31933038c136c174a361f076825c66c8369951991b1699aab0f8c17f1a2d1866b4b170bef4fdd1d89fc2d9b95ad6eb62ff6df0e68be9e334f8cfb23a3bb0a330c02d2acc23b4090a453b8c8c67cb69991529ba9a4a15a1865a5c13b1a2b2908ac8e58ddbe9baa2dbea887eb3d7172d21589852244d42396b97af9c0d0c199906f4c1dda0c502558f5c735b9f475edf35ee7b750d0b9a75ba9fb468b49b575afca17fb9db965e7dbd3aae0cea67455c41a34d7f77693221dbce706ba34a742092fc0db3c45cf0f913787afd9fe3010000",
    ],
    [
      "ETag",
      "/HygIbvrITebnHr8UtCq6A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:48 GMT",
      "Server",
      "ESF",
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
      "0000000002ffedd34b7282300000d0bb646d1d0521a63bd242955250c34f364cc00c5f2143a2829ddebd4eaf51df1dde37a079ce844865dfb00ebc82892a689ecf3ff91a5b4589457fa146b6cdcfca4ddf701ca0d07031f7a252d3f1299231cc0c87754553c471e3d2ab4ddeaa35d6b2203d94c77eb9c486bdb326abed9360572e0e30e6149bfdc2addb88fa2b579eeef72b343d47261429c4ce44dba92f5fa48c28a9c3a18285bfd7daa6ae05190b0cbd0e8d5e7d34ebb3cee198a09daa435b928fc85f9eb0bf9d5c65d56cca4c576e24d4829b938752b8efd56561e507757434b13acf9f9efe2f30036ce4d5c0445a3db6ab1a4233f0573f9513678fff98d1810de0e7174af3f68f19040000",
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
      "Mon, 25 Oct 2021 20:15:49 GMT",
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
      jobId: "grouparoo-job-57-1635192891311",
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
      "00000002ff85536b6f9b3014fd2bc8fbb8e641200d448ad628a56ba484ac40da4dd3848c73a16e09a6d8a4caaafcf75d4cd3b5aad47ec2f63de79e731f3c917b5e6cc898243c7ba8a1da7fb913093921a06886afa6b3bb0ff6572cf8fbf53a1895fd9f4e78e13f4e2688e00d4bd26d9943478aba6220c7ebb09b55a22e69254407137586a38e796a0d4d77e0b8a6659ac89390a70b5edc23fb56a9528e7bbda376371322cb81965c7699d8bebcf776835e59893b604af6de4af65045f63e16fd960b461517c5641da2815a4215c396f21c2dfc676e92b3b7a9bb9c6ebb1982779c01654cd4856a6c610a268a946775a5b392f113d1365f1d48e82dbc59643091d7db222ee8164e8c0d553456fb128c8b60b534e6fec52a584ea3f9ca8fc3d9a5b79c7667abc57ae987c6cda5177886a2490e9a6b4c8c337df3f182fa1b908a175a3d6a9e1be5e706cddf8fa521a0b48436188ffaa7d474fa6e922623963ad63049fb90244e321a522be933d7067b9300459e16d52c5a88c2026a27a6cd62c7de38b13d3487b1eba4490c8e7b6a0dfad4b29c3e399c90c78a2b38e7b21492b71d2237c13cf2e22858fbb369e4e912525ae7eabc35d614f0daa3c20211f4414d8726ca052a35ed9efb91174c67d1fcda6b27bc808cb27df880334e692e01d1b4c2e629a89662830d23fe74e99d23584fecc73128c9f8f713697adeb878d5f2177a84036cec2afd256114ccfdefdace11714df35a4376ed819468f9166b43d7873f88c4256db390abb517fc22ed5300295450b0cfa789601df8f45f3b2e3e6271f551462abce3ee30d988b00ada1de2badc67b66bbbe6e8946870a5dec5ac817dec5a93a3c9085b28d47345ede263a1ad582d5f4018c4f1fbba5b877fd3726d5378040000",
    ],
    [
      "ETag",
      "18vkRyQcRz+VR7p0X8SFNw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:49 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-57-1635192891311"
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
      "5b4fc2401085ffcbf85a122af7263c80a212b9685b5e34842ced148a6da7ec6e2584f0df9dad88464df4a59d997eb33de7b4077889b3101c58c6ab6d81727fb142fd680a17559168c5b79c328560016ab16272b3bbc7e9f629ab4ff476e0e1daad913bdb75bb4ca8608da900e700518c49a8c0793e402652e4b5809222cd16656781dee766e8f9ee7072cb7d4aa1e927b3d1a8d71f0de0689d1743a1c5a2e4ffb1363f5ab0a1a58b114acc02345a72491b0cf4d0d85422cd13ac282a64800a4ab87cb09254e4421255785269b42a76b3d6b03b97ed8e5db36d06130a848e296376e6b13ed0a445e2d28e5d42930159966c382aafaf3c8ec3d288298713bf592ff57d05585a1427b8f81b64bd6bc19fe1033b45f09d132915993e5337a369efb7e338d3cfa3ae7bfee007a134277546fce178e0f9bdf183e1e627effdbd46f5208983546832b4abf576a3d5acbec77a45266a7e8fa36581160482ff8ebb5883138944e1f10df867befb7b020000",
    ],
    [
      "ETag",
      "jwKeOqZn4NtqESehR3oRUw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:50 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-58-1635192891311",
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
      "54fd6fa24010fd57c8de2f6de2172a0a264dcfb65c8f44d143ec472e175d96856e0b2cdd5dec798dfffb0d50db7a4daed14467df7bf36686599ed103cb423442018b1f0b2ab65fee79801a882a1cc3a9ebe1dfdef4cfdc5e0e6ee8e2ae38739e3657f1c9093058a99238cd13da94bc1084cad172d18a052f722c386f42a2a66136f541cfd0adae69e93d5d079da4493461d903a8ef94cae5a8ddde7bb762cee384e29cc916e1e9eb797bd36de782df53a264fbd0b20d2eb2fd7fd3d38413ac18cf4e960b28a09054ac688a590225bc29c3e0eb61ea16c3692b06f286118a09e145a6cab22005e159c4e2425459d1e8195565befb8316f6c43ef7b5e9f8e6688dd352ba3ed6b0d4f641435b4347114be88a85eb1259adf207ed9b379b0202fe775852b9d6aebfdb9ead1d921d575bbaaebdf0b5a3d363edd29b2de7dad9ed01076a0ca9542cab2af47190d0b2ba97213a1f1f5d29c00a3c6b7035ec0cb06e76ac200a8624327b461075681098c1d0c0bda043ac3eed8701c5a05365f64a85339e85966958fad018f64937ec46c40c06ddc88ca2d0b07a7a3718981da287bd6184760df42498a2174ce65cb27a92e8da737c7be57b4bf77cecdb551b112e127551175736f1be4e054d02e93f7ded4a9471702a1f8be3fab6373ef79d2bbbde84098d31d92e1e6117229c480a6c2c704a1515531ec2d0d07cb6707c67e68e27a0a81eef7ccf9068f4f3f94de06ff36acaaafa4563cf1bdf82060b81b7ff6050c7a08f76bb77765738292a4ac5afa23affa606900ebdbc45dd83a87f100dd0eed70ebe0d04d7a176463f96b6778bea238f4654d08c7cbe1340ae804f6ff5fe8a01172e19d84805316c2091a50911b4de449656add46acbe8f4ccea9da0b0501f30f8ec475ee62833d29466eaa5a3fa8a55432ca142be92008405721df712d0bfd5460170e2040000",
    ],
    [
      "ETag",
      "NRaxRMzPEU6XeShuBIwvVg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:50 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-58-1635192891311"
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
      "5d",
      "4f",
      "c2",
      "40",
      "10",
      "fc",
      "2f",
      "eba32da12d1820e1010c2ab14129f0a221e4284b2db4dd721f1220fc77f78a411f8c2f773b3b33b999dc09b669b1820e2cd36467501e6e12d4633b44a84ca6155f25150ac101d42261e5f3fe38494c518eebfa2ddbdfc6cd5138db8dbb5d56a8f80373019d13ac53cc560a3aef2728448e6c13399942b3481f4a8b1fc297de94614e2b0b47b330ecf5c3019c9dab65b128b73f86e1683a781c447f59e6670736b48c708d128b186d8252d206633db4e594c8cb0c5d4546c6a8a012574422c9944212b9bc719b2dd7bb0b9a5edb6fb5bdc0f35898512c744a056b6713ce069ab4c822da7337085820ab916baeabf3d3ae6b5ea3aa61815fa5fb4dfb353fb8d2deff74c3d2f3ef57fb078dea5512575068d3d72f4deec9b6d3dc5a4b830ec482bfe129d5177cfe02b2560768e3010000",
    ],
    [
      "ETag",
      "KwzSgunpQ0tZlw+c5NLUqQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:50 GMT",
      "Server",
      "ESF",
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
      "000000000002ffedd3597282300000d0bbe45b1d6429d83f81b015ea8240f127132050c0852628814eef5ea7d7a8ef0eef1be03c278ca1feda920b78052316578b7cf1d669ba5555435d1d74f780be965ae5c8c169c234b945dbc464e5f1884cb8b463b1bde2927911e78a2295c267a8b7b14a52c11823575727697fd6b659e88d96a721f9b4b6453ab849000505bad888cdce2fe77da24df744bbd19d69c48788c1ae89bc703d976bd6ac79dcc99580f18e06dbf0f2c16d789650a1fa438ab35cb5de6f267dd908deae77928d3806cd7d0e1bcf299c8bc4cb5e2e85d4cda0e5e7835d50c48dc5d3d3ff056680f0aea684a1fab15d5256ab19f8ab8ffab1238fff3ac19450f0f30ba96d4dde19040000",
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
      "Mon, 25 Oct 2021 20:15:51 GMT",
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
      jobId: "grouparoo-job-59-1635192891311",
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
      "0002ff85536b6f9b3014fd2bc8fbda3c48424222456b96d28d29211b21a9a66942b6b950b704536c3a5555fefb2ea6e95a556a3f61fb9e73cfb90f1ec9ad281232234c647735540f9f6e2423670434cdf035dfaff777a3abeccbf76214f8cabe0dbcf1249bcf11211a96a28732878e9275c541cd76db6e56c9baa495941d4cd471a61d7b3c74ece9c09dda43db469e823c5d89e216d9d75a976ad6eb9db4bb9994590eb414aacbe5e1f9bd773fe89595bc01ae55efb5640f5554ef7dd1cfb9e4540b59cc775b34502ba862385091a385ffcc849dbf4edd15f4d0cd107c2f3850ce655de8c616a6e0b248455657262b993d1263f3c5816cbd95b78c2c2ef3fa50c4053dc09995504d63fd508275196ed6961f5c6ec2f522f23741bc5d7ef3d68bee72b3daad83ad75f5cd0b3d4b539683e15a73ebdcdc02bca07e024a8bc2a847cd73a3fcd420ffed581a024a2b6883f1a43fa6b6db9fb2944d78ea0e1d96f68131974d1c3a647d3e1dc12861409167440d8b16b2485ceab281ebc4fd34e5f1c8656ecc2694c5633aa494c2d04e2827c733f2b7121a2e842aa5126d87c855e8475e1c85bb60b9883c53424aeb5c5fb4c69a025e7ad4582082dea9e9d8448544a5a6dd7e1079e16219f97baf9df00a32ca1fb67738e394e60a104d2b6c9e866a2d136c1809166bef02c166623f4e414566bf1f49d3f3c6c58b963fd3231c6063579b2fd946a11f7c35764e883dcd6b03b96f0fa444cbd7581bba3efe41242e699b85fcdc79e12fd23e8590420505ff789a0836810fffb5d3e22316571f6594c63bee0e578d08afa0dd2161ca7d624f1d7b309a1203aef49bd8d0714e5d6b723419e100857eaaa85d7c2cb415abd533088338fec074ebf80f03eb1c3378040000",
    ],
    [
      "ETag",
      "lVMVq4WgBJn4NIs1kNE67g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:51 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-59-1635192891311"
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
      "10",
      "85",
      "ff",
      "cb",
      "f85a122a17a1090f20d708a8509e0c214b3b2dc5b65376b79a86f0df9dad88464df4a59d997eb33de7b447788e521f1cd846e12147595c85a81f4db14095c75af12da3542158805a844c06f9eea0c5dd789866fb42f44792c64111763a4c286f878900e7084184b1afc0793a422a12e4358fe23c49376567812e32335cba8bc97cc47d42bee9e7abe9b4db9b0ee0645d167da1c5a6e4ffb1b63e59b0a7ed020394987a68b46492f6e8e989b1a94492c55851944b0f159470f920949467421255785269b42b76b3d6b0dbd7adb65db36d0663f2848e286576b5647da0498b7841afec129a0cc8b264c341797de171e497464c3999bbcd7aa9ef2bc0d28228c6cddf20ebdd09fe0c1fd83982ef9c48284ff5851a4eefbbbf1dc7997e1ed5efba831f84d29cd4057127b3c1d2edce1e0cb73e7bef151ad583240e52a1c9d0aed65b8d9b66f53dd65b3251f37b1c2d73b4c013fc778c230d4e206285a737c5cc43087b020000",
    ],
    [
      "ETag",
      "fuhqtaKHFnpjyaDGroHfyg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:51 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-60-1635192891311",
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
      "000000000002ff85537f4fdb3010fd2a91f70f48a54d9a34fd2121d6958c452a294b53109aa6d6769c609ac6c176d82ad4efbe4b42810e09a44a8dfddebb7777be7b426b9ec76884084f1f4a26b75fee05412dc4344ee1d666ee83f5f7dc8b43672e63e5f090ae9df4f41418bc5229bc293276a244292953a3c5bc9d4a5116580a7102814e5cf3c472ed9e35ec0e86966d59a0532c4ba63c5f83fa4eeb428d3a9dbd773b1522cd182eb86a53b179b9ef3c763b8514f78c6ad539b4ec808bea7c6c7a96098a3517f9e9620e09948ac925db609e410aafca987c3d0cdde678d34e81fcc829c3948a32d7555a10828a3ce16929eba868f484ea34df7ca0b937f5269131992d82e8681563cd56c7065646f3d93256504fc233b6e4f1aaba5f2e8bb5f13d9c5d0202ee775831b5326e7e78a1671c92fdc0580481378f8ca3b363e3229c2dae8c6fb7071cc830664af3bcce2fc22463556ecf2df4df3f5c25c01a3c1b70d9375d6c0dcc2149489f2603bb471293113220fd1eb68949870e7362c230e87415bd56e15ce4b847fa8ee3c6766f0801acc47413cc4cd2730796693b0e89fb26e9d2d841bb16fa23b966e75c1542f1a68fe826f4236f19858b60328ebcba8c0497993e6f92ab8a789ba7862281f4415dbb0ae5029caa47f183c80bc793c8bff69a3998b214d3edfc012621c19962c0c6126f9866f252c4d03474359bfb913f0bc65350d48f7bb5672834faf5f42a88b645dd655dffa371188e6f4183a5c4dbff30c8c38516ecded85de3acac2935bf3e35f11f1b005950cbeba97b70720e4e2edafddec1af8560191a67f473e185b7a8b90a59c224cbe9e73301e41af874a7f70b065c5831b0511ace308154552654b26612f9a62ea5510f7bddaed5473559ea77986d77f72daf625411d986e5fab9a266c1ea265650a95e4800c200057e7001e83f2433d149e0040000",
    ],
    [
      "ETag",
      "3e6q1xDEdR4Srds4iRck4g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:52 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-60-1635192891311"
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
      "c1",
      "4e",
      "c2",
      "4010fd97f1da26940a91261c84a01209912a1e34842ced500bdb9dbabb151bd27f67b61862e2c5cbeecc7b6f76df9b23ec739542049b3cfbac50d75719da852b623495b486af929441f000adc858f92df3e2ee6df3a8d5c18c5fe7588fb5548be1901526f9c0424074846d8e323510bd1f418902792c15d63d62ebd275d3f9cbe47e12335050ea80f97236bb1dcd26d0789791f5badcff6b64d578b0a34d8c5bd4a812740e4a4d3b4cecd48533a22825fa862a9da08156dc1299a6aa149ac867c4ef77fca01ff68241f766108441c0424989b03929d62e9fd91b58b242c674e06c10b240b725c7dcb6e717c3bd3683abbaadb5df5cffc2057fb8f0c25d3b6ef5f3d9a8b6689e34b17383ce74e71c604c2e142f35b2ba420f12c1db7fc8edb96f4e9e009601da010000",
    ],
    [
      "ETag",
      "xlimFZbKrnwsCVNeyCrlnQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:52 GMT",
      "Server",
      "ESF",
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
      "4d",
      "72",
      "82",
      "30",
      "1800d0bb642d0e0838d85d050181a68db6a26c32917e48102182e5279ddebd4eaf51df1dde3762690a6d4b6ff5192af48446365b4cd36928aca57bcae734a069e7adc63c8fbccb4d23cf6e86778157f98e2b40bd1cebf5604732df4415e157aaad8a23d17da382d31b4e0c5bd66154683ca1dbadb517b0e9b530adbc30c19170679d918124d7e222688b75c086aa1ca024c3f59d9ff33e8e1d3cbcb20c3ee2be4ca4d3594bbc57d4c0367d494ce5c54c25875957a8d55aa97746f9b526f1187c7296890dcbe692599a5ad8514176a1af1d7ae7abf48d4e6fa60f0fff179a2018046fa0a5fcbe5d37178b09faab4f6fa380fbff25b0061af4f30bb06bf20119040000",
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
      "Mon, 25 Oct 2021 20:15:52 GMT",
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
      jobId: "grouparoo-job-61-1635192891311",
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
      "a3",
      "4014fd2b64f6e3da07d0174d9ab5a9a8242d554a359bcd860cd30b8e0283cca0694cfffb5e06eb6a4cf4133373cfb9e7dc072fe481173b3225314f1f6ba8f63fee454c4e08289ae2eb9ecbeaa793dcf5af823978173703f371505ecf6688e00d4bd2bccca023455d3190d3eda69b56a22e6925440713754666c71cd943d3b1268e699b26f22464c992170fc8be53aa94d35eefa8dd4d854833a025975d26f2b7f7de93d52b2b710f4cc9de47c91eaac8ded7a2bf32c1a8e2a2986d3768a096504590539ea185ffcc5d7cfa317597d3bc9b22f88933a08c89ba508d2d4cc14491f0b4ae7456327d21dae6bb03d9b84b77111a4c64755e4405cde1c4d8514523b52fc1380fd62bc3f3cfd7c16a1e7a6b3fda2c2eddd5bcbb582fb72b7f63dc5eba816b281a67a0b9c6cc38d5371f2fa8bf03a978a1d5c3e6b9517e6d90f7792c0d01a525b4c168dc1f5173d277e2241eb364620fe3a40f713c89c7436ac77de60c60b08b81224f8b6a162d443162963574cc7104f6701021268e9c21d0a86f8d4c6b645bc0c63b723821cf155770c66529246f3b446e032f74a330d8fa8b79e8ea12125a67eaac35d614f0dea3c20211f4454d8726ca052a35edf6fcd00de68bd0bb71db092f21a56cbf79c41927349380685a61f314542bb1c386117fbe72cf10ac2776750c4a32fdf3429a9e372edeb5fc8d1ee2001bbb4a7fc9260c3cff42db39226e68566bc8537b20255abec3dad0f5e12f227149db2ce47aeb06bf49fb1440021514ecfb69225807befdd78e8b8f585c7d94910aefb83b4c3622ac827687b82ef795ed0c6dd3ea130daed4a79865d9c7ae35399a8c9043a15e2b6a171f0b6dc56af906c2208edfd7dd3afc03308d925c78040000",
    ],
    [
      "ETag",
      "yisr+9fh0PRAeIGV41q4pQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:53 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-61-1635192891311"
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
      "ff",
      "cbf48a89144525f180d6b626482be2a931668501b1c0d2dda58d35fef7ce526b9bb6497b8199e19be5bd070778ccca181cd864e9538d627f91a29aeb224059e74ad2ade2a5443000154b897c4dbafed89aeccab11817d6bc2d7a6e3a7787432264b4c58281738024c33c96e03c1ca06405d25ac4f3ba28d74d6780da577ab80883a97f437dc163ddfb4bcf7347de048ec67931668aad1bfe1f6baba3013bbe0930418165845a4b25f80e2335d536252baa1c5b92d72242090ddc3c4805af2b26386fd1a4659b2dd3b6bae6e0b23f302dd32430e71153192f895d2e481f28ae581ef01772093601a229c970d25c9f699cc58d115d4efdd0ee34fabe02242dc9725cff0d92de2da3cff0819d22f8ceb182d7a53a53d7de9dfbdb7194e9e751576e38f9414845499d91703a9b2c427776afb9d5c9fb68af50de0b4e414ad4199aed4ebfdbb3dbefb18eb98e9adee32851a30111a3bfe33653e0242c97787c030241bc6f7b020000",
    ],
    [
      "ETag",
      "zf5NC3EjnCrCm3Q0r7AgQA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:53 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-62-1635192891311",
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
      "fd",
      "2a",
      "91",
      "f70f68f4479ab44d2a21d695c0329594a5290c4d53eb384e304de2603ba00af5bbef9250a04302a95263bff7eedd9def9ed09ae5111aa19025f725159b2f773c4447882a9cc0ad6d9d7d5d5f07939f6232cde657a5b4c4efe4f1f81818ac52499c15296d495e0a42e568316f27829705169cb720506bd06be903a3afdb3dcbd60d5d079da4693c65f91ad4b74a1572d4e9ecbcdb09e7494a71c1649bf0ece5bef3d0eb1482df51a26467dfb2032eb2f3b1e949ca09568ce7c78b3924504a2a9634c32c85145e9551f86d3f749be1ac9d00f981118a09e165aeaab42004e179cc9252d451d1e809d569bef9407367ea4c02edc2f50e5611567475a861a9359f47da0aaa89594a972c5a55f7cb65b1d6cefcd90520e07d8b25952bedfa87e33bda3ed9f5b485e739f3403b3839d4cefdd9e252fb7eb3c781fc222a15cbebec021ca6b4caecb981eefb67ab04588167032e87dd01d6adae1dc6e190c496d10fe32e0d432b1cf6b11176896d52330a29069daaa2d72a9cf3bc4f0d3224368e2c233280ae13d28f31b6b161d8a645c3681062d33409da1ea147c1143d65b2e092355d44d7be1b38cbc05f789371e0d465c4b84cd569935c55c4db3c151409a40feada5628e3e0543d89eb058e3f9e04ee95d34cc19426986ce6f73007314e2505361638a38a8a0b1e41d3d0e56cee06eecc1b4f41513fede58e21d1e8cfd3ab20d814759755fd8fc6be3fbe010d16026ffec3208f8189b6db377657382d6b4acdaf4f4dfc8706403ad4f27aeaed9dccbdd3006dff6ee1778460151a67f46be1f837a8b9f2694c05cdc9e73301e41af874a377eb055c5830b0910ace308144562644d06612595697d2a8ed",
      "bed9ed59a8260bf50ed38de1aee5558c2a22cd68ae9e2b6ad6ab6e620595f28504200c90e77ae780fe036f858d8bde040000",
    ],
    [
      "ETag",
      "98F+kWTCJrCLmSVus8rXgw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:54 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-62-1635192891311"
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
      "6f",
      "4f",
      "c2",
      "30",
      "10",
      "c6bfcbf9768beb408425bc005d14b310187fde1842ca76ccc1b6ceb6d300e1bb7b2d06df60d2b4f75c7fd7ded39e609f572904b0c9b3cf06e5e12e433d35418caa29b4a2a5169542700035cf88ec367934590e96c91ef9e3f2f816de6f8e6adaef13a1920f2c390427d8e658a40a82f71354bc442a4bb93687e8436dd4f3601e922a456ad4781145836114c2d9b9f2eb75bdffe347e379f812c6b74a566707766213e3162556099aeb6b297698e89171a6785917e82ad1c8041558d86e645234359742b894713bbecb3aad07d6f3bb3dd6628cc042245ce7a2227631a3de400bcd8b587c93316811206d481eb776fea2b4eff99eebf934ac199bb23dde84d81562ff43ed2bd436d0eab78fe141a39a4841a6141a3fdec5db93307ee9b1032d1b7420e1f42bafb9bee8f30fd4b3ea7af2010000",
    ],
    [
      "ETag",
      "8uiLPVAVckea7VzJE/bzsQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:54 GMT",
      "Server",
      "ESF",
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
      "00d0bb642d0ce5534c7722d000024a0d7e360c42408a624c2c103bbd7b9d5ea3be3bbc6f901705e13cbb5d5ad28137207215ca851cd0a9e5d6c7edd860b31c3a432a84d5b90daa827e73bd6d56924333d55375bba92115385f7df5e109a2888e97f916afe3849b7364dbcae5b01ed2452b96553735e987161b981cf2f732b0f2a5baede767cdf067ad87445c872536e3c64b1ddf396bfe621f33e9eac268186c654751edd259b947da3da3909eca5a8cae0ec7b358267ada469f92c2aa34642faf18098705c72449b33b0f07c16dcb899ccdbd4af04e0f14f9e9e9ff02134046da30c2b3e6b15d33209c80bffad94d50f2f86f919c11067e7e01168f871419040000",
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
      "Mon, 25 Oct 2021 20:15:54 GMT",
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
      jobId: "grouparoo-job-63-1635192891311",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b4fdb3014fd2b91f771b4691e6dd34ad5a84a6095da74a4296c9aa6c8716e82218d43ec3021d4ffbe1b873210127c8aed7bce3de73ef244ee7899922949787edf40fdf8e55624e48480a239bededd7b66e0d86a32bfb09cc00dbeeed4cffc723643046f5992eeab027a5234350339dd6dfb792d9a8ad642f430516fe4f4ac9133b426b637b11ccb429e84225bf1f20ed9374a55726a9a47ed7e2e445e00adb8ec33b17f79371f6cb3aac52d3025cdb79226aa48f363d16f8560547151ce765b34d048a863d8535ea085ffcc34397d9bbacfe9be9f23f88133a08c89a654ad2d4cc14499f1bca97556327d22dae6ab03d9fa2b7f11194c14cdbe8c4bba871323a58ac6eab102e33cdcac8d6570be09d7f368b909e2ede2bbbf9ef7179bd56e1d6c8debef7ee81b8a260568ae31334ef52dc00beaa720152fb57ad43eb7cacf0d5abe1f4b4b4069095d301e0f46d4f20693244bc62cf39c61920d2049bc643ca44e32601317dc34018a3c2daa59b414a5ebd291edd82cf660cc62774cddd81b302b1ed99052c7f35c9a0dc8e184fcadb982332e2b2179d721721d2e233f8ec25db09847be2e21a34da1ce3a636d01af3d2a2c10411fd47468a35ca052dbee6510f9e17c112daffc6ec22bc8297bdcdee38c335a484034adb1790aeab548b1612498affd3304eb89fd38062599fe7e226dcf5b17af5afe428f7080ad5da5bf641b85cbe042db3922ae68d168c8437720155abec1dad0f5e10f227149bb2ce472e787bf48f71442063594ecf3692258073efdd78e8b8f585c7d94910aefb83b4cb622ac866e87b82ef7993d19baded0211a5cab77b1c9c83e76adcdd166843d94eab9a26ef1b1d04eac912f200ce2f803ddadc33f4498792a78040000",
    ],
    [
      "ETag",
      "kq8/N32t9AG13N4N+UtXgQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:55 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-63-1635192891311"
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
      "83",
      "40",
      "10",
      "45",
      "ff",
      "65",
      "7ca549b12d2a890f556bada1b5b6548dc6345b18105d18dc5d344dd37f77166b356aa22f30339c59eebdb082a7ac88c18745963e57a8963b299a4b5b4c5057d268be9554680407d08894c9db5b79b35b9d0f6727fd94f6ce5eaf82f1b5bc3c3c6442470f980bf057906428630dfedd0a0a9123af4524abbc98d79d036659dae1349c0c467dee738a6d3f9a0541f728e8c1dad92ec6c28879cdff63ed7eedc0232d2698a0c22242aba554f4889119589b5ae4a5c486a64a45a8a186eb07a9a2aa148aa8c19386d76ab85eabe31eecee1fb82dd7655052244c4605b3b329eb034346c809bdb24bf0185075c98693fafac2e32cae8dd872300abd76adef2bc0d2924ce2fc6f90f53e08fe0c1fd82682ef9cc8a92acc963a0d2ebabf1dc7997e1e75d20d7b3f086d38a92d120e86bd69d81d8e2d77bff17eb434a8c78a38488d3643b7d9deefec79cdf7588fc946cdeff18daad08148f0df719619f0132135aedf00def387b67b020000",
    ],
    [
      "ETag",
      "ZZlX2uJMUDGgo7HwVLPWlQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:55 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-64-1635192891311",
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
      "85537f4fa34010fd2a64ef1fcdd91fb4859626c6e3943bb954ea516a35974bbb2c435da52cb24b4d63fadd6f00abf64c34695276df7bf36666679ec83d4f233224215f3e14906fbedc89901c11507489b7b3afe793eb5f57f64cc9b5af6cf7d19ad273fbf81819bc5449baca12684851e40ce4703a692e7351643417a281811a66afa19b5d43b73a034befea3aea2424f188a7f7a8be552a93c3566be7dd5c0ab14c80665c369958bddcb7d69d56968b3b604ab6f62d5be8225b1f9b9e248251c5457a3c9d600285847c0e2bca134ce1551985dff64337395d3597485e7306943151a4aa4c0b433091c67c59e45554327c22559a6f3ec8c41939a78176615f1f2c22aa6071a851a9d59f47da02ab897902731e2dcafbf93cbbd77ef8e30b44d0fb964a900b6d76eef88eb64f763d6dea79ce24d00e4e0eb59ffe787aa97dbfd9e3607e1148c5d32abb80860994993d37d07dff6ca5802af4acc179bf6d527dd0b6c238ecb378d035c2b80d613808fb06ed866d66f5a017854051a7cae8958aa622ed5b1d0a11b4598fc50674ac81017adf32db46cf0c4dd6a646c7b0c25ed821db23f2987305675c6642f2ba8b64e6bb81330ffca9776a074e55464c8b449dd5c99545bccd53619148faa0ae6d8972814ee593b85ee0f8f669e05e39f5148c6049d966f2807310d34402b2694e57a020bf1011368d5c8e276ee08e3d7b848aea692f770c49867f9e5e05c126abbaacaa7f62fbbe7d831a9ae774f31f8679983db2ddbeb1bba24951512a7e75aae3af6b80e858cbeba9b377eaed9d4cb2fdbbc5df11c155a89dc9efa9e3df90faca87187248d9e73381e40af874a377eb855c5c30b4910acf38814c96262c877a12f9aa2aa5565b8631d0bba422e7ea1d66e9d6aee5658c3222ac2055cf15d5eb5535b1840af942421007c873bd9f88fe03c050563cde040000",
    ],
    [
      "ETag",
      "W+HSXJVAWtsvRtAIw9UaHA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:55 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-64-1635192891311"
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
      "000002ff7591514fc23010c7bfcbf9bac5752091253c802e4242502698a821a46cc71c6c6b6d3b0d10bebbd762f0055f7af7bffeaebd7f7b806d516710c1aac83f1b54bbab1ccdd42609eaa6349a8214b546f0000dcf892c264ce7f1f50bbeed1f0743a4f02ae369af47844e3fb0e2101d605d60996988de0f50f30aa92de3c61e6276d2aafbfe2c265589ccaac97c3cee0fc6311cbd33bf5ccaed1f3f9acce28738b9d4b2387ab011ab04d7a8b04ed15e2f95d8606a46d699e6952cd1d7a251296a70b0dbc89568245742f854f13b6d9f755a37ac1bde76598b31024b917253889ad8f933cd0646185e26e29b8c418b00e552f2b876eb1795c3200cfc20f459d799712537e325280cce10fb1762ed33d4b6d0e2778ec1cea07e52824c69b47e8293b73b61fdd263474635e841cae957868539e9e30f313cda58f2010000",
    ],
    [
      "ETag",
      "iN1sgE/VeZzOBHeeZzYpEQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:56 GMT",
      "Server",
      "ESF",
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
      "000000000002ffedd34b7282300000d0bb64ed38c5180bdd2591af9f1615856e3221c61850048355e9f4ee757a8dfaeef0be0117421ac3da53292bf006ee7ce0f4457f52dbc4539acfb5174f2c54974d2ea93b9597e84e8ae11e59ead5faa8151e4f3674d49c68c65757dc2e43b4cb87ae78b1d7491b43316b74169405eb08bb7a9a73b3ac162a9ced06f833d91e5609ca1a1f9511b65adf8fc36594a31052666f875d2566ef6937cd0a3826ca3da66e015d4353bc67b9d6b735925f6234d85836edbc921c53ba5db7b121b03a5c423c2f5430757c44f232f1178141c73a2110bbababc2fda7a7ff0bf480bcd5fa2c0dd38fed10394e0ffcd567edbd968fff44f2b33c839f5f5efc29c819040000",
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
      "Mon, 25 Oct 2021 20:15:56 GMT",
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
      jobId: "grouparoo-job-65-1635192891311",
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
      "0002ff85536b6f9b3014fd2bc8fbda3cc80b8814ad59425ba4846c40da55d3848c73a16e09a6d874eaaafcf75d4cd3b5aad47ec2f63de79e731f3c913b5eecc894243cbbafa17afc722b12724240d10c5f2faaabbfaebc8dea6ff2dafdb938dfde2fc5623e9b2182372c49f7650e1d29ea8a819c6ec36e5689baa495101d4cd4998c3be66438369d81ed9843d3449e843c5df1e20ed9374a9572daeb1db5bb9910590eb4e4b2cbc4fee5bdf730e89595b805a664efad640f5564ef63d1afb960547151ccb6211aa8255431ec29cfd1c27fe62e397d9bbacbe9be9b21f88133a08c89ba508d2d4cc14491f2acae7456327d22dae6ab0309dd95bb880c26f27a5fc405ddc389b1a38ac6eab104e32cd8ac0dcf3fdb04eb79e46dfc385c5cb8eb7977b1596dd77e685c5db8816b289ae4a0b9c6cc38d5371f2fa8bf03a978a1d5a3e6b9517e6e90f77e2c0d01a525b4c1d8ea4fa869f79d244d2c96dac37192f62149ecc41ad361d267ce0846bb0428f2b4a866d14214d41951188015f7a16fc5a311b5638ad4184630314ddb7292e1901c4ec89f8a2b5872590ac9db0e91abc08bdc380ab6fe621eb9ba8494d6b95ab6c69a025e7b545820823ea8e9d044b940a5a6dd9e1fb9c17c1179976e3be11564943d86f738e394e612104d2b6c9e826a2d76d830e2cfd7ee12c17a62df8f4149a6bf9e48d3f3c6c5ab96bfd0231c606357e92f09a3c0f3cfb59d23e292e6b5863cb40752a2e51bac0d5d1f7e231297b4cd427e6cdde09ab44f01a45041c13e9f268275e0d37fedb8f888c5d54719a9f08ebbc36423c22a687788eb729fd9ce7832b12744832bf52e66398363d79a1c4d46d843a19e2b6a171f0b6dc56af902c2208edfd7dd3afc035ef87a5178040000",
    ],
    [
      "ETag",
      "HrWzEsjTuBsYEXCGUqDoCA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:56 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-65-1635192891311"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d92d14ec2401045ff657c2d910a546cc203202a5a10a1181343c8d24ea1b0edd6ddad88847f77b6221a35d19776667a667bef6db7b08ad3105c98c5f3a71ce5e6688eface14435439d78a6e9948158205a8d99c48e9d4f5cb719bad66f737b557efa177cdcb6add6810a18205260cdc2d4431f25081fbb8859425486b81e079924e8bce02bdc9cc70e40fbbfd4bea13119abe3ff6bc66cbebc0ce3a2c864cb369c1ff636db2b3602966438c50621aa0d19249b1c440778d4dc5928c6349895c06a8a0808b077329f28c49214a342939b592ed546af6d949fdccaed836815c044cc72225763c227da085667c28d6e4121c02645192e1a8b83ed3380e0b23a6ecf67da75ae8fb0a90b428e638fd1b24bd0b469fe103db47f09d6389c8537da02ebcdbe66fc751a69f479d37fdce0f42694aea80f8dd5e67e4377b03c34df6de5b1b8d6a200505a9d0646897abf5daa9537e8fb52d4cd4f41e57cb1c2d0818fd1d57b10637625ce1ee0d8ad4999e7b020000",
    ],
    [
      "ETag",
      "r68tx/CakbVK5zLXMJl0sw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:57 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-66-1635192891311",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85547f6fda3010fd2a91f74f2bf12b84240409750cb20e8d86368456d53481639cd42389d3d8e9842abefbce49698bdab512123edf7bf7ded9e73ca22dcb3668804216df97b4d87df9c343d44054e218766fce67ac4c839f69b9bd6e3b13534e74625c0d8780608a25709a27b4297859102a06cb452b2e7899e382f326146a5a5653b70c5377ba7d4737741d788226d18c655b60df49998b41bb7dd06ec59cc709c539132dc2d3e7fdf643b79d17fc0f2552b48f25dba022da1f8b9e259c60c978365c2ec0402968b1a22966095878616ec2afc7a55b0ca7ad18c00f8c504c082f33a96c4109c2b388c565515545834754d97cb5400b77e68e036d3c5f7ac1c91aa78abc3ed5b0d00e41435b434f114be88a6dd62ab35ae55bedbb3fbf800c38b8c3828ab576f3c3f55d4d5b2bd0503bd346de443ba64e3d6de979ee22d04ece4eb5737fbebcd4bedd1e61c0f3860ac9b2ca7180c3842ab74f873a7d7b958a802538a8932bbb6361bddf71c228b449d437cc30ead030ec87b6898db0439c1eed6d428a812755f58a85339e59c42106213dcbd8c08d4406ed3b5664536c3b76c7c491d9336817366cb46fa0bf059374c244ce05ab4f16ddf8d3c05d05fed21b8f02b76a23c2652227b539d5c46b9f129a04d0077ded5596715052d734f502d71f8d83e9b55b4fc68cc698ec16f7301b114e0405342e704a252d2ef8060e0d5dce17d3603af746336054d77d79400834f8f5f84208767975cab2fa575a56afd23f00ae71525688877a817413edf78dff9718f9fee816647151e0ddfbe5dfad5fe1aba8b6f8ac8794da21ea1e45bda3c842fbdf7bf83510bcb05a195d2d5dff16d55b3e8d684133f2f95801b84a7cfaa138bc5ac0c2bb0519212186212642899082d6c3ccd2aa959aed98362c50052ee49b9c6d39875b533554459ad24c3e7554bfdaea1055aa14cf2048c20c7a53ef1cb2ff00c6b0a0f735050000",
    ],
    [
      "ETag",
      "WGLiumTKmukV/9D5tD1c3Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:57 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-66-1635192891311"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d90516bc2301485ffcbdde35ab0ca640a7bd0519c506476ba0d87486cafb5daf666c9ad43a4ff7d3755f6bc97e4e6e43be49c5ce09857290c619b67df359af35d863c77438cb62ed8caa6a9b2081e20ab4cc8cfcee9fe3d5d7d7417a36012e91586c53e9c3f3d0961933d960a8617d8e558a416865f17a85489625325d5150bc467edced3d9229c84b10825a54e982da368348e4268bc3fd366a38fffb2ac1b0f0eb48d718706ab045d066de880094f5d3dab4a5da06fa936095a68e1f62233546b65887c51fc7edf0ffabd8760d07d1c04bd2010b0a044714e95b0cb37c9064cac8a987ea41d38c0b4a314ddb5eba9955d87dbb46ed637d3f8cc685f0d49028beef1ce35c833b9702ca1d9d4e841a2e41f5f72be9e9b5fa4bf05b1a4010000",
    ],
    [
      "ETag",
      "X0v+VdZW2TA1GLpZeElhEQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:58 GMT",
      "Server",
      "ESF",
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
      "000002ffedd3417282300000c0bfe4ac8e1450d3630a4a11290a287861421a91a012932846a77fafd36fd4fdc33e0026844a59a8b6a127f00e347e83033298f3099a56954cc21dce67a45c53edd3049de5d8839d4f9aaaaa9617783dae573c3c345e1821c3703a7d87879139471b590eb3e53033f1350bda25b375ea2161a781b282a45ec8998cadcf78bfe1ad585cc42ee9b06bc0d0b2f38d3a359e5d8f7cb7a89d2b4bcb7baa265c9da9eba8d5eab845fd3d8bc854f9df8cec186e617f5e0e957fb364e6c4c28ad9d672be349fc9a311fb1737dae61f66b01e07fd34dfbb11837af0f2f27f811ea0375e0b2a8bfab9ddb421ec81bffa85d29c3eff238a0515e0e717e9560fb919040000",
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
      "Mon, 25 Oct 2021 20:15:58 GMT",
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
      jobId: "grouparoo-job-67-1635192891311",
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
      "4fa34014fd2b64f6d59622a54093666d2aae242d55a01a77b321c330e02830c80c1a63fadff732585763a24fcccc3de79e733f7841f7acced01ca5ac78e868fbfce38ea7e80851890b783dcfea76f6747311dd769591076c350d2f7e5f2e1680603d4be0aa29e948f0ae2554cc77d1b86879d7e096f311241acdec9131332dc33d765cc3340ce0095ae66b56df03fb56ca46cc75fda03d2e382f4a8a1b26c684576feffae3b1deb4fc8e1229f48f923aa808fd6bd19f252758325e2f761118e8046d135a61568285ffcc2c3df9987acc70352e00fcc808c584f0ae96bd2d4841789db3a26b5556347f41cae6bb038abcb5b78a35c2cbaeaa931a57f448cbb0c4897c6ea876166e379a1f9c6dc3cd32f6b74112adcebdcd72bcdaae779b20d2aecfbdd0d3244e4baab8da423b51b7002ea09f512159add4e3feb9577e6d90ff792c3d01a4051d82893d9961c399b8699eda24774c2bcd27344d9dd4b6b0994e883ba5d32ca518784a54b170cdebd4768ddc706690c13593e9d43192d43527897b4c2c93e49669592eda1fa1a796497aca44c3051b3a84ae433ff69238dc05ab65eca91272dc95f27430d617f0dea3840201f4454dfb3eca3828f5edf683d80b97abd8bff28609af6981c973f40033ce712928a0710bcd93b4ddf00c1a8682e5c63b05b09ad8c52128d0fccf0bea7bdebb78d7f2377a0c03eced4af545511cfac12f65e780b8c265a7208fc3013560f9166a03d7fbbf8084251db2a0cb9d17dea0e129a4396d694dbe9f268055e0db7fedb0f88085d5071921e10ebb43442f425a3aec1053e5beb25dcbb16d0729702b3fc52078e85a9fa3cf482b5acbd78a86c5874207b14ebc812008e30f54b7f6ff0025fd7f3178040000",
    ],
    [
      "ETag",
      "Hdnr6wYPShum1fNiC4RPZQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:58 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-67-1635192891311"
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
      "c2401085df65bcb4442a52a1091780882488fc942b43c8d24e6bb5dda9bb5b0d21bcbbb315d1a889deb433d36fb6e79c76074fa98cc0874d9a3c97a8b627099a992de6a8cbcc68be15243582036844c2e470db5c4c25b57b7d79369c45ede0faf4ea26e97498d0e103e602fc1dc429669106ff7e0752e4c86b2165652ed755e780d91676b808e6a3c990fb9c22db4f96e371b7371ec0de392e46c28875c5ff636db577e09136738c51a10cd16a29143d626846d6a6167991614d53a942d450c1d583445159084554e349cdbbacb95ea3e9b6cf5b6db7e1ba0c66140a93926476b9607d60c8886c4eafec123c065455b2e1b8babef0388d2a23b61c4d02efa2d2f7156069719ae1fa6f90f53e08fe0c1fd82182ef9cc8a994e6485d8fefbabf1dc7997e1e75d50d063f086d38a923128c6e078ba07b3bb5dceae0bdb735a8a78a38488d3643b77ed16a5e7af5f758fb64a3e6f7f84695e84028f8efb8490df8b1c834eedf003cc5ebc87b020000",
    ],
    [
      "ETag",
      "Gy5SPno9BCn/GQd9TF+DHg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:15:59 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-68-1635192891311",
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
      "c8",
      "fba795d224e427448aba2c651b5a4a5a20adaa694a8c31d42d608a4dd7a8ca77df614adbac5b2b21c1f9debbf7ce3ef3886e5916a2090a587c57d262fbe98607a885a8c431ac9a3f2e1e0c6644f13cbebba611f31eb8959f4fa78060154be0344fe891e06541a898acbc765cf032c705e74750e868641ce9a3fe50377b86a9f7751d788226d18265b7c0be963217934ea7d16ec79cc709c539136dc2d3e7f5ce7daf9317fc8612293afb921d50119df7458f134eb0643c9bae3c30500a5aac698a5902165e9861f079bf749be1b41d03f89e118a09e165262b5b5082f02c627159a8aa68f28894cd571fc8b316d6dcd7e6cb95e31f6c705a9137871a165a13b4b40df414b184ae59b8a932eb757eab7d7597a7900107d75850b1d12ebf5baea5bd2c6db4a976accd9c136dbf80ed682bc7b13c5f3b383ed4beb9cbd599f6e56a0f03ce432a24cb946f1f0709ad3c3f6dadfdf6402b0296205a27d7e3ee08eb46d70ca2604c22a33f0ca22e0d0223180f713fe812734007614031f064555db170c633dc334723d235cc7010e8241804612f24a1016b4668e886de1dd281194518ed5ae877c1243d6122e782d5fb8b2e5ddbb7d6bebb72e633df526d44b84ce4496dae6ae2b54f094d02e89dbe7655967150aa0ecb767ccb9dcd7dfbc2aae76341634cb6de1d4c48841341018d0b9c52498b531ec2a6a1b3a567fbf6d2992d80a10efdac410834f9f9f842f0b7b9da65a9dec8f35ddbf9a60c34880b9c940a725f7fa0590e5ed16ed7fa7f9999ebceae401a1705defe95837646838afe0f098557516db391d451a5d644bdbd68b0178dd0eed70e9e1682bb562ba3f395e55ea17ac9a5112d6846",
      "3e1e2d00abc487bf8ce6fe02166e30c80809310c3211950829683dd02c55add46c73681aba8914b8906f72a6396e4eaeaa5155a429cde45347f5fd559b58a54af10c8224cca1a30e71f707ab7cccf23f050000",
    ],
    [
      "ETag",
      "9KVx8i8fgCgqhefiSxoEpQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:00 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-68-1635192891311"
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
      "02",
      "31",
      "10",
      "fd",
      "2f",
      "e391ddc42e8240c2019408841059c48b21a4ec0eebb21f53dbae0409ffdde9628889172fedccfb48dfeb09b2b48ca107db34f9a8501f6f12b40b378468aadc1abe149506c103b4326125de675fadfdab3a648b65a3988e07c3c6f4f1d0efb3c244ef5848e89d6097621e1be8bd9da09405b24d1654959645f6a8dc3e99bf8c9e46210305c50e98af66b3c1703682b377356d362afb97657df6604fdb1077a8b18cd065509af618d989ab6764a172f40d553a4203b5b826124d95929ac867c46f777cd16eb64437e87445530816e614499b52c9dad592b381252bf3900edc0e9a2cd0f5c84577f5f959c3ae839b823ada6f2eb872e20f27aedc9de3d63f8f0d8f16cdb3264e6ed085bebd14782057ca7259ab2bf42092fcffe3d45ef6f33704ea034ddc010000",
    ],
    [
      "ETag",
      "e7kz5jVpwkQS+mJHAB+JDw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:00 GMT",
      "Server",
      "ESF",
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
      "4d",
      "72",
      "82",
      "301800d0bb646d1d2ba440777ca2a880e00f48d964028418288a20283abd7b9d5ea3be3bbc07a249c29a865c4e053ba24fd4d3b1364c8656a5c28c739ebec523904d1809e8021e7d171256837d19e52ba0cac7ed6ca9617370210903699e0519667b6e353a11dbb63d9ac4d0faf89d14cb5b5a77718e97d9a434cc54e2878d7f8fe8b52d404ece3b9b40d0651e4476c79589e589757e57616128f1aaa47627cd5734927947bf768b607c4e1c9fb9b69363e304fefa5ed9656d98d36d71f5713e825299397d8837a9e5e891e537ba27446b3077bc3c85e554e2c39797ff0b0d10bb55a2660d11cfed12d6b401faab4f2e7dc59eff81d19ad5e8e717b7ead11019040000",
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
      "Mon, 25 Oct 2021 20:16:00 GMT",
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
      jobId: "grouparoo-job-69-1635192891311",
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
      "fbda046812f290a2354ae89a2d210b21ada66942c65ca83bc0149b4c5d95ffbe8b69ba7693da4fd8bee7dc73ee8347f2931731999088a7f735540f1fee4444ce08289ae26be214f7491c6cebcf8bc3f64b9e28f3f7466ca75344f08625695e66d091a2ae18c8c97ed74d2b5197b412a283893aceb8633bbd813d3e1f8ded9e6d234f4296ac78f113d9b74a9572629a27ed6e2a449a012db9ec32913fbf9b8773b3acc41d3025cdd79226aa48f36dd18f99605471514cf73b34504ba842c829cfd0c25f661c5dbc4edde534efa6083e700694315117aab185299828129ed695ce4a268f44db7c71203b77e5ce038389acce8bb0a0399c19315534540f251897fe666d2cbdcb8dbf9e05cb8d17eee657ee7ad69d6f56fbb5b7336eae5cdf35148d32d05c636a5ce89b8717d48f412a5e68f5a0796e949f1ab4fc7f2c0d01a525b4c1706839d41e59e32889862c19f506516241148da2e180f6228b8dfbd08f23a0c8d3a29a450b51583d6a9d439f8616a3c3b0cf2c3b1c3bd620a47410b37ecf89632722c733f2abe20a165c9642f2b643e4c65f066e18f87b6f3e0b5c5d4242eb4c2d5a634d012f3d2a2c10416fd4746ca25ca052d3eea517b8fe6c1e2cafdd76c22b48297bd8dde38c139a494034adb0790aaab588b161c49baddd0582f5c4be9e82924cbe3f92a6e78d8b172d7fa60738c0c6aed25fb20bfca5f749db3921ae69566bc8a13d90122ddf626de8faf80391b8a46d16b2ddbbfe37d23ef9904005057b7f9a08d68177ffb5d3e22316571f65a4c23bee0e938d08aba0dd21aecb7d62e348c703fda72a5aa97f63b6e50c4f5d6b7234192187423d55d42e3e16da8ad5f21984411cbfa7bb",
      "75fc03283e256178040000",
    ],
    [
      "ETag",
      "f6nqfdTQuJDvQKmft/zOoQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:01 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-69-1635192891311"
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
      "0002ff8d92414fc2401085ffcb782d810a5468c2a10828092096120fc690a59d96e2b65b77b72a21fc77672ba25113bdb433d36fb6efbd760f8f691e810beb34792a51eece12d4b7a6f051955c2bba1522570816a0660991b8c9191b45f26ec0dba38dff5a2febdd7ad2eb11a1c20d660cdc3dc429f248817bbf879c65486ba1e06596afaace02bd2bcc7011f8e3d915f599884c3f5b4e265e7f328483755a8c9866ab8affc7dac3c182ad58fb18a3c43c44a3a590628ba11e1b9b8a6505c79a12a50c514105570f1229ca8249216a34a939dd9aed34db76f7bcd3b59bb64d201721d3a9c8895d2e481f68a119f7c50bb904870059956438aeaecf344ea3ca8829c7b3c06955fabe02242d4e39aefe0649ef86d167f8c08e117ce75826ca5c9fa8d1e4c6fbed38caf4f3a881170c7f104a53522724184f878bc09bce0df770f4dedf695473292848852643bbd1eab42f9cc67bac97c2444def71b52cd18290d1df719d6a7063c6151ede001b37ad1b7b020000",
    ],
    [
      "ETag",
      "ehnaaFdrWDl5FhRx/u/9/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:01 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-70-1635192891311",
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
      "000002ff8554fd6f9b3010fd5790f74b2be50b92900f29eab284b5d1529211d20f4d5362c841dd02a6d8b48aaafcef3b4cd336ddd64a4870bef7eebdb3cf3c913b966c489f782cbccf21db7eb9e51ea9109034c4d5fbd3ce55abfee3761e5e8811c4fad5191d5b8f83012258c112344e23a80a9e673e88fe72510b339ea734e3bc8a85aa9d4655379b6dbd67747b7a53d79127200aa62cb943f68d94a9e8d7eb7bed5ac87918014d99a8f93c7e59af3f18f534e3b7e04b513f94aca38aa87f2c7a12719f4ac693c17281067201d90a62ca22b4f0cadc785f0f4bd7188d6b21821f980fd4f7799ec8c21696f07912b030cf5455d27f22cae69b0fb2b0a6d6c8d546b3a5ed1ead695c90d7c71a15da3ea8686bec296011acd8665d6456abf44efbeeccce31830e6ea800b1d62ecf2cc7d25e97d6da403bd186f6583b2c30b1b5a56d5b0b573b3a39d64e9dd972ae7dbb3ec0a0f30d08c912e5dba55e0485e7e7ad9dfc7da005814a142d93ab4ec3a47ab7d1f302afe307dd66db0b1ae0795dafd3a64dafe1f75ad0da784091278bea8a45139ef8b4d3338366d7ec1a26f49aad8ddeeeb54d00d0b162b3d569eb1b687a86417615f29831096326522e58b9bfe4d299b8d6ca7596f668e85aaa8d80e6911c97e68a26defa94d824823ee86b57641947a5e2b026b66b39c3913bb9b0caf9984248fdede21e2724a0910044d38cc620213be71bdc34329f2d26ee64660fa7c850873edf2304e9ff7a7a25b8db54edb2546fb2709d897daa0cec111734ca15e4a1fc203445af64b7abfcbfccd07186d7284db38c6edfe5b01db355d0ff21a1f02a2a6dee257552a8ed23e3206a1d4426d9fddee1532178d74a65f2736939d7a45c7220800c12fff3d142b04a7cfacbd8df5fc4e20d46192131c641f64521e267500e348b552b25bb67ea5d43fd7024cde4fb9cd16818fb932b6a14152186443e7754de5fb589452a172f204ce21cdaea10777f0071a217983f050000",
    ],
    [
      "ETag",
      "qG7X4/KjPgVsCem1XHaDEw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:02 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-70-1635192891311"
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
      "0000000002ff8d90414f83401085ffcb7885a488b596a4076b48ad36d5a2bdd498660b034281c1dd210d21fc77676be3d9d3ee7bf3cdec9bede198d7090470c8b3ef16757795216fec2542d3966ce468a836080e20ab4c48f5acc2dde2257dd2e39b62a7d6d9e4e4279bd94c08137f61a520e821cdb14c0c041f3dd4aa42db56515bb340dc35562fd7efe1228cc4a828b1c67abb5addcf57210cce5fd37edf1cffd5f2393850d021c21435d631da0c8da602635edaf58caa9a125d43ad8ed1c0193e17324d6da334912b8e3b19b9dead3ff6a6d77753cff73c014b8a15e7540bbb7d936cc0c4aa8ce824dbc1082e7ade319a574d32dc6072a9c8c407b2efb2e461dda203b1922f7accf9570f3ff06f89a47f010000",
    ],
    [
      "ETag",
      "aKaEZGOfJr54jZaNg7w3dQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:02 GMT",
      "Server",
      "ESF",
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
      "82",
      "30",
      "00",
      "00",
      "c0bfe46c1d5194d09bb606036241b18817268418b4082480103bfd7b9d7ea3ee1ff61b104a595dc74df9c50af00a14199b433a742ab840fcd21908738cae6b2577cecd61d7c925e18915f52ddf4e60eacdea02af9acc109a4f6a92f2be2d0ba46862f92c33cc37a9dd4ee55e588188ab10cf0571bd13c4598ed6067cd73b29c6915dae36fe26df25f7ee63d957e9ae5221d99b50c5328ce62eb1b3bd16ce4e90297dd42fbaab360d0aaacfb1c778f96987d62ac66eda86cc6c0f90d3a59d075b29124d94e8fc921dc9c8f66dcb45f4d01f5576ccebe1d3d3ff050680f5d559b23a3e3fb64fa6a639007ff5e34655ecf17fc1886412fcfc02babdb73319040000",
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
      "Mon, 25 Oct 2021 20:16:02 GMT",
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
      jobId: "grouparoo-job-71-1635192891311",
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
      "14fd2bc8fbda8447484222456b96d2952a212b9056db3421630c750b9862d3aeaaf2df77314dd76e52fb09dbf79c7bce7df0846e5995a2394a587ed7d2e6f1d30d4fd011a212e7f0ea3cd44e7991fd989cbb6754f7cef3df5fa6f861b10004eb58029775410782b70da162be0b8779c3db1a379c0f20d1606a0eccc9686cce2c67668e4c13788216d99a55b7c0be96b216735d3f680f73cef382e29a8921e1e5cbbb7e6fe975c36f2891427f2ba9838ad0df17fd5c708225e3d56217828156d026a625660558f8cb4c93e3b7a9870c97c31cc0f78c504c086f2bd9d98214845719cbdb466545f327a46cbe3aa0d05dbbab4823bc68cb2aae70498fb4144b1ccbc79a6aa7c176a379fee936d82c236febc7e1eaccdd2c87abed7ab7f143edeacc0d5c4de2a4a08aab2db46375f3e102fa291592554a3dea9e3be5e70679ff8fa52380b4a07d309e1a136c3ac62cc99229c99cd138c90c9a244e321de3516290994ded34a118784a54b170c52bcbc23626f628b6c7b611dbc49ac48e9590d8b2d3b16de2743a9e1a687f841e1a26e909133517acef10ba0abcc88da360e7af9691ab4ac8705bc893de5857c06b8f120a04d03b35edbb28e3a0d4b5dbf3233758ae22efd2ed27bca639268fe11dcc38c385a080c60d344fd266c3536818f2971bf704c06a62df0e4181e63f9f50d7f3cec5ab96bfd02318606757aa2f0aa3c0f3bf2a3b07c4252e5a05b9ef0fa806cbd7501bb8deff02242c699f055decdce03bea9f029ad18656e4e3690258053efcd70e8b0f58587d901112eeb03b447422a4a1fd0e3155ee337b36810433a4c08dfc3736322cebd0b52e47979196b492cf15f58b0f85f662ad78014110c6efab6eedff006486c70678040000",
    ],
    [
      "ETag",
      "8wp8mQfZ6JEHe/IJgxB7aw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:03 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-71-1635192891311"
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
      "657a0b89d47f122fb0b5d58ad62a5e35c6ac30201658dc5d6a88f1dd3b4bad6dda26ed0dcc0cdf2ce71c38c24b9c0560c3268ef6058af22a42f5a48b39ca2251926e39cf248201a85844645ad68687b23b1ed6dde67efb301e5a83ee2eeaf58890fe165306f611c218934082fd7c848ca5486b3e4f8a345b579d01aaccf570e1cd47d37bea531ee87eba745da7ef0ee0645c1603a6d8bae2ffb1b63a19b0e39b39862830f3516bc905dfa1af46daa664699ea02979217c9450c1d58348f022678273932666db32ad56bd6975af3b5dab6e590426dc672ae619b1cb05e903c5154be6fc402ea14580a84a321c56d7571ac741654497a3a9d76a54fabe02242d8c135cff0d92de2da3cff0819d23f8ceb1941799ba5077eea3f3db7194e9e751b78e37f8414845495d106f34192c3c6732d3dceaecbd5f2a9433c12948893a43abd6e834dbadda7bac375c474defb19528d0009fd1df318c15d8214b249ede00dc97def47b020000",
    ],
    [
      "ETag",
      "my0Hwy9KH3L5qhJKH1E9jg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:03 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-72-1635192891311",
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
      "db3010fd5722ef17d0fa91f433a954b1aecdb64a2565690a42d3d43acea518d2b8c40eac43fddf774e2850b681142939df7bf7ded9e73c901b9e46a44742bebacd21db7eb81621a910507485ab597279ffdb995d5396fea21fdbe9b9701aeea0df4704d72c49d79b04aa52e41903d99bcf6aab4ce41b9a0951c542d56ea36a759a6dcb69d88ed5b42ce44948e2094f6f907da5d446f6eaf5bd766d25c42a01bae1b2c6c4fa69bd7ed7a86f32710d4cc9faa1641d5564fd6dd1934430aab848fbf3191ac825640b58539ea0856766147e3a2c5de3745d5b21f88e33a08c893c55da169660228df92acf8aaaa4f7400a9b2f3ec8cc9db8c3c0184ee75e70b4a46b4d5e1e1b541afba0622cb1a79827b0e0d15267168bcd8df1c59f9e62061d5c510972695c7c737dd730961155b034fac68931f046c62179ec1973cf7367817174726c7cf5a7f333e3f3e501065d4720154f0bcf010d13d07e1fb775fcf7616a0255e8a14c2eba66875ab6e98471d865b1dd6c87b109616887dd366d8626735ad08a42a0c853ba7ac1a2a948591742db365b76d4343b9d2862605306a1e3b4ba8e8d8bedb8c9da8d10c8ae42ee33ae60c4e546485eee2db9f0c781bb08fcb9371c046ed1464cf3448d4a73ba89973e153689a037fadae92c17a8a40f6aec05ae3f1806e373b79c8d09ac28dbce6e713a629a484034cde81a1464a722c24d2367d3d938184fbdc10419c5819fed1192f47e3c3c1382eda6d86555bcc94837b07b51f09c267901b82b3f48c36c985513e7b74d76bbcaff2b0d7c7f7089ea34cbe8f6550e3beab434fd1f3a05be884aa77b5d8b68b527170751eb20ea90ddcf1d3e158257ad5426dfe7ae7f49ca251f62c82065ef4f17828bc4bb7f8cfdf5452c5e6094910a639c6526b508cba09c69be2e5a29d94ea7695b5d528033f53ad7b21ad6fef0740d5d11d690aac78ecaeb5b6ca24ee5f2098449",
      "1c456fec7dc5ec1feb1c43513e050000",
    ],
    [
      "ETag",
      "rlYwz9Sjacnxa+5nVo92EA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:04 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-72-1635192891311"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d90c16ec2301044ff657b4d4403a214240ea58d282d45342da70a21633621906483bd0121947fef3aa09e7bb1d7e337f28c2fb04f8b0d0c609d26870acdf92e41fe744384b6cad8ca565261113c405689902fdbf164f196bfebdee1a3759c47b6bbc5d6693814c2ea2de60a06178853cc3616063f1728548e62533955050bc4e7d29d27b3ef701c4622e4b471c26c319d3e8da621d4de9f69b52af7ffb22c6b0f76b48e304683854697a134b443cd1357cfaabcccd0b754198d161ab8b9480c55a53244be287eafed070f9d6ed06f3ff6834e10089891569c5221ece24bb20113ab2ca293b40307986694a271b31e1bd975b84dcb7a79338dce8c766e481258748fdf5f833c930bc7129a4d851e6825fff89af2f55cff02b44a2deaa4010000",
    ],
    [
      "ETag",
      "DhGIUJmKc7qM/vPRs5he/w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:04 GMT",
      "Server",
      "ESF",
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
      "7282300000d0bb642d8e4291d0652cc837b1503eb261021385a27c125069a777afd36bd47787f70d68593221f2b16b580b5ec14c657d592edd1e22f3545d0ca68541aa4f0dbf36ecd80c66f2e2cc198ca3a83369419cebe8275fe9dd170331dd030e32776fb5b8c6b61138d2d943046fd5d84fea6c7749691c70a1cdbcca439c58da14bfcd2493c69b389e0c07e68e8b7c246acfdad38f03e9c642098af50acadb6b7ba8281c7b75e21dfabcd96d9962624a7a9dc9d54ace94ae38df9328b1ad0df79575a9e70886288053647bef33916fbb960df8b2713be6c9cba7a7ff0b2c00bbf7356722af1fdb1555d717e0af7e3ece3d7bfc478c72c6c1cf2ff6f1afc119040000",
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
      "Mon, 25 Oct 2021 20:16:04 GMT",
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
      jobId: "grouparoo-job-73-1635192891311",
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
      "9b3014fd2bc87b5c1342090122456b94d2162d211b216da76942c618ea1630c5265355e5bfef629a2edda4f609dbf79c7bcefde0193db02a455394b0fcb1a5cdd3a77b9ea0134425cee175b9949fcdecb6bdb32377e7dd7ec54bfdd2cf673340b08e25705917742078db102aa6dbcd306f785be386f301241ad8e6c0989896e19e3aae611a06f0042db225ab1e807d27652da6ba7ed01ee69ce705c5351343c2cbd7777d77aad70dbfa7440afdada40e2a427f5ff44bc109968c57b3ed060cb48236312d312bc0c25f669a9cbd4d3d64b81ce600de31423121bcad64670b52105e652c6f1b95154d9f91b27974401b6fe92d228df0a22dabb8c2253dd1522c712c9f6aaa5d84eb95e60717eb70358ffc75106f1657de6a3e5cac97db55b0d16eaebcd0d3244e0aaab8da4c3b53b7002ea09f522159a5d4a3eeb9537e6990ffff583a02480bda07637b34c1863372932cb149e69856928d689238896d61331911774cc7694231f094a862e10a6ace0c9b18a9118f26ae1d8f6dc7899dccc1b1695949625a38c3ae81f627e877c3243d67a2e682f51d4237a11f7971146e83c53cf25409196e0b79de1beb0a38f628a14000bd53d3be8b320e4a5dbbfd20f2c2f922f2afbd7ec24b9a63f2b479841967b81014d0b881e649daac780a0d43c17ce59d03584decdb2128d0f4e733ea7adeb9386af92b3d82017676a5faa24d14fac1a5b273405ce3a255905d7f403558be83dac0f5fe17206149fb2ce8fbd60b7fa0fe29a4196d68453e9e268055e0c37fedb0f88085d5071921e10ebb434427421adaef1053e5beb0ddc9d8b54f910237f2df983572ad43d7ba1c5d465ad24abe54d42f3e14da8bb5e2150441187fa0bab5ff0334fcb40778040000",
    ],
    [
      "ETag",
      "LLt+3fXuh7T9vEXKaL/GIg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:05 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-73-1635192891311"
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
      "10",
      "85",
      "df",
      "65",
      "bc",
      "2d09953f69c205082aa6a29472650859da6929b69dbabb9520e1dd9dad88464df4a69d997eb33de7b47b784af2101c5825f17389727716a39e9ac24355a65af1ada05c2158805ac44c46e596447dd688bae1f476186d9ebdadfb1af77a4ca8608d9900670f518269a8c079dc432e32e4b580d232cb97556781de156638f3bdf1e49afb8c42d34fe6aedb1fb8233858a7c55068b1acf87fac2d0e166c68e5618412f3008d9642d206033d363695c88a146b8a4a19a0820aae1ec492ca4248a21a4f6a9d46cd6e375a76f7fca26b376c9bc19402a113ca999dcf581f68d222f568cb2ea1cd80ac4a361c55d7171e276165c494e389df6e56fabe022c2d4a525cfe0db2deb5e0cff0811d23f8ce898cca5c9fa82bf7beffdb719ce9e751c3be3ffa4128cd499d107f7c379af9fdbb07c32d8ede073b8dea411207a9d06468d79b17ad4ebbfe1eeb2599a8f93d8e96255a1008fe3b6e120d4e2452858737aa313e9a7b020000",
    ],
    [
      "ETag",
      "fuwoa0S3f9dQJDfjqRwLzg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:05 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-74-1635192891311",
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
      "fd2bc8fbd24a79002124448aba2c651d53425242da75d3941863a85bc0149b4e5595ffbe0b34edb26ead8404f63de7de735f3ca25b968568840216df95b478f870c303d44254e2186ee7c9f25b7f1e9eb3af7a6cf7cff3203dcbcfe3f11810ac62099ce6096d0b5e16848ad17ad5890b5ee6b8e0bc0d8eda03a3ad99bdbe66e9434beb691af0044da219cb6e817d2d652e46ddee3e7627e63c4e28ce99e8109e3edf77eff56e5ef01b4aa4e81e86ec4214d17d3be849c209968c67e3f50a049482161b9a629680841766187c3c74dd6138edc400be678462427899c94a16b8203c8b585c16b557347a44b5cc3f3ed0ca9ed9535f992ed6ae7fb4c56945de1e2b5828fb434bd9424e114be88685dbcab2d9e4b7ca676f31070b28b8c6828aad72f9c5f66c45d90a09eab6ca58395126eea972c8765c65edbaf6ca578e4e8e95336fb15e2a9fae0e30203ba442b2ac16ede320a195e0a7ba3aafbb5911b004118d7133504dac0d552b8882018986bd7e10a9340886c1a08f7b814a2c831a614031f064e5bd66e18c6783d00cc33ed134cbec8544039065986468ea814506940e7a432bb4cc4845bb16fa5530494f99c8b9604d71d1a5e7f8f6c6f7d6ee74e2db751a112e1379da88ab92f853a7842401f4465ebbcaca3844aa3ae5b8beed4da6be736137c331a331260fab3b188f082782021a1738a59216731e42d1d072b1727c67e14e66c0a83bbedc23041afd787c21f80f795d6559bf91efcca14793f9b2d6b0075de0a4ac51f7cd07d2555d6dab7a5bebfb9a3ed27a23cde8a8aafa1ded76adff3b9f78dee40a04e1a2c00f7fd92049d3a8e8ff885ae3eb53237eaf424355b4674d0727e3e064a2ddcf1d3c2d04ebd74446e76bdbbb42cd9547235ad08cbc3f7000ae0deffe45f62b0d58586a",
      "0803eb21198c3711551052d066cc595aa7d2b02dd3d40c1dd5e042beb2e9c670dfcfca47e591a634934f19352b5d17b13295e2190446984ed771cfc0fa1bb86b2c3b52050000",
    ],
    [
      "ETag",
      "MlPX5MdQiJ2gE5QpbmGpQg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:06 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-74-1635192891311"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d90414fc2401085ffcb786da3059542c201085102365ae5a22164db4e6ba1edd4dd294a48ffbbb38578f6b23bfbf67bd9f7f604fbbc4a6004519e7d35a88f5719f28b1d42344dc146b69a2a83e000b2ca84f497ccb334ba7ef297bd80a6ef871f650693f15808137f62a960748234c7223130fa3841a54a149b2aa9a958203ed6f6bc08dee60ff3508492122b04ebd56a325dcda175fe4cdb6dbdff9765d33ab0a328c414355631da0cb5a61dc6bcb0f58c2aeb025d438d8ed14007771799a6a6569ac815c51ddcbade7dffce1bf6fca1d7f73c010b8a15e75409bb7e956cc0c4aa08e95bda810574374ad1b45b0f9d6c3b5ca64dbbb998a64746f3ac491218b48fdf9c83ccc8866309cdba41076225fff898f3f9dcfe02afb8df30a4010000",
    ],
    [
      "ETag",
      "8KttCfb/M8K2NoBZvxas7A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:06 GMT",
      "Server",
      "ESF",
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
      "1f8b08000000000002ffedd34d7282300040e1bb64ad8c4a29a43b90963f2b2a04d04d26602014851890423bbd7b995ea37eebb77ddf8064196d5bdc3515adc10b18c90a4a99e471cd782b58a78ff9657f0e98723f55ab025da27d18b2fa3970ac5bb2e8bbc8fda03e531c683a9e73b34d79e125ad60236261946a277fbe0ec62fa2d5ea8d87d5c1134d8f7683812fc3b2cc118af2f56b76b66c166d7bde40394d1d785f361619946d3c1ae6dcca60265c2c74db0e9042688591723f4e6d9c7f5e1babadf5a3db6b1b9ff93b638937495c3d453c6509417a752dd4756a22fd9de8cd95b74c3dcaa703921e1efe2f300374e0a5a02d2ea7db6505c219f85b1f7723a7d3ff0625820af0f30b3a03959519040000",
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
      "Mon, 25 Oct 2021 20:16:06 GMT",
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
      jobId: "grouparoo-job-75-1635192891311",
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
      "3014fd2bc8fbda3cc80b8814ad514adb4881ac84b49aa6091973a1ee00536c325555fefb2ea6e9da4d6a3f61fb9e73cfb90f9ec92f5e26644e629e3d36503f7d7910313923a06886afcde1ba6037578eb7a5578f018c9bf14dec2d170b44f096256951e5d093a2a919c8f97ed7cf6ad154b416a287897ad6b467cec653d319d98e39364de449c8d30d2f7f21fb5ea94ace078393763f1322cb81565cf699285edf0787d1a0aac503302507ef2507a822071f8b7ecd05a38a8b72b1dfa18146421d4141798e16fe3293f8fc7dea3ea7453f43f08133a08c89a654ad2d4cc14499f2aca97556327f26dae69b03d9b91b77151a4ce44d5146252de0cc48a8a2917aaac0b80cb69eb1f62fb781b70cd75b3fdaadae5d6fd95f6d377bcfdf1977d76ee01a8ac63968aeb130cef5cdc70bea2720152fb57ad83eb7ca2f0d5aff3f969680d212ba60640d67d4b4874e9cc6164bedf1344e8710c7766c4de9381e3267029324068a3c2daa59b414a53d4ae2d9786247b6cdd26862322b72a6d48a126a0d8793347518b5c8f18cfcaeb9820b2e2b2179d7217217ac43370a83bdbf5a86ae2e21a54dae2e3a636d016f3d2a2c10411fd4746ca35ca052dbeeb51fbac17215ae6fdd6ec21bc8287bda3de28c539a4b4034adb1790a6a4f24d830e22f3df702c17a62df4e4149e63f9e49dbf3d6c59b96bfd2431c606b57e92fd985c1dabfd2764e885b9a371a72e80ea442cbf7581bba3efe44242e699785dcecdde03be99e0248a186927d3e4d04ebc0a7ffda69f1118bab8f3252e11d7787c95684d5d0ed10d7e5beb09dd9cc198d8806d7eadf98351c99a7aeb539da8c5040a95e2aea161f0bedc41af90ac2208edfd7dd3afe01c690354178040000",
    ],
    [
      "ETag",
      "uvHmcQG9MOaGqRe3u3QbMA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:07 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-75-1635192891311"
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
      "82",
      "40",
      "10",
      "85",
      "ffcbf4514ca4de497c40abd656f1864f4d635618140b2cee2e36c4f8df3b4bad6dda26ed0bcc0cdf2ce71c38c14b98f860c126dc1e3214f9cd16d55c170b9459a424dd529e48040350b12d9133e7a1779cbbf170582a3953ef511c064e6e773a44486f873103eb044188912fc17a3a41c262a4358f47599cac8bce0095a77ab874172367487dcc7ddd3babf1d8ee8efb7036ae8b3e536c5df0ff587b3e1bb0e79b05062830f1506b4905dfa3a746daa664711a6159f24c7828a1808b075bc1b39409cecb342937eb65b351ad9beddb56dbac9a268111f7980a7942ec6a49fa4071c5a2057f2597d020401425190e8aeb91c6a15f18d1e5c8711bb542df5780a4056184ebbf41d2bb63f4193eb04b04df3916f32c51576a309edabf1d47997e1e7567bbfd1f845494d415714793fed2b52733cd3d5fbc7773857226380529516768566aad7ab351798fb5c775d4f41e4b890c0df018fd1df7a1022b6091c4f31b844d04a07b020000",
    ],
    [
      "ETag",
      "PNJCvQTmGG++NOcKrqFNyA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:07 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-76-1635192891311",
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
      "a2",
      "4010fd57c8de2f6d624514514c4ccfb3b44762b187d08f5c2eba2c0bdd96afb24b2fb6f17fbf61a9b6f6eedac44486796fde9bd9599ed13dcb423442018b1f2a5aaebfdce5016a212a700c6fd3eb70be9e513cb87e8a4f9f6efdb5ae2ebc783c0604ab591ca745428f785e9584f291bf68c7655e15b8ccf323287434308e34a3d7d7cceed0d47a9a063c4e9368c6b27b60df0a51f091aa6eb5db719ec709c505e36d92a7bbf7ea63572dcafc8e12c1d57d491554b8fab1e87192132c589e8dfd0518a8382d9734c52c010bafcc30f8ba5fbacd70da8e01fcc808c584e455266a5b5082e459c4e2aa9455d1e819499b6f1ed0c29a59534f99ce7dc73b58e1b426af0e15cc956dd05256d053c412ba64e1aace2c97c5bd72eacecf21030e6e31a77ca55c7db75c4bd9d194b172ac4c9c13659f6e3b8aef38d6c2530e8e0f953377ee5f28df6ef630e03ba45cb04cbaf67090d0daf1cb60edbf8fb32660012e9ae472d031b036ec9841140c4834ecf583a8438360180cfab8177488a9533d0c28069ea8ab4b16ce6056613fd07b5d1246388ab47e5f2724d0877a187606b463843d030e6a8875136d5ae877c9043d61bcc8396ba68bae5cdbb3969eeb3bd38967c936225c25e2a4315737f1d6a7802601f4415f9b3acb7250aa8fca763ccb9d4c3dfbd26ab66346634cd68b07d88f08279c021a9738a58296e77908434317f385edd973673203863cf28b2d82a3d1cfe75782b72ee49485fc47a7b3f9c43374e9600bb9c44925318fcd03d2da7d406c5aff2f3371ddc90d48e3b2c4eb773968c790f47f2848bc8c1a9b3b4554ab6da3ee5ea4ef4506dafcdac0af85e0a635cae8876fb937a879e5d2889634239faf168065e2d30fc6f6f60216ee2fc87001312c32e1b5082969b3d02c95ad346cd318986607497029dee7869ad6db9e5c5da3ae4853",
      "9a89978e9adb2b8758a72abe034112f6d0b19d33c8fe011773769d3d050000",
    ],
    [
      "ETag",
      "mXdOyLea7XzgFzhUy4/STg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:08 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-76-1635192891311"
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
      "4010fd2fe3b54dba5451483880016c6c8856ab0743c8b20cb5d076caee564308ff9dd9628827e36577e67d64dfdb036cf36a057d58e6d9ae41bdbfcad03ebb2141d314d6f0555365103c402b33562a9a3c86e1308976d17b3099c669a0df82e160c00aa33eb194d03fc03ac76265a0ff71804a96c8365952535916d97dedf668f63a9e8e13064a5a396096c6f170148fe1e85d4c8b45bdfd97657ef46043cb04d7a8b152e832d49a36a86ce4ea1959d605fa861aadd0402b6e894c53534b4de433e2df767dd10d6f44af73d713a1102c2c48499b53c5daf485b381252b8b84beb91d842cd0edc845d7edf9c570a7ede026d146fbcd890bd7f983bb76dcfce7b1d1dea279d2c4c90dbad0c1b9c03db95296cb5adda0074af2ff3fe4f6bc1f4fe172d654dc010000",
    ],
    [
      "ETag",
      "coFK33ARIqIW0FGLU0rV0A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:08 GMT",
      "Server",
      "ESF",
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
      "08000000000002ffedd34b7282300000d0bb642d4e8568a13bf908c40242c45a37196a23220a21a140e8f4ee757a8dfaeef0be41763c5221485b97b4022f4066aa313d4ed74c375779e11a177717792d4631dd575a8bb6714c32a7daf491b58b4d95689f0b2fa984c051902e4a6d808ee3cfced0ffda5ec6edd3d0cbc853bb71c6e2f0e0b8b2b48ddcc9cdded5f55bc82099ef9585a98f639ed4af2ee29d426234acf655f91c31890fe1ae647e0be529ccec351af42139b315f73fa4d57a4a801bd3127e51eae9edad99636e5bf57b835222d57423aeeb6be8f8d6128e9d51c3600c8213c20194d38787ff0b4c001d58c1a920c57dbb36378c09f8ab4f5ac9e8fdbf49334e39f8f905b139563c19040000",
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
      "Mon, 25 Oct 2021 20:16:08 GMT",
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
      jobId: "grouparoo-job-77-1635192891311",
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
      "00000002ff85536b4fa34014fd2b64f6ab7d595a6893666d2aae640b75816adccd860cd30b8e520699a1a631fdef7b19acab31d14fcccc3de79e731f3c93075e6cc894243c7baca1da7fbb17093921a06886afd1cefdb9bedd1797fb7e615b37bf2fdc07d37b9acd10c11b96a4db32878e1475c5404ed76137ab445dd24a880e26ea585667301e8e0693537b32180e06c89390a74b5e3c20fb4ea9524e7bbda376371322cb81965c7699d8bebef776a7bdb212f7c094ecbd97eca18aec7d2efa3d178c2a2e8ad93a4403b5842a862de5395af8cfdc2467ef537739dd763304ef3803ca98a80bd5d8c2144c1429cfea4a6725d367a26dbe3990d0593a8bc86022afb7455cd02d9c181baa68acf6251817c1ca335cff621578f3c85df971b8b874bc7977b15aae3d3f346e2e9dc031144d72d05c63669ce99b8f17d4df8054bcd0ea51f3dc28bf34c8fd38968680d212da606cf5c77460f727499a582cb587a324ed4392d88935a2c3a4cf2626989b0428f2b4a866d1421496394ad9b84fe3d129b563d33647b13db492d832f19c021d5360e470429e2aaee09ccb5248de7688dc046ee4c451b0f617f3c8d125a4b4ced5796bac29e0ad47850522e8939a0e4d940b546adaedfa9113cc17917bedb4135e4246d93e7cc419a7349780685a61f314549ed860c3883ff79c7304eb895d1d83924cff3c93a6e78d8b372d7fa54738c0c6aed25f124681ebffd0768e886b9ad71ab26b0fa444cb77581bba3efc45242e699b85fc5a3bc12d699f0248a182827d3d4d04ebc097ffda71f1118bab8f3252e11d7787c9468455d0ee10d7e5beb02763dbb22644832bf52166dbe363d79a1c4d46d842a15e2a6a171f0b6dc56af90ac2208edfd7dd3afc03e585a23a78040000",
    ],
    [
      "ETag",
      "TvIKUYynHy0n87WZFIk4Mw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:08 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-77-1635192891311"
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
      "614f82501486ffcbe92b6e928acae6072c359a9a21aeb5e6dc150e880117efbdd49cf3bf772e99b56aab2f70cee13997f77de100cf491e820deb24de9528f61731aa7b5d7828cb5449ba153c970806a06231910da73919eef6d6685ba8f0368a1f3ce7d18d7b3d2264b0c18c817d8028c13494603f1d206719d25ac0d332cb57556780da177a38f73d773aa23ee3a1eea78bf1d8e98f077034ce8b21536c55f1ff585b1e0dd8f2b587110acc03d45a0ac1b7182857db942c2b52ac495e8a00255470f52016bc2c98e0bc46935abb5d33ad46cbec5e76ba66c334094c79c054c273621773d2078a2b967afc955c824580a84a321c55d7171a2761654497eed4b79a95beaf00498b9214577f83a477c3e8337c60a708be732ce365aeced4707ce7fc761c65fa79d4b5e30f7e1052515267c4772783b9ef4c669a5b9ebcf7f70ae54c700a52a2ced0ac373badb6557f8ff58aeba8e93db612251a1030fa3b6e120576c45289c737372f410b7b020000",
    ],
    [
      "ETag",
      "3A4MFqy6GjptdJfgWRAYIg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:09 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-78-1635192891311",
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
      "8554fd6f9b3010fd5798f74b2be503f2412052d46509ebd852d21268554d5362c050af8029369da22afffbced0b4cdd6b512129cefbd7befec330fe896e6111aa38026771529b71f7fb100b510113881d5ef055ede3ae4db3c63817a9af84ee559f462320104952c8eb322256dceaa32247cecaf3a49c9aa02978cb5a1507b64b435bd3fd4cc9e616a7d4d031e2769bca0f92db06f8428f8b8dbdd6b7712c69294e082f24ec8b2a7f5ee7daf5b94ec170905ef1e4a76418577df163d4959880565f9c45f81818a93724d324c53b0f0cc8c824f87a53b14679d04c0f73424380c59950b690b4a842c8f6952957555347e40b5cd171f68652dac99a7cc96bee31d6d7026c99b630573651fb4940df414d394ac69b49199f5bab855beb8cb33c880831bcc09df28575f2dd752948d047d982827cad4992b875cdb517cc7b1569e727472ac9cba4bff5cf97c7d8001d311e182e6b5650f072991761f77d5fef72c25010bb0d024d72355c79aa19a411c8cc2d8e80f835825416004a321ee076a680ec8200a08069e90d56b16ce593e308351ac8e7afd300afab1417afd288843438f55acc53d42225337547d68a05d0bfd2ea92073ca0bc669b3b5e8cab53d6bedb9be339b7a56dd468cab54cc1b73b289973e053409a037fadac92c65a024cfc9763ccb9dce3cfbd26a466341121c6e5777301c314e3901342e71460429cf58049b86ce972bdbb397ce74018cfabccff7088ec63f1e9e09deb6a87759d46fa9a50f6afd3de012a7558db86f3e903644bb5debff25a6ae3bbd06595c9678fb7af957ebd7f83a6a2c3ee921a9b68f7a07d1e020d2d1eee70e9e16822bd628a30bdf72af51b3e4929894240fdf1f2b00d78977ff14fb6b0b58b8b820c305c430c421972261499a61a659dd4ac33675d3eca9a80697e2afdc485507eafed4640d59916424178f1d35d7b6de4499aaf813089230838eed9c42f60f6d788fe536050000",
    ],
    [
      "ETag",
      "KpaOkNeJDmob0GgUNuTEiQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:10 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-78-1635192891311"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d504d4fc24010fd2fe3d136b154149a7000d22849835221261a429676a80b6da7ee078610febbb3c570d18397dd99f7917d6f8fb093750e11ac65f169511dae0a343337a4a86d69345f0dd51ac10334a260e5786f93c9930ce5dbeb2cd5c5fc7a2846e3d960c00a9d7d6025203ac24662996b88de8f508b0ad9262ab2b5619139346e9f4ce7f1439c325051ee80e9224986a32486937731ad56cdee5f96e5c9832dad53dca0c23a4397a151b4c5cc4c5c3d2daaa6445f9355196a68c52d5128b28d50443e23fe7dcf0feec26ed0eff4fa4118042c2c29134652cddac50b6703434694297d713b0859a0da918b6eda73cf70b7ede0a64e1bed6f2ef8c58517eed671cb9fc7460783fa591127d7e842df9c0b8cc995325cd6288b1e6482ffff519af37efa06f5459f56dc010000",
    ],
    [
      "ETag",
      "CvuLIOi3iZWQRsgT+AaBCQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:10 GMT",
      "Server",
      "ESF",
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
      "4b7282300000d0bb642d0e83524877a445b10a94a242d86420a444b08109209f4eef5ea7d7a8ef0eef1ba494b2b6255d5d31019ec1946a704997fbc6449b82f3accff0ce20ccdc274fbb9a12d70ff3cdfa1a9a118f0a633506fa299324b5e2c3a0becd71aec58e11b5535789ec5696ee24e62352b0549590a3a47ad99f44193aaf0253dbde329926dabc5679e14ce82cf13672bbba4d944b37f65fce2741bdaf1495e50579e05c3d7dd20c7874bb30d37de7a337a9d2df820c7b100df4dd08067de3579eed5ecf48b54af7b43ad000e396c3b32834586939374a53cccb8787ff0b2c001b9b8b642db9dcb7af740817e0af3ee9a686ddff23964a26c1cf2f1d6a297819040000",
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
      "Mon, 25 Oct 2021 20:16:10 GMT",
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
      jobId: "grouparoo-job-79-1635192891311",
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
      "91f75a0881000109ad88a62b5a096d08ada6698a1c7393ba4be2347698aa8affbe6ba7a07693daa7d8bee7dc73ee475ec86f5eeec894243c7b6aa07efef22812724640d10c5fb366953d55fba173e57d8fbc20b829c4dabe9dcd10c1354bd2a2caa12345533390d3eda69bd5a2a9682d44071375c6938e331a0c9d49df9b3803c7419e843cbde6e56f643f2855c9a96d1fb5bb9910590eb4e2b2cb44717ab7f77dbbaac5233025edf79236aa48fb63d1afb960547151ceb61b34d048a8632828cf758127e62e397f9fbacb69d1cd10bce70c2863a22995b685299828539e35b5c94aa62fc4d87c73201bffda5f44161379539471490b38b37654d1583d57605d86eb95b50c2ed7e16a1e2dd741bc595cf9ab7977b1bedeae828d757fe587bea5689283e15a33ebdcdc02bca0fe0ea4e2a5518ff4b3567e6dd0f2ffb168024a4b6883f1b837a28ed79b24693266a9371826690f92c44bc6433a487a6ce282bb4b8022cf881a162db1e641cfeba7ee2e1e8f476eec3a2316277d7062e6010686a3513aea91c319f9537305175c5642f2b643e43e5c467e1c85db60318f7c53424a9b5c5db4c674016f3d2a2c10411fd474d0512e5049b77b19447e385f44cb3bbf9df03564943d6f9e70c629cd25209ad6d83c05f54aecb0612498affc0b049b89dd1c83924c7fbe10dd73ede24dcb4ff40807a8ed2af3259b285c06df8c9d23e28ee68d81ecdb03a9d0f203d686ae0fbf10894bda6621b75b3ffc41daa71052a8a1649f4f13c126f0e9bf765c7cc4e2eaa38c5478c7dd61528bb01ada1de2a6dc57f664dc9b782e31e05afd1b731cd73d764de7d019a18052bd56d42e3e16da8a35f204c2208e3f30dd3afc050a054ff17804",
      "0000",
    ],
    [
      "ETag",
      "guMgqpv51H8KT8NNPmoO/Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:11 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-79-1635192891311"
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
      "ff8d92dd6e82401085df657a8b89d47f122fb0dad6042d454c131b635618100516779736c6f8ee9da5d6366d93f60666866f96730e1c6197e42158b04ee27d89e27015a37ad48587b24c95a45bc1738960002a161319efd7bb85287aeed3e27198b9cc315d3fb4fb7d2264b0c18c81758428c13494603d1f216719d25ac0d332cb575567803a147a38f3bdf1f48efa8c87ba9fce1dc71e3823381997c59029b6aaf87fac2d4f066cf9dac30805e6016a2d85e05b0cd458db942c2b52ac495e8a00255470f52016bc2c98e0bc46935aa75733db8d96d9bbeef6cc86691298f280a984e7c4ce67a40f14572cf5f82bb9843601a22ac970545d5f689c8495115d8ea77ebb59e9fb0a90b4284971f537487a378c3ec307768ee03bc7325ee6ea42dd3a0ff66fc751a69f470d6d7ff483908a92ba20fe78329af9f6c4d5dcf2ec7d7050285dc12948893a43b3deecb63aedfa7bac375c474defb19428d18080d1df719f28b022964a3cbd014436a9f67b020000",
    ],
    [
      "ETag",
      "gqbkZrp9PWZQDmPaL1PTdA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:11 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-80-1635192891311",
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
      "57b8bd5f34e90794d296268d5795d3e62a550a1a73b9b4cb76c15560915d7ad798feef372c56adf7614202b3f3debc37bbb33ca10796add010852c7e2c69b1f97ccf43d44054e21856d76ebf1fa757bfced7b6d1c9fd30f8b64a8eaf462340b08a25709a27b4297859102a86c1bc1517bccc71c179130a35077ad3e89996617706b6611a06f0044da229cb1e807d27652e86edf64ebb15731e2714e74cb4084f5fd6dbeb4e3b2ff83d2552b4f725dba022daff173d4a38c192f16c14ccc1402968b1a0296609587865aec22ffba55b0ca7ad18c06b462826849799ac6c4109c2b388c565a1aaa2e1135236df7ca0b933754e7ced6416b8fec112a7157979a861a1ed8286b6849e2296d0055b2dabcc62913f685fbdd90564c0c11d16542cb59b73c773b4d7a5a5f669a41d6963f754dbaf3071b5c0759db9af1d1c1d6a67de2cb8d48e6ff730607d4585649932eee330a195e9e7bd9dfc79a215014b50ad938bbedec3c640b7c328ec9368605a61a4d3301c847d0b9ba14eec2eedae428a8127abea8a85339e5911ed869635c0e6c0363b512fb209d10d6c45d8327b7d3d22bdd0eaead444db06fa5930494f99c8b960f506a31b6fe23b0bdf0bdc93b1efa836225c26f2b4365735f1d6a7842601f49fbeb655967150aa4e6be2fa8e373ef127d74e3d20531a63b2993fc28844381114d0b8c02995b4b8e02bd83474399b4ffcc9cc1d4f81a14efd72871068f8fde995e06f72b5cb52bdd1dcf726ee9932b0435ce3a4549075fd81c6397845db6de3df65c69e37be05695c1478f32e07edf4ba15fd2f120aafa2dae64ed24095da2eeaec45ddbda887b63fb6f034105cb65a195d058e778bea258f46b4a019f978b400ac121ffe33761718b070854146",
      "4888619089a8444841eb8166a96aa566db7dc3eeda48810bf93ed7d1adceeee4aa1a55459ad24c3e77545f60b58955aa142f2048c21cbaea10b7bf01e41d69db40050000",
    ],
    [
      "ETag",
      "vN77gmQxHv912pTbUKdlBQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:12 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-80-1635192891311"
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
      "00000002ff8d504d4fc24010fd2fe3b58d94a201120ea28d256223554e8690a50cb55f3bebee564208ffddd9628827e36577e67d64dfdb235485dcc2183645fed9a23e5ce568176e48d1b4b5357c299206c103b42267e54295cba76410c7328992685f3f570fd7653e99b0c2641fd808181f615760bd35307e3f82140db24d34d44acb227b506e9f256fd1639432d0d0d601c9723ebf9bce23387917d37aadaa7f5956270f4adaa4b8438d32439741692a31b33357cf8846d5e81b6a7586063a7147e49a5a253491cf883fecf9c16d78138cfac3511006010b6bca842d48b276f9cad9c09215754a7b6e07210b743772d15d777e313ce83ab829e8a2fde6fa176ef007d777dceae7b1e9c1a279d1c4c90dbad0bd73817b72a52c97b5ba450f32c1ff1f17f6bc9fbe01113f2ef4dc010000",
    ],
    [
      "ETag",
      "QpjUKN4HHnNENEwlMkD/jg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:12 GMT",
      "Server",
      "ESF",
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
      "0002ffedd3cb7282300085e177c9da324a0493eeb80e62e52643031b8662a429a0967b70faee65fa1af55f9fb3fc1e20cb73dab669772be915bc029e8958c885c31da966f1490c4fb286db5e53fcfc624c7d1a6c12d9da73253cd9d165abe7d6d053ed6c796d59e4725a67b8b23db4819e1d2f97eec0e7d86152d1af7d39a9b067563b5d9e5d49226269696fd356dc3b68ea38dadaef751f84e18c0719ea0d8975e6bbe72b6aa311ebe4c647a61427789897c50bae513c1d8f890921122be24ca64e827524961bd33f738775e33a9c8d013a75197dcfc70f77c7be4c992a6add688af0ecd9ff0dac009deeaca16dca16ed50c27805fee8a71dbfd3c5bf4ab38636e0e7173df7e47d19040000",
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
      "Mon, 25 Oct 2021 20:16:12 GMT",
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
      jobId: "grouparoo-job-81-1635192891311",
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
      "fbda3c48480291a2354a68172d211d21ada66942c65ca85bc0149b565195ffbe8b69ba5695da4fd8bee7dc73ee836772cf8b984c49c4d3871aaac3b73b119133028aa6f8ba9cabc3c5655ace37573f9f80abd1fd287f48673344f08625695e66d091a2ae18c8e97ed74d2b5197b412a283893ab6d931c7c391e90c6cc71c9a26f22464c99a17f7c8be55aa94d35eefa4dd4d854833a025975d26f2d7f7dee3a05756e20e9892bdf7923d5491bdcf45bf678251c54531dbefd0402da10a21a73c430bff997174fe3e7597d3bc9b22f89133a08c89ba508d2d4cc14491f0b4ae7456327d26dae69b03d9b96b7711184c64755e8405cde1cc88a9a2a13a94605cf8db8db1f22eb6fe661eacb65eb85bfc7037f3ee62bbde6fbc9d71f3c3f55d43d12803cd3566c6b9be797841fd18a4e285560f9ae746f9a541ab8f636908282da10d8693fe989a76df899268c2127b388a923e44911d4d467418f599638115474091a745358b16a260368c26e3a11942ec8c426b9c2421454668c5948d2dc7b2e241448e67e4a9e20a965c9642f2b643e4c65f056e18f87b6f310f5c5d4242eb4c2d5b634d016f3d2a2c10419fd4746ca25ca052d3ee9517b8fe7c11acaedd76c26b48293bec1e70c609cd24209a56d83c05d546c4d830e2cd37ee12c17a6257a7a024d33fcfa4e979e3e24dcb5fe9010eb0b1abf497ec027fe55d6a3b27c435cd6a0d796c0fa444cbb7581bba3efe45242e699b85fcdabbfe6fd23ef990400505fb7a9a08d6812fffb5d3e22316571f65a4c23bee0e938d08aba0dd21aecb7d613b93816d5b44832bf521e6388353d79a1c4d46c8a1502f15b58b8f85b662b57c056110c7",
      "efe96e1dff010f5d328e78040000",
    ],
    [
      "ETag",
      "DAtyFGgpAMPKweit5k5mqg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:13 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-81-1635192891311"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92dd4ec2401085df65bc2dd10a5668c24551942615b194c4c418b2b453286ebb757f2484f0eece5645a3267ad3ce4cbfd99e73da1d3c1555063e2c8ae5b341b93d5aa2beb3458cca70ade8568b4a2138809a2d8934e6995fcec268321865ed519c78c717f5fda6df2742a52b2c19f83bc80be49902ff6107152b91d652c14d59cd9bce01bdaded709ac4e1f89afa5264b61fcfa228184443d83b87c58c69366ff87fac3dee1d588b458c394aac52b45a6a29d698ead0da54acac39b694303245050ddc3c584a616a268568d1a4d5755baed73e737ba7dd9edb765d02b948992e4445ec6c4afa400bcd782c36e4123c02645392e1bcb9bed0b8c81a23b60cc789d769f47d05485a5e709cff0d92de15a3cff081bd47f09d63a530953e5057d16df0db7194e9e751974132fc41284d491d9024bc194e93e06662b9c777ef83ad4635918282546833744f3addb373efe42dd60b61a3a6f7f85a1a742065f4778c0a0d7eceb8c2fd2b293e5b117b020000",
    ],
    [
      "ETag",
      "uuqlDUILPBHd3HRT6/CpXw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:13 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-82-1635192891311",
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
      "ff8554fd6f9b3010fd5798f74b2b2521403e48a4a8cb5ab6464a490ba41f9aa6c41843dd124cb1e99455f9df7798266dbaad9590e07cefdd7b679f7942f72c8bd010852c792869b1fe7cc743d44054e20456930bdf4ef8ef845d4758bf96a73dfd9ac964340204ab5802aff29436052f0b42c570eeb7928297392e386f42a1a66d368d9ed53506a63d302cc3009ea0693c65d93db06fa5ccc550d7b7daad84f324a53867a245f86ab7ae3f9a7a5ef03b4aa4d0f725755011fafba247292758329e8de63e1828052d167485595a35b86346e197fdd22d8657ad04c08f8c504c082f3359d982128467314bca425545c327a46cbefa40be33758e03ed7836778383255e55e4e5a18685b60d1ada127a8a594a172c5a5699c522bfd7be79b333c880835b2ca8586a57a78ee7682f4b4bedd3483bd2c6ee89b65f61e26a73d775fc403b383ad4be7bb3f9b9f6f5660f03d6232a24cb94f1008729ad4c3fefede4ef13ad0858826a9d5cf4db3d6cd8ed4118877d12db56378cdb340cedb0dfc556d826830eed4421c5c0935575c5c219cf6867605926314917b72d3beadad488cc9ed589fa7050b165f47b669f181d1b6d1ae857c1243d6122e782d51b8caebc49e02c026fee1e8f0347b511e3329527b5b9aa89d73e253409a077fada5459c641a93aad891b38def838985c3af5804c6982c9da7f801189712a28a071815754d2e28c47b069e87ce64f82c9cc1d4f81a14efd7c8b1068f8e3e98510ac73b5cb52bd911f7813f7bb32b0455ce2b45490c7fa03e11cbca2cda6f1ff3263cf1bdf80342e0abc7e9383767a9d8afe0f098557516d732b69a04a6d1b997b51672feaa1cdcf0d3c0d0497ad56461773c7bb41f59247635ad08c7c3c5a0056890fff19db0b0c58b8c2202324c430c8445422a4a0f540b3956aa5660ffad6c0b6900217f26dae63a8cabb8b5b55a42b9ac9e78eea0bac36b14a9562078224cca1ab0e71f307766d42e640050000",
    ],
    [
      "ETag",
      "gQS8gozgiXda/XtH6/Xitg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:14 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-82-1635192891311"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d504d4fc24010fd2fe3b58d940a41120ec534405251aa7831842ced500a6da7ee4e3584f0df9d2d869878f1b23bf33eb2efed090e7995c2103679f6d1a03ede64c80b3bc4689a828d5c355506c101649589f2f1361cef82947bf9244a83ce62faa63a4fc168240a93ecb054303cc136c72235307c3f41a54a149b2aa9a958447caced3e9bbf86933016a0a4d402f3651405e32884b37335add7f5e15f96d5d9813d6d62dca2c62a419ba1d6b4c78467b69e51655da06ba8d1091a68c52d91696a6aa5895c41dc41d7f5fa7ecfbbef0eee3ddff3445850a238a74ab4cb17c9064cac8a98bea41df822d0ed2845b7edf92970afed60a76e1bed37d7bf72de1fcebf7277965bfd3c363e329a674d92dca00dddb91478205b8aa52ceb061d4894fcff34e7cb7efe06963c1b25dc010000",
    ],
    [
      "ETag",
      "M/EBhAdt5iGLdA0QHVa0OA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:14 GMT",
      "Server",
      "ESF",
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
      "4d",
      "7282300040e1bb64ad0eca8fd21d5015c18c4ec42a6c3211020951c04414ecf4ee757a8dfaedde01de3720694a95c2b75ad00a7c809e4cec513a0a9b99bb2858c7353fc085ee146bc45e0d2f8774d9abe1e61cf92704efc158cde232474d524946b0504e9e4577623db97f5f8a64959e562c6b8dda8c1f16aab26dd80b764196b370aef8b00b0bb29c34adadf9655cd6b28579b976c974ee6da1f2aa500f7845e150afcdd324f060d59a8e08109e76067bc6c33297f3d23fb71bcbeb3469ed45bc8a60a71a96789bf3d736e39fedf886a33dd566c7a31189e38377e83a7a7bfbbfc000d0aee1922acc5fb7eba66d0fc0dffaf8d637f4f5bf4b89a412fcfc020556e63c19040000",
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
      "Mon, 25 Oct 2021 20:16:14 GMT",
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
      jobId: "grouparoo-job-83-1635192891311",
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
      "c87b6d4208498048d11aa574456bc84648ab6e9a906d0c750b9862d3aeaaf2df77314dd7aa52fb84ed7bce3de77ef0846e7995a239223cbf6b59f3f8e54610748498c239bcfe9d06b221bfae9ce626de5c7c0f4db3c4d5c3620108deb1242eeb820da4681bcae47cb71de68d686bdc0831804403d71e58337b6a7963d7b36ccb029e644576ceab5b605f2b55cbb9691eb487b91079c170cde5908af2e5ddbc1f9b75236e1855d27c2b69828a343f16fd5a088a1517d562b70503ad644dc24acc0bb0f09f9992e3b7a9871c97c31cc0f79c324ca9682bd5d98214545419cfdb466745f327a46dbe3aa0ad7feeaf62838aa22daba4c2253b3252ac70a21e6b669c469bb51184a79b68bd8c834d986c5767fe7a395c6dce77eb706b5c9ef9916f284c0aa6b9c6c238d6b7102ea09f32a978a5d5e3eeb9537e6e50f07e2c1d01a425eb8389339a61cb1d7924230ecd5c7b4ab21123c425ce14db6444bd099ba48461e06951cdc295a85242ac0c8f278983674e3299653471d9d84b9cd49d5ad4b6539bb9687f841e1aaed80997b590bcef10ba8c82d84fe26817ae96b1af4bc8705ba893de5857c06b8f0a0a04d00735edbb2817a0d4b53b08633f5aaee2e0c2ef277cce724c1fb77730e30c1792011a37d03cc59ab548a161285caefd1300eb89fd3804259aff7e425dcf3b17af5afe428f61809d5da5bf681b4741f84ddb39202e70d16ac87d7f403558be86dac0f5fe0f206149fb2ce8e7ce8fae50ff14b18c35aca29f4f13c03af0e9bf76587cc0c2ea838c547087dda1b213a10deb7788eb729fd99e3371a70ed2e046bd8b79def8d0b52e47979195ac52cf15f58b0f85f662ad7c014110c61fea6eedff010c30559478040000",
    ],
    [
      "ETag",
      "x5IsrbZY7rjTOVKN//manw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:15 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-83-1635192891311"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92d14e83401045ff657ca5b158ad48e243ab55515ab5c56834a659614074617077519ba6ffee2cd66ad4445f606638b3dc7b610e8f7999800f7779f654a39aad6568ce6d31465d4ba3f95651a9111c402332262fc251fb2a5897cf5ef6da7ebdf4e8f87a7892edee32a1e37b2c04f8734873948906ff660ea52890d7629275514e9bce0133abec70128d83d121f70525b61f5d8461af1f0e60e1ac161361c4b4e1ffb176bb70e081eec698a2c23246aba552f480b109ac4d2d8a4a624b53ad62d4d0c0cd834c515d0945d4e249cbebb4dc6e67cbddd9f076dc8eeb3228291626a7d22630617d60c80839a61776095d065453b2e1b4b93ef3384f1a23b60c465177b3d1f7156069692e71fa37c87aef057f860f6c19c1774e14549766451d84a7bddf8ee34c3f8fdaef45831f84369cd40a8982e16012f5866796bb5d7aefcf0cea33451ca4469ba1dbdef4b6b6bbedf758f7c846cdeff18daad18158f0df71941bf05321352ede00dacb8e0f7b020000",
    ],
    [
      "ETag",
      "ULN0XI/lv8gx0xW8oJZMKg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:15 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-84-1635192891311",
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
      "98",
      "f7",
      "4b2be5838f1048a4a8cb52d621a52423d0aa9aa6c480c9dc124cb1491555f9df7786a66dd6ad9590e07cefdd7b679f794477344fd01045747d5f9172f7f99645a88588c06b58dd3d58db5bf210ced5b99d845b5e58175b633c1a01824a16c79b22236dceaa32267c182e3aeb9255052e196b43a1b6dd6b6b7dc3d406ba3dd00c4d031e27593aa5f91db07f0b51f061b77bd0eeac195b670417947762b6795eef6ef56e51b25b120bde3d96ec820aefbe2f7a96b1180bcaf251b800031527e5926c30cdc0c20b3389be1c97ee50bce9ac01bca531c171ccaa5c485b502266794ad755595745c34754db7cf58116ced49904ca64167ac1c90a6f247975aa60ae1c8296b2829e529a91254d5632b35c1677ca377f76091970f01b73c257caf577c777146595604156caa79172a68cbd73e598ed7a4ae879ce22504ece4e950b7f16ce95af374718b09d102e685e9b0e70941169f8695fddb7a7290958808926b9b4d43ed66c7510a59115a7b66146a94aa2c88e2c131b911a0f7aa4974404034fc8ea350be72c578d38357a69cfb2cdc1203292d8542dbb679b5a5fef9bba056b89611bba85f62df4505241ce292f18a7cde6a26bdf0d9c65e087de641c38751b29ae3271de98934dbcf629a04900bdd3d75e662903257952ae1738fe7812b8574e331c53b2c6f16e710fe391e28c1340e3126f8820e5254b60d3d07cb6700377e68da7c0a84f7c7e407034fcf9f842087645bdcba27ea373d9c0fe55c12b9c553560db7c205dd5d5b6aab73513edf7adff571afbfef806d47159e2dd5f39e8a8df93f47fe8d4f83a6a9c1e743524d59e5d1c45bda3a88ff6",
      "bff6f0b410dcb54619fd081dff06354b3e494949f2f8e3e902709df8f09771b8bf80851b0c325c400cb31c73291297a49969baa95b69d803cbec0f5454834bf126676bfae1f0640d59916c482e9e3a6aee6fbd893255f167102461143dd7bb80ec1f88106a963f050000",
    ],
    [
      "ETag",
      "yw7vjewUP0P8dUvsp7Gv3A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:15 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-84-1635192891311"
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
      "4010fd2fe3d136b1140c907010830221042a9c0c214b3bd442db5977a71224fc77668be1a2072fbb33ef23fbde9e609f9509746193a59f159ae35d8a3c774384b6cad9caa5a9b4081e20ab54942ffa7e6ec78b2c992d7413bfd3cd78d8681f7a3d51d8f8030b05dd136c33cc130bddf71394aa40b1a982aa9245c447edf6d17431781d440214943860ba9c4c9efa93019cbd9b69bdd6fb7f5956670f76b489708b06cb185d066d6887318f5c3dab0a9da36fa932315aa8c535911aaab43244be207ebbe9078f612be834da9d200c0211e6142bcea814edf24db20113ab3ca283b4835004a61ea5e8b63ebf046ed51ddcd4a8a3fdcd05bfb8f0c6351db7fa79ac7f64b4334392dca20bfd702df04cae144b5936157a102bf9ff61c6d7fd7c013b394aebdc010000",
    ],
    [
      "ETag",
      "Fp+QsJTidPTp4ezgbJH28w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:16 GMT",
      "Server",
      "ESF",
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
      "08000000000002ffedd34b7282300000d0bb64ad0e2048e9aea0a1041d8b43f974c384103ea218922062a777afd36bd47787f70d302154884c5e5ada81573061cd5a9085cf5e6c58d5a4be91b01c9c328679cfbc719b936c0a6e2aa2fd758adfbbd1e1461b96d5bd8eb0beb9a7363f48959e3f3ad9ac989721ebf4b96b76d0df247c7b1ff0b0ce53123aa2f74c9346e7b93a983a370561639df7da9781d538ec0bd75edb72dd56b93c9ada388efe5c77e912992ba197cd8547705e10ad38564a6228721f42e41d4f49400e542024d15eb9faa9cc2c79705b06a34d1bbc059d53e35decbb965c3c3dfd5f6006e88d359c8aac796c5f1a9635037ff5333931faf86f53cc29073fbfa37fab4319040000",
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
      "Mon, 25 Oct 2021 20:16:16 GMT",
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
      jobId: "grouparoo-job-85-1635192891311",
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
      "fd2bc8fbb8e6411e24448ad628a52b6a4232425a4dd3848cb9503704536c327555fefb2ea6e95a556a3f61fb9e73cfb90f9ec88ee731999088a70f15948f5fee4544ce08289ae26b7cfd375a97b3dd75de4b5db6fe3a5c1f76763a9d2282d72c49f745062d29aa92819c6c37edb41455414b215a98a8351eb64cab3f34edded836fba6893c0959b2e0f90ed9774a1572d2e99cb4dba9106906b4e0b2cdc4fee5bd73e8758a52dc0353b2f356b2832ab2f3b1e8b74c30aab8c8a7db0d1aa8249421ec29cfd0c27f661c9dbf4ddde674df4e117ce00c2863a2ca556d0b533091273cad4a9d954c9e88b6f9ea4036cec29907061359b5cfc39ceee1cc88a9a2a17a2cc0b8f4574bc3f52e57fe7216b82b2fdcccaf9ce5ac3d5f2db64b6f63dc5e39be63281a65a0b9c6d438d7370f2fa81f83543cd7ea41fd5c2b3f37c87d3f969a80d2129a6038ea5ad41c77ed2889462c19f78751d285281a47a321ed475d660f6010474091a745358be6226716edf5cd9119b2be6d8583911585637b340c07d482d8ec5b633b66e47846fe945cc105978590bce910b9f5ddc009037febcd6781a34b486895a98bc6585dc06b8f0a0b44d007351deb2817a854b7dbf502c79fcd03f7c66926bc8094b2c7cd03ce38a1990444d3129ba7a05c8a181b46bcd9d2b940b09ed8fa149464f2eb89d43daf5dbc6af90b3dc001d67695fe924de0bbde776de784b8a159a52187e6400ab47c87b5a1ebe36f44e2923659c88fade3ff24cd930f099490b3cfa789601df8f45f3b2d3e6271f551462abce3ee30598bb0129a1de2badc67b63db28696fe53152dd5bb9865f54e5dab73d419610fb97aaea8597c2cb411abe40b0883387e4f77ebf80fe8efcbbe78040000",
    ],
    [
      "ETag",
      "dKzbPrAkKn2gIcP+5Pvk9g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:16 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-85-1635192891311"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92614f82501486ffcbe92b6c924acae6074c2b979a29ae6673ee0a07c4808bf75e72e6fcef9d4b66addaea0b9c7378cee57d5fd8c3739c05e0c0328e36058add5984ea5e17639445a224dd729e49040350b188c8ada86debab8e7dbb75ddd7ec71b6990ddc07b7d52242fa2b4c19387b08634c0209ced31e329622adf93c29d26c517606a85dae87136fdc1b5e539ff240f7c369bfefb6fb5d3818a7c58029b628f97faccd0f06acf9728c210acc7cd45a72c1d7e8ab9eb629599a27684a5e081f259470f92012bcc899e0dca489d9a89b965dad5bcdf346d3aa5a168109f7998a7946ec7442fa4071c59231df924bb00910654986c3f2fa42e338288de8b237f4ec5aa9ef2b40d2c238c1c5df20e95d31fa0c1fd83182ef1c4b7991a91375d5bf737f3b8e32fd3caae37add1f845494d409f17a83eec4730723cdcd8fdedb3b857224380529516768556a8dfa855d798ff592eba8e93d8e12051ae033fa3b6e62054ec81289873712fdfd557b020000",
    ],
    [
      "ETag",
      "wr4w5hD6KwAAznXZqZMAWA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:17 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-86-1635192891311",
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
      "546b4fa34014fd2becec174dfae0d1026dd2b8ddca2a494b2ba51add6cda01863a0a0c32834dd7f4bfef05acda7557131298b9e7dc7bee8b27744fd310f5914fd70f05c9b75fef988f1a8808bc865b7d9345dddfa338da9c2737b67161c76d1c6e060340d092c57192c5a4c959910784f717f3d63a67458673c69ae0a869ea4d45d7ba4a4f357b8aa628c0e3248ec634bd07f6ad1019efb7dbfbd8ad3563eb98e08cf256c09297fbf6a3dace72764702c1db8721db1085b73f0e7a12b3000bcad2c1620e020a4ef22549308d41c22b33f4bf1dba6e519cb4d6007ea401c141c08a5494b2c045c0d288ae8bbcf28afa4fa892f9e603cdadb135f2a4d174e178472b9c94e4d5b184b9b43f34a415e414d1982c69b82a2dcb65762ffd70a713b080825bcc095f4957e7966b49d28a0b50b792be0ca41369e89c4a8774db91168e63cd3de9e8e4583a73a78b99f4fdfa0003ba43c2054d2bd51ef663522a7e2eacfdbe9d25010b50511b9786ac63c5947b7ee41b41646a5d3f9289ef9bbed1c59a2f07bd0ee9843ec1c013a5f78a855396eabaaa68580bf59ea1fb4618413135b5ab9a4a072e3ac0d3cd9e61e000ed1a689353414e29cf18a77575d1956b7bd6d27317ce68e859551a112e62715a8b2b9378ab53409200fa20af5d69a50c2295adb21dcf728723cfbeb4eae91893350eb6f307988f08c79c001ae7382182e4131642d1d06c3ab73d7bea0cc7c0a85a3edb2338eaff7c7a2578dbacaab2a8dec8b327d0a3e1645669d8832e715c54a8c7fa03a9b22a3765b5a9743d45ed2b5a5fe9b46459be41bb5de3ffce87ae3bbc064138cff1f62f1b24a9774afa3fa256f8ea548bdfab505019ed45d3c1a97370d2d1eed70e9e0682fdab23a38b85e55ea3faca2511c9491a7c3e7000ae0c9ffe46f63b0d58d86a0803fb21288c77c0cb20414eea31a749954acd862933b51eaac0b97867eb199d7d3f4b1fa5479290543c6754ef7455c4d254f0171018613a1ddb3903eb1f24b8164d53",
      "050000",
    ],
    [
      "ETag",
      "6wpf5zClfwHmZI7QIl/adw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:18 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-86-1635192891311"
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
      "10fd2fe3b58d940a020907308d929046aa7831842c655a0bed4edd9daa84f0df9d2d868b1ebceccebc8fec7b7b847da1b730824d91bf37680e5739f2c20d09daa6642b574dda227880ac7251c69a43e68ebdede9b87f9d2c8a9741e76b321e8bc2a66f5829181d212bb0dc5a18bd1e41ab0ac5a62a6a348b880fb5db67f173741f250254b47540bc9ccf27d3790427ef625aafebfdbf2cab93073bda2498a1419da2cb501bda61ca3357cfaaaa2ed1b7d498142db4e296c80d35b53244be20fea0ef07fdb0170cbb8361100681084b4a1517a445bb7c926cc0c4aa4ce853da412802d38e52346bcf0f817b6d073775db687f73c12f2ebc70378e5bfd3c363d30da474392dca20bdd3917b823578aa52c9b063d4895fcff43c1e7fdf40db1343465dc010000",
    ],
    [
      "ETag",
      "Nnt3tt0s75nN6/RQiV80xA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:18 GMT",
      "Server",
      "ESF",
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
      "00000002ffedd35b7282301400d0bde4db718c8825fd83a2955045c107f2c300de62883c4c68093add7b9d6ea39e3d9c3b4ab20ca48cdb9a43855e519f8cc9301bba8d61cdf30230f672eed15bbca90a7c726ccd56bd93faa22b536c2c8d4b2bec659d87bd320829d269c793f54c19cd99cb3cce945eed56d37062f23d3fccce7464e1af4349add1cba73b37d72e3bb9f2436abdaae92c5a8dfde3faa2be730d3c12fb1d656217647ab89830b1f2b268b94dae3a6ca846ab371a455756d89c683bd16c1b6a1df738390b8617b7ed4405020ea529991ff87d0a4eb4780f83d619d76096e5f0e9e9ff420304aa610264cc1edb359d9001faab1fb77d038fff16240204faf905c6a52e1119040000",
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
      "Mon, 25 Oct 2021 20:16:18 GMT",
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
      jobId: "grouparoo-job-87-1635192891311",
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
      "6f9b3014fd2bc8fbb826843c2152b446295da3256403d26a9a2664cc85ba259862932daaf2df77314dd7aa52fb09dbf79c7bce7df048ee799190298979f6504375f8742762724640d10c5f3ff7c6fdad0cacbfb7fede1cef27c1b7e4703f9fcd10c11b96a4bb32878e1475c5404eb74137ab445dd24a880e26ead8938e351e8c2ca76f3bd6c0b29027214f57bcb847f6ad52a59c9ae649bb9b0991e5404b2ebb4cec9edfcd7ddf2c2b71074c49f3b5a4892ad27c5ff44b2e18555c14b36d80066a0955043bca73b4f09f99c4e7af537739dd753304ef3903ca98a80bd5d8c2144c1429cfea4a6725d347a26dbe3890c05db98bd06022af774554d01d9c190955345287128c4b7fb33696dee5c65fcfc3e5c68b82c595bb9e77179bd576ed05c6cd95ebbb86a2710e9a6bcc8c737df3f082fa0948c50bad1e36cf8df25383966fc7d210505a421b8c26bd31b5ec9e13a7f184a5f66014a73d88633b9e8ce820ee316708c324068a3c2daa59b410058cacf13071ec88c689130d937112d97de8477d87a6133b75609424e47846fe545cc10597a590bced10b9f197a11b85fed65bcc43579790d23a5717adb1a680971e151688a0776a3a36512e50a969f7d20b5d7fbe0897d76e3be11564941d82079c714a730988a615364f41b51609368c78f3b57b81603db1efa7a024d35f8fa4e979e3e245cb9fe9210eb0b1abf49704a1bff4be6a3b27c435cd6b0dd9b70752a2e55bac0d5d1f7f231297b4cd427e6c5dff27699f7c48a182827d3c4d04ebc087ffda69f1118bab8f3252e11d7787c9468455d0ee10d7e53eb19d896d5b23a2c1957a1373acf1a96b4d8e2623eca0504f15b58b8f85b662b57c066110c7efe96e1dff01edd8eb0d78040000",
    ],
    [
      "ETag",
      "+062UsS1xhRv/6v7SKdykA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:18 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-87-1635192891311"
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
      "ff8d925b6f82401085ffcbf41513f1824ae283b6d6922af5824ddac6981506c4028bbb4b1b63fcef9da5d6366d93f60566866f96730e1ce039ce02b0611d47bb02c5fe224235d5c50c65912849b79c6712c100542c227257f3d73beb763c5cb7cdd47da8baf78f559c76bb44487f832903fb00618c4920c17e3a40c652a4359f27459aadcace00b5cff570eecd1c77487dca03ddbb8bd1a8d71f0de0689c1703a6d8aae4ffb1b63c1ab0e5eb19862830f3516bc905dfa2af1c6d53b2344fb02279217c9450c2e58348f0226782f30a4d2aed56c5b4ea4db3536b77ccba691298709fa99867c42ee6a40f14572c99f15772091601a22cc970585e5f681c07a5115d3aae67354a7d5f019216c609aefe0649ef86d167f8c04e117ce758ca8b4c9da9ebd15defb7e328d3cfa3ae7adee00721152575463c673c987bbdf14473cb93f7fe5ea19c084e414ad4199ad546bbd9b2aaefb15e721d35bdc756a240037c467fc74dacc00e5922f1f8067a1e3a1f7b020000",
    ],
    [
      "ETag",
      "q2cbq6KMGb81mNY0NVZ0eQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:19 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-88-1635192891311",
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
      "000002ff8554fd6f9b3010fd5798f74babe58b7c108854752c652d524a3a425a75d3941863a85bc02936dda22afffb0ed3a4cdbab512129cefbd7befec338fe88ee5111aa19025f7252dd61f6f79881a884a9cc06a2ff964f9d81ddbe969b466093efb1efd2eeca32340b08a2570b64a6953f0b220548ce6b35652f072850bce9b50a8699a4ddde80d74ab6b5a7a4fd78127681a4f587e07ec1b295762d46e6fb55b09e7494af18a8916e1d96ebdfdd06daf0a7e4b8914ed7dc936a888f6dba2c7292758329e1fcd6760a014b458d00cb3142c3c33a3f0f37ee916c3592b01f003231413c2cb5c56b6a004e179cc92b25055d1e811299b2f3ed0cc9938e3401b4fe75e70b0c459455e1e6a5868dba0a12da1a798a574c1a26595592c5677da577f7a0e1970708305154bedeaccf11d6d47d33e1c69c79aed9d68fb7cd7d3e69ee7cc02ede0f8503bf5a7f30bedcbf51e068c475448962bdb010e535a597eda59f7f57956042cc1469d5c0c3b06d6cd8e15c6e190c4666f10c61d1a8666381ce05ed821569ff6a39062e0c9aaba62e19ce75627368c18c703c8469645627d18c543d388299c53dcd343b31392ae4ed0a6817e154cd21326565cb07a7bd195ef06ce22f0e7ded80e1cd5468ccb549ed4e6aa265efa94d02480dee86b53651907a5eaac5c2f707c7b1cb8974e3d1e139a60b29eddc380c4381514d0b8c01995b438e7116c1aba98cedcc09d7af60418eacc2fb60881463f1e9f09c17aa57659aa37fa3a99da81d1570eb6904b9c960af3507f20bd3500c4a6f1ff32b6efdbd7208d8b02afffca413b86a2ff4341e15554dbdc29a24a6d1b75f7a2fe5e64a0cdcf0d3c0d0457ad5646dfe68e7f8dea259fc6b4a039797fb400ac12effe31b6d717b0708141464888619089a8444841eb8166996aa5665b43cb180e910217f255ceec74b72757d5a82ad28ce6f2a9a3fafaaa4dac52a5d881200973e8b9de2964ff00d96e83003e050000",
    ],
    [
      "ETag",
      "3g+9RaICAlGdyigaHZdxrA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:19 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-88-1635192891311"
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
      "8d504d4fc24010fd2fe3b54d5c8a06483850d30809215a251e0c214b3b2d85b6b3ec6ead48f8efce16c3450f5e7667de47f6bd3dc1bea85318c1a6c80f0deae34d8ef6d90d319aa6b4862f45b541f000adcc59b9fd9a848b693fd87fb6a255eacd2cb3e9a11d8f5961922d56124627c80a2c5303a3f713d4b242b6c98a9adab2c81e95db678bd7e8318a19a82875c062399f4fc2790467ef6a5aafd5fe5f96d5d9831d6d62cc50639da0cba034ed30b13357cfc84a95e81b6a7482063a7147e49a1a253591cf883f18f8e23eb813c3de60280221585852226d41356b972f9c0d2c5959c6d4723b0858a0bb918b66ddf9c170bfebe0a65e17ed6f4efce27a57aeefb8d5cf63e1d1a279d2c4c90dbad0b797020fe44a592e6b75831e2492ff7f5ad8cb7efe066965367cdc010000",
    ],
    [
      "ETag",
      "hzABNH43kxw1wppWsUfHqw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:20 GMT",
      "Server",
      "ESF",
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
      "000002ffedd3516e82300000d0bbf4db1845dbc1fe68873ab5412663e20fa150aa20b5a5188465779fd935e6bbc3fb066996716392f65a71095e419f5ace381b6f948d17e27c71692c6729ca6f819ac48cee8f5d844412682e5b6dc8c76110fda1f2fd5a7871e5b278b3b419bae713771e48c456983a3352872b79134bc299d79b12f2e18d40bf5b358e6f54288e79b0f8aaedc88f4ce7e93a816154aee7535c5e93b8a3e9faa4738b44735b9da81e42cb43e8fd85e666b98f0bb2f5882a1ae1b612b21d773fc3e99da9826146d15064bb0b3696ad795ef21a926aaae156e2f1d3d3ff054680dfd5b9e126393fb6cfa0e38cc05ffda4ed157ffcc73c6d78037e7e012e8d55c719040000",
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
      "Mon, 25 Oct 2021 20:16:20 GMT",
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
      jobId: "grouparoo-job-89-1635192891311",
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
      "000000000002ff85535d6f9b3014fd2bc87b6d0209490391a2354a69c394900d48ab6d9a90ed18ea1630c5a65b56e5bfef629aae55a5f609dbf79c7bcefde011ddf17287a688f0ecbe61f5fed3ad20e80431853378fdbbffb274966ef5e7877f175d8cafb079596cb3d90c10bc65495c5439eb49d1d494c9e936ea67b5682a5c0bd183443dc7ed0d4eedf1c01d3aeec01e0c8027599eae787907ec1ba52a3935cda3763f1322cb19aeb8ec53513cbf9b0f43b3aac52da34a9aaf254d5091e6fba29f7341b1e2a29c6d2330d0485627acc03c070bff993b72f63a759fe3a29f01f881538629154da95a5b90828a32e55953ebac68fa88b4cd170714792b6f111b54e44d5126252ed889b1c30a276a5f31e322dcac0d3fb8d884eb79ec6f82245a2cbdf5bcbfd8acb6eb2032ae975ee8190a939c69ae3133cef42d800be8ef9854bcd4ea71fbdc2a3f35c87f3b969600d29275c164629de28163b92425139a3af698a41623c4219331b68945dd111bed08c3c0d3a29a854b51ba136b482c9b26364dad643419ba09262327b1301bef1875529262743841bf6baed839979590bceb10ba0efdd84be2701b2ce6b1a74b487193abf3ce585bc04b8f0a0a04d03b351dda2817a0d4b6db0f622f9c2f62ffcaeb26bc6219a6fbe81e669ce25c3240e31a9aa758bd163b68180ae66bef1cc07a625f8f4189a63f1f51dbf3d6c58b963fd36318606b57e92f8ae2d00f2eb59d23e20ae78d863c74075481e51ba80d5c1f7e011296b4cb82be6dbdf03bea9e4296b29a95f4e3690258073efcd78e8b0f58587d90910aeeb03b54b622b466dd0e715dee13db75acf1c8461a5cab37b1d3b17bec5a9ba3cdc80a56aaa78abac587423bb1463e832008e30f74b70eff00f7dcfede78040000",
    ],
    [
      "ETag",
      "zyJH8H9pxZIkSF5Va/GmUg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:20 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-89-1635192891311"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92414f83401085ffcb78a589685b298907aaa88db4b6949e8c695618900a0cee2e6ad3f4bf3b8bb51a35d10bcc0cdf2cef3dd8c0635e25e0c27d9e3d3528d70719ea992942544da115df6aaa148205a845c6e49533acd3ebf34a87ce6a1c4ce9d57f0d66dee929132a7ec05280bb8134c72251e0de6ea01225f25a4c455356cbb6b340af6b339c47e16872c97d4989e9278b20f086810f5b6bbf98082d962dff8fb5bbad052bba0f314589558c464b2d6985b11e199b4a9475811d458d8c51410bb70f32494d2d245187271d67d0b1fbc73d7b70e40cec63db66b0a058e89c2a661773d6079ab428427a6197d06740b6251b4edbeb338ff3a43562cad124ea775b7d5f019696e6052eff0659ef83e0cff081ed22f8ce89929a4aefa98be0c6fbed38cef4f3a8732ff27f104a73527b241a8dfd79e48da786bbdb791fae35aaa9240e52a1c9d03eec3abd93fee17bac6764a2e6f7b85a3668412cf8efb8ca35b8a928146edf00fc134d5b7b020000",
    ],
    [
      "ETag",
      "H8BpfKDntR8jMLPoxExLQA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:21 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-90-1635192891311",
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
      "c5547f4fdb3010fd2a96270448fdb140e96825c40a6490ada45d9a00dd841a377183218983eda055a8df7d6787c02a18fb7352a4f87cefee3ddf9dfd88ef581ee33e9eb3e4bea462f9e196cf7103534512d8b5af6e6eaff2b3e1b8f323fa9517e3d23e4abf26070780603a4a92ac486953f2524454f683492b11bc2c88e0bc09899abd8f4dabbbbb67f576f67bd6ae65419ca4e962c8f23b88be51aa90fd76bbe66e259c2729250593ad8867cffbed879d7621f82d8d946caf53b68145b6df273d4c794414e3f941300101a5a4624633c25290f01219cf3fafa76e3192b512003fb0889228e265aeb42c4811f17cc1925298acb8ff888dcc3f1678620fed631f1d8f02d7df0a49a683c36d4424aa8d060ae14c0b96d2198b43ed99cd8a3bf4c51b9d830714dc104965882ecf6ccf466838bab4bdad10a0db68e87cb3d1211ab827683d89e3a2c075ed898fb60eb7d1a9370ac6e868ba8601f5315d90325527440183d2aae36ae9e8962a2a15809eeaedbcee325e692fe382297d52c7f56d6f70ec3b177655dc214d48b49cdc437917249514d044908c2a2ace794c21643c9a38be337207438830151bd70889fb3f1f5f02fc6541b54065fe9aabdb31fc35e082a4a5413c540bbc61ed6de0d5aaf1f72403cf1b4c81980841966f13bcc960f0c6aa44d68c16d66cb5b5b36675d6ac2e5e5dafe06b6018d38a197f0f6c6f8aab2d8f2ea8a07964e8de6980011bc73f6f5b3dfa8085e1071aa9c0968a45529344821ab7cf3273942abab76f75ac7d6cc042bdf6ed7ed22f441ebfe979e2284d7e2a04171e95306eda043669b4b01c6a022f480367544a92e834410e279194cc538acc50a0e71ea030442c47ba4928f4a7637b661a0577e888c4e051dd0e3245ee23ddff7abda98d4dadc8e8a8daf69f345c5765d1242723d78619fb0d26b2ef317b050000",
    ],
    [
      "ETag",
      "EXhjXnHLP4ZcxnpPuEBlJg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:21 GMT",
      "Server",
      "ESF",
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
      "2d8c21a84977042c22c52f7406370c608894affc63a777afd36bd47787f70dc238666d1b7455c64af00644a8103996ed1ad3779eee8cdd216b4a5f754648ce9615c710f15b5fe4bcbaecf3a564145150212ed51a4c3ea2b0a0d704c36a481465bff00ec37553a6d6a9f78f0e1a83c29d1cbfe7e7365145687db92c7736d31c471552554fef570aead5ddf144efa9e6dbbacbcd65b3958e63c528d6c7c1f4971778334cafc4bc26dcd876749eb523878afd20681a7c4b10eed8676d106b3199f76df780fb95f6490b7c8bbcf5439b5c2c7121bfbcfc5f6006d854a70d6b83f4b91d2d089981bffa41276af6fc4f59d8b006fcfc0278adfde019040000",
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
      "Mon, 25 Oct 2021 20:16:21 GMT",
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
      jobId: "grouparoo-job-91-1635192891311",
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
      "ff85536b6f9b3014fd2bc8fbda249027448ad62ca14bb6847484b4aaa6091973a16e09a6d8748aaafcf75d4cd3b59bd47e01ec7bce3de73e7822f73c8fc998443c7da8a03c7cba13113923a0688ab75fc09af598eb65879bef5770192dbe2dfaf374324104af5992ee8b0c5a5254250339de6ddb6929aa829642b43051cbb15ad6b037b09caeed583dcb429e842c59f1fc1ed9b74a1572dce99cb4dba9106906b4e0b2cdc4fee5bef3d8ed14a5b803a664e7ad64075564e77dd1cf99605471914f765b3450492843d8539ea185bfcc383a7f9bbacde9be9d22f89133a08c892a57b52d4cc1449ef0b42a7556327e22dae6ab0fb27557ee2c3098c8aa7d1ee6740f67464c150dd5a100e3c2dfac8da577b1f1d7d360b9f1c2ed6ce1aea7edd966b55b7b5be37ae1faaea1689481e61a13e35c9f3c3ca07e0c52f15cab07f575adfcdca0e5ff63a909282da109862373482ddb74a2241ab1c4ee0da2c48428b2a3d180f62293397de8c71150e46951cda2b9c89d41b7e70c623b4cd8d00efbdd6e1c3a438786664407d46203879a23723c23bf4bae60ce6521246f3a44aefd65e08681bff366d3c0d52524b4cad4bc315617f0daa3c20211f44e4dc73aca052ad5ed5e7a81eb4f67c1f2ca6d26bc8294b2c3f601679cd04c02a26989cd5350ae458c0d23de74edce11ac2776790a4a32fef944ea9ed72e5eb5fc851ee0006bbb4abfc936f097de576de784b8a259a5218fcd0729d0f22dd686ae8fbf10894bda64213f76ae7f439a2b1f122821671f4f13c13af0e1bf765a7cc4e2eaa38c5478c6dd61b2166125343bc475b9cf6cc7c6479f6870a9fe8d75cd917dea5a9da3ce087bc8d57345cde263a18d58255f4018c4f17bba5bc73f8829e70678040000",
    ],
    [
      "ETag",
      "Be1C3cENlyYKVePbHJH4Dg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:22 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-91-1635192891311"
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
      "02ff8d925b6f82401085ffcbf41513a9972a890f68d592a2a58a4f8d312b0c8a0596eea5c618ff7b67a9b54ddba47d8199e19be59c0347784e8b181c58a79b178de270b541f5688a194a9d2949b7921712c102546c4364d8f246033db7f7f7c95007fbf5380cf4d6edf58890d1167306ce119214b35882f3748482e5486b11cf745eacaace027528cd701ecebce998fa9cc7a69f2e7cdfedfb43385997c59829b6aaf87fac2d4f16ecf87a86090a2c22345a4ac1771829cfd8942c2f33ac49ae4584122ab87ab0115c974c705ea349ad6bd7ec76a36577af3b5dbb61db04663c622ae505b18b39e903c515cb667c4f2ea14d80a84a329c54d7571aa77165c494de346c372b7d5f019296a419aefe0649ef96d167f8c0ce117ce758ce75a12ed4c87f707f3b8e32fd3cead60d873f08a928a90b127a93e13c742781e19667effd834219084e414a3419daf566a775d3aebfc73ae0266a7a8fa384460b22467fc75daac0495826f1f406df566fd37b020000",
    ],
    [
      "ETag",
      "T5IFCuS1wKfEuPwbGTPuhA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:22 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-92-1635192891311",
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
      "a3",
      "40",
      "10",
      "fd",
      "2b642f261afb05a5059a18af56cee3aed24aa98db95cda852e752bb0c82e9ac6f4bfdfb058b5e79d2624303befcd9bafe509ddd174897a28a0abfb82e49b2f6b16a01a2202afe0f46cc8c79effd852133c133fd69dcdf171b4be3a3901042d591c27594cea9c157948786f3a69ac7256643867ac0e81ea965657bbed8e6a69a6a5b65515789cc4d190a677c0be1522e3bd6673a7dd5831b68a09ce286f842c79396f3e68cd2c676b120adedc976c820a6f7e2c7a1ab3100bcad293e904122838c9e724c13486145e99cbe0eb7ee806c5496305e0071a121c86ac484599168408591ad15591cba8a8f784649a6f3ed0c41eda035f198ca6ae7fb8c049495e1c29982b3ba3a62ca0a688c6644e978bd2339f6777ca376f74091ec8e01673c217caecbbedd98a321ccd6ceff0c501b186ce4f5b3955faeeb9b21fca7195a9ebda135f393c3d522ebcd174ac9cddec61a08625e182a6b2021f073129b37f6eb2f37eb425010b10ae9c73a3d5c5aad9b2822830c2c86c7782a84582c00c8c0e6e07add0d289be0c08069e28a34b164e596ab43415081db5bdd423b513e1c8b4b49611e1d0585a86a19ba166eadd561b6d6be831a7829c539e314eab4ea399e7f8f6dcf7a6eea0efdbb28c0817b138af922b8b789ba7802201f4415ddbd24b19289563735cdff6fa03dfb9b6ab4d1992150e37937bd89508c79c001ae7382182e4976c094d43e3d1c4f19d91db1f02438e7fbc4370d4fbf5f44af03799ecb2906f34f13dc7bd9009ec10d7382e24e4a1fa400738cb0ed0765bfb7f98bee7f56f401ae739defce58372ba7a49ff8784c44bab4a7327a9a2526d67697b96be6775d1f6f7169e1a825b5729a3aba9eddda0eac82311c9491a7ebe5a00968e4f7f1ebb9b0c58b8cb",
      "20c305d8b0c8212f45c29c540b4d13594ac5b64ccdd07524c1b978e733bbda6e72658c322249482a9e2baa6eb26c62e92af80b089cb087ae1ce2f60f4f41620c49050000",
    ],
    [
      "ETag",
      "BLsPRTw01maWtJj5y++fjQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:22 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-92-1635192891311"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d50c14ec24010fd97f1da46b78011120e4288606aa3054e86906d196aa1dda9bb5b9110fe9dd9621a132f5e7667de7b93796f4eb0cfd5060690e4d9678dfa7893a17d73458ca62eace1af2265103c402b33567622953f8f17bd627e9b24df2fddb99c46bdc370c80a937e60296170826d8ec5c6c0e0fd044a96c863b2a45a5916d963e5fa59b4983c4d62064ada38205a86e1e3289cc0d96b87d6eb6affaf91d5d9831d25316e51a34ad179a834ed30b53317cfc8b22ad03754eb140d34e286c834d595d4443e237e3ff0c57da727fac1435f7484606141a9b43929d62ee7ec0d2c5959c47430ee162cd04dc941b7cdfbd5c02e83ab82c6da6f2e6839f187132dd775dcea67d9e868d1bc6a62e7069de9bb6b8031b95096c35a5da307a9e4fb4f737bedcf17ca69128fdc010000",
    ],
    [
      "ETag",
      "3NniJCT5lS/bbxM4SaHN5w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:23 GMT",
      "Server",
      "ESF",
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
      "0002ffedd34b7282300000d0bb64ad8c225ad25d45c34710698052374c484388f18382fc3abd7b9d5ea3be3bbc6f4028655595d617c9cee015f444850a5536a5be449c13d3bbc4f96eb237cccce92252fadce233b7f5b276a8571497ef5394e8483f66dd16d767e17c494ddeddf564094f41e8435f143211be466082ddf2be981779f891992f41179d0f6e18e76f38e3b6d86b87cfdd423f1836ae6c2ce72121261f36691b6948d0132d8af5d668af1d4e8c66eae5919dc429eaa195c89e5a479b7adb268e54fdcefbabdeb07a8554341bcbcd584d31e195331ee83e083ab62b54e5e9e9ff0223c0ba52dc58958ac7f6d91cc211f8ab9fd67dc91eff978cdcd80dfcfc02d250c4de19040000",
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
      "Mon, 25 Oct 2021 20:16:23 GMT",
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
      jobId: "grouparoo-job-93-1635192891311",
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
      "30",
      "14",
      "fd2b91f738dab4699b3695aa519530bab5e94853d898a6c8766f82218d43ec3021d4ffbe1b873210123cc5f63de79e733ff2486e45be2563c2447a5741f9f0e94632724440d3145fe937ffe7677695158bd4cf1cfffbf96a78a5a693092244cd52745764d052b22a39a8f166dd4e4b5915b494b285895a5eafd5757b83aee78cbc6eafdb459e822c5988fc16d9d75a176a6cdb07ed762a659a012d846a73b97b7eb7ef1dbb28e50d70adecd79236aa28fb7dd12f99e4540b994f366b3450292863d85191a185ffcc2d3b7e9dba2de8ae9d22f85e70a09ccb2ad7b52d4cc1659e88b42a4d56327e24c6e68b0359fb0b7f16595c66d52e8f73ba83236b4b358df54301d669b85a5af3e074152ea7d17c15c4ebd999bf9cb667abc56619acadcb333ff42d4d5906866b4dac63730bf082fa5b505ae4463daa9f6be5a706cddf8ea526a0b48226180f3b2eed8e3a1e4bd89027a3de80251d606cc48603da631deef5a1bf65409167440d8be632e77da79f0cfa6eecb9ee20ee8393c46c449dd8e5c01d87bb5ec27a647f44fe9642c389508554a2e910b90ce7911f47e126984d23df9490d02ad3278db1ba80971e351688a0776adad7512151a96ef73c88fc703a8be6177e33e105a4943facef70c609cd14209a96d83c0de5526eb16124982efd13049b89fd38041519ff7e2475cf6b172f5afe4c8f7080b55d6dbe641d85f3e0abb173405cd0ac3290fbe6400ab47c8db5a1ebfd1f44e2923659c8f9c60f7f91e62984044ac8f9c7d344b0097cf8af1d161fb1b8fa28a334de7177b8aa457809cd0e0953ee13dbc38de87bc4804bfd26e6bacea16b758e3a23ec20d74f15358b8f853662957a066110c71f986eedff01f090da6578040000",
    ],
    [
      "ETag",
      "aJEX+bZlpLgEl2EKQO7ZsA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:23 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-93-1635192891311"
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
      "65",
      "7a8b89d49f2a8917d8a225416a11af1a635618140b2cdd5d6aadf1dd3b4bad6dda26ed0dcc0cdf2ce71c38c0635ac460c12a5d3f5528f6176b54f7ba0850569992742b7921110c40c5d6447aafce6814bafea8b32a156e3cdf6f8f5f7683011132da60cec03a409262164bb01e0e50b01c692de2599517cbba3340ed4b3d9c8581eb8fa9cf79ac7b7fee79f6d073e0689c1763a6d8b2e6ffb1b6381ab0e5ab0013145844a8b594826f3152aeb629595e66d890bc12114aa8e1fac15af0aa6482f3064d1afd56c3ecb63a66ffb2d7375ba64960c623a6525e103b9f913e505cb12ce03b72095d02445d92e1a4be3ed3388d6b23ba74fdb0dbaef57d05485a9266b8fc1b24bd1b469fe1033b45f09d6339af0a75a646de9dfddb7194e9e7513776e8fc20a4a2a4ce48e84e9c59684fa69a5b9cbc0ff70ae554700a52a2ced06cb67b9dab6ef33dd66baea3a6f7584a546840c4e8efb84d155809cb241edf0043d60f497b020000",
    ],
    [
      "ETag",
      "LzEFFTINF5bptehLNN4Gxw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:24 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-94-1635192891311",
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
      "540d4fa34010fd2b642f269af48b96166862bcdae21d67a54aa9c65c2eed020bae028bece2a531fdef372cb6daf34e1312989df7e6cdcccef08c1e6816a221f269fc589262fde59ef9a88188c0319c9edf4d7e68f1a9d7c6eb4e36f0caf5f9c519bf3a3e0604ad581ca779429a9c954540f870316fc5052b735c30d684404d536baa835e5f35bb86a9f65415789c24d194660fc0be1322e7c3767babdd8a198b138273ca5b014b77e7eda76e3b2fd83d09046fef4bb64185b73f163d4958800565d9f1620e09949c144b92629a400aafccd0ffba1fba4571da8a01fc44038283809599a8d2821001cb221a97858c8a86cf48a6f9e603cdada935f694f16ce178872b9c56e4d59182b9b2351aca0a6a8a684296345c559ee5327f50cedcd9057820833bcc095f2937df2dd75294e9ecc6720f770e8835b5cf2de544193913653f94ed280bc7b1e69e727872a47c73678b4be5f4760f033584840b9ac90a3cec27a4cafea5c9f6fbabad08588070ed5cea9d01568d8ee947be1e4446afef471de2fb86aff771cfef04a646b4d0271878a28a2e59386399dee9aa40e8abbd508bd47e8423c3ec76f408077a68eaba66045d431b747a68d340bf0b2ac884f29c715a771addb8b6672d3d77e18c479e25cb88709988499d5c55c4db3c051409a00feada545eca40a9ba36dbf12c7734f6ec6bab9e94298971b09e3fc2ac4438e104d0b8c02911a4b86021340d5dcee6b667cf9cd11418f2fa2fb7088e863f9f5f09de3a975d16f28de69e6b3bdf64025bc4354e4a0979aa3fd001cef303b4d934fe1f66e4baa35b90c64581d77ff9a09c8156d1ff2121f1d2aad3dc4aaaa852db5add3d4bdbb30668f36b034f03c1d6d5cae86a61b9b7a83e7249440a92059f8f1680a5e3d39fc77693010bbb0c325c800d831cf04a2428483dd03495a5d46cd3d034dd40125c8877be818cbcdbe02a224949265e2aaa375936b172957c070227cca1232f71f3071a5611a749050000",
    ],
    [
      "ETag",
      "KhDJ4gBT/ay0n6TuyKMFsQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:24 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-94-1635192891311"
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
      "ff8d504d6bc24010fd2fd36b025db5a50a1e6a512b8868d44b8bc81a27319a64d2dd8912c4ffded95842a1975e7667de07fbde5ee194e47be8c12e89bf4a34d5438cbc704380b64cd9ca55506e113c40d6b128c7f3f321e92cf3c89c3f46d5e2c2ab6044977e5f14363c60a6a1778528c1746fa1f779855c6728369d5199b388b82adc3e99ad86e3612040467b07ccd6d3e9eb603a849bd798b6dbe2f42fcbe6e6c19176014668300fd165280c1d31e489ab677556a4e85b2a4d88166a714dc486ca421b225f10bfdbf1d573fb49755b2f5dd5564a8429859a13ca45bb5e4a3660629d06749176d01681a947291ad5e7b9865d0737b5ea68bfb956c3a93f9c6ab88ee3363f8f0d2a463b3724c92dbad08ff7026fe44ab1946553a207a196ff7f4ff8bedfbe0196c5a069dc010000",
    ],
    [
      "ETag",
      "GPvhi4SnfrvZFyQwtTRFow==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:24 GMT",
      "Server",
      "ESF",
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
      "0000d0bb64ad0e06d0d05d83e1a3821fe4239b0c60b4800a4440a0d3bbd7e935eabbc3fb065192b0c783d645ceeee003f4115426c9645522ac5d2e83dbab5c424223c4da7e5b3da51c3ad91ac9d41157388430cd2486d51d829dc2a67149cbda0ec4bd67d373e5e2e53e99d9537c57e7e6f8b3b9b6a7ea740885cd22d549601524923299c7e3a567b8cdd769e53953d41fd72d718892b4d0f015a485663990cd55ce6fd62db78a7aeb7375931995a65b1ea9a90a49d7864d437a9e6ef58b0813f9a657b3ba08fce5131dd87c1890191f756371c663a33785ce9ebcbdfd5f60045857a69c3d68fada2eca8a32027ff569dd97ecf51fb388330e7e7e0172639d6419040000",
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
      "Mon, 25 Oct 2021 20:16:25 GMT",
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
      jobId: "grouparoo-job-95-1635192891311",
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
      "fbda3c48202191a2354be9ca94900d48bb8726649c0b754b30c5a65d57e5bfef629aae55a5f613b6ef39f79cfbe0815cf3624ba624e1d94d0dd5fd872b919023028a66f83afab3fc1b96b9088aab2ffd9f4532fcee7fb2ee663344f08625e9aecca123455d3190d34dd8cd2a5197b412a283893a13bb638e86b63919381373689ac89390a74b5e5c23fb52a9524e7bbd8376371322cb81965c7699d83dbdf76e07bdb21257c094ecbd94eca18aecbd2dfa31178c2a2e8ad9264403b5842a861de5395af8cfdc26c72f537739dd753304df720694315117aab185299828529ed595ce4aa60f44db7c7620a1bb741791c1445eef8ab8a03b3832b654d158dd97609c06eb95e1f9a7eb60358fbcb51f878b337735ef2ed6cbcdca0f8d8b3337700d45931c34d79819c7fae6e305f5b720152fb47ad43c37ca8f0df25e8fa521a0b48436188ffb236a3afd49922663963a433b49fb90244e32b6e930e9b38905d636018a3c2daa59b4100598600d9835886da73f882d0b689c8c0710a7803cc77126d875b23f2277155770c26529246f3b442e022f72e328d8f88b79e4ea12525ae7eaa435d614f0dca3c20211f4464dfb26ca052a35edf6fcc80de68bc83b77db092f21a3ec3ebcc119a7349780685a61f314542bb1c586117fbe724f10ac27f6f5109464faeb81343d6f5c3c6bf9133dc201367695fe92300a3cffb3b673409cd3bcd690dbf6404ab47c89b5a1ebfd6f44e292b659c8b78d1bfc20ed5300295450b0f7a789601d78f75f3b2c3e6271f551462abce3ee30d988b00ada1de2badc47f6c4b1877d9b6870a55ec52c7374e85a93a3c9083b28d46345ede263a1ad582d9f4018c4f1fbba",
      "5bfb7f9f0dbcfb78040000",
    ],
    [
      "ETag",
      "6xLzSploRnjJ0Znb3XNB4w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:25 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-95-1635192891311"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92dd6e82401085df657a8b51ea4f95c40b6c6d2541ab88de34c6ac30201658babbb435c677ef2cb5b6699bb43730337cb39c73e0008f491e82059b247e2a51ec2f6254335d7828cb5449ba153c970806a062319185485e47f5fa8be32de3ddd02d96b3d16461f7fb44c8608b1903eb0051826928c17a3840ce32a4b580a76596afabce00b52ff470ee7bcee48efa8c87ba9f2c5cd71eb843381ae7c59029b6aef87facad8e06ecf8c6c30805e6016a2d85e03b0c94a36d4a961529d6242f4580122ab87a100b5e164c705ea349add7ae999d66dbec5d767b66d334094c79c054c273621773d2078a2b967afc855c42870051956438aaaecf344ec2ca882e9d89df6955fabe02242d4a525cff0d92de2da3cff0819d22f8ceb18c97b93a53b7eebdfddb7194e9e75137b63ffc414845499d11df190fe7be3d9e6a6e75f23ed82b9453c12948893a43b3d1eab6af3a8df758afb98e9ade632951a20101a3bf639428b022964a3cbe01390ced447b020000",
    ],
    [
      "ETag",
      "prixH//wIRVgjELpVQHNUA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:26 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-96-1635192891311",
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
      "54ef4fdb3010fd572cef0b48fdb114566827c432c8205b9b9624055508b5267182218983ed2015d4ff7d67a7a5ebd8d8e74995daf3bd77efddf9dc17fcc08a18f7f12d4b1f2b2a161feef92d6e60aa480aa7e4ecfbf347959e0f63fbbc2aef633b7fde4bd3a3234030cd92242f33da94bc121195fd49d04a05af4a22386f42a166afdbb4ba7b9fac5ee7b067ed5916f024cd92012b1e807da75429fbedf65abb95729e6694944cb6229ebf9eb79f3aed52f07b1a29d9de966c838a6cbf2f7a9cf18828c68ba34900062a49c58ce684656061c38c6fbf6c976e3192b752003fb1889228e255a1b42d2811f1226169254c55dc7fc1c6e62f3f70e00c9c93109d8c265eb83327b926cf771191681d34d01c7a4a5846672c9eebcc6c563ea06ffe6808197070472495737475eef80e4283d195e3efcca5028f5068e0fe70d031b2bd53b45dc7f5d0c4f39c20443bc7bbe8cc1f4dc6e8eb740b030dc4342155a64e890211a58dc7f54f57dfaaa25201683572f7ed45e3a5ce322e98d2cdba5ee8f8f649e85e3af57c073425d12278840927249314d044909c2a2a863ca640198f023774479e3d008619da788d90b87ffdb221848b926a83ca7ce3d01d4273f6708c97cbc6df61b6efdb53284d84208bdf7260b7bbafe91bf625c92a03317813d5369eea04b6b0565b479dad687f2beae2e5cd123e0d0cbb582be38b89e34f717de4d3840a5a4446ee9d111bb049fcf349adf71bb0b0e120035ba298542c925a2412d4a443969b566a76efb0bbdfe9600316ea6deee040ff0d14f11f332b8dcad4a74270e153090ba5435093c60b2b60262cbe304f62cbe5e3ea28a752925497f738ca898aee589122c9d2026a0b8a122e50521591a6d52fc01c119156392d14d2172afbe875275a28a8ca920b45e34d1500d48f27087dd73bdbfdbc0abf4e43278027a9d0b5d53fecdce8a64c2bf5cdffbf6ddcd497a3fd9c8e3c0736fd271cccd965e6050000",
    ],
    [
      "ETag",
      "aGJz0tgHMdAHupjdAmz3gg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:26 GMT",
      "Server",
      "ESF",
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
      "08000000000002ffedd35b7282301400d0bde45b9880a548ff78f90007a3024a7f980057858c051244a1d3bdd7e936ead9c3f94634cf4188b4ab197ca10f3450d59073d96f66d6fc5c866c79e0fb719e1ecc965197b80d399e25be71d9325ce0d8c7232e69c7aa688619f4a74b5199f6365d168fc40b42fd58260e0b5d438dfd9bbd2fa453d6c22029b34fac91c21cb26e073ef1ad36e08b28df6a978dade8912536cec25cc73d859c50d1ad49e679384eeb77aa98a1ab5a5bee577d145e3dd25c47ed2d4e000367a7b1eaee5a90d4417f1f8d791bafd67c6aef8863d0dad5a5fbb01237a16af2cbcbff8526081e4dc941a4e573fb54338c09faab9f764303cfff16500e1cfdfc02f41fd3dc19040000",
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
      "Mon, 25 Oct 2021 20:16:26 GMT",
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
      jobId: "grouparoo-job-97-1635192891311",
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
      "0000000002ff85535d539b4014fd2bccf6d5841092103293a969c44a4d480b446b3b1d6659165c0516d945ab4efe7b2f8bb13acee813bb7bcfb9e7dc0f1ed1352b13344331cb6e1a5adf7fbae2313a4054e20c5e1fbefc758fbffd5c7027b8381d3ed4e727d9afe5dd7c0e08d6b2042eaa9cf6046f6a42c56c1bf4b39a3715ae39ef41a29e6df58c893936ece1d4364cc3009ea079ba62e535b02fa5acc44cd7f7dafd8cf32ca7b862a24f78f1fcaedf0ef5aae6579448a1bf96d44145e8ef8b7ece39c192f172be0dc04023681dd102b31c2cfc6726f1e1ebd47d868b7e06e05b4628268437a56c6d410ac2cb94654dadb2a2d92352365f1c50e0ac9c65a8119e37451995b8a0075a82258ee47d45b5637fb3d65cef78e3af17a1bbf1a26079e2ac17fde566b55d7b81767ee2f88e26719c53c5d5e6daa1ba797001fd840ac94aa51eb6cfadf25383dcb7636909202d68178cacc1041bd3811da7b145d2a9398ed3018de3696c8db1190f883da2a324a618784a54b170c9cbc964988ca71312a5d6308d46c6c88eec7864461631b0611863cb4c4cb43b40773593f488898a0bd675089dfb6ee844a1bff5968bd05125a4b8c9e55167ac2de0a547090502e89d9a766d9471506adbed7aa1e32f96a17be674135ed10c93fbe006669ce25c5040e31a9a2769bde609340c798bb573046035b1effba040b3df8fa8ed79ebe245cb9fe9210cb0b52bd51705a1ef7a5f959d3de20ce78d82dc76075481e54ba80d5ceffe001296b4cb827e6c1dff02754f3e4d694d4bf2f13401ac021ffe6bfbc5072cac3ec8080977d81d225a1152d36e87982af7896d4fad81612205aee59b9831b6f75d6b73b41969414bf95451b7f8506827d68867100461fc9eead6ee1f2405cd6078040000",
    ],
    [
      "ETag",
      "zBxIFJXAoESYK2zrWHgZCw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:27 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-97-1635192891311"
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
      "5b4f83401085ffcbf84a13d1da0b491fa8ad4ad22ba57dd034cd0a03a2c0e0ee62d334fdefcea256a326fa0233c337cb3907f6f094161138709f26cf15cadd49827a6e0a1f559569c5b7920a8560016a913049fd7cea5d236e9bd3793970c7fe6ab1ba4d7a3d2654f880b900670f718a59a4c0b9db432172e4b590b22a2f36756781de9566b8087c6f72cd7d4e91e927cbd1c8ed8f8670b08e8b91d06253f3ff585b1f2c78a47b1f6394588468b494921e31d49eb1a9445e66d85054c91015d470fd2091549542123578d2e8b61b76ebfcc2ee9e75baf6b96d33985128744a05b3cb05eb034d5a643e6dd925b4189075c986e3fafac2e334aa8d98d29b04ad66adef2bc0d2e234c3cddf20eb7d10fc193eb0f708be7322a7aad047ea6a34757f3b8e33fd3c6ae006c31f84d29cd41109bcf17011b8e399e1d6efdefb3b8d6a268983546832b44f9b9d8b76ebf42dd64b3251f37b1c2d2bb42014fc77dca41a9c58640a0faf943dfd8f7b020000",
    ],
    [
      "ETag",
      "oBmOIGeew4OQpDAMRVSVZg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:27 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-98-1635192891311",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffd5546d6fda3010fe2b96f7a5957859e81b30551d2dd9162d049a8456a8aac04d9ce0368953dbe9842afefbce0eb4a3dbbacf9390e07ccf73cf73e733cff8811531eee33b963e5654ac3edcf33bdcc05491144edd5e9ab2e1b2ec1eb953cf8b97b3e1557ef0e3f414104cb324c9cb8c3625af4444657f1ab452c1ab9208ce9b50a8d9eb36ade38323abd7e9f6ac03cb029ea459e2b2e201d84ba54ad96fb7b7daad94f334a3a464b215f1fce5bcfdd4699782dfd348c9f6ae641b5464fb7dd1b38c4744315e9c4e033050492ae634272c030bafccf8eef36ee91623792b05f0138b2889225e154adb8212112f129656c254c5fd676c6cfef20307b66b5f84e8623cf5c2bd05c93579b18f8844dba08116d053c2323a67f14267e6f3f2017df1c723c880832591542ed0f537dbb71172c7d7b6bfb7900a3c4221d7f96ea33334f08668b78ee321b8293b08d1ded93efaea8fa713743edbc14003314d4895a9215120a2b4f1b8fee9e85b55542a006d46eefc7ed178adb38c0ba674b38e17dafee02274aeec7abe2e4d49b40a1e61c209c92405341124a78a8a118f295026e3c0099db1377081618636d92224eedf3cbf12c25549b54165be71e88ca0b9c16882d7ebc6df6103df1fcca0341182acdee4c0eef1a1a6bfb2af48561988c19ba8b6f15427b085b5da36eaec44873bd1315edfaee1d3c0b08bb532be9cdafe0cd7473e4da8a04564e4de19b1019bc43f9fd476bf010b1b0e32b0258a49c522a94522414d3a64b969a566f7ba27bd93436cc042bdcd753f5a5dfd3750c47fcc6c342a539f0ac1854f252c940e414d1a2fac8099b0f8d23c891d978f9ba39c4a49525ddee328272a5ab2224592a505d41614255ca0a42a224dab5f80392222ad725a28a42f54f6d1cb4eb450509525178ac6af5500503f9e20f41defebfea74d783e0bed009ea4423756bfdbb9d54d9956ea9bff7fdbb8ad2f47fb198e3d1b36fd2762e783d6e6050000",
    ],
    [
      "ETag",
      "L9ggiDhp85LUNNdhYDVm3w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:28 GMT",
      "Server",
      "ESF",
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
      "edd34b7282300000d0bb642d8c828a7457904f60504a4bb16c9c100304904f881aecf4ee757a8dfaeef0be01c2988ce391773569c10b9890a2cb58f6fb8d6117c56533cfe2c8b3ad06fbd9fbb54eb475711ef4b2cd6973601e779b031443ad788e3dac2baa991a366dd3486e5129a6b7c2c37128757ee2bef279c40d4122255c3a17b55ec62ca705a5da57102e39ccd847bd8d8734dd2f76a81febd8cae119c1641007ee043b29ecfc667f7222ac7a28c8cdb2146e053fadfbf55e38737f9fb9521e2f6c315af4b45db54115a58a64989e64383045d0baae5aecba2cdc064c7e7afabfc00c10d15346c6237d6c5757ba3e037ff58f7ceac9e3bf4110230cfcfc02b63566b319040000",
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
      "Mon, 25 Oct 2021 20:16:28 GMT",
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
      jobId: "grouparoo-job-99-1635192891311",
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
      "536b4fa34014fd2b64f6e3da52fa8426cddaadb892b4d4a5b4c66c3664182e384a1964068d31fdef7b19acab31d14fcccc3de79e731f3c933b5e24644a629eddd7503d7dbb15313921a06886af8bfe9de72ee697c5eec6fa3ecc77e73f77d7f36c3643046f5892eecb1c3a52d4150339dd6eba5925ea925642743051c7713ad67830b29cbeed5803cb429e843c5df2e20ed9374a95726a9a47ed6e264496032db9ec32b17f7d371ffa6659895b604a9aef254d5491e6e7a23f72c1a8e2a2986d3768a0965045b0a73c470bff99497cfa3e7597d37d3743f0036740191375a11a5b98828922e5595de9ac64fa4cb4cd3707b27197ee223498c8eb7d1115740f274642158dd45309c679b05e199e7fbe0e56f3d05bfbd16671e1aee6ddc57ab95df91be3eac20d5c43d13807cd3566c6a9bef97841fd04a4e285560f9be746f9a541dec7b134049496d006a3496f4c2dbbe7c4693c61a93d18c5690fe2d88e27233a887bcc19c2308981224f8b6a162db06688537006bd689c8c9c68e85834a2c0ec68ecd80973fa3d87b231399c90c78a2b38e3b21492b71d22578117ba51186cfdc53c74750929ad7375d61a6b0a78eb51618108faa4a64313e502959a767b7ee806f345e8eddc76c24bc8287bdadce38c539a4b4034adb0790aaa9548b061c49fafdc3304eb895d1e83924cff3c93a6e78d8b372d7fa58738c0c6aed25fb20903cfffa5ed1c113b9ad71af2d01e4889966fb036747df88b485cd2360bf9bd75836bd23e0590420505fb7a9a08d6812fffb5e3e22316571f65a4c23bee0e938d08aba0dd21aecb7d613bb63d1a0c890657ea436cdc9f1cbbd6e46832c21e0af55251bbf858682b56cb57100671fcbeeed6e11f605e717e78040000",
    ],
    [
      "ETag",
      "C2kIECAPnVh1+4lVFBVYAg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:28 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-99-1635192891311"
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
      "5f",
      "53825010c5bfcbf60a33927f02667cd034b3d414f1a9719c2b2c880197eebd948ee3776f2f9935d54cbdc0eef2dbcb39070ef094e421b8b04ee2e712c5fe224635d38587b24c95a45bc1738960002a1613e93d3bcc1ef706f6cec2fb9dede35dd37366ed361132d860c6c03d4094601a4a701f0f90b30c692de06999e5abaa3340ed0b3d9cfbde7032a03ee3a1ee278bd1a8d31df5e1689c1743a6d8aae2ffb1b63c1ab0e56b0f23149807a8b514826f3150436d53b2ac48d194bc14014aa8e0ea412c785930c1b94913d3714cab556f5acea5ed5875cb2230e5015309cf895dcc491f28ae58eaf15772092d02445592e1a8babed038092b23ba1c4efc56a3d2f71520695192e2ea6f90f46e187d860fec14c1778e65bcccd599ba193d747e3b8e32fd3caad7f1fb3f08a928a933e20fc7fdb9df194f35b73c79efee15caa9e014a4449da1556bd8cdab56ed3dd66baea3a6f7b84a946840c0e8efb84d14b8114b251edf00d7f9eb317b020000",
    ],
    [
      "ETag",
      "Rq9a8MDG8x1eKx8TeJ5R9Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:29 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-100-1635192891311",
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
      "0000000002ffc5546b4fdb3014fd2b962704687d85976825c40a842d5a494a9a5055136adcc44d0d495c6c07a942fdefbb7608d0c1c6c74995eaeb7bee3de73e9c277ccf8a04f7f08ca50f2515ab2f777c861b982a92c26d77315e5e9dd97128165f6d97bbca13f6f8fae404104c4749922f33da94bc143195bd70d44a052f974470de84444dabd3695a47fb875677efb86bed5b16044a9acd07acb887f085524bd96bb76bf256ca799a51b264b215f3fce5befdb8d75e0a7e476325db9b9c6da091ed4f584f331e13c57871128e404129a998d29cb00c34bc8626b36f9bb95b8ce4ad14c08f2ca6248e795928ad0b52c4bc98b3b414262bee3d61a3f3cd018fec817d1ea0732f74839d88e43a38da4544a2da68a0088a9ab38c4e591269cf74babc4797be77051e50b02092ca088d7fd8be8dd0c01bdbfe9b4c03e7a78d4e51dfbd409b891c1785ae6b8f02b473ba8bbefb5e384467930d0c5490d0392933754114b028ad3ca98e8e1eaca25201e8b9e9cefb59e3b5f6322e98d2d53a6e60fbfdf3c0b9b1ab060f684ae2d5e8015a3c2799a4802682e4545171c5130a21436fe4048ee7f6071061ba36ac1112f77e3dbd0604ab25d50295f9c79703af1f1c1d180535e48664a5c13c5607bc65b50e0fb6f07addf87ba2beeff727404e8420ab3f7c5090a6f890c3e08d5509ad392dacd96a6b6fc33ad8b08ef0fa760dbf06867dad98f17568fb135c5df9744e052d6243f78f2118b0717cfeeeea3700607805c02315d852b1586a965850e30e586e6aa9a2bbc7ddfd4e071bb050ef7d96f6d122f9d0f3cc519afc54082e7c2a61e7b4096cd268610534053e260d9c532949aad3840594222999651499cd402f434051845881f49450144c86f6f4791de0399d910425bcd451a6d13d546d416d6d57e6b61666e454e3fbbf526eab2669ae0bcfb561e57e03ff4ce74694050000",
    ],
    [
      "ETag",
      "9hWpMBEcUrh+ENoNtOrEWQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:29 GMT",
      "Server",
      "ESF",
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
      "d0bb64ad0c9f22d21d01bf80581101374c8418201d082142b5d3bbd7e935eabbc3fb0628cf71df67a2a5b801efe08e5453ca2597cde19210c5d23ab10d493886b1ef78728332d75adb10e57e11b9b33a2815a3d9cd46bf0d96aeb552f26e231e89a3c95d49f4a5a8e7e8615b2465235402d85e62df0b0a1e2769aee3101f3b791db51d7ce353bfb7fdc16b0ee9676496e8980c455cdee87c512459dacace42f0eba13e75d18592fd94efa14b0dd256db55f9b17ed05475d48cf29bb3629eba11d731a906a64f63d7b0fab497d9f9763aef4e66335099492f2fff179800fcc52a8efbac7a6ed774d39c80bffa99b833fcfc0f31e298839f5faf4865d219040000",
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
      "Mon, 25 Oct 2021 20:16:29 GMT",
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
      jobId: "grouparoo-job-101-1635192891311",
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
      "85535d6f9b3014fd2bc87b6d1208498148d11a25748b94908d9056d33421e35ca81bc0049b565595ffbe8b69ba5695d6276cdf73ee39f7836772e0e59e4c48c2b36303f5d3977b91900b028a66f8ba3caee67291578efd785443e53807fb50cca65344f096256951e5d093a2a919c8c96edbcf6ad154b416a287897a9669f5ac4b7b6c7943d7b36ccb42a2843c5df1f280f43ba52a39190ccee2fd4c882c075a71d967a2787d1f3c0c07552dee81293978af39401939f844f56b2e18555c94d3dd161d3412ea180aca73f4f08fba4faedee7ee735af433043f70069431d194aaf585299828539e35b5ce4a26cf44fb7c73205b7fe5cf238389bc29cab8a4055c187baa68ac9e2a30aec3cdda5806d79b703d8b969b20decebffbeb597fbe59edd6c1d6b8fdee87bea1689283e61a53e34adf02bca0fe1ea4e2a5568fdae756f9a543cb8f836909282da10bc68e79492dd7f492347158eadae324352149dcc419533b31993782d13e018a3c2daa59b41465b23747cc3621a689ebc6a3217562773c1ec50e66b22dc706763922a70bf25873050b2e2b2179d721721b2e233f8ec25d309f45be2e21a54dae169db1b680b71e151688a0ffd4746aa35ca052dbee6510f9e16c1e2d6ffc6ec22bc8287bda1e71c629cd25209ad6d83c05f55aecb1612498adfd0582f5c47e9c83924c7e3f93b6e7ad8b372d7fa54738c0d6aed25fb28dc265f04ddb39236e68de68c8437720155abec3dad0f5e90f22714bbb2ce4e7ce0f7f91ee2984146a28d9e7d344b00e7cfeb79d371fc1b8fba82315de7179986c55580ddd12715def0bdb733dd7748906d7ea43ccb3bc73dbda1c6d4628a0542f25759b8f9576628d7c056110e71fe8769dfe0279a290207b040000",
    ],
    [
      "ETag",
      "IqLCsDlp73wqt2t77k3kmA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:29 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-101-1635192891311"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d925b6f82401085ffcbf41513f14295c407b5564df086d8a4698c5961402cb07477b131c6ffde596a6dd336695f6066f86639e7c0099ee32c001bb671f452a038de44a816ba705116899274cb7926110c40c52222a3c10a77b5c3b0663d7afd91b3ec3f2c16b345a74384f4779832b04f10c6980412eca713642c455af37952a4d9a6ec0c50c75c0f979e3b9e0ea94f79a0fbe9ca71ba3d670067e3ba1830c53625ff8fb5f5d9803ddfba18a2c0cc47ad25177c8fbe1a6b9b92a5798215c90be1a384122e1f44821739139c57685231ab66c5b4ea4db35d6bb5cdba691299709fa9986704af96241014572c71f92bd9048b005196e4382caf071ac741e94497e3a967354a815f01d216c6096efe0649f08ed177f8c02e197ce758ca8b4c5da97b67d6fded380af5f3a8bbae37f8414845515d116f3c192cbdee64aeb9f5c57befa850ce05a72425ea10cd6aa3d5bcb5aaefb9f6b9ce9ade632b51a0013ea3df63142bb04396483cbf01be2b53727c020000",
    ],
    [
      "ETag",
      "gEUeh2vG26YTCHLSCVQQOQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:30 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-102-1635192891311",
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
      "4fdb3010fe2b96270488be90522a5a09b102d916ad24254da8aa0935267583218983ed54aa50fffbce0e8155b0f17152a5fa7ccfddf3dc8bf38c1f59bec0037cc792a7928af597077e871b982a92c0ed6a1adaeaf0e0da1f1e9c3c15ebeb7c793265c9e92920988e92242b52da94bc1431958370d24a042f0b22386f42a2a675d8695abda363abdf39e95b4796058192a6cb11cb1f21fc5ea9420edaed9abc95709ea494144cb6629ebddeb7579d7621f8038d956c6f73b68146b63f613d4b794c14e3f969380105a5a4624e33c252d0f016bab8fbba9dbbc548d64a00bc62312571cccb5c695d9022e6f99225a53059f1e0191b9d7f1cf0c41ed91701baf04237d88b48a683a37d4424aa8d068aa0a8254be99c2d22ed99cf8b47f4cdf7aec0030aee89a43242d31fb66f2334f2a6b6bf1701741fb95e8046ce4f1b9da1a17b89b613392e0a5dd79e0468ef6c1f7df7bd708cce675b18a8604197a44cd52551c0a2b4f2457574f46015950a402f4d77decf1a6fb49771c194aed67103db1f5e04ce8d5d3578441312af274fd0e225492505341124a38a8a2bbea01032f6264ee078ee700411a66be31a21f1e0d7f35b40b02ea816a8ccbfe6ea750d7f0db821696910abea8077ace31dbcd934fe9e64e8fbc319101321c8fa63820f190cde5895c89ad1c29aadb63a5b5677cbeae1cded067e0d0cbb5a31e3ebd0f667b8baf2e9920a9ac786ee1f033060e3f8fccdd5fb0f607801c02315d852b1586a965850e30e58666aa9a2fbfdc3bed5c1062cd47b5fa7ab3f14f9e243cf0b4769f25321b8f0a9847dd326b049a385e5d014f890347046a524894e13e6508aa4e42ea5c86c057a1d028a22c472a4a784a26036b6e76652f090cec9023caad745a6cb03a417a03eef6a63572b323aaab9fd270db7555b34c9a5e7dab064bf01f3a4185682050000",
    ],
    [
      "ETag",
      "vWUEt0+QRA+8qpyQnf8Wig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:30 GMT",
      "Server",
      "ESF",
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
      "1f8b08000000000002ffedd34b7282300000d0bb64ad4e41c1d21d698182507490826c3210420224cacf02767af73abd467d7778df20c598f43d1a2e3539831730a7b2b6c2ab5df30c4dca9e5e9368b27dc1b465174ea529d5675f8fd897dcb6a66e7bd75a52a8409b6d7bcdb0abd275e506aa35bd2b9f96b1875171881391b353d9f0fe68974be4f430544f6de9e40915911b581fe38cf694176db81f46834307efaaba1de0db6c8c71a6986b1d07b7da0bdd7e6b6a1967456c1ce30d9cafc996f82912143be3798e2463637a050fd0541da2cb60b1d3927762946e613edc74415df782529ec94c5e3d3cfc5f6001c8d4941de95179dfbe56346d01feeaa3616ec8fd3f2469473af0f30b4e12bb1c19040000",
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
      "Mon, 25 Oct 2021 20:16:31 GMT",
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
      jobId: "grouparoo-job-103-1635192891311",
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
      "fd2bc87b6d02249040a4688d52baa2256403d26a9d26641c43dd02a6d8a4aaaafcf75d4c93b5aab43e61fb9e73cfb91fbca00756edd00ca52c7f6c69f3fce59ea7e80c51897378bd2f27d8bddd5f6e6f8b9bef62ff30c1f231cae77340b08e25705917742078db102a66db689837bcad71c3f900120d4c633c302763db74478e6b8e4d13888216d98a550f40bf93b216335d3f8a0f73cef382e29a8921e1e5e95ddf8ff4bae1f79448a1bfd7d44146e89fa87e2d38c192f16abe8dc0412b6893d012b3023cfca3eed2f3f7b9870c97c31cc07b46282684b795ec7c410ac2ab8ce56da3b2a2d90b523edf1c50e4adbc65ac115eb4659554b8a467da0e4b9cc8e79a6a97e166adf9c1e5265c2f627f1324d1f2ca5b2f86cbcd6abb0e22ede6ca0b3d4de2b4a08aabcdb573750be002fa3b2a24ab947adc3d77caaf1df23f0ea62380b4a07d30991a136c3a869b66e99464ced84e3383a6a9934e6d3c4e0de25ad4daa514034f892a16ae7835b56c7be4d859625b569a0006272931dcc4761d6c19043bb669a1c3197a6a98a4174cd45cb0be43e826f4632f89c36db05cc49e2a21c36d212f7a635d016f3d4a281040ffa9e9d0451907a5aedd7e107be16219fbd75e3fe115cd31798e1e61c6192e0405346ea07992366bbe8386a160b1f62e00ac26f6e3181468f6fb05753def5cbc69f9891ec3003bbb527d5114877ef04dd93922ae71d12ac8be3fa01a2cdf416de0faf00790b0a57d16f473eb85bf50ff14d28c36b4229f4f13c02af0f9df76dc7c00c3ee838e907087e521a253210ded9788a97a5fd9ae6b5a231b2970233fc46c153b6d7c979196b492af25f59b0f95f662ad38812008f30f54bb0e7f0171fab1a77b040000",
    ],
    [
      "ETag",
      "jm6a9ZvFUZlWKsvk6atqSg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:31 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-103-1635192891311"
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
      "dd4ec2401085df65bc2d0915a8d0840b5050c28f504a62620859da69596cbb75778b41c2bb3b5b118d9ae84d3b33fd667bce690ff0c4b3105c58f3f8b940b9bf8851cf4ce1a12a12ade8968b4c2158809ac5447a0fc3c27e1d4eb7ad1adb790b15709ff767ed36112ad860cac03d40c4310915b88f07c8588ab41688a448b355d959a0f7b919ce7d6f30b9a53e15a1e9278bd1a8d31df5e0689d1743a6d9aae4ffb1b63c5ab0156b0f2394980568b4e4526c31d0036353b1344fb0a24421035450c2e583588a226752880a4d2a76b556b19d5ac36e5d365b76cdb6894c44c0341719c18b3909042d344b3cf14236c121409625398ecaeb8ec63c2c9d987230f19d7a29f02b40da229ee0ea6f90046f187d870fec94c1778ea5a2c8f499ea8fee3bbf1d47a17e1e75d3f17b3f08a529aa33e20fc6bdb9df194f0db73c79efee35aaa91494a44213a25dad371b574ef53dd76b61b2a6f7b85a166841c0e8f7b8e31adc88250a8f6f012d14e37c020000",
    ],
    [
      "ETag",
      "RXKu1zKPj93avRUsciTiFQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:32 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-104-1635192891311",
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
      "00000002ff85540d6f9b3010fd2bc853a556ca171002895475ac651b2b251d21ada2694a0c31a95bc0149b4e5195ffbec394b659b7554282f3bd77ef9e7de611ddd17c8d2628a29bfb8a94db0fb72c421d4404dec0ea3634bf1957fe225e54f8dc533da1df72db3e3e0604ad591c67454aba9c55654cf8643eeb6d4a5615b864ac0b85baea60d85547baa18e356baceaaa0a444ed2c4a3f91dd06f8428f8a4df6fc57b1bc63629c105e5bd9865cfebfd07ad5f94ec96c482f7f735fb20c3fbefa89ea42cc682b2fc783e830e2a4eca25c9304da18717ea3afab85fbb4771d6db00f881c604c731ab7251f70525629627745395b22a9a3c22d9e7ab0f34733ce734544ea7733f3c5ce1ac26af8e14cc9536e8282b3095d0942ce97a556796cbe24ef91c4c2f20031ddc604ef84ab9feea048ea278d36b27387c4e402d7f1a2a9e7bee28278aed9f29fbe55c5f99fbbe330b95c39323e54b309d5f2a9f167b18f0b1265cd05cba08719492dac1d34ebb6f0fb8266001e24d72690e4658b506e32889cc38b174234a06248aacc834b01e0de2f1900cd711c1c0137575c9c239cbe30863950c2dd32089a5191a3655d5d4754db786baae1aaa665ac3c8d234b4eba05f2515e48cf28271daec36ba0edcd05986c1dc3fb54347da4870958ab3a6b9dac4eb3e059804d07f7cedea2c65a0541f9deb874e609f86ee95d34c8b473638deceee615e129c7202685ce28c08525eb0356c1aba9ccedcd09dfab6070c3902972d82a3c98fc71742b82de42e0bf946b33070fd2fb281167185d34a421e9a0f74c04a9c1fa0ddaef3ef3a7610d80bd0c66589b77fe4c0cf6858d3ffa221f1326afa6c355554abb591b6170df7a211dafddcc1d34170f71a65f47dee040bd42c05242125c9e3f7670bc032f1fe3fa4bdcf00861b0d3a5c400ca31cf35a252e4933d234935e1af678ac19030d497029dee4469ad19e5d5da3ae4832928b274bcd7d96bb58a72afe0c82244ca22f8f71f71b1aee29b451050000",
    ],
    [
      "ETag",
      "yT7J5VNYcYuaKL1Lt3jsAA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:32 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-104-1635192891311"
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
      "6b",
      "c2",
      "40",
      "10",
      "fd2fd36b02aed1a2420f5ac4da0669d30a8522b2c63146934cba3ba94dc5ffded958a4d04b2fbb33ef837d8f3dc23e2dd63080559abc5768eaab04f9c90d11da2a632b57498545f0005927a20c0ff57d3819d6fbe46bdb3e7cceecc36b0f939b1b51d8788bb986c1113629666b0b83b723143a47b1e99caa8245c475e9f6e9ec653c194702e4b476c06c1e86c35138869377312d97e5fe5f96c5c9831dad22dca0c1224697a134b4c398a7ae9ed57999a16fa932315a68c40d9118aa4a6d887c417cd5eaf8ea3ae8aa7ebbd7578152a2cc28d69c5221e2f9b3840326d6594407a90781084c334ad34d737e08dc6d4ab8a9dd64fbcd752e9cfac30517aee3b8c5cf63a39ad13e1a92e8165dead6b9c12db9562c6dd954e841ace503ee523eefa76f1c9be073dd010000",
    ],
    [
      "ETag",
      "LwyJLGAykgzh2wxNsKX8eg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:33 GMT",
      "Server",
      "ESF",
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
      "00000002ffedd34b7282300000d0bb64ad0c1a0bd21de133fc5a5b0614d83001c35f408298b4d3bbd7e935eabbc3fb0638cf09a5e93cb4a407af80e3ad22e4823bee9159569eee98b6ee2ba768e7e0ae093d7a67d4d2cf05d7fd6add73dac0f7406da48c746a035de9364b01cb597585935b1a9ab5df7351547db49558e09a28b9c5ad2b1f86a137684ae95de6bc3ab1622d635b7c9b1d4b396c7a589b3ca686b531d8c7e8405cd07059ccb2bddee44f7431da8842ef2ba9ed31c367ad92b0532497fcbe71591e056a52f6881d0d94d9e15ae6b3e6591d8bc7e361e8a7dd322968119e9efe2fb002848df544685a3fb6c317455981bffae9cc47f2f88f089ec8047e7e01d1cb927c19040000",
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
      "Mon, 25 Oct 2021 20:16:33 GMT",
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
      jobId: "grouparoo-job-105-1635192891311",
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
      "2bc8fbd8264012128814ad514a5bb4847440da3d3421630c750b9862d3a9abf2df77314dd7aad2fa09dbf79c7bce7df084ee5895a2394a587edfd2e6f1d32d4fd031a212e7f0bafe928f76fef98f3fb797f7c58a1c1dcdca6f5ebe580082752c81cbbaa003c1db865031df85c3bce16d8d1bce079068601ad6c09c8e2dd319d98e39364d200a5a646b56dd01fd46ca5acc75fd203ecc39cf0b8a6b268684972feffac348af1b7e4b8914fa5b4d1d6484fe81eae782132c19af16bb101cb48236312d312bc0c33f6a9a9cbccd3d64b81ce6007e60846242785bc9ce17a420bcca58de362a2b9a3f21e5f3d50185eeda5d451ae1455b5671854b7aaca558e2583ed6543b0bb61bcdf3cfb6c16619795b3f0e5717ee66395c6dd7bb8d1f6ad7176ee06a122705555c6da19da89b0f17d04fa990ac52ea51f7dc293f77c87b3f988e00d282f6c178664cb1691b4e92253392d9632bc90c9a247632b3f038318833a19334a118784a54b170c52b274ba64e6218b139c2d37862a7666c1b248b67137b928eb0858de914ed8fd1ef86497aca44cd05eb3b84ae032f72e328d8f9ab65e4aa1232dc16f2b437d615f0daa3840201f49f9af65d947150eadaedf9911b2c579177e5f6135ed31c93c7f01e669ce1425040e3069a2769b3e129340cf9cb8d7b0a6035b1cb4350a0f9cf27d4f5bc73f1aae52ff40806d8d995ea8bc228f0fc7365e780b8c245ab200ffd01d560f9066a03d7fb5f80842dedb3a0af3b37f88efaa78066b4a115f9789a0056818fffb6c3e60318761f7484843b2c0f119d0a6968bf444cd5fbcc769cf1c452ffaac48d7c17b3c6f6a16d5d8e2e232d69259f4bea371f2aedc55af1028220ccdf57eddaff0520c1dd6f7b040000",
    ],
    [
      "ETag",
      "LKg2UNGZzjPqlCc++7mXIg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:33 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-105-1635192891311"
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
      "92dd4ec2401085df65bc2d09951fa1091745119b14c452e285216469a750dc76ebee1645c2bb3b5b118d9ae84d3b33fd667bce69f7f098e63138b04c574f25caddd90af59d29025425d78a6e85c8158205a8d98a48affb3a18aefd195f17bbfb976812a7de68ebf67a44a8688d1903670f498a3c56e03cec216719d25a247899e58baab340ef0a339c8681371e529f89d8f4e399efbb7d7f0007ebb41833cd1615ff8fb5f9c1828d580698a0c43c42a3a590628391f68c4dc5b282634d895246a8a082ab072b29ca8249216a34a9d9f556cd6e375a76f7bcd3b51bb64d241711d3a9c8099e4d492068a1190fc433d9843601b22ac971525db7344ee3ca8929bd71d86e5602bf02a42d49392efe0649f09ad177f8c08e197ce75826ca5c9fa86bffd6fded380af5f3a82b371cfc2094a6a84e48e88d06d3d01d4d0c373f7aefef34aa891494a44213a25d6f765a17edfa7bae97c2644def71b42cd18288d1ef71936a7012c6151ede0028714ca17c020000",
    ],
    [
      "ETag",
      "I9zEGhLUlhpyWxcPdiIMvA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:34 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-106-1635192891311",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85540d4fdb3010fd2b91272490fa958f366925c43ac8205a49214d416c9a5a27758a218983edb075a8ff7d1787163ab621454acef7debd7bf6394fe89ee60b3440115d3e9484af3edcb1083510917809abd389d1fe951756c7e7fe6af4d53ed3fd9fa797878780a0154be0ac484953b092c7440ca693d692b3b2c09cb126146aea9d5e53ef995dbd6f387dddd475200a9226239adf03fd56ca420cdaed8d786bc9d83225b8a0a215b36cbbde7e34da0567772496a2bdabd90619d17e47f52865319694e587d30974500ac26724c334851e5ea88be8e36eed16c5596b09e0471a131cc7accc65d5179488599ed065c95555347842aacf571f68e28edce3503b1e4ffd707f8eb38a3c3fd0b0d03641439b83a984a6644617f32a339b15f7dae7607c0e19e8e0160b22e6daf5991bb89a361a5fbbc1fe3601b5fc71a88dbc2fae76a40dfd136db79ce76b53df7727a1b67f74a09d06e3e985f6e96607033e1644489a2b17218e52523978de69efed0157042c41bc4eceec4e0feb4ea71f25911d278ed98d920e892227b2bbd88c3a71df22d622221878b2aaae583867791c61ac13cbb1bb24718cae816d5db74dd3301dcb34f5ae6ed88e15398681d60df48353494ea82898a0f56ea3ebc00bdd59184cfde361e82a1b092e53795237579978dda7049300fa8faf7595a50c94aaa3f3fcd00d86c7a177e5d6d332224b1caf260f302f094e050134e6382392f073b6804d4317e389177a637f3802861a818b0d42a0c1b7a71742b82ad42e4bf5469330f0fc53d5c0067185d352411eeb0fb4c738cef7d07addf8779d61100c6f401b738e577fe4c04fcfaae87fd1507815d57d6e347554a96d226327b276a21e5a7f5fc3d34070f76a65743975831b542f0524219ce4f1fbb305609578ff1fb2b9cfea1755e90809318c722c2a9598937aa469a6bcd4ec7edfeaf64ca4c05cbec9f5546e7b8fab8a2423b97cb654df67b58b55aa145b102461127d758cebdf108a692c51050000",
    ],
    [
      "ETag",
      "US2/znp40NrNyLZ7H1NxGQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:34 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-106-1635192891311"
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
      "6b",
      "c23014fd2f778f6bc15815157c50279b50dcd6a90c86486caf5db5cdad49ba21e27ff7a60e19ec652fc9bde7839c434eb0cf54027dd864e9a1427dbc4bd1beba214253e5d6f0559232081ea095292b9f5bf7ef87d9c378598489ccbb8acc7c391c0e06ac30f1271612fa27d866982706fa1f2750b240b6c9822a6559648fa5dba7b3f9e47112315050e280d9220c87a3700267ef665aafcbfdbf2cabb3073bda44b8458d2a4697a1d4b4c3d84e5d3d238b3247df50a56334508b6b22d554955213f98cf8a2d1f14527688b5eb3db138110accc29963623c5e2c51b87034b56e6117d733d0858a0eb919b6eebf38be1765dc24dcd3adb6fae75e3c41f2eb8712dc7ad7e1e1b1d2d9a174d1cdda04bddb83618936b65b9add5157a104bfe80a7cc5ef7f3050d8101b2dd010000",
    ],
    [
      "ETag",
      "O4+XqNDCVmLdal8nosTVAA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:34 GMT",
      "Server",
      "ESF",
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
      "edd35d6e82300000e0bbf4594cc1e0606f168703916160fcbd90160a412c54408b98dd7d66d798df1dbe07c0794e87211bbb86b6e01ddcb1a22ff3e59e6bc8aceace6b6d6766f2c77839c0a4c2f610c8548d2da86a252991d77d5ab9288f5f665df14a3edf18cb2d7f6b1a3e73f8e19446ca3c1aebdd3a48b7712cdac0aee09ba4b8fb329b509adba84fed512dfcd5f13c205c6b8e654b3744433807c49d1276e217d765a4b7c45d538c64cfb699e93944446121fa04371b43f1e5d05b0906afdf295f9b47144dbb2081646348ba5c40426e9b3069b06ac4126b5a545c972f2fff1758003af1baa743563fb7af545d5f80bffad978e7f4f91f51dcd31efcfc02db1000ae19040000",
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
      "Mon, 25 Oct 2021 20:16:35 GMT",
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
      jobId: "grouparoo-job-107-1635192891311",
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
      "02ff85536b6f9b3014fd2bc8fbda24d0900791a215a574cd94901548a3699a903117ea96608a4da6aaca7fdfc5345dab4aeb276cdf73ee39f7c13379e0654a6624e1f96303f5d3977b919033028ae6f8ba699c46b8d163fe3dbd638e5becbc9dd9dccce788e02d4bd27d55404f8aa6662067dbb09fd7a2a9682d440f13f52c73d2b3c6c391e59c4f1d6b6859489450642b5e3e20fd4ea94ace068393783f17222f80565cf699d8bfbe0f0ee783aa16f7c0941cbcd71ca08c1c7ca2fab5108c2a2ecaf93644078d843a863de5057af8474d938bf7b9fb9ceefb39820f9c01654c34a56a7d610a26ca8ce74dadb392d933d13edf1c48e8adbc4564305134fb322ee91ece8c942a1aaba70a8cab60b33696fed52658bbd172e3c7e1e2da5bbbfdc566b55dfba1b1bbf602cf50342940738db971a16f3e5e503f05a978a9d5a3f6b9557ee9d0f2e3605a024a4be882f1c41c536b6a3a49964c58361d8e92cc8424992693111d2626736cb0d30428f2b4a866d15294b63d027b6a9dc72ca3d3d89e983476c049e311b581658969996c4c8e67e44fcd155c725909c9bb0e915db08cbc380ab6fec28d3c5d42469b425d76c6da02de7a54582082fe53d3b18d72814a6dbb977ee405ee225ade7add84579053f6143ee28c335a484034adb1790aeab548b161c477d7de2582f5c47e9c8292cc7e3d93b6e7ad8b372d7fa54738c0d6aed25f1246c1d2ffa6ed9c10b7b46834e4d01d488596efb036747dfc8d48dcd22e0bb9d97ac14fd23d0590410d25fb7c9a08d681cfffb6d3e62318771f75a4c23b2e0f93ad0aaba15b22aeeb7d613bce68e88c8906d7ea436c649aa7b6b539da8cb08752bd94d46d3e56da8935f21584419cbfafdb75fc0b2f47fcde7b040000",
    ],
    [
      "ETag",
      "Ou9uoATqgJdhc9AlWEW0uQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:35 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-107-1635192891311"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d92dd6e82401085df657a0b89544525f142ab5613a5fe60d2b431668501b1c0d2dda5ad35be7b67a9b54ddba4bd8199e19be59c03077888b3001cd8c4d16381627f11a19ae9628eb24894a45bce338960002a161199dfbdbe0cb68b708be9adbbed45cfc5d0edcdda6d22a44f4306ce01c218934082737f808ca5486b3e4f8a345b979d016a9febe1c29b8fdc6bea531ee8de5d8ec79deeb80f47e3bc1830c5d625ff8fb5d5d1801ddfcc314481998f5a4b2ef80e7d35d236254bf3044dc90be1a384122e1f44821739139c9b3431ad4ac3b4ec6add6a5d365b56d5b2884cb8cf54cc3382970b12088a2b96ccf933d9049b005196e4382caf4f348e83d2892e47ae67d74a815f01d216c609aeff0649f096d177f8c04e197ce758ca8b4c9da9c1f8a6f3db7114eae751bd8ed7ff414845519d116f34e92fbcce64aab9d5c97b77af504e05a72425ea10ad4aad596fd895f75cafb8ce9adee32851a0013ea3df63182b704296483cbe016e6f944b7c020000",
    ],
    [
      "ETag",
      "pZzxFhSfhemXNhDgwuHNDQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:36 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-108-1635192891311",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffd553614fdb3010fd2b96f705a4d29002857642ac946c8b284949525085506b12373524716a3b4815ea7fdfd969d7756ce3f3a44acdf9bd77efeeec7bc32fac4870173fb1745151b1fcf4cc9f700353455238bdce4f443fcefbc3c3c565a79a977daf9a5bb7e7e7c0605a25495e66f440f24ac4547647613315bc2a89e0fc00121dd887670776fbe8c4eeb4ce3af6916d8350d26c3660c50bc8e74a95b26b591bf366ca799a515232d98c79fef3dc7a6d59a5e0cf3456d2daf5b4c0465a1fb85e643c268af1e27c14420595a4624273c232a8612b4d9ebeece66e3292375320bfb2989238e655a1745d9022e6c58ca595305971f70d9b3a7ff9c0a13370fa11eafb232fda9b925c8ba7fb8848b4091a680a4dcd5846272c996a6432295fd0d7c0bf01042a981349e514dd7f770207a1817fef047bd384280a793c3f4203f7da4117a8e75da1dd54ae87469ee78411dabbd847df027f344497e31d0ef490d019a932754514f8285d7b527fbafa6a15950a48ebb1bbef6f1baf34cab8604af7eb7a9113f4fa917be7d4231ed094c4cb7001439e914c5260134172aaa8b8e10905c9d00fddc8f5bdde0014666ec30d43e2eec3db56102d4baa0b54e61f5ff52207af568dbf337a41d01b4356220459fe8641a5ed632ddfaaef4856198ae19ba8aee0b506b08db5db266aed44c73b511baf1e57f06b60788ab533be1d39c118d747019d51418bd8d8fd63ba866c808f576af3bc810c0f1c7ca482582a164bed120b6ae088e5a6975adde9b4edd3536cc842bdc35ac71aa345f24764ed5199fc54082e022ae131e910dca4a98515301496dc9a8dd8a972b13ecaa99424d5e93d8e72a2e2392b5224595a406e41d18c0b34ab8a58cbea05304744a4554e0b85f48dca2ed2efa189c2aa2cb95034d92600ac5e9b300a5cefdbfee77578398e9c109651a107bb7bd67ad4fd982eea5bff2f3b78acafc4ec87efe9fdf8013be2ad9fdd050000",
    ],
    [
      "ETag",
      "Km5rCcmCP0qB9uhpCNuh/Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:36 GMT",
      "Server",
      "ESF",
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
      "08000000000002ffedd3516e82300000d0bbf45b8d5544d89f42856ea23807157f9a5a3ac006ac05096876f7995d63be3bbc07609c8bbaa6cd458a0abc819e4dec111f7d286bb9cab226c07016f065bb1faf2db83e16539d24c7cdd063d604c5e84b7aa88a9ddcdeddf6d755c7737da8f238eff019b78421194d9c5ecbe020c52537a33b4b5916170b44664655da7c4b0cb324e90d25c40f22e9c334aca288baa1ea93537caaae51ed1df97b07cb4cfb9c52dc842161f27b7ca6f3c4f9f4db9d5b6e1ae8aad359c300fae1d0b5b3797065b8560e37d3ed901be55d218fdc0b135b0b89db7af4f2f27f8101109d2ab4a869f1dc3e9dd9f600fcd5a74dafc4f3ff52302d34f8f905bffa9bda19040000",
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
      "Mon, 25 Oct 2021 20:16:36 GMT",
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
      jobId: "grouparoo-job-109-1635192891311",
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
      "a3",
      "40",
      "14",
      "fd",
      "2b64f6a3b685be284d9ab5a9a8cd16ba4ba98dd96cc830bde02830c80c1a63fadff732585763b27e6266ee39f79cfbe085dcf3624fa624e6e9430dd5f3b73b119353028aa6f82a7fdc7897d578723d3ed9edcc932417ab307f9acd10c11b96a4799941478aba6220a7db4d37ad445dd24a880e26ea58a6d3b1c68391e5f4278e35b02c244ac892152fee917eab5429a7bdde51bc9b0a9166404b2ebb4ce46fefbdc77eafacc41d30257b1f357b28237b5fa87ecf04a38a8b62b6dda0835a4215414e79861efe51f7f1d9c7dc5d4ef36e8ae047ce803226ea4235be30051345c2d3bad259c9f485689fef0e64e3aedc45683091d5791115348753634f158dd47309c645b0f68ca57fb10ebc79b85cfbd16671e57af3ee62bdda7afec6d85db9816b281a67a0b9c6cc38d3371f2fa8bf07a978a1d5c3e6b9517eedd0f2f3601a024a4b6883916d8ea935319d38896d964c06a33831218e27b13da283d864ce1086fb1828f2b4a866d1421463c78c291b0ea2be0d663474583f9ad05112f5e3510236752c7b0fe4704a9e2aaee09ccb5248de7688ec8265e84661b0f517f3d0d52524b4ced4796bac29e0bd47850522e83f351d9a2817a8d4b47be9876e305f84cb6bb79df00a52ca9e370f38e3846612104d2b6c9e82ca13e8724afcb9e79e23584fece73128c9f4f70b697adeb878d7f2377a88036cec2afd259b3058fa97dace11714db35a431edb0329d1f22dd686ae0f7f10895bda6621bfb66e7043daa70012a8a0605f4f13c13af0f5df76dc7c04e3eea38e5478c7e561b2516115b44bc475bdaf6cc719dbc301d1e04a7d8a4d46f6b16d4d8e2623e450a8d792dacdc74a5bb15abe813088f3f775bb0e7f01d9f9747b7b040000",
    ],
    [
      "ETag",
      "sKYMGr68V6+WW0+fmoLTmw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:36 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-109-1635192891311"
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
      "5b4fc2401085ffcbf8689bb072519af000828ae126944431842cedb414da6edddd4a08e1bf3b5b118d9ae84b3b33fd667bce69f7b089521f1c5846e14b8e727716a27e30c518551e6b45b74ca40ac102d43c2472d69e0df566c6d8e3f9f069a447f7f594ab6da34184f256987070f6104418fb0a9ce73da43c415af3449c27e9a2e82cd0bbcc0c27eeb83bb8a53e11bee907d35eafd9ea75e0609d167daef9a2e0ffb1363f58b016cb31062831f5d068c9a458a3a7bbc6a6e24916a3ad442e3d5450c0c583508a3ce352089b26362bd56d562b5759fde2aaceca8c11190b8feb48a4044f272410b4d03c1e8b2dd9841a01b228c971505c5f691cf985135376076ead5208fc0a90b6208a71f1374882579cbec30776cce03bc71391a7fa44ddf486cddf8ea3503f8f6a37ddce0f42698aea84b8dd7e67e236fb23c3cd8fde5b3b8d6a240525a9d084c84a95abea65adf49eebb53059d37b1c2d73b4c0e3f47bdc451a9c80c70a0f6f4984fc5c7c020000",
    ],
    [
      "ETag",
      "ZDZOtkZ11X+OYPtPJ9nasw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:37 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-110-1635192891311",
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
      "ffd554614fdb3010fd2b96f705b4b659ca28b41362053216ad4d4b92822a845a9338c190c4c176d82ad4ffbeb3d3d2756ce3f3a44aedf9debbf7cebeeb337e60458c7bf896a58f15158b77f7fc163730552485d38360efbb1d2f7ea485b0adf7c54132b84855ffe808104cb324c9cb8c3625af4444656f12b452c1ab9208ce9b50a869db1f9a76676fdfeeb60fbbf69e6d0351d22c19b0e201e8774a95b267596bf156ca799a515232d98a78fe726e3db5ad52f07b1a29696d6b5a2023ad37548f331e11c578713409c04125a998d19cb00c3c6ca8f1ede7edda2d46f2560ae02716511245bc2a94f60525225e242cad84a98a7bcfd8f8fce5070e9c81731aa2d3d1c40b77e624d7e4f92e2212ad83069a435309cbe88cc5739d99cdca07f4c51f0d21030eee88a4728eaebe3abe83d06074e5f83b73a9c02314f246211ab8df1c748cfade19daaee57a68e2794e10a29de35d74ee8f26637432ddc24013314d4895a933a2404869f371fdd3d56faba854005addbbfbfab9f1526719174ce9865d2f74fcfe69e85e3af51d0f684aa245f008b79c904c5240134172aaa818f29802653c0adcd01d79fd0130ccc58dd708897bd7cf1b42b828a936a8cc370edd2134d71f8ef172d9f83baceffbfd2994264290c56f39b0dbf9a8e91bf625c92a03317813d5369eea04b6b1565b47edade8e356d4c1cb9b257c1a1806b256c61713c79fe2fac8a70915b4888cdc3faed8804de2edc55a0f398061cc4107464531a95824b54a24a849872c37bdd4ec6ef7a0b36fd65211a15ee7ba5dfd6f50c47fccac342a539f0ac1854f254c940e414d1a2fac804b61f185d98b2d978faba39c4a49525ddee328272aba63458a244b0ba82d284ab8404955449a56af81392222ad725a28a45f54f6d0cb50b450509525178ac69b2a00a83728087dd73bdffdb40a4fa6a113c05e2a746df70edb37ba29d34afdf4ff6f1b37f5e3683f6723cf8151ff09fef75a80ed050000",
    ],
    [
      "ETag",
      "7S3w1dyxgnr1/+n7fLQgtA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:37 GMT",
      "Server",
      "ESF",
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
      "4d",
      "72",
      "82",
      "30",
      "00",
      "40e1bb646d1d0103a13b52f9111046c1886c1c260d280ad20006e8f4ee757a8dfa5de0adde37c828656d7beaee575683773066b23ea773af41d82aca8f0a2725cbe415d2247243cb4be09aba067354493e9dee89aac6b148be265b1ef202afdaa2eae9c2548eeb33da42255e97daa14b447fbe4e225cb8b68fe2dd14081fc7268c8e1ed9596ac948d43e86ee1162036a880464237c27703d336d79ca6dab71fb5ae2b731d2b92b361a4c8d1535ee9fe89975f695ddec99d385290973f6a62dadcc8c37168aecad114523d697ac43aac0fe4d696aeb30bac9fce5e5ff0233c086e6c2597bba3c6f57a0aecfc0dffaa76e6cd8f37fcc32ce38f8f905e398c8f919040000",
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
      "Mon, 25 Oct 2021 20:16:38 GMT",
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
      jobId: "grouparoo-job-111-1635192891311",
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
      "4fdb3014fd2b91f7953e9c9636ad548daa04a8d4a6234d41689a22c7b90986240eb1d30da1fef7dd38948190c6a7d8bee7dc73ee232fe4511431999248a44f3554cfdf1e64444e086896e2eb1de5fccf9ef5d37c58d697d11e767bbdbb9ecd10211a966279994147c9bae2a0a6bb6d37ad645db24aca0e26ea504a3b743438a513db99d001a5485490252b513c22fd5eeb524d7bbda378379532cd80954275b9ccdfde7b7bbb5756f201b856bd8f9a3d9451bd2f54bf6792332d6431db6dd141ada00a216722430fffa87174f6317757b0bc9b22782f3830ce655de8c617a6e0b248445a57262b99be10e3f3dd816cdd95bb082c2eb33a2fc282e57062c54cb3503f97605df89bb5b5f42e36fe7a1e2c375eb85d5cb9eb7977b159edd6ded6babd727dd7d22ccac070ad9975666e1e5e503f06a54561d483e6b9517eedd0f2f3601a024a2b6883e1b83f62d4e94fa2241af3c4199c46491fa2c889c6a76c10f5f96408c33802863c236a58ac90c5301a38a3916d87e391dd0f87c984862ca62c74989d8c623a8c2938e470427e5742c3b950a554a2ed10b9f597811b06fece5bcc03d79490b03ad3e7adb1a680f71e351688a0ffd47468a242a252d3eea517b8fe7c112c6fdc76c22b48197fde3ee18c1396294034abb0791aaab58cb161c49bafdd73049b89fd38061599fe7c214dcf1b17ef5afe460f70808d5d6dbe641bf84befd2d839226e58561bc8be3d90122ddf636de8faf00b91b8a56d1672bd73fd3bd23ef990400505ff7a9a083681afffb6e3e62318771f7594c63b2e0f578d0aafa05d2261ea7d654f268e6df7890157fa536c409d63db9a1c4d46c8a1d0af25b59b8f95b662b57a036110e7ef99761dfe02c11d65117b040000",
    ],
    [
      "ETag",
      "Y1ccxva0gm4puGbveUvtUQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:38 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-111-1635192891311"
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
      "10",
      "85",
      "df65bcb48dae2842132e501148ca8fa5c40b43c8d24e4b71dbadbb5b0d21bcbbb355d1a889deb433d36fb6e79c76078f59118307ab2c7daa506d8f523477b6085057c268ba95b2d0080ea0e12991e2648d93e4b854f7b3fbc7412b4bfc7e7472d7e910a1a335e61cbc1d24198a5883f7b08382e7486b9114555e2cebce01b32ded701606c3719ffa5cc6b61fcf7dbf7be5f760ef1c16636ef8b2e6ffb1b6d83bb091ab001354584468b5944a6e3032436b53f3bc14e86a59a90835d470fd2055b22ab992d2a589cb187359b371c1da67ad366b3046a4901137992c089ecf48201869b808e40bd9842601aa2ec971525f9f699cc5b5135b0ec761f3bc16f815206d492670f9374882d79cbec307f69ec1778ee7b22acc81baf527dddf8ea3503f8fbae986bd1f843614d5010987a3de2cec8ea6965bbc7bbfda1ad4532529498d3644767adebab86c9ebee57a2d6dd6f41ecfa80a1d8838fd1e83cc809770a171ff0a8b2d31bf7c020000",
    ],
    [
      "ETag",
      "l/heOf+prWSWkH8ifLGc/Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:39 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-112-1635192891311",
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
      "6d4fdb3010fe2b962704687d514acbd64a8805085bb49274690aea26d4ba891b0c491c6ca75285fadf777608d0c1c6c74995eaf33d77cf732fce03be63798c0778c192fb928af5875bbec00d4c1549e0f6679f745797dcee251799f731cffd627a65d9474780603a4a92ac486953f25244540e26e35622785910c1791312352dabd3b40e0f7a56bff3b96f1d5816044a9a2e872cbf83f01ba50a3968b76bf256c27992525230d98a78f674df5e75da85e0b73452b2bdcdd9061ad97e87f538e511518ce747933128282515339a11968286e7d078f1653b778b91ac950078c5224aa28897b9d2ba2045c4f3254b4a61b2e2c103363a5f1cf0d8193aa7213af5275eb83727990e9eef2322516d34d01c8a5ab294ce583cd79ed9acb843e7817f011e50704324957374f5cd091c8486fe9513bcc8e4f9211abadf1d748c6cef0c6d27733d34f13c671ca2bde37df435f027237432ddc24015315d92325567440193d2eae3eae8eae12a2a15801e1befbe9e37de682fe382295db1eb854e609f86eea5533579481312adc7f7d0e625492505341124a38a8a0b1e530819f96337747dcf1e4284e9dca846483cf8f5f01c10ae0baa052af38fcf87be1d1e768d821a7249d2d26056d501ef58ad5e77076f368dbf27b283c09e02391182acfff041419ae24d0e83375625b4e6b4b066abadce96d5ddb20ef1e67a03bf06869dad98f18f89134c717515d02515348f0cdd3f8660c0c6f1fedbabdf0180e125008f54604bc522a95922418d3b6499a9a58aeef7fb07560f1bb050af7d9d4ffa8391c76f7a1e394a939f0ac1454025ec9c36814d1a2d2c87a6c007a581332a2549749a490ea5484a1629456633d0d310d07c8e588ef494d03c9c8e9cd9e33ac0933a21318a79a9a34ca307a8da82dadaadcc5d2dccc8a9c6f77fa55c574dd25c67bee7c0cafd06e2ecdf3598050000",
    ],
    [
      "ETag",
      "Z9a4vVoA5gMmN+nnOpYW1A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:39 GMT",
      "Server",
      "ESF",
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
      "4d",
      "72",
      "82",
      "30",
      "00",
      "40",
      "e1",
      "bb",
      "64ad8c52e5a7bb4646c4d61444a06193a121442006040469a7772fd36bd4ef006ff7be4142296b5bd2552593e0198c896a2a5479ad0db8e5c529f0b695de177b1cef5c5fbdce71ba0de787e569453708667659e23a7bafc4e6eb82c42aad79bfc0d86a4a944488af30d32dd5b7201f6c5bd77a4f73cecef9ad8e2e3a37f0cd0a0ee6860aced35b92ee45f802a5710cacaa209f314284b776a19e44e75dda84444246a1297db896e43a45ef815bc4839c7f58a1373a880a2d8fd2860df9cdcbaa05710e7de4bbe1b8a3235f56d97a308258f3ec760c958787ff0bcc00bbd779c35a924fb73fad4d7306fed627dd58b3e97fc8928635e0e7176325096f19040000",
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
      "Mon, 25 Oct 2021 20:16:39 GMT",
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
      jobId: "grouparoo-job-113-1635192891311",
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
      "a3",
      "40",
      "14",
      "fd2b64f6ab7d20ad2d4d9a95b4a8dd14aa946a76371b320c171c05069941634cfffb5e06eb6a4cd64fcccc3de79e731fbc907b5e266446629e3d34503f7fbb13313922a06886af77d5f9af2ba7fae1b262bd0c979e5939cbcba7f91c11bc65495a5439f4a4686a0672b6dbf6b35a3415ad85e861a29e695a3df3c41a9bf6f1d4362dd344a2843c5df3f21ee9b74a557236181cc4fb9910590eb4e2b2cf44f1f63e783c1e54b5b803a6e4e0a3e60065e4e00bd5efb960547151ce775b74d048a8232828cfd1c33f6a129f7eccdde7b4e867087ee40c2863a22955eb0b533051a63c6b6a9d95cc5e88f6f9ee40b6eeda5d84061379539451490b383212aa68a49e2b30ce828d67acfcb34de039e16ae347dbc585eb39fdc566bdf3fcad7173e106aea1689c83e61a73e354df7cbca07e0252f152ab87ed73abfcdaa1d5e7c1b4049496d005a3c9f0849ad3a11da7f184a5536b1ca74388e3693c19532b1e327b04a324068a3c2daa59b414250cc14e275333b2add48a46888dec93e9244a814e4656125bf17848f647e4a9e60a965c5642f2ae43e42658856e14063b7fe184ae2e21a54dae969db1b680f71e151688a0ffd4b46fa35ca052dbee951fba81b30857d76e37e13564943d6f1f70c629cd25209ad6d83c05b527126c18f11dcf5d22584fecf2109464f6fb85b43d6f5dbc6bf91b3dc401b67695fe926d18acfc736de780b8a679a3218fdd815468f9166b43d7fb3f88c42dedb290ab9d1bfc24dd530029d450b2afa789601df8fa6f3b6c3e8271f751472abce3f230d9aab01aba25e2bade57b66ddbd3639b6870ad3ec5ecb179685b9ba3cd080594eab5a46ef3b1d24eac916f200ce2fc7dddaefd5f439b169b7b040000",
    ],
    [
      "ETag",
      "jpGZQApJEcmLDTDM1pADPw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:40 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-113-1635192891311"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92dd4ec2401085df65bcb424547ec4265c8020960022941b0d214b3b8562dba9bb5b9110deddd98a68d4446fda99e937db734ebb87a7280dc08165b47ace51eece56a8ef4d314195c75af12da3542158805aac0c99ad77e3d7bef730f67b1b72fbeefa5c77b6cd2613ca5f6322c0d94318611c28701ef7908a0479cda7384fd245d159a07799194ebd893bea719f5060fad16c3068b5075d3858a7c54068b128f87faccd0f166c6839c11025a63e1a2d99a40dfada35369548b2184b8a72e9a382022e1eac24e5999044259e946cbb52b2eb959a7d75d1b8b22bb6cd644cbed011a50ccfa62c103469114f68cb36a1ce802c4a761c16d7171e4741e1c494eec8ab570b815f01d61646312efe0659f05af077f8c08e197ce7444279aa4fd4cde0aef5db711ceae7519d96d7fd4128cd519d10cf1d76a75e6b3836dcfce8bdbdd3a8c6923849852644bb5c6dd42eebe5f75cafc964cdef71b4ccd1025ff0ef711b697042112b3cbc01a4310e4c7c020000",
    ],
    [
      "ETag",
      "bphyPxJTZPcGjoIJIh+tDw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:40 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-114-1635192891311",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85547f6fda3010fd2a91f74f2b5120841f0912ea18cdba48347421b4eaa6091ce3a46e93388d1d2a54f1dd77764a5bd46e9590e07cefdd7b773ef384ee59be464314b1e4a1a2e5f6cb1d8f500351891338dd786635cb82737bf3236669f9781bb9bf16e3d108104cb104ce8a949e085e95848ae162de4c4a5e15b8e4fc040a9d9866f7c4ec5b3dd3e9d88e69992610054de329cbef817e2b652186add65ebc99709ea414174c3409cf5ece5b9b4eab28f91d2552b40e355b20235a9fa89ea69c60c9783e5accc1412568b9a41966297878a5aea3af87b59b0c67cd04c01b4628268457b954bea004e179cc92aad455d1f009699f6f7ea0b93b7527a131992dfcf0688533455e1d1b5818fba061aca029982b5db2f54a6596cbe2def81ecc2e20030e6eb1a062655cff7003d730560a34324e8db17f661c523ddf58f8be3b0f8da3d363e33c982d2e8d6f370718f0bca642b25c3b0e719452e5f679aadefbcb54042cc1419d5c0eda7d6cda6d278aa301896dab17c56d1a457634e8612b6a13a74bbbeb8862e049555db370cef33e71884548b76fade146628bda4e3f1e503c7006ed1e8e7b5d8b76e06080760df4583249cf9828b860f564d175e085ee320c16fe641cbaba8d1857a93cabcda926defa94d02480fed3d74e65190725754d9e1fbac178127a576ebd19539a60b29d3fc06ec4381514d0b8c41995b4bce06b181aba9ccdbdd09bf9e32930f4755fee11020d7f3fbd12c26da1a72cf5b7d2ea77b5fe1e7085d34a2336f50f64f6d06ed7f8778971108c6f40169725de7e5cfec3fa1aafa3dae28b1e526afba87310750fa23edafdd9c1a781e089d5cae8e7c20d6e507d14d0989634279faf158075e2f3bf8afdb305303c5cd0111262d86222940a2969bdcd2cd3bd68b6d56eb7ed9e8d34b894ef728e63eeaf4dd55015694673f9dc52fd6cf51455aa122f2048c212fa9e7f0ed9bfb29a659d38050000",
    ],
    [
      "ETag",
      "vI1uOmRG8vHfilrwhbEZUA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:41 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-114-1635192891311"
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
      "5f",
      "4fc23014c5bfcbf5d12db1f22740c283e8a2182032e5c91052c6dd1c6cbbb3bdd520d977f776109f7d696f4f7f273da72738e4d50e46b0cdb34f87e67895212ffd10a375055bd96aaa2c4200c83a13f2f0b3e8cd2377bded4fbbcf0f83e5bc5fa693e5782c844d3eb0d4303a419a63b1b3307a3f41a54b149b2ec9552c101f6b7f9e2edea2c72816a1a49d1716abd9ec6e328ba009fe4c9b4d7df89765dd04b0a76d8c291aac12f4196a437b4c78eaeb595dd60586969c49d0420bb7179921576b43148a122ad50d55bfd353c3dbc150759412b2a044734e95c0ab5709074cac8b98bea51e78c0b4a3344ddbf5ab957d89cbb46ed617d3e4c8685f0c49048bfef59b73927bf2e95852b3711840a2e5239f723e9f9b5f68065cf0a5010000",
    ],
    [
      "ETag",
      "kzN5MEu+b6I4JD8QM6mfBQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:41 GMT",
      "Server",
      "ESF",
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
      "7282300000d0bb64ad8e7c04d29d7cb528523eb1b0c9044881a248216aa0d3bbd7e935eabbc3fb0624cfe930607669680b5ec04844b8c8176ea7e97659f28cd47324273d0fbc1b910be2e0127d5515a3d33b8ae7b5cab592395bc1b94a6b89fb56956964b4137826e3856c8ed1a9b1f0cabfc8bd7a35dfa0761242513fcb819e563ecca2c4770c658d4e6df26938046214b6019ab0c68b18cad64e1ef329f5e261a7c7e4004565c85e85bd11b1f3fd0e4d3ca7919bf5fbe6602f3f363814820ca9a59b32a44c4b7ef42d93337a2bd653bb357d925ebdd0b0b1982f9e9efe2f30039477754f075c3fb64b2b0867e0af3e6663471fff754a7ada839f5f7ad6045219040000",
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
      "Mon, 25 Oct 2021 20:16:41 GMT",
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
      jobId: "grouparoo-job-115-1635192891311",
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
      "0002ff85535d6f9b3014fd2bc87b5c93404202448ad628a16bb44056425a75d3848c31d42dc1149b565595ffbe6bd374ad2aad4fd8bee7dc73ee07cfe88e55199aa29415f72d6d9ebedcf2149d202a7101afcbe0fa072393f2ba35c3cbe1e2eeec6b65ffba98cd00c1144be07d5dd29ee06d43a898eeb6fda2e16d8d1bce7b90a86759e39e35198d2d6fe87ad6c8b280286899af597507f41b296b311d0c8ee2fd82f3a2a4b866a24ff8fef57df0301cd40dbfa5448ac17bcd01c888c127aadf4a4eb064bc9aedb6e0a015b449e81eb3123cfca366e9e9fbdc7d86f7fd02c00f8c504c086f2ba97c410ac2ab9c156da3b3a2e933d23edf1cd0d65ffb8bd820bc6cf75552e13d3d31322c71229f6a6a9c459bc05885679b2898c7ab4d986c17e77e30ef2f36eb5d106e8dab733ff20d89d3926aae31334ef52d840be86754485669f5583d2be5970ead3e0e4611405ad02e9838e6045baee9a579ea90dc1d8dd3dca469eaa6ce188f52937836b5b39462e06951cdc215af6cd3c643e2a5c9706c7a89ed3893048f1d33c9bccc1dba36f64cdb448713f4d83049974cd45cb0ae43e82a5ac57e1247bb70318f7d5d428edb522e3b63aa80b71e251408a0ffd4745051c64149b57b15c67e345fc4ab4bbf9bf09a16983c6def61c6392e0505346ea079923601cfa061289c07fe12c07a623f8f4181a6bf9f91eab972f1a6e5aff41806a8ec4afd45db385a85dfb59d23e21297ad863c74075483e51ba80d5c1ffe0012b6b4cb822e767e748dbaa788e6b4a115f97c9a00d681cfffb6e3e60318761f7484843b2c0f114a8534b45b22a6ebedd823d3b49c918b34b8911f629e373eb64de55019e99e56f2a5a46ef3a1d24eac15af2008c2fc43ddaec35f3089d13f7b040000",
    ],
    [
      "ETag",
      "DMYKic6lYu0NV2CkF+n4ZQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:42 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-115-1635192891311"
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
      "0002ff8d92414fc2401085ffcb782d092b52a58987a2a824800ad58b2164d94eb1baedd4ddad8610febbb355d1a8895eda99e937dbf75ebb81c7bc4c218265be7aaad1acf756e8ae7d31455b6b67f956516911024027574c3ea79d735dc761bbb72655a9e276793116d7c7c74c58758f85846803598e3ab510dd6da09405f29a225d17e5a2e90270ebca0f67c9743839e7bea0d4f7939bd128ee8f06b00d768ba97472d1f0ff589b6f0378a0e5143334582af45a2a430fa8dcd0dbb4b2a834b62cd546a185066e1eac0cd59534442d9eb484e8b644d8e98adefe514f7484605293922ea792e19b190b04474eea29bdb04d0819304dc98eb3e6facce33c6d9cf8723849c28346e05780b565b9c6c5df200bbe97fc1d3eb0f70cbe73b2a0ba743bea6c7419ff761c87fa79d4699c0c7e10d671543b24198e07b3241e5f796efeeebdbf7668af0c7192167d88a27d70d43d0cdb6fb99e90cf9adf13395363004af2ef71913b8832a92d6e5f01cfa2291f7c020000",
    ],
    [
      "ETag",
      "vd3GluA609yocpcmVbHM1Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:42 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-116-1635192891311",
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
      "000002ff8554fd6f9b3010fd5790f74babe503c817448aba34651d524a3a425a55d3941863a857c0149b565195ff7d8769da66dd560909cef7debd77f6992774c7f2088d51c892fb8a96db4fbf78885a884a9cc0eae27c659be1f5284d8a323b8de9d6fc2c4f1f271340b09a257056a4b42d7855122ac6ab6527297955e092f336146a1bc6b06d0c7b03c3362ddbe8190610054de339cbef807e2b6521c6ddee5ebc93709ea414174c7408cf5ed6bb0f66b728f92f4aa4e81e6a764146743f503d4939c192f17cb25a82834ad0724d33cc52f0f04a8dc22f87b53b0c679d04c00f8c504c08af7259fb821284e7314baa525545e327a47cbef9404b67eecc026db65879c1d10667357973ac61a1ed8396b681a66296d2358b367566bd2eeeb4affee20232e0e0160b2a36daf537c777b4d7a58d36d14eb4a977a61d16703d6de579ce32d08e4e8eb5737fb1bad44e6f0e30e03ca242b25cf90e7098d2daf3f3debaef8fb4266009a24d723dd287d8b0743b8cc31189adde208c751a8656381ae05ea813bb4ffb514831f0645d5db170ce736cdac321d12d3bea870609fb61644624b260cd8a2cc332f401eddb718cd1ae851e4b26e919130517acd95f74edbb81b30efc95379b068e6a23c6552acf1a7375136f7d4a681240ffe96b57671907a5fab05c2f70fce92c70af9c663ee634c164bbbc870989712a28a07189332a6979c123d83474b958ba81bbf0a67360a843bfdc23041aff787a2504db42edb2546fb40c7cd73b5706f6882b9c560af2d07ca069015ed16ed7fa7799a9ef4f6f401a9725defe91837686fd9afe170985575163732f69a05a6d1f990751ff201aa2ddcf1d3c2d0497ad5146df578e7f839a259fc6b4a439f978b400ac121fff34f61718c0708541474888619289a85548499b896699ea45b17bba6e8eac1e52e052becb59b6bd3fbaba465d91663497cf2d351758ed629daac40b089230889e3ac5dd6f2fc5611642050000",
    ],
    [
      "ETag",
      "OGU92bW7lgprmBfey2+tBw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:42 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-116-1635192891311"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d515d4fc23014fd2fd747b7c482a090f0200415248b0e307e8490322e73b0f5ceb6c32c0bffdddb6188892fbeb4f79e8ff49cb4825da2d6d08555127f16a8cbb318ed931b4234456a0d5f392983e0015a19b3f22a6905e397e7db72da7f3d9fcddf06817a18c7bd1e2b4cf48199846e059b04d3b581ee7b054a66c8369951a12c8b6c99bb7d14cc8677c390818cd60e08e693c94d7f32848377322d97f9ee5f96c5c1832dad42dca04615a1cb906bda626447ae9e91599ea26fa8d0111aa8c535116b2a72a9897c467c21dabe68375ba2d3b8ee88a610ac4c29923621c5e2f994c381252bd390beb81e3459a0eb919b6eea735fc3ae849b1a75b6df5ce3c4893f9c3871978e5bfc3cd62f2d9a474d1cdda04b7d716c3020d7ca725bab0bf42092fc01f7893dee876f100f1a12dd010000",
    ],
    [
      "ETag",
      "7i5NJXVFySBY+TUZCNnKJg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:43 GMT",
      "Server",
      "ESF",
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
      "d34b8e82300000d0bb74ad468a229d9d7c25804ac041d91052aa14d016a82298b9fb98b9c6f8eef05e20c398745d2a58456ee00b0c1944333c73b9aa5997b28ed3247729ca22b6708c7e8c4c7727a3cbae6e2b65351667648bf551e0f0a6c29518e6c64565f21a9da4b0f4037de1d92aefe049091ed7407f5667a72f6faecc4b9be5477f3fbdcb2439a160ea2bdd8611d51af16a4bbd07ef716cc60d1a9535ecf4fcc897691a32ba69221317531f27072a1d1c2dba5af009f7ae17cf77612d74a69cefa616c20745ca48aab2e90dd9c3a228c8b79de4d2bc579761be9d7d7cfc5f6002c893d39674297d6f9797084dc05ffd540c9cbcff6b246b490b7e7e012ed5e87719040000",
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
      "Mon, 25 Oct 2021 20:16:43 GMT",
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
      jobId: "grouparoo-job-117-1635192891311",
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
      "6b6f9b3014fd2bc8fbda2410f22252b446296d9112b20169354d1332e642dd124cb1495555f9efbb98a66b5569fd84ed7bce3de73e78210fbc4cc99c243c7f6ca07efe762f12724640d11c5f0f153c257c99872af0464e367af08ac3d5d3628108deb224dd5705f4a4686a0672be0bfb792d9a8ad642f43051cfb2a63d6b628f2d6738732cdbb29028a1c8d6bc7c40fa9d52959c0f0627f17e2e445e00adb8ec33b17f7b1f1c8683aa16f7c0941c7cd41ca08c1c7ca1fabd108c2a2ecac52e44078d843a863de5057af8474d93f38fb9fb9ceefb39820f9c01654c34a56a7d610a26ca8ce74dadb392f90bd13edf1d48e8aedd5564305134fb322ee91ece8c942a1aabe70a8ccb60bb313cff721b6c9691b7f5e37075ed6e96fdd576bddbf8a1717bed06aea1685280e61a0be35cdf7cbca07e0a52f152ab47ed73abfcda21eff3605a024a4be882f1d49c506b663a49964c5936b3c749664292cc92e998da89c99c118cd20428f2b4a866d1529443a059963a763c76ac713c9a6493d8198d2671e6d8d3310c2ddb4e6d723c234f355770c1652524ef3a446e032f72e328d8f9ab65e4ea1232da14eaa233d616f0dea3c20211f49f9a8e6d940b546adbedf9911b2c579177e376135e434ed973f88833ce682101d1b4c6e629a83722c586117fb9712f10ac27f6e3149464fefb85b43d6f5dbc6bf91b3dc201b67695fe92300a3cff4adb39216e68d168c8a13b900a2ddf616de8faf80791b8a55d16f273e706bf48f71440063594eceb69225807befedb4e9b8f60dc7dd4910aefb83c4cb62aac866e89b8aeb763dba6694f2c9b6870ad3ec5a6a67d6a5b9ba3cd087b28d56b49dde663a59d5823df4018c4f9fbba5dc7bf689721fc7b040000",
    ],
    [
      "ETag",
      "vpewbiAgStRI49f4kIlvGw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:43 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-117-1635192891311"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92dd4ec2401085df65bc2d0995ff265e1404c540555abc31862ced148adbddb2bbc510c2bb3b5b158d9ae84d3b33fd667bce690ff09c89043c5866ab6d896a7fb642736f8b19ea921b4db7420a8de0001ab62272a407eb9bce2ee8150f41234cc456f07ce35f5c10a1e335e60cbc03a419f24483f77800c172a4b558f232178baa73c0ec0b3b0ca3d938b8a23e9789ed83f964e2f72743383aa7c58419b6a8f87fac3d1d1dd8c8e50c53542862b45a0a2537189bb1b5a9595e70ac6959aa18355470f560a564593025658d2635d7edd4dc76a3e5f6cebb3db7e1ba44721933934941f03c248160a4617c265fc826b4095055498ed3eabaa37196544e6c390ea276b312f815206d69c671f1374882d78cbec307f69ec1778ee5b214e6448d26b7fe6fc751a89f475dfad1f007a10d457542a2f1741846fef4ce724fefdefb7b83fa4e494a52a30dd1ad37bbad4ebbfe96eb40daace93d9e51253a1033fa3dae33035ecab8c6e32bfbf5a34a7c020000",
    ],
    [
      "ETag",
      "FsChJ7vN9pVN3SdnqnlmjA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:44 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-118-1635192891311",
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
      "a2",
      "4010fd2b64ef4b9b5815511013d3b396bb23b16811db34978b2e38d8adc8527669631bfffb0d4b6debf5ee9a90c0ecbc37efcdee2ccf64cdd225e99190adee0bc8b75fee78486a04245de1ea939b394fe665c3f2adfbc159242ecc89bd7eecf711c14a96a09b2c8113c18b3c02d19b4debab9c1719cd393fc14227bade3dd14da3a3dbadaead1bba8e4401493c62e91ae9b75266a2d768ecc5eb2bce5709d08c897ac437afeb8d875623cbf91d4452340e351b28231a9fa89e263ca292f1b43f9ba28342403e870d65097a78a32ec3af87b5eb8c6eea2b043fb0086814f12295a52f2c11f13466ab22575549ef99289fef3ec8d41939c3401b8e675e70b4a09b92bc38d6a8d0f6414d5b6053314b60ce968b32339f676bed9b3fbec00c3ab8a502c442bbfee1f88ef6b6b4d0fadaa936f0ceb5c302aea7cd3ccf9906dad1e9b1f6dd1fcf26dad9cd01069d2f4148962adf010d13283dbfecadfbf1484b0295285a25e756d3a47ab7698771684571d7e8847113c2b01b5a1d6a84cdc86e437b1902459e2cab2b164d791a51cb3663a36b765b26d8467ba977ec8e09003a5634da56475f8211b65a6457238f399370ce44c605abf6975cfb6ee0cc037fe60d0781a3da886991c8f3ca5cd9c47b9f129b44d07ffada9559c651a93c2cd70b1c7f300cdc2ba79a8f11ac68b49ddee384c4341180689ad30d48c82ff812378d4cc6533770c7de60840c75e8933d4290decfe73742b0cdd42e4bf526d3c077bdefcac01e71459342411eaa0f4233f44a76bbdabfcb0c7c7f7083d234cfe9f68f1cb663b64bfa5f24145e4595cdbda44e4ab57dd43a88da07914976bf76f8d4085eb64a995cce1cff86544b3ec490431a7d3e5a085689cf7f1afb0b8c60bcc2a82324c638c9912855a21caa89661bd58b621bcd66db6c1b448173f92167b5ecfdd19535ca8ab08154beb4545d60",
      "b58b65aa10af204ce2207aea1477bf010ecd8a1242050000",
    ],
    [
      "ETag",
      "zIpEz6Q/7R7qABcsM6P9kw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:44 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-118-1635192891311"
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
      "4f",
      "6f",
      "c2",
      "30",
      "0c",
      "c5",
      "bf8b776da565dd1fa8c4614c156342682b70d934a1909a5268e392b89b58c577c76568e79d92f7fcb3f39c167685cd20865591ef1b7487ab1cf9adbba4e89b92bd1c35598f1000b2ce851cd13e9dedecd7fb3c895e7cffa7ba7dd844f9602084371bac34c42dac0b2c330ff1470b5657286dbaa2c6b2407ca83b3d9ece9351928a5151d619d3c564f2389c24700cfe9a96cb7af7af96cf63005b5aa5b84687d66097a176b445c3e36e3dafabbac4d053e30c7a38c3e742eea8a9b5230ac50995ea85ea3eba53fd9b5e5f454a095992d15c901578319370c0c4ba4ce95bd6836bb8e8e181d1bf3a92e91eb34b45463e51f7304b20760d0660b4fcd173c1bffa7802f4d47eab80010000",
    ],
    [
      "ETag",
      "GoqRSknvZTE3Js9zm47h3g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:45 GMT",
      "Server",
      "ESF",
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
      "00d0bbe45b1d8801b57f2c422dcae242a43f0c269125a24e02d360a777afd36bd47787f70d0a4298947977e3ec0adec050c0c5844c82fbdcf6cad263c8b0e68fb59d1cadf156a2c37a6ccc3eb93271873778479ce442beda6a4df75abc459ea31f0795678e6e2cbd26c36a27538f5e1d9d3b817b0965222a0bca1b1c9401f9032dd53b4b4baec3cef7cf436b06e934214d26f23edca7a79588304a5c5647a766a61aae7de047b0a216ec6d5f233e3afb617440a6d1fad9ae6feaaaea3a7a2886d2ed199f6ab0a2ae08798c68bc6c2c73dbd262333f713a7979f9bfc0083075af059379fddc3e35168b11f8ab9f77c39d3dffdbac104c809f5f90ba452c19040000",
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
      "Mon, 25 Oct 2021 20:16:45 GMT",
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
      jobId: "grouparoo-job-119-1635192891311",
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
      "2b64f6d5b6505a5b9a346b83b876d35205aad9dd6cc830bde02830c80c1a63fadfbd0cd6d598ac4fcccc3de79e733f782677bcdc9119497876df40fdf4ed5624e48880a219be7af282678fe3ed65115eb9d5cff1ef33572c1ee77344f096256951e5d093a2a919c8d936ec67b5682a5a0bd1c3443dcb727ad6b13db69ce1d4b16ccb42a2843c5df1f20ee9374a557236181cc4fb9910590eb4e2b2cf44f1f63e78180eaa5adc025372f05173803272f085eaf75c30aab828e7db101d3412ea180aca73f4f08fba4b4e3ee6ee735af433043f70069431d194aaf585299828539e35b5ce4a66cf44fb7c7720a1b7f2dcc860226f8a322e690147c68e2a1aaba70a8cb360b33696fed926582fa2e5c68f43f7dc5b2ffaee66b55dfba1717dee059ea1689283e61a73e344df7cbca0fe0ea4e2a5568fdae756f9b543cbcf836909282da10bc613f3985a53d349d264c2d2a93d4e521392649a4cc6d44e4ce68c60b44b80224f8b6a162d45399d0cad89754c6360a61d8f26661a276c4463d37618731c7b62ed86647f441e6baee094cb4a48de75885c07cbc88ba360ebbb8bc8d325a4b4c9d56967ac2de0bd47850522e83f35eddb2817a8d4b67be9475eb070a3e595d74d780519654fe13dce38a5b90444d31a9ba7a05e8b1d368cf88bb5778a603db18b435092d99f67d2f6bc75f1aee56ff40807d8da55fa4bc22858fa3fb49d03e28ae68d863c740752a1e51bac0d5defff2212b7b4cb422eb75ef08b744f01a45043c9be9e268275e0ebbfedb0f908c6dd471da9f08ecbc364abc26ae89688eb7a3bb66d9ae39169130daed5a7d8d81c1edad6e668334201a57a2da9db7cacb4136be41b0883387f5fb76bff02bdc6e4697b040000",
    ],
    [
      "ETag",
      "EsPigw5UQmSVCpJ5ZFCoAw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:45 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-119-1635192891311"
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
      "401085df65bc2d092b50a58917a0a02415154a8c31842cedf407b7ddbabb4591f0eece5645a3267ad3ce4cbfd99e73da2d3c6445041e2cb3e4b142b53948d0dcd86282ba1246d3ad94854670000d4f885c0f59ff76e9c7cfebf470d6122f69354eee9e4e4e88d0618a39076f0b718622d2e0dd6fa1e039d25a284595178bba73c06c4a3b9c0693d1f89cfa5c46b61fcf7cbfd7f707b073f68b11377c51f3ff589bef1c58c9e5046354588468b5944aae3034236b53f3bc14d8d0b252216aa8e1fa41a2645572256583260dc6ba0de6b63aac7b78dc652dc6881432e4269305c1b3290904230d1713f94436c12540d525398eebeb9ac659543bb1e5681cb8ed5ae05780b4c599c0c5df20094e397d870fec3d83ef1ccf6555983d35f4af7abf1d47a17e1e75d60b063f086d28aa3d128c2e07d3a077796db9f9bbf7fec6a0be569292d4684364cdf671e7c86dbee57a2a6dd6f41ecfa80a1d0839fd1e1799012fe642e3ee154a87f50f7c020000",
    ],
    [
      "ETag",
      "vF1BWbLfxvh2U3lzhuNgYw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:46 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-120-1635192891311",
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
      "db3010fd5722ef17d0fa91f4234d2b21d641362a9594a529084d53eb38976048e3103b3086fabfef9c50a0631b52a4e47cefdd7b679ff3486e781691110979725b42f1f0e15a84a44140d104577fdd66f7cec7939b935e9e5e8666feb33f9dfac9c10122b86649bace53684a51160ce468316f258528735a08d1c4424dab63362dbbdbb7861d6768752d0b8912d278cab31ba45f2995cb51bbbd156f25422429d09ccb1613ebe7f5f65da79d17e21a9892ed5dcd36cac8f63baa87a9605471911d2ce6e8a094502c614d798a1e5ea851f869b7768bd3752b41f01d6740191365a6b42f2cc14416f3a42caaaa64f4482a9faf3ec8dc9dba478171345b78c1de8aae3579b56f50696c8386b1c2a6629ec292472b9d592ef31be38b3f3bc50c3ab8a212e4cab838717dd730561155b0320e8c4363ec1d1bbbe489672c3ccf9d07c6dee1bef1d59f2dce8ccf973b18741d81543cab3c07344c41fb7ddad7c9dbe3d404aad0439d5c0e4c9b5a8e390ce370c062a7db0f6313c2d009077dda0d4d36ec412f0a81224fe9ea158b66226303081dc7ec3951d7b4ed2862e05006e170d81b0c1d5cecc75dd6ef8440360d725f7005c75ce642f27a6fc9853f09dc65e02fbca371e0566dc4b44cd5716d4e37f1daa7c22611f49fbe363acb052ae9839a7881eb8f8f82c9b95bcfc61412ca1ee6b7381d314d25209a16740d0a8a5311e1a691b3d97c124c66de788a8ceac0cfb6084946df1f5f08c1435eedb2aadee45837b07955f09ca66505b8ab3f48c7c4e1353b4dab4f369bc6bf2b8d7d7f7c89eab428e8c31f39ecc8ee69fa5f742a7c15d54eb7ba16d16acf2e76a2de4e6493cd8f0d3e0d8277ad5626df16ae7f49ea251f62282063ef4f1782abc4fbff8cedfd4530de60d4910a631c6626b50a2ba01e6abeae7aa9d85dd3b43b768754e042bdc97587f6f6f4740d5d11d690a9a796eafb5bed",
      "a24e95f21984499c456fe27dc5ec6fda7612ef41050000",
    ],
    [
      "ETag",
      "zqnw8+HkH4plYb0px5LLRg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:46 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-120-1635192891311"
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
      "0000000002ff8d90416bc2401085ffcbf49a80ab54aae0a196d00a416a8c875244d664922626997477d26225ffbdb3517aee6577f6edf7d8f7f602a7a249610ec722ffecd09cef72e48d1b22b45dc556b6961a8be001b2ce858c67a1d9c6519cd5989669f1a68274fab3592c84b0c907d61ae617c80aac520bf3f70b34ba46b1e99aba8605e273ebceab751c3c07910835a54e58efc2f0711906d07b7fa6c3a13dfdcbb2ef3d28e9186186069b045d86d6508909af5c3dabebb642df526712b430c0c3456ea86bb521f245f1d578e4abe9e45ecdc60f3335514ac88a12cd053502efb6120e985857117d4b3d70801946699a0debd720bb12b769dfef6fa6e599d1be1a920816ddeba36b922772e95852b3e9d08344cb47be147c3df7bf0804eaefa5010000",
    ],
    [
      "ETag",
      "T9LrSTRTfmedjdiY1Ed6zQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:46 GMT",
      "Server",
      "ESF",
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
      "5d6e82300000e0bbf459092028ecadfc8aa0541824e58560e93aa40a29e0c465779fd935e67787ef1b5484d06128c7aea557f006e64a35252285bd61798c7d3617e72c6e29c3a56827ea3493bbcb6f996c2b79ff2e7b995c7bbee28f4421d7bbcd2cf376d0674df7c6b80dd43ca9491207abc711c2830d13121f2632a2a45222b2691f918618c4da90aeb9829402cd6eba9ee91a7628ec75197eecfd189ff029dca08771ee91ad27188fb0beecd59dd11d7960b82854270f9f39cf23867cd3aaf8f19a6d45f88578316f97c6525bd5696438778e6a272802da0da9f4f2f27f8105a0f7be1174289be7f6956e9a0bf057bf1ce79e3eff5bb41254809f5f152aecfb19040000",
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
      "Mon, 25 Oct 2021 20:16:46 GMT",
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
      jobId: "grouparoo-job-121-1635192891311",
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
      "c8fbda24907722456b94d03553425620adba6942c65ca83b82a96d525555fefb2ea6e95a555a3f61fb9e73cfb90f9ec91f5e24644a629e3d54209fbedc8b989c11d034c357b5647772f093b245f53d18df86521fdcabc7d90c11bc6629ba2f7368295149066aba0bda99145549a5102d4cd472ba4ecb19f606cea43b9e383dc741a2823c5df3e20fd2efb42ed5b4d33989b73321b21c68c9559b89fdeb7be7d0ed9452dc03d3aaf35eb38332aaf389ead75c30aab92866bb001d540a64047bca73f4f08f9ac4e7ef73b739ddb733041f3803ca98a80a5dfbc2144c1429cf2a69b292e933313edf1c48e0aedd4568319157fb222ae81eceac846a1ae9a712ac0b7fbbb156dec5d6dfccc3d5d68b82c5a5bb99b717dbf56ee305d6cda5ebbb96a6710e866bcdac7373f3f082fa0928cd0ba31ed6cfb5f24b87561f075313505a41138c46f6903a637b12a7f188a5e3de204e6d88e3713c1ad05e6cb3491ffa490c147946d4b068210a00c776fa74148db0bd51bf0bbd6892d8fd284e86633619c6dd6442c9f18c3c4aae61c95529146f3a446efc55e846a1bff316f3d03525a4b4caf5b2315617f0d6a3c60211f49f9a8e75940b54aadbbdf242d79f2fc2d5b5db4c780d19654fc103ce38a5b902445389cdd3203722c186116fbe7197083613fb710a2a32fdf54cea9ed72edeb4fc951ee2006bbbda7c4910fa2bef9bb173425cd3bc3290437320255abec3dad0f5f13722714b9b2ce46ae7fab7a479f221050905fb7c9a083681cfffb6d3e62318771f7594c63b2e0f53b50a93d02c1137f536ec9e6d8f1ca74b0c58ea0fb1eea07f6a5b9da3ce087b28f44b49cde663a58d58a55e4118c4f97ba65dc7bf973e50037b04",
      "0000",
    ],
    [
      "ETag",
      "sDchr5ZacCuJS8YTrtvEQw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:47 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-121-1635192891311"
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
      "cb78b44456a140130f450141402c351e8c214b3b2dc5b65b77b71a42f8efce5644a3267a6967a6df6cdf7bed169e923c04079649fc5ca2dc1cc5a86f4de1a12a53ade856885c2158809ac7447a767f70ec8e1ae88dcaeb93f6e89e6d92567c7e4e840a56987170b6102598860a9c872de43c435a0b445a66f9a2ea2cd09bc20ce7be379c0ea8cf4468fae9dd78ec76c73dd85987c5906bbea8f87fac3dee2c588ba587114acc03345a0a29d618e8a1b1a97856a45853a294012aa8e0ea412c45597029448d263576ca6acc3e6bb2ce69bbc3ce1823321501d789c809be9b9340d042f3d413af64136c02645592e3a8babed038092b27a61c4e7dbb5109fc0a90b6284971f1374882579cbec307b6cfe03bc73351e6fa40f5c737ee6fc751a89f475dba7eef07a134457540fce1a437f7ddc9cc708f7befdd8d463593829254684264f546bbd9b2ebefb95e089335bdc7d1b2440b024ebfc755a2c18978aa70f706c7967ae17c020000",
    ],
    [
      "ETag",
      "R6FG+AJ4eRJuK/8JW1yi7g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:48 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-122-1635192891311",
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
      "00000002ff85546b6f9b3014fd2bc8fbd26a79401e2444aaba2c651d52423a425a75d3941863a85bc0149b745195ffbe8b69da66dd560909ec7bcebde7be7844772c0bd108052cbe2f69b1fd70cb03d44054e2186ecfc458b737b6f9eb617b2d17f3f463d27327f1c9092058c51238cd13da14bc2c0815a3e5a21517bccc71c179131c358d4ea76998ddbe61758696d1350c200a9a445396dd01fd46ca5c8cdaed7df056cc799c509c33d1223c7dbe6f6f3aedbce0b79448d13e8cd98630a2fd4ed4d384132c19cf4e960b50500a5aac688a59021a5ea861f0e9d0778be1b4150378c308c584f03293952e70417816b1b82c9457347a444ae7ab0fb4b0a7f6c4d726f3a5eb1fad715a91d7c71a16dafed0d0d69054c412ba62e1bab2ac56f99df6c59bcfc0020a6eb0a062ad5d7db53d5bd3d64282bab576a29d6a63f74c3b643baeb6745d7be16b47a7c7dab9375f5e689faf0f30203ba442b24c89f67190d04af053619db7fdac08588288dab81ae8263686ba1544c18044c36e3f88741a04c360d0c7dd4027568ff6c28062e0c9cabb62e18c6783d00cc33e310ccbec86c40090d533c9d0ec041619503ae80eadd032231ded1ae8a160929e319173c1eae2a22bcff1ed95ef2dddc9d8b7551a112e1379568bab9278ad53429200fa4f5ebbcaca3844aa3ae5b8beed8d27be7369d7c331a53126dbc53d8c47841341018d0b9c52498b190fa168e862be707c67ee8ea7c0501dbfd823041afd787c21f8db5c5559aa37f29d19f4683cbb501af6a04b9c940ab5a93f5047efe84d1da6b8ef1b9d91d11d19bd96aeebdfd16ed7f8b7f3b1e78daf41102e0abcfdc306499abd8afe97a80aaf4eb5f8bd0a0355d19e351d9c7a072713ed7eeee06920d8bf3a32fab6b4bd6b545f7934a205cdc8fb0307606578ff3fb2df6900c356431cd80fc960be89a8a29082d673ce52958b6277751dc6768814b8906f6c7d43df37b4f25179a429cde4534af54eab2a56a6523c83c008e3e93aee39587f03f7b119f755050000",
    ],
    [
      "ETag",
      "DsA0EvE6xwyYtSOm+l4NCg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:48 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-122-1635192891311"
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
      "02ff8d90c16ec2301044ff657b4da426b4a82071800a5110456d28172a844cb2a48124ebda9bd208e5df5907d4732ff67afc469ef1198e5999401f7659fa5da1a9ef52e477374468ab9cad6c9a4a8be001b24a854c663d1dbe9e7ef36e923dacebc97a18ce96a7c140081b7f61a1a07f867d867962a1ff798652152836555055b2405c6b779e2e3ec69371244241891316abf97c389a8fa1f1fe4cdbad3efecbb2693c38d02ec23d1a2c637419b4a103c63c75f5ac2a748ebea5cac468a185db8bd450a59521f245f18330f4836ee731e8854fbda0130442e6142bcea81478b59470c0c42a8fe824f5c001a61da5e9be5d7f5ad995b84d9b6673338d6a46fb6648225874afdf5f933c934bc7929a4d851ec44a3ef225e3ebb9b900b8badde8a5010000",
    ],
    [
      "ETag",
      "dJ9p2Mwxl6di4ZyGZA2JSw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:48 GMT",
      "Server",
      "ESF",
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
      "bb646d1c042d4977a0820a88a2f2719309103e95ca1f4b3abd7b9d5ea3be3bbc6f40a388b52de9ca1bbb83773052114fa3a95121554bd339198f77585c1ebe4d824be25a7c445c39d67e7fe26d2f85ba32ac9358570d3aa328396efa5a17a0598cf54cd6e6ce1c49552dc20c2e1f92f741a37a6b5b22df8ae129d29468b3ee935b78b0b94f33269776590ace39291ce12d5fec2c7367a6d76528ed75821f58e968ffb912e2141ec2d875b085e05e6b25df2cce50565d7ff0c659beb27c3e108f67d7a60f3cd4ad382a51811337bf72bd6ecc20581bd39797ff0b4c00fbaaf286b5247f6e9716184fc05f7dd28d157bfe57196d58037e7e0192ad5bd719040000",
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
      "Mon, 25 Oct 2021 20:16:49 GMT",
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
      jobId: "grouparoo-job-123-1635192891311",
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
      "0000000002ff85536b6f9b3014fd2bc8fbda0408794bd11aa5748d94908d90b6d13421632ed42d60864dd6aaca7fdfc5345dab4aeb276cdf73ee39f7c13379e0454ca624e2e9ef1aaaa72ff722226704144df1756d8ef6d9de32f7de284f0e8fb7c5dabd7d4c673344f08625695e66d091a2ae18c8e96edb4d2b5197b412a283893a76cfe9d84367604f7ae389edd836122564c98a170f48bf53aa9453d33c89775321d20c68c9659789fcf5dd3cf4ccb212f7c09434df6b9a2823cd4f54bf668251c54531db6dd1412da10a21a73c430fffa87174fe3e7797d3bc9b22f8c01950c6445da8c617a660a248785a573a2b993e13edf3cd816cdd95bb080c26b23a2fc282e67066c454d1503d95605cfa9bb5b1f42e37fe7a1e2c375eb85d5cb9eb7977b159edd6ded6b8b9727dd75034ca40738d9971ae6f1e5e503f06a978a1d583e6b9517ee9d0f2e3601a024a4b6883e1c81a527b6c4da2241ab164ec0ca2c482281a47a30175228b4dfad08f23a0c8d3a29a450b51b0e1001c368cc2413fb6c37e3c1884e3fe9086f6a837624e0c368c29399e913f155770c16529246f3b446efc65e08681bff316f3c0d52524b4ced4456bac29e0ad47850522e83f351d9b2817a8d4b47be905ae3f5f04cb6bb79df00a52ca9eb6bf71c609cd24209a56d83c05d55ac4d830e2cdd7ee0582f5c4be9f82924c7f3e93a6e78d8b372d7fa50738c0c6aed25fb20dfca5f74ddb3921ae69566bc8a13d90122ddf616de8faf80b91b8a56d16f263e7fa7bd23ef990400505fb7c9a08d681cfffb6d3e62318771f75a4c23b2e0f938d0aaba05d22aeeb6dd98e654d7ac309d1e04a7d883943ebd4b6264793117228d44b49ede663a5ad582d5f4118c4f97bba5dc7bf2ac2f8297b040000",
    ],
    [
      "ETag",
      "M/7YlY0/YN7mfvxXnMEXxg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:49 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-123-1635192891311"
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
      "401085df657a8b89e00f4ae205b6b69aa855c078d118b3c2a05860e9eed2c61adfbdb3d4daa66dd2dec0ccf0cd72ce81233c2679040e6c92ed5389e270b54535d78587b24c95a45bc1738960002ab62572b96cfab6ddb287a56dcde56bd45d589bd6bcd72342863bcc18384788134c2309cec311729621ad853c2db37c5d7506a843a1877ee08da677d4673cd2fd74311ebbfdf1004ec66531628aad2bfe1f6bab93017bbef130468179885a4b21f81e4335d23625cb8a146b9297224409155c3dd80a5e164c705ea349cdb41a35b3dd68995dabd3351ba64964ca43a6129e13bcf0492028ae58eaf117b2096d02445592e3b8ba3ed338892a27ba1c4d8376b312f815206d7192e2fa6f9004ef187d870fec9cc1778e65bcccd585ba1ddfbbbf1d47a17e1e75e306831f845414d505094693811fb89399e65667effd834239139c9294a84334ebcd4ecb6ed7df73bde63a6b7a8fa3448906848c7e8f61a2c089592af1f406e4c81f917c020000",
    ],
    [
      "ETag",
      "WW4S7757Hu72Qszd9U2b5Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:49 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-124-1635192891311",
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
      "da",
      "30",
      "10",
      "fd",
      "5722ef9756a29040c29784ba8ca65d26085d0845dd3481e338a9db7c3576a850c5ffbe8b536859b7554222977befdebbf339cfe881a5011a229f458f252db69fee331f3510153882b753f5db8fcd64a96fcca5dbd7a328d80ca6974fa3112058c5e238c9637ac6b3b220940f17f3665464658e8b2c3b8342675a5b3fd3ba1d431bb4fb03ada36940e4340e272c7d00fa9d10391fb65a7bf1669465514c71ce789364c9e17d6bd36ee545764f89e0ad63cd16c8f0d607aae77146b060593a5accc141c969b1a20966317878a506fee7e3da4d86936604e00d2314139295a9a87c410992a5218bca425645c367247dbe7940736b628d3d653c5b38dec91a2715797daa60aeec8386b286a64216d3150bd65566b5ca1f944b7736850c38b8c39cf2b5b2fc6ab99672a02923e55c319d0be5986e3bcac271acb9a79c9c9f2a57ee6c71ad7cb93dc280ef8072c152e9dac37e4c2bc72f93b5df1f6845c0025cd4c9554fed62adaf0efcd0ef91b0df31fc50a5bedff77b06eef82a19e8540f7c8a8127aaea928553985560f87aa74d821087a166183a21beded78340ed51b51b74ba70507dac0fd0ae819e0a26e805e379c6593d5db4746dcf5a79eec2199b9e25db0871198b8bda5cd5c45b9f029a04d07ffada55599681527554b6e359ae39f6ec1babde8e098d30d9ce1f613f421c730a685ce0840a5a4cb3008686ae6773dbb3678e3901863cf2eb3d82a3e1cfe75782b7cde59485fc47979399e97575e9600fb9c17129319bfa01694d0310bbc6bfcb98ae6bde82342e0abcfd2307ed7425fd2f0a122fa3dae64111556afba87d14e9475117ed7eede0d74070d56a65f47d61b9b7a87ee5d2901634251faf168065e2e34fc6fefa02182e30e87001316c32e1950a2968",
      "bdd12c91bd487647d554d530900417e25d4e333afba3ab6a5415694253f1d2527d7de514ab54c90f2048c2223ab67305d9dfe34c007d40050000",
    ],
    [
      "ETag",
      "M0JZvLW4vAWR84ggdv9MFw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:50 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-124-1635192891311"
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
      "10fd2fe3d136b22d1a21e1008aa50912ade2c510b294a116da4edddd2a95f4bf3b5b0cf164bceccebc8fec7bd903ecd2620d7d58a5c97b85aa3e4bd03cda21425d6546f35552a1111c4023135606f79d97d1240c6fbbc3fdde3f57c1d79d77311c0c58a1e337cc25f40fb049315b6be8bf1ea09039b24de654158645a62eed1ece9ec7c1386220a7b50566f3e974389a8ea1714ea6e5b2dcfdcbb2681cd8d22ac20d2a2c62b4194a455b8c4d68eb69999719ba9a2a15a38656dc1289a2aa948ac865c4155ed71557fea5e879d73de10bc1ca8c6269522a583c7fe27060c8c82ca24fae073e0b543b72d34d7b7e30ecb525ec24da6cbf3971e2bc3fb8aee5163f8f8d6a83fa411147d76853778e0d6ec8b632dcd6a80a1d88257fc02435c7bdf9069ecc2246dd010000",
    ],
    [
      "ETag",
      "GM0VBHIID4Axx3+rGzF2/A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:50 GMT",
      "Server",
      "ESF",
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
      "1f8b08000000000002ffedd3516e82300000d0bbf45b0c5059657fc3c04010158b203f044a29c48c56dba0b8ecee33bbc67c7778dfa022844a592a7ea60378075365da73320fc5d2f118abc7b7cdc29f3887b17dbb04d6ad89bffa756e321292e390306d9fbbfd48cf812a9481a274b83518b224251682467ab2575dbc391774159d7cee0e2ee6e37d12790b774dc7b2b2396de0e503a34909a3ee8f4bef3826813e6e71b1f3d348d41ddf65b4dbee05fd64adab6519eded7b57c9807b4e8dd7f95ae228ac34f4d0a743230f5219db05f745e1e09c8ce282426541c744a6a7b57ac80e31d2e3f9cbcbff056680de457fa5b2ec9fdba165db33f057bf5493a0cfff0eadaef40a7e7e01cc13809c19040000",
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
      "Mon, 25 Oct 2021 20:16:50 GMT",
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
      jobId: "grouparoo-job-125-1635192891311",
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
      "7b5c9340424212295aa394ae9912b20269374d1332e642bd02a6d874abaafcf75d4cd3b5aab43e61fb9e73cfb91f3c925b5e26644e629edd35503f7cf82562724240d10c5f571fe945f0e55b706be597c00b67eadd957fb2c50211bc65495a5439f4a4686a0672be0ffa592d9a8ad642f43051cf1a8e7bd66434b666c3e9cc1a59161225e4e98697b748bf51aa92f3c1e028decf84c872a015977d268ae7f7c1fd7050d5e217302507af3507282307efa87eca05a38a8b72b10fd04123a18ea0a03c470fffa8497cfa3a779fd3a29f21f89e33a08c89a654ad2f4cc14499f2aca97556327f24dae78b0309dc8dbb0a0d26f2a628a3921670622454d1483d54609cfbbbadb1f6ce77fe7619ae775e14ac2edcedb2bfda6df65b2f30ae2f5cdf35148d73d05c63619cea9b8717d44f402a5e6af5b07d6e959f3ab47e3b989680d212ba60e498136a4dcd599cc60e4ba7a3719c9a10c7d3d819d3516cb2990d761203459e16d52c5a8ad24c260ed8233bc26e58910dc3349ada3644569c8c67563c331d674c0e27e477cd159c715909c9bb0e916b7f1dba51e8efbdd532747509296d7275d6196b0b78e951618108fa4f4d8736ca052ab5ed5e7ba1eb2f57e1facaed26bc818cb287e00e679cd25c02a2698dcd53506f45820d23de72eb9e21584feceb3128c9fcc723697bdeba78d1f2677a88036ced2afd2541e8afbdcfdace117145f34643eebb03a9d0f20dd686ae0f3f11895bda6521977bd7ff4eba271f52a8a164ef4f13c13af0fedf76dc7c04e3eea38e5478c7e561b2556135744bc475bd1d7b645ae6d41a130daed59bd8cc9a1cdbd6e668334201a57a2aa9db7cacb4136be4330883387f4fb7",
      "ebf01762df1bca7b040000",
    ],
    [
      "ETag",
      "C+aHSJXSk1lQeim78Nqnxg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:50 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-125-1635192891311"
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
      "0002ff8d92dd4e83401085df65bc94c6a22db524bda85a2b49ffa49834314db3c28058607077a9699abebbb3a8d5a889dec0ccf0cd72ce811dacd32202171ed2e4b942b93d4a50df9ac24755655af1ada4422158805a244ce2c9a2339ca7adf564ba999273ec15b3c530e9f59850e123e602dc1dc429669102f77e0785c891d742caaabc58d59d057a5b9ae13cf0bdc990fb9c22d34fee46a3fec568007bebb018092d5635ff8fb5e5de82277af03146894588464b29e90943ed199b4ae465860d45950c51410dd70f12495529245183270dfbb4ddb09db3b6dd3d3defda67b6cd6446a1d029150cdfcd592068d222f3e9856d82c380ac4b761cd7d70d8fd3a876624a6f1238ad5ae05780b5c56986abbf4116fc28f83b7c60ef197ce7444e55a10fd4f568daffed380ef5f3a8ab7e30f84128cd511d90c01b0fe6417f3c33dcf2ddfbc556a39a49e224159a10ed66ebbcdd719a6fb95e92c99adfe36a59a105a1e0dfe326d5e0c62253b87f05f1ae1bb87c020000",
    ],
    [
      "ETag",
      "e/X7GSi4kNOvOo6+InPXGg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:51 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-126-1635192891311",
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
      "02ff85547f4fdb3010fd2a91f70f486d93346dfa4342ac948c452b29a429086d53eb384e6648e3123ba00af5bbefec50a0820d295272bef7eebdb3cf794277ac48d010c52cbbaf68b9f972cb63d44054e20c56bd297efc81fb6711bbb4cf6f4fa4f918754e2e8f8e00c1144be0d53aa74dc1ab9250319ccf5a59c9ab352e396f42a1a6dd769bb6eb74ed41bb3fb01ddb06a2a0793a61c51dd0ff48b91643d3dc89b732ceb39ce235132dc2572febe643db5c97fc961229cc7d4d136484f989ea71ce09968c1747f31938a8042d177485590e1e5ea949fc75bf768be1552b03f003231413c2ab422a5f5082f022655955eaaa68f884b4cf371f68e64dbc71648ca7f3203a58e295222f0f0d2c8c5dd03096d054ca72ba60c95265168bf59df12d9c9e43061cfcc1828aa571fddd0b3dc3582ad0afcab21c6a1c1ba3e0d4d8e7fb81310f026f161907c787c659389d5f1827377b18309e502159a16d4738cea9b2fcbcb5fefb1355042cc1469d5cf42c17db7d6b10a7718fa47da71ba7168de37edceb6227b6c8a0433b494c31f0a4aaae59b8e045a7ed26b1935ac47688d325a9d327569a0cda1dec266ed24e29ed39b14b09da36d063c9243d6562cd05abb7175d877ee42da2701e8c4791a7db487195cbd3da9c6ae2ad4f094d02e83f7d6d559671505267e50791178ec6917fe5d5e331a119269bd93d0c488a7341018d4bbca29296e73c814d4317d3991ff9d3603401863ef38b1d42a0e1cfa75742b459eb5d96faadb4dc8ed6df01ae705e69c443fd81ec2eda6e1bff2e310ac3d10dc8e2b2c49b8fcb7f585fe375545b7cd1434a6d17b5f7a2ce5ee4a2edef2d3c0d04f7ac564697732fbc41f55248535ad2827c3e5600d689cfff17bbbb0b60b8bda02324c430c544281552d27a9ad94af7a2d98e65dbaedd431a5cca77b99ee3ec8e4dd55015e98a16f2b9a5faeeea5d54a94abc8020094318f8c11964ff020c0d528a3d050000",
    ],
    [
      "ETag",
      "EOawKa8GTiQ1MjBt/wT4BQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:51 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-126-1635192891311"
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
      "d1",
      "4e",
      "c2",
      "40",
      "10",
      "fc97f5b58d1e2848131e441bc1102245121343c851965a686febdd164308ffee5e213ef9e0cbddececcc65e68eb0cbcd1a2258e5d9578df67095214f3d48d0d5053bb92a320e2100649d8972a6785af69ede5fe8769876cd7e1077af8759bf2f0a977e62a9213ac226c762ed20fa3882d1258a4d97541b16111f2a3f8f266ff1739c0851d2da1393f978fc3018c7700a7e4dcb65b5fb9765710a604bab043768d1a4e8335496b698f2c8d773baac0a0c1dd53645078db8596496ea4a5ba2509850b53aa1eab4ef54af75df536da5445950aa392723e2f94cc20113eb22a16fa9072d11d8064ad34d73ee1bda97b8a085c77fed94df2d2e0f0e0e8ceed592c473e893dd9c533e924fced2886d8d01a45a3e7998f3793efd00372bae0ac1010000",
    ],
    [
      "ETag",
      "S1tQm9DXJo4Hc7nvBE7/Hg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:52 GMT",
      "Server",
      "ESF",
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
      "300000d0bb64ad0e5f81ee4005241428222a9b0cc5a0202610c214ecf4ee757a8dfaeef0be415e14b8ef11a7374cc01b9872c958140bd8ea967da9132ac68db735896ca52baf3619861e139692a8de4e1d491d3ce42ebd6bc236a0496a976ce7c530a050521e2c3e737f05eb799b2b0a1d83a473ee47ad2c77d4ee97c35eb4335f5e0b9055d2c75c4589a9875f97d03c97714443e5a1dd18c54de1431245a94326d7a028e1273170dd76796d64a66d4efb4ba63b1491f74c15b486b8d7313ba4ded0799659099b408299ac86c71af209c3f52021fe793ff0c5cbcbff0566008f6dc5708faae77659358c19f8ab8ff8d4e2e77f0be70c33f0f30bc963e2a819040000",
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
      "Mon, 25 Oct 2021 20:16:52 GMT",
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
      jobId: "grouparoo-job-127-1635192891311",
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
      "c8fbda3c48a08148d11aa5b4454b480ba451354dc81843dd0266d874aaaafcf75d9ba66b5569fd84ed7bce3de73e78418facced01ca5acf8ddd1f6f9db034fd109a21217f0fa235c5d6deff697fbec8e5c5acd755c86b7d39bc502104cb104ae9a920e04ef5a42c57c170d8b96770d6e391f40a28139990dccd3a96dba13c735a7a6094441cb7ccdea47a0df4bd988f96874141f169c1725c50d1343c2abb7f7d1d364d4b4fc811229461f35472023465fa87e2f39c192f17ab18bc04127689bd00ab3123cfca366e9d9c7dc4386ab6101e0274628268477b554be2005e175ce8aaed559d1fc05699fef0e28f2d6de2a36082fbbaa4e6a5cd11323c31227f2b9a1c645b8dd187e70b10d37cbd8df0649b4baf236cbe16abbde6d82c8d85f79a167489c9654738d8571a66f015c403fa342b25aabc7ea5929bf76c8ff3c1845006941fb60321b9f62d319bb699ece48ee4ced341fd33475d2998da7e998b816b5b29462e06951cdc235af893971087667898b6d925833334f5cc722896d65a66b63cb31ed0c1d4ed09f96497ace44c305eb3b84f6a11f7b491cee82d532f6740939ee4a79de1b5305bcf728a14000fda7a6838a320e4aaadd7e107be17215fbb75e3fe1352d30798e7ec38c735c0a0a68dc42f3246d373c8386a160b9f1ce01ac27767d0c0a34fff98254cf958b772d7fa3c730406557ea2f8ae2d00f2eb59d23e216979d863cf507d480e57ba80d5c1f7e0112b6b4cf826e765e7887faa790e6b4a535f97a9a00d681afffb6e3e60318761f7484843b2c0f114a85b4b45f22a6ebedd9d3b139b14c1769702b3fc56c6b7c6c9bcaa132d28ad6f2b5a47ef3a1d25eac136f2008c2fc03ddaec35f1095fac47b",
      "040000",
    ],
    [
      "ETag",
      "KRCHOYWGWdYcG4pPTlRV3Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:52 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-127-1635192891311"
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
      "10",
      "85df65bc2d91f26f132e8a8256012b146f0c214b3b85e2b65b77b71a24bcbbb315d1a889deb433d36fb6e79c76078f49168103cb64f554a0dc9eac50df996282aae05ad12d179942b000355b11793db8b1476ed861f9f6d4eb70df7fbdaf0ddc6e970815ae3165e0ec204e90470a9c871d642c455a0b052fd26c517616e86d6e86d360e28d2fa94f4564faf16c38747bc33eecade362c4345b94fc3fd6e67b0b366239c1182566211a2db9141b0cb5676c2a96e61c2b4a14324405255c3e584951e44c0a51a149c5aeb52b76abdeb4cf6a9d33bb6edb447211329d888ce0d9940482169af18978219bd022409625398ecbeb338d93a874624a6f1cb41aa5c0af00698b138e8bbf4112bc66f41d3eb04306df39968a22d3476a30bc757f3b8e42fd3ceac20dfa3f08a529aa231278a3fe347047bee1e607efbdad46e54b41492a3421dad546a7d96e55df733d17266b7a8fa3658116848c7e8fab44831333ae70ff06a0b92f937c020000",
    ],
    [
      "ETag",
      "JFK1MAc8apy/I8lPPzV2FA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:53 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-128-1635192891311",
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
      "54616fda3010fd2b91f7a5d58024244040aa3a46b30e8d86368476d536811d1cea12e23476e858c57fdfc569dab26eab142939df7bf7ded9e73ca0154b16a887085bdee534dbbebbe504d510957809ab5f9dd166f5e57d44f1af88b5f5ec67d7b8b8ba3f3a02042b5802afd398d605cfb3908ade74d258663c4f71c6791d0ad5cda65337db56cbec369dae69992610058da3114b5640bf9132153d5dafc41b4bce9731c529138d90af9fd6f54d534f337e4b4329f47d4d1d6484fe86ea71cc432c194f8ea61370900b9acde81ab3183c3c5317e4c37eed06c3ebc612c01b16521c863c4f64e10b4a843c89d832cf5455d47b40cae78b0f347147ee20d006e3a9171cccf1ba20cf0f352cb42aa86973682a62319db1c5bcc8cc66e94afbe48fcf20030e6eb0a062ae5d7d767d577b5e9a6bdf73c3b0a876acf5bd136dbfcad0d3a69ee74e02ede0f8503bf5c7d373ede3f51e06ec2fa8902c51e6034c625a187fdce0e1eb732d08588272999c758c36361da34b22d20923c76a91c8a08438a4d3c21631c2ae4ded05a11878b2a8ae5838e149689136715add76b7d574c205e918cd5664381625a6dd2166a7e5d0b6dde9da685743f71993f48489940b566e32baf287813b0bfca937e807ae6a23c2792c4f4a7345132f7d4a681240ffe96b57641907a5e2c4865ee0fafd4130bc74cb2119d1250eb7933b189308c782021a67784d25cdcef802360d9d8f27c36038f6fa2360a8933faf1002f5be3d3c13826daa7659aa379a04fed03b55062ac4258e7305d9941fa89f8257b4dbd5fe5da6effbfd6b90c65986b77fe4a09db65dd0ff22a1f02a2a6d5692262ad4aaa8b917d97b511bed7eece0a921b871a532ba98bafe352a977c1ad18c26e1dba305609578fbcf51dd6200c33d061d212186490e45a11266b49c68b656bd28b665989665b7900267f255ceee34aba32b6a1415e99a26f2b1a5f216ab5d2c52b97802411206d153a7b8fb0d776f501c47050000",
    ],
    [
      "ETag",
      "X8LvkK+feazfi6/rx90QWw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:53 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-128-1635192891311"
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
      "6a",
      "c2",
      "40",
      "10",
      "fd97e96b02dd685b157cf0466b11d1585f5a44d6648cd16427dd4b8b88ffee6c2cd2a7d297dd997361cf614f70c8550a1dd8e4d9a7437dbccbd0cefd10a37185357c55a40c42006865c6cae1a17462b6d8b506bdf757950de3c23c0de7dd2e2b4cb2c35242e704db1c8bd440e7e3044a96c8365992539645f658f97d3c7d1b3d8f62064a4a3d305d4e26bdfe6404e7e0665aafabc3bf2cab73007bdac4b8458d2a419fa1d2b4c7c48e7d3d23cbaac0d090d3091aa8c53591697295d4442123a1885aa1786c3c8876d46a8b8610ac2c28913627c5e2e582c381252b8b98beb91e3458a0eb919b6eebf38be1665dc24fa2cef69b8b6e5cf30f2ef2dceae7b1fed1a29969e2e8067deafb6b8301f95696db5aed308044f207bce4f6ba9f2f0b35514ddd010000",
    ],
    [
      "ETag",
      "Dkmu1PSh8CAZJngDRls7DQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:53 GMT",
      "Server",
      "ESF",
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
      "d34b7282300000d0bb64ad0e080874d70ca254292090a89b0c86949f9f0041c04eef5ea7d7a8ef0eef1b2494b2b625e256b12b78036332376774b6e106b4b34232d273d527acccd7bacd072ca98deaa56b91ca5f7ea78686a740db8a88cf53cec9fa3e950f75e08545e0c4aec77c9beed5832be1ed74615f5494af8e99e6883c3486aa0e969f2e59f64481119f375988ac61495876fda82f0b27c69a5875e578c3a23bdef59a3e5c05c58e0fed4633a1ffbea1d6a1f4148420cd89ce4c39409285c76eefe0caeaa24848d393a7b746b0d3d1ee8c4fb0df56d1880b95ce5e5efe2f30016ce045c35a523cb72b9a694ec05f7d2246ce9eff214b1ad6809f5fdde6f12219040000",
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
      "Mon, 25 Oct 2021 20:16:54 GMT",
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
      jobId: "grouparoo-job-129-1635192891311",
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
      "da",
      "30",
      "14",
      "fd",
      "2b",
      "91",
      "f7718510c25b422b82b46582d085d0aa9aa6c83637c16d88d3d869852afefb6e9cd2b5aab47e8aed7bce3de73ef2421e44b62523c244f2584271f8762f193923a06982afdf41dced7ece76f4f2caedf6b3ebc382b1d6643c4684a8588aeef3141a4a96050735daac9b4921cb9c1652363051c3690f1b4ecfed3ac3f660e8b88e83440569bc10d903d2775ae76a64db27f16622659202cd856a72b97f7bb79fda765ec87be05ad91f356d9451f617aa3f52c9a916321b6fd6e8a0545044b0a722450fffa85b76fe317753d07d3341f093e040399765a62b5f9882cb2c16495998ac64f4428ccf7707b2f616de34b4b84ccb7d1665740f67d6966a1ae9430ed645b05a5a73ff62152c27e17ce547ebe995b79c34a7abc566e9afaddb2b2ff02c4d590a866b8dad7373f3f182fa5b505a64463dac9e2be5d70ecd3f0fa622a0b4823a18f55b3dea0c5a4316b33e8f076e97c52d606cc0fa5deab2161f76a0b365409167440d8b6632ebb93de06e9b47316c69d469399d880e581c757abcd3e62ed0768b92e319792e84869950b954a2ee10b90de6a11785c1c69f4e42cf9410d332d5b3da5855c07b8f1a0b44d07f6a3a56512151a96af7dc0fbd60320de7375e3de10524941fd68f38e398a60a104d0b6c9e866229b7d830e24f96de0cc16662d7a7a022a3df2fa4ea79e5e25dcbdfe8210eb0b2abcd97acc360ee5f1a3b27c40d4d4b0379aa0f2447cb3bac0d5d1fff2012b7b4ce427e6dbce08ed44f01c45040c6bf9e26824de0ebbfedb4f908c6dd471da5f18ecbc355a5c20ba89748987a6bb68b73edb8e65fd5b4d09f625d77786a5b95a3ca087bc8f46b49f5e663a5b558a9de4018c4",
      "f9fba65dc7bfe887077c7b040000",
    ],
    [
      "ETag",
      "+eiYhJDhaGH357nPyLbb0A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:54 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-129-1635192891311"
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
      "000002ff8d92dd4e83401085df65bc85a4f4075b925e5045456bad2d8d17a669b630505a60e9eea2699abebbb358ab5113bd8199e19be59c037bd8a445040e2cd3645ba1d89d25a81e75314159654ad2ade485443000154b88dcaa6013ed6ebd3b772946b3a4f924c24d9ef4fb44c870853903670f718a5924c179de43c172a4b59067555e2ceace00b52bf5701a4cfcd135f5398f743f9a0d87ee60e8c1c1382d464cb145cdff636d7e3060cd97138c516011a2d6520abec650f9daa6647999a1297925429450c3f58344f0aa6482739326a6d5ec9996ddea58bd66b767b52c8bc88c874ca5bc2078362581a0b862d984bf924db0091075498ee3fafa42e334aa9de8d21f0576bb16f815206d719ae1e26f9004af187d870fec98c1778ee5bc2ad489ba1a3eb8bf1d47a17e1e75e906de0f422a8aea8404febd370ddcfbb1e6e647ef839d4239169c9294a843b41aed6ee7dc6ebce77ac175d6f41e47890a0d0819fd1e37a902276699c4c31b7814c01e7c020000",
    ],
    [
      "ETag",
      "qtTkdyJEKAbrNUg2Wrckmg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:55 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-130-1635192891311",
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
      "4fdb3010fd5722ef172695361ffd482b21d641c62a41cad294096d536bbb97cc90c62176983ad4ff7d178702dd1752a4e47cefdd7b679ff3406e45be2223c2447a5741b9797323196911d034c5d5e00272ef6a30bbbc5053f72767e9ca1f6cc647478810354bd17591c1a19255c9418de6b3765acaaaa0a5948758e8d0f1ec43a7eff59ca1eb0f1dcf7190a8204bce457e8bf4ef5a176ad4e9ecc4dba9946906b410aacde5fa69bd73ef768a52de00d7aab3afd94119d57945f538939c6a21f3a3f90c1d540aca05aca9c8d0c33375c5deedd76e0bba6ea708be171c28e7b2ca75ed0b4b70992722ad4a53958c1e88f1f9e283cc82f3e024b64ea6f3303e58d2754d5ebeb5a8b27641cb5a625389c8602156cb3ab35814b7d687687a811974f09d2a504bebf3c7200aace7a5a5f5b5b26d0fac636b1c9e5afb5526a1350fc360165b07c76fadb3683abfb4de5fef61d0fe0a9416b9311f5396416dfc7183277f9e6b4da01a959be46260f7a9e3db4396b0014f7cafc7121b18f3d9a0473d66f36117ba2b061479baae6e583497b9673bc0bc2e7793beed526fe027c012df75b8e3faab21eb0f878933ec3120db16f9510a0da7421552896693c9e76812078b389a8727e338306d24b4caf46963ae6ee2a54f8d4d22e83f7d6debac90a8549fd8248c83687c124fae826648ce21a57c33bbc3314968a600d1b4a46bd0505ec8156e1ab99cce26f1641a8ecf91614efe72875064f4e5e199106f0ab3cbdabcc92c8e26e19931b0435cd1ac3290fbe683d002bd92edb6f5ef32e3281a5fa3342d4bbaf92d87edf4bb35fd2f12066fa2c6e64ed221b5da2e72f7a2ee5ed427db6f5b7c5a046f5ca34c3ecd83e89a344b11245042ce5f1f2d049bc4eb7f8edd2d4630de63d4511a639c64ae6a155e4233d1626d7a316c1cb99eebf7890197fa8f5cd7edee8eaeae51578435e4fab1a5e6169b5dac53957a0261120731",
      "34a7b8fd05f0e6d48447050000",
    ],
    [
      "ETag",
      "EMen3V7SPMsO2zcbgd87yA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:55 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-130-1635192891311"
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
      "02ff8d90416fc2300c85ff8b776d253234342a7180a91b48a81add7ad934a1909a5268eb2e7184aa8aff3e97a19d774adef367e7393d9cca2687087665f1edd1767705f266b8a4e87cc54e8e961a871000b22e849c1f36cf8949566a199f7725f9633ac93ee6b39910ce1cb0d610f5b02fb1ca1d449f3d34ba4669d335f98605e2ae1df42a798f5fe2548c9af2c148b2f57abe58c77009fe9ab6dbf6f4af96af4b0047daa5b8478b8dc121436be9888657c37a4ed76d85a1236f0d3ab8c2d74261c9b7da1285e2846a3c0ad564fca0a6f78f5335564ac88a8ce6921a81b33709074cacab94ceb21e8ce0a6171da37bb524d31de6b78a8c7ca2e16196406c3d0660b4fcd1b2e45f7df901b1b38d9880010000",
    ],
    [
      "ETag",
      "AhQFNcNI1HEwbioujR6UZA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:55 GMT",
      "Server",
      "ESF",
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
      "6e",
      "82",
      "30",
      "00",
      "00d0bbf45b8d5075b03f0a6348451a51107f1a84820523d83ab02ebbfbccae31df1dde37c8f29c49496f6dc32ee01da84c3727f904770672ab93b4ac0e673b7222d97a131c6137837316dc2b990e9b5a6127a64b6d1e189e66db625835f52cdc25d77afc2550a9dd7d49a082532efc5887cb0baeb6b1015be60ca88817c4c54938cb870273f2d97213618b94cd3588852f726bb8691f9e6fa824cda9624a3feb5185c9de4e439e5a45b788b6fb6d51a60edd1b53fd908edbc83ebed5d2163aea770fe348cf095e0d915c378e865c8f9dfbde2ee581a3c9cbcbff054680dd3b2e98a4fcb91dce4d7304feead39bead8f33f62996002fcfc02fcbc3deb19040000",
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
      "Mon, 25 Oct 2021 20:16:56 GMT",
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
      jobId: "grouparoo-job-131-1635192891311",
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
      "4fa34014fd2b64f6d51628b4a54d9ab5697125295481ea6e361b320c038e52069941a3a6ff7d2f83753526eb133373cfb9e7dc0f5ed01dab323447292bee5bda3c7dbbe5293a4154e2025eb38bb3adbf8ef186f8cb3bd3f5ee9f7fba978f8b052058c712785f97742078db102ae6bb685834bcad71c3f900120d4ccb1c98136b6cce46ce0c2e2610052df30dabee807e23652de6ba7e141f169c1725c5351343c2f76feffac348af1b7e4b8914fa474d1d6484fe85eaf792132c19af16bb081cb4823609dd635682877fd42c3dfd987bc8f07e5800f881118a09e16d253b5f9082f02a6745dba8ac68fe8294cf770714b91b77156b8497edbe4a2abca7275a86254ee4534db5b370eb6b5e70b60dfd65ec6d83245a9dbbfe72b8da6e767e1069d7e76ee86a12a725555c6da19daa5b0017d0cfa890ac52ea71f7dc29bf76c8fb3c988e00d282f6c1646a4cb0e918b3344fa72477ac719a1b344d9d743ac6566a90994ded2ca518784a54b170c52b7b321d6713cb4c0cc7ca12db76c609ce4d232164e4389693d9233c428713f4d83049d74cd45cb0be43e83af4623789c35db05ac6ae2a21c76d29d7bdb1ae80f71e251408a0ffd474e8a28c8352d76e2f88dd70b98abd2bb79ff08616983c45f730e31c9782021a37d03c491b9f67d030142c7d770d6035b18b6350a0f9ef17d4f5bc73f1aee56ff41806d8d995ea8ba238f4821fcace117185cb56411efa03aac1f20dd406ae0f7f00095bda6741973b37fc85faa790e6b4a115f97a9a005681afffb6e3e60318761f7484843b2c0f119d0a6968bf444cd5dbb32dc39c8cec2952e0467e8a59cef4d8b62e479791ee69255f4bea371f2aedc55af1068220cc3f50ed3afc05762ec5277b040000",
    ],
    [
      "ETag",
      "dPFOMDTaLcMAk1EIqzXEQw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:56 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-131-1635192891311"
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
      "78",
      "8544b4454bd243ab5549b0d6969e4cd36c61a0d485c1dd45d334fdefcea256a3267a8199e19be5bd073b782caa14025815f953836a7b94a3b9b7c51475238de65b4d954670008dc89934d5b647f9d97a22ebd1755874ebe1c6efe5fd3e133a59632920d84156a04c35040f3ba84489bc96906cca6ad9760e986d6d87b3781a8eafb92f29b5fd781e4583613482bd73584c8511cb96ffc7da62efc0865653cc506195a0d5522bda6062426b538bb296e86a6a54821a5ab87d902b6a6aa1885c9eb8dea9e77afe69d7eb9d9cf7b8f1989494085350c5f07cc602c19011724a2f6c137c06545bb2e3acbd3ef3b8485b27b60cc7b1df69057e05585b56485cfe0db2e0b5e0eff081bd67f09d13253595395057d1dde0b7e338d4cfa32e07f1e807a10d477540e2f076348b07b713cb2ddebd0fb706f5441127a9d186e81d77cebb67fef15bae1764b3e6f7044635e84022f8f7b8290c0499901af7afe304e3477c020000",
    ],
    [
      "ETag",
      "tny9og7hPlpEGIi5pBj69g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:56 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-132-1635192891311",
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
      "db3010fd5722ef1790fa9134fd482b2156da0cba9594a529887da8759c4bf148e3123b6c15eaffbe7342818e6d489112fbdebbf7cebecb03b9e569447a24e4cbbb1cb2cdbb1f222415028a2e71d7a7dd4f6756e86dbe9c25bf4e4f4e62a93edef48f8e10c1354bd2d53a81aa1479c640f666d3da3213f99a6642543151d5b21b55ab6db7ac6ec3e95ab665215142128f797a8bf41ba5d6b257afefc46b4b219609d035973526564ffbf5fb467d9d891fc094acef6bd65146d6df503d4e04a38a8bf468364507b9846c0e2bca13f4f04c8dc2f7fbb96b9cae6a4b04df7306943191a74afbc2144ca4315fe6599195f41e48e1f3c50799ba6377101883c9cc0b0e1674a5c98b43834a63b7a8180b2c2ae609cc79b4d091f97c7d6b7cf027e71841073754825c185767aeef1ac622a20a16c6b7dc346d308e8dbe3734f6338c3c63e679ee34300e8e0f8d537f32bb304eaef730683d02a9785a180f68988036fd78b8a3d777aa0954a1913238ef986d6a3966378cc30e8b1dbb15c62684a113765ad40e4dd66d42330a81224fe9ec058ba6226d743a4d70621a3b0c22bbd36dd8ada8d9761cab0b611401b31c88db2103b2ad909f195730e4722d242f0f985cf9a3c09d07fecc1bf403b72823a679a286a5395dc44b9f0a8b44d07feadaea2817a8a46f6be405aedf1f04a34bb76c90312c29db4cefb045629a484034cde80a1464e722c243231793e928184dbcfe1819c5ad5fec1092f4be3e3c1382cdba386555bcc95017b07d91f092267901b82f3f48c36c9855139bb845b6dbcabf33f57dbf7f8dea34cbe8e68f1856d46e6afa5f740a7cb12a9dee742da2d59e5cecad9a7bab36d97edfe253213870a532f93c73fd6b526ef9104306297bbbbb105c04defe71ec8618c138c6a82315aeb19999d42a2c83b2a9f9aaa8a560dba6d5319d3629c0997a156b98d6eef6740e9d115690aac792ca21",
      "2e4e518772f904d23f471cb691778ad1dfb2c2c49c46050000",
    ],
    [
      "ETag",
      "Ra9KH1bNyZHlxGBBfstJhA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:57 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-132-1635192891311"
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
      "8d50d16a023110fc97edeb1d368aa50a3ed456ac2052cf0a421189e7def5f4727b4d366d45fcf76e4ee9531ffa92cccece84999ce050543be8c3b6c83f3cdae34d8e3c0f2041e74b7672d55439840890752ecac558bb31ae864fada5f6a6677cf6ddeace070351b8f41d8d86fe09b202cb9d83fedb092a6d506cda90af58447cacc33c99bd8ec6a3440843bb40cc96d3e9c3703a8273f46bda6ceac3bf2ceb73047bda2698a1c52ac590a1b6b4c79427a19ed3a62e3176e46d8a0e1a71b3c82df95a5ba258985875dab1baeb7455af7ddf531da5445952aab9a04ac4cb85840326d665425f520fda22b00d94a659737e3674287145eb80ffdaa9b05b5f1f1c1e19dd8b2589e73024bbbda47ca4909ca5115b8f11a45a3ef9b9e0cb7cfe011c41f54ec1010000",
    ],
    [
      "ETag",
      "SGasGeXBD/Uaum9mufx/5Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:57 GMT",
      "Server",
      "ESF",
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
      "0000d0bb642d0c858192ee001550ab30065ad864620801a4c84f0d747af73abd467d7778df8050ca86018f97336bc01b98880a652a6f5bd35ef352c91b0d5d6a78c22fc7acb815716eaec23ab2b75a1b7913b1cc249b352ae270257af70ce1d22cab910bb43c9033671c8bfb6e73084f96fbeef1da30793a07d655ffc07e4e02bf828ec2e98ef0c1e1b697d8fa28e1a6e9a2883a69d7c4e9f69a649534e92a5a163a52a85bbbfb117d8d84353315b3d54e713a3bbcfb6c4374bb45caeb043d3f88a8a1f892a1fafb7b90f4c257d61b27d3e663b83611a5f2d3d3ff05168089b6ecd980cbc7764d877001feeae3716ad9e3bfcd48cf7af0f30b78cd7b3119040000",
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
      "Mon, 25 Oct 2021 20:16:57 GMT",
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
      jobId: "grouparoo-job-133-1635192891311",
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
      "000002ff8553ef6f9b3010fd5790f7b54920e4b714ad514a57a4866c40d24dd3848c7350b704536cb25555fef79d4dd3b5aab47ec2f6bdbbf7eeddf144ee79b9233392f2fca181faf1d39d48c9190145737c85689b1e96b0a7c1e0cf76737f6b7fcf467e3e9f2382eb2c49f755011d299a9a819c6da26e5e8ba6a2b5101d2cd4715cb7e38cdca133ed4fa68eeb389828a1c8ae79798fe9b74a5572d6eb9dc8bbb9107901b4e2b2cbc4fee5bd77e8f7aa5adc0153b2f796b38734b2f701ebe74230aab828e79b08153412ea049be2056af897ba4bcfdfd6ee72baefe6083e70069431d1944aebc2124c9419cf9bda5425b3276274be3a90c8bbf696b1c544d1eccba4a47b38b37654d1443d56605d86eb95e50797eb70b588fd759044cb2b6fb5e82ed7d79b55105937575ee8598aa605985c6b6e9d9b5b8017e4df8154bc34ecb17ed6cccf0ef9ef07a313905a421b4cc6f6883a137b9a66e998651377986636a4e9241d0fa99bda6c3a80c12e058a7986d464d152940e1dd8ae9d8d92c198bac900dd4da6834996b81370767d7bd8a7639b1ccfc8ef9a2bb8e0b21292b70e919bd08fbd240e37c172117ba6858c3685ba6885e9065e6b54d82082fed3d35147b940266db71fc45eb858c6fed66b277c0d39658fd103ce38a3850444d31acd5350afc40e0d23c162e55d20d84ceceb2928c9ece713d19e6b15af2c7f498f71805aae325f12c5a11f7c31724e882d2d1a0339b40752a1e45bec0d551f7f2112b7b4ad42be6dbcf007699f42c8a086927d3c4d049bc0c77fdb69f3118cbb8f3c52e11d978749cdc26a6897889b7edb6cd7d6cb61fe55456bf52e86833ed9a66be88ab087523db7d46e3e76da9235f20584419c7f60ec3afe058d3b55b27b040000",
    ],
    [
      "ETag",
      "eSVbvCemaN4xVUkh0Xf6Ig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:58 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-133-1635192891311"
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
      "82401085df657a0b8914a542e2855a5b4dfcab624cda18b3c2805860717769638cefde596a6dd336696f6066f86639e7c0119e933c040f3649bc2f511cae62540fba98a12c5325e956f05c2218808ac544ee97d7938e3f095d773bc7fed2c747b75bc6ad161132d862c6c03b4294601a4af09e8e90b30c692de06999e5ebaa33401d0a3d9cfbb3c1f89efa8c87ba1f2f86c37667d8839371590c9962eb8affc7daea64c08e6f6618a1c03c40ada5107c87811a689b9265458aa6e4a508504205570f62c1cb8209ce4d9a98966d9b9663372cf7bae95ab6651199f280a984e7042fe6241014572c9df157b2090e01a22ac971545d5f689c8495135d0ec6be53af047e05485b94a4b8fe1b24c15b46dfe1033b67f09d63192f7375a1ee8693f66fc751a89f47ddb6fdde0f422a8aea82f883516feeb74753cdadcede3b0785722a382529518768d5eacdc68d537bcfb5cb75d6f41e4f89120d0818fd1efd448117b154e2e90d88f5e6927c020000",
    ],
    [
      "ETag",
      "qW2OBTOd99hSeHWTeZ9Cug==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:58 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-134-1635192891311",
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
      "02ff85546b4fdb3014fd2b91f705a43e9ca4af5442acd0c02241cad214c41e6a1dc72986240eb1c38450fffb6e1c0a746c438a94d8e79c7bcfb5efcd13bae3798cc628e2ebfb8a958f9f6e45845a8829b286dd93f9603aa0b35b738ae58338bace8a05b1260707c0e0b54a92ac48595b8aaaa44c8e17f3ceba1455414a21da10a86ddabdb639b0fba6638d1cd3364d104a9626673cbf03f98d52851c77bbdbe49db510eb949182cb0e15d9cb7ef7c1ea16a5b86554c9ee6ece2ea491dd0fb21ea68212c5457eb09883834ab272c932c253f0f02a8da3cfbbb13b9c649d35901f3865845251e5aaf60521a8c813beae4a1d158d9f90f6f9e603cddd33f738348e670b3fdc5b91ac16aff60d228deda265aca0a884a76cc9e3558d2c97c59d7112ccce010107374432b932aebeb8816b182ba9c0ddcaf851616c33e3d098f853633784e71b0bdf77e7a1b177b86f9c06b3c5857174bdc301ef31938ae7da7948a294d5ae9f4fd77b7fa9b5802870d280cb211e1073849d2889863419d9fd28c12c8a46d1b04fec0853a7c77a71c408e8541d5dab482ef221059c3949128d68cf899c384906185696dd8f9dbe65e198d9c32175d0a6857e955cb129978590bc3961741578a1bb0c83857f3c095d5d4642aa544d1b7375116f7d2a281248ffa96b53a35c40a6faba3c3f7483c971e85dba4d879cb135a18ff37be89184a492019b9424638a95e72286434317b3b9177a337f72060a7ded175b8644e3ef4faf82f0b1d0a7acf41b85de39dcd1e4fc427bd8922e495a69d643f3812c6ce136b6da663f34adb1698fcd5e0763fc0d6d36ad7f079f04c1e41a0c91b2248f7f6050e4a057cbff9255f3f5aa31bf7561a23adb8ba79d556f6735409b9f1b785a0886b0c98cbe2edce01a355b014b58c972fa71c30159031fff4cb6830d64186dc80343a238f4379575165ab2a6cf79a66bd16a1b9b0ec616d2e452bdc34cd3da5e681da38ec83296abe7929ac1d6a75843957c210108ede97bfe29a0bf01158ce0f05a050000",
    ],
    [
      "ETag",
      "FS6D6cOj1D0svoBYmpUa2A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:59 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-134-1635192891311"
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
      "d1",
      "4e",
      "c2",
      "40",
      "10",
      "fc",
      "97",
      "f5",
      "b58d1e5503243c00122541a245121343c8712ca5a5edd6bb2d8610fe9dbd427cf2c197bbd9d999cbcc1d6197966be8c22a4dbe6bb4879b04f9dd83185d9db393aba2d2210480ac1351dece5ae9965edbfb6cbc374f9fbbe1b6dfcf925e4f14ce6cb1d0d03dc226c57ceda0fb7584521728365d505db288f850f9793cfd183d8f62210a5a7b623a9f4cfa83c9084ec1af69b9ac76ffb22c4e0164b48a7183164b833e43652943c3635fcfe9a2ca3174545b830e1a71b3482cd595b644a130a18aee43f5183da84eabdd519152a2ccc9684ea914f17c26e18089751ed38fd48396086c03a5e9a639f70ded4b5cd1c2e3bf76caef16d707070746f76649e239f4c9ee2e2987e493b334625b630046cb27bfa47c994f6713cc7164c1010000",
    ],
    [
      "ETag",
      "/S2ihoM8vjIvcDXkChAAjg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:16:59 GMT",
      "Server",
      "ESF",
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
      "82300000d0bb646d18a082d09d88a00511f9d4ea8609218d14911802829ddebd4eaf51df1dde37401893b6cd4453910b780523524d094b1e332c875251ec29172ad59c901ae5a0ab10f976cfa27563c4fe797caf0d18dd14fbb094f7b92bbbbaa28fb3ce63b63d20c7c2eab624759af4f863af7bc196f1e92c36165f3854e6060cd4fca485de70a86ef3f3c923f08e63ab19433c562210b76343345d1c0bed3a7debf01d3671a61491ab7da68b8db3ae798cae4c9ec6759e2f51d852dee3d5a92f220b25ae3e23f4ba815d670699eaf9bb154cb3c2bc6c71b2f4a5a7a7ff0b4c001958c9499b958fed2f9a694ec05ffd4c8c8c3cfe5b0471c2c1cf2f3e80c70819040000",
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
      "Mon, 25 Oct 2021 20:17:00 GMT",
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
      jobId: "grouparoo-job-135-1635192891311",
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
      "ff85536b6f9b3014fd2bc8fbda84674212295aa394ae4809e980b47b6842c618ea1630c5a65b55e5bfef629aae55a5f513b6ef39f79cfbe009ddb13a430b94b2e2bea3ede3a75b9ea21344252ee0f54f565db8e59d613a53c7eacc1fedb7a28956cb252058cf12b86a4a3a12bc6b09158b7d342e5ade35b8e57c048946a63d1999537b62ceadd9dcb44d13888296f986d57740bf91b2110b5d3f8a8f0bce8b92e2868931e1d5cbbbfe60e94dcb6f2991427faba9838cd03f50fd5c728225e3f5721f81834ed036a115662578f847cdd2d3b7b9c70c57e302c00f8c504c08ef6ad9fb821484d7392bba5665458b27a47cbe3aa0c8db78eb5823bcecaa3aa971454fb40c4b9cc8c7866ae7e16eabf9c1f92edcae627f1724d1fac2dbaec6ebdd66bf0d22edfac20b3d4de2b4a48aab2db553750be002fa191592d54a3dee9f7be5e70ef9ef07d313405ad02198b8c6149b33639ee6a94bf2993d497383a6e92c7527d84e0d3277a893a514034f892a16ae798d1d820d23cb1232cdf3c4b12c37999b8e9958eeccb0276e4e486ea2c309fadd3249cf9868b8604387d075e8c75e1287fb60bd8a3d55428ebb529e0dc6fa025e7b94502080fe53d3a18f320e4a7dbbfd20f6c2d53af6afbc61c21b5a60f218ddc38c735c0a0a68dc42f3246db73c8386a160b5f5ce00ac2676790c0ab4f8f984fa9ef72e5eb5fc851ec3007bbb527d5114877ef045d93922ae70d929c8c370400d58be81dac0f5e11720614b872ce8ebde0bbfa3e129a4396d694d3e9e268055e0e3bfedb8f90086dd071d21e10ecb4344af425a3a2c1153f50e6cdbb00c736a20056ee5bb9835378f6deb73f41969456bf95cd2b0f950e920d68917100461fe816ad7e12fbf5da47d7b040000",
    ],
    [
      "ETag",
      "xdmH7lk014642u1ZrXgpSA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:17:00 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-135-1635192891311"
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
      "0000000002ff8d92dd4ec2401085df65bc2d91f24f132e8aa2100a22146f0c214b3b2dc56db7ee6e3584f0eece5644a3267ad3ce4cbfd99e73da033c2559080e6c92f8b940b9bf8851df9b628eaae05ad12d179942b000358b0d99ef6aed71fdb2d1192663ee47eec3d02be25e8f08156c3165e01c204a90870a9cc703642c455a0b042fd26c5d7616e87d6e860b7f3e9ade529f8ad0f4d3a5e7b97d6f0047ebbc1832cdd625ff8fb5d5d1829dd8cc3142895980464b2ec50e033d3236154b738e15250a19a082122e1fc45214399342546852b1ebcd8addaa37ed6eadd3b5ebb64d241701d389c8085e2e482068a1199f8b57b2092d02645992e3a8bcbed038094b27a61c4dfd56a314f815206d51c271fd374882b78cbec30776cae03bc7525164fa4cdd7877ee6fc751a89f475dbbfee007a134457546fcd164b0f0ddc9cc70ab93f7fe5ea39a4941492a3421dad546a7d96e55df73bd12266b7a8fa3658116048c7e8f61a2c1891857787c035c0a76557c020000",
    ],
    [
      "ETag",
      "bpj27K3/48HiKlTfAVHLug==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:17:01 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-136-1635192891311",
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
      "2ac8fba795f203424248a4aa630dedd0529211d2aedaa6c418937a054cb1e95655f9ee3b4cd336ebb64a4870bef7eebdb3cf3ca01b96c7688c22b6b9ad6879ffee078f500b518937f56a867f7d49278b6991f79cd8acaee69ff4c0393a0204ab590267454adb825725a162bc5c743625af0a5c72de86426dc3b4da86650e8c51cf1e19a6610051d03499b2fc06e8d7521662dcedeec43b1bce3729c505131dc2b3a7f5ee5daf5b94fc07255274f735bb2023ba6fa81ea79c60c9787eb45c80834ad0724533cc52f0f04c8da3f7fbb53b0c679d0d80ef18a198105ee5b2f6052508cf13b6a94a55158d1f90f2f9e2032ddca97b126a27b3a51f1eac715693d7871a16da2e68696b682a61295db1785d6756abe2463b0d66e7900107d75850b1d62e3fba81ab3dd1b46f95ae9b543bd61c7fa2edd7f07c6de9fbee22d40e8e0fb5b360b69c6b1faef630603ea642b25c590f7194d2daf6e3f67aaf4fb5266009569ae46aa85bd8b0f55194444392d8e6204a741a4576341c6033d2c9a84ffb714431f0645d5db170ce733248621c1b86492c1b9b31d6495fb7a27894f48911d903620ee3616cdb23b46da19f259374c244c1056bb6185d065ee8aec260e99f38a1abda487095ca4963ae6ee2a54f094d02e83f7d6deb2ce3a0549f97e7876ee09c84de85db8cc8946e30b95fdcc29024381514d0b8c41995b43ce7316c1a9acf165ee8cd7c670a0c75eef31d42a0f1d7876742785fa85d96ea8d4ea73327b4facac10e7281d34a61ee9a0f64740680d8b6fe5dc60902e70aa47159e2fb3f72d08ea5e87f5150781535369f1451adb68b7a7b517f2fb2d0f6fb169e1682fbd628a3cf4b37b842cd5240135ad29cbc3d5a005689b7ff1bbb3b0c60b8c5a02324",
      "c430c944d42aa4a4cd44b34cf5a2d8a6de337a968d14b894af72a6dddb1d5d5da3ae48339acbc7969a3bac76b14e55e20904491844dff3cf20fb1b3149a3dd45050000",
    ],
    [
      "ETag",
      "bmaxXlDSLpn2Ad3uYPK0RA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:17:01 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-136-1635192891311"
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
      "6b",
      "c2",
      "4010fd2fd36b42bba64a153ca80dad10a48da6148ac89a4cd268924977371511ffbbb351f4d04b2fbb33ef837d8f3dc036af1218c03acf7e1a54fbbb0ccdbb1d42d44d61345f35551ac10134326365f01ca6f3eee41e47d17cf7d18b70f159f8bbe190153afec652c2e000698e45a261f075804a96c8365952531916997d6df7e96ce1bff82103252516984541301a073e1c9dab69b5aab7ffb22c8f0e6c681d628a0aab186d865ad1066333b5f5b42ceb025d4d8d8a51432b6e894c51534b45e432e20aafe78a9ed715fdce535f7842b0b2a0589a9c2a1647730e07868c2c42da713df058a0da919ba6edf9cb70a72d71999676be71e2ca3dfee16e3e61b9e5e5b1f1dea07e53c4d135dad40fe70613b2ad0cb735aa410762c91ff09a9bf37e3c013a789d93dd010000",
    ],
    [
      "ETag",
      "LDRfS5C/eAUSwV6UeTXlEw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:17:01 GMT",
      "Server",
      "ESF",
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
      "08000000000002ffedd34b7282300000d0bb64ad0e859190ee08020aad14b010ba61688c1040f9840ad2e9ddebf41af5dde17d838c5226443a3415bb806770cb64b4a22bb7d5b095f3cee65a61d638f63d9d0d1eb12a8506c2612f6bd356cfaad6c14ad2c6115a4350095b95d1b62edf8eea65ecfcce5c9ed62c1c1c1fd6e15937b4bd45929dd7f627e3f8a95d05d9ccfc094b1f35dd7c89844d917180cab9a152591e8c7a849c5cf64d322112e9b0cb7b6c1fe66c898cb890508f95e6b4f5b6f27b1eed288db350547afcbaf3a34cba71683996e1c9d7d951b1dbea5390102999881317a35bad1e1efe2fb0006c6a79cf44caefdb9535420bf0573f1d6e2dbbffc72ceb590f7e7e019f1cabe119040000",
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
      "Mon, 25 Oct 2021 20:17:02 GMT",
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
      jobId: "grouparoo-job-137-1635192891311",
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
      "9b3014fd2bc8fbda243c022191a2354be91a2d90959056d53421630c750b986293aaabf2df77314dd7aad2fa09dbf79c7bce7df08cee5995a2194a58fed0d2e6e9cb1d4fd009a212e7f06afafee43232ef1e97374d78f923ffb6fba34ff3f91c10ac63095cd6051d08de36848ad96e3bcc1bded6b8e17c008906863519188e651b53d39d1a96610051d0225bb3ea1ee8b752d662361a1dc58739e7794171cdc490f0f2f57db4374775c3ef289162f45e73043262f489ead782132c19afe6bb2d3868056d625a625680877fd434397d9f7bc87039cc01bc67846242785bc9ce17a420bcca58de362a2b9a3d23e5f3cd016dbdb5b78c34c28bb6ace20a97f4444bb1c4b17caaa9761e6e7c6d159c6f427f11ad3641bc5d5e78fe62b8dcac777eb0d5ae2fbcd0d3244e0aaab8da5c3b55b7002ea09f522159a5d4a3eeb9537ee9d0eae3603a02480bda07e389ee60c3d5a749964c48e65a7692e93449dc6462632bd1c9744cc7694231f094a862e18a57639d38d32c736283ba7a3c76532b4e5cc78e271921ae3db54d27d5d1e1043d364cd233266a2e58df21741dae222f8ec25db05c449e2a21c36d21cf7a635d016f3d4a281040ffa9e9d0451907a5aeddab20f2c2c5325a5d79fd84d734c7e469fb0033ce702128a07103cd93b4f1790a0d43c1c2f7ce00ac26f6f3181468f6eb19753def5cbc69f92b3d82017676a5faa26d14ae82efcace1171858b5641f6fd01d560f9166a03d787df80842dedb3a0cb9d17dea0fe29a4196d68453e9f268055e0f3bfedb8f90086dd071d21e10ecb4344a7421ada2f1153f5f66c4b374dd3b1910237f243cc72ed63dbba1c5d465ad24abe94d46f3e54da8bb5e2150441987fa0da75f80bb591a1ad7b040000",
    ],
    [
      "ETag",
      "2MM7QT2jwCYrRQKgBUz09g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:17:02 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-137-1635192891311"
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
      "83",
      "40",
      "10",
      "45",
      "ff",
      "65",
      "7c8528a2b425f1a1d5aa4d68b5141313d3342b0c485d767177519ba6ffee2cd66ad4445f606638b3dc7b610d8fa5c82084fbb2786a50adf60a34535bc4a81b6e34dd6a29348203685841242f84bf3f58f9a73ce2387d1549b6bc8d8b93132274fa801583700d79893cd310dead41b00a692d95bca9c4a2ed1c30abda0e67493c9a5c505fc9ccf6939b28ea0fa2216c9cdd62c60c5bb4fc3fd6e61b0796f23ec61c158a14ad965ac925a666646d6a56d51c5d2d1b95a286166e1f144a36355352ba34713dbfe37a817fecf50ebb3dcff73c22b94c9929a520f8664602c148c3782c5fc8260404a8b624c7797b7da67199b54e6c399a24c1512bf02b40daf292e3e26f90043f30fa0e1fd83683ef1cab6423cc8e3a8faefabf1d47a17e1e75d64f863f086d28aa1d928cc6c359d21f5f5b6ebef53e5819d4d74a52921a6d88dec151f7b8131cbce77a2a6dd6f49ed0a8061d4819fd1e97a58130675ce3e60d98f2add97c020000",
    ],
    [
      "ETag",
      "lgn3/By3ClLleQxnTdjXRg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:17:03 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-138-1635192891311",
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
      "8554fd4fdb3010fd5722ef17d0fa91346dfa2121d6958c452a2924290c6d536b3b4e30a471891da60ef57fdf39a18c0a36a44acde5debbf7ee7cce23bae3798c4688f0f4be64c5e6c3ad20a88198c229bc0d2fbe85b74ee6754e4fcbb3b2c0f7aafbfb637a740408ae5912afd6196b4a511694c9d13c6ca58528d7b810a209859a963d685a8eddb3869dc1d0b22d0b889265c994e77740bf516a2d47edf64ebc950a91660cafb96c51b17a7edf7ee8b4d785b86554c9f6be661b6464fb1dd5e34c50acb8c88fe6213828252b166c8579061efe5263f269bf768be3552b05f003a70c532aca5c695f50828a3ce1294c445745a34754f97cf1804277ea4e2263329bfbd1c112af347979686069ec8286b184a6129eb1058f973ab358acef8c2fc1ec0c32e0e0064b2697c6d55737700d63a9413f4ad3b4a9716c8cfd13639feff9c6dcf7dd30320e8e0f8dd360363f373e5fef61c078cca4e279653bc22463daf2d368bdd727aa0958818d3ab9e89b0eb606e69024a44f9381dd2389c90819907e0fdbc4a4c32eebc68461e0295dbd62e15ce48ed5632c714842a1841d533cec114292c4b4fa3d96d824ee30d376e221da36d0af822b76c2e55a485e8f175d055ee42ea260ee4fc6915bb591e0325327b539ddc44b9f0a9a04d07ffadaea2c17a0a4cfcaf32337184f22efd2add763ca524c37e13d2c488233c9008d0bbc628a15672286a1a1f359e845decc1f4f81519df9f90e21d1e8fbe35f42b459575356d5bfd672ba95fe0e7089b3b2423cd40fc8eaa1edb6f1ef12e320185f832c2e0abc79bbfc9bf52b7c15d5169ff59056db459dbda8bb173968fb730bbf06827b562ba38bb91b5ca3fa55c01256b09cbebf5600ae12ef7f2f767717c0707b41472a88618ba9d42ab460f536f355d54bc5b6cd8e6df54d54810bf52a6777ecddb1e91aba225bb15c3db554dfdd6a8a3a55ca67102461097dcf3f85ec1fb79fc14c3d050000",
    ],
    [
      "ETag",
      "SQXSj6lI2GGuMuraqt4z+g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:17:03 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-138-1635192891311"
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
      "4b",
      "c3",
      "30",
      "14fd2fd7d716ccaab20df6b0b9a2c331b43a86c81859779b766b7b63922a65ecbf7bd3894f22be24f79e0f720e39c2a1a87730846da1de1b34ed8542f7e487046d533acb97a6da2204804e2a562ef2ed6a9a94e3d769247399adda07a5951a8d5861d31c2b09c3236405963b0bc3b723d4b242b6c98a9adab1c8b5daefb3c54b7c17270c54b4f3c062399f8f27f3184ec18f69b3d1877f59d6a700f6b44d304383758a3e8336b4c7d4cd7c3d2b2b5d6268a931295ae8c41da10c355a1aa290915044fd50dc44d762d0eb0f4424042b4b4aa52ba866f1f299c3812327cb843eb91e442c30ddc84db3eefce8605fc24fbd2edbef9cf883bbf2dcfafbb149ebd03e1ae2e8167deacb73835bf2ad1cb775a6c10052c91f705fb8f37efa0258ac0e24dd010000",
    ],
    [
      "ETag",
      "NhbWDRlAYD3ahafWyKgpgg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:17:03 GMT",
      "Server",
      "ESF",
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
      "7282300000d0bbe45b1d0482a47f511665e9b05835fe302c0129480341043bbd7b9d5ea3be3bbc6f10a729e53ceabf2ada803730c5225aa40b9ba96ba328eb4fa3a83c5181484b8f532dd75d5f60f1c4991004a71b56c20f896ef64b618097dbb5e21669c3a18da78058d30e0ffec0eab01e97830e0fc7b325bb8eab66324cdd706e4333d9ea51fb50c6ab061dd960c63c3a2ce9fe2c22af3613b7cd95926c2e1ad1b1e91378e716a2e34e7d67118f25cf22321105d56f6c39cb252c55abd3dd4f2a1ddf60ee6c7bef90acb9b3eac4cbdecb4ccdd8351dc37e8ad461f1f2f27f8119a0232b3bcaa3f2b95d8208cdc05ffda89f187dfe5fd3b8a31df8f905287133e119040000",
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
      "Mon, 25 Oct 2021 20:17:04 GMT",
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
      jobId: "grouparoo-job-139-1635192891311",
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
      "ff85536b6f9b3014fd2bc8fbda3cc81322456b96d225524236425a4dd3848cb950b704536c524555fefbae4dd3b5aab47ec2f63de79e731f3c93075e246442629e3dd6501dbfdc8b985c105034c3d7a76f8e18afe70e4d1622719d95b3288eea693a4504d72c49f7650e2d29ea8a819cecb6edac1275492b215a98a865f7dd963dea0f6db7e7b876dfb69128214f57bc7840fa9d52a59c743a67f176264496032db96c33b17f7def1c7a9db212f7c094ecbcd7eca08cec7ca2fa35178c2a2e8ae96e8b0e6a0955047bca73f4f08f9ac497ef73b739ddb733041f3803ca98a80ba57d610a268a94677565b292c933313edf1cc8d65b79f3d06222aff74554d03d5c5809553452c712aceb60b3b696fef52658cfc2e5c68fb6f385b79eb5e79bd56eed6faddb85177896a2710e866b4dad4b73f3f182fa0948c50ba31eea67adfcd2a1e5c7c168024a4b6882d1b83ba2b6d375e3341eb3d4e90fe3b40b71ecc4e321edc75de60e6090c4409167440d8b16a2604c135c3b7247bd513470633ba2147ad1c84e7a6ed7499ce1c026a70bf2547105575c9642f2a643e43658865e14063b7f3e0b3d53424aeb5c5d35c674016f3d2a2c1041ffa9e9a4a35ca0926ef7d20fbd60360f97375e33e11564941db78f38e394e612104d2b6c9e826a2d126c18f1676bef0ac166623fce414926bf9f89eeb976f1a6e5aff41007a8ed2af325db3058fadf8d9d33e286e6b5811c9a0329d1f21dd686ae4f7f10895bda64213f775ef08b344f01a45041c13e9f26824de0f3bfedbcf908c6dd471da9f08ecbc3a4566115344bc44dbd0dbbdfed0dface881870a53ec486f6f8dc369d4367843d14eaa5a466f3b1d246ac96af200ce2fc7dd3aed35f951ad4b37b040000",
    ],
    [
      "ETag",
      "wB8o7MC8adHod98L8Hnytw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:17:04 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-139-1635192891311"
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
      "00000002ff8d925b4f83401085ffcbf84a9362ef243e60adb5b156a56834c6345b182a1518dc4bb569fadf9d45ad464df40566866f96730e6ce0312d62f0609e2e9e0ccaf5de02f5a52d025426d38a6f25150ac101d462c1648b56b727a63bbd6e954373daef44dd9b97ba7f70c0848a1e3017e06d2049318b1578771b28448ebc165166f26256750ee8756987d330184d86dce714db7e72351efb87e3016c9ddd622cb49855fc3fd6eeb70e2c691e6082128b08ad9652d212233db23695c8cb0c6b8a8c8c504105570f16924c2924518d2735b7d1abb9ed46cbeded777b6ec37599cc28123aa582e1ab290b044d5a64013db34d683320ab921d27d575c5e334ae9cd8723409dbcd4ae05780b5256986b3bf4116fc20f83b7c60ef197ce7444ea6d03bea787ceeff761c87fa79d4911f0e7e104a73543b241c9d0da6a17f7661b9fb77ef876b8dea421227a9d086e8d69bdd56a75d7fcbb54f366b7e8fa7a5410722c1bfc749aac14b44a670fb0ab0a68ef97c020000",
    ],
    [
      "ETag",
      "5ovYHu8SV5pGuKC7c8Xx0A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:17:07 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-140-1635192891311",
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
      "0000000002ff8554fd6fa24010fd57c8de2f6da202820a264dcf2ad723b16811daf43ea20b2e765b6429bbd8788dfffb0d4b6d6befa30909ccce7bf3deeccef284ee69b6447d14d1d543498aeda73b16a1062202af60b5ec6ca6bd91ea1bcba07cfc75196afeb733f6787202085ab1385ee7296972561631e1fd70d65a15accc71c158130a3575536bea5da3a3db6dcbd60d5d0722276932a6d93dd06f85c8795f55f7e2ad1563ab94e09cf256ccd62febeaa6ade605bb23b1e0eaa1a60a325cfd40f534653116946527e10c1c949c1473b2c634050fafd465f4f9b0768be2756b05e00d8d098e635666a2f20525629625745516b22aea3f21e9f3cd079a3963671828c349e805470bbcaec88b630573651f3494053495d094cce9725165e6f3fc5ef9e24f2e20030e6e31277ca15c7f757c47795d5a283f4a4d3362e554197823e5b08aeb29a1e739b340393a3d56cefd493855ce6e0e30607f49b8a099341fe0282595f1e70d76ff3cd78a800528d7c9794feb62ddd2ec28897a7162199d28d148145951af838d488b6d9398cb8860e089aaba64e18c65b66e0271695a4642a238b2bb56cfb04d6c5b9161f74c53b3cc76cf30cc36da35d063410519519e334eeb4d46d7be1b38f3c00fbde12070641b092e5331aacd554dbcf529a04900fda7af5d95a50c94aa1373bdc0f107c3c0bd72ea211993158eb7b307189304a79c001a17784d04292ed812360d4d2733377027de600c0c79f2d33d82a3fef7a75742b0cde52e0bf946b3c077bd7369608fb8c26929219bfa030d72f08a76bbc6bfcb0c7c7f7003d2b828f0f65d0edae99a15fd2f12122fa3dae65e524795da3e6a1f44e641d445bb9f3b781a086e5cad8c2e43c7bf41f5924f1252902cfe78b4002c131fff39f6b718c0708f41870b886192635ea9c405a9279aae652f926d68ed9ed591ff1d810bf13e67699abd3fbaaa465591ac49269e5baa6fb1dcc52a55f217102461103d798abbdf52a36e2347050000",
    ],
    [
      "ETag",
      "u5vP7D/R3dTuwzQU0RZBow==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:17:08 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-140-1635192891311"
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
      "4fc2401085ffcb78b44da82001120e60aa121b22558cd118b2b44369693bebee6c4c43fadf9922f1ec69f7bdf966f6cd1ee190d7294c609b67df0e4d739521afba4b8cd6956ce5d0545b040f905526a4dbdf9bd9eac3e8c2c5a3a7c1754cef6fc3d5742a844df65829981c619763995a987c1ea156154a9baac8d52c1037bad38be56bf810c662549476c6721d45b3791442ebfd356d36faf0af96afd68382b631eed0609d6097411b2a30e145b79e55952ed1b7e44c8216cef0b99019725a19225f1c3f18f4fc60d8bf0dc637a371d00f02214b4a14e7540bbc7e9170c0c4aa8ce947d6831e5cf4bc61b4cf8664bac5f452919177d43dcc12888d430f12257ff498f3af6e4fc77791b080010000",
    ],
    [
      "ETag",
      "uhFrAQZrpjuR8K4+RoXV6Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:17:08 GMT",
      "Server",
      "ESF",
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
      "edd34b7282300000d0bb642d0e9ff2ebce50050101b584ea26039842c02210e4d7e9ddebf41af5dde17d83384d0963b8bb95a402af608a457d992e9d5a839b2cabdede65dae57650a99db8896d26bca8b81857c7e02047dbfa2eb9c23c6866ec84bc852f8ac7cf536114e711614ed13c8b42d54790f61194a3924f88391ab9913beb6ebd5b8d14d3cf2c0bd1a0ec594086a8163f5c3663824e95bd87827a31e7a9be87c51637e3ae09e1404cf1ec49e8c0a522bcfaa5a929e54cdc33cb8ffa519ea4d2faea51255d1b34d113d7a47ea87a3718244d1b27f65e527ba729a2e5d3d3ff0516808c356d09c3f4b15d92757d01feeae36eaac9e33f24714b5af0f30bfd04cedf19040000",
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
      "Mon, 25 Oct 2021 20:17:08 GMT",
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
      jobId: "grouparoo-job-141-1635192891311",
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
      "000000000002ff85536b6f9b3014fd2bc8fbda8410c8538ad62ca55db484ac84b4daa60919e742dd124cb149d555f9efbb364dd76ed2fa09dbf79c7bce7df044ee78b1256392f0ecbe86eaf1c3ad48c8090145337c0df6f6a0fe7ef3f0250816bf2e3e29766dabd5e5648208ae5992eeca1c5a52d4150339deacdb5925ea925642b43051cbf19c96d3777bcea83b1c39aee32051429e2e787187f41ba54a39b6eda3783b1322cb81965cb699d8bdbcdbfbae5d56e2169892f65b4d1b65a4fd8eeac75c30aab828269b353aa8255431ec28cfd1c31fea36397d9bbbcde9ae9d2178cf1950c6445d28ed0b533051a43cab2b93958c9f88f1f9ea40d6fec29f45161379bd2be282eee0c4da524563f55882751eae96d63c385f85cb69345f05f17af6d95f4edbb3d562b30cd6d6f5673ff42d45931c0cd79a58a7e616e005f5b720152f8c7aa49fb5f27387e6ff0e4613505a42138c079d3e75869d51922603960edd5e9276204986c9a047dda4c3461e78db0428f28ca861d14214d04b47dd7e87c68ee7f563afdbf5e291db1fc6c9b0c35cd64dc173811c4ec843c5159c71590ac99b0e91eb701ef971146e82d934f24d0929ad7375d618d305bcf6a8b04004fda7a6838e72814abaddf320f2c3e92c9a5ff9cd84179051f6b8bec719a7349780685a61f314544bb105bddcd3a57f866033b1afc7a024e31f4f44f75cbb78d5f2177a8403d47695f9927514ce830b63e788b8a2796d20fbe6404ab47c83b5a1ebc34f44e2963659c8e5c60fbf91e62984142a28d8fbd344b009bcffb71d371fc1b8fba82315de717998d42aac826689b8a9b761bb1de40f06c4802bf5776ce474fbc7b6e91c3a23eca050cf25359b8f953662b57c016110e71f98761d7e034a211c7d7b040000",
    ],
    [
      "ETag",
      "Nv/7uZhwKNNLzGBtcW/tOQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:17:09 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-141-1635192891311"
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
      "0002ff8d92614fc2400c86ffcbf975244c60c2123e80022e0ed431128d21e4d8ba31d8d671779310c27fb737118d9ae8975bdb3deddebebb03db2479c86cb64ce26d09627f11837ad48107b24c95a44781b9046630503c26d2da74acbb60f4ccd1d93e8dfd783b5cb9f55db74b840c569071661f5894401a4a66bf1c58ce33a0b600d332cb17556630b52f7471ea7bce64447986a1ce2733d7edf5dd013b1ae7c6902bbea8f87fb4cd8f065be3d2830804e401682d85c03504cad16b4a9e1529d424962200c92ab87a110b2c0b2e106b54a9994db3665a8d96d9b96c77cc8669129962c0558239c1b32909640a154f3ddc496d0a01a20a69e3a83a5fa99c84d5263a7426bed5ac047e05485b94a4b0f81b24c12b4effe1033b79f09de31996b93a5343f7bef7db3832f573d44dcf1ffc20a422abce88ef8c0753bf377ed0dcfcb47b7faf403e082427256813cd7ab3ddbab2eaefbe5ea3f69abe632b5182c1024ed7e33651cc8e782ae1f8063bb67a347c020000",
    ],
    [
      "ETag",
      "6k96KcGYaoIqXMTgqFhL0w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:17:09 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-142-1635192891311",
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
      "10fd5722ef17d0fa91a44dbf24c40a645b4449214d41d536b58ee314431a87d829aa50fff79d1d0a746c43aa549fefbd7bef7c769ed03dcb623440115b3e94b4d87cbae311aa212af112763f4f5c21d6f9f95d3f3d5f078febbe3c716757474780608a25f02a4f695df0b220540ca693c6b2e0658e0bceeb50a86eb5edbad5693956dfeef5ad96650151d03419b1ec1ee8b752e662d06ceec41b4bce9729c539130dc2572ffbcdb5ddcc0b7e478914cd7dcd26c888e607aac7292758329e1d4d27e0a014b498d31566297878a5c6d197fdda0d86578d2580d78c504c082f33a97c4109c2b3842dcb4257458327a47dbe59a0893b724f43e3743cf5c383055e29f2e2d0c0c2d8053563014d252ca573162f54663ecfef8dafc1f80232e0e0160b2a16c6cd7737708dd7ad85f1b334cd16318e8da17f66ec57f17c63eafbee24340e8e0f8d6fc1787a699cccf630603fa642b24c9b0f71945265fcf980bdf77355042c41b94acebb66075b3db31f25519724bd961325268da25ed475702b3249bf4ddb714431f0a4aaae5938e359941033892c12774da7db724c58916e6cd90e8ee22eb163185ac7744c82b635f4583049cf98c8b960d521a39bc00bdd79184cfdd361e8ea36125ca6f2ac32a79a78eb53429300fa4f5f5b95651c94d4c43c3f7483e169e85dbbd52519d125269bc9035c9304a782021a177845252d2e780c87862ec7132ff4c6fe70040c3df9cb1d42a0c18fa75742b8c9f5294bfd8f2661e0f9dfb4811de21aa7a586acab05c2397845db6deddf658641309c81342e0abcf92307ed74da8afe17098dd7516573276921a5b68becbda8bd1775d0f6d7167e35042fae524657533798a16a2ba0092d68463ebe5a00d6898fbf1cbb570c6078c7a02324c4709389502aa4a0d58d662bdd8b66b7cc96",
      "69f66da4c1857c97b36d67373a554355a42b9ac9e796aa57ac4f51a54af10282245c445f4f71fb1b90a317a947050000",
    ],
    [
      "ETag",
      "+SEssvpKj9lKvRwv9tBEYQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:17:10 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-142-1635192891311"
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
      "4fc24010fd2fe3b54ddc1608907810ad0869885421268690a51d6aa1edd6dd29a612febbb3c510132f5e7667de47f6bdec11f65999c0103659fa51a36eae52a4b91d2234754e86af4a9506c1012499b2b2bfa4e06b2a37aff787076fdc2ca761b2a3f9cd0d2b4cfc8e8584e111b619e68981e1db114a5920db64a1ea9258444d65f7c9ec2518071103854a2c305b84e1ed280ce0e45c4ceb75b5ff9765757260a736116e516319a3cd5069b5c39826b69e914595a36b54ad6334d08a5b22d5aaaea456ca65c4151dcf153dbf2b065e7f207c215899ab5852a64a162f9e391c90229947ea93eb81cf02dd8edc74db9e0786bb6d093b796db6df5cefc2893f9c7fe13a965bfd3c366a08cd93561cdda04d7d7d6e70a76c2be2b6a46b742096fc018f199df7d337e885d8dedd010000",
    ],
    [
      "ETag",
      "8VtEzJabXDvF2GyVJLdjtQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:17:10 GMT",
      "Server",
      "ESF",
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
      "ffedd34b7282300000d0bb642dce28bfd29d24200215aba915379980814645034991b4d3bbd7e935eabbc3fb06b42c9994445d4fec029e81a6536f5c8e13f1e487352fb6641f6c1042922d2d34c076d12ee7f5355dd353dfbf9d8384846999a65ae63ba582d359ac609193cdf6936e426c5331884ce14217de39c6fb5e18fe214b2565a176a8823729d7d3c80b5cf9359d988d9123cb7523bf91c9a58de762e2e5d921714dc82cde3b817ea9560e5f84a63e5670bb4a8eec2697bb776ac41f338c606c9b4345620ba7d1809bcae1333e393835864d898c4829fa5ad59d7d193f3cfc5f6004d82078c724e1f7eda6ed7923f0579f282dd8fdbfcf68c73af0f30bed73f7b919040000",
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
      "Mon, 25 Oct 2021 20:17:10 GMT",
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
      jobId: "grouparoo-job-143-1635192891311",
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
      "6f9b3014fd2bc8fbda04685e2452b466295d2325a425a4dd344dc83617ea8c608a4dabaaca7fdfc5345dbb49eb276cdf73ee39f7c133f9258a844c0813d97d0dd5d3a79d64e48480a619beee52f6cd29e6cbe8fad1bbfa52ede8a518d98fd3292244c352745fe6d051b2ae38a8c976d3cd2a5997b492b283893a6ebfd77187bd813b3ef5c66ecf7591a8204f97a2f885f43bad4b35b1eda378379332cb81964275b9dcbfbedb0fa77659c91d70adecf79a36ca28fb03d5cfb9e4540b594cb71b74502ba862d85391a3873fd4849dbdcfdd1574dfcd10fc203850ce655de8c617a6e0b248455657262b993c13e3f3cd816cfca53f8f2c2ef37a5fc405ddc38995504d63fd54827511ae57d622b85887ab59b45807f1667ee9af66ddf97ab95d051bebf6d20f7d4b539683e15a53ebccdc02bca07e024a8bc2a847cd73a3fcd2a1c5bf83690828ada00dc62367485dcf19b3948d78eaf5062c7580318f8d06b4c71c3eee433f61409167440d8b1658331fbafd11a3b19b8e58dc1f7a494c537063873b091df0d351ca18399c90c74a683817aa944ab41d22b7e122f2e328dc06f359e49b12525ae7fabc35d614f0d6a3c60211f49f9a0e4d5448546adabd08223f9ccda3c58ddf4e780919e54f9b7b9c714a730588a615364f43b59209368c04b3957f8e6033b1ab635091c98f67d2f4bc71f1a6e5aff40807d8d8d5e64b3651b808be1a3b47c40dcd6b0379680fa444cb77581bba3efc44246e699b855c6ffdf03b699f4248a182827f3c4d049bc0c77fdb71f3118cbb8f3a4ae31d9787ab468557d02e9130f5b6ec9ed373c6038f1870a5ff8eb98ed73fb6adc9d164843d14faa5a476f3b1d256ac56af200ce2fc03d3aec36fe0a38a037b040000",
    ],
    [
      "ETag",
      "jfbX0nCLTQw8PBrjaHi7/w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:17:11 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-143-1635192891311"
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
      "8d925b6f82401085ffcbf41513a9972a890fdaa235c14b15d387c6980506c4028bbb4b2d31fef7ce526b9bb649fb0233c337cb39078ef01c670158e0c5d1be40515e45a81e74b14059244ad22de799443000158b880c42ef653694fba6b7b7ebe5dc290e8fafa343af4784f4b79832b08e10c6980412aca723642c455af37952a4d9a6ea0c5065ae874b77319e8ea84f79a0fbe9ca71fa03c7869371590c98629b8affc7dafa64c08e7b0b0c5160e6a3d6920bbe435f8db54dc9d23cc19ae485f0514205570f22c18b9c09ce6b34a999cd46cd6c375a66f7bad3351ba64964c27da6629e11bc5a9240505cb164c10f6413da0488aa24c761757da1711c544e74399ebaed6625f02b40dac238c1cddf2009de32fa0e1fd83983ef1c4b7991a90b357466fddf8ea3503f8fbaebbbf60f422a8aea82b8e389bd74fb93b9e6d667ef8352a19c0b4e494ad4219af566a775d3aebfe77acb75d6f41e4b89020df019fd1ef7b1022b6489c4d31b1e30a5a07c020000",
    ],
    [
      "ETag",
      "dfbvOFsq4bqE0yPLuwWxGw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:17:11 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-144-1635192891311",
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
      "c8fbd26a4980400844aabaac616da494b484b48ab6293160a85bc029369da22aff7d6768da64dd560909ec7befdebbf39967f4408b180d5048d3c78a949b4ff72c442d44044e6137e19bec33bf1f15fcf1621197ea7c31f27bd7272780a092c571bece489bb3aa8c081fcc679db464d51a978cb521515b37cdb66e193ddde9da8e6ee83a1039c992092d1e807e27c49a0f547527de49194b3382d794772296bfeeab4f5d755db27b1209ae1e6aaa20c3d50f544f331661415971329f81838a937249724c33f0f0468dc32f87b93b14e79d14c04f3422388a585508e90b5244ac48685a957556347846b5cfbd0f347327ee59a09c4de75e70b4c2b924af8e15cc95dda2a5aca0a884666449e3958c2c97eb07e59b3fbd840838b8c39cf095727be1faaea2ac622cc84af951699a1129a7cad01b298719c69e32f73c77162847a7c7cab93f9d5f295f170718b01e132e68511b0f70981169faa5b9e3f7672a0958809126b8ec6b16d66dcd0993b01f25b6d10b138d84a11df67bd808b5c83189198704034fc8ec350b17ac88ad38b1ba46183b8ee96856182776681bdd98105bc796e518a1619bb1ada36d0bfd2aa92023cad78cd3a6c1e8d61f07ee32f0e7ded93070eb32125c6562d4989345ecfb14502480fe53d75646290325795a632f70fde15930be719b01999014479bd9238c4882334e008d4b9c1341ca4b1643d3d0d574360ec6536f3801467dea573b044783efcf6f8460b3aebb2cea371ac902b67b096f7056d580a7e60375b5aed6d6ba6dbd87b6dbd6bf330d7d7fb800755c9678f3470c2ab24c49ff8b4e8daf578dd39dae6cfe9e8b839579b0b2d0f6e7169e16820bd728a3ebb9eb2f50b3e5938494",
      "a4883e9e2e00d7818f7f1cbb4b0c60b8c6a0c305ac6198232e55a29234434df3ba969a6d684657b3faa80697e25d4cb7f5dde9c91c3223c949215e4a6a2e71dd4519aaf82b0882308bded83b87e86f192ed0d446050000",
    ],
    [
      "ETag",
      "fsyl+sjDnsqHYdr/UYDR5Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:17:12 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-144-1635192891311"
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
      "02",
      "31",
      "10",
      "fd",
      "97",
      "f17537b18046487800dd284a88ae92180d21a50ceb4277a7f6a210c2bf3b5d8c4fc6f8d2ce9c4b7a4eba874d592fa1078bb2780f68772705fa8738e4e882f68e2f43b5434800bd2c58a91f87a2507abb0e77d9f3607a7bb5d8be9841bfcf0aa7deb092d0dbc3aa44bd74d07bdd432d2b649bac28d49e457e67e23e9a3c65d759ce4045cb084ca6e3f16038cee090fc98e673b3f997657648604d8b1c5768b1561833184b6b547e14eb3959198da9a360153a68c40d51580a465aa2949154743aa9386f9f896eeba22bda42b0529392bea49ac5d3470e079ebcd4397d723d68b3c03623375d35e74703c712716a35d97ee7c41f5c2772b3efc7863b8feede12477718539f1e1b5c526ce5b9adb7011350923fe0a6f4c7fdf005b577f616dd010000",
    ],
    [
      "ETag",
      "lSB1gclxjuKEXAUJDbxZpA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:17:12 GMT",
      "Server",
      "ESF",
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
      "4b7282300000d0bb646d1dc43025dd89443e02826068bb61421a8b043504fca0d3bbd7e935eabbc3bb03ca18efbaa23f0a7e006f60a03a1ab3f1529ad6e27ba770b2c20d75491b1da588e3a3b0ce794a52f8352b3650c629b26ad29ede6175eacb20a58b19776cf8a225afab9b7e537bf703cf7be33ab77ba14f4db3919bccc8ca2d76c2ce5ce79aa5558dc92ee784b968524741eba47e14cebd2ad8e70c9f5a2c724da084a87c69fbf1528f9c4d1d386636c3b68043b5ce33696f63e8adca269c34dcaaf78a79f4060f9f5c84e47c9138213ac5a1e7a3e9302165e28e9f9efe2f3002fc2a778a77c5eeb17d6a2034027ff58b7e90fcf1dfe25471057e7e0193344ab219040000",
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
      "Mon, 25 Oct 2021 20:17:12 GMT",
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
      jobId: "grouparoo-job-145-1635192891311",
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
      "6f9b3014fd2bc8fbda3c08909714ad5142d76809590969554d1332e642dd02a6d864eaaafcf75d4cd3b59bb47ec2f63de79e731f3c93075ec4644a229e3ed6503d7dba17113923a0688aafcb805f8ddcafca9fefd320bead2fd21bfaeb6a3643046f5892e665061d29ea8a819cee77ddb41275492b213a98a863da4ec71c5a8e39198c27a6659a489490256b5e3c20fd4ea9524e7bbd9378371522cd80965c7699c85fdf7b8741afacc43d30257bef357b28237b1fa87ece04a38a8b62b6dfa1835a4215424e79861efe50e3e8fc7dee2ea7793745f08133a08c89ba508d2f4cc14491f0b4ae7456327d26dae79b03d9b96b7711184c64755e8405cde1cc88a9a2a17a2ac1b8f0b71b63e55d6cfdcd3c586dbd70b7b87437f3ee62bbde6fbc9d7173e9faaea1689481e61a33e35cdf3cbca07e0c52f142ab07cd73a3fcd2a1d5bf836908282da10d86a3fe909ae3fe244aa2114bc69613257d88a2713472a815f5d9c4063b8e80224f8b6a162d446139f610064327643030433ba1349c8c6c2b1c5336a18e13c7b1e990e319f95971054b2e4b2179db2172e3af02370cfcbdb79807ae2e21a175a696adb1a680b71e151688a0ffd4746ca25ca052d3ee9517b8fe7c11acaedd76c26b48297bda3de28c139a494034adb0790aaa8d88b161c49b6fdc2582f5c4be9d82924cbf3f93a6e78d8b372d7fa50738c0c6aed25fb20bfc95f745db3921ae69566bc8a13d90122ddf616de8faf80391b8a56d1672b577fd5bd23ef990400505fb789a08d6818fffb6d3e62318771f75a4c23b2e0f938d0aaba05d22aeeb6dd956df1a4c060ed1e04afd1db3faa67d6a5b93a3c9083914eaa5a476f3b1d256ac96af200ce2fc3dddaee36f863f2f797b040000",
    ],
    [
      "ETag",
      "DTiQ7EKtRAUgTdYuFgWazQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:17:13 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-145-1635192891311"
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
      "10",
      "85",
      "df65bcb424947f9a7051151453104bb932842cedb414b6ddbabbd510c2bb3b5b118d9ae84d3b33fd667bce690fb04bf3081c58a7c97389727f91a07e34858faae45ad1ad10b942b000354b88ecf2891eed1a97bda6bf5ef8f7527949a3ed0e0644a870831903e700718a3c52e03c1d206719d25a287899e5abaab340ef0b339c07fe787a4b7d2622d34f179ee75e7943385ae7c58869b6aaf87fac2d8f166cc5dac71825e6211a2d85145b0cf5d8d8542c2b38d6942865880a2ab87a904851164c0a51a349cd6eb56b76a7d9b6fb8d5edf6eda36915c844ca7222778312781a08566dc17af64133a04c8aa24c771757da1711a554e4c399e069d5625f02b40dae294e3ea6f90046f187d870fec94c1778e65a2ccf5991a790fee6fc751a89f47ddb8c1f007a13445754682f164380fdcc9cc70cb93f7abbd4635938292546842b4ebad5ebbdba9bfe77a2d4cd6f41e47cb122d0819fd1e77a90627665ce1f10d5911dab17c020000",
    ],
    [
      "ETag",
      "7lMtFk2+83RbURJrsLg25A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:17:13 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-146-1635192891311",
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
      "db",
      "36",
      "10",
      "fd",
      "2a",
      "02",
      "f74f0bd816f5c3b66c20c83447cb04c4722acbcdd26db0298a7219cba22b522982c0dfbd47aa4eeb756b000112f9debb7b773cea19ed785da029caf9f653cb9aa75f1e448e7a8829b285ddd59fbb16dbf3abdde4eee1dab5c35940ae27e1c50530b85649b23f54ac2f45db5026a7abe560db88f6401a21fa10a8eff8a3be33f286cec40d268ee7382094ac2a6f78bd03f947a50e726adba7e483ad10db8a910397032af62ffbf6a36b1f1af1c0a892f6794e1bd248fb95ac9795a04471515fac96e0a095ac59b33de11578f8262df25fcf630f38d90fb6407ee494114a455b2bed0b425051977cdb36262a9a3e23e3f3bb0fb48c6ea25966cd16ab247bb3217b2ddebcb588b44e8b9eb581a24a5eb1352f361a59af0f3bebf7743107041c7c2492c98d75f747944696b5910adc6dacbf5b8c3d6a5d5a6172659d8788136b9524d132b3de5cbeb5aed3c5ead6faedfe8c03de0b2615af8df38ce415d3aebf7637fef150b5802870d281eb311e1127c093bcccc7b40cbc615e6296e7413e1e122fc774e233bfc819019dd2d18d8ad4a21e0e718073df77e990965ee08d8aa270ca7111b061301a17c49b8cc7381817e8d8439f1baed81597072179d7617497c659b4ced255320bb3c8945192b652579d395dc4f73e151409a49fd475d4281790491f579c64511aceb2f87dd44dc80ddb12fab4fc043352924a32609386ec9962cd5c14d03474bb58c659bc48c21b509863bf3d31249afef5fc4d903d1d4c979579a32c9ec31985f35be3e1447a4faad6b01ebb0fe46217f7b1db778699e34e1d6feaf8038cf107743cf6fe3f7898a6e13d18224d439efe854191235fcbff23abe19b5567",
      "fee4c2413adb8ba7b3957fb61aa1e33f47787a082e619719bd5b45e93deab65256b286d5f4f58103b2015eff999c2eb6fe572d751eb8248ac37c53a9b3d0867573cef7a616a3f6b0e763d74386dca81f30c79f9c0e54c7d011d99ed5ea6b49ddc5365dd4502b5f4800c2782671720de81755bfb4415a050000",
    ],
    [
      "ETag",
      "UXku0/MDk9WjG2/AC8aG9A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:17:14 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-146-1635192891311"
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
      "0000000002ff8d514d4fc24010fd2fe3d13671291021e1004a9004895639a8316469a7b5b4dda9fba16908ffddd9623c19e36577e67d64dfcb1ea02c540a63d815f9bb43dd9ee568effd10a37195357c35a40c42006865cecac1a25583b414e7d193bccd4a7bfdece4349f4c58619237ac258c0f901558a506c62f0750b246b6c99a9cb22cb26de3f7e5fa71be98c70cd4947a60bd59ada6b3d51c8ec18f69bb6dca7f595e8f01ec691763861a55823e43a3698f895dfa7a46d64d85a121a71334d0893b22d7e41aa989424642d11f8662180dc4a87739129110acac2891b620c5e2cd0387034b5656317d723d8858a0bb919b66ddf9d1c1be849f7a5db6df39f107d7f7dcebf763b3d6a2b9d3c4d10dfad417a70657e45b596e6bb5c30012c91f7053d8d37efc0273e43879dd010000",
    ],
    [
      "ETag",
      "5Gyn5dk1+3YaMfktDZuaAg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:17:14 GMT",
      "Server",
      "ESF",
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
      "80e1bb646d180411d21d4810418b558c850d8310790a26e083767af732bd46fd4ef06ffe6f102709edbaa86f2bda803730c4121212c1bd6a869595a2995bba725eb4ed5db283f59acd5db8c19e1b8a063d4525aee1ca6385cc09e74e33a819d3a1ff24cb26a9f3402549a70612fb7077033af02aaafb4799df7aca0c7a6f2d9ce2bc3a68d8f4c4b9b5776cd4c0ad98aedf697b947cf5a0411b5bab1a3a335f2c97d8bb9812f15a880ae5cc5472c4b69b95db2f67637f1679e50fb0df4d917b99dd483c4671920c61bad043424eb0c8b75a68ecb3d49fca95f0f2f27f8109a0cf6bc1691715e3edb282d004fcad1ff5c3958eff1b34e694839f5f0fa3c96919040000",
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
      "Mon, 25 Oct 2021 20:17:14 GMT",
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
      jobId: "grouparoo-job-147-1635192891311",
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
      "3014fd2bc8fbb82640c85b8ad634a56bb4846c8434eaa6091973a16e0926d864aaaafcf75d4cd3b5aab47ec2f63de79e731f3c91079ec7644c229eee2b281f3fdd8b889c115034c5d78b2d15d19efdecdf7ebef876b5b516d5bebf4f271344f09a25e9aec8a02545553290e3cdba9d96a22a6829440b13b5eceea065f79d9e3dea0c47b663db489490250b9e3f20fd4ea9428e4df324de4e854833a005976d26762fefe6a16316a5b807a6a4f956d34419697ea0fa25138c2a2ef2c9668d0e2a0965083bca33f4f08f1a47e76f73b739ddb553041f3803ca98a87255fbc2144ce4094fab526725e327a27dbe3a90b5bb706781c14456edf230a73b383362aa68a81e0b30aefcd5d2987b572b7f390de62b2f5ccfaedde5b43d5b2d364b6f6d6caf5ddf35148d32d05c63629ceb9b8717d48f412a9e6bf5a07eae959f3b347f3f989a80d2129a6038b0fad41e5aa32889062c193abd28b1208a86d1a0479dc862a32e74e30828f2b4a866d15ce42c891d3b667148131886dd810de12819f543c71930bc4534b13ae47846fe945cc125978590bce910d9faf3c00d037fe3cda681ab4b486895a9cbc6585dc06b8f0a0b44d07f6a3ad6512e50a96ef7dc0b5c7f3a0be6376e33e105a4943daef738e3846612104d4b6c9e827229626c18f1a64bf712c17a62df4f4149c6bf9e48ddf3dac5ab96bfd0031c606d57e92f5907fedcfbaaed9c103734ab34e4d01c488196efb036747dfc8d48dcd2260bf9b171fd5bd23cf990400939fb789a08d6818fffb6d3e62318771f75a4c23b2e0f93b50a2ba15922aeeb6dd88ee5f42cab4f34b854ef6276a77f6a5b9da3ce083bc8d57349cde663a58d58255f4018c4f97bba5dc7bfa01df13a7b040000",
    ],
    [
      "ETag",
      "BWaobqcZ6Y+BKFW0Luq6qg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:17:15 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-147-1635192891311"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92d14ec2401045ff657ca42454b060131f405089805a4a343184acdb69296cbb75778b21847f77b62a1a35d19776667a667bef6d77b04ef3087c784a93e712d5f6284173678b0075298ca65b21738de0001a961019ddf77b5c04f1ac79fdb059f66bb57b7eb97e393b2342f325660cfc1dc4298a4883ffb8839c65486b5c8a32cb1755e780d91676380d83e1e492fa4c46b69fcc46a36e6f3480bd73588c98618b8affc7da7cefc04a3e0518a3c29ca3d55228b9426e86d6a6665921b0ae65a9386aa8e0ea41a264593025659d2675b7d5aebb5ef3c43d3dee9cba4dd7255248ce4c2a738267531208461a2602f94236c123405525398eabeb86c6695439b1e570127aad4ae05780b4c5a9c0c5df20095e32fa0e1fd87b06df3996c9323707ea6274d3fded380af5f3a87e371cfc20b4a1a80e48381c0fa661777c6bb9f9bbf7ded6a0be559292d46843741badce49db6bbce57a2e6dd6f41edfa8121de08c7e8fabd4801f33a171ff0a6b8707677c020000",
    ],
    [
      "ETag",
      "dWDBclRfU3KXvhD++WcGkw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:17:15 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-148-1635192891311",
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
      "85547f6f9b3010fd2ac8fba795f20302212452d565296d9152921292aadaa6c43826754330c5a65354e5bbef304ddaacdb2a21c1f9debbf7ce3ef382d62c5da21e8ad8eaa9a0f9f6cb238f500d518957b0eacfae67a933b2b66b6ff46019629b5d0fc7b767678060254be04d96d0bae0454ea8e84d278d55ce8b0ce79cd7a150ddb09cba619b6da3db72ba86691840143489872c5d03fd41ca4cf49acdbd7863c5f92aa13863a241f8e6b0de7c6e35b39c3f522245f358b30932a2f989ea79c209968ca767d309382804cde7748359021edea8cbe8eb71ed06c39bc60ac0cf8c504c082f5259fa821284a7315b15b9aa8a7a2f48f97cf78126eed01d84da6034f5c39305de94e4c5a98685b60f6ada029a8a5942e76cb92833f379b6d62e83d10d64c0c10316542cb4bb6b3770b5034dfb51e8ba49b473adef5f68c7353c5f9bfabe3b09b593f353ed2a184dc7dab7fb230c985f522159aaac87384a6869fb757bbd8fa75a12b0042b5572ded16d6c387a378aa30e891db31dc53a8d2227eab4b119e9a46b516b19510c3c5956572c9cf2b4eb10cb26ddae1e9bd8b01d33b65a6d3b5ab671bbd5712c7b49a919992ddd40bb1afa9533492f98c8b860d516a3bbc00bdd79184cfd413f74551b312e127951992b9b78ef53429300fa4f5fbb32cb382895e7e5f9a11bf407a13773ab1119d21526dbc9130c498c1341018d73bca192e6377c099b86c6a389177a23bf3f04863af7f11e2150effbcb1b21dc666a97a57aa3cbe1a81fda9672b087cc705228cc73f5818c461b10bbdabfcbf483a07f0fd238cff1f68f1cb4632bfa5f14145e4595cd83222ad5f651eb28b28e221bed7eeee0a921b86f9532ba9dbac13daa96021ad39ca6e4f3d102b04a7cfedfd8df6100c32d061d2121864926a2542139ad269a6d542f8a6deaa66db41da4c0b9fc906b39cefee8ca1a6545baa1a97c6da9bac36a17cb54210e2048c220fa9e7f05d9df4759dda645050000",
    ],
    [
      "ETag",
      "NVHVn8O4ykIOh41sypHLPQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:17:16 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-148-1635192891311"
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
      "02ff8d514d6bc24010fd2fd36b02dda8ad0a1eb4881582b4a95e5a44d6648cd124137727152bfef7cec6e2a53df4b23bf33ed8f7d833ecb332813eacb3f450a339dda5c8af6e88d0d6395bb92a2a2d8207c83a15e5b01385fbc72fa50f3c49b7ef4a4db6c1fc381888c2c65b2c34f4cfb0c9304f2cf43fce50ea02c5a60baa4b16119f2ab74f67f3f1641c095050e280d9220c87a3700c17ef665aadaafdbf2ccb8b073b5a47b84183658c2e43656887314f5d3dab8b2a47df526d62b4d0881b22355457da10f982f8aaddf5d543aba37a41b7a75a4a8932a7587346a588176f120e9858e7111da51eb444609a519a6e9af353e0a029e126d564fb9b0b7e71eac6b51db7fc796c7462b42f8624ba4597fafedae0895c2b96b66c6af420d6f201cf195ff7cb37faa13597dd010000",
    ],
    [
      "ETag",
      "A5RLk7z1aqtGghZ11Gh2Tw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:17:16 GMT",
      "Server",
      "ESF",
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
      "300000d0bb646d1df955d29d2228a22d510464c3d018327cd47c94123abd7b9d5ea3be3bbc6f50604ca4cc6fd7865cc01b50850ec7781c307beed12a46c8b7e54059e227ee7c17926eafc733bba9b17927da76a2f4be5d5a27e123f36050ad3b5746674ca7e52addd57cc07259d40e3a33917956d7f14b62d6ab217bada32d64eb97231e7ce7fd662e9008799cb4ddfe9846195fe4b159a9f2b3c9fadde6ca608a447cb7ef53ed4ad35405140e74d258f6cc71e3e4b256bdc3b5e1b4e5f46be10587dac26d1995160f2b4af9c7c409c26883a4921173f5a485e3a7a7ff0b8c00e9592588ccabc776c3827004feeae737c5c8e3ff9c148208f0f30b68d8583119040000",
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
      "Mon, 25 Oct 2021 20:17:17 GMT",
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
      jobId: "grouparoo-job-149-1635192891311",
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
      "14fd2bc8fbda249090a714ad5142d64809d980b47b6842b6b950b704a7d874aaaafcf75d4c93b5aab47ec2f63de79e731f3c937b5124644298c81e2a289f3edd49462e08689ae16bfff66ab00c33a7108bf5f7fe6839d7e9cf51369d2242d42c45f7871c5a4a56250735d985edac94d5819652b63051cb71c72d67d0eb3be3ee68ecf41c07890af2742d8a7ba4df6a7d50934ee724decea4cc72a007a1da5ceecfef9dc76ee750ca3be05a75de6a765046753e50fd9c4b4eb590c57417a2834a4119c39e8a1c3dfca326ecf26deeb6a0fb7686e047c181722eab42d7be300597452ab2aa3459c9e499189faf0e24f4d6de3cb2b8ccab7d1117740f175642358df5d301ac65b0dd582b7fb90d36b368b5f5e3707ee56d66edf976bddbf8a17573e5059ea529cbc170ada975696e3e5e503f01a54561d4a3fab9567ee9d0eafd606a024a2b6882f1d01e5067648f59ca863c1df5fa2cb581b1111bf6698fd97cec829b30a0c833a286450b59b0b1ebda361bc5d46176ec0e1c88999bf2d84e69d21db2a40b9c92e305f9530a0d0ba10e5289a643e42658455e1c053b7f3e8b3c53424aab5c2f1a637501af3d6a2c1041ffa9e958478544a5badd2b3ff282d93c5a5d7bcd84d79051fe143ee08c539a2b40342db1791aca8d4cb061c49f6dbc0582cdc4be9e828a4c7e3d93bae7b58b572d3fd3231c606d579b2f09a360e57f31764e886b9a5706f2d81cc8cbf2a0e9e36f04e2923649c8b79d17fc20cd5300299450f08f87896013f8f8673b2d3e8271f5514769bce3ee7055abf0129a1d12a6dc86ddb37bc39e3326065cea7731d7c4ce0b5f67843d14faa5a466f1b1d246ac5267100671fcbee9d6f12fa17792a97a040000",
    ],
    [
      "ETag",
      "5hH6FSg1niDLX58FCtfZ8g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:17:17 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-149-1635192891311"
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
      "0002ff8d915d4fc2301486ffcbf1764b181f13967021c60f14171d604c0c21653b1bc3ae9d6d2712c27ff7b4a231c60b6fd673ce9e93bc4fbb8797526410c1aa2c5e1b54bb9302cd832d12d40d379a8e5a0a8de0011a561079fb2eeeb6376cdd6afaabb07d29e2c7d9f4a9180e89d0e91a2b06d11ef21279a6217ade836015d25a2a795389a5eb3c30bbda0ea7b3641c5f515fc9ccf6f17c32391b4d2ee0e07d2f66ccb0a5e3ffb1b63878b091ab0473542852b4596a2537989ab1d5d4acaa39fa5a362a450d0e763f0a259b9a29297d9af84177e00761a7170cdafd41d0090222b94c9929a520783ea58060a4613c915bd2840e01ca95649cbbef1b8dcbcc99d8721ccfc2ae0bf813708e5fc851eb37537326fe6016c704a39d417daf24f968b42a41abdbef9d86ad4fbb73698d0ddd84510d7a90327aa4ebd2409433aef1f001e965b9ce02020000",
    ],
    [
      "ETag",
      "KxnMwJah0u8b62FnNVTSXg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:17:18 GMT",
      "Server",
      "ESF",
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
      "000000000002ffedd34b7282300000d0bb64ad8e10a2a44b51a40a548346ea2603210af8019354c04eef5ea7d7a8ef0eef1b249c0ba598ae4ee20ade40979878c007cbda9eb8c79292ec6aa5cda28365bee5e47c0ac5ae767d56510e4742ddb36e7ab88d7d6f1b189c8d4812f511e5a9d1f88549bc225e86b6e97efac7a6914e3cf4748c74f8280325b26932a3c872b2bb47e2c359cd45ba9a852dde0f29d1b52f53262f4edfb6a2c02ea076e0fb86adeacdb641ea9249ae692530c481b18bc6f4d0427767b8c4c857663e42b77d65ade9fc6bb3b62fb35cae7987f3db87d15f68684d4a3d7879f9bf400f88b62ea450ac786e8708e31ef8abcf74578be7ff8948a490e0e717bdcfa34119040000",
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
      "Mon, 25 Oct 2021 20:17:18 GMT",
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
      jobId: "grouparoo-job-150-1635192891311",
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
      "00000002ff85536b6f9b3014fd2bc8fbda24909084448ad628a56bb4846c84b47b6842c65c985bc0149b4e6995ffbe8b69b25695d64fd8bee7dc73ee832772c78b984c49c4d3fb1aaafd875b119133028aa6f8fac31906378f9bcfe6cadfef7df5b89ee7dfac743643046f5892e665061d29ea8a819ceeb6ddb41275492b213a98a8630dcd8e351a0cad49df995803cb42a2842c59f1e20ee9bf952ae5b4d73b8a775321d20c68c9659789fcf4de7be8f7ca4adc0253b2f75ab38732b2f78eeac74c30aab82866bb2d3aa8255421e49467e8e11f358ece5fe7ee729a7753043f700694315117aaf185299828129ed695ce4aa64f44fb7c71205b77e52e028389acce8bb0a0399c1931553454fb128c4b7fb33696dee5c65fcf83e5c60bb78b2b773def2e36abdddadb1a3757aeef1a8a461968ae3133cef5cdc30beac720152fb47ad03c37cacf1d5abe1d4c434069096d301c9b236a39e6244aa2314b9cc1304a4c8822271a0fe92032d9c4063b8e80224f8b6a162d44615ac9d8b2200ecd813d09ed71046164f569d88f6ddbb66cc71981450e67e44fc5155c70590ac9db0e911b7f19b861e0efbcc53c70750909ad3375d11a6b0a78e951618108fa4f4d8726ca052a35ed5e7a81ebcf17c1f2da6d27bc8294b2fdf61e679cd04c02a26985cd5350ad458c0d23de7ced5e20584feccb3128c9f4e713697adeb878d1f2133dc001367695fe926de02fbd4fdace11714db35a431eda03795e1e347df885405cd23609f9ba73fdefa47df221810a0af6fe3011ac03efff6cc7c54730ae3eea488577dc1d261b155641bb435c97dbb207e6c0198d4ca2c1957a131b3be6b16b4d8e2623e450a8e792dac5c74a5bb15a9e4018c4f17bba5b87bfea28e2777a040000",
    ],
    [
      "ETag",
      "Z85TWzOK0LRyyRtzMAmX1g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:17:18 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-150-1635192891311"
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
      "00000002ff8d914d4fc2401086ffcb78b44da80584261c8af10345d4025e0c214b3bad856db7ec6e350de97f777645638c072fdd99e933c9fbec1e6097970904b0c9b37d8db239c9503f9922425573ade8a844a9101c40cd32221b5ef9f7fa346d1ec2e7fc36bcbaabf7bb301b8d8850f12b160c8203a439f24441f072809215486bb1e07551ae6de7806e2a339c2fa2c9ec9afa4224a69f2da7d3703cbd84d6f95e4c98666bcbff636dd53ab0159b08539458c668b254526c31d613a3a95851717495a8658c0a2c6c7f6452d4159342b83471bd5ec7f5fa7ecf1b9e0d869eef79447211339d8b92e0e59c0282169af148bc9326f804485b92716abf6f34ce136b62cac96cd1efda803f01ebf8851cb57e331567e51fccea9860dc68548f52908f42a3e275ba83de79bff36977218cb1a69bd0b2460762468f74936b0852c615b61fd64e142102020000",
    ],
    [
      "ETag",
      "ylp3Mt+fyOAViJAFKuqkAg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:17:19 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-151-1635192891311",
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
      "eb6e9b30147e15e4fdd9b45c20844b22555dd6b20e2d251d21edaa694a8c31d42dc1049b56519577dfc124bdacd22a2101fe6ee71cdb8fe88e15091aa398659b9a56db0fb73c461d4425ce60f5f30f6f7e33f835348cc83a79d89ce2cd7621264747c0608d4ae07599d3aee07545a8182fe6bdace275892bcebb60d4352ca36bd8a6658c06eec8300d038482e6e994157720bf91b214e37eff10decb38cf728a4b267a84af9fd6fbf7837e59f15b4aa4e8bfceec438ce8bf937a9c738225e3c5d1620e15d482564bbac62c871a9ea549fce5b5778fe1752f03f23d231413c2eb4236758105e145cab2ba52ae68fc88549d2f3ed0dc9b7a2791b62af09aae3ada8a252b0d0b6db92cefb46fe1ec5c5bed1dc54abbfaee859ed672fc405b0481378fb48fc79fb4b370b6b8d0be5e2bacb37783fc840ac90a951ee138a74df27e42fedb8d69045862415b70e9e836365c7d14a7b14352d7b4e254a771ecc68e85cd5827a3211d2631c5a0938dbb52e1821776eac6bae924ae63e943920c539ada062543271eb9239b1886a39b89332068d7410f1593f49489920bd64e095d857ee42da370119c4c224fb591e23a97a76d714d132feb94d02490fed3d7ae411987a466e47e1079e1e424f22fbd7697a734c3643bdfc03ea7381714d8b882094a5a9df30486862e66733ff267c1640a0ab57517078640e3df8fcf82685baa294bf54693309c5c83065715defe83411df610ed762fe22e715e2b8ae2abbfd6ffbe059081767f76f074109ce0d60ffd5c78e1356a97429ad28a16e4fd9d06b202debf89875b0164b817902324fcc3c122a24921156d0f185bab0a95dad4cd9165da48912bf906b32df730c9c6a371a46b5ac87d4bedad50b369a05a3c9100847311f8c119a07f014246df7c97040000",
    ],
    [
      "ETag",
      "+KESh2X411T5CwqDaqyUsA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:17:19 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-151-1635192891311"
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
      "000002ff6d50d14e023110fc97f5f52e7a2246487810439088a807f8a0219752967ac7dd6d6d7b2812fedd6d31fa629a7477da99ed4cf7b0c9eb15746199abf706cdee44a17bf24d8ab6299de5a2a9b60811a0138a997a73773f73c5e9c3c567ceeba550cff8a57a3d6658f9869580ee1ed639962b0bddd73dd4a24296851281db698fa6b374341932ae68e5f1643e1e5ff7c7033844bf8a2cd39b3fc568321b0c07e97f92c52182829629aed1602dd11bd0860a946ee4b35951e912634b8d91682190c38532d4686188623e899376122797ad76d239bfea24ad2461664952b89c6a26cfa76c0e1c3951a6f4c1d9c0134c6839e63aec5bff5ca3d164152a9149323a44da063a3b5dfc8ce8ef1cda47436cc8a2f77276f47543deabe30cce34188114fca7b7b93be2c337bb77af13b0010000",
    ],
    [
      "ETag",
      "pkKMTtj/O4xixixZjgVezg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:17:20 GMT",
      "Server",
      "ESF",
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
      "ffedd3db6e82300000d07fe9b3188168616f624444b2a252717b694a5b2e56a15c0c82d9bfcfec37e6f987f3049431d1b6a4aba428c10718a8614fd974a72cc7cd0acfb8257e7edec516ccc673aa5337e0d7c358342d1cd4be24f518176e724f9966a62876fdeee05175b9e393d2351516b384614c826e1b1e8e1bcaedd518cf9606ae16d24c6ce45ef9c986f9427b404b96b8cf7c79416e08d910f85f37cf73eafeb3d78ee41b4691339f89dc88d0da0fc22db2e492451baaad4bc28db8550a419cf14acf74b2ea3835aa1ed61c990fc99772b5a7d951a1452dc24b82a76f6fff179800f15045235a52bcb69b73db9e80bffaa41b9478fd77046d44037e7e012f23b0f719040000",
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
      "Mon, 25 Oct 2021 20:17:20 GMT",
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
      jobId: "grouparoo-job-152-1635192891311",
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
      "000002ff85535d6fda3014fd2b91f75a2001020109ad88a62d1b84358456d53445b6e3a46e9398da0e2daaf8efbb714ad7aad2fa14dbf79c7bcefdc80b7ae06582c688f0ecb16272ffed5e10748298c619bceefc67d7cf6e1f06d73ff6773f8be78bfb5570f534990082d72c858b6dce5a4a54923235deacdb9914d5164b215a90a8e5b8dd9633e8b9cea8eb8d9c9ee30051b13c5df0f201e8775a6fd5b8d3398ab73321b29ce12d576d2a8ab7f7ceaedbd94a71cfa8569d8f9a1d90519d2f54bfe78262cd4539d9acc141a5988c5981790e1efe511372fa31779be3a29d0178c729c3948aaad4b52f48414599f2ac92262b1abf20e3f3dd01adfd853f8b2c2af2aa28e31217ecc44ab0c6b1de6f99751eae96d63c385f85cb69345f05f17a76e92fa7edd96ab159066bebe6d20f7d4b639233c3b526d6a9b9057001fd8429cd4ba31ed5cfb5f26b87e69f075313405ab126180fed01763c7b445232a4a9d773496a33423c3274718fd874d467fd84300c3c236a58b814a5d3b5498ff446719f0c8671dfede2d873dc619cd011f592d1d08396a3c3097a925cb333aeb642f1a643e8269c477e1c859b60368d7c53428aab5c9f35c6ea02de7bd4502080fe53d3a18e72014a75bbe741e487d35934bff69b092f5886e97efd08334e71ae18a0b184e6692697228186a160baf4cf006c26f6eb185468fcfb05d53daf5dbc6bf91b3d8201d676b5f9a27514ce830b63e788b8c6796520bbe68024a34226e0f9f00770b0a34d0e74b5f1c35bd43c852c659295f4eb5902d804befed78e7b0f60d87cd0511aeeb03a54d52a54b26685b8a9b661f7ecbeed7a0364c0527f8a0d3cf7d8b43a479d9115acd4af25357b0f953662957a034110a61f98661dfe02d392796179040000",
    ],
    [
      "ETag",
      "vEx5EgYk6VJyhKmxGjONQw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:17:20 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-152-1635192891311"
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
      "00000002ff8d904f4fc3300cc5bf8b39d28a65a3fb5369870da131310dd631714068ca52b7744beb92b842d3d4ef4e5210674ec9737ecf7ece054e4595420c8722ff6cd09caf72e48dbf24681bcdd61d355516210064993bf23adbcd6ec42b3e2db2d1727cb29bc36384b3e9d411567d602921be4056a04e2dc46f17a86489cea6483765b5ef54007cae7d71fb922cd70ba74b4abd5eef56abd97c750f6df0674c25cb7dc7ffc3f6de0670a44382191aac14fa2cb5a1232a5efa35ad2c6b8da1a5c628b4d0c1dd436ea8a9a5210a5d2514513f14c3412426fdf1440c8470a42625b9a0cac1bbad0b084c2c75425f6e4de8c1af9e9f19edb321d7dda26f2c7ab7e36834ecfdccba233f9f5d2e360d06a0a4fbb2878221cea4b6d87e036d7d220290010000",
    ],
    [
      "ETag",
      "+fUA/1WeOGf7I8ksQbK5eA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:17:26 GMT",
      "Server",
      "ESF",
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
      "000002ffedd3cb7282300040d17fc95a1c130a427722af14ea58d42a6c3201830651520ccf4effbd4e7fa39ee5dddf6f40b38cddef4456177603af60a0c89c66d34018967b2a6873cd938aa8ad75c4b37890fbf05449aa7c2aab5c3cd2e8275cf36be9623d47f4d6788e278be516db965b0dbbbe446880ce9917f61c6ab03c780bcea188bb62661caca07df1331b5ae9b1af973a3d286b12775d1aa8a5aa7f79b6093f366ea22bc65e2ee2eba8a2d130e2f3ae620de66914cc305c668ed239a8ed86fcf61696bc894c5f1479cbc26e2b347cbdcc2fe1fba2dc47eb53ebb49820725ef5d3a7a7ff0b4c00eb05afd99df0c7edaa669a13f0b73e9183608fff2d466b56839f5f53d84d7419040000",
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
      "Mon, 25 Oct 2021 20:17:26 GMT",
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
      jobId: "grouparoo-job-153-1635192891311",
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
      "0000000002ff85536b6fda3014fd2bc8fb5a20e1d100125a29a42b13842d8456db3445b67393b90d716a3bddaa8affbe1ba774ad2aad9f62fb9e73cfb98f3c925b5124644298c8ee2a500f1f6e242327040ccdf075cc7baa3cff1c79dfbd9e589ddf468b3facc8a65344889aa5e9becca1ad65a538e8c96edbc994ac4aaaa46c63a2b63becb7ddd3fed01df74663b7efba48d490a72b51dc22fd9731a59e74bb47f14e266596032d85ee70b97f7eefdef7baa59237c08deebed6eca28ceebea3fa31979c1a218be96e8b0e2a0d2a863d15397af8474dd8d9ebdc1d41f79d0cc1f78203e55c5685a97d610a2e8b546495b259c9e491589f2f0e64ebaffc79d4e232aff6455cd03d9cb4126a686c1e4a685d849b756b195c6cc2f52c5a6e82783bbff4d7b3ce7cb3daad836debfad20ffd96a12c07cb6d4d5b67f616e005f513d04614563daa9f6be5a70e2ddf0ea626a0b48626187bce297547ce98a5cce3e9a83f64a9038c8d9837a47de6f0f1000609038a3c2b6a59b49045e230ce52eac52ee34e3ce80d2166b4e7c4e078094dfa4ee20e53723821bf9530b010ba945a341d22d7e132f2e328dc05f359e4db12525ae566d118ab0b78e9d1608108fa4f4d873a2a242ad5ed5e06911fcee6d1f2ca6f26bc828cf287ed1dce38a5b906445385cd33a0d632c1869160b6f61708b613fb720c6a32f9f148ea9ed72e5eb4fc991ee1006bbbc67ec9360a97c1276be788b8a2796521f7cd8128e05225e8f9f01371b8a34d0ef275e787df48f314420a0a0afefe2c116c03efff6bc7bd47306e3eea6883775c1dae6b15aea0592161ab6dd87d67703a1a8d88052bf32636f6bc63d3ea1c7546d843619e4a6af61e2b6dc42afd0cc2204e3fb0cd3afc05d686676b79040000",
    ],
    [
      "ETag",
      "9c2rpBJT7Z72iLBkTDxbng==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:17:27 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-153-1635192891311"
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
      "4f",
      "4f",
      "c3300cc5bf8b39d24a0b637fa8b4c386109b344dac6317109ab2d4ed3ad2b84b5c4199f6dd490ae2cc2979ceefd9cf39c37b693248605f16a7066d7b5520afc32545d76876fea8c93884089065e149ed4e66e544de8eaacfd1cbfcfa6b78e0f57432f1845307ac242467c84bd49983e4f50c4656e86d8a7453995da722e0b60ec5cd73ba583d7a5d5116f46abb5c4e67cb07b8447fc64cb2dc75fc3f6c6f97088eb44f31478b4661c8525b3aa2e24558d3c9aad6183b6aac42071ddc3d14969a5a5aa2d8576231e8c762d81f88bb9bf19de80be1494d4a7249c6c3db8d0f084c2c754a1f7e4de8c1af9eb58ceec992efee303416bddbf16034ecfdccbaa7309f7d2eb60d46a0a4ffb279c990e4523bbc7c03d4ec99b790010000",
    ],
    [
      "ETag",
      "lsqnNs1fy7mx7ZH+z6htQA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 25 Oct 2021 20:17:27 GMT",
      "Server",
      "ESF",
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
      "Transfer-Encoding",
      "chunked",
    ]
  );
