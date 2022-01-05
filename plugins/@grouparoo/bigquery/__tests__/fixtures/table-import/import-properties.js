const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1640212600764";

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
      "1dd0516e82300000d0bbf0ada6b612647f20189489a280b53f4de998eb2a424a95c2b2bbcfec08effd588cf3aaeba86e6475b7deac814177c66725f0f0138c59121bed016317ed366ba62b20e707d089cb0ea73951cfa3f4f7f67b70c2b9bcd18efaf721df5c1d9f3acade789dabf457d1879f49de42ee2c1e07192e6f497a006c1581144f658db23a162280fc7c81a4c8cafb1aaf3ee01ece8519aec08c5c97578f313ea278395e0616d4daf5a2b8a7b773cb4ed9384d72888c87b784ac4f3d2ac94e6fc3d8d9347b9298f09b8cc7b34451533c96b56a163c107d8e038ea31435d6c4aa4c2b54d551f17223db7527d67f02d5435bbd26fc8aa94a59bf7f04e1042623010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:42 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-1-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "6fda3014fd2bc87b5c210904d222a195d1748b04a10ba1d5344d91eddc646e434c63870955fcf7dd3885b5aad43ec5f63de79e733ff2441e4499923161227faca1da7fba978c9c11d034c757086e145877fb59f675e7f4fb328a3f67c17432418468588a6eb6057495ac2b0e6abc5ef5f24ad65b5a49d9c5445da7eb8c5cbbeff447b6ed8d5ca42928b2b9281f90fc47ebad1a5bd651ba974b991740b742f5b8dc9cdead5ddfda56f21eb856d66b450b4594f5aee6974272aa852c27eb15ead70aaa04365414e8e03f316597af33f704ddf47204ef0407cab9ac4bddb8c2145c9699c8ebca6425e327625cbe3890953ff7677187cba2de9449493770d649a9a689de6fa1731d2d179d20bc5e468b691c2cc36435fbee2fa6bdd972be5e84abcedd773ff23b9ab2020cb733e95c9a5b8817d44f4169511af5b8796e949ffb13bc1d4a434069056d30f1ec1175ceed0b96318f67e78321cb6c60ec9c79433a6036bf70c14d1950e41951c3a2a52ce9009c9167b3e422cdd2c4a50e4d98cb06c99073367439d8e0d9e47046fe5642c395505ba944db21721705b19fc4d13a9c4d63df9490d1bad057adb1a680971e351698d8b683c077ea3a34512151ad697910c67e349dc5c1addf4e790e39e5fbd523ce39a3850244d30a1ba8a15ac8149b46c2e9c2bf42b099dacd31a8c8f8d71369fade3879d1f6133dc6213696b5f992551c05e13763e788b8a5456d20bbf6402ae0b24ad1f3e137e2704bdb1ce4c7da8f7e92f629820c2a28f9c7f344b0097cf4af1d371fa1b8fba8a234de7179b86a347805ed120953eb89dd1f0c3c62c0957e1373bdc1b1654d8e26236ca0d4cf05b59b8f75b662b53a813088f30f4dab0eff00d92c82ff77040000",
    ],
    [
      "ETag",
      "eIPse/WyCfBv122oRT+fIA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c7bf8bf74a34c8d2b443ea43b2656b249ab409d51ea60a39f641dd191fb54dda2cca77df9976d9b44ea22f7077fc0eeefefcbd673f94912c651b553db46077ef2af0d72158816bb577746bd038601103cf2b22dfcbbbe1b7879f27d5d3d9c5e6d18a8fb6ce37d7e7e7443871073567e99e950ab4742cfdbe6786d7406d02755b9ba2cb22e6774d28aef3d57cf195f21a65c81737593699663376888e8d927b5e74fc1bda6e0f11bbc7cd0a4ab0600484591a8bf720fc3cace978dd6818386cad00c73ab87b50596c1b6e110754192483643c8a87c9701cc7a7e311711a05f70a0da1376b1a8f79f45caff0919664c907226c17d3c26577dd525dc96e9110ce1739bd27ccf737c085c0d6f8a2172c9575fe59bcdfe08b08ff929abf11a43fa5741f54819160fb28d5145c4a0bcef592e80ade34476cba5c66af5531d2a292fde056f500da6f8fc0976c39f99fb4e4af3f5a7d9ee4b35784f3e49a2392cf2f67eb7c727915b8db17234c771edc9545329583e0a7241e9d9d9c8ee3678b7dc2603bfa4eea6d0b11139c4eca85f22c2db97670f805ec0784f287030000",
    ],
    [
      "ETag",
      "/dh2Wqz5gx8Hbwrc9rmTbQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `id` as __pk, `first_name` FROM `records` WHERE  `id` IN UNNEST (?)",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-2-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85537f4fdb3010fd2a91f7cfa6b5cd4fdab412621d645ba412589a82d034b5b6e3641e691c6c07d6a17ef75d120a744820554acfefbd7b77e7f33dbae6658a2688f0fca66672f3eeb720a88798c6399c4afdd7b2a67914ca8f7fb85b7f269babcabc3b3c04066f540aafab82f595a825656ab2980f7229ea0a4b21fa90a8eff4eda16739b633b4acd1d00399624536e3e535887f695da98969eeac07b91079c170c5d5808af5e3b979eb989514bf19d5cadc7734c14499af7a1e158262cd4579b898837fad985cb235e60554f0244cc9a7fdcc038ed7831cc8b79c324ca9a84bdd540529a828339ed7b2cd8a26f7a8adf2d91f340f66c17162ac78ba32b03296cbeaba67ac322e955e9678cd56c697f8ecd4584946854cd5cab8fc16c481d109c2c8584451304f8cf7471fc02e654af3b2354b30295863f4308ef0e51d3402acb1621db81c59436cfbd69864644433df3d2099c508f1c9e800bbc4a2638f7929611874bac9deaa7029ca9137f609f629cd2ccf7289e73b2eb6714a9d833119b999ed9331762d3b45db1eba935cb313ae2aa178371474198749b04ce245743c4d82b68d0cd7853ee98a6b9a785ea7862697966503f195deb60dca05b835530ea32488a7c749781174173b6339a69bf90d5c6d860bc5808d258c5b33792a52181c3a3f9b874978164d67a0686feb7cc75068f2e3fe49906caa76d2bafda2691c4faf4083a5c49bff30a803567bbb7d6677818bbaa5b4fc36eaf2df7600b2a197a7c8d98bbcbd6888b63fb7f0eb2158eece197d5f04f115ea8e629631c94afaf65e00b905de7aa2bb0703547832e0a234c4b08454351e54b26e19f9baed64a7766ddf472d59ea1798ebb8bb8937399a8c6ccd4afdd050f760da193650ad1e4900c20e4561f415d07f5755bb8eae040000",
    ],
    [
      "ETag",
      "rtz00AgNIr+xi3uBbyYp/w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6f",
      "82",
      "30",
      "14fd2fdd2b64480c2e263ea823ce8d10879a992cc654b8b02a50d65eb630e37ff71617b264bed07bcf47734e39b1a3281336647b917dd6a09abb0cf0d50c11e83a474d47254b0dcc62803c23253e0fd66f3f3a7cd94c1bdcdc0f8245221fb2d188143afe8082b3e189a502f244b3e1fb8995bc00b2ed76d59124d854669b872b7fe6470414323140b80e82f124f0d9d9ea2ca9501a77edd21997ab681ece6ef9b6678b1de43e8214149431981895920788716e1a6a5e5439d85ad62a06cd5a714b644ad6155752da84d8aeddf3fa8edb733dc719787dd2e532e6286449d2f592f23194c8f3487e533f6604aa1da96ada7ebf08eeb53dcce42b016db8bfb4d7d18f508a7fb4dbd1531e8bfcc605fd4e312e3872c36f7f834d1a04bd50924a6a30fd9c6bd7a934fd91de05550d168b39fdad2781d7fd7c01726642430a020000",
    ],
    [
      "ETag",
      "tJ7UWzsNKXCytX/7LPdo8g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "64ad4e0441e90e918f28a22646709381180ba245c34743a777afd36bd47787f70d12c67855d1ba2cf817f80032518c011ba4d08c5ad8e175bc209dc99043c924edb37b5ba0cac0ddc36e9e16bd3baafaf49cfdd60c777e47b0032fcbb2f34bd157515408b97b8ca3761690d1e59aadbd420a5a90343614e186218ba68e84867e4c27e813338b54da04aea28d87118665a6abc7350a86ba2686a7d6dd7ac17ca90f7d2b32db31bd877975b52eb614faacc847cadea275dcacfad0cdd0c1ce94d10dc1d909cf2d991d92c579753e6d88ddc81cba5ec2e719cb77ba1f0cdedefe1dd003fc79cb05af68fedaae6a86d1037ff5692d6ffcf57fca13c105f8f90584b9073b19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:43 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-3-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b6f9b3014fd2bc8fbda04c88b2452b44629dd22256405d26a9a26649b0b734b708a4dabaeca7fdfc53459ab4aed276cdf73ee39f7c133b913654aa68489fcbe86eae9cbad64e48c80a639be06ac0fbdbf7cc8f32878dcd85bef3ecbbdabd90c11a26129badb17d051b2ae38a8e936eae695acf7b492b283893afd8e3b1a383db737721c6f34409a82225b89f20ec97fb4deaba96d1fa5bbb9947901742f5497cbdde9dd7ee8d9fb4ade02d7ca7eab68a388b23fd4fc5a484eb590e56c1ba17eada04a604745810efe135376fe367357d05d3747f083e040399775a91b579882cb3213795d99ac64fa4c8ccb570712f92b7f115b5c16f5ae4c4aba83332ba59a26fa690fd665b8595bcbe07213aee7f1721324d1e2bbbf9e77179bd5761d44d6cd773ff42d4d5901866bcdac73730bf082fa29282d4aa31e37cf8df24b7f96ef87d210505a411b4c3c6744ddb1336119f37836ee0f59e6006363e60d699f397c328041ca8022cf881a162d653961ce20e5294bbc8cbbc960ec8e130a194d789f795eeaa6839147c9e18c3c5642c385507ba944db2172132e633f89c36db098c7be2921a375a12f5a634d01af3d6a2c30711c17811fd47568a242a25ad3f26510fbe17c112faffd76ca2bc8297f8aee71ce192d14209a56d8400dd55aa6d02cf77ced5f20d84cedc731a8c8f4d73369fade3879d5f6133dc6213696b5f992280e97c13763e788b8a6456d200fed8154c06595a2e7c36fc4e196b639c8d5d60f7f92f629840c2a28f9e7f344b0097cf6af1d371fa1b8fba8a234de7179b86a347805ed120953eb89dd1f7b4362c0957e179b4c46c79635399a8cb08352bf14d46e3ed6d98ad5ea04c220ce3f30ad3afc03742f1beb77040000",
    ],
    [
      "ETag",
      "Nb3e2zc5cgSNwO/U7qfg7Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "8bf7724482344d27a4be48b66c8d44fe34a16f3a55c8b50fe6d6f8a86d32a551befbceb4cba675127d0377c7efe0eee1f1813d2a2359caee55f5d482dd7fa8c05f876003aed5ded1ad41e380450c3caf885c3cee9ff5fa76f6e4ddd0d7b71f93f3ddf55575794984133fa0e62c3db05281968ea5df0fccf01aa84da06e6b537459c4fcbe09c56dbe992fbf515ea30cf9f226cb26d36cc68ed1a95172cf8b8e7f47dbdd31620f78bf81122c18016196c6e203083f0f6b3a5e371a060e5b2bc0b10eee1e5416db865bc40155066783643c8a87c9701cc717e311711a05f70a0da1375b1a8f79f45c6ff0272dc99233226c17d3c26577dd515dc96e9110ce9739bd27ccf737c085c0d6f8a2172c9575fe45bcdfe0ab08ff929abf13a43fa5741f54819160fb28d5145c4a0bcef592e80ade34276cba5a656f5531d2a292fde04ef500daef4ec0d76c35f99fb4e4af3f5a7d99e4b33784f3e49a1392cf17b36d3e59ac0377f76a84e9de835b5b245339087e4ae2d1a7f38b71fc62b1cf186c47df49bd6d216282d349b9529ea525d70e8ebf000b8ca60c87030000",
    ],
    [
      "ETag",
      "MkyzlPZEqts2tmZ+15vQHg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `id` as __pk, `first_name`, `last_name` FROM `records` WHERE  `id` IN UNNEST (?)",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-4-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "14fd2bc8fbb2494920844012a9eaa2946d48296d09e963d394d8c630b70453db748aaafcf75da0699b556aa548e4fa9e73cf7d3ea23b5e24688208cfee2b26b79f6e05411dc434cee055fc1c55c1fdf5f8229c6de38adae935edcfa7474780e0354be14d99b3ae1295a44c4d968b5e2645556229441702759d6edf752cbb6fbb96e5b90ed014cbd3392fee80fc47eb524d4c732fddcb84c872864bae7a546c9edfcd07db2ca5b865542bf350d1041165beab799c0b8a3517c5d17201fa956272c53698e790c10b31215f0f23f738def432003f70ca30a5a22a749d1584a0a2487956c9262a9a3ca226cb577fd0c29ffbb3d858f3646d6065ac56e55dc758a75c2abd2af086adc1caf1de30be4567a7c65a322a64a2d6c6d50f3ff28d961d84c6320cfd456c7c3efe02da09539a178d728c49ce6ad5a7de046f075213b0c68ab5ce9567b9b83fb2c624251e4d478321492d46c88878433c20161d3bcc4908c3c0d375f486850b518c89e70c465e7f387086ae3d7688e3e2f1005bccb5874342878e9740981143bb0efa2bb966275c9542f1b643e82a0a627f1547cb70368dfda68c1457b93e6993ab8b789da786225796d507e03bb5ed6a2f17a056b73c08633f9acee2e0d26fa73c6719a6dbc53dcc39c5b96280c612daad993c1509340e9d9f2d8238380ba7736034a33bdf23149afc7a7c21c4dbb2e9b46ebe681a45d31be06029f1f63f1fe4017bbedbbd92bbc479d5401a7c63b5f11f5a07ea432d2f967d603907968b76bf77f0eb20d8f456195d2cfde806b54f114b996405fd782f00dc383ebad7fdf50014ee075494061b9690aa5a834ad62e23df3495ecd98ee7d4e303b0d46f7c63dbdd77bc8e5147641b56e8a782daeb697a58bb2af50c0227ec501884dfc1fb0fc1c85bf1bb040000",
    ],
    [
      "ETag",
      "oZ8uIqX9QNCyTuc2fXc1LA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff9592516bc2301485ff4bf6da823a5799e083baa20e71ae2a830d9198deba68dadb25a9c389ff7d3775748230d84b72cfcd77c2cd2147b69359ccda6c2d371f05e8c3cd06ecb32b223085b286b61c3303cc6360f986c8972f15b7fad3e1fd36b98b64f1babbdd3fb5ba9d0e1146bc43ca59fbc812092a36acfd7664194f816cab55be23c41e72a74693793808236aa418bbc664311e777be3909dbcca92486decaa149571368f4693c1df3ec5ff615b9e3cb6c575040968c804b8e9738d5b1076e482313ccd15f8060b2dc0b0122e0f361a8b9c6b449f3a7ed3af07cd5aa3de086ab556d0244ea1e0566246e86246e3318b96ab083f2916e6005d96945052ae7b6ad7cb67b82ad4122af1087a8fd294c35ee241453c40262b31135c497e45372aa0cf855417f787dcc215deac8ebb29b7fcd78c164c823a768ee5cfb37a076a4e355244065c3ab573527d74e9d1ed6dab0bf098e0f44586d29ef5e91b463442077f020000",
    ],
    [
      "ETag",
      "Wzld7CPH9jf5RiuZk3vO7A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "4d",
      "72",
      "82",
      "30",
      "18",
      "00",
      "d0",
      "bb",
      "646d1d44fed21d696315120b8216dc30f46b642256189282d8e9ddebf41af5dde17da312402855e8a61667f488c6d2c45398be1b7ed61bd7947bdc0dbfc067831c1698f8a64e6ab2482ac7cc041f037c527266d589c736183ef6d1b8693c5a2b2c2ae857605b91c3a1aa38670d4461bcb60aaee9498b372a037c4c9fb66da2af56ee9f0feac8aefe7c478b646bbc96b86781dc75d1aaa46e4cb4b6bb672337c18918497be25e7296850e51c1f0e91e55cbc7701836e9b0f458e1cecaddb6cfd6b6f9727a0068d784f3e09237f1a192c9be9be74b8fc0825a747a77f7efa009129756764215f2b67d6e633c417ff50b3db6e2f69f88b2131dfaf905914f8e2c19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:45 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-5-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85535d6f9b3014fd2bc87b6d1242212191a2354ae89a29211b9056d33421632ecc2dc12936a9da2aff7d17d364ad2ab54fd8bee7dc73ee07cfe48e9729199384e7f735548f5f6e4542ce08289ae36b7dfb3ddacfdd9086f2f2c936eb87cdf5fd683a992082372c49b7bb023a52d4150339de84ddbc12f58e5642743051c7e9f407b669f5ad81690e0736d22414d992977748feabd44e8e7bbda3743717222f80eeb8ec32b13dbdf7f6566f57895b604af6de2af65044f63ed4fc5a08461517e56413a27e2da18a614b79810efe13d3e4e26de62ea7db6e8ee03d6740191375a91a5798828932e3795de9ac64fc4cb4cb5707127a4b6f16194c14f5b68c4bba853323a58ac6ea7107c665b05e190bff721daca6d162edc7e1ecca5b4dbbb3f572b3f243e3e6ca0b3c43d1a400cd3526c685bef97841fd14a4e2a5568f9ae746f9a53f8bf7436908282da10dc6437340fbae394ab264c832f7dc49321392c44d860e3d4f4c36b2c14e13a0c8d3a29a454bacd981733775fab1e5a4666c0f6d3776877d2bb6001cdb02c71931460e67e4a1e20ae65cee84e46d87c84db088bc380a36fe6c1a79ba848cd6859ab7c69a025e7b5458606c9a7d047e50d7a18972816a4dcb177ee405d359b4b8f6da292f21a7ec31bcc73967b49080685a610315542b9162d3883f5d797304eba9fd38062519ff7e264ddf1b27afda7ea24738c4c6b2d25f1246c1c2ffa6ed1c11d7b4a83564df1e48054c54297a3efc411c6e699b83fcdc78c12fd23e0590410525fb7c9e08d681cffeb5e3e62314771f55a4c23b2e0f938d06aba05d22ae6b3db19de1c8221a5ca9773177e41c5bd6e46832c2164af55250bbf958672b56cb130883387f5fb7eaf00ffc1b96df77040000",
    ],
    [
      "ETag",
      "ujJTvD8SaSsFz40uwUVq9A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "301086ff8bf79548a4a5c984d40fa44d5b249274846aada60a39f6c1dc199bda265314e5bff74cbb745a27d12f70773c07772faff7e497509cc46423eae70eccee4b0dee9b0f72b09d74166fad56164840c0d11ac9aebb4f36f63b8b4eb3cb74f1eca2fc6afa909c9f2361d94f682889f7a41220b925f18f3d51b4016c635a768d2afb2c206ed7fae2bac8d3e535e68de63e5fde655932cbe6e4101c1b3975b4ecf94fb43d1e02f2a4373954604031f0b3b4463f0173a95fd3d2a69530b2ba330c2ce9e1fe416d74d752a3f5082ba3b3d178128527e39349184e2711725233ea845688dead713ce2b4a332d7bf7149323e45c2f4312e5cf5d72dd605ef17f161ba2cf03d7ebebf01ca98ee942b07c14a18eb5ec5fb03be89f02f29e92741fc53420e4135280e6688126d49393760ed20a96d49dbf688cd56abeca32a8a1b2df830b815038074db237095ad92ff498bfe7ad7ea3229e61f08ebd03547a44817f375912c6e3df7f86684d9ce81bd351a4d65c1fb691c465fcfa693f0d56217dadb0ebf133bd3414018c59372231c892b2a2d1c5e00f05f880a87030000",
    ],
    [
      "ETag",
      "uuXAbsWc43LDIMqt4RF7YA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `id` as __pk, `last_name` FROM `records` WHERE  `id` IN UNNEST (?)",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-6-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "7f4fdb3010fd2a91f7cf26f58793a6495b09b1aa64ac5b0990a620364dade33899691a07db0155a8df7d9784021d124895d2f37befdeddf9fc88d63c8fd108453cbd2b99dc7eba15116a21a6495a9d3e4c4e7f4dd6a16b9edaecfb19fff923bcc6974747c0e0954a914d91b1b612a5a44c8d16f34e2a45591029441b12b59db6e9d8d8322d0763d7b141a65896cc78be06f15fad0b35ea76f7d69d54883463a4e0aa43c5e6f9bc7b6f750b296e19d5aa7be8d80513d57dd7f3381394682ef2a3c51cfc4bc5e4926d08cfa08217611c7d3dccdce164d349817ccf2923948a32d7555590828a3ce16929ebac68f488ea2a5ffd41736fe64d4263c5e3954194b15c16eb96b1ca88d2cb9c6cd8caf8169c9f192bc9a890b15a19d7dfbdc0331afed43716beefcd43e3f3f117708b99d23cafbd421265acf2799ac6f4ed155402a289620db874b143cc011e4649e4d264d0eb470966513488dc3ee945980e6d66c71123a0d355f65a457291bbae6bd2214e88dd77624c599f59e620c6a63b64d8eeb9046307bb56cf42bb167a905cb313ae0aa1783313741d4c436f19060b7f320ebdba8d8494993e698aab9a785da7862697189b407ca7b75d8572016ed590a77ee805e34938bdf29a7b9db194d0edfc0e6e36219962c02612c6ad993c13310c0e5d9ccfa7e1f4dc1fcf40515fd6c59ea1d0e8f7e38b20dc16f5a475fd45e32018df80864849b6ff6150076cf66ef7caee8a64654da9f975d4e4bf6f0064422f2f917510d9079183767f76f06b21d8edc6195d2ebce0063547014b986439fd782f805c031fbdd0fd7b012abc1870511a625842aa2a0f2a59b38c7c5377b2573b7da78f6ab2d46f30d772f613af725419d986e5faa9a1e6bdd433aca0523d9300841df2a7fe29a0ff001ba5fe5dad040000",
    ],
    [
      "ETag",
      "bwCGZCkT71G4eHMiKJTW0Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff6d91d16f823010c6ff97dbe32043437021d9833ae25c8cdb40b387c5980a07a2c0b1b6688cf17fdf1517b2c4bdb4d7ef7e5f735f7b867d5e25e0c326cfbe1b94a7bb0cf5872942544da1156f35550ac102d42263f2c18d92e471b07c7b1e269f4edddc6fabe3287b7a6242c55b2c05f86748732c1205fed7192a5122dbd6eb7acf883ed5e6349d2f824910b250526284f972361b8e66015cacce5208a5d76dddf9a245389d4ffeb3ad2e16ec6813628a12ab18cd14b5a41dc67a6a022a51d605da8a1a19a382166e1b99a4a61692c866c5f6ec9ee73afd5edf739c81e73257502c744e15a3cb88c7034d5a14211d391e1840b625274ddbf5c072af8d61aa579407ca553bdf5fc2eb882816452e6e807e070442e34ddbedda63d2a85292896156bfe38d4e2cbe4be2a80a4d4ae79a784ce615f83e5fcb062d88057fd94baeafe7cb0fcb5fd66b0f020000",
    ],
    [
      "ETag",
      "/4Sdd87UODAdW0pu+hnwBg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "1d",
      "d0c97282300000d07fc9599c804a9bdedc683a918e2c8d89974cc0d4896cb219a0d37fafd34f78ef07c834556d2bba2a53257803a374d03c9d2770cd1e708a3f9723db26f0b049a983f7b684bdc965102f6b61ed1ff226719841e2049d895c22cb41608fb3b31538ab3a1cbecd304c45b4cd69b09017c88f45fe65ad6aecdba9bd3cd645c13a35bcc7dc752add5f778656a117dbb9db63d7473419b7858ffc3ba7ed896058d2b14ab2fc42d706354c1b2fd70d8952199face0d698244c88c7b391f1572ea252c6bd2d5f902e845e7735c9ae8bf2b0114cee2029f179faa82a30036ab8eb46b5423fdd8b154233f09f20baf1ae9e131b251bd580df3ffb1a91d123010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:47 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-7-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "da3014fd2b91f75a204921a148684590ae6810b610da4dd314d98e93ba0b716a3b54ace2bfefc629ac55a5f629b6ef39f79cfb9127f48797291a21c2f3879ac9fda77b41d019621ae7f05aa5fb32fbba5b94d777cbbff71b2ffe31bb7d9c8cc780e00d4be16d55b08e12b5a44c8d36eb6e2e455d612944071275fc8ee3f56dd7713ddbf6bd3ed0142bb2052fff00f94eeb4a8d7abda3743717222f18aeb8ea52b13dbdf7766eaf92e29e51ad7aaf157b20a27aef6a7e2e04c59a8b72bc59837ead984cd816f3021cfc27a6e4f275e62ec7db6e0ee01da70c532aea5237ae20051565c6f35a9aac68f4848ccb1707b40e16c134b6a828ea6d999478cbceac146b9ce87dc5acab68b5b4e6e1d52a5a4ee2f92a4cd6d3eb6039e94e578bcd325c5bb7d74114581a938219ae35b62ecd2d840be8a74c695e1af5b8796e949ffb337f3b948600d28ab5c1c4b73dec0ced0b92119f66c3f301c96c46c890f8037c4e6c7ad167fd94300c3c236a58b814a593f984f817c3244b5d2fe97b1e490871ddc4753297f4ede160481d7438438f926b36e3aa128ab71d42b7d13c0e9238da84d3491c9812325c177ad61a6b0a78e9514381896d3b007ca7ae4313e502d49a96cfc3388826d3787e13b4535eb01cd3fdfa01e69ce142314063090dd44c2e450a4d43e16419cc006ca6f6ed185468f4eb09357d6f9cbc68fb891ec3101bcbda7cd13a8ee6e11763e788b8c1456d20bbf68024a342a6e0f9f01b70b0a56d0ef47d13443f51fb14b18c4956d28fe7096013f8e85f3b6e3e4061f7414569b8c3f250d56850c9da25e2a6d613db77870364c052bf89f51de7d8b2264793916d59a99f0b6a371fea6cc56a75024110e61f9a561dfe012b02e5a077040000",
    ],
    [
      "ETag",
      "pdynfKvLnHhMzjU6TXDWwA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "10",
      "86",
      "ff",
      "8bf79548a4634985d40fa4cb9a683469123a4d9a2ae4d80773676ccf364c5194ffde33edb2699d44bfc0ddf11cdcbdbc3e921f42719292bda87fb6600fef6af09b106cc1b5d23bbc19ad1c908880a735928b6e36bd4ce26b96649f175fbf249bfd4d673657574838f61d1a4ad223a90448ee48faed48146d00db98966da3ca3e8b883f9850dc15dbe5ea06f346f390afeef33c9be573728ace8d9c7a5af6fc1bda1e4e1179d4fb2d5460413108b318ab1f81f96558d3d1c6481839dd5a068ef470ffa0b6ba35d46a3dc2ca683a1a4f92f8627c3189e3e924414e6a46bdd00ad1fb1d8e47bcf6546ef52f5c928cdf2361fb1817aefa6b8775c1fb4542b85c15f89e30dfdf00654cb7ca97836025acf3cfe2fd065f44f89794f48d20fe292187a01a14073b44095352ce2d3837486a575263ced86cbdce5faba2b8d5820f839d1800a4efcec0a77c9dfd4f5af4d71fad3e66c5fc15e13cbae68c14cbdbf9aec86eef02f7f06284d9c183bbb31a4de520f8691c27971fa693f8d962d73ad80ebf937adb424418c593b2109ea415950e4e4ff3e9135687030000",
    ],
    [
      "ETag",
      "HvB7840Cc4AKHXV4QbGvpQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `id` as __pk, `ltv` FROM `records` WHERE  `id` IN UNNEST (?)",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-8-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85537f6f9b3010fd2ac8fb67d39a00f94148a4aa8b5ab622a5a423a45d354d896d0c730b98da265b54e5bbef80a66d56a9952291f3bd77efeef9fc80ee7811a309223cbdaf98dc7eb815041d21a6710aa7eeec07cde36b1967e7a19e9be65f32ff7c991e1f0382d72c85f332631d252a49999a2c17dd548aaac452880e14eab81ddb19583dbbe758d6c819004db12c99f1e20ec8bfb52ed5c434f7d2dd54883463b8e4aa4b45fe746e6e7a6629c52da35a99878a268828f34dcd934c50acb9288e970bd0af14932b96639e4107cfc4987c39acdce538efa600de70ca30a5a22a74dd1594a0a248785ac9a62a9a3ca0a6cb177fd0c29b79a791b1e6f1dac0ca58adcabb23639de9cddaf81ace2f8cb56454c858ad8deb732ff48c16e907c63208bc45647c3cf9043a31539a178d4a8449c66a85471ffcd7e6d704acb1626d7235b21c6cbbd69824644413b73f2489c50871c96888fbc4a2e3011bc48461e0e9ba7ac3c285288634e9c54362274e7f680fb1052e267d773466f130e9b93da79f3823d2b7c7687784fe48aed91957a550bc75035d877ee4ada270199c4e23af1923c155a6cfdae6ea215ef6a961c89565d9007c63b65d9de502d46a7bfd20f2c2e969e45f79ed8dce588ae976710f779ae04c3140638973a699bc103118872ee70b3ff2e7c174068ce69a2ef70885263f1f9e09d1b66c9cd6cd174dc3707a031c2c25defe97833e60a777bb17725738ab1a48836fa2b6fea64d201b66798e7a07d1e02072d0eed70e7e4708b6ba5546df975e7883daa390254cb282bebf17006e12efbdcdfd4b0128bc1550511a625842aa6a0d2a59bb8c3c6f26d9b35d6b545f1f80a57e95eb3bd6def1ba465d91e5acd08f03b52fa5f1b04e55ea090449d8a1c00fbe41f61f1b597960a7040000",
    ],
    [
      "ETag",
      "8LXcmdWrdlHRtO//xbO+Pg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "91db4ec2401086df65bdb46dda520b25e1a218449206b580261a429632d4d2c3d63d401ac2bb3b5b0c9ae0cdee1cbec9feffec91e459b5217db2ced22f05bcb94941bee82006a10a29f0aa5925801804244d91cc43f5dadcaa6a9cdbc162367b133bf91e1e06032444f2092525fd23d966506c04e97f1c49454bc0b1d5aace11914dadb3c9743e1a8f622c946ca30bd3451485c368444ec665a490fbdf8987e8299cffc72f4f06d9b1750c5be05025a09faf39db412227da99a0655d802998e20908d2c26d23e54cd594336662c5ec998eefd9aee3fab6ddf53de40a965099b10ad1c50c7511c9242d6276405f4403bc0dd1e2b63df758765afd3a72ef02cb715b797f01ff17e876aca07705b81720f0ac8e7fd5f72e7daf1758b6ee2f7fa40d1b09e29933b429403bb4cf6eef99de80c4cd48aec02009c57f7acce4393f7d03aea07aaf04020000",
    ],
    [
      "ETag",
      "kAuVy+unGk09USSWsjtZAw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "1d",
      "d0",
      "41",
      "72",
      "82",
      "30",
      "14",
      "00",
      "d0",
      "bb",
      "64ad0e0410d35db008a5a5c51928099b4cc0af40ab2020103bbd7b9d1ee1bd1f248b02fa5e0ccd175cd01352129355b1ca35ca46ed1e8707aeb7db8c051f05db6237be8a09a74752fb1661f3e1968e24dd8b317e930110ea09eee8bbc877bdae044d9ffc4f979e982f15040d13fbad7736f13cf0a0e45c157939358d383bd13cf39a3bda6833cbb7d35d48f4c88c9eefd1e5f25ec1f7c6e80f39d6b0132abbf6e5d58cb8ab73dbd8aca5492199b4840fd3ab912d79557b4a50aa3be1fa7ec34b3e182705476ff3e296b4ed0561a50caa243bda79d88a042d10cc6dd5412faa87dbb00859a0ff0431a8161e130ec80e3af4fb07f085bfec23010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:48 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-9-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "db",
      "3010fd5722ef2b6dd31f2469a56a542540a4368534054dd31439ee2518d2b8d84e3786fabfefe2d00e84049f62fbdebb77f7eef2421e79b9262392f2fca902f9fced41a4e48480a639befa17d33f5e7af3e00683cbd9f574f67775cf6f6fc66344f09aa5e8665b404b894a3250a3d5b29d4b516da914a285895ac356d719d8bd6ecfb16dd719204d4191cd78f988e47badb76ad4e91ca4dbb910790174cb559b89cdf1bdb3eb75b6523c00d3aaf35eb18322aaf3a9e6f74230aab928c7ab25ea570a64021bca0bace03f719d9ebdcfdce674d3ce11bce30c2863a22a755d15a660a2cc785e4993958c5e88a9f2cd812cfd993f8d2d268a6a532625ddc089b5a69a26fa790bd645b4985b4178b188e693385884c9727ae5cf27ede962b69a874bebeeca8f7c4bd3b400c3b5c6d699b9857841fd3528cd4ba31ed7cfb5f2ab3fc1c7a1d4049456d00413d77668d7b3876996ba2cf3faa76966439a7aa97b4afba9cd860318ac53a0c833a286454becd971baa72ea549cfe9bbc9a097d9c9301b78894bb3bed375dd7e0640f627e4b7e41aceb9da0ac51b87c85d14c47e1247ab703a897dd34246ab429f3785d50dbcad516383896d7711f8495ffb3aca05aad5960761ec4793691cdcfacd94679053f6bc7cc23967b45080682ad1400d722ed6681a092773ff1cc1666ad787a022a39f2fa4f6bdaee48ded477a8c43ac4bd6e64b9671148497a69c03e296169581ec9a0391c0845c63cdfb5f88c32d6d72909b951ffd20cd5304194828d9d7f344b0097cf5af1d361fa1b8fba8a234de717998aa3598846689b8e9f5c8f63cb7b61ec1527f880d3df760599da3ce081b28f56b43cde6639f8d58a58e200ce2fc4363d5fe1f8b6f998e77040000",
    ],
    [
      "ETag",
      "EFCx8bQj7I4GLPCLzUhiVQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "301086ff8bf7954824cb688bd40f64c932249a6409952a4d1572f1c1dc1a1fb54da628ca7fdf9976d9b44ea25fe0ee780eee5e5e1fd993d482c5ec41d6cf1d98c3871adc371f6cc176ca59bab5a82db08081e33591fc297adecc2e27cb15ced32b399f2fefee4c727d4d842d7f40c3597c649504252c8bbf1f99e60d505b89aa6b74d167017387d61777f9365d2d296f50f87c759b65c92c5bb053706e14dcf1a2e7dfd1767f0ad8233e6ca10203ba043f4b6bf0114a97fa352d6f5a05238b9d29c1b21eee1fd406bb961bc411554657a371340d27e349148617d194388525771235a1b73b1a8f39745c6df1272dc9c61f89307d4c0b57fd754f7529fa457c98ae727a8f9fef6f80972576da158360258d752fe2fd065f45f89754fc9d20fd29a986a01ab4003344c9b6e04218b07690445bf0b63d63b3f53a7bab8a1606a51806f77200506e7f06be64ebe47fd292bffe68354ff2c51bc23a72cd19c9d39bc52e4f6e369ebb7f35c2ece0c06e0c92a92c783f8dc3e9e5a78b287cb1d867f4b6a3efc4ce7410b092d349f92a1d8b2bae2c9c7e014b872d1987030000",
    ],
    [
      "ETag",
      "ak6qPB82GNoDI9iDDGXXrA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `id` as __pk, `ltv`, `last_name` FROM `records` WHERE  `id` IN UNNEST (?)",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-10-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8553fd6fda3010fd5722ef974de22349f30148551741d665a2691742bb6a9ac0761ce635c4d4769850c5ffbe4b52dab24aad8414cef7debdbbe7f303bae365864688f0d57dc5e4eec31f415007318d57706a4fced9641bd9d764fce3ca0d4430ff368e83d35340f09aa5f07a53b0ae1295a44c8de6b3de4a8a6a83a5105d28d4b5ccaee539a66dd99e69fa9e033cc58a7ccacb3b60ffd67aa346fdfe41bbb712625530bce1aa47c5fae9bcbfb5fb1b29fe30aa55ff58b20f2aaaffb6e8592128d65c94a7f31934502926176c8d79012d3c3333f2f9b8748fe3756f05e02da70c532aaa52d76d41092aca9caf2ad95445a307d4b4f9e20f9a85d3709c1a4b9e2d0dac8cc56273d7319685de2eeb0f567a51e2355b1a5f92cb0b6329191532534be3e66b9884464b8b62631ec7e12c353e9e7d02d18c29cdcb4632c5a460b5dca32bd1ebbba8095863c5dae4c2373d6c0dcc21c9894ff3c1894b7293113220be8b4f8849870e7332c230f0745dbd61e15294a6ed98be457ce2da2e76f381e5fb2e19ba9995316a12eae41ef51de7c442fb0efa2bb96613ae3642f1d61a74934469b84893793c0ed2b01923c755a1276d73f5102ffbd430e4c2342d00be31dbbece72016ab5d7519c8649304ea3ebb0bdde295b61ba9bddc305e7b8500cd05882dd9ac90b918171e8ea7216a5d1651c4c81d1dcd9d501a1d0e8e7c33321dd6d1aa775f345419204b7c0c152e2dd7f39e803367cbf7f21778d8baa8134f8266aeb6fdb04aa6d7b8eeca3c8398a3cb4ffb5875f07c18eb7cae8fb3c4c6e517b94b09c4956d2f7f702c04de2dda77a783780859703324a430c5b48552d42256bb791af9b510eeca1e7b9a8014bfd2a37b0cc83e5758dba225bb3523f4ed4be9bc6c43a55a92710246189e2283e87ec3fa17261fbb7040000",
    ],
    [
      "ETag",
      "2DGeDvI2VbCXP5AoAUJCNA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "92",
      "5f",
      "4f",
      "c2",
      "30",
      "14",
      "c5",
      "bf",
      "4b",
      "7d94e136267f96f000080812c4311ed41052c605076377b61d4808dfdddb61860926beb4f79efe4e737bd223db84f182b96c1eae3e5310879b15a8175d7820d34849da128c25b00203c557444abc1d55261defcd711efa7efcfaf465dff17dbd4e840c3e60cb997b64cb10a28564eefb91c57c0b649bcd920d21ea90e8ae37f4dbddb647c216175a184e06834673d066a7426e89d4eee2e80c9e1bfe3f3c976a96d5b96bec7bbd61f72fdbf454606b9c7bb0040171007aea44e01a02d5d38148be4d223024a62200c932383b58094c132e100d520ccb34acb263da965d36cd4ad92130c280ab10636227639a8f29543cf2704f79300d88aca46896d9ba23d9cadea12bfbbe56b4ecbced83d86128b3797f1bca1743a554ac55f3761cf028e457fce5c69a532c5ddc6daee00a76f263a75a2b9a79d74205728962a11dd39f87350f248e04524a127440e639ac16ea00e9765789140a2ce0f43b1e4375ee4fdf012e434e7a020000",
    ],
    [
      "ETag",
      "so+P7UFRZ44DJTnYKx2/aw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "1d",
      "d0",
      "41",
      "72",
      "82",
      "300000c0bfe42c0e8a4ad31ba24044238250e0924112228d201844b4d3bfd7e913767f4096e74c4ad25d05abc12778665338cec727d5887bf575dc433788dc62bd4daca5d43797e81446751de05eb78db3ef9d69d7da83f4b3455159ba364149b8dfe21e2fe8b668dca684928a2eceab903e4ba312be8ed3f8ece2467cf1a156bb4aab0919dc8cd89bc5c1dc999e63b568b7bb2729137b036e525910319badfcb950586b35ce61c0b0f5c2558adae13e2b3d55e1a61204e821b9b3fcf8468f2347c7ab192ba7c905cfcbd4a6548506b3f855f1f97aaaad131e991a75280223c086a6bc3149cab75b9b433802ff09a47b36ec3db164d98dddc0ef1fbe062fc123010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:50 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-11-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6f9b3014fd2bc8fbb82640421e8d14ad514ab768096981b49aa6091973616e01136cba5555fefb2ea6e95a556a3f61fb9e73cfb90f1ec91d2f13322331cff60dd40f9f6e454c4e08289ae12b2fe072fd772fbdfd67b3a2b97b37f87e552de67344f096256951e5d093a2a919c8d92ee867b5682a5a0bd1c3443ddbeed963c71ad883b1654dc60ef224e4e99a9777c8fead542567a679d4ee67426439d08acb3e13c5f3bb793f30ab5adc0253d27c2d69a28a34df17fd920b461517e57c17a08146421d4141798e16fe3393f8ec75ea3ea7453f43f03d674019134da95a5b98828932e55953ebac64f648b4cd170712b86b77191a4ce44d5146252de0c448a8a2917aa8c0b8f0b71b63e55d6cfdcd225c6dbd28587e73378bfe72bbde6dbcc0b8f9e6faaea1689c83e61a73e34cdf3cbca07e0252f152ab87ed73abfcd4a0d5dbb1b4049496d005a38935a6f6d43a8dd378c2d2e97014a716c4f1349e8ce830b6d8a9034e1203459e16d52c5a8a7232846132b047d174024ee438a734a2cc1947563c8a1d67429d0158e47042fed45cc139979590bceb10b9f157a11b85fece5b2e42579790d22657e79db1b680971e15161859968dc077ea3ab4512e50ad6df9ca0b5d7fb10c57d76e37e53564943d047b9c734a730988a635365041bd1109368d788b8d7b8e603db5cb635092d9cf47d2f6bd75f2a2edcff41087d85a56fa4b82d05f795fb59d23e29ae68d86dc770752031375829e0fbf10876bdae520573bd7ff41ba271f52a8a1641fcf13c13af0e1df765c7dc4e2f2a38c5478c7ed61b2156135745bc475b147b66d398329d1e05abd898d1cebd8b336479b110a28d55345ddea63a19d58239f4118c405f074af0eff00584363107a040000",
    ],
    [
      "ETag",
      "imePLxqsNq+/palEk2KQpA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d93516f9b3010c7bf8bf74a24c8d2a442ea03d9d28e95262da10fd35421171fcc9df131db648aa27cf79d69974deb24fa0277c7efe0eecfdf07f65d6ac162f6289b1f3d98fdbb06dc9d0f72b0bd72966e1d6a0b2c60e07843e4f597cb7c97b6d3f0f3febc75d757a0cf169be4e282085b7d8396b3f8c06a094a58167f3d30cd5ba0b60a55dfea72c802e6f69d2f6e8b3c5d5f51dea2f0f9fa3ecb9265b662c7e0d428b8e3e5c0bfa1ede118b0277ccca10603ba023f4b67f0092a97fa352d6f3b05138bbda9c0b2011e1e3406fb8e1bc4095526513489e6b3701a4de761b898cf085458712751137bbfa5f99843c7558e3f694b16bd27c20c316d5c0fd71dd5a51836f161ba2ee83d7ec0bf015e55d86b578e82b534d63dabf71b7c51e15f52f13782f4aba41a831ad002cc1825bb920b61c0da51126dc9bbee842d379becb52a5a1894621cdcc91140b9dd09b8cc36c9ffa42583fdd1ea6352ac5e11d6916d4e4891deacb6457273ebb98717232cf70eecad417295056fa8289c9d9f2de6e1b3c73ea0f71d7d2776a68780559c8eca27e9585c7365e1f80b6543eaf388030000",
    ],
    [
      "ETag",
      "KYFRvIm20Jy8mtKGen57OA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `id` as __pk, `ios_app` FROM `records` WHERE  `id` IN UNNEST (?)",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-12-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "3010fd5722ef974dea47d2af349510ab6806d94a0a690a43d3d4da8e93199238d80e5385fabfef9250a04302a9527a7eefddbb3b9f1fd11dcf2334418427f72593db4fb782a016621a2770fafdc7cf591c9f9ed178b6528b8ba94bfad9d5e5d1113078a552382b52d656a29494a9c96ad949a4280b2c856843a2b6d56b5ba381d9b37a23d3b44703d02996c6739edf81fa8fd6859a74bb7bef4e224492325c70d5a1227b3eef3ef4ba8514b78c6ad53db4ec828beabe6f7a9c0a8a3517f9d16a0905948ac935cb304fa184176544be1ea6ee709c7512203f70ca30a5a2cc755516a4a0228f7952ca3a2b9a3ca2bacc577fd0d29dbb27a1b1e1d1c6c0ca58af8bbb164442ad71516c8c6fc1e2dcd84846858cd4c6b83e7303d768d89e6fac7cdf5d86c6e7e32fe01531a5795e3b8598a4ac72791a86f7f60a2a01d658b1065cdbe6085b63d32131b1693cee0f496c3242c6c41ee23e31a933608388300c3a5d65af553817f9108fd98060c7ea1327a294f5a9653b16234373ec38fdc1d8b61c4c2c8ba15d0bfd955cb319578550bc9908ba0ebcd05d87c1ca3f99866edd468ccb54cf9ae2aa265ed7a9a1c9b5695a407ca7b75d8572016ed5883d3f7483e949e85db9cdadce5982e976790ff71ae3543160638933a6993c17110c0e5d2c965ee82dfce91c14f5555dec190a4d7e3dbe08c26d514f5ad75f340d82e90d68b09478fb1f0675c062ef76afecae705ad6949a5f474dfe87064016f4f212f50ea2c1413442bbdf3bf8b510ac76e38c2e576e70839aa380c54cb29c7ebc1740ae810f5fe8feb900171e0cd8280d316c2155950995acd9469ed5ad3ca92dcb1a0d514d96fa0dd6b3edfdc8ab1c554696b15c3f75d43c977a881554aa671280b044bee79f02fa0f975a491eae040000",
    ],
    [
      "ETag",
      "JKXDffGHcfDUsOPAEb3mVQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "30",
      "14fd2fd7d711b789c390f000ba0866019c12638c2165dccdc1b65bda4e4208ffdddb61d004e34b7beff948ce69f7b0ceab25746191679b1ad5ee2243f3688718755d18cd97a44a2338804664acd40fd9cd5d7ebd7d8db3b57f35ec5c4e93974dbfd763854e3eb014d0dd439a63b1d4d07ddb43254a64db7c2ed72c313b69b7d1f839bc0f63064a5a5a603c8ba2fe200ae1e09c2c39e9b990f2c735984ca2b03ffecbf57e7060458b1853545825684348452b4cccc8f6d3a29405b634d52a410d8db8213245b5148aa8c548cbf35b5ed0767dcf0f5cb713b4595850224c4e156b674f1c0f0c1951c4b4e57a6005aa19b969da9c9f0c7b4d0d3b19556393ee371dfc4ffb273a15853ee7db67f6f7ef54839d413d55c41535da76eeb1e92dd9f6865fc53a1c4804ffd43037c7fdf0052041617f06020000",
    ],
    [
      "ETag",
      "sJg8Di5wYRgk23H7/PcWqA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "000000000002ff1dd04b7282300000d0bb64ad0e207ed21da8a8105006a4914d8668f8446a200195767af73a3dc27b3f20bb5c9852a4133776071f60c80c38b94ca866e187f61dfb821319e9ed8b2545c7ecba3a8e698cc210bb598291986e9ad790c2c289165795affba2d89b2be4e5db990b3de294aa4dbdf23c0db6618c677827575a649ce83585a833f7892cf92ec5591c22cbd6cdca42eacb98e3debfefaf27213dbeee154d0e3aa55de03fe333a9cebcb64eb9b774136e1a31d51747cc1b448fbbbbf5d9b6f0705bd64330ae9c7e28e7b9cf85081e82da119977f5406faa90874d6fa0c2455b014680bd9a4a3245aab77b3a837004fe13483734ec3d61b34c32097eff00bfadcd4d23010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:51 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-13-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "9b3010fd2bc8fbda24909084448ad628a50b52423a20edd66942c618e68ee0d4369db22aff7d67d374ed26b55f00fbdebb77f7ee78443f599da329ca5879df5071f870c7337486a8c225dcfe4ed4a294fcea7a1907e5f2aefc727bb875e6b31920986649bcdb57b42379230895d36ddc2d056ff65870de81441d67d07146aedd77fa23db1e8f5ce0495a152b56ff04f60fa5f672daeb9db4bb25e76545f19ec92ee1bbe7fbde43bfb717fc8e12257baf257ba0227b6f8b7eac38c18af17ab68da180465291d21d661594f0979967e7af537719de754b003f30423121bca9952e0b52105e17ac6c84c98aa68fc894f9e203c5feca5f2416e155b3abd31aefe8999563855375d853eb32daacad20bcdc44eb79126cc2345e2cfdf5bcbbd8acb6eb30b66e967ee45b0a6715355c6b669d9b530807d0cfa954ac36ea89bed6ca4f0605ff8f4513405ad236988eed11763c7b9215d99814de60981536cd322f1b0ff120b3c9c4a56e9e510c3c236a58b8e6351eb8b4184dbc74308687ebf587e9c41b0dd30c17b947ec497f4286e878867e09a6e805937b2e59eb10ba8982c44f93681b2ee6896f5a287053a98bb630ddc0cb1a153498dab603c037fa3aea28e3a0a62d0fc2c48fe68b24b8f6db29af6889c921be873917b89214d05880818a8a35cfc13414ced7fe0580cdd4ae4e4189a6df1e91f65d57f2c2f6677a0243d4252bf346711205e12753ce09718dabc6401eda0f2428e122879a8fdf01076bdae6409fb77ef415b557112da8a035797f9e00368177ffb6d3ea0316961f64a482336c0f915a8408da6e1133cd9ed88ee379da7b000bf56fac6fbbf6c9339d4367a43b5aaba78edad587465bb1463e8320080b101aaf8e7f0035582eec7a040000",
    ],
    [
      "ETag",
      "zTtCgsoPVHSIgHjgXZyZ1A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d93516f9b3010c7bf8bf74a3468b37443ea43d8b22e1a4d5a20eac35421171fd49df131db64caa27cf79d69974eeb24fa0277c7efe0eecfdf7bf65d6ac16276279b1f3d98dd9b06dcb50f32b0bd72966e1d6a0b2c60e07843647eaf3f14d7ab8bb759fe4b7e2dd2e4669344cdf93911b6ba8796b378cf6a094a58167fdb33cd5ba0b60a55dfea72c802e6769d2fe645b65c5d50dea2f0f96a93a6f3245db043706c14dcf172e05fd1767b08d803de655083015d819fa533f800955bfa352d6f3b05138bbda9c0b2011e1e3406fb8e1bc4095526d1e9249a4dc393e864168667b329810a2bee246a623739cdc71c3aae32fc495bb2e8940833c4b4713d5cb7549762d8c487cb5541eff103fe0df0aac25ebb7214aca5b1ee51bd3fe0930aff928abf12a45f25d518d4801660c628d9955c0803d68e92684bde75472c59afd397aa6861508a71702b4700e5b647e073ba9eff4f5a32d8b3569fe6c5e205611dd9e68814cbcb455ecc2faf3c77fb648464e7c05e19245759f0868ac2e9fb7767b3f0d1631fd1fb8ebe133bd343c02a4e47e58b742caeb9b270f80d17db53b588030000",
    ],
    [
      "ETag",
      "Shn9TQNG/RSziKTLBWUB1g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `id` as __pk, `ios_app`, `last_name` FROM `records` WHERE  `id` IN UNNEST (?)",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-14-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "6f9b3010fd2ac8fb67d3f203080949a4aa8b52b6b1a5b425a455354dc41843dd00a6b6e99455f9ee3ba0699b556aa548e1fcdebb77773e3fa00d2b623445114bef2a2ab61f6e79843a882a9cc2e9c98fafd74bfdf3cd683b88e6fadfe1edcf4d5c5e1c1d0183d52a89f332a35dc92b41a89cae96bd54f0aac482f32e24ea1a56d71859ba6998235db74716e824cd92052b36a0be51aa94d37e7fefdd4b394f338a4b267b84e74fe7fd7bb35f0a7e4b8992fd43cb3eb8c8fedba6c7192758315e1cad96504025a908698e5906253c2be3e8cb61ea1ec3792f05f23d231413c2ab42d565410ac28b84a59568b2a2e9036aca7cf18196cec29907da9ac56b0d4b2d0ccb4d07222e435c966bf8ccb054618173bad6befa67a7da5a50c2452cd7dad577c777b456ea7adacaf39c65a07d3cfe04c631958a158d6d80a38cd6968f93715fdf472dc00a4bda82a1ad8fb031d6275112d924190f8651a2d3281a47f6100f229d4c2c6ac511c5a05375f646850b5e58c36412c706b127261deab13d19c7d6d0229639c0c998267a426dcb1e4e74b4eba03f82297ac264c9256bc783ae7c3770c2c05f79f359e0346d24b8cad4495b5cddc4cb3a153419eaba01c4377adbd528e3e056cfdbf502c79fcd03f7d269af7841534cb6cb3bb8e4046792021b0b18b7a2e294c73038747eb67403f7cc9b2d40d1dcdbf99e21d1f4d7c3b320d896cda455f38f66be3fbb060d16026fffc3a00ed8f2ddee85dd25ceaa86d2f09ba8cd7fdf02c8805e9e23f320b20ea211dafddec1af8360cf5b6774b172fc6bd41ef934a18216e4fdbd007203bcfb5cf76f07b8f07ac0462a88610b89ac4d88a0ed36b2bc69e5516d98b631400d59a857d87860ee475ee7a833d29c16eab1a3f6ed3443aca14a3e91008425f25cef1ba0ff00c78d011bbb040000",
    ],
    [
      "ETag",
      "DJFYS0+h6y3bC0z5jKkdpQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-14-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "41",
      "6f",
      "82401085ffcbf628a46a084d4c3ca82596866a8bda1e1a435618104566bbbbd818e37fef2c36d844d30b3bf3f8de64f6658f6c9b9709ebb1559e7d55200f7719e8375384a0aa422b3a04960a98c540f38c487fdf2aabc1e0637dff186c85db12fe4bf69ef5fb44a8780d3bce7a4796e650248af53e8face43b205b14892d21fa204ce74fe6ded80b49d8616284c9220806c3c06327abb1e4a8222ec4c5359c4e036f30f9df5570a5a3ba6e7cb379e84fc6b76ccb93c536b80a210509650c6677217103b1f64d2c8aef4401b6c24ac6a0580dd73f328995e012d126c5ee3876c775dadd4ed76db71f5c87c00263ae732c895dcc683fa651f322c46f4a851940d6250594d6df3dc99dfa1ea6d2b282a67906b9c75cd5dbfec5dddbf82ce645ceafe86e03a4bc5017dce31aae60e7f6e8116a5029cac41896bf771a1e487c9548012930d9b4cf398dd06447c37b6686c5624ecfe329d7e7fef4034eb30bea7b020000",
    ],
    [
      "ETag",
      "Iv+nuAAWh/DLkp6+pIMgVg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "000000000002ff1dd04b7282300000d0bb64ad4ecad77487564190200484b8611002c50f50022238bd7b9d1ee1bd1748d294711e77f59555e0138c898016e9e20cb5e80127df763421c3f55d92bb6ba485ab6c69633a726a20b7c0b9e14da4b84c66aaca748f9ee7d8f1a3d669f9a320b847e5eda39a2cb16bd6c36d275d03d9174f222d47f33e30f5f67d08605f9ff4c046fe2a3015a25b96e6e292909218db7c7f5c17b8c64727e73b6279686e43769814c9d42c3e8fbaa30a37db50e3ea9783954d38c94106f7917bd1e738ab861f9a796b01c72977977a27d926ca7b7d29f9bb340f306d6054513003ecd9942de371f9768b324233f09f107763c3de132b96b4ac05bf7f82cd7b8223010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:53 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-15-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b4fdb3014fd2b91f771b44dfaa652354a1b46b6361d690a9aa629729c9b6048e2623b2084fadf77e3500642824fb17dcfb9e7dc479ec82d2f13322131cfee2a908f5f6e444c8e08689ae1eb6d7e1a7aae28be6ee3556f717de1fefc719a3e4ca788e0354bd16297434b894a325093eda69d4951eda814a285895acea0e50cfb76d7e90e6d7b34ec234f419e2e79798bec6bad776ad2e91cb4db9910590e74c7559b89e2e5bd73dfedeca4b801a655e7ad64075554e763d16fb9605473514eb71b34502990111494e768e13f33894fdea66e735ab43304df730694315195bab685299828539e55d264259327626cbe3a908dbb74e7a1c5445e156554d2028eac846a1ae9c71d5867c17a6579fed93a58cd426fed479bf9b9bb9ab5e7ebe576e56facab7337702d4de31c0cd79a5a27e6e6e305f513509a97463dac9f6be5e70679efc75213505a41138c46f6903a63fb384ee3114bc7bd419cda10c7e37834a0bdd866c77de8273150e41951c3a2a52847e3c16808dd6e344e8145fdee388d906547a36e9c26a93d38760609d91f9107c9352cb8da09c59b0e91abc00bdd280cb6fe7c16baa6849456b95e34c6ea025e7bd4586064db0e023fa86b5f47b940b5bae59e1fbac16c1e7a976e33e52564943d6eee70ce29cd15209a4a6ca006b91209368df8b395bb40b099daaf435091c99f2752f7bd76f2aaed2ff41087585bd6e64b3661e0f9df8d9d03e292e69581dc370722810999a0e7fd5fc4e19a3639c8c5d60d7e93e62980142494ecf37922d8043efddb0eab8f585c7e94511aefb83d4cd5224c42b345dc147b603bbdbe63fe554da57e171bf486879ed539ea8c5040a99f2b6a561f0b6dc42af502c2202e806f7ab5ff07e9f57fe87a040000",
    ],
    [
      "ETag",
      "klBTIEom+UbM3DhQEKJBfw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-15-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8d93616f9b301086ff8bfb714482364d37a47e48d6ac63234993104dd55421171fcc9df131dba48aa2fcf79e69974deb24fa05ee8ee7e0eee5f59efd945ab098ddcbea570b667752815bfa6005b655ced2ad416d81050c1caf8874cb99f8b0b69b6f5f92775fdbdbcda34baf16cbcb4b226cf1036acee23d2b25286159fc7dcf34af81da0a546dadf32e0b98db35beb8ce56c9fc9af21a85cfe79b341d4fd2293b04c746c11dcf3bfe0d6d7787803de0fd0a4a30a00bf0b334061fa070895fd3f2ba5130b0d89a022cebe0ee4165b06db8411c5065109d0fa2d1303c8d4e476178311a12a8b0e04ea22676b3a6f99843c7d50a1f694b169d1161ba98362ebbeb96ea52749bf8309967f41e3fe0df002f0a6cb5cb7bc1521aeb9ed5fb0dbea8f02fa9f81b41fa5552f541156801a68f924dce8530606d2f8936e74d73c4268b45fa5a152d0c4ad10f6e650fa0dcf6087c4a17e3ff494b06fba3d5d5389bbe22ac23db1c912c994dd7d97876e3b9bb17234c760eec8d417295056fa8281cbe3fbf1885cf1efb88de77f49dd899160256703a2a9fa56371c99585c3135b6c387988030000",
    ],
    [
      "ETag",
      "tQMd9SsUWJI+KuYUwtLDOQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `id` as __pk, `date` FROM `records` WHERE  `id` IN UNNEST (?)",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-16-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8553fd4fdb3010fd5722ef974d2b6d92a6e98784580561cb5402a429084d53eb3897cc90c6c1761815eaffbe4b42f918124891daf37befdeddf9fc406e789190098979765b81dc7cba1631e910d034c3d3acb8efe76e9afd54a6b8ff7a2b8e52f08ecff7f791c16b95a2eb32873d252ac9404d16f36e2645555229c41e26dab35cfc1cd3b66cd73487ae833a05793ae3c50daaff685daa49afb7f3ee66426439d092ab2e13eba7f3de9ddd2ba5b806a655efb5650f5d54ef7dd3835c30aab928f617732ca0522097b0a63caf1b7c5226f1b7d7a9bb9caebb1992ef3803ca98a80a5d9785299828529e55b2c94a260fa429f3c51f32f766de6164ac78b232a83296cbf2a663ac12aa61651c87a727c64a021332512be3f287177a464bf503631104de3c323e1f7c41a30494e6456313d13887dae27112fedbf9d702aaa982165c0e4d975a23731ca7f190a5a3fe204e4d88e3513c1cd07e6cb2b1034e1203459daeb3372a5a88623cb08676c21c97c68e0de9d81cb8966d5909ebf793613f3507295030fb63b2ed90bf926b38e2aa148ab7e32097a11f79cb285c0487d3c86bda486995eba3b6b8ba8997756a6c72699a1612dfe96d5ba35ca05b3d5f3f88bc707a18f9175e7ba533c828dbcc6ff152539a2b403695740d1ae489487070e4ec74ee47fe69309da1a2b9a7b31d4391c9af876741b4299b49ebe6974cc3707a851a2a25ddfc87611db8d5dbed0bbb0b9a570da5e137519bffae058885bd3c47f6abc87915b964fb7b8b5f87e05eb7cee47ce18557a43d0a21050905fb782f90dc001f3ecfdd5b412ebe16b4511a63dc42a66a1326a1dd46be6e5a79545b8edd1f91862cf51bccb1c6bb91d739ea8cb086423f76d4be9566883554a9271282b844811f7c47f41f7d8fab20ab040000",
    ],
    [
      "ETag",
      "gnx3l6fgJs0ox+qoDfeEFQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-16-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "61",
      "6b",
      "83",
      "30",
      "10",
      "86ffcbedab4214b19bd00fede6b68294e9da2f1ba544bd5a5b352e892b52fadf77b1631b3808c9dd9be7c8bd97331ccb268700d2b2f8e850f63705ead80409aaaed28a8e56340ac102d4bc20328ebad9e451de9de6b76feb3eeed378bf5f14d329112adb63cd2138c3aec42a5710bc9fa1e13552d976db1e09d17d6bb2c572153e850909b5c88db05c47d16c1e8570b17e4a72aef1b7e461b60affe337170b0e224d7087129b0ccdf3ad1407ccf4c23853bc6e2bb495e864860a0678b828a4e85a2e85b049b11d9f96c75cc7f5199bf81e8195c8b82e4543ecfa951a032d34af1271226360003984e47137ec9f243b830113b9cc6536736de60c3dfe85fc31e48f20770cb923c81b439e8136dfcdce7b8dea450a72aed09866d701dc0b33141a6fa0658716649cbeeeb9d4d7fcf205b353731717020000",
    ],
    [
      "ETag",
      "QLuA7Fr9wB8ZUyQybQhhIg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "000000000002ffedd34b7282300000d0bb646d1c0c424877505b940a4af94c6093018cca47aa04d4d0e9ddebf41af5dde17d83ac28b810acffaa790b5e80cc109916d35c31e95519438f2cb7975503471c24446d66f6491d63b39d9be1ed35c34468062f0e9ebb76df2eb23e4a440fc83f7965ac87ae1b2cd359b1ec335b3d54b8b955f636217bbc98a74353d2243afb83539d8e6b3abab6d43eb8953b28af74aa77bb8c6203528f1883c536751b56daba7516f7a827b0ee8fe2fdaa8928695d356181d47718434bcb7779e461d36618cf8ca085a5409fc5669bc6bcbe456c9483bfb7e2c04650282be8a0d5f4e9e9df0113c0efe7b2e382958fedaa46c804fcd567bd3cf3c77f8b671defc0cf2f4204fa4019040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:54 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-17-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "f7b54080f094d0ca20dd98206c21b4aaa629729c9bd46d88a9ed744315ff7dd74ee9da4d6a3fc5f63de79e731f792477bc4cc998243cbfaf401e3edc8a849c11d034c7d7c3577eb859faebeea7ed754f0ffddffd5e38cf27134470c35274b72fa0a1442519a8f176d3cca5a8f6540ad1c0448df6a0d1ee7b6ea7dde9bbeea0ef214f41912d797987ec1badf76adc6a9db49bb910790174cf559389ddf37beba1d3da4b710b4cabd66bc916aaa8d6dba21f0bc1a8e6a29c6c3768a0522063d8515ea085bfcc34397f9dbac9e9ae9923f88133a08c89aad4c616a660a2cc785e499b958c1f89b5f9e24036fed29f450e1345b52be392eee0cc49a9a6b13eecc1b908d72b67115cacc3d5345aac837833fbe2afa6cdd97ab95d051be7ea8b1ffa8ea6490196eb4c9c737b0bf082fa2928cd4bab1e9967a3fcd4a0c5ff63310494565007e381dba7eda13b4ab264c0b261b797642e24c93019f4683771d9c8032f4d8022cf8a5a162d45e9f63ba376da19c6dea0e7c55ee60ee2a4ebf5e3a1e78e3abdd170945120c733f24b720d73aef642f1ba43e42a5c447e1c85db60368d7c5b4246ab42cf6b63a680971e351618bb6e1b816fd47534512e50cdb47c11447e389d458b4bbf9ef21272ca0e9b7b9c73460b0588a6121ba841ae448a4d23c174e5cf116ca7f6ed145464fce39198be1b272fdafe4c8f7088c6b2b65fb289c245f0d9da39212e695159c8437d20129890297a3efe441cae699d837cdffae135a99f42c84042c9de9f27826de0ddbfedb4fa88c5e54719a5f18edbc394116112ea2de2b6d813bbed8d3cd37b044bfd6face7763ba79e991c2623eca0d44f15d5ab8f85",
      "d662957a0661101720b0bd3afe01661e65907a040000",
    ],
    [
      "ETag",
      "yJiyhLEO3BUY5t8Ex65RDg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-17-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d93516f9b3010c7bf8bf74a34e8323221f5816c59138d922ea17be85421171fcc9df131dba48aa27cf79d69974eeb24fa0277c7efe0eecfdf07f6536ac11276279b5f3d98fd9b06dc571f6cc0f6ca59ba75a82db08081e30d9155fc45dc2cab25e4dff4acbd98be9539f2f4fc9c085bfd8096b3e4c06a094a58967c3f30cd5bf06da8fa5697431630b7ef7c715b6c56f905e52d0a9fe7d75996ceb3053b06a746c11d2f07fe156db7c780dde3dd066a30a02bf0b37406efa1722bbfa6e56da76062b137155836c0c383c660df718338a1ca249a4da2781a9e45677118cee229810a2bee246a62afb7341f73e8b8dae0036dc9a277449821a68debe1baa3ba14c3263e5ce505bdc70ff837c0ab0a7bedca51b096c6ba47f5fe804f2afc4b2afe4a907e95546350035a8019a3645772210c583b4aa22d79d79db0f97a9dbd54450b83528c833b390228b73b019fb375fa3f69c960cf5a7d4a8bc50bc23ab2cd092956978b6d915e5e79eef6c908f3bd037b65905c65c11b2a0aa71fdecfe2f0d1631fd1fb8ebe9338d343c02a4e4765291d4b6aae2c1c7f0319e00ab388030000",
    ],
    [
      "ETag",
      "c6KdZHcHeNVn7mG4/iNoaA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `id` as __pk, `date`, `last_name` FROM `records` WHERE  `id` IN UNNEST (?)",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-18-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85537f6f9b3010fd2ac8fb67d3f203084948a4aacb5ab621a5b423a455374d896d0c750b98da265554e5bbef80a66d56a9932291f3bd77efeef9fc88ee7811a329223cbdaf98dc7eb815047510d33885d35fd5cd67dbbe74e570c2276a73bf10b7575f1f8e8e00c16b96c27999b1ae1295a44c4d978b5e2a4555622944170a752db76b8d1cd3b6ec91698e470ef014cb92392fee807da375a9a6fdfe5ebb970a91660c975cf5a8c89fcffb1bbb5f4a71cba856fd43c93ea8a8fefba2c799a05873511c2d17d040a5985cb11cf30c5a7861c6e4cb61e91ec7792f05f0865386291555a1ebb6a0041545c2d34a3655d1f411356dbefa8316dedc3b898c358fd70656c66a55de758c758c355bc337c34aaf0a9cb3b5f12d3c3f33d692512163b536ae7e78a167b43c3f309641e02d22e3e3f127508d99d2bc6834234c3256eb3dd9e2bfbd8c9a803556ac4daec6e6085bae39210919d3c41d0c496232425c321ee20131e9c4614e4c18069eaeab372c5c88c222d6d81958d862034a46b1139b60866b4f9c813d1c9a3626b1ed326b48d0ae831e24d7ec94ab5228de7a83ae423ff25651b80c4e6691d78c91e02ad3a76d73f510affbd430e4ca342d00be33dbaece72016ab5d97e1079e1ec24f22fbdf67ee72cc574bbb8871b4e70a618a0b104bb3593672206e3d0c5f9c28ffcf3603607467369177b8442d3df8f2f84685b364eebe68b666138bb060e96126fffc9411fb0e2bbdd2bb94b9c550da4c137515b7fd3269005b3bc44f641e41c4423b4fbb3835f07c192b7cae8e7d20baf517b14b2844956d0ffef05809bc47fdfeafee100169e0ec8280d316c2155b50895acdd469e37a33cb1ade1686ca3062cf59bdcd875f796d735ea8a2c67857e9aa87d388d8975aa52cf2048c212057ef01db27f01afe17b97b8040000",
    ],
    [
      "ETag",
      "Zuh+22V8r59i9svqSojWBw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-18-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff7d92516f82301485ff4bf70a0910831b890fd311a73366223e2dc654b83014b8d8168d31fef7dde222cb58f6d2de7b7abef4f6a417b6cfca98796c9ba5871ac4f92105b5d04500b2ce95a4adc252023318289e92b32f0e0b7f7a1abeade42e2cfda7c44e0f321d0cc821a34f2838f32e2cc9208f25f33e2eace40510b6d9547bb2a873a5bbc93cf4c77e404281b116e6abd9ec7938f3d9d5b8233157d0222fcfa1ffbf3fe7526d9afa0e2dc360321fff85adaf06dbe1368004049411e8a92b813b88d44407227951e5604aac45049235e6e6201558575c209aa498f6a369bb3dcbb11dd7b2fa6e8f8c39465c65589277b5a4f99842c5f3004f9407d306d194144dd2ac4792ede61dba722cc7322dc7b45a690ae288996c66fe09b95da8959611cf33de619c2ed34abe0efc37d1eb12ad3442053241116b6cfdfdd4e199c47781949b041d99758b6f843a52bac253a20683459cfecb6ba66efdf50badcd91108c020000",
    ],
    [
      "ETag",
      "7rqQEJwBKUsjTnE9f1gqsg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "02ffedd34b7282300000d0bb642d0e68694b777c4a1425e0a0adb2c9048c31c510c247c04eef5ea7d7a8ef0eef1b903ca74d835b59d012bc8191ccac693ecd747b7fd56fdb78c7a51bc84c5bd1f6e218ede216914d9f59f67a95c0405b3a3d3d85f800b74b21b5e2eb18b8ace67ba2b3a838257adc7e20c6ac978e8d0752c2e43897d57117273b58cd68992873f0d135bc784240855da698d7e3680bf3d08b1a9415f55e4f1151a2db046be9a50baee98aced3ae3e3ffb4d3e94996f62c3eede4748981abad84565c61cf6e4a8737b3084846659442a863cf4cf9f627c556bc4d3020dc234fae9c3c3bf0326800e15af6983f97dfbdcb4ac09f8ab8fdbb1a2f7ff0e2535adc1cf2fcbdcd89319040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:56 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-19-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "9b3014fd2bc87b5c93002124448ad62ca56ba484b484b49aa6091973616e094eb1c95a55f9efbb98a66b55a97dc2f63de79e733f782277bc4cc998243cbfafa17afc722b12724240d11c5f45b8f1ae8b87d177d78bccafb797c3fd83eb5f4d2688e00d4bd2edae808e1475c5408e37eb6e5e897a472b213a98a863791dcb754cdbb25dd31cba0ef22414d9829777c8fea3d44e8e7bbda3763717222f80eeb8ec32b17d79efededdeae12b7c094ecbd95eca18aec7d2cfaad108c2a2ecac9668d066a09550c5bca0bb4f09f9926a76f537739dd767304ef3903ca98a84bd5d8c2144c9419cfeb4a6725e327a26dbe3a90b5bff06791c144516fcbb8a45b383152aa68ac1e77609c87aba5310fce57e1721acd5741bc9e5df8cb6977b65a6c96c1dab8b9f043df50342940738d8971aa6f015e503f05a978a9d5a3e6b9517e6ed0fcfd581a024a4b6883f1d074a93532bd244b862c1bf507496642928c92e180f61393790e38690214795a54b368294aead99ed577bcb8ef98103ba93d8ca99798311d0da8658fd2c17004e47042fe565cc119973b2179db217213ce233f8ec24d309b46be2e21a375a1ce5a634d01af3d2a2c30364d0b811fd47568a25ca05ad3f27910f9e17416cdaffd76ca0bc8297b5cdfe39c335a484034adb0810aaaa548b16924982efd3304eba95d1e83928c7f3d91a6ef8d93576d7fa14738c4c6b2d25fb28ec279f043db3922ae69516bc8be3d900a98a852f47cf88d385cd33607b9daf8e14fd23e8590410525fb7c9e08d6814fffb6e3ea2316971f65a4c23b6e0f938d08aba0dd22ae8b3db22db7efda44832bf52ee678f6b1674d8e26236ca154cf15b5ab8f85b662b57c0161101720d0bd3afc0369a4b9427a040000",
    ],
    [
      "ETag",
      "oRU9Vlx8B69T0+jP7vx6EQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-19-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "9a4a09746544e2a1a585550b2d4b531e985064ec4b66707299ed145555bffbce010a1a93c24b7277f95d72f7cfdf3bf6a86ac96276afca3f2d98ed9712dc4f1fa4605bed2cdd1aac2db08081e32591a717667a0b97ea11a2692a7edc9caff9367d3a3b23c28adf507116ef58a1404bcbe25f3b56f30aa84da06eab3aefb280b96de38bab2c9d2f2e29af50fa7cb14e92f12499b17d706894dcf1bce33fd176b70fd803dea75080815a809fa531f800c2cdfd9a96578d8681c5d608b0ac83bb07a5c1b6e10671409541743a8846c3f0283a1a85e1c96848a046c19dc29ad8f58ae6630e1dd7293ed1962c3a26c274316d5c74d70dd595ec36f1e17c91d17bfc80ef012e04b6b5cb7bc14219eb9ed57b055f54f897d4fc9320fd2aa5fba0126a09a68f524dcea534606d2f8936e74d73c026cb65f251955a1a54b21fdca81e40bbcd01b84896e3ff494b067bd36a3ace661f08ebc83607249b5fcd56d9f8eada73772f46986c1dd86b83e42a0bde505138fcf6f564143e7bec1cbdefe83bb1332d044c703a2adf956371c1b585fd5f8fe276ad88030000",
    ],
    [
      "ETag",
      "9FrDZeGike1DRcKVCUayRw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `id` as __pk, `stamp` FROM `records` WHERE  `id` IN UNNEST (?)",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-20-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "14fd2b91f76593fa48d236692b215641363295c0d21486a6a9b5939b6248e3603b9d2ad4ffbe9b84021d12489552fb9c73cf7df991dcf33c2163c2f8eaa104b9fd7427186911d07485b7f3d3b37353feba1d800a87779beb7434e03f264747c8e0954ad17591415b8952c6a0c6f359672545595029441b03b56db36d397dd3b66cc7345da78f3a05593ae5f93daa6fb52ed4b8dbdd7b775642ac32a005579d58ac9fefbb1bbb5b487107b156dd43cb2ebaa8eefba6c79988a9e6223f9acf308152815cc09af20c53785126eceb61e80ea7ebce0ac91b1e038d6351e6ba4a0b43c4224ff9aa947554327e24759aaffe909937f54e2263c993a54195b15814f72d63a9343a2c8d6fe1c5b9b194100b99a8a5717de6859ed170fdc0980781378b8ccfc75fd02901a5795efb44946550793cb5c27f3b804a403555d0800bd774a83534472c656e9c0e7b03969ac0d890b903da63663cea433f614051a7abe8b58ae6224f6c9b8d98eb38a3c461aee55a569fa2d68e076e0f7a000e50b02c3620bb16f92bb98653ae0aa178d30f721dfa91b788c279703289bcba8c9496993e6d92ab8a789da7c62217a66921f19dda7615ca05ba550df683c80b2727917fe535339dc28ac6dbd9034e35a59902645349d7a0419e8b041b472e2f667ee45f0493292aea415dee198a8c7f3fbe08a26d51775ad75f3209c3c90d6aa89474fb1f8679e05aef76afecae6856d6949a5f9f9af89b062016d6f272b20f4efd839343767f76f86b115cecc699fc9c7be10d69ae424841421e7fbc1748ae810fdfe7feb154af7f56d9e0d26a8e5b18abca2496d06c235fd7a53ca97145fad5fc902cf51bcc7646fb965731aa88b0865c3f55d43c96ba891554aa671282b844811f7c47f41fd7bb74e5ac040000",
    ],
    [
      "ETag",
      "UDHM0rXh5esR8jvWf95iJA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-20-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff6d91c16e82401086df657b850628209878d096b626682ceac134c6ac38501418babbd45ae3bb77c0a6ad8997dd99d9ef9fccfc7b64bbacdcb02e5b67e97b0de27093827a698208649d2b495785a504a631503c2552e2e72209fd30fcfcc2bc08478fe9c3629ff67a44c8f80d0aceba479664906f24ebbe1e59c90b20d96a55ed085187aac986e359f01444542870d314c6f330ec0fc2809db45f8954bca8fe34b3e12898cefaa3c935d5f2a4b12dae234840401943334425700bb11a36fb496a95832eb1163148d6c2ed432ab0aeb840d4a9a25b866ebab66199966b181dd72630c798ab0c4b62e7531a8f29543c8f704febb106106d489b26edf94165b35da38d6e1dcf701cdff4edc06fc7fccfb9979cef9bd739eb92736dea683b5740fb12f44cef8e40b7e39dd9e5cff48383023911485648685c30ce8edc63e39222f794a8416331a71f7dced4393f7d031c9626512e020000",
    ],
    [
      "ETag",
      "soxYfL9LLxzolmLMFgDYwg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "0002ff1dd04b7282300000d0bb642d8e608ad21d41a90444e527b8c9f0091f51a12151b1d3bbd7e911defb01699ed36120bc6be90d7c823155b4693ecd667a7c9fbd827d84b413c6fbd3c2ba1666efe331567808a3919d3d03875d8db3d290ddd50c6fda6b121ddaa359cd156425eb731ed86287d8c0514fc7e2e1251941d05a4afa7163e04129837ac9545257502e5a9ba971635a5c73bb85e2fae9e5cee35a2d6f7efaf47348fafce4126a3858c4962bcb65233d110c855c6dd50c3ac742a842afb6f5cbbcec1a8685d70d1caf2c15baceaaad64fb3b29ede45098ebc5977ec67c9444d08209a0cfbe617420cddb3dffd0b409f84f207cece97b02d19451067eff00c43ff37123010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:57 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-21-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "b82681901791a2354ae98a144807a455354dc818c3dc024e6d93a8aaf2df77314dd7aa52fb09dbf79c7bce7df08c1e589da1394a59f1d850f1f4ed9ea7e80c51850b785df98783fbb8cfa2efa3fb196faeeffcf870382c1680602d4be26a57d29ee48d2054ceb751bf10bcd961c1790f12f58656cf9a8ccca1359c98e67432029ea465be66f503b0ff2ab593f3c1e0a4dd2f382f4a8a774cf609af5edf07fbe16027f83d254a0ede4b0e40450e3e17fd51728215e3f5621b8181465291d00ab3122cfc6766e9f9fbd47d86ab7e01e03d231413c29b5ab5b62005e175ce8a46e8ac68fe8cb4cd370714b96b77151b84974d552735aee89991618513f5b4a3c665b8f10d2fb8dc84fe32f6364112adae5c7fd95f6dd65b3f888cdb2b37740d85d3926aaeb130cef52d800be867542a566bf5b87d6e955f1ae47d1c4b4b006949bb60323527d89a994e9aa75392cfec719a9b344d67e9748cedd424ce888eb29462e06951cdc235af9d69963b936c9698b6e92423271b27a965d9c9d8c927ced036c7e36c828e67e82098a2174ceeb8645d87d06de8c56e1287db60b58c5d5d428e9b525d74c6da02de7a545060629a16003fa9ebd8461907b5b6e55e10bbe172157b376e37e5352d30798a1e61ce392e25053416d0404585cf33681a0a96be7b01603db5eb5350a2f9ef67d4f6bd75f2a6edaff41886d85a56fa8ba238f4829fdace097183cb4643f6dd01094ab8c8c0f3f10fe0604dbb1ce8d7d60def50f714d29c0a5a93afe709601df8f26f3bad3e6061f941462ab8c3f610d98a1041bb2d62bad813db9ace6c1b69b0501f62ced839f5accdd166",
      "a415add54b45ddea43a19d58235f411084050874af8eff00ae71aa827a040000",
    ],
    [
      "ETag",
      "CMwwEqvdS+4j8ouPYMTwww==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-21-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "8b",
      "fb",
      "4a3448131221f5816cd91a8d8636a14f53855cfba0ee8ccd6c932e8af2dd7ba66d36ad93e80bdc1dbf83bb3f7f1fc84fa13849c8bda87f7560f66735b81b1f6cc076d259bcb55a59200101476b247776fa90b6f3dff37315579f66f9f77c3b5d3e5d5c2061d90334942407520990dc92e4c78128da00b6312dbb46957d1610b76f7d715b6c56eb6f98379afb7c7d9b65e9225b9263706ae4d4d1b2e73fd076770cc8a3bedf40050614033f4b6bf42330b7f26b5adab4124656778681253ddc3fa88dee5a6ab41e6165348e46513c09c7d1380ec3593c41506a469dd00ad9db2dce479c76546ef4136e49a273244c1fe3c6557fdd615df07e131faed605bec70ff8374019d39d72e520580963dd8b7a6fe0ab0aff92927e10c45f25e4105483e2608628d196947303d60e92da96b46d4fd822cfb3f7aa286eb4e0c3e04e0c00d2ed4ec0d72c4fff272d1aec8f565fd262f98eb00e6d73428ad5d5725ba457d79ebb7b35c262efc05e1b8daeb2e00d158593f97416872f1efbacbdeff03b89331d0484513c2a97c291a4a2d2c2f119826d58f088030000",
    ],
    [
      "ETag",
      "vs5hAp8x83n6f/7OKOS5Ew==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `id` as __pk, `stamp`, `last_name` FROM `records` WHERE  `id` IN UNNEST (?)",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-22-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "4f",
      "db",
      "30",
      "10",
      "fd2b91f76593dac60d69925642ac2a013a9500690a42d3d43a8e9319d238d80ea843fdefbb2414e890981429b6df7bf7eecee76774cf8b048d50ccb3878ac9cd973b11a30e629a6470eae47feecccdd58f533b1917f1d9d5e4e41a1f3f1d1e0283d72a45d665ceba4a549232355acc7b99145549a4105d08d4b5ac6edfb1b1d5b71c8c5dc7069d62793ae3c53da87f6b5daa9169eebc7b991059ce48c9558f8af5ebb9f96899a514778c6a65ee5b9ae0a2cccf4d8f724189e6a2385ccc21814a31b9646bc27348e14d99c4dff743f73859f732203f72ca08a5a22a749d1684a0a2487956c9262a1a3da326cd770b34f767fe2432563c59194419cb6579df31564a83c30a1639517a5990355b1927e1c5b9b1928c0a99a8957173e687bed10aa781b108027f1e195f8fbe816dc294e645631a913867b5e14b5fa61f6fa316104d146bc1a58b1dd2f7f0304e6397a6dec1204e318b632f7607e420c67468333b8919019daea3372a52886290608f0cb0e7509bb838397006f6d08b29211eb55c8b62ec30ab8fbd146d3be84972cd8eb92a85e26d73d04d388dfc65142e82c938f29b325252e5fab84dae2ee27d9e1a8a5c62dc07e227b56d6b940b70abbb3d0d223f1c4fa2e9b5df5ef08c65846ee60f70c529c915033691d06ecde4b948a071e8f2623e8da617c178068ae6d62e770c85463f9fdf04d1a66c3aad9b3f1a87e1f81634444ab2f907833c60c6b7db7776d724af1a4ac36f766dfcc716407da8e56d67ededecbd9d83b6bfb6f075104c79eb8cae167e788bdaa390a54cb282fe7f2e80dc00ff7dacbb97035c783b600313ac394c2155b50995ac9d46be6e4a7951f73dc71ea2862cf507cc1db8bb96d731ea886ccd0afd5251fb729a26d650a55e4900c21005d3e014d0",
      "bf397cc803b9040000",
    ],
    [
      "ETag",
      "6lzj/yQJG4dAnbHQCFV0Dw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-22-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "92516bc2301485ff4bf6aaa3edda6a051f548a3a545c55900d91d85ebb6aeded927443c4ffbe9b3a9cc5b197e4e6e47cdc9b434e6c9f64116bb14d127f14208e0f31a8175d04208b5449da72cc24b01a03c5637206cbd048adfcb813afcb81e506d120f0e34ebb4d0e19bec381b3d6896d134823c95a6f2796f10310b65ee77bb2a863ae4fc3c9dceffb0109078cb430598c469deec867e7da15918a1ff25f663e1cfbb379673cfd9f4ab954ebb2be92b379309cf4ffc256e71adbe126802d08c842d0b3e7027710aaa18e45d20429d425162204c94a7379110b2c722e10eba4d42dab6ebab66199966b180dd726638a21570966e45dcc683ea650f134c02f4a856983284b0a685bae9f249be53bcaead1691a8ee3999eed7b57f519c42726b21cfb9673ab9ce799556e16f234e1779855c55c9b1adace0de7730577945da59a66f38928b7d1bc017ba8406e51449a5efdbcbd7b24712a908294a033342e79f650674c9d5a4a14506321a76f3448d4e57cfe06d1d4910ba3020000",
    ],
    [
      "ETag",
      "RXc0l2pyjrZXH26RdHREgA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "02ffedd3497282400040d1bbf45a2c252074768cd2a0880114dc500cad7459cc43a0addc3d54ae11df05feeabf409ca6b8eba2be7ae2127c823966e13a5d271b291837d473f89bd651f230946c0b93efe999b3fd21652fa37319e140cd13d4b2bcca831a21ce17dc7d31b8fe246ec3e1ee36d43f1ab62713ab238f91cf7814fa835519854b6998d4a610080acab2b80e2c1d2665133c4acf1203491928cba67ac2aaf4661577c38c3d4e66c4c93e3756b414f45cde1182e642dd3f99f62c4b39624e86531e78b371ca2eb651396a1849b27efd3ac25069cd9db0a378747dedaa461927b992de88ebb7b77f07ac009e6ad2e22e22cbed1f3c842bf0b77ed4cf355efe9771dce216fcfc02efadb04e19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:59 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-23-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "6f9b3014fd2bc8fb9a0442803ca468cd52da22256403d2aa9b26648c616e094e6dd3aaaaf2df77314d1faad47ec2f63de79e731f3ca15b56e768863256de35543c7ebbe119ea21aa7009afd74296e50ffffcc2adce63b35ae6bf1f2ce7613e07046b5912eff615ed4bde0842e56c1b0f4ac19b3d169cf72151df1ef5879e63d943dbb3acb1e7004fd2aa58b1fa16d8ff94dacb99691eb50725e76545f19ec901e1bb9777f3de36f782df50a2a4f95ed20415697e2efabde2042bc6ebf93606038da422a53bcc2ab0f0caccb393f7a9070cef062580ef19a19810ded4aab5052908af0b5636426745b327a46dbe39a0d85ff9cbc420bc6a76755ae31ded19395638558f7b6a9c459bb51184679b68bd48824d98c6cb0b7fbd182c37abed3a8c8dab0b3ff20d85b38a6aae31374ef42d840be8e7542a566bf5a47d6e959f1b147c1c4b4b006949bb603ab63c3c9c58d3acc8c6a4988cdcacb068964db2b18b479945a60e75f28c62e06951cdc235af2d6f948f73cb4a738f4e526738cdd2a95db8a93bf11c37b78b7c3c72d1a1871e0453f494c93d97aceb10ba8a82c44f93681b2e1789af4b287053a9d3ce585bc05b8f0a0a4c2d6b08c04fea3ab451c641ad6d7910267eb45826c1a5df4d79454b4c1ee33b9873812b49018d05345051b1e639340d858bb57f0a603db59fc7a044b33f4fa8ed7bebe44ddb5fe8090cb1b5acf417c5491484e7dace117189ab4643eebb031294709183e7c35fc0c19a7639d0afad1f5da3ee29a20515b4265fcf13c03af0e5df765c7dc0c2f2838c547087ed21b2152182765bc474b147f670ead81ed260a13ec45c9872ef75e5db8c74476bf55c51b7fa506827d6c8171004610142ddabc37f857cb09d7a040000",
    ],
    [
      "ETag",
      "YrsggBEGH5lGS/lCdZw04w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-23-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d93616f9b301086ff8bf795489064c984d40fa44b37249ab409d5aa4d1572ed83b9331cb34da628ca7fdf99b659d54ea25fe0ee780eee5e5e1fd82fd54816b37b55fdeec0ec3f54e0ae7db001db6967e9d6626381050c1caf885c8b24bc3d77e9763ea9ebebfc3bff36bd8892b33322acf8093567f181950ab4b42cfe71600daf81da04eaae6e8a3e0b98dbb7beb8cd37e9ea0be5354a9faf6eb22c59644b760c4e8d923b5ef4fc3bdaee8e017bc0fb0d9460a011e067690d3e8070a95fd3f2bad530b2d8190196f570ffa032d8b5dc208ea8321a4f46d16c1a8ea3f12c0ce7b329811a05770a1b626fb6341f73e8b8dee01fda924513224c1fd3c6657fdd515dc97e131fa6ab9cdee3077c097021b06b5c310896ca58f7a8de33f8a4c26b52f37782f4ab941e822a682498214ab50597d280b58324da82b7ed095bacd7d95b551a6950c96170a70600ed7627e0225b27ff93960cf64fabcf49be7c435847b63921797ab9dce6c9e595e7ee9e8cb0d83bb05706c95516bca1a270fae9e37c163e7aec1cbdefe83bb1331d044c703a2a5f956371c9b585e35f7972c6c788030000",
    ],
    [
      "ETag",
      "OcA0XCtIS73mmQTZaW4F1A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `email` as __pk, `first_name` FROM `records` WHERE  `email` IN UNNEST (?)",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-24-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "536b4fdb3014fd2b91f76593fa4893367d48082ac8a0a8b42c4d79689a5ac7bd092e695c6c0756a1fef7dd3894c71020454ae273ce3df7e54772cbb305e99188277739c8cdb7a588488580a6099e9e1cd1533ebe82bb63b50c9df8aa7e7371fa90eced2183172a4557eb14aa4ae49281ea4d27b5448a7c4da510550c54759ad586d7b49d86e3d976db6ba24e411a0f79768bea1badd7aa57afefbc6b8910490a74cd558d89d5f379fddea9afa55802d3aafed6b28e2eaafeb9e97e2a18d55c647bd30926902b903358519e620a2fca4574f036748dd3552d41f23d6740191379a68bb430041359cc935c9aa8a4f7484c9aaf3ec8c41ffa87a135373e738b2a6b365bdf56ac79cca5d2b38cae606efd0cc667d65c021372a1e6d6e5891ff8d6b36630b2a6a3913f09adeffb3fd074014af3cc5886344aa1b07beacae0fd2c0a01d5544109cedab6471b1dbb1bc5519bc51db715c5364451276ab7a81bd9acdb84e622028a3a5d44372a9a89ac4b3dd76d390b60b4dd755a6eabe544c0bcf6a2837497b976a3d3ecba4d8f6c2be441720d475cad85e2656bc8653008fd59184c4787fdd03765c4344ff551995c51c4eb3c351639b3ed06123fa96d5ba05ca05bd1ebc128f483fe6138b8f0cbf10e21a16c33b9c301c73455806c2ab1e31ae4995860e3c8f978320807e3517f880a33b3f31d4391deefc71741b8599b4e6bf326fd20e85fa3864a4937ff619330188c8ec976fbcaef82a6b9e11881f92b0dee4b80c012174c70651fc05f53a459b16de58581cba7a1f1218c33d237203fc699c0a6c6b862ee5bce9f2d3e158237a6ac83fc9afac135298f02884142c6bede32241be0cb8bbfbb85c8c57b88364ae33fee345385099350ee365f15c9ecd48edd687bc490a57e87395d7737c0224611115690e9a78aca5b68265240b97a2621882b392ae7f50f1fc6fe1905050000",
    ],
    [
      "ETag",
      "HDaJiOXeqGsjT2fX/hVJwg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-24-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4fc2301485ff4b7d7433db20684848042448240486bc680829dddde8d87667dba184f0dfbd2dc6f8c0832f6dcfed77d27b6e4f6c2fab8475d956661f0da8e34d0666610f31e8a6309ab61a2b0dcc63607846e43c7d1944b76f0fe16efc2482b059e687d42c7a3d22b4d841c959f7c4520945a259f7fdc42a5e02d9369b7a4f8839d6562d5fe3c96c4cbac4c4ead96a3aed0fa62376f67e1da954da6c9cf8876f7df6588edb1852505009b05dd40a73106662036a5ed605f81a1b25403307bb8b4c61537385e853c58fda7ed8690751187582e0bed326b040c18dc48ad8d5921a64060d2f62fca47cac458072478a9abaf54065c8411d50eae011bedcc377024b17cede8e9404d7f15f8b006e20bcca0fb990c5150b176840a7a892d6555fbfe4865bd7faa7e9c191f8b9429a80061b3eb80c6288d66b68684635e031c1e9279fa5b9e8f337d97a159026020000",
    ],
    [
      "ETag",
      "PfKB2+Z81hGDc01uSjvftQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "00000002ff1dd04b7282300000d0bb642d0e20a8e90e102b5650a07c7493892454062142904f9cdebd4e8ff0de0be02ca39ca38e95b4061f60c22a9c67f3ab6ca4bd2cbe3d293995cc311357d38a265db65b1662b45c22bb8c2647dcf677324265dc116d5d2fcc38133e2bb21d7a348aba27f58a051b03d9cf674bf38d2a5675e890503ad637ae14e5d7288587a369dbf9e53cb060ed0c6e0549af054633f817d909c85a9dfa7b5e68fc649d5d06bda83af8d6366d02733c1a9eab5a5cf7b438f77a510556ca6b0c27a108fda947d3664ca4eeb0db4b9d1c879f61e5e3e1b468ae31263772f9896c1bcc001d1f454b392adeee850ee10cfc27a06e7ad0f78449714b5bf0fb070ef3b61223010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:00 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-25-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "fd2b91f7b54042794b684590ae4c10da105aa1698a1ce726731be2603bed50c57fdf8d53ba5695da4fb17dcfb9e7dc479ec903cf633222114ff725c8c3b77b119133029aa6f87abeddeeaf6701df1ea6dbdbe1dfb2f829f6db9bf11811bc6229ba2b326828514a066ab459375329ca824a211a98a8d1ee369c5ec76e3bed9e6df77b1de429c89205cf1f90fd47eb428d5aad9376331522cd80165c3599d8bdbeb71edbad428a7b605ab5de4bb65045b53e17fd9e09463517f978b34603a50219c28ef20c2dfc67c6d1c5fbd44d4e77cd14c18f9c01654c94b9ae6c610a26f284a7a53459c9e899189b6f0e64ed2edc6960319195bb3ccce90eceac986a1aea4301d6a5bf5a5a73ef72e52f27c17ce585ebe995bb9c34a7abc566e9adadbb2bd7772d4da30c0cd71a5b17e6e6e105f563509ae7463da89e2be59706cd3f8ea522a0b4823a18f6ed1e7506f6304aa23e4b06e7dd28b1218a0651bf4bcf239b0d3bd08923a0c833a2864573917713271adadd28845e0fc24e6cd390d28113c2a0e3c4edb80b006d723c234f926b98715508c5eb0e913b7f1eb861e06fbce924704d09092d333dab8d5505bcf5a8b1c0d0b61d047e52d7b18a72816a55cbe75ee0fa936930bf75eb292f20a5ecb0dee39c139a29403495d8400d7229626c1af1264b77866033b5eb535091d1af6752f5bd72f2a6edaff400875859d6e64bd6813ff77e183b27c42dcd4a0379ac0f4402133246cfc7df88c335ad73909b8deb6f49fde443021272f6f53c116c025ffe6da7d5472c2e3fca288d77dc1ea62a1126a1de226e8a3db1dbf6a05ff51ec1527f880d7bcea967558e2a23ec20d72f15d5ab8f85d662a57a05611017c033bd3afe03133f177b7a040000",
    ],
    [
      "ETag",
      "3YYqPDTiYyCYV9xupJoqYQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-25-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d93516fda3010c7bf8bfb1ab4c0289d22f521ac9422a550203c4c5315b9f62533757299edb021c477ef396dd9d4564a5f92bbcbef92bb7ffe3eb047554916b10755fc6ec0eccf0a704b1facc036da59bad55859600103c70b22af96dba599feddc4932514d737d32f3f0caee3cb4b22acf8052567d181e50ab4b42cfa7960152f81da04eaa6acb2360b98dbd7beb84e57b3f994f212a5cfe79b2489c7c9841d8353a3e48e672dff89b6fb63c0b6f8b0821c0c5402fc2cb5c12d0837f36b5a5ed61a7a161b23c0b2166e1f14069b9a1bc41e557a83f35e7f340c07fdc1280c2f464302350aee1456c46ed6341f73e8b85ee11fda92f5bf1261da9836cedbeb8eea4ab69bf870364fe93d7ec0ff012e043695cb3ac15c19eb9ed57b055f54784b6afe49907e95d25d50019504d345a93ae3521ab0b693449bf1ba3e61e3c52279af4a250d2ad90dee5407a0ddee045c278bf82369c960ffb4ba8ad3c93bc23ab2cd094967b793751adfde79eefec508e3bd037b67905c65c11baa1f0ebf9d5f8cc2678f7d47ef3bfa4ee44c0301139c8eca8d722ccab9b6707c025487da1188030000",
    ],
    [
      "ETag",
      "DQjQrGxUAEQegFHG/YroSA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `email` as __pk, `first_name`, `last_name` FROM `records` WHERE  `email` IN UNNEST (?)",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-26-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85546b6fda3014fd2b91f765937824bc0248558bda6c43e2d185d0aa9b26709c9bd434c4a9ed744315ff7d374ee963555b0909ec73ce3df765eec90dcf223224214f6e0b90bb4f1b11921a014d13bc9deeda2cdcc9fe3c75be9dab69dc7437c5cfd1d1113278a952749ba75057a2900cd470b968245214399542d43150bdd5ab3bbd8edd725a3ddb767b1dd42948e309cf6e507dad75ae86cde6c1bb910891a44073ae1a4c6c1fef9b77ad662ec5069856cd97964d7451cdf74d8f53c1a8e6223b5a2e308142815cc196f21453785246e1c9cbd00d4eb78d04c9779c01654c14992ed3c2104c64314f0a69a292e13d31693efb4116dec43b0dacb5f1595b5459ab557e53b3d631974aaf32ba85359e527a38585ffdf9d45a4b6042466a6d5d7ef77ccf7a0c309e59cbd9cc5b04d6e7e32f9841044af3ccf807344ca1f47e68d1f8f5604a01d5544105ae5cbb479dbe3d08e3d06571bfdd0d631bc2b01fba5dda0e6d36e840270a81a24e97d18d8a66221bd894b6592f720618c10ec1695318f4dd6e9f755d3bec760761a7d7eaf623b2af913f926b38e32a178a577d2297fe38f05681bf9c9d8e02cf9411d322d56755726511cff3d458e4cab61d24be53dbbe44b940b7b2f1e359e0f9a3d3607ce155b39e4042d96e718bd38e69aa00d95462c735c8a988b071e47cbe1807e3f96c34418519e0f981a1c8f0d7fd9320d8e5a6d3da7c9391ef8fae5043a5a4bbffb045e08f67dfc87effccef82a685e118813955067715406083db26b8b24fe0af29d2ecdbbef6c4c04dd4e0bc09e38cf435c8b77126b0a931ae58fb25e7f71e3f3582cfa7aa83fc587afe15a9ae7c884142c63ede32241be0c37f81c393442e3e4ab4511acfb8d34c95264c42b5db7c5b267350b79ceec025862cf52bccedd887019631ca88b0854c3f54543d493391122ad42309415cc95935af7f2ea167eb12050000",
    ],
    [
      "ETag",
      "My3cbyr8Ol1GPsMf/7juZA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-26-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff95525d4fc23014fd2ff59599f1911949481c840086a00c89268690d2dd8dc2b63bdb0e9d84ffeeed503491175eda9edb73ceed3de99e6d6516b2365bc9f8ad00555ec560a6f610802e12a369cb31d3c06a0c0c8f89e99583a1281ff275173fa7b72f49f8ec1781dfe910438b35a49cb5f72c9290849ab55ff72ce329906cb9ccb74431656ed1ec29184d0684530c2d9eccc763bf3beeb343eda488a4d26659818b7409bf40b638d4d806570144a02013601f9f2bdc8030239b8be6699e80a3b1500234abc8d545acb0c8b94274a8e2343ca7eeb5dc46bde1b9ee8dd7226282821b891971e7337a1f33687812e03bc5c29a4450d591128aaa754765d880daa1d4ee1d7c548daf05a6d56cf6b6af249cc0fd91594df0d7420037503fabef7121933f167d62fed373810674842a6c9e35f1536ef8afe50fd9fa2cbe67ec96547c54488169b059b9c7dc7a68dda867dba8026a4c70fa2f43698ef8f005b6b4929c8c020000",
    ],
    [
      "ETag",
      "6yGHcyOphBozQ9XldWAuRA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "1f8b08000000000002ff1dd04b7282300000d0bb642d0eca044c770282e5636a0005361988c1a67c44a028747af73a3dc27b3f20638cf73d1d6e256fc01b98b2355ab2652e6fe3519e436c5e5d143ce975ef4598d2463a4ea966ae2a87dce52867eee9533455e193f05dba0471a8ab9e4d590e8b9d6ccc7727f53fd28ed5e9d174490c4b52d591358e68d8a1c471b03a2ab581bf10ac7b6210b6734d8d95c545c4879448d6835b3cb4494f9f5ab9decc50cee54301237fb24e8a7467f688070e8970ecb847df4a5b9bca3e19bae064aaca796e6f3ee4116689c82a9a5a627df604deeaa3bb8a1f5db211cd0d2c007fb6a2e33d152fb702115a80ff043a4c2d7f4de83ceb78077eff004871a92b23010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:02 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-27-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "535d6f9b3014fd2bc87b6d122034a491a2354ae8cad4908d9056d33421db5c985b82536cb25555fefb2ea6e95a556a9fb07dcfb9e7dc0f1ec99da83232214c14f70dd40f9f6e25232704342df0b55ac4d1d77d387299c317f262b8cfffdeca623a458468598a6e7725f4946c6a0e6ab259f78b5a363b5a4bd9c3443dd7ef3923cf761d7764dbfec8439e8232bf12d51db27f6bbd5393c1e0a8dd2fa42c4aa03ba1fa5c6e9fdf077b77b0abe52d70ad06af2507a8a206ef8b7e2e25a75ac86aba59a38146419dc2968a122dfc6766ecfc75eabea0db7e81e0bde04039974da55b5b9882cb2a1745539bac64f2488ccd1707b20eae827962715936db2aade8164eac8c6a9aea871d5817f16a6985d1c52a5ece927015a5ebf965b09cf5e7ababcd325a5b3797411c589ab2120cd79a5ae7e616e105f533505a54463d699f5be5a706856fc7d212505a41174c7d7b449db17dc672e6f37c3c3c65b90d8c8d997f4a87cce6671e7819038a3c236a58b4929593d96c9c654e9ae78ca79e472165be9ba5678e6f8ff3b1e3f87e460e27e44f2d342c84da4925ba0e919b384c82348937d17c9604a6849c36a55e74c6da025e7ad458606adb0e02dfa9ebd0468544b5b6e5619404f16c9e84d74137e52b28287f58dfe39c735a2a4034adb1811aeaa5ccb069249a2d830582cdd4be1d838a4c7e3e92b6efad93176d7fa62738c4d6b2365fb24ee230fa62ec1c11d7b46c0c64df1d480d5cd6197a3efc421cae6997837cdf04f10fd23dc590430d15ff789e0836810fffb6e3ea2316971f6594c63b6e0f57ad08afa1db22618a3db25d77e80e8901d7fa4dccf34e8f3d6b73b419610b957eaaa85b7d2cb4136bd4330883b80091e9d5e11f65232ee07a040000",
    ],
    [
      "ETag",
      "nDRNJvI62b1cDoF3vfxjog==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-27-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "1086ff8bf99a4a6957da29d23eb4ac8c4a49bbb52908d01479f625783839633b4555d5ffce391b0531a4ec4b7277792eb97bf3fac8beab46b2843da8ea470bf6f0a6027f17820db8567b4737838d031631f0bc22f22efbf4319e5e7c11ed21cd2e6fd69faf4db6abaeae8870e21bd49c2547562ad0d2b1e4eb9135bc066a13a8dbba29ba2c62fe6042719b6f96ab1bca6b94215fedd274364f17ec149d1b25f7bce8f857b4dd9f22f6880f1b28c1422320cc622c3e82f0cbb0a6e3b5d13070d85a018e7570f7a0b2d81a6e110754198ca683e1641c8f86a3491c4f276302350aee1536c4eeb6341ff3e8b9dee04fda920d2f88b05d4c1b97dd754f7525bb4d42b85ce5f49e30e0df001702dbc617bd60a9acf34feafd069f55f897d4fc9520fd2aa5fba00a1a09b68f52a6e0525a70ae9744577063ced87cbd4e5faad2488b4af6837bd50368bf3f03efd3f5ec7fd292c1fe68753dcb172f08e7c93667245f668b6d3ecb6e0377ff6c84f9c183bbb548ae72100c358cc7976fa793f8c963ef30f88ebe9378db42c404a7a3f2417996945c3b38fd02be5cb2ec88030000",
    ],
    [
      "ETag",
      "QMWV073ZcuyLM8GOYDpMUg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `email` as __pk, `last_name` FROM `records` WHERE  `email` IN UNNEST (?)",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-28-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "db3014fd2b91f765934a9bb4699b5642d041c6aa4180348575d3d43ace4d31a471b01d3686fadf77e3501e4380142989cf39f7dc97efc815cf133224315f5e97206f3f5c8a98340868bac4d3f6e8477070723efbde75f654f16df6b710179f4fb7b791c12b95a2ab22832d254ac9400da793e6528ab2a052882d0cb4d5f6b69c9e6bb79d76cfb6fb3d17750ab2f490e757a8bed0ba50c3566be3dd5c0ab1cc80165c3599583d9cb76edaad428a4b605ab59e5bb6d045b5de36ddc904a39a8b7c7b3ac1044a05720e2bca334ce15199c4bbcf4337395d359748bee10c2863a2cc7595168660224ff9b294262a19de1193e6930f32f10ffdbdc85a189f854595359f17570d6b9151a5e7395dc1c2fa121e1f590b094cc8442dacf3af7ee85b0f9271604d83c09f44d6c79d4fe89980d23c378e118d33a8dcee9b327e398a4a4035555083f3bedda38e670fe234eeb3d4eb74e3d48638f6e27e9776629b0d5c70931828ea7415dda8682e72071cb7677b8967b3a4dd4e065e92267dd7eb7b1eed7bd08f07aedbf580ba64dd20bf25d7b0cf552114af3b43cec371e4cfa3701aec8d22df9491d232d3fb757255114ff3d458e4dcb61d24be51dbba42b940b7aad5e320f2c3d15e343ef3ebe91ec292b2dbc935ce37a599026453891dd7208f44828d2327c79371343e0e4687a830233bd9301419febc7b1444b785e9b4366f320ac3d10c35544a7afb1f3689c2717040d6eb277e67342b0dc708cc5f6d705303042e71bf0457f62efc31459a0d5b371e19b87b1a9c57619c91be00f93ace043635c515eb3ce7fc5ae3d3207861ea3ac8e9d40f67a43e0a210509397b7fcb906c8077effde6122217af21da288dffb8d34c55264c42bddb7c5525b351b73b8eeb114396fa05d6b1bb9b015631aa88b0825cdf57545f4233910a2ad50309415cc9a09ed73f38388ae804050000",
    ],
    [
      "ETag",
      "2AZNGPWYX51CspKYzpohBQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-28-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "61",
      "4f",
      "c2",
      "3010fd2ff5eba663209a252402218221284334c61052badb1c6cbbd1762012febbd7a2c6443ef8a5bd77efbdf4dd75cf566911b1802dd2645d81dc9d25a0c7a6084155995674955828600e03cd1352ae928b8fc1e54baf3b167efff969eda7d3fcbedd6a91428937c8390bf62c4e218b140b5ef7ace039906d3e2f5724d1bbd2a0c9633818dd12ce313278341d0edb9d618f1d9c1f47c6959edbfa1fb6d9c1614b5c84108384428009514a5c82d003339fe2799981abb0920214b3624b2412ab924b44973aae7fedd69a0dcfaff94dcfbb6a364898a1e03ac582b4d309e5631a35cf42dcd278ac4e02694b9a34b6e786dab004b9c1547937f06e1f3e1798dbd90c7b77246de8df2e015c43eda4a547cc1f3d17a841c528a3fa4953f79b36ced957f0ce8e9a0f12690b0acc02bce332ba68fcf44aa065050e139c3eb39fea233e7c02de9132e129020000",
    ],
    [
      "ETag",
      "kg/zI5YECQc2HWVq2iUmOA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "1d",
      "d0",
      "cb",
      "72",
      "82300040d17fc95a1dd4f0ea8e47a5805a414a914d268640432a62a2bc3afdf73afd80bbb8e7076042a894e87ee5b4012f60c42b73411667c5ca3a654a0e304feb93d1d54b7a20a197c5abc754a577aed7911476601c11634b0fab72d38b74d8d97933779c10455137a8b966f8724ae0f6b0a13bbde129a785627cee7b3ee2c7adb8d8a553bf7972c792526bfdaa7b14aa184eba35b9eccaddfe5d73f709a259006f3c2e8f0c691619155c650d41150c95cbb8367ce6b28bc0626b7eb4fbc87806f86c6161a69e35bc3698d97eff1da0725e4f0287f172740944e6f54b4005cc001d5a26a844ecf9bd564d7306fe11d07d6ce953c2a65850017eff0002376ba023010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:03 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-29-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "2bc8fbda24e4451e52b446295d32256405d2aa9a2664cc85b92598d8a65555e5bfef629aaedda4f613b6ef39f79cfbe099dcf322215312f3ec50817cfa722762724640d30c5ff9f7721e1fae9687acab652fb865ebc77099cd6688e0354bd17d99434b894a3250d35dd0cea4a84a2a856861a2566fd2ea3a03bbd7ed39b63d7206c85390a76b5edc23fbb7d6a59a763a27ed76264496032db96a33b17f7def3cf43aa51477c0b4eabc97eca08aea7c2cfa35178c6a2e8ad92e4003950219c19ef21c2dfc6526f1f9fbd46d4ef7ed0cc10f9c01654c5485ae6d610a268a9467953459c9f499189b6f0e2470d7ee22b498c8ab7d1115740f675642358df45309d6a5bfdd582bef72eb6fe6e16aeb45c162e96ee6edc576bddb788175b3747dd7d234cec170ad99756e6e1e5e503f01a57961d4c3fab9567e69d0eaffb1d4049456d004a391edd0eed89ec4693c62e9b83f8c531be2781c8f86b41fdb6c3280411203459e11352c5a8862489dc108d251344ce3241a3843278a59328abae0f427a3b14dfb744c8e67e451720d175c9542f1a643e4c65f856e14fa3b6f310f5d53424aab5c5f34c6ea02de7ad4586064db5d047e50d7b18e72816a75cb575ee8faf345b8ba769b29af21a3ec2938e09c539a2b403495d8400d7223126c1af1e61bf702c1666a3f4e4145a63f9f49ddf7dac99bb6bfd2431c626d599b2f09427fe57d33764e886b9a5706f2d01c88042664829e8fbf10876bdae420573bd7bf25cd930f294828d8e7f344b0097cfab79d561fb1b8fc28a334de717b98aa459884668bb829f6c4eef527439b18b0d4ffc606b6d33ff5acce5167843d14faa5a266f5b1d046ac52af200ce20278a657c73fe5c2b6277a040000",
    ],
    [
      "ETag",
      "iJpAbqQHqg1tr2SYcLwTHg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-29-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d936f6f9b3010c6bf8bf7964890a46987d417a44bb748e44f13fa6653851cfba0ee0cc76c932d8af2dd7ba65d36ad93e81bb83b7e07770f8f8fecbbaa258bd94e953f5a30870f25b83b1f6cc0b6da59ba35585b600103c74b22d75789d82d1e475fef20ba815b955cb8d1aff2fa9a082b1ea1e22c3eb242819696c5df8eace615509b40dd5675de65017387c617b7d966befc4c7985d2e7cbfb344da6e98c9d8273a3e48ee71dff8eb68753c09e70b781020cd402fc2c8dc127106eeed7b4bc6a340c2cb64680651ddc3d280db60d378803aa0c861f07d1641c0ea3e1240c2f276302350aee14d6c4de6f693ee6d071bdc19fb4258b4644982ea68d8beebaa7ba92dd263e9c2f337a8f1ff06f800b816dedf25eb050c6ba17f57e83af2afc4b6afe4e907e95d27d5009b504d347a926e7521ab0b697449bf3a63963d3d52a7dab4a2d0d2ad90fee550fa0ddfe0cdca6abe47fd292c1fe68f529c9666f08ebc83667249b2f66db2c59ac3df7f06a84e9c1815d1b245759f0868ac2f1d5c5e5247cf1d80d7adfd17762675a0898e07454be28c7e2826b0ba767d1ecf20f88030000",
    ],
    [
      "ETag",
      "P8AcbMh3ZQe1CeFiA5t3xg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `email` as __pk, `ltv` FROM `records` WHERE  `email` IN UNNEST (?)",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-30-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "4fdb3014fd2b91f765d3fa48d277250415642352292c4d41689a5ac7b92986344e6da7ac43fdefbb7128af8921454ae273ce3df7e50772c7b3980c49c497eb02e4f6d3ad88488d80a64b3c3df97aeab658bf3358b7c23cb8597bf77fae06f70707c8e0a54ad1559e425d89423250c3d9b4b194a2c8a914a28e81ea2dbbee74dbb6ebb85ddbee75dba8539026639edda1fa46eb5c0d9bcdbd776329c432059a73d56062f574dedcb8cd5c8a5b605a355f5b36d14535ff6f7a980a463517d9c16c8a09140ae41c5694a798c2b3328e8e5e876e70ba6a2c91bce10c2863a2c87499168660224bf8b290262a193e1093e68b0f32f5c6de71682d8ccfc2a2ca9acff3bb9ab548f566617d0bcecfac85042664ac16d6d5a91778d613d99f58b3c9c49b86d6e7c32fe81683d23c335e218d52287d1edbe1ff3b84524035555081f39edda54edf1e4449d46349bfd589121ba2a81ff53ab415d96cd086761c01459d2ea31b15cd44d677a3aeed40ec0c1ce6ba761f3a7d97f5989b30d749ecb83518f481c614c8ae46ee25d770c2552e14af7a42ae023ff4e661309b1c8f42cf9491d022d527557265112ff3d458e4dcb61d24fea7b65d8972816e6593fd49e805a3e3d0bff4aab98e6149d976bac6c9263455806c2ae90a34c8331163e3c8c5f9d40ffdf3c9688c0a33ac8b3d4391e1cf876741b8cd4da7b5799351108cae5143a5a4db37d8340cfcc977b2dbbdf0bba46961384660fe2a834d0510b8c5cd125cd947f0db1469766b577b66e0d66970de857146fa06e4fb3813d8d40457acf59af36b874f8de055a9ea203f665e704daaa300129090b18fb70cc906f8f0c6efaf1f72f102a28dd2f88f3bcd5469c22454bbcd5765327bb5db1e382e3164a9df621dbb63ef0758c62823c20a32fd585175fdcc444aa8504f2404712527d5bcfe0207c641c6fe040000",
    ],
    [
      "ETag",
      "D+H23c859q3TpRhqEwzW9w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-30-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "61",
      "4f",
      "c2",
      "30",
      "10",
      "86ff4bfdcae6c6c6141212c1281217d4019f0c21a5bb8dc1b69b6d0712c27ff73a8c9ac897b5d73e4f7aefedc8b65919b31e5b65e9470df27095827e339b08549d6b454b85a502d662a0794ae4b3b8ee84eb4e1aecc5a02c61e48ce2ed7adfef13a1c41a0ace7a47966490c78af5de8face40590b65c565b42f4a132d574168d2723aa0b8c4d3d9987e160183eb053ebc7c8f5ee57780c5f06b34bfce2d4621b5c45908084528079bd92b801a1c72698e2459583a5b09602146be0e6229558575c225a7462798ee506bed376db81e3dc043e81390aae332c899d4fa931a651f33cc23de5621e01b2d952c4a4f9eee8183620779829e70e3e9b876d814513cadcb63b5ddb6d373dff9504700dee45a3ebdb5ef04fe00235a80465ec5db4fcdbaeed186bf1ddf4f040fcab449a800213de390fe21e8dab69685ad6d06282d31f7ccaf4b93e7d01dbe9a11a1e020000",
    ],
    [
      "ETag",
      "Kc/5Lh5g6wcAnneG0Gdkhw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "0002ff1dd04b7282300000d0bbb0368efc2c74c7472d8a1f508ab0c9841824040c1014b1d3bbd7e911defb9110c64408d873466ed2a73422c59ce26936b3ce8fd9ebb487e0fe0a969afb05c3a85e049b8c547178e26aea8744cdada6853285377deb61aa5caaca16ce5229aeb1ef629aaf5576e01af076b5f910df7a3facc03eb63ed6a49cd38ccb4764f01a612693368d0105c1505a3eb2234a1686098cbba32dcbe4b261e593f5f33ae88abc58812409f1109eaf63cdd78528ba5166213afa6a9fba4f63c80e3477b7edca4a62fb1435b68e539e898b57ed14237034c7db31832d403b46d24422cf86764440fa76abba694ea4ff04d88f0d794fd80475a4937eff00572d99a823010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:05 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-31-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "4fdb3014fd2b91f795b6e9336da56a546d1895683ad204b44d53e43837c190c6c576400cf5bfefdaa10c84c43ec5f63de79e731f792677bccac894a4bcb8af413e7db915293921a06981aff7a15cc6f1a21be78f377f682fbefdc9ddf5e56c86086e588aeef625b494a82503358db7ed428a7a4fa5102d4cd4ea775bddd1c0ed757b23d7f54603e42928f30b5edd21fb46ebbd9a763a47ed7621445102dd73d56662f7fade79e875f652dc02d3aaf35eb2832aaaf3b9e8d75230aab9a866f1160dd40a64023bca4bb4f08f99a5a7ef53b739ddb50b043f700694315157dad8c2144c54392f6a69b392e933b136df1cc8d6bff01791c34459efaaa4a23b387132aa69a29ff6e09c859bb5b30ace36e17a1ead3641b25d9cfbeb797bb1b988d7c1d6b93ef743dfd1342dc1729d99736a6f015e503f03a57965d523f36c945f1ab4fa3816434069054d30f1dc11ed8edd499aa71ecbc7fd619abb90a6e3d41bd27eeab2c90006590a147956d4b26825aa6cd2ef8f07de24e953ea268394e6c9381f75937ede63de689cd35e36248713f228b98625577ba178d321721dae223f89c23858cc23df9690d3bad4cbc69829e0ad478d0526aedb45e027751d4c940b54332d5f05911fce17d1eaca6fa67c0105654fdb7b9c734e4b0588a6121ba841ae45864d23c17ced2f116ca7f6fd185464faeb9998be1b276fdafe4a8f7088c6b2b65fb28dc255f0cdda3922ae68595bc8437320129890197a3efc461cae6993835cc67ef883344f21e420a162ff9f27826de0bf7fdb71f5118bcb8f324ae31db7872923c224345bc46db147766f381a9bde2358ea0f31cf9b1c7b6672988cb0834abf54d4ac3e16da88d5ea1584415c80c0f6eaf017b0b80b2b7a040000",
    ],
    [
      "ETag",
      "qRrDUUC1Ufwhza2UjZi0MQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-31-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d93516f9b3010c7bf8bfb4a246833ba21f58164598744932ed0a7a9422e3ea85be363b6c91445f9ee3bd32e9bd649f405ee8edfc1fd8fbf0fec596ac112f620db1f0398fd590bee9b0fb66007e52cdd7ad41658c0c0f196485ea0dc2c4d5c44e7b10b33298665f129bdba22c2d68fd071961c58234109cb92ef07a67907d456a31a3a5d8d59c0dcbef7c5a2dc66eb6bca3b143e5fdfe579bac857ec189c1a0577bc1af977b4dd1f03f6840f5b68c080aec1cfd21b7c82da655ea6e55daf60667130355836c2e383d6e0d0738338a3caec229a45f13c3c2789617819cf095458732751137b57d07ccca1e36a8b3f49258b2e8830634c8a9bf1baa3ba14a3121f66eb92dee307fc1be0758d8376d524d84863ddcbf67e83af5bf89754fc9d20fd2aa9a6a016b4003345c9bee24218b07692445bf1be3f618bcd267fbb152d0c4a310deee404a0dcee047cc937e9ff564b06fbb3abcf69b97a435847b639216576b32acaf4e6d673f7af4658ec1dd85b83e42a0bde505138fff8e1320e5f3cb644ef3bfa4ee2cc0001ab391d95afd2b1a4e1cac2f117cbf1ff4b88030000",
    ],
    [
      "ETag",
      "aSoiOCr6S126t0IiduCS9A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `email` as __pk, `ltv`, `last_name` FROM `records` WHERE  `email` IN UNNEST (?)",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-32-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "4fdb3014fd2b91f765d3fa48df0f094105198b54024b53109ba6d6716e824b1a07dbe956a1fef7dd3894c71020454ae273ce3df7e57b72cbb3888c49c893bb02e4f6d34a84a44640d3044f1d0f7a3f7df6d595727d7a55a8a0589d39c9c1013278a952749da75057a2900cd4783e6b245214399542d43150bdd3aeb7fa5dbbdd6af76d7bd0efa24e411a4f79768bea1bad73356e36f7de8d448824059a73d56062fd78dedcb49bb9142b605a355f5a36d14535df373d4c05a39a8bec603ec3040a0572016bca534ce1491985472f4337385d3712246f3803ca9828325da6852198c8629e14d24425e37b62d27cf64166ced4390eaca5f1595a54598b457e5bb396a9de2ccb17557a91d1352cad6ffef999b594c0848cd4d2bafaeef88ef5a8743d6bee79ce2cb03e1f7e41eb0894e699310e68984269fad01bf7f5444a01d55441052e06769fb686f6288cc3018b879d5e18db1086c370d0a39dd066a32e74a31028ea7419dda86826b26e2f424518c5a3becddaadb03d8a01223b0ae361abd7a174d0ed0ce39e1d915d8dfc915cc30957b950bc6a10b9f2ddc05904fedc3b9e048e2923a645aa4faae4ca229ee7a9b1c8856db790f84e6dbb12e502ddca8ebb5ee0f893e3c0bd74aa214f21a16c3bbbc331c73455806c2ab1e31ae49988b071e4e27ce606eeb93799a2c24cee62cf5064fcebfe49106c73d3696dde64e2fb936bd45029e9f63f6c16f8ae774a76bb677e97342d0cc708cc5f65b0a900022b5c33c1957d047f4d9166d176b52706aea086d69b30ce48df807c1b67029b1ae38a755e727eeff0a911bc37551de4c7dcf1af4975e4430c1232f6f19621d9001f5efffd5d442ede46b4511aff71a7992a4d98846ab7f9ba4c66af6ef77bad1e3164a95f61fdee703fc032461911d690e9878aaabb68265242857a2421882be955f3fa073267de440b050000",
    ],
    [
      "ETag",
      "ENe5ZRc+IrrmGWusTujMEg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-32-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c2",
      "40",
      "10",
      "86",
      "df",
      "65",
      "bd",
      "14485b10a109899c040c01e5a017869065999642dba9bb5b8410deddd9a2682289de74e79ffd6666e74f0f6c13c44be6b245e0bfa520f7573ee827138c40a5a1567424182b6039069afb44b656ed107b5d4776ae2b43dddcb55ed6bde77aad4684122b8838730fcc0b205c2ae6be1e58cc23a0b2f93cd910a2f78951e3c9a837e8908e7069f460daefd71bfd363be6ce15a1de7e17dcf787f5c91f3c577a9ec5ff18333be6d81a1723f040422cc03c3a91b806a17bc60fc5a32484bcc2540a502c83b30b5f629a708998a74cbee8e4ed72c9726ca76c59b7e51281210aae038c899d8ee97d4ca3e6e108dfc90e562440662139e365df2da5610d728b81b2ee60970d2e088cb2ddccad73532dd8ce593e9cd86c879f4d04700df6c50ed552a1583eab3671bfaab9400dca43b92c5e6c51aa540bd65935bf60d367f6b963634fc94789649802e39575f2ad89a61bcd74b54c21c704a7ffa41be8933e7e005422952884020000",
    ],
    [
      "ETag",
      "DhEloIH2rG+8OtCxDWjIVA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "02ff1dd04b7282300000d0bb64ad0e1ab0d01d163f28c8b7806c327c82129044080a747af73a3dc27b3f20c932dc7588d30a37e0138cc94a59648b5450a3a730f9b6da877ae95e88ddd37beae3380f4837efe565a311091ef37895c845e045f2a45aa479ac7b930a16a5f7228688bcb029c55bcb488ff52da91abf72c56d4b907b6d0fdce096cdd94edf199b17ad0c2dfdca0a8965b67f178625818ef39ceb363231ffce07ae9cd89e15215d0addf9226a9339d65ae85a5073288c6217078f1217a3b73eb0b5b7ffd047fb1cd4cf609f1ff53c923c513420ba9e88a33961b9bdad3234192298013cb0b2c51d2adf6e2829ca0cfc27203e32fc9ed8e0a4c52df8fd03d33660e623010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:07 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-33-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "536b6fda3014fd2b91f7b540089497845644d31509c21a42ab759a22dbb9c94c434c6d870d55fcf7dd38a56b55a9fd14dbf79c7bce7de4893c88222123c244f658823a7cd94846ce08189ae1ebfc6ff278bfd9040b7d60bd6c79bf170357de8cc78810154bd3ed2e878696a5e2a047eb553353b2dc5125650313353a9d46bbd775bdb6d773dd7eaf8b3c0d793a17c503b27f1bb3d3a356eba4ddcca4cc72a03ba19b5c6e5fde5b7bafb5537203dce8d65bc916aae8d6c7a25f73c9a911b218af5768a0d4a062d85291a385ffcc845dbc4ddd1474dbcc10bc171c28e7b22c4c650b537059a4222b95cd4a464fc4da7c75202b7fee4f2387cbbcdc167141b770e624d4d0d81c76e05c85cb85330bae96e16212cd9641bc9a5efb8b4973ba9caf17c1cab9bbf643df3194e560b9ced8b9b0b7002fa89f8036a2b0ea51f55c293f3768f67e2c1501a535d4c1b8eff6687be00e59cafa3c1d74ce59ea026303d63fa71de6f26117ba09038a3c2b6a59b49005639ec73b8324eea48341dc75398b87dd612f76bd6e927a006d8fb6c9f18cfc51c2c0a5d03ba945dd217217ce223f8ec275309d44be2d21a5656e2e6b635501af3d1a2c3076dd36023fa8eb58458544b5aae5b320f2c3c9349addfaf594e790517e583de29c539a6b403455d840036a21136c1a09260bff12c1766adf4f414d463f9f48d5f7cac9abb6bfd0231c6265d9d82f5945e12cf866ed9c10b7342f2d645f1f88022e55829e8fbf10876b5ae720376b3ffc41eaa710525050f0cfe789601bf8f46f3bad3e6271f951461bbce3f6705d897005f516095bec89edf5bdde9058b032ef629dbe77ea5995a3ca085b28cc7345f5ea63a1b558a95f4018c405086caf8eff008e50b00b7a040000",
    ],
    [
      "ETag",
      "LxdqZjjNMsyb6gOZvi80oQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-33-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d936f6f9b3010c6bf8bf77244257f4a27a4be48b6ac45a2499a504d535521d73ea83bc331dba48ba27cf79d69974d6b25fa06ee8edfc1ddc3e33dfba16ac96276afca9f2d98dd8712dcb50fd6605bed2cdd1aac2db08081e325919765f52b4abe7f74a7e264b51ddb449c7c1b5d9f9f1361c503549cc57b5628d0d2b2f876cf6a5e01b509d46d55e75d1630b76b7c7193ad93c505e5154a9f2f6ed2743a4be7ec101c1b25773ceff877b4dd1d02f688f76b28c0402dc0cfd2187c04e112bfa6e555a36160b135022cebe0ee4169b06db8411c5065301e0f86d1241c0d4751189e451302350aee14d6c4de6c683ee6d071bdc627da920dc744982ea68d8beebaa5ba92dd263e4c1619bdc70ff82fc085c0b676792f582863ddb37a7fc01715fe27357f2748bf4ae93ea8845a82e9a3549373290d58db4ba2cd79d31cb1d97299be56a5960695ec07b7aa07d06e7b04bea6cbe95bd292c1fe6af5659acd5f11d6916d8e48965ccd37d9f46ae5b9bb1723cc760eecca20b9ca8237d4309c7c3a3d8bc2678f7d46ef3bfa4eec4c0b01139c8ecaa5722c2eb8b670f80decf344d988030000",
    ],
    [
      "ETag",
      "Hgmx6IY+t5c/Pv3sIc/W2Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `email` as __pk, `ios_app` FROM `records` WHERE  `email` IN UNNEST (?)",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-34-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536b4fdb3014fd2b91f765934a9b26a12d95105425db2295c0d29487a6a975dc9b6048e3d4761808f5bfefc6a13c86002952129f73eeb92f3f901b5e2cc990243c5b5720efbf5c8b84b408689ae1e97a7c11c0c5713e519e1d8e4fddbbdbb523b2fd7d64f05aa5e8aacc6147894a3250c3d9b49d495195540ab18381765c6fa7dbf36ca7ebf46cbbdff350a7204f27bcb841f595d6a51a763a5bef76264496032db96a33b17a3aefdc3a9d528a6b605a755e5b76d045753e363dc805a39a8b627f36c5042a05720e2bca734ce159b94c0e5f876e73ba6a6748bee50c2863a22a749d168660a24879564913950c1f8849f3c50799fa137f1c5b0be3b3b0a8b2e6f3f2a6652db850735a960beb7b74726c2d243021976a619dfff423df7a1204a1350b437f1a5b5f0fbea1e31294e685f18b699243edf5d892e0ed206a01d5544103cefb768f7607f65e92267d960edcdd24b5214906497f97ba89cdf63cf0960950d4e93aba51d142148e937a6e7fe025bd9e475dc676d32eb599e3b876d2ed53bae779e9eec0756cb26991bf926b38e2aa148a377d21e75110fbf3389a85e351ec9b32525ae5faa849ae2ee2659e1a8b9cdb7617891fd4b6a9512ed0ad6e7410c67e341ac7c199dfcc76021965f7d3354e37a5b90264534957a0411e8b25368e9c9e4c8338380947135498819d6e198a0c7f3f3c0be2fbd2745a9b371945d1e81235544a7aff1f368da320fc41369b177e6734af0cc708cc5f6370db0004ae71bb0457f621dc9922cd7e6d5acf0cdc3c0ddd77619c91be02f93ece043635c515735f73fe6cf06911bc2e4d1de4d7cc8f2e497314410a120af6f99621d9009fdefaed15442e5e42b4511aff71a799aa4d988466b7f9aa4e66ab7606b6e3124396fa0dd6f59ced00eb1875445841a11f2b6aaea099480d55ea898420ae64d8cceb1ff4e6b37502050000",
    ],
    [
      "ETag",
      "qCXIeXMlLs40NCP3xvq2og==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-34-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4fc23010c6bf4b7de9a683212624248241242c20437c630829dd6d6e6cbbda7620217c77afc3a889c437edfdf93db97bda03dba465c43a6c9d26ef15a8fd45026666831074951b4d97c452037318189e103996e32c781085b7be8c37e1cd8b3fbc8e77b36e97082ddea0e0ac7360710a79a459e7f5c04a5e00c9562bb921c4eca5cde6cfe16832a4bcc0c8e6934510f4fac1801d9d6f458a7ac5a5fc11f5a7d360d09b9c532d8f0ecb701d420c0a4a017607a930036146d69ee685ccc1d55829019ad570dd481456922b44972aaedf721bed96d76c34db9e77db6e1198a3e026c592d8c59cd663060dcf43dc913be613a0ea908cc6f5b9a53264a0b6986aef0e3eeac157028bda9aed1a5541bdf16f89006ea071968f79aeff0ab840033a4615f9ff4e597e6ddcdf13fea490ec6bb0cebdd32bdca3951a7a31ab7098e0f4898fa939e5c74f2b60fe2821020000",
    ],
    [
      "ETag",
      "KpKjLFcm0b+fkR5V3G/fwQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "300000d0bbb0160765a8a4bb426915504144089b4c0c41919f266000a777afd36bd47787f79030219473d43605ada57769c0733025d3a3f211df9571ef892ef2968be8bbb7b119cd4f64f4f27e5b654dea2f9d4c0e3f7b2ee24491677595ded2b0445d60979575d6d7b1d7dc1b18b5fc50d837b03e07518c06e89b5f70f4de4e0c67ce61b1c1269b9161812e5b027547d47b4ddb7404cc805a423b4f442d4c0baefcfb59a4323e7a8ebbf3f37570533aa01baeb65ce97be6fa4da01a85ca4925723fd984aea15838ca76fc50cad74b1acb1d1b1358a456d820db262d3bcdd55299bebcfc3bd244a2fd356794a3fcb95dd50098487ff5513b5ce9f3bf4131a34cfaf9050e787edf19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:08 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-35-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "536b4fa34014fd2b64f6ab2dd0d2d23669d6a6a236b15429d57d644386e1c28e025399a1a631fdef7b19acab31d14fcccc3de79e731f3c93075e266442629e3dd650edbfdd8b989c105034c3d7e5e087799115bbd95df96bff145cceaf375b76339d2282372c498b6d0e1d29ea8a819c6cd6ddac12f5965642743051a73fe8d843c7ead9bda165b943077912f2f48a970fc8feabd4564e4cf3a8ddcd84c872a05b2ebb4c14afefe6ae676e2b710f4c49f3bda4892ad2fc5cf47b2e18555c94d3cd1a0dd412aa080aca73b4f09f99c4a7ef5377392dba1982779c01654cd4a56a6c610a26ca946775a5b392c933d136df1cc8dabbf2e6a1c1445e176554d2024e8c842a1aa9fd168cf360b53416fef92a58cec2c5ca8fd6f34b6f39ebce57579ba5bf36ee2ebdc033148d73d05c636a9cea9b8f17d44f402a5e6af5b0796e945f1ab4f838968680d212da60e45a436a8fac719cc62e4b47fd419c5a10c7a3d81dd07e6cb1b1034e1203459e16d52c5a8ad2192531736d3772d3641c398e634563db76a2fec0712924301ec77d7238214f155770c6e55648de7688dc058bd08bc260e3cf67a1a74b48699dabb3d65853c05b8f0a0b8c2ccb46e027751d9a2817a8d6b47ce1875e309b878b5baf9df2156494edd78f38e794e612104d2b6ca0826a29126c1af1674bef0cc17a6ad7c7a02493dfcfa4e97be3e44ddb5fe9210eb1b1acf497acc360e15f683b47c42dcd6b0dd9b50752011355829e0f7f10876bdae620371b2ff849daa70052a8a0645fcf13c13af0e5df765c7dc4e2f2a38c5478c7ed61b2116115b45bc475b147766fe4da16d1e04a7d888d6ce7d8b3264793110a28d54b45edea63a1ad582d5f4118c405f075af0eff004ab772d47a040000",
    ],
    [
      "ETag",
      "M5X/GgmvAWnZywRHCPUpcQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-35-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "9b3010c7bf8bf79668e4a1c984d417644bb74834c912b2ee411572f1c19c191fb54daa28ca77df99b6d9b44ea26fe0eef81ddcfdf9fbc87e492d58c4ee6479df8039bc29c17df6c11a6ca39ca55b8dda020b18385e12390cdfae4aaebedc7f1dde0cbe6f77874975f52dbebc24c2e63fa1e22c3ab242821296453f8e4cf30aa82d47d5543a6bb380b943ed8b9b743d5f7ca4bc42e1f3c53649e2693263a7e0dc28b8e359cbbfa2edf614b01ddeada100033a073f4b6d7007b99bfb352daf6a053d8b8dc9c1b2166e1f94069b9a1bc41e557ac38b5e7f3c0a07fdc1380c27e311810a73ee246a62b71b9a8f39745cadf181b664fd2111a68d69e3a2bdeea92e45bb890fe78b94dee307fc1be0798e8d765927584863dda37acfe0930aff928abf12a45f25551754821660ba2859675c0803d6769268335ed7676cba5c262f55d1c2a014dde05e7600caedcfc055b28cff272d19ec8f561fe274f682b08e6c7346d2f9f56c93c6d72bcfdd3e19617a70605706c95516bca1fae1e8ddc5641c3e7aec3d7adfd17722671a0858cee9a87c928e450557164ebf01e24d9b7988030000",
    ],
    [
      "ETag",
      "30/PgalVqX3W2ZUjy7mFYA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `email` as __pk, `ios_app`, `last_name` FROM `records` WHERE  `email` IN UNNEST (?)",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-36-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "f765d3fa48d3367d48083ac846a652589af2d034b58e7b130c691c6c0756a1fef7dd3894c71020556ae273ce3df7e5dc936b9e2dc990443cb92940ae3f5d8988d408689ae0e9b9f28a24771cffdbcfb429e3c3bb56f7fc6bb2b3830c5eaa145de529d495282403359c4d1b8914454ea510750c546fbbf596dbb19d96e3da76cfeda04e411a8f79768dea4bad73356c36b7de8d448824059a73d56062f578debc759ab91457c0b46abeb46ca28b6abe6fba9b0a463517d9ce6c8a09140ae41c5694a798c2937219edbd0cdde074d548907ccb1950c64491e9322d0cc14416f3a490262a19de1393e6b30732f5c6de7e682d8ccfc2a2ca9acff3eb9ab5e042cd699e2ff031a54acf33ba8285f53d383eb2161298904bb5b0ce0ebdc0b31ed5fec49a4d26de34b43eef7e41fb2528cd33631ed22885d2f8a13ffeeba99402aaa9820a9cf76c97b6faf6208aa31e8bfbed6e14db1045fda8d7a5edc866830e74961150d4e932ba51d14c64e0423ce833dbb1a1edb65a118b996bbb5d805eafddb59d4ebfd377ddbe13934d8ddc49aee180ab5c285e35899c057ee8cdc36036d91f859e2923a645aa0faae4ca229ee7a9b1c8b96db790f84e6d9b12e502ddcaaefb93d00b46fba17fea55831e4342d97a7a83a38e69aa00d95462c735c823b1c4c69193e3a91ffac793d11815667a275b8622c3dff74f82709d9b4e6bf34f464130ba400d9592aeffc3a661e04f7e90cde699df294d0bc33102f35619dc5600812b5c35c195bd077f4d9166d936b52706aea186d69b30ce485f827c1b67029b1ae38ab55f72fe6cf057237877aa3ac8af99175c90ea2880182464ece32d43b2013efc046c",
      "ef2372f146a28dd2f88e3bcd5469c22454bbcd5765325bb533e874fac490a57e85755d7b3bc0324619115690e9878aaafb68265242857a2421882b39a9e6f50f57856cdd0f050000",
    ],
    [
      "ETag",
      "XsEugp22IBJl/rfHw15X+g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-36-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "ef",
      "6b",
      "c2",
      "30",
      "10",
      "fd",
      "5fb2afeda8bf4110a622ce5174abfa6988c4f4eaaa6d2f26a99b88fffb2e71d3c1c6b62fc9dde5bd77778f1cd9362d62d666ab74bd2b411d6ed6609e6c10812e33a3e9925868601e03c3d7846cb466fd1ca509876563b72a074118d4a36ea743082d5e20e7ac7d64490a59ac59fbf9c80a9e03d1964bb9258839489b4d67d1683ca43cc7d8e6e37918767be1809dbc0b2345bde4525e49bdc9241c74c7bfb332aecdd2c5ff68b638796c83ab0812505008b0a34b851b1066645dd13c9719f81a4b25403307760f6b85a5e40ad1a78a5f6bfa95663da856aacd206835eb04cc5070936241d8f994e663060dcf227c2553588d00ca85e44fe2ce3d9561036a8fa90eeee0cd35be1598bbddecab51255c928733d26df05542003750f9919ff04c5f050684fbc6e6020de804555cfb7b84fe27d6ca2c3e16ec1da8f8a890dcd2608d0acea6f5d18a51cbb6d5f098e0f455ee5373ce4fefe6ac9c1887020000",
    ],
    [
      "ETag",
      "57TCmoptLGu5qbuE0L04RA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "00000002ff1dd04d7282301800d0bb64ad0e107e4c77eaa84401115351370c84af6883808060e8f4ee757a84f77e50cc39344dd496020af48164ac91099f24caecd42903f3ef8f292d02adb9db0ece640aebb4b656c75958ef1e9daf5d7c6ef2969c3f978db4f2d74e3155223a27144512ca5859af1cdddb7ae17cabe3fec47afaa2ac83a9eaaa899335748baf97c7d9c80cee3cbfc1b355fb781711dbe8965bf12738176d4c1781396cdc651a2f17fe427e4d0d256b199667ff30d839837e7d7582343145b7cb33d5127b7d534401a306c67342adf1417a8498de7e38415576b92b83ca83b23c0a3442f0aa6e3534d1ededc6062123f49f10b5b282f7c41ce21a6af4fb07f7cf53ff23010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:10 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-37-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85536b4fdb3014fd2b91f79536af92964ad5a84a1891da744b52109ba6c8716e32431a77b10363a8ff7d370e652024f814dbf79c7bce7de491dcf23a275392f1f2770bcdc3a71b919123028a96f8eab87fafed60f57d39291726fbe3ab2abeb7e6b3192278c79274bbab602045db3090d34d3c2c1bd1ee6823c400130ddcf1c0f64696633b9e658dbd11f22454c592d7b7c8fea5d44e4e4df3a03d2c85282ba03b2e874c6c9fdfcd3bc7dc35e2069892e66b491355a4f9bee8e74a30aab8a8679b180db4129a14b6945768e13f33cf4e5fa71e72ba1d9608bee30c2863a2ad55670b53305117bc6c1b9d954c1f89b6f9e240627fe92f128389aaddd6694db77064e454d1543decc0388fd62b2308cfd7d16a9e04eb308d1717fe6a3e5cac979b55181b57177ee41b8a661568ae31334ef52dc40beae72015afb57ad23d77ca4f0d0ade8ea523a0b4843e988e2d8fda13eb242bb2312b26ee7156589065936c7c4cddcc62272318e51950e46951cda2b5a82716754fbc9ca62ca7793af26c48b3b193a7c7b99383e5da93f1b14bf647e4bee10aceb8dc09c9fb0e91ab2848fc348936e1629ef8ba8482b6953aeb8d7505bcf4a8b0c0d4b26c04be53d7be8b72816a5dcb8330f1a3f922092efd7eca4b28297b887fe39c0b5a4940346db0810a9a95c8b169249caffc3304eba97d3d042599fe78245ddf3b272fdafe4c4f70889d65a5bf244ea220fca2ed1c1097b46a35e4ae3f9006986872f4bcff89385cd33e07f9b6f1a36bd23f4550400335fb789e08d6810fffb6c3ea2316971f65a4c23b6e0f939d086ba0df22ae8b3db05dcbf61ca2c18d7a13733cefd0b32e479711b650aba78afad5c7427bb1563e8330880b10ea5eedff0136ffdb807a040000",
    ],
    [
      "ETag",
      "23zY1IMZL8gC/cxEtlSw0A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-37-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4fdb301086ff8bf771a99440d74e91f8d08e6e0b0a6dd7060931a1c8d897ccc5b13ddb29aaaafef79d03140493c297e4eef25c72f7e6f59edc0bc5494aee44fdb705bbfb5483ff158215b8567a8737a395031211f0b446b29d7ebeb8bfc8ae69526d6eb8f1ad97e7cb87b333241cfb030d25e99e5402247724fdbd278a36806d4ccbb651659745c4ef4c28ae8b5536ff8179a379c8e757793e99e63372888e8d9c7a5a76fc07da6e0f11d9e8bb155460413108b318ab37c07c16d674b43112064eb79681231ddc3da8ad6e0db55a0fb032381d0f92d1303e494e46713c1e0d11949a512fb442f66a8df311af3d952bfd805b92e41409dbc5b871d55db75817bcdb2484d9bcc0f784015f039431dd2a5ff68295b0ce3faaf70c3ea9f09694f48320fe2a21fba01a1407db47095352ce2d38d74b6a5752638ed874b1c8dfaba2b8d582f7835bd10348bf3d02dff3c5e47fd2a2c15eb43a9f14b37784f3689b23526497b37531b95c06eef6c908d39d07b7b41a5de520182a89875fbf8c47f1a3c7bee9e03bfc4eea6d0b1161148fca4fe1495a51e9e0f00f4979db0d88030000",
    ],
    [
      "ETag",
      "uB+JkJIXa1fjZdptutlDPw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `email` as __pk, `date` FROM `records` WHERE  `email` IN UNNEST (?)",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-38-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "4fdb3014fd2b91f765934a9b267da512820e3216a91496a620364dade3dc04431a17db6174a8ff7d370ee5350152d4343ee7dc735fbe27d7bc48c890c43cbb2941ae3f5d89983408689ae1e9f262d4fefb35c09f9fc9f8f8e8342dee683bdbdd4506af548a2e5739ec28514a066a389b363329ca159542ec60a01d77b0d3ee756ca7edf46cbbdfeba04e419e8e79718dea4bad576ad86a6dbd9b9910590e74c5559389e5e379ebd669ada4b802a655eba5650b5d54eb7dd3bd5c30aab9287667534ca05420e7b0a43cc7149e9449bcff327493d3653343f22d6740191365a1abb430041345cab3529aa864784f4c9acffe90a93ff60f226b617c161655d67cbeba6e588b846a5858dfc293636b21810999a88575fedd0f7deb911d4cacd964e24f23ebf3de17b44b40695e18b388c63954460ffd08fe9f4225a09a2aa8c179dfeed1f6c0f6e234eeb374e076e3d486381ec4fd2e75639b791de8243150d4e92aba51d142145ed71d784ee23ad4b5b1a134f1ec1e73204dfa89e7381ddab529eb0e1c8f6c1ae48fe41a0eb95a09c5eba690f33088fc7914ce2607a3c83765a4b4ccf5619d5c55c4f33c351639b7ed3612dfa96d53a15ca05bd5e56012f9e1e8200acefc7ab063c8285b4f6f70b429cd15209b4aba040df25824d838727a320da2e064321aa3c24ceb74cb5064f8ebfe4910ad57a6d3dabcc9280c4717a8a152d2f52b6c1a85c1e4886c36cffcce685e1a8e1198afdae0b606085ce16a09aeec7db833459ae5da349e18b8761ada6fc238237d09f26d9c096c6a8a2be6bee4fcdee0d3207857ea3ac88f991f5e90fa2884142414ece32d43b2013ebcf2dbfb875cbc8168a3347ee34e3355993009f56ef36595cc56edda9edb25862cf56bac6d7b83ed00ab1855445842a11f2aaaef9f99480595ea918420aee4a49ed73ffb8fb388ff040000",
    ],
    [
      "ETag",
      "mYA1zBIA1zZdLMGPfnxa1g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-38-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff7d91614fc2301086ff4bfdba993208982524821220990407c4184348e96e73b0ed66dba140f8ef5e8751130d5fdadef57d7af75e8f6c9b1611f3d93a4dde2a50fbab04cca33d84a0abcc68da4a2c34308781110929479939c48bc3ee61df193e7f3c35a7b351304dba5d5268f90ab960fe91c529649166fecb91152207c256ab724b12b32f6d349b87e3c990e21c231b4f1641d0eb07037672be894818f821ee7bf3c17ffae5c9611b5c871083824282ad5e2adc8034636b4c8bbcccc0d55829099ad5e2fa225158954221ba94719b376ea3dde25ec36b73de69b74898a11426c582b48b1935c60c1a9185f84ebe589304aa3e92c5b85e7794860da81da69adfc2475df85a625e9bb2b71ef7b8cb3d9737eabe7f8312c86de332e5fda18444033a4615352fa32d8b2ebf2cf4f7044d15d23c34d851f0f358eed03e4043f78daac06152d07f8e52738e4f9fbf3c43a92c020000",
    ],
    [
      "ETag",
      "HltzfUzvMy7GYxW3PSHLPg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "000000000002ff1dd04b7282300000d0bb646d9d2804a13b7fa01045467eb261220d0a9208040de8f4ee757a84f7de8064191522edee37cac13718c8d41867e3339cc74ff8f277c9aa5b6c2373fe3066ec21258945e30d78c34f331928ebaab475aa657e99d78e79ce729f0fbd7ed035ab749aa5706bc57520c29a49cefcaa36dc099731be200f7b0daf3c993f9e2dd35189b6d6abd7ed2a5293c87759bb92dd312a966ea0ecb3a72b924958dd2b116bd0327fa64673bc0968173cc4515294bba9d94fd631f35522308cd0ee80da446a4c69bc5433e5e66bafaa89c75238b0607fb271789991ab78056004685f172d1569f1712bc83046e03f21ed869a7e261694b4b405bf7f4bfe9df523010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:11 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-39-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "3014fd2b91f771050c094f09ad0cd21609c21642ab6a9a22dbb9c9dc8698c60e1babf8efbb494ad7aa52fb29b6ef39f79cfbc823b99759444684cbe4a180fcf0e94e717246c0b0045f83d95f9e759caf1b76fbd9ddd3e4d2fe33e5c9788c0859b234dbee52686855e402f468b36e26b92a762c57aa81891af6b0d1ee39b4d3eef428edf71ce46948e385ccee91fdcb989d1eb55a27ed66a2549202db49dd146afbfcdeda775abb5cdd8130baf55ab2852abaf5bee897540966a4cac69b351a2834e4216c994cd1c27f66c4cf5fa76e4ab66d2608de4b014c085564a6b4852984ca6299147995958c1e4965f3c581acdd853b0d2ca1d2629b8519dbc2991531c34273d88175e1af96d6dcbb58f9cb49305f79e17a7ae52e27cde96ab1597a6bebe6caf55dcb309e42c5b5c6d67975f3f082fa116823b34a3d289f4be5a706cddf8ea524a0b4863a18f6698fb50774c863de17f1c0eef29802e703deef329b533174c0893830e455a2158b652aeb3a36f04e2f0e05a571e8386c183261d390d32eebf46d41871091e319f99d4b0333a9774acbba43e4c69f076e18f81b6f3a09dcaa849815a999d5c6ca025e7a34586048691b81efd4752ca352a15ad9f2b917b8fe641accafdd7aca0b489838ac1f70ce314b35209ae5d84003f95245d834e24d96ee0cc1d5d4be9d829a8c7e3c92b2efa593176d7fa60738c4d2b2a9be641df873efb2b273425cb3b4a820fbfa4072102a8fd0f3f127e2704deb1ce4fbc6f56f49fde4430c3964e2e37922b80a7cf8b79d561fb1b8fc28a30dde717b842e45440ef516c9aad813db6e0f7a65ef119c9b37b1e1809e7a56e62833c21632f35451bdfa58682d56e86710067101bcaa57c77f90b31e0c7a040000",
    ],
    [
      "ETag",
      "TDzbn24BUaY+Ev0gG3xCbg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-39-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "8bf7b8544a685758241e5ae8b64a690b6d788009456e7cc9dc3939cf768a4ad5efce39b00e0da4f092dc5d7e97dcfdf3f79efd96b560315bcbf24f0366f7a90477ed8325d846394b378db505163070bc24f236fabcbe3bc3fee52cda3cf657db5ba9393e9c9f1361f35f507116ef59214109cbe29f7b56f30aa82d47d55475d66601733bed8bab74399d7fa7bc42e1f3f94d928cc6c9841d8263a3e08e672dff81b6fb43c036b85e420106ea1cfc2cdae0067237f56b5a5e69053d8b8dc9c1b2166e1f94061bcd0d628f2abdfed75e341c8427d1c9300c4f87030215e6dc49ac89bd59d17ccca1e36a890fb4258bfa449836a68d8bf6baa5ba14ed263e9cce537a8f1ff035c0f31c9bda659d60218d75cfeafd055f54f89f54fc8320fd2aa9baa0126a01a68b923ae34218b0b693449b71ad8fd878b148deaa520b835274835bd90128b73d02df92c5e83d69c960ffb4ba1ca593378475649b23924e6793553a9a5d79eefec508e39d037b65905c65c11b2a0a07675f4e87e1b3c72ed0fb8ebe133bd340c0724e47e587742c2eb8b2707802799a820288030000",
    ],
    [
      "ETag",
      "Y1+bZ8o3DM1jz3SvYipaow==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `email` as __pk, `date`, `last_name` FROM `records` WHERE  `email` IN UNNEST (?)",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-40-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "db3014fd2b91f765137da44ddf128252c216a9b490a620364dade3dc14431217db8155a8ff7d370ee53531a44a697cceb9e7be9c4772cbb3880c48c8577739c8cd971b11920a014d57789a2a6fef677c7d77cef6a6a7c747f39351ef483eecef2383172a45d37502552572c9400de6b3da4a8a7c4da510550c546dd9d546a765371bcd8e6d773b2dd42948e231cf6e517dadf55a0deaf59d776d25c42a01bae6aac644fa7c5ebf6fd6d752dc00d3aafed6b28e2eaafe7fd3834430aab9c8f6e7334c2057201790529e600a2fca283c7c1bbac6695a5b21f99e33a08c893cd3455a1882892ce6ab5c9aa864f0484c9aaffe90993b764781b5343e4b8b2a6bb158df56ac6544352cf19950a517194d61699df8d3536b29810919a9a575f9c3f55deb59ea4dacf964e2ce02ebebc137f48e40699e19e780860914ae4fcdf1fe1d4921a09a2a28c145d7eed046cfee8771d86571cf6987b10d61d80bbb6dea8436ebb7a015854051a78be84645339145b44f1d2772daed56a74523da68d15e23766288e2d0c16e87a1039d42b8ad9007c9351c73b5168a971d2297be17b88bc09f4f46c3c03565c4344ff471995c51c4eb3c3516b9b0ed0612ff53dbb640b940b7a2e5de2470fde128f02edc72ca635851b699dde19c639a28403695d8710df25444d83872369d7981379d0cc7a830a33bdb311419fc7a7c11049bb5e9b4364f32f4fde1156aa89474f30e9b05be37f94eb6db577e1734c90dc708cc5b69705f02046e70cf0457f621fc31459a4ddb565e18b8831a1a1fc238237d0df2639c096c6a8c2be6bce5fcdee2af42f0e2947590f3b9eb5f91f2c887182464ecf32d43b2013ebdffbbcb885cbc8e68a334bee34e3355983009e56ef3b44866a7769afd9ef97a682af57bcc6974dabb0116318a889042a69f2a2a2fa3994801e5ea998420aee4a49cd75fc1f5c9f60c0500",
      "00",
    ],
    [
      "ETag",
      "msI+ZfhqQc+OMDBUFC8Brw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-40-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d52ef4fc23010fd5fead7cd7413a759422220411489fc92184348e90e1c6cbbd9762021fcef5e87a2f103f14b7bf7faeedddd4b776c1567110bd92c5ebc17a0b6670b303d1bf4411789d174e59869600e032316c4dcbc447c2c5bcdc787cbc0b49fafe5588e66bd6a95185abe412a58b863f3189248b3f075c7329102954da7f98a28669bdb6c30ecb7bb2dca538c6cde1d753ab57aa7c9f6ceb12212067e2a6e6bc3e6697e22b49996f13fda4cf60e5be2ac0f73509049b043e70a97204ddbfaa1459a27e06a2c9404cd4a72f9b05058e44221ba84b815ee7a4185fb9e1f707e15548898a01426c68cb8a301cdc70c1a91f4714376b00b22a8322467e6e5b9261896a0d6186b7e031f65e3738969b99b7df5b9cf5deebbdc3b42f7077eb9c76f2109649a775ac53f424debf05f0921d1809ea38a2e4eeb548e50e3bbc28a4dbe36ae6f097c5248f669b0cef1838b0db492d43834aa00874941bfe62e36877cff09e6890ce392020000",
    ],
    [
      "ETag",
      "wYd0WcGEMK56tIV8cWcUbQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "ff1dd0d97282301400d07fc9b33a2c83357d2394b2a8016529f892217815dc5804c438fdf73afd84735e28cb73b8df59579de1863ed13353f02c9f71494f06498434e8a686ba5df23579147e4cd48ba3426cca128c8155f67a95086a06b2de1f8683c518cf4c276c3e7c7d131f2dd30e58c7a3ebfedccf592505def000a80b2da53fa3dcda97958d17a396fbc9171ce252a4cbc57ec057873c9ce3d2eabfe5a029864c559453bd7bbab433420033e4b192f9fc24d99670e3511879bb2347b7699ccd341a578d10b6bb868b82f1dc6ec8c2a1375e86094d0d4ba35ee4eadb824cbd1deb72344130d6650b7756beddaa86f104fd27b0ee59c37b8240d6428b7eff00adaf88b623010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:13 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-41-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "db3014fd2b91f771d0267da5a9548d52c2e8d4a690a674d334458e7b130c691c6c8709a1fef7dd38948190e0536cdf73ee39f7912772c78b2d19918467f715c8c72fb72221470434cdf0d5d9845fd7b039fd590e9d1ff7c2b99437a79babf11811bc6629ba2b733856a2920cd468bd6a6552542595421c63a2e39e73ec0c7a76c7e90c6cdb1df490a7204fe7bcb843f68dd6a51ab5db07ed56264496032db96a31b17b796f3f74daa514b7c0b46abf956ca38a6a7f2cfa2d178c6a2e8af17a85062a0532861de5395af8cfdc26276f53b738ddb532043f700694315115bab685299828529e55d26425a327626cbe3a90953ff7a791c5445eed8ab8a03b38b2b654d3583f96609d87cb85350bce97e16212cd9641bc9a5ef88b496bba9caf17c1cada5cf8a16f699ae460b8d6d83a31b7002fa8bf05a57961d4a3fab9567e6ed0ecfd586a024a2b6882b16b0fa833b4bd244d5c960ebbfd24b521498689dba7ddc4665e0f7adb0428f28ca861d142145edaef7a5deac51dd677e39eed383165d489fb1dda7506ae07aed727fb23f257720d675c9542f1a6436413ce223f8ec275309d44be2921a555aecf1a637501af3d6a2c30b66d07811fd4b5afa35ca05addf25910f9e1641acdaefd66ca73c8287b5cdde39c539a2b403495d8400d7221b6d834124c16fe1982cdd42e0f414546bf9f48ddf7dac9abb6bfd0231c626d599b2f5945e12cf86eec1c10d734af0ce4a13910094cc82d7adeff411cae6993835cadfdf017699e42484142c13e9f27824de0d3bfedb0fa88c5e54719a5f18edbc3542dc224345bc44db10776b7eb0e3bc480a57e17f3faf6a167758e3a23eca0d0cf1535ab8f853662957a016110172030bddaff03e24034f87a040000",
    ],
    [
      "ETag",
      "1WR+UeWBXp81Jqo1PrhBWQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-41-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "3010c7bf8bfb58a2419bd209a90f644db74834e912ba874c1572ed833a33b6679b545194efbe33edb2699d445fe0eef81ddcfdf97b4f7e08c549461e45f3b303bb3b69c07f0dc1125c27bdc39bd1ca01890878da20b93ebdfec04f215d5ff0edfa9b6936b1155d7e758584634fd05292ed492d407247b2ef7ba2680bd8c6b4ec5a55f55944fcce84e2aa5ccee69f316f350ff9fcbe28f249312587e8d8c8a9a755cfbfa3ede110918d7e5c420d161483308bb17a03cccfc29a8eb646c2c8e9ce3270a487fb078dd59da156eb115646e36494a4e3f82c394be3f8321d232835a35e6885ecfd0ae7235e7b2a97fa19b724c93912b68f71e3babf6eb12e78bf490867f312df1306fc1ba08ce94ef96a10ac8575fe45bddfe0ab0aff9292be13c45f25e410d480e2608728612acab905e70649ed2a6acc119b2c16c55b5514b75af061702b0600e9b747e0a658e4ff93160df647abebbc9cbe219c47db1c9172763b5d95f9ed5de01e5e8d30d979707756a3ab1c044325f1f8e3c5651abf78ec930ebec3ef64de76101146f1a87c119e6435950e0ebf0039f914e488030000",
    ],
    [
      "ETag",
      "Z+D/d+e6Z5dvZVpgj0riuA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `email` as __pk, `stamp` FROM `records` WHERE  `email` IN UNNEST (?)",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-42-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536b4fdb3014fd2b91f76593fa48df0f094107d916a90496a62098a6d6766e8a4b1a17db29ab50fffb6e1cca6b824995dafa9c73cf7d3e905b91c564489858dce5a0b69f9692910a014317f83a89bf5e6fa637f7ab68390ed2ebabcb8b697b343a38408628549aaed62954b5cc15073d9c4e6a0b25f3355552563150b5ddac36ba6db7d968765db7d76da34e439a8c45768bea1b63d67a58afefbd6b0b291729d0b5d0352e574feff54db3be567209dce8fa6bcb3abae8fac7a687a9e4d408991d4c279840ae41cd6045458a293c2b6376f43a744dd0556d81e48de040399779668ab4300497592216b9b251c9f081d8345ffc20136fec1d47cedcfacc1daa9dd96c7d5b71e6daa0c9dcf9169e9d3a73055caa58cf9dcb1f5ee8394f743f70a641e04d22e7f3e117f48b411b9159b788b2140aa7c786f8ff8ea11050433594e0ace77669a3ef0e58c27a3ce9b73a2c7181b13eeb75688bb97cd08676cc80a2ce14d1ad8a665823edf707ee60008c27cd4eb7e336398b63ca1a091d74fbad2461acd58a5b0db2ab907b250c9c08bd965a945d2197a11f79b3289c06c7a3c8b36524344fcd49995c51c4cb3c0d163973dd06123fa86d57a042a25bd1663f88bc70741cf9175e39d9312c28df4eee70b6094d35209b2aba0203ea54c6d838727e36f123ff2c188d5161c775be676832fcf5f02c88b66bdb6963bfc9280c4757a8a14ad1ed1b6c12857ef09dec762ffc2e689a5b8e15d87fa5c1a604082c71b7a4d0ee11fcb145daedda559e19b877061aefc238237303ea7d9c4b6c6a822bd67acdf9bdc34f85e0b19475909f532fbc22e553080928c8f8ffb70cc916f8efcdef0f10b978826883576004ee34d785095750eeb65815c9ecd5ad6e7f302096accc5bace736fafb0116318a88b082cc3c56541ea09d4801e5fa898420ae6450ceeb2f900a22e300050000",
    ],
    [
      "ETag",
      "SdBZvUhwmTjLNlZYWVU4AA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-42-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "7591616f82301086ff4bf7551414104d4ca6864d13350e35cbb21853cbe150e0585bdc8cf1bfefc065db87f9a5ed5ddfe77aeff5cc0e7116b22edbc6bbf702e4e96e07faa93c04a08a442bda72cc14b01a03cd77a4d4d92a1d8f1ec470ea78b3e746d1f02d78e9f77aa450e20d52ceba6716c590848a755fcf2ce32910b6d9e40792e8535e468b65309e3d529c6258c6b3d564d21f4c7c76a9fd104af334ff4596e3a9bf58f6a7f3ffa8f5a5c6f6b80d2002099980b2875ce21e841e97f614954ac0505848018a55e2ea6227b1c8b944342863d84dc3726db369355dd36cbb360913145cc7989176b5a0f69846cd93003fc81d6b91405647321a55eb91d2b00779c45899f7f0593d5c179856d6ca5babee78a6e374ac8eed77aad6ffb202b806eb36e8da84dace3f2417a8414528c3d66ddcb3bc16e16edbbb56587f1b1a9c889d4ba4e9282807635e8734c4b28ea6816a59408d094e7f3c8af535be7c0193eda1c440020000",
    ],
    [
      "ETag",
      "tnUmIHFcCM58NW/u/E1eYA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "0002ff1dd0c97282300000d07fc9599dc816e80d1515170a0353960bc3121418a224312574faef75fa09effd80a2aa3063397ff498800f200bc55a55ab12da898073f4b9ed3a71b89ab33aec87044e5cf87267ed6036d2ee91cc638d235d29511c927368f020d54ce38675531385b48df1e4b8baae47e9d892e91bc6cccee0ebd574ec46941ad34812791c9caf898f878b83b4a916eec643a86aadbe0b19526820723f84a15d95ed5a35f1dddb1cf7088d2422f1859bb1104b1e069363f8ee3aad1ea8cfdb619b28f7c45ba6372a9b6349e686a9f252e0d950a3a664da1c9faf5bf394396001f0f46c296679fb76abba652dc07f42cee513bf2736b8a09882df3f126b9b9a23010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:17 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-43-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "4fdb3014fd2b91f74adb94a449a8548daa0dd0a94db72405a1698a6cc7c90c695c6ca708a1fef7dd38948190e029b6ef39f79cfb916774cfeb1c8d11e1e543c3e4d3b73b41d009621a97f07a3bbff056b3eb1f5ee506917396ecaf22e7723a990082b72c85b7bb8af5946824656abc49faa514cd0e4b217a90a8e73abda1e7daa7c353cfb67dcf059e6255b1e4f53db0ff6abd53e3c1e0a8dd2f85282b86775cf5a9d8bebe0ff6a7839d14778c6a35782f39001535f85cf47b2528d65cd4934d02061ac564c6b6985760e13f3327e7ef53f739def64b00ef39659852d1d4bab50529a8a80b5e36d26445e367646cbe39a0245c86b3d4a2a26ab67556e32d3bb172ac71a69f76ccba88d72b6b115dace3d5345daca32c995d85ab697fb65e6e565162dd5c857168694c2a66b8d6c43a37b7082ea09f33a5796dd4d3f6b9557e69d0e2e3585a02482bd60533dff6f030b0cf48417c5a04ce881436232420fe083bc4a6672e7373c230f08ca861e15ad44e31caf300936c44bc3c73a96b6778e87919b3c930f07d37707d8a0e27e85172cde65ced84e25d87d04dbc48c32c8d37d16c9a86a6840237959e77c6da02de7ad4506066db43007e52d7a18d72016a6dcb17511ac6d359bab80ebb292f5989e953f200732e70a518a0b184066a26572287a6a168ba0ae7003653fb790c2a34fefd8cdabeb74edeb4fd959ec2105bcbda7c5192c68be8d2d83922ae71d518c8be3b20c9a89039783efc011cac699703fdda84f12dea9e625630c96afaf53c016c025ffe6dc7d5072c2c3fc8280d77d81eaa5a112a59b745dc147b643bbe3fb491014bfd211638ceb1676d8e3623dbb25abf54d4ad3e14da8935ea1504415880c8f4eaf00fcfac912b7a040000",
    ],
    [
      "ETag",
      "YDF6MCVJ6l48N39SvHN3GA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-43-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d3",
      "30",
      "10",
      "c7",
      "bf",
      "8b",
      "792415e9565288b48776145694b55b9b3ea129f2ec4bf0707cc1765a7555bf3be76c14c490b297e4eef2bbe4ee9fbf0fec873292a5ec5e553f5bb0fb3715f8db10acc0b5da3bba35681cb08881e715918f3b4cc4e6b6dc7d45f5f1f2ed746cae9a77d5c505114e7c879ab3f4c04a055a3a967e3b30c36ba03681baad4dd16511f3fb2614d7f96abef842798d32e48b4d964da6d98c1da353a3e49e171dff8ab6bb63c41ef07e0525583002c22c8dc507107e1ed674bc6e340c1cb65680631ddc3da82cb60db78803aa0c46e78361328acf8667491c8f9311811a05f70a0db19b35cdc73c7aae57b8a32dd9f09c08dbc5b471d95db75457b2db2484f3454eef0903fe0d7021b035bee8054b659d7f52ef37f8acc2bfa4e6af04e95729dd07556024d83e4a350597d28273bd24ba8237cd099b2e97d94b558cb4a8643fb8553d80f6db13f0395b4efe272d19ec8f569f26f9ec05e13cd9e684e4f3ebd93a9f5cdf04eeeed908d3bd077763915ce520186a188f3ebc1f27f193c72e31f88ebe937adb42c404a7a372a53c4b4bae1d1c7f015b0df88288030000",
    ],
    [
      "ETag",
      "zwo6cUQfwJoi9C+B7nHp/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `email` as __pk, `stamp`, `last_name` FROM `records` WHERE  `email` IN UNNEST (?)",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-44-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85546b4fdb3014fd2b91f765d3fa48dbb409951054908d8852589ac2d034b58e73130c695c6c0756a1fef7dd3894c7d0a0aad4d4e79c7beecb792037bc48c890c43cbb2d41ae3f5d8b983408689ae169149fbacee8e7205ddf17c75f0f8fc4d10e3b1eedee2283572a4597ab1c9a4a9492811acea6ad4c8a7245a5104d0cd4749c6667e0d8dd4e7760dbeec0419d823c1df3e206d5575aafd4b0ddde7ab73221b21ce88aab1613cba7f3f65db7bd92e21a9856edd7966d7451edf74df772c1a8e6a2d89d4d318152819cc392f21c53785626f1feebd02d4e97ad0cc9779c01654c9485aed2c2104c1429cf4a69a292e1033169be7820537fec1f44d6c2f82c2caaacf97c75d3b0164aa3c9021f72aaf4bca04b5858dfc2d3136b21810999a8857571e487bef5a40d26d66c32f1a791f579ef0b9a27a0342f8c7544e31c2adbc7ee046f675209a8a60a6a70eeda03daf1ec9d388d5d967abd7e9cda10c75eecf6692fb6d98e034e1203459daea21b152d44d187940dba4ed7f57a5daf435dc74decb89f80edb1d8edc5f881be03d4239b06b9975cc321572ba178dd22721106913f8fc2d9e46014f9a68c9496b93eac93ab8a7899a7c622e7b6dd41e23bb56d2a940b74ab7a1e4c223f1c1d44c1b95f8f790c1965ebe92d0e3aa5b9026453891dd7204f44828d2367a7d3200a4e27a3312accecceb60c4586bf1e9e05d17a653aadcd2f1985e1e81235544abafe079b466130f94e369b177ee7342f0dc708ccbfdae0ae06085ce3a209aeec7df8638a34abb6693c3370093574fe0be38cf415c8ffe34c6053535cb1de6bceef0d7e1b046f4e5d07f931f3c34b521f85908284827dbc654836c0872f80ed6d442ede47b4c12ba139ee345395099350ef365f56c96cd53dcff13c62c852bfc1fade603bc02a4615119650e8c78aeadb68265241a57a2221882b39a9e7f5171ed81c1a0d050000",
    ],
    [
      "ETag",
      "TbO74AX6fywnK+DHoH9cKA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-44-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d52db4ec24010fd97f515480b6db924260a360a014428be184396ed148b6da7ee6e4124fcbbb3c50b89d1f8b23b337bce999993ddb3e7380b59872de3d54b017277b6027d678229a822d18aae1c3305acc240f3152183b7344beea2fb6130186faf9e46eea077bbdc9e9f134289274839ebec591443122ad679d8b38ca740b4c5227f2688dee5269b05d3fef89af21443938fe7c3e16577e8b343e58ba1344ff36f4ad01ff9b3e07234f99b9570a51765fc8f668f870a5be3720a1148c80498d173896b10ba6f5c5134410255858514a058092e1f56128b9c4bc42a55aa8e53b53dc7aadb75cfb29a9e43c00405d73166849dcf683ea651f3648a5b3285350820cb90fc89ca7343655883dc60acac0b782d1bd704a6e56ee6d5aeb92dcb75db76dbf1db5fd5c19152ae72aa25806bb07f17f21c9272dc13259f083f64b8400d2a4219367ed76ad9ad066979cdd6895cef9368341f3ff6efeea8389148662a303e5a474f7b6894a97f47cb022a4c70fa4937b13ee68777092558cba6020000",
    ],
    [
      "ETag",
      "TzmnlQfVLTJNwDhM5JCObw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "0000000002ffedd3417282300040d1bb642d0e24484977280d8816350215360c42b018a91214249ddebd4eaf51df09fee67f832ccf59dba6d733675fe0150c19c4e37cbc57ad5da7ca603d38fabe72fc1d39216e9eb6d36517f2dc4d97b32883486753aa7aad4e5dcd3f4765820a3fae63ec7bbc3e32095d4c6be548e3d9a6f9883cb493119a85f3892ad57002afb7e6609b95f76229515351dc08a36ae244c2ae361c6aa4ab956d1f34117cb27abda5a7c062ddb019de1f49a9cd5bde13bc2e6f44267550849091beb7bb215e1573040da1917bb9a0e2a60825d0ef3494e46d919884275298c82a5bebac8e9f9efe1d3002ec7ea9046bd3ea713b9a603c027feba7d7e1c21eff4f592698003fbf40fbbb4219040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:19 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-45-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85535d6f9b3014fd2bc87b6d1208848448d11aa5b4454ac806a4d5364dc81843dd124c6dd3aaaaf2df77314dd7aa52fb84ed7bce3de77ef08cee589da339ca5879df52f1f4ed9667e80451854b78e5176e2c22ef777be714e2e6312882dbcbf071b10004eb5812ef9b8a0e246f05a172be8b87a5e06d8305e7034834702603cb75ccb135764d73ea3ac093b42ad6acbe03f68d528d9c8f4647ed61c9795951dc3039247cfffa3e7a188f1ac16f295172f45e72042a72f4b9e8f78a13ac18af17bb180cb4928a94ee31abc0c27f669e9dbe4f3d64783f2c01fcc008c584f0b6569d2d4841785db0b2153a2b9a3f236df3cd01c5feda5f2506e155bbafd31aefe98991638553f5d450e33cda6e8c203cdf469b65126cc3345e5dfa9be570b55def36616c5c5ffa916f289c5554738d8571aa6f215c403fa752b15aab27dd73a7fcd2a0e0e3583a02484bda07d3a9e9626b667a59914d4931b3275961d22c9b65d309b63393780e75f28c62e06951cdc235d49c11cff4ac22b5f362923aced44a3d7be2a6969d8f736b5c78336b8a0e27e8513045cf986cb8647d87d07514247e9a44bb70b54c7c5d4281db4a9df5c6ba02de7a5450606a9a16003fa9ebd0451907b5aee54198f8d1729504577e3fe5352d31798aef61ce05ae24053416d04045c586e7d034142e37fe1980f5d47e1c8312cdff3ca3aeef9d93376d7fa52730c4ceb2d25f142751105e683b47c415ae5a0d79e80fa801cb37501fb83efc05242c6a9f05fddcf9d12fd43f45b4a082d6e4eb89025807befcdf8ecb0f58587f90910aeeb03f44762244d07e8f982ef7c8b6bdb1e9220d16ea43cc76bc63d7ba1c5d46baa7b57aa9a85f7e28b4176be52b0882b002a1eed6e11fdb6107497c040000",
    ],
    [
      "ETag",
      "oG6SrR9Zuk4frhwIfIjHNw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-45-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d",
      "4f",
      "83",
      "50",
      "0c86ff4bbd6509231b1a122fd06d4a82736e989898653942874ca0783e9ccbb2ff6e0fce69d4446fa0ed795afabe872d3c157506013c14f9b341b939ca51dfd8608aca945af1aba15a2138805ae44c8eaec3c17a94aceee2e4c2acc77af2ea192f3f3d6542a58f580908b6b02cb0cc1404f75ba84585dc965269aa7ad1660ee84d638bb3641a8d2f38af28b3f9f8368ec3b378083be7d098092d162dff8fb6f9ce81153d4c718912eb14ed2e8da415a63ab23295a89a123b8a8c4c51410bb707b924d30849d4e14aa7d7ef74fd9eeb753ddf758ffd1e8325a5421754337b3be3fd409316e594d6ac127c06641bb2e065fb7ce17291b5426c188d131e63f7fb0a484c49668b3fb986d77d147c0b1fd8de81ef9ca8c8d4fa408de2ebf0b7716ce9e7a841980c7f104ab351072489ae86b324bc9a586ebe977eb6d1a82692d84785d6c2aedb3be91ffbeebbabe7649de6ef045a1a742015fc735c161a82a52815eede004728b1027a020000",
    ],
    [
      "ETag",
      "FOADwFTjXLTGuwNtPx2u2g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT * FROM (SELECT `record_id` as __pk, `purchase`, ROW_NUMBER() OVER (PARTITION BY `record_id` ORDER BY `stamp` DESC) AS __rownum FROM `purchases` WHERE  `record_id` IN UNNEST (?)) AS __ranked WHERE __ranked.__rownum = 1",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-46-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85546d6fda3010fe2b96f7a59d2804420920551da5e91a0d4217026d374de0380ef508716a3bad50c57fdf25015a3aa99590e07ccfcbddf9cc0b5ef224c45d1cf0c563c6e4facb5f11e00a669a2ce0f4eac7b47137fa15247da7733fe05777d70fdeb0777606089eb31459a5313b51229394a9ee645c5d4891a5440a71024227cdd649bdd5341af546cb30ac5613788ac5d180274b603f689daa6eadb6f3ae2e8458c48ca45c55a958edcf6b4f8d5a2ac55f46b5aa1d5ad6c045d53e363d8f05259a8be46c32860232c5e48cad088fa1845766187c3b94ae72b2aa2e00fcc42923948a2cd1795920414512f145260b55dc7dc145996f7ee0b13db0fb3efa8aaebcd1101d6dc3b96454c870c6c339220acd66e9b282e629d83d10c5e615e48d6e67ee6478617b47c76834b53d7474d3f37cc777462ebab83f1018799790cf0f9586c2e7e8d21ef78f516f0cba523c27d9aa34dfebab39babdb63d1b1dc8382e9ab8ae3df6d1d1f9f18e4e92250bb7e85d58ddcb9ea13a0c21644af3a418814f8298e5ed6f6fc9f97f377202d15045999c59468bd4db462788028b466df334880c1604edc03a256660d04e9335c38011e0e95cbd609144240c3091d18c98056cab61040d2b24166b9b2d4a4dcb30ad7ae3148e3b7853c1cf926b76c9552a142faf0adf7a8e6fcf7c6fe2f67bbe5db411912cd697657179136febd4d0e4cc30f27e3fe86d9367b900b7fcee1dd7b7bd5edf77a676b96e03b620743d7e84858b48ac18a089242ba6991c8a1006876f46e3e28e7b0360143b74b34328dcfdfdf24af0d76931695d7ce39ee7f5ee8143a424eb7739a8035edc66f3c66e4ae2ac8014f8222af59fca04ae432faf51e3206a1e442dbcf9b3814f05c39b2b9df1cf89eddde3f2c86311932ca19fef05808bc4a77f1dbb770c5878c960038baf396c2155b90995acdc46be2a5ad9b2cd4ea76de2022cf5bb5cd3a89be66ee4b946aec8562cd1db8eca875b0c314f656a0f82242c91ebb8df21fb0fbfac8a0847050000",
    ],
    [
      "ETag",
      "FKV2XOZbnCI9YLiFXHhRMA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-46-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d916f6bc23010c6bf4bf6b665ad960e045fcc219d206e56dd18434a6cafb59a2659fe28227ef75daa93edc5c6dea47797dff59e7b7224db9a17a4475675f561411d6e2a305317a4a02d331a3f52700dc423606885e42df06eb45bc0e0e9ad486c9934b07d61d37e1f099dafa1a1a47724650dacd0a4f77e249c36806d5926b788988374d968321f26c3140b8d285c61b2188fef07e3213979d7166955bea6edec4bdb6c9e8e26c9df5d59a6c49edbe65fc396278f6cc42a851214f01c9c76a9c406723372b668da4806be1628053469e1f6a252c24aaa84f0b1e247b11fc651d0093b7110dcc511824ce4d4d48223bb98a13e6284a12c157b74857411506d880695edb9c372a7ddc345f712c75eb3b015fa9d0cbfeeb865ec772cbafee2951a500d3014f4035f5e840d0e06f4b312b8a506b760705ef64138030c1a6394058fe414dff8b136e7fcf4093e6d32ce40020000",
    ],
    [
      "ETag",
      "/en34vUeBOYdGufGmekVlQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "1d",
      "d0",
      "4b",
      "52",
      "83",
      "30",
      "0000d0bb645d3a4851893bfe455b681128bac9a43450fe01c22f8e77b7e311defb013849c83020d696a4016f60c512dc26dbaba8c693c803cf4e7c5918932ad8bbf8c5648329ec3421e66b3f2b4fb48b895d964e9420b79ccf96c5a0517550f0da22bb2d2854f49cf2d498791ce1a9af08d307b5f11d4699a415ac40276a7e20dcbf86978604edaa1967791f668ef52dd42c8d45b196efd49f261576353ea427af61d04e73aedeae561dddd57654385326c71cf129180a5b4f8f9711db4aea85ef0b77eb319c2acd0b6dc9748e11343c75f9928a623c7c667937830d200bcd7b32a0fce1de3d43b801ff0988ad943c2634827bd283df3f01d4ed8423010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:20 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-47-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85535d4fa34014fd2b64f6d5b6b445a84d9ab56951492c5d81ea6e361b320c171c058665068d31fdef7b19acab31d12766e69e73cfb91f3c937b5ea5644e129eff6da179fa762712724440d11c5f7f3ae39b223bbb0abd49603b657eb73ef7c5e3628108deb1242deb020652b40d0339df85c3bc116d4d1b21069868603983b16d9993f1c4364dc7b69027a1c82e79758fec5ba56a391f8d0edac35c88bc005a733964a27c7d1f3d4c467523ee8029397a2f39421539fa5cf47b2118555c548b5d88065a094d0c25e5055af8cf4c93d3f7a9879c96c31cc10f9c01654cb495ea6c610a26aa8ce76da3b392f933d136df1c48e85ebaabc860a268cb2aae680947464a158dd5530dc659b0dd189e7fb60d36cbc8dbfa71b8ba7037cbe16a7bb9dbf8a17173e106aea1685280e61a0be354df7cbca07e0a52f14aab47dd73a7fcd220efe3583a024a4be883b163da743c334f922c7158369b1e27990949324b9c633a4d4c76628195264091a745358b56a24aad19cc20b5e3a9e3cc62ebc4cc626a513b9e8c2dcb4c60624f8e1db23f228f0d57b0e6b21692f71d22378117b97114ecfcd532727509196d0bb5ee8d7505bcf5a8b0c0d834c708fca4ae7d17e502d5ba967b7ee406cb55e45dbbfd942f21a7ec29fc8b73ce682101d1b4c1062a683622c5a6117fb971d708d653fb71084a32fffd4cbabe774edeb4fd951ee1103bcb4a7f4918059e7faeed1c10d7b46835e4a13f901a2ddf627de87aff0791b8a87d1672b573835fa47f0a2083062af6f54411ac035ffe6f87e5472cae3fca488577dc1f263b11d640bf475c977b605ba66d4f890637ea43cc995987ae7539ba8c5042a55e2aea971f0bedc55af90ac220ae80afbbb5ff0757f6c2487c040000",
    ],
    [
      "ETag",
      "X71WlfFQSI2R67mgjDGNow==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-47-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d926f4fc2400cc6bf4b7d3b9261709025bc1882ba0426c2484c8c21c7ade0745be7fdd110c277b737118d9ae89badedfddaf5796e3b78caab0c4258e59b678b6a7bb24173e382196a5b18cdaf9a2a8de0011ab1613222db4b7cff36e825958df3f6f97012c8d77e9f092d1fb01410ee609d63916908ef76508912b94d5261cb6ad9641e986ded8af3741627979c9794b93c598cc7d1603c82bd776ccc8411cb86ff47dbfdde83475acd708d0a2b896e975ad1234a133b995a9475812d4d5649d4d0c0cdc14691ad85226a71a5d5e9b6da41c73f6d9f06bedf0d3a0c162485c9a9627631e7fdc09011c58c5e5925040ca82664c1ebe6f9c2e53c6b84b8304e521ee3f6fb0a2894a4b2e59f5ccdeb3e08be850fece0c0774e94642b73a42ec6d7d16fe3d8d2cf51c3281dfd20b461a38e481a4f46f3349a4c1d777f903ed81ad45345eca3466761dbeff4ceba81ffeeea3939a7f93ba151163d90827f8eabdc40b81685c6fd1b4cd85ebf7a020000",
    ],
    [
      "ETag",
      "Aou8N00X68NnuIi1CDM6cw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT * FROM (SELECT `record_id` as __pk, `purchase`, ROW_NUMBER() OVER (PARTITION BY `record_id` ORDER BY `stamp` ASC) AS __rownum FROM `purchases` WHERE  `record_id` IN UNNEST (?)) AS __ranked WHERE __ranked.__rownum = 1",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-48-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8554ff4fda4014ff579adb2fb8211428a5901887d86d5db468293ab32c706d5fbb93d2ab77578d31fcef7b6d4165269a10f1ddfb7c79efdd3b9ec88a651119918025770588c74fb73c204d028a26785a74b262fa25bdec0f9c190ff2e836fdf5d34c8e8e10c14a96a4eb3c8543c90b11821ccd67ad44f022a782f343143a34acc38e69e8dd4ed7d4f58169204f421a9fb16c85ecbf4ae572d46eefbc5b09e7490a3467b215f2f5f379fbbedbce05bf8550c9f6be651b5d64fb7dd3e3948754319e1dcd67584021412c604d598a25bc30a3e0ebbe748bd1752b41f03d0b8186212f325596851221cf629614a25225a3275295f9ea1f32b3cfec89af7dd6be79d373adb10d9702422ea2058b961a95da6291af9ada3247bbbf54c2b2a979d3eb853b3f3fb1bdc68136bdb23dad7131f67cc777a6ae7672b32730f54e315f1e4a85852fb5f16c72807f5056f087ac58d7decff272a95dffb03d5bdb53715c6deebaf6ccd71ac7073b3acd56106dd1bbb0f52c7ba47570061148c5b26a023e0d5228bbdf5e92f376354a025558459d5c0c7493762c7d18c4c1208cad5e3f887508022b18f4692fd0c3a101461400459e2ad52b16cd7866d281654127d0a16bf587c66018f662830e8cc032c1a4561099fd2e509d924d933c08a6e094c99c4b56df14b9f61cdf5ef8dedc9d8c7dbb6a23a645aa4eebe2ca265ed7a9b0c985ae97fdbed3dba6cc328e6ee5d53bae6f7be389ef5cd9f5b69d4142c3c7d91dee5b4c530988a682ae418138e7110e8e5c4c67d5158fcf9051add0c50e21c9e8f7d30bc17fccab49abea9b8c3d6f7c831c2a047dfc2f8775e083db6c5ed95dd1b4a82015be8a6afdfb3a413ad8cb4bd4dd8b8cbdc8249b3f1bfc34093eb9da995cce6def86d4471ec420200b3fde0b0457890f7f3976cf18b1f890d106f75e31dcc2509626a1807a1bd9ba6a65cb363abda14e2ab0506f72fdbebe1b79a9512ac21a32b5eda87eb7d510cb54219f4198c425721df73b66ff01141deea846050000",
    ],
    [
      "ETag",
      "u1nuO+lQ57ISobpdjlXJ6g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-48-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d91dd6ac2401085df657b9b4062832d82175ac44a456c54282d12d6648cd124b3dd1f358aefded928a1bd91de6467cf7cc39e3939b35d5626acc35659fa6d40560f29e8775b84a04cae151d024b05cc61a0794ae4e96dbb3b0aef348d8fc9fef8f961c2cda277e8768950f1060ace3a67b6ce204f14eb7c9d59c90ba0b128123b427425ec6d34990f8683908402132b4c16e371af3f1eb08bd38c0823e30dafdfbe8dcde6e16832bc3f1545120fa529fef5d8f2e2b02dae425883843206eb5d48dc42ac473616c50b9183ab90ac8062355c375289467089e892e206cfaedf0ebc96df6a7bde533b2030c798eb0c4b621733f2c7346a9e8778a054d82301b22e29a075fddd931cd47bd8aa9f1b58819455a3f8b5d9df74abe94d81cb3ba0dff47a82b6f94b2e6fcefa95063595486b2ab01b7ad76d5fd026a029192d0d382ce6f4935f337dbd5f7e0075b7cd5741020000",
    ],
    [
      "ETag",
      "zKjkxp0zPcxdvxZXuRhUAw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "1d",
      "d0cb7282301400d07fc9da3aa8b436dd095679280289086c18c85c91120225288f4effbd4e3fe19c1f94320652265d5d82401f684c9778cee699b2091fca448f5a6f57b2066d41a2ad89c7bc72bf99ed3d70907fde75489a4ba65e79962de826f66b55f0f5369fb44e2c2b5db15e0c6a60e2e27518ab5665d1ee1ee9d821391c26253eba98ed481aaac3dea68eb7567c437df7f02d70c49ef9b7336ea361e4beb72c75d06d068fa198443f119f57604e65507c9dab8369367c150bf574dd5c037ae19e43fa44574e2e496f2ec928b78c88db449ee96e2864f696eec4e96e275a28d10cc1d0142dc8a478ba57af18cfd07f42d28d0d3c2734485b68d1ef1f6bb9120223010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:22 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-49-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "fd2bc87b6d1220242491a2354ae99a2d211b21ada66942b631d42d606a9b4e5d95ffbe8b69ba5695da97c4f63de79e733f7844b7bc4ad10c119edf354c3e7cba11049d20a6710eafcdb2a8ecaf7ffd7d80d7b2645fc9377f21f3f91c10bc65295cd605eb29d148cad46cbfebe75234359642f42051cf9bf69cb167bb8e3bb66d7fec014fb1225bf3ea16d8d75ad76a36181cb5fbb91079c170cd559f8af2f97d70ef0e6a296e18d56af05a72002a6af0bee8e74250acb9a8e6fb1d18681493092b312fc0c27f664a4e5fa7ee735cf67300df73ca30a5a2a9746b0b525051653c6fa4c98a668fc8d87c7140bb601d2c638b8aa229aba4c2253bb152ac71a21f6a669d47db8db50acfb7d16611afb661b25b5e049b457fb95def37e1cebaba08a2c0d29814cc70adb9756a6e215c403f654af3caa8c7ed73abfcd4a0d5dbb1b4049056ac0b26be3dc6cec49e928cf8349b0c4724b3192113e28ff090d874ea312f250c03cf881a16ae444546ae9711274d081db2c4f3dd099c265ec29ca1ebbbce34f5c7363a9ca03f926b76c6552d14ef3a84aea2551c2471b40f978b38302564b829f45967ac2de0a5470d0526b6ed00f09dba0e6d940b506b5bbe0ae3205a2ce3d565d04d79cd724c1f767730e70c178a011a4b68a066722352681a0a179be00cc0666adf8f418566bf1e51dbf7d6c98bb63fd36318626b599b7fb48ba355f8c5d839222e71d118c87d77403558be86fac0f5e137206151bb2ce8c73e887ea2ee29621993aca21f4f14c026f0e1f7765c7ec0c2fa838cd27087fda1aa15a192757bc44db947b6073f2364c052bf89b99e73ec5a9ba3cdc84a56e9a78abae587423bb1463d8320082b109a6e1dfe01c848ae047c040000",
    ],
    [
      "ETag",
      "uCln0Jz7UEaLrmeJbK7Arg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-49-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "1085df65bc2d492150b48917a8a844402de5ca10b26ca7b5da76eafea848787767aba25113bd696766bf99ce39db0ddce7550221acf2ecc1a25aef6568ae5d10a1b685d1fcaaa9d2081ea01119933379a626560e3bfde0f9fc325d5d44b6f7921d1e32a1e52d9602c20da439168986f06603952891db2415b6ac964de68159d7ae388ba3d1f48cf39212974fe7e3f1e0683c84adb76b4c8411cb86ff47db62ebc11dad224c516125d1ed522bba4369464ea616655d604b935512353470739029b2b550442daeb4ba07ad76d0f53bed4ee0fbfda0cb604152989c2a66e733de0f0c195144f4c42a21604035210b4e9be72397f3a411e2c2d134e6316ebfaf8042492a59fec9d5bceeade05bf8c0de1df8ce89926c6576d4e9f872f0db38b6f473d4c9201efe20b461a376483c9a0c67f16072e5b8c5bbf4a3b5417da5887dd4e82c6cfbddfd5e3ff0df5c3d26e7347f2734caa20752f0cf719e1b08535168dcbe0213653d9c7a020000",
    ],
    [
      "ETag",
      "ScGrMucE276xHOfbKRu5zg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, `purchase` FROM `purchases` WHERE  `record_id` IN UNNEST (?)",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-50-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "10",
      "fe",
      "2b",
      "c8",
      "fb",
      "b249790142421aa9ea68cb36b494768424aba62931c650b780a96d5a4555fefb0e689aa6935a291239dff372773e3fa13b56c468822296de57546c3eddf2087510553885d3e56fe28c17d5e2e7a9e32caf2aebc763454f9de36340b09a25715e66b42b7925089593f9ac970a5e955870de05a1ee50ef1a234b370d73a4ebf6c8029ea4593265c51db06f942ae5a4dfdf79f752ced38ce292c91ee1f9cb79ffc1ec9782df52a264ffd0b20f2eb2ffbee949c609568c17c7f3191450492a5634c72c8312f6cc38fa7a28dd6338efa5007e608462427855a8ba2c9020bc48585a8946154d9e5053e6ab3f68e64eddb3505b0b4ab888572c5e6b586aab5579d7d1d625e8df6049d7dab7e0f2621fcbb5b6fce106ae76c0f37c6deefbee2cd43e9f7c01f3984ac58ac63ac451466bdbe7e978ffdf494dc00ac4dbe4cad647d818eb475112d924190f8651a2d3281a47f6100f229d1c59d48a238a81a76af586850b5ee8a63518d849648e7562592636c76490907898e8466cdb9661d051428ecc186d3be8513045cf992cb964ed88d032f04277150673ffcc09dda68d0457993a6f8bab9b785da7822657ba6e00f09ddeb675967170ab67eef9a11b3867a1b770db6b9ed21493cdec1e2e3ac199a480c602e7545171c163181cbaba9c79a177e93b5360347777b5434834f9f3b427849bb299b46abec80902e71a385808bc7993833a60d3b7db57760b9c550da4c13751abffd0269001bdec23f320b20ea211dafeddc2af8360d75b67f46bee06d7a83d0a6842052dc8c77b01e026f1e193ddbd1fc0c20b021ba920862d24b2362182b6dbc8f2a695",
      "67b6658e6d1b3560a1dee606fad0de8dbcd6a815694e0bf5dc51fb7e9a21d6a94abe8020094be47bfe77c8fe036d27ec33bf040000",
    ],
    [
      "ETag",
      "WXcA8VuVKBAAWPu4HwueBA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-50-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "a5525d6bc23014fd2f77af165ae714041f54c439c48faa1b6388c47aadd5b4c9927452c4ffbe9beaa6e0266cbe2437f79c939c1bce0e3651b2802acca3f03d4595dd856886b6f051a7dc68daa448344201d0b090984a3e6d64afc9fadbacf9daf256c3f1fdb3dad66ac4d0c10a6306d51d2c23e40b0dd5b71d242c4692cd6672431493497beaf4c6ad76cba7462c16b6d19b74bbf546b705fbc2b744a62a58b1fceda36c34f63bbdf64faae9be006b31f771890a9300ad09a9c41a03d3b1f369164b8e8e1674276ac8c939102a914aa68470a8e33cb88e572eb945af5876dd4ab944442e02662291107732227b608461dc175b1a0fbc0a31545ed3a8cb7cfdb0fd7c0eaa9294736bee1c2c7e815097640afe8a7b37ea4b37de7fc2fb8a25e13f0827072fcca08a91d3fffe4e1a200b5657f0064f718e4a65579cdcc6299e7b51d7ad5ec297eae931468dcca01e284199d468e3e81ea2d91436ae86626c548a0508e803f0313287f3fe130fb43eefb7030000",
    ],
    [
      "ETag",
      "rpJkpNCaOwyCYE1hQT3Vrw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "000002ffedd34b7282300000d0bb642d8e422dd21d8a9f5006f909c226133201317c6240119cdebd4eaf51df1dde13604268dba2ae61b4065f60c0b23625d374a69feeb331b06f96eb25961a7eea77c64d071d9888612df9eb9896412d579183f74bbcaa4511633964571833891c75832d13897dc8e931f493cc89fcaeeed9dac8ed8dd31819b27739990f0d27f2c54b2b94e44ad647965254d0fe168eabba657f0e0f28929aab77d36fbe37d6f1a984d7c73618d33cba98b105cd85bddfaa33ae51763003584a0954c959ea78475c6fcc9ab31c5155e3ca6eb318c47cd79aba5660e538f64615227dfaf6f6ef8009a00f5e08daa2e2b55d5968da04fcd547ddc0e9ebff8a624105f8f905554a4fe419040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:23 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-51-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "6f9b3014fd2bc8fbda249090a714ad514ad77409590949354d1332e642dd02a6d8748baafcf75d4cd3a5aad47ec2f63de79e731f3c93079e476442429e3c5650eebfdc8b909c115034c1d76e7cb35b65f7d2bbde5dff2dc53e1ac1f779329d2282d72c49b32285961455c9404eb69b76528aaaa0a5102d4cd4ea5b2d6b609b5dab3b30cde1c0469e84345ef2fc01d9774a1572d2e91cb5db8910490ab4e0b2cd44f6fade79ea768a52dc0353b2f356b2832ab2f3b1e8d75430aab8c8a7db0d1aa82494016494a768e13f330acfdfa66e739ab513043f7106943151e5aab6852998c8639e54a5ce4a26cf44db3c39908db374e6bec1445a657990d30cce8c882a1aa87d01c6a5b75e190bf772edad66fe62ed069bf995b39ab5e7ebe576e56e8cdb2bc7730c45c31434d7981ae7fae6e205f523908ae75addaf9f6be597062dde8fa526a0b48426180ccd01b546e6388cc3218b47bd7e189b1086a370d8a7bdd064631bec28048a3c2daa59341779bf3fb67be1781098f6c80aec70180794daa320a69609a615b161d7268733f2a7e40a2eb82c84e44d87c8adb7f09dc0f7b6ee7ce63bba849856a9ba688cd5059c7a545860609a16023fa8eb5047b940b5bae50bd777bcd9dc5fec9c66ca4b4828db6f1e71ce314d25209a96d84005e54a44d834e2ce56ce0582f5d47e1c83924c7e3d93baefb59393b6bfd27d1c626d59e92fd9f8dec2fda6ed1c113b9a561af2d41c488196efb03e747df88d485cd4260bb9d93ade4fd23c7910430939fb7ca208d6814fffb7e3f22316d71f65a4c23bee0f93b5082ba1d923aecb3db2eddeb037261a5caa77b1d16070ec5a9da3ce0819e4eaa5a266f9b1d046ac92af200ce20ab8ba5b877fc0f1668b7c040000",
    ],
    [
      "ETag",
      "2fQVMmjsRJVJxroyd8eKCg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-51-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d92dd4e83401085df65bca509d4160d492f50ab36696b7fa8171ad36c970151607077b1a94ddfdd59d46ad4446f9699e19b61ce61b7f098953104b0cad2a71ad5e6204533b5c10c759d1bcd8f8a4a8de0001a91329965f575fb665d4e2b6f2da38bc397eb309faf7b3d26b4bcc74240b08524c33cd610dc6ea11405729ba4bc2eca6593396036952dcea3d9607cc17941b1cdc78be1303c19f661e7ec1b6361c4b2e1ffd176b773e08156334c506129d1ee52297a40690656a6164595634b53ad246a68e0e645aaa8ae84226a71a5d5f55a9edf71db5edb77dd23bfc3604e52988c4a661773de0f0c1991cf68cd2ac1674035210b4e9af3d95a1537426c3818473cc6eef715502849c5cb3fb98ad7bd17fc173eb07707be73a2a0ba347bea7c7815fe368e2dfd1c751646fd1f84366cd41e8906a3fe3c0a4713cbddbd4b3fd918d41345eca3466ba1e7768ebb47befbe6ea2959a7f93b8151353a20055f8ecbcc4090885ce3ee1558e464f87a020000",
    ],
    [
      "ETag",
      "iiuV2ZwnQp1wcTG3zVAlSw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COALESCE(AVG(`amount`), 0) as `amount` FROM `purchases` WHERE  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-52-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536d6fda3010fe2b91f7a5d57871201040aa3a46b336120d5d08add834819338a9d7244e6da71dabf8efbb24a585556a25a470bee79e7beeed09ddb12c4423e4b3f8bea062f3e937f7510351456278bd35cc1fe11ff959bf1ca8bf173d3f32d9f2f6f1e40410ac8c9224cd13da94bc100195a3c5bc150b5ee44470de04a266afd3d4fb06eee89d3ec666df8038499368cab2bb925da95c8edaed5dee56cc799c509233d90a78faf2de7ee8b473c17fd340c9f661ca366491edf7939e263c208af1ec6431070185a4624553c21290f01a19fa5f0ea95b8ca4ad18c00f2ca024087891a9521650043c8b585c888a158d9e502573ef0f9a5b536be2696b41032ec2150bd71a91da6a95df35b4c96c3cb5e613eb687c7d7eb4266949bc3e6e68f8b8c4ec1eb46feeec525be7a0e596482ad7dacd85e55ada01a7ed680bc7b1e69e76747aac9dbbb3c595f675b90f01b521958a6595568ff8092d753eb7d37e3bc4328028c8583b5726ee137d80877ee49b4134e8c21260eafb03dfec91ae8f83a1418dd0a704e254c95e45918c67662f0c87a669fa1d0c93307cdcd73bd80c4c4ca989a3e120c27e9762df40db067a144cd13326732e59dd5374e3da9eb5f2dc8533197b565546448a449dd5e2ca22f6752a287285b10ec0776adb965ec6215b3924dbf12c773cf1ec6babde8b298d49b099dfc36644249114d04490942a2a2e79088d4357b3b9edd933673c85886ad8573b8444a39f4faf01de26af3aadaa2f1abbee7809314408b2f9cf073ae034b6dbbd74d724292a4885afac9affa176201d6a79b53a07967160f5d1f6d7167e0d04c7516746df1796bb44f5934b232a68167cbc1700ae1c1fdef8eee0000b270769a4021bb63090659240d07a1b595a95f21c6d183dbd9c1f80857ae3eb1bdd5dcb4b8e9291a63453cf15d5075735b17415f205044e5822c776cec1fb0f3db29872f0040000",
    ],
    [
      "ETag",
      "h47Zdxs+1M8tzH5bf7iYhw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-52-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff6d916d6f82400cc7bf4bf75616400466e20b1fd86642dcc6f4d562cc890551e0d8dde1428cdf7d3ddc03c9d617bdb6f7eba5ffde198e59b983216cb3f4bd46d1dca4a85e7410a1ac7325e9a87829117a808aa5442e441626d35360ce42cbdfa7b37d82d8a4a3111132de63c160788624c37c2761f876869215486d9b4d7524443595cee68b65f010445428f84e1716ab301c4fc2002ebd9f1656f0ba54bf4df7e1d378f95fcbfad28303df4698a0c032463d4125f8016335d7e2242baa1c0dc96b11a384166e2f52c1eb8a09ce0daa1803dbb05cc7b42ddb354dcf7508cc79cc54c64b6257af341b28ae581ef10fd2067d02441b92cca4f5272adbad061d59b7be474ffd5abf9db50b5b1dd8b5079ee5d8feb7ff033b1dd8f1bcbb8ef91a5e7fcd376914ca67c149ac44add3bc6a9e72bd0745fb51a2c61ec48c3eec3153d7fcf209dd826e380d020000",
    ],
    [
      "ETag",
      "NriLfCvE0DL18hgDhfeeyg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "1d",
      "d0",
      "4b7282300000d0bb642d0e1011d21dd8caa720232851379900410c4521c40a767af73a3dc27b3f8016051b06226f0dbb823730511dcd8b79aeda876ff5b98b9759ece9eb901706e5f4001b555bda2dd99e157bba133518fbf7a5246de0e74ec7c5655f1a35925fe93aaf5ca73415fea4989c32a316938445a844c7089b0ee4f96eaca89f5e8f67aff1a724f958b4595e959f8f10eac875fbb55ef598591206a5795ab40af644e7eec761ac60ad14e19d854d1de1e3d0552926ab7e34f9d9cdfcc80a3d4b887ab3d921d1c519ce6fb23eb4ad1b18db951d3dccd8dbf324d634a4dfc00cb0b1bb083690cbcb0d0d8466e03f81c8a963af098751c104f8fd0325f1f94d23010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:25 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-53-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "f74a1bb74d9b52a91a5509a3529b8e2405b1698a1cc70986240eb1d309a1fef75d3b948190e029b6ef39f79cfb9167f4c0ab14cd50c2f3c796354fdfee45824e10532487d7dd36c5d5d52fdbdbabfbe92d7ed80e735ce6f33920b8664952d605eb49d13694c9d92eece78d686bd208d18344bdf1a83798387838184e3076270ef0242bb235af1e807da7542d67b67dd4eee742e4052335977d2acad7777b3fb4eb46dc33aaa4fd5ed20615697f2efabd1094282eaaf92e0403ad644dcc4ac20bb0f09f992667ef53f73929fb3980f79c3242a9682ba56d410a2aaa8ce76d63b2a2d9333236df1c50e8adbd65645151b4651557a46427564a1489d553cdac8b60bbb156fec536d82ca2d5d68fc3e5a5b759f497dbf56ee387d6cda51778962249c10cd79a5b67e6e6c305f4532615af8c7aa49fb5f24b83561fc7a209202d59178c5d3c2183293e4db2c4a5d974344e32cc92649ab863324a303d759893268c00cf881a16a944a521d968721a4f5c378b9dd180c404133766ee683c4c31cd9c81830e27e86fc3153be7b21692771d4237c12af2e228d8f9cb45e4991232d216eabc33a60b78eb51418131c603007e52d74147b90035ddf2951f79c16219adaebd6eca6b9613fa143ec29c3352480668d24003156b362285a6217fb1f1ce016ca6f6f3189468f6fb19e9be6b276fdafe4a8f6088dab2325f1446c1caff61ec1c11d7a4680d64df1d500d96efa03e707df8034858d42e0bbada79c12dea9e0296b18655f4eb8902d804befcdf8ecbafffe650cb480577d81f2ab5086d58b747dc947b643be3e164840cb8511f62ce101fbba673e88cac64957aa9a85b7e28b4136b",
      "e52b0882b002bee9d6e11fde88f2a97c040000",
    ],
    [
      "ETag",
      "UOd0nQZ/Evtj8Y0kO2g0mg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-53-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f",
      "c2",
      "40",
      "0c",
      "c7",
      "bf",
      "4b",
      "7d",
      "1d71200c5dc2c35054124081f1a08690632b63b0ade3ee862184ef6e6f221a35d197adedfddaf5ffbfed611d6721b8308fa34d81727716a11e9a6084aa48b4e2574e9942b000b588985c6f963aba0a576abd759e7735b9d14fe7c9b0d56242054b4c05b87b58c498840adc973d6422456e0b2829d26c566616e85d6e8a637fd41ddc719e5268f2c1a4d7f3dabd0e1cac536328b49895fc3fdaa6070b56341fe1022566019a5d72492b0c74d7c85422cd13ac282a64800a4ab83c882415b9904415ae541a1795aa53b76bd59a63db4da7ce604281d03165cc4ec6bc1f68d22219d12bab04870159862c78513eb75c8ec3528809bb039fc798fdbe02120392e1ec4f2ee77597826fe1033b3af09d132915993e51b7bd07efb7716ce9e7a81bcfeffc209466a34e88dfed77c6bed77f34dcf428bdbdd3a81e25b18f0a8d8555bb7ed9683af6bbabd7649ce6efb85a16684120f8e7b88f35b80b91283cbc0187b128ac7a020000",
    ],
    [
      "ETag",
      "kqhtg9djskv6Zy2rqtY/lQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-54-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85537f4fa34010fd2a64ef1fcdf50750da4213e3f52aa7984a7b946acce5d22eb0e02ab0b8bb78d7987ef71bc06a7b269a34a1b3f3de9b37b33bcfe881e6111aa180268f25e19b2ff72c402d44244ee0d4be9813a92597b3087fb532f36fa4c717cef8e40410b462099c1529690b56f29088d172d149382b0bcc196b8350bb6fb4b581a1ea9a3e50d5e1c0009e20693ca5f903b0efa42cc4a8dbddd5ee248c2529c105159d9065afe7dd27bd5b70764f4229ba8725bb5045743f2e7a9ab2104bcaf293e5020c9482f015c9304dc1c21b330abe1d4a7728ce3a09809f68487018b23297952d9008591ed3a4e4b52a1a3da3dae6de1fb4b0a7f6c457d69c848c472b1aad152c94d5aa78682993d9d2f58fd638ab14d7c7556217283fbcd995b22ec0c01d1644ac959b0bdbb3950321c75596ae6b2f7ce5e8f45839f766cbb9f2fd761f0216232224cd6b833e0e5252997b99a1f3fee62a029650b149ae86ea006ba66a0571300c63b3d70f62950481190cfbb817a8a16510230a08069eacd46b16ce612c81a1c2d42d6ca9bd3e312c4dd363cb54fb1a3687a661eaa6aac79a656a68db427f3895e48c8a8209da0c12dd788e6faf7c6fe94ec6be5db711e33295678db9aa897d9f129a5ca9aa06c00f7adb5659caa05a75338eebdbde78e23bd776f318a624c1e166f108cf21c6a92080c61c6744127ec522181c9acf168eefccdcf11418f50dcf77088146bf9edf08fea6a8272deb2f1a7bdef816389873bcf92f073e601fb6dbbd72d7382d6b488dafa346ffa949a06a6c6f917e101907d1006d7f6fe1d742b0114d65f473697bb7a839f2484c38c9c3cfdf0580ebc4a78bbddb32c0c29e411921218657188aaa48c849f31a6956b7f2c236069aaea31acce5bb9c3ee8ed465e69548a2423b97ce9a8d9b27a8855aa14af2048c223721df71cb2ff0027d69a23e5040000",
    ],
    [
      "ETag",
      "EHPet1gJOda+9m8xd2fHIA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-54-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d504d4fc24010fd2fe3b58d2d1648483880364a82448b244643c8d20ea5d076caee542584ffce6c3144e3c5cbeeccfbc8beb707d86665023d5866e9ae46bdbf4a919fed10a1a973367255541a040790552acaf5e0755adf6579f278fdb50b356f23edbfa5fdbe284cbcc64241ef00ab0cf3c440effd00a52a506c8b45b51509ef2bbb8d262fe17d180950506281c96c3c1e0cc7211c9d8b45155497fc2fd3fce8c0869611ae506319a3cd5069da60cc235bcfa8a2cad13554eb180d34e2864835d595d244ae206e3b70fd4ee0b5fc56c7f3ba9d408439c58a332a453b9b4a3a60629547f429ede04604ba19a5e8aa393f04f69b1676ea36d17e72ad0bd7fec305bfb9f9f763c33da379d224c90ddad0deb9c02dd9522c6559d7e840ace4ff1f323eefc7130404b722dc010000",
    ],
    [
      "ETag",
      "hAXSuDildM/xqErtkRr1Zg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "0000000002ffedd35b7282301400d0bde4db712c2094fec1684087870a88fa9349e016795430112374baf73add463d7b38df88661908416e6d0d17f48106aa98d36cca66d6e13e1be34018fe182c1da2f77510e98bc248aa6bb9612c24795d6572de58852e849de0f3c99464edc986098892f682ed91ad79ebe6b2710c773c8738cb2876a1d74aebf08eaba0cdf0235f76919cc1ce2c9c8bdc2577aef9a951713af4b5ba493d18f869ebe9012ef89e29705412af5ca4a2d8e9473f56f3db55c4bd579bae8fa33ea5e917d5214ece549d9fe85621367d7370181a5295caead359f1089855effb861c3b6dfaf2f2efa0098247577210a47c6e57e7a639417ff5c96de8e0f9df06ca81a39f5fac6fc4c719040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:26 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-55-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85535d4fa34014fd2b64f6716d4b150a6dd2ac4dc5dd2696ee02d5b89b0d19860b8e0283cc50634cfffbde01eb6a4cf48999b9e7dc73ee074fe48e5729999184e7f72d348f5f6e45428e08289ae3ebb60e4b5e66f6e557c7b6af9babdfd35d903ecce788e09a256959173090a26d18c8d9361ce68d686bda0831c04403db1e8c2796793c3e9e98a633b19027a1c82e787587ec1ba56a391b8d0edac35c88bc005a733964a27c791fed8e4775236e8129397a2b39421539fa58f45b2118555c54f36d88065a094d0c25e5055af8cf4c93d3b7a9879c96c31cc13bce803226da4a695b9882892ae379db7459c9ec8974365f1d48e85d78cbc860a268cb2aae680947464a158dd5630dc679b0591b2bff7c13ac17d16ae3c7e1f287b75e0c979b8bedda0f8dab1f5ee0198a2605745c636e9c76371f2fa89f8254bcead423fdac959f1bb47a3f164d4069097d3076cc091dbbe634c9128765ee899d642624899b38363d494c36b5c04a13a0c8eb443b16ad4465d909cb188598c2d8892df7248da7931462462d2775a9337601c8fe883c345cc11997b590bcef10b90a56911747c1d65f2e22af2b21a36da1ce7a63ba80d71e1516189be618811fd4b5d7512e504db77ce5475eb05846ab4baf9ff205e4943d86f738e78c1612104d1b6ca082662d526c1af1176bef0cc1ddd47e1e8292ccfe3c11dd77ede455db5fe8110e515b56dd978451b0f2bf77760e884b5ab41d64d71f488d966fb03e74bdff8b485cd43e0bf9b5f5826bd23f0590410315fb7ca208ee029ffe6f87e5d77f73a865a4c23bee0f935a8435d0ef11efca3db0ad89eb98a40337ea5d6cea8e0f5dd339744628a152cf15f5cb8f85f662ad7c01611057c0efbab5ff075a66ae867c040000",
    ],
    [
      "ETag",
      "UpSmimf5V+755YrWZ9vRdw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-55-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d92514f83400cc7bf4b7d6509338c29890f53a7236153197b3066596e50180a14ef8ecd65d977b7873a8d9ae80bb4bd5f4bffff63074f79958007cb3c7b6e506e8f32d477260851358556fcaaa9520816a016199399ee17a79bee7abc1955f769f87282cedab93b3b6342c52b2c05783b48732c1205dec30e2a5122b7c5543465b568330bf4b636c56914fa936bce4b4a4c3e9905c1e03c18c2de3a3426428b45cbffa36dbeb7e0919621a628b18ad1ec524b7ac458fb46a612655d604751236354d0c2ed4126a9a98524ea70a5d3eb75baae631f778f5ddbeebb0e8305c542e754313b9bf27ea0498b22a40dab049701d9862c386d9f6b2ee7492bc484fe24e23166bfaf80c49864b2f893ab79dd95e05bf8c0de1df8ce89929a4a1fa8abe066f0db38b6f473d4e5201afe209466a30e48e48f87d36830be35dcfc5dfaf956a3ba95c43e2a3416766de7a4d777ed37572fc838cddff1b46cd08258f0cf31ca3578a92814ee5f019b33b0fb7a020000",
    ],
    [
      "ETag",
      "gt7l9w1vMwHnYfRx8e4v4Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COALESCE(SUM(`amount`), 0) as `amount` FROM `purchases` WHERE  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-56-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85537f4fa34010fd2a64ef1f4dda022dd21f89f17a153d62a51e508db95cda6559ea2ab0b8bbf4d2987ef71bc06a7b269a34a1bbf3de9b37b3332fe889e5311aa188ad9e4b2a36df1e79845a882abc82db9f6b3c1b4eaf2eb28bab415f0fd833be4c37e3d35340b08a257156a4b42d79290895a379d059095e165870de06a1f689dd366dcbe89a5ddb30fab6053c49d364caf227603f2855c891aeef7277569caf528a0b263b84676ff7fabaab17823f52a2a47e9852872c52ff3ce959ca09568ce7a7f3000c94928a05cd304bc1c23b338ebe1f4a7718ce3a2b00af19a198105ee6aab2051284e7095b95a25645a31754dbdcfb830267ea4c426d2928e1225eb078a961a92d16c5534b9bccc65327983847c1fcfa6889b34a7879dcd28ce30ab3bbd02efcd9b5b62cc0cb0396542eb5bb9f8eef68079aaea7cd3dcf0942ede8ec58bbf467f31bedc7fd3e04dcc6542a96d75e431ca5b4f2f9da4ef7e3235604ac2063135cf40d1b9b03631825519f2483de499418348a0651ff04f722830c2d6ac511c5c053957acdc239cf0d9c44311d987d83f6a8d51bdad438e992a80b1f33c13d9b58e6d0b28889b62df4573045cf992cb8644d4fd19def86ce22f4e7de641c3a7519092e5375de98ab8ad8f7a9a0c885619800fca4b66d15651cb2558fe47aa1e38f27a17beb347331a52b4c36c1334c46825349018d05cea8a2e29ac7d03874330bdcd09d79e32930eac7bed921241afd7e7927849ba2eeb4aabf68ecfbe37be06021f0e6bf18f880d5d86ef7d2dde2b4ac2135be3e35faeb2680aab6bd9fba0727ebe064a3ed9f2dfc5a0896a3c98c7ecd1dff1e35573e4da8a039f97a2e005c07bedcf1ddc20116560ed2480567984222ab2444d0661a595697f2cab6803c443558a80fb1fed0deb5bcd2a814694673f55a51b3707513ab5029df40108421f25cef12a2ff000a848354f0040000",
    ],
    [
      "ETag",
      "HvaO9LKFmFK87/SiqaGlyA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-56-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "14c5bf4bf70a06c4e134f14137a62ec43f4cb287c5980a57860217dbe2628cdfdd4b5d9cc9d687f6f69cdf4dee694f6c971631ebb2759aec2b10c78704d4bc2e029055a6241d25161298c140f184c861ea4d3fe4e22d8c8bf9f4300af72fb332e9f77a44c8e80b72ceba27b649218b25eb7e9e58c173a0b6d5aadc11a28e657d1b4f16ded00b48c831ae8549e8fbfd81efb1b3716be1395685fa6d7af5a7fdc57f2dcbb3c1b6b80e6003028a08ea094a815b88d4b80e27795e66604aac44049269581b89c0aae402d124c57c744ddb6d594dbbe95a56db6d119861c4558a05b1e13bcdc6142a9e05f84dd9984380d025c5dce8fd40b2ad33e8ca6e384f7abc7bbf79f33b0da7ddb95f7fd8d68d6d371c6d2f7f66181c15c899400a24a1ce625d733d639d55d11b285181c1224e9f324ad5f57ebe0075f43105f1010000",
    ],
    [
      "ETag",
      "GiEOWsTJUdnQOvHUqDPpgA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "4d",
      "72",
      "82300040e1bb64ad0e080ae98e5f51c06a1414379980d106a9c44011d3e9ddebf41af5bbc05bbd6f408a82360d6eeb0bbd8237f02063382a46b962ed3b456ee326dbb6c9110e51d41bdb6487dae16afae09a3115e81deb495492eba5f633dcc14a20c7abeae9a29e2fbf6eb870ddabd9cdf4eaae95f45309634f9392154949ecd0eac23bd7d150d99c3c5ff4eb8993cadc77c7cba0229d8517bb9425e7b36157bccc142ad7fb8594f1acca67f985973b9edd572bb6ded74e6059e3da3e1c541eddce7168a0fe947607080bf31944c8e4c24d8d39f36e58f53fcc7c53aa84c9c009c2a33e7a79f977c000d09e33411bcc9eb76b130807e06f7ddc3e387dfe6f5322a8003fbf7e0aa95a19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:28 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-57-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85535d6f9b3014fd2bc87b5c9340421212295aa3946e4809d90869574d1332ce85ba054cb1491555f9efbb98a66b55a97dc2f63de79e733f7822f7bcd891298979fa504375f8722762724640d1145f5d70bcc3d7bd73f3fb90f389538683f5a3f9389b2182372c49f332838e1475c5404eb79b6e5a89baa495101d4cd4198e3bd6c836fb567f649ae3918d3c0959b2e4c53db26f952ae5b4d73b69775321d20c68c9659789fce5bdb7eff7ca4adc0153b2f756b2872ab2f7b1e8b74c30aab82866db0d1aa8255411e4946768e13f73179fbf4ddde534efa608de730694315117aab185299828129ed695ce4aa64f44db7c75201b77e92e428389acce8ba8a0399c193baa68a40e251897c17a6578fee53a58cd436fed479bc50f7735ef2ed6cbedcadf18d73fdcc035148d33d05c63669ceb9b8f17d4df8154bcd0ea61f3dc283f37c87b3f968680d212da60343647d472cc499cc463963883619c9810c74e3c1ed2416cb2890df62e068a3c2daa59b4108565b2c1a43f9944631b92c88ead41449d513f1a0c596cc18e5a96e590e31979acb8820b2e4b2179db21721d78a11b85c1d65fcc43579790d03a5317adb1a680d71e15161899a685c00fea3a36512e50ad69b9e7876e305f84de95db4e7909296587cd03ce39a1990444d30a1ba8a05a891d368df8f3957b81603db59fa7a024d33f4fa4e97be3e455db5fe8210eb1b1acf4976cc2c0f3bf6b3b27c415cd6a0dd9b70752a2e55bac0f5d1fff221217b5cd427e6ddde086b44f01245041c13e9f288275e0d3ffedb4fc88c5f54719a9f08efbc36423c22a68f788eb724f6cdbb14703a2c1957a171b3aa353d79a1c4d46c8a150cf15b5cb8f85b662b57c01611057c0d7dd3afe03346991a87c040000",
    ],
    [
      "ETag",
      "Ee8Iy+v8YXymi98pT3Ow0w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-57-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "92514f83400cc7bf4b7d65095b3666487c60ba29094e654c1f8c596e47872850bc3b66e6b2ef6e0f751a35d117687bbf96feffc7161ef32a051f9679f6d4a0da1c6468ae6c10a36e0aa3f95553a5111c402332269bc30919751d96cb8dccb2743dbd7929bbc1d111135ade6329c0dfc22ac722d5e0df6ea11225729ba4a229ab459b396036b52dce92389c9e725e526af3e93c8a825134869db36f4c85118b96ff47dbddce81075ac6b842859544bb4bade801a509ad4c2dcabac08ea64649d4d0c2ed41a6a8a98522ea70a5331876ba5edfed757b9eeb0ebd3e8305496172aa989dcf783f30644411d333ab048f01d5862c78d53ed75cced356880dc369c263ec7e5f01859254baf893ab79dd7bc1b7f081bd3bf09d13253595d95393e822f86d1c5bfa39ea2448c63f086dd8a83d9284e7e359129c5f5aeeee5dfa6863505f2a621f355a0bbb6eff7030f4dc37578fc93acddff18d6ad00129f8e738cb0df82b5168dcbd027e1b63cb7a020000",
    ],
    [
      "ETag",
      "u8FotrVImbycggdvNWzm1A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, MIN(`amount`) as `amount` FROM `purchases` WHERE  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-58-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85537f6fa24010fd2a64ef9f36e70f444434697a5ecbf548143dc436e672d15d58e8b6c8d2dda517dbf8dd6f80daea356913139c99f7e6cdccce3ca37b96456888084b1e0a2ab65fee38410d44154ec0eb6d6f92a781f8ba34e36472db9e3df53a663f393b03042b59126ff29436252f4448e570316f25821739169c372151b367373b96a91b1dc3d2f5be65024fd2341eb3ec1ed8b74ae572d86eefb55b09e7494a71ce642be49b577ffbd168e782dfd150c9f6b1641b5464fb63d1f3948758319e9d2de6504021a958d10d662994f0c68cc8b7e3d42d8637ad04c08f2ca4380c7991a9b22c4811f22c664921aaac68f88caa320ffea0b933762e026d2d68c845b462d15ac3525badf2fb863671bd9335de94f9d6a7a57b6f683ffce9445be7207f8b25956bede6a7e33bda511ad7d3169ee7cc03ede4fc54bbf2a78b99f67d79088102232a15cbaaf2024c525a96f63241f7fdbb9504ac40b10eaefaba853bb63e2031e987b1dded9158a784d8a4dfc35da28703939a11a11878aacc5eb170c6b3087763c38eedce2082d9f70c8a49dfa086addb16b17423360921bd28b2d0ae81fe0aa6e825933997ac1e23baf1ddc05905fec2bb18054ed5468c8b545dd6c5954d1cd6a9a0c995ae7700f8416fbb32ca38a895efe27a81e38f2e02f7daa957614c131c6ee70fb00c314e2505341678431515131ec1e0d06c3a770377ea8dc6c0a8de77b6474834fcfdfc4608b6793569557dd1c8f7474be06021f0f6bf18d401d7b0db1dc85de3b4a82015beb2eafc8f750075a09737cb38b2cc230b06fc6707bf06827ba895d1af85e32f51edf2694c05cdc2cff702c055e0d3b3dedf1860e1ca40462ab0610b43598a8482d6dbc836552b2f6c73d0372d5481857a17b3adee7ee4658e3223ddd04cbd7454df5835c43254c857100461893cd7bb82e83f70e60890e3040000",
    ],
    [
      "ETag",
      "NyWgz9r+Y4fgMh/Pz5147g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-58-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4d",
      "4f",
      "c2",
      "40",
      "10",
      "fd",
      "2f",
      "e3",
      "b5c5522b2089876250481a844a0f6a0859ca500b6da7ee6e3595f0df9d2e064df0b23bf33eb2ef65f7b04b8b35f4619526ef15cafa22413d6b8610559569c557498542b000b54858594f2ffd6725f2af5115456eeacd7a372f53fff696152a7ec35c407f0f9b14b3b582feeb1e0a9123db96cb72c7125d97cd369ecc870fc390819cd60d308982c01f04433858278bc8a92af4afe93e78f4e7ff5916070bb6b40a7183128b189b04a5a42dc67adc94e3b46586b6a24ac6a8c0880d9148aa4a21896c46eceb9eddee788edb763b8ed3ed782ccc28163aa582b5d11367034d5a64217d7237b862813423d7dc98f383e1b6e960a69663c2fd65dd13ebb4babd33da3ba3173f8f0e6a8d6a2a891b286cc23bc72277d494d35c5acb0a2d8805ffc228d5c7fdf00d7ba1644ae2010000",
    ],
    [
      "ETag",
      "yP/AYsamzHuUU2i4Q89ZPA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "4d",
      "72",
      "82",
      "30",
      "18",
      "00",
      "d0bb64ad0e1050e94e6d146c1401ad944d06f003318818fe844eef5ea7d7a8ef0eef1b05510465c9aa1b871cbda12e50f451340aa599d748fd7e4ba84575b5fcdcf7dcee35636392e0dd7193ddd25d2da66eb1b09d5a698b9e31339ee39e3e3627d3aae5f65e06ab2e9ac47c962f346b6e5c6455388250dc429ce09b7e3dccac2f76690dc8acd0ad13e7987b44188930bd3da48e62536634452567b0e23722d52d01f9186fd290aef1d6b6c552193ac2e894a97a9675ff1e86c3f107ad6cba35735f6872b003f55e9caf872c16131e4e7d929e8e0d56b8c963bcf6b271347a79f977d000c1a34805942c7d6ec79aae0fd05f7d5675053cffcf211020d0cf2f462f3a1a19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:30 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-59-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6f9b3014fd2bc8fbda04425e2452b446295d9112d20149354d1332ce85ba05ccb0e9d455f9efbb98a66b55a9fd84ed7bce3de73e7822f7bc3c90394978f6bb81faf1cb9d48c8190145337cbd096eecdd9e9be16efff7aeb1ae6d5a6641b6582082b72c498b2a879e144dcd40ce77613fab4553d15a881e26ea8d67bdc16464d9037b6259d3c9087912f274cdcb7b64df2a55c9b9699eb4fb9910590eb4e2b2cf44f1f26e3ed866558b3b604a9a6f254d5491e6c7a25f73c1a8e2a25cec4234d048a8632828cfd1c27fe621397f9bbacf69d1cf10fcc01950c64453aad616a660a24c79d6d43a2b993f116df3d58184eeda5d45061379539471490b38330e54d1583d56605c06db8de1f997db60b38cbcad1f87ab2b77b3ecafb6ebddc60f8d9b2b37700d45931c34d75818e7fae6e305f50f20152fb57ad43eb7cacf0df2de8fa525a0b4842e184fad091d38d62c4993294b9de138492d481227998ee930b1d86c04a3430214795a54b36829ca8905b60d43271e803d8947c3218be9c01ac70e1d1d201d38986f468e67e44fcd155c705909c9bb0ee12279911b47c1ce5f2d23579790d22657179db1b680d71e1516185bd600811fd4756ca35ca05adb72cf8fdc60b98abcbddb4d790d19658fe16f9c734a730988a635365041bd11076c1af1971bf702c17a6ad7a7a024f39f4fa4ed7bebe455db5fe8110eb1b5acf4978451e0f9dfb49d13624ff346431eba03a9d0f22dd687ae8fbf10898bda6521df776ef083744f01a45043c93e9f288275e0d3ffedb4fc88c5f54719a9f08efbc3642bc26ae8f688eb724fecb135721ca2c1b57a171b4f87a7aeb539da8c5040a99e2bea961f0bedc41af902c220ae80afbb75fc070be35e7b7c040000",
    ],
    [
      "ETag",
      "WRW2UVi/SUVzju0P2angRg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-59-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "83400c86ff4bfd288b6c61a824fb80bae9926d3a8689c698e584824ca07877b89065ffdd1eea346aa25fa0ed3d2d7ddf63034f591983070f59fa5ca36cf652d4731304a8ea5c2b7e55542a040b508b94c9837ee3f4b297e0667fba1ead6ed35199cffdf560c0848a1eb110e06d20c9308f1578771b284581dc16515e17e5b2cd2cd04d658a8b3018cfce392f2836f9ec7a32f14f2643d85abbc65868b16cf97fb4dd6f2d58d14380094a2c2334bb54925618e9b191a94451e5d85154cb0815b4707b904aaa2b21893a5ce9f48f3b5dd7b17bdd9e6bdb87aec3604e91d01995cc5e2f783fd0a4451ed09a5582cb806c43169cb4cf172e67712bc484e359c863cc7e5f018911c978f92757f1ba8f826fe1037b77e03b270aaa4bbda346934bffb7716ce9e7a8333f1cfe209466a37648389e0e17a13fbd32dcfdbbf49346a3ba92c43e2a3416766de7a87fe8da6fae9e92719abfe36959a30591e09fe322d3e0252257b87d05152814407a020000",
    ],
    [
      "ETag",
      "/5y42ivRX+MwFjYgFnlQAw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, MAX(`amount`) as `amount` FROM `purchases` WHERE  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-60-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "4f",
      "e2",
      "40",
      "10",
      "fd",
      "2b",
      "cdde174d8016282d90188fd39e36c182a5e899cb05b6db6d5d2dddbabbc57086ff7ed35614ce4413923233efcd9b999d79418f2c8bd010852c792aa8d87c7be0216a20aa7002de99bcb137f27afd34fa3bd0a7f3c9f3800497c9c9092058c9927895a7b42979210895c3f9ac95085ee45870de84444dcb68b62dd3e8b43b9661d896093c49d378ccb24760df2b95cba1aeefb45b09e7494a71ce648bf0d59b5f5f77f45cf0074a94d40f25755091fae7a2a7292758319e9dcc67504021a958d015662994f0ce8cc2ef87a95b0caf5a0980d78c504c082f325596052908cf629614a2ca8a862fa82a73ef0f9a3963e72cd09682122ea2058b961a96da62913f36b4abd1afa3255e95f996c7a57b67683ffdc995b6cc41fe1e4b2a97daeda5e33bda411ad7d3e69ee7cc02ede8f458bbf027f3a9f6e36e1f020546542a9655e505384c6959daeb04dd8fef5612b002c53ab8b00d0bb7fbc6208c439bc4fd6e2f8c0d1a86fdd0eee16e68908149cd28a41878aacc5eb170c633d3e85a710fa861cfc4833e1e74ed9e4d086977ccb01b99c408a3fec036db68db40cf82297ace64ce25abc7886e7d377016813ff7ce468153b511e32255e775716513fb752a687261186d007ed2dbb68c320e6ae5bbb85ee0f8a3b3c0bd71ea5518d30493cdec099621c6a9a480c602afa8a2e28a473038349dccdcc09d78a33130aaf79dee10120d7fbfbc13824d5e4d5a555f34f2fdd11d70b01078f35f0cea806bd86ef7e46e705a54900a5f5975fe751d40e5d8deadce81651e5816dafed9c2af81e01e6a65743d77fc3b54bb7c1a534133f2f55e00b80a7c79d6bb1b032c5c19c84805366c2191a50811b4de46b6aa5a7965f7da5da38f",
      "2ab0501f62a6d5df8dbccc5166a42b9aa9d78eea1bab8658860af90682202c91e77a1710fd074f0695dfe3040000",
    ],
    [
      "ETag",
      "SsV7ysQvqAz9/PUOw9cTHg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-60-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4d",
      "6b",
      "c24010fd2fd3ab912486b4081eb4d82a04dba66a0fa5c81a27319aecc4dd8d22e27fef6c2cb6602fbb33ef837d8f3dc136972be8c232cf7635aae35d86e6cd0e31eaba309aaf8aa44668011a91b1523e50391ea5aa9266bf56bb8fc3bc74e7fd5e8f153a596329a07b8234c762a5a1fb7902294a64db62516d59628e95ddc693e9f079183350d2ca02935914f507d110ceadab4594544bf36b7a8a5efad3ff2c5fe7166c6819638a0a65823641a568838919db725a9455818ea65a25a8a1113744a6a8ae842272187142d7f1c2c0f53d3f74ddfb3060614189303949d6cede391b1832a288e9c0dda0c302d58c5c336dce3dc35ed3c14e7edbef34e9fed2fe95eeb4bde0860e6edc5f3faf0e8e06f5ab22aea0d1a6772f4d1ec9b633dcdaa81a5b9008fe86516e2efbf91b1a4b68c1e3010000",
    ],
    [
      "ETag",
      "n8omIHfrpntvhrqWwVm0VA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "401400d0bbf4dab21882d0d909a89002193441b2a19ae6a32834d8208356ee1e2bd788ef0eef8108a5d0b649575f80a177341109cfe93c1596875eb8ef5d5375651cc3ee6a6ff0472410b639b266dd7c67aa6b4250dd5619a55ee9300f077bfe458ae6e0f44771b75b049cd54bea59b91644f8d41b467c91e5532edb57ae0e5d6a6c47878555a2d136c59f6f076f2bad336d92882e9dcd55e56173110f461239f5d28aa7b3bdb85bab5b25f6a6adc05de9fc10c652cfcb682b0e1ef1e94690741003f1e847fe9829bc3bb3b4304f53b9af43496b07d093c20ddd7cade2006c6e09f397977f07cd108c4dc1a14d8ae77659c17886feea27ddd4c0f3bf0e8403473fbfba19af0219040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:31 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-61-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536b6f9b3014fd2bc8fbda8447c8538ad628a56bb4866c405a4dd3846ce7426901336cda6555fefb2ea6e95a556a3f61fb9e73cfb90f1ec95d56eec88cb02cfddd40bdff742b183921a0688aafeeb2d8fe853fa605fbc2b3c2bbafa678b84ee77344642d4bd2a2caa12745537390b36dd84f6bd154b416a287897a23bb678f5ccbb19d91658d472ef224e4c96556de21fb46a94ace4cf3a8dd4f854873a05526fb5c14cfefe6bd6356b5b805aea4f95ad2441569be2ffa39179caa4c94f36d88061a09750c05cd72b4f09fb963a7af53f7335af45304df671c28e7a229556b0b5370512659dad43a2b993d126df3c58184dea5b78c0c2ef2a628e392167062eca8a2b1da57609c079bb5b1f2cf37c17a11ad367e1c2e2fbcf5a2bfdc5c6ed77e685c5f78816728ca72d05c636e9cea9b8f17d4df815459a9d5a3f6b9557e6ad0eaed585a024a4be882f1d81a517b624d59c2c63c990c862cb180b1091b0fe980597cea82bb634091a745358b96a2e4746c53c7b1e2c9706ac7aeebd098392e8b1d361c38309d0eed01238713f250670ace32590999751d22d7c12af2e228d8facb45e4e91212dae4eaac33d616f0d2a3c20263cbb211f84e5d87369a09546b5bbef2232f582ca3d595d74df91252caf7e16f9c7342730988a635365041bd163b6c1af1176bef0cc17a6adf8e4149663f1f49dbf7d6c98bb63fd3231c626b59e92f09a360e57fd1768e882b9a371a72df1d4885966fb03e747df885485cd42e0bf9bef5821fa47b0a20811a4afef14411ac031ffe6fc7e5472cae3fca488577dc1f2e5b115e43b747992ef7c81e3a966b110daed59b983db08f5d6b73b419a180523d55d42d3f16da8935f21984415c015f77ebf00f2c1ce2bf7c040000",
    ],
    [
      "ETag",
      "4CmUzex/0eymE0SkK/owWg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-61-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8d92dd4ec2401085df65bcb4248560214dbca80a5203c84fb93286acdb010a6da7ee6e25487877672ba25113bd696766bf99ce39db3d6c923c061f9e92e573896a77b64433b6c10475991acdaf82728de0001ab164b217479b8b5178a746e3d76d77ba95ed61e37c7c79c984962bcc04f87b582498c61afc873de422436e939496593eaf3207ccaeb0c569340987b79c6714db7c38ebf783ab7e070ecea9311646cc2bfe1f6d8f0707d6f434c1052acc25da5d0a456b9426b432b5c88a146b9a4a2551430557074b45652114518d2b35af5eab7b4db7516f78aedbf29a0ca624854928677636e5fdc09011e984b6ac123c065415b2e045f57ce1721257426c180e231e63f7fb0a2894a4e2f99f5cc1ebae04dfc2077674e03b27322a7373a2bafdfbe0b7716ce9e7a89b20eafc20b461a34e48140e3ad328188c2cf778947eb533a8478ad8478dd6c2badb6c5fb43cf7ddd56bb24ef3777ca34a74400afe397a89017f21528d8737273895e27a020000",
    ],
    [
      "ETag",
      "HdTk5PIJrPQzwFSwc8N2+Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`date`) as `date` FROM `purchases` WHERE  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-62-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "3010fd2a91f74f2bf123040804a9ea18646d341a6808add03481e338a9db10a7b643852abefb2e49696195560989d8f7debd77e7bb57f4c4d2100d50c0e2e79c8addb7471ea01aa20ac770fbf22bbb7216fc713bbe9e65d1b219da4b677c7b71010856b024de6409ad4b9e0b42e560316fc482e719169cd72151dd34ea2db3a31b2dc3d4f59ed9019ea4493461e913b01f94cae4a0d93c683762cee384e28cc906e19bf7fbe6d66866823f52a264f354b2092ab2f97fd1cb8413ac184f2f167330904b2a5674835902163e9861f0fd347583e14d2306f096118a09e179aa0a5b9082f03462712ecaac68f08a4a9b471f686e4fec91afad05255c842b16ae352cb5d52a7baa69a3e9c2f5cfd62156747d5e5c579fda4f6f7aa3ad33107fc092cab5767f6d7bb67692c471b585ebda735f3bbb3cd7aebce962a6fd581e43c05e48a5626969cec741420b636ffd733ebf5a41c00a14abe0aaa79bb8d5d7ad200a7a24eab7bb41a4d320e807bd2e6e073ab13ab4130614034f15d94b164e791a76ad4e9f5042a39ede277a40da66db08baa46b18fdae659a1dcbe812422cb4afa117c1141d339971c9aa26a27bcff1ed95ef2ddcd1d0b7cb32229c276a5c992b8a38f6a9a0c895aeb700f89fdaf6459471502b5ec5717ddb1b8e7ce7ceae066142634c76f3671885082792021a0bbca18a8a1b1e42e3d06c3a777c67ea0e27c0285f7776404834f8fdfa41f07759d96955fea3a1e70d97c0c142e0dd3f31f001bbb0df1fc9dde1242f2125be3c55f9b75500b5a0968f937172ea9c9c4cb4ffb3875f0dc13654cae876617b4b545d7934a282a6e4ebb9007019f872a90f1b0658d83190910ace308544162244d06a1ad9a62ce58ddd357a56f17e0016ea53ac6f99879617398a8c744353f55651b56165138b502edf41108421721df70aa27f01be007a97e10400",
      "00",
    ],
    [
      "ETag",
      "wKpGIUojvDHPpfY/dEYIDQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-62-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "b5",
      "4d968a2569c241b0510c41ad92180d214b3bad85b65377b72021fdefcc1643345ebceccebc8fec7b7b804d5e2510c02acf3e1b54fb8b0ccd931d22d44d61345f35551ac101343263a5c81fb2447cf972178def5f45f186def666371cb242c71f584a080e90e658241a82f70354b244b62d97f58625665fdb6d327b096fc3888192120bcce6d3e9f5681a42eb9c2d8934f82fcba275604dab08535458c56813d48ad6189b892da7655917e86a6a548c1a3a7147648a9a5a2a229711d7f7dc9edf175ecff38518f87d1616144b9353c5daf933670343461611edb81b5cb2407523d74cbb73cbb0d775b0d35517ed27d73b73833f5cffb76ff1fdd8686f503f2ae2e41a6d68712a30265b8a7f2830aa410762c9bf7f979bd3de1e01ec424d0ada010000",
    ],
    [
      "ETag",
      "0iOgd0x6awRCJX0lZe2vDw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "000002ff1dd04b7282300000d0bb642d0e7e28d09d1646290450415236991012ab3425060463a777afd323bcf70308a5aceb70df36ec1bbc024de6ee944e2b738506f39141a5dd7dee0f9e3254160ec9ce54421b3e3d923e44752ce0036188b34a94a71738164dc81d82d159a3b775d70ef1cee5791c35bcf5acacfc28aaed0db244d5ee363ce14303c33158487967651b6c8829ea55c52b6d3472d91630b6b9b84b99e268a41eb68d7727ea2e2470e0e75510687b3e474dbeb8ce53ac0c4bcc96fdc3f9ba1c759e446850e3edc253a3086624a9fb819657a74061ba76b69b796da39aee299800769767c53a7c7eba1796eb4ec07f02eeb564cf8935238a29f0fb07254125d023010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:33 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-63-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "2b64f6716d4b5b0a6d93666d2a5d9bb454816a369b0d19860b8e52069941634cffbb97c1baba9be8133373cfb9e7dc0f9ec91d2f12322531cfee6ba89ebedd8a989c105034c3d7cba5b8b972436b39712e52c64c27f8aeeac7d90c11bc6149ba2f73e84851570ce4741774b34ad425ad84e860a28e3decf46dcb1cf407b6693ab6853c0979bae6c51db26f942ae5b4d73b6a773321b21c68c9659789fddb7bef61d02b2b710b4cc9de47c91eaac8dee7a23f72c1a8e2a298ed0234504ba822d8539ea385bfcc243efd98bacbe9be9b21f88133a08c89ba508d2d4cc14491f2acae7456327d26dae6bb0309dcb5bb080d26f27a5f4405ddc38991504523f55482b1f4b71b63e52db7fe661eaeb65e142cceddcdbcbbd8ae771b2f30aecf5ddf35148d73d05c63669cea9b8717d44f402a5e68f5b0796e945f1bb4fa7f2c0d01a525b4c1c8316dda1f9b93388d1d968e87a33835218ec7b133a2c3d864130bac24068a3c2daa59b41045d24f27a96527111b8eecc84a268368ecd051c446142cc71e0f0018399c90c78a2b38e3b21492b71d22d7fe2a74a3d0df798b79e8ea12525ae7eaac35d614f0dea3c20223d3ec23f093ba0e4d940b546b5abef242d79f2fc2d595db4e790d19654fc13dce39a5b90444d30a1ba8a0da88049b46bcf9c63d43b09edac53128c9f4f73369fade3879d7f6377a88436c2c2bfd2541e8afbc9fdace117145f35a431eda0329d1f20dd687ae0f7f10898bda6621973bd7ff45da271f52a8a0605f4f14c13af0e5ff765c7ec4e2faa38c5478c7fd61b2116115b47bc475b947f668683b23a2c195fa376699fdf1b16b4d8e2623eca150af15b5cb8f85b662b57c03611057c0d3dd3abc0020f194ce7c040000",
    ],
    [
      "ETag",
      "QFohVET4F97Pfcc07S+tuw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-63-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d92514f83400cc7bf4b7d85c8149921f181e954229b73630fc698e5848238a0787768e6b2ef6e0f751a35d117687bbf96feffc71a96459d820f7745fed8a25cede4a8af4c3045d5965af1aba15a2158805ae44ceee2f58b3bb918e45773b19cbc04729965517074c4844aeeb112e0af212bb04c15f8376ba84585dc9650d956f5a2cb2cd0abc61467f1341c9f715e516af2f13c8a824134848db56d4c85168b8eff47dbedc68207ba9b628612eb04cd2e8da4074c7468642a513525da8a5a99a0820eee0e72496d232491cd15dbdbb77b9eebecf5f63cc7e97b2e832525421754333b9ff17ea0498b724acfac123c066417b2e0ac7b3e71b9483b21260cc7318f31fb7d05242624d3c59f5cc3ebde0bbe850fecdd81ef9ca8a8adf5963a8d2e83dfc6b1a59fa34e8278f883509a8dda2271381acee2603431dcedbbf4c14aa39a48621f151a0b7b8e7b78d0f79c37578fc938cddff1b56cd18244f0cf715e68f033512adcbc020193a18a7a020000",
    ],
    [
      "ETag",
      "/eYz4PKBgQUakPzArkffLA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, MIN(`date`) as `date` FROM `purchases` WHERE  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-64-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "53614fe24010fd2bcdde17cd092d580b25311ea7f56ca2454bd198cb05b6db29ae966ed9dd7a2186ff7ed35614ce441312ba3befcd7b333bf3429e789e900189f97c59825c7d7b14313920a0e91c6fed0bf3bbdf5dc6f17db8749ed9c47f48cfad9be36344f08aa5e8a2c8a0a5442919a8c164dc9e4b5116540ad1c2442dc76e751cdbea76ba8e65f51c1b790ab2f492e74fc87ed0ba5003d3dc68b7e742cc33a005576d26166ff7e673d72ca47804a695b92b69a28a323f173dc904a39a8bfc78324603a502398505e5195a786726f18fddd46d4e17ed39829f3903ca9828735dd9c2144ce4299f97b2ce4a062fa4b6b9f541c6dea5771a1933094cc864ca93994195319d164f07c6951feccd12aa61b65f5d369fc67938ba3266054a3f50056a66dc5d78a167eca4f003631204de3832f64ef68d5fe168726dfcbcdf86a0b90494e6796d2da2710695add7eef91fdfac22508d8a4d70dab31cdae95b6e9cc63d96f60f8fe2d48238eec7bd237a185bccb5c14e62a0c8d355f69a4573911f5a2e75bb8c52705d441edaaedb492076198b9d1ed0bed3edf71de8f7c8fa80fc955cc319578550bc6921b90bfdc89b46e124381d465e5d464acb4c9f35e6aa22b67d6a2c726a591d047e52dbba8a72816ad59bf841e485c3d3c8bff59a31b8843965abf1120721a5990244534917a0415e89041b47ae47633ff247c1f01219f5db5e6f108a0c7ebfbc13a25551775ad7ff641886c37be45029e9eabf18fac04d58afb7e46e6956d6901a5f9f9afccf4d8074b096f75377e764ef9c1cb2feb3c6df01c15d6894c9cdc40bef497315420a1272f6f55c20b80e7cb9d29bfd422c6e18ca288d679c42a62a1126a19946bea84b79651fd98ee3921a2cf58758af6f6f5a5ee5a832c20272fd5a51b35f7513ab50a9de4018c4210afce01746ff01a9b8a256df040000",
    ],
    [
      "ETag",
      "4H/+I2qbbYRq6vcUIhfF0Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-64-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff6d916d4bc3301080ffcbf9758534960a857dd8b4e860745a375f266364edb5b66b9b2e499531f6dfbd74a2c2fc92dc5d9e23f72407d8164d0a016c8a7cd7a1da5fe4681e6c10a3ee2aa3696b65a311068046e4448a5df4c297fef3ebb28cf4ccdf3c656537cb87432274f28eb580e000598155aa21783b40236aa4b6f5badd1262f6adcd26d13cbc0d632ad432b58568319d8ec6d3108e839f965418fc6db919cdc3fff8d57100a5dcc498a1c226417b7dab6489899958332deab64247cb4e25a8a187fb835cc9ae154a4a872a8eef39aeef31ee729fb12bdf23b0928930856c885d3cd26060a411552c3f490c2e09507d488e59bf7e50d9ed056cc419670ee30e73fb19ff42fc1ce26790770e79165a7dcf31de1bd4f74a929446ebc34e6ed7d2fad2cb054675388044d0afdc15e6941fbf007b788812f2010000",
    ],
    [
      "ETag",
      "aqNX2Z6WYZjNsO6bVfjuOg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "02ff1dd0e19242400000e077d9df69b432b87f8c92ba588b923f06b78368dbacb035f7eed7dc237cdf1be4654938cf867b4b28f8022287c6b25c16b2998cf22b42fb8794e26c73d64c55bd9c1aa5131692a7edb6e7b8738f129579790fce2a8d0f5572734eb876e3224383e6973e6c4f95e2dda1a0a9bfa69235b3ab5c32a3550a06073bbe4c3b338781e34d9111bf9418ddbeb59f73e6e8c1c3c1c3e4d67a1716615a6d924817835f3dad9eec55677ddd63f4bc8efd9c72b8a2b64e23266a6d44486f76f9e172b4c37532d60c8aaaebbc26485fed7cdcd65e4ac207c6b96a27dc94562e580032b3a6273c6b3e6e45358c05f84fc806c1c867c222794f7af0fb07614c7d8e23010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:35 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-65-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "6b4fdb3014fd2b91f795368fa64fa91a5d0950a94d4792c2a6698a1cc70986240eb1538450fffbae1dca4048f029b6ef39f79cfbc833ba67558a662861f9434b9ba76f773c4127884a9cabd7ccdd3f86bfae53361017cee58fe52d77aef2f91c104cb1042eeb82f6046f1b42c56c17f6f386b7356e38ef41a2de68d8b347aee5d8cec8b2c62317788216d99a55f7c0be95b21633d33c6af773cef382e29a893ee1e5ebbbb977ccbae177944861be97344145989f8b7e2f38c192f16abe0bc1402b6813d312b3022cfc67a6c9e9fbd47d86cb7e0ee03d231413c2db4a2a5b9082f02a6379dbe8ac68f68cb4cd3707147a6b6f191984176d59c5152ee98991628963f95453e33cd86e8c957fbe0d368b68b5f5e37079e96d16fde576bddbf8a17173e9059e21715250cd35e6c6a9bef97001fd940ac92aad1ea967a5fcd2a0d5c7b12802480bda05e3b135c2f6c49a26593226d964304c328b26c924190ff120b1c8d4a56e9a500c3c2daa59b8e2553a22d84e9349ec8cf13476a7ae1b4fc77418a713db1958c44edd09468713f4d83049cf98a8b9605d87d04db08abc380a76fe721179ba840cb7853ceb8ca902de7a9450606c5936003fa9eba0a28c839a6af9ca8fbc60b18c56d75e37e535cd31790a1f60ce192e0405346ea08192361b9e42d390bfd8786700d653fb790c0a34fbf38c54df9593376d7fa54730446559ea2f0aa360e55f683b47c4352e5a0dd977075483e55ba80f5c1ffe021216b5cb82ae765ef01b754f01cd68432bf2f54401ac035ffe6fc7e5072cac3fc8080977d81f2294086968b7474c977b640f8703d7411adcc80f31776c1dbba672a88cb4a4957ca9a85b7e28b4136bc52b0882b002beeed6e11f340164d47c040000",
    ],
    [
      "ETag",
      "bf4vwSXVdi3sG2HBCho2Qg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-65-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4fc2400cc7bf4b7d1d71181866090f435049602a8cf06008396e1d4eb775dcdd2448f8eef6a6a251137dd9dadeaf5dffffdb1e9ed222061f56e97a53a1da9dacd1dcd96082baca8ce65749854670008d5833394f9e7bf3d3ab4e1686068353b979e9cb70dbed32a1e503e602fc3d242966b106ff7e0f85c891db2465555e2cebcc01b32b6d711a4d86e115e739c5360f67a351d01b0de0e01c1b6361c4b2e6ffd1b63838f048ab0926a8b090687729153da234432b538bbcccb0a1a9521235d4707db0565495421135b8d2f0da8da6d772cf9a679eeb76bc1683194961522a989d4d793f30644436a12dab048f0155872c38a99fcf5c4ee35a880d8761c463ec7e5f01859254bcfc932b79dd07c1b7f081bd3bf09d13395585395297a39be0b7716ce9e7a87e100d7e10dab05147241a8e07d32818df5a6ef12ebdb733a86f15b18f1aad854db775deee78ee9bab17649de6eff84655e88014fc735ca706fc44641a0faf1e0625667a020000",
    ],
    [
      "ETag",
      "WfvBW/G7lNNteA/cqzDcNw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, MAX(`date`) as `date` FROM `purchases` WHERE  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-66-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85537f6fa24010fd2a64ef9f36f10788829a343dafd21e89628b68cfbb5c745916bb2db27477e9c56bfcee37406df59ab4090166e7bd7933b333cfe881a511eaa390ad1f732ab65fee79886a882abc86d3bf3fd3d49c3f10fbf2ea868e878b196dcd873767678060054be24d96d0bae4b92054f667d3c65af03cc382f33a04aa5b56ddb0da7acb6859ba6e5b6de0499ac423963e00fb4ea94cf69bcdbd7663cdf93aa13863b241f8e6f5bcf9d46a6682df53a264f358b2092ab2f9b1e879c209568ca767b32924904b2a967483590229bc31a3f0eb71e806c39bc61ac04f8c504c08cf5355a40521084f63b6ce451915f59f5199e6c10f9a3a23e722d05682122ea2258b561a96da72993dd4b4f1e0c7c92ac28aae4e8bc3ea57bbf427636d9581f41d9654aeb4dbef8eef6847215c4f9b799e330db493f353edca9fccaeb56f8b4308241751a9585aa616e030a1455a2fdd73dfdf5941c00a142be7d2d62d6c74f55e18873689bb66278c751a86ddd0ee6033d449af4ddb514831f05411bd64e194a7dd18b7f58ed53569acf76ca3ad1b669b44b61e623d84b7d9b3a318875607ed6ae88f608a0e99ccb864550bd1adef06ce32f067dec52070ca32629c276a582557147198a7822297ba6e00f083da76859771502beec4f502c71f5c04eedca9c66044d7986ca78f3008314e2405341678431515631e41e3d0f564ea06eec41b8c8051deedf51e2151ffd7f31b21d86665a755f94503df1f2c808385c0dbff7c90076cc26e772037c7495e424a7c6955f19f2a0732a09637ab7564b58f2c0bed7eefe0a921d8854a19ddcc1c7f81aa239fc654d0947c3e17002e1d9faef47ebf000b1b063252810d534864214204ada6916dca525ed81dcbb04d5482857ae7338deebee5458c2222ddd054bd5454ed57d9c4c295cb57103861883cd7bb02ef3f3a78f28bdf040000",
    ],
    [
      "ETag",
      "zZnn3Vkc7FGQeMDYUe2VDQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-66-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff6d91516bc2301080ffcbedb56569ea3a2cf8a05be704115715194324b667adb64d97a41b22fef75dead806ee25b95cbe4bee4b4e70c8ab1442d8e4d97b83ea7893a179b1418cba298ca6a996954670008dc8889ccd9e926af93af427acebef96d35bdc0777fd5e8f089decb014109e609b63916a08df4e508912a96cbdae0f8498636d57a3c93c1a4631254a99dac464311ef707e308cece4f492a0cfe963cf6e7d17ffceaecc05e6e62dca2c22a417b7dade41e1333b2665a947581ae968d4a50430bb71b99924d2d94942e65dc2070bda0c3b8c703c6ee830e81854c84c96545ec62468d81914614b1fc2431f009506d488edb76fca0b4d70ad88833ce5cc65dceda1eff42fc0af2ba5750e7fa24cf42abef3e0647837aaa244969b43eece2f620ad2fbd5c6854830e24827ee5393797f5f90bd2195b17f2010000",
    ],
    [
      "ETag",
      "SSFcnWYG3N093hWP/ej65A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "300000d0bb642d4ef888d29d092a8a14abf861c584182c5009f20ba1d3bbd7e935eabbc3fb06845256d751c3735680372089668de93886f34b0787c0f37c991f2597bdbdd1a2a93e94dcae954e47c25d68a5bcc50a795f11e22f4d35ebf4cfc0d86a4ee21c1f945b8367aac9c9be4d37419ba6c1d0e8fb6436844a760e5b5b08e7302b3a79ce731b7b4561927dac2c8df8b08059f5d5362b2f729bab8db85f89d345e3fd3c4c4d74175e22b0bce1de773f0c8e0bc7c5968aeb7b88a2e3353b6f7718aea19bd26e5bc7221eae48a7a501efbb048989f2584fd4c487ad125a051dbfbcfc3b6004585fa615aba3f4b95d9f58d608fcd58f1a59b2e77fc448c52af0f30bc8823cc819040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:36 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-67-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85535d6f9b3014fd2bc87b6d0249032491a2354ae8162d212b21edaa6942c65ca85b822936adb22aff7d17d374ed26b54fd8bee7dc73ee074fe48e170919939867f73554fb4fb72226270414cdf0b55fde5dcf2fccfc76f6630fe7d7433affc67f3f4e2688e00d4bd25d9943478aba6220c7db4d37ab445dd24a880e26ea386ea7e70cac7eafef5896eb0c9027214f97bcb843f68d52a51c9be651bb9b0991e5404b2ebb4cec5edecd87be5956e2169892e65b491355a4f9bee8e75c30aab82826db0d1aa8255411ec28cfd1c25f66129fbd4ddde574d7cd10fcc01950c6445da8c616a660a2487956573a2b193f116df3d5816cbca5370b0d26f27a574405ddc18991504523b52fc1380fd62b63e19faf83d5345cacfd6833fbeaada6ddd97ab95df91be3eaab177886a2710e9a6b4c8c337df3f182fa0948c50bad1e36cf8df2738316ff8fa521a0b4843618b996437b436b14a7b1cbd2e1a91da716c4f130766d7a1a5b6c3480411203459e16d52c5a8862d4b72d170022709c613418256934746d2b72a9655336726c48fae470421e2bae60ce6529246f3b44ae8245e84561b0f567d3d0d325a4b4ced5bc35d614f0daa3c20223cbea21f09dba0e4d940b546b5abef0432f98cec2c5a5d74e79091965fbcd3dce39a5b90444d30a1ba8a05a89049b46fce9ca9b23584fedfb3128c9f8e71369fade3879d5f6177a88436c2c2bfd259b3058f85fb49d23e292e6b5863cb40752a2e51bac0f5d1f7e211217b5cd422eb65e704ddaa70052a8a0601f4f14c13af0e1ff765c7ec4e2faa38c5478c7fd61b2116115b47bc475b947b6ed8c0636d1e04afd1b73ad41ffd8b5264793117650a8e78adae5c7425bb15abe8030882be0eb6e1dfe007e5513fd7c040000",
    ],
    [
      "ETag",
      "2pkYDQ/ljCXyeFY8aDKizw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-67-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8d92614fc2400c86ff4bfde80883e0c0257c40455d02886318a321e4dcca186eebbcbba984f0dfed4d44a326fa656b7b4fbbbeef6d038f491e810b0f49fc54a25c1fc4a8af4de0a32a53adf85550ae102c402d62268ffb65335b8d6efcc645fdf0ecce939dd7db7adced32a1c2256602dc0d2c124c2305eefd06729121b7859496593eaf320bf4ba30c549e07ba30bce338a4c3e9a0e06bd93411fb6d6be31125acc2bfe1f6db3ad052b7af0718112f310cd2e85a41586da333295c88a146b8a4a19a2820aae0e6249652124518d2b35a75d6b382dbbd9683ab6dd765a0ca6140a9d50ceec74c2fb81262d529f5e5825380cc82a64c18beaf9cce524aa8498d01b053cc6ecf7159018928ce67f7205afbb147c0b1fd8ce81ef9cc8a8ccf59e3a1f5cf57e1bc7967e8e3aeb05fd1f84d26cd41e09bc617f12f48663c3cd76d24fd61ad55812fba8d058d8b05b9da3b663bfbb7a4ac669fe8eab65891684827f8ecb4483bb10a9c2ed1b0202763e7a020000",
    ],
    [
      "ETag",
      "9Eu2mjNVR1G/+DZIr8xX/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `purchase` IS NOT NULL  AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-68-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "6fda3010fd2a96f74fabf123504800a9ea184dbb6c3474216985a6091cc7a16e439cda4e2b54f1dd77494a81556a25a470bef7eebd3bfb5ef0034f233cc0215f3ee64caebfdc8b10d730d36409a7b3f04a0f23cf0c7e5aedfb5fcebdb6be5ee4cfa7a780e0054b915596b0ba12b9a44c0d82696329459e1129441d0ad5cd5ebd65768c76ab6d1a86657680a758128f79fa00ec3bad33356836b7da8da510cb84918cab0615abb7f3e653bb994971cfa856cd43c926a8a8e6c7a26789a04473919e065330902b26e76c4578021676cc28fc7658bac1c9aab104f013a78c502af25417b6a0041569cc97b92cabe2c10b2e6deefdc1537b6c8f7cb4908c0a19cd79b44044a1f93c7ba8a1d12470fda30559151517c745621ba00b6f7285161918b8238aa905bafd617b36da1d2d903345eec4476e301e233474cfd1818ae3a2c075eda98f8ece8ed1a53709aed1f7d93e04fc474c699e96ee7d1226ac70fe3a60e7fdb51604a241bb4ace2dc324ad9ed10fe3d0a271efa41bc6060bc35e6875c94968d07e8775a29011e0e9a27ac922a9488d2eb50049bb51c42c1a757bb473621a1dda6ac79619f55afd7e48fabd8e893735fc2cb966e75c6542f16acaf8d6737c7bee7b813b1afa76d9464cf2449f57e68a26f67d6a68726e182d007ed0dba6c872016ac5b539ae6f7bc391efdcd8d54b19b325a1ebe923bc9598248a019a48b2629ac92b11c1e0f0f564eaf8cec41d8e81515efff516a1f0e0cfcb8ee0afb372d2bafce2a1e70d67c0215292f57f39f001cbb2d9ecc9dd90242f2125be8caafa4f5502b7a0975dd43e883a07110cf8ef067e350ceb5229e3df81edcd7075e4b1984996d2cfdf0580cbc4a75bbf5d41c0c212828cd210c32ba4aa10a19255af91afca565ed95dcb32dab8044bfd3ed7ef6e475ed4282ab2154bf56b47d50a96432c52b97a0341121e91ebb89790fd077d41fe5e02050000",
    ],
    [
      "ETag",
      "YbMtAdR6UJ72jKIjt7+Fuw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-68-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d",
      "4f",
      "c2",
      "30",
      "14",
      "fd",
      "2fd7d72d6e38a621e141cca218243ac5c418424ab9ccc1d65bda4e4308ff9ddb6188c6175fda7bcf477a4e77b02ed5027a302f8b4d83667b56a07bf2438eb6a99ce54b93b20801a013052bd57dd7616cbbeaf53cd964c503bd59a98b7e9f15567e602da0b7836589d5c242ef7d074ad4c8b6d94caf59e2b6da6fc3f14b769be50cd4b4f0c078321a5d0f4619ec839345d4d428f72fd3741fc08ae6392ed1a092e83368432b946ee8eb5951eb0a434b8d9168a115b74461a8d1c210858c84e95518a749d4893b69145da6090b2b92c295a4583b79e674e0c8892aa72f6e07172c30edc84597edf9c970a76de1a76e1bed27179fb8f40f97fcf64dbf1f1b6c1dda47439cdca20f1d1d0bdc902fe5b8ac330d062005ffff5de98efbfe001a818d88dc010000",
    ],
    [
      "ETag",
      "nJ5te1s5nV/4qEgMoYscpg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "0000000002ff1dd04b7282300000d0bb64ad4e00c5a43b3e55844241c214dc6402c612d30a1250b0d3bbd7e911defb01acaab852b46f24bf801730311d2faa4509adfc061f244a1ce9e3bb21a49ac3edd885991ec57e8cbe3e7032d56766acb57ad022dd4497381d2b1aa8a034336c75b6d6521131d13bd7377c231015c58d2115cb3e549c09f37c1d0c4206275c79073d4ac8aeadcbeb61a01b616d32cd1a3bab90fabe343d32af1fb2c55043c754f8d49bc8b814b23e555ea358f38d067b7df602681ff82b2a56dbdd2e742e6630baefdcbd2f555ef03936127f3a7ec253caf3f6640559ee0e0d98013eb6a2e38a8aa7db58613c03ff09b49f5afe9cb039eb78077eff00e17e60ae23010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:38 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-69-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "2b91f7b590000102125a11a42b12843509ed1e9a22db7152b7214e63a713aaf8efbb764ad7aa52fb29b6ef39f79cfbc813bae7658aa688f0fca161f5e1cb9d20e80c31857378fd1170bc9ba497ead761bdc6de72327f20c3abd90c105cb324de5705eb48d1d494c9e92eeae6b5682a5c0bd181449dd1a4d31bb94ebfd71f39ce78e4024fb2225bf3f21ed8b74a55726adb27ed6e2e445e305c71d9a562fff26e3ff6edaa16778c2a69bf95b44145da1f8b7e2d04c58a8b72b68bc04023599db03de60558f8cf4cc9f9dbd45d8ef7dd1cc08f9c324ca9684aa56d410a2aca8ce74d6db2a2e91332365f1d50e4affd456c515134fb3229f19e9d5929563851878a5917e17663ad828b6db899c7ab6d90448b4b7f33ef2eb6ebdd2688ac9b4b3ff42d8549c10cd79a59e7e616c005f45326152f8d7aac9fb5f2738356efc7a209202d591b4cc6ce08f73c67423232a699371892cc618478643cc403e2d089cbdc94300c3c236a58b814659aa68c64fd518207ae93b8948e13ec9134f17a7834e83b038fba0e3a9ea1bf35576cc96525246f3b846ec255ec2771b80b16f3d8372564b829d4b235a60b78ed51418189e3f400f8415d471de502d474cb5741ec87f345bcbaf6db29af598ee9217a803967b8900cd0b886062a566f440a4d43c17ce32f016ca6f6fd149468fafb09e9be6b27afdafe428f6188dab2325f14c5e12af866ec9c10d7b8680ce4b13da00a2cdf427de0faf80790b0a86d1674b5f3c39fa87d0a59c66a56d2cf270a6013f8f47f3b2d3f6061fd41462ab8c3fe50a94568cdda3de2a6dc137be8b97ddd7d00d7ea5d6ce80e4f5dd3397446b667a57aaea85d7e28b4156be40b0882b00281e9d6f11fb7cc3a717c040000",
    ],
    [
      "ETag",
      "XNiaU9dHtZyLLa8D9Aqb5Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-69-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d926f4fc2400cc6bf4b7d3b926160e8125e8082a2800823f14f08396e650cb775dedd3484f0dded4d44a326fa666b7bbf767d9edb169ee22c041f1671f45ca0da1c45686e6d30465d2446f32ba74c23388046444c3e5c4d94cc54fdba8bebfb7afd4e0c3ce946cd26135aae3015e06f611963126af01fb7908914b94d5252a4d9bccc1c309bdc1627c1b837bce03ca5d0e6c369bfdf6af73bb0730e8da130625ef2ff689bed1c58d3628c4b549849b4bbe48ad6284dcfcad422cd13ac682a94440d255c1e448a8a5c28a20a572ade69a5ead5dce3eab1e7ba0dafc660425298983266a713de0f0c19918ce9955582c7802a4316bc2c9f2f5c8ec352880d7bc380c7d8fdbe020a25a970fe2797f3ba2bc1b7f081ed1df8ce89948acc1ca86effa6f5db38b6f473d4792be8fc20b461a30e48d01b7426416b30b2dc6c2fbdbd31a8478ad8478dd6c2aa5b3ba9373cf7ddd533b24ef3777ca30a74400afe392e6303fe52241a776fbb500e7b7a020000",
    ],
    [
      "ETag",
      "ZJSrcnr5KFejY55XaM6c0g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `purchase` IS NULL  AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-70-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85537f4fa34010fd2a9bbd7f34a92da5bfb489f17a95f348902a058db95cda0586ba0a2cee2e5e8ce977bf01ac6dcf4493267476de9bf76676e7953ef23ca6631af2d55309f2e5db8308698b82662b3c85d973aa1c153c74aeb2c1bd33bbd6d9c49e9c9e2282572cc5b2228523254a19811a07f3f64a8ab2605288232c7434328ebac3be6176cda1618c867de429481387e78fc8bed7ba50e34e67a3dd5e09b14a81155cb52391bd9f779ecd4e21c503445a75f6253ba8a23a9f8b9ea522629a8bfc3498a38152815c40c6788a16b6cc38fcbe5fbacd59d65e21f89947c0a24894b9ae6c618948e4095f95b2ae4ac7afb4b6b9f387ce2dc79afa64292112325ef0784998228b45f1d822d359e0fa074b9655159787556213909fdeec922c0b3470cf14a825b9fd657916d91e2d893d276ee038844cdc73b2a760bb24705d6bee9383b34372e1cd822bf2e36e1782de63509ae7b5739f852954aedf866b7fbcd28ac034ea36c9c5c818b2eeb1711226e1284a8e7b833031200c8fc3d180f542233ae9433f0e81214f57d56b16cb45de338c2eebf58766924004711877133662bdc40c4d96f48e913462d01d005db7e85fc9359c735508c59b09d35bcff6ad85ef05ee74e25b751b092b537dde98ab9ad8f5a9b1c9052a22f093ded655960b54abaecc767dcb9b4c7dfbc66a5e89032b16bdcc9ff09d242c5580682659061ae4a5887170f46a36b77d7be64e1c64d4577fb541283afefdba25f82f453d695d7fe9c4f32677c86152b297ff72e8031765bdde91bb616959436a7c1d35f59f9b04ed622fdbc8dc8bfa7bd190aeffacf1d7a2b82a8d32bd0e2cef8e36471e2420218fbe7e1708ae135f6efc66fd108b0b88324a638caf3052954824a1798d3cab5b79630f4ecc5e8fd660a93fe406e66033f2aa46551132c8f55b47cdfad543ac52a57a0761121f916bbb1798fd07f53fb0abfe040000",
    ],
    [
      "ETag",
      "eOvlsLsUj/Pm5hLOQtmAIA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-70-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "1485ffcbdd6b0bad8882e0c31c320b9d6837f7324462bcadd5b6b74b6e369cf4bfefa6ca9ef792dc9c7c879c932b9ccbe60013d897c5a74373792890d77ec8d0ba8aad6c2d35162100645508f96207c7f764ef56e4165592459ab39f783d9d0a61f5116b05932be42556070b938f2b34aa46b1ed76ed5910beb4fe942cdfe6cff34c849a0e5e586ed2f47196cea10bfe2caa26d7f0bf4cdb2e8013ed33ccd160a3d167680d9d5073e2eb5955b71586969cd168a187fb8bc2906b95210a4509c751188f86d1201e8ca2683c1a0a5891565c5223ece655d20113ab2aa36f6907b100a61fa568deaf5fbdec5bdca76db7bd9b661746bb3224092cfac7a35b9027f2e15842b371188056f28f8b926fe7ee1721e338b3a4010000",
    ],
    [
      "ETag",
      "Ms2hVIbuPouHlIR0ctRz1Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "1d",
      "d0",
      "4b7282300000d0bbb056272425487760a345a41a45d46e327c02021a6240103bbd7b9d1ee1bd1f2d4a12de34acad2b2eb4776d88a035492631b08f1d78069b93918bc087c1e94a776727e9ea729f59be09dc2fda6efb016dce0df3f29464fe658a89f2d473ca04e566b8f451b05a13275ec650d8db69e13da401c3fb6aa74003af06c2f3dea9737b4c82d98ddd5a911ef4235b232aef0b4651a2f6f0131bb382e4e6e30ae67a0c1a377baea0c988ed568efc96fbf1b16378580e59c56f8b6c4c7556da6197961fa4aa220f53cb7d93a990a1551b658d8af28c7b7c705d71d14f401b69fc210bc51b56bcdcc8b0ac91f69fc0da41f2d784c323c595f6fb07c616b28623010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:40 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-71-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "2bc87b6d12121292468ad62ca16ba4403620ada66942c6b950b7802936e9aa2aff7d17d364ad2ab54fd8bee7dc73ee07cfe49e173b3225314f1f6aa89ebedc89989c115034c5d77d50656b585afcefb7ab611a5cba7491fbe96c8608deb024cdcb0c3a52d4150339dd06ddb41275492b213a98a833ee77faf6d01cf407b6698eed21f22464c99a17f7c8be55aa94d35eefa8dd4d854833a025975d26f2d37b6f3fe89595b803a664efad640f5564ef63d1af9960547151ccb6011aa8255411e4946768e13f73175fbc4ddde534efa608de730694315117aab185299828129ed695ce4aa6cf44db7c752081b37616a1c14456e74554d01cce8c1d5534524f251897fec63556dee5c677e7e16ae345c1e2ca71e7ddc566bd75bdc0b8b9727cc75034ce40738d9971a16f1e5e507f0752f142ab87cd73a3fcd2a0d5fbb134049496d006a3b169d3fec43c8f9378cc9289358a1313e278128f47d48a4d763e84e12e068a3c2daa59b410c510928421311a58fd493434ad71148fac41644d6c669bd6603019c5e470461e2bae60c96529246f3b446efc55e844a1bff516f3d0d12524b4ced4b235d614f0daa3c20223d3ec23f083ba0e4d940b546b5abef242c79f2fc2d5b5d34e790d29654fc103ce39a1990444d30a1ba8a072c50e9b46bcb9eb2c11aca7f6e3189464fafb99347d6f9cbc6afb891ee2101bcb4a7f4910fa2befbbb673445cd3acd6907d7b20255abec5fad0f5e10f227151db2ce4e7d6f17f91f6c987042a28d8e71345b00e7cfabf1d971fb1b8fe282315de717f986c445805ed1e715dee916d9b7dcb261a5ca977314b4fe6b4f44d46c8a1502f15b5cb8f85b662b53c8130882be0e96e1dfe011c03aeb17c040000",
    ],
    [
      "ETag",
      "vSrlLeD3ixBH4gSFMaCmRg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-71-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d926f4fc2400cc6bf4b7d3be246609825be00055dc27f86261a428eadc0605be7dd0d4308dfddde44346aa26fb6b6f76bd7e7b91d601b671178b088572f05cafdc50af5c804635445a215bf72ca148205a8c58ac94b552f7afd8163074f8ebf1d3e6e1e769bcee8fa9a0915ae3115e01d6019631229f09e0f908914b92da4a448b3799959a0f7b9294e82b1dfbfe33ca5c8e4fd69b7db6c75db70b4ce8d91d0625ef2ff689b1d2dd8d0628c4b9498856876c9256d30d4be91a9449a27585154c81015947079b09254e4421255b852693815c7add955a7eada76c3ad31985028744c19b3d309ef079ab448c6f4ca2ac1654096210b5e96cf1d97e3a8146242bf1ff018b3df57406248329affc9e5bcee5af02d7c602707be7322a522d367aad31d347f1bc7967e8eba6d06ed1f84d26cd41909fc5e7b12347b43c3cd4ed25b7b8d6a28897d54682c74ecda55bde1daefaede90719abfe36959a005a1e09fe33ed6e02d45a2f0f80657fa0bd47a020000",
    ],
    [
      "ETag",
      "/s5uMNO10TZ1IkPWjVvjFQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `id` = ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-72-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "6f9b3010fd2ac8fba795f203680249a4a8cb52d631a5a425a455354d890143dd124c6d9329abf2dd7786a64db6ae952285e3debdf7ee7ce6093dd03c460314d2f4b1247cf3e99e85a88188c429bc5d4fae2cfc3b197f17134a12123a32eeb857c32120a8aa12785564a42958c9232206f3592be5ac2c3067ac09444ddb6c1a5647370dd3d275dbea409d205932a1f90354df49598841bbbdd36ea58ca519c10515ad88ad5edeb7d766bbe0ec9e4452b40f25dba022daef8b9e662cc292b27c389f81815210be202b4c33b0f05a19879f0fa95b14af5a2980d73422388a58994b650b28229627342d79c58a064fa8b2b9f78066cec41907da929388f17841e3a58685b658140f0d6d3c9d7bc1d112af14e3f258257681f6d59f5e68cb020cdc6141c452bbf9e6f88ea62d15c3503bd546de997640eb7adadcf39c59a01d9d1e6be7fe747ea97db9dd8780e1980849f3ca6e80c38c28abcf1375ff3d47558025e8d7c985ad5bd8e8e9fd3009ed28e99d74c3442761d80bed2e3e09f5a8df219d382418eaa462afaa70cef2be0d93ebd8569474f524498cd0367a71d730e3aed9ed99b84b928e15ea9689b60df48b5349cea82898a0f558d18def06ce22f0e7de781438551b092e3379569b534decfb94d0e442d70d00bed3db5665290335754eae1738fe681cb8d74ebd1a1392e268337b84e548702608a031c72b2209bf60310c0e5d4e676ee04ebdd1042aaaf3bedc21041afc787a2d083645356959fd2b2db801db3dc66b9c9515625d3f20a38bb6dbc6ff2946be3fba0559cc39debc4dff267f85afa2dae28b1e526abbc83c883a079185b63fb7f06b20b862b532ba9a3bfe2daa5ff9f079e0248f3e5e2d0057890fbf14bb6b0b58b8b8202324c4b0c89150221127f542d355d5ca73b5a5f76d1b55602effce1946cfde9d9ae2508c644572f9dc517d6dab21aa54295e4090843df45cef1cb27f00",
      "617b079036050000",
    ],
    [
      "ETag",
      "vLQ6azfCJsLiefebEtd4IQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-72-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6bc2301485ffcbdd6b0b554441f0618a6cb2e2b6aa301822315ebb6ada5b931b8748fffb6eaaf8bc97e4e6e43be49c5ce158543b18c2b6c84f1eede52947fe0c4386ce1b76b2d55439840890552e249e97b3374513dea6eff3d3c2d097373a1f8d8470fa074b05c32bec0b343b07c3ef2b54aa44b16d36f55110bed4e1349b2fa72fd34c8492764198afd2f4799c4ea1891e165592aff85fa67513c181b619eed162a53164a82d1d50f32cd473aaac0dc68ebcd5e8a085db8bdc92af95258a458907ddb8d3ef25dd4eb79f24837e4f40435a714195b0ab85a403265626a35f69071d016c3b4ad17dbb9e5b39b4b84feb667d378d2f8ceec3922470181e4f6e412614c2b18466eb3102ade41f5f0bbe9d9b3f263664cfa4010000",
    ],
    [
      "ETag",
      "evTIKaoCtbLONqSloXulcg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "000002ff1dd04b7282300000d0bb642d8e1288a4bb04d44161288a1fdc648006415020011becf4ee757a84f77e4092655c4ad637157f800f30263a9e66d37446cecfd92bfa5c935b445e1d8bf77288c37de6a6542f4e5172dc6a5df155b60d25990aebd1b872a57a682c8fc1bd7a2496be957b6fe5e72cdca624a607886c6cb1033943bfdb5dbe2fce5884114a37f585156eae0f1ad4cc4d18584540a8f9ace70f47e03bb4cd0856bd45a14fd6ca16d9dc590410aac5ed752adbf9ad53f70a1983b31845ed3ac87e522f6f4f1ed550ecadf1ae31a4776d9cdcb0045e162b1462bae3838b4679f0c10470d596824b56beddd0c47802fe13583fb6fc3d417922b800bf7fa3b64ea123010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:41 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-73-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85535d6f9b3014fd2bc87b6d0249082491a2354bc98a96900d48ab6a9a906d0c754b30c5a65d55e5bfef629aae55a5f609dbf79c7bcefde009ddf232453344787ed7b0faf1cb8d20e80431857378bd5a46637f3538377f90fc9bf3f7f66a3426ab87f91c10bc6549bcaf0ad693a2a92993b35dd4cf6bd154b816a207897aeea837706c6b38183a96e53a36f0242bb2352f6f817dad542567a679d4eee742e405c315977d2af62fefe6fdd0ac6a71c3a892e65b491354a4f9b1e8d74250acb828e7bb080c3492d509db635e8085ffcc949cbe4ddde778dfcf017ccf29c3948aa654ad2d48414599f1bca97556347b42dae6ab038abcb5b78c0d2a8a665f2625deb31323c50a27eab162c62adc6e0c3f586dc3cd22f6b741122dcfbdcda2bfdcae779b20322ecfbdd033142605d35c636e9cea5b0017d04f9954bcd4ea71fbdc2a3f37c87f3f969600d29275c1c4b51c3c9858539211976613186966314226c41de311b1e8d466764a18069e16d52c5c8a92ba9411175b09639361628f533bc1c41e25b6e364d349eaa6d06d7438410f3557ec8ccb4a48de75085d867eec2571b80b968bd8d32564b829d45967ac2de0b547050526963500e007751dda2817a0d6b6dc0f622f5c2c63ffc2eba6bc6639a68fd11dcc39c3856480c6353450b17a2352681a0a161bef0cc07a6a3f8f418966bf9f50dbf7d6c9abb6bfd06318626b59e92f8ae2d00fbe6b3b47c4052e1a0db9ef0ea802cbd7501fb83efc01242c6a9705fdda79e115ea9e4296b19a95f4f3890258073efddf8ecb0f58587f90910aeeb03f54b622b466dd1e715dee91edc0828c9106d7ea5d6c3a748f5d6b73b419d99e95eab9a26ef9a1d04eac912f2008c20a04ba5b877fe9b5fde17c040000",
    ],
    [
      "ETag",
      "YCS5IF1H/KbgB6xkY35bFw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-73-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d926f4fc2400cc6bf4b7dbb250361e8125e8c3f2a7122c24c8cc690632b38bdade3eea62184ef6e6f2a1a35d1375bdbfbb5ebf3dcb6f094152904b0c856eb0ad5e66085e6ca0653d495349a5f25151ac1013462c5e479190dfa6bd98b6e9f8fd7513bd3f2e9260bbb5d2674f280b980600bcb0c65aa21b8db422172e4b684649517f33a73c06c4a5b9cc5d3d1f894f39c529b8fafa328ec4543d839fbc6541831aff97fb4ddef1c78a4c51497a8b048d0ee522a7ac4c48cac4c2df252a2aba952096aa8e1fa60a5a82a852272b9e2760edd86dff29a8da6ef791dbfc5a0a444988c0a66af67bc1f1832424ee9855582cf80aa4316bcac9fcf5cced25a880d47e398c7d8fdbe020a1352e9fc4faee4751f04dfc207f6eec0774ee45415664f9d4497e16fe3d8d2cf5183301efe20b461a3f6483cba18cee2f06262b9fb77e9bd8d413d51c43e6ab41636bcd651bbe37b6faef6c93acddf098caad08144f0cf7196190896426adcbd027c6525597a020000",
    ],
    [
      "ETag",
      "KpLDCqlBLZv9qL5islkXiA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `purchase` = ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-74-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85547f4fdb3010fd2a91f70f48a54ddb34fd2121d6958c452a294b53109aa6d6719c629ac4c176800af5bbefe210a06303295272be77f7de9deff284362c8bd008856c7d5750b1fd72cb43d44054e1359cc68fe9ed38b1271bb27199d5df928bc7c9e9c3f13120581925719a27f448f242102a478b79732d789163c1f911243aea5b476ddb323bed8e6d9a7ddb8238499378cab20d44df2895cb51ab557337d79caf138a73269b84a72fe7adfb4e2b17fc9612255bfb942d6091ad8f494f124eb0623c3b5ecc414021a958d214b30424bc4646e1d7fdd44d86d3e61ac0f78c504c082f3255ca82148467315b17426745a327a465bef9407367ea4c02632528e1225ab2686560692c97f9a6614c660b2f3858e1b4ccb83a2c1db5617cf767e7c62a0701375852b932ae7e38be63bc1ead8c63e3c4187ba7c65e72d733169ee7cc03e3e0e4d038f3678b0be3dbf55b08c88ea8542cd3a2031c26b414fcdc57f7fd6d9601580165e55cf64d1bb707e6308cc33e8907dd5e189b340c0761bf87bba1498616b5a29062885365761d85339ed9110ebbe6d0b2a8dd8f68cf6c77e3be854d822dd2a3b6391c4671487b9d01da35d083608a9e329973c9aae6a22bdf0d9c65e02fbcc938707419312e12755a892b8b78ab5341914bd36c03f083da76a59771602b6fcbf502c71f4f02f7d2a906644ad7986ce7773022314e2405341638a58a8a731e41e3d0c56cee06eecc1b4f2142dffa458d9068f4ebe93520d8e6bad34abfd13cf05def4c0ba81197382934e4befa40e31cb4a2ddaef1ff3463df1f5f033516026ffff24139b06abb7f5268bcb62a9935651b956cb5d5d9b3ac3dcb46bbdf3b781a0896ad62463f178e7f8daa239fc654d08c7c3e5e00d68e4fff19f5020316561868a4021b8699c89284085a0d354b7529cfd176a7677591060bf5ce675bedfae6ca1c65469ad24c3d57542db06e62e92ae40b089c308b9ebec4dd1ff04930d840050000",
    ],
    [
      "ETag",
      "fxmjAl6CkckIi47ycPxCDw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-74-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d90414fc2401085ffcb786d635b9b1249385043146c081439194296ed500b6da7ee6e5124fc77678b21265ebcecceccfb26fbde9e605fd419f46153e4ef2daae34d8e666e8b14755b1acd5743b54670008dc8999c1478ff192fa437f97adec5c345399e65b7f3c180092ddfb012d03fc1b6c032d3d07f3d412d2ae4b5f5bad933628e8dedc6d397d1e328e54145991d4c9749328c93119c9deb8aa8a8adcdbf9656670776b449718b0a6b89d643a36887d28c6d3c2daaa6445753ab246ae8e04ec815b58d50442e4fdc5ee8fa51e8057e10795e2f0a192c490a5350cdec72c1eec09011654a1f9c0eee18505dc941b7dd79e071d0a5387480b5f65bf3af5af0470baf9a6fb5d5cf63f1d1a09e2962e71aad69ef12e0816c28c3618d6ad10129f8ff9f0a73e9cfdff554b511dc010000",
    ],
    [
      "ETag",
      "Jie9xBSc0JzKjBASlIPd/Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "0002ff1dd0d97282301400d07fc9b33804dcd237612a82404134425f328a97adb24820884effbd4e3fe19c173ac73170cebafa072af481c6b342a6f1f422af43213f0f4e103ada6df8f2602b42fb733825574189f74ca45b34dcb315652cadb62d6e0c6356478f5e1f04e8554a14adfdae8ba1cc83e329585a7ae7e427a57431b5d31d363c79e4522a8e38306bc5ee704caebde65253a76a11bba3b2a0b1b81c578624eb2bc16ffe26b135d3d87b55989650e2a109e76caf45f39cab8e2583c0feac6ea38c26bb6728f50f9781cf177030fcc269969d2ddfd79b6db3a8339fb944cd55ab57533441f068f21638cbdf6e754ec804fd27b06e6ce03da1c1b98516fdfe01c39ea74723010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:43 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-75-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "4fa34014fd2b64f6ab6d29d4529a346b53716dd2d295521fd96cc8305c7014189619dca8e97fdfcb605d8d897e6266ee39f79cfbe099dcf332215312f3ec4f03f5e3b73b119323028a66f83a79ca85709e6e623396c5d9f5750c857f73319b2182b72c498b2a879e144dcd404e77db7e568ba6a2b5103d4cd4738e7bc3f1c8b486d6d8349df1087912f274c5cb7b64df2a55c9e96070d0ee67426439d08acb3e13c5ebfbe0c11a54b5b803a6e4e0bde40055e4e073d1efb960547151ce765b34d048a8232828cfd1c27f66129fbc4fdde7b4e867087ee00c2863a229556b0b533051a63c6b6a9d954c9f89b6f9e640b6deca5b84061379539451490b383212aa68a41e2b30ce82cdda58fa679b603d0f971b3fda2ecebdf5bcbfd8ac766b7f6b5c9d7b8167281ae7a0b9c6cc38d1371f2fa89f8054bcd4ea61fbdc2abf3468f9712c2d01a52574c1c831c7743831dd388d1d964eece33835218e27b1734cedd864ee0846490c14795a54b368294a6be2da6337a5910566128ddc118d68c2ecc819a6d44a81da43d721fb23f2b7e60a4eb9ac84e45d87c855b00cbd280c76fe621e7aba849436b93aed8cb505bcf5a8b0c0c8348708fca4ae7d1be502d5da962ffdd00be68b7079e975535e4146d9e3f60fce39a5b90444d31a1ba8a05e8b049b46fcf9da3b45b09edacf435092e9af67d2f6bd75f2a6edaff41087d85a56fa4bb661b0f47f683b07c425cd1b0d79e80ea442cbb7581fbadeff46242e6a97855cecbce086744f01a45043c9be9e288275e0cbffedb0fc88c5f54719a9f08efbc3642bc26ae8f688eb720fecb16d8d5ca2c1b5fa10b36debd0b536479b110a28d54b45ddf263a19d58235f4118c415f075b7f6ff00ffc16f0f7c040000",
    ],
    [
      "ETag",
      "8zloo7zYb0bsmFXXbemNYQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-75-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d926f4fc2400cc6bf4b7d3bc22030c8125f800262f8278c18630839b602c36d9d77370810bebbbd8968d444df6c6defd7aecf733bc24b9804e0c2225cbd6628f7572bd40f2618a3ca22adf89552a2102c402d564cfac5a7a1dd2ed5747828df1f3aaded63bd5adc5d5f33a1fc35c602dc232c438c0205eef3111211a369a3288b93799e59a0f7a9294ebc7177d0e13ca6c0e48369afd768f65a70b22e8d81d0629ef3ff689b9d2cd8d0628c4b9498f8687649256dd0d75d235389388db0a028933e2ac8e1fc6025294b85242a70a550ab164a4ec52e97ca8e6dd79c0a8311f9428794303b9df07ea0498b684c3b56090e03320f59f0327f6eb91c06b9101376071e8f31fb7d0524fa2483f99f5ccaebae05dfc2077676e03b2762ca127da1dabd61e3b7716ce9e7a8db86d7fa4128cd465d10afdb6f4dbc467f64b8d9597a73af518d24b18f0a8d8525bb52afd61cfbddd51b324ef3775c2d33b4c017fc73dc851adca588149ede00d41f693a7a020000",
    ],
    [
      "ETag",
      "c/YO0F17tiz2JzGEvW85/w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `purchase` = ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-76-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85547f6fda3010fd2a91f74f2bf123404800097514b28d89862e8476d53481e338d46d8853db6985aa7cf75d9cd2966e6ba548c9f9dedd7b77becb23ba6569840628649bbb9c8adda71b1ea21aa20a6fe0d43b25a35b3ab9be94d94f2bc5f9f77953ce1e864340b0324ae26d96d0bae4b920540e968bc646f03cc382f33a24aa3b76bd655b66bbd5b64dd3b12d88933489672cbd85e86ba532396836f7dc8d0de79b84e28cc906e1dbe7f3e67dbb99097e438992cd43ca26b0c8e6fba427092758319e0e970b10904b2a56748b5902125e22a3f0f361ea06c3dbc606c0f78c504c08cf5355ca821484a731dbe44267458347a465befa400b77e68e03632d28e1225ab1686d6069ac56d96dcd18cf975e70b4c6db32e3fab874ec0de38b3f3f33d61908b8c692cab571f9cdf55de3e5686d0c8d1363e44d8c83e453cf587a9ebb088ca39363e3ab3f5f9e1ba757af21203ba252b1548b0e7098d052f0535fa77fdf661980155056ce9563dab8d533fb611c3a24ee75ba616cd230ec854e17774293f42d6a4521c510a7caec3a0aa73c0d3b2ddbec75696c9aa4e3f4b1d5e959dd4e871242b06387fdd089ba76dceda1a2861e045374c264c625ab9a8b2efd69e0ae027fe98d4781abcb88719ea84925ae2ce2b54e0545ae4cb305c0776a2b4a2fe3c056ded6d40b5c7f340ea6176e352033bac164b7b8831189712229a0b1c05baaa838e311340e9dcf17d3603af7463388d0b77ebe474834f8f5f81210ec32dd69a5df6811f853efab16b0475ce024d790fbea03e10cb4a2a2a8fd3fcdc8f74757408d85c0bb373e280756adf82785c66bab92b9a76ca1926d6fb50f2cebc0b251f1bb80a78660d92a66f463e9fa57a83af2694c054dc9c7e30560edf8f09fb15f60c0c20a038d5460c3301359921041aba1665b5dca53b4dde9776da4c142bdf559a6d3dddf5c99a3cc48b734554f15550bac9b58ba72f90c0227cca2a72fb1f8033441a74c40050000",
    ],
    [
      "ETag",
      "NBcAkeDhWspX4nauJO/sLw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-76-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d90416fc2300c85ff8b776d4541a8952a71808931b40eb10e4e6842a135a5d0c65de2aaaa10ff7d0e433bef94bce7cfce73ae7029750e311ccae2bb45d33f15c81fee92a26d2bb67234a42d8207c8aa10521d4e89dd6cdfa2f781eea68397e57a335874938910363b61ad20bec2b1c42ab710efaea0558dd2b6df371741b86f9c5aae36f3c53c15a3a6dc19ab6d924c67c91c6ede5f8baaa9d5fcafa6af9b07673aa47844833a4397a13174c68c976e3dabeaa642df526b32b47087ef85c250db2843e48be347a13f0cc7c168380a83200ac7025694292e490bbbfd9474c0c4aa4aa993ed2080879ef58c766d48865bcc1f1599f84cee5d963c6c5af42053f245af25ffeadb0f28cf45b27f010000",
    ],
    [
      "ETag",
      "abhLsTUK7M/nwA/FIPT/Gw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "8b08000000000002ff1dd0db6e82300000d07fe9b318046ac6dec0a8088a4caee1859452d13985d2826dcdfe7d669f70ce0b208c096315ef6ee4013e8144863dc7f35a778a4957497471293a6b35624996e62ae83ea0df7b4aa7bb63935992f7f77c7f93f5d52fc533b03cadf9b145eb619364f7eca95da0a6c2679696065aef8c8225f9d23d051174cfa5b137634e630b4f6d9a6e0db3895dca98be4db63e0c0b4dd69e733eaca6efd1963b98978313d223ed56561b6d9cb1e942d93e04bd2055afbff240a5cda63f71ec593252a1d047a8f4a5e03c09fc0586f1603a9314e921f7b3c93a35bc18171d980122faeb4058757dbb4d68db33f09f5071d993f7844bd04006f0fb079c011da423010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:44 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-77-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85535d6f9b3014fd2bc87b6d1292104823456b94d20d2d211b21adaa6942c65ca85bc0149b6c5d95ffbe8b69ba56955af100f63de79e733f782477bc4cc88cc43cbb6fa07ef8742b62724240d10c6f2ffdca5f5edd5c5cefefd27b9fcbbf7f84f56d319f2382b72c498b2a879e144dcd40ce76db7e568ba6a2b5103d4cd4739cded0b6ccd170649ba6635bc89390a72b5ede21fb46a94ace0683a3763f1322cb81565cf699289eef07fbd1a0aac52d302507af2507a82207ef8b7ece05a38a8b72bedba28146421d4141798e16fe3393f8ec75ea3ea7453f43f09e33a08c89a654ad2d4cc14499f2aca97556327b24dae68b0fb27557ee323498c89ba28c4a5ac08991504523f5508171116cd686e75f6c82f522f4367eb45d7e75d78bfe72b3daadfdad71f5d50d5c43d13807cd35e6c6993ef97840fd04a4e2a5560fdbeb56f9a941dedbb1b4049496d00523c7b4e9706a9ec669ecb0743a9ec4a909713c8d9d091dc7263bb5c04a62a0c8d3a29a454b518ed2d3e9089f28b1121659b60311b52c3ba2136b3cb2cc3489ad09399c90df355770ce652524ef3a44ae022f74a330d8f9cb45e8ea1252dae4eabc33d616f0d2a3c20223d31c22f09dba0e6d940b546b5beef9a11b2c96a177e976535e4146d9c3f61ee79cd25c02a2698d0d5450af45824d23fe62ed9e23584fedfb3128c9ece72369fbde3a79d1f6677a88436c2d2bfd26db30f0fc2fdace117149f34643f6dd07a9d0f20dd687ae0fbf10898bda65213f766e704dbaab0052a8a1641f4f14c13af0e1ff765c7ec4e2faa38c5478c6fd61b2156135747bc475b947b66dd9e331d1e05abd893993c9b16b6d8e36231450aaa78abae5c7423bb1463e8330882be0eb6e1dfe01319092da7c040000",
    ],
    [
      "ETag",
      "VNpNCWhFYvkfqNiszxo4KA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-77-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d92514f83400cc7bf4b7d9425cc4c6648f6803a7586cd8dc18331cb723bca4481e2dda159967d777ba8d3a889be40dbfbb5f4ff3fb6f0985729f8b0cad74f0daacdc11acdcc0611eaa6309a5f35551ac1013462cde4ec369ce5517a7b394da2c7177d789d78b29e0d064c68798fa5007f0b598e45aac1bfdb42254ae43649455356cb3673c06c6a5b9cc7d16872c97949a9cd27491806a7e11076cebe3115462c5bfe1f6d8b9d030fb48a3043859544bb4bade801a51959995a9475811d4d8d92a8a185db83b5a2a6168aa8c3954ebfdfe97a3df7a87be4b96edfeb3158901426a78ad964cefb8121238a885e5825780ca83664c159fb7ce6729eb6426c389ac43cc6eef715502849a5cb3fb99ad7bd177c0b1fd8bb03df39515253993d7511de04bf8d634b3f479d07f1f007a10d1bb547e2d178388f83f1d4728b77e9a71b837aaa887dd4682decbabd93e3bee7beb97a46d669fe8e6f54830e48c13fc7556ec0cf44a171f70a4cf919437a020000",
    ],
    [
      "ETag",
      "QYLQiRdYGPURkws+JU6cpQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `date` = ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-78-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "fd572cef1790fa91264dfa2121d6d10c229514d21484a6a975123718d238d80e08a1feef3b2714dab1811429b1efdd7befecbbbce07b9627788823963e94543c7fbbe3116e60aa480abb67e796e99c3ec97391e44978e974c6dcf2d2a32340309d25c9bac86853f252c4540ee7b3562a785910c17913889abd7eb3e3740db3633a86d173ba902769b69ab0fc1eb26f952ae4b0ddde6ab752ced38c9282c956ccd76ffbed47b35d087e476325dbfb926d5091edcf458f331e13c5787e349f81815252b1a06bc232b0f09e9944dff7a95b8cac5b29801f594c491cf33257da1650c43c5fb1b414152b1ebee0cae6ce079eb913f724444b41632e92054b968848b45814f70d74329dfbe1c192ac35e3f25007b60bf433989ea36501066e89a47289aecfdcc0456899104597e8081da3913f467bc49e8fe6beefce4274707c884e83e9fc02fdb8d98580e5844ac5f2ca7048a28c6ab3af67ea7dbc499d401438a8838b9ee1904edf1844aba817affa961dad0c1a45fda867132b32e2419776938812c8539abdca2239cf073ddb8a6ddbb4edeec04efa9d8165988ed5b5ac01318c01710cdb1c3866bf83370dfc2498a263260b2e597db0f83af04277110673ff6414ba55192b52666a5c9bd345ecfa5450e4c2303a00fca4b68d8e320e6afaa63c3f7483d149e85db975734c684ae2e7d903b4c78a6492029a08b2a68a8a739ec0c1e18be9cc0bbda93f9a404675e3175b84c4c35f2fef09e173519db4aade78ac8bd8ec105e91acac008ff507360dd3681a66b363e3cda6f17fa651108c6e409d08419eff8a414530699b7fea54f86a553bddeaea0bd871b1b7eaeead1cbcf9bd81a78161d66a657c3977831b5c6f05744505cde3af3b0cc055e0cb5fc6767e010b13",
      "0c3252c11afa39965a2416b4ee6bb6ae4a79cd76ecaea93b01c0427d88d9b6b5bd3ccda119e99ae6eab5a27a7eab43d4a152be812008ede87bfe2944ff008952c1eb3f050000",
    ],
    [
      "ETag",
      "HM326GwsMrdndTQ61Do3Ig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-78-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "1485ffcbdd6b0b55449de0830e7182c8d6ad301c2231de76d536b74b6e2745fadf775365cf7b496e4ebe43cec915ceb939c2040e79f65da36d1e32e4573fc4e8ea829d6c1519871000b2ca84dc6aee27b3741b97c587593e8e4d73486697e95408a7bfb05430b9429a63717430f9bc8251258a6dbfafce827053f9d36af3be582e62114a3a7a6193acd7b3f97a016df0675125d586ff65dab5019ce810638a168d469fa1b27442cd2b5fcfa9b22a3074545b8d0e3ab8bbc82cd595b244a128e1681cf68683a8dfeb0fa368341c085890569c931136799374c0c4aa88e922eda02780ed46299a76eb4f27fb16f769d7eeeea679c3e85e2c490287fef1e816e4897c3896d06c6b0c402bf9c7e79c6fe7f61740789810a4010000",
    ],
    [
      "ETag",
      "Zct2UAfZRmlXnG98nybUAw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "000002ffedd3417282300000c0bfe4ac0c8801e90dd02a88406c15e4c290100163a31240a1d3bfd7e937eafe61bf41460815226d2e8c72f006fa6c624844c2b21977f2f019927952cea27319f8ccd13b1ada4c438ea604cc11184337e4c5a3af48ae1cf910dcf764825539b2e858b70f6cdab8ceba255ae489f464c64b32a8688dea1d567080bd3ef66e1b6f656ffdf316f1642167c485fb6e67274e9b1f0f210c2cf57d4ce5cd470b23c60b969675dca8db79967fcd36ab43aba559e89b36bc4ce1cd540a63285174179a3ed008f9f7653d383c39ebf1daeba727b555fcb1855cc817f955ccb580482f2fff0e1801fab856351569f5dcae42c31881bffa69d35fe9f3bf45b39ad6e0e717a208678f19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:46 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-79-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85536b4fa34014fd2b64f6ab2d8fb6943669d6a6e24ad25205aad96c366418061c05863283c698fef7bd0cb6ab31d14fcccc3de79e731fbca24756a5688e1296ef5bdabcfc78e0093a4354e21c5e9ff77e78535e5eaf6f33861ff74ed13c5b937cb10004eb58029775410782b70da162be0b8779c3db1a379c0f20d1603a1b98f6d8b04ccb368ca93d069ea045b666d523b0efa5acc55cd78fdac39cf3bca0b866624878797ad79f2cbd6ef8032552e81f25755011fad7a23f0b4eb064bc5aec4230d00adac4b4c4ac000bff996972fe31f590e1729803f889118a09e16d253b5b9082f02a6379dba8ac68fe8a94cd770714ba6b77156984176d59c5152ee99996628963f95253ed32d86e34cfbfdc069b65e46dfd385c5db99be570b55def367ea8dd5db981ab499c145471b58576ae6e3e5c403fa542b24aa947dd73a7fcd620eff3583a02480bda07e3a96163d3316649964c49e68c264966d0247192e9048f1283ccc6749c2614034f892a16ae7835c24e6239a32cb66cd388c753c7899d293662c3484d9b4e4699939ae870869e1b26e905133517acef10ba0bbcc88da360e7af9691ab4ac8705bc88bde5857c07b8f120a84b42600bfa8ebd0451907b5aee59e1fb9c1721579b76e3fe535cd317909f730e70c1782021a37d040499b0d4fa169c85f6edc0b00aba95d1f8302cdffbca2aeef9d93776d3fd12318626759aa2f0aa3c0f37f293b47c42d2e5a0579ea0fa806cbf7501fb83efc05242c6a9f05ddecdce037ea9f029ad18656e4fb89025805befddf8ecb0f58587f901112eeb03f447422a4a1fd1e3155ee916ddba635430adcc84f314bc54e4bdf65a425ade45b45fdf243a1bd582b4e2008c20af8aa5b877f80d9b7657c040000",
    ],
    [
      "ETag",
      "wqNSQmFPLVfiakq8lrw25g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-79-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "514fc2400cc7bf4b7d1dc9501cb8c48721a844401df3418d21c7adc3c1b6cebb9b8410bebbbd8968d4445fb6b6f76bd7ffffb681655ac4e0c32c9dbf54a8d6077334b73608515799d1fc2aa9d0080ea011732693dea80aa24475aed4fd71febaec8c8f1ee4eaf494092d9f3117e06f2049318b35f88f1b28448edc2629abf2625a670e9875698b93281c8c2f38cf29b6f9f86e380cbac33e6c9d7d632c8c98d6fc3fda9eb60e2c681662820a0b89769752d102a51958995ae465860d4d9592a8a186eb83b9a2aa148aa8c19546fba4d1f45aee61f3d073ddb6d7623023294c4a05b37713de0f0c199185b46295e031a0ea900527f5f395cb695c0bb1e1601cf118bbdf5740a124154fffe44a5ef759f02d7c603b07be7322a7aa307bea7c781dfc368e2dfd1cd50ba2fe0f421b366a8f4483517f1205a31bcb3deda477d706f58d22f651a3b5b0e9b63ac76dcf7d77f58cacd3fc1ddfa80a1d90827f8ecbd4809f884ce3f60dd47c8a0a7a020000",
    ],
    [
      "ETag",
      "fDMuATfr8KrY5mvk8N3Zcw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `stamp` = ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-80-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "96",
      "f765d3f2b029210fa9eab296754c2de908e9d44d53621c877905cc6cd3adaaf2df7781a66df69490c0bee79e7bee8b3b7c2d8b359ee044a6df2aa16f9f7d5509ee6061590ab7ef4e7f28fb83a6976f4fdecc8a7c10be548397d3c34340c8dacbb0bccc44d7a84a7361268b792fd5aa2a9956aa0b44dd11e952cf250e753c42869e0b7e46649b33595c83f7176b4b33e9f777b17ba952692658294d8fabfce1be7fe3f44badbe0a6e4d7f3f641fa298febf831e658a332b5571b8988380ca08bd143993194878f45c27aff6a97b92e5bd14c037920bc6b9aa0a5bcb020aae8a8d4c2bddb0e2c91d6e643ef9c073ffcc3f8ed14a0baef47a29d72bc40c5a2ecbeb0e3a9e2dc2f8f98ae535e3ea456dd81dd09b68768e562508f8c28c302bf4e1ad1ff908ad8c05712b74888ed0343c417bcc41881661e8cf63f4fce8053a8d668b0bf4faea290434af85b1b26814c72cc944adf6bea8c1efadac1d980509ad7139241ea323324e36c9906f460783644344928c92e1801d24848f5de1ae13c1c0cfd6ec8d172b54b11e0da918267c44192394ba8c524f0c3c773016c9c81d133ea04367cc28de76f0772dad3891a65446b695c51fa220f69771b4088fa7b1dfa4b16155664f5a7175124f755a4872490805e03f72dbd656a9205addaa208cfd687a1c07977e3b1d672265fc76fe0de663c3322300cd34cb8515fa5cada170f862360fe260164ecfc0a369f9c50e61f0e4d3dda3437c5b3695b6cd1bc7c139b4697a7ed168d8812e595635a89bf6033bc4215de274e920a6ce841e4ca8db23847cc4db6de7efe4d3289a5e8120a635bbfdc50649c2f66dff18b5c137a756fc4e45dd93",
      "279af64eeedec9c3dbcf5b783a18f6af8d8cdf2ffce80ab75791d8082d0afeffa1037063f8ef6f64b7d38085ad8630b02056c288735307e15ab4a32ef326957b6fcf1b790e6ec0dafe661b0f0f76fdac396a46918bc2de67d4ee7453c4da54990710186142c3203c05eb4f6052246853050000",
    ],
    [
      "ETag",
      "JGxotx1gVHDFOnm5N+o5+A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-80-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "f4",
      "9ad028692a82072da115446adad08388acc99846934cba3bdb1224ffbdb3517aee6577f6edf7d8f7f602e7b2c9610a87b2f8b2a8bbbb0279e386048dadd8c8d65263103c40568590938ffb34eac6360d63ca97f38730e74d50cc664298ec136b05d30b1c4bac7203d3ed051a55a3d8f6fbf62c0877ad3b2dd7eff1739c885053ee8475ba5acd17ab187aefcfa26ab20dffcbb4eb3d38d121c1236a6c3274195a4d27cc78e9ea1955b715fa86acced0c0000f178526db2a4de48be24f027f1485c178348e82e0310a05ac28535c52236cfa26e980895595d08fb48391007a18a5e87158bf07d9b5b84dbb7e77332d3a46f3aa491218748f07d7204fe4c2b184666dd1834cc93fbe947c3df7bf701c8529a4010000",
    ],
    [
      "ETag",
      "8W/U6y2uU4EodIA54dtQ0g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "0002ffedd3417282300000c0bfe42c8e6823d01b8d15148a016c8ba74c94c840841012a4d8e9dfebf41b75ffb0df809e4e4c29a205670d7806239d3bd3d3f43873b3ebecb68f6c2de37cd17b035af3e28a8c5824a915ce77be6e5ab5894b99b8889e23129eed3ef54cd5d62b82780561995674e83b84fdcf756a9b4db78dc29b55e13d4fe1554b1c6c6be4d0d44074ccb96fac5974ce2efee2601a87a6df7191f59c647e2e6dbd72dd212896a8552dc43d3cee717539721958c5207b1d8c64663e592877e46b123a546181066526b41678290aaf6eaa08df3e82c1f0e19b0de5c623ef862da60f0fff0e9800f6d5961d53a4bc6f5f40c79980bffa448f2dbbff7f61b4631df8f90519ecee6719040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:47 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-81-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "9b3014fd2bc8fbda244012f290a2354be91a29211b21adaa6942c65ca81bc0149b6c5595ffbe8b69ba5695da4fd8bee7dc73ee8327b2e7454ca624e2e9430dd5e3977b119133028aa6f8ba879b7a9c055ca8fde5f8368f07ec5bfd379dcd10c11b96a4799941478aba6220a7bb6d37ad445dd24a880e26ea8cad8ee50c4cdbb21dd31c3903e449c892152ff6c8be53aa94d35eefa4dd4d854833a025975d26f297f7dec1ee9595b807a664efad640f5564ef63d1af9960547151cc765b34504ba842c829cfd0c27f661c9dbf4ddde534efa6083e700694315117aab185299828129ed695ce4aa64f44db7c75205b77e52e028389acce8bb0a0399c19315534548f251897fe666d2cbdcb8dbf9e07cb8d176e1757ee7ade5d6c56bbb5b7356eae5cdf35148d32d05c63669ceb9b8717d48f412a5e68f5a0796e949f1bb47c3f968680d212da6038321d6a8dcd49944423968cfbc32831218ac6d16848fb91c9260318c41150e46951cda28528c676df1a25761442dfb6c281439d70324cfa619f3af1c4b423676253723c237f2aaee082cb5248de7688dcf8cbc00d037fe72de681ab4b48689da98bd65853c06b8f0a0b0c4dd342e007751d9b2817a8d6b47ce905ae3f5f04cb6bb79df20a52ca1eb70f38e7846612104d2b6ca0826a2d626c1af1e66bf702c17a6a3f4e4149a6bf9e48d3f7c6c9abb6bfd0031c626359e92fd906fed2fbaeed9c10d734ab35e4d01e488996efb03e747dfc8d485cd4360bf9b973fd5bd23ef990400505fb7ca208d6814fffb7d3f22316d71f65a4c23bee0f938d08aba0dd23aecb3db19d9163d944832bf52e361af64f5d6b7234192187423d57d42e3f16da8ad5f20584415c014f77ebf80fff3452cb7c040000",
    ],
    [
      "ETag",
      "keWu8lTiotkF8Ymd4cBuxg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-81-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f",
      "83",
      "40",
      "0cc6bf4b7dcb1266262e247bc1742a91fd67268b31cb091d63038a77c7ccb2ecbbdbc3398d9ae81b687bbf963ecfb1874d5ac4e0c2739abc5428776709eab10926a8aa4c2b7e955428040b508b84c9f97c7be705c37ef76174bff23749db19db2dafd36142452bcc05b87b58a698c50adcc73d1422476e8b28abf262516716e85d698ad370e20f6e39cf2936f96016045e37e8c1c13a35c6428b45cdffa3ede960c19a9e27b844894584669752d21a23ed1b994ae465860d45958c50410dd70789a4aa1492a8c19546bbd9683a2dfbbc79eed8f6a5d36230a348e8940a666753de0f3469914de8955582c380ac4316bcac9f5b2ea7712dc484fe20e43166bfaf80c48864bcf8932b79dd95e05bf8c08e0e7ce7444e55a14fd44d30f47e1bc7967e8ebaf6c2de0f426936ea84847ebf370dbdfec8704f47e9dd9d463592c43e2a341636ed56fbe2d2b1df5dbd22e3347fc7d5b2420b22c13fc75daac15d8a4ce1e10d31cafa787a020000",
    ],
    [
      "ETag",
      "YYvHALOMBVPKhIkg86Q04A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `amount` = ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-82-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "10",
      "fd2a64ef1f4d6a4b11e88fa4f17a2d7a241594528db95cda05165c05167717cf9ee977bf01acb6e79d2624303b6fde7bb33bcb33baa779848628a0c94349f8facb1d0b500b11891358bd2693dfb12baea6df859b3e3c0de49346f5cbd10810b4aa12382b52722458c94322868b793be1ac2c3067ec08888efada51d7d455adab99aada3375a813248d6734bf87ea5b290b31ec74b6daed84b12425b8a0a21db2ec75bdf3a8750aceee482845675fb2032aa2f3b1e849ca422c29cb478b39182805e14b92619a8285b7ca28f8ba4fdda6386b27007ea421c161c8ca5c56b6802264794c9392d7ac68f88c6a9b3b1f686ecdac89afac3809198f96345a295828cb6571df5226eec2f10f5638ab18578755621b28a79e7baeac0a30708b05112be5fabbe559ca1b60a49c286367aaec51db8eb2701c6bee2b072787ca99e72e2e946f37bb10301d1121695e5bf6719092caeecbaedaefcfb22ac0123c34c9654f3571b7af0e8238e88571ffd808629504413fe819f83850c3814ef4282018ea64c55e57e19ce50383c491da0fd5dec0502363601c9348eb9a3ddd8cfa81a66b816a465aa0f7d0a6857e712ac9948a8209da6c2dbaf66cdf5afadec2998c7dab6e23c6652aa78db9aa895d9f129a5caa6a17801ff4b6a9b294815a7556b6e35bde78e2db5756331e3392e0703d7f800189712a08a031c71991849fb308360e5db873dbb75d673c838afacc2fb60881863f9edf0afc7551efb4acdfe874e68e7db8079b1dce2b9c9635e6b1f940ddb601884debff3463cf1bdf8034e61cafffca413b665dfe0f851a5f478dcd574554a96d236d2fd2f722136d7e6ee06921b86a8d32ba5c58de0d6a963c12134ef2f0f3f102709df8f48fb1bdbe80850b0c3242420cc31c8a4a24e4a419",
      "6a9ad5adbc549b7d5d35500de6f25dce30f4edc9551c1523c9482e5f3a6aae6fbd8955aa14af2048c22c3ab67306d93f0dbaf4a73e050000",
    ],
    [
      "ETag",
      "WeCzfOsVDHsOlqx9tx2i4Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-82-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8d50db4ec24010fd97f1d136b6a5a9868407d12a2404b1823131842c655a4b2f5377b71042faefce164334bef8b23b732ed973f60879566da00feb2cfd6c501e2e52d4cf6688503585567cd55429040b508b9495d4bb4c1e76ebfb7cfef614ccc2301c5dbde27e3060858a3fb014d03f429261b151d07f3f42254a64db6a55e72cd187da6ce3e93c7c0c23064ada1860ba984c6e8793105aeb6c11253595fe9769d95ab0a57584094aac6234196a495b8cf5d8d453a2ac0bb415353246059db82352494d2d2491cd887de3d96ee03b9eeb058e731df82c2c28163aa38ab58b174e079ab42822da733be8b1407623174dba73c7b0dbb53093d745fbc97967cefdc3f9bfb9e5f763c383463593c4c9159ad0cea9c01d99529acb6ad9a005b1e0ff1f65fab4b75f4aa8c03ddc010000",
    ],
    [
      "ETag",
      "o3+fFvbDkTXO6PEEEH/Vew==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "08000000000002ff1dd04b7282300000d0bb646d9d14114b77e2072b9a20a2021b26c42034f2692042707af73a3dc27b4f4028654d13b7156725f8048a68e6988e13380f1e70f051b9b8d8753670352d3ab86f6eb5a6735bcac9eaedd68547be3c1f737237d2d63c165516ac0dfe48e56982af8c73c3cbf4dc3c1ff67da976bc70622db352a95ae3864abe15a2dae19cd8985a778c16918ee7c30c25340ad84f4e6594261b140fd4b589b6f71ada2ebfd287a31f7ac4dd8f4e05f0e2ada4387dcffbca092365613bd9e8457d25b3035c772271437d9761bf4c6dff1dc1cae935e56f9dd0779d4e4e3d0f8211607d9d0bd6c4f9cb3d999ae608fc27c4adaad96bc2624430017eff002299445023010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:49 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-83-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85535d6fa24014fd2b64f6b52a2a4534315b63694b56b18bd866b3d99061b8d06991416670631afffb5e86da6dd3a47d6266ee39f79cfbc13379e245422624e6d9ae86eaf0ed51c4e48c80a219be16d9debe1d5a3b6fb17b4a0f3f3cea5c6faeb2e91411bc6149ba2d73e84851570ce464b3ee6695a84b5a09d1c1441d67d8e9db9639e80f6cd31cd916f224e4e982174fc87e50aa94935eefa4ddcd84c872a025975d26b6afefbdfda05756e2119892bdf7923d5491bdcf45bfe78251c54531ddacd1402da18a604b798e16fe3393f8e27dea2ea7db6e86e03d6740191375a11a5b98828922e5595de9ac64f24cb4cd3707b27617ee3c3498c8eb6d1115740b674642158dd4a104e32a582d0dcfbf5a05cb59e8adfc683dbf7197b3ee7cb5d82cfdb5717fe306aea1689c83e61a53e342df7cbca07e0252f142ab87cd73a3fcd220efe3581a024a4b6883d1c8b469df31c7711a8f58ea0ccfe3d4843876e2d1391dc6261b5b60253150e46951cda28528fa4e624132b623ea38fdc84ac089e8d01e45e76327b11d27195983981ccfc8df8a2bb8e4b21492b71d22f78117ba51186cfcf92c74750929ad7375d91a6b0a78eb5161819169f611f8495dc726ca05aa352df7fcd00d66f3d0bb73db292f20a3ecb0dee19c539a4b4034adb0810aaaa548b069c49f2ddd4b04eba9dd9e82924c7e3f93a6ef8d93376d7fa58738c4c6b2d25fb20e03cfbfd6764e883b9ad71ab26f0fa444cb0f581fba3efe41242e6a9b85fcdcb8c12fd23e0590420505fb7aa208d6812fffb7d3f22316d71f65a4c23bee0f938d08aba0dd23aecb3db1ed717fd8741fc195fa101b58cea96b4d8e26236ca1502f15b5cb8f85b662b57c05611057c0d7dd3afe03ee65a78c7c040000",
    ],
    [
      "ETag",
      "ngv6P34qILqkfyKIa8GUFg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-83-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "514fc2400cc7bf4b7d74c4a138c9121f86222c014498fa600839b63237b775dedd44247c777b53d1a889be6c6defd7aeffff6d030f4911810b8b247eac50aef762d4572698a0aa32adf85552a1102c402d62265f5efa97abfddbf8e0b9bb283c394ccfd2de4d7c7aca840aef3117e06e609960162970ef3650881cb92da4acca8b799d59a0d7a5294e83893fea719e5364f2d1f560e075065dd85abbc6486831aff97fb4cdb616a4b498e0122516219a5d4a492986da373295c8cb0c1b8a2a19a2821aae0f624955292451832b8df651a3e9b4ecc3e6a163db274e8bc18c42a1132a98bd9ef27ea0498b6c422b56090e03b20e59f0b27e3e7139896a2126f447018f31fb7d05248624a3f99f5cc9ebde0bbe850fecdd81ef9cc8a92af48eba185c7abf8d634b3f479d7b41f707a1341bb543027fd89d06de706cb8d9bbf4ce5aa31a4b621f151a0b9b76ab7d7ce2d86fae9e91719abfe36a59a105a1e09fa39f6870972253b87d05f1f2f1397a020000",
    ],
    [
      "ETag",
      "zzHOw+Wg/xEbnArMjCjGVg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `id` != ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-84-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "2bccfbd24a79401ee421455d96b02e534a52425a55d3941863a85b82a96d3a4555fefbaea16993ad6b2524b8bee79e73ae7dcd13ba676988fa2860f1434ec5f6f31d0f500551856358b5e7e1b7241ed7afcf8741db673f2ce6dcf62e070340305d25f1264b6855f25c102afbcb452d163ccfb0e0bc0a44d56eab6ad92db361356cd3ecd82da8933489a62cbd87ea5ba532d9afd7f7dab598f338a13863b246f8e665bdfed8a86782df51a264fd58b20e2ab2febee859c209568ca783e5020ce4928a15dd60968085d7ca30f8724c5d6378538b01fcc808c584f03c55da1650109e462cce45c18afa4fa8b079f08116ced419f9c65a50c245b862e1dac0d258adb2fb8a319a2d5dff648d379a717daa13fbc0f8e6cd2e8c7506066eb1a4726d5c7f773cc730d69ae1d3c0383386eed838e29db8c6d2759d856f9c9c9d1ae7de6c3937bede1c42c07148a56269e1d7c74142b5d7e72d9dfc7b90ba002b305026571dd3c656d7ec0551d02151b7d90e2293064137e8b471333049af455b614031d429cd5e54e194a7d8b6db413bb4dad4ece166cf227697e2c8ec44768f98ed4e68779a2dabd96da25d05fd164cd131931997acdc5774ed4d7c67e57b4b7734f49da28d08e7891a97e67413873e1534b9324d0b80eff4b6d359c6414d1fd4c4f51d6f38f227574e391b531a63b25d3cc07444389114d058e00d55545cf010360ecd678b893f99b9c3295414073edf2324eaff7c7a2df0b759b1d3aa786b2db802bb03c62b9ce405e2b1fc40561bed7695ff530c3d6f7803b25808bc7d9bfe4dfe025f44a5c5173da4d5f651e3286a1d4536dafddac1534170c74a6574b974bc1b542e7934a282a6e4e3d1027091f8f057b1bfb78085",
      "9b0b3252410c834ca41621829603cd36452bcfd576afd768a0022cd45fb98e69da8dfda9690ecd48373455cf1d95f7b6d8449dcae50b08923087eec43d87ec1fb9f5229737050000",
    ],
    [
      "ETag",
      "6PdFlgD/WGAb5TiJ1iEh9Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-84-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d504d4fc24010fd2fe3d13629582b21e120a611222152211e0c214b3bad85b6b3ee070609ff9dd96288c68b97dd99f7de64de9b036ccb26833eaccbe2c3a2da5f156866ae4850dbca68fe24351ac10334a260e5cd505e67d5ebee29cd477132b75fb35eb8980d06acd0e93bd602fa07c84bac320dfdb70334a2461e5bade49625662f5d379ecee3c73861a0a6cc01d3c564723f9cc470f42e23a226db987f0d2d8f1e6c689d608e0a9b149d07a96883a919bb785ad4b2425f9355296a68c52d5128b25228229f11bf17fa9d280cba9d6e14047751c8c28a52614a6a58bb78617760c8882aa14fed6ec102d5961c346fdf1dc39d3685aba2d6da4fae7be16eff70e16f6ef9bd6cb837a89f15b1738dce74700ef0402e94e1b04659f420157cff5169cefdf1043605c691dc010000",
    ],
    [
      "ETag",
      "3Bp+dlWvKcfHERTuzQ84UQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "1d",
      "d0417282300000c0bfe46c1dd18aa437545a2810453120974c4202463188a42076faf776fa84dd6f40f35cb42dd1f54528f006063a85e37ccc2676da4d9ef166aa4defbaeb9115f1b4c417696925e1eac05e66a74ef15551383488e96c308e5971f69daed9639c6a7ec6ccf18915f88ba276ed936f788ae353534f7afa8a8e0585399a2f74142fd53b5521ef215927389c9751d62937e07665a2cbae56b551e1caf8121c39b684873ebc9dad9e30e66cc3f218641f511cb4c9266a7ce50e016172e7b1d253d623dfa03d6a2a21b119c79f6e9225c35a0b93b6e8195ad72cdd966004c4e326efa225f2cf3d9b433802ff09440f37f137b114f42eeee0e717e2d5c22723010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:50 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-85-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "5d6f9b3014fd2bc87b6d0221249048d11aa5b48d96900d48db699a903186ba259862d32aaaf2df776d9aae55a5f609dbf79c7bcefde019ddb32a435394b2e2a1a5cdfedb1d4fd109a21217f07abb18fd30f387cde5f062e13837d14d568ff64fb31920986209bcab4bda13bc6d0815d36dd42f1aded6b8e1bc07897adea837183b963db0c796e58e1de0095ae62b56ddabec52d6626a9a47ed7ec17951525c33d1277cf7fa6e3eda66ddf03b4aa430df4b9aa022cccf45bf979c60c97835db4660a015b449e80eb3122cfc6766e9e9fbd47d8677fd02c08f8c504c086f2ba96c410ac2ab9c156da3b3a2e933d236df1c50e4affc456c105eb6bb2aa9f08e9e1819963891fb9a1ae7e1666d2c83f34db89ec7cb4d90448b4b7f3def2f36abed3a888ceb4b3ff40d89d3926aae31334ef52d800be86754485669f5583d2be597062d3f8e4511405ad02e98b8d6180f3c6b92e6a94b726f384a738ba6a997ba233c4c2d3271a893a514034f8b6a16ae7865dbae35c2d84bbc616a278e3b7492496abbc9d09e0c4836c888453d7438414f0d93f48c899a0bd675085d87cbd84fe2701b2ce6b1af4bc8715bcab3ce982ae0ad47090526963500e027751d54947150532d5f06b11fce17f1f2caefa6bca20526fbe801e69ce3525040e3061a2869b3e619340d05f3b57f06603db59fc7a040d33fcf48f55d3979d3f6577a0c435496a5fea2280e97c185b673445ce1b2d590c7ee806ab07c0bf581ebc35f40c2a27659d0afad1ffe46dd534873dad08a7c3d5100ebc097ffdb71f9010beb0f3242c21df6870825421adaed11d3e51ed9b02343fdb74adcc80f31773439764de55019e98e56f2a5a26ef9a1d04eac15af2008c20a04ba5b877f313b42287c040000",
    ],
    [
      "ETag",
      "hC5K/fqOH3GC44XSXdp5yw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-85-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f",
      "c2",
      "40",
      "0c",
      "c6bf4b7d3b92a130c8125f0c055de48f8e919018428eadc0645be7dd4d41c277b737158d9ae89badedfddaf5796e7bd824790c2e2c92d563897277b2427d67820055996ac5af82728560016ab162727d71337a696db6e804bde999ef6ca757dbe9f3f939132a5a6326c0ddc332c13456e0deef211719725b446999e5f32ab340ef0a531c87813fbce23ca3d8e4c349bfef75fa5d3858c7c6586831aff87fb4cd0e163cd022c0254acc2334bb14921e30d2be91a94456a4585354ca0815547075b09254164212d5b8526b376b75a7619fd64f1ddb6e390d06538a844e28677632e6fd4093166940cfac121c066415b2e065f57ce2721257424ce80f431e63f6fb0a488c48c6f33fb982d75d0bbe850fecdd81ef9cc8a8ccf591eaf547de6fe3d8d2cf51975ed8fd4128cd461d91d01f74c7a137b835dcec5d7a67a751dd4a621f151a0beb76a3dd6c39f69bab17649ce6efb85a96684124f8e7b84e34b84b912a3cbc027db9ff917a020000",
    ],
    [
      "ETag",
      "hCKOz7kxe6RFX3I6xXGxXw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `purchase` != ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-86-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "32",
      "ef",
      "1790fa917e256da58a951258a59276690a62d3d43a8e530c491c6c075450fff75d1c0a746c20454acef7eebd77f6394fe896a521eaa380adef722a365f6f78802a882abc86d563e767326b04d9e329756fe2e3c5e5e36c76f23018008215551227594cab92e78250d95fcc6b6bc1f30c0bceab4054ed5ad586d5369b8da6659ab6d5863a49e368c2d25ba8be562a93fd7a7da75d5b73be8e29ce98ac119ebcacd7ef9bf54cf01b4a94acef4bd64145d63f163d8a39c18af174b09883815c52b1a40966315878ad0c836ffbd4358693da1ac0f78c504c08cf5355d8020ac2d388ad73a15951ff09699b6f3ed0dc993823df58094ab808972c5c19581acb65765b3146d385eb1fac705230ae0e8bc42e304ebde9b9b1cac0c0359654ae8ccbef8ee718af4b2be3cbc0383286ee89b1c73e768d85eb3a73df38383a34cebce962661c5fbd8580ef904ac552eddac7414c0bc7cf1b3b7e7f9c450156a0592697b669e146d7ec05516093a8dbea04914983a01bd81ddc0a4cd26bd37618500c75aa60d75538e569b36b757aed20b081a1455acda61d121b37ed004751a71536a2568bf44c3342db0a7a104cd11326332e59b9bbe8d21bfbced2f716ee68e83bba8d08e7b13a29cd154dbcf5a9a0c9a5693600f8416fdb22cb38a815c735767dc71b8efcf185534ec884ae31d9ccef6046221c4b0a682c70421515e73c848d43b3e97cec8fa7ee700215fad8673b8444fd5f4faf05fe26d33badf41bcd7d6fec9e69033bc4058e730db92f3fd03003af68bbadfc9f66e879c32b90c642e0cd5f396807eedaf69f121aafa3d2e64eb2810ab55dd4dc8bda",
      "7b9185b6bfb7f05410dcb65219fd5838de152a973c1a514153f2f9780158273efd69ec6e3060e10e838c5410c3301359881041cba166896ee5b9da6eb42d0b69b050ef729d6e6777720547c148139aaae78eca1bac37b148e5f20504499845571fe2f60f125feef041050000",
    ],
    [
      "ETag",
      "BEZmP1bpzFeNjlBUWzPPDw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-86-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d504d4fc24010fd2fe3b54dda5a8b21e1504ca31844ad72308690a50cb5d076ca7e880de97f77b618e2c978d99d791fd9f7f608bba25ec3105645be3728db8b1cf5b31d5254a6d48aaf866a85e0006a91b3f2201fbe02ffed2a96f73bd50e449cec1f4d3c1ab142651f5809181e615360b956307c3f422d2a64db72d9ec58a2dbc66e93d96b729ba40c54b4b6c06c3e9dc6e369029d73b6888a4cadff655a740e6c6995e20625d619da0c8da42d667a62eb29513525ba8a8ccc50412fee895c92698424721971af23d78f422ff083c8f30651c8c29232a10baa593b7fe174a0498b32a503b7834b16c87ee4a29bfefc64d8ef5bd829eca3fde6c23fb8e0cc05965bfc3c366e35aa27499c5ca10ded9d0adc902da5b9ac96061dc804ffff5da14f7bf70dbc8d5aa9dc010000",
    ],
    [
      "ETag",
      "wrMx21Y5ArJksy7aAEqOuA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "1d",
      "d04b7282300000d0bb642d4e00abd01d08163580838c0a9b4ca0a14224fc02084eef5ea74778ef05489ad2aec3a26294834f3011455fa6cb041ab701cea11f723389d02ae9b39fd0aafc7d5e1ead3470e48955d6313d65b851b73db703e75bd4a3ad0927449e2119ee193770c2e6a06a67029b792e6e6166310d6eae580924494698fbb6182c0319ed6c78d36190a412d3fbde71b59bc359df46488de09916a346bcf27157ea6045a6ed8eda3c71e5d5e6b41e32c6e4ee508cd1572fc1222e633432315f62bfdbf1915f2f02cbc75877cbc7e8664dd0af35d23d5156a566de32b000f459e72ded70fe76ab1fbabe00ff09584c357d4f9894b4b405bf7f845aa26023010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:52 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-87-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85535d6f9b3014fd2bc87b5c13089090468ad628a56ba4403a20adb66942c618ea1630c5265d55e5bfef629aac55a5f609dbf79c7bcefde019ddb32a453394b0fca1a5cdd3973b9ea0134425cee1354dbfb6d27c74ababe8ee6f12d4deaead7ee5f3392058c712b8ac0b3a10bc6d0815b36d38cc1bded6b8e17c0089065367309ad88639322786e14c6ce0095a646b56dd03fb56ca5acc74fda03dcc39cf0b8a6b26868497c7777d67ea75c3ef2891427f2ba9838ad03f16fd56708225e3d57c1b828156d026a625660558f8cf4c93b3b7a9870c97c31cc03b46282684b795ec6c410ac2ab8ce56da3b2a2d93352365f1d50e8aedd65a4115eb4651557b8a4275a8a258ee5534db58b60e3692bff6213788b68b5f1e37079e97a8be172b3de7a7ea8dd5cba81ab499c145471b5b976a66e3e5c403fa542b24aa947dd73a7fcd2a0d5fbb174049016b40fc68e31c1a3a9719a648943b2a9354e328326c93471c6d84a0c726a533b4d28069e12552c5cf12acd9cc4c496115b6387c436319cf8d4319d786a1b866d4d46a99d1a687f821e1b26e939133517acef10ba0956911b47c1d65f2e22579590e1b690e7bdb1ae80d71e2514181bc608801fd4b5efa28c835ad7f2951fb9c16219adaedd7eca6b9a63f2143ec09c335c080a68dc4003256d3c9e42d390bff0dc7300aba95d1d8202cd7e3fa3aeef9d93576d3fd22318626759aa2f0aa360e57f57760e886b5cb40ab2eb0fa806cbb7501fb8deff01242c6a9f05fdd8bac14fd43f0534a30dadc8e71305b00a7cfabf1d961fb0b0fe202324dc617f88e8444843fb3d62aadc03db31cdb18514b891ef6296ca7c5cfa2e232d69255f2aea971f0aedc55a7104411056c057dddaff03ca60af857c040000",
    ],
    [
      "ETag",
      "dd+ut2wEnPTjxbRpMvunZg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-87-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "400c86ff4bfd3ae22038cc123f0c4125222a8c18620839b63206db3aef6eea20fc777b13d1a8897ed9daded3aeef7bdbc23ace4270611e474f05caf228427d6f8221aa22d18a5f39650ac102d42232e4baec745f9f8ebd36460f9b4972bd594ddaded919132a58622ac0ddc222c62454e03e6e211329725b40499166b32ab34097b9298efc616f70c9794aa1c907e37edf6bf7bbb0b30e8da1d06256f1ff689bee2c58d17c880b9498056876c925ad30d03d235389344fb0a6a890012aa8e0ea209254e44212d5b8523b6dd5ea4ed36ed41b8e6db79c2683090542c794313b1ef17ea0498b64482fac121c066415b2e045f57ce6721c56424cd81bf83cc6ecf7159018900c677f7239afbb147c0b1fd8de81ef9c48a9c8f481bae8df7abf8d634b3f47753cbffb83509a8d3a207eefa63bf2bd9b3bc34df7d2dba5467527897d54682cacdbcdd3939663bfbb7a4ec669fe8eab65811604827f8eab5883bb1089c2dd1b3edf61db7a020000",
    ],
    [
      "ETag",
      "bkyDExq/ABegWzYlKzjYBA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `purchase` != ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-88-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "546d6f9b3010fe2bccfbd24a79212f101a29eab284769952d211d2aa9aa6c480a16e0053dba48baafcf79da1699b756ba58870bee7ee79ee7cc7235ad32c447de4d3f8be207cfbf98ef9a88688c4b13afd1e72dea69b69dc89e271f3f78375b63686830120a88a1238cd135217ace00111fdc5bc117356e4983356874475cbaab7ccaede6eb54d5def995d88132489a6345b43f4ad94b9e8379b7bee46cc589c109c53d10858fa7cdedcb49b3967772490a27948d90416d17c9ff434610196946583c51c041482f02549314d40c24b64e87f394cdda0386dc400ded080e020604526952c4811b02ca271c1cbaca8ff884a99af5ed0dc9eda234f5b7112301e2e69b8d2b0d096cb7c5dd346b385e31dad70aa32ae8e95636f6867eeec425be520e0160b2256daf537dbb5b597a395f669a09d6a4367ac1d649f38dac271ecb9a71d9d1e6be7ee6c71a97dbd790d01dd21119266a56a0ffb09518a9f1a3b797b9d2a004be0ac9ccb9e6ee296a59ff891df0b22ab63f8914e7cdff27b06eef87a70d225ddd02718e2a4ca5e46e18c65c430cc884461d03522a36b760cc3b02c62e91d1d1eadc838315ba4e39b06dad5d003a7928ca9c899a05577d1b53bf1eca5e72e9cd1d0b3cb32225c24725c895345bcd629a1c8a5aeb700f84e6d3be5a50cd8d4754d1ccf7687236f726557133225310eb6f37b9891082782001a739c1249f8050ba171e872369f789399339c424479ed977b8440fd9f8f2f01de362f3b2dcb7f34f7dc89735e0ad823ae705294904df582700e5ad16e57fb7f9aa1eb0e6f801a738eb77ff9a01cd8b5dd3f294a7c695532f7942da4d8f656fbc0ea1e5826dafddac1af8660db2a66f46361bb37a83a72494438c9828fc70bc0a5e3c38fc67e83010b3b0c3442820dc31c08451270520d354dcb529ea27b1dbda7c600c05cbef1c1737f732a87ca485292c9a78aaa0d2e9ba85c857806811366d1292f71f707f5f9fe5c41050000",
    ],
    [
      "ETag",
      "bJdrr2ivLg3fgD/xw8Fk5A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-88-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6b",
      "c2",
      "40",
      "10",
      "fd",
      "2fd36b02499aa62278a845aa2052533d15913519d3d52493ee4e2a56fcef9d8d455a7ae96577e67db0efed09f6bacea10f1b5dbcb7688e3705f2dc0d29dab6642b5743b545f0005915a20c83f127951115560f6da482c57c1eebc360200a9bbd61a5a07f82adc632b7d07f3d41ad2a14db7addec45c2c7c66d93d962f4344a05a82877c06c399d3e0ca723387b578baaa8adf95fa6d5d9831d6d52dca2c13a4397a131b4c38c27ae9e555553a26fa935195ae8c41d51186a1b65887c41fc5ecf0f933888c2280982fb2416614999624db568972f920e985895291da41ddc8ac074a314dd76e787c051d7c24d775db49f5c78e5923f5cfcdbb7fa7e6c7864b4cf8624b945173ab8147824578aa52c9b163dc894fcff58f3653f7f0171b0a246dc010000",
    ],
    [
      "ETag",
      "10Hzol2ogsiBs2a0TQQ4iw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "08000000000002ff1dd04b7282300000d0bb646d1c8182a43b2942152d7e2a8d6c328091001a280412ecf4ee757a84f77e409265b4eb88a82bcac12b18131d4db3693a5be061f6f8dc325758f77b16e1d2c0e3c23fa90c371ce2833eb345dfd1304c6266f26b1bc5bca89976bc564775bbe1f995bdc7f373928dd1c10f58dd8c5aca07d5ab551a46b0d8b04be36d3f6e4699561bcb53fd63ade3d2dabdc81cc66df265844ba44701d5573db58370b9a95342a0cb96a4522633fd3ce8768e2cf3396f0743aec36fef4d5ea4a5195c799cc801e63b888818bcadb0d089ca3e46ae6dd942dbb333741de5576002a86a8a9676a478ba0d13a109f84f20626ce873c2a1494b5bf0fb07e6ae9eeb23010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:53 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-89-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "14fd2b64f6d5166ab19426cdca56749bb47417a8c6dd6cc830bde02830c80c6e8ce97fdfcb605d8d893e3133f79c7bcefde089dcf16a476624e5f97d0bcde3975b919223028ae6f87a5d2f3c1157dfea9577212eb66e9a8dc7bff2f91c11bc63495ad6050ca4681b0672b68d867923da9a36420c30d160ea0e4613db3a1e1d4f2ccb99d8c89350642b5edd21fb46a95ace4cf3a03dcc85c80ba035974326ca9777f3e1d8ac1b710b4c49f3ada4892ad2fc58f46b2118555c54f36d84065a094d0225e5055af8cfdca5a76f530f392d8739821f3803ca98682bd5d9c2144c5419cfdb466725b327a26dbe3a90c85ff98bd860a268cb2aa9680947c68e2a9aa8c71a8cf370b33696c1f9265c7bf1721324d1e2bbbff6868bcd6abb0e22e3eabb1ffa86a269019a6bcc8d537d0bf082fa3b908a575a3dee9e3be5e7062ddf8fa523a0b4843e9838d6848ea6160e337558361d9fa49905693a4d9d133a4e2de6da60ef52a0c8d3a29a452b51ed52271bdbcc4a007b9bd8ecc44da80da3c4b66cc6c623c79da42ed91f91bf0d5770c6652d24ef3b44aec265ec2771b80d165eeceb1232da16eaac37d615f0daa3c20213cb1a21f083baf65d940b54eb5abe0c623ff416f1f2d2efa7bc829cb2c7e81ee79cd14202a269830d54d0acc50e9b46026fed9f21584fedc72128c9ecf713e9fade3979d5f6177a8c43ec2c2bfd25511c2e830b6de780b8a445ab210ffd81d468f906eb43d7fb3f88c445edb3909f5b3fbc26fd5308193450b1cf278a601df8f47f3b2c3f6271fd51462abce3fe30d989b006fa3de2badc03db194f472ed1e046bd8bb913e7d0b52e4797114aa8d47345fdf263a1bd582b5f4018c4150874b7f6ff00e755f08c7c040000",
    ],
    [
      "ETag",
      "YpCAoTnBpLAGoGU9bf33Zg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-89-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d92614f83400c86ff4bfd0a09331b53123fe0dc1c864d1d2c3131cb72838ea140f1eed02ccbfebb3dd469d444bf40db7b5afabec70e1ef32a050f5679f6d4a0dc1e65a86f4d3043d5145af1aba64a2158805a644cf6fa2be1bf74aea2c968309277511c88cd383b3b6342251b2c05783b58e758a40abcfb1d54a2446e4ba868ca6ad96616e86d6d8a513c0ba6979c97949a7c3a0f43ff3c1cc2de3a34a6428b65cbffa36db1b7e08156335ca3c42a41b34b2de901131d18994a947581b6a24626a8a085db834c52530b496473c53e39b53b6ed739ee1cbb8ed377bb0c1694089d53c5ec3ce2fd409316c58c5e5825b80cc83664c1ebf6f9cce53c6d85983098c63cc6ecf7159098904c977f7235afbb117c0b1fd8bb03df39515253e903350aaffddfc6b1a59fa32efc78f883509a8d3a2071301946b13fb931dce25dfaf956a3ba91c43e2a3416769cee49afef3a6fae0ec838cddff1b46cd08244f0cf31ce35786b5128dcbf026716ecf37a020000",
    ],
    [
      "ETag",
      "57baAw1JSMFCFrXSTIahHg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `date` != ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-90-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8554fd6f9b3010fd573cef974dcb07a1109a485597b56c634a494bc8b66a9a92030cf30a98d9a65357e57fdf014ddbec534202fbdebdf7cebee3965ef132a1531af1ec5bcde4cdd3af22a23dca3464b8bb78e7e557f31f2f847756d8177aa679c93f66474788e04d9682a2ca595f895ac64c4d57cb4126455d8114a28f44fd89d11f8d2dc31c9963c370c616e62996a7735e5e61f617ad2b351d0e77da834c882c67507135884571bf3fbc368795145f59acd5705f72882a6af86fd1e35cc4a0b9288f564b34502b26d7ac009ea38587cc247ab94f3de0500c32045ff398411c8bbad48d2da4884599f2ac962d2b9dded2d6e6a30fba74e7ee49483692c542266b9e6c0828b25e57573d72b258f9e1b30d140de3e67913d82dc8eb60714636151af8028aa90df9f0d60d5c42360968b6214f8ec83199f9a7648fd9f3c9caf7dd65489e1d3f276f82c5ea9cbcba7c0c41cf0953787bade310a29c356eef0ed5fbfd2a9b04d068a10bae1d630ca3436312a59113a7870776941a2c8a0e23c78683c8882716b3928801e6e986bdcd8252946ce298b6631dd86398440030710e4710c53698266e3a6c1259a99dd816ddf6e877c9353be5aa128a77274b3f045ee8aec360e59fcc42b72d23853ad7a79db9a688c73e3516b9368c1102ff51dbb68972816acd55797ee806b393d07bef76dd316719c437cb6fd81f29e48a211a24144c337926123c387abe587aa1b7f06773cc68affc7c875074fae9f62121bca9da93d6ed9b9e36456c1f11be87bc6e01d7dd07350dd3e81b667f64d3edb6f777a65910cc2e511da4849b5f6258118edaf68f3a2dbe5d754e77ba23daa8ddbbd85b597bab31dd7edee2d3a3386c9d32bd58b9c125edb6029632c9caf8ff1d86e036f0df7fc66e80118b238c324ae31afb39568d482c59d7d7bc684bb9cb76acb1d9fe713448fd5bcc9998bbcb6b381a4656b052df55d40d707b884da856f7200c623bfa9eff06a33f015a16d99040050000",
    ],
    [
      "ETag",
      "OJIlkLz+oIMm5QtAtiniXg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-90-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d504d4fc24010fd2fe3b54d0a428d241c44899010a2452e1a4296322d856ea7eece4a90f0df9d2d8668bc78d99d791fd9f7f608bba25a430f5645feeed01cae72e4673f24685dc956ae9a2a8b1000b2ca45a9579b4f9d5895aa593c8a1e78da75d9ebbedf17854d37a815f48e901558ae2df4de8e50298d625b2eeb9d48f850fb6d3c7d193e0e130134ad3d309d4f267783c9104ec1c5a234b98aff655a9c02d8d22ac10c0d5629fa0cb5a12da63cf6f5acd27589a1256752b4d0881b2237e46a65884241c2db286cc59da8dd6ac751741377445852aab8a04ab4f399a403265665427b6907d72230cd2845b3e6fc10b8d5b4f053dc44fbc9b52f5cf70fd7f9cd2dbe1f1b1c18ed9321496ed1878ece05eec9976229cbc66100a992ff1f157cde4f5f3c6933c5dc010000",
    ],
    [
      "ETag",
      "mbhzmRsacaS6H0DtN5ufZw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "1d",
      "d04b7282300000d0bb642d0e1204d31db440b5f22b02910d0318944f4009c324767af73a3dc27b3fa0a82ac2583e8f1d19c01b108582d6d5ba940dbcc8cf933fdcb4bd158c812f627833719125dde5a9e8d3e451cdeffcba8ea2fb733708515830ce1254e6f0723194435b66bacd7b6684711b6f371f0176d43395868712a75fd6f9fd5360479760edc83738cb663a1fb01a22ca98bbb40887fbc4a059d2d7de2c732a452de15332a88bd38c22b4b8697f537bd69b746f703bbd22f728e50f1acbe3f6dc3a2adfeca40607fde1ea5598696c619d23f5ca5129fdcc355c6fd64e50052b40f8bd9908cb9b971b6e115a81ff847c1677f29a3049319109fcfe0120e7ebf823010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:55 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-91-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "fd2bc8fbda0468803ca468cd12ba464ac84a48ab699a903117ea96e0149b3e95ffbe8b69ba5695da4fd8bee7dc73ee836772c3cb948c48c2f3db1aaac76fd72221470414cdf1954d664f0f94adfa0f91f923f1bcc5d9d3f1fdf9788c08deb024ddee0ae84851570ce468b3eee695a877b412a283893a43bb637b8e756c1f7b96d5f71ce44928b2052f6f907da5d44e8e4cf3a0ddcd85c80ba03b2ebb4c6c5fdfcdbb637357896b604a9aef254d5491e6e7a2df0bc1a8e2a21c6fd668a09650c5b0a5bc400bff996972f23e7597d36d3747f01d6740191375a91a5b98828932e3795de9ac64f44cb4cd3707b2f617fe34329828ea6d1997740b47464a158dd5e30e8cd370b534e6c1e92a5c4ea2f92a88d7d3337f39e94e578bcd32581b97677ee81b8a260568ae31364ef42dc00beaa720152fb57ad43c37ca2f0d9a7f1c4b434069096d30ee5b1eb507d630c9923ecb063d37c92c489241d277692fb1d8d001274d80224f8b6a162d45e9f67a99933883186ceac48e97d07898a61067e0da9050d773e990ec8fc87dc515ccb8dc09c9db0e91cb701ef971146e82e924f2750919ad0b356b8d3505bcf5a8b0c0d8b26c047e52d7be8972816a4dcbe741e487936934bff0db292f20a7ec717d8b73ce682101d1b4c2062aa89622c5a69160b2f46708d653fb75084a32faf34c9abe374edeb4fd951ee1101bcb4a7fc93a0ae7c14f6de780b8a045ad2177ed81ecd0f215d687aef77f11898bda6621e71b3ffc4ddaa71032a8a0645f4f14c13af0e5ff76587ec4e2faa38c5478c7fd61b2116115b47bc475b90776df756cfdb72a5aa90f31d7ee1dbad6e46832c2164af55251bbfc58682b56cb571006710502ddadfd3f019c38247c040000",
    ],
    [
      "ETag",
      "cADzxacO7xT/Bb66LHz2wQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-91-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "0c",
      "86ff4bfd3a924160e0123e80a2600011464c34841c5b3706db3aef6e1a24fc777b13d1a8897ed9daded3aeef7bdbc336ce02706115474f05cadd5984face04535445a215bf72ca148205a845c4646d7bd37d7d68dc47512b1cab753f6fca46efa5dd6642f96b4c05b87b08634c0205eee31e329122b7f9941469b62c330bf42e37c599371d8caf394f2930f9783e1c76bac31e1cac536320b45896fc3fda16070b36b49a628812331fcd2eb9a40dfa7a60642a91e609561415d24705255c1e44928a5c48a20a572ae7d54ad5a9dbb56acdb1eda6536730215fe8983266e733de0f3469914ce9855582c3802c43161c96cf672ec74129c48483b1c763cc7e5f01893ec960f92797f3ba6bc1b7f0811d1df8ce89948a4c9fa8abe16de7b7716ce9e7a8cb8ed7fb4128cd469d106f30eacdbcce6862b8c5517a77a7514d24b18f0a8d8555bbde6a341dfbddd50b324ef3775c2d0bb4c017fc73f4630d6e2812858737178492987a020000",
    ],
    [
      "ETag",
      "2kJBzZ5Wgg8fNshHp7r5Ew==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `stamp` != ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-92-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8554fd6f9b3a14fd573cef974dca87a1847c48555fd6f236a49474846cea9e9e12634ce61530b34dbbaacaffbe8b69bae6ed6d9390c0bee7dc73ae7d2f0ff84654199ee154ecbe365cddbffc2253dcc3dcd01decbe293fc52aa085f0ab8b6f7e62ee789a2fee4e4f01215a96a6655df0be968d625ccfd6abc14ec9a6a64aca3e24ea4fddbee37bc4755c9f90b1ef014ff3225f88ea06d89f8da9f56c383c680f7652ee0a4e6ba1074c964ffbc35b77582bf98533a387c7924350d1c3df8b9e159251236475ba5e81814673b5e125150558f8c1ccd2bf8e530f042d073b00df0ac62963b2a94c6b0b523059e562d7289b15cf1eb0b5f9ec03af8245709ea0ade24caa6c23b22da21a6d36f54d0f9d2fd751f26a4bcb36e3f6751b382cd0dff1f2126d6b30f0996aaeb7e8e3bb200e10da6a03e6b6e8c5293a43f3e8021da50e23b48ea26095a05767afd1db78b9be426fae9f43c074c6b51195b59cd0b4e0adddc7530d7fbecb96400d78e8829b31f1a93321d3344fc72c9f9c8cd29cf0349da4e3113d49099b7adccb524e8167daec96452b595192323ece728ff8a94fd8c465fed41b4fa6272387318f67ee9490513aa278dfc3774a187e21742db5e88e167f8cc324d824f13a3a9f27812d23a74d612e3a736d11cf7d1a2872438803c0dfd4b66fa342825a7b57619404f1fc3c093f045d7b2cf88eb2fbd55768909c169a039a2a5a72c3d5a5cce0e0f0d5721526e1329a2f8061effcea80d078f6cfc30f42725fdb9336f68d93f012ae697e79653d1c401f68d158d46df7815de2923e813e1e258e3b734e668e3720847cc2fb7defd7c9e7713cbf064354297aff9f181409e3b7ff5f558bb7abcefcc185835bb5274f472bef68e5e3fdbf7b787a1806b053c6efd7417c8dbbad98e75cf18afdb9e9006c037ffc8f1c861ab030d62003136204b438d3ad0853bc6b7551da521ed963dff508b660657e8a7936f634cc6d465ef2ca3c56d40db53dc436d4e8271004a143a3307a0bd1efb5ce538754050000",
    ],
    [
      "ETag",
      "BmZRrEali6nDx6TtwebfLw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-92-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d904f6bc24010c5bfcbf4d804624c532a7850915610d1b4e2a188acc99846939dedfe6911f1bb77361669e9a597dd9979bf61dfdb131c2a59400fb655f9ee501f6f4ab40b5f64685c6d0d5f8aa4410800ad2899ecb8c5406dbba3a572b696ab645eb8dbc3a0df67c2e46fd808e89d6057615d18e8bd9e408a06796db3510746ec51f96e327b193f8e331e3454f8c16c399d0e86d3319c83eb8a68c849fbafa5f539803d6d33dca14699a3f7a034ed31b7131fcf8846d5181a723a47032ddc0aa526a784260a79123ec461274da2b813a751749f260cd6940b5b916476f9cceec0921575469f9c0eba0ce8b6e4a0bbf6fcf05fd4a6f055da5afba9c557edee8f96fcd6d6df8f0d8f16cd5c133b37e84d47970023f2a12c87b5da6100b9e0ff7faaeca53f7f01a4fd3ab6dc010000",
    ],
    [
      "ETag",
      "1uQApb3CUputlnW4Pdu+kA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "08000000000002ff1dd04b7282300000d0bb64ad4e82f8a13b50842246c988a01b26406c49c1440814e8f4ee757a84f77e00cd32d63489125fec01dec040356396cd5268c61d1ccfb82467a55f76a6774db03947f60afb5b4a488e2c146d0457d210ee5a902af6e2883b63a087baadc2e0e0f5ecee8ea9c06b39ec49b6dfca08410635fcb4d425d7e28e41efa3db92fc1ad68655b43c10de6ae5b845d495a35d4e6bff2e4dea0bbd44d951f2032d9ef09926fa616935d9775b1cd7efe162d9b4d4fcccab5ddbeafc441c797fb4c289a603d923816e5d179c6cb524d5a6774f23abf14de341de271ca7104c00eb6551b326295eeef9c23026e03f21518364af098bd19ad5e0f70ff7bfbf5923010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:56 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-93-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "535d6f9b3014fd2bc87b6d8249082491a2354a69cb9a908d9056db3421630c754b30c5a65557e5bfef629aae55a5f609dbf79c7bcefde009ddf232455394f0fcae61f5e3971b91a023c414c9e1b5b9600ffe9977f1edaf35bfc0f8c29c5faa5f0fb3192078cb92645715ac2745535326a7db4d3faf4553915a881e24ea4d863dcbb1f1c01a3818bb8e0d3cc98a6cc9cb5b605f2b55c9a9691eb4fbb91079c148c5659f8addcbbb793f30ab5adc30aaa4f956d20415697e2cfab51094282ecad97603061ac9ea98ed082fc0c27f669a1cbf4ddde764d7cf017ccf2923948aa654ad2d48414599f1bca97556347d42dae6ab03da784b6f11195414cdae8c4bb26347464a1489d563c58cd370bd32fce0741daee691bf0ee2cde2dc5bcdfb8bf572bb0a36c6d5b9177a862249c134d79819c7fa16c005f45326152fb57ad43eb7cacf0df2df8fa52580b4645d3076b143ac319e2459e2d26c3c1c25196649324edc111926984e6c66a70923c0d3a29a454a5162c74e884d486ca598c576963931a1cc8a87367632c74dc7e34186f647e8a1e68a9d705909c9bb0ea1abd08fbc380ab7c1621e79ba848c34853ae98cb505bcf6a8a0c018630b801fd4b56fa35c805adb723f88bc70be88fc4baf9bf292e5843e6eee60ce1929240334a9a1818ad52b9142d350305f792700d653fb7e084a34fdfd84dabeb74e5eb5fd851ec1105bcb4a7fd1260afde04cdb39202e49d168c87d77401558be86fac0f5fe0f206151bb2ce8c7d60b7fa2ee296419ab59493f9f288075e0d3ffedb0fc8085f50719a9e00efb43652b426bd6ed11d7e51ed8ae8bdd11d2e05abd8b5993d1a16b6d8e3623dbb1523d57d42d3f14da8935f2050441588140776bff0f33edadda7c040000",
    ],
    [
      "ETag",
      "uKewIGEKJz1AK00K/AVtZw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-93-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "df65bcb4c48250a40917a8a88d80fc942b43c8d20e506c3b75772b36847777b6221a35d19b7666f69be99cb3ddc1539486e0c2225a3de7288b9315ea9109c6a8f2582b7e65942a040b508b1593db911726a7ba5195cea48945ebfe75e19c8dda6d2654b0c64480bb83658471a8c07ddc412a12e4b680e23c49e76566812e32539cf8636f70cb7942a1c907d35eaf73d9ebc2de3a3686428b79c9ffa36db6b760438b312e51621aa0d92593b4c1407b46a61249166345512e035450c2e5c14a529e094954e14aa5755ea93a75bb56ad39b6dd74ea0cc614081d51caec74c2fb81262de2316d5925380cc83264c1cbf2f9c2e5282c8598d01bf83cc6ecf7159018900ce77f7219afbb167c0b1fd8c181ef9c48284ff591bae93d747e1bc7967e8ebaeef8dd1f84d26cd411f1bd7e77e277fa43c3cd0ed22f0b8d6a28897d54682cacdaf58b46d3b1df5dbd22e3347fc7d532470b02c13fc75da4c15d8a58e1fe0d320f60717a020000",
    ],
    [
      "ETag",
      "wQIdm+t51r6S7ey9Kxb6/Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `amount` != ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-94-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "9b3010fd2accfba795f283900442a4a84b13daa2a5a425a455364d893126a5054c6dd329aaf2dd7740d326ebd64a4870be77efbdb3cf3ca387280d501ff9d1fa31a77cf3f59ef9a886a8c46b586563cb9df48c859e45223b75e877edc705b91e0c001115550227594ceb82e59c50d19fcf1a6bcef20c73c6ea4054373bf596de51b596a6abaaa177a04ed0389c44e90354df4999897eb3b9d36eac195bc714835883b0e475bdf9a43533ceee2991a27928d90415d1fc58f4246604cb88a583f90c0ce482f2254d70148385b7cac0ff7648dd8870d25803f829221413c2f25416b68082b0348cd6392f5951ff199536f73ed0cc9a58234f59714a180f9651b052b05096cbeca1a68ca673c73b5ae1a4605c1d17895da09cb9d34b659581813b2ca85829b717966b296f802f03e544193a63e580db7694b9e358334f393a3956cedde9fc4a395dec43c07540858cd2d2b387fd98167e5fb6d57e7f9845019660a24a2e0d55c7ad9e6afaa16f90b0d7eefaa14a7dbfe71b5ddcf65562766827f029863a59b09755386529364d8c4d03b77b9a4935cdc7bd20e8fa440b0c5d6d75690bfb2d233435136d6be8378f241dc3ac3111557b8b6e5ddbb3969e3b774643cf2adb08711ecb7165ae6862dfa7842697aada02e007bd6d8b6cc440ad382cdbf12c7738f2ec1bab9a8f095d63b2993dc28484381614d098e3844aca2f59001b87aea633dbb3a7ce700215e5a15fed1002f57f3ebf15789bacdc6959bed1d9643af4e0226cf7386f709c9798a7ea03b51a5d406c6bffa719baee7001d29873bcf92b07ede865f93f144a7c1955365f1551a1b68bb483a87310e968fb6b0b4f0dc15dab94d1f5dc7217a85a726948394dc9e7e305e032f1e92f63777f010b3718648484188699884284705a0d759494adbc541b46af6da012cce5bb9c697476275770148c34a1a97ce9a8babfe52616a9",
      "5cbc822009b3e8d8ce3964ff00ec5777fd3f050000",
    ],
    [
      "ETag",
      "oDERL87Y6pispBNeK2ZHcQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-94-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "50db4ec24010fd97f1b54d0a1488243c80412521a8154c8c216469a7a5f4326577aa41c2bf3b5b0cd1f8e2cbeeccb964cfd923646919c1003669b2af511fae12e4273b0468ea9c8d5c159506c101649588329a7f766f5f1eb69df826dd2f3aaf79d64fb2d170280a136eb1503038429c621e1918bc1da154058a6dbdae3291f0a1b2db74be98dc4d02010a8a2c305fce66a3f16c0227e7625105d525ffcbb43a39b0a34d80316a2c43b4192a4d3b0c796aeb19555439ba866a1da28146dc1089a6ba529ac815c4bdf6dd56cff7daad76cff3fa3d5f8439858a532a45bb7c9674c0c42a0fe843da414704ba19a568dc9cef02b79a1676ea36d17e72ed0be7ffe1fcdfdceafbb1f181d13c6a92e4066d68ef5ce0866c2996b2ac6b742054f2fff7299ff7d3178cf9d8d8dc010000",
    ],
    [
      "ETag",
      "dNz5FVOh3fCiqT3Ylk7gkA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "82300000d0bb646d1d4543a03b504ba14087016ce38609104cb48824e167a777afd36bd47787f70d4851502933d59ce9053c838968e6bc98e70bebb35fdc92d043eda11f5055c7dea8b39b5f241e0ff1a9525240bcde8d76aaad17653a9509ac7c43141bb41f6375e96be9120ebf86b08e88ad3106d9b6844cf0326abba9f9c07a9eb91bbf1c2443d6ad3e766839e4ddbb6f9d96a61161ce5f71452ce7ca0eeee06fd767b3ca0c277258aa750e812bd623d6eeb8e16158d96fdc6e55d0c46d103fa976950fa7c070557ddc5b01ea77a1dea3c969b43813bab4fd3179c166c8d3f9c3c3bf0366808e572ea8ccf87dfb0a9ae60cfcd5cfd474a5f7ff3625820af0f30bd73d4fd919040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:58 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-95-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85535d4fdb3014fd2b91f74adbb4b44d52a91a550950a94d4792526dd314d9ee4d30a471163b4c0cf5bfefc6a10c84044fb17dcfb9e7dc8f3c917b51ecc8843091fdaea17afc7227193921a06986aff676edd53fc64114c05f79e75c5fd6575b753d9d2242342c45f7650e1d25eb8a839a6ca26e56c9baa495941d4cd4f1469dfe78680ffa83b16d3be321f214e4e95214f7c8bed5ba54935eefa8ddcda4cc72a0a5505d2ef72fefbd8741aface41d70ad7a6f257ba8a27a1f8b7ecd25a75ac862ba89d040ada04a604f458e16fe3377ecec6deaaea0fb6e86e007c181722eeb4237b6300597452ab2ba3259c9e489189baf0e24f297fe3cb6b8cceb7d9114740f27d68e6a9ae8c712ac8b70bdb216c1c53a5ccde2c53a48a2f995bf9a75e7ebe5661544d6f6ca0f7d4b539683e15a53ebccdc02bca0fe0e941685518f9be746f9b9418bf763690828ada00d268e3da67dd7f658ca1c9ebaa72396dac098cb9c113d6536f78630dc31a0c833a286450b590cf9c0e5ccd925c0474e321c9c42e27900091b78ac3f02dea7b64b0e27e44f25349c0b554a25da0e916db888fd240e37c17c16fba68494d6b93e6f8d3505bcf6a8b1c0c4b6fb08fca0ae43131512d59a962f82d80f67f37871e3b7535e4246f963f41be79cd25c01a269850dd450ade40e9b4682d9ca3f47b099dab7635091c9cf27d2f4bd71f2aaed2ff41887d858d6e64ba2385c0497c6ce117143f3da401eda0329d1f22dd687ae0fbf10898bda6621d71b3ffc4edaa71052a8a0e09f4f14c126f0e9ff765c7ec4e2faa38cd278c7fde1aa11e115b47b244cb947b6e38e5c971870a5dfc51cdb3976adc9d164843d14fab9a276f9b1d056ac562f200ce20a04a65b877fcf4070e07c040000",
    ],
    [
      "ETag",
      "0WO9uZ6NSNezoj7QGuHWsQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-95-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "614fc2400c86ff4bfde84806c2d4257c183a7109a0c288248690632b30ddd679771309e1bfdb9b88464df4cbd6f69e767ddfdb169e923c0617e6c9f2b944b9395aa2be33c11055996ac5af82728560016ab16472127427f7c985df182513db7b3e3ee9d407afeb769b0915ad3013e06e6191601a2b701fb6908b0cb92da2b4ccf2599559a03785298ec26130e8729e516cf2c1b8d7f33a3d1f76d6a131165acc2afe1f6dd39d058f341fe20225e6119a5d0a498f18e9c0c854222b52ac292a65840a2ab83a584a2a0b21896a5ca99db76a75a76937ea0dc7b64f9d26832945422794333b1ef17ea0498b74486b56090e03b20a59f0a27abe7039892b21260c06218f31fb7d05244624e3d99f5cc1ebae04dfc207b677e03b27322a737da0ae7a37de6fe3d8d2cf51975ee8ff209466a30e4818f4fd51e8f56f0d37dd4bef6c34aa5b49eca3426361dd6e9eb54e1dfbddd50b324ef3775c2d4bb42012fc735c271adc854815eede00cf533ba47a020000",
    ],
    [
      "ETag",
      "XIGXWiCE2SiX0Aq+3B1Nxw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  LOWER(`id`) LIKE ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-96-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffc5547f4fdb3010fd2a96270468fdad124425c40a645b4449db340575136adcc40d5e9338d84ea70af5bbefec10a082b13f2755aacff7eebd97bb4b1ef18a6511eee1058b1f0a2a369f7ef105ae61aa480cb727e7576b8baeaf56cbf1efe4c7f198a69f57627c7a0a08a6ab2449f384d6252f4448656f3a69c4821739119cd781a87e62d5db56b7d56977ac56ebd8ea429da4c972c0b21554df2b95cb5eb359693762cee384929cc946c8d3e7fbe6bad3cc05ff4543259bbb924d5091cd8f45cf121e12c578763a9d8081425231a72961095878a98c165f76a91b8ca48d18c06b16521286bcc894b6051421cf962c2e8461c5bd476c6cbe3ae0893db02f7c14081a7211cd59142022d17c9eaf6ae8623875fd8380a49a3138d4892a405fbde1350a7230704f249501bafd6e7b364283e1aded1d04c0738806ce958dce50dfbd443b028e8ba6ae6b4f7c74707688be79c3e9089dcf5e43c07a4497a448d42551c0afb4e5a83c3a7a9e8a4a356fb5da007c6ab8f376cc78abb38c0ba6f4a33aae6f7bfd0bdfb9b1cbee0e684cc2cde401fabb2489a4802682a4545171cd230a25a3e1c4f19da1db1f408569d9a84248dcfbf9f852e06f72aa4d2af3afb56089b6af186f485218c4ba3ce0bdf6d11ede6e6b7f27e97b5e7f06c24408b2795fe05d0583375169b2526c63ad56459d9da8bb1359787bb7855f0dc39e96ca783cb5bd192eaf3cbaa48266a191fb6000066c12ff7cddaadd072c6c3fc84805b1542c945a2414d4a47d969a4779aa3e3eb1da47d880857a9beb58fa139145ef669e340ac34f85e0c2a312564e87a0268d1796414fe01352c3299592c49a669ac193484a1609456629d0f30c50102096213d2414f8b3913d37830a6ae89c44905156179926f7909e7f75ded7c1be76647c9463fb4f1eeecab66891cba16bc38efd0193653e277c050000",
    ],
    [
      "ETag",
      "9BKv6evKkfQwlZ7Qem+krQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "1d",
      "d0",
      "db",
      "6e",
      "82",
      "300000d07fe9b3182e42ecde28019ca3220219f8d2402d13d928948a80d9bfcfec13ce79828252360c44f286b5e00dcc850ed7745daa7636aa4b7230827bc3489518b093c23bc5a3bf58864c5882f5f418d18fb3629e7b7677777ea3a8e3f4bd578be2d095cdd723beb4a13c87dc4efbb4ccb4eb384b9b6ede23ff14606d805e67de71dcee869f3d44b6ac897051d0b3aacad38a0b9e5b384faddb66df68fece36aa4f6b7864508acc756f59ef706e2a088582abba8b3dfd2a746ef83637e936d3e696f638f094720a55429ce8b2d45dee4eb87062898ece6d8bbca8012bc0a6ae166c20f5cb6d9810aec07f029173c75e1388158209f0fb0725258ec723010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:37:59 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-97-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85535d6f9b3014fd2bc87b6d1248082491a2354ae98a9490969056d33421e35ca85b822936d9a22aff7d17d374ed26b54fd8bee7dc73ee07cfe491175b322109cf9e6aa80e5f1e4442ce08289ae1eb801f7c5e0eae7dd84b13ecf269171e7edf4ca788e00d4bd25d9943478aba6220279b7537ab445dd24a880e26ea8cdd8ee5d866dfea3ba6e93a36f224e4e982178fc8be57aa94935eefa4ddcd84c872a025975d2676afefbd7dbf5756e2019892bdf7923d5491bd8f45bfe68251c54531ddacd1402da18a6147798e16fe32b7c9f9fbd45d4e77dd0cc17bce803226ea4235b630051345cab3bad259c9e499689b6f0e64ed2dbc79643091d7bb222ee80ece8c2d55345687128ccb70b534fce072152e6791bf0ae2f5fcca5bcebaf3d562b30cd6c6dd95177a86a2490e9a6b4c8d737d0bf082fa5b908a175a3d6a9e1be59706f9ff8fa521a0b4843618bba643ad91394ed2c465e968304c5213926494b8433a484c36b6c1de264091a745358b16a248face80b2be1b330a566c9b6c1b8fac94c6cec87487b6452dc71992e319f9557105175c9642f2b643e42ef4232f8ec24d309f459e2e21a575ae2e5a634d016f3d2a2c30364d0b811fd4756ca25ca05ad3723f88bc70368ffc5baf9df20232ca0eeb279c734a730988a615365041b5145b6c1a09664bef02c17a6ad7a7a024931fcfa4e97be3e44ddb5fe9110eb1b1acf497aca3d00fbe693b27c42dcd6b0dd9b70752a2e57bac0f5d1f7f221217b5cd426e365ef89db44f21a45041c13e9f288275e0d3ffedb4fc88c5f54719a9f08efbc36423c22a68f788eb724f6c773c1eebbf55d14afd131b9996659fbad6e46832c20e0af55251bbfc58682b56cb571006710502ddade31fc09cb4b47c040000",
    ],
    [
      "ETag",
      "3iyIip3PIevs0e4pqmRyxQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-97-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d926f4fc2400cc6bf4b7d3be2203874092f862262f8cf88268690632b30d8d679779320e1bbdb9b88464df4cdd6f67eedfa3cb73d6ca2340417e6d1f23947b93b5ba21e9a60842a8fb5e25746a942b000b55832d978b5f5fdb97cec0fd36af2e0f7546bbbf1bd7a9d0915ac3011e0ee6111611c2a709ff6908a04b92da0384fd2599159a07799298efd51bbd7e23ca1d0e4bd49a7e3353a4d3858a7c65068312bf87fb44d0f16ac693ec2054a4c0334bb6492d618e8b691a94492c5585294cb0015147071b0949467421295b852baaa95ca4ed5ae942b8e6dd79c2a833105424794323b19f37ea0498b78445b56090e03b20859f0a278be70390a0b21266cf77c1e63f6fb0a480c4886b33fb98cd75d09be850fece8c0774e2494a7fa44dd76fade6fe3d8d2cf51379edffc4128cd469d10bfdd6d8e7daf3b30dcf428bdb1d3a80692d84785c6c2b25dbdbca839f6bbabd7649ce6efb85ae6684120f8e7b88b34b80b112b3cbc0100ae1cd27a020000",
    ],
    [
      "ETag",
      "Bz0tJ/rXOQn4mWTNsGwkTA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  LOWER(`purchase`) LIKE ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-98-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "30",
      "10fd2b91272490fa9196b4692b21d69500d14a5ad2948e4d53eb384e302471b01d5085fadf774928d0b181142939df7bf7ded9e73ca13b960668807c16dde754acbfdc721fd510553882d51fa78be9456686d3f3c4bc4c9dcbfecf2cee3d1e1d0182152c89932ca675c97341a81ccc678d48f03cc382f33a14aaf77bf556d7d0dbad7657d7cdae013c49e370ccd23b60df2895c941b3b9d56e449c4731c519930dc29397f5e643bb99097e4b8992cd5dc926a8c8e6c7a2c7312758319e1ecd67602097542c6982590c165e9981ff75b77483e1a41101f881118a09e179aa0a5b5082f03464512ecaaa68f0844a9b6f3ed0cc1a5b234f5b094ab808962c5869586acb657657d34693b9e3edaf7052545c1d14896da09dba930b6d9581811b2ca95c698b73cbb5346d3c5958eefe4b025863fbbba51d6b43e744db91b11d6dee38d6ccd3f68f0fb43377329f6adfaedf42a081804ac5d2d2be87fd9816d69f77d87e7fae05012b90ad924b53efe2564feffba16f92b077d8f1439dfa7ecf373bf8d0d749dfa046e0530c3c55542f5938e569d708f58e11740edba64e3b5dbf03e41631b1a91f066d4ccd7eabeb8750116d6ae85130454f98ccb864d536a3856b7bd6d273e7ce68e859651b21ce637552992b9a78eb5341934b5d6f01f083de36459671502bcecd763ccb1d8e3cfbcaaa46654c234cd6b37b189610c792021a0b9c5045c5050f60e3d07432b33d7be20cc7c028cf7fba454834f8f5f44af0d659b9d3aa7ca399e7dace5969608bb8c2715e421eaa0fb487b36c0f6d36b5ff9719baeef01aa4b11078fd570eda814bb7f9a744892fa3cae656b2850ab56dd4de898c9da88b36bf37f0d4105cbb4a195dce2df71a554b2e0da9a029f97cbc005c263efd7b6caf3260e132838c5410c3301359881041aba166",
      "49d9ca33bba79bad620c002cd4bb5caf6d6c4faea85154a4094dd57347d5552e37b148e5f20504499845a73cc4cd1fbdb664204a050000",
    ],
    [
      "ETag",
      "XFWPMp7fPHm7QnNQ9Zpl8w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-98-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d904f4fc24010c5bfcb786d93b61644120e601a21a944aa8483216429432dfd3375778b54c27777b698c6c48b97dd9979bfc9beb767c8d2720743d8a6c9478db2b949502f4c11a1aa73adf8aaa8540816a0160993d93460f9f4b55835d9d36995f60e6e6f301e8d9850f13b16028667d8a798ef140cdfce508a02796db3a932467453996e367f0d1e83880705edcc60be0cc3f1240ce062752ba2a0bad4ff5a5a5f2c38d036c23d4a2c63341e2a49078cf5ccc453a2a872b415d53246052ddc0a89a4ba1292c8e6897d3fb0ddbeef78aed7779cbbbecf604eb1d02995cc2e5fd81d68d2228fe893d3c12d03b22d39e8be3d8f3cf6da14c71630d67e6b6ea7797f34bfd35ca3ad7f1e9b341ad5b32476aed09876ae011ec884d21c56cb1a2d8805ffff34d5d7fef20daf972977dc010000",
    ],
    [
      "ETag",
      "kHEeryxzQWykMxWi5j158A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "1d",
      "d0",
      "c9",
      "72",
      "82300000d07fc9591d41b6f46671b0051408c87661429a010b96252c01a7ff5ea79ff0de1360422863d9d054f407bc81058b704776f9fe184ffb35702c5e553d34d3ab5e30f37bca880d5564d61faee091481ef7eca43b646c6f65154ad1f12b5104adb43d6fee6a143b9ee063d1571cb4689754f14551c663765726262b63e99e1633502395e7cb60df0c5717088fc3b46c3ea92baf6aa84fa1b056911299739dd213a9b0d8f8066ea5e25cd483754d2052bd4766779cd48134a3731118e3d0236fcd19b26dae75e22871126e1f5659c4f1451aa85126e7787b9060ae810da0bcbdf79465f797fb2043b801ff09d9b0b4f435f14e714f7bf0fb07b786b73323010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:01 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-99-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85536b4fdb3014fd2b95f795b609247d49d5a84a18d9da74a429689aa6c8766e82218d43ec7420d4ffbe1b873210127c8aed7bce3de73ef244ee449190096122bbafa17afc722b193922a06986afd670fef0903b3f1ebefbae4896d49ddd9cef2ea753448886a5e8b6cca1ab645d715093cdba9755b22e692565171375c7e3ae3d70ac63fb786059c381833c0579ba10c51db26fb42ed5a4df3f68f73229b31c6829548fcbedcb7b7f77dc2f2b790b5cabfe5bc93eaaa8fec7a25f73c9a916b2986ed668a05650c5b0a522470bff99093b7d9bba27e8b6972178273850ce655de8c616a6e0b248455657262b993c1163f3d581acbd85378f3a5ce6f5b6880bba85a34e42358df563099df370b5ecf8c1f92a5cce227f15c4ebf985b79cf5e6abc56619ac3bd7175ee875346539186e67da3935b7002fa89f80d2a230ea51f3dc283f37c87f3f968680d20ada603cb406d41e596396b2214f47272e4b2d606cc4862e3d61161f3be0240c28f28ca861d14216dc4e072c3961311fdb56ec703a8aa9cd20761d6ab1145cd7b506647f44fe5642c39950a554a2ed10b90efdc88ba37013cc6791674a48699debb3d65853c06b8f1a0b8c2dcb46e00775ed9ba890a8d6b4dc0f222f9ccd23ffca6ba7bc808cf2c7f53dce39a5b90244d30a1ba8a15aca049b4682d9d23b43b099dacf435091c9ef27d2f4bd71f2aaed2ff40887d858d6e64bd651e807df8c9d03e28ae6b581ecda0329d1f20dd687aef77f10898bda6621971b2ffc45daa71052a8a0e09f4f14c126f0e9ff76587ec4e2faa38cd278c7fde1aa11e115b47b244cb907f6c8769c3131e04abf8bb943fbd0b526479311b650e8e78adae5c7425bb15abd8030882b10986eedff01d0143c7a7c040000",
    ],
    [
      "ETag",
      "07Cxxl4KxJI5idMa5AhFvQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-99-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92dd4e83401085df65bca5096d5ab424bd40db2ab5f617f5c298660b03a2c0e0eea2699abebbb358ab5113bd8199d96f863967d9c2535a44e0c23a4d9e2b949ba304f5dc040b5455a615bf4a2a148205a845c264723bcad69de1c019f5e3e9e58d109de1853feff59850e103e602dc2dc429669102f76e0b85c891db42caaabc58d599057a539ae23258f89373ce738a4c3eb91e8fbdd3f10076d6a131125aac6afe1f6df73b0b1e69bdc0182516219a5d4a498f186adfc854222f336c28aa64880a6ab83e482455a590440dae34badd46d369dbad66cbb1ed63a7cd6046a1d02915cc5e2f793fd0a445b6a05756090e03b20e59705c3f5fb89c46b51013fa9380c798fdbe02124392d1ea4faee4751f04dfc207b677e03b2772aa0a7da086e3a9f7db38b6f47354df0b063f08a5d9a80312f8578365e05dcd0c77bf977ebad1a86692d84785c6c2a6dd3ee91c3bf6bbab67649ce6efb85a56684128f8e7b84835b8b1c814eede008be000017a020000",
    ],
    [
      "ETag",
      "gWJlb5FE6JDfOKVaa5FHIQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  LOWER(`purchase`) LIKE ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-100-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85548f4f9b4014fe57c82d269af407604b6b13e3baca94add20a546396a53de0a8a7c0e1dde1d298feef7b1ca2766e33218177effbdef7bdbb773ca17b9ac7688442ba7e2809df7cba63216a2122f11a56fd2bd39d934d7e3ed5c779f76cf2edaeb4f4cbe36340d08a257056a4a42d58c92322460bbfb3e6ac2c3067ac0d85da86aeb70daba79b8669e9fac0ea0151903499d2fc1ee8b7521662d4ed36e29d3563eb94e0828a4ec4b297f5eea3d92d38bb239114dd5dcd2ec888ee07aa27298bb0a42c3f5ef8e0a014842f4986690a1e5ea971f879b77687e2acb306f0238d088e2256e6b2f20525229627745d7255158d9e90f2f9e603f9f6d49e04da8a9388f17849e3958685b65c16f72d6d325bb8c1fe0a6755c5d541956802edab37bbd0560518b8c5828895767d6e7bb6a64d67d7b6b7ff9200d6d4f96e6b27dad83dd576641c575bb8aeed07dafec98176e6cd1673edcbcd5b083410132169aeec07384c4965fd798b9df7275b11b004d93ab91ce8163686fa5198848328191ef6c3442761380c077d7c18ead1518ff4e29060e0c9aaba62e19ce5562fd1fbbdb87f680e74d2b7c23e908d688007fa616c62323832ac30818a68db42bf3895e4948a82095a6f33baf69cc05e06dec29d8c035bb591e03295a7b5b9aa89b73e2534b9d4750380ffe96d5b652903b5eadc1c37b0bdf12470aeec7a54a6648da38dff00c392e0541040638e332209bf60316c1c9acf7c277066ee780a0c75fef30621d0e8c7d32b21d8146aa7a57a233ff01cf74c19681057382d15e4b1fe407bb828f6d076dbfa7799b1e78d6f401a738e377fe4a01db875dbbf4a28bc8a6a9b8da4812ab5263277a2de4e64a1edcf2d3c2d04f7ae5646970bdbbb41f5924712c2491e7d3c5e0056898fff1fcd5d0630dc66d011126298e648542a1127f554d34cf5f2cc1e9ae670881498cb77b99e61354757d5a82a928ce4f2b9a5fa2eab5dac52a57801411286d155a7b8fd0d24c82a184d050000",
    ],
    [
      "ETag",
      "SV2NPeynHL0An/GCJju60Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-100-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d914f6bc24010c5bfcbf4d80492182c081e6a093560a54deba11491358e6934c9a4bbb3fe41fcee9d8d450abdf4b2bb33ef37ec7bbb27d896cd0a06b02c8b2f8bfa785320bfb84386c6566c646ba931081e20ab42c8a8676f93edf849f792c3b28a6c8aeafdb01f0e8530f927d60a0627589758ad0c0c3e4ed0a81a656cb168b782f0b175553a7d4b1e934c1a35ad5c633a9b4cee479304cede7544d5641bfed7d0fcecc1869619ae516393a3f3d06ada60cea98b6754dd56e81bb23a47031ddc098526db2a4de44bc70f83c00ffb711085513f08eefab19015e58a4b6a049ebd8a3d60625565b49778d01340774749baeed69d7ba32ec6ae039cb7df5a78d5a23f5a7cd542a7cd7f2e1b1d19cdb326b16ed0b90e2e091ec8a56249cbdaa207b9920f18977ca9cfdf3147e6d6dd010000",
    ],
    [
      "ETag",
      "23u+EkHMr3Exbl2uIeaYxw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "ff1dd0c97282300000d07fc9599db058a437189116459661bf64421a05e9b08425984effbd4e3fe1bd1f8009a1e388a6aea12d78074f2ceb3bb22ba1912d50447e9d11e2cd4a6b8cacb51efc74663c13c9726cd62da5124ac59574f1256ff32eb486292e4acf8e84e4420995702ae4ab9d6e3b4d18a5e2a86e1f4f9fb7a4fcb662d39817cd72b986f9e4b06cd48c2e1fe4dac401714c39b0e78885c1c36e20c16735a89c849f62b93f7d596b990f61da54cade2474ef75b0880e779d6b878b46a58f8b0dab37736e49a5ab673e1649ef2ff0ee0d7c154f3d378ee886125f26381616d800baf635a323aa5f6e65afeb1bf09f80a6674f5f1326c58c32f0fb07552e8e6623010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:02 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-101-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85535d6fda3014fd2b91f75a20819400125a11a42d12843509ada6698a6ce3a46e93388d1d2a54f1df77ed14d46ed2fa14dbf79c7bcefdc81b7ae6e50e4d10e1d94bc3eac3b72741d005620a67f09a8945ba7b8c69f1fa1a85767f4f0f3742dc4da780e09a257151e5ac234553532627dba89bd5a2a9702d440712751cdbe93843d7ee3bfda16d7b43178892e5e98a97cf407f54aa92935eef24decd84c872862b2ebb5414e7f7debedfab6af1c4a892bdcf9a3d9091bd2f54bfe78262c54539dd46e0a091ac4e588179ae4b3c5377e4ea73ee2ec7453703f09e538629154da9b42f48414599f2aca94d56347943c6e787038afc953f8f2d2af2a628931217ecc2da61851375a898751d6ed6d632b8de84eb59bcdc044934bff5d7b3ee7cb3daae83c87ab8f543df5298e4cc70ada975656e015c407fc7a4e2a5518ff5b3567eefd0f2dfc16802484bd60613cf1e6267648f494a3c9a8e069724b5192123e25de201b1e9d865ee8e300c3c236a58b81425e9a7ded81ba48947ed41e27a03271979649c30465c4231718783313a5ea0d79a2bb6e0b21292b71d420fe132f69338dc06f359ec9b1252dce46ad11ad3057cf4a8a0c0c4b61d00fea7aea38e72016abae5cb20f6c3d93c5edefbed94572cc3f410bdc09c539c4b06685c430315abd762074d43c16ced2f006ca6f6e3149468f2eb0de9be6b271fda7ea6c730446d59992f8ae27019dc183b27c43dce1b03d9b7075481e547a80f5c1f7f031236b5cd82eeb67ef813b54f214b59cd4afaf544016c025fff71a7ed0730ec3fe848057758202ab50aad59bb48dcd47b628ffae3b1870cb8567fc7068ee39edaa673e88cac60a57a2fa9dd7ea8b4156be4190441d881c0b4ebf807ea3577f17f040000",
    ],
    [
      "ETag",
      "goDfdhTcmwwSR02vcyGooQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-101-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f",
      "83",
      "400cc7bf4b7d9425603634243ea04ec5cca98ce98331cb797488c295dd1d9a65d977b7873a8d9ae80bb4bd5f4bffff63054fa5ca2182fbb258b4a8975b05da2b17a468daca1a7e35a40c82076845c1e42255fafae96c30589c25f2663b396e63f552ecef3361e403d602a215cc4bac7203d1ed0a94a891db24556dad665de6815d36ae38c9d2647cc2794db9cbc7d3d1283e180d61ed6d1a7361c5ace3ffd176b7f6e091ee539ca34625d1edd2687a44691327d388baa9b067a8d5120d74707750686a1ba1897a5ce9057ed00bc2bebf13ec84bebf1bf699ac480a5b9262783ae105c19215554a2f2c1342067417b2e279f77ce67299774a5c988c331ee316fc0a6894a4f3d99f5cc3fb3e08be860fecdd82ef9ca8a95576431d8f2ee2dfc6b1a79fa38ee26cf88330969dda2059723e9c64f1f9a5e3eedea51f2c2d9a4b4d6ca441e761e0f7f706bba1ff66eb2139abf93b91d52d7a2005ff1da7a585682e2a83eb57ee727ef87b020000",
    ],
    [
      "ETag",
      "qRnrVkJ55qJIcW+IFuAnwg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  LOWER(`stamp`) LIKE ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-102-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffd5546d4fdb3010fe2b96f705a4beaf2a5527c40acd58b43629490aab106a5dc70d86260eb6835450fffbce4e0b746ce3f3a448c9f99ebbe7b9f35d9ef13dcf62dcc30b9e3c144cae3fdd8905ae60a64902a7a1cecf9f029eaad1d3e092fd5c88c4a777c9f13120b8895224cd57acaa44212953bd49584ba428722285a842a26ab3d1aa363bed46abd9ea341a479d36042ab65a0e79760fe1b75ae7aa57afefc86b8910c98a919cab1a15e9cb79fdb155cfa5b86354abfa3e671d6854fd03d69395a04473911d4f4250502826672c257c051a5e43e3c5d7fddc354ed25a02e0474e19a154149936ba200515d9922785b45971ef195b9d6f3e70e80c9db308cd25a342c6331ecf11516836cbef2be8cc9f78d1c19ca426e3fcd0387606fa16f82334cf41c02d514ccdd1d5772770101afa574e7030571a2442c8d0fde1a013d4f706688fc3f5d0c4f39c3042072787e83cf02763743a7d0b01f5315b9262a50744038536aae3f2d33597aa99d2b346a309c06dd3ddf7778d37c6cb85e4da54eb7a9113f4cf22f7d2291b3c6409a1ebf0015abc242bc5004d244999667224620621633f7423d7f7fa4388b05d1bef100af7ae9f5f03a275ce8c486ddf387247505f7f34c69b4de5efb07e10f4a7909a4849d6bff9402ecce266f346d52559151662f1d62a653c960edcc4866d67b5f6acf69ed5c19b9b0d3c150cd35832e38b89134c717914b025932ca396ee1f2db660ebf878ab76130e609871e08141d15c694e9561a1925977c4535bcb36bafbf9a8dbc0162cf53b5fb7dd32bf822cfea367cb51d8fc4c4a2103a660aa8c096cca6ae1193485c7177629f6543e6c8f52a614494c7a4fa094687acbb304299e64905b32b414122d8b8c9ab07209ec11914991b24c2373a3aa875e86a286c222cf85d42c7ecd0280727fc22870bdf3c32f5bf3741a3921ec9f46d7cd5eb779638ab2a59457ffff9671535e8ed133f03d0746fd178fbf15f6ea050000",
    ],
    [
      "ETag",
      "StpGzRimsMzDVeXbogOcjg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "ad4e24059bee2056d15a1141c1552660108c42f87f9cdebd4eaf51df1dde03b030e46549ab4cf0147c809e2978124e02a8fb0d1c5c6b7bedf12686bea26416d30a96d268e79dbe601c416fe51867cdb55bcf5da159bcd623bedb10fb6cfb1e5ecb79eb04a40a6caf739697e9f7990a7c37f71119c491986a29d10db5754d664e7e9f47c458094cc85b1eb975772f90c4756b9b2955141e1ca6832acda1b9e437b1c949df37ec324bb16039818bfdcdde6ac149cd0ee951d79cf69a1c977a1aeadd320c131e18e81dc76d4efda914e331da6d33d7da57cee7024e5e5efe1d3002bc9349c14b9a3cb72315e311f8ab4fab5ef2e77f83b38217e0e71788f3c5ba19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:04 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-103-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "7b5c1320a190448ad628a56bb4842c84b49aa60919e742dd124cb0e9d656f9efbb98a66b55697dc2f63de79e733f782277bcd892114978b6afa17af8742b12724240d10c5fff5477c3abfdea9b508fab47d3ae3f179bc7e96a3c46046f5892eeca1c3a52d4150339daacbb5925ea925642743051c7b6fa1ddb75ac9edd732dcb731d244ac8d3392fee907ea3542947a67914ef66426439d092cb2e13bb9777f3be679695b805a6a4f956d34419697ea0fa25178c2a2e8af1668d0e6a09550c3bca73f4f08fba4dcedee6ee72baeb6608bee70c2863a22e54e30b533051a43cab2b9d958c9e88f6f9ea40d6fedc9f46061379bd2be282eee0c4d8524563f5508271112e17c62cb858868b49345b06f17a7ae92f26dde972be59046be3fad20f7d43d12407cd35c6c699be057841fd2d48c50bad1e35cf8df2738766ef07d310505a421b8c3dcba5f6c01a2669e2b174d03f4d520b92649078a7b49f586ce880b34d80224f8b6a162d4481c1edc075d23871fb69ec4002f1c073edd8f686d866180e98e392c309f95d7105e75c9642f2b643e43a9c457e1c859b603a897c5d424aeb5c9db7c69a025e7b5458606c593602ff53d7a18972816a4dcb6741e487936934bbf2db29cf21a3ec61bdc739a7349780685a610315540bb1c5a69160b2f0cf11aca7f6fd189464f4f389347d6f9cbc6afb0b3dc221369695fe927514ce82afdace117145f35a43eedb0329d1f20dd687ae0fbf10899bda6621ab8d1ffe20ed5308295450b08f278a601df8f88f3b6e3f8271ff51472abce30231d9a8b00ada45e2bade237be0f46c8f6870a5dec5fad6f0d8b6264793117650a8e7",
      "92daedc74a5bb15abe8030883b10e8761dfe020c0a45f07f040000",
    ],
    [
      "ETag",
      "xrk9VqQKotzQz/1u+nUzCQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-103-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92614fc2400c86ff4bfd3ae2401c64091f4041898008c39818428ead8cc1b68ebb9b4808ffddde44346aa25fb6b6f7b4ebfbdef6b08ed2005c9847e12647b93b0b513f9860842a8fb5e25746a942b000b50899545567dbf1eadbf3f1a6fee8adeff2a7c9eb266c349850fe121301ee1e1611c68102f7790fa94890db7c8af3249d1599057a9799e2d81b7507379c2714987c30e9f59aad5e1b0ed6a931105acc0afe1f6dd383052b9a8f708112531fcd2e99a415faba6b642a9164319614e5d24705055c1c8492f24c48a212574a65fba25476aa76a55c716cbbe654998cc9173aa294e1c99817044d5ac423dab24c70189045c88a17c5f385cb515028316177e0f118b3e05740a24f3298fdc965bcef52f0357c60470bbe7322a13cd527aad3bb6ffe368e3dfd1c75ddf4da3f08a5d9a913e275fbedb1d7ec0f0d373d4a6fed34aaa1243652a1f1b06c57eb9735c77eb7f58a8cd5fc1d57cb1c2df005ff1db791067721628587370da8bbe97b020000",
    ],
    [
      "ETag",
      "s46wFT8w/Sq8VTkKuXUxqg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  LOWER(`stamp`) LIKE ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-104-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ffd5546d4fdb3010fe2b96f705a4bea5eb3ad609b196662c5a9b9424055508b5267182a18983ed74ea50fffbce4e0b94bdf07952a4e47ccfddf3dcf92e8ff89ee531eee11b963e9454acdfddf11b5cc35491144ead68309874cf56c9ecc21badde0fe3493afcf9e3f818104c474992154b5a97bc141195bd69d048052f0b2238af43a2bad5ead4ad6ea7d5b6dadd56eb63b70381922e9311cbef21fc56a942f69acd1d7923e53c5d525230d98878f674de5cb59b85e0773452b2b9cfd9041ad97c83f564c923a218cf8fa70128282515739a11b6040dcfa1f1cd97fddc0d46b2460ae0158b2889225ee64aeb821411cf139696c264c5bd476c74bef8c0813db24f43b41034e2229eb378818844f379715f43a7ded40d0f1624d3191787dab133d057df1ba34501026e89a472812ebfd9be8dd0c8bbb4fd83855420114246ce771b9da0be3b447b1c8e8ba6ae6b07213a38394467be379da0c1ec2504d4c73421e5520d89020aa555c7d5a7a32f5551a9e6ad9605c06dd39ddfef1a6fb49771c194aed67143dbef9f86ce855d3578445312ad83076871429692029a08925145c598c71442265ee0848ee7f6471061ba36d92124ee5d3d3e0784eb826a91cabc71e88ca1befe7882379bdadf617ddfefcf20351182ac5ff9402ecce266f342d50559960662f0c6aa64ac2a07b6b066db59ed3dabb36775f1e67a034f0dc33456ccf87c6afb335c1df934a182e691a1fb478b0dd838dedeaadd840318661c78605014938a4552b344821a77c83253cb36faa8f3c9fa800d58a8d7be0fad7657ff0af2f88f9e2d4769f25321b8f0a984a9d226b049a385e5d014169f9ba5d853f9b03dcaa89424d5e95d8e32a2a25b96a748b23487dc82a2840b949479a4c3aa25304744a465467385f48dca1e7a1a8a060acaa2e042d1f8390b00aafd0942df71cf0e3f6fcdc12cb403d83f85aeacde9175ad8b32a55457ffff96715d5d8ed633f45c1b46fd1772cf000fea050000",
    ],
    [
      "ETag",
      "1cBBP6GvfYVOLv3DdPgDzw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "1dd0d17643300000d07fc973db530cb137944e69a76a2d7bc909d20c55114e919efdfb7af609f73e01ce73d2f768686b7207ef60c6b2b1ca57d9da4c1e6b11ef3bc1b54b2065bcc188ba492294af6c70dc5a3f437e9785644d2d2d757aa9e7a83ac48d5c1dd7bea9683deb429b761f2869deb6d86e2f9b48ebb71b373491d6fbb102533d5d52af4291de3df6a23c8fc1f5fab32b824f56c48638603ae964e241226a1292c863f5618462bc15adb0764b4f55a1d4c81afb6ee4ee34486ea9c3663c9e38dab7b7899c54169cb1836c85aac7796b46e3e8407f99ba5a51311a46766a40b000646225273d2a5f6e45358c05f84f40c3ccc86bc22298130e7eff00a7a1a51523010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:05 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-105-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "535d6f9b3014fd2bc87b6d02349040a46845295dd1025981b49aa6091963a85b8229369daa2aff7d17d374ad2aad4fd8bee7dc73ee07cfe89e35055aa29c550f3ded9ebedcf11c9d202a7105af57d21271edc8c0d3435326dfddddadbdf0562b40b08125f0beade944f0be23542c77c9b4ea78dfe28ef309249a98863d31e796716a9ece0d6331b78028685d6e58730ff45b295bb1d4f5a3f8b4e2bcaa296e999812be7f7dd71f4ff5b6e3779448a1bfd7d44146e89fa87ead39c192f166b54bc0412f6897d13d663578f8472df2b3f7b9a70cefa715801f19a19810de3772f00529086f4a56f59dca8a96cf48f97c734089bff1d7a94678ddef9bacc17b7aa21558e24c3eb554bb88b7a1164417db38f4d2601b65c9fad20fbde97abbd98551a2dd5cfab1af499cd75471b59576a66e115c40bfa042b246a9a7c3f3a0fcd2a1e0e3600602480b3a06b38531c7a663b879992f48e9ccecbc34689e3bf9c2c6b3dc20ae45ad22a718784a54b170c31b77613a0e2e9cac5c147666e1c2ca7292975939b70dd39d95ae53ccd0e104fde998a4e74cb45cb0b143e8260e523f4be35db4f6525f9550e2be96e7a3b1a180b71e251498198609c0ffd47518a28c83dad0f2204afdd85ba7c1b53f4e79432b4c9e92079873896b41018d3b68a0a45dc80b681a8abcd03f07b09ada8f6350a0e5af6734f47d70f2a6edaff41486385896ea8b92340ea26fcace11718deb5e411ec7036ac1f22dd407ae0fbf01099b3a6641573b3ffe89c6a79896b4a30df97ca2005681cfffb8e3f60318f61f7484843b2c1011830ae9e8b8484cd57b643bf6cc75900277f243cc72cd63db861c4346baa78d7c2969dc7ea87414ebc52b0882b003916ad7e12f5133f9eb7f040000",
    ],
    [
      "ETag",
      "Qt4sRl8tIA/M1tSK9Uh57A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-105-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d92514f83400cc7bf4b7d94256cd9d090f8806e2a0b9b93617c306639a1302650bc3b5c9665dfdd1ece69d4445fa0edfd5afaff1f5b78ceab045c78cab39706e5e628437d6b8210555368c5af9a2a8560016a9131590cbd203b1efb93b17ab90f4b7fbeaa97e9faec8c09152fb114e06e21cdb14814b80f5ba84489dc1653d194d5a2cd2cd09bda14e751e84faf382f2931f9f42e08bcf360043bebd098082d162dff8fb6c79d052b7a0a314589558c66975ad20a63ed1b994a9475811d458d8c51410bb70799a4a61692a8c3954ed71e74ba4edfee757b8e6d9f387d260b8a85cea962f86ece0b82262d8a90d62c131c06641bb2e2b47dbe72394f5a2526f4a7118f310b7e0524c62493c59f5ccdfb2e055fc307b6b7e03b274a6a2a7da02e831befb771ece9e7a8a1178d7e104ab3530724f227a379e44d66867bdc4b3fdf685433496ca442e361d7ee9f0e4e1cfbddd60b3256f3775c2d1bb42016fc775ce71adc54140a776f00cd2a6b7b020000",
    ],
    [
      "ETag",
      "lDALg+JIMJsqWRmISjphfw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  LOWER(`amount`) LIKE ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-106-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ffc5547f4fdb3010fd2a96270448fdbdaedb2a21564a60192529690aea26d4b8891b0c491c6c87a943fdee3b3b2db4838d3f27458acff7eedef3ddd98ff88e6511eee2198bef0b2a16ef6ef90c5730552486dd3375d1bf6237feafd36fdf2379d9a72ecbeb3f0f0e00c1749424699ed0aae48508a9ec8e47b558f0222782f32a24aa361b9d6ab3d36eb49aad4ea3f1b1d386404993f9806577107ea3542ebbf5fa9abc16731e2794e44cd6429e3eedd71f5af55cf05b1a2a59dfe6ac038dacbfc17a98f09028c6b383f1081414928a294d094b40c3736834fbb29dbbc6485a8b01fcc0424ac2901799d2ba2045c8b3398b0b61b2e2ee23363a371678640dacbe8f0241432ea2298b0244249a4ef3bb0aeabb63c7df0b48aa3306fbdab136d089e79ea320070137445219a0abaf9667213470af2c6f2366609f59e810f59c63b445623b68ec38d6c8477b87fbe8d473c7437434d98480fc88ce4991a863a2804369d951b9b4755715956ada683401b8aabafdb2d978a9bd8c0ba6f4716dc7b7bc5edfb72fadb2c2031a937031ba871acf492229a089202955549cf38842c8d01dd9beed3abd014498b20dd70889bb3f1e9f03fc454eb54865fef864e0f67c98a5e546ce4b921406f3502ef04eb3f6a1bd8397cbcadf13f53caf370172220459fce18303698a57390cde58a5d03567136bb6b5d5dab2da5b56072faf97f055300c6cc98c2fc69637c1e59647e754d02c3474ff6882011bc7db176f7d09000cd70078a4025b2a164acd120a6adc3e4bcd5956d19f3aadd67b6cc042bdf4b53febd7228b5ef5ac380a939f0ac1854725cc9d36814d1a2d2c83a2c06b52c1299592c43acd3883a3484a6609456632d053135010209621dd2514f893a1355d8d435041472442112f74942974179553b0b6764b73570b3372caf6fd5f29d7659134d7b1eb583072bf016464781395050000",
    ],
    [
      "ETag",
      "KtQCWihTzGJZdsVCeOip/w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "1d",
      "d0",
      "cb7282300040d17fc95a1c04d1c11dd1f800a9c843c10d1368a4a14843121070faef75bab9eb3be705709e132152f9f34d6ab00203d6cc693ecd542beed43174bf90d1887a1ff8c81f769877579478aca49b790d472951d1e78bb5d7564ae766076ea0bda50c2355cfb2ce2f4c6fd7cbc3f891d25a49aab3bd2d82eb56d5ee78e6648d18dd6e40c7b36e53cfcb602c17771f3a47dc16fae229deb1fb7b33f7fb076b8ae81475a595cd9254b8cdc52e37560a9791a5ab5c3b4805ed3faba3e7545c3f75cd8d425a3a496bb2f6718d764908cd20f6b36d61687160b01bccfd130ecbf4092680f48c7222de7b60a51ba63901ff08a91c18794b408239e1e0f70f9ea710b523010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:06 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-107-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "fd2bc8fbda04c8039248d19aa674cd94908e9056d33421632ed41d608a4da7aeca7fdfc5345dab4aeb276cdf73ee39f7c113f9c5cb84cc48ccb3fb06eac74f772226270414cdf055c255b1bc482ecfce1291fcb1d3edf6ab6f2ee67344f096256951e5d093a2a919c8d97ed7cf6ad154b416a287897ab6e5f66c67640dec816359ae3342a2843c5df3f217d26f95aae4cc348fe2fd4c882c075a71d967a27879371f0666558b3b604a9a6f354d9491e607aa9f73c1a8e2a29cef77e8a091504750509ea3877fd4243e7d9bbbcf69d1cf10fcc01950c64453aad617a660a24c79d6d43a2b993d11edf3d581ecbcb5b70c0d26f2a628a3921670622454d1483d56605c04db8db1f22fb6c16611aeb67eb45b5e7a9b457fb95def37feceb8b9f402cf5034ce41738db971aa6f3e5e503f01a978a9d5c3f6b9557eeed0eafd605a024a4be882916b39d49e58d3388d5d964e86e338b5208e27b13ba6c3d862d3118c921828f2b4a866d152942c81e964e4d22819da71349a0e93888e9c61048c4e686a0fc6c9d8258713f2bbe60aceb9ac84e45d87c84db00abd280cf6fe72117aba849436b93aef8cb505bcf6a8b0c0c8b26c04fea7ae431be502d5da96affcd00b16cb7075ed75535e4346d9e3ee1ee79cd25c02a2698d0d54506f44824d23fe62e39d23584fedea189464f6e389b47d6f9dbc6afb0b3dc421b69695fe925d18acfc2fdace11714df346431eba03a9d0f22dd687ae0f3f11899bda6521dff65ef09d744f01a45043c93e9e288275e0e33feeb8fd08c6fd471da9f08e0bc464abc26ae81689eb7a8fec89e33843a2c1b57a17739df1b16d6d8e36231450aae792baedc74a3bb146be8030883be0eb761dfe02c96376077f040000",
    ],
    [
      "ETag",
      "sePmCFdHBBdodz1fOOJN/A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-107-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "83",
      "40",
      "0c",
      "86",
      "ff",
      "4b",
      "fd",
      "284bc04ca624fbb029eacc36276389895996130aa240d9dda19265ffdd1eea346aa25fa0ed3d2d7ddf63038f591983077759baae51367b29ea6b1304a8ea5c2b7e55542a040b508b94c9eee1c23fbe39bf79b99c5693602d9c937abf49fb7d2654748f85006f03498679acc0bbdd40290ae4b688f2ba28576d66816e2a539c87c1687ace7941b1c9a78bf178301cfbb0b5768db1d062d5f2ff685b6e2d78a0bb00139458466876a9243d60a44746a61245956347512d2354d0c2ed412aa9ae8424ea70a5e3d8bd8ee376ed03e7c0b5ed9edb6532a748e88c4a8617735e1034699107f4cc32c16540b6212b4edae71397b3b85562c2d134e43166c1af80c48864bcfa93ab78df7bc1d7f081bd5bf09d1305d5a5de5167e3abc16fe3d8d3cf51a783d0ff4128cd4eed907034f1e7e1603233dcf25dfab0d1a86692d84885c643c7ee1e1df65cfbcdd6133256f3773c2d6bb42012fc775c641abc44e40ab7affd5a251d7b020000",
    ],
    [
      "ETag",
      "45UE9XGXxJNpMRqa1Cu+yg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  LOWER(`id`) NOT LIKE ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-108-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "54614fdb3010fd2b962704486dd3745d6195102b25dba295a44b535037a1c64ddc6048e2603ba00af5bfefec50a0828d8f9322c5e77b77eff9eeec077cc38a04f7f182a5b71515ab0fd77c811b982a92c2eefde7fcea176f074b6be0c5364b989d0de9fdd11120988e92242f33da94bc123195fde9a4950a5e954470de84444dbb7dd8b47bdd76c7eef4daed835e170225cd962356dc40f89552a5ec5bd686bc95729e6694944cb6629e3fed5b771dab14fc9ac64a5adb9c16d048eb1dd6e38cc744315e1c4d27a0a09254cc694e58061a9e4393c597eddc2d46f2560ae03b165312c7bc2a94d60529625e2c595a099315f71fb0d1f9628127cec81986281234e62299b3244244a2f9bcbc69a0a13ff5c2bd88e43a63b4af1d1b037d0dfc33149520e08a482a2374f1dd091c8446fe8513ec4590671f797e8846ee0f071da381778ab6485c0f4d3dcf998468ef781f7d0bfce9189dcc5e42407e4297a4cad42951c0a1b4eca45ebabaab8a4a356fb76d003e56dd7ddd6cbcd65ec60553fab8ae173ac16018bae74e5de1114d49bc9adc428d97249314d044909c2a2ace78422164ec4fdcd0f5bdc108224cd9c61b84c4fddf0fcf01e1aaa45aa4327fcd0593b47e91f19c649541dcd50bbc637fdac1eb75e3ef490641309801311182acde267893c1e08d558bdc30da58b36dacce96d5ddb27a787db986af8161586b66fc73ea04335c6f057449052d6243f78f0618b071bc7fe9361700c0700580472ab0a562b1d42cb1a0c61db2dc9ce531faf0a06b1f600316eab5ef6347bf1445f2a6e791a332f9a9105c0454c2cc6913d8a4d1c20a280abc240d9c532949aad34c0b388aa464915164a6023d350145116205d25d4251381b3b73d3a9a8814e48021ed5eb2253e53ed203b059ef6a63572b323aeabefd270d97755934c9a9ef3930647f00f903f2d783050000",
    ],
    [
      "ETag",
      "w9mhZo0Rf/ANc1idi1lCew==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "000002ff1dd0cb7282300040d17fc95a1d26880edd5524a80da4115a940d83313c8abc120a814effbd4effe0def30312c6b89471df94bc062f604aa0b962ab9bf67a19b43920654ae6eca0665cdb9f6de7d0250b77b67e828f7b7bd48a6ac93c2bed474436c2ebcaefebe54cf1ed51fa96dff0eb945539bdf859b7d5c81211d6735dae11342a94631ce3716b857a74f7dd7a8c08daa80045c3dce5374f9c6294bf3b54355be1495a57c6e16393afdf82437597d9e3ec52fb38ec2d3f745d168630eb126c2b1e45f05930e810a5821247757c68da5ae5a38930f4e5d74ea6531d9f1cba378a808105e0aa2d049771f1fcd60dd35c807f84b89f5afe94d8f14470017eff00a456fed123010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:07 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-109-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "fd2bc87b6d1242484222456b94d2355a423620eda66942c6b950b7802936a9b22aff7d17d374ad2aad4fd8bee7dc73ee074fe49e173b3225314f1f6aa80e9fee444cce08289ae22b1b8c7fdc59fdc9425ed9e54dba3fd8eaeb9f743643046f5892e665061d29ea8a819c6e836e5a89baa495101d4cd4e99b934e7f649b56df1a99e6786423514296ac78718ff45ba54a39edf54ee2dd548834035a72d965227f79efedad5e59893b604af6de6af65046f63e50fd9c09461517c56c1ba0835a4215414e79861efe5177f1f9dbdc5d4ef36e8ae03d6740191375a11a5f98828922e1695de9ac64fa44b4cf570712b82b77111a4c64755e4405cde1ccd85145237528c1b8f4376b63e95d6efcf53c5c6ebc28585cb9eb7977b1596dd75e60dc5cb9be6b281a67a0b9c6cc38d7370f2fa8bf03a978a1d5c3e6b9517eeed0f2fd601a024a4b6883d1d81cd1be634ee2241eb3c4190ce3c4843876e2f1900e62934d6cb0773150e46951cda285284cdb76a8959851429324b2771047cea43f884cdbb1a9c586743861e478461e2baee082cb5248de7688dcf8cbd08d427feb2de6a1ab4b48689da98bd65853c06b8f0a0b8c4cb38fc0ffd4756ca25ca05ad3f2a517bafe7c112eafdd76ca2b48293b040f38e7846612104d2b6ca0826a2d76d834e2cdd7ee0582f5d4be9d82924c7f3d91a6ef8d93576d7fa18738c4c6b2d25f1284fed2fba2ed9c10d734ab3564df1e4889966fb13e747dfc8d48dcd4360bf9be75fd9fa47df221810a0af6f14411ac031fff71a7ed4730ee3fea4885775c20261b155641bb485cd77b623b63c776880657ea5d6c628d4f6d6b7234192187423d97d46e3f56da8ad5f2058441dc014fb7ebf817c21d650d7f040000",
    ],
    [
      "ETag",
      "c37Xj219CsH4pWgvy4tKzg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-109-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d92514f83400cc7bf4b7d65092c884ae203d3a98b6c6e8c3d19b39c50180a14ef0ecd5cf6ddede19c464df405dadeafa5ffffb181c7a24ec187fb227f6a51ae0f72d4331344a8da522b7e35542b040b508b9cc9d7b1737e1cb9e1e36256b5d3559adbba7f3d3b3d6542252bac04f81bc80a2c5305feed066a5121b72554b655bdec320bf4ba31c5791c8d26979c57949a7cb208c360100e616bed1b53a1c5b2e3ffd176b7b5e081ee23cc50629da0d9a591f480891e19994a544d893d45ad4c5041077707b9a4b61192a8c7959e639ff41ccfb5fb4edfb3ed23cf65b2a444e8826a8617735e1034695146f4c232c1634076212bcebae733978bb45362c2d124e63166c1af80c48464bafc936b78df95e06bf8c076167ce744456dadf7d4457813fc368e3dfd1c751ec4c31f84d2ecd41e8947e3e13c0ec653c3ddeda40fd61ad554121ba9d078e8d8eef1e19167bfdb7a46c66afe8eaf658b162482ff8eab42839f8952e1f60d32c1acdb7b020000",
    ],
    [
      "ETag",
      "zM1D8R4LkUQmuPhdg0t2KQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  LOWER(`purchase`) NOT LIKE ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-110-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8554816e9b4810fd95d59e2aa5aa63c0b131588a72be84cbd17320c5b8515455f6b22cee369825bb4b2a2bf2bf7758e234be5e1b090966e7bd7933b3333ce23b5ee5788233bebe6f98dcfef15564b88799266b381d6cad247affce1a06572c76acf797f1bbc5fdb7d35340f096a5c8a62ed9b1128da44c4d16f3fe5a8aa6265288630874ec38f6b1e30eed8133706d7bec0e81a85859cc787507f42f5ad76a62597bf1fe5a8875c948cd559f8acdf3b9f530b06a29be32aa9575a869818cb25e513d2b05259a8bea7431870c1ac5e4926d082f21871fd43cfbf330769f934d7f0de0074e19a15434956ef382105454055f37d244c593476cf27cf181e7c12c384fd14a322a64bee4f90a118596cbfaae87cee345941eadc8a68db87adb3af606fa3b89afd0aa8604be10c5d40addfc13240142b3f826488e9e1dc08ae214cdc27f037486a6d1053a900a23b488a2609ea2a3b3b7e8328917d7e8afdb97102822674af3ca949092ac646dfa4f6d0e7fbedd9640344877cee5d87689e3d97e5664635a7827a3acb0599679d978444e329bfa4336cc334680a7dbe886452a51b90e2dfc91cfc65e41dd914fbcdc83879c10ea51dff1737f688fc9281fe25d0f7f935cb30bae6aa178d76a7c938469b04c9345743e4d035346419a525f74c9b545bccc5343914bdb7600f89bda76ad970b506bef2e8cd220999ea7e1c7a01b97195b13ba9ddfc3c014a4540cd044920dd34c5e891c1a87afe379988671349d01c3ccc0f51ea1f0e4d3e30f42baad4da7b579e3799a84d1a549608ff848cac6401eba0ffc464852bdc1bb5defd771a64932bd056d2225d9fec707f5c0eaedfe57c3e08dd5e5b9d77470abb6b70607d6f0c072f1eef30e9e1e86e5eb94f1874590dce2ee28610593aca2afcf17808de3f59fc87ea1010c2b0d3a4a830de34c55ab4225ebc69a6f4c2d4f6ccf73dd113660a97ff28dc7fefeeeda186d44b661957e2aa95b68d3c5d6d5a8671038611a23738dbbeff59b76b352050000",
    ],
    [
      "ETag",
      "2y/RNJ+/4EMeO1/JGO+Uqw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-110-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d514d4fc24010fd2fe3d13669b1d684840310141242b4881743c85286dad276eaee940f09ff9dd96288c68b97dd99f7917d2f7b844d5aaea00dcb34f9ac511f6e12e4173b4468ea9c8d5c159506c1016495887293ed1fbfb2e15bd8df07e174370c96fddb6db7d31185893fb050d03ec23ac57c65a0fd7e84521528b6c5a2da88840f95dd4693d7c1d32012a0a0950526b3f1b8db1b0fe0e45c2daaa0bae47f99e62707325a46b8468d658c3643a529c39847b69e514595a36ba8d6311a68c40d9168aa2ba5895c415cdff75c3f0cbc96df0a3def210c449953ac38a552c4b3a9c403265679443ba9077722d0cd284dd7cdb915b8d5d4b0d37d93ed27e75fb9e00f17fcf6cdbf1feb1d18cdb326896ed0a6f62e0dfa645bb1b4655da303b1920f18a67cd94f67c0f3dcd3dd010000",
    ],
    [
      "ETag",
      "kjxFzjHV6Cx46SwH4bC+vA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "8b08000000000002ff1dd0417282301400d0bb646d9d2022d21d515410a1200c964d06e987895608242aa1d3bbd7e911defb414559821054b65768d03b52c5cc9a96d333b64f0f3c26e1ba5ae8e99c8c976d47b9bf4b68b6f7f37638c68b887e02dc0e1d5d4b7f3b3aaa3fad82b4ca66caf0bbd9b3a9617fd9c79ac625656db5016524ee55e26f531c4b3cca54f33601636439f044a82f62ac6edcec5cd0ddb9c28af84df391dd0f5d9e255e444c5e54e993baad5db386bff551a7b96d2e743b769787dc369caa78609b8c77bab83d6558d0f0c18e700e1a199e4ddd93f35dbdf562c7a982012c61e3d1abd104c1c0590f82b2975b372c6b82fe13a8541c5e13048a1e7af4fb07253203b123010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:09 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-111-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85536b6f9b3014fd2bc8fbda04c8039248d11aa574456ac84a48bb699a903117ea1630c5a65355e5bfef629aae55a5f513b6ef39f79cfbe099dcf32a250b92f0fca185e6e9cb9d48c8090145737c754a67bc394f5c7f06b7e18feb0a8a99d95e2d9788e01d4bd2b22e602045db30908bfd6e9837a2ad6923c400130d6cdb1ed8cec41ad923c7b25c678244094576c9ab7ba4df2a55cb85691ec587b9107901b4e672c844f9fa6e3e8eccba1177c09434df6b9a2823cd4f54bf168251c545b5dcefd0412ba189a1a4bc400fffa86972fa3ef790d3729823f89133a08c89b6529d2f4cc14495f1bc6d7456b27826dae79b03d97997de3a329828dab28a2b5ac28991524563f55483711e6e37861f9c6fc3cd2af2b741bc5b5f789bd570bdbddc6f829d7173e1859ea1685280e61a4be354df02bca07e0a52f14aab47dd73a7fcd221ffe3603a024a4be883b16b39d49e59f3244b5c96cdc6d324b3204966893ba5e3c462f3094cd20428f2b4a866d14a54a3341d59936c1e0375dd786239493c0787c6ee68ecc01cc993b94d0e27e44fc3159c71590bc9fb0e919bd08fbc380af7c17a1579ba848cb6853aeb8d7505bcf5a8b0c0d8b26c04fea7ae4317e502d5ba96fb41e485ab75e45f7bfd942f21a7ec69f78073ce682101d1b4c1062a683622c5a69160b5f1ce10aca7f6fd189464f1eb99747def9cbc69fb2b3dc221769695fe925d14fac1376de788b8a645ab218ffd81d468f916eb43d787df88c44dedb390abbd17fe24fd5308193450b1cf278a601df8fc8f3b6e3f8271ff51472abce30231d9a9b006fa45e2bade237b369f8e6744831bf521e68ca7c7b67539ba8c5042a55e4aeab71f2bedc55af90ac220ee40a0db75f80b99ff6fdc7f040000",
    ],
    [
      "ETag",
      "6m63MFb7I8ehRXVnel8/uQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-111-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f",
      "c2",
      "40",
      "0c",
      "c7",
      "bf",
      "4b",
      "7d1dc9a638cc121e40104900718c170d21c7d68de1b68ebb1b8610bebbbd8968d4445fb6b6f76bd7ffff768097b488c083559a6c2b94fb8b04f5a3097c5455a615bf4a2a148205a845c224babb648e4ede1b6cf657ab20267ff6b44dda6d2654b8c65c80778038c52c52e03d1fa01039725b48599517cb3ab340ef4b539c05fe7032e03ca7c8e493f968d4e98efa70b4ce8d91d06259f3ff685b1c2dd8d0cac7182516219a5d4a491b0cf5d0c854222f336c28aa64880a6ab83e482455a590440dae341cc769386ed3be742e5ddb6eb94d26330a854ea960783ee305419316994faf2c135c06641db2e2b87eeeb89c46b512130e27018f310b7e05248624a3e59f5cc9fbae055fc30776b2e03b2772aa0a7da6ee460f9ddfc6b1a79fa37a9da0ff83509a9d3a23c170dc9f059df1d4708b93f4ee5ea39a4a6223151a0f1dbb7973dd72ed775b6fc958cddff1b4acd08250f0df719f6af06291293cbe014016fd2e7b020000",
    ],
    [
      "ETag",
      "e6vgUe1mDGjy3bTfoRSZqg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  LOWER(`purchase`) NOT LIKE ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-112-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85540d6f9b3010fd2b96a7499d942690920f22555dd6b28d2d251d21abaa694a8c31cc2d60669b4e5195ffbec3346db36eab8404e77befdeddf98e3b7cc3cb044f70ccb39f35939b57d722c61dcc34c9e074130e4839f585c3ced39816d79f1226ceb2e36340f086a54851e5ec50895a52a626cb453793a2ae8814e210021dda76ffd01e3a56dfee0f2d6b347480a8589ece787903f41f5a576ad2ebedc4bb991059ce48c555978ae2e1bc77dbef55525c33aa556f5fb30732aaf782ea492e28d15c94c7cb0564502b2657ac203c871c1ea949fc763f769793a29b01f8965346281575a99bbc20041565cab35a9aa87872874d9e4f3ef0c29b79a7115a4b46854c563c5923a2d06a55dd74d0e97c1944076b523411d76f1ac7ce40efc3f9395a5790c00fa2985aa3cb8f5ee821349b5f7ae1c1830358c13c4233ffb3874ed03438437b527e809641e02d227470f2067d08e7cb0bf4eeea29048a4898d2bc34254424ce5993fe7d9bfde7b7db108806e9d6b91a5943628f2d374ee3114dc7478338b5581c8fe3d1801cc516751de6243123c0d34d74c322a52887364ddd81cb46e3940e072e19276378c811a163eada6ee23ad6880c12076f3bf897e49a9d715509c5db56e3cbd08fbc55142e83d369e499325252e7faac4dae29e2699e1a8a5c59960dc0ffd4b66dbc5c805a73777e1079e1f434f2bf7aedb8cc5846e866f113062625b962802692144c33792e12681cbe982ffcc89f07d31930cc0c5cec100a4fbedd3d12a24d653aadcd1b2fa2d00f3e98047688af24af0de4b6fdc0af8524e56bbcdd76fe1d671a86d32bd0265292cd1f3ea807566ffb570d8337569be74ed3c68ddaceeaef59ce9e35c4dbef5b783a1896af55c65f965e7885dba390a54cb292be3c5f00368e977f22bb850630ac34e8280d368c33558d0a95ac1d6b5e985aeed9ae75341a600396fa99cf7107bbbb6b62341159c14a7d5f52bbd0a68b8dab560f2070c23406e61ab7bf0141ffcc1352050000",
    ],
    [
      "ETag",
      "yR5anAIo4eMfbcmjJdeoDg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-112-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4010fd2fd36b02494c53103cd422ad54a4c62a8522b22693184d32e9eea4c58affbdb3b1484b2fbdeccebc0ff63df608fba24ea10f9b227f6b511fae72e4991d62346dc946ae866a83e000b2ca4559854b7a4997bd229e6d3fa7e9230ff51c678381284cb2c54a41ff085981656aa0ff7a845a5528b6f5bad98b840f8dddc6d3e7d1fd2816a0a2d402d3c564723b9c8ce0e45c2caaa2b6e67f9956270776b48931438d75823643a36987098f6d3da3aaa644d750ab1334d0893b22d7d4364a13b982b8be1fb87e147a811f449e771385a22c29515c502de2c55ce20113ab32a60fa9073d11e86e94a65977be0b1c7435ec74dd65fbc9f9172efcc385bf7dabefc7860746f3a449a21bb4a9bd73833bb2ad58dab26ed18144c9073c147cde4f5f1607d180dd010000",
    ],
    [
      "ETag",
      "m4VoXdV3iRQhzNdKtBrSeQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "1f8b08000000000002ffedd34b7282300000d0bbb016271101d31dc11f03631541a91b06621cd22210c2c7a4d3bbd7e935eabbc3fbd63242a81069577fd14a7bd36436435332cd81930c40453baf74ae0d184c122c02cf72c65bc1a04e7b1d238370fd53e677b56c762534d5f97eef82ada0c5ea21934d38d45105600c7ab28d799840b3adde132bf43ef6697e954ae5db9072cc66951b448560f150fb7316127b0d99335a23869bc5a51f8fc7baaaf7a2c0c392fbc6a03b277f65f30366176022b23967e3e97a49ca1b742176393864a574d71e679df285531f3891381f9065df6c58cd7b612810962a468f71faf2f2ef68138d3e1ad65291b2e776c34468a2fdd54f3bd9d0e77f4cb396b6dacf2f046e52cd19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:11 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-113-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "5c1320101222456b94d01529210b21ada66942c631d40d608a4dbaaaca7fdfc5345dab4aeb13b6ef39f79cfbc1333ab0728f262861d94343eba72ff73c4117884a9cc1eb03c9ccaf735e6e1eff6c0ee3857b7f985fd79be91410ac65095c5439ed09ded4848ac96edbcf6ade54b8e6bc07897aa669f54cc73606e6c0318c91630351d03c5db2f200f43b292b31d1f5b3783fe33ccb29ae98e8135ebcbeebc7815ed5fc9e1229f4f79a3ac808fd13d56f392758325e4e775b70d0085ac7b4c02c070fffa8fbe4f27dee3ec3453f03f091118a09e14d295b5f9082f032655953abac68f28c94cf3707b4f596de3cd208cf9ba28c4b5cd00b6d8f258ee55345b5ab70bdd2fce06a1dae6691bf0ee2edfcda5bcdfaf3f572b70ab6daedb5177a9ac4494e15579b6a97ea16c005f4f75448562af5a87d6e955f3ae47f1c4c4b006941bb603c321c6c8e0d3749931149c7d630490d9a24e36434c4566210d7a6f63ea118784a54b17009355b36318863c4036c9bb13d4c719c10db8d2d6334b086fb81eb380e3a5da0c79a49ba60a2e282751d42b7a11f797114ee82f92cf25409296e72b9e88cb505bcf528a1c0d8304c00fea7ae531b651cd4da96fb41e485b379e4df78dd949734c3e469fb00734e712e28a0710d0d94b45ef13d340d05b395b700b09ada8f7350a0c9af67d4f6bd75f2a6edaff40886d85a96ea8bb651e807df959d33e206e78d821cbb03aac0f21dd407ae4fbf01099bda65419b9d17fe44dd5348535ad3927c3e5100abc0e77fdc79fb010cfb0f3a42c21d1688885685d4b45b24a6ea3db35dd3742ca4c0b5fc101bb8e373",
      "dbda1c6d465ad052be94d46d3f54da8935e2150441d88140b5ebf417ea81f1487f040000",
    ],
    [
      "ETag",
      "qcg1+ConQwxQk8D9jkCHrQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-113-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f",
      "83",
      "40",
      "0c",
      "c6",
      "bf4b7dcb12d0c916125f303795b83fca98893166b941c79840f1eed02ccbbebb3d9cd3a889be81b6f76be9f31c5b78caca043c5864e9738d727394a2be354188aaceb5e25745a542b000b54899bc3b0feffb616fdd5dbc5caf26e5c553bf9e8cfcb3332654bcc24280b785658679a2c07bd842290ae4b698f2ba28e74d6681de54a6388dc2607cc9794189c9c7b3e1d0ef0d07b0b30e8d89d062def0ff687bdc59b0a645884b9458c66876a924ad31d68191a94451e5d85254cb1815347073904aaa2b21895a5c6939ce49cb71dbf6b173ecda76c76d3399532c744625c3b3292f089ab4c8437a6599e032209b90152f9be70b97b3a45162c2601cf118b3e05740624c3299ffc955bcef4af0357c607b0bbe73a2a0bad407ea6238f17f1bc79e7e8eeafbd1e007a1343b7540a260349846fee8c6708f7be9bd8d467523898d54683c74ec76f7b4e3daefb69e93b19abfe36959a305b1e0bfe32ad3e02d45ae70f706510a32137b020000",
    ],
    [
      "ETag",
      "VCRYDRBj8bvKhOnFkDuOMA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  LOWER(`date`) NOT LIKE ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-114-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6d",
      "4f",
      "db",
      "30",
      "10fe2b96f705b4beaf745b27c40a642ca32490a4a00ea1d675dc6048e2603b6c1dea7fdfd969071ddbf83ca9527377cfddf3dcf9ee01dff23cc67d3ce3c95dc9e4e2d58d98e11a669a24e0a55f5bfe60d4fade59cc7fbc3e5e48fa65b6f36db0bb0b086eb214c98a94d595282565aa3f0a1b89146541a4107528546fb7bbf576afdbeab43bbd56eb6daf0b898aa5f321cf6f21fd5aeb42f59bcd3579231122491929b86a5091fdf237ef3bcd428a1b46b56a6e72368146355f60dd4b05259a8b7c771482825231396119e12968784c8d671f376b3738c91a0980ef3965845251e6dae8821254e4739e94d256c5fd076c753ef9c0a133740e2234958c0a194f783c4544a1c9a4b8ada1037fe4455b5392998ad36d13581be853e09fa0690102ae89626a8a2e3e3b8183d0d0bf7082ad694c34830ccf8fd0d03d76d01e1a78876883c6f5d0c8f39c30425b7bdbe828f047a7687ffc14020dc46c4eca541f120d2cda088fab4fd7bcab664a4f5aad36005773779f3f375e9a2817926bd3b0eb454e303888dc73a79af19025842ec23b98f29ca48a019a489231cde4898819a49cfaa11bb9be371842861ddce91aa170fff2e131215a14cc88d4f61f1f0e22072f97b5bf23064130184355222559fc1603a5b089cbe51341e7242d2dc4e2ad5529b8af02b88d0ddbdaea6c58dd0dab8797574bf8d530ec62c58ccf464e30c6952b607326594e2ddd3fa66bc136f0f24dadf71bc0b0e1c0a334d84a73aa0c0b95cc86239ed95e56d9ef3b6f5a3d6cc1523f8fed9818cbe33f46561ca5adcfa41432600a16ca98c0a6ac169ec350787c664f6243e5ddca9531a54862ca7b026544d36b9e2748f12487da92a1b990685ee6d4a45527605d442665c6728dcc8baa3e32fbd040615914426a163f16805875386114b8",
      "ded1f68795b93f8e9c100e4fa3cb76ff5dfbcaf463bba85efdbfece0aa7a127b1fbe67eee327d5c03b4ade050000",
    ],
    [
      "ETag",
      "cZ0OAU0x2yfz+KyrcJb5wA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "1d",
      "d0",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00d0bb64ad0e0441d21d14f914b4028219370c8400292d42f8894eef5ea74778ef09524268df27c3ada60d78034b0ad1866c3241c393f0389f8606372595be675ce8f6c71e8e9c48c7bb194c24fcb2d0368355711d0c34fa9a2a0bf18439ce4679ff4989a9133e8bceac98f942337895c69a05819f4e6bd12fd4ee0223c9317fba7385fa76289ae1d0794cdfc6473b1727c5a96e919a4796ab641645cdceae050fc13e72a6808447adb2c5f7b46b77865a2e0a929b38a90582db7e576397b352a4ecf2b09166a0303a41376bfd0516b5e71d94932fba6b26cd8a0f5680de5bc6699fb0975b92115a81ff8464585afa9ad069ca2907bf7f3beed26f23010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:12 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-115-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85535d6f9b3014fd2bc87b6d12a0490891a2354ae9ca16c80aa455354dc81843dd124cb1e91455f9efbb364dd7aad2fa84ed7bce3de77ef08c1e589da339ca58f9d8d176ffe59e67e80451894bf57a5baf67fbef7876fde32a0e123bf033ebee6ab10004532c81774d450782772da162be8d8765cbbb06b79c0f20d1c0b226036b3a366dcb9e9aa6331d0351d0aa58b3fa01e8775236623e1a1dc58725e7654571c3c490f0ddebfbe8c91e352dbfa7448ad17bcd11c888d127aa5f2b4eb064bc5e6c6370d009daa6748759051efe51f3ecec7dee21c3bb6109e0274628268477b554be2005e175c1caaed559d1fc19699f6f0e28f6d6de2a3108afba5d9dd678474f8c1c4b9cca7d438d8b6813187e78b1898265e26fc2345e5d7ac172b8daacb741181b37975ee419126715d55c63619ce95b0817d0cfa990acd6ea897a56ca2f1df23f0e4611405ad03e983ae6145b33d3cd8acc21c5ec74921526cdb259e64cf0696612774cc7794631f0b4a866e19ad7966b6232c9cdd4b4732b1d8f5d37cd8aa99dd2899317d4994e9c09418713f4a765929e33d170c1fa0ea19bc84fbc3489b6e16a9978ba840277953cef8da902de7a9450606a9a1600ff53d74145190735d5723f4cbc68b94afc6baf9ff29a9698ece3479873812b41018d5b68a0a46dc073681a0a9781770e603db59fc7a040f35fcf48f55d3979d3f6577a02435496a5fea23889fcf09bb673445ce3aad390a7fe801ab07c07f581ebc36f40c2a6f659d0d5d68b6e51ff14d182b6b4269f4f14c03af0f91f77dc7e00c3fe838e907087052242a99096f68bc474bd47b66b3bae8d34b8951f62ae651ddba672a88c74476bf95252bffd50692fd689571004610742ddaec35f84f23c8b7f040000",
    ],
    [
      "ETag",
      "bYnL8yJa8VKQSMT2MIb1hQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-115-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4e83401085df65bca509d44a0d8917a5a236b6b53ff4ca98660b43a50203bb8ba6367d7767b156a3267a0333b3df0c73ceb283a7b488c18355baae6a94db9335eaa90966a8ea4c2b7e955428040b508b359315f9fddba45dbdae2a7f1b744f17371454d38b0b2654f488b9006f07498a59acc0bbdf412172e4b688b23a2f964d6681de96a6380f6783f135e739c5261f2f86c39e3f0c606f1d1b63a1c5b2e1ffd1f6b0b76043ab192628b188d0ec524ada60a40746a6127999614b512d2354d0c0cdc15a525d0a49d4e24acb71ce5a8edbb1db4edbb5edaedb6132a348e8940a8617735e10346991cde8856582cb806c42569c34cf672ea771a3c4848371c863cc825f018911c978f92757f2be8f82afe1033b58f09d1339d5853e5257c3bbde6fe3d8d3cf5197bd30f84128cd4e1d9170300ae6616f3431dcc341babfd5a82692d84885c643c7ee9c9f755dfbddd63e19abf93b9e96355a1009fe3b6e520d5e223285fb37b64161d87b020000",
    ],
    [
      "ETag",
      "qoBCKf2qzbqByE73UHoEqQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  LOWER(`stamp`) NOT LIKE ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-116-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6d",
      "4f",
      "db",
      "30",
      "10",
      "fe",
      "2b96f705b4bea5838e7542ac4080883629490aeb106a4de2064312a7b683d4a1fef79d9d16e8d8c6e749959abb7bee9ee7ce774ff881e531eee25b96cc4b2a161feef92dae61aa4802dea13c754221bf2f4e763fda32e4f39fe4ec47b2bf0f08a6b324c98a94d6252f45446577143412c1cb8208ceeb50a86e599dbad5d969b5ad76a7d5fadcd9814449d3599fe50f907ea75421bbcde69abc91709ea494144c36229e3dfb9b8fed6621f83d8d946c6e7236814636df613d48794414e3f9fe280005a5a4624233c252d0f0921adf7edbacdd60246b24007e64112551c4cb5c695d5022e2f98c25a5305571f7091b9daf3e7060f7eda3104d058db888272c9e2222d164523cd4d0913772c3ad29c974c5e9b60eac0d74e27b03342d40c01d91544ed1d599eddb08f5bd2bdbdf9a4a051221c5f542d477ce6d74807aee31dae0715c34725d3b08d1d6c1363af5bdd1101d8e5f43a08398ce4899aa63a2804669e571f5e9e8875554aa49ab6501703578e7ed7be3a58e322e98d21d3b6e68fbbda3d0b9b4ab21f76942a245308731cf482a29a089201955540c784cf57e7981133a9edbeb438699dc708d90b87bfdf492102e0aaa452af38f436700fdf50643bc5cd6fe0eebf97e6f0ca5891064f15b0ce4c23e2e97af545d92b4341083375625e3b10a600b6bb6b5d5deb07636ac0e5ede2ce157c3b0911533be18d9fe18572e9fcea8a07964e8fe3162033681f72f6bbde500863d071e5816c5a46291d42c91a0261cb2ccf4b2cafef269b7bd870d58a837b18ed9019ac77f8cac384a539f0ac1854f256c9536814d1a2d2c87a1b0f8c21cc686caf9ca95512949a2cbbb1c654445772c4f9064490eb50545332ed0accc239d561d827111919419cd15d22f",
      "2abbe879291a28288b820b45e3972a00a86e28087dc73dddfeba320fc7a11dc00d2a746d75f7ac1bdd9469a57afaffb78d9bea71b49e63cfb561d57f01d8e93c7bee050000",
    ],
    [
      "ETag",
      "PsGITrsXyF5+EsToqzaHZg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "1d",
      "d0cb8e82300040d17fe95a8cc8cbce4e205510c4118c944dc3a3487110a1451133ff3e66f67773cf1ba4794e3927a2bdd21bf802af7409e7f93c5bace3c7628a02e9b089a049d05acf9853c0b51c210bc598b126228126e3ebd56d98f864dac3aecd24eef8e485de124b7edc488e8b9b0a5f3862c720ccdbe9911acf4e48379432db9ace86ea695e1b1a998b13259ea895d8e9a62e13edbebae462b4f800b3fdee7b288743734081b49d4c47f65e06a305926abfba3c49c9f5e5a0384e93281d55e54eae229d1c574631eac4db55d9de6de5d369db23180911baf5f9c71fd51ac73e98013ade594f39619f6f45837006fe118878dde947c2a4694f7bf0fb074d93e68e23010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:13 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-117-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85535d6f9b3014fd2bc87b6d1220949048d11a25748d94908d9056d334211b2ed429c10c9b765d95ffbe8b69ba5695d6276cdf73ee39f7832772c7cb944c08e3f9af06eac74f7bc1c8190145737c6daef777a95d453efbb32b7fbb57b05f58fec3748a08deb2243d5405f4a468ea04e464b7ede7b5682a5a0bd1c3443dcb1af52cd7316dcb764d73e43a489450642b5ede21fd56a94a4e068393783f17222f80565cf6137178791fdcdb83aa167b48941cbcd51ca08c1c7ca0fab91009555c94d3dd161d3412ea180e9417e8e11f3565176f73f7393df47304dff304689288a654ad2f4c918832e37953ebac64f244b4cf5707b2f557fe3c3212513487322ee901ce8c942a1aabc70a8ccb70b33696c1e5265ccfa2e52688b7f32b7f3debcf37abdd3ad81a37577ee81b8ab20234d7981a17fa16e005f553908a975a3d6a9f5be5e70e2ddf0fa625a0b4842e188f4c975a9e3966191b2599373c6799098c796c744e87cc4cc60e3829038a3c2daa59b414e5d8048f7a8e1b7b63c78e9dccf3e2f1799ac643eabaccb129a52623c733f25073050b2e2b2179d72172132e233f8ec25d309f45be2e21a34da1169db1b680d71e1516189ba685c0ffd4756ca35ca05adbf26510f9e16c1e2daffd6eca2bc869f2b8fd8573ce682101d1b4c6062aa8d722c5a69160b6f61708d653fb7a0a4a32f9f144dabeb74e5eb5fd851ee1105bcb4a7fc9360a97c1176de784b8a645a321f7dd815468f916eb43d7c79f88c44dedb2906f3b3ffc4ebaa71032a8a14c3e9e288275e0e33feeb4fd08c6fd471da9f08e0b94c85625a9a15b24aeeb3db1c78ee9e8ff55d15abd8b5943fbd4b636479b110e50aae792baedc74a3bb146be8030883b10e8761dff0246b73c717f040000",
    ],
    [
      "ETag",
      "uVjkd2pTEbzUnx6HejD1Ew==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-117-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f",
      "83400cc6bf4b7d294b604e66487cb1cda9c4399531ffc42ccb090551a0eceed02ccbbebb3d9cd3a889be81b6f76be9f31c2b78ceca183c78c8d2458d72b993a2be324180aaceb5e25745a542b000b54899bc3e19ec26378bdbc999a89781bbb73f2c1777af87874ca8e8110b01de0a920cf3588177bf825214c86d11e57551ce9bcc02bdac4c711206fef884f38262938fa7a351af3f1ac2dada36c6428b79c3ffa36db6b6e0891e024c506219a1d9a592f48491f68d4c258a2ac796a25a46a8a0819b8354525d0949d4e24acb71ba2dc7edd86da7edda76d7ed30995324744625c3d3092f089ab4c8037a6599e032209b901527cdf385cb59dc2831a13f0e798c59f02b20312219cfffe42adef751f0357c601b0bbe73a2a0bad45bea7874d1fb6d1c7bfa39eaa8170e7f104ab3535b24f4cf8793b0777e69b8d9467a7fa9515d4a6223151a0f1dbb73b0df75ed775b0764ace6ef785ad6684124f8ef38cd347889c815aedf0086bac12f7b020000",
    ],
    [
      "ETag",
      "VGC+fWqXSKauyR635EnqYw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  LOWER(`amount`) NOT LIKE ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-118-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ffc5546d4fdb3010fe2b962704487d4bd775a5126205028b56922e4dd9aa0935267183218983ed54aa50fffbce4e0bed60e3e3a44af5f99ebbe7b917e7093fb03cc67d7ccb92c7928ae5877b7e8b6b982a92c06d69a5f965c97e2e2d267b8b966f5fde7787c9f13120988e92242b525a97bc141195fdc9b891085e1644705e874475cbead5ad6ea7d5b6dadd56eb73b7038192a6f321cb1f20fc4ea942f69bcd0d7923e13c492929986c443c7bbe6f2edacd42f07b1a29d9dce56c028d6cbec37a92f28828c6f3e3c9181494928a19cd084b41c34b687cfb6537778391ac910078c1224aa28897b9d2ba2045c4f3394b4a61b2e2fe13363ab70e786c0fedb3008582465cc43316878848349b150f3574e64ddce0202499ce181e6ac7c64017be7785c20204dc114965887e7cb57d1ba1a1f7c3f6b7625c2f4043e79b8d4ed0c03d473b448e8b26ae6b8f03747072882e7d6f3242a7d36d089410d3392953754e14f0282d3dae8e8e9eaca252cd5a2d0b80ebce3baf078e57dacbb8604a97ecb881ed0fce02e7daaeba3ca4098996e347e8f39ca492029a08925145c5158f29848cbcb113389e3b18428469dd688390b8ffebe925205816548b54e61f5f0cbd4100fbb4daca794dd2d26016d501ef598d4f9d3dbc5ad5fe9e68e0fb8329901321c8f20f1f14a429dee43078635542379c16d66c1babbd637576ac2e5eddace057c3b0b41533fe3eb1fd29aeae7c3aa782e691a1fbc7100cd838de7f7c9b870060780ac02315d852b1486a964850e30e58666a59471f757abd363660a15efb8e3eea2f461ebfe9597394263f15820b9f4ad83b6d029b345a580e4d812f4a0d67544a92e834931c4a9194dca61499cd40cf43406188588ef49450184c47f66cbd0e610d9d9218c5bcd451a6d17d546dc1c6daafcc7d2dccc8a9c6f77fa5dc544dd25ce79e6bc3cafd06b2814c4d99050000",
    ],
    [
      "ETag",
      "u1lnGuiXy1is8v0REGj6Lg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "1d",
      "d0",
      "db",
      "6e82300000d07fe9b3334027ac7b1311b9091641c097a6608d45c2a5100496fdfbcc3ee19c1f408b82f53d199a27abc13798a982d6c53a97b6e9282d911f4e0f8f34fda7b74c0ac363269fb7067aedd40f4cb0a39424758232ef964292721c679aacd536b6360385e1b1da4711926f388df929ac5d757a6a5cda45cba0df0ffe284c62e85cbbd07ef6c476f4bfecb0ab3809fc39799d8f6a1cb36c41cc346e63f7dc1c6bedae985e2aae1c8670d7c639ac2acdd55d585eacd4881bab1198ccfb57704d604f25bda3683606fb6192247182a22d5cba84b67c121961fbfad0666005d8d472c17ac2df6eb8416805fe13c830b7ec3da1332a9800bf7fe69a20ae23010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:15 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-119-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "fd2b64f6ab2dd0d2074d9ab5a9b87663a952aad96c3664182e380a0c32838f98fef7bd0cd6d598ac9f98997bce3de73e782177bc4cc88cc43cbb6fa07efe762b62724440d10c5fcd4be7291b88f0e9e745d8845034778f8c3dcee788e02d4bd2a2caa12745533390b3ddb69fd5a2a9682d440f13f56cdbedd963c71ad883b1654dc60e1225e4e9392fef907ea3542567a67910ef67426439d08acb3e13c5dbbbf93030ab5adc0253d2fca869a28c34bf50fd9e0b461517e57cb745078d843a8282f21c3dfca326f1f1c7dc7d4e8b7e86e007ce8032269a52b5be30051365cab3a6d659c9ec85689fef0e64eb9d7bcbd060226f8a322a6901474642158dd47305c669b0591b2bff7413ac17e16ae347dbe599b75ef4979bf3dddadf1ad7675ee0198ac63968ae31378ef5cdc70bea2720152fb57ad83eb7caaf1d5a7d1e4c4b4069095d309a58636a4f2d374ee3094ba7c3519c5a10c7d37832a2c3d862ae034e1203459e16d52c5a62cdee78e08eac4914bba338721ce644ae35a551924c539ad823cb9e4cc8fe883cd65cc109979590bceb10b90e56a11785c1ce5f2e424f9790d22657279db1b680f71e15161859968dc0ffd4b56fa35ca05adbf2951f7ac16219aeaebc6ecae79051f6bcbdc739a7349780685a630315d46b9160d388bf587b2708d653bb38042599fd7e216ddf5b27efdafe460f7188ad65a5bf641b062bff87b673405cd1bcd19087ee402ab47c83f5a1ebfd1f44e2a67659c8e5ce0b7e91ee2980146a28d9d71345b00e7cfdc71db61fc1b8ffa82315de7181986c55580ddd22715def81ed8e86f6986870ad3ec59cf1f0d0b636479b110a28d56b49ddf663a59d5823df4018c41df075bbf67f011d3717ec7f040000",
    ],
    [
      "ETag",
      "/Q4xg2oTxJPTuTemukwccw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-119-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "0c86ff4bfd3ae24670e0123e4c452501c4314c8c31e4dc3a186cebb8bb4908e1bfdb9b88464df4cbd6f69e767ddfdb0e56691183072fe97c5da1dc9ecc51df9b204055655af1aba4422158805acc995c37edc787843a93cd2a6bf9a76e35c61bdfef769950d1027301de0e9214b35881f7b48342e4c86d1165555ecceacc02bd2d4d711206fdd10de739c5261f4d0703ff62d083bd756c8c8516b39aff47dbf3de8225bd0498a0c42242b34b29698991ee1b994ae465860d45958c50410dd707734955292451832b0dc7396f386ecb6e3a4dd7b6db6e8bc98c22a1532a189e4e7841d0a44516d0866582cb80ac43569cd4cf572ea771adc484fd51c863cc825f018911c978f62757f2be0bc1d7f0811d2cf8ce899caa421fa9ebc19dffdb38f6f473d4951ff67e104ab3534724ec0f7b93d01f8e0df77c907eb1d5a8c692d84885c643c76e75cedaaefd6eeb2519abf93b9e96155a1009fe3b6e530d5e223285fb3798389b607b020000",
    ],
    [
      "ETag",
      "q20YVfo8Swkl4A/6uPeGAA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `id` = ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-120-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85547f6f9b3010fd2ac8fba795d20448203fa4a8cb52d631252423a455354d8901c3dc124c6dd32eaaf2dd7786a64dd46e952285e3debdf7ee7ce609ddd13c460314d2f4be247cfbe99685a88188c429bcfd7e49fdad3f95c2b7e716be9fde4ecc3ffee3700808aaaa04de14193913ace4111183e5a29972561698337606446786a99f197647370dd3d6f5aedd814241b26442f33b28ff2d652106add65ebc993296660417543423b67979df7a305b0567b72492a275acd90219d1fa40f53c63119694e5c3e5021c9482f015d9609a8187d7d238fc7cccdda478d34c01fc402382a38895b954be8022627942d39257ac68f0842a9f070f68e14c9c71a0ad3989188f57345e6b5868ab5571d7d0c6b3a5179cacf14631ae4f55621f685ffdd9545b1760e0371644acb5eb6f8eef68da5a310cb5736de45d6847b4aea72d3dcf5904dac9f9a976e9cf9673edcbcd21040cc744489a5776031c6644597d1ea9fbf624550196a05f27575dddc6464fef8749d88d925edb0a139d84612fec5ab81dea51bf433a714830d449c55e55e19ce5fd2e4caed3b5a3c4d2932431c2aed18b2dc38c2dd3ea99d82249c70e75db44bb067ae454920b2a0a26683d5674edbb81b30afca5371e054ed54682cb4c5ed4e65413873e2534b9d2750380ffe96da7b294819a3a27d70b1c7f340edc2ba75e8d094971b45ddcc37224381304d098e30d91844f590c8343f3d9c20ddc99379a404575def33d42a0c1cfa7d782605b549396d5bfd2822bb03b60bcc25959211eea07645868b76bfc9b62e4fba31b90c59ce3edfbf4eff257f82aaa2dbee821a5b68fcca3a87314d968f76b07bf06823b562ba31f4bc7bf41f52b9f2484933cfa78b5005c253efe56ecef2d80e1e6828e9010c3264742a9449cd41b4d37552fcfd57ddb843156602edfe4da6d737f6c8a4331920dc9e5734bf5bdada6a852a57801411216d173bd4bc8fe05bff50a7c39050000",
    ],
    [
      "ETag",
      "JGiRyRMtsR6P5aqMjL2xRw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-120-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d90416bc2401085ffcbf49a40622505c1430da2d260dba8142941d638a6d1241377272d41f2df3b1ba5e75e7667df7e8f7d6faf70ceab038c609f67970675fb9021bfdb2146d3146c64aba932080e20ab4cc8ad8955bc99bf3e86e1c7a49dadd62f015db2f15808937e61a9607485638ec5c1c0e8f30a952a516cbb5d7d1684dbda9e16cbf574368d4528e96085e5268a9e27d1143ae7cfa24a6a2afe9729e91c38d13ec6236aac52b4196a4d274c7961eb1955d605ba861a9da2811eee2f324d4dad34912b8aeb0f3cd70f86dec01f049ef7140c852c28559c5325f06625f180895511d38fd4035f00dd8fd2f4d8afdfbd6c6bdca7a44beea649cb68de34490483f675ef9624249b8e2535eb061d48957ce43ce7dbb9fb053e6c6794a5010000",
    ],
    [
      "ETag",
      "YsRaRUHO3CCWByGSTK6oqg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "1d",
      "d0",
      "41",
      "7282300000c0bfe4ac4e1a1a9df416908a0414252de885091835a2110822dae9dfebf409bb3f40148534266bafa5d4e0033c0422a36294439a76f0c923677f81e75c2596095d59a36764796436f14ee7e3c146ad2695a9899b6fa9e7bb6c962c3cb362f86baa998a68032fab79c6fc6f8a3db80c13c51c13569d6e7dc46aab6936cb9cefd5f8f61ea03b7617bbe98d77dea58c625d38f88dc78aac033f987fd2489ff8adac5232deb2ed3a14024507ab0ce5589f279cefae56b25ca7e9847ae90e873161c7bedcdc9f42d9fd0339731aabfa08e1d48861bf1a762840fd021fc000c8be528d34997ab92d4cc800fc2764eda392af095b8a4636e0f70f911bf5ab23010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:16 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-121-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85536b6f9b3014fd2bc8fbda24401e2491a2354be99629212b9046d33421dbb950b704536c3a5555fefb2ea6e9da4d5a3f61fb9e73cfb90f9ec89d28f6644a98c8ee6ba81e3fdc4a46ce08689ae1ebd75db0e97fbabe72d3fc26f003bebb74bdedd56c8608d1b0143d94397494ac2b0e6aba8dba5925eb925652763051c7719d8e331ad8aee38e6cdb1b0d90a8204f57a2b843fa8dd6a59af67a27f16e266596032d85ea72797879ef3db8bdb292b7c0b5eabdd5eca18ceabda3fa31979c6a218bd9364207b5822a810315397af843ddb3f3b7b9bb821eba19821f0407cab9ac0bddf8c2145c16a9c8eaca6425d327627cbe3a90c85ff98bd8e232af0f4552d0039c597baa69a21f4bb02ec3cdda5a06979b703d8f979b2089165ffcf5bcbbd8acb6eb20b2765ffcd0b734653918ae35b3cecd2dc00beaef41695118f5b8796e949f3bb4fc77300d01a515b4c1c4b347d419db1396328fa7e3fe90a536303666de90f699cd270318ec1950e41951c3a2852c90c6bc1406499f0dc7c9c0a369c2523a4e1c6ebb13773249ddd1901ccfc8af4a68b810aa944ab41d22bb7019fb491c6e83c53cf64d0929ad737dd11a6b0a78ed516381896d3b08fc4f5dc7262a24aa352d5f06b11fce17f1f2da6fa7bc828cf2c7e81ee79cd25c01a269850dd450ade51e9b4682f9dabf40b099dab7535091e98f27d2f4bd71f2aaed2ff41887d858d6e64ba2385c069f8d9d13e29ae6b5813cb40752a2e51bac0f5d1f7f221237b5cd42aeb67ef89db44f21a45041c1df9f28824de0fd3feeb4fd08c6fd471da5f18e0bc455a3c22b681749987a4fecc9683274890157faef98670fc7a7b635399a8c7080423f97d46e3f56da8ad5ea058441dc81c0b4ebf81b058f16837f040000",
    ],
    [
      "ETag",
      "JWNO3BVQ2flhNENcWF27UQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-121-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d92614f83400c86ff4bfdca1258262a891f984e25b23919c6a859961b748802c5bb434396fd777ba8d3a8897e81b6f7b4f47d8f353ce6550a1e2cf3eca941d9ee64a82f4d10a16a0aadf85553a5102c402d3226f5f0a6b54fcac83e5ed2f5ed41588ccf87bbfee121132ab9c75280b786558e45aac0bb5b43254ae4b6848aa6ac165d66816e6b539cc5513039e5bca4d4e493ab30f487e10836d6b631155a2c3afe1f6df38d050fb48c708512ab04cd2eb5a4074c7460642a51d605f614353241051ddc1d64929a5a48a21e577a4edfe939eec0ee3b7dd7b6f7dc0193052542e754317c35e30541931645442f2c135c066417b2e255f77ce6729e764a4c184c621e6316fc0a484c48a68b3fb99af7bd177c0d1fd8bb05df39515253e92d75125ef8bf8d634f3f471dfbf1e807a1343bb545e2603c9ac5fe786ab8f9bbf461ab514d25b1910a8d878e3dd8dfdd73ed375b8fc858cddff1b46cd08244f0df71966bf056a250b8790596b816e37b020000",
    ],
    [
      "ETag",
      "tBYy0FmR0DboWZ9LlMKB5A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `purchase` = ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-122-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85547f4fdb3010fd2a91f70f68fd91b4694a2a21564ab6758394a529884d53eb384e304de2603b4c08f5bbefe250a0631b52a4e47cefeebd3bdfe501ad5911a3118a587a5b5171ffee8647a885a8c2299c7eb70227b2d2ead85dabcbded72fc3797efd3e3d3c0404aba324cecb8cb625af04a172b4987752c1ab120bcedb90a86df57a6dcbb1cd9ed5734c73e8d8102869969cb2620de1d74a9572d4ed6ec93b29e7694671c96487f0fce9bc7bd7eb9682df50a2647797b30b34b2fb06eb51c609568c17878b3928a824154b9a63968186e7d038fab09bbbc370de49017cc708c584f0aa50b52e48417891b0b4123a2b1a3d20adf3c5079a7ba7de24345682122ee2258b570696c67259ae5bc664b6f0c3bd15ceeb8cabfddab1358c8fc1eccc589520e01a4b2a57c6e5672ff08ce7a39571681c1963ffc4d8493ef58d85ef7bf3d0d83bda373e05b3c5b9717cf51202b2632a152bb4e8104719ad053f3676fafa3eeb00ac80b2712e87a683ad03d38d9268489283fe204a4c1a4507d17080fb91495c9bda714431c4a93abb8ec2052f9c18477dd3b56dea0c633a30ad7e32b4b149b04d06d4315d374e223ae81da04d0bfd124cd113264b2e59d35c74194c436f19060b7f320e3d5d4682ab4c9d34e2ea225eea5450e4d2342d00fea7b64ded651cd8eadb9afaa1178c27e1f4c26b06e494a698dccf6f6144129c490a682c704e1515673c86c6a1f3d97c1a4e67fef81422f4ad9f6f11128d7e3c3c0784f7a5eeb4d26f340f83a9ff490bd8222e705669c85df381c62568459b4debdf69c64130be026a2c04beffc307e5c0ae6dfe4aa1f1da6a646e292d54b36dadde8e65ef580edafcdcc0d342b06d0d33fab6f0822bd41c0534a18216e4edf102b076bcfdd7d86e3080618781472ab0619a89ac5988a0cd54b35cd7f218ed0e1dd7451a2cd42b1f8cf2f6eaea1c75469ad3423d96d46cb0ee62edaae413089c308cbebec5cd6f47cbb43743050000",
    ],
    [
      "ETag",
      "Z1R6b1guB9ktW2KJ7Smh+g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-122-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "41",
      "6b",
      "c2",
      "40",
      "10",
      "85ffcbf49a60b20d16050fa6482b0d52d37a2a22eb3a26d124137737b622fef7cec622855e7ad99d99f70dfb1e7b867d516f6008eb223bb4a84f7719dab92b52346d690d5f0dd506c103b43263f2258b7af37c81b91283a4170fbef203e2783462c2a81c2b09c3336c0b2c3706861f67a86585bcb65a357b46eca971dd74f63e799aa43ca868e306b345928ce3640217efb6222b6a6bfbafa5e5c5831dad53dca2c65aa1f3d068daa1b25317cfc8aa29d137d46a85063ab813324d6d233591cf133f14c20ffb512042d10f82877ec464494ada826a86176f6c0f2c5959a6f4c9f1e09e01dd959c74db9d471e8b2ec6b1039cb7df5a78d3c41f2dba69a1d3963f8fc5278be655135b37e85c07d7048fe452594e6b758b1e28c91ff05cd86b7ff906257354c1dd010000",
    ],
    [
      "ETag",
      "Kg4/QhUehc29L/B9xhqeeA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "08000000000002ffedd3417282300000c0bfe42c0e2288e92d54a90ad61623d01303310882120901934eff5ea7dfa8fb87fd06292194f3a46b2a7a052f40a6061c9371a6a3b8d715de66a6d8d54b7a43fa3bcc6db389d6e9396726dca8aa619b425b9d2f62a23e2c7ba8669eb37ab34fcb81543c179a87a673981f845e6af93077d689bf5d84aebd881a2ed9a7c20917f7a276f7e5ece3cb9046973bc73442c671d8930c159e6c080ae2b09622d8a13876d121d37ae66bbd5e75fec4e923851464812befaf11f65697deb40c775d49e54d6ff814d67631ebf1d6833e5ed67491dab82daf3ebf0aabd9046d48c64f4fff0e18017a67654b79523eb64f2d0847e0af7ed249461fff1d9ab6b4053fbf16c360e419040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:18 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-123-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "14fd2bc87b6d0249484222456b94d2255a201d9056d33421632ed41dc1149b565595ffbe8b69ba5695d6276cdf73ee39f78367f2879729999384e7f70dd44f5fee4442ce08289ae3eb80ab3befaacc58b39c7e9fadc37b47aebdc7c50211bc65497aa80ae849d1d40ce47c1ff6f35a3415ad85e861a2de6038ea0d26b6351c0c2796359dd8489450645b5efe41faad52959c9be649bc9f0b9117402b2efb4c1c5edfcd87a159d5e20e9892e67b4d1365a4f989ead74230aab82817fb101d3412ea180e9417e8e11f354dcedfe7ee737ae8e7087ee00c2863a22955eb0b533051663c6f6a9d95cc9f89f6f9e6404277ebae228389a2399471490f7066a454d1583d55605c063bcfd8f897bbc05b469b9d1f87abb5eb2dfbabdd76eff9a171b37603d750342940738d8571ae6f3e5e503f05a978a9d5a3f6b9557ee9d0e6e3605a024a4be882f1d49ad08163cd922c99b2cc198d93cc82247192e9988e128bcd6cb0d30428f2b4a866d15294d62ccd9cc419c5d9d8ce627beca4f16c3862f12419d8c02c664fa9458e67e4b1e60a2eb8ac84e45d87c84db089dc380af6fe6a19b9ba848c3685bae88cb505bcf5a8b0c0d8b20608fc4f5dc736ca05aab52ddff8911b2c57d1e6daeda6bc859cb2a7f01ee79cd14202a2698d0d54507b22c5a6117fe9b91708d653bb3a052599ff7a266ddf5b276fdafe4a8f7088ad65a5bf248c828dff4ddb3921ae69d168c8437720155abec5fad0f5f137227153bb2ce4c7de0d7e92ee29800c6a28d9e71345b00e7cfec79db61fc1b8ffa82315de7181986c55580ddd22715def893d736c674834b8561f626367726a5b9ba3cd080728d54b49ddf663a59d58235f4118c41df075bb8e7f015b3b53c87f040000",
    ],
    [
      "ETag",
      "1itjMPnfcuA7K9HSq8sHMw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-123-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d92514fc2400cc7bf4b7d74c4813874890fa088246322cc07630c396e1d0eb775dedd2484f0dded4d44a326fab2b5bd5fbbfeffb70d3ca7450c3eccd3c54b856a7db040736b8309ea2a339a5f25151ac1013462c1e4681926bdfcac73f972739f07f2e8301c88c1eafc9c092d9f3017e06f2049318b35f80f1b28448edc2629abf26256670e9875698bd368320c079ce714db3cbc0b826e2fe8c3d6d937c6c28859cdffa3ed71ebc092e6134c506121d1ee522a5aa234432b538bbcccb0a1a9521235d4707db0505495421135b8d268b68e1b4dafedb69a2dcf753b5e9bc98ca43029150cdf4d794130644436a115cb048f015587ac38a99faf5c4ee35a890d8761c463ec825f018592543cfb932b79df27c1d7f081ed2cf8ce899caac2eca9abe0a6fbdb38f6f473d46537eaff20b461a7f648341cf5a7517734b6dce34e7a6f6d508f15b1911aad874db77d7ad2f1dc775b2fc85acddff18daad00129f8efb84e0df889c8346edf006214036c7b020000",
    ],
    [
      "ETag",
      "MjNfBm97DqOYmLc/+NGaGw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `purchase` = ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-124-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85547f6f9b3010fd2ac8fba795d28404427e485197266c434a484748ab689a12630c754b30b54dabace2bbef80a66dd66d9590e07cefeebd3bdff184ee581aa2210a587c9f53b1ff74cb03d44054e1184ec394afe7d7533cf7e5c55c88d5da36f9afc7d10810ac8c92789725f44cf25c102a87ab6533163ccfb0e0fc0c129db53be659db32f54ebb63e97acf322150d2249ab1f40ec26f94cae4b0d53a903763cee384e28cc926e1bb97f3d643a795097e4b8992ad63ce16d0c8d607ace7092758319e8e564b50904b2a36748759021a5e43c3e0f371ee26c3bb660ce00746282684e7a92a75410ac2d388c5b9a8b2a2e113aa74bef9404b7b664f7c6d2b28e122dcb070ab61a96d36d95d439b2c56ae7fb2c5bb32e3f6b4741c0ced8bb7986bdb0c04dc6049e556bbfe667bb6f67ab4d546dab93676a7da5172c7d556ae6b2f7dede4fc54fbea2d5697dac5fa2d046487542a9656a27d1c24b414fcdc58e7fd7d9601580165eddcf4740bb7fbfa2088821e89fa463788741a04fda0d7c546a0938149cd30a018e25499bd8ac2294f03a36de9fd2e8d749d18bd01368dbed9350c4a08c13d2b1804bdb06b45dd3e2a1ae8513045a74c665cb2bab9e8da737c7be37b2b7732f6edaa8c08e7899ad6e2ca22deea5450e446d7db00fc4f6d45e9651cd8cadb725cdff6c613dfb9b2eb0199d11893fdf21e4624c289a480c602efa8a262ce43681cba5c2c1ddf59b8e3194454b77e79404834fcf1f41ae0efb3aad3aa7aa3a5ef39eed74ac001718593bc823cd41f0867a0151545e3df69c69e375e03351602effff04139b06bc55f292a7c65d5320f946d54b21dacce91651e59162a7e16f034106c5bcd8cbeaf6c6f8dea238f4654d0947c3c5e00ae1c1fff350e1b0c60d861e0910a6c9866224b1622683dd56c57d5f21c3d18184639070016ea9dcfb4fa87ab2b739419e98ea6eab9a47a83ab2e96ae5cbe80c009c3e856b758fc0662a3720b43050000",
    ],
    [
      "ETag",
      "dnoYMWDaMTsBMrrUYE4ozw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-124-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4b",
      "c3",
      "40",
      "10",
      "85",
      "ff",
      "cb",
      "f89a605a62d4401fec855a0945a30145a46c37d398e6327177828490ffeea4169f7dda3d67be993db33d14799d4208fb3cfb6ad1741719f2d37889d1b6255b391aaa2d8203c82a13d24f970fb7cbcde5dbeb4d92a458046b6f7195cd664258fd899582b087438e656a217cefa156154adb6ed7148270d78c6ab37d59ad57b11815a5a3b14da2e86e1ead6070fe5a54456dcdff6afa181c38d23ec6031aac358e191a4347d4bc19d7b3aa6a4a742db546a385137c2a6486da461922571c7732f5dd49e07bd3c934f0bcebc017b224ad38a75ae0e459e20113ab32a66f590f3c38eb79c7681f0dc9748be9b9222317343ecc12884d8b0e68257f749ff3af1e7e002dd08e0080010000",
    ],
    [
      "ETag",
      "4dDJ9DI/YX8UUdek6G0C5g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "1f8b08000000000002ffedd3417282300000c0bfe42c0e0414e94d2bb592a48020152f9980411162198262e8f4ef75fa8dba7fd86fc0f29c4b49bbaf8a5fc00b500c3ae37c9ce9f3dd4d1f625f688c588128ac3c7477cbaee0f1b0c1e555aac14911caa62692254afbfdd9ccf4fa941d7cbcc1c8a74851dcbff5f6c93c4ec5ab96d2da08e3ed85158326efcc6a82f9a1259eafc42c84090dae30b9265d94deda6aeb9dbffc28c68b3acaab05a4811d137ba95578eb1a1541ebf7e8d3df192c23f6005793982a819adec145e81a269befe51a7afa9d7da8a37e73c96a6acf7a58ef93301bdaa45979c1c9128d141a193f3dfd3b6004f8bd295b2e69f9d86e4e1c6704feead34e35fcf17fc159cb5bf0f30bef25aec519040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:19 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-125-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "fd2bc87b6d12a0496822456b44691b29212b9056d33421632ed41d608a4da7aeca7fdfc53459ab4aeb13b6ef39f79cfbc10bf9c5ab94cc49c2f3c7169ae72f0f2221270414cdf1d5b2a4b8dadd5cc1e39fd9b5bbb54a15bab7f9628108deb1242deb020652b40d0339df85c3bc116d4d1b2106986860d99381351d9bb6654f4dd3998e9128a1c8d6bcfa85f47ba56a391f8d0ee2c35c88bc005a733964a23cbe8f9eec51dd8807604a8ede6b8e50468e3e51fd5a08461517d56217a283564213434979811efe51d3e4fc7dee21a7e53047f013674019136da53a5f9882892ae379dbe8ac64fe42b4cf3707127a6bcf8d0c268ab6ace28a967062a454d1583dd7605c06db8db1f22fb7c16619adb67e1cbad7de663974b7ebddc60f8dbb6b2ff00c45930234d75818e7fae6e305f553908a575a3dea9e3be5d70ead3e0ea623a0b4843e183be6945a67e62cc912876567a79324332149ce1267424f1393cdc6304e13a0c8d3a29a452b514d6c333d4da6b3d8023b8dc713c78a678963c63346cd713275e834cbc8fe84fc6eb8820b2e6b2179df217217ac222f8e829def2e234f9790d1b65017bdb1ae80b71e1516189ba685c0ffd4b5efa25ca05ad7f2951f79c1d28d56b75e3fe535e4943d878f38e78c1612104d1b6ca0826623526c1af1971bef02c17a6adf0e4149e63f5e48d7f7cec99bb61fe9110eb1b3acf4978451b0f2afb49d03e29616ad863cf50752a3e57bac0f5def7f221237b5cf426e765ef09df44f0164d040c53e9f288275e0f33feeb0fd08c6fd471da9f08e0bc464a7c21ae81789eb7a5fd90e36df9e100d6ed48798ad63c7adef324209957a2da9df7eacb4176be5118441dc015fb76bff17ddd4364c7f040000",
    ],
    [
      "ETag",
      "11soGUQGeqz9HCO1mtSCVg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-125-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d926f4fc2400cc6bf4b7de988e38fc32ce1c55054e2408491680c21c75660b8ade3ee2641c277b737158d9ae89badedfddaf5796e3b788ab3085c98c58b7581727bb4407d678221aa22d18a5f39650ac102d462c1e4837fbf3cf6eb8d879bcbf56c70d21cd75fbccea6d56242854b4c05b83b98c798440adcc71d6422456e0b2929d26c5a6616e86d6e8aa360d8ed5f719e5264f2fed8f7bdb6df81bd75688c8416d392ff47db646fc18a66439ca3c42c44b34b2e6985a1ee1a994aa479821545850c51410997070b49452e2451852b956aedb452751a76ad5a736cbbe934984c28143aa68ce1f18817044d5a2443dab04c70189065c88ae7e5f399cb71542a3161b71ff018b3e057406248329afec9e5bcef52f0357c60ef167ce7444a45a60fd4a57febfd368e3dfd1c75e1059d1f84d2ecd40109babdce28f07a03c34ddea5b7b71ad540121ba9d07858b51b67a74dc77eb3f59c8cd5fc1d57cb022d0805ff1dd7b106772e1285fb571218d5e17b020000",
    ],
    [
      "ETag",
      "YLXh+L34YKFqbP/7U3zAEw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `date` = ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-126-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85546b4fdb3014fd2b96f705a43e9cb4e94b42acb481552a294b53189aa6d649dc6048e2603b6c15ea7fdf4d42a1650fa44ab57dcf3de75cfbde3ce3079e8678807d1e3de64c6e3edd0b1fd730d33482d3747af62b698dbaf6c5e3e8fc5a8dcd6fa1338f4e4e00c18b2c45932c6675257219303558cc1b91147946a5107520aa1b66a76e74dac4840521dd4e1b12158bd7539e3e40fa9dd6991a349b3bf146244414339a71d50844f27ade7c329b9914f72cd0aa79a8d90419d5fc40f5341601d55ca4278b3938c815934b96501e8387b7d4d0ff7cc8dde0346944007ee201a34120f25417be802210e99a47b92c59f1e019973ef716786e4fed918756920542864b1eae105568b9cc1e6a68345b38ded18a2605e3eab808ec36e8dc9d5da2550606eea8626a856ebed8ae8dd02aa49aadd0093a4543678c0e88270e5a388e3df7d0d1e931ba70678b2b7476bb0f01cb21539aa7a5618ffa312bccbe5ceae4cfb72c12a806075570d9251d6af448df5ffbdd60dd6b59fe9a30dfeff95d8bb67c12f4dbac1dfa8c429e2ed8cb2c9a8ab4dfb55a81659996d5ee5b61cfe8b788d969b55bad3e25a44f3bc432fb1db367e06d0dff945cb331579950bcba587ce34e3c7be9b90b6734f4ecb28c35cd633daecc1545ecfbd450e492100380ffa96d5b44b900b5e2a5268e67bbc39137b9b6abe698b288069bf923b4c79ac68a019a4a9a30cde4a508e1e2f0d56c3ef126336738858cf2c5af76088507df9fdf12bc4d56deb42efff1b82862bb47784de3bc043c550b6c1293d48959372cbcddd6fecd3474dde12da85329e9e65d0c2a8251dbfe55a7c497bbcae94eb778803d1707bbf6c1ae83b73fb6f0ab6118b64a197f5dd8ee2dae8e5cb66692a5c1c71d06e032f0f1476337c0008611061da5610f0d1da8422590ac6a6c9e94b554d95d427abdf293a3a9d4ef630631babbd72b380a4696b054bf94540d70798b452857af2008423f3a13e702a2bf0115044dcf42050000",
    ],
    [
      "ETag",
      "nLBxm3C7EGqCFVsD2XdNSg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-126-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d1362984d448c20390068958b5428c310d39cab6b6b4dd7ab75509e9bfbb5788cfbedccdcecd6467ee0487bcdec3187679f6d9a23e5e65c8cf164468da928d5c0dd506c101649589f24dbf86ebdb347ad83d86f78b9f79709d4d8be964220a937c60a5607c8234c7726f60fc7e825a5528b6edb63988848f8d9d96e13a5804911015ed2d116e56abe96c1540e7fc5954456dcdff32c59d0305ed224c51639da0cdd0682a30e1a5ad6754d594e81a6a7582067a71ff90696a1ba5895c61dcc1d07707fec81b0af0bc1b7f24ca9212c539d522debc483c60625546f42df5602002dd43699af6e7574fdb1a171477f1c5343b329a274d12c1a0ddee9d93ccc9a66349cdba450712251f7997f379ee7e0134897ad1a5010000",
    ],
    [
      "ETag",
      "YrWNT9fRMbONKGxCE+gAjA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "96",
      "42",
      "40",
      "00",
      "00",
      "e0",
      "77",
      "99eb743488d93b436a571262b66e9cc128a990ff3afbeedbd9d7d8be77f89e80c631abebb0297276031f60a4104de369c4abdf1dffd8d9c209bbd76ede6ef7d9c35a38b511cb81db8da44ab0fb658885883a8b1567cfd67cfd8cb80d6e72820dd7d63cd61f669cdf52221f9c7c1d913ad3796991f4a3058774889534b4874ffa102ff068766d26951e5c56a6837a7f4345832850699cede0c9989364f194e45145568228a92bcc961785cfb46ba4718937d3d7f39d5a05761354db7cdca5b7996516812e388107e951a30798b6665792638b5c6523c3d519ef557ffaf6f6ef8009604399dd591d66afed8284d004fcd50f9bb164afff98d13bbb839f5fb1cbe17a19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:21 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-127-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "f6716d8116a16dd2ac4dc5b5d996ae4075cd664386e905472983cca031a6ff7d2f83753526eb133373cfb9e7dc0f9ec91d2fb76442529edf37503f7db915293922a0688eaf33caaf7edc0fe5d8acafc717cc73aebffea2f9748a08deb224dd5505f4a4686a0672b289fa792d9a8ad642f43051cf1e783ddb75ac813d702dcb731d244a28b2252fef907ea3542527a67910efe742e405d08acb3e13bbd777f3616056b5b805a6a4f95ed34419697ea2faad108c2a2ecae92642078d843a811de5057af847dda627ef73f739ddf573043f70069431d194aaf585299828339e37b5ce4a26cf44fb7c732091bff4e7b1c144d1eccaa4a43b3832b654d1443d55609c85eb95b108ced6e16a162fd64112cdcffdd5ac3f5f2f37ab2032aecefdd037144d0bd05c636a9ce85b8017d4df8254bcd4ea71fbdc2abf7468f171302d01a52574c1c4b35c6a8fac719aa51ecb46c3e334b3204d47a9774c87a9c5c60e38db1428f2b4a866d15294de80d9ae3764893bb4bcc481014d5236f2129a21d14a4799eb79647f441e6baee094cb4a48de75885c858bd84fe27013cc67b1af4bc86853a8d3ce585bc05b8f0a0b4c2ccb46e07feadab7512e50ad6df92288fd70368f17977e37e525e4943d45f738e78c1612104d6b6ca0827a25b6d83412cc56fe2982f5d47e1e82924c7e3f93b6efad93376d7fa5c738c4d6b2d25f12c5e122f8aeed1c1097b46834e4a13b900a2ddf607de87aff0791b8a95d1672b1f1c36bd23d8590410d25fb7ca208d681cfffb8c3f62318f71f75a4c23b2e1093ad0aaba15b24aeeb7d617b96ed3943a2c1b5fa101b39eea16d6d8e3623eca054",
      "2f2575db8f9576628d7c0561107720d0eddaff052c320c127f040000",
    ],
    [
      "ETag",
      "AaiWKq3s9/rY9Qc74Y+Xag==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-127-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "0c86ff4bfde84806e2304bf8808a48028863241a43c8b195b9795be7dd4d4208ffddde54346aa25fb6b6f7b4ebfbde76f0941631f8b04a93e70ad5f62841736b830075258de65749854670008d48983c9e0dc6d9342b02b939b9bbdc92b8ef6432e97699d0d123e602fc1dac5394b106ff610785c891db2292555e2cebcc01b32d6d711606c3c980f39c629b4fe6a351ef7cd487bd73688c8511cb9aff47db62ef4046ab00d7a8b088d0ee522aca3032432b538bbc94d8d054a90835d4707d9028aa4aa1881a5c69345b9d46d36bbbad66cb73dd8ed7665252244c4a05c3f3192f08868c90016d5826780ca83a64c5ebfaf9c2e534ae95d8703809798c5df02ba03022152fffe44adef751f0357c60ef167ce7444e55610ed4d5e8a6f7db38f6f473d4652fecff20b461a70e48381cf767616f3cb5dce25dfaf9d6a09e2a6223355a0f9b6efbecb4e3b96fb65e90b59abfe31b55a10391e0bfe33a35e0af85d4b87f055e56fefb7b020000",
    ],
    [
      "ETag",
      "+SGMjPjnRlw3XDyoaY7jlg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `stamp` = ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-128-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "2b96f7a593f2b0290949a4aacb52b62125a4236453374d89719cd42d606a9b565595ffbe0b2c5bb3572524b0efb9e79efbe209dfca7c83473891bbbb52e8c757372ac12d2c2cdbc1edf4edc5693071ac7aa099e7e677c143beb81a9f9d0142565e8665452ada46959a0b335a2e3a3badca8269a5da40d4a6cea04dfb2e71a8d327c4ebbbe06844ba9dcafc16dcafad2dcca8db3d04efec94daa58215d274b8ca7ede77ef9d6ea1d58de0d6748f6376218ce9be10f53c559c59a9f2b3e502149446e895c8984c41c32fd74df2e698bb2359d6d901f85e72c13857656e2b5d40c155be95bb52d7ac78f4846b9dcf3ef0c29ffa9318adb5e04a6f5672b346cca0d5aab86da1c97c19c6276b96558cebd795e17040efa2f90cad0b1070cd8c306bf4f9831ff908ad8d05716b7486ced138bc4047cc41889661e82f627472fe1abd8fe6cb4bf4f6ea3904346f84b132af15c72c4945a5f64755833f9b5939300b121ae3ca237d460764986c138f6f07a7bd644b44920c12afc74e13c287ae70378960e0672bf6da8be52adf0c3c2abc840f286384529751da17bdbedb1b8a64e00e09ef51cf19328af72dfca0a51517d214cac8a6b2f87314c4fe2a8e96e1641cfb751a5b56a6f6a2115725f15ca7852457845000fe27b77d65950aa255ad0ac2d88fc69338f8e437d331153bc61f1777301f5b961a0168a65926acd033b581c2e1cbf922888379389e8247ddf2cb03c2e0d1d7a75f0ef1635157dad66f1c073368d37876596b38803eb1b4ac51f7cd07768843dac469d35e4c9d113d1d51b74308f982f7fbd6bfc9c75134be02414c6bf6f89b0d9284f5dbff356a8daf4f8df8838aaa27cf341d9ddca3531fefbfede1696158c02632feb8f4a32b",
      "dc5c45622bb4c8f9cb4307e0daf0f28fe4b0d40086b58638b02156c28c735345e15a34b32eb33a97c6db2340504d0780b5fdc3e6f5878786561c15a3c8446e7fa4d42c755dc5ca549a9f2030c2888641f81eacdf012000fa7a56050000",
    ],
    [
      "ETag",
      "LBD3IC2tow1m74nqIwnSYA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-128-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d90516bc2301485ffcbdd6bcb5a91ce093ecc219b20323b1db22112d3dbaedaf676c9ad22d2ffbe9b2a7bde4b7273f21d724e2e70c8ab0486b0cbb39f06cdf92e435eb82146db146c65aba9b2081e20ab4cc8c5417d0e8ecb47751f69fe88e3b55a8da7a7d14808abbfb15430bc409a639158187e5da052258a6dbbad0f82f0b976a7e97c397999c42294943861be9acd9ec6b309b4de9f4595d454fc2fd3a6f5604fbb185334586974196a437bd43c75f5ac2aeb027d4b8dd168a183bb8bcc50532b43e48be287bd811f46fda017f6a2207888fa4216a415e75409bc7a9778c0c4aa88e924f52014c074a3344dbbf5d8c9aec66ddab49b9b697c66b46f86248245f77a704df24c2e1d4b6a360d7aa0957ce46bced773fb0b5e3e718da5010000",
    ],
    [
      "ETag",
      "QkaZ8vT9a/6ctVRRXaUBIw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "02ffedd34b6e82400000d0bbcc5a8d80a4d01d2211a8a2e088ca86cc4ff94b670875a6e9dd6b7a8dfaeef0be01228409910ff79a75e01d48a4db3332c373e73cce15dc87c3f603ba2a391ac12e74d2b79b9557d69067177f8fe3753de206759689b096a824dc5ada3a4470895897b87b0f72d7844646eb98049bba4df16a7e804d6ba699b13369718d5047a4172c68df5774293fcb036d62a2e45970d63ea8948573ab8a6daa8dda258bec6be52bfdc8cf2d16315a755f032e511c28a339469ba9983a2d8c455768577a1a466fb778d829740bacf7d1ba5086fe75497c72f2cd83e6493ede672f2fff0e9800f6e84bce445e3eb71ba66d4fc05ffd7c903d7bfe5f32c419073fbf4a60489c19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:23 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-129-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85535d6fa24014fd2b64f6b52a285531315ba3b465a3d8456cb3d96cc8305ce8b4c85066a8318dff7d2f43edb669b27d6266ee39f79cfbc10b79e445422624e6d9530dd5e1db8388c9190145337c5d0f9687a22cb3abfd72fba37fb3f7163707d84fa788e00d4bd25d9943478aba622027db4d37ab445dd24a880e26ea587da7630d6db36ff587a6391ada489490a74b5e3c22fd5ea9524e7abd9378371322cb81965c7699d8bdbdf79efbbdb2120fc094ec7dd4eca18cec7da1fa3d178c2a2e8ae976830e6a0955043bca73f4f08f9ac4171f737739dd7533043f730694315117aaf185299828529ed595ce4a262f44fb7c77201b77e9ce438389bcde1551417770662454d1481d4a302e83f5caf0fccb75b09a85deda8f36f36b7735ebced7cbedcadf1877d76ee01a8ac63968ae31352ef4cdc70bea2720152fb47ad83c37caaf1df23e0fa621a0b48436188dcc21b5c6a613a7f188a5e3c1799c9a10c7e378744e07b1c91c1bec24068a3c2daa59b41085633133618c452cb66964b33e8de839b3a2643c62b1653bd875468e67645f71050b2e4b2179db21721778a11b85c1d69fcf42579790d23a578bd65853c07b8f0a0b8c4cd342e07fea3a36512e50ad69b9e7876e309b87deaddb4e7909196587cd13ce39a5b90444d30a1ba8a05a89049b46fcd9ca5d20584fede6149464f2fb85347d6f9cbc6bfb1b3dc421369695fe924d1878fe95b67342dcd2bcd690e7f6404ab47c8ff5a1ebe31f44e2a6b659c8cfad1bfc22ed5300295450b0af278a601df8fa8f3b6d3f8271ff51472abce30231d9a8b00ada45e2bade57f6c81c0c1c876870a53ec56c677c6a5b93a3c9083b28d46b49edf663a5ad582ddf4018c41df075bb8e7f01e41784747f040000",
    ],
    [
      "ETag",
      "O3LynppgGwLUJ2PwIDPyew==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-129-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f",
      "c2",
      "40",
      "0c",
      "c7",
      "bf4b7d1dc9203075890f035149062a0c7c30841cb76e4eb775dedd3484f0dded4d44a326fab2b5bd5fbbfeffb72d3c65650c3eacb3f4b946b5394ad1dcda608abace8de65745a54670008d48993c59a4fd41a4ef70711b2fbc702c7bc9f0393d3b6342cb072c04f85b4832cc630dfefd164a5120b749caeba25c3599036653d9e22c9a8e26979c1714db7c320fc3a01f0e61e71c1a6361c4aae1ffd1b6dc39f048eb2926a8b0946877a9143da234232b538ba2cab1a5a9561235347073902aaa2ba1885a5c69b53ba7adb6d7753bed8ee7bac75e97c99ca43019950ccf67bc201832229fd22bcb048f01d584ac38699e2f5ccee246890d479388c7d805bf020a25a978f52757f1be0f82afe103db5bf09d1305d5a5395017e175f0db38f6f473d479100d7f10dab05307241a8d87b32818df586eb997dedf18d4378ad8488dd6c3b6db3de91d7beebbad03b256f3777ca36a74400afe3bae32037e22728dbb37cb55b5c37b020000",
    ],
    [
      "ETag",
      "8VgBCTsWeVQdV6LMc5fEqg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `amount` = ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-130-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "fd5790f74babe58310423ea4a84b53ba454a494b48ab689a12630c750b98da265d56e57fdf014ddbacdb2a21c1f9debdf7ce3ef384ee591aa001f259f49053b1fd74c77d544354e108561dfeebe7d56d30de9e1a991db7c9e6b35ce2c7e11010aca89238c9625a973c1784cac162de8804cf332c38af0351bdd5d6eb2dcbd48d9661e97ad732a150d2389cb2f41eca6f95cae4a0d9dc8b3722cea398e28cc906e1c9cb7a73633433c1ef2851b279a8d90419d9fc40f524e6042bc6d3e1620e0e7249c58a2698c5e0e1b534f0bf1c7237184e1a1180378c504c08cf5355f8020ac2d39045b92859d1e009953edf7ca0b93db5c79eb616947011ac58b0d6b0d456abecbea68d670bc73b5ae3a4605c1f17897da09dbbb30b6d9d81815b2ca95c6b37df6cd7d65e0143ed441b3967da01f5c4d1168e63cf3dede8e458fbeace1697dae9f22d044c07542a9696963decc7b4b0fbbcad93f7a7591460051eaae4aaab5bb8d5d3fb7ee87749d86b77fc50a7bedff3bb1ddcf675d237a919f814439d2ad8cb2a9cf2b4dfa161a0f788deed77f4a0d3efb46960b4acae69053ddf300d5fb702c337bb6857438f82297ac664c625abb616ddb813cf5e79eec2198f3cbb6c23c479acce2a7345136f7d2a6872a5eb2d00fea7b75d91651cd48ab39a389eed8ec6dee4daaec6634a234cb6f307189010c792021a0b9c5045c5050f60e3d0e56c3ef126336734858af2cc2ff7088906df9f5e0bbc6d56eeb42adfe87c3a1b797011766f38af719c97984df5815a8d0e2076b57fd38c5c77b404692c04defe918376acb2fc2f0a25be8c2a9b2f8aa850db47c641641e4416dafdd8c1534370d72a6574b5b0dd25aa965c1a524153f2f17801b84c7cfccfd8df5f00c30d061da920866926b25021825653cd92",
      "b297aabaab9b86d5462558a877b9764fdf1f5dc15130d284a6eab9a5eafe96bb58a472f90282240ca33371be42f637cd5edbe441050000",
    ],
    [
      "ETag",
      "NozxQhdCyB2pEl3cv+sYaw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-130-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c24010fd2fd36b42b331280a1e62112388d8b4d243115993491a4d327177d356c4ffded958a4a5975e7667de07fb1e7b864351a730825d911f5b54a7bb1ccda31d62d46d69345f0dd51ac101343267e56cb88a0622d4417efff299a6c7a8108761381eb342276f5849189d212bb04c358c5ecf50cb0ad9b6dd360796985363b7f9f2793a9bc60c54945a60b95e2cc2c9620a17e7669115b5b5f997697371604fbb18335458276833348af69898b9ada765d594e86a6a55821a3a7147e48ada462a22971157f43c57f403cf177edff306fd80952525d21454b378fdc4f1c09091654c1f5c0f7a2c50ddc84db3ee7c67587435ece477d97e72fe8d137fb8e037b7f97e6c7232a8578a38ba469bdabb367820dbca705ba35a742091fc015161aefbe50b1c3c7251dd010000",
    ],
    [
      "ETag",
      "G9PH71As4g/WxddqHi1k9A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "ff1dd04b7282300000d0bb642d4e2c22a43b6a12bfa0282a769309102c1f110868d0e9ddebf408efbd008f2221256b6fb928c127e8f9071a46c310dac11d3e7d57c94cdfaea7d96692840fcaf3194b46eec4f6f67e0ca9b5ddb18969c7a7c5f146b0638d163db303ba72c6cfaacab1e3d55db76e6561a46117d7789f17929d384f989c5b34c499624de65f2b421e1c99de39f43b7d451b85e515dd0b028d23d6545df6eab1fb0e8c9d7bf0f14f6d076aaa9b33d665e8ac2ec1d84baf63d492da80ee853367b3d4ce955c6ad275c8dceca80703afe0d0ca75634fcaf07948f2926a8b031800a1aab41192a56fb76e203400ff09aced2bf19ef812bc110df8fd0362e2142823010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:24 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-131-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "2bc87b6d02a4092491a2354a699b29211d9076d53421632ed41dc1149b4c5595ffbe8b69ba5695565ec0bee7dc73ee07cfe4372f53322509cf1f1ba89fbe3c88849c105034c75bf35aeccd8bab1f97a389f9b0f086e9b7b17397cf6688e02d4bd25d55404f8aa66620a7dbb09fd7a2a9682d440f13f5ec53bb673b436b600f1ccb729d21122514d98a97bf917eaf5425a7a67914efe742e405d08acb3e13bbd77b733f30ab5a3c0053d27caf69a28c343f51fd5a08461517e56c1ba28346421dc38ef2023dfca3a6c9d9fbdc7d4e77fd1cc17bce8032269a52b5be30051365c6f3a6d659c9f499689f6f3e48e8adbc4564305134bb322ee90e4e8c942a1aaba70a8c8b60b33696fec52658cfa3e5c68fc3c595b79ef7179bd576ed87c6ed95177886a249019a6bcc8c337df2f180fa2948c54bad1eb5d7adf24b87961f07d312505a42178c5dcba1f6d89a2459e2b26c7c3a4a320b92649cb8237a9a586c3284619a00459e16d52c5a8a72920c183e9398baee281e6690c6743881789c66e9c861ce28b55d7238217f6aaee09ccb4a48de7588dc06cbc88ba360eb2fe691a74bc86853a8f3ce585bc05b8f0a0b8c2dcb46e07fea3ab4512e50ad6df9d28fbc60be8896375e37e515e4943d858f38e78c1612104d6b6ca0827a2d526c1af1e76bef1cc17a6ad7c7a024d39fcfa4ed7bebe44ddb5fe9110eb1b5acf49b8451b0f42fb59d23e286168d86ecbb0f52a1e57bac0f5d1f7e211237b5cb42be6fbde08e745701645043c93e9f288275e0f33feeb8fd08c6fd471da9f08c0bc464abc26ae81689eb7a5fd8ae35b26c876870ad3ec4ec817d6c5b9ba3cd083b28d54b49ddf663a59d58235f4118c41df075bb0e7f014a0095",
      "707f040000",
    ],
    [
      "ETag",
      "/Pov/FHXG59/jCE4dJ86Yg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-131-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4fc2400cc7bf4b7d1dc9a630cc121f8682120111c69331e4b87563b8adf3eea641c277b737158d9ae8cbd6f67eedfaffdf76f090953104b0cad2c71ad5f62845736b8319ea3a379a5f15951ac10134226532edfa5ea7b77d7c0e17dd448ac14b6772fd909e9d31a1e51a0b01c10e920cf3584370b7835214c86d92f2ba28974de680d956b6388f66c3c925e705c5369f2c46a3b037eac3de3934c6c28865c3ffa3ed7eefc08656334c506129d1ee5229daa034432b538ba2cab1a5a9561235347073902aaa2ba1885a5c6979275ecbf3dbeeb177ecbb6ed76f3399931426a392e1c59c17044346e4337a6699e033a09a901527cdf389cb59dc28b1e17012f118bbe05740a124152fffe42ade772df81a3eb0770bbe73a2a0ba34076a30ba097f1bc79e7e8eba08a3fe0f421b76ea8044c3717f1e85e3a9e5eedfa5f7b606f554111ba9d17ae8b9edd34ed777df6c3d276b357f2730aa4607a4e0bfe32a33102422d7b87f05df54c0b17b020000",
    ],
    [
      "ETag",
      "g7615ByqwAU7fcaFz5NKkg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `id` > ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-132-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "22ef1790fa91f433ad84582919ab54529626a06a9b5ac77182218d83edc02ad4ff7de784422bd8902225e77bf7de3bfb9c6774cfb2080d51c89287828acd973b1ea21aa20a27b06afd49170f3741ff693cc80767a3f977efe23a793a390104d35512aff394d6252f04a17218cc1b89e0458e05e77520aa5bed56ddea75cc96d5ea9966bfd7814249d378cab27b28bf552a97c3667327de48384f528a73261b84af5fd79b8fad662ef81d254a360f359b20239b9fa89ea69c60c5787612ccc14121a958d235662978782b8dc2af87dc0d86d78d04c08f8c504c082f32a57d0105e159cc924294ac68f88c4a9f7b1f68ee4c9db16fac04255c444b16ad0c2c8de532bfaf19e359e0fa472bbcd68cab639dd805c6376f7669ac7230708b25952be3e6bbe33986b1d20cbf0ad36c53e3d418b9e7c601f7c43502d775e6be71747a6c5c78b3e0ca385bec43c07544a56259e9d9c7614ab5df977d9dbc3f4e5d801598a892cbbed9c3966d0ec238ec93d86e77c3d8a4616887fd2e6e8726197468270a29863aa5d9cb2a9cf1cceaf543dbecf75b961d614a6c4c681447a4d326768b744817dba1d5eb46186d6be8493045cf99ccb964d5dea21b6fe23b4bdf0bdcf1c877ca36625ca4eabc32a79bd8f7a9a0c9a5695a00fc4f6f5b9d651cd4f4614d5cdff146637f72ed54f331a509269bf9034c488c5349018d055e5345c5258f60e3d0d56c3ef127337734858af2d0af760889863f9fdf0afc4d5eeeb42adf5a0beec1768ff11aa7458978ac3e90d545db6deddf1423cf1b2d40160b81371fd37fc85fe2cba8b2f8aa87b4da2e6a1d449d83a887b6bfb7f0d4105cb44a19fd081c6f81aa258fc654d08c7c3e5a002e",
      "139fff30769717c0707d41472a88619289d42a44d06aa2d9baeca5aa866135db7a06002cd4bb9cd53377c7a63934235dd34cbdb4545dde721775aa90af2048c220ba13f702b27f01d268625c3e050000",
    ],
    [
      "ETag",
      "1xlYqWU7wC9p9BASHRGVgw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-132-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d915b6bc2401085ffcbf435815cc416c1072d920a62db580b5244d638c668924977275e10ff7b67639196bef4657766ce37ec39ec197659b9820e2cb3f4b3467dba4b915f6d11a3a973367255541a040790552ae42c3cbcf742ad2781cf0fdb68733c46d173afdb15c2241b2c1474ceb0ce305f19e87c9ca15405cada6251ed04e15365bbe1f86d100d621914b4b283f17434eaf54703b838b71555505df2bf96e61707b6b48c718d1acb04ad874ad316131eda784615558eaea15a2768a0811b21d554574a13b93271fd3070fd76cb0bfca0ed79f7ed969039258a332a059e4ec41e30b1ca633a483c0805d04d2949d7cdb997b1dfc4d83780f5f6530b6e5af0476bfdd6e6df8ff54f8ce645935837685d7bd7048f6453b1a4655da30389920f78caf8da5fbe0055ebfe85dd010000",
    ],
    [
      "ETag",
      "Y3wVA3rrS21t8jGhxxGGOA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "1d",
      "d0",
      "c9",
      "8e",
      "82",
      "30",
      "00",
      "00d07fe9590d2d8b766eeca0801a51ab97a642471b56d9024ce6dfc7cc27bcf7035892f0b6a55d95f1127c818921bc4a560f49278334c7d13e9dafa1dc4323bbc75da4ef91fc1631a217c8720b97b2a89d3584c1e88c4af546ea2ea7a3440d167abe9bd8174d9f683675ca394dfba02326a225cb6c1f21c221735f9a4b7bb3d83188cdcb6b7816b2d674c63a308eba9d9e6c0d9f95fd2dffbe79c3963a4e404ec48a98fc76fdaada6ceba56a490d11f3d319459c85c350b64b67ad596e32df1ecc2deefe8148f01122eca5db9152611e3666a41cc5bd8faf510516808fb568784bc5c72dab182fc07f02eda69a7f260cce1ade80df3fe613501023010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:26 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-133-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "4014fd2b64f6ab2dd052fa489ab5a9a84d5aba02d5dd6c3664985e70141864068d31fdef7b19acab31593f3133f79c7bce7df042ee79b9273392f0eca181faf9db9d48c8090145337cddfa17a1fc698a819a16f4ca04b84dcf2f17f3392278cb92b4a872e849d1d40ce46c17f6b35a3415ad85e861a29e3d1cf66cd7b106f6c0b5acb1eb2051429eae79798ff45ba52a3933cda3783f1322cb81565cf69928dedecdc78159d5e20e9892e6474d1365a4f985eaf75c30aab828e7bb101d3412ea180aca73f4f08fba4f4e3fe6ee735af433043f72069431d194aaf585299828539e35b5ce4a662f44fb7c7720a1b7f69691c144de14655cd2024e8c3d553456cf1518e7c17663acfcf36db05944abad1f87cb4b6fb3e82fb7ebddc60f8d9b4b2ff00c45931c34d7981ba7fae6e305f5f720152fb57ad43eb7caaf1d5a7d1e4c4b4069095d301e5b2eb527d6344993314b27c351925a902493643ca2c3c46253079c7d0214795a54b3688935db563a76c7766cb374183b16b871e2b8e37834443a367b34b21d7238214f355770c6652524ef3a446e8255e4c551b0f3978bc8d325a4b4c9d55967ac2de0bd478505c6966523f03f751dda2817a8d6b67ce5475eb05846ab6baf9bf21a32ca9ec3079c734a730988a635365041bd117b6c1af1171bef0cc17a6a3f8e414966bf5f48dbf7d6c9bbb6bfd1231c626b59e92f09a360e55f683b47c435cd1b0d79ec0ea442cbb7581fba3efc41246e6a97855cedbce017e99e0248a186927d3d5104ebc0d77fdc71fb118cfb8f3a52e11d1788c95685d5d02d12d7f5beb2714726ce886870ad3ec5a6cef4d8b636479b110a28d56b49ddf663a59d5823df4018c41df075bb0e7f01f2faf9227f040000",
    ],
    [
      "ETag",
      "ONGSsX/o2t9maQ/eehfFHA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-133-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f",
      "83",
      "400cc7bf4b7d6509e84443e2034ed425dbd48d3d9965b941614cb8b2bb4333977d777b38a751137d81b6f76be9ff7f6ce1a9902904b028f275836a7394a379b0c11875531acdaf9aa44670008dc89944e1af297af254d89325d591f4fce7d7fce282099d2cb112106c212bb04c35048f5b90a2426e4ba86c2a396f3307cca6b6c5493cee8f6e38af28b5f9683a188497830876cea1311546cc5bfe1f6db39d032b5a8c3143853241bb4bad688589e95b995a5475891d4d8d4a50430bb707b9a2a6168aa8c3958e7772d2f1fcae7bec1dfbae7be677992c2911a620c9f074c20b822123ca31bdb04cf019506dc88ab3f6f9cce5226d95d8b03f8a798c5df02ba0302195ceffe46ade7729f81a3eb0bd05df39515123cd81ba1edc85bf8d634f3f475d8571f483d0869d3a20717f184de270786fb9d95efae5c6a0be57c4466ab41e7a6ef7fcf4cc77df6ded91b59abf1318d5a00389e0bfe3b6301064a2d4b87b03cea394687b020000",
    ],
    [
      "ETag",
      "ea6qoEk1rACnlopEn16vzg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `purchase` > ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-134-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "6d6f9b3010fe2bc8fbd24a793179813652d56529ddd0529211d228daa6c41893ba054c6dd329aaf2df7740d336ebb64a4870bee7ee79ce77c723bae359840628e49bfb82c9ed875b11a206629a6ce074b4205b157e5d2c96ede9657fd673887b7f393c3b03042fa31449f38435952824656a309fb5365214399142342151d3ecf69aa6d5c31db363616c5b3d08542c89c73cbb83f01bad733568b7f7e4ad8d109b84919cab1615e9f379fba1d3cea5b86554abf621671b6854fb1dd6f34450a2b9c8cee63350502826572c253c010d2fa151f8f130778b93b4b501f003a78c502a8a4c97ba20051559cc3785acb2a2c123aa74befa403367ec8c02632d1915325af1686d1065ac56f95dc3184de65e70b4266999717d5c3af68671e94fae8c750e026e88626a6d2cbe38be63bc1cad8d1f05c65d669c1b43efc23860703d63ee79ce2c308ece8f8dcffe643e353e2d5f43407bc494e659a53c2061c24ad54fb7ebbe6d6a194034f0d6ce958d2d629ee0d3300e6d1a9f74fb618c59189e84769f74434c4f7bac17858c409c2eb35751241359c78e2cdca52cee98bdc824a16d538a09a6713fb42ccb64cca67d82b185760df44b72cd2eb8ca85e2f50da385ef06ce2af0e7de68183855193129127d518b2b8b78ad5343912b8c4d00fea7b65de9e502d8ca96b95ee0f8c351e05e3bf5948cd986d0edec1ee624268962802692a44c33792522b838349dccdcc09d78c3314454ad9fee110a0dbe3fbe0404dbbcba695dbdd12cf05def7325608fb8264951411eea0f34cc412bdaed1aff4e33f4fde112a8899464fb870fca8185dbfd95a2c257562d734f69a2926d6f750eacde81057dfab983a78160e56a66f46deef84b541ff92c669265f4fdf10270e578ffd7b15f6300c322038fd260c3345355b250c9eaa9e669554b1d6d63bb6f97730060a9dff8609ef7ad2b73941959ca32fd5452bdc6d52d96ae423d83c009c3e8555ddcfd06ce",
      "9bf44648050000",
    ],
    [
      "ETag",
      "CWaysbKWWY/PF5S4EaIqFA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-134-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4010fd2fd3631348624841f0d0146bc52035d5831491751dd3e82693ee6e2a22fef7cec6223d955e7667de07fb1e7b8643596fa10f9bb2f86c519fee0ab43337e4685a650d5f0dd506c103b4a260a598e44a8d16734a8f492c37cbe7e3e43e9c0d06ac30f2032b01fd33ec4a545b03fdf733d4a242b6add7cd8125f6d4b86d3c9d0f47c39c818ab60e982eb2ec31cd8670f16e1651515bdb7f9956170ff6b4c971871a6b892e43a3698fd28e5d3d23aa46a16fa8d5120d74e28e2834b58dd0443e237ed88bfd308983288c9220784862562a92c29654b378f1c6f1c092152aa723d7831e0b743772d35d777e311c7635dc1477d97e73f11f5c74e322c7ad7e1e4b4f16cdab268e6ed0a50eae0d9ec8b5b2dcd6ea163d90823fe0a5b4d7fdf20d79a4fa71dd010000",
    ],
    [
      "ETag",
      "aKRllGUToBw64cbYFwK+1Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "000000000002ff1dd04b8e82300000d0bb742da6a2209d1d1f0554261290df865428583f88adb6c264ee3e668ef0de0fc05545382f9ff70be9c01718b08aa6d5f408cd4cc031de43d373c68d3dd68bfc46c324945ccdfba3020d4f17c25d49982a2d3ed3a62d8a57433567f564d7a23466d6de21050e2234df7577ce427930d2dbc3af98422e76220eeadad2b177f2b2fbe33cb8b912a4ae6db238fbe68f5a3846c0bc70b96c2dd4a246a6d41dd3d6efc74ebff630dd226a7aac4b90885f8bedced260bc89f285f316999f24feacd24efbd055a237b19b00bbb38e92533ea8e63a4486e4cb403ab5846002c8bba78cf0927edc730da109f84f289f434f3e1316c18c30f0fb07c6dcc56323010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:28 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-135-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85535d6f9b3014fd2bc87b6d0249134823456b96d21529211b21adba6942c65ca85bc0149b4c5995ffbe8b69ba5695d6276cdf73ee39f78327f2c0cb844c49ccb3c706eafda77b119313028a66f87a65afea3f2a71bce2f68bd86f73f3fa47723b9fcd10c15b96a44595434f8aa66620a7db4d3fab4553d15a881e26ea0d4ec7bd813db28683a16d598e3d42a2843c5df2f201e9774a55726a9a47f17e26449603adb8ec3351bcbc9bbba159d5e21e9892e65b4d1365a4f981eae75c30aab82867db0d3a6824d4111494e7e8e11f3589cfdfe6ee735af43304ef3803ca98684ad5fac2144c9429cf9a5a6725d327a27dbe3a908dbb7417a1c144de146554d2024e8c842a1aa97d05c665b05e199e7fb90e56f3d05bfbd16671e5aee6fdc57ab95df91be3e6ca0d5c43d13807cd3566c6b9bef97841fd04a4e2a5560fdbe756f9b943defbc1b4049496d00523c7b2e960629dc569ecb074723a8e530be278123b637a1a5bec6c04a324068a3c2daa59b414a59dd8233a66c32875cec6d1c8a234a26c1c47b6153b4307c6c0a84d0e27e477cd155c705909c9bb0e919bc00bdd280cb6fe621ebaba849436b9bae88cb505bcf6a8b0c0c8b20608fc4f5d8736ca05aab52df7fcd00de68bd0bb76bb292f21a36cbf79c439a7349780685a630315d42b9160d3883f5fb91708d653fb760c4a32fdf944dabeb74e5eb5fd851ee2105bcb4a7fc9260c3cffabb673445cd3bcd1905d7720155abec3fad0f5e117227153bb2ce4fbd60d6e49f714400a3594ece3892258073efee38edb8f60dc7fd4910aefb8404cb62aac866e91b8aef799ed589391e3100daed5bb181e8e6d6b73b419a180523d97d46d3f56da8935f2058441dc015fb7ebf017ab2c90d57f040000",
    ],
    [
      "ETag",
      "H6Mrztd7ImYBoyUl/VZdYA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-135-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "400c86ff4bfdba25037198257e00455d325061c41863c879eb60b8adf3ee2601c27fb737158d9ae897aded3dedfabeb72d3c656502013c66f3e71ad5fa608ee6c60663d4756e34bf2a2a35820368c49cc9b0bd194871d559d15ddc4fbdcd6d8ad1f1eae484092d17580808b6906698271a82fb2d94a2406e9394d745396b3207ccbab2c5493c0e47179c1794d87c348da25e3f1ac0ced93726c28859c3ffa3ed61e7c0921ec798a2c252a2dda552b44469422b538ba2cad1d5542b891a1ab839982baa2ba1885caeb8adc323b7e577bc76abed7b5ed7ef3099931426a392e1e98417044346e4635ab14cf019504dc88ad3e6f9c2e52c6994d8301cc53cc62ef81550284925b33fb98af75d08be860fecdd82ef9c28a82ecd9e3a8fae7abf8d634f3f479df5e2c10f421b766a8fc4e17030897bc36bcb3dbc4befaf0dea6b456ca446eb61cbeb1c1f757defcdd653b256f37702a36a74400afe3b2e3303412a728dbb5797eedaa17b020000",
    ],
    [
      "ETag",
      "I2zEcaO4woYTBf0zWfeL8w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `purchase` > ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-136-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "fd2a91f74f2b5108101240aa3ad6661b120d6d08ebaa6d02db1c99d710a7b6d3a9aaf8eebb38652debb64a9192f3bdbbf7ee87f3406e44be2243c2447a5b82ba7ff34332d22060688aa7935b99b48be0f355f971729d16e9e86270debf3c3e4684a8a234dd14191c69592a0e7a389f355325cb822a298f30d151bbeb1fb57dcfedb43bbeeb06be87811ab2f544e43718fedd98420f5bad1d79339532cd80164237b9dcfc3e6fdd755a85923f801bdddae76c218d6ebdc27a92494e8d90f9f17c860a4a0d6a011b2a32d4f014ba626ff7733705dd345304df090e947359e6a6d28529b8ccd7222d95cd4a860fc4ea7cf64166e1243c4d9ca5022ed56a21564b876a67b1286e1acee9741e25074bbaa9322e0f2bc7ce70dec7d3736759a080ef54835e3a571fc338749e8e96ced7d275bbe09c38a3e8ccd9631847ce3c8ac259e21c9c1c3a1fe2e9fcc27977fd1c82da57a08dc8adf284b20c2ad58fdd1dbf1c6a15400df2d6ce45e0fab4dd77076ccd02beee777b6ced02637d16f46897b97ce081b7624031ce54d96d14cdb15f14bc9ec77a01ebf9ac0b6cc07adea0e3ae7cde75fd2ef7fb0038ad3e27db06f9a9848133a10ba945dd6172158f937091c4f3e8749484b68c352d3373568bab8a78aed360910bd76d23f03fb56d2baf90c8568d6c1c25613c3a4dc69fc27a4b2690527e3fbbc53d59d34c03a2a9a21b30a0cee50a1b472ea6b371329e46a30946d8d15fec109a0cbf3c3c0524f785edb4b16f324be271f4c10ad8213ed1acb490bbfa83d002b592edb6f1ef34a3381e5d2335558adeffe1c372f0c26dff4a61f1d6aa65ee28dba462db599d3dcbdbb37cb2fdb6c5a741f0cad5cce4721ec6d7a43e8a610d0a72fefa7a21d83a5eff75ecae3182f122",
      "238f3668e336735db17005f5568b8dada58e0edc4137b03f1e439579e1f382c16e74558e2a236c20378f25d5d7d876b17295fa37089db88c919de2f617dafcc38d48050000",
    ],
    [
      "ETag",
      "LqoT1p7XWuHLYgpgAP9M8Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-136-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d90416f82401085ffcbf40a09524b13130fda908a31c6623d358d5997115160e8ee6c0c25fcf70ed6f4dcd3ee7bf3cdec9bede052d4194ce050e45f0e4dfb9023bf0d9714ad2bd9cad1506d113c4056b990ba3ce58be50593f6fb9abb7063964fdb76369d0a61f5092b05930e8e05969985c94707b5aa50daf6fbe62208b7cda092f57bfc1aa76254940dc67ab75acde6ab187aefaf4555e46afe57d367efc1990e291ed160ad71c8d0183aa3e66458cfaaaa29d1b7e48c460b37f856c80db94619225f1c7ff418f9a3681c84a3300a82e7682c64495a7141b5c0bbadc4032656654a57590f02b8eb79cb68378664bac5ec5e91912f343ccc12888d430fb4923f5a14fcabfb1f35e6794f80010000",
    ],
    [
      "ETag",
      "clhgHJkeIyzwgu2PrJ5SyA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "0000000002ffedd34b7282300000d0bb64ad0e9f80d29d289f8a62a301944d0642b01690001a854eef5ea7d7a8ef0eef1b2494b2ae23d7ba6017f006fa44312674924af3839006fcb1b3aa9e13bdf0d278cacaa65cc350ce89d8509a61a46d1f8422315661734b3a7f5f17feca9d7d2a66e52783ba81da252d3dac55cb2e8c78dfcda2d57b734c167bc9d0f1320e03c6398cfc7cdfe436b7637937730364d68ab3f8ba97b18473f958b5aa8b692908127598dd14fb9489adb4829a1d08186c1083583686ec70d8ada9e6dd952b3be56611bac441a937c8562168aeebd1d81f0a341f73c9a9d5a532ad1a6bf2f2f2ef8011600f7e6e5947cecfedaa661823f0579f5c7bce9eff4d96b4ac053fbf15ce3f6419040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:29 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-137-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "3014fd2bc87b6d0224348448d19a2564cd9490959076eb3421e35ca85b8229369daa2aff7d17d374ad2aad4fd8bee7dc73ee074fe48e173b322209cfee6ba81e3fdd8a849c105034c3d773fe23bdf8f6e5ae3fbf8ef26b735ea733de9b8cc788e00d4bd27d9943478aba622047db4d37ab445dd24a880e26ead87db7630f1cab67f70696e50e1c244ac8d3252fee907ea3542947a67914ef66426439d092cb2e13fb9777f3a1679695b805a6a4f956d34419697ea0fa39178c2a2e8af176830e6a09550c7bca73f4f08fba4bcedee6ee72baef66087ee00c2863a22e54e30b533051a43cab2b9d958c9e88f6f9ea4036fed29f46061379bd2fe282eee1c4d8514563f55882310fd72b6311ccd7e16a122dd641bc999efbab4977ba5e6e57c1c6b83af743df5034c941738db171a66f015e507f0752f142ab47cd73a3fcdca1c5fbc134049496d00663d71a507b6879499ab82c1df64f93d482241926ee29ed2716f31c70760950e46951cda285286c1b52db1ebab1e3d17eec9cba69ec79e92e0696b0530f7a0ef51c7238217f2aae60c66529246f3b44aec245e4c751b80da693c8d725a4b4ced5ac35d614f0daa3c20263cbb211f89fba0e4d940b546b5abe08223f9c4ca3c5a5df4e790919658f9b7b9c734a730988a615365041b5123b6c1a09262b7f86603db5efc7a024a35f4fa4e97be3e455db5fe8110eb1b1acf4976ca270117cd5768e884b9ad71af2d01e4889966fb03e747df88d48dcd4360bb9d8fae14fd23e8590420505fb78a208d6818fffb8e3f62318f71f75a4c23b2e10938d0aaba05d24aeeb7d66bbb6657943a2c1957a17b3bdc1b16d4d8e2623eca150cf25b5db8f95b662b57c0161107720d0ed3afc05636362bb7f040000",
    ],
    [
      "ETag",
      "HiXfQJBk3FZTlZ/FufDi2A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-137-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f",
      "83",
      "40",
      "0cc7bf4b7d6509e86486c4874de724d9a632e683c62ce751181328de1d9a65d977b787731a35d117687bbf96feffc7069ef22a81001ef3ecb941b53ec8d0dcd82042dd1446f3aba64a23388046644cde92be0865b4ccabbb7484f4527823f72e3b3d6542cb259602820da439168986e07e03952891db24154d592ddacc01b3ae6d711647e174c4794989cda7f3f1b83f180f61ebec1b1361c4a2e5ffd1f6b07560458f11a6a8b0926877a915ad509ad0cad4a2ac0bec686a94440d2ddc1e648a9a5a28a20e573ade51afe3f95df7d03bf45db7e777992c480a9353c5f07cc60b8221238a885e5926f80ca83664c569fb7ce1729eb44a6c184e631e6317fc0a2894a492c59f5ccdfb2e055fc307b6b3e03b274a6a2ab3a72ec657fddfc6b1a79fa3cefbf1f007a10d3bb547e270329cc5fdc9b5e51e76d2076b83fa5a111ba9d17ae8b9dd93e39eefbedb7a46d66afe4e6054830e48c17fc7656e204845a171fb06512226b17b020000",
    ],
    [
      "ETag",
      "VosFIcRhinZfGeovl1G0Zg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `date` > ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-138-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85546b6fdb3810fc2b04ef4b0bf841c9965f4090f3394a6b209153596e10b4079ba2562e135954482a8511f8bf7725d5697cbdbb00022472676766c95d3dd3079927744263b97d2c41efffb857316d51b07c8bbb9797dfb3cb442cef3fca5494a1ffb8bfbd9e7d3a3b4384acb20cdf1519b48d2ab50033592d3b5badca826ba5da48d4767aa3b633e833d771078c0d077d4c3490a557327fc0f46fd61666d2ed1ec53b5ba5b619f0429a8e50bb97fdee93db2db4ba07614df754b38b32a6fb86ea79a604b752e567ab253a280de835ecb8ccd0c3afd424fef394bb23f9aeb345f09314c08550656e2b5f4821549eca6da96b563a79a6b5cf571f74e95ff9b3886c3408a593b54c36841bb25e170f2d325bac82e8dd86ef2ac6cdfb2a705c90cb70714d36051af8c60d980db9fde8873e219b845bd890af25633d20e7641a5c9013f679405641e02f23f2eefc3df9102e5637e4afbbd710f49d80b132af5d473ccea072fcf364e7bf5f6895c02dda6882eb211b7067c4c6711a0f453aea7971ca208e47f1d0e3bd9889711ffa490c1cf36cc55e67f15ce5633e183bd0e32271c78ca59e9b3a717fe08d3c770cdc83a407de7818bb9c1e5af4bb96162ea4299491cde9d2db701ef9eb285c05b369e4d765a4bcccec4563ae2ae2b54f8b45ae197310f83fb51daaa854a8565dd73c88fc703a8be69ffda643ae60cbc57ef9883d92f2cc00a2b9e63bb0a0af558207476f16cb79345f04d32bcca8affde6883074f2e5f95742b42fea93b6f59b5e54451c5e117ee65959039e9a0fea3297b599db763c7a38b4fe9b691a86d33b54e75af3fd3f625811cedbe15f756a7cbd6a9c1e751d5aa9bdb83859f54f56037af8fb804f8be2c435caf4d3ca0fef68b315420a1a72f1768721b80ebcfde7384e3182718e51c7585c63430b53a9080d4d63cb5d5d4b933d741c361ad31aaced6f31d71b1e6fafe2a8186107b9fd595233c5f52956a1d2bc803088fd18cc830f18fd01397beafd47050000",
    ],
    [
      "ETag",
      "FFwlFdcSjHifcuREqyWMCQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-138-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6a",
      "c2",
      "40",
      "10",
      "fc",
      "97ed6b421323a6157cd012ac22526385421139e39a46936c7ab7692be2bf772f8aa5f4a52f77b3b333dc0c77847d566ea00beb2c7daf511f6e52e49905319a3a67235745a541700059a5a29c137d05e3711caad1cbb0b88f6ec359b8eef77aa230c91b160aba47d866986f0c745f8f50aa02c5b65a557b91f0a1b2d368fa1c0da35888823696982e2693fe6012c1c9b95a544175c9ff322d4f0eec681de316359609da0c95a61d263cb2f58c2aaa1c5d43b54ed040236e16a9a6ba529ac815c6f5833bd7efb4bd96dfea785ed8698b32a7447146a588177389074cacf2983ea51e0422d00d94a6dbe6fc10bad5d4b8a0a5c53f3bffba0bfeecdabf7dcbcb638303a379d224d10ddad4deb9c103d9562c6d59d7e840a2e4031e333ecfa76ff1a25e6cdd010000",
    ],
    [
      "ETag",
      "Soox3JJR7aIXGm9E/7Q7bA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "0000d0bb646d9d18014d77808845414bf9c986891821a24401f9a4d3bbd7e935eabbc3fb06244d695d270d2f6809dec140101ea7e30354a3160acfb6e026e639216c81bf64d66c3f575991694a27e4a3711ddc7386c3c00924c9ca8c697b0acf163a6fd4694d668a20c25bec85d646b48236c15a904b7ee7fa7450eb0be2aa49d9d0b3ad58bfad428f5fae792d97f7681fcccd83f9a61f75e7d1217d52e268b7edc2bb24711ab40fc1748e0aeccfef7deb4e96ac98354933a97acb5003e8af39826e699c7670d17e1cbc477789e3d8d490ade4c456f654750c67d91c3759da8d5f5efe1d3002b4bfb18ad6097b6e9fca188fc05ffda4196ef4f95fa3a4a215f8f9050e8e371019040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:31 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-139-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "5d6f9b3014fd2bc87b6d1248480891a2354ae89a29212b21adb66942c65ca853822936adaa2aff7d17d374ad2aad4fd8bee7dc73ee07cfe48e170999909867f735544f5ff62226670414cdf055e6bf165730d8d37db0f2be27c1e57ee5a68fd3292278c392f450e6d091a2ae18c8c96edbcd2a5197b412a283893ad6c0ed5823dbec5bfd91693a231b8912f274c58b3ba4df2a55ca49af7712ef66426439d092cb2e1387d7f7de43bf5756620f4cc9de7bcd1ecac8de27aa5f73c1a8e2a298eeb6e8a096504570a03c470fffa8497cfe3e7797d3433743f0036740191375a11a5f98828922e5595de9ac64f24cb4cf3707b2f556de3c3498c8eb431115f400674642158dd45309c645b0591b4bff6213ac67e172e347dbf9a5b79e75e79bd56eed6f8d9b4b2ff00c45e31c34d7981ae7fae6e305f513908a175a3d6c9e1be5970e2d3f0ea621a0b484361839e6885a63d38dd3d861e978308c5313e2781c3b433a884de6da60273150e46951cda2852886663f76901bd1c449227b3ca211752d338274c8060336b2996b91e31979acb8820597a590bced10b90996a11785c1ce9fcf424f9790d23a578bd65853c05b8f0a0b8c4cd342e07fea3a36512e50ad69f9d20fbd60360f97d75e3be51564943d6def71ce29cd25209a56d84005d55a24d834e2cfd6de02c17a6a3f4e414926bf9f49d3f7c6c99bb6bfd2431c626359e92fd986c1d2ffa6ed9c10d734af35e4a13d90122ddf627de8faf80791b8a96d1672b5f3829fa47d0a20850a0af6f94411ac039fff71a7ed4730ee3fea4885775c20261b155641bb485cd7fbc2762c6bdc77880657ea43ccb5ed53db9a1c4d463840a15e4a6ab71f2b6dc56af90ac220ee80afdb75fc0b728d42e97f040000",
    ],
    [
      "ETag",
      "slZDQe3jajRLEJdRHjL9fw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-139-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d92614fc2400c86ff4bfde84886e0d4257e188a8a414418d1680c39b66e0cb775dedd2493f0dfed4d44a326fa656b7b4fbbbeef6d054f491e820bb3247e2e51563b31ea1b138c5095a956fc2a28570816a016319377f6e55975fe5ade26bbd17d6be679cbfd6a1c1f1f33a182396602dc154409a6a102f76105b9c890db024acb2c9fd69905ba2a4c71ec8f7a8373ce330a4d3e98f4fb5ea7df85b5b56d0c8516d39aff47dbe3da8205cd4618a1c43c40b34b21698181ee19994a64458a0d45a50c50410dd707b1a4b21092a8c19546b375d4683a6d7bafb9e7d8f681d36632a540e884728627635e103469918e68c932c16140d6212b8eeae70b9793b05662c2dec0e73166c1af80c4806438fd932b78dfb9e06bf8c036167ce7444665aeb7d459ffdafb6d1c7bfa39ead4f3bb3f08a5d9a92de2f7aeba63dfbb1a1aee7123bd53695443496ca442e361d36e1fee1f38f6bbad2764ace6efb85a96684120f8efb84834b8914815aedf00206dac3c7b020000",
    ],
    [
      "ETag",
      "X0JFyGzuWi+fZ3bAAw5ySg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `stamp` > ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-140-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "9b4810fd57d0f69756f2c7626cec588a529fc3b5a831f661dc2aed9dec6519e8369825bb4b7a51e4fffd06a8d3f8fa11090976e7bd376f7667782037a248c894c422bbad40ddbff82263d221605886bb3755f2efcaa682d94b3d9fd3a5f32e5898ecfc1c11a26669b62f73e86a59290e7aba59f73225ab922929bb28d4b587b46bbb433ab0072ea5637788440d797a258a1ba47f36a6d4d37eff98bc974999e5c04aa17b5cee1ff7fb77837ea9e417e046f74f73f6318dee3f93f522979c19218bf3cd1a1d541ad416f64ce4e8e13b35895f9f6af704dbf73204df090e8c735915a6f685125c16a9c82ad5a892e903697c3ef9206befca9b47d64e01972ad98a6467316d6db7e54dc79a2f3741f472c7f6b5e2ee551d382eac3fc3e5c2da9568e033d3a077d687b75ee859d64e1b34b7b3feae2875c0bab066c1a57522ef07d62608bc7564bdbc7865bd09979b95f5c7f553081a4f401b5134b62316e7505bfe76b4fe8f375a1398411f6d703ba62eb327f42c4ee3314f27ce284e29c4f1241e8f9813537e3684611203439ea9d51b162b64e1f0313f3bb3594c1dee008cc08598db63274d47c384024c580cce240172e890af4a18b814ba945ab4c74b3e847ee46da37013cc6791d79491b22a3797adb9ba88a73e0d16b9a5d446e06f6a3bd45121315b7d5f7e1079e16c1ef9efbdb645ae2063fc7e7d8b4d92b25c03a299627b30a016129d4ec96ab9f6237f19ccae90d1dcfbea88d064fae9e13b21ba2f9b9336cd9b44fe02af69b658351e8ea0f72caf1ad45dfb41067440bb74d0b547913d98daced41ef628a51fc9e1d0f9b5f82c0c67d7688829c5eeff17c32271060f3fcddae09b556bfee8c22675b6474f27abe1c9ca25877f0ef874084e619b99fcb5f1c26bd26e85908282823fdf74086e02cfff4d8e938d609c6dcc83636204f638d77516aea0ed75b16f6a69d9631418",
      "bba4012bf3436ce2bac70bad356a45d84361be95d44e76738a75a8d28f200c628b067ef006a3ff017529c8585b050000",
    ],
    [
      "ETag",
      "kudxP10ia1OsCC0O3KNMtg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-140-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d91414fc2401085ffcb786d93b6548c241cc0a06010a5cac118429676a885b65377a72021fc77678b211a2f5e7667e67d937d2f7b804d5626d08165967ed4a8f71729f2d416119a3a67235745a541700059a542bef6d0f07d94ec6e1f5a9b4bffbaf5f8399ceeba5d214cfc8e8582ce015619e68981cedb014a55a0ac2d16d54610de57b61b4d5e067783480605257630998dc7bdfe780047e7bca20aaa4bfed7d2fce8c09a9611ae506319a3f550695a63cc231bcfa8a2cad13554eb180d347023a49aea4a69225726ae1f7aaedf0ebdc00fda9e77d50e85cc29569c5129f0ec59ec0113ab3ca29dc4839600ba2925e9aa39b732f69b18db06b0de7e6ac1590bfe68e16f6dfefd587fcf689e34897583d6b5774a704336154b5ad6353a102bf98061c6a7fef8057bfcebc6dd010000",
    ],
    [
      "ETag",
      "YAestJRdwFM3k5193OxHQw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "00000002ff1dd04d7282301800d0bb64ad4e4423d01d45118c20482be82613e327e1475040053bbd7b9d1ee1bd1fc48580a6616d9543893e50cf157d2446476cc40ffcfaf2f3454a8d2c771f787b397b5efb68258d03bef7f58450eaaf01e268a7f1ca5ccb02dfe3dcb36836f55819ab9826ac522a5fdf53c38eb333562db919be26ae97cdcb3e71856b76fcb01572d3ad964aed1c9830b56436c4fc4003aad8aa4f6fd16da8cdb1bc8517a7b49afb0b14d3eec2569db904ea71278bd3dc8f9605b1b7ba0ca6c0c8ecbcb3b295b3d32e2e597641bb089dfeb477eaa7483deb3b32c3e378e310282a3440d05dd31a1a96bedd13a2eb03f49fc0dafe0aef894fe035d4e8f70fb1cc3c4f23010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:33 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-141-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536b6f9b3014fd2bc8fbda24e4053452b446295d22256423a4dd344dc83617ea96608a4daaaaca7fdfc5345dab4aeb276cdf73ee39f7c133b9174542268489eca186eae9cb9d64e48c80a619be3e6a375d1c76b7225ad09fc1234b6feee1904da788100d4bd17d994347c9bae2a026bb6d37ab645dd24aca0e26eaf447fd4edf19d983fec0b16dd7192151419eae44718ff45bad4b35e9f54ee2dd4cca2c075a0ad5e572fffade3b0c7a6525ef806bd57bafd94319d5fb44f56b2e39d54216d3dd161dd40aaa18f654e4e8e11f356117ef737705dd7733041f0407cab9ac0bddf8c2145c16a9c8eaca64259367627cbe3990adbff2e791c5655eef8bb8a07b38b312aa69ac9f4ab0aec2cdda5a06579b703d8b969b20dece17fe7ad69d6f56bb75b0b56e167ee85b9ab21c0cd79a5a17e616e005f513505a14463d6a9e1be5970e2d3f0ea621a0b4823618bbb643fb9e7dce52e6f2d41b8e596a03631e73c774c86c7e3e8251c28022cf881a162d6491b0311b7b6c1033183af1c8b1694c3dcf8b1d3a180e1c37a1c9604c8e67e4b1121a2e852aa5126d87c84db88cfc380a77c17c16f9a68494d6b9be6c8d3505bcf5a8b1c0d8b6fb08fc4f5dc7262a24aa352d5f06911fcee6d1f2da6fa7bc828cf2a7ed03ce39a5b90244d30a1ba8a15acb049b4682d9dabf44b099daf7535091c9ef67d2f4bd71f2a6edaff40887d858d6e64bb651b80cbe193b27c435cd6b0339b40752a2e55bac0f5d1fff201237b5cd427eecfcf017699f4248a182827f3e51049bc0e77fdc69fb118cfb8f3a4ae31d1788ab468557d02e9230f5beb0ddfe70ec7ac4802bfd21e678e353db9a1c4d46d843a15f4a6ab71f2b6dc56af50ac220ee4060da75fc0ba25257fe7f040000",
    ],
    [
      "ETag",
      "wt7fHvUhiTHaXNwbfWkevg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-141-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d92614f83400c86ff4bfd0a09184443e20736a76ec1a90c35c62ccb0d3a4481e2dde1b22cfbeff6704ea326fa05daded3d2f73dd6f05cd41904302ff29716e56a2f477d6d8218555b6ac5af866a8560016a9133992d6befbe7fabf21179cb76748b773a1e85c7c74ca8f4112b01c11a1605969982e0610db5a890db522adbaa9e7599057ad598e2248987e333ce2bca4c3ebe89a2b0170d6063ed1a33a1c5ace3ffd136dd58f044f3181728b14ed1ecd2487ac2540f8d4c25aaa6445b512b5354d0c1dd412ea96d8424b2b962bb9e6bbbbee7ecbbfbbee31cfa1e9325a5421754337c33e105419316654c4b96093e03b20b59f1a27bbe72b9c83a25261c8e131e6316fc0a484c4966b33fb986f77d147c0d1fd8d682ef9ca8a8adf58e3a8d2ec3dfc6b1a79fa34ec264f083509a9dda21c9f0623049c28b2bc34db7d27b2b8dea4a121ba9d078e83aded1c1a1efbcdbda2763357f27d0b2450b52c17fc779a121588852e1e60de98aa7e77b020000",
    ],
    [
      "ETag",
      "dwn4YCVsgJo4wuJVeWtRJA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `amount` > ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-142-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85547f6f9b4810fd2a68ef9f56e7d8806dec588a522ea12d92837318374daf277b7719dc6d8025bb4baa28f277bf01ea24ee8f0bb204b3f3debc37bbb37e2037a24cc98c30b1bdad41ddfff15532d22360e816578b4f7e38bcf27812a765b6fc74f1e79dfff1fadbc9092244c3d2b4a87238d2b2561cf46cb5ec6f95ac2baaa43cc24247cec83d72bc91ed3aae67db136f84440d793617e50dd2bf1853e9d960b017ef6fa5dce6402ba1fb5c168feb833b775029f915b8d18343cd01cae8c10baaa7b9e4d408599eac96e8a0d6a0d6505091a387276acade1cd6ee0b5af4b708be131c28e7b22e4de30b4b705966625babb62a993d90d6e7b30fb20ce6c159626d1470a9d2b5483716d5d67a5dddf4acb3c52a4a5e6d68d154dcbc6e12fbc07a1b2f2eac4d8506be500d7a635dbd0fe2c07a027cae6d7b08d6a9e547e7d641fd30b25651142c13ebd5e96beb5dbc585d5a7f5d3f87a0f314b41165eb3ba12c87c6f3f7bd0d7f3ed286400d1ae992eb89ed51676a1fb38c4d78361d8e59660363533619d321b3f9f1084629038a3cd3546f59b49425b863eada3c759c2973277c02d4a536009bd2d466d3a9c718cf32f7784c763df24d0903e74257528b6e7fc9551c26c13a8957d1999f046d1b19ad7373de996b9a78eed360936bdb7610f83fbded9aac90a8d61c58182541ec9f25e187a09b91396c29bf5fdee2946434d78068aa680106d4854c71e3c8e5621926e122f2e7c8680ffe728fd064f6cfc31321b9afda9d36ed9bbc9d2ffc046fc3ee59cd0f34af5bcc5df7419cfe1811bbdeefcbf871ec5fa334558adeff90c376bc96fe0b8516df469dcd4745d2a8ed23f7201a1d441ed9fdbbc35f8fe085eb94c9dfab20be26dd520c192828f9cbe385e036f1f21fc7fe122318af31ea6883314e33d78d0a57d04db528da5e3af6c4190d1d8fb460657ecae1b33fbaa64653110a28cdf796ba4bdcee6293aaf5230893388c5118bdc3ec7fe580115b46050000",
    ],
    [
      "ETag",
      "mZAI3W6cTRdnfSZM+vAXYw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-142-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fc2fdbc72690a4c1b6820f5aa4b588d468684b1139934d1af3b1f1ee52b1e27f772f8aa5f4a52f77b3b333dc0cb7873cab62e8c22a4b370dcadd558a7a6a4080aa29b4e2aba64a2158805aa4ac7cdfe477b3ebfb67f99de87cdb8f5f57f3b770daebb142459f580ae8ee21c9b08815743ff6508912d9b65cd6394bf4ae36d368321f3e0e03264a8a0d3109c7e3fe603c848375b188929a4affcbb43858b0a65580094aac2234196a496b8cf4c8d453a2ac0bb41535324205adb85da4929a5a48229b19dbf53ddbedf88ee77a1dc7b9edf8ac2c28123aa38ac5e18ce381262d8a80b65c0f6e58205bc84d93f6fc62da6b6b9cd1c2e09f9d7fd9b97f76ee6fdfe2fcd860a751bd48e2e80a4d6ae7d4e0814c2bcd6db56cd08248f0073c65fa341f8eebd90e28dd010000",
    ],
    [
      "ETag",
      "Yqk8S+9JrzftkwAdWbTXUQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "00000002ffedd34b7282300000d0bb642d0ee153a5bb68fc4206148ae226033138ca578229e0f4ee757a8dfaeef09e20668c0b41db2ae325f8047dac5963364e547494ea10b8fbe3c138792872380d8babe08544b48251da959770fa908a79b0a38e29c1b74f9653fac14e8d5aee58e4cb2fbb76831d462e59ee344773d595633d1a679d27f71242c4110e8b8ed47ee22cb275e1858318fa39c41aaeb6457c1822c9f33e275b4357cbac9a6f169d7a5250d0cbc5a625ac75f5d4f0cc8b306039bbdd499fc54c6f9564e25109ed7cda5c52b9f2ce151ece50607336d9fbb7d836276984b7a9ae392e19bfbdfd3b600478575f1b2ee8f5b55d372d6b04feead3b6aff9ebff8cc70d6fc0cf2f6a3e1af219040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:34 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-143-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85535d4fdb3014fd2b91f738da264dda944ad5a84a1895da74a429684c5364bb37c190c621766008f5bfefc6a10c84349e62fb9e73cfb91f792677a2d892316122bbafa17afa722b193922a06986af5f2ffb377fcaf43acdae235e6de985df0fe9e3648208d1b014dd95397494ac2b0e6abc5977b34ad625ada4ec60a28ee3b91d67e8d97da73fb46d7fe82151419e2e447187f41bad4b35eef50ee2dd4cca2c075a0ad5e572f7fade7be8f7ca4ade02d7aaf75eb38732aaf789eab75c72aa852c269b353aa8155409eca8c8d1c33fea969dbccfdd1574d7cd10fc203850ce655de8c617a6e0b248455657262b193f13e3f3cd81ac8345308b2d2ef37a572405ddc191b5a59a26faa904eb2c5a2dad7978b68a96d378be0a93f5ec3c584ebbb3d562b30cd7d6d579100596a62c07c3b526d689b9857841fd2d282d0aa31e37cf8df24b87e61f07d310505a411b4c7c7b489d917dcc52e6f374e40e586a036323e60fa8cb6c7eec81b765409167440d8b16b2a06ce80d53d74d5c0ffcc463dc4ba83d62c900bc21b8eec8754629d91f91c74a683815aa944ab41d2257d13c0e9238da84b3691c9812525ae7fab435d614f0d6a3c60213db7610f89fbaf64d5448546b5a3e0fe3209acee2f965d04e790119e54feb7b9c734a730588a615365043b5945b6c1a09a7cbe014c1666a3f0e4145c6bf9e49d3f7c6c99bb6bfd2631c6263599b2f59c7d13cfc6eec1c109734af0de4a13d90122ddf607de87aff1b91b8a96d1672b109a29fa47d8a20850a0afef944116c029fff7187ed4730ee3fea288d775c20ae1a155e41bb48c2d4fbc2f69d81ed8c880157fa43cc71fb87b635399a8cb08342bf94d46e3f56da8ad5ea158441dc81d0b46bff17edfcccbc7f040000",
    ],
    [
      "ETag",
      "+V2hxpfZfgZRcrdaQ72Naw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-143-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d92dd4ec2401085df65bc2db1fc584c132e40519a0022941b0c214b3b40a1ed94dd2d8a847777b6221a35d19b7666f69be99cb33dc0264a4370611e2db739cafdc512f5a30986a8f2582b7e65942a040b508b25932f9762ee7576d1b6adb6afde64b389ababc963a3c1840a569808700fb088300e15b84f07484582dc16509c27e9acc82cd0fbcc1447fed0ebdf739e5068f2feb8db6db6ba6d385ae7c65068312bf87fb44d8f16ac693ec4054a4c0334bb6492d61868cfc85422c9622c29ca65800a0ab838584aca3321894a5c29956bd552d9a9d99572c5b1edba536332a640e8885286c7235e103469110fe9996582c3802c4256bc289e3b2e4761a1c4845edfe73166c1af80c4806438fb93cb78df95e06bf8c04e167ce7444279aacfd45df7a1f9db38f6f473d46dd36fff209466a7ce88eff5da23bfd91b186e7a92deda6b5403496ca442e361d9ae5d5fd51dfbddd61b3256f3775c2d73b42010fc7774220dee42c40a8f6f1d9112cf7b020000",
    ],
    [
      "ETag",
      "x/abIHviqEsqzIZkkl3hZQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `id` < ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-144-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8554614fdb3010fd2b91f705a4d2266d9a944a887525db3a95b44b5310daa6d6719c6048e2603b2084fadf774e28b4820d295272be77efbdb3cf7942b7ac88d110452cbdaba878fc74c323d44254e114562f68409d7c6677d3703efae192875ccec5c3c9092098ae92382f337a2479250895c3e5a29d0a5e9558707e044447966d1f598e6d76adae639aae6343a1a4593265c52d945f2b55ca61a7b3156fa79ca719c525936dc2f397f5ce7db7530a7e4389929d7dcd0ec8c8ce07aaa7192758315e9c2c17e0a09254ac688e59061e5e4be3e8f33e779be1bc9d02f89e118a09e155a1b42fa020bc48585a899a150d9f50ed73e7032dbca9370e8db5a0848b78c5e2b581a5b15a95b72d633c5bfae1c11ae79a717da813dbc0f81accce8d750906aeb1a4726d5c7ef702cf30d69ae177659a3d629c1a23ffccd8e39ef8c6d2f7bd45681c9c1e1adf82d9726e7cb9da8580eb984ac58ada7388a38c6abfcffb3a797b9cba002b30d12457aee9606b601e4749e49264d0eb478949a36810b97ddc8b4c726c533b8e28863aa5d9eb2a5cf0c21ed0be6b01a43bb07a56e4c6dd1e75b163bb8ee946b6ddb307961927a689362df42098a2674c965cb2666fd1653009bd55182cfdf128f4ea36125c65eaac31a79bd8f5a9a0c995695a00fc4f6f1b9d651cd4f4614dfcd00b46e37072e135f331a529268f8b3b9890046792021a0b9c5345c5398f61e3d07cb6988493993f9a42457de8f32d42a2e1afa7d782f0b1ac775ad56fad05f760b3c37881b3aa46dc371fc8eaa3cda6f56f8a51108cae40160b811fdfa77f97bfc6d75163f1450f69b56dd4dd8becbdc8419b3f1b785a082e5aa38c7e2ebde00a354b014da8a005f978b4005c273efe616c2f2f80e1fa828e5410c32413a95588a0cd44b3bceea5a976adbe7beca21a2cd49bdce0d8d91e9be6d08c34a7857a6ea9b9bcf52eea54255f40908441f427fe37c8fe05d5df882b3e050000",
    ],
    [
      "ETag",
      "VeRe6mO42gTPAJ7cwmsPrw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-144-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d91dd6ac2401085df657a9b4062170b82175aa45a4434ad2db488acc92446939d747f6c457cf7cec652da9bd29bdd9933dfb0e7b027d8972a831e6ccae2cda13e5e156817be48d0b8ca1abe1a52062100b4b260d26d5fe66210ed3f06cf62fce4d4ec7e916d17fd3e1326dd622da17782bcc42a33d07b3d819235f2da7addec19b1c7c67793d9e3e86e94b05053e685d9723a1d0ca7233807df2bb226a7ecbf9656e70076b44930478d2a45efa1d1b4c3d44e7c3c23eba6c2d090d3291a68e1765068728dd444212b612c44187745d4893bdd28bae90a262b4aa52d4931bc7c607b60c9ca2aa1778e07d70ce8b6e4a4797b1e58eeb4310e2de0bdfd9cc57fccc4efd9eaebb1e1d1a2996b62eb06bdebe892e0967c2acb69ad7618402af903c6a5bdf4e74f437a2566dd010000",
    ],
    [
      "ETag",
      "uhZP4A0kxAW4HVunNJQdhQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "00000002ff1dd0417282300000c0bfe4ac0e4603d21b22484b2b35a511b830110204102228483afd7b9d3e61f707d024617d1fdfda8a35e0054c14ea8b6471568c6050a47f50526b9c32544ca20c70ea4fe39c0a1655216ef6de507191a132cd23fcd8d4b029bd90462bb31b6b2ee7d0cd3785a11de82e3771c78fd85747daba8955add3af5a5e1574af6ff792bbd43b48b57b548a39b08fef205b9177f48abc6d00b1dd3a89d140b70d88ad57d2cbc7b34c0c926be2d3915759de23c8c8ee32d871df1b3b1b61631bbe3597fc3a51b65eea11afb5bd3859e474596a8e42d4682c2071366acd8e6006d843f08ef5317fba5748d767e03f21be4d823d27b68c76ac03bf7f10301ca523010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:36 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-145-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85536b6f9b3014fd2bc8fbb826401ac8438ad628a56bd684ac84b4aaa6091973a16e08a6d8748aaafcf75d4cd3b5aab47ec2f63de79e731f3c932d2f12322631cf1e6ba8f65f1e444c4e08289ae1abd85757d75b975f7dbd3583bbd1eac73010dbe9648208deb024dd953974a4a82b0672bc5977b34ad425ad84e860a28edd773ab6dbb77a76cfb5ac81db47a2843c5df0628bf47ba54a3936cda378371322cb81965c7699d8bdbe9b4f3db3acc4033025cdf79a26ca48f313d56fb9605471514c366b74504ba822d8519ea3877fd4243e7b9fbbcbe9ae9b21f88933a08c89ba508d2f4cc14491f2acae7456327e26dae79b03597b0b6f161a4ce4f5ae880aba831323a18a466a5f827111ac96c6dcbf5805cb69385ff9d17a76e92da7ddd96ab159fa6be3f6d20b3c43d13807cd3526c699bef97841fd04a4e285560f9be746f9a543f38f836908282da10d4603cba5f6d01ac5693c60e9f0d489530be278180f1c7a1a5b6cd4877e1203459e16d52c5a88c2b5a86b8f9261048e43a37e3c3c8da8cd9c08586f68432f49dc7e4c0e27e44fc5159c73590ac9db0e91db601e7a51186cfcd934f4740929ad7375de1a6b0a78eb5161819165d908fc4f5d8726ca05aa352d9ffba1174c67e1fcc66ba7bc808cb2fdfa11e79cd25c02a269850d54502d45824d23fe74e99d23584fede73128c9f8d73369fade3879d3f6577a88436c2c2bfd25eb3098fbdfb59d23e286e6b5863cb50752a2e57bac0f5d1f7e231237b5cd42ae375e7047daa70052a8a0609f4f14c13af0f91f77dc7e04e3fea38e5478c70562b2516115b48bc475bd2fec81ed3aae4534b8521f62aeeb1cdbd6e46832c20e0af55252bbfd58692b56cb57100671077cddaec35f570a66e87f040000",
    ],
    [
      "ETag",
      "oyrKQk6iK+W/RY9OJ8RokA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-145-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f",
      "83400cc7bf4b7d9425602633247b603a1dc93627b00763cc721edd8602c5bbc36559f6ddeda14ea326fa026defd7d2ffffd8c1535e6510c043be7a6e506d8f56686e6c10a36e0aa3f95553a5111c4023564c6ed69e3b4a92525f85bd281e0de4f1e0f632ecf799d0728da5806007cb1c8b4c4370b7834a94c86d928aa6ac166de680d9d6b698a47134bde2bca4cce6d3f9781c0ec643d83b87c64c18b168f97fb4ddef1d78a4871897a8b0926877a9153da2349195a9455917d8d1d428891a5ab83d58296a6aa1883a5ce978ddd38ee777dd13efc477dd9edf65b220294c4e15c3f3841704434614316d5826f80ca83664c5cbf6f9c2e53c6b95d8309aa63cc62ef815502849658b3fb99af75d0bbe860fecdd82ef9c28a9a9cc81ba1c5f87bf8d634f3f475d84e9f007a10d3b7540d268324cd27032b3dcfdbbf4c1d6a09e296223355a0f3db77b76daf3dd375bcfc95acddf098c6ad00129f8ef18e50682a52834ee5f0114df3ece7b020000",
    ],
    [
      "ETag",
      "wh10HSSmsGA7IRHBc+BYFA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `purchase` < ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-146-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85547f6f9b3010fd2ac8fba795926012f253aaba2c655db6946484b4aab62931c650b70453db348aaa7cf71dd0b4cdbaad12129cefddbd77e73b1ed11d4f433440018fef7326b71f6e45806a886912c3e9c49c8ff0166f46710b4fbe6e2633f3db97cee6e40410bc8852649d25acae442e295383c5bc114b9167440a51874475cbeed4ad8e8d9b56b38371b76343a0624934e1e91d84df689da98169eec91bb11071c248c655838af5f3b9f9d03433296e19d5ca3ce434814699efb09e268212cd457ab29883825c31b9646bc213d0f0121a061f0f733738593762003f70ca08a5224f75a10b525091463cce6599150d1e51a9f3d5079a3b1367e41b2bc9a890e192872b832863b9ccee6ac668ba70fda31559171957c785636f189fbde985b1ca40c00d514cad8cab2f8ee7182f472be3678e718b1aa7c6d03d330e18c6aeb1705d67ee1b47a7c7c6b9375dcc8c4fd7af21a03d644af3b454ee93206185eaa7ee8edf5e6a114034f056ce65177788d5c3fd200aba34eab5da41845910f4826e9bb4024cfb36b3c3801188d345f6328aa422edd86118844d467a5d4cadd0b2592fb0db512bea06419f44a419f671d8b331dad5d04672cdceb8ca84e25587d19537f69da5ef2ddcd1d077ca32229227faac125714f15aa7862297185b00fc4f6dbbc2cb05b0155736767dc71b8efcf1a5534dc984c5846ee7f7302711491403349164cd3493172284c6a1d9743ef6c75377388188f2ea677b8442831f8f2f01fe362b3badcb379afbded83d2f05ec119724c94bc843f58186196845bb5deddf69869e37bc066a2225d9fee1837260e1767fa528f1a555c9dc535aa860db5bcd03cb3eb03a68f76b074f0dc1ca55cce8fbc2f1ae5175e4b1884996d2f7c70bc0a5e3fd5fc77e8d010c8b0c3c4a830dd34c55c14225aba69aafcb5aaae8aed56d553f1e4da47ee36b5badfdd515398a8c6ccd52fd5452b5c665170b57ae9e41e0846174cb5bdcfd06f9b0fad348050000",
    ],
    [
      "ETag",
      "L/SC0y0wCg30LJwLP/KH6w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-146-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cb",
      "f4aaa0412c0472688aa496346d6c038550c2aa136ba2ce76779622e27fef98869e7bda7d6fbe997db3039cebae8439e475f5e5d0f43715f276ba64685dc3560e4d9d45f000595542668956ee89f2f3f13d5d3d06cb678c9a74bb5808618b4f6c15cc0738d6d89416e6fb013ad5a2b41d0efa2c08f77a52e9e62d592599182d9593b1d9add777cb7502a3f7d7a25a721dffabe963f4e04479864734d8153865d0864e58703aad6755ab1bf42d3953a0850b7c2954869c5686c817c70fa3d80fe3289885b338086ee348c8860ac5357502ef5e251e30b16a32fa96f52080ab5ef68cf6c5904cb7585e2b32f29ea6875902b171e841a1e48f1e6afed5e30f28d4169e80010000",
    ],
    [
      "ETag",
      "REpauMobkfXIGJ0BOe4lIQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "08000000000002ff1dd04b7282300000d0bb64ad0e4590d01dd42102620c2a05370c60f8b6848640814eef5ea74778ef07245946fb3e16aca12d78057322eb9b6c934a46384acb152fe5922b07f7933031b98d15d5a147e08d21c89cda38b51e9a34df9a96eb028b77d22019d62c9e0f89fa9877028566afb54c3f7b8d7af840c731909d0c16c42aa02fb6dc88b68182d2bb8d714a2435cd64c3eb9a0743b65960e53b78d9ef066d1eace2f2b538c28fb0587b320a78691e234ab015d6707f91d879c8a936969acacb61628ca0fb5a4f4e96e9064397cfb6af9c2bb739613e5eb2475df96f37dfe58c8015a0535771dac7d5d3bd55757d05fe13623177f43961d284530e7eff00cc58fe7923010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:37 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-147-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85535d6f9b3014fd2bc87b5c134848038914ad514ad748095981b49aa6091973a16e09a6d8648aaafcf75d4cd3b5aab43e61fb9e73cfb91f3c93475ea6644a129e3f35501fbe3c88849c115034c7d79bca6639d8ccb9be2bf72c1f7c55666ecd673344f09625e9ae2aa02745533390d36dd8cf6bd154b416a287897a8391d31b8c47d670301c5b96331e21514291ad78f988f47ba52a3935cd93783f17222f80565cf699d8bdbe9bfba159d5e2019892e67b4d1365a4f989eab74230aab82867db101d3412ea18769417e8e11f354d2edee7ee73baebe708de73069431d194aaf585299828339e37b5ce4aa6cf44fb7c7320a1b7f21691c144d1eccab8a43b383352aa68ac0e151857c1666d2cfdab4db09e47cb8d1f878b6b6f3def2f36abedda0f8dbb6b2ff00c45930234d7981917fae6e305f553908a975a3d6a9f5be5970e2d3f0ea625a0b4842e183bd6980e5c6b926489c332d73e4f320b92c44d9c736a27169b8c6094264091a745358b9658334096d9491a4f9805f1885aa3989ebb4e3c49dd89cb6068a5ae4d8e67e44fcd155c725909c9bb0e91bb60197971146cfdc53cf27409196d0a75d9196b0b78eb516181b1650d10f89fba8e6d940b546b5bbef4232f982fa2e5add74d7905396587f009e79cd14202a2698d0d5450af458a4d23fe7ced5d22584fedc72928c9f4d73369fbde3a79d3f6577a84436c2d2bfd2561142cfdefdace09714b8b4643f6dd815468f91eeb43d7c7df88c44dedb2909bad17fc24dd530019d450b2cf278a601df8fc8f3b6d3f8271ff51472abce30231d9aab01aba45e2bade17b6830b623b44836bf52136b027a7b6b539da8cb08352bd94d46d3f56da8935f2158441dc015fb7ebf81729f7c8947f040000",
    ],
    [
      "ETag",
      "Qp3cge3c7HWnvcg1+t/g0A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-147-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f",
      "c2",
      "40",
      "0c",
      "c7",
      "bf",
      "4b7d1d71531c66090f535197000a8c178d21c7ade070bbcebb9b0609dfddde54346aa22f5bdbfbb5ebff7fdbc043ae3288609e2f1f6bd4ebbd25da910bc668eac21a7e55a40c820768c592c95150ae54a2e4e179fa302fc397fd41706347dd2e1346de632920dac022c7223310dd6e408912b94d5251976ad6641ed875e58a93749c0c2f382f2973f970daefc727fd1e6cbd5d6326ac9835fc3fdaeeb61eac683ec6056a5412dd2e95a6154a9b3899469455812d43b59668a0819b83a5a6ba129aa8c59556d0eeb482b0ed1f0407a1ef77c2369305496173520c4f27bc2058b2a218d333cb849001dd84ac78d13c9fb89c678d121726c394c7b805bf021a25e96cf62757f1bef782afe1037bb7e03b274aaa95dd51e7fdabf8b771ece9e7a8b338edfd208c65a776489a0c7a93341e5c3beeee5dfac9daa2b9d6c4461a741e067efbf8a813fa6fb69e92b39abf13595da30752f0df71995b8816a230b87d05d0b916107b020000",
    ],
    [
      "ETag",
      "Q1mjnInc3FTkbm6z/M1ZtQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `purchase` < ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-148-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "91f70f48fd91b469132a21d695b0452b29a429086d53ebb84e312471b09d4e1dea77dfc5a140c736a448c9f9dedd7b77becb23ba67f9120d50cc560f25159b0f773c460d44155ec1e9a57b8e8bafb2d3cdcfc6d6af87ebbbb5e37787c7c780605594c45991d2a6e4a520540e66d3d64af0b2c082f326246a5ab6dbb4fab6d9b13a7dd374fa36044a9a266396df43f8ad52851cb4db3bf2d68af3554a71c1648bf0ecf9bcbdeeb40bc1ef2851b2bdcfd9061ad97e87f524e5042bc6f3e3d9141494928a39cd304b41c34be832feb89fbbc570d65a0178cd08c584f03257952e4841789eb0552974563478445ae7ab0f34f5c6de28321682122e9673b65c18581af37971df30469359101d2c7056655c1c568e9d619c859373635180805b2ca95c18d75fbcd0335e8e16c6f7d234bbc4383186c1a9b1c7e007c62c08bc69641c9c1c1a9fc3c9ecc2f874f31a02da97542a966be5118e535aa97eeaaefff652ab00ac80b776ce1db38f2dd73c8a93d82189dbedc58949e3d88d9d1eeec62639b2a9bd8c2986385565d75138e779d7247d079ba4173bb4e7381d27b6139c24364d2cdb7669d74a2ce26097a06d03fd144cd153260b2e59dd61741dfa91378fc259301a469e2e23c165aa4e6b715511af752a28726e9a1600ff53dbb6f2320e6cd595f941e485c351e45f79f5948ce90a93cdf401e624c1a9a480c60267545171ce97d038743199fa913f09866388d0577fb1434834f8f6f812106d0add69a5df681a857ef0590bd821ae705a6ac8bafe40b800ad68bb6dfc3bcd300c8737408d85c09b3f7c500e2cdcf6af141aafad5ae68ed24215dbceeaec59f69ed547db1f5b781a0856ae664697332fbc41f55148132a",
      "684ede1f2f006bc7fbbf8edd1a0318161978a4021ba699c88a85085a4f35cb742d75b463b98edb411a2cd41bdf9169efaeaeca5165a419cdd55349f51aeb2e56ae523e83c009c318e85bdcfe06471cb5a748050000",
    ],
    [
      "ETag",
      "Q8MapKs23nFL1zqWjv7I3A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-148-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d514d4bc34010fd2fe3d104921aa3167ab0526aa0148df62052649b4c62da6467dd0f4b29fdefcea652142f5e7667de07fb1ebb874d234b18c2aaa93f1ceadd598df6d10f391ad75ac39722691002402b6a56ca8a5eb2e426993a97aeea0cebc579a9b6a3112b4cf18e9d80e11eaa06dbd2c0f0750f5274c8b6b737b56189dd29bf65f3e7c9749233d051e981f96236bb1dcf2670084e16d19193f65fa6e5218035ad72ac50a32cd067509ad658d8ccd733a2532d86869c2ed0402fee895a93534213858c8471721dc669120de2411a455769c2ca960a611b922c5e3c713cb064459bd396ebc1050b743f72d3aa3f3f191ef435fc74d967fbc9c5272efdc325bf7dcbefc7c63b8be641134737e85347c70677e45b596e6bb5c3000ac11f70dfd8e37ef80247d854b4dd010000",
    ],
    [
      "ETag",
      "nfoYI494Guu6bgIegU+dpw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "4b7282300000d0bb642d4e1a304a778a20285850289f0d1363e413ad365081747af73abd467d7778df8050ca9a266faf9c7d80573010a48fe9f800e7c91dcad093ca8bb32af56c0a21dabb4109cde890cf6a921fbd262e70b683ae7d472eef5bc598aa6ee66bd7a023fbb3b5228b6572e2f651354c5a95091774b72930d7b797be34ae716bf45a2a71fc7e5ac612fbb9e41ccfe39a165ff64c4dfc7582a3ddf9537c5db4908a65774001c6a2426acf82cde05325f66aeb8845c4acbbbe551626baf8274db1dee6d20cd6b3d021294bdba8cb3a7b5f84d2e935bb2e2683b4500a1dcb8bc64f4fff0e1801d6df2ac19abc7a6c5727ba3e027ff5f376b8b1c7ff05238209f0f30b917932bd19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:39 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-149-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b6f9b3014fd2bc8fbda249090a714ad5142d76c812c84b4eaa6091973a16e09a6d8b48aaafcf75d4cd3b5aab47ec2f63de79e731f3c937b9ec76442229e3e54501ebedc89889c115034c5d79b5fdf63de53abcd62976e5cffa9f8f170e86da65344f09a25e9bec8a0254555329093ddb69d96a22a6829440b13b52c7bdcb206b6d9b5ba03d31c0e6c244ac89215cfef917eab5421279dce49bc9d0a9166400b2edb4cec5fdf3b8fdd4e518a3b604a76de6b765046763e51fd9a09461517f974b74507958432843de5197af8478da3f3f7b9db9ceedb29821f3903ca98a87255fbc2144ce4094fab5267259367a27dbe3990adb372e681c14456edf330a77b383362aa68a80e051817feda3596dec5da7767c172ed85dbf9a5e3cedaf3f56ae77a5be3fad2f11d43d12803cd35a6c6b9be797841fd18a4e2b9560feae75af9a543cb8f83a909282da10986437340ad91398e9268c89251af1f252644d1281af6692f32d9d8063b8e80224f8b6a16cd45deefc556620d69384e4c16da940dc271d4eb8730a411a3567f6cf7801ccfc853c9152cb82c84e44d87c8b5bf0c9c30f077de7c1638ba848456995a34c6ea02de7a545860689a1602ff53d7b18e72816a75cb975ee0f8b379b0bc729a29af20a5ecb07dc03927349380685a62031594ae88b169c49bb9ce02c17a6a3f4f414926bf9f49ddf7dac99bb6bfd2031c626d59e92fd906fed2fba6ed9c105734ab34e4b13990022ddf627de8faf80791b8a94d16b2d939fe0d699e7c48a0849c7d3e5104ebc0e77fdc69fb118cfb8f3a52e11d1788c95a8595d02c12d7f5beb087d6b8df1d110d2ed587d8c0b64e6dab73d419610fb97a29a9d97eacb411abe42b0883b8039e6ed7f12fccb11e4e7f040000",
    ],
    [
      "ETag",
      "YZJdi3tLQDUgQMRwpKqy3Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-149-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d926f4fc2400cc6bf4b7d3b928163e8125e80a29000f267c41843c8b19531dcd671775309e1bbdb9b88464df4cdd6f67eedfa3cb73d3cc559081e2ce3685ba0dc9d45a8c72698a02a12adf89553a6102c402d2226a7cb876ecdd9aeebafe7e36137bddf2e559145cd26132a58632ac0dbc32ac62454e03dee211329725b404991668b32b340ef72539cfa93def096f39442930f67fd7eabddefc0c13a3586428b45c9ffa36d7eb06043cb09ae506216a0d92597b4c140f78c4c25d23cc18aa24206a8a084cb834852910b4954e14aa5ea5c56aaae63d7aa35d7b61baec3644281d031650ccfa6bc2068d22299d00bcb0497015986ac78553e9fb91c87a51213f6863e8f310b7e05240624c3c59f5ccefbae055fc30776b4e03b27522a327da26efa77addfc6b1a79fa3ae5b7ee707a1343b7542fcdea033f55b8391e1e647e9ed9d463592c4462a341e566de7a2de70ed775bafc858cddff1b42cd08240f0dfd18d35782b91283cbc01e8d7fc157b020000",
    ],
    [
      "ETag",
      "SbYH24qh5x3QNHmWqbsung==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `date` < ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-150-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8554fd6fda3010fd572cef974ee2c3044800a9ea18641b5b17da103a55db044ee230b7499cda4e2754f1bfef9c9416f655295262dfbbf7de9dcf79c0b73c8ff108877c735732b97d752342dcc04cd38dd9cd062abbfcf4d177e289737d496ea6f46ef8f3f41410dc64299a15296b2a51ca88a9d172d1da485116540ad104a266a74f9a1dbb47ac8e6513e2d83d48542c4dce797e0be93fb42ed4a8ddde8bb736426c52460bae5a91c89ef6dbf756bb90e286455ab58f35db20a3da2fa89ea522a29a8bfc74b90007a56272c532ca53f0f09c1a876f8eb95b9c66ad0d80ef79c468148932d7c6175044224ff8a694152b1e3de0cae7c1075eb8e7ee24406bc92221e3158fd7882ab45a15b70d34992fbde0644d33c3b87e6d02fb057ae7cf3fa37501067e50c5d41a7df9e0fa2e42eb986ab646df4a42ba113a43636f8a8ed8671e5a7a9ebb08d0c9d96bf4de9f2f2fd0dbeb4308f88e99d23caf5c07344c9971fcd8d9d99f076a12a8061b7570e5109b7606641826a11325836e3f4c080bc341e8f4693724d1b0c77a71c828e469c35e65d15ce4a165d32e0d637bd84de2c4ea59c4614e6893b83f20496275e361b7c38004ef1af8a7e49a4db92a84e27577f1177f16b8abc05f7a9371e0566524b44cf5b436678a38f4a9a1c815211d00fea7b69d8972016ae6b8665ee0fae34930bb72eb0939671b1a6d17773023094d1503349534639ac9cf2286c6e18bf96216cce6def81c32aa63bfd823141e7d7d784e08b645d5695dbdf1d414b13b20bca2695901eeeb0f6c118b348905938c77bbc6bf99c6be3fbe06752a25ddfe16838ae0beedfeaa53e1ab55ed74afdbc146edc9c5d1aa77b4b2f1eefb0e9e06861b572be3cba5eb5fe37acb6709932c8f5e9e3000578197ff1cfb5b0c60b8c7a0a334ac61a023655422c9eac1e659554b9ded402fed3eaec052ff11eb91eefef40c87616419cbf56349f52daeba6842a57a024110e6d19b79ef21fa0bf81eac4d47050000",
    ],
    [
      "ETag",
      "bm8smQKJR7dC7YQ0jDaq9w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-150-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d914f4fc24010c5bfcb786d630b1523090731044908912a170d21cb322da57fa6ee4e310de1bb3b5b8cd18bf1b23bf3e64df6fdb227c8b36a0743d866e97b83a6bd4a9197ae88d136055bb96aaa2c8207c82a15e72a98eee93aa17cd9de85af593f35461fd3d1481c56efb154303c419261b1b3307c3b41a54a94b5cda6cec5c26dedbad9e265329dc42294b473c262359fdf8fe713387bdf2baaa4a6e27f2dadcf1e1c681b6382062b8d2e436de8809a670ecfaab22ed0b7d4188d163a7337480d35b53244be287e7813f8e1200a7a616f1004b783489c0569c519550efd59e20113ab22a60fc183be184c570a69d29d47917b1dc6b133b86c3f67e11fb3e8f76cfdf5d8b865b44f8624ba45973ab8103c90a362a165d3a0075ac9073c667ce9cf9f11e30d52dd010000",
    ],
    [
      "ETag",
      "U0Gho/fokQy91Zi3grrcvg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "1d",
      "d0",
      "4b",
      "72",
      "82",
      "300000d0bb642d4e0a88a43b9800052b504529dd30210d24135404e4d7e9ddebf408effd004229ebbabcbf497605af60262a5ad37501adcf012e49149fdd902f56fab070b3318726720aed1095dfb3141a1f28ab6021acf18ea45f4de3c7d5d56d7c178382ddd431e21ae69645b8ceb848619a0589811092cbc994f6cbdd4be81b72c2b11c75aa7da9846641098dd398e3ccc5dc09b7eacd253e55511169f5a97e679972f64789b3d0e97a2f1eb25dfd982fba19d825de51273d76fb4539881ef24056fb25f2143327aca4dde6126e9b03b1073c95ba3271ec1f750956804d8d6859978ba75bdb20b402ff09793f37ec396133d2b216fcfe01a4858cec23010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:41 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-151-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "536b6f9b3014fd2bc8fbda249010f290a2354ae996a9211b21adb66942c65ca81b822936edba2aff7dd7a6e95a555a3f61fb9e73cfb90f1ec98e9729999284e7b70dd40f1f6e44424e08289ae36bfa2758ed7ecc3d9996d9fdeefccbef667b7d359fcd10c1354bd27d5540478aa66620a7db4d37af4553d15a880e26ea3843a7e378aedd77fa9e6d8f3c1789128aec82973ba45f2b55c969af7714efe642e405d08acb2e13fbe7f7de5dbf57d5e2069892bdd79a3d9491bd77543f168251c54539db6ed04123a18e614f79811efe51d3e4f475ee2ea7fb6e8ee03bce8032269a52695f98828932e379539bac64fa488ccf1707b2f12ffc4564315134fb322ee91e4eac942a1aab870aacf370bdb296c1f93a5ccda3e53a88378bcffe6ade5dac2fb6ab60635d7df643df523429c070ad99756a6e015e503f05a97869d423fdac959f3ab47c3b184d4069096d301ed91e75c6f624c99211cbc6836192d99024e36434a483c4661317dc34018a3c236a58b414e564e4d8f6204962ea7983d81d8e26f178e079317899eb0e3d97c28492c309b9afb982332e2b2179db2172152e233f8ec26db09847be2921a34da1ce5a63ba80971e151618dbb683c0ffd475d0512e504db77c19447e385f44cb4bbf9df205e4943d6c6e71ce192d24209ad6d84005f54aa4d83412cc57fe1982cdd4be1e83924c7f3e12dd77ede445db9fe9110e515b56e64b3651b80c3e193b47c4252d1a03b96b0fa442cbd7581fba3efc42246e6a9b857cdbfae177d23e8590410d257b7fa2083681f7ffb8e3f62318f71f75a4c23b2e10935a85d5d02e1237f53eb1477dc77175fb115cab37b1be373cb64de7d019610fa57a2aa9dd7eacb4156be4330883b8038169d7e12f612e747b7f040000",
    ],
    [
      "ETag",
      "dzNMkZA6sdnfwkFJxuUhWA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-151-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d926f4f83400cc6bf4b7dcb22e84425f105d3a9cc39f7074d8c31cb0d0a3281e2dda12ecbbebb3d9cd3a889be81b6f76be9f31c4b78ccca183c9865e9538d72b195a21e99608caaceb5e25745a542b000b548994c5f8bbc3c74cf2f74efa6ee75b6fdc9adbb3b3a3a6242450f5808f096906498c70abcbb2594a2406e8b28af8b72da6416e845658a93701c0cce382f2836f9e0badff73bfd2eacac4d632cb49836fc3fdaee5716cc6936c6042596119a5d2a49738c7460642a515439b614d53242050ddc1ca492ea4a48a216575ace9ed372dcb6bde3ecb8b6bdefb699cc29123aa392e1eb092f089ab4c8c7f4c232c1654036212b4e9ae73397b3b85162c26010f218b3e057406244329efec955bcef83e06bf8c0d6167ce7444175a937d469ffcaff6d1c7bfa39eac40fbb3f08a5d9a90d120697dd49e85f0e0d77bf96de59685443496ca442e3a163b70ff6f65dfbddd6633256f3773c2d6bb42012fc779c671abc44e40a576f7d0acc6e7b020000",
    ],
    [
      "ETag",
      "gxmln96HKtJVuJB/ASY63Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `stamp` < ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-152-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "6f9b3014fd2b96f7a593f230843ca5aacb5ad621352423a453f750628c49dd124c6dd32aaaf2df7781a66df6aa8404f63df7dc735f3ce25b91c5788423b1be2bb8dabebb91116e606ee81a6e671ff3fb89679f1597dbbbf376e08e679e5c3c1c1f0342945e9a6ef29437b52c14e37ab498b7d64a163955523681a86975eda6d573886dd93d42fa3d071c354f930b91dd82fbb531b91eb5dbfbe0adb594eb94d35ce816939be7fbf6bdddce95bce1cce8f661cc3684d1ed37a29ea49251236476bc9883824273b5e41b2a52d0f0e21a471f0eb95b826e5a6b00df0bc62963b2c84ca90b2898cc12b12e54c58a478fb8d2f9ea03cfdd0bf734442bc59954f152c42b44355a2ef3db063a9d2efcf068453725e3ea7d69d81fd0a7603a41ab1c045c53cdf50a7dfdec062e422b6d40dc0afd2808e9307482c6fe193aa0f77cb4f07d771ea2a393f7e83c982e66e8e3d56b08088fb93622ab6487344a7929f9a9b4de9f1d2d1da8011db571d9273d6a0dc8304aa23e4b069d6e94101e4583a8dfa59d88b0a1c39d38e214fc4cc95e79d14c669615c5838165434f864e4c7addde80c7431a3b5d6675ba836142bac9d0a111de35f08312869f099d4b2deaf2e2af8117bacb3058f8a7e3d0add24868919ab35a5c99c46b9d06925c126201f03fb9ed4aab9010adec97e7876e303e0dbd4bb71e910bbea66c3bbf83214968aa39a0a9a21b6eb89ac89897db319d7ba137f5c717e051f57db647683cfafef8e2106ef3aad2a67ae3d09b409bc69359a5610fbaa46951a1eeeb0f0cd5224d02b3dc0d2d7b64754696d322847cc3bb5de3dfe4e320185f8120aa14ddfe6683246107777f8d5ae1ab532d7eafc2c265b4674d0727e7e0d4c3bb9f3b781a18b6b08e8cbf2cdce00ad757014fb8e2197b7be8005c19defe9bec371bc0b0db1007d6c4089871a6cb284cf17ad6c5a6caa5f6eedbd660d8c7155899df6d36b17afb86961c25",
      "23dff0cc3ca5546f7655c5d254e867101861447dcf3f07eb2fc38e33c15b050000",
    ],
    [
      "ETag",
      "PBpvMI2DuVyqG/REAPIoUw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-152-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d91414fc2401085ffcb786d435b110d090731a82812ad12120d21db329442dba9bb534825fc77678b317a315e7667de7c937d2fbb874d5a2ca00b519abc57a8eb9304f9c916219a2a63235749854170005925423e4da28fd7969fac5ad38be9fdf5437617a97ad7eb0961e215e60aba7b58a6982d0c74dff650a81c656d3e2f3782705dda6e387e19dc0c4211725a58613c198d2efba3011c9cef15955355f0bf96660707d61485b8448d458cd643a9698d310f6d3ca3f23243d750a56334d0c0cd20d154954a13b9a2b8fe59e0fa9db617f841c7f3ce3b6d21338a15a754083c79167bc0c42a0b6927f1e05400dd949274d99c5b918326c6b601acb79f33ff8f59fbf76cf6f558bf66348f9ac4ba41ebda3b26b8229b8a252deb0a1d88957cc06dcac7fef009417e5556dd010000",
    ],
    [
      "ETag",
      "QUbzZ/1gh/W8WKFMlJbayw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "1d",
      "d0",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00d0bb642d8e14c2a73ba00a425bc1a2a29b4c8050f948222180747af73a3dc27b3f006719e11cf5b4262d78050ffc622eb365bab2926135c7e1eced8564d7b2d6cbf4ec428938e7e0e4df85ee7fec6dd57058b546ae5c1ff5b08cd5a0142c74d5319f2a5b37ccb8123b4d99d42cb9743cf283f764a66d6139aa5715d0e0f21199512064e836494d139bc5be833fadb7ed505c47ae6b27d4124121be78637150e2866f762cbce3cd141c08419b7c071f736ec515e2dee59a6a2be766256b2a6a9fe24cb95773b30dd388498cc9c397c5a0e46bee70bad56d048ffd37580032b1b2231c954fb7024d7301fe1350ff60e4396113dc910efcfe01dbc5e21e23010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:42 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-153-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "fd2bc8fbb8263c02e421456b94d08d2a212b9056d53421630c754b30c5a65354e5bfef629aae55a5f513b6ef39f79cfbe0193db02a433394b2e2b1a5cde1cb3d4fd119a21217f07a591dd8a5e73f48d75c5d5e7fbddd354b125ecde780601d4be07d5dd281e06d43a898eda261d1f0b6c60de7034834309dd1c0746dc3322dd730c6ae0d4441cb7ccdaa07a0df49598b99ae9fc48705e7454971cdc490f0fdebbbfe64e975c3ef2991427fafa9838cd03f51fd56728225e3d57c17818356d026a17bcc4af0f08f9aa5e7ef730f19de0f0b003f31423121bcad64e70b52105ee5ac681b9515cd9e91f2f9e680226fed2d638df0b2dd574985f7f44ccbb0c4893cd454bb08b71bcd0f2eb6e16611fbdb2089963fbccd62b8dcae779b20d26e7e78a1a7499c965471b5b976ae6e015c403fa342b24aa9c7dd73a7fcd221ffe3603a02480bda0793b1e16273624cd33c1d937c3272d2dca0693a49c70e1ea50699dad4ce528a81a744150b57bc9aba4e8a6d03279683cdc49e666e82a70427191939a6357233d776d1f10cfd6998a42b266a2e58df217413fab197c4e12e582e624f9590e3b694abde5857c05b8f120a4c0cc304e07fea3a7651c641ad6bb91fc45eb858c6feb5d74f794d0b4c0ed123cc39c7a5a080c60d3450d266c333681a0a161b6f056035b59fa7a040b35fcfa8eb7be7e44ddb5fe9310cb1b32cd5174571e807df959d13e21a97ad823cf5075483e53ba80f5c1f7f031236b5cf82ae765e788bfaa790e6b4a115f97ca2005681cfffb8d3f60318f61f7484843b2c10119d0a6968bf484cd5fbc21e5b963b72900237f2436c3c714f6deb727419e99e56f2a5a47efba1d25eac15af2008c20e04aa5dc7bfea1098ff7f040000",
    ],
    [
      "ETag",
      "JnyiJEIkt61DJV+YUrCcRQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-153-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "401085df65bc2db1e5a768132e4041318050ca952164690728b69dbabb9510c2bb3b5b118d9ae84d3b33fbcd74ced91ee039ce22f06019af5f0a94fb8b35ea89097c5445a215bf72ca148205a8c59ac9ea64785df49c4d2db177d2be7c1847f1e67ad76a31a1c20da602bc03ac624c2205ded301329122b785941469b628330bf43e37c569e0f747779ca714997c341b0cda9d41178ed6b931125a2c4afe1f6df3a3055b5afab84289598866975cd21643dd37329548f3042b8a0a19a282122e0fd6928a5c48a20a572a4ea35671dcba5d75aaae6d37dd3a93098542c794313c9bf282a0498bc4a71dcb0497015986ac78553e5fb91c47a51213f647018f310b7e05248624a3c59f5ccefb6e045fc30776b2e03b27522a327da67a83c7f66fe3d8d3cf51b7eda0fb83509a9d3a23417fd89d06ede1d870f393f4ce5ea31a4b6223151a0f1dbb7ed568baf6bbad3764ace6ef785a16684128f8efb88f35782b91283cbe013291cd1e7b020000",
    ],
    [
      "ETag",
      "2QM9uF1h3l0wr0/JPdih9w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `amount` < ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-154-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8554614fa34010fd2b64ef8b26b5054aa16d62bc5af1ae49a54aa98db9bbb4cbb2e02a657177511bd3ff7e03586dcfbb332181d979f3de9bdd595ed03dcb22d447214b1e0a2ad65fee78881a882a9cc0ea73ef2ab0326f9edeb1e7c8b7d6defcb4d57d3a3e06042bab245ee5293d92bc1084cafe6cda4c042f722c383f02a223a3631d19b6a59b8669ebba635b5028691a8f59760fe5b74ae5b2df6a6dc59b09e7494a71ce6493f0d5db7aebd16ce582df51a2646b5fb30532b2f589ea49ca09568c67c7b329382824150bbac22c050fefa551f8759fbbc9f0aa9900f891118a09e145a64a5f40417816b3a410152beabfa0cae7ce079aba637718684b410917d182454b0d4b6db1c8ef1bda7032f38283255e958ccbc332b10db4737f72a12d7330708b25954b6dfeddf55ded1df0b3d0f536d14eb48177a6edf18f3c6de679ee34d00e4e0eb56ffe6476a99ddeec42c07944a56259e53bc0614a4bcfaf7b3bfa78a465015660a44e2e1cddc64657ef8571e890b8dbee84b14ec3b01b3a1ddc0e75d2b3a8158514439d2ad9ab2a9cf12c7242a363744393c69d1eb50836896d50c7c276378edb916ee81635b019a14d033d09a6e819933997acde5f34f74781bb08fc99371c046ed5468c8b549dd5e6ca26767d2a6872a1eb0600ffd3dba6cc320e6ae5818dbcc0f507c36074edd63332a60926ebe9034c498c5349018d055e5145c5058f60e3d0e5643a0a46136f30868aeae02fb70889fa3f5ede0b82755eedb4aadee87c3c1904701b363b9cd7382d2acc63fd818c6607109bc6bf6906be3fb801692c045eff918376ecaafc2f0a15be8a6a9b6f8aa854db46e65e64ed4536dafcdac0d34070e16a65743573fd1b542ff934a68266e4f3f1027095f8fcc7b1bdc400866b0c3a52410cd34c64a94204ada79aadaa5eea6ac76cdb4e39070016ea43cee939dba32b394a46baa2997a6da9bec4d52e96a942be812009c3e88dbc6f90fd0d4dd80dd946050000",
    ],
    [
      "ETag",
      "x9QT4nNWljixdR4yNWB/8w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-154-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d91416bc2401085ffcbf49a4092a616040fb5955608a2a9d2431159e3248d2699757762b1e27fef6c2cd253e9657766de1bf67dec097665b3813eaccb62dfa239de14c83357a468db8aad5c9a1a8be001b22ac4b9c0ed5b61f4d774fe34676b66b93924fb62301087cd3eb056d03f415e62b5b1d07f3f41a36a94b5d54aefc4c247edbaf1643e7a1ea532a869e3069345923c0c93119cbdeb8aaaa96df85f4bcbb3075b5aa798a3c1264397411bda62c663876755ad2bf42db526430b9db9130a43ad5686c897891fdec57ed88b83288c7a4170df8bc55951a6b8a4c6a1bf4a3c606255a5f42978702b06d395429a77e741c6618771e80c2edb6f2dfe438bae5ae4b4e5cf63c323a39d1a92e8165deae042f0488e8a85964d8b1e644a3ee0a5e44b7ffe06e5e29437dd010000",
    ],
    [
      "ETag",
      "UejWgrpzPTDTtsrQfrvLqg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "2d0e5528a43b7e5a546c35043f9b4c80a0fc252025747af73abd467d7778df8046116b5bd2d539abc01b107406a7d134948d632f8ffe6732fa3b29a1d8fb12aaaf98970c3b17a2afa543cc7b3df14ca9c94f161d37ac3bbc6b5eaf0e6bb4ffa4b9cdeb73a8415f2bca6051a692d638219403e3882fc2bea384afd4947a83a9140b5c892869aff9dc3de92edfdeba5d5da3f03c86682597b14e332357faebd27e1516d2bc6243360d7a093ee4c0c162bd9432288e052477ab53cab1dacf64c58db630c1e6e14cac34dfda5e8de6f110479065d7d6359a0a3b8da94c9f9efe1d30016cb8a59cb5247d6c9fab104ec05f7dd2891b7bfc3719e58c839f5f25d06a2419040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:44 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "accounts" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-155-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85536b6f9b3014fd2bc8fbb8268114f292a2354be88a94900e48ab6a9a903117e696e0149b545595ffbe8b49ba5695d64f60df73ee39f7e117f2c0cb944c48c2f3c71aaae72ff72221670414cdf176b5bf53de554ae57756c1d7c765789f3a8ba7e91411bc6149badd15d091a2ae18c8c926ece695a877b412a283893a96e374ac816df6adfec03487031b89128a6cc9cb07a4ff516a2727bdde49bc9b0b911740775c7699d8bedef7f6fddeae12f7c094ecbdd7eca18cec7da2faad108c2a2ecae9264407b5842a862de5057af8474d938bf7b9bb9c6ebb3982f79c01654cd4a56a7c610a26ca8ce775a5b392c90bd13edffc90d05dbaf3c860a2a8b7655cd22d9c1929553456cf3b302e83f5caf0fccb75b09a45deda8fc3f995bb9a75e7ebe566e587c6ed951bb886a249019a6b4c8d0b7df2f180fa2948c54bad1e35d78df2b143dec7c134049496d006e3a139a0d6c81c27593264d9e8dc4932139264940c1d7a9e986c6c839d264091a745358b96a2341d3bc9e8d08ae9686cc6369c3bf168608f629b31d6b7acb1938d6d7238234f1557b0e07227246f3b446e032f72e328d8f8f359e4ea12325a176ad11a6b0a78eb516181b1695a08fc4f5d8726ca05aa352df7fcc80d66f3c8bb71db292f21a7ec397cc43967b49080685a610315542b9162d3883f5bb90b04eba95d9f82924c7ebd90a6ef8d93376d7fa54738c4c6b2d25f124681e7ffd0764e881b5ad41ab26f7fc87181d0f4e137027151db24e4e7c60dee487b1540061594ecf3812258073e7f70a7e54730ae3fea488567dc1f261b157cd9ed1e715dee913decdb034b3f57452bf52136ec9ba7ae35399a8cb085521d4b6a971f2b6dc56af90ac220ae80afbb75f80b3a552d0e7e040000",
    ],
    [
      "ETag",
      "MvYtIHdasBcre+qLSjd5Dw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-155-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f",
      "c2",
      "30",
      "10",
      "80ffcbf9e8960c844196f000689488a8031e8c21a46cb739ec76b3ed3448f8ef5e2b1a637cf0a5bdbb7ed7dcd7eee1b9a852886053e42f0daadd498ee6de0631ea461acd5b4d9546f0008dc8993ccfae4fa916c570f8d07fbf19c7b7a378bcc907032674f284a580680f598132d5103deea11225725b42b229abb5cb3c30bbda16e78b7832bbe4bca4d4e6b3e5743a1c4d2fe0e07d37a6c288b5e3ffd1b63a78b0a54d8c192aac12b4b3d48ab6989889d5d4a2ac25fa9a1a95a00607bb835c51530b45e473c56f75bb7e2bec04ed563b0c825ed8615252224c4115c3cb390f08868c9031bdb1269c31a05cc8c6995b5fb95ca4cec48693d982afb103fe049ce31772d4facdd452547f30abe304a39d417da7887d345a9556d0e9777b61f06937266b6cf8258c6ad08344f0275d1506a24c488d870f5b7d402e02020000",
    ],
    [
      "ETag",
      "DfK+opaiAAY8zMCROBRCbg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "0000000002ff1dd0dd5682300000e077d9b579063884ee2014a4508422dccd0e8c51d3e2670c94757af73c3dc2f7fd808252360c44b617d680473017babda4cb123af904d5ebde591d1484db7d62dc6e5e56b721e3c97bfaf65551d904c77eb0dab817fd051ed1143c57654a4c4d4310ad8c5e93547a704a363d0fae0faa39e3ac23ebefc9b3d799a59d302a7198e2f1e48e695d794459f9d8b101e5a12ee9d137230a9dc010a25c61232ffdb0c11bee6a70acfc4c8f26e5b7528d109a8751a828d1da1ac7f3ceb0dd0fee7152c6c560ee4ee6c6f49ffc436c9df53ae79f28a9fad9adb7e14b8023b000ecd671c106c2ef6e03d9f602fc27103977ec3ee1b24230017eff00f4cfbdc423010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:45 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "accounts" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-156-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85535d6fda3014fd2b91f75a48028100125a194d5726086d08adb6698a1cc749dd8698da0e15aaf8efbb76a06b55697d8aed7bce3de77ee4053db22a432394b2e2a9a662ffe581a7e80c51850b7815bf6444bd7d908a877bbcb38b6f3fece7fa663c0604d32c8937db92b624af05a172b45eb50bc1eb2d169cb72051cbedf55b6edf733a6ea7ef387edf03a2a4653e67d523d0ef95daca916d9fc4db05e74549f196c936e19bd7777bd7b1b7823f50a2a4fd5ed30619697fa2fab5e4042bc6abf17a050e6a494542379895e0e11f354bcfdfe76e33bc691700de31423121bcae94f6052908af7256d4c26445a317647cbe39a055300fa6b14578596faaa4c21b7a666558e144edb7d4ba8c960b6b165e2ea3c5249e2dc36435bd0a1693f674395f2fc2957577154481a5705a52c3b5c6d6b9b9857001fd8c4ac52aa31eeb67ad7cecd0ece3603401a4256d8289eff4b13b7086699efa241f747b69eed0341da47e0f7753870c3dea6529c5c033a286852b5eb9fdaeefe6b993e04196259e87d3446393e130c71ddf1976bdae8b0e67e85930452f98dc72c99a0ea1bb681607491cadc3e9240e4c0939ae4b75d118d305bcf5a8a0c0c4715c00fea7ae838e320e6abae5b3300ea2c9349edd06cd94e7b4c064bf7a8239e7b89414d058400315150b9e41d35038590417003653bb3e05251afd7e41baefdac99bb6bfd26318a2b6accc17ade268167e37764e885b5cd606b26b0ee8b84060faf00780b0a84d1274b30ea29fa8798a684e05adc8e70305b0097cfec39d961fc0b0fea02315dc617f88d42a44d0668f9829f7c8f63bbdbedb41062cd48798df754e5dd3397446baa1953a96d42c3f54da88d5f21504415881d074ebf0177b10988a7e040000",
    ],
    [
      "ETag",
      "rZsRe4yEbrjhav/gBJ/wuQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-156-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f",
      "c2",
      "301080ffcbf9ba251bc2c0253c80313a2544063c184348d96e73b8ed66db8184f0dfbd5634c6f8e04b7b77fdaeb9af3dc26b51a710c2a6c8df5a94878b1cf5cc0431aab6d48ab7866a85e0006a913349a37df49e6e1f9e66f783340a36bbabaad8cf86432654f2829580f008598165aa207c3e422d2ae4b684cab6aad73673401f1a539c2fe2687acb7945a9c9a7cbc964349edcc0c9f96e4c85166bcbffa36d7572604b9b1833945827686669246d31d191d154a26a4a7415b532410516b607b9a4b61192c8e58aebf702d70fba5ec7ef049ed70fba4c9694085d50cdf072ce0382262dca98f6ac09970c481bb27166d71d978bd49a98309a2ef81a33e04fc03a7e2167addf4c538afa0f66759e607cd0a81e25b18f42a3e27bdd41af1f789f76d7648c35bf84962d3a9008fea4bb4243988952e1e903655e8dc402020000",
    ],
    [
      "ETag",
      "oAwIxdjKYQJ8dI6bv9miwQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT `id` as __pk, `name` FROM `accounts` WHERE  `id` IN UNNEST (?)",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-157-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8553eb6e9b30147e15e4fdd9b4245c139a485517356c634a494b48ab6a9a12630c734b30b54da7a8cabbef609a5e56699590009fef726e7e40b7accad004a5acb86ba8d87db8e129ea21aa7001a7592dae2eab20b309cf7fcc3edb8b8b99bfb8383e06046b59126feb92f6256f04a172b25a0e0ac19b1a0bcefb20d4b7877edf1e7996633b23cbf2471e10252df339ab6e81fe5ba95a4e4cf3603e28382f4a8a6b2607846f9fcecd7bc7ac05bfa14449f3b5a70936d27cc7f5a4e4042bc6abe3d512326824156bbac5ac841c9ea959fae5b5f680e1eda000f03d231413c29b4ab5798104e155ce8a4668553479403acf171f6819cc83d3c4d8b06c636069acd7f56dcfd854784b37c6d77871666c1e15e5c6b8fa1ec481d161c3c8584551b04c8c8f279fc029a352b14afb24382d69ebf1d88bf0ed085a025658d22eb8f6ad11b68fac719aa73ec98fdc619a5b344d8f527f88ddd422638f7a594a31f054abae59b8e2959fe64ee68e3dcb1f033acb5d27f7d2ccb541c57731b63277841d0fdb68df437f045374c664cd25ebfa81aee23009d649bc8a4ea749a0cbc87153aa59975c5bc4cb3c1514b9b62c1b80ffa96ddf461907b7b6c1619404f1f434092f836ea6735a60b25bdec154735c4a0a682ca0df8a8a339e41e3d0f9621926e1229ace81a107757e404834f9f9f04c4876b5eeb4d26f348de3e93570b01078f74f0cf280bddeef5fd85de2b2d1108dd77f9dfe7d1740d0b65f7b787a08f6b5d34317ab20be46dd514c732a6845de9f368075e0fd7b77b80300865b003e52c13f2c1791ad0b11b45b32b6d519766cdf19b9be833458a837316fec1e3ad96ab48a744b2bf558527707746fda50239f401084dd88c2e81b44ff024d26558885040000",
    ],
    [
      "ETag",
      "dprWVnEd1cofJD+1OQD7OQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-157-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d",
      "6b",
      "c2",
      "40",
      "10",
      "fc",
      "2f",
      "db",
      "d70412b111041fb488b5046d132d9422e13cd7349a64aff75111f1bf772f169ffa723b3b3773ccdc058e55bb83216cabf2dba13e3f9468df3cc8d0b8da1a1e8a5a8310005a51b2f27d39f9e8bd2f5f66ce24b6ca49a6f5291f8f46ac30f20b1b01c30bec2bac7706869f176845836c2b0a7564893d2bbfcd17abe96c9a31d1d0ce138b759a8e27e914aec1ddd28dbb255f65f3c5ec3fc7e61ac081b619ee51632bd107509a0e28eddc7733a2513586869c9668a0137717a526a784260a9909e3c7411827fda817f792281a247d56d62485ada865f13ae76c60c98a3aa31377839805ba835c73df9d3f1ded3b78649c425d34588a4292563ee9e6ef89c9d9a279d5c4810cfa2cd12dd713f9ac963b58ed300029f84f9f2b7bdbafbf7092495eb0010000",
    ],
    [
      "ETag",
      "VOBY2VOJGus6tiSocLlwSA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "ff1dd0516e82300000d0bbf4db188421747f8841eba6aeb86aed4f03581504418a2d74d9dd677684f77e409265424aded5377107ef60486c38cec6a915506599efedeabccfaf61be3ded363ecb44359f43130adca3e2ac32be9c30a7d690309d4f909d635aeaa04d22ba54113125a4328e4ed42d1f8775c7ca8615eba1c50faa5c7d2069b85d11ccb10d1717d49bc85b7af6e6de7f282db1a29e1cd033764ab43b344703af2e0f6ae3f911b22ed5b4d3c6bdc27418ca6257f1e77e3a57c2dcbcc0318b2f0951d67f529d544eb1f79f4d7af4892038b16af2881d36ab55fc16362c002320fa266f85e4f9cbedb8108ec07f02ef8646bc26662269450b7eff004ba9fc0223010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:47 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-158-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "6b4fdb3014fd2b91f715daf4953ea46a54258c6e6dcad21404d314d9ce4d6648e3603b2084fadf779d5006421a9f62fb9e73cfb98f3c933b5124644298c8ee2b504f5f6e252347040ccdf0952f2faaf246f0fef76df663a5327e7dd3d38fd32922846569ba2b7338d6b2521cf464bb69654a562555521e63a2e3ce6074dcf1fa6eb7d3f55c77e8f591a8214f97a2b843fa1f634a3d69b70fe2ad4cca2c075a0adde272f7fade7ee8b64b256f811bdd7eafd94619ddfe44f56b2e39354216d3ed061d541a540c3b2a72f4f08f9ab093f7b95b82ee5a19821f0407cab9ac0a637d610a2e8b546495aab392c933a97dbe39908dbff4e791c3655eed8ab8a03b3872126a686c9e4a70cec2f5ca590467eb70358b16eb20decccffdd5ac355f2fb7ab60e35c9dfba1ef18ca72a8b9ced439a96f015e503f016d4451ab47f6d92abf7468f171309680d21a9a603c743dda19b96396b2214f47bd014b5d606cc48603da632e1ff7a19f30a0c8ab456b162d64d11df4dc1e75216609ebc6fdde781c8fbc612f1e50967aa9c729ed03d91f9147250c9c0a5d4a2d9a0e91ab7011f971146e83f92cf2eb12525ae5e6b431660b78ebd16081b1eb7610f89fbaf6362a24aad9962f82c80f67f36871e937535e4246f9d3e61ee79cd25c03a2a9c2061a502b9960d348305bf9a708aea77671086a32f9f54c6cdfad93376d7fa54738446bd9d45fb289c245f0adb673405cd2bcaa210fcd8128e05225e879ff1b71b8a74d0ef273eb87d7a4790a21050505ff7c9e08ae039fff6f87dd47306e3fea6883775c1faead0a57d0ac91a8ab7d610fbbc38e679b8f60653ec4307a689acd6133c20e0af35252b3fb58692356e9571006710382ba59fbbf9faebe037d040000",
    ],
    [
      "ETag",
      "cLPupZic4JUgKMrgcYZ3sw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-158-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d936f6f9b3010c6bf8bf79648d0fc15525f9036eba8689225f4555521c73e985b6333db64caa27cf79e699b4deb24fa06ee8edfc1ddc3e32379168a9398ec44f5b30573f85281fbee830dd8563a8bb7462b0b2420e06885e474351cae7737e9ae4a46bfc7575333bbbda6c9e5251296fd809a92f8484a01925b123f1c89a235601bd3b2ad55d165017187c617b7f9265dde605e6beef3e57d9625f36c414ec1b99153478b8eff44dbe329204f7ab781120c28067e96c6e827602ef56b5a5a37120656b78681251ddc3da88c6e1b6ab41e6065108d678368320a2fa28b49184e272324a566d409ad10bedfe280c46947e546ffc235493444c27431ae5c76d73dd605ef56f161baccf13d7ec2bf01ca986e952b7ac15218eb5ee57b07df64f89794f49320fe2b21fba00a1407d34789a6a09c1bb0b697d4b6a04d73c6e6ab55f65115c58d16bc1fdc8b1e40bafd19f89aad92ff498b0efba3d575922f3e10d6a16fce489ede2db67972b7f6dce39b11e60707766d34daca827754148e66e3e9247c35d995f6c6c3efc4ceb4101046f1ac7c138ec42595164e2fcf508a5689030000",
    ],
    [
      "ETag",
      "7O33PbGIbgA4z5C7r8JDaA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "1d",
      "d0",
      "51",
      "6e",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bbf45b4ca52bdafd292893091445c4fe34154b466088c23ada65779fd911defb01a22864dff3e156cb16bc022d6c322da617b8cc153429ad4d08ed7a762f51c0166c9eec95eded8ee9d7da0c783c42fcfe7dc04c4639573d8d94a464fdd62267f4235fb50d6d9b950faf9b45c092d12c5d8d76faf069876b762ee34b93e6e5a6f47c6e27fb8ee8ccda205ddd5da5f8d9184cbbac3b6d0fc75585873ae51f19095f68d1cd4f662e84d8e66d9c38565916b0a23460312b622c34b9446ed4cc1cedb72633c1ce43026e4feefdea591644e745e0c5cc5133730bc104c8b1ab1eb2e7d5d38d302113f09fc007ddc9e7c44a8a877c80df3f7a5a00e223010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:48 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-159-1640212600764",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "6b6f9b3014fd2bc8fbda06f2289048d19aa574cd9490959076d33421632ecc2de0d4369dba2aff7d17d374ad2aad9fb07dcfb9e7dc078fe496d71999909417770dc8870f3722254704342df0755837e36f5feafa8fed8f6fc3aa287dfd495c4ea788e02d4bd16a57c2b1128d64a026db4daf90a2d95129c431263aee9f8c8ffbeec819f407aee378ee08890aca7cc9eb5ba4ffd27aa726b67d10ef15421425d01d573d26aae777fb7e60efa4b801a695fd5ad3461965bfa3fab1148c6a2eeae976830e1a0532818af2123dfca366e9e9ebdc3d4eab5e81e07bce8032269a5ab7be30051375ce8b469aac64f2488ccf1707b20996c13cb698289baa4e6a5ac19195514d13fdb003eb3c5aafac4578be8e56b378b10e93cdfc2258cd7af3f572bb0a37d6f545100596a66909866b4dad53730bf182fa1928cd6ba31eb7cfadf25387166f07d312505a41174c3cc7a57ddf19a779eab1dc1f9ea4b90369eaa7de091da60e1b8f6094a5409167440d8bd6a21e7823d7c79e2643274b9351e6ba0975d26192419e0dc73ef87dcf27fb23f25b720d675ced84e25d87c875b48883248eb6e17c1607a6849c36a53eeb8cb505bcf4a8b1c0c471fa08fc4f5dfb36ca05aab52d5f847110cde6f1e22ae8a6bc8482b287cd1dce39a7a5024453890dd4205722c3a69170b60ace106ca6f6f5105464f2e391b47d6f9dbc68fb333dc621b696b5f9924d1c2dc2cfc6ce017145cbc640eebb0391c084ccd0f3fe27e2704fbb1ce4721b44df49f714410e126af6fe3c116c02efff6f87dd47306e3fea288d775c1fa65a1526a15b236eaa7d627b03bfefb8c480a57e1bf3bd43d3da1c6d46a8a0d64f2575bb8f9576628d7a066110372034cddaff050468275a7d040000",
    ],
    [
      "ETag",
      "3nu9XJnnz/89kNmgl8tBoQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-159-1640212600764"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d93616f9b301086ff8bfb95a890d26443ea07b2a65b24927409952a4d1532f641dd199bd9265514e5bfef4cbbac5a27d12f70773c07772faf0fe4a7509c24a414f5af0eccfeac06f7dd071bb09d74166fad56164840c0d11ac9eb71b9a7e5f23e9e9617312f57e7edf3344eafae90b0ec111a4a9203a904486e49f2e340146d00db98965da38a3e0b88dbb7beb8cd378bd557cc1bcd7dbebacbb27496cdc931383572ea68d1f31f687b3806e449971ba8c08062e067698d7e02e6167e4d4b9b56c2c8eace30b0a487fb07b5d15d4b8dd623ac8ca2cbcfa3681287e3683c09c3e92446526a469dd00ae1bb2d0e489c76546ef433ae49a20b244c1fe3ca557fdd615df07e151f2e5639bec74ff816a08ce94eb96210ac84b1ee45be3fe0ab0cff92927e10c47f25e4105483e2608628d116947303d60e92da16b46d4fd86cbdcedeaba2b8d1820f833b310048b73b0137d93afd9fb4e8b0bf5a5da7f9fc1d611dfae684e48be57c9ba7cb5bcf3dbc1a61b677606f8d465b59f08e8ac2f8d3e57412be98ec8bf6c6c3ef24ce74101046f1ac7c138e241595168ebf0124b4242989030000",
    ],
    [
      "ETag",
      "D2byabMX47b34dbN/pw74A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:38:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
