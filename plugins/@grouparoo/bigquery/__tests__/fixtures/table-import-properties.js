const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1630609792373";

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
      "e4db3a0828d03fc2a3283e50076afc6152b82245312408a19deebd4eb751cf1ece37a2590642a4edad821abda281aad6381b87ccc46e5f607d7e2e4bb296d1c7b0d1e5ed16a475ae9e4265f9455c533876bf1f8e53c733f3123bde6671b8e73e9b11417a19f035ddbb576581c35e4b06e2b6efd99baa91ae283b1a5c1afa12893a6ea43ca90dcc77497e2595426745c8f6d3ada14beec9a57f366805426b56961f76c9254959514f0ef8b8d20c4577b0091e55a2857e2f02739e18f1f6c83bc3a87c0fa20d801d63cfb63f27ba76aa64bcdb75ace5e3a7a7ff0b8d104856721069f9d8ae4d2d6b84feeaa7edc0e0f11f03e5c0d1cf2fe7d6080a19040000",
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
      "Thu, 02 Sep 2021 19:09:54 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-1-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "f711daa6f491b65235ba12a0529b6e690a8c698a6ce726332471881d1042fdefbb4e6807421a9f62fb9e73cfb98fbc907b9147644298481e2a289fbfdc49468e09689ae0ebeaa870bc9bdb6fd905673c896ed8fa28bd7d9a4e11210c4bd1ac48a1a56455725093eda69d94b22a6829650b13b5baadeeb0670fedb1333ee9393da42948e3a5c8ef91fc47eb424d3a9dbd743b913249811642b5b9cc0eef9dc7934e51ca3be05a75de2b76504475feabf935959c6a21f3e97683fa958232848c8a141dfc2346ecf47de6b6a0593b41f0a3e040399755ae8d2b4cc1651e8ba42aebac64f2426a976f0e64e32edd7960719956591ee63483632ba29a86fab900ebdc5fafac8577bef657b360b1f6c2cdfcd25dcddaf3f572bbf236d6f5a5ebbb96a62c859a6b4dadd3fae6e105f523505ae4b57a609e8df26b7f161f87620828ada009868e3da4dd913d663173783cea0d586c036323e60c688fd97cdc877ec48022af16ad593497b913d9b43bee423818f58721a220645da717da76c4862c8261cc6cb23b264fa5d07026542195683a44aefd45e08681bff5e6b3c0ad4b886995eab3c69829e0ad478d0522e83f35ed4c54485432ed5e7881ebcfe6c1e2ca6d26bc8484f2e7cd03ce38a6a90244d3129ba7a15cc9081b46bcd9ca3d43703db1effba022935f2fc4f4dcb878d3f2033dc0011abbbafe924de02fbc8bdace1e7145d3aa863c360753462c52637af71b81b8a24d12f263ebfa3f49f3e4430c25e4fcf36122b80e7cf6a3edd71ea1b8f8a8a234de7173b8321abc846683445dec81ddefda",
      "0352834bfd2176d21bed7b6672988c9041ae5f0b6ad61eeb6cc42a7500611087efd5bddafd0532dd5d2e74040000",
    ],
    [
      "ETag",
      "M+p7NXZBmGcbcgdXbO+lZw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:09:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "301086ff8bf735955acada11890fed56ba48a185366868138a8c7dc9cc1c5f663b4559d5ffbe7360651a93c297e4eefc9c72f7facd9efd5046b298ddabf26703b67d5782bf0ec1065ca3bda3578dc6018b18785e12394fda2fd719afdbaf1727cb6a696e5db1fdf5787e4e8413dfa1e22cdeb34281968ec5dff6ccf00aa84da06e2a937759c47c5b87e236db24ab25e515ca90af6ed274364f17ec101d1b25f73ceff837b4dd1d22f680f71b28c082111066a92d3e80f04958d3f1aad63070d858018e757077505a6c6a6e110754198c06a3c97838199e4dcf4ec6d331711a05f70a0da1375b1a8f79f45c6ff0919664a340d82ea6858beeb9a3ba92dd22214c56d9e4b49bef6f800b818df1792f5828ebfc93787fc06711fe25357f234837a5741f54829160fb2855e75c4a0bcef592e8725ed7476cbe5ea7af5531d2a292fde04ef500daef8ec045ba9efd4f5af2d78b569f66d9e215e13cb9e68864c9e5629bcd2eaf0277f76c8479ebc15d59245339087e1a0d4f3fbc9f4e864f16fb88c176f49dd8db06222638fd299f956771c1b583c36f3c7f164087030000",
    ],
    [
      "ETag",
      "BIyWQTapyZF2GmGnXsfSzw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:09:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8553614fdb3014fc2b91f765934a9b366dd25442ac4036a29514d214d44d53eb242fc190c6c1764015ea7fdf4b42810e09a44aa97d77efee3ddb4fe48ee531199190a5f72588cd975b1e9216014553dc8549615c6f1637f1f1e531fbfd8b2a3f3a3b7b3c3c4406ab5492ae8b0c0e242f450472349fb553c1cb820ace0fb0d041efa06b1abaa9db96dd332c036512b264c2f23b14df2855c851a7b3b36ea79ca719d082c976c4d72ffb9d875ea710fc1622253bfb8e1d34919d0f3d8f321e51c5787e389fa17f29412c614d5986095e8571f87dbf729bd1753b45f2038b8046112f7355a5c21211cf139696a2ae4a464fa44ef9e60f993913e724d0560913522d73ba86554b5bb178a551a92d97c59df6c39f9e6b2bec2a6119c895767de6f88ed6705c4f9b7b9e330bb4af47dfb49ffe747ea11d2f6aacb55713b3c42015cbeb24010d33a8523ccfca7d7f4095802a2aa10197966ed2ee50b7c324b4a264680cc24487301c86d6801aa11ed97de8c72150d4a9aa7aada239f66f5bd0b3bb6102c37e0c609831057b30d0fb61b71b5a96d9a710eb033b26db1679144cc129930597ac9918b9f6ddc05906fedc3b19074edd4642cb4c9d36e1aa26dee654d824923ee86b5ba18ca353357ed70b1c7f7c12b8574e73e2134869b499dde399273493806c2a70820ac4398f7168e4623a730377ea8d27a8a88ff162c79064f4e7e955106c8a7acaaafe92b1ef8f17a8a142d0cd7f18e630fb64bb7d637745b3b2a6d4fc7ad5d47f6800d2c55e5e57bdbd9549b67fb7f86b11bce78d17b99c3bfe82345b3e2420208f3ebf0548ae81cf5eebeeed20155f0fba48856bbc7291ac3c2201cdd563eb3afb4e3d181826a9c942bdc3cca1bd9b7155a3aa086bc8d57343cddba9a75641a57c21218837c673bd9f88fe03e76801fab9040000",
    ],
    [
      "ETag",
      "eLp3WyYhdBQBiZKatRcHHw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:09:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff6d515d6b023110fc2fdbd73bf00314051ff47a5841a49e0aa54524c6bd6bee6baf49ae56c4ffdecd59acd0be24999d9964869c2153e50186b057c9478dfaf490a05dba4384a6ceade1ada2d22078805624ac0c5ee22f95aed263962e2d66afb41e4f8fe3d1881546be632160788658617e30307c3b43290a645bacb4b1bb0678604f959badd6d16c31655cd0c1e1c5663e1f4fe6215cbc9b6fb7abb25fc76cb10ea761f49f657bf120a57d84316a2c25ba1895a614a59db9864614558ebea15a4b34d0881b22d154574213f93cf13b7ebbd76df55a83fea0d3ed77599793145651c9d2cd8aa381252bf2888edc0f9c403747ae1a37eb278f43adb069e140bb09774f3f62a96e74ef0f1d08a9f2bb0b3a4eb1fd797872b2689e357109832e7febda2520d7cf726fab6bf4400afe8d2765aff8f20dae92ba4eea010000",
    ],
    [
      "ETag",
      "CXfxijSjwkjQtekZoTAGwA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:09:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000002ffedd34b7282300000d0bb642d8c8045e99292191a5082f2d30d9309419040f8a8084eef5ea7d7a8ef0eef0908a56c18d2aba858033ec1445443a6b2d36e4c6b2c374231a79d5e7129f309f6ca2a16ca1aeda02810b12eb45adb3d5790600e6afa2ec276d2d5353cd9500f43f7f2ad1d5594735760bfe4966324c1218c1ab2594dd80ff5909ef2afc85faacaf59c3af3ed1eee5433b8e548ab0b2be64b927a1c16f7e5a8a18e0d731a1ba77d91ed8f0a95b8e7d6d04073de792b1de1bb73a9b6dae474b0c59a35242c9378808a00ae9a03ee672a5876868fb21edd6d23bfbdfd5f6001d8a32d7b36a4e56bbbf661180bf0573fbd4e2d7bfd3719e9590f7e7e01db59042b19040000",
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
      "Thu, 02 Sep 2021 19:09:56 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-3-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85536b6f9b3014fd2bc8fbda3c214f295aa394ae9112d20269b54d1332e642dd024eb1c95455f9efbb364dd6aa52fb09dbf79c7bce7df0421e799990298979f65443f5fced41c4e48c80a219be5edfe7abe0894abf5fb843fa2ba08fb7f39b6c364304d72c498b5d0e2d29ea8a819c6e837656897a472b215a98a865b77a43bb3bec4e4693be3db29126214f57bc7c44f2bd523b39ed748ed2ed4c882c07bae3b2cd44717aefecfb9d5d251e8029d979afd84111d9f954f37b2e18555c94b36d80fab5842a8282f21c1dfc2726f1f9fbcc6d4e8b7686e03d6740191375a9b42b4cc14499f2acae4c56327d21c6e59b0309dc95bb082d26f2ba28a3921670662554d1483defc0baf4376b6be95d6efcf53c5c6ebc28585cb9eb797bb1596dd75e60dd5db9be6b291ae760b8d6cc3a37370f2fa89f8054bc34eaa17ed6caaffd597e1c8a26a0b48426188dba43da1b7727711a8f583ab60771da85381ec7a301b5e32e9b38e0243150e41951c3a2a52827c0e2f1844264777b4ee48ce3249a38633bb2ed1e8b9d5162331890c319f95b7105175cee84e44d87c89dbf0cdd28f4b7de621ebaa68494d6b9ba688ce902de7a545820823ea9e9a0a35ca0926ef7d20b5d7fbe0897b76e33e11564943d074f38e394e612104d2b6c9e826a2d126c18f1e66bf702c16662d7c7a024d3df2f44f75cbb78d3f2133dc4016abbca7c4910fa4bef87b17344dcd2bc36907d73d065a43cd7a60f7f10882bda2421375bd7ff499a271f52a8a0645f0f13c126f0d58f765c7b84e2e2a38a5478c7cd61526bb00a9a0de2a6d8137bd81f38c4802bf521668f9c63cf740e9d110a28d56b41cdda639d8d582d4f200ce2f03dd3abc33f5696dca074040000",
    ],
    [
      "ETag",
      "PhlLSqasR2mE6aZSakVAQg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:09:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "93514fdb3010c7bf8bf79a6a2d857444e2215dcb562924ac0d4f0845c6be64664e2ed84e5155f5bbef1ca0a03129bc2477e7df29777fffb3677f542359c4ee55f5d881d97da9c0fdf2c11a6ca79da5578b8d05163070bc22322e178b933a53d96398a65b65be2e451d3e5d5c1061c56fa8398bf6ac54a0a565d1ed9e35bc066a13a8bbba29fa2c606ed7fae2265fafd21f94d7287d9ede24493c4f96ec101c1b2577bce8f94fb4dd1d02f680f76b28c14023c0cfd21a7c00e1567e4dcbeb56c3c862670458d6c3fd4165b06bb9411c5165341d4dc2e9381c9fcfce4fa6b329711a05770a1b426f36341e73e8b85ee3132dc9269e307d4c0b97fd734b7525fb457cb84af3f0b49fef3dc085c0ae71c520582a63ddb378afe08b08ff929a7f12a49b527a08aaa091608628d5165c4a03d60e92680bdeb6476c9e65c947551a6950c96170ab0600edb647e032c9e2ff494bfe7ad36a11e7cb0f8475e49a2392afae969b3cbebaf6dcdd8b11e63b07f6da2099ca82f7d3647cfaed6c168e9f2df61dbdede83b91331d044c70fa537e2ac7a2926b0b87bf282797a987030000",
    ],
    [
      "ETag",
      "AfDD2mOiOq6NNvir/Ecm6w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:09:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-4-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4fdb3010fd2a91f7cf26f547d2b40dad845807198b54d22e4961689a5a3b713297340eb603ab50bffb2e0e853234902aa5f6bd77efddf9ee01ddb02241634458765b51b1fdb0e604b5105538835b6fdefb737b2f7fac2f4938ad66df66d9da7127c7c78060354be24d99d3b6e49588a91c2fc24e26785562c1791b12b5fb6d6b689b4373e48c7ab663034dd23c9db2e206c8bf952ae5b8dbdd4b7732ceb39ce292c94ecc374ff7ddbb5eb7147c4d6325bb2f15bb2022bb6f6a9ee43cc68af1e27811827e25a958d20d663938782626e4f3cbcc1d86379d0cc0772ca6388e7955a8da15a4887991b2ac123a2b1a3f20edf2e00f0adda97b1a19ab9409a99605ded055cb58e5f8e0c0929581a5b15c9637c6d7607661aca0c494e554ae8cab6f6ee01a0dc6f38d85efbb61647c3cf9649c07b3c5dcf872ad63adff0b80cb844ac50aed31c224a7b5bfc72e7aaf9fae266085256d824bc71c62ebc81c919438717a640f486a52428e8833c03631e3519ff6134231f0549d5db370019da19669f77b185b837ecf3209a1261d0c52271dd84e82896df5e29195d80edab5d0bd608a9e315972c99a5ea2abc08bdc65142cfcd349e4ea32525ce5eaac31571771e8534191007aa3ae5d1d651c94ea87f1fcc80d26a79177e936b330a5198eb7e12d4c438a7349018d0574505171c113681a9acf422ff266fe640a0cfdc0f33d42a2f1cf876742b42d759795fea249104cae818385c0db7f62e063d847bbdd81dc25ce2b0dd1787d6af2df350164412dcfa7de8bd310ed7eede0d742b0018d16fabe70836bd45c0534a58216f1fb5300601d786f8ff75b0550d82b50910ace3072b1ac3562419bd1631bed7dcf764ca78f3458a857316be4ec7b5ce7a833d20d2dd46341cd56e9aed5a14a3e81200813e37bfe3944ff02d54f250dd3040000",
    ],
    [
      "ETag",
      "IP2xqwsXjVbSLuOHOgj7EA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:09:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "91",
      "51",
      "6b",
      "c2",
      "30",
      "10",
      "c7",
      "bf",
      "cb",
      "edb5059d43a9e083baa20e9159950d86488cd71a4d7b3549dd44fcee4beaa8c2f6b497e4fe77bf7fb8bb9c612fb20db4612d924381eaf490a099ba20425d48a3ed9553a6113c40c3124bce5bdda98c8be86d28bac1e13dd87ef5d734ed742ca1f9165306ed33c402e54643fbe30c194bd1da62a1b45995c20373ca5d6e368f469381d5296d9c9e2cc6e36e6f1cc2c5ab7c92fdcbb65ae5fb9b633499878330facbb2bc78b0a37584312acc38baee73453be466e416a3599a4bf435158aa386122e0b89a222678ac8b719ffc9af371bb5662d68058f8d56c37292383382328b2e66b6353064988ce8d3ae051ca0cad06e282ecfa34d874a603985132fa88e2474a5eb65b3f7f83366a22acf38938255b2f98bee332ee4ddfb213337f1e8f0e54f93bd9341fdaac80eacd1cd5abbcedd27b70beb6a1b55a0079cd90f1f0a73d5976ff80411ad4d020000",
    ],
    [
      "ETag",
      "T7AQlfuRWHiA9qX9hxCboQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:09:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "08000000000002ffedd34b7282300000d0bb642d0e8ac1d05d804281828814b41b8786308008e1ffe9f4ee757a8dfaeef0be4144086ddb6b57dd68095ec01c6da535595b0cc9ea9885b3c5310b468a229b8b6d7711c6e7e27c1cdcc83171f93e0d21a285359bb641adca17d383b1a9d9cd9dc258bb20bd53a44147988741ed242ab32558cbe2de43b101c9b8c8bd650aa785927a2764e85e3abe782a77b9ea5eec6060c3fd4ba9521272ce9ea5be9ee46f86a3751a39412fc9b95df139a5d8c77d508b1fb2e9a95bd4c3a0d8987ddceb9b82f13dae6d8624c23522c98efbb138c0d765e1f3f5d3d3ff0556804e2c6b687bcd1edb0528492bf057ffdacd8c3efecb346a68037e7e011de7167319040000",
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
      "Thu, 02 Sep 2021 19:09:57 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-5-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6b6fda3014fd2b91f7b54078941024b422485734086b125a4dd314d9e626731b621a3b9dba8affbe6ba7b05695d64fb17dcfb9e7dc479ec9bd28b7644c98c81f6aa89e3edd4946ce08689ae3ebf43a9c55d777377e34d59c7bf3eccfd7659c4f26881086a5e86e5f404bc9bae2a0c69bb89d57b2ded34aca16266a9db7bac3be3b747dcfeff5bd3ed21414d95294f748fea5f55e8d3b9da3743b97322f80ee856a73b93bbd771e7b9d7d25ef806bd579abd84111d5f9afe6e74272aa852c279b18f56b05550a3b2a0a74f08fb865176f33b705ddb573043f0a0e94735997dab8c2145c9699c8ebca6625e367625dbe3a90385806b3c4e1b2a877655ad21d9c395baa69aa9ff6e05c46eb95b3082fd7d16a9a2cd6611acfae82d5b43d5b2f37ab30766eaf82287034650558ae33712eec2dc40bea6f4169515af5c43c1be597fe2cde0fc510505a41134c3d7748bb23d76719f37836ea9fb3cc05c646cc3ba77de6727f00832d038a3c2b6a59b4942567d0f5281da66ebf97a58311735336f27b29646c30eafa7e976d33723823bf2ba1612ed45e2ad17488dc468b2448936813cea649604bc8685de87963cc14f0daa3c60211f49f9a0e262a242a99762fc22488a6b364711334135e424ef953fc8033ce68a100d1b4c2e669a856728b0d23e17415cc116c27f6ed185464fce399989e1b17af5a7ea22738406357db2f899368117eb1768e881b5ad416f2d81c4c1999288ce9c34f04e28a3649c8f52688be93e629820c2a28f9c7c344b00d7cf4a31dd71ea1b8f8a8a234de7173b8321abc826683842df6c4f6bc9e4b2cb8d2ef62a3be77ec99c96132c20e4afd5250b3f658672356ab13088338fcd0f6eaf017071f09cc74040000",
    ],
    [
      "ETag",
      "AQNCrQjV9RAtcc7DfzKLSg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:09:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d93dd4ee3301085dfc57b9b4a29fd5b227191eeb64ba5d0421bae108a5c7b9235381eafed94adaabe3b7680829695c24d3233fe4699393e399047a13849c856547f1a30fb6f15b89b10acc136d259ffd2a82c908880a39527678ffb331d0f27dbfe743eba49dddf74ae2f9f2e2e3c61d96fa829490ea41420b925c9dd81285a836f63289b5a156d1611b7d7a1b8c9d78be52f9fd7c843bebccdb2749acdc8313a3572ea68d1f25f68bb3f46e401b76b28c180621066d1061f80b94558d3d25a4be8596c0c034b5ab83da80c369a1ac49eaff446bdfe78108fe3f3c9f9d96032f09c44469d40e5d1db8d1f8f387454aef1c92f49fa81306dec172edbe7ced7056f1709e162998f87ed7c1f01ca1836ca159d60298c752fe2bd81af22fc4b4afa45d0df94905d50058a83e9a2842e28e706aced24d11654eb13365dadb2cfaa286e50f06e70273a00e97627609eadd2ff49ebfdf5aed5cf349f7d22acf3ae3921f9e26ab6c9d3abebc0ddbf1a61ba7760af0d7a5359087eeac7c3efa3c9387eb1d80f0cb6f3df499c6920228cfa3fe552389294545a383e03e3998d9f87030000",
    ],
    [
      "ETag",
      "Eky2p047b1BF5QAtxAFpHw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:09:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-6-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8553ff4f9b4014ff57c8ed972d6b0bb52d9426c65565ca52a952aa31cbd21ef0c053ca2177d475a6fffb1e87f5cb9668d284de7dbebdf7eeee91dcb13c262312b2f4be8272f3e99687a44540d21477ff38bf0beb627d9aebd50dd57f7c8df3f0f0e6617f1f19ac5609ba2a32680b5e951188d17cd6494b5e15b4e4bc8d466db3dd357b8669d896bdd7b37a281390251396dfa1f846ca428c747d17dd49394f33a005139d88af9ef7f5f59e5e94fc162229f4b7893a8608fdddcc838c4754329eefcf67985f092817b0a22cc30a5e8471f8edad7387d1552745f29a4540a38857b9acab428b88e7094bab52b992d1235155befa4366cec4390ab46526d7cb96b664f152a3425b2c8a3bedbb3f3dd396d84ec232104bedead4f11dade1b89e36f73c6716689f0fbe6827fe747eae1d5e2bacd598617a0c42b25c650734cca0ce7d9a8efbff91d4022aa980065c588649bb43c30e93d08a92616f10260684e130b406b4171a91dd877e1c02459dacdd958ae63c1f247d9b1a069803ab4b07c9009065c5963da091d50df7007a43bb8f3e64db220f259370cc44c1056b6644ae7c377016813ff78ec681a3da486895c9e3a6b8ba89d7754a6c1249eff4b5ad51c631a91eb8eb058e3f3e0adc4ba739e309a434dacceef194139a0940362de90a2494673cc6a191f3e9cc0ddca9379ea0421ddcf98e21c8e8e7e38b20d8146aca527dc9d8f7c7d7a8a1654937ff605887d927dbedabb84b9a558aa2f86ad5f8af1b8074b19797d5de9b9549b6bfb6f86b11bcd94d16b9983bfe3569b67c48a0843cfaf8162059011fbdcfdd6b412abe174c1112d778e5225167442534578fad54ed3bf5d0326da2c8a5fc0fb3bbd66ec6b547ed082bc8e55343cd6b5153aba14a3c9310c41be3b9de09a27f0135ce8d8dab040000",
    ],
    [
      "ETag",
      "zExp7QvHn/uha/J+dnbBhw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:09:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff6d91514fc23010c7bfcbf9ba216c3a1c090f60a6621694399e0c2165bbcd41b7ceb64317c277f73a0cc6e84bdb7fef77b9fed203ec8a2a85116c8afcbd41d95ee4a817e610a16ab856b4d5a2520816a06639919771102cb249fcc853196255f9ede7b6f8188f8950c91b960c4607c80ae4a982d1eb012a5622b571bd2742b7b50977e1d324a6588ad4c4f9320c27d33080a375e6d7eb7af7d3309bc7c17d10fdd7b23a5ab0159b083394582568c6d7526c31d13363a6585973b4956864820a3ab82be45234359342d874637bf6c073fb5edf1ffa8e3b7489e32261ba1015a1cb177a1a68a1198fc407798101647724c5ac5bf774ed5cfbbd81d3799838e89ef70b18ba3dffe60c787f00ffaae77ae7ba63eaabefd1d356a37a968234141a83fec9e65618434de65a366841c2e81f1e0a7dcac72f5566494ae4010000",
    ],
    [
      "ETag",
      "/TEEQfATJldrLenn9yxjiw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:09:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "c0bfe42c8ea1269ade201015c42a1d41bc30694cc1a201112ac1e9dfebf41b75ffb077c08590d76bda948554e015686e92a118fad5d4766e795524f954ec11f9f00dc16dd84cb06891a20c157174e2198c74a990bf5c5bcbb0f6f4b98b4e187fa7136d05fd3e082efb2fb3b86ddf470eb69a707b71569f6266e1156acebd8b1b2359b859a4a862a3832e171ec9f4db9ccd292998cbc25cb7ad17d4c483b460982f08b15706dc992e5df2f8d4f9f6b874923114702636f3dd2456eb2a6f7ba33f64494fa75de42a7a84a662243ed4d986880d0a2ffef0e9e9ff020320bbea58cb6b7a7c6c7f41840cc05ffdb4d1957cfcb725af650d7e7e01c1d82af319040000",
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
      "Thu, 02 Sep 2021 19:09:59 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-7-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85535d6fda3014fd2b91f75a20344002125a239aae68104608adb6698a6cc7c9dc86388d9d56a8e2bfefda29ac55a5f629b6ef39f79cfb916774cfcb144d10e1f943c3eafd973b41d019620ae7f03aa2ebbbd4f69ffaf9deffbefeb5ce828aeffde914105cb324de5505eb48d1d494c9c976d3cd6bd154b816a203893a6ea73f72ec913d76c7e78eeb004db2225bf0f21ec87f95aae4a4d73b4a777321f282e18acb2e15bbd37beff1bc57d5e28e51257b6f157b20227b1f6a7e2d04c58a8b72badd807e23599db01de60538f84f4cc9c5dbcc5d8e77dd1cc08f9c324ca9684aa55d410a2aca8ce74d6db2a2c933322e5f1dd0265804b3d8a2a268766552e21d3bb352ac70a2f615b3aea2d5d29a8757ab68e9c7f355986c66d7c1d2efce568bed32dc58b7d74114580a938219ae35b52ecc2d840be8a74c2a5e1af5583f6be597feccdf0f4513405ab23698b8f608f73d7b4c32e2d2cc738624b319211e7187d821361d0fd820250c03cf881a162e45e9f447dec0f5fa49ea915132186524c159364c5c8aedbe4b32879c7be870869e6aaed825979590bced10ba8de67190c4d1369cf971604ac87053a8cbd6982ee0b547050502e8839a0e3aca0528e976cfc33888fc593cbf09da092f588ee97ef30033ce702119a0710dcd53ac5e8a141a86427f195c02d84cecc73128d1e4f733d23dd72e5eb5fc448f6180daae325fb489a379f8cdd839226e70d118c8637bd06564bcd0a60f7f00082bda2641eb6d10fd44ed53c43256b3927e3e4c009bc0673fda71ed010a8b0f2a52c11d36874aad416bd66e1037c59ed863c7ed2303aed5bbd8d0f68e3dd3397446b663a57a29a85d7ba8b3156be4090441187e687a75f80708af08a474040000",
    ],
    [
      "ETag",
      "6cQjd0Aw1gyAKQZQfEpiyA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:09:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d93516fda3010c7bf8bf71a24186d3290fa1036da22a5c0207d9aaac8b52fa999e34b6d870921be7bcf69c7a67552fa92dc9d7fa7dcfdfdcf91fd5446b2297b54d5730bf6f0a902ff3d041b70adf68e5e0d1a072c62e07945e4da5e0be177cfb24cb6b7fba599ece29b24bdba22c28927a8399b1e59a9404bc7a63f8eccf01aa84da06e6b537459c4fca109c56dbe592c6f28af51867c799f65e92c9bb353746e94dcf3a2e33fd0f6708ad80e1f375082052320ccd258dc81f08bb0a6e375a361e0b0b5021cebe0eea0b2d836dc220ea8324806a3783c8c879364f2799c8c89d328b8576808bddfd278cca3e77a83bf6849360a84ed625ab8ec9e7baa2bd92d12c2c5328f2fbaf9fe06b810d81a5ff482a5b2cebf8af71b7c13e15f52f30f8274534af741151809b68f524dc1a5b4e05c2f89aee04d73c666ab55f65e15232d2ad90fee550fa0fdfe0c5c67abf47fd292bffe68f52dcde7ef08e7c93567245fdccdb7797ab70edcc39b1166070f6e6d914ce520f86934bcf87299c4c3578b7dc5603bfaced4db16222638fd29b7cab369c9b583d30b6adb1a9c87030000",
    ],
    [
      "ETag",
      "PrFcctjqdf7SHvNn9j6G7A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-8-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85536b6f9b3014fd2bc8fbb2497990172491aa2e6d59c794928e40bb6a9a12db18e60630c5265354e5bfef629a3ed6a9952291eb73ce7ddf7bb4e17984a688f0e4ae62e5eec3ad20a88598c209bce6b727db82b1dcfef12dcc66431262afb7498e8e80c16b95c45991b2b6145549999c86cb4e528aaac0a5106d70d41eb77bd6c0b4cc893de90fec01c8244be339cf3720fead5421a7ddee217427112249192eb8ec50913dbe77b7fd6e518a5b4695ecbe8cd88520b2fb66cce35450acb8c88fc225c4af242b572cc33c850c9e8411f9fcd27387e3ac930079cb29c3948a2a577556e0828a3ce649556aaf687a8f7496cffea0a533774e03639daaedba051f2cd52ac719ab0d1ead0d2c8dd5aad8185ffcc585b186da629e32b936aebf3abe63341cd73342cf739681f1f1f89371ee2fc24be3e44663adff7886bc222615cf7556012629ab337ae89bfb7a58b5002b2c5903ae6cd3c2bdb1392131b1693c1e8c486c3242c6c41ee10131e964c88611611874aaf6ae553817b9154743da1b99f664d227633b2616b3f0d01c8c07833ec134eac5bdc8b4630bed5be84fc9153be3b2109237dd43d7be1b38abc00fbdd359e0e832625ca5eaac49ae2ee2799e0a8a04d21b75ed6b940b88548fc2f502c79f9d06ee95d34c7fce124c77cb3b987f8c53c9808d4be8a062e58588a069e872b1740377e1cde6a0d023bd3c30249afebc7f1204bb427759e92f9af9feec0634b82cf1ee1f0cf2b08668bf7f16ee0aa795a668beb61affdb06403da8e5c9eabfb0a09dbff6f06b21d8f92616fa1e3afe0d6a9e7c16b392e5f4fd2d00b206debbdcc31d01152e09a2480536ac1c95750c5ab266f578a6736fd463d31c5afaee152ed52bcc1a8d0e3dae7dd41e59c672f550507347ba6b3554c9471280b0319eeb9d03fa17bc4c5f2ec5040000",
    ],
    [
      "ETag",
      "njBvpeen7XJUmA4bUaN1kg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff7d91516f82301485ff4bf78a06614321f14117e6d818db00b387c5988a578602656dd110e37fdf2d2e9865cb5eda7b6ebf939c7b7b24bbac5c1387acb2f4b306de5ca5205f551182a87329f0aa5829806804244d91d4dfa2f2e910a45ef618afbc803785806d3a1e2321920f2828718e649341be16c4793f92921680b65cee91904da5c49dff3c8951166cad6430f7fdc9d477c949bbf054c8655b77ae280ebd60f6bf6db9ac76178717c4eecc0dffb22c4e1ad9b255081be05026a052579c6d21919e5a88a04595434fb09a2720480bb70f2967754539633decf446bd8165ea966e0f6dc31c9ac8e52ca1326325a2f308a311c924cd4376c0751005f0b6c4cd6cda738f6de3c6ee0f8c760e251f80ef59263a3d68e3fe300ccdbe3dea8028a179463b69fde2edebbe6975ef2e95d00943c18bef98d3468278e10c4716a0a6d5cf93df32b50d743992d7a09184e257df67f2ac4f5f8bd3ed4347020000",
    ],
    [
      "ETag",
      "0WSnMwNgIiKTbINrymsejg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000d0bb64ad8c20dfeec000064102635b6493a121641005e42362a777afd36bd47787f70d324a59df93a1a9580ddec09c498640855dab5b702af746ee3eeeba9bb6573fed9c540a275cf57418a19b66f18823427adfabe1a7957b384e2f5f93560408a9168f4d5bac2f1ba5d766fb662efd73606758c5a1765ec92a2d7d2a8bc77d63c12d1a0b2df13c7410731f05c36dae30ec7081ca86bbe276793dbd8f8a9eecd62354c325e178139af9fd518f3cd71331f1824eaa62e3c46b34ac4d738a8eca1e16f261c5a389f3a2091d2cd71f12896c77e72433155e5efe2fb000ecde961deb49f9dcbe560c6301feea93616ed9f3bfc5b28e75e0e71717d354cb19040000",
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
      "Thu, 02 Sep 2021 19:10:01 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-9-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5a20214008125a194d5724086b125a4dd314d9c6495d9298c64e2756f1df77ed94ae55a5f629b6ef39f79cfb9127b4e3d5164d10e1f943c3eac3977b41d019620ae7f0fa6de9dea96bbefbbb2307ec385e35eb33924fa780e09a2571b92f58478aa6a64c4e367137af45b3c7b5101d48d4f13bcec8b547b6eff97dd773812659912d79b503f29d527b39e9f54ed2dd5c88bc6078cf65978af2e5bdf7d8efed6b71cfa892bdb78a3d1091bd0f35bf168262c54535ddc4a0df4856a7acc4bc0007ff895b72fe367397e3b29b03f891538629154da5b42b48414595f1bca94d56347942c6e5ab038a8365304f2c2a8aa6acd20a97ecccda62855375d833eb325aafac4578b98e56b364b10ed3787e15ac66ddf97ab95985b1757b154481a5302998e15a53ebdcdc42b880fe9649c52ba39ee867adfcdc9fc5fba16802484bd60653cf1e61676cfb24231ecdc6ee90643623644cbc2176894dfd011b6c09c3c033a286852b51d90ea60ec54e4ac78e970e86c351eabb1e4edd81ef0d065e4620253a9ea13f3557ec82cbbd90bced10ba8d16499026d1269ccf92c09490e1a65017ad315dc06b8f0a0a04d007351d75940b50d2ed5e844910cde6c9e2266827bc6439a687f801669ce1423240e31a9aa758bd125b68180a67abe002c066623f4e418926bf9e90eeb976f1aae52ff40406a8ed2af34571122dc2efc6ce0971838bc6401edb832e23e385367dfc0d4058d13609bade04d14fd43e452c6335abe8e7c304b0097cf6a39dd61ea0b0f8a02215dc6173a8d41ab466ed067153ec33",
      "7b6c3bfdb1f94d15aed5bb98eb7ba79ee91c3a232b59a59e0b6ad71eea6cc51af90282200c3f34bd3afe039ab6d17d74040000",
    ],
    [
      "ETag",
      "BL3htQikzkbya117nA2ebg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "10c7bf8bf74a24b264c982d48764235b241a5a429fa60a39f8606e8d8fda265316e5bbef4cbb6c5a27d117b83bff4edcfdfde7c41ea5162c627b593f75608eef6a70b73ec8c076ca597ab5a82db08081e335915aa6d954f2fd7ac1d378fd731f1fc3c7a7dbab2b226cf91d1acea213ab24286159f4edc4346f80da4a545da38b3e0b983bb6beb8cbb3cdf60be50d0a9f6fef9264b94a62760e2e8d823b5ef4fc1bdaeecf017bc07d061518d025f8595a830f50ba8d5fd3f2a65530b2d899122cebe1fea036d8b5dc208ea8325a8cc6b349380b17f3c5fbc97c429cc2923b899ad0bb1d8dc71c3aae32fc414bb2b1274c1fd3c255ff3c505d8a7e111f6eb6f96cdacff737c0cb123bed8a41b092c6ba67f17e832f22fc4b2afe46906e4aaa21a8062dc00c51b22db81006ac1d24d116bc6d2fd82a4d93d7aa6861508a61f0200700e50e17609da4cbff494bfefaa3d5e7651ebf22ac23d75c907c731deff2e5f58de7ee5f8cb03a3ab03706c95416bc9fc6e1f4e387f92c7cb6d827f4b6a3ef44ce7410b092d39ff2553a16555c5938ff02a12ee58f87030000",
    ],
    [
      "ETag",
      "niOR4iabF9aOEFzbEy0kqQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-10-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8553eb6e9b30147e15e4fdd9b45c08249044aabaac651d5a4a5a427ad13425c698d42d606a9b4e519577dfc1344dbb4aad1429d8dfe57ce7d87e4477ac48d018c56c7d5f51b1f974cb63d44254e135ec9effba11e4da499cfcea8a6759129cd0afdef9c1013058ad92382f33da96bc1284caf162de590b5e955870de06a376cf6cf71cdb74cc913bb26cd7069da4593a65c51da86f942ae5b8dbddd5eeac395f6714974c7608cf9ff7bb0f56b714fc961225bbaf4b76a18aecbe5ff430e3042bc68b83c51c0254928a25cd31cb20c25e99c4df5e5b7718ce3b6b203f30423121bc2a541d0b2c082f52b6ae847645e347a463bef840736fea1d45c68a71b9c465b96ac167b232b03496cbf2cef811ce4e8d15f494b28cca9571f9d30b3da3e1f881b108026f1e199f0fbf1827e16c71667cbfd6586b6f0829122a152b748608c719adeb3f8dc97f7b38b5002b2c69032e5dd3c1bda1398ad3d825e9d01ec4a949e37818bb036cc72619f5693f8929069daaddb50a17bc3013d31a5afdd8764743920c8698a47ddbb1e3dec08aa9ed5a26d8a656eca26d0bfd154cd163264b2e59332b7419fa91b78cc2457034893cdd468aab4c1d37e1ea265ee654d02490dee96b5ba38c43a57af07e1079e1e428f22fbce6aca7748dc9667e0fa79de24c5260638173aaa838e5090c0d9dcde67ee4cf82c91414fa00cf760c89c6bf1ff7826853ea292bfd8f266138b9060d16026ffec32087d347dbed8b721738ab3445f3f5aaf17f6800d4835ef62bebd5ca41db3f5bf8b5105cf1a6163a5f78e1356ab6429a52410bf2f12d00b2063e7ca9bb67035c783850462a58c39d23b22e42046dee1ecb75f8463d342d73e0204d16ea0d66d9e66ec8b547ed48735aa8a78e9a67a3c75643957c2601085726f0831340ff01ba44e204b6040000",
    ],
    [
      "ETag",
      "QKhrcY6d6mXXolldNGe+EQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "515d6f823014fd2fdd2b24a08906131f6421d384e864fab41852e18255e0d6b6cc11e37fdf2d2ef361db4bdb7b3eda73d22b3b89266713b617e5b905d53d9560d6f690806e2ba36993d868600e03c34b527ece83727010e208be09cf5daee425d8aca75352e8ec003567932b2b0454b96693f72b6b780d6413a8532e25a94c272d10ae5671345b1250636e81e5368e67611cb19bf3e34a53797a5816cb4df412257f597637871d719f40010a9a0c6c08a9f0089959d87e9ad7b2025763ab32d0ac17f744a9b0955c21ba84b8bee7faa3a137f2827130188e8724ac30e3466043daed1b6563060daf12bc503d6605aa3f52d3a25f3f0836aa85be861dfc3eddbff4e8175df04a3ff881e577dfcf869d01fdaa903a68b0f1bd7b9567b4f50cd5b6773b2ce3f4157361eef3ed0ba2570cb1e7010000",
    ],
    [
      "ETag",
      "xH9g2hiije1tBqydrpw9TQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "edd3417282300000c0bfe4ac4e3580d09b28a0a0d520b6964b26c1a840412404123afd7b9d7ea3ee1ff61b9024619ce3e696b312bc024526d628190595692fba74567c7dfa36958cc635a1dd8de4fae9addb8ea171997a2ec7e355c378363f531449c798ef3a24fc40f07e41cfd2f0f3583b7e68a2c97103d17ee67b482274ef8cbec5f2ea2cd3cb06daa70b6143c242018f076b32e94bf3a0283dedb65a2e126ed0d609e2bed670b15165c1f6ae2ae7e3a34d61b6abd62f917e0fb30d7c8fcda14274d17abed88be9fd7ad554ba2aa200e6e6b2ca966e94b66b470ec3d01b3d3dfd5f600098acd29a719c3eb643ddb206e0af3e6e54c51eff6d466a56839f5f9e24700319040000",
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
      "Thu, 02 Sep 2021 19:10:02 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-11-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "2b91f74a9bb469695aa91a5509d0d1a65b9282a6698a1ce72618d2b8c40e08a1fef75d3b94c126c1536cdf73ee39f723cfe48e571999909417f70dd44f5f6e454a8e08285ae0eb6513d9abe65b78fe3818a4a3607333732f7b8fd32922b86649badd95d091a2a919c8c926ea16b56876b416a283893abd5ea777ec3ac7ce7834eebb23177912ca7cc9ab3b64df28b59313db3e68770b218a12e88ecb2e13dbd777fba16fef6a710b4c49fbbda48d2ad2fe58f46b2918555c54d34d84061a0975025bca4bb4f09799a527ef537739dd760b043f70069431d1544adbc2144c54392f9ada64259367626cbe3990c85ffaf3d862a26cb65552d12d1c59195534514f3bb0cec2f5ca5a0467eb70358b17eb2089e617fe6ad69daf979b551059d7177ee85b8aa62518ae35b54ecc2dc00bea672015af8c7aac9fb5f24b8316ff8f4513505a421b4c46ce31ed79ce38cdd311cb3d7798e60ea4a9978e86d44d1d361ec0204b8122cf881a16ad44e58cf31cbc412f71a9739c0c461e4bc69e9325e930ebb321edc3d8f3c8fe883cd65cc129973b2179db21721d2e623f89c34d309fc5be2921a74da94e5b63ba80b71e151688a00f6adaeb2817a8a4dbbd08623f9ccde3c595df4e780905654fd13dce38a7a50444d31a9ba7a05e890c1b4682d9ca3f45b099d8f7435092c9af67a27bae5dbc69f92b3dc6016abbca7c4914878be0dcd83920ae68d918c8437bd065e4bcd4a6f7bf11883bda26213f367ef893b44f21e45043c53e1f26824de0d35fedb0f788c5cd4719a9f08eabc3a4166135b42bc44db52f6ccfe97b3d8f1870adfe8db98ee31e9aa673e88cb0854abd54",
      "d4ee3d16da8a35f21584419c7e609ab5ff03b500f30477040000",
    ],
    [
      "ETag",
      "KuS/MuJRGw44b7NUhA3K1w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "93516f9b3010c7bf8bf74ab430ba6441ea0359932d12495a429ea60ab9f860ee8c8fd9265514e5bbef4cbb6c5a27d117b83bff4edcfdfde7c47e482d58cc1e64fdb303737c5783bbf34106b653ced2ab456d81050c1caf89aca368f7feaedbcc96d13e5c2f9dd14fd94d727d4d842dbf43c3597c629504252c8bbf9d98e60d505b89aa6b74d1670173c7d6177779b6da7ca1bc41e1f3cd3e4d9379ba60e7e0d228b8e345cfbfa1edfe1cb0477cc8a00203ba043f4b6bf0114ab7f26b5adeb40a46163b5382653ddc1fd406bb961bc411554661380a27d178329e4d671fa26944a0c2923b899ad8fd8ee6630e1d57193ed1962cf484e963dab8ea9f07aa4bd16fe2c3d5269f5cf503fe0df0b2c44ebb6210aca4b1ee59bddfe08b0aff928abf11a4ab926a08aa410b3043946c0b2e84016b0749b4056fdb0b36df6ed3d7aa6861508a61f0200700e50e1760996e93ff494b06fba3d54d922f5e11d6916d2e48be5a2f7679b2bef5dcfd8b11e64707f6d620b9ca82375438befaf4713a193f7bec337adfd17762673a0858c9e957f92a1d8b2bae2c9c7f015764531f88030000",
    ],
    [
      "ETag",
      "g33S/QuN9F3U1MFtrnwRDA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-12-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "10",
      "fd",
      "57",
      "90",
      "f7",
      "cba6e50302242452d56529edd052d211d2aa9ba6c480a16e0153db748aaafcef3b4cd3af69ad14899cdf7b77efcee77b7443cb044d5044b3db9af0ed876b16a10e221267707a86e9774ca633ef6761a49ece67c9f1d5e7e9c1013068a312b8a872d215ace6311193d5b2977156579833d685445d63d03586a63ed4c7a3f1c01c99a013244fe7b4bc01f595949598f4fbfbdabd8cb12c27b8a2a217b3e2f1bc7f37e8579c5d93588afecb927da822fa6f173dcc598c2565e5c16a09066a41f89a1498e660e14999445f5ea6ee515cf43220dfd198e0386675291b5b902266654ab39aabac68728f94cd677fd0d29dbbb350db5026d6b8aa361d6d936321d7252e4813d064a361a1add7d58d761c2c4eb50d3498d29c888d76f1cd0d5cade578beb6f27d77196a1f0f3f6927c16275a67dbd5458e73fd9c15f4284a4a57217e228278db387017aff5e5b23c0120bd282eb913ec486a38fa3341ac5a963da51aa932872a2918dcd488fc716b1928860d0c926bb52e19295b66e59d1c87112c719a4364cde484dd3b0883ed64d7318ebce40b70cdb76d0ae83fe702ac911151513b49d22ba08bcd05d87c1ca9f4d4357b591e23a9747adb9a689e73e253409a437fada35286550a9b912cf0fdd603a0bbd73b7dd8239c970bc5ddec21ea4381704d898c30425e1a72c21cdfa2f965ee82dfce91c14ea6acff60c8126bfee9f04e1b6525396ea8ba64130bd040de61c6f5f61e06368a1ddee59b9739cd78aa2f82a6af3dfb50032a097a768f0221aa2ddef1dfc3a0896bfad857eac",
      "dce012b5470149092765fcfe16005901efbee1fd83022e3c29282324c4b073b1688ac49cb4bb470b65be553bbae9981652642e5f63966e9bfb2137399a8ca420a57ce8a87d506a6c0d548b471280b032bee79f00fa17743be1d0d0040000",
    ],
    [
      "ETag",
      "PaiKaeACIZm1fI0rCdFh+A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff7d915f6f823014c5bf4bf70a99c8a291c4075d8862083a987b590ca9f5c2aa85766d7171c6efbe16177cd89f177acfe177d27b6fcfe840eb1d0ad09696ef0dc8d35d09fac91629a88669650ec16b05c841a07169c883ff79bc9faf1e88375ccc577491bd34349a8cc78650e40d2a8c82332a28b09d42c1eb19d5b80213a35ce5580843e993b0c674b98cc349628c8aefac91ace378328d437471ba14c34ae76ddde5b2e7344a66ffc7f25c1c6e8928790e6761fa5b647371d09e6f532840424dc0f62e24df03d1915d8bc29560e02ade48020ab570fba394bc115872ee1ac7f5faae37f07b83de6838eafb43df808c13ac29af0dbbce4c6f48738d59ca3fcc569005645b9a0515edf7686c2d1b68c7b06201f2c8a9eab4d776fb279e11cc28eee4e0075d60a66e7888f54df42dbcf96e717ad2a056929b7915d8517bd7b11fb95d854905f65e07116c5e7b4ef5555fbe00444c8f664a020000",
    ],
    [
      "ETag",
      "k3zv/HP4c17JHPiJSVuiIA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "d34b7282300000d0bb646d1d1150d21d29e5db1922a0c82a13317c050346043abd7b9d5ea3be3bbc6f40d394dd6e445c6bd6827730d1355ca64b8f6bc8789461a8eb54307cd948ac9d35319edef8ac926dd8b9f800378795a7efea79489582ab97dac4a7aa9605a45137907636883fece2b8ab4bea21ec18d54780fa7b80fc154bd28464d72ace59e785f741a5d0b47ced4cbcdcfd42b870ee998c34ee40c7586744a6366e0cb3d8c7ee16166375669fcdd93eaa8fa36e0b3792142582a395478f8d142418856e60f9bcf20c596b64252b9a0473a91562b2f7d45abebcfc5f6001d8c8cb9edd48f9dc2eab102ec05f7d2226ce9eff11a33debc1cf2fd1303fce19040000",
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
      "Thu, 02 Sep 2021 19:10:04 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-13-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b4fdb3014fd2b91f711daa4cfb495aa519500d5da744b53189ba6c8769ccc90c421768a10ea7fdfb5433b10127c8aed7bce3de73ef28cee7911a309223c7da859f5f4e54e10748a98c229bc9e6c7f5d973ff1ac283af7bb6f27f9eded2519a4d32920b866499c97196b49515794c9c976d34e2b5197b812a205895a9d5eab33ec394367ec8ebb3db7073cc9b264c98b7b60ff55aa9413db3e68b75321d28ce192cb3615f9f1ddde75edb212778c2a69bf95b44145da1f8b7ecd04c58a8b62badd80815ab22a6239e61958f8cf8cc9d9dbd46d8ef3760ae01da70c532aea42695b90828a22e1695d99ac68f28c8ccd5707b4f196de3cb4a8c8eabc880a9cb3532bc60a47eaa964d645b05e590bff621dac66e162ed479bf995b79ab5e7ebe576e56fac9b2b2ff02c8549c60cd79a5a67e6e6c305f46326152f8c7aa89fb5f24b8316efc7a209202d59138c5c67883b23674c12e2d264d41b90c461848c883bc03de2d0719ff563c230f08ca861e14214233c1c8de3a41fb9b483a37e9c9068dc1df6228693619fbac4e90e06687f8a1e2baed83997a590bce910ba0916a11785c1d69fcf42cf9490e03a53e78d315dc06b8f0a0a04d00735ed75940b50d2ed5ef8a117cce6e1e2da6b26bc6429a64f9b0798718233c9008d2b689e62d54ac4d030e4cf56de3980cdc4be1f82124d7e3f23dd73ede255cb8ff41006a8ed2af3459b3058f897c6ce01718db3da4076cd419791f04c9bdeff0120ec689304fdd87ac12d6a9e0296b08a15f4f36102d8043efdd50e7b0f58d87c90910aeeb03a546a115ab16685b8a9f6853d72fa0377880cb852ef622393f9b8ef3a23cb59a15e2a6af61e0a6dc46a79044110a6ef9b66edff012c440cea77040000",
    ],
    [
      "ETag",
      "+UZVpXaAnn1kvK+mYYGb5g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d93516f9b3010c7bf8bfb4a24b264c982d407b2656d269aa4843e4d1572ec83b9351cb34daa28ca77ef99b6d9b44ea23cc0ddf13b71f7e7ef237b54b56411dba9f2770be6705182bbf5410ab6d5ced2a3c1da020b18385e1269f69b1fdb714ad7ee49c1e322bc92b3597c79498415bfa0e22c3ab242819696453f8face615509b40dd5675de65017387c617b759ba5c5d515ea1f4f9ea2e49e279b260a7e0dc28b9e379c77fa0edfe14b007dca55080815a809fa531f800c22dfd9a96578d8681c5d608b0ac83bb17a5c1b6e106714095c17034184e46e1249c4d679f46d311811a05770a6b62efb6341f73e8b84ef189b664434f982ea68d8beebea7ba92dd263e5caeb2c9b81bf06f800b816dedf25eb050c6ba17f5dec05715fe2535ff2048bf4ae93ea8845a82e9a3549373290d58db4ba2cd79d39cb1f97a9dbc57a5960695ec07f7aa07d06e7f06be27ebf87fd292c1fe68f52dce16ef08ebc83667245bde2cb6597cb3f1dcfdab11e607077663905c65c11b6a188ebf7c9e4ec2178f7d45ef3bfa4ee44c0b01139c8ecab5722c2ab8b6707a06b5cf6d0488030000",
    ],
    [
      "ETag",
      "rvPJS4RRRRbwiekE0Gd99A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-14-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85536b6f9b4010fc2be8faa555fdc0b1cdc35294ba094d901cec629c34aa2afb80855e021ce18e4456e4ffdee588f3aa944896f0ddccececeeed3e901b56c464424296ded6506d3f5df3907408489ae26d52dfdc2e641e8f4f7f6dbfde2fcf4ef43e83f4f01019ac51099a97197405afab08c464b5eca515af4b5a71dec540ddc1a83b3086baa1dba67d303487a81390253356dca0faaf94a598f4fb7bef5eca799a012d99e8453c7fbaefdf1df4cb8a5f432445ffb5651f5d44ff7dd3a38c4754325e1cae9698402da05a434e5986293c2be3f0dbebd03d46f35e8ae43b16018d225e17b2490b4344bc48585a572a2a993c1095e68b3f64e9cc9ce340dbc454c2a6a36d58bcd1a8d0d6ebf246fbe1cfcfb50d1694b00cc446bb3c737c476b39aea7ad3ccf5906dae7a32fdaa93f5f2db4ef570aeb3c4643ff18846485720f689841e3fcd820f7ff6769045452012db83675830e2cdd0e93d08c126b380e131dc2d00acd311d867a648f6014874051279be84a450b5e1883a165d9610c311d8219d1c12809757b1cd9093575db302ccb48f47064925d87dc574cc209132517aced12b9f4ddc05907feca3b9e068e2a23a175264fdae49a225ee629b14824bd53d7ae411947a7a6e5ae1738fef438702f9cf6956790d268bbbcc5774e682600d9b4a23948a8ce798c4d238bf9d20ddcb9379da1423ddd62cf1064f2fbe159106c4bd565a9be64eafbd32bd4d0aaa2db3718e6618cc86ef7c2ee8266b5a228be3ab5f1ef5a800cb096e7d3c1ab9341767f76f8eb101ceed68bfc5c39fe1569af7c48a08222fa780a90ac800f7774bf30c8c595411b21f18c331789c624aaa09d3d96abe45bb5a58fadc188287225df6286ae1bfb2637319a889043211f2b6a1746b5ad816af144421047c673bd5344ff019cb2064eb0040000",
    ],
    [
      "ETag",
      "fukqPtmd5GXy+wSHD0/ieg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-14-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff7591516f82301080ffcbed1592820b46121f70236a246e63fab41853cbc95068595bb618e37fdf1517f7b2bdb4bdeb77ed7ded198e952c20865d557e74a84f7725da17b7c8d174b53534b54a1a040fd0f29248912dcc88cb22a8504e92e96eb67e9a2d92f1980823deb1e1109f615f615d1888dfce207983545670eb0eb1a7d6458fc92aa5a851858b96eb2c4b26590a17efc66fb7edf1979f2f57e934cdff2ad95c3c38a85d8e7bd42805baeb5bad0e28ecdc9919deb435fa46755aa0811eee374aadba966ba57ccaf8c1bd1f440316b1d170140e8603026b25b8ad942476fd4abd815596d7b9fa22317080ee97e4b8efc74f4a872c643e0b7d16f4322e15f43dfe09453728fa1f0a6f50e8a0cd4f1f939345f3ac154919743eeceaf6a09c2f3d766c75871e084ebf32abec35be7c0307789a84f2010000",
    ],
    [
      "ETag",
      "cLKs9and1ienBAGbHUOHKA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "d0bde45b1d7989f48f00651af0adbc7e32174dd48a01032ae874ef75ba8d7af6709e08b65b56d7b4294f4ca00fd4816a0db683a01a63f7bee74620e7365e89baf62d30650431d13663155f49652e60ba9ef2bee380d76724c6a5a15813de8fb4593e0e0cdd49c499ebba90dee530d10a3c3113718fd9f1110e97372885d25c2baf6d619566512a952c5f646657345f3b756907241f1a30cf395dd2e242a1d8d3cfd90d48aa89f5de4ec2969ec2083bbe1b3ab0d3a94831172589a350c4f929f93e5cb233f1b9ab8cba5b34e2eac66fdcd9439fe6f5e0ededff423dc4daea28594d8fafed9a61593df4579f365dc55eff3103c924faf905f43fff7319040000",
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
      "Thu, 02 Sep 2021 19:10:06 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-15-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "536b6f9b3014fd2bc8fbb826210f20448ad628a12d52423620ada66942c631cc2d608a4dbaaaca7fdfb569ba5695da4fd8bee7dc73ee832774c7aa3d9aa194e5f72d6d1ebfdcf2149d212a710eaff6f5d787fb3c9ac637b15c3d1061fd357797f97c0e08a658029775417b82b70da162b68bfa79c3db1a379cf720516f68f586f6d8b44dd7714763670c3c418b6ccdaa3b60ff91b216b3c1e0a4ddcf39cf0b8a6b26fa84972fef83c3685037fc961229066f2507a022061f8b7e2b38c192f16abe8bc0402b6893d012b3022cfc67eed3f3b7a9fb0c97fd1cc00746282684b79554b62005e155c6f2b6d159d1ec09699baf0e28f2d6de3236082fdab24a2a5cd233638f254ee4634d8d8b70bb31fce0621b6e16b1bf0d926879e56d16fde576bddb04917173e5859e21715a50cd35e6c6b9be057001fd3d1592555a3d56cf4af9b941fefbb12802480bda0513c7b4f1706aba69963a249b8ead3433699a4e53c7c2e3d424ee844ef629c5c0d3a29a852b5e8d868ee3b87b27994e5c2b99d8133bc196932563676441b6cc1e8e4d743c430f0d9374c544cd05eb3a846e423ff69238dc05cb45ece91232dc1672d5195305bcf628a140007d50d35145190725d56e3f88bd70b18cfd6baf9bf09ae6983c46f730e30c1782021a37d03c499b0ddf43c350b0d8782b00eb897d3f05059afd7a42aae7cac5ab96bfd06318a0b22bf5174571e80797dace09718d8b56430edd419591b142993efe0620ec689704fdd879e14fd43d8534a30dadc8e7c304b00e7cfaab9df61eb0b0f9202324dc6175885022a4a1dd0a315ded337b6ada93a98d34b891ef62b6eb9e9aa672a88cb4a4957caea8db7b28b4136bc50b088230fd4037ebf80f63b28bd877040000",
    ],
    [
      "ETag",
      "6V+wqgS8TWTtDwcs5x0UGg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-15-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d93514fdb3010c7bf8b794d45ba423322f1d0420795420a69789a5064e24be6e2f882ed74aaaa7ef79d03eba63129bc2477e7df29777fffb3672f520b16b36759bf7660762735b8071f64603be52cbd5ad41658c0c0f19ac8dbe8e5749386669357ab2c75d135d7d5d5c3e52511b6fc010d67f19e551294b02cfebe679a37406d25aaaed1459f05cced5a5f5ce7d932bda1bc41e1f3f4314966f364c10ec1b15170c78b9eff44dbd321601b7ccea00203ba043f4b6b7003a55bfa352d6f5a05238b9d29c1b21eee0f6a835dcb0de2882aa3f1f9683c9d84d3f022baf8328926042a2cb993a8897d5cd37ccca1e32ac39fb4251b7bc2f4316d5cf5cf2dd5a5e837f1e132cda767fd807f03bc2cb1d3ae18042b69ac7b53ef37f8aec2bfa4e29f04e9aaa41a826ad002cc1025db820b61c0da41126dc1dbf688cd57abe4a32a5a18946218dcca0140b9ed11f896ac66ff93960cf647abeb59bef8405847b63922f9f26eb1ce6777f79e7b7a37c27ce7c0de1b245759f0861a87675fcfa369f8e6b12bf4bea3efc4ce7410b092d3af722b1d8b2bae2c1c7e014a2f71a088030000",
    ],
    [
      "ETag",
      "H7k/jN0rjTfORNt7DanfCQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-16-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "db",
      "30",
      "10",
      "fd5722ef974d2a6ddab4e98784588130229594a5298c4d53ebd84e6648e2603ba00af57fdfc5a17c8c09a448edf9bd77f7ee7c7e4037bca06882629ede564c6e3e5d8b18b510d33885d31ff169682b7e72eda8537a98dfdfbae26794eeef0383d72a85f332637b4a54923035592edaa9145589a5107b9068afebc2e7d8ae3d1e8e7bced0019d625932e3c50da8ff685daa49a7b3abdd4e854833864baeda44e44fe79dbb5ea794e29a11ad3aaf4b76a08aeabc5ff42013046b2e8afde5020c548ac915cb31cfc0c2b392c65f5fa76e739cb75320df71c23021a22a746d0b521051243cada4c98a260fc8d87cf1072dbc997714596b8a355bb7ac7586955e15383701a76b0b2b6bb52a6fac93707e66ada1bb84674cadadcb532ff4ac86e307d63208bc45647d3ef8627d0be7cb73ebf0ca60adffa506679429cd0be32bc271c66a4f8fa3f3df5e582dc01a2bd680aba1ede2eec81ec7493c24c9c819c489cde278140f07d8896d32eeb33e8d19069daeb31b152e4441c634a1743018d9c3de601c639bf61deaba2392240965091df446381e3a146d5be85e72cd8eb92a85e2cdfcd065e847de2a0a97c1d134f24c1b09ae327ddc98ab9b78e9534393407aa7af6d8d720195eacbf083c80ba747917fe135f73f6329269bc52d6c408233c5808d254c50337926280c0d9dcf177ee4cf83e90c14e652cf770c8526bf1e9e05d1a63453d6e6174dc3707a051a2c25defc83810fb78fb6db17e52e7056198ae19ba8c97fd700a80bbd3c47bd57918bb6bfb7f0b510ac7d530b7d5f7ae1156a8e429630c90af2f11600d9001fbededd53022e3c2628a334c4b07344d5458864cdeef1dc986fd4b0157d",
      "678c0c59ea37986b777743ae73d41959ce0afdd851f394ccd86aa8524f24006165023ff806e85f7276b9a5ca040000",
    ],
    [
      "ETag",
      "XbHR0siFj3sHdBmwq6oZTg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-16-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "51",
      "6f",
      "82",
      "30",
      "14",
      "85ff4bf70a09e28293c407d98873216643cc1e16632a5c5811286b8bce18fffb6eebc65edc92a6bda7fd4e737b7a223bd664c4275b567c74208e3705a8175dc420bb4a495c5ade48201601450b24ddc3e1b5b90d569295c5dd679b6f93a80c8ac9040999be434d897f2239832a93c47f3b9186d680b68c2a7d893ab65a3d4c931055cd33ad16ab289a065148ce56cf5754aa8da97bd33289e78bd9ffb6cda6ddfd3ae68b249c85f135cbfa6c91926f63c841409382eeba15bc8454cd752092d66d05b6e49d484112039b8342f0aea582731b77ec818763e878ce78347687a32182154fa962bc4176b5c4de88e28a56313f601e4403c294184d6ee6bd0ed5711ddb716d67601ea3b79e40ec3993bd1e989eaf9abc1e5aa6b462b497dedf1eb78742fd333fc2d58ef577cfc151817c161c0390a0dfee5c72b8e73a1b74f94a74609194e2c73f3275d1e72f24aa369355020000",
    ],
    [
      "ETag",
      "2wwWn4BUsijg8xpfbTLjBg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "ffedd34b7282401440d1bdf45829f9a6c94cf9a9088d20a23da190bc080104694a8154f61e2adb8867761770bf5192a6c058dcd505dcd03b1a1241e552ce6ef04a7f6651f4582f0b917744bfa747bbc642014b48a6e0cd271b7426d370871dcbbc3c49116d1be7e6f896624a3434aadcc6767b548a05ad9d2189ca399171e0be8d01bedf1fa74334de4e9945cc904a950078aedf2572d1424590f7d240cf6358289e4e0c6d575eb35cf6347771e81a03bebc4ddaf07da842e5b32c076ad4819a7a9b6473a5dbf5a0c5eb482b3f6dca72730b6210e38af0f2f5ec9cec8fba8a5deee5e5ff4233047d93b7c0e27cba5d94557586fed68fbba181e9ff15242db4e8e71738e7d06f19040000",
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
      "Thu, 02 Sep 2021 19:10:07 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-17-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fbda24346979448ad628a56ba4846c401a6dd3848cb930b780336c3a5555fefbae4dd3b5aad48a0f60df73ee39f7c123b9e34d4ea624e3e59f0eda874fb722232704142df1b6fe310fafeec2dd2e5eec56f1b61ddf3ae1bc9ccd10c1354bd27a5fc1408aae6520a7db7858b6a2dbd3568801261a9cba835367623bb6effae3893b419e84aa58f1e60ed9bf95dacbe96874d41e96429415d03d974326eae7fbd1fd78b46fc52d302547af2547a82247ef8b7eae04a38a8b66b68dd14027a14da1a6bc420bff997976f13af590d37a5822f89e33a08c89ae51da16a660a22978d9b5262b993e1263f3c507898355b0482c26aaae6ed286d67062e554d1543decc1ba8a366b6b195e6da2f53c596ec2345e5c07ebf970b1596dd7616cedae8328b014cd2a305c6b665d98538807d4cf412ade18f5445f6be5a7062ddf8e4513505a421f4c5ddba1a79eed6745e6b2c29b9c67850d59e665ee399d6436f3cfe02ccf8022cf881a166d4493fbfe24776c27f59d71919e79d44e3dcff5d373ff3c773d0a36d8941c4ec8df962bb8e4722f24ef3b4476d13209d224da868b791298120ada55eab237a60b78e9516181087aa7a6838e72814abaddcb3009a2f92259de04fd84575052f610ffc11917b4928068da62f314b46b9163c348385f0797083613fb7a0c4a32fdf94874cfb58b172d7fa62738406d579937899368197e31768e881b5a750672df7fe8320a5e69d3875f08c41ded93906fdb20fa4efaab080a68a1611f0f13c126f0e1af76dc7bc4e2e6a38c5478c6d561528bb016fa15e2a6da27b667e3e310036e",
      "d59bd8c41b1f9ba673e88c5043a39e2aeaf71e0bedc53af90cc2204e3f34cd3afc0378c944b277040000",
    ],
    [
      "ETag",
      "mZANFkNWWSCWLSUr2j6NAg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-17-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8d93516f9b3010c7bf8bfb3822254d1b16a43e902d5b91689211f25455c8b10fe6d4d8cc36d9b228dfbd67da66d33a89bec0ddf977e2eeef3f47f228142711d98aea470be6705181fbe6830c6c2b9dc557a39505121070b44232dce56d76f8b0dacea6c9afdbc7f4771cc226beb941c2b2ef5053121d492940724ba2fb2351b4066c635ab6b52aba2c20eed0f8e23acf92c557cc6bcd7dbed8a4693c4be7e4149c1b3975b4e8f877b43d9c02b2d3db0c4a30a018f8591aa377c05ce2d7b4b46e240cac6e0d034b3ab83ba88c6e1b6ab41e6065300a07a3c97838194ec3e9e5381c232835a34e6885ec668df311a71d9599fe895b9291274c17e3c665f7dc635df06e131f268b7c72d50df8374019d3ad72452f580a63ddb37aafe08b0aff9292be13c4ab12b20faa4071307d94680acab9016b7b496d0bda34676cb65ca66f5551dc68c1fbc1bde801a4db9f812fe932fe9fb468b03f5a7d8ef3f91bc23ab4cd19c993bbf93a8fef569e7b7831c2ece0c0ae8c465759f0861a0daf3e5e8793e1b3c73e69ef3bfc4ee44c0b0161147f955be148545269e1f404053d270088030000",
    ],
    [
      "ETag",
      "7jTuRy+PbB9IxHkLzA7eUA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-18-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85536d6fda3010fe2b91f765938000a14090aa8eb65997890616422b344d60874be612e2347640ace2bfefe294beac522b2105fb9e97bbf3dd0359f374450684f1f8be807cffe94e305223a0688cb766bcfeeb4d4dfb7c3899ef7ea859bcddfabbe1e9292278c9927493255097a2c8439083d9b411e7a2c8682e441d85eaad7ebdd5b59adda6ddb3db56cf429e84241af1748dec3f4a6572609a47ef462c449c00cdb86c8462f3746f6edb66968b3b0895345f5b9ae822cdf74dcf121152c5457a3a9b620285847c011bca134ce199b9625f5f4b3738dd3462046f7908340c4591aa322d9408451af1b8c8b52a193c109de68b3f64ea8c9c8bc0584a859acb9ab1e4aba541a5b158646be39b3fbe36965851c413904be3f6bbe33b4685713d63e679ce34303e9f7d31aefcf16c629ccf75ac7694c30c5620154fb57f405902a5f7638bdcb70f5312a8a212aae0a2d7ecd256bf69b388f5c2a86f9db0a8098cf559ef845aac19da1de8ac1850e4a9525db3682a52cb6edbac0d5dbb83f888d9ccc64e5b14fa1d1a21a91f460c221b56e45023bb9c2bb8e4321392577d22b7be1b388bc09f7917c3c0d16544b448d465955c59c4cb3c151689a077ea3a94512ed0a96cbaeb058e3fbc08dc1ba77ae711c434dc4feff1a5239a484034cde90614e4d762854d2393f1d40ddcb1371c21433fdee4889064f0ebe19910ec33dd65a5bf64e8fbc33972689ed3fd7f31cca3db2187c30bbb1b9a141aa2f1fa54e96fab0069612dcfa7f6ab53971c7e1ff0572338de9517f93973fc39a9ae7c88208734fc780a10ac031f6ee97165108b4b833638798ae3cc85b2340973a8668f6f74f2151b27aad5ec120dced59b9865778e4d2e354a45d840aa1e2baa5646b7ad0c15f20984411c19cff5ae30fa0fec9fce0eb2040000",
    ],
    [
      "ETag",
      "/gkzNS/9BAPYwJtUgvvRwA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-18-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6f",
      "82",
      "3014c5bfcbdde360820a5a933de842d4458da23e2dc654bc321428b6659b317ef7dde2b23f992f6defe9efb4f7b4673824f9163ab049e26389f27417a39e994588aa4cb5a2a910b942b000358f891cd4c66c5963cfccab1f9dd6fd47e6949bfeecf1910815bd62c6a173865d82e95641e7e50c39cf906c4af3ac20469f0a532e86e360bee88ea72465626ba4c97234eaf646015cac6fd77a5d1c7e4cc3c922e807e12dcbea62c15e6c42dca1c43c42d34421c51e233d34f914dd9ea2ad4429235450c1d5462c45597029844d8aedb66dd76f38bec35aacde6835084c45c4752272629773ea0db4d03c0dc53bc50303c86a494977d5f846b2fbe0b51dcf632e6b06acca53a9559bff38c6dcbf9c7f9bf39b74e26fae6eb8d55743bd9346359582d22934c19c6bc82761826b7a102d4bb420e2f44983445febcb274aeca19301020000",
    ],
    [
      "ETag",
      "H/M9U/9J952q07+xm0ubGQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "bb64ad8e0649a53b133f9d02d12a0a7693018c35a5864802413abd7b9d5ea3be3bbc6f90e639d79a99b2e0123c835b0abd413ef0d504cfac80f393ea602ce38dfae0493852ceb8892e986e25b595bee674572dec244544bf22e66abfa42fdd54367ea796a7e20af1999619c98787d34120c7ac6fd720985a91bd25ebed9727103a426c0f2d4916cd9118e9d5dd229b0a83dc70532cb11d9271347a6f18f4e6b1c8fc4fe8b2ad5b8593b825eb7293cdfa4d16d567b1326c1fa47553c07a9648d45f0d751ab4d679daef94dcf9f46292a81f8694bc8df1e0e1e1ff023dc05b252aae99b86f775ccfeb81bffaccdc14bfffc73cad78057e7e01d730657e19040000",
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
      "Thu, 02 Sep 2021 19:10:09 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-19-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85536b4fdb3014fd2b91f771b4cda3d0a65235aa368c6a6d0a690a6cd314d98e931992b8c40ea842fdefbb7628834d824fb17dcfb9e7dc479ed01daf52344284e7f70dab779f6e05414788299cc3ebc5fdac76dddd8f1bf7663a2bbdf4f3b73a1597e33120b866495c6e0bd691a2a92993a3cdba9bd7a2d9e25a880e24ea387ec739f1ec13db1ff8ae37f0802759912d787507ecdf4a6de5a8d73b68777321f282e12d975d2aca97f7de83dbdbd6e29651257b6f257ba0227bef8b7e2904c58a8b6abc59838146b23a6125e60558f8cb4cc9e9dbd45d8ecb6e0ee0074e19a6543495d2b620051555c6f3a63659d1e809199baf0e681d2c82696c515134659554b86447568a154ed46ecbacb368b5b4e6e1d92a5a4ee2f92a4cd6d3f36039e94e578bcd325c5bd7e74114580a938219ae35b64ecd2d840be8a74c2a5e19f5583f6be5e706cdff1f8b2680b4646d3019d827d819da3ec9c8806643ef98643623644806c7d82336f5fbac9f12868167440d0b57a2a236763287ba8943d871d227ee20217e3f4dfca1e30d336f48fc2146fb23f45873c5665c6e85e46d87d075348f83248e36e1741207a6840c37859ab5c67401af3d2a281040efd4b4d7512e4049b77b1ec6413499c6f3aba09df082e598eed6f730e30c1792011ad7d03cc5eaa548a161289c2c831980cdc42e0e4189463f9f90eeb976f1aae52ff41806a8ed2af345eb389a875f8d9d03e20a178d813cb4075d46c60b6d7aff0b80b0a36d1274b909a2efa87d8a58c66a56d18f87096013f8f0573bec3d6061f341462ab8c3ea50a94568cdda15e2a6da67362c86ef0e9001d7ea9f9863c3a40f4dd339744656b24a3d57d4ee3d14da8a35f2050441987e689ab5ff03787b2c9f77040000",
    ],
    [
      "ETag",
      "PqDr22yZX2XCDm3d+KrdoQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-19-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d93616fda301086ff8bf73548303a2891fa0156ba3105e82095a64d5564ec4b6ae6f832db49c510ff7de7b463d33a29fd92dc9d9f53ee5ebf39b2efca4816b39d2a7ed4600f6f0af09f43b001576befe855a171c022069e17447ebdde7d32973f45c39737fb43f265d93cece0f1ea8a08271ea0e42c3eb25c81968ec5df8eccf012a84da0ae4b93b559c4fca10ac56dba59ac3e505ea20cf9ea2e49a6b364ce4ed1b95172cfb3967f45dbfd29627bdc6d20070b464098a5b2b807e117614dc7cb4a43cf616d0538d6c2ed4161b1aeb845ec51a53798f406a3617fd49f8c276f87e321811a05f70a0db1775b9a8f79f45c6ff091b6648340d836a68df3f6d9505dc97693102e56e9e8a21df06f800b81b5f15927982bebfc937abfc16715fe25357f254857a5741754809160bb2855655c4a0bce7592e8325e55676cb65e272f5531d2a292dd60a33a00ed9b337093aca7ff93960cf647abeb693a7f41384fb63923e96239dfa6d3e56de0ee9f8d303b7870b716c9550e82a106fd8bcb77e351ffc963ef31f88ebe137b5b43c404a75fe5a3f22cceb97670fa05c1cf647188030000",
    ],
    [
      "ETag",
      "ZDbJn8zcvaMFjyLXMvhbew==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-20-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6f9b3010fd5790f7cb26e503f24148a4aacb5ad621a5a423a455354d893107734330c5a65554e57fdf619a7e6d6aa548c4bef7debd3bdf3d900dcf633221114f6f2b28779f6e44445a04144df1d61a9cd9f6062ea9e784f25ecd3d21cd5d7a7484085eb324dd1619b4a5a84a0672b25c74d25254052d8568a350bb67b62dbb6fdae67834eef5477de449c89219cf37c8fea3542127ddee2177271522cd80165c7698d83edd77ef7adda21437c094ecbe4ed9c52cb2fb7ed2e34c30aab8c88f960b3450492857b0a53c430bcfcc38fafa5abac3e9b69322f88e33a08c892a57b52d9460224f785a955a954c1e88b6f9e20f59b833f72434d652a1e6ba65ac332ad52aa75ba80f3c5e1b541aab55b131be07f373638de5253c03b936ae7eb8816b3418cf3796beef2e42e3f3f117e32c982f2f8c6fd73ad6faaf367a8b412a9e6b67218d32a85d3d36cffbf7c96a02555442135c8d4c9b5a8e398e9268c412a73f8c1213a2c8894643da8f4c361ec0208e80224fd5ea9a4573915b49d21ff6873d274a58943803cb1c3ba381e530b086d4894c882d3b1e2536d9b7c87dc9159c725908c99b0e92abc00bdd55182cfd9369e8ea32125a65eab4315717f1d2a7c22211f44e5dfb3aca0566aa9fc3f34337989e84dea5db4cc00c52ca768b5b9c81846612104d4beca082f25cc4d83472315f78a137f7a73364e867bd38202499fc7a782684bb427759e92f9906c1f41a39b42ce9ee4d0c7dd803b2dfbf487749b34a43345e9f1afdbb26402cace5f9d47b75c276fedee3af4570f09b5ce4e7d20dae497315400225e4ece32940b00e7cb8bf8765422cae13a6c131541c678ec93a092ba1993dbed5e61bb683e3d0b3880697ea6dcc321debd0e45aa356842de4eab1a2669974dbea50259f4018c491f13dff0ca37f019e87523fcc040000",
    ],
    [
      "ETag",
      "14G66keVaI8TswtOIos0yg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-20-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff7d925f6f823014c5bf4bf78a0b887f56121f74126551b601660f8b3115af0c05cadae2628cdf7db7b8b02d337ba1f71cce2f5c4e7a22fbb4d81087acd3e4bd0271bc49403deb210059654ae251f242023108289660329ed0b1b9b13b2f8f963fec8f0f7e675c4c93c10013327e839c11e744b629641b499cd71329580e8849c5f21233ea586a197973378c86f327b472bed196bf98cd86a3994bce4643654caa553d376418059e3ff91f5badcafd37e1f9913b71836bc8f26c901d5f07b00501450c7af752f01dc4cad3b5485c3a8396e4958841923a5cbf4804af4a26386fa1d36a9b2dab679b3d93f669dbeedb18cc78cc54ca0bcc2e42dc8d28ae5816f00f6c85e880a8472c685b3f0f685bb7dd3bb3dba516edb8b4fe1fed3e8038f05436daaad7fec3516afde6c29865296b64ef3ad6ebe0077f622e53d088b686965fcb8f8e0ae493e0d884045d827929e49eeb92907294a8c02031c37b304dd5459f3f0198fbcb1864020000",
    ],
    [
      "ETag",
      "cG9D0d34WO1NA7DvN4DnHg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "ffedd34b7282300000d0bb64ad8e42f87527e5a3528b085acd8609105040a0099fa0d3bbd7e935eabbc37b001cc784b1b0ad0b5281373062419bc533a7517563c87968ca072f4922b44e87de99b3b8b750d9b4b0b2be79d9d1a2c9e097bbaa948b8f0ab8c182af4e5374cfacfba9c415a669c48daecfe4333a19473ddfdfacf782b1c0db23a6c29bbca1fe996e1747efea68522cca860f95547154c557347deef2c85c0d871e5681cf7778110ed1fa3498959497a22d188c8fbbf3f1622f5bc5ea3692f0e16ec769a72df787d5b69e274196d43ca997650617761ee04174d167367b79f9bfc00410de5c2961e1f5b95d94346d02feea87edd890e77f9d604a28f8f9053e6945d319040000",
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
      "Thu, 02 Sep 2021 19:10:11 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-21-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6f9b3014fd2bc8fbda2490a40422456b94d03553423a20ada66942b631d429c129367da8ca7fdfb569ba5695da4fd8bee7dc73ee836774cbab0c8d11e1c55dc3eaa76f5b41d009620a17f0ba7d5cfb24595faa9bc74b3b88e6db9fde79329d4c00c1354be2ddbe641d299a9a3239dec4dda216cd1ed742742051a7ef741c7760bbb63ff2fb83d100789295f99257b7c0be516a2fc7bdde51bb5b0851940cefb9ec52b17b7defddf77bfb5a6c1955b2f75eb2072ab2f7b9e8f75250acb8a8269b180c3492d529db615e8285ffcc8c9cbd4fdde578d72d007ccf29c3948aa652da16a4a0a2ca79d1d4262b1a3f2363f3cd01c5c1329825161565b3abd20aefd88995618553f5b467d679b45e598bf07c1dada6c9621da6f1ec22584dbbb3f572b30a63ebfa2288024b615232c3b526d699b9857001fd8c49c52ba39ee867adfcd2a0c5c7b16802484bd606d391ed62c7b37d929311cdbdc129c96d46884746a778406cea0fd930230c03cf881a16ae4435c036ed53364c9d8cf8e99060967a1e71d3e128a343df71877d67800e27e8a1e68acdb9dc0bc9db0ea1eb68910469126dc2d934094c09396e4a356f8de902de7a545020803ea9e9a0a35c80926ef7224c82683a4b1657413be1252b307d8aef60c6392e250334aea1798ad52b9141c350385d0573009b895d1e83128dff3c23dd73ede24dcb5fe9090c50db55e68be2245a843f8c9d23e20a978d81dcb7075d46ce4b6dfaf01780b0a36d12f46b1344bf51fb14b19cd5aca25f0f13c026f0e5af76dc7bc0c2e6838c547087d5a1528bd09ab52bc44db52f6ccf715cd745065cab0fb191ef1d9ba673e88c6cc72af55251bbf750682bd6c857100461faa169d6e11f6334092277040000",
    ],
    [
      "ETag",
      "jxO9bTOPthxP0ERDjJ8FTA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-21-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d93516fda3010c7bf8bf71a24286d1891fa10366891526821ed4b55456e7cc9cc1c5f663b3084f8ee3da71dabd649e94b7277fe9d72f7f73f07f6536ac122f62ccb5f0d98fd9712dc9d0f56601be52cbd6ad41658c0c0f192c8bb703c7dd80d1faee444cd2e36d7b3dffb5d1a5f5e1261f31f5071161d58214109cba2c703d3bc026acb513595ceda2c606e5ffbe23a5dcd17579457287cbeb84f9278924cd93138350aee78d6f29f687b3a066c83cf2b28c080cec1cf521bdc40eee67e4dcbab5a41cf626372b0ac85db83d260537383d8a34aef6cd01b84c37ed81f8fc667c3d190408539771235b1f76b9a8f39745cad70475bb281274c1bd3c645fbdc525d8a76131fce176978de0ef81ee0798e8d765927584863ddab7a7fc03715fe2515ff24485725551754821660ba2859675c0803d6769268335ed7276cb25c261f55d1c2a014dde0567600ca6d4fc02c59c6ff93960cf657abef713afd405847b63921e9fc66ba4ee39b5bcf3dbd1961b277606f0d92ab2c78430dfae75f2f4661ffd563dfd0fb8ebe1339d340c0724ebfcab5742c2ab8b2707c01843d4c8c88030000",
    ],
    [
      "ETag",
      "Q69EVw3VGiBlF5jHFxywTA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-22-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85536b4fa34014fd2b64f6cb6eb60f5a5a689b18adcaba24b5ba946acc66d30e70c151cae0cca036a6ff7d2f8355bb66352101e69c73efb98f7922b72c8fc988842cbd2b41acbfdcf0903408289ae2e9e361f1a0dcfe635e26bdef2b2be9e7f6c9c5786f0f19ac5249ba2a32684a5e8a08e4683e6ba5829705159c373150b3db6d766ccbb4cda133ec5a8e853a09593261f92daaaf952ae4a8dddee66ea59ca719d082c956c4572fe7edfb6ebb10fc062225dbbb29db9845b63f4eba9ff1882ac6f3bdf90c0d9412c40256946568e155198707bba15b8cae5a2992ef5904348a7899abca168688789eb0b4143a2a193d116df3cd0799b913f72830960913522d72ba8265c358eaac4b834a63b1286e8d1ffed9a9b1c4ca1296815c1a973f5ddf355e68ded4984fa7ee2c30beee7f334efcb3f9b97178b5851b3bc1d1540c52b15c5b0a68984165e7b96bdefb595502aaa8841a5c38a64d3b03731826a1132503ab1f262684e12074fad40acd68d8835e1c02459daaa26b15cd794ebb433b76ba0e357b43c7ea40bfd773424a433bee3b605911d8b66d76e301d934c883600a8e992cb86475ebc8a5ef05ee22f0e7d3a371e0ea32125a66eab8365715f1d6a7c22291f4415d9b0a651c335573f0a681eb8f8f02efc2ad473f819446ebd91d0e3fa199046453811d54204e798c4d23e767332ff0cea6e3092af43ccfb70c4946bf9f5e05c1bad05d56fa4dc6be3fbe420d1582aeffc16681ef4d4fc866f326df05cd4acdd102fd5727b8af010237b87c9c49f3001e75917afd368d57062ea682ce7f619c8fba06b18bffd9e0d32078536a8fe4d7dcf5af487de4430202f2e8f3ed41b2063ebdf0dbdb875cbc7f98462afcc75d8d6495241250ef2c5b55669ed5834ed7ee394493857a870d7af67638558c2a22ac2057cf15d5b74f77bb824af9424210576d5acfe22fba5ab488fd040000",
    ],
    [
      "ETag",
      "xBpwtE5xnuf4+m3f5n6GVA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-22-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5f",
      "6b",
      "c2",
      "30",
      "14",
      "c5",
      "bf",
      "cbdd6b3b6a658a82b02965931599551fc61089f1b68bb6bd357f9c227ef725710cd9d35e929c9b73c8f99133ec44bd813eac45b137284f7705eaa93b64a84ca995dd1aaa154200a859619d8bd81ca749d64bf387fdeb7b6d92f961581783817528fe891583fe197281e54641ffe30c35abd0c67221955e7911803e356e369b67e3c9b3d5156d9c9e2cd2f469982670097e73ab55b3fb4f627909604beb0c73945873742d1a495be47aec0015ab9a124345467254e0cdfea290641a2689423b09e3386c75da5127ea757b71bbdbb6c69238d3826ac73eb3d540936665465f960f626b90fe685173bf1eec3891023d8513b8457920a1a2473cfa16f79c2adff83632625c9437298e4c63eb6f64f9f3fcf0a451bd49b22c0a1d4674451a91736b8bafa5c10038b37ff222f4555fbe0182f589e4f0010000",
    ],
    [
      "ETag",
      "U2uxQER9Lf5qKYnuETvBng==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "8b08000000000002ffedd35b7282301400d0bde45b991610493f19498b1454f0457f3219b8220f918184043add7b9d6ea39e3d9c6fc4d214fa9ef27b050d7a4323d3b1966a7e6b3b2b59d0e336bed5ac712d5db19a1c7b6254f37cecc3a01af38b9b84c361919303151fea989529df53cf6cb84f981f4c711c9c5fc57a527a66ee2cb6e2574aee65340e4a96d9b00bc4542a73b3cf9d8b74ecc5b6c965c820b946b110ee6ab9bc85b4abcca225c97873beac4f2c4e59e4971b6e5d8793bf0666cb8bb477182cab8e7167a4049a77b7e73824f7bde7d7a517f139e8349d7b2fe24c42a9a03b18dad3d3ff856608545b74d0d3e2b1dd58603c437ff5291f5b78fc778075d0a19f5fa4d6556519040000",
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
      "Thu, 02 Sep 2021 19:10:13 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-23-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "11fa48d3b7548daa04d6a94db734054dd314d9ee4d6648e2123bdd2ad4ffbe6b873210127c8aed7bce3de73ef248ee45b12563c244fa504179f87427193927a0698aafb3ebafd3eaa0aeff5e9d89bd8adc0e3fbbc9d3c90411c2b014cd77193494ac4a0e6abc5937d352563b5a4ad9c0448d8ed770fb5ebbdf1e0d461d6fe0214f41962c44718fecdf5aefd4b8d53a69375329d30ce84ea82697f9f37b6bdf69ed4a79075cabd66bc916aaa8d6fba29f33c9a916b2986cd668a05250c6905391a185ffcc2dbb789dba2968de4c11bc171c28e7b22ab4b18529b82c129156a5cd4ac68fc4da7c71206b7fe1cf2287cbacca8bb8a0399c3b5baa69ac0f3b70aec2d5d2990757ab70398de6ab205ecfbef8cb6973b65a6c96c1dab9fde287bea329cbc0729d8973616f015e507f0b4a8bc2aa47e6d9283f3568fe762c8680d20aea603c68f7a93b6c8f58c2063c197a3d96b481b1211bf4a8c7da7cd485ee9601459e15b52c5ac8623418b87c48bd98b940e32eebb9f1c865dd98f720e9f7bbcc4bb62e399e933fa5d07029d44e2a517788dc86f3c88fa37013cca6916f4b486895e9cbda9829e0a5478d0522e89d9a8e262a242a9976cf83c80fa7b3687ee3d7135e404af961fd80334e68a600d1b4c4e6692897728b0d23c174e95f22d84eecdb29a8c8f8e723313d372e5eb4fc991ee1008d5d6dbf641d85f3e0dada39216e685659c8be3e9832129119d3c75f08c41dad9390ef1b3ffc41eaa7101228a1e01f0f13c136f0e1af76da7bc4e2e6a38cd278c7d5e1ca88f012ea1512b6",
      "da27f6d0f5bca14b2cb8d46f62783835cde430192187423f5554ef3d165a8b55ea1984419c7e609b75fc078b58242d77040000",
    ],
    [
      "ETag",
      "CGJAuysGxF+ivsT12c+Vmg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-23-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "614fdb301086ff8bf735955a02ed88c48776141629b4d006096942916b5f328393f36ca75355f5bf730ed04d6352f892dc9d9f53ee5ebfd9b367d54896b08daa7eb560775f2af0772158816bb577f432d838601103cf2b22d35864f332db8cdcf3c3a552d7ca2cd3edddc505114efc849ab364cf4a055a3a96fcd8b386d7406d02755b37459745ccef4c28aef355bab8a6bc4619f2c57d964d67d99c1da263a3e49e171dff89b6c743c49e70b382122c3402c22cc6e213089f86351daf8d8681c3d60a70ac83bb83ca626bb8451c506570120f46e378381e9e4fce4fe2494ca046c1bdc286d8fb35cdc73c7aae57f89bb664a340d82ea68dcbeeb9a5ba92dd26214c17f9f8b41bf06f800b816de38b5eb054d6f957f5dec13715fe2535ff244857a5741f544123c1f651ca145c4a0bcef592e80a6ecc119b2d97d947551a6951c97e70ab7a00edb747e02a5b4eff272d19ec8f5697d37cfe81709e6c7344f2f466becea737b7817b7c33c26ce7c1dd5a24573908861a0d4fbf9e4dc6c3578f7dc3e03bfa4ee26d0b11139c7e95efcab3a4e4dac1e105c87ca9c588030000",
    ],
    [
      "ETag",
      "I3cLEfLb1skXDiiGipOIvQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-24-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85547f4fe24010fd2acdde3f7709420ba50512a39cf63c12042d45632e17d896695d28ddbabbe58e18befb4db7a278464d4860f7bd37f3e6c7f248562c5b901e0959f25080d87e59f290d408289ae0addb1e8fdb3c98369bd71bb3bdbc48d295759f1c1f2383952a49d7790a4792172202d99b4eea89e0454e05e74718e8a8691f594ecb74ccaedb6db6dc16ea24a4f190652b54df2b95cb5ea3b1cf5d4f384f52a03993f588af9fef1b9b6623177c0991928dd7291b9845363e4e7a92f2882ac6b3e3e9040d1412c40cd694a568e145b9084f5f87ae33baae2748deb0086814f12253a52d0c11f12c6649217454d27b24dae6c10f32f186de5960cc6326a49a65740df39a314fe9c1415b981b541ab359be327ef8e34b638e65c62c0539376e7f7abe673cd30623633a1a7993c0f87af2cdb8f0c7d32be3fbdd1eaebd9f09ed2e402a9669b3010d53288d3ef573f0768aa5802a2aa10267aee950ab6376c33874a3b8d36a87b10961d809dd366d8566d4b5c15e844051a7cae85a45339eb522d7729ba1bd88164d33b4296ddbae4ba9ed58961db75c13c0713ab1e5905d8dfc114cc139933997ac6a2ab9f50781370bfce9e8ac1f78ba8c9816a93aafcc95451cfa545824923ea86b57a28c63a672428351e0f9fdb36070e3554b31848446dbc903ae454c5309c8a6023ba8405cf205368d5c8d278360301ef587a8d093beda3324e9fd7a7c1104db5c7759e96fd2f7fdfe1d6aa81074fb1f3609fcc1e882ec7607f96e685a688e16e853956053010496b8969c49f314feea22f562ee6a2f0c5c5905d6bb30ce47dd83788dffdee1a746f00d551ec9f5d4f3ef4875e5430c02b2e8f3ed41b2063efd2bd8bf4be4e2cbc43452e11977359265924840b5b36c5d9a7952772cdbee7489260bf50673dace7e38658c3222ac21534f1555ef5277bb840af94c4210576d54cde21fac75f09c17050000",
    ],
    [
      "ETag",
      "75OO5oTU22Qv05jGglk1hg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-24-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "51",
      "61",
      "4fc23010fd2fe7473733984220215108510c4119c2070d21a5bbcdc2b61b6d8712c27fb72d06899f8c5fda7bd7f72eef5df7b016450c6d588a7453a1dc5da4a8c7b68850559956e62aa950081ea066a96566158df3cdcdab683e05c565318bc3d966dce91886e2ef983368ef211198c50ada6f7b28588e469608a9f4c2010ff4aeb4bdc94b3418dd1b9c536cf1683a1cde75877d3878275dc6fe255b2ccaf55f14f383072b5a4698a0c482a3355f4a5a21d703bb17c5f232435f5125392a7064f7904aaa4a26897cd3f1ebd77ead11068da0d56cd5c36668881971a60515863b9d186ba049b32ca20fb316a81b8274a5d950e2cead69f7a54097c28247945b12ea8471756c04b7f8e95c5d71ca5d82f3113dc6457636a5cff40fe06850edb77efeedadbbd3a89e2599a00a6dc6e098b747966dc6b4b5acd003cecc3f3f087dc4872f98ed48a344020000",
    ],
    [
      "ETag",
      "bluoQmq5Zi7O0n+nVd3VqQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000000002ffedd34d7282301800d0bb642d4e002dd09d28206590ca4811364c081f8ae1afc402994eef5ea7d7a8ef0eef1b114a81f3ecde3168d12b1244319674e9f5bab99baa98c7632cea68d22ce52bbf262af6d4b7b99670b32fc28b2aab37787135cce97b36ba2c080d87346e9f36b5b0862ee8145891adef4ea783a549b9d5a69b8ff3145c571bb895508564ca6366369e25998dc29dd1c6b2246cdced527e74ced956e4858e4bcaeba3ad8dad8cd7c9601027724b2624ae2547ff3457074a0b16fbd1a75f9a9e14d4e595f79ea1f7c9d9d3204c2fc02ad695353fed5b179a70f9f4f47fa10582b9af06e059f5d8aeae0d6381feea6777d1c3e3bf09648001fdfc027df84a7d19040000",
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
      "Thu, 02 Sep 2021 19:10:15 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-25-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "9b3014fd2bc87b6c134212088914ad514a37a6847484349aa6091963985bc0049b565595ffbe6bd374ad2ab54fd8bee7dc73ee074fe88e55299aa184e58796368f5f6e7982ce11953887d71ffcbabef20f4eb237b3aa606787c3d96aff309f03822996c0655dd09ee06d43a898edb6fdbce16d8d1bce7b90a837b47b96331a3883e9643a1c4d46c013b4c856acba03f65f296b3133cd93763fe73c2f28ae99e8135ebebc9bf743b36ef82d2552986f254d5011e6c7a25f0b4eb064bc9aefb660a015b4896989590116fe33d3e4e26dea3ec3653f07f03d231413c2db4a2a5b9082f02a6379dbe8ac68f684b4cd5707b4f556de3232082fdab28a2b5cd27323c512c7f2b1a6c655b8591b7e70b509d78bc8df04f176f9dd5b2ffacbcd6ab70eb6c6febb177a86c4494135d7981b17fa16c005f4532a24abb47aa49e95f27383fcf76351049016b40bc69381832d77304db2644232776427d98026899b4c6c3c4a06643aa6e334a118785a54b370c52bec0e6d1793496ca794c463cb22b1eb386eec582976324c6c3ba3e8788e1e1a26e925133517aceb10da877ee4c551b80b968bc8d32564b82de465674c15f0daa3840201f4414d4715651c9454bbfd20f2c2c532f26fbc6ec22b9a63f2b83dc08c335c080a68dc40f3246dd63c8586a160b1f62e01ac27767d0a0a34fbfd8454cf958b572d7fa14730406557ea2fda46a11f7cd3764e881b5cb41a72df1d5419192b94e9e31f00c28e7649d0cf9d17fe42dd534833dad08a7c3e4c00ebc0a7bfda69ef010b9b0f3242c21d56870825421adaad10d3d53eb35dcb1e4e8748831bf92e36b626a7a6a91c2a232d69259f2beaf61e0aedc45af10282204c3fd0cd3afe03e409b20677040000",
    ],
    [
      "ETag",
      "JoPpFIq6bW/fnli+qq+LWw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-25-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "30",
      "10c7bf8bf7b8204169c91aa90fd0b11535400be1655315b9f62573e7f852dba1a288efbe73dab1699d94be2477e7df29777fffb3673f95912c61f7aa7c6cc0ee3e94e06f43b002d768efe855a371c022069e9744a6f1f5c47e9b2febf5c778535d4a337cbe8a9f2e2e8870e207549c257b5628d0d2b1e4fb9e195e01b509d44d65f2368b98dfd5a1b8ce56b3c557ca2b94215f6cd2743c49a7ec101d1b25f73c6ff977b4dd1d22f680f72b28c082111066a92d3e80f0b3b0a6e355ada1e7b0b1021c6be1f6a0b4d8d4dc22f6a8d23b39eb0d46c3fea87f1e9f9f0ce321811a05f70a0db19b35cdc73c7aae57f8445bb241206c1bd3c645fbdc525dc9769310ce16d9e8b41df06f800b818df179275828ebfc8b7abfc15715fe25357f274857a5741754829160bb2855e75c4a0bce7592e8725ed7476cb25ca66f5531d2a292dde0567500da6f8fc0977439fe9fb464b03f5a7d1e67d33784f3649b2392cde6d375369edf04eeeed508939d077763915ce520186ad03ffd74168ffa2f1ebbc4e03bfa4ee26d0311139c7e952be5595270ede0f00ba95655de88030000",
    ],
    [
      "ETag",
      "L7KBrZMOpS+7UmCdn3zH7w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-26-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85546b4fe24014fd2bcdec97dd844701a5406294c5ea36c1c29656d76c36309ddee248e9d4ce142586ffbeb753f1b1663521299d73cebde73ea68f64c5d3880c48c8977705e4db2fb7222435028a2ef1949d6d64d70c8637ca9af25f0f5772353a0bee8f8e90c14b95a4eb2c81ba1445ce400e825963998b22a3b910750c546f77ebad6ec7ec9a7dabdfee581dd44948e2314f57a8be512a938366739fbbb114629900cdb86c30b17e3e6f6edacd2c17b7c0946cbe4dd9c42cb2f971d2e34430aab8488f82191a2824e47358539ea0851765149ebc0ddde074dd582279c31950c64491aad2168660228df9b2c87554327824dae6ab3f64668fed916f2c12b559d48c854eb730a834e6f36c659c79930b638125c53c01b930ae7ed89e6d3cd31cd7085cd79ef9c6d7e36fc6b93709a6c6f7eb3d5caba2a28d08a4e2a936e1d33081d2c0539f9cf7d329055451091538b7cc2e6df5cc7e1887168b7b9dc33036210c7ba175483ba1c9fa077010854051a7cae85a455391f6a86575cd2832a3b0cf6246a3b815b5fbd061718b9a718fd17e2ba43d1a935d8ddce75cc129979990bc6a16b9f21cdf9efb5ee08e86beadcb886991a8d3ca5c59c46b9f0a8b44d20775ed4a940bcc5476de717ddb1b8e7ce7d2ae863d862565dbd91d8e3ba6890464d39cae41417e21226c1a994e668eef4cdce118157a82d33d4392c1efc71781bfcd7497957e92a1e70daf5143f39c6effc166bee7b8e764b77b95ef922685e668817eab126c2a80c02dae9be0d23c81075da45eb85ded8581aba8a0f55f18e7a36e207f8bffd9e1af46f06e541ec9cfc0f6ae4975e4410c39a4ecf3ed41b2063ebde2fbfb865cbc7198462a7cc75d65b24cc272a87696af4b334fea1e3e3bfa03a168aede6187e6e17e38658c3222ac21554f1555f74d77bb840af94c421057cdad66f117f79537ecef040000",
    ],
    [
      "ETag",
      "cFvs60UAht7PiXxWskCFUw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-26-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff6d916f4fc23010c6bf4b7dbb91b1e1101212c1f887b8a00e48444348d98ed1b1ed46dba184f0ddbd0e83c6f8a6bde7fa7b72f7a407b61145ccba6c29926d05727f91807e314508aacab4a2abc44201b318689e10f9fa78b5f6449cbecd26fe53384bb68568e549af47848ad69073d63db095802c56acfb7e6005cf816c99de11a1f7a51177c1537f4232c7d8c8d13408fa83e0961dad33bf58949b1fc378120e47f7ff39e6478ba5b80c6105128a08ccf452620a911e9a608ae76506b6c24a46a0580dd70f89c4aae412d1a68eedfa76d3f71cdfe9b43baed7f608cc30e25a6041ec744cab318d9a67217e502ee61220eb9222aeea7367da979d46d3ad73180929c81d0ae55cc367bd4723c2bcdef9b7a9d36a78fed91301d7d0fc6b987f8f1fec35a8678994458189e19c22dda0a135c5d7b2028b459cfee241e8933e7e01562a3451e8010000",
    ],
    [
      "ETag",
      "XK8h3idjZYT6ORYgqni4mg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "7282300080e1bb64ad8e3182a63b417c455e5211d964900489b4823c0aa4d3bbd7e935ea77807ff77f83288e7955d13acff81dbc813e9ae0513c22c55c5bb6d79364814458db78dbdc8d52b43ad0e472bd574e9f8cd7d84cafc6977f548a8347d41c779f75b020a16e1f61e6895a31e28fbe80bb5ebd6b37436a78e819849d6b7f999a0112ceaa9dfaa227308c66282bf713892e6bd7cea8fa78ef2cab15da389b2f5c8b087a4b1bcadae4d878526e276df58cef71c812fdbc091e3a3c7127121754541b7fc716c287d33084d881baed35433653a961892ea8e33235e5e8e5e5ff0203c0bb4294bca2e2793b52301e80bff569dd17fcf9bfc6a39297e0e717e07b185d19040000",
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
      "Thu, 02 Sep 2021 19:10:17 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-27-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85535d6fa24014fd2b64f6b1555044d4c46c8dd25d12c516b14db3d9906118e8b4c02833b4318dff7def0cb5dba649fbc4ccdc73ee39f78317f4c8aa144d50c2f27d43ebc38f079ea0734425cee1d5d90ff6f9d5fcc0d2bb0539bb0f9cebb361f43c9d02822996c0e5aea01dc19b9a5031d96eba79cd9b1dae39ef40a24edfedf486b635b4c6eeb86fbb36f0042db225ab1e817d2fe54e4c4cf3a4ddcd39cf0b8a774c74092fdfdecda7beb9abf9032552981f254d5011e6d7a23f0b4eb064bc9a6e3760a011b48e6989590116fe33d3e4e263ea2ec3653707f013231413c29b4a2a5b9082f02a637953ebac68f282b4cd7707b4f196de3c32082f9ab28a2b5cd27323c512c7f2b0a3c665b85e197e70b90e57b3c85f07f166fedb5bcdbaf3f572bb0a36c6ed6f2ff40c8993826aae31352ef42d800be8a754485669f5483d2be5d706f99fc7a208202d681b8c5d6b887b236b9c64894bb291ed249945936494b80eb6138b8c0774902614034f8b6a16ae78d5b77b8e3be8d9f13019f5e3c1d819c609b1ed98b8ce108f52d74ec9181dcfd173cd245d30b1e382b51d42b7a11f7971146e83f92cf27409196e0ab9688da902de7b94502080bea8e9a8a28c83926ab71f445e389b47fe8dd74e7849734c0e9b3dcc38c385a080c635344fd27ac55368180a662b6f01603db1ab5350a0c99f17a47aae5cbc6bf91b3d82012abb527fd1260afde097b67342dce0a2d190a7f6a0cac858a14c1fff021076b44d82aeb75e7887daa79066b4a615f97e9800d6816f7fb5d3de0316361f6484843bac0e114a84d4b45d21a6ab7d658f7aae351a200daee5a758df1a9c9aa672a88cb4a4957cada8dd7b28b4156bc41b088230fd4037ebf80fcf6471ab77040000",
    ],
    [
      "ETag",
      "5q4qgPCyidYDc+hN5Q+6Tw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-27-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "dd6edb300c85df45bb75b0fc2d6e0cf422e9b22d859bb489733514862ad19e32595425d94310e4dd2bb95d56b403dc1b9ba43ec2e4d1f191fc168a93843c88f2b10673f85482bb0bc1066c2d9df52f8dca028908385a7a7268afaea9febc7b9c5ec7b2d96717383e347797979eb0ec1754942447520890dc92e4e791285a816f6328eb4ae56d161177d0a1b8cd36cbd5779f57c843bedaa5e96c9e2ec8293a3772ea68def21f68bb3f45648f0f1b28c080621066d106f7c0dc32ac6969a525f42cd68681252ddc1e94066b4d0d62cf577ac3b837988cfa93fe349e0e47f1c883121975029567775b3f1f71e8a8dce01fbf251904c2b4b1dfb8689f8daf0bde6e12c2e52a9b8cdb015f039431ac95cb3bc14218eb9ed5fb0bbea8f09694f483a0bf2a21bba0121407d345099d53ce0d58db49a2cda9d6676cbe5ea7ef5551dca0e0dd60233a00e99a33f02d5dcffe27ad37d83fadbeceb2c53bc23a6f9b33922d6f16db6c76731bb8fb1723cc0f0eecad41ef2a0bc15083fef8e24b3ce93f7bec0a83effc7712676a8808a3fe57f9211c490a2a2d9c9e008fec6ebd88030000",
    ],
    [
      "ETag",
      "2sCJap/Uq9J7lvjT8o4yvQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-28-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85536b6f9b3014fd2bc8fbb24949202f1e91aa364bd98696920e48a36a9a129b18ea96608a4dbaa8ca7fdfc5347d6d6ba548c43ee7dc735fbe47372c5fa311222cbdad68b9fb70cd096a212a710ab7c5389c2e6e26bae94eaa62eecc2fbe2f22f3eee80818ac5609bc2932da16bc2a632a46f3b09396bc2a70c9791b02b57b76bb6bf60dd3702ca7d7b7faa013344ba62cbf01f595948518e9fac1bb93729e6614174c7462be79bcd7b73dbd28f9358da5d05f5aeae022f4b74d8f331e63c9787e340f21814ad0724937986590c293724d4e5e86ee30bce9a440deb298e238e6552eebb42044ccf384a555a9a2a2d13d52693efb834277ea4e226d95c9edaa051f2ce432c71b5a1f94f74ac3425b2e8b1bed4b303bd356505fc2322a56dae29b1bb8da23cdf3b5b9efbb61a47d3cfea47d0d66f373edf3e5016efdc302125c532159aed28b30c9689dda4307bdbfe7560bb0c48236e0d2324cdcb50d8724c48a13bb3f24894109b18935c47d62c4ce800ed68462d0c93aba52e19ce7c4b0cdd872ec2431866bdb1c1267884d6212cbe80db0d57754003beea17d0bdd954cd253260a2e58d346b408bcc85d46c1dc9f8c23579591e02a93a74d727511cff394502490dea86b5fa38c83533d13cf8fdc603c89bc0bb75983294d71bc0b6f6111129c090a6c5c4207252dcff81a9a86ce67a11779337f3c05859aedf98121d0e8e7fd9320da15aacb527dd13808c697a0c1658977afb0300a3cff2bdaef9ff95de0ac521c2550a7c660db00885ec32272268c13fa5b15a95671df7a62c0924adafd2f0cf39157b47c89ffdac3af85e0d53439a21f7337b844cd5540135ad23c7e7f7b80ac80771fffe1250217de22d8080967d8d558d42671499b9d659b3a9907b5ddb59c6e172972295f6376d7181c8653c7a823d20dcde54345cd4b54ddaea14a3c92008455f39b59fc016e7265bf09050000",
    ],
    [
      "ETag",
      "pASLWkC/6ECupU9UVKWT6w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-28-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5f",
      "4f",
      "c2",
      "3014c5bf4b7dddc8d804dc1212c1a06216c40181680829e53207db3adb8e3f217c776f8b99c607e3cb7acfddef34f7dc9ec836c9572420cb24fe28411caf62502fba884096a99278143c97402c028ac6480e9d71632a68e61ca2c1be3ff35ee9b498eddb6d24247b878c92e044d609a42b4982b713c96906684bd50e09752cb4b80f9f3b6394195f6939988461a71bf6c8d9fae6a9540b5357aed138ea0f1efeb62d16c5f63f8ef9d9221bbe8c600d0272067ae842f00d30d5d7fb90342b52b0252f0503490c6c7ec4829705159cdbd8b1dd1bbbdef49ca6e3b77cd76b7908a69c5195f01cd9c90847238a2b9a467c8feb202e02c294b899b5f9ee74bbe1d7eaaec9a1e513881d4f64a561736938b7703073d518cf4c869f97f8d735af59797a54412518a0aaff76cfbf66eb1e15c8a1e0185482cee85cf2de714de3358112255884517cdfc7445df4f9131bb771dd3c020000",
    ],
    [
      "ETag",
      "P0T5Wram0xRNwIX3ZaWpXw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "ffedd34b7282300000d0bb642d0ea220e9ae34c347a88608b4ba6122068854830495d8e9ddebf41af5dde17d035a144ccabc170d3b8117a0a801c7c5386c6d07ddea096fb609e7dc65d24a3abebb6dc94570519eebd2a8e026bb7c1cab757f66fc30b8d8e5980db1f9d6c6a7b2112b0f371a69be0c69ab6a6fa731c61c51140516ccd2b9e1a3363482f8e60dd497b973b5ab148a002d61162d951e0d1b9d9a93d56b66973b8f665795287f86c5243a781999d585a8558d634d0ba6fb880bb6e85d5723f9a7eceea9e538f3b22ac2d5e25dcc085e7b77c8f03521c83cc6faf8e9e9ff0223c08696774ce6fcb17d6a4238027ff5f35eb5ecf1df61b4631df8f90587f1931c19040000",
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
      "Thu, 02 Sep 2021 19:10:18 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-29-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85536b6fda3014fd2b91f7b54078250109ad08d29509c21642ab699a22dbb9a16e43cc62a75555f1df77ed94ae55a5f6536cdf73ee39f791277227ca8c8c0913bbbf35548f5f6e2523670434dde1ebe570c5e681b7f4c2efd530bb11d3f0f666fd309920421896a2fb43012d25eb8a831a6f37ed5d25eb03ada46c61a2566fd4ea7a7dd77347fea8d7f7fbc85350e44b51de21fb46eb831a773a27edf64eca5d01f420549bcbfdcb7be7bed73954f216b8569db7921d54519d8f45bf1692532d6439d96ed040ada04a614f458116fe333376fe36755bd07d7b87e07bc181722eeb521b5b9882cb3217bbbab259c9f889589baf0e64132ec359e27059d4fb322de91ece9c8c6a9aeac7033817f17ae52ca28b75bc9a268b75946e6697e16ada9ead97db55b471ae2fc3387434650558ae3371ceed2dc20bea67a0b428ad7a629e8df2738316efc7620828ada009a6beebd16ee08e58ce7c9e07fd21cb5d602c60fe90f699cb470318640c28f2aca865d152962c73fdcceb05290401a4037f08e9c8ed7553de73bb0c46cc1bf89c1ccfc8432534cc853a48259a0e91eb78918469126fa3d934096d0939ad0b3d6f8c99025e7bd45820823ea8e968a242a29269f7224ac2783a4b16576133e125ec287fdcfcc519e7b45080685a61f334542b9961c348345d857304db89fd38051519ff7e22a6e7c6c5ab96bfd0131ca0b1abed976c9278117db3764e882b5ad41672df1c4c19b9288ce9e31f04e28e3649c8cf6d18ff22cd530c395450f2cf8789601bf8f4573bed3d6271f3514669bce3ea7065447805cd0a095bed333be8065e3f20165ce977b1c0f74e4d33394c46d843a99f2b6af61e0b6dc46af502c2204e3fb2cd3afe034e087f8377040000",
    ],
    [
      "ETag",
      "H5MbD86L6EJr5dhiAEjhOw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-29-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d93516fda3010c7bf8bf71a34280c46a43ec0c656b414da10d487aa8a8c7d09ee9c5c6a3b2084f8ee3ba71d9bda4ae94b7277fe9d72f7f73f47f65b9592856ca3f2a71acce1530eeed60731d85a3b4baf0a4b0b2c60e0784e647eb5dcfc5aecb77783a74dfc395aafb3fd56e597974458b18582b3f0c832055a5a16de1f59c90ba03681ba2ecab4c902e60e952fae9278bef8497981d2e78b75144da6d18c9d8273a3e48ea70dff81b68753c01e71134306064a017e96cae0230837f76b5a5e541a3a166b23c0b2066e0e728375c50d62872a9d8b71a737ec7787ddf1687cd11ff509d428b8535812bb5ed17ccca1e33ac63d6dc97a9e304d4c1b67cd734775259b4d7c385f24c34133e0ff001702ebd2a5ad60a68c75cfeafd055f54784d6afe4190ae4ae9362887528269a3549572290d58db4aa24d79559db1e97219bd55a59406956c0777aa05d06e77067e44cbc97bd292c1fe69f57d92ccde10d6916dce4832bf9ead92c9f58de71e5e8c303d38b03706c95516bca17addc1d72fa361f7d963dfd0fb8ebe133a5343c004a75fe54a3916665c5b38fd01cbeb23ea88030000",
    ],
    [
      "ETag",
      "gHObKNwhW4qbR/LUUfwhig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-30-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85536b4fdb3014fd2b91f765d34a9b366d1e951094926d9d2065690a62d3d43aee4d31a471881d5885fadf77e3500a4c032952129f73ee3df7e10772c3b305e993982f6f4b28d61fae454c1a04145de2e967d75edf833d1c8c7fc6e62a181e2dbcef62b0bf8f0c5ea9245de529ec4951160c647f3a692e0b51e6b410620f03ed59e65edbb64cdbf41caf633916ea24a4c909cf6e507da5542efbadd636777329c432059a73d96462f574debaebb4f2425c0353b2f532650bb3c8d6db490f52c1a8e222db9f4ed04029a198c18af2142dec948bf8f065e826a7abe612c9779c01654c9499aa6c610826b2842fcb424725fd07a26d3efb2013ffc41f46c69c0b39a3793e6f18739d726e5069cc66f98df1251c9f1a732c2be129c8b971f1cd0f7de389360a8c6910f893c8f878f0c9f81a8ea767c6d1e5166eec22a39d0548c5336d26a2710a9591c77e8dfe9d5225a08a4aa8c19963dab4ed9a5e9cc40e4b5cab172726c4b11b3b3d6ac526f3bad05dc44051a7aae85a453391512fb12c97c5ac6d53c7c596b3a46ddb3dc7edd185e538b16379dd6e879a64d320f7055770cc652e24af9b462ec251e4cfa2701a0c0791afcb486899aae3da5c55c4739f0a8b44d21b756d2a940bcc544d6014447e381846a373bf1efa092c295b4f6e71ec094d25209b1674050a8a53b1c0a691b3f164148dc6c1e004157a92675b8624fd5f0f3b41b4ce7597957e9341180e2e51438b82ae5f6193281c055fc966f32cdf394d4bcdd102fd5727b8ab0102d7b876824bf310fee822f5e26d1a3b06aea482f67f619c8fba82e225fe7b834f83e01da93d921f533fbc24f55108091490b1f7b707c91a78f7aa6fef1d72f1e6611aa9f01f7795c92a092ba0de59beaacc3caaddb6e7766da2c9857a85754cb3e76d8753c5a822c20a32f558517def74b72ba8944f240471d5827a167f01edcdc139f7040000",
    ],
    [
      "ETag",
      "+86ywe6CAOZb0mNCBd9JoA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-30-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "85ff4bf6b876543b741684a9c826149d75b2872112d3dbdadaf6c6247513f1bfefa68e39c65e92dc9373c8f9c889edb22a6601db64e9be0675bc49c1cced21025d1746d326b1d2c01c0686a7e41c84bde56672bb1d55333fbfdfc7f51b1f3dccfb7d7268b18592b3e0c4920c8a58b3e0fdc42a5e02c532d46b2e25b9cc515a61389b85e3c1948412632b4c97613818866376767e52ebb5dc5d238bd768327dfa2fb13a3b2cc74d040928a804d80e52610ec24c2c9ee6a52cc0d5582b019a35e6e62255584bae105d525cdf735b1ddfeb78bd6eafed777d321628b8c9b022ef7241d59841c38b083f888eb5c9a09a238126cd7a20d9a81a1a0a3b400eea8099f61ee1b3697127b06c1aff8e24bcd0d78c006ea0f537b0fa7e7c7834a05f141289060be15d804668dd86e06d0187094efff19c99cb7cfe02cd36542cec010000",
    ],
    [
      "ETag",
      "AL9UbI+hCnO3j4qduWaC8Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "4b7282300000d0bb642d0e8580a43bac8e52eb48a50574938949287f621211ecf4ee757a8dfaeef0be01a1942b857557f1163c839158684aa71be1cd17d75c3d69977b61416deb3d5da14c7bc558afe9a7359aa95c5ea2c09141deabd970dd1ba599d85f3949dc704430ce9575cbd89a129476db627cd54c26288db08b77a7747b3a27195687ca6b9411f70e345d261c7a0db8b1f9c8bbdd0d1a2fa631bf2dd0d0d66677a9abeca8f9a99ec1380945335bc4246abd1631bff62376c82b66c3d63e0bb2efcc7e15faa520a43cf6491bb0372871d62cddc27057557a993e3cfc5f6002f8200ac9152eeedb6d07a109f8ab8ff528f8fdff9c13c925f8f905021fcbcf19040000",
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
      "Thu, 02 Sep 2021 19:10:20 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-31-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "3014fd2b91f771b4491fb44d2534aa1246a736ddd214344d53643b3799218d4bec1475a8ff7dd70e652024f814dbf79c7bce7de491dc89322563c2447e5f43b5ff742b193921a0698eaffe03fde6c9cf7f7337de2fd6df76ee9e3dcc266767881086a5e8665b404bc9bae2a0c6eb553baf64bda595942d4cd4ea755a9d41cf1b78fed0eff6863de42928b2b928ef90fd47ebad1abbee51bb9d4b991740b742b5b9dc3cbfbbbbaebbade42d70addcd7922eaa28f77dd12f85e4540b599ead5768a0565025b0a1a2400bff99293b7f9dba2de8a69d2378273850ce655d6a630b5370596622af2b9b958c1f89b5f9e24056c13c98c60e9745bd2993926ee0c449a9a689de6fc1b98c960b67165e2ea3c5249e2dc36435bd0a1693f674395f2fc2957373154481a3292bc0729d33e7dcde42bca07e0a4a8bd2aac7e6d9283f3568f6762c8680d20a9a6032f406b433f27c96b121cf46bd539679c0d8880d4f698f79dcef433f65409167452d8b96b21cf930e877bc6ed23f4dbda43ff468c23ce6271d3ff353e0c0069d21399c90874a68b8106a2b95683a446ea2591c2471b40ea79338b02564b42ef44563cc14f0d2a3c60211f44e4d07131512954cbb67611c4493693cbb0e9a09cf21a77cbfbac71967b45080685a61f334540b9962c3483859041708b613fb7e0c2a32fef5484ccf8d8b172d7fa6c738406357db2f59c5d12cfc6aed1c11d7b4a82d64d71c4c1999288ce9c36f04e28e3649c88f7510fd24cd5304195450f28f8789601bf8f0573bee3d6271f3514669bce3ea7065447805cd0a095bed137bd4f506dd11b1e04abf898dfadeb1692687c9081b28f55345cdde63a18d58ad9e4118c4e987b659877fe025a53f77040000",
    ],
    [
      "ETag",
      "9waJ0o+zg/TyMUJv/ybwIA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-31-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "dd6edb300c85df45bb758064699dd5402f9236eb32383f4ddc8b61280c55a23db5b2e849728220c8bb9772bb6c580bb83736497d84c9a3e3037b5246b2843da8f2770376ffa9047f1b8235b8467b47af1a8d031631f0bc24f2a6987f8fc55cdf8addd3e487561257f16e7779498413bfa0e22c39b04281968e253f0fccf00aa84da06e2a93b759c4fcbe0ec54db69e2d6e28af50867c7197a6e3493a65c7e8d428b9e779cb7fa0edfe18b1477c584301168c80304b6df111849f85351daf6a0d3d878d15e0580bb707a5c5a6e616b14795de70d01bc4c37edcbf185d7c1e8e86046a14dc2b34c4de6d683ee6d173bdc61d6dc90681b06d4c1b17ed734b7525db4d42385b64f1593be0bf0017021be3f34eb050d6f917f5fe80af2afc4f6afe4190ae4ae92ea80423c17651aaceb994169ceb24d1e5bcae4fd864b94cdfaa62a44525bbc1adea00b4df9e80afe972fc9eb464b0bf5a5d8fb3e91bc279b2cd09c966f3e9261bcf5781bb7f35c264efc1ad2c92ab1c04430dfa675fce4771ffc56357187c47df49bc6d206282d3aff24d7996145c3b383e0375d235a888030000",
    ],
    [
      "ETag",
      "GfMJ6cMlQcwkBYlidoP6ww==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-32-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85546b4fe24014fd2bcdec97dd84472914288951d4aeb241604bd1b89b0d4ca7b775b4746a67ea4a0cff7d6fa7e2638d9a90c0cc39e79efb1a1ec80d4f433220018f6f0bc8375fae45406a04148df1d6399c4ea1fbe34625add04aac5fa7f76cc6877b7bc8e0a54ad27596405d8a226720078b7923ce4591d15c883a06aab7ad7aabdb36bba6d373ac76af8d3a094934e6e90daaaf94cae4a0d9dc79376221e20468c6658389f5d37df3ce6a66b9b806a664f3b565135d64f363d3fd4430aab848f716734ca090902f614d7982293c2bc3e0e075e806a7eb468ce43bce8032268a549569610826d288c745aea392c103d169bef841e6eed83df28d15177249b36c55335609956a99d2359407edbf32a83496cbecc6f8ee4dcf8c15d618f104e4cab838753dd778a28d26c6623271e7bef175ff9b71e24d1733e3f07207d7deb1c14443908aa73a4d9f060994293e7672f4767ea5802a2aa102973db34b5b7dd309a2a0c7a27edb0e221382a01ff46cda0e4ce674a013064051a7cae85a455391b6ac8edd891c270cfb3d66db2638acdda58169f651695b210d1c16d836906d8dfccdb982632e332179d54e72e18d7c77e97b8bc9d1d0777519112d12755c255716f1324f854522e983bab625ca053a95b3194d7cd71b1ef9a373b75a8731c4946de6b7b810114d24209be6d84105f99908b16964369d8ffcd174321ca342cf78b6634832f8fdf02cf03799eeb2d2df64e879c34bd4d03ca79bffb0b9ef8d262764bb7de1774e934273b4409f2a83bb0a20708d0b29b8340fe05e17a957725b7b66e0b22a68bd0be37cd415e4aff13f5bfcd408be9e2a47f273e17a97a4baf220821c52f6f9f62059039ffe09ec5e2472f14da28d5478c65d65b2346139543bcbd765328feabed5b23b1da2c9b97a83f51d73379c32461911d690aac78aaa17a9bb5d42857c222188ab36a966f10fe96822e711050000",
    ],
    [
      "ETag",
      "9BOOe6Jktl1d2l2ZHxcPiA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-32-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c2",
      "40",
      "10",
      "fc",
      "2f",
      "d7",
      "57",
      "2d6aa86240a81669b5a26d54281491f35cd36892bdde5efc40fcefdd3b8b963e94be243b9399656673149b245f8a502c92f8b30073b889c1beba21022a524bfcd298138892002b6356dee1613f226b9666f2d6ec6e9e63da537fd76ab182d40764528447b14a205d9208df8f229719b02d419a4bad59650fda119dd168d06d0f99c870e988e174306877065d712a5d5ca9243bf7f3c5379e44bde1e3dfb6f95c6ffee3989d4a628d8b0856602057e0a26b836b50b6e7ae4232d32994090ba3808417fb0fb1c1424b835866a61cd4cad57a50a9579a8d662d68042c4c51499b60cedae998a3098b56a611eef828a2c602e347becfca3fb74c5b53806fe1401fcc1613ba60589f89ca3dec7daa5b85996ff073c54aa674ddd195f60a1430aafe76cfbe93750e16e8c520d724700d2be7b60fe8d4bc2674e94a4249fec74f893de3d317a4219f9840020000",
    ],
    [
      "ETag",
      "5oyxOstrdrTX9EkKgsxsJw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "edd34b6e82400000d0bbcc5a0908e5d31d5ff9a91110c50d8161286840600619687af79a5ea3be3bbc6f904188304ec9e38e5af009e66ca33090f13a5933a6ca3e9030e3abfd7469f364082c5d2e7764a6936f6de3aa798e8224b2b9da4fbe79bbd5651e5dc736f6049fb5e846a9f4c757c1f9cb92ec31dbcc9946b59667b7e3019605616d97ee9a3870a01a9c692fde5ca11eda10ad43632ca23579de9fc3cc1f7d4fa093517509774c1d2f9a630571a658728bd95ff5a3bc04968b64b5b675ffe4e8d09162a328d6d2051b5ef870702c9da5dec0fda89da2c64df655ae316f6fff17580144bb7a4038ad5fdbf90f455981bffa29993bf4faafa16c4003f8f905e040e27d19040000",
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
      "Thu, 02 Sep 2021 19:10:22 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-33-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6fda3014fd2b91f75a20259000125a19849589842d09adb6698a6cc7c9dc86186287a9aaf8efbb764ad7aad2fa14dbf79c7bcefdc823bae755862688f0e2d0b0fae1c39d20e80231850b785daeb7cb1fdea7e5e1808f9e2c3641952dbe14d32920b86649bcdb97ac234553532627dbb85bd4a2d9e35a880e24ea384ee7d2756cd71e7be3bee339c093acccd7bcba07f66fa5f672d2eb9db5bb851045c9f09ecb2e15bbe7f7deb1dfdbd7e28e51257baf257ba0227bff17fd580a8a1517d5741b838146b23a653bcc4bb0f08f9991abd7a9bb1cefba05808f9c324ca9682aa56d410a2aaa9c174d6db2a2c92332365f1c50ecaffd7962515136bb2aadf08e5d58195638550f7b662da34d60adc2e5260a66c96a13a6f1fcda0f66ddf966bd0dc2d8babdf623df529894cc70ada975656e215c403f6352f1caa827fa592b3f3568f5762c9a00d292b5c1d4b35d7c39b2c724271ecd47ce90e436236444bc2176884dc70336c808c3c033a286852b51d9180f5c371fa47dc7a5e96038f4d2b147bcd41bba23d277bdecd219a2d305fa5373c5165cee85e46d87d06db44afc3489b6e17c96f8a6841c37a55ab4c674012f3d2a281040ffa9e9a4a35c80926ef72a4cfc68364f56377e3be1352b307d880f30e31c9792011ad7d03cc5ea4064d03014ce027f016033b1afe7a044939f8f48f75cbb78d1f2677a0203d47695f9a2388956e16763e78cb8c1656320c7f6a0cbc879a94d9f7e011076b44d82be6dfde83b6a9f2296b39a55f4fd6102d804defdd5ce7b0f58d87c90910aeeb03a546a115ab37685b8a9f6893deaf707761f1970addec4dc91776e9acea133b21dabd45345edde43a1ad58239f411084e987a659a7bf01cb168a77040000",
    ],
    [
      "ETag",
      "FLUFZ7BFqqav7sgOMndDJg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-33-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d93616fda301086ff8bf7354861a1b046ea07d860434aa183204d9aaac88d2f993bc7e7fa1c2a84f8efb3d38e4d6da5f44b72777e4eb97bfde6c87e4b2d58caee64fdd0823d7ca8c17d0fc106a8558efccba026601103c7eb406ab94b1c2e1a7af87111d76636a2857ebcbaf20495bfa0e12c3db24a8212c4d29f47a67903bead44d536bae8b288b98309c56dbe59aebefabc4111f2d52ecba6b36cce4ed1b95170c78b8e7f47dbed2962f778b7810a2ce812c22cc6e23d946e19d624de180503c2d69640ac83bb83da626bb8451cf8ca204906c371128fe3cbc9e5c76492785061c99d44edd9ddd6cfc71c3aae36f8e8b764c340d82ef61b57dd73efeb52749b8470b9cac7a36ec0ff015e96d86a57f48295b4e49ed4fb0b3eabf09254fc9da0bf2aa9faa01ab400db47495370212c10f592480537e68ccdd6ebecb52a5a5894a21fdccb1e40b9fd195864ebe95bd27a83fdd3eacb349fbf22c879db9c917c793ddfe6d3eb9bc0dd3e1b617670403716bdab0882a186f1e8d3c5641c3f79ec3306dff9efa4ceb610b192fb5fe59b742cadb82238fd01296dfdf088030000",
    ],
    [
      "ETag",
      "bniU3toFmsqX50gpB4sFnw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-34-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85536b6f9b3014fd2bc8fbb269799040f392aa364b59879692969056d13425c65c52b704536cba6555fefb2e26e963d55a0909f039e7de731f7e20b73c8dc880847c755740bef97023425223a0e80a4fbffb1b6f73d271456f3aecb0d1fceecfe7cde9c5e1213278a992749d255097a2c819c8c16cda58e5a2c8682e441d03d52dbbdeea5866c7ec77fb6dab6ba14e42128f797a8bea6ba532396836f7b91b2b215609d08ccb0613ebc7f3e67dbb99e5e2069892cd97299b984536df4e7a9408461517e9e16c8a060a09f902d6942768e1491985c72f4337385d375648bee70c2863a24855690b433091c67c55e43a2a193c106df3d907993a63671418cb882a58d68ca5ceb734a834168becd6f8ea4fce8c25d614f304e4d2b8fae6f88ef148733d63e679ce34303e1e7d324efdc9ecdcf832dfc3b55d58341281543cd536021a26505ad875ca7d3d9f5240159550818baed9a1ad9ed90fe3b0cbe29e7510c62684612fec1e502b3459df063b0a81a24e95d1b58aa622a53d883bd6810ded7e082d33ea5a61b7cb22db8ada1d9b32db6cf52ccbeec7645b23bf72aee084cb4c485eb58b5cf96ee02c027fe68d8681a3cb886991a893ca5c59c4739f0a8b44d21b756d4b940bcc54f6def502c71f8e02f7d2a9c63d8615659be91d0e3ca6890464d39cae41417e26226c1a399f4cddc09d78c3312af40ccff70c49063f1e9e04c126d35d56fa4d86be3f9ca386e639ddfc834d03dff54ec976fb2cdf254d0acdd102fd5725b8af000237b870824bf3187eeb22f5ca6d6b4f0c5c4605adffc2381f750df94bfce7169f1ac1db5179241733c79f93eac887187248d9fbdb83640dbc7bc9f7370eb978e7308d54f88fbbca649984e550ed2c5f976676ea5edbb2db36d1e45cbdc23aa6b91f4e19a38c086b48d5aea2eac6e96e9750211f4908e2aa79d52cfe02316efb47f1040000",
    ],
    [
      "ETag",
      "KRyNyD6Io8SA6cCYqz+yGQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-34-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff6d91616bc2301086ff4bf6b51db11d8a85c174ca56264eab6e832112dbb3adb6bd2e499d45fcefbbd4e160f825b9bb3c6f72efe5c8766911318fadd3f8ab0259dfc4a0a7260840559956b49558286016032d62227d9e1cd447321b64c5fbcba44edeba6bff757a7f4f840a13c805f38e6c93421629e67d1e592172205924b4b944d7a5c906bdf990b21c23938d17a351af3f1ab29375e157ab72f7c7cfe6813f7ebaa6589e2cb6c575001b905084605e2f256e21d4be31a6445e66602bac64088a357073104bac4a21116daad8ee9ddd6abbbccdbb9daee3765c02330c854eb1207631a3d698462db200bfc9177308904d481637cdba3765ee709b3b366f355e4c09b620f7982afe0087a697db10f3a6efab42e7220c8146d6faaf5afef6d1af35a8894432a5c0f8e1676f8f68689ab5a76505160b057dca73aacff9e9079c22413cf1010000",
    ],
    [
      "ETag",
      "I0hxsXhSDlnWKPyhV9bIOQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "82301400d0bde45b9df2d042ffca407804c50689f8c540b820a64311e465a77bafd36dd4b387f38d52cea1eb92db97801abda13995f5155f914633ccf1b27d2172e047fbc0ea054cdd61a3473862da0ee320caf97055449ee435bd66fd80930b094663abc93d0b4feab936361e0dd79e9d8f8a703209dce39c3185750426692fe03a913cb5bd46ee7763f45eb329261f01ed1535d945e7e5c1ae543bfc74277794e73283b91131162dd71d937a198d638eb357e7541497fb10faf4586b87c231594561190e6a6d0d3d6e0b5f4fadf14624e62c1be75c6e535eae9e9efe2fb4403035550b5d523db62b6b5d5fa0bffac96d6ee0f1df80b48516fdfc0203f25a1f19040000",
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
      "Thu, 02 Sep 2021 19:10:23 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-35-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85536b6f9b3014fd2bc8fbda2424900791a2354ae81a29211d21ada66942b631cc2d608a4dabb4ca7fdfb569ba5695da4fd8bee7dc73ee836774c7cb044d11e1d97dc3eac3b75b41d019620a67f0ea2dfda7d115aef64f378fee6838b86ca24391cd6680e09a257151e5ac2345535326a7fb5d37ab4553e15a880e24ea38c34e7fe4d823db1b7b0367ec004fb23c5df3f20ed87f95aae4b4d73b69773321b29ce18acb2e15c5eb7bef61d0ab6a71cba892bdf7923d5091bdcf45bfe78262c54539dbefc04023591db302f31c2cfc6726e4fc7dea2ec7453703f003a70c532a9a52695b90828a32e559539bac68fa8c8ccd3707b4f3d7fe22b2a8c89ba28c4b5cb0332bc10ac7ea5031eb22dc6eac5570b10d37f368b50de2dde2d2dfccbb8bed7abf0976d6cda51ffa96c22467866bcdac73730be002fa09938a97463dd2cf5af9a541ab8f63d1049096ac0dc6637b84fb13db232919d374e20c496a334226643cc40eb1a9e73237210c03cf881a162ea1e6d4b6fbc419c543c7a1b10b4d8e3d4c06714286ae67270e23ee041dcfd063cd155b725909c9db0ea19b7015f97114ee83c53cf24d09296e72b56c8de902de7a545020803ea9e9a8a35c80926ef72a88fc70be8856d77e3be135cb303decee61c629ce250334aea1798ad51b9140c35030dff84b009b895d9d82124d7f3f23dd73ede24dcb5fe9110c50db55e68b7651b80a7e183b27c435ce1b0379680fba8c94e7daf4f10f006147db24e8e7de0f7fa1f6296429ab5949bf1e26804de0cb5fedb4f78085cd0719a9e00eab43a516a1356b57889b6a5fd893816b0ffac8806bf521d677c7a7a6e91c3a232b58a95e2a6af71e0a6dc51af90a82204c3f30cd3afe03c364e70977040000",
    ],
    [
      "ETag",
      "9DEz6PapUzWw4652HuTymg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-35-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d93514fdb3010c7bf8bf79a8a762ded1a8987b4942d5268591b78412832f6253338b9cc760a55d5efbe7360058d49e125b93bff4eb9fbfb9f3d7b54956421bb57c5ef06ccee4b01eea70fd6601bed2cbd6aac2cb08081e3059169a44f76cb793c9a437e5e98c7e93cba797e3a3b23c28a5f507216ee59ae404bcbc2db3dab7809d42650376595b559c0dcaef6c54dba8e97df292f51fa7c799d24d12c59b043706c94dcf1ace53fd1767708d803deaf21070395003f4b6df001848bfd9a9697b5869ec5c608b0ac85db83c260537383d8a34a6f78da1b8c87fd717f3a997e1d4e86046a14dc29ac88bdded07ccca1e37a8d4fb4251b78c2b4316d9cb7cf2dd5956c37f161bc4cc7a376c0f70017029bca659d60ae8c752feafd055f55f897d4fc93205d95d25d50019504d345a93ae3521ab0b693449bf1ba3e62b3d52af9a84a250d2ad90d6e5507a0ddf6085c24abe87fd292c1deb43a8fd2c507c23ab2cd1149e3cbc5268d2eaf3c77f76a84d9ce81bd3248aeb2e00d35e88fbe9d4ec6fd178fcdd1fb8ebe133ad340c004a75fe587722cccb9b670f803012e69f688030000",
    ],
    [
      "ETag",
      "TAl/yNCI4CefDgrk9CAVxw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-36-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85546b6fda3014fd2b91f765937804020920552d6bb30e8d862e84566c9ac0496e52b721a6b643872afefb6e9cd2c7bab51212d8e79c7beecbdc931b96c764404296de1620b61fae79486a04144df176184faedcb9f3c3f73dbbc9d34da7234ebfdd1d1c2083952a4957eb0cea9217220239984d1ba9e0c59a0aceeb18a86ed9f5966d99b6d977fa6dcbb15027214bc62cbf41f595526b396836f7de8d94f33403ba66b211f1d5e37d73d36eae05bf8648c9e64bcb26bac8e6dba687198fa8623c3f984d3181428258c08ab20c537852c6e1d1cbd00d46578d14c91b16018d225ee4aa4c0b43443c4f585a081d950cee894ef3d90f3275c7ee71602c63aa6059339619956a91d3953e68f3a541a5b158ac6f8c2ffee4cc58628109cb402e8dcbafaeef1a8fb49167cc3ccf9d06c6c7c34fc6a93f999d1b9fe77bb8f62f0f4c3106a958ae130c68984199dc430f47af27570aa8a2122a70e198366df5cc7e98844e94f4ac6e98981086bdd0e9522b34a37e073a71081475aa8cae5534e7793f09ada41547dd38b1a8ddea856d9b8215c7b6d38fed4e92f4ec0eedc6bd88ec6ae44e3005274caeb9645523c9a53f0adc45e0cfbce361e0ea32125a64eaa44aae2ce2799e0a8b44d21b75ed4a9471742aa732f202d71f1e07a30bb75a8431a434da4e6f7115129a49403615d84105e28cc7d834723e998e82d1c41b8e51a1a77bbe674832f879ff2408b66bdd65a5bfc9d0f78773d45021e8f62f6c1af823ef94ec76cffc2e6856688e16e85365b0a90002d7b88a9c49f3087eeb22f532ee6a4f0c5c5305adffc2381f7505e225fe6b879f1ac17753e548becf5c7f4eaa2b1f12109047ef6f0f9235f0eef3dfbf45e4e26b441ba9f08cbb1ac9d2241250ed2c5b95c93ca87bed4ecfd47f1e8a0af50aeb779cfd70ca1865445841ae1e2aaadea2ee760915f2918420ae9a57cde20fc934f4250b050000",
    ],
    [
      "ETag",
      "AdOhEY7ZRRN6/ogv44rGKw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-36-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d1",
      "4e",
      "c2",
      "30",
      "14",
      "fd97fae8a66533109690084a1459880c78328494ee3207dbee6cbb0121fcbb6dd13d18637c69efb93de7e49edb13d9a5454c02b24e938f0ac4f12a0135354504b2ca94d457898504e210502cd1ccf96e3cbdcbf7dc8fa78732acf7b7d7745c27bd9e6648fe0e3923c1896c52c8624982b71329580e5a1633654cd4b134e8b13f1f6a94636cd0641186fd41382467a7e1674caa95ad1bd16c1e8d264f7fcb56ab72f71fc5f2ec902dae23d88080828319ba14b805ae46661f92e56506aec44a7090c492ed4322b02a99407475c7f5db6eabedd336ed76ba9edff1353143ce548a85e62e667a34a250b12cc2bd5e07f13441d8526f6663cfdab4a9475deab9b465b398d60b881a53d960d85e1af41e0e76b61b8eb9cdf1ab91d7088766f1df808346ad9f16cbaf21074705f255a04e2cc184a597e00f68d8da2650a2028770a63ffa3955177cfe04cf9786c545020000",
    ],
    [
      "ETag",
      "TkKQ4mwc3dQxpLvw/+0Kvg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "52",
      "83",
      "30",
      "00",
      "00",
      "d0bbe4bb74989052f0af14bbb0291459fcc9044cd90c4b28b238dedd8ed7b0ef0eef1b9034a57d8f6f4d456bf0046602d575ba365b45d3c7dcd61a14cb51830c65d8edd46b18b2c82e58d415f69b958dbb613b1ea5c4b17437c80ce843543766c7c850be98461608b235c81bd4905a10f393db5b873d8262755416becd73a7e5ccec0c99cb2a3dcb78a10113e2c92ce3dac1d9895c904bfdb4aa168d579325267c5a1237d2edf9f0ecc664e90e218c51d5c3d04bfc8471f35dfa3a8ec3e8d59eb0c0d72863a57ec59aa0fae539fec05e269ef617ed73fdf0f07f8115a0535b70dae3e2be5ddaa8ea0afcd5c7b7b9a5f7ff1a259c72f0f30b7498c35e19040000",
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
      "Thu, 02 Sep 2021 19:10:25 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-37-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8553db4ee33010fd95c8fb4aaf49af52b5546d804a348524a542ab55e4b893ac218943ec802ad47fdfb143591012fb14db73ce9c3397bc92475eecc994c43c7daaa13afc7810313923a0688aafcb5e5e6df8fc6501a9737f5306b0bb3cec6e67334470cd92342f33684951570ce4741bb4d34ad425ad846861a2963d6af5867677d89d8c267d7b64234f42965cf3e211d97f942ae5b4d33969b75321d20c68c9659b89fcfdbdf3dcef94957800a664e7b364075564e77bd19f9960547151ccb6011aa8255411e4946768e11f731f9f7f4edde6346fa7087ee60c2863a22e94b685299828129ed695c94aa6afc4d8fc7020817bed2e428b89acce8ba8a0399c597baa68a40e255817fe666dadbc8b8dbf9e87ab8d17058b2b773d6f2f36d7dbb51758bb2bd7772d45e30c0cd79a59e7e6e6e105f5f720152f8c7aa89fb5f25b83565fc7a209282da10946a3ee90f6c6dd499cc423968ced419c74218ec7f16840edb8cb260e38fb1828f28ca861d142140327193a091d47763c6491b31ff4a3d8617634811e7506d0eb3913871ccfc84bc5152cb92c85e44d87c8ce5f856e14fa5b6f310f5d534242eb4c2d1b63ba808f1e151688a06f6a3aea2817a8a4dbbdf242d79f2fc2d59ddb4cf81a52ca0ec113ce38a1990444d30a9ba7a05a8b3d368c78f3b5bb44b099d8cd2928c9f4d72bd13dd72e3eb4fc9d1ee200b55d65be2408fd957769ec9c107734ab0de4b939e832129e69d3c7df08c41d6d9290dbadebdf93e6c987042a28d8ff87896013f8efaf76da7bc4e2e6a38c5478c7d561528bb00a9a15e2a6da37f6b83f707a7d62c095fa121b8ced53d3740e9d117228d45b45cdde63a18d582ddf4118c4e97ba659c7bfa23db5ef77040000",
    ],
    [
      "ETag",
      "D1mrOiAwCeg4YPpSeWGyWQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-37-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d93614fdb301086ff8bf9b8544b17968c487c68a16c9d4253daa049432832f6253338becc768aaaaaff7d7660058d49e14b72777e4eb97bfd66471e84e2242577a2fedd81de1ed560af7cb002d3496bdcab45658004042cad1df961997f7f28c2e92c89e8cf1f5994c7fce3d9d5e9a9230cfb050d25e98e5402243724bdd911451b706d0c65d7a8b2cf0262b7ad2fae8bd57cf1d5e50d729f2faeb36c32cd66641f1c1a39b5b4ecf977b4ddee03728f772ba8408362e0676935de03b373bfa6a14d2b6164b0d30c0ce9e1fea0d6d8b554238e5c651425a3711c857178929c7c8a92c8811219b5029563afd76e3e62d152b9c247b725197b42f7b1dbb8ea9f1b5717bcdfc487f345111ff703be062863d8295b0e8295d0c63ea9f7177c56e15f52d27782eeaa841c826a501cf41025da9272aec19841124d49dbf6804df33c7bab8ae21a051f06376200907673002eb27cf23f699dc15eb43a9f14b33784b1ce3607a4985fced6c5e472e9b9db67234cb716cc52a37395016fa87178fce57312874f1e3b43ef3bf79dd4ea0e02c2a8fb55be094bd28a4a03fb3f56874f3288030000",
    ],
    [
      "ETag",
      "+POJkT0BE73aZWL3O6d/CQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-38-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85536b6fda4010fc2bd6f54b2b117030608c142594b8a92562526312a55505e7f3dab9607cc477264511ffbdeb73c8a351130909b899d99d7d3d9025cf633220114fef4a28b69f6e45441a04144df175494725f5cf60d41efebc4bddcefde66a19a64747c8e0954ad2d53a830329ca82811ccca6cdb410e59a16421c60a003ab7f70d8b3cc9ee9d84edbb22dd449c89231cf97a8be516a2d07add63e77331522cd80aeb96c32b17a7a6f6ddaad75216e8129d97a9db2855964ebfda4c799605471911fcda668a09450cc61457986169e957174f23a7493d3553345f28633a08c893257952d0cc1449ef0b42c7454327820dae68b1f64ea8edd51682ca4c2988b86b1d009170695c67cbe5e1adf82c9b9b1c0a2129e815c1857dfddc0359e689e6fcc7cdf9d86c6e7e32fc65930995d185faff770631f17adc42015cfb59190461954261e7be5bd9d5025a08a4aa8c1b96df6e861df74a224b259d2b7ba51624214f523bb4badc8644e073a71041475aa8aae553417b9e9248ec9a8d3b5db36d03eeb77cd24b6637062db89dbb1d5e9761d0b63925d83dc175cc129976b2179dd30721578a13b0f83993f1a86ae2e23a165a64e6b7355112f7d2a2c1249efd4b5ab502e3053d57dcf0fdd60380abd4bb71ef81852cab6d33b1c79423309c8a6055d8182e25cc4d8347231997aa137f1876354e8295eec19920c7e3d3c0bc2ed5a7759e96f320c82e1356a6851d0ed3fd8340c3cff8cec762ff25dd2acd41c2dd0ffea049b1a20708b2b27b8344fe08f2e522fddaef1ccc0755470f85f18e7a36ea0788dffdee1a741f03e6a8fe4c7cc0dae49fd14400205e4ece3ed41b2063e3cf3fdcd2117af0ed3e0c62a8ebbca6495841550ef2c5f55661ed5fd76af6b77882617ea0d665bbdfd70aa1855445841ae1e2baa6f4e77bb824af944421057cdaf67f11716cbfd5df3040000",
    ],
    [
      "ETag",
      "kaCuaNGeC2AZqgE4wvWkTg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-38-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6f",
      "82",
      "30",
      "14",
      "c5",
      "bf",
      "4bf70a0644544c4ca61bd94cd438d01717636abd22085c6c8b9b317ef75d70d9966d2ffd73fa3be939ed851de27ccb7a6c1347c712e4f92e02fd522d025065aa154d05e60a98c140f388c8fd222dcae372993cca43780c6c3f76ed61d4ef13a1c41e32ce7a17b68b21dd2ad67bbdb09c674036a5795610a3cf45b59d8f267e381f4c662465b8ada4e9623c1e0cc73ebb1a5faef5ba387c9bc279309a3efde7585d0d96e026801d48c80554190a8909083daaea29ba3c05536129052856c3f54124b12cb8443449319dae69b71dab6d791dafe9741c0253145cc79813bb08291ad3a8791ae01bb5634d0264bda4a2bb7a3c916c37dcaee5ba9eedb57cafae53a990803c61acac7b78afe334046675f43fde768bdc3fbd02b806fbb771f5996678d6a06612a99a82aa95756bf88015ade935b42cc16082d3073dc7fab6bf7e00be4f97cafd010000",
    ],
    [
      "ETag",
      "hUlpuqZZjDrkSqR1Ei51Bg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000000000002ffedd34b7282300000d0bb642d8e1654d21d292a8a296206ac6c327cc2475422a140707af73abd467d77780f10c63113823655c96ee01dc8f00d8ee3b1cd75647679df62e84bde1c35e26139982743f03d29ba6be9eb28aff2b385199f6d3a5cb92b279ca47b1bf955f46573e9d90b4f46e29ecdbdfc8407a206921c76d1071a3e215e91836ed19827adabf5e744d1ebf4483b1f2d093a34c5346c68bdc581abf737656bdea7c89e948db3aedba91242541a7aaada9bdd24bb8a6fb8cc70e4b12d4d86801169aa061c76c166edcc2f739919a2939624eefab2580c4ea2697cfcf2f27f8111603d2f6a2668f1dcaece201c81bffab4919c3dff2316d6ac063fbf8a41313f19040000",
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
      "Thu, 02 Sep 2021 19:10:27 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-39-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85535d4fdb3014fd2b91f74adbb4699ba65235aa1246519bb224858d698a6cc7c90c495c628709a1fef75d3b941521c1536cdf73ee39f723cfe89e57299a22c2f38786d54f5fee04412788299cc3eb95b7ba62fddbcbc56514ffe84f6e4b3ebf1fcc67334070cd92b8dc15ac2345535326a7dba89bd7a2d9e15a880e24ea385ea73f76ecb1edb9dec0711de04956642b5edd03fb8f523b39edf50edadd5c88bc6078c765978af2f5bdf738e8ed6a71c7a892bdb7923d5091bd8f45bf168262c54535db4660a091ac4e5889790116fe335372fa367597e3b29b03f891538629154da5b42d48414595f1bca94d56347d46c6e6d10145feca5fc4161545535649854b7662a558e1443ded98751e6ed6d63238df84eb79bcdc0449b4b8f0d7f3ee62b3daae83c8bab9f043df529814cc70ad99756a6e015c403f6552f1caa8c7fa592bbf3468f97e2c9a00d292b5c1c4b5c7b83fb13d92119766136744329b113221ee083bc4a6de900d53c230f08ca861e14a54943a23a74f483298a4fd6498b95ee2d9639a8ceca1938e2684d1618af627e86fcd153be37227246f3b846ec265ec2771b80d16f3d8372564b829d4596b4c1770ec51418100faa0a6bd8e72014abaddcb20f6c3f9225e5efbed84572cc7f4297a801967b8900cd0b886e62956af450a0d43c17ced9f01d84cecea109468faeb19e99e6b17472d7fa5c730406d57992f8ae270197c33760e886b5c3406f2d81e7419192fb4e9fd6f00c28eb649d0f7ad1ffe44ed53c83256b38a7e3e4c009bc0a7bfda61ef010b9b0f3252c11d56874a2d426bd6ae1037d5beb027037730b09101d7ea5dcc71ed43d3740e9d9195ac522f15b57b0f85b6628d7c054110a61f9866edff016e293dde77040000",
    ],
    [
      "ETag",
      "P9LPe1ZJCJSTX18ZmiAk2A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-39-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "93516fda3010c7bf8bfb1a24182c94487d8095b6482974217d98a62a72e34b6ae6f882ed3001e2bbef9c766c5a27a52fc9ddf977cadddfff1cd90fa9058bd8b32cb70d98fd4509eeab0f12b08d72965e356a0b2c60e07849e4b7ede612b7c54824e17cf9727d0b87c3dda1bcba22c2e62f5071161d59214109cba2ef47a67905d496a36a2a9db559c0dcbef6c5759a2c96b79457287cbe7c8ce3e92c9eb353706e14dcf1ace53fd0f6740ad8069f1328c080cec1cf521bdc40ee167e4dcbab5a41cf626372b0ac85db83d260537383d8a34a6f38e90dc2613fec4fc6934fc3f190408539771235b18f6b9a8f39745c25f893b664034f9836a68d8bf6b9a3ba14ed263e5c2cd370d40ef837c0f31c1bedb24eb090c6ba57f57e836f2afc4b2afe4190ae4aaa2ea8042dc07451b2ceb81006aced24d166bcaecfd86cb58adfaba2854129bac19dec0094db9d819b7835fd9fb464b03f5a5d4fd3f93bc23ab2cd194917f7f3753abd7ff0dcd39b11667b07f6c120b9ca8237d4a03fbafc3c0efbaf1efb82de77f49dc89906029673fa55eea46351c19585d32f5741885c88030000",
    ],
    [
      "ETag",
      "Yqj8oqf4dR6ENhDGezzHzg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-40-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85546b4fdb3014fd2b91f765934a9bf4dd4a083a082c5249599a82aa696a1df72618d238d80ea343fdefbb71288fb181542975ce39f7dc97f3406e78b6224312f1e4b600b9f9742d225223a069826f4fe72bf9bb9b49679c0727b7f7a1a26bb795ecef2383972a3ce729ec295148066a389bd613298a9c4a21f630d05edbde73ba2dbb6b0f7a8366abd7429d82341ef3ec06d5575ae76ad868ecbceb8910490a34e7aacec4fae97de3aed9c8a5b806a655e3b565035d54e37dd3835430aab9c8f667534ca0502017b0a63cc5149e95abe8f075e83aa7eb7a82e43bce8032268a4c9769610826b29827853451c9f08198345ffc215377ec1e85d652698cb9ac59cb942abdc8e81aca83715f5a54598b457e639d0493336b8915c63c05b5b42ebfb9816b3dd13cdf9af9be3b0dadcf075facd360323bb7bece7770ed9f2698e40a94e6994931a4510a657a8f5df4deceae14504d1554e0a26777a9d3b707511cf558dc6f75a2d88628ea47bd0e6d45361bb4a1bd8a80a24e97d18d8a6622b359b3d9693288fbcd7ed31eb4574eab633b6d6ab769cfe9d36eafdd8d074ecb21db1af925b98663ae72a178d54a721978a1bb0883997f340a5d53464c8b541f57c99545bccc536391487aa7ae6d8972814ee55c3c3f7483d151e85db8d52a8c21a16c33bdc5658869aa00d954620735c833b1c2a691f3c9d40bbd893f1aa3c2ccf77cc75064f8e3e159106e72d3656d9e641404a3396aa89474f317360d03cf3f25dbed0bbf0b9a16866304e65419dc5500816b5c46c1957d08f7a648b38edbda3303175583f35f18e7a3af40bec67f6ef157237873aa1cc9f7991bcc49f52a80182464ece3ed41b2013efc00ec6e2372f13ea20daeafe6b8ab4c95264c42b5b37c5d26f3a8c665b23be6f3a1a9d46f3067d0df0da78c5146843564fab1a2ea369a6e9750a19e4808e2aaf9d52cfe009c5919850d050000",
    ],
    [
      "ETag",
      "GYdrz6nr1LpRFqxTsamE3g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-40-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8d515d4fc24010fc2fe76bc1f26d4948e4a3511409167832841cd7a516da6ebdbb2248f8efee1d86184d8c2fedce746633b33db26d9c85accd5671f456803c5c45a09fcd10802a12ade89563a680390c348f8cb2e87ba180c147b67f8c0abc4e4683aa8e3a1d5228f10a2967ed235bc790848ab55f8e2ce329904d699ee6a4d187dcc0d9f0c99fceba4f13a2520c0d359e8f46dddec86727e7e24ab8d24b3b5f9cd359301cdffd6d5b2ef3ed7f1c8b93c336b80a600d123201267a2e7103420fcd5514654ea0a4b0900214b362fb219258e45c22968829d5dd52a559739baed7f2aab5568d84090aae63cc483b9f5234a651f324c0773a0aab9240da91eeb3b6cf1dd19572e3c66d34bc8a57f73d5bc7b00f207718ab0b86cd99706f616fe39505a6b6caaf5dcd3a6dfbbecbe71a2e4000a1cacf2d8bafa8bd8306359148bd1598caeeb97e1f8d9ad6b4b52cc06182d34fbf8ff5199f3e01b987c0b551020000",
    ],
    [
      "ETag",
      "buC9dceDznxKguo/lLD2tg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "edd34b7282300000d0bb642d0c7e28a53b3ee55395820a01364c808001c46850894eef5ea7d7a8ef0eef01505160c6b2e1d8e21e7c008e66aa58884bfaae9bb77a8cf3798ee221342a3f3fac7694ac8995afd8b75e8e019d09a41e88b55bc08de6a85aaff4c7aa778358b99bcc5b5497a292b88dd2bb96354bee1e85ed3eead2d08c7daf869a276fb6ae923851c491a1e4d8808d1195dd540f4281227a4b4e0e373c0e3d295d0b1d812557d972dfe9562bc8ddf4c4e75e83f1a16d437780917d49dc72db32ee18a3e407c115d26befdf3f4bf9adb89a8a2cd85f812d5b7e2bbebcfc5f6002f048c919b38c3cb7cf65559d80bffad9c0297efed7313ae333f8f905ed770dc319040000",
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
      "Thu, 02 Sep 2021 19:10:29 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-41-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "f7953ed3a64da56a546d189d68baa5296c4c53643b37c190c621764015ea7fdf8d431908093ec5f63de79e731f792277228fc9843091de5750eebfdc4a464e08689ae2eb68ab7fadfbfbc5f0f60eaebff7ae57defe71ff389d2242d42c457745062d25ab92839a6c37edb49455414b295b98a835e8b57a8edd75baeec8eddb231b790ab2e442e477c8bed1ba50934ee7a8dd4ea54c33a085506d2e772fef9d877ea728e52d70ad3a6f253ba8a23a1f8b7ecd24a75ac87cbadda0814a4119c18e8a0c2dfc67c6ecf46deab6a0bb768ae007c181722eab5cd7b63005977922d2aa3459c9e489189baf0e64e35d78f3d0e232ab767994d31d9c5831d534d2fb02acb360bdb296fed93a58cdc2e5da8f36f3736f356bcfd717db95bfb1aecebdc0b334651918ae35b54ecdcdc70beac7a0b4c88d7a583fd7cacf0d5abe1f4b4d4069054d301a751dda1b775d96b0114fc6f690255d606ccc46436ab32e770730881950e41951c3a2b9cc59cfa5b11343d48b07c368c0991db97d771cd98e436d3b7128650e399c90c7526858085548259a0e91ab60197a51186cfdf92cf44c0909ad32bd688cd505bcf6a8b140047d50d3a18e0a894a75bb977ee805b379b8bcf49a095f404af97e738f334e68a600d1b4c4e669285732c686117fb6f216083613fb710c2a32f9f344ea9ed72e5eb5fc851ee2006bbbda7cc9260c96fe3763e788b8a45965200fcd811468f9066b43d787bf88c4256db2909f5b2ff84d9aa700122821e79f4f13c126f0e9bf765c7cc4e2eaa38cd278c7dde1aa16e125343b244cb9cf",
      "ec71df1d0cfac4804bfd2e367486c7aed539ea8cb0835c3f57d42c3e16da8855ea0584411cbf6fba75f807518d414f78040000",
    ],
    [
      "ETag",
      "7UtXO2yD5jkeZJ1ZMEywyw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-41-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "b4c42258a0091780a060457e4abc30842cdb2914db6eddddaa84f0eece5644a3267ad3ce4cbfd99e73da1d3c4669002e2ca3d5538e727bb2423d36c504551e6b45b74ca40ac102d46c4564bdf3ea0f6e92fbb34ecfe6a7db8164de928f9b4d22145f63c2c0dd4118611c28701f7690b204698d8b384fd245d159a0b799194efd497f78457d2202d30f679ed76a7b5dd85bc7c58069b628f87faccdf7166cc47282214a4c391a2d99141be4ba6f6c2a9664319694c8254705055c3c584991674c0a51a249a95a2e959d8aedd88d5ae3bc52ab10180bce742452626753d2075a68164fc40bb9048700599464382caecf348e82c28829fb43dfa916fabe02242d8c625cfc0d92de35a3cff0811d22f8ceb144e4a93e523defaef5db7194e9e751972dbffb83509a923a227effb63bf55bb723c3cd0fdedb5b8d6a240505a9d06458b6abf58b9a63bfc7da11266a7a8fab658e1670467fc775a4c10d59ac70ff0638ce4fff7b020000",
    ],
    [
      "ETag",
      "8CxTJKmW/CF0c+yJraLbcQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-42-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4fa34010fd2a64ef1f4dfa038103dac478bdca29496d2ba51aef726997ed80ab944576f1d233fdee3780557b269a34a1bbefbd9937b3334fe49e672bd227114f1e4a28365fee44445a04144df0d609e7eae7e5f91cec0be3f6c109cde9e8eff4f2f81819bc5249bace53684b51160c647f3eeb248528735a08d1c6406dcb681fd9a66eeb3da767988e893a09693ce2d93daa6f95ca65bfdbdde5ee24422429d09ccb0e13eb97fbeea3d1cd0b71074cc9ee7eca2e6691dd8f939ea48251c545763c9fa1815242b18035e5295a7855aea26ffba13b9cae3b09921f3903ca98283355d9c2104c64314fcaa28e4afa4fa4b6f9e60f9979236f186ac3c960e4cd86dec1e0eaec6049d7558ce5614bd30f352ab5dd454b5b6279314f61c157cb0a592cf27bed4730b94004cddc520972a95d9f7b81a7ed93fdb1361f8fbd59a81d9c1c6a67c1643ed5bedfec71d0f00aa4e2596d37a4510a95d5e78efaefdfb1125085391b70e1e8363d72f55e14470e8b5df36b14eb10456ee47ca566a4b39e05d62a028a3a5545af5534139961eb8c198eeb8069d90cdc1ec4966edbae090c56e0ba966500331d9d6c5be44fc1159c72990bc99bb692ebc00fbd4518ccc7c341e8d565c4b44cd56963ae2ae2ad4f854522e983bab615ca0566aadec81f875e301886fe95d78cc50812ca36b3071c8c98a612904d0bba0605c5855861d3c87432f3437f321e8c5051bff574c790a4ffebe955106ef2bacbaafe9241100c6e50438b826efec3d0876d91edf64dba2b9a9635a5e6d7a726fe63039023ace5f564ec9d6cb2fdbdc55f8be03634b9c8e5dc0b6e487315400c0564ecf32940720d7cbad4bb0d432eee18a6910acf38734c56495801cdecf1756dbe51bba66e3816a9c9857a8759a6bd6b7215a38a086bc8d47345cd86d56daba052be9010c4",
      "9119fbe33344ff01b1db1826e1040000",
    ],
    [
      "ETag",
      "7TUtZQHUe6M2hq7T3PLzPQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-42-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff6d90d14fc23010c6ff97f375d3c10c03121ec4a0900cd4010fc61052c63137b6de683b9410fe77afc38826f6a1bdebfdbef4fb7a846d2ad7d085559aec2a5487ab04cd8b2d22d4556e341f25498de0001a9158f23348da5926b39b504c87b3f18e5ef7e3a4d76342c7ef5808e81e619362bed6d07d3b821405b24c145449c3903994b67f089fee66dc16b4b6ed641e8677fd700027e747b25c96db8b6034990d1e07d17f92c5c9818c56116e50a18cd13a281565189b910da74551e6e86aaa548c1a6ab81e248aaa522822976fdcdba6db68f95ecbeb049da61ff80ce6140b939264763e656f60c8883ca20fce064d06545d72cc4dbdeff9ba71dd0e5adeafe5d7a1f6b5c27afd0b079771c38e17df8ff40f06f5b32276acd19af5cec6efc986311cd2a80a1d8805fffa3035e7fef405faa309e8d2010000",
    ],
    [
      "ETag",
      "bx7g8jjnj/LaSHTMqoYvMg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "ffedd34b7282300000d0bb642d0e8450a0bb060515478a144137193e111189213062ecf4ee757a8dfaeef0be415614b4efc9706d2803ef4066d09e16539f5b783656072c544262b2c576e56824245ae9221e49dd95e7d66b4979a26e6d05768217bc35f6162e7721a5f0adf03e8a8a79d44747755ba50cdacddcf14e439cb8e52290e6d1b8cd82d5f900cf5d731d727828b5d5e61e7bf38b2f976d9d468312c096e85a9c6b6b13c904e235dcbbcead83a65eed364ce1cb0769904894e012193a4ec7900936cc14a462dfcfdbcf741cbb75f408558118472975bf2c3376e6d39797ff0b4c00bdf35ad09ed4cfedba61db13f0579f0c92d3e77f4c334105f8f9059019477e19040000",
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
      "Thu, 02 Sep 2021 19:10:30 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-43-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85536b6f9b3014fd2bc8fbb8269090b714ad514a3bb48474405a55d3848cb950b704536c5a4555fefb2ea6e9da4d6a3f20b0ef39f79cfbe099dcf322213312f3eca1866affe54ec4e48480a219def6736b01767153baeee56675fee322d8c3d7a7f91c11bc6149ba2b73e84851570ce46c1b74b34ad425ad84e860a2cec0eef446b635b2a6e369df1edbc89390a72b5edc23fb56a952ce4cf3a8ddcd84c872a025975d2676aff7e663df2c2b71074c49f3bda4892ad2fc58f45b2e18555c14f36d80066a0955043bca73b4f09799c4a7ef537739dd7533043f720694315117aab185299828529ed595ce4a66cf44db7cf3410267e52c438389bcde1551417770622454d148ed4b30cefdcdda70bdf38dbf5e84eec68b82e57767bde82e37abedda0b8cebef8eef188ac63968ae31374ef5c9c303ea2720152fb47ad85c37ca2f0d72ff1f4b434069096d301a5b23da9b58d3388dc72c9dd8c338b5208e27f17848edd862d3010c921828f2b4a866d1421483c49a820d69344e133b1af4c7104d06298d923e8d93746041cf9e92c30979aab882332e4b2179db2172edbba11385fed65b2e42479790d23a5767adb1a680b71e151688a00f6a3a34512e50a969b7eb858ebf5886ee95d34e78051965fbe001679cd25c02a26985cd5350ad45820d23de62ed9c21584fecf2189464f6eb99343d6f5cbc69f92b3dc4013676957e9320f45def42db3922ae685e6bc863fb414ab47c8bb5a1ebc36f44e292b659c8cfade3df90f6ca87142a28d8e7d344b00e7cfaaf1d171fb1b8fa2823159e7177986c445805ed0e715dee0b7b62e333221a5ca97f63bdde7078ec5a93a3c9083b28d44b45ede263a1ad582d5f4118c4f17bba5b873f45a7371478040000",
    ],
    [
      "ETag",
      "2l0Ae3nYpIIPOLFKGSye+w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-43-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d92dd6e82401085df657a8b897fc54ae2055a6d49c55ac49b36c6ac30200a2cee2e6d8df1dd3b4bad6dda26ed0dcc0cdf2ce71c38c036c943b06095c4bb12c5fe2246f5a00b0f65992a49b782e712c100542c26723d709beedc6decee1e479ed38c63f9badddbbd1e11325863c6c03a4094601a4ab09e0e90b30c692de06999e5cbaa3340ed0b3d9cf99e33b9a13ee3a1ee27f3f1d8ee8f877034ce8b21536c59f1ff585b1c0dd8f09587110acc03d45a0ac137182847db942c2b52ac495e8a00255470f52016bc2c98e0bc46935abb556b98adba59ef76bacd56a74560ca03a6129e133b9f913e505cb1d4e32fe4124c02445592e1a8ba3ed338092b23ba7426bed9aef47d05485a94a4b8fc1b24bd6b469fe1033b45f09d63192f7375a646e37bfbb7e328d3cfa3ae6d7ff883908a923a23bee30e67beed4e35b73879efef15caa9e014a4449d61a3debebaec98f5f758075c474defb19428d18080d1df719b28b022964a3cbe018a9ea7877b020000",
    ],
    [
      "ETag",
      "hCM2MUM1qKZFRI2ggsxkyA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-44-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "614fe24010fd2bcdde174d100ad49692180fb1e73581a2a568cce502dbedb6aeb6dddadde27186ff7ed3ada89c89262465f7bd37f36676e6193db03c424314b2e4b1a2e5e6db3d0f510b518913b81dc8d9687d86a7dc7b9c9ee9f77fff3c8da8bc3a390106ab550267454a8f04af4a42c570316f2725af0a5c727e04818e0ce3a86bf67553b72dbbd7b7faa013348d272c7f00f59d948518763abbdced84f324a5b860a24d78f67adf59f73a45c9ef2991a2b39fb2035944e7f3a4a7292758329e9f2ce660a012b45cd20cb3142cbc29a3f0fb7ee836c3593b01f29a118a09e1552e6b5b1082f03c664955aaa868f88c94cd777fd0dc9938e3401bcf165e70b0c2592d5e1d6a5868bb434b5b414d314be99245ab1a592e8b07ed873f9b02020eeeb0a062a5ddfc747c47db27bb9eb6f03c671e6807a787da853f5b5c6a67b77b1c7019512159ae3c06384c69edefa58deec7c7ab055842ce065c5aba89bb03dd0ee3d022f1a07f1cc63a0dc341681de37ea813dba04614520c3a5947572a9cf3bcab1b3d338c0d9b58f620328de89858b8dfb5629bea383663538f28e90e62b46da1a792497ace44c1056b7a896e7c37709681bff0c6a3c05165c4b84ae57963ae2ee2bd4f094502e993bab635ca3864aa1fc6f502c71f8d03f7da69666142134c36f347988618a782021b9738a39296531e41d3d0e56cee06eecc1b4d40a11ef872c71068f8ebf94d106c0ad565a9be68e4fba35bd0e0b2c49bff30f0611a68bb7d97ee1aa795a228be3a35f1d70d80ba50cbdba9b77732d1f6f7167e2d042bd0e442570bc7bf45cd954f635ad29c7c3d054056c0979bbc5b2be0c262411a21e10c3347449d8494b4993d9629f38d7a009360d948914bf901b3f5eeaec9758c3a22cd682e5f2a6ad64ab5ad862af14a021046c673bd0b40ff01c7ccbed2d6040000",
    ],
    [
      "ETag",
      "8tOAvBaMoNqMB0jzxwAetQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-44-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d90414fc2401085ffcb78b48d401142130e62889254942ac4680859daa116da4ed99d6280f0df9d2d8678f4b23bf3e69bcd7b7b844d5ac4e0c3324db615eafd55823cb14588a6cad8c8555261101c40568990b331cde2e0e9f0bce59b8977fdb11cf582f7a4df17c2445f982bf08fb04a318b0df89f4728548eb2a672aa0a1688f7a5ed47e3b7e1c3301421a7d80ae36910dc0d82219c9ccbd262516efeb5323f39b0a665882bd45844683d949ad618f1c8c6332a2f33740d553a4203355c0f124d55a934912b8adb6ebbcd8ed7e8347add5ecbeb7a026614294ea91076fa2ade80895516d2b7a4839600ba2e25e8aa3e7722dfd619763560adfd9d752eb3a69dcd7f1f1cec19cd8b267167d01a6b9c4dde9335ce128875850e444afef831e5737ffa01207189acc0010000",
    ],
    [
      "ETag",
      "VNoVdLMzOqt/Q3+ZbI9LXg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "599243400000d0bbf477a88ac4d2f3476448104b36f1a31a6d17a211a4e6ee939a6b4cde1dde0ba030c484f85d5de03bf8021362201dd25a2348f233a7f8a6ea6729e2eb36deca8328c2dd5a95936fbb3acd674b4c5cb23e0d278be887c75652447263f11ce665e69686c7a6bc5d4f26ab3267ae82bb994b604f564dda1b73a074bc63156a17398ff85e958ec9a3060d9483b07fe0d6bb63a5109ea9069851a17779c69a901bb1b60946d6a346bbbc0eb9d52d4dddbbf9f2724a1913099a07b38d7e0cfc95e06afbfa42a27a305443b1dd6bb4a7e2aba51985e2f633fdf1f17f8105c06393b598f8d97bfb8a857001feeafbddd4e0f77f09a316b7e0e71769586b6d19040000",
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
      "Thu, 02 Sep 2021 19:10:32 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-45-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536b4fa34014fd2b64f6ab7d026d69d2ac4d45eda6a52ea5ba9bcd860cc305a70283cca031a6ff7d2f83753526fa8999b9e7dc73ee836772c78b984c49c4d3fb1aaaa76f7b119113028aa6f82af63f6e0ba6ae2afb97e437838b62bff8113cce6688e00d4bd2bccca023455d3190d3ddb69b56a22e6925440713752cbb331899fd51df193b43736c224f4296ac787187ec5ba54a39edf58edadd548834035a72d965227f7def3d0c7b6525f6c094ecbd97eca18aec7d2efa3d138c2a2e8ad96e8b066a09550839e5195af8cf8ca3d3f7a9bb9ce6dd14c10f9c01654cd4856a6c610a268a84a775a5b392e933d136df1cc8d65db98bc06022abf3222c680e27464c150dd55309c6b9bf591b4bef7ce3afe7c172e385dbc5a5bb9e77179bd56eed6d8d9b4bd7770d45a30c34d79819a7fae6e105f563908a175a3d689e1be597062d3f8ea521a0b48436188efb233a98f49d2889c62c99987694f4218a26d1d8a666d4678e05561c01459e16d52c5a8862c4c603eac47638322d27b4ac681852cc159af600ecc970928c9c981c4ec863c5159c71590ac9db0e911b7f19b861e0efbcc53c70750909ad3375d61a6b0a78eb51618108faa4a64313e502959a762fbdc0f5e78b6079edb6135e414ad9d3f61e679cd04c02a26985cd5350ad458c0d23de7ced9e21584fecea189464fae799343d6f5cbc69f92b3dc001367695fe926de02fbd0b6de788b8a659ad210fed819468f9166b43d787bf88c4256db3909f3bd7ff4dda271f12a8a0605f4f13c13af0e5bf765c7cc4e2eaa38c5478c7dd61b2116115b43bc475b92fec89391c4f6ca2c195fa10734cebd8b5264793117228d44b45ede263a1ad582d5f4118c4f17bba5b877f7fdaf5f678040000",
    ],
    [
      "ETag",
      "ojJhnctPr5XsiW1GnjCJTw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-45-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "53",
      "82",
      "50",
      "10",
      "c5",
      "bfcbf68a339a8ac98c0f58564c688af8d438ce151644814bf74f8de3f8dddb4b664d35532fb0bbfcf672ce8103ecb2320607d659faac51ec2f52543353042875ae24dd2a5e4a040b50b194c8209915623f5eb73566bb85b2d9839e7aee6040848c365830700e906498c7129ca70394ac405a8b78ae8b72557716a87d6586f330f02677d4173c36fd64e1fbeed01fc1d13a2fc64cb155cdff636d79b460cbd7012628b08cd068a904df62a43c6353b2a2cab121b916114aa8e1fa412ab8ae98e0bc419346a7db68d9eda6ddecf7fa97ed5e9bc09c474c65bc247631277da0b86279c05fc925d80488ba24c3497d7da17116d7464ce94d42bb53ebfb0a90b424cb71f537487a378c3ec307768ae03bc70aae4b75a66efd47f7b7e328d3cfa36edc70f483908a923a23a1371ecd43773c35dcf2e47db85728a7825390124d86ad66e7aadbb39befb15e731335bdc75142a30511a3bfe33e53e0242c97787c03767800c47b020000",
    ],
    [
      "ETag",
      "RfQmryMb3ueikUt6aKuPIA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-46-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85537f4fa34010fd2a64ef1f4dfa034a0bb489f16ae594a45205aa31974bbbbb5dea2ab0c82e9a9ee977bf01ac5a2fd1a409dd7defcdbc999d79410f3c5ba111227cfd58b262f3e35e10d4424ce135dc32ea3f0fbcc909c74e4aee87e7e46a63ff1d1f1d0183572a89d33c616d29ca8232399a879d7521ca1c1742b42150bb6fb50dcbd42d7d680f7ba66d824eb2249ef2ec01d4774ae572d4edee7277d642ac1386732e3b54a46ff7dda75e372fc43da34a76f75376218bec7e9df43811142b2eb2a37908064ac98a054b314fc0c2bb72457eee87ee709c76d6407ee294614a4599a9ca1684a0228bf9ba2ceaa868f4826a9b1ffea0d09dba93489bccc653379cb807e1fce26089d32ac6f2b0a5e9871a96daeea2a52da1bc98276cc157cb0a592cf207ed5730bb0004ccdc61c9e452bb39770357db277bbe36f77d378cb483e343ed2c98cd2fb593db3d0e185e31a97856db8d30495865f5b5a3deffef5809b0829c0db8b0750b1b8e3e2431b169ec980312eb8c1087d8036c129d0efbacbf220c834e55d16b15ce446611c3367b43c3886d83ac4c6bd0779cd8b4636bc8188b63d2a7c62aa604a36d0b3d175cb1532e732179d35674137891bb8882b93f19476e5d468ccb449d36e6aa223efa54502490bea86b5ba15c40a6ea8d3c3f7283f124f2aedd662ca66c8de9267c84c188712219b0718153a658712156d03474390bbdc89bf9e32928eab7bedc31241afd7e7917449bbceeb2aabf681c04e35bd0e0a2c09b4f18f8b0fa68bbfd90ee1a27654da9f9f5a989ffd400c8805ade4fbdbd9385b67fb6f06b21d8862617ba9abbc12d6aae0216b38265f4fb2900720d7cbbd4bb0d032eec18a4910ace307354564968c19ad9e3696dbe513ba6e95806aac985fa8cf50dddda35b98a51456429cbd46b45cd86d56daba052be91008491f13dff0cd07f1c6308d7e1040000",
    ],
    [
      "ETag",
      "ecNw5ICBia8mbj9HbQy7zA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-46-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f",
      "4f",
      "c2",
      "4010c5bfcb78b425851aa0241cc0a0621ab4054e8690a50cb5d076cafec120e1bb3b5b0c72700fbb333bbf977d6f4fb0cbca35f46095a57b83f27897a28e6c11a332b9567c54542a0407508b94c9fbefe92e9a4646a5af29f95dd4ddfd308dfa7d2654f2898580de093619e66b05bd8f1394a2409689824ca919d2c7caf64fe1db60c66d416bdb4ee66138188623383b57c97259edfe04e3c96cf43c8aff932cce0e6c6915e3062596095a0795a42d267a6cc329515439ba8a8c4c50410dd7835492a9842472f9c67d68bbcdb6efb5bda013b4fc8ecf604e89d01995cccea7ec0d346991c7f4c5d9a0c580ac4b8eb9a9f7035f070dbf13dcae3ad3a11658abb76cd36bf8ddebbc69e78bdf4786478dea5d123b5668cd7a17e38f64c3680ea9a5410712c1bffe92e94b7ffe01e64b8c1ed2010000",
    ],
    [
      "ETag",
      "+zSkQSQusgJgo38et8qBgQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000002ffedd34b7282300000d0bb64ad8c258ad29d54054cf10348c50d13428640e41714099ddebd4eaf51df1dde37c084d0b68d6e15a725780712abba4214542f8cd52367d7040da1bbb98eb9ee1026ef556a9263d404652b9746e713b6567b347b4095155b335ee7e7ba8c2f5c4eddb183c3cc7207b3ba2f26545d879906d34bce447474f6426a9e25908f12f8290e9a97cd7113d3be0fec3bb22b3b1338e5f1f0d575129eba258690fb0ddb19d3849fccc19ed7d72d4450ff088dce0cd0c1d09ca327e1905b39b654d454d37d8c45b16b367cc2ec79b419defab32c56a4d174e5e5e5ff022340fb3a13b48db2e77638d3f511f8ab1fdd644d9fff0d8a0515e0e717586b007a19040000",
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
      "Thu, 02 Sep 2021 19:10:34 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-47-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85536b6f9b3014fd2bc8fbda3c4903448ad62ca52b52425620ada66942c65ca85b822936d9aa2aff7d17d374ad2ab59fb07dcfb9e7dc074fe49e9729999184e70f0dd48f5fee44424e08289ae32b9d82f9ed415685e355517331fe7b2d2e5757f3392278cb92745715d093a2a919c8d936ece7b5682a5a0bd1c344bd89d51b4dcde174e858ced8b44ce44928b2152fef917dab54256783c151bb9f0b9117402b2efb4cec5ede07fbf1a0aac51d3025076f2507a822071f8b7e2d04a38a8b72be0dd14023a18e6147798116fe33d3e4ec6dea3ea7bb7e8ee03d674019134da95a5b98828932e37953ebac64f644b4cd570712ba2b7719194c14cdae8c4bba831323a58ac6eab102e322d8ac0dcfbfd804eb45e46dfc385c5ebaeb457fb9596dd77e68dc5cba816b289a14a0b9c6dc38d3371f2fa89f8254bcd4ea51fbdc2a3f37c87b3f969680d212ba606c0da774640f9d244b2c96d9e669920d2149ecc43aa5663264ce0426690214795a54b368294a369ada63663ab169b1493cb132163ba3d48e1dc8ecb16527f4d466e47042fed45cc139979590bceb10b909bcc88da360eb2f1791ab4bc86853a8f3ce585bc06b8f0a0b44d007351dda2817a8d4b6dbf32337582c23efdaed26bc829cb2c7f001679cd14202a2698dcd5350af458a0d23fe62ed9e23584fecc73128c9ecd713697bdeba78d5f2177a84036ced2afd25611478fe776de788b8a645a321fbee402ab47c8bb5a1ebc36f44e2927659c8d5d60d7e92ee29800c6a28d9e7d344b00e7cfaaf1d171fb1b8fa282315de7177986c45580ddd0e715dee33db3627d3ee4f55b456ef62f6d83c76adcdd166841d94eab9a26ef1b1d04eac912f200ce2f87dddadc33f5e3645c778040000",
    ],
    [
      "ETag",
      "a6e3Bqspl9IpTuF2xVoHLQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-47-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6f82401085ffcbf48a09560b95c4835a6d4dc05ac45e1a635618100b2cdd5d6c88f1bf77965adbb44dda0bcc0cdf2cef3d38c0735a44e0c0264d5e2a14f54582ea41173eca2a53926e252f248201a8584264e1ede7de6eb9e989ba1b3c8e0456726226fd3e1132dc62cec039409c621649709e0e50b01c692de4599517eba63340d5a51e2e027f3abba53ee791ee674bd71d0cdd311c8df362c4145b37fc3fd6564703767ce3638c028b10b59652f01d866aaa6d4a969719b624af4488121ab87990085e954c70dea249ab6bb7da56c7b4cc9eddbbecd81d02331e3295f282d8e582f481e28a653e7f25976011209a920cc7cd754fe3346a8ce8723a0bac6ea3ef2b40d2e234c3f5df20e9dd32fa0c1fd82982ef1ccb7955a8333571ef07bf1d47997e1e753308c63f08a928a933124cbdf122187873cdad4ede87b54239179c8294a8336c9bddeb2bdb32df631d711d35bdc751a2420342467fc75daac0895926f1f806be6d31f87b020000",
    ],
    [
      "ETag",
      "nMvPMjUb9ry4TVCreusF0g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-48-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "e2",
      "40",
      "10fd2acdde3f9af0a3505a5a12e371d8f37a81a2a5e879970b6ccb1457da6eed6e35c4f0dd6fda8aca99684202b3f3debc37b3b33c910d4b57644002b6be2f20df7eb9e301691090748da789fb9889dff6fdf052dffc9a58773f6d558e2e4f4e10c14a96a049164353f0220f410ce6b3d63ae7454673ce9b58a8d9339b1d43530dd5ea5b5dadaf214f401c8d59ba41f6ad949918b4db7bedd69af3750c3463a215f2e4e5bcfdd06d6739bf83508af6a1641b5544fb63d1d3988754329e9ecc6768a010902f20a12c460bafcc55f0f5b0748bd1a4b546f0030b8186212f5259dac212214f23b62ef2aa2a193c91cae69b1f64668fed91af4c1cf768499392ba3c56a850f64143596247118b61c156cb32b358641be5bb379d6006f56fa900b154ae7fd89ead1c821d5799bbae3df395a3d363e5dc9bce2f946f370718f4b80221595a39f4691043e9ee7988cefbab2b0954a2669d5cf45583764cd50aa2a01f46a6a607910a4160067d9d6a811a5a3de8ad02a0c89365f58a45539e1abaa5ebdd48d734e8025591a79b96694257d774c3087a9665402fb474b26b90c79c49386322e382d59324d79ee3db0bdf9bbba3a16f576d44b488e5596dae6ce2ad4f894d22e883be76659671542aafc5717ddb1b8e7ce7caae37610c6b1a6e67f7b80b118d05209ae6340109f984af7068e4623a737c67ea0ec7c8a8aef7628f1064f0e7e995e06fb36acab2fa2643cf1bde2087e639ddfe97431f468fec766fe4ae685c54900a5f4575fd873a413ad8cb6bd43d880cb2fbbbc34f83e003a8b5c8e5dcf66e487de4410439a4e1e75b80e02af1e93bde3f2ac4e2b342192131c69d0b452912e650ef1e4b2af3351b17c9ec54ff0292e6f25d",
      "ced23bfb219735ca8a90402a9f3baa1f5535b632558817102671655cc73dc7ec3f52ed51cad4040000",
    ],
    [
      "ETag",
      "mNwpsZEqAQ5kXM9jJE0tCQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-48-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "50cb6ec23010fc97ed35a1792020481c00d18214419bc2a942c8244b1a48b2a9ed8010e2df59878af6d08bbde399b166f60287ac4ca00fdb2cfdae519e9f52d4ef668850d5b9567c55542a040b508b9495cefed049bce9761878e1e2397067e352f8a7c180152afec24240ff02bb0cf34441fff302a528906da2a0bad42cd2e7cae09770315c322c283170be0ac3e1289cc0d57a58369beaf06b98cd9793d749f49f657db5604fdb087728b18cd124a824ed31d633534e89a2cad15654cb181534e2864825d595904436bfd8ed9eed767ca7e304ddc0f3bb3e0b738a85cea864edea83b381262df2884edc0d3c16c866e49abbe63c9a05b5babda6c6b1d198747f69b7d5f61eb46be8f5cfb7a3b346f52689332a34f19c7bd43199f89a6b6959a305b1e03d4f337dc7d71bd1a090c0c4010000",
    ],
    [
      "ETag",
      "0jk6d2HbA92LO/91ICna3w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00d0bb646d18c122a63b815121520444810d03217c846a2450c04eef5ea7d7a8ef0eef1b248450cee3ee56d32b7807532221810898ad547d28b669902a4bf7a2989167637de803db76cc36daae092f95e4e60c8c88a18f752918ac2f5993c7dd72aa4fa11dad3a14d8e6b1b8f7897bfec811cb0af300af9b662d9e452c761ec27a1add71c9f7bd918ce1bc24914f3476b5b66a5e9c29b416e424a9be3f79170b16f5266e2ad83a871a9a7de31d4e6f47853b3e349a07fa5cce6f8ece6551eaa6c2a08dae2e56b04a5d914f263eeed99865bb5cc3ae577699f0f2f27f8119a023ab5acae3eab97d212334037ff5e36e62f4f95fa5494b5bf0f30b1611116419040000",
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
      "Thu, 02 Sep 2021 19:10:36 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-49-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85535d4fa34014fd2b64f6d516b4b44093666d2a6a9396ee02d56c361b320c171ca50c3283ab31fdef7b19acab31d12766e69e73cfb91f3c933b5e65644a525edcb7d03c7dbb15293922a06881afabea667359abac1e0bf33192e6e3457861ce673344f08e25e9ae2e612045db3090d36d342c1ad1d6b41162808906b637389e8cac89e539dec9c819214f4299af787587ec1ba56a3935cd83f6b010a22881d65c0e99d8bdbe9b0f2766dd885b604a9aef254d5491e6e7a2df4bc1a8e2a29a6d2334d04a6812d8515ea285ffcc2c3d7d9f7ac8e96e5820f88133a08c89b6529d2d4cc14495f3a26d7456327d26dae69b0389fc95bf880d26ca76572515ddc19191514513f55483711e6ed6c63238df84eb79bcdc0449b4b8f4d7f3e162b3daae83c8b8bef443df50342d41738d9971aa6f015e503f03a978a5d5e3eeb9537e69d0f2e3583a024a4be88389634de8b16b79699e3a2c7747e334b7204dddd419d3516a31cf063b4b81224f8b6a16ad4435f6b2cccd1c3b01065e62b3899db8e06478cd20f3c01de5d609d91f91bf0d5770c6652d24ef3b44aec365ec2771b80d16f3d8d725e4b42dd5596fac2be0ad47850522e8939af65d940b54eadabd0c623f9c2fe2e595df4f780505654fd13dce38a7a50444d3069ba7a0598b0c1b4682f9da3f43b09ed88f435092e9ef67d2f5bc73f1a6e5aff41807d8d955fa4ba2385c0617dace017145cb56431efa03a9d1f20dd686aef77f10894bda67213fb77ef88bf44f21e4d040c5be9e268275e0cb7fedb0f888c5d54719a9f08ebbc36427c21ae87788eb725fd8ee68628f1da2c18dfa101bbbf6a16b5d8e2e23eca0522f15f58b8f85f662ad7c056110c71fe86eedff0138ef04fc78040000",
    ],
    [
      "ETag",
      "LnhOHptdp5o/xSs/xGRG/A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-49-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "65bcb4c4f257a0091755514900a12d578690a59d4261dbadbb5b0d21bcbbb315d1a889deb433d36fb6e79cf600bb348fc18555ba7e2e51ee2fd6a867a6f051955c2bba1522570816a0666b22fdf6d69905eccaef36f594ef6c6f7eb96d78fd3e112ada60c6c03d4092228f15b84f07c85986b416095e66f9b2ea2cd0fbc20c83d01f4eeea9cf446cfac97c34f2ae4703385ae7c59869b6acf87fac2d8e166cc5cac70425e6111a2d85145b8cf4d0d8542c2b38d6942865840a2ab87ab096a22c9814a246935aab57ab3b4ddbb17b9d5ea3d96912c845c4742a7262e701e9032d34e3be782597e01020ab920c27d5f585c6695c1931e570123aad4adf5780a42529c7e5df20e9dd30fa0c1fd82982ef1ccb4499eb3375377af47e3b8e32fd3cead60b073f08a529a933120ec78320f4c653c32d4edeaff71ad5540a0a52a1c9b06eb7baed8e63bfc77a234cd4f41e57cb122d8818fd1d0fa90637615ce1f10d090a84817b020000",
    ],
    [
      "ETag",
      "R5j6QSa/R83tPlk0AU+j2A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-50-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8553fd4fa34010fd57c8de2f9aeb0794afd2c478b5a2476ca947a99eb95cda65bbd45560915d348de9ff7e0358b567a24913ba3befcd7b333bf38cee59b6420314b1f543498bcdb73b1ea116a212afe1f6c424df2facd1f9c5933b9e6cceae9cf990a64f47478060154be0344f685bf0b220540ce6b3cebae0658e0bcedb90a86daa6dcdd2554b756ca7a7db3af0044de231cbee817d2b652e06ddee4ebbb3e67c9d509c33d1213c7dbdef3ef6ba79c1ef2891a2bb2fd90515d1fd5cf438e1044bc6b3a3f90c0c9482160b9a6296808537e62afab19fbac370da5903f891118a09e165262b5b9082f02c66ebb2a8b3a2c133aa6dbefb8366eed81d85ca64f8fb6089d38aba3c54b050768796b2848a6296d0055b2dabc86291df2b67c1740211d0bfc5828aa572fdd30d5c651fecf9cadcf7dd59a81c1c1f2ae7c1747ea99cdcec61c0e38a0ac9b2da6188a38456ee5e9ae87d7cba8a80256836c185ad5a58ebab4e14473689fbba19c52a8da27e649b588f54e218d4584514034f56d96b16ce7816f5716c46543335d3eac766bc7262c73628d1346af40c43334c5db71cc346db167a2a98a4a74ce45cb0a693e83af042771106737f340cddba8c1897893c6dcc5545bcf729a148007d52d7b68a320e4ad5b3787ee806c351e85db9cd248ce91a93cdec016621c689a080c6054ea9a4c584afa069e8723af3426fea0fc7c0a89ff772871068f0e7f98d106ef2bacbb2fea261100c6f80838b026ffe8b810fcb40dbed3bb92b9c9435a4c6d7a726ff6313401ad4f276eaed9d2cb4fdbb855f0bc102345ae8d7dc0d6e507315d0981634235f4f0180ebc0977bbc5b2ac0c25a818c9070869923a21221056d668fa5b5f986ddd76dc331510d2ee487585f53774dae725419694a33f95251b35475dbaa50295e41108491f13dff1ca2ff008c5fdf2ed4040000",
    ],
    [
      "ETag",
      "B5c+K6CGKwELMyFV9UAemw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-50-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff6d50d14ec24010fc97f5b5c59622a4243c00294ad22016501343c851965a68bbf5ee0a21847f77af18f4c197bb9d9d99cbcc9d619f161be8c23a4dbe2a94a7bb04f58b19225455a6155f25150ac102d42261a5fbfefae60fefd360ecb7a66d3953e160313af67aac50f127e602ba67d8a6986d14743fce50881cd92672aa0acd227d2a0d1e85cffd39c39c36064e1661d81f84015cac9b65b52af7bf86f1641e3c06d17f96e5c5821dad23dca2c4224693a094b4c3588f4d3925f232435b51256354508b6b229154954212d9bcb11f1cdb6d7b4edbf13b7ed3eb782ccc28163aa582b58b1967034d5a64111db91b345920eb916b6eebf3c06bafe1b6ea1a875a63d2fda59b8da677a35d432f7f9e1d9c34aaa924cea8d0c473ae518764e26baea5658516c482fff929d5577cf90685a5429ac4010000",
    ],
    [
      "ETag",
      "1XVW9C/iEI94P6rSsLBUFw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000000000002ffedd34b7282300000d0bb642d0e486442774440a97caa061137990851918e7cc210c1e9ddebf41af5dde13d01cb322e04edaa92dfc10718d8cc9c66d3758db02d6f31c5c1c958050d1ed374ccbc4d6df929ce3ddb1f3c884e0adb46e73ae8617c435666e4d1e27272b465a7acbde47c91c8eec81261b8275dac2a0ccae6d13b642dc3cbc13d8a8a15abb1a84a6490abd4130d5a7ea2a2887ec95e1d5261ce3656ee90c6a01a2ccd5eec5a224297aa9fe5f7434febd9a88be6ca5d7ce4078bc8bde1bab4d824239b0b8b1fddd5cd59e47e18f9ed72c7efa62d48b4ddca7d3a7d7bfbbfc004f0475db45cd0e2b55d9f9be604fcd5a7dd50f3d77fcc59cb5bf0f30b7cf92c1919040000",
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
      "Thu, 02 Sep 2021 19:10:38 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-51-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6f9b3014fd2bc87b6d4212520291a215a574654bc84648ab6e9a906d0c750b986293a9aaf2df77314dd7aad2fa84ed7bce3de77ef084ee7995a239223c7f6859f3f8e94e10748298c239bcba69ededf797ced7ab4d9be7d64df0ede7cef4160b40f08e257159176c2045db5026e7bbed306f445be3468801241a9c8e0763db1ad92377e64eac99053cc98a6cc5ab7b60df2a55cbb9691eb587b91079c170cde5908af2e5dddc4fccba11778c2a69be953441459aff17fd5c088a1517d562b70503ad644dc24acc0bb0f08f9992b3b7a9871c97c31cc07b4e19a654b495ea6c410a2aaa8ce76da3b3a2f913d2365f1dd0d65ff9cbd8a0a268cb2aa970c94e8c142b9ca8c79a1917d1666d04e1c5265a7b71b00993edf2d25f7bc3e566b55b875be3fad28f7c43615230cd3516c699be857001fd9449c52bad1e77cf9df2738382f763e908202d591f4c66231b8f9d914b3232a399639d926cc40871c8ec145b6444dd299ba68461e06951cdc295a8dc19716d6c5b896d4dec64ea3a7682c7139a3097e0713ac28eed127438417f1aaed83997b590bcef10ba8e82d84fe268172ebdd8d72564b82dd4796fac2be0b547050502e83f351dba2817a0d4b53b08633ff2967170e5f7135eb11cd3c7ed03cc38c3856480c60d344fb1662d5268180abdb57f0e603db1efc7a044f35f4fa8eb79e7e255cb5fe8310cb0b3abf4176de32808bf683b47c4152e5a0dd9f7075483e55ba80d5c1f7e031296b4cf827eecfce806f54f11cb58c32afaf13401ac031ffe6bc7c5072cac3ec8480577d81d2a3b11dab07e87b82ef799ed58cec4d67faac28d7a179b5af6b16b5d8e2e232b59a59e2bea171f0aedc55af90282208c3fd4dd3afc05c118cabc78040000",
    ],
    [
      "ETag",
      "9dpAvvH8JVOugg3YIKZU/A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-51-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c2",
      "40",
      "0c86ffcbf97524c3c190257c18888a0ec431121343c8b17563b8adf3ee262184ff6e6f221a35d12fb7b67bdabd7d777bf69c161173d82a4d5e2a10bbb304d4830e7c9055a6243d4a2c24308381e209917679fbe863c7b54cab8fd86c736f70676f7b3d2264b8869c3367cfe214b24832e769cf0a9e03b585985579b1ac3383a95da98bb3c01f4dae29cf31d2f964ee796edf1bb283716a8cb8e2cb9aff47dbe260b00dae7c8841401182d6520adc40a8467a4dc9f3328386c44a8420590dd72f128155c90562832a8d76b3d1b42dd336bb9deeb9d5b108cc30e42ac582d8f98cf431858a673e6ea5f684005187b4705c9faf544ea37a111d8e2681ddaaf57d05485a9c66b0fc1b24bd6b4ebfe1033b5af09de33956853a5157debdfbdb38f2f473d4a51b0c7f105291532724188d87b3c01d4f35b738eededf2990538164a404ed61d36c5db43bb6f96eeb00b5d5f41d47890a0c1672ba1d37a9624ecc3309873755bc92497b020000",
    ],
    [
      "ETag",
      "6pJXRo7A303Boo15aLCK6w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-52-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "a3",
      "40",
      "10fd2a64ef1f4dfa034b5b6813e3f52ae791ab5429d598cba55d960157814576f1d233fdee3780557b269a90b0bbf3debc37b3b34fe49e6721199380c70f25149b2f7722202d028ac6789a9efd357e52fbf2d2f0d42057a13912398f8f8f11c12b96a4699e405b8ab26020c7cb45272e4499d3428836266a0f7aeda3a1a10ff59139ea19a6813c094934e3d93db26f95cae5b8dbdd69776221e20468ce658789f4e5bcfbd8ebe685b803a664775fb28b2ab2fbb1e8492218555c64c7cb051a2825142b48294fd0c22b330cbeeea7ee709a7662043f720694315166aab2852998c8221e97459d958c9f486df3cd822cec993df5b5e97ce9fa07eb902a581f6a546acdb2a5adb19e8827b0e2e1ba3a5fadf27bedbb373fc708aadf520972ad5dffb03d5bdb073baeb6745d7be16b072787da99375f5e68df6ef630e83004a97856fbf3699040e5edb985cefb8bab0854a166135c99fa901e59fa2888029345963108221d82c00acc0135029d8dfad00f03a0c85355f69a45339105c630ea337d34e88700bd9ec54c3d30c134a3301c308b0e185803c3ec4564db227f0aaee094cb5c48def4915c7b8e6faf7c6fe94e27be5d9711d13251a78db9aa88b73e151689a00feada56512e50a9ba14c7f56d6f32f59d2bbb998319c4946d160f3809114d24209a16340505c5b908b169e462be707c67ee4e66c8a82ff762879064fcebe995e06ff2bacbaafe9389e74d6e90438b826efe8ba18f619f6cb76fe4ae6852d6901a5fef9afc8f4d801c612dafbbdede6e48b6bfb7f8b5088e7fa3452e97b677439a230f222820639f4f0182ebc0a7af78f7a4108b8f0a65a4c23dce1c9395082ba0993d9ed6e61bb6658c8c7e9fd4e042bd8bf54d6bd7e42a",
      "47951152c8d47345cd93aadb56854af902c2208e8cebb86718fd07f9c81363d2040000",
    ],
    [
      "ETag",
      "mGz3KaEQQ3Rt5ptd79opig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-52-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d504d6bc24010fd2fd36b027e6024010fb54a2b0d5ad37a9022b26ec6349a64b6bb1b2588ffbdb3b1488fbdeccebcf766786f2e70ccab1422d8e5d9778dba79c8d02e5d91a0a90b6bf8535419040fd08a8c95e57a32798da51a2c964d589f83391dc3c579346285915f580a882eb0cfb1480d449f17a844893c960aeb96d846b96e36ff983e4f13064a4a1d305fc5f1e3389ec2d5bb8f6cb7eaf8af91cdd58303ed12dca3c64aa273a0341d50da990b6744a90af40dd55aa28156dc1299a65a094de433e20f7a7e37e877824e380c7bfd619f8505496173aa58bb7a676f60c98a22a13367831e0b745b72cc7dfb9e181eb4194eadc059fbcb0577aeebb8cdefc27163d1bc696277069db1cecde41339e37cb8c8ea1a3d90822ffc92db5b7ffd0107a80200be010000",
    ],
    [
      "ETag",
      "mYDDKLcp5OQy9uw6Nok9Ow==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "bb64ad0e7fa1bba2144a144684e1b36190a41201f90430d0e9ddebf41af5dde17d832ccf31a5e9d094f80edec09c09da26dfc056d5f78fa2b343770cb7eb87209b3b19b23c169135d42822a57a5b6b2ce63ce255aed491109aec78490a72b4ecb2dd91a898f54c98165efce21bc88c2098ae3b5eb297e04627a191bae5329cdcb2a131925034e99d81f46a9aa063a9ea05f699b46d877d3d3a61d2a2caec10af7c50aa10c788fcb220d7fed40f5cedbc2fd9f97e3e783a54f7e6fd9c8cb691378cfbf40d85f8a95094f4e4b362368e21d6c643e36a9b9797ff0bac00662de9314dc973bb286bda0afcd54f87b9c5cfff3ace7adc839f5f9697eb9c19040000",
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
      "Thu, 02 Sep 2021 19:10:39 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-53-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "2b91f7b590b4e11524b422485b34085d0845d33445b6b949bd8638c44e2756f1df77e394aedda4f6536cdf73ee39f79127f220f22d191226d27d05e5e1d34fc9c819014d537cddece170ebffdea4119beeedfce66173bdf8928e468810354bd15d91414bc9aae4a086eb553b2d6555d052ca16266a75ddd679cf757a8ed7f72edcbe8b3c05593217f903b2efb52ed4d0b64fdaed54ca34035a08d5e672f7f26e3f5ed845297f02d7ca7e2b69a38ab2df17fd9c494eb590f968bd4203958232861d15195af8cbdcb2cbb7a9db82eeda29821f0507cab9ac725ddbc2145ce68948abd26425c327626cbe3a90953ff72791c56556edf238a73b38b3b654d3581f0ab0aec2e5c29a0557cb70318e66cb205e4d6efcc5b83d59ced78b60656d6efcd0b734651918ae35b22ecd2dc00bea6f4169911bf5a87eae959f1b34fb7f2c3501a51534c1b8eff4e8f9c0f158c2fa3c19b85d9638c0d880f5bbd4650ef73ad0d932a0c833a28645739973e6f57adc65f1169b1b773cc6e301ef5dc49c01a618786ea7d327c733f2ab141aa642155289a6436413ce223f8ec275301947be2921a155a6a78db1ba80d71e351688a0776a3ad6512151a96ef72c88fc703c8966777e33e139a4941f567b9c7142330588a625364f43b9905b6c1809c60b7f8a6033b1db535091e1f72752f7bc76f1aae52ff4080758dbd5e64b5651380bae8d9d13e28e6695813c360752a0e57bac0d5d1f7f201297b4c942beaefdf01b699e4248a0849c7f3c4d049bc087ffda69f1118bab8f324ae31d7787ab5a8497d0ec9030e53eb307aee775bac4804bfd4face33883f353d7ea1c7546d841ae9f2b6a161f",
      "0b6dc42af502c2208e3f30dd3afe0152c48f2378040000",
    ],
    [
      "ETag",
      "WqeyPEzWgTbDq/nHkWGMKg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-53-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d925f53825010c5bfcbf68a33288ac98c0f98963a6afec15e1ac7b9c2821870e9de4b658edfbdbd64d65433f502bbcb6f2fe71c38c0439c05e0c0268e1e0b14fb8b08d54c17739445a224dd729e49040350b188c817bbffeace8656d0ddd6eeb063b61a45347c6eb78990fe165306ce01c218934082737f808ca5486b3e4f8a345b979d016a9febe1c29b0f2637d4a73cd0fd64391ab99d510f8ec67931608aad4bfe1f6baba3013bbe99638802331fb5965cf01dfa6aa06d4a96e60956242f848f124ab87c10095ee44c705ea149a56155aab665da66abd9aa594d8bc084fb4cc53c2376b9207da0b862c99c3f934bb00910654986c3f2fa44e338288de87230f1ec7aa9ef2b40d2c238c1f5df20e9dd32fa0c1fd82982ef1c4b7991a933753dba757f3b8e32fd3caaeb7abd1f845494d419f106e3dec273c753cdad4ede3b7b85722a38052951675835eb978da66dbec77ac575d4f41e4789020df019fd1dfd588113b244e2f10dcc5c95ef7b020000",
    ],
    [
      "ETag",
      "x6HzAQJ3dDh2VeB095ugJw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-54-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85537f6f9b3010fd2ac8fba795f28384002152d5652ddb9012d211d22c9aa6c41843dd124c6dd329abf2dd7740d3369dd44a48d8bef7eebd3b9f1fd11dcb633442114bef4b2a769f6e79845a882a9cc229cfc9e4a627569e612d7f26fe5f36154b2b3d3b0304ab58126f8b8cb6252f05a172b4987752c1cb020bcedb90a86d0eda3dcbd02dddb19dbe611bc093344b262cbf03f68d52851c75bb07ed4eca799a515c30d9217cfb7cde7de8770bc16f2951b27b2cd90515d97d5ff43ce3042bc6f3b3c51c0c94928a35dd6296818517661c7d3e4edd6178db4901fcc008c584f03257952d4841789eb0b4147556347a44b5cd570b347727ee45a84d3dff6413634537a71a965ab36c691ba82661195db378539dafd7c59df635984d2102da375852b9d196dfddc0d58ec19eaf2d7cdf9d87dac9f9a9f62d982daeb42fab230cf88ba9542cafdd8538ca68e5eca981deffd75611b002cd26b8b6750bf786ba1325914d92a16146894ea36818d92636229d38033a88238a81a7aaec350be73c371dc34cb04da35ee260d3360cd3b6f50131a96dc77dc349cca1e350c71ea07d0bfd114cd14b260b2e59d345b40cbcd05d87c1c2bf18876e5d4682cb4c5d36e6aa225efb54502480dea96b5f451907a5ea4a3c3f7483f145e85dbbcd144c688ac96e7e0f7390e04c52406381b7545131e531340d5dcde65ee8cdfcf10418f5d55e1d10128d7e3dbe10c25d517759d57f340e82f10a385808bc7b13031f16b460ff4aee1a67650da9f1f5aec9ffd004500f6a79d9f58f7616daffdec3d74230fc8d16fab17083156a8e029a504173f2f11400b80e7cf8860f0f0ab0f0a440462ad8c3cc11598910419bd963dbda7cc31e0e74c71ca01a2cd4db584f77ac4393ab1c5546baa5b97aaaa8795075dbaa50299f41108491f13dff1b44ff01856dea7dd0040000",
    ],
    [
      "ETag",
      "oncLh1rYI36WXfNziMrW6g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-54-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c16ec2300c86dfc53bae954a19302a7180addad8101a1d5c98104a5bd315daba4b52268478779c30b10b5294f8773e27bf7d845d5ea510409c673f0dcac35d867a668208555368c5474d95427000b5c898f47dda87a3f2ed3ddcc78f71b5bc579d68391b0c9850c937960282236c722c5205c1d7112a512297a5429b47f4a136ea79380f5995941a355d4c26c3d124849373e5d7eb7af7cf8fa7f3f0258c6e95ac4e0e6c298e708312ab04cdf7b5a42d267a6c3a53a2ac0b74153532410516b61799a4a61692c8e58cdb79705bddb6d7f5fabdbedfeeb5192c28113aa78ad9c5277b034d5a1411fd2a330606a40db9c78dddf726edf99eebf9bc6c3336653dde845a57a865a0d5df17a38346f52189fd2a3456bd8bed2732adf01c032d1b7420113cf0d75c5ff4e90c36611fe4cd010000",
    ],
    [
      "ETag",
      "22ovEBmJKEvb8bnZ+s5RZQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000d0bb64ed3845f976472432406d54404237198c29f24f890c60a777afd36bd47787f70d32c6b894f4d655bc05af60ce56d6922d036142672ca6091fd1f87282758a0c4e73e8b7ec5a55556c619f5cd40b510389948d1f06fd5a8cd270567646988ab651d9bccb2f52770a359028ec88516d871cb9f74dc53932e8963a2ddbd02f51deceb57de907a2a7d730dd9807370f06df2e22d94c5badd313586a730ded73781cc45a3f8838cd88a7ea01ea76b5e90e319ebc1cc7493fb6c3c7d9dd1b21a7b1fbe9e0d0c3bbd336211646f71ba659f1d628c6f2e9e9ff020bc02751f45cd2e2b17dad59d602fcd5a7b759f0c77fc8b39ef7e0e717fdacde4419040000",
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
      "Thu, 02 Sep 2021 19:10:41 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-55-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "535d6f9b3014fd2bc87b6d1252209048d11aa5748b96908d9066d33421632ed42dc1149b4c5595ffbe8b69ba5695da276cdf73ee39f7834772c7cb944c48c2f3fb06ea874fb72221670414cdf1f51071e5ec28a796e73b3bf876979b3f87f9748a08deb224dd5705f4a4686a0672b2ddf4f35a3415ad85e861a29ee3f48623cb1c9963777c6eb916f22414d9929777c8be51aa9293c1e0a4ddcf85c80ba015977d26f6cfef83c3f9a0aac52d302507af2507a82207ef8b7e2e04a38a8b72badda08146421dc39ef2022dfc67a6c9c5ebd47d4ef7fd1cc107ce8032269a52b5b630051365c6f3a6d659c9e491689b2f0e64e32ffd7964305134fb322ee91ece8c942a1aab870a8cab70bd3216c1d53a5ccda2c53a8837f3affe6ad69faf97db55b031765ffdd037144d0ad05c636a5ce85b8017d44f412a5e6af5a87d6e959f1ab4783b969680d212ba60ec9a233af4cc7192252ecb3ccb49321392c44b5c875a89c9c636d8690214795a54b36829cab1eddacc33ad3885d48d6d3b63f178381ec69e993187212773cfc9f18cfcadb9824b2e2b2179d721b20b17911f47e13698cf225f9790d1a650979db1b680971e151688a0776a3ab6512e50a96df72288fc70368f16d77e37e125e4943d6cee71c6192d24209ad6d83c05f54aa4d83012cc56fe2582f5c4be9f82924c7e3f92b6e7ad8b172d7fa64738c0d6aed25fb289c245f045db3921ae69d168c8a13b900a2ddf606de8faf80791b8a45d16f263eb87bf48f71442063594ece3692258073efcd74e8b8f585c7d94910aefb83b4cb622ac866e87b82ef789edd9c391adff54456bf526e6bae6a96b6d8e3623eca1544f15758b8f8576628d7c066110c71fe86e1dff01aed5e99378040000",
    ],
    [
      "ETag",
      "vTit5Waia38E5WeKkg0X1g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-55-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "85df65bca5496b2db5245ea056ada17f142f8c31cd0a03a20b4b7707b569faeecea256a3267a0333c337cb390736f098970978709767ab1af57a2f439adb2244534b327cab5469101c40121993811ed0ea4586743dedf997e16177329d537674c48489efb110e06d20cd512606bc9b0d94a2405e8b95ac8b72d9740ed0bab2c345148e26e7dc172ab1fde42a08fce360085b67b7980812cb86ffc7daedd681077517628a1acb18ad964aab078c69646d1a5154125b46d53a46030ddc3cc8b4aa2ba1956af1a4d5ebb53a6eb7edb607fdc17eb7df6550aa5850ae4a66af16ac0f489190a17a6697e032a09b920da7cdf589c779d218b1e56812b9078dbeaf004b4b7389cbbf41d67b2ff8337c60ef117ce744a1ea9276d45930f57f3b8e33fd3cead48f863f08439cd40e8946e3e122f2c733cbddbe7b3f5e139a99561ca4419b61a77d70d8ebbbedb7584f948d9adfe391aed18158f0df71911378a99006b7afcdf97cd47b020000",
    ],
    [
      "ETag",
      "Lr9tqxlRtYO5AJR83NOQtg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-56-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8553fd6f9b3010fd5790f74bab350921403ea4aacb1ad621a52403d20f4d5362e0a06e09a6d8648aaafcef3ba0699b556a25246cdf7bf7de9dcf4fe4816511199180258f2514db2ff73c202704244df07476d5717a83c7e98da16fbe4e62cf987bd924393d4504ab5882aef3145a8297450862b4f0da49c1cb9c169cb73051cb305b5db3a79aeab03fd47afd1ef204a4f194650fc8be933217a34e67afdd4e384f52a03913ed90af5fce3b1bad9317fc1e42293a87921d54119d8f45cf521e52c97876baf0d04029a058c29ab2142dbc32a3e0db61ea36a3eb7682e00d0b8186212f3359d9c21421cf629694459d958c9e486df3cd8278d6d43af795cbf1cdd12aa21256c70a154ab33c5156584dcc5258b268559d2f97f983f2c39d5d6204b5efa800b152ae7f5aaea51c826d4759388ee5f9cad1d9b172e1ce1673e5fbed0106fd452024cb6a773e0d52a89c3d37d07e7f6d15814ad46c82cbbe6ad2ee401d0671d00fe341cf086215826010f40dda0bd470a8831e05409127abec358b66d8936ed88d7ac31802431f9a86ae99a63ee8ea910aaaaa6901986110695433c9ee84fc2d988409133917ace922b9766ddf5afaeec2391ffb565d464ccb544e1a7355116f7d4a2c12411fd4b5aba28ca3527525b6e35beef8dcb7afac660aa690d070eb3de21cc4341580685ad03548282e79844d23f39967fbf6cc194f91515fed7c8f1064f4fbe995e06ff3bacbb2fe93b1eb8e6f91438b826eff8ba10f5327bbdd1bb92b9a9635a4c6d7bb26ffa609902ed6f2bad30e76d8ce3f3bfc4e080e7fa3457e2d2cf79634472ec45040167e3e0508ae039fbee1fd83422c3e29941112f73873a1a844c2029ad963ebda7cc31ee89aae1aa40617f25dcc18aafb265739aa8cb0864c3e57d43ca8ba6d55a8142f200ce2c838b67381d17f7e8a7ae1d0040000",
    ],
    [
      "ETag",
      "OV/N38qLX54v+DfS5PSnDg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-56-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4d",
      "6fc2300c86ff8b776da552343e2a7168b76a4342682bb0c3268442ea7685b6ee92740c21fefb9c32b10b97c4761ec7efeb13ec8b3a8500b645fed5a23adee5685e6d90a06e4ba3f96aa8d6080ea011399372d8a6321c8d5ada45d1fba1c816fedbcf61326142cb4fac040427c80a2c530dc1c7096a5121b7a5c2d84fccb1b1d963b88c39ab28b5d97c359b85d12c86b373e5379b66ffcf4fe7cbf8294e6eb5accf0eec689b60860a6b89767ca36887d24cad332daaa6445753ab246ae8e0ee2157d4364211b95c71ef076e6fd0f706de7838f6fbc33e832549610aaa995d2d581b1832a24ce8c0c6c0674075217bccbaf3db963ddf733ddfed8d3b335da9d3780bf2bd2bd4b3d0fa6f447434a85f14b15e8d56aa7791fd40d60aef3130aa4507a4e0853f17e6929f7f010984c5b4cd010000",
    ],
    [
      "ETag",
      "c7udcA88uojBBZwifS2Vxw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "bbe45b1c8186a57f80e210011784823f0c4baa2084b00b4eef5ea7d7a8ef0eef09a224c16d1b76d51d13f009a6889397c9724725753de6463d1c9dfe10a38ec1ac376e1064823270afbb819d09f795db86b03f3a5883d9586e77ab4d769fa35341942a1d1a68a3380ed79518a756d3ef5d68664a6e86d0744b5e662eadee6928f68d9b6770fe099efd38b3ed6f87528b764e2224912670cead602a21255bdd4f43bdab4557d4adab65f2128f2e84e5cfe79ae40a999bf2e11579c00fe86314a7d57c14d34bc005ea7a553807cb4f7b7f43236e78e8d2f2ededff020b801f346b701b66afed3c94e505f8ab1f7613c5afff2a8e1adc809f5f1b405e4819040000",
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
      "Thu, 02 Sep 2021 19:10:43 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-57-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f",
      "a3",
      "4010fd57c8de57fb93b6d026cdd954b44d5aaa946acce5429665c05560915daac6f47fbf61b19ec6443fb1bbf366de9b37c32b79e079442624e4c96305e5cbaf7b119213028a26f87af7545d3e3ecbe75b3bba7116fb8b6c11cf93d9748a085e67499a1529b4a4a84a0672b2dbb6935254052d856861a1d6d06af5466677d41d5be3be69999827218d573c7fa8ab2b55c849a773e46e27422429d082cb3613d9fb7b67dfef14a5b807a664e73365075964e77bd2dfa9605471914f775b1450492803c8284f51c2ffcc283cfd5cbacd69d64e10bce70c2863a2ca552d0b4b3091c73ca94a5d954c5e8996f9e140b6ceca99fb06136995e5414e33383122aa68a05e0a30cebdcdda58bae71b6f3df3971b37d8ce17ce7ad69e6f56bbb5bb356e168ee7188a8629e85c636a9cea9b8b17e48f402a9e6b76bf7eae99df0c5a7e1d4b9d80d4129a60607547b46777c7611c5a2cb6cd611877210cedd01a5233ecb2f10006510814f334a9cea2b9c8c7e8038ded30e8dad63018509305b467f68251648fd93886be0926399c90a7922b38e3b21092370e911b6fe93b81efeddcf9cc77740b31ad5275d608ab1bf8a851618308faa6a7431de502996abb97aeef78b3b9bfbc769a09af20a1ec65fb88338e692a01d1b444f314946b11a161c49dad9d3304eb895d1e83924cfebc92daf35ac507cbdfd37d1c602d57e92fd9faded2bdd0728e886b9a561ab26f0ea440c977d81baa3efc45242e6953855ced1cef96344f1ec45042ce7e9e268275e0c77fedb8f888c5d5471aa9f08ebbc3644dc24a687688eb76dfb2ed81d91bda44834bf525d6b7ada36b758dba226490abb78e9ac5c7461bb24abe833088e377b55b877fb0a59f6678040000",
    ],
    [
      "ETag",
      "hwuPqxsxY8dWEHvGmHfCgA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-57-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "1085df657a8b11fc814ae285b66a49d456c59b36c6ac30201658babbb435c677ef2cb5b6699bb43730337cb39c73e0008f491e820b9b247e2a51ec2f6254335dcc5196a992742b782e110c40c56222adb89eb78651c37b2def4766a363b17a9fcdba5d2264b0c58c817b8028c13494e03e1c206719d25ac0d332cbd7556780da177ab8f0e7de74447dc643dd4f97e371af3f1ec0d1382f864cb175c5ff636d753460c737738c50601ea0d65208bec34079daa6645991624df2520428a182ab07b1e065c104e7359ad4da4ecdb29ba66d769c4ea3e934094c79c054c27362970bd2078a2b96cef90bb9049b0051956438aaaecf344ec2ca882ebda96fb72a7d5f0192162529aeff0649ef96d167f8c04e117ce758c6cb5c9da9e1f8b6f7db7194e9e751d73d7ff083908a923a23be37192cfcdee44e73ab93f7fe5ea1bc139c8294a833b4ccd665dbb1cdf758afb88e9adee32a51a20101a3bfe32651e0462c95787c0323ff9e7f7b020000",
    ],
    [
      "ETag",
      "1g/n4Ff2IxuZG0291a/BaQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-58-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "ff",
      "4fe23014ff5796de2f9a206c6c6c40423c849db704873786c65c2ed075ddac8e75ae9d1762f8dfef751395e8694202edfb7c7bed2b4fe89ee5311aa288a50f152db7dfee78845a884a9cc2eed939166c8061ff81fc8c5d7f8a597e9f8e4680608a25f0a6c8e889e05549a8182e17edb4e455814bce4f40e8a4d73f316c53b7f58133e89a8e093c41b364062ac0be95b210c34e67efdd4e394f338a0b26da846f5ef63b8fdd4e51f23b4aa4e81c5a76c045743e373dcd38c192f17cb45c40804ad0724537986510e1951947df0fa5db0c6fda29801f19a198105ee552c50209c2f384a55559aba2e113aa63bef98116eecc9d84da64bef4c3a335de28f2fa58c342db2f5ada1a7a4a5846572c5eabca6a55dc6b3f82f9055420c12d1654acb5eb9f6ee06ada5a8146daa936f6a7da21d5f3b5a5efbb8b503b3a3dd6ce83f9f2523bbb39c040e6980ac9f23a7188a38caab4cf87eabdbf4a45c0121234c595a3dbd8e8eb8328891c92f4cd5e94e8348afa91d3c366a4938145ad38a2187852a9d72c9cf3dc8c70621a66df20a663db09c671b76b472689ac9ea1f72cb36b3906e9990edab5d0df92493a65a2e08235278bae032f745761b0f427e3d0addb487095c969134e35f136a7842601f4495f3b55651c9cd435797ee806e349e85db9cd64cc688ac976f100b391e04c5040e3126fa8a4e5058fe1d0d0e57ce185dedc1fcf80515ff7e51e21d0f0f7d32b21dc16f529cbfa5b79d956edbf075ce1acaa118fcd0f64f4d06ed7fabfc43808c637608bcb126f3f96ff50bfc6d7ab26e28b1f526efb55f76065a3dd9f1d7c5a08de54e3857e2ddde006355b014d684973f2f52001b82e7cf9d7b07fa78085970a3642c21ac6960865424ada8c2fdbd4e11b76dfb2f4be816a7029dfd5ba86b9bf27a5a114e986e6f2b9a3e69dd6c7a64a",
      "9578014111a6cef7fc73a8fe03eb07889527050000",
    ],
    [
      "ETag",
      "BGasi9aeryqcHdENDainkg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-58-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d904f4fc24010c5bfcb78b44d8a44fe251c4009422ad16ae3c110b294a116da4ed99d1509e97777b610cf5e7667dffe5ef6bd3dc33e2b37308075961e2cead34d8afcea86088dcdd9c8565169103c4056a990f367323fc730789cef3e7a761d1de2dbc574341c0a61922f2c140cceb0cd30df18187c9ea154058a4d15644b16884f953bcf16ef93e92412a1a08d131671188ec6e1046aefcfb45a55fb7f5996b5073b5a47b8458d65822e43a5698709cf5c3da38a2a47df90d5091a68e0e622d5642ba5897c51fcfb9edfeab4834ed0eff6efdaddb68039258a332a858ddf241b30b1ca233a4a3b6809a09b518a6e9bf5bb915d87ebb4ac9757d3f8c4685e34490283eef1e012e4815c3896d0ac2d7a9028f9c7a78c2fe7fa177ced0815a4010000",
    ],
    [
      "ETag",
      "JMosxwL0DJjW8ubRqU+NGA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "82300000d0bbe4db32a86ce99f6c2e4c0b45a8d29f4c086111459280809ddebd4eaf51df1dde37c08450215077ad69035ec18417502292d71aa63d1417d1a7d8f736d1ceb51a2ad8e8512529351927eb9268b1b17d5f6198f16170b1e2f2fa54c7286ab217684595b395898290ce0d8505a73b0942783197c1bdf411bb05f9998f39d1f3469e1f4635ca34ee065aba7f4b430a9d6b68e5b4ef5a779f5cb67684adfef8a92f8e2cbe41e59e1b7924e61f6a65f5b1affbdd172b94a573f293738963c2323361bddc4279dd1c9c6ae7f322ee6c7b33a59e3c3aa5909e9efe2f3003746c2b4e05aa1edb972a8433f0571f75534b1fff4d8a39e5e0e717596620d119040000",
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
      "Thu, 02 Sep 2021 19:10:44 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-59-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85535d6f9b3014fd2bc87b5c939084048814ad514ad7480de90869354d1332e642dd02a6d864eaaafcf75d4cd3b5aad43e61fb9e73cfb91f3c917b5e266446629e3d34503f7eb913313921a06886afc56ebcb71eaedcb29ab0bfbbaf8ea7026966f3392278cb92b4a872e849d1d40ce46cb7ed67b5682a5a0bd1c344bd89db1b4ec7e6d4746d7734b6c7c89390a797bcbc47f6ad52959c0d0647ed7e26449603adb8ec3351bcbc0ff6a341558b3b604a0ede4a0e50450e3e16fd960b461517e57cb745038d843a8282f21c2dfc6726f1e9dbd47d4e8b7e86e03d674019134da95a5b98828932e55953ebac64f644b4cd5707b2f52ebd6568309137451995b4801323a18a46eab102e33cd8ac8d957fbe09d68b70b5f1a3edf2c25b2ffacbcde56eed6f8d9b0b2ff00c45e31c34d7981ba7fae6e305f513908a975a3d6c9f5be5e706adde8fa525a0b4842e18d9e6940e1dd38dd3d866a9339ec4a90971ecc4f6848e6393b91658490c14795a54b368294a27c1c888b26808231659a61d47b10dc3683a4ae2d475a6d3896593c309f9537305675c5642f2ae43e42658855e14063b7fb9083d5d424a9b5c9d75c6da025e7b545820823ea8e9d046b940a5b6dd2b3ff482c5325c5d7bdd842f21a3ec71fb80334e692e01d1b4c6e629a8d722c186117fb1f6ce10ac2776750c4a32fbf544da9eb72e5eb5fc851ee2005bbb4a7fc9360c56fe776de788b8a679a321fbee402ab47c8bb5a1ebc36f44e2927659c88f9d17fc24dd530029d450b2cfa789601df8f45f3b2e3e6271f551462abce3ee30d98ab01aba1de2badc67b66359f6d0251a5cab7731676a1dbbd6e668334201a57aaea85b7c2cb4136be40b0883387e5f77ebf00ff9513d5e78040000",
    ],
    [
      "ETag",
      "mU3v4qP9np5czU+8EtRs0g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-59-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "2d491529d2c403286a0d20d272d118b2b653a86c3b75770b2184ffee6c45346aa2977666facdf6bdd76e61991509f8f09ccd5f2b549ba3399a7b5b4c5057d268be9554680407d08839934b45ae5cdcbfb6c365a7b7ba4d83eca4f5b03e3f6742c70bcc05f85b4833948906ff710b85c891d76292555ecceace01b329ed308c26c1e89afb9c12db8fa68341b737e8c3ce392c26c28859cdff63ed69e7c00b3d4f304585458c564ba9e8056313589b5ae4a5c486a64ac5a8a186eb0773455529145183278d56a771ec355dcfedb43b27cd76934149b1301915cc4e43d607868c90135ab34bf0185075c986d3fabae27196d4466c198c22efb4d6f7156069692671f637c87a17823fc307b68fe03b2772aa0a73a0ae0677dddf8ee34c3f8fbaec46fd1f84369cd4018982613f8cbac3b1e59ef6de7b1b837aac8883d468333c764fcf5a6dcf7d8ff5826cd4fc1edfa80a1d8805ff1d3799013f1552e3ee0d55913f667b020000",
    ],
    [
      "ETag",
      "kro0lhQq7Sk9BvJfIi25Zw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-60-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4fa34010fd2a64ef1fcdf5076d292d4d1aaf5751492a554a35e672699765a9abc022bb681ad3ef7ec3226acf3b4d486076de9bf76677966774cfd2108d50c0360f05cdb7dfee78801a884abc8155f3cc7cc882ef129f9d9c5e5ae43cea4efde0693c06042b590227594c9b821739a162b45cb436392f329c73de84424d536f76cc9e6eead6c0eaf6063de0091a473396de03fb56ca4c8cdaed5abbb5e17c13539c31d1223c795d6f3f76db59ceef2891a2bd2fd90615d1fe5cf428e6044bc6d3f17201060a41f3154d308bc1c21b330c7eec976e319cb436007e648462427891cad21694203c8dd8a6c85555347a46cae6bb0fb4b067f6d4d7a6f3a5eb1fac715292d7871a165a1d34b435f414b198ae58b82e33ab5576af9d78f373c880835b2ca8586bd767b6676b6f4b6b6dac1d6913f758db2fe0b8dad275ed85af1d1c1d6aa7de7c79a1fdbcd9c380f3900ac952e5dbc7414c4bcf2f5beb7c3cd09280258856c9d540377167a85b41140c4834ecf58348a741300c067ddc0b746219d408038a8127cbea8a85539e86a6a57748d7a2c3900401b67a43bd6ff470a73730a8a94703dce9f63b9d88a05d033de54cd26326322e58b5bfe8da737c7be57b4b773af16dd546848b581e57e6ca26defb94d024803ee96b57661907a5f2b01cd7b7bdc9d477aeec6a3e667483c976f1001312e1585040e31c2754d2fc9c87b069e862be707c67ee4e66c050877e5123041afd7a7e23f8db4cedb2546fb4f03dc73d55066ac4158e0b0579ac3ed02403af68b76bfcbfccc4f32637208df31c6fffca413ba651d2ff21a1f02aaa6cd6921d54aad551772f32d1eef70e9e0682db5569a1cba5eddda06ac9a311cd694abe1e2600abc4973f89fac60216ee2cc80809318c2e11a508c96935c22c51e62bf6d0e8f72d0329702e3fe40646bf3eab",
      "b24659912634952f1d5537566d5b992ac42b08923079ae3ab6dd1ff19d867331050000",
    ],
    [
      "ETag",
      "6H6qpb+taHFGQ9cMf2CTbw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-60-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d90416fc2300c85ff8b776da542a73290388ca930a40a4619278450286e5768ea2c499918e2bfcf2913da719724f6fb1cbde70b1ccb7a0f03d895c56783fafc50a05db8478aa6a9ace14b516d103c402b0a26c3548de72827b3b95c3e8d93c7dd773f978be19009937da01430b8405e62b53730585fa01612794c486a6acb903d2b574f67eff1244eb92169ef1ab355923c8f9218aede7d68bb55c77f8d6cae1e1c6897628e1aeb0c9d07a5e980999dba78464855a16fa8d1191a68e1562834354a68229f3b7e14f89d280ca2a0dfeb77c35ec8604599b025d5ccae96ec0d2c5951a5f4c5e9a0cb806e9f1c346fcf935b519be1d402ceda5fad7bd73a4edbfc7e383a5b346f9ad89d41672cb8997c2167dc7220ab1bf42013bce3d7d2deeaeb0feb62f303c0010000",
    ],
    [
      "ETag",
      "3RpFOemGNOmS8FL4bz9fmQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "76",
      "82",
      "30",
      "1400d0bd646c1d0410d299d442959f160be22427e00342a820b17cece9deebe936eaddc3fd462ccb404a7a6d049cd1339a1826f36ceeb486b91a4a72bb59d8cadd33bd68e1a9b6469a784b5d61be43065fe4a6201fd516b4c92e8e9f8d260e4922c188a2cedcb8a1027cc7a27340478fb56abef1452786e9b58f311775e90845b078b48b2ce82d689ab0292e0b515fcc177ddde6a99b302b22ab3dfb32169595e43870f685f1069e2ff5247e2f79ac030ee4e9b45deccab8656b5fd53721adaaa5ad0c42a8fd134f6ffbf0c0afd9110fb9c7b5b18b52eccd1f1efe2f344330b6bc0349f97dbba21132437ff5e9756ae1fedf04d641877e7e011f513ee819040000",
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
      "Thu, 02 Sep 2021 19:10:46 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-61-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85536b6f9b3014fd2bc8fbb8268190908714ad514ab648816c84b4daa60919e742dd124cb1e95455f9efbb364dd7aa52fb09dbf79c7bce7df0486e79b9275392f2fcae81fae1d38d48c919014573fdea3a65b0dc7d8631c4374bafbe0c7e81c867334470cd92f45015d091a2a919c8e96edbcd6bd154b416a283893a9ed3713cd7f6ecc968d277472ef22414d99a97b7c8be56aa92d35eefa4ddcd85c80ba015975d260ecfefbdfb7eafaac50d30257baf257ba8227bef8b7e2904a38a8b72b6dba28146429dc081f2022dfc67eed3f3d7a9bb9c1eba3982ef3903ca98684aa56d610a26ca8ce74d6db292e92331365f1cc8d65ffb8bd862a2680e6552d2039c597baa68a21e2ab096d126b056e1721305f378b50993ede29b1fccbb8bcd7a17845bebea9b1ff996a26901866bcdac73730bf182fa7b908a97463dd6cf5af9a941abb763d1049496d0069391ed51676c4fd22c1db16cec0ed3cc86341da7a32175539b4d0630d8a7409167440d8b96a2b43d274b07ae93f4c1192503bbef26e978344c28f427fba19bc1900dc8f18cfcadb9820b2e2b2179db217215ad623f89a35db898c7be2921a34da12e5a63ba80971e151688a0776a3aea2817a8a4dbbd0a633f9a2fe2d5a5df4e780d39650fdb3b9c71460b0988a635364f411d883d368c84f3c0bf40b099d8f7535092e9ef47a27bae5dbc68f9333dc6016abbca7cc9368e56e15763e784b8a4456320f7ed815468f91a6b43d7c73f88c4256db3901f3b3ffa49daa70832a8a1641f4f13c126f0e1bf765a7cc4e2eaa38c5478c7dd61528bb01ada1de2a6dc27f678e0f51df3a72a5aab3731d7f14e5dd33974463840a99e2a6a171f0b6dc51af90cc2208e3f34dd3afe03ab9800cc78040000",
    ],
    [
      "ETag",
      "b31nMFU+e8eTjF6rVMZeog==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-61-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d92614f82501486ffcbe92b6e9886c9e6072c2d9a9222ae5a6bee0a0744814bf75e6acef9df3b97cc5ab5d51738e7f09ccbfbbeb0834d5a4460c3324d9e2b14db9304d554173eca2a53926e252f248201a85842a459567e3918df3f44d69db71932369d79374eaf47840c579833b07710a7984512ecc71d142c475a0b7956e5c5a2ee0c50db520f6781ef7a57d4e73cd2bd371f8d9cfe68007be3b81831c51635ff8fb5a7bd016bbef431468145885a4b29f81a43e56a9b92e565860dc92b11a2841aae1f24825725139c3768d2b09a8da6d5322db3dbe99eb63a2d02331e3295f282d8f98cf481e28a653e7f2597601120ea920cc7f5f585c669541bd1a5eb0556bbd6f7152069719ae1e26f90f4ae187d860fec10c1778ee5bc2ad4911a8e6e9ddf8ea34c3f8fba7482c10f422a4aea8804ee78300b9cf144734f07effdad4239119c8294a8336c9aedf3b38e65bec77ac175d4f41e5b890a0d0819fd1dd7a9023b6699c4fd1bbe8db2447b020000",
    ],
    [
      "ETag",
      "0puRpEMXYd6WNkFaaQSNJA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-62-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85546b4fdb3014fd2b91f705b43ef268d38754b1ae64ac5349214d41689a5ac77182218943ec3015d4ffbe1b8702651b489192eb7bce3de7dad77944b72c0bd110052cbe2b69b1f974c303d44054e218567ff0f9c5c3e983d1314a5a3e149f67e71e61e3d10810ac62099ce6096d0a5e16848ae172d18a0b5ee6b8e0bc09859ab6d9346c4bb7f5416f605a3d0b788226d18c65b7c0be963217c3767ba7dd8a398f138a73265a84a7cfebed7bb39d17fc861229dafb926d5011edf7458f124eb0643c1b2d1760a014b458d114b3042cbc30c3e0cb7ee916c3692b06f03d231413c2cb4c56b6a004e159c4e2b25055d1f011299baf3ed0c29939135f9bcc97ae7fb0c669455e1f6a5868bba0a1ada1a7882574c5c2759559adf25bed9b373f850c38b8c6828ab576f9ddf11ced6569ad8db4236dec1e6bfb05a6aeb6745d67e16b074787da89375f9e695faff630e03ca442b24cf9f67190d0caf3d3d64eff3ed08a802588d6c9554fb7b1d1d7074114f448d4b7ba41a4d320e807bd2eb6029d0c3ab4130614034f56d5150b673cb303120e22b36b631a62ab8b034337031a597dc3ea9a866586c4a6916ee868db40bf0b26e931133917acde5f74e94d7d67e57b4b7732f61dd54684cb441ed7e6aa265efb94d02480dee96b5b651907a5eab0a6aeef78e3893fbd70eaf998d11893cde20e2624c289a080c6054ea9a4c5290f61d3d0d97c31f5a773773c03863af4b31d42a0e1cfc71782bfc9d52e4bf5460bdf9bba27cac00e7181935241eeeb0f8473f08ab6dbc6ffcb8c3d6f7c05d2b828f0e64d0edab13b15fd1f120aafa2dae64ed24095da2e32f7221b6d7f6de16920b85db5163a5f3ade15aa973c1ad18266e4e36102b04a7cf893d8dd58c0c29d0519212186d125a2122105ad4798a5ca7ccdee77ec81ad7e311217f26dae67e883dd595535aa8a34a5997ceaa8beb16adbaa54299e419084c973d5b16dff00d8142e4b31050000",
    ],
    [
      "ETag",
      "JoOVzMz141ueuzr+LQRciA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-62-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6ac24010fc97ed6b42538588820f5aac0d0d56d35a0aa5c899ac6934c9a6777b9410f2efdd53e9739fee6676666fe63a3815750613d817f9b745dddee4c81b7749d0d8928d1c0dd506c10364958b72cbc1ecd6e2d333be3de4cbf775149b95d94ca7a230e917560a261d1c0a2c3303938f0e6a55a1d85445b6661171db381cad5e17cb45224445992356db389ecde305f4de9f69b76b4effb27cf61e1c699fe00135d629ba0c8da623a61cb97a46554d89be21ab533470169f07b926db284de40be38703ff2e1c0661301e8d07c3d1508425a58a0baa5df317c9064cacca847ea41d0470c5f396d1ac35c97283d975221befc9bdcb9287b5450f52255ff458f005f7bfa890d3497f010000",
    ],
    [
      "ETag",
      "Ut0A/ueKOeVFgGXPILsNsQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "02ffedd34b7282300000d0bb642d0e0a52e9ce54fe1f458956360c0d312283402210ecf4ee757a8dfaeef0be418631e13cbdd725b981773066737d8aa75eb384ebe172de62a15921735b1e21e3fa8176c7b2f4942a7e04f38d433757b3977aed3076d8922f89632124d96e1ea46a11c6fb593ba492ba3e26909a1b39b2e4d0cbb32f4dd93d50c28361880e672f18a05229d20dbbc53658c4a3d367ab7a7d2fabe87859e69d28b8bdb71261eb6f5bb7857e67fbaca3c238c80935e3ea4676656618695ff9275b13e8c466baed251c3308fb46757c24a49a8aa6a4fbcfce0c8bf83a7d79f9bfc00410d1148cf0b4786e5716ba3e017ff5d3fbd890e77f48324618f8f9059a13f0ca19040000",
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
      "Thu, 02 Sep 2021 19:10:47 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-63-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b4fdb3014fd2b91f795b6e983a6a9548daa0dac5293b234056dd314d9ce4d30a471881d1042fdefbb71280321c1a7d8bee7dc73ee23cfe44e1409991226b2fb1aaaa76fb7929113029a66f89a5c546bcff64fabc7abdfe9e5bdbcf597513f9bcd10211a96a2fb32878e9275c5414d77db6e56c9baa495941d4cd4190f3bfdf1d01edbaee30e86ce10790af2742d8a3b64df685daa69af77d4ee66526639d052a82e97fbd7f7dec3a05756f216b856bdf7923d5451bdcf45bfe792532d6431db6dd140ada08a614f458e16fe331376f63e7557d07d3743f083e040399775a11b5b9882cb2215595d99ac64fa4c8ccd3707b2f5d6de22b2b8cceb7d1117740f275642358df55309d679b8f1ad5570be09fd79b4da04f176f1c3f3e7ddc566bdf383ad75fdc30b3d4b539683e15a33ebccdc02bca07e024a8bc2a847cd73a3fcd2a0d5c7b134049456d00663c71ed3fec47659ca1c9e4e86a72cb581b109734ee990d9dc1dc12861409167440d8b16b280be6d27fd7e1a6310e2d1908d63369a9cc6d41d242ee79c32a74f0e27e4b1121a9642955289b643e43a5c455e1c85bb60318f3c53424aeb5c2f5b634d016f3d6a2c10419fd47468a242a252d3ee551079e17c11adaebc76c26bc8287fdadee38c539a2b4034adb0791a2a5f26d83012cc7d6f896033b1cb635091e99f67d2f4bc71f1a6e5aff40807d8d8d5e64bb651b80a2e8c9d23e28ae6b5813cb40752a2e51bac0d5d1ffe221297b4cd427eeebcf017699f4248a182827f3d4d049bc097ffda71f1118bab8f324ae31d7787ab468457d0ee9030e5beb02723c71938c4802bfd21e60edc63d79a1c4d46d843a15f2a6a171f0b6dc56af50ac2208e3f30dd3afc038f29f55578040000",
    ],
    [
      "ETag",
      "dGrLE0M5rwVZfPqojMDT1g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-63-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "782d095a28d2c44351c446408572d110b2b4d3526c3b75770b2184ffee6c55346aa2977666facdf6bdd7eee1392d22706199262f15cadd4982fac114135455a615df4a2a148205a845c264d22e635d507eebf7e2c7c1a677bb6d7bb3e4e2820915ae3017e0ee214e318b14b84f7b28448ebc165256e5c5a2ee2cd0bbd20ca7c1c41f0fb8cf2932fd78361c7abd611f0ed67131125a2c6afe1f6bf383056b5a4e3046894588464b29698da1f68d4d25f232c386a24a86a8a086eb0789a4aa1492a8c1938663374e1dbbe934bb9dee99ddb119cc28143aa582d9d994f581262db2096dd925380cc8ba64c3717dddf0388d6a23a6f4c781d3aaf57d05585a9c66b8f81b64bd2bc19fe1037b8fe03b2772aa0a7da4ae8777de6fc771a69f475d7941ff07a134277544027fd49f06dee8de70f377efbd9d46752f89835468323c6db6cedb1da7f916eb2599a8f93dae96155a100afe3b6e520d6e2c32858757f5cd0bcf7b020000",
    ],
    [
      "ETag",
      "g5pftnomKIBfZGvBKw5AUg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-64-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85546b4fdb3014fd2b91f705a43ed2571e952ad695c03295b4a429084d53eb384e312471881db60af5bfef3aa140c736a448897dcfb9e7dcebeb3ca17b9645688842b6792869b1fd74c743d44054e20decfefa7657d81d59cec5543afc8ca4163d1b5c8e4680608a25709a27b4297859102a86cb456b53f032c705e74d48d434facd8ed1d30ddd36ed6ecfec014fd0249eb2ec1ed8b752e662d86eefb55b1bce3709c539132dc2d397fdf663b79d17fc8e1229da87926d5011edff8b9e249c60c978365a2ec0402968b1a229660958786546e1e7c3d42d86d3d606c08f8c504c082f33a96c410ac2b3986dcaa2ca8a864fa8b2f9e6032d9ca93309b4c96ce905476b9c2af2fa58c342db2f1ada1a6a8a5942572c5aabc86a95df6b67feec0222e0e0160b2ad6daf557c777346d1d6149d7da483bd1c6dea97648763d6de979ce22d08e4e8eb5737fb69c6b5f6e0e30e03aa242b2acf21ce030a1caef735bddf787a9085882873ab8327503772cdd0ee3d024b1d51b84b14ec3d00acd01ee853ab1fbb41f8514034faaec150b673ceb939e697506060e71d43543db1e109d62c3c461d4896d2336b0157507b68e760df4b360929e329173c1eadea26bdf0d9c55e02fbdc93870aa32625c26f2b436a78a78eb53429100fa4f5d3b15651c94d441b95ee0f8e349e05e39f56c4ce90693ede201a623c689a080c6054ea9a4c5058fa069683e5bb8813bf3c6536054073edf23041a7e7f7a2504dbbceab2acdee85415b07b93f00a27650578ac3f5057efea4dbddbec0cd06ed7f877a6b1ef8f6f401d1705defe11838a8cbea2ff45a7c257abdae95eb78394da8b8b839581763f76f034105cae5a0b5d2e1dff06d55b3e8d694133f2f13c01b80a7cf88fd85f58c0c295051921610dd34b84122105ada798a595f99a6df5edbe65a20a5cc87731c332f6c7a572a88c34a5997caea8beb055db54a8142f2008c2f079ae770ed1df88de6c9330050000",
    ],
    [
      "ETag",
      "xJjr91tuPsLtEoFcm8eF5Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-64-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d90cd6ec2301084df657b4d547eaa20903840855aa414b569e9a542c8249b3490788dbda14228efde75403df762afc7dfc833bec0a1d4194c605716c706edf9ae407ef34382aea9d8c966483b8400905521249aacb4f3445ba4f8b87283d38bb9ff9c4da742b8f41b6b05930be425569983c9d705b4aa516caaa646b3407c36febc5c7d2c9e16890835655e58ade378368f17d0067fa6edd61cfe65d9b401ec6997608e16758a3e83b1b4c79497be9e53b5a93074d4d8141d74707751586a8cb244a12861f410f6a3612fea8d47e3c1703414b0a25471495ad8f5bb6403265655423fd20efa02d86e94a279b79e3ad977b84d9b767333cdcf8ceed5922470e81fef5d833c920fc7129a6d8301a44afef1b9e4ebb9fd050d8de1aea4010000",
    ],
    [
      "ETag",
      "epdirBRnreoLqNs2vMp/VA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "02ffedd34b7282300080e1bb642d8c05797587501581ca9b369b0cc1803c2a3622129cdebd4caf51bf13fc9bff01b23c27d72beabb869cc12b6099a0f1396f5fd4b5792ff744cb6df56ddba407e52866c50d9a87956bbc4c5b4faf86c4be336c447bb71ceba34e37212b460589e9ca58fba213706855d28f31deecb0137a678cbc9c7ab5234d14e18d61c50d17c12208630df50a4bac16b34ae83828cf39b2e828f2c9368288719326c461bb74de07b4845d7df84c9a3a9270194e2946777dc0fee049b4688c7d76ea9befaf36b3754b8554f103c7e776a68b3b0a7da914d809def8a7a7ff0b2c00192f15255754cdb78b92a62dc0dffaa8671732ffbf26192514fcfc02a532596519040000",
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
      "Thu, 02 Sep 2021 19:10:50 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-65-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "da0412c22391a2354ae91a29211d216da76942b663a85bc0149b6c5d95ffbe8b69ba5695da4fd8bee7dc73ee832774cfcb1d9a20c2b38786d58f5fee04412788299cc1abe9cefffaf6e5cdf86686f757ee7e44ca3f6e369d0282b72c898b2a673d299a9a3239d96efa592d9a0ad742f42051cf757a03d7b65c6bec8d87b667034fb23c5df2f21ed8b74a5572629a47ed7e264496335c71d9a7a2787937f743b3aac51da34a9a6f254d5091e6c7a25f7341b1e2a29c6e3760a091ac4e5881790e16fe3377e4f46dea3ec7453f03f09e538629154da95a5b90828a32e55953ebac68f284b4cd5707b40996c13c36a8c89ba24c4a5cb0136387154ed463c58cf368bd3216e1f93a5acde2c53a4c36f38b6035ebcfd7cbed2adc18d7174114180a939c69ae31354ef52d840be8ef9854bcd4ea71fbdc2a3f3768f17e2c2d01a425eb828967b978e05b6392128fa6beed90d46284f8c473b04d2c3a1eb1d18e300c3c2daa59b814a54f7c67c82c3761ae6327233a2289efed68e279143ba933f03d3b458713f4bbe68a9d715909c9bb0ea1eb681107491c6dc3f92c0e7409296e7275d6196b0b78ed51418100faa0a6431be50294da762fc2388866f378711574135eb20cd3c7cd03cc38c5b96480c635344fb17a2576d03014ce56c11980f5c42e8f4189263f9f50dbf3d6c5ab96bfd06318606b57e92fdac4d122fca6ed1c1157386f3464df1d5005966fa136707df8054858d22e0bfabe0da21fa87b8a58ca6a56d2cfa709601df8f45f3b2e3e6061f541462ab8",
      "c3ee50d98ad09a753bc475b9cf6cdfb106b68334b856ef62436774ec5a9ba3cdc80a56aae78abac587423bb146be802008e30f75b70eff006ca50ad978040000",
    ],
    [
      "ETag",
      "/6Cz83PX9XAavV6v4bnx6g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-65-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "92d153824010c6ff97ed15264cc562c6072c331a34437c6a1ce7840531e0e8eea831c7ffbd3d326baa997a81dde5b7c7f77db083c7ac8cc18155963ed528b62729aa7b5d0428eb5c49ba55bc940806a0622991a77555b4063e4623f755a669d095deade5f6fb44c8688d050367074986792cc179d841c90aa4b588e775512e9bce00b5adf4701606de64447dc163dd4fe6beef0efc21ec8de362cc145b36fc3fd6167b03367c15608202cb08b5964af00d46cad336252baa1c4dc96b11a184066e1ea482d715139c9b3431edaed9b2db966d5df42ecedabd3681398f98ca7849ec7c46fa4071c5f280bf904bb009104d498693e6fa4ce32c6e8ce8d29b8476a7d1f71520694996e3f26f90f4ae197d860fec10c1778e15bc2ed591baf6efdcdf8ea34c3f8fba72c3e10f422a4aea8884de78380bddf154738b83f7c156a19c0a4e414ad419b6acce79b7675befb15e721d35bdc751a2460322467fc74da6c049582e71ff06db3005357b020000",
    ],
    [
      "ETag",
      "/upm1BLecGAzsggR5sIJ0A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-66-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8554ff4f9b4014ff57c8ed174dda724029d2c4b84e9923a9b452aad365698fe3a8a794abdce1d698feef7b8055eb364d48e0ee7d3eef7dde371ed11dcf13d447315fdc97ac587fba15316a21a6c8026e6d2bf97e7acdbdf0f65ea742778cdf38fe7a7e7808085eb12459ae32d696a22c2893fde9a4b32844b92285106d70d4eef5da46cfc23dec3aae693916f024cbd221cfef807da3d44af6757d1bbbb310629131b2e2b243c5f2f95e7f30f555216e195552df0da94314a9bf1ff4281394282ef2c3e9040494921533b6243c03092fcc24febcebbac3c9b2b300f003a78c502aca5c55b2c0051579ca1765517b45fd4754cb7cf58126ded03b8eb4e3d13488f6e6645991e7fb1a91daf6d0d2e69053ca3336e3c9bcb2cc66ab3bed6b383a030b28b82192c9b976f9cd0b3d4d9b4b05eae6daa176a40d82136d97ed07da3408bc49a4ed1ded6ba7e1683ad6be5ced604076c2a4e2792d3a2271c62ac14f75f5ffee6645200a4434c699837bc438c06e9cc60e4d0f2c3b4e318be383d8b1891563ea7659378919019eaabcd72c928bdc75631ba7a663985d6663cb31cd2eb66c03c7a6d3b312ea1a7162a44697a24d0bfd2ab862275cae84e44d71d165e847de2c0aa7c1f120f2ea34525266eaa4115725f15aa7822401f44e5e9bcaca0544aa3ae50791170e8e23ffc26b8663c81684ae27f7301e29c924033429c89229569c89048a86c6a3891ff9a360300446ddf1f1162151ffc7e30b215aafea2aabfa8d22ff0c7a34381bd71ab6a00b929535eaa1f9402636711b9b6dc38e0cb36f587da3dbc1185fa3cda6f57fe783301c5c8120521464fdc60649f6ba15fd1f516b7c7d6ac46f5518a88af6ac69e7d4439b9f1b785a0816ae8985cea75e78859aab90a5ac6039fd78c4005c1b3efc6f6c9718b0b0c6100616427118682aab20b460cd60f3652dbe611fd8d8356d54830bf5d6661886bbed60e5a3f2c8962c574f19354b5c97ad3295f219044698c7c00f4ec1fa0730a3f51144050000",
    ],
    [
      "ETag",
      "53dXGZiERjq/co/71x0bFQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-66-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d90416b83401085ffcbf4aa101b5012c8a129210d88b4da404a096163466ba28edd1d1b44fcef9d35a1e75e7667df7e8f7d6f7bb814f509e6702cf2ef1675f79023bfd92146d3966c646ba836080e20ab5cc8c8e3e818041fd7a4d8ed36eb70ad938cf3c54208937e61a560de435660793230ffeca156158a4d55d4d62c10778d3d6fa2f7d57a158b50d1c90ad1360c9f96e10a06e7cf743834977f59f68303673ac698a1c63a459ba1d174c69437b69e515553a26ba8d5291a18e1f122d7d4364a13b9a2b8beef7afe74e24f66c1ec711a4c052c29555c502dec36916cc0c4aa8ce92aedc013408fa314cdc6f567946d87fbb41ff677d3b26334af9a248141fbf8e416e4996c3896d0ac5b742055f28f2f05dfcec32f9c8c2bf2a4010000",
    ],
    [
      "ETag",
      "N1tNb77YwSiXXIGLGrSftg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "02ffedd3cb7282300040d17fc95a180482a13b28601cb40c505edd646c8ca0548120cf4effbd4c7fa39ef5ddde6f70a494b52d795425bb8317301d655da4a25b23d31a2ec547b2ebbbd8c0576d87713ea48cdaa4f7dddb462d02b34c4c6d339f6e4a44828c9c55b6ee5115858de1874c1e27c9ef3564b451c0cbe1eeb0bedb8e70bbc4928294ee2d3dd8e73bce0fdbac95afcd607b7680240dcb852a7dea4ded8446864e3a09ab2164deab53ef1b27de0b4a0d0538e7914f53ec6c0479f64a7ea310e7ea7e44bcf5262529520957ae9acc6be1007bc37dcf79c6e3145a5fb4b0c4a7a7ff0bac001beb0b672db92cb72b50d757e06f7df2986ab6fc6fb223671cfcfc02cde7cf9b19040000",
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
      "Thu, 02 Sep 2021 19:10:51 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-67-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85536b6f9b3014fd2bc8fbda04d23c0891a295a574cd94900d48ab699a90ed5ca85b8229369daa2aff7d17d374ad2a759fb07dcfb9e7dc074fe44e943b32234ce4f70dd48f9f6e2523270434cdf1d58933a97de17fb137ce3751aa41ec24e0cfe788102d4bd17d55404fc9a6e6a066dbb89fd7b2a9682d650f13f5266e6f30193a13c773bdd3a13b449e82225b89f20ed9375a576a66db47ed7e2e655e00ad84ea73b97f79b71f4eedaa96b7c0b5b2df4adaa8a2ec8f453f1792532d6439dfc668a05150a7b0a7a2400bff983b76f636755fd07d3f47f083e04039974da95b5b9882cb321379539bac64f6448ccd57071207ab6091585c16cdbe4c4bba87136b47354df56305d645b4595bcbf06213adfd64b909d3787119acfdfe62b3daaec3d8babe0ca2c0d2941560b8d6dc3a33b7102fa8bf03a54569d493f6b9557e6ed0f2fd585a024a2be882a9eb4ce860ea782c632ecfa6c331cb1c606ccadc311d32877b2318ed1850e41951c3a2a52cd9a937ce804dd36c3c62e9683c1aa5dec8e5e970070ea5c09cccc9c8e184fca9858673a12aa944d721721d2d93204da26db8f093c09490d1a6d0e79db1b680d71e351688a00f6a3ab4512151a96df7324c82c85f24cbaba09bf00a72ca1fe37b9c71460b0588a635364f43bd963b6c1809fd75708e6033b1efc7a022b35f4fa4ed79ebe255cb5fe8090eb0b5abcd97c449b40cbf1a3b47c4152d1a0379e80ea442cb37581bba3efc46242e699785fcd806d14fd23d4590410d25ffff34116c02fffdd78e8b8f585c7d94511aefb83b5cb522bc866e878429f7993d1d0fdcb1470cb8d6ef6253cf3b76adcdd166843d94fab9a26ef1b1d04eac512f200ce2f843d3adc35fc27c2b2778040000",
    ],
    [
      "ETag",
      "0SfotAiAB/O0Jins1S0TeA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-67-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "92614f82501486ffcbe963b0611a289b1fb0d4dcd44cb1cd5a73573820065cbaf76273ceffdeb964d6aaadbec03987e75cdef7853d3c2779082eac92f8a544b13b8b51dde9628ab24c95a45bc1738960002a1613b9dd8efc9db7b8b7e2fee2a13939cf831edb78ed3611325863c6c0dd4394601a4a701ff790b30c692de06999e5cbaa3340ed0a3d9cf9d3c1b84f7dc643dd8fe7c3a1d71976e1609c1643a6d8b2e2ffb1f6743060c357538c50601ea0d65208bec1400db44dc9b2224553f2520428a182ab07b1e065c104e7264d4cdb316b76ddb2ad96d3baa83b7502531e3095f09cd8f98cf481e28aa553fe4a2ec126405425198eaaeb96c6495819d1e560ecdb8d4adf5780a445498acbbf41d2bb66f4193eb06304df3996f1325727aa37bcf57e3b8e32fd3ceadaf3bb3f08a928a913e20f46dd99ef8d269a7b3a7aefec14ca89e014a4449d61cd6a342f1ddb7a8ff58aeba8e93dae12251a1030fa3b6e12056ec45289873782466e907b020000",
    ],
    [
      "ETag",
      "vvMTyAYV0gGYZ8P+ncFajA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-68-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85547f4fdb3010fd2a91f70f68fd91366d9a54aa5881b0452a694953109ba6d6719d6248e2103bb00ef5bbefe2d042c70652a4e47cefdd7b679ff384ee58ba447d14b2d57d41f3f5a75b1ea21aa212af6075e97e1eff7a3cce88d5a5bff58bf3ef913d498683012058c91238c9625a17bcc80915fdd9b4b1ca7991e19cf33a14aa9b56bd651abaa9db3dbb6df40ce0091a472396de01fb46ca4cf49bcdad7663c5f92aa63863a24178b25b6f3eb49b59ce6f2991a2b92fd90415d17c5ff428e6044bc6d3c16c0a060a41f3394d308bc1c20b73197ed92fdd603869ac00fcc008c584f02295a52d2841781ab15591abaaa8ff8494cd571f68ea8c9c93403b19cfbce060819392bc38d4b0d0b6414d5b404f118be99c2d1765663ecfeeb4337f7c0e1970708305150bedea9be33bda8ea60db4236de89d6afb74d7d3669ee74c03ede0e850fbea8f6713edf87a0f03be975448962ad7010e635a3a7ede58f7ed7196042cc145959cf77413b72cdd0ea3b04722cbe886914ec3d00a7b5d6c843ab13bb4b30c29069e2cab2b164e79daedd8d8308cc86ad95dd3b23aad4e4b6f456d2b6a2f31b109b60ddcee91b68e3635f49833494f99c8b860d5eea22bdf0d9c79e0cfbc9361e0a836225cc4f2b4325736f1daa7842601f44e5f9b32cb38289547e57a81e30f4f02f7d2a9a663445798aca7f7301f118e050534ce714225cdcff912360d4dc6533770c7de70040c75e4932d42a0fe8fa71742b0ced42e4bf54667a3f130303bcac1167289e342611eaa0fd46a7401b1a9fdbfccd0f787d7208df31cafffca413ba6a2ff4341e15554d9dc29a2526d1bb5f722136d7e6ee0a921b85b9516ba9839fe35aa967c1ad19ca6e4e36102b04a7cf88bd8de57c0c28d0519212186d125a2142139ad469825ca7cc5b6baed5ecf460a9ccb3739bb656dcfaaac5156a4094de57347d57d55db56a60ab103411226cf73bdaf90fd03e8a2f5192f050000",
    ],
    [
      "ETag",
      "dI+OxwBpc85ez0QMZf9PmA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-68-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d50db6ac24010fd97e9a3097801ad820fda4a2b8a68da624b1159e398c6243bebeec422e2bf773616e9635f7667ce653967cf90a57a0b3dd8a4c9a1447bba4b90177e88d095393bb90c69871000b24a4439a8656679981d75daad6593e5e463be7f7c5ff4fba270f117160a7a67d8a5986f1df43ecfa05581625305959a45c427e3f7f1ec75f4348a042868eb81d9db743a184e4770096ea6f5da64ffb2ac2e01ec6913e10e2dea187d0663698f318f7d3da70a9363e8a8b4313aa8c41591582a8db244a12061fb3e6cb45bf576bddbe9365b9d9608738a15a7a445fbf622d98089551ed1b7b483a6086c354ad15d751e2bd877f053a38af6976bdcb8a6e756bf0f0e4f8c6e6e49d239f4c1ead7900fe483b314625b6200b1923f7e4ef9ba5f7e00362e151dc0010000",
    ],
    [
      "ETag",
      "A+kpWqNvni9+kKWKYPjDXQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "6e",
      "82",
      "40",
      "14",
      "00",
      "d0bdccb710a818a07fe284978896a7f043402e0a8ac2cc2860d3bdd7741bf5ece17ca3fc70004a33763bc3157da229ff50f903bfee140d0fa71d5d0df61d0c3794c8a88c0d079d96c66623a60f88977dbba59c1007115e88b91507b687a5c2082f7d97726cf2ad3e205e1b0d5c667b5e32f8c7ca4916f52a6c1fc6d83c6fa3b8d3d7172cd458c9f6a53e5cc14e8e56b53ac3dc6c368f482554c16269864be936fa4cba7fddfd8b9794cc71fd0dd44f99e252f36b3c25ae62cb5530250e297ad5aed876c7265782d63c87274e55f4625fa68e9ce1d012f8b7b7ff0bcd108c5d4d8066f56bfb7ca1aa33f4573f635307afff1ae40408faf905befe880319040000",
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
      "Thu, 02 Sep 2021 19:10:53 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-69-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85536b4fdb3014fd2b91f795b629499f5235ba1246a736852405a6698a6cf726189238c40e1342fdefbb71280321b14fb17dcfb9e7dc479ec9bd2876644a98481f6aa89ebedc49468e08689ae2ebcdc2d988719df77e0c2eca5574b3fa163e9497b3192244c352342f33e82859571cd4741b76d34ad625ada4ec60a2ce70d2e90f1d7b684f46936367e4204f4196ac44718fec5bad4b35edf50edadd54ca34035a0ad5e5327f7def3d1ef7ca4ade01d7aaf75eb2872aaaf7b9e8d74c72aa852c66db100dd40aaa18722a32b4f08fb96327ef537705cdbb29821f0507cab9ac0bddd8c2145c168948ebca6425d367626cbe3990d05b798bc8e232abf3222e680e47d68e6a1aeba712acb360b3b696fed92658cfa3e5c68fc3c5b9b79e77179bd576ed87d6f5b9177896a62c03c3b566d689b9f97841fd1d282d0aa31e35cf8df24b83961fc7d210505a411b8c47f690f6c7f684256cc493b13360890d8c8dd968401d66f3890bee8e01459e11352c5ac8a2cf862eddb9499c3018c52ef4dd984d188fc7767f0cc7ee903a9c93fd11f953090da742955289b643e43a58465e1c055b7f318f3c534242eb4c9fb6c69a02de7ad45820823ea969df448544a5a6dd4b3ff282f9225a5e79ed84579052fe143ee08c139a294034adb0791aaab5dc61c3883f5f7ba7083613bb38041599fe7a264dcf1b176f5afe4a8f70808d5d6dbe248c82a5ffddd83920ae68561bc8637b20255abec5dad0f5fe37227149db2ce472eb053f49fb1440021514fcffd344b009fcf75f3b2c3e6271f5514669bce3ee70d588f00ada1d12a6dc17f678e0b8f6881870a53fc406eef0d0b5264793117228f44b45ede263a1ad58ad5e4118c4f1fba65bfbbfc925cc4978040000",
    ],
    [
      "ETag",
      "XC3Oi8um/J5PpLTXLBSqpQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-69-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "82401085df657a8b8956c54ae285b6b692e01f6293a631668501b1c0e2ee52438cefde596a6dd336696f6066f86639e7c0115ee22c000b3671b42f50945711aab92e5c9445a224dd729e49040350b188c8654bc945299eccbd8cda23b913ecf0389df77a44487f8b2903eb08618c4920c17a3e42c652a4359f27459aadabce0055e67ab8f05c7bf2407dca03dd4f968ed31f3843381997c58029b6aef87facad4e06ecf8c6c51005663e6a2db9e03bf495ad6d4a96e609d6242f848f122ab87a10095ee44c705ea349cdecd61a66b36ed6bb9dee75b3d32430e13e5331cf74020bd2078a2b96b8fc402ec124405425190eabeb2b8de3a032a24b7be299ad4adf5780a4857182ebbf41d2bb65f4193eb07304df3996f2225317eade99f67f3b8e32fd3ceaaeef0d7f1052515217c4b3c7c385d71fcf34b73a7b1f940ae54c700a52a2ceb0516fddb43b66fd3dd65baea3a6f7584a146880cfe8ef18c50aac9025124f6fa82ad1697b020000",
    ],
    [
      "ETag",
      "U4tsSyrY6qsg5HsjrawVOQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-70-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8554fd4fdb3010fd5732ef1790fa917ea54da58a959241b69276690aaaa6a9751ca718d238d80e5385fabfef9c50a08281142939df7bf7ded9e73ca23b9646a88f42b6becfa9d87ebde521aa20aaf01a565ba7a1f9f3fcc72dbbbbbf582cc4d5641aba72381800826996c49b2ca155c97341a8eccf67b5b5e0798605e7552854ed9ad586d5322dd3eedacd56b7053c499378ccd23b60df2895c97ebdbed7aead395f2714674cd608df3cafd71f9af54cf05b4a94ac1f4ad64145d63f163d4938c18af174309f81815c52b1a41bcc12b0f0c28cc26f87a56b0c6f6a6b003f304231213c4f95b60525084f63b6ce455115f51f5161f3d5079a3963671418a3c9dc0b8e5678a3c9ab63034b631f548c15f414b3842e59b4d299e532bb33befb934bc880831b2ca95c19d7178eef18c64a83be0c8c1363e89d19875cd733e69ee7cc02e3e8e4d838f727f3a971ba38c080e9884ac5d2c27280c3846abb4fbbeabe3d4b4dc00a2c94c965d7b470a367da611c7649dc6b75c2d8a461d80bbb1ddc0a4d62b7693b0a29069ed2d50b164e796ac66d6ada91854dd2e9e0ae4dad5e8ff448336e5ad8b6cdb01559b4d38c08da55d05fc1143d6332e392955b8bae7d377096813ff746c3c029da88719ea8b3d29c6ee2b54f054d02e883be763acb3828e97372bdc0f187a3c0bd72cad118d33526dbd93d0c478c1349018d05de5045c5258f60d3d07432730377e20dc7c028ce7bba4748d4fffdf84208b659b1cbaa786b2dab5de8ef015738c90bc443f9811a1db4db55fe5f62e8fbc305c86221f0f6fdf2efd62ff045545a7cd6435a6d1f350f220bedfeece0a920b854a516fa3577fc052a977c1a534153f2f92001b8487cfa6fd85f54c0c2550519a92086b125528b1041cbf1659bc27cc9ee75daed8e850ab0506f72dd46737f4eba86ae483734554f1d9517b5d8369dcae533089230759eeb9d43f61f46eb66bc28050000",
    ],
    [
      "ETag",
      "3Bb0KGJjikqHYYrVOPbIsA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-70-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d90414fc2401085ffcb786d63010521e120a6410212ad72d110b26c875a6877eaee148384ffee6c319e3c78d99d79f3cde6bd3dc22e37290c609d671f35dac34586fce48b045d5db093ab22e3100240569990fa724a6e371d8ded153ed82ffdbabd313a1b0e8570fa1d4b0583236c722c520783b7231855a2aca9926ac302f1a1f2fd64fe128fe3448492522fcc17b3d9ed6816c329f85d5aadaaddbf5696a700b6b44e7083168d46efa1b2b445cd131fcfa9b22a3074545b8d0e1ab8196496ea4a59a25094b01785ad6e27ea46fd5ebfdde975042c482bcec908bb78166fc0c4aa48e853d2415b00db941274d39c7b91af9b0cfb06f0d6fe9eb5fc6cf9f3e0e8c0e81e2d893b87de5874367947de384b20b63506a095fcf17dcee7fef40dfb4af8bac0010000",
    ],
    [
      "ETag",
      "c/KoskKBGr4eMrzcZj8ncg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000d0bbe4db38c36280fe2911e20465a965aa3f0c42b42c0324ec747af73abd467d7778df204e12d6b6515717ac026f608e65639dac69a3eff0f8705278e5a618d348eeca6623e03624d5d70d2d811327955d7a5c047c24816ada58503aa44b6ea4ea7dd85cc8ed6a9aee79641727e4169fb60841a71645ed84daf1be309f7bfb83640f52984d7cb04a0fd2cbb1c923492337c90a1efbd28a6bd5c735c2073772ddc6543efd59437678f6efa30e732986fdfce17bd0764e6a869793871399e22d41efbd6287bd42a69291039a751d26082f95b61494ae5f5efe2fb0026c6a32c1da287b6e573686b1027ff5a36e6ed8f3ff8ec58209f0f30bd8fd5bdd19040000",
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
      "Thu, 02 Sep 2021 19:10:55 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-71-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "da24843c0891a2354a688b96908d9056db3421db18ea1630c5266d57e5bfef629aae55a5f613b6ef39f79cfbe009ddf222465344787a57b3eaf1cb8d20e804318553783d7f58fe3d1f7f7b18fe0a0671b6b7dcfb985fcc673340f08625715e66ac23455d5126a7bb6d37ad445de24a880e24ead8fd4e7f3c30c7a6633bd6c01e004fb22c59f1e216d8d74a9572daeb1db5bba91069c670c965978afce5bdb7b77a65256e1855b2f756b2072ab2f7b1e8d74c50acb82866bb2d18a825ab2296639e8185ffcc989cbe4ddde538efa600de73ca30a5a22e54630b525051243cad2b9d154d9f90b6f9ea80b6eeca5d840615599d175181737662c458e1483d96cc380b366bc3f3cf36c17a1e7a1b3fda2e2edcf5bcbbd8ac766b7f6b5c5db8816b284c32a6b9c6cc38d5371f2ea01f33a978a1d5c3e6b9517e6e90f77e2c0d01a4256b83916d8e717f623a2421364d268311494c46c884d8233c202675866c18138681a745350b17a2b0fa09ed5bb619d1714ca3a143cc88d8ce28a28c5838b128e418a2c309baafb8624b2e4b2179db21741578a11b85c1ce5fcc43579790e03a53cbd65853c06b8f0a0a04d007351d9a2817a0d4b4dbf34337982f42efd26d27bc6229a68fdb3b98718233c9008d2b689e62d55ac4d030e4cfd7ee12c07a62df8f4189a6bf9f50d3f3c6c5ab96bfd04318606357e92fda8681e79f6b3b47c425ce6a0dd9b7075482e56ba80d5c1ffe001296b4cd827eecdce0276a9f0296b08a15f4f3690258073efdd78e8b0f58587d90910aeeb0",
      "3b543622b462ed0e715dee337b321af54736d2e04abd8b59cee0d8b526479391e5ac50cf15b58b0f85b662b57c014110c6efeb6e1dfe01cf12ade978040000",
    ],
    [
      "ETag",
      "GxDzG6Kx4ZR3dlv2EwdiHA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-71-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "bcb42420d84a132e8aa23602422917c610b2b4d31f6cbb75778b12c2bb3b5b118d9ae84d3b33fd667bce6977f0941621d8b04ae3e70ac5f6244635d58587b2ca94a45bc90b8960002a16136995afe169693ec864b049d23b771a4a7313f77a44c820c19c81bd8328c52c94603feea06039d25ac0b32a2f96756780da967a38f33d777c437dce43dd8fe7c3a1d31f0e606f1c1743a6d8b2e6ffb1b6d81bb0e62b0f23145804a8b59482af3150aeb629595e66d890bc12014aa8e1fa412c785532c17983260dabd56899eda6d9ec5addb3b6d52630e30153292f889dcf481f28ae58e6f11772092601a22ec970545f37344ec3da882eddb16f766a7d5f019216a5192eff06496fc2e8337c608708be732ce755a18ed4f5f0def9ed38caf4f3a82bc71ffc20a4a2a48e88ef8e0633df194d34b73878ef6f15ca89e014a4449d61abd9b938b7cce67bac975c474defb195a8d08080d1df719b2ab0239649dcbf01d6d3eb407b020000",
    ],
    [
      "ETag",
      "7pxd+p6YshEvhiKIQds6vg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-72-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "2accfba7d5f283840442a4aacb52dab1a5a423a4553b4d890193ba014cb1c91455f9ee3b4c699b6e6b252438df7bf7ded9671ed09aa6211a229faeee0b926f3fde311f3510117805ab37ebe9e98df9ed7bfa69bc0e5c53f37b2cd88c8e8e00414b16c74916932667451e103e9ccf5aab9c1519ce196b42a1a6d16d76744dd555d330bb9aa1018f93389ad0740dec5b21323e6cb76bedd68ab1554c7046792b60c9d37a7bd36d6739bb2381e0ed7dc936a8f0f6dba2c7310bb0a02c3d9acfc040c149be2009a63158786686fee7fdd22d8a93d60ac01b1a101c04ac4845690b4a042c8de8aac86555347c40d2e68b0f34b326d6d853c6d3b9e31d2c71529297870ae64a1d349425f414d1982c68b82c338b45b6564edde93964c0c12de6842f95abaf966b29cf4b4be5c39172ac8c9c1365bf82ed2873c7b1669e72707ca89cb9d3f985f2e57a0f03d643c2054da5710ffb31294d3feeadfdf78996042c40b54a2e0c55c79d816afa916f04d140ebfb914a7c7fe01b7dacf96a60f6482ff409069e28ab4b164e59aa6b9a161a91d6ed847a2f8a34b3a36155edf55555f5d5ee208ccc08432903ed1ae8774e0539a13c639c561b8cae5cdbb3169e3b77c623cf926d44b888c54965ae6ce2a54f014d02e88dbe76659632502a4fcb763ccb1d8d3dfbd2aa0664425638d8ceee6144221c7302689ce38408929fb310360d5d4c67b6674f9dd10418f2d42f6a0447c39f0fcf046f9bc95d16f28d669e6b3b67d2408db8c47121219bea038d32f08a76bbc6ffcb8c5c77740dd238cff1f6550edad17b25fd1f12122fa3ca662dd941a55a1d75f7221ded7eede06920b85e9516fa31b7dc6b",
      "542db92422394983f78709c032f1ee5fa2beb280854b0b325c400ca31bf05224c84935c23491e62bf6a0df370d0349702e5ee7f44e57afcfaaac5156240949c56347d59595db56a60afe0482244c9e238f6df7072039cd3032050000",
    ],
    [
      "ETag",
      "ZkOFZ9JKn+CkcR93b4ocvA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-72-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4010fd2fe3b58d500815120e60086208a9550e6a0859ca50fb3965778a6908ffddd96288472fbb33ef63f3de9e214bca3d8c6097c4c71a75731723bfd8214453e76ce4aaa834080e20ab5894f771fc103ccfb3e329c8c2e063e5f5d3f766321e8bc2445f5828189de19060be3730fa3c43a90a149b2aa82e5944dc54765facde66f3592840417b0bacd6cbe564ba9cc1c5b999b6db2afb9765737120a55d8807d458466833549a528c7861eb19555439ba866a1da18156dc12b1a6ba529ac815c4f53db73be875069da13ff47a7e4f8439458a132a45bb7e956cc0c42a0fe95bda812702dd8e52f4d09e2781fb6d073b75db687f39efc67996dbfc3e386d184da049d219b4c13ad7908f6483b314625da30391923f7e4af8ba5f7e00fccd186ec0010000",
    ],
    [
      "ETag",
      "/gg8PJGkqvPkRPZN24jYyA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "6d1c5010e84e8bc551e4a311c14d26c694060a864401757af73abd467d77780f4028654ae1cbb9643578033732728674b812f6ccedf2838b75eb3bbf35bed1f996b3a84a4d73ae59a118e51bbcb0c3a4f24e453b09109b52c5d3ad1d9aa300c188643e2e43b2a0813aa4bc1469c5ae8d0cb5ece26f85f5e1f511e5f53c84852c026d02bb1c558759158ddd75b45b7ac85f8fe3d6803aacab26df537d3fbda6d02d6c82bc26d1dfefe1171688a56d5bb7460b8fdbf9e8783fe25382777c99a2b9b14948cc148ce5defca4f7b3ec579a254c338f872f2fff171800d60b2e99c2fcb97d6c3ace00fcd5c7979b60cfff33462493e0e7179aad0bc019040000",
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
      "Thu, 02 Sep 2021 19:10:56 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-73-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85535d6f9b3014fd2bc87b6d0209490891a2354ae91a2921299056d33421db18ea1630c5265357e5bfef629aae55a5f609dbf79c7bcefde0193df03241334478f6d8b0fae9dbbd20e80c318533782dc27116264d9107dece3c30310decdddfebf91c10bc65495c5439eb49d1d494c9d93eec67b5682a5c0bd183443dc7ee0d26b635b15cc71dda8e0d3cc9f274cdcb0760df2955c999699eb4fb991059ce70c5659f8ae2f5dd3c0ccdaa16f78c2a69be973441459a9f8b7ecf05c58a8b72be0fc14023591db302f31c2cfc6726e4fc7dea3ec7453f03f081538629154da95a5b90828a32e55953ebac68f68cb4cd3707147a6b6f191954e44d51c6252ed89991608563f55431e332d86e8c957fb90d368b68b5f5e37079e56d16fde576bddff8a1717be5059ea130c999e61a73e35cdf7cb8807ec2a4e2a5568fdae756f9a541ab8f636909202d59178c1d6b820753cb252971683ab5c724b5182153e28cb14d2cea8ed828210c034f8b6a162e4549c6034247348db1eb3af168685bf1d41d0ee2c41e5b291bb8438b60743c437f6aaed805979590bceb10ba0d56911747c1de5f2e224f9790e22657179db1b680b71e151408a04f6a3ab6512e40a96df7ca8fbc60b18c56375e37e135cb307d0a1f61c629ce250334aea1798ad51b9140c390bfd8781700d613db9d8212cd7e3da3b6e7ad8b372d7fa54730c0d6aed25f1446c1caffa1ed9c1037386f34e4d01d500596efa036707dfc0d4858d22e0bbade7bc14fd43d052c65352be9d7d304b00e7cf9af9d161fb0b0fa202315dc6177a86c4568cdba1de2badc17f6743c712cfda72a5cab0fb1e96072ea5a9ba3cdc80a56aa978abac587423bb146be822008e3f775b78eff006fbd309078040000",
    ],
    [
      "ETag",
      "mS5gSdumlREP/veo8R3PzQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-73-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d92d153824010c6ff97ed3198513148667cc0b4b25133c55e1ac73961410c38ba3b34c7f17f6f8fcc9a6aa65e6077f9edf17d1fece139c943706199c42f258add598cea4117139465aa24dd0a9e4b040350b19848613742bfb3693e96e3bba6377b957ef7dcd9b6db44c860851903770f51826928c17dda43ce32a4b580a765962faace00b52bf470ea4ffaa31bea331eea7e341b0cbccea00707e3b41832c51615ff8fb5f9c180355f4e30428179805a4b21f81a03d5d73625cb8a144dc94b11a0840aae1ec4829705139c9b34311dcbacdb56cdaeb59c56c3722c02531e3095f09cd8d994f481e28aa513be2597601320aa920c47d57543e324ac8ce8b23ff2ed66a5ef2b40d2a224c5c5df20e95d31fa0c1fd83182ef1ccb7899ab13753db8f77e3b8e32fd3caaebf9bd1f845494d409f1fbc3ded4f78663cdcd8fde3b3b85722c380529516758af352f2f1cbbf61eeb15d751d37b5c254a342060f477dc260adc88a5120f6fb3222c7e7b020000",
    ],
    [
      "ETag",
      "r62dTBv4VuPJ4AUxsTD+7w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-74-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85546b4fdb3014fd2b99f705a43ed2571e952ad6958c652a294b53109ba6d6719d6248e2103b450cf5bfefc62140d90652a4e4fa9e73cfb9f6751ed00d4bd7688842b6b92d687efff19a87a881a8c41b58b5177c8693ebed37fb87c14ff541e45e4c7edf8d468060254be0248b6953f02227540c17f3d626e7458673ce9b50a869f69b1da3a71bba6ddadd9ed9039ea0713465e90db0afa4ccc4b0ddaeb55b1bce3731c519132dc293a7f5f6b6dbce727e4d8914ed7dc936a888f6dba247312758329e8e16733050089a2f6982590c169e99ebf0d37ee916c3496b03e02d231413c28b5496b6a004e169c43645aeaaa2e10352365f7ca0b93375268136992dbce060859392bc3ad4b0d0eaa0a1ada0a788c574c9d6ab32b35c6637da177f760a1970708505152bede2abe33bdaf3d24afb30d28eb4b177aced57703d6de179ce3cd00e8e0eb5137fb638d33e5fee61c0fa9a0ac952653cc0614c4bd38f7bebfe7da225014b50ad924b533770c7d2ed300a4d1259bd4118e9340cadd01ce05ea813bb4ffbeb9062e0c9b2ba62e194a724241ddbea1ab4d38f4ccbb4f46ed88bd6d8e81032a0c08cecbede8f0636da35d05dce243d6622e382551b8c2e7c37709681bff026e3c0516d44b888e57165ae6ce2a54f094d02e88dbe76659671502a4fcbf502c71f4f02f7dca906644a3798dccf6f6144221c0b0a689ce3844a9a9ff2356c1a3a9bcdddc09d79e32930d4a99fd50881863f1f9e09c17da67659aa379a07beeb9d280335e21cc785826cab0f8433f08a76bbc6ffcb8c7d7f7c09d238cff1fdab1cb463f44bfa3f24145e4595cd5ab2834ab53aeaee4506dafddac1d34070bd2a2df47de1f897a85af26944739a92f78709c02af1ee5fa2beb280854b0b3242420ca34b442942725a8d304b94f98a6d0d4cab672005cee5eb9cd5d1bbf5599535ca8a34a1a97ceca8bab26adbca54219e409084c9f3d4b1edfe008c1590ad32050000",
    ],
    [
      "ETag",
      "9UoOamjvJ9Z6oM05fIWCzw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-74-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d90414fc2401085ffcb786d23508440c24108621342a44a4834842c655a0b6d67dd9da20de1bf3b5b8cf1e86577e6cd379bf7f60cc7acdcc3107659fa51a1a96f52e4a52b22b455ce562e4da545f00059a542e6eb6e514f6ec3645d3c243a08675faf8ccbd148081bbf63a160788624c37c6f61f876865215286baaa0aa6481b8d6ae0f172fd3d93412a1a0bd1316abf9fc7e3c9fc2c5fb5dda6ef5f15f2b9b8b0707da4598a0c13246e7411b3a60cca18b6755a173f42d5526460b0ddc0c5243955686c817c5ef77fd762f68f55a83fea013f40301738a1567540abb7a166fc0c42a8fe853d2414700d394123469ce93c8774d865303386b7f67bddf59dbcd363f0f8e6b46fb6448dc5974c65a57931372c65902b1a9d08358c91f3f667ced2fdf3d0902abc0010000",
    ],
    [
      "ETag",
      "lW4myC/IfWmFfp3IGxZteQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "bb64ad4e0001e90e2c320c2a5f85bac9449222e22710c080d3bbd7e935eabbc37b029ce79473d4de2b7a031f60c0b231cb671e5b589f8f3230ec311f17bcb6f2955055a577185b4db3de512333e8b691e853448af98e0586349cd5c284f7cbd195aebbf67a99aeb94d6074aa9684b89ae7cb11c25e96f82209d79763afdeaa2f3a55764a57a79214d614912b85c84a46f89de05888ee116764430b91ea9b1eb77a4c3408e5aac06ed839e1de4b364b16b6758bd27d7c98d3b379c05c3ea5ba25eb7657e95b589ba9d20c891f3ad6d9d48686f02a9bbdbdfd5f6002a8606543392a5fdb15d53026e0af3e6a07465fff2d8a1bda809f5f4622527219040000",
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
      "Thu, 02 Sep 2021 19:10:58 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-75-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d6f9b3014fd2bc87b6d0284262491a2354be98a96908d9056d33421db18ea96608a4daba8ca7fdfb569ba56955af100f63de79e733f784277bccad014115edcb7acd97fb915049d20a67001b7575efe6369db32f876733ba283517d1d3afb62360304d72c897775c97a52b40d6572baddf48b46b4356e84e841a29e3fecb923cf1939137f32f07c0f789295f9925777c0be51aa9653db3e6af70b218a92e19acb3e15bb977bfb6160d78db8655449fbada40d2ad2fe58f46b2928565c54b3ed060cb4923529db615e8285ffcc8c9cbd4ddde778d72f00fcc029c3948ab652da16a4a0a2ca79d136262b9a3e2163f3d507da04cb6091585494edae4a2bbc63275686154ed5be66d645bc5e596174b18e57f3245c47e9667119ace6fdc57ab95d451bebfa3288034b615232c3b566d69939457000fd8c49c52ba39ee86badfcdca0f0fd583401a425eb82a9ef8cb03b762624273ecdc7de90e40e23644cfc21f6884327a7ec34230c03cf881a16ae44956187507790a56e46bcf414e3413af1e938253e1bd3c170e47aee101d4ed063c3153be7b21692771d42d771980469126fa3c53c094c09396e4b75de19d305bcf6a8a040007d50d34147b90025ddee304a8278be48c2aba09bf0921598ee37f730e31c9792011a37d03cc59a95c8a061289aaf8273009b89fd3c06259afe7942bae7dac5ab96bfd01318a0b6abcc1b6d92388cbe1b3b47c4152e5b0379e83e500d966fa036707df80b4858d22e0bfab50de2dfa8bb8a59ce1a56d1cfa7096013f8f45f3b2e3e6061f541462a38c3ee50a94568c3ba1de2a6dc67f678a81f64c08d7a17f35defd8359d4367643b56a9e78abac587423bb156be802008e38f4cb70eff00a79a6f0578040000",
    ],
    [
      "ETag",
      "V3fKL//sEBhj6c26pWI0yg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-75-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92614f82501486ffcbe92b6e980ac9e6072c2b0bcd14d75a73ee0a07c4804bf75e72eafcef9d4b66addaea0b9c7378cee57d5fd8c1739287e0c022895f4a149b9318d5bd2ec628cb5449ba153c970806a0623191f65074f3bbeef6019b37d6f6d65bf51eddc5bad32142064bcc18383b88124c4309ced30e729621ad053c2db37c5e7506a84da187137fdc1f5e519ff150f7c3a9e7b95daf077be3b81832c5e615ff8fb5d9de80155f8c31428179805a4b21f80a03d5d73625cb8a146b9297224009155c3d88052f0b2638afd1a466b76a75ab615a66db6e9f36ec0681290f984a784eec7442fa4071c5d2315f934bb00810554986a3eafa4ae324ac8ce8b23ff4ad66a5ef2b40d2a224c5f9df20e95d32fa0c1fd82182ef1ccb7899ab2375e9ddb9bf1d47997e1e75e1fabd1f845494d411f1fb83dec4770723cdcd0edebb1b857224380529516758379b672ddb32df633de73a6a7a8fa3448906048cfe8eeb448113b154e2fe0d5558f6ff7b020000",
    ],
    [
      "ETag",
      "7NrBnOBzWe4J6zKLjEYAbw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-76-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "10fd2accfba795f203920049a4aacb12b6a2a52423d0ae9ba6c48049dd02a6d8b48daa7cf79da1699b756b2524b0efbd7befce671ed035cd223444015ddf94a4d87cbc62016a2022f01a76079c9f77bdb97ff22dd2efecfb1ffca77d2f46474780a092c5719a27a4c9595984840ffd456b5db032c705634d48d4348da6667455431d98834ed7ec028f93249ed2ec1ad89742e47cd86eefb45b6bc6d609c139e5ad90a54ffbeddb4e3b2fd81509056fef4bb64185b7df163d4e58880565d991bf00032527c592a4982660e19919059ff653b7284e5b6b00dfd290e030646526a42d4811b22ca6ebb2a8b2a2e103aa6cbef8400b6b6a8d3d653cf31def608553495e1d2a982bbb454359414d314dc892462b19592ef36be58b3b3b850838b8c49cf095727e62b996a2ac222cc84af970a41c2b2367a2ecb36d47f11dc75a78cac1f1a1f2d59df973e5f3c51e066c47840b9a55a63d1c24441a7eecabfdfa3425010b30510797a66a60adaf0e823830c3b8dfd583582541d00f4c1d7703351cf4482f0a08069e90d92b16ce58a64531d6031c859a11683a564d53ed0f746218516c1ab1de3775ddd47a6a076d1be8aea0824c28cf19a77573d1b96b7bd6d2737d673cf2acaa8c18978998d4e664112f7d0a2812406fd4b59551ca40499e94ed78963b1a7bf699550fc794ac71b859dcc078c438e104d0b8c02911a4386511340dcd670bdbb367ce680a8ceac4e73b0447c35f0fcf046f93575d16d51b4d6401db1709cf70525680dbfa0375d48eda543b4d4d47db6de3ff9946ae3bba00755c1478f3570c2a327a92fe0f9d0a5fad6aa73b5d0d49b527177b2b036d7f6fe16920b85db516faee5bee05aab75c12938264e1fbf304e02af0ee4f62",
      "7763010b771664b880354c6fc8a54858907a8a695a99afd97d7d6074aa5f8cc0857815330d6d775c3287cc48529289c78aea1b5bb54d864afe0482200c9f633b5f21fa07482098e731050000",
    ],
    [
      "ETag",
      "9ssW3TPUHKd5wIxXsZIxtA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:10:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-76-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6b",
      "c2",
      "401085ffcbf49a4034ada2e041c5568b88a62a8522b2c6491a4d32dbdd8922e27fef6c2c3df5d0cbeecc9b6f96f7f60ac7acdc43177659fa55a1b93ca4c80b574468ab9cad5c9a4a8be001b24a855c073a3bbf2efb9cbeafc78f96fbe7f9f370d1eb0961e34f2c1474af906498ef2d743fae50aa02654d1554952c105fb4eb27b3e5e865148950d0de09b3d574da1f4c4770f37e97b65b7dfcd7cae6e6c18176112668b08cd179d0860e18f3c4c5b3aad039fa962a13a3851aae07a9a14a2b43e48be2b75b7ea31506ada0d3ee34c37628604eb1e28c4a61576fe20d9858e5119d251d34053075294193fa3c89fc546738d580b3f6f7ace1669b9f070717463b3724ee2c3a63c1dde4909c7196406c2af42056f2c7e38ceffded1bb0de3b68c0010000",
    ],
    [
      "ETag",
      "V0piwJTAtgXVH4stAwPFCQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00000002ffedd35b7282301400d0bde4db3a2004a47f62500151542afe6590def0880f24a1063bdd7b9d6ea39e3d9c6f94e5390841e595c305bda33e1b39c37c18366397dc4bbf2919f7c7b84b8e4bcbfee2872209c69532f9fc5ccc2c634e96133decf062bda57167d23ebd05ee4ee4edeeed3033832831b8fd98e2b31f954bc2457774a5c9544163004256960aab8946de3c03541da6b5ae09b5be06697ddbaf59c77c2cbd931ec7c5c55bf4de4774d14ca3c41bed210f3a934e6b5d2556901e8507b63e63ac7f70b5773e9d11e9ee531a81bd39adcc8cdcc4d9c6f5a45e6cb6d62819bebcfc5f68804035550b8256cfed06769c01faab4f65dfc0f3bf0b590b2dfaf9056c6124d519040000",
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
      "Thu, 02 Sep 2021 19:11:00 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-77-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6d121a2040a4688d52ba464bc84648ab759a903186ba2598da266d57e5bfef629aae55a5f609dbf79c7bcefde009ddb22a436394b2e2aea1e2f1cb0d4fd111a20a17f05a56df777f1f84150597e2e1c6bcf87e45acabfbc90410ac6549bcad4bda93bc1184caf166dd2f046f6a2c38ef41a29eebf68e479639327dd71f5aae053c49cb7cc1aa5b605f2b55cbf16070d0ee179c1725c535937dc2b72fef83dd70500b7e43899283b792035091838f45bf969c60c57835d9acc14023a948e816b3122cfc6766e9c9dbd47d86b7fd02c03b4628268437956a6d410ac2ab9c158dd059d1f809699baf0e681d2c82596c105e36db2aa9f0961e19195638518f3535cea2d5d2988767ab68398de7ab3059cfce83e5b43f5b2d36cb706d5c9e075160289c9654738d8971a26f215c403fa352b14aabc7ed73abfcdca0f9fbb1b4049096b40b26ae39c2c79ee9a779ea92dcb39c3437699a7aa9eb602b35896f533b4b29069e16d52c5c41cd7eea3843df4b6cd77212db1e668997394e927a76e6f923d3ca8e29da1fa17bc1143d65b2e692751d4297d13c0e9238da84b3691ce81272dc94eab433d616f0daa3820201f4414dfb36ca3828b5ed9e8771104d67f1fc22e826bca005268feb3b98718e4b49018d05344f51b1e419340c85d365700a603db11f87a044e3df4fa8ed79ebe255cb5fe8310cb0b5abf417ade3681e7ed3760e880b5c361ab2eb0ea806cbd7501bb8deff01242c699705fddc04d12fd43d4534a78256e4f3690258073efdd70e8b0f58587d90910aeeb03b44b6",
      "2244d06e87982ef799edc1203d1b69b050ef628eed1dbad6e66833d22dadd47345dde243a19d58235f401084f187ba5bfb7fdd3537dc78040000",
    ],
    [
      "ETag",
      "lnKvzxr3REWrxj0VKZc3Zw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-77-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d92dd6e82401085df657a2926a82d288917f8d36aa356112f4c63cc0a836281a5bb4b1b637cf7ce526b9bb6497b0333c337cb39078ef014672138b089b7cf058ac3d516d54c171eca2251926e39cf248201a8d896c84a61efee2be6229d3597cb5eb717d5072ddb6db78990c10e5306ce11a218935082f378848ca5486b014f8a345b979d01ea90ebe1dcf786933bea531eea7eb2188ddccea80f27e3b21832c5d625ff8fb5d5c9803ddf7818a1c02c40ad25177c8f811a6a9b92a5798255c90b11a084122e1f6c052f722638afd2a46adbd59ad5302db365b7ea0dbb4160c203a6629e11bb98933e505cb1c4e3afe4122c02445992e1a8bcbed0380e4b23ba1c4e7cebbad4f7152069519ce0fa6f90f4ee187d860fec1cc1778ea5bcc8d485ba1d3db8bf1d47997e1ed573fdfe0f422a4aea82f8c3717feebbe3a9e65667ef9d834239159c8294a833ac99d7cd1bdb32df63ed721d35bdc751a2400302467fc72056e0442c91787a031ad6bcce7b020000",
    ],
    [
      "ETag",
      "+u7hJ+0UmQ8YYDCDf2H97A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-78-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "99",
      "f7",
      "05a43ef268daa652c53ac8583448bb3405c134b5b6e304431a97d8e956a1fef7dd2414e8d8408a94d8f79c7bcf7de501ddf12c42034478725fb07cf3f15610d4404ce1046e9d22f9cd2ea7a7b79efded0b595f71fd7a9325c3212078c99278b94a59538a22a74c0e66d356928b628573219ae0a8d9eb378daea57775a7e79856cf029e64697cc6b33b60df28b59283767b17bb950891a40cafb86c51b17cba6fafcdf62a17b78c2ad9de0fd98628b2fd76d0a35450acb8c886b329082824cbe76c89790a129e9911f9b4efbac5f1b2950078cd29c3948a2253a52c70414516f3a4c82baf68f0802a992f3ed0d43d738f43ed783cf3c383055e96e4c5a186a5b63b34b405e414f394cd79b4282df3f9ea4efb128ccfc1020a6eb06472a15d7e750357d3165281ba85f661a81d6923ff44dba77bbe36f37d771a6a074787da69309e4db4cf577b18d01d31a97856a90e314959a9f8b1b0deeb769604ac40456d9cf7f42e36faba4362d2a371dfb249ac3342faa467638be8d4e9b04e4418069e2abd572c9c898c9871ecd871e4f44c3d726caadb76d4310c4afa26e9c57a871984752d6aa36d03fdcab962275cae84e47575d165e085ee3c0c66fef12874ab34625ca4eaa4165726f152a7822401f4465edbd2ca05442a5be5f9a11b8c8e43efc2ada7e38c25986ea6f7301f314e250334cef19229969f8b088a8626e3a9177a637f74068caae5931d42a2c18f876742b859555556d51b85de39f468743ea934ec4017382d2ad4bafe40a66eea4ddd6c1a76689803c31a",
      "189d96aeebd768bb6dfcdff9280846572008e739defc658324bb9d92fe8fa815be3ad5e2772a0c54467bd2b477eaa2edcf2d3c0d041b57c742df676e7085eaab80c52c67197d7fc4005c19defd71ecb618b0b0c7100636427118682acb203467f560f36525be66f7bb86e138a802e7ea95cdb2fabb0e963e4a8f6cc932f59851bdc555d94a53219f40608479f43dff14ac7f00a88c4aee45050000",
    ],
    [
      "ETag",
      "9ugxeWSGjI5KFbvYi0Zyng==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-78-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d904f4fc24010c5bfcb78b44df8a3204d3888699040108b188d2164bb0cb5d076eaee148384efee6c319e3c78d99d79f39bcd7b7b845d5aac2180384d3e2a34878b04f9d11511da2a632b57498545f000592542beb42ef757c371e7abf71cc5bbe16c3e7ed0af49bf2f84d5ef982b088eb049315b5b08de8e50a81c654de554152c101f4ad78fa64fe1308c44c869ed84e96232b91d4c423879bf4bab55b9fbd7caf2e4c196e2083768b0d0e83c9486b6a879e4e259959719fa962aa3d1420dd783c450552a43e48be2776ffc66a7dde8347add5eabdd6d0b9891569c5221ec622ede80895516d1a7a4839600a62e25e8a63ef7225fd719f635e0acfd3d6bbad9f2e7c1c181d1ce0c893b8bce58e36cf28e9c7196406c2af4402bf9e3fb94cffde91b7d844dbcc0010000",
    ],
    [
      "ETag",
      "X2+v4GK6z9VRbkGPSKOcYg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "edd34b7282300000d0bbb016476cc2a7bb521d31265aa521ea2683984ac0123e291a3bbd7b9d5ea3be3bbc6f2bcd32d1755cab5254d6b365d27130cc868bda0f27977ccfe0d8718290ccf7aa0a12702692724fafddac9c2e8f8d4925b3038cd8fb66dc9b7681480c1d49080d672059edbcb0c2a8004dad2ec48bdc9bd74f6c37ffdc2ac34a07491922c618bdd6a081dd4b115166830f1e6127476f67168f8293fba581827085d70e2f40dcbecab8394eec886dfb919f545a51b241bb252bedc4cfc1a683cac7e680cbeacce7cbe98aea1e432a95d94f9b5971daf9073d7c78f8bfac8125aeb56c45c7e57dfb130c8281f5579f6b538bfbff50a4ad68ad9f5fc1bdf78e19040000",
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
      "Thu, 02 Sep 2021 19:11:01 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-79-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "14fd2bc8fbda04f2685e52b446095d3305b20269b54d13b29d0b754b30c5265355e5bfef629a2edda4f613b6ef39f79cfbe0993c887c4b268489f4b182f2e9d3bd64e48c80a629be2691bf2ee0ebfada1b5f06fb68a1c31ff67e369d2242d42c457745062d25ab92839a6cc2765acaaaa0a5942d4cd41a8e5b9d41cf1938e3e1b8db1bf690a7204b56227f40f69dd6859ad8f651bb9d4a9966400ba1da5cee5edfed7dd72e4a790f5c2bfbada48d2aca7e5ff4732639d542e6d34d88062a05650c3b2a32b4f097b965176f53b705ddb55304ef0507cab9ac725ddbc2145ce68948abd264259367626c9e1c48e8aedc7964719955bb3ccee90eceac2dd534d64f055897c1dab396fee53af066d172edc7e1fccaf566edf97ab5f1fcd0babd7203d7d2946560b8d6d4ba30371f2fa8bf05a5456ed4a3fab9567e69d0f2ffb1d4049456d004e3a133a09d913366091bf264d43b6789038c8dd8f09cf698c3c77de86f1950e41951c3a2b9cc61009d313be77182d1b8dfebb098750710d311ebb361b7cf8151723823bf4ba16121542195683a446e8365e4c651b0f1e7b3c8352524b4caf4a231561770ea516381087aa7a6431d151295ea762ffdc80d66f36879e336135e414af953f888334e68a600d1b4c4e669283db9c586117fe6b90b049b897d3b061599fc7c2675cf6b17272d7fa54738c0daae365f1246c1d2ff62ec1c113734ab0c64df1c488196efb036747df885485cd2260bb9deb8c177d23c0590400939ff789a0836810fffb5e3e22316571f6594c63bee0e57b5082fa1d92161ca7d618f069dd1c821065cea7f635da7d73d76adce5167841de4faa5a266f1b1d046ac52af200ce2f87dd3adc31f98a8c7c878040000",
    ],
    [
      "ETag",
      "fTNOpeJOQM9FRvTDtSZ/vA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-79-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d925b4fc2401085ffcbf85a12102cd28487822824dc84e28b216469a750d876cb5e2084f0df9dad88464df4a59d997eb33de7b427d82659041e2c93d5cea03cdeac503fdb6282ca70ade8968b4c2138809aad88cc7cde6aefcc345c9bd1b673e8eef5b1f6e2379b44a8708d2903ef0471823c52e0bd9e206329d25a28b849b345d139a08fb91d4e83496ff8447d2a22db0f67fdbedfea77e0ec5c1723a6d9a2e0ffb1363f3bb011cb09c628310bd16ac9a5d860a87bd6a66269ceb1a48491212a28e0e2c14a0a933329448926a57aa35471ab65b7dca8376eabf52a815c844c2722237636257da085667c220ee4125c02645192e1b8b8ee699c4485115bf686815b2bf47d05485a9c705cfc0d92de35a3cff0815d22f8ceb154984c5fa9c7fec8ffed38caf4f3a8073fe8fc2094a6a4ae48d01b74a6813f185b6e7ef1de3a6a54632928488536c34ab9767f5777cbefb1b6858d9adee36969d08190d1dfd14d347831e30acf6fb370ad297b020000",
    ],
    [
      "ETag",
      "nAlBCquSchuOkEwHvty4VA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-80-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fd6f9b3010fd5798f74b2be5837c01891475594a3ba4947484b4aaa62931c650b704536c124555fef71da6499b756b252438df7bf7ded9679ed1234b433440018b9f0a9a6fbf3ef000d510953886d54d8b1b85ebdd6e9c34b1e6f73cbb5faff3cd70080856b2045e6509ad0b5ee4848ac17cd688735e6438e7bc0e85ea965e6f191dddd0fb66bfdd313bc0133489262c7d04f6bd949918349b7bed46cc799c509c31d1207c75586faedbcd2ce70f9448d13c966c828a687e2c7a96708225e3e9703e030385a0f982ae304bc0c22b330cbe1d976e30bc6ac4005e33423121bc4865690b4a109e462c2e7255150d9e91b2f9e603cdec893df6b5f174eefa274bbc2ac9cb530d0b6d1fd4b425f414b1842e58b82c338b45f6a85d78d32bc880837b2ca8586ab73f6ccfd60e34edcb503bd346eeb976cc775c6deebaf6ccd74ece4eb54b6f3abfd6bedf1d61c078488564a9b2ede320a1a5e5979d75de9f6749c0126c54c985a91bb865e9fd200a4c12599d5e10e93408acc0ece14ea0937e9776c38062e0c9b2ba62e194a72dabdb32f55e27c221c67adb08cd50b742628461d8217d1a10628611b122b4aba14dce243d6722e38255db8b6e3dc7b717be3777c723df566d44b848e47965ae6ce2ad4f094d02e883be76659671502acfca717ddb1b8d7de7c6aec66342634cb6b3271890082782021ae7784525cdaf78089b86aea733c777a6ee68020c75e6d77b8440835fcfaf047f9ba95d96ea8d2e26d3916f7495833de4062785c2acab0fd46af400b1abfdbfccc8f34677208df31c6fffca413b86a2ff4341e15554d93c28a2526d1fb58f2203ed7eefe0a921b85c9516fa39b7bd3b542d7934a2394dc9e7c3046095f8f41fb1bfb080852b0b3242420ca34b442942725a8d305b29f315db323a56d7420a9ccb77b9bed9db9f5559a3ac485734952f1d5517566d5b992ac4010449983c",
      "d7712f21fb075274196d30050000",
    ],
    [
      "ETag",
      "w1o6uNRWwInl8Uhophvvrw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-80-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c5bfcb786d934211848483980a248448958331842ccb505bda9dba7f50247c77668bf1e4c1cbeecc9bdf6cdedb13ec73b585016cf2ecc3a13ede646817be48d1b8d21abe6a52062100b42263b2dfd632719dc7b8184fbe5bc5ebe24bed6fb3e1900923dfb1123038c12ec7726b60f07602252ae43551915396217bac7d3f9dbf24e32465a1a2ad17e6cbd9ec7e344be01cfc2eadd7f5fe5f2bab7300056d52dca14625d17ba8351528edd4c733a2aa4b0c0d392dd1400337834c93ab85260a5909efa2b0d58da36ed4eff5db712f66b024296c4e8ad9e5337b034b5694297d723a6833a09b9283ee9af3c072a7c97068006fedef59cbcf563f0f8e8e16cd93267667d01b8bae261fc81bb71cc86a870148c17f3cc9edb53f5f007e9bd9cdc0010000",
    ],
    [
      "ETag",
      "92rcEu4F3jGHz1jYQxnk5g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "8b08000000000002ffedd34b7282300000d0bb646d1c47894a770665ca47400109dd6450c2a72a460892b4d3bbd7e935eabbc3fb06d9e9c4ba8e8adb9935e00da86caa8f4f63872ff17aa81f88b7e8bedc2f3cdfba4e69bccdef61a4d0d92f6555492fded4d1ead384f3a6d093bc33221b17da61ee60420a2fdfa579efb0caf03f22a4852d1f84df1f1302d56160e6fa8c57789850aab8dfd08542e5a5776f53bbb7d3c355b83adccd2a6b7fe4614c24728f7606cb302836fcdde2c2c40177064984a175b50bb169616f1b3c36e944bbc6fe5eae927b69a8d8a49ebc345b5758818429fc4a4843c62f2fff1718012679ddb28ed6cfed33a4eb23f0579f0ac5d9f33f6659cb5af0f30bc3e2c7eb19040000",
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
      "Thu, 02 Sep 2021 19:11:04 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-81-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6fda3014fd2b91f7b53c130820a19541ba32415843a0eaa629729c9bd46d88d3d8e98a2afefb6e9cd251556a3fc5f63de79e731f7926f73c8bc888843c7928a1d87fb913213923a06882af4f773fb6b31b6fb9b1afb7c57ef3edd7d5fe29bb1a8f11c12b96a4bb3c85861465c1408e36eb66528832a785100d4cd418741a9dbed9eeb787f6b06bda26f224a4f18267f7c8be552a97a356eba8dd4c844852a039974d2676afefadc76e2b2fc41d30255b6f255ba8225b1f8b7e4d05a38a8b6cbc59a381524211c08ef2142dfc6746e1f9dbd44d4e77cd04c18f9c01654c9499aa6c610a26b2982765a1b392d133d1364f0e64ed2c9ca96f309196bb2cc8e80ece8c882a1aa87d0ec685b75a1a73f762e52d27fe7ce506ebe9a5b39c34a7abc566e9ae8deb4bc7730c45c31434d7181be7fae6e205f523908a675addaf9e2be59706cddf8fa522a0b4843a18d8ed3eed0cdac3300e6d160fcc5e18b7210c07a1dda366d866430bac28048a3c2daa593413596f00431bda9d20b42d3bb0ccae150c7ba619585197b1288ce2be1593c319f95b7005332e732179dd2172edcd7d27f0bd8d3b9df88e2e21a665aa66b5b1aa80538f0a0b44d007351daa2817a854b57beefa8e3799faf3ad534f78010965fbf503ce38a6a90444d3029ba7a0588a081b46dcc9d29921584fece73128c9e8f733a97a5eb93869f92bddc701567695fe92b5efcdddefdace11b1a569a9218ff581e468f9166b43d7873f88c425adb390ab8de3dd90fac983180ac8d8e7d344b00e7cfaaf1d171fb1b8fa282315de717798ac445801f50e715dee0b7bd0b77a568f6870a1dec5eccef0d8b52a4795117690a9978aeac5c7426bb152be823088e37775b70eff0018f0fe1878040000",
    ],
    [
      "ETag",
      "xjJVDYRMU7WVryUBZQyxnQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-81-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "f85a22881668c24311d4ca452e454d0c214b3b2dc5b65b76b72221fc77672ba251137d6967a6df6ccf39ed0e9ea3d4070b1651b8ce516c4f4254235d8c51e6b19274cb782a110c40c542221f37d168d3ad4c6d75fa20eff135ebdeb6d79b669308e92d316160ed208830f625584f3b485982b4e6f1384fd279d119a0b6991e4edcb133b8a63ee1beee07d35ecf6ef53ab0378e8b3e536c5ef0ff589bed0d58f1c5180314987aa8b56482afd0538eb6295992c558923c171e4a28e0e24128789e31c1798926a57aa55431ab65b3dca835ceaab52a8131f7988a784aec7442fa4071c5e231df904b30091045498683e2fa42e3c82f8ce8d219b8e679a1ef2b40d28228c6f9df20e95d32fa0c1fd82182ef1c4b789eaa2375d5bbb37f3b8e32fd3caa6dbb9d1f845494d411719d7e67e2dafda1e66607efadad4239149c8294a833ac94cfeb1735b3fc1eeb25d751d37b2c257234c063f477dc440aac80c512f76f93b11ecc7b020000",
    ],
    [
      "ETag",
      "XwiQwK1UAt/WsVexpKJDqw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-82-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "7f4fdb3010fd2a96270448fd01a514a88458693396adb4254d61d5841a37b906431217db41aa50bffbce0e8155b0edcf4991e2f3bdbbf77c77f6337de05944db74cee3c71ce4ead3bd98d30a05cd62dc8d9abdab83cb3cee66f937195fc43f2efc7bb83a3d450437518aa5cb04aa4ae43204d59e8c6bb114f9924921aa98a87adca8eeb70ef65a7b2747278d83a3038c53902cfa3c7bc0e83bad97aa5daf97dcb558883801b6e4aa168af475bffed4a82fa5b88750abfa26651d5954fdefa467890899e6223b9d8c5140ae40ce20653c41096f91d1fcf366ea1a67692d46f0130f8185a1c8336d64618a50640b1ee7d266a5ed676a65feb6a063a7ef747dd21d4e06fe4ec052131cec12a64869544880675af004663c0a8c67365b3e902fdef0123da8e08e295001b9f9ea780e21fde18de3ed0408dd257df7bb43ce4867d0239b49dc01990c06ced8273b67bbe4c21b4e46e47cba8141f5112c589ee81ed3c8a08deaa858baa6a51a9446d04bbdddf75da66be3e542726d4eea0e7cc7eb747df7da298adb879885abf1239677c11205886692a5a0415e8a083064341cbbbe3b1c74fa18612b362a118ab67f3ebf05f8ab251881dafe0d57ab69f94bc0354b728b782a16746bff708baed7953f27e9785e678ac44c4ab6fa98e043068bb75621b264dca786adb41a1b568bae6fd7f855280e66c145af268e37a5c596070b90908596e02f25b760ebf8e7fd2a871db138ee48a334da4af3501992508275fb3cb5e28be8e3d6e149d3de4ecda47eef3b6c9937218b3ef4bc70e4363f4829a4070a07cc98c8a6ac169e614df0cda8d0149462b14933c9f0240ad83c0162c780bc569d0401e119316d21813f1d3933db1abc35e72c428f6e35892d729b988e97eb6d636c1b455647d1a8ffa4e1b6288b21e90d070e4ed52f428370b16d050000",
    ],
    [
      "ETag",
      "d4DQ3MugCnuJrgGgXGTjeQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000000000002ffedd3cb7282300040d17fc95a1d4540d35d005142510aa2d54d26d2204f0d1079d8e9bf97e96fd4b3bfcbfb0d6818b2ba26e29eb11b78033d95e0249cd87ca9196db286ef3333d25457f14e89acc6a8a741f9f017754ba2836c7e960d6a4f120c2edb7d4ff166e3435ff0d3a271f5b17724fadc92dda97d7c6ebb3b2952859f2dfdaab830d8c56a2b4ad5bb9dd3a491be0c275ba2fd11496b1c382cc57c173adaa128f44b648abc9287503633bbc4e9c3dd1bb193ad4430fd88fa7194e327bd5e5021fc29eaba249f49746b8d0de45f95837b4e6382ad3e5b91b98e33c19586e9939797ff0b8c00eb7852b19a24c3ed7305c211f85b9f889eb3e17f8dd18a55e0e71721cbefa419040000",
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
      "Thu, 02 Sep 2021 19:11:06 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-83-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "535d4fa34014fd2b64f6d5b6b454a04d9ab5565c9bb454816acc664386e182a394416670634cfffb5e06eb6a4cf48999b9e7dc73ee072fe4819729999284e78f0dd4cf3fee45428e08289ae36b149e469bcbb9599fe6c7a16c4ec7b757f56d3e9b2182b72c497755013d299a9a819c6ec37e5e8ba6a2b5103d4cd473added0b64cdb9c389391e558c89350642b5e3e20fb4ea94a4e078383763f17222f80565cf699d8bdbd0f9e4683aa16f7c0941c7c941ca08a1c7c2dfab3108c2a2ecad93644038d843a861de5055af8cf4c93938fa9fb9ceefa39829f3803ca98684ad5dac2144c9419cf9b5a6725d317a26dbe3b90d05b798bc860a26876655cd21d1c1929553456cf1518e7c1666d2cfdf34db09e47cb8d1f878b0b6f3def2f36abedda0f8d9b0b2ff00c45930234d7981927fae6e305f553908a975a3d6a9f5be5d7062d3f8fa525a0b4842e183ba64d87ae3949b2c461996b1d27990949e226ce31b512934dc6304e13a0c8d3a29a454b51426a3b8e4b87b13d1a413ca694c6aeeb0e6307ec2c4bc11a27e698ec8fc8df9a2b38e3b21292771d2237c132f2e228d8fa8b79e4e91232da14eaac33d616f0dea3c20211f4454dfb36ca052ab5ed5efa9117cc17d1f2daeb26bc829cb2e7f011679cd14202a2698dcd5350af458a0d23fe7ced9d21584fecf2109464fafb85b43d6f5dbc6bf91b3dc201b67695fe92300a96fe2f6de780b8a645a3214fdd815468f90e6b43d7fb3f88c425edb290abad17dc92ee29800c6a28d9f7d344b00e7cfbaf1d161fb1b8fa282315de7177986c45580ddd0e715dee2bdbb56da4130daed5a798e55a87aeb539da8cb08352bd56d42d3e16da8935f20d84411cbfafbbb5ff074f83262778040000",
    ],
    [
      "ETag",
      "TSBTOPA0rBg5SsuB4YQrYg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-83-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "f85a2208166cc203282811904b49bc8490a59d42b1edd4ddad8884ffee6c45346aa22fedccf49bed39a7ddc26398f8e0c03c5c3c652837470bd443538c506591567c4b29510816a0160b26afd3ea5d507a89878a4af7c77efb75738b725daf33a1bc25c6029c2d042146be02e7610b898891d73c8ab23899e59d057a939ae1d81d75fa97dcc7e49bbe3fe9761bcd6e0b76d661d1175acc72fe1f6bd39d052b9a8f3040898987464b2a69859eee189b4ac46984054599f450410ee70f1692b25448a2024f0ab572a164978b76f1ac7a7652ae96198cc8133aa484d9c998f581262da211add925d80cc8bc64c3417e7de671e8e7464cd9e9bb7625d7f71560694118e1ec6f90f52e057f860f6c1fc1774ec49425fa40b5bb378ddf8ee34c3f8fba68b8ad1f84d29cd401713bbdd6d86df406869beebd37371ad5401207a9d064582a566aa755bbf81eeb3999a8f93d8e96195ae009fe3bae420d4e202285bb37ab99f8d27b020000",
    ],
    [
      "ETag",
      "Kp7Yf1xmQso1Z/dFzyXerw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-84-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "2b642f269af4035a0ab489f16ae53c72957a946acce5d22eb0e05a60915d348de97fbf61b16acf3b4d486077de9bf766679627b4a679844628a0c97d45cacd973b16a016220227b0bba631d5c2d373f5314f4fad8b3833f445eff1f81810b466719c15296973569521e1a3c5bc9394ac2a70c9581b12b52dbdad197dd55087e6b0d737fbc0e3248da7345f03fb5688828fbadd9d7627612c49092e28ef842c7bd9ef3ef4ba45c9ee482878775fb20b2abcfbb1e849ca422c28cb8f1773305071522e4986690a165e9951f0753f7587e2ac9300f88186048721ab7251db821421cb639a54a5cc8a464f48da7cf381e6f6d49ef8ca64b670fdc315ce6af2ea48c15cd92d5aca0a6a8a694a96345ad591e5b2582bdfbcd90544c0c12de684af94ebefb6672bca74766d7b872f01c835757ed8ca893276cf94fd548eab2c5cd79efbcae1c99172eecd1697cae9cd1e066a880817349715f8384849edfef9909df7adad09588070135c9aaa81354b1d06716086b1d51f04b14a82c00acc01ee076a38d4891e0504034fd4d9250be72c37aca1669a96a5e90335d27403d071bf67a83d039a150fac70308cb4481fa26d0b3d96549033ca0bc66973d2e8da737c7be97b0b7732f66d59468cab549c35e6ea22defa145024803ea86b5b472903a5ba6d8eebdbde78e23b577633295392e07033bf87598971ca09a0718933224879c122383474399b3bbe3373c75360c8f65fee101c8d7e3dbd12fc4d214f59c8379afb9ee39e4b033bc4154e2b0979683ed0012e8a03b4ddb6fe9f66ec79e31b90c66589377fc5a01c43afe9ff909078b96a6cee243554abed56bdbd9581b6bfb7f0b410dcb3460b",
      "fd5cd8de0d6ab63c129392e4e1e7c3046019f8f477b1bbbb8085db0b325cc01a4637e4b548589266846926cd376ccb30f59efcd9085c8a77b18165ee7a55e7a833928ce4e2b9a2e6eeca63ab43157f01411026cf956ddbfe01b817f2203b050000",
    ],
    [
      "ETag",
      "kifi1cBG0wnlB8Mfm64U2w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-84-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d904f6fc2300cc5bf8b776dc59f4e3090388c0931b4c2b66e9c2684426aba421b67490aaa10df1da74c68c75d12fbf9e7e8bd9c609fab1486b0c9b39f0a4d7d97a17bf74582b62a9ce54b93b20801a0131993c961ba6cc5594bcd49bfcccd40d6ad57731c8d98b0f21b4b01c3136c732c520bc3af13285122af89922ae51872b5f6fd6cf139994e12164a4abdb058c6f1e3389ec039b82dadd77affaf95d539801d6d12dca24125d17bd0867628ddccc7b3a2d40586962a23d142033783cc50a585210a59091feec34e2f6af7da83fea01bf523060b92c2e5a4985d7eb03770e44491d091d3419701d3941c74db9c0796a326c3a101bcb5bfb3ee6dd6f1b3d5ef83e3daa17d33c4ee2c7a63edabc927f2c61d0772a6c200a4e03f7eceddb53f5f00094d4445c0010000",
    ],
    [
      "ETag",
      "RvGU/Lg/nMopKMr9cy/Orw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00000002ffedd34b7282300000d0bb64ad0e03044977d228600411f15337998851217e2048103abd7b9d5ea3be3bbc6fc0d29457157ddc05bf810fd0321d0dd201296c0737d91aaaa56cd950ecfb313dcf9f9f2ab26dad744fd3f82e556785fde971e45ec2adebcf37b6ecec532c82dd70e94965e4c40854196f4697bec4893269512d50698e5b9e10fd4acb72eb528be887d293ab086f51aeb4c9aa6386584e2c369e055d7280acce77b46ef7b458437cceb45c3ae29a592a6ce1148bfbd36d5649fd3543641636a6b08e7ee371e81b176646fae3b620ce28d899d6f0cc030231c29a37787bfbbf400ff06791495ed1ecb5dd8008f5c05f7dfa680bfefaef7026b9043fbf56ff1e0e19040000",
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
      "Thu, 02 Sep 2021 19:11:07 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-85-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85536b6fda3014fd2b91f7b540203c02125a11a42b12843509ada6698a6c7393ba0d711a3b4ca8e2bfefc6295dab4aeda7d8bee7dc73ee23cfe451e43b32214ca44f1594c76f0f92910b029aa6f8eaedba435b2e405ef93707ef3abfe5c998df4ca78810354bd17d91414bc9aae4a026dbb09d96b22a6829650b13b5dc41ab3b74eca13d1e8d7bcec8419e822c5989fc11d9f75a176ad2e99cb5dba9946906b410aacde5fef5bd73e8758a523e00d7aaf35eb2832aaaf3b9e8f74c72aa85cca7db100d540aca18f6546468e13f73c72edfa76e0bba6fa7083e080e947359e5bab68529b8cc139156a5c94a26cfc4d87c7320a1b7f2e691c56556edf338a77bb8b07654d3581f0bb0ae82cdda5afa579b603d8b961b3f0ee7d7de7ad69e6f56dbb51f5a77d75ee0599ab20c0cd79a5a97e6e6e305f577a0b4c88d7a543fd7ca2f0d5a7e1c4b4d4069054d301ed943da75ed314bd88827ae3360890d8cb96c34a00eb3f9b80ffd1d038a3c236a58349739a30ec6062ca68c43dc8784c62ce98fe304dc2e40af37723825a70bf2b7141a1642155289a643e42e58465e1c055b7f3e8b3c534242ab4c2f1a6375016f3d6a2c10419fd474aaa342a252ddeea51f79c16c1e2d6fbd66c22b48293f864f38e384660a104d4b6c9e86722d77d830e2cfd6de02c166623fcf414526bf9f49ddf3dac59b96bfd2231c606d579b2f09a360e9ff3076ce885b9a550672680ea440cbf7581bba3efd41242e699385dc6cbde017699e0248a0849c7f3d4d049bc097ffda79f1118bab8f324ae31d7787ab5a8497d0ec9030e5beb0dda16b0ffac4804bfd21d6759d73d7ea1c7546d843ae5f2a6a161f0b6dc42af50ac2208edf37dd3afd03dd58df0d78040000",
    ],
    [
      "ETag",
      "Ed160oDeoFNQvEHnVcf9cQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-85-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "92414fc2401085ffcb782d09081468c2a1286a0d2094e2c510b2b4d352d876ebee564308ffddd98a68d4442fedccf49bed7baf3dc02ecd2370609d26cf25cafd45827a660a1f55c9b5a25b21728560016a9610b9f076b2c192469b4b54e877068fb3e9fd6bbf4f840a379831700e10a7c82305ced301729621ad85829759beaa3a0bf4be30c379e07b935bea3311997eb2188ddcc1680847ebbc1831cd5615ff8fb5e5d182ad58fb18a3c43c44a3a590628ba1f68c4dc5b282634d895286a8a082ab07891465c1a410359ad4baed5ac36ed6ed7aafd3bb6c769a047211329d8adc2430277da08566dc17afe4126c02645592e1b8babed0388d2a23a6f42681ddaaf47d05485a9c725cfd0d92de0da3cff0819d22f8ceb14c94b93e5337a307f7b7e328d3cfa3aedd60f883509a923a2381371ece03773c35dcf2e47db0d7a8a65250900a4d868d7aabdbeed8f5f758af84899adee36859a20521a3bfe32ed5e0c48c2b3cbe014deaf6c47b020000",
    ],
    [
      "ETag",
      "UIkr1ag15lreseR7BVQPJw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-86-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85540d6f9b3010fd2bc853a556ca07e48390485597a56c434b4907a45d354d890143dd02a6d864cbaafcf71da6b4cdbab51212d8f7debd77be33f7e89666219a209fc6772529b6ef6e988f5a88081cc3ee269ee160f38b26f8db6fcddda8ddfe85b18d8f8f01412b16c7699e9036676511103e59ba9db860658e0bc6da90a86de86d4defabba3a1e8d7bfd511f789c24d19c66b7c0be1622e7936eb7d1eec48cc509c139e59d80a58ffbdd4daf9b17ec86048277f725bba0c2bbaf8b9e242cc082b2ec78e9828192936245524c13b0f0c40cfdf7fba93b14a79d18c01b1a101c04accc44650b52042c8b685c16322b9adc2369f3d90772cdb939f394d962697b876b9c56e4f59182b9d22c5aca1a6a8a684256345c5791d52abf553e3a8b338880836bcc095f2b979f4dc75494f9e2d2740e1f03906b6e7d319513656a9f2afba92c5b59dab6e97acae1c991f2c9592ccf950f577b18a821245cd04c56e0613f2195fb8743b65eb6b6226001c27570355275ac19ead88ffc511019fda11fa9c4f70d7f34c47d5f0dc60332087d828127aaec92853396e9c6581b8d0c431b0cd5501be8808efa3d5dede9d0ac686804c371a8858331dab5d0cf820a724a79ce38ad4f1a5d3a9667ae3c6769cfa69e29cb88709988d3da5c55c4739f028a04d02b75edaa2865a054b5cdb23dd399ce3cebc2ac27654e621c6cdd3b989508279c001a1738258214672c844343e70bd7f2ac853d9d0343b6ffbc417034f97eff44f0b6b93c6521dfc8f51ccbfe240d34880b9c9412b2a93fd001cef303b4dbb5fe9f66ea38d32b90c64581b77fc5a01c7d50d1ff2121f17255db6c243554a935abdede4a47bb1f3b785a08ee59ad85be2e4de70ad55b0e894841b2e0ed6102b00cbcf9bb68ee2e60e1f6820c17b086d10d78251214a41e619a4af335dbd0c76a4f43125c88173118dca657558e2a234949261e2aaaefae3cb62a54f247100461f26cd9b6dd1f69b8d2aa3b050000",
    ],
    [
      "ETag",
      "vgCacvxilaXz1Sv0/3V8yg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-86-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d90414fc2401085ffcb786d23d00484840390aa44205841630c214b99d642db5977a71842f8efce16433c7ad99d79f3cde6bd3dc13e2bb7d0834d967e55688e3729f2b32b22b455ce562e4da545f00059a5423ebd4dd5ab9a9bdbfb854a46ef693799ea41daef0b61e34f2c14f44e9064986f2df43e4e50aa02654d1554952c101fb5ebc7b345f810462214b475c26c39990c869310cede7569bdd6fb7fadacce1eec6813618206cb189d076d6887318f5d3cab0a9da36fa932315aa8e17a901aaab43244be28fe5ddb6fb68346bbd1ed745b41271030a7587146a5b0cb17f1064cacf288be251db4043075294193fa3c881cd4190e35e0acfd9db5aeb3a69bad7e1f1c1e19eddc90b8b3e88c352e2647e48cb3046253a107b1923f7eccf8d29f7f005191a53fc0010000",
    ],
    [
      "ETag",
      "KWMaVaPr/FTafCYg9fMpAg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000d0bb64ad8e0a28742710464c28164b6bb2c9400c4a1948f82860a777afd36bd47787f70d12ce45dbb24e16a2022f604c96d68ccf90326db73f8f4e763164611bdbfb76f34eaa755dad10ec24d9df96b4bff93c38444e8d6bccd142c5490853a899e52e66b42a4d98dc03decb233a87b4743255976d951332e4d0a776da1de6d498e2e9bedf638b69ee5c7a300f4b922aa4d394baa7f88bb8e98528fc51eceed3cef67d7d9106d70c318ef9294374bd46b1fdcaabeba9269e8b023970710ce13c08565e84cde89346d78b1ce0db66a735856e306babcf9e9efe2f3001625079235a963fb66b86654dc05f7dd68d4a3cfedb226944037e7e0195c3fd6519040000",
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
      "Thu, 02 Sep 2021 19:11:09 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-87-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6f9b3014fd2bc8fbb8262181f08814ad28a52b534256425a4dd3848c63a85bc0149b765595ffbe8b69ba5495da4fd8bee7dc73ee836774c7aa1d9aa194e5f72d6d9ebedcf2149d202a710eaf13ddb01f6516de5e6cafbccbaf8fc6e58fe55f6f3e0704eb58029775410782b70da162b6dd0cf386b7356e381f40a281630fc696a15bba6bbb13c336802768912d597507ec1b296b311b8d0edac39cf3bca0b866624878f9fa3e7a988cea86df5222c5e8ade40854c4e863d16f052758325ecdb71b30d00ada24b4c4ac000bff99bbf4f46dea21c3e53007f003231413c2db4a76b62005e155c6f2b65159d1ec19299b4707b4f197fe22d6082fdab24a2a5cd2136d87254ee4534db5f368bdd282f07c1dadbc385887c96671e1afbce162bddcaec28d767de147be26715a50c5d5e6daa9ba857001fd1d1592554a3dee9e3be5970605efc7d211405ad03e98d8ba85c78eeea6596a93cc31a669a6d33475527b8a8d5427ae49cd5d4a31f094a862e18a578e691ae3896e26e3d47412d34d27893bb5dcc4362ccbd1adf194d82eda9fa0c786497ac644cd05eb3b84aea320f69338da860b2ff65509196e0b79d61beb0a38f628a140007d50d3be8b320e4a5dbb8330f6236f1107577e3fe125cd3179dadcc38c335c080a68dc40f3246d567c070d43a1b7f2cf00ac26f6f3101468f6fb19753def5c1cb5fc951ec3003bbb527dd1268e82f0bbb273405ce1a2559087fe806ab07c03b581ebfd1f40c292f659d0e5d68f7ea1fe29a2196d68453e9f268055e0d37fedb0f88085d5071921e10ebb434427421adaef1053e5beb01dcbb5751b297023dfc51ccb3874adcbd165a425ade44b45fde243a1bd582b5e411084f187aa5bfb7f054b055278040000",
    ],
    [
      "ETag",
      "2037wtfNjHUVAQ+w3QJLxA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-87-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "7c2c4d5a5bc192f8808ada586b4b694c34a65961a854607077516bd37f77166b356aa22f30339c59eebdb08287b488c185bb74fe58a15ceecc518f4d11a0aa32adf85652a1102c402de64cc6af9e9f5f35ae75fb455d3b3248ce77a9313e38604245f7980b705790a498c50adc9b151422475e8b28abf262567716e86569869330e80f4fb9cf2936fd703a187887031fd6d67631165acc6afe1f6bb76b0b1674176082128b088d9652d20223dd373695c8cb0c9b8a2a19a1821aae1fcc2555a590444d9e34f79d66dbeeb4ec56cfe9ed769c0e83194542a754303b9db03ed0a44516d033bb049b0159976c38a9af4f3c4ee3da8829fbc3d0eed6fabe022c2d49339cfd0db2de7bc19fe103db44f09d13395585de5227834befb7e338d3cfa38ebdd0ff4128cd496d91b07fe14f42ef6264b8db8df7c3a5463592c4412a3419b65bddfd3dc76ebdc77a44266a7e8fab6585164482ff8eb354839b884ce1fa0d98ea24fc7b020000",
    ],
    [
      "ETag",
      "dzAEmW+Zt1xsZ7rRfK2o+Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-88-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffd553616fda3010fd2b96f7a59580b474a294a9ea689b76d120d02450a1aa029338a94b1207dbe9842afefbce0e94b16edde74908b0efbd7befce77af78c1f20877f09c25cb928ad5a7673ec7354c1549e076c445be8a2fe7967713a4feb827c78bc9d18ff3734030cd92242b525a97bc1421959d91df48042f0b2238af43a27abb5d3f6e9d1cb58ece4ecf9a27a727c093348d7b2c5f00fb49a942762c6babdd48384f524a0a261b21cfdeeead97a65508fe4c4325ad7d490b54a4f5b1e845ca43a218cfcf473e18282515539a119682851d339a7fdd4fdd60246b24007e61212561c8cb5c695b9022e479cc925298acb8f38a8dcd5ffe60dfeed95701ba1a8cdce06046324d9e1d2222d1f6504333a82966299db268a623d369b14037dea00f1170f04424953374ffcdf66c847a837bdb3b9849051e2151cff96ea30bd475afd17e1ec74523d7b5fd001d5c1ca25b6f301aa2cbc91e060a88684cca545d1305224a1b8faabf8e7e5545a502d0a6e5cefb87c66b1d655c30a58b75dcc0f6ba578133b6abfef66842c295bf840ec7249514d044908c2a2afa3ca240190e7c2770066eb7070cd3b4e1162171e7e17547085605d50695f9c581d387e2bafd215eaf6b7f87753daf3b81d44408b2fa2d06765b9f357dc71e93b434108337a7cac64b15c0c758ab6d4fcdbd530baf1fd7f0a96198be4a0bdf8d6c6f82ab2b8fc654d03c34021f34d5804de09f4bb49d68bda2be9681b9504c2a164a2d120a6ac201cb8cf98add3e85ef363660a1dec7a029b0f879f4c7c846a334f9a9105c7854c208e923a849e385e5d01316dd9925d873b9dc5c65544a92e8f42e471951e113cb13245992436e4151cc058acb3cd4b46ae6cd15114999d15c21fd84b283dea6a081fcb228b85034da650140b52e7ee039eeede197cdf17212d83e2ca1420fc79d76f35117654aa9defaff2de3b17a1cede77ae0da30db3f015fc477bed8050000",
    ],
    [
      "ETag",
      "UornyfBb/RFTlSVLsVkY0w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "edd34b7282300000d0bb642d0c9f8ad05d404144ec902a881b874fa84408f20dd0e9ddebf41af5dde17d83284970db5ebbea8e2978075324697cc23b0f555f3362cb92618ee69dd481579f8fc75952212c6c26112b5ed39d458aa5997a89963aa786414ecb4323dc0d64142a319bb335567c3f2e83d58529c9090942f535a45a1a425b8137ae9d5cb7a7724eb8cf4e34635ab41be2caf1add2b729db19335b39b6895070b09c9a2ae8622c43df933d7832dc6d4c9d095b61948c2e659b14051f4151f64cbd64f1b954cf62e4edfb6e18e1be1624753ea01ebe9521e9c69e7f79f9bfc002e0f19137b8bde6cfedf252d316e0affeb59b1ef8f95fc751831bf0f30b6e64c76e19040000",
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
      "Thu, 02 Sep 2021 19:11:10 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-89-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d6fda3014fd2b91f75a20104a08125a11a42b13842d09add6698a1c7393ba0b711a3b9daa8affbe6ba7a07693daa7d8bee7dc73ee479ec96f5eeec884a43c7f68a07efa742f52724640d11c5ff3c536b46f61fb75b88952500ebbf5ce83d9748a08ae5992eeab023a5234350339d946ddbc164d456b213a98a833f63afd91638f6ccff5068eeb204f4291ad78f91bd9774a5572d2eb1db5bbb9107901b4e2b2cbc4fef4de7b1cf4aa5adc0353b2f756b2872ab2f7bee8e74230aab828a7db080d3412ea04f69417bac01373975ebc4ddde574dfcd11fcc81950c644532a6d0b533051663c6f6a93954c9e89b1f9ea40227fe5cf638b89a2d9974949f77066eda8a2897aaac0ba0c376b6b195c6ec2f52c5e6e82249a5ff9eb5977be596dd74164dd5cf9a16f299a1660b8d6d4ba30b7002fa8bf03a97869d463fdac955f1ab4fc7f2c9a80d212da60e2da23da1fdb5e9aa52ecbc6ce799ad990a6e3d43da74e6a336f08c35d0a147946d4b068294a673002cfcddc0498bb4b866eda4fc6439a2563ccd4b76d9a511890c319f95373050b2e2b2179db2172132e633f89c36d309fc5be2921a34da116ad315dc06b8f0a0b44d03b351d74940b54d2ed5e06b11fcee6f1f2da6f27bc829cb2a7e801679cd14202a2698dcd5350afc50e1b4682d9da5f20d84cecdb3128c9e4e733d13dd72e5eb5fc448f7180daae325f12c5e132f862ec1c11d7b4680ce4b13d900a2ddf616de8faf00b91b8a46d16f27deb873f48fb1442063594ece36922d8043efcd78e8b8f585c7d94910aefb83b4c6a115643bb43dc94fbc21ebbb6371c1203aed5bfb1beed39c7aee91c3a23eca1542f15b58b8f85b6628d3c813088e30f4cb70e7f010d09005778040000",
    ],
    [
      "ETag",
      "gDUR0ZeUJ4OSbet3cZ95NA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-89-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d925f53825010c5bfcbf6184e9886c28c0f5a66cea819e253e338575810032ede3f35e6f8dddb4b664d35532fb0bbfcf672ce813d3ca545041eacd264ab51ecce12540fa6f051ea4c49ba95bc900816a06209916aa06d77eeeafaeab5dedaea38383fbfb0934e870819ae3167e0ed214e318b24788f7b28588eb416f24ce7c5b2ea2c50bbd20c67813f9c0ca8cf7964fac97c34eaf6467d3858a7c58829b6acf87fac2d0e166cf8cac7180516211a2da5e01b0cd5d0d8942c2f33ac49ae4588122ab87a9008ae4b2638afd1a4d6766b75a7613bb6db722f1bad0681190f994a7941ec7c46fa4071c5329fbf904b700810554986e3eafa4ce334aa8c987238099c66a5ef2b40d2e234c3e5df20e95d33fa0c1fd83182ef1ccbb92ed489ba1ddd777f3b8e32fd3ceaa61bf47f105251522724188efbb3a03b9e1a6e71f4dedb299453c129488926c3badd6c5fb51cfb3dd66b6ea2a6f7784a68b42064f477dca50abc9865120f6fa6b2d8fe7b020000",
    ],
    [
      "ETag",
      "tGu09U9u1bz17qufT++/0g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-90-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ffd553ef4fdb3010fd572cef0b48a5bf80423b2156201b616d529214d621d49ac40d86244e6da75a85fabfefecb4741d1bfb3ca95273bef7eebd3b9f5ff033cb22dcc10f2c9e15542c3e3cf1075cc15491184e336b763577bf7ffbc1843f6cb2c3abcbbc7d767d720208a65992a47942f7242f44486567e85763c18b9c08cef7a0d05ebbbed768edd75bf5f651bbb97fb40f3c4993698f65cfc07e542a979d5a6dad5d8d398f134a7226ab214f5fcf6bf3662d17fc89864ad6b6256ba0226bef8b9e263c248af1ec64e88381425231a629610958d830a3874fdba5ab8ca4d518c07316521286bcc894b60525429e4d595c085315775eb0b1f9cb07f6ad9e751ea07377e8043b13926af264171189d641054da0a7294be89845139d198ff367f4d973fb9001078f44523941b797966721d4736f2d6f6722157884423dfbab854e51d7b940db756c070d1dc7f203b473ba8bbe78ee7080ce465b186820a2535224ea82281051da78547edafa5615950a40ab91db6f2f1a2f759671c1946ed67602cbeb9e07f68d55ceb74763122efc194c784a1249014d0449a9a2a2cf230a9481ebdb81ed3add1e30ccd0066b84c49dbb970d2158e4541b54e61f07761f9aebf60778b9acfc1dd6f5bcee084a1321c8e2b71cd86d1d68fa867d4392c2400cde44a58d7999c00dacd5d651732b6ae1e5fd127e150cdb576ae1eba1e58d7079e4d12915340b8dc03b43356093f8e7235a6f346061a74106f64231a95828b54828a849072c35e64bf6f151e3f8e0101bb0506f72ed465d3ffc2cfa6366a55198fa54082e3c2a618574086ad2786119cc8445d7e6116cb99cad8e522a2589757987a394a8f0916531922ccea0b6a068ca059a1659a869e5ce9b2322e222a59942fa0a6507bd6e4115f9459e73a168b4a90280f2b9f881673b5f763faec2b35160f9f00815ba6b748e9bf7ba29d34a79d7ff6f1bf7e5e5683f17ae63c16eff043af06653d8050000",
    ],
    [
      "ETag",
      "nEqJvOZXxirSU2i5JHp9BQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00d0bb64ad0e0854d31da0389100952914d864624821e087ff679cdebd4eaf51df1dde0350c678db92ee5ef21b7807335dc3155bd9d5d6d88d79e1a9161cfc60eef11e8dfa98295b9ddcee1a4e3f0634daae6ec1c309c1d823279bf44c840691c7e45c041d329dfa8c37ae5d97a833790c070fabee127ed7d047979487d4d7a23d353bec068d634dd2959692e815e17d4591b3a94848c33af19bbc177dfec64c26f79699caf155a9d2e918ac4901f3513a08e65cf59c3859d32aeaee724b54cd3e89ae2c330f575959cc71211df73435b3d45da24fbc7a79f9bfc002f0a9120d6f89786e57340817e0af3ee9e68a3fff1b9c36bc013fbfcf38040919040000",
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
      "Thu, 02 Sep 2021 19:11:12 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-91-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "71b4cd03daa65235aa1246459b8e34854dd314d9ee4d30a471881da60af5bfefc6a10c84049f62fb9e73cfb98f3c917b516cc88830913dd450edbedc49468e08689ae1ebe4ca53375f393db973dcdde5b5ff93427d998dc788100d4bd16d994347c9bae2a046eb5537ab645dd24aca0e26eaf84ec7e97b76dff607beeb0d3ce429c8d3b928ee917dab75a946bdde41bb9b4999e5404ba1ba5c6e5fde7b8f6eaface41d70ad7a6f257ba8a27a1f8b7ecb25a75ac862bc5ea1815a4195c0968a1c2dfc676ed8e9dbd45d41b7dd0cc18f8203e55cd6856e6c610a2e8b54647565b292d11331365f1dc82a9807d3d8e232afb74552d02d1c591baa69a2772558e7d17261cdc2f365b498c4b36598aca617c162d29d2ee7eb45b8b26e2e8228b034653918ae35b64ecd2dc40bea6f40695118f5b8796e949f1b347b3f968680d20ada6032b0fbd419da3e4bd980a743ef84a5363036648313ea319bfbc770bc61409167440d8b16b270f8d0731c0f120a3e4f8e87039ab03ee0c967acefbabe3fb43db23f227f2ba1e14ca8522ad17688dc44b33848e2681d4e2771604a48699debb3d65853c06b8f1a0b44d00735ed9ba890a8d4b47b16c6413499c6b3eba09df01c32ca77ab079c714a730588a615364f43b5901b6c1809278be00cc166623f0e414546bf9f48d3f3c6c5ab96bfd0631c6063579b2f59c5d12cfc6eec1c10d734af0de4b13d90122ddf626de87aff0791b8a46d1672b50ea25fa47d8a20850a0afef934116c029ffe6b87c5472cae3eca288d77dc1dae1a11",
      "5e41bb43c294fbcc1e0e5cd7ee1303aef4bb98e77987ae35399a8cb085423f57d42e3e16da8ad5ea0584411c7f68bab5ff07fa921df578040000",
    ],
    [
      "ETag",
      "AQ3sW+ca5j12yKV9XaeuKg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-91-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d92dd6e82401085df657a8b89548b95c40bfc696b8bd6225e348d312b0c88024b77178d31be7b67a9b54ddba4bd8199e19be59c0307d8247908362c93f8b544b1bf88513de9c24359a64ad2ade0b9443000158b897c0ce576134fe2e5e079663edcf782fec692bb4e870819ac3063601f204a300d25d82f07c85986b416f0b4ccf245d519a0f6851e4e7d6f38bea53ee3a1eec733d775baee008ec67931648a2d2afe1f6bf3a3016bbef430428179805a4b21f81a0335d43625cb8a146b9297224009155c3d88052f0b2638afd1a4d6366ba6d5a85bf576ab7dd96835084c79c054c273626753d2078a2b967a7c472ec122405425198eaaeb96c6495819d1e570ec5bcd4adf5780a445498a8bbf41d2bb62f4193eb05304df3996f1325767eac67d747e3b8e32fd3caaeff8831f845494d419f187a3c1d4774613cdcd4fdebb7b857222380529516768d69bd7572dabfe1e6b8feba8e93db612251a1030fa3bee120576c45289c737649a65337b020000",
    ],
    [
      "ETag",
      "OdsvkgPgbEYU1KJCcDk6sw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-92-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "962704686d435b68d74a8815085b4469ba340575136adcc40d86242eb653ad43fdee3b3b04e860eccf4991e2f3bdbbf7ee47f280ef5816e12e9eb1f83ea762f5e196cf7005534562b8fd98fa563faf67c35ffef7c679e7a7672fdd83f8f010104c4749922e125a953c172195ddf1a8160b9e2f88e0bc0a89aa9d46b5de6aeeb5f63aed4ea3d96e429ca4c9bccfb23b88be516a21bb965572d762cee384920593b590a74ff7d6b2612d04bfa5a192d626a5052cd27a9ff428e121518c6787e31108c82515539a12968084e7c868f67933758d91b4160378c9424ac290e799d2b22045c8b3398b7361b2e2ee0336325f1cf0c8eedb273e3a71c7037f2720a90e0e761191a8342a28809ae62ca1531605da339d2eeed099e75e800714dc10496580aebeda9e8d50dfbdb2bd1799faceb98d8e506f708a36133903341e0cec918f768e76d117cf1d0fd1f16403031544744ef2449d12052c4a2b8f8aa3a3c7aaa854007aecb9f37ad278adbd8c0ba674b5cec0b7bdde89ef5cda4583fb3426e16a740f2d9e93445240134152aaa8b8e0118590a13b727cc71df4fa1061ba362c1112777f3c3c07f8ab05d5029579e3b3bedbf35bfb464109b924496e30cbe280b7eab583fd2dbc5e57fe9ea8e779bd09901321c8ea0f1f14a429dee430786315424bce3ad66ca5d5d8b05a787dbd86a78261410b2efc6d6c7b135c5c79744e05cd4243f04edb0dd838fef99d954b0f58587ba0910a6ca95828354928a871fb2c35e28be84fed66b3d3c6062cd42bdf7e634fff1bb2e84dcf23476ef25321b8f0a88425d326b049a38565d013f87754704aa524",
      "b14e33cea01249c92ca1c8ac027aea3a0a02c432a4c782027f32b4a78ff387efe7984428e2b98e327deea262eca5b55d98db5a989153ccebff4ab92e9aa4b94edd810d3bf61bfe4b498b83050000",
    ],
    [
      "ETag",
      "+mT/Lu1nPzTZ2K9xREvO5g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00000002ffedd34b7282300000d0bb64ad4e0181d09d10b08c147fa0e02613632c09ca2f8842a777afd36bd47787f70d08a54c4adc96392bc03be8896a4de86451411bdd45b1f09aac34fa1aa2ebdb567825d287188a2345d330312d77b8453951dad305a551a51a727cf1d7b6d17d0545913bac98f3d30ee7595679dea641e7c72abd59013f9061b6114446a2f43f062d81666668e139849fb29acf225cac08af6bb5f3d67ae2f3647f5fce1c4c958cc5b4de5c0213690a7684139e250f44307df84722dcae6b6197eff4bd9baecb1ac657952e95b474f55e1fc747ebe02d5a733fed272f2fff171801f6a878c324e6cfed9a6e5923f0571fb77dc59eff6d461ad6809f5fc71fade319040000",
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
      "Thu, 02 Sep 2021 19:11:13 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-93-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85535d6f9b3014fd2bc87b6d0209698048d11a11ba464ac84648ab6d9a90712ed429c1149b4e5595ffbe8b69ba5695da17c0bee7dc73ee074fe48e973b322129cfef1ba81fbfec454ace08289ae3adeff8a6126bf7d7bef133e77a3e96b3603f9b4e11c15b96a487aa809e144dcd404eb69b7e5e8ba6a2b5103d4cd4f3ecde606c5b63cb73bca1edd8c89350644b5ede21fb56a94a4e4cf3a4ddcf85c80ba015977d260e2ff7e6c3d0ac6ab107a6a4f956d24415697e2cfab5108c2a2ecae97683061a09750207ca0bb4f09fb94b2fdea6ee737ae8e7087ee00c2863a229556b0b533051663c6f6a9d954c9e88b6f9ea836c8265e0c7061345732893921ee0ccd8514513f558817119ad57c622bc5c47ab59bc5887c9c6bf0a56b3bebf5e6e57e1c6b8b90aa2c050342d40738da971a14f211e507f0752f152abc7ed75abfcdca0c5fbb1b4049496d00513c71ad3816b7969963a2c73edf334b3204dddd439a7766a316f04a35d0a14795a54b368294aea38e3738051e2d8d44d4643c749bcd190e263e0ed2cd7b2689691e319f95b7305732e2b2179d72172132de22089a36de8cfe2409790d1a650f3ce585bc06b8f0a0b44d007351ddb2817a8d4b67b11c64134f3e3c575d04d780939658f9b7b9c71460b0988a635364f41bd123b6c180967ab608e603db1efa7a02493df4fa4ed79ebe255cb5fe8310eb0b5abf49b6ce268117ed3764e886b5a341af2d07d900a2ddf626de8faf80791b8a45d16f2631b443f49771541063594ecf3692258073efdd74e8b8f585c7d94910acfb83b4cb622ac866e87b82ef799ed3ab6d3fda98ad6ea5dccb306a7aeb539da8c7080523d57d42d3e16da8935f20584411c7fa8bb75fc072a3323d778040000",
    ],
    [
      "ETag",
      "C7C/toO8ZjuCf7VD6sAEjA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-93-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "dd4ec2401085df65bd6d137e8b34e102b40a0450a078a1216469a7a5d8eed4ddad4a08efee6c45346aa237db99e937d333a7bb678f890899cbd649fc5480dc9dc5a0a72698812a52ade891a350c02c069ac7443a05ee867dafe94f87c2cb6b77e2de7f55d34e8708156c20e3ccddb328813454cc7dd833c133a0b600d32213ab32b398dee5a638f76783c935e51986269f2c46a36e6fe4b183756a0cb9e6ab92ff47dbf260b12dae671081041180d1924bdc42a007664dc5b33c055b61210350ac84cb17b1c422e712d1a68addaedb55a75e712aed56bb566fd5094c31e03a4141ec624efa9846cdd319be28e30901b20c69e1a83c9fa99c84e522261c4c7ca751eafb0a90b4284961f537487a379c7ec30776b4e03bc7332c843e5157a39bee6fe3c8d3cf51975ddffb41284d4e9d107f30f6e67e777c6bb8e571f7de4e83ba9548462a301e562b8df366cba9bcdb7a81c66afa8eab6501160b38dd8e7ea2991bf154c1e10d7667eb197b020000",
    ],
    [
      "ETag",
      "6uoyJHE5TQJnEp2VnZTxsQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-94-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "61",
      "4f",
      "db",
      "30",
      "10",
      "fd",
      "2b",
      "96",
      "2704486d43a16bd74a8815082ca3245d9a80aa09356ee2068f242eb6c3d4a1fef79d1d02ab60ece3a448f1f9dedd7bbe3bfb11dfb122c1033c67e97d49c5eac30f3ec70d4c154961575c9cf5cbb35fe7f2ab4fac49b8685fcdb3decfc34340301d2549becc6853f252c4540ec2492b15bc5c12c179131235fb9d66bb7bb0d7ddebf7fafb07bd038893345b8c587107d1b74a2de5c0b26aee56ca799a51b264b215f3fc79df7ad8b79682ffa0b192d626a5052cd27a9ff428e331518c1787e1040494928a19cd09cb40c24b6432ffbc99bac548de4a01fcc0624ae2989785d2b22045cc8b054b4b61b2e2c1233632ff58e0893db24f0274e2856eb013915c0747bb8848541b0d14c199162ca3339644da339b2defd099ef5d820714dc12496584aebfd8be8dd0c8bbb6fd9d08a0bbc8f50234722e6c748486ee29da4ce4b828745d7b12a09da35d74ee7be1181d4f37307082842e4899a953a2804569e549b574745b15950a404f35775e771aafb59771c1943eade306b63f3c099c2bbb2af088a6245e4deea1c40b92490a6822484e1515973ca11032f6264ee078ee700411a66ae31a21f1e0fbe34b40b05a522d5099bfe6ea760c7f0db8225969100fd5026fb53f6ee1f5baf1f72443df1f4e81980841566f13bcc960f0c6aa44d68c6dacd96a6b7fc3eae2f5cd1abe0686e1acb8f0b7d0f6a7b8daf2e9820a5ac486e09d921bb071fcf38ed5030f581879a0910a6ca9582c35492ca871072c37e2abe84fbd4eefa08b0d58a8d7be6e5bbf0b45f2a6e789a334f9a9105cf854c2806913d8a4d1c20a",
      "a809bc1b0d9c532949aad384059c445232cf283263809eab8ea208b102e9b6a028988eed99690ddc9c63928047753bc814798074c7ebf5b636b6b522a3a36ad47fd270539545939c7aae0d53f51bc5686e8771050000",
    ],
    [
      "ETag",
      "rKF9uFzGsJRa/SUf1Vbl7w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000000002ffedd35d4e83300000e0bbf4792c48694a7da382909982b228c24bc3a0300669f91306c6bbbb780df7dde1fb06599e8b71e4936a84048f60cd0cb2cff72f9d459de53cfa537c499d040afdb8b5ee5a7e48c5d8fb544689a5d6fe4bcddac36247edc6f318d1271a49abf6cad6c939865871ddab68004d4d467ae769352e108f7ab7c9b679b8d649711db01f85e1aa7cc688738ab5a0af8849327681e902716322e3736c0c391fa41d8404c56f7679ee8ba225e13939b96653564486268e0f47da84349dd1502997328bd89b63f42498716abff2dc7518ba6cf673ec2ffbbbbbff0bec80b876f520465edfb64344c80efcd5e7d3da89db7f2ab2410ce0e717936ff52919040000",
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
      "Thu, 02 Sep 2021 19:11:14 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-95-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85536b6fa24014fd2b64f66b7d822226666b946e4d147711ed3eb221c378a1d3024399a1c634fef7bd0cb5dba649fb8999b9e7dc73ee832772cff33d199388270f1594c72f7722221704144df075fdf3dedbcde5effc561ccae3f47a76b53b6487c90411bc66499a1529b4a4a84a0672bcddb4935254052d856861a2963368f5866677d8756ca76fda26f224a4f192e7f7c8be55aa90e34ee7acdd4e844852a005976d26b297f7ce63bf5394e20e98929db7921d54919d8f45bfa68251c5453ed96ed04025a10c21a33c450bff99fbe8f26dea36a7593b41f0236740191355ae6a5b9882893ce64955eaac64fc44b4cd5707b27197ee2c309848ab2c0f739ac185b1a78a86ea588071e5af57c6c2bb5afbab69b0587be16676edaea6edd97ab95d791be3e6daf55d43d12805cd3526c6a5be797841fd3d48c573ad1ed4cfb5f2738316efc75213505a42130cedee90f6465d278a239bc5237310c55d88a251640fa81975996381b58f80224f8b6a16cd453e74fa74d8b3e210e281155af608426a597638b49849a9e9c4c3419f9c2ec8a1e40ae65c1642f2a643e4c65f046e18f85b6f360d5c5d424cab54cd1b637501af3d2a2c10411fd474aaa35ca052ddee8517b8fe74162c766e33e12524941d370f38e398a612104d4b6c9e827225f6d830e24d57ee1cc17a62dfcf4149c67f9e48ddf3dac5ab96bfd0031c606d57e92fd904fec2fba6ed9c113b9a561af2d81c4881966fb136747dfa8b485cd2260bf9b175fd5fa479f221861272f6f93411ac039ffe6be7c5472cae3eca488577dc1d266b115642b3435c97fbcc1ed9836e7f4034b854ef623dd33e77adce5167840c72f55c51b3f858682356c917100671fc9eeed6e91f5fe1ac9a78040000",
    ],
    [
      "ETag",
      "OXkNVDsZnhowryAHCFVwmw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-95-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6e",
      "82401045ff65fa0a89564525f1015bb52468ab62d2a4316685014160e9eed2c618ffbdb3d4daa66dd2bec0cc7066b9f7c211f64911820ddb247eae501cae6254735d2c50569992742b7921110c40c56222cb28c7b2e3f41e83743ed9f5c7566f9fcee3c1800819ec3067601f214a300b25d84f4728588eb416f0acca8b4ddd19a00ea51e2efd853b9b509ff350f7b395e739436f0427e3b21832c53635ff8fb5f5c980946f1718a1c02240ada5143cc540b9daa6647999a1297925029450c3f58358f0aa648273932666bf6336ad56c36af4bbfdeb56b74560c603a6125e10bb5a923e505cb16cc15fc925580488ba24c3517d7da17112d64674e9ce7cab5debfb0a90b428c970f337487a778c3ec307768ee03bc7725e15ea428dbd7be7b7e328d3cfa36e1d7ff483908a92ba20be3b1d2d7d67faa0b9f5d9fbf0a0503e084e414ad419361bed5ea76b35de63bde13a6a7a8fad448506048cfe8ebb44811db14ce2e90d99f014867b020000",
    ],
    [
      "ETag",
      "pfmep5A8XcjQGh9F68kjQg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-96-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85540d4fdb3010fd2b912724d0fafd91b495102b2563d14a0a490a42d3d43aa9530c491c6c87ad42fdef3b3b04e8d8408a949cefbd7bf7ec731ed11dcd56688442babe2f08df7cba6521aa2122f11a56e7f96ffbf3699284fc425c4cd974739cd1f1f8f0101054b1044ef384d4052b7844c468ee37d69c1539e68cd5a1507d68d6db66b765b686d6b0d3b5bac0132489a734bb03f68d94b918359b957663cdd83a2138a7a211b1f479bdf9d069e69cdd92488ae6ae64135444f37dd1a384455852961dce7d68a010842f488a69022dbc3057e197ddd20d8ad3c61ac00f3422388a589149d51694885816d375c17555347a44bacd571fc8b7a7f6243026b3b91bec2f71aac8cb03030ba30a6ac6123cc534210bba5aaacc6291df195fbdd91964a0831b2c88581a57df6ccf368ce9eccaf6f69f1350cb9d05c6d4f96e1b47c6d83d3176cb39ae31775ddb0f8cfda303e3d49bcdcf8de3eb1d0cf858112169a65d04384c8872f0b4d1cedbe355042c41bc4c2eac9689db83d6308c432b8a07dd7e18b748180e42ab8fbb612b1af6486f15120c3ca9aa6b16ce5886db3d9384a61977ccb085cda807cc5eb71fc7fd41bf1f764dab6d9ac39ed547db1afac5a9242754e44cd072b7d195e704f622f0e6ee641cd8da468c8b449e94cd2913affb94601240eff8daaa2c65a0a48ece7103db1b4f02e7d22ea7654ad638daf8f7302f314e040134e6382592f033b6824d43e733df099c993b9e02438fc079851068f4e3f185106c72bdcb52bf911f788e7baa1ba81097382934e4a1fc407b8ce36c0f6db7b5ffd7197bdef81ab431e778f3570efc983d45ff8786c6eba8ecb3d26c23a556459d9dc844db9f5b786a082e5ba9852ee6b6778dca258fc484932cfa789a00ac131ffe33aa0bacfe48be9211126298dd4828918893728669aa9b2fd903cb6c5b2da4c15cbec9757bfdeab0540d5591a424934f8eca0bacb74da50af10c82248c9eabcf6dfb07a18b258b40050000",
    ],
    [
      "ETag",
      "UpxE+GllbrQsQLoLyBniAA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-96-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d905b6b02311085ffcbf475977aa98a820fb5d85610a9db4a852212e3b88d6e76622e8a88ffbd93b5481ffb92cc9cf9269c9333ec54b9861eac54be0f684f7739fa692c3274a1f08e2f43a5434800bdc899a4d67c1fb472adf9e053fbe3bd91cf6a35edf79970f21bb580de19360a8bb583ded7194aa191d784a6507a86fcc9c47e34f918be0c331634ada330998dc78f83f1102ec96d69b934bb7fad2c2e096c6995e1062d9612a30763698bd28f623c27b429307514ac4407155c0d724bc1084b94b29276db69bdddacb56bdd4eb7d1ec34192c480aafa86476f6cedec093174546474e070d066c5572d04d751e586e55190e1510adfd9d3ddc66f5385bfc3e383879746f96d89dc368ac7635f944d1b8e740de064c400afee357e5affde50706de02f6c0010000",
    ],
    [
      "ETag",
      "o5Xqumis5XBWmtw/pcFibQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "47",
      "72",
      "82",
      "50",
      "00",
      "00",
      "d0",
      "bb",
      "fc",
      "b53af4407620418a08510c65c37ce0d37b9192c9dde3e41af1dde17d0318866818fcb129500ddec10a09ee101eb49615c43947c72995047aa2bc0f2d09a1b4243c8b0f22798113e368b3156ba776430dc6f07c55eba541dd59ea0d1b9bd6bc284e6a956669484eadce749c3998ab7f125379e4a3a21918c3114782593325a8351857f081f7dc964c42400f05d9cc7d60a68b55e6d1aa992c8a4f1ec4782aeccc38607a59dadfd1d5f5685bcdadabe306d474f33d4697d3eddc5161d36d5192c9aa5d45fc575b12361ed89da16437513fef0f2f2fff17d801b4b4598f063f7b6e27698edb81bffafeb8b6e8f95f40b0473df8f905adc8773019040000",
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
      "Thu, 02 Sep 2021 19:11:16 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-97-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "da24e409448ad628a56ba68474405a4dd3848cb950b704536cb24555fefb2ea6e9da4d6a3f61fb9e73cfb90f9ec8032f12322531cf1e6ba80e9fee454cce08289ae1abed7cbd3e0cb7f67562fbe3dff7d92adb3e66f3d90c11bc6149ba2b73e84851570ce4741b74b34ad425ad84e860a28e6375fa93a139311dcb190cad21f224e4e98a170fc8be53aa94d35eefa4ddcd84c872a025975d26762fefbdfda05756e21e9892bdb7923d5491bdf7453fe78251c54531db0668a0965045b0a33c470b7f99497cfe367597d35d3743f09e33a08c89ba508d2d4cc14491f2acae7456327d22dae6ab0309dc95bb080d26f27a574405ddc199915045237528c1b8f4376b63e95d6efcf53c5c6ebc28585cb9eb7977b1596dd75e60dc5eb9be6b281ae7a0b9c6cc38d7370f2fa89f8054bcd0ea61f3dc283f3768f9ff581a024a4b688391654e68df369d388d2d96dac3719c9a10c7766c8de93036993382511203459e16d52c5a8802d27edc072b8946966d4723674c236a4e9228b1ed2471127b301933723c23bf2aaee082cb5248de7688dcfacbd08d427feb2de6a1ab4b48699dab8bd65853c06b8f0a0b44d03b351d9b2817a8d4b47be985ae3f5f84cb1bb79df00a32ca0ec123ce38a5b90444d30a9ba7a05a8b041b46bcf9dabd40b09ed8f52928c9f4c713697adeb878d5f2177a88036cec2afd2541e82fbd2fdace097143f35a43f6ed819468f90e6b43d7c79f88c4256db3906f5bd7ff4eda271f52a8a0601f4f13c13af0e1bf765a7cc4e2eaa38c5478c7dd61b21161",
      "15b43bc475b9cf6cdb9ad803fda72a5aa97f6396695aa7ae35399a8cb083423d57d42e3e16da8ad5f20584411cbfa7bb75fc0375e6e36378040000",
    ],
    [
      "ETag",
      "89JPy3U8Pd8R5xjgLgUqgA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-97-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d92dd6e82401085df657a0b09fe6125f102abad24d6b688699ac6981506a4051677178d31be7b67a9b54ddba4bd8199e19be59c0307784d8b081c58a5c9a642b1bf48503de8c24759654ad2ade485443000154b88bcf33ac966e54fdbdbe1ca7d7cda59cd6d324efa7d2264b8c69c81738038c52c92e03c1fa06039d25ac8b32a2f96756780da977a380b7c6f7a437dce23dd4fe793893b988ce0689c1723a6d8b2e6ffb1b6381af0c2573ec628b008516b29057fc15079daa6647999a1297925429450c3f58344f0aa648273932666af6b36ec96655bbd6eafd9eab608cc78c854ca0b62e733d2078a2b96f97c472ec12640d425198eebeb96c669541bd1a5370dec76adef2b40d2e234c3e5df20e95d33fa0c1fd82982ef1ccb7955a833753db9737f3b8e32fd3c6ae806a31f845494d41909bcdbd12c706fef35b738791fec15ca7bc12948893ac386d5beec746deb3dd62baea3a6f7384a546840c8e8ef18a70a9c9865128f6fa77755117b020000",
    ],
    [
      "ETag",
      "OI5gqbRN4vDbAWYw02vgHg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-98-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85540d4fdb3010fd2b91272490fadd341f9510ebda0ca29514d21486a6a9755227352471881d5085fadf777108d0b141542939bff7eeddd9e73ea13b9aaed110f934ba2f48befd72cb7cd44044e00856b77c933c9e6d0c3d50fdcbf5969e6b939ffcf2f81818b454719c6431697256e401e1c3c5bc15e5acc870ce581312354da3d9d5fa1dad63ea66afaff741c7491c4e697a07ea8d10191fb6dbb5772b622c8a09ce286f052c79596f3ff4da59ce6e4920787bdfb20d2ebcfdb1e949cc022c284b8f177328a0e0245f9204d3184a7855aefdaffba95b1427ad08c80f3420380858918ab22c4811b034a45191cbac68f88464996f3ed0dc9a5a634f19cf168e77b8c249295e1d29982b75d05056d0534863b2a4eb55892c97d99df2dd9d9d0302156c30277ca55c9f59aea528d3d9b5e51ebe0090cb9979cad4fe612927cac89928fbe96c4759388e35f794c39323e5d49d2d2e946f377b1ce8634db8a0a9ecc2c37e4cca0e9e37da7e7fbca5000b30afc0a5ded170d7e8987ee8eb4168f4077ed821be6ff8fa00f7fd4e60aa445dfb04834e94d9a50aa72cc55d5523bea6853dcdef602d5041a9f6076138300603bfafe95d4d33557d80760df49853412694678cd36ab7d1b56b7bd6d27317ce78e459b28d1017b19854c5954dbcad53409340faa0af5d8952064ee5d1d98e67b9a3b1675f59d5b44c498483edfc1ee625c43127c0c6394e8820f9395bc3a6a18bd9dcf6ec99339a82428ec045cde068f8ebe955e06d33b9cb42bed1dc736de754165033ae705c48ca43f5810e588ed303b4db35fe9f67e4baa31bf0c6798eb77f61d08fa696f27f7848be8caa3a6bcf2e2addeaa8b7176968f77b07bf0682cb5679a1cb85e5dea06ac92521c9491a7c3e4d4096c0a7ff19f505062e5c61b0e1026298dd809726414eaa19a6892cbe521b3a3c3d24c9b9788719a6591f5699a3cc4812928ae78eaa0b2cb7ad840afe42021046cf91e7b6fb03a54e5bca40050000",
    ],
    [
      "ETag",
      "yshmwHh87c4bQdyiM6DXsQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-98-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d905b6bc2401085ffcbf43581685a6fe08316ad8288c6863e1491358e319a64b67bb144f1bf773616e9635f7667ce7cb39cb3573865e50e7ab0cdd22f8baa7a4ad12c5d11a1b6b9d17c492a3582076844eac86a922d561fc1e5100fc2f6653c96b6b34cfb7d267472c04240ef0afb0cf39d86dee7154a5120af89826c6918329574fd74fe3e7a1b452c14b473c23c9ecd06c3d9086ede6369b391a77fadac6f1e1c691be11e1596093a0f52d111133375f1b428648ebe26ab12d450c3f5205564a550443e2b7eb7e3375a61d00abaed6e336c870ce694089351c96cbc626f60c8883ca26f4e074d06545d72d07d7d9e597ea9339c6bc059fb3b7b7ecc1a6eb6fe7d705819d40b45ec4ea33316dc4dbe92336e389051163d4804fff12433f7fef603e338f68cc0010000",
    ],
    [
      "ETag",
      "byHiPSW0zhUA37zFFpu8Qg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "edd34b7282300000d0bb64ad8ea894a43b4214ab18143bf8d93031c41240810441ecf4ee757a8dfaeef0be01e35c681dd54526aee01d746c84067cb02c21266d1aaddca293611e9aab69b04004151cfbb2b520bf387d4abc517f39634670df58f1306507c7703efceb66486e0d66be4caf861ba8136fe0715a21a86ce4d36afd46f64672a9e87927b2628d1ff772f1b98de679b3aacc45a813da1d755cc5626c24374189a8119cc076acf332ca6675e74b38712e661132b41f629b5ab44e136fbb6e32cb2bc37c79dec1adb2e6b0c5816b7bade25f7d5b4b220f72044fc5e0e5e5ff023d20eea5544247f2b97d6c22d4037ff5a3ba2bc5f33f164c09057e7e01b6a1057719040000",
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
      "Thu, 02 Sep 2021 19:11:18 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-99-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6b4fa34014fd2b64f6ab2d943ea04d9ab5a9a8ddb45429d56c361b320c171ca50c32438d31fdef7b19acab31d14fcccc3de79e731fbc90075e246442629e3dd6503dffb817313921a06886af211d9997cb950df7bf9e86f5d5c57599ad1f9ea65344f08625e9aecca123455d319093eda69b55a22e692544071375c6e34e6fd4b746d6d819db7da78f3c0979bae4c503b2ef942ae5c4348fdadd4c882c075a72d96562f7f66eee6db3acc43d3025cd8f9226aa48f36bd19fb9605471514cb71b34504ba822d8519ea385ffcc243efd98bacbe9ae9b2178cf1950c6445da8c616a660a2487956573a2b99bc106df3dd816cbca5370f0d26f27a574405ddc18991504523f55c82711eac57c6c23f5f07ab59b858fbd1667ee9ad66ddf97ab95df91be3f6d20b3c43d13807cd35a6c6a9bef97841fd04a4e285560f9be746f9b5418bcf636908282da10d468e35a23dd71ac769ecb0d4ed0fe3d4823876636748fbb1c5c60318243150e46951cda28528ecb16df7623b8946e05ad10099916b27c32885a133b09c5eead021399c90a78a2b38e3b21492b71d22b7c122f4a230d8faf359e8e912525ae7eaac35d614f0dea3c20211f4454d8726ca052a35ed5ef8a117cce6e1e2c66b27bc848cb2e7cd23ce38a5b90444d30a9ba7a05a89041b46fcd9ca3b43b09ed8d53128c9e4cf0b697adeb878d7f2377a88036cec2afd259b3058f817dace117143f35a43f6ed819468f90e6b43d787bf88c4256db390ebad17fc26ed5300295450b0efa789601df8f65f3b2e3e6271f551462abce3ee30d988b00ada1de2badc57b6ebb87dc7251a5ca94fb1d1d03a76adc9d164841d14eab5a276f1b1d056ac966f200ce2f87dddadc33fadecd9c078040000",
    ],
    [
      "ETag",
      "Ta6/HLM2ejJw5uPGQpgOkw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-99-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d926f4f825014c6bfcbe965b0fc83286cbed0b2c2a999e2d6d69cbbc20131e0d2bd979a737ef7ce25b3566df506ce39fccee5791ed8c3539287e0c23a899f4b14bbb318d5bd2e6628cb5449ba153c970806a06231915e2be9844e386c58ed56ff6178715e97632bee768990c1063306ee1ea204d35082fbb8879c65486b014fcb2c5f559d016a57e8e1dc9f79931bea331eea7eb2188d7afdd1000ec66931648aad2afe1f6bcb83015bbe9e618402f300b59642f02d06cad33625cb8a144dc94b11a0840aae1ec4829705139c9b34311dc7acdbcd9a5d73da4ea3d96e1298f280a984e7c42ee6a40f14572c9df15772093601a22ac970545d5f689c8495115d7a13dfb62a7d5f0192162529aefe0649ef86d167f8c08e117ce758c6cb5c9da8ebd15defb7e328d3cfa3ae7afee00721152575427c6f3c98fbbdf15473cba3f7fe4ea19c0a4e414ad419d66b56a7d5b66befb15e721d35bdc755a2440302467fc76da2c08d582af1f006e32a2c3b7b020000",
    ],
    [
      "ETag",
      "I5i8d9dJ2475BXJ/+1sM4g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-100-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "ef",
      "4f",
      "db",
      "30",
      "10",
      "fd",
      "57",
      "2c",
      "ef",
      "0b88fe6694d209b10219442b694952588550eb264e6a48e2603b9d2ad4ff7d67a75dd7b18dcf932a35e77befdebbb3ef153fb32cc45d3c63f14b41c5f2c3139fe10aa68ac4707a20e7b3ebc537690f03d553c5ed41d46ad9df4f4f01c1344b92344f6855f242045476475e2d16bcc889e0bc0a85aacd46a3da6c1f36da8d93e393d6e1f12110254da23ecb9e813e572a97dd7a7d235e8b398f134a72266b014f7f9ed717ad7a2ef8130d94acef6ad64146d6df513d4b784014e3d9e9c8030785a4624253c212f0b0a586b3cfbbb56b8ca4b518c00b16501204bcc894f60525029e452c2e84a98abbafd8f8fce5037b56dfbaf0d1c560e4f87b53926af2741f11893641054da1a9882574c2c2a9ce4c26f933fae20e6e20030ee644523945f7d7966b21d41fdc5beede34248a421d67e0a3befdd54267a8e75ca2dd52b683468e63793eda3bdb4757ee603444e7e31d0cf410d2881489ba240a7494f61e969fb6be5a45a502d07aecf6dbdbc62b9d655c30a5fbb51ddf727b17be7d679523eed398044bef05861c91445240134152aaa8b8e12105ca70e0d9be3d707a7d6098b90d370889bb0faf5b82bfcca936a8cc3fbeecf9165ead2a7f47f45cb73786aa4408b2fc2d074edb1f357dcbbe23496120066fa2d2c1a24ce026d66a9ba8b513b5f1ea7105bf0a86c7576ae1db91e58e7179e4d2880a9a0546e01ff3346093787f89360f1ac0f0a441472a88a56281d42a81a026edb3d4b82fd99d4ee3b87d820d58a837b9ced191defc2cfc6366ad5198fa54082e5c2ae1",
      "f9e810d4a4f1c232180a0b6fcd0eecb87c591fa5544a12ebf20e472951c19c6531922ccea0b6a028e202454516685af9e4cd11117191d24c217d87b28bf40ba821afc8732e140db70520572e8ae7bbb673b5ff691d9e8f7dcb83f553e8a1d9edb41e753fa68bf29effcb0e1ecb2b311b3170f446fc00f13c6ba8cf050000",
    ],
    [
      "ETag",
      "+shbHvXsIPctAtuQ+f22Iw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "ffedd3597282300000d0bbe45b98ca56e81f8b02a52290560a3f990c4644f6256c4eef5ea7d7a8ef0eef0e709290be47439d930abc8105730a9bb04e236bc674755e573e9d5272600c398c6a5f34afef881a012dad7086db36d4513a5de2f05c98a82fe7e8b8aa6560ae4cabc186cb4ef5d8a9371a15ca143bee8bd7d9fe31f0ac8836ddc8ecf8d6d7cb6a15608642593d0866bd8c957bb1f1d734604476161d4ec53e83fbf6137bde352730372c4956a49aa1671c39bbbd1e2d3519f2ed77cc085edb93ca5e752c8c25faa03c37b8aaad4d8dafdf84b0d5c4be90a0b3dcd8a7a7ff0b6c00999bac233dca1edb79515136e0af3e1a96863cfe6b0477a4033fbf36d3bd4619040000",
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
      "Thu, 02 Sep 2021 19:11:21 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-101-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "2bc87b6d0234492191a2354ae99a2d212b21ada66942b673a16e09a6d8b4caaafcf75d4c13b5aab4be00f63de79e733f78210fa2d8901161227baca1da7db9978c9c10d034c3db6c77dd67fd1fcbc2abbd3c0d2ec3ef7fede1f3788c08d1b014dd96397494ac2b0e6ab45e75b34ad625ada4ec60a28eebb81df7ace79c39436f78daf37a485490a773513c20fd4eeb528d6cfb20decda4cc72a0a5505d2eb7c77bfbe9d42e2b790f5c2bfbbda68d32cafe44f56b2e39d54216e3f50a1dd40aaa04b654e44d8947ea869dbfcfdd1574dbcd10fc243850ce655de8c617a6e0b248455657262b19bd10e3f3cd075905f3601a5b5ce6f5b6480aba85136b43354df4ae04eb325a2eac5978b98c169378b60c93d5f42a584cbad3e57cbd0857d6ed55100596a62c07c3b5c6d6b939857840fd0d282d0aa31e37d78df26b87661f07d310505a411b4c3ce78cbabe336429f378eaf7062c7580319f7903da630e1ff6a1bf61409167440d8b16b2a043df65bdc130e973e627fd9442e23bf8483980db87d405cec8fe843c5742c38550a554a2ed10b98d667190c4d13a9c4ee2c09490d23ad717adb1a680b71e351688a0ffd4b46fa242a252d3ee591807d1641acf6e8276c273c828dfad1e71c629cd15209a56d83c0dd5426eb061249c2c820b049b89fd3c041519fd7e214dcf1b176f5a7ea4c738c0c6ae366fb28aa359f8cdd839206e685e1bc853fb414ab47c87b5a1ebfd1f44e296b659c8f53a887e91f62a82142a28f8e7d344b0097cfeb71d361fc1b8fba8a3349e7179b86a547805ed120953ef2bdbf7dd9e7f460cb8d21f6203d73bb4adc9d164842d14fab5a476f3b1d2",
      "56ac5647100671fea169d7fe1f79ed892d7b040000",
    ],
    [
      "ETag",
      "gyQ4b4KOn7u7lfEFNJz/9w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-101-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92414f83401085ffcb78a5915aa54ae2a1d55a49686d293d18d3342b0c480b0cee2e364dd3ffee2c6a356aa2179819be59de7bb0837556c6e0c263963ed728b74729eaa929025475ae15df2a2a158205a845ca6471131cd71b11de7b19d2d53a999c4ffbc3cde525132a7ac24280bb8324c33c56e03eeca01405f25a44795d94cba6b3406f2b339c8581371e725f506cfaf1dcf77b7d7f007bebb0180b2d960dff8fb5c5de82153d0698a0c43242a3a592b4c2487bc6a6124595634b512d2354d0c0cd8354525d0949d4e249ab6db75b6da7633bf645f7e2a4d3ed30995324744625c3f3190b044d5ae4016dd826380cc8a664c749737de17116374e4ce98d43e7b411f815606d4996e3f26f90053f09fe0e1fd87b06df3951505dea0375e3dff57e3b8e43fd3ceaba170e7e104a73540724f4468359d81b4d0cb778f7dedf6a5413499ca4421362db3e3d3feb3af65bae5764b2e6f7b85ad6684124f8f7b8cd34b889c815ee5f01c0d940617c020000",
    ],
    [
      "ETag",
      "mFR/uwaTYIieoCkfP8QBGw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-102-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "53ef4fdb3010fd572cef0b68fdcd684b27c40a642c5a9b94240521845a377153431207dbe954a1feef3b3b2d5dc7363e4faad49cefbd7befcee717fcc4b208f7f08cc5cf0515ab0f8f7c862b982a12c3a9dd687da424c91c4b2d17b29f0b3f18cc7e9c9e0282699624699ed0aae48508a9ec8dfd5a2c789113c179150a559b8d56b5d93e6ab41b279d93d651e708889226f301cb9e80be502a97bd7a7d2b5e8b398f134a72266b214f5fcfebcb563d17fc91864ad6f735eb2023ebefa89e253c248af1ec74ec8383425231a129610978d851a3d997fdda3546d25a0ce0250b2909435e644afb821221cfe62c2e84a98a7b2fd8f8fce503fbd6c0ba08d0853b768283294935797a888844dba082a6d0d49c2574c2a2a9ce4c26f913faeab943c880830591544ed1ed37cbb3101ab8b7967730950a3c4221c70dd0c0fe6ea133d4772ed17e2ddb4163c7b1fc001d9c1da22bcf1d8fd0f9dd1e069a88e89c1489ba240a8494361f959fb6be5b45a502d066eef6dbebc66b9d655c30a51bb69dc0f2fa17817d6395331ed098842bff19a63c2789a4802682a4545131e41105cac8f5edc0769dfe00186670a32d42e2defdcb8e10ac72aa0d2af38f037b08cdf58723bc5e57fe0eeb7b5eff0e4a1321c8eab71cd86d7fd2f41dfb8624858118bc894a1bcb32819b58ab6da3d65ed4c6eb8735fc2a1856b0d4c2d763cbbbc3e59147e754d02c3402ff18aa019bc4fb4f69bbd60086c5061d580ec5a462a1d42aa1a0261db0d4b82fd9dd6eab737c820d58a837b9ee7147bfff2cfa6366a35198fa54082e3c2a618774086ad27861190c8545d7e625ecb97cde1ca5544a12ebf20e472951e1826531922ccea0b6a068ce059a1759a869e5e29b2322e222a59942fa0e650fbdae410df9459e73a168b4ab0280f2cdf881673b57879f37e1f95d60f9f01215ba6ff6baad07dd9469a5bcecffb78d87f272b49f4b",
      "d7b160b97f02fe0799d0df050000",
    ],
    [
      "ETag",
      "I02+ealnNEtvhsAprSTLbw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "d0bb646d1d243092ee88924251b12252dd3811020428099ff269a777afd36bd47787f70d6814b1b6bd76a2601578061355d13c9abbd2c0eb2135facdd9cbd670af58f50b215aa00f1b68c65f3277469cf9a8d230166e4f452b2cc5b5f8404fb66b6ae70daee921dcbad8f33194e2a94f45d7995a0f57b218773a54632728fcd2c8ac70bca5c3707ccf64d92df0ae4a8899b86f475ec6ab516cb94d2e2c9027659bf51639fb4b9504b4e239feaccd0f98c54d57a071e90be958e1c988ec34ef517acb93c4f3f78ac208bda07051eea072c9f964bfd6ebf9c3c3ff0566808d9237acbdf2fb76a82334037ff5afdd24d9fd3f66b4610df8f905ffae26e119040000",
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
      "Thu, 02 Sep 2021 19:11:23 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-103-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c8fbda2410c88348d19aa574cd94901548ab6a9a904d2ed40dc1149b4e5195ffbe8b69ba5695d64fd8bee7dc73ee8367b2e3c5964c08e3d9630dd5e1cb8360e48c80a219beeeac5c5d392cf8b6bc7b3cb843f8b1db0c06d7d3292278c392745fe6d091a2ae1290934dd8cd2a5197b412a283893a966977aca16d0e4d77e4f6ed918d440979bae4c50ee9f74a9572d2eb9dc4bb9910590eb4e4b29b88fdeb7befa9df2b2bf1008992bdf79a3d9491bd4f54bfe622a18a8b62ba09d1412da18a614f798e1efe51b7ecfc7dee2ea7fb6e86e0279e004d125117aaf185291251a43cab2b9d954c9e89f6f9e640426fe9cd23231179bd2fe282eee1ccd85245637528c1b80cd62b63e15fae83d52c5aacfd389c5f79ab5977be5e6e567e68dc5e79816728ca72d05c636a9ceb9b8f17d4df8254bcd0ea51f3dc28bf7468f171300d01a525b4c178640ea935365d96b251928eed014b4d606ccc46036a3333711d70b60c28f2b4a866d142142c050752d38cc79603b163b9a39899661a9baeedd261df1d5b3020c733f2a7e20a2eb82c85e46d87c86db088bc380a36fe7c1679ba8494d6b9ba688d3505bcf5a8b04004fda7a66313e502959a762ffcc80b66f36871e3b5135e42469343f888334e692e01d1b4c2e629a856628b0d23fe6ce55d20584fece72928c9e4d733697adeb878d3f2577a84036cec2afd2561142cfcefdace097143f35a439eda0329d1f23dd686ae8fbf11895bda6621d71b2fb823ed5300295450249f4f13c13af0f9df76da7c04e3eea38e5478c7e54964a39254d02e11d7f5beb0c763bb6f3944832bf521660f9c53db9a1c4d46d8",
      "43a15e4a6a371f2b6dc56af90ac220cedfd7ed3afe05b50ee8247b040000",
    ],
    [
      "ETag",
      "k1ltH4bRBLYqy96eJkU55Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-103-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d92d153824010c6ff97ed3198c13048667cc0b2745233c5e9a1719c13164481a3bba3721cfff7f6c8aca966ea057697df1edff7c10e3669118107cb3479aa506c4f1254f7ba98a0ac3225e956f2422218808a2544aae78dbb717bb7abd6a9b579c0b4cab1f7eab7db44c8708539036f07718a5924c17bdc41c172a4b59067555e2ceace00b52df5701a4cfaa31bea731ee97e341b0cfccea00b7be3b81831c51635ff8fb5f9de80355f4e30468145885a4b29f81a43d5d73625cbcb0c4dc92b11a2841aae1f24825725139c9b34311b966d361cdb72ac96db3ab35d9bc88c874ca5bc2078362581a0b862d984bf904d70081075498ee3fafa4ce334aa9de8b23f0a9c662df02b40dae234c3c5df20095e31fa0e1fd82183ef1ccb7955a823753db8f37f3b8e42fd3ceaca0fba3f08a928aa2312f487dd69e00fc79a9b1fbc77b60ae558704a52a20eb161352fce5dc77acff592ebace93d9e12151a1032fa3d7aa9022f6699c4fd1b309428147c020000",
    ],
    [
      "ETag",
      "tvk7k7HKh9+0kWeiumeHxA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-104-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ffc5546d4fdb3010fe2b96270493fa424b295009b1d28611ad245d9a82aa09356ee206431207db412aa8ff7d6787001d6c7c9c14293edf73f73cf7923ce13b9645b887172cbe2fa8587db9e50b5cc35491186e1f578f0e3d5f0e6f3b833139dd9fe58f6def203e3e0604d35192a47942eb921722a4b2379d3462c18b9c08ceeb90a8dedaedd45bddbdddeeeed1c1517bef600f02254d962396dd41f88d52b9ec359b157923e63c4e28c9996c843c7db96f3eb49bb9e0b73454b2b9c9d9041ad9fc84f524e121518c67c7d30928282415739a12968086d7d068f16d33778391b41103f881859484212f32a575418a90674b1617c264c5bd276c74be39e08935b2063e1ab853c7df0948aa8383af88485419351440514b96d0398b02ed99cff33b74e6b917e0010537445219a0ab73cbb3101ab95796f72693e3fa6864ffb0d009ea3b43b499cc76d0d471ac898f764ebea2ef9e3b1da3d3d90606aa88e89214891a12054c4aab8fcaa3ad87aba854007a6ebcfd7ede78adbd8c0ba674c5b6e35b5e7fe0db9756d9e4118d49b89adc439b97249114d04490942a2a2e78442164ec4e6cdf769dfe08224ce7c61542e2deafa7d7007f95532d5099373e1bb97dbfdb310a2ac825490a8379280f78abd5d8ef6ce1f5baf6f7447dcfebcf809c0841567ff8a0204df12187c11bab145a71b6b066abacf686d5c5ebeb353c350c5b5a72e19f53cb9be1f2caa34b2a68161a827fb4dd808de3f3afadda7c00c3ee038f54604bc542a95942418ddb67a9515f461f1e76f6f65bd880857aefeb76f52f228b3ef43c7314263f15820b8f4ad8326d029b345a58064d815f480da7544a12eb34d30c4a91942c128acc2ea097b6a320402c437a2e28f067636bfebc00f0119d920845bcd051a6d13d54cebdb2b64b735b0b3372ca81fd5f29d7659334d7d0752c58b2df460665558a050000",
    ],
    [
      "ETag",
      "zyzNeHfDj4CPaB5Ypz2R7g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0002ffedd34b7282300000d0bb64ad0ea004d31d8a55a83f14b4b0c9d0103ef2311a20864eef5ea7d7a8ef0eef1b448450ce71732d680dde808c343422a30f369d59224f840b75e8b5cc09b6e7562170314d7d41c5bcb4d979196c8e76a0367354c08b2c6f61246112bb6c98c8b2e7b97ae0e8f3d4559911285b34173bdd575c6bf1b0e3d0f1c6ab6ee535f84852bb4d3c9697164659bf80e5c48fba5eed56c9f06ae0e6eb3d58db7b4debfc26dec4be2bea25e6cbe2719413b18d0da5d67285b03a5d5b7bae552772313332ebd7377b020b6fdc9aa9507527947db5d999a1175b64f4f2f27f8101a00f96df29c7f973fb58476800feeae34632fafc3fa3d19ddec1cf2f166502ee19040000",
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
      "Thu, 02 Sep 2021 19:11:24 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-105-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85535d6f9b3014fd2bc87b6d0209490891a2354be81a29211b21adb66942c65ca85bc02936eda22aff7d17d374ad2aad4fd8bee7dc73ee074fe48e970999909867f73554874fb72226670414cdf0b5fe7218f5dd3f8f3f33283634f01661519a8fd3292278c392b4d8e7d091a2ae18c8c96edbcd2a51ef6925440713757ad6b0d31bd9d6c8721db76f3b361225e4e98a977748bf516a2f27a67912ef66426439d03d975d268a9777f3a16fee2b710b4c49f3ada68932d2fc40f5732e18555c94d3dd161dd412aa080aca73f4f08f9ac4e76f7377392dba19821f3803ca98a84bd5f8c2144c9429cfea4a67259327a27dbe3a90adb7f2e6a1c1445e176554d202ce8c842a1aa9c31e8c8b60b33696fec52658cfc2e5c68fb6f34b6f3debce37abdddadf1ad7975ee0198ac63968ae3135cef5cdc70bea2720152fb57ad83c37cacf1d5abe1f4c434069096d3072ac11ed8d2d374e6387a5637b18a716c4f1387686d48e2de60e6090c44091a745358b96a21cdaa35e9a5a2c82e1c88e06488ddc7eda8b9cbecb1c97c6ce3849c8f18c3c565cc182cbbd90bced10b90e96a11785c1ce9fcf424f9790d23a578bd65853c06b8f0a0b44d07f6a3a36512e50a969f7d20fbd60360f97575e3be11564941db6f738e394e612104d2b6c9e826a2d126c18f1676b6f81603db16fa7a024935f4fa4e979e3e255cb5fe8210eb0b1abf4976cc360e97fd5764e882b9ad71af2d01ec81e2ddf606de8faf81b91b8a56d16f27de7053f48fb14400a1594ece3692258073efedb4e9b8f60dc7dd4910aefb83c4c362aac827689b8aef7993d1e0f1cc7251a5ca97731d71e9fdad6e468324201a57a2ea9dd7cacb415abe50b0883387f5fb7ebf81710c344157b040000",
    ],
    [
      "ETag",
      "uBy629xwZgemOaREDTmn/w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-105-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "2b6c9806c9d6072d2b37b5546c6bcdb91b1c10030edd7bc9a9f3bf772e95b56aab2f70cee13997f77d61074f6911810f8f69f25ca1dc1c25a8c7a698a0aa32adf85652a1102c402d1226bbe359b71756e46def9697f737c74fdb35ad92b3332654b8c45c80bf8338c52c52e03feca01039f25a485995178bbab3406f4a339c0693fee88afb9c22d38f668341a73be8c1de3a2c46428b45cdff636dbeb760458f138c516211a2d1524a5a61a8fbc6a6127999a1ada892212aa8e1fa4122a92a8524b27962379c13bbe1361dd7697bede3a6d76432a350e8940a86675316089ab4c826b4669be03220eb921dc7f5f585c769543b31657f14b8ad5ae05780b5c569868bbf4116bc14fc1d3eb0f70cbe7322a7aad007ea7270d3f9ed380ef5f3a88b4ed0fb4128cd511d90a03fec4d83cef0d670f377efdd8d46752b89935468426c38add313cf75de723d279335bfc7d7b2420b42c1bfc775aac18f45a670ff0ae75e9ddc7c020000",
    ],
    [
      "ETag",
      "BQUBEcuo7zVhFYO2kzwojg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-106-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8554616f9b3010fd2bc8fbd24a498090401229ead294754c29e908b4aaa629318ea16e09a6d8748aaafcf79da1699bad5b252238df7bf7ded9e73ca17b96afd108c52c7da868b9fd74c763d44254e21456fda86f9cba92cfefb617fac2c5df32e7eb3c1d8f01c1144be04d91d1b6e05549a818458b4e5af2aac025e76d28d4360dbb6dda96611b4367d8b51c0b888266c98ce5f740bf95b210235ddf8b7752ced38ce282890ee19b9775fdb1ab1725bfa3440afd50530719a17fa07a92718225e3f9385a80834ad07249379865e0e195ba8e3f1fd6ee30bce9a4007e6484624278954be50b4a109e272cadcaba2a1a3da1dae79b0fb47067ee34d4a6f3c80f8f5678a3c8ab630d0b6d1fb4b4153495b08c2ed97aa532cb6571af7d09e617900107b75850b1d2aebfba81ab692b051a6b27dac43fd30ea99eaf45beef2e42ede8e4583b0fe6d1a5767a738001cf6b2a24cb6bc7218e33aadc3eefaaf7f7612a0296e0a0492e1dc3c6e6c018c649ec906460f5e3c4a0713c889d3eb662830c7bb4b78e29069e54d56b16ce796ec538b14c6b6012cbb1ed04e375b76bc716897b7dd3e8f7ac6ecf3149df72d0ae857e954cd233260a2e58b3b3e83af042771906913f9d846edd4682ab4c9e35e654136f7d4a681240ffe96ba7b28c83923a26cf0fdd60320dbd2bb7998c194d31d92e1e6036129c090a685ce20d95b4bce06bd83474395f78a137f7273360d4c77db9470834faf1f44a08b745bdcbb27e2b2dbb57ebef015738ab6ac463f381cc3edaed5aff2e310982c90dc8e2b2c4dbf7cbbf5bbfc6d75163f1450f29b57dd43d886cb4fbb983a785e052355ae87be40637a8590a68424b9a938f0709c075e2e33f87fd4505305c55d0111262985b22940a296933bf6c53bb6fd883810d3f54834bf967ce318ddefea0540d55916e682e9f5b6a2e6abd6f2a558917102461ec7ccf3f87ec6f7b9c91d02a050000",
    ],
    [
      "ETag",
      "NU50BEtoOjyM/SEaJl7HOg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-106-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "ffcbdd6b0b75858a820f73942988b86e3e6c4324d66b576d7bb3e44629d2ffbe9b2a7bde4b7273f21d724eae702a9b3d8c6157163f0e4dfb5020bffa2143eb2ab6b2696a2c4200c8aa10f2a33eb655149f569fb35972be68e55ad2c5642284cdbfb15630bec2a1c46a6f61fc758546d5283655936b58206eb53fcf97efe94b9a8950d3de0bcbf562f1345da4d0057fa6ed569ffe65d974011c6997e1010d3639fa0cdad011739efb7a56d5bac2d09233395ae8e1fea230e4b43244a128e1204ac241124749341a8e1ee3612c6445b9e2921a81d76f120e985855195da41e0c0430fd284d0ffd7aee655fe23e6dbacddd346d19edca9044b0e85f8f6e499ec9a76349cdc66100b9928f9c957c3b77bf897fcccca5010000",
    ],
    [
      "ETag",
      "Ymjyl03kPZHH6vwpauyopg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "edd34b7282300000d0bb64ad8e7c85ee10701048509082dd302944c40f810444747af73abd467d77784f80f39c709e75f44c6af001462ceab37ce635dad21a4acf0f2c716c76ee7ccdf73009ccf818969ea0a545aa8491c36a7980082992a5da52b5b1f7883bbe2ba2211d22d3ed29d43ee545a50ec54ec4c83770d66b52936d235d25f7f6123078706f2c39d85f423f45277b5bf3aa5e988997ab34f8e672b7381dc7f08a5a21d4e23677a8d59dcd586dc7e44105d7698aeab1626196fa17a679147a9097c6cd28198ef1b49e870723279b355a5e99c5a0d593d5544f666f6fff179800726f2a467856bdb64b8aae4fc05ffdac1b1bf2fabf249811067e7e01a8db0da619040000",
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
      "Thu, 02 Sep 2021 19:11:27 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-107-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "da24e4098914ad694ad74809d90869354d1332e642dd02a6d8248ba2fcf75d4cd3b5aab47ec2f63de79e731f1cc913cf233221214f9e2b280f5f1e45482e08289ae0ebf3be7ff8933e0eafeef66ef694c56237df5f25d3292278cd92342b52684951950ce464bb6927a5a80a5a0ad1c244adae69b5baa3be3932c7d6b8d7b7fa489490c64b9e3f21fd41a9424e3a9db3783b11224981165cb699c85edf3bbb5ea728c52330253bef353b28233b9fa87e4d05a38a8b7cbadda0834a42194046798a1efe51a3f0f27dee36a7593b41f08e33a08c892a57b52f4cc1441ef3a42a7556323912edf3cd816c9ca533f70d26d22acb839c6670614454d1401d0a306ebcf5ca58b8376b6f35f3176b37d8cc6f9dd5ac3d5f2fb72b7763dcdf3a9e63281aa6a0b9c6d4b8d437172fa81f81543cd7ea7efd5c2bbf7468f171303501a52534c1c03247b46b9be3300e2d16dbfd61189b108676680d693f34d978008328048a3c2daa593417b9c5ecee281e8601ed010d06511407e32eb503d6b3d860148e0783f1809c2ec8bee40aaeb92c84e44d87c8bdb7f09dc0f7b6ee7ce63bba849856a9ba6e8cd505bcf5a8b04004fda7a6531de50295ea762f5cdff166737f71e734135e4242d961f38c338e692a01d1b4c4e629285722c2861177b672ae11ac27f6fd1c9464f2eb48ea9ed72edeb4fc95eee3006bbb4a7fc9c6f716ee376de78cb8a369a521bbe6400ab4fc80b5a1ebd36f44e2963659c88fade3fd24cd9307319490b3cfa789601df8fc6f3b6f3e8271f751472abce3f23059",
      "abb0129a25e2bade17b66d5ba3e1906870a93ec42c7b786e5b9da3ce0819e4eaa5a466f3b1d246ac92af200ce2fc5dddaed35f405659be7b040000",
    ],
    [
      "ETag",
      "qw3yxlj5BVwNmkmfovCwBg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-107-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d92d153824010c6ff97ed319c300d95191fb0b498d014f1a5a6714e5810038eee8e1ac7f17f6f8fcc9a6aa65e6077f9edf17d1fece0292d22b0619526cf158aed49826aa60b1f65952949b7921712c100542c21b21bb08dd73bedde9ef96ce425bdfbedcc71937e9f0819ae316760ef204e318b24d80f3b28588eb416f2acca8b65dd19a0b6a51ece03df9d5c539ff348f79385e739036f087be3b81831c59635ff8fb5c7bd011bbef231468145885a4b29f80643e56a9b92e565860dc92b11a2841aae1f24825725139c3768d2689a9d46d36a9996d9ebf4ce5b9d1691190f994a7941f0624e024171c5329fbf924db0081075498ee3fafa42e334aa9de8d29d0456bb16f815206d719ae1f26f9004af197d870fec90c1778ee5bc2ad4911a7977ce6fc751a89f475d39c1f007211545754402773c9c07ce78aab9c783f7c156a19c0a4e494ad42136cd76f7a26399efb95e729d35bdc756a242034246bfc74daac08e592671ff066944dbf37c020000",
    ],
    [
      "ETag",
      "8TajL9+8K/RaFLg9ZyQAIg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-108-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8554fd6f9b3010fd5790f74b2be503f24922455d9ab22e5b425a425a45d3941863a85bc0149b4c5195ff7d87296db36eab8404e77befde3bfbcc137a60898f86c863e1634eb3fda77beea11aa21287b0ba9b473cbec6f3bbfc1b3bb7bfe797f76eba0e472340b08225709c46b42e789e112a86ab6523cc789ee28cf33a14aa1bba59377a6dbda70ffa8356bbdf06a2a0513063c903d0efa44cc5b0d9acc41b21e7614471ca4483f0f865bdb96b35d38cdf532245f358b30932a2f981ea59c409968c27a3d5121ce482661b1a6316818757aaef7d3eaedd60386e8400de314231213c4f64e10b4a109e042ccc3355150d9f90f2f9e6032dad993571b5c96265bb275b1c17e4eda986855605356d0b4d052ca21be66f8bcc66933e685f9cc51c32e0e00e0b2ab6daed57cbb1b4d7a5ad36d2ceb4b17da11d1798dadacab6ada5ab9d9c9d6a97ce6275a59daf8f30e0dca742b244f976b117d1c2f3f3de4edf1f6941c01244cbe4a6aff7b061ea032ff0fa2430db5d2fd0a9e7995ebf8bdb9e4e061ddaf13d8a81278bea8a85139ef8bd816e90d6809a3ef13c3c689b7ab7d3c646bbdfa13d3de863a3d5358c80a0430dfdca98a4174ca45cb0727fd1ad3375ad8debacecc9d8b5541b01ce2379519a2b9a78eb53429300fa4f5f8722cb3828158735b55dcb194fdce98d55cec78c8698ec978f3021018e040534ce704c25cde6dc874d43578be5d49d2eecf10c18ead0af2a8440c31f4faf04779faa5d96ea8d96ae33b52f95810a7183a35c4176e5071aa7e0151d0eb57f97193bce780dd238cbf0fe8f1cb4d3eb14f4bf4828bc8a4a9b95a4810ab52a6a1d453d74f87980a786e07a955ae87a65396b542e3934a0194dc8c7c3046095f8f837515d5900c3a5051d212186d925a25021192d6798c5ca7dc9364db3670e900267f25dceec74abc32a6a1415694c13f9dc527965d5be15a95cbc802009a367ab733bfc06c1b2bbd034050000",
    ],
    [
      "ETag",
      "vMlomQaMhuJiBNKuGjTpYg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-108-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d904f6fc2300cc5bf8b775c2bf58f060389032034902ab475b0cb8450086e29b47548522686f8ee73ca8476dc25b19f7f8edecb050e45bd853e6c8afcd8a03e3fe468df5c91a2694a6bf852541b040fd08a9cc9d15445f1c7d3f8f15b0772bcc83566c7dd703060c2c81d5602fa17c80a2cb706fa9f17a84585bc262a6a6acb903d2bd7cfe68bc9cb2465a1a2ad13e6cb24198e92095cbdfbd27aad0eff5a595d3dd8d326c50c35d6129d07a5698fd2ce5c3c232a55a26fa8d1120db4703bc835354a68229f153f0c9efdb013079da0d7ed45713766b224296c4135c3cb77360796ac2853fae2781031a0db929366ed7962396e439c5ac079fb3b8beeb3d0cd56bf0f8ece16cdab26b667d0390b6e2ec7e49c5b4e6475831e48c19f3c2decadbffe00b1815dabc1010000",
    ],
    [
      "ETag",
      "BHp23V5C+zr0cCTgrefqhA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "82300000e0bbf4d9192c55616fa575623488a8a0bc34b5d4a5227fad0e70d9dd67768df9dde1fb065c08690cbb55b92cc13be839748762b8ac1d8fb68a26d8aa9c6412ca6d1b417bd5e9e842d64dd4b000e53e5245b9b3c34a580fde04a1b7f5adac3e2c36b38876173b4dea0fdac3168e93e51bb9179e73e210a71bfb4ce2d2d598b05d334766b6c6f16d141fa0405b05d3e9159ad8a208edf9d76272765036bda6ed59d0aedcdfd9659553a3185ee8396efc60f2a65c72aa708f89557b841cb26391678d6d8d7c3753551015d795f83c9a102f1f9da49af7c39797ff0b0c80ec6aa5a561eab9dd1ebbee00fcd567b7be96cfff9ee45a6af0f30b3f694a1019040000",
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
      "Thu, 02 Sep 2021 19:11:29 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-109-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85535d6f9b3014fd2b91f7da0412920091a2354be81a29212b9056d33421e35ca85b82193699b22aff7d17d374ad2aad4fd8bee7dc73ee074fe491173b322109cf7ed5501d3f3d88845c105034c3d7eba373fb67637e81d2f6b7075e2e8c3078b8994e11c11b96a4fb3287ae1475c5404eb6612fab445dd24a882e26eaf64db7db1f5be6d8746d7760d9161225e4e98a178f48bf57aa9413c3388bf73221b21c68c9658f89fdcbbb71181865251e802969bcd53450461a1fa87ece05a38a8b62ba0dd1412da18a614f798e1efe5177c9e5dbdc3d4ef7bd0cc107ce803226ea4235be30051345cab3bad259c9e489689faf0e24f456de3cea3091d7fb222ee81e2e3a3baa68ac8e2574ae82cdbab3f4af36c17a162d377e1cceafbdf5ac37dfacb66b3fecdc5d7b81d75134c941733bd3cea5bef97841fd1d48c50bad1e35cf8df2738796ef07d310505a421b8c6d734cfb8ee9266962b3d4b146496a429238893da25662327708c35d0214795a54b368218a3173c1749d51ecd8b6150f4d6ac7d464a33849ecc1805173d01f39e474417e575cc182cb5248de7688dc05cbc88ba360ebcf6791a74b48699dab456bac29e0b547850522e83f359d9a2817a8d4b47be9475e309b47cb5baf9df00a32ca8ee12f9c714a730988a615364f41b5163b6c18f1676b6f81603db16fe7a024931f4fa4e979e3e255cb5fe8110eb0b1abf4978451b0f4bf6a3b67c42dcd6b0d39b40752a2e57bac0d5d9f7e2212b7b4cd426eb65ef09db44f01a45041c13e9e268275e0e3bfedbcf908c6dd471da9f08ecbc364a3c22a689788eb7a9fd98ee35a63976870a5dec5868e756e5b93a3c9087b28d47349ede663a5ad582d5f4018c4f9fbba5da7bff215b3627b040000",
    ],
    [
      "ETag",
      "Hy8VzO0Bep7NUvipD/SRjQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-109-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "92414f83401085ffcb7894466a955a120fd4566d52aa6dd1438d69b63020080cee2e9aa6e97f7716b51a35d10bcc0cdf2cef3dd8c0635a46e0c22a4d9e6a94ebbd04f5d414335475ae15df2a2a158205a845c264609f2cfc8341e64f0fc9cea245e736f0f7a7a7a74ca8f0010b01ee06e214f348817bb7815214c86b21e575512e9bce02bdaecc701ecc46930bee0b8a4c3fb9198fbdfe78085b6bb718092d960dff8fb5fbad0519ad6618a3c43244a3a5929461a847c6a6124595634b512d4354d0c0cd8344525d0949d4e249ab6df75a6da7633b76afdb3bec743b4ce6140a9d52c9f0cd9c0582262df219bdb04d7018904dc98ee3e6facce3346a9c987234099ca346e05780b5c5698ecbbf4116fc20f83b7c60ef197ce7444175a977d4f9f8cafbed380ef5f3a881170c7f104a73543b2418f9c379e0f9d786bb7ff7de5f6b54d79238498526c4b67d7472dc75ecb75ccfc864cdef71b5acd18250f0ef71996a7063912bdcbe029a8988297c020000",
    ],
    [
      "ETag",
      "T08ZM/DjMQ2o0jdZ3VTM+Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-110-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6b6f9b3014fd2bc8fbd24a79f068c8438aba2c611d5a4a32425a55d3941830d42d606a9b545195ffbe0b94b659b7554282eb7bce3de7dad73ca17b9a8568847c1a3f1484ef3fdd311fb510913886d585a9cfb27d1ed1ef4b2e697487a3ddcdb7c7f11810b464099ce609690b56f08088d17ad589392b72cc196b43a1b6a6a96dcd3454531df687bad13780284812cd69760ff45b297331ea761bf14ecc589c109c53d10958fab2dedde9dd9cb33b1248d13dd6ec828ce87ea07a9eb0004bcab2f17a050e0a41f886a49826e0e1951afa9f8f6b77284e3b318077342038085891c9d21794085816d1b8e05555347a4295cf371f6865cdada9a74c176bc73bd9e2b4246f4f152c942668295b682aa209d9d0705b66369bfc5ef9ea2e2e21030e6eb12062ab5c7fb35c4b795dda2a63e55c993833e5b880ed286bc7b1569e72727eaa5cb88bf552f972738401e721119266956f0ffb09293d3fefadfdfe484b0296205a27377dd5c4da401dfa91df0fa281d1f32395f8fec0eff7b0e1abc1f08c9c853ec1c09365f58a853396997e100e23bd67621262a3877d4dd57d121903cde8e99aa1878149225553d1a1851e3995644645ce04adf7175dbbb6676d3c77ed4c279e55b511e12291b3da5cd9c45b9f129a04d07ffa3a9459ca40a93c2cdbf12c7732f5ec2bab9e8f398971b05f3dc08444381104d098e39448c22f59089b86968b95edd90b6732074675e8cb0621d0e8e7d32bc1dbe7d52ecbea8d569e6b3b17958106718593a282ecea0f8473f08a0e87d6bfcb4c5c777203d29873bcff2307ed986725fd2f1215be8a6a9b8da4864ab526d28f22131d7e1de06921b85eb516fab1b6dc1b542fb924229c64c1c7c304e02af1f16fa2b9b200864b0b3a42420cb31b885225e0a49e619a56ee6bf660a86af54f46622edfe5f441bf39acb2465991a42493cf2dd557b6dab7325588",
      "17102461f49ceadc0ebf01c29fbbd134050000",
    ],
    [
      "ETag",
      "O62DnypfiKPrtifjafvYHw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-110-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6b",
      "83",
      "40",
      "10",
      "85",
      "ff",
      "cbf4aa601a8844c821b6d24a2534b6a18552c2464763a28edd9da588f8df3ba6a1e79e76df9b6f66dfec00e7aacd218043557e59d4fd4d89bc9d2e291a5bb391a3a3d6203880ac4a21e3a6b47dbc4d75f166fde37b78ff44eba85cad8430d9111b05c1004585756e20f818a0550d4a9b6ac8b62c10f7dda4e3cd6bf410a56234944fc6669724eb30896074fe9af6fbeefcaf96cfd181131d522c50639be194a1d374c28ce3693da39aae46d790d5191ab8c09742a9c9764a13b9e2b8b399e7ce16736fe12dfde5eddc9f0b5953a6b8a256e0dd8b84032656754adfb21e7870d561cf689e35c97483f9b52223ef687a9825106b8b0e644afee8b1e25f3dfe00cd2235f880010000",
    ],
    [
      "ETag",
      "ImguyIQRrfWu7hXBDKoAEg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000000002ffedd3dd5682300000e077d9b57904845c770e1189421d02e1cd0e8e41cc1ac8263f757af73cbd467eeff07d838c52262551f59909f004c64c87533af59b055af565b70ff1095be11ae542f782473c4f957c79b3074d1d97f6c061f911e57eaea1015e201ee1f3e7dcf5473f6f2d0ba32210b539b7b6490d55ea8d4bd872b74f90d0da58214ea2ab2aec6a6753ec5d627a29e0d0f1535792756c987be7f5b02978c4c4d6c7659024cec64af817d177a11442c50b65348e6b770ea524cda2e29a9e8fb3d343c8f55e97f20a754b06a37da817b31a93e52ac3ef9b5e546eee4cefeefe2f30016c68aa964952ddb61b268413f0579fa8b161b7ff88652d6bc1cf2f68cabc5519040000",
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
      "Thu, 02 Sep 2021 19:11:30 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-111-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "a2",
      "40",
      "14",
      "fd",
      "2b",
      "64f6b52a481535315ba3744ba2d822dadd6c3664182e745a642833d8348dff7d2f43edb669b27d6266ee39f79cfbc10b79e045422624e6d9630dd5f3b77b119333028a66f8ea793f9927afc14db3d44976bb27152cea9be91411bc6149ba2f73e84851570ce464bbe96695a84b5a09d1c1441dcbb23ad6d03687e6d819f76dc746a2843c5df2e201e9774a9572d2eb9dc4bb9910590eb4e4b2cbc4feedbd77e8f7ca4adc0353b2f751b38732b2f785eaf75c30aab828a6db0d3aa8255411ec29cfd1c33f6a125f7cccdde574dfcd107ce00c2863a22e54e30b533051a43cab2b9d954c5e88f6f9ee4036eed29d87061379bd2fa282eee1cc48a8a2917a2ec1b80cd62bc3f32fd7c16a167a6b3fdaccafdcd5ac3b5f2fb72b7f63dc5eb9816b281ae7a0b9c6d4b8d0371f2fa89f8054bcd0ea61f3dc28bf76c8fb3c988680d212da60e498436a8dcc719cc60e4b47f6204e4d88e351ec0ca81d9b6c7c0ee7490c14795a54b368210a9b0dfb16b3ad288564189ddb00d1c874acc861496cf793010c0729399e91a78a2b5870590ac9db0e91dbc00bdd280cb6fe7c16baba8494d6b95ab4c69a02de7b54582082fe53d3b18972814a4dbb3d3f7483d93cf4766e3be12564943d6f1e71c629cd25209a56d83c05d54a24d830e2cf56ee02c17a62d7a7a02493df2fa4e979e3e25dcbdfe8210eb0b1abf4976cc2c0f37f683b27c48ee6b5861cda0329d1f21dd686ae8f7f10895bda6621375b37f845daa70052a8a0605f4f13c13af0f5df76da7c04e3eea38e5478c7e561b2516115b44bc475bdafecd1d874ec3ed1e04a7d8a8d06fd53db9a1c4d46",
      "d843a15e4b6a371f2b6dc56af906c220cedfd7ed3afe0527a31a3d7b040000",
    ],
    [
      "ETag",
      "IIXcIsPeEfgf7dVVwtRDuQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-111-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "614f82501486ffcbe92b6c9286c9e6072d2b3635136c6dcdb92b1c10042edd7b29cdf9df3b97cc5ab5d51738e7f09ccbfbbeb083755284e0c032899f2a14db9318d59d2ea628ab4c49ba95bc900806a06231915e7c6f3d54a9375ea5eb8dcb5e4f37723d89bb5d2264b0c29c81b38328c12c94e03ceea06039d25ac0b32a2f16756780da967ae8f953777c4d7dce43dd8f67c361af3f1cc0de382e864cb145cdff636dbe3720e5cb294628b008506b29054f3150aeb629595e66684a5e890025d470fd2016bc2a99e0dca48969599669d9cd86dde8b43ba7cd7693c88c074c25bc2078e69140505cb16cca5fc826d80488ba24c7517d7da67112d64e74e98e7dbb550bfc0a90b628c970f1374882578cbec30776c8e03bc7725e15ea485d0d6f7bbf1d47a17e1e75d9f3073f08a928aa23e2bba381e7f74613cdcd0fdefb5b857222382529518768355ae7676dbbf19eeb05d759d37b1c252a342060f47bdc240a9c886512f76f0bbdb7807c020000",
    ],
    [
      "ETag",
      "SgV1XujSNhjkxIaz2xskPg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-112-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fd5790f74b2be503f2012152d46509edd052d210d22a9ba6c480a16e01536c3a4555fef79da1699b755b2524b0efbd7befce679ed03dcd4234443e8d1f4a52ec3edd311f3510113886ddcb6fe75d6b36d1bf2fd464dd5fdcda79e8ac17a31120a864719ce6096972561601e1c3d5b21517accc71c15813123535add3d4f4aeaaaba66176ba4617889c24d18c66f740bf1522e7c376fb20de8a198b138273ca5b014b5ff6db8f9d765eb03b1208de3ed66c830c6f7fa07a96b0000bcab2d16a090e4a4e8a0d49314dc0c32b35f43f1fe76e519cb662003fd280e020606526a42f4811b02ca271595459d1f009553edf7ca0a535b3269e3299af1cef648b5349de9e2a982b874543d94251114dc886865b19d96cf27be5dc9d5f42041cdc624ef856b9f96ab996a26c432cc856192967cad8992ac764db51568e632d3de5e4ec54b970e7ab2be5cbfa0803ae43c205cd2acf1ef61322fd3ef7d57e7f9c92800578a8831b43d5b136504d3ff28d201a74fb7ea412df1ff8461f777d35307ba417fa04034fc8ec150b672ceb055d63a0f575ece3b063f8a6d90f54827503fba116997aa4e341d8e99b2ada37d0af820a32a53c679cd6bd4537aeed591bcf5d3993b167556544b84cc4b436278b78eb53409100fa4f5d7b19a50c94e441d98e67b9e389675f5bf56ccc488c83ddf201a623c2092780c6054e8920c5250ba169e86abeb43d7bee8c67c0a80efcea80e068f8e3e995e0edf2aacba27aa3a92c60ff26e1354eca0af0587fa08eda519b2acc6f1fedf78d7f671abbee780deab828f0ee8f1854a4f724fd2f3a15be5ad54e0fba1a926a2f2e8e563adaffdcc3d34070bb6a2db45859ee1ad55b2e89",
      "4841b2e0e379027015f8f82f71b8b100863b0b3a5cc01ac637e0522528483dc634addcd7ec81a9197d1355e042bc8b99aa79382f9943662429c9c47349f58dadfa2643257f014110a6cfb19d0b88fe067eb49ed333050000",
    ],
    [
      "ETag",
      "MKF3ELC6ZQ0lY5QhIpdNYQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-112-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "905f4fc23014c5bfcbf5754b184bf897f020662a4a884e31268690322e73d0f5cef64e2464dfdddb417cf6a5bd3dfd9df49c9e605f980d8c605de45f35dae3558efcec87145dadd9c9569171080120ab5c48fe316f839d4af4e05d3f3867e3c7437a9b8fc742b8ec134b05a3136c0bd41b07a38f131855a2d85449b56181f858f9f374fe9adc25a908256dbc305fcc66d79359024df0675aadaafdbf2ccb26801dad53dca24593a1cf5059da61c6535fcfa9b2d2183aaa6d860e5ab8bdc82dd595b244a128611475c3a817777a9d617fd88dfbb1909a32c5051981172f120e9858e9940e520f22016c3b4ad36dbb7eb7b22f719996cdf2629a1c19dd932589e0d0bfde3927b9219f8e2535db1a03c8947ce47dc1e773f30b78de38ada5010000",
    ],
    [
      "ETag",
      "txnV8jaEl8XlJssr3KwRFg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "642d0e82a8e92e808a281515e5b36110c2470a428281d8e9ddebf41af5dde17d83288e31a561772f710d3e008f24388ec7db66a1ea7de639ec72554aa697a2609c4b5bbc30d43aa171a2a99fb5c2fa942bea66be43d20eaac24ade6c7bc90a9674e2de56c2f1fa69b679708cccee2cd7e2725f1dddb42accfba4e8a71a6248959dc10faac0ba5516ef55917141f3bae6c17d52104b9c1decc4b117d439a09cc887612af57057afd2399bf985eebaf861a50a742473cb3302e13ed6d02ca15ff7b981ec1c3d6dae3f5999b499e7d1f27cc1cff5a0e4c3f8ededff02238087a6209886c56bbbac4038027ff5c38e37f8f55fc511c104fcfc0285a48f3119040000",
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
      "Thu, 02 Sep 2021 19:11:32 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-113-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "f7b84208040248684590ae4810d6105a75d31439ce4d701be23476e8aa8affbe1ba774ad2aad4fb17dcfb9e7dc8f3c937b9ec7644c229e3e54503e7db913113923a0688aaf87fe6dba33af7e66f69fe15d9e6cb7c97cf7753a992082d72c49f745062d29aa92811c6f37edb41455414b215a98a86559bd9635e875069d9133eaf69c1e122564c992e7f748df2955c8b1699ec4dba9106906b4e0b2cdc4fef5dd3c74cda21477c09434df6b9a2823cd4f54bf658251c5453ed96ed04125a10c614f79861efe51e3e8fc7dee36a7fb768ae0036740191355ae6a5f9882893ce16955eaac64fc4cb4cf3707b27197ee2c3098c8aa7d1ee6740f67464c150dd55301c685bf5e190bef62edafa6c162ed859bd9a5bb9ab667ebe576e56d8c9b4bd7770d45a30c34d79818e7fae6e105f563908ae75a3da89f6be5970e2d3e0ea626a0b48426183a9d01b5869d5194440e4b86bd7e9474208a8691d3a7bda8c34636d8710414795a54b3682ef201635677d8ed867da04e684312875194d821b36c368298c583be458e67e4b1e40ae65c1642f2a643e4c65f046e18f85b6f360d5c5d4242ab4ccd1b6375016f3d2a2c1041ffa9e95847b940a5badd0b2f70fde92c585cbbcd84979052f6b479c01927349380685a62f314942b1163c388375db97304eb89fd38052519ff7a2675cf6b176f5afe4a0f7080b55da5bf6413f80befbbb673425cd3acd290437320055ade616de8faf81b91b8a54d1672b575fd5bd23cf990400939fb7c9a08d681cfffb6d3e62318771f75a4c23b2e0f93b50a2ba15922aeeb7d",
      "610f91ddd7ffaaa2a5fa10b39dd1a96d758e3a23ec21572f25359b8f953662957c056110e7efe9761dff0209d783347b040000",
    ],
    [
      "ETag",
      "v5Ygh/QZl4x8jnfUUfDh+A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-113-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92d153824010c6ff97ed152708c364c607354b1a33457c6a1ce7840531e0e8eea8ccf17f6f8fcc9a6aa65e6077f9edf17d1fece0212d22706195268f158aed49826aaa0b1f65952949b7921712c100542c21727873cabcbc28596ff23aaedad6b46fbff4934e870819ae3167e0ee204e318b24b8f73b28588eb416f2acca8b65dd19a0b6a51ece02df1b5f539ff348f7e3f968d4ed8d06b0378e8b11536c59f3ff585bec0dd8f0958f310a2c42d45a4ac137182a4fdb942c2f336c485e891025d470fd2011bc2a99e0bc41938665d90dcbb14dc76cb7da6776cb2632e32153292f089ecf482028ae58e6f367b2090e01a22ec9715c5f9f689c46b5135d7ae3c069d602bf02a42d4e335cfe0d92e035a3eff0811d32f8ceb19c57853a5257a3bbee6fc751a89f475d7683c10f422a8aea8804deed6016746f279a5b1cbcf7b60ae544704a52a20ed1329b17e72dc77ccfb5cf75d6f41e57890a0d0819fd1ec354811bb34ce2fe0db48d91547c020000",
    ],
    [
      "ETag",
      "HJ/aImnpaBPzNu91QC3xCg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-114-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fbd24a79f00c2152d46529db90129212d2aa9da6c480a16e01536c3a4555fefb2ed0b4cdbaad1212d8f79c7bcf7df184ee691ea1110a68f2509172f7e98e05a88388c009dc5697772bd523fc66caada94e2f75bb9ce717e3312068cde2382b52d2e5ac2a43c247eb552f295955e092b12e38ea2a8ade55069a3c902dd3523553032227693ca3f93dd06f8528f8a8df3f04ef258c2529c105e5bd90652ff7fd47b55f94ec8e8482f78f63f6210cef7f10f52c65211694e5e3f50a14549c941b92619a8286576a147c3ef6dda338eb25007ea421c161c8aa5cd4bac045c8f2982655d97845a327d4e87cf38156f6cc9efad274b176fd932dce6af2f654c25c3a1c3ad216928a694a3634dad696cda6b897be7a8b395840c12de6846fa5abefb6674bd2960b50b795c6d2993471cfa563b6e34a6bd7b557be7472762a7df316eba5f4e5fa0803b223c205cd1bd13e0e52520b7e2eacf3be9f35010b10d11a37a63cc0ca50b6823830c378a819412c93201806a681b5400e2d9de8514030f044edbd61e19ce596151872ac9a8aaa1343d64c55d565cd50e44035075a145a4a1029b1a28768df41bf4a2ac839e505e3b42d2ebaf21cdfdef8deda9d4e7cbb4923c6552ace5b7175126f750a481240ffc96b5f5b29834875a71cd7b7bdc9d4772eed76386624c1e16ef500e311e3941340e31267449072ce22281a5a2e568eef2cdcc90c184dc797070447a31f4faf047f57345516cd1bf9ce1c7a34992f1b0d07d0254eab06f5d87e205556e5aeac7615c357d491a28d14bd27cbf20ddaef3bff763ef1bcc93508c2",
      "6589777fd820c9815ed3ff12b5c137a756fc418582ea682f9a8e4e03b4ffb987a78360e3da58e8626d7bd7a8bdf2484c4a92871f8f18801bc3c77f8ec3160318f618e2c046080a131df23a4a589276b269d6a86fd9434bd38ce6bf237029ded90ccd38b4b0f6517b2419c9c5734aed163775ab4d157f01811106d275dc6f60fd0d95dfa97a47050000",
    ],
    [
      "ETag",
      "uVjS2ResZCs9C4iV4ErMnQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-114-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d90414fc2401085ffcb786d03150242c241b45194345ae4641ab2946929b49d7577aa21a4ffddd9423c7bd99d7dfbbdec7b7b866351ef600adb22ff6ad09c6e72e47737c4689b92ad6c9a6a8be001b2ca1df9fab87d89a3e15a97d5621fde05512febe5b3991036dd63a5607a86acc0726761fa79865a552836555153b3407cd2eebc883ec2a73016a1a29d13a2f572793f5f86d07a7fa6cd461fff65495a0f0eb48d314383758a2e833674c09417ae9e55952ed1b7d498142d747077911b6ab43244be287e100cfd6034e88ffa93f1e476301e085952aab8a05ae0f54ac20113ab32a61fa9078100a61ba569d6addf9dec4a5ca7a44daea6f989d1be19920816ddebfd4b920772e95852b369d08354c9473e177c39b7bfdfe2cfa4a5010000",
    ],
    [
      "ETag",
      "bKDbJRN4UplmIhE81N/f/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000002ffedd34b7282300000d0bb64ad0e8811e80e22608a5051c7021b264094c0c81f9438bd7b9d5ea3be3bbc27204942bb2eeaab8296e0034c64a92e92855d2bfae6cef29bee5dc6954bce071ff948c9e15d2c50b473b7e22e76b9b9c65255851c4b47cdc5dc10e4c1294b080f1c666d028bccc8d151351b47b5b829d627260ff631df04fe96b5c9032b249daee977cebc5a8bc4b48caf582b8c427743646f0959d9166e96cbbd36eff61e91774356ba0a53ac5367747d607e9aa832b8d9f2789c1f8acbe859d811322d3843ab9709ba55f8abe1a337d54e88726dbd4e05a69e166f6fff179801faa8594bbb88bdb64b505567e0af7ed44f357dfdd72969690b7e7e017e802bb319040000",
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
      "Thu, 02 Sep 2021 19:11:33 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-115-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8553ef4fdb3010fd5722efe3689b362d492b55a32a0122b5e996a6a0699a22c7b904431a87d86142a8fffbce0e6520a4f1a9f1ddbbf7defde833b9e755466624e5c5430bcdd3973b919213028a1618bdbdbbf81a069e2c470f6a747dcbb34b29da623e4704d75592eeeb127a186c18c8d96edb2f1ad1d6b411a28744bde170d21b9e3af6a93d75a723c775b0504299af7875afe995aae56c30388af70b218a1268cd659f89fd6b7cf0381ad48db803a6e4e0bde60065e4e013d56fa560547151cd775b74d04a6812d8535ea2877fa5597af69ebbcfe9be5f20f89133a08c89b652da17523051e5bc681bc34a66cfc4f87cf341b6feca5fc6161365bbaf928aeee1c4caa8a2897aaac1ba88366b2b082f36d17a11079b30d92eaffcf5a2bfdcac76eb706bdd5cf9916f299a96606aadb975665e213e503f03a97865d4631dd6ca2f130a3e2e4617a0b4842e99b8f6291d7af634cd5397e59e3349731bd2d44bdd0975529b4dc730ce52a05867444d15adb0e70c86d3d10492a9eb39c97844edc4a3ae93382397b131520c5d9b1c4ec89f862b38e7b21692771322375110fb491cedc2e522f64d0b396d4b75de19d30dbcf5a8b04104fda7a783ce72814a7adc4118fbd1621907d77eb7e11514943d6d1f70c7392d25209a36383c05cd5a643830122ed6fe3982cdc6be1f9392cc7e3d133d73ede2cdc85fcb635ca0b6abcc2fd9c651105e1a3b47c4352d5b0379ec3e488d966fb137747df88d48bcd28e85fcd8f9d14fd28522c8a1818a7dbe4d049bc4e7ffb6e3e523186f1f75a4c2371e0f935a8535d01d1137fdbe547bd3b1edd8c4801bf52137f4bce3d8348766843d54eaa5a5eef2b1d34eac95af204ce2fe4333aec35fe2e676797b040000",
    ],
    [
      "ETag",
      "hjF+NI8sl2qt2VhidGsoug==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-115-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d92d14ec2401045ff657c2d11048a34e1a1020a0610a1441363c8d24e4bb5edd4ddad4808ffee6c55346aa22fedccf4ccf6dedbeee031ce02706015474f05caed5184fada14335445a215df72ca148205a845c4e4cde5ed71a317061e45dd5e7f30ddb45f9a03b7d36142f96b4c05383b08634c0205cedd0e329122aff9941469b62c3b0bf43637c3b9371b4e2eb84f2930fd64311ab967a33eecadc36220b45896fc3fd6eef7163cd06a86214acc7c345a72490fe8eba1b1a9449a27585154481f159470f9209254e44212557852a9d59a959a5dafdad576ab7d526fd5994cc8173aa68ce1c59c0582262d92196dd826d80cc8b264c761797de6711c944e4c399c7876a314f815606d619ce0f26f9005af057f870fec3d83ef9c48a9c8f4813a1f5db9bf1dc7a17e1ed573bdfe0f42698eea8078c3717feeb9e3a9e1eedfbd9f6d35aaa9244e52a109b1566d9c365b76f52dd72e99acf93d8e96055ae00bfe3d06b106271489c2fd2b7f6acc7d7c020000",
    ],
    [
      "ETag",
      "WJX/4DfdTogCDEHPw9x5HA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-116-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85547f6f9b3010fd2ac8fba795f203424242a4a84b53daa1a5a425a455344d89710c754b30c5265354e5bbef304ddaacdb2a21c1f9debbf7ce3ef3829e58ba427d14b2f8b9a0f9f6cb230f510d51896358cd5ae7f3a66f169bdbfcbb3cbf8ca6492cdd783000042b5902afb384d6052f7242457f366dc4392f329c735e874275c3b0ea8665ea966e77ed96d935812868128d59fa04f4072933d16f36f7e28d98f338a13863a241f8fab0dedcb49a59ce1f2991a279acd90419d1fc44f52ce1044bc6d3c16c0a0e0a41f3055d6396808737ea2afc7a5cbbc1f0ba110378c308c584f02295a52f2841781ab1b8c85555d47f41cae7bb0f3475c6ce28d0469399179c2cf1ba242f4f352cb47d50d396d054c412ba60ab6599592cb227edd29f5c43061c3c6041c552bbffe6f88e76a06903ed4c1b7a17da31ddf5b499e739d3403b393bd5aefcc9ec463b9f1f61c0f78a0ac952e53ac061424bc7af3beb7e3cd0928025b8a8928bae6e61a3a7db61147649d4333b61a4d330ec85dd0e36439dd86dda5e8514034f96d5150ba73cedb46d6c9a66d433ec8ed5ebb58db6a11b51ab17b55698d804db266e75494b47bb1afa9533492f98c8b860d5eea27bdf0d9c45e0cfbcd13070541b112e127951992b9b78ef53429300fa4f5fbb32cb38289547e57a81e30f47817be754d331a63126dbe933cc47841341018d73bca692e6d77c059b866e2653377027de700c0c75e4377b8440fd1f2f6f84609ba95d96ea8d2ec7936160b595833de40e2785c26caa0f64343a80d8d5fe5d66e8fbc33948e33cc7db3f72d08ea5e87f5150781555360f8aa854db47ada3c842bb9f3b786a082e57a5856e678e3f47d5924f239ad3947c3e4c005689cf7f12fb0b0b60b8b2a02324c430bb44942a24a7d50cb3b5725fb17b7647ef769102e7f243ceb43afbc32a6b9415e99aa6f2b5a5eac2aa7d2b538538802009a3e7b9de15647f03e536b88132050000",
    ],
    [
      "ETag",
      "p2BY/R3uvQrKtBFfSlgtIg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-116-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d504d6bc24010fd2fd36b4293088a82072dd20a229a467a2822eb3aa6d124b3ee4e5a44fcef9d8d223df6b23bf33e96f7f602c7a2dec100b6457e6ad09e9f72e4a51f52744dc94e2e43b543080059e5a23c26d973ea3eb26834328bfe49535465cbe570280aa7bfb05230b8c0bec072e760f079815a552836555153b388f86cfc3e9d6793d7492a40453b0fcc57b3d9683c9bc0357898361b73fc97657d0de040db14f768b1d6e833184b07d43cf5f59caa4c89a1a3c66a74d08a5b22b7d41865894241c238ee8671b71375a37eaf9f747a1d5196a41517548b78f52ee180895599d28fd4834404b61da5e9be3dbf5bd897f053dc66fbcbc50f2ef1dcfafee0f8cce81696249e439f2cbaa57c219f9ca511db0603d04a3ef9ade0db7efd057212e860c1010000",
    ],
    [
      "ETag",
      "k2T/RsWT0AApP9qco0mTQQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "bb",
      "e4",
      "5b1dd660fa09280c8aa222417f322c616dd94201717af73abd467d77784f104411658cf475492bf0011e818056d16ad7ac557d4c63983a7dc543ffcac97a701b8de3c5f56c4fc30866d25d21c44b5d9f8fc2731af60e8f64ddb05de8c335bed4fe70accc596dacce5a2698ee0f12c4fe2028752de779d6dab339c57715b537fdee6e07b732435f3d8c57be7505b42f379ec3291e0b268966f08bc5671269fdf7782eccd2d21e7194f1f6297586eda6489665215536db89738277f024547b851497faca592cff245a8fa1380565379f660b1babb7b7ff0b2c009d9abca38ce4afeda28cd002fcd527fda3a1afff2a0d3ada819f5fa20a568119040000",
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
      "Thu, 02 Sep 2021 19:11:35 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-117-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "3014fd2b91f795bedba4a9548d52c288d4a62c4941d33445b67b130c691c62078450fffb6e1cca4048e3536cdf73ee39f79117722f8a1d991126b2871aaae76f77929113029a66f8ea417d666fef6a7f311d9c6dc3d5ae985c474ff3392244c352745fe6d051b2ae38a8d936ea6695ac4b5a49d9c1449dc1c0e90cec51dfeebb8e3b1c3923242ac8d39528ee917eab75a966bdde51bc9b4999e5404ba1ba5ceedfde7b8fc35e59c93be05af53e6af65046f5be50fd9e4b4eb590c57c1ba1835a4195c09e8a1c3dfca3eed8e9c7dc5d41f7dd0cc18f8203e55cd6856e7c610a2e8b54647565b292d90b313edf1d48e4adbc656c7199d7fb2229e81e4eac1dd534d1cf255817e1666df9c1c5265c2f627f1324d1f2d25b2fbacbcd6abb0e22ebe6d20b3d4b539683e15a73ebd4dc02bca0fe0e941685518f9be746f9b543fee7c134049456d00613a76fd3c1b4efb294393c9d8e262ced036353e64ce888f5b93b86f18e01459e11352c5ac8c2e5ae0bd32124e030968c6dc74da83ba409b76d7bc8c62c1d8d5c7238214f95d0702e542995683b446e423ff69238dc06cb45ec9912525ae7fabc35d614f0dea3c60211f49f9a0e4d5448546adaed07b1172e96b17fedb5135e4146f973f480334e69ae00d1b4c2e669a8d672870d23c162ed9d23d84cecea185464f6fb85343d6f5cbc6bf91b3dc6013676b5f992280efde087b173445cd3bc3690c7f6404ab47c8bb5a1ebc31f44e296b659c8cfad17fe22ed5308295450f0afa7896013f8fa6f3b6e3e8271f7514769bce3f270d5a8f00ada2512a6de57f6d49d4cc70362c095fe1473edc9b16d4d8e2623eca1d0af25b59b8f95b662b57a036110e71f98761dfe026db2ece77b040000",
    ],
    [
      "ETag",
      "EeuB6UjuIA81BURLdn5VSw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-117-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8d92d14ec2401045ff657cb42454b468131e10109b002a946034862cedb42c6ebb75778b21847f77b6221a35d19776667a667bef6db7f0ccf3187c58f0f4a544b5394ad1dcd9628cba1446d3ad90b94670000d4b899c05dde87ebd140ffde9ac335d7077c28fbb69ab45848e969831f0b7907014b106ff710b39cb90d62229ca2c9f579d036653d8e1241c07a33ef5998c6d3f9a0e06edcb410f76ce61316686cd2bfe1f6b4f3b07567231c60415e6115a2d85922b8c4c606d6a9615026b5a962a420d155c3d48952c0ba6a4acd1a4e6bacd9aeb35ea5efda27971d268368814326286cb9ce0e9840482918689b17c259be011a0aa921c27d5754d631e574e6c198c42efb412f815206d091738ff1b24c14b46dfe103db67f09d63992c7373a0ae0637eddf8ea3503f8feab6c3de0f421b8aea8084c1b03709dbc35bcb3dedbd5f6e0cea5b2529498d3644b77e7a7ed6f4eaefb976a4cd9adee31b55a20311a3dfe39a1bf0132634eede00d86f175c7c020000",
    ],
    [
      "ETag",
      "WIDcXvhlZGUWCUbi1Si+Dg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-118-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8554616f9b3010fd2bc8fbd24a6902492010a9eab2946e4829690969556d53628c216e09a6d8648aaafcf79da1699bad5b252438df7bf7ded9679ed003cb633444114b1f2b5a6e3fddf308b510953885557bb5755d7f60b8f1cd26f22f7af188acf2ebd3534030c512785d64f444f0aa24540ce7b3765af2aac025e72750e8c430ec13c3eae996ee0c9c6e6fd003a2a0593261f903d057521662d8e9ecc5db29e7694671c1449bf0f5cb7a67d3ed1425bfa7448acea166076444e703d5b38c132c19cf4fe7337050095a2ee81ab30c3cbc52e3e8f361ed36c3eb760ae00d231413c2ab5c2a5f5082f03c616955d655d1f009d53edf7ca0993b71c7a1369ecefdf06889d78abc3cd6b0d0f6414b5b425309cbe882c54b95592c8a07ed22985e42061cacb0a062a9dd7e730357d3960af4a3d2f51ed5ceb4917fae1df23d5f9bfbbe3b0bb5a3b363ed6b309d5f695fee0e30603ca642b2bcb61de228a3caf2f3d67a7f9fa8226009369ae462a05bd8b075274aa20149ec9e19253a8d223b1a98b817e9c4e9d37e1c510c3ca9aad72c9cf35c8fb1d5a58ed3ed9a86d5b713dd314de25896436cdc77baa6139bc0ec1b68d742bf4a26e939130517acd95e741b78a1bb0883b93f1e856edd4682ab4c9e37e654136f7d4a681240ffe96ba7b28c83923a2bcf0fdd60340ebd1bb7198f094d31d9ce1e6140129c090a685ce23595b4bce4316c1aba9acebcd09bfaa30930ea33bfda23041a7e7f7a2584dba2de6559bf9596d5aff5f7801b9c553562d37c20c344bb5debdf25464130ba03595c9678fb7ef977ebd7f83a6a2cbee821a5b68fba079185763f77f0b410dcac460b5dcfdde00e354b014d684973f2f12001b84e7cfc87d8df5600c37d051d212186b92542a9909236f3cbd6b5fb866d3b966d99a80697f2cf1c0caeb33f28554355a46b9acbe7969adb5aef9b4a55e2050449183bdff3bf42f6371305758f2f050000",
    ],
    [
      "ETag",
      "8hyEEN71EdVvbNF3dAchnQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-118-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c24010fd97f1da262d2420241c80344a6c0854ebc510b294a116daceb23b5591f0efce16e2c98397dd376fdedbbcb7673814f51686b029f26383e67497232f1d48d036255bb934d516c10364958bf238b7af26ef3da5e958f7bf23954e975f8be568240a9bbd63a56078865d81e5d6c2f0ed0cb5aa506caaa2a66611f149bb79367f891ea244888ab68e98a7713c9ec4115cbc5fd37aad0fffb2ac2e1eec6993e00e0dd619ba0cdad01e339eb97a5655ba44df526332b4d08adb456ea8d1ca10f9c2f86178ef87bd6ed00b06fd41a7dbef8ab2a44c7141b588d36709074cacca843ea51e7444605a284d77edf9d1d2aec40dad1cfe6b17baddeaf6e0e4c4681786249e45972cb8a69c924bced2884d831e644a3ef9b1e0eb7cf901b0c95c1ac1010000",
    ],
    [
      "ETag",
      "qNsVrg6KUUAp7zEaUCQxPQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "bb646d194005e9cec83728a23215dc6428444841c40086d8e9ddebf41af5dde17d8334cb48d7e1fe5a9106bc0391aa8694497ebb8026a7bc64d541176b5fd8da261284199196cf50e8ca863c24e3a037d8f2f3c084b20f1b64fa8fdc8957dac553674142c362bc278e3e7b433a3f175f2dcffce532e9d7ddd95ca897eab3196ab472d1b975c4f1666384b6b7f98e0fee8e29967e2f37a730e2753c6507659c0754b36155c801b63cd58a3273170fa7beead3dc311665b5ffb0f1c153e82d2834b73f924741cb46e557af662524db748b0b178a250da59797ff0b4c00195bca4887e973fb746e1813f0571ff7a225cfff90a48c30f0f30bba0f7bbe19040000",
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
      "Thu, 02 Sep 2021 19:11:37 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-119-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85536b6f9b3014fd2bc8fbda24e4c52352b446095d9112b211d26a9b2664e042dd12cc6cd3aeaaf2df77314dd7aad2fa09dbf79c7bce7df044ee589591194958f1bb01f1f8e99627e48c80a205be6e2b4bfc78c8c5a5ff67750db6bcadc7ca7a98cf11c15a96a487ba849ee48d4841cef6bb7e21785353c1790f13f58643b737b4c6a665bab63b1adb63244a28f335abee907ea3542d6783c149bc5f705e94406b26fb293fbcbc0fee47835af05b48951cbcd51ca08c1c7ca0fab9e429558c57f3fd0e1d3412440c07ca4af4f08f9a25e76f73f7193df40b04dfb314689af2a652ad2f4c91f22a6745237456327b22dae7ab03d9796b6f1919292f9b431557f400674646158dd5630dc645b8dd187e70b10d378bc8df06f16e79e96d16fde576bddf043be3fad20b3d43d1a404cd35e6c6b9be057841fd0ca46295568fdae756f9b943fefbc1b4049496d00563dbb4e8d031dd244fec3477c6d3243721499cc49ed27162a6ee0426590214795a54b368c5abc994c2c84cec98da932c9eb896193ba6358c47c910a64ee63a9058e478461e0453b062b2e692751d22d7a11f797114ee83e522f27409396d4ab5ea8cb505bcf6a8b04004fda7a6631b651c95da76fb41e4858b65e45f79dd84d750d0f471f71b679cd35202a2a9c0e629101b9e61c348b0d8782b04eb897d3d052599fd7c226dcf5b17af5afe428f7080ad5da5bf6417857ef045db3921ae68d968c87d7720355abec1dad0f5f11722714bbb2ce4dbde0bbf93ee29841c0454e9c7d344b00e7cfcb79d361fc1b8fba82315de717952d9aaa402ba2562bade67b6e3dad6c8261a2cd4bb98ed0e4f6d6b73b419e100957a2ea9db7cacb4136be40b088338ff40b7ebf8179877467a7b040000",
    ],
    [
      "ETag",
      "On6rZwfrHIxDWe7sjp3t6w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-119-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d92414fc2401085ffcb78b4242050a00907504422a09672d118b2b4d3526d3b65772b41c27f77b6221a35d14b3b33fd66fbde6b77f01c670138b08ca37581727b12a1be33858baa48b4e25b4e9942b000b588981c5cb79b9b57772de7d9fdba3815c3a873479b6e9709e5af3015e0ec208c310914380f3bc8448abce65352a4d9a2ec2cd0dbdc0c679e3b9a0eb94f2930fd743e1ef7fae301ecade36220b45894fc3fd61ef7163cd1d2c51025663e1a2db9a427f4f5c8d85422cd13ac282aa48f0a4ab87c10492a7221892a3ca9d46a9d4acdae57ed6aa7d539abb7ea4c26e40b1d53c6f07cc602419316894b1bb6093603b22cd971585e5f781c07a513538ea69edd28057e05585b1827b8f81b64c12bc1dfe1033b64f09d132915993e5297e39bde6fc771a89f475df4bcc10f42698eea8878a3c960e6f526b7867b3c78ef6f35aa5b499ca4421362adda68375b76f53dd7733259f37b1c2d0bb4c017fc7b5cc51a9c50240af76f82337c687c020000",
    ],
    [
      "ETag",
      "EK85wzRqrUnZqu+aGg9Qow==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-120-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5790f74b2be503f24142a4aa6329ed9852d20169556d536288a16e01536c5a4555fef79d4dd336ebb64a4860df7bf7de9dcf3ca13b5aacd1044534bdaf49b5f974cb22d44244e01476edb19f0516f367e9e69206a7f7dfec99787c3c3a0204952c8ef332236dceea2a267cb2083a69c5ea12578cb52151dbe8e96dc3eceba66e8dac5e7fd40722275932a3c51dd06f8428f9a4dbdd897752c6d28ce092f24eccf297fdee43af5b56ec96c48277f735bb20c3bb1fa81e672cc682b2e2681180839a936a49724c33f0f04a5d479ff7737728ce3b29801f684c701cb3ba10d217a4885991d0b4ae5456347942cae79b0f143833671a6ad3f9c20b0f563897e4d5a186b9b65bb4b4151495d08c2ce97a2523cb6579a79dfaf3738880831bcc095f69575f1ddfd15eb756dacf5ad7fb443bd66cef44dbcfe27adac2f39c20d40e8e0fb5337fbeb8d0be5cef61c0fe9a70410b653ec45146a4f1e706bbefcf5512b000e526b81ce92636c6ba1525d1284ec6fd6194e8248ac6d16888fb911e5b0332584704034fc8ec8a850b56447a6f887be3e1686ce8bdc4b086c6c834a1b5e38418a3e1308ea2be85d7bd046d5be8b1a2829c505e324e9b26a32bdf0d9d65e82fbca91d3aaa8c04d7993869ccc922defa14502480fe53d756462903257962ae173abe3d0ddd4ba71992194971bc09ee614c129c7102685ce19c08529db335340d5dcc033774e79e3d03863af98b1d82a3c98fa75742b8295597857aa320f45def4c19d8212e71562bc843f381ec12bca2edb6f5ef34b6efdbd7208dab0a6ffe884139e640d2ff22a1f06ad5d8dc491a48aaed56bdbd9589b6bfb6f0b410dc",
      "b1460b7d5f38fe356ab67c92908a14f1c7c3046015f8f85fb1bbb700869b0b3a5cc01a6637e65225ae4833c33457ee1bf6d8b20cd3400a5c8977b1be31d81d96cc2133929c14e2b9a4e6deaabec950cd5f401084d1f3d4b96d7f035d423bc139050000",
    ],
    [
      "ETag",
      "A8RlS9oRLgyViSFqJALtww==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-120-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4fc24010fd2fe3b58d6d2120241cc4a0622a91620fc410b2b4432db49dba3b5509e1bf3b5b0cf1e86577e67d6cdedb23ecf32a85216cf2eca3417db8ca90e77688d034051bb96aaa0c8203c82a13e54d1e87f71c2f97e5f52e2dbb4fdffef8399e8f46a230c93b960a8647d8e658a406866f47a8548962532535158b880fb5dda7b3d7c9c32412a0a4d402b3380c6fc7e1044ecec5b45ed7fb7f5956270776b489708b1aab046d865ad30e139eda7a46957581aea1462768a015b744a6a9a99526720571fdc073fd5ec7eb7983fe20e8f43ba22c28519c5325e27821e180895511d197d4834004ba1da5e9b63d3f05eeb625ece4b7d9fe72c1850b2cb7fa7d707c60342f9a249e419bcc3ba7bc239b9ca511eb061d48947cf263cee7fdf403270f4ddfc1010000",
    ],
    [
      "ETag",
      "8iULFtUYYm/jdm4Jx1BMUQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000d0bb642d8e24a594ee889682526214e4b361a2440d5040b040ecf4ee757a8dfaeef0be013b1c78d7a5d7bae01578059241637a98ae9a17bc1872741278930d6a8967ef9896893bfb7c7a23d166590e04872b494c9a159ea5f7b2dec6a4207ed5e472bda6bbe086d7e3b553a35de59bd2ee9c2cb48b7e2fe0592f4d7efbb28d34d72c9a282e247de89a6a7d0e399acd037fe05aac048441d2c251a00c9e2ffe731c48656e53c4dc465ad43b31a12bd819bd5be51d4fcede7391aab3711957479ffadb4446e1479634a6c54b6c44162cc422b22ea69368d38787ff0b4c001f1bd1f22e15f7ed48338c09f8ab9f5e65c3efff31672d6fc1cf2f40b52e3c19040000",
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
      "Thu, 02 Sep 2021 19:11:39 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-121-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536b6f9b3014fd2bc8fbdabc200910295aa384ae6c095981b49aa609d9c6507704536c32b555fefb2ea6e95a555a3f61fb9e73cfb90f9ed06f5ea6688608cfef1b563f7cba13049d21a6700eafae7d3fb97a0cc863b6faea7d23727558efa657f3392078cb92785f15ac274553532667bba89fd7a2a9702d440f12f546e6a8379a5ac3e9d0b55dd3b22d204a56646b5efe06faad52959c0d0627f17e2e445e305c71d9a762fff23e389883aa16778c2a3978ab39001939f840f5732128565c94f35d040e1ac9ea84ed312fc0c33f6a4acedfe6ee73bcefe7003e70ca30a5a22955eb0b525051663c6f6a9d15cd9e90f6f9ea80226fed2d63838aa2d9974989f7eccc48b1c2897aa89871116e37861f5c6cc3cd22f6b741122d2fbdcda2bfdcae779b20326e2ebdd033142605d35c636e9ceb5b0017d04f9954bcd4ea71fbdc2a3f77c87f3f989600d29275c1c41e4ef1c819ba242336cd1c6b42b22123c421f6045b6448dd311ba78461e06951cdc2a52849664d5262d2c4325d9a8c4d679a6067942599634312d31cdb748c8e67e84fcd155b715909c9bb0ea19bd08fbd240e77c172117bba840c37855a75c6da025e7b54502080fe53d3b18d72014a6dbbfd20f6c2c532f6afbd6ec26b9663fa10ddc38c335c4806685c43f314ab37228586a160b1f15600d613fb7e0a4a34fbf984da9eb72e5eb5fc851ec3005bbb4a7f5114877ef045db3921ae71d168c8a13ba00a2cdf426de0faf80b90b0a55d1674b5f3c21fa87b0a59c66a56d28fa709601df8f86f3b6d3e8061f741472ab8c3f250d9aad09a754bc475bdcf6cc7756d47ffab0ad7ea5dcc1d59a7b6b539da8c6ccf4af55c52b7f9506927d6c817100461fe816ed7f12f1b40e4ed7b040000",
    ],
    [
      "ETag",
      "97q5QzNbzfDJEKbsDvLU6Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-121-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "db",
      "4e",
      "83",
      "40",
      "1086df65bd9446e8815a925ef4644b42cfd4c498a6d9c2d052171677170d69faeece62ad464df4669919be19fef9d923798ad39038641bef9e7310c5d50ed45c070b903953121f194f25108380a23b24edfbfd4de2f6c2a13d37fb0fa3b0713df58a79bb8d840cf69050e21c4914030b25711e8f24a509605bc0599ea49b3233882a325d5cfa0b7732c43ce1a1ce272bcfeb74bd01391997c6902aba29f97fb4ad4f0639f0ed0222109006a0b564821f2050ae5e53d2246350913c17014852c2e58b9de0794605e715ac54acaa55b1ec9a699bad66ab5a6bd690643ca02ae629c2ab250a248a2bca16fc556a53101065881b47e5f982e5382c37d1a13bf1ed7a29f02b80daa298c1e66f1005ef29fe870fececc1778e263c4fd585baf3a69ddfc6a1a99fa3fa1d7ff083900aadba20be3b1e2cfdce78a6b9f579f76ea140ce0447272568132db37edb68dae6bbaf3daebdc6ef384ae4609080e2f518c58a381165124e6f8e074e5b7c020000",
    ],
    [
      "ETag",
      "6Vh/mICdG6Q0DYHd5+OLyQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-122-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8554fd4fa34010fd57c8de2f9af483425bda26c6eb55ce2369a902d5e8dda55d60c055be6417bdc6f47fbf0144ed79772624b03befcd7b333bcb13b963894f26c465e17d01f9f6d36dea9216014143dcbd1838df1ee3ebc5b4c8ad857adeffe5b36bfbf1e80811ac64711a6711b4795ae41ef0c9caee84795a64344fd336266af714a5dd1baaf2501e6b6345d55424728882394bee907e2344c627dd6e23de09d3348c80668c77bc347ed9ef3e28dd2c4f6fc113bcbbafd94519defd40f5384a3d2a589a1cad6c745070c8d7105316a18757aaef7edecfdd6134ee84087e601e50cf4b8b4494be30859726010b8bbcca4a264fa4f2f9e683d8fa5c9f39d26cb9329d830d8d4bf2e650a25c6a162d698345052c8235f3376564bdceeea4afd672811174704339f08d74f94db774e9756b23fd28645905e9589a9a27d27e16c39456a6a9db8e74707c289d5acbd599f4e56a0f83f67de08225957987ba1194c69f1b6cbc3fd79240052ad7c1b5260f696f248fddc0d5bc60a40edc4006d71db9da80aaaeec8dfbd0f75da0c81365f68a45136c19557b54eb698aaf0c5557e9a91e405f03451b68c160244330f05d57f3fb64d7228f391370c27896725637995c5a86a3af1d6b65cea68e5e9511d0221227b5b9b288b73e051689a0ffd4b52ba32c45a5f2c40cd3d1ade9cc312ef47a48e610526f6bdfe3980434e280689ad31804e48bd4c7a691b3a56d38c6d29cce91519dfc5983e064f2fde995e06cb3aacba27a13dbb10cf3b432d0202e6854549087fa83d00cbd92ddaef5ef3453cb9a5ea134cd73bafd2386e50cfb25fd2f1215be5ad5361bc91e29d59a95b2b71a92ddcf1d3e2d8277acd622e72bddba22f5960501e490781f0f1382abc0c7ff8ae6de22186f2eea70816b9c5d8f972a5e0ef50cb3b8725fb3c7b23ca8ff3482e6e25d4cd3b4e6b0ca1c6546882111cf25d5f7b6ea5b192af80b0883387a66756ebbdf647d4d4539050000",
    ],
    [
      "ETag",
      "V5THwmZMAurRM3Q4xdiZSw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-122-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f6fc2300cc5bf8b776da50212a8481c60abf8a38a8d6e1c609a50484d5768e32e713421c4779fcbd0ce3b25eff967e739173895268721eccbe2cba33d3f14c8abf692a1f3153b391a320e2100645508f9b4358b4d3c9e761687e73a9d25dbcceb62351a09e1f427d60a8617389458e50e86ef1730aa4669533579c302f1b969f57cf9964c934c8c9af2d658aed3743c4913b8067f4dbb5d73fa57cbc7358023ed333ca045a3b1cdd0583aa2e679bb9e53755361e8c85b8d0e6ef0ad5058f28db244a13861a7db0d3bfd5ed48fe241dced0d7a4256a4159764045ebf4a3860625565f42deb4104773d3933ba174b32dd617eafc8c8476a1f6609c4d663005ac91fcd4afed5d71f2f6a3d8b80010000",
    ],
    [
      "ETag",
      "DZnJY9AG1JfOmLHEZRucgQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "1f8b08000000000002ffedd34b7282300000d0bb646d1d842ada9d11a1c1f11b82c0868918500810132c42a777afd36bd47787f70d689230a5e2a62e58053e4047f5d93019aec4145a6dbe6a2c37b0d791dbfa45cdb29b4d1567225a3007b530d14389f47c8a3d216383f6292cbc07df6cc9dbbbe6e6300bb5cedf18e126e287f9542b889bc23be299d7a6a7d4e7c7f328504b0f579447939dd210ab89b724c2b4f6f8f295979a38e9a76dd0c7e627f1e6f52571fa06ada43db95d5938be23bccb698f32562e6dbe870e86476c574d6296bedd9e4b4bee05a9d62acd0c315a1cf0c80c166d4e9ce1cbcbff0506803dc45532155f9fdb8df16c36007ff5e3a613ecf91f322a99043fbfb014843919040000",
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
      "Thu, 02 Sep 2021 19:11:41 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-123-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d6fa24014fd2b64f6b52a888a9898adb174d7447145b4d9dd6cc8305ce8b4c82033b4691afffb5e86da6dd364fbc4ccdc73ee39f7836772cf8b844c48ccb3630dd5d3973b11930b028a66f8badff88f1e1f2cedf571ffeb9878fd9b8df7b8994e11c11b96a48732878e1475c5404e76db6e5689baa495101d4cd4b1fa76c71ad9e6c8741db76f3b361225e4e99217f748bf55aa94935eef2cdecd84c872a025975d260eafefbd877eafacc41d30257bef357b28237b9fa87ecd05a38a8b62badba2835a4215c181f21c3dfca326f1e5fbdc5d4e0fdd0cc10f9c01654cd4856a7c610a268a946775a5b392c933d13edf1cc8d65b7af3d06022af0f4554d0035c18095534524f2518d7c17a652cfceb75b09a858bb51f6de7dfbdd5ac3b5f2f772b7f6bdc7cf702cf5034ce41738da971a96f3e5e503f01a978a1d5c3e6b9517ee9d0e2e3601a024a4b688391638ea83536dd388d1d968eed619c9a10c7e3d819523b36993b80411203459e16d52c5a886238a47d3b8e87914d074e3488fbe3c8b54756e450a04e62b9d402464e17e4b1e20aaeb82c85e46d87c84db008bd280c76fe7c167aba8494d6b9ba6a8d3505bcf5a8b04004fda7a65313e502959a762ffcd00b66f370b1f7da092f21a3ec697bc419a7349780685a61f314542b9160c3883f5b795708d613fb710e4a32f9fd4c9a9e372edeb4fc951ee2001bbb4a7fc9360c16fe376de78cd8d3bcd69087f6404ab47c8bb5a1ebd31f44e296b659c866e7053f49fb14400a1514ecf3692258073effdbce9b8f60dc7dd4910aefb83c4c362aac827689b8aef785ed9a96e58e880657ea43cceedbe7b635399a8c708042bd94d46e3e56da8ad5f21584419cbfafdb75fa0bc318bbcd7b040000",
    ],
    [
      "ETag",
      "VQNwEi4L3OqVZqdE2WQEwQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-123-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d925b6f82401085ffcbf4b198782b2a890fda626b8237c49736c6ac30200a2cdd5d34c6f8df3b4bad6dda26ed0bcc0cdf2ce71c38c12ece02b0601d47af058ae34d846aa60b1765912849b79c6712c100542c2232ddc7bbf6edb4beb08b483a93e7c1f1701bceba5d22a4bfc19481758230c6249060bd9c206329d29acf9322cd566567803ae67a38f7dce1f891fa9407ba1f2f1ca7d7776c381bd7c58029b62af97fac2dcf066cf9dac51005663e6a2db9e05bf4d550db942ccd13ac485e081f259470f92012bcc899e0bc42934aaddea8d4cc46d5ac765a9d7aa3d52032e13e5331cf085ecc492028ae58e2f203d90493005196e4382caf7b1ac741e94497c3b167364b815f01d216c609aefe0649f086d177f8c02e197ce758ca8b4c5da98133e9fd761c85fa79d443cfb37f1052515457c41b8eecb9d71b4d35b7bc78ef1f15caa9e094a4441d62adda6cdfb5ccea7baef75c674defb19428d0009fd1eff1142bb04296483cbf0190bd36497c020000",
    ],
    [
      "ETag",
      "mvik8+P2UEugsLOZFyw+fQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-124-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8554fd6f9b3010fd5790f74b2b250102852452d56509eb9852d211d2aafb5062c050af7cd53699a22afffbced0b4cdbaad1212d8f7debd77e7330fe88e16311aa190a6f73561db773fcb1075101138855d6c17d753e3ab7a7bce19df6cb3dabe679fc7a7a780a092c5715e65a4cbcb9a45848f968b5ecacabac2ac2cbb90a8abf7cdae6e199aa50ded61dfb00d20729225335adc01fd56888a8f54752fde4bcb32cd08ae28ef4565feb4af6efa6ac5ca9f24125c3dd4544186ab6fa89e656584052d8bd3e5021cd49cb015c931cdc0c333350edf1fe6ee519cf752006f68447014957521a42f4811954542d39a3559d1e801353e5f7ca0853373268132992fbde0688d73495e1f2b982bfb454759435109cdc88ac66b1959adaa3be5a33fbf800838b8c59cf0b572fdc9f11d4559c75890b5f2bdd634832867cad89b2a87195c4f597a9eb30894a3b363e5dc9f2f2f950f370718b01e132e68d1180f70981169fab1b9eeeb3395042cc0481b5cd99a85f581360c93d08e92817112261a09c341689f6023d4a2a149cc3824187842666f58b8807699c3c84a4ccdb6634db3433b1924a661eb913db4b0892ddd48886e1b3146bb0efac5a82053caab92d3b6c1e8da77036715f84b6f320e9ca68c04d79998b6e664112f7d0a281240ffa96b27a3b40425795aae1738fe7812b8574e3b203392e268bbb887114970c609a031c33911845d9431340d5dce176ee0cebdf10c18cda95fee111c8dbe3d3c13826dd57459346f349505ec5e24bcc259dd0036ed07ea6b7dadabf5bbfa09daed3affce34f6fdf10da863c6f0f68f1854649992fe179d06dfac5aa77b5d1d49b52717072b0bed7eece0e920b862ad16fab274fc1bd46ef924218c14d1dbf304e026f0f6af627f6d010c171774b880358c6fc4a54ac4483bc6346fdcb7ec2134cf6a7e340233f12ad61f9ceccf4be69019494e0af158527b6d9bbec950cd9f401084e9f35cef1ca2bf01de26",
      "218e38050000",
    ],
    [
      "ETag",
      "a7nWD3Z/hGsrsvylu7qrJA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-124-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6a",
      "c24010fd97e9b109a81145c1439560856035ad1e5a82ac714ca3d94cba3bb188f8ef9d8dd2530fbdecbe79f3def2de5ee098973b18c236cfbe6a34e7870c79e9408cb62ed8ca555169113c40569928fba74330ddea656f3d8dd6e1e2e5bd3b79d4cbd1481436fd44ad6078817d8ec5cec2f0e302a5d22836a5a92e59447caedc3c9bbf85d3301642d3ce11f355143d8da310aedeaf69b3a98effb224570f0eb48d718f06cb145d86cad001539eb97a56e9aa40df526d52b4d0889b4566a8ae9421f285f1db9daedfee05ad5e6bd01f74827e20ca8252c53995225ebd4a38606255c4f42df5a02302d34069ba6fce5343bb12779438fcd7aeed76c9fdc1f199d12e0c493c8b2e59eb9672422e394b2336357a902af9e4e79c6ff3f507212ca7adc1010000",
    ],
    [
      "ETag",
      "7vj3GbmQ6VGLVEPOZ4C+mQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00e0bbf4590cdd20c0de20849f159d0a8ed897a694aa15d04a715896dd7d66d798df1dbe6f4019e34a91e1d2f03378039abe78733647d20dc2f150ca4f7886b5ecdbcc972bb436e03ad417ebbacfd90b84e58e1e5341c42a433aaec60dcb77682b6c3a689ce5fd029fb43d365891e5218ca33159d403f63919cb4e6c83c9abafb020e15029a357ce2911c7a8df5441daa40ef4b134de7303c516f66b63d26eeb7c646697dda2db8658dd3ed66943a77d67966d51a0b062853399d8b594890ec75bfb9598d554af83e45c6f31656815b9cb3b3a4dbcb1e74f4fff1798017e97a2e78a88c7f657dbf366e0af3e19b4e48fff01a73defc1cf2f48a2ee6119040000",
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
      "Thu, 02 Sep 2021 19:11:42 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-125-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b4fa34014fd2b64f6ab6de94b4a936625886b9396ee02d598cd860cd30b8e52069941634cfffbde19acab31593f3133f79c7bce7df042ee79b5237392f1e2a185e6f9db9dc8c80901450b7cbdf5ae1e42b899f9eea4bcdede0fa5af361b6fb14004d72c49f775093d29da86819c6fe37ed188b6a68d103d4cd41b8ea6bde1e9d83eb55dc71d8d9d31122594f98a57f73abd52b59c0f0647f17e21445102adb9ec33b17f7b1f3c8e067523ee802939f8a839401939f842f57b2918555c548b6d8c0e5a094d0a7bca4bf4f08fbacbce3ee6ee73baef17087ee40c2863a2ad94f6852998a8725eb48dc94ae62fc4f87c772071b00afcc462a26cf7555ad13d9c583baa68aa9e6bb02ea2cdda5a86179b68ed25cb4d98c6fe65b0f6fafe66b55d87b1757d194481a5685682e15a0bebccdc42bca0fe0ea4e295514ff4b3567eedd0f2f3603401a52574c1d4b14fe97066bb599e392c9f8da7596e4396cd32674ac799cddc094c761950e41951c3a295a8a679e6ce268e930285593a61344f3327a7296536b377a3a1339cbae470429e1aaee09ccb5a48de75885c47cb244893681bfa5e12981272da96eabc33a60b78ef51618108fa4f4d071de5029574bb976112449e9f2caf826ec22b28287b8e1f70c6392d25209a36d83c05cd5aecb06124f4d6c13982cdc47e1e8392cc7fbf10dd73ede25dcbdfe8090e50db55e64be2245a863f8c9d23e28a96ad813c760752a3e55bac0d5d1ffe2012b7b4cb427e6d83e886744f11e4d040c5be9e26824de0ebbfedb8f908c6dd471da9f08ecbc3a456610d744bc44dbdaf6cd71e39ce881870a33ec55cc73eb64de7d019610f957a2da9db7cacb4136be51b088338ffd0b4ebf017f46979427b040000",
    ],
    [
      "ETag",
      "hAVqNeY8C94lWUk1sCtOOA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-125-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d92414fc2401085ffcb782d095068b509075444928208e5a2216469a7b5d276eaee568284ffee6c55346aa2977666facdf6bdd7ee6193161178b04e93a70ae5ee24417d6b8a19aa2ad38a6f25150ac102d42261f2f4c56f254f6ee0de2dc89637f66688dbe1b6d76342850f980bf0f610a798450abcfb3d1422475e0b29abf262557716e85d6986f360369a0cb9cf2932fd64e1fbfd737f0007ebb818092d5635ff8fb5e5c182475acf3046894588464b29e911433d323695c8cb0c1b8a2a19a2821aae1f2492aa5248a2064f1aad76b7d172eca6d33c73cfdab66b33995128744a05c38b390b044d5a6433dab24d70189075c98ee3fafacce334aa9d987234099c4e2df02bc0dae234c3d5df200b7e10fc1d3eb0f70cbe7322a7aad047eacabfe9ff761c87fa79d4653f18fc2094e6a88e48301a0fe6417f3c35dcf2ddfbf94ea39a4ae224159a105bcdce69d7759a6fb95e90c99adfe36959a105a1e0dfe33ad5e0c5225378780544fde83d7c020000",
    ],
    [
      "ETag",
      "8zL1gq7T7ZUo3rO3kGewGw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-126-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "696f9b4010fd2b68fb25957c2c60e3438a52d7212d928d538c1b256d652febc1d90658975dd24491ff7b0788933a3d2221c1eebc37f3e6e281dc886c4d8624129b1f05e4f76fbecb88340868b6c1dbf6d9f8cee4d6fb81d9bf4bd4557e719a4ee0e7f1312244c9522cdd26d054b2c839a8e162dedae4b2d8b25cca263a6a9a96d3341d9b3a74d01b5876cf46a282249e88ec06e9d75a6fd5b0ddde076f6da4dc24c0b642b5b84c9feedbb7567b9bcbefc0b56a1fc66c6318d57e25ea492239d34266c78b392a2814e44b48994850c333751dbd3bf4dd122c6d6d107c2b3830ce6591e95217bae0328bc5a6c82baf64f8402a9dbf7d90b93b71c7a1319e2dfcf068c5d292bc7a6b3065ec0f0d638549c52281a558af4acb72b9bd31ce82d9142da8e09a29502be3e2a31bb886b1521ad5ad8caf05a5361827c6c83f350e5d78beb1f07d771e1a47276f8d0fc16c716ebcbf3cc0a0f635282db24a79c8a2044ad58fd5f5fe6c6a49601a95d4c6658f3accecd34114473d1ef7ed6e145388a27ed4eb323ba27cd081ce3a02863c5d7aaf582c935987811df7c1743ad48ecc6ebf476387f76c6e0f5897f74da7b706bc068bec1ae4672e349c0ab5954ad41526178117bacb3058f8e351e85669c4ac48f4692dae4ce2779d1a9344d07ff2da9556213152d92ecf0fdd60340ebdcf6e3d2113d8307e3fff813312b34401a259ce52d0904fe51a8b46ce67732ff466fe68828caaede77b8422c32f0fcf84f07e5b5559576f127a53ecd1687a5e69d8833eb3a4a850b7f507b1a8459bd46a9addd0b486a63d343b2d4ae915d9ed1aff763e0a82d1250a6279ceee5fd83049a753d2ff12b5c257a75afc5e8549ca684f9a0e4e0ed97ddbe1d320b876752cf269e10697a4be0a20861c32fefa8821b832bcfefbd8af32827199310eae851638d15c9551780ef5648bb4525fb307d4ee3bd5",
      "cf47b35cbfb4754c73b06f61e9a3f4082964fa31a57a95abba95a6423d81d08803e97bfe07b4fe027577a49d4c050000",
    ],
    [
      "ETag",
      "/FCx1c2B918xlsZrWDmLew==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-126-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "40",
      "10",
      "fd",
      "97",
      "f1681b2924104838806994842054391142b6edb416da9dba3b1591f0efce16e2c98397dd376fdedbbcb76738143a8511c445fed1a039dde5c82b0722b44dc956ae9ab445f00059e5a2a4f8e12bd4c76c8de9f7fd00874b5e052f93f158143679c74ac1e80c5981656a61b4398356158a4d55d46816119f6a37cf166fe15318095151ea88c57a3e9f4ce7215cbc5fd36e571ffe65d95e3cd8531c61860675822e436d688f09cf5c3dabaaba44df526312b4d08adb456ea8a99521f285f1836edf0ffabd4ebf331c0cbbbd414f9425258a0bd2225ebf4a386062554674947ad0158169a134cddaf3b3a55d891bda3afcd72e70bbededc1e989d12e0d493c8b2e59e79af2915c7296466c1af42051f2c9cf055fe7cb0f60c43c0ec1010000",
    ],
    [
      "ETag",
      "ob/xEnwfUedz+7e9PtQ1OA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "4b7282300000d0bb642d8e699084ee80a034f89f228c9b4c80a808680af2b3d3bbd7e935eabbc3fb062249645df3fb2d9757f00e06f1668e93b1af884dbb4bd0cde62c86842cb08a5284e9ac64ce71ed137ab4cc2932d9e008b345296b8bbaf00874779bb68652d375afcc5162897561df701824ec2bc85c9411ad99c688d7d5f5b1d54f939449345bf927dabbe490859f1475cdb21cda22f61e4947b9a16e86882fa1b6510862b477ced8b577b6d12c979e05e76a75a8e2d68f521853dd72cb95415b41ecfb9eb305e67939d99ffbe84359476f33b9c05e9d703e7e79f9bfc008c85e6595ac79f6dc8ea6a639027ff5f97d50f2f9df96a29215f8f9055298977819040000",
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
      "Thu, 02 Sep 2021 19:11:44 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-127-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fd2b64f6ab6da12f4a93666d2a6a4d4b77816adccd860cc305472983cca0694cfffb5e06eb6a4cd64fcccc3de79e731fbc90075e24644a629e3dd650edbfdd8b989c105034c35776ab02be1fde5facad5fd95d7645afe9fe6a3e9b2182372c4977650e1d29ea8a819c6e836e5689baa495101d4cd4b1fa76c71a0fccb1e9d84e7f600f9028214f57bc7840fa9d52a59cf67a47f16e264496032db9ec32b17b7bef3df57b6525ee8129d9fba8d94319d9fb42f57b2e18555c14b36d800e6a0955043bca73f4f08f9ac4a71f737739dd7533043f710694315117aaf185299828529ed595ce4aa62f44fb7c772081bb7217a1c1445eef8aa8a03b383112aa68a4f62518e7fe666d2cbdf38dbf9e87cb8d17058b4b773def2e36abedda0b8c9b4bd7770d45e31c34d79819a7fae6e105f513908a175a3d6c9e1be5d70e2d3f0fa621a0b4843618d9e6985a13d389d3d866e964308a5313e27812db233a884de60c6198c44091a745358b16a2888793499f8d93c81e53331af64d2b8a93144f0998d688a696e90cc9e1843c575cc11997a590bced10b9f197a11b85fed65bcc43579790d23a5767adb1a680f71e151688a0ffd47468a25ca052d3eea517bafe7c112eafdd76c22bc828db078f38e394e612104d2b6c9e826a2d126c18f1e66bf70cc17a623f8e4149a6bf5f48d3f3c6c5bb96bfd1431c606357e92f09427fe95d683b47c435cd6b0d796a0fa444cb77581bba3efc41246e699b85fcdcbafe2d699f7c48a182827d3d4d04ebc0d77fdb71f3118cbb8f3a52e11d9787c9468555d02e11d7f5beb21d73688f4744832bf529e6588363db9a1c4d46d841a15e4b6a371f2b6dc56af906c220cedfd3ed3afc05",
      "1a23face7b040000",
    ],
    [
      "ETag",
      "cYtSiy4jGM1ZghgJaVayJA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-127-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c2401085df65bcb424a56091265c14452101e4a7e885316469a7a5b8edd6ddad8410deddd98a68d4446fda99e937db734ebb87e7348fc083559abc9428776709eaa92966a84aae15dd0a912b040b50b384c851d08da64ed7769287713dba77b6e7bce86f3b1d2254b8c68c81b78738451e29f01ef790b30c692d14bcccf265d559a0778519ce83d9607c4b7d2622d38f17c3a1df1df6e0609d1623a6d9b2e2ffb1f674b0602356338c51621ea2d15248b1c1500f8c4dc5b282634d895286a8a082ab07891465c1a410359ad4ea4eab56771bb66bb75b6da7d16a10c945c8742a7282177312085a68c667624b36c125405625398eabeb2b8dd3a87262cac138709b95c0af00698b538ecbbf4112bc66f41d3eb06306df39968932d727ea6678e7ff761c85fa79d4b51ff47e104a53542724188c7af3c01f4d0cf774f4dedd6954132928498526c4baddbcbc68b9f67bae57c2644deff1b42cd18290d1efd14f357831e30a0f6ff58ca0b57c020000",
    ],
    [
      "ETag",
      "MTBdQ2B02gWN1dV2w+lpHw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-128-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8554fd4fdb3010fd5722ef17904a9b366dfa2121d641d8329594a529887da8759c4b302471891db60af57fdfc5a140c736a448897defdd7b773ee781dcf23c222312f2e4ae8462fdee4684a44140d10477adcf5f299cb65b6e787b77f3ab3c9944c2cf92c34344f08a2569b64ae1408ab2602047f359332944b9a285100798e8a0dd191cb46dcbb4cd617fd8b1fa161225a4f184e7b748bf566a2547add656bc990891a440575c3699c89ef65bf79dd6aa1037c0946ced6ab65046b6de503d4a05a38a8bfc703e4307a584620119e5297a78a646e1fbdddc4d4eb36682e07bce803226ca5c55be30051379cc93b2d059c9e881689f2f3ec8cc9938c781713c9d7bc1de92661579b96f50696c170d638945c53c85058f965564b158dd1aa7fef40c23e8e09a4a904be3f293e33bc613cdf85e9aa605c69131f64e8cdd1cae67cc3dcf9905c6ded1bef1d19fcecf8d0f573b18341f81543cd7d6031aa650d97e6caffbfa542b025568a50e2efaa64ddb037318c6619fc503ab17c62684e120ecf7a8159a6cd8856e1402459eaab26b16cdb161781ab6c542d61d74ecbe195900ccec462660aa61bbd3e90ddadd78d08bc9a6417e165cc109972b2179dd6272e9bb81b308fcb9773c0e1c5d464ccb549dd4e6aa225efa54582482fe53d7a68a72814ad579b95ee0f8e3e3c0bd70ea11994042d97a76874312d35402a269413350509c89089b46cea7333770a7de78820c7deee75b8424a36f0fcf8460bdd25d56fa4d4e27d3716077b5832de482a6a5c6dcd71fa4ddec2162d3f8779ab1ef8faf509a16055dff11c3726c4dff8b82c6eb556df34991546adb5567676593cd8f0d3e0d8237acd6225fe68e7f45ea2d1f622820676f0f138275e0ed3fc5f6d62218ef2dea48856b9c5d262b1556403dc33cd3ee6bf6d0b4bba64d34b850af62fd8ebd3dac2a47951132c8d56349f5add57dab42a57c02611047cf73bd8f18fd0d166c58e737050000",
    ],
    [
      "ETag",
      "3JZaeF1/IbkqjxuDLdoRmg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-128-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d6b023110fc2fdbd73bf003b40a3ed462ad20a25785d22212e37a9ede65cf6453b1e27fefe6943ef5a12fc9ecec4c98c9050e99d94017d6597af468cf0f29f22c80049dcfd9c9559271081120ab5494bbdd70f8fd729cbe4fd8641ffe349b97a84fbd9e289cde61a1a07b816d86f9c641f7f302461528365590372c223e97611e4de683e12011a2a04d20268bf1f8a93f1ec035fa35ad56e5e15f96e535823dad13dca245a33164282ded51f328d473aa28738c1d79abd14125ae16a9255f2a4b140b13d71b8f71bdd5acb56a9d76a7d16c37459993569c9111f1e24dc20113ab3ca193d48386086c05a5e9b63abf2a3a94b8a365c07fedea61b7bc3fd83f33baa92589e73024abdd523e5348ced288adc708b4924f7ecdf8365f7f0053b86713c1010000",
    ],
    [
      "ETag",
      "hhGGzFqPXNtniZuwQTpecw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "7282300000d0bb646d1c522a9fee40ca476410a116d96410d3202a62120dd0e9ddebf41af5dde17d83b2aa08e7585c8ea4056f60285fcc69350d3bc37664d377c44dc56da132354e9c793cee90987d44bdcd2336a03af87a2fec02a6114930baba98096bb0b2454e97e50ad3bcb9064a63a13e4d752204724f57b8f78f27da6a5e45b5c6732a3798df7623a575521398ae62c92fae6eee3586cad0204272815ac34c8cb02f8a723f5ace66f949075d55d6be77e79adcc69b85dc9dd30c4a6905f93d1fb7a6f0f3268787385e5ec2621b6178d6a162bf66abacbdb9d3a7a7ff0b4c00e9bb03231c1f1edbd599694ec05f7d2c868e3cfedba46484819f5f88e6ecb919040000",
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
      "Thu, 02 Sep 2021 19:11:47 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-129-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85536b6f9b3014fd2bc8fbda24e4498814ad5142d74809d980b49ba6091973a16e01536c125555fefb2ea6e95a555a3f61fb9e73cfb90f9ec9032f623223114f1f6ba89ebedc8b885c105034c5d75c30ab66fc6a650fccc3f2677d33c88fcbe37c8e08deb024cdcb0c3a52d4150339dbfbddb41275492b213a98a8d31fd89dfe64684e4cdbb207436b88440959b2e1c503d2ef942ae5acd73b8b775321d20c68c9659789fcf5bd7718f4ca4adc0353b2f75eb38732b2f789ead74c30aab828e67b1f1dd412aa1072ca33f4f08f1a4797ef737739cdbb29820f9c01654cd4856a7c610a268a84a775a5b392d933d13edf1c88ef6c9c65603091d579111634870b23a68a86eaa904e3cadb6d8db57bb5f3b68b60bd73437f79ed6c17dde56eb3dfbabe717bed788ea1689481e61a73e352df5cbca07e0c52f142ab07cd73a3fcd2a1f5c7c134049496d00643cb9cd0fed4b4a324b258321d8ea3c484289a46d6980e2393d92318c51150e46951cda2852822db1ac7f6741cc6b649c3d1c41c87d37808617f0263cafafdc48a46e474418e1557b0e2b21492b71d22b7de3a70c2c0dbbbcb45e0e812125a676ad51a6b0a78eb51618108fa4f4da726ca052a35ed5ebb81e32d96c1fac66927bc8194b227ff11679cd04c02a26985cd53506d458c0d23ee62ebac10ac27f6fd1c9464f6fb99343d6f5cbc69f92b3dc001367695fe123ff0d6ee376de78cb8a159ad2187f6404ab47c87b5a1ebd31f44e296b659c88fbde3fd22ed9307095450b0cfa789601df8fc6f3b6f3e8271f751472abce3f230d9a8b00ada25e2bade17b66d5ac3e9806870a53ec4c693d1b96d4d8e2623e450a89792dacdc74a5bb15abe823088f37775bb4e7f013027d91e7b040000",
    ],
    [
      "ETag",
      "moc7uciFD920vCXuV2mwCw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-129-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cb78a509154b5b921ea8ad4a42ab527a50639a1586babab0b8bb689aa6ffdd59d46ad4442f30337cb3bcf7600b8fbcca21803bbe7e6a506d0ed6682e6d91a06e84d174ab65a5111c40c3d6442e074938987829af066239edb9d7b5b8e297a311113abbc79241b08582a3c83504375ba85889b49649d194d5aaed1c309bda0e176912cd4fa92f656efbf9328ec3713c859db35fcc9961ab96ffc7daedce8107799760810aab0cad965ac907cc4c646d6a56d6023b5a362a430d2ddc3e582bd9d44c49d9a149a77b38ec747dcff5dd617f78e8f53d2285cc98e1b2b2112c482018699848e40bd9049f00d596e4b868afcf34e679ebc496d13cf58f5a815f01d2567081abbf41127ccfe83b7c60ef197ce758299bcaeca993f83cfced380af5f3a849984e7f10da50547b248d66d3451ace2e2c77fbee7dbc31a82f94a42435da10bbeed1a0d7f7ddb75c8fa5cd9ade1318d5a00319a3dfe38c1b080a2634ee5e01d7b09c737c020000",
    ],
    [
      "ETag",
      "U8RA8D3Tin8lUE50ZplYiQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-130-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85547f6f9b3010fd2ac8fba7d5920021901f52d5b194759952d21168576d53628ca16e094eb1e91655f9ee3b43d336eab64a4870bef7eebdb3cf3ca05b562468846296dd55b4dcbcbbe1316a212a7106ab4655de18e3f7ee371971433ff912fd7674ee1e1d01822996c0ab754edb825725a16214cd3b59c9ab352e396f43a1b669196dd3b10cc718f6875dab6f0151d03c9db2e216e8d752aec548d777e29d8cf32ca778cd4487f0d5d3ba7edfd5d725bfa1440a7d5f530719a1bfa17a9c738225e3c55134070795a0e582ae30cbc1c33335893fecd7ee30bcea6400be67846242785548e50b4a105ea42cabcaba2a1a3da0dae78b0f34f7a6de38d4c6b3c80f0f9678a5c8cb430d0b6d17b4b4253495b29c2e58b25499c5627dab7d0a6667900107d75850b1d42e3f7b81a7694b05fa51198645b463cdf54fb47dfec4d722dff7e6a176707ca89d06b3e85cfb78b58701e309159215b5ed10c73955961fb776f2fa4415014bb0d124177dc3c1e6c018c669dc27e9c0b2e3d4a0713c88fb36b662830c7bb497c414034faaea350b17bcb0cd2e4dbb5662987de2d8a60d47d4339dbeed0cbb039cf41dd37628c62645db16fa5532494f985873c19aed4597c124f4166110f96337f4ea36525ce5f2a431a79a78e953429300fa4f5f5b95651c94d4594dfcd00bdc7138b9f09af198d20c93cdfc0e0624c5b9a080c6255e5149cb339ec0a6a1f3d97c124e66be3b05467de6e73b8440a3ef0fcf8470b3ae7759d66fa5e5f46afd1de002e7558db86f3e9069a3edb6f5ef126e10b857208bcb126ffe5efeaff56b7c1d35169ff49052db45ddbdc841db9f5b785a086e56a385be465e70859aa580a6b4a405797b90005c27defe43ec6e2b80e1be828e9010c3dc12a15448499bf965abda7dc31e1a83dec04135b894af728edddd1d94aaa12ad2152de4634bcd6dadf74da52af10482248c9d3ff14f21fb07cee89a792f050000",
    ],
    [
      "ETag",
      "0urj0C+AXtUo0/DJUx6/oA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-130-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "1085ffcb786d93421308241c40ab12914095831a429632ad85b65377675142fadf9d2dc693072fbb336fbed9bcb76738e4d50e86b0cdb30f8bfa7495212f5d11a3b1051bb96aaa0c8207c82a1372fab57c59d8f2313fa6dbdb9be8c176d3fdeb783412c224ef582a189e21cdb1d81918be9da15225ca9a2ac9562c109f6ad74fe7cfd15d148b50d2ce09f3d56c369ecc2268bcdfa5cda63efc6b65dd78b0a76d8c296aac12741e6a4d7b4c78eae21955d605fa86ac4ed0400bb7834c93ad9526f245f13b61e0777a61d00b06fd4137ec8742169428cea91278f524e680895511d3a7c483ae00ba2d2569da9e4791c336c4b1059cb7bf671d375bff3c3839319a8526b167d0390b2e2eafc9396749c4daa20789924fbecff9d237df27c63fdac1010000",
    ],
    [
      "ETag",
      "IxQYPumMivfbFDEKu2fjZA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000d0bb64ad8c0a14d21d90361d40a6415470c3601a955f04137e767af73abd467d7778df20a3940991ca6bc938780553b6820a55bcc6b4d1503478727ca30ab80b37972f0eab284208ed3b8a3d22f886acc3e4e09a189b36c9632f757dc32c64f6c9df83916cadbc5765b0736b4f2c7ddf7e13b28a166d775c6a88585678821728b5aa1e4e6baa1a76e8c77edf9331e9a35dd5467a112eceda40db1a232b39a63171e5b92cc742dff2f302cdd54e1376b60a06afc3acd5719f8a2ede1bac99f8753cf2751ebc38389cdfb133914314ee13ca3f4c9e284f4fff1798013636f98d89347f6c57750867e0af7e2aa7863dfedb2cbbb11bf8f9057195604719040000",
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
      "Thu, 02 Sep 2021 19:11:49 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-131-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4014fd2b64f6ab2db4d0074d9ab5a9a84d5aba52aad9dd6cc8305c70141864068d31fdef7b19acab31593f3133f79c7bce7df042ee799990198979f6d040fdfced4ec4e48480a219be96b62a2ee24b2e7f55d55578256f920bd3799acf11c15b96a44595434f8aa6662067fb5d3fab4553d15a881e26ea0dec416f30b6adb1e54edca13db19128214fd7bcbc47faad52959c99e651bc9f0991e5402b2efb4c146fefe6e3d0ac6a71074c49f3a3a68932d2fc42f57b2e18555c94f3fd0e1d3412ea080aca73f4f08f9ac4a71f73f7392dfa19821f3903ca98684ad5fac2144c9429cf9a5a6725b317a27dbe3b909db7f696a1c144de146554d2024e8c842a1aa9e70a8cf360bb3156fef936d82cc2d5d68f76cb4b6fb3e82fb7ebfdc6df1937975ee0198ac63968ae31374ef5cdc70bea2720152fb57ad83eb7caaf1d5a7d1e4c4b4069095d309a58633a985a6e9cc613964eed519c5a10c7d37832a2766c31d701278981224f8b6a162d4549d96898a6ae1dd9637023c77246914b13c0eb943a0ea4930975c8e1843cd55cc119979590bceb10b90956a11785c1de5f2e424f9790d22657679db1b680f71e151688a0ffd47468a35ca052dbee951f7ac16219aeaebd6ec26bc8287bde3de08c539a4b4034adb1790aea8d48b061c45f6cbc3304eb89fd38062599fd7e216dcf5b17ef5afe460f7180ad5da5bf6417062bff42db3922ae69de68c8637720155abec5dad0f5e10f22714bbb2ce46aef053f49f714400a3594eceb69225807befedb8e9b8f60dc7dd4910aefb83c4cb62aac866e89b8aef795ed5aeec01a100daed5a7d870ea1edbd6e668334201a57a2da9db7cacb4136be41b0883387f5fb7ebf017fc144c557b040000",
    ],
    [
      "ETag",
      "n3tmGbHisZppQTQsWdG/4w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-131-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4ec2401045ff657c2d09582cd28487a255490a229498680859da69296ebb75770b21847f77b6221a35d19776667a667bef6df7f0921531b8b0ccd2d70ae5ee2c45fd608a09aa8a6b45b752140ac102d42c25327e741e36718cd3d5da7f5a055ca6beadb6bd1e112a5a61cec0dd4392218f15b8cf7b28588eb416095ee5c5a2ee2cd0bbd20ca7e16430baa53e17b1e947b320f0fa810f07ebb41833cd1635ff8fb5f9c182b5584e3041894584464b29c51a233d303615cb4b8e0d252a19a1821aae1fa452542593423468d268d9ad46cbb19b4eb3dbe99edb1d9b482e22a63351103c9b9240d042333e115bb2090e01b22ec971525f3734cee2da892907a3d069d702bf02a42dc9382efe0649f08ad177f8c08e197ce7582eaa429fa89be0defbed380af5f3a86b2ff47f104a535427241c0cfd69e80dc7869b1fbdf7771ad5580a4a52a109b1d56c5f5e749ce67bae57c2644def71b5acd08288d1ef7197697013c6151ede005c7209b47c020000",
    ],
    [
      "ETag",
      "dW6QvddeShjEZhLlrgE3sw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-132-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "22ef17d0fa9136699b5642ac838c452a294b5350f7a1d6769c6248e33476601deaffbe8b43818e6d489192f3bd77ef9d7dce03bae569840688f0e5ba60f9e6dd8d20a88698c24b583d5bf39fb979f3ebab43de8f3af6a8b71ecdbaf7474780e0254be25596b0ba14454e991c4c278d652e8a0ce742d4a150bd65b5ebadae6576cd7eafdfb67a1610254be2114f6f817ead542607cde64ebcb1146299309c71d9a062f5b4debc6b37b35cdc30aa64735fb30932b2f986ea712228565ca447d309382824cbe76c8579021e9ea911f9b05fbbc1f1aab104f01da70c532a8a5495bea0041569cc9745aeaba2c103d23e5f7ca0893b724f42e3643cf5c383055e95e4c5a181a5b10b6ac6029a8a79c2e63c5a9499f93cbb353e05e373c880836b2c995c18579fddc0359e9716c6f7c2342d6a1c1b43ffd4d8afe2f9c6d4f7dd49681c1c1f1a67c1787a617c9ced61c07ec4a4e2a9361f6292b0d2f8e3067bafcfb5246005ca5572de33bbb8e5987d12931e8d1dab43629311e2905e075bc4a47d9bd911611878aaacae59381529b15aa619c74ecb8c4cbb135b6d826d937498433ba465473189716453c744db1abacfb962a75c6642f26a93d155e085ee3c0ca6fec93074751b312e12755a992b9b78e953419300fa4f5fdb32cb05289527e6f9a11b0c4f42efd2ad8664c496986e266b1893182792011ae778c514cbcf45049b862ec6132ff4c6fe70040c7df2173b8444836f0fcf847093e95d56fa8d2661e0f967dac00e7189934243eeaa0f34ccc02bda6e6bff2e330c82e10ca4719ee3cd1f3968a76b97f4bf4868bc8e2a9b3bc9162ad576",
      "517b2feaa2ed8f2d3c350477acd2425fa66e3043d552c06296b394be3d4c00d689b7ff15bb7b0b60b8b9a02315c430bb54962a3467d50cf395765fb1fb2db36df59106e7ea55ce723abbc32a6b9415d98aa5eab1a5eadeea7d2b53857c02411246cfd7e7b6fd0dd02fdb7139050000",
    ],
    [
      "ETag",
      "Gqixr0jzZ8b+L54L7qLY6w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-132-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "82401085ffcbf40a0948aad5c4436948b52146a99ab44d63561828080cdd1d6288e1bf77b0a6e79e76df9b6f66dfec054e799dc00c8e79f6dda2eeee32e4cd7089d0b4251b391aaa0d8205c82a13d22fcef70fd1eea573ab6eb12fd57bfab6de6ee673214cfc859582d905d21ccbc4c0ece302b5aa50da54456dcd0271d70c7ab9da06cf41244645c960ac7661f8e88701f4d65fd3e1d09cfed5f2d95b50d031c21435d6310e191a4d05c6bc1cd633aa6a4ab40db53a460357f85ac834b58dd244b638b6eb8d6c77ec3963673a998ebc89276449b1e29c6a8177af120e985895119d653d70e0a6fd8ed1ac35c97483c9ad22239f6878982510eb162d8895fcd122e75fddff00c6741a8280010000",
    ],
    [
      "ETag",
      "Bjw58RUJy1myHVlaZfYPTQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "516e82300000d0bbf45b8c43a0747fa3026205ac9380fe106c3a8109b480435876f7995d63be3bbc6f9031c6bb2eed9b4f5e835730662a9ab33911a6b51af2096eaa813a5bd710c7c23eb9c7332b3b84e35c73e8fb81e84e489528c471ebcb3a6122952fa684ab5a35b23d16d570acd6cdf22bb859c622d38df562883c53dd91f63e86f743c25c335f17cd7e5ac1d2529086a167dc2efd16123c7ec88da4de2ec461c2f46b3285d199ab975269aa9a92f358bac11b1c149bf457a89f0204359f3aa98fec82d83bcdd270fa15d0b817d29fe4e560c0d6cd1745147b68fef4f47f8119e07751b4bc4b8bc7f6a58ed00cfcd54ffb51f0c77f8b672d6fc1cf2ff930340819040000",
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
      "Thu, 02 Sep 2021 19:11:50 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-133-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fbda04087911295aa394ae4809d980b49aa6091963a85bc00c9b545d95ffbe6bd344ed26ad9fb07dcfb9e7dc072fe891d5195aa09415bf3ada3e7f7ae029ba4054e2025e8bc7dbe8b01b737753f0df956736f4cef69f964b4030c512b86a4a3a10bc6b09158b7d342c5ade35b8e57c008906b6e30ceca9634d2d77e68e9c99034441cb7cc3ea47a0df4bd98885699ec48705e7454971c3c490f0eafc6e1e4666d3f2074aa430df6b9a2023cc0f543f979c60c978bddc47e0a013b44d688559a94a3c53b3f4f27dee21c3d5b000f081118a09e15d2d952f4841789db3a26b7556b47841dae79b038abc8db78e0dc2cbaeaa931a57f4c2c8b0c4897c6ea8711deeb6861f5cefc2ed2af6774112ad6fbced6ab8de6df6db2032ee6ebcd033244e4baab9c6d2b8d4b7002ea09f512159add563f5ac945f3be4ff3b1845006941fb6032b3a6d89e5b6e9aa73392cf9d499a5b344de7e96c829dd422ee988eb39462e06951cdc235afb1658f46f93c4b46536225e33ccf9239b19d643acdadd93c751c32b1d0f1023db54cd22b261a2e58df217417fab197c4e13e58af624f9790e3ae9457bd3155c05b8f120a04d07f6a3aaa28e3a0a4daed07b117aed6b17febf513ded00293e7e817cc38c7a5a080c62d344fd276cb3368180a565bef0ac07a625f4f4181163f5e90eab972f1a6e5677a0c035476a5fea2280efde08bb67342dce2b2d390437f400d58be87dac0f5f12720614bfb2ce8dbde0bbfa3fe29a4396d694d3e9e268075e0e3bfedb4f90086dd071d21e10ecb438452212ded9788e97a5fd9ae6dcd672ed2e0",
      "56fe1db32d6b726a9bcaa132d28ad6f2b5a47ef3a1d25eac1367100461fe816ed7f10f1c2f82657b040000",
    ],
    [
      "ETag",
      "gkVSvO4o9LgozmE/peW1Iw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-133-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "ff657cb444b058a4890f45510805b594c4c410b2b4d352dc76ebee564208ffee6c55346aa22fedccf4ccf6dedbeee0292b62706199a5cf15caed518afade1401aa8a6b45b752140ac102d42c25d21b6d47f6c33dcf7d795c56e9493ef0547f737141848a56983370779064c86305eee30e0a9623ad45825779b1a83b0bf4b634c369180c2737d4e72236fd64e6fb5ecfefc3de3a2cc64cb345cdff636dbeb7602d96012628b188d06829a55863a487c6a66279c9b1a14425235450c3f583548aaa645288064d1a2ddb6eb41cbbe934bb9deea9ddb189e422623a1305c1b32909042d34e381d8904d70089075498e93fafa42e32cae9d987238099d762df02b40da928ce3e26f9004af187d870fec3d83ef1ccb4555e80375eddf7abf1d47a17e1e75e585fd1f84d214d5010987e3fe34f4c677869bbf7bef6d35aa3b2928498526c456b37d7ed6719a6fb95e0a9335bdc7d5b2420b2246bfc720d3e0268c2bdcbf02a7f7bfbf7c020000",
    ],
    [
      "ETag",
      "AKyK3XQlmLr+pug/mHAsEw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-134-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85547f6f9b3010fd2ac8fba795f283041292485597a5ac434a4946a05db54d893126750b9862d329aaf2dd7798d236ebb64a4870bef7eebdb3cf3ca23b9645688242b6bd2f69b1fb70cb43d44254e22dac9271df5fae02374b0c3df9769904b1158ea627278060154be0344f685bf0b220544c8255675bf032c705e76d28d4ee1966bb3734f4a13eb6c67dc33280286812cf597607f41b297331e9761bf1ce96f36d4271ce4487f0f479bdfbd0efe605bfa5448aeea166176444f71dd5d384132c19cf4e82153828052dd634c52c010f2fd428fc7858bbc370dad902f881118a09e165262b5f5082f02c66dbb25055d1e411299faf3ed0ca9edb335f9b2d02d73fdae0b4226f8e352cb42668691b682a66095db3685365d6ebfc4efbec2d2e20030e6eb0a062a35d7db13d5b7b59da683f4a5d378876aa4ddd33edb08ae36a81ebda2b5f3b3a3dd6cebd45b0d43e5d1f60c07e4485649932efe330a195f1a70d76de9e6b45c01294ebe4dad287b837d2c7611c5a241e198330d669188e426b808d502763939a514831f064555db170c6b31e210631e348a7036b44ac30c6431347033c3063231a993d23c2d6c8c018ed5be857c1243d6322e782d59b8cae3cc7b7d7be17b8b3a96fab36625c26f2ac365735f1daa7842601f49fbef655967150aa4ecc717ddb9bce7ce7d2ae87644eb798ec56f73026314e0405342e704a252d2e78049b86968b95e33b0b773a07863af965831068f2fdf185e0ef72b5cb52bdd1caf71cf75c19681097382915e4a1fe403807af68bf6ffdbbccd4f3a6d7208d8b02effec8413b43b3a2ff4542e15554db6c247ba8526ba2fe413444fb9f7b785a08ee58ad85be06b6778dea258fc6b4a019797f9800ac12efff2b9a7b0b60b8b9a02324c430bb44542aa4a0f50cb354b9afd9e35ecfb274a4c0857c931b9be3e6b0aa1a55459ad24c3eb554df5bb56f55aa14cf2048c2e8b9eadcf6bf01e74a34c339050000",
    ],
    [
      "ETag",
      "c92TPSUNnl30lXVlUf7b8A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-134-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "ff",
      "cb",
      "78",
      "a44d802a04120e6288121bc42a2743c8b21d6aa1db29bb534c43f8efce16633c7ad99d79f3cde6bd3dc3212f5318c336cf8e35dae626437ef54582ae2ed8c95551e9100240569990b13e36fb66d474d20e1ab350cbecf925ca2613219cfe44a3607c865d8e45ea60fc71865219943565a82e59206e2adfcf17efb3c7592282a1d40b8b551cdf4fe3195c82dfa5cda63afc6b657d09604fdb047768b1d4e83d5496f6a879eee33965aa024347b5d5e8a085db4166a9ae94250a45097bd16dd81b44dd4177341cf5a3612464415a714ea5c0ab3731074cac8a84be241ef405b06d294977ed7912f9ae0d716a01efedef6cf03bebf9d9fae7c169c3e89696c49e43efac7b75f940de394b22b63506a0957cf253ced7fef20dd941ab70c1010000",
    ],
    [
      "ETag",
      "Lcqyjy9y+d+emmNaPgKO3g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "ffedd3516e82300000d0bbf45b881b2daefb1ba062c020826ef387142888148402966276f7995d63be3bbc3b204942bb2eeaaf25adc13b90e415ab89ea346f862572a91338a21eedcaab810766b407111dc6fa839f4216dbe765769dbb9e86499a1c2b52e95ec5eb343345caacedb0ff9aaf976551c59b00b1f085b4e36670a873d19af3110fc12072969f3364d2e562aba34b6ed92b86ebd59e9b91d5bb63ec63d9ca4459ad75b815a5a5189d6fc6226b743b59f46618644a7f82f90d76ccde4d9e8e180bb92152ff934d7001bf65245a5abb59ca6b06a7423653789b5fd4a7a7ff0bcc001d9b82d32e2a1edb3584f10cfcd58f7ad9d0c77f83124e39f8f905d278413a19040000",
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
      "Thu, 02 Sep 2021 19:11:52 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-135-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "14fd2bc8fbda04129a90448ad628a16ba484743cda55d3846c63a85bc0149b545195ffbe8b69ba5695d64fd8bee7dc73ee8317f4c8cb04cd10e1d953c3eac3b70741d019620a67f05a3b51d498c930ca57cec14aeff6feafe8fa793e07046f59121755ce7a52343565721605fdac164d856b217a90a837b047bdc1d8b6c6d6d4990e6dc706a26479bae1e523d0ef95aae4cc344fe2fd4c882c67b8e2b24f45f1f66eee8766558b074695343f6a9a2023cd2f54bfe78262c545398f0270d04856c7acc03c070fffa809b9f898bbcf71d1cf00bce794614a4553aad617a4a0a24c79d6d43a2b9abd20edf3dd0105eec65d86061579539471890b76662458e1581d2a665cfabbadb1f62e77fe7611ae775e1c2cafdceda2bfdc6da2ad1718b757aeef1a0a939c69ae31372ef4cd830be8274c2a5e6af5b07d6e955f3bb4fe3c989600d29275c1d8b1c67830b1a624250e4d27f688a4162364429c11b68945a7e7ec3c210c034f8b6a162e4549ecd16438c0699cd2c489cf1d3c89c9609ac49645ec24c163361e61743c43cf35576cc5652524ef3a846efd75e8c6a11f79cb45e8ea1252dce46ad5196b0b78ef51418100fa4f4dc736ca0528b5ed5e7ba1eb2f96e1fac6ed26bc6119a687e009669ce25c3240e31a9aa758bd1509340c798badbb02b09ed8f52928d1ecf70b6a7bdeba78d7f2377a08036ced2afd4541e8afbd1fdace097183f34643f6dd015560f91e6a03d7c73f80842dedb2a09f91ebdfa1eec96729ab5949bf9e268075e0ebbfedb4f90086dd071da9e00ecb4365ab426bd62d11d7f5beb2a78321cc196970ad3ec51cdb3ab5adcdd16664052bd56b49dde643a59d5823df401084f97bba5dc7bfb0bf756e7b040000",
    ],
    [
      "ETag",
      "r7UUu/d2UlD7y0fYvRXUPw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-135-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "401085ffcbf48a098aa29278d06a5b13b516f1601a635618100bbb747769638cffbdb3d4daa66dd25e6066f86679efc1119e521e8107db34792e511eae12d40fa6f051959956742b04570816a0660991abd56cd728864e7bb997bcb479a7ebc787a4d72342853bcc1978478853cc2205dee31138cb91d642919539df549d05fa5098e122f0c7b35bea7311997eb69c4cfa83c9084ed66531629a6d2afe1f6beb93057bb1f53146893c44a3a590628fa11e1b9b8ae5458635254a19a2820aae1e245294059342d46852ab3bad5add756cd7eeb6bb0da7ed10998990e9547082970b12085a6896f9e2956c824b80ac4a721c57d7171aa751e5c494e359e0362b815f01d216a7196efe0649f08ed177f8c0ce197ce7582e4aae2fd4cde4beffdb7114eae751c37e30fa41284d515d90603c1d2d82fe746eb8f5d9fbe0a051cda5a024159a10eb76b3d36abbf67baed7c2644deff1b42cd18290d1ef71976af06296293cbd01018d06477c020000",
    ],
    [
      "ETag",
      "YYNh2pD37Ujrnu0n89Rfyg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-136-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "7b",
      "4f",
      "db",
      "3010ff2a91f70f687de4d124b412625d1b46a592429a82d036b54e722986342eb1c354a17ef79d130a746c43aad438f77b9d7dce13b96779427a2462cb87128acda73b1e9106014997f8f6c26e0fe4e46cd8750c180f32697c764fc797c7c788608a25e86a9d4153f0b28841f466d3d6b2e0e59a169c3751a869584ed3702cddd1bb6ed7b45c0b8902b274ccf27ba4df4ab916bd767b67de5a72becc80ae9968c57cf5f2befd68b6d705bf83588af6be671b6d44fb03d7938cc754329e1fcfa698a01450cc61455986195ea949f4655fbbc5e8aab544f0238b81c6312f73a972a144ccf3942dcba25225bd2752e57cf340a6ded81b84da6032f3c383055d29f2e250a342db2d1ada029b4a590673962c54653e5fdf6ba7c1e41c2b98e0960a100bedfacc0b3c4d5b2454c242fb51eaba156b275adf1f6afb0a235f9bf9be370db5839343ed5b30995d685f6ff630183d0121595e050f6994810afdbcb9a3f767aa08546290ba387775871a477a374a23374e8f2c3b4a7588a2a3c8b5a915e971b7039d24028a3ca9d42b16cd79de0147878e9344a860391198d4b68da3a8ebb8916d38719298aee3261d936c1be457c1240c995873c1ea0d26d7c128f4e66130f307fdd0abda486999c9611d4e35f136a7c42611f49fbeb6aaca383aa9d31af9a117f407e1e8caab07640c4b1a6fa60f382229cd04209a167405128a739e80ba1b93e9281c4dfcfe1819d5a95fec1082f4be3fbd12c2cdbada6559fd93a16a60fb46f08a66650578ac1f88a99b7a53379b864db6dbc6bf95fa41d0bf41775a1474f3470d3b723a8afe179f0a5fadeaa43b5f8328b797147b2b876c7f6ef1d72078c56a2f7239f3821b52bf0a208502f2f8e379427055f8f853b1bbb608c68b8b3e42e21a",
      "c73716ca252ea01e63b6aad2d7ecae617570e32a7021dfd5ecaeb93b2fa5a1146105b97c6ea9beb6d5bea952295e4058c4e9f347fe37acfe065da6db1d38050000",
    ],
    [
      "ETag",
      "P5/CtOHD961eLClt1+7FLQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-136-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6b",
      "c2",
      "40",
      "10",
      "85",
      "ff",
      "cb",
      "f4d8844603b10a1e6a112b04d1b4825044d6644ca34926dd9dd58af8df3b1b4b4f3df4b23bf3e69be5bdbdc0a1a83318c0b6c83f2deaf35d8ebc704582c6966ce46aa836081e20ab5cc8247ab4cb45b0cae8eb61359917f7d353375e0c874298f4032b05830bec0a2c330383f70bd4aa42595315d99a05e273e3fae9ec6d3c19272254943961b68ce3a7513c86abf7bbb4d934877fadacaf1eec699be00e35d6293a0f8da63da63c75f18caa9a127d4356a768a085db41aec9364a13f9a2f89d30f23b51184441bfd7ef86bd50c89252c505d5022f5fc51c30b12a133a493ce80aa0db5292eedaf32872d88638b680f3f6f7ace366eb9f0747674633d724f60c3a67c1cde53339e72c89585bf42055f2c92f05dffaeb37a625d9bdc1010000",
    ],
    [
      "ETag",
      "R68uUQ0Xdox/XGPi+Iw2LQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00000002ffedd35b6e82401400d0bdccb7312810b8fd130b434be99042acf587c070e521e008081d4cf75ed36dd4b387732309e7d8f7f1703e614b9e884cd6b0e44b4f98d6f3542105d331ed8d609768ce433e622107aebffa94d9630c50a4213bab59b03b8c5ac5aaab6a07612e3c99aac0d38c352ebb4e1158c76e371b26faba2db785f437bdad6044ebec4bd1293db9e6daf1f3338b58dad4bd91556ef356b37d38175516e2459539355ef85a91bc33a8f539949602ab2c567005b398aa7759820bfdd6d9c3d45ac5f143e33bd1e68582a3a96e757f32b440ea2ce2dc3e78cb8787ff8b2c087e8bb2c33e2eefdb551d6041feeac7831478ff6f61d261477e7e018018244f19040000",
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
      "Thu, 02 Sep 2021 19:11:54 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-137-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85535d6f9b3014fd2bc87b6d1208692091a2354d691b29211b9076d33421632ed42dc1149b4e5595ffbe8b69ba5495d6276cdf73ee39f78317f2c0cb944c49c2f3c706eae72ff72221270414cdf155d21f74b41257e78e639f2b1534c9a57f95cf6688e0a98eefaa027a5234350339dd86fdbc164d456b217a98a867d94ecf1adbe6d89c3893a1edd8489450642b5e3e20fd4ea94a4e078383783f17222f80565cf699d8bdbd0f9e8683aa16f7c0941cbcd71ca08c1c7ca2fab5108c2a2ecad93644078d843a861de5057af8474d93b3f7b9fb9ceefa39829f3803ca98684ad5fac2144c9419cf9b5a6725d317a27d1e1d48e8adbc4564305134bb322ee90e4e8c942a1aabe70a8ccb60b33696fee52658cfa3e5c68fc3c5b5b79ef7179bd576ed87c6edb5177886a249019a6bcc8c337df3f182fa2948c54bad1eb5cfadf26b87961f07d312505a42178c1d734c2dd79c2459e2b0ccb54f93cc84247113e794da89c9262318a50950e46951cda2a5285d8bba404d885d98d8f1e8149c98ba432bb6326ad9599a25d608c8fe84fca9b9820b2e2b2179d721721b2c232f8e82adbf98479e2e21a34da12e3a636d01c71e151688a0ffd4b46fa35ca052dbeea51f79c17c112d6fbc6ec22bc8297b0e1f71c6192d24209ad6d83c05f55aa4d830e2cfd7de0582f5c4be1d82924c7fbd90b6e7ad8ba396bfd1231c606b57e92f09a360e95f693b07c40d2d1a0d79ea0ea442cb77581bbadeff46246e6997857cdf7ac14fd23d0590410d25fb7c9a08d681cfffb6c3e62318771f75a4c23b2e0f93ad0aaba15b22aeeb7d654fac91351c130daed587d8d0b60f6d6b73b4196107a57a2da9db7cacb4136be41b0883387f5fb76bff179712a6667b040000",
    ],
    [
      "ETag",
      "saXa4LoGB773BttRubFNGg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-137-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d92dd6e82401085df657a8b89560b4ae205b6686df01fd38bc6981506c4028bbb4b1b637cf7ce526b9bb6497b0333c337cb39078ef09ce421d8b049e27d89e27015a39ae9628eb24c95a45bc1738960002a1613593c4ea2813373daae78f5faa5d8371edc96d3ed1221832d660cec234409a6a104fbe90839cb90d6029e9659beae3a03d4a1d0c3853f1f8e07d4673cd4fd78e9794ecf73e1645c1643a6d8bae2ffb1b63a19b0e39b394628300f506b2904df61a086daa6645991624df2520428a182ab07b1e065c104e7359ad41a4dabd6309b75b3deb13ad74dab4964ca03a6129e13bc5c9040505cb174ce5fc926980488aa24c751757da17112564e74391cfb66ab12f815206d5192e2fa6f90046f197d870fec9cc1778e65bcccd585ea7b13e7b7e328d4cfa3ee1cdffd414845515d107f387217be339a6a6e75f6de3b289453c12949893ac446bdd5beb1ccfa7baeb75c674defb19528d18080d1ef719f28b023964a3cbd01c1f1777e7c020000",
    ],
    [
      "ETag",
      "pWOfGAQA8ErwLFurq1JE4A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-138-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fbd26a4978e52d555dd6b20e29211921adba8712db98d42d608a4db6a8ca7fdf059ab6e91e9590c0bee7dc7bee8b0774c7d3100d11e1ebfb82e5db77b782a006620aafe13624ba73d58bdaf857b29993f736ce84ce47272780e0254be2248b59538a22a74c0e17f3d63a17458673219ae0a869dafda6d9b58dae31e80d2cbb670351b2381af3f40ee8374a6572a8ebfbe0adb510eb98e18ccb1615c9d3bdbeb1f42c17b78c2aa91fc6d4218cd4df887a1a0b8a1517e9c9620e0a0ac9f2254b308f41c33335241f0e7db7384e5a6b006f3865985251a4aad4052ea84823be2ef2ca2b1a3ea04ae78b0f3477c6ce59a09d4d175e70b4c249495e1d6b586afb43435b4152118fd99287abd2b25c6677da277f3a010b28b8c192c99576f5d9f11d4d5b4905ea56daf7c2306caa9d6a23ef5c3b74e17adac2f39c79a01d9d1e6b17fe7431d33e5e1f60407bc8a4e269a53cc02466a5eac7eaba7f36b52460054a6ae3b26774b1d9370624223d1af5ed0e890c46489ff43ad826061db4593b240c034f95de2b164e451a92a81d76683fa261484db3dfeb30424dcb8abafd7e0f9b5648c2c820a185760df433e78a9d739909c9eb0aa32bdf0d9c65e02fbcb351e0546944b888d5792dae4ce2a54e054902e83f79ed4a2b1710a96c97eb058e3f3a0bdc4ba79e90315b63ba9ddfc38c4438960cd038c709532c9f88108a8666d3b91bb8536f340646d5f6d91e21d1f0dbc33321d866559555f546813b811e8d26b34ac31e7489e3a2426dea0f641996d134aca6d9094c6b68da43b3dd320ce32bdaed1aff763e",
      "f2fdd13508c2798eb7af6c9064b75dd2ff12b5c257a75afc5e8589ca684f9a0e4e5db4fbb183a78160edea58e8cbc2f1af517de5b388e52ca56f8f18802bc3dbbf8ffd2a03189619e2c05a280e134d651985e6ac9e6c9e54ea6bf6c06cc3832a70ae5edb3a46b7bd6f61e9a3f4c81296aac794ea55aeea569a0af90402230ca4e77a1760fd0d96e79dc04c050000",
    ],
    [
      "ETag",
      "db/EW7f4axmvSb+3apo/iA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-138-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "414fc2401085ffcb786d93422308890730440915a10a1743c8d20eb5d076eaee2ca621fc77678bf1e4c1cbeecc9b6f36efed198e7995c2107679f66951373719f2d215311a5bb091aba6ca207880ac322167ebdbd97a1a2e9ff9c546f5480569b38896f7f74298e4034b05c333ec732c5203c3f73354aa44595325d98a05e2a676fd74fe36799cc42294943a61be8aa2d1389ac0c5fb5dda6eebe3bf5636170f0eb48b718f1aab049d875ad301139eba7846957581be21ab1334d0c2ed20d3646ba5897c51fc4e78e7777a61d00b06fd4137ec8742169428cea91278f52ae680895511d397c483ae00ba2d25e9be3d4f22876d88530b386f7fcf3a6eb6f97970dc309a8526b167d0390bae2e1fc8396749c4daa20789924f7ecaf9da5fbe010b53aad2c1010000",
    ],
    [
      "ETag",
      "KV5KVI3QMtOuLpAa0dyPLQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "ffedd34b7282300000d0bb64ad8e7c0aa4bb42ac918c34140de2c689343814c41842013bbd7b9d5ea3be3bbc6fc0f35cb4ed415f2ad18067307213cef219919e8ffacf86768bf775a198d9b5cb26495ecf1bffc8fdd3166d734c0716af02a19d6bac479b2e0c4a50357af130df89c2c12f96d35e83a45e2b2e714690b16aeab734935841347a6947d3c80c4b51a7919564c45e9485e9650e867bd6879c043b88fae379b00bc8c26970f1881146bd8d2a7e3be92936e601da7fb85171625dedd15bea7a58b63762d903ab6226f3c0a599161dd26e17c1ecabdcd0a55ae170f6f0f07f810910832c95680fe57dbbf504e104fcd53fe8518afb7f5f702514f8f9052a804f1419040000",
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
      "Thu, 02 Sep 2021 19:11:55 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-139-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6f9b3014fd2bc8fbda04087940a468cd52ba464bc84a48bb8726641b43dd0226d8b4aaaafcf75d4cd3b5aab47ec2f63de79e731f3ca13b5e26688a08cff60dab1f3fdd0a824e10533883577f5f6c7eedaf87f60ff6c574dd05bd0cbf050fb3192078cb92b8a872d693a2a92993d3ddb69fd5a2a9702d440f12f56cc7ebd963c71a5bdec41b3813078892e5e98a977740bf51aa9253d33c8af73321b29ce18acb3e15c5cbbb793f30ab5adc32aaa4f956d30419697ea0fa3917142b2ecad96e0b0e1ac9ea981598e7e0e11f3521a76f73f7392efa1980ef39659852d194aaf50529a828539e35b5ce8aa64f48fb7c75405b7fe52f22838abc29cab8c4053b3112ac70ac1e2b669c879bb5b10cce37e17a1e2d3741bc5d5cf8eb797fb159edd6c1d6b8bef043df5098e44c738d9971aa6f015c403f6152f152ab47ed73abfcdca1e5fbc1b4049096ac0bc6136b8c6dd7f2484a2634759d11492d46884b2623ec108b7a43364c08c3c0d3a29a854b5126039b38eed88ee9d81dc543c7b36217bbe3180fac840c9d144f5c820e27e8a1e68a9d715909c9bb0ea1eb7019f97114ee82c53cf27509296e7275d6196b0b78ed51418100fa4f4d8736ca0528b5ed5e06911fce17d1f2caef26bc6219a68fdb3dcc38c5b96480c635344fb17a2d1268180ae66bff0cc07a62df8f4189a6bf9f50dbf3d6c5ab96bfd02318606b57e92fda46e132f8aaed1c1157386f34e4be3ba00a2cdf406de0faf00790b0a55d1674b9f3c39fa87b0a59ca6a56d28fa709601df8f86f3b6e3e8061f741472ab8c3f250d9aad09a754bc475bdcf6ccf1e8d6c176970addec5c6cee4d8b636479b9115ac54cf25759b0f9576628d7c014110e61fe8761dfe022e068d737b040000",
    ],
    [
      "ETag",
      "EqmOZqW41XeB/88CcQRKNw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-139-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92414fc2401085ffcb78b424c56291261caa54250262292743c8d24ea1b8ed96dd2d8610febbb315d1a8895eda99e937dbf75ebb8797ac48c08345b6dc542877674bd44fa60851555c2bba95a2500816a0664b22f38dbdb279afb9da9e6fc2701b38dc7e68fbdd2e112a5e61cec0db439a214f1478cf7b28588eb4160b5ee5c5bcee2cd0bbd20c2751d81fdd519f8bc4f4a3e960e05f0f023858a7c5846936aff97faccd0e16acc522c4142516311a2da5146b8c75dfd8542c2f393694a8648c0a6ab87eb094a22a9914a2419346d3e9349aae63bb76a7ddb970da0e915cc44c67a220783a2181a085663c14af64135c02645d92e3b4be6e699c25b51353f64791dbaa057e05485b9a719cff0d92e015a3eff0811d33f8ceb15c54853e51b78347ffb7e328d4cfa37a7e14fc2094a6a84e48d41f0693c81f8e0d373b7abfde6954632928498526c4a6ddbaba6cbbf67bae37c2644deff1b4acd08298d1ef719f69f052c6151ede00993c91e17c020000",
    ],
    [
      "ETag",
      "mq0h0lD1hv+qRRvE3l0K7A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-140-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "db",
      "30",
      "10",
      "fd",
      "2b",
      "91",
      "f7",
      "05a4d226244dd24a887510ba682565690a42dbd43aae130c695c6c87a943fdefbb3814e8d886142939df7bf7ded9e73ca23b562e501fa52cbfafa8587fb8e5296a21aa700eabbf3e5f15d6d01fd27528be74c361d6bdf3447e74040856b3245eae0a7a2079250895fde9a49d0b5eadb0e0fc000a1d588e7960b9b6e99a3daf77687b3610252db2112bef807ea3d44af63b9dad783be73c2f285e31d9267cf9bcde7938ecac04bfa544c9ceae66076464e71dd5e38213ac182f8fa6137050492a66748959011e5ea88bf4e36eed36c3cb760ee0074628268457a5aa7d4109c2cb8ce595d05551ff11699faf3ed0241805278971329e46c9de1c2f6bf27cdfc0d2d8062d630e4d65aca033b698d799d96c75679cc5e373c880831b2ca99c1b579f8338309e69c6f7ca346d621c1b83e8d4d8ad1146c6348a824962ec1def1bc3783cbd303e5def60c0fc824ac54a6d3dc169416bdb4fdb1bbe3dd59a801558699233cf74b1e59bbd344b3d92f97637cd4c9aa67eea75b19d9aa4e7506791520c3c5557d72c5cf2d2c13e9c084e9daeb5f02cc75f38ae6b138f12f330c5bee5b9969d11dbf4d0a6857e0aa6e829932b2e59b3c5e82a0e936096c4d3e8649004ba8d0c57853a6dccd54dbcf6a9a04900fda7af4d9d651c94eaf30aa324880727497819342332a23926ebc93d0c49860b49018d055e5245c5395fc0a6a18bf1244cc271341801439ffbc5162151ffdbe30b2159aff42e2bfd4667a3f120711ded600bb9c445a5310fcd07b2da5d406c5aff2e3388e3",
      "c135486321f0fa8f1cb4e36afa5f14345e478dcd674554ab6da3c39dc8459b1f1b785a086e58a385be4e83f81a354b31cda8a025797f9800ac13efff29b6b716c0706f41472a88617689ac5588a0cd0cb3a576dfb07bf0b63da4c142bdc939bebf3dacba465d912e69a99e5a6a6eaddeb73a55c967102461f4a2301a42f637ce38701a37050000",
    ],
    [
      "ETag",
      "zHWl1G8GeyIrK5IGf5k7rg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-140-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "401085ffcb78b48da555084d38884125c10a45628c216429432db49dba3bd554c27f77b6184f1ebceccebcf966f3de1e609f951b08619da5ef35eae62c459ed9224653e76ce4aaa834080e20ab54c878f7fc701b9de363e34fbff297e06271358f668381102679c3424178806d86f9c640f87a805215286baaa0ba6481b8a96c3f8e9e4677a35884823656881693c9f5703282a3f3bbb45a55fb7fad2c8f0eec681de3163596095a0f95a61d263cb6f18c2aaa1c5d43b54ed0400bb78354535d294de48ae2762e3db7d30dbcaed7eff5fda017089953a238a352e0c55ccc0113ab3ca64f8907be00ba2d25e9b63d3f5ad986b055a7f5f6f7ccb7b3e5cf83c386d14c35893d83d69977727943d6394b22d6353a9028f9e4fb8c4ffdf11b545dbadcc1010000",
    ],
    [
      "ETag",
      "RjWMFN+eOy2PzlY3/U5SNQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "300000d0bb642d0c820874076544042294aad44d864f908f85d40092747af73abd467d7778df20cd734c291afa1677e005b05436c45cf4886ed9f7badaede54eed2a1e3bbb600ac73a4a0b39836f2ce0a5630c45ab3374482e70b6c7782a5ecf500f35abee0fd0f359d7579d79396bd6e4937b1227cd725c139aacc2c68a32587e5451915c08f7dce33037dd0a696b759ce851e278320dcf3c9dc2ed897f323313c89754c67bb2578ec3397496cc17f086ba55bed5243f8caf91345f03c8d598a48d022b9372b3d90891fddeba88d25c489a7644f6201b13cac4a7a7ff0b2c009e497dc314d58fed8a6a180bf0571f0d8ce0c77f0ba7377c033fbfd599539919040000",
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
      "Thu, 02 Sep 2021 19:11:57 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-141-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85535d6f9b3014fd2bc87b6d0281a440a4688d12ba2225a425a4d5344dc83817e696e0149b565595ffbe8b49ba5695d6276cdf73ee39f78357f2c0ab2d19938c178f0dd42fdfee4546ce08285ae0ebc8b9b682dabeb1cc4dc86cc1ecdbb98a9f271344f09625e96e5f424f8aa66620c79b75bfa845b3a7b5103d4cd41b0c07bdc1b9639d5bbeebdb8eeb205142992f78f580f43f4aede5d8344fe2fd4288a204bae7b2cfc4eeeddd7cb2cd7d2dee8129697ed43451469a5fa87e2f05a38a8b6ab259a38346429dc28ef2123dfca36eb38b8fb9fb9ceefa05829f3803ca98682ad5fac2144c54392f9a5a6725e357a27dbe3b9075b0086689c144d9ecaab4a23b3833b654d154bdecc1b88c574b238c2e57f1729a84ab285dcfae82e5b43f5b2d36cb686ddc5d057160289a95a0b9c6c4b8d0b7082fa8bf05a978a5d593f6b9553e7628fc3c989680d212ba60ea5ae774e0597e96672ecb3d6794e516649997b923ea6416f38730dc664091a745358b56a2723db05dc846a9e3d0613adcfac3d4cf075e6a399933f23ce6816393c31979aeb98239977b2179d721721787499026f1269a4d93409790d3a654f3ce585bc07b8f0a0b44d07f6a3ab4512e50a96d771825413c9d25e16dd04d780105652feb479c714e4b0988a635364f41bd145b6c1889a6cb608e603db1eb535092f1af57d2f6bc75f1aee56ff40407d8da55fa4bd6491c463fb49d13e296968d863c7507725c1e347df88d405cd22e09b9d904f14fd23dc590430d15fb7a9808d681af7fb6d3e22318571f75a4c23bee0e93ad0aaba1db21aecb3db2fd816b5b03a2c1b5fa14732cfbd4b536479b117650a96349dde263a59d5823df4018c4f147ba5b87bf5069a75f7a040000",
    ],
    [
      "ETag",
      "53P0Er2Q0/UIc2oc2VDtRw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-141-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d915d4fc2301486ffcbf1d22dd904872ce102fc24ce450678630829dbd918746d6d3b9510febb6d45638c17deace79c3d27799f760fdb9a1510c3aaae5e5a94bb930af5c41619aa966a650ec19942f00035a90cb94dee6f1e2662fb5ed5617a75fab48e5662381c0c0ca1f2353604e23d9435d24241fcbc07461a346b39a76dc396aef340ef841d4e67d938bd357dc30bdba7f324198e926b3878df8b05d164e9f87fac2d0e1e6cf82ac31225b21c6d1621f906733db69a8a3482a2af782b7354e060f7a392bc154472ee9b891f76433f8c3a4114f47bfdb34eaf6348ca73a26bce0c3c9f9a80a0b92634e36f46132c205d698c4bf77d35e3ba7026b61ca7b3a8eb02fe049ce31772d4facd084ad81fcce29860b4d3a81e25373e0aad4a18742fce7b51f06977c9adb13637a1658b1ee4c43cd25dad212e095578f800d01b226302020000",
    ],
    [
      "ETag",
      "kLKFMQpkxgi1ND+Vh6bpAA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "02ffedd34b7282300000d0bb64ad0c82ada4bbf01501f98522dd6402130545e527183bbd7b9d5ea3be3bbc6f408b82f53d19ae2776011f8053090a85e0348aaa4f65936c698c996e0c4b3e276da862fc10915833a85d4ae860dd765cd59d6c53fa821d73180916acdc29671ea3d3263c52e5dcb57615a1188d0739f0e415790f16f9313174abe6d17a7923d6159f358fd6f2e9306aeb2433c6c541c9558ffb69959a64fe48cc22b43dcbd37c64de5db3dc9962b6a73764ed27471ae71b3b8bca2d822d240d69d030b4ab5489b0142a8ebb916bec7be868e505af65ed531b91f0f2f27f811960f7a6ea584faae776f90dc219f8ab4f06deb0e77f95d18e75e0e717dd96d01f19040000",
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
      "Thu, 02 Sep 2021 19:11:58 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-142-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536b6f9b3014fd2bc8fbb82610924213295aa384ae4809e90869354d1332e6c2dc024eb1e94355fefb2e26e95a555abf00f63de79e731fbc903b5ea56442129edf37503f7fb915093921a0688eb763d376ecf9e2ab2fef6ebd207a7a6a9ab47c9c4e11c15b96a4e5ae809e144dcd404eb69b7e5e8b66476b217a98a83718d9bd8133b41c6bec8eeda13b44a284225bf2ea0ee97f94dac989691ec5fbb910790174c7659f89f2f5de7cb0cd5d2d6e812969bed73451469a9fa87e2b04a38a8b6abadda08346421d434979811efe51d3e4fc7dee3ea7653f47f003674019134da55a5f9882892ae37953ebac64f242b4cf371f64e32dbd7964305134651557b4841323a58ac6ea7907c645b85e197e70b10e57b3c85f07f1667ee9ad66fdf97ab95d051be3e6d20b3d43d1a400cd35a6c6b93e057840fd14a4e295568fdaeb56f9d021ffe3605a024a4be882b16b397470668d932c715976363c4d320b92e42c714fe930b1d87804a334018a3c2daa59b41255923a6c90d810db6c94c6a3a1338c13ca20761dd7ca30e5c8a116d99f90c79a2b5870b91392771d2237a11f7971146e83f92cf27409196d0ab5e88cb505bcf5a8b04004fda7a67d1be50295da76fb41e485b379e45f7bdd84979053f6bcb9c71967b49080685a63f314d42b9162c348305b790b04eb895d1d83924c7ebd90b6e7ad8b372d7fa54738c0d6aed26fb289423ff8aeed1c11d7b46834e4a1fb2087e541d3fbdf08c425ed92901f5b2ffc49baab1032a8a1629f0f13c13af0f9cf765c7c04e3eaa38e5478c6dd61b2556135743bc475b907f6180769bb44836bf52186cf63d7da1c6d4628a1528792bac5c74a3bb146be823088e30f74b7f67f01f03e6e0d7a040000",
    ],
    [
      "ETag",
      "9/262CD+IskjENTxxuudmw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-142-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "51",
      "4b",
      "c3",
      "3010c7bfcbf9da42ebb6d615f6b089b8c198b3db409031d2f45a3bd32426a932c7bebb499c22e2832fcdddf577f0ff2547786e780919144dfdd2a13a5cd468ee5d91a3ee98d1f690826b8400d090da9277ef1b49c725498b4a8e07ba68a6f1f2a11e8d2ca1e913b604b223540db25243f678044e5ab46b54b0aee53bdf05600ed20d57eb7cb6b8b57d2b4ad72f36f3f97832bf8153f0bd581243769effc7daf614c05e143956a890537459a4127ba466e634356925c3508b4e51d4e061ffa356a293440911da4918f72fc338e94549344c8797bdb467492628318de016deac6c4030c210968b37ab090e50beb4c695ffbeda71537a1357ce16eba4ef03fe04bce31772d6facd4846f81fccf69c607230a8974a581f8d4e258efa578334893eedae853336f6268cea30004aec234d1b03594598c6d307d1d5e73402020000",
    ],
    [
      "ETag",
      "OzUpcAda7bfpA5sbiH1PXg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-143-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "7b",
      "6f",
      "9b3010ff2ac8fb6793f22021212152d5652d6b9152d211d22a9aa6e400c3dc00a6d8b48baa7cf71d26e96395560909f0ef7577b69fc896e51199908025f7152d779fee78405a844a487015067ab0722eabbbec4f150de0ca34b7114b4e4e90c16a9580ac48695bf0aa0ca9982c179da4e4550125e76d346af70646bb671abaa95b23ab6f8c0c140a9ac633966f51fe5bca424cbadd637827e13c4929144c74429e3daf771ffadda2e4773494a2fb36b38b31a2fb41ea69ca43908ce727cb055650095aae69062cc51a5ea451f0f5ad778741d64990fcc0420a61c8ab5cd675a145c8f3982555a95cc9e489a83a5f7d90853db3cf7c6d934346372d6dc3a28d06425baf8badf6dd9b5f699b83a3d868b797b6676b0dc771b5a5ebda0b5ffb7cfa45bbf0e6cb6beddb4a61ad831be647544896ab741f8294d6c9870939ef37a6168004411b703dd24de88d752b888351188f8d6110eb3408c6c1680846a087d6800ea28002ea64edae5490f3dc340663d3b27ab105a05b716cf4c7d670380aa321406f049611413f32039dec5be4b164929e335170c19a29915bcff1edb5ef2dddb3a96fab3662a85279de145737f1ba4e894d22e93f7ded6b94714caa47eeb8beed4dcf7ce7c66e7679461308778b7bdce7185241910d254e50d2f28a473834723d5f38be3377a73354a8adbb3e320499fc7c7a11f8bb424d59aa37997ade74851a284bd8fd83611de680ecf7afe26e20ad1445f1d55fe3ffd000a447f6bff6f8b4089ee0c68ffc58dade8a344b1e8d6949f3f0e39d46b2023ebe89c75b8164bc17982324fee3c10a459d1296b439602c5315366aab670d7593287229df61a6313e4eb2f6a81d6946737968a9b9156a36355489671282782e5cc7bd40f42f5482694897040000",
    ],
    [
      "ETag",
      "a40bYIHujmxud4aM66kdig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-143-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "50",
      "c16ec2300cfd17efda4ab02218481cc684a01aaa5881039a501582e90a6d1d92148410ff3e274cdb6597d82f79cf79cf373816f50e06b02df25383fafa94a3fd704d8aa629ade1a2a8360801a0153933dbe5629ad42fc749da9fc7f5e9f29eacb79d7c386486915f580918dc605f60b93330f8bc412d2a64992f01d8ab7268b14ce364c2b8a29dc3c96a367b1dcdc6700f7e1559a68e7f8a38598e27e3f43fc9e61ec081b629ee51632dd119509a0e286decb21951a91243438d9668c093fd43aea9514213857c13b63b51d8ee46ad6eabdfeb3f47bd88992549610baa99bc5ab039b0644599d2c5b84d3041fb9663eefd7976df350a7556612e32495af948674f67a79b9f11a3ab4533d7c4860c3a2fad87af37725e2d67b0bac100a4e09d4e0bfbc0f76f0bd9f501b0010000",
    ],
    [
      "ETag",
      "1lSHNn8kGR9PInqwKNYb4g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:11:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000000000002ffedd3597282300000d0bbe45b1c3659fa17442b91716151e90f936234019418b4103abd7b9d5ea3be3bbc6f808b82b46d7e6f2a72056f4062dd1d17e325773cbf63fa65b61fd2d469b06b061945906bccb8554a90dfbd986aebc7fa1d2a47ddb0ec1263eb8b525f5592cc29c31dda2071e228c28d3f2de06abe1de455650d9b943d6e0f43d8c1ca9478d743cd9861cd8a6c7de33afe9e6853251667cb46b063f2337335983d826b54df966da66c1793b83f0650599ddac4cb72785940448b9ad4511a87dbf3479396d541a62b35a13c37b148d06d0825371b61cf839a4275fcf2f27f8111203d6782b4397b6e3726ae3b027ff5f3bbe4e4f9df235810017e7e01b2c000a819040000",
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
      "Thu, 02 Sep 2021 19:11:59 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-144-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "9b3014fd2bc8fbda0448c8538ad628a16ba484ac84b49aa609d9e6c2dc12ccb0c9d455f9efbb98a66b5569fd84ed7bce3de73e78220fa248c8943091fdaaa17afc742f19b920a069d6bc6eb23f03653b4777291e8e9b654db77679339b2142342c450f650e1d25eb8a839aee77ddac9275492b293b98a8e37a5ec71df69da133194d7afd511f890af2742d8a07a4ffd4ba5453db3e8b773329b31c68295497cbc3cbbb7decd96525ef816b65bfd5b45146d91fa87ece25a75ac862b6dfa1835a4115c3818a1c3dfca326ecf26deeaea0876e86e0a3e040399775a11b5f9882cb2215595d99ac64fa448ccf5707b2f3d7fe22b2b8cceb431117f400175642358df56309d655b8dd58abe06a1b6ee6d16a1bc4bbc5b5bf997717dbf57e13ecacbb6b3ff42d4d590e866bcdac4b730bf082fa09282d0aa31e35cf8df2738756ef07d310505a411b8c47ce90ba6367c25236e2e9b83f60a9038c8dd96840fbcce1130fbc8401459e11352c5ac8c2a31418246eccd824893d36a4f1d81db8710f468cb9bdbee77a949c2ec8ef4a68580a554a25da0e91bb7015f97114ee83c53cf24d0929ad73bd6c8d3505bcf6a8b14004fda7a653131512959a76af82c80fe78b6875ebb7135e4346f9e3ee17ce38a5b90244d30a9ba7a1dac8041b4682f9c65f22d84ceceb39a8c8f4fb13697adeb878d5f2177a84036cec6af325bb285c055f8c9d33e296e6b5811cdb03a980cb2a41cfa71f88c31d6d73909bbd1f7e23ed5308295450f08f67896013f8f85f3bef3d8271f3514769bce3ea70d5a8f00ada1512a6da67f6a4e73863f3a76a5ae977b19e3b3837adc9d164840314fab9a476efb1d256ac562f200ce2f403d3acd35f073758ba79040000",
    ],
    [
      "ETag",
      "bMgz5s/0v1DikvMDuaO/pQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:12:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-144-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d904f4fc24010c5bfcb786d9362f9234d38082a6208c1225e8c21cb765a8bdb4ed99dc610c27777b61acf9e76dfecefcdbcd9337c96750609eccbe2d8a23d5d15c8cffe92a26b0d3b391aaa1d4200c8aa1072fdf43aabaeef3638b5f91ab783f9f1c1c4c5642284d31f582948ce9097683207c9db196a55a1d83499b6aa779d0a804f8d2f6e5ed2c56a2ebaa2ccebd576b9bc9d2eefe112fc1933c56ad7f1ffb0bd5f0238d03ec51c2dd61a7d96c6d201352ffc9a4e558dc1d0516b353ae8e0eea1b0d436ca128552097bfd7ed81bc6d1301a8fc6d7f12816d290565c522df076230181899549e94bd684087ef5f4c4e8d696a4bb43dfb817f56f06a361f4336b467e3e4b2eb62d06a0957cd963c990e4ca38bc7c03d99d580590010000",
    ],
    [
      "ETag",
      "PJVCm2DSeBrfPeU5GqFl3g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:12:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "bb",
      "e4db38714143ff584a85182c2028fc64906664b1ec5842a777afd36bd47787f70de224e15dc7faaae0257801225ecaf3644e6aacea5fd70f39d2059e2435ab87c637960bed6e9f0bf3d61b2e6e38f494ce75de558bd991a66fd3109dfa6891a8fe4950ab0efc5e412dc33e1ef62d591288f39d4bca8def155ba53b1ed3fb3ad776fbf57859bb087e42e18b86d91b131aba75ae1c5aa479f496d8cc390448a8b53e0e4345cd5071756a5fa1c9ab4ab878320e06a2b4acd22443827882b6532e590492cb96072bd493cd100ee4560ac710ca6b3c7f7afabfc00cf0b1ce5adeb1ecb17d25c9f20cfcd567bda8f9e3bfcae396b7e0e717bbeaeb5819040000",
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
      "Thu, 02 Sep 2021 19:12:00 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-145-1630609792373",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5c934042ea10295ab394ae9912b211d26e9a26641bc3bc02a6d8648aaafcf75d4cd3b59bb43e61fb9e73cfb91f3ca03b5126688aa8c8ee1b5e1fdefc94149d21ae4906afef3d1c7c2cdcc35d49327d9d7c91cedbfd3a9bcd00215a96224595f39e924dcdb89aeeb6fdac964d456a297b90a8e7b8e39e733eb2cf6d0f7bc3111e0151f13c5d89f20ee83fb4aed474303889f73329b39c934aa83e93c5d3fb603f1c54b5fcc9995683979a039051835754dfe592112d6439db6dc141a3781df382881c3cfca126f4e265eebe20453f03f05e304e18934da95b5f9082c9321559539bac68fa808ccf6707b4f557fe22b298cc9ba28c4b52f0332b219ac4fa5071eb2adcacad6570b509d7f368b909e2ede2da5fcffb8bcd6ab70eb6d6edb51ffa962634e7866bcdac0b730be002fa09575a94463d6a9f5be5c70e2dff1d4c4b0069c5bb608ced73e24c6c8fa614b374321ad3d4e6944e281e9311b599e77237a19c00cf881a162965c9260e9eb8b617638a71ec3a9334a64397c6147b1e4ff1187b2e43c733f4ab169a5f0a554925ba0ea1db7019f97114ee82c53cf24d092969727dd9196b0b78ee51438100fa4f4dc7362a2428b5ed5e06911fce17d1f2c6ef26bce2196187ed3dcc3825b9e2802635344ff37a2d1368180ae66bff12c066629f4e4185a6df1e50dbf3d6c5b3963fd12318606b579b2fda46e132f860ec9c1037246f0c64df1d50cd99ac13f07cfc0e38d8d12e07fabcf3c3afa87b0a79ca6b5eb2d76709601378fd5f3bed3d8061f3414769b8c3ea30",
      "d5aab09a772b244cb58f6c6f687b438c0cb8d67fc71c1b3ba7a6b539da8cbce0a57e2ca9db7ba8b4136bd413088230fdc034ebf81b57e2a98979040000",
    ],
    [
      "ETag",
      "B97NJm4yknagtHdXo1+vMg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:12:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-145-1630609792373"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "90dd6ec2300c85dfc5bb5c2b9501052a7131a6fd202134ca98344d1332a92965695d12771342bc3b4937ed7a57c971be631fe7049f459541029b223f34648e5739c9c25f52b28d16eb8e9a2b4b100009e68e54bdebf9f010efde50314e1e36f2f5aafa8bf1d81156eda844484eb02d48671692f713545892b7b16eca6addaa00e458fbe2f2259dce1f9d2e39f37abe9acd6e27b37b38077fc60c05d72dff0fdbc739803d6f52da92a14a91cf521bde9392a95fd362596b0a2d37469185166e1f72c34d8d86397495b0d3eb879db81bc5d16830bae90eba8ed4ac500aae1cbc5aba80202ca853fe766b4204bf7a7214b2cf865d774bbe7127ea0dfb8338fa9975c77ebeb85c621a0a40a1fbb2a74220d9a2b674be00f7c820d190010000",
    ],
    [
      "ETag",
      "c4+N8q6hYacoaBFbtvVc5Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:12:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
