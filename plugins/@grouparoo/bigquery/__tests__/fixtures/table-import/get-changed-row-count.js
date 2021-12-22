const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1640201486336";

nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", { grant_type: /.+/g, assertion: /.+/g })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "edd34b7282300000d0bb64ad0e0308a43b601030156d1005379908c1aa955f90183abd7b9d5ea3be3bbc6f40f39c714efafaca2af0062455e12c9f1d153b1d94711bc943503ab070c2729e688f660c5611aab20d2ead9bdae095e57bb964edd22beec4f47c423cb626f5f2f6d56883a3dcd12547ad10ad7aacecd19d92eb6ece130c7d97626c1b5bc36acd439366c63a5b2d2ee934b214eaa636e986b41f9c4db633c38cc7c8a9154ef59bd0f770103281da024b48451fc94417a7e5a73ebe47776168c81e7d7e121c85d78dd1163596c3542de24b16f7c6fe838dfec1a55a65a2c02badd9cbcbbf0326803d9a73c738393fb76b730827e0af3ee965c39eff1d463bd6819f5f9f3b717a19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:27 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-1-1640201486336",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "535d6fda3014fd2b91f7b81602044291d08a68daa142584368354d53643b3799db1053db61aa2afefb6e9cc2da4d6a9f62fb9e73cfb91f79260fa24cc98830913f56a09e3edd4b464e08189ae3ebaf5efeb0bb2af4f52412d0b9dea9c9fde7eb9bf11811a26669bad91670aa65a538e8d17ad5ca95acb65449798a894e3ba79d81e776dd8e371cf47a03a46928b2b9281feae4c66cf5a8dd3e48b77229f302e856e816979be37b7bd76d6f95bc076e74fbad621b4574fb5dcd2f85e4d408598ed72bd4af34a804365414e8e02f3165e76f33b704ddb47204ef0407cab9ac4a53bbc2145c9699c82b65b392d133b12e5f1dc82a9807d3d8e1b2a8366552d20d9c38293534314f5b702ea3e5c2998597cb68318967cb30594dbf068b496bba9caf17e1cab9fb1a448163282bc0729db1736e6f215e503f056d4469d5e3fab9567ee9cfecffa1d40494d6d00413df1dd0ced03d6319f37936ecf559e6026343e6f7698fb9fccc032f65409167452d8b965873bfcbfaddbe9fa4eed04d3c3af012467d969ca59c7b6eea791df0c9fe84fc56c2c085d05ba945d3217217cde22089a375389dc4812d21a355612e1a637501af3d1a2c3071dd0e02dfa96b5f478544b5bae5b3300ea2c9349edd06cd94e79053feb47ac43967b4d08068aab08106d442a6d834124e16c10582edd4be1d829a8c7e3c93baefb593576d3fd2631c626dd9d82f59c5d12cbcb2760e885b5a5416b26b0e4401972a45cffb9f88c32d6d72909b75107d27cd5304192828f9c7f344b00d7cf4af1d361fa1b8fba8a20dde7179b8ae35b882668984adf5c8f6877e9f58b032ffc6866ecf3db4acce5167840d94e6a5a066f3b1ce46acd247100671fea16dd5fe0f04a0c5ea77040000",
    ],
    [
      "ETag",
      "h3gkvGlsKARie1KvrAj+KQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1640201486336"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8d93616bdb301086ff8bf6d581b849bd60e88764cbd6801bb7890b85518c2a9d5d75b2ce93e49410f2df7772bb74ac03f78b7d777a0edfbd7a7d603f95912c650faafed581dd7faac1df846003aed3ded1ab45e380450c3caf8994d5ec4ee7e7559ed8e5d97eb16e3b73e39f2f2e8870e2111aced203ab1468e958fae3c00c6f80da04eaae31659f45ccefdb50dc169bd5fa3be50dca90af6fb36cbec896ec189d1a25f7bcecf90fb4dd1f23f6840f1ba8c082111066692d3e81f0abb0a6e34dab61e4b0b3021cebe1fea0b6d8b5dc228ea8328a4771321d9f8de3e92c994c12e2340aee151a426fb7341ef3e8b9dee0332dc9e20911b68f69e1aa7feea8ae64bf480857eb2299f6f3fd0d7021b033be1c042b659d7f11ef0ff82ac2bfa4e61f04e9a6941e826a3012ec10a5da924b69c1b941125dc9dbf6842df23c7baf8a9116951c06776a00d07e7702be65f9fc7fd292bfdeb4fa3a2f96ef08e7c93527a4585d2db7c5fcea3a70f7af4658ec3db86b8b642a07c14ff1783a3bff9c8c5f2cf60583ede83ba9b71d444c70fa532e956769c5b583e36f9e492bb387030000",
    ],
    [
      "ETag",
      "df8XlO5fO6rE2yBNpunQtw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-2-1640201486336",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "53796f9b3014ff2ac8fb679b96c434072152d54529db9072b484b4ea0e25b679303780536c3a5555befb1ed0f4d8a456b284e5f73bdec53dd9ca3c2223c26572534271f7ee5a71f289806109be5e0583ede5ac74b7be91f359efc6d8cef4e2fcf81811b2626996ed526869551602f468b56c27852a77ac50aa8542ada3963de8d1236af786836e7780340d693c95f916c9bf8dd9e951a773b06e274a2529b09dd46da1b2c7f7ceed516757a86b1046775e3a76d044775ef53c49956046aafc78b544ff5243b1868cc91433782246fcf34be5b664593b41f0ad14c08450656eaaac5042a83c964959d4aa64744fea2c9f5dc8d29b7a93d09a2c56f3d07afff183355e5aeb75ad617d0916336b53805045a437d6e5372ff0ac8d36e8beb17e969476c13a419708b49179ed11329e42a5ffd005ffffd6570466988626b876e880d943eaf2983b221e76fb3ca6c0f9903b7dd6e554b83de8451c18f24ca55eb358ae72d71e008d445f08ce981dc110e1a8331c8043790cae2322cefa9c91fd27f2a790064ea5de292d9b5e90cbc00fbd7518ace69371e8d565c4ac4ccd69935c55c4f33c0d16b9a6d446e02bb5edaba854e85635d79f875e309e84fe85d7cc730a091377cb1b9c68cc520d886605cbc040315311368e9c2d967ee82fe6e32932ea219d1d109a8c7edc3f11c2bb5ddd69537f49e8cfbc65389e9dd5391c40172c2d6bd46d7321b6ebd016b5f184948eead3a6947e27fbfd2f24e25636bae47ce50557a4790a20860272f1f664115c07defab70e9b8e50dc7574c1ad3212d748e8ca4314d0ac93cceaa40feca1ebb8a40617e6df986bd3dea1679546a50819e4e6a1a066d3b1cec6acd48f200ce216ccfdf9578cfe0516ece28267040000",
    ],
    [
      "ETag",
      "YR6kWMu9kItiNM4qt17LVQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1640201486336"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "2d",
      "90",
      "d1",
      "6a",
      "c2401045ff65fa6a68a26225e0432d5285206dac0fa588ac9b498c4d32e9cec456c47fef6cda97dde1eed9bd87bdc267d96410c3a12cbe3a7497bb02e5d50f29725709ebd652c30803403185929c64ebe8fef0f390bf6f969bfa5cf0f1387f9ccd94607bc4da407c85bcc42a63883faed0981af5da7e6fa96b4429b9b43e58addf16cf8b54839a321facb749f2384f1670dbdd0670a2438a393a6c2cfa175b4727b4b2f2b26ceab6c280a97316197ab83f281c75ad71448126c1308826e3701846e3e964349a285791355252a3e87603da2224a64ae95b552152c0f5a35ae7fd7af671e88576ffecfc22c82f8eb497d1574ec3bffe27f24ea2aee23a1c8035fa19cb5220ce4dc578fb05eb3591f26a010000",
    ],
    [
      "ETag",
      "sLdN1/bx7fYSHSmvgshhBA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-3-1640201486336",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b4fdb3014fd2b91f771b449df0fa91a5509ac124d599a82d03445b6739319d238d80e1343fdefbb71680742824fb17dcfb9e7dc479ec9bd281232254c640f15a8a72f77929113028666f8ea53ffebed5d3839bfaa1e86ae9bfd4d2fd6e57c364384a8599aeeca1c5a5a568a839e6e37ed4cc9aaa44aca16266af55a9d61dfeb7a9dfe78d8eb0d91a6214f2f45718fe4dfc6947aeaba07e976266596032d856e73b93bbebb8f5db754f20eb8d1ee5b451745b4fba1e6b75c726a842c66db0dea571a540c3b2a7274f09f98b0d3b799db82eeda19821f0507cab9ac0a53bbc2145c16a9c82a65b392e933b12e5f1dc8c6bff41791c3655eed8ab8a03b3871126a686c9e4a70cec3f5ca5906e7eb70358f96eb20de2cbefbab797bb1bedcae828d73f3dd0f7dc7509683e53a33e7d4de02bca07e02da88c2aa47f573adfcd29fe5fba1d40494d6d004e39137a49db13761291bf174dc1bb0d403c6c66c34a03de6f1491ffa09038a3c2b6a59b49045b7cf7a1e1f2631efb04edcf7521e8fa9378c4793314f59df9b248301d99f903f4a183813ba945a341d2237e132f2e328dc068b79e4db12525ae5e6ac315617f0daa3c10263cfeb20f083baf675544854ab5bbe0c223f9c2fa2e5b5df4cf91232ca9f360f38e794e61a104d1536d0805ac9049b4682f9ca3f43b09ddad521a8c9f4e733a9fb5e3b79d5f6233dc221d6968dfd924d142e830b6be780b8a67965218fcd8128e05225e879ff0b71b8a54d0ef263eb87b7a4790a21050505ff7c9e08b681cffeb5c3e62314771f55b4c13b2e0fd7b50657d02c91b0b51ed993d168402c589977b149b77368599da3ce083b28cc4b41cde6639d8d58a58f200ce2fc03dbaafd3ffe84ba9b77040000",
    ],
    [
      "ETag",
      "EaE+YjR9FPuq6//gzfGOpA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1640201486336"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d93516fda3010c7bf8bf71a34182ceb22f50136b6a105e84278d95445ae7d494d1d9f6b3b4c08f1dd77495b3aad93d297e4eefc3be5eeef7f8eec4e19c91276a3aafb06dce14d05e1471b64e01b1d3cbd2c1a0f2c62107845e4727f571faae6edfdb6beb5eae33cfdfe73975597974478710b3567c991950ab4f42cf9756486d7406d0275539ba2cb22160eb62d6ef26cb1fa4a798db2cd57db349dced2393b45e746c9032f3afe156dd7a788edf02683121c1801ed2cd6e10e4458b46b7a5e5b0d038f8d13e05907770795c3c6728738a0ca603c18c593e1bbe16872118fc731711a050f0a0da1db0d8dc70206ae33fc4d4bb2d19808d7c5b470d93df75457b25ba40d17ab3c9e74f3fd0d7021b031a1e8054be57c7810ef097c14e15f52f3578274534af741151809ae8f52b6e0523af0be97445f706bcfd86cbd4e5faa62a44325fbc1bdea0174d89f812fe97afa3f69c95fcf5a7d9ee6f317840fe49a33922f96f34d3e5d5eb5dcf5a311668700feca2199ca43eba7d17072f1fe433c7cb0d8276c6d47df49826b206282d39ff24d0596945c7b38fd015993235e87030000",
    ],
    [
      "ETag",
      "Mvkmygu/qUmhpi9ELKZjRg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-4-1640201486336",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ffa5545b6f9b3014fe2bc87bd9a62631010244aaba28a11b5b6e4d48ab759b12e398cc2de0d436adaa2aff7d07687ad9d4f6611212c8e7bb9c9bb943973c5fa32e8af9e6aa60f2f6dd8588d101629a6ce0d4b5327bea7fbd94e76470739c6fbfe5add9f9c9e1212078c95224dba6aca144212953ddc5bcb991a2d812294403841a76c3ecd8b88d4ddbeb585607688aa5c990e79740feadf556755badbd757323c4266564cb55938aece1bc75dd6e6da5b86054abd673c71698a8d6ab9e47a9a04473911f2ee6e05f2826972c233c850c1e89ebf8d373e52627597303e06b4e19a15414b92eb302092af2846f0a59a9a2ee1daab27cf281e6c130e847467fb21847c6fb8f1f8cdedc582e2b0de3783619192bc9a8906bb532cebe04b3c058290dee2be36781b1c58c23a3371e18c68aaf5f3ea2c611e4b2664af3bcca242271caca2cee7b15fe3ba092403451ac0e2e5ddc21a687fd38895d9a7896132798c5b117bb0eb1624c7d9bd9eb9811e0e952bd62915ce44e27f6fc76bbed255e829dd8b612df61a6e7c40e314dcbc16de27aee1a53b43b4037926b36e06a2b14af3b86ce6661142ca3d962dcef45415546428a540feae4ca229ee6a9a1c825c626005fa96d5746b900b77204e1380a66bd7e149e06f5d4876c43e8edfc0ae69e90543140134932a6991c8935340e4d27f3300a27e3de1018d528a77b8442dd1f778f84e8765b755a576f1485a3601ef546d32a873de894a44585baae3f90e9bbb8814d78228cbbd5d3c4189fa3ddeee0657128a463bf2e6cffb7820b0abf0001f7a726a3934530fb8eeaa3194b9864397d7bbb005c05defa0becef2440e156820becbfe6b0ca54951e54b27aa5795635ee9eed63bf6da10a2cf5df3113bbfe7e6ea546a9c83296ebfb82ea3b5976aa0a15ea010441d8c47138fe0cd13f537b62b811050000",
    ],
    [
      "ETag",
      "73m4P9JkrZaDwFnpKn/RZQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1640201486336"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "2d",
      "90",
      "d1",
      "4e",
      "c2",
      "30",
      "14",
      "86",
      "df",
      "e5",
      "78",
      "cb120673d1255c88218a59884cb9404348296773b0f5ccf654258477f7747ad39efcfddaff4bcf70accd1e32d8d5d5a7477bbaaa90976128d0f9869d6c1d198730006455099977b57a5adf5efff0487b9354c9fcf8b65a4e264238fd81ad82ec0c658dcdde41f67e06a35a946bdbad266f58283e7521982f5e670fb3428296f62158acf2fc6e9acfe0b2b90ce040bb024bb4683486173b4b07d43c0fb24eb55d8391236f353ae8e1fea0b2e43b65892249a2248ad364381ac6c94d3a1ea7c235a415d764045dbd80b430b16a0afa16558805b0fd28d665bf7e493c0a3e9b7f747a6274cf96a4d661688cd3e15fff3d05271657b61e07a0957cc663cd9095aa7178f905976d52e86a010000",
    ],
    [
      "ETag",
      "LpiaJY95xt2cun4g4IkZUQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "7282301840e177c95a1d2556a13b434141db010a882b06e3cf2ddc4cb877faee75ba39fbf3fda0885210226c6b06157a475324292bbabaaf0f41bf9eddafd22a671d9a570b2d8f13dc9b9d3b7cca9eda4d375edbe35dd28ab88bd92db08dacdf485d7f67d1f6518a34ebfbf3cd3353e660b5d1637376dba42ab59208e24afa4c4cae9c8aadd839d78e3efd0bb32e78ded48725a153faa8bcc0c075bcdf6879f89480193213468abd8158258c1daff04743bd400fe5dc3e0de176094769e70f2dccdfe6f1ac5ed4e45c004face950cb6c243b3bdf7bf1d16f359f8aab939b0c2d108c4dc64184d9eb1bbf29ca02fd2384edd4c04b8240c481a3df3f19dfe84e23010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:31 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-5-1640201486336",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85536b4fdb3014fd2b91f771b449fa6ea56a746d804a6d3ad214b44d53e43837c190c6c576ca10ea7fdf8d43196c127c8aed7bce3de73ef244ee789190118979765f827cfc742b62724240d30c5fefa6c5fef7cd8f8792f24ba73cff2ce0eb6c938dc788e0154bd1ed2e878612a564a0469b753393a2dc512944031335ba0db7d7715a8edb19f4daed1ed214e4e982177748bed17aa746b67d946e66426439d01d574d26b62feff6be65efa4b805a695fd56d1461165bfabf925178c6a2e8af1668dfaa50219c196f21c1dfc2526f1e9dbcc4d4eb7cd0cc17bce803226ca4257ae30051345cab3529aac64f4448ccb5707b2f616de34b498c8cb6d1115740b275642358df4e30eacb360b5b4e6fed92a584ec2f9ca8fd6d30b6f39694e578bcdd25f5bd7175ee0599ac63918ae35b64ecdcdc70bea27a0342f8c7a583d57cacffd99ff3f948a80d20aea60d4777ad41d38c3388dfb2c1db4bb71ea401c0fe27e97b663870d3bd04962a0c833a286450b510cfa498f26bd6e0488893a31ed44716b904409f45d4ce10c699292c30979905cc38cab9d50bcee10b90ee6a11785c1c69f4e42cf9490d232d7b3da5855c06b8f1a0b8c1cc745e03b751daa2817a856b57cee875e309986f32baf9ef20232ca1ed7f738e794e60a104d253650835c8a049b46fcc9d29b21d84ceddb31a8c8e8e713a9fa5e3979d5f6177a8843ac2c6bf325eb3098fbe7c6ce117145f3d240f6f58148604226e8f9f00b71b8a5750e72b9f182efa47e0a20050905fb789e0836818ffeb5e3e62314771f5594c63b2e0f53950693502f1137b51ed94377e8b688014bfd6face5b487c7965539aa8cb085423f17546f3ed6598b95ea0584419cbf6f5a75f803ff2001fe77040000",
    ],
    [
      "ETag",
      "kCnvxhZwuaiQ0uG+oeBDUg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1640201486336"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "3010c6bf8bf73695fa37439178d1b2c2a28596a5e10d0845c6be0433c7176ca7a854fdeebb0456a63129bc49eecebf53ee1e3fd9b35fca4816b17b553e3560775f4af03fdb2005d768efe855a371c002069e9744a63f5ecccd781d17f1b9cfc6d913cc8a72f57c7a4a84130f507116ed59a1404bc7a2db3d33bc026a13a89bcae45d1630bfabdbe2264be3d505e515ca365f5d27c97c912cd92138364aee79def19f68bb3b04ec11ef5328c08211d0ce525b7c04e1e3764dc7ab5ac3c061630538d6c1dd4169b1a9b9451c5065301b8cc2e9703c1c4d4fc2c924244ea3e05ea121f47a43e3318f9eeb149f6949369a1061bb98162ebae796ea4a768bb461bccac26937dfdf0017021be3f35eb050d6f957f1fe806f22fc4b6afe49906e4ae93ea80423c1f651aaceb994169ceb25d1e5bcae8fd862bd4e3eaa62a44525fbc1adea01b4df1e81f3643dff9fb4e4af77adbecdb3e507c27972cd11c9e2cbe5269b5f5eb5dcdd9b11163b0feeca2299ca41eba7d1707a32fb1a0e5f2d7686adede83b91b70d044c70fa53be2bcfa2826b0787df31dc8b6187030000",
    ],
    [
      "ETag",
      "RKznZ2OIfIFtT2Tqe5fgNw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-6-1640201486336",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85525b6f9b3014fe2b91f7b24b1320102091aa2d4ad98a96cb9a904d7b4a6d73606e0153db74aaaafef71d489ab5aad4be81bfdbb9dd936b51a5644298c86f1a5077efae242327040ccdf1751e7cf216c5ed457c767d1e7d0f57725838557e7a8a0cd1aa342deb02fa5a368a839e6c37835cc9a6a64aca3e1af5fdbee37bf6d076bcd0775d1f651a8a6c2eaa6b14ff31a6d613cb7a8c1ee452e605d05ae80197e5f1ddba1d5ab59257c08db69e275a18a2ad57333f179253236475badd607ea341eda0a4a2c00afe0b53f6e5b9f340d0729023f95670a09ccba6326d5568c1659589bc519d2b99dc93aeca271f6413cda359d29badb6cba4f7fee387de74d3dbed3a8fded7f56ad1bb54c0a54af525daa5a08da83ab384b2025aa343bbf1cb19b7026aa8863db80b6c9f3aa13d66190b7816ba2396d9c058c882117599cdc71e7829038a3ad3ba772a5ac96ae88cc04f693876c2d40b6846fdd0735370c736632e7810048cf11138e4e184fc55c2c099d0b5d462df34f9b58e936897acb7cbd93489ba3632da14e66c5f5cdbc4d33a0d36b9b36d0789aff4f6d0a242625a3bc5789944ebe92c897f46fbc5cd21a7fc6e7383abcb68a101d954d1120ca8854c7170e4c76a1327f16a399db75e780dc95dddbe5f6ca3f5efc3d31a325050f1b7078de40e78eba61f2f0ca9786398a20dfee356b96e33b882fd7645d9d6f2a81e0f0337201d59991758e87b881d2fab7584122a7368687f61e4e110d6e82309415cca325e7e43f41f01e583e6df030000",
    ],
    [
      "ETag",
      "L7+4MlvQIDkHEK8Oo2l1ng==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1640201486336"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "2d",
      "90",
      "5d",
      "6b",
      "c2",
      "30",
      "14",
      "86ffcbd9e52cab1f74b3e0854a9982c8d6cd9b0d91989ed6bab4a726a71311fffb4eea6e92c39b27791f72859fb2ce20867d599c5ab4978702f9dd0f29bad6b093ada1da21f4005915423e3f9953383e0c07cbd939fb4ae68762f1389e4e2642387dc04a417c85bc44933988bfaf50ab0ae5da6ea7a9ad5928be343e58ae3f93d72495a0a2cc07ebcd6a359dad12b86d6f3d38d23ec51c2dd61afd8b8da5236a5e7a59a7aac660e0a8b51a1d74707750586a1b658902498228e847a37010f6472fd170180967482b2ea91674f301d2c2c4caa4741655e80b60bb51acf36efdf571e885b6ffececc2e8de2c49af435f19deebe7e4955854d9b6d803ade42f1625439c2be3f0f607b4001c1969010000",
    ],
    [
      "ETag",
      "7/lq09h32IBwdZEChgH+9A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
