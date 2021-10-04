const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1631152725759";

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
      "00000002ffedd34b7282300000d0bb646d1d4a05497706915f11854ad50d9386a00146310906747af73abd467d7778778009a142e4f25cd313780703d6e1988cc3d64273c526b2d574efd0dc7c29e8e61455be2226391676bfbe916ec0de39f3593d9de3b2e34633386ab775b5d0b51716e4cc34434acce3769a7e668544d0411fdee55675b3905dab106ea57e40addd14c544f8c9573a384cb763bae94b3e8b8e9d552bbc8f9326e5fbccce022d6c4e5315bfaad93232bf5d1cf982d7bba5aa866e811229cfab9732b85ad449d6bb0bafaad27027298a83b9b5127900e38d6cd65920c74f4fff171801dab78c5391b3c7f63703c211f8ab9fcba1a58fff88624e39f8f90500bfc3df19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:45 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-1-1631152725759",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "fd2bc8fbda3c80e629456b96d01529211b9056ed3421632ed41dc1149b565d95ffbe8b69b25695da4fd8bee7dc73ee8367f287170999929867f735544f5fee444c4e08289ae1ebf046d4b675c1dca5ffb8ba16fcefb7a2bcc9663344f08625e9aecca123455d3190d36dd0cd2a5197b412a283893a66c71cdaa639b046d6603498204d429eae78f107c9b74a9572daeb1da4bb9910590eb4e4b2cbc4eef8de7bb07a6525ee8029d97babd84311d9fb50f36b2e18555c14b36d80fab5842a821de5393af84f4ce2b3b799bb9ceeba19821f3803ca98a80bd5b8c2144c1429cfea4a6725d367a25dbe3a90c059398bd06022af774554d01d9c18095534524f2518e7fe666db8def9c65fcf4377e345c1e2c259cfbb8bcd6abbf602e3eac2f11d43d13807cd3566c699be797841fd04a4e285560f9be746f9a53feefba134049496d006a3517f48cd717f12a7f188a5637b10a77d88e3713c1a503beeb3c9299c263150e46951cda2852846d6d89aa46c1c25566c46a7c9d08ee221b008293672e880b23ed99f90c78a2b5872590ac9db0e912bdf0d9d28f4b7de621e3aba8494d6b95ab6c69a025e7b545820823ea869df44b940a5a6ddae173afe7c11ba974e3be11564943d05f738e394e612104d2b6c9e826a2d126c18f1e66b6789603db11f87a024d35fcfa4e979e3e255cb8ff41007d8d855fa4b82d077bdefdace017149f35a431eda0329d1f22dd686aef7bf11893bda66213fb78e7f4dda271f52a8a0609f4f13c13af0d99f76d87b84e2e6a38a5478c7d561b2d16015b42bc475b547f6d09c8c880657ea5dcc36c787a635399a8cb08342bd14d4ee3dd6d98ad5f208c2204edfd3cddaff03270b847b75",
      "040000",
    ],
    [
      "ETag",
      "6Zou32HcIDRwLYoizBnpZg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1631152725759"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d92d14e83401045ff657ca5b1a85025f1816ad5c65ab5c568639a660b03a50283bb4b4d6dfaefce62ad464df405668633cbbd1756f094161178304d93e70ae57227417d6b8a01aa2ad38a6f25150ac102d4226172d11c52e05eb665db75f2dd51f2e08eee5ffde363265438c35c80b78238c52c52e03daea01039f25a4859951793bab3402f4b331c06836eff9cfb9c22d3f7ef7a3dbfddebc0dada2e46428b49cdff636dbcb6604ed301c628b108d1682925cd31d45d635389bcccb0a1a892212aa8e1fa4122a92a85246af0a461376c77dfb69dbdd69ed3728e98cb28143aa582d1bb21cb034d5a64037a6193e03220eb92fdc6f575c1e334aa7d98b2db0fdc835ade578095c5698693bf41963b13fc153eb04d02df39915355e82d75d6bbf67f3b8e23fd3cead40f3a3f08a539a82d1274af3ac3c0bfba31dc78e3bdbdd4a86e24718e0a4d8476f3e0d069b9cdf7544fc824cdeff1b4acd08250f0cf71916af06291295cbf01f56278477a020000",
    ],
    [
      "ETag",
      "v0SoT6KBrB65m/YgX6YWzA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
        query: "SELECT * FROM `purchases` LIMIT 10",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1631152725759",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "db",
      "4e",
      "db",
      "4010fd9568fb5691f86e2791a296824b2d85d03a0ea84fb0bb1e9b05db6bbc6b5084f2ef1ddb090521c19bbd732e7366e699dc8b2a2573c244fed042b3fd7227193922a0698eafe659f6e3ceac2e9ffcabdf118feccabdfd951e2f1688101d4bd1b22e60ac64db7050f3cd7a9237b2ad6923e51885c6f6d8f21dcbf2ecc0f6026f86340545b614d53d926fb5aed5dc300ed6935ccabc005a0b35e1b27c79371e6da36ee41d70ad8cb78e069a28e343cf6f85e4540b592d366bf46f1534d75052516007ff8929fbfe5679226839c911fc283850ce655be9ae2b94e0b2ca44de36bd2a993f93becb571f641d2ec39364f475f433be381fddd4a8784b15a89bd1323a8f929165a24c0a4a8baa1749282ba013d8c78cdecfb623508d2243f13a307d6a4dcd19cb58c0b3a9e3b1cc04c6a62cf0a8c34c3e73c14d1950e4e94ebd67d14a56b6cb1c165093519ef99e37f57cd349831904aee9db76eacc3cd79a653e23bb23f2d4080da742d55289212cb98aa324bc4ee2cdeae43809fb18196d0b7d3a34d78578dda7c69008fa20d7aeab0a894edde4a25512c6c7274974190ecb5a424ef976fd80ebca68a100e1b8e4645be3bcc89f4d18ff25c3530c193450f1cfe788e0bef0d9a91e0e07a1783ae8a234fee3d2b8ea3c7803c3f244d9f572603ba667f587ae69a3dfd57cd7c2dacbc1748a5042a5f78186c321bbbd59ab5e4058c499afa2d51956ff0190dd1dd8b6030000",
    ],
    [
      "ETag",
      "0GfBj0nVw6WPIcI2n4hHdA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1631152725759"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "9d94516fda3010c7bf8bf74a909dc48420f521edb20e897605c2a46eaa26130c848538b31d5a84f8eebba415099b61a32fe472b9dffd7d77f876e86792cd500f4d93c5af82cbed8705d7c3d2187155a45ac1231799e2a885b8660b88fcba8a5e1e277c687f0b36d9b27bb3799cfa74787505112a5ef23543bd1d9a273c9d29d4fbbe43195b73c0921904e86d5edafdfb28bc0d47e0588b59e9b89f0c06c1f52044fbd601c8a5982729ff713958c878c9aa23bf61e368d4bfbf3d4fb1b528325d339f065f82e83c3263ba21f23188c2f3f14ab3755e0351ff2e1c47c1dd83897adab7d04a4c477cce25cf625e36153ab2e2b1ee97f352902ae59612502c57a80aae3e2ca428722685b0c063d916e9388450dbb3a9477d884b45cc742232089d8ce174480bcdd2917886692182214256364c6e5efd6ec0ef54651c5b632dd9f3944bb93db8ec36ae6d6c630bdb16ae09d2a65dec39c4f7ddd0af4a6c6a909aa5978a34d85284384ec7338b78efafa4c15622be4ba851841a0a09721857addd26eedf9da2c79df2b17ba208bb662f116870550114fbe60288ff4e01ff48c026c475cc0275dc89fcc01b3a448e3b44a94f8cf9bd7f9edf9cff8f0963cf3337a86bf817fd4ffeee717eb89b27ee42cdba970834b84aa0d3b50f03787abbead75bcdd58314b036142f37067edd1e37a2dc28b0d17a5a16bc856206dbfc73a25fdff7bf015aabcfb32a060000",
    ],
    [
      "ETag",
      "VjTxYUeQ2ZAvnh8CvYb95Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
