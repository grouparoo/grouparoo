const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1595717766871";

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
      "d0bb646d1d90aaa43b50483ff24740364c20c12af231a1d3249ddebd4edf0dde0fc04d4339afe6b1a303780112afe0b2597e8ca6ad472d8ba6271f47dbb7c1b577a2c7db40ed610c1d4585ee88fbe0f3244b9ac86d8e637d8e5fb599b481d684694c50af0cce5d6acd850cbac4bf9b3e522765cc57ae6b100f2cec4b3fb719cfacaf92202b10448c3be2390ac548b5869e3bc6d047a4a843f320f7f90aca6b810e652bd2db7ccaeb7395c9c0d33629d57a8574daa5ebf7efec79131e93cf2cf7da5b0716808ae9c228af2e8f99b1867001fe9bd52c27fab8da1433cac0ef1ffab7fb3a05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:11 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-1-1595717766871",
    },
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
      "0002ff8d545b6f9b30147ecfaf40ecb5492037924ad11aa5b4654bc84a48db6d9a906d0c750b986293a9aaf2df679b5cc852757b8373cef79def5c7cde1a9aa63f932cd4cf351d92f8a5c4c5eba7270af533e9c11cc4d2730fafbdf58fdc9a7f79b0c2afde035b198f8bdbf1b88a220acd409a27b8c9685920ccce57cb565cd0320705a54d41d8349b667fd4b74ccb1a0c86965941194ea219c99e25c123e7393b6fb777325a31a57182414e580bd1746f6faf3bedbca04f1871d63eceda168958fbc3bc9f138a0027341baf96958692e122c029208954710087f0e298bd4540da8a45f49a200c10a265c6a5b28a06d12c2271592872c1f4268cc2ac24ef7f6b067d69cfeca9af219a9469166420c5675a083808f86b8eb52b6f31d71cf76ae1cd27beb37083e5f4c69e4f5ad3c56c357797dafd8dedd91a0730c10aab8db50bf5e78a1fa548650b31e324539a7ce9ad2911de6d1b9d7706b8a790244215c3dbb0c03206c01c1a2318410b45c36e1f4606867008ad3ee842038d7ab817420cea0c4a59850719cd20c091d131478111f6c3a037e8826008bbdd008e7a000ea20e821d53dfa237fb5a7e1784e34bc272cac8b6c9fabde7f876e07b2b773af1ed7add1128137e59293faefaa81c2e1a5457fa514b4e14e505a142941aa7e3fab63799face5d4d86d8ad198e017a5dbec8ed8a40c2f0010d0a312b8e8b390de560747732b72f0f60b529df76414c44fcdceb3c942302e5fc552d27f33fcee38bc53a6a45359bcaaa2f7dcf71aff59a73f33ecd1d48ca7778d65bb36c61449243bf1455e3efaf5f8d5a0a5dbcd4ad3afd76657bdf2556f9a4c7c3112e70860e49ff637325b072fffb0e89e8dd5990007119f6e9191766f186103b244705ae5e14a9fabe23b4ccc1b0b72314c0829f44740cb3b38b38390d32174e71c677ada84e44d5c7cd91a4b22647c164b87805ee76849bc6a6f10771c8ab11dd050000",
    ],
    [
      "ETag",
      "WbGRvZp7MJX7dKRXsU0hOQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "95",
      "51",
      "6b",
      "db",
      "30",
      "10",
      "c7",
      "dffd2982f69a403c1abb1bf421e9b235e0265de2c26084a05a674f9dec7325396d56f2dd27c94e93970ec3027eb174f7bfd30fdf21ddabd7eb91dfbc60e4738f3cf0eca902b9fb9081fe6e374b5095d0ca2c25160a48df4683a6998d968b1bc43f3f022d9faaeb618abb97d18b7ebebaaaa354f20b726ae25e8d65ec948360cad83f9ddd6bfc4e2b680ef6c4044595171b67f68fb2de954e5ec5cbd9fcdba9922373cafc3e8ac693684a1a69df7f1fc2a8a61b77e4ff21dcbaf61a1879c48725a420a148e0f8d7a5c44748f4cc9557d1bc14305058c9045403b189b59c49ac4a2a1107c635f007fee8d328f4c330082e43ff102d30a19a636113ee57e40daf5153b1c4675b61e27fac7b206bbbaef8a114243d69c269858cb4b5d99c9137dfbeff8fc0d93c0e2e4e629bddda3bc96c4d4db954ba6e7d3b7ad3aa33e105ed926e6e0a179d90332818c84ed0bcdc50c62428d50d1ed58696654bf664b188ce45a60593c85947f42def822af4b625f56bb4189ff15d31cf7ddb3bfd651c4fcf8555da3cf62db9f1ec76ba8ac7b777efc2cd777d7ce6273b0dea4ea219220adce8f0871797a3301892c328ba463b6ab49d445a56e0dc093523f9866be34ba950e0edbdbfd8908930fe070000",
    ],
    [
      "ETag",
      "rOHoozX6trquC0foyx5xtw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `first_name` as __result FROM `profiles` WHERE `id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1595717766871",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d546d6fda3010feceaf88b28f2b240442a012eaaa36db32016d21d075d304b673c9dc8638b59d4e55c57f9f9df012d66adb377277cfcbddf978691886f940b3c83c354c4c93c702f8f3bb7b86cd139d0189129d89a3afbef36d31e2ef3b63fee5ce6589585837c36155454bb440eb3c85a6600527204ee7b356c2599123ce585311369d66db1db85edbf37abdbed7aea002d27844b3074df053ca5c9c5ad6ce462b612c4901e554b4085befe3d69363e59cdd0391c23a56b59490b0feaa7b9632822465d9703eab3c1402f812d688a6dac5011ce10fc7ec2d8ad6ad44553f510288105664523bab6808cb629a14bc24574c2f2aa8c2a5e5fd672d60cefc917f111aab98722197195ac3ca40c2582e39882295c6c7e9d5d858a94e639a825819b79ffda96fac68b43286c699310ac6416854732c8923109266a57c88700a355195dd4e2c7863577b0a4d822412b02d5b7a760fb5fbf600c7d82371bfe3e2d8068cfbd8735107db64d0856e8401d519a4d6aef028631951880e068744a4e7bad88bedaeeb800383b88d6d40c8e982d373dab6b965d8ecfbf9c5a9844b2a7226e876a6e6ed3408fd65389d4f2ece43bfde7b8cd4cc2e2bf7c79d1fb524d590ea6eff3696578e724e9932556e2f9884fef4fc220c16351bea298d2041e479f6a81f538c52010734e26ac712f898457a39e6f5d52c0883abc9f9e8c050be8eeb5da55065dff7660f3dd5d9c2e7fc78d5d516aaa8b6d9eb9ab5dce6e44d96054a8b37689eb661b37dc4d1f8f3d78f468ddb5467b77565deccfde99dc696399d99420c1c327250fb8fb7a98155fadf7f2aaa7a77e31aa0ce7c2f2fa40aab2b21e2204e38543743d755a75b42cf190c7a3b4205e4f25545c7b1f715afee5c6bc11a32b91b4575efd51c3747968a9a9d12a6cbd51b9f04934fa5f9c6a6f11be889dfbcaa050000",
    ],
    [
      "ETag",
      "fdXE2ZVLr+3MrJY5ogsV/Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff4d515b6f8230147ee75790ee75647389224b7cd08d6c2ec438d4972dc6543c301438ac178d31fc77db02ca4bdbef727a7abe5e2cdb2687b4d891579b6cd3e45f023b3f2420bef521042e33c1d55662c1813c6a37089a68f7cf528e93a7edfc38f04e32fb9abc0f0fbe771a8d6a178ffe20a7ca775148e138856cc715fe35d86e78a31534077de366c34c437343a3897369b4c5329cce3eba4a8e3ba3cc5641309e043e69a4caec6bb556e6257bdc861003832282fb7b4a867b88c4d40cce695e66e070942c02de34d185b59c30942565888ea29c17a7d7f7fa6ecf750783a1db6bdd194654a458e882d582dcda0b14340bf1a46727b59bb01ad651b44190b8934e371f251d75b1cf522037b66a4e6bab45eb7bbfc959009f3354d37030333c93368c37d4c30a9d8560120c1d51f55d9fa96838abb2ae40eb645619020000",
    ],
    [
      "ETag",
      "ZTuAg/bPv69wulJBD8kE9w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00d07fd9e724638bb07d0b96560ca941d58b41171bf7dd4c9674faefcdf4fcc1f901455511cef3dbd49111bc82ad784187ea709e74037ed4cd74bae758447b0a0b88691d2e9dcd24291be2ec6db565a59dd724168e155d2fc18394d8e553676572d7948aa17ffbbddee2cc75dbd397071b99aaa33540999a46980649787c1f34d1f8dabaf0d4e3b2089889f48b7e1d232cee5b0b2be190012575d48761a6e04c6b1da4d422f56df3fca8e3a5baa518f512cd61b047cee74655eed991931f4b83513391c00e9075a68cf09c3e67b28ad00efc37f3db3693e7d52005230cfcfe010254cf0d05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:13 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-3-1595717766871",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d54db6e9b40107df75720fa1a1bdfc191acc6754863c9c629c649a3aa42cb7a20eb004bd8251745fef7ee2ebee03a4afb063373ce9cb9ecbcd7344d7f24e94a3fd7f480444f05e46f5fd634d0cfa407388aa4c77a5dff24ad17bc84f543ea24dfee6fc677f1cb70584611856628c962a8335ae418d8f972d188725a6428a7b42e08eb9d7aab37e8992dd3ecf72db3554219c4e194a48f92e081f38c9d1bc64e4623a2348a01658435304df676e3b96d64395d03e6cc38ce6a8844ccf834efd79862c4094d87cb45a9a16090fb9020124b1507f02ab838666f1094342211fd4c30208c699172a9aca4c1340d4954e48a5c30bd0ba3302bc9fbdf8a415fd8537bec6998c64592fa294ae04c5b218e7cfe968176e5ce67dac4b99abbb39137993bfe627c6dcf468df17cba9c390bedeeda766d8da3200685d586da85fa73c48f52a4b2ad8071922a4d9ef4569408efb68d930f06b8a790244215836d986f36fba865350741189838b43abd206c42105881d9439da089075de8ae02405506a5acc4a394a69d66af8f71bbe3779bb0f2bba6857cab6d62bf336809c26e7f00d8d2b7e8cdbe96979c70b8242ca38c6c9bacdfb913cff63d77e98c479e5dad3b4445cc2f4be5c7551f95c34583aa4a3f6bc989a22c27548852e39c389eed8ec6dee4b62243ecd6142284df164f72bb42143338a0512e66c5219fd1951c8cee8c66f6e501ac36e56617c444c4afbdce43392250ce5fd57232ffe33c9e58aca35694b329adfac27327ce77bde2dc7c4c738be2e2039ee7ad59b63024f1a15f8aaaf6f7d7ef5a25852e5eea569dfe6369bbf712ab7cd2e3420839a4f890f43f3657024bf7bfef9088de9d05091097619f9e7161166f08b343729c43f9a248d9f71da1d9b15add1da100e6fc346260b6771127a741e6820452be6b457922ca3e6e8e241515390a26c3c52b70b623dcd436b53fa5f3e493dd050000",
    ],
    [
      "ETag",
      "8xjXi1wcUejhnNmBYPCWlw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ffc595516fda3010c7dff32990f738909ab524dda43ec0c65ad6002d8469d584901b5f525327ce6c8709557cf7d94e28796915694879897df7bff34fb9937d2f4ea7839e6946d0970e7aa4c99f02c4ee4302eade6ce6200ba6a45e729e49405d130d0a27265a89984e3f6e76b7c31f0fbfd23e7ef879eb2defafaeca28193d418a75dc8bb6b41d5360446afbb7b53b95df6a194ec19c187156a4d9da9adda3ac76b99517e17c3cbdae2b292756992e8360300c46a892f6ddb721042bbcb647fe1fc2ae2ba782a10d7f9c430c02b2088e7f9d0bbe81488d6d79254e73063dc90b1181ac2026b19413c18b1c0bce7bdad53befb9fdcf7ddff57dcfbbf4dd4334e3115694672661b940af78c5156673fed75418b99fca1e88d22e2b7e28058a6b4da857484b5b934d097af5edbbef048ea7a177518bad762ba796d9981a532155d9fa66f4aa5527c233dc265ddf14ca5a2127901110ada069bec6840890b21d3c976b9ce70dd9c3d92c3815196744704a5aa26f691b54a6b60da9df83d9e084ef8a7eee9bdee96f8370742aac54fab16fc80dc793d1221c4ceede84ebefeaf8cc0f770ae49de07a8848b0a3c33dbbb8ecfbde193a8ca2afdc8c1a6526911205587784f548bea14afb62cc24387be71f0975bddbfe070000",
    ],
    [
      "ETag",
      "trfiN+jyKBJYXm5aYVK6UQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ltv` as __result FROM `profiles` WHERE `id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-4-1595717766871",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d546d6fda3010feceaf88b2af8584b7042aa10eb5e9168dd22e8476d334816d2e99db10a7b6c3842afefbec244058ab6edfc8dd3d2f77e7e3a56118e6134d57e6b961621a3fe7c0b71f1e1936cf7406248a7566ebe0471fae646e4bffdbf7b13bf4075faec7a35159450bb440eb2c81a660392720cee7b356cc599e21ce585311367bcd767fd877dbaeeb3803b75d420524d184a64f9ae097949938b7acbd8d56cc589c00caa86811b63ec4ad4dc7ca387b04228575aa6a292161bdab7b9130822465e9683e2b3de402f802d68826dac511bcc21f4fd95b14ad5bb1aade5002881096a7523b2b69084b231ae7bc20574c2f2aa8c285e5c3672d60cebc8977191acb446e960612c662c141e48934ae83db1b63a95a8c680262693c7cf602cf58d2d5d2181917c6c4bff143a31c60c1b80221695ae8860827505353d96a54fe1b4b3a506812249180aa6ce1da0e6a0fec218eb04ba241b78f231b301e60b78fbad826c31ef45618509d416aed128f5296da78e03aaba8db211847bd8ee3280604dda84b22a733ec767a0ee9c2903866c5b03bf4f39b53095754644cd06a98e643e087de220ce6d3cb71e8d57b8f909ad955e9feb4f39396a41a52dded7b6379e528e3942953c5dafc69e805e3cbd0bfafd9506f68023122dbd9b37e45114a041cd188a33548e0376ca59763deddcefcd0bf9d8e274786e259dced2b852afb71307beca9ce166eb3d355975b28a3daa6d3336bb9ddd99b2cf728c9dfa0d95461b37dc2d1f8fbd7cf468ddb54f756b932bfcebde0bbc616399d0920020e2939aafdc7dbd4c032fdef7f1355bd3f6e0d50f77d90175285d595107114271cca9ba1ebb2d38ad0edb96e674fa8805cbeaae8db4e7f5ff1eac0b516ac2195fb5194875ece71776229afd92960ba5cbdf1a93ffd54986fec1a7f00d12c2420a3050000",
    ],
    [
      "ETag",
      "y6bjIeDtu0tIXYA79I8KFA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "5b",
      "4f",
      "c230147edfaf58eaab338e0803131ec0a8982c5e508c8921a48cb3b9d1edccf64c8264ffddb6db8497b6dfe5f4f47c3d38aecbb669b161d72e5ba7c97705727f9600bd98c31c542548e9adc442013b376e209e18772668fb11cee2f7dfe17d962432e06237d88dc78d4b455f9073ed3b68a4719c82d8288d3f2d765bde6a05cfc1dcb85a49dbd0ded06ab42fad76173e4dde4e851c3756785c84e1641adeb256aaedbed46b6d1f92e17a0e31482822383ea7949841440f766ec5f35280a7b09211a8b689296ce44462557289e869cabbf2fcfea81ff84130180c03bf730b8c38a5589882c52bfb6f4f485ccc716746678d9bc90636497439b0f8249cd378b4f4638a7bfdd185df63ff7cdd9e964e8796c78ed33d817a96a8e75160a7b8645d1c3768c6259306c90a2c1d71fd5fb3945acea99d3fbc29eb831a020000",
    ],
    [
      "ETag",
      "jltkXLHfVz8Gjggr7alw6w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "8b08000000000002ff1dcf4b7282300000d0bb642d8e809fd025bf0241a382806c32190802b50103d8d04eef5ea7ef06ef07d0a260c340c6ee8371f00666aa19cb62893a68aaa7c2f5b58077f4ea5a69bb6fcc3220810535f9be8eede23c1a7efd48cf73381381224c3e3d8eef8a26a72adb3231ddf16ced38b4128abd55a24245ad6c953799ed45f5ad856d540f5e7f8d11db9814471da74e1564eac12ef9400ffa6517bb5a7d9a9c551ae869dee768fd78ea548ccf6fe9f0390c6fb87c2a3e3a7ee1b466552dd1a5d94bdac45b7454c6bc4f20580026fb46b08134af99be318c05f86f9271eed9eb6a322a9800bf7f6e91d4eb05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:15 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-5-1595717766871",
    },
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
      "000002ff8d54db6e9b40107df75720fad8c436b5317624abb11cd220d938051cabad2ab4bb1ec826c01276491445fef7ee822fb88ed2bec1cc9c33672e3b6f2d4dd31f69b6d62f341dd3f8a984e2f5d303c3fa99f28040b1f2acf8ededeae661e813e7e74bba723f5bf76b331e8feb285aa1394af304ce392b0b02fc62e9b7e38295392a183b9784e7e6b9618e4ccbb0acc160681935944312cd68f6a808ee85c8f945a7b393d18e198b134039e56dc2d2bdbdf3fca59317ec0188e09de3ac1d9988773eccfb35610409cab2f1d2af35941c8a10524413a5e2005ee3cb63f63645693b96d1cf94002284959950ca6a1ac2b288c66551914ba6376994e64af2feb761d07d7b664f038db0a44cb33043299c696b2450285e73d0aebdc55c73dceb85379f04cec20dfde98d3d9fb4a78bd972eefadaeac6f66c4d209c4085d5c6da65f5e7ca9f4a51956d0d5cd0acd214286f4389f46edbe8bc33c03d852291aa386cc342ab3b40c6b03bc211b64834ec9938ea02c6436c99a887bb64d487fe1a036a3254ca6a3cca58368ac032a16b8503dc37c27ecfe88718703734cd9ed10318180845fa16bdd9d7f25250015794e78cd36d93f595e7047618784b773a09ec66dd112a1371552b3faefaa81c211bd454fa514b4e14e505655254354ec70d6c6f320d9cbb860cb95b33881179f59fd4764528e17040a342ce4a4031676b3518dd9dccedab03b8da94db5d109711bff63a0fe5c84035ffaa9693f91fe709e4621db5a29e4d6dd5fdc073dc6f7ac3b9799fe60e25e53b3ccf5bb36a61449343bf2aaad6df5fbf5b8d14ba7ca95b75faf7a5edfd50d8caa73c1e445040460e49ff637315b076fffb0ec9e8dd5950007919f6e9b99066f986083f242705d42f8ad67ddf115ae6a037d8114a60214e23ace13ee2e434a85c90422676ada84f44ddc7cd91a4b221a782a970f90adced0837ad4deb0f46e51a2edd050000",
    ],
    [
      "ETag",
      "WsPPWHj8ScIZwmWN+7hd5g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffc595516fda3010c7dff914c87d1c48a46a9276521f60632d5a0a14d2a70921135f323327ce6c872aaaf8eeb39d50f2d2295291f212fbee7fe79f7227fbde7afd3efa433382bef6d18e267f0b10e55502ead96c56200ba6a45e729e494003130d0a27267af4f07aedb9e57af9330b768f61f925d9cf83e7fbfb2a4a46bf21c53aee4d5bda8e293022b5fdcbdafdda6fb50ca7604e8c382bd26c6bcdc15956656ee575b89acd1f9a4aca8955e62f41309e0453544bc7c1c7108215deda233f87b0eba657c3d09eef561083802c82f35fe782ef2152335b5e89d39cc150f24244206b8849ace444f022c782f3a1760ddda1e3deb9bee3fb9e77eb3ba768c623ac28cf4cc2cb1abde3155798adf8aba93072aeab1e88caae2a7e2a058a1b4d6856484b07934d097af71d07ff099ccd43efa6115bef36bd46666b6a4c855455ebdbd1eb565d08cf7097747d5328eb849c4046407482a6f916132240ca6ef05c6e719eb7644f168be052649c11c129e9887ea05d50993ab4a4fe0816e30bbe2bfab96f7ba7bf8fc3e9a5b052e9c7be25379c3d4dd7e1f869f9215c7f37e7677e522a904bc1f5109160478733bab9757d6f844ea3e81b37a3469949a44401d61d613d921fa9d2be183309bd63ef1f41051384fe070000",
    ],
    [
      "ETag",
      "0Gw265ySPKnLbHTy+gjNLQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ios_app` as __result FROM `profiles` WHERE `id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-6-1595717766871",
    },
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
      "8d54db6eda40107de72b2cf735801df08548288d1227b544480043145515ec2e637753dbebecae534511ffde5d9b8b69a2b46f78e6cc39676676786b1986f98be66bf3cc30314d9e4be0af5f9e18364f7406244a7466827b8b7c72753d4199bdb0ef1f7b37d1e32c190e6b14adaa05ca8a14da82959c80389bcf3a0967658138636d45d876dbb633703cdbf35cd7f7ecba54401a8f68fe4b13fc94b21067ddeece4627612c490115547408cbf6f1eecb69b7e0ec098814dd63d5ae1212dd4f75cf534690a42c1fce67b58752005f428668aa5d1c8ad7f8eb317b87a2ac9328f40b25800861652eb5b39a86b03ca649c92b72c5f4a6822a5c59de7f3602e62c18059791b1a24c2c5151ac0c248ce592832853695c4fef6e8d956a33a6298895f1f02d98060abb5e1943e3dc1885b76164d443ac58d72024cd2bed08e1141a8a2abb1d57f8c1a2f6149a044924600b5b7a968b6cdf1ae0187b24f67b0e8e2dc0d8c79e837ad822833ef4d7185093416aedba1ee52cb7c18ffbfeda1bd878e0f8704ae2d83a752c34883d826ddb4503ec3a601173cbb0d9f7f39b53095754144cd0ed40cd87691805cb683a1f5f5e4441b3f718a9995dd5ee8f3b3f6a49aa2135dd7e3696778e0a4e993255ad2e1c47c1f4e2320a170d1bea1d8d2041e475f6ac5f528c5201876ac4510612f82d5bebe598f777b3300aefc617a30343f534ee7748a160dff7660f3d35d9a2d7e278d5f516eaa8b6e9f6cd466e73f221cb02a5e507342fdbb0691f71b4fefef5a3d5e036d5cd6d5d999379307dd4b5554e67a61003879c1cd4fee36deac23afdef7f1485de1db82e5037be97175285d595107110271cea9ba159dde996d0731dd7df11aa422edf233cdbd921de1db9d6820c72b91b457decf51c374796ca869daa4cc3d51b1f87e39bca7c6bd3fa0337c69bbba7050000",
    ],
    [
      "ETag",
      "Qb3VnQDFQam1V1PY3GTYSg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff4d51df4f8330107ee7af20f55149e461434df63096198db8397431c62c4bd71dd80d386ccbccb2f0bfdb16d878a1fd7edc5defe3e4b82ed9f3624b1e5cb2e1e96f05e27895825a984b0cb2ca94d4478985047263dca0686adc9c2da61f8f5f09c7fd4b72984cf8357ebe8e47a3c625d90fe454fb4e1a699c70c8b652e36f8bdd96b75a4173301dd76b6107da0eada68ea5d5c2f93c9a8e677d29c7ad9566cb281a87d194b4526dcf95fed6f6293bdcc490808082c1e541a5c01d30f56c3797342f33f0245682816c8798c2464e05562515889ea6bca1e70fee07811f04c3e15de077ee0c19551c0b53b07c27e7f10a15cd62fc33cb93c64d44039b2cba2448d28ba71f90960ea658890ac899addbdbcae9d0ea322f3c2a906f02f53612ec0eb7a40b6382665965b2301d2dcda8fe5f4f5cb59c533bffc34e25441a020000",
    ],
    [
      "ETag",
      "icQETFYfiokKfvCCi+oWMA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "6e82300000d07fe9b3181820b0379a49d54d6ce5267b21b5eb1244a052ae5df6ef333b7f707e00658c4b59f46dc51bf00a16fae2add9fabd75a1419822d24e123b1cdf2ed0aca7c1f09b11e64bcf4f9113d4a9a3e9d9d52977456265db3b72db2a48a5c07dad86e5ac98f0451e6744cff13d2364c2df8c7d166db6af378fca84d1e836b156f976e7fb5b5d4c618ec2436c79aed51d6fced769a06ad08f7286798cd95e55613092d4ab6e342f3e36f642e69d76c1c4c028a2cc8f7819e09e5f0f148d0152a87b30b0027c1665c765513e67a6ed792bf0df2cfa45f0e71572daf10efcfe0137b2559c05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:17 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-7-1595717766871",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d545d6f9b30147dcfaf40ecb509a10921a914ad594a37a4846c84b4aba609d9c650b7802936a9da2aff7db6c90759aa6e6f70ef3de79efbe1fbd6d234fd91e4917ea1e990244f152e5f3e3d50a89f490fe620919ee7c45de3fb9faf460fd9e9e24b7617bf82ec793caea38842339015296e335a9508b38bd5b29394b42a4049695b10b6edb6698d2cdbb4edc160689b3594e1349e91fc5112dc735eb00bc3d8c9e8249426290605611d44b3bddd589f1b45491f30e2cc38ce6a8844ccf830efe79422c009cdc7ab65ada162b80c7106482a551cc011bc3c66ef1090751211bd26080384689573a9aca641348f4952958a5c30bd09a3302bc9fbdf86415f3a33671a6888a655968739c8f09916010e42fe5260edda5fcc35d7bb5ef8f349e02ebc7039fde6cc279de962b69a7b4bedf69be33b1a0730c50aab8db54bf5e7891fa548658b30e324579a02e96d2811de6d1bdd7706b8a790244215c3dbb0d0ee0e8039ec8e600c6d140f7b168cbb18c221b42dd0835d34eae37e043168322865351ee434b761b7175bd63034e3110cfb2318851059dd308a11b4fa6000cdee50dfa237fb5a9e4bc2f11561056564db64fdd67703270cfc95379d044eb3ee185429bfaa951f577d540e170d6a2afda825278a8a9250214a8dd3f502c79f4c03f7a62143ecd60c2700bd2c9fe476c52065f88006a59815c7e59c467230ba37993b5707b0da94efbb2026227eed751eca118172feaa9693f91fe709c4621db5a29e4d6dd59781ef7a5ff58673f33ecd0d48ab7778d65bb36c614cd243bf1455ebefafdfad460a5dbcd4ad3afdc7caf1ef2456f9a4c7c7312e718e0e49ff637325b076fffb0e89e8dd5990007119f6e9191766f186103b244725ae5f14a9fbbe23b4ed73f37c472880253f8de8f5f61127a741e6c219cef9ae15f589a8fbb839925435e428980c17afc0db8e70d3dab4fe001144b278dd050000",
    ],
    [
      "ETag",
      "wgIvehXz/3c7lOBmYfzamw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "95",
      "c16ee2301086ef790ae4bd82445685642bf500bbb4450ad0427a5a2164e249d6d48953db611555bc7b6d27945cba8ab448b9c49ef967fc2933b2e7dde9f5d02bcd08baeda13d4dde0a10e5b704d4b3d9ac41164c49bde43c9380fa261a144e4cf4a17c5b0d1758ed73bf0cfca92fb3fbe56372775745c9e80fa458c7bd6b4bdb310546a4b67f5bbb57fbad96e114cc891167459aedacd9bfc8aaccadbc09d7f3e543534939b1caf2250826d360866ae9d4ff1a42b0c23b7be4ff21ecba756a183af0fd1a6210904570f9eb5cf003446a6ecb2b719a3318485e8808640d3189959c085ee458703ed0ae813770473f469eeb79e3b1efb9e768c623ac28cf4cc2cb067de2155798adf95f5361e47eaf7a202abbaaf8b914286e34a159212d1d4d3625e8d377eaff2370be0cc7378dd87ab7751a99ada931155255ad6f47af5b75253cc35dd2f54da1ac1372021901d1099ae63b4c880029bbc173b9c379de923d5dad826b91714604a7a423fa91764165ead8927a1fac26577c57f473dff64eff9a84b36b61a5d28f7d4b6e385fcc36e164f1f4255c7fb797677e5a2a904f82eb2122c18e0e7778e38fbcf1109d47d14f6e468d3293488902ac3bc27a243f52a57d3166129c93f301f031f5d7fe070000",
    ],
    [
      "ETag",
      "jyqO0Matbp8yL8B8snFNHg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `date` as __result FROM `profiles` WHERE `id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-8-1595717766871",
    },
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
      "02ff8d54596f9b40107ef7af40f431b1c1f8c08e64a556421b24c74e314e545595bd2c03d90458bcbbe450e4ffde5df0819b28ed9b9999ef98d919bf35344d7f2459a89f697a40e27501ecf5cb030df4539501816295794903e37966a39364fcb286fb5e7e72f5e28d47a3aa8a94688ed23c8126a705c3c0cf16f356cc689123466953123607cd766fd8b3dbb6ddef0fec7605e5904413923d2a827b21727e66183b1bad98d238019413dec234ddc78d27cbc8197d002cb871ac6a48216e7caa7b9e508c04a1d96831af3c141cd812524412e5e2000e83afc7ec2d82d2562cab9f080684312d32a19c5534986611890b56924ba6371994e1d2f2feb316d0e7cec4b9f0b5558804ac34c4b5e592012f12a17df366d7da4af6189104f84abbbb723c475b9170a58db4736de25ebbbe564db0a40c810b9295c23e0a12a8c9c9ec7656ee07afb4a7502448200edbb2a56df6517b600e8328b07134e8f482c884201804760f7502130fbbd00d03407506a1b42b3cca68665980a0d3ef011e5a96852044a66df5b139184018b67b66dfb23ac3f6d0d4b70c9b7d3fcf8c08b8243ca79c6ca7a9df79aeef2c7d6f31bd18fb4ebdf708c9995d56ee8f3b3f6a49c821d5dd7e3696778e7246a83455be9b3bf51d6f7ce1bbb7351b7289261023fc3a5fab358a50c2e180460ca520805dd3503d8e7e339bbbbe3b9b8e270786722f6e76955c96fdda9b3df45467f35ff3e3a7ae5ea18a2a9bfdae5ecb6d4e3f64b94549f101cdd336acb78f381a7ffffadda871ebf2e0b6aef41f0bc7fba9b0654e653c888041860f6affb19b0a58a5fffd7722ab77d7ad00f2c0f7f25cc8b0bc12cc0fe29841753324ad3add12da72efed1da10432f1bec2ea767715ef2e5c69410a99d88da2baf46a8e9b234b45cd4e0953e572c7a7eef47b69beb169fc018dc65b7fa4050000",
    ],
    [
      "ETag",
      "xmb/wO7a+lAxqeh5p+HxRA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "5d",
      "6f",
      "82",
      "30",
      "14",
      "7de75790ee75248544d1253ee066b22566716efa628ca970612870595b34c4f0dfd716505eda9e8fdbdb7b7ab36c9b9cd322222f3639a6c95f05bc7e4a407ee9c31a449549a1b6120b01e459bb41b244bb294eaf67f482609bd1eb765ace5717b10a66b3d625c25fc899f2dd1452384e218b84c23b83ed8e375ac172d0371e0edc343437749aac4ba3bd053f8b219f6364f8cfcd7219cc970bd2498dd9f76a6dcc3b4e785c430c1c8a101eaf29399e20941f666cc1f232034760c543105d135dd8ca09c7aa641cd151943371dcd174e4bbbe3f1e4f7cb7776718329962a10b36dfe4de5ea264d91aaf7a72d2ba096f611b441f038907d90cd351d245177bd4a30ef51cea92bbd674a7bdd5a3fda3ebbc9620561cd54c02cc2494f491bca21e59ea4424afc0d021535ff69eca8eb31aeb1f3a4ecc6f1d020000",
    ],
    [
      "ETag",
      "0o9wko2AAVl0wV9pBPvsPA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "646d9d508c90ee60004544882889dd300851289fc847119cdebd4edf0dde0bc449c2bb2eea45c16bf005c6f813cf93b923545d2289f194d96325511adb57b734ebef0963629ce25de315e5462aa8586c2f3e744ce5a2e30f57d84ba1ec498d3dd36229d94c22f5503724a50ae53ed3ac28341562a347f8938b41a77b18acf0b2aa87868632435201356dabf88c0d543d5bf6b1f4e5a954abb5763de8e3f144d31dc9490fefa8c2996189f33d68c5bd0ddc0055cd088dee60678bf5a0398d27983a8019e0cf5bdef22ecadf3319613c03ffcda81f6ffc7dd579dcf216fcfe0182bf8d4805010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:18 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-9-1595717766871",
    },
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
      "8d",
      "54",
      "db",
      "6e",
      "9b",
      "40",
      "10",
      "7df75720fa1a1b1c5fc091acc6754863c9c60de0445155a1ddf540d7c12c61974456e47fef2ef882eb28ed1bcccc3973e6b2f3ded034fd99a64bfd4ad3318d5f0ac8375f560ceb17ca0302c5caf36d0efd78ee1b9dcd5dba8a573875f9f4e97e38aca26889e6689d25d0e4acc809f0ab85df8a7356642867ac29099b8366bb37e8596dcbeaf76dab5d413924d194a6cf8ae0b71019bf328cbd8c56cc589c00ca286f11b63ed88dd74b23cbd90a88e0c669564326e2c6a779bf268c2041593a5cf8958682431ec21ad144a9388297f8fa94bd45d1ba15cbe8574a0011c28a542865150d616944e3222fc925d3bb344a7329f9f05b33e8be3375c681465852acd330456bb8d09648a0506c32d06ebdf94c9bb8b7736f360a267337f4c777ce6cd41acfa78b99eb6b8f778ee76802e1044aac36d4aecb3f57fe948aca6c4be082a6a5a640796b4aa477d7c6c907033c502812a98ac32e2cb4cc3e6adbe60047d82291dde9e1c8048c6d6cf550079b64d085ee1203aa3394ca2a3c4a59da8f06fd25a06e68e10e845dbbdf09edae1d856dd3ec5d5add2e3231d277e8eda196b79c0ab8a13c639cee9aac3f7a93c009036fe18e478153af3b4245226e2ae5a7559f94236483ea4a3f6bc999a22ca74c8a2ac7397103c71b8d83c9434d86dcad29c4886cfc17b55d114a381cd12897b31290cfd8520d46774733e7e6082e37e5c73e88cb889f079dc77264a09a7f59cbd9fc4ff30472b14e5a51cda6b2ea7ee04ddcef7acdb9fd98e60125c5073caf3bb36a61449363bf4aaac6df5fbf1ab514ba7ca93b75fafdc2f19e14b6f4298f0711e4909263d2ffd85c05acdcffbe43327a7f1614405e",
      "86437a2ea459be21c28fc9490ed58ba255dff784966d99977b4209ccc57984dd1eec23ce4e83ca056b48c5be15d589a8fab83d9154d4e49430152e5f81bb1be1b6b16dfc01472ce962dd050000",
    ],
    [
      "ETag",
      "BOe6gOS/3yHnjgjbnNsLYQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ffc595516fda3010c7dff32990f70a5a3395844eea03b474434ba140789a1072e34be6ce893ddb614315df7db6134a5e3a451a525e62dffdeffc53ee64dfabd7eba19fb420e8730f3dd3ec5709f2f02103bdb49b15a892696516c10b05a86fa341e3cc468b6f9c2ed9e1fe816f26d15db6fef3711e8c96b7b755944a7e408e4ddcabb18c9d52604419fbbbb37bb5df6905cec19e987056e6c5ce99fdb3ac0fc2c9eb78359b7f692a39274e996fa2683c89a6a8968efdf721046bbc7347fe1fc2ad5baf86a117febc82142414099cff5a48fe02899eb9f22a9c0b0603c54b9980aa2136b19233c94b8125e703e31adc0cfce1cd30f4c3300846a17f8a663cc19af2c2266cd6e80dafb9c66cc57fdb0a23ff53d50359d955c54fa54069a309cd0a19696fb329416fbe63ff1f81b3791c5c3762ebddd66b64b6a6a6542a5db5be1dbd6ed585f00c7749373785b24ec81914046427682a769810094a7583e76a878568c99e2c16d1a5c8b8209253d2117d4fbba032bd6f497d8816e30bbe2be6b96f7ba7efc7f1f45258a5cd63df921bcf1ea7eb78fcf8f42edc7cb7e7677e72d0a09e24374344811b1dfed5f568180657e8348aeeb81d35da4e222d4b70ee049b91fc956ae34b3153e01dbdbf279c177efe070000",
    ],
    [
      "ETag",
      "pKoiQlyDFoUBLCgSx/N68Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `stamp` as __result FROM `profiles` WHERE `id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-10-1595717766871",
    },
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
      "8d",
      "54",
      "6d",
      "6f",
      "da",
      "3010feceaf88b28f1b2414f25609751dcdb654403b08ada66902c75c32b7214e6da75557f5bfcf4e20246b55f51bb9bbe7e5ee7c3c75344dbf25d9463fd6f488247705b0c70f3734d23fa90c0894a80c14b78be9f91781effe1a052763ffdafe183e8c46551529d11c6df314ba9c160c033f5e2e7a09a3458e18a55d49d8ed9bddbee5594edf716cdb75fa1596431a4f4876ab18fe0891f363c3d8fbe825942629a09cf01ea6db3a6edc1f1939a337800537dab28654e2c6dbc22729c548109a8d968bca44c181ad608b48aa6c1cd09be8739bbe47d0b697c8ea7b8201614c8b4c286b150da6594c928295e492e9490665b8f45c7f3602fac29ff8e3505b732155d61ae2da6ac58017a9d0bece2fa6da5a76199314f85abbfeeecf7d6d4d366b6da49d6893601a845a35c39273035c90ac540e519442434f6677d30a5e59544da14890401c76652bc7b451df35bd288e1c1cbb032b8a4d882237722c34884cec0d61b88900351984d2aef028a399e30d4cc7f6d0706881ed0e8e62d3743dcbb2ede120f606ae37d838470e42437dc7f05cf7f3c0888033c273cac96e9cfaf53c08fd55385fcec6a7a1dfec3d4672666795fb76e7ad96841c52d3ed5b6379e12867844a53e5e28259e8cf4fc76170d5b0215fd10412841f1777ea1dc528e570402386b620804de9462d47bfbc58046170313b9d1c18ca8771b9afe4b2ec576df6d053932d7cccdbabaeb65045954dbb9e6dab9b36cb154a8b5768ee7761bddfe2e8fcffeb77a7c1adcb93dbb9d27f2cfdf94f852d732a3387181864f8a0f68eb7a98055fa1dff28b27c7fdf0a214fbcd6976726883c13cc0fea98417534645bb5ba23743ccbb5f68412c8c4cb0ac7aa2b5edcb8d2822d64623f8bead6ab413eb72c15",
      "0d3b254c95cb473e0b66df4af39de7ce3fc8c54588a8050000",
    ],
    [
      "ETag",
      "eukSMJBtcqz/usiCEW6+Tw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff4d515d6f8230147de75790ee752cb088c8121f7421998b2e7e660f8b3115af0c07dcda966dcef0dfd716505fda9e7bceeded393d5bb64dbed262479e6cb24d936309fc7497809ce9c31c449949a13686850072afd52069a2d57f455abefeb2c8cddf19878e3f7bf43ac7a4dfaf5522fe849c2add592185f729643ba1f087c17653375c4173d0376e36dc0c3437349c3c31c32d479368b11c4ca6b7648e3b43beadc6e3c1701c9186aaccbe566b651e73c0ed1cf6c0a188e1fa24c6f100b11c19ef82e62c034760c96310cd10dd58d309c792518ee8a892e3b98ee7877ee00541b7db0bbc569e614c658a85ee582dc865be4449b339fe68ffa456135ec33a8e360cb2bf49e83623457d9be607bfe7fa7ee8859d282417ba6a4e6bab45ebebe0e14982987254be0418372e696379466d5bea54242fc19463aafeee25954dcdaaac7fc5b47f9626020000",
    ],
    [
      "ETag",
      "zniuJxpE0mWpre45Q214qg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "6e82300000d07fe9b31aeeae7b1bd4cccaa81826082fa4d0968b9322940d62f6ef333b7f701e8096251fc75cc92befc02b58a80137e5c6972fae7e62662cc309a65335d4f398611dc5dd906407ccf715d111526d2ca6bbfda698cd9c1d5d9a6398a44b5bb829b3186f8d107b4463e9da12377dc13c925aa7573546b05f371d99fab3b4d2efee63b93834d40b871d6fb9c8d11c49afdc661611020d99770d8c78b77d3f5d4c4321bfcdc9e1cbf8d937edf9134605e6aef249cf699d64c4b7823883f02e9cc0631a58013ef7cdc0c7bc79ce4c1bc215f86fe66ae9f9f3ea723af001fcfe010d5ca94a05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:20 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-11-1595717766871",
    },
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
      "8d",
      "54",
      "db6ea330107dcf5720f6b549480a81548ab651425ba484ec0269b55aad903186754b30b54dabaacabfaf6d72219baaea1bcccc3973e6e279ef689afe84cb54bfd2f404e7cf35a26fdf1e49a25f480fe220971e6391cc3d786b5aa9e986cfce3ca361759b4f264d14566806365581ba8cd4142276b50e7b3925750528215d41d81d0cba036b6cd903db1e8d1c7bd060192ab2052e9f24c35fce2b76d5efef75f47242f202810ab31e249b83bdff32ec57943c22c859ff346d5f6462fdcf137f2f08041c9372b20e1b11354334461b800b29e3884e93eb53fa1e069b5e2ea25f3044004252975c4a6b682029339cd754910ba677611466a5f9f0db32e8a1bb7067910649516fcab8041b74a1a5808398bf5548bb09564bcdf36f56c1721a792b3f0e6777ee72da9bad16eba51f6a0f776ee06a1c240552586da25dab3f5ffc28452a5b8a18c7a5d214496f4b89f0eefae87d30c203852411aa18da85c5b6310203c718275962c3ccb9b492cc4049e224b6052e13038e4d64a609026d06a5acc1839294430b8dc6e96818a7e9c88ecdd434e331b48c78640cad7438748033cef41d7a7ba8e595628ee6985584e15d93f587c08bdc380ad6fe6c1ab9edba3350177cde283fadfaa41c2e1ad456fa594bce14551413214a8dd3f3233798ce22efbe2543ecd602e500be85cf72bb3250307444032a66c5115d92540e46f7a74b777e04ab4df9b10f6222e2f741e7b11c1128e7af6a399bff699e482cd6492b9ad934563d8c02cfbfd55bceedc734f7a0a83fe079d999650b335c1cfba5a83aff7ffde9b452e8e2a9eed4e93fd76ef04b62954f7a0294218a4a784cfa85cd95c0c6fd854b24c2f7774122c46938e4675c98c52382ec981d52d43c29dc347e4fe81897c303a100527e1e61dae37dc4d96d90b9d006957cdf8be646348ddc9e48aa5b72144c868b67e0ef66b8ed",
      "6c3bff00103da9bae0050000",
    ],
    [
      "ETag",
      "0LbDIcG45d4ESq8DfrSpGg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ffc595c16ee2301086ef790ae45e41225549d8957a805db6454d81422a55aa1072e349d6ad13676d872daa78f7da4e28b9b48a54a45c62cffc33fe9419d9f3e6743ae8856604fdeca0279afc2b40ecce12507766b304593025f592f34c02ea9a68503831d1c37e58b80f7efab078b999bc5e79e4753b2cee2e2fcb2819fd8514ebb8376d693ba6c088d4f6a3b53b95df6a194ec19c187156a4d9c69adda3ac76b99557e1723abbaa2b29275699dd07c1681c4c5025edbb9f43085678638ffc1ec2ae6ba782a167feb484180464111cff3a17fc192235b5e59538cd19f4242f4404b28298c4524e042f722c38ef6957cf757beee0c7c0777ddff386be7b08673cc28af2cc64dcafd0075f7185d992ff372546ee79d90451da65c90fb54071ad0bf51269696bb229411fbe7df78bc0e92cf42e6ab1d56eedd4321b53632aa42a7bdf8c5ef5ea447886dba4ebab42592be4043202a21534cd3798100152b683e77283f3bc217b3c9f07a722e38c084e494bf42d6d83cad4b621f54f301f9df05dd1ef7dd33bfd7b144e4e85954abff60db9e1f476b20a47b78b4fe1fabb3e3ef3e39d02b9105c4f11097676b8fd8be1c0f7fae8308b7e71336b9419454a1460dd11d633f99a2aed8b3193e0ec9d774e3101ebff070000",
    ],
    [
      "ETag",
      "80Tu1X7mXPkKExG6dxv8uQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `first_name` as __result FROM `profiles` WHERE `email` = ? LIMIT 1",
        types: ["STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "ejervois0@example.com" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-12-1595717766871",
    },
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
      "8d",
      "54",
      "5b",
      "6f",
      "a240187df75710f671aba2a86013d39a96ed92a8ed22b669361b1d860f3a2d327466e8651bfffbce80226e9ba66ff05dce39df6dde1a9aa63f9034d48f353d20f1630eecf5db3d0df423e5018162e5b938bfb821011a13f7165e70dffefb7cfbfd6e3c1a9551a4c8e6689d25d0e4346718f8f162de8a19cd33c4286d4ac066a7dbecf4877dab635983816d75ca5c0e493421e98342b81322e3c7edf64e472ba6344e006584b7305d57f6f653b79d317a0f58f0f6216d5b32f1f6e7c42709c548109a8e16f35244ce812d618d48a264ecb3c3e0f410be45d0ba15cbe8278201614cf3542869250ca66944e29c15e012e94d1aa5b9d05cfdd60cfadc993867beb68a08e36299a235ac34c4b5e59201cf13a1fdf02ea7da4a961a9104f84abbf9e9788eb62a94aeb49176a24ddca9eb6b652f0bec10b82069a1c0474102355ee9dd76cdfd6060158402410271d8862d2d63803ab6310ca2c0c2916df683c88020b003ab8fccc0c0c31ef4c200501d4128ee321fa53435bb188c9e69da51d80b873d1bbae100f72d13f5a26167100e91619a417708fa166153d5f3cc888073c233cac9b6adfa8de7faced2f716b3b3b1efd46b8f906cdb79a9feb0f28392846c525ded676d79a72863844a51c500dd99ef78e333dfbdaec990db348118e1d7f9a3daa708251cf6d988c9310b60531aaae1e8579773d7772f67e3c91ea15890ab5d249761bf2bb1fb9aea68fe6b7638ea720aa5559ffb9e3bbbd06bcecdd18730d728c93fc079da9a75b897ab4f09374ee1a56853b1fc75dcc6ff5f7f1a353e5ddee356aafe6be178b72ab7f0298f07113048f15ec11716562596ee2f3c37327c77fc2a43de7fc5cf8534cbdbc17ccf8e19949744d685e41da0dde976fb3b4099c8c4fb889e5151be7b001417ac2115bb5e940f41",
      "d9c8cd81a4bc26a74853e172f367db816e1a9bc63f620c6125c5050000",
    ],
    [
      "ETag",
      "GDGWibaAiIYexc58zwY+hA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "5d",
      "4f",
      "83",
      "30",
      "14",
      "7d",
      "e7",
      "5790faa8442119a8c91e3633757199c2dc93214b57ee90095c6ccb0c59f8efb605b6bdb43d1fb7b7f7f468d936f9c9ca843cda649ba5bf35f0e62a0519ea4304a2cea5505b85a50072a3dd2069aaddd7159f95f4c0debcc67f0f6f93e7c20b27e178dcb904fb86822adf5121857719e48950f8cb60bbe78d56d202f48d9b0d370dcd0dbd269bca68abcf68be7cb9540a4c8cb25c2f1693e962467aa9357bacd6d6bc648fdb0876c0a164707e4fc5710f4ccecde08216550e8ec09a33107d135dd8c929c7baa21cd15194e37a8e3b7a18056e10f8fe7de00ef61c19951996ba62bd22a7fe1225cd23fcd3c393ce4d7807bb2c8624c8ee229ecb809474d0c5339e0139b16d7f8aad01c5e77ed34682f8e0a8c6116086b823431a4fa8a7953a0cc96b3034a3eabf5e33d973566bfd03632d14511a020000",
    ],
    [
      "ETag",
      "+prEnavcK2y6OQ/dFm2QAQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "7fc9591d2acb94de0294a5a88014285c3221867d58125068a7ff5ea7ef0fde0fc08450ced13cb4b4076f60c347f5400eeef0aabd04c4bf549f7905731945b3dbe334e0d57ed03e52d18589e80959e7f9da1439a108a7d96e24ffdaea99703e95314c9315f9e1eac0f14215450ff1d99d02a7169254e7366b51c32c4f55baa528b8178bd0be3fca4a7165c3b00a69e88ddb787fe8244899046fc666597dead51d3525bd91f3d3bbc3174dfe5eb2f81a21733e2ad2b0e4de174276174aa4dcb7bdb9e212ec005dc79a518eeae74c94557507fe9b68de46fabc6a1433cac0ef1fbeddff4a05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:21 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-13-1595717766871",
    },
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
      "8d",
      "54",
      "5d",
      "6f",
      "9b30147dcfaf40ecb549802425a914ad514a57a4846c84b4aaa609d9c630a7802936d9a22aff7db6c90759aaaa6f70ef3de79efbe1fbd6d234fd85e4917ea3e99024af152eb75fd614ea57d2833948a40747d04ad67f4dfce23e3c67d57af34cb69bc9785c47118566202b52dc66b42a116637ab65272969558092d2b6206c9bbdb639180d6cd3b6afaf87b65963194ee319c95f24c36fce0b76d3ed1e7474124a93148382b00ea2d9d1dedd58dda2a46b8c38eb9ea7ed8a4cacfb71e2af294580139a8f57cb5a44c57019e20c9054ca38a123787b4edf2120eb24227a43100608d12ae7525a4d83681e93a42a15b9607a134661569a8fbf0d83be7466ce34d0104dab2c0f7390e12b2d021c847c5b60edde5fcc35d7bb5ff8f349e02ebc70397d70e693ce74315bcdbda5f6f4e0f88ec6014cb1c26a63ed56fd79e2472952d922cc38c995a6407a1b4a8477df47f79d111e29248950c5f03e2cb48d6b600e8d118ca18de2616f006303433884f600f4a081467ddc8f20064d06a5acc6839ce6a66d8c8c81310ae12036c33e34ae4310c328342dcb8a87513c304740dfa377c75afe9484e33bc20acac8bec9fa93ef064e18f82b6f3a099c66dd31a8527e572b3faffaac1c2e1ad454fa514b2e141525a142941aa7eb058e3f9906ee634386d8ad194e00da2e5fe576c52065f88406a59815c7e59c467230ba37993b7727b0da94ef872026227e1e759eca118172feaa968bf99fe709c4629db5a29e4d6dd59781ef7adff48673f73ecd2348ab7778367bb36c614cd253bf1455ebffaf5fad460a5d3cd5bd3afdc7caf19f2556f9a4c7c7312e718e4e493fb1b91258bb3f718944f8e12e4884380dc7fc8c0bb37844889db2a312d74f8ad48d3f100ecd91651d0805b0e4171156afdf3b445cdc06990b6738e7",
      "875ed437a26ee4ee4c52d590a360325c3c036f3fc35d6bd7fa07e5412949e0050000",
    ],
    [
      "ETag",
      "edb2gjx1ekIHYmujvYiyvA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ffc595516fda3010c7dff914c87b1c48cd06a4add487d0d10e2d852ea40fd38490892f99991367b6938a567cf7d94e2879e914694879897df7bff34fb9937dafbd7e1ffda61941d77db4a5c99f02c4fe4302eabbd904200ba6a45e729e494003130d0a27267af5f2e33e71cb6fe548be6c77b75b39befb1878373755948c7e418a75dcabb6b41d5360446afba7b5fbb5df6a194ec19c187156a4d9c69a8393acf6b9955761305fdc37959413ab2c9e7cdf9bfa33544b87c1fb108215ded823ff0f61d775af86a11ddf061083802c82d35fe782ef2052735b5e89d39cc150f24244206b8849ace444f022c782f3a1760d9dcf43677c35761dd79d4c2e5de718ce788415e599c9785aa137bee20ab3803f9b1223e753d50451d955c98fb54071a30bcd1269a934d994a037df61f08fc0f9229c8c1ab1f56edd6b64b6a6c6544855f5be1dbdeed599f00c7749d75785b24ec80964044427689a6f302102a4ec06cfe506e7794bf674b9f4cf45c619119c928ee825ed82ca54d9927ae72fbd33be2bfabd6f7ba7bf78e1ec5c58a9f46bdf921bce1f66abd07b787c17aebfebd3333fdd2b908f82eb2922c1ce0ee7627439762717e8388b6eb99935ca8c22250ab0ee08eb99fc952aed8b3193d03bf4fe0241ecbee3ff070000",
    ],
    [
      "ETag",
      "SzYGg7vKv4szbjCbs5F+RA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ltv` as __result FROM `profiles` WHERE `email` = ? LIMIT 1",
        types: ["STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "ejervois0@example.com" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-14-1595717766871",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d545b539b40187dcfaf60e8634d020642e24c46ad62a58dd112a2bd4c27d9dd7cd035c0e2ee12eb38f9ef5d2017521dc737f82ee79cefb6cf0d4dd317349deb479a8e69f490037ffa70cfb07e507840a2a8f02c2eb3afb73f83204b6ed8471e7f8f3e1d5e7c791c0caa285a660b9464313405cb3901713419b722cef20c71c69a0ab0695a4dd3eedb8ee938dd6ecf31ab5c017138a4e9a240f82365268edaed8d8e56c4581403caa86811966cedede5613be3ec1e8814ed7ddab66212edb7898f634690a42c1d4cc695885c009f4282685cc8d865cff1c93e7c8ba2a415a9e82525800861792a0b69150c616948a39c97e00ae9591995b9d4bcfdad19f4b13b74cf026d16cbe54c43429b4e39883c96da857f7da5cd548d218d41ccb4bb4bd777b5592971a60db4636de85d79815635b1049d8390342da9038463a8112aefba5dde2b93da421420482201ebb0a9637491d933fa38c40e097b1d1b870660dcc38e8d3ad8207d0bac39065447900577958f5296a2b9d5b30dd2999b5d1b1d62d4092dd275faa605d8b4013bb8eb40d7b04c7d8db0dad6f3c8a984732a3226e8ba9ffa9def05ee34f027a3b3d3c0add71e22d5b6f34afd7ee57b2549d5a4badab7daf24251c62953a2cac979a3c0f54fcf02efb62643add11022449ec60fc522852816b0cb461c2520815fb179311cfde67aec05def5e874b8432837e366132954d8afadd85d4d75b4e029db1f753585caaa8f03df1b7dd66bced5c1ab30b728ce5fc159aecd3adcab9d67541827f0b76c53b9f575dcc6ff5fbf1b353e5d1de25aaafe6de2fa3f8adcd257787c0881434a760adeb1b04562e57ec73ba3c237575f64a8c3dff20ba9ccea7688d8b1130ed525d1a494bc01ec752cabbf0154895cbe8cb01d6313f1e2f20b2e4820959b5e542f40d5c8d59ea4bc26a74c2bc2d5e68fd6035d35568d7f0b57b752be050000",
    ],
    [
      "ETag",
      "kHpKVZTTpmPo+rlXgB2FJw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-14-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "5b",
      "4f",
      "c2",
      "30",
      "147edfaf58eaa3ce30220c4c7800ef71114531124348d90e73b8edcc9e4eb390fd77db6e035eda7e97d3d3f37567d936fb8eb3905dda6c1d473f0588f22402f9a20f33a02291a4b61c330276a6dd2079a4dd743aec2cf8bbd7a13b1a2c3ea6d761971ea3d1a87651f0052957be9d420a6f62484252f8d360bbe18d96f114f48dab95300dcd0d8d26cbdc68b7fe74fc762ca4181ae169eefbe3897fc31aa932fb52ad9579c816d733d880802c80c37372815b08e483999b789a27e0101622006a9ae8c25a8e04163917888ea21cf7c2717bc39ee77a5ebf3ff0dcd69e60c0658c99ae98bfb27d7f89922733fcd3b3b3dacd440deb28da20d8e6289de37c94f4ab8bbbbde1b9db657bbe6a4e4bab45cb43c74929819e05aa8108cc181dd6e671857a5ea9e390a20043075c7dd87d2c1bceaaac7f2bf27c471b020000",
    ],
    [
      "ETag",
      "s+90YaV70sGs8YXODd2sKg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000002ff1dcf4b7282300000d0bb646d1d0aa590ee04419cf0152cd84d26a4e13b80863f9ddebd4edf0dde0f2094b2bec74357b3167c809588704ff7a853b5d7806e8a108d8f46ad654e9ddb41b2335d5fb2d310444495bacd994bf616dfc6f37cb46d6383440963b7d2111c92958caba4a5d4784cc37b6f5d096eaa16ca9bd5aae41c4d92d0bc08873ab41d6ccc06f20d6528fa42cf3dff73b2b91bf0496e4d559f8a3931650187b9e555dcb944ed32797eea8a279c66c832afdb8c8edf4d8d65f205e7ad8a230b89498dccdc12c00eb0e55e72d6e3f23993640877e0bf8987f5ce9e578d11ce38f8fd03984072d505010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:23 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-15-1595717766871",
    },
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
      "000002ff8d546d4fa34010fede5f41b8af5a4a5f849a3467ad78d6b4f44aa9c65c2e64d90edc2ab0b8bb781ad3ff7ebbd0177a35c6840feccc3ccf3c33b33bef0d4dd39f48b6d2cf353d24f17301eceddb230df513e5018162e501ff7e7633f7d3d7b9f170796bbfde3232ba9c0f06551429d11ca57902a79c160c033f5f2e9a31a3458e18a5a792f0d4ecc9afdfb34ccb3a3bb32db3c27248a209c99e14c31f21727e6e185b1dcd98d238019413dec434ddd98d97b69133fa085870e330ad213371e3f3c4df138a9120341b2c17958882030b2045245132f6e855787148df24286dc632fa85604018d322134a5a4583691691b86025b9647a9746692e35ef8e3583be7026cec8d7304d8a340b3294c289b6420205e22d07edda9b4db5b17b3df3a6437f3c7383c5e8c6990e9ba3d964397517dafd8de3399a40610225561b6817e5c995875251996d055c90acd4e42b6f4d89f46efa38fe60843b0a45225571d8840556eb0c9976ab1f46a18523bbd30ba31684a11d5a3dd4095bb8df85ee2a0454672895557894d1ccecdbad0e6af783a867b6836eaf6b07c8b4cca06d75221bdafd566f65e91bf47a57cb5f46045c119e534e364dd6efbdb1ef04beb7744743dfa9d71da122115795f2c3aa0fca11b24175a59fb5e44851ce0895a2ca718e5ddff186237f7c579321efd6046284df16cfea764528e1b04723266725804de94a0d46778753e76a0f2e6fcacf6d109711bf763af7e5c84035ffb296a3f91fe6f1e5c53a6845359bcaaa2f7c6fecfed06bcef5c7347728293ee079d998550b2392ecfb555235fefffbdda8a5d0e553dda8d3e74bc77b50d8d2a73c1e44c020c3fba45fb8b90a58b9bfb08964f8762f28845c0dbbfc5c48b37c4498efb36306d5932255e3b78476b7d5e96e09259089e308b37bb68d38da0d2a17a490896d2faa1d5135727d20a9a8c929612a5c3e037733c37563ddf807a32506d0e0050000",
    ],
    [
      "ETag",
      "eTWOHQTmxQ/YBJ8xJriCBQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-15-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "95",
      "c1",
      "6e",
      "e2",
      "30",
      "10",
      "86",
      "ef",
      "79",
      "0ae4bd82b6a980742bf5005bda8d14a085f4505508b9f1243575e2d476a8d88a77afed84924b5791162952147be69ff1a78c95990fa7d341af3423e8b2839e69f25680d8fd4840dd9bcd0264c194d44bce3309a86ba241e1c444ff9c2fdfff0a9ebf9dbf4eb93fdedc3e8a97fefdd5551925a31748b18efbd096b6630a8c486d3f59bb53f9ad96e114cc891167459aadadd93dca6a975b79192efcd96d5d4939b1caec210846e360822a69dffd1e42b0c26b7be4ff21ecba722a18daf0e705c420208be0f8d5b9e01b88946fcb2b719a33e8495e880864053189a59c085ee45870ded3ae9e3bd0cfaf81e77ade7078e1b98770c623ac28cf4cc6c3127df11557982df8bb293172cfcb4b10a55d96fc500b14d76ea15e222d6d4d3625e8cbb7effe23d09f85c37e2db6daad9c5a66636a4c8554e5dd37a3577775223cc36dd2f5af42592be4043202a21534cdd798100152b683e7728df3bc217b3c9f07a722e38c084e494bf42d6d83cad4b621f526988f4ed85774bf6ffa4f5f8fc2c9a9b052e96edf901bfad3c9321c4defbe85ebf7ead8e6c73b05f24e703d4524d8d9e19ef52f06def00c1d66d16f6e668d32a3488902ac3bc27a26ffa14afb62cc24387be71316216544ff070000",
    ],
    [
      "ETag",
      "/OSwzropq2kMoIBjGYrh4Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ios_app` as __result FROM `profiles` WHERE `email` = ? LIMIT 1",
        types: ["STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "ejervois0@example.com" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-16-1595717766871",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d545b4fa340187defaf20ecab2dd01bd4a45163d95d92b62aa59acd66d30ec3078e520667065d63fadf77065a4a57637c83ef72cef96ef3d6d234fd9164917eaae921499e0a60afdf1e68a89f280f0894288f11f85682c09cdfce6efcb477cf2713377b198fab28526673b4c95368735a300cfc74b9e8248c16396294b62560db1ab6adc168605bb63d1c3ab655e57248e329c91e15c2bd10393f358cbd8e4e42699202ca09ef60baa9edc673d7c8197d002cb8714c6b48266e7c4e7c96528c04a1d978b9a844141cd80a3688a44ac6213b0acf8fe13b046d3a898c7e261810c6b4c8849256c1609ac5242958092e91dea4519a4bcdf56fc3a02fdca97b19686b42f90ae5f95a435c5bad18f02215da77ff6aa6ad659d314981afb5bb9faeef6aeb52e65a1b6b67dad49b79815635b2048e800b9295f4010a5368904aefae65de07d3aa2114081288c32e6c659b436439e6288c431bc74e6f10c62684a113da03d40b4d3cea433f0a01351184e2aef2514633c781512fea9a23cbb4b1130d4676d80573887bfd6ed8077b34740691194b881dc2b6aee785110113c273cac9aea7fa9def05ee2af097f3cb8bc06dd61e23d9b649a5feb8f2a392846c5253ed676d79a72867844a51e5f4bc79e0fa17978177db902157690a09c2af8b27b54c314a391cb211431b10c0663452c3d1afaf165ee05dcd2fa60784723baef7915c86fdaec51e6a6aa205aff9f1a8ab2954567d11f8defc87de706e4f3e84b94569f101cef3ceacc383dc7b4ab8790e7fcb36959bdfc46dfdfff5a7d5e0d3e531eea4ea374bd7ffa5724b9ff2f81003830c1f147c61615562e5fec25b23c3f797af32e4f1d7fc5c48b3bc1dcc0fec9841754964534ade033a7dc7a901652213ef2206e6d0dc47bcbb7ec5051bc8c4be17d52b5035727b24a968c829d354b8dcfcf96ea0dbd6b6f50fa023062bc2050000",
    ],
    [
      "ETag",
      "/TR1gae0NVMQRl3hsDDEnw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-16-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff4d51c96e833010bdf315c8bd16291c80a6520e248ad44a282954395528323050c232d4364da3887faf6d20c905fb2d33e3795c0dd32455d966e4d5244959fcf4c02e4f0588505d22e07d2db83c3a6c399067e506410be55e065055e73c2c968bc6c5f0cf09433ff157abd1c5d36f68a8f45d2592382fa1ceb8c45f1a9b13afb59636a03a1e8f4c0fd41d264d5c3aadadf7fb60ebef1ea506332ded0e41e0af832d99a4419fb1fc0efa29274c22c881419bc2fd411dc313a4e25d6fce69d3d56071ec590a7c1aa20a47b960d87794215a92b26cd7b29da5e3d99ee7ba2f9e3ddb6b4ca928b15515874f729b2f50d03ac2b3da9e8c6ec2463886314741f2877c1e1392d2af2a16ac07726387e9161b338aeff3d61701fc83a15c87835e6241e63436a8b6152a0cd551d329953fecad1413670cc63f741194121b020000",
    ],
    [
      "ETag",
      "9LekkwfQg90m6oQx5QQAbA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "8b08000000000002ff1dcfdd7643300000e077c975db8388d5eec8d6b239a88ce12687346bd9f113c268cfde7d3dfbdee0bb8382313e8e5476dfbc05cf602d3473c776efddde564f2ccc3d6ca58d4e4b9a10df382b7e4a9ee6998c0bc1aa4b6f7495b1325196c2e68b86c72a88445dd6f171fab8ccb7ce8d1d9c6b15b15c212aa366280b5b6468278cf0a17ed1cdeef5e7cd98a43ac62994bd1d4d44292992ba4697a66a5b4fcc852c79c63f476e5c0fc8737018c40ebc64b84f264f4cee791f9d04f73362c3edb6f1a200e649ea5f133f82ab0536802f7d35f091568f1944a6b901ff4d2ad79e3fae362f063e80df3f77e4a13205010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:25 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-17-1595717766871",
    },
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
      "8d",
      "54",
      "db",
      "6e",
      "9b40107df75720fa1a5f630c44b21acb218d2b1b37801345558596f58037c12c6197a451e47fefeee20baea3286f3033e7cc99cbce7b43d3f427922df50b4d8f48f25c42f1f6ed9146fa99f4004789f414a9b57abc7d58bdded3d8c3d3276aff5cfd7d1d0eab28a2d00cadf3149a8c96050676b1f05b4941cb1c1594360561b36b36bb866d985dd31c0c2cb35b6119a4f194644f9261c579ce2edaed9d8e5642699202ca096b61badedbdb2fbd765ed047c09cb58fd3b64526d6fe3cf1f79462c409cd860bbf12513228425823924a1907f432ba3ca66f11b46e2522fa85604018d332e3525a4583691693a42c14b9607a174661569af7bf3583ee3b53671c6898a6e53a0b33b486336d89380af95b0edab5379f6913f77aeecd46c164ee86fef8c6998d5ae3f97431737dedfec6f11c8da3280585d586daa5fa73c58f52a4b22d817192294d81f4d69408efb68f930f46b8a790244215836d58687606a86b75ec288e4c1c5be7461477208aacc834d079d4c1761ffacb08509d4129abf028a319c49d8119db763800db0afbd0eb86a8bf8410c5710f7a800d640ff42d7ab3afe5b5201cae08cb2923db26ebf7de2470c2c05bb8e351e0d4eb8e5199f2ab4af971d547e570d1a0bad2cf5a72a2282f0815a2d438276ee078a37130b9abc910bb358504e137ff596e578c520607342ac4ac381433ba9483d1ddd1ccb93a80d5a6fcda053111f17baff3508e0894f357b59cccff384f2016eba815d56c2aabee07dec4fda1d79c9b8f69ee505a7ec0f3b235cb16c6243df44b5135fefffad3a8a5d0c553ddaad36f178ef720b1ca273d1ec45040860f49bfb0b91258b9bf708944f8ee2e4884380dfbfc8c0bb37844981db2e302aa2745aac6ef082dc3e81a3b42012cf869c4c0eaec224e",
      "6e83cc056bc8f8ae17d58da81ab9399254d6e428980c17cfc0ddce70d3d834fe011ae4baa8e0050000",
    ],
    [
      "ETag",
      "rl8hjQYhwWofRcLko9Jhxw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-17-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "95",
      "516f9b3010c7dff91491f79a48656a209bd407b2665b364a9a846a95a62872f0c1dc19cc6c932aaaf2dd671bd2f0d209699178c1befbdff927ee64df8b3318a0dfb420e8e300ed68f6a702717897815a9acd0a64c594d44bc90b096868a241e1cc44df3e9624508fd1c4dbfd487141bf27cb6fd1f2e6a68e92c92fc8b18e7bd196b6530a8c486dffb4f6a0f15badc039981313ceaabcd85a737896d5a1b4f23a5ecda32f6d25e7c42ad1431806d370861ae9387c1b42b0c25b7be4ff21ecba711a187ae2bb15a420a048e0fcd7a5e04f90a8b92dafc479c96024792512900dc424d67226785562c1f948bb46ae3f72c71fc6beebfb9e37f1dd5338e30956941726e3618d5ef98a2bcc56fcd99418b9efeb2688daae4b7eaa054a5b5d6897484b7b934d097af51d87ff089c47b177dd8a6d761ba795d9999a522155ddfb6ef4a65717c233dc275d5f15ca7a2167501010bda069b9c5840890b21f3c975b5c961dd9d3c522bc14191744704a7aa2ef691f54a6f61da99fc34570c17745bff75deff46d10cf2e85954abff61db9f1fc6eb68e83bbfb37e1fabb393ff3d38302792fb89e2212ecec70afae2763dfbb42a759f4899b59a3cc2852a202eb4eb09ec95fa9d2be143309ced1f90bcef050ddff070000",
    ],
    [
      "ETag",
      "DXpdAtXN86bWfaniKcQJNQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `date` as __result FROM `profiles` WHERE `email` = ? LIMIT 1",
        types: ["STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "ejervois0@example.com" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-18-1595717766871",
    },
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
      "8d",
      "54",
      "5b",
      "6f",
      "9b30187dcfaf40ecb54d42122ea914b555ca36a4246d0969354d5362cc07750b98daa65b56e5bfcf865cc85a557d83ef72cef96e7e6d699afe44f2483fd3f49024cf25b0f597471aea27ca030225ca331c98c3e962fd5466d6fdf8efcdc3d73bc3c5b7a3511d45aa6c8eb22285534e4b86819f2de6ed84d1b2408cd25309786a38a78639346dc3b62dcbb18d3a97431a4f48fea4101e8428f859a7b3d3d14e284d524005e16d4cb3bdbdf3d2eb148c3e0216bc734cdb914cbcf331f1794a311284e6a3c5bc165172604bc81049958c4376145e1cc3b709cada898c7e211810c6b4cc859256c3609ac7242959052e915ea5519a2bcdfbdf86419fbb13771c68ab08095869886bcb25035ea642fbea5f4fb5952c322629f09576ffddf55d6d55695c6923ed5c9b78532fd0ea2e56a8117041f28a3b40610a0d46e9ddf6cb7b67547b08058204e2b00d5bda5d0b194e7718c6a18d63a76f867117c2d0096d13f5c32e1e0e601085809a084271d7f928a779cf180ea27818db761f0dac3e8a9dc872c21887a8df8b627bd033a40d4c53df226cf6f5fc6644c015e105e564db50fddef7027719f88bd9f832709bb5c748b6edaa567f5cf951494236a9a9f6a3b6bc51543042a5a86a74de2c70fdcb71e0dd3564c83d9a4082f07afeac36294629874336622803016c4a23351cfde67aee05def5ec727240a856e36617c965d8cfbdd8434d4db4605d1c8fba9e426dd5e781efcdbee90de7e6e45d983b9496efe0bc6ccd3a3ccaa5a784772fe04fd5a66aed9bb8adffbf7eb51a7cbabcc4ad54fd76e1fa3f546ee5531e1f626090e383824f2cac4aacdd9f786864f8eeec5586bcfc3d3f17d22c6f07f3033b66505f12c92ac93b40c71af4ac1da04c64e26d8469f777116f4e5f714106b9d8f5",
      "a27e02ea466e8e24950d39559a0a979b3fdb0e74d3dab4fe01a0afe445bf050000",
    ],
    [
      "ETag",
      "9459MUykum6WCzPhFV1EcQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-18-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "5d",
      "6f",
      "82",
      "30147de75790ee75442051dc121fd499b9e8960de78b0b31152e0c042e6bcb1663f8ef6b0ba82f6dcfc7eded3d3d1ba6498e69199147931cd2e4a70676ba4b407ca8830fbcce05975b85250772afdc2068a2dc3bfebadaec123b1bac96b87546cbc1fcf83c9d4c5a170fbfa1a0d2779648e238853ce2127f696c76bcd64a5a80ba71bf67baa1bea1d3c4a9d2dad3f47371cb171869fe6dbb5e4f67eb05e9a446ef815c1bfd8e0c0f3ec4c0a00ce1fa9a8a6106a178d163735a5439581c6b1602ef9aa8c2564e18d615658896a42c676c39c387a1e778de6834f69cde9e6348458aa5aad86ec8a5bf4041731fffd4e8a47513d6c236893e0712df84731b8f947e55b16bbbb665bb96ed908bd674a7c0e85170ed3a3b09e0ef0ce5501cf42836e93399a39a59a84804ab41d321957fb64c45c7198df10f997554931e020000",
    ],
    [
      "ETag",
      "ZsMKSZg0j/KHoU16H/CkGA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0002ff1dcf4b7282300000d0bb646d1d3e9586eec08245d402c3a7b8c98424608a22ff004eef5ea7ef06ef013021aceb507f2f5905dec18c157d4dd6ee1d9ab2cfb65c2f0c5ec2d1a089249c5055a58b87ab7d6c6ce4f8f8168cdd219bc645d84aac8b2f1a852e11e3e05baf3dfdcc5c9bee1c1c3a465463741a9bd26a345c06c331c98ac0bff133adf7226569186a2124b33935d6e07d5c8b384a7a3d81344e6f8a6b8b85c9485226eb74965dcd85e45bf10eb5b1bb0e3497bc9fe832f0212f5eb696b02b8105cc6384a6452210ac009b6adeb20ef1e74cdde8fa0afc37513fd7ec7935196e590b7eff0036a27f0105010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:27 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-19-1595717766871",
    },
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
      "000002ff8d545b6f9b30147ecfaf40ecb5492017482a456b94d03552423620eda66942b631cc2d608a4daaaaca7f9f6d72214b55f50dce39df77be73f1796b699afe44f248bfd6744892e70a97af5f1e29d4afa4077390480fd9e6245d5b739a19d3c0ba7fcecc29fef93299d45144a119c88a14b719ad4a84d9f5c6ef2425ad0a5052da16846d73dc3687e3a16ddab6658d6cb3c6329cc64b923f4986bf9c17ecbadb3de8e8249426290605611d44b3a3bdbbed758b923e62c459f73c6d576462dd8f137f4d29029cd07cb2f16b1115c3658833405229e3848ee0cd397d8780ac9388e82d41182044ab9c4b69350da2794c92aa54e482e94d188559693efe360cbaef2c9d59a0219a56591ee620c3575a043808f96b81b55b6fbdd216eeedda5b4d83c5da0dfdd99db39a7666ebe566e5fadac39de3391a0730c50aab4db41bf5e78a1fa548658b30e324579a02e96d2811de7d1f17ef8cf0482149842a86f761a16d58c01c196318431bc5a3fe10c606867004ed21e843038d077810410c9a0c4a598d0739cda371640d00e88506ec0fc241dceb87d01c9b21366d6401c31858b0a7efd1bb632d2f25e1784e584119d937597ff016811306dec69d4d03a759770caa94cf6be5e7559f95c345839a4a3f6ac985a2a224548852e35cb881e34d67c1e2be2143ecd6122700bdfacf72bb6290327c428352cc8ae37245233918dd9dae9cf909ac36e5fb21888988df479da77244a09cbfaae562fee77902b15867ada867535b753ff016ee37bde1dcbd4f730fd2ea1d9eedde2c5b1893f4d42f45d5faffeb4fab9142174f75af4effb171bc5f12ab7cd2e3e118973847a7a49fd85c09acdd9fb84422fc701724429c86637ec685593c22c44ed95189eb2745eac61f0805dda87f2014c0925f46f48dc121e2e236c85c38c3393ff4a2be117523776792aa861c0593e1e219b8fb19ee5abbd63f1155a4b6e0050000",
    ],
    [
      "ETag",
      "ivnilO6Dom0AT6Vqm1AeXw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-19-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "95",
      "df",
      "6f",
      "9b",
      "3010c7dff92b22ef3591cad48476521fc89a7599f2a32374993445918b0fea0e38669b6c5195ff7db6210d2f9d90168917ecbbef9d3fe24ef6bd38bd1ef9c973463ef4c8234f7e9520f6ef12505fcd260059a64aeaa5c05c02e99b68503431d1ebef885fbead6eff04eb38586272b77ec2b97f735345c9e80932aae35eb4a5ed9843caa4b67f58bb57fbad96d30ccc8911a665966fadd93fc96a5f58791506d3c55d53c9905965f1309bf9e3d984d4d2a1ff36845145b7f6c8ff43d875e3d430f28c8f01c420208fe0f4d785c06788d4d49657d2ac486120b11411c81a62122b3911581654200eb46be05e0fdce1f5d0733d6f34baf2dc63788a11551c7393f1b022af7c858aa601fe362526eefbaa09a2b2ab921f6b41e246179a25d2d2ce6473465e7d87fe3f02a78b7074d988ad771ba791d99a1a732155d5fb76f4ba5767c2a7b44bbabe2a3ced849c40ce407482e6c596322640ca6ef028b7b4285ab2c7cbe5ec5c649a33819c7544dff12ea8a9dab5a47e9a2dfd33be2bfabd6f7ba76ffd70722eac54fab56fc90da7f3c92af4e7f76fc2f577737ae6c77b05f25ea09e2212ecec702f2eaf86dee8821c67d14734b3469951a44409d61d513d933f73a57d314d253807e72fe41abc92ff070000",
    ],
    [
      "ETag",
      "WXooJVSDxRWfROogGWhoMA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `stamp` as __result FROM `profiles` WHERE `email` = ? LIMIT 1",
        types: ["STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "ejervois0@example.com" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-20-1595717766871",
    },
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
      "02ff8d545b4fa340187defaf20eca3b6b4a5146ad2a8517697a456a55477b3d9b4c3f4831d050667062f6bfadf7706684b57637c63becb39e7bbf1dad234fd9e642bfd48d343123f14c05ebedcd1503f541e1028561e3878be0ed1edf7bf799f383f0ee2733082d9d3785c4591329ba3344fa0cd69c130f0a3f9ac13335ae48851da9680ed7eb7ddb34696ddb3ede1d0b17b552e87249a90ec5e21fc1122e74786b1d1d189298d134039e11d4cd3addd78ec1b39a377800537f6690dc9c48d8f898f138a9120341bcf67958882035b408a48a264ecb257e1c93e7c87a0b413cbe8478201614c8b4c2869150ca65944e28295e012e9551aa5b9d4bc7d360cfacc9db86781b6e442b22c35c4b5c582012f12a17df52f2fb4a5ac322209f0a576fbddf55d6d598a5c6a63ed589b78175ea0556d2c6157c005c94af20085093428a5b76e98f7ceacb6100a0409c4a10e5bd8dd21ea39dd511885368e1cd30aa32e84a113da1632c32e1e0d60b00a01351184e2aef25146b381dd1f99432401faa6e5ac4233eaf5f16024df033047960956776522dbd46b84f5b69e2746049c139e534eea8eeab7be17b88bc09f4fcf4e03b7597b8464dbce2bf5fb95ef952464939a6a3f6acb1b453923548a2a67e74d03d73f3d0bbc9b860cb9481388117e993da8558a50c261978d184a4100bba02b351cfdea72e605dee5f474b2432877e36a13c965d8afadd85d4d4db4e025df1f753585caaacf02df9b7ed31bcef5e1bb30372829dec179accd3adcc9ada784774fe0b96c53b9f74ddcd6ff5fbf5b0d3e5d9e622d55bf9ebbfe4f955bfa94c78708186478a7e0130bab122bf727fe34327c73f72a439efe965f9e9f20f27630dfb16306d52591b494bc01746cb9b31b4099c8c49b08a7676e23dedcbee2821432b1e945f50fa81ab9de935434e494692a5c6efeb41ee8bab56efd0305174546c0050000",
    ],
    [
      "ETag",
      "e+xQbaWHzp2i8X+gDe/TSw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-20-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "d1",
      "4e",
      "c2",
      "30147ddf572cf5d599cd38e64c7800258801c501be18424ab9cce1b63bdb4eb390fdbb6db7012f6dcf3de7f6f69c1e2ddb26df49be230f36d926f14f09bcba8a41beeb4304a24ca5505b81b90072add52069acd519323aafb6b01ccb8fd87d798a8a317b8bfbfd4625d8176454e98e0a29bc4f20dd09853f0db6dbbae1729a81be71b3e166a0b9a1e56455186e39998d16cbc16c7e4966b833e4eb6a3a1d0ca723d252b5d9d76aadcd630eb88d600f1c7206e727151c0fc0e4c47817342b527004969c816887e8c6868e399605e5888e2a39b7aee3f9a11f7841d0ebdd075e274f552432c15c77ac16e4345fa2a469847fda3f69d48437b089a30b83ec2f12bacc4851bfa6f9c6bf777d3ff4c2bb51484e74dd9ed65687d6e7c1c34a82987354be0418372ee96279446d5bea54242fc19419557ff79cc8b666d5d63f9cba905326020000",
    ],
    [
      "ETag",
      "mocaPybeTGtVg0JDRpGcOg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00000002ff1dcfdb7243400000d07fd9e724532245dfdcb2484964299317b3652dea16645d32fdf7667afee03c014e12320cf1d8fe90067c8005f3f22ed99d5a49e5bcac4237ea36a2696c237abe7a1273e651870a352ddf346110a483a55647d41bca01312fff0aa1ad5eb3f1c227f285367344cb5558519af89d275af5d676857b11623d178279db36fdd1b8e0d99e6e953e590f2983a29c9fd7b5a961cab1e093e022fc16745d911ca40925af308418f335de5e7acd70217ef04d64bf3b5caa05e3697fbb97d31ba5030ba77a1f22096c0099bba227435cbc66fb832c6fc07f331e978ebcae2ac13de9c1ef1f1f75705f05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:28 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-21-1595717766871",
    },
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
      "0002ff8d54db6e9b40107df75720fad8d806dfc091acc671488364e306e3445555a1653d904d308bd9c55114f9dfbb0bbe401d457983993967ce5c76de1b8aa2be9064a55e2a6a40a24d0ed9dbb7671aa817d2031c45d233bdde3cc273be79b20989d2ebedf8bbe9b0fbd1a88c22059aa1751a4393d13cc3c02e978b5694d13c4519a54d41d8ece84dbd3fec1bba610c06a6a1975806713825c98b6478e23c6597edf641472ba2348a01a584b5305d1feded6da79d66f4193067ed7adab6c8c4da9f27fe11538c38a1c968b92845e40c321fd688c452c609bd0aaeeaf42d82d6ad48446f09068431cd132ea5953498262189f2ac20174cefc228cc85e6e36fc5a02eaca935f1144ce37c9df8095ac385b2421cf9fc2d05e5d69dcf14dbb99dbbb3b167cf1d7f31b9b366e3d6643e5dce9c85f27867b996c2511043815546ca55f1e7889f4251916d058c93a4d0e4496f4589f0eefb687f30c223852411aa18ecc37c431b20ddd4864118183834bbfd20d42008ccc0e8a36ea0e1610f7aab005095a15056e2514293eecad021848edf31b4aedfeb75341f750ce40ff470181a4353434857f7e8ddb196d78c70b8212ca58cec9bac3ebab667f99ebb742663cfaad61da23ce637a5f27ad5b572b8685055e9672d39539466840a51c5386dc7b3dcf1c4b31f2a32c46e4d2142f86db191db15a298c1098d32312b0ed98caee46054673cb36e4ee062537e1d829888f873d4792a4704caf917b59ccdbf9ec7138b556b45399bd2aa2e3cd7767eaa15e7ee639a0714e71ff06cf7663515dd7a121d6635aec6ff5f7f1b951caa78ab7b79eafdd2727f4b6ce1931e572c4b06093e65fdc2ea4a60e9fec22912e187c32011e2361cf3332ecce2156176ca8e3328df14293b7f2034cd81d939100a60c6cf23cc5eef1071761c642e5843c20fbd288f44d9c85d4d525e9153c064b87807ce7e88bbc6aef10f45fea671e1050000",
    ],
    [
      "ETag",
      "LBqWejuqhIiigpBvA+8NsQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-21-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffc554d14e8330147de72b96faba25621c4c933d4cdd94c8e604168d66593ab83026506c8b6659f6efb685395e34242ef185f6de736e4fee6d0f5badd5426f7116a0cb165ac6d17b01747312017f941b0758917026969c640c505bb281e348b29f28f3ec7bcf595afe741cbba3e8e5192651bf5fb298bf82140bde5644220e63480226e25715b7aabcc2329c823cd1274991660b15b60f30dfe40a763dc79adcd69194040a99cc6c7b70650f5105edda3f8b0498e3853af26f126a9d6b95185a93a5032150c87c38749d53b2069f5b6abc0ca779021d460aea03ab4464610947941439a6847444aa73a677f4ee45d7d44dd3307aa6bea727c4c73c2699ac98b9e85b9f138e13877cca1123a3bc035a86e5c4f7a34061ed12ea1312d0872c8e03f49ddbb57f215a13cf38af71abdd5cab55365615930ae30416ffa42eae6485c50b6fa65d3d932389e39414196f283db21f06476c5cb8a169d337036f782c59c685171aea7ad678e87a83f1f44771f19d1f4c70b5e1c0a694088f3150ced24fcf7b5dd338457ba75e13e9442e8dca69012aed63f1c7ba8bb9c8853861a0edb42f5f456dfa1d050000",
    ],
    [
      "ETag",
      "WrsTLKTRbIcPMiSFgZXeNg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COALESCE(AVG(`amount`), 0) as __result FROM `purchases` WHERE `profile_id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-22-1595717766871",
    },
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
      "ff8d546d4fe24010feceaf687a5f341128505a6a623c82f5ae39042d4573b95c6077bbadab6db7ee6e316af8efb7dbf2524e63fc0633f3bccccc4edf1a9aa63f922cd44f351d92f8a9c0ece5db0385fa89ca6001629579b67f01b3fb7a8956ec35f3e1bd091ee3f4e6ecacaa22259a83344f7093d38221cc4fe7b356cc6891034669531236bbdd66a7eff4ed8e6d5bd6c0ee54588e93684cb247c5702f44ce4fdbedad8f564c699c609013de4234ddc5dbab6e3b67f40123c1db87b26da9c4db9f0b9f271401416876369f55260a8ed902a78024cac61e1dc2ef87f42d02d2562cab57046180102d32a1ac5534886611890b56924ba6371994e1d2f3ee6f2da0cfdcb13b0ab4d17438766723f76878fbe3680952c5ba3c3ed18c630d706db160981789d02efde995b6cca5917bc0315f6a773f5ddf9511462392e0050997da9976ae8dbd2b2fd0aaf9967a21e68264a5ab00c004d7bcc8ec6692de074bdc51281220a4eaa66c611b16e80c0c0746d046d1a0d7879181211c40bb0f7ad0408e89cd10625067104abbc2838c6616ec0fba4e0491193911368db0074338301dd3c683109afdc8b29065819ebe6158effa796644e00bc273cac966d4fa9def05ee22f0e793d13070ebbd47400eefa2727fd8f9414b420ea9eef6b3b1bc73943342a5a972a9de2470fde128f06e6b36e40b1be318a097d9937a63114838dea301032916985dd1502d47bf9ecebcc09b4e86e33d43f968aeb7955c96fdd999ddf754670b5ef2c355575ba8a2caa665eab5dcfae443965b90141fd0ac3661bd73c0d1f8ffd7df468d5b97e7b871a5dfcc5dffb7c2963995f1718419ced05eed0b6f5301abf417be36b27c7bfb0a21cf7fa7cf850ccb33417caf8e18ae8e86a455ab1b42a7e318e6965002997857d135fabd6dc5bbfb575a38c599d8cea2fa0e54835c1f582a6a764a982a978f7ce24d7e94e61bebc63f03a35c77c4050000",
    ],
    [
      "ETag",
      "w7Ka42zFcvrznRbh4akgmQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-22-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d515b6f8230147ee75790ee752c9345714b7cd065668b6417a64f8b31150f88030eb6071d31fcf7b505d497b6dfe5f4f47c3d59b6cd7e937cc39e6cb64ee27d09a2ba8981bef4210059a624d556602e81dd6a37108fb57b0b0777b6cfe7c7f42fc059358ca744fbe368d4b864b8858c2bdf492185a304d28d54f8c760bbe58d96f30cf48dab95300dcd0dad465561b4a9ff319e5f0b196e8cf0bef0fdf1c47f61ad549b7da9d6da3c6487eb002210908770794e21700721bd99b925cf8a141c89a50841b64d746123c702cb820b4447518eeb3abdfe63dfeb79de6030f47a9d3dc5905382b9ae587cb3737f42e26980473d3b6bdc4c34b089a20b824557e95ce7a3a48329bef31ed899addbd3d2ead0f2d26f5211c84f816a1c0966887bd6a5f18c7a5ad2619028c1d02157dff59a50cb59b5f50f3ee31e3d19020000",
    ],
    [
      "ETag",
      "hev2KqnTwlxRoKy8gFttqw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0002ff1dcfe17243300000e077c9efb6a71a26fbc7192d96630d1d7f726ad10b879258466fefbedebe37f81ea0ac2a26049543cb7af00a965247bb6a170e96b34fea34faaaccf72cd5a8e249bea80f4c0a0293cc46326c3d2dbe0c5b1c696b577f5362fba83d4f838a7da89421a25c42752a5224f3b0b4ae1e5f62e17bd67e0efbb76c869e1be000414f33522b0f1ab26abdc0d06ec23419af93ee546bf77920849d8352ce590c5d731b5ce2b0586387dbbd1a8f43ad07b7868fe3a96c307d59dd3d36bb55c7debcdc4c7e345bb001ece7ce2726287fce0e06421bf0dfa472b9b3e7d561e5c426f0fb07ccaff3f805010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:32 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-23-1595717766871",
    },
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
      "000002ff8d546d6fa24010feeeaf20dcd7fa2e824dccd5537af5a278056cd35c2e645907ba2db2945d6c4ce37fbf5df0054ed3f41bccccf3cc332f3b1f3545515f49bc52af15d527e15b06e9f6db0bf5d52be9018e42e9d918b6a1dd6f4dadf3cb705e93a7d504ff78bf1f0e8b2892a3195a2711d419cd520cec7ae934c29466094a29ad0bc27aa75b6f6b034d6feb7abf6fe8ed02cb200a66247e950ccf9c27ecbad93ce86884948611a084b006a6eba3bdb9e9349394be00e6ac594ddb149958f3f3c4df238a1127341e2e9d4244c620f5608d4824659cd02bffa64adf2068dd0845f486604018d32ce6525a4183691c90304b7372c1f4218cc29c6b3efe960caa63ceccb1ab601a65ebd88bd11aae9415e2c8e3db04945b7b3157a6d6edc29e8fdce9c2f29cf19d391f35c68bd9726e39cae39d699b0a477e043956192a37f99f257e724579b615304ee25c932bbd2525c2bbefe3f4c2088f149244a862b00ff3f4561fb58dd6c00f7c1d074657f38316f8bee1eb1aeafa2d3ce8416fe5032a33e4ca0a3c8a69ac07b817b402ddebe0b6eef5b440f306a8ab79bd2ed20d410a2830d43d7a77ace53d251c26842594917d93d5477bea9a9e6b2fadf1c835cb7507288bf8a4505eadba520e170d2a2bfdac25678a929450212a1fe7d4724d7b3476a70f251962b7661022bc75dee4760528627042a354cc8a433aa72b3918d51acdcdc9099c6fcaef431013117f8e3a4fe5884039ffbc96b3f957f3b862b12aad2866535855c7b5a7d64fb5e4dc5da6794051768167b337ab89e8d6b3e830ab70d5fefffa5b2be550c55bddcb53ef97a6fd24b1b94f7a6c082085189fb27e617525b0707fe11489f0c3619008711b8ef9191766f18a303b65c729146f8a149d3f100e3a7dbd7f2014c0949f4718da31e2ec38c85cb086981f7a511c89a291bb8aa4ac242787c970f10eacfd1077b55ded1f2dbe3587e1050000",
    ],
    [
      "ETag",
      "v8R85QyE52J8SkpYdDcBwQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-23-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "51",
      "4f",
      "c2",
      "30",
      "10",
      "7e",
      "df",
      "af20f5151287b2a1090fa8a8241310a6313184d4ed06c36d37db0e44c37fb7ed86ec45b344125fd6de7ddff5cb5dfbedd3a8d5c86b98f8e4bc465ec2f95b066c73340771af3663e05924b85c524c3890ba6283a073c546fb72b1fcd838ef4fe9e37ab5cee28fa1dfbcef747216f7161053c9fb94918c8310229fcbf859c7b522afb184c6a04ef430cae264a6c3fa1e169b54c31377dc1fdc9491187d8d0c1e1ca77be1f448016deb3f8bf854d0993ef26f127a9d1a851859e2cb1802609078b0ef3a65b8044ff4f578398dd3081a1c33e6012f4454610ecf19662965880d996a344f1a66ebac659bb66d596ddbdcd123f4a8083151150f13f2ad2f50d0688c6b356262e577c0f2309ff86e1424285d427942125aa9e2d027dfb96dfd17627fe05aa7256eb19b1aa5cacaaa72524118c1ec9fd4e5952ca87ce1d5b48b677220711a6396888ad2d7ceb07bc0c6a51baa367dd5757b8792e5427aa1a2aedbbfeb4ddceedde84771f99dee4d70b111c0470ca5c738686799c7a7ed966d1d939d532f51395128a30a96814e7b54feb16e432173018d38185be30be52fa22c1d050000",
    ],
    [
      "ETag",
      "o7ChjzyLxXpVwvwumzOd2Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-24-1595717766871",
    },
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
      "000002ff8d546d6f9b3010fe9e5f81d8974d5b42a001924a5157a56c634a932e216da7694a8c7350b780a96db25555fffb6cc80bac55d56fe1ee9e97bbf3e5b1a569fa1dc9d6fab1a68724be2f803dbcbba5a1fe496540a058653ee6d791c13323fa7a1d1a9bc1c6fa6effb5e2e1b0aa22259aa3344fa0cd69c130f0e3c5bc13335ae48851da96846dabd736ed81ed9aaeeb387dd7acb01c92684cb23bc5702344ce8f0d63e7a313531a278072c23b98a6fbb8b1b18c9cd15bc0821b4d59432a71e375e19384622408cd868b7965a2e0c096902292281b07f43afcdca4ef1094766259bd211810c6b4c884b256d1609a45242e58492e991e6550864bcffbcf5a409f7b636f1468a3e96212bc5fa154d1ad3e68886bcb25035e2442fb329b9e6bab5caadf200e7ca55d7df3669e8c301a91049664bdd286da8936f6cffd40ab865a8aac810b929556021426503320b3dbf1f92f6c6e4fa1489090aadbb2a5db7590d9ef0ec2287471d43fb2c3a80b61d80f5d1b1d855d3ce8416f1d02aa3308a55de1514633278c90ebba766f80066e84fbdd086cd7ea775dc7b642d38a1cdbc418704fdf323cedfbf9c3888033c273cac976befad5cc0fbc65305b4c46a78157ef3d4272786795fb66e78d96841c52dded6b6379e62867844a53e526fd49e0cd4e47817f59b3219fd51862841fe6f7ea614528e1704023865210c0cee95a2d47bf98cefdc09f4e4ec70786f2a55cec2ab92cfbb5377be8a9ce163ce4cd55575ba8a2caa6b39f6da39b26cb254a8a176836dbb06e36385afffffaddaa71ebf206b7aef41f0b6ff65361cb9ccacc200206193ea8bde16d2a60957ec35f8c2cdf1dbc42c89bdfeb7321c3f24c303fa86306d5d190b46a754b38e8752d6b4728814c3caf308fdc5dc5b3a3575a90422676b3a88ebf1ae453c35251b353c254b97ce4137ff2b534df7a6afd035ca2b02db9050000",
    ],
    [
      "ETag",
      "+pXf/sn/fGXb/v9v2J5x2g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-24-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "df",
      "6f",
      "82",
      "30",
      "10",
      "7e",
      "e7",
      "af",
      "20",
      "ddeb48e636655be2831aa326c629ce2c6631a6c0c170c0b1f6983186ff7d6d01f5a5edf7e37abdaf67cbb6d94f9287eccd667e12ff96204e7731d04a1f3c90654a526d05e612d8bd7603f158bb69fbbe3a2cfdf52a3a96d3ed72f4c9274f72d0efd72e197c43c695efac90c25102692815fe32d86e78a3e53c037de37e2f4c437343a3d1a930da6cf1319e8cbd5b29c3d0488bcd7c3e18cec7ac912ab3efd45a99a71cd0f72002017900d70715020f10d0cc4c2e7956a4e0482c4500b269a20b6b391658165c203a8a721e9f9d4ef7b5eb765cb7d77b713bad3dc5805382b9aed8acd9a53f21f1d4c3a39e9ed56e266a5887d146c1a29b7c6e1352d29f2eeeb10b5535a79dd5a2ddb5d9f044209702d52c12cc040fac8d62847a54d2499028c1d00157bf354da8e1accafa07ca850fea18020000",
    ],
    [
      "ETag",
      "tYOQjPbSQfwuHYPCWaG3sA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "c97282300000d07fc9591d84b2a43713523647c042102f19a4b165912d08d84effbd4edf1fbc1f90e53917828d6dc51bf00a1e990c37f9c66b0db40d3ff883d68b1634bea4c63a59c7dcc7497d4db1ef346d4edacccd8cabf57ed82eba4de69b052f8172d44c84bd4277ec1715490b9fc9f7391ce6489b22c7356fde0962a6aca5918c542eda2f4758bbe4d097fdfd34658e4cdda580f782c616acf682ccba5677d4976d8de8ea39d0c67247a5c850de4c9546c11e26298a92be13412a1dd984ddb0437a89ab0b619f0e5801be74c5c0052b9e3345857005fe9b6c7c74fc79453c1bf8007eff001e7173e405010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:34 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-25-1595717766871",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d546d6fa24010feeeaf20dcd72a6a15b489b91ac5d344b007d8e672b9906519e8b6c85276e9a569fcefb70bbec0d934fd0633f3bccccceebeb714457d2669a8de286a40e29702f2b76f4f3450af6406388a650696da7c89b774d15ddc27e48e01092d2b9e4caa2a52a219da6509b4192d720cec66eb76e29c1619ca296d0bc2767fd8ee0dc743a36718ba3e327a15964112ad49fa2c191e39cfd88da61d7d74624ae30450465807d3dd29aebdf6b52ca74f8039d39ab29a5062dae7c2df138a1127349d6cddca44c120f7618748226d9cd16170dba4ef10b4ebc4a2fa95604018d322e5d25a4583691a91b8c84b72c1f42e82225c7a3efdd602aa6baecd99a7609a14bbd44fd10eae941071e4f3b70c9485b3b19495bdd838d6d45b6d6cdf9d2d4d6bda996dd65bcb769587a5e9980a47410225569928b7e59f2d7e4a47a55a088c93b4f4e4c96ccd89c81ee6b8fa6085270a49225c313894f9465747bd51771c448181a3d1f53088ba1004a3c018a2eba08bc703188401a03a43e9acc2a394a623e8f5c351d4f5f57060f883218e7cd4d7c1d723047dacf7c76180d5037a7feae56f4e38cc09cb28238721ab0fceca337dcfd9dab3a967d6fb8e5091f079e5bcd975a31d2e065477fad9482e1c6539a1c254b9ce95ed99ce74e6adee6b36c4d95a438cf09bfb224f578412066734cac5ae38e4160de562547b6a99f333b83c2977c722262a7e9f7c9edb118572ff652f17fb6fea78e260354651eda68aaaaee7acec1f6a2db9ff98e61e25c5073caf87b09a89693d8a09b30657ebffaf3fad9a862aeeeac19efa736b3abf24b6ccc98c0311e490e2b3ea178eae0456e92f3c45a2fcf8304884781b4efa8c8bb0b845989dd5710ed59d22d5e48f84e3813ee81e090530e7971542f65871f138482dd841ca8fb3a81e896a90fb86a5a266a784c972710fecc312f7ad7deb1f4dee349ce1050000",
    ],
    [
      "ETag",
      "eH/DHcUoF0FVliPseidMMg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-25-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffc5545d6f8230147de75798ee5513bf806d890fe8dc46e29c1ff8b02cc654b8280e286bcb8c33fef7b5059517179299ec85f6de736e4fee6d0f7bad52411f41eca1fb0a5a06abcf14e8ee66057c2c37136069c899581212334055c9068e5792dddb5afdfa50df46cdb13d7b7b6afbad56fa3dee74321673d71061c1db8b48c47e00a1c744fcaee24a9e57588c239027ba244ca378a1c2ea19e6bb44c15367620f9f8a48443c850c678381d51df4510e1daa97453cccf1421df93709b5ceb55c0c6dc872023e50885d38779d50b20197db6abc0c474908354652ea02cb45646106af2849134c09a98954ada9d71afa9d6e364cd3306ecdc6911e1217f380c4b2623645277d4e380e27642b478c8cec0e681666133f8e02f9854b284e48405fb238f0d02977a8fe42b4878ed12e70f3dd5c2b5496561593f2831016ffa42eae648dc50b2fa79d3f932b89e388a4312f29fd3878b5aed8b87043d9a61f2ca77f2d59c685174aea3af64b7fea582fa38be2e23b3f9ba0bbe3c04694088f3150ce6ad4dbb7ba69d4d1d1a93d229dc8a551394d41a55d2cfe58cf0117391f870cb483f60394a2b0bc1d050000",
    ],
    [
      "ETag",
      "CwAE0N5wm2QIUYG4f33uzQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COALESCE(SUM(`amount`), 0) as __result FROM `purchases` WHERE `profile_id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-26-1595717766871",
    },
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
      "8d",
      "54",
      "6d",
      "4f",
      "e2",
      "40",
      "10feceaf687a5f34116885b260423c83d56bc28b0745632e17d86ea7b8da76ebee56630cfffd765b5eca698cdf60669e9799d9e97bcd30cc279a86e699610674f59c037ffbf1c802f3446740e295ce5cbb3d7f9c5f915ffcd2b69227728f5f39bcf6fb65152dd00227590c75c1724e409ccd678d1567798639637545583fedd46da7e7201ba14ea78bec122b208e86347dd20c0f5266e2acd9dcfa68ac185bc580332a1a8425bb78f3e5b49971f608448ae6a16c532989e6d7c2e73123585296f6e7b3d2442e802f20c134d636f6e830f87948dfa03869ac54f50b25800961792ab5b59286b034a2ab9c17e48ae95d0555b8f0bcfb5b09983377e80e7c6330b918bab3817b349b8f8e9638d1accbe313c33a36b030160b0e228fa571359d8c8c65a68c3c60016269dcfd72a7ae8a7016d11816345c1a7de3dc187a23cf37caf9167a210849d3c2958f83182a5e54763349ef9325ee283409964a7553b6405607db5dab1744012251b7e504910541d00d90835b81457a6d688701e02a83d4da251ea72ced763102d48b5ab6855aadb08b10414e80a0edb470cf698708e14e076c6c6e18d6bb7e5e3995704945c604dd8cdabc9b7abebbf0a7f3f1e0c277abbd47580defb2747fd8f9414b520da9eaf6abb17c709471ca94a962a9ded877a71703dfbbadd8502f6c082b4cde66cffa8d453816b047638e1390c0472cd4cb316f2633cff726e38be19ea1783437db4aa1cafeecccee7baab2f96fd9e1aacb2d94516db3d3362bb9f5c9a72cb738ce3fa179d9844dfb80a3f6ffafbfb50ab7a9ce71e3cafc3d77a7f71a5be474660a117048c95eed1b6f5303cbf437be36aa7c7bfb1aa1ce7fa72fa40aab332162af4e389447",
      "4393b2d50d61cf71dad6965001b9fc5881acd6b6e2c3fd6b2d482095db5994df817290eb034b79c54e01d3e5ea918fbdf17561beb6aefd03d04c952cc4050000",
    ],
    [
      "ETag",
      "GE9TNuFcHrD10mkcYawrew==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-26-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "df",
      "4f",
      "c2",
      "30",
      "10",
      "7e",
      "df5fb1d45767980686263c808148182a28f1c11052c631075b6fb6370921fbdf6dbb0d7869fbfdb85eefebc9715db64fc4863db96c9dc4bf05c8e34d0c34338739a82225a5b71c8502766bdc403c366ef4278769365ceca7039191f84ac693fe28eef52a978a7e20e3da77d248e36d02e94669fc6db15bf356133c0373e36a256d437b43add131b7da287ceb7f5e0b196eacf0ba08c3fe201cb25a2aedbed46b691fb2c3f51cb620414470794e2e7107118deddc8a67790a9ec24246a0ea26a6b092638945ce25a2a729efbee3f9edc776e00741a7d30dfcc69e62c42941612a161fecdc9f90783ac783999d556e262b5845d104c1b657e95ce7a3a53f5bdcba7be8b2335dd6a7a5d3a0e5a5e1e048a0de25ea7914d8295aac89e319cdb864d2205980a523aeffeb25a19a734ae71f77668dac1a020000",
    ],
    [
      "ETag",
      "o1KwMmEUkMBnmtnWiIKAFg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "49",
      "72",
      "82401400d0bbf45a2c19b5b3d3a065c0c82042704301fd89cdd08d0c32a472f7587937783f284e5368dba8e30530f486a658c2cb7469f2cd4e74e07cd6202baa7d6f9399cfc43b0c56c7f383f24ee56490a9a16fa48816c7d0f745b7baf6cdd39442a26bec36a9f95d0150822e2dfb20c0df817aa5319b845354e8fb51fb12f84363f6c725f3081b609d2582058e62303110158cad7b4166f7a1f323d7b7aa580a6bb537a9f34972cf0c48ac9836ae575a1ab11e5b39a4a7bab24c3ae68e7f713135c2f2963c57688160ac69036d445f3359c57881fe9b5137d5f0baee206ea041bf7fe9c9c7f205010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:36 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-27-1595717766871",
    },
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
      "8d",
      "54db6e9b40107df75720fa1adf8d3191acc67248e2cac62de0585155a16519c8ba9825ec92d68afcefdd055fa08ea2bcc1cc9c33672e3b6f0d45517f932450af15d527d14b0ed9eecb86faea95f4004791f4fc5d3daea36f295ae79b5dc7b9bfd336f8e169321e9751a44033b44d6368329a6718d8f5ca694519cd539451da1484cd9edeec6a86a677757d381ce9dd12cb200ee724f92d199e394fd975bb7dd4d18a288d624029612d4cb7277bfbb5d74e33ba01cc59bb9eb62d32b1f6c789bfc614234e68325e39a5889c41e6c1169158ca38a303ffa64edf2268db8a44f42bc18030a679c2a5b49206d32424519e15e482e94d1885b9d07cfaad1854c79c9b5357c134ceb78997a02d5c2901e2c8e3bb14943b7bb95066d6ddd25e4cdcd9d2f29ce983b998b4a6cbf96a6139cafac1b44d85233f8602ab8c959be2cf123f85a2225b008c93a4d0e44a6f4589f01efa387b6784270a492254313884797a6788baa38ee187be8ec3515ff3c30ef8fec8d735d4f73bd818c020f00155190a65251e253419626dd4eb8c0caf37e886de20ec0f3da36b0cbda0d7878ea6e3aed10fd4037a7faae54f4638dc129652460e4d56d7f6cc353dd75e59d3896b56eb0e511ef3db5279bdea5a395c34a8aaf4a3965c284a334285a8629c33cb35edc9d49d3d566488dd9a4384f0ce7991db15a298c1198d32312b0ed982067230aa355998b76770b129df8f414c44fc3ce93c972302e5fc8b5a2ee65fcfe38ac5aab5a29c4d69551dd79e59f76ac5b97f9fe611c5f93b3caf07b39a8a6e3d8b0eb31a57e3ffaf5f8d4a0e55bcd5833cf5c7cab49f24b6f0498f0d216490e073d64facae0496ee4f9c22117e3c0c12216ec3293fe3c22c5e1166e7ec3883f24d91b2f3474263d8d78c23a10066fc3262a06bc7888be32073c116127eec457924ca46ee6b92f28a9c0226c3c53bb00e43dc37f68d7f9e3caae8e105",
      "0000",
    ],
    [
      "ETag",
      "xUVWgJpaWujy0SGF5jcHYA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-27-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "545d6f8230147de75798ee5533310adb121ff063ce4cdda6f8b02dc654b8201b506ccb1663fcef6b0b2a2f2e2433d90bedbde7dc9edcdb1e765aa5823e83d8457715b40afc4d0a747be5037f919b29b034e44c2c098919a0aa6403c7be646f8c57b371ed7f753b83c79e3e69adde1e596cb5db198b396b88b0e0ed4424622f80d065227e577125cf2b2cc611c8131d12a651bc5461f504f36da2e0993d1d4e06452422ae4226f3d1c8ea8cfa2887f6d5f3222ee678a98efc9b845a175a2e863ec86a0a1e50881d38759d50f2010e1faaf1321c2521d41849a9032c17918519ec53922698125213a95ac3ace9addb96a99ba661dc98fa811e1207f380c4b2623e43477d4e380ea7e45b8e1819d91dd02ccc267e1805f20a97509c9080be6471e0a2636e5ffd85389cd846b3c0cd770bad50595a554cca0b4258fe93bab89235162fbc9c76fe4c2e248e2392c6bca4f4fde8c9ba60e3c20d659bee5976ff52b28c0b2f94d4b587e3feccb6c6cf67c5c57771324167cb813d53223cc640394baf376f5aa6514707a7768974229746e534059576b0f8633d045ce43c1c32d0f6da0feb6cfbae1d050000",
    ],
    [
      "ETag",
      "q6Y72/gvCBGKD1N5bZKsnA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MIN(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-28-1595717766871",
    },
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
      "8d",
      "54",
      "6d",
      "6f",
      "da",
      "30",
      "10",
      "fe",
      "ceaf88b22f9b34080142a012eaaa365b2301ed20b4daa6096ce792ba4de2d47698ba8aff3e3be125ac55d56fe4ee9e973bdff1dc300cf38166a179629898c68f05f0a70ff70c9b9f7506248a75e61af0cfebcb33eb2f8993c9e3da49d34998c5a35155454bb440699e4053b0821310278b792be6acc81167aca9089b9d41d376868e6bbb6ebf3f70ed0a2b2089c6347bd00c7752e6e2c4b2763e5a3163710228a7a24558ba8f5beb8e9573760f440aeb58d6524ac27a5bf834610449cab2d1625e992804f025a48826dac6011de22fc7f42d8ad256acaad7940022841599d4d62a1ac2b288c6052fc915d3b30aaa70e979ff590b98736fec9d07c6c49f7e5ca15493ad3e194818cb25075124d2f83abb9a18ab5c69df21016265dc5e7a334f45388b68024b1aae8c91716a8cfd891f18d5484b891084a45969244038819abcca6e87e7bff26e7b0a4d82a452dd962ddd761fd983f61047d825d1a0ebe0a80d180fb0eba02e6e93610f7a21065467905abbc2a38c653dd7753ae010843aa807b8df8bdaf6d00627ec38761f397d1246ed5ed7c6e69661b3efe70fa7122ea8c899a0dbe99ab7333ff096c16c313d3f0bbc7aef1152c3bba8dc1f777ed4925443aabb7d6b2c2f1ce59c3265aa7c477f1a78b3b3f3c0bfa9d9504b35861891a7f9a35eab0825020e68c4510a12f88485505ed8d5dc0ffcabe9d9f8c050eec9f5ae52a8b25f7bb3879eea6cc1537efcd4d52b54516db3df336bb9cde757596e5052bc42b3de864dfb88a3f1ffafdf8d1ab7a92e70ebcafcbef0663f34b6cce9cc0c22e0909183da3b765303abf43bfe6054f9eedc35425dfc5e5f4815566742",
      "c4419d70a88e86a655ab5bc2a1db69ef091590cb9715ddee6057f1e2e4b516a490c9dd2caad3af06b939b254d4ec94305dae967cea4fbf95e61b9bc63fcc8c510bb7050000",
    ],
    [
      "ETag",
      "PebZPHA/zcglMqv5mmMdng==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-28-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d515b4fc230147edfaf58eaab338c0843131ec0089a2c0a531ed41052bab30b6e3ba3ed2484ecbfdb761bf0d2f6bb9c9e9eaf27cbb6c96f5a84e4d126db34de57c08f3731c8a53e0420aa4c0ab595580820b7da0d92c6da3dfbfa0ef8304b9264ce97d3aab798ef97ec301e372ec112c8a9f29d1452384a210b85c23f06db2d6fb482e6a06fdc6cb869686e6835792c8d36f3df279fd7428ea111de56be3f99facfa4956ab3afd55a9b87ec701b40041c0a0697e7941c77c0e4ab995bd0bcccc011587106a26da20b1b39e6589594233a8a72fa23c71d3c0c3cd7f386c391e776f60c19952916ba62f541cefd254a9a0578d0b393c64d78039b28ba20487495ce753e4afa33c577f77d7266ebf6b4b63ab4bef49b1e25880547358e0033448f74693ca19e56ea3024afc0d08caaef7a4965cb59b5f50f1b95309119020000",
    ],
    [
      "ETag",
      "FYZRr6lhhhGrQBu0PGqQcw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00d0bb642d0e3f11bae32b14a443a8286e32690c03511b200848a777afd37783f7033021540834f02bfd066fe089556b4dd631371d2523cabd52d3728a9760a7c94a1a5f051d6f922dce5d0e0d3fc63c7967f4d3f5bd3a886bd93ec9f0f825a537b59d0d53c14958434577a36007ede8232139b2d8696b157615cc648446af9741cf427e89306c0e6c33b387afde6b01c72cc4f9c11baa02417baf8f4df7f0c385d50c1962cad9b926e1b6e017aef166ca7c982f95de957bc9f5d4a299d1e098c722d5c10ad0b96d7a2a50f39a691bcb5a81ff261a9e2d7d5d1d8a7bda83df3fb30d621505010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:37 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-29-1595717766871",
    },
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
      "0002ff8d54db6ea330107dcf5720f6719bfb855029da6653da454a48979056d56a856c63a85b82a96d5a5555fe7d6d2e096caaaa6f3033e7cc998be7bda569fa134902fd5cd321899e33ccdebe3d52a89f290f1620521e76bf5ddf4ca63fc7afd7cef77bf3f63135d7e875362ba2488ee66097c6b8cd69c610e6e7db4d2762344b01a3b42d09db03b3dd1f9b63a36f1893c9d4e817588ee370499227c5f02044cacfbbdd4a4727a2348a314809ef20ba3bd8bb2f836ecae8234682779b69bb3213ef7e9ef8474c11108426b3eda6109171cc7cbc032456328ee8005e34e93b04ec3a918c7e2108038468960825ada04134094994b19c5c32bd4ba334e79a0fbf3583beb196d6c2d3108db35de2276087cfb40008e08bb7146b57ee7aa5d9ced5da5dcd3d7bedf89bc52f6b35ef2cd6cbedcad96877bf2cd7d2048031ceb1da4cbbc8ff1cf9932bcab305980b92e49a3ce5ad2991deb28ff607233c502812a98ae332cc377a13d09ff64c18420385d3e118863d0ce1141a6330843d648ef0288018d4197265051e243499f48cd004c1c0072338f047b0077cd01f0ffc2018f62130476808a05ea2f7875a5e1911f892f09472523659bf736dcff23d77eb2ce69e55af3b04592c2e0be5cdaa1be508d9a0bad2cf5a72a22865844a51f9386dc7b3dcf9c2b36f6b32e46e2d7104d0dbe6596d5708628e8f68c0e4ac04662b1aa8c1e8ce7c655d1ec1f9a6dc54415c46fc39e83c962303d5fcf35a4ee6dfcce3c9c56ab4a2984d61d5379e6b3bd77acdb9ff98e616c4d9073c2fa5594f65b71e64877983abf5ffd7df562d872edf6a294fffbdb5dc7b85cd7dcae3e210339ca063d62facae0216ee2f9c22195e1d068590b7e1909f0b6996af08f16376c470f1a648d1f98ad0549c15a10432711a618ecc2ae2e438a85c78871351f5a238124523f70d49594d4e0e53e1f21d38e510f7ad7deb1f13634b61e1050000",
    ],
    [
      "ETag",
      "rYUOP68B5wGN+Y9Vjp9Ocw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-29-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffc5545d4fc230147ddfaf20f55188a0b0a1090fa013091f2a8cc4680829db1d0cb775b49d661afebb6d37602f982592f8b2f6de736e4fee6dcfbeb55209bd7ba1836e4a68e12d3731d0e46c09fc596ec6c0629f33b144246480ca920d1c2f25fbb51e4c5ebe2e92abae697637fdfe7962f6d7cfad56ca62f60a022c78df2212b1eb81ef3011bfa9b894e51516e200e48936f1e3209cabb07c8079122978628d7ba36e1e0988a390d1743068770626caa06df9b88883399eab23ff26a1d6999689a135598cc1050aa10d87ae234ad660f39e1a2fc341e443859198dac032115998c24b4ae20853422a2255b9bcaed41ad70da36618bade346a3bba4f6ccc3d12ca8ae904edf539e1d81f934f3962a4a77740d3309df86e14c8cd5d427e4202fa90c59e83f6b96df917626f64e9f51c37dbcdb45c6561553129d7f361fe4feae24a5658bcf062dad9333991380e481cf282d2f783c7f6091b176e28daf45ddb324f25cbb8f042415dab373427567bf874545c7c67071374120eec8912e13106ca59b56abdd930f42ada39f59648277269544e6350691b8b3fd683c745cec53e036dabfd0020ac82251d050000",
    ],
    [
      "ETag",
      "Z4mSXz/y3GEEGqKK+yEKjQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MAX(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-30-1595717766871",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d546d6fda3010feceaf88b22f9b5408e12d4925d4a19675d180b610e8aa6902c7b9a46e9338b51daaaae2bfcf4e78096b55f51bb9bbe7e5ee7cbcd6344d7f2469a09f6aba4fa2a71cd8cb9707eaeb272a0302452ab31e2c9ead7866fca2d1fde2b27337584feccb9b7ebfac22059aa3248ba1ce69ce30f0d3f9ac11319a6788515a9784f576b36e769dae655a56af675b6689e5108723923e2a867b21327e6a183b1f8d88d228069411dec034d9c78d75cbc8187d002cb8712c6b48256e7c2c7c16538c04a1697f3e2b4de41cd81212446265e3800efcefc7f40d82924624abd70403c298e6a950d64a1a4cd39044392bc825d3ab0cca70e179ff5909e8b3e16878ee69e3c1efaf2b9428b2d5370d716db964c0f358683fa657636d9549ed7bc481afb4db9fc3e95046180d490c4b12acb4be76a68ddcb1eb69e5480b8900b8206961c4437e0c157999dd0ecf7d676f7b0a45828454dd962dad660f9976d3f143dfc2a1ddeefa61137cdff6ad2e6afb4dec74a013f880aa0c4269977894d21405b815b47b083543709c10a120742c64831ddaa6d9431802d3699981a96f1936fb7e9e19117041784639d94e57bf9dbade70e94de793f38137acf61e2239bc8bd2fd71e7472d0939a4aadb8fc6f2c651c60895a68a3dba136f381d9c7beea262433eaa114408bfcc9ed4b30a51cce180460c2520808d69a096a35f5fcd5ccfbd9a0c460786e29d5cef2ab92cfbb3377be8a9cae6bd64c7ab2eb7504695cd5e47afe43627efb22c509cbf43b3de8675f388a3f6ffafbfb50ab72e2f70eb4abf990fa7770a5be454660a213048f141ed136f5301cbf427fe6064f9eedc15425efc5e9f0b19966782f9411d33288f862465ab5b4247f2b5768412c8c4db0adb6eef2ade9cbcd2820452b19b4579fae520374796f28a9d02a6cae5239fb893cbc27c6d53fb07a4a10750b7050000",
    ],
    [
      "ETag",
      "vAVw7lS/KoghVG4YAvN8GQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-30-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "5b",
      "6f",
      "82",
      "30",
      "14",
      "7ee75790ee752c5ea2b8253ee8b25b42e6c6e6125d8829f5c050e0b0b6cc10c37f5f5b407d69fb5d4e4fcfd7a365db649fe45b72679330897f4be0d5550cf25d1f7c10652a85da0acc05906bed064963ed5ec5824d9ef2af5dc4b3f5721dfafb45b59a4da78d4bb01fc8a8f21d1552384a20dd0a85bf0db65bde6839cd40dfb8d970d3d0dcd06ab22a8cf6e82d669f9742865b23bc2e3d6f36f71e482bd5660fd45a9b87ec30f421020e3983f3730a8e3b60f2c5cc2d6856a4e0082c3903d136d1858d1c732c0bca111d4539c39ed31fdd8edcbeeb8ec713b7dfd95364542698eb8ae50739f5972869eae341cf4e1a37e10d6ca2e88220d1453a97f928e94f170f6e06437262ebf614581d0acefde69504f1c6518d23c00cd1235d1af7a8a7953a0cc94b3034a3eabb9e13d972566dfd036e9acf9619020000",
    ],
    [
      "ETag",
      "Ygsc8GnVjfrmZUZbRkOyYA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "ff1dcfdb6e82300000d07fe9b31ae5b2d9bd016e20500402437869001b289072295a70d9bfcfecfcc1f901795912cef1dcb784810fb0e612dc953ba73fea87e0b6bdb9562a2f26adb5966b222dbee103d3889eacd54bdf074f0c0d0ae81ca1f938467ab5888bb987a3b458925dcc5d58d491ea8a4c3b99ccf0f0dd3e6f35ab61a3f374d91b4191a32e66dbf76138f9a93cf075d42b06e5bce366f068cbe42a048add4469922cbf76d878f888a97e22f6dc50d4a923fe171f83b8710ef1aad14a2d95ecf37ebed4c2aa6d6e300436802c039d08c7f43593550837e0bf89e77520afab4ef2894ce0f70f65370f6205010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:39 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-31-1595717766871",
    },
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
      "8d",
      "54",
      "6d",
      "6f",
      "a2",
      "40",
      "10feeeaf20dcd72a5a15b089b97a965e4d14af886d2f970bd95d07ba2db2945ddaeb35fef7db055fe06c9a7e8399799e79e665e7ada169fa234d56fa99a6631a3de590bd7e7960583f511e1028529e1bd6bb7bc2d77f462ecfefccc7f8efe5dcf9f6321c9651b44073b44e636872966704f8d972d18a3296a72863ac29099bdd4eb3d31ff4ad8e6599a66d754a2c87389cd2e45131dc0b91f233c3d8e968458c4531a094f21661ebbddd783e35d28c3d0011dca8a73564266e7c9cf86bcc08129425c3e5a2149173c80258231a2b1907f40a9fd7e95b14ad5b918c7ea60410212c4f849256d210968434cab3825c32bd49a334179af7bf1583be70a6ced8d7088bf3751224680d27da0a091488d714b44b6f3ed326eee5dc9b8dfcc9dc0d16e32b67366a8de7d3e5cc5d68b7578ee76802e1180aac36d4ce8b3f57fe148a8a6c2be0822685265f792b4aa477dbc7c93b23dc532812a98ac3362cb0da26ead8ed010eb14542bbdbc7611b30b6b1d5475ddc26831ef456185095a15056e251c212b020ec61db0a4c64db41cfeaf5036c5a66609aa83f3057a736e09ebe456ff6b5bc6454c005e529e374db64fdd69bf84ee07b4b773cf29d6add21ca6371512aaf575d2b47c80655957ed492234569469914558c73e2fa8e371afb939b8a0cb95b538810795d3ca9ed0a51cce18046999c95806cc6566a30ba3b9a39170770b1293f76415c46fcdaeb3c942303d5fc8b5a8ee65fcfe3cbc5aab5a29c4d69d517be3771bfeb15e7e67d9a1b14e7eff03c6fcd7a2abb752f3bcc6b5c8dffbf7e372a3974f956b7f2f4eba5e3fd54d8c2a73c1e849041420e593fb1ba0a58ba3f718a64f8ee302884bc0dfbfc5c48b37c45841fb293",
      "0cca3745cbceef080783eec0da114a60268e23fa667b1771741c542e58432276bd288f44d9c84d4d525e9153c054b87c07ee76889bc6a6f10fc96b9389e1050000",
    ],
    [
      "ETag",
      "Vo4XqbQxANsuX6klzFOEBw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-31-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ffc554d14ec230147ddf5790fa0a9145d8d4c487a1a84b06220c636208a9dbdd9876eb6c3b0d21fcbb6d37642f982592f8b2f6de736e4fee6dcf3646ab85de932c44972df49ac41f05b0f5490ce2516da6c00b22b85c729a71406dc5068163c57e7ab8c773d7cde35118781fe1e935799ebd3b5757258b072b48b1e46d6424e32801127219bfe8b855e53596e114d4890125459a2d75d8dec3629d6b78e64fddf15d1d4969a891f1dcf39c81374415b46d1f1609b1c04b7de4df24f4ba302a31f4465fa71001832c807dd739a36f1008578f97e33427d0e1b46001f04a44159670cc689163466947a63a6766c7ec5ff46dd3b62debdc36777442032c129aa98af90cfde80b2a3099d22f3562649577c0cab09cf86e1428aa5d427d4212fa54c549887e72dbf62f4477ec5bbd1ab7da2d8c5a65635539a92821b0fc277579252b2c5f7833edea991c491ca7b4c84443e95befc13962e3d20d4d9bbe71fce1b164b9905e68a8ebbba3e1cc77469383e2f2bbd89b60b016c0278c4a8f71d0ce32bbbdf3be6d75d1cea9d754395128a30a56804e0758feb1ee13217311261c8cadf10d604ec8b91d050000",
    ],
    [
      "ETag",
      "VOHaUIIpgMdcLqd/ClXSkA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`date`) as __result FROM `purchases` WHERE `profile_id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-32-1595717766871",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d546d6f9b3010fe9e5f81d8974d6a12484aa095a2ae4bd98a94262d21ada6694a8c39a81bc0d4369dba2aff7d36e485ac55d56fe1ee9e97bbf3e5a5a569fa8ae4917eaae921491e4b60cf9f1e68a81fa90c0894a88c7b9985e2f2267988bf95776341ffaefac62a190eeb2a52a139ca8a14da9c960c033f9dcf3a09a3658118a56d49d8eef7daa67562d9a66d0f068e6dd6580e693c26f94a31dc0b51f0d36e77eba393509aa4800ac23b9866bb78f7a9d72d187d002c78f750b62b9578f77de1b394622408cd87f3596da2e4c0169021922a1b7b74147e3da4ef1094751259fd4430208c69990b65ada6c1348f4952b28a5c32bdc8a00c579e779f8d803e73c7ee28d046d3f924f8bc8c9080e5170d716db160c0cb5468dffde995b62ca4f63de2c097dadda5ebbb32c2684c52589068a90db5336dec5d7981568fb49288800b9257460214a6d09097d9cdf0bc37f6b6a350244848d54dd9c23606c8748c93300e6d1c3b7d2b8c0d084327b42dd40f0d7c720cc75108a8c92094768d4739cd8d1823649b4e8c7ad800238e9d81634616c6087004bd105b28ead9564fdf30ac77fdfc6144c005e105e564335dfdcef7027711f8f3c9e83c709bbdc7480eefa2767fd8f9414b420ea9e9f6bdb1bc72543042a5a96a8fde2470fdf351e0dd366cc847358604e1e7d9a37a56314a39ecd188a10c04b02b1aa9e5e8d7d3991778d3c9f978cf50bd93eb6d259765bf7666f73d35d982e7e270d5f516eaa8b23938d61bb9f5d19b2cb7282ddfa079da8475f380a3f5ffafdfad06b72e2f70e34abf99bbfe4f85ad722ae3430c0c72bc57fbc0db54c03afd813f1859be3d77859017bfd3e74286e59960be57c70ceaa32159dd6a4de81846dfb2b78412c8c4eb0acbb4b615af4e5e694106b9d8cea23efd7a90eb034b65c34e0553e5f2914fbcc98fca7c6bddfa077c7e986eb7050000",
    ],
    [
      "ETag",
      "EHmbtHQgjfBuWLtozk30kg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-32-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff4d51df6f8230107ee7af20ddeb487446d896f8a08b9926c639a64f0b31150f86038eb5d72dc4f0bfaf2da0beb4fd7e5caff7f5ecb82efbceca237b76d9214b7f1488fa2e057a378710a4ca49eaadc25202bb376e209e1ab75afb250ed468b17dab63418a368984e964d2ba64fc0505d7beb3461a2719e447a9f1a7c56ec75bade405981bf77b611bda1b3a8deaca6acbf576fe3a0f6fa5028f565aef56abe96c35679dd4d83dd26b639f72c2430809082863b83ea812788298967672c98b2a074fa21231c8ae89296ce554a0aab840f434e58d1ebce1f8691c0c83c0f71f83616fcf31e69461692a761fecd29f90781ee29f999eb56e265ad886d147c1929b7c6e13d2d2af29f6d9856aba53e4f428ba369bd504722350cf22c14e30607d142f68462593040905968eb9fead45461de734ce3feeab937418020000",
    ],
    [
      "ETag",
      "uN6no0u3HTOycrtutPfseA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "300000d0bb642d0e5811d39d5168f0834520b6dd64204450be2102a69ddebd4edf0dde0f8819e352d27b53f01abc0215cfe0944d77cd1219fe05aa38fddca1c47acb4edb79b4874532acd0e8a959b8cfb74ba322078c044df080cb8a1dd3636a87fae25eda5785faa622e677bd36b41595a460c434db8d1638fd38561e7bb71d8185a6fb8ebc20fb41fb723d88b9b954330237511c782376449807d8bde9b5a590e666c428f4f0b0877c0eeb618bfd0f1f3db2c86dade6fc45864294dad958b03697cd2d107d0426803fda6bc725bd3e672f268413f0dfa477d5f2e715f1b8e31df8fd03d550a92905010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:41 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-33-1595717766871",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d54616f9b3010fd9e5f81d8c735011a1248a5688d52da464dc806a4d5344dc81843dd124cb049d755f9efb38124b05455bfc1ddbd77efded97eeb4892fc8cd350be90e400c79b02e5af5f9e48209f890c62201699cde4c65b61f7ce186db5beae6efefcfd9a3ebe8cc755152ed114acb3047529297288e8c5caedc53929329013d2e584dd7ebfab0d460343338ce1d034b40a4b5112cd71fa2c181e19cbe885a2ec75f46242e204810cd31e24eb435cd99e2b594e9e10645469b7557827aa7cdcf85b42206098a4e3955b892828ca7db4063811328ee830b86cd3f73058f7625ebdc510010849913221ada281248d705ce42539677ae3411e2e351f7e1b01d9b5e6d6d49320498a75eaa7608dcea41030e0b3d70c49d7ce7221cdeceba5b39878b3a5edbbd35b6b31e94d97f3d5c276a5875bcbb1240682049558692c5d967f36ff291595dd4244194e4b4d9ec83694f06cede3ec9d151e2804095745515de61bea1068a63a0aa2c08091d91f04918a82c00c8c01e8072a1ce9480f03049a0ca5b20a0f52920e421d9eebaaee07da30f0f508a9bea9e9baaf0153d7d430e4ee0ee51abd3bccf2926386ae30cd08c5b5c9f28333f32cdf7356f674e259cdb9235024ecaa52de9eba350ee30635957e64c989a22cc7848b2ad739b33dcb994cbdd97d43063f5b731403f8ea6ec4e98a4042d1110d72be2b86f20509c562647bb2b0ae8ee0f2a47cdf17515ef1eba0f3380e2f14fb2f6739d97fbb8fc70f56cb8a6a375554763d6766dfc88de4ee7d9a7b9014eff06cebb09c71b71eb9c3b4c5d5f9ffeb77a7d143e677b59627ff5859ce4f812d7322e3a008e52885c7ae9f38ba0258a53ff114f1f2fdc32010fc6d38f4a78c87f92d82f4d81de6a8ba53b872be2634554dd3d43d2107e6ecb4e25c33f715278f83e885d628657b2faa47a23272d7925434e4943051ceef815d2f71d7d975fe01ff0e80efe1050000",
    ],
    [
      "ETag",
      "qAGTUiSK79v1340qxz+nhw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-33-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ffc554d14e8330147de72b96faca92e11c38131f984e5d86730e343166592a5c900914dbe2b22cfb77dbc21c2f33242ef185f6de736e4fee6d0f1badd5421f7116a08b167a8ba3cf02e8fa2402fe2837336045c2995872923140ba6403c7916417eecb73ffd4b85d85a73018e7f826e85c8fa3cbcb92c5fc7748b1e06d4424e230862460227e5571abca2b2cc329c8137d921469b650a1be87f93a57b0ebcd4693db3a929240219327c7b107ce1055d0563f2c12608e17eac8bf49a875ae55626849de66100285cc877dd739254bf0f9488d97e1344fa0cd48417d6095882c2ce1889222c79490b648b5bbddb6d1ebf72cc3b24cf3dc3276f484f898c72493154f2efad1e784e364465672c4c82cef80966139f1dd285058bb84fa8404f4258be300fde4b6fa2fc4d1c433cf6adc6a37d76a958d55c5a4c23881c53fa98b2b79c7e28537d3ae9ec991c4714a8a8c3794be711eec23362edcd0b4e96bdb1b1e4b9671e18586badee87ee87af6fdf4a0b8f8cef72618ac39b02925c2630c94b38cced979cf323b68e7d42b229dc8a551392d40a57d2cfe58773117b910270cb4adf60d6f3ce4411d050000",
    ],
    [
      "ETag",
      "uSYV921Gwf2eBKpaFd0DKg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MIN(`date`) as __result FROM `purchases` WHERE `profile_id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-34-1595717766871",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d546d4fdb3010fede5f11655f368db6499b3601a96208c288d416d6a6c0364dade35c82218983ed9421d4ff3e3be94b3a10e25b7377cfcbddf9fad2d034fd8164a17ea4e901891f0b60cf9fee69a01fa80c0814ab4cfaf5c9195fa30bf3afb0aebab7b7c92f2b3a8f0783aa8a94688ed23c8126a705c3c08f66d356cc6891234669531236bb56d3ec1df66cd3b6fb7dc7362b2c87241a92ec4131dc0991f3a3767be3a315531a278072c25b98a6db787bd969e78cde0316bcbd2fdb964abcfdbef071423112846683d9b43251706073481149948d1d3a0cbeedd3b7084a5bb1ac5e120c08635a644259ab6830cd221217ac24974c2f3228c3a5e7ed672da04fdda17bea6b236ffc791122018b2f1ae2da7cce801789d0ce2797236d914be53bc4812fb49b0b77e2ca08a31149604ec28536d08eb5a137f27cad1a6829100217242b6df82848a0262eb3ebd1796f6c6d4ba1489090aaebb2b96df491e918874114d83872babd203220089cc0eea16e60e0430bac30005467104abbc2a38c66181b1dab0f9d9e154214198183faddc0ead876e474640edb3d079b6618e96b86d5b69f2746049c119e534ed6b3d56f269eefcefdc96c7c7ae2bbf5de2324877756b9dfef7caf2521875477fbde585e39ca19a1d254b9456fecbb939353dfbbaed9904f6a0831c2cfd347f5a8229470d8a11143290860231aaae5e8579753cff72ec727c31d43f94aae36955c96fdde9addf55467f39ff3fd55575ba8a2ca66dfd26bb9d5c19b2cd72829dea059aec3bab9c7d1f8ffd79f468d5b97f7b776a5ff98b9939f0a5be65466021130c8f04eed036f5301abf407fe5e64f9e6d81542defb569f0b19966782f94e1d33a88e86a455ab15a163744ca3bb219440265e5774fbc6a6e2d5c12b2d4821139b5954875f0d72b567a9a8d92961aa5c3ef2b137fe5e9a6fac1aff00be7a5782b5050000",
    ],
    [
      "ETag",
      "m+w8NVaH1xt4P3XXlZ4fFg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-34-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff4d515d6f8230147de75790ee7524e0176c890feaccdc62968dcda7c5985a2f0c57b8ac2d33c6f0df6d0ba82fb4e7a3bd3d8793e3bae4372b76e4d125db2cfdab401cef52501f661383acb8927a29b19040ee8d1b144d8dbb171d24cf6791785d24fdf4398cd840f0743c6e5c92fd404eb5efa491c649067c2735feb6d86d79ab15340773e36623ec407b43aba96369b5a7c9d7fc96cf7167f9b7d57239992ee7a4956abbaef5b7b6efd8e336860404140caeaf2905ee81a9171b5bd2bce4e049ac0403d90e31071b3915589554207a9af2fa032f183e0cc3200c47a3280c3a3b474655868539b1fa2497f90a15e5311e4c74d2b8896860d344d703496ecab9ad474bffb66fbfe77b7ecff30372d1ea76b7763ab4be4e9d1e15c877813a94041bc5275d2733349995a944890a2ccda8fe678b4cb59c533b677115cee21e020000",
    ],
    [
      "ETag",
      "28wslmC8rJHf3gG78c4rlg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "1dcfc96e82400000d07f99b318659fde861d150292ca72212c430376183629a3e9bfd7f4fdc17b81a2aaf03ce70bbde31e7c0056f0705fedcf54d58e21eebf74aead6890e9dd6aa3fc9b95445dc5fa2068aa92bb5b1c5b8f4f03655c0325a4915927be8ae9bc72b5e81537f3942a8f4bc04fd6904c4902c978765196bade8fa108f1d86ccf1b6c1b9591f1aa86a28350c6fc26b165c8c6943d1a242ee5c448ed51798d8cb67f5ac99558967412255988e6ba33e9e5eed9a159d2d28d02e7b8e474ed7c59309c9417ed03d801bc0ded84e7bc7dcf0409c21df86fe60b1bf0fbaae162c213f8fd03ca221ae505010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:42 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-35-1595717766871",
    },
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
      "0002ff8d546d6fa24010feeeaf20dcd72abe166c62aec6d2d644b105acb95c2e645907ba2db0945dbc348dfffd760115cea6e9379899e799675e763e5a8aa2be9264ab5e29aa4fc2b71cb2f71f2fd4572fa407380aa507b4fc6ef3763f5bad1f76cbfc315939bb78134e26651429d00cc569046d46f30c03bb5a3b9d30a3798a324adb82b03d18b57ba3f148efe9fae5a5a1f74a2c83285890e455323c739eb22b4d3be8e884948611a094b00ea6f1d1aeedfa5a9ad117c09c69cdb49ac8c4b4af13ff8c28469cd064b2764a113983cc83189148ca38a1b7fe7593be4350dc0945f48e604018d33ce1525a498369129030cf0a72c1f4218cc25c683efed60caa632ecc99ab601ae571e22528860b658b38f2f87b0acaadbd5a2a73eb76652fa7ee7c6579ceecde5c4e3bb3d562bdb41c65736fdaa6c2911f41815526ca75f167899f4251916d0b8c93a4d0e44a6f4d89f0567d9c7f32c223852411aa1854619edebd443da33bf6035fc7813118f941177cdff0f5111af85d3c1ec270eb03aa3314ca4a3c4a6832d407863f300c0ff546c81b22ac7be3fe00bced60e877fbe3310263a456e8fdb196bf19e17043584a19a99aac6eecb96b7aaebdb66653d7acd71da03ce237a5f266d58d72b868505de9572d39539466840a51c538e7966bdad3993b7faac910bbb58010e177e74d6e578022062734cac4ac38644bba958351ade9d2bc39818b4d7938043111f1fba8f3548e0894f32f6a399b7f338f2b16abd18a7236a555755c7b6edda935e7fe739a2714e59ff0ec2ab39a8a6e3d8b0eb30657ebffaf3fad5a0e55bcd54a9efab836ed5f125bf8a4c786003248f029eb375657024bf7374e91083f1c068910b7e1989f716116af08b353769c41f9a648d9f98ad0e8f6757d782014c08c9f47187af71071761c642e8821e1875e9447a26ce4be2129afc92960325cbc03ab1ae2beb56ffd03c874b488e1050000",
    ],
    [
      "ETag",
      "e/uGWqHCOUPvMuQnOSvmWg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-35-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffc554d14ec230147ddf572cf551485c641b9af800824a0238609a184348ddeec6705b67db8984f0efb6dd90bd609648e2cbda7bcfb93db9b73ddb6aba8edea3d447d73a7a8bc28f1ce8e62c043e919b29b03ce64c2c194919a0866403c7a1643f3bc9e58bb3fa3a5fcfde7bcb71769f9ade24bcb92958cc5b4282056f2b22110711c43e13f1ab8af532afb01427204ff4489c27e942858d03cc37998267ee7430beaf2209f115327e1a0e3bdd611f95d0ae715cc4c71c2fd4917f9350eb5c2bc5d08abc4d21000aa90787ae334a56e0f1811a2fc349164393919c7ac04a115958c02125798629214d916a5e9a4dc3bc326dc3b62dab6d1b7b7a4c3ccc2392ca8aa719fad1e784e3784ad672c4c82aee80166131f1fd285050b984ea8404f4298b231ffde4768d5f8883b16bb52adc7237d72a95b555c5a4822886c53fa98b2b5962f1c2eb6997cfe444e2382179ca6b4adf0d1f3b276c5cb8a16ed3bd8edb3f952ce3c20b3575ddc1a83f733b23e7a8b8f8ce0f26e86e38308712e13106ca59c645ab6ddad605da3bf59648277269544e7350690f8b3fd643c4452ec031036da77d03a0eef8ca1d050000",
    ],
    [
      "ETag",
      "VPm3YPjx+wSkDhNpGn5cQg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MAX(`date`) as __result FROM `purchases` WHERE `profile_id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-36-1595717766871",
    },
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
      "8d",
      "54",
      "5b6f9b30187dcfaf40ec65939a04920049a5a88b5ab62125694748bb699a12633ea85382a96d5a4555fefb6cc885ac55d537f82ee79cefe69786a6e90f248bf4734d0f49f25800db7c5ad1503f531e1028519e7967754bb9cd4c3ed95cad1e66c0eefd60341c5651a4cce6689da7d0e4b46018f8f97cd64a182d72c4286d4ac066d76e9ad6c0724cc7b1edbe6356b91cd2784cb20785702f44cecfdbedbd8e5642699202ca096f61ba3ed8db4f9d76cee80ab0e0ed53dab664e2edf7892f528a9120341bce67958882035bc01a9154c9386647e1d753f81641eb5622a39f080684312d32a1a45530986631490a56824ba4176994e652f3e1b766d067eed8bd0cb4c9e8d7e76584042cbf68886b8b05035ea442fbe65f4fb4652e99ef1107bed4ee7eb8be2b2d8cc62485058996da50bbd0c6dec40bb4aaa12541045c90ac9411a030851ab9f4ee5ae7bd31b50384024142b2eec2168e6123b36f0cc2387470dcef5a616c4018f643c742ddd0c0831ef4a210501d4128ee2a1f65b2378e893b516c840602ab6b86dd9eed80d5338cae3de83a185b868991691bfa0e617ba8e79911015784e794935d6ff53bdf0bdc45e0cfa797a3c0add71e23d9bcab4afd69e5272509d9a4badaf7daf24a51ce0895a2ca297ad3c0f5479781775b9321576a0c09c29bd9a35aaa18a51c8ed988a1350860131aa9e1e837d7332ff0aea7a3f111a1dc929b7d2497617f0e628f35d5d1824d7e3aea6a0a9555c9b47b7acdb73d7b13e516a5c51b304f3bb36e9e6034fefffadba861ebf2fe76aaf49f73d7ffad724b9ff2f81003830c1fd93eb09b2ab1727fe07991e1fb632f9fb1d9919f0b69966782f9911d33a88e86acab522bc0bedcd04e7f0f281399781d3130ad7dc4ab83575cb0864cec7b511d7ed5c8ed89a4a226a74c53e172c9a7def47b29beb16dfc03e6c53c80b50500",
      "00",
    ],
    [
      "ETag",
      "U2jVos6r1sMyDjkSerhRTA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-36-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "515d4f8330147de75790fa2a094337d4640fdb24d388ba4df7600c593ab8201b70b12d2e64e1bfdb16d8f6d2f67cdcdeded3a3619a649f16117930c9364d7e2b60f5550262a90e2be05526b8dc4a2c38906be5064113e5a6737bffeecf16b775f4f5ba7b29e8dc5bc787f1b875f1f007722a7d4789248e53c8222ef1b7c666c76bada039a81b371ba61bea1b3a4dd4a5d61e279fde259f63a4f9b7b5ef4fa6be473aa9d17b20d746bf6387db15c4c0a008e1fc9a92e10e42f1acc7e6342f33b038562c04de355185ad9c30ac4aca102d495937236b30bc1fba03d71d8deedc416fcf30a422c54255ac3fc8a9bf4041b3151ed4e8a47513d6c236893e07125f8473198f94fe54b1633bb6653b96639393d674a7c0e85170ee3aad05f005433914073d8a4dfa4c66a866162a12c12ad07448e59f3da5a2e38cc6f8071d340a601e020000",
    ],
    [
      "ETag",
      "aG0kOLCP4ydYMjKnaGEUfw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "ff1dcf4b7282300000d0bb646d9d443e4a77c0c080582b4aad7493e1132b061321812638bd7b9dbe1bbc0728aa8a088125a7848157a08b8533afe6095f792825979a9fcb9770ca461b1591aff34d1ab1c8f3bd45a6367df02d6cb71d926b3096adcc125759f4740d6bc425ba966af13e0e8a417c6362ef9fda6a870df3478ca8ceb6f268dab99621ac2d23bcf137b8825d8c8b6e9091c80de78c8f07b5b6457950284e27d85e1caa031aa3ad45e09eaeb95e1a5f1365b56c3ae7a697e62e74f7e9862509fec8599fdfbd4f5a811920eadef444e0e639332cc79981ff2696fa4e9e578f143de9c1ef1f495881b205010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:44 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-37-1595717766871",
    },
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
      "8d546d6fa24010feeeaf20dcd72a5a51a089b97a965e4d14ef10dbdc5d2e645907ba2db0945dda348dfffd760115cea6e9379899e799675e76de3a8aa23e9274ab5e286a40a2a702f2d72f0f3450cfa407388aa467852cab5ffcd6bec5a969bb8e7d0f499cbf4c26551429d10c25590c5d468b1c03bbd8ac7b514e8b0ce59476056177687407236b640c0c633c368d41856510870b923e4a867bce3376a1697b1dbd88d228069411d6c33439d8b5e7732dcbe90360ceb4765a4d6462dac789bfc614234e683ad9ac2b110583dc87049158ca38a2b7c1659bbe4750d28b44f433c18030a645caa5b48a06d33424519197e482e94d1885b9d47cf86d18d4b5bdb0679e82695c24a99fa204ce942de2c8e7af1928d7ee6aa9cc9deb95bb9c7af395e3af6737f672da9bad169ba5b356ee6e6cd756380a6228b1ca44b92cff1cf1532a2ab36d817192969a3ce96d2811deba8ff3774678a090244215833acc37fa633430fb561006060ecde12808fb100466608cd030e8634b077d1b006a3294ca2a3c4a697a3ed2cda13e001f81897dddd287bea55b86dfc70618030b8d2c6bacd6e8dda196979c70b8222ca38cd44d56efdcb967fb9ebb716653cf6ed61da222e65795f276d5ad72b8685053e9472d395194e5840a51e538e78e67bbd39937bf6dc810bbb58008e1d7f593dcae10c50c8e68948b5971c897742b07a33ad3a57d7504979bf2631fc444c49f83ce63392250cebface564feed3c9e58ac562baad9545675edb973e7bbda70eedea7b94571f10ecf736d5633d1ad7bd161d6e2eafcfff5b7d3c8a18ab75acb537f6e6cf797c4963ee97121841c527cccfa89d595c0cafd895324c2f7874122c46d38e4675c98c52bc2ec981de750bd295275be2634fbba3e1eef090530e7a711e3c1681f71721c642e4820e5fb5e5447a26ae4ae25a968c82961325cbc03a71ee2aeb3ebfc031da90106e1050000",
    ],
    [
      "ETag",
      "Oa990uZ/Bln8ERNEhemlrw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-37-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d1",
      "4e",
      "c230147ddf5790fa0a898bb0a1090f53501727220c8d318494ed0ea6dd3adb4e4308ff6edb0dd88b668924beacbdf79cdb937bdbb38dd168a0f7380dd145032de2e5470e6c7db204f1a83663e039115c2e194d39a0a66283c04bc5f6cda7eeb3d37eb1baa49f3de3bb77f7c55b38bd5ec1e2c10a122c791b19c9388a81845cc6af3a6e94798da53801756240499ea4731d360fb058671a9ef86377785345121a6a6438f53ce7d21ba012da367f1609b1c0737de4df24f43a334a31f44617638880411ac0a1eb8cd1370884abc7cb71921168719ab3007829a20a0b78c9689e6146694ba65a6776cbec9c776cd3b62dab6b9b3b3aa10116314d55c57482f6fa820a4cc6f44b8d1859c51db0222c26be1b058a2a97509d90843e55711ca27d6edbfc85e80e7dab5de196bb9951a9acad2a2715c504e6ffa42eaf6485e50bafa75d3e932389e384e6a9a8297ded3d38476c5cbaa16ed37dc71f1c4b960be9859ababe7b3f98f8cefde84771f99d1d4c70b916c0478c4a8f71d0ce324fdbdd8e6d9da29d53afa872a25046152c079d0eb0fc63ddc642e6224c38185be31b4612277a1d050000",
    ],
    [
      "ETag",
      "T1V8WA4Y68lDpWaKkIYLbA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `id` = ? LIMIT 1",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-38-1595717766871",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffc5945b6f9b3014c7dff329107bd9a4e5d6245c2a455d94b28e29973621adba694a0c1ca83bc0d436adbaaadf7d3610026a57f56d6f702efff33bc7f6796a298afa1b27be7aaca82e0eef32a08f1f6e89ab7e961ee028949ede0f9d10b4b9f6e7d6f585f67d7af6e72e361fc6e3220ae7d90cc569046d4632ea013bdeac3b2125598a28216d21d81e18edfec81ce97d5dd73443ef17b90ca2608693df52e186f3941d77bb7b8e4e484818014a31eb7824aeecddfba36e4ac92d789c759b65bba212ebbe5df824221ee29824e3cdba80c818d02dc4084712e390edbb5f9af21d8ce24e28a2efb107c8f34896708956c87824097098d15c5c283d09a330e7ccd56fcda0aead99357594e972b3703eee502ce5769f14c494ed9602cb22ae7c5d2de7ca2e15d56f1003b653aebe592b4b58280970045becef94b172a24c16a78ab2dbffcdecb9ed28c588f3923e308e931ccc416e04351ce12d8769bf728e958414415c3094615bbda7a1bed133ddc0d5bdc0188cdca007ae6bb8fa080ddc9e670e61e8bb80ea0a5cd62ef25122a6a56903037a43844c40431d503034867d642243f3fb3a68e8a817789a3e544b85e7aa9f078a399c62961286cb69ab572bdbb1b6ce6ab3984e1cabde7b80c4284f0bfa66e78d96b818529df6adb1bc204a2926022a3f577be158abc9d4b12f6b18e292cd2044dee3fa4e5eb300450c0ed988a21838d039f1e5e1a8e7cbb5edd8cbc5647650c8efcdf93e9289b09f15eca1a7ba9af398368fba3885c22a31b56ab68d6e9a2a9728ca5e91b92fcd6abfa1d17a45edbfd28dfe81577efd6ad5c455b1304a2cf56263adae656eee939e15044021f10ee5def1746462e17ec73e14e1fbed2433c482aaea332ecce2157bec50dda350bc691c97bde682466f34302b419148f9cb8891a9ed235e6c28590b6248f87e16c5a62a06f9dc40ca6a38799a0c176f70612fce72f8d673eb2fc5487b2766060000",
    ],
    [
      "ETag",
      "0Z7ooaUYdMEYQ6JCGzqm9w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-38-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff4d515b6f8230147ee75790ee75241223b8253ea8639b096193cda7c5988a878b030eb645630cffddb680fad2f6bb9c9e9eaf17c334c97f56eec8ab49b65972a8819d9f12104b750881d7b9e072abb0e4409e951b044d943b3d6ed337df3e9ce6ce70f9f51e0cf260709a4e26ad8b47291454fa2e12491c6790efb8c47f1a9b1dafb59216a06edc6c986ea86fe83471aeb4b6087ebd0f2f7c940adc692958f9fe74e67ba4931abdafe5dae8a7ec711b420c0cca08ee0faa18ee21120b3d39a7459583c5b16611f0ae892a6ce584615d51866849ca1a8e2d7bf432726dd7759cb16bf7f61c232a322c55c5ea87dcfa0b14340ff1a4a627ad9bb016b661f45190f8219fc784a4746c8b6f54d39dd6468fd6f766b3b300fecd50cec2414f30207d147354a30a95846035683aa2f2b73e33d17146635c018517d93d18020000",
    ],
    [
      "ETag",
      "hvbhDL1qwC63QOFN0lN0wA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000000000002ff1dcfe17243300000e077c9efea4d2d37d93f8a72c570f4d89f5c2a618c50d211bdbdfb7afbdee07b0052966c9eb118be1907ef409203da97fbf3a09b6accacb8417ee75a2f0b3486910a445fdbe2ed324679cd17293daca7d74acd695ff9e1f1ce8aaf9a6f7625b5d4744aeb66d24ba362a5358c72d448c7072c437df636512c2e716fd621ec87d9ee394cbad3a7a8a819f8eb04f30f16b63415583677a88e7a80d4a487348b32dbe3e4879f331e9c1411100daece211eb6abace350a04045514a94239bcd843bda027680ad6333b11937cf990611da81ff26167264cfabc9c8c426f0fb07c93f354105010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:45 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-39-1595717766871",
    },
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
      "8d",
      "54",
      "db",
      "6e",
      "9b",
      "40",
      "10",
      "7d",
      "f7",
      "57",
      "20fa1adfe20b2692d558364991629c629ca8aa2ab4bb0c64136009bba4b222ff7b7701dbb88ea2bcc1cc9c33672e3bef2d4dd35f681ae8579a8e69f45a40befdf6ccb07ea13c2050a43c8bed207a9a2536c719dbdc6f46935b305fa3e9b48aa2259aa3248ba1cd599113e0579b7527ca5991a19cb1b6246c0fcc767f648e8cbe618cc713a35f6139c4e11d4d5f14c3931019bfea76f73a3a1163510c28a3bc435872b077df2ebb59ce9e8108de3d4ddb959978f7f3c4df634690a02c9d6ed695888243ee438268ac641cd101be3ea5ef5094742219fd4609204258910a25ada2212c0d6954e425b9647a9746692e351f7e1b067d6ddd59734f232c2e92d44f5102175a8004f2c53603edc65d2d35dbb959b9cb9967af1c7f3dff612d679df9ea6eb374d6dae30fcbb53481700c25569b6ad7e59f237f4a4565b600b8a069a9c953de8612e9adfb687f30c203852291aa38d461bed11ba3fea467e2101b249c0c4638ec01c6136c8cd000f788398461800135194a65151ea52ced0f70680663e2231c4efc613006df2478e01b2642e6d8448061a8d7e8dda196bf3915b0a03c639cd64dd61f5ddbb37ccfdd38f3996735eb0e51118b45a5fcb4ea9372846c5053e9672d395394e5944951e5386dc7b3dcd9dcb31f1a32e46edd4184c876fdaab62b443187231ae5725602f2250bd4607467b6b4164770b929f7fb202e237e1f741ecb91816afe652d67f33fcde3c9c53a6945359bcaaaaf3dd7766ef58673f731cd038a8b0f78de6ab39ec96e3dc90ef313aed6ff5f7f5a8d1cba7cabb53c",
      "fde7c6727f296ce9531e1742c82125c7ac5f585d05acdc5f3845327c7f181442de86437e2ea459be22c28fd9490ed59ba255e76bc2496fdc33477b4209ccc579c4e5e521e2ec38a85c90402af6bda88e44d5c8dd89a4a221a784a970f90e9c7a88bbd6aef50f650eb560e1050000",
    ],
    [
      "ETag",
      "Dy3ghAmIsbpoUPU58Ge9qg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-39-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d1",
      "4e",
      "c2",
      "30",
      "14",
      "7d",
      "df",
      "572cf5d191b0201b98f0808a3a038830138d21a46c7763b8adb3ed3084f0efb6dd90bd689648e2cbda7bcfb93db9b73ddb69ba8edea3d447973a5a46e1470e747b16027f929b29b03ce64c2c1949192043b281e350b29df315dc6ede3baf37ad9731df9a6bc77e1885bd5ec162de0a122c783b1189388820f69988df54ac977985a5380179a247e23c49172a348e30df660a9eb953677c574512e22b64fc3c1cf6af860354427be367111f73bc5047fe4d42ad73ad14436bb29c420014520f8e5d6794acc1e38e1a2fc349164383919c7ac04a115958c02125798629210d916ab4ba0db3dd6ddba66d5b56c7360ff498789847249515cf33f4adcf09c7f1947cca1123abb8035a84c5c40fa34041e512aa1312d04616473efaceed8d5f88ced8b52e2adc7237d72a95b555c5a4822886c53fa98b2b5961f1c2eb6997cfe444e2382179ca6b4adf0e1ffb276c5cb8a16ed3377d77702a59c685176aeabace683073fba3c98fe2e23b3f9ae06acb814d28111e63a09c65362f3a6ddb6aa28353af8974229746e5340795f6b0f863dd475ce4021c33d0f6da1798512ba71d050000",
    ],
    [
      "ETag",
      "I+heFvk8YD3XNty1jI7JMg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` = ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-40-1595717766871",
    },
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
      "00000002ffad545f6fda30107fe75344d9cb2615485a204925d421a05b240a6d08adaa6902c77152b7499cda4e2b54f1dd67c70182caaa6ada5b7277bf3fbeb3efada169fa13ce42fd5cd3031c3f1788aebf3c92403f9119c4412c3397c3fbf01a39c45f17a3012a38b881cfe96bbfafaa70896620cd13d464a4a010b1f3c5bc155352e48012d21484cd8ed134bb4ed7322dabd7b32d5361194aa209ce9e24c303e7393b6fb7b73e5a31217182408e590b9274176fbf9cb6734a1e11e4ac7d28db164aacfdb1f0454220e09864fdc55c992818a24b94029c481b7b74187c3fa46f6190b66251fd822102109222e3d29aa281248b705cd0925c30bd89a008979e77bfb5803e1f4fc6435f1bce1653ffeb0aa4926ef54d034c5b2e296245c2b54b6f76a5ad72a1fe0018622bedeee7d81b8b0825114ed012872badaf5d6883e948dbd7a9d8c4bd727d4d35ba140e11e3382bedf9204850cd94c8562d758f4c7347214900170a55d9d2327ac0b40d2788020b46f65937880c1404766075c1596040a7833a6180409d814b6d850719c950d731420738a6053addb3d08081dd83b6c058c081e0d4ec8520324456af1836bbf3bc52ccd108b39c305cf55cbff35c7fbcf4bdc57438f0c7f5b347403474a4dc1f9efce0485c34a9eef6a3b6bc7394534c84a972baeed41f7b83a1efded66c88ab36413180ebf9b3bc6c114818daa3010529e2885e91500e47bf9ecd5ddf9d4d07933d43797baeb7954c94fdda99dd9fa9cee6aff3c351ab29a8a8b4d9ebe8b5dce6e428cb2d488a23342f5558370f381a47d8fec5dddcf7dce98fff606f908bc1fdc562f5f5bb51e3d7c5eaa8ace9378bb1772fb1654e663c14218a32b857fcc4f3914095fec46614e5db3d25116255edf4191761f19221dbab438ad4bbc6a99a8622b48d9e73666c090590f2771596796a6f2bdeed2aa9855294f16d2fd4ce528ddc1c582a6a764a982c17ef705a0d70d3d834fe00a7663c9b70060000",
    ],
    [
      "ETag",
      "FCYdPe9oTyuDAeutaQcqmw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-40-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff4d515b6f8230147ee75790ee7524b2a86c4b7c18866c26860ca64f0b31150f17071cd6963966f8ef6b0ba82f6dbfcbe9e9f97a364c937ce5d5813c9b649fa7df0db0f62e0511a84308bc2904975b8d150772afdc2068aadcbf3ecd8236dc04532f59baee5f36cf8ede69b1e85d3ccea0a4d2779648e22487e2c025fed4d81c78ad55b40475e36ec774437dc3a089b6d6dacadf78af5e782b9578d092bf5daf5fdcb54706a9d37b24d74e3fe588fb10126050c5707d50cdf008b158e9c9392deb022c8e0d8b810f4d54612fa70c9b9a32444b52d67462d9b3a799633bce7cfee8d8a3bdc0988a1c2b55b1fd2097fe02052d423ca9e949ef26ac877d18631424b9c9e7362129fda8e20772a1bae11419238aaecddc56007f672867e1a0279890318a25aa51854a42b006341d53f95b6fb91838a333fe01fe2bdc7118020000",
    ],
    [
      "ETag",
      "xNahQyRTQ4EfCBBzh6hjEw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "18",
      "00",
      "e0",
      "77e9b5988e4318bb1308ca10442113b921587e322c9472105b97bdfbccbe37f87e5049084c5331f71418fa40b254ad355907fdbbfd76043e64f751a1f13d2c62312437880a73aa547fb1378938d128df1df61af1e687fe698ace1d75ed7aa9784b04033f689869fba6c105736adc059263b96c682f335c7729eeafe53e1bca00684ad3907843446858d3d383b07c9913f39c0bc9be33db73f53aacce9e927a87adeb707963bea4728931a899a75c7675bd35b15fb40fd62a4770f0d35607c3faf2d10a81e0cd0853d1bc669a61592bf4df2c66c9e175b5a11c6144bf7f5cb13fcf05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:47 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-41-1595717766871",
    },
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
      "8d",
      "54",
      "5f",
      "6f",
      "9b",
      "30",
      "107fcfa740ec714d489a10924ad11aa574cd9690959056d33421db1cd42dc1149b4e5595ef3e1b48024b55ed0deeeef7e7ee6cbfb5344d7fa249a05f683aa6d1730ed9eba74786f5339501812295593c4d85b7fe0cdf72bcf466e43b5e2d8cec763229ab6881e6689bc6d0e62ccf08f08bcdba13652c4f51c6585b12b607bd76cf1c9b56cfb286c391d52bb11ce270419327c5f02044ca2f0c63efa3133116c58052ca3b846d0f71e3e5dc4833f6084470a3296b48256e7c2cfc25660409ca92c9665d9ac839643e6c118d958d233ac0974dfa0e45db4e24ab5f28014408cb13a1ac95348425218df2ac20974c6f3228c385e7c36f2da0afed853df334c2e27c9bf809dac2991620817cf19a8276edae96dadcb95eb9cba9375f39fe7a76632fa79dd96ab1593a6bedfec6766d4d201c4381d526da65f1e7c89fc251a116001734293c792a5b7322b3d51ce7efacf040a148a42b0e55996f7587a837ea8e71882d128efa260ebb80f1085b26eae32e190f601060407586c2598947094bfa81d90dc7c1b93f00d3f40738203e0a10f8bd1e0e47241cf6cd60ac57e8dda1973f1915704579ca38ad86acdfbb73cff63d77e3cca69e5def3b44792cae4ae7cdae1bed0839a0bad38f4672e228cd2893a68a75ce1dcf76a7336f7e57b321cfd60222445ed7cfea748528e67044a34cee4a40b664815a8cee4c97f6d5115c9c941ffb222e2b7e1d7c1edb91856aff452f27fb6fea78f260354651eea68cea6bcf9d3b5ff55a72f73ecd1d8af377785eaab09eca693dc809f30657ebdfafdfad9a862eef6a654fbfddd8ee4f852d722ae342081924e4a8fa1f475701cbf47f3c45b27cff3028847c1b0efa5cc8b0bc45841fd54906e59da2e5e42bc251",
      "d71af6477b4209ccc469c5d83c489e3c0e4a0bb69088fd2cca47a21ce4ae6129afd92960aa5cde03a75ae2aeb56bfd0548821fe0e1050000",
    ],
    [
      "ETag",
      "LkAtTS+eJubMTCcKbOL/rQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-41-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "51",
      "4f",
      "83",
      "30",
      "10",
      "7e",
      "e7",
      "572cf5754b243250933da0ceb9659bca30319a65a9706c2870d816cdb2ecbfdb16e678d190b8c417dabbefbb7eb96b3f3646ab45dee22c24e72df2122fdf0b60eba325887bb5f1801789e072c931e340da8a0d822e151b474f0cadc76cf231f226a3c7f8c41adc166eaf57b278b082944ade4646328e6248422ee3671db7aabcc6329a823a31c0a448b3850edb7b58ac730dcf7c6f381dd49114438d4c1fc663f762dc2715b46dff2c12524117fac8bf49e8756e5462e4155f3c88804116c0beeb9ce12b0462a8c7cb699a27d0e158b0007825a20a4b78c9b0c82943ecc854c7323b66f7aceb988e63dba78eb9a32718501163a62a1e66e45b5fa0a089879f6ac4c42eef80956139f1dd284854bb84fa8424f4a18ae3907ce7b6ed5f88c3a96f5b356eb59b1bb5cac6aa7252519cc0e29fd4e595aca87ce1cdb4ab677220719a62918986d2d7e35bf7808d4b37346dfacaf5fb8792e5427aa1a1ae3f9cf467be3bb9fb515c7ee77b135cac05f03b86d2631cb4b3cc63ebb4ebd8c764e7d44b544e14caa88215a0d301957fac9b58c85c44130ec6d6f802f187bd601d050000",
    ],
    [
      "ETag",
      "oJZro4XnMvJRMJXi34GOuA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` = ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-42-1595717766871",
    },
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
      "ad",
      "54",
      "6d",
      "6f",
      "9b",
      "30",
      "10",
      "fe",
      "9e",
      "5f81d8974d6a0249794ba5a88b5ab6a1a5494b48bb699a12630c750b9862d3aeaaf2df67639210359baa69dfe0ee9e17dfd9f7d25114f51ee7917aa2a8214e1e2a543ebfbb23a17a243288814464d8b75f336771ab7d85b8183ef9e98c5cfb3757a391acc2359a82ac48519792aa84889e2ce6bda42455014a42ba9cb06b0cba7d7368da7ddbb62cc7ee4b2c45693cc1f9bd60b865aca0279ab6f1d14b084952040a4c7b9064dbb8f638d08a92dc21c8a8b62fab7125aafd5df8342510304cf2d1622e4d5414954b94019c0a1b3b74147edca7ef6190f5125efd88210210922a67c29aa481248f7152953539677ae1411eae3d6f7f5b0175ee4edcb340399b2da6c1fb15c804ddea8302a8b25c96885629533ef9b30b655570f55b40115d29375f5cdfe59192c438454b1cad949172aa8ca7e7caae4ec626de851728b2d1b5708428c3796d2f00618a5aa678b669a977609a5b0a4102185768ca96b66e81bea30fc338b461ec1c9b61aca3307442db04c7a10e870632a21081360313da120f72921f3b7a680dccc80a75cb320d140dec61684067d0b7224737a13934a0c107a7360cebed799e4accd039a605a1b8e9b97ae37b81bb0cfcc5f46c1cb8edb3c78037f45cbadf3ff9de91186f52dbeddfdaf2ca515162c24dd5d3f5a681eb8fcf02efba65835fb5094a007c9e3f88cb168394a21d1a9420430c95172412c3512f67732ff066d3f164c750df9ecb4d25e5653fb66677676ab305cfc5fea8e5146454d8b40cb5955b1f1d64b906697580e6b109abfd3d8ece01b67f71370f7c6ffaf93fd803051fdc1f2c365f3f3b2d7e95af8ec6",
      "9a7ab570fdef025be744c647312a510e778a6f783e0228d36fd88cbc7cb3a70482afaaad3e653ccc5f32a43b755822f9ae7126a721091dddb1fac68690034bf6bac2b6079b8a57bb4a68a10ce56cd30bb9b36423d77b96aa969d1a26caf93b9c36035c77d69ddf40235da470060000",
    ],
    [
      "ETag",
      "tXxO8Uh/Kcip9wRlOoVRWQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-42-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "df",
      "6f",
      "82",
      "30",
      "10",
      "7e",
      "e7",
      "af",
      "20dda323198bca5ce2c35ccc6666dcc4f9b2c5980227e28063edb18518fe77db02ea4bdbefc7f57a5f8f966db39f248fd8a3cd8224fe2d41543731d0521f7c90654a526d05e612d8ad7603f158bb97fd6adf1bcdbede24cf4b31f26915bcf7e2f1b871c9700f1957bea3420aef124823a9f0b7c176cb1b2de719e81bb75b611a9a1b5a8daac268b3c5e7f465ea5f4b1946465aace7f3a7c97cca5aa936fb46adb579ca01031f7620200fe1f2a042e001429a99c925cf8a141c89a50841b64d746123c702cb820b4447514effde7107a381e77ade70f8e0b99d3dc5905382b9ae58afd8b93f21f1d4c77f3d3d6bdc4c34b009a38b82edaef2b94e48497fbaf88e9da9ba3d6dac0e6d2ecd261581fc10a866911035955d14cfa847259d0489120c1d72f55baf09b59c555b27e4ca0d5918020000",
    ],
    [
      "ETag",
      "Q4yh+9IZKsanur9RtSbO+g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000000000002ff1dcf4b7343400000e0ffb2e7c81004bd215e4d2b4557521783ddf18a4a76d7b3d3ff5ed3eb77fb7e40561498d294f52dfe062f60c90edabed89f7bd5100214c76f8382f45a3f1367b42e72fb7e983c2533051e4ae640f398ef58eedfe235aa8e39946c6bba5995fee9e8de8210822e0e7c18bb2d4146277fcd966d734b2a638b4c0e59d4a011c3960c57dfeb9efdd596372a3c6e4dd04811232769c66a1ba966a3e7624f5cb3bcb32094e95c2b65c279e1a41c4f7650dd099f540911c612b2e6c3502f51fb8a8af5d943b003787ed404d3b4de66a2ac693bf0df4cd9f2c0dbd5c019c104fcfe013079ce5505010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:49 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-43-1595717766871",
    },
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
      "000002ff8d545d6fa240147df75710f6b58a880a36315b63693551ec22b6d96c3664182f745a64586668d36dfcef3b03a8b0364ddfe0de7bce3df76bde5b8aa23e9364ab5e2a6a40a23f39646fdf9e68a05e480f7014490f9e3d60d4bf4db519336e8d64f297df3d46afe37119450a3443bb348636a37986815d6ed69d28a3798a324adb82b0dd37dafa60343075d31c0e2d532fb10ce270419267c9f0c879ca2e35eda0a313511ac58052c23a98ee8e76eda5a7a5197d02cc99d64cab894c4cfb3cf1f79862c4094dc69b7529226790f9b0432496324ee86d70d5a4ef10b4eb4422fa85604018d33ce1525a498369129228cf0a72c1f42e8cc25c683efed60ceada5ed8534fc134ce77899fa01d5c285bc491cfdf52506edcd552993b372b7739f1e62bc75f4f67f672d299ae169ba5b3561e66b66b2b1c0531145865ac5c157f8ef8291415d9b6c038490a4d9ef4d694086fd5c7f907233c524812a18a4115e69bdd21d2adee2808031387963108c22e048115980364045d3cea437f1b00aa3314ca4a3c4a6832c0db6034d4bbfe400f75bf6f42cfb72cb3eb5b43648035000302ac56e8fdb196d78c70b8262ca58c544d561fdcb967fb9ebb71a613cfaed71da23ce6d7a5f266d58d72b868505de9672d39539466840a51c538e78e67bb93a937bfafc910bbb58008e1b7f51fb95d218a199cd02813b3e2902de9560e4675264bfbfa042e36e5ee10c444c4afa3ce53392250cebfa8e56cfecd3c9e58ac462bcad9945675edb973e756ad39f71fd3dca338ff80e7a532aba9e8d6a3e8306b70b5fefffaddaae550c5ad56f2d41f1bdbfd29b1854f7a5c082183049fb27e617525b0747fe12912e187874122c4db70cccfb8308b2bc2ec941d6750de14293b5f118aabe819dd03a10066fc3ca2dfeb1d22ce1e07990b7690f0432fca47a26ce4be2129afc92960325cdc81530d71dfdab7fe013d1598cde1050000",
    ],
    [
      "ETag",
      "cHWca4Gp/Hs3G3nAztPhgw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-43-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ffc5545d4fc230147ddfaf20f51512a7b0a9890fa0284b00154662620829dbdd8776eb6c3bc862f8efb6dd80bd689648e2cbda7bcfb93db9b73dfb325a2df411a73eba69a1751c7ee6c08ab310c48bdacc80e74470b96434e580da8a0d02878afd7831ddbc6e9c2220d13618797e64ce231edede962cee459060c9fb92918c831888cf65fca6e35695d7588a1350277a94e449bad261fb088b22d3f0dc9d39d3c73a92505f23d3c578dc1f8c87a88276ed9f457c2cf04a1ff93709bd2e8d4a0cbdd3f50c0260907a70ec3a63f41d3ce1e8f1729c64043a9ce6cc035e89a8c2120e19cd33cc28edc854a77bd9317bd73ddbb46dcbbab2cd3d9d500f8b98a6aa623147077d41052633ba552346567907ac0ccb89ef478182da25d42724a18d2a8e7d74c8eddabf109da96b756bdc6ab7346a958d55e5a48298c0ea9fd4e5954458bef066dad5333991384e689e8a86d20fe3a7fe091b976e68daf47ddf1d9e4a960be98586baae3319ceddfee4f94771f95d1e4d302804f06746a5c738686799e7ddab9e6d9da3bd53efa872a25046152c079df6b0fc638d62217301261c8c9df10d29580fd11d050000",
    ],
    [
      "ETag",
      "G2NvXvIyflhwfHcdh1Shsg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `date` = ? LIMIT 1",
        types: ["INT64", "DATE"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-44-1595717766871",
    },
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
      "a5",
      "94",
      "5d",
      "6f",
      "da",
      "30",
      "14",
      "86eff9155176b34905928610a8843a06748b44a183d06e9a26b01d27759bc4a9ed74eb2afefbec988fa0b2a9daee92f3f19ec7e7d8e7b96618e63dc942f3cc3021891f0acc9ededc51689e280f1620569ec1cf30fa955d40f74b10f6e907fb66683dd07eafa7a34899cd419a27b8ce69c110e6678b792366b4c801a3b42e05ebad56dd76bbae677b5ebbddf16c9dcb71128d4976af146e85c8f959b3b9e568c494c6090639e10d44d39dbdf978dacc19bdc348f0e661d9a6acc49b7f2f7c9e500404a1596f31d71005c76c8953401285b1cf0ee1fb43f90601692396d18f046180102d32a1d0b40ca25944e28295e252e9591aa5b964defd560ce67c341e0d0263305d4c82b72b902ab9d53b037063b964981789302e66d34b6395cbeab78063be326e3e8d662369613422095e927065f48c73a33f191ac62a0402ebffb17fe907866e725934c45c90ac440b004c7005487a37edf48f4c7227a1448090149bb0a567b581ddb1ba30821e8a3a8e0b230b43d8819e0b1c68a16e0bb74288415541a8da3a1f6434839d08b6a1d3c51e6ab580e3220b77da56378c5ccb723cd741210a431b44e64661bd3bcf0f46041e129e534e36fd366f667e305a06b3c564d00f46d5b347403673a8e90f4f7e7024219b54a5fd5b5b5e10e58c5009554ed69f04a3597f10f8d7150c79cdc63806e869fea02e5a04128ef7d98081140bcc2e69a886635e4de77ee04f27fdf15ea1bc3957db482ec3beed60f767aaaa054ff9e1a8f514b45561b65b66c5b73e39aa720d92e288cce3c66cda071ab5236aff42375443fc7fb853ebd4aa5ba77209fc8172f3f5bd562962cacdb1a1333f2f46b3af2ab7f429cf0c4798e10cedcbbe",
      "e205a944ed7ec56294e1db35a532e4a6dad5e7429ae563467c5f1d31ac9f3649f540b460c7b66cdbd90aca44265e46384e771bf16255a95a38c599d8f642af2cddc8f5015251c129d354b87c8a137ff2b184afad6bbf01b122ad626f060000",
    ],
    [
      "ETag",
      "CxdfznFb5XTdAoB1WD0qoA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-44-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff4d51df4fc230107edf5fb1d45797401c4c4d78005c9484a00e31318690328e39d87ab3bd4908d9ff6edb6dc04bdbefc7f57a5f4f8eebb27d2a36ecd165eb34f92d411e6f12a077738840951929bd152814b05be306e2897127b92f86f424f6e1e79d0fe375e7753efa3a0c06b54bc53f9073ed3b69a4f136856ca334feb6d86d78ab099e83b971b592b6a1bda1d1e858586d32fb089fc3e85aca7163a5d9623a1d8ea6216ba4caee4bbd56f6293b5c47b005092286cb830a893b88696227573c2f32f014963206d5343185b59c482c0b2e113d4d79beef757b0fbda01b04fdfe7dd06ded19c69c5214a6623167e7fe84c4b3080f667a56bb99ac611d461b05db5ee5739d9096feeae2335535a7a5d3a2e5a5d9e848a0de24ea5914d8093aac8d628c66543249902cc1d231d7bff59252c33995f30f3cdc951e18020000",
    ],
    [
      "ETag",
      "gm4nAtDnkEV34eCb0OSBYw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "2d4e09a190eee423b56a809401e9268321064644042b904eef5ea7ef06ef07149c8b6160f7eb59b4e00dcc05c44bbedc5e6d478f4f5f86c0ab4caf667528db170341d945e64964c8227689f6354bb9917379ce5dcfd736479710ab4415ce909a0db76f8d8810ea6b511e1e46f65e69235d55cd652fbb07de5af27619d5a66a864fe48c5c45e183d87eba4ea92e71e146c90ed73d471e7aa58a866bc8cc1d8d9579fc2e8815c8e943260e696aa57b76ec07f01634102ae94e69a08577ac55c90816404c5ddd8b81d5cf996162bc00ff4d769f3bf1bc3aa2e8450f7eff0001d1c50505010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:50 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-45-1595717766871",
    },
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
      "000002ff8d545d6f9b30147dcfaf40ecb509244d02548ad62ca55ba484ac405a4dd3846cc750b704536cda5555fefb6c431258aaaa6ff8de7bce3df783fbd6d134fd91641bfd42d321499e4a5cbc7e79a0503f931ecc41223d3e18dff8867f0bdce9df6fb4a4d3857373f73299545144a119d8e629ee325a1608b38b75d04b0a5ae6a0a0b42b08bbc351b73f724656dfb2c663dbea575886d37841b247c970cf79ce2e0c63afa397509aa418e484f510dd1eecc6f3c0c80bfa801167463bad213231e3e3c45f538a0027349bac834a44c97011e12d20a99471446fe0659bbe47c0b69788e86782304088961997d22a1a44b3982465a1c805d39b300ab3d27c78360c7ae02edc59a8219a96db2ccac0169f691bc041c45f73ac5dfbaba536f7ae57fe721ace575e14cc7eb8cb696fb65aac975ea0ddfd707d57e300a65861b58976a95e9e7828452adb06334e32a52994de8612e1adfb387f6784070a492254315c87459639067ddb74600c2d14dbe723189b18421b5a23700e4de40cf170033168322865151e64341bf787f600c671648d1c2b1a0ea01d39fd318a86f6c61c9963135a00e9357a77a8e5a5201c5f11965346ea26eb77fe3c74a3d05f7bb369e836eb8e4199f2ab4a79bbea56395c34a8a9f4a3969c28ca0b42852835ceb917bafe7416ce6f1b32c46e2d7002d06bf024b72b0629c3473428c4ac382e96742307a37bd3a57b7504ab4df9b90f6222e2f741e7b11c1128e7af6a39997f3b4f2816abd58a6a3695550f427fee7dd71bceddfb34b7202ddfe179aecd7a2eba752f3acc5a5c9dffbffe741a3974f1afd6f2f49bb5ebff9258e5931e1fc7b8c0193a66fdc4ea4a60e5fec42912e1fbc32011e2361cf2332ecce22f42ec981d15b8faa748d5f99ad0ee9bf670b02714c0829f4638d6f93ee2e438c85c788b33beef457524aa46ee5a92ca861c0553a77aed79f510779d5de71fa0e3723de1050000",
    ],
    [
      "ETag",
      "Ra6QR/RVaEAxBouoAL9QWw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-45-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffc554d16ac230147def5794ec5599826dddc007dd7413d469ad633044627b5bebdaa64bd20d11ff7d495ab52f8ec284bd34b9f79c9bc3bdc9e95ed375f411261ebad7d13a0c3e33a0bb9b00f84c6e6c6059c499585292304035c9068e03c9cede4c0a63766b051e33da83dba0bdf55f679d4ece62ee06622c787b1189d80f21f29888df55ac17798525380679a24ba22c4e562aac9d61be4b153c77ece1e4a98cc4c453c864311a757ba33e2aa043edb28887395ea923ff26a1d6a55688a12d59dbe00385c48573d729255b70f9508d97e1388da0ce48465d6085882ccce180922cc59490ba48d55b46bd69dc1956d3b24cb36d358ff488b898872491158b393ae973c27164936f396264e67740f3309ff87114c82f5d42794202fa92c5a1874eb943ed17e270e298ad12b7d82db55265655531293f8c60f54feae24a3658bcf06adac533b992388e4996f08ad283d14bf78a8d0b37546dfab1ebf4af25cbb8f042455d6738eecf9dee787a515c7c976713f4761cd89412e13106ca59cd46ab6d5866031d9dfa40a413b9342aa719a8b48bc51feb39e422e7e3888176d07e0054eb27b21d050000",
    ],
    [
      "ETag",
      "uX6reMs/7gds58F/g8jfVQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `stamp` = ? LIMIT 1",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-46-1595717766871",
    },
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
      "ad94db6e9b401086effd1488deb4526d4ec6604b566ad9b4a1f221b171a2a6aaec0516b209b0647749654579f7ee820fa0a45154f5ce9ec33fdfccb0f3d49224f91e65a13c90641fc50f0524bb0f77d8973f0b0f6420169e71aca2950fbe4f3294de5085b9e737eaee7238aca250994d419a27b04d7141024807eb552726b8c801c1b8cd05dbdd5e5b33fba6a55956af675b5a954b61124d51762f146e19cbe940510e1c9d18e338812047b413e0f468571e752527f80e068c2acdb20aaf4495b70b9f2538000ce16cb85e5510058564035380128171ca0efd2f4df90e026927e6d18f288020087091318156c904388b505c90529c2b3d71233797ccc7bf3583bc72a6ced893c68bf5dcfbb805a990db7e920095361b02699130e9eb723193b639af7e0b28a45be9fadc593adc42708412b841e1561a4a67d2683e91a42d651cb7324cdd99eb49d594cbaa21a40c65259b07fc04d688b8773f4ff795551e258408601c631fb6b1d41ed06cb5ef47be1544b661fa910a7ddff62d1318be1af4bbb01bfa10d41598a85de5830c6761df8646a8693acf0e0c60a9966feb46649ab06b464668043dd00bcd6e57de2b3c1ffbf94d10831344734cd17ee0f2f5d2f59c8db75ccfc723cfa9f71e013ecd4945dfecbcd112e343aad3be359617443941984395ab75e79eb31c8d3df7aa86c1bfb3298c41b05b3d882f2d020985a76c40400a1924331c8ae5c8178b95ebb98bf9687a52283f9d8b4324e5613f8fb0a79eea6ade2e6faebada42651598bde36c1bdd3455ae4052bc22f3b837cb5a43a3f58adabfd079eecc5979a3d9c57f20d4555d6dab3a3f059ea60f3463a0753baaaadefc057cffeb57ab5652e6d7640f2c5fae9de50f915bfa846709234860169c20def1a84462e57ec7b1e4e187d32532f8f53ad6e70f9f21febe037aaa1e1058bd7694563baa046d4db374fd20c813097b19619bc621e2c5f912b5600a3376984575c6aa41",
      "3e37908a1a4e9926c2f9eb9cbbf36f257cebb9f507a3c45b5c83060000",
    ],
    [
      "ETag",
      "Cg0iSbaJDnimZs/tIHZ0yQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-46-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff4d515d6f8230147de75790ee9191cc4d612ef1611ab39910b221ee618b3115af0c075cd6961162f8ef6b0b282f6dcfc7eded3d3d1ba6497e92fc409e4cb24fe2df12587d13837857870078990a2eb702730ee456b941d058b9c34fcb1a5b8535fda826a1f3706fb995bfa866b3d6c5a36fc8a8f49d2592f898407ae0127f696c76bcd6729a81ba71b763baa1bea1d3445d686de587cb97653094323c68c9df78def3dc5b924e6af4be956ba39f72c27d0047609047707d50c1f0049158e9c939cd8a146c8e258b80774d54612bc70ccb8232445b52f6d8b14793e9c41db9aee33cbaa3de9e62444582b9aad8acc9a5bf4041d3002b353d69dd84b5b00da38f821c07f90c1392d25f5b7ca19aeeb4357ab4bd369bd702f81b43390b073dc11de9a358a01a55a824042b41d31195bff59a888e331ae31f7a62854218020000",
    ],
    [
      "ETag",
      "TZ++4+p+9Vw5T632+7wNCw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "08000000000002ff1dcfdb6e82301800e077e9b59ab2ce507647a5801d87c9717243a0fe5150012bdb2066ef3eb3ef0dbe07aaa484fbbd1cfb3374e80dcdd58bb192abf79e326d07fbccba7602aad4896a91e78429e15b86e9a594431b1689b6a6501feca56346f4e4f7c1b97683ad5b0a323919c322c9dd13192af1aaa69d8a9bd42a9a4f9d476092af746be3363a707acbae9a082acc729cfadf5d01d3f2127726f0c1547bcf275cc24df7c94f6785059959729498ebf9d0d08c918dedcb4b772c9291367a1bca0f656fc2d18b6319e5182d104c43a3e05e36cf19591bc602fd37cb711ee07965502950e8f70fe194147605010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:52 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-47-1595717766871",
    },
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
      "000002ff8d546d6fa24010feeeaf20dcd7fa4655b489b91aa5ad17c516b1cde57221cb3ad06d81a5bb4b9ba6f1bfdf2ea0c2d934fd0633f33cf3cccbce4743d3f467926cf50b4df749f892017bfff1447dfd4c7940a050797ec5cbe7287a3066cc726fb3eb6b2bbab3e16e3c2ea2488ee6284e2368729a310cfc62b36e858c66296294362561b36736bbfd51dfec9ae6603034bb059643142c48f2ac181e8548f945bbbdd7d10a290d234029e12d4ce383bdfd6ab453469f000bdeaea76dcb4cbcfd75e29f11c548109a8c37eb4244c68179102312291947f4d6bfacd3b7088a5ba18c7e251810c6344b849256d0609a0424cc584e2e993ea4519a73cd87df8a415f5b0b6bea6a9846599c78098ae14cdb22813cf19e8276e5ac96dadcbe5a39cb893b5fd9de7a7a632d27ade96ab159da6bede1c6722c4d203f821cab8db5cbfccf963fb9a23cdb16b82049aec955de8a12e92dfb38ff6484070a4522557128c33cb33340dd6167e407be8983e179df0f3ae0fb43dfeca373bf83473de86d7d4055865c598147094dd0c8e86f21187a8311c65e6f60f8de081b86d7eb42df18064167d001bd44ef0eb5bc31226046784a39299bac3f3873d7f25c67634f27ae55ad3b4059246685f27ad5b572846c5055e9572d3951943242a5a87c9c73dbb59cc9d49ddf5764c8dd5a4088f0fbfa456d5780220e473462725602d8926ed560747bb2b4664770be29b7fb202e23fe1c741ecb91816afe792d27f3afe771e562d55a51cca6b0ea6bd799dbd77ac5b9fb9ce61e45d9273cafa5594f65b71e6587798dabf1ffd7df4625872edf6a294fbfdb58ce6f85cd7dcae340000c127cccfa8dd555c0c2fd8d5324c3f7874121e46d38e4e7429ae52bc2fc981d3328de14293a5f120ebb863132f68412c8c46944cf18ec234e8e83ca05312462df8be248148ddcd524651539394c85cb77609743dc35768d7f1fae59bee1050000",
    ],
    [
      "ETag",
      "JmMkllW2DrETPuGGElQNeQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-47-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d1",
      "4e",
      "83",
      "30",
      "14",
      "7d",
      "e7",
      "2b",
      "96",
      "fa0ac9881b4c131f50a72ec139197b3066592a5c3666a1d816cdb2ecdf6d0bdb78d190b8c417da7bcfb93db9b73d6c8d4e07bda7798c2e3be82d5d7e94c036674b10cf6a13002f89e0722968ce01998a0d022f15fbe5f323766f7d3fb5d9fbf9f3cb80e1f026f2aeae2a168f569061c9dbca48c6490a24e6327ed571a7ce6b2cc719a813234aca2c5fe8d03cc2625368781a06a3f17d13c968ac91f1ccf7bd6b7f886a6867fe2c12638117fac8bf49e8756ed462684ddf024880411ec1b1eb82d1354462a4c7cb715610b0382d5904bc16518515bc64b42c30a3d49229abe75a76ffa2efdaaeeb3803d7ded3098db04869ae2a665374d017546012d02f3562e45477c0aab09af87e1428695c42734212fa54c5698c0eb99df90b71340e9d5e835befe646a3b2b5aa9c54921258fc93babc9215962fbc9d76fd4c4e248e335ae6a2a5f49dffe49db071e986b64ddf7ae1f054b25c482fb4d40d478fc369e83d4e7e1497dff9d104d71b017cc2a8f41807ed2cbbdb1bf45da78bf64ebda1ca89421955b012743ac2f28ff5900a994b30e160ec8c6f909d845b1d050000",
    ],
    [
      "ETag",
      "Yvqd7DLLi1rk3QY8raTCcA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `amount` = ? LIMIT 1",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-48-1595717766871",
    },
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
      "ad",
      "94",
      "6d",
      "6f",
      "da",
      "30",
      "10c7dff329a2eccd261502259050097588a65b240a5d08adaa6902c7b9a46e439cda4e3b54f1dd67273c049555d5b41748e11efef7bbb37daf354dd31f491aea679a1e90f82907b6faf44003fd447940a058796ebaf968ba9ab217b6facd66e3a1b8b30d6fd0ef9751a4c8e668992550e7346718f8d96cda8819cd33c428ad4bc1ba69d75b9d5ec76a5956b76b5bad329743128d48faa814ee85c8f899616c391a31a571022823bc81e97267379e4f8d8cd107c0821b87650d59891bef173e4f284682d0b43f9b961039073687252289c2d86787c1d743f90641cb462ca39f09068431cd53a1d04a194cd388c4392bc4a5d2ab344a73c1bcfb5b31e85367e40c7d6d38998dfdcf0bb454728b2f1ae2da7cce80e789d02ebdc995b6c864f57bc4812fb4dbef8ee7480ba31149604ec285d6d7ceb5c1f842d3b6128565e45eb9be568eb9281b0217242de07c1424504192decd40dd2367b993502248488e4dd8dc6a7651cb6ef68228b07064b73b41d48420b003ab83da4113f74c30c300505541a8da653e4a698a6c741a062674ec6e1bb01598ed660fb7cd28e8d861f1ebda76cfb690be5158effa796144c005e119e5643371fdd6737d67ee7bf28e0e7ca7da7b84e4382f4afac3ce0f5a12724855daf7c6f2862863844aa8e26cddb1ef7883a1efde5430e4451b418cf06afaa4ae5a84120efb6cc4d01204b02b1aaac3d1af2753d77727e3c168af50dc9deb6d2497613f77b0fb9eaa6afe2a3b3ceaf2144aabc2ec9a7ac5b73e39aa728392fc88ccf3c6acb70e346a47d4fe85ee723419fc27be46c7fc0be2e6eb57ad22afcbc5b141d37fcc1cef4ee5163ee5f120020629de17fcc0f35189a5fb037b51866fb794ca908b6a579f0b69962f19",
      "f37d75cca07cd76459765b0adaad76d36c6e056522136f235a566f1bf16653a95ab084546c67516eac7290eb03a4bc8253a4a970f90ec7eef85b015f5bd7fe0031502e936e060000",
    ],
    [
      "ETag",
      "V6uLSySrwryxrUNCtY8/RA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-48-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff4d515b6f8230147ee75790ee75246399e296f8a08ca899319369f6b01053e18038e0b05eb618c37f5f5b407d69fb5d4e4fcfd7b365dbe43baf12f262937d9efd4860a7bb0cc45a1f42e0b2105c6d35561cc8bd7683a09976afe6fcf3504ddefc5cfa59126e66c9ab64ebf1b875f1f8002555beb3420aa739140957f8cb60bbe38d56d112f48dbb1d330dcd0d9d264eb5d116ab4d300bc25ba9c4c448abed7239992e03d2498dd923b536e62947dc879002832a86eb836a864788c5c24cce695917e070942c06de35d185ad9c31943565888ea29ca791e30e9e079eeb79c3e1c8737b7b8131153956ba62fb412efd050a5a84f8a7a727ad9bb016b661f45190f4269fdb8494f4ab8b1fc9856aba5364f528ba369b9e04f077866a160e668207d247e1a31e55e824049360e898aadf9ae7a2e3acc6fa07234b0dbc18020000",
    ],
    [
      "ETag",
      "NHsWhnAKCiuCgdRTGdDurQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000000000002ff1dcfd96e82401400d07f996731024e74fa0628867d285bf1850cf4465904040a8ea6ff5ed3f307e7855851c038665357438b3e10671259176babdbaba20f092ea92053e11e61a69eadaba829dee698ce5fa3ac4beed4890a35be8b2af172155b44772879de709c258ff0138ccaeff3282a9a260eb6b467278efdf2a08475fa73d9b97e5b7193a8cfcd6da144822db9d363a065d50c4bc6f6339be29cef7a183d9b0fa2eb8c98b243a4c79c5dce36598641f04032a56b6f1ba72248fd698e422d6a25d294be219b6d533b6885e0d197038c59f99ec9989015fa6f6613efe17d55810d30a0df3f8b4beea705010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:53 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-49-1595717766871",
    },
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
      "8d",
      "54",
      "61",
      "6f",
      "a2",
      "40",
      "10",
      "fdeeaf20dcd72aa245b089b91aa53d13c53bc03697cb85ece240b74596b24b9ba6f1bfdf2ea0c2d934fd0633efbd7933b3bbef1d45519f48ba55af141593f8b980fceddb23c5ea85cc0047b1ccdc3a8fb728d69ff17c6478039d79aff9fc299e4c2a1429d90cedb204ba8c167908ec6ae3f5e29c1619ca29ed0ac1eee5b8ab1b63c3d44d7334b24cbde23248a225499fa4c203e719bbd2b4838f5e4c699c00ca08eb8574778c6b2f032dcbe923849c69edb29aa8c4b4cf0b7f4f688838a1e964e355260a0679003b441269e3c4dee2ebb67c8fa05d2f16e81712020a435aa45c5aab64429a46242ef2525c28bd8ba008979e8fbf8d80ead94b7be62b214d8a5d1aa4680717ca167114f0b70c941b77bd5216cecdda5d4dfdc5da09bcd90f7b35edcdd6cbcdcaf194fb1fb66b2b1ce1044aae3251aecb3f47fc948eca6a5b609ca4a5275f661b4e44b69ee3e283151e25a48870c5a08605667f8474ab3fc61136c3c81a1a38ea03c616360d34c4fd707c09975b0ca8a9503aabf828a5a9898760c2d80a4c6c8e0381b7026b80cd608c6034d40d23c2d8506bf6fed8cb6b4e38cc09cb2823f590d57b77e1db81ef6e9cd9d4b79b7d47a848f8bc72deeebad50e17036a3afd6c24678eb29c5061aa5ce7c2f16d773af317770d1be26c2d2146e19bf72c4f578412062736cac5ae38e42bba958b519de9ca9e9fc8e549f979003181f873f4796a4700e5fecb5ecef6dfaee38b83d51a45b59b2aaa7abebb706ed54672ffb1cc1d4a8a0f745eeab09a89693d8809b39656e7ffafbf9d460d55dcd5da9efa6b63bbbf25b7ccc98c0b11e49086a7aa5f38ba9258a5bff01409f8e161900cf1361ceb332ec2e21685ec54",
      "3dcca1ba53a49a7c2d68e94373303a080a62cecf11d66870409c3d0eb216ec20e58759548f4435c87dcb52d1b053d2245cdc03a75ee2beb3effc03fa1f7f5fe1050000",
    ],
    [
      "ETag",
      "GNjGag1qbD65S21sSwrDkg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-49-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d1",
      "4ec230147ddf572cf5514880c026263c4c454571228c170d2165bb9bd36e9d6da721847fb7ed06ec45b344125fd6de7bceedc9bdedd9c6304df41ea7013a37d12a8e3e7260eb9308c493da4c81e74470b96434e5801a8a0d02478aeddcb993d367e7a6739bde133fb6ed0fd699388341c1e2fe2b2458f236329271180309b88c5f746c96798da5380175a24f499ea44b1d360eb058671a9e79d3917b5345121a68c49d8fc7cec578884a68dbf85924c0022ff5917f93d0ebc228c5d01b5d4d210406a90f87ae3346dfc017233d5e8e938c4093d39cf9c04b115558c011a3798619a54d996a76fbcd76afdfb3dbb66d5967767b4727d4c722a6a9aa98cfd05e5f5081c9947ea91123abb8035684c5c477a34061e512aa1392d0a72a8e03b4cf6d1bbf1047ae67752bdc72b7302a95b555e5a4c298c0f29fd4e595bc62f9c2eb6997cfe448e238a1792a6a4a5f8f1f9d23362edd50b7e92bc71b1e4b960be9859abadee86138f39c87c98fe2f2bb3898e0622d804f18951ee3a09dd56e75cf7ab6d5423ba75e52e544a18c2a580e3aed63f9c7ba8d85cc85987030b6c637ce7273fb1d050000",
    ],
    [
      "ETag",
      "AJNP+ZAG2HnKlci77qr2PA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `id` != ? LIMIT 1",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-50-1595717766871",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffc5945d739a401486effd1594deb4335141e4c3cc38a935b621514c1593493b1d5d96856c022cd985646cc6ffde5d40c5499ac95defd8f3f19ee79c65cf734392e47b9cf8f2b1247b387cc8115d7fbc239e7c243c2803a1f0dc9cff199fe597ca4fff2b3b9fd80fdac585b37eeaf7cb285c643310a7116a32925388d8f162de0a29c95340096972c1a6ae3455bda79baa691a8665aa652e435130c6c9bd50b8cdb2941db7db5b8e56484818219062d68224ded9db8f9d764ac91d82196b1f966df34aacfd76e1938840906192f417f3122267882e510c702430f6d9bef7e550be8541dc0a79f42386084048f2241368a50c244980c39c16e25ce9991bb9b960de1d6b06793e1a8f86ae349c2e1cf7d30ac4426ef559024c5a2e2962799449df66d389b44a79f55bc0105b49d767a3d9885b2809708496d85f497de9441a38a792b412a70fe238b627b62b95332e6afa88653829c85ce045a8c6c3bdd534ed572e7227214440c621aab0a5a91840b5949e1778260c2c4df70205799ee5993ad03c05f6baa8eb7b08d4153251bbcc07091f570f286a007b9ad1514cabe375344dd5bb86665816d02d0d6a26f44cd3d7e44a61b3ebe789e20c9d62961286ab71cbd733db1d2dddd9c2190edc51bdf700f0599e96f4879d1fb494f121d569df1acb0ba29462c2a18a8bb51d77341b0c5dfbaa86c1ffb2310a015ccf1fc47f168088a17d36a0204619a213e28bcb912fa773dbb5a7ce60bc57287e9ccb6d24e361bf76b0fb9eea6aee3a3dbceaf2164aabc034ba72cdb7397a55e50a44f92b328f9559560f341aafa8fd573afd1f78d5d7ef464d5ce61ba3c2927f2c46b31b915bf884678602445102f7e5def1744462e97ec742e4e1dbf52432f886dad5671937f3570cd9be3aa4a87cd338ae7a2d042db56bf4f4ad204fa4d9cb08cb50b6112f5694a885629464db5994abaa1ce4e60029afe11469229cbf41c776be17f08d4de32f160d8e3a67060000",
    ],
    [
      "ETag",
      "YJzLHuP0ZdBsJMIq3KKNyw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-50-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff4d51df6f8230107ee7af20dde346a2c910b7c4075c88733346d94c962cc65438190e38d61e5b88e17f5f5b407d69fbfdb85eefebc9b26df69d16317bb4d93e4d7e2a10f54d02b4d68710649591545b89850476a7dd403cd1ee8f593d2e5ffd00a61467d5fd2dbcf8fe6a3d99b42e197d41ce95efa490c28714b2582afc69b0ddf1462b780efac6dd4e9886e6864ea3ba34da7cf91ecc82f05aca3136d272b358f8d345c03aa931fb56ad8d79ca11f7211c404011c1e541a5c023443437934b9e971938122b1181ec9ae8c2564e04562517888ea21c77e00cdd07d71b7ade6834f686bd3dc388538a85aed8bcb1737f42e259887f7a7ad6ba9968611b461f053b5ce5739d90927e75b1cbce54d39db6568fb69766d39a40ae04aa5924980906ac8fe209f5a8a493205181a123ae7eeb39a58eb31aeb1fd342d08718020000",
    ],
    [
      "ETag",
      "XGy8pKAEeBtdlu4+eJAAPQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "4b7282300000d0bb642d4e0105d325d1422d22dfa26c18a401020163c2779cdebd4edf0dde1364798e8548fb7b833bf00e964c81eb7cfd75df19b297231cc7b4ab0f1629a72c4a4638706e79ba29f9b362135ae6c6b26355b2781fe159e6ba5010c91df5336bf6c1d0b694cb3e8da153042abb212eab93d351fd3845f5f7c98cb5bea0577753330f4ac558591a1f904bf766e43b8cf9cb2655b0cecf53f84808d28d28094b5b0d6b4d924ec87d8c7580de6cbf3a8af9128a6abab57db8bd4e7a2aa41f72c90e0d6cc00ae099118e454a5e33750be10afc37d37e61f8753570c63107bf7f5cebf52b05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:55 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-51-1595717766871",
    },
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
      "02ff8d546d6fa24010feeeaf20dcd756a48a681373b596de9928de01b6692e17b22c03dd1659ca2e364de37fbf5d4085b369fa0d66e679e699979df78ea2a8cf240dd54b450d48fc5240fef6ed8906ea99f40047b1f43ce8dbeb996bdc3f6be3eba7f50b2cbce295bf4e26551429d10c6db204ce192d720cec72ed76e39c1619ca293d1784e7867eae1b63c3d44d73381c997a856590440b923e4b8647ce3376a9697b1ddd98d238019411d6c57473b06bdb0b2dcbe91360ceb4765a4d6462dae789bf2714234e683a59bb95888241eec3069144ca38a2c3e0aa4ddf2568d38d45f496604018d322e5525a4583691a91b8c84b72c1f42e8cc25c6a3efc360caa6b2dac99a7609a149bd44fd106ce941071e4f3b70c945b67b554e6f6edca594ebdf9caf6ddd94f6b39edce568bf5d27695fb9f9663291c0509945865a25c957fb6f8291595d942609ca4a5264f7a1b4a84b7eee3fc83111e28248950c5a00ef3cdde10e9a3de3888021347a3be11443d088251601aa81ff4f07800833000d4642895557894d27480fae368601a7e0038f207e150f7510f197edf34064353ef1b18856a8dde1d6a79cd09871bc232ca48dd64f5de997b96ef396b7b36f5ac66dd112a127e53296f57dd2a878b0635957ed6921345594ea810558e736e7b96339d79f3bb860cb15b0b88117e735fe4764528617044a35ccc8a43bea4a11c8c6a4f97d6cd115c6ecaaf7d1013117f0e3a8fe5884039ffb29693f9b7f37862b15aada866535955d773e6f60fb5e1dc7d4c738792e2039e6d6d5633d1ad47d161d6e2eafcfff5b7d3c8a18ab75acb537faf2de741624b9ff43810410e293e66fdc2ea4a60e5fec22912e1fbc32011e2361cf2332ecce2156176cc8e73a8de14a93a5f138e74a3df33f7840298f3d38841ff621f71721c642ed840caf7bda88e44d5c85d4b52d19053c264b87807763dc45d67d7f907e2eee24ce1050000",
    ],
    [
      "ETag",
      "Y1vBCS5Wk/9BjUqeLTuwtw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-51-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4d",
      "4f",
      "c2",
      "40",
      "10",
      "bd",
      "f7",
      "57",
      "90",
      "f50a091568d58403685512443e8a1743c8d24eb1da76eaee564308ffdddd6d815e304d24f1d2dd99f7665f66765fb746ad463ec2c4273735b20ad79f19b0cdc51ac4446da6c0b34870b9a498702075c50641d78addcc1cbc7c19df397cd61af545db69d9136bd2ede62ceebd414c256f2b23190721443e97f1ab8e6b455e63098d419de86194c5c95287f5232c36a98667ee74307a282331fa1a19cd87c35e7fe89002dad54f8bf854d0a53ef26f127a5d18851879c7d5140260907870ec3a65f80e9e18e8f1721aa711343866cc035e88a8c21c5e33cc52ca101b32d5e8980db373ddb14ddbb6ac2bdbdcd323f4a808315115f31939e80b14349ae2b71a31b1f23b6079984f7c3f0a12942ea13c21097da9e2d02787dcaefe0b713072ad76895bec1646a9b2b2aa9c541046b0fc277579256f54bef06adac5333993388d314b4445e9fbe173ef8c8d4b37546dfaaee73ae792e5427aa1a2ae3b7872666eef697c525c7e174713f43702f898a1f41807ed2cb3d9beead85693ec9d7a8bca89421955b00c74daa3f28ff5180a990b68c4c1d8193ff731bc651d050000",
    ],
    [
      "ETag",
      "0uEo2VPDEsS3NBt4E37Q6Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` != ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-52-1595717766871",
    },
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
      "ad",
      "54",
      "6d",
      "6f",
      "9b",
      "3010fe9e5fc1d8974d6a5e48420895a22e4bd9c694928e9076d33425c618ea1630b54da7aaca7f9f0d240135abaa69df92bb7b5eee0edf534b51d43b9c06eaa9a2fa38bacf117d7c7b4b7cf54466100791cc445f07faf7a91b381ff58c5ef5939b3b9fa6d3c9a4acc2059a81248b519b919c42c44e57cb4e44499e014a485b10b6f57e5bd34dddd00c63341a1b5a8965280ee738bd930c379c67ecb4dbddf9e8448444310219661d48927dbcfbd0ef6694dc22c859b729db154aacfbb2f0594c20e098a493d5b234913344d72801382e9adda303ff4393be8341d28944f50386084048f2944b6b250d246988a39c16e482e9490445b8f0bcff5b0ba84b6b6ecd3c65b65839debb0d4824dde6bd0298b25e53c4f2982b9fdcc585b2c984fa0d60886d94eb2f966b890825218ed11a071b65a29c2953e75c39d46d94373238b72f6c4f29275d280788719c16fe3ce0c7a8e64a64ab99da47d6b9a79024800b89aa6c6df446401bf74c3ff40d188e07ba1ff690ef8f7d430703bf07cd211a063e0275062eb54b3c4849aaf7cdd0ec43380a4db19fa139d6cc8129287b5a18860334d40d1468e370a4560cdb7d3fbf29e6e81cb38c305c0d5dbd766dcf5a7beeca994d3dabde7b08c444cf4bf7cdce1b2d7131a4badb97c6f2cc51463111a68af5da8e67b9d399675fd56c886f6d8e22001f97f7f26b0b41ccd0010d28481047f482047239eae562697bf6c299ce0f0cc5e773b9ab64a2ece7deeca1a73a9bf79835575d6ea18c4a9ba3a15acb6d4f8eb25c81383f42f3508555adc1d13ac2f62fee969e6b3b9fff83bd692616f7178bd5af5fad1abf2a6e47654dfdb6b2dc1f125be464c64521a2288507c5573c1f092cd3af388da27c77a82442dcaabd3ee3222c5e32640775",
      "4851f9ae71526ea3241c6ba37eafbf231440ca9f570cf4e1aee2d9b1925a284129dfcda23c5ae520b70d4b79cd4e0193e5e21d3ad502b7ad6deb0fda8436eb71060000",
    ],
    [
      "ETag",
      "gJ35XARdNB5prV2mhkbrnA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-52-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff4d51df6f8230107ee7af20dde34622cb105de2c39c6e9a18b3b1b92c598ca978321438d61e33c4f0bfdb16505fda7e3faed7fb7ab46c9bede36cc31e6db68ea3bf0244791301bdeb4300b24848aa2dc74c02bbd36e201e6977363a50cf8517af1c75f8eda4fff59def87d16050bb64f80b2957bea3420a6f63483652e11f83ed86375ac653d037ae56c2343437341a95b9d1a6f3cff1eb38b89652dc1869be98cd9e86b3316ba4caec4bb556e6293b5c07b0050159089707e5027710d2d44c2e799a27e0482c4408b269a20b6b391258e45c203a8a72bc7bc7f5fa9eeffa7eb7dbf3ddd69e60c829c64c572c3ed8b93f21f124c0839e9ed56e266a5887d146c1b657f95c27a4a47f5dfcc0ce54d59c96568b969766c39240be0954b348301374581bc533ea51492741a20043875cfdd624a686b32aeb049719e33418020000",
    ],
    [
      "ETag",
      "nDwt81eF5yD0a+H9VXpkBg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "d07fc9599c227b6f80182aa09655bd6468086551b6a0043afdf73a7d7ff07e408a31a1148d6d4d1af00ee674a3adf1da695583ffcca5f22ac6c9ce2c4614ea8f033e3f4f66ff303254754655e20fbbbff4477f1b71df57533b5a103fbc859bd02242a620373661e46499c9ecfccc7b3468d549b984cd3206631f353da6c64909650b7e15dc9e4a914cf36ad92fbc1c07c341972c3fe9e0ce9a5c56dc5c2979b37d51d1dc9acdad7bdbdc85d066017f37fc9a48baca25b3b09db3b287432244ceec75fe045680b0ae1c0845e56b26489ab602ff4d34ce1d795d0d920e6400bf7f98927a0f05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:56 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-53-1595717766871",
    },
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
      "02ff8d545d6fa240147df75710f6b52a54146862b646e9ae89e22e609b66b321c338d06991a133834ddbf8df770650616d9abec1bdf79c7beec7dcf78ea2a84f38dba8578a1ae1e4b940f4f5db2389d40be9411c24d2630c37f76f9c3cbb16b247ab19ddcd1edf062fe37115854b3403db3c455d460a0a11bb5afbbd849222079490ae20ec0e075d7d680f4ddd344723cbd42b2c4369bcc0d9936478e03c6757fdfe41472f21244911c831eb41b23ddafbbbcb7e4ec923829cf5db69fb2213eb7f9ef87b4a20e09864e3b55f892818a221da029c4a1927f426ba6ed3f730d8f61211bdc310010849917129ada281248b7152d0925c30bd0ba330979a8fbf0d83ea3b0b671a2890a4c5360b33b04517ca067010f2d71c2937de6aa9ccdd9b95b79c04f3951bfad39fce72d29bae16eba5eb2b773f1dcf51388852546295b1725dfeb9e2a7545466db20c671566a0aa4b7a14478eb3ece3f18e191429208550cd561a1a98d806e69761447268cadc1308a35144556640ec120d2a06d20631321d064289555789091ccd6e125b0f53844563c080da8592118003d1c9903c3b035080c18ab357a7face585628e6698e584e1bac9ea9d370f9c30f0d6ee741238cdba6350a47c56296f57dd2a878b0635957ed692334539c544882ac7397703c79b4c83f96d4386d8ad054a007cf59fe576c52065e8840654cc8a23ba241b3918d59d2c9dd9095c6ecaaf431013117f8e3a4fe5884039ffb296b3f9b7f30462b15aada8665359553ff0e6ee0fb5e1dc7f4c730bd2e2039e5d6d5673d1ad07d161d6e2eafcfff5b7d3c8a18ab75acb537faf1def5e624b9ff47828461465f094f50bab2b8195fb0ba748841f0e834488db70cccfb8308b5704d9293ba4a87a53b8ea7c4d68e923cbbe3c100a20e56711a666688788b3e32073a12dcaf8a117d591a81ab96f492a1a724a980c17efc0ad87b8efec3bff00708be385e1050000",
    ],
    [
      "ETag",
      "45dYztoqN8e96ODrvDjz3w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-53-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d6f8230147de75798ee719a69a6e096f8e0d73612e69ce21eb61853e18238a0d8962dc6f8dfd716545e5c4866b217da7bcfb93db9b73decb44a057d06b18bee2b6819f89b14e8f6ca07fe2a37136069c899581212334055c9068e7dc97e37dfa851bf8e373abbe95b9e3e889cdedaef74321673561061c1db8948c45e00a1cb44fca1e24a9e57588c2390273a244ca378a1c2ea09e6db44c1537b628e1e8b48445c858c6696d5ed59439443fbea79111773bc5047fe4d42ad732d17436bb29c80071462074e5d2794acc1e1a61a2fc35112428d91943ac072115998c13e25698229213591aab56e6b8dd65dcb681886aeb78dc6811e1207f380c4b2623645477d4e380e27e45b8e18e9d91dd02ccc267e1805f20a97509c9080be6471e0a2636e5ffd85688e6cbd59e0e6bbb956a82cad2a26e505212cfe495d5cc90a8b175e4e3b7f261712c71149635e52fac17ae95eb071e186b24d0fbaf6f052b28c0b2f94d4b5cde7e1d4ee3e8fcf8a8beffc6482de96031b53223cc64039ab516fb65b865e4707a7f68974229746e534059576b0f8633d055ce43c1c32d0f6da0f0687bcf81d050000",
    ],
    [
      "ETag",
      "ZIVr70+nq6s/CLf6DmcBjg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` != ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-54-1595717766871",
    },
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
      "0002ffad546d6fda3010feceafc8b22f9b54de0a21a112da28655b240a6d08ed5e3481e35c52b7499cda4ea7aee2bfcf4e02049555d5b46fc9dd3d2fbeb3efa9a669fa1d497cfd44d33d12de67c01edfde524f3f521910285499feefc96dd6fd7a73fafdf22cc2c330e1a7a79de1605054911ccd519c4650e7346318f8c962de0819cd52c428ad4bc2bad1adb78dbe61b64db3d7b3cc7681e510051392dc29861b21527ed26c6e7c34424ac308504a7803d3781b6f3e1c3753466f010bdedc976d4a25de7c59f843443112842683c5bc309171604b881189948d1ddaf73eeed337088a1ba1ac7e201810c6344b84b256d0609a0424cc584e2e999e64508673cfdbdf4a409f8f27e391ab8d668ba9fb6e856245b77aaf21ae2d970c781609ed93333bd756a954bf411cf84abbfe3276c632c268402258127fa50db40fda707aa6edea56da1b159cd8e7b6ab159dce957de08224b93f177911545cc96cd953fbc038b7148a04092951962dcd560fb5ad56df0b3c130756c7f08216789ee59906ea782ddcef42d7f700551984d22ef028a18985a0671add0ef80606cf37cd0e3691fc0eb0d56f23a3ddea19feb1d737f59261bd3dcf2f46049c119e524ecaa6ebd78eed8e97aeb3988e86eeb87af600c98e9e15eef74fbe7724219b5475fb525b9e394a19a1d2543e5e7bea8e9de1c8b5af2a36e45d9b4088f0e3fc5eddb600451c7668c4500c02d839f5d570f48bd9dc76edd97438d931e4d7e76253c965d98fadd9dd99aa6cee63ba3fea620a4554d9ec75f54a6e7d7490e50a45d9019a8732acb7f7386a07d8fec5dddc75ece9e7ff600fa572707fb1587efdac55f875b93b4a6bfae562ec7c53d83ca7320e04c020c13bc5573c1f052cd2af588db27cb3a81442eeaaad3e17322c5f32e63b75cca078d7242ea651105a92d3e86d08259089e71596d5df543c5b564a0b6248c4a617c5d22a1ab9deb39455ece430552edfe1b41ce0bab6aefd01fdbb14df71060000",
    ],
    [
      "ETag",
      "9zLju4XhBZQDlcAgnsBB3A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-54-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "5d",
      "6f",
      "8230147de75790ee7123d364c85ce2c3346c9210a36c660f0b31b55e11075cd6161762f8ef6b0ba82f6dcfc7eded3d3d5bb64d7ed262475e6cb24d93df0a787d97805ce94304a2caa4505b898500f2a0dd2069a2ddcbb00eb6333f3bdcbf9d06f3701c3db2f06b3599b42ec10e9053e53b2ba4f03e856c2714fe36d8ee78a31534077de366c34d437343a7c9ba345ab0f8f4dffde856ca7167a4c53a0c5fa7a14f3aa9317bacd6c63ce588db08f6c0a160707d50c9f1084c06667241f332034760c51988ae892e6ce5846355528ee828ca719f9ca13b76bda1e78d46cfdeb0b767c8a84cb1d015eb0f72e92f51d22cc23f3d3d69dd84b7b00da38f82ec6ff2b94d4849275d3c2217aae94eb1d5a3f8da6c5a4b104b8e6a1601668201e9a398a11e55ea2424afc0d08caadf9aa7b2e3acc6fa07ce02894718020000",
    ],
    [
      "ETag",
      "PLyIbCElh+Fv0HL9R/cLWQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "dd",
      "76",
      "43",
      "30",
      "00",
      "00e077c975dbb3a0c6eec69c618d96a1da1b8708f32f91366c67efbe9e7d6ff0fd800c6332cf291f5b328017b06692bec3bb8f5133a08fefa5cffb5e7abebb5e3026cddd54c3730ca79639d026384e4439c7cb35cc7a12a282fbde9e08753da08b7d3cd1d94e44e35f85a3295217a84493bf28b74451dd50e55926b7235f3649537fbed3a0fb4ef3e5556188a60565b3c533a5cca73c4237b784ab5938c9997a6e8b051b44d537b9bec5eee1a82f974182c1d2896d8d5b993d45301f8bf20d9d2223d7c0069065aa1999d3fa3193f7babe01ffcd94af13795c0d9231c2c0ef1f975bfcf605010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:58 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-55-1595717766871",
    },
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
      "000002ff8d545d6fa240147df75710f6b58a56516c62b646e9d68d6217b1cd66b32133c340a7050699a14dd3f8df77664085b569fac6dc7bcfb9e77e70df5b9aa63f9334d0af341d926857e0fceddb1385fa85f4600e22e9711fd1f06e7e5b909f4fe1706aec5e9f93359b4e266514516806922cc66d468b1c6176b5dd74a29c1619c8296d0bc2b669b67be6d81cf546a3e1d01af54a2cc371b824e9b36478e43c63578671d0d189288d620c32c23a882647bbf1726964397dc28833a399d6109998f179e2ef314580139a4eb69b5244c170eee3049058ca38a10378dda4ef1090742211fd42100608d122e5525a4983681a92a8c815b9607a174661569a8fcf9a41dfd84b7be66988c64592fa2948f08516000e7cfe9661edc65dafb48573b37657536fb176fccdecd65e4d3bb3f572bb7236dac3adedda1a0730c60aab4db46bf572c4432952d902cc384995264f7a6b4a84b7eae3e283111e29248950c57015e68fba43d0b3ba6318c2110aadbe09c32e86d0822313f461178d077810400cea0c4a598907294dfb83104060417f680597fe005aa66f5968ec9b2182a19853af1760bd42ef8fb5bce684e339611965a46ab2fee02e3cdbf7dcad339b7a76bdee1014319f97ca9b5537cae1a24175a59fb5e44c5196132a44a9712e1ccf76a7336f715f9321766b892380de363bb95d2188193ea1412e66c571bea2811c8cee4c57f6fc04569b7277086222e2cf51e7a91c1128e7af6a399b7f338f2716abd18a7236a555df78eec2f9a1d79cfb8f69ee415c7cc0f35299f54c74eb51749835b85aff7ffd6dd572e8e25fade4e9bfb6b6fb5b62954f7a5c1ce21ca7e894f50bab2b81a5fb0ba748841f0e834488db70cccfb8308bbf08b1537694e3f29f2265e72b42ab67f52f8f840298f3f308b36b1d22ce8e83cc85139cf2432fca23513672df9054d4e428983ad55bc7a986b86fed5bff006d5e296be1050000",
    ],
    [
      "ETag",
      "Rhc6PDHuiJjf6A/qwkmOsA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-55-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ffc554514fc230107edfaf20f51512886e53131f86a2924c14982f1a42ca76c3e1d6cef62612c37fb7ed86ec45b344125fd6de7ddff5cb5dfbedd36ab5c86bc22272de228b64f95680d81c2d01c77a330159a428d592732681b4351b902e35fbb8dbbd5fb12847ff6a8cfdf5077b5adb0befe2a264c9f00532aa789f2a52719c401a49153f9bb855e50dc66806fac490a745c6e6266cef61dce4069e0693e1e8a68e643c32c8e8d1f7bdbe3f2015b46dff2c1251a47373e4df24cc3ab32a31b2e28b09c4208085b0ef3a177c05210ecd7825cdf2143a921722045989e8c2125e0a5ee45470de51a98e6d777af699edf65cd7714eddde8e9ef29062c299ae789c926f7de448d3095feb1113a7bc035186e5c477a32071ed12ea1352d0bb2e4e22f29ddbb67f210e47817352e356bb9955ab6cacaa26152729ccff495d5dc90b552fbc9976f54c0e244e335e306c287deddf7b076c5cb9a169d3575e303894ac44e58586bac1f06e300dbcbb871fc5d577b637417f83201f04571e93609cd5eb9e9cdaaed3253ba75e72ed44d446455180498754fdb16e1354b998a612acadf505ca197b181d050000",
    ],
    [
      "ETag",
      "300OjndptLDQtBwxnZw5bA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `date` != ? LIMIT 1",
        types: ["INT64", "DATE"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-56-1595717766871",
    },
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
      "0002ffa554eb6f9b3010ff9ebf82b12f9bd43c4820904a519725d98694474748ab6a9a12e31cd42d608a4ddba8caff3e1bf2206a5655db37b8bbdfc377f6bd541445bd27f14a3d57548f040f19a4eb8f77d453cf6406380a64c6f86ac4def8f9c6a1e39b67eb721d0eb2271474bb4515c9d10c4549085546b314033b9fcf6a414ab304a594560561d5685735a363989a69b6db96a9155806a13f22f1bd64b8e53c61e7f5face472da03408012584d5308df6f1fa63b39ea4f40e3067f563d9ba5062f5b7852f428a112734eece6785898c41ba80089150da38a057de9763fa1a41512d10d58f0403c298663197d60a1a4c639f04599a930ba6171114e1dcf3feb7145067c3d1b0ef2afde97ce27e5aa248d22d3f2b88298b450a2c0bb9f2cd998e956522d46f1103b654ae7f0c9da188a4d427212cc86aa974950ba5371928ca7285382c950f3230b2c7b6ab145dce5557c03889736f2ef242283912d96d3fed13a3dc534812c4858d6dd9c26cb49166353a9eef99d8b75a86e737c0f32ccf3450cb6be08e0efaca035466e052bbc0a398c64d43d37cddc4ad2600b2348c350bdabaaf7be0e9b8d3324cc01af20c50b70c9bfd799e52c26140584219d9365cbd766c77b8709df9a4df7387e5b3fb48747350b83f3ef9d191b86852d9ed5b6d79e528490915a6f2d1da1377e8f4faae7d55b221eed9080284d7b30779d37c143238a0518a22e0908ee94a0e47bd9cce6cd79e4e7aa303437e752e77954c94fdda9b3d9ca9cce6ae93e351175328a2d2665b574bb9cdd949962b146627681eb761553be2a89c60fb17770339c4ff37d76c341bd546536c81bfb8dc7efdae944454b13ab6eed49ff3a17323b1794e661cf02185181f64dff18224b048bf63338af2dd9e9208b1aaf6fa8c8bb078cc981dd4710ac5d32651319082d0d23a9ad5d9110a60ca5f57b4f4bde4ab5d25b5208298ef7a51ecaca2919b234b59c94e0e93e5e2294eecc9f7dc7c6553f903b3d1efd470060000",
    ],
    [
      "ETag",
      "5B5nbMxYRoMYx8PylDuwag==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-56-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d515d6f8230147de75790ee7564730691253e4c433617e21cce3d6c31a6c20571c0c5b66c3186ffbeb680f2d2f67cdcdeded3b3619ae4272d22f268925d9a1c2b60a79b04c4bb3a04c0ab4c70b995587020b7ca0d8226cafd508edd57182e8f89fb391bb2d517ecdfee92c9a471f1700f3995beb34412c729641197f85b63b3e5b556d01cd48ddb2dd30df50dad264ea5d6e68b0fefd90bfa528e9196166bdf7f9afa1e69a55aef1bb9d6fa2907dc051003832284eb834a860708c55c4fce695e666071ac5808bc6da20a1b3961589594215a92b2ec9135b05ddb1938ce683476069d3dc3908a140b55b15e914b7f81826601fea9e949e326ac814d185d1424eee5d34f484abfaad82617aa6e4f1ba3439b6bb3e949005f3294b370d013dc932e8a19aa51854a42b00a341d52f95b2fa96839a336fe012782eb1118020000",
    ],
    [
      "ETag",
      "2p89Je3Pqg9VC3rSZehO/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "52",
      "83",
      "30",
      "14",
      "00",
      "d07fc973e958969af80665a014c1b244b02f0cc2d5010aa4216c75fc773b9e3f383f282f0a18864cf40d74e805adb94cb6c5d6edb1b10be0f3553dd86660f39ca447c90bacf2ebcd4ba6e4087e005a4aa918d2e7f1da56568bf5589a53d171ea4da1b24869088e47b204f6e6ecd352f4f4e6d7d27c3a9943ec3ac9a4b7209ef0f7dae4f48263d6bb356ea375f42e250fe26b7497d8c41996b8e3a78c5abed883fa21db51ac9fed869acd3cdda6eebd676c0ca946ceb621939d315b9d3dea8b5253f550a00d8285551c86ac7acc148d900dfa6f666265f0b81a9073e0e8f70fd5a50b7f05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:56:59 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-57-1595717766871",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d545d4fa340147defaf20ecab2d60a15093666d2aee36db5217a866dd6cc8301d7094323833688ce97fdf19a02da831bec1bdf79c7beec7dcd79ea2a80f38dfa8678a1ae3f4b144f4e5db3d89d513e9411ca4d243afb2671db8feafe1ad91ce6ee3009a5a904e267514aed00c6c8b0cf519292944ec6c1d0c524aca025042fa82b06fd97dc31a5bb661dba391631b3596a12c59e0fc4132dc715eb0334ddbeb18a484a4190205660348b607bbf674aa1594dc23c899d64dab894c4cfb3cf1f78c40c031c927eba01651324423b4053893328ee84d7cdea51f60b01da422fa094304202465cea5b49a06923cc169492b72c1f42a8cc25c693efcb60c6ae02edc59a8409295db3ccac1169d281bc041c45f0aa45cfaaba532f72e57fe721ace575e14cc7ebacbe960b65aac975ea0dcfc747d57e120ce50855526ca79f5e7899f4a51956d8318c779a52994de9612e16dfa38ff6084070a49225431d48445b63e0286a38fe324b661e20cad38d1511c3bb16d8161acc3b189cc4d8c409ba15256e3414e72f37468d8ba852288c6a3c81cc7663406d0888cc4040038c9d0b4876a83de1d6a79a698a30bcc0ac270d364f5c69f876e14fa6b6f360ddd76dd0928337e512bef56dd29878b06b5957ed692778a0a8a8910558d73ee85ae3f9d85f3eb960cb15b0b9402f8123ccaed4a40c6d0110da89815477449367230aa375dba174770b52957fb202622fe1e741ecb118172fe552defe6dfcd138ac5eab4a29e4d6d5583d09f7b3fd49673f731cd35c8ca0f789e1ab35a886edd890eb30e57efedd7bf5e2b872ade6a234ffdbd76fd3f125bf9a4c74709a22887c7ac5f585d09acdd5f3845227c7f182442dc86437ec68559bc22c88ed92145f59bc275e71b42c7183ba6b5271440cadf469ceabae1ec23de1d07990b6d51cef7bda88f44ddc85d4752d99253c164b878075e33c45d6fd7fb0f2af2db59e1050000",
    ],
    [
      "ETag",
      "rPlw0aERK3Z1gCZbSc4/Sg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-57-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ffc5545d4fc230147ddfaf20f51512166143131f5050317c3986261a42ca763787dd3ada4e430cffddb61bb017cd12497c597bef39b727f7b6675f46ad86dea3c4479735b48ac24d066c7b168278541b07784604974b4a130ea8aed82070a8d80f93e6d379767eb7e9bd0456cf79be49c30e09afae7216f7de20c692f72523190711109fcbf855c7b522afb104c7a04ef428c9e264a9c3fa1116db54c333d7198cefca484c7d8d8ce7c361f77ad84705b4abff2ce2638197fac8bf49e875611462684d570e04c020f1e0d875cae81a3c31d0e3e5384e093438cd9807bc105185391c329aa59851da90a946db6e98ed8bb66ddab665756c734f27d4c322a289aa98cfd0415f508189433fd5889195df01cbc37ce2fb51a0a07409e50949e84315473e3ae476f55f8883b16bb54adc62b7304a959555e5a48288c0f29fd4e595bc61f9c2ab6917cfe444e238a659222a4adf0e27dd13362edd50b5e95ed7ed9f4a960be9858abaee60d49fb9ddd1f44771f95d1c4d70bd15c0a78c4a8f71d0ce329bad4edbb69a68efd41baa9c28945105cb40a73d2cff58f79190b900130ec6cef806f72fc7cd1d050000",
    ],
    [
      "ETag",
      "JO0V3u3GqDZf6DRWCpg8lg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `stamp` != ? LIMIT 1",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-58-1595717766871",
    },
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
      "ad",
      "94",
      "5b",
      "6f",
      "da",
      "30",
      "14",
      "c7",
      "df",
      "f9",
      "14",
      "5ef6b2490592704940421da2e9168d4b0ba155374de0380e759bc4a9edb4ab2abefbec844b5059554de3899ccbfffc7c8e7d5e2a0068f72409b42ed07cb27ac8307bfe78477ded4479b0802be59904378d2c8907e9efd6f7f33b336669d27ebaecf58a2892677318a711ae729a318479773eabad18cd52c828ad4ac16acbae1aad4ecb322cabddb62da3c8e5380a8724b9570ab742a4bc5baf6f396a2b4a57118629e13544e39dbdfe68d65346ef3012bc7e58b62e2bf1fadb854f238aa02034e9cd670544c6315be018924861ecb303ffcba17c8dc0b8b692d18f04618810cd12a1d00a19449390ac32968b4ba5176994e69c79f75932683367e80c3c3098ccc7dea7258c95dcf233801c2c160cf32c12e07c3a1981652aabdf428ef9125c7f73a68eb4301a92082f48b0043d700afae33300965c48dc25f8a02c4377e47aa068735e36c05c902487f3a01fe11292f46e1aea1e99e54e428940213936610b4b6f43c3d63b7ee85b28b41b2d3fd4b1efdbbed5820d5f479d266e063e866505a16a17f930a109b6e5cf404de4c38eee37e467d88441a7893a01b6503b80a66f048189b58dc27a779e2746043e233ca59c6c3aae5d4f5dcf5978d3f978d0f79cf2d94328db7956d01f9efce0484236a94cfb565b5e11a58c500995cfd61d7bceb43ff0dcab1286bc6843bc82e879f6a0ae5a08238ef7d990c1180bcc463450c3d12e2633d77327e3fe70af90df9d8b6d2497613f77b0fb3395d5bce7f470d4c5140aabc26c37b5926f7d7254e50a46d91199c78d59330e34",
      "2a47d4fe85ce7347cecceb8f2efe03a1a99b7a5537e52ef00cb36b34ba46b3a6ebfa8fbf806ffefdaa944a6a729d6c80b5cbb933bd51b9b94f79a638c40c27680ff18e47a5120bf73bb6a50cdfee2e9521d7d7aebe7cf982c8f78df8be3a62b878ed242e665408daa66edb8dada04c64e255846134ec6dc4abfda56ae1182762db8b628f158d5c1f2065259c3c4d85cbd73976c75f73f8cabaf20799ebf40784060000",
    ],
    [
      "ETag",
      "OdY3unmCpx5KFj2mrpn6wQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-58-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "df",
      "6f",
      "8230107ee7af20ddeb48e401d1253ea8219b893193cd647331a6e2c170c0617b6c3386ffddb680fad2f6fb71bdded7b365dbec272df6ecc966bb343956204e0f09d0521f42905546526d251612d8a37603f144bbd331ffff8cfb53faf0dd7c1d1cfde1b0b75e8e468d4b46df9073e53b2ba4709c42b6970a7f196cb7bcd10a9e83be71bb15a6a1b9a1d5e8541a6db6780f9e83f05eca716fa4c56a3e1f4fe6016ba5daec1bb5d6e62907dc851083802282db834a810788686626973c2f337024562202d936d1858d9c08ac4a2e101d4539dec071bda1e7bbbedfef0f7cb7b36718714ab1d015ab3776ed4f483c0bf14f4fcf1a37130d6cc2e8a260f15d3ef70929e957177bec4ad5ed69637568736b363911c857816a160966821eeba298a21e957412242a3074c4d56fbda4d472566d5d00af4515f318020000",
    ],
    [
      "ETag",
      "iAaxYf6CtX71mZEq7990ZQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "4b7282300000d0bb64ad4e2305a4bb04111041320261d8301003455ba001f939bd7b9dbe1bbc27c818e35d97f6cd9dd7e003ccd956dbb08dd3ec30244c986d264cc78a1a12143a3aa94d5498e7ac1168a25e470ff235fc360dc742d066d37bd15ab9377485515c6fc1da5a684e5d0143a595fa98353dfcbc8dc6f2863b85a8ae2791335ec6f2186c71ff63bbebb157d27be5c70f5b46fbc11fc6b272a2b51c562c9f4a7f20f28e1e2e71987e9d7271c9633379cc9a4d4204256a08aad7ba5fe32349f6704cfc563510012bc0a7b612bc4babd74c92356d05fe9b693fb7fc75c53c135c80df3f8039d94c05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:01 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-59-1595717766871",
    },
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
      "8d545d6fa240147df75710f6b58a880a36315b63e9d68de016b0cd66b321c338d06991a13383bb4de37fdf194085b569fa06f7de73eeb91f73df3a8aa23ee36ca35e2a6a84939702d1d72f4f24522fa4077190484f7fb6dbf98483091b52f771f47de0acff3edc4da755142ed10c6cf3147519292844ec72edf7124a8a1c5042ba82b03b9a74f5d16464eaa6391e5ba65e61194ae325ce9e25c323e739bbd4b4838e5e424892229063d683647bb46bbb819653f28420675a3bad263231ede3c45f530201c7249baefd4a44c1100dd116e054ca38a137d1559bbe87c1b69788e81d860840488a8c4b69150d24598c938296e482e94d1885b9d47cfc6d1854df5edaf34081242db65998812dba5036808390bfe648b9f1568eb2706f569e330b162b37f4e7b7b633ebcd57cbb5e3facac3adedd90a07518a4aac3255aeca3f57fc948aca6c1bc438ce4a4d81f43694086fddc7c53b233c524812a18aa13a2c34fb63a05bfd491447268c2d6314c57d144556648e8011f5e16488869b08812643a9acc2838c64e3fe50378009c2816118e110199b301a1b3084d1048021d447037da2d6e8fdb1963f1473748d594e18ae9bac3e788bc00e036fedce6781ddac3b0645caaf2be5edaa5be570d1a0a6d28f5a72a628a7980851e538176e607bb379b0b86fc810bbb5440980affe8bdcae18a40c9dd0808a5971441db2918351dd99635f9fc0e5a6fc38043111f1eba8f3548e0894f32f6b399b7f3b4f2016abd58a6a369555f5036fe17e531bcefdfb34f7202ddee1d9d5663517dd7a141d662daeceff5fbf3b8d1caa78abb53cf56e6d7b3f25b6f4498f87624451064f593fb1ba1258b93f718a44f8e1304884b80dc7fc8c0bb37845909db2438aaa3785abced784d6403775e3402880949f4758ba7588383b0e3217daa28c1f7a511d89aa91fb96a4a221a784c970f10edc7a88fbcebef30f1f4280b0e1050000",
    ],
    [
      "ETag",
      "0AvvSota9s4rNh5J2MUxWQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-59-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d4fc230147ddfaf20f5514820ba4d4c7c00455944e4633c184348ddeee6b05b67db2184f0df6dbb217bc12c91c497b5f79e737bd27b7bb6356a35f411253ebaaea1b728fccc806dce421063b59900cf88e0724969c201d5151b040e15db3a7f9c326b465e1c33ba18fbabf461bdee873737398b7bef1063c9dbca48c64104c4e7327ed571adc86b2cc131a8133d4ab23859e8b07e80c526d5f0d49d38c3873212535f23c3d960d0e90e7aa88076f5e3223e1678a18ffc9b845ee746218696f46d020130483c38dc3a6574099e70747b398e53020d4e33e6012f4454610e878c662966943664aa61b61b2db36dda2ddbb6ac2bbbb5a713ea6111d14455cca6e8475f5081c9847e713d9a7c062c0ff38eef5b8182d210ca1d92d04a15473efac9edeabf109da16b5d96b8c56e6e942a2babca4e051181c53fa9cb91bc63f9c2ab6917cfe444e238a659222a4adf0f9e3b27bcb87443d54bdf75dcdea964b9905ea8a8eb3a4fbda9db791a1d1597dff9c104dd8d003e62547a8c837656ab797965da5613ed9d7a4b95138532aa6019e8b487e51fab1f09990b30e160ec8c6f5cae9ee91d050000",
    ],
    [
      "ETag",
      "6+KSr6UlYI5i3QdvpGxxHg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `amount` != ? LIMIT 1",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-60-1595717766871",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ffad945d6fda301486eff9155e76b3a90512420854421da2e91a89860e42ab699ac0314eea368953dbe9862afefbec848fa0b2aa9a76979c8ff73ce7d83e2f3500b447922eb533a005247aca315b7d7ca08176aa3c58c048795611a23c3a3949470fded549dcb9bbfc7da90ffafd328a14d91c26598ceb9ce60c617e369b362246f30c324aeb52b0ded1eb86d5b36cc3b63b9dae6d94b91cc7e188a48f4ae15e888c9f359b5b8e46446914639811de4034d9d99bcfad66c6e8034682370fcb366525de7cbbf0794c111484a6fdd9b484c83966739c40122b8c7df632f87228df2030694432fa99200c11a2792a145a2983681a92286785b8547a9146692e9877bf1583367546ced007c3f1ccf33f2d60a2e4169f01e4603e6798e7b1009793f1355864b2fa3de4982fc0dd953371a485d190c4784e960bd007e760e05d00b095001f9469e45ebb3e28e75cd45d622e485ad0f930887185497a3713758f1ce64e42894021413661735bef40a3abf78230b051d835ad20d471107403db8266a0a35e1bb79701865505a16a97f930a529eab5f052374ca363da96a577916921436f8526449689db2d23c0a6ddd65bda4661bdebe71723025f109e514e3623d7ee26aeefccfdc9cc1b0e7ca7da7b08e53c2f4afac3ce0f5a12724855dab7c6f28a2863844aa8e2705dcf772683a1efde5630e44d1be108a2d5f449ddb510c61cefb321830916985dd3a53a1ced663c757d77ec0d467b85e2f2dc6c23b90cfbb183ddf75455f357d9e15197a7505a1566a7ad557cebd3a32ab730ce8fc83c6fcc9a71a0513ba2f62f7497a3f1e03ff135acf65f10375f3f6b15794d6e8e0d9af66de64cbeabdcc2a73c131c628653b42ff88ee7a3124bf73b16a30cdfae29952137d5ae3e17d22c5f32e2fbea88e1f25d93a4ecb614ecb65a3db3bd1594894cbc8a300dbdb38d78b5aa542d9ce0546c6751aeac7290eb03a4bc8253a4a970f90e3dd7fb5ac0d7d6b53f158348db6f060000",
    ],
    [
      "ETag",
      "ygcosg++nLjNH+l6WFxF0A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-60-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "5d",
      "6f",
      "82",
      "30",
      "147de75790ee7524924c994b7cd08d6c26c46d38ddc3624c2d174481cbdaa23186ff6e5b407d697b3e6e6fefe9d9b26db24f8b88bcd8649326ff15f0d34302f25b1f4210552685da4a2c049047ed064913ed4ede96fef8b79cb99fdb801d97fbc37ce90d8fa351e3126c0b3955beb3420ac729649150f8cf60bbe58d56d01cf48deb35370dcd0dad264fa5d1a6b31fffdd0fefa51c2323cd1641309e043e69a5daec2bb5d6e6293bdc8410038782c1ed4125c71d303935930b9a971938022bce40b44d746123271cab9272444751cea0e7b8fd61df733d6f3078f6dcce9e21a332c542572ce6e4da5fa2a45988473d3d69dc8437b009a38b82c477f9dc27a4a4832e7e2257aa6e4f2bab43ab5bb3c94982f8e2a866116026e8912e8a57d4a34a9d84e415189a51f55b1fa96c39abb62ecb094f2818020000",
    ],
    [
      "ETag",
      "gDVEAWpN1OhLcwVkvSV79w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00d0bb64ad8e6044d21d6002146a4c2d56bbc960084a915f00453abd7b9ddee0bd1f100b21db9677552e4bf0021eb18e66621654a6adb1b4198a8e23c536eb31f29df7bdb197872b67c58e1eed1bdf1415deee2f9197aeddaf7eedd0f97028f373352e04856e453a8cbccfb0b0e11b69d49812aa132b192c7dca54c25ac542bc4b2c9f084323d2c0c6d43ff6b7109ea298094bc084ca57ba75023d3b68a7fe8c566884c3c3c5bcc4479a7fcc330835e3b2f4e3ab897d67556f23efa9b9373cf82e5c6242300172a833255b9e3d678b254213f0dfe4dda396cfab2d632515f8fd03f615220605010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:03 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-61-1595717766871",
    },
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
      "8d",
      "54",
      "5d",
      "6f",
      "a2",
      "40",
      "14",
      "7d",
      "f7",
      "5710f6b58a56016d62b6aed2d5447017b166b3d9909961a0d3224399c16ed3f8df770650616d9abec1bdf79c7beec7dcb796a2a84f2409d41b4585247ace71f6fae59142f54a7a300791f404c90038da5f7bfa6d3fdbceefddad3399cd27e37119450a3403bb34c66d46f30c6176b35977a28ce629c8286d0bc2b6d16bf7f4916ef64cd3308666afc4321c874b923c498607ce5376a369471d9d88d228c62025ac83e8ee64d7f6d75a9ad1478c38d39a69359189691f27fe1a530438a1c978b32e45e40c673ede01124b196774006f9bf41d02769d4844ef09c200219a275c4a2b69104d4212e559412e98de8451980bcda7df9a415d5b4b6bea2988c6f92ef113b0c3574a0038f0f96b8a953b77652b0be76ee5da136fb172fcf5746ed993ce74b5dcd8ce5ad9ce2dd7523880312eb0ca58b92dfe1cf153282ab205987192149a3ce9ad2911deaa8f8b774678a290244215c355986f760dd01b76473084260a877d1d865d0ce1109a3ae8c32e1a0df0208018d4190a65251e2434814160f4cd51e00f048b3f80d0f0210e873ed4bb060a7510f406ba5aa10fa75a5e32c2f18cb09432523559ddba0bcff23d77e34c279e55af3b0479cc67a5f266d58d72b868505de9472db9509466840a51c538178e67b993a9b7b8afc910bbb5c41140afeb67b95d2188193ea3412666c57166d3400e467526b6353b838b4df9710c6222e2f749e7b91c1128e75fd47231ff661e4f2c56a315e56c4aabbaf6dc85f35dad390fefd3dc83387f87675f99d55474eb41749835b85aff7ffd69d572a8e2ad56f2d49f1bcbfd25b1854f7a5c",
      "1ce20c27e89cf513ab2b81a5fb13a748841f0f834488db70cacfb8308b5784d8393bca70f9a648d9f98a7078dd370cfd48288019bf8c3047dd63c4c57190b9f00e27fcd88bf248948d3c3424e53539054c868b77e054433cb40ead7fe9f067ede1050000",
    ],
    [
      "ETag",
      "dn4aN/xMCBvDWHVRWNADHA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-61-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "51",
      "4f",
      "c230107edfaf20f515224b6053131e5051891305c69321a46cb731d876a3ed34c4f0df6dbb017bd12c91c497b577df77fd72d77efb321a0db289529fdc34c8320ab739b0dd450862ac3613e0792cb85c324c3990a66283a0a1627b4bd8e273c0dbf43a186f96dd9dc32e3b61af57b0b8b782844ade978c641c4410fb5cc6ef3a6e94798da534017d22c679922e74d83cc162976978ea4e86a3c72a92a0af91d1cc71fab7ce8094d0bef9b3884f055de823ff26a1d7b9518a91352e27100083d48353d719c3357862a8c7cb6992c5d0e298330f7829a20a0b386498679421b664aa65992db37bddb54ddbb6ac2bdb3cd063f4a888305515b32939ea0b14349ee0a71a31b18a3b6045584cfc300a12542ea13a21097da8e2c827c7dcbef90b713872ad4e855beee646a5b2b6aa9c5410c5b0f8277579252b2a5f783dedf2999c499c2698a7a2a6f483f3da3f63e3d20d759bbeefbb8373c97221bd5053d71dbe0ca66effe5ed4771f99d9f4c70bb13c0df184a8f71d0ce32db9dabae6db5c9c1a977a89c28945105cb41a73d2aff584f9190b980c61c8cbdf10d77a8fe8b1d050000",
    ],
    [
      "ETag",
      "cbeqoKfs0a9fQkb5yLr/4g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`id`) LIKE ? LIMIT 1",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: "%15%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-62-1595717766871",
    },
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
      "c5",
      "54",
      "5d",
      "6f",
      "da",
      "30",
      "147de7575899aab65201c1207448a86334d3a2a6c020b4aba68a98e492ba4de2d4762aa1aaff7db603499068b5a7ed2db9e7de734eee475e6b08194f24098c3e3256247cce806d3e3dd29571a61010385448ebf3641ab0cdd5e8f1d7b487dbc17c61fa8be1609067115dcd719c4650e734633ef0fe62de0819cd52cc28ad4bc2bad9aeb7ba5fbabd56af679ae7bd565ecb215a3b2479520c0f42a4bcdf6cee7c34424ac308704a78c3a771116fbeb49b29a38fe00bdedc976d4a25defc58f822a23e16842683c53c379171604b883189948db23a587ddda76f101c374299fd427cc0be4fb344286b398d4f93350933a6c925d3ab0ccab0f65cbc5602c6dc72ac918b4693c5d83df170ace8bc5384395a2e19f02c12e8fb6c728dbc54aa3f600edc43b73fac9925238cae49044b127868802ed0707c899033b9b566279e8c9d22c7beb264dcb1af6d17e5cdd6e201acb124bec442f2898a2d85e5415bcf530017459904b71db70f0cdbd866bd152a29239411a1bfd21ebbd66c3872ed1babb4215bee4088fdcdfc59357d8d230e653566380601ec9a06a028a693b9edda93f1d029197417a7bb4c2ed37e1766cb6faab2b99b14f63e58c3228f2a9b66c7a8606f6707596e70941da079d9868dd61e47ed00dbff7477d4ea1ebd6370fb745fabd01bf280b6c68c9f0b6b76a76a35a69019ac8141e297821f6e494999c37ff17f90e9bb6b5515f2600b7d2e64980be2f352dd67a0735d12e7b3c809cfdb9d6eb7bd2394854c1cc830cd5d0624c1617c4f3cab08036394cdf4c9562f5ddae1b97392c811c81f65b1be31708e43adb148641738e05504486f352ac6893c0f9104a92d409e7b37b5967a11bc33f40d0712116607e9",
      "d9f6919aeceef958bd1c1b7b93d416ab675239fcf77dfe4ba7bb1dbc2f0725b4ece5646ce9ded7de6a7f00e10ee816b2060000",
    ],
    [
      "ETag",
      "13OPdryKCjXP7a2dSU6cUA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "7282300000d07fc9591c9422a437684181b269592f199620a0b2840042a7ff5ea7ef0fde0f48b20c0f03a2ed0d37e01d2cc91e6eb3add18af2cecd21134725f35053f7fcb49a94e96d49fdb68b382b9553efa163f1414ad54a08332de8504e56781d6b23dc47ccc85405dfd724f246f31adf78011dfcaf4f94fbf15b28b75596d1495f694ae8c5a8b998f3a82cb58239474322ceb216acc11dfa662324925b0f817aa2d2a558a1ae547bd1e9b8b008eebac96a50991ce4a29dc03df25a3386b6b3bd4a75d87379d467166c007e7615c103aa5e338e877003fe9b882e1d7e5d659c104cc0ef1f4bbfbd0605010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:04 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-63-1595717766871",
    },
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
      "8d",
      "54",
      "6d",
      "6f",
      "a2",
      "40",
      "10",
      "fe",
      "ee",
      "af",
      "20dcd7fa5615b089b91aa52d778a5744dbe67221cb3ad06d91a5ecd24bd3f8df6f1750e16c9a7e8399795e666677df1b8aa23e9378a35e28aa4fc2970cd2b76f4fd457cf6406380a65c69adc27d7f78bd074d7eb85bed27e3efc98de86a3515145723443db248226a3598a815dac96ad30a55982524a9b82b0a9f59addc170a077755dd30cbd5b601944c18cc4cf92e191f3845db4db7b1fad90d230029410d6c2747b88b75fcfdb494a9f0073d6aecbb685126b7f2efc3da2187142e3d16a5998c818a41e6c1189a48d237ae35fd6e95b046d5ba1a87e251810c6348bb9b456d0601a0724ccd29c5c30bd8ba008e79e0fbf9580ba3467e6c455308db26decc5680b67ca0671e4f1b704942b6731572cfb6ae1ccc7aeb5b0bde5e4c69c8f5b93c56c35b797cadd8de9980a477e043956192997f99f2d7e7247b9da06182771eec995d98a13912de7687db0c203852411ae1894659eded150d7e80cfdc0d77160f4067ed001df377c7d807a7e070ffbd0dff880aa0cb9b3028f621a0f7cbdd3d53bd81b1abdbed7072df08c60e07bc1a6aff9e7a0e99d01524bf4eed0cbdf94709812965046ca21ab778ee59a9eebacecc9d835ab7d07288bf8b4705eefbad60e1703aa3afd6c24278e929450612a5fa765bba6339eb8d6ba62439cad198408bf2d5fe4e90a50c4e08846a9d81587744e377231aa3d9e9bd323383f29bff6454c54fc3ef83cb6230ae5fef35e4ef65fd771c5c1aa8da2d84d115597ae63d9d76a25b9fb98668da2ec039ed732ac26625a8f62c2acc6d5f8ffeb4fa3a2a18abb",
      "5ada536f57a6f320b1794e661c082085181f55bf707425b0487fe12912e5fb874122c4db70d0675c84c52dc2eca88e5328ee1429265f121ae77ddde8ed090530e5a715c3a3e4c9e320b5600b31dfcfa278248a41ee6a96b28a9d1c26cbc53db0cb25ee1abbc63fff289dd6e1050000",
    ],
    [
      "ETag",
      "ICXpGXOgETVVO7U6KYJDQg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-63-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "51",
      "4f",
      "c2",
      "30",
      "10",
      "7e",
      "df",
      "af20f55188a2b2a9890fa0a84b0071ccf86008a9db0da6dd3adb0e4308ffdd6b37642f9a2592f8b2f6eebbeb977ed76f6babd120ef711a92cb06798de71f3988d5c11cd4a3de782073a6242e194f2590a6ae0645e7ba3af66c767b7278b41a3ebb3c17cfcbd84fdcc7ababa24a060b4828d6ad31c2388a818512e3171337cabcc1529a803e31e02c4fd299099b3b58ad32034f7ccf1ddd5591848706193d0d06dddea04f4a68d3fc9924a48acecc917fa330ebd42ac9c81b7ff52002016900bb5b6782bf41a05c23afa449c6a02551ac006449a21b0b782e789e51c1790b532dfbb4d5ee5c749cb6e3d8f6b9d3de96331e5015f354773c4dc837bfe28a328f7f6a89895dcc401461a1f8560a125586505508a1a5996b48be739be62f85eec8b7cf2ab5e56e6a553a6bb3a25251cc60f64fec389205c5175e8fbb7c267b22a709cf535593fa76f0d0dde3c5d10d752f7dd3f5fbfba2950abd5093d77787fd89df1d8e7f24c7ef746782de4a811c0b8e1e93609cd53e3e3bef38f631d93af59a6b272a6d54257230e980e21feb3e56988b2893606dac2f328c6df71d050000",
    ],
    [
      "ETag",
      "iR6lF2+/yMWIourWviTmIQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`purchase`) LIKE ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%app%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-64-1595717766871",
    },
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
      "000002ffad946b6f9b301486bfe75720a64a9dd424e406a452d44529dbd872e90869544d53629c03750b98dad0aeaaf2df67432e44cdaa6ada373897e7bc3ec73e2f154551ef49bc52cf15d523c14306ecf9c31df5d433e9811405d233bf1f85ed4e787ba3fdbeebaed8b787f993db097abd228ae4d91c454908554e3386819fcfa6b580d12c418cd2aa0056f576b5d1e9768c8661e8ba69348a5c0ea13f24f1bd24dca669c2cfebf5ad8e5a406910024a08af611aedecf5c7663d61f40e70caeb8765eba212afbf5df822a418a584c6bdd9b4109171600b881009a58c7df6cafb7488af1114d50211fd4830208c6916a7525a81c134f64990b11c2e482fc228ccb9e6dd6fc9a04eada1357095c16436764f972892b8e547057165b160c0b330553e3b9391b24c44f55bc4812f95f957cbb18485519f84b020aba5d2532e94fef852518693b9e59ceea2056a687fb78477688f6c57295a9e4b58014f499c0b75911742499ef06e9a6b1f99eb0e212128155536610b43d351c3d4ba9eef19d8375b1dcfd7c0f34ccfe8a096a7e16e1bda2b0f509990cada453e8a69dc8486a923d432fd561363d330758026e882b3d2b1666a9d6643d3bc2ea81bc27a779e274652b8243ca19c6cbaafce1ddbb516ae331b0ffaae553ebb8f446b2f0bf587273f38522a9a5456fb565b5e294a18a142543e677bec5a4e7fe0dad72519e2d20d2140f879fa20af9d8f420efb6cc4500429b0115dc9e1a85793a9edda93717fb827e4f7e86a1bc945d8cf9dd8fd99ca34f739391c753185c22a65ea6db5e45b9f1da55ca3303b8279dc98d5c601a37284f62feaa6ae638fbffc07792728494efe2271f3f5ab52e2ab62896ca4a93f6696732373739ff438e0038318ef2bbee3f9c8c4c2fd8e1d29c2b71b4b6688a5b5abcf5361162f19f37d75cca078d7242aa65100cd66c7e8ee802291a5af2274adad6f235e6d2d590b2288d36d2f8aed5534727d20292bc9c9d364b87887e3cd00d79575e50f4d0b86357a060000",
    ],
    [
      "ETag",
      "WkMl45lhY0xj9drJqWwT5g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-64-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "df",
      "4f",
      "c2",
      "30",
      "10",
      "7edf5fb1d4579738024c4d7810b30864213ac5c41842ca76cce1ba9bed4d42c8fe77db6e135eda7e3faed7fb7a725c977de765caee5db6cdb39f1ae4f12a037a318718545d90d25b85a502766ddc403c33ee308a1722158b01891c4b1cc61f33fffd3099b42e957c81e0da77d248e35d0e45aa34feb4d8ed78ab955c80b971b391b6a1bda1d3e858596dbe7c0b9fc2f85212985a69b98aa2876914b24e6aecbed66b639fb2c76d0c3b905026707e5025710f09cdede48a8baa004f612d13505d1353d8ca99c4bae212d1d394371e7afee86e14f841301edf067e6f2f30e1a4a33015ab57f6df9f907811e3c14ccf5a37932d6cc3e8a360bb8b7c2e13d2d2af291eb07faae94e6ba747eb73b3e991403d4bd4b328b013dcb03e8a4734a3924982640d964eb8fead594e1de734ce1f4e750e4218020000",
    ],
    [
      "ETag",
      "ELRJmdmJ2tmiono4RYH1Vw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "db7243400000d07fd9e724e31245df620471ebb82e5e0cbbab8464b1d2864effbd999e3f383fa0428830562eb42777f00ed64a500fe8e05045e3039c8fe83be5f7fefe7cf4f945f23cac05f1991ffb5031bb343766f1227fe497dcdb5c5f62d03e4a865bd7f484be9c2173df0a9d8dd7de6adac8cc423b4a11f251bc4eae1ca458297ceb4a2ce19608e69323139fd5c5142b4a078da614d59b83c88443a18374709b34a1ce835bca68b632ac133d1924bb3e05c4691fe606a596c28d5333cf93c3047fde3701e62c013b409e6337135676af9928a9ea0efc37cb651dc9ebaa916a2633f8fd03efccf3b005010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:06 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-65-1595717766871",
    },
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
      "00000002ff8d545d6f9b30147dcfaf40ecb14d08090152295ab394ae4809d980b4daa60919c750b7802936adaa2aff7d36900496aaea1bdc7bcfb9e77ef8bef524497ec4d956be90e410c74f252a5ebf3c90503e171ec4402c3cdfaceba1f27b1d2767e9da56bc7c7de6de9ebdcc667514aed014a47982fa94940544f462e30de28294392808e973c2be3ee9ab93e9c4500d43d74d43adb11425d112678f82e19eb19c5e28ca5ec72026244e10c8311d40921eeccaf348c90bf28020a34a37adc23351e5e3c45f130201c3249b6dbc5a44495111a014e044c838a2b7e165977e80413a8879f43386084048ca8c0969350d245984e3b2a8c839d31b377273a5f9f0db32c89eb5b416be044952a6599081149d4b5bc040c05e73245dbbeb95643bd76b7735f7edb513788b1b6b351f2cd6cbcdcaf1a4bb1bcbb52406c204555869265d567f0effa91455d9b688329c559a7ce16d29e1dea68ff63b233c500812ae8aa2262c30863a50cde1348c420346e678124643148666684cc0381cc2a986b46d88409ba15256e34146324dd347c658d7024303a34053353330479111e8ea5483a13a45603b941bf4ee50cb4b8119bac2342714374d96ef5cdbb702dfdd388bb96fb5eb8e4099b0ab5a79b7ea4e398c37a8adf4a3969c28ca0b4cb8a86a9cb6e35bee7ce1dbb72d197cb7962806f0d57b12db158184a2231a147c560c152bb21583919df9caba3a82ab4df9b10fa23ce2cf41e7b11c1e28e65fd57232ff6e1e9f2f56a715f56c6aabecf9aeed7c975bceddfb34b72029dfe1796ecc72cebb75cf3b4c3b5cbdffbffef65a3964fe561b79f2cf8de5fe12d8ca273c2e8a50813278ccfa89d515c0dafd8953c4c3f7874120f86d38e4a78c9bf92b82f4981d16a87e53b8ee7c43688ef48931dd137260c14e234c6dbc8f38390e22174a51c6f6bda88f44ddc85d4752d99253c144387f074e33c45d6fd7fb076ee5ab69e1050000",
    ],
    [
      "ETag",
      "BEF0/ZOgl+mOI/SpO+RV+w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-65-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "54514fc230107edfaf20f515828bb2a1090f0351491014c683318494ed86c36d37db4e2586ff6edb0dd80b668924beacbdfbbeeb97bbf6dbb751ab91b730f1c9758d2cc3d57b066c73b602f1a43613e05924b85c524c3890ba6283a02bc56e9acdf57223dacb9e8b9feb9b0be72b193f3b9d4ecee2de2bc454f2be6524e32084c8e7327ed171adc86b2ca131a8133d8cb23859e8b07e80c526d5f0d49d0c46776524465f23a3d970e874877d5240dbfa71119f0abad047fe4d42af73a310236b5c4e200006890787ae53866bf0c4408f97d3388da0c131631ef0424415e6f08a61965286d890a986d56a98adab966ddab665b56d73478fd0a322c44455cca664af2f50d068829f6ac4c4caef80e5613ef1dd284850ba84f28424f4a18a439fec73dbfa2fc4c1c8b52e4bdc6237374a959555e5a4823082c53fa9cb2b79a5f28557d32e9ec989c4698c59222a4adf0ec7ce091b976ea8daf48de3f64f25cb85f442455d77f0d09fbacec3e35171f99d1f4cd0dd08e08f0ca5c738686799e797ed966d9d939d537ba89c28945105cb40a73d2aff58f7a190b980461c8cadf1036899b5611d050000",
    ],
    [
      "ETag",
      "/1/jbyt8bCTowjD3AxnOYA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`purchase`) LIKE ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%app%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-66-1595717766871",
    },
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
      "ad",
      "94",
      "6d",
      "6f",
      "a2",
      "40",
      "10",
      "c7",
      "df",
      "fb",
      "29",
      "089726bda42af800d8c4f48ce5aee4a8b68835cde5a2cb3ad86d81a52c78d7347ef7db05544cbda6b9dc3b9887dffc7766775e6b92243f9168299f4bb24756cf19242f9f1ea9279f090fa468253ceb6076e369f7e4b71e5f4613f3d646597435e8f78b2892673314c601d419cd120cec7c3a69ac129ac528a1b4ce81754dababdd5e5757755dd30c5d2d721904be4da227417848d3989d379b5b1d8d15a5ab00504c5803d370676fae5bcd38a18f8053d63c2cdbe49558f3fdc21701c5282534ea4f2785888c413287109140c8d8672fbd2f87f806416163c5a3d70403c29866512aa415184c239facb2248773d22b377273ae79f75b31c813d33687ae341c4f47eee9028502b7f82c2126cde709b02c48a5afcef85a5ac4bcfa0362c016d2ecca744c6e49a84f029893e542ea4b17d260742949f678663aa7bb688eb2adef26f7dad6b5e54a45cb73094b60298972a12ef202a8c8e3deb2b9d691b9ee100282525ea50c9beb8a865443e979bea763df68773d5f01cf333cbd8bda9e827b1de82c3d4055422a6a17f928a2510b544343a86df8ed16c6866e68002dd03867a961c550ba2d5551bc1ec82561b33bcfaf84a47049584c1929bb2fcf1ccb35e7ae331d0d07ae593dbb8f786b2f0bf587273f3852ca9b5455fb5e5bde288a1342b9a87cced6c8359dc1d0b5ee2a32f8a5b36185f0cbe4595c3b1f050cf6d9284121a4905cd3a5188e7c339e58ae351e0dec3d21bf4737db48c6c37eecc4eecf54a5b92ff1e1a88b2914562153ebc815dfe6ec28e50e",
      "05d911ccba34cbea01a37684f62fea26ae638dbefd077927288e4ffe22b1fcfa59abf065be444a69f2edd474ee456eee131e077c4820c2fb8a1f783e22b1707f6047f2f0edc612197c69edeab3949bf94bc66c5f1d2750bc6b1216d32880465b51546d0be48949fa36a2a3e9db88375b4bd48210a274db8b627b158ddc1c48ca2a72f23411cedfe1a81ce0a6b6a9fd01842ded107a060000",
    ],
    [
      "ETag",
      "vlWPb6Yix7pDnSEQLaunHA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-66-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff4d51df6f8230107ee7af20ddeb486489b02df1612c6633214ed98c0f8b31154fac030edb638b31fcef6b0ba82f6dbf1fd7eb7d3d3baecb7e44b965cf2edb88ec58833cdd654073734840d53929bd55582a60f7c60dc433e38e71f921677535d80b5f44453038cee9381f8d5a974af75070ed3b6ba4f14e40be551a7f5bec76bcd54a5e80b971bd96b6a1bda1d3e854596d32fd1abf8d935ba9c0ad95a68b387e89e231eba4c6ee2bbd36f62907dc24b00309650ad70755120f90d2c44eae7851e5e029ac650aaa6b620a5b399358575c227a9af282c0f3874fc3d00fc320780cfdde9e63ca4960692a169fecd29f90789ee09f999eb56e265bd886d147c17637f9dc26a4a55f53fcc02e54d39d564e8f56d766d18940cd24ea5914d80906ac8fe215cda86492205983a553ae7feb5d50c7398df30fb37243e318020000",
    ],
    [
      "ETag",
      "LoWOrPup0hi1iBm60qQtqQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00d0bb64ad8e7c8aa44b502808022211bbc9041a4b004b08945fa777afd37783f703489ed3aec37d53d12ff00a6622c34dbe3936ba21453913d11835265cabd7204418aed30b3a28257233747387ddd216840406d5eb9d20477eb12bcfa8f40f13ca2a8f876eeb54e224d7ebacc9b44f636995e12e6c6f6b5ace6c3a9dc792829cac3baae281bf7bdaf418be551f51bf9ed892c7fb62bc8596f71855c265895fa5c93e9c5120923082b8f5df6c310641d3f941ebeecdd2e7cc2dfb494b631c99a9ce6d988015a013678276983d67ca0b842bf0dfc4fdcce9f36a5022a800bf7fbc8c45fb05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:10 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-67-1595717766871",
    },
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
      "8d",
      "546d4fa34010fede5f41b8aff6cdb6504c9ab3a9a84d5a7a02d578970b59960157298bec52634cfffbed026de16a8cdf60669e679e79d9f968298afa429240bd50549f44af3964ef3f9ea9af9e490f7014498f31dc8ed31bcd78f25fddc7dfdc88f23be7f16e3229a34881666893c6d06634cf30b08bb5d389329aa728a3b42d08db9adeee8f8c91ded7754d1bebfd12cb200e172479910c4f9ca7eca2dbddebe844944631a094b00ea69b83bdbb3defa6197d06cc59b799b62b32b1eed7897fc614234e6832593ba5889c41e6c1069158ca38a203ffb249df2168d38944f496604018d33ce1525a498369129228cf0a72c1f4218cc25c683efcd60caa632ecc99ab601ae79bc44bd006ce940071e4f1f714946b7bb554e6d6f5ca5e4eddf9caf29cd9adb99c7666abc57a6939cac3ad699b0a477e0c0556992897c59f257e0a4545b600182749a1c995de9a12e1adfa38ff6484070a49225431a8c23cbda7a1feb867f8a1afe3703c18f9610f7c7feceb2334f07bd818c230f001d5190a65251e2534c19a3144c668e819c630f4867e187a08c3b917205d1b1986168410a8157a77a8e52d231cae084b29235593d5077bee9a9e6bafadd9d435eb7587288ff955a9bc5975a31c2e1a5457fa554b4e14a519a1425431ceb9e59af674e6ceef6b32c46e2d2042f8dd7995db15a298c1118d32312b0ed992067230aa355d9a574770b129bff6414c44fc39e83c962302e5fc8b5a4ee6dfcce38ac56ab4a29c4d69551dd79e5b376acdb9fb9ce61ec5f9273cdbcaaca6a25b4fa2c3acc1d5faffeb6fab9643156fb592a7dead4dfb51620b9ff4d8104206093e66fdc6ea4a60e9fec62912e1fbc32011e2361cf2332ecce2156176cc8e3328df14293b5f118e073d63a0ed090530e32711fd9ea6ef234e8e83cc051b48f8be17e591281bb96b48ca6b720a980c17efc0aa86b86bed5aff00a8d6ee12e1050000",
    ],
    [
      "ETag",
      "94v8pG69hbqTYZt9guQSYQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-67-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c1",
      "6e",
      "a3",
      "30",
      "10",
      "bd",
      "f3",
      "1591f798442a6d036da51e9236dd45a2d99650ad942a8a5c180859c3b0b6e92aaaf2efb50d69b87485b4917ac19e796ffc34633fdeac5e8ffcce8a985cf5c84b96fea9806fbfa5201ff52600513129d4526221800c341b244d35fbf4d7e6b4efe4f1e28c15af0b1ef876dfc3f4faba6689680d3955bc3715a938c980c542c5cf26ee3579831534077d6284acca8b95090707586e4b03cfc3c09b7d6f2339c606993df9fe78e24f4903ed069f8bc454d29539f2ff24ccbab41a31b2c1970012e0504470e8bae4b881487a66bc82e62583a1c08a47201a115d58c329c7aaa41c71a85243c71ddaa3cb916bbbaee35cb8f69ece30a232c342573ccdc987be444959807ff5888953df01afc37ae2fb5190a47509ed0929e855176731f9c8ed06ff207ab3d0396f719bddd26a55765655934a3206ab2f525757b2a6ea8577d36e9ec991c4698e55213b4adff93fc7476c5cb9a16bd3b7e3707a2c592195173aea86defd741e8eef1f3e1557dfe5c10493ad04f1c051794c8071967d727e31729d13b277ea0d6a274a6d54c92b30e988aa3fd68f4caa5c4299006b67bd03dc57b8d51d050000",
    ],
    [
      "ETag",
      "2Wj2+6mdZ3lnvZrRL1+Iog==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`stamp`) LIKE ? LIMIT 1",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T08:00:00.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-68-1595717766871",
    },
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
      "cd",
      "54",
      "db",
      "4e",
      "db",
      "40",
      "10",
      "7d",
      "cf",
      "57",
      "ac",
      "dc17909ac44ec9b58a684adc623517b01d104528599cb159b0bd66778d8410ffdef53ab11d35a555d5874a7988e772ce99d99979a921a43d9078ad0d90764b82c714d8f3bb7b7aabbdcf3c2070a03cdd232339053cd65b1cb7fd3ef076d20e86c33c8aa86c8ea324843aa729f3800f164e2360344d30a3b42e01eb9d5edd68f7db5da3dbed747a5d23cfe510fa13123f64087742247cd06c6e7534024a8310704278c3a351616f3eb59a09a3f7e009dedca56d4a26de7c9bf838a41e1684c6c385938b4839b025449884998c327b7dfb6917be4170d40864f413f1007b1e4d639149cb613c1afb2448990297482fd228cd4a73f15931688e39314f5c74325fccdc83158e32b8d521c21c2d970c781a0af4c59e4fd12a91ec7798035fa1cb53d336a585519f84b024eb151aa263349a8d119acc2f4dfb60c585142d7126d63753ba26d6d47251de6fc5bf061f4bec31161252549465bedc68a92715c04591269d9ba65b7bde5bdb44bd162c09239411a10ab566ae698f4e5cebc22c65c8ae4f20c0deb3f398f5ddc72187321b331c810036a56bc820cee68ee55af3d9685222a8469e6d23b90cbb2ec4963555d1dce704760a566e915b33999d23ade27b7dbf17e50287e91e98a78d593376306a7bd0fe469d6b4d4dc71d4dcffe81c296ded2eb7a4b2e86abf706ba2e7f0d5dd7bfff42f8e6df4dad42a9c9ddda08d6ce17a67d95e52a5fe6b1c10706b1578a78737a4ac8dcfd07a743866f1739cb90bb5cf0cb0510840be2f192dd63a0625d12e56f9403f63e183da3b70594",
      "894cfc1cd1d7fbdb0888d7fbfd3be469851818a3cc56db5c3d02520ecf9593583e0b599fabab50cc76b5b6c75d57049ce3406998511461e1dd9138409c04b1a466807cca909fc65e969f1f0565c22c48238805ca268a0f5031500de4a44942998075892203f27be2b8b635fb7af871f3f9f9ca351d79a404ba36063de346db190a556d75132bb7e53725bf59f47f5af676376eca01124ae1783e33d54cd45e6b3f009d623afc65070000",
    ],
    [
      "ETag",
      "b741pHeaD02sa5f9es5p5g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00d0bb64ad0e8a0874994215ac6241be1b0621151a21211f509cdebd4edf0dde1314658938cf05c1a8036fe051accc45b9d813032ebf50407559af49b9f5c49e46384d7d547146cce83ddbe2b618b5ee3004c72b157cac87d61c6ce2d12e644d368d99bcf8b1bb52902f9173af6e04f667abac7198c86f69ece8a7653ae7931e48e8749ac3bcd613b0b523b2e14ba2c854a9bcd04e6ee17c97ae7b9d3d58dd17c7d4ffc9a3abdbc41f4a56599368e086f40c172e3dc1299ecb0b4e54cd10b16a1f8c14cc00bad386219e37af99aa99e60cfc3773f1a0e87585a8608881df3f1089b1a205010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:12 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-69-1595717766871",
    },
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
      "8d",
      "54",
      "5d6fa240147df75710f6b58af88534315b63e99644718bd8a6bbd9909961a0d3224399c1c66dfcef3b03a8b0364ddfe0de7bce3df763ee7b4b51d4179204eaa5a24212bde638db7d7ba650bd901ecc41243d7f356d71bbd3ec3be875b7ddb75fc1e3bcf77437999451a44033b04963dc6634cf106697eb5527ca689e828cd2b6206c8fccb63e3487866e18a3d1d8d04b2cc3713827c98b6478e23c65979a76d0d189288d620c52c23a886e8e766ddbd3d28c3e63c499d64cab894c4cfb3cf1f79822c0094d26eb5529226738f3f1069058ca38a10378d5a4ef10b0e944227a4b100608d13ce1525a498368129228cf0a72c1f42e8cc25c683efed60ceaca9a5b334f4134ce37899f800dbe5002c081cf7729566edce542b19d9ba5bb987af6d2f157b35b6b31edcc96f3f5c259290fb7966b291cc018175865a25c157f8ef8291415d902cc38490a4d9ef4d694086fd547fb83111e29248950c57015e61bdd11d0c75d1386d040e1b83f846117433886c610f4611799033c082006758642598907094d4c3d84a3fe70e00ff49ee90ffa68e89b2118f80805a6d18348c700aa157a7face52d231c5f13965246aa26ab0faeed59bee7ae9dd9d4b3ea7587208ff975a9bc5975a31c2e1a5457fa594bce14a519a14254314edbf12c773af3ecfb9a0cb15b731c01b45bbdcaed0a41ccf0090d32312b8eb3050de4605467bab0ae4fe062537e1e829888f87dd4792a4704caf917b59ccdbf99c7138bd56845399bd2aaae3cd7767ea835e7fe639a7b10e71ff06c2bb39a8a6e3d890eb30657ebffaf3fad5a0e55bcd54a9e7ab7b6dc47892d7cd2e3e210673841a7ac5f585d092cdd5f384522fc70182442dc86637ec68559bc22c44ed95186cb3745cace5784e37e4f1f98074201ccf87944cf3c469c1d07990b6f70c20fbd288f44d9c87d43525e9353c064b878074e35c4",
      "7d6bdffa07fdece308e1050000",
    ],
    [
      "ETag",
      "z//MHy/IQbT0v0wZdYL2hQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-69-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d16ac230147def5748f6aaa0a0ad0e7cd04d9da0ce691dc21089ed6dada64d97a41b22fefb92b46a5f1c85097b6972ef3937877b93d3a3512aa17d10b9e8b1843681ff99003b3cf820ded466063c2182cb25a6110754566c10d857ec2ae9d7cdea62db5dee89f3be770fbbe560efb7db298b3b5b08b1e41d6524632f00e272197fe8b894e53516e110d4890e254918ad7558bec2e2106b786ecf8693411e09a9ab91c96234ea74473d9441a7f26d11170bbcd647fe4d42af2b2313433bba9981070c2207ae5dc78ceec011433d5e8ec3984085d38439c033115598c23ea3498c19a51599aa98ad4aadd16a5835cb32cda6553bd30975b00868a42a167374d117546032a3df6ac4c84cef80a5613af1f3289097bb84fc8424f4a58a03175d72a7f22fc4e1c436eb396eb65b19b9cac2aa72525e4060fd4feaf24ab658bef062dad933b993380e69128982d2fdd16be78e8d4b37146dfab963f7ee25cb85f442415d7b38eecdedce787a535c7e575713740f02f89451e9310eda59b56abdd9b0cc2a3a3bf5892a270a6554c112d06907cb3fd64b2064cec3848371327e00e61052d81d050000",
    ],
    [
      "ETag",
      "0lF460UhBXklcVkdyjXGkg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`stamp`) LIKE ? LIMIT 1",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-70-1595717766871",
    },
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
      "cd",
      "54",
      "5d",
      "4f",
      "db30147defafb0b217906893b494964e15eb206c11fda0490a6208b5267182218953db017588ff3ec7699354ebd834ed616fc9fd38e7dceb7bef6b0d00e509c79ed203ca3d0e9629a2ab0f8fe45e39c83c88c320f3c4f1c575d8369b2fc7a9ad9e4f57df936997bcf4fb791496d90c464988ea8ca4d445ac37b31b012569022921750158ef6875bd7ddceee89dced151b7a3e7b90c85fe10c74f19c203e709eba9ea464723202408114c306bb8242aecea73534d2879442e67ea36ad2a9898fa3ef149485cc83189fb333b17913244e7288238cc6494d9defda76df80686512310d1cfd845d075491af34c5a0ee392d8c7414a25b8407a154661969a8bdf8a41b18da171ea80d3c96cecec2d6094c12df60164603ea788a52107e7d664041689607f800cb105b8fe6a5886b050e2e310cdb1b7007d700206e3330086936bc3da5b302e440b9ca1796108d7d01c990ec8fb2df93de443817d06b980e41565992f379af2493962bc4813ce75d3cd1defadaca3de0a968462423197859a63c7b006a78e7965943244d7872880eeca5e667df761c850990d298c104774443c94415c4e6cd33127e3c1b044908dbcdc443211765b882d6baaa239ab046d152cdd3cb766328f0e958aefed6027ca150cd31d30cf6bb3a26f61d476a0fd8d3ac71c19b633185dfe03854dada9d5b5a6580c476ff6f4564f3f6c689af6ed17c2d75f77b50aa522766b2d5899ce0ceb26cb95becc63211f5114bba58877a7a784ccdd7f703a44f86691b30cb1cb05bf58008e19c72e2bd95d8a64ac83a3fc8d72c06eab79dc6e6f004522e53f45b4b4d6e12602c5de6eff16795a214694126ac96dae1e012187e5ca712c9e057b5379158ad9aed6b6dc7645883118480d630222c8dd071c0780e12016d414019f50e0a7b19be5e747419a200d",
      "d208c51c6413c57aa018a806b0d324219423af441101f93db11dcb1c7fd9ffb8fefd7ce318b638521cdceabdae7ea76c0d85acb6ba8995dbf29b92df2dfa3f2d7bb31b77e50071a9f06c3236e44cd4de6a3f0081237fbf65070000",
    ],
    [
      "ETag",
      "nnKWl5I2w9uS/FQyzpQ8ow==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "2d8ea00ea4bb8a14e42b0cd4e8260324fc3502e167a777afd37783f703e234a57d8f39abe9037c802596e03a5d5b4c39883ef9ac475f704a34244bdf8c81b5f9468ee0e232f4cfc81191c9d361caa4a3726df5899d3539b81514bf9cacdfe96c52a9884fc2c52b8a446741e55523874d653baaabddad7b1ef6d92c3af5361ab8dd92c6407239204f82caf075cdebf9f5b830267337346e754c0dcb68732295cc1cac482e58e4361a313d1b1ef9043d6b3f51438511d98484988d90bcecd30eac009d9f65477b5cbe67db3d842bf0dfc47c79d2f7f540e38e76e0f70fd6a6ce6a05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:13 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-71-1595717766871",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d54db6e9b40107df75720fa1a5f882f9048566339a4716be30670a2a8aad0ee7ac09b6096b08ba328f2bf7717b08deb28ca1bcccc3973e6b2f3ded034fd99264bfd52d3318d5e72c8debe3d31ac9f290f0814290f70fe32da4456f2bc62e87585bd5f8f3ff3bbe1b08ca2059aa3751a4393b33c23c02f175e2bca589ea28cb1a6246c9a46d3e85ff44dc3340703cb344a2c87389cd2e45931ac8448f965bbbdd3d18a188b624029e52dc2d67b7b7b73de4e33f60444f0f671dab6ccc4db9f27fe1e33820465c970e19522720e59006b446325e3805ee2ab63fa1645eb5624a33794002284e58950d24a1ac29290467956904ba6776994e642f3feb766d03d7b6a8f7d8db0385f274182d670a62d914081784b41bb71e7336de2dcccddd9c89fcc9dc01bdfdab3516b3c9f2e668ea73ddcdaaead09846328b0da50bb2afe1cf953282ab22d810b9a149a7ce5ad2991deaa8f930f46b8a750245215872a2c303b0364589d0b1c62938456b78fc30e606c61b38fbab8432e7ad05b6240758642598947094b30eef6cc2558410ff7cda037e89000935e2720e1b9796e588624b0f40abdddd7f29a5101d794a78cd3aac9fa833bf1edc07717ce78e4dbf5ba4394c7e2ba547e5cf551394236a8aef4b3969c284a33caa4a8629c13c7b7ddd1d89fdcd764c8dd9a4284c89bf7a2b62b443187031a65725602b2195baac1e8ce68665f1fc0c5a6fcde057119f167aff3508e0c54f32f6a3999ff711e5f2ed6512bcad99456ddf3dd89f343af39b71fd3dca338ff80675399f554766b253bcc8fb81aff7ffd6dd472e8f2ad56f2f4bb85ed3e2a6ce1531e1742c8202187ac5f585d052cdd5f3845327c77181442de867d7e2ea459be22c20fd94906e59ba265e72b42abdbed5a7b4209ccc469c4c0b0761127c741e582352462d78bf248948ddc1e49ca6b720a980a97efc0a986b86d6c1bff0039b1e4b8e1050000",
    ],
    [
      "ETag",
      "essqAvg8nkhoawhbSKYJuQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-71-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d",
      "6f",
      "82",
      "30147de75798ee55134926e8121f70d38dc44fc464cb624c07178703cadaa233c6ffbeb6a0f2b28564267ba1bdf79cdb937bdbc341abd5d04798f8e8ae86dec2f56706747fb3063e931b07581671269694240c505db281e3b564fb9dadfd3270be06b3be1e6e9f3b1b8e27a35db79bb398f70e3116bc8388441c8410f94cc4af2aae15798525380679a247a22c4e562aac5f60be4f153c771d7bfc584662e22b64bc180eaddeb08f0ae858ff59c4c71cafd4917f9350eb522bc4d086bc39100085c4834bd729251bf0b8adc6cb709c46d06024a31eb0424416e6f09a922cc594908648354cbda1b73a2d53374dc3689bfa891e110ff39024b2623147677d4e388e1cb2932346467e07340ff3899f468182d225942724a0ad2c0e7d74ce1debbf10edb16bdc96b8c56ea9952a2bab8a49056104ab7f521757f28ec50bafa65d3c932b89e3986409af283d184eac2b362edc50b5e907cbed5f4b9671e1858abaae3deacf5d6b34fd515c7c971713f4f61cd89412e13106ca597af3b6dd328d263a39f59e48277269544e3350690f8b3fd653c8452ec01103eda87d03d217bdaa1d050000",
    ],
    [
      "ETag",
      "d9vIYFRxFQE1ivX9jtaOMw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`amount`) LIKE ? LIMIT 1",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "%1.54%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-72-1595717766871",
    },
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
      "c554ef4fdb3010fddebfc2ca84d824daaad01f50a9621d042d5a68589bc2d0841a37b906431207db29aa10fffb6ca74d52ada0699ab46ff1bdbbf79eefce79a921643c922430fac89893f02903b6faf040e7c6814240e0502159a7f5834fb8ddbac5ab3676fcf3e5d3eaf97930c8b388aee6384e23a8739a311f787f3a69848c66296694d62561bd77586f754e3abd56afd7ed1ef75a792d87686193e45131dc0b91f27eb3b9f1d108290d23c029e10d9fc645bcb93c6ca68c3e802f78735bb6299578f37de1d388fa58109a0ca693dc44c681cd20c6245236caea60fe799bbe4170dc0865f692f8807d9f668950d6721a9f260b12664c934ba617199461edb9385602c6c4b4cd33179d39d391fbd1c3b1a2f33e21ccd16cc6806791401763e71279a954bfc71cb8876ebe9a635346185d90086624f0d0009da2e1e81c21dbb931c71522dbfa664accb62e2d17e50dd706025860497e8e85e414156b0acb83969ea9002e8a3209aebb6eed18b8b1ce7a2d545246282342dfd41ab9e67878e65ad7666943b6dd8610fbabc9936afc02471cca6acc700c02d8250d40515c3913cbb59cd1d02e197427af36995ca6fd2ccc9677aab2b9ab14b62eac61914795cd6edba860af073b59ae7194eda059aec3466b8ba3b683ed6fdc5dd8cef0dff8db6b353aedbd374caebfee6a1501433ea4b539e3fbd41cdfaa5a8d29640c0b6090f8a5e4bb9b5252e6f01ffc2764fae6d5aa0af9700b7d2e64980be2f352dd67a0735d12e7f3c8098f8fdaddeed186501632f17bc6c961210949b01bdf12cf2ac2c0186563fd74ab2f5edae1b97392c821c81f66b1c231708e43ad314d641738e07904486f362a068a3c0f9104a94d409e7b7b65ced6cbe01da02f384001cd54951e701fe5e3dd9cf6f3e3beb13550edb4fa622aff80b7edfe07c39b8dbc2bc726b4fab93332f5246aafb55f1ccb6111c8060000",
    ],
    [
      "ETag",
      "u51XsSsL1Yay4aOcDvqyww==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00000002ff1dcfdb7244300000d07fc9f3da1184ea1ba15bd362ed58e1c968a4665711a12ee9f4dfbbd3f307e7075494b2692ae7a1653d78067ba5d9477a7c1b9e5c983053f79a6195c1f615a0152531d405ff2491d21befd68b54528787d122c978eda7c2252b925a61eb38ba3325117b6bf8b2b6ea2af6112669f43d8e1995739143bf8b0ddc6d9ba636f5b07c244a68a9b8f29c2b8acf834ba8b8fb65c0567e0a9b1143a84638f40b1864af2a6aabbc6b31325547e4b4ed6b983a012dc89099f339e4274fd3d2faa22f926f2d3800b6f19b6053797bcc7464db07f0df2ce79db3c7d565956002fcfe01451e04b105010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:15 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-73-1595717766871",
    },
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
      "8d",
      "54ef6f9b3010fd9ebf02b1af4d427e92548ad62ca12b52423a425a75d3846c7250a78029369dba2afffb6c20092c55d56f70f7debb7777b6df1a8aa23e9178ab5e2a2a26c17306e9eb971dc5ea85cc004781cc44bb6f37f3c5f5ce986ba6163dacfefe7cb8dd4c2793024572364351124293d12cf5805d6ed6ad20a55982524a9b42b0a9f79a9dc178a077747d381ce99d82cb20f417247e920a8f9c27ecb2dd3ef86805940621a084b09647a363bcfdd26d2729dd81c759bb5eb62d2ab1f6c785bf86d4439cd078b25917263206a90b1122a1b471626ff1555dbe4550d40a04fa8578803c8f663197d60a198fc63e09b23417174a6f2228c2b9e7e36f25a0ae8d853173148f865914bb318ae042d9228e5cfe9a80726daf968a695dafece5d4315796bb9edd18cb696bb65a6c96d65ab9bf316c43e10887907395897295ff59e227779457db02e324ce3d39325b7122b2e51ccd775678949022c2158312e6eada107546da18fb58f7fc516f807d0d301e617d807a58f3c67de86f31a0aa42eeace0a3580c4af07067d471a187902bf023178bfdb87d7ddc83aea6613c04b564ef8fbdfc49098739610965a41cb27a6f9b8ee13af6c69a4d1da3dab78fb290cf0be7f5ae6bed7031a0aad38f4672e628490915a6f2759a9663d8d39963de556c88b3b5800079afeb6779ba7c143238b1512a76c5215dd2ad5c8c6a4d97c6fc44ce4fcaed01c404e2d7d1e7a91d0194fbcf7b39db7fbd8e230e566d14c56e8aa8ba766cd3faae5692fbf765ee5098bda3f35286d5444ceb514c98d5b41aff7ffd6e546aa8e2ae96f6d41f1bc37e90dc3c273336f89042ec9daa7ee2e84a6291fec45324e087874132c4db70accfb8088b5be4b153752f85e24e9162f2a5a0b80cddee515010537e8ee877c607c4d9e3206b4104313fcca278248a41ee6b96b28a9d9c26e1e21e58e512f78d7de31fde09ef23e1050000",
    ],
    [
      "ETag",
      "mjBHDLFjED0I0mYOzZYPUA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-73-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d1",
      "4e",
      "c2",
      "30",
      "14",
      "7ddf5790fa3ae288b281890fa8a88b1311464c3484d4ed0e86dd3adb4e82847fb7ed86ec45b344125fd6de7bceedc9bdedd9c66834d05b9c86e8ac815ee3f97b0e6c7d3407f1a83623e039115c2e194d392053b141e0b9621fdb6ef7d3e299d7e93e4f9e82ae75271cb23a3f2f583c584082256f23231947319090cbf845c78d32afb11427a04e0c28c99374a643730f8b75a6e1b13f7207375524a1a1460613cfeb5d787d54425bf36791100b3cd347fe4d42af53a314434bfa3a820818a401ecbbce185d42205c3d5e8e938c4093d39c05c04b115558c07346f30c334a9b32d5744e9aad76b7edb41cc7b63b4e6b472734c022a6a9aa988cd1b7bea00293115da91123bbb8035684c5c477a34051e512aa1392d0872a8e43f49ddb9abf10dd816f9f56b8e56e6a542a6babca49453181d93fa9cb2b5960f9c2eb6997cfe440e238a1792a6a4a5f7b0fbd03362edd50b7e9ab9edf3f942c17d20b35757df7be3ff67bf7c31fc5e577ba37c1c55a001f322a3dc6413bab659d76da8e6da19d532fa972a25046152c079d0eb0fc63ddc642e6224c38185be30b2448c1c11d050000",
    ],
    [
      "ETag",
      "/6I9z0spL89ZUWc90Kt7lw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`id`) NOT LIKE ? LIMIT 1",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: "%15%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-74-1595717766871",
    },
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
      "c5",
      "54",
      "5d",
      "4f",
      "db",
      "30",
      "147defafb0322140a3ed0afd804a15633468d1dab4a429084da871d3dbe092c4c1769018e2bfcf76da24d50adad3f696dc73ef3927f723af15848c47122f8c2e32e624784a81bd7c5ad1b971a410103850c8dd78356c8676cbbfb965fcec4bf26bf5b9cfae7bbd2c8be86a8ea324842aa729f38177a7935ac0689a6046695512563bcd6aa375d6ea343a9d76fbb4d3c86a3984cb01891f15c3831009efd6eb1b1fb580d220049c105ef36994c7ebcfc7f584d115f882d7b765eb5289d73f163e0fa98f05a1716f3ac94ca41cd80c224c4265a3a85eccbf6ed3d7088e6a81cc7e263e60dfa7692c94b58cc6a7f1920429d3e492e9550665587bce5f4b0163620ecc4b175d8ea6b67be0e148d179870873349b31e06928d095331a222f91ea0f9803f7d0ed77d3316584d125096146161eeaa1737461f7111a8c6e4de7c093b143648f5c34b07e98121b5843cb4559c3b581052cb124ef63213945c99ac2b2a0a5672a808bbc4c82ebae5b3b066eacb3de72958411ca88d05f6ad9aee95c5cbad68d59d8906d1f4080fd97c9936afc12871c8a6acc700402d8902e40518c4713cbb546f6c5a060d09d1c6f32b94cfb999b2dbea9cce6be24b0f5c11a165954d96c378d12f676b493e50687e90e9ae775d8686c715476b0fd4f777b8dd6de3b06d74ff79512bd218f686dccb89e9ace9daad598421c580283d82f043fdc92823283ffe21f21d33717ab2ae4d1e6fa5cc83017c4e785bacf40e7ba24ca6691119e9eb44f8e3b1b4259c8c49f19cdb35c12e2c56e7c4b3c2d0903639439fa6ccbd72eedf0cc3989e508e4cf325fdf0838c781d698c6b20b1cf03c04a4b71ae5e3449e87488cd41620cfbd1b9b33bd08de11fa8617",
      "1211ed26d2b3ed2235d9cdf3be7ad937b626a92d96cfa474f8effbfc974e373b785f0c4a68d9fec83675ef2b6f95df630d5b49b6060000",
    ],
    [
      "ETag",
      "YPjM4lN5cVWrs90pzj+DrQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "8b08000000000002ff1dcfdb6e82300000d07fe9b3182eaec0deda20180509c2b8bd3480050a063a6e22cbfe7d66e70fce0fc88a828e2399fa9676e013bc3259df17fb4baf61c92bf2753bd26734c941996432815e05935356097183103402f1ca0c03c6a451b15b79529f428960a3fa7edc97a969cde21eda733720e7cbaffc1c4f3e7a9c342b8c92e0807aa26eb51c3c2d322f2c7058b4219be8e5a4bd44a1d53d3c86be529fa1a5d479d849ecd8705e8ad699bb4caa8545e566eaba9a3da3cbedaa38a6ceeb98aea9bcdc36414d0288d7f2007680ae9c0d7424ec3d533e747d07fe9b647a71fabe629a0d7400bf7ff2e0cc9205010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:16 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-75-1595717766871",
    },
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
      "ff8d545d6f9b30147dcfaf40ecb5f90e012a456b969235524256425a4dd3846c63a85b82a96d5a5555fefb6c20092c55d537b8f79e73cffdf27b4bd3f4279286faa5a643123fe798bd7d7ba450bf501e2c40ac3cc66d1a3ffd781ecc8dc19cde09f4c04287bf4e26651429d01cecb204b739cd19c2fc72bbe9c48ce6196094b62561db34da7dc336ccbe698ec796d92fb11c27d192a44f8ae141888c5f76bb071d9d98d238c12023bc83e8ee68efbe0cba19a38f1809de6da6edca4cbcfb79e2ef094540109a4eb69b5244ce310bf00e9044c938a14378d5a4ef10b0ebc432fa85200c10a2792a94b49206d1342271ce0a72c9f42e8dd25c683efed60cfac6593a335f4334c9776990821dbed042204020de32accdbdf54a5bb8f3b5b79afa8bb51b6c6637ce6ada99ad97db95bbd1ee6f1ccfd10480092eb0da44bb2afe5cf953282ab285980b92169a7ce5ad2991deaa8f8b0f4678a450245215c7555860f6c6a06ff56c18411345d6d080510f436841d30043d843f6088f4288419da15056e2414ad39165dad018c0008ca36130b2ad30b0d1d00ec6703c1c8e2c23347aa65ea1f7c75a5e1911f89af08c72523559bff716be13f8ded69d4d7da75e7704f2445c97ca9b5537ca11b24175a59fb5e44c51c60895a28a712e5cdff1a6337f71579321776b896380de36cf6abb2290707c4203266725305bd1500d4677a72be7fa042e36e5d72188cb883f479da77264a09a7f51cbd9fc9b797cb9588d5694b329adfac6f716ee4fbde6dc7f4c730792fc039e97caac67b25b0fb2c3bcc1d5faffeb6fab964397b75ac9d36fb78ef75b610b9ff27838c20ca7e894f50babab80a5fb0b4f910c3f3c0c0a21df86637e2ea4595e11e2a7ec88e1f2a648d9f98ad01a8ee5611c08259089f308db181c22ce1e07950bef702a0ebd281f89b291fb86a4bc26a780a97079076e35c47d6bdffa0704ec7e22e1050000",
    ],
    [
      "ETag",
      "5QngkBq2F52FoVtchrdEsw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-75-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "c554514fc230107edfaf58eaa39080914d4d78409d4002a8309f0c2175bbcd61b79b6da72186ff6edb0dd90b668924beacbdfbbeeb97bbf6db9765dbe42dc94272659397247e2f806f4e62908f7a3307513029d492632680b4341b248d357b18dfd19ba9383b65e87d7e8cde936967c8e27ebf6489e01552aa785f2a527194000b858a9f4d6c5779836534057d6280ac48b395095b7b586e72032ffcf97836ac23298606993d4d2683eb89472a68db3a2c12524957e6c8bf499875695562648d2f7388804316c0beeb9ce31a023936e31534cd19b405163c005189e8c2128e391639e5886d956abbbd76b777d973bbaeeb38176e77476718509960a62b9e16e4475fa2a46c8e9f7ac4c429ef80976139f1dd284854bb84fa8414f4a18b9390fce4b6ad5f88e399ef9cd7b8d56e69d52a1babaa49450983d53fa9ab2b79a5ea8537d3ae9ec991c4698a45261b4adf4dee07476c5cb9a169d3b703df3b96ac90ca0b0d75fdf1d45bf883e9c34171f55dee4d70bd91201e382a8f0930ceea76ce2f7aaed3213ba7dea076a2d44695bc00930ea8fa638d12a972116502acadf50d59b692361d050000",
    ],
    [
      "ETag",
      "GgFaCMs2+loEwvHqiM0Glg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`purchase`) NOT LIKE ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%oran%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-76-1595717766871",
    },
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
      "ad",
      "54",
      "6d",
      "6f9b3010fe9e5f613155eaa426210b815029eaa2966ea809e90869574d53621c93ba034c6d485755f9efb38110a2665535ed1bdcddf3e23bfb5e1a0028bf48bc544e81e293d56386d9f38707ea2b27328353b89299f1f7a5357c1cde5cfe8eefae78b6d6acbb6bfb693028aa488ee6304a42dce4346308f3d3d9b4b562344b20a3b429089b86deecf4cc9ed1310c5def1b9d02cb71188c48fc4b32dca769c24fdbedad8fd68ad255886142780bd1a88ab7d79fda09a30f18a5bcbd2fdb164abcfdb6f05948114c098d07b3696122e398cd710449286decd04bfff33e7d8bc0a8b512d56b8230448866712aad153488c60159652c27174c2f2228c2b9e7eab71650a6d6c83af7c0f964e678c70b1849bac547003998cf19e65998824b7732068b44a8df438ef902dc7eb55c4b44180d4888e764b90003700686ce0500a3c9ade51e57d582ca997860645f59a262648f6d0f146dcf6d2c314f499c9bf5a01fe29a45912d1b6c1f986d452149602a94cab2b9a1eab0d3574d3ff00d14f4bb3d3f50b1eff77da307bbbe8a4c0d6b4b1fc33a432ab50b3c8c69dced6b413f80bae96b5a0f69866aaa30c0a6da350dbdd7d321eaa240155c4ac9b0a9cef3c4488a2f084f2827e504945bd7f6acb9e7ce9cf3a167d5cf1e40d1de8bc2fdfec9f78e948a26d5ddbed596578e1246a83095cfda763ccb1d9e7bf64dcd86b87823bc82e879fa28af5e00438e7768c8608453ccc6742987a35c4fa6b6674f9ce168c790dfa5eb6d2517653f2ab3bb33d5d9bce7647fd4c5148aa8b4a96b4a2db73939c87203c3ec00cdba0c2b9d3d8ec601b67f7137f55cdbf9f21fec1d5106e3a3bf782cbf7e366a028ad824a537e5dbcc72ef2436cfc98c8b03cc708c7692ef783f1258a4dfb12845f9766d4984d85c953e4f45583c65c477ea88e1e26193a8184741d8ef1a86",
      "616e090590a5af2b4cad927cb5baa4168e709c6e7b51acb0a2919b3d4b59cd4e0e93e5e2213ae504378d4de30f99fc0c297f060000",
    ],
    [
      "ETag",
      "MXdEAqAVFxnYKsuv4EYPIw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-76-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff4d515b6bc230147eefaf28d9eb0a964dab031fe6105710999dc2c62892d663576d73ba5c368af4bf2f495bf525c9773939395fce8eeb9253cef6e4c925499efd28e0f55d06726d0e11085548a1b70a9900726fdc206966dc9b829dc6e1c32c09b30fae82095b0c3ed57a3a6d5d22fd86926adf59238d0f39147ba1f197c56ec75b8dd112cc8dbb1db70ded0d9d26ebca6ae16a335fcca35ba9c4bd9556dbe5f279b69c934e6aec1eebb5b14f396212c10138b014ae0faa381e2195a19d5cd0b22ac013a8780aa26b620a5b39e3a82aca113d4d79c1c8f3879361e007c168340efcde5e604a658ecc546cdfc9a5bf44498b08ffccf4a47513dec2368c3e0a72b8c9e736212dfd9ae24772a19aee143b3d8aafcd66b504f1c651cf22c04e30207d142f6846952609c915583aa5fab75e73d9714ee3fc03debfc28418020000",
    ],
    [
      "ETag",
      "Tlnk8I3BbIgXru79nG0YuQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "18",
      "00e077e9b51a01eb6077741ca502b21965370d36ff0c52400ae164f6ee237b822fdf0b659c43dbb2ae2ea042ef68ca5463c33741ad13e5c49531f0b4603aea564915ecc4855c0ff157534761733645503ab3c2c108992876e90f246537e730f3ac216b47198ef7864c2451f0015ce656992d2dcddfe6ec2199ee5dab100b02595e5ff009769588eddeedc936f89c2e86d91c5ca2ba37d5a3a08efe9bedf1a8bf7a7ca0b4dd0b9d46f1e0085cbb89519c6f8f147f87f59d0ad3b6a4d5b73e493f02b91fd00ac1f8cc25b42c5f661a368c15fa6fb26e7ac2725d780912fdfe01eeade65f05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:18 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-77-1595717766871",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d545d6fa240147df75710f671ab6051c126666b946e4d14b7806d369b0d1986814e8b0c658636a6f1bfefcc800a6bd3f40deebde7dc73bfe6bda328ea33ce22f54a51439cbc94a8d87d7b22a17a213c888144789cc7c15dae79f3a9bf8bacef19593eacbc7c3a99545158a229d8e629ea52521610d1ab8dd74b0a52e6a020a4cb09bba6d9ed0fc743b36f9aa39165f62b2c4569bcc4d9b36078642ca7579a76d0d14b08495204724c7b906c8f76edf552cb0bf28420a35a3badc63351edf3c43f520201c3249b6cbc4a44495111a02dc0a990714247e1759bbe87c1b697f0e8570c118090941913d22a1a48b218276521c939d33b3772b3d47cfc6d1854cf5eda335f81242db75990812dba5022c040c07639526edcf54a5938376b7735f5176b27f066b7f66ada9bad979b95e3290fb7b66b2b0c8429925865a25ccb3f87ff4845325b8428c399d4e40b6f4309f7d67d5c7c30c2238520e1aa28aac302531f81bea58fc33834616c19c330d651185aa1390446a8c3f1000da2108126835456e14146b28101c6fa10c6816582cb60604446108ef571a05f42681a68a09b61a4d6e8fdb196b7023334c7342714d74d561fdc856f07bebb716653df6ed61d833265f34a79bbea56398c37a8a9f4b3969c29ca0b4cb82839ce85e3dbee74e62fee1b32f86e2d5102e0ce7b11db158394a2131a147c560c152b12217968d3953d3f81e5a6fc3a04511ef1e7a8f3540e0f14f397b59ccdbf9dc7e78bd56a45359bcaaa7abebb707eaa0de7fe639a7b90961ff0bcd66635e7dd7ae41da62daeceff5f7f3b8d1c2abfd55a9e7ab7b1dddf022b7dc2e3a218152883a7ac5f585d01acdc5f788a78f8e1611008fe361cf353c6cdfc8a203d658705aa6e0a579daf092dc31a0c8707420e2cd879c4c8181d22ce1e07910b6d51c60ebda81e89aa91fb96a4b22147c24438bf03a71ee2beb3effc03961fe4c4e1050000",
    ],
    [
      "ETag",
      "Nh4Qp/SDATyd8+noLWMSpA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-77-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "51",
      "4bc330107eefaf18f1750307ae55610f53a70ee79c6b0541c6c8d26bed4c7b35499529fbef2669e7faa2141cf8d2e4eefb2e1f77c9d74fa7d5222f491692d3165926f16b01627d1083ba379b19c8822ba9971c3309a46dd8a0686cd837ababe51d8f2fdf18bbc6571fa68ffe8717f7fb254bb26748a9e67dea48c751023c943a7eb271abca5b2ca329981319f222cd16366cef60b5ce2dec07b3d1e4aa8ea4185a64f2301e0fcec64352419bf6cf22215574618ffc9b845de74e254656b89c4104023206bbae73812b606a64c72b699a73e8482c0403598998c2128e05163915881d9dea785ea7db3be9795dcf73dd63afbba57364542598998a079f7ceb2b5494cff0dd8c98b8e51d88322c27be1d05896a97509f9086de4c711292efdca6fd0b713409dca31ab7dacd9d5a6563553da928e1b0f827757d25cf54bff066dad533d993384db1c85443e9cbf1dd608f8d6b37346dfa62100cf7252b95f64243dd60743bf483c1edf44771fd9def4c70b65620a702b5c7245867750f8f8e7b9e7b48b64e3d47e344658caa440136cda8fe635d274ae722ca25381be70b8fec37141d050000",
    ],
    [
      "ETag",
      "KjGbOlgFvccHoqSePXSz7g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`purchase`) NOT LIKE ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%oran%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-78-1595717766871",
    },
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
      "ad",
      "54",
      "ef",
      "6f",
      "9b",
      "30",
      "10",
      "fd9ebf023155eab426210d3f2b455d94d20d2d252d218daa694a8c63a85bc0d4864e5595ff7d369084a859554dfb0677efde7bbeb3efb52549f2234e57f2992407387a2a107df9f44002f94464500e2291d12fbf9c5edfa4eeea429fdfcd4dcb489c70321c0c2a142eab1948b218b519292844ec6c36ed44941419a084b43961db30db3dcdd28c9e61e8ba69f4aa5a86e2708cd347c1709fe7193beb76373e3a1121518c4086590792641bef3e9f76334a1e10cc59775fb6cb9558f77de1f398409063920e66d3ca44c1105da004e058d8d855af82affbf41d0c924ec4d1cf1822002129d25c58ab682049431c15b424e74caf3cc8c3a5e7ed6f23204fedb13df2a5d164e6fac74b9008bae567093069b1a08815712e5d7a932b699971f57bc0105b4af3efb667f30825218ed102af96d2403a9786ee85248d2773db3bdea239953bf1a5b1f3c3e688b173e5f852d5f6d2c60ab11ca7a5591f04316a58e4d9bac1ce81d96e290409c8b9520d5b188a0e7aa662056160c0d0ec6b41a8a02030034303fd4081968ad4558040932117da553d4849da37d5d00c816e05aaaa41d5502c0584c852fa96a16b9a0e601f860ae7926b86f5f63cbf29ced105661961b89e803cf71cdf5ef8decc1d0d7dbb79f610f0f65e54eef74fbe77a49c37a9e9f6bdb6bc7194514cb8a972d68eebdbde70e43bb70d1bfce28d5104e0cbf4495cbd10c40cedaa010509ca11bd222b311cf97a32757c67e20ec73b86f22e5d6f908cc37e6ecdeeced464f35fb2fd515753a8a2c2a6aeca8ddcfae420cb2d888b0334cf7558eeed71b40eb0fd8bbba9ef39eeb7ff60ef8850901efdc563fdf5abd51090f926a9bdc93733dbbb13",
      "b5654e643c14228a52b893fcc0fb118555fa038b92c3376b4b54f0cdb5d567390ff3a70cd94e1d52543d6c9c54e3a808cdbea51aea869017d2fc2d42d3fb1bc49bd525b45082d27cd38b6a85558d5cef592a1a76ca3201e70fd1ad27b86ead5b7f002dc0f35f7f060000",
    ],
    [
      "ETag",
      "6F+2PQnNdD6WYW897mIfOA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-78-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "5d",
      "6f",
      "82",
      "30",
      "14",
      "7d",
      "e75790ee7524c3a9e8121fe6c636136236a64f0b31152e0c075c6c8b060dff7d6d01f5a5edf9b8bdbda767c334c95f5a44e4c924db34d957c0eabb04c4973af8c0ab4c70b995587020f7ca0d8226ca1d4f636fb0a7f0baaa8683f431cede4e87d371366b5d3cfc859c4adf592289e314b2884bfca3b1d9f15a2b680eeac6cd86e986fa864e1375a9b5c572e5bebbfead9463a4a5e5daf39ee79e4b3aa9d17b20d7463f65875b1f62605084707d50c97007a158e8c939cdcb0c2c8e150b81774d54612b270cab9232444b529633b1ecd174e4d88e331e4f1cbbb76718529162a12ad6dfe4d25fa0a0998f47353d69dd84b5b00da38f82c437f9dc2624a5832a1e920bd574a7c0e851706d36af05f04f8672160e7a8207d247f1826a54a19210ac024d8754fed6472a3ace688c7fbfda64d018020000",
    ],
    [
      "ETag",
      "f9fL2qaeDTu42i3flFzvzw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "300000d07fc9591d1033841e83a5c5ca0e825c322c295b58035674faef75fafee03d419265947332f70dedc01b5893bdb2cb765f3dc2a2930b0276eb764c2dbbcecfe4b6c2e33deaaeaa8b70db9a55492cfd36ee7d15b3b3a7349efd9eaca55b8b9eab3fdc92c10bed7b965f549d18a89a170cd3ad71e0ab1df55ab17c13a63976c0303ff85eda14f2047fe698fa61cd2ca4880e4af23822dee0161d7d645a98cab1309e2c079957892f716db058324970fa305b14a43224dbc05beca39d1ba1bfd53e8b0c6c00bd0fd54439a95e33092aca06fc37c9bc0ef475c53499e8047eff00b452c39105010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:20 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-79-1595717766871",
    },
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
      "8d",
      "54",
      "6d",
      "6f",
      "a2",
      "40",
      "10",
      "fe",
      "ee",
      "af",
      "20dcd72abe80681373354a5b738a57c43697cb852ccb40b7872c6597364de37fbf5d4085b369fa0d66e679e699979df796a2a87f4912a8978aea93e83987eceddb13f5d50be9018e22e9999b0eb3f0d328b16edcfeed5df0234f48fa3a999451a44033b44b6368339a6718d8e576d389329aa728a3b42d08dbe6b8dd33c686d933cde17064f64a2c83385c92e4af6478e43c65979a76d0d189288d624029611d4c7747bbf6d2d7d28c3e01e64c6ba6d54426a67d9ef87b4c31e2842693eda6149133c83cd821124b192774e05f35e93b04ed3a91887e211810c6344fb89456d2609a8424cab3825c30bd0ba330179a8fbf3583bab196d6cc55308df35de2256807174a8038f2f85b0acab5b35e290bfb7aedaca6ee626d7b9bd9adb59a7666ebe576656f94875bcbb1148efc180aac3251ae8a3f5bfc148a8a6c01304e9242932bbd3525c25bf571f1c1088f149244a8625085796677887aa3eed80f7d1387a381e1875df0fd916f1a68e077f158073df001d5190a65251e253441ba2ef030f0001986a7e39ee18d7bfdd01b84fda0ab1bfd603c1eaa157a7face535231ce684a59491aac9ea83b3702dcf75b6f66cea5af5ba4394c77c5e2a6f56dd28878b06d5957ed69233456946a810558c7361bb96339db98bfb9a0cb15b4b88107edb3ccbed0a51cce08446999815876c45033918d59eaeacf9095c6ccacf43101311bf8f3a4fe5884039ffa296b3f937f3b862b11aad2867535ad58deb2cec1bb5e6dc7f4c738fe2fc039e97caaca6a25b8fa2c3acc1d5faffeb4fab9643156fb592a7de6d2de797",
      "c4163ee97120840c127ccafa85d595c0d2fd855324c20f874122c46d38e6675c98c52bc2ec941d6750be295276be221ce9dd9e3e3c100a60c6cf23fa43e31071761c642ed841c20fbd288f44d9c87d43525e9353c064b878077635c47d6bdffa07eef8b67ce1050000",
    ],
    [
      "ETag",
      "D7RsEcj8nEGT2HQdKunipw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-79-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d1",
      "4e",
      "8330147de72b487d6589e806d3640fa8d32d617332f66496a5c285a140b12d2ec4ecdf6d0b73bc68485ce20bedbde7dc9edcdb1e3e355d476f491ea26b1dbd24f17b09b43a8b813fc98d07ac4c39134b417206c8906ce03896ecc524a9bcf9a57b419d7ecc2b7f97cfb64fbbd1a866b1600b1916bc4f1189384a200d99889f55ac377985e53803796240d232cb372a348e30af0a052f7d6f3a7f6823190915325fb9ae73e38e5103ed8d9f4542ccf1461df93709b5aeb5460cbd92170f22a0900770ecbaa0e415023e55e365382b52e83152d2005823220b6b38a6a42c3025a427523dfbaa670eae06b669db9635b4cd033d2501e609c965c56a89bef539e138f5c84e8e1859f51dd03aac277e18058a5a97d09e90803e647112a2efdcdef885389dfb56bfc56d766bad55d959554c2a4a52d8fc93bab8922d162fbc9b76f34c4e248e3352e6bca3f4bdfbe89cb071e186ae4ddf39fef854b28c0b2f74d4f5a7b3f1d277668b1fc5c5777d34c14dc5812d28111e63a09c659ef78703db3a4707a7de12e9442e8dca69092a1d60f1c79a245ce4229c32d0f6da17b9f63b741d050000",
    ],
    [
      "ETag",
      "PHiyRN3L2rA4gtyTwnMhQw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`date`) NOT LIKE ? LIMIT 1",
        types: ["INT64", "DATE"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "%2020-02-15%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-80-1595717766871",
    },
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
      "c5546b6fda3014fdceafb03255eda442803e68915087da4c8d06a40ba1553755c4844bea368983ed54aa2afefb6c079230d16a9a26ed1bdc73ef39c7f791b71a42c63349e646171933122e3360af9f9ee8cc385408081c2aa4b5c44f6ed41fde8bb669f2937476642d7f84bd5e9e457435c7711a419dd38c05c0bb93712364344b31a3b42e09eb67cd7aebe4fca4d3ea744e4fcf3aadbc9643b41890e459313c0a91f2ae696e7c34424ac308704a7823a07111375fda66cae81304829bdbb2a654e2e6c7c217110db02034e94dc6b9898c039b428c49a46c94d5f3d9976dfa06c1712394d92f24001c04344b84b296d30434599030639a5c32bdc9a00c6bcfc5df4ac0185b03ebd24397ce64e41df8385674fe6784399a4e19f02c12e8abeb0c919f4af547cc81fbe8eeda722d19617441229892b98f7ae802f54757080d9c3bcb3df0e75880a419391e1ad8df2c890eeca1eda1bce5dac21c1658d25f61215945c59cc2f2a0ada72a808ba24c82ebbedb3b466eacb356854aca086544e8b7da23cf72fb979e7d6b953664e30710e2e075bc54ad5fe08843598d198e41001bd239288a1b676c7bb633ea0f4a06ddcb9b4d2697693f0bb3e59baa6cde6b0a5b0fd6b0c8a3cae6e9b151c156873b596e7194eda07959878dd616476d07dbdfb8bbea7bd63f30b7d76eb69bf5665bdec5de3b3ed7bf1e6a1519435ed3da9ff17d62b9f7aa56630a7161010c92a014fe70594aca1cfe838f854cdf9caeaa90d75be87321c35c908097ea01039deb91381f494e7876dc6a1f353784b290891d19c7e79b0c48e6bbf12df1ac220c8c51e6eafbad9ebdb4c373e72491a3905fcd628b63e01c875a6392c82e70c0b308905e6e548c15f93e220952cb807ceffec69aaa7df00f919df32175f85db45f1def3ed253ff3d6a6ccd551baede4ee56bf0beebffe77bb39f0fe510457e1fce48dfc7aab6aafd02254bfd25db060000",
    ],
    [
      "ETag",
      "1qajRlAMYt2//s5pb3EqZg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000002ff1dcfc95283300000d07fc9b974084b31de8496452c28306c170649a094a510761cffdd8eef0fde0f48b38c0c43323e2ad28257b0a51c3a6647f3f122c3af7cad0a83a1028d994d91c9227698f724f1b309183508a9a134cee97c1e71926e189ff8b7ea1b8f6c2de8373e6b14b9f443e243b82fa2d5a77c882efa8c344b69a332ae146af699b0eff68c16ca235d72e00ab55c9d4cb7180b68dd433bf6aeb69fe6ed3e4ee2c4a9979845d0756dc3f5fb5aba7b5c13dce0b42ec9ec6a95e9611fd7761f69ef6ce3d48d7bfd88c00190b52b291992f239e345840ee0bf998c5b479e5799a49450f0fb073be046c505010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:21 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-81-1595717766871",
    },
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
      "8d",
      "54",
      "6d",
      "6f9b3010fe9e5f81d8d72681e605a814ad514adb5409590969b54d13b28da16e01536c3a4555fefb6c20092c55d50f48f8ee9ee79ebbb3efbda328ea0b4903f5425121895e0b9c6fbf3d53a89e490fe620929ec5cdf6dcbe7b182d124b7c77d133bf0e7edd4f26551429d10c24598cbb8c1639c2ec62b3ee45392d329053da15845d53efea236b64e886311e9b865e61198ec305495f24c313e719bbe8f7f73a7a11a5518c4146580fd1e460efbf9df7b39c3e63c459bf9db62f32b1fee789bfc714014e683ad9ac2b1105c3b98f13406229e3880ee0659bbe4740d28b44f41b411820448b944b69150da26948a2222fc905d3bb300a73a9f9706c18d4b5bdb0679e82685c24a99f82049f2901e0c0e7db0c2bd7ee6aa9cc9deb95bb9c7af395e3af67b7f672da9bad169ba5b3561e6f6dd7563880312eb1ca44b92c4f8e38948aca6c01669ca4a5264f7a1b4a84b7eee3fc83111e28248950c5701de61bda18e8a666c1101a28340723186a1842131a2330801ab2867818400c9a0ca5b20a0f529a5a106ae703a8fb38180efda1ae43dfd401f675ddd4d140038685066a8dde1d6af99b138eaf08cb28237593d54777eed9bee76e9cd9d4b39b7587a088f955a5bc5d75ab1c2e1ad454fa594b4e146539a1425439ceb9e3d9ee74e6cd1f1a32c4dd5ae008a0edfa55deae10c40c1fd12017b3e2385fd2400e4675a64bfbea082e6fca8f7d101311bf0f3a8fe5884039ffb29693f9b7f378e262b55a51cda6b2aa6bcf9d3b376ac3b9fb98e601c4c5073c6fb559cd44b79e4487598babf3ffdf9f4e23872ade6a2d4fbddfd8ee4f892d7dd2e3e210e73845c7ac5fb8ba1258b9bfb08a44f87e314884d80d87fc8c0bb37845881db3a31c576f8a549daf09cda13ed6ac3da100e6fc34c23406fb8893e52073e104a77cdf8b6a49548d",
      "dcb524150d39254c868b77e0d443dc75769d7f0130bc83e1050000",
    ],
    [
      "ETag",
      "LGy2EJV5Lm95LmJgjtFdZQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-81-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d",
      "6f",
      "8230147de75798ee55939128e8121ff0639b89ba0df1658b31152e8a2b94b5658b33fef7b5059517179299ec85f6de736e4fee6d0f7ba35643ef5112a0bb1a5a45eb8f0cd8ee660de2456d5ce019115c2e294d38a0ba6283c06bc5de719fe0ef74d50f2c277ced58dbd6003e5fbadd9cc5fd0dc458f2f6329271180109b88cdf745c2bf21a4b700cea449f922c4e963aac9f61b14b353cf3dcd1f4a18cc434d0c8743e1e3bbdf11015d0a17e5924c0022ff5917f93d0ebc228c4d096ae5c088141e2c3b9eb94d12df862a4c7cb719c1268709a311f7821a20a7378cd689662466943a61a6db361b63a2ddbb46dcb6adbe6914ea88f45441355319fa193bea00213977ea911232bbf039687f9c48fa34061e912ca1392d0a72a8e0274ca1deabf104753cf6a96b8c56e61942a2babca49851181e53fa9cb2bd960f9c2ab6917cfe44ae238a659222a4adf8f9f9c2b362edd50b5e981e30daf25cb85f442455d6f3419ce3c67f27c515c7e176713f47602f833a3d2631cb4b3ccdb66bb655bb7e8e8d43e554e14caa88265a0d33e967facc748c85c880907e360fc00f43773851d050000",
    ],
    [
      "ETag",
      "ysclazpbCd6AfZ96j5DevQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`stamp`) NOT LIKE ? LIMIT 1",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-82-1595717766871",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ffcd54514fdb30107eefafb0b2179068d314684ba78a7510b688368524050142ad49dc6048e2d476aa5588ff3edb699354ead834ed616fc97d77df7d77bebbb71a00da2b4e02ad07b4271c2e3244579f5ec893762011c46128910bf755c74bbec0f6eaf2fe877ee20fe8dd4dd8efe75e58453318a711aa3392511fb1dec46d84946429a484d40561bddbaa1bc727c71da3d369b7bb1d238f65289a0f71f22a199e394f594fd7373a1a21216184608a59c3277161d7972d3da5e405f99ce9db69759189e91f273e8d880f3926497fe2e6223286e814c510475246191d3c7dd9a66f60183742e1bdc43e82be4fb2844b69398d4f92390e33aac805d39b300ab3d25cfc560c9a6b0ecd330f9c8d27b6b73783b1a49bed03c8c0744a11cb220e2e9cf108cc5291fd1932c466e0f6bbe998c242c91c47688a8319e8835330b0cf01188e6f4d676fc6b8102d78ecb10786d6a529e0a135b23c90f75c6908d01c0afe73c8052dafa893586eb4d4b372c4781126c075e3ad1d6faeadbdde8b2c29c58462ae8ab56ccf7406679e7563963244e7872884feca5dc8decf61c450190d298c11477444022429aec6aee559637b302c195433af369e4cb83d1462cb9aaa6cde2a455b052b98e75629b37da455b0f7839d2c3730ca76d02cd766cdd8e2a8ed60fb1b759e35325d6f30bafa070a5bcd56b3de94cbe119ad9e71d8338e1acd66f3fe17c2d75f8fb54a4a4decd75ab0763d319d3b19ab308938688e284afc52c487d35352e6f01f9c0fe1be59661921f6b9c82f968063c6b1cfcaec3e45cad7c371fe463961f7a8d56e1d6e084520e53b3cba9d8d074a82ddf856f2ac9218514aa8a336ba7a08841c962bc78978161c5cabcb50cc76b5b6c5361423c660a834d804c490fbcf380901c36122525304e684827996f8323e3f0cca046998c528e1404e14eb8162a01ac0cdd294508e82924538e437c5f51ccbfeb6ff79fdfbf5ce335d71a83878307a5de351db1a0a556d75132bb7e537257f58f47f5af666371ecb01e24ae1f9d836d54cd4de6b3f01630092e269070000",
    ],
    [
      "ETag",
      "FSk/ivtqiNyKZx/9cArYVg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "ff1dcfdb6e82300000d07fe9b39a5151e9de28172113c10063f4851428528d022d23d065ff3eb3f307e707d0aa6252166377674ff00e160ad1a6da7c7406d62e5509f7c4c70a2a2dc324b4dcf13cf5b9bf64f196da04e648b120c89ccc4eccc47f444d5440528a055f039ffae61457263a1eb22ef18c9b3784911e7d0ff28af952062d4c9a7d9a57b51038e4ba20d0c2c4700e22bdd59f7182e74e9f066a3eef831fcbda22a7122ab12e65fff842dce5f96c9d1a7beda5972ed92d2a9f148bce6e4b8f4d946b858bf5d679032bc0e69e0b260bfe9a6d7708adc07fb318979ebdae9851c104f8fd033b95b99205010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:22 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-83-1595717766871",
    },
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
      "8d",
      "54",
      "5d",
      "6f",
      "a2",
      "40",
      "14",
      "7d",
      "f75710f6b58a820a36315b63e99644b1056cb7d96cc8300c745a642833b8711bfffbce002aac4dd337b8f79e73cffd98fbde9124f915a7a17c29c9018edf0a94efbebd9040be101ec4402c3c4f0faaabc460e60eac70fb370fed9f7723783f9d5651b84453b0c912d4a5a4c821a2976bb717e7a4c8404e489713760dad3b184d46fa40d7c763431f54588a926881d357c1f0cc58462f15e5a0a317131227086498f620d91cedca5655b29cbc20c8a8d24eabf04c54f93cf1f78440c03049a76bb712515094fb68037022649cd06170d5a6ef61b0e9c53c7a8b210210922265425a4503491ae1b8c84b72cef4ce8ddc5c6a3efe360cb26b2eccb9274192149bd44fc1065d482160c067bb0c4937ce6a2959f6cdca59ce3c6b65fbeefcd65cce7af3d562bdb45de9f1d6744c8981204125569a4a57e59fcd7f4a4565b6105186d3529327bc0d25dc5bf7d1fa6084470a41c255515487f97a7f0c06467f1244810e23431b05511f058111e823a0057d3819a2611820d06428955578909274a41a2ad054e81b2310fa43a30ffd0021c3578d40d5861a1a8c879a5ca3f7c75afee498a16b4c334271dd64f9d1b13cd3f79cb53d9f7966b3ee081409bbae94b7ab6e95c378839a4a3f6bc999a22cc7848b2ac769d99ee9cce69ef5d090c1776b81620077ee9bd8ae0824149dd020e7b362285f92500c46b6674bf3fa042e37e5ee104479c4afa3ce53393c50ccbface56cfeed3c1e5fac562baad95456d9f51ccbfe21379cfb8f691e40527cc0b3adcd72c6bbf5cc3b4c5b5c9dffbf7e771a3964fe566b79f2fdda749e04b6f4098f832294a3149eb27e617505b0727fe1",
      "14f1f0c36110087e1b8ef929e366fe8a203d658739aade14ae3a5f131a437532d40f841c98b3b308ad3f510f1167c741e4421b94b2432faa23513572df925434e4943011cedf815d0f71dfd977fe019a980243e1050000",
    ],
    [
      "ETag",
      "YV2S/gaAS1IdvzrdNXP5cQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-83-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "51",
      "4f",
      "c2",
      "30",
      "10",
      "7e",
      "df",
      "af20f5151288b2a1890f80a824803a6662620829db6d0cb7dd6c3b7521fc77db6ec85e304b24f165edddf75dbfdcb5dfb646a341dec2c423570db20a83f70c587e168078521b1b7816092e9714130ea4a9d82068a0d8cccc8397f5576f08b3d1872d52b45ede379fd7d7058bbb6b88a9e46d6524633f84c8e3327ed571a3cc6b2ca131a8135d8cb23859eab07980459e6a78eed8e3d95d1589d1d3c8ec7932e90f26235242bbe671118f0abad447fe4d42af0ba314231b5cd9e00383c48543d729c30db862acc7cb699c46d0e29831177829a20a0b386098a59421b664aad53b6f75ba975dab6359a6d9b33a7b7a842e152126aae2794e7ef4050a1ad9f8a9464ccce20e58111613df8f82f8954ba84e48421faa38f4c84f6ed7fc85389e39e645855bee1646a5b2b6aa9c941f46b0fc277579256b2a5f783dedf2999c489cc69825a2a6f4ede4a17fc2c6a51bea367dd37746a792e5427aa1a6ae339e8ee64e7ffa78545c7e1707130c7201fc91a1f41807edac4efba2d7b5cc36d93b7588ca89421955b00c74daa5f28f751f0a99f369c4c1d819df6b9e04ef1d050000",
    ],
    [
      "ETag",
      "r6ygXhx8CeNEvRtpo7Xqjw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`amount`) NOT LIKE ? LIMIT 1",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "%1.54%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-84-1595717766871",
    },
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
      "c5",
      "54",
      "61",
      "4f",
      "db",
      "30",
      "10",
      "fd",
      "de",
      "5f",
      "61",
      "65426c126de96869a98458478388161a6853104ca871936bf048e2603b9d10e2bfcf76da24d50a9aa649fb16dfbb7beff9ee9c971a42c6234902a38f8c39099f3260cf1f7ed0b9b1a710103854c8e0e92c74ceaf860f66bb7db7e447779deb78faf3f838cf22ba9ae3388da0ce69c67ce0fde9a411329aa598515a9784f55ebbdeea1c75baad6ef7f0b0d76de5b51ca2854d9247c5f02044cafbcde6da4723a4348c00a784377c1a17f1e6f2733365f407f8823737659b528937df173e89a88f05a1c9f174929bc838b019c49844ca46591dccbf6cd237088e1ba1cc5e121fb0efd32c11ca5a4ee3d36441c28c6972c9f4228332ac3d17c74ac09898b679eaa253673a723f7a385674de2784399acd18f02c12e86cec5c202f95ea0f9803f7d0cdb939366584d105896046020f1da31334180d11b29d1b735c211a392eb2ad6fa6c46debc27251de746d2280059602432c24afa8d853581eb4f45c057051944970d5796bcbd08d55d66ba19232421911fab6d6c835c78353d7ba364b1bb2f53684d87f9e3ca9e62f70c4a1acc60cc720805dd00014c5a533b15ccb190dec924177f3729dc965daf7c26c79a72a9bfb9cc2c685352cf2a8b279d8362ad8ebde56966b1c655b6896abb0d1dae0a86d61fb1b7767b633f837fe765a8d4e7be70d93abaffb5a45c0908f6965ceb89a9ae35b55ab31858c61010c12bf947c77534aca1cfe837f854c5fbf5c55211f6fa1cf850c73417c5eaafb0c74ae4be27c1e3961af7dd03beaad09652113bf65b40ff6f7d71990",
      "04dbf10df1ac220c8c5136d6cfb7faeaa51d9e3b27891c82fc69162b1c03e738d41ad3447681039e4780f466a362a0c8f3104990da04e4b9b797e66cb50cde1efa8a0314d04c55e901f7513edef569373fee1a1b03d54eab2fa6f20f78dbee7f30bcdec8fb726c42ab0f9d91a927517badfd02e8d431d1cc060000",
    ],
    [
      "ETag",
      "AqFgOHQDhE44Zvs9Z5VmUw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "cfc97282300000d07fc9591d2065496f052b08c3a688ca25c3122858024da82c9dfe7b99fec09b793f20cd73c2391eba07a1e015cca98476f9cee9345d0c0933afb671f2acedb3d49c712fe0b4b0fcc9a4e27b2047cda556a2338a5e240a8b11bb09f58ef830493536e85d721b64390775f6201b1f9d5bc45b23ce92c41fd3715864d768e704e6e1db8ce03e1c32855c2a5615cfaa2d78c995796aa12a88ecbbd7626cd9e58adcf3d2b99d8aaf0f5fbf9a411b0542237caa38a40e76b3f679bec5768fa789e4c792b2a55938d80032f535231cd7eb0cca086dc07f130f734fd6ab4e524618f8fd0367b23f9d05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:24 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-85-1595717766871",
    },
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
      "8d",
      "54",
      "5d",
      "4fa340147defaf20ecab2dc5968f9a346b53519bb474a554b3d96cc8cc30e02830c80c1a63fadf7706680b5b637c837bef39f7dc8fb91f3d45519f4916aa178a0a49fc52e2e2fdc71385ea99f4600e62e9a12f5aacdf4004bd9b517a3d4bb66b630deea6d33a8a546806d23cc17d46cb026176b1dd0ce28296392828ed0bc2be6df475636258ba6599a66de93596e1245a92ec59323c729eb30b4ddbeb18c494c6090639610344d3835d7b3dd7f2823e61c499d64dab894c4cfb3af1cf8422c009cda6db4d2da264b808700a4822651cd121bcecd20f084807b1887e2508038468997129ada641348b485c1615b960fa104661ae341f7e5b0675e32c9db9af209a9469166420c5674a083808f87b8e956b6fbd5216eef5da5bcdfcc5da0d36f35b67351bccd7cbedcadd280fb78ee7281cc004575865aa5c567faef8a91455d942cc38c92a4dbef4b694086fd3c7c527233c504812a18ae1262cb08626d0ede10446d042913d326034c410dad032c0080ed1648cc721c4a0cd5029abf120a35968026486d008eca13e0ac66888037ba2c3401f9ad679844d6b1c21b541ef0eb5bc1584e32bc272ca48d364f5c15bf84ee07b5b773ef39d76dd1128137e552bef56dd29878b06b5957ed59213457941a810558d73e1fa8e379bfb8bfb960cb15b4b1c03f4be7991db158184e1231a1462561c172b1acac1a8ee6ce55c1dc1d5a6fcda073111f1e7a0f3588e0894f3af6a39997f378f2f16abd38a7a36b555ddf8dec2bd515bcedde734f720293fe1796dcc6a2ebaf5283acc3a5cbdffbffef65a3954f1561b79eaddd6f17e4b6ce5931e0f47b8c0193a66fdc6ea4a60edfec62912e1fbc32011e2361cf2332ecce2152176cc8e0a5cbf295277be21b4c763c330f7840258f0d308d39eec234e8e83cc85539cf17d2fea23",
      "513772d79154b6e45430192ede81db0c71d7dbf5fe013808c658e1050000",
    ],
    [
      "ETag",
      "oq/g1GbcbRG3mFAlUO5OaQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-85-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "514fc230107edfaf20f51512206c03131f86229220e8980fc61052b61b4cb7dd6c3b0d31fc77db6ec85e304b24f165edddf75dbfdcb5dfbe8c4683bc4569402e1b641d6dde7360bb8b0d8847b57181e7b1e072c930e5409a8a0d826e143bcbdebaf9f3fc768037f376d71d99deb83770aeae0a16f7b79050c9fb92918cc308e280cbf845c78d32afb19426a04ef431ce9374a5c3e61116bb4cc30bcf9dccc65524c14023b3a7e9d4194e47a484f6cdd322011574a58ffc9b845e974629465e71ed42080c521f8e5d670c5fc117133d5e4e932c8616c79cf9c04b115558c01b86794619624ba65a7db3d53107a6ddb16dcbeadb9d033d469f8a085355f1b4203ffa02058d5dfc542326567107ac088b891f4641c2ca25542724a10f551c05e427b76ffe429ccc3cab57e196bba551a9acad2a27154631acfe495d5ec996ca175e4fbb7c266712a709e6a9a8297d3b9d3b676c5cbaa16ed3378e373a972c17d20b3575bdc9fd68e139f70f27c5e5777934c17027803f30941ee3a09dd569f7faa66db5c9c1a9d7a89c28945105cb41a77d2aff58779190b990c61c8cbdf10d50cda52a1d050000",
    ],
    [
      "ETag",
      "ppk2uYOF9oDO02RE5TG49A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `id` = ? LIMIT 1",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-86-1595717766871",
    },
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
      "c5",
      "54",
      "5d",
      "6f",
      "9b",
      "30",
      "147dcfaf40ec65539baf9600a9147559c236a494740969554d5362e042dd02a6b6695755fdefb38124a07ea86f7b83fb71ceb9c7f67d6a298a7a8bd3403d51540f477739d0c74f37c4530f6506388a64e6e66fee5c4df3cb83878b6f37345f1d3c04f87a3c1a9555b8e86628c962683392531fd8c96ad98928c9334409690bc0b6a9b7fb83e1c0e81b86ae9b46bfec651087339cde4a846bce3376d2ed6e75742242a218508659c727c92edebd3fea6694dc80cf59b749db154cacfb3ef1694c7cc4314947ab6529226740d790201c4b19fbeec0fbda84ef60947422517d8f7d40be4ff2944b69258c4fd21047392dc005d293088a70a179f75b0ba84b6b664d5c65325f39eee70d4a24dce68b8298b25e536079cc95ef8bf999b2c904fb3562c036cae54f6b61890825218e618d838d32524e95b1335594cdf66f669fd9ae525a5c5006c0384e0b612ef262a8c911d9ca4cfb9573dc414810c48586aa6c6df474d4377b432ff40c3f348f075ed803cf333d63808ebd9e3fd4400b3c4075042eb9cb7e940ab774fdd8849e86d0109066000a3553eba32132f5a06f808e8e7aa1af1b9a5a213cefe679a098c314b38c305cb9ad5e2e6cd75abb8b953319bb567df610092ba7a5fae6e48d91b830a9aef63d5b5e28ca2826425471aeb6e35a8bf1c4b52f6a32c4259b4184fcc7e59dbc66218a19ecbb11450970a067249087a39ecf97b66bcf9df16c8f50dc9bf36d251365bf7762f733d5d1dcc7ac79d4e52994512953df79db98a6897281e2fc1598fb2aacf61b18ad57d0feabbac11bf2aaaf3fad1ab82a1646254bfdb5b21657b2b7c8c9cc0242a090fa7bba0f3c1dd958a63fb00f45f9763bc90eb1a076fc8c8bb078c53edbb3fb14ca378d",
      "936ad602d0d4746dd0db028a46ca5f56e8c298c3373694e4820452bef5a2dc54a591cf0d49794d4ed126cbc51b746ce74721bef5dcfa0752f031f766060000",
    ],
    [
      "ETag",
      "jxuNYDuW+wVBjruU+wdihA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-86-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "5d",
      "6f",
      "82",
      "30147de75790ee7524f0a0b8253ee8e22619618a9a2c5b88a978652870595bb610c37fb72da0beb43d1fb7b7f7f46c982639a5c59e3c9b649726bf15b0fa2101b15487107895092eb7120b0ee451b941d044b9571f36fd7c4dec77382dbed6c13cf1ea095f8ec7ad8bc73f9053e93b4b24f121856ccf25fed6d8ec78ad15340775e376cb74437d43a789bad49a17ac676fb3f05eca71afa560e3fb93a93f239dd4e83d926ba39f72c45d08076050c4707b50c9f008b1f0f4e49ce6650616c78ac5c0bb26aab0951386554919a225296b34b49cc1d3c0755c77381cb94e6fcf30a622c542556c56e4da5fa0a05988ff6a7ad2ba096b611b461f0539dce5739f9094fedae22bd574a7c8e851746b36ad05f00543390b073d814dfa285e508d2a54128255a0e998cadf9aa7a2e38cc6b800a20152a418020000",
    ],
    [
      "ETag",
      "SO0aXFg0KekPZTNHgIyAsQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "1f8b08000000000002ff1dcfc97282300000d07fc9599caaacbd954d94286d41502f1984b0346c2614029dfe7b995edefdfd8038493063a86f096ec02b98e2adb64ed66eabea9b8f0c1ae9f63c1d3d1d869cecd286e552288d079bf70be45224113b064f5e0615f714c4de145567b11c14b227dfb8955698cdd7e21d25e7880e7b25f8b6bb9353352d3248a4aa462ed87e1e8ea16049d0b55f32771e26756f3d332c6b14cee2a1be434a365f557612849aa62af1a139d24ebbe58fd1bcde4db1fb9444271afaa7482bc3b8cc86598fc5c3f12cec8f600530ef4a8a192a97d94ed2b415f86fa27eeaf072d5714c3105bf7fa679284c05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:27 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-87-1595717766871",
    },
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
      "8d",
      "54",
      "db",
      "6e",
      "9b",
      "40",
      "10",
      "7d",
      "f7",
      "5720fad8f81e1b1cc96a2c87b44806378013a555859665209b6096b04baa28f2bf7717b00d7514e50d66e69c3973d979eb288afa44d250bd50d480c4cf05e4af5f1e69a09e490f70144bcfe0defc4a2cf3e639c2e626ba03d7fe35b116f37915454a3443db2c812ea3458e815d6cdc5e9cd3224339a55d41d8d5b5ee70329b68434d9b4e756d58611924d18aa44f92e181f38c5df4fb7b1dbd98d238019411d6c3747bb0f75f46fd2ca78f8039ebb7d3f64526d6ff38f1b78462c4094de71bb7125130c87dd8229248194774185cb6e97b046d7bb1887e211810c6b448b99456d1609a46242ef2925c30bd09a330979a0fbf0d83ea1a2b63e9299826c536f553b4853325441cf9fc3503e5da595b8a695faf1d6be1996bdb77973f0c6bd15bae571bcb7695bb1f8663281c0509945865ae5c967fb6f8291595d942609ca4a5264f7a1b4a84b7eea3f9ce080f149244a8625087f9da608a86fa6016448186237d3c09a20104811e6813340e0678760ee76100a8c9502aabf028a5e9100da6637d14f8d17014f9e7a116f933c0231f4130d686e12444025ea377875afee684c315611965a46eb27ae7989ee17bcec65e2e3ca35977848a845f55cadb55b7cae1a2414da51fb5e4445196132a4495e3346dcf70164bcfbc6dc810bbb58218e157f7596e578412064734cac5ac38e4160de560547b6119574770b9293ff7414c44fc3ee83c962302e5fccb5a4ee6dfcee389c56ab5a29a4d65555dcf31edef6ac3b97b9fe61625c53b3c2fb559cd44b71e4487598babf3ffd79f4e23872ade6a2d4fbdd918cebdc4963ee97120",
      "821c527cccfa89d595c0cafd895324c2f7874122c46d38e4675c98c52bc2ec981de750bd295275be26d4cfb5d168b62714c09c9f468cf543c4c97190b9600b29dff7a23a125523772d4945434e0993e1e21dd8f510779d5de71f19f8715de1050000",
    ],
    [
      "ETag",
      "0YI+iMIQqfcIUfWeSNZ5MA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-87-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ffc554514fc230107edfaf20f5514820810d4d7840455c02a863f8a021a46eb731dd76a3ed3484f0df6dbb217bd12c91c497b577df77fd72d77edb198d06798f529f5c36c86b146e7260dbb310c4a3da38c0f35870b9649872204dc5064143c5b637ebb17bce9de771179edab8b5ecd07e0f078382c5bd352454f2763292711041ec7319bfe8b851e63596d204d4891ec67992ae74d83cc2629b6978ee3af66c5c4512f435325b4c26c3abc98894d0bef9b3884f055de923ff26a1d7a5518a91377c75200006a907c7ae33866fe0095b8f97d3248ba1c531671ef05244151670c830cf28436cc954ab6fb53abd8b9ed5b12cd3ec5b9d033d468f8a085355b198936f7d8182c60e7eaa1113b3b8035684c5c40fa32041e512aa1392d0872a8e7cf29ddb377f21da33d7ec56b8e56e69542a6babca4905510cab7f529757b2a6f285d7d32e9fc989c46982792a6a4adf4eee87276c5cbaa16ed3374377742a592ea4176aeabaf674347787d3871fc5e5777934c1d556007f60283dc6413babd3eef67b96d92607a75ea372a25046152c079df6a8fc63dd4542e6021a7330f6c6177d6728341d050000",
    ],
    [
      "ETag",
      "IqhGT+sRZG4eV0oy7IgIkg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` = ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-88-1595717766871",
    },
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
      "0002ffad546d6f9b3010fe9e5f81d8974d5a129286402a455d96d015292f1d21ada6694a8c31d42d606a9b4e5595ff3e1b9384a859554dfb0677f7bcf8cebe9786a6e90f380bf5734d0f70fc5820fafce19e04fa6799411cc43233eed2d09d3e4c2ecdb1d9fb1ade5fcdee6c341a0e55152ed10ca479829a8c14142276be5ab6624a8a1c50429a82b069dbcd8e3930ad8e65f5fbb6d551588692688ab307c970c779cecedbed9d8f564c489c209063d68224ddc7db4fdd764ec93d829cb58f65db4289b5df16be4808041c936cb85a2a130543748d52801369e3800e832fc7f42d0cd2562caa9f3044004252645c5a53349064118e0b5a920ba6171114e1d2f3feb716d097ced419fbda78b19afb1f372095749b4f1a60da7a4d112b12ae5d7a8b99b6c985fa1d60886db4db2bc7734484920827688dc38d36d42eb4d17ca21dea546ceace5c5f538d2e8543c438ce4a7b3e0812543325b2554bdd13d3dc534812c0854255b6b68c3ee8d8c62088020b46f6991944060a023bb04c70161870d043bd3040a0cec0a5b6c2838c64c81c18e1000c3a16e89967a10103bb0f6d81b1c000826ea71f82c81059bd62d8eecff39b628e2698e584e1aae7faade7facedaf756f3f1c877ea678f8068e844b93f3ef9d191b86852dded5b6d79e528a7980853e574ddb9ef78a3b1efded46c88ab36453180cfcb4779d92290307440030a52c4119d91500e47bf5e2c5ddf5dcc47d30343797bae77954c94fddc9b3d9ca9cee63fe7c7a35653505169b3dfd36bb9ede7932c3720294ed03c5561bd73c4d138c1f62fee96bee7cebffd077ba35c0cee2f16abaf5f8d1abf2e5647654dffbe72bc1f125be664c64311a2288307c5773c1f0954e9776c4651bedb53122156d55e9f7111162f19b2833aa448bd6b9caa692842bb67f7babd1da10052febac2348d5dc5ab5d25b5508a32beeb85da59aa91db234b45cd4e0993e5e21dceab016e1bdbc61f8c782e4070060000",
    ],
    [
      "ETag",
      "C2rdILkDF5C54BdjHMh8eA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-88-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff4d515d6f8230147de75790ee71231b260a5be2c39c649a383318ec6521a6e295e180cbda32430cff7d6d01f5a5edf9b8bdbda727c334c94f56eec89349b659fa5b036b6e5210be3a04c0eb5c70b95558722077ca0d82a6ca3df7a3348cec376771eb85d1e8fed367f3e6389d762e9e7c4341a5ef2491c4fb0cf21d97f84b63b3e7b556d202d48d9b0dd30df50dbd269a4a6bcb75e8bd7ac1b554e04e4beb68b57a9ead3cd24badde63b9b6fa2907dc06b0070665029707550c0f9088a59e9cd3a2cac1e258b30478df44157672cab0ae2843b42465b9ae658f1fc78eed389389ebd8833dc7848a0c4b55117d90737f8182e6011ed5f4a47313d6c12e8c210ab2bfcae73a2129fda9e21139536d7f8a8d01c59766b346007f672867e1a027782043142fa846152a09c16ad07442e56f2d32d173466bfc03069e8b5318020000",
    ],
    [
      "ETag",
      "DQUgTU1M7H+ETU2/VQrDyw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "7282300000d0bb642d4ee4a3a43b10705a8d82512a6e3210438908a40111ecf4ee75fa6ef07e40ca186f5bda3525afc11b18531d4dd974ddd8ee2cba100dc5e61ead4ddb96c3d7092e648a1f95bad72ac55d586e0bb2a28bcd63c805df5712dd98950ba7b4bd3839c064bc15f74f3f8cec3a6089eb5c61d76717b23485980d4badd2c22c4214fba732a0ba358f695ce4ce0a56a41ee1e69c3c08697a468e1599e302c1dd69feee5c8d68f9d4be37de79a78f5e601c9eaac7145bbed491f2348e33b8f53e04b38f064bc004f0410ac55b2a5e33c3426802fe9bb41b257f5d5d9e2aaec0ef1f0b2c4cc005010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:28 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-89-1595717766871",
    },
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
      "8d",
      "54",
      "61",
      "6f",
      "a2",
      "4010fdeeaf20dcc7aba2a2a84dccd5587a3551ec01b6b95c2e6481816e0596b28b4ddbf8df6f1750e16c9a7e8399f7debc99d9ddf79624c95b9cf8f2a524bb387cce217bfdf6445cf9426480a15064def2edd31bdd59eb5bc37df9fe0cb1b5d92ab3e9b444e1824d519c46d0a624cf3ca0971bab1366244f5146489b0bb6c793766f38198e7aa391a68d47bd924b210a9638d90a8547c6527aa928071f9d909030029462daf1487c8c2bbbbe9266e4093c469566598557a2cae7857f44c4430c9364bab14a133985cc8118e148d838b17df7aa29dfc128ee841cbdc31e20cf2379c284b552c6234980c33c2bc4b9d23b0ff270e1f9f85b0bc896bed4e7b6e491288f132741315c483e62c861af294837e67a252d8c9bb5b99ad98bb5e158f35b7d35ebccd7cbcdcab0a4875bddd42586dc080aae3495ae8a3f83ff148e8a6a3e508693c2932db235273c5bcd71f1c10a8f124284bba250c19c515743bd7177e206eec80bc6ead00dbae0ba63773444aadbf5260318f82ea0ba42e1ace4a38424ea30e80fd5beea681ceb0c7c3f7026dd5edf51355fd554551baa03902bf6fed8cb4b86195c639a128aab21cb0fe6c2d61ddbdc18f399add7fb0e501eb1ebd279b3eb463b8c0fa8eef4b3919c394a334cb8a9629d0bc3d6cdd9dc5edcd76cf0b3b5841079afd6b3385d018a289cd828e3bb6290ad882f16231bb3957e7d221727e5ee00a21cf1e7e8f3d40e078afd17bd9cedbf59c7e607ab318a72376554b66c7361fc946bc9fdc732f728ca3fd0d9556139e5d37ae413a60dadd6ff5f7f5bb51a32bfab953df9d746377f0b6e9113191302c820f14e55bf707405b14c7fe129e2f0c3c32018fc6d38d6a78c87f92df2e8a9ba974179a77039f94a703c9874bb93",
      "83202766ec1cd1d3c607c4d9e3206a410c093bcca27c24ca41ee1b96f29a9d8226e0fc1e18d512f7ad7deb1fa9eb23c6e1050000",
    ],
    [
      "ETag",
      "zukjzsvSOHNbw+qemSUk/A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-89-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d1",
      "4e",
      "c2",
      "30",
      "147ddf5790fa0a89a86c68e2c35054928930c68b8690b2dd8d61b7ceb6d320e1df6dbb017bc12c91c497b5f79e737b726f7bb6311a0df41ea701ba69a0451c7de4c0d6671188b1dab8c07322b85c329a72404dc5068123c5be1f39e327123c2cdf2f9ca94bf864f57af91dddde162cee2f21c192b791918cc31848c065fca6e34699d7588a135027fa94e4493ad761f3008b75a6e189e70e868f5524a181468653c7b17b4e1f95d0b6795c24c002cff5917f93d0ebcc28c5d08a2e5c088141eac3a1eb8cd115f862a0c7cb71921168719a331f7829a20a0b386234cf30a3b42553adee75abddb9ee586dcb32cdaed5ded109f5b18869aa2aa613b4d7175460e2d22f3562641677c08ab098f86e1428ac5c42754212fa54c57180f6b96df317e260e89957156eb99b1995cadaaa7252614c60fe4feaf24a9658bef07adae5333991384e689e8a9ad20fce8b7dc2c6a51bea367d6f7bfd53c97221bd5053d71b3cf7279efd3c3a2a2ebfb383097a6b017cc4a8f41807edacf6f955b76399e768e7d43baa9c28945105cb41a77d2cff584fb190b910130ec6d6f801778d7c1c1d050000",
    ],
    [
      "ETag",
      "DPLQHldFhk2LURlsSjZ3zg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` = ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-90-1595717766871",
    },
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
      "ad",
      "54",
      "6d",
      "6f",
      "9b",
      "30",
      "10fe9e5f81d8974d6b12f2022195a22e4a69879a262d21a9a6694a8c31d42d608a4dbba8ca7f9f8d4942d4acaaa67d83bb7b5e7c67df6b4d51d4479cf8eaa9a27a387cca51b6fef4403cf544641003a1c82c7e3f5e8457f1ed28ffbab8bf21f46aade7972f8381acc2059a82388d509d923c83889ece678d3023790a3242ea9cb0ded7ea2dbdaff75abd9e6198bd96c4521405639c3c0a867bc6527ada6c6e7d344242c2088114d30624f12ede7c6e37d38c3c20c868f350b6c99568f37de1b38840c0304906f399349153942d510c70246cecd1bef7ed90be8141dc0879f53386084048f284096b92069224c0619e15e49ce9950779b8f0bcfbad04d49935b646ae329ace27eee7158805ddea8b02a8b25c6688e611532e9ce9b5b24ab9fa3da088ae94bbef9663f14846021ca125f657ca403953869373655f276363fbda7615d9e842d84794e1a4b0e7022f4215533c5bb6d43e32cd1d8520018c2b9465cb9e668096a9f5bdc0ebc1c0ece85ea021cf33bd9e0e3a9e06fb5dd4f53d04aa0c4c684b3c4848d23135cf68ebbee16986a17791dfeef5bd2e34db2dc337351deafd2eecf2c1a925c366779e970c33748e694a282e7baede39b66b2d5d673e190d5dab7af600f0869e4bf787273f3812e34daaba7daf2d6f1ca51926dc54315d7be25ace70e4da8b8a0d7ed5c62804703d7b12972d0011457b34c8408c18caae892f86a3de4c67b66b4f27c3f19ea1b83d37db4acacb7eeecceecf546573d7e9e1a8e5146454d834ba6a25b73939cab200517e84e6b90cabad038eda11b67f7137731d7b72f91fec81940fee2f16cbaf5fb50abfca5747694dbd9d5bce0f812d7222e3a0006528817bc50f3c1f0194e90f",
      "6c465ebedd5302c157d54e9f321ee62f19d2bd3acc907cd73896d39084a6aeb5f4f696900333f6b6a2d3d955bcd955420bc52861db5ec89d251bb939b09457ec143051cedfe1a41ce0a6b6a9fd01ec9ddca370060000",
    ],
    [
      "ETag",
      "VxkFgKmQCu+VhPosKy5uGw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-90-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff4d51cf6f823014bef35790ee3a1239287389075dd09918a36c1e96c598529e0c853ed6966dc4f0bfaf2da05eda7e3f5e5fdfd78be3bae49cf1843cbb24ced2ef0a44fd9082da9a4304b2ca95d45b895c0279346e503435ee395ffcc9f83cab1360c9b4d8f0dd7cf0b19d4c5a97645f5050edbb68a4f131833c911a7f5aec76bcd5382dc0dc783808dbd0ded069aa2eadb65cbf878b30ba970a4cacb4dead56d3d92a249dd4d87dafd7c63ee58471044710c019dc1e540a3c01534b3bb9a445998327b1120c64d7c414b6722ab02aa940f434e58d079e3f1c0f033f0846a3a7c0efed3932aa32e4a662f746aefd152a9a47f86ba627ad9b8816b661f45190e35d3ef70969e9c7140fc8956abad3dee9d1fed66c562b901b817a1609495bd947f1826654659250a2024b33aa7feb35531de734ce3f63fe0afa18020000",
    ],
    [
      "ETag",
      "FnGxsbkBydecdAmPnUF0YQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0002ff1dcfdb6e82300000d07fe9b39870b1c2de049562e3b80fb317526841944b2de000b37f9fd9f983f30224cf59dfa74377672df80033518c75bec69d6eca3ee385ab47ade364c16ddbd0bb4d1f4d3007b56d1728113b216f1b4742eaf8f420dc5fad4b59cd116c637c3e2d881cb81bb90d5e34edabeb362a9ca631abb213bdf92e7482e4689eb91f7bbb855b74ea509de9e26aaa7896a89dc5d0f391a6a80fbc0f9ec5c86599ff108f21bc283b3a528924254cc2d2ace7836c4ddf52af55da301447fd1222de7ef646a8a531580136f14ab03eadde337563182bf0df4c8799b3f7d5644430017eff0035d6d48d05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:30 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-91-1595717766871",
    },
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
      "ff8d546d739a4010feeeaf60e8c7248a460433e33456496a47b1454c9ae97498e358c825c811ee4827cdf8df7b07a85033997c83dd7d9e7df6e5f6b5a528ea234902f542517d123de590bd7c7aa0be7a2a3dc051243d7fa7e7eb40ffa6cdaf7fba2777273ac35f42361e8dca2852a019daa4319c319a6718d8c57ad58e329aa728a3f44c109e0dbb675d7da81b5dc3180c4ca35b6219c4e19c248f92e19ef3945d743a3b1ded88d228069412d6c674b3b7779e7b9d34a30f8039eb34d3764426d6793ff1e79862c4094d46eb552922679079b0412496320ee8c0bf6cd2b709dab42311fd4c30208c699e7029ada4c1340949946705b9607a1546612e34ef7f6b067565cdad89ab601ae79bc44bd0064e950071e4f19714942b67b95066f6d5d2598cddd9d2f65693afd662dc9e2ce7eb85bd526ebf5a8ea570e4c7506095917259fcd9e2a75054640b807192149a5ce9ad2911deaa8fb33746b8a790244215832acc33b401ea9adad00f7d0387e6b9ee871af8bee91b3a3af7353cec433ff001d5190a65251e2534d10778e81b7dcd0bbb68e8f5a1677a431d83078340c3fd7ecfefe19e5aa1b7fb5afe6484c394b09432523559bd7566aee5b9ceda9e8c5dab5e7788f2984f4be5cdaa1be570d1a0bad2f75a72a428cd0815a28a71ce6cd772c6137776539321766b0e11c22fab27b95d218a191cd02813b3e2902d682007a3dae385353d808b4df9be0b6222e2d75ee7a11c1128e75fd47234ff661e572c56a315e56c4aabba729d997dadd69cdbb7696e509cbfc1f35c99d55474eb5e749835b85aff7ffd6ed572a8e2ad56f2d41f6bcbb993d8c2273d0e849041820f593fb0ba1258ba3f708a44f8ee304884b80dfbfc8c0bb37845981db2e30cca3745cace5784a6ae99a6b62314c08c1f4574b5de601771741c642ed840c277bd288f44d9c86d43525e9353c064b878077635c46d6bdbfa07c41dba84e1050000",
    ],
    [
      "ETag",
      "zD3Ud5J0LGXT+Y+5scBfsA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-91-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ffc5545d6bc230147defaf90ec556165daba810fbae926a8f3a3ee614324b6b75a4d9b9aa41311fffb92b46a5f1c85097b6972ef3937877b93d383512aa14d1079e8a98416c1729b00dbdf2d418cd4660c3c2182cb25a6110754566c1078a9d8efe1075e0cc9f073e74fbd70eb77fcc9c366d468a42ceeae20c4927790918cfd0088c765fca5e35296d75884435027ba94246134d761f9028b7dace18933ee0e5ef348483d8d0ca6bd5eb3d56ba30c3a96af8b7858e0b93ef26f127a9d1999185ad3c5187c6010b970e93a66740daee8eaf1721cc6042a9c26cc059e89a8c2145e329ac498515a91a9caa359316b8f35dbb46dcbaadbe6894ea88b45402355319da0b3bea0029331dda911232bbd039686e9c44fa3407eee12f21392d0b72a0e3c74ce1dcbbf10bb03c7aae6b8d96e66e42a0babca49f90181f93fa9cb2b5961f9c28b6967cfe446e238a449240a4a777aefcd1b362edd50b4e997a6d3be952c17d20b05759d6ebf3d719afde15571f99d5d4cd0da0be04346a5c738686799f7d57acdb6eed1c9a9cf54395128a30a96804ebb58feb1de0221733e261c8ca3f103206e58f01d050000",
    ],
    [
      "ETag",
      "OmVabPlPZwfUdmqfFfS3kQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `date` = ? LIMIT 1",
        types: ["INT64", "DATE"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-92-1595717766871",
    },
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
      "ffa5945b6f9b3014c7dff329107bd9a426900b81548aba28612b534aba84b4eba629b18da16e01536cda6555befb6cc885a859556d6f702efff3f339f679ae298a7a4f125f3d555448c2871c67ab777714aa27d2833908a5a71b7e39fffe0d5ad7bad9fee5febed16068af9efafd328a14d90cc46984eb8ce619c2ec743e6b8419cd5390515a1782f55eabde347a86d934cd6ed7329b652ec3513026c9bd54b8e53c65a79ab6e568849486110629610d44e39d5d7b6c696946ef30e24c3b2cab894a4c7bbdf0594411e08426fdf9ac84c819ce163806249218fb6c1f7e3c946f1010374211fd48100608d13ce112ad9441340948986785b8507a1646612e9877bf15833ab3c7f6d0538693b9ebbd5f8258ca2d3f2880298b4586591e71e5d37472a12c5351fd1630cc96caf5b93db58525a30189f082f84ba5af9c290377a4284b1f705cfe8f9d0bc753ca2617457dcc38490a340fc00857808477d34ee7c824771252047041b1095b987a17342dbd070368a2c06a1b30d0318416340dd0863aea7570c787185415b8ac5de6838426d00a6017b67bd8449d0e681b48c75657eff981a1eb6dd368231ff97e1304ea4661bd3bcf5346381e1196524636fd56afa78e672fbce9dc1d0e3cbb7af60088668e4afac3931f1c898b2655695f6bcb0ba2342354401593755ccf9e0e869e7355c110d76c8c438056b30779d1021031bccf06198831c7d905f5e570d4cbc9ccf19c893b18ef158a9b73b98d6422ecc70e767fa6aa9ab74a0f475d4ea1b44acc6e47adf8d6274755ae40941f9179dc98d5e68146ed88dabfd08de410ff1faea5b7f4ba2e97c05f28375f3f6b9522aad81c1b3af5ebdc9edec8dcc2273d531ce00c27685ff60d2f482696ee372c4611be5d5332436caa5d7dc685593c66c4f6d55186cba74de27220a5a06534cdb6b1151489197f1961199d6dc48b55256be118277cdb8b7265958d5c1f20e5159c224d868ba7e83aeee702beb6aefd0107",
      "d7943b6f060000",
    ],
    [
      "ETag",
      "6gJHZXb8W073xNzY/bgEyw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-92-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff4d515d4f8330147de75790faa824cec870267bd80cd1cd652ab80763c8d2c10541e0625b7464e1bfdb16d8f6d2f67cdcdeded383619ae43b2d23726f925d9afcd4c09a8b04c49b3a78c0eb5c70b95558722057ca0d8226cafd7cebfb2ffc72997a7ebcfcf0f6b6b3aeb2d974dab978f8050595be834412c729e41197f85363b3e7b556d202d48ddb2dd30df50dbd269a4a6b8bf5bbfbe87ae752819196d69bd56a365fb9a4975abd07726df55332dc791003833284d3832a86198462a127e7b4a872b038d62c04de3751859d9c30ac2bca102d4959931b6b644f6c67e438e3f19d331aec398654a458aa8a8d4f8efd050a9a7bf8a7a6279d9bb00e76610c5190f82c9ff384a4f4db151fa9b63f05c6808253b3792380bf3294b370d0135c93218a0754a30a95846035683aa4f2b79e52d173466bfc039c20d66018020000",
    ],
    [
      "ETag",
      "K4SSOs+JiRSfJYRx57NpjA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000002ff1dcfcd4e83300000e077e9792e638340bdd1221a3ac8409d834b5368f90d7f853160f1dd255ebefbf7042c49c430d0b1ad44035ec1c28e709fec496b20c5e772f002859be77ea1b6b4966a451ca77d53d9dd3bcf64f495664e5412acf31c1d59eed23818e2d56ccab72baf6fdd4ad4fb39dc087c58cc740a2d6ee7e1f59b352c8b285951496ac5bb292af66a4bf4033431e2f6cfac786305ef2e9bc7791e49e856fde508b5955c3459166d875affd3d18d4614cd61d21f639b38f8a1dab5b5e2f863c28717e39452c3043b20e6ae9062a0c5363b6910eec07f938e4b27b62b124c0a097eff00e494e73205010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:32 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-93-1595717766871",
    },
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
      "8d",
      "54",
      "5d",
      "6f",
      "9b",
      "30",
      "14",
      "7d",
      "cfaf40ec714dc817012a456b96d2152990959076d33421db31d42dc1149b6e5595ff3e1b48024b55f50ddf7bcfb9e77e705f3b8aa23e9274a39e2b2a24f15381f3974f0f14aa67d2833988a5c737b4ab74e0f6a1fb79e1e97fd73f6e6ebe3ecca6d32a8a946806b65982bb8c1639c2ec7cbdeac5392d329053da15845d6bd41de8966e0c0c6332318d418565388916247d940cf79c67ec5cd3f63a7a31a571824146580fd1edc1ae3d0fb52ca70f1871a6b5d36a2213d3de4ffc25a1087042d3e97a55892818ce43bc052491328ee80dbc68d3f708d8f66211fd4c100608d122e5525a4583681a91b8c84b72c1f42a8cc25c6a3e3c1b0675652fec79a0209a14db344cc1169f291bc041c85f32ac5cf94b5771bcaba5efce0267e985abf9b5edce7af3e562ed7a2be5eedaf66d850398e012ab4c958bf2e58947a9a8ccb6c18c93b4d414486f4389f0d67d74de18e181429208550cd761a1d19f8081d9b760040d1499231d467d0ca1090d1d8c601f59633cde400c9a0ca5b20a0f529a8e472313c3090c2d6ba287e371d40fadd1d00aad89091118422b8263b546ef0eb5fcc909c79784659491bac9ea9def047618f86b6f3e0bec66dd1128127e59296f57dd2a878b063595bed7921345594ea810558ed3f102db9fcd03e7b62143ecd602c700bdac9ee476452061f88806b99815c7b94b377230aa3773edcb23b8dc94effb2026227e1d741ecb118172fe652d27f36fe709c462b55a51cda6b2aaabc077bc6f6ac3b97b9be61624c51b3ccfb559cd44b7ee4587598babf3ffd7ef4e23872afed55a9e7ab3b6fd9f125bfaa4c7c711ce718a8e593fb0ba1258b93f708a44f8fe",
      "304884b80d87fc8c0bb3f88b103b664739aefe295275be2634f5e1c832f7840298f3d3087d788838390e3217dee294ef7b511d89aa91bb96a4a221a78495a77aed79f510779d5de71f41d3a4c9e1050000",
    ],
    [
      "ETag",
      "R7/Fn1M0bM+LN5xUXQQBjA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-93-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d1",
      "4e",
      "c2",
      "30",
      "14",
      "7d",
      "df",
      "57",
      "90fa2824106103131e4050878830e603318494ed0e86db3ada4e83847fb7ed06ec45b344125fd6de7bceedc9bdedd95e2b95d0bb1fb9e8b68496fe6a9b00dd5dad804fe4c60296049c892526110354966ce07825d9ad66cf71fdc1d7ccb44cfe34bbdece06c66ed26ea72ce6ac21c482b71791883d1f029789f84dc5a52cafb00887204f74489084d14285e533cc77b182a7b6658e1ef248485c858c5e87c34e77d847197428ff2ce2628e17eac8bf49a875ae65626843961678402172e0dc754cc9061c6eaaf1321cc601541849a8032c13918529bca224893125a4225295d64da5d668358c9a61e87ad3a81de9017130f749242b5ea7e8a4cf09c781453ee588919ede014dc374e2c751202f7709f90909e84316fb2e3ae50ee55f88e6c8d6eb396eb69b6bb9cac2aa62529e1fc0e29fd4c595acb178e1c5b4b3677221711c9224e205a5ef872f9d0b362edc50b4e95ec7ee5f4a9671e18582bab6f9dc9fda9de7f18fe2e23b3f9ba0bbe3c0c694088f3150ceaa55ebcd86a157d1d1a977443a914ba3729a804a3b58fcb11e7d2e721e0e186807ed1b9b63fed61d050000",
    ],
    [
      "ETag",
      "98DcdiJzYIRItKY+qYJ7yQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `stamp` = ? LIMIT 1",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-94-1595717766871",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ffad945b6f9b3014c7dff329107bd9a425e11a92485117a56c434a48979056db3425060cf50a98daa65555f5bbcfc6b980da55d5b4373897fff99d63fb3c761445bd4145ac8e153544e96d05c9c3bbdf38543f0a0f6420151e2b2e6ffc0207f7c16a93655833e66cbebe9f4c6414aab329c8cb0c7629ae4804e978b3eea5045725201877b960776475757b643bbae30c06434797b91466c91c153742e19ab1928efbfd03472fc538cd202811ed45383fdafb7746bf24f8378c18edb7cbf67925da7fbdf0598623c0102e269bb584a828245b980394098c53761c7e6acbf710c87b298fbe4311045184ab8209342913e1224169456a71aef4c88ddc5c331f7f1b0675edcedd59a0cc961b3f78bf03b990db7d500055b65b02699531e5f36ab9507625af7e0d28a43be5eaabbb72b985e00465708be29d3251ce94a97fae283bca38ae34ccbd85172872ca75d51852868a9a2d0061061b44dcbb9fa7f7c2511e258408601c631fb675b401d087da284c42274a86a61d261a0cc361e8d8c00cb56864412b0e21682a30515be6830217f16808cd58d70d9e1d99c0d19c706898896d43cb4eccd88c066010db96a5ee159e8efddc13c4e039a225a6683f70f56ae505ee965f527f360ddc66ef09e0d33c97f4edce5b2d313ea426ed6b63794654128439547db49e1fb8abe92cf02e1b18fc9ecd610aa287f5adb86909c8283c65030272c82059e0581c8e7ab15c7b81b7f4a7f393427d752e0e919487fd3cc29e7a6aaa050f65fba8e52948abc01c1c67dbeaa6ad7209b2ea0599bbbd59d55b1a9d17d4fe852ef016ee3a982e2efe03a1a1195a5733f82a087463ac9b63ddea699af6e32fe0fbaf5f9d4649956f933db0fa6de3aebe8bdcda273c2b9840028be804f186472512a5fb0dcb92871f5697c8e0dbeb589f3f7c86f8fb8ee8a97a44a07ced289767240587b6a99f04792261cf232c433b443c5b5fa216cc61c10eb3906b4c0ef2a985543570ea3411ce5fa7eff95f6af8ce53e70f0c41805383060000",
    ],
    [
      "ETag",
      "4dpkNnoTwTRUllo02LtLSw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-94-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "5d6f8230147de75790ee75646351d1253ecccd6c268e4da64f0b3105ae0c052eb6659318fefbda02ca4bdbf3717b7b4fcf866992439247e4d12441121f4b60d54d0c62a50e1ef032155c6e05e61cc8ad7283a0b172df39a7f771758045f5f2e1ae1f82d3e038e6abe9b471f1f007322a7d678924de2590465ce26f8dcd96d75a4e3350376eb74c37d437b49aa80aad2ddcf5fc75eef5a50c232db99be5f269b69c9356aaf5eecbb5d64fd963e0c10e18e4215c1f5430dc4328167a724eb322058b63c942e06d1355d8c831c3b2a00cd19294351958f67032746cc7198dc68eddd9530ca9483057159b2f72e92f50d0d4c33f353d69dc8435b009a38b82ec7af9f41392d26f537ca1eaf6e41b1df2afcd669500fec950cec2414f704fba289e518d2a54128295a0e990cadf7a4b44cb19b5f10f39c318f518020000",
    ],
    [
      "ETag",
      "/7xM8ykeIyDONT2bx4q8sQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "6e82300000d07fe9b31804b9ed0d1882abc8250184970659a505e552c41496fdfbccce1f9c1f5056159e26f4ec5bdc810fb09492b1adb6b0d7ad5d54598b7e97594845a1e7f42549aed7f2d391f9f114216e40a749954346e6857016f797dc6fe31c9aa312ae819878064c5231aee6424154fdba757bb3d6eaf1f129377228a82f6b3c24e4a6959340e0eac073b30f5e0f6226f95a9c8bca677e30e6f43b6a6b23b9c4e969855d2f846266cfae57725b76c758be2ac17224fe7d37688329c2abe8646a6a2267c94c5b071b80f940199e107dcf64c53036e0bf899ecb80df570b970c33f0fb07864f666e05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:33 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-95-1595717766871",
    },
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
      "ff8d54db6ea330107dcf5720f6b5b93517a052b4cda6741b29215b42526d572b641b43dd124cb1491555f9f7b50d496053557d83993967ce5c3cef0d4dd35f4812e8579a0e49f49ae36cf7ed9942fd427a300791f444de9333dc6d1f9df98f183cae5f17eb159add8f46451451680636698c9b8ce619c2ec6ab56c4519cd539051da14844d6bd0ec0eac81d1358ce1d034ba0596e1389c91e445323c719eb2ab76fba0a315511ac518a484b510dd1cededed653bcde833469cb5eb69db22136b7f9ef87b4c11e08426a3d5b21091339cf9780348ac8a3da203785da76f11b06945227a4b100608d13ce1525a418368129228cf14b9607a174661569a8fbf1583beb467f6c4d3108df34de22760832fb40070e0f35d8ab55b7731d7a6ceedc29d8fbde9c2f197933b7b3e6e4d16b3d5dc596a0f77b66b6b1cc0182bac36d2aed59f237e9422952dc08c934469f2a4b7a24478cb3e4e3f18e191429208550c9761bed11982aed9b160080d149abd010c3b1842131a03d0831d64f5713f8018541994b2020f129a60f33280b00b7d6858c0ef0756cfb7420bf94010073d18985618ea257a7face52d231cdf10965246ca26eb0feed4b37dcf5d3993b16757eb0e411ef39b4279bdea5a395c34a8aaf4b3969c294a3342852835cea9e3d9ee78e24dd7151962b766380268b77c95db158298e1131a6462561c67731ac8c1e8ce786edf9cc06a537e1d829888f873d4792a4704caf9ab5acee65fcfe389c5aab5a2984d61d5979e3b757eea15e7fe639a3588f30f78b6a5594f45b79e4487598dabf1ffd7df4625872ede6a294fbf5fd9ee6f89553ee9717188339ca053d62facae0416ee2f9c22117e380c12216ec3313fe3c22c5e1162a7ec28c3c59b2245e74b4273d0338dce815000337e16d1ef74cd43c4d97190b9f00627fcd08be248148ddcd724e515390a26c3c53b70ca21ee1bfbc63f053f9685e1050000",
    ],
    [
      "ETag",
      "gThN6yvZNMBlaZVqOVUcLQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-95-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d1",
      "4e",
      "83",
      "30",
      "14",
      "7d",
      "e7",
      "2b",
      "96fae8c8866e304d7c603a15c3a6321663ccb254b84c1428b645b398fdbb6d618e97191297f8427bef39b727f7b6872fadd5426f7116a2d3167a8e97ef05d0d5c112f8bddc78c08a8433b1e4246380da920d1c2f253b74fc23239b3e1ef7ba9dc3e18dd779c09d9e7d7656b258f0022916bc2f1189388a210999889f54dcaaf20acb700af2c48024459a2d54d8dec27c952b78ea7bcee4aa8ea42454c864e6baf6d01da10a5ab7778b8498e3853af26f126a9d6b95187a25cf1e4440210b60db754ec92b04dc51e36538cd13d019296800ac12918525bca4a4c83125441729fda4af1bfd93be655896690e2c63434f4880794c3259319ba21f7d4e384e3cf229478cccf20e68199613df8c0245b54ba84f48401fb2380ed14f6eddfe85e84c7cb357e356bbb956ab6cac2a2615c5092cfe495d5cc90b162fbc9976f54cf6248e535264bca1f4a57b6befb171e186a64d5fd8fe685fb28c0b2f34d4f59df168eadbe3bb9de2e23bdf9a60b8e2c0ee28111e63a09c65747b83be6576d1c6a9e7443a914ba3725a804a0758fcb1ae632e72114e18686bed1bbf21c0561d050000",
    ],
    [
      "ETag",
      "dIT21nSY340/+BJR/Wa/4A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `amount` = ? LIMIT 1",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-96-1595717766871",
    },
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
      "ad",
      "95",
      "5b",
      "6f",
      "9b3014c7dff329107bd9b4e6d6402095a22e4ae9c69490969056db3425c618ea1630b54db7a8ca779f0db9809a55d5b48748c9b9fccfef1cdb27cf0d45511f701aa8678aeae3e8314774fdee9ef8ea89f4200e22e971a7897115fd0ed6dfbf9e2e6e3e26664ff783ebe1b08cc24536034916a326233985889d2de6ad88923c039490a6106c0efacdae3ed08dae61f4fba6d12d73198ac3094e1fa4c21de7193b6bb7771cad8890284620c3ac0549b2b7b79f4edb1925f70872d6ae976d8b4aacfd7ae1f39840c03149878b790991334497280138961887ecc0ff54976f6190b42211fd84210210923ce512ad9481240d7194d3425c283d0ba33017ccfb9f15833ab726d6d853c6b385e3bd5f8144caad3e288029cb25452c8fb972e9cea6ca2a13d5ef00436ca5dc7eb15c4b582809718c9638582943e55c1939178ab293282c137b6a7b4a39e6a26c8018c76901e7013f461524e1dd0ed43e72967b092902b8e0d8862d8d4e1f74cdcec00f7d0386f256841de4fba66fe8a0e777e040435ae0235055e0b276990f529202139c06be8674b3df43d0f0b55e67007b5ae8eb66507cfaa639300da06e1536fb7e7e51ccd105661961783b71f5d6b53d6be9b90b673cf2ac6aef2110e3bc28e9eb9dd75ae2624855dad7c6f28228a39808a8e26c6dc7b3dcd1d8b36f2a18e2a24d5004e07afe28af5a0862860ed98082047144a7249087a35ecde6b667cf9cd1e4a050dc9dab5d2413613ff6b0879eaa6ade3aab1f75790aa55562f635b5e2db9c1c55b901717e44e6696b56bb358dc611b57fa1bb9ccc46ff89afa56b7f41dc7efbd9a8c8ab62716cd1d4eb85e57e93b9854f7a5c14228a527828f886e723134bf71bf6a208df6d29992116d5be3ee3c22c5e326487ea90a2f25de3a4ecb6143475cdd07a",
      "3b419148f9cb08d3ecec225e6c2a590b2528e5bb59941bab1ce4a6869457708ab4e27f63e138b6f3b9806f6c1a7f0077cbc1ed6e060000",
    ],
    [
      "ETag",
      "RMm7PgxdyZJ2UV+m835bdQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-96-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff4d515d6b8330147df75748f6e88459a8b6833eac9d6c8552363761304a897a755af5ba24ae94e27f5f12b5ed4b92f37173734fce866992435e27e4d124519efdb6c04e77198877750880b7a5e0726bb0e640ee951b04cd94fb300b5d6b15d167f72b0dcb895554d63c3f2e16bd8bc73f5051e93b4b24719a43997089bf3536075e6b35ad40ddb8df33dd50df3068e2d4686dbdfdf45ffce056aa30d1d236dc6c9e961b9f0c52a7f79d5c3bfd9402a300526050c7707d50c3b08058acf5e49c564d0936c796c5c08726aab09733866d4319a22d297beedace743ef51ccf73dd99e78cf612632a72ac5545f8412efd050a5a067854d393de4d580ffb30c628487a93cf6d4252fa53c51372a1bae1b43346b4bb365b9e04f0378672160e7a82073246b14235aa504908d682a6632a7feb3517036774c63fcb6f36c718020000",
    ],
    [
      "ETag",
      "k8U6+CbaD6XfUl2+jm+9iw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "1f8b08000000000002ff1dcfdb7243400000d07fd9e7c8901d45dfac90ba644608625fcc620571672bd2e9bf37d3f307e707902ca3f39c2cfd8376e0136ce4a0ecb3bdddcb48b8646e6cde6cb397214c057d619b6c074f3e5d31634ee3e8b0094f97e2559d0a5722c1870d73b91422d3c75dcc19358d1af3d1422cd60d93da3545dec8aba5a88516fb6666cd483d4aa5a6a19cb7d9d14821f7f212631db7d6ea17b9b1d8800b094febb9bdc33b72663cdd869e48eae865c1f5e8b891a07057bf5a0772f89211f1633de7b2b24b7098a34e0dc233d801fa1caa89ce49f59e41515176e0bf992cdb40df5744c94427f0fb076549fc3205010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:35 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-97-1595717766871",
    },
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
      "8d",
      "54",
      "5d",
      "6f",
      "9b",
      "30",
      "14",
      "7dcfaf40ec71cd07f980a452b466295d23256423a455354dc8760c750398da265557e5bfcf0692c052557d837bcf39f7dc7b6dbf35344ddf9264a35f6a3a24e17386d9eb97270af50b95c102842ab3bb7fd84e8deff1fcefd3761a3f040e135fcdc9785ca048cee6204e23dce4346308f3cbf5aa15329aa58051da9482cd91d53406a381655896690e2da3e0721c0573926c95c2a31029bf6cb70f3e5a21a56184414a780bd1f8186fefbaed94d1278c046fd7cbb66525defeb8f0b7882220084dc6eb556122e398f938062452364eec0dbcaacbb708885ba144ef08c200219a2542592b64104d0212662c17974a6f3228c3b9e7e36f25a0afecb93df53444a32c4efc04c4f842db00017cf19a62edc65d2eb49973b37417136fb674fcd5f4d65e4c5ad3e57cbd7056dafdadedda9a0030c239571b6b57f99f237f724779b50de68224b9274f652b4e64b69ce3ec9d151e25948874c57109f3ad8e098c6167040368a160d81bc0a083211c426b007ab083467ddcdf400caa0ab9b3820f129a4060c201b6025fc24dbf6f62e083de68e4c3616076cdae618cfa865eb2f7c75e5e1811f89af09472520e59bf77679eed7beeda994e3cbbda7700b2485c17ceeb5dd7da11724055a71f8de4cc51ca0895a6f275ce1ccf7627536f7657b121cfd61c8700bdae9ed5e90a40c4f1890d98dc95c06c41376a31ba3359d8d727727e527e1e405c227e1f7d9eda9140b5ffbc97b3fdd7eb78f260d54651eca688ea2bcf9d393ff44a72ffbecc1d88b277747665584fe5b41ee584794dabf1ffd79f46a5862eef6a694fffb5b6dd07c5cd732ae3e200339ca053d54f1c5d452cd29f788a24fcf03028867c1b8ef5b9",
      "9061798b103f55470c17778a14932f05878341af333c084a2213e7887eb773409c3d0eaa168e71220eb3281e896290fb9aa5ac6227a729b8bc074eb9c47d63dff80762fea025e1050000",
    ],
    [
      "ETag",
      "vWYkC1BmLzjkCmYfNrt+6A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-97-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "51",
      "4f",
      "c2",
      "30",
      "10",
      "7e",
      "df",
      "af",
      "58eaeb4846021b98f8808a4a4450984f8690b2ddc674dbcdb65309e1bfdb7643f6825922892f6befbeeffae5aefdb6354c93bcc55940ce4db28aa3f702d8e62c02f1a43633e04522b85c72cc38104bb141d048b10b3ef5eea7ae3d0cfbbdf7fccb466147f7d1c545c9e2fe1a522a795b19c9388c2109b88c5f746c56798d65340575a28f4991664b1d5a07586c720dcfbdd968725b47520c3432791e8f0797e321a9a09d755c24a0822ef5917f93d0ebc2a8c4c82bae66100283cc8743d739c357f0c5488f97d3344fa0c5b1603ef04a44159670c4b0c829436cc954abefb6dadd7ed76dbbaee3f4dcf69e9ea04f458c99aa789e931f7d81822633fc5423264e7907ac0ccb89ef4741c2da25d42724a10f551c07e427b7b37e218e269ed3a971abddc2a855365695930ae30496ffa42eaf644de50b6fa65d3d931389d3148b4c3494be194f07276c5cbaa169d3d7036f782a592ea4171aea7aa387e1dc1b3c3c1e1597dfc5c104971b01fc91a1f41807edacb6dde9755dc7267ba75ea172a2504615ac009df6a9fc63ddc542e6429a703076c637fb76719a1d050000",
    ],
    [
      "ETag",
      "usOTKO70Ef98qpx0ot0gKg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `id` > ? LIMIT 1",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-98-1595717766871",
    },
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
      "c5",
      "94",
      "5d",
      "6fda301486eff9155176b34985244008a9843a04d9968a421b42ab6a9bc0314eea368953db61aa2afefbec24405059d5bbdd25e7e33dcf39b6cf6b4351d4279caed573450d70f49c23faf2e99104ea99f4200e22e9b9b91f4f7407b72fbb9bcb91ad016de643ef663028a37091cd4092c5a8c9484e2162e78b792ba224cf0025a429049b76bf6998b6691996d5ebf52da3cc65280e27387d920a0f9c67ec5cd3761cad8890284620c3ac0549b2b76b9bb69651f2882067da71594d5462dafb852f620201c7241d2ce62544ce105da204e058621cb2d7c1d763f91606492b12d11b0c118090e4299768a50c246988a39c16e242e9551885b960deffd60ceadc9938235f19cd1653fff30a24526ef545014c592e296279cc956fdeec4a5965a2fa036088ad94bb1f8ee7080b25218ed112af57ca40b95086d3b1a2ace4dfaf5cd73b489826ee95eb2be59c8bba6bc4384e0b3a1f0431aa31096f3551f7c461ee25a408e002a40a5b5a7a0f187ddd0ec2c08261bf6306a18e82a01f5826e8043ab4bba8bb0e10a82b7059bbcc07294921b47b7dd8052682460fb6615707961918d6ba6b0616ea983000c0366ca8560adb7d3f7f28e6688c594618ae46aede79aeef2c7d6f311d0d7da7de7b08c43cc725fd71e7472d7131a43aed7b63794394514c045471b8eed477bce1c8776f6b18e2a64d5004e0cbfc59deb510c40c1db2010509e2885e91b53c1cf57a36777d77361d4e0e0ac5e5b9de453211f6730f7be8a9aee6bf64c7475d9e42699598bdae5af36dcf4eaadc82383f21b3a9ccaa71a4d138a1f65fe9cc7fe0555fbf1b3571556c8d0a4bbd5938debdcc2d7cd2e3a1105194c243b90f3c1d9958ba3fb01445f86e45c90cb1a5f6f5191766f18a213b548714956f1a2755af8560dfec191d7d272812297f1bd169ef23deac29",
      "590b2528e5bb5994ebaa1ce4f60829afe11469325cbcc1a93bfd5ec037b68dbfcdbf7aaf6b060000",
    ],
    [
      "ETag",
      "QYDL0Ei2J4vJC9/a/OTcRQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-98-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d515d6f8230147de75790ee7123194b145de28312b69918e398cc250b3115ae0c075c6ccb8c31fcf7b5059497b6e7e3f6f69e5e0cd324bf6911936793ecd2e458013bdf2520ded5c1075e6582cbadc4820379506e103451eeafe5b4e049fab2ba77dde3a60c461b3eff3c4d268d8b473f9053e9bb4824f13e852ce6127f6b6cb6bcd60a9a83ba71bb65baa1bea1d5c4b9d4da7cb9f65e3dbf2fe5186b69192c16d3d9c223ad54eb3d946bad9f72c09d0f7b605044707b50c9f0009198ebc939cdcb0c2c8e158b80b74d546123270cab9232444b52d67864d983f1c0b11d67381c397667cf30a222c54255041fe4da5fa0a0998f27353d69dc8435b009a38b82ec7bf9f41392d29f2a7e2257aa6e4fa1d1a1f0d66c7616c0570ce52c1cf4048fa48bc24535aa5049085681a6232a7feb2d152d67d4c63fdd072e3018020000",
    ],
    [
      "ETag",
      "XNAnsgiFP+CCqWpU8WsIVw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "5b0d1694767f940615aa204326fc341d146510411010ccee3eb37783f702224964dbf24755c81bf800a38078912c9c0a91e53111eb4b6ef1de65fb727975b438ac0b4a955d7472e8b6b54858ef32a416ce280d732aef81a17adbb257cebe8e0e8a7e21f561d24ffb3edd6482e366ed232cef99fd3d78aba88383ef761531537c0e4405119cdb21e75a56c3768eb0c714a349bd2eb1c361a0b7e98bfeb0b25799bff1441a8878ee5aa3c5f4884d905ea91f7c56fc58c849a36d189bd8e04fa2801990cf3a6f64cbf3f74c5d613c03ff4dfe186bf9be12291ad980df3fdc0bcd2005010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:36 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-99-1595717766871",
    },
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
      "00000002ff8d545d6fa240147df75710f6b58a14156962b646e9ae49c55dc036bb9b0d19c60b9d1619ca0c6ddac6ffbe33800a6bd3f40deebde7dc73bfe6ada328ea034937ea85a286247e2c207ff9724f43f54c7a80a3587aae28fe3df7e1d51b8c34dd7cee87afa6964e27932a8a946886b659025d468b1c03bb587bbd38a74586724abb82b06b595d7d680d4ddd3447a3b1a957580649744dd207c970c779c62e346dafa317531a278032c27a986e0f76ede95ccb727a0f9833ad9d56139998f671e2af09c588139a4ed65e25a2609007b0452491328ee84d78d9a6ef11b4edc522fa89604018d322e5525a4583691a91b8c84b72c1f4268cc25c6a3efc360caa675fdb335fc13429b66990a22d9c291bc451c05f3250aedcd5525938572b7739f5172b27f066dfede5b4375b5daf978ea7dc7eb75d5be1284ca0c42a13e5b2fc73c44fa9a8ccb601c6495a6af2a5b7a14478eb3e2ede19e181429208550ceab0c0ec8f903eee5b61149a381a1bc330ea43188e4373888cb08fad010c3621a02643a9acc2a394a67d6333b6a2e83cd0310c8281a18f82d018848139360cd3d0ad48d775b546ef0eb53ce784c39cb08c32523759bd7517be1df8eeda994d7dbb5977848a84cf2be5edaa5be570d1a0a6d28f5a72a228cb0915a2ca712e1cdf76a7337f71d3902176eb1a62845fbc47b95d114a181cd12817b3e2902fe9460e4675a64b7b7e04979bf2631fc444c49f83ce63392250cebface564feed3cbe58ac562baad95456d5f3dd85f34d6d3877efd3dca0a47887e7a936ab99e8d69de8306b7175fefffadb69e450c5add6f2d49f6bdbfd25b1a54f7a5c882087141fb37e627525b0727fe22912e1fb874122c4db70c8cfb8308b2bc2ec981de750dd14a93a5f138e8723cb30f6840298f39308713ea37dc4c9e32073c11652beef45f548548ddcb524150d39254c868b3b70ea21ee3abbce3fb01e3afbe1050000",
    ],
    [
      "ETag",
      "FocZDTezS46/17w0bz7/nA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-99-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ffc554514fc230107edfaf20f51512496013131ea6a22e41d431a2c61052b61b0cb7dd6c3b150dffddb61bb017cd12497c597bf77dd72f77edb72fa3d1202f511a90d30699478bd71cd8fa6801e25e6d5ce0792cb85c324c3990a66283a00bc55ef3cfd5d3e4d171d1c38bf1ebc7c3d2999b76bf5fb0b8bf84844ade978c641c4610075cc6cf3a6e94798da5340175a28f719ea4331d36f7b058671a1e7bae33baaa2209061a194d8643fb6c382025b469fe2c12504167fac8bf49e8756a946264857317426090fab0ef3a63b8025f387abc9c26590c2d8e39f3819722aab080170cf38c32c4964cb57abd56bbdbeb5a6dcb32cd13abbda5c7e8531161aa2a2663b2d3172868ece2bb1a31318b3b6045584c7c3b0a12562ea13a2109bda9e22820bbdca6f90bd1197966a7c22d7753a352595b554e2a8c6298fd93babc9225952fbc9e76f94c0e244e13cc535153fa72786b1fb071e986ba4d5fd8dee050b25c482fd4d4f59c9bc1d8b36fee7e1497dfe9de04676b01fc8ea1f41807edacf671e7a46b99c764ebd473544e14caa882e5a0d33e957faceb48c85c48630ec6c6f8067a652c2f1d050000",
    ],
    [
      "ETag",
      "yszjYUXIRoToDSqxWhIb6A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` > ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-100-1595717766871",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffad945b6fda3014c7dff91451f6b249051220172aa10ed1748d46a10da1d5b44d603b4eea3689d3d8e954557cf7d94980a0b28ba6bd25e7f23f3f9f639fd796a2a88f240dd4534585247a2a70fef2ee8142f5447a300791f45c5c478f7eb2bc312fd17df498d1cf2183fd9bd1a88a226536034916e336a3458e303b5d2e3a514e8b0ce494b685605bd7b4b66e0c0d4bb72cd3b42dbd4a66380ea7247d9412f79c67ecb4dbdd8274224aa318838cb00ea2c9cede7dee75b39c3e60c459f7b06e579462dd3f543e8b29029cd074b45c541405c3f90a2780c492639f1ec08f87fa1d02924e24a29f09c200215aa45cb2553288a621898abc14174aafc228cc25f4eeb7615017ced499f8ca64be9cf9efd7209172eb0f0a60ca6a956356c45cb9f0e657ca3a13d5ef01c36caddc5d3a9e232c390d498c5724582b23e54c19cfce957ddc5af956685a1f0bc7d4bd727da56a77593dc08c93b464f4018c71834c78ebc6ba4786ba939022808b3275d8cad24ca0dbda1086d042a1dd3760a861086d6819a00f35341ce0410031682a7059bbca07294ded01088261afd787810d0c63d00f4c03981a0610c35e808640d7fb811d9a6aadb0d99de7474e383e272ca38cd48d57ef3cd77756beb79c4dc6bed33c7b084457cf2bfac3931f1c898b2635697fd7963744594ea8802a47ecce7cc71b4f7cf7b68121eedb144700bd2c9ee48d0b41ccf03e1be420c11ce7573490c351afe70bd777e7b3f174af505ea1eb6d2413615f77b0fb3335d5fc97ec70d4d5142aabc434076ac3b73939aa720be2e288cc736d56f5038dd611b57fa15bf89e3bfbf41ff0c69918dc2f10ebafefad86be2a16488da6de2c1def8bcc2d7dd2e3e110e73845fb8a7ff17c6462e5fe9b0529e2b7db4aa68885b503605c98c553466c5f1ee5b87ad824a9c65109da8665e9f6565024e6fc4d842df6c536e2cdc692b5708253be6d46b5b9aa4e6e0e908a064e9926c3c5439cd513dcb436ad9f98e74a6378060000",
    ],
    [
      "ETag",
      "FPgkTmUQ6HchgkpoKfsb3Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-100-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff4d51df6f8230107ee7af20ddebc8249bb22df1410d9966cc299bc992c5985a4e86038eb5658618fe77db02ea0bedf7e37a771f47cbb6c96f9247e4d926db24fe2b81573731c8a5be8420ca540a7514980b20b7da0d92c6dafd76cfa78bf7497658ce5787e91d13af5f1c47c361e312ec0732aa7c478514de25904642e16f83ed96375a4e33d02f6e36dc34342fb49aac0aa3cde69ffe8b1f5e4b1946469aaf8260340e7cd24ab539d7ea5b9b51f6b80d61071c720697810a8e7b6072663617342b527004969c81689be8c2468e399605e5888ea21cb7d773dcfe53df733d6f3078f4dcce9f22a332c15c97ac3ec879008992a6211ef4faa47113dec0268d2e0bb2bb0ae83a2225fdebe20772a6eaf6b6b63ab4be341b5712c482a35a468059a147ba2c26a877953a0ac94b3034a3ea774d13d972566d9d001891ea8519020000",
    ],
    [
      "ETag",
      "M3rHPOCmwQNUwH/csKXroA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "4b7282300000d0bb64ed3880814297a095421110e4b7c98490da880813824decf4ee75fa6ef07e002684ce3312634f6fe015286c386bb20e47dbd5537a36957f96416f30e37a8b8eb1c7e6e58d6cbbeb56137aeff511afac815db4668231932f1377bc5899478bd8ad59d85a82a0acc7dc11fa0ed909cf4a65e4fb9d8d32e85b7a2b9a01e2535d1e42120f92e7a556a10da692dc4f5f8efb2e6157b3d4868255242952b80930bf8fb509c3a259dae0b1ecbb3cbe88ac2b1fcbf49945e4e0f6539a869dcabf3ffc7a062b40e5c4389d117bce36a6e3acc07f130935d1e7d5a598530e7eff0023513d1b05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:38 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-101-1595717766871",
    },
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
      "0002ff8d54db6e9b40107df75720fa1a5f48b08148566339a441b2718c71d28b2ab4e081ac8359c22e4ed3c8ffde5dc036d4519bb7dd993967ce5c76df5a92243fe164255f4ab28fa3e71cb2d74f6be2cb67c2030c45c23342bfd70fd676997cfd357fb933beafc793f57a3e1c9651b84053b449636853926701d0cbe5a21365244f5146489b13b6959ed256fa465f53346d30d035a5045388c3094e9e04c5236329bdec76f7423a1121510c28c5b41390cdc1dedd9e77d38cac2160b4dbccdbe5a968f73f993fc724400c9364b85c942a720a99071b8463a1e3085ff9574dfe0e469b4ec4a3b738001404244f98d056d20424097194670539677ae3466e2e441fae3583bc3027e6d8950212e79bc44bd006cea41562c863af294837ce6c2a59f6cdcc998e5c6b667b8bf1ad391d75c6b3c9726a2fa4875bd3312586fc180aac3494ae8a9bcd2f85a222db0a28c349a1c915de9a12eead1a69bd33c4038520e1aa2854619ed61b2045ef197ee86b41a85ff4fdb007beaffb5a1f5df8bdc050415df980ea0c85b2128f1292acce555034157903dd1878aa3f409ed1570d7e855e4f050df98a2157e8dda196970c33b8c6342514574d961f1ccb353dd759dae3916bd6eb0e511eb3eb5279b3ea46398c37a8aef45f2d39519466987051c5382ddb359dd1d8b5ee6b32f86e4d2042c1ebe2596c5788620a4734caf8ac186453b2128391edd1d4bc3e828b4db9db07511ef1e3a0f3580e0f14f32f6a39997f338fcb17abd18a7236a5555eb88e657f916bceddfb34f728cedfe1d9566639e5dd7ae41da60daed6dfa79fad5a0e993fd64a9e3c5f9ace37812d7cc2e340081924c131eb075657004bf7473e231ebfff1904847f0e07019471337f46013da60f32281f152e5b5f11ea7d5dbdd0f7841c98b1d388beaeed234e7e07910b3690b07d33ca5fa2ece4ae2129afc92960229c3f04bb9ae2aeb56bfd01b0d97533e4050000",
    ],
    [
      "ETag",
      "AazjWIvUnXxQwP9ZjCLjjQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-101-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d",
      "6f",
      "82",
      "30",
      "14",
      "7de75798ee55134914dc121fd4f995a0f303f7b21853e18238a0d8962dc6f8dfd716545e5c4866b217cabde7dc1e7a6f0f27ad52419f41eca2970ada06fe21057a7cf281cfe5cb02581a72269684c40c5055b281635fb20d3a7967813b3f1edc916f5b7c3b1cf4a8df6e672ce6ec20c28277129188bd00429789f843c5953cafb01847207774489846f14685d51bcc8f898297f6623c1d169188b80a99ae2cabd3b5fa2887ced5fb222ee678a3b6fc9b845ad75a2e86f664bb000f28c40edc4e9d50b207878f557b198e92106a8ca4d401968bc8c20cf62949134c09a989544dafeb35bdf9dc3475d3348c96a95ff82171300f482c4b564b74fd004e380e17e49ba9d96443a05998b5fcd20be415a6506c9180be6471e0a26bee5cfd85389eda46a3c0cddfd65aa1b2b4aa68951784b0f9277531931d1657bc9c767e4f1e248e2392c6bca4f4c07aeb3cf0e0c20e650ffddab1fb8f92655c98a1a4ae3d9ef497766732bb2b2e9eeb9b09ba470e6c4689301903652dbdde68354da38e2e56ed1169452e9dca690a2aed60f1cb1a055ce43c1c32d0ceda0f193337801e050000",
    ],
    [
      "ETag",
      "6rMVsidQyqdHgTLtbGFCrg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` > ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-102-1595717766871",
    },
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
      "ad",
      "94",
      "6d",
      "6f",
      "da",
      "30",
      "10",
      "c7",
      "dff329a2eccd260dc80310a8843a44b3351385368456d33681935c52b7499cda49375af1dd67270182cab66adabbe41efef7f39d7dcf0d4992ef71e2cb2792ece2f02107ba7e73475cf9bdf0408642e1f91c75207dba9aa9e7e6cf9bee3dbdc4eba7ee68382ca37091cd509c46d06424a71eb093c5bc155292a78812d2e4824d55d19a6a77d03554c3e8f5fa865a26338882094eee85c46d96a5eca4ddde82b44242c208508a59cb23f1cede7ed4da292577e065ac7d58b7cd4bb1f65f2a9f46c4431926c970312f297206740931c291e0d8a7fbee8743fd1646712be4d18fd803e479244f32c156ca7824097098d3429c2b3d73233717d0bbdf9a419e9b1373ec48e3d962eabc5da158c8adde498849cb2505964799f4d19e5d48ab9457bf450cd84aba39376d935b280970044becafa4a1742a8da667d23e6e257dcb154507ee985817962395ed2eaafbc0329c148c0e7223a891716fd558ebc8507712420465bc4c15b634941e52fbcac00d5cc30bfa7ad70d1470ddbe6b7491ee2adea0031ddf055457c844ed321f2524e96881df43c873fb9aee6b03ada3806e80aa1a3ee88ad1014f57065a0ff972a5b0d99de707c5199c61961286abc6cb37b6e5984bc75e4cc723c7ac9f3d40bcab6725fde1c90f8e94f126d569ffd496174429c584431523b6a68e698fc68e755dc3e0f76d0221f2d6f30771e3021431d867238a62c8805e105f0c47be9ccd2dc79a4d4793bd4271852eb7918c877dddc1eecf545773d6e9e1a8cb29945681d9ebc835dfe6fd51956b14e547641e2bb3ac1e68348ea8fd0bdddcb1ade9a7ff8087523eb8df20565fdf1b357d992f900a",
      "4dbe5a98f617915bf884c786002824debee22b9e8f482cddaf59903c7ebbad440a5f583b009671337fca1edb97f728940f1bc7e5384ac17e77a06b83ad204fa4d9cb884e5fd946bcd858a216c49064db66949babece4e60029afe11469229c3fc46935c14d63d3f8058db2ece078060000",
    ],
    [
      "ETag",
      "Jl4epzQO1HExW5krPiyz5A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-102-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "4d",
      "6f",
      "82",
      "40",
      "10",
      "bd",
      "f3",
      "2b",
      "c8f65a12b151da261eaaa16a63494bf5d418b3c240b1c0d0dda18d31fcf7ee2ea05ed87d1fb333f33859b6cdbeb332668f36db67e94f0de2789302bdeb4b08b2ce49aaa3c25202bbd56e209e6ab7bfa6f7bbd9cbe2b90c027f33f467f3c16b924e26ad4b465f5070e53b29a47092411e4b853f0db63bde68252f40bfb8db09d3d0bcd06974ac8cb60cd6fedc0fafa5026323059bd5ea69baf2592735e6dcaa6f634639e03e84040494115c06aa041e20a2a5d95cf2a2cac191588b0864d74417b6722ab0aeb8407414e5b883a1e38e1e469eeb79e3f1bde7f6fe1c234e1996ba64f3c1ce031012cf43fcd3ebb3d6cd440bdb34fa2c587215d075444afad5c50376a69aeeb6b57ab4bd349b1e09e49b40b58c84b8adecb398a1de957414246a3074c4d5ef5a64d4715663fd0375752d2c19020000",
    ],
    [
      "ETag",
      "ETtQ3CJHFnNNEU2ECG0Mfg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00000002ff1dcfcd6e82300000e077e9d99a018ab09b4c501410d834e0851028d0b952d6f253baecdd4776f9eedf0fc88b02719ef5f4895af00ae65c35d7c5fa420d4b894aee5e483b68382b473dac341ccb7d1fdbf2f8427695ea783e0ee86112d30085e628f3ed38cb720b09643cbe2f5455a0dd221ccf675da61efdde04d4dcbd251ec3e74d0e4f14351db3e5236906ed608c51e3b40f8aea31198cf4b398dc52218e6e44cc95323082771362bff6ab045a342e84952bba38795feafd8ad3c4da1b827c4c35313b1e4adb96d7f0095600890e33c433bcccb4ad69aec07f33ebe70e2d570be50c31f0fb07ee7999c205010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:39 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-103-1595717766871",
    },
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
      "8d",
      "54",
      "db",
      "6ea330107dcf5720f6b549a0b990548ab6d984b64809e912d26ab55a21630c750b98daa65555e5df6b0321b0a976fb063373ce9cb978de3b8aa23ee134502f14d5c7d1738ee8dbb747e2ab67d2833888a4674c7f5c5be0265adc2e37d7f7cb1549c60fc3d7d9ac8cc2059a81248b5197919c42c42e76db5e44499e014a48571076756dd0d547d391a11bc6783c31f412cc501cae70fa24291e38cfd845bf7f10d28b0889620432cc7a9024b5bdff72decf28794490b37e3b6f5fa462fdff64fe1e13083826e96cb72d55e40c510f2500c752c7111ef8976dfe1e06492f12d12f18220021c9532eb5953490a4218e725a900ba6776114e64274fddb30a85b73652e5c0592384f522f05093a5302c081c7df32a45c399bb562d9571b673d77ad8ded6d1737e67ade5b6c56bbb5bd55ee6f4cc75438f063546095997259fcd9e2a75054640b10e3382d34b9d2db5022bc5523ad4f8658534812a18aa12acc33b431d027dad40f7d038693c1c80f35e4fb13df188181afc1e9100d031f812643a1acc48394a44130d087e753e8058101bd2100c8f38d30f0a69aa1fb13688cc260a456e87d5dcb2bc51c2d31cb08c35593d57bc7724dcf7576f662ee9acdba4390c77c592a6f57dd2a878b063595feab25278a328a8910558cd3b25dd3992f5cebae2143ecd60a4500be6d9fe576852066e8880654cc8a23ba26811c8c6acfd7e6f2082e36e5f610c444c4ef5ae7b11c1128e75fd47232ff761e572c56ab15e56c4aabba751dcbbe561bcefde7347720ce3fe179a9cc6a26baf5203acc5a5c9dbfbffe741a3954f1582b79eacf9de9fc92d8c2273d0e0a1145293c66fdc2ea4a60e9feca3112f187cb2021e238d402181766f18c203ba68714958f0a97adaf0827634dd38d03a100527e1aa14feb8893eb2073a104a5fcd08cf24a949ddcb724e5",
      "0d39054c868b87605753dc77f69d0f08c0a70ae4050000",
    ],
    [
      "ETag",
      "6rBGIaHgCPDOGWDLom6h4w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-103-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "c5545d4fc230147ddfaf20f5152253d8d4840790a928221fc3180d2165bb9bd36d9d6da710c27fb7ed06ec45b344125fd6de7bceed596f7bbad62a15f41ec42ebaa8a045e07fa44057473ef0919c8c81a52167624848cc0055251b38f625dbbb3be93cdd5a8ddbe1f271d905a63f9f1eaf46ad56c662ce2b4458f0d62212b11740e83211bfa8b892e71516e308e48a0e09d3289eabb0ba87f92a51f0c41ef706d7452422ae4206d37ebfdde95b288736d59f455cccf15c2df9370935ceb45c0cbd91c5183ca0103bb0df7542c91b38bca7dacb709484506324a50eb05c441666b04f499a604a484da46a7afdb4a637cf9ba66e9a867166ea5b7e481ccc0312cb92e904ed7e80138ec331f9923d46467608340bb3966f7b81bcc229145b24a04f591cb86897db547f21f606b6d12870f3d94c2b54965615adf28210e6ffa42ecee4158b2b5e4e3bbf270712c71149635e52faaaffd03ee0c6851dca6ebadbb6ad43c9322ecc5052d7eedd5b13bb7d3ffc515c7c677b1374561cd89012613206ca5a7abd71d6348d3ada5af592482b72e9544e535069078b27eb26e022e7e19081b6d1be018c80a5ed1e050000",
    ],
    [
      "ETag",
      "fK2BXJE4JPxVxDes1Z3/yQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `date` > ? LIMIT 1",
        types: ["INT64", "DATE"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-104-1595717766871",
    },
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
      "02ffa5945b6f9b3014c7dff329107bd9a426019200a9147559c236a45cda84b49bb62931e690ba034cb1695555f9eeb32117a2665bb5bdc1b9fccfcfe7d8e7b9a628ea4f9204eab9a2fa647d9f43f6f4e68efaea99f400476be91991c72bf4c5b01d128f3f206bded5e749ffb1d72ba34891cd509c46506734cf30b0f3c5bcb1ce689ea28cd2ba10aceb5abbae77ba1d4bb72cd3b42dbd4c6610852392fc9412b79ca7ecbcd9dc8134d694ae234029610d4ce3bdbdf96034d38cde01e6ac795cb7294ab1e65f2a5f4414234e68d25bcc4b8a9c41b684189148721cd203fffdb17e83a0b8b116d10f0403c298e609976ca50ca64948d67956880ba5676114e6027aff5b31a87367e40c3c65305d4cbcb72b144bb9d53b053165b9cc80e511573ecea66365958aeab788015b29379f9d99232c190d49044b12ac949e72a1f4274345590588c34af99e6b5a0b8471e48e5d4f295b5d540e807192147c1ef223a85009efb6a9ee8981ee25a408e202651bb6b43413e9b6d6f543dfc2a1ddeaf8a106be6ffb5607b57c0d77dbd00e7c4055052e6b97f928a149173a460846cb345a96c8d0421c5a1ab47dcd6c777c5feb601b501b8c40dd2a6cf6e779cc08872161296564db74f566e67aced29b2d2683bee754cf1e22d1d161497f7cf2a32371d1a42aed9fdaf28228cd081550c578dd89e7ccfa03cfbdae6088bb368235c24ff37b79db4214313864a30cc5c0211bd3400e47bd9cce5dcf9d4efaa38342717d2e77914c847ddbc31ece5455f39ed2e351975328ad12d36cab15dfe6eca4ca358af213320f5bb3aa1f69d44ea8fd0bdd500ef1ffe10ccdd0ea9a2136c16f28b75f3f6a9522aad81f5b3af56ae1ccbecadcc2273d33082183041fcabee205c9c4d2fd9afd28e277cb4aa6887db507605c98c56bc6ec501e6750be6d12971329056d53eb5af64e502466fc4584ae1be62ee2c5c292b5208684ef9a512eaeb2939b23a4bc8253a4c970f11627eee453015fdbd47e010244968777060000",
    ],
    [
      "ETag",
      "LiwQaX28EimMBa7S91SnAw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-104-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "df",
      "6f",
      "82",
      "30107ee7af20dde34622cb946d890fd3988dcd18653359b61853f16038e0587bb810c3ff6e5b407da1fd7e5cefeee360d936fb4df22d7bb4d92689ff4a10d5550cb4d09700649992544781b90476a3dd403cd6ee6244b37c9e8efd6c1eed978bd7af37fff33a1e0e1b970c7f20e3ca775048e12881742b15fe36d86e79a3e53c03fde27a2d4c43f342ab515518cd9f7d4c9e27c1a594e1d648b3e574fa349a4e582bd5e65ca96f6d46d9e126800804e4219c072a04ee2024df6c2e7956a4e0482c4508b26da20b1b391658165c203a8a72dcde9de3f61ffa9eeb7983c1bde776fe14434e09e6ba64f9ce4e0310124f03fcd7ebb3c6cd44039b34ba2c587411d065444adaebe25b76a2eaf6b6b23ab43a371b5504722e502d23c1acd0635d1663d4bb928e824409860eb9fa5d2f09b59c555b478e40509d19020000",
    ],
    [
      "ETag",
      "pBtNnPlCImPfvUQJZKIX+g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000000000002ff1dcfc97282300000d07fc9d93a850226bdc952a12c55d014b930218d1859c256593afdf73a7d7ff07e00a194f57d3a8882d5e015cc44466bba7605d4a503b5fcb6afcb232c9cf7d89b8c78769c8b119f0ae80770291b3d2b6682c28d89e1700d4f15d1afbcb2fa3316de147ce5fc39dfe1f1900cf7dcaa6ccd6f399102384b36c59044022f917c69f23c13b89b5c37eeda4ded3fa923fd7622254861a92883719691778b1cf94df5f97e5ef251cba08abdd692605ad9c8c6b763e6d51ff7d1f4ed253493461243a2ed779f5bb0026c6a78c7fa943f662f2a422bf0df4c87b9618fabce48c73af0fb07b4a30bbf05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:41 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-105-1595717766871",
    },
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
      "8d",
      "54",
      "51",
      "6f",
      "9b",
      "30",
      "10",
      "7e",
      "cf",
      "af",
      "40",
      "ecb549485202a914ad514ab748095981b46aa709197350b704536c3a5555fefb6c20092cd5d61784efeefbeebb3bfbde3b8aa23e9334542f143520f14b01f9db97271aa867d2031cc5d2a33f987af0b8346feedd2c1a0d1fee6ff5e770369d5651a44433b4cd12e8325ae418d8c5c6edc5392d329453da1584dd81a67707fa44370686311e9bc6a0023348a225499f25c523e719bbe8f7f7427a31a571022823ac87e9f660efbf0efb594e9f0073d66fe7ed8b54acff9fcc5f138a1127349d6edc4a45c120f7618b4822751ce16170d9e6ef11b4edc522fa95604018d322e5525b4583691a91b8c84b72c1f42e8cc25c8a3e1c1b06d5b596d6dc53304d8a6deaa7680b674a8838f2f95b06cab5b35e290bfb7aedac66de626dfbeefcbbb59af5e6ebe56665bbcadd77cbb1148e82044aac32552ecb932d0ea5a2325b088c93b4d4e4496f4389f0d68d5c7c30c403852411aa18d461bea18dd1c0d4264114183832477a106910046660e868146878720ee76100a8c9502aabf028a529840618c3d0f00d40a17f3e84891f0856f1096134c2da508f34b546ef0eb5fcce09872bc232ca48dd64f5ce597896ef391b7b3ef3ac66dd112a127e55296f57dd2a878b063595feab25278ab29c5021aa1ce7c2f62c6736f716b70d19e26e2d2146f8cd7d91b72b420983231ae562561cf2150de560547bb6b2ae8ee0f2a6fcd8073111f1f3a0f3588e0894f32f6b39997f3b8f272e56ab15d56c2aabea7acec2fea6369cbb8f696e51527cc0f35a9bd54c74eb517498b5b83a7ffffdea",
      "3472a8e2b1d6f2d49b8de5dc4b6ce9931e0722c821c5c7ac9fb8ba1258b93fb38c44fc7e334888580e07018c0bb37846981dd3e31caa4745aad6d784e6783036b53da100e6fc34c23486fb8893ed2073c11652be6f46b525aa4eee5a928a869c1226c3c543b0eb29ee3abbce1f4f6732b4e4050000",
    ],
    [
      "ETag",
      "5Z85bhL8QYSpf32ZYV5kdA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-105-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ffc554d16e8230147de72b4cf7aa89c4016e890fb8b98d4499437c5816633ab8381c50d6961967fcf7b50595972d2433d90bedbde7dc1e7adbd39dd66aa1f7380bd1750bbdc6ab8f02e8f66205fc494e3c6045c29918729231406dc9068e57923dd9385ff1d49e85eeb0e73e1bbd4d4abde9663028592c7883140bde4e44228e62484226e21715b7aabcc2329c825c31204991664b15b64f30dfe60a9ef99ee3ded79194840a71e7e3b13d1c8f5005eddb3f8b8498e3a55af26f126a5c6895185a93570f22a0900570da754ec91a02eea8f6329ce6097418296800ac12918525bca2a4c83125a423521dbd6b7474e3cab074cb32cdbea51ff80909308f49264be63374fc014e384e3cb2913d46667908b40ccb961f7a81a2da29d45b24a04f591c87e898dbb77f213aae6f5ed6b8d56ca1d52a1bab8a56457102cb7f521767f286c5156fa65ddd933389e39414196f287d377eb4cfb8716187a69bbeb5fdd1b96419176668a8eb3b93d1ccb727d31fc5c5777132c170cb814d29112663a0aca5772ffb866576d1c1aa37445a914ba7725a804a07583c590f3117b908270cb4bdf60d13c37e961e050000",
    ],
    [
      "ETag",
      "MwIziPASdNB3NY53wmrRPw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `stamp` > ? LIMIT 1",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-106-1595717766871",
    },
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
      "ad",
      "94",
      "5b",
      "73",
      "9a",
      "40",
      "14",
      "c7",
      "dffd140c7d6967a22ca880ce38a96348cb54d12026935e461758cc36c01276499bc9f8ddbb0b5e7062db4ca76f7a2efff3db7338e7b92149f23d4e43b92fc93e5e3f14287f7af39df8f299f02006d7c263c7b3e87232fca984aeea5c5f7dbabd75efc97030a8a270994d6192c5a84949910788f617f3d63a27450673429a5cb0a902bda9767b5d43350c5d370db54aa6288ec638bd1712778c65b4af283b90d69a90758c6086692b20c9deae3c6a4a9693ef28605439aeabf05254f94be5f398049061920e16f38aa2a0285fa204e258701cd243fffdb17e0bc3a4b5e6d18f38403008489132c156c904248df0bac84b71aef4cc8ddc5c42efffd60cf2dc1a5b234f1a4d178ef776051321b77a27412a2d9739a245cca44b773a915619af7e0729a22be9e6a3e55adc929308c76889c3953490cea5a17321492bca38ee4afa5a00d046dc3ab627b62755bd2e4b8788329c96801ef46354c3e2de6d57ed1313dd4b0811c838cb366c69001daa26e8f9916f0491d9eefa1140be6ffa4617b67d10f43aa813fa08d61598a85de5c394a4a0db016d13441d60f821344c004353f723a3ddd160b71b6a3dc3347ddd30e5adc266ff9e1f3966e802d38c50bcedba7ce3da9eb5f4dc85331a7a56fded11e42dbda8e88f5f7ef424c69b54a7fd535b5e106539261caa9cafed78963b1c79f6750d837f6c63b486c1d3fc417c6e118c293a64c31c2688a17c4242311c79369ddb9e3d7586e38342f9fdcc769194877dd9c31ede5457f39eb2e3515753a8ac0253efc835dfe6eca4ca358c8b13328f5bb3ac1e69344ea8fd0b9d674facb9379cccfe03a10634d0041abf07",
      "9eaaf5d5765fedb400009f7f03befdf5ad512b29f39bb20596af16967b2b724b9ff0b82842394a8303c42b964a2456eed7dc4c1ebf3b602285dfb03d005f7f86f98207f4503ec851b5ee38a98654099abac6976a27c81373f632a2a7f676112f8e98a8851294b25d33aa63567572738454d470ca3411ced7d3b19d0f257c63d3f8058087d8e58b060000",
    ],
    [
      "ETag",
      "IlPfFMAx/dR1NVQKYYRkoA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-106-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "df",
      "4f",
      "83",
      "30",
      "10",
      "7e",
      "e7",
      "af",
      "20f55149866ea0267b7066d165cba2e8f4c190a5b01bb2418fb545b22cfcefb605365e68bf1fd7bbfb3859b64df629db90479b44697228811faf1290effa1280283329d4512013406eb41b244db47b565e4770987fcd87fe1d0b826f96ec8755351e372e11ff424e95efa490c2db14b28d50f8c760bbe58dc6680efac5f59a9b86e6855693c7c268b3e5e7f4651af4a51c37465aae168ba7c9624a5aa93667a8beb519658751005be0c062b80c5470dc412c67667341f322034760c963106d135dd8c809c7b2a01cd15194e30e3cc71d3d8c7cd7f73defde773b7f86319529325db2fa20e701244a9a0558e9f549e326bc814d1a5d1664db0ba81f9192fe74f12d3953757b0bad0e85976693a304f1c6512d23c0ac30205d16cfa877953a0ac94b30744cd5ef7a4d65cb59b5f50fb9a5c45b19020000",
    ],
    [
      "ETag",
      "Iu+beqKVK473nRRWngk4ww==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00",
      "d0",
      "7fe9b333dc2b7ba382e090413308e3a961d0141c96a654b92cfbf7999d3f383fa06e1a3a4d448ddf948357b0d686bb6ff6f178403a6ebd45deef5d135e1b56a18269399666943113c7be9e96b918b3b8579186fc52500bdeda82c3ce7155ebf99bcfa7ce7854e76dc095e2d367c230226fa179f1d9760ec7e20133cb20dbc762881a7e11f3040dcb438caf47bb3b15b6e475e98c2f83bcf04aebf261cdb348a0f7cd41ab6e1f194e480ac3112533bd918d05ea20605004d02daf44cd7d3acd1ad801ba885ed289f4cf9969bbee0efc37895a057d5e11ad2595e0f70f866ed23d05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:43 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-107-1595717766871",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d54ef6f9b3010fd9ebf02b18f6b7eb521904ad11aa56c414bc84a48ab699a903107754b30c5265554e57f9f0d2481a5dafa0deeeebd7bf7cef65b4b51d4679204eab5a2fa247ac921db7d7aa2be7a2133c0512433c1ecfb24e04fb31db58c6878f79cbf7e7edd46e37159450a34439b348636a37986815daf579d28a3798a324adb82b0ddefe9edbe36d2f4beae0f8786de2fc10ce2704e926749f1c879caaebbdd83904e446914034a09eb60ba39c6bbdbcb6e9ad127c09c759b7dbba215ebfea7f3979862c4094dc6eb55a922679079b04124963a4ef0c0bf69f27708da742251bd251810c6344fb8d456d2609a8424cab3825c30bd89a00817a28fbfb580ba32e7e6d455308df34de2256803174a8038f2f82e05e5abb35c2896fd75e92c26aeb5b4bdd574662e269de972be5ed82be561663aa6c2911f438155c6ca4df1678b9f4251d12d00c64952687265b6a644642b23ad779678a49024421583aaccd37b43d4377a233ff4751c1a579a1ff6c0f70d5fd7d095dfc3a3010c021f509da15056e251228c8200c2008d3c511f7a831160cf07ade7f587a3911e06030d19a056e8fd7196d78c70b8252ca58c5426ab0f8ee59a9eebacede9c435eb7387288ff96da9bc3975631c2e0caa2bfd9725678ad28c5021aa58a765bba63399bad67d4d86385b738810dead5ee4e90a51cce0844699d815876c4103b918d59e2cccdb13b838293f0e454c54fc3aea3c8d230ae5fe8b59cef6dfece38a83d5b0a2dc4d195557ae63d9dfd45a72ff3ecd3d8af37778b655584d855b8fc261d6e06afdfdf5bb55eba18acb5ac953efd6a6f353628b9ccc38104206093e75fdc0d195c032fd91c748d41f5e0609118fc35100e3222cae1166a7f63883f25291d2fa8ad0185e6997bd03a10066fcbc626868878ab3d741f6820d24fc6046f94a944eee1b92f29a9c0226cbc545b0ab2dee5bfbd61f9f699d13e4050000",
    ],
    [
      "ETag",
      "dHKAdtjHyoI8g6Qkuw+wvg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-107-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ffc554d16e8230147de72b4cf7aa89c4096e890fb8b98d449d43cc922dc674707138a0d8163762fcf7b50595972d2433d90bedbde7dc1e7adbd39dd668a08f30f1d17503bd85ab4d0634bf58017f921307581671268694240c5053b281e395643b4ea79d7f6de7cfdd97ded6de0c3ac37927b4fafd82c5bc7788b1e0ed4424e22084c867227e5571a3cc2b2cc131c8153d126571b25461f304f33c55f0cc75ecc97d158989af90c97c34b206a3212aa17df367111f73bc544bfe4d428d0bad14436bf2e6400014120f4ebb4e295983c76dd55e86e33482162319f5809522b2b08057946429a684b444aaa5b7cd96debdea9aba691a46cfd40ffc88789887249125f3193afe00271c470ef9943d46467108b4088b961f7a8182ca29545b24a0ad2c0e7d74cced9bbf10ed896b5c56b8e56ca1552a6bab8a56056104cb7f521767f28ec515afa75dde933389e3986409af297d377ab4ceb8716187ba9bbeb5dce1b964191766a8a9ebdae3e1ccb5c6d31fc5c5777132c120e7c0a69408933150d6d2db97bdae69b4d1c1aa37445a914ba7729a814a7b583c590f2117b900470cb4bdf60d83d7f8cf1e050000",
    ],
    [
      "ETag",
      "RR30yxvUW5Z8vIqB3EU3iA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `amount` > ? LIMIT 1",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-108-1595717766871",
    },
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
      "02ffad945b6f9b3014c7dff329107bd9a42581844b5229eaa296b64869d225a455b54d893107ea1630b5a15557e5bbcf865c889a6dd5b4373897fff99d63fbbc3614457d2069a01e29aa4fa2c702d8cb877beaab9fa507721449cff98d7dfb33c1e77ce43e0e2f7427e2dced3c0f06551429b3394ab2189a9c160c033f9acf5a11a3458618a54d21d8d4b55e5337fba6addbb665f56cbd4ae6108723923e4889bb3ccff851bbbd016945944631a08cf016a6c9d6de7eeab43346ef01e7bcbd5fb72d4af1f65f2a1fc714a39cd074309f55140507b68004915872ecd203ffcbbe7e8ba0a41589e8278201614c8b34976c950ca66948a28295e242e9551885b984defed60ceacc1939279e7232998fbd8f4b9448b9e527057165b160c08b3857cea6934b659989ea7788035f2a3717ced41116464312c382044b65a01c2bc3f1a9a26c2494ef85a675419847eea5eb29d5b0cbda01f09ca425a187fc186a5cc2bb1eab7be048b7125204e502661db6b0350be93dadef87be8dc35ed7f4430d7cbfe7db26eafa1aee1b60043ea0ba422e6b57f928a56960f5fa61609b6607ba6647c701d64c6c74ba9a8521d0422d04bd03c8d0d5b5c26adbcf3323399c129e514ed663576fa6aee72cbce97c7c32f49c7aef2112333dade8f73bdf6b291743aad3fe692c6f883246a8802a0fd81d7bce7478e2b9d7350c71db461021fc327b94f72d4431875d366228811cd8250de4e1a8579399ebb993f170b453282fd0d526928bb06f5bd85d4f7535ef25db3feaea142aabc4b40cb5e65b7d3ea8728de2e280ccd3daacea7b1a8d036aff4277369a0cff135fcb347e83b8fefad1a8c9ab627dacd1d4af73677a2b734b9ff44c21040629de157cc7f3918995fb3deb51c46f76954c11eb6a0bc07361164f19f35d79cca07ad824a9daad047b96611bd6465024b2fc6d445feb6c22deec2b590b1248f3cd30aabd554d72b58754d470ca34192e1ee2d81d9f97f08d55e31762e908fc76060000",
    ],
    [
      "ETag",
      "GW7YzmcGsLIqAH1EgssI2w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-108-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "df",
      "6f",
      "82",
      "30",
      "10",
      "7e",
      "e7",
      "af20ddeb48648be296f83016e24c9cd9706e0b0b31154f8602876d992186ff7d6d01e585f6fb71bdbb8fb3619ae490e45bf268924d121f4b60d54d0ce25d5d7ce0652ab83c0acc39905be5064163e59edaf7d9f7eb979f049f81bb74aaa03c1c8ea7c9a471f1e817322a7d678924de25906eb9c43f1a9b2dafb59c66a05e5caf996ea85f683551155a9b2d3ebca9e7f7a50cb75a5aace6f32777ee9156aaf519ca6fad47d9e3c6871d30c823b80e5430dc4324667a734eb322058b63c922e06d1355d8c831c3b2a00cd19294650fc6963d7c183ab6e38c4663c7eefc2946542498ab92d5925c06102868eae349ad4f1a37610d6cd2e8b220bb5e40fd88a4f4a78aefc885aadb5b687428bc36732b01fc8da15c86835e6140ba2c9e51ed2a54148295a0e988cadff5928896336ae31fbba9a16119020000",
    ],
    [
      "ETag",
      "G13mXMWRiZVZBS7yZukkqw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "02ff1dcfdb6e82301800e077e9b53178e0d0dd091932903210087ad340f70382d8728a80d9bbcfec7b83ef8552c6a0efe9c06b78a00f34a75bbc666b876bfac66711a8e5728a71720a0dfb82799158d1f8a509d1068942fca2cc941f6fe78f79a036ea594012b6ea3849a40fa5a377b59a7bde2dd76ca040491e52179e98c698cb6ebd8d8519b0798e651e871af90c1e2e3492e3546ac5a6a6fd26069b4d382b95d6c9878bb9a997c6369fc74c5bee5aa096b8e281a5d7bd75808e58c2da2bbee714645f156164d8d3c00b1aa1158249dc3ae8e9ed3ddbc918afd07f930eb380f75587b4830efdfe01c3a60ba205010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:45 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-109-1595717766871",
    },
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
      "8d",
      "54516f9b30107ecfaf40ecb509d09084548ad62ca51d5a423620ada66942c618ea1430c1a65357e5bfcf0692c01a6d7d40c277f77df7dd9d7daf3d49929f7016ca57921ce07857a2e2e5c39604f285f0200662e1d96d94ddefecd3972db2b6dbbb444fefcb553e9fcdea285ca12948f304f529290b88e8d5c61dc40529735010d2e7847d4d9df6b5d17434d12693f1d898683598a2245ae2ec49503c3296d32b45390819c484c4090239a60348d2a35d79be54f2826c116454e9e655782aaafc27f3c78440c030c9661bb756515254f8280538113a4ef030b8eef20f304807318f7ec6100108499931a1ada681248b705c161539677ae5466eae441f8f2d83ec9a4b73e1499024659af91948d1851402067cf69223e9d659af24cbbe5d3babb967ad6ddf5d7c3657f3c162bddcac6c577af86c3aa6c44090a00a2bcda4ebea64f343a5a8ca1622ca705669f284b7a5847b9b465a678678a410245c15454d983f51c74033d4691005131819c35110a928088c603202c34085531de96180409ba15256e34146325557870654813f3534e0eb632df20343bff4f91786408d422d0ae406bd3fd6f2abc00cdd609a138a9b26cb0f8ee599bee76cecc5dc33db7547a04cd84dadbc5b75a71cc61bd456faaf96bc519417987051d5382ddb339df9c2b3ee5b32f8dd5aa218c01777276e5704128a4e6850f0593154ac48280623dbf3957973025737e5eb2188f2881f479da77278a0987f55cb9bf977f378fc62755a51cfa6b6caaee758f69ddc72eecfd3dc83a43cc3f3dc98e59c77eb91779876b87a7ffffdecb572c8fcb136f2e46f1bd3f92eb0954f781c14a10265f094f51d5757006bf77b96118f3f6c0601e1cbe12880326ee6cf08d2537a58a0fa51e1baf50da1311e0d55fd40c881053b1331350e116fb683c8855294b14333ea2d517772df9154b6e4543011ce1f82dd4c71dfdbf7fe000a9068",
      "c2e4050000",
    ],
    [
      "ETag",
      "qU/qznBKjeIjjGl4mVuMpA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-109-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffc554d16e8230147de72b4cf72a89240a73c91e74638e8439a7986c598ca970411c50d61617b3f8ef6b0b2a2f2e2433d90bedbde7dc1e7adbd36fadd5421f7116a09b165ac5d16701747715017f919329b022e14c0c39c918a0b66403c79164dbe9886dbf5ead49bfbf7db6c7c59bfbb871a3dbdb92c5fc35a458f0be4524e230862460227e5771abca2b2cc329c8157d921469b65461fb04f35daee0993775c6a33a92924021e3b9eb0e86ae8d2a68df3e2f12608e976ac9bf49a871a1556268435653088142e6c369d739251bf0b9a3dacb709a27a03352501f5825220b4b38a2a4c83125441729dde8f475a3d7ef59866599e6b5651cf809f1318f49264be63374fc014e384ea6e44bf61899e521d0322c5b7ee8050a6ba7506f9180b6b2380ed031b76fff4274c69ed9ad71abd942ab55365615ad0ae30496ffa42ece648dc5156fa65ddd930b89e39414196f28fde03e0f2eb8716187a69bbe1f78f6a56419176668a8eb394ff6cc1b3c4dce8a8befe26482e18e039b50224cc64059cbe874af7b96d94107abde1169452e9dca69012aed63f1643dc65ce4429c30d0f6da0f723659011e050000",
    ],
    [
      "ETag",
      "EmGsvwX7P99vOENuYLHjLg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `id` < ? LIMIT 1",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-110-1595717766871",
    },
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
      "ffc594df739a4010c7dffd2b18fad2ce548528a0997152c790865631514c26d376f43816720970840333998cff7bef001527b6cd5bdf607f7cf7b37b77fbda9024f991c49e7c2ac92e099e72485f3e3c5057fe2c3c90a140784cf5f2fbf3c3b7ebc7e1f33a9a22d5be584cee86834119458a6c86a2248426a3798a819d2ee6ad20a57982524a9b5cb0a9aa4a53d5fa9aa11a86aef70cb54c6610fa63123f0a89fb2c4bd869bbbd056905940621a084b016a6d1cede5e9fb493943e00ce58fbb06e9b9762ed7f543e0b294619a1f160312f297206e912224442c1b14ff7dc2f87fa2d82a256c0a3d70403c298e67126d84a194c639f04795a8873a5576ee4e6027af75b33c873736c8e1c69345dd8cec7158a84dcea938498b45ca6c0f230932e66d389b44a78f57bc480ada4db4b7366724b4a7d12c292782b69209d4943fb5c9256e2ef67ae281dcc4d636b62395239e8a2ae072c237141e72037841a13f75623b58e1ce74e4288a08c8354614b43d191da53faaeef1ad8ef7534d757c0757baea1a18eabe07e17ba9e0ba8ae9089da653e8a69dcd7744f455a4f457dd041f730560cf05da5a761d557ba7eb703bac1c5e54a61b3ebe73925199c13965046aa91cbb733cb3197ce6c618f868e59efdd477c9ee725fd61e7072d657c4875dabf8de50d519212caa18ac3b56cc79c0d478e7553c3e0376d0c01c22ff32771d77c1432d867a3144590413aa19e381cf96a3ab71c6b6a0fc77b85e2f25c6d23190ffbb183ddf75457735e92c3a32e4fa1b40a4cbd2bd77c9bcf47556e50981f91595766593dd0681c51fbaf74da1ff0aaaf5f8d9ab8ccd74685255f2fccd99dc82d7cc233031f5288f1bedc3b9e8e482cddef598b3c7ebba3440a5f533b009671337fc698edcbe314ca474da2aad942b0a7eb4aef642bc813d3ec6dc489be2bf9664f895a10419c6d8751eeab72929b03a4bc8653a48970fe086dcbfe5ac037368ddf39dd52f06e060000",
    ],
    [
      "ETag",
      "E1HKwjJQkAwvmOa1NFUMYA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-110-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff4d51df6f8230107ee7af20ddebc82446714b7cd08d6c2ec438a64f0b31150e8602876dd9420cffbb6d01e585f6fb71bdbb8f8b619ae49416117931c9214dce15b0fa2101f1a52e3ef02a135c1e25161cc8a37283a089729fb2c8df1610cfce4ff6e7e62de271e58c17f379ebe2e12fe454fa2e12491ca790455ce21f8dcd8ed75a4173502feef74c37d42f749aa84badadd65bf7ddf587528e9196d63bcf5b2c3d977452a3cf407e1b3dca110f3ec4c0a008e13e50c9f008a158e9cd39cdcb0c2c8e150b81774d54612b270cab9232444b52966d8f2c7bf23c716cc7994e678eddfb330ca948b15025bb6f721b40a0a0998fff6a7dd2ba096b619b469f058907010d2392d29f2a1e931bd574b7c0e851706fb6ac05f00d43b90c07bdc288f459bca2da55a82804ab40d32195bfeb23151d6734c61515000ff619020000",
    ],
    [
      "ETag",
      "kldRTnef8q/1JPDdsfu73A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "64ad0e60a1a4bb460415aa845647b26148884019123e42c04eef5ea7ef06ef07a48cf1be4feeb2e202bc813935e08aad7c69231d733cc60d7f71ac01c5e2d3cacb7a142c18f050dff6d413699846eb740319898a96a988fa1f8699c98025178bdc288dc9cecf9ce87db36f73ac2397bf4e2e5ef74b9362d28601d1c2ebc55a5e0fe70d570d1a08090b494f76dd6e9dcc98b6b03d7c2be71ea187926171299a5141f540fd17243ba22a4ace9a7d5ce263a6c69317e8f2246c631686ab57b957693958003e3565c7fba47cced626840bf0df4cee73c39f57c4d38e77e0f70fc9d9399c05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:46 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-111-1595717766871",
    },
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
      "8d54516f9b30107ecfaf40ecb5091092402a456b96d23552423a42524dd3848c31d42d608a4dabb4ca7f9f0d2481a5dafa82f0dd7ddf7d7767df7b4792e4279c06f2a524fb387a2e50befbf2487cf94278100391f0bc6da1ad7cdbf6a76f3b78afd90e79f09f5ea7934915854b34054916a32e25450e11bddcac7b514e8a0ce48474396157d3b4ae361c0f0dcd304623d3d02a304571b8c0e993a078602ca3978a7210d28b08896204324c7b902447bbf2d257b29c3c22c8a8d2ceabf05454f94fe6af31818061924e36eb4a454151eea104e058e838c103ffaacddfc320e9453cfa054304202445ca84b68a069234c4519197e49ce99d1bb9b9147d3c360cf2da5a58335782242e92d44b41822ea40030e0b15d86a41b67b594e6f6cdca594eddf9caf6d6b35b6b39edcd568bcdd25e4bf7b79663490cf8312ab1d244ba2a4f363f948aca6c01a20ca7a52657781b4ab8b76ee4fc83211e2904095745511de619ea0868a63af643df80a1a90ffd5045be6ffac610e8be0ac70334087c049a0ca5b20a0f52928ee1401f8160e0e90108bd81616a9ea9aabef800430df5bea18de51abd3fd6f29a6386ae31cd08c57593e57b67ee5a9eeb6cecd9d4b59a7587a088d975a5bc5d75ab1cc61bd454faaf969c29ca724cb8a8729c73dbb59ce9cc9d6f1b32f8dd5aa008c0ddfa59dcae10c4149dd020e7b362285f92400c46b6a74bebfa042e6fcadd2188f2885f479da77278a0987f59cbd9fcdb795c7eb15aada8665359e5b5ebccedef72c3b9ff98660be2e2039e97da2c67bc5b0fbcc3b4c5d5f9fbef77a79143e68fb59627ffd858ce4f812d7dc2e3a010e52885a7ac9fb8ba0258b93fb38c78fc613308085f0e47019471337f46909ed2c31c558f0a57adaf09cdd1c8d0fb07420eccd9798469ea8788b3ed2072a104a5ecd08c6a4b549ddcb724150d39254c84f38760d753dc77f69d3f5df1bed9e4050000",
    ],
    [
      "ETag",
      "zVcN/BV2AzycW1NRohbkwA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-111-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d1",
      "6e",
      "8230147de72b4cf7aac9c814dc121f74d38d047553344b16632a5c100794b5658b33fefbda82ca8b0bc94cf6427bef39b787def674a7d56ae83d4c3c745743ab30f8c8806eaf02e02f72320196459c892125090354976ce03890ec791f87f6371ecfe737e3d12b1e0cb62f5f56d0e9e42ce6ae21c682b7139188fd10228f89f84dc5b522afb004c72057744994c5c95285f513ccb7a982a7cec41a3d969198780a19cd6cbbdbb3fba880f6f5f3221ee678a996fc9b841a175a2186366435011f28242e9c769d52b201975baabd0cc769040d4632ea022b4464610e07946429a6843444aaa1eb7a436fddb64cdd340da36dea077e445ccc4392c892d9141d7f80138ea309f9923d46467e08340ff3961f7a81fcd229945b24a04f591c7ae898dbd77f215a23c76896b8c56ca1952a2bab8a56f96104cb7f521767b2c6e28a57d32eeec985c4714cb28457941ed8e3ee05372eec5075d30f5da77f2959c685192aea3ad6b03f75bac3e7b3e2e2bb3899a0b7e5c09e29112663a0aca55f37db2dd3b84607abde1369452e9dca69062aed62f1643d855ce47c1c31d0f6da0f5a42575a1e050000",
    ],
    [
      "ETag",
      "VEaiLzaOVV3ONXaFFyQwIg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` < ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-112-1595717766871",
    },
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
      "02ffad545f6f9b30107fcfa740ec65d39a040209a452d44569b62125a423a4d5b44d893186ba034c6dd3aaaaf2dd670349889a6dd5b437b8bbdf1fdfd9f7dc5214f527ce42f55c51031cdf17883ebdb923817a263388835866e8181866b8ec8df3d5958b17a6dd2bdecf1f47a3aa0a976806d23c416d460a0a113b5f2d3b3125450e28216d41d8d6f55e5bef0ffb966e5983816de91598a1249ae1eca7a4b8e53c67e7ddeece482726244e10c831eb4092eee3dd875e37a7e40e41cebac7ba5d21c5ba7f51be4808041c936cb45a562e0a86e81aa50027d2c7011e061f8ef93b18a49d58543f60880084a4c8b8f456d1409245382e68492e989e4550844bd3fbdf46405d4e67d389af4c162bd77fbb01a9a4dbbc530053d66b8a589170e5a3b7982b9b5ca8df0286d846b9f93cf5a62242498413b4c6e146192917cad8bd540e751be57ba1690614899933777ca56a77a91e22c671567af44190a0863391ad1beb9c18ea9e4292002e64eab2b5a50d806e6bc3200a2c18d9463f883414047660f5811168706822330c10683270a95de14146323b1c583d03e83d0402ddb6a2c8d0fba0af99b6a91b20049a65583a823d5dad19b6fbf33c52ccd125663961b86ebc7ae339fe74ed7b2b7732f6a7cdb3474074f5b2727f7cf2a32371d1a4a6db3fb5e585a39c62224c9523765c7fea8d27be73ddb021eedb0cc5003e2defe58d8b40c2d0010d28481147744e42391cf56ab1747c67e18e670786f20a5ded2a9928fbb6377b385393cd7fca8f475d4da18a4a9b03536de4b6672759ae41529ca079a8c3aa7ec4d13ac1f62fee96bee7b89ffe83bd712e06f71b8bf5d78f56835f150ba4b6a67e594dbdaf125be664c64311a2288307c5573c1f09acd2af5990a27eb7ad24442cacbd01c645583c65c80ef290a2ea61e3b41a4745680f2c7b68ee080590f21715b666ec255f6c2ca9855294f15d33aacd5575727b64a968d82961b25c3c44b79ee0b6b56dfd027a80826f78060000",
    ],
    [
      "ETag",
      "rAa34dS2ApUPNiO482u+Mw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-112-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "df",
      "6f",
      "82",
      "30",
      "10",
      "7e",
      "e7af20ddeb4886993297f8a08b716644371cd9c3424c8583e180636dd110c3ffbeb680f242fbfdb8deddc7c5304df29b16117936c9214dfe2a60f55d02e2435d3ce05526b83c4a2c38907be5064113e57eccfcb7725bcfcfa3f86b7bdaada6e962bc4e66b3d6c5c31fc8a9f45d2492384e218bb8c4df1a9b1dafb582e6a05edcef996ea85fe83451975a5b6f3e97aba53794728cb4b4f15d77be7097a4931a7d06f2dbe8518e78f02006064508b7814a864708c55a6fce695e666071ac5808bc6ba20a5b3961589594215a92b26c7b64d9e3e9d8b11d67327972ecde9f6148458a852af177e43a804041330fcf6a7dd2ba096b619b469f058907010d2392d249153f902bd574b7c0e851706bb6a805f0778672190e515bd967f1826a57a1a210ac024d8754feaed754749cd118ff18cba12719020000",
    ],
    [
      "ETag",
      "4lUKpOyAw2fWOvSG9iB5Ig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000002ff1dcfd95283301400d07fc973ed800cd0f826289a96a54416c30b93c2c5a154a08425d4f1dfed78fee0fc205e1420443e760db4e809adfc116f8beda1db596a5845bae79d839513a8c70f35fb9a22352066f64c597fa3c56c1cedabd4eadd5ba76bd389cc4b3aafedc25c1013232f9c561677544a24eb7bc3917ee0754d172fe2615f7e836d890c2f3221da549ee2c81b9a65051328a659ec0b379b0963c6605c2f6552f72dc998155a9f9895215c702a8f6da7a8867d3b2434addaf7d02c5aa9a8afa1e270ddd5fd7d708ed10681eceb01445edf679a8ef106fd37f371ede17eb5800f30a0df3f672342f105010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:48 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-113-1595717766871",
    },
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
      "8d",
      "54",
      "5d",
      "6f",
      "9b",
      "30",
      "14",
      "7dcfaf40ec716d121a02a452b446295d2325a403d26e9a26641b43dd02a6d8748aaafcf7d9401258aaad6f70ef3de79efbe1fbd65314f59964a17aa9a890c42f252eb69f9e2854cfa40773104b0f4eef75efeea64cf5d1dad8464f9fbfbbd0984da77514a9d00ca47982cf192d0b84d9e5c6ebc7052d7350507a2e08cf356d74ae8d276353334dc3b04cad06339c444b923d4b8a47ce73763918ec85f4634ae304839cb03ea2e9c13e78bd18e4057dc288b34137ef40a46283ff64fe92500438a1d974e3d52a4a868b00a7802452c7111ec2ab2e7f9f80b41f8be85782304088961997da6a1a44b388c46551910ba6376114e64af4e1b765503d7b69cf7d05d1a44cb32003293e5342c041c0b739566edcf54a5938376b7735f3176b27f0e6b7f66ad69faf979b95e3290fb7b66b2b1cc004575865aa5c557f8ef8a91455d942cc38c92a4dbef4b694086fd3c8c53b433c504812a18ae1262c308706d0ace10446d04491351ac3688821b4a03906233844131deb21c4a0cd5029abf120a3d9c49a689635b2021c0da34087400f26da85168c43645e1800414b0fd506bd3bd4f2bb201c5f139653469a26ab0feec2b703dfdd38f3996fb7eb8e4099f0eb5a79b7ea4e395c34a8adf45f2d39519417840a51d538178e6fbbb3b9bfb86fc910bbb5c431405bef456e570412868f68508859715cac682807a33ab3957d7d04579b72b70f6222e2e741e7b11c1128e75fd57232ff6e1e5f2c56a715f56c6aabeaf9eec2f9aab69cbbf769ee4152bec3f3da98d55c74eb51749875b87a7f7ffdeab572a8e2b136f2d46f1bdbfd21b1954f7a5c1ce10267e898f503ab2b81b5fb23c748c4ef2f838488e37010c0",
      "b8308b6784d8313d2a70fda848ddfa86d0322c7d3cd9130a60c14f238ce1701f71721d642e9ce28cef9b515f89ba93bb8ea4b225a782c970f1109c668abbdeaef70716578641e4050000",
    ],
    [
      "ETag",
      "emV4SPFum43O6yfj+XRb6A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-113-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ffc554d14ec230147ddf5790fa3a12a6b2a1090f43519600220c633484d4ed0ea7dd3adb4e4308ff6edb0dd88b668924beacbdf79cdbb3def67463341ae83d4e4374d9402ff1ea2307b63e5981b8579329f09c082e878ca61c90a9d820f04ab17b0f1703efd42639ef7f9d3d0e6034f09f42b7db2d583c7885044bde4646328e62202197f1b38e1b655e63294e40ad18509227e95287e60116eb4cc3337fea8d6fab4842438d8ce7c3a1db1bf651096dcd9f45422cf0522ff937093d2e8c520cbdd1972944c0200de0b0eb8cd1370884a7dbcb71921168729ab3007829a20a0b78c5689e61466953a69a9675d6b4da176dc7721cdbee38d68e4f6880454c5355329fa1fd0f082a3099d22fd563641787c08ab068f9ae1728aa9c42b54512fa54c57188f6b9adf90bd11bfbf679855bce1646a5b2b6aa6c55141358fe93ba3c93572caf783dedf29e1c491c27344f454de99be19d7bc48d4b3bd4ddf4b5ebf78f25cb8534434d5ddf1bf567be3b9afc282ebf8b83097a6b017cc2a83419076d2dab75de693b760bedac7a4595158572aa6039e87480e593358885cc45987030b6c637f71ea2241e050000",
    ],
    [
      "ETag",
      "BV9HI26lusEw3XHeMHTZdA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` < ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-114-1595717766871",
    },
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
      "ad",
      "94",
      "5d",
      "6f",
      "9b",
      "30",
      "14",
      "86eff32b10bbd9a426810021a9147551cb56b4947484b49ab629318ea16e0153dbb48aaafcf7d94012a2665b35ed0ecec77b1e9f639f9796a2a80f385ba9a78a1ae2f8b14074fdee9e84ea89f4200e62e9f97299e34b4a6c4a35d70a7bbd676f1de07834aaa27099cd409a27a8cd48412162a7f35927a6a4c80125a42d04dbba6eb6756b68d9ba6df7fb035baf92194aa209ce1ea4c41de7393bed76b7209d9890384120c7ac0349bab3779f7add9c927b0439eb1ed6ed8a52acfb97ca6709818063928de6b38aa260882e500a702239f6e9abf0e3a17e0783b4138be8270c1180901419976c950c245984e38296e242e9451885b984defd360ceacc9938e781723e9d7bc1fb2548a5dcf2830298b25850c48a842b9ffce995b2cc45f53bc0105b2ab7978eef080b25114ed002af96ca483953c6de85b28f5b2a3f0a4d33a0704cdc2b3750aa7697d55788719c958c010813d42013debab1ee91a1ee24a408e0a24c1db6b0b53ed007da308c421b4603c30a230d85e120b42d60841a1c9ac85c85083415b8ac5de5838c64080c0c2dd2ccbeb9327ab06701ddd40d18011d1846145ac84221e86b9aa5d60a9bdd799e29e6e802b39c305c375ebdf5ddc05904fedc3b1f074ef3ec11105dbda8e80f4f7e70242e9ad4a4fd535b5e11e5141301558ed8f502c71f9f07ee4d0343dcb7098a015ccf1ee58d8b40c2d03e1b5090228ee81559c9e1a8d7d3991bb8536f3cd92b9457e87a1bc944d8f71decfe4c4db5609d1f8eba9a426595987d536df8362747556e40521c9179aacdaa7ea0d13aa2f62f74b3c077bdcfff010fe46270bf41acbf7eb61afaaa5820359afa75eef8df646ee9931e1f4588a20cee2bbee1f9",
      "c8c4cafd960529e2b7db4aa68885b503605c98c553866c5f1e52543d6c9c56e3a80407fda1610eb7822291f2d71196d1db46bcda58b2164a51c6b7cda83657d5c9cd0152d1c029d364b878885e3dc14d6bd3fa05286fc2fd78060000",
    ],
    [
      "ETag",
      "KHpiHro7rr0I5b22wNyTig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-114-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "df",
      "4f",
      "83",
      "30",
      "10",
      "7e",
      "e7",
      "af",
      "20f551492471434df6b04d54123295b9446396a5c0c160c0615b34cbc2ffbeb6c0b617daefc7f5ee3e0e8669925d56c5e4d1246196fe36c0f65729880f7509803785e0f2a8b1e2406e941b044d95db6b92e7f9db6eb99d3ed12f7aed24619e7ca79349e7e2d1164a2a7d0789244e3228622ef18fc666cf6bada225a817371ba61bea177a4dec6bad798b4ff7c50d2ea512632d2d56be3f9df92ee9a5569f6bf96df52839860124c0a08ae03c50cd308748787a734ecbba008b63c322e07d1355d8c929c3a6a60cd1929465db77963d7a1839b6e38cc7f78e3df80b8ca8c8b05225ab25390d2050d022c07fb53ee9dc8475b04b63c8822417015d4624a53f553c2627aaed6f6b6340eb73b3d95e007f672897e1a057b82543167354bb0a1585600d683aa2f277bd66a2e78cd638026aef7b9219020000",
    ],
    [
      "ETag",
      "IufFCOkShADaXa+7fbjfYg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0002ff1dcf4b5283300000d0bb645d3a504d0177849f185b4aa0826e981852215081802dd1f1ee767c37783f8032c6a7a99cfb967f8207a0e8c65eb335ee2d6424a7175805130bf3b090569c7839579b0baef028da8f5da91e85cb2323be36efeed627994924acfd70cc16e13b3a5648a396c2013bf757e74c489befa8262b8a4f46bac0187d21859eb4e10ddaaec5084b7011d48778c01636a32ef16d6c34888ae4fe309a9ce9a8f1f6b5df40efb83f7e4fba3eb2be3b485795638ab773e685e4359d3b265c07abe76214750456802f4323f95436b7d91db4ed15f86f96b31af8ed8a38955c82df3fa558a52105010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:49 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-115-1595717766871",
    },
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
      "02ff8d546d6fa24010feeeaf20dcd7aad88a4813733596f64c147b8835ede5429665a05b91a5ecd28b69fcefb70ba8d03677fd0633f33cf3cccbce5b4b51d40d4902f552517d12bde490edbe3d535f3d931ee028921eba5eecf086dcaeb5477cf7e83ca4f939de44a35119450a3443db348636a37986815dae969d28a3798a324adb82b0ddebe9ed9e6eea46cf300683a1d12bc10ce27046928da478e23c6597ddee414827a2348a01a5847530dd1eedddd7f36e9ad167c09c759b79bb2215ebfe27f3f79862c4094d46ab65a922679079b04524963a4ef0c0bf6af27708da762211fd4a30208c699e70a9ada4c1340949946705b9607a1346612e441f7f6b067569cdac89ab601ae7dbc44bd016ce940071e4f15d0aca8db3982b53fb66e1ccc7ee74617bcbc90f6b3eee4c16b3d5dc5e2aeb1f9663291cf931145865a45c157fb6f8291415d902609c248526577a6b4a84b76ae4f493211e29248950c5a00af30c6d807a43cdf443dfc0e1f042f7430d7c7fe81b3abaf0356cf6a11ff880ea0c85b2128f129a1806981805d8c31766e0f5f5e1b9e76b3e78a6aee31ef2c10c42a456e8fdb1963f19e1704d584a19a99aacae9da96b79aeb3b22763d7aad71da23ce6d7a5f266d58d72b868505de9bf5af241519a112a4415e39cdaaee58c27eef4be2643ecd60c228477cb17b95d218a199cd02813b3e290cd692007a3dae3b9757d02179b7277086222e2d751e7a91c1128e75fd4f261fecd3cae58ac462bcad9945675e93a53fb56ad39f79fd3dca338ff84e7b532aba9e8d693e8306b70b5de7ffd6ed572a8e2b156f2d49f2bcb7990d8c2273d0e849041824f59bfb0ba1258babf728c44fce1324888380e47018c0bb37846989dd2e30cca4745cad65784c38169f607074201ccf8fb0843d306fd43c487eb2073c116127e68467925ca4eee1b92f29a9c0226c3c543b0ab29ee5bfbd65fb4c13d13e4050000",
    ],
    [
      "ETag",
      "oWOyckiGW0ZcPZRYpu2ckg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-115-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ffc554d14ec230147ddf5790fa0a0933b2a1890f435189880ac3c41842ca7687c36d77b41d4a0cff6edb0dd80b668924beacbdf79cdbb3def6f4dba8d5c84798f8e4a24666e17c99015b9fcc413cabc9107816092e8714130ea4aed820e85cb15f397e858be5ea7eb61c74bf56be776f9fbe389797398b7bef1053c9fb96918c8310229fcbf84dc7b522afb184c6a056f430cae264aac3fa1e16eb54c32377d81bdc9691187d8d0cc6fdbed3e97749016dea87457c2ae8542ff937093d4e8c428c2c7036840018241eec779d325c80277ababd9cc669040d8e19f3801722aa3087e70cb39432c4864c354cb3d5305be72ddbb46dcb6adbe6961fa1474588892a198fc8ee07040a1a0df153f59858f921b03ccc5bbeed05094aa7506e918456aa38f4c92eb7a9ff42ec0d5cebacc42d6613a354595955b62a082398fe93ba3c93772aaf7835ede29e1c499cc69825a2a2f44dffd139e2c6a51daa6efada71bbc792e5429aa1a2aedb7be88e5ce7e1e9a0b8fc4ef626e8ac05f02786d2641cb4b5cce659bb655b4db2b5ea152a2b0ae554c132d0698fca27eb2e143217d08883b1317e009a955dcf1e050000",
    ],
    [
      "ETag",
      "YsoxijqvKbqNExvdcK72VA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `date` < ? LIMIT 1",
        types: ["INT64", "DATE"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-116-1595717766871",
    },
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
      "a5",
      "94",
      "6d",
      "73",
      "9a",
      "40",
      "10",
      "c7",
      "df",
      "fb",
      "2918faa69da90aa202997152aba6a56334454cda693b7ac0622e018edc1d493319bf7befc0079cd836d3be837df8efef76eff6a9a628ea2d4e43f544517dbcbacb813ebeba21befa567a80a355e1f972e586f4d3199b9877cde98d114df59fef1f7abd320a17d90c25590c7546721a003b99cf1a2b4af20c5142ea42b0aeebddbadeb13ba66e9addae65ea653283381ae3f4564a5c739eb19366730bd25811b28a016598350292ececcdfb5633a3e40602ce9a87759ba2146bfea5f2694c02c431497bf359499133a00b48108e25c73e3df4df1dea37304a1a2b117d8f03404140f2944bb6522620698457392dc485d293300a7301bdfbad18d4d9683c1a78ca603a9f78af97289172cb370a62ca624181e53157cedce9b9b2cc44f56bc4802d95ab8f2377242c94443886050e974a4f3955fa93a1a22c43c461a97ccf35cd088471ec9c3b9e52b6baa81c02e3382df83ce4c750a112de4d539d2303dd494811c405ca266c616a5da45b9aed47be194496d1f1230d7cdff2cd0e327c2db0dbd00e7d4055052e6b97f92825a96d183a582d23847614eab66145268aa2d00f2d210e9adfb66cdb0e2ca46e14d6bbf33c50cc6188594618de345dbd721d6fb4f0dcf964d0f746d5b34748747458d21f9efce0485c34a94afba7b63c23ca282602aa18af33f1466e7fe03997150c71d7c6b042c1e3ec4edeb608c50cf6d988a20438d07312cae1a817d399e339d3497fbc5728aecfc5369289b06f3bd8fd99aa6ade637638ea720aa5556276db6ac5b77e7b54e512c5f91199fb8d59d50f346a47d4fe856e2887f8",
      "ff702dada5d5b596d804bfa1dc7cfda8558aa8627f6ce8d4cff391fb55e6163ee97121020a69b02ffb821724134bf74bf6a388df2e2b9922f6d50e80716116af3960fbf20185f26de3a49c4829289e91a9b7b6822291f2e71176cbda463c5b58b2162490f26d33cac55576727d809457708a34192edee2c4997c28e06bebda2f5f130d2477060000",
    ],
    [
      "ETag",
      "bXWRdrJFsN7q/Oj3fO1xBw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-116-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff4d51df6f8230107ee7af20ddeb486446d896f8a0c66d26c44d1c0fcb624cad07c301c7da32c30cfffbda02ea0bedf7e37a771f27cbb6c9775aecc9a34d7669f25301af6f12902b7d0941549914ea28b110406eb51b244db45b7c1c11e37235acef22960dfee075307b9a8cc7ad4bb02fc8a9f29d1452384e21db0b853f0db63bde6805cd41bfb8dd72d3d0bcd069b22e8db658becf9fe7e1b594e3de48cb280826d3604e3aa931e7467d1b33ca017721c4c0a1607019a8e478002617667341f332034760c51988ae892e6ce5846355528ee828ca715dcf71470f23dff57dcfbbf7ddde9f21a332c54297446b721e40a2a4598847bd3e69dd84b7b04da3cf82c457015d47a4a45f5d3c2467aae96e1bab479b4bb3692d41bc7154cb08302b0c489fc50cf5ae5247217905866654fdae9754769cd558ff70086a9919020000",
    ],
    [
      "ETag",
      "sYwoofpQ3y2Ucl0zeO0CFA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "1dcf4b7282300000d0bb642d0e9fb642776060404a1be4a364934108f22b904045707af73a7d37780f9066191d4732f50dedc03b585259db665bb7570dc9cfe960712b2f6a41ae98cf8f3ff6cd20de70eaaf48f9c47dc1bed46f2562c90dfb526bc23b920468d85352a6ba814e18261d1af9b5129c6031c4fd65d27202857ae6904a07cf7b7376acc26151b358d35ff4b421e119065de3ca1f958a4bd1b1621ca5b62ac48c3a97d58bf6a4a5a578e6bb9bddafa682a4190549eb327d3d8ead5773879be1d48bf2c1b4577d061b40ef43c5e948aae74c79d5b40df86f926919e8f36ad094530e7eff00f7b973f205010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:51 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-117-1595717766871",
    },
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
      "8d54db6e9b40107df75720fa1a1b135fb023598d6593c492c10dc689daaa42cb32904d304bd825511af9dfbb0bd8863a6af3063373ce9cb9ecbcb714457d2249a05e28aa4fa2e71cb2b72f8fd457cfa407388aa46776ddfb7d3ebe8b7f8cacd7ebfbeeed5ccfb5a7dbc9a48c22059aa16d1a439bd13cc3c02e36eb4e94d13c4519a56d41d8d675a3ad0fc60343378ce17064e82598411c2e49f224291e384fd985a6ed8574224aa318504a5807d3edc1aebd9c6b69461f0173a635f36a2215d3fe93f96b4c31e2842693cdba549133c83cd822124b1d4778e05f36f93b046d3b91887e211810c6344fb8d456d2609a8424cab3825c30bd0ba33017a20fbf3583ba3697e6cc55308df36de225680b674a8038f2f85b0aca95b3b294857db572aca9bb58d9de7a76635ad3ce6cb5dc58f65ab9bf311d53e1c88fa1c02a13e5b2f8b3c54fa1a8c81600e3242934b9d25b5322bc5523171f0cf1402149842a065598677487481f75c77ee81b381cf5067ed805df1ff9c600f5fc2e1ef7a11ff880ea0c85b2128f129a04617fe4ebbaeea111d6bd7e88069ee0ea7a7e30041f86301ef7c66a85de1d6a79cd088739612965a46ab27aef2c5cd3739d8d3d9bba66bdee10e5319f97ca9b5537cae1a24175a5ff6ac989a2342354882ac6b9b05dd399cedcc55d4d86d8ad254408bfad9fe5768528667044a34ccc8a4366d1400e46b5a796393f828b4df9b60f6222e2e741e7b11c1128e75fd47232ff661e572c56a315e56c4aabba769d857dadd69cbb8f69ee509c7fc0f35299d55474eb41749835b85a7f7ffd6ad572a8e2b156f2d4db8de97c97d8c2273d0e849041828f593fb1ba1258ba3f738c44fcfe324888380e07018c0bb37846981dd3e30cca4745cad6578482ad37ecee090530e3a7117de31071721d642ed842c2f7cd28af44d9c95d43525e9353c064b878087635c55d6bd7fa030b8393f6e4050000",
    ],
    [
      "ETag",
      "CG3z29VlZ8MwGW0QD1u/kQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-117-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d1",
      "4e",
      "83",
      "30",
      "14",
      "7de72b96fae8968c386033d9c3d4a998391de08b66592a5c100794b5453397fdbb6d611b2f1a1297f8427bef39b787def674a3b55a681967013a6fa1d7385a1540d72711f0999c38c08a843331e4246380da920d1c47927dba74bf9e576084e6ddca391bd8bdfed2fd9c0d87258bf96f9062c1db8848c4610c49c044fca2e2569557588653902bfa2429d26ca1c2f601e6eb5cc1aee7d8d39b3a92924021d3a7c964743119a30adab67f160930c70bb5e4df24d438d72a31f44e5e1d088142e6c361d73925efe0735bb597e1344fa0c348417d6095882c2ce1889222c794908e487574ddeae8c6c0b074cb32cdbea5eff809f1318f49264b9e5cb4ff014e384e1cf2297b8cccf2106819962ddff50285b553a8b748401fb2380ed03eb76dff42b4a79ed9ab71abd95cab55365615ad0ae30416ffa42ecee40d8b2bde4cbbba274712c7292932de50fa7af2303ae2c6851d9a6efa6ae48d8f25cbb83043435dcfbe1fbbdee8fef14771f19d1f4c70b1e6c01e29112663a0aca5777b7dc332bb6867d54b22adc8a553392d40a57d2c9eacdb988b5c881306da56fb06dfb36bf61e050000",
    ],
    [
      "ETag",
      "+kSzZqe5f6JqR39I48kSwQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `stamp` < ? LIMIT 1",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-118-1595717766871",
    },
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
      "0002ffad945b6f9b3014c7dff329107bd9a42631900412a9eaa2866d48b9b40969d55d941838a46e09a6b669d555fdeeb32117a2765b35ed0dcee57f7e3ec73e4f354dd36f491ae93d4d0fc8ea2e07f6f8ee8606fa91f280c02be569fb372efa39b91d6457297ec80683f13d6b9e1f1f9751a4c8e6789d2550e7346721f0de7cd658319a6798515a978275c370ea46bbdbb60ddbee741cdb28933924f190a4b74ae25a888cf79acd2d486345e92a019c11de08e97a676fde9bcd8cd11b08056f1ed66dca52bcf997ca27090db120343d9ecf4a8a9c035bc01a934471ecd3a3e0e3a17e83e0756325a3ef4908380c699e0ac556ca84348dc92a6785b8547a9246692ea077bf15833e7387eea9af9d4ee663fffd12af95dcf28386b9b65830e07922b44fd3c9485b66b2fa35e6c097dae51777ea4a0ba331496041a2a576ac9d68fdf140d3965c48dca5f63d47c80aa575e88d3c5f2b7b5d948e800b9216803e0e12a86049efa6abde2b13dd4928112c24cb266c61a30e361cd40de2c00e63c76a073182207002bb8dad0085dd16b4a200705541a8da653e4e698accd871100a0ccb0c020b43abeb20b002d3b4cd2832a00b91d196fd46fa46e179779e0746040c08cf28279baeeb9753cf7717fe743e3eedfb6ef5ec31962d1d94f487273f3892904daad2fea92d2f883246a8842ae6eb8d7d77da3ff5bd8b0a86bc6c4358e1f07176a7ae5b8c130efb6cccf01a04b0118dd470f4b3c9ccf3bdc9b83fdc2b14f7e76c1bc965d8b71decfe4c5535ff313b1c753985d2aa303b2dbde27b3e7a55e50227f92b32f71bb36e1c68d45e51fb173adf1bb933bf3f3afb0f842632511d99721ff886d933ac9ed16a2084befe067cf3f5a35629a9cb9db201d6cfe7eef44ae5163ee599420c0cd2700ff18647a5124bf75b76a68cdf2e30952277d80e403e7f41e4030ff9be7cc8a07cee645d0ea914746cd368b7b682329189971156cbda46bc5862aa16ac2115db6694cbacece4f301525ec129d254b87c9e636ffcb980af3dd77e01",
      "d7fb41748b060000",
    ],
    [
      "ETag",
      "5TjE0zOkDpYnawpDDNvr/Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-118-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff4d51df4f8330107ee7af20f5551289d960267bd80cea125c1cba98c52c4b811b82c0b1b6a8b8f0bfdb16d8f642fbfdb8deddc7d1304df2959631b933499826871a5873958058a94b00bcce05974785250772addc2068a2dc23fff7a1c9d2c3c19dbc7b9bbfd5267c0ee3d974dab978f4090595bea34412ef53c8632ef187c666cf6bada405a817773ba61bea177a4d3495d616cb37efd10b2ea502632d2dd7be3f9bfb1ee9a5569f5bf96df528198601ec814119c179a08a61069158e8cd392daa1c2c8e358b80f74d546127270ceb8a32444b52966dbb963d9a8c1cdb71c663d7b1077f8e11152996aa64fd4a4e030814340ff047ad4f3a37611decd218b220fb8b802e2392d2b72abe2527aaed6f5b6340db73b3792380bf3094cb70d02bdc90218b7b54bb0a15856035683aa2f2773da5a2e78cd6f807fa8196a619020000",
    ],
    [
      "ETag",
      "5LxFyjiqq89WEYzQYbMbdA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0002ff1dcf4b7282300000d0bb646d1dc1a2d21d587e52f98810609309212ac2408050c04eef5ea63778ef07604268df23de94b4061f60c6a2bc266bbb39a8824f42cd4cd5b49e333826323e6cabe849bff1cd3db6817e81ae2b31fea6b7c90e9d1d88b2215502d1fa2c7a7439695f646f6e04d94fa3d6c1300f7237f31e30d6f93dd81f4b167335a951db2b6c7c7f4de56d50e1e86d82b361c7169264c34badbec3d0662e4155ceafa6d658cc6b76931336fac9f023e755e58f72201e9faef370f7c3e7d446221316262c8892856005e8c48a8ef6a858665b499657e0bf89f8cce8725529ee68077eff00adf534c105010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:52 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-119-1595717766871",
    },
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
      "8d",
      "54",
      "db",
      "6e",
      "9b40107df75720fa9ad82636c68e6435964352541bb7801355558596f540360196b08ba334f2bf7717b00d75d4e60d66e69c3973d979eb288afa44d28d7aa9a801899e0bc85f3f3dd2403d931ee028929ef81e19d6d39613f2f5d6fd8d745bbf7b4e5ea6d32a8a946886922c8673468b1c03bb5cbbdd28a74586724acf05e1b9a64dce357da21b9a618c466343abc00ce27041d22749f1c079c62e7bbdbd906e44691403ca08eb629a1cecbded452fcbe92360ce7aedbc3d918af5fe93f9734c31e284a6d3b55ba92818e43e2488c452c711be09aedafc5d82926e24a2b70403c298162997da2a1a4cd39044455e920ba6376114e652f4e1b761505d7361ce3d05d3b848523f45099c291bc491cf5f33506e9cd552b1ec9b95b39c79d6caf6ddf9177339ebce578bf5d27695fb2fa6632a1c0531945865aa5c957fb6f8291595d936c038494b4d9ef43694086fdd48eb9d211e28248950c5a00ef38dfe0869e3fe2408030387e3811e847d08827160e86810f4f16408c34d00a8c9502aabf028a5e938d4903100cd1f0e35c31f6afa851f683af287238c0793cd0006a0ab357a77a8e525271cae09cb28237593d57bc7f24cdf73d6f67ce699cdba4354c4fcba52deaeba550e170d6a2afd574b4e146539a14254394ecbf64c6736f7acbb860cb15b0b88107e759fe5768528667044a35ccc8a43bea41b3918d59e2dcdeb23b8dc946ffb2026227e1e741ecb118172fe652d27f36fe7f1c462b55a51cda6b2aaaee758f6adda70eedea7b94371f10ecfb636ab99e8d683e8306b7175fefefad569e450c563ade5a9dfd7a6f343624b9ff43810420e293e66fdc0ea4a60e5fec83112f1fbcb2021e2381c04302ecce21961764c8f73a81e15a95a5f138e8d8b8936de130a60ce4f2206fd",
      "517f1f71721d642e4820e5fb665457a2eae4ae25a968c82961325c3c04bb9ee2aeb3ebfc019cfa5441e4050000",
    ],
    [
      "ETag",
      "lWa7IkvtiiKGSza5N5Vqmw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-119-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ffc554d14e8330147de72b487ddd12891ba8890fdb9cba84a1632c6631cbd2c10551a0d816e762f6efb6856dbccc90b8c417da7bcfb93df4b6a7df9aaea3f7380bd0b58e5671f45100dd9c45c02772e2022b12cec490938c016a4936701c49f6c5da197f99ab79fff93d1a4cecb1eb3873637d7353b298ff0a2916bc6f1189388c210998885f54ac577985653805b9a24f9222cd962a6c1d60bec9153cf5dc91735f47521228c499d976af6f0f51056d5bc74502ccf1522df93709352eb44a0cbd91950b2150c87c38ec3aa7e40d7c3e52ed6538cd13683352501f5825220b4b38a2a4c83125a42d526dc3b86a1bddabae655896695e5ac68e9f101ff39864b2643645fb1fe084e3c4256bd96364968740cbb06cf9ae1728ac9d42bd4502fa94c57180f6b96deb17e2c8f1cc4e8d5bcd165aadb2b1aa68551827b0fc27757126af585cf166dad53d3991384e4991f186d277f663ef841b177668bae9db9e373c952ce3c20c0d75bdd17838f57ae3a7a3e2e2bb3898a0bfe1c09e28112663a0ac659c772ebb96798e76561d1069452e9dca69012aed63f1643dc45ce4429c30d0b6da0fcd5d75c51e050000",
    ],
    [
      "ETag",
      "3wNMx6bYBWkgCQLMRNNY1w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `amount` < ? LIMIT 1",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-120-1595717766871",
    },
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
      "ad",
      "94",
      "5d",
      "6f",
      "da301486eff9155676b36905124848a8547508e81689420ba155b54de0384eea368953db69d755fcf7d9091f41655b35ed2e391fef79ceb17d5e6a0068f7240db463a0f9247ac8317b7e77477ded4879b08091f2443f1ff4c9e7a7fec7fec86337f47216ff180c7a2727651429b2394cb218d739cd19c2fc783e6b448ce6196494d6a560dd68e975c3ea5ab661db9d8e631b6532c7713822e9bd92b81522e3c7cde606a411511ac518668437104db6f6e663ab99317a8791e0cdfdba4d598a37ff52f934a6080a42d393f9aca4c839660b9c401217ed6ed303ffd3be7e83c0a411c9e84782304488e6a9506ca50ca26948a29c15e252e9451aa5b980defe560cda6c381af63dd09fccc7defb254c94dcf203801c2c160cf33c16e06c3a3907cb4c56bf851cf325b8fe329c0ea585d190c4784182253801a7a0371e00b09100df725d6f23691eb9e7ae07ca6117b503cc05490b420ffa31ae7049ef7aacee8123dd4a28112824cc3a6c61eb1d68387ad70f7d1b854edbf2431dfbbee3db166cfb3aea9ad80c7c0cab0a42d52ef3614a53a3655a96df32cd005b76603a016c9b76d7318356d8453eb6c24edb46060ab4b5c26adbcf1323020f08cf2827ebb16bd753d71b2ebce97cdcef79c36aef2194331d94f4fb9defb524e490aab47f1acb2ba28c112aa18a0376c7de70daeb7bee550543deb6118e207a9e3da8fb16c298e35d366430c102b3731aa8c3d12e2633d77327e3de68a7505ca08b4d2497615fb7b0bb9eaa6ade73b67fd4e529945685d931b58a6f757450e50ac6f90199c7b55933f6346a07d4fe85ee6c34e9fd27be8665fe0671fdf5bd5691d7e4fa58a36997f3e1f446e5163ee599e210339ca25dc1373c1f9558badfb21e65fc6657a914b9aeb6005c48b37cca88efca2386cb874d",
      "92b2dd52d0b1db8ededa08ca44265e4774edf626e2d5be52b5708253b11946b9b7ca49aef690f20a4e91a6c2e5431cbbe3cf057c6d55fb05e3c9a33876060000",
    ],
    [
      "ETag",
      "gzq0OGwC+CLTrYoQSlxDDA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-120-1595717766871"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51df6f8230107ee7af20dde34622268a2ef1612c6673316e632359b61853e16438e0587bcca8e17f5f5b407da1fd7e5cefeee368d936fb498b98ddda6c9d26bf1588fd5502f4aa2f01c82a23a98e120b09ec46bb8178a2ddee73988cb70bf29f46ee757cc83e3ef3a1bf9b4c1a978cbe21e7ca775448e14d0a592c15fe32d86e79a3153c07fde26a254c43f342abd1be34da6cf13e7d980697528eb19116e17c7ee7cfa7ac956a732ed5b736a36c711dc0060414119c072a056e21a299d95cf2bcccc09158890864db4417367222b02ab9407414e5b8fd9ee30ec603cff5bce170e4b99d3fc388538a852e09dfd8690042e259803b69626bf2110d6cd2e8b2609b8b802e2352d29f2eeeb31355b7b7a5d5a1e5b999bf27902f02d53212cc0a3dd665718f7a57d25190a8c0d01157bfeb31a596b36aeb1f340952bf19020000",
    ],
    [
      "ETag",
      "1OUg9jNtBJ81+dzlXZm6Bw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
