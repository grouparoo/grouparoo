const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1605310013007";

nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff1dcfdb6e82300000d07fe9b3335204646f1407d296888600e18530e8b828b7721130fbf791fdc049ce1bc449c2fa3e1a9a07abc1275862a8ee933d690f48baa5ba7ca9a3aa596d621e27819648e7520fada4fba07ac6655f5b67ebe93d3be576769a329e875c45e36add8783c9bf8f53aecece15bab8c22a9ee41b8984fb25508269c093e09030c54c43a3b318252dfb941225ec1d6cd6b6311b79760ecd6e1343eebfec538b0c1706fee3ca328d51db7fa5b65498f5cadc2022d920051ab6201129adec1fe89dbe445d96f8e898adaf175e9a2a48c7d0f534b0036c6e0bcefaa8d8b2a2a4aa3bf03f8f86a5655b1fb198330e7eff0086b3443518010000",
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
      "Fri, 13 Nov 2020 23:26:56 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-1-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85536b6f9b3014fd2bc8fbda04481af290a2354ae98ad4900d48ab699a90712ed42dc10c9b4c5595ffbe6bd364ad2ab59fb07dcfb9e7dc07cfe491575b3223192ffeb4d03c7d7910193923a06881af8e53e76d15a8e568b9e6417c5f5eefefed623e4704d72c497775093d29da86819c6de27ed188b6a68d103d4cd4737baee78c86aee3b843c719234d4299dff0ea11c9f74ad57266db47e97e21445102adb9ec33b13bbddbfb815d37e2019892f65b451b45a4fda1e6d75230aab8a8e69b18f55b094d0a3bca4b74f09fb8cd2ede66ee73baeb1708de73069431d1564abbc2144c54392fdac66425b367625cbe3a90d8bff19789c544d9eeaab4a23b38b3b654d1543dd5605d45eb95158457eb68b548827598c6cb6b7fb5e82fd7379b55185b77d77ee45b8a662518ae35b72ecc2dc40bea6f412a5e19f5443f6be597fe04ef87a209282da10ba663c7a3eec49966793666f96438ca7207b26c928d477498396c7a0ee7db0c28f28ca861d14a546c3818b8ded64df3011da5e79e334ea75eeea6838c4e46e3d1d49b404e0e67e46fc3155c72590bc9bb0e91bb2848fc348936e17291f8a6849cb6a5baec8ce9025e7b545820823ea8e9a0a35ca0926e7710267eb45826c1addf4df8060aca9ee23f38e39c9612104d1b6c9e826625b6d830122e56fe2582cdc4be1f8392cc7e3d13dd73ede255cb4ff40407a8ed2af325711205e13763e788b8a5656b20fbeea0cbc879a94d1f7e231057b44b427e6cfce827e99e22c8a1818a7d3e4c049bc0673fda71ed118a8b8f2a52e11d378749adc11ae836889b624f6c6f301c10036ed4bbd870e21d7ba673e88cb0834abd14d4ad3dd6d989b5f204c2200e3f34bd3afc03b4fa5bb674040000",
    ],
    [
      "ETag",
      "00pfunItC5COiIShlHvh/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:26:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1605310013007"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d93db6edb300c86df85bb75307b6d0e33d00b67cbb660ce61897b3514816ad1ae3ad9f2243a4310e4dd4bb95d56b403dc1b9ba43f42fca9df47f8a56a0931dcaaf2778bf6f0ae44fae1830dba5693e357636a8710009228999c8c8777d3c976fd7ea63f96b4a0ef6d31d2c9d515132ebfc34a407c8442a1960ee29f47a84585dc961bdd56f5aecb02a043e38bdb6c335f7ee5bc32d2e7cbeb344da6e90c4ec1b9510a12bb8e7f43dbcd29807b73bbc1022dd639fa591a6bee31a7b997e944d5681c38d3da1c1d7470f7a1b4a66d843566c09541348846e1f0220ac3e8220cc7cc69930b52a666f47acbe30119127a63feb048883e3061bb980517dd73cf75253b213e9c2fb3d16537df73a050d6d1e34efe824fda5e925abc11e40b50ba0f2ab19668fb28d5ec8494169deb258ddb89a63963d3d52a7d05895a5aa3643fb8573d80a6fd19f892ae92ffad966df36f579f936cf68a70c4663823d97c31db66c962edb99ba7fb9d1e08ddda1af68a436f9328bc9c0cc7a3f0d1399f8c77139f13936d31805cf00ff04d11c485d00e4f0f0ff06ffb5e030000",
    ],
    [
      "ETag",
      "875hB8SP/El9gtMtKuf6lA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:26:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `first_name` as __result, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `first_name`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8553eb4edb30147e95c8fbb349a549daf44225c40a6410ada490a620344dade39e6486340eb603aa50df7d270ee532a421554aedef726e3e4fe48e172b322209cfee2b909b2fb722212d029a6678ebd897e54f2f77b26b99268323519de5bef77870800c5eab145d9739ec295149066a349fb53329aa924a21f6d068afb3e7f69d5ed7751cb7eb38039429c8d3092fee50fc47eb528d6c7b17ba9d0991e5404baeda4cac5feeed878e5d4a710b4c2bfb7d441b8328fbbf310f73c1a8e6a23898cf307ea5402e604d798e19bc0a57c9f7f7ce6d4ed7ed0cc90f9c01654c5485aeb3420b268a94679534ae64f4444c966ffe90993ff18f636b9972a9f4a2a06b585a54598b850455e5ba652df9eaf9a6bcb37e44d3736b8915a63c07b5b4aecffcc8b71a4e105af330f467b1f5f5f09b751a4de717d6d18dc15aeffc31af1528cd0b93554c931cea8c9efb167c1c562da09a2a68c0c5c0e95377e8ec273868960ebbbd2475204986c9a047bb89c3f63df0560950d4e9dadda868210a37014091e7780c567d94f5bc61d2e975fa5e4a8141a73770c1ddef0ec8b6451e25d770c25529146fba47aea320f61771340f8fc7b16fca482936e9a449ae2ee26d9e1a8b44d27feadad6281718a91e4510c67e343e8e832bbf99fe0432ca36b37b9c7f4a7305c8a6123ba8419e8b15368d5c4c67411c4cc3f1041566a4173b8622a35f4faf8278539a2e6bf325e3281adfa0864a4937ff609847df23dbed9b705734af0cc5f0cda9f17f6800e2622dafa70ed9fedee2af45f09537eee472ee4737a4b98a20050905fb7cee4836c067bbbadb1ca4e2ee6014a5f18c8f8ca93a0693d03c36be36d9eed4838ed727862cf507acdbefecba5a7bd48eb086423f17d46c8ee9530d55ea858420be9130084f11fd0b7c5ca0e0b7040000",
    ],
    [
      "ETag",
      "0/QpK4l0gWrfb7BouHlE4w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:26:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1605310013007"
  )
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
      "d1",
      "4f",
      "c2",
      "30",
      "10c6ff97f3754b3a889a90f020cb82338832303c1842cab8cdc2b69b6d8712c2ffeeb598c8832fedddf5f75dbeaf27d8ab660b03d8a8f2b3437dbc29d1ce5c91a1e92a6bf86aa9310801a09525938bc21c8ab98c97bb6fb14c472f4ff1f3fe301b0e9930f907d61206272814565b0383f71334b24696add7da6f64cc1e5b37992fb2743ae6bea6adeba76f93c9c36892c039b852b5fb3f453a5d24e324fb4fb23a07b0a34d86056a6c7274265a4d3bcc6deaf21959b71586863a9da3010ffb875253d74a4d14f224ec85d19db8ed4742447d21ee99ab28975651c3e8db9cad81252bab8cbe381df418d0bee4a0853f0f3c4eb4429fc235913777fd1ccb5c555744cf11abdfcda3a345f3aa895d1a7406c5c56c4c2e80e560567718402ef9b31f95bdf4e71f5e322716c9010000",
    ],
    [
      "ETag",
      "TfsvfSaCWjx0WIBOJCMkvQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:26:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00d0bb64ad0e1a10d39d4829da82c61153d864d224ca470149289f4eef5ea7ef06ef0730cea5525457852cc10b18d802cdf8ecbd361c0b73c77df4abf5b123428c6bb8718a8e562a8d99a5ade3ee2d89af65bb1db5ed63e8ae837b3c2c446bdd2f17725de5a7a4c68804faa60db9874793c0cc6ddd00590be9bf9234b4c3439db2027ac132317a4594bf64158e9310575f8a8edff34dc793c1883e9b8b27a60d35c3f386f17dc9cc2d3c79075df8381ace668372654f2b453289f3e8518848107e0bb2f4c3d94901758850b4bc25050de4bc031320fb3a6ba4a2d9330b2d8426e07f4ef550cb67df91ac910df8fd03aa574b4b18010000",
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
      "Fri, 13 Nov 2020 23:26:58 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-3-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4fdb3014fd2b91f74a9b84045a2a55a30a01cada742429689aa6c8769dcc90c6c5764008f5bfefdaa11d08099e62fb9e73cfb91f7941f7bc59a11122bc7a68997cfe7627083a404ce30a5e57f2e16aa9dc9b8ba72cbefaa164f41405f27a3c0604372c85d79b9af5946825656ab4ccfa9514ed064b217a90a817f4fc63ef28f03dcf0f3c6f0034c5ea72c69b7b20ffd57aa346aebb93ee57425435c31baefa54acf7efeee3a1bb91e28e51addcf78a2e8828f753cdefb5a05873d18c9719e8b78ac982ad31afc1c17fe28a9cbecfdce778ddaf00fcc829c3948ab6d1c615a4a0a22979d54a9b158d5e9075f9e680b2781647b94345ddae9ba2c16b76e0acb0c6857ede30e73c5dcc9d6972be48e7937cba488a2cba8ce7937eb4982de749e6dc5ec669ec684c6a66b9ced839b5b7042ea0bf624af3c6aae7e6d928bff667fa71288600d28a75c162e01d637fe89d90920c68390c8e48e931428664708403e2d19390852bc230f0aca865e14634d80f428f0c59e11f86ac08f1c9a0c01e098bc03f0cfc3020c4f709da1ea027c9353be36a2314ef3a846ed3691e1779ba4ca2491edb124adcd6faac33660a78eb51438100faa4a6ad8972014aa6ddd3248fd349944f6fe26ec2335661fa9c3dc08c4b5c2b06682ca1799ac9b95841c3503299c76700b613fbb90b2a34fafd824ccf8d8b372ddfd37318a0b1abed1765793a4d2eac9d1de206d7ad853c76075346c96b637afb0780b0a25d1274bd8cd35fa87b4a59c9246be8d7c304b00d7cf5a3edd61ea0b0f8a0a234dc6173a8321a54b26e83b82d76cf1e021f59b0d41f6241e8ef7a6672988c6ccd1afd5a50b7f6506727d6aa3d088230fcc4f66afb0f75aa152774040000",
    ],
    [
      "ETag",
      "drqJUs/VGwSEJKsrCwC3rQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:26:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1605310013007"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d93dd4ee3301085dfc55c924a09fd5b2271d12e65376c68a10d1262852a379e64cd3a99603b4555d577671ca020400a37c9cce41b79cef864cbfecb52b090ad64fe5083de1ce460af5c3007532b6be855616980790c2ccf893c1b1e4ffaabdb9b87f373fc6367d1eda1c05e7e72428449ff41c159b8659904250c0bff6e59c90ba0b614555d94cb26f398dd54aeb848e6d1f417e5050a974fafe378348e276ce7ed1b05b77cd9f0df68bbdb79ec1e5773c8404399829ba5d2780fa98d9c4cc38b4a41c760ad5330ac819b0fb9c6bae21ab143954eb7130cfc7e37f0fda0ebfb43e214a6dc4a2c09bd5ed078cca2e56a8e8f2492054744e82626c159f35c535d8a46880ba36932e835f3bd0732a98d7ddec92bf8a2ed23a9f83741ba00a9daa01c4a01ba8d92d5920ba1c1985612cd9257d51e1bcf66f127889742a314ede05ab600caaef7c0593c1b7db55ab2cddbae4e47c9e413612c99618f24d1c564918c2e2e1d77f772bfe38d0573a991bc62c0d924f07b3ffac381ffec9c9fe8dc44e78456d7e0b194d30ff05b5a16665c19d83d01d8f9dc395e030000",
    ],
    [
      "ETag",
      "F79E5bZXqJJoKtOIZ+do4g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:26:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ltv` as __result, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `ltv`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-4-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8553eb6e9b30147e15e4fdd9b45c202157a9eab2967668294909a4aba62931c630b70453dba48aaabcfb0ea6e965955a2912b1bfcbf9ceb1fd806e591ea3318a587a5752b1fb74c323d44054e11476bdcbb9b7bb1367cb4ef6f57ef1f3172eb270991e1d0183552a893745469b92978250390e17ad54f0b2c082f3261835eda6d5377b5dcb34adae690e402669964c597e0be2bf4a1572dc6e1f4ab752ced38ce282c916e19ba7fdf6b6d32e04bfa144c9f6eb8a6d2822dbefd63cce38c18af1fc285c40fd5252b1a21bcc3248f02c8ca36faf9d5b0c6f5a2990b78c504c082f7355a5020bc2f384a5a5d0ae68fc8074ca177fd0c2993a2781b1ced4766d6069ac5682ca32530d63cde2c79de2d638f36717c61a5a4b5846e5dab8fae1f88e51735ccf083dcf5904c6e7e32fc6b93f0be7c6f76b8d356a63481253a958ae730438ca6895e17152eedbe3a9045861496b703530fbd81a9aa32889062419767b5162d2281a46831eee462619d9d48e238a41a72a77adc239cf6dd289cd01e926781077706cf78618d37ec7ea75121225a48fed1e8970df46fb06ba174cd153260b2e593d2f74e5bb81b30afcd03b99048e6e23c1309dd33a5cd5c4cb9c0a9a04d23b7ded2b9471a8540ddff502c79f9c04eed2a9cf7b4a534c768b3b38f1046792021b0bbca18a8a0b1ec3d0d07cb6700377e64da6a0d087383f30241aff7e781604bb424f59e92f9af8fee41a345808bcfb0f831cd508f62fca2d71566a8ae6eb55edbfad0164412fcfab0edaffd9c3af81e05ed7eee83274fc6b546ff934a182e6e4e37307b2063e7a9d87b70254782d50452a58c32523b2aa4104ad2f1bdbe8b407f5c81a994893857a83d99675986ae55139d20dcdd56343f55bd173aaa0523e9100843be2b9de39a0ff0017c4f269a9040000",
    ],
    [
      "ETag",
      "NQPNyqrFV2l+wSKXaplUVg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:26:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1605310013007"
  )
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
      "000002ff6d90dd4ec2401085df65bc6d495b7e0c245c80a292340815121363c852865a683bcbee5645c2bb3bbb18e5c29bdd9d99ef4cced923ecf26a0d3d58e5d9be4675b8cad0ccec23415d1746f325a9d2081ea0111993dd415ccfb2c9e773dcb92da2d5f46bbc95fb59bfcf844edfb014d03bc226c762ada1f772844a94c8b2e552b98d8c9983b49dbbf87130e7b2a4b52d278b381e0ce3119cbc0b91dcfd09c693f9e87e94fc27793d79b0a555821b5458a5683d48455b4ccdd8c6d3a29405fa9a6a95a20607bb41a6a8964211f9dcf15b7ed809dacd3008c266105c3357502a4c4e15a38b27b606868c2812fae0701031a0dc93736edcf96edbed6e238c5c0e5b86cede25d06d359a9ddf7964e7af3f9b8707837aaa885d6ab40683b3d91bb2010c0733aa460f52c17ffd909b737dfa0686e52df3c8010000",
    ],
    [
      "ETag",
      "9ALuQgNxXL6Dl2bPzIjpqQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:26:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "4b",
      "7282300000d0bb646d1d3e064a7720411087128c6971e3448882440a042cd0e9ddebf4dde0fd0096655cca53ff55f11abc818969d6325b868de240ccd9de7c5c4244634f3bfa6c9a4ca46fc2a657303ee8da9e3ed2915eab6fa9a2e36cad12981bfeee2c32f53ed0c3d0ac4b95c96361bd162556b7e938e92965383e08776e95d8d8b7dac6d6e4e76d0739e162555d4ad809e491241f7062c456ed5127588bb5a09e3ba7ab2918ef4654abe1483e721493ad3bd7e89adf0ac5c88b1c4751db799747d5f15050e8db44683e2281f9728604c5ee60dbef57b0007c6cca8ecb53f9ccead0b216e07f7eeaa7863ffb0e671defc0ef1faa85aa2a18010000",
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
      "Fri, 13 Nov 2020 23:26:59 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-5-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8553ef6f9b3010fd5790f7714d0249c92f295ab394b69102e90869344d13b28da16e01536c5a5555fef79d4d93b59bd47ec2f6bd77efeeddf182ee7999a029223c7b6858fdfce54e10748298c219bc5e66feb6faba707779ff7b95eee445dfbb2d9e66334070cd92b8a872d691a2a92993d3eda69bd5a2a9702d44071275dc8e33b4dd8163dbcec0b64740932c4f57bcbc07f2ad52959cf67a07e96e264496335c71d9a5a238bef71efbbdaa16778c2ad97bafd80311d9fb50f35b2e28565c94b3ed06f41bc9ea981598e750c15f6242cede67ee725c7433003f72ca30a5a22995ae0a525051a63c6b6a93154d5f90a9f2cd016dbc95b7882c2af2a628e31217ecc44ab0c2b17aae987511ae7d6b195cac437f1e2dd741bc595c79febcbb58afb67eb0b176575ee8590a939c19ae35b3cecc2d800be8274c2a5e1af5483f6be5577f96ff0f4513405ab236188fec2176c6f684a46444d3f1c025a9cd081993918b07c4a69353769a10868167440d0b97a21c3a8e4b5c3288ed64388c4fc9d88e312338c609715cf07a94f447687f829e6aaed839979590bc7508edc265e4c551b80d16f3c8332da4b8c9d5795b986ee06d8d0a1a04d0073ded75940b50d2762f83c80be78b6879e3b5135eb10cd3e7cd03cc38c5b96480c63598a758ed8b040c43c1dcf7ce016c26767d084a34fdf582b4e7ba8a37961fe9110c5097abcc176da270195c9a720e881b9c3706f2d81e741b29cf75d1fbdf0084156d93a01f5b2ffc89daa790a5ac6625fd7c98003681cf7eb4c3da0314161f54a4823b6c0e955a83d6acdd206e9a3db22793b18b0cb856ffc4fab6e34c0e9ee91c3a232b58a95e1b6ad71efa6cc51a79044110861f18aff67f00924b2e6474040000",
    ],
    [
      "ETag",
      "GgMUp+C5Wl2BpfWsF2Ehmw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1605310013007"
  )
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
      "8d93514fa34010c7bfcbde2b4d406d6b487c285eefae06db4ae9831ad3acec80eb2d2cee2cd5daf4bb3b8b5acd7909bec0ccf09becfc67ff6cd95f590916b25b593c3460363f0ab0172e48001b65915eb5ae1098c7c0f282c8e3bbb3cbaba7648e431fa2e7c82e5106fcf1e48408cceea0e42cdcb25c8212c8c2eb2dab7809d49669d594d5aacd3c6637b52b2ed26432fd4d79a985cba7cb381e45f198edbc7da3e096af5afe1b6d373b8fddebdb0472305065e066a98dbe87cc4e9c4ce465ada087ba3119206be1f64361745373a3758f2abd7e2f18f8fdc3c0f78343df1f12a774c6add415a1cb058dc7acb65c25fa9144b2e08008d3c624386f9f6baa4bd10a71e1649a0e8edaf93e03b934685f77f20ebe69fb9754fc9b205d80545d50019500d345c97ac5853080d8496a5cf1bade63d16c167f8178258c96a21b5ccb0e40d9f51ef815cf46ff5b2dd9e663573f47e9f80b8196ccb047d2c9f978918ecee78ebb79bbdf686301e7469357109c4d02ffe8b83f1cf8afce39d5ce4d744e684d031ecb38fd007fa46561ce15c2ee05521cf3615e030000",
    ],
    [
      "ETag",
      "8hJYZxRPs70eBzBtUsi1aw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ios_app` as __result, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `ios_app`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-6-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8553eb6eda30147e95c8fbb3495cc22d10a4aa636dd646a3d085d00a4d1338e624338438d80e13aa78f79d2450da556a25a4e0f35dcecd7e226b9e2c499f043cda6620f79f56222015029a46189dad93ad6e7bdbfaf256ee7aab999bfe50abe8e202193c5729ba4963a82a914906aa3f9dd42229b2944a21aa6854b5aa0dcbecb41aa6d968996617650ae270c893358aff689daa7ebd7e4a5d8b848862a02957352636cff1faae594fa55801d3aafe3a631d93a8fabb392f63c1a8e622b9984e307fa640ce6143798c159c85cbe0eb6be71aa79b5a84e41d6740191359a2f3aad0828924e451260b57d27f2245952ffe90893374ae7c63c1859ad3345d185419f3b90495c5ba82e1e53192ae8defdef8ce58607b218f412d8cc75bc7738c92e38e8ce968e44c7ce3f3e517e3c61b4fef8d6fb302ab9ccdb1a22528cd93a21e9f0631e4b51c27e6be5d532ea09a2a28c179d7b468a367da41187459d86b7582d08420e805dd0e6d0526b3dbd05e064051a773f74245139100724ccb82a6ddb158bbbbb4991dda4d66dbac6176cc66a36bf73ac02c20870af92bb9866bae52a1783937f2e8b9be33f7bde9e86ae03b451b21c5095d97c5e54dbcac536393487aa7af438e728199f225b823dff10657befbe0947b1f4244d97eb2c5cd873456806c2ae90634c83bb1c4a191fbf1c4f5ddf168304445b1ccfb134391feafa7b3c0dfa7c59475f12503cf1bcc5043a5a4fbff30acc36a93c3e145ba071a6705a5e017a7d27f5702a481bd9c4f4d72f87dc05f85e0fd2eddc9cfa9e3cd4819f220040909fb78ef482e808f5ee9e9cd20155f0d66511acf78c998ca733009e565e39ba2daa3ba69766d931464a9df6076bb7b9a6aee913bc206127d6ca87c33c59c722853cf2404f18e8cdcd10da2ff0043030caab1040000",
    ],
    [
      "ETag",
      "Yknqt4Rq/dHrv8jYIpKsjg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1605310013007"
  )
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
      "6d504d6bc24010fd2fd3a309244a6d113c68095548634dab3d14913599a4311f93ee6e5a44fcefceae053df4b2bbf33e86f7f60865d1a430825d917f77280f7739eaa579c4a8ba4a2bbe5a6a148203a845ceca0f8cfdd9b0acbbc9baf7b2eed78fbd34ec2dc76356a8e40b6b01a323640556a982d1e7111a5123dbb65b6937b24c1f5a834c178b3098440cd4941a205a85e1641a0670726e6c6d79b5cca3f7e03988ffb36c4e0eec69176386129b044d8a56d21e133d370595a8db0a5d459d4c5081155b2297d4b54212b98cb843d71f7af703dff3fc81e73db0aea244e8821a96aede381a68d2a28ae997eb419f05d23eb96966cf1f86b5ecd0b630836fc3ddd299a8d495ef1b7ef3b7777ad0a85e25714685269e7789fa4426bee65a66b70389e0bf9e15fa329fce59449eb5c8010000",
    ],
    [
      "ETag",
      "WeR1H6kmuAV+MV2m8+dL+Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "0000000002ff1dcf4b8e82300000d0bb74ad0630089d254141402c8260d8103eeda02894af6d2773f731f36ef07e405e96781cb3a96b700bbe00cf15b829372e950c3520a17f1063d1a6c2b593e9f1d06ea9363e4b39a92833d4f3ac531d0533410d17ebeec55dd234e9f5e4307b9fd585d69b2cdebd872838539ed3025adfe8ea093293ce8fa1e6eba69fd5dab6431ebe11b9eae3c0ef3dbb4d655b30b5ee67114a722965be3910cf69a4a95df3dadc5b17a455f2e5954c520123b128c9933b91b5bc1ff5ace4213942c8d0c1314e8972ce177de7362834d6f6253c8ef51bac0066f43ee031bb7fb25b15c215f89f6713a7f8d337703ee001fcfe01a329b2a718010000",
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
      "Fri, 13 Nov 2020 23:27:01 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-7-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "2bc8fbda249027448ad628a16ba4846c405a55d3848cb950b704a7d874aaaafcf75d9ba66b55a9fd84ed7bce3de73e7826f7bccac894a4bc7868a07efa762752724640d1025fdd4c464b4fb8b7f6d0bb19c2ed22bdbc2ae7b31922b86649ba3f94d091a2a919c8e92eea16b5680eb416a283893a938e33b64703c7b69d816d4f9026a1ccd7bcba47f2ad520739edf54ed2dd4288a2047ae0b2cbc4fef5bdf7d8ef1d6a71074cc9de7bc51e8ac8dea79adf4bc1a8e2a29aed22d46f24d409ec292fd1c17f62969ebfcfdce574df2d10fcc81950c6445329ed0a533051e5bc686a93954c9f8971f9e640227fed2f628b89b2d9574945f770666554d1443d1dc0ba08b71b6b155c6cc3cd3c5e6d83245a5cfa9b7977b15def3641645d5ffaa16f299a9660b8d6cc3a37b7002fa89f8154bc32eab17ed6ca2ffd597d1c8a26a0b48436984cec31755cdb4bf374c27277304a731bd2d44d27233a486de60d6198a5409167440d8b56a21ab05136769c7ee2526f9c0cfbcc49e8c09b24ee209dc0c873531851723c237f6bae60c9e54148de76885c87abd84fe270172ce6b16f4ac86953aa656b4c17f0d6a3c20211f4494d471de5029574bb5741ec87f345bcbaf2db09afa1a0ec297ac019e7b49480685a63f314d41b9161c34830dff84b049b89fd3c052599fe7e26bae7dac59b96bfd2631ca0b6abcc974471b80a7e183b27c4152d1b03796c0fba8c9c97daf4f10f027145db24e4d7ce0f6f48fb14420e3554eceb6122d804befad14e6b8f505c7c54910aefb8394c6a0d5643bb41dc147b62f79d49df25065cab0f316fdc3ff54ce7d019610f957a29a85d7bacb3156be42b088338fcc0f4eaf80fe65ee5e274040000",
    ],
    [
      "ETag",
      "8dsSD9o8h049Y4ehCbHVlA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1605310013007"
  )
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
      "cb",
      "f52d91604d930aa92fc896ad99c89f12aabe98aac8c507736bb0679b4c28ca77ef99b6d9b44ea26fe0eef89d7ccff9e1004fa2e110c383a87eb568bab30add8d0f32b4ad74965e5a3516210074ac22f26e39cdbaa762aed372d2b26ef3fd667c2993ab2b226cf1136b06f1014a81925b887f1ca06135525ba1645b37bb3e0bc075da17b779b6587da3bc56dce7abdb344d66e91c8ec1a99133c7763dff81b6fb63008fea21c3120d3605fa59b4518f58b885976959ad258eac6a4d81167ab8ff5019d56a66941a5165341d4593f0e23c0ac3e83c0ca7c4495530275443e8ed96c603a71c9399fa4d2221fa4484e963125cf6cf3dd505ef85f870b1ca27e37ebebf815218eb5e76f206be6afb9794ec83205d80904350850d47334409bd639c1bb476905476c7b43e61b3f53a7d07b1861b25f830b817038074fb13f0355d27ff5b2dd9e6cfaebe24f9fc1d611d99e184e48be57c9b27cb8de7ee5fef77d639b41ba3c82b16bd4da2707c79319d842fcef9acbc9be89cd89916032818fd00d7c2415c3269f1f80c646ab9d55e030000",
    ],
    [
      "ETag",
      "WM7RykcEpLf6uayPJQ48lA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `date` as __result, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `date`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-8-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6e",
      "9b",
      "30",
      "14",
      "7e",
      "15e4fdd9a43401127293aa2e6b5987949296905e344d898103730b98629336abf2ee3b98a4974d6aa548c4fe2ee73bc7f613b9637944c62460c97d05e5e6d32d0f488b80a409ee5a17d9e4f1f2deba36ccb533bf0e20fb337d7c383c4406ab558266450a078257650862bc98b7939257052d393f40a383e181d1d7adaea1eb4657d707281390c65396dfa1f8b7948518773afbd2ed84f324055a30d10e79f6bcdf599b9da2e4b7104ad1795bb1834544e7dd9a47290fa9643c3f5cccb17e25a05c4246598a095e8451f0f5ad739bd1ac9d2079cd42a061c8ab5cd6a9d022e479cc92aa54ae64fc4454ca577fc8dc9edac7beb68aa884954685b65c9620aa54b6b4158b763bc59df6dd9b9d692bec2d6629889576f5c3f66cade138aeb6705d7bee6b9f8fbe68a7de6c71ae7dbb51586be78c59221092e52a894f8314ea14bb5939ff1f502da0920a68c0e540ef5363a88f82381884f1b06b05b10e41300c0616ed067a38ea412f0a80a24ed6ee4a45739e87231306100c62cbec0fa3b86ff57bddc888cc2802b38fb2d000e805e6886c5be4a164124e9828b860cdc4c895e7f8f6d2f716eef1c4b7551b31c5f19c34e1ea265ee794d82492dee96b5ba38c63a57afc8eebdbdee4d8772eede6c4a790d07033bfc7338f692a00d9b4a4194828cf78844323e7b3b9e33b33773245853ac6f33d4390f1cfa71781bf29d494a5fa9289e74d6e5043cb926efec13047bf47b6db57e52e695a298ae2ab55e3bf6e0062602f2f2b936c7f6df1d72278b31b7772b1b0bd1bd26c7910430979f8f1b92359011fbdcffd6b412abe17ac2224aef19285a2ae1196d05c3696a9b43bb5690eba5da2c8a5fc0f1b5aa3fd546b8fda1132c8e5aea1e6b5a8",
      "39d550259e4908e21d711df714d1bf083d191fab040000",
    ],
    [
      "ETag",
      "5QmAxVq5X12vISXbemzLxw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1605310013007"
  )
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
      "000002ff6d90d14fc23010c6ff97f3754bbaa1b890f800bae0124270424c348494ed3607db6eb69d8610fe77afc5a80fbcb4775f7fd77e5f8fb0afda1c46b0adca8f1ed5e1aa44f3648b14755f1bcd5b47ad46f0008d2c999cc6d7394545bca22219462fc9e275aca2f2ee8e099dbd6323617484a2c23ad7307a3b422b1be4b1cd46b91b193387ce2a0fe365cc5d43b9ede6abd96c3c99c570f2fecd74fb3f3e992fe3699c5e1a599f3cd8d136c50215b6195a0b9da21d6626b1e9b46cba1a7d4dbdca508383dd41a9a8efa422f259f1233f188a9b4120443010e296b99a32692a6a195d3db3353064649dd21767839001e54a8e59b8f5d3ca2214be087d11b82c560a9cc58b50f80b85165aff3c313918d40b456c57a3752aceaeefc926319cd0a81e3dc824fff96365cefde91b36b82184d0010000",
    ],
    [
      "ETag",
      "GE4do8fEUofI68WIPZAr8g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "0000000002ff1dcfc97282300000d07fc9591d068c90dea058089b2cd649bc6420063704ca2288d37f2fd3ebbbbd374839176dcbbaea2e4af0015ea98c567ce5d69201238ed9729730c5a115bfea1a66074267b3202bc43a13b8dc65a413089f7793371cc932f715674cbdc9d2322c131b7a375db502a309039acb56a5c419dcdece27522a8fc23962a3ed9f1059ba6b1e329fee1bec07971c3d93b195b48d58bb565f434d8b4f8fe8fb69ab436ccb6c2cfa9fb030289d364549efd168404f317d758bbf24cf9606a7cc731e24661af270af467dc7231404e7e1d2914fa2830510637d6d44cbae735681082dc0ff9c75af5acc7d43a48d68c0ef1fed1e81bf18010000",
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
      "Fri, 13 Nov 2020 23:27:03 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-9-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85536b6fda3014fd2b91f771054203e321a115d1b43041684368374d53643b3799db1043ecb44215ff7dd74ee95a556a3fc5f63de79e731f7922f7a248c8903091ed2a28f75fee2423270434cdf0f5efe5d75df573dcfd7177b5bca4fbdde3743f995e8f46881086a5e8669b4343c9aae4a086eb55332b65b5a5a5940d4cd41834dadfdcaed776ddb6e7ba3da429c8d3b928ee4d72adb76ad86a1da59b9994590e742b5493cbcdcb7bebe1b4b52de51d70ad5a6f155b28a25a1f6a7ecf25a75ac862b45ea17ea5a08c6143458e0efe131376f6367353d04d3343f083e040399755a18d2b4cc165918aac2a6d56327c22d6e5ab0359f9737f12395ce6d5a6880bba811327a19ac67abf05e7225c2e9c5970b10c17e368b60ce2d564ea2fc6cdc972be5e042be776ea87bea329cbc1729d9173666f015e503f01a54561d523f36c949ffb337b3f14434069057530eeb9df68bbef0e58ca7a3ced7b5d96bac0589ff5bad4632e1f74a09330a0c8b3a296450b5978bd3e67091bc41ee39db8c37a6e4c5dce62f0bcb49f7883de8002399c90c7526838176a2b95a83b446ec359e4c751b80e26e3c8b725a4b4caf5796dcc14f0daa3c60211f4414d07131512954cbb6741e487e34934bbf1eb09cf21a37cbfdae18c539a2b40342db1791aca854cb06124182ffc7304db895d1d838a0c7f3f11d373e3e255cb5fe8110ed0d8d5f64b5651380b2ead9d23e286e695853cd40753462a7263faf00781b8a2751272bdf6c35fa47e0a2185120afef930116c039ffd68c7b547282e3eaa288d77dc1cae8c062fa1de20618b3db24f3dafdf26165cea77b14eaf7fec99c96132c2060afd5c50bdf658672d56a917100671f881edd5e11f3251dd4974040000",
    ],
    [
      "ETag",
      "hG+quXA5JjPOGayqwHyCHQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1605310013007"
  )
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
      "93516f9b3010c7bf8bf75822c1daa41b521f92356bd9284909799aaac8c507756738cf36a9a228dfbd67da65d33a89bec0ddf13bf9fee73f7bf653b682c5ec5ed6bf3a30bb0f35b85b1fe4603be52cbd34b61658c0c0f19ac86475b27b587fc393650ee9f832b3d9f74ad7171744d8f2011acee23dab24286159fc63cf5ade00b595a8baa6ddf459c0dc4efbe2aac893ec8af20685cfb3759a4e67e99c1d8263a3e08e6f7afe1d6d7787803de27d0e1518684bf0b368838f50bac4cbb4bcd10a46163b5382653ddc7fa80d769a1bc41155469f47d1241c9f4661189d86e139710a4bee24b684ae57341e73e8b8caf18944b2e82311a68f4970d53fb75497a217e2c3242b2667fd7c7f039534d6bdece437f8aaed5f52f177827401520d4135b402cc1025f5860b61c0da4112ed866b7dc4668b45fa06e2ad3028c530b895038072db23f0355d4cffb75ab2cd9f5d5d4e8bf91bc23a32c31129929bf9aa98de2c3d77f77abfb39d03bb34485eb1e06d1285679fc6e793f0c5395fd0bb89ce899de9206025a71fe05a3a16575c59383c038957d44c5e030000",
    ],
    [
      "ETag",
      "IS+yhUJo+PReL5DNsNKfpg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `stamp` as __result, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `stamp`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-10-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6f9b3010fd2ac8fb6793920009492052d5652deb9052d212d2aa9aa6c43886ba2598da265d54e5bbef30497fac522b2101bef7debdbbf33da17b56acd008252c7ba8a8d87eb9e3096a21aa7006a7368ebcc7a91966ded449fcf95f7cd7bdbc1d1f1d0182d52c89d7654edb92578250399acf3a99e0558905e76d106adb56db1e58fd9e6d5976cfb286c093344f27acb807f6ad52a51c99e6217727e33ccb292e99ec10be7e3e37375db314fc8e1225cdb7294dc822cd8f931ee79c60c57871349f81814a52b1a06bcc72b0f0c25c25dfdf4a77185e7732006f18a198105e15aab60512841729cb2aa155d1e809699baf3ed0cc9ff827b1b1940a34970696c66221a8ac72d532966cb53f29ef8d9fd1f4dc58427529cba95c1ad7bffcc8371a4c101af330f467b1f1f5f89b71164de717c68f1b1d6b1da4c1cd8a4ac50aed25c6494e6b1ffb7605ef875413b0c29236c1c5d01a60dbb5bc244d8624757bfd24b56892b8c9b08f7b89453c873aab8462e0a95a5db370c10b8b7a69ea61cfeb11c7f5fade80a45dd71aa696ebb8b63dc0a99310a7efa568d7428f82297aca64c9256b7a86aea320f61771340f4fc6b1afcb4831f4e7b4315717f1daa7822201f4415dbb3aca3864aa071084b11f8d4fe2e0ca6f663ea11926dbd9034c3dc5b9a480c602afa9a2e29cafa069e8623a0be2601a8e27c0d083bc3820241afd7e7a21c4db527759e9371a47d1f806385808bcfd2f063e060edaed5ea5bbc279a5211aafff1afd4d134036d4f2f2d745bb3f3b785a082e77a38e2ee77e74839aa388a654d0827c3e7700ebc0a73b7a5818c0c2ca401ab86b8ac12d23b24e42046d6e1b5b6bbb7b76d7b1fb7ac31516ea5dacd7750f6dad356a45baa685da57d42c8c6e541daae43308827049c2203c83e83f4d8db88eb0040000",
    ],
    [
      "ETag",
      "1aR9wO/Ng9O4bEUxaj2QhA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1605310013007"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff6d905f6bc23014c5bfcbdd6bbba56add147cd05154a8a255613044627bdb55dba626e98613bffb6ee26083ed257f4e7e2739271738e655027dd8e7d9a94179becb502fcd2242d5145ad1548b4a2138809a6744b24990bc24f978c9e2a0f94c4f8b61113e2c07032254fc862587fe05d21c8b4441fff502152f916cbb9db43712a6cfb551d6d359b05a0f670b924a911869be09c3e1280ce0eafc32d6c71fd374be0ec641f49f657b75e020f611a628b18ad1e4a8a53860aca7a6a2e2655da0ab4423635460617b9049d1d45c0ae192e27accf5bacc6f7b8c796dc61e092c44cc752e2a62372bca065a685e44e2831a428b0069975436b5e33bc9debdffc47cbfe7f53a41cff6b1aa8df987eb7688fccdb50cb7fd7e6874d6a81652506a852630bb857f16a690a6a25a36e840cce9ff27b9beedaf5f218e0b60dc010000",
    ],
    [
      "ETag",
      "0HEdXdiGQ0cEuzfqPAlL/Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "db",
      "72",
      "43",
      "40",
      "00",
      "00",
      "d0",
      "7f",
      "d9e7c808a5f40d0911b7886136fb625c56ed884b58b564faefcdf4fcc17981ac28f034a5b46f7007bec09a09eabed83b03af4b6135a1a53a94165ed238f7113e67b677624763a5b515d118565bbfce3791e9a7eb771bf1b761b972a6ac34f255104d850f8877385e20a506d11595758e1f71cf3a99656964f192d88d913f2c5ef8a19c3b3688757767e963567e4025815a1d1045354bd47a4372be149cec16496c6d48c2cf2ddc46476e1f288444884995cf21b4f550dea45eebc9a7914544700debceec5a117dad09509dcf5bdd866007301bc888a794bcb3a2a4aa3bf03f4fe93ae0775fc7d98847f0fb078b9edae218010000",
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
      "Fri, 13 Nov 2020 23:27:04 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-11-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "14fd2bc8fbda24907723456b96d02d52433620eda66942b6b930b704536cba5555fefbae4dd3b59bd47ec2f63de79e731f3c901b51a6644698c86f1ba8efdf5d4b464e08689ae3eb32f2aa55a93f7c1ddf14bfd3db6db3afbcf1623e4784302c45f755011d259b9a839aeda26e5ecba6a2b5941d4cd4f1bc8e37764703cf75bd81eb4e90a7a0c82e447983ec9f5a576ad6eb1db5bbb9947901b412aacbe5fee9bd77d7ef55b5bc06ae55efa5640f5554ef75d1f785e4540b59ce77111a6814d409eca928d0c25f66cace5ea6ee0abaefe608be131c28e7b229b5b18529b82c339137b5cd4a660fc4da7c7620917fe12f6387cba2d9974949f770e2a454d344df57e09c87db8db30eceb7e16611afb741122d3ff99b4577b9bdd86d82c8b9fae487bea3292bc0729db973666f015e503f05a54569d563f36c941f1bb4fe7f2c8680d20ada603271c7d49bbaa72c63139e4d072396b9c0d8944d4674c05c7e3a8461ca8022cf8a5a162d6549532f1db15348d26c0cc93075dd8471982629eb0f29ebf787dea44f0e27e4572d34ac84aaa4126d87c855b88efd240e77c17211fbb6848c36855eb5c64c01cf3d6a2c1041afd47430512151c9b47b1dc47eb858c6eb4bbf9df005e494df47b738e38c160a104d6b6c9e867a23536c1809161b7f85603bb1cfc7a022b3ef0fc4f4dcb878d6f2277a8c033476b5fd92280ed7c1476be788b8a445632177edc1949189c2983efc4020ee689b847cd9f9e137d23e8590410d257f7b9808b681377fb5e3de2316371f6594c63bae0e574684d7d0ae90b0d51ed9fde174ea120baef5bfb19137181c9b6672988cb087523f56d4ee3d16da8a35ea0984419c7e609b75f803d70aa4a877040000",
    ],
    [
      "ETag",
      "CS1pDntBX6klxdqOump16A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1605310013007"
  )
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
      "93516f9b400cc7bf8bf738a2c2daa613521fc89a6dd168e812b2874e5574e50cbdeec0f4ee489545f9eef3d12e9bd649f4056cf3b3ce7fdf9f1dfc508d84186e55f5d0a1d9bea9d07df5c1026da79de5574b8d4508009da898a487edc5f2faa8b8ce26d9d1db2f3fef56e137919c9f33618b3bac05c43b28156a6921febe8346d4c86d05e9ae6ed67d1680dbb6beb8cc17b3f927ce6b923e9fafd23499a453d8078746299c58f7fc2bda6ef601dcd3ed024b34d814e867690ddd63e1665ea61575ab7164a933055ae8e1fe4365a86b85211a71651445a3681c9e1e4761181d87e119839a0ae11435ccae963c1f3872422fe8915542f48e09d3c7acb8ec9f1bae2bd92bf1e16c9e8f4ffa01ff064a65ac7b5aca6ff059dcbfa416af04f906941e822a6c249a214ab56b21a5416b0749b26bd1b6076c9265e90b4834d29092c3e0460d00da6d0ec0c7344bfeb75af6cd9f5d5d24f9f405611dbbe180e4b3cbe9324f2eaf3c77f37cbf93ad437b6588cd62d1fb240a4fde9f9e8dc327eb7c206f273e2776a6c3000ac17fc067e5202e85b6b8ff05c669a4245f030000",
    ],
    [
      "ETag",
      "oqyDSZ/cZOBO/+KzhU0VaA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `first_name` as __result, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `first_name`",
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
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-12-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fd4fa34010fd57c8de2f77496d69a1f62331dab39c9254ea01f523974bbbd0815ba52cee2ef51ad3fffd86c5aaf5124d48807defcdbc999d7922f72c5f92218958fa5082d87cb9e31169105034c5d3737fdc8fd66916c0cde86619aaf271dc2ed2a32364b04a25e9aac8e040f252c42087b3a0990a5e1654707e80810eda9d83f6a1d9b5daa6d9b64cb3873a09593261f93daaff2855c861abb5cbdd4c394f33a00593cd98af5ece5beb4eab10fc0e62255bfb295b9845b63e4e7a9cf1982ac6f3a35980064a09620e2bca32b4f0aa5c4627fba19b8cae9a2992d72c061ac7bccc55650b43c43c4f585a0a1d950c9f88b6f9e68304cec4390d8d45c28454f39cae60615069cce7026499a986b1d00e9e0f8b7be3873fbd30165865c232900be3fadcf11de385e67ac6ccf39c2034be1e7f33cefce9ecd2f87ebb831b7b89d0e012a462b9b617d22883cada7307ddffefad12504525d4e0bc671ed276df1c4449d48b93bed58d1213a2a81ff5bad48acc786083bd8c80a24e55d1b58ae63c8f12ab075dcbee241db0ba83656f60f713db0624e365746d1bef65d0b362b26d9047c1148c992cb864751bc9b5ef86ce3cf467dee92874741909c56e8d6b7355116f7d2a2c12491fd4b5ad50c631537527ae173afee83474af9c7a0c2690d278133ce020243493806c2ab0830ac4055f62d3c8e534704377ea8d26a8d0777bb9634832fcf5f42a083785eeb2d26f32f2fdd12d6aa81074f30e0b42dff5cec876fb26df15cd4acdd102fd572758d700813b1c44cea479027f75917a14b78d57060ea982f63efc7b8b4f83e056d41ec8cf99e3df92fac8870404e4f1e7d381640d7cbadcbb4d432eee1aa6910aff71166359258905d433c95695999dbad31d987da2c942bdc70e4ddbde35bf8a51458415e4eab9a27ad374372ba8942f24047194bcbad7ff0066652518e9040000",
    ],
    [
      "ETag",
      "HRD8bvglSeXAXdTtuwD1pg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1605310013007"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d91516bc2301485ff4bf6da8e56713241d814718e22b34e700c91985ebbd4b6b74b52b548fffb6ee21e644f7b49eebd3927391fb9b0832c1336603b997ed7a09abb14ccc21631e83a379ab60a4b0dcc6360784acac7a6cea7d9695d9fc5476f9d44afa63f5e2f86435268f1050567830bdb4bc813cd069f1756f202c8b6dd2a7723c94c53d9c9f23d9ecda7d41798d87ebe8aa2e7513461ad77e3aa0eff716c5a8f65b88b610f0a4a013643a530036166164ff3a2cac1d7582b019a39b13b4815d61557883e4dfcb0e3870f41af1b0641d80d823e097314dc482c49bb5a523466d0f03cc613d1b10e09942b0974efd6238d274a82a3b00d64a08e2875f0046797e25e60e112df5ac65cc8fcc625801b08ff5a36bfcf8f1a03fa4d21b168b018c115698c566d08dfa81a3c2638fdc88b34d7befd0148a7096aee010000",
    ],
    [
      "ETag",
      "9yulGjwXuxcY5XdLJt7CXQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "ff1dcfdb6e82300000d07fe9b3182e41606f5c4ce7141018a5f842b054811a20e5ceb27f9fd9f983f303724268df6743cb68033ec09acbc69eeccf9d68a901ed8e6927fbe93c890d63b19d38f2e330aff26c47618fe4be56c2c8db087e2241bb6bd8b174f8a55f2eb3e2ae711d8d3a543bf740b64254b0a90597f2454a2b5835c194a6e1365d0398682c8503768e8eb4689927ddb0fa8d38632ff1b9e588d9e3e9536dab02d50542868ff86934bd0717043113eeb0a56da94ca977766ade9627d81c21c611b5dd46cf172fda2ad493c375f38bb87693d0cec80c76802e5dc5699f55efaca21ac60efccfb361ede8bb6fd19c530e7eff00ce5f610e18010000",
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
      "Fri, 13 Nov 2020 23:27:06 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-13-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85537f4fa34010fd2a64ef5f5ba8d4d23669ce5af124d7528f52bdcbe54296edc0ad5216d9a5c6987ef79b5daca731d1840476e7bd796f7ef044ee78b9216392f2fcbe81faf1cbad48c911014573bcad8a337ffabd71e73f67aab6838b7cb11b9e3d4c2688e09a25e9b62aa02345533390e3f5aa9bd7a2a9682d440713757a6ea737704edc9ee3f45cc7f19027a1c8e6bcbc43f65fa52a39b6ed83763717222f80565c7699d8bedcdbbb63bbaac52d3025edb79236aa48fb63d1af85605471514ed62b34d048a813d8525ea085ffcc4d7afa367597d36d3747f08e33a08c89a654da16a660a2cc78ded4262b193f1163f3d50759f9737f165b4c14cdb64c4aba85236b43154dd46305d645b45c584178b18c16d3385886c96a76e92fa6ddd972be5e842bebe6d28f7c4bd1b400c3b526d6a939857840fd0d48c54ba31eeb6badfcdca0e0fd583401a525b4c1c47306b437744669967a2c1bba2769e6409a0e53ef84baa9c3467de86f52a0c833a286454b51c286f647dea89ff487304afa8e9725b43f70138f0e527c1c37a32ed91f91879a2b38e7b21292b71d22375110fb491cadc3d934f64d09196d0a75de1ad305bcf6a8b040047d50d35e47b94025ddee208cfd683a8b836bbf9df01c72ca1e57f738e38c1612104d6b6c9e827a2136d830124e17fe3982cdc4ae0e4149c6bf9f88eeb976f1aae52ff41807a8ed2af326ab380ac26fc6ce01714d8bc64076ed872e23e38536bdff8340dcd13609f9b1f6a35fa4bd8a20831a4af6f930116c029ffe6a87bd472c6e3eca4885675c1d26b508aba15d216eaa3db08f07036f440cb856ef62c39e73689acea133c2164af55c51bbf758682bd6c817100671faa169d6fe1f5094eb6777040000",
    ],
    [
      "ETag",
      "plBEAKu3LXCtr/IFgMv8Bw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1605310013007"
  )
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
      "000002ff8d93616fd3301086ff8bf9482a2574ed68a47d4847814859bba51920a1a9f2e24bf0e6e48ced7494aaff9d73360a6248d997e4eef29c7ceff9cd9eddcb56b098ddcafa7b0766f7aa0677e5831c6ca79ca597c6d6020b18385e13f9fafee7e7d9ec418fed793a9b7ec977e58fc9a7e4ec8c085b7e8386b378cf2a094a58167fddb39637406d25aaae69377d1630b7d3beb82ef274f981f20685cf97d75996ccb3053b04c746c11ddff4fc0bda6e0e01bbc3db1c2a30d096e067d106efa074a9976979a3158c2c76a604cb7ab8ff501bec34378823aa8ca2f1289a8693711486d1380c4f0954587227b125f67a4df331878eab1c1f48258bde1061fa981457fd734b75297a253e4c97c5f4a41ff06fa092c6bac7a5fc069fc4fd4b2afe42906e40aa21a886568019a2a4de70210c583b48a2dd70ad8fd87cb5ca9e41bc1506a51806b77200506e7b04de67abe47fab25dffcd9d5bba4583c23ac23371c9122bd58ac8be4e2d273374ff73bdf39b09706c92c16bc4fa2f0e4ede4741a3e5ae71cbd9de89cd8990e025672fa033e4ac7e28a2b0b875f858c1d4f5f030000",
    ],
    [
      "ETag",
      "+kzW99wp3sCI96XRycx5VA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ltv` as __result, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `ltv`",
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
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-14-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8553fd6f9b3010fd5790f7cb26e503920049a4aa4d5bdaa1a5a423a455354d894d8ecc2dc1149b6c5995ff7d8769fab14aad8404f8debbf7ee7cf740ee78b62443c2f8eabe8462fbe95630d220a0e80a4fff76cebb67909fdf1fdb19fb06228c597f363a384004af5892aef3149a5294450c72389bb6568528735a08d1c4444dabd7b41cd3ee5aa669754dd3459e843419f3ec0ed9bf94cae5b0ddde6bb75642ac52a03997ad58ac9fcedb9b4e3b2fc42dc44ab65f4bb65145b6df173d4c454c1517d9c16c8a064a09c51cd694a768e199b96447af53b7385db75608def018681c8b3253952d4c118b2ce1abb2d059c9f081689b2f3ec8d41b7b2791b148d566615069cce705c832550d63a1a51f0ff33be32c9c5c180b2c2fe129c88571fdd50b3de309e607c62c08bc69647c3efc629c8793d9a5717cb30f376a05b4b404a978a60d4594a5509979ec99fff6a62a025554421d9cbba643adbe39600973e3a4dfb5596202637de6dab4cbcc78d083de9201459eaab26b16cd44c612bb032c713ab69b74199889e374613030633bb17a74e0d8d4b5968edd23bb06f95d7005a75ce642f2ba71e43af4236f1e85b3e0641479ba8c84629b4e6b7355112f7d2a2c1241efd4b5aba25ca052750b7e1079e1e824f2afbcfae2c7b0a2f1767a8f579fd05402a26941d7a0a0b8104b6c1ab99c4cfdc89f04a33132f46d5eee11920c7f3c3c13a26daebbacf49b8cc27074831c5a1474fb5f6c1a857e704e76bb177a57342d354613f45f2db0a903046e71f40497e611fcd145eae1db359e1138960aacd7e19f3b7c1a04f7a0f640becfbcf086d44721245040167f3c1d08d6810fd779bf5b88c5ed4219a9f01f67319695485c403d937c5d99d9b33baee3f6880617ea4dacdf33f7cdaf725419610d997aaca8de2dddcd2a54ca271006719482bad7ff00d7b7dff3db040000",
    ],
    [
      "ETag",
      "z2G3FepGqB5nbKeoRcb8UA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-14-1605310013007"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff6d91614fc2301086ff4bfdba918d01061212c1886026e88018630829dd81836d37db0e5c08ffdd6b314a8c5fdabbebfbb6ef931ed92ec963d661ab64f35182acae36a09f4d11812a53ad682b3057c01c069a6f4839dabdbe4ce24a0e0f837252050fb3c7e64a1dba5d5228f10e19679d235b2790c68a75de8e2ce719906db994f64692e9aa30934138e9cda8cd3036ed781e86bd7e78c74ece85a9d8fd1aa6b36834beffcfb138396c8bab08d620211760221412b720f4c8d0299e1529b80a4b2940312bb6071b8965c125a24b13d76fb87ecb6b06bee7f981e75d933045c175823969e7538ac6346a9e46782038562781b42571aeedba37e366bbe6d72d8769610b728f89f26ee0d3e6a809cc6ce64b53bb510b5a3f1e015c83ffd7b0f87ebe5f69504f12894581c1f0ce48b768d49af0b52cc16182d3870c137dee4f5fc26e2037ed010000",
    ],
    [
      "ETag",
      "IkYWOdyrHwFuOy3JTM5bsw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb646d1d5af9487710b00a680d2a021b268480c84720e167a777afd37783f703302194b1883f0a5a834f30e30f7549967623e812a2aa0961381c3dae180c1d1261fd0c8e2b125c6eca247ddb672349696ecd3e7a16a88cc6f71e1f538741822fe4e989e5d956dc5590c207bc16bb6d3dc89b93131b29de35716a6e2be4c4074be1467b773a0d6d5a5e7158ebd95e1dd8579764fe5b3c557b713d0a93a7c9f5754a6a4b0c1376bdb7123f6d95d46efbb674ad5be51b19277c379a3c936c846820c31e56de61c659540b08ba95ee8d7d38686001e8d4e41d6551fecaae24555d80ff79c4e786befa3ac51dedc0ef1f92ed8bec18010000",
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
      "Fri, 13 Nov 2020 23:27:08 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-15-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "3014fd2b91f795b62969fa92aa5195302ab5294b52d0344d91e3dc6486340eb15340a8ff7dd70e652024f814dbf79c7bce7de499dcf132255392f0fcbe81fae9dbad48c8090145737cbdbc6f1eae52f678b3de6fca6a737d4777159fcf6688e09a25f15e40478aa66620a7dbb09bd7a2a9682d44071375fa6ea73fb45da76fdb7dc7b647c89350642b5ede21fbaf52959cf67a47ed6e2e445e00adb8ec32b17b7defed4f7b552d6e8129d97b2fd94315d9fb5cf47b2118555c94b36d88061a09750c3bca0bb4f09f992667ef537739dd757304ef3903ca98684aa56d610a26ca8ce74d6db292e9333136df1c48e8adbc4564315134bb322ee90e4eac942a1aaba70aac8b60b3b696fec52658cfa3e5c68fc3c5a5b79e77179bd576ed87d6cda5177896a24901866bcdac3373f3f182fa2948c54ba31ee967adfcd2a0e5c7b168024a4b6883f1c81ed2fed89e24593262d9d87193cc8624192723973a89cd260318a40950e41951c3a2a528fb8331a3e96410e377180fecd3349e5070f1eaf699e33ae978ec90c30979a8b982732e2b2179db2172132c232f8e82adbf98479e2921a34da1ce5b63ba80b71e151688a04f6a3ae82817a8a4dbbdf4232f982fa2e5b5d74e780539654fe13dce38a3850444d31a9ba7a05e8b141b46fcf9da3b47b099d8d53128c9f4f733d13dd72edeb4fc951ee100b55d65be248c82a5ffc3d83922ae69d118c8be3de832325e68d3873f08c41d6d93909f5b2ff845daa70032a8a1645f0f13c126f0e5af76dc7bc4e2e6a38c5478c7d561528bb01ada15e2a6da23fb74ec3ae64755b4561f624367786c9acea133c20e4af55251bbf758682bd6c857100671fabe69d6e11f1c91968577040000",
    ],
    [
      "ETag",
      "HquwPdcxWMvOnpOVkampiA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-15-1605310013007"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d93dd4ee3301085dfc55c924ac9f60714898b962d2522b4d006248450e5c693ac5927136ca750557d77c6812dab65a5f42699997c23cf199f6cd96f590a16b295cc5f6ad09ba31cecad0be6606a650dbd2a2c0d308f81e53991f964f0707c65ef8f6f276fddd7cb5510f1d3fbfcec8c0893fe8282b370cb32094a18163e6e59c90ba0b614555d94cb26f398dd54aeb848e6d174427981c2e5d3bb381e8ee231db79fb46c12d5f36fc016d4f3b8f3de36a0e1968285370b3541a9f21b5919369785129e818ac750a863570f321d758575c2376a8d209fa9d60e0f7bb81ef075ddf3f215061caadc492d8bb05cdc72c5aaee6f84a2a59f08308ddc4a4386b9e6baa4bd1287161344d06bd66c0bf814c6a633f96f207fc14f72fa9f88120dd80546d500ea500dd46c96ac985d0604c2b8966c9ab6a8f8d66b3f81bc44ba1518a76702d5b0065d77be0229e0dffb75af2cdd7ae7e0e93f137c25872c31e49a2ebf122195edf38eee9f37e471b0be6462399c580f349e0f74efb2703ffc33ae7e8ec44e78456d7e0b194d31f70292d0b33ae0cecde01bfa46a995f030000",
    ],
    [
      "ETag",
      "gG6Y+KtV+QGx3wHb1Ia8Vg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ios_app` as __result, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `ios_app`",
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
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-16-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8553616fda3010fd2b91f765532924408020552d6bb38d8d4217025d354d609b0b731be2103b6d51c57fdfc529a55da5568a94c4f7debd77e7bb0772239205e9122696eb1cb2cd876bc9488580a64b3c6d2ece576be7d7f47bf2e3e0eefec075a6696d7d7774840851b0145da5311c2a99671c547732ae2e3399a73493f210131d3a2d7c6cb7e1d8b6d3b0ed36f214c4d1402437c8feab75aabab5da4ebbba947219034d85aa72b97a3aafddd66b6926af816b557b29594315557b5bf438969c6a2193a3c9180de40ab219aca888d1c29eb960272f5357055d559708be151c28e7324f74610b53709944629967262be93e1063f3d90719fb03ff34b4e642aa194dd3b94595359b65a0f25857acb9917f3c4c6fac2fc1e8dc9a6389918841cdadcb6f7ee05b4fb0fed09a0c87fe38b43e1e7fb2be06a3c985f5f96a17aeec55d0da02941689311652164361eab177fdd7375610a8a60acae0ac6db7a8d3b13d16b1368f3a0d97453630d6616d973698cdbd2634170c28f27491ddb06822139b77ec88daf53a7799db710158bd098ec75a8ee77978091e6f30b7cd22b2ad90bb4c6838132a954a940d2497413ff4676130199ef642df9411516cd55969ae28e2b94f8d4522e88dbab6455448542a6ea33f0cfda0771af6a77e3900035852be19af7104221a2b4034cde80a3464e772814d2317a3713fec8f86bd0132ccad5eec108a747f3fec09e126355dd6e64d7a41d0bb420ecd32baf92f360e83fef02bd96e9fe94d699c1b8c2198bf52e0b60c10b8c6119442d927706f8a3443b8adec11389e1a9c97e13f5b7c2a04f7a1f4407e4efce08a944701449041c2df9f0e049bc0bb6bbddb31c4e296a18cd2f88fb3c85521c233286752ac0a333b76dd6bba1e31e04cbf8ab59cfaaef9458e2223ac20d18f15953b66ba598472f504c2208ed2b0ecf53f3ed525d5e3040000",
    ],
    [
      "ETag",
      "4dMmq1XVJnK+wx+51Vp/qw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-16-1605310013007"
  )
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
      "51",
      "6b",
      "c2",
      "30",
      "14",
      "85",
      "ffcbddab8e76b20982301de2ba75bad5f9e21089f1b66b6d7b6b92ea9cf8df771307ca1884f6e6f43be939e400ebb45c41079669b2a951edaf12346f768850d7b9d1fcaaa8d4080d402312269f5e280876d12c6bebefe7e560586e669baf5db7cb84969f5808e81c204e315f69e87c1ca01405b26db150ee44c6ccbeb24a7f3c0e07bd110b05adac309a8661af1f0ee0d8b8b055ebb365f21e05a3e17f8ef9b101192d238c516129d186a81465284d60fb695154393635d54aa20607bb0f89a2ba128aa8c94ad3bfe3e5ddb67ccff35b9ed7663027294c4a25b3d30947034346e411edb81edc30a0dcc84d63f7dcb26c548dae85dd60866a4ba9f6eef1cba5b89654b8c4979658e4faec91280cfa7f0df3df9ff7f706f5ab226ea2d196f04e851ec8d286cbdb000d90822fe43135a7fdf1078e2d0550ed010000",
    ],
    [
      "ETag",
      "JMoIIwRZj7szKbEGnqZqxw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "ff1dcfcb7282301400d07fc95a9da0a691ee40ace2ab4ad11237190cb7a050c983a8d8e9bfd7e9f983f3835221c018ded4255cd02b6ad3bedb13bd85c43ed9c2223c38a93b3fac31a994e937f09ecc70e6f42307a6eb21b5f861afd07dac6e76327ed89c1dd94c8da9ff3d7a9b248528a7e2368b282f584c37c3a55486078674c9603b69419cc3e9a65dc65e49e113aa24e69c8aab0a3f5e24d4acb6cc395576a53d9d06434fcc0b1dc609a575d01d552555d84a5f61cfae6ed9deddb1e399e06cbb2fa9774f64514659937fa9ea92ed525df05c08626aa2d639ea20b8cb9306c34fcfec80b86e07fdcf79d34a78f67d483568f4fb07b237534e18010000",
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
      "Fri, 13 Nov 2020 23:27:10 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-17-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c87b5c934009098914ad514a57a64036425a4dd3848cb1995b82536c324555fefbae4dd3b5aad43e61fb9e73cfb91f3ca27b5e17688a725e3eb4b4397cba13393a4354e1125edd03b5a3cff78c495c45ccfb76930cc3aa9ccd00c1354be2edaea23d29da865039ddacfb6523da1d6e84e841a29e33ee3923db731ddb765cdb1e034fd28a2d797d0fec3f4aede474303869f74b21ca8ae21d977d22b6cfef83fdf960d7883b4a941cbc961c808a1cbc2ffaa512042b2eead9660d065a499b8c6e31afc0c27f66915fbc4edde778db2f01bce7846242445b2b6d0b521051335eb68dc98aa68fc8d87c7140eb60192c528b88aaddd6598db7f4cc2ab0c2993aeca87595ac222b8caf5649344fc3559cad17d74134ef2f56cb4d14afaddbeb20092c85f38a1aae35b32ecc2d860be817542a5e1bf5543f6be5a706856fc7a209202d6917ccc6f6083bbe3dc9593e26cc77bd9cd934cffd7cec6137b7c9644887454e31f08ca861e15ad4f6d02d88eb8e33df61241b8ed930c36e9167be977bde64e2bb6ce4a3e319fadb70452fb9dc09c9bb0ea1db244c832c4d36f1629e06a60486db4a5d76c674012f3d2a281040efd474d4512e4049b73b8cd320992fd2f026e826bca4252687f503cc98e14a5240e3069aa7681389021a86e279145c02d84cecfb2928d1f4d723d23dd72e5eb4fc999ec200b55d65be689d2661fcd5d839216e70d51ac8be3be83218afb4e9e36f00c28e7649d08f4d90fc44dd5342196d684d3e1e26804de0c35fedb4f78085cd0719a9e00eab43a416210ded56889b6a4f6cd776bc0932e046bd899d8f26a7a6e91c3a23ddd25a3d55d4ed3d14da89b5f2190441987e6c9a75fc079d210e8a",
      "77040000",
    ],
    [
      "ETag",
      "3ye0M+kffsalMf5JVR4Ilg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-17-1605310013007"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d93514fdb400cc7bfcbf19a4ac9801645e2a1651d440a2d6bc34b27541d3927bb7289c3f9d2aaaafadde70bac9bc6a4f092d8cecf3aff7dff1cc48bae9588c5b32e5f5bb0fbb312dc771f2c805ae3885f0dd6042210e064c9e46e55dd962bb959dd5c194ab0da11996c777dcd04e53fa192223e8842835124e21f0751cb0ab82d47d356f5bacb02e1f68d2f2eb34532bbe5bc42e5f3d9639a8e27e9541c8353a3924eae3bfe136d4fc7406cf079010558a873f0b334163790bbc4cb245935060684adcd814407771f4a8b6d232de2802b8368348886e1e5791486d179188e1834984ba7b166f671c9f309874e9a05ee58a588be3061bb981517dd73cb75ad3a253e4c66d9f0a21bf06fa0d096dcdb527e83efe2fe258dfc24c837a04d1f5442adc0f651ba594ba52c10f592486bd934276c329fa71f20592b8b5af5835bdd0318b73d01dfd2f9f87fab65dffcd9d5d77136fd409063379c902cb99f2eb3f1fd83e79edeef77b277400f16d92c04de2751787175391a866fd6b9416f273e2776b68540e492ff803bed445c484370fc05000059375f030000",
    ],
    [
      "ETag",
      "wZmGgZajZC8lsIomwsslTw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `date` as __result, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `date`",
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
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-18-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "40",
      "10",
      "fc2bd6f54b2bf1b03160408a124a9cd41581d4983c5a5570b6d7ee25c6e7f8cea424e2bf777d863c1a29918c8c6f677666f7761fc92d4b4332203e8bef0ac8379f6eb84f6a04248df1f4fbcf93d65521f4fbd9e8aad77af0d6b6f1100e0f0e10c14a96a0ab2c81bae0451e8018cc678d38e7454673ceeb98a86ef4ea4657ef9886ae1ba6ae5bc81390446396de22fb8f949918349b7bed46cc799c00cd9868047cf574de5cb79a59ce6f2090a2f95ab2892aa2f9bee861c2032a194f0fe633345008c817b0a22c410bcfccd03f7a9dbac1e8aa112378cd02a041c08b5496b63045c0d388c545aeb292c12351365ffc21337b6c8f3c6d1952094b8d0a6db1c8411489ac694ba5bd3bcc6eb513777aa62db1be88252096dae537dbb5b5279833d1e693893df3b4cf875fb453773a3fd7be5eefc3b59d049a0a4148962a4b1ef51328edecbae6bcbdab9240251550051796dea5464feffb916f0551cfecf8910ebedff3ad0e357d3de8b7a11dfa409127cbec8a45539e86d00fc2a8d537bbd46a9b91df69b74d8b52c30cad3640bb43fb41d4e9b5ba645b23f7399370cc44c605ab5a472e5dc7b3179e3b9f8c869eadca8828f6e9b8325716f1d2a7c42211f44e5ddb32ca382a95f7e04c3cdb1d8e3ce7c2aeae7e0c310d36b33bbcfc882602104d73ba0209f9190fb169e47c3a733c673a198e91a1eef37c8f1064f0ebf199e06d32d565a9de64e8bac36be4d03ca79bff6233cf7526a764bb7da1774193426114417d5502eb2a40e006878f33a11fc15f55a41abf6ded19818329c1781dfebdc5a74670132a0fe4c7dc76af4975e4420439a4c1c7d3816015f870a1f7db8558dc2f941112bf711603518a04395433c956a5993d1b7f9d2e51e05cbe891996b56f7e99a3cc082b",
      "48e5aea26abb5437cb50219e4018c4519a54bdfe070eb5060ddd040000",
    ],
    [
      "ETag",
      "JZF2Xus0wSCX82zTvE1zdA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-18-1605310013007"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff6d91614fc2301086ffcbf97533dd88604848644a9484a00cf6c91052c63107db6eb41d8a84ffeeb51835862fedddf5799bf76d8fb0cdab1574619967bb06d5e12a4333b1458cba298ce6ada64a23788046664cee7494f49f8b49948c9568775a3394bbcf49afc7844edfb094d03dc23ac762a5a1fb7a844a96c8b2c542b91b193387da4e1efab3017725ad6c374e46a37e341ac0c9fba3a9b7bffc74160fc78f9714f393071b5ac6b84685558ad641ad6883a919da705a967581bea646a5a8c1c1ee2053d4d45211f93cf1835b3f688b9b562044d012a2c36041a9343955cc2653b606868c2c627ae76c1032a05cc931d76edddbb108852f425f042e8b1de106d59e722deef0c379b94ea974be2f0ac31f618ad260f05f35fff6111d0cea17451c4aa3cd23ced9eec9d286dfc1a8063d48257fcc536ecefde90b3ff17b47f5010000",
    ],
    [
      "ETag",
      "qsBUAOlQBUNr0673TeaqzQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "300000d07fc9599d427080de585c3022082e854b26c550902d26b12c9dfe7b9dbe3f783f8064191502cbaea22d78072351cd45b640eccd5e1e73657fa9e7b7b50c9987ce4f1eeb828a02c2303b4eedd6703dafd13d35472dffca585f24d2c8fb25ce0fd45ef17513e9f762eb3fb5ea26e76178d4eee62ef22109b815d5343eecafa826835e4eb0c4dabd40f6e3a3b5ba8d8f304ffc79206a43c127d5846ec2bebba7315c92b87552eaee3a27fd346dcd62e7921a68244eaa840f432ad9c93a4f93d85d3668ad6a41ebca2074065df0d5356695df901ecc001d58c9a9c0e52b0b97a63903ff732c47465f7d9b124e39f8fd035ef14e8518010000",
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
      "Fri, 13 Nov 2020 23:27:11 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-19-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85535d4fdb3014fd2b91f74adb94b434ad548daa8411ad4d479a82a6698a6ce72618d2b8c40e08a1fef75d3b948190e029b6ef39f79cfb91677227aa8c4c0813c57d03f5d3b75bc9c811014d0b7c0d82fcbe61751d863fbd1b0d778fc75e75399b4e11210c4bd1edae848e924dcd414d36eb6e51cb66476b293b98a8d31f77fa27eed0ebbb6edf73dd11f21494f9425477c8bed17aa726bdde41bb5b48599440774275b9dcbebef71e8e7bbb5ade02d7aaf75eb2872aaaf7b9e8f75272aa85aca69b351a6814d4296ca928d1c27f66c64edfa7ee0abaed16087e101c28e7b2a9b4b18529b8ac725134b5cd4a26cfc4da7c7320eb6011cc1387cbb2d9566945b770e46454d3543fedc0398f574b278cce57f1729684ab285dcf2f82e5ac3b5f2d36cb68ed5c5f0471e068ca4ab05c67ea9cda5b8417d4cf40695159f5c43c1be59706851fc7620828ada00da623f784f67d77cc7236e2b9ef0d59ee02633e1b0da9c75c3e1ec02063409167452d8b56b2f2fd3163d9185277085e3ae07c90d2513e4ab321f3737f3474fd1cc8fe883cd642c399503ba944db21721d87499026f1269acf92c09690d3a6d467ad3153c05b8f1a0b44d02735ed4d54485432ed0ea3248867f324bc0ada092fa0a0fc697d8f33ce69a900d1b4c6e669a89732c3869168b60cce106c27f6eb105464f2e799989e1b176f5afe4a4f7080c6aeb65fb24ee230fa61ed1c1057b46c2ce4a13d983272511ad3fbbf08c41d6d9390cb4d10ff26ed530c39d450f1af8789601bf8f2573bec3d6271f3514669bce3ea706544780ded0a095bed81edf54fc67d62c1b5fe10f35defd03493c364842d54faa5a276efb1d056ac51af200ce2f423dbacfd3f5be696e177040000",
    ],
    [
      "ETag",
      "EEfqubrrIIK3htekw23nQA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-19-1605310013007"
  )
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
      "000002ff8d936f4fdb3010c6bf8b79b9544af8d3b248bc68a1d048a1656d989810aa4c7cc94c1d5fb09da2aaea77df394087c6a4f026b9bbfc4ebee7fc64cb56520b16b347593e3760360725b81f3e98836d94b3f4aa515b600103c74b2217bfe4544fbe55abc1e4e7dd0af125598d47e5d9191136ff0d1567f196151294b02cbedf32cd2ba0b61c5553e9659b05cc6d6a5f5c64f3647a457985c2e7d3db341d8ed231db05fb46c11d5fb6fc17da1e76017bc2c739146040e7e067a90d3e41ee122fd3f2aa56d0b3d8981c2c6be1f64369b0a9b941ec51a5177def45fdf0e4280ac3e8280c07042accb993a889bd5dd07ccca1e36a8e2fa492458744983626c545fb5c535d8a56890f9369d63f6e07fc0814d258f7ba9477f04ddcbfa4e25f04e906a4ea824ad0024c1725eb2517c280b59d24da25afeb3d369acdd24f10d7c2a014dde05a7600caadf7c0653a1bfe6fb5e49bbfbbba1866e34f8475e4863d9225d7e34536bcbef1dcc3dbfd8e360eec8d41328b05ef93283c3e3d19f4c357eb9ca3b7139d133bd340c0724e7fc0443a16175c59d8fd01dcdaa10f5f030000",
    ],
    [
      "ETag",
      "SYiNnH+mk7HVXkoowIkEBg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `stamp` as __result, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `stamp`",
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
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-20-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "e2",
      "40",
      "14",
      "fd2bcdec97dd04a1a53c0a895156bb6e23162c45e36e36301d6ebba3a5533b5357d6f0dff7762a3ed644131260ee39f79cfb7a20373c5b91218978725b42b1f9742d22d220a06882afe688597f37c7e5fcc769af73e96ef8f4de393ddfdf4704af5892aef314f6a4280b0672389f35934294392d84d8c3447b6d73cfea995ddb324dcb36cd3ef224a4f1986737c8fead542e87add64ebb990891a440732e9b4cac9fde5b77ed565e886b604ab65e4bb65045b6de173d4805a38a8b6c7f3e4303a58462016bca53b4f0cc5c4587af5337395d371304df710694315166aab2852998c8629e9485ce4a860f44db7cf183ccdcb17b141a4ba930e7d2a0d2582c0a9065aa1ac6528b3f3ee637c6b76072662cb1c098a72097c6e57737708d2798e71b73df7767a1f1f9e08b71124ce653e3ebd52edcd869a0ad1548c5336d2aa4510a95a1c7be796fa75511a8a212eae0a26ff6a8e59883288efa2c76ec6e149b10454ed4ef523b32d9a0039d55041479aacaae593413d920b2a06377bbabf6a01f75daf68a391de6601a6af7ba0e8b3b3dcbc4fec564db207f0aaee098cb5c485e378f5c065ee82ec260ee1f8d42579711536cd4716dae2ae2a54f854522e89dbab655940b54aa26e1f9a11b8c8e42efc2ad873f8684b2cdec16c71fd35402a26941d7a0a038132b6c1a994e665ee84dfcd118197aa2d31d4292e1cf876742b8c9759795fe26a320185d21871605ddfc179b8581e79f90edf685de054d4b8dd104fdaf16b8ab0304ae71fd0497e621dceb22f5026e1bcf085c4d05d6ebf0af2d7e1a046fa1f640cee76e7045eaa700622820631f6f078275e0c393dedd1762f1c25006375271dc45262b115640bd937c5d99d9b1ed76af67120d2ed49b58df",
      "69ef9a5fe5a832c21a32f558517d5fba9b55a8944f200ce22af975afff01b19e52bddf040000",
    ],
    [
      "ETag",
      "0Ac1zyDuUZK64WEyiPx8KQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-20-1605310013007"
  )
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
      "00000002ff6d915f4fc23014c5bf4b7dddb0038642422220c1291018e08b21a494cb1c6cbbb3ed5042f8eede15138dfad23fa7bfd39cd39ed83ece36acc5d671f456803a5e4560a6e522045d2446d39463a681390c8c88881c478be2baa80e82c67daffaf45cd38fc93e98b6db4468f90aa960ad13dbc6906c346bbd9c58265220db6aa5ec8d8499635e2af360d49fcd3ba30949296e4a69bc180e3bdd619f9d9d1fc67cff6d9acdc3603cf8cfb13c3b6c87eb10b6a0209350c6c815ee409aa06ca8459a27e06a2c9404cd2c6c0f2285452e14a24b8a5be5aed7e07ecde3dcab717e436082529818336217338ac60c1a9184f84e055995006597d4756bc703c95ec5bfe5bedff49af57ed3d62955d8813a60acf91d7cd8381589a98dfec7dba893fba7578230e0fd362ebfd2748f06f4442155d350b6e297863d2c6943af6154010e9382fee8213697fdf913d3e672f300020000",
    ],
    [
      "ETag",
      "NgUu/u2GI6DC2KV3sJlkIQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "02ff1dcfe17243300000e077c9efead968c3fe512315ed2a7576f3c7898b20312a4ee96eefbedebe37f87e4051964ca97cea05fb066f602d5eed6db9c583eeeee22a696a45d7e065bc8b4cfaed3a637838bb75ae27b728ab2524531c4082bcde91d6689d70918fd5c29de1c267da650645dc43c5fd410a6baa4379881d47b45f28ba2e74e94833a5618a9784eed377dea90fae69556fc101e9a6ab438e51107934de5f8eca4cc42926cac4a947183953d184657af689f0ef7d807d68476167afed9ce5108aaba795508993ba493e7495763d4617a9d8a7718bc106b0656846a6f2e6993576b6bd01fff37c5a07f6ecbbac18d9087eff00ebc48fad18010000",
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
      "Fri, 13 Nov 2020 23:27:13 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-21-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6f9b3014fd2bc8fbda2410a07948d19aa5748d14484b48ab699a903117ea8e60824da7aeca7fdfc5345dab4aed276cdf73ee39f7c113f9cdcb944c49c2f37d03f5e3977b919013028ae6f8eaeed7cd3c92977b8ffebd726faf87dffc359dcf6688e02d4bd25d55404f8aa66620a7db4d3faf4553d15a881e26ea0dad9e756abab6659a966d9a23e44928b2152f7f23fb4ea94a4e0783a3763f17222f80565cf699d8bdbc0f1e8683aa16f7c0941cbc951ca08a1c7c2cfab5108c2a2ecad97683061a09750c3bca0bb4f09f9926676f53f739ddf573043f70069431d194aab585299828339e37b5ce4aa64f44db7c75201b6fe52d228389a2d9957149777062a454d1583d56605c846bdf580617ebd09f47cb75106f16979e3fef2fd6abad1f6c8cdb4b2ff40c45930234d7981967fa16e005f553908a975a3d6a9f5be5e7062ddf8fa525a0b4842e188fcc536a8dcd49922523968d6d37c94c4892713272a99d986ce28093264091a745358b965873e64e1ccb75e3896366b1633aa3780cc33476ada1e5d2241dbb964b0e27e44fcd159c735909c9bb0e91db70197971146e83c53cf27409196d0a75de196b0b78ed51618108faa0a6431be50295da762f83c80be78b6879e375135e414ed9e3668f33ce682101d1b4c6e629a87d9162c34830f7bd7304eb895d1d83924c7f3e91b6e7ad8b572d7fa14738c0d6aed25fb289c265f05ddb39226e68d168c8437720155abec3dad0f5e117227149bb2ce47aeb853f48f71442063594ecf3692258073efdd78e8b8f585c7d94910aefb83b4cb622ac866e87b82ef7c8b66d7b62110daed5bb9833393d76adcdd166841d94eab9a26ef1b1d04eac912f200ce2f803ddadc33f513f09b478040000",
    ],
    [
      "ETag",
      "5qOuATsHqEazP5WQ2BMOaA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-21-1605310013007"
  )
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
      "0002ff8d925b6f82401085ffcbf41513f01e923ee0a5d6c45b151f9ac6981506c42e2cdd5db4c6f8df3b4bad6dda26ed0bcc0cdf2ce71c38c1739285e0c226895f0a94c79b18f58329e6a80aae15dd729129040b50b398c85e55ef07d398f70e696dd37daca9d7b6720eb7b744a8608b2903f70451823c54e03e9d206329d25a20789166ebb2b3401f73335cf8f3e164407d2a42d34f96a391d719f5e16c5d1743a6d9bae4ffb1b63a5bb0139b394628310bd068c9a5d861a087c6a66269ceb1a24421035450c2e583588a226752880a4d2a55a7e234ed46cdb16da766db2d02b908984e4446ec7241fa400bcdf85c1cc825340990654986a3f2baa7711296464c399cf8cd7aa9ef2b40d2a284e3fa6f90f46e197d860fec12c1778ea5a2c8f495ba1b4dbddf8ea34c3f8fea797eff07a134257545fce1b8bff0bdf1cc70ab8bf7ce51a39a4941412a34193a76bddd6835edf758bbc2444def71b52cd08280d1df719f687023c6159edf006ea2161e7b020000",
    ],
    [
      "ETag",
      "D2tvGOglDwm3bCY3sx8s1w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COALESCE(AVG(`amount`), 0) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-22-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8553eb4edb30147e95c8fb035adb24bdb712625dc958b692429252d034b58ee3048f240eb6d3a9427df79d2414e89040aa94dadfe57ce7d87e44f72c0bd118052c7e28a8d87efac303d44054e11876bdd18f9b4db77b43eccf84e83fadced25f5ec52727c060a54ae2344f6853f242102ac70baf150b5ee45870de04a366bbdd34fb46af631a86d9318c01e8244da219cbee417da7542ec7babeafdd8a398f138a73265b84a7cffbfaa6ade782ffa14449fdb0a40e55a4fe7ed1d38413ac18cf4e161e042824152b9a629640841765187c39b46e319cb662206f18a198105e64aa8c05168467118b0b51b9a2f123aa62befa833c6b664d7d6d3a9fcc2c6f6a1d4daecf8fd6382d3dd6c70dcd38d6b0d4562b416591a886b686f62296d0150bd73592df6bdfdcf9052010e60e4b2ad7daf2bbe55ada21d976b485e3589eaf1d9d1e6be7ee7c71a97dbd3de040e0904ac5b22aae8f838496519f266abf3dc7528015d4acc1d5c0e86373688c8228189068d8e90591418360180c7ab8131864d4a5dd30a01874aa74af5438e3591f07018e48af1d85213507061e754cdc19067844a370346853d2ed830541bb06fa2b98a2674ce65cb27aac68e9dabeb5f2dd85339df856d54684615e6775b8b289d739153409a477fada9528e350a93c23dbf12d7732f5ed6babbe16331a63b2f51ee06244389114d858e0942a2a2e780843439773cff6edb9339981a23aebcb3d43a2f1afc71781bfcdab29abea8b26ae3bb9050d16026fffc32047bf8b76bb57e5ae715254948a5fad6aff4d0d20137a7959b5d1eef70e7e0d04f7bf7647570bcbbd45f5964b232a68463e3e772057c087cf78ffa6800baf0aca48056bb86544964588a0f56d636915f749dde99ac6105564a1de60edbeb91f6be9513ad29466eaa9a3fa4d55832aa1423e9300844be2d8ce39a0ff00231b733ad3040000",
    ],
    [
      "ETag",
      "S9JXv44XcI+cc/KE3WTWQg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-22-1605310013007"
  )
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
      "5d",
      "4f",
      "c2",
      "30",
      "1486ffcbf17633fb084c49b8180685644198122f0c21a51ce6605b6bdba184f0df3d2d2660622fd6f3f1bcdbfbee08bbb259430f5665f1d9a23adc146866b6c851b795d17449d168040fd0b0824823efdfd23c89c67c3a62332cd2ce773c48fb7d2234ffc09a41ef089b12abb586defb111a5623c9964be5de489839483b79cc9ed3576a6bb1b6ed649e65e9201bc2c9bb12c9dd45309ebc0e9f86f97f92c5c983ad58e5b841850d47eb412ab1456ec6369e66b5acd0d7a2551c3538d82d0a255ac994103e4dfc28f2c36ed089c32008e3204808ac0467a6140db1f317f206461856e5e28bd2414480722505ddb8e79ec6e1ed5dd20dae4eec42ed9dc27afd0b27977568d78bdf8f0c0e06f5540972acd19a0dcec61f840d6328a4512d7ac019fdf75169cefde90728f9b865d4010000",
    ],
    [
      "ETag",
      "tp9WAR72IcPHaQegA5x3BA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "02ff1dcf516e82300000d0bbf45b8d5850ba3f1a75930a82548cfe34582a5888d4b631a0d9dd67f66ef0dea0e05c18c36cd7883bf802433143133e216a8abd5468827146af9540c67abcca4fee06b60ff6da7d3ff0025d230f056d334777d967f32cbde4e3320c28bce6ae818d5a84472a5d3762089ecfebe3f3b4da4c7be627b03df0a5b431dc1e4c17dae122577131cb51c77db3e4258bf896846bf7b67f65fd2a4195dc3323964e12ca9a26434b318e9ea40c74aa0ff61c7368955221214e5bd795b4d14b97de25f0f775399e5708a56ed33894d01fb3abc008885eddb430ecf6c9420fa111f89f333b28f1e9635168a1c1ef1f476b4ff818010000",
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
      "Fri, 13 Nov 2020 23:27:14 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-23-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85535d6f9b3014fd2bc87b6d1208492091a2354a68cb14c806a4dd344dc81843dd02a6d874aaaafcf75d4cd3a5aad43e61fb9e73cfb91f3ca37b56a5688112963fb4b479fa72c7137486a8c439bcfe4c13a318cf36dea5977d4b71e4e68c5fe4cb252058c712b8ac0b3a10bc6d08158b7d38cc1bded6b8e17c008906637360ccf4a969e8ba61eaba053c418b6ccbaa7b60df4a598bc56874d41ee69ce705c5351343c2cbd7f7d1e3785437fc8e1229466f2547a022461f8b7e2d38c192f16ab90fc1402b6813d312b3022cfc67a6c9f9dbd44386cb610ee04746282684b795ec6c410ac2ab8ce56da3b2a2c53352364f0e2874b6ce3ad2082fdab28a2b5cd2332dc512c7f2a9a6da45b0f334d7bfd805de2a72777e1caeaf1c6f355cefb67bcf0fb59b2b2770348993822aaeb6d4ced5cd870be8a754485629f5a87bee945f1ae4be1f4b47006941fb606ce9336cd8fa3cc9128b64b6394d329d26899d58536c263a994fe8244d28069e12552c5cf1cac4f6dcb066569cda2689277862c58991e9b169cd8db1a94f6d3c36d0e10cfd6d98a41b266a2e58df217413b8911347c1de5faf22479590e1b6909bde5857c0a947090502e8839a0e5d947150eadaedfa9113acd6917bedf413ded21c93a7f001669ce1425040e3069a2769e3f1141a86fc95e76c00ac26f6fd181468f1fb19753def5c9cb4fc951ec1003bbb527d511805ae7fa9ec1c11d7b86815e4b13fa01a2cdf426de0faf00790b0a47d16f463ef04bf50ff14d08c36b4229f4f13c02af0e9bf765c7cc0c2ea838c907087dd21a213210ded7788a9728f6c7362eb53a4c08d7c179bcfa6c7ae7539ba8cb4a4957ca9a85f7c28b4176bc52b0882307e5f75ebf00f6b047fbf78040000",
    ],
    [
      "ETag",
      "Xdb1l26DMGMfJdaTIgioFg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-23-1605310013007"
  )
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
      "02ff8d92d14e83401045ff657ca509b52d1a121fa856c560ad14138d31cd1606a4050677979adaf4df9d45ad464df405668633cbbd1736b0ccab045c98e7d9538372bd97a1be364588aa29b4e25b4d9542b000b5c8985ce6e4add2bbfe5d14c443075ff4d9adb8c88e8e9850f1239602dc0da439168902f77e03952891d7622a9ab29ab59d057a5d9be1340afdf119f72525a61fdf0481370c46b0b5768b89d062d6f2ff587bd85ab0a07988294aac62345a6a490b8cb56f6c2a51d6057614353246052ddc3ec82435b590441d9e74f67b9dae630f7a5ddbeef66cfb80c18262a173aa98bd99b23ed0a44511d233bb048701d9966c386daf2b1ee7496bc494fe3872faadbeaf004b4bf302677f83acf751f067f8c0de23f8ce89929a4aefa8d3e0cafbed38cef4f3a8132f1afd2094e6a47648e45f8ea691773931dcc3bbf7e15aa39a48e220159a0cbb76ff7070e0d86fb11e93899adfe36ad9a005b1e0bfe33cd7e0a6a250b87d05ab5bddb37b020000",
    ],
    [
      "ETag",
      "kioAvfY4YTLcB6eztGXaJg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-24-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8553fd6fda3010fd5722ef9756e22321e153aa3a46b32d1a0d6d08add83481636cea92c4a9ed30b18aff7d97a4b465955a0929d8efbdbb77e7bb47b4e1e90a0d50c4d70f3995bb4ff722423544355ec3eddfdb1f3f793eef5f90c00c3bd79b687b2fc3ebb33360f042a57092c5b4ae442e095583d9b4b19622cfb014a20e81ea2da76e75ccb66d99a6659b6617748ac66cccd30da8efb4ced4a0d93ce46eac8558c714675c3588489eef9bdb563393e29e12ad9ac7299b904535df4f7a1e0b823517e9d96c0a067245e5822698c760e145b98a3e1f876e709c34d640de72423121224f75610b42109132bece6519150d1e5169f3d51f3475c7ee28344693991f9e2c71528897a70656c66221a9ca635d33965013e3315df0d5b242b28df135985c02020eeeb0a26a69dc7e7703d738267bbe31f37d771a1a27e7a7c6b76032bb32becc8f38e0724595e669e931c4514c0b7f4f6df4de3e5e21c01a7256e0a26b76b0d533fb118bba84f5ec76c44c1a45bda8dbc6766492be439d554431e87411bd54e154a42d933133326d8c1d66b7a9d5b11d07772dd3e9b72cc6308998dd6b31c746fb1afa23b9a6175c6542f1aa97e836f042771106337f340cddb20c86a15f1795b9a288d73e351409a477eada17281790a97818cf0fdd60380abd1bb79a85315d63b29b3ec034301c2b0a6c2c714235959762054d435793a9177a137f380645f9c057078642835f8f2f827097955dd6e5170d836038070d9612effec3c047c741fbfdab743738ce4b4ac92f4f55fc6d05200b6a7939b5d0fef71e7e3504435f4547d7333798a3ea2aa08c4a9a928fdf1dc825f0e1ee1e1609b8b04a90466938c394115524219256d3c693d2ee93da6eb7bbe5e66b2cf51bacd3b50f6d2d621411694253fd5451b54865a30a2857cf240061487ccfff06e83f66c228b8c8040000",
    ],
    [
      "ETag",
      "zWKZiuY9DcR0T6QkbvjrTQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-24-1605310013007"
  )
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
      "ff",
      "8b",
      "776da5b40ca6217100861812635b81d3845068ddaed0d65d92c22ac47f9f13a689e32e89f3fcd97a2f6738e455027dd8e5d95783aabdcbd0bcdb2242dd1446f35553a5113c402333265fdbd39309d3e1623a3e84817e7c11abe5f770306042c79f584ae89f21cdb14834f43fce50c912796cbb556e2363a6adad325bac26d349c44249891516ebf97c389a4fe0e2dd8cd5877f8d6c2e1eec6917618a0aab18ad8b5ad11e6333b301b52ceb027d4d8d8a5183835d2353d4d45211f9acf8e1bd1ff444b713081174847860b0a0589a9c2a66d74bf606868c2c223a713e081950aee4a8a93b8f2c775d86a303acb5db5eefaf17d8dee677e1a835a8df14b13b8dd698b89a1c93356e3890510d7a104bfee5e7dc5cdf971fcb6db392c2010000",
    ],
    [
      "ETag",
      "OywDt2fANGCk21s9M0TSxA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "0000000002ff1dcf4b7282300000d0bb642d8e8aa8e90e151001152806d83090864f499526c136e9f4ee75fa6ef07e408931e1bc10f79edcc00b90e5024ef1d41b665b232497cf432aaf88cac768dfaf026e9af135b6a8ea8637ff81b53abca8050f8244e57e5425e208f1691706286a5d4997e776340fba61ef11325723ca4f3b07c1f22e4a6cdba9841dec5dbaae36866746591db05512adf476efdbe9380f933452545a8a546a813bddeb396bad133785a3311689a0ce97cdae8e8de3d79c6252b93744862cd4d66bb7a1566e727ccedeb1439976d9c0aa8737127f14b3064c00f91e3a4678d13db3ba01e104fccf0b2107f2ec6f49c90803bf7f54c8726818010000",
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
      "Fri, 13 Nov 2020 23:27:16 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-25-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85536b6f9b3014fd2bc8fbda248424e421456b94d21535901548ab699a906d0c750b9862d32dabf2df77314dd7aa52fb09dbf79c7bce7df084ee7999a005223c7b6858bdff7227083a414ce10c5effd891ef36b77f275eb59697d7fb4bcbf1bdabe51210bc65495c5439eb49d1d494c9c52eec67b5682a5c0bd183443d6bd21bdae6643434cde1c834a7c0932c4f37bcbc07f6ad52955c0c0647ed7e264496335c71d9a7a278791f3c5a83aa16778c2a39782b39001539f858f46b2e28565c94cb5d08061ac9ea981598e760e13f3321a76f53f7392efa19801f39659852d194aab50529a828539e35b5ce8a164f48db7c7540a1b371d6914145de14655ce2829d1809563856fb8a19e7c1d6335cff7c1b78abc8ddfa71b8be70bc557fbdddec3c3f346e2e9cc031142639d35c63699cea9b0f17d04f9854bcd4ea51fbdc2a3f37c87d3f969600d29275c1786ada783833e72425539ace4613929a8c9019994ef08898743e66e384300c3c2daa59b814254d66188f12120f6d9ac4e3a93d8eb16d25714ae613669139b6e7181d4ed0ef9a2b76c6652524ef3a846e023772e228d8f9eb55e4e81252dce4eaac33d616f0daa3820201f4414d8736ca0528b5ed76fdc80956ebc8bd76ba096f5886e93e7c8019a738970cd0b886e629567b228186217fe5396700d613fb7e0c4ab4f8f984da9eb72e5eb5fc851ec1005bbb4a7f511805aeff4ddb3922ae71de68c86377401558be85dac0f5e117206149bb2ce86ae7043f50f714b094d5aca49f4f13c03af0e9bf765c7cc0c2ea838c547087dda1b215a135eb7688eb728fec913db46ca4c1b57a17b3acf1b16b6d8e36232b58a99e2bea161f0aedc41af90282208cdfd7dd3afc035489ebb478040000",
    ],
    [
      "ETag",
      "x6TNIuhz5MpCsKVyK2ENMQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-25-1605310013007"
  )
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
      "c2401085df65bc2d49f92bda848b82a84d0011ca95216469a750dceed6ddad4808efee6c45346aa237edccf49bed39a73dc0532612f06195ad9f4b54fb8b359a075b4c5197dc68ba1552680407d0b03591fdf93c8d478dccbc7a413b0f0557f995d875bb44e878833903ff0069863cd1e03f1e40b01c692d96bcccc5b2ea1c30fbc20e67d1341cdf529fcbc4f6e3f97018f48603383ae7c58419b6acf87fac2d8e0e6ce56a8a292a14315a2d85925b8c4d686d6a96171c6b5a962a460d155c3d582b59164c4959a349add1aed53db7ddacbb6ebde9ba1d02b98c99c9a420763e237d60a4617c2a77e4123c02545592e1b4babed0384b2a23b60cc791d7aaf47d05485a9a715cfe0d92de0da3cff0819d22f8ceb15c96c29ca99be17df0db7194e9e751d74134f8416843499d91281c0d6651309a586e71f2dedb1bd4132529488d36c3badbba6c773cf73dd6beb451d37b7ca34a742066f477dc6506fc94718dc737d636bd087b020000",
    ],
    [
      "ETag",
      "CUUfcM2itx6A5mInlrm9nw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COALESCE(SUM(`amount`), 0) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-26-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8553eb4edb30147e95c8fb035adba4699b5e24c4ba12b6482565b980d034b58ee304431207db61aa50df7d270905ca24902aa5f67739df39b69fd03d2b623443114b1f2a2ab65fee78843a882a9cc2eeb262f26b6c5881ad9f6f6fec420fabebd1fce40418ac56499c9719ed4a5e0942e52cf47ba9e0558905e75d30ea9a56b76f19a341df30fa03c318834ed22c59b2e21ed4b74a9572a6ebfbdabd94f334a3b864b24778feb2af3f9a7a29f81d254aea872575a822f58f8b9e669c60c5787112fa10a09254ac698e5906115e9571f4edd0bac770de4b81fcc808c584f0aa50752cb020bc48585a89c615cd9e5013f3cd1fe4db4b7b11688bd57c69fb0bfbc80f2f8e3638af3d36c71dcd38d6b0d4d66b416595a98eb681f61296d1358b372d52de6be7deea021008738b25951bedfaa7edd9da21d971b5d0756d3fd08e4e8fb51fde2abcd4bedf1c7020704ca562451337c05146eba8cf1375fe3fc75a8015d46cc1f5d8b0707f624ca3241a93643218458941a368128d47781019643aa4c338a21874aa766f54b8e085654da209c62332c57d138fa753938ce968620ca2fe30a1d36114d1d80423b4eba0bf82297ac664c9256bc78aae3d27b0d78117ba8b7960376d2418e675d686ab9b789b53419340faa0af5d8d320e95ea3372dcc0f6e68bc0b9b2db6bb1a429265bff012e46823349818d05cea9a2e282c7303474b9f29dc059b9f325289ab3bedc33249afd7e7a1504dbb299b26abe68ee79f31bd06021f0f61d0639ac21daedde94bbc259d5501a7eb36afd1f5b00f5a197d79589767f76f0eb20b8ffad3bfa15dade0d6ab73c9a50410bf2f9b903b9013e7dc6fb37055c785550462a58c32d23b22e42046d6f1bcb9bb8cfea81353506a8210bf51e1b9ba6b11f6bed513bd29c16eab9a3f64d3583aaa14abe9000844be23aee0f40ff018a380b17d3040000",
    ],
    [
      "ETag",
      "Luis+d06TE/FyYEn/UuW5A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-26-1605310013007"
  )
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
      "5f",
      "4f",
      "c2",
      "30",
      "14",
      "c5",
      "bf",
      "cb",
      "f5",
      "d10d3ba620243c0041842c88131e8c21a48ccb186ceb6c3b0c907d776f8b511eecc37afffcce76ceceb04ff235b46195c49f25cae34d8cfad51421aa32d58aae42e40ac101d43c263219ebedfd7418bc9f92131b972adbf56fefe24e8708156d31e3d03ec326c174ada0fd71869c6748b2e552da3712a68f85993c052fdd19b599589b76320f826e2f1840e55c898afd9f6034990d8683f03fc9a272602756216e50621ea1f15048b1c3488f4c3cc5b3224557895246a8c0c276114b51165c0ae1d2c4ad375cafc11e7c8f31cf67ac49602a22ae1391133b7f236fa085e66928be281dd40990b6a4a01bfb3cd0b855f39badeb63331dacc058bd663d56f31f7ff79ed92f7e3ed23b6a545329c8b14263965d8cf78509a329a496253a1071faefcf89bef4d537ca4c8953d4010000",
    ],
    [
      "ETag",
      "iJth4PGLYziz0JusmjC+/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "000002ff1dcfdb6e82300000d07fe9b3184481746f544819978ac8167922a5944e26504181baecdf6776fee0fc00ca181fc7e2de7ff30ebc01450db866eb50eac83c5667d3f79ed30de7e45cef78ea5941d93b9b4c55876b522a97f8066ee4e314c9e386265557e630d4617c125f977b92648d36ccd896f91e479c401deaf59333eb2312cdeeb37595b2d1bcdff88f9b7bdd8655536756d0c5bee9b0aaedd9ec22e3e13f27e9c55a0b85514a8d0f3eeeda00a7849c6d3ba26138998b89c9b878a71a4157044b41c65d168a80a0d15bd8e15ded8b00523133926756ea8015e08bbc0c7c2c2eafecd6847005fee7c55d49feea234e073e80df3f6a3e1de018010000",
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
      "Fri, 13 Nov 2020 23:27:17 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-27-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85535d4fdb3014fd2b91f74a9bb44d495aa91a550950a94d214d41db3445b67b130c691c62870da1fef7dd38948190e029b6ef39f79cfb9167722f8a2d191326b2871aaaa76f77929123029a66f85acfbcbff165919e9deb9fd7952cedab5ee55d4d2688100d4bd15d994347c9bae2a0c69b7537ab645dd24aca0e26eaf4bd4eefd8190e7a8ed31b388e873c0579ba10c53db26fb52ed5d8b60fdadd4cca2c075a0ad5e572f7fa6e3ff6edb29277c0b5b2df4bdaa8a2eccf45bfe792532d6431d9acd140ada04a6047458e16fe33b7ece47deaaea0bb6e86e047c181722eeb4237b6300597452ab2ba3259c9f899189b6f0e641d2c82596c7199d7bb2229e80e8eac2dd534d14f255867d16a69cdc3b355b49cc6f35598ac6717c172da9dad169b65b8b66e2e8228b034653918ae35b14ecc2dc40bea6f41695118f5b8796e945f1a34ff38968680d20ada60e239c7b4e73b2396328fa7fe60c8520718f39937a403e6f0910bee9601459e11352c5ac8a2e7bbd0638c277d7fd84fdc21b8093df69d848d0674c8d8d071473ed91f913f95d0702a542995683b446ea2791c2471b40967d3383025a4b4cef5696bac29e0ad478d0522e8939af64d5448546ada3d0fe3209acee2f975d04e780119e54feb079c714a730588a615364f43b5945b6c1809a7cbe014c166629787a022e35fcfa4e979e3e24dcb5fe9310eb0b1abcd97ace3681e9e1b3b07c435cd6b03796c0fa444cbb7581bbadeff46242e699b855c6d82e807699f2248a182827f3d4d049bc097ffda61f1118bab8f324ae31d7787ab468457d0ee9030e51ed803cf775c62c095fe101bf5dd43d79a1c4d46d841a15f2a6a171f0b6dc56af50ac2208e3f34dddaff037d5136f878040000",
    ],
    [
      "ETag",
      "uC7xTPnfFGtZVrop/Q1r7Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-27-1605310013007"
  )
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
      "501486ffcbe92b6c980a8ead0f58666e68a6b8da9a73573820065cbaf71233e77fef5c326bd5565fe09cc3732eeffbc21e9ed2220217d669f25ca1d89d25a8ee74314359654ad2ade485443000154b887c75ba767d1fcafe8ef5360fb518ab61dd4e2e2e8890e1067306ee1ee214b34882fbb88782e5486b21cfaabc58359d016a57eae13c988d2643ea731ee97eb2f07dafef0fe0609c1623a6d8aae1ffb1b63c18b0e5eb19c628b008516b2905df62a846daa6647999a12979254294d0c0cd8344f0aa6482739326e6b963b66cabdb6e5956ab6d590e81190f994a7941ec624efa4071c5b219afc925d80488a624c371737da1711a354674399a0476a7d1f7152069719ae1ea6f90f46e187d860fec18c1778ee5bc2ad489baf66fbddf8ea34c3f8fbaf282c10f422a4aea8404a3f1601e78e3a9e69647effd9d4239159c8294a8336c599d5ed7b1adf7582fb98e9adee32a51a10121a3bfe32655e0c62c9378780315c5c4cc7b020000",
    ],
    [
      "ETag",
      "z756wWcsBya8hXwrMtGw3g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MIN(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-28-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f",
      "a3",
      "40",
      "10fd2a64ef1f4d6a4be90f6813e355e57a242d55a07adee5d22ecb827b028bbb8b976afadd6f00abf64c342181ddf7decc9bd9599ed01dcb233446214bee4b2a365ffef010b510553881dd251d3dcea73f368ffee8e769367dcc2e372e4b8e8f81c12a95c45991d223c94b41a81c2ffd7622785960c1f911043a32aca3ee501ff4babadeede9ba093a49d378c6f23b50df2a55c871a7b3cbdd4e384f528a0b26db84672ffb9d07a35308fe8712253bfb293b9045763e4e7a92728215e3f9f1d20703a5a4624533cc52b0f0aa8cc2affba1db0c67ed04c80f8c504c082f7355d9821084e7314b4a514745e32754db7cf3817c7b669f05dadc710fd638aba4eb430d4b6db5125496a96a696ba82866295db168dd20c59df6cd5bcc0181fcb75852b9d6aebfdb9eaded931d575bbaaeed07dac1c9a136f516cb0bedf4668f031e232a15cb6b87010e535ab97b6ea2f3fee82a015690b30157a63ec45d4b1f85716892d8ea0dc258a7616885e600f7429d8cfab41f8514834e55d16b15ce796e185644f5388a46a1417b83a16e5a46d8ef0119c7a41b0d21a649ccfe086d5be8af608a9e335970c99a4ea26bcf09ec55e02dddb34960d765c418fa75de98ab8a78eb53419140faa0ae6d85320e99aa6371dcc0f62667817365379330a309261bff1e6621c6a9a4c0c60267545131e711340d5d2c7c277016ee64068afa782f760c89c6bf9e5e05c1a6a8bbacea379a78dee406345808bcf90f031fc33eda6edfa4bbc26959536a7ebd6ae23f3400ea422daf2b036d7f6fe1692118f9263aba5cdade0d6ab63c1a534173f2f9b903b9063ebdb9bb6b54fd17fc2a8d54b0862923b24a42046da68d65b5dd6775cf1a5806aac942bdc3cce160d7d62a461591663457cf1535d7a86e540595f28504200c89ebb85340ff",
      "0149fd1fcdc6040000",
    ],
    [
      "ETag",
      "Ue9zMGXyzS9ZBmGzmQyNig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-28-1605310013007"
  )
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
      "0002ff6d90d16bc23010c6ff97db6b2b69d529820f2a3a85cecdaa031922b13dbb6adbd4247588f8bf7b8963f3612f49eeeef71ddf970b1cd222860e6cd3e458a13c3f25a867e611a2aa32ade82a45a1101c40cd13225771c29b7eb3b11af3fc753e1b1db3c147abd7ed12a1a22fcc39742eb04b318b15743e2f50f01c49b6d948bb91307d2e4d6714bcf51654e62236e5741904bd7e3084abf3202a0f7f82c974317c1986ff49d65707f6621be20e2516111a0fa5147b8cf4c4c4533c2f337495a864840a2c6c07891455c9a5102e755cbfed7acfac59f718f3ea8cb508cc44c4752a0a629773f2065a689e85e29bd2814f80b44f0abab3e789daacd66adb1827cb18778f63afd6f07fc79e19af7fd6f6cf1ad5bb14e451a1b1c7ee5607c2d8d7144bcb0a1d8838fdf438d5f7fa7a03afefdcc2c6010000",
    ],
    [
      "ETag",
      "Ydga5254YHamMSQFqlCV7A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "db",
      "4e",
      "83",
      "30",
      "00",
      "00d07fe9f3b64c2e83fa06060805111892b197064bb90ba5dc06c67f77f1fcc1f9012921741cf1d437b403af604b05782227879d7539c8dd40898fc4d9aa5056adef6985385b654d8a78c4f2e2d3a902d46c46360b68225322e4e79bd87bc8e86ca638c62d2af6b41f835c65d0faf069f982cba4e2fc0b296ef87645f3d1d8d735ec3cad28041b472d0c0582b4066d317e1787d950a1eb9be5e3324cb999ab975a7255415912cf36adf93eb279ce9256aeeb8c98cb523c9452d4ec6d54f778b9d6c3cee39de948bab78315763e26bdb7d6053800fa6015a723ae9e595186f000fee778da187df6759a72cac1ef1fca78215718010000",
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
      "Fri, 13 Nov 2020 23:27:19 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-29-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "3014fd2b91f795b669d3b7548dae8451a94d479ad2a1698a6cf726189238c44e01a1fef7dd38948190e0536cdf73ee39f791677227b21d191326e2fb128aa76fb7929113029ac6f81afc7ed8db713ae48fc90f7dbdf5b68b077d7739992042542c45d33c81869265c1418d37eb665cc832a785940d4cd4e88c1aedbedd73dab6dd766c7b803c0549b410d91db26fb4ced5b8d53a6a376329e304682e5493cbf4f5bdb5efb4f242de02d7aaf55eb2852aaaf5b9e8f74472aa85cc269b351a28151421a4542468e13f73c74edfa76e0a9a366304ef0507cab92c335dd9c2145c669188cbc26425e367626cbe3990b5bb706781c56552a65998d1144eac1dd534d44f3958e7fe6a69cdbdf395bf9c06f39517ae6717ee72da9cad169ba5b7b6b617aeef5a9ab2040cd79a58a7e6e6e105f577a0b4c88c7a503d57ca2f0d9a7f1c4b4540690575301cd87dda1eda2316b1018f864e8f4536303664831e7598cd475de8ee1850e41951c3a299cc90d0b3f9ce09599ff5c3ae1dd9e1c819d270c4fbed01e3ed6e1fdae470421e0aa1e14ca85c2a5177886cfd79e08681bff166d3c0352544b44cf4596dac2ae0ad478d0522e8939a0e55544854aada3df702d79fce82f9955b4f780131e54feb7b9c7144130588a605364f43b1943b6c18f1a64bf70cc16662bf8e4145c67f9e49d5f3cac59b96bfd2031c6065579b2f5907fedcfb69ec1c115734290d645f1f488e966fb036747df88b485cd23a0bb9dcb8fe35a99f7c88a0808c7f3d4d049bc097ffda71f1118bab8f324ae31d7787ab4a841750ef9030e51ed9cea833ea10032ef4879833ec1fbb56e5a832420a997ea9a85e7c2cb4162bd52b0883387ecf74ebf00fd9c6417f78040000",
    ],
    [
      "ETag",
      "TXwv0gm8cxlBtYWNWLwtkQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-29-1605310013007"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d925b4f83401085ffcbf84a136a6f4ae203bda8242d568a8989699a2d0c2d1518dc5dd4a6e97f77166b356aa22f30337cb39c7360078f69118303cb74f554a1dc9eac50df9a224055655af1ada4422158805aac98bceffbf620f227de32580f92214d94ffba712f2e9850d11a7301ce0e9214b35881f3b08342e4c86b1165555e2ceace02bd2dcd7016069e7fc57d4eb1e9fdbbf1d8ed8f47b0b78e8bb1d06251f3ff589bef2dd8d032c0042516111a2da5a40d46da333695c8cb0c1b8a2a19a1821aae1fac2455a590440d9e344ecf1bcdaedd69356dbbd9b2ed1e83194542a754307b37637da0498b2ca01776095d06645db2e1a4be3ef3388d6b23a6f4fcb0dbaef57d05585a9266b8f81b64bd6bc19fe1033b44f09d133955853e5297e31bf7b7e338d3cfa3866e38fa4128cd491d91d09b8c66a13b991a6e7ef0dedf6a5453491ca4429361d36e9f757a5dfb3dd60199a8f93d8e96155a1009fe3bae530d4e223285fb378e865a677b020000",
    ],
    [
      "ETag",
      "XBN0CcNMIbRhCfDoMsNxjA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MAX(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-30-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fd6fa24010fd57c8de2f6de20756046bd2f43ccbb5248a3dc47ee472d16559e82ab07477b1671afff71ba0b6f59ab48909eebef766deccce3ca335cb423440018b1f0b2ab6df563c400d44158ee1b633292eae56e2ef538cd7ab4d381ceb7723169f9d0183952a89d33ca14dc90b41a81ccc67ad58f022c782f326046a76f566c7d47bdd8eae77baba6e814ed2241ab36c0dea07a5723968b7f7b95b31e7714271ce648bf0f4f5bebd3969e782af2851b27d98b20d5964fbf3a4e7092758319e9dcd6760a090542c688a590216de9461f0fd30748be1b4150379c308c584f02253a52d08417816b1b810555434784695cd777fd0cc1edb235f9b0cef8e96382da5cb630d4b6db1105416896a684ba82862095db0705923f95afbe94d278040fe072ca95c6ab757b6676b8764c7d5e6ae6bcf7cede8fc58bbf4a6f36bedc7fd01073c86542a96550e7d1c24b474f7d244e7e3d39502ac20670d2e2cddc49dbe7e1a448145a27eb717443a0d827e60f57037d0c9a9418d30a01874aa8c5ea970c6b3d00a23c3d23b469f043d4ac25e18ea56a077b1490cbd679a986062f63041bb067a124cd10b26732e59dd4974eb39bebdf0bdb93b1afa76554684a15f17b5b9b288f73e151409a44feada9528e390a97c16c7f56d6f38f29d1bbb9e84318d31d9ce1e6116229c480a6c2c704a1515131e42d3d0f574e6f8ced41d8e41513deff59e21d1e0f7f39bc0dfe6559755f54543cf1bde83060b81b7ff61e0c334d06ef72edd0d4e8a8a52f1ab531d7f5303a803b5bc9d4ed0eecf0e7e0d04235f4747bfe6b6778fea2b8f4654d08c7cfdee40ae802f3777bf46c08545823452c119a68cc8320911b49e369656765fd406884d549185fa809d18dd7d5bcb1865449ad24cbd5454af51d5a8122ae42b09401812d7712f01fd07d642106ec6040000",
    ],
    [
      "ETag",
      "1MuDHjrxwgakjvdAL0XCig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-30-1605310013007"
  )
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
      "4fc2401085ffcb78b4c52d1589241c8020121bd40289c410b294a116da4ed9dd4208e1bf3b5b8c72f0b2bb33f3bdc97b7b826d92afa005cb24de95a88e37319a77fb085197a9d17c15946b0407d0c898c9dbdeb239bb7b998d1b1f0fcd7cb79f0c82c7f1a1dd6642475f9849689d609d60bad2d0fa3c412e3364d962a1aa8d8c9963613b4fc16b67c265462b5b8ea641d0e9067d383b57a262fb27188e26fd413ffc4f323f3bb0a165886b549847683d148a361899a18da76556a4e86a2a55841a2ab81ac48aca422a22973bae2f5cef41347c4f08cf17a2c9604a913409e5cc4ec7ec0d0c19998674e074506740554f0ebaaece3db7fd9a775fc5d8578c75773daed7eafeefd8b3e3f9cfdaeed1a07e53c41e355a7be262b547d6bee1584695e84024f9a79f1373a9cfdf333c915fc6010000",
    ],
    [
      "ETag",
      "+Cb7Y/KYS5X67nqvTGL9Sw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "08000000000002ff1dcf4b7282300000d0bb642d0eff31dd0106140a02b5a26e327c42a17c02414a18a777afd37783f704699e9369c20fda901ebc813595e136df7a83686a11b9ead167810424c1d95e8834f76bd095b8d4fc74bd9ce88dc2b0faa61f13bb093f6d910c5136de0cb997efd5225dd0019f351a23d1f36c8feb847767c52f7097dc4d456e76ebea98313bd6bb6b5cc7a65587ce5ef5fc46c541e69b295a66c5221a15ba11e5ae7f5585b1c5527eb4868e57dce01d6bd828a4f6c45dcb484448fa435b276850f734609558eaecc1cfd2fdcb359823b42e7a3fe12c34c006103ed48c4cb87e65150dc20df89fe3c73a9057df2429230cfcfe01ee26c82f18010000",
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
      "Fri, 13 Nov 2020 23:27:20 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-31-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4fdb3014fd2b91f795b6495f692b55a36ac3a8d4a65b9ac2609a22dbb90986340eb10342a8ff7d370e652024f814dbf79c7bce7de499dc893c2613c2447a5f41f9f4ed5632724240d3145fef1ec7c34bc67617624577d7f3abebc5e87777369d2242d42c45f745062d25ab92839aecb6edb49455414b295b98a8d5735aced01ef41cdb767ab6ed224f4196ac447e87ec1bad0b35e9748edaed54ca34035a08d5e672fffade79e8768a52de02d7aaf35eb2832aaaf3b9e8f74c72aa85cca7bb2d1aa8149411eca9c8d0c27f66cc4edfa76e0bba6fa7087e101c28e7b2ca756d0b5370992722ad4a93954c9e89b1f9e640b6deca9b87169759b5cfa39ceee1c48aa9a6917e2ac03a0b366b6be99f6d82f52c5c6efc683b3ff7d6b3f67cb3daadfdad7579ee059ea529cbc070ada9756a6e3e5e503f06a5456ed4c3fab9567e69d0f2e3586a024a2b6882916b0fa933b2c72c612e4f46bd014b6c606cc4dc01ed319b8ffbd08f1950e41951c3a2b9cc63709cb1db1d47b1632751bf3b1e45cca1ddc8a5dd5e9f77873ce939e470421e4ba16121542195683a442e8365e84561b0f3e7b3d0332524b4caf4a2315617f0d6a3c60211f4494d873a2a242ad5ed5efaa117cce6e1f2c26b26bc8294f2a7ed3dce38a1990244d3129ba7a15ccb181b46fcd9da5b20d84cece731a8c8e4cf33a97b5ebb78d3f2577a8803aced6af325db3058fa3f8c9d23e2826695813c340752a0e51bac0d5d1ffe221297b4c9427eedbce08a344f01245042cebf9e26824de0cb7fedb8f888c5d54719a5f18ebbc3552dc24b68764898728fecbeedba3631e0527f888d468363d7ea1c7546d843ae5f2a6a161f0b6dc42af50ac2208edf37dd3afc03d82ee02c78040000",
    ],
    [
      "ETag",
      "kw96WbbUViLaUZCYZD8X2A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-31-1605310013007"
  )
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
      "00000002ff8d925b4f83401085ffcbf80a09a4d790f4816ab5187ab1a5d1d434cd16064a051677174dd3f4bf3b8bb51a35d1179819be59ce397080a7b488c0814d9a3c5728f61709aa3b5dcc50569992742b7921110c40c5122255e42f6ff387fbaeb72c1bc960e84e94bb7cedf58890e1167306ce01e214b34882f3788082e5486b21cfaabc58d79d016a5feae13c9879e31bea731ee97ebcf07db7ef0fe0689c1723a6d8bae6ffb1b63a1ab0e39b19c628b008516b2905df61a83c6d53b2bcccd094bc12214aa8e1fa4122785532c1b94913b3619b76db6a356ccbb21b96d52130e32153292f885dcc491f28ae5836e3afe412da0488ba24c3717d7da1711ad54674e98d8376b3d6f7152069719ae1fa6f90f46e197d860fec14c1778ee5bc2ad499baf627ee6fc751a69f475db9c1e0072115257546026f349807ee68aab9d5c97b7faf504e05a72025ea0c6dabd96d75dad67bac975c474def7194a8d08090d1df314c153831cb241edf00dd57d5267b020000",
    ],
    [
      "ETag",
      "tdLZJmXW8IZp3gEHAOtAZw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`date`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-32-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8553fd4fdb3010fd5722ef17d0fa917e974a88752563954adaa529084d536b3b97609ac6c176401deaffbe4b42810e09a4488efddebb7b773e3f91b5480232204c44f719a8ed973bc9488580a1119e76be5eb8a31f5d96853abd7ce47f9b623e5b47a7a7c810b94ad34d1a4355cb4c71d083c5bc162999a5544959c540d556b3dae8da9d56c3b61b2ddbeea14e431c4e44b246f5ad31a91ed4ebfbdcb548ca28069a0a5de372f3725e7f68d65325ef801b5d3f4c59c72cbafe71d2b358726a844c4e1773349069504bd85011a3855765c0be1d86ae09baa945487e101c28e7324b4c6e0b4370998422ca5411950c9e4861f3cd0f993b1367e45ba3e9c2f58f560135b03ab6a8b6964b053a8b4dc55a6145a1886129825589a46beb8737bd4404f3df520d7a655dff743cc73a248f5d6be1bacedcb78ece8ead0b6fba9859df6f0e38e831006d445238f4298b2177f7dcc4f1fbabcb05d460ce125cf6ec2e6df4ed1316b21e0ffbad0e0b6d60accf7a1dda62363f69433b60405167f2e8858a2632e9f47bd06cdbac670714582be8b2b61de60b6f32daa5089d3418b4db6457218f4a1838173a955a949d24d7ded87796beb7704743df29ca0829f6ebbc349717f1d6a7c12291f4415dbb1c151233e5d732767dc71b8efcf195534ec20422cab7f37b9c8590c61a904d15dd80017529036c1a994de7637f3c7587135414d73bdb333419fc7e7a15f8dbb4e8b2295632f4bce10d6aa85274fb1f863ebad882dd9b745734ce0a4ac12f7665fc8712200dace575d724bb3f3bfc2a0447be8c4e7e2d1cef8694471e84a020e19fdf3b920be0d397bb7f46c8c5878469b4c13d4e19d77912aea09c36b129ec3eabdbf8d3240559997758afdbdfb7358f9147840d24e6b9a2f219158dcaa14cbf9010c42171c7ee05a2ff00513104c6c6040000",
    ],
    [
      "ETag",
      "5+GNCF6bufspMwcz2iSPkg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-32-1605310013007"
  )
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
      "d1",
      "6b",
      "c2",
      "30",
      "10",
      "c6ff97db6b0bad4537041f742b5310d9eac4c11049d3b36b6d7b3549dd44fcdf778963f8b897e4f2ddef8eefcb19f64593c110d2223f74a84e77399a575b24a8bbca68be5a6a3482076844cee4c3a127751a958b72997d4f67e978bd7e7f1a8f464c68f989b580e1197605569986e1c7191a51238f6db7ca6d64cc9c5aabcc166ff1739cb050536685c56a3e1f4fe6315cbc9bb176ffaf91cdc58392d20477a8b091685db48a4a946666036a51b715fa9a3a255183835d2357d4b54211f9acf851cf0f07413f0a83208c82e09ec18aa4300535ccae96ec0d0c195125f4c5f9a0c780722547ddb9f3c872df65383ac05abbed0dfe7aa1ed6d7e174e4e06f58b2276a7d11a0bae261fc91a371cc8a80e3d90827f795a98ebfbf2034c572738c2010000",
    ],
    [
      "ETag",
      "8q2csb3jNjSdxHIbAWWXDA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "02ff1dcfcb7282301400d07fc95a1c10639bee02238a015f43ab75c304b89657310468884effbd4ecf1f9c07e2690a5d17f7b70a1af486349f91693a65c274f0018c4e4427ec90fde9feaa0df323a0b3ed758e79fb937b497eabbdd24e4c169fd3f4b31a77695672287cb12c0733c8b6c9b01b213c46aed81bedc5a0c60a53d302f7a21b7037eca56925947dbbdc5072baa87118c435f1d6b956708c5beb6be646dd1eaa772a2a57faeddaa65ce3cd3c08164a923a53388f6a1a26b6f694621e5b84fe9971e75bc8c3aa0b498cfbacde19779c30cbda2e1a85d79aa20982511412bab878666d4cc804fdcfe35e0b78f61de01224fafd03c5c1c7b918010000",
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
      "Fri, 13 Nov 2020 23:27:22 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-33-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "535d6f9b3014fd2bc87b6d12129290448ad62ca52b53423620adaa6942c65c885b822936adba2aff7d17d374ad2ab54fd8bee7dc73ee074fe4961709999198677735548f5f6e444c4e08289ae1eb75e29a7ee896df464bd8950b66ff757eecb2f91c11bc6149ba2f73e84851570ce46c1b74b34ad425ad84e860a28e6575fa637364f54db36f99a68d3c0979bae2c52db2774a9572d6eb1db5bb9910590eb4e4b2cbc4fee5bd773fe89595b801a664efad640f5564ef63d1afb960547151ccb7011aa8255411ec29cfd1c27f66129fbe4ddde574dfcd107ccf1950c6445da8c616a660a2487956573a2b993d116df3d58104ceca5986061379bd2fa282eee1c448a8a2917a2cc138f7376bc3f5ce37fe7a11ba1b2f0a9617ce7ad15d6e56dbb5171857178eef188ac63968ae31374ef5cdc30bea2720152fb47ad83c37cacf0d72df8fa521a0b4843618d9e698f627e6344e639ba5136b14a726c4f124b647d48a4d361dc2308981224f8b6a162d44910c19b3e3be15a5a93d8886769a445316d3885a03da9fda93f1a80fe470421e2aaee08ccb5248de76885cf96ee844a1bff5968bd0d125a4b4ced5596bac29e0b547850522e8839a0e4d940b546adaed7aa1e32f96a17be9b4135e4146d9637087334e692e01d1b4c2e629a8d622c186116fb176ce10ac27f6f3189464f6fb89343d6f5cbc6af90b3dc401367695fe9220f45defbbb673445cd2bcd690fbf6404ab4bcc3dad0f5e10f227149db2ce4d7d6f1af49fbe4430a1514ecf3692258073efdd78e8b8f585c7d94910aefb83b4c3622ac827687b82ef7c81e0e86d6986870a5dec546a3c9b16b4d8e2623eca150cf15b58b8f85b662b57c016110c7efe96e1dfe019d118d1d78040000",
    ],
    [
      "ETag",
      "YdI0RTIpB5CehpAc7zEJhg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-33-1605310013007"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d925b4fc2401085ffcbf85a9292726de20328280937a13c194296760ac56da7ee6e5524fc77672ba251137d6967a6df6ccf39ed011e922c021fd6c9e6b140b5bfd8a0b9b3c50c75218de65b4e994670008dd83029a8bd6b4dd61ed1eb2edae7f2256837fbcf97974ce8708ba900ff00718232d2e0df1f201329f25a48b248b355d93960f6b91dce83d9607cc37d4a91edc78be1b0d31df6e0e89c172361c4aae4ffb1b63c3ab0a3f50c6354988568b5e48a76189a81b5a9459a4bac682a54881a4ab87cb05154e44211557852f1bc4ab5e1d6bdaaeb563dd76d3228291426a18cd9c59cf5812123e48c9ed92534185065c986e3f2fac4e3242a8dd872300e1ab552df5780a5c589c4d5df20ebdd0afe0c1fd82982ef9c48a9c8cc99ea0f279ddf8ee34c3f8fbaee04bd1f84369cd4190906a3de3ce88ca6965b9ebc77f706f5541107a9d16658756bad7ab3e1bec77a45366a7e8f6f54810e8482ff8edbc4801f0ba9f1f806217f84167b020000",
    ],
    [
      "ETag",
      "ao9j8Ob3oozjdyplxT97Fw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MIN(`date`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-34-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85536b4fdb3014fd2b91f705a43e92a6694a25c40a642c5349214d41689a5a3bb1834b1a07db61aa50fffb6e120a744820554aed73cebde73efc8c1e789ea011223c7d2ca9dc7c5b09825a886a9cc26d7e6b06b7a173bd62f6ca3a1d30f92bf27be3e36360f04aa5f0bac8685b8952c6548de6b34e2a45596029441b02b5ed7edb1a988e6d99a6659ba60b3a453336e1f903a8efb52ed4a8dbdde5eea442a419c505579d58ac5fefbb4fbd6e21c58ac65a75f75376218bea7e9ef4241331d65ce4c7f319182815950bbac63c030b6fca847cdf0fdde178dd4981fcc4638ae35894b9ae6c418858e48ca7a5aca3a2d133aa6dbefb8366dec43b8b8c4b3f38582658d3e5a18195b15848aaca4cb78c25d4c37846173c593648f160fc08a7978040f67baca85a1ab73fbdd033f6c97e60cc83c09b45c6c1c9a171114ee757c6e9dd1e071c2654699ed7fe224c325a797b69a1ff717095006bc8d9800bd71c606b681e1146dc980d6d873093123224ae836d62c6477dda4f08c5a0d355f45a8573919b2c715dc6ac181f618b598edd23ae0db33019a63d87f45c322043133b68db427f25d7f49cab4228def411dd867ee42da2701e9c8d23af2e8361e8d77963ae2ae2bd4f0d4502e993bab615ca0564aa86e20791178ecf22ffc66bf66042531c6f668fb0090c678a021b4bbca69aca4b9140d3d0d574e647fe34184f40510ff76ac75068f4fbf94d106d8abacbbafea271188eef4083a5c49bff30f031e8a3edf65dba1b9c9535a5e6d7a726fe5303200b6a793bf5d0f6cf167e2d040bdf4447d7732fbc43cd55481995348fbf9e3b906be0cb77bb7b44c0856704699486336c59acaa24b1a4cdb6f1756df745ddb72d7b806ab2d41fb09ee3ecda5ac5a822d235cdf54b45cd23aa1b5541a57a2501084b12f8c105a0ff00adce83ecc4040000",
    ],
    [
      "ETag",
      "nW0NWR5Qjf3j1B6frJTI2A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-34-1605310013007"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff6d90514fc2301485ffcbf5758bdd5011121e4017215950263c184348d92e63b0adb3bdd310c27ff7b618f581a4697b4fbfdb9ed323ec8b3a833eac8bfca3457db8ca91667693a0694b32bc34aa36081e20c99cc9def42d1ed73d9a5d53699eb7f766dcddcf8683011326dd6225a17f844d816566a0ff7e845a56c86dab957637324687c62a8fc379c455a5325b4d17713c1cc5119cbc7f3dcdfe8f9f4ce7d153945c6a599e3cd8a975821bd458a7682d345aed30a5894d6764d594e81bd5ea140d38d81de45ab58dd44af9acf89d1b3fb813b79d4088a0234497c152a5920a5533bb78656f408a6499a82f0e072103da6d39e7c6cd9f5616a1f045c8c3857192f378110a7ea1c042cb9f27460742f3a215fb3568ad8ab3ed0765a3104724dda207a9e44f1f1774ae4fdf5be31923d1010000",
    ],
    [
      "ETag",
      "9NYLHn9tQ/tlsOh8sH7kQA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "8b08000000000002ff1dcf4b7282300000d0bb642d0e55a0d01d8a0c21a002f2d10d13421044c24f25eaf4ee75fa6ef0de001342c731bdb53565e0073cf1429b9339eac495ec15b12fc4db7ec44c31a49edff92b8b0ba65bb9e74b4a4aa6b5de2b0d5d66afd0ae5c4b50eeb9e8c427e79e7da1a90e4a46c2ebd68070bfe36777e74ed0664bf1c43b738d4fc750b8a8662c1eba4c7ec0d784b487de5c4c3574d533851e1b0e65b43636adbfb95ad1f4ed187d5d8c9296473cb17066b4064b485eaa58a87a5de05e8d83646f3e03541fda068a9194d8d96d1121f3882ad4496a15f02dd6c10c50de55031dd3ea935dca9a3603fff3f4f6ece8a7bfa278a003f8fd03843db8a418010000",
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
      "Fri, 13 Nov 2020 23:27:23 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-35-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85535d6f9b3014fd2bc87b6d1212920622456b96d2162d211b9056d33421630c754b30b14da7aaca7fdfb569ba5695da276cdf73ee39f7832774cfea1ccd50c6ca7d4bc5e3973b9ea11344152ef5eba5fcbede8a2cd86f89f32d16d59d3f7517f33920986649bc6b2ada93bc1584cad936ee9782b70d169cf72051cf99f486a7f6c419daf6d0b1ed29f024ad8a15abef817dab54236783c151bb5f725e5614374cf609dfbdbc0f1e468346f03b4a941cbc951c808a1c7c2cfab5e2042bc6ebf9360603ada422a53bcc2ab0f09f9967676f53f719def54b003f30423121bcad95b6052908af0b56b6c26445b327646cbe3aa0d85ff9cbc422bc6a77755ae31d3db172ac70aa1e1b6a5d449bb51584179b68bd48824d98c6cb2b7fbde82f37abed3a8cad9b2b3ff22d85b38a1aae35b7cecc2d840be8e7542a561bf5443f6be5e70605efc7a209202d69174ca7f6291ebab69715d99414ae33c90a9b66999b4d27d8c96ce28de938cf28069e11352c5cf3dac176e18e8724f546f9241d8f8638f55c3b4f0b9b8c3cea39047b363a9ca0bf82297ace64c325eb3a846ea220f1d324da86cb45e29b120adc56eabc33a60b78ed51418100faa0a6838e320e4abadd4198f8d1629904d77e37e1152d31798cf730e3025792021a0b689ea262cd7368180a176bff1cc066623f8e418966bf9f90eeb976f1aae52ff40406a8ed2af345711205e1a5b173445ce3aa359087ee801ab07c0bb581ebc31f40c2927659d0cfad1ffd42dd53440b2a684d3e9f26804de0d37fedb8f88085d50719a9e00ebb43a4162182763bc44cb947f6d8998e5d64c042bd8bb9dee8d8359d4367a43b5aabe78abac587423bb156be802008e30f4db70eff00e70a418878040000",
    ],
    [
      "ETag",
      "bGsKMUrbIqUc3BSrljE78A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-35-1605310013007"
  )
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
      "6f82401085ffcbf40a09444543d283565b49902ae2a58d312b0c880596ee2e6d8cf1bf77965adbb44dda0bcc0cdf2cef3d38c2535e25e0c236cf9e1b1487ab0cd5421721caa650926e35af248201a85846e400f39585c1201a57beb0b328993e38d1e2fa9a0819efb064e01e21cdb14824b88f47a85889b416f3a229ab4ddb19a00eb51e2ea3d00beea82f79a2fb60e5fbc3913f819371594c98629b96ffc7dafa64c09e6f434c516015a3d6520bbec75879daa664655da02979236294d0c2ed834cf0a6668273932666a767da8ed5ebd89665772cab4f60c163a6725e11bb5a923e505cb122e4afe4121c02445b92e1b4bdbed0384f5a23baf482c8e9b6fabe02242dcd0bdcfc0d92de1da3cff0819d23f8ceb1923795ba50b7fefdf0b7e328d3cfa3c6c368f283908a92ba2091379b2ca3e16caeb9f5d9fbe8a050ce05a72025ea0c6dab3be8f51deb3dd61baea3a6f7b84a346840cce8ef98e60adc9415124f6f4cc4ceab7b020000",
    ],
    [
      "ETag",
      "8eiU0eN8TDnLr1gTdHZ6TQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MAX(`date`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-36-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8553614fe24010fd2bcdde178d420b148a24c6e3b077d7048b578a4a2e17d86e77eb4ae9d6ddad1e31fcf79bb6a272269a9094ddf7decc9bd99927b4e2598c0628e2c97d41e5e6cb9d88d031a21a27702b4647e49efd35b364ee1cad9877ee14decde3e9293078a952789da7b4a14421095583d9b4994851e4580ad180408d4eafd1ea59dd4ecbb25a1dcb7240a768cac63c5b81fa56eb5c0d4c7397bb990891a414e75c358958bfdc9b0f6d3397e28e12adccfd94266451e6c749cf5241b0e6223b9d4dc140a1a85cd035e629587855c6d1d7fdd04d8ed7cd04c80f9c504c8828325dda821044648c2785aca2a2c113aa6cbef983a6eed81d85c6c5f0e66019634d97870656c66221a92a527d6c2ca11ec653bae0f1b246f295f13d985c0002d96fb1a26a695cff7403d7d8277bbe31f37d771a1a076787c68f6032bb34becdf738e030a64af3acf217e228a5a5b7e7167aef1fae14600d396b70e1583ddcea5b27118b1cc2fa9d6ec42c1a45fdc8e9e24e6491139bda714431e87419bd52e14c64b163db2dc658dc8e6287d9ed76bbef60da72dabdc8b1622bea939e6df78885b6c7e851724dcfb9ca85e2751fd175e085ee220c66fe6818ba55190c43bfce6b7365116f7d6a2812481fd4b52d512e2053f9289e1fbac170147a576e3d07639a60b299dec324309c2a0a6c2cf19a6a2a2f440c4d439793a9177a137f380645f5b8973b864283df4faf827093575dd6d5170d836038070d96126ffec3c047cf46dbed9b7457382d2a4ac5af4e75fc871a402da8e5f5d446db3f5bf81d2318f83a3afa35738339aaaf02caa8a419f9fcdd815c019feeed6e89800b6b04699486334c1951651222693d6d7c5dd97d56dbb6ddeda28a2cf53baceb74766d2d639411e99a66fab9a27a89aa469550a15e4800c290f89eff03d07f6bd719e6c4040000",
    ],
    [
      "ETag",
      "oC+cqfx/ngY7+kfID7uIXw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-36-1605310013007"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff6d90516f82301485ffcbdd2bc402d14d131f7492cdc43886fab02cc654b83014286bcb0c31fef7ddd665db832fedbda7df6dcfe9198e459dc208f645fed9a2ecee72d4afa68851b5a556b435a256080ea0e63991d12a950f591cbcf436c3d95bef1045fdbc3b8dc744a8e4032b0ea333640596a982d1fb196a5e218ded76d2de4898ee1aa3cc26eb90ba4aa4a65b6e168bc97411c2c5f937d31cfff8f9721d3e85f1ad91edc58183d8c798a1c43a4163a191e280899e9b748a574d89ae12ad4c508185ed412e45db7029844b8a1b0c5c6fc0fa81c7981730764f602912ae0b5113bb599137d042f33216270a073e01d2969433b3eb979199cf5ce6bbded086b192f5780bf2d92fe41968fbf3c4b4d3a82229c8af4263955d6d3f0a134553442d5b7420e1f4e9cf85bef6976f4cd5b07ed1010000",
    ],
    [
      "ETag",
      "PSdr8fR3O/U9DY/jPP5gyw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "8b08000000000002ff1dcf4b7282300000d0bb642d0e2510487701866a50074d11cb26a3103ea50206d1a0d3bbd7e9bbc17b8263968961e0d7ae112d7807d3d1c0f36c1ef6ba6b6d33bd3bac71e68eaece92d8de274eda51bb0d2aea9f7e1e1469c28b481e475e400aa5787a71da900fe7c274778ef980116223924a2a0293fb05e96e436f1ea74b72d2f0a16565bdd2034bc2c59b2551e19b4180ce6855d13536a6aadb272a5ea4b7b89c92daef77a3a9f1fa8b28e56966616fa66d9ce795f6b15f7e76851fe5774c8d4dc42c881a143aecc056316b6014a43e291281be47181a25013320545f4b31f0fa958516c633f03fe7d7a917afbe2b8e5248f0fb07ea17d77618010000",
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
      "Fri, 13 Nov 2020 23:27:24 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-37-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "535d4fa34014fd2b64f6515b68694b6dd2ac4d8b2b494b9552cd66b321c370c151ca203368d4f4bfef65b0aec6449f98997bce3de77ef042ee789190098979765f43f5f4e356c4e49880a219be2ef8c5d991e55d3c977e9580f08f6697c1ea713a45046f5892eeca1c3a52d4150339d96eba5925ea925642743051c7763abd9135b47b96d5b32dcb419e843c5df2e20ed9374a9572629a07ed6e264496032db9ec32b17b7b371ffa6659895b604a9a1f254d5491e6d7a23f73c1a8e2a2986e3768a0965045b0a33c470bff99497cfa317597d35d3743f0036740191375a11a5b98828922e5595de9ac64f242b4cd7707b27197ee3c3498c8eb5d11157407c74642158dd45309c659b05e199e7fb60e56b3d05bfbd1667eeeae66ddf97ab95df91be3fadc0d5c43d13807cd35a6c6a9bef97841fd04a4e285560f9be746f9b541dee7b134049496d00623c71ad1ded83a89d3d861e9d81ec6a905713c8e9d21b5638b9d0c6090c44091a745358b16a2b0e2fed0766c2b4afba3413470fae3888ed25ec4e8902289f5c7b643f6c7e4b1e20a165c9642f2b643e43af042370a83ad3f9f85ae2e21a575ae16adb1a680f71e151688a02f6ada37512e50a969b7e7876e309b87de95db4e780919654f9b7b9c714a730988a615364f41b51209368cf8b395bb40b09ed8c52128c9e4cf0b697adeb878d7f2377a88036cec2afd259b30f0fc5fdace017145f35a431eda0329d1f20dd686aef77f11894bda6621975b37f84ddaa70052a8a060df4f13c13af0edbf76587cc4e2eaa38c5478c7dd61b2116115b43bc475b907f660688df59faa68a53ec5fabdc1a16b4d8e2623eca050af15b58b8f85b662b57c036110c7efeb6eedff010caff75478040000",
    ],
    [
      "ETag",
      "DiPF+0IPzpNrdeoN+AQRMw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-37-1605310013007"
  )
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
      "85ffcbf40a09464543d203b6b692285ac55363cc0a03621716779736d6f8df3b4bad6dda26ed0566866f96f71e1ce1292f13f0609367fb1ae5e12a43fd608a39aa9a6b45b74a940ac102d42c23922fab7098e9faf01a8493dd1ea7fd8d3ff2afaf8950f1160b06de11d21c79a2c07b3c42c90aa4b558f0ba28d74d67813e5466b888e641784f7d2112d387cbf1d81f8c8770b22e8b09d36cddf0ff585b9d2cd889cd1c539458c668b45452ec30d681b1a9585171b495a8658c0a1ab879904951574c0a61d3c46ef7ec96eb74db2dc769b51da747201731d3b928895d2e481f68a1199f8b1772092e01b229c970da5c9f699c278d11530661e4761a7d5f019296e61cd77f83a477cbe8337c60e708be73ac1075a92fd4dd78eaff761c65fa79d4ad1f0d7f104a535217240a26c345e44f66865b9dbd0f0e1ad54c0a0a52a1c9b0e574fadd9eebbcc77a234cd4f41e4fcb1a2d8819fd1da35c839732aef0f4066af032907b020000",
    ],
    [
      "ETag",
      "lUpNEgtuyzINMjqeO8bAHA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `id` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-38-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "3010fd2ac8fba795920081fc94a22e4b59162925198156d53425068ecc2d608a4dbba8ca77df014ddba85d2b21817defdd7b773ef3486e591a9221f1d9f6ae807cf7e586fba44140d22dee0ed444f4dba6a12e17d3699259bb1baffbf7613442042b598226590c4dc18b3c0031f456ad6dce8b8ce69c373151d3e837f5aed631744dd30d4deb214f401ccd597a8bec3f526662a8aa07edd696f36d0c3463a215f0e4795fbd6fab59ce6f2090423d96545145a81f8b9ec53ca092f174e4add04021205f4342598c165e98a1fff538758bd1a4b545f03d0b8006012f5259dac214014f23b62df22a2b193e92cae6ab0fb2b2e6d6c455260bcf764f363429c99b53850a65bdce4114b16c281bac296231ac59b8a923d9adf2dd595c60041dfca102c446b9fa613996a26c4ad0483953c6f6b9724c9dd98a67dbd6ca554ece4e95a9b3f096cab7eb230c7a0e414896568e5deac750ba7d6aeaeced5196042ad1411d5cf7b42ed5fbdac08ffc5e10f58d8e1f69e0fb7dbfd7a186af050313ccd0078a3c5966af5834e5691728edfa860e6dbd67d241d81e987e089d81ae07d03380f669146a9a0964df200f399370ce44c605ab3b4bae9c996bad5dc7b32763d7aaca882876efbc365716f1daa7c42211f4415dfb32ca382a95c734b35dcb194fdcd9a5554fc61cb634d8adee7036221a0b4034cd690212f20b1e62d3c872b19ab9b3853d9e23a33aeee50121c8f0d7e30bc1dd65559765f52eb5ba66a57f005cd2b8a810f7f507d13b64bf6ffc3fc5d871c6d7284bf39ceede4fff6efe0a5fad6a8bcf7aa4543bacda64ff7b8f4f83e02daab3939f9ee55c937acb8108724883cf4707c155e0d39fc1e1662216ef26ca08896b1cd4409422410ef5c0b2a4b2fbc436bb5d4d271538976f623d533b9c4c99a3cc0809a4f2a9",
      "a2fa66568d2a438578066110e7cc9ed9538cfe031fab0b1d19050000",
    ],
    [
      "ETag",
      "9/ms8243/POGGmpEyjU6xw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-38-1605310013007"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d90514fc2301485ffcbf5754bba90812ee101cc2218449d124c0c21ddb89b836db7b61d8690fd776f070f3efab2de9e7da73da7673894cd0e2248cbe2bb457dba29d0beba2141d356d6f0a2a831081ea0950593ebf0e369923f06a3bbfdba1a3eab5998ae8fc578cc84c9beb096109d212fb1da19883ecfd0c81ad9b6ddeafe44c6ec493965be7c8f1fe284859a764e58ae168bc9741143e7fdb1a9c3bf2c9bce833da509e6a8b1c9d0a5509af698d9b92b6864ad2af40db53a43033ddcff2834b54a6a229f157f70eb0743110e022182811023062bcaa42da96176f5c6d9c0929555423fdc0f0206743f72d5bcff1e7bd975b84e9b6e73354d4f16cd8b264e60d05d2e2e41eec985b31cdaea163dc824bfe4acb4977df70b9c28a30aa6010000",
    ],
    [
      "ETag",
      "W5XMAfJ179jWl6OpH5bWvg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "4b",
      "72",
      "82",
      "300000d0bb64ad4e24c44f77a4ad5a151189fc364e880152443e8922767af73a7d37783f80712e943ae9aa1057f0067a66cc477cb4a921c12ebfaf893df59f1eeac907f6903975ec24dad96c3d3c6b769191e5d0dc69bc9c624ab7196ce5b92b1ba316e14d6d1dff417616ed17d0f2ba8dac9222404f3b8efd60ef85d1f8666ee5aa8895a11a7df403f56479b10cf7a94b8ca0a768d2389760e996ec2a261c33d399cd56878467e16df61ef96d565b25ac34a6c3e2fb6bfce877a599c6b2cc95c6d025490a75f60939d2b8d8235c2daec7f121bd776000c4a396ad5027f9ca223c9f0fc0fffca4fb5abcfa44b056b4e0f70f696625cf18010000",
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
      "Fri, 13 Nov 2020 23:27:27 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-39-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "536b4fa34014fd2b64f6ab2db4d0074d9ab5a9a8242d5d816acc664386e9805381c19941d798fef7bd0cd6d598e82766e69e73cfb90f5ed03dab76688652963f34543cffd8f3149d20aa700eaf8bebd5d36d6c5d64c2fd1b8868dfecab5a5dcde780602d4be2b22e684ff246102a67dba89f0bded45870de83443ddbed0dc6d6c81e58d6c0b6ac09f0242db215abee817da7542d67a679d4eee79ce705c535937dc2cbb777f37168d682ef2951d2fc2869828a34bf16fd59708215e3d57c1b8181465291d012b3022cfc67eed2d38fa9fb0c97fd1cc08f8c504c086f2ad5da8214845719cb1ba1b3a2d90bd236df1d50e4adbc656c105e34659554b8a427c60e2b9ca8e79a1ae7e1666df8c1f9265c2f627f1324d1f2d25b2ffacbcd6abb0e22e3e6d20b3d43e1b4a09a6bcc8d537d0be002fa3b2a15abb47adc3eb7caaf0df23f8fa52580b4a45d309958633c985a6e9aa513924ded519a59344da7e96484edd422ae439d5d4a31f0b4a866e18a5753776439f6789a3853db4e9ca16b27d8714932b0d3091e8f2d0bbb363a9ca027c1143d63b2e692751d4237a11f7b491c6e83e522f67409196e0a75d6196b0b78ef51418100faa2a6431b651c94da76fb41ec858b65ec5f7bdd845734c7e4397a801967b89014d05840f314156bbe8386a160b1f6ce00ac27f6eb189468f6fb05b53d6f5dbc6bf91b3d8601b67695fea2280efde042db3922ae71d168c86377403558be83dac0f5e10f206149bb2ce86aeb85b7a87b0a694605adc8f7d304b00e7cfbaf1d171fb0b0fa202315dc6177886c4588a0dd0e315dee91ed4c86e321d260a13ec560ecc7aeb539da8cb4a4957aada85b7c28b4136be41b088230fe4077ebf00f269ea74278040000",
    ],
    [
      "ETag",
      "AVLwYT0Gfr9xNrSjujnptQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-39-1605310013007"
  )
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
      "02ff8d92dd4e83401085df65bca51152fa23492fa8564b425b2d345e98a6d9c240a9c0d2dd45d3347d7767b156a3267a0333c337cb39070ef09c953138b0ced25d8d627f91a27ad0c51c659d2b49b78a9712c100542c253249e2cbd4b6dca01348b4b3fe78337bdcb983011132da60c1c0394092611e4b709e0e50b202692de2795d94aba63340ed2b3d0cc2b937bda3bee0b1eea70bdf7787fe088ec67931668aad1afe1f6bcba3015bbe9e638202cb08b5964af02d46cad336252baa1c5b92d72242090ddc3c4805af2b26386fd1a4d5be6a595db3d3b64cd36a9b668fc09c474c65bc247611903e505cb17cce5fc9257409104d498693e6fa42e32c6e8ce8d29b865dbbd1f71520694996e3ea6f90f46e187d860fec14c1778e15bc2ed599baf567ee6fc751a69f47ddb8e1e8072115257546426f320a427772afb9e5c9fb70af50de0b4e414ad4195aa6ddeff4bae67bacd75c474def7194a8d18088d1df31ce143809cb251edf002cc42e827b020000",
    ],
    [
      "ETag",
      "ffd/g41AS5Sse4i8HhOWqA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-40-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "547f6f9b3010fd2ac8fba795f2c3019a904851c712d631a5a423a451374d892126750b9862d32aaaf2dd7798a66dd6ad9590c0bef7eebd3b9f7944b72c5ba3010ad9e6aea4c5f6d30d0f5103514936b0bbf8363ef3c6b87bfddd66378bd03f8ff59fcec370080856b10449f38436052f8b888ac17cd6da14bccc49c1791312354ddcec74f189d1c1b86360dc039ea0493c61d92db0afa5ccc5a0ddde6bb7369c6f124a72265a114f9ff7dbf77a3b2ff80d8da4681f4ab64145b4df173d4d784424e3d9703e0303a5a0c592a6842560e185b90e3f1fa66e3192b63600be67112551c4cb4c56b62045c4b3986dca4265458347a46cbefa403367e28c026d349d7bc1d18aa4157975ac11a12d97051565221bda0a6a8a5942976cbdaa23f9adf6d59f9e43041c5c1341c54a5b7c737c477bd95a6943ed54b3bdb17698c0f5b4b9e739b3403b3a3dd6cefce9fc42fb72758001e76b2a24cb94ef808409ad3c3fb5d67d7ba015814810ad83cb1eee928e85fb611cf6a2d8324ec218d330b4c2de0931421cf54d6aae434a8027abec8a45329e61ddc0d4e8c173a29b6664eaa4d7079e61c58685adb88f2d9df6ac4e17ed1ae8a160928e99c8b960757fd1c277036719f8736f64078e2a2326d0c3716dae2ae2b54f094502e89dba7655947150aa0ecbf502c7b747817be9d4f331a11b126d67773021314904053429484a252dcef91a9a862ea6333770a79e3d01863af48b3d42a0c1afc71742b0cd5597a57aa359e0bbde9932b0475c92a45490fbfa03d9397845bb5de3ff696cdfb7af409a1405d9fe158372ba6645ff8784c2ab556d732fd94195da7ea5a3ddef1d3c0d04f7a9ce8e7ecc1dff0ad55b3e8d6941b3e8e3f101b00a7cf85bd8df51c0c22d051921610dc31a894a242a683db42c55769fd8a6a55b7da4c0857c13334dbc3f9d2a479591a634934f15d5775435aa0a95e219044198354f1dd4ee0fab11e4c223050000",
    ],
    [
      "ETag",
      "WHDGND06hJAijWbRMf2ZEw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-40-1605310013007"
  )
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
      "300c85ff8b776da5140693903800621b5385460787699a5068dd5268eb90a46c08f1dfe78469e2b84be23c7fb6decb19f66593c10036657168519fee0ab40b572468daca1abe1435062100b4b260b2a7fad9627978df4eb2fcfb257e2c469376391a0e9930e9166b098333e425569981c1c7191a59238fadd7da6f64cc9e945366f3e5f4699ab05053e684f92a8e47e3780a97e0664cedff35f2790960479b0473d4d8a4e85c284d3b4cedcc0534b2561586865a9da2010ffb46a1a955521385ac84f7228cfaa2d78d8488ba423c3058512a6d490db3ab37f60696acac12fae27cd06140fb92a3e6fe3cb2dcf5198e1e70d66e7b9dbf5ee47a9fbf0bc7278be65513bb33e88c89abc90939e3960359dd6200a9e45f7e2eedf57df901342d512dc2010000",
    ],
    [
      "ETag",
      "5p6dQTqYhCdfxJLFgACuTA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff1dcf4b7282300000d0bb642d4e04c3a73b889f5191c1500bb2612026a814480216d1e9ddebf4dde0bd404e29ebbaac6f2bd6800f30e6ba33a5d39d801e3ad0269eaf6138d7aa2da72ade5bcf9bff1df0ed0905d8ce569b9f9911f83ba1dbd84e5c322cc68c8cf862952875d38b7e20e74a7ab616702cefd0aa25ecd3f82871122c43b9b8988399ec8ade3da7d1ad247ed990e53d1a4c6e6c38259dd38ae2138aa3b6afb5fe1e84cc58556ea742f35170e1c1d949e5d1596a856c153af9e8d1a271ad7f358377db588273fd19a7352e530be6d432625657d8d65d3001ec21ae8a75d9f59d3590e34cc0ff3ceb47c1de7d8fe58a29f0fb07e5bad7d218010000",
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
      "Fri, 13 Nov 2020 23:27:28 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-41-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fd",
      "2b",
      "91",
      "f7",
      "4adb94b6495ba91a5d09d0a94d2149416c9a22dbbd0986340eb10343a8ff7d370e65b049f014dbf79c7bcefdc833b913f9868c0913e97d05e5d3975bc9c801014d537ccdf98fc1eae2f7e9faf1ecfb7598af07df1ecfcfd2c90411a26629ba2d32682959951cd4781db6d35256052da56c61a256bfdbea3af6a0d7b5ed6ecfb65de429c89285c8ef907da375a1c69dce5ebb9d4a9966400ba1da5c6e5fdf3b0f879da294b7c0b5eabc97eca08aea7c2cfa35939c6a21f3c93a4403958232862d15195af8cbdcb0a3f7a9db826edb29821f0407cab9ac725ddbc2145ce68948abd26425e367626cbe3990d05b78b3c8e232abb6799cd32d1c581baa69ac9f0ab04e82d5d29afb27ab60398de62b3f0e6767de72da9ead16eba51f5a57675ee0599ab20c0cd79a5847e6e6e305f537a0b4c88d7a543fd7ca2f0d9aff3f969a80d20a9a60ecda0eed0eed114b98cb93616fc0121b181b3277407bcce6a33ef4370c28f28ca861d15ce68311b89cdb3c76b843e33eb307317581c54e6fe8386c381a6d0ebb6477401e4ba1e158a8422ad174885c05f3c88ba360edcfa691674a486895e9e3c6585dc05b8f1a0b44d00735edeaa890a854b77bee475e309d45f34baf99f00252ca9fc27b9c7142330588a625364f43b9941b6c18f1a74bef18c16662e7fba022e39fcfa4ee79ede24dcb5fe9110eb0b6abcd97845130f74f8d9d3de2926695813c340752a0e51bac0d5def7e211297b4c9422ed65e704d9aa700122821e79f4f13c126f0e9bfb65f7cc4e2eaa38cd278c7dde1aa16e125343b244cb97b767f3872cd9faa69a9ff8d8d",
      "ba8ebbef5a9da3ce085bc8f54b45cde263a18d58a55e4118c4f1fba65bbb3f4bb3452378040000",
    ],
    [
      "ETag",
      "ncZ5OQxGUwHJYSnU5BwPHg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-41-1605310013007"
  )
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
      "000002ff8d92d14e83401045ff657c8504d2961a923e504525696b6d698c314db385815281c5dd45d334fd7767d75a8d9ae80bcc0c67967b2fece1a9a853f0615de4cf2d8add598eea4e1733946da924dd1a5e4b040b50b19cc8f62196c3fea42f0211de3be1d68bc62a0d06032264b2c18a81bf87acc03295e03feea16615d25ac2cbb6aa57a6b340ed1a3d9cc7b368724d7dc553dd4f16a351301c8570b04e8b29536c65f87fac2d0f166cf97a86190aac13d45a1ac1b798a848db94ac6a4ab4256f4582120c6c1ee482b70d139cdb34b1bbaeed7a4eafe33a8edb719c3e81254f982a784dec624efa4071c5ca197f2597e011204c498633737da171911a23ba8c26b1d735fabe02242d2b4a5cfd0d92de0da3cff0811d23f8ceb18ab7b53a5157a3dbe0b7e328d3cfa32e8338fc414845499d90381a87f338184f35b73c7a1fee14caa9e014a4449da1eb74cf7b7dcf798ff582eba8e93dbe122d5a9030fa3b6e0a057ec64a89873771bc7d1f7b020000",
    ],
    [
      "ETag",
      "uYTsB7N7rArEW0Ej6IMtdA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-42-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "da",
      "30",
      "10",
      "fd2a91f74f2b51c80f2080843a4ab32d120d6d08adaa69022738a94b12a7b6d38d557cf75d9c52cabab552a4c4bef7eebd3b9ff384d6345fa1010a69f25012bef974cf42d44044e20476e96f9fb1b01726ba79f64be86bbdb8eaacaf864340d08a257056a4e444b09247440ce6b366c2595960ced809243a699b274657ef5886ae1b96aedbc013248d27345f03fb4eca420c5aad9d7633612c49092ea868462c7bd96f3d9aad82b37b1249d13a946c818a68bd2f7a9ab2084bcaf2e17c06064a41f8826498a66061cf5c859f0f533729ce9a09801f69447014b13297952d4811b13ca649c95556347842cae6ab0f347326ce38d0c6d3b9171c2d71569197c71a16da62c1892853d9d09650534c53b2a0ab651d29d6da177f7a011170708705114bede69be33bda7e6ba90db5536de49d6b87095c4f9b7b9e330bb4a3d363edab3f9d5f6a67b7071870be2242d25cf90e709892caf3736bddb7075a11b004d13ab8b0f52e367a7a3f8c433b8a7b56278c7512c27cd81d6c857ad46f93f62a241878b2caae58386739044c1d6362c566cfb44da363b42da3bb323ab6d9b5ec308e74bb67451d036d1be827a7929c53513041ebfea21bdf0d9c45e0cfbdf12870541931861e9ed7e6aa225efb94502480dea96b5b452903a5eab05c2f70fcd13870af9d7a3e2624c1d166f6001312e3541040638e332209bf602b681aba9ccedcc09d7aa30930d4a15fee10020dbe3fed09c1a6505d96ea8d6681ef7a5f95811de21aa7a5823cd61f0817e0156db78dffa719f9fee816a431e778f3570ccae9b62bfa3f24145ead6a9b3bc9aaf3fb9589b63fb6f03410dca73a3bba9a3bfe2daab77c12134ef2e8e3f101b00a7cf85bd8dd51c0c22d051921610dc31a894a24e2a41e5a9a29",
      "bbcfec761fa6112930976f62fdaeb93b9d2a479591642497cf15d5775435aa0a95e205044198354f1dd4f60f846573a223050000",
    ],
    [
      "ETag",
      "izRoob8bg02Bxs0k0pQ5kQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-42-1605310013007"
  )
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
      "4f83401085ffcb7885b8d85a13921eac215a431aa556638c6996658ab4c06c77170d12febb03f6e0d1d3eebcf9e6ed9bede050d419849016f9b141d39ee5e81e874b82b6299de543536d113c40277326cdcbe7f1fc5eea679d95f57456ac53f5fd9acfe74c58f5819584b0835d816566217ceba09615f2d8766b4647c65cab0765b97a8a6ea384858ab241586de2f87a1147d07b7fc6f4e15f23efbd077b4a13dca1c15ae190421bdaa372cb61412b2b5da26fa9310a2d8cf0d8c80d355a1a229f157f7ae10733713909840826425c31589292aea09ad9cd9ab3812327cb84be783f1070aa17ad43fb6088cd2d66a70e3bded0f0aee33cce34e88192fc497785fbadfb1fd71ac52181010000",
    ],
    [
      "ETag",
      "rWvq/JapVpdln46iSbczYg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "c95283300000d07fc9b974d2b028dea4609d4259bb80974c8080190a0442d91cffdd8eef0fde0f20594685c0435bd106bc8185207d9b6d6d0e0d35286e0f5a2f797aedcd3d89c209090fa3f173d26063ba6a72912605894a51dcdc8b5e4bfb6334a9d11d037e8a2072ab21efe477bb8dac6fbf9eae5f285463566a53b46af368d6ed82531eaf0aef120769969821f6f1ad3eefbc8256ac8afcdc41abb3ef34570e7d41948ccc259987e004171a30a932c531d425a938af3574e2205b87f2ee21e8b3113f2ebbdd811f7af8b093d432b4bbf9d2b419cb03b00174e6aca702b3675656757d03fee77858387df60d4a7ada83df3f1e1fb7ed18010000",
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
      "Fri, 13 Nov 2020 23:27:30 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-43-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "db3014fd2b91f795b609e98b4ad5a84a804a6d3a9214344d53643b37c190c669ec7443a8ff7d370e652024f814dbf79c7bce7de4993c8a222113c244b6aba17afaf620193921a06986afa7a1bd4b1f5dc86f9774a7afeefeee6dc7be994e11211a96a2db32878e9275c5414d366137ab645dd24aca0e26eaf4dd8e33b407ae63db8e6bdb23e429c8d3a5281e917daf75a926bdde51bb9b4999e5404ba1ba5c6e5fdf7bfbd35e59c907e05af5de4bf65045f53e17fd9e4b4eb590c57413a2815a4115c3968a1c2dfc6726ecfc7deaaea0db6e86e0bde040399775a11b5b9882cb2215595d99ac64f24c8ccd3707127a4b6f1e595ce6f5b6880bba85132ba19ac6faa904eb3258afac857fb90e56b368b1f6e3707eedad66ddf97ab959f9a17577ed059ea529cbc170ada9756e6e3e5e503f01a54561d4a3e6b9517e69d0e2e3581a024a2b6883f1c81e52676c9fb1948d783a76072cb581b1311b0da8cb6c7ed6877ec28022cf881a162d64311c0f79d20788d980b218318398b98913bb8e03e0d264e4242e399c903f95d07021542995683b44ee8245e4c551b0f1e7b3c83325a4b4cef5456bac29e0ad478d0522e8939a0e4d5448546adabdf0232f98cda3c5add74e780919e54fe10e679cd25c01a26985cdd350ad64820d23fe6ce55d20d84cecc731a8c8e4d733697adeb878d3f2577a84036cec6af32561142cfc2b63e788b8a5796d20fbf6404ab47c8fb5a1ebc36f44e292b659c8cdc60b7e92f62980142a28f8d7d344b0097cf9af1d171fb1b8fa28a334de7177b86a447805ed0e0953ee913db0fb670e31e04a7f880d5de7d8b526479311b650e8978adac5c7425bb15abd823088e3f74db70eff003f73500978040000",
    ],
    [
      "ETag",
      "2S0qfk3elVLaqtGWxv010Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-43-1605310013007"
  )
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
      "85ffcbf4282618151b120f5ab525416b15bd34c6ac30207661e9ee526b8cffbdb3d4daa66dd25e6066f86679efc1119ed23c02173669f25ca23c5c25a81f4c31435572ade856885c2158809a25448e06fb7d6d571bd6967c998f5f03278cb365d2ed12a1c22d660cdc23c429f24881fb78849c65486ba1e06596afabce027d28cc701eccbcc92df599884c3f59f87eafef0fe1645d1623a6d9bae2ffb1b63a59b0139b19c628310fd16829a4d861a83d6353b1ace05857a294212aa8e0ea412245593029449d26f556b3de70ec76b361db8da66d7708e422643a1539b18b39e9032d34e333b12797e01020ab920cc7d5f585c669541931a537099c56a5ef2b40d2e294e3fa6f90f46e197d860fec1cc1778e65a2ccf5851af9f7bddf8ea34c3f8f1af482e10f42694aea8204de78380f7ae3a9e15667effd8346359582825468326cd8adeb76c7b1df63bd11266a7a8fab658916848cfe8ebb54831b33aef0f40691c78cc57b020000",
    ],
    [
      "ETag",
      "FDww+j+E+VlVnMxT6cfmVg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `date` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-44-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8554fd4fdb3010fd5722ef1790fa9134fd962a56da8c452a29a429084d53eb384e302471b11d5085fabfef9c50a06303295212df7bf7de9dcf7e46f72c8fd010852c7928a8d87ebbe321aa21aa7002ab4bcb33e5533fe98c2ffd4b712ab27bf5648e47234030cd9238dba4b42e79210895c3e5a291085e6cb0e0bc0e89eaed76ddea9a1ddb324dcb36cd1ef0244de319cbef817dabd4460e9bcdbd7623e13c4929de30d9203c7b5d6f3eb69a1bc1ef2851b27928d90415d9fc5cf424e5042bc6f3d17201060a49c58a6698a560e18d1985df0f533718ce1a09801f19a198105ee44adb821484e7314b0a516645c36754da7cf78116cecc9904c664bef482a335ce34797d6c6069ac5682ca225535630d35c52ca52b16adabc8e6def8e1cfcf21020e6eb1a4726d5cff747cc730d61156746d8c8c1363ec4d8d43b2eb194bcf7316817174726c9cf9f3e585717a738001d711958ae5a5e7008729d57e5fdaea7edc4c4dc00a3c54c155cfec62ab6f0ec238ec91b86f77c2d8a461d80f7b1d6c872619b4693b0a29069ed2d94b16ce79deb762db0ebb36a17ddb265d9bf6bb03423abdb017452d6cd9ed76dc8e3b8308ed6ae8493045a74c6eb864556fd1b5ef06ce2af097de641c3865193186fe4d2b73ba88f73e151409a04feadae928e3a0a437caf502c71f4f02f7caa9666346134cb68b07988e18a792021a0b9c5145c5398fa069e862be700377ee8d67c02837fc628f9068f8ebf98d106c37659755f946535dc0ee5dc22b9c1625e0b1fa402db365d6cd56ddeaa0ddaef6ff4c63df1fdf803a16026fff8a4145ddb6a6ff43a7c4977f95d3bdae85b4daab0bb4fbbd83a786e03855d9d1e5d2f16f50b5e4d3980a9a93af2708c065e0cb5b617f44f59db3d03252c13fcc2b915a84085acd2dcb4abb2fec8e650d6c548285fa10b3cdee7e83740e9d916634572f155547b46c940e15f21504411837cff5ce20fa075b2867ae22050000",
    ],
    [
      "ETag",
      "U1N0sw8g5AQRQrBrmktw0A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-44-1605310013007"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d90516f82301485ffcbdde32083e8b684c487698cba18b3a13e19626abdb02a70b12d5bc0f0df778b3eec712ff4f6f09df69c5ee1acca23447050d9a546dd3c64683fdd10a3a9736b78a9a834081ea0151993ed3bb56bb599cd2fe9ea51ce9f64ab2e936c3462c2c82f2c0444574815e64703d1ee0aa528906dfbbdee4f64cc36955316abcd74368d5928e8e884d576b97c1b2fa7d0797f6cd5f95f96a4f3e044871853d4584a74292a4d279476e10a1a515439fa866a2dd1400ff73f324d75253491cf8a3f1cfae14bf03c0883201c04c12b833949611595cc6ed79c0d2c5991c7f4c3fd206440f723574dfbef772fbb0ef729e992bb69dc58341f9a3881417779700b322117ce7268ab6bf4400a7ec9b9b2b77df70b4b4c8177a6010000",
    ],
    [
      "ETag",
      "zJozSiTGHqfN+cH/cziqCg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "1dcfdb6e82300000d07fe9b333305a66f7062a9d0cea1030861752580d0d6a5b8a5c5cf6ef333b7f707e00ab6b6e4cd9cb96dfc03b98d92b5ed6cb4f65f928e1f8a276288472dea61526e6308f641bd2337cd8872ffb7475d77759d0bd28d338f7e26a3be67070acfbd52e325a542d6dacccb4749ebe0dddfb33244aefba9586e804f5644bd6b8439b124192bb8544e2a65d1048add7ec168a7c238eac775f323769864b148f0139fa6f5e141166d5deeacc13cfbbaa0e426a63ed9bc6df1469e5c5d8c8737909908a8c4e55a846ad0ff2a3470f42568e358205e093121d37a578661d84f102fccfcb7e56fcd9f739eb78077eff00e505661c18010000",
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
      "Fri, 13 Nov 2020 23:27:31 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-45-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c8",
      "fb4adb845ed256aa96d286a55293d23405a1d52ab25d27189238b59dae10eabfef89435910123cc5f6993933e79217f4c48b1d1a23c2d37dc5e4f38f4741d019621aa7f0badecf6e47f97abebff4efa5bcdcfa37872a5d4f2680e0354be1bccc584b894a52a6c6db4d3b95a22ab114a205895abd7ecb19d8fdae63db4ed7b65de02996254b5e3c01fb41eb528d3b9d93763b1522cd182eb96a5391bfbd770ee79d528a4746b5ea7c94ec808aea7c2dfa3313146b2e8ac97603062ac564cc72cc33b0f09fb923171f53b739cedb29800f9c324ca9a80a5ddb82145414094f2b69b2a2f10b3236df1dd0c65b7ab3c8a222abf2222e70ceceac1dd638d6cf25b3aec2956f2d82ab55e84fa3c52a8837b36bcf9fb667abe5d60f36d6ddb5177a96c62463866b4dac0b730be002fa3ba6342f8c7a543fd7caaf0d5a7c1e4b4d0069c59a60ecda03ec0ced1149884b9361b74f129b1132246e1f77894d473dd6db11868167440d0b17a220e7c4b107231cf75dba8b7b3d4ae261df1dc5a3c1397507b69df4ba0e3a9ea1bf926b36e7aa148a371d4277e122f2e228dc06b369e49912125c657ade18ab0b78ef51438100faa2a6631de50294ea762f82c80ba7b36871eb35135eb214d3e7cd1e669ce04c31406309cdd34cfa62070d43c1d4f7e6003613bb3905151aff7e4175cf6b17ef5afe468f6080b55d6dbe6813858be097b17342dce2ac329043734025587e80dac0f5f10f2061499b2c68bdf5c27bd43c852c619215f4fb6902d804befdd74e8b0f58587d90511aeeb03b54d52254b26687b829f7c4ee3beed041062cf5a7d8a83b3875adce516764392bf46b45cde243a18d58",
      "a5de401084f107a65bc77f5139fb3778040000",
    ],
    [
      "ETag",
      "QqCV9mQDqBMYrrBUMPvugQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-45-1605310013007"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d925b6f82401085ffcbf41552bcb7243ee0addaa855c4a7c6981506c4024b77175b63fcef9da5d6366d93f60566866f96730e1ce129ce02b0611347cf058ac355846aae0b1765912849b79c6712c100542c227210f5ee87fbdda69ba7aff36a70dbb9f6ab8379bb4d84f4b79832b08f10c6980412ecc723642c455af37952a4d9baec0c50875c0f179e3b9ade519ff240f7d3e578ec74c67d381997c58029b62ef97facad4e06ecf8c6c51005663e6a2db9e03bf4d548db942ccd1334252f848f124ab87c10095ee44c706ed2c4ac37cc4ad36ad42a9655a959568bc084fb4cc53c2376b9207da0b86289cb5fc825340910654986c3f2baa7711c944674399a7acd7aa9ef2b40d2c238c1f5df20e9dd32fa0c1fd83982ef1c4b7991a90b35183f38bf1d47997e1ed573bcfe0f422a4aea8278a3497fe1399399e65667ef9d834239139c8294a833ac58f59b46ab69bdc7dae53a6a7a8fad448106f88cfe8e61acc00e5922f1f4060df1e2847b020000",
    ],
    [
      "ETag",
      "FgDJHvjbCpmxQ2d9B/c2FQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `stamp` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-46-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8554fd4fdb3010fd5722ef1790fae1b44d5a2a21d641c6a241daa529884d53ebb8976048e334764015eaffbe4b42f9181b489192fabd77f7ee7cd707722bd225199250c4eb02f2cda71b19920601cd623c3da5dc597fbf1ec732b3daeb2bef42d9fde0fef01019a25429b6ca12682a59e41cd470366dc5b92c32964bd9c440cd9edd346d6a754d4acd2ea57dd42948a23391dea2fa5aeb4c0ddbed5dee562c659c00cb846a71b97a3a6fdf75da592e6f806bd57e9db28d5954fbfda44789e44c0b991ecea668a05090cf61c54482169e95cbf0f3ebd02dc156ad18c9778203e35c16a92e6d61082ed348c4455e4525c30752d97cf141a6ce99731c18c7e39917ec2dd8aa142ff60da68cf93c075524ba612cb0a648243017cb458d64b7c6577f7c8e083ab8660ad4c2b8fce6f88e612c9446770be3d0383246de89f15aed7ac6ccf39c6960ec1ded1ba7fe783631be5cbde2a0ed25282dd2ca74c0c2044ac38f7d75dfde6629601a4dd4e0bc4f6d660ee84118857d1e0dba56185108c341d8b75837a4fca007bd65080c75ba8c5ea9582ad33eef0f80f62ddbee41085167d9639609d4b4a26ec8bbb6d91940d41db025d936c87d2e349c08954925eae6924bdf0d9c79e0cfbce351e05465440c1b78529b2b8b78e9536391487aa7ae6d890a8999ca9b72bdc0f147c7817be1d4c3710631e39be91ac72362890264b39cad40437e2e97d83432194fddc01d7ba3335454373ed9311419fe7a7816049baceab2aede2470cff18e46e793cac38e74c192a262ddd51fa4433bb4493b4dd30accced0ec0ecd5e8b52fa936cb78dff071ff9fee80a0db13c679bbf302cd2ee95f27f64adf8d5afdafcce8549ca6c4f9ec8f6f7169f06c115aba3931f33c7bf22f5910f11e490f28f870ac915f0e13fc56e6d918b8b8b697005b4c011e6aa4cc273a84759ac2abb8f6aab635b16a9c8b97e830d7ad6eececa1865445841aa1f2baad7b66a540915ea8984204ea0e77aa788fe01a4cdc8ad36050000",
    ],
    [
      "ETag",
      "G0cEqKhOgop5/qYNVs67Tw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-46-1605310013007"
  )
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
      "000002ff8d904f6f824010c5bfcbf40a29c43f6d483c40435a1ba394560f36c6ac38521498edee62430cdfbdb3e8a1c75ed8d9c7efedbeb7173815f51e02d815f97783aabdcbd1bcd92145dd9446f322a9d6080ea0113993afa355b21ec58fc96a3194f7eb73182d7665389930a1b32fac040417381458ee35049f17a845856cdb6e557f2263a6955699ce3fe2e73865a1a2bd15e6cbd92c8c663174ce1f9b3cfdcbb2e91c38d22ec5032aac33b429a4a22366666a0b6a51c9125d4d8dca50430ff73f72458d148ac865c51d8e5d7fec8d06bee7f903cf7b60b0a44c98826a6697ef9c0d0c1951a6f4c3fdc06740f523573df4df732fdb0eb769d36d6ea6a835a813459c40a3bddcbb0679221bce7068a31a742013fc922f85b9eebb5f0535951aa6010000",
    ],
    [
      "ETag",
      "J5VPZ5E8PVO4p/ZvABOblA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "51",
      "6e",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "f4",
      "5b0c418bb03f30239532596b08d89fa62d05a46e22c5282ebbfbccde0dde0f104a696bf97431fa1bbc815978e1522df1e0c6903487b42062d34de8a947b4b967ae3aeb7c1f398c93d1746ec2ae2c2eb75e13e0a45edfccaec67e7048c90ee56c55b47e24cfefcd3d2b860aa7de25a3b87147963c3778258f9cd86412320efcf04a498966bab743f67092ba5837012f10c5847c29697ac153af97b08bf2724ba96ceb4e0b0b8f1a5d5313ea1e32693aae3e44d2567e288a87626ef0899d5def546b7bc33edc57a5a2872c6fc102e8c7701ab5e5a7577605c37001fee77c9a07fdeac75a8c7a04bf7f0f37290118010000",
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
      "Fri, 13 Nov 2020 23:27:33 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-47-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85535d4fa34014fd2b64f6d5b6b494429b346b53716dd25217a8aed96cc830bde028652833685cd3ffbe97c1ba1a137d6266ee39f79cfbc133b9e7c5964c48c2b37d0dd5d3b73b919013028a66f87afd4ba5215cf5f90d5067ef66fbd9e86ffa389d2282372c4977650e1d29ea8a819c6cc26e5689baa495101d4cd4193a9dfec8b4adbe69f62dd3749027214f97bcb847f6ad52a59cf47a47ed6e264496032db9ec32b17b7def3d0c7a6525ee8029d97b2fd94315d9fb5cf47b2e18555c14d34d88066a09550c3bca73b4f09fb94d4edfa7ee72baeb66087ee00c2863a22e54630b533051a43cab2b9d954c9e89b6f9e640426fe9cd238389bcde1571417770626ca9a2b17a2ac1380fd62b63e19faf83d52c5aacfd389c5f78ab5977be5e6e567e685c5f788167289ae4a0b9c6d438d5371f2fa8bf05a978a1d5a3e6b9517e69d0e2e3581a024a4b6883b1638e68df35c7499a382c752d3b494d481237716c6a25261b0f61b84d80224f8b6a162d4461bb948ded811533daa7f1d0b559ec8e581a3b6c6041e2826b8d19399c90c78a2b38e3b21492b71d22d7c122f2e228d8f8f359e4e912525ae7eaac35d614f0d6a3c20211f4494d8726ca052a35ed5ef89117cce6d1e2ca6b27bc848cb2a7708f334e692e01d1b4c2e629a856628b0d23fe6ce59d21584fecf2189464f2fb99343d6f5cbc69f92b3dc201367695fe92300a16fe0f6de788b8a279ad210fed819468f9166b43d7873f88c4256db3909f1b2fb821ed5300295450b0afa789601df8f25f3b2e3e6271f551462abce3ee30d988b00ada1de2badc23dbb6ac914d34b8521f62f6c03976adc9d164841d14eaa5a276f1b1d056ac96af200ce2f87dddadc33fb06aa94878040000",
    ],
    [
      "ETag",
      "WXtfSeV1iYea7q8gqA6zfw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-47-1605310013007"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92414fc2401085ffcb782d4909a598261c00411b0111cac11842d6760ac5b65377b70221fc77672ba25113bdb433d36fb6efbdf600cf491e81074fc9eaa544b9bf58a1be37c51455996ac5b782728560016ab16272ef68bfe1dbd4dd8db6bd62b0bb1db90fd9b6dd6642856bcc04780788134c2305dee301729121af85949659beac3a0bf4be30c35930f5c7d7dc6714997e3c1f0e3bdd611f8ed67931125a2c2bfe1f6b8ba3051b7a9a628c12f3108d9642d20643ed1b9b4a64458a3545a50c514105570f5692ca4248a21a4f6a4eab5677ed66a36edbf5866db7184c29143aa19cd9f98cf581262dd2296dd925b80cc8aa64c371757de5711255464ce98f03d7a9f47d05585a9ca4b8fc1b64bd6bc19fe1033b45f09d131995b93e5383e15de7b7e338d3cfa3ae3a41ff07a134277546027fd49f059dd1c4708b93f7ee5ea39a48e220159a0cebb673d96cb9f67bac3d3251f37b3c2d4bb42014fc77dc241abc58a40a8f6fb67352667b020000",
    ],
    [
      "ETag",
      "y4tI3I0oBxMwCpFxKM6Ymw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `amount` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-48-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fd6f9b3010fd5790f74b2be50342c897147559425bb494b4045a75d3941830d42d608a4da6a8caffbec3346db36ead8404f6bd77efddf9cc137aa0598846c8a7f163498aed977be6a3062202c7b03b6577e7dfcf679177d6d994d8c13f3c76358cc76340d08ac5719a27a4c9595904848fbc652b2e5899e382b126246a76074dada71abaa6aa9aaeaa7de0719244739a3d00fb4e889c8fdaedbd762b662c4e08ce296f052c7dd96f6f3aedbc60f72410bc7d28d90615defe58f4246101169465636f09064a4e8a1549314dc0c22b33f4bf1ea66e519cb662006f68407010b03213952d4811b02ca27159c8ac68f484a4cd371f6869cecda9ab4c179eed1ead715a91d7c70ae6ca6a55105e26a2a1aca1a688266445c3751dc91f94536771011170708739e16be5e6dc744c45d9e750c6ca8932b167ca21ddb215cfb6cda5ab1c9d1c2b67cec2bb54bedd1e60c07748b8a09974ed623f2195e3e7c65aef8fb32260012eeae0aaaff6b03650877ee4f78368a01b7ea412df1ff87d03ebbe1a0cbba41bfa04034f54d9250b672c1be8dd21363a4660689aa18543550db4aedfc3badeef1a6127ea9321d17c6380760df4bba082cc28cf19a77577d18d63b9e6ca753c7b3a714d594684a183b3da5c55c45b9f028a04d00775edaa2865a0541d9565bba63399bad6b5594fc79cc438d82e1f613e229c7002685ce09408525cb0109a862e174bcbb516f6640e0c79e4977b0447a39f4faf04779bcb2e0bf946a7f3c5c4ed75a5833de41a27a5c46cea0fa4b50c40ec1aff4f33719cc92d48e3a2c0dbbf62504e4fd2ffa120f17255db7c514495da7ed541bb5f3b781a086e539d1d5d79a6738bea2d8744a42059f0f9f80058063efd29ec6f2860e18e820c17b086610d78251214a41e5a9a4abbcf6ca3dbd17524c1857817d38de1fe74aa1c554692924c3c5754df50d9a82a54f217100461d66ccb3e83e81f864686e4210500",
      "00",
    ],
    [
      "ETag",
      "CohHKHDfUG2vuaRaZUoQ9g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-48-1605310013007"
  )
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
      "50c96ec23010fd97e991444a802e8ac401aaa8454594a6d04b85900993907582edb48a50febd6353551c7bb1c76f19bde73314597d8000f6597a6a51763729ea373344a8da522bbe1aaa158203a845cacae3fa236d5fa2bcc857c918d783f0550d4ed3c984152a3e622520384392617950107c9ea11615b26db7937623cb74d71864be5c874f61c4404507032c378bc574b608a177ae6c4df12fcbb67720a77d84094aac6334291a4939c67a6e0a2a513525ba8a5a19a3022bb6442aa96d8424721971c70fae7fe7dd8e7ccff3479e77cfc29262a133aa59bb79e76ca0498b32a26fee074316483b72d5c49e5f16361dcce4db68d79cffc70d0db7fd5d38eb34aa95244ea7d004f32e211fc904d75c48cb161d8805fff273a62feffe07de68a1a3c2010000",
    ],
    [
      "ETag",
      "hTVguKRjkjPf4eT+EOs+qA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "02ff1dcf4b7282300000d0bb646d9d2282a6bb820ea0d00901acb8c90488fc14c24743e8f4ee75fa6ef07e004d53360c646c6bd6800f20e90a2ed3e591bf1b9acf14076271baaee2aabb1d535f6d0f308448af12fd3e0cbc8e67ede1705461ed8cf76a3a054e328f6ea444dbd2670631df6476536c837ca2e620cc6d0227e1b3021b593dd218dde7ef38402e26023eb38076151e28155342f253893cae5f9258b568f76cdc6b87bf82b5b48f425816b78bca3b60d1f7065c3b1b5894b358edc35d6b4a8812757769eb689787d1d9b40b0d6ed4472bd7266e3d4e73b0006ce265cf0652beb2aa06e102fccfc928397bf50d467bd683df3fa1e8c70e18010000",
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
      "Fri, 13 Nov 2020 23:27:34 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-49-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6f9b3014fd2bc8fbb8268126e425456b94d2952e212b21a9a66942c65ca85bc0149b565d95ffbe8b69ba7693da4fd8bee7dc73ee832772cb8b984c49c4d3bb1aaac74f3722224704144df1f533bbf83d087617cef6fc76f4b0e3eeb72abb4c673344f08625695e66d091a2ae18c8e976d34d2b5197b412a283893a8349c71a9a76df324dab6f9a23e449c892252f6e917dad5429a7bdde41bb9b0a9166404b2ebb4ce42fefbdfbe35e59891b604af6de4af65045f6de17fd9209461517c56cbb4103b5842a849cf20c2dfc65c6d1c9dbd45d4ef36e8ae07bce803226ea4235b630051345c2d3bad259c9f489689baf0e64e32c9d45603091d579111634872323a68a86eab104e3cc5faf0cd73b5bfbab79e0aebd70b3387756f3ee62bddcaebc8d7175eef88ea1689481e61a33e344df3cbca07e0c52f142ab07cd73a3fcdc20f7ffb134049496d006c39139a4d6d89c44493462c9b86f47890951348e4636ed47269b0c6010474091a745358b16a230ad840e93a1191ef7a9150eac3e84119b44a1358264cc8ee3119bc4647f441e2aaee094cb5248de76885cf96ee08481bff516f3c0d12524b4ced4696bac29e0b547850522e89d9af64d940b546adaed7a81e3cf1781bb73da092f21a5ec717387334e682601d1b4c2e629a85622c686116fbe724e11ac27f6fd109464faf389343d6f5cbc6af90b3dc001367695fe924de0bbde576de780d8d1acd690fbf6404ab47c8db5a1ebfd2f44e292b659c8e5d6f17f90f6c987042a28d8c7d344b00e7cf8af1d161fb1b8fa282315de7177986c445805ed0e715dee816d0fc6b64d34b852ffc66cd31a1fbad6e46832420e857aaea85d7c2cb415abe50b0883387e4f776bff07b4005e0178040000",
    ],
    [
      "ETag",
      "+cJz4TVJEUHk7wViIKrlQg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-49-1605310013007"
  )
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
      "85ffcbf85a9212ae36e10114b1a62097c28b216469a750683b7577ab2184ffee6c45346aa22fedccf49bed39a73dc23ece4270601d6f9e0b9487ab0dea8929a6a88a442bbee59429040b508b0d93fd058ed60f5e3b6a44b45f2fdcc1a2d173279d0e132ad8622ac039421463122a709e8e908914792da0a448b355d959a00fb919cefca93b1a709f5268fad1dcf3ba3daf0f27ebb2180a2d5625ff8fb5e5c9821dada718a1c42c40a32597b4c340bbc6a612699e60455121035450c2e5838da4221792a8c2934afdba526dda8d5ad5b6ab35db6e31985020744c19b3f319eb034d5a24537a6597d0644096251b8ecaeb0b8fe3b034624a77e437eba5beaf004b8be204577f83ac772bf8337c60e708be7322a522d317eace7becfe761c67fa79d46dd7efff2094e6a42e88ef0efb33bf3b1c1b6e79f6de3b685463491ca4429361d5aeb71bada6fd1eeb0d99a8f93d8e96055a1008fe3bee630d4e241285a737c4015e057b020000",
    ],
    [
      "ETag",
      "EVeNbJL8f5fokbVIGV5BIQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `id` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-50-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "9b3010fd5798f74babe50392102052d465296b91529211d2a99aa6c480a16e00536c5a4555fef79da1e9c7d6b51212d8f7debd77e7330f684bf3088d504093db8a94bbcf372c402d44044e60775545115e5c4ebf68aebddd0ecf7bc9ce14f7e33120a864719c15296973569521e1a3d5b29394ac2a70c9581b12b575b5ad0d55bdafa9aad6575503789ca4f18ce65b605f0b51f051b77bd0ee248c2529c105e59d90654ffbddbb5eb728d90d0905efbe96ec820aefbe2f7a92b2100bcaf2f16a09062a4eca35c9304dc1c233330abebe4edda138eb2400bea321c161c8aa5c485b902264794c93aaacb3a2d103aa6dbef8404b7b664f7d653a5fb9fed1066792bc39563057d6eb92f02a152d650335c534256b1a6d9a48b155be7bf30b8880836bcc09df283fcf6dcf56948d047d1a2b27cac43d555e731d5759b9aebdf495a39363e5cc9baf16cab7ab5718301d112e685e5bf671901269f7b1abcebf67290958808526b836d421d64cd50ae2c00863b3af07b14a82c00c0c1df70335b40664100504034fc8ec350be72c3723d3e81911d68dd8d207963a1c98034b330ccdec59c6c0d02cac5944b722b46fa1fb920a724a79c1386d5a8b7e7a8e6faf7d6fe54e27be5d97116368df69634e16f1d2a7802201f44e5d7b19a50c94e43939ae6f7b93a9ef5cdacd68cc4882c3ddf2168623c6292780c625ce8820e5058ba06968315f3abe3377273360d4e7bd3820381afd7a7826f8bba2eeb2a8df526b38a8f50f804b9c5635e2aef9409a8ef6fbd6ff534c3c6f7205b2b82cf1eeedf46fe6aff1f5aab1f8a487a4da61d543fbdf7b785a08ae51931dfd58d9de156ab63c129392e4e1c7a303e03af0e1dfe07035e5bf662965b880350c6ac8a548589266606956db7d64ebba65f4510d2ec5dfb1a16ae987939139644692915c3c56d45ccdba513254f127100461ce5cc7",
      "3d83e81fc5a800d11a050000",
    ],
    [
      "ETag",
      "UuddaPVC+1NEkk6H2gy8tw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-50-1605310013007"
  )
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
      "414fc2401085ffcb78b44db62268483800229254d42af1600859da695d683b75778b2184ffceece2c183072fbbb36fbe99bcb707d8aa3a833eac55f1d5a2de5f14685f5c91a0694b6bf86aa8360801a0950593f948ddf632953f75dea7f7e3f86efe78795d0f0703264cfa899584fe0172856566a0ff71805a56c863ab95f61b19b3fbc629b3f9db643a4958a82873c27c11c7c3513c8163f06bacd9fe6b64790c6043eb0473d458a7e85c349a3698da990b6864d594181a6a758a063cec1b85a6b6919a286425ec8a30ea896e271222ea0871c36049a9b48a6a6617afec0d2c595926f4cdf9e08a01ed4b8e9afb73c772d767d879c059fbbb17b9def267e1686fd13c6b6277069d317136392667dc7220ab5b0c2095fccb0fca9edfc7136b67f1fac2010000",
    ],
    [
      "ETag",
      "fBi86difO3WGFCLDNM+4nA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0bb64ad8e84099aee44a1b42828289f6e9834043518a00425e0f4ee75fa6ef09e8050caa4ccbaba6415780303817846676e3337d121cfe9329002c6c72d84bc56a39f77992642a1a7dfede16879ad9f50db7dd77c6ba107deed933f285ba8f3b93636bba482e5357858b6080dcc79a091c1d86333b25cf875e9a7aac2652547a4afd57d5f24e9324f1deecc6d2f9cde628654998fa40e9ba488d6880f398ea4bd47a78fd21a63e7277b885393aa0decfda4220d5dca638c8476f1845ddcd704e969bd2ac9a9ea4c6ddcee5034f486cbe72b30014c35d796c9ecfacaea08e309f89f67ddd0b057df64a4652df8fd03fcf3cf2b18010000",
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
      "Fri, 13 Nov 2020 23:27:36 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-51-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85535d6f9b3014fd2bc87b6d1218210991a2354a681b29211b9056d33421632ed42dc1149b545595ffbe8b69ba5695da276cdf73ee39f7836772cfcb944c49c2f38706eaa76f772221670414cdf1753d74963b3b3a1c929b5d48d3c23d5c4294cf6688e02d4bd27d55404f8aa66620a7bbb09fd7a2a9682d440f13f51cab678d4cc7b64cd3b24d738c3c0945b6e6e53db26f95aae474303869f77321f20268c5659f89fdebfbe0f07d50d5e20e989283f79203549183cf457f148251c54539db8568a09150c7b0a7bc400bff996972fe3e759fd37d3f47f08133a08c89a654ad2d4cc14499f1bca97556327d26dae69b0309bdb5b7880c268a665fc625ddc39991524563f5548171116c37c6cabfd8069b79b4dafa71b8b8f236f3fe62bbde6dfcd0b8b9f202cf50342940738d9971ae6f3e5e503f05a978a9d5a3f6b9557e69d0eae3585a024a4be882f1d81c516b62ba49968c5936b19d2433214926c9d8a17662327708c334018a3c2daa59b414a53b3127cc3693184616c443d79ac4eed01cc5f66842ed91cd5c8765e478461e6bae60c9652524ef3a446e8255e4c551b0f317f3c8d32564b429d4b233d616f0d6a3c20211f4494dc736ca052ab5ed5ef99117cc17d1eadaeb26bc869cb2a7f001679cd14202a2698dcd53506f448a0d23fe7ce32d11ac27f6f3149464fae799b43d6f5dbc69f92b3dc201b67695fe92300a56fea5b673425cd3a2d190437720155abec5dad0f5f12f227149bb2ce4d7ce0b7e93ee29800c6a28d9d7d344b00e7cf9af9d161fb1b8fa282315de7177986c45580ddd0e715dee89ed8c1cd7221a5cab0fb1f17078ea5a9ba3cd087b28d54b45dde263a19d58235f4118c4f1fbba5bc77f4de85fed78040000",
    ],
    [
      "ETag",
      "L45DU3TvvbWUSadl9vGeTg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-51-1605310013007"
  )
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
      "0002ff8d92dd4e83401085df65bca509c4961a122f50ab566bd5965ea831cd0a434b5d18dc1fb5367d776751ab5113bd8199e19be59c032bb82faa0c22b82b660f16d5726b86e6d21523d4561acdb79a2a8de0011a316352be683a6d67d727139b85c9d5f3c361a76be3dd5d26743ac75240b482bc409969886e56508912792d2569cb6ada741e9865ed86e364d41f1e715f52e6fae1643088f7063d587b9bc54c18316df87facddae3d58d0dd08735458a5e8b4d48a16989abeb3a945594b6c69b22a450d0ddc3c9829b2b550442d9eb43a412b08fdce76e0fbc1b6ef771994940a5350c5ec64ccfac0901172444fec1242065453b2e1bcb93ef2b8c81a23aeec0f93b0dde8fb0ab0b4bc9038fd1b64bd73c19fe1037b8fe03b274ab295d9508783f3f8b7e338d3cfa30ee2a4f783d08693da2049ffac374ee2b30bc7ddbe7bdf5b1ad4178a38488d2ec3c06fef74baa1ff16eb3eb9a8f93d9151163d4805ff1dc78581281752e3fa15653c64ec7b020000",
    ],
    [
      "ETag",
      "lzsoK4dZJUud6TYxqF57uA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-52-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85547f4fdb3010fd2a99f70f48a54d5afa53aa585742d7095296a630344dade35c8a471a07db8155a8df7d1787021d1b489112fbdebbf7ee7cce03b9e169447a24e4cbdb1ce4fae32f11920a014d97b83b1a7cff3daa399a9e384d80d195f487f75feffb7d44f082a5e82a4be040895c3250bdd9b4ba9422cfa814e200131d34eb074ecb6e361cdb761ab6dd469e82243ee5e90db2afb5ce54af56db6a5797422c13a019575526564ffbb5bb7a2d93e21730ad6abb92355451b5b7458f12c1a8e622edcfa668205720e7b0a23c410bcfcc28fcb49bbacae9aaba44f01d6740191379aa0b5b98828934e6cb5c9aaca4f7408ccd171f64ea9ebac3c01a4e665eb0b7a0ab82bcd8b7a8b2e673092a4f74c55a604d314f60cea34519c96eac137f72861174704d15a88575f9c5f55deb796b617de85b47d6c03bb676338c3d6be679ee34b0f68ef6ad913f999d5b9faf7630683d02a5796a8c07344ca030fdd8dbf1eb132d0854a36a199cb7ed16753a76378cc3368b3b8d6618db10869db0dda48dd066dd43388c42a0c8d34576c3a2a948c3308a68b711763b51b7c9ec46276e46512b6a4414da118dea506710b26e976c2ae45e720dc75c6542f1b2c1e4d21f07ee3cf067de7010b8a68c9862138f4b7345112f7d6a2c12416fd4b529a25ca052715a632f70fdc130185fb8e5809cc292b2f5f4164724a6890244534957a0419e89089b46ce27d371309e7883536498533fdf2214e9fd78782604ebcc74599b379906fed81b19035bc4054d7203b92b3fc82043af64b3a9fc3fcdc0f70757284da5a4ebbf62584eebb0a0ff43c2e0cdaab4b9957448a1b65dd5c9e6e7069f0ac10b556627df66ae7f45ca2d1f629090b2f7c707c126f0ee7f617b49118bd7146594c6350e2b53850893500e2d5f19bb8fec66c7765ac480a57e15735a8dede914398a8cb082543f56545e52d3a82294ab27100671d63c73509b3fdd8646a124050000",
    ],
    [
      "ETag",
      "GAXxG/1taF15eeGYrRCwJw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-52-1605310013007"
  )
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
      "8d504d4fc24010fd2fe3b54dda226a483840d3280941adc2c510b2b4435b683bdbddad0609ffddd9c5188e5e7667dfc7e4bd3dc1a16a7318c1b62aba1ed5f1a640f36a8714755f1bcd97a4562378804614ac7c5ec5ddc3a41c7c77654cb3369665de51311eb342672536024627d85558e71a461f276845836cdb6c94dbc832739416992dde93c72465a0a1dc028be57c3e99ce13387b573679f897657df6604fdb1477a8b0cdd0a6908af69899992da845236bf435f52a430d4eec8842512f8522f219f187911fde05c3411804e12008ee595853264c452d6b976f9c0d0c1951a7f4c5fd206281722357ddb9f393e15bd7c14ea18b76cd457f5c64b9f5efc2e9d1a07e51c4e934da60c125644c36b8e14246f5e84126f8979f2a73799f7f007b2de04cc2010000",
    ],
    [
      "ETag",
      "OVCq8Ah3zqhCoInCphdqog==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "000002ff1dcf4b7282300000d0bb642d8ec800d29d18444144a84cc14d26c504130163a0fc9cdebd4edf0dde0be03c274d83dac79dd4e0038c7869cdf3b92f16b61ed1ce4fcfabeec62681d3839369f8a49aa89850cef30537581a9a59bb45b0d47904e58557793832eda03696f5c37bf9746a23c3f1da535bd16e271d7e8d709b0583543686777620ddc16be27c3b57a1b207df0897c5190d3cb243f453931b1356d133ece321f53ab3a98b5bb02ec9c5e7837b84775a709854b60f6b3c2aabd265124ebb622c9789bd1aa437d8bdb4db6350a494eef72725eed384446006c82098240d62efaca65bd60cfccf513b0af2eedb044b22c1ef1f274fbb7e18010000",
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
      "Fri, 13 Nov 2020 23:27:38 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-53-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85535d6fda3014fd2b91f75a2014020109ad88861509c21642ab6a9a22c7b94edd26711a3b4c55c57fdf8d53ba5695daa7d8bee7dc73ee479ec98328123225b1481f6ba89ebeddcb989c11d034c5d7c9b2ca0e13be5ff6e5c6b90d38cff7fe219dcd10211a96a279994147c9ba62a0a6fb5d37ad645dd24aca0e26ea38834e7f643b83be6df707b63d469e828caf45f180ec3bad4b35edf54edadd54ca34035a0ad565327f7def1dce7b6525ef8169d57b2fd94315d5fb5cf47b2619d54216b3fd0e0dd40aaa08722a32b4f09f99c417ef537705cdbb29820f8201654cd6856e6c610a260b2ed2ba3259c9f499189b6f0e64e7adbd45683199d57911153487332ba19a46faa9046b196c37d6ca5f6e83cd3c5c6dfd68b7b8f236f3ee62bbde6ffc9d7573e5059ea5699c81e15a33ebc2dc7cbca07e024a8bc2a887cd73a3fcd2a0d5c7b134049456d006a3b13da27dd79ec43c1e33ee0e9c98db10c76e3c76e820b6d96408c324068a3c236a58b490c5c0e549e24c7804a3f3241a0edd61e4c68c47932476a903cc49f8901ccfc8df4a68b814aa944ab41d2237c12af4a230d8fb8b79e8991238ad337dd91a6b0a78eb51638108faa4a663131512959a76affcd00be68b7075edb5135e434ad9d3ee1167cc69a600d1b4c2e669a83632c186117fbef12e116c26f6f3145464fafb99343d6f5cbc69f92b3dc4013676b5f9925d18acfc1fc6ce09714db3da400eed819468f90e6b43d7c73f88c4256db3905f7b2fb825ed53001c2a28d8d7d344b0097cf9af9d161fb1b8fa28a334de7177986a445805ed0e0953ee89edb823d721065ce90f31b77f7eea5a93a3c9083914faa5a276f1b1d056ac56af200ce2f87dd3ade33f42c6126c78040000",
    ],
    [
      "ETag",
      "9Frlv9fUF1oM5YRffmUNvg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-53-1605310013007"
  )
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
      "0002ff8d92d16e82401045ff65fa584c302a36247dc0d6b624685530266d8c5961507461e9ee52638cffde596a6dd336695f606638b3dc7be100dbac48c08565b67aa950ee2f56a8c7a698a0aab856742b45a1102c40cd56449643d56f8f67975bcd310cd46cb77d62d5eefa9a0815af3167e01e20cd90270adce703142c475a8b05aff262517716e87d69866134f187f7d4e72231fd701a045e2fe8c3d13a2f264cb345cdff636d7eb4602396134c516211a3d1524ab1c158fbc6a66279c9b1a14425635450c3f583951455c9a4100d9a343aad46d3b13bada66d375bb6dd25908b98e94c14c44e43d2075a68c62762472ec12140d625194eebeb2b8db3a436624a7f1839ed5adf5780a4a519c7c5df20e95d33fa0c1fd82982ef1ccb4555e83375173c7abf1d47997e1e75eb45fd1f84d294d41989fc413f8cbcc1c870f393f7de5ea31a4941412a341936edf655a7ebd8efb1de081335bdc7d5b2420b62467fc743a6c14d1957787c0351db735f7b020000",
    ],
    [
      "ETag",
      "pNsE4QW+ktleSLsWwkZauw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-54-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8554eb6e9b30147e15e6fd69b55cc88d90485197a5ac434a4907a4174d5362c050b78029369db22aefbe63d3b4cdbab552a480cf773bc7360fe896e6111aa38026771529371f6f58801a88089cc0aa7b8aa33bef7893e65df1dbfd145dea97f8723a9900824a16c759919226675519123e5e7aada46455814bc69a20d41cf49b1d431ff43abadee9e9fa10789ca4f19ce6b7c0be16a2e0e3767be7dd4a184b52820bca5b21cb9ed6dbf7dd7651b21b120adedeb76c830b6fbf6d7a94b2100bcaf2c9d283001527e58a6498a610e19919059ff7a55b1467ad04c0f73424380c59950b190b244296c734a94aa58ac60f48c57cf1803c6b6ecd7c6db6583afec11a6792bc3ed430d756ab92f02a150d6d0d3dc534252b1aadeb4a71ab7d7517a7508104d79813bed62ebe59aea53d2fadb50f13ed489b3ac7dabe82ed684bc7b13c5f3b383ad44edcc5f24cfb72b58781e811e182e62ab88f8394c8d08fb3b55fefa8246001ae757135d40ddc31f5511007c330367b8320d6491098c170807b811e8efaa41f0504034f4875c5c239cb7b84f4877d1307663cecea201019fa08839a6904a6697403b38389191a68db40bf4a2ac831e505e3b41e30ba706ddf5af9eed2994d7d4bb5116318e2711d4e36f132a7802601f4465f5b59a50c9ce46ed98e6fb9d3996f9f5bf501999304871bef0e8e488c534e008d4b9c1141ca5316c1d0d0d9c2b37d7be14ce7c050bb7eb6437034fef1f04cf037859ab250ffc8f35ddb3951017688739c560a725f3f205c4056b4dd36fe2f3375dde91558e3b2c49bbf6ad08ed197f47f5828bc7aab63ee2c3b48baeddeba68fb730bbf06820b55aba3ef4bcbbd42f5924b6252923c7cfff8005815defd2eec2e2960e19a820d17f00e8735e4d2242c497d6869a6e23eb20723636020052ec5abda7034d8ed8ed4908a2423b978eca8bea46a50b254f12790fcf4c165521bb5fd03c544f15a24050000",
    ],
    [
      "ETag",
      "RMadqSDyln2tzR+dX0XaXA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-54-1605310013007"
  )
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
      "414fc2401085ffcb78b44d5a11d0261cc4102436440a1c8c216429d35a683b75778ba94dff3bb38b311cbdeccebef966f2deb670ccca3d04b0cbd2af1a657393a25e98224255e75af15551a9101c402d5226df07e1c3ebe372353c46b7cb9f649aca28192e46232654fc898580a08524c37caf20f868a11405f2d8762bed46c674531965365f4da693888582f64698afc3f0691c4ea073aec6aae3bf46369d0307da4598a0c43246e3a29274c058cf4c40258a2a4757512d63546061db4825d59590442e2b6effdef5075ebfe77b9edff3bc218339c542675432bb5eb237d0a4451ed137e7833b06a42d396a62cf13cb7d9be1640163edba37f8ebf9a6b7f95d386e34aa3749ec4ea131e65d4c3e9331ae399096353a100bfee5974c5fdedd19aedc4413c2010000",
    ],
    [
      "ETag",
      "Y6L8K9ST7kR+SzfGgrRf7Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "51",
      "6e",
      "82",
      "30",
      "00",
      "00",
      "d0bbf45b0dab20747f0ac1a980a50e147f1a688b62d1410b13b2ecee337b37783f20674c684dbb2f291ee01d8c39443336db35c6ca8af9dde6f2015db2e8e3b65c8b6ba0c6a59f91a636a108fb0849b3ae6dc98dba521bc432673c6fdaf5ed79a37be9c5e17d7a96d4bb9c9efbe6a989555ce6e8804988182f177cf84cdc032a317eeb7a2977d9d519131e8441caa42b9c429a4688b949b7f9b24c96c6bab07b1f5e0a3668671a7ba4100879d221d7242390b9443f028561674bcc8fd1b1f5dbb4da7bdfdbe86324c62d5d45e609321d830910435329a169f5cace2d8426e07f4ebbb111affe4ae44a28f0fb07af62584118010000",
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
      "Fri, 13 Nov 2020 23:27:40 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-55-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85535d6f9b3014fd2bc87b6d0209494823456b94d0355b423620ada66942365ca85bc0149b4e5195ffbe8b69ba5695d6276cdf73ee39f7832772cfcb84cc08e3d94303f5e1d39d60e48c80a219be6e03f7eb61e01ec49027eec3b75bf3a658e5d97c8e08deb2242daa1c7a5234750c72b60ffa592d9a8ad642f430516f3cee0d26d6d81e58d6c0b62c077912f274c3cb7b64df2a55c999699eb4fb9910590eb4e2b21f8be2e5dd7c1c9a552dee2056d27c2b69a28a34ff2ffa391731555c94f37d80061a09750405e5395af8c74cd8c5dbd47d4e8b7e86e0471e038d63d194aab585296251a63c6b6a9d95cc9e88b6f9ea400277e32e43231679539451490b383312aa68a40e151897fe6e6bacbdcb9dbf5d84eb9d1705cb2b77bbe82f779bfdd60b8c9b2bd7770d45590e9a6bcc8d0b7df3f082fa0948c54bad1eb6cfadf27383d6efc7d212505a42178c1c6b420753eb9ca5cc89d3a93d66a9058c4d9933a636b3e2f3118c120614795a54b368294a36613004b0a3c41adad168c4ec68ea0cac284d86d6287192a99550723c237f6aae60c5652524ef3a446efc75e846a1bff7968bd0d525a4b4c9d5aa33d616f0daa3c20211f49f9a8e6d940b546adbbdf642d75f2cc3f5b5db4d7803198d0fc103ce38a5b90444d31a9ba7a0de8a041b46bcc5d65d21584fecfb2928c9ecd713697bdeba78d5f2177a88036ced2afd2541e8afbd2fdace09714df346431ebb03a9d0f22dd686ae8fbf11894bda65213ff6aeff93744f3ea45043197f3c4d04ebc087ffda69f1118bab8f3252e11d772796ad485c43b7435c977b624faca133251a5cab7731dbb14f5d6b73b419a180523d57d42d3e16da8935f20584411cbfa7bb75fc0b2d93d40478040000",
    ],
    [
      "ETag",
      "MSEJy1Eyo2idEqKh/WmDlg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-55-1605310013007"
  )
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
      "bc2da10d16b409178888447e84d62b63c8d24e4b61bb5b77b71a427877672ba25113bd6967a6df6ccf39ed1eb6b9482080559e3d57a87667199ab92d16a82b6e34dd4a29348203685846e44cdc859771536cbdd59c355b5b3ef4fb83acdb2542c76b2c18047b4873e48986e0710f8215486bb1e455219675e780d9957618468bd174487d2113db4f1fc6e3ded5780007e7b49830c39635ff8fb5a783031bb95a608a0a458c564ba9e4066333b236352b4a8e0d2d2b15a3861aae1f644a562553523668d2f0fd86d776fd96e7ba5ecb753b04721933934b41ec4348fac048c3f842be924b6813a0ea920ca7f5f585c679521bb1e5681ab5cf6b7d5f019296e61c977f83a477cde8337c60c708be73ac90953027ea663cebfd761c65fa79d4752f1afc20b4a1a44e48349a0cc2a837b9b7dcd3d1fbd5cea0be579282d46833f4dcf30bbfd376df63ed4b1b35bd2730aa420762467fc76d6e204819d7787803fdd9f3bd7b020000",
    ],
    [
      "ETag",
      "OnKS9c/nk1bQa/3klG5CEg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `date` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-56-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85547f4fa34010fd2adcde3f9af40794d2d6268dd76b398fa452a554632e9776810157814576d134a6dffd06b0da9e779a90c0eebcf7e6cdec2ccfe49ea50119128f450f05e49baf77dc230d029246b8ab9f0d1e9eacf9e5ad988a4e32cdac486ecc683442042b598226590c4dc18bdc07315c2e5a51ce8b8ce69c3751a869f49a5a4f35744d55355d55fbc81310873396de23fb56ca4c0cdbed5dee56c4791403cd9868f93c79dd6f3f76da59ceefc097a27d98b28d5944fbe3a4a731f7a9643c1d2d1768a01090af20a12c460b6fccc0fb7628dd62346945087e643e50dfe7452a4b5b28e1f33464519157aa64f84c2a9b7b1f6461cecc89ab4ce64bdb3d5ad3a424af8f152a94d52a0751c4b2a1acb1a690c5b062c1ba8e64f7ca0f677e8e1174704b0588b572fdd3744c45590754c25af932524e95b13d550ed996ad2c6ddb5cb8cad1e9b172e6cc9717caf79b030cda0e40489656a65deac5501a7ee9abf5fe344b029568a20eaefa6a8f6a03f5c40bbdbe1f0e74c30b55f0bc81d737a8eea9fe4917ba81071479b254af5834e5696760184168e8fd1308541d744df734c35383be1f40b7eb6b7a081d951a1ad936c853ce244c99c8b8607573c9b563b9e6ca7596f664ec9a551921c5064e6b736511fb3e251689a00feada9651c63153795296ed9ace78e25a57663d1c3388a8bf593ce07884341680689ad30424e4e73cc0a6918bf9c272adb93d9e21a33af18b1d4290e1afe73782bbc9aa2ecbea4da66501db3dc12b1a1715e0b1fe201db5a336d54e5333c876dbf8bfd2d871c637989de639ddfc15c38a7add92fe8f3c15be5ad54e7779cbe6efb920dbdf5b7c1a04ef53ad4e2e97a67343ea2d0742c821f53f9f200457814f7f0bbb3b8a58bca59846485ce3bcfaa24ce2e750cf2d4b2abb2fec9ed619f44805cee5bb587730d81d50a9512a4202a97ca9a8bea355a3ca50215e4118c471b32dfb0ca37f004f1d1f9b23050000",
    ],
    [
      "ETag",
      "3G8qwIOQhsDs2mDpIgtyEg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-56-1605310013007"
  )
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
      "82",
      "40",
      "10",
      "85",
      "ffcbf40a0968d186c48336a49a52a3b4264d1a635618280a0cdd5d34c6f0df3bbbf6d0430fbdeccebef966f2de5ee158361984b02f8baf0ee5e5ae40bd364582aaabb4e2aba5462138805a144c9e1f5ed6635f56cfe3fb5591cfbaf9fb205b4f27132654fa89b580f00a798955a620fcb842236ae4b1dd4eda8d8ce94b6b94c5f22d7a8a12166aca8cb0dcc4f1741647d03bbfc6dae3bf46b6bd0307da2798a3c42645e3a29574c0542f4c4025eab64257512753546061db282475ad90442e2b6e3072fd91170c7dcff3879e3766b0a254e8921a6637afec0d3469512574e67c306040da92a3e6f63cb11cd80c270b186b7ff77cd3dbfe2c9c5d34aa952476a7d018f36e261fc918d71c48cb0e1d4805fff2bcd4b777ff0d1544f72bc2010000",
    ],
    [
      "ETag",
      "w8MQ71rlK74PgfBuHX2dQA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "cb7282301400d07fc95a1c1450d21d511e36be400171c300bd19d116088114ecf4dfebf4fcc1f9415951801069573fa0426f68cce6785a4c69a312c3875d77776a38f251de621ae6d7b1be277ee906d1c25ef6f8633c550258697aa0ebd1a28b970f160fd65ea349ad3e5d8fd8abac3a98cd6391accc350b0f4cdd4a2ef9320dc7e85aa995f4f1c04835cc67e553f5435d985f1aa65132e0200ef1e6dc2bd01287df89d65af8bc57a46d7d071bda285497063d1ef97c2d4efeed539db9bcd7ccd84858ffeee4bb8465ca05673838b9646bcca4979f630f2e169a20189ab2059196afac66603c41fff3b41b1b78f509642db4e8f70febc2a33618010000",
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
      "Fri, 13 Nov 2020 23:27:41 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-57-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85536b6fda3014fd2b91f7b540121ea148684590ae4810b6105aadd314d9e626750971163b545dc57fdf8d53ba5695da4fb17dcfb9e7dc479ec84ee45b32224ca47f2a281fbfdc4b46ce08689ae2ab527fedf0e0064b71fbf0b0dbdd3aa598d1743c4684a8598aee8b0c5a4a56250735daacdb6929ab829652b63051abefb59c81ddef3ab6ed746ddb439e822c59887c87ec3bad0b35ea744edaed54ca34035a08d5e672fff2de39b89da294f7c0b5eabc95eca08aea7c2cfa35939c6a21f3f1668d062a05650c7b2a32b4f09fb965176f53b705ddb753041f0407cab9ac725ddbc2145ce68948abd26425a327626cbe3a90b5bff0a791c56556edf338a77b38b3b654d3583f16605d86aba5350f2e57e17212cd5741bc9e5ef9cb497bba5a6c96c1dabab9f243dfd2946560b8d6d8ba30b7002fa8bf05a5456ed4a3fab9567e6ed0fcfd586a024a2b6882b1670fa833b4cf59c23c9e0cbb7d96d8c0d890797dda65363fef416fcb8022cf881a16cdb1e6e1c071bd5e2ff6f8a01ff75cb71f0fd9a017bb6ce83994614e0fc8f18c3c9442c34ca8422ad17488dc84f3c88fa370134c27916f4a486895e95963ac2ee0b5478d0522e8839a8e75544854aadb3d0f223f9c4ca3f9b5df4c780129e58feb3f38e384660a104d4b6c9e867229b7d830124c96fe0cc16662df4f414546bf9e48ddf3dac5ab96bfd0231c606d579b2f5947e13cf866ec9c10d734ab0ce4d01c488196efb036747dfc8d485cd2260bf9b1f1c39fa4790a21811272fef934116c029ffe6ba7c5472cae3eca288d77dc1dae6a115e42b343c2947b620f5cbbdb25065cea7731c73d3f75adce5167843de4fab9a266f1b1d046ac522f200ce2f803d3ade33f6297be3778040000",
    ],
    [
      "ETag",
      "ssz0Rv2NMiZwwkkZ1riDag==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-57-1605310013007"
  )
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
      "4e83401085df65bc94469ab6b421e90555b424fd136862629a660b03a5028bbb8ba669faeece62ad464df40666866f96730e1ce0292b63b06193a5cf358afd458aea5e173eca3a57926e152f258201a8584ae4e57c1f9845e0ca125d6b5c3dc483ed957f3f1c1221a32d160cec032419e6b104fbf100252b90d6229ed745b96e3a03d4bed2c320f4bdd91df5058f753f5b4e26ce68e2c2d1382fc64cb175c3ff636d753460c7373e2628b08c506ba904df61a43c6d53b2a2cab125792d2294d0c0cd8354f0ba6282f3164d5abd7eab6d99bd4edb34db1dd3ec1398f388a98c97c42e03d2078a2b96fbfc955c824580684a329c34d7171a6771634497de2cb4ba8dbeaf00494bb21cd77f83a477cbe8337c60a708be73ace075a9ced4ed64eefc761c65fa79d48d13ba3f08a928a933127a5337089de94273ab93f7d15ea15c084e414ad419b6cdeea0d7b7ccf758afb98e9ade632b51a30111a3bf639c29b013964b3cbe01e19844e17b020000",
    ],
    [
      "ETag",
      "+OyS0mSEsneE6HpXd8h/RQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `stamp` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-58-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "db3010fd5732ef17d0fae1244dbf24c43ac858a63665690a82696aedc4c90c495c6c8709a1feefbb241406db40aad4c4efbdbb77e7bbdca36b5ec4688c284f6f4a26efde5f098a5a886992c2e9d9f4f22bb1ae6ee24f3399eb0fbfdcebf4c44f0f0e80c12b9522f926636d254a1931355e2e3aa914e5864821da10a8ed0cdb661f3bb689b169633c009d625932e5c535a87f6abd51e36e7797bb930a91668c6cb8ea44227f3cefde5add8d14572cd2aafb3c6517b2a8eeeb490f331111cd4571b05c80815231b96239e119587852c6f4e3f3d01d4ef24e0ae45b1e311245a22c74650b4244a248785aca3a2a1adfa3dae61f0f68e14edda3d0389a2ffd706f4df24abcde378832562bc95499e996b1869a129eb1158fd70db2b9363e07f31920e0e027514cad8df32f6ee01ac65a6970b736de1d1887c6c43f369ecb3ddf58fabebb088dbdc37de324982f4f8d4f17cf38e03b664af3a2761d129ab1caf14363bdbfafb312100d2e1a7035c07d620ef1882674102543dba10966940ee9c02136c5d1a8c77a31650474ba8a5eab48218a38ee99ce603430c9a8378cc9d0eed391497bd8193af690dad48a4d3a481c82b62df44b72cd8eb9da08c59beea2f3c00bdd55182cfda349e8d66524043a78dc98ab8af8d3a7862281f44a5ddb0ae502325557e5f9a11b4c8e42efcc6da663ca5212dd2d6e603e129229066c2249ce3493331143d3d0e97ce185dedc9f4c41515ff9e98ea1d0f8fbfd9320bcdbd45dd6f53f0abd19dcd164765a7bd891ce4856d6acdbe60159d8c26d6cb54d2734adb1698fcd5e07637c89b6dbd6ff834f82607201868894e4ee050645f67b95fc1f596b7efdd698dfb9305195edd113dafed8c2af8560c79ae8e8dbd20d2e507314b0844956446f0f15906be0cd4fc56e6f810b9b0b6960073487118e54952492ac19659ed7761f",
      "d47d6b34a83f349a48fd12b32d07efeeac8a514564392bf44345cdded68daaa0523d92008409f43dff04d0dfb0ed9ae737050000",
    ],
    [
      "ETag",
      "VLZJa2jqdBMrmt+wEkgGNg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-58-1605310013007"
  )
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
      "c2",
      "40",
      "10",
      "c5",
      "bf",
      "cb786d636b5325241cc034da0441aa9c0c214b3bad85b653f70fa4217c7767170f1e3c78d99d7df39bc97b7b8643dd1530865d5d7d1994c34d857a658b0c9569b4e2aba74e2178805a544c26a23e0de94a24a68956cbc3ede8b4342fd3c98409957f622b607c86b2c6a65030fe3843275ae4b1ed56ba8d8ce9a1b74aba784f9e928c85960a2b2cd6f3f974364fe0e2fd1aeb0fff1ad95c3cd8d32ec3122576395a17bda43de63ab5019568fb067d4546e6a8c0c1ae514932bd90443e2b7e3cf2c3fb208ec22008a3207860b0a15ce89a3a66d76fec0d3469d16474e27c70c7807425472ddd79643976198e0eb0d6feee85b6b7f959381b34aa5749ec4ea135165c4d3e9235ae399096063dc805fff273adafefcb37ea694b21c2010000",
    ],
    [
      "ETag",
      "EaiwyIQaEul3QOk/8wOuMA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "00000002ff1dcfd17643300000d07fc973f5a80ab5379c92b52b42c7f4a58748a3b48aa4869dfdfb7a76ffe0fe808c10caf9593c6ada803730658ab124cb7d2b5b101343461d3ba98eebc4c7ad1328a3a9e822dac9029e56ab2b448f3dd3a07909356c33d62a350a88e40b1d4778308bfb7ad87fc5699574f55c09655bf204357178330299f4b70eaf5394e43692a83ae4a35d5d7057701149ddccf2d253a1cc3f9fd0b0ca7213ec46fbf81c9290bb7614e6fe5c95ca41765d1878e9458dda54877ef27dd758a9e9356a02b56abd89e4c503cf5961c61f874623efdea6666001e8d85e7bcacfd757760d0d6301fee76731b5f4d5b768d6d31efcfe011062f5f918010000",
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
      "Fri, 13 Nov 2020 23:27:43 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-59-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85535d6fa24014fd2b64f671ab62414513b33596b6268abb886d369b0d19860b9d0a0c65061bd3f8dff732d46e9b26ed133373cfb9e7dc0f9ec98e1731999088a78f3554876f0f22226704144df1751767d769be3b7f0ad67e7258d595f7dd0ad2e91411bc61499a971974a4a82b0672b2dd74d34ad425ad84e860a2ce60dce90fcd81d537cdbe659a23e449c892252f76c8be57aa94935eefa4dd4d854833a025975d26f2d7f7defebc5756e2019892bdf7923d5491bdcf457f648251c54531dd6ed0402da10a21a73c430bff997174f13e7597d3bc9b2278cf1950c6445da8c616a660a248785a573a2b993c136df3cd816cdca53b0f0c26b23a2fc282e67066c454d1501d4a30aefcf5ca5878576b7f350b166b2fdccc6fdcd5ac3b5f2fb72b6f63dcddb8be6b281a65a0b9c6d4b8d0370f2fa81f8354bcd0ea41f3dc28bf3468f1712c0d01a525b4c170640e69df31c751128d58e258832831218a9c6834a05664b2b10d761c01459e16d52c5a88c2a1311dc5360dcf13a0a11d5327a4d620092ddba6b1358c2c870dc8f18c3c555cc12597a590bced10b9f317811b06fed69bcf02579790d03a5397adb1a680b71e151688a04f6a3a36512e50a969f7c20b5c7f360f16b76e3be125a4941d368f38e3846612104d2b6c9e826a25626c18f1662bf712c17a623f4f4149267f9e49d3f3c6c59b96bfd2031c606357e92fd904fec2bbd6764e885b9ad51ab26f0fa444cbf7581bba3efe45242e699b85fcdabafe6fd23ef990400505fb7a9a08d6812fffb5d3e22316571f65a4c23bee0e938d08aba0dd21aecb3db187d6c8b4890657ea43cce98f4f5d6b723419218742bd54d42e3e16da8ad5f21584411cbfa7bb75fc0779c0993a78040000",
    ],
    [
      "ETag",
      "kdlGgmk2wTORfyMurN+3Tg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-59-1605310013007"
  )
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
      "02ff8d92dd4e83401085df65bc141248ff94a41754ab36a1b4521a634cd36c61a054607177a9699abebbb358ab5113bd8199e19be59c037b78ceca181c5865e94b8d627796a2bad74580b2ce95a45bc54b8960002a966a52f88f2cdc3e94d359e7dc5776d65e4d3cb7df2742466b2c18387b4832cc6309ced31e4a5620ad453caf8b72d97406a85da587b33018f9b7d4173cd6bd3ff73c77e00de1609c1663a6d8b2e1ffb1b63818b0e1ab0013145846a8b554826f3052236d53b2a2cad194bc16114a68e0e6412a785d31c1b94913b37369da5dabd3b22dcb6e59568fc09c474c65bc24763e237da0b86279c05fc9257409104d498693e6baa5711637467439f2c36ebbd1f71520694996e3f26f90f4ae197d860fec18c1778e15bc2ed589baf126ee6fc751a69f475dbbe1f0072115257542c2d178380bddf154738ba3f7c14ea19c0a4e414ad419da56fba2d3eb5aefb15e711d35bdc751a2460322467fc75da6c049582ef1f006791368fb7b020000",
    ],
    [
      "ETag",
      "brNYaTvWnPS5+Nt1i4bOLA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `amount` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-60-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "7f4fdb3010fd2a99f70f48a54dda26fd2121d69594559414d2940e4d53eb2497d490c62576983ad4efbe8b43818e0da448897defdd7b773ee791dcb134245de2b3f83e876cf3f996fba44240d2187793c16cf4fdeada395f9e87ee0c96e6ddefc6203e3e46042b5882aed6091c099e670188ee74528d339eaf69c6f911263ab2f423c3d2cd86a1eb4643d75bc81390442396de217b29e55a746bb59d7635e63c4e80ae99a8067cf5bc5f7ba8d7d619bf85408adabe640d5544ed7dd193840754329e1e4f2768201790cd61455982165e98a1ff653f7595d1553546f0030b800601cf5359d8c214014f2316e799ca4aba8f44d97cf54126f6c8ee7b5a7f3c75bc83055d15e4c5a14685369f6720f24456b405d614b104e62c5c9491f59d3670c7171841074b2a402cb4d937dbb5356d9743fb74ac9d683de754dbe70f1d6dea38f6c4d30e4e0eb533773cbdd4bedeec61d0780842b254d9f6a89f4061f9a9b3c3b7e75910a8441b6570ded22d6ab4f58e1ff9ad206a374c3fd2c1f7db7ecba40d5f0f3a4d68863e50e4c922bb62d194a7165896deeeb49a7543af47265826a54118586d83b6c130c00f7db31336db645b21bf3226e194893517ac6c2f99b943cf9e7beed4e9f73c5b9511516ce16969ae28e2b54f894522e89dbab6459471542ace6ae878b6dbeb7bc36bbb1c8f11c434d84cee7140229a084034cde80a2464173cc4a691cbf164e80dc74e6f840c75e6973b8420dd1f8f2f046fb3565d96ea4d06a371cfb39acac10e724d935c611eca0f62544d446c2bff4fd373ddde0d4ad32ca39bbf62588ea5e8ff505078b52a6d3e2b92426db7aa93edcf2d3e1582d7a9cc4eaea6b67b43ca2d1722c8200d3e1e1f04abc0877f85dd15452c5e52941112d738ac812844820ccaa1652b65f7896d359b6d93287026dfc4ac7a67773a458e2223ac20954f1595575435aa08e5e21984419c3567e89c61f40f13450c3f22050000",
    ],
    [
      "ETag",
      "lFWLXQVNKhKdRWeh5kz3Fg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-60-1605310013007"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d904f4fc24010c5bfcb78b44db6f24742c2414ca328102d72d110b26c875a683b75778b3684efeeece2c183072fbbb36f7e33796f8fb0cfab1486b0c9b38f06757b91a17d764582a629ace1aba6ca20048056664c0e660faafbd8be5ececc975e26bd4935d88cb3d18809a3deb194303cc236c72235307c3b42254be4b1f55afb8d8cd9b676ca64fe12dfc5090b25a54e982fa7d39bf1348653f06bacdeff6b64750a60479b04b7a8b152e85cd49a76a8ecc40534b2ac0b0c0d355aa1010ffb46a6a9a9a5260a5909fb228cfaa2d78984883a425c3358909236a78ad9e582bd81252b8b843e391f5c31a07dc951b7fe3cb0dcf5190e1e70d6feee45aeb7fa59386e2d9a274deccea03326ce266fc919b71cc8ea060350927ff93eb7e7f7e91b4c761489c2010000",
    ],
    [
      "ETag",
      "8MJc4KyZ+MsxrUR5In8bBg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "64",
      "2d8e42a9a63bb429a0d0e1a340bbc9a49960954f42920ad1e9ddebf4dde0dd01a1942985356f580f5e8021369cd3f95e2c366e4aadac4a8ca8d213ed2244d63abb5e4f1ab5df9e576c4bdf6e334f91be605b62c2cf3828254d5cc4dfeaa4eab123affe78d25f7bc1ecb039dbbd19aa14611625e2d60594d8751b38f52b5753d015ab6e10efe9b82bf5c12d97c1f46425831ca84b905fa9642f8738826a870ec8cb7f5aabe068e387f9cdca3bc751ebf0233ad6e3925f86c52587a6c9204f9582cf587b716cea156ea6581d19bf8c6006d824ce92297c7e641d17c219f89f636d047bf4378c4826c1ef1f33f3de3718010000",
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
      "Fri, 13 Nov 2020 23:27:44 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-61-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fbd82690007949d11aa5748994908d9056d33421632ed41dc1149bac5595ffbe8b69ba5695da4fd8bee7dc73ee8327f287170999909867f735548f5fee444cce09289ae1eb4352f8ebfbd160119e1d16e3ab33c7361fca6c3a45046f5892eecb1c3a52d4150339d96dbb5925ea92564274305167d0ebf406966bf72cab675bd6107912f274c58b3fc8be55aa9413d33c69773321b21c68c9659789fdcbbb79e89b6525ee802969be953451459a1f8b7ecd05a38a8b62badba2815a4215c19ef21c2dfc6726f1c5dbd45d4ef7dd0cc107ce803226ea4235b630051345cab3bad259c9e489689baf0e64ebadbc79683091d7fb222ae81ece8d842a1aa9c7128cab60b33696fed52658cfc2e5c68fb6f385b79e75e79bd56eed6f8d9b85177886a2710e9a6b4c8d0b7df3f182fa0948c50bad1e36cf8df2738396efc7d210505a421b8c86d680f646d6384ee3214b47b61ba716c4f1281ebad48e2d3676c04962a0c8d3a29a450b510c5d8b26cc1d44230676e4d8f6308a478e13312719f4d99839b49f92e339f95b7105975c9642f2b643e42658865e14063b7f3e0b3d5d424aeb5c5db6c69a025e7b545820823ea8e9d844b940a5a6dd4b3ff482d93c5c5e7bed84579051f6b8bdc719a7349780685a61f314546b9160c3883f5b7b9708d613fb7e0a4a32f9f5449a9e372e5eb5fc851ee2001bbb4a7fc9360c96fe376de784b8a679ad2187f6404ab47c8bb5a1ebe36f44e292b659c88f9d17fc24ed5300295450b0cfa789601df8f45f3b2d3e6271f551462abce3ee30d988b00ada1de2badc137be05a23976870a5dec5faae73ea5a93a3c9087b28d47345",
      "ede263a1ad582d5f4018c4f1fbba5bc77f9e9a934c78040000",
    ],
    [
      "ETag",
      "xdnNMq86HT+vH9F+43/xpg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-61-1605310013007"
  )
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
      "0002ff8d92614f82501486ffcbe963b8c1544c363f6891b1a929e25a6bce5de1801870e9de4be59cffbd73c9ac555b7d81730ecfb9bcef0b7b784c8b081c58a7c95385627796a09ae9c24759654ad2ade485443000154b889c0e4dbf3b9ddce7eab5abce5d4fce767762d6eb1121c30de60c9c3dc429669104e7610f05cb91d6429e5579b1aa3b03d4aed4c379e07b9321f5398f743f598c46fdc1c88583715a8c9862ab9affc7daf260c096af7d8c516011a2d6520abec55079daa66479996143f24a8428a186eb0789e055c904e70d9a346cab61d966bb6999a6d534cd0e81190f994a7941ec624efa4071c5329fbf904bb00910754986e3fafa4ce334aa8de8d29b0476abd6f7152069719ae1ea6f90f46e187d860fec18c1778ee5bc2ad489ba1eddf67f3b8e32fd3ceaaa1fb83f08a928a913127863771ef4c753cd2d8fde073b85722a38052951676899ad8b76c736df63bde43a6a7a8fa3448506848cfe8e9b548113b34ce2e10d8d8f1a7a7b020000",
    ],
    [
      "ETag",
      "PG0R9PNYmtx9t+EIsQyWrQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`id`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-62-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ffc554614fdb3010fd2b962704686dd302ed4625c43ac8b6686ddaa509a89b50e3264e304de2623b952ad4ffbeb34360dd18fb3829527cbe77ef3ddf3979c04b56c4b88f172cbd2fa9d8bcb9e30bdcc05491147697b7f1f764e4bc5d0f06d34ee0ae47c9e9da4bcfce00c1749524f92aa34dc94b1151d90fa6ad54f0724504e74d206af68e9a9d5ebb7bdc69b73bc7edf63ba893344b86ac5842f5ad522bd9b7ac5abb95729e6694ac986c453c7fdab7d647d64af03b1a2969ed4a5aa022add745cf331e11c57871164cc14029a998d39cb00c2c3c57c68b0fbbd42d46f2560ae0358b2889225e164adb028a8817094b4b615871ff011b9bbf2cf0d41eda173eba1807ae7f10925c1787878848349f0b2acb4c355008674a5846e72c0eabcc6a893e79e31164c0c12d915486e8fa8bedd9080dc7d7b6771002f4100d9daf363a4703f712ed92382e0a5cd79efae8e0fc107df6c6c1047d9ced60c07d4c1302062e890205a55dc7d5d2d12355542a003df6dbf973ca78abb38c0ba6f4491dd7b7bdc185ef5cd95573873425d1667a0fed4d482629a089203955548c784ca164329e3abe33760743a8301d9bd40889fb3f1e9e0bfccd8a6a83cabcb556efc4e8d7802b929506b1ae1678afd3ddc3db6de3ef2403cf1bcc40980841362f0bbca860f026aa4cd68a1dacd5eae8086f6fb6f034305cc58a1d7f0b6c6f86ab2d8f2654d0223294af34d9804de29f5f547dbd010b171c64a482582a16492d12096ad23ecb8dddc7ea5ef7b4fb1e1bb050bfe77aedf6b1fe0b14f18b99478dd2f05321b8f0cc9dd621a849e38515d013f84b34704ea524a9a6090a3889a464915164068f9efa8cc210b102e941a0d09f4decb91946d8401f490c19d53b41a6c97da4675caff775b0af1d191fd568fe93879baa2d5ae472ecda708f7e02802766555f050000",
    ],
    [
      "ETag",
      "khdZfMI+vAAS1UNvMf9vRg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "4b",
      "72",
      "82",
      "300000d0bb646d1d0a05a13ba2a0a210a063c16c984822201f231f81747af73a7d37783f80a429ebbaa4bf97ac019f6026b2b14c97072e4135a0586bd3caecee8142e5382fcaaa3907dfdbf88e2544edccbdd42a12b9a76e783d22767a0c5f47c5367b6b1f9954cac73e8936bc1b1332077a93dd043b361f275147d52493c7ca5cf38b1dc6bcc5f25b08ada1f75d8f955aaf3db668ff9c24a11d9c5d5dbbe5402d89ad9aa8cc111efd61ffae2337a0b7cec9c3b5af607842ba655ecff849bcab73b677d0f00ab1f105ad8cc61399988efed3cb088c47b0006ce245cbbaa4786515d53016e07f9ef43367af3e64a4652df8fd036e500d0618010000",
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
      "Fri, 13 Nov 2020 23:27:46 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-63-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "9b3014fd2bc8fbda262484bca4688d52ba664ac80aa4d5344dc83617ea0e30c5a65355e5bfef629aae55a5f613b6ef39f79cfbe089fc116542e68489ecbe81faf1cb9d64e48480a619be4e9b0d0bd9fabeb85c85799e36ec3bcfebabc50211a265295a54399c2ad9d41cd47c1ff6b25a3615ada53cc544a763e77430b65d6760db03c7b627c85390a71b51fe41f6add6959af7fb47ed5e26659603ad84ea7159bcbcf71f86fdaa9677c0b5eabf95eca38aea7f2cfa35979c6a21cbc53e44038d823a86828a1c2dfc6726ecec6dea9ea0452f43f083e04039974da95b5b9882cb321559539bac64fe448ccd5707127a1b6f15595ce64d51c6252de0c44aa8a6b17eacc0ba08765b6bed5fec82ed325aeffc385c5d7adb656fb5dbecb77e68dd5c7a816769ca72305c6b619d999b8f17d44f4069511af5a87d6e959f1bb47e3f969680d20aba603cb1c77430b5672c65139e4e1d97a53630366513973acce6b3118c1206147946d4b06829cb643a85c41da4f1c0759d7834642c9ecd264e6c27c351ead2a13b86841c4ec8df5a683817aa924a741d2237c13af2e228d8fbab65e4991252dae4fabc33d616f0daa3c60211f4414d87362a242ab5ed5efb91172c57d1fadaeb26bc818cf2c7f01e679cd25c01a2698dcdd3506f65820d23fe72eb9d23d84cecc731a8c8fcd713697bdeba78d5f2177a84036ced6af3256114acfd6fc6ce11714df3c6401eba03a9d0f22dd686ae0fbf11894bda6521577b2ff849baa70052a8a1e49f4f13c126f0e9bf765c7cc4e2eaa38cd278c7dde1aa15e135743b244cb947f678ec0c6d62c0b57e171bb9e363d7da1c6d4628a0d4cf15758b8f8576628d7a016110c7ef9b6e1dfe01489080cc78040000",
    ],
    [
      "ETag",
      "8uLbSbIqmHCSllfubJclrQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-63-1605310013007"
  )
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
      "92d14ec2401045ff657cb4242540314d780041c540c1528289316469a7a5d0eed6ddad8410feddd98a68d4445fda99e999edbdb73dc036e511b8b04a939712e5fe2241fd600a1f55996945b742708560016a9610e9edf8767d99b43cae1679bf35b99f3fda8b5da743840ad79833700f10a798450adca703709623ad85222b73beac3a0bf4be30c359e00fbd5bea731199de9b8f46ddde680047ebbc1831cd9615ff8fb5e7a3051bb1f23146893c44a3a5906283a11e1a9b8ae5458635254a19a2820aae1e245294059342d46852731ab5ba63b71a75dbae376cbb4d602642a653c1899dcf481f68a159e68b1db904870059956438aeaeaf344ea3ca8829875ee0342b7d5f019216a7192eff0649ef9ad167f8c04e117ce7582e4aaecfd4cd68d2fded38caf4f3a87e3718fc2094a6a4ce48301c0f6641773c35dcf3c97b6faf514da5a020159a0ceb76f3aad576ecf758af85899adee36a59a20521a3bfe32ed5e0c62c53787c03b711976e7b020000",
    ],
    [
      "ETag",
      "Nwnkh+g5NnsWmD5OJUX0Ww==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-64-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85548d4f9b4014ff57c82d269af4837e4169625c579923ab5481eaccb2b4c771d453e0903bdc3ad3ff7d8fc3aa9d9b262470f77e1fefbd7bc703ba655984462864abbb9216eb0f373c440d44255ec1ee5d4aa7c41a7f9b58bf83f5af094f86fe403f3f3c0404ab5802a779429b829705a16234f75bab8297392e386f8250d3e8373b863ee87574bdd3d37513788226f19465b7c0be963217a3767bebdd5a71be4a28ce9968119e3eedb7efbbedbce0379448d1deb56c838b68bf6d7a94708225e3d9e1dc87044a418b054d314b20856766147edc956e319cb65600be678462427899c92a2d90203c8bd9aa2c942a1a3d2095e68b0fe4db537b126893d9dc0df69738adc8cb030d0b6db128a82813d9d0965053cc12ba60d1b28ee4b7da676f760a11c8e01a0b2a96dae517dbb3356d3abbb4bdfda700684d9dafb676a48ddd636d57ca71b5b9ebda7ea0ed1f1d6827de6c7ea67dbadac1400d11159265aa82008709adb27f6cb2f3fa682b0296605c0717a66ee0ce50b7c23834493cec0dc258a761380ccd01ee853ab1fab41f8514034f56ea8a85339e99832826fd6ecf3231b1a2b01b77ac61d8a57a175b94988661f506718c8981360df4b360921e339173c1ea4ea34bcf09ec45e0cdddc938b0551931866e1ed7c95545bccc534291007aa3ae4d15651c9caa6373dcc0f6c693c0b9b0eb4999d215266bff0e6625c689a080c6054ea9a4c5298fa069e86ce63b813373c75360a8e33fdb22041a7d7f782604eb5c7559aa37f203cf714f54025bc4054e4a05b9af3fd01ecef33db4d934fe2f33f6bcf11558e3a2c0ebbf62508ed1afe8ffb05078b5aad3dc5a7650e5b65d75d1e6c7069e06829b55aba3f3b9ed5da17acba3312d6846de1f1f00abc0bb3f88ed6d052cdc57b01112d630ac445426a4a0f5d0b254a5fbc836ccaede470a5cc857b15e67b03d9d4aa352a429cde46345f56d558daa42a57802411066cd5507b5f9033f1afbf42d050000",
    ],
    [
      "ETag",
      "qmeLc9AXC9zTyxCol8S50Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-64-1605310013007"
  )
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
      "dd",
      "6a",
      "02",
      "311085df657abb0b59b55a052fb4955610b16b85421189d971bbeecf6c93ac56c477ef2496e2656f92c9996f867372863cab1218c0364bbf1ad4a7bb14edab2b62344d610d5f3555062100b43265323ff4f7aa23d2f7459e3c95bd7e6bf9fd701c0d874c18f589a584c1197619168981c1c7192a59228f6d36da6f64cc9e6aa74ce76f93e749cc42498913e6abd96c349e4de012dc8cd5f9bf46d69700f6b48d71871a2b85ce45ad698fca4e5d4023cbbac0d050a3151af0b06fa49a9a5a6aa29095b0db09a3aeb86f4742446d217a0c16a4a4cda86276b5646f60c9ca22a623e7831603da971c75e7cf03cb6d9fe1e00167edb6d7faeb45aeb7fe5d383e59340b4deccea03326ae261fc919b71cc8ea060350927ff925b3d7f7e507eb12a5c0c2010000",
    ],
    [
      "ETag",
      "kv9jc40gXPkdDm792Sx8wA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "1dcf4b7282300000d0bb646d1d906fba030546b148115ac98681242a201a42a242a777afd37783f7034a8ce93014e2d6d22b780763b980733c0f99e21a9ff418d6d3479a1c3b7f4751a438e3799aac9a70751b550e2641cba8326638b4bce6e6f10c71cf6ef408c99d9fb7e3ba33d7325aed9f42b3e053eb36f7718fe0694d86b8396c0bd9773e83867e60d7cd42ffaeda445e8f7b6d32618762d334d092df58b1c40eaa2ec21113297b22bdbbdadea387fd660dfa6559e7462e93b3ed6650335425f82a48d5af529935a5889bd4efb91204645a39a9dd8b137e8019a04f56733a14f52bab1910cec0ffbc1023a3afbe4b4b4e39f8fd0348ab251a18010000",
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
      "Fri, 13 Nov 2020 23:27:47 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-65-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6f9b3014fd2bc87b6d12a74980448ad62ca56ba4846c405a75d3848c73a16e0926d874aaaafcf75d4cd3b59bd43e61fb9e73cfb91f3c917b516cc9842422dbd7503d7eba93093921a05986af7bbf5ce7cbdc1f2fe136a4d7f6cdea8bf3239b4e11211a9662bb32878e9275c5414d366137ab645db24aca0e26ead8a34edfa6a3419fd2fe805207790af274298a7b64df6a5daa49af77d4ee66526639b052a82e97bb97f7dec369aface41d70ad7a6f257ba8a27aef8b7ece25675ac862ba09d140ada08a61c7448e16fe32b7c9d9dbd45dc176dd0cc10f8203e35cd6856e6c610a2e8b54647565b292c91331365f1d48e82dbd79647199d7bb222ed80e4eac2dd32cd68f255817c17a652dfc8b75b09a458bb51f87f34b6f35ebced7cbcdca0fadeb4b2ff02ccd921c0cd79a5a67e6e6e305f5b7a0b4288c7ad43c37cacf0d5afc3f968680d20ada60ec509bf55d3a4ed2c4e1a93b1825298524711367c40609e5e3210cb70930e41951c362852c4634496ddbd9c6d405160fa93b8a5de8db317580b1d3d1603cb429399c90df95d0702e542995683b44ae8345e4c551b0f1e7b3c83325a4accef5796bac29e0b5478d0522e89d9a0e4d5448546adabdf0232f98cda3c595d74e780919e38fe11e679cb25c01a25985cdd350ade4161b46fcd9ca3b47b099d8b7635091c9cf27d2f4bc71f1aae52ff40807d8d8d5e64bc22858f85f8d9d23e28ae5b5813cb40752a2e55bac0d5d1f7e211297b4cd42be6fbce086b44f01a45041c13f9e26824de0c37fedb8f888c5d54719a5f18ebbc35523c22b68774898728f6cdb1953971870a5ff8db9d4758f5d6b7234196107857eaea85d7c2cb415abd50b0883387edf74ebf0070d57935778040000",
    ],
    [
      "ETag",
      "qNpOlLlN9LehS0W6YMB7Zg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-65-1605310013007"
  )
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
      "401085df657a0b09564543e205d69f92aab588bd6863cc0a036281a5bb4b1b637cf7ce526b9bb6497b0333c337cb39070ef094161138b04993e70ac5fe224175a70b1f65952949b7921712c100542c21b2fb50ee4689dd1ad997ee0d8efd72d0bdef27bd1e1132dc62cec039409c621649701e0f50b01c692de4599517ebba3340ed4b3d5c04be371b539ff348f7b3e564e2f62743381ae7c58829b6aef97facad8e06ecf8c6c7180516216a2da5e03b0c95a76d4a9697199a9257224409355c3f4804af4a2638376962da6db3615bed66c3b21a4dcbea1098f190a99417c42e17a40f14572cf3f92bb9049b0051976438aeaf2f344ea3da882ebd5960b76a7d5f019216a719aeff0649ef96d167f8c04e117ce758ceab429da9d1e4d6fded38caf4f3a8811b0c7f105251526724f0a6c345e04ee79a5b9dbcf7f70ae55c700a52a2ceb061b5baed8e6dbdc77ac575d4f41e47890a0d0819fd1dd7a902276699c4e31b701530197b020000",
    ],
    [
      "ETag",
      "8ZpjFg64F62AKeGRpD8VBg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-66-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "8d",
      "4f",
      "9b",
      "40",
      "14",
      "ff",
      "57",
      "c8",
      "2d",
      "269af483b6026d13e3ba8a1b5ba595524db32ced711c780a1c72874b63fabfef7158b573d38404eedeefe3bd77ef7844772c0bd110052cbe2f69b1f974cb03d44054e218768df162d4cb3bb1dc4c66912183303cffbebc3c390104ab5802a779429b829705a162b898b7e28297392e386f8250d3349b1d53377a1d5deff474dd029ea0493461d91db06fa4ccc5b0ddde79b762cee384e29c8916e1e9f37efba1dbce0b7e4b8914ed7dcb36b888f6fba6a7092758329e9d2ce690402968b1a2296609a4f0c20c83cffbd22d86d3560ce007462826849799acd20209c2b388c565a154d1f011a9345f7da0b93db1c7be369e2e5cff708dd38abc3ed2b0d056ab828a32910d6d0d35452ca12b16aeeb487ea79d7bd30b884006375850b1d6aebfd99ead6993e9b5ed1d3e07406be2fcb0b5536de49e69fb528eab2d5cd79efbdae1e991f6d59b2e66da97e51e066a08a9902c5315f838486895fd53939db7475b11b004e33ab8b2741377fafa2088028b44fd9e11443a0d827e6019b817e864704c8fc38062e0c94a5db170c633cb082372dced0d2c4c0661d08d3a837ed0a57a170f28b14c73d033a20813136d1be877c1243d6322e782d59d46d79ee3db2bdf5bb8e3916fab32220cdd3cab93ab8a789da7842201f44e5ddb2aca383855c7e6b8beed8dc6be7365d79332a131269bf93dcc4a841341018d0b9c52498b0b1e42d3d06c3a777c67ea8e26c050c73fdb21041afe7c7c21f89b5c7559aa379afb9ee37e5509ec1057382915e4a1fe400738cf0fd076dbf8bfccc8f3464bb0c64581377fc5a01cf3b8a2ffc3",
      "42e1d5aa4e7367d94195db6ed545db5f5b781a086e56ad8e2e17b6b744f59647235ad08c7c3c3e0056810f7f10bbdb0a58b8af602324ac615889a84c4841eba165a94af7896df6adbe8114b8906f62838ebe3b9d4aa352a429cde45345f56d558daa42a57806411066cd5507b5fd0342dc32892d050000",
    ],
    [
      "ETag",
      "5CUA3p1gtyLPf5tbddFJYQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-66-1605310013007"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d90dd6ac2401085df657a9b40a2d416c18b2ad65a82add140a188ac714c637e26ee4e2c22be7b67d752bceccdeeec996f8673f60c455e6fa10f9b3c3bb4a84f7719f2dc16319ab664235743b541f00059654266097f2c697a787b8e26f56b5c8c1e8b45391f0c8430e917560afa67d8e5586e0df43fcf50ab0a656cbdd66ea3607c6aac329d2dc793712c42455b2bcc92287a1a4663b87837634df1af91d5c5833d6d62dca1c63a45eba2d1b4c794a736a0515553a26fa8d5291a70b06b649ada4669225f14bfd7f3c35e70df0d8320ec06c1838025a58a73aa854d16e20d985895317d4b3ee808a05d295177ee3c8adc75198e0eb0d66e7b9dbf5e687babdf85c313a379d724ee0c5a63c1d5e488ac719640ac5bf42055f2cb2f395fdf971f9c2394dec2010000",
    ],
    [
      "ETag",
      "gUtXToIqOFLGnJRkC8kSlQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "64",
      "ad0e18c3a73b212a984041117595494354a4500c583e9ddebd4edf0dde0fe042c8a661ed57212bf006063eb76762466acd41b1d0f15c8cfacdf3ee07254fec4235eb0e331a67cfdd62cb4f7c88d6867edd04e5f748b654a5615ca09e24a479e0671fece0584cfba551c2d43f5f4fa6b48c5b1d35ad1b96d2d578d233591d4917d0bdcb04f7538adb8f434ac744d5c8e72ebe2abfc3ea315da7e7b0a8e6e541927d6596c50673bcdaf3820ee892572b2d311dc1a2900e56f5a97b70970530caba324181eda2dc3adeb27c5c20f7bd031320fb3a57b261f92b0b916d4fc0ff9cb5432d5f7d47722515f8fd030f7657cd18010000",
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
      "Fri, 13 Nov 2020 23:27:49 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-67-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8553ef6f9b3010fd5790f7b509a484fc92a2354ae98614480ba4d5344dc83686ba054cb1c9d456f9df7798a66b55a9fd84ed7b77efddbbe319ddf32a450b4478fed0b2e6f1db9d20e80431857378b565be8e9bdba70712f84f7bef2adca6e2325f2e01c1bb2c89cbba600329da8632b9d845c3bc116d8d1b2106506830990e4613cbb1479635b22d6b0a799215d98657f7907dab542d17a679e41ee642e405c33597432acad777737f6ad68db8635449f33da5092cd2fc9cf47b2128565c54cb5d04025ac99a8495981720e17f664acede971e725c0e7300ef39659852d156aa930525a8a8329eb78dae8a16cf48cb7c734091bb71d7b14145d1965552e1929d18295638518f35332ec2ad6f78c1c536f457b1b70d9268fdd3f557c3f576b3f383c8b8f9e986aea1302998ce3596c699be057001fe9449c52bcd1e77cf1df38b41dec7b17409402d591f4ca6d6048f66d69c64644ab399ed90cc6284ccc8d4c136b1e87cccc6296118f234a9cec295a8c0ce7946e969629389938ced114ec86446922ccdf0283d2573b01d1d4ed0df862b76ce652d24ef1d4237a117bb491cee82f52a76750b196e0b75de0beb1a78ab51418300faa4a74317e502983abbbd2076c3d53af6aedd7ec21b9663fa183dc08c335c480668dc80798a35be48c13014ac7cf71cc07a6297c7a0448bdfcfa8f3bc53f1c6f2d7f41806d8c955fa8ba238f4821f5ace11718d8b5643f6fd01d520f9167a03d5873f808425edaba0ab9d1bfe42fd53c832d6b08a7e3d4d00ebc097ffda71f1010bab0f3452c11d7687ca8e8436acdf21aedb3d664fe663db411adca80f3167e21c5deb6a741559c92af5d251bff8d0684fd6ca57100461fc8176ebf00f2714788478040000",
    ],
    [
      "ETag",
      "3sgCTrhzqbNMzvIQROdoPg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-67-1605310013007"
  )
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
      "1085ffcb782db11528a60907505412402ce5640859da6929b69dbabbd500e1bf3b5b118d9ae8a59d997eb37defb57b784a8b083c58a5c97385727b96a07e30858faacab4e25b498542b000b548984cfaf9030583695a3477bb8b56546e1c3c4fba5d2654b8c65c80b78738c52c52e03deea11039f25a48599517cbbab3406f4b339c05fe7072cb7d4e91e927f3d1a8d71f0de0609d1623a1c5b2e6ffb1b63858b0a1958f314a2c42345a4a491b0cf5d0d854222f336c28aa64880a6ab87e9048aa4a21891a3c69b89d86e3daeda663db4ed3b63b0c66140a9d52c1ec7cc6fa409316994fafec125c06645db2e1b8bebef0388d6a23a61c4e02b755ebfb0ab0b438cd70f937c87ad7823fc307768ce03b2772aa0a7da26e46f7bddf8ee34c3f8fbaee05831f84d29cd4090986e3c12ce88da7865b1cbdf7b71ad5541207a9d064e8d8adcb76c7b5df63bd221335bfc7d3b2420b42c17fc75daac18b45a6f0f00685ddfcd87b020000",
    ],
    [
      "ETag",
      "gBmQoTEPin3zz24dpj1e/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`stamp`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-68-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6b4fdb3014fd2b96f705a4d227af7542ac94c0b2b56949525887506b1227189238b59da20af5bfefda69e93a36f67952a5c6bee79c7beec32ff88965216ee37b16cf0a2a161f1ef93dae60aa480cb78bafe2c7ac9b3e37bf1707f30bff3a1ccdede4f9e404104cb32449f384ee495e8880caf6c8abc6821739119cef81d0dee1f15ee3b07ed06ad4eb8d56bd7e043c4993a8c7b227603f2895cb76adb6ce5d8d398f134a7226ab014f5fef6bf3662d17fc91064ad6b653d6208bacbd9ff434e101518c6727230f0c14928a094d094bc0c28619de7fde96ae3292566300cf59404910f02253da1648043c8b585c08a38adb2fd8d8fce5037b56cfeafaa83b1839fece94a49a3cdd4544a2c944505924aa82a65053c4123a61e1b48ce44fe8c21df421020e1e88a4728a6ebe58ae85506f7063b93b53a9c02308f5ec6f163a451de71c6debd80e1a398ee5f968e774175dba83d1109d8db73050404823021ece8982244a1b0fcb4f5b4f5551a900b46ab9fd76d078a9a38c0ba674b1b6e35b6ea7ebdbd756d9df1e8d49b0f066d0e1882492029a08925245459f871428c38167fbf6c0e9f480619a365c23246edfbe6c08fe22a7daa032ffd8b7fb505ca73fc4cb65e5efb08eeb76c6204d84208bdf6260f7705fd337ec6b92140662f0e654da989701dcc03adbfad4c4cbbb25fc2a18f6ad54c75723cb1de3f2caa51115340b8ce43b6d346013f8e7b359ef3060618b210d6c826252b140ea2481a026ecb3d4d85db18feacde3163660a1dec45a1ff7f553cfc23f4656390aa34f85e0c2358bab8f904d1a2f2c839eb0f0caacfd96cbd9ea2aa5529258cb3b1ca544050f2c8b91647106da82a2880b141559a069e5969b2b22e222a599427a68b28d5ee75e455e91e75c281a6e5400503e10cf776de772f7d3ea7836f62d0f9e9d42b78df671f34e17654a29a7fbff9671570e47fb391f38166cf34fad8a1176ca050000",
    ],
    [
      "ETag",
      "yJrZqCmw2Xu5vFTVdUvIlw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "4b7282300000d0bb642d8e10a0d01d4867a88801242a6c981052fe7f10d1e9ddebf4dde0bd00a1948d6334b5256bc0275889a06ee9d6ea76bae4522a089c49d16ae44e98dc895033afc99ac082593ce3a3cd13b1e7860505796156776dbcf5196207774af70fb3171bf444d274f5537cc4b1fe2cdc3d2e82d2194e3bdd0e4425d5db6011a851434f3ecccaa25d4a8f288a5311df9266dfc3fecdec56bde6bfdbd2983f50519d7163da7268414f2d920c8ed6d9152e466c071abdaa11ad26159a7567ac6dac8528f9f2f3b89ef99f93dcb4d07731572d6003d8a3cb073646f93b0b2555dd80ff7934ad1d7bf77546063680df3f1d79d00318010000",
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
      "Fri, 13 Nov 2020 23:27:50 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-69-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85535d4fa34014fd2b64f6716d01db42dba4599b8a2b6e4b574a35ee664386e905472983cce0464dfffb5e06eb6a4cf48999b9e7dc73ee074fe496171b322609cfee6aa81ebedc88841c105034c3d7b3da5e3e7e2d7f853f6cc73f4b6f1fcfaf2ebdf3c90411bc6149ba2d73e84851570ce478bdea6695a84b5a09d1c1441d67d4b11d6bd0b32dcbee59968b3c09793ae7c52db2af952ae5d834f7dadd4c882c075a72d96562fbf26ede1f9a65256e802969be953451459a1f8b7ecb05a38a8b62b25ea1815a4215c396f21c2dfc676e92a3b7a9bb9c6ebb1982ef3903ca98a80bd5d8c2144c1429cfea4a6725e327a26dbe3a909537f76691c1445e6f8bb8a05b38303654d1583d94609c84cb85e10727cb70318dfc6510af66a7de62da9d2de7eb45b0322e4fbdd033144d72d05c63621ce95b8017d4df8054bcd0ea51f3dc283f37c87f3f968680d212da60ec5a0eb587d628491397a5c3de20492d489261e20e682fb1d8a80ffd4d0214795a54b368210a274d9de1616f103bb6338cfb2e9e1248ed78489d74d4b76090b00dd91d90bf155770cc6529246f3b442e433ff2e2285c07b369e4e912525ae7eab835d614f0daa3c20211f4414dbb26ca052a35edf683c80ba7b3c8bff0da09cf21a3ec617587334e692e01d1b4c2e629a81662830d23c174e11d23584fece73e28c9f8f713697adeb878d5f2177a84036cec2afd25ab28f483efdace1e7141f35a43eedb0329d1f235d686ae777f10894bda6621e76b2fbc22ed5308295450b0cfa789601df8f45fdb2f3e6271f551462abce3ee30d988b00ada1de2badc3ddbb55cd7211a5ca977b151dfd977adc9d164842d14eab9a276f1b1d056ac962f200ce2f803ddaddd3fcaa9507b78040000",
    ],
    [
      "ETag",
      "Ju1Oz+pZRK16IJfkzQYWEQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-69-1605310013007"
  )
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
      "1085df65bca511d2962a492fa85625696ba5d40b4dd36c61f8a9c0e2eea2214ddfdd59acd5a889dec0ccf0cd72ce811d3c6565040e6cb2e4b946d19c24a8ee74e1a3ac7325e956f1522218808a2544fa71fad004f7d6a915a45ed0eba6f668eabac32111324cb160e0ec20ce308f24388f3b285981b416f2bc2eca75db19a09a4a0f1781efcdaea92f78a4fbd9723271479331ec8de362c4145bb7fc3fd6567b03b67ce3638c02cb10b5964af02d86cad336252baa1c3b92d72244092ddc3e4804af2b2638efd0a4639f772cdbec772dd3b4baa6392030e72153192f895d2e481f28ae58eef35772093601a22dc970dc5e5f689c45ad115d7ab3c0eeb5fabe02242dce725cff0d92de94d167f8c00e117ce758c1eb521da9abc9adfbdb7194e9e751976e30fe414845491d91c09b8e17813b9d6b6e75f03e6a14cab9e014a4449da165f6cefa03db7c8ff582eba8e93d8e12351a1032fa3b6e32054ecc7289fb373ff986d57b020000",
    ],
    [
      "ETag",
      "RfhZyTV1/1ThIT43h6BMAA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`stamp`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-70-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffd5536b4fdb3014fd2b96f705a4bed9287442ac9494456bd392a4a00ea1d6244e6a48e2d476d02ad4ffbe6ba7a5ebd8d8e749951afb9e73eeb90fbfe0279685b8831f58bc2ca8587d78e40fb882a92231dcf6bb75d96f3a7c314d97df1f6532e835fa3faecfce00c1344b92344f6855f242045476265e2d16bcc889e0bc0a42d576a3da3c6e7c3a6a361acda346a30d3c499368c0b227602f94ca65a75edfe6aec59cc709253993b580a7aff7f5e7563d17fc91064ad6f753d6218bacbf9ff43ce101518c6767130f0c14928a194d094bc0c28e193e7cd997ae3192d662003fb3809220e045a6b42d90087816b1b8104615775eb0b1f9cb07f6ac81d5f3516f3471fc83394935797e888844b399a0b2485405cda1a6882574c6c27919c99f50df1d0d21020e1644523947b75f2dd7426830bab5dc83b954e0118406f6370b9da3ae7389f6756c074d1cc7f27c74707e88aedcd1648c2ea67b182820a411010f97444112a58d87e5a7ada7aaa85400dab4dc7e3b68bcd651c60553ba58dbf12db7dbf3ed1babecef80c62458794be870441249014d0449a9a262c8430a94f1c8b37d7be47407c0304d1b6f111277ee5e76047f95536d50997fecdb4328ae3b1ce3f5baf27758d775bb5390264290d56f31b07bfc51d377ec1b92140662f0e654da782e03b88975b6eda985d7f76bf85530ec5ba98eaf27963bc5e5954b232a681618c977da68c026f0cf67b3dd61c0c216431ad804c5a46281d44902414dd867a9b1bb61b79b27ad536cc042bd899db68ff453cfc23f4636390aa34f85e0c2358bab8f904d1a2f2c839eb0f0daacfd9ecbe5e62aa5529258cb3b1ca544050b96c548b238036d4151c4058a8a2cd0b472cbcd15117191d24c213d34d941af73af21afc8732e140d772a00281f88e7bbb67375f87973bc98fa9607cf4ea1bb66e7a475af8b32a594d3fd7fcbb82f87a3fd5c8e1c0bb6f927b983308cca050000",
    ],
    [
      "ETag",
      "FA/sF1NohYmqZjslLC0FxQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "0002ff1dcf4b7282300000d0bb642d0e8601a1bb224351b1fc04a91b868610409124849f9ddebd4edf0dde0fc811c27d9f89ee861fe00d2c3934d6687da4b2a906a5ce092447fdc350ad931bc234753b7d9f7ca1d1494aabcaf501295aaf7eaad24513d796b7e5106f17091129c5f516c577cfd99caa7d4bee41db25d8dfa54b21387c4cd88ddd1b13cae132dbe2d0134a9b0362b6779c0a0f293eb1ea48c3153d478d692c71d718de3793a1f70c4dcef619efaf3281d4144a5a30a215f6a6d9cd4c81b7e9e1b7c9d936d1a89fa367309fa2b1dabcb3219c1d54970e012b80675a73dc67f52baba886b102fff34c2c14bffa26ce39e6e0f70fa02feb1918010000",
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
      "Fri, 13 Nov 2020 23:27:52 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-71-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "a34014fd2b64f6ab6dc13eb04d9ab55b519b58ba52aafbc886cc0c179c0a0c3283ae31fdef7b19acab31d14fcccc3de79e731f3c915b51c464429848ef6aa81ebf6c25230704344df115ce368226dbedafbffdaba1ce7f7cdbe6c5c3e5748a08d1b014cdcb0c3a4ad6150735d9acbb6925eb925652763051c7753acec81ef61ddb76fab6ed224f41965c88e216d9375a976ad2ebedb5bba9946906b414aacb65fef2debb3fec9595dc02d7aaf756b2872aaaf7b1e8d74c72aa852ca69b351aa8155411e4546468e13f3366c76f537705cdbb2982ef0507cab9ac0bddd8c2145c168948ebca64259327626cbe3a90b577e1cd438bcbacce8ba8a0391c5831d534d28f2558a7c16a692dfcd355b09c858b951fade7e7de72d69daf2e364b7f6d5d9f7b816769ca32305c6b6a1d9b9b8f17d48f41695118f5b0796e949f1bb4783f968680d20ada60e4da23ea1cd9639630972747fd214b6c60ec88b943da67361f0f601033a0c833a286450b598c181fd989e34474cc783488072ca2a3811b0ddd11c0d88e6972c8c9ee803c5442c38950a554a2ed10b90e16a11785c1c69fcf42cf9490d03ad327adb1a680d71e351688a00f6ada35512151a969f7c20fbd60360f17575e3be10b48297f5cdfe18c139a294034adb0791aaaa58cb161c49f2dbd13049b897ddf071599fc7e224dcf1b17af5afe420f71808d5d6dbe641d060bffccd8d923ae68561bc87d7b20255abec1dad0f5ee0f227149db2ce472e3053f49fb1440021514fcf36922d8043efdd7f68b8f585c7d94511aefb83b5c3522bc827687842977cf760ffba30131e04abf8b0d1d77dfb5264793117228f47345ede263a1ad58ad5e4018c4f1fba65bbb7f9e4f988678040000",
    ],
    [
      "ETag",
      "eGUiafjjZx3V5tmXBjmnwQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-71-1605310013007"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92414f83401085ffcb78a52944db2a490fd5526dd2a252eac534cd16064a05067717b569fadf9d45ad464df40233c337cb7b0f76f0909531b8b0cad2c71ae5f628457d6b8a00559d6bc5b78a4a8560016a9132298852ff45de0d6fdb7ea77d76a16b6fe43df7fb4ca8688d85007707498679acc0bddf41290ae4b588f2ba28974d6781de5666380b83b17fc97d41b1e9fdf96432389f78b0b70e8bb1d062d9f0ff585bec2dd8d02ac0042596111a2d95a40d467a6c6c2a515439b614d53242050ddc3c4825d59590442d9eb47a4ecbe9da9d63c7b69d63dbee31985324744625b3f319eb034d5ae4013db34be832209b920d27cdf589c759dc1831e5d80fbb278dbeaf004b4bb21c977f83ac772df8337c60ef117ce7444175a90fd468723df8ed38cef4f3a8e120f47e104a735207241c4fbd593898de186ef1eefd7cab51dd48e220159a0c1dfbe4b4d3ebda6fb15e90899adfe36a59a30591e0bfe32ad3e0262257b87f054b3353027b020000",
    ],
    [
      "ETag",
      "aoogNxrVDQ/N5/9CtuEFEw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`amount`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-72-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "270448fd5d68b74a8815081051922e4d41d5841a377183691207db41ea50bffbce4e0b7430f6e7a448f1f9debdf77ce7e4192f5816e11e9eb1f8b1a062f9e581cf7005534562d87dfcd5ec74adfb054bcf6f0f2e2fbf5d09eba1d13f3a0204d35592a47942ab921722a4b2371ed562c18b9c08ceab4054edb6aacd4ee3b0dd6c349aed46a30b759226f301cb16507daf542e7bf5fa46bb16731e2794e44cd6429ebeecd79f5af55cf0071a2a59df96ac838aac7f2e7a9cf09028c6b3a3f1080c14928a294d094bc0c26b6534fbbe4d5d6324adc5007e62212561c88b4c695b4011f26ccee2421856dc7bc6c6e69b051e5903ebd447a7eed8f1f70292eae2601f1189a653416591a80a0ae04c7396d0298b8232932fd0b9e75e43061cdc134965806e2f2dcf4268e0de5ade1ba6817d65a163d477ced03691eda0b1e358231fed1defa30bcf1d0fd1c9640b032788e89c808933a2404569e751b9b4f55815950a40eb9edbef278d573acbb8604a9fd6767ccbeb9ffaf68d5536784063122e478fd0e239492405341124a58a8a6b1e512819ba23dbb75da73f800ad3b5e1062171efe7f36b81bfcca936a8cc1b9f0fdcbedf39300e36901b921406f3542ef04eb37678b08357abcadf89fa9ed79f803811822cffc8c181b4c4871a066fa2d2e846b389b5da266ae1d5dd0a9e0a862b59b2e31f63cb9be072cba3732a68161aca4f1a6dc026f1cf2f6b73cd010b171d64a482582a164a2d120a6ad23e4b8ddd7575b7ddea7ec5062cd4bb5cbbd1d17f832cfa30b3d6280c3f15820bcfdc6d1d829a345e58063d81bf4505a7544a126b9a7106279194cc128accf0d14b",
      "9f51102096213d0814f893a1355d4f3ca8a01312a18817bacaf4b987ca416fa2dd32dcd5c68c9d7242ffd7ca5dd924ad75e63a16dcaadfcba8bec875050000",
    ],
    [
      "ETag",
      "qz167EhkimFW4HH9KrEj0A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "c98e82300000d07fe9598d01cb3237ca264a51599cd64b835896c1852d4235f3ef63e6fdc17b8334cb78dfb3e151f33bf8022295f445b6d8364b040fd9d09af9bc5e4afd2dbfb72d0de279a86589b91b5d5d3634ac78650c5f028d6eaf6c9f7c6518eb843c342717ed77e4e5576cfa7a0ed90083181d43e861c42727ba14d5868f9b9bdad09a1baebf678c8a4b1fe2225b2590c257473575ee9c394ecc8329ef156f522c7dff103eb5775e51a213a9abc47286fa54aca4d2b608f17c2a5bd1b0bea63919d31f5b8c4714b0ce35ceea1313bf0deea9f5540c30037c6aaa8ef7acfa6465a8eb33f03f678368f8a78f78daf10efcfe01b9228a8318010000",
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
      "Fri, 13 Nov 2020 23:27:53 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-73-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b4fdb3014fd2b95f771b44d1f246d2534b2368c6a6dbaa529084d5364bb37c190c421768a2ad4ffbe1b873210127c8aed7bce3de73ef244ee45be2513c244f25041b9ff7227193921a06982af375b777f937dfdbe1b3e2457d6cffeccb5fbeee3d9192244cd52342b52682b59951cd464b3ee24a5ac0a5a4ad9c6446d67d0eed9d6e9a06759bd816539c85390c60b91df23fb56eb424dbadda3762791324981164275b8cc5edebbbb7eb728e51d70adba6f25bba8a2ba1f8b7e4b25a75ac8fc6cb34603958232828c8a142dfc676ed9f9dbd41d41b34e82e09de040399755ae6b5b9882cb3c1649559aac64f2448ccd5707b2f616de346c719956591ee5348393d6966a1ae97d01ad8b60b56ccdfd8b55b074c3f9ca8fd6d34b6fe976a6abc566e9af5bd7975ee0b5346529186eebac756e6e3e5e507f0b4a8bdca887f573adfcdca0f9fbb1d4049456d00423c7b2696f648d59cc1c1e8f06a72cb680b111734ee980597c3c84e19601459e11352c9acbdc7118a57d60d1a83f66d190b171341ec7fdc802dba1d476c61c6c7238218fa5d03013aa904a341d22d7c13cf4a230d8f85337f44c0931ad523d6b8cd505bcf6a8b140047d50d3a18e0a894a75bbe77ee805ee349c5f79cd84179050be5f3fe08c639a2a40342db1791acaa5dc62c388ef2ebd1982cdc47e1d838a4cfe3c91bae7b58b572d7fa18738c0daae365fb20e83b9ffc3d83922ae685a19c8ae3990022ddf626de8faf01791b8a44d16f27be30537a4790a20861272fef934116c029ffe6bc7c5472cae3eca288d77dc1dae6a115e42b343c2947b643b03bb6713032ef5bb9833e81dbb56e7a8334206b97eaea8597c2cb411abd40b0883387edf74ebf00f5f1307c278040000",
    ],
    [
      "ETag",
      "YdAyYm+Bv4qgV0K2DA62Aw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-73-1605310013007"
  )
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
      "8d92414f83401085ffcb788548d3160c8907aad492d05a5bea41d3345b18281558dc5d344dd3ffee2cd66ad4442f30337cb3bcf7600f4f7995800beb3c7b6e50ecce325477ba98a16c0a25e956f34a2218808a65440eb2f9e8c177d866787f1ecb68da65298ebdcb4b2264bcc19281bb8734c72291e03eeea16225d25acc8ba6ac566d6780dad57a388f66c1e486fa9227ba9f2cc2d01b843e1c8cd362c2145bb5fc3fd6960703b67c3dc3140556316a2db5e05b8c55a06d4a56d6059a92372246092ddc3ec8046f6a26383769623a5db3635bfd6ec7b23a5dcb72082c78cc54ce2b621773d2078a2b56ccf82bb9049b00d19664386daf2f34ce93d6882e834964f75a7d5f019296e605aefe0649ef86d167f8c08e117ce758c99b4a9da86178ebfd761c65fa79d4b517f93f08a928a9131205637f1e79e3a9e69647ef839d4239159c8294a833ec58bd8bbe635befb15e711d35bdc755a2410362467fc72857e0a6ac9078780332bbc5be7b020000",
    ],
    [
      "ETag",
      "BgSHZE7ahFV/csTP3afeMA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`id`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-74-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "c554614fdb3010fd2b962704686dd3d216a44a8815c820a2245d9a80aa09356ee2068f240eb68354a1fef79d1d02ab60ece3a448f1f9debdf77ce7e4193fb022c123bc64e96345c5facb2fbec42d4c154961f7ea6bc8078f16b12e8743e65d5cdcdefbddd3f4f818104c57499297196d4b5e8998ca5138eba4825725119cb781a87d3468f70ebbc37eafdbedf5bbdd23a893345b4d58f100d5f74a957264598d7627e53ccd282999ecc43c7fddb79e0eac52f05f3456d2da96b440455a9f8b9e643c268af1e2389c81814a52b1a03961195878ab4c96dfb6a93b8ce49d14c04f2ca6248e7955286d0b28625eac585a09c38a47cfd8d8fc638167f6c43e0bd09917bac15e44725d1ced2322d16221a8ac32d542119c69c532ba60495467ca07f4ddf7ae21030eee89a43242b797b66f2334f16e6d7f2f02e83e72bd004d9c2b1b9da0b17b8eb6891c1785ae6bcf02b477b28f2e7c2f9ca2d3f916064e90d0150113e744818ad2ce937ae9e8b12a2a15805e7aeebc9f34dee82ce382297d5ac70d6c7f7c16383776dde0094d49bc9e3d428b57249314d044909c2a2aae7942a164eacd9cc0f1dcf1042a4cd7a60d42e2d1cfe7b782605d526d5099b7d63a1c18fd067043b2ca209eea05dee90d77f066d3fa3bc9d8f7c77310264290f5c7021f2a18bc896a938d620f6bb5263ac09bbb0d3c2d0cd7b166c73f42db9fe37acba72b2a68111bca4f9a6cc026f1cfafaab9e280854b0e3252412c158ba516890535e980e5c6ee4bf5d1a0df1b600316ea7dae7fa0ff0445f261e645a332fc54082e7c73af75086ad2786105f404fe142d9c532949aa69c2024e222959661499c1a3d73ea32842ac407a10280ae6537b618611b5d0294920a30e07c8347984f48c9bf5ae0e76b523e3a31ecd7ff27057b7458b9c7bae0df7e8372ab3732463050000",
    ],
    [
      "ETag",
      "K+Uo4q/a/H55iOGGWhR0Bg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "6d7343300000e0ff92cfd5332a967d63dcb555b58a15fbe24843a2f132d24377fbef737bfec1f3037242e83866b2bbd316bc8125d7d0966cbd5eb58d4b99a487c797c6167616f43a4588dd90c09cd74d83f503eba63d3c33565586dd33d4e9b02ec26756a5a1658626c736243c6e85e60f82472dcc8f4e10ea72a790a418c4a2dcde934606fe47e37a4a714ce842234736773f35bc8b9ba8f9f8985e1c1c2671896a8be86c67070495a74f22b279af93f9fb8483115a22945885daf5a25659344177c2d04071545a0e9ee7b5f0ac35bbec5eb5c89c2cb00174eef940c78caf59dd406803fee7995c7abaf66d9a0f7400bf7f88bd513b18010000",
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
      "Fri, 13 Nov 2020 23:27:54 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-75-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fd",
      "2b95f74a1bb74d495ba91a5d09a35a9b6e690a43d31439ce4d30a471881d5887fadf77e350064282a7d8bee7dc73ee471ec9adc86332269148ef2a28779f6e64448e086896e2ebdf95354c76d36f74f073747575f3e762d9ed7d79984c10216a9662db2283b69255c9418d37eb4e5acaaa60a5946d4cd47606edee311df4bb9476fb943ac85390250b91df22fb5aeb428d2deba0dd49a54c336085501d2eb7cfefd67dcf2a4a79035c2bebb5a4852aca7a5ff4732639d342e693cd1a0d540aca10b64c6468e13f338e4e5ea7ee08b6eda408be171c18e7b2ca756d0b5370992722ad4a93958c1f89b1f9e240d6eec29d052d2eb36a9b8739dbc2512b669a857a5740ebcc5f2d5b73ef6ce52fa7c17ce585ebd9b9bb9c7666abc566e9ad5b97e7aeefb6348b3230dcd6a475626e1e5e503f06a5456ed483fab9567e6ad0fced586a024a2b6882a1438f597748475112393c19f6075142218a86913360fd88f2910d761c01439e11352c96cbdca6f6d0816e1c0e1d9684763f1e86236af742a003da4b62ea709b93fd117928858653a10aa944d32172e9cf03370cfc8d379b06ae29216155a64f1b6375012f3d6a2c1041efd4b4afa342a252ddeeb917b8fe7416cc2fdc66c20b4819dfadef70c609cb14209a95d83c0de552c6d830e24d97ee2982cdc4be1f828a8c7f3d92bae7b58b172d7fa60738c0daae365fb20efcb9f7d5d839202e585619c87d7320055abec6dad0f5fe372271499b2ce4c7c6f5af48f3e4430225e4fce36922d8043efcd70e8b8f585c7d94511aefb83b5cd522bc8466878429f7c076ece31e25065cea3731c7ee1fba56e7a833c21672fd5451b3f858682356a967100671fc9ee9d6fe1fea",
      "d3b85478040000",
    ],
    [
      "ETag",
      "zO/8fyAK05X9YYjxVM12Bw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-75-1605310013007"
  )
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
      "00000002ff8d92dd4ec2401085df65bcb42425fca6091720a0c482588a8931842cedb414b6ddbabbd534847777b6221a35d19b7666facdf69cd31e609f642138b049e2e702657911a3be378587aae05ad12d179942b000358b890c3adde1ecd6e3e5e3bedc8f1eb43bee5e8ee35e8f08156c3165e01c204a90870a9ca703642c45b326789166ebaab34097b9192e7c6f32bba63e15a1e9674bd7ed0fdc111cadf362c8345b57fc3fd656470b7662e3618412b3008d965c8a1d067a626c2a96e61c6b4a14324005155c3d88a528722685a8d1a4d669d5ea6dbbd5a8db76bd61db1d02b908984e4446ec7241fa400bcdb8275ec925b40990554986a3eafa42e324ac8c987232f3dbcd4adf5780a44509c7f5df20e9dd32fa0c1fd82982ef1c4b4591e9333576effabf1d47997e1e35ecfba31f84d294d419f127d3d1c2ef4fe7865b9dbc0f4a8d6a2e0505a9d06458b79bdd56a76dbfc77a254cd4f41e47cb022d0818fd1d37890627625ce1f10dd3c3a87f7b020000",
    ],
    [
      "ETag",
      "c78DNKRlyYkykEVtLF8+Fg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-76-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "0b",
      "4f",
      "db3010fe2b912724904a9b36a42f09b1ae642350524853109aa6d6769d6048e2603b4c08f5bfefe2501e6303295262dff7b83b9ff3886e79be42434478725732f9f0e54610d4404ce3047699766f73579d1c65c7fe89f4efe2e27c7e9cecef0382572c85b32265bb4a949232359ccf9a89146581a510bb20b4dbebeeb6bbb6ebb46dbbedd8760f788aa5f184e7b7c0bed6ba50c3566be3dd4c844852860bae9a5464cffbadfb4eab90e28651ad5a6f2d5be0a25a1f9b1ea48262cd45be3f9f4102a56272c132cc5348e185b9225fdf4a3739ce9a0980ef3965985251e6ba4a0b24a8c8639e94d2a8a2e1233269befa40336fe28d236b3c9d07d1f612671579b96361652d1692a932d50d6b0935c53c650bbe5ad691e2d6fa1e4e4f2102195c63c5d4d2ba3cf242cfb226d34b2fdc7e0e8056308dac897fe25907d62838b4decaf981350f026f1659db073bd68f703a3fb3be5dbdc1401d2ba634cf4d15112629ab2a786ab4fffe782b02d6605e07173dbb8bdb7d7b4062d2a371df71496c3342faa4e76287d874b0c7f6568461e0e94addb0702ef2813bc0348efb1d973a76272676cf8d577687114a88d3ee0c08c18e63ef61b46ea0df926b76c8552114afbb8d2e433ff21651380fc6a3c83365c4183a7a58275715f13a4f0d4502e883bad655940b70aa8ece0f222f1c8d23ffc2aba765c2124c1f6677302f314e1503349638639ac953b182a6a1b3e9cc8ffc69309a00c38cc0d906a1d0f0e7e30b217a284c97b579a35914fac10f93c0067181d3d240eeeb0fb42524ceb7d07addf8bfce280c4757e08da5c40f7fc5a09eee5e45ff8787c19b559de7c6b38d2ab7cdaa83d6bfd6f034105caf5a1d9dcfbdf00ad55b218b996439fd7c7e006c029ffe25365716b07069c1466958c3b452559950c9eaa9e59949f789dd73bbb6830c58ea77b15ea7bd399e",
      "4aa3526419cbf55345f595358daa42a57a064110862d3027b5fe035bb25e0432050000",
    ],
    [
      "ETag",
      "et5kn5sKHmJIKrIqfpQUJg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-76-1605310013007"
  )
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
      "c24010c5bfcb786d93ad0824241c0489122bc12a1e34842c655a0b6da7ee1f90907e77671763387ad99d7df39bc97b7b825d516f6000eb22ffb2a88e57399a675724a86d69345f0dd51a210034326792deb677eff3f8503e3e8d3361ec686fbfabc370c8844e3fb1923038415660b9d130f838412d2be4b1d54af98d8c9963e394e9ec75723f4958a868e384d9228e6f47f104dae062acd9fd6b64d906b0a57582192aac53742e1a455b4ccdd405d4b26a4a0c355995a2060ffb46aec836521185ac84fd5e18f544b71309117584e83358522a4d4135b38b17f606868c2c133a703eb86640f992a366fedcb3dcf519f61e70d62e7b377fbdc8f596bf0b4747837aae88dd6974c6c4d9e4989c71c3818cb218402af9971f0a737eb73f86d8b7d4c2010000",
    ],
    [
      "ETag",
      "oVjDZPLwlKMCf0tuBvuxmw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "6e",
      "82",
      "40",
      "00",
      "00d07f99b31a5096d29b2088802c51c170990cc350407686d5f4df6bfafee0bd01c298f43da4f58b54e01b2c682fedf0ce6c1899f788ab8731a755ad98076514ba352d67a1c8a7805e101593a29eb8004f52fb40258c2dc1bebb3d13aee5f9797d291c67db43c325f578ea6bf64bea521d5a2634e278ab16fe495595f05a198a32b2e388e26708cd86b8749f1e6ff67a4006c362815769252afe727c74dccdfa61a1ec51682ed47ac903d5b53db3160e9f365b3e87a9e744cee51699161f637f4854611eb46ab1efad7ab1b3b3b5e6668527b001646eb28ef430fb640fbc246dc0ff1cd2a5219fbe4c50473af0fb07f285c26618010000",
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
      "Fri, 13 Nov 2020 23:27:56 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-77-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "91f79536e9336da56a74258c4a6d0a690a9aa629729c9b6048e2cc764008f5bfefc6a10c84049f62fb9e73cfb98f3c937b5e266446629efdad413e7dbb13313921a06986afe3405eba62f443d4032987f6645f5e3d96d97c8e08deb0142daa1c3a4ad492819aed77dd4c8abaa252880e26eab86ea7377646839ee3f4068ee3224f419eae79798fec5bad2b35b3eda376371322cb81565c7599285edfed87be5d4971074c2bfbbda48d2acafe5cf47b2e18d55c94f3fd0e0dd40a640405e5395af8cf4ce2d3f7a9bb9c16dd0cc10f9c01654cd4a56e6c610a26ca9467b53459c9ec99189b6f0e64e7adbd65683191d7451995b480132ba19a46faa902eb3cd86eac957fbe0d368b70b5f5a3ddf2c2db2cbacbed7abff177d6cd85177896a6710e866bcdad5373f3f182fa0928cd4ba31e36cf8df24b83561fc7d210505a411b8c5c674c7b13671aa7b1cbd2c96014a70ec4f124764774103b6c3a84611203459e11352c5a8a7212d3fe68e83a119d262c1af6a7a3888e2769344821759cd4198cfb0e399c9047c9359c715509c5db0e919b60157a5118ecfde522f44c0929ad737dd61a6b0a78eb51638108faa4a64313e502959a76affcd00b16cb7075edb5135e4346d9d3ee2fce38a5b902445389cdd3203722c186117fb1f1ce106c2676790c2a32fbfd4c9a9e372edeb4fc951ee2001bbbda7cc92e0c56fe4f63e788b8a6796d200fed815468f9166b43d7873f88c4256db390abbd17fc22ed5300294828d9d7d344b0097cf9af1d171fb1b8fa28a334de7177986a4498847687b829f7c876c7fde19418b0d41f6238f663d79a1c4d4628a0d42f15b58b8f85b662b57a056110c7ef",
      "9b6e1dfe01a7c5393f78040000",
    ],
    [
      "ETag",
      "6RrP7o5Bou3rr4/8UnQwng==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-77-1605310013007"
  )
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
      "000002ff8d92db6e82401086df657a8b0946054be2051eda92e019af1a635618100596ee2e36c6f8ee9da5d6366d93f6869d99fd66f79f7f39c3212d2270609b262f158ad35d826aae8305ca2a539296921712c100542c21f2e01d5bd3b85bf9d1d09fbab6793f40b59cf77a44c870873903e70c718a5924c1793e43c172a4b69067555e6ceacc00752a7571192cbcc923e5398f743e59f9bedbf74770316e8d11536c53f3ff685b5f0cd8f3ed0263145884a8b59482ef31549e1e53b2bcccb0217925429450c3f54622785532c179832a0ddb6e342db3d36a9a66b3659a3681190f994a7941ec6a49fa4071c5b2057fa529c12240d4210d1cd7df2395d3a81e4487de24b0dab5beaf00498bd30c377f83a477c7e8193eb0ab05df3996f3aa5037ea815ee8b7e3c8d3cfa3866e30fa4148454edd90c01b8f96813b9e696e7d9dbd7f52286782939112b5874db3ddedd896f96eeb806babe91e47890a0d0819fd1d4fa902276699c4cb1b0ed79eb27b020000",
    ],
    [
      "ETag",
      "kIv3Of8uLdDLOA709CetSQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-78-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "0b",
      "4f",
      "db",
      "30",
      "10fe2b91272490fa489bbe25c4ba928d682565694a41d3d4daae134cd3b8d84ea70af5bfefe250a06303295262dff7b83b9ff388963c5da01e223c7ec898dc7eba17049510d33886dd9b9b8b38583adbceddbd3b7df0080efb1bd23f3d0504cf590aafd6092b2b9149ca546f32aec452646b2c85288350b9dd29d75a76d3a9d976cdb1ed36f0144ba2214f97c0bed37aad7ad5eadebb120b11270cafb9aa50b17adeaf6eead5b514f78c6a553db4ac828baabe6f7a96088a3517e9e9640c09648ac9195b619e400a2fcc05f97c285de178558901bce194614a4596ea3c2d90a0228d789c49a38a7a8fc8a4f9ea038ddda13b08adc168e287c773bccac9f3130b2b6b36934c65892e5973a829e2099bf1c5bc88ac97d6d760740911c8e00e2ba6e6d6f4c20d5ccb1a8ea66e70fc1c002d7f145a43efbb6b9d597dffdc3a94f37c6be2fbee38b48ecf4eac6fc16872657db93dc0401d0ba6344f4d15212609cb2b786ab4f7f6787302d6605e04676dbb856b1dbb4b22d2a651c76992c866847448bb891d62d36e8335168461e0e95cddb0702ad26eb38b691475ea4dead8f588d8ed66b4b0eb8c50429c5abd4b08761cbb81d1ae847e4baed939576ba178d16d340dbcd09d85c1c41ff443d7941161e8e879915c5ec4eb3c351409a077eadae5512ec0293f3acf0fdda03f08bd6bb79896218b31dd8e1f605e229c2806682cf18a69262fc5029a86ae46632ff4467e7f080c3302577b8442bd9f8f2f8470bb365dd6e68dc661e0f9df4c027bc4354e3203d9141fe848489c1ea1ddaef47f9d7e10f46fc11b4b89b77fc5a09e5623a7ffc3c3e0cdaac873ef5943b9db7e5547bb5f3b784a08ae57a18e7e4cdce016155b018b986429fd787e006c021ffe25f65716b07069c1466958c3b4",
      "52959b50c98aa9e52b93ee13bbddb6bb2d64c052bf89d5ebcdfdf1e41ab9225bb1543f55545c59d3a83c94a967100461d87c7352bb3f0701b04732050000",
    ],
    [
      "ETag",
      "XXHgRk3y8hjEWqIbaTAvbA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-78-1605310013007"
  )
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
      "02ff8d90d16bc23010c6ff97db6b0bed9c73083ecc59a650dc56270e8648acd7aedaf662922a45fcdfbdc4317cdc4b72f9ee77c7f7e504bba2de401fd645be6f50b577399a0f5b24a89bd268be24d51ac10334226772168cf7bd51f4f5d666e1428e32b58b17e571306042a73f5809e89f202bb0dc68e87f9fa01615f2d86aa5dc46c64c2bad32997e46af51c242451b2b4ce771fc3c8c23387b376372f7af91e5d9832dad13cc50619da27521156d3135131b508b4a96e86b6a548a1a1cec1ab9a2460a45e4b3e2f79efcf031e876c220083b41d063b0a45498826a66e733f606868c28133a723eb86740b992a366ee3cb0dc75190e0eb0d66e7b0f7fbdd0f696bf0b87ad41fdae88dd69b4c682abc917b2c60d0732aa410f52c1bf3c2eccf57dbe00f70c158cc2010000",
    ],
    [
      "ETag",
      "S0Hq7DEXOyf1WpDfrkLWlw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "00000002ff1dcfdd6e82301800d077e9b59a0143ecee20012908a34ed9c60de9e0937fdb14b410b3779fd97983f340ac28601cf3897770456f68613ade149b50bc38262dfd547d32b3e1bc92fadd8fad59e7f120fd3d0f804e49ea12f5dade16632da7c3d48f2de4bdae347a6481c79cb6bfbc2bbc3dab36882efeed6b5b18a1aafdbc5b872d219979b2069c55c609ae4c9336e961bd0bee6620c440221eff2c475b55b0a34c536ebac378713cec49d10f877922dce5c9d94ff6364d9c8cc3c73cd352ab237aed0233b6ad6f61b10aef8db2b53a52eb43599faa588f145a2198452361cc9b67d630315ea1ff793e2d029e7d079804897eff00bad3514918010000",
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
      "Fri, 13 Nov 2020 23:27:57 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-79-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "91f79536e9238f56aa4655c288d4a6234dcbd03445b6e304431a87d80131d4ffbe1b873210127c8aed7bce3de73ef28cee7899a229223cbf6f58fdf4ed5610748298c239bc0e777859ace35be7d7355fd291d889f3bff3cbd90c10bc6549bcaf0ad693a2a92993d3eda69fd7a2a9702d440f12f5dc496fe058f6686059839165b9c093acc896bcbc03f68d52959c9ae651bb9f0b91170c575cf6a9d8bfbe9b0f43b3aac52da34a9aef254d5091e6e7a2df0b41b1e2a29c6d3760a091ac4ed81ef3022cfc67a6e4f47dea3ec7fb7e0ee0074e19a65434a56a6d410a2aca8ce74dadb3a2e933d236df1cd0c65ffa8bd8a0a268f66552e23d3b3152ac70a29e2a669c47eb951184e7eb68358f8375986c1617fe6ade5fac97db55b831ae2efcc837142605d35c63669cea5b0817d04f9954bcd4ea71fbdc2abf3428f838969600d29275c1c4b51c3cf0ac09c9884b336f6493cc628478c4b5f18858743266e394300c3c2daa59b814e56462db636748936c34cc92b1677b09c1c44a2015b153cfb21dc7458713f45873c5ceb8ac84e45d87d05514c47e1247db70318f7d5d42869b429d75c6da02de7a545020803ea9e9d046b900a5b6dd4118fbd17c11073bbf9bf092e5983e6dee61c6192e240334aea1798ad52b9142c350385ff96700d613fb790c4a34fdfd8cda9eb72edeb4fc951ec3005bbb4a7fd1268e82f087b67344ec70d168c84377401558be81dac0f5e10f206149bb2ce872eb47d7a87b8a58c66a56d2afa709601df8f25f3b2e3e6061f541462ab8c3ee50d98ad09a753bc475b947b6ebba8331d2e05a7d88798e77ec5a9ba3cdc8f6ac542f15758b0f8576628d7c054110c61fea6e1dfe",
      "01c0abcf9978040000",
    ],
    [
      "ETag",
      "2VaLlOTj6XYiLc3oVoFzAQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-79-1605310013007"
  )
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
      "000002ff8d92414fc2401085ffcb78b4c42250b40987a2a0248050ca4543c8d24e4b71dbadbb5b9510febbb315d1a8895eda99e937dbf75ebb83c7348fc085559a3c9528b72709eaa9297c5425d78a6e85c8158205a85942e429f7fdf97cdb7c3d3ff514efdfb7ce58d49e763a44a8708d19037707718a3c52e03eec206719d25a287899e5cbaab3406f0b339c05fe607c437d2622d38fe7c3a1d71df6606f1d1723a6d9b2e2ffb1b6d85bb0112b1f6394988768b414526c30d4036353b1ace05853a294212aa8e0ea412245593029448d26b5f665adeed8ad46ddb6eb0ddb6e13c845c8742a7262e733d2075a68c67df1422ec121405625198eabeb338dd3a83262cac138709a95beaf00498b538ecbbf41d2bb66f4193eb04304df39968932d747aa3fbcf37e3b8e32fd3ceada0b7a3f08a529a923120c46bd59e08d26865b1cbc77b71ad5440a0a52a1c9b06e372f5a6dc77e8ff54a98a8e93dae96255a1032fa3b6e530d6eccb8c2fd1bf9645a4b7b020000",
    ],
    [
      "ETag",
      "+lRRUUy4x2+AslFZ5/ad7Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`date`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "DATE" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-80-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "d553ef4fdb3010fd572cef0b48a5bf60a5ea8458810ca2950492145421d49ae4120c491c6c07a942fddf7776ca58c7c63e4faad4d8f7debb7777be17fac8cb848ee81dcf9e6a90cb4f0fe28eb6286896e1edb0a866f5f4617096ee5d773c0f7c79ee65d9c10122b86129565439ec2851cb18d4681ab63329ea8a492176506867d8dde90dba9f777bdd6e6fb7dbdd479e823c9df0f211d9f75a576ad4e9bce66e67426439b08aab762c8a9ff79de77ea792e20162ad3a9b293b9845753e4e7a988b98692eca836988066a05720e05e3395a786326775f37a5db9c15ed0cc1cf3c0616c7a22eb5b18512b128539ed5d2aad2d10bb5367ff9a0a133718e2372ec4fbd686bc10a435e6c13a6c87c2e41d5b96e9105d694f21ce63c593491ea917c0bfc738ca0837ba6402dc8f5991338844cfc6b27d85a244c03ea787e4426ee77871c92b1774236a55c8f4c3dcf0923b275b84d4e037f7a418e661b18ac218194a18d13a6318f36de93e6d33583d5a03482d65d77dfcf9aae4c940bc9b5a9d7f52227181f47ee95d3b47802198b97e113363965b9024433c90ad020cf450248b9f04337727d6f3c4186eddbc52b42d1d1cdcb1b215a56600c6afb4f4fc6914357abd6df11e32018cf509549c996bfc5d0e960cfd0dfd8572caf2dc4e2eda971f0dc04688f9a6cafa73e5dddaef0d7a2f8da1a757a397582196dae02484142195bc90f3a68c136f0cfa5797dc188c5378c6994c6b3d23c5626492cc186235e58bb6bf6fef0f3a04f2d58ea77b1417f6816bd4cfe1859e7a8ad3e482964609fad39623665bdf0127bc2934bfbe8375c3eadaf0a508a6546de13a4603abee7654614cf4ad496405221495a97b1a1356fdc5e3199d505949a98a1a91131236f93b0ae2a2135246f02186b36238c02d73bddfeb23e1ecd2227c47dd3e4a6371af66f4d3db68a66b0ff6505b7cd48ec0af89e59811f8472ce1dbe050000",
    ],
    [
      "ETag",
      "8mpYuUj6Hf4W/NNeOrMNgg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "4b",
      "52",
      "83",
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "645d3b401a2aee8096324314b058854d26a491f00f8422e878773bbe1bbc1f4019e34a91a9af79079ec04a0d6bcbb681d41c147f9e129f3563ca94ecb350f1f8d5cf917c5b0b8906ffd6f9f545243a346daf5291034be7aa7511740ef8713c0cf3f7000b762d0c4abef41df1ba7e9fd49c9ea7296c42e52db2cdf45a615855ccad387d7ef752db72738b8ca9a7b3b0cc8e1512e244cf993062d6c2167f84d5a5751761d7328a82d94ee6fca5b58979d37c1ca081a07cde1343db61835e1a66d7a190c6832be692e35e26263e166003f822cb912b52deb31059d606fccfc9b44a7eef3b9c8e7c04bf7f2288d92318010000",
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
      "Fri, 13 Nov 2020 23:27:58 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-81-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6b6fda3014fd2b91f7b540288f00125a114d5b34085b12a8a6698a6ce726350d71163bdd58c57fdf8d53ba7693da4fb17dcfb9e7dc471ec9bdc86332214ca43f2a280f1f76929133029aa6f8faa9b0b7d7db5dbc737687f932ff7d75f7ab9acfa65344889aa5e8bec8a0a564557250934dd04e4b5915b494b285895aa36eab3bb407bdae6d777bb6ed204f41962c457e8fec3bad0b35e9744edaed54ca34035a08d5e672fffcde7938ef14a5dc01d7aaf35ab2832aaaf3b6e8c74c72aa85cca79b000d540aca08f6546468e12f336617af53b705ddb753043f080e947359e5bab68529b8cc139156a5c94a268fc4d87c712081bb74e7a1c56556edf328a77b38b362aa69a40f055857fe7a652dbcabb5bf9a858bb51705f31b77356bcfd7cbcdca0bacdb1bd7772d4d5906866b4dad0b73f3f082fa31282d72a31ed6cfb5f2538316ff8fa526a0b482261839f6907647f69825cce1c9a83760890d8c8d9833a03d66f3711ffa31038a3c236a583497b90db4cfc01945e774c0a23ee3c3880d131e0de204e8a0cf07e7d025c733f2b3141a2e852aa4124d87c8adbf08dd28f437de7c16baa684845699be6c8cd505bcf4a8b14004bd51d3b18e0a894a75bb175ee8fab379b8d8bacd849790527e087ee08c139a2940342db1791aca958cb161c49baddc4b049b897d3e0515997c7b2475cf6b172f5afe4c0f7180b55d6dbe2408fd85776dec9c105b9a5506f2d01c488196efb036747dfc8e485cd2260bf9b271fdafa479f221811272fefe34116c02effe6ba7c5472cae3eca288d77dc1dae6a115e42b343c2947b623ba371b74f0cb8d4ffc6c6b6639fba56e7a833c21e72fd5451b3f858682356a967100671fc9ee9d6f10f1d81e0c978040000",
    ],
    [
      "ETag",
      "Kp0VGVjdj7jyCLnzFhxuCA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-81-1605310013007"
  )
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
      "00000002ff8d92dd4e83401085df65bca509c49656925eb45a95a4bf9436694cd36c61a0546071775149d37777166b356aa23730337cb39c73e0008f491e8203db247e2a51541731aa992e3c9465aa24dd0a9e4b040350b198c8e9eb4a26d2bb9ad8e36abf6c2faba6b5b267dd2e1132d861c6c0394094601a4a701e0e90b30c692de06999e59bba334055851ece7dcf1ddf519ff150f7e3c570d8eb0f077034ce8b21536c53f3ff585b1f0dd8f3ad87110acc03d45a0ac1f7182857db942c2b526c485e8a0025d470fd2016bc2c98e0bc419346c76a58b6d9bab44cd3ba34cd3681290f984a784eec624efa4071c5528fbf904bb00910754986a3fafa4ce324ac8de8d21dfb76b3d6f71520695192e2e66f90f4ee187d860fec14c1778e65bcccd599ba1d4e7abf1d47997e1e75d3f3073f08a928a933e2bba3c1dcef8da69a5b9fbcf72b85722a38052951676899cd4eab6d9befb15e731d35bdc751a2440302467fc77da2c089582af1f806c05f4f197b020000",
    ],
    [
      "ETag",
      "PxYsisR9O6NyjV7Vy41Y6Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`stamp`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-82-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffd5536b4fdb3014fd2b96f705b4be19b4eb8458818c456b9392a4a00aa1d64d9c6048e2603b4c1dea7fdfb5d3d2756cecf3a44a8d7dcf39f7dc879ff103cb23dcc70b963c96542cdfddf305ae61aa4802b75d875d7668e77d6f125e7d2f4f8b1fdd457c3f383e0604d32c49b222a575c94b1152d99ff88d44f0b22082f33a08d57b9d7afba87578d06eb5da07ad56177892a6f190e50fc0be53aa90fd667393bb91709ea494144c36429ebddc379f3acd42f07b1a2ad9dc4dd9842cb2f976d293948744319e1f4f7c30504a2a6634232c050b5b66b4f8bc2bdd60246b24007e62212561c8cb5c695b2011f23c6649298c2aee3f6363f3970fec5b43eb2c4067eec409f6e624d3e4f93e2212cd6682ca32553534879a6296d2198be655a478405f3c77041170704724957374fdd5f22c8486eeb5e5edcda5028f20e4b8011adadf2c748206ce39dad5b21d34711ccb0fd0dec93ebaf0dcc9189d4e773050444463023ece8982444a9b8faa4f5b4f5651a900b46ebbfd7ad878a5a38c0ba674c1b61358dee02cb0afacaac7439a9070e93f429763924a0a682248461515231e51a08c5ddf0e6cd7190c81611a37de2024eedf3c6f09c1b2a0daa032ff38b04750dc6034c6ab55edefb081e70da6204d8420cbdf6260f7e883a66fd957242d0dc4e0cda9b2f15405701beb6c9b5307af6e57f0ab61d8b94a1d5f4e2c6f8aab2b8fc654d03c34926fb4d1804de09f4f67b3c780854d8634b00d8a49c542a99384829a70c0326377cdee7eecb67ad880857a1d3bd4319a477f8cac7394469f0ac1856796571f219b345e580e3d61d1a559fd1d978febab8c4a49122def70941115deb13c41922539680b8a622e505ce6a1a6559b6eae8848ca8ce60ae9a1c93e7a997b03f9655170a168b4550140f548fcc0b39d8bfd4febe3e934b07c787a0addb4fbbdcead2eca94524df7ff2de3b61a8ef673ee3a166cf34fc2879e60ce050000",
    ],
    [
      "ETag",
      "7NiQ2e2+8UcVwuBpz7bfjA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:27:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "4b",
      "72",
      "82300000d0bb64ad0e18c2a73bc08206b1a260c10d1321e1577e01add0e9ddebf4dde0fd0092247418e2b1ad6803dec044d6da2a59399d60202f9de5bd91a8f5aed6478f6914679a75b138ab8ce66205e41dfbcd0da7c47d8abdfc38b8a974bc7db1f36cc8015312e5034e7d1d6ddbb9eb5bcdd87a87c0472745af8be5c1960458b9837ede9863b6cd1dab53201feb12727c0fd5102e2377965a9d1f4b67489bdeaef274fd19d791393b0462846c0fabd5730dd959c9f8a64379b464a5994f5c68f6d74c3c0645695e5d1f7f2367979fecbb282462a8ea6001e8b32b381de2e2958548d316e07f1e8f53475f7d83124e39f8fd034454ed7418010000",
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
      "Fri, 13 Nov 2020 23:27:59 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-83-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8553ef4fab3014fd5748df47dd00191b2e599ecbc4e7928d29308d7979216d2958058ab4688cd9ffeea5389fc6443fd1f69e73cfb93f7841f7bc4ad114119e3fb4ac79fe7527083a444ce11c5eeb839b5af9c5dde5d9c2244f0799292eea8bf96c0608deb1242eeb820da4681bcae4741b0df346b4356e841840a281e70cecb1e53ab665d98e654d80275991ad78750fec5ba56a3935cdbdf63017222f18aeb91c5251bebf9b8f4766dd883b4695343f4b9aa022cdef457f178262c54535db4660a095ac495889790116fe335372f239f590e3729803f891538629156da53a5b90828a2ae379dbe8ac68fa82b4cd0f0714f92b7f111b54146d5925152ed9a191628513f55c33e32cdcac8d6570b609d7f378b909926871eeafe7c3c566b55d0791717dee87bea1302998e61a33e344df02b8807ecaa4e295568fbbe74ef9ad41cbaf63e908202d591f4c26d618db9e754c3232a199e7b824b318211e99b8d821163d1eb1514a18069e16d52c5c41cd9e37b63dea2656eaa4c9e8884e12cfb1c789ebd9598a33674c8e31da1da2a7862b76ca652d24ef3b84aec365ec2771b80d16f3d8d72564b82dd4696fac2be0a347050502e89b9a765d940b50eadabd0c623f9c2fe2e595df4f78c5724c9fa3079871860bc9008d1b689e62cd5aa4d03014ccd7fe2980f5c42ef64189a67f5f50d7f3cec58796bfd36318606757e92f8ae27019fcd176f6882b5cb41af2d81f500d966fa13670bdfb074858d23e0bbadcfae10dea9f4296b18655f4e7690258077efcd7f68b0f58587d90910aeeb03b547622b461fd0e715dee9eed59d6c8451adca82fb123dbdd77adcbd1656425abd45b45fde243a1bd582bdf411084f107ba5bbb5793badfec78040000",
    ],
    [
      "ETag",
      "p+YptEljQFC/bw+f/oPpPA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-83-1605310013007"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d92d16e82401045ff65fa0a29464543d2076cad92a855c0c4a631668541b1c0e2eed2c618ffbdb3d4daa66dd2bec0cc7066b9f7c2119ed3220607d6e9665fa1385c6d50cd74e1a3ac3225e956f2422218808a6d8874b16a5ee78fe361b2cfd3f5221858516b31bbb92142465bcc1938474852cc6209ced3110a9623ad453cabf262557706a843a98741e87b9301f5398f753f998f466e6fd4879371598c9962ab9affc7daf264c08eaf7d4c506011a1d6520abec34879daa6647999a1297925229450c3f5838de055c904e7264dcc6ed36cd856bbd9b0ac46d3b23a04663c622ae505b1f380f481e28a653e7f2597601320ea920c27f5f585c6695c1bd1a53709ed56adef2b40d29234c3d5df20e9dd32fa0c1fd83982ef1ccb7955a80b753f7a707f3b8e32fd3ceace0dfb3f08a928a90b127ae37e10bae3a9e69667efbd834239159c8294a8336c58ad6ebb635befb1de721d35bdc751a2420322467fc73055e0242c93787a03b14870337b020000",
    ],
    [
      "ETag",
      "Aeu3/mYMHfqmibXSG0c4XQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`amount`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-84-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffc5547f6fda3010fd2a96a7aa9d04044a7f0da9ea6849d76869c242286253454c6252b7494c6da713abf8ee3b3bd096b5ebfe9c8484cff7eebd777786477cc78a0477f094a5f725158b0fb77c8a6b982a92c2edf77234b276b3f6f9af5116f62e46eed52c99fd3c3e0604d35592e4f38cd6252f454c65673868a48297732238af0351fd68afde3a68eeb75bcd66abdd6c1e429da4d9cc65c51d54df2835971dcb5a6b3752ced38c9239938d98e74ff7d6c3ae3517fc96c64a5a9b9216a848eb7dd1938cc744315e1c0f0760a094544c684e5806169e2b93e9e74dea0623792305f0038b2989635e164adb028a9817339696c2b0e2ce2336365f1cf0c076edb3109df9432fdc8948ae8ba38f88483499082acb4cd550043dcd5846272c89aaccfc0e9d07fe2564c0c10d915446687461073642ae3fb283174c9e1f22d7f96aa313d4f57a6893ccf1d0d0f3ec4188764e3ea22f813feca3d3f10606ba48e88c80911e51a0a4b4fba43a3a7ab58a4a05a0d5dc9dd7dbc64b9d655c30a53b76bcd00eba67a17365574376694ae2c5e01ec63c2399a4802682e4545171c9130a257d7fe0848eef755da83093ebaf1112777e3c3e17848b39d50695f9c6e7aedf0d0ff68c8335e48a64a5c13c5407bcd56aecef6de1e5b2f677a26e1074c7204e84208b3f72d090967853c3e04d54195d6bb6b0565b47bb7879bd844f0dc3b3acd8f1b7a11d8c717515d01915b4880de53b83366093f8e7af6bfdd4010b8f1d64a482582a164b2d120b6ad221cb8ddd55f551f3537b1f1bb050af73873a478be4cdcc4aa334fc54082e02f3be75086ad2786105cc04fe316a38a7529254d30c0be8445232cd2832cb474f734651845881f42250148efbf664b5f1a8864e4982125eea2a33e70eaa16bd8eb6ab705b1b3376aa0dfd5f2bd7d590b456cff76c7855bf01afaf229d79050000",
    ],
    [
      "ETag",
      "ZuWW/2l3FzWlTDHWLVfdfw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb64ad0e1008d09d08151515ac51ca860990a8401409f2ebf4ee75fa6ef07e0049532a44dc3c0a7a071f60208a394b679b4ab2b4807aaf1adbd029b7becb86b2bc36232ed953450ca70956896b8c460717927b47459e47483a0edcc6f3a2f7d47d2824676cf9947d06f4e08649a3c8d282dbe8d93209a128b64c7d332ef7708ab313bd5eea1d4abc3359ab272672d78653e3b9d3da2eeecbe47b89304df2ce0fad456d91f9702047677d8397adc1d5ca27abaf9177841732f75a3d63e7426e9cab6e28f2367a8d1e3c9079261e56b912019800da57b79a8af8f6ce42cd3427e07f1e374345df7d8b929ad6e0f70f3527656818010000",
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
      "Fri, 13 Nov 2020 23:28:01 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-85-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85536b6f9b3014fd2bc8fbb82681bc1b295aa394aed102d980b49ba6091973a16e0926d874aaaafcf75d9ba66b55a9fd84ed7bce3de73e782477bc4cc98c243cdf37503f7cba15093921a068ae5f3f8f97771ebda5dfae9a41b848a5b7573ff3f91c115cb324dd550574a4686a0672b60dbb792d9a8ad642743051673aea38637b34706cdb19d8f60479128a6ccdcb3b64df2855c959af77d4eee642e405d08acb2e13bbe7f7de7dbf57d5e2169892bdd7923d5491bdf745bf148251c54539df8668a09150c7b0a3bc400bff996972f63a7597d35d3747f03d674019134da9b42d4cc14499f1bca94d56327b24c6e68b0309ddb5bb8c2c268a6657c625ddc18995524563f5508175116c3c6be55f6c026f11ad367e1c2e2f5d6fd15d6ed65bcf0fadeb4b37702d4593020cd79a5b67e6e6e305f553908a97463dd2cf5af9a941abb763d1049496d006e3893da6ced43e4db264c2b2e96094643624c934998ce820b1d9e910866902147946d4b06829cab1ddb7874e02719a3a693c1c3983783ad5a7c98851963a7dc7ee93c309f95b7305e75c5642f2b643e43a58456e1c055b7fb9885c5342469b429db7c674012f3d2a2c1041efd474d0512e5049b77be5476eb05846ab2bb79df01a72ca1ec23dce38a3850444d31a9ba7a0f6448a0d23fec273cf116c26f6fd189464f6fb91e89e6b172f5afe4c8f7080daae325f1246c1caff6aec1c1157b4680ce4be3d900a2ddf606de8faf00791b8a46d16f263eb06bf48fb1440063594ece36922d8043efcd78e8b8f585c7d94910aefb83b4c6a115643bb43dc947b644f9dfea9430cb8566f62c3e1f8d8359d4367841d94eaa9a276f1b1d056ac91cf200ce2f87dd3adc33f9d34f7ab78040000",
    ],
    [
      "ETag",
      "b+6CkMajaKVu3SAdsMqtXg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-85-1605310013007"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92dd4e83401085df65bc8504ecaf24bda0b6d526145ba057a669b630b454607177d1344ddfdd59acd5a889dec0ccf0cd72ce81233c6565020e6cb2ed738de270b545b5d04580b2ce95a45bc54b8960002ab625b2efddc49e5878a3caeb7526b7c3f2da0fddc56040848c775830708e90669827129cc72394ac405a8b795e17e5bae90c50874a0fc32898fa77d4173cd1bdbff43c77e88de1645c1613a6d8bae1ffb1b63a19b0e79b00531458c6a8b55482ef3156536d53b2a2cad194bc16314a68e0e6c156f0ba628273932666bf63da5dabd3b22dcb6e59568fc09cc74c65bc247619923e505cb13ce0afe412ba0488a624c369737da1719634467439f5a36ebbd1f71520696996e3fa6f90f4ee187d860fec1cc1778e15bc2ed5859a780fee6fc751a69f478ddc68fc83908a92ba20d174360e237736d7dceaec7d785028e7825390127586b6d5ee777a5deb3dd65baea3a6f7384ad46840cce8efb8cf143829cb259ede008f9d68227b020000",
    ],
    [
      "ETag",
      "8L9cLrQLDpL75FCBn2NSAQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `id` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-86-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c8de2f9af403fa056dd278bdcadd9154aa14f4cce5d22e30e02ab0c82e5e1ad3fffd06b06aa3a70909ecce7bf3decccef248ee58169209f1597c5f42b1fd72cb7dd22220698cbbbfb89885dc758d7bcf5cb8faa5360eb87f319d2282552c41d33c81b6e06511809878ab4e5cf032a705e76d4cd436466d6da40efb9aaa6a7d55d591272089162cbb43f68d94b99874bb7bed4ecc799c00cd99e8043c7ddeef3ef4ba79c16f2190a27b28d94515d1fd58f424e101958c67536f85064a01c51a52ca12b4f0c20cfdaf87a93b8ca69d18c10f2c001a04bccc64650b53043c8b585c167556327924b5cd571f64652eccb9abcc979eed1e6d685a9137c70a15ca7a5d802813d952365853c41258b370d344f23be5bbb33cc3083ab8a102c446b9fa693aa6a26c2ad054395166f6a97248b56cc5b36d73e52a4727c7ca0f67e99d2bdfae0f30e839042159563b76a99f40e5f6a9a9d6dba3ac0854a28326b8d6d511d50c75ec47be1e44467fe8472af8bee1eb43daf7d5603c8041e803459eacb2d72c9af16c04948efcbe063d4d1fd071d81b0ffc1086634d0b40ef03356814aaea00c8ae45fe164cc229133917ace92cb9722cd75cbb8e67cf67ae59971151ecde6963ae2ae2b54f894522e883ba7655947154aa8ec9b25dd399cd5debd26c266301310db6ab7b9c8d882602104d0b9a8284e28c87d83472be5c59aeb5b4670b64d4c77dbe470832f9fdf84270b779dd6559bf2badd1a0d6df032e6952d68887e6836843b2dbb5fe9f62e638b36b94a54541b7efa77f377f8daf578dc5673d52a9ed573db2fbb3c3a745f01635d9c985673ad7a4d972208202b2e0f3d141701df8f467b0bf",
      "9988c5bb893242e21a0735109548504033b02caded3eb18d5e5f37480d2ee49bd870d0db9f4c95a3ca082964f2a9a2e666d68daa42a578066110e7ccb6ec1f18fd076dd8f5a519050000",
    ],
    [
      "ETag",
      "XosAdoTT8qUELT7V19cobQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-86-1605310013007"
  )
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
      "cd4ec3301084df653992480915052af540a1a21555450339a1a8729d4d70f3b3c1768ad22aefce3aed812397783df9c69ef1090a55a730819dcabf5bd4dd558e76e386084d5b5ac34b43b541f000adc899bc7e3e3c2c8452c7d82c8abcca5e6f8e45ba994e9930f20b2b019313640acbd4c0e4f304b5a8906ddbad1e4e64cc768d5396eb8ff9cb3c62a1a2d409eb78b57a9cade6d07b7f6c4df12f4bd27bb0a75d84196aac25ba148da63d4abb74058da89a127d43ad96686080871fb9a6b6119ac867c5bf1ffbe138b81d8541108e82e08ec192a4b08a6a66e377ce0696ac2823fae17e1032a08791ab66c3f730c8aec3654afae4629a7516cd9b264e60d05d1e9c833c910b6739b4d52d7a2005bfe442d9f3beff05caf40e42a6010000",
    ],
    [
      "ETag",
      "+Dv9HaiizUsHkgmfK2zkdQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "08000000000002ff1dcfd97282301400d07fc9b338b68091be81adb274d864a9be64285c3406c21210b1d37fafd3f307e70765790e4290a161c0d11b9ab3576d992f9d7665a841a9dc4ec187517cfbd62d0da6fd70dd5fe6dea8b61ec774dd445d6586c701ab6651bbe7d32cf0f165b5c1dc482c1bd655d1307aa0abc66ec7a0e2b1fc2595795bfae9284964c2873474cfc56e244a29eaeb83823dc2a6d071363401e6bb892691e974bdda4e105917cd9ffc9233e6ce64c71ee433d69cf7828779768c59983c4ae175be2e7b5bebce63430226fb399d6e9150a0b61baa26ee6c5b9d8e1608ee2ded4110facccaaaa62dd0ff9c0c730bcfbe01590f3dfafd03dad01c4718010000",
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
      "Fri, 13 Nov 2020 23:28:03 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-87-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d6fa24014fd2b64f6b52a880a9a98ad51ba3551dc22b6d96c3664182e745a642833b46b1afffb5e86da6dd3a47d6266ee39f79cfbc133b9e745422624e6d9430dd5e1db9d88c9190145337cb5efb2a0ff34e82ffe1e160b7e3fcb60374aafa65344f08625e9becca123455d319093ddb69b55a22e6925440713755ca7638dcca16d99a6659ba6833c0979bae2c53db26f952ae5a4d73b69773321b21c68c9659789fdeb7befb1df2b2b71074cc9de7bc91eaac8dee7a2df73c1a8e2a298eeb668a0965045b0a73c470bff99497cfe3e7597d37d3743f0236740191375a11a5b98828922e5595de9ac64f24cb4cd3707b2f556de3c3498c8eb7d1115740f674642158dd4a104e322d8ac8da57fb109d6b370b9f1a3edfcd25bcfbaf3cd6ab7f6b7c6cda5177886a2710e9a6b4c8d737df3f182fa0948c50bad1e36cf8df24b83961fc7d210505a421b8c1c73442dd71cc769ecb0d4b587716a421cbbb133a4766cb2f10006490c14795a54b368210ac701ab6fc756648f87493470218e5c7007118c4c1a3b23364c0609399e91a78a2b5870590ac9db0e919b60197a5118ecfcf92cf4740929ad73b5688d3505bcf5a8b040047d52d3b18972814a4dbb977ee805b379b8bcf6da09af20a3ecb07dc019a7349780685a61f314546b9160c3883f5b7b0b04eb89fd3c052599fc7e264dcf1b176f5afe4a0f71808d5da5bf641b064bff87b673425cd3bcd690c7f6404ab47c8bb5a1ebe31f44e292b659c8d5ce0b7e91f62980142a28d8d7d344b00e7cf9af9d161fb1b8fa282315de7177986c445805ed0e715dee89eddad6684c34b8521f62b6699dbad6e46832c21e0af55251bbf858682b56cb57100671fcbeeed6f11f703f0b9578040000",
    ],
    [
      "ETag",
      "3jgR2w42DxyDDikAgeU6fQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-87-1605310013007"
  )
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
      "000002ff8d925b4f83401085ffcbf84a23a43743d2077a511b69ad2d7d324db385814217167717b569fadf9dc55a8d9ae80bcc0cdf2ce71c38c02e2d22706193264f15cafd4582fac114735415d78a6ea528148205a8594264e62483e16be6fb7953eeee66ce437cc933afd72342855bcc19b8078853e49102f7f10005cb91d642c1abbc58d79d057a5f9ae122988fa737d4e72232fd74e9fb5edf1fc1d13a2f464cb375cdff636d75b420139b39c628b108d16829a5c830d4636353b1bce4d850a292212aa8e1fa4122455532294483268dab6ec3e9d8eda663db4ed3b6bb047211329d8a82d8e582f481169af1b9782197d02140d625198eebeb338dd3a83662caf134e8b46a7d5f019216a71cd77f83a477cbe8337c60a708be732c1755a1cfd4b57feffd761c65fa79d4d00b463f08a529a933128c27a345e04d66865b9dbcf7f71ad54c0a0a52a1c9d0b15b57ed6ec77e8f75204cd4f41e57cb0a2d0819fd1db7a90637665ce1f10da653e9b67b020000",
    ],
    [
      "ETag",
      "j1gCDxjLLm3rkKP1Qf/ljA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-88-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8554614fdb3010fd2b91f705a4d2a64ddaa6952a564ab6452a294b53189ba6d6719d6048e2603ba00af5bfefe250a06c03295262df7bf7de9dcf7944b72c5fa3218a58725752b1f974c323d44054e1047659fc30bb9b9c45d6a5fa41ed9f1126323b49462340b08a257156a4f448f252102a878b793311bc2cb0e0fc08121d39ce51bb6776adb669b62dd3ec034fd2349eb2fc16d8d74a1572d86aedb49b09e7494a71c16493f0ec79bf75df691582df50a2646b5fb2052ab2f5bee871ca09568ce7a3c51c0c94928a25cd304bc1c20b731d7dde4fdd64386b2600be678462427899abca16a4203c8f59520a9d150d1f91b6f9ea03cddda93b098dc96ce187072b9c55e4d5a181a5b15c0a2acb54358c15d414b3942ed97a55478a5be34b303b830838b8c692ca9571f9cd0d5ce3656b658c8c6363ec9f1afb093cdf58f8be3b0f8d83e343e36b305b9c1b27577b1870bea652b15cfb0e7194d2caf3536bbdbf0fb4226005a27570d9377bb8ed9883288efa2476ac6e149b348a9ca8dfc5566492814ded754431f054955db370ce73b36399d4eac3d3edd836b13bb83f009ee5c496633af1c0743ab4efb47b68db400f82297aca64c125abfb8b2e032f749761b0f027e3d0d565c4187a785a9bab8a78ed534191007aa7ae6d15651c94aac3f2fcd00dc693d0bb70ebf998d20493cdfc0e2624c6a9a480c60267545171c6d7d034743e9b7ba137f3c75360e8433fdf21241afe7a7c21849b427759e9379a8781e77fd50676880b9c961a725f7fa071015ed176dbf87f9a71108caf401a0b81376f62504ecfaee8ff90d078bdaa6dee24dba852dbad3a68fb7b0b4f03c17daab3a3ef0b37b842f55640632a684e3e1e1f00ebc087bf85dd1d052cdc5290910ad630ac44562244d07a6859a6ed3eb11d6bd0b591060bf536669b8eb93b9d2a4795916634574f15d5775437aa0a95f219044198355f1fd4f60f3ff0c4fb23050000",
    ],
    [
      "ETag",
      "ifwOqCMb3WtXe4ZbacsmBg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-88-1605310013007"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d90416fc2300c85ff8b775c2ba5c03684c461a06a20210665688709a1104c5768eb2e49d92ac47fc709d3c47197c479fe6cbd97131cb2720b3dd864e9578dbab94bd1ce5d91a0a9736bf8aaa8340801a0952993efb342ecef9b61e76710cde3ce6244917a9df7fb4c18f5898584de097619e65b03bd8f1394b2401e5bafb5dfc8986d2aa78ca76ff14b9cb050d0d609d3e564f23c98c4700e6ec6aac3bf4656e700f6b44970871a4b85ce45a5698fca8e5d40238b2ac7d050ad151af0b06fa49aea4a6aa29095b0db0da347f1d08e8488da423c3198939236a392d9e582bd81252bf384be391fb418d0bee4a83b7f1e596efb0c470f386bb7bdd65f2f72bdd5efc24163d1cc34b13b83ce98b89a1c92336e3990d53506a024fff228b3d7f7f902afa9e54ec2010000",
    ],
    [
      "ETag",
      "WPm0j+yC4xB1QE4SHo1cOQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "000000000002ff1dcf4b7282300000d0bb642d0e0881d21dd02adf52b120b2c964620a918f4088a09ddebd4edf0dde0fc08450ced174ad69075ec11d6fcc355907bd6cc33da95d33c4c64197abe171cc59dba452b51c42050abd794187e8bdf03f9ddbdcccd675f669d69b91f3055363a0480f3cdd9f2cf98c2ebac9b7e176470b23ce95c19696f82cca3076c42d2b2bd735b493b0b42e11d25bee79b55ab9179c2682bb51d5075c93f142ed0e91e90183b4a843b66ff9b14c45421e9ef5312b2798b674e327b3b2673b0567646c3b27f35d03eda210aa775e9e59dc16ec3ba92db00274e9d9483962cfac0a4d7305fee768baf7f4d9b7291ee9087eff00546250a518010000",
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
      "Fri, 13 Nov 2020 23:28:04 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-89-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d6f9b3014fd2bc87b6d0281249048d19a257445236403d26a9a26641c43dd02a6d8a4aaaafcf75d4cd3b5aad43e61fb9e73cfb91f3ca13b56edd11ca52cbf6f69f3f8e596a7e80c51897378d575b3cddd8b7aeafb7eab87137ffde3dbea61b10004eb58029775410782b70da162be8b8679c3db1a379c0f20d1c0990d465363628d0c636419860d3c418bcc67d51db06fa4acc55cd74fdac39cf3bca0b866624878f9f2ae1f4cbd6ef82d2552e86f25755011fac7a25f0b4eb064bc5aec2230d00ada24b4c4ac000bff99fbf4fc6dea21c3e53007f081118a09e16d253b5b9082f02a6379dba8ac68fe8494cd570714b9bebb8a35c28bb6ac920a97f44cdb638913f95853ed22dc6e342fb8d8869b65ec6d83245a5dba9be570b5f5779b20d2ae2fddd0d5244e0baab8da423b57b7002ea0bfa742b24aa9c7dd73a7fcdc20effd583a02480bda0713db98e29163ccd22cb549e658933433689a3aa93dc1566a90d9988ef729c5c053a28a852b5e1936b688314d13634cec64ec9846e210cb496c7346eccccc46336ca2e3197a6898a46b266a2e58df21741d7ab19bc4e12e582d63579590e1b690ebde5857c06b8f120a04d007351dbb28e3a0d4b5db0b62375cae62efcaed27ecd31c93c7e81e669ce1425040e3069a2769b3e17b68180a961b770d6035b19fa7a040f33f4fa8eb79e7e255cb5fe8310cb0b32bd5174571e805df959d13e20a17ad821cfa03aac1f20dd406ae8f7f01094bda6741bf766ef81bf54f21cd68432bf2f93401ac029ffe6ba7c5072cac3ec8080977d81d223a11d2d07e87982af7c476c613cb440adcc877b1e9c43e75adcbd165a425ade47345fde243a1bd582b5e401084f107aa5bc77fae4577ed78040000",
    ],
    [
      "ETag",
      "//2ugEFp6LLLu/R5LDKBCw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-89-1605310013007"
  )
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
      "00000002ff8d92414f83401085ffcb789426905654921eb0b69688585b7a30c6345b182875617177d1d4a6ffdd59d46ad4442f30337cb3bcf7600b0f45958207cb227f6c506e0e72d437a698a26ab85674ab45a5102c40cd72222787f6fae5f2360a83f1f5201869ae46ee61deef13a19215960cbc2d6405f2548177b7858a95486b89e04d592ddace02bda9cd70164f83e882fa52a4a68fe661e89f8543d859fbc59469b668f97facddef2c588be5143394582568b4d452ac31d181b1a9585973ec28d1c80415b470fb2097a2a99914a24393cec969c771eda3ae63db4ed7b68f09e42261ba1015b1f319e9032d34e353f14c2ec12540b62519cedaeb138d8bb43562ca208add5eabef2b40d2b282e3e26f90f4ae187d860fec3d82ef1c2b4553e93d350aaffddf8ea34c3f8f3af7e3e10f42694a6a8fc4c1d57016fb5713c3ddbf7b3fdb685413292848852643c7ee9d1c1dbbf65bac0361a2a6f7785a366841c2e8ef18171abc8c7185bb573a53e7877b020000",
    ],
    [
      "ETag",
      "P+0jzKYNLIHOCIFtlsF6+g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-90-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f",
      "db",
      "30",
      "10",
      "fd",
      "2a",
      "91",
      "f7",
      "0f68fd91b44dd256aa5829190b2b294b53109aa6d6719d6248e2103ba00ef5bbefe2504ac70652a4c4bef7eebd3b9ff384ee58ba447d14b2d57d41f3f5a75b1ea21aa212af60d7fafedbea8d3f9f2ecdd1306b794178767c163c0e068060254be0248b695df0222754f467d3c62ae7458673ceeb90a8ded3eb86a59b6d43d78db6aedbc013348ec62cbd03f68d9499e8379b5bedc68af3554c71c64483f0e465bff9d06a6639bfa5448ae6be64135444f37dd1a398132c194f07b329182804cde734c12c060b3be632fcb29fbac170d25801f881118a09e1452a4b5b9082f03462ab22575951ff09299baf3ed0d4193ba3401b4d665e70b0c049495e1c6a5868f3794e4511cb9ab6809a2216d3395b2eaa4876a77df527e7100107375850b1d0aebe39bea3edb616da403bd286de89b69fc0f5b499e739d3403b383ad44efdc9ec423bbedec380f3251592a5ca7780c398969e9f5bebbe3dd09280258856c1b9ad5bd8e8eabd300a6d1275db6618e9340cbba16de276a8935e87769621c5c0936576c5c2294f21d0d231a6eda8d56dd92dc3343a6dc35a1aa6ddb2da761811ddeeb68969a04d0d3de64cd21326322e58d55f74e5bb81330ffc99371a068e2a23c2d0c393ca5c59c46b9f128a04d03b756dca28e3a0541e96eb058e3f1c05eea553cdc798ae30594fef6142221c0b0a689ce3844a9a9ff325340d5d4ca66ee04ebce11818ead02fb60881fa3f9f7684609da92e4bf546d3c077bd5365608bb8c471a1200fd507c21978459b4dedff6986be3fbc06699ce778fd570ccab13a25fd1f120aaf5695cdad64d9f9ddaa8536bf36",
      "f0d410dca72a3bfa3173fc6b546df934a2394dc9c7e3036015f8f0b7b0bda380855b0a3242c21a8695885284e4b41a5a9628bbcfecae69760ca4c0b97c13b36c7d7b3a658e32234d682a9f2baaeea86a54192ac40b0882306b9e3aa8cd1f4dc4416223050000",
    ],
    [
      "ETag",
      "6Kz69L+Gd5CAp2NTbJBJTw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-90-1605310013007"
  )
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
      "0002ff8d90416fc2300c85ff8b776db554684c54e20053d99010daba7198d084426aba421b87c415aa10ff7d2ee3b0e34e899f3fbf3ce70c87ca1690c2b62a8f2dfaeeae447eeb2f3986b6e62087231b102240d6a590c6162639b9cfc9703f1bdeebe32c3b2e47e5782c4430dfd86848cfb0abb02e02a4eb3358dda08c6d36feea281877ae57e6cb8fec39cb4568a8e885e56ab1984c17195ca23f63eef0af91af4b047bdae6b8438fd6609fc279daa3e179bf60d08dab310ed47a8301aef0b5517a6a9df644b128f148c5c9503d0c12a59281528f02d664345764855dbd4b3660625de77492fd40c1ad9e768ce1d59398072c6e1d717ca2fe5d963cec5b8cc068f9a4978a7febcb0fc9367cde81010000",
    ],
    [
      "ETag",
      "cndc1wpYA6jF6/aqFEqN9g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "4b",
      "72",
      "82",
      "300000d0bb64ad0e8244e94e85024351489101364c8881f2694803f2737af73a7d37784f8009a15d97f66d4d1978033396b50dd9385c3aa93e8581abfbb1ea89656f3322f081e888d1e3700944220fe73e2926c751b51a46c1ba972e1fa61d37963b8e67b6ccc6024f92ec617a10e81a6d6b5ee7b96916c71afddce3f766261ee26a56dae45bdd1678b68c361ce1a087c96e091309e2ca180ae629598526ffd6bbc1677ec93314f565eb2fcd837a89dd3eca365d73e74b69dc5cbeee84cd22e966754a81eecb083bc30a43d96503dc577c0808f4c10ad08997827669f9ca2aaaa6adc0ff3ced674e5ffd13c5820af0fb07ea31e0f718010000",
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
      "Fri, 13 Nov 2020 23:28:06 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-91-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "9b3014fd2bc8fbda2450f22091a2354ae9ca94900d48ab699a903117ea1630c5a65355e5bfef629aae55a5f613b6ef39f79cfbe089dcf12a250b92f0fcbe85e6f1cbad48c8090145737c35bf7b637955f2f1c49c8f6d6157c16d64ad964b44f08e256959173090a26d18c8c53e1ce68d686bda0831c04483b935b0a6e6c4b64cd3b24d73863c0945b6e1d51db26f94aae562343a6a0f7321f20268cde59089f2e57df4703aaa1b710b4cc9d15bc911aac8d1c7a25f0bc1a8e2a25aee4334d04a686228292fd0c27f669a9cbd4d3de4b41ce6087ee00c2863a2ad54670b533051653c6f1b9d952c9e88b6f9ea404277e3ae238389a22dabb8a2259c18295534568f351817c16e6b78fec52ed8ae226fe7c7e1fad2ddae86ebdd66bff543e3fad20d5c43d1a400cd3596c699bef97841fd14a4e295568fbae74ef9b941defbb174049496d007e39939a59663ce932c99b1ccb1274966429238c96c42edc464f3318cd30428f2b4a866d14a5426d8f3344d583cb71c88c76027b103d3713cb5b39963995992d1537238217f1baee09ccb5a48de77885c075ee4c651b0f7d7abc8d52564b42dd4796fac2be0b547850522e8839a0e5d940b54eadaedf9911bacd69177e5f613de404ed963788f33ce682101d1b4c1e62968b622c586117fb575cf11ac27f6e3189464f1fb89743def5cbc6af90b3dc201767695fe92300a3cff9bb673445cd1a2d59087fe406ab47c83b5a1ebc31f44e292f659c8cfbd1bfc22fd5300193450b1cfa789601df8f45f3b2e3e6271f551462abce3ee30d989b006fa1de2badc23db995a53876870a3dec56c7b7eec5a97a3cb082554eab9a27ef1b1d05eac952f200ce2f87dddadc33f52ac219178040000",
    ],
    [
      "ETag",
      "0JI4sVmi450943o3nRjT1A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-91-1605310013007"
  )
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
      "4e83401085df65bca509a42d55122fa8d64a426b7fa826354db385815281c5dda5da347d7767b156a3267a0333c337cb3907f6f094161138b04a93e70ac5ee2c4135d6c50465952949b7921712c100542c2132bc7f2dfd19f6e7e3edf421cf3745b719cc93cb4b2264b8c69c81b38738c52c92e03ceea16039ea359e5579b1ac3b03d4aed4c36930f1867dea731ee97e38f37db7ebf7e0609c1623a6d8b2e6ffb1b63818b0e1ab09c628b008516b2905df60a83c6d53b2bcccb0217925429450c3f58344f0aa6482f3064d1a1756c3b2cd76d3324dab699a1d02331e3295f282d8d994f481e28a6513fe422ec12640d425198eebeb96c669541bd1a5370cec56adef2b40d2e234c3e5df20e95d33fa0c1fd83182ef1ccb7955a81375e3dfb9bf1d47997e1e75ed06bd1f845494d40909bc416f1ab88391e61647efdd9d4239129c8294a833b4ccd679bb639befb15e711d35bdc751a2420342467fc76daac0895926f1f0062883ccea7b020000",
    ],
    [
      "ETag",
      "cVxpLUeGZQvSWmmjnB3TZg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `date` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-92-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fba795f203421248a4a863096b23a5a425902a9ba6c41843dd024eb1e91455f9ee3ba0699b756b2524b0efbd7befce679ed03dcb423444018b1f0a9aefbedcf10035109538865d7eed2c7d6b7977d99db8bdde45b4e256f0c31a8d00c14a96c0e936a14dc18b9c5031f417ad38e7c516e79c37215173d0696a7db5a76baaaae9aa6a004fd0249ab1ec1ed8b7526ec5b0dd3e68b762cee384e22d132dc2d397fdf663a7bdcdf91d2552b48f25dba022da1f8b9e259c60c97836f21760a010345fd314b3042cbc32c3e0eb71ea16c3692b06f023231413c28b4c96b62005e159c4e222afb2a2e113aa6cbef9400b7b668f3d653cf71def6483d392bc3955b050d6eb9c8a22910d650335452ca16b166eeac8f65ef9eece2f21020e6eb1a062a3dc5cd8aead289b104bba5146ca99623913e5983c7514df71ec85a79c9c9d2ae7eedcbf52bead8e30e03aa442b2acf2ece120a1a5dfe7b64edf1f6649c0123cd4c1b5a1f6b166aa83200a0c12997a2f88541a046660f4b01ea864d0a5dd30a01878b2cc5eb170c633538b743de8eb849aba4efa3a35fb03427a46608461076b7ab71b75a3de2044fb06fa9d3349274c6cb960756fd18d3bf5ecb5e7faced8f2ecaa8c0843ff26b5b9b288b73e251409a00feada9751c641a93ca8a9e3d9ae35f6a64bbb9e8d198d31d92d1e603a229c080a689ce3944a9a5ff2109a86aee68ba9379d3bd60c18d5815f1d10020d7f3ebd12bcddb6eab2acde685216b07f93708993a2023cd61fa8a376d4a60af3db43fb7de3ff992cd7b556a08ef31ceffe8a4145fd6e49ff874e85af56b5d383ae864ab5171768ff6b0f4f03c175",
      "aab3a36bdf7657a8de726944739a91cf2708c055e0d3bfc2e18a02162e29c808096b9857224a1192d37a6e595ad97d669b8666f45105cee5bb5867601e0ea8cc5166a429cde47345f515ad1a55860af10282208c9b3375ce21fa079d6f3d9622050000",
    ],
    [
      "ETag",
      "oQNVUAVjM4DR55HfYoAbZA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-92-1605310013007"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d90c16ec2301044ff657b6ca226405b81c4a12004a80895b49c2a848cb30981246b6c872a45f977d681438fbdc4ebc91b7bc6173866650c03d865e9a9425d3fa468576e88d054b935bc282a0d82076845cae4e3f4d4db3ff5c6fbf7d5ac569d5fb92ecffdd570c884917b2c040c2e906498c70606df172845816cdb6e757b2263b6564e992fbf26d349c44241b11396ebc5e26db49840e3fdb1a9e3bf2c9bc68303ed224c506329d1a5509a0e28eddc1534a25039fa862a2dd1400bb73f524d95129ac867c5ef77fcf02578ee8641107683e095c19ca4b01995ccae3f391b58b2228fe887fb41c8806e47ae9ab4df732bbb0ef769d36ceea6516dd17c68e20406dde5c12dc8985c38cba1adaed00329f8256799bded9b2b4211965ca6010000",
    ],
    [
      "ETag",
      "+Gq4h/4ChKQHyp2zcUnv9Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "30",
      "00",
      "00",
      "d07fc9591da0064a6f042c8b22ab20bd6410c3526840822c3afdf73a7d7ff09e20cd32c2181eda9a50f00196549037d966df71087af9507b2def1da61275bb90d213e54f9a61392589aca24ea17bb76e48b3ef89ab724eec0789a3140f5763a452e46dacd3f7b819e964ac435c1edc5238c6fdb94e1912f2627d1db72ae446650f03db9c3f89244b91b1d8b8259909dbddacfb8b6ae2b3766ea68a1a6edae4de8faf3d2c3932be1fa6189a024c66450c76eb789bdfd4a9158722e1845164fd45e42ffa31f22b87c3be2a0d21ffc518bacebc025680cc5dd51386ab57f60dcaf20afccff1b074e4d54724ed490f7eff005900179d18010000",
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
      "Fri, 13 Nov 2020 23:28:07 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-93-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "f795b609e923ad548daa8451a94d599a82a6698a6ce72618d238c40ea843fdefbb71280321c1a7d8bee7dc73ee23cfe45e1409991026b2871aaafdb73bc9c809014d337cfd9bef87390bdc65729351e7baae229d5d3c4da788100d4bd15d994347c9bae2a026db4d37ab645dd24aca0e26ea8cdd8e33b407ae63db8e6bdb23e429c8d3a528ee917dab75a926bdde51bb9b4999e5404ba1ba5cee5edf7b8fa7bdb29277c0b5eabd97eca18aea7d2efa3d979c6a218be97683066a05550c3b2a72b4f09f99b0b3f7a9bb82eeba19821f0507cab9ac0bddd8c2145c16a9c8eaca64259367626cbe39908dbff4e791c5655eef8ab8a03b38b112aa69acf7255817e17a652d828b75b89a458b75106fe697fe6ad69daf97db55b0b16e2efdd0b734653918ae35b5cecc2dc00bea27a0b4288c7ad43c37ca2f0d5a7c1c4b434069056d301ed943ea78f698a56cc453cf1db0d406c63c361a5097d97cdc877ec28022cf881a162d64e1f56d7013cf89eda13388110531735812f7137b4c933449a83b208713f254090de742955289b643e4265c447e1c85db603e8b7c53424aeb5c9fb7c69a02de7ad45820823ea9e9d0448544a5a6dd8b20f2c3d93c5a5cfbed84979051bedf3ce08c539a2b4034adb0791aaa954cb0612498adfc73049b895d1d838a4c7e3f93a6e78d8b372d7fa54738c0c6ae365fb289c245f0c3d83922ae695e1bc8637b20255abec5dad0f5e10f227149db2ce4e7d60f7f91f62984142a28f8d7d344b0097cf9af1d171fb1b8fa28a334de7177b86a447805ed0e0953ee91ed8d46c33e31e04a7f8879dee9b16b4d8e2623eca0d02f15b58b8f85b662b57a",
      "056110c71f986e1dfe01be5b972f78040000",
    ],
    [
      "ETag",
      "zly6lbN3LdWga1VurTtgFw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-93-1605310013007"
  )
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
      "45ff657ca591a62d2a491f50514968ad949a18d3345b182a0a0cee2e6ad3f4df9d45ad464df405668633cbbd1736f0905729b8b0cc578f0dcaf5de0af5952922544da115df6aaa148205a8c58ac91b27dc7f0cae2767e973998d5eb28c4a3ff2864326547287a5007703598e45aac0bddd40254ae4b5848aa6ac166d67815ed766388da3607cce7d49a9e9c7b330f48e431fb6d66e31155a2c5afe1f6bf3ad05f7b48c3043895582464b2de91e131d189b4a9475811d458d4c50410bb70f56929a5a48a20e4f3a47bd4ed7b107bdae6d777bb67dc0604189d03955cccea6ac0f34695144f4cc2ec16140b6251bcedaeb138ff3b43562ca601c3bfd56df5780a56579818bbf41d67b27f8337c60ef117ce744494da577d45978e9fd761c67fa79d4a917fb3f08a539a91d1207237f1a7ba389e1e6efde8fd71ad5441207a9d064d8b5fb878303c77e8bf5844cd4fc1e57cb062d4804ff1d17b906371385c2ed2b2d244fed7b020000",
    ],
    [
      "ETag",
      "Y6L/qIVPFdwmfMxffomERA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `stamp` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-94-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85546b6f9b4010fc2be8fa2551fd388cdf5294ba0e4d916cec629c28ad2afb80855c029cc31d49adc8ffbd0bc449ddb4898404be99d99ddddbf523b9e5694086c4e3d15d0ed9f6c38df0488d8062119e26c9afa61d0d1663354be637143ebae2c18b4e4e90c10b9564c92686ba1479e6831c2e178d2813f9866542d431507dd0aeeb5dda31744a7583d21eea24c4e184a7b7a8be566a2387cde63e772312228a816db86cf822793e6fdeb79a9b4cdc80af64f3306513b3c8e6db494f63e133c5457ab25ca0815c42b68284f1182dbc2803efd361e80667492342f23df781f9bec85355d8c210be48431ee55919950c1f4969f38f0fb23027e6d8d5c6b3a5ed1ead595288d7c71a93da6a9581cc6355d3d65853c86358f1605d219b5bed8b339b22820eae9904b9d62ebf9a8ea9696ba9d0dd5a3bd14eb5917da61daa2d5b5bdab6b970b5a3d363eddc992de7dae7ab030eda0e402a9e96a65de6c550187eeaabf5fa360b015368a202573dda657a9f0ebcd0ebf961dfe8782105cfeb7bbd0e333cea0fdad00e3c60a85345f452c55291f6fc5e1f68afd3edb6c183b015b4594707aa7742c3f38daedeea4368f459407635f2907105675c6e84e45573c9a563b9e6ca7596f678e49a651921c3069e55e68a22fef4a9b04824bd51d7ae40b9c04cc54d59b66b3aa3b16b5d98d5704c2062fe767187e311b25802b259c61250904d45804d23f3d9c272ad993d9aa0a2bcf1f99e21c9f0c7e38bc0dd6eca2eabf24d5c6b8a77349ace4b0f7bd2058bf392755f7d90166dd13a6dd5f58eabb786ba31d4db0d4ae977b2dbd5fe1f7ce438a32b34c4b28c6dffc2b0c86ebb90ff236bc92f7f55e6f72e7452647bf644763f77f8d408ae58159d7c5b9ace15a98e1c082183d47f7fa8905c02effe53ecd716b9b8b898065740711c615f1649fc0caa51e64969f749ddefe34491929ca95758afdbdddf5911a3880809a4eaa9a26a6dcb4615502e9f4908e204da967d8ee86fc3bfaea636050000",
    ],
    [
      "ETag",
      "mmx/Ng9SCtOmPj0e+Towbg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-94-1605310013007"
  )
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
      "904f6f824010c5bfcbf40a29c4b6b4261ed4986a420cd09ac634c6ac3852e4cfd0dda1c618be7b67d1438fbdb0b38fdfdb7d6f2f50e4f51e86b0cbb3ef16f5f92e438eed90a0694b36b234541b0407905526e4345c071cafa35334bf8fe245307efea88b783412c2a45f5829185ee09063b93730fcbc40ad2a14db76abfb1305e3736395c5f27df63a4b44a8686f85e52a0cc79370069df3c7d614ffb26c3a078eb44bf0801aeb146d8a46d311535ed88246554d89aea156a768a087fb1f99a6b6519ac815c57d7970fd27ef71e07b9e3ff0bc40c09252c539d5c2aede241b30b12a133a493ff005d0fd28550ffdf7a7976d87dbb4e93637d3e4cc68224d92c0a0bddcbb0699920dc7129a758b0ea44a5e729ef375dffd02610ff28da6010000",
    ],
    [
      "ETag",
      "CLY7tQYPwPH/PQI7A8WnkQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "08000000000002ff1dcf4b7282300000d0bb646d9d3424957407123e02151d0461c3200988a542014bc4e9ddebf4dde03d405e146218b2b1fd1457f00eee39a2cb62e97650273b9e2a812eaeced929c9ab1319f803314de215c764927172f3ba6aaf605bc55f373c38b7edbce68cce536e333879303d9ac2e3872980c9d19061cfeb06a5969cd6098e372e34fd6d441ae445149f7824f5ea425c63bb63adfd525f19a2d6a975c8d1bb6f944a638a1a5dfa512db3929f7f8c1acdb50f1bd41d62ecf7816a5a6e9bb87921fccddb28f99eaae4a2b3300eb5751658df1a822b563468020b206457f762c8ea675621942ec0ff3c1bef9d78f67591f7a207bf7fe13f93a218010000",
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
      "Fri, 13 Nov 2020 23:28:09 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-95-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "14fd2b64f6e3da024bdf49b3362dae4d5aba52aad1cd860cc30547814166a831a6ff7d2f83753526fa8999b9e7dc73ee836772cf8b984c48c4d3871aaaa76f7722222704144df1f5f16a2107f143bdbf193967737971fd3dbf711ea75344f08625695e66d091a2ae18c8c96edb4d2b5197b412a283893ae37ec71e587dc7b62cdbb1ac21f22464c98a17f7c8be55aa9413d33c6a775321d20c68c9659789fcf5dddcff30cb4adc0153d27c2f69a28a343f17fd9909461517c574b74503b5842a849cf20c2dfc67c6d1e9fbd45d4ef36e8ae03d6740191375a11a5b98828922e1695de9ac64f24cb4cd3707b27557ee3c3098c8eabc080b9ac38911534543f5548271e66fd6c6d23bdbf8eb59b0dc78e1767eeeae67ddf966b55b7b5be3eadcf55d43d12803cd35a6c6a9be797841fd18a4e285560f9ae746f9a541cb8f636908282da10d86436b40ed91358e9268c89291d38f120ba268140dfbd4892c36ee412f8e80224f8b6a162d446143640d9251125a76cf097b0e8bc3f178188794456021d74eec21399c90c78a2b5870590ac9db0e912b7f19b861e0efbcf92c70750909ad33b5688d3505bcf5a8b040047d52d3a18972814a4dbb975ee0fab379b0bc74db09af20a5ec69fb80334e682601d1b4c2e629a8d622c686116fb6761708d613fb7d0c4a32f9f34c9a9e372edeb4fc951ee0001bbb4a7fc936f097de2f6de788b8a459ad21fbf6404ab47c8bb5a1ebc35f44e292b659c8c5cef5af49fbe443021514eceb69225807befcd78e8b8f585c7d94910aefb83b4c3622ac827687b82ef7c81e8d9dfe806870a53ec4fae3e1b16b4d8e2623e450a8978adac5c7425bb15abe823088e3f774b70eff0057605a7d78040000",
    ],
    [
      "ETag",
      "wWDs6dquvZ83FCsQY+mZ3w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-95-1605310013007"
  )
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
      "401045ff657ca509444b95c407b4b53669ab023531c6342b0c2dba30b8bba84dd37f77166b356aa22f30339c59eebdb086c7a2ca2080fb62f1d4a05aed2dd05cd92242dd48a3f95653a5111c4023164c2ea549637dd37bf527717f784d432f8c1e5f8e8f99d0e9124b01c11af20265a621b85d43254ae4b594645356f3b673c0ac6a3b8c9368341d725f5266fbe96c3c0e4fc603d838bbc54c18316ff97facdd6d1c78a0fb08735458a568b5d48a1e3035236b538bb296d8d1d4a81435b470fb60a1a8a98522eaf0a473d4ed78bedbddf75cd7db77dd1e839252610aaa989dc5ac0f0c1921237a6197e033a0da920de7edf599c745d61ab1e5689af807adbeaf004bcb0b89f3bf41d6bb14fc193eb06d04df39515253991d7536be087f3b8e33fd3caa1f26831f84369cd40e494693419c84934bcbdd6dbd9fac0cea4b451ca4469ba1e71e1c767bbefb1eeb29d9a8f93d81510d3a900afe3bce0b03412ea4c6cd1b40b13d0c7b020000",
    ],
    [
      "ETag",
      "hltcSsY7x6MSDGVoG1ARkw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `amount` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-96-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "7f6f9b3010fd2ac8fba795f20392002152d46529ed9052d211d2ae9ba6c480a16e01536c5a6555befb0ed3b4cdbab51212d8f7debd77e7338fe896e6111aa18026771529379f6e58805a88089cc0aeb00df57bb6f152f2a3b07edbf36298a4c1c3780c085ab338ce8a94b439abca90f0d172d1494a5615b864ac0d89da96d1d60c55ef6baaaaf555d5041e27693ca3f92db0af8528f8a8dbdd697712c69294e082f24ec8b2e7fdee7daf5b94ec86848277f725bba0c2bbef8b1ea52cc482b27cbc5c80818a937245324c53b0f0c28c82cffba93b14679d04c0f73424380c59958bda16a408591ed3a42a6556347a44d2e6ab0fb4b067f6d457a6f3a5eb1fac715693d7870ae6ca6a55125ea5a2a5aca1a698a66445a37513296e95136f7e061170708d39e16be5f2abedd98ab2cba18c952365e21e2bfb74c75596ae6b2f7ce5e0e85039f5e6cb73e5cbd51e067c47840b9a4bd73e0e52523b7e6aacf3f6386b0216e0a209ae4cd5c0da50b5823830c378d8d783582541300c4c1df70335b40664100504034fd4d9250be72c1ff60716d67b7aa86b9aae4596aa86da203070bf6f0ef4a8179bc4225aa00fd1b6851e4a2ac831e505e3b4e92ebaf41cdf5ef9ded29d4e7c5b961163e8e07163ae2ee2b54f014502e89dbab675943250aa8fca717ddb9b4c7de7c26ea66346121c6e1677301f314e3901342e71460429cf58044d43e7f385e33b73773203863cf2f31d82a3d1cfc71782bf296497857ca393d97ce21b03e96007b9c0692531f7cd07d23a3a20b6adffa79978dee40aa47159e2cd5f3128c790f47f2848bc5c35369f1551adb65bf5d0f6d7169e1682dbd46447df96b677859a2d8fc4a42479f8f1f80058063efc29ec6e2860e18e820c17b086610d792d1296a4195a9a49bb4f6c4bd54d03497029dec4ccde60773a758e3a23c9482e9e2a6a6ea86c541daaf8330882306baee39e42f40f93a0ba5421050000",
    ],
    [
      "ETag",
      "tE60XmyRleZp9zEOp8glbw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-96-1605310013007"
  )
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
      "ff8d504d6bc24010fd2fd36b028941a5820715b1a1c1b6a9d2d222b226631a4d32e9eea62584fcf7ceaea578ec6577f67d0cef6d07e7bc4a6102873cfb6c50b63719ea2733c4a89a422bbe6aaa148203a845c6caf1e2cd7f0d56b3fb607b7e596038dc3c84a36c3a65854a3eb01430e9e09863912a98bc77508912d9b6df4bbb9165baad0d12ae37cbd53266a0a4d400eb6d14cde6d1127ae7ca569fff65d9f50e9ce810e3112556099a14b5a413263a34059528eb025d458d4c5081155b2293d4d44212b98cb8b723d71f79c3c0f73c3ff0bc310b0b4a84cea962edf699b381262d8a98beb91f0c5820edc8558ff6fcb2b0e96026df46bbe6fc3f6e60b8ddefc279ab513d4ae2740a4d30ef12724126b8e6425a36e84022f897ef727d79f73f1ad42960c2010000",
    ],
    [
      "ETag",
      "7CZ1X3GAK3UkWCeI5TOI6g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "000002ff1dcf4b7282300000d0bb64ad0e46b0a43b0216115b8152113719c02818d07c2cbf4eef5ea7ef06ef0764454195228f3ba337f00a860ca25931f3b9868df04ceac1838c98e8ae5f2f66c759b1b4b63e1c05f21211e09494ad0acb66df74d24ee30bb6f54f3c45f5eac6c5db6ef7321eb44d67aac067448b02a8489ce4a2cebfb264b4d7428dd2751ab43f7f47ae3cd6ac9ab7566e6a4e4587cc719ba01f433d687d9632549d905baef17bb97dd8da0a9b6277ebe6978d07adf5d6e0e7bc8f85b430fc38e09e2f965a7dcaafea38ed185481ba8f591ef9ba6e7a219800daf34a5245aa677661203401ff73f218387df631cd2495e0f70fe248b71318010000",
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
      "Fri, 13 Nov 2020 23:28:11 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-97-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "f795b649d3366da56a546d1899da74e40143d314d98e130c691c62078450fffb6e1cca4048f029b6ef39f79cfbc833bae3658ae688f0fcbe61f5d3b75b41d009620ae7f07a3dbeb7e2df572b27bec0a3625d4dd4d6ff992f1680e02d4be27d55b09e144d4d999cc7613faf4553e15a881e24eacd9c9e3531c7b6659a966d9a0ef0242bb20d2fef807da35425e783c151bb9f0b91170c575cf6a9d8bfbe0f1e8683aa16b78c2a39782f39001539f85cf47b2128565c948b3804038d6475c2f6981760e13f3325a7ef53f739def773003f70ca30a5a229556b0b525051663c6f6a9d15cd9f91b6f9e6804277e3ae22838aa2d9974989f7ecc448b1c2897aaa987116ecb686e79fed82ed32f2767e12aeceddedb2bfda6de2ad1f1a57e76ee01a0a938269aeb1304ef5cd870be8a74c2a5e6af5a87d6e955f1ae47d1c4b4b0069c9ba60e298136c4dcd19c98843b3a93d2699c9089912678c6d62d2d9888d52c230f0b4a866e1529476ea0ca7536792d8263693d1689226d311b112929221b1294e67d8448713f45873c5d65c5642f2ae43e82af022378982d85f2d23579790e1a650ebce585bc05b8f0a0a04d027351dda2817a0d4b6dbf3233758ae22efd2ed26bc6139a64fe13dcc38c3856480c635344fb17a2b526818f2975b770d603db15fc7a044f33fcfa8ed79ebe24dcb5fe9110cb0b5abf4178551e0f93fb49d23e212178d863c74075481e51ba80d5c1ffe021296b4cb822e6237b846dd53c03256b3927e3d4d00ebc097ffda71f1010bab0f3252c11d7687ca5684d6acdb21aecb3db267d67032461a5cab0f317b323a76adcdd166647b56aa978abac587",
      "423bb146be822008e3f775b70eff000576987e78040000",
    ],
    [
      "ETag",
      "Y5q1UXWC7UQa4lDp6tMNJg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-97-1605310013007"
  )
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
      "0002ff8d92414f83401085ffcb7885046c4b95a48756ab36d2aa2db507639a15068a0283bb8ba669fadf9dc55a8d9ae80566866f96f71e6ce0292b63f0e1214b9f6b94eb8314f58d29a6a8ea5c2bbe55542a040b508b94495c1c5dd23a50cabd1db4c7a23c5cac6e5ed35e8f0915adb010e06f20c9308f15f8771b284581bc16515e17e5b2e92cd0ebca0c67e1743439e7bea0d8f4937910f407c110b6d67e31165a2c1bfe1f6bf75b0b1ee9618a094a2c23345a2a498f18e991b1a94451e5682baa65840a1ab879904aaa2b21896c9ed8c75ddbf59c4ecb751cb7e5385d06738a84cea864763e637da0498b7c4aafec123c066453b2e1a4b9bef0388b1b23a61c4d42afdde8fb0ab0b424cb71f937c87a57823fc307b68be03b270aaa4bbda7ce82abfe6fc771a69f479df6c3e10f42694e6a8f84a3f17016f6c7d786bbdf791fac35aa6b491ca44293a1ebb48f3a5dcf798ff5844cd4fc1e5fcb1a2d8804ff1d1799063f11b9c2ed1bb96d26147b020000",
    ],
    [
      "ETag",
      "eW8KoyLss1VB4Man2WhQwg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `id` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-98-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8554fd4fdb3010fd5722ef17d0fa91364dbf24c44a1b205a49599a82d036b58eeb14431207db29aa50fff79d130a5430902225f6bd7befddf99c2774cfd225eaa390ad1e722a36dfee78882a882abc82dddbe6f7abd1f549f7f16c3d202debe7f969624f1e8f8e00c17496c44916d3aae4b92054f667d3da4af03cc382f32a10557bdd6aa36dda56c3341b966976204fd2381ab3f45eb32b95c97ebdbed3aead385fc514674cd6084f5ef6ebeb663d13fc8e1225ebfb92755091f5cf458f634eb0623c3d9a4dc1402ea998d304b3182cbc662ec31ffbd4358693da0ac06b46282684e7a9d2b68082f03462ab5c14aca8ff840a9b6f3ed0d4193bc3c0184e665e70b0c0894e5e1c1a581af3b9a0328f55c558404d118be99c2d176524bb374efdc90544c0c12d96542e8ceb73c7770c63a1417f72d3b4a8716c0cbc91b19fef7ac6ccf39c69601c1c1f1a67fe6476699cdcec61c0f8924ac5d2c27680c3986acbcf9d75df9fa74ec00a6c94c179c76ce346d7ec8551d82151d7b2c3c8a461d80d3b36b64293f45ab4b50c29863ca5d98b2c9cf2d4a276d4ee2ecd30347b3dbb416cabd76cb56cdc8ee8b26561b3d56d5ba4d3b1d0b6821e055374c464c6252bdb8bae7d3770e6813ff38683c029ca8830b470549ad345bcf5a9a048007d52d756471907257d56ae1738fe6018b8574e391e63bac264337d800189702c29a0b1c00955545cf025340d5d4ea66ee04ebcc118328a33bfdc2124eaff7e7a4d083659d16555bcb556bb55e8ef005738ce0bc4bafc400d1b6db795ff530c7c7f7003b25808bcf998fe43fe025fac4a8b2f7a48abed564db4fdbb85a782e02a95ece8d7ccf16f50b9e5d3880a9a92af4707c045e0cb3fc2ee7a02162e28c848056b185422b50811b41c589614769fb37bcd66b38d0ab050ef6256dbdc9d8ce6d08c34a1a97aaea8bc9e45a37428972f2008c29c79ae7706d17f439fa64e1e050000",
    ],
    [
      "ETag",
      "h2+VDWB8wGvAc43KHFm5Ow==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-98-1605310013007"
  )
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
      "c24014fc97e7d136692588927010d32809225438882164695feb42db5776b7186cf877df2e1c3c78f0b23b3b6fe665665bd8c92a853e6c64be6f501daf7234330b62d44d61345f35551ac103342267e5bef93ebc4edfaf9787ee70ba9c09f9b2ebc5f960c00a9d7c6229a0df4226b14835f43f5aa844896c5baf95dbc83273ac2d339acca3a72866a2a4d41293c578fc301c4770f27ed9eaddbf2cab93075bdac498a1c22a419ba256b4c5c48c6c412dcaba405f53a312d4e0c46e902b6a6aa1887c66fcfb3b3fbc0dba9d3008c24e10f4585850228ca48ab58b37ce06868c2862fae27e70c302e52057cddc7970b4ed70412b8bff9a8576b6ba2c1c1e0deaa9224ea7d1060bce211fc906375cc8a8063d4804fff2b334e7f7e907c03c322ac2010000",
    ],
    [
      "ETag",
      "quzvOPY+Zv5BPZQaiMk7Rg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "db",
      "6e",
      "82",
      "30",
      "00",
      "00d07fe9b333ad0484bd21174160226538f742ba52a5721d454259f6ef33fb81939c1f40286542e46357b116bc024936c69aae831eeed413ed4850b71f67ae06916d4f2e9f33f77af844f78d9542b741379fd5412161ec1826aeac0ad32bbe70d7879ae6d32fd9f094b628ef59ddd1592dc5d2d7c77dd2da9853324b25c06727c1ed0b267742eafd32a8fac50adf75d924f1e2163313f22db59d12abd1a95c42cd170ecca6cea4c64187b9f63d4c88c64844f136dc31126e35cdf416f148e3de8b0a78d41ff51299c885de98e54850a5ba81156073cf072672fecc2aaa61acc0ff3c1f65cf9efd2734b001fcfe0151e7107618010000",
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
      "Fri, 13 Nov 2020 23:28:12 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-99-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85536b6f9b3014fd2bc8fbda04f22a49a468cd52baa225a403d26e9a26649c0b754b30c5a65354e5bfefda345dbb49dd276cdf73ee39f7c113b9e7e5964c49caf38706eafd873b919213028ae6f8baf1f7dfec117c7197c3fbdbfbd1d5e6532856f3d90c115cb324dd550574a4686a0672ba89ba792d9a8ad6427430516732e9f44e9dd1a0e738bd81e3b8c89350644b5ede23fb56a94a4e6dfba8ddcd85c80ba015975d26762feff663dfae6a71074c49fbada48d2ad27e5ff4632118555c94b34d84061a0975023bca0bb4f087b94dcfdea6ee72baebe6087ee40c2863a22995b685299828339e37b5c94aa64fc4d87c752091b7f416b1c544d1eccaa4a43b38b1b654d144ed2bb02ec2f5caf2838b75b89ac7fe3a48a2c5a5b79a7717ebe5661544d6cda5177a96a26901866bcdac33730bf082fa5b908a97463dd6cf5af9b941febf63d1049496d00613d739a5bdb13349b3d465d978304a3307d2749cba233a481d3619c2709b02459e11352c5a62cd597f30a43d27c918ed27c3f1689ba4ee90259374e4209bc1d8cdc8e184fcaab982732e2b2179db217213fab197c4e12658cc63cf9490d1a650e7ad315dc06b8f0a0b44d03b351d74940b54d2edf683d80be78bd8bff6da092f21a76c1f3de08c335a484034adb1790aea95d862c348305f79e7083613bb3a062599fe7822bae7dac5ab96bfd0631ca0b6abcc974471e8079f8d9d23e29a168d813cb60752a1e55bac0d5d1f7e221297b4cd42be6ebcf03b699f42c8a08692fd7f9a083681fffe6bc7c5d77f72a465a4c23bee0e935a84d5d0ee1037e51ed993fed8758801d7eaef1866ee1fbba673e88cb083523d57d42e3e16da8a35f20584411c7f60ba75f80d1b2a05d478040000",
    ],
    [
      "ETag",
      "UIyX/5eK7L4khk5PUBRoMA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-99-1605310013007"
  )
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
      "00000002ff8d92dd4e83401085df65bca511d23f21e905d56a89b5564aaf4cd36c6168a9c0d2dd45d2367d7767b156a3267a0333c337cb39070ef092e41138b04c56db12c5ee6285ea49173eca3255926e05cf258201a8d88ac8eda41d55d5fdc49e7983fda51dd99bfd7858f57a44c8708d1903e70071826924c1793e40ce32a4b590a765962feace00b52bf4701af8def88efa8c47ba1fcf4623b73f1ac0d1382f464cb145cdff636d7e3460c3973ec628300f516b2904df60a83c6d53b2ac48b1217929429450c3f58395e065c104e70d9a346cbb6175cc76d3324dab699a5d02531e3295f09cd8d994f481e28aa53eafc825740810754986e3fafa4ae324aa8de8d21b079d56adef2b40d2e224c5c5df20e95d33fa0c1fd82982ef1ccb7899ab33753b7a747f3b8e32fd3ceac60d063f08a928a93312780f8369e03e4c34373f79efef14ca89e014a4449da165b6aedadd8ef91eeb35d751d37b1c254a342064f4770c13054ecc5289c73747f683267b020000",
    ],
    [
      "ETag",
      "qP5dwwKP9UIEz/9d9jzNHw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-100-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f",
      "db3010fd2a91f70f93da2621a5692b21d6950c229514d20484b6a9751227189238d80ea843fdeebb381428fb8154a9b6efbd7befcee73ca13b5a26688c229addd784af3fddb2087510913883d3b3e12335f3533dbabfb54f93f02624f9af8becf01010b461095c5439e90a56f3988871b8e8659cd515e68c752151d7348cae39300e2c58989661d84014244f67b4bc03fa8d949518ebfa56bc973196e5045754f46256bc9ceb0ffb7ac5d92d89a5d07735759011fa07aa47398bb1a4ac3c0c17e0a016842f4981690e1e5ea949f46537778fe2a29701f881c604c731ab4bd9f88214312b539ad55c6545e327a47cbe59a0853373a681369d875eb0b7c245435e7dd6b0d0964b4e449dcb8eb682a2529a93254d566da4bad3bef9f3338880831b2c88586957a78eef68af472bed476d1816d18eb48977aced66713d2df43c6711687b479fb5137f1e9e6b5faf7730603f2142d252990f709493c6f87383dd3fefb5216009ca6d70691b036c0e8d519446769c0ead83283548140d23fb005b91118ffaa49f4404034f36d9150b97acb4b13130937df06e26163122b38fa1b1437b94c6077d6398240333b507833eda74d023a7921c53513141db26a32bdf0d9c65e087de741238aa8c1443238f5b734d116f7d4a281240ffa96bd3442903a5e6c65c2f70fcc934702f9d76486624c3f17a710f6392e25c1040638e0b22093f6309340d9dcf176ee0cebdc90c18eae6cfb70881c6df9f5e09c1ba525d96ea1f2d02dff54e94812de212e7b5823cb40b34a9c02bda6c3aff4e33f1fdc9354863cef1fa5d0cca693af957098557bbd6e656d2448dda76b78f363f37f0eb2078556d7674113afe356a8f7c92124ecaf8e3f101b00a7cfc75d8be5400c35b051d21610fd31a8b4625e6a49d5a5a28bfcfec91351c184881b97c1feb1bb6b5bd9e2647939114a494cf25b52f5575aa09",
      "d5e205044118364fddd4e6374f0e59e62b050000",
    ],
    [
      "ETag",
      "M8wi1lH/bqj7HdUhUelzQg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-100-1605310013007"
  )
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
      "97f5d136b9824a42c28340a36843b4822f8690a3ddd642db3defae1a42f877f60e6378f4e56e6e6676337307d8556d0e43d854e557877a7f55a27d752045d3d5d6f0a5a8350801a095253bfb229f4edaf727351fd06079fd3c2d166a518e46ec30d92736128607282aac7303c38f03b4b2411e5bafb5dfc836bb578e99cd17f1439c32d150ee88f93249eec7490cc7e0624cedfe35b23a06b0a54d8a056a6c33742994a62d6676e60a1ad9a81a43439dced080377ba1d4d429a9894266c2488830ba13b77d06515f88013b6bcaa4ada865f3f28dc381252beb947eb820f4d8a03de4ae853fbf99bef1251c8a7cb64badf7a7f59cb6fa5d38de5b342f9a389e41974c9c534ec825b7dcc8ea0e03c8247ff36365cfefe3099683d397c3010000",
    ],
    [
      "ETag",
      "30dDCnVJpN7o7U+KDfTpTg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "00000002ff1dcf516e82300000d0bbf45b0c2b13e9fe64c5601bd409a3e20fa9b510e840a0a088d9dd67f66ef09e800b21b54efbab9235f8000f0ed15ccc6963ba8bafaca5c390f510dbc9095a132f0f9471b64f0ab8751f2823c18639d44c1dbdcb6d27711316edfca0ba231777effbe96893c59872cbd863a7b1fd4a6cea2483cb72657419a96f388acd4a0ce56dede791c26b93c539eaafb1aa376e809429ba32241e61e43e90f148c56d4a48850b23f4fcd6928796866dbdf6b2edd9d87125f032d8c6e6192a4dd1f765a5c6e365292f6f27f86385930ed867aeeb3b980139364527755abcb2d602a119f89fa7fda391afbe2b79273bf0fb07b2d12df218010000",
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
      "Fri, 13 Nov 2020 23:28:14 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-101-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fd2b64f6d51628b49426cddaadb892b4d405aad96c366418061c05069941634cffbb97c1ba1a93f58999b9e7dc73ee07cfe88ed5195aa09415f71d6d9fbeddf2149d202a7101aff6a5db4efdd86dac283e673fb2a97e158ac7e51210ac67095c35251d09deb5848ac53e1a172def1adc723e824423d33047e6cc985aa661989661384014b4cc37acbe03fa8d948d58e8fa517c5c705e9414374c8c09afdedef58789deb4fc961229f48f9a3ac808fd0bd5ef252758325e2ff71138e8046d135a615682877fd42c3dfd987bcc70352e00fcc008c584f0ae96bd2f4841789db3a26b5556b47846cae7bb038abc8db78e35c2cbaeaa931a57f444cbb0c4897c6aa8761eeeb69a1f9cefc2ed2af6774112ad2fbced6abcde6df6db20d2ae2fbcd0d3244e4baab8da523b55b7002ea09f512159add4e3feb9577eed90ff79303d01a4051d828963ccb03937dc344f1d92cfad699a1b344de7a933c5566a10d7a67696520c3c25aa58b8e6b58d1dcb24f34992db9999d8a6932573d34d13cb7126c62473dc499ea3c3097a6c99a4674c345cb0a143e83af4632f89c37db05ec59e2a21c75d29cf06637d01ef3d4a281040ffa9e9d0471907a5bedd7e107be16a1dfb57de30e10d2d30798aee61c6392e0505346ea17992b65b9e41c350b0da7a67005613bb3c06055afc79467dcf7b17ef5afe468f6180bd5da9be288a433ff8a9ec1c1157b8ec14e46138a0062cdf406de0faf01790b0a54316f46bef85bfd1f014d29cb6b4265f4f13c02af0f5df76dc7c00c3ee838e907087e521a257212d1d9688a97a8f6cd79ecda648815bf92936778c63dbfa1c7d465ad15abe96346c3e543a8875e20d0441987fa0da757801c9b681437b040000",
    ],
    [
      "ETag",
      "4P9r5IT9p3STFiBd5/VRsw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-101-1605310013007"
  )
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
      "d14e83401045ff657c141248b535247da08adaa4c50ad49818d32c3020bab0b8bba84dd37f7716b51a35d1179819ce2cf75ed8c043d5e4e0415a958f1dcaf55e89fad21411aa8e6b45b756340ac102d4ac24f23a2caf02165cbde40597e9b50ce3683ff5c7632254768735036f0345853c57e0dd6ca06135d25a26785737abbeb340af5b338c93681a9e515f8bdcf4e17236f327b300b6d66e31679aad7afe1f6bb75b0bee451a6181129b0c8d96568a7bccf4d4d854ac6e39da4a743243053ddc3f28a5e85a2685b06962bb8e6bbb43e770e03a8e3b709c11915c644c57a22178199340d042331e8967b2094302645f92e3a2bf3ed1b8ca7b27a69c86c9f0a017f815206d45c571f5374882ef187d870fec3d83ef1cab45d7e81d753abbf07f3b8e42fd3ceac44f821f84d214d50e49a6f3204efcf9c270b7efde276b8d6a210525a9d084e83a074787a3a1f396ebb13059d37b3c2d3bb42063f47b9c571abc827185db57476e2bdf7c020000",
    ],
    [
      "ETag",
      "XNgVEaEVxdflrbXrNSR+bA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-102-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "22ef1710fd489a7e4b887590b1a092963485751f6a9df4520c491c6207d4a1feefbb3814e8d8861429b1efbd7befcee73c925b962c499ff86c759743b6fe70c37d522120e90a7707363f3367ddf1aff383876fe2e0819b67fcebc5e1212258c112344e23a80a9e670188fe74525b653c4f69c6791513550dbd5135da7acb3474dd3075bd834401513864c92dd2afa54c45bf5edf8ad7569caf22a02913b580c7cffbf5fb463dcdf80d0452d47735eb2823eaefa81e453ca092f1e4703a4107b9806c0e3165117a78a12efd8fbbb96b8cc6b51582ef59003408789ec8c217a6087812b2559ea9aca4ff4894cf571f64620dad634f3b1e4d1d6f6f41e382bcd8d7a8d0e6f30c441ec98ab6c0a24216c19c2d176524bdd53ebba3738ca0836b2a402cb4ab2f966b692f5b0bed47aeeb266847dac039d176b3d88e36751c6be2697b47fbdaa93b9a8eb54fb31d0cda5f82902c51e63dea4750187f6ab0fdf65c0b0295a85c06e71dbd4d8daedef343bf13845db3e5873af87ed7efb4a8e9eb41af09cda50f1479b2c8ae5834e189a17768d0327c30da409bd46f778d25744d9f82d9eef9d084462fd41b26904d853c644cc209132917ac6c32b9726dcf9a7beed4391e78962a23a4d8c893d25c51c46b9f128b44d07feada1451c651a93831dbf12c7770ecd9975639244358d1603db9c33109692400d134a33148c8cef9129b46c6a389edd923673044863af9f1162148fffbe30bc15ba7aacb52bdc9c4736de75419d8222e69942bc87df941688a5ec96653f9779a81eb0e66284db38caeff886139ed6641ff8b84c2ab5569732b6990426dbb6a90cdcf0d3e1582b7aacc4e2ea6963b23e5960b216490",
      "04ef8f0f8255e0fdbfc3f6a62218ef2aea08896b9cd640142a4106e5d4b258f97d62f75acd4e83287026dfc4da2af3f30d2d32420c897c2aa9bca9aa53452817cf200ce2b039eaa436bf010c7719c22b050000",
    ],
    [
      "ETag",
      "AIoJ3Y8PzM+wZs+wo3JoXQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-102-1605310013007"
  )
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
      "ffcb788564b1b18d243db44a94a4368ae5d498660b534a0bccba3b4449c37f77c01e3c7ada9d37dfbc7db31738974d0e21eccbe2b345dbdd14c86fc32541d756ece430d438040f907521e4711345f17d3c7be159fa187d1fa7aa358b623e17c26547ac358417389458e50ec2ed051a5da38ced767674148c3b3328f17a133d45890835e583b04e57abc5721541effd1933e77f8d7cf41e9c689fe0012d36190e298ca513661c0f0b3a5d9b0a7d47adcdd0c1088f8dc2526bb425f245f10375eb0753753709940a264acd84ac28d35c522370fa2ee180897595d0972c080aaef5b26374af96c4dd617eed88e5030d0fb30462dba20799965f7a2ef9b7ee7f0077a997aa82010000",
    ],
    [
      "ETag",
      "hTEEI9I7Mt7UDExh60upAg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "08000000000002ff1dcf4b7282300000d0bb642d8e0352a43b403e010591ca6f93c1103e02060915a1d3bbd7e9bbc1fb0119c6843134d286dcc12798335e5ee3b5d36f54d1cf7b7df4eba7a2287659deb8136df582c265729846c3736ad70b17ef44e6068b9cc1a26a822c75935d25151a36b9bd019df8168681c3cbd26e11a3af24f7efd5c3d3d9f8815ce77c2497c00d1be63d9a19893c576c86c96b6362044f48fdbd618942eb3697efd6ddd23c9a942d6eed2b364be89ff0512e0e1de2147a7d9889029fa41290f18a0f3119abd9828b65059a94a8384b2b2fefc65b2490ce9fc00a90575f0f84a1fa9d1544595e81ff391ae79ebcfb2ac9063280df3f3c2e3e5518010000",
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
      "Fri, 13 Nov 2020 23:28:15 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-103-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "3014fd2bc8fbb8268192b714ad594a5ba4846c405a75d3848c73a16e01536c524555fefb2ea6e95a555a2524b0ef39f79cfbe0993cf0624ba624e6e9630dd5fecbbd88c909014553bc75d7df77978f57b71b6bfc7567fd5aee374e1ea6b3192278c392342f33e84851570ce4741374d34ad425ad84e860a28e65da1d6b680e6ccb342ddb3447489490254b5e3c20fd4ea9524e7bbda378371522cd80965c7699c85fef7bbbd35e59897b604af6de6bf65046f63e51fd9609461517c56c13a0835a4215414e79861efe51b7f1d9fbdc5d4ef36e8ae01d6740191375a11a5f98828922e1695de9ac64fa4cb4cf371f247096ce223498c8eabc880a9ac389b1a58a466a5f8271e1af5786eb5dacfdd53c74d75e142cae9cd5bcbb582f372b2f306eae1cdf31148d33d05c63669ce9938707d4df8254bcd0ea6173dd28bf74c8fd38988680d212da60343287d41a9b933889472c19db833831218ec7f16840edd864933ef4b73150e46951cda2852862bb3f19d890446c120fa2fee9c08e26567f1c4dfac321433676dd228713f2547105e75c9642f2b643e4c67743270afd8db798878e2e21a175a6ce5b634d016f3d2a2c1041ffa9e9d044b940a5a6ddae173afe7c11bad74e3be125a494ed83479c7142330988a615364f41b5125b6c18f1e62be71cc17a623f8e4149a6bf9f49d3f3c6c59b96bfd2431c606357e9370942dff52eb59d23e29a66b586ecda0f52a2e53bac0d5d1ffe2012b7b4cd427e6e1cff96b4573e245041c13e9f268275e0f3bfedb8f908c6dd471da9f08ccbc364a3c22a689788eb7a8fecc9101fa2c195fa10b34fcd63db9a1c4d46c8a1502f25b59b8f95b662b57c056110e7efe9761dfe02b5c2dd617b040000",
    ],
    [
      "ETag",
      "IOBvGqHYU18+v1ZLyUEmTg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-103-1605310013007"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92d14e83401045ff657c8564496bab247da05ab586564ba9891ad3ac30b4abc0e2eea2214dffdd59d46ad4445f606638b3dc7b61038fa24cc1877bb17aaa51357b2b34335b44a8ebdc68ba55b2d4080ea0e12b221b76323f8c9ece270b261a71751ddf1461301b0c88d0c91a0b0efe06328179aac1bfdd40c90ba4b544e675512edbce01d35476388fa3f1f494fa42a6b69f2ec230188623d83abbc5941bbe6cf97facdd6d1d7890f71166a8b04cd06aa9947cc0c48cad4dcd8b2a4757cb5a25a8a185db072b25eb8a2b295d9ab81eebb85e8fed773cc6bc0e637d22739970236449f0624e02c148c3f348be904de811a0da921c67edf599c6226d9dd8723c8d7bdd56e05780b46522c7e5df20095e73fa0e1fd87b06df395ec8ba343bea24bc087e3b8e42fd3cea3888473f086d28aa1d128f27a3791c4c2e2d77f7ee7dd818d4974a52921a6d881eeb1eecf77bec2dd72369b3a6f7f846d5e840c2e9f7381306fc8ce71ab7afc8a5969b7c020000",
    ],
    [
      "ETag",
      "y0FS9RqJMU0iyiVYTZmLAQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `date` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-104-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "eb",
      "4e",
      "db",
      "30",
      "14",
      "7e15cbfb03522f4ed2f4262156da8c552a29a429acdaa6d6719c6048e3123b4c15eabbef24a140d905a952139fef768eed3ce17b9186b88f03113fe43cdb7eba9301ae61ae690caba3b3b320b1be0554ddbb178bc995f2eebe0eaf4e4e00210a96a2eb4dc2eb4ae619e3aa3f9f35e24ce61b9a495907a1ba415a75a34d6ccb20c4b008e90051f1249a88f41ee8b75a6f54bfd9dc9b376229e384d38d500d26d72febcd47b3b9c9e41d675a350f3d9b60a39a1fb89e2692512d647a329f41825cf16cc9d7542490e1951a069f0fb51b82ae1b31801f05e3943199a7bac805124ca69188f3ac54c5fd275ce67cf38067cec419fa68389dbbfed18aae0bf2ea18518596cb8cab3cd135b482a62291f0a508575565738fbe78d30ba840825baab85aa19baf8ee720b40aa9e62bf42327c4e2e8140ddc113a5418bb68eebacecc4747a7c7e8dc9bce2fd1d9e20003d143aeb448cbe03e0d125e847e1eeef8cf3d2d08544390aab8ec903635baa417444187455dcb0e22c283a01b746c6a0584f55abc15069c024f17ea258ba6326db58cae65849661b6a9ddb199159991c98d1e21ac63113b0cc39e6d3016e25d0dffca84e623a13652896ac0f8c61bfbced2f7e6ee70e03b651b1185218eaa7045136f736a681240ffe96b57548504a762b7c6aeef7883a13fbe76aa0332e13165dbd9031c9188268a039a6674cd35cf2e640843c397d3d9d81f4fddc10418e5ae5fee110af7bf3fbd12fceda69cb22efff1a86860f746f09a26790978ac1eb0494c522766ddb0f16e57fbb7d2c0f3060b70a75946b7ef6ad051bb55d0ffe253e2cbb72ae9ded7c085db4b0abcfbb9835f0dc3a5aad4f1d5dcf116b85af278c4339eb28f4f1080cbc2c71f87fd4505305c55f0511adee1c032",
      "55b8b08c570757accbbccfec5ebbd7317109cef4fb5ac730cdfd0e151a85225ff3543fb7545dd472524529572f2028c27973c7ee39547f039c416acd2a050000",
    ],
    [
      "ETag",
      "DBBbl3XbaskNMYLQsRjHCQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-104-1605310013007"
  )
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
      "41",
      "6e",
      "c2",
      "30",
      "10fccbf6d844720a6d25240e50210a42519b3687aa8a90499634e0648ded8028e2ef5d070e3df4d08b3d9e9d59cdf804dbaa296000abaadcb5688e3725ba570f12b4ad72962f4d8d4508009d2c5979fb917ecf1bd3dfc753ab8a43b54b6773351a0e5961f32fac250c4eb0ae501516069f2768648d6c5b2e4db79165eea83d338bdf27d349c2444d8527e274b1188d17133807bf6c7afb2f4b760e6043ab04d768b0c9d1a7d0863698bb992f6865ad1586965a93a3854edc0d4a43ad96862864268c443f8c1ec47d2f1222ea09f1c84a45b97415352c4edf381c3872522574e08270c702d341eebaeece7d47fb12579479fcd72cf2b3ecba707c74685f0c713c8b3e99b8a47c229fdc7123675a0c2097fccdcf95bbbccf3fa702ff50c3010000",
    ],
    [
      "ETag",
      "+YUzJnr4vNGsldwiqUIJlA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "000002ff1dcf4b7282300000d0bb642d0e4df8a53b10a940946ab1089b0cd21462a61008509c4eef5ea7ef06ef079455c594a26327580b9ec1bd84785dad63a97be6b19abea1fb81e49efbaaab54a6e5f3b56bccb37841f62521d87152e15a6837102870664e366d226edc6678b85edc2c375ce2cfef5671d655c6f639dd7ae952d58ebe9fc8a686c53296cbae3f5db1752e0f464345389189644ddbd8ddc9e278e4a9df96701b53f35807015d3ef5b7e412ebf6ecf44d1b6c92783622a44937bca59aec519ad8375f7b959328be76c113320b16b6a8131a269195f75c73c10ab045f28129ca1f596462bc02ff733ade257bf43d560e6c00bf7fcd1c96a118010000",
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
      "Fri, 13 Nov 2020 23:28:17 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-105-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "64",
      "f6d5b6544a699b346b53519b6da90b54a39b0d19860b8e0b0c32831bd7f4bfef65b0aec6647d6266ee39f79cfbc133f9c5cb84cc48ccb38706eaa72ff72226470414cdf0d5b9fa53d8f6cdddedf96573fb6d147820bd5d369f2382b72c498b2a879e144dcd40ce76413fab4553d15a881e26ea0d4dbb371c9bb63534cda1659a0e1225e4e99a97bf907ea754256783c141bc9f0991e5402b2efb4c14afef83c7e341558b7b604a0ede6b0e50460e3e51fd9a0b461517e57c17a08346421d4141798e1efe5193f8e47dee3ea7453f43f023674019134da95a5f98828932e55953ebac64f64cb4cf370712b86b77191a4ce44d5146252de0c848a8a2917aaac038f3b71b63e59d6dfdcd225c6dbd28585eb89b457fb95def365e605c5fb8be6b281ae7a0b9c6dc38d1370f2fa89f8054bcd4ea61fbdc2abf7468f571302d01a52574c1c831c7743831a7711a3b2c9d58769c9a10c793d8b1a9159b6c3a82511203459e16d52c5a8ad28a198de37112c1686c47a3d19446141c274a1c7b72ccace3649a30b23f22bf6baee094cb4a48de75885cfbabd08d427fe72d17a1ab4b486993abd3ce585bc05b8f0a0b44d07f6adab7512e50a96df7ca0b5d7fb10c57576e37e13564943d050f38e394e612104d6b6c9e827a23126c18f1161bf714c17a629787a024b31fcfa4ed79ebe24dcb5fe9210eb0b5abf49704a1bff2ceb59d03e28ae68d863c760752a1e53bac0d5def7f2212b7b4cb42beef5cff86744f3ea45043c93e9f268275e0f3bfedb0f908c6dd471da9f08ecbc364abc26ae89688eb7a0feca933b6a644836bf521e6d8d6a16d6d8e36231450",
      "aa9792bacdc74a3bb146be823088f3f774bbf67f01b15742307b040000",
    ],
    [
      "ETag",
      "7Vzm55YhZGPuZK4SNesNUg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-105-1605310013007"
  )
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
      "dd4ec2401085df65bc2dc936fcda848b22a82405114abc30842ced148adb6edddd8a84f0eece5644a3267ad3ce4cbfd99e73da033ca5790c1eacd2f573896a7fb146736f8b29ea52184db742e61ac101347c4de4ee755e34f7413f8f5762e05e761e5c3653bb6e97081d6d30e3e01d204951c41abcc703e43c435a8ba428b37c59750e987d6187b3703a1cdf509fc9d8f6e37910f8bd600047e7bc1873c39715ff8fb5c5d181ad5c4d3141857984564ba1e4162333b43635cf0a81352d4b15a1860aae1eac952c0baea4acd1a4e6b266cd6db166dd65ccad33d62652c8889b54e604cf6724108c345c4ce58e6c428b005595e438a9ae2f344ee3ca892d87e3b0d5a8047e05485b920a5cfe0d92e00da7eff0819d32f8cef14c96b93953d7c19dffdb7114eae7517d3f1cfc20b4a1a8ce48381c0d66a13f9a586e71f2dedb1bd4132529498d364497353acd768bbde77a256dd6f41ecfa8121d8838fd1eb7a9012fe142e3f10d695f05cc7c020000",
    ],
    [
      "ETag",
      "wxUp5yLDndblE198W10Srw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `stamp` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-106-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "de",
      "2f9af46329857e24c6e394f3482af528d5781f69173ae09e944576d134a6fffb0d60d59e77674202dd79efcd9bd9993e925b9eadc898843cb92ba1d87cf82542d222a05882a7aeadce4679726fdf5d1b81750793077b2293a32344f08a25d93a4fa12d45594420c7f35927294499b34288360ab5756ab5758b9a864ea96e503a40a284349ef0ec16e9374ae572dcedee92771221921458ce652712ebe7f3ee7daf9b17e217444a76f77376318decbe93f5381511535c6447f3193a2825140b58339ea28717ea2afcb8afdde16cdd49107ccf23605124ca4c55be50221259cc93b2a855c9f891d43e5f7d909933714e02ed643af78283255b57e4e5a1c6a4b6581420cb54b5b4251615f314167cb56c22f9adf6d99f9e63041ddc300972a95d7d717c47d39652a1bba5f6a3a4d400ed58b3bd536d5fc2f5b4b9e739b3403b383ed4cefce9fc42fb74bd8741ef2b908a67b5f380852954ae9fbaebbebdd48ac0143a69828b01b5983ea4a3300e07513c34cc30a61086c370603223a4d1a80ffd55080c79aa52af592c13d920362d930d74bab27ad404030c6a0d462bbd6799b1358ce308e23eb34643b26d9187822b38e5321792371d2657be1b388bc09f7b2776e0d465c40cbb78da98ab8a78ed53619108fa4f5ddb2aca0566aaaecbf502c7b74f02f7d269266402098b36b33b9c9198a51210cd0ab60605c5b95861d3c8c574e606eed4b327c8a8affd62879064fcfdf185106cf2bacbaa7e93c03dc73bb2cf2f6a0f3bd0254bcb1a75df7c901eedd136edb57533d07b63dd18ebfd0ea5f41bd96e5bff16b77ddfbe4643",
      "ac28d8e68f181669f52bfa5fb2d6f8fa57637ee7422755b6674f64fb738b4f8be0a235eae4ebdcf1af4973e4430c0564d1fb4385e03af0fe1fc66e79118ceb8b79701114c7198e6495252aa09965beaefd3eb1474373d42735b8506f6283de6877699546a5086bc8d45349cdf2d69daa42a57c06611047d073bd338cfe060c9724333e050000",
    ],
    [
      "ETag",
      "IAtG9pgvAqY3T6qeLwALsg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-106-1605310013007"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d50c14ec24010fd97f1689bec52c584840318a244825a241e0c21cb32d442dba9bb530921fcbbb38583070f5e76dfbe796ff2de1e6197576be8c12acfbe1a7487ab0cf93580147d53b097aba6ca2344806c32514eb57fcabb83eba49abd3f5bddd9ea866ff6fdbe28bcfdc4d240ef089b1c8bb587dec7112a53a2d8964bd76e14191feac08ca76fa387512a4449eb404ce793c9603819c129fa65ab77ffb22c4e116c6995e2061d5616438adad1162d8f43416fcabac0d853e32c7a68c5ed2073d4d4c611c5c2c45a7563dd55b789564a274add89b2206b38a74ac4f39984032636454a7b29081d11b8164ad74d7b7eb7742871418b80ff9ae9305b5c160e0f8cfec591c4f31892a973ca7b0ac9591ab16b30026be49b1f733ebf4f3f0b3e5b59c3010000",
    ],
    [
      "ETag",
      "N1sKi6A+3nSWOc12j1ut4w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "d9",
      "72",
      "43",
      "50",
      "00",
      "00d07fb9cf915142e99b3da5882d092fe6e25a42b996da32fdf7667afee03c014c53348ef1d4d5a8051f6083147f4c8f062645c6c95509cd6cea7875c051023795b720eeda0b9fd3269ca4126e6ab4308a6726ab4f079b9de9f2ae9479fbc915f466d6cb9563dfa16737bd38455e976377b569b49c342413d1ae1077dd5f89532c588ecad81ee714d44f1626ba55f9839d27fdf92d6c783df2c32c60a1368b8f34af16cab7c69bd90f526bec78f8225ba2d9efaece3f9665179dd42ace5397cdeec56888e80aa97dd314d296d5123bf8db13c001a01557031ae3ea95a5199e3f80ff793c6d18bdfa2282031ac0ef1f673ca92f18010000",
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
      "Fri, 13 Nov 2020 23:28:19 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-107-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b6f9b3014fd2bc8fbda04c80b12295aa3946ed112b212d2aa9a26649b0b7543708a4da7aaca7fdfc5345dab4aeb276cdf73ee39f7c133d989322513c244fe5043f5f4e55e32724640d31c5feddd83ebfef0e1d62ed66a37ea71ee5df9b3e91411a26129ba3f14d051b2ae38a8c976d3cd2b591f6825650713755cc7ebb82367d8771dc7ed3b8e87440545b614e50ee9775a1fd4c4b64fe2dd5ccabc007a10aacbe5fef5dd7eecd9874ade03d7ca7eaf69a38cb23f51fd5a484eb590e574bb4107b5822a813d15057af8474dd9f9fbdc5d41f7dd1cc18f8203e55cd6a56e7c610a2ecb4ce47565b292c933313edf1cc8265806f3d8e2b2a8f76552d23d9c5929d534d14f07b02ea3f5ca5a8497eb68358b17eb30d9ccbf07ab5977be5e6e57e1c6baf91e4481a5292bc070ada9756e6e215e503f05a54569d4e3e6b9517ee9d0e2e3601a024a2b688389e78ca8eb3b6396318f677e7fc8320718f39937a47de6f0f1000629038a3c236a58b494e5183700dc344b3ce6fbc9a0efb3c4f74759022c4b7b3de665a3c1801ccfc89f4a68b810ea2095683b446ea2451c2471b40de7b338302564b42ef4456bac29e0ad478d0522e83f351d9ba890a8d4b47b11c641349bc78beba09df01272ca9f360f38e38c160a104d2b6c9e866a25536c180967abe002c166623f4f414526bf9e49d3f3c6c59b96bfd2631c6063579b2fd9c4d122fc66ec9c10d7b4a80de4b13d90035abec3dad0f5f13722714bdb2ce46a1b44b7a47d8a20830a4afef934116c029fff6da7cd4730ee3eea288d775c1eae1a155e41bb44c2d47b628fc7bd5e8f1870a53fc4fa43f7d4b626479311f650ea9792dacdc74a5bb15abd823088f30f4dbb8e7f014916e9a67b040000",
    ],
    [
      "ETag",
      "/kq11K8eY/lOsk62cc7Q8A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-107-1605310013007"
  )
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
      "0002ff8d92614f82501486ffcbe963b8c1546c6c7ec0b2a4d40c716bb5e6ae704014b878efa566ceffdeb964d6aaadbec03987e75cdef7851dacd32202071669b2a9506c4f125477baf051569992742b7921110c40c512227b37ebcd7d7ebd59dbd672909c3e78d87ccddd6e9708192e3167e0ec204e318b24388f3b28588eb416f2acca8b79dd19a0b6a51e4e03df1b5f519ff348f7e3d970e8f6867dd81bc7c5882936aff97fac3ded0d58f1858f310a2c42d45a4ac157182a4fdb942c2f336c485e891025d470fd2011bc2a99e0bc41938665761a966db69b96695a4dd3ec1099f190a9941704cfa6241014572cf3f90bd9049b005197e438aeafcf344ea3da892ebd7160b76a815f01d216a719ceff0649f092d177f8c00e197ce758ceab421da9cbe1adfbdb7114eae751176ed0ff414845511d91c01bf5a7813b9a68eee9e0bdb755282782539212758896d93a6b776cf33dd773aeb3a6f7384a546840c8e8f718a40a9c986512f76fa22c33337c020000",
    ],
    [
      "ETag",
      "BKkqXmJqk61hHg+ZIe3zmA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `amount` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-108-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f",
      "db",
      "30",
      "10fd2a91f70f48a54d5adaa69510eb20b04e25853485a16d6a6de7520c495c6287a9a07ef75d1c0a74bf902225f6bdf7eeddf99c277227b288f409138bfb02f2d5875bc9488d80a60bdc6d8b539a5d7d8d3eb3c769fb8b82c72c754e2f0e0e10214a96a2e932813d258b9c83ea4f27f5452e8b25cda5dc43a13dc776f79c8edd6e39b6edb46cbb8b4405493c12d91dd26fb45eaa7ea3b1495e5f48b948802e85aa7399beec371e9a8d652e6f816bd5d8ced9c034aaf14ed6c34472aa85cc0ea613745028c867905291a087576ac43e6e6bd7054deb0b043f080e94735964baf485125c66b15814b95125fd27627cbef920136fe41d85d6d178ea873b739a96e4f9ae4595359be5a08a44d7ac3916158b0466229a5791e59d75128ccf30820e6ea80235b7ae3e7b8167591b0deb7b61db2db00ead817f6c6d6b0c7d6beafbde24b4760e77add3603c3db73e5d6f61d07c044a8bcc580f294ba0b4fddcdee19fa75a12a8462b5570d6b53bd471ed1e8b5997c76eabcd621b187359b74d5bcce6bd7dd88f1850e4e952ddb0682633de745baccd5c709b51276651db66ddd8e935991db92e6f71d8ef74edae1391758dfccc858663a1965289aac5e42a1886de2c0ca6fed120f44c1931c5361e57e6ca22defad4582482fe53d7ba8c0a8999caf31afaa1170c8ec2e1a5578dc8081694af26f73824314d14209ae634050df9998cb069e47c3c1986c3b13f1821c39cfbf906a148ffdbd32b215c2d4d97b5799393d1781076f68d830de4922685c13c541fc4a9b711b1aefd5b661004836b4c4df39cae7e8b61391d43ff4b068337abcae64b465266dbac9a64fd638d4f8de09daad4c9c5d40bae49b515400c3964fcfdf141b009bcff6fd8dc5304e34dc53c4ae31aa795ab320bcfa19a5a91",
      "1abfcfec5eafe73ac48073bd1d2bb5ddcee6784a8d521152c8f47349d53d359d2a43857a01611087cd1ffaa718fd0539251cd429050000",
    ],
    [
      "ETag",
      "5iGanWXdHbzU5Jseznm1GQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-108-1605310013007"
  )
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
      "14",
      "fc",
      "2f",
      "cf",
      "a3",
      "6dd84a44d38483182224b56a054d34842ceda316dabeb21f9286f0df7d5b3878f0e0657776decccbcc1e605bd41984b02af29d45d55ee4685e1c4850dbd268be1aaa3582076864cecae9d347f65ef56cacf4e36536a0496f67dff6c3212b74fa859584f000eb02cb4c43f879805a56c8b6e552751b5966dac631d378367e18274c549439229e47d1dd281ac3d1fb656bb6ffb22c8e1e6c6895e01a15d629ba148da20da666ea0a6a593525fa9aac4a514327ee06b922db4845e433e307e2d60f06e2ba1f0811f485b8616549a93405d52c9ebf723830646499d09e0bc2150b5407b9ebba3bbf3bda9538a385c37fcd02375b9c178e5a83fa5911c7d3e8928953ca7b72c90d3732caa207a9e46f9e14e6f43efe00f63fab61c3010000",
    ],
    [
      "ETag",
      "IOZdWm/uNrsM+d6oH/quVw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "02ff1dcfd97282301400d07fc9b33a41a048df104b86451089b8bc6442b86d3350a02c0a74faef757afee0fc202e04741debeb022af48a26be365762e53778abc7206c7268ed12626faa37b8c569e8c134f6e6404bb8dd84c3b3e40ab1a10a2d3cdc35454b4b6945099b2d7e39efc378dc4d368ece0fd91dfa1326f4287893bf2ce74e9213c36b23bd3c8c34c95dfedd06bec55db58f05d49ada6565fde9e60ee3ca95cc8f8c6eac25753228de0b9b286f861d0745b0f792caf5d319e03e053d350752a4834a070af79155523beed62576f5ac4a82ca64d197241f6881606c640b1d93cfacaa9be602fdcf593f35f0ec6f81b7d0a2df3f3935515b18010000",
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
      "Fri, 13 Nov 2020 23:28:20 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-109-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85535d4fdb3014fd2b91f74adbb449495ba91a5509235a9b429a02d33445b6e304431aa7b603aa50fffb6e1cca4048e329b6ef39f79cfb9117f4c8cb144d10e1f9ae6672ffed4110748298c639bcaa3dbf7b1e3bc3bbdbc5cfdd552ae3d5b5279fa75340f086a5f0b62a5847895a52a6269b753797a2aeb014a203893a7d7bdce99fda43a76fdb7dc7b63d202a56640b5e3e02fd5eeb4a4d7abda3783717222f18aeb8ea52b17d7bef3d0d7a95140f8c6ad5fba8d90319d5fb42f57b2128d65c94d3cd1a1cd48ac9846d312fc0c33f6a4ace3ee6ee72bcede6007ee294614a455deac617a4a0a2cc785e4b93154d5e90f1f9ee80d6fec29fc7161545bd2d93126fd98995628d13bdaf987511ad9656105eaca2e52c0e5661b29e5ffacb5977be5a6c96e1dababdf423dfd29814cc70ada975666e215c403f654af3d2a8c7cd73a3fcdaa1e0f3601a02482bd60613cf3ec5fd913d2619f16836728624b3192123e20db1436c3a76999b12868167440d0b97a21c8c53db739d619266999bb89ee325a43fc812d7f5c61e1b1297a4293a9ca067c9353be7aa128ab71d42b75110fb491c6dc2f92cf64d0919ae0b7dde1a6b0a78ef51438100fa4f4d8726ca052835ed0ec2d88f66f338b8f1db092f588ee97ebd831967b8500cd05842f334934b9142c350385bfae7003613bb3a06159afc7e414dcf1b17ef5afe468f61808d5d6dbe681d4741f8c3d839226e70511bc8537b401558be87dac0f5e10f20614bdb2ce87ae347bf50fb14b18c4956d2afa7096013f8fa6f3b6e3e8061f7414769b8c3f250d5a850c9da25e2a6de5736f03dbb8f0c58ea4fb1d1e0f4d8b6264793916d59a95f4b6a371f2a6dc56af5068220cc3f34ed3afc05684b791b7b040000",
    ],
    [
      "ETag",
      "syiXw935XWLKqPdrTOQ7rw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-109-1605310013007"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92dd6e82401085df657a594ca12a56122fd0dad6047f8a78d518b3c2a028b07477a9b1c677ef2cb5b6699bb43730337cb39c73e000db248fc08165b27a2e51ec2f56a81e75e1a32c5325e956f05c2218808aad8894f630bfbcea2dc7d16b14da5e5db6b7eef5aed32142866bcc18380788134c2309ced301729621ad853c2db37c517506a87da187d3c01f8ceea9cf78a4fbd1ccf3dcaed787a3715e8c98628b8affc7dafc68c0862f7d8c51601ea2d65208bec1500db44dc9b222c59ae4a508514205570f56829705139cd76852b3cc76cdb2cd66dd324dab6e9a2d22531e3295f09ce0d9940482e28aa53edf914db0091055498ee3eafa42e324aa9ce872300aec4625f02b40dae224c5c5df20095e33fa0e1fd82983ef1ccb7899ab3375e78ddddf8ea3503f8fba7583fe0f422a8aea8c0483617f1ab8c389e6e627efddbd4239119c9294a843b4ccc64db3659befb9f6b8ce9adee32851a20121a3dfe32151e0c42c95787c03bfebeb7f7c020000",
    ],
    [
      "ETag",
      "s6Mn+/CbOdzdc6L3s9kA2w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `id` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-110-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "7f6f9b3010fd2ac8fba795f2034a4348a4aacb12d6b1a5a423a45db44d893107754b708a4da7a8ca77df014ddba8dd2a22817defdd7b773ee781dcf22c227d12f2e4ae807cf3e14684a44140d10477cd626cb89b4e547cb3865fe79d60e68f7edc25272788e0254bd2d53a85a61445ce40f667d356928b624d73219a98a869187ad3b0f48e69e8ba61ea7a178912d278ccb35ba45f2bb596fd767b27de4a844852a06b2e5b4cac9ef6dbf747ed752e6e8029d9ded76ca38c6cbfa37a9a0a461517d9c96c8a0e0a09f9025694a7e8e1991a851ff773b7385db51204df730694315164aaf4852998c8629e14799595f41f48e5f3c507993a63671868c3c9cc0b0e9674559297871a95da6291832c52d5d0965854cc5358f0685947d6b7da677f728e1174704d25c8a576f5c5f11d4d5b96a05f85ae9b4c3bd506de48dbe7bb9e36f33c671a6807a787da993f995d689fe67b18341e81543cab6c07344ca1b4fcd85af7f5899604aad0461d5c74758b1ab6de0be3b0cb62dbec84b10e616887dd0e35439df58ee1380a81224f95d92b16cd4416dab1ad472658466483119b3605d6b32cdb8e2d84db5d2b66b6d905936c1be44fce158cb85c0bc9ebf6922bdf0d9c45e0cfbce12070aa32628a2d1cd5e6ca225efa54582482fe53d7b68c72814ae559b95ee0f88361e05e3af5788c21a16c33bdc30189692a01d134a72b50909f8b089b462e2653377027de608c8ceacc2f760849fa3f1f9e09c1665d755955ef52cb3aaef477804b9a1615e2befe2046876cb78d7fa718f8fe608eb234cfe9e6edf46fe6aff0d5aab6f8a4474ab5ddea886c7f6ff1d7207897eaece4fbccf1e7a4def221861c32f6fee820b80abcff9fb0bb9f08c61b8a3a52e11a2795c95285e5504f2c5f557e6b363e16b6aa02e7ea55acd7b1764753e62833c20a32f558527d3fab4e95a1423e81308883e6b9de1946ff02e169291521050000",
    ],
    [
      "ETag",
      "3uL1Iy5duK6CJY5TURDXqg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-110-1605310013007"
  )
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
      "4f4f834010c5bfcb788564b1a94d9af4208a4a42aa457ba9699a2d0c480b0cee2e18d2f4bb3bbbf5e0c18397fdf3e63793f7e604c7aacd610efbaafcec518d57259a957da4a8fbda68be3a6a3582076864c9e4247988e538f438ddcc36cf6188c3f2be5d2d164ce8ec031b09f3131415d6b986f9fb095ad920b7ed76ca4d64cc8c9d55e2e55bf418a52c34945b61b94e92db3089e0ecfd6aeb8eff6ad99e3d38d03ec50215b6195a179da2036626b601b56cba1a7d4dbdca5083835da154d4775211f9acf84120fce0464c278110c1448819933565d254d432bc7e657360c8c83aa52f0e08d70c28f7e4ac853b07bb2517627080f5f6772db0b5edcfc07034a85f14b13d8dd699b8b8bc23ebdc7022a37af42093bce6a7ca5cfee76f600b12c3c3010000",
    ],
    [
      "ETag",
      "3LFIayvue5Z7ZOBBevNDnQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "0002ff1dcfdd9642400000e07799ebea302563efb258ea14a654dc3883410833fe567bf6ddb7b3df1b7c3f80c431edbab06f4a5a830f3013a8ace2d5a11554c94d18ca8a25abbf2e6e39ec7870b2550f05c23547a77a1b3238163a336f8d3152ab92aeb18dd50bfed4986eb6be70bc8b6874cce1f5707be86c9051342feff8dc9ceffb74b2a23a8ab653ceaa54d50c788c64222a011e92062dd3e701216e08aa26f2b5fe84b3997739861695a9db7bd30489254ea2268f0eeff7fb069a36f6db2083b254d2e51963ddf5b84f6a16d2be3a9c7646003392dc6fb353ecc002d0eff6c169173eded9b5a4280bf03f0ffbb9a5efbe4a09a71cfcfe013f96690318010000",
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
      "Fri, 13 Nov 2020 23:28:22 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-111-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6f9b3014fd2bc8fbda0408794bd11aa5b48d96908e9076d33421632ed42d608a4db6aeca7fdfc5345dab4aeb276cdf73ee39f7c113b9e7454ca624e2e9430dd5e3a73b119113028aa6f87a7541cbf8771d5c2ffe7c71a00c2efc6f6e2f9dcd10c11b96a4799941478aba6220a7bb6d37ad445dd24a880e26ead8b6ddb187d6c0b12dcb762c6b84440959b2e2c53dd26f952ae5d4348fe2dd548834035a72d965227f7937f73db3acc41d3025cdb79a26ca48f303d5cf9960547151cc765b74504ba842c829cfd0c33f6a1c9dbecddde534efa608de730694315117aaf185299828129ed695ce4aa64f44fb7c75205b77e52e028389acce8bb0a0399c18315534548f2518e7fe666d2cbdf38dbf9e07cb8d176e1797ee7ade5d6c56bbb5b7356e2e5ddf35148d32d05c63669cea9b8717d48f412a5e68f5a0796e949f3bb47c3f988680d212da6038b286d41e5b932889462c193b8328b1208ac6d168409dc862933ef4e30828f2b4a866d1026bee8fe2811d0fc3381e4dc2fe30b6423a194fc2316514434ecfe98dc9e184fcaab882332e4b2179db2172e32f03370cfc9db79807ae2e21a175a6ce5a634d01af3d2a2c1041ffa9e9d044b940a5a6dd4b2f70fdf922585ebbed84579052f6b87dc01927349380685a61f314546b1163c388375fbb6708d613bb3a062599fe78224dcf1b17af5afe420f70808d5da5bf641bf84bef42db3922ae69566bc8be3d90122ddf626de8faf01391b8a56d16f275e7fadf49fbe443021514ece3692258073efedb8e9b8f60dc7dd4910aefb83c4c362aac827689b8aef7996d5bbdbed3271a5ca977b1c1c03eb6adc9d164841c0af55c52bbf958692b56cb17100671fe9e6ed7e12f5196019d7b040000",
    ],
    [
      "ETag",
      "PGapdxuTVCzK3epTGRXE2g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-111-1605310013007"
  )
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
      "00000002ff8d92d14e83401045ff657c1412485baa243ea056c5b4b5b698684cd36c61a8b4c0e0ee62d334fd776751ab51137d8199e1cc72ef852dacb232011fe6d9e2b946b93958a0be35c518559d6bc5b78a4a8560016ab160f2f97ef270bc4a1f0ee741741c5d8f96a143adf5c909132a7ec24280bf8534c33c51e03f6ea11405f25a4c795d94b3a6b3406f2a339c44e37078c97d4189e98777fd7e70daefc1ceda2f26428b59c3ff636dbab36049f331a628b18cd168a9242d31d6a1b1a94451e5682baa658c0a1ab879b09054574212d93cb15dd7b55dcfe9b45cc7715b8ed36532a758e88c4a86ef262c103469918f69cd36c1634036253b4e9beb0b8fb3a47162ca701879ed46e05780b5a5598eb3bf4116fc24f83b7c60ef197ce7444175a9f7d445ff26f8ed380ef5f3a8f320eafd2094e6a8f648140e7a9328188c0c377df77ebad1a846923849852644d7691f75ba9ef396eb1999acf93dbe96355a100bfe3dae320d7e2a7285bb5705b375737c020000",
    ],
    [
      "ETag",
      "qXSY9kfY+bAT9TJPjI0o3w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-112-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "eb",
      "6e",
      "9b",
      "30",
      "147e15e4fd69b55c80dc23555d96b20d2d252d8156dd45893126750b98daa65354e5dd77304ddbacdb2a450af87cb7736cf3806e591ea3318ad8faaea462f3ee8647a881a8c26b58fdc62fdffbc1c273be9a24ccb378e2abb27d7e74040856b124ce8a9436252f05a1721c2e5a6bc1cb020bce9b20d4b42cbb69f5cd5ec7324dab639a03204a9a263396df02fd5aa9428edbed9d796bcdf93aa5b860b24578f6b4debeb7db85e0379428d9def76c838d6cbfe17a9c728215e3f951b88004a5a4624933cc52c8f04c8da30ffbda2d86b3d61ac0f78c504c082f7355e50209c2f384ad4ba155d1f801e99c2f1ed0c29939d3c098ce432f3858e1ac22af0e0d2c8de5525059a6aa61aca0a984a574c9e2555d296e8d4ffefc142a90e01a4b2a57c6e517c7778ce7a595f1a334cd0e318e8d897762ecabb89e117a9eb3088c83e343e3b33f0fcf8c8f577b18881f53a958aec307384a6915fc71c0eeeb7dad085881735d5c0ecc3eb686e6284aa20149869d5e9498348a86d1a0873b9149465dda8d238a81a72a75cdc239cf077614c76480891d0fe33e8947e6a0679b761f27043487dd2ea8f523ab87b60df44b30454f982cb864f590d1a5ef06ce32f0436f3a091cdd468261902775b8aa899739153409a0fff4b5adaa8c8353b563ae1738fe641ab8174e7d4866748dc9667107c724c1a9a480c60267545171ca63181a3a9b2fdcc09d7b931930f4ce9fed10128dbf3f3c13824da1a7acf43f5a04beeb7dd60176880b9c961a725f3fa0490159d176dbf8b7ccc4f72757608d85c09b3f6ad04ebf5bd1ff62a1f1faad8eb9b3b450e5b67bb3d1f6e7167e0d04b7aa5647e7a1e35fa17ac9a7091534276f1f1f00ebc2db5f87dd4d0530dc55f0910adee1b41259b91041eb53cb329db7665b66c7",
      "ee7690060bf5aad619d9bbeda9342a459ad15c3db654df543da9aa54ca271014e1b0797aa7b6bf012f76989d2b050000",
    ],
    [
      "ETag",
      "ZoW+RTSNEK0cUnmdARtu/Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-112-1605310013007"
  )
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
      "6b",
      "834010c5bfcbf4aab0469a8090430c920a12125b4fa5848d4e8c7fc7ecae0d12fcee1d6d0e3df6b43b6f7ef3f6cd3ea02ada0c3c3817f9ad4735bce4688ed32546ddd746f3d151ab112c40237326b78bca0d5762572d37e5f7ed5a47f743e21fd76b26747ac54682f7804b8175a6c1fb7c402b1be4b1d349cd8e8c99a19b9470ff11ec82988586b249d82751b4f1a30046ebcf5857fd6be46bb4a0a4738c1754d8a638a5e81495989a705a50cba6abd1d6d4ab1435ccf0dcc815f59d5444362bb6e32c6c67295e5d4708c71562c5644da93405b50c27ef1c0e0c1959c774e70541c0b3f60783faa088dd3566cf0e5b6e697ad87020a37ab42095fc4b6f85f9adc71fcc0ff2ae82010000",
    ],
    [
      "ETag",
      "C2k3I70Gk6AjvqhlLwPUBQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "cb",
      "72",
      "82",
      "301400d07fc95a1d45b0a6bb82127c818f02e22623f106104548424becf4dfebf4fcc1f94167c6404aaa1e2554e81de9b381076cb0aa87b6b5e3e4118fee741de8dd3481fce4b3cf111c0e4be5b9425f43e7ab22120f691c96ed36e6c9c2b7664cba112d99ffb6979399699134bdc35c4df421ea071b33482a3bf634bbd46ee7f190d05b79e4797c816519998164474ef833ccc6586fb2c4331c03c25b5ef8a9a38a5d941a023ad5ce499fec9b6af6b1f07325b73898a6c76a23d2ab6b37ddb06cbb79c378d736fd6f5caf0c587ba765db668ef51419ea21e8ea4280a4c52b3bb630eea1ff3955ba8657df86b300817eff00926dfc0c18010000",
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
      "Fri, 13 Nov 2020 23:28:23 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-113-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d6f9b3014fd2bc87b6d1208a12191a215a5748d96908d9056d33421db5ca85b82336c325555fefb2ea6e9da4d5a9fb07dcfb9e7dc0f9ec883a83232254c143f1ba81f3fdc4b46ce08685ae0ebfdd20bce1b6f3b0f0e574e951de8e7048a6036438468598aeef625f4946c6a0e6abaddf48b5a367b5a4bd9c3443dc7717bceb9edb98e6d3bae6d8f91a8a0cc97a27a40fa9dd67b351d0c4ee2fd42caa204ba17aacfe5eee57d70180ef6b5bc07aed5e0ade60065d4e01dd58fa5e4540b59cdb61b74d028a853d85151a2873fd48c5dbccddd1774d72f107c101c28e7b2a974eb0b537059e5a2686a93954c9f88f1f9ea4036e1329c27169765b3abd28aeee0cccaa8a6a97edc837515af57d622ba5ac7ab2059aca37433bf0e57417fbe5e6e57d1c6babd0ee3d0d2949560b8d6ccba30b7082fa89f81d2a232ea49fbdc2a3f7768f1ef605a024a2be882e9d83ea78e6f4f58cec63cf75d8fe53630e6b3b1475d66f3c9084619038a3c236a58b49215b021cb26439e52e679e9c8f3219d5097a7fe904d7cd7f6f3319d90e319f9550b0d9742eda5125d87c86dbc48c23489b7d13c484253424e9b525f76c6da025e7bd4582082fe53d3b18d0a894a6dbb175112c6c13c59dc84dd84975050feb8f98933ce69a900d1b4c6e669a85732c3869128588597083613fb720a2a32fdfe44da9eb72e5eb5fc859ee0005bbbda7cc9268917d12763e784b8a165632087ee40f668f90e6b43d7c71f88c42dedb290afdb30fe46baa71872a8a1e2ef4f13c126f0fedf76da7c04e3eea38ed278c7e5e1aa55e135744b244cbdcf6cc776fdf1841870adff8e8deca1776a5b9ba3cd083ba8f47349dde663a59d58a35e4018c4f947a65dc7df7bab50d47b040000",
    ],
    [
      "ETag",
      "jL5A6u5UCAvF1ndvaKTegA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-113-1605310013007"
  )
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
      "83401085df65bca5c9926a3524bda05ab5e98f95d22b639a15868a2e0cdd5dda344ddfdd59acd5a889dec0ccf0cd72ce811dbce6650a013ce5cb558d7a7bb2447bef8a084dadace15b45a541f000ad5c32b9da18b519d27c22b66b31a579b5ba8e86f7dd2e132679c64242b0832c47951a081e7650ca02792d215517e5a2e93cb0dbca0d67713498dc705f50eafac97c340a7ba33eecbde3622aad5c34fc3fd61ef71ebcd05384196a2c13745a2a4d2f98d881b3696451296c19aa7582061ab879b0d454575213b578d2f2fd76cbef88b3b62f84df16e29c494589b439950ccf672c102c59a922dab04de830a09b921d67cd75cde33c6d9cb87230893ba78dc0af006bcb72858bbf4116fc2cf93b7c60870cbe73b2a0bab447ea7a7417fe761c87fa79d45518f77f10c6725447241e8cfbb3381c4f1df778f0dedb5a34534d9ca44117a22f4e2fcece3be23dd74b7259f37b02ab6bf42091fc7bdce616824c2a83fb379ee694847c020000",
    ],
    [
      "ETag",
      "qwslwKoUN0yv0PoUpqFRKQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-114-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85547f6f9b3010fd2ac8fba795f203121292485597a5ac434a494b48b36a9b12630c750b9862932aaaf2dd7798a66dd66d9590c0bef7eebd3b9f7942f72c0bd108052c7e2869b1fd74c703d44054e21876f3efc9f29bb7296d973ef6dcbbdbc80f97e9d5c9092058c51238cd13da14bc2c0815a3c5bc1517bccc71c1791312350dc36c1a7dbdd73574dde8eaba0544419368cab27ba0df4a998b51bbbd176fc59cc709c539132dc2d397fdf6a6d3ce0b7e478914ed43cd36c888f607aaa7092758329e9d2ce6e0a014b458d114b3043cbc52c3e0f361ee16c3692b06f086118a09e165262b5f9082f02c627159a8ac68f48494cf371f686e4fed89af4d660bd73f5ae3b422af8f352cb4d5aaa0a24c64435b4351114be88a85eb3a92df6b5fbdd90544c0c12d1654acb5e537dbb3b5d7adb5f6b3d4f52ed14eb5b17ba61d66715c6de1baf6dcd78e4e8fb5736fb6b8d4bedc1c60c07e4885649932efe320a195f1e7063befcfb5226009ca757065e97d6c0cf4611005168906dd5e10e934080681d5c3dd402743939a614031f064955db170c6b36180f59e15521202aa179aa4639afd61d009cc61a78bfb3dab630d8ca843d1ae811e0b26e919133917ac6e325a7a8e6faf7c6fe14ec6beadca883034f2ac365715f1d6a7842201f49fba7655947150aa4ecc717ddb1b4f7ce7daae87644a634cb6f3071893082782021a1738a59216173c84a6a1cbd9dcf19d993b9e02439dfce51e21d0e8c7d32bc1dfe6aacb52bdd1dcf71cf75c19d823ae71522ac8a6fe403807af68b76bfc3bcdd8f3c637208d8b026fff8841397db3a2ff4542e1d5aab6b9973450a5b65f75d0eed70e9e06825b556747570bdbbb41f59647235ad08c7c3c3e0056818fff0efb9b0a60b8aba02324ac615a89a8544841eba965a9f25bb30dddec770da4c0857c17b3fac3fdf15439aa8c34a5997c2ea9bea9aa5355a8142f2008c2b0b9eaa476bf01a6eb4a892b050000",
    ],
    [
      "ETag",
      "pXlWHRvuENew5NjhfTdWmQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-114-1605310013007"
  )
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
      "5b",
      "6b",
      "c2",
      "401085ffcbf43581a45e0a820fb5845610d1b4422f88ac9b315d4d32712f8a88ffbdb36b293ef66577f6cc37c3397b869d6a0a18c05a957b87fa7457a29dfb2247e32a6bf86aa9310811a0152593ea935cdd3dbad9bea09d54f371fd9e7e1c8743268cfcc65ac0e00c1b85556160f0758646d4c863ab950e1b19b3a7d62be3e95bf69ce52cd4547861ba984c1e47930c2ed1cd58bbfbd7c8f212c196d6396e506323d1bb68356d51dab10f6844dd56181b725aa281008746a9c9b54213c5acc469da8dd37ed2eba449927692e481c98aa4b08a1a8617af6c0e2c5951e574e48070cf800e2567dd84f3c0722f843804c07bbbedf5ff7aa9ef2d7f178e4e16cd4c13db33e89d2557974fe49d5b4e64b5c308a4e06f7e51f6fabefc00001ea697c3010000",
    ],
    [
      "ETag",
      "iZoum4wuPqdokciQImX1Yw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "1dcf476e83400000c0bfecd95888beb92dc688668ccb52724194a52834530d56fe1e94178ce603a22421c3108eed0f69c0175823061e93a3d9d1327f4b54f7626d48c70cd48af2f954ec5af5b6a8ce5448e99a93e7296a23c3aeefc86524a7d22a695244615bafb2e022f3a5e8c6d34b42fd955ec55a385b553c2f9923a783792fd32937a437ce023b5617567fd0aac72652586c413f9f9cc9dad195458fe88c8ad5f32b5bc24d4d55346b2c1cc5e1ce5ff9d9ca2e742636a756fc265833fa658b7d9f6aa5898310358422140eaabaa447c3d6662cdbe60d1c007977654f86b0dcb32c0fe101fccfc371edc8de9749d4931efcfe01573f449618010000",
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
      "Fri, 13 Nov 2020 23:28:25 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-115-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b6fa24014fd2b64f66b55a8206a62b6c6d2968de22e621fd96cc8305ee8b4c82033b4318dff7d2f43edb669b2fd02ccdc73ee39f7c10b79e4c5868c49c2b35d0dd5fedb8348c809014533bc1ddd325a3cca6bf67c7957f7f7e68fe87607d9648208deb024dd963974a4a82b0672bc5e75b34ad425ad84e860a28e65391d6b603a7dcb34adbe69ba489490a7735e3c22fd5ea9528e7bbda378371322cb81965c7699d8beddf79e4e7b65251e8029d9fba8d94319d9fb42f57b2e18555c1493f50a1dd412aa18b694e7e8e11f75939c7dccdde574dbcd10fcc41950c6445da8c617a660a2487956573a2b19bf10edf3dd075979736f16194ce4f5b6880bba85136343158dd5be04e3225c2e0c3fb858868b69e42f837835bbf216d3ee6c395f2f82957173e5859ea1689283e61a13e34c9f023ca0fe06a4e285568f9aeb46f9b543fee7c134049496d00663d71c506b688e923471593aec3b496a42920c13d7a1fdc464231bec4d0214795a54b368218aa195a676df3a8d531b686c0fd234a6ae3d8a2dc719baa736758796430e27e4b9e20aceb92c85e46d87c84de8475e1c85eb60368d3c5d424aeb5c9db7c69a02de7b54582082fe53d3a18972814a4dbbfd20f2c2e92cf2afbd76c273c828dbaf7638e394e612104d2b6c9e826a2136d830124c17de3982f5c47e1e83928c7fbf90a6e78d8b772d7fa34738c0c6aed26fb28a423fb8d4768e886b9ad71af2d47e90122ddf636de8faf00791b8a56d16f26bed8577a4bd0a21850a0af6f53411ac035fff6dc7cd4730ee3eea4885675c1e261b155641bb445cd7fbcab6f03932890657ea53ccb107c7b635399a8cb08542bd96d46e3e56da8ad5f20d84419c7fa0db75f80b3d17aaee7b040000",
    ],
    [
      "ETag",
      "9XcanksVcwGYu3y0JTXqeg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-115-1605310013007"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d925b4f83401085ffcbf80a11a41725e903555a9bf4664b6d8c31cd1686960a2cee2e364dd3ffee2cd66ad4445f6066f86639e7c01e9e933c021796c9eaa544b13b5ba1bad3c50465992a49b782e712c100546c4564f7ca1a39f3f361a78e81ff70e1dd3bcb797bdb6a1121c335660cdc3dc409a69104f7710f39cb90d6429e9659bea83a03d4aed0c36930e90dbbd4673cd2fd70d6ef7bedbe0f07e3b41831c51615ff8fb5a783011bbe9c608c02f310b59642f00d86aaa76d4a9615299a9297224409155c3d58095e164c706ed2c4b4edba6937acba635b96ed585693c894874c253c2778362581a0b862e9846fc92634081055498ee3eafa4ae324aa9ce8b2370c1ab54ae05780b4c5498a8bbf4112bc66f41d3eb06306df3996f1325727aad31f79bf1d47a17e1e75e305fe0f422a8aea8404bd813f0dbcc158734f47efed9d4239169c9294a843b4adda65bdd9b0de73bde63a6b7a8fab448906848c7e8fdb44811bb354e2e10d5791527c7c020000",
    ],
    [
      "ETag",
      "G90O3W/NF5eTEY2AV3bWBw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `date` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-116-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8554794fdb3014ff2a91f70f483d9236a48784584733960d5248530e6d53ebb82fc590c6c5766008f5bbef39a11c631b52a5267ebfeb3ddb7920d73c9f933e49f8e2a60079ffe14a24a44640d305ae4e325fd25f998a87c1b92beef4b7afe78973b2bb8b086e588a2e5719d495282403d59f8c1b0b298a159542d451a8ee385eddf1ec9db663db4edbb63b485490a5873cbf46faa5d62bd56f3637e68d85108b0ce88aab0613cba7f5e66dabb992e20a9856cdd79e4db451cd775cf732c1a8e622df9d8c3141a1404e61497986199ea9f3e4e36bed06a7cbc602c1b79c01654c14b936b95082893ce58b4296aaa4ff40ca9c2f1ec8d83ff4f7636b7f3409e3ad195d1af26cdba2ca9a4e25a822d3356b864da53c83299fcfaacaeadafa1c8d8eb082092ea90235b3cebef8916f59b339d530b37e14b6dd66d69e350887d66b8520b42661e88f636b6b6fdb3a88469363ebd3c52b0c469f83d23c2f83c734c9c0847e1c6ef0764f0d816a0c5215a71ddba34ed7ee2569d26169b7bd93a436244937e9ecd07662b39e0bee3c018a3c6dd44b16cd45ce3ca707768ff5da09ebf6a09bb4bae0b513b7e3ba0eae76690b651c8791758ddc49ae61c8d54a285e0d989c4541ec4fe36812ee0f62bf6c23a538c46115ce34f132a7c62611f49fbed6a6ca053a99dd0ac2d88f06fb7170ea5707e4101694dd8f6ff088a4345380682ae91234c82331c7a191e3d13888835138384446b9ebc71b8422fdef0fcf84f87e554e5997ff64681a58bf103ca55951026eab07d2b25b76dd6ed59d1db25ed7fead3488a2c105ba5329e9fd1f35ecc8730dfd2f3e25be7cab926e7c1d62dc9e5290f5cf35fe6a042f55a54e4e267e7441aaa508529090b3f74f1082cbc2fb1f87cd4535df9eb1f1511adff1c032655c9884eae0f26599b7623bb6e73a2e29c152bfa9795e6bb34346c328c21272fdd8527551cb499952a19e4058c4f31606e101567f03d7ee8fc92a050000",
    ],
    [
      "ETag",
      "UlEraxlsTDIX4owtKJXb1Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-116-1605310013007"
  )
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
      "c2",
      "40",
      "10",
      "85",
      "ffcb786de3d62a26241cc0a03612522b188d216429d35a683b75770b6948ffbbb38b070f1ebceccebef966f2de9e605fd45b18c2a6c8bf5a54dd458ee6d91609eab6349aaf866a8de0011a9933f9145f0f16f15b145ebebe77dd31d6fa5e4cc6a311133afdc44ac2f0045981e556c3f0e304b5ac90c7d66be5363266bac62ad17c317d98262c54b4b5c27c399b8d27b329f4deafb166ffaf9155efc18e360966a8b04ed1ba6814ed3035910da865d594e86b6a558a1a1cec1ab9a2b6918ac867c50f82811f0cc44d1808118442dc3259522a4d4135c3cb173607868c2c133a7240b86240b992b366ee3cb01cba100707586f7ff702db5bfd2c9c740675ac88ed69b4cec4d9e51d59e7861319d5a207a9e46f7e2cccf9dd7f038cb10a9cc3010000",
    ],
    [
      "ETag",
      "KP46TPXI3/VYyywPssF0BA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "00000002ff1dcf4b7282300000d0bb646d9d34045bba0b19fe1fa188b6d964f804442a464084767af73a7d37783f202b0a310c7cbcb4a2036f60c990b62ed69e84ba1a0b1a97d581b404e131324e7e40691cc3ca1aa0b83d6785c77363f0764a37db3575dd62d3ec890d5d53b06d4fe9ed8e0f4e929c2fec53ba104d169b9ecc2a75a8779c72cb6d95772b2fa5ca9a8f81a260173a18f6aa97a6cd92bbb6b67408eb57d5a1ba1686a3e9bccc1dbf6f615d938a9e976f9c6068c8b6ae7c248260afdba11636e62b4684f8cb864527caf85789f42c9aa2db551e8927c338062b2066d9f462e0cd23aba89ab602ff733e2e523cfabac87ad183df3f21829ffa18010000",
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
      "Fri, 13 Nov 2020 23:28:27 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-117-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85535d6f9b3014fd2bc87b5c939892943452b446295d9102d90869354d1332ce85ba259862932aaaf2df77314dd7aad2fa84ed7bce3de77ef04c1e44b92113928afcb1817affe55ea6e484806639be8ae05a7cf575f938bcc9b3bddb84639be74fd3292244cb526c5b15d053b2a939a8c97ad5cf6bd954ac96b287897ab6edf6ec333a726c4a6d875217890a8a6c21ca07a4df695da9c9607014efe752e605b04aa83e97dbd7f7c1ee7450d5f21eb85683f79a039451834f54bf1592332d64395dafd041a3a04e60cb44811efe5137e9c5fbdc7dc1b6fd1cc13bc181712e9b52b7be3005976526f2a63659c9e499189f6f0e64e52dbc796c715934db3229d9164eac0dd32cd1fb0aacab6819587e78b58c8259ec2fc36435bff682597fbe5cac837065dd5e7b916769961660b8d6d4ba30b7102fa8bf01a54569d4e3f6b9557ee990ff71302d01a51574c1c4a567cc1ed3f3344b5d9e8d9d519a5148d371ea8e9893527e3e84e12605863c236a58ac94e5f990da29634e72b6e13419d2d371321e8d68e28c2860926ce89ea6e470429e6aa1e152a84a2ad17588dc467eec2571b40ee7b3d8332564ac29f46567ac2de0ad478d0522e83f351ddaa890a8d4b6db0f632f9acd63ffc6eb26bc809cf1fdea11679cb14201a2598dcdd3500772830d23e12cf02e116c26f6e3185464f2fb99b43d6f5dbc69f92b3dc601b676b5f992551cf9e17763e788b861456320bbee402ab47c87b5a1ebc31f44e2967659c8cfb517fd22dd530419d450f2cfa7896013f8fc6f3b6e3e8271f7514769bce3f270d5aaf01aba2512a6de17b64d5d7bec1003aef58798439d63dbda1c6d46d842a95f4aea361f2bedc41af50ac220ce3f34ed3afc051ce75f6d7b040000",
    ],
    [
      "ETag",
      "iMHi+Itnq4Vgfy7uN81cgw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-117-1605310013007"
  )
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
      "1085df65bc2db10d02da840b44549282524a62620859db2914db4edd1f0921bcbbb315d1a889deb433d36fb6e79c7607cf5999800f4fd9f2c5a0dc9e2c514f6c11a232b9567caba854080ea0164b26072f17fdc943e01a43b34d759a86577793cea6db6542c52b2c04f83b4833cc1305fee30e4a5120afc5949ba25cd49d037a5bd9e1340a87e31bee0b4a6c3f9e0541ef3218c0de392e26428b45cdff636dbe77604d4f21a628b18cd16aa924ad31d6436b5389a2cab1a1c8c81815d470fd6029c95442123578d2f0bc4ec36bbbada6e7ba5ed3753b4ce6140b9d51c9f06cca0241931679481bb6096d06645db2e3b4bebef2384b6a27b61c8ea3f6592df02bc0dad22cc7c5df200b5e09fe0e1fd82183ef9c28c894fa485d0777bddf8ee3503f8fbaea45831f84d21cd5118986a3c134ea8dee2d373f78bfdc6a54f7923849853644cf3d3b6f75daee7bae7db259f37b7c2d0d3a100bfe3d6e330d7e2a7285fb3781c4797f7c020000",
    ],
    [
      "ETag",
      "Eq9CQXL0uuoUwp/fRDOQ7w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `stamp` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-118-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8554fd4fdb3010fd5722ef1790fae1f433ad845829198b68d32e4d41659b5ac7718a4b1287d88155a8fffb2e09053ab621454aea7befddbbf35d9fd01d8f7dd4471e5fdf672cdd7eda080f551053640da7fea2f30bdbede6d9e5a67779ff35d9dce867f5c7931340f09c25499484ac2a45965226fbf3596d9d8a2c21a9105510aaeaba51d53bb8ddd431d69b1877812859188c787c07f45ba512d9afd7f7c96b6b21d621230997352aa297f3fa43a39ea462c3a892f5c39c754823eb1f643d0d05258a8bf8643e03079964e992458487e0e195ea7b9f0fb56b9c44b535801f3865845291c52af7051254c4015f6769a18afa4fa8f0f9e603cdcc913974b5e1646ebb472b12e5e4d5b146a4b65ca64c66a1aa682b282ae0215b727f5546923bed8b331943041cdc12c9e44abbfe6a3aa6a6ada402772bed478671936aa7dac03ed70e252c5b9bdbb63973b5a3d363edc299cca7dad9e20003de7d26158f0be72ef14296bb7eeeaef5fe52730251e0a40c2ebbb8437403f7bcc0ebd2c068b6bd0033cf33bc6e9b343d4c7b2dd6f23d4680a772f5824562119306c646c7a00cb73d8289d7327c820d4a3add5ecbf73dd2c37ac7efe92db4aba0c7942b76ce6522242f3b8cae1dcb3597ae33b78703d72cca080874f1bc349717f1d6a7822201f49fba7679940bc8945f9765bba63318bad695594ec888ad09ddceee614602124a066892928829968e850f4d43d3c9cc72ad893d1801a3b8f6e91e2151fffbd32bc1dd26459755f146ae35863b1a8ca785873de88a8459817a283f500337701537aa7adbd51b7dbdd9d75b358cf10ddaed2aff161f38ce600186489a92ed1f3128b2d3cae97fc95ae08b5fa5f9bd0b1de5d95e3ca1ddcf1d3c15048b56aaa36f73d359a0f2c861014b594c3f1e2a0017818fff30f6cb0b60585fc8038ba038cc309579169ab272967954f82dd93a36f4b6810a70aadec55addc6fed2728d5c91452c56cf2595cb5b742a0f65f20504411841dbb22f20fa1b7e4f917a3e050000",
    ],
    [
      "ETag",
      "dY6x0N53BKj9KqHpjZ1B/w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-118-1605310013007"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d904f6bc24010c5bfcbf49a40566b15c14395508560db18b15044d638c6983f93ee6e1411bf7b67d71e7ae8a197ddd937bf19dedb2b1479bd83216cf3ecab457579c8d0bcdb2246dd9646f3d550ad113c40233326175331480e1ffdc74927ae7af56bb22a93e23c1a31a1d30356128657d8e758ee340c3faf50cb0a796cb3516e2363e6d25865364fc2973066a1a29d15e6cb287a1e4721dcbc5f634df1af91f5cd83236d63dca3c23a45eba25174c4d4cc6c402daba6445f53ab52d4e060d7c814b58d54443e2bbe10035f3c05bdae0802d10d823e9325a5d2e45433bc5cb03930646419d39903428701e54aceba77e789e5ae0b717280f5f6774fd8defa67e1f86250bf29627b1aadb3e0ee7242d6b9e14446b5e8412af99ba7b9b9bf6fdfd43c65f6c3010000",
    ],
    [
      "ETag",
      "SH18ThX74C2Rm5nOTWlTkw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00d0bb64ad0e0aa874c72790e16381b110dd301802a242232635e0f4ee75fa6ef05ea024843e1e05ffbed21e7c80b15c190bb2089862e909b99dd6ddd439a4151866db3b1acf5658282955e5ae09aa2d7e8a8ddd4b2f43669cdd63a34375f51c84311de767651787b027cc6e3abeb32e2cf6349eb74e6f9acb7da4e1b5c57e9a3cd46e9fb0efe6ae23d38929583d373543120d1b8fc8b22ba3f280ae1b37d38e85806275fc0afd8070979c20438278c2c6b5961969754a782b49cee1b2864a146807c791de7a6f2736f4cdc0bfe815f6f1b5013340256b07fa28da7756d50d6306fee7051f197df72d5a0e7400bf7f95d1706418010000",
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
      "Fri, 13 Nov 2020 23:28:28 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-119-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "da2426ef448ad62ca52d52423a20ada66942c6b950b704536c327555fefb2ea6c95a555a3f61fb9e73cfb90f5ec8a3c8b7644a62913e55503e7f7990313923a0598aaf5777c9b05bee07df6e96125892fd19b82a98cf668810354bb15d91414bc9aae4a0a69ba09d96b22a5829650b13b56c7bd2b28774d0b329b57b948e90a8204b96227f44fabdd6859a763a47f1762a659a012b846a73b93bbd77f6dd4e51ca07e05a75de6b765046753e51fd9a49ceb490f96c13a0834a4119c18e890c3dfca36ee3f3f7b9db82edda2982f78203e35c56b9ae7d610a2ef344a45569b292e90b313edf1c48e02c9d4568719955bb3ccad90eceac2dd32cd2cf055897fe7a65b9dee5da5fcd4377ed45c1e2da59cddb8bf572b3f202ebeedaf11d4bb33803c3b566d6b9b9797841fd2d282d72a31ed6cfb5f26b87dc8f83a90928ada00946233a64f6984ee2241ef164dc1bc40985381ec7a301ebc5944ffad0dfc6c09067440d8be532e7c990daa33e8b6837ee477dca86d198331671d852b0a1db1dc78c1ccec8ef5268b810aa904a341d2277be1b3a51e86fbcc53c744c0909ab327dd118ab0b78eb51638108fa4f4d873a2a242ad5ed76bdd0f1e78bd0bd759a092f2165fc3978c219272c5380685662f334942bb9c586116fbe722e106c2676730c2a32fdf942ea9ed72edeb4fc440f7180b55d6dbe24087dd7bb32768e885b965506b26f0ea440cbf7581bba3efc42246e6993857cdf38fe0fd23cf990400939ff7c9a083681cfffb6e3e62318771f7594c63b2e0f57b50a2fa1592261ea7d65db7442ed2131e0527f88754d",
      "e6d3c6d7196107b97e2da9d97cacb411abd40984419cbf67da75f80b24c976c37b040000",
    ],
    [
      "ETag",
      "GWf62rv5BPLoeaflz5IsSA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-119-1605310013007"
  )
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
      "8d92d14e83401045ff657ca509a8ad4ae2036855625b6b8b898931cd1686165c18dc5d6c9aa6ffee2c6a356aa22f30339c59eebdb081a7bc4ac18779be786e50adf716686e6d3141dd48a3f95653a5111c4023164ca6d7611a7a54decbe2aa88f68320286ed5eaf494099d2cb114e06f20cb51a61afc870d54a2445e4b483665356b3b07ccbab6c3693c894697dc9794da7e74371804e1a00f5b67b7980a23662dff8fb5c7ad0305cd2798a1c22a41aba556546062226b538bb296d8d1d4a80435b470fb60a1a8a98522eaf0a4e379271dafe7760f3cd7f50e5cf7884949893039550cdf4d59201832424e68c536a1c7806a4b769cb5d7171ee769ebc496d128ee1db602bf02ac2dcb25cefe0659f052f077f8c0de33f8ce89929acaeca88bc14df0db711ceae751e741dcff4168c351ed90381af6a771301c5beef1dd7bb836a8c78a38498d3644cf3d3cee1ef5dcb75ccfc866cdeff18d6ad08144f0ef71951bf03321356e5f01eb7248677c020000",
    ],
    [
      "ETag",
      "dKBdB1omXljHjI2AAAjQrw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `amount` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-120-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85546b4fdb3014fd2b91f705a4d23a4ddf1262a50456a9a42c4d8bd036b5b6e304431a87d86174a8ff7d370ee5b50752a4c4bee79c7beef5751ed1ad4843344054c47705cf379f6e244535c435896177428f1fe68e6cfe8a17591a3e04e902331c1f1e0242942c45d659c20f942c72c6d5603eabc7b92c32924b7900420776131fd81ddc766c8c6d07e32e10154fa289486f817ead75a6068dc62e793d96324e38c984aa33b97ede6fdc371b592e6f38d3aaf1366703d2a8c607598f12c98816323d9ccfc041a178bee46b2212f0f0420de9e7b7da7541d6f518c0f78271c2982c525dfa020926d348c4456e54d1e011199faf3ed0cc9db8a3c01a4de75eb0b722eb92bcdab788b296cb9cab22d1356b05454522e14b11aeaa48766b9dfad3738880836ba2b85a59975f5cdfb5ac9d86f5bdc0d861d69135f44eacb71a63cf9a7b9e3b0bacbda37debcc9fce2face3ab3718301f72a5456aac078426bcb4fdd4def19fa75a1288062b5570d9c51d62f7709f46b4cba29ed3a611e694f668b74d1c8a59bfc55b21e50478ba54372c92cab40f411a86761ff376445bb8d30ba9ddec92c8897ad4e9b75b11eb854eb38db635f433179a9f08954925aa16a34b7f1cb8cbc09f7ba361e09a3222026d3ca9cc9545bcf6a9a14800fda7ae6d1915123295e735f602d71f8e82f1c2ad4664c263c236b33b189288248a039ae464cd35cfcf65084d4317d3d938184fbde10418e6dc2f76088506df1e5f08c126335dd6e68d4e27d361d06919073bc8822485c1dc571fc8aeb701b1adfd5b66e8fbc32b484df29c6cdec5a09c8ea1ff2583c19b5565f339232ab3ed564db4fdb185a786e04e55eae8ebdcf5af50b5e5f388e73c651f8f0f804de0e37fc3ee9e02186e2ae4511ad630ad4c955958ceaba9156be3b762dbb8dfebf79001e7fa5d0cc49b78773ca546a9c8d73cd54f2555f7d474aa0c15ea19044118366fec9d41f437aecec8a629050000",
    ],
    [
      "ETag",
      "LbBxU3o2zgVpndxTnV0c0g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-120-1605310013007"
  )
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
      "414fc2401085ffcb78a44db625a869c2419428a6365ac08b216429432db49db2bbc5340dffddd9c583070f5e7667dfbc997c6f7b3814f51622d814f9b145d55de568de6c91a26e4ba3f96aa8d6081ea091393b8b97c1fc217c9f1c67835c8cf6b7f57372a27c3c6687ce3eb19210f5b02bb0dc6a883e7aa865853cb65e2bb7916da66bac324b16d3c769ca42455b2b24cb38be9bc453387bbfc69ac3bf4656670ff6b44971870aeb0c2d45a3688f9999d9805a564d89bea65665a8c1995d2357d4365211f9acf84128fce05a8c868110c150881b769694495350cde6e59ce1c09091654a5f1c104236285772d69d3b4f4eb6216c1538b6bf7ba1edad7e164e3a83fa5511e369b464e242794f96dc7022a35af42093fccd4f85b9bccfdf66f67af2c3010000",
    ],
    [
      "ETag",
      "iM+SD2VBqI+g05j8nJNvog==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "30",
      "00",
      "00",
      "d0",
      "7f",
      "c9d9386c4e496f5017a880b214d00b132005c1252608899dfe7b9dbe3f783f005715e1bc186e3db9827720b186e6d57c4b157b11d675ad070f5177fb371404e611c64b6be1772b550d4b5355a1b21a5129c2c304b3c8f620c6e458ee9a49d16458d0431f49af849af97435d82bfc26691eb89be1dc46e190ee3da1745c44eb288f9dfdf7a7237657f4a53eeed5a62389d4d5c4dbca656fc4aedeead926490d429d9cc730bdd3339a8cbef5134368161beb4bbb72d9ee431fb03f65191ea57551d6cd85fa8233d17487ceb7fa868d7ed9801920829e18e1c5e995d51708cdc0ffbc182425afbe4d30230cfcfe0165612b6a18010000",
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
      "Fri, 13 Nov 2020 23:28:30 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-121-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d6fda3014fd2b91f75a2021400009ad88a65b24085d08adb6698a6c7393b90d318d9d4e55c57fdfb553ba5695d6a7d8bee7dc73ee479ec89da876644a9828ee1ba81f3fdd4a46ce08685ae0eb22152e84a34b195ff3793ffd115d29795fcc66881086a5e8fe504247c9a6e6a0a6db4db7a86573a0b5941d4cd4f1fa5ec71bb943df735dcf77dd00890aca7c29aa3ba4ffd6faa0a6bdde49bc5b485994400f4275b9dcbfbcf71efabd432d6f816bd57babd94319d5fb40f5732939d54256b3ed061d340aea0cf65494e8e11f75c7cedfe6ee0abaef16087e101c28e7b2a9b4f18529b8ac725134b5cd4aa64fc4fa7c75209b70192e5287cbb2d9575945f770e6eca8a6997e3c807399ac574e145fae93d53c8dd671b6597c0d57f3ee62bddcaee28d73f3354c4247535682e53a33e7dcde62bca0fe0e941695554fcdb3517eee50f47e308680d20ada6016b823ea8ddd09cb59c0f3b13f64b90b8c8d5930a43e73f96400831d038a3c2b6a59b492d5a0bff3fb30ec6793f160900d7c7f94b160c2b260e8d33c9850360c3c723c237f6aa1e142a88354a2ed10b949a234ccd2641b2fe669684bc86953ea8bd69829e0b5478d0522e83f351d4d54485432ed8ee2344ce68b34ba0edb092fa1a0fc71738f33ce69a900d1b4c6e669a85772870d23f17c155e20d84eecea145464faf389989e1b17af5afe424f7180c6aeb65fb2499328fe62ed9c10d7b46c2ce4a13d983272511ad3c75f08c4256d93906fdb30f94edaa70472a8a1e21f0f13c136f0f1cf765a7c04e3eaa38ed278c7dde1caa8f01ada1d12b6dc67b6e7b9a3fe985870addfc5828977ea9ac96132c21e2afd5c52bbf858692bd6a817100671fcb1edd6f12f27bdcc987a040000",
    ],
    [
      "ETag",
      "CTi0eE6FoNVcA2TZIPsoqg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-121-1605310013007"
  )
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
      "ff8d93514fdb3010c7bf8bf79a6a09a50545e22165650b0a2da4e9cb265499f8929939be603b4555d5efce39b06e1a93c24b7277f99d7cfff33f7bf64b6ac162f620eba70eccee530deece0739d84e394baf16b505163070bc26327d72f692eb2a594db6ebe5f7fcfa6a5c7f7ebeb820c2963fa1e12cdeb34a821296c53ff64cf306a8ad44d5357ad3670173bbd61757459e2ebe52dea0f0f9629d65c92c9bb343706c14dcf14dcf7fa0edfe10b0477cc8a10203ba043f4b6bf0114a977a999637ad8291c5ce9460590ff71f6a835dcb0de2882aa3e8241a45d370328ec2301a87e119910a4bee246a82d72b1a9039745ce5f84c3259744284e963925cf5cf2dd5a5e8a5f8305d14d3d37ec2bf814a1aeb5eb7f21b7c53f72fa9f80741ba02a986a01ab4003344c976c3853060ed208976c3dbf688cd96cbec1dc4b53028c530b895038072db2370952d93ffad968cf367575f9262fe8eb08eec70448af466be2a929b5bcfddbfddef6ce7c0de1a24b758f04689c2d3f3c9d9347cf5ce257a3fd139b1331d04ace4f40b7c938ec51557160e2f13c803ab60030000",
    ],
    [
      "ETag",
      "IqtsCanfAS5vUOZRJF3g/w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "1dcf4b7282300000d0bb64ad4e0a454877501da948418801574c4643ca473e0928c1e9ddebf4dde03d01bd5c9894d9d056ac011f40510dad2e2baf838e71cccf9e2fa10c20f76ec62e8822dbb93f686fea6e3be6ea40ea74edfa49ecdab5bf4da954c4c886d3b72fe6814c85be89fba4584ab5c4951c8e6f8f0256b13823abc7e5f6d0a0dd8cab7a72f62349cb433c87087e1ad7f416528b4498b8c18d5f4b5a3b463d592dd3f24db3b6cd8dcb933dbe3755664ad1f177372ac2f6aace693a4ba1fda8011ec3694b769ae625147369e7263fa12f38628645c5c102b0a92b049359f1caea06420bf03fcf06d5b157df615430017eff00fbd4281d18010000",
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
      "Fri, 13 Nov 2020 23:28:31 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-122-1605310013007",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6f9b3014fd2bc8fbda243cf22252b446295da3256405d26e9a26641bc3dc014eb1495555f9efbb364dd7aad2fa09dbf79c7bce7df084fef03a4333447871dfb2e6f1d39d20e80c31850b781dd1a0e25970f9f5bb5b5de70feee1fe6e4c1ee6734070cd92b8da97ac2745db502667bbb85f34a2dde346881e24ea39aedb73c6f6c8736cdbf16c7b0244c9ca7ccdeb3f40ffadd45ece06839378bf10a22819de73d9a7a27a791f1cdcc1be11778c2a3978ab39001939f840f5732928565cd4f35d0c0e5ac99a94559897e0e11f3523e76f73f739aefa05800f9c324ca9686ba57d410a2aea9c176d63b2a2d913323e5f1d501cac8365625151b6559dd6b862675686154ed5e39e5997d17663adc2cb6db45924ab6d98c6cbab60b3e82fb7ebdd268caddbab200a2c8549c90cd79a5be7e616c205f4332615af8d7aa29fb5f2738756ef07a309202d59174c27f6183b53db273999d07cea8d486e3342a66432c21eb1a93f64c38c300c3c236a58b816b5975142c798a42cf347e970ea65a9ef612ff55dea53ec513f07d2f10c3d345cb10b2ef742f2ae43e8365a25419a44bb70b9480253428edb525d74c67401af3d2a281040ffa9e9a8a35c80926ef72a4c8268b14c56374137e1352b307d8cef61c6392e2503346ea0798a351b9141c350b8d80417003613fb760a4a34fbf98474cfb58b572d7fa12730406d57992f8a9368157e31764e881b5cb60672e80eba8c9c97daf4f117006149bb24e87a17443f50f714b19c35aca61f0f13c026f0f1cf765a7c00c3ea838e547087dda152abd086753bc44db9cf6cc7718653171970a3dec546be7bea9acea133b28ad5eab9a46ef1a1d24eac952f2008c2f843d3ade35f5dc94efe7a040000",
    ],
    [
      "ETag",
      "5cEmidEFKX2mQfw2vqj6bw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-122-1605310013007"
  )
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
      "40",
      "0c",
      "86ff8bf7714482b44d27a47e48b6748944938c5069ed544557ceb0eb0e4cef8e745194ff3e1fedb2699d44bf806d1eebfcfa5ef6f043d51262b857e5638b66f7ae44f7c50729da563bcbaf866a8b10003a5132b9ca1e676e54de2a9cdefe7c5f5cde7c9da5374f17174cd8fc3b5602e23d140ab5b4107fdb432d2ae4b69c745bd59b2e0bc0ed1a5f5c67e97cf199f38aa4cf17d749329e24533804c746299cd874fc1bdaee0e013cd07d8a051aac73f4b334861e3077732fd38aaad138b0d49a1c2d7470f7a134d436c2100db8328886c341340acf4ea2308c4ec2f09c494db9708a6a86afd73c20387242a7f4c432211a3261ba982517dd73cb75253b293e9c2fb2d16937e1df40a18c75cf5bf90dbea8fb97d4e28d205f81d27d5089b544d347a96623a434686d2f4976239ae6884d96cbe415246a6948c97e70ab7a00edb647e032598effb75a36ce9f5d7d1a67d35784756c872392cdafa6eb6c7cb5f2dcddcbfd4e760eedca10bbc5a2374a149e7e383b1f85cfdef948de4f7c4eec4c8b01e4827f8199721017425b3cfc0226e4a80c60030000",
    ],
    [
      "ETag",
      "PTqHt6gZieEZx+fFYXHRYw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 13 Nov 2020 23:28:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
