const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1642558278574";

nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", { grant_type: /.+/g, assertion: /.+/g })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffedd3597282300000d0bbe4db32ac1afa0705641337dcf8c90006881b6111133bbd7b9d5ea3be3bbc6f90e639ee3ad4d7677c039f80a7b22ee442261afb417cc69176baf46eedb5d95d956c459f6ec7d5213221feaad7d8961e9470363ec4b18eae884f2ce81bd897b3bd5222d8786771b7e2f2a5853832b5a4b3a7ade2666cc192701236282a8df987377f14098570b1714e9dd97b4bea54c1f9d894cb9bed0e24f0a14a732d5ec9cf9e048e49039616f707b166ea66d6394769c70bab0cc3444d4fd7637dd564c3a6f2e0577e4fd6a5051526dd065a34d6733bdd1a39e304069979d8e89ef0f6f6ef8011c08c92167788bcb62b9aae8fc05f7dd4738a5fff4d9cb6b8053fbffbd7ea9919040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:11:20 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-1-1642558278574",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8553ef6f9b3010fd5790f7714d80fc4ea4688d52da2205b211d26a9b2664cc41dd129cdaa65355e57fdf619aaedda4f613b6efbd7b77ef8e2772c7ab8ccc48ca8bfb1ae4e3a75b919213029a16f8eadfd6e18dcdeb925f7cf6fa3fee8365d1bb29e67344f086a5e86e5f4247895a3250b3eda65b4851efa914a283893a6ec71d0d7ac3e1a4379e0cc703a42928f315afee907ca3f55ecd6cfb28dd2d84284aa07baeba4cec5edeed879ebd97e2169856f65b451b4594fdaee6975230aab9a8e6db0dead70a64023bca4bace02f314b4fdf66ee72baeb16087ee00c2863a2ae745315a660a2ca79514b9395cc9e88a9f2d5816cbc95b78c2d26ca7a572515ddc18995514d13fdb807eb3c5a07961f9eafa36011fbeb30d92c2fbd60d15dae57db20dc58d7975ee4599aa62518ae35b74ecd2dc40bea67a034af8c7adc3c37cacffef8ff0fa521a0b48236988c9d117527ce34cdd331cb27fd619a3b90a693743ca4fdd461d3010cb21428f28ca861d14a5453770a299d4c13a7978f9341c69c24cdc779d2cfa613c775d974d4eb93c309f92db98633aef642f1d621721df9b197c4d1365c2e62cfb490d3bad4676d614d03af6bd4d860e2382e02dfe9ebd044b940b5c6723f8cbd68b18cfd2baf9df20a0aca1e37f738e79c960a104d251aa841062243d348b808bc33049ba97d3d061599fd7c228def4d25af6c7fa1c738c4a6646dbe6413477e7861ca3922ae68591bc8437b2012989019d67cf88538dcd23607f9b6f5a2efa47d8a20070915fb789e0836818ffeb5e3e62314771f5594c63b2e0f538d0693d02e1137bd1ed9b81bfd213160a9ff8db9ee6074b4acc9d164841d54fab9a176f3b1cf56ac562f200ce2fc4363d5e10fbc84538a77040000",
    ],
    [
      "ETag",
      "IjuNh/iuliG+E3ZqMCg2hg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:11:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1642558278574"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8d93516fd33010c7bf8b794da5b54dbb2ad21e52e8a0286b4b9b3d2034459e7d091e8e2fd84ea1abfadd3967a3208694bd2477e7df29777fff7364df94912c61f7aafade823dbca9c07f0ac1165cabbda35783c6018b18785e1129c66b7e3d1b8d7f3e7ef4d9261e99f4f33cafaeae8870e22bd49c2547562ad0d2b1e4cb91195e436843ddd6a6e8b288f943138abb7cbb5cbda7bc4619f2d56d96a5f36cc14ed1b95172cf8b8e7f45dbdd29620f78bf85122c18016196c6e20308bf0c6b3a5e371a060e5b2bc0b10eee0e2a8b6dc32de2802a83e160388d4793c96c74399b5cc6c46914dc2b3484deee683ce6d173bdc51fb4241b8e89b05d4c0b97dd734f7525bb4542b85ce5d3b89bef6f800b81adf1452f582aebfc9378bfc16711fe25357f254837a5741f54819160fb28d5145c4a0bcef592e80ade34676cbe5e672f5531d2a292fde05ef500daefcfc075b64eff272df9eb8f56efd27cf182709e5c7346f2e5cd6297a7379bc0dd3d1b617ef0e03616c9540e829f86173139677af164b1b7186c47df49bc6d216282d39ff2417996945c3b38fd026ed25c3487030000",
    ],
    [
      "ETag",
      "c3OaF823xzJtLP42nAYBTg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:11:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
        query: "SELECT COUNT (*) AS __count FROM `records` WHERE `stamp` > ?",
        types: ["TIMESTAMP"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "1970-01-01T00:00:00.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1642558278574",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8553796fda3014ff2a91f7cf360d70a09080547508b235125721b4da25b09d17e636c4d4765a7515df7d2f49e9b149ad642996dfef7857eec995cc62d2235c6eae73d077ef2e15279f0858b6c1d7e1707a39996acf9fff11e35b037cd6d2a767c7c7889005cbb0ed2e859a51b916607acb457da355be635aa91a0ad59a35b773d46cb7fda6e7b7bd23a419489391ccae90fcdbda9de9351a07ebfa46a94d0a6c274d5da8ede37be3a6d9d8697509c29ac64bc7069a98c6ab9e27a912cc4a951d2f17e89f1bd02bd8329962064fc4987f7ea95c976c5bdf20f8460a6042a83cb3455628215496c84dae4b55d2bb276596cf2e64118c8241e40ca6cb49e4bcfff8c1e92f9cd5aad470becca76367ad41281d9bb573711acc03676d2cbaaf9d9f39a52d704ed025066365567a448ca750e83f7421fcbff505815966a00aae3cda61ae4fbb3ce19e48fc569b271438f7b9d7662d4e45f7088e620e0c79b6502f592c5359d7ed008d455b08ce981b838f70d4f13be0519e40d71331676dcec8fe13b9d5d2c2509a9d32b2ea05b9988751b08ae6cbc9a01f05651909cb533bac922b8a789ea7c5225794ba087ca5b67d11950add8ae686932898f70751781e54f31cc18689bbc5354e3461a9014433cdb660418f558c8d23b3e9228cc2e9a43f424639a4d9016148efc7fd1321badb959db6e59744e1385844fdf1accce1003a67695ea26eaa0b71bb1ead51174f4469af3c754ae977b2dfff42226e65a54bce96c1fc1ba99ee69080864cbc3d59049781b7feadc3a62314771d5d70abacc43512a6f0101aaa7592db32e907b6ef767d4a4ab0b6ffc69aaedb3df4acd02814610b997d28a8da74acb332cbcd230883b8059370f215a37f01ae5acfda67040000",
    ],
    [
      "ETag",
      "DDOjNOr78RzcMwsebP3rHQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:11:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1642558278574"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff2d905d4fc2301486ffcbf1521661191f59c2059845491622436e3484947236865bcf6ccf5442f6df3d9ddeb4276f9ff67dd21b7c94e604311ccbe2b3457bbd2b90377ec8d0b5153bd91a320e6100c8aa1032a96db98dee770f3fc9b9986c4cfab64aeac57c2e84d367ac15c437c84bac4e0ee2f71b1855a35c3b1c34b58685e26be383d5fa35794a32096a3af960bd4bd3c5324da0db7703b8d031c31c2d1a8dfec5c6d20535afbcac53755361e0a8b51a1df4707f50586a1b658902498230184da2703c9e85d3d9781a095791565c921174b7056961625565f42daa3012c0f6a358e7fdfae5e3a117daffb3cb2ba37bb124bd0e7de56cf8d7ff48de89c5956d8b03d04a3ee3b96488735539ec7e01b7ac54576a010000",
    ],
    [
      "ETag",
      "EmriS4+U/xEhg6QnLZIEmA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:11:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-3-1642558278574",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85535d6f9b3014fd2bc87b6d1292402191a2354ae91aad211b21ada66942c65ca85bc0a96dba7555fefb2ea6e9da4d6a9fb07dcfb9e7dc0f1ec92daf333225292fee1a900f1f6e444a8e08685ae0eb0d542e40c1afb9bbaad2c0fb757df7f9f77c3643046f598a56bb127a4a3492819a6e37fd428a6647a5103d4cd41bf786c7cec875fd91e7bb9e833405657ec1eb5b245f6bbd53d3c1e020dd2f84284aa03baefa4c54cfef83fbd16027c50d30ad06af150728a2066f6a7e2c05a39a8b7ab6dda07ea3402650515ea283bfc42c3d799db9cf69d52f107ccf1950c64453ebd615a660a2ce79d14893954c1f8971f9e24036c145b0882d26caa6aa939a5670646554d3443fecc03a8bd62b6b199eada3d53c5eaec364b3380f56f3fe627db15d851bebea3c88024bd3b404c3b566d689b9857841fd0c94e6b5518fdbe756f9a93fcbff87d212505a41174c3cfb980e7d7b92e6a9c7727feca6b90d69eaa79e4bc7a9cd260e38590a147946d4b0682d6a27f527be33cc93639ad1c4a1192474ec7b8993b1ccce862ecbdd09d91f919f926b38e56a2714ef3a44aea2651c2471b40d17f3383025e4b429f56967ac2de0a5478d0526b63d44e01b75eddb2817a8d6b67c19c641345fc4cbcba09bf20514943d6cee70ce392d15209a4a6ca006b91219368d84f355708a6033b52f87a022d3ef8fa4ed7bebe445db9fe9310eb1b5accd976ce268197e32760e884b5a360672df1d88042664869ef73f10875bdae5205fb741f48d744f11e420a166efcf13c126f0debf76d87c84e2eea38ad278c7e561aad56012ba25e2a6d603db1f4d866362c052ff1b1bdbdef8d0b236479b112aa8f55341dde6639d9d58a39e4118c4f987a655fb3f699bb65777040000",
    ],
    [
      "ETag",
      "jem5eegihi5MmbE7xhqKzA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:11:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1642558278574"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "bf8bf79a4a2db4a18bc4433aca562db4d006ed614291b12f999993f36ca7d055fdee3b07d64d63527849eecebf53eefefe67cfbeab46b284ddabea470b76f7ae027f138235b8567b472f838d031631f0bc2232bb711766dac65fde0fcde7cbf889a78ffc677a7e4e8413dfa0e62cd9b35281968e255ff7ace135509b40ddd64dd16511f33b138a9b7cbd587ea4bc4619f2e56d96a5b36cce0ed1b15172cf8b8e7f43dbdd21620f78bf86122c3402c22cc6e20308bf086b3a5e1b0d0387ad15e05807770795c5d6708b38a0cae074308ac72793c9f4e46c3a391b13a75170afb021f47643e3318f9eeb353ed2926c744a84ed625ab8ec9e5baa2bd92d12c2c5328fc7dd7c7f035c086c1b5ff482a5b2ce3f8bf71b7c11e15f52f3378274534af7411534126c1fa54cc1a5b4e05c2f89aee0c61cb1d96a95bd56a5911695ec07b7aa07d07e7b042eb355fa3f69c95f7fb4ba48f3f92bc27972cd11c91757f34d9e5e5d07eeeec508b39d07776d914ce520f869341c9373e2e1b3c53e60b01d7d27f1b68588094e7fca27e5595272ede0f00b06a3eabc87030000",
    ],
    [
      "ETag",
      "LQsDp8u6W90pKF6xaAwazA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:11:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT COUNT (*) AS __count FROM `records` WHERE `stamp` > ? AND  `id` > ? AND  `id` < ?",
        types: ["TIMESTAMP", "INT64", "INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "1970-01-01T00:00:00.000Z" },
          },
          { parameterType: { type: "INT64" }, parameterValue: { value: 4 } },
          { parameterType: { type: "INT64" }, parameterValue: { value: 7 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-4-1642558278574",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffa5545b6f9b3014fe2bc87bd9a5494c028144aaba28652b6a6e23a4d56e4a8c31d42dc12936eda22aff7d07d3aceda6b60f9390403edfe5dccc1dbae2798cfa28e2e975c98aed9b4b11a103c41449e1f42c3939fd759197db6031b33e3079ea8e6ef1ede1212078c59264bdc958438ab2a04cf617f3665a8872430a211a20d4b01a66d76adbb6db765cdbb1802659968c787e05e40ba536b2df6aedad9ba91069c6c886cb2615eb3fe7ad9b766b53884b46956c3d756c81896cbde87994094a1417f9e1620efea564c592ad09cf208307621c7d7caadce464dd4c017cc32923948a325755562041459ef0b42cb42aeadf219de5a30f34f746de303486d3c52434debe7f670ce6c672a9358c4fc1746cac0a464511cb95717ee2059eb1920adc57c68f12e30e338e8cc1e4d830563c7efe881a47904bcca4e2b9ce242451c6aa2cee7be5ff3ba08a401491ac0e2e1ddc25a68b7b51123934713b76946016456ee4d8a41361dab39815478c004f55ea9a457291dbddc8edb5db6d3771136c475627e9d9cc74edc826a6d9b1719b38ae13638a7607e8b6e08a1d73b91192d71d43e7811f7acb30584c8683d0d36524a4ccd4719d5c55c4e33c1514b9c4d804e00bb5edaa2817e0568dc09f845e301886fe99574f7dc45242b7f36b987b4232c9004d0ab2668a15631143e3d06c3af7437f3a198c80a14739db2324ea7fbf7b2084db8deeb4d26f14fa636f1e0ec6339dc31e7446b252a36eea0f64f61cdcc0263c21c67dfd3431c6dfd06e77f0bc3814d2b55e16b6fe5bc101859f8080fb5393d19785177c45f551c01256b09cbebe5d00d681d7fe02fb3b0950b895e002fbaf38ac329595072d58bdd27cad1b77cf763b6e07230d2ed4df310b9be67e6e9546a5c8d62c57f705d577b2ea940e95f20f0882b089137ff219a2bf0136958eb311050000",
    ],
    [
      "ETag",
      "VfHKxhnuyRUP4+esK8Lw0w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:11:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1642558278574"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff2d90d14ec2301486dfe578294b60614096700164ea12441d72a18690d29dcde1b633db337521bcbba7d39bf6e4efd7fe5f7a868fa24e218463917fb668baab1cf9c90d09dab6642b5b43b5451800b2ca85bcf1872ff143fa1a2d4e5b8a7f5681bebea77c3e17c2ea77ac148467c80a2c530be1db196a55a15c3b1c34b5350bc55de38278f31cdd46890415a52ed8ecd6ebc5721dc1657f19c0898e096668b0d6e85e6c0c9d5073ec64adaa9a123d4badd168a187fb83dc50db2843e449e28dbdd164ec07c1cc9fce82e958b892b4e2826a41775b901626566542dfa20a23014c3f8a75d6af5f12fbce67ff8f2e3b46fb68486a2dbac6d164f8d7bf22e7c4e2caa6c50168259f71573084992a2d5e7e01d04352e66a010000",
    ],
    [
      "ETag",
      "F20YIOdZEAjSoIxC5c+Mog==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:11:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-5-1642558278574",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85535d6f9b3014fd2bc87b6d1248a12491a2354ae9ca96901648ab6d9a903117e686e0149b4e5d95ffbe8b69ba5695da276cdf73ee39f78347b2e155462624e5c55d03f5c3a75b919223028a16f83a77accc876cbd99fff8b6712aabf89b5e7ebd9a4e11c15b96a4db5d093d299a9a819caca37e518b66476b217a98a8e7f4ac137be838a3a13b725c1b6912ca7cc1ab0d927f2bb59393c1e020dd2f84284aa03b2efb4c6c9fdf07f7c3c1ae16b7c0941cbc561ca0881cbcabf9b9148c2a2eaae93a42fd46429dc096f2121dfc2766e9e9ebcc7d4eb7fd02c1f79c01654c34956a5d610a26aa9c174dadb392c923d12e5f1c48e42dbc796c305136db2aa9e8168e8c8c2a9aa8871d18e7e16a69f8c1f92a5cce627f1524d1fcc25bcefaf3d562bd0c22e3e6c20b3d43d1b404cd35a6c6a9be057841fd0ca4e295568fdbe756f9a93ffedba1b4049496d00513d73ca1d6c81ca779eab27c74eca4b909693a4a5d871ea7261bdb60672950e46951cda295a8609ca5e3e3b19bc0d0a5896db361929a769e58e68963b994da191d93fd11f9537305675cee84e45d87c84de8c75e1287eb603e8b3d5d424e9b529d75c6da025e7a545860629a1602dfa96bdf46b940b5b6e57e107be16c1efbd75e37e50514943d447738e79c9612104d6b6ca0827a29326c1a09664bef0cc17a6a9787a024939f8fa4ed7bebe445db9fe9310eb1b5acf4974471e8075fb49d03e29a968d86dc770752031375869ef7bf10875bdae520576b2ffc4ebaa71072a8a1621fcf13c13af0d1bf76d87c84e2eea38a5478c7e561b2d56035744bc475ad07f6c831872ed1e05abd89598e7b68599ba3cd085ba8d45341dde6639d9d58239f4118c4f907ba55fb7f2bd6956b77040000",
    ],
    [
      "ETag",
      "C51dIedUkCZKk5n1gzbPJQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:11:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1642558278574"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "6f9b3010c7bf8bf738a2350d2411521f9235db902874097d9a2ae4e283b9333e669b545194efbe33edb2699d445fe0eefc3b71f7f79f23fb21b560317b90cdcf1ecce15d03eeab0fb6607be52cbd3ad41658c0c0f186c8a74ccc92dc846a9687efafb3c5129b0f5173754584adbe43cb597c64b504252c8bbf1d99e62d505b85aa6f753964017387ce1777c536c93e53dea2f0797697a6ab75ba61a7e0dc28b8e3e5c0bfa1edfe14b0477cd8420d0674057e96cee023542ef16b5ade760a26167b538165033c1c3406fb8e1bc4095526d1643a0f2fa36879b958468b90388515771235a1773b1a8f39745c6df1899664d31911668869e17a78eea92ec5b0880f93ac9887c37c7f03bcaab0d7ae1c056b69ac7b16ef37f822c2bfa4e26f04e9a6a41a831ad002cc1825bb920b61c0da51126dc9bbee8cadf33c7dad8a1606a51807f77204506e7f063ea5f9ea7fd292bffe6875bd2a36af08ebc83567a4486e36bb627573ebb9fb1723ac0f0eecad41329505efa7e94548ce995f3c5bec237adbd17762677a0858c5e94ff9221d8b6bae2c9c7e010fd31c1887030000",
    ],
    [
      "ETag",
      "wNd3IOr4l3O4+DN78og/5g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:11:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
        query: "SELECT COUNT (*) AS __count FROM `records`",
        types: [],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-6-1642558278574",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "ed",
      "4f",
      "9b4018ff571af6652fb6d0028536315b53d19054ea0a9d9b5feaddf1c04e81c3bb43634cfff73dd0d6e996e837b8dfdbf3f664dcf22a35a606e5f95d03f2f1c38da0c691019ae4f81a8f2e8b6c7475373fbd5afefc328bc4039ca987e36364f056a5485917d057a2910cd4741d0f72299a9a4821fa68d41ff7876367e4bafec8f35dcf419982225bf0ea16c5bfb5aed5d4340fd1835c88bc0052733560a27c7e37ef47662dc50d30adccd789268628f3cdccaf85604473511daf63cc6f14c80d94841758c15f614abfbd761e70520e7224df73068431d154baad0a2d98a8329e37b27335a64f4657e58b0f230e16c13ce9cd97eb28e97dfcfca9378b7b9b4de7d13b5d2dcf7bd7129890a9ba46bb1494e6556796105a406bb46f37fc7fc6ad8068a260076e3c6b4c86be35a119f558e6db2ecd2ca0d4a79e4b6c6ab189034e4a81a04eb7ee9d8a54a21a0d5d18a7c49f0cfdd4f14846c6be63a7604f2c4a6d70c0f328652e0c8ded91f120b98613ae6aa1f8ae69e3721526c12659ada3f92c09ba3632d214fa64575cdbc4cb3a3536b9b1ac2112dfe86ddba25c605a3bc5304a82d56c9e843f82dde2169013f618dfe1ea325228403691a4040df25ca43838e362198749b88c668bd60baf2179acdbf7efeb60f56bffb4820c2454ecfd4123b903debbe9c38521156f0c5394c67fdc2a536d0693b0db2e2fdb5a0e6adf9d74f340b2d4ff6263cbb6117bbeacd6114aa8f4bea1dd8519db7d58a39e4908e252a2303a43f40f199edadddf030000",
    ],
    [
      "ETag",
      "S2Wlf2ZqCFZOX+ANoweGsw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:11:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1642558278574"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff2d90d14ec2301486dfe578cb222c30c8122ec0102559d04db9104348e9cee670db99ed990697bdbba7d39bf6e4efd7fe5fdac14751a710c2b9c83f5b34d79b1c39764382b62dd9cad6506d114680ac72215f7fd2db2cb81c0efe6394e85514575910c5cba51056bf63a520ec202bb04c2d846f1dd4aa42b9763a696a6b168aaf8d0bb6bb97cdfd2691a0a2d405bb7d14add6d106fa633f820b9d13ccd060add1bdd818baa0e6ad93b5aa6a4af42cb546a385011e0e72436da30c91278917789360eacf660b7fbe98cda7c295a41517540bba7f066961625526f42daa3011c00ca35867c3fae5e2b1133afeb3eb2ba37d3224bd165de5f8affe8e9c128b2a9b1647a095fcc543c11066aab4d8ff02dfbdab6b69010000",
    ],
    [
      "ETag",
      "Yzd/f6jZZ2OLRcALQmf6LQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:11:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "00e0bbf4594cc551656f80b24a0765200b3c91fe9181ce1a4001cdee3eb36bccef0edf1d302154d795bd3ea81378051333edb99873e8e45778dbc7f9d98227c989ce388ac28aaca17cf9f0c8364f2d513368e16b415b776c2a8f886273b92079b0db630f37e14dd7764dc65105db515e43d78dcdafe920ccd4998c7d57609f8f92ee566d79d40a0d9846cc42c8975e88f1fb22d051bd8ff40e93345fad2cc78c7962204c99bf204aaf1738d1669ad34fb7e70e6b02b2f67a74194410ee9a8c8a46f9a734e6b28299e10c6f0a65e6602c19fdae6859247eca5d387f7afa77c00ca8f15cb7aa2bebc7f6a565db33f057bfeca7b37afc77156b550b7e7e01be50b90c19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:11:26 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-7-1642558278574",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85536b6f9b3014fd2bc8fbb8e61d428814ad594ad75409d980b4daa6091973a16e01536cda5555fefb2ea6e9da4d6a3f61fb9e73cfb90f1ec90d2f623223114f6f6ba81e3e5c8b881c115034c5d7732a7d599f5de5600f3f7f3c8f7fdf8f7edc2ee67344f08625695e66d091a2ae18c8d9ceefa695a84b5a09d1c1441dab33988c87a6391d5a53d31a234d4296ac797183e42ba54a39ebf50ed2dd548834035a72d965227f7eefdd0d7b6525ae8129d97badd84311d97b53f3532618555c14f39d8ffab5842a849cf20c1dfc25c6d1f1ebcc5d4ef36e8ae03bce803226ea4235ae30051345c2d3bad259c9ec9168972f0ec477d6ce323098c8eabc080b9ac39111534543f5508271ea6d37c6ca3ddd7a9b45b0dabaa1bf3c73368bee72bbde6d5cdfb83c733cc75034ca40738db971ac6f2e5e503f06a978a1d583e6b9517eeacfeaffa134049496d00643ab3fa18369df8e92c862c9746446491fa2681a59261d457d668f611c474091a745358b16a2306d9b4d6d73149a319b84631b6848ad911d9ae68445e630194e6c9bec8fc87dc5159c70590ac9db0e914b6f153861e0eddce52270740909ad3375d21a6b0a78e951618161bf3f40e01b75ed9b2817a8d6b47ce5068eb75806ab0ba79df21a52ca1efc5b9c7342330988a615365041b51131368db88b8d7382603db5af87a024b39f8fa4e97be3e445db9fe9010eb1b1acf497f881b772bf683b07c405cd6a0db96b0fa40226aa183def7f210eb7b4cd41beed1cef3b699f3c48a08282bd3f4f04ebc07bffda61f3118abb8f2a52e11d9787c9468355d02e11d7b51ed8d3893d19110daed4bf316bd01f1d5ad6e46832420e857a2aa8dd7cacb315abe5330883387f57b76aff07e7d1ea2c77040000",
    ],
    [
      "ETag",
      "JasSsuHhme92B+Jdxw3ZqA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:11:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1642558278574"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d93616fda301086ff8bf73548a50b5045ea87b0b20d29400761d2345591b12fa93bc797da0e1542fcf79ed38e4deba4f44b72777e4eb97bfde6c87e292359c276aa7a6cc11e3e54e0bf85600daed5ded1ab41e380450c3caf885cecb6aaf237f8987abe1d7f9ffe88d5fde6e9fa9a0827eea1e62c39b25281968e253f8fccf01aa84da06e6b537459c4fca109c54dbe9e2fbf505ea30cf9729b65e9349bb153746e94dcf3a2e3dfd176778ad803eed65082052320ccd2587c00e1e7614dc7eb46c3c0616b0538d6c1dd4165b16db8451c506530190cc7f1e568747539b91a4d62e2340aee151a42b71b1a8f79f45caff1899664c38f44d82ea685cbeeb9a7ba92dd22219c2ff371dccdf737c085c0d6f8a2172c9575fe45bcdfe0ab08ff929abf13a49b52ba0faac048b07d946a0a2ea505e77a4974056f9a33365dadb2b7aa186951c97e70af7a00edf767e073b64aff272df9eb8f5637693e7b43384fae3923f97c31dbe4e9e2367077af46981e3cb85b8b642a07c14fc38b989c33be78b1d8270cb6a3ef24deb61031c1e94ff9aa3c4b4aae1d9c9e01cf7e9ddf87030000",
    ],
    [
      "ETag",
      "MbUigtDoqAtaU6VBY4ihSw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:11:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
        query: "SELECT COUNT (*) AS __count FROM `records`",
        types: [],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-8-1642558278574",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85525b6f9b3014fe2b91f7b24b1348028144aab6286513524a36209bf694dae6c0dc02a6b6691555fdef3d90b46b37a97d037fb773bb2357a2cec88230515cb7a0f6ef2e252327040c2df035d53295b99a2771cd27f5fe36723f6dce6f4f4f91213a95a65553c250cb5671d08b6d322a946c1baaa41ca2d1d01f8e67cec475fd89e7bb9e83320d65be16f5158aff18d3e885653d468f0a298b126823f488cbeae9ddba99588d9297c08db65e265a18a2ad57333f97925323647dba4d30bfd5a07650515162057f8519fbf2d2792468352a907c233850ce655b9bae2ab4e0b2ce45d1aade952cee485fe5b30f9204eb60950e569b6d940ede7ffc30582683ddaef7187c8d37e7830b055caa4c5fa05d06da88ba374b292ba1333ab61bfe3fe34e400dd57000779e3da363df9eb39c793cf7a72ecb6d60cc679e4ba7cce673079c8c01459de9dc7b15ad653d19bb30cba83f1ffb99e3d19cce7c679ac1746e333605073c8f31eec298dc9f905b250c9c09dd482d0e4d935f719806bb34de46ab651af46de4b42dcdd9a1b8ae89e7751a6c7267db6324bed2db7d870a8969dd14c3280de2e52a0d7f0687c5ada1a07c9f5ce3ea725a6a403655b40203ea5c663838f27d938469b88996ebce0baf21dd37ddfb8f6d10ff3e3ec59083829abf3d6824f7c05b37fd786148c51bc3146df01fb7ca7597c1151cb62baaae9647b5efcd2753d29395f917f36dd743ece9b23a47a8a036c7860e1746ee8f61ad7e2221884b89c2e81ba20f6318e41cdf030000",
    ],
    [
      "ETag",
      "TsoTofr9SRnc2nywN5+OMw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:11:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1642558278574"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff2d905d6bc2301486ffcbd96d0b5a742d052fa6c8d6d189eba63086488cc7aeaeede992d3a914fffb4eea6ef2f1e649de8774f05dd47b886157e43f2d9acb5d8efcea1619dab6642b5343b545f00059e54206e78fa00ad32a59beacd5cce8d09e9f8bd3642284d55f5829883b381458ee2dc49f1dd4aa42b9b6dd6a6a6b168a2f8d0b92c5fbfc719e4950d1de058b559a3e4cd3395c37570f8eb4cbf080066b8deec5c6d01135274ed6aaaa29d1b7d41a8d167ab83fc80db58d3244be247ee40fef47c1781c0561340e47c295a41517540bba7a036961625566741255180a60faa5581ffaf1d7c50327b4f967a71746bb3424bd165de5e0563f23a7c4a2caa6450fb492bf782af8b6bffe01d2f0668e68010000",
    ],
    [
      "ETag",
      "2xY2m7LmIPMVaCrc7sxJiw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:11:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
