const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1595717900961";

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
      "0000000002ff1dcf497282401400d0bbf45a2c461bb20383a080894870d850d87c06191a01094d2a778f957783f7836242a0efa38196d0a037c462515b92a543554338a41dde87d6736ce761a737e3c7b80661dc6363e4c57eaea54d5fdd9d6b6143f07ea9dd6ebb0a589e0b983705f6d4e55265be2093809fbc4bc51281959cef4ca91b8e7320d2844be3c777dd7f26576acdd551daacd25b8eb5d3218be42404b7a8281df8cc1c7c25de9e33dbc8a1f2c204aff1cefc4ac4427f909a38aa721b30d1b8c9e2ee3678ec7404317562da9c095a2098daa2833e2a5e3349d1b405fa6f46036be1753520eea043bf7f78896c3d05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:58:21 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-1-1595717900961",
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
      "546d6fa24010feeeaf20dcd756a16a9526e66a94f6bc28f600db5c2e17b2bb0e745b6429bbd8348dfffd764111cea677df60669e679e79d9796f699afe4c93b57ea5e998462f39646f5f9e18d6cf9407048a9467ec59c3e5e47bee3d717f7a6bdf59c3db87edeb685446d102cdd1268de19cb33c23c0af565e3bca589ea28cb17349786e9e9b7dab3f3007966158976609e51087739a3c2b824721527ed5e91c64b423c6a218504a799bb04d65ef6c2f3a69c69e8008de6966edc844bcf369deaf31234850968c565ea921e79005b04134562a8ee035be6eb2b729dab42319bda50410212c4f845256d210968434cab3825c32bd4ba3341792abdf9a41f7ecb93df135c2e27c930409dac099b6460205e22d05edc65d2eb49973b37417637fb674026ff2cd5e8cdb93e57cb5703cede19bedda9a40388602ab8db4ebe2cf913f85a222db1ab8a049a1c957de9a12e9ddb771f6c1002b0a45225571d8870503e3129943c3c2211e9070d8ede3d0008c8778d0475d6c10ab07bd350654672894957894b0a48b71b74b4c3320bdb515f406fd6e6099d808cc2e1e1a21c23d0383be47efaa5a5e332a604a79ca38dd37597f7067be1df8eeca998c7dbb5e7788f2584c4be5cdaa1be508d9a0bad2cf5a72a228cd2893a28a71ce1cdf76c7137f765f9321776b0e11226fde8bdaae10c51c8e6894c95909c8166cad06a33be3853d3d828b4db93b047119f1abd2792c4706aaf917b59cccbf99c7978bd56845399bd2aa7bbe3b736ef59a73f731cd3d8af30f78b67bb39eca6e3dca0ef30657ebefafdfad5a0e5d3ed5bd3cfdc7ca767f2a6ce1531e1742c82021c7acffb1ba0a58baff7d8864f4e12e28803c0d557a2ea4593e22c28fc94906e593a265e32b42f3f2a22294c04c9c460cfad621e2e436a85cb081441c5a51de88b28fbb86a4bc26a780a970f90c9cfd0c77ad5deb0fccc1eff0de",
      "050000",
    ],
    [
      "ETag",
      "AS98OCJuSjsTDGEP98GWvw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:58:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1595717900961"
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
      "5d4fc230147ddfaf20f515224bf810131e864e594444364c8c21a46c7763b8adb3ed3448f8efb6dd80bd609648e2cbda7bcfb93db9b73ddb6ab51a7a0f130f5dd7d0320c3e32a09b8b00f8b3dc4c81651167624949c200d5251b380e247b7299be98cb819dcc3674f8fa6d75ed87d92ae8f7731673571063c1db8a48c47e0891c744fca6e25a91575882639027ba24cae264a1c2fa11e69b54c1b633b5c6f76524269e42c6b3d1c8188c4c5440bbfa69110f73bc5047fe4d42ad73ad10436bb29c820f1412178e5da794acc1e5961a2fc3711a4183918cbac00a115998c30125598a29210d916ae80dbddd6b77f56eafd9ec75f43d3b222ee6214964c1cc4607794e388ea6e44b4e1875f22ba079980f7c3f09e497eea03c20017dcae2d04387dcaefe0bd11a3b9d56895bece65aa9b2b2aa18941f46b0f8277571232b2c1e7835ede2959c491cc7244b7845e9bbd19371c6c68519aa367d6b38e6b964191756a8a8eb588fa6ed188f9393e2e23b3f9a60b0e1c02694088b3150c6d29badab76b7d3447ba3de1069442e7dca69062aed62f1c31a865ce47c1c31d076da0fc534287b1c050000",
    ],
    [
      "ETag",
      "P/pVEbBSnUyrHYzI7SKUhg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:58:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
        query: "SELECT * FROM `purchases` ORDER BY RAND() LIMIT 10",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1595717900961",
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
      "53db6e9b40107df75720fad29b0df8c22552d4ba3189a81c47c5384d9ec8ee7a209b004bd825951be5dfbb0bb683952aed2333732e3b7378ea699a7e4f8bb57ea4e998a60f35549b77770ceb9f5507044a55e71acdc5fc6ae39d9ffdf6679ff8f7b3fcf1ea727a7cdc4ed106cd515e66d0e7acae08f0a3d5729056ac2e51c5585f12f6877d6be24d1ccbf14cd3b3ad16ca214be6b4b85704b74294fcc83076360629636906a8a47c4058beaf1b8f43a3acd81d10c18d4355430a71e34ddd2f19234850561caf96ad879a4315438e68a65cbc80d7f8eb21fb80a27c90cae9474a0011c2ea4228672d0d614542d3ba6ac825d3932cca726379ffd929e84b7fee9f44da47ed34bc38d76e4aa9718b38f01bed229cf9a1f6ed5a0ba78bd9fb0fda3c380f22cd321ba186640d5cd0a2918a10cea02320bbdbed047fb9cb9e42912021f5b663b163dac8724d0f27d821893b9ae0c4048c5dec4cd0089bc41bc3788d01751984d26ef1a86085ede0b13dc65e3c049bc463b0dc18dbae1bdb4334411ec1968989be453fefdff2aba2026694978cd3edeef49f6110f97114ae1627d3c8efbe3b41752666adf3c3571f3c47c805759dbeb592578eca8a3269aab952b088fc707a1205971d1b3232734811d92c1f5468129471e875387419bc6853aab3e83f567e78ad349a9eea849040050579b9da7f5c4c01dbf6bf7f2b39bd4bb902c8a0efe5b99065991dc25fc449056d9268de38de130e47ee2e730a5889d7136367b29b789574a505391462b78a36f1edbe9f0f2cd51d3b0d4c8dcbeb2f82c55963bef7dcfb03c2ec5a90ac040000",
    ],
    [
      "ETag",
      "YaLtLXy9MGzED+sJGmvXVA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:58:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1595717900961"
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
      "cd",
      "57",
      "5b",
      "8f",
      "9a40147ef75718fa2a760644a4c93ea8a55b13752db2492f31cd88a3cb16193a0cdd988dffbd3323baa6b1cd3162ba2fc09c3b1fdf1ce63cd7ea75e3479c2e8c7775631eaf7e16946fdeaca8f8a41e029a1789c8e52d63694e8d86b2a682ac94757f3afefc25b346fdf1dbced7a0bdf6ba636cad6e6e765679f440d744da3dcb955c2f639a2c72b9fea6d7f552ae7529595315315e68df522a3699960ec6a17feb07c7aa355b68d5f87e38ecf686be51aab68dbf07cf385bc609fd7edd24058f1e4889d41f29a6613018df5e9a81ac59918a53f13f0cefbae1a5e117449c2cfe7d37f42f8d9d0bb2ce4e050f07237f1a76471350067d9fd5ca5cc6239b077449394d23fa4237f9b51f6924069ad7b9cc9b503367f2ebd0bc4ca21c77ea156745463863a6149996891dcf71b1eb21e4b5f1de3a611111314b95c3fdd438a4174c9024604f8ada06463bf2f3dd7a47f53d12c6f288fdc70049d52fe5dd320ea26da302bb5e52d039e57c03b4b79a960d35451632916522682db8e9745007776cafe57b473ee5d3ac7614010c187681d9a1af35159c3c9d07193a133170cd0a31ecb52419ab44ac0d2d176837a184034d51d3ed9c0b16b45c0d56c77170956041ab85b2ab9bc92e047f21e8d63aec4568bd1a2cdcb6bd2ac182d21a4aac6b8375d63644ae5bed3684760de715352ea88346ccb6db6ea58879ff915f76139fcb2f70bd0a2d0be356a53f4668477a45ff4504ad459f245c1b57dabd70d588dd7192aee0fdab05a5ed815fe7c0a50eb495c2056d4b50bb2b6f4604ad4373cb43ad7fb72e799dbd9cfd7b1b41f3096772b2c8a99e27bcb66bec47933e53a387509389e005d5e288c8d9f8632ca46c49929cd6b6b5df14cc3aa0870f0000",
    ],
    [
      "ETag",
      "CSNXYp2MCN/8ZR6m9AN12g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:58:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
