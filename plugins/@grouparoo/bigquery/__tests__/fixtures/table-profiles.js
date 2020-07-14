const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1594749797480";

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
      "000002ff1dcf516e82300000d0bbf45b0d0537607f3674208c218248f9210dab80a65028a3e2b2bbcfecdde0fd005a554cca72ea6fac036f60a1babda936416f214d3131849a5996709b4e81da11995efdc33e0e90a31ccfc8449407181fa39816dfd1c93bdf652321a9f93898578fbe1fbe4eda23093f32d7e7365c269ce0acab503fd41784b338c1d4317d94471a29f8fa6174e1f0a9ce72e658753751d532f0525227edab45dc62bd57dbd4e8ad3437c4c27b5834cdecd6150ce6ce1ee06e54f7464ff88543a1cd7a1fb3d4256005d85db4239365fb9c192fb6bd02ffcd725a047b5e11a3231bc1ef1fdbd7b1be05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 18:03:20 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-1-1594749797480",
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
      "db6e9b40107df75720fa1adb98e08023598d6593d4958d1bc049abaa42cb32904d304bd8255514f9dfbb0bd8c67594f60d66e69c3973d979eb288afa44b248bd54d49024cf2514af9f1e69a89e490f709448cf2d9979f7fa57ebc1bee17753c70c67bafe7d321ed751a44233b4c953e8325a1618d8e5daeb25052d735450da1584dd4177301c19a6313247a661693594411a2f48f624091e38cfd965bfbf93d14b284d524039613d4c377b7bff45efe7057d04cc59ff386b5f2462fd0ff37e4e29469cd06cbcf66a0d258322800d22a954710047e1d5317b8fa04d2f11d12f0403c298961997ca6a1a4cb398246551910ba6376114e64af2feb765503d7b614f7d05d3b4dc6441863670a64488a380bfe6a05cbbaba53277ae57ee72e2cf574ee04dbfd8cb496fba5aac978ea7dc7fb15d5be1284ca1c22a63e5aafa73c44fa5a8ca1601e324ab34f9d2db5222bc4d1be7ef0c704f2149842a064d58606a17686069a3300e4d1c5be7c330d6200cadd01ca2f350c323038c2804d466a894d57894d10c9d838eb40b33b046310e0cdd4001b28c28302e2c18451760ea5aa836e8edbe96df05e130232ca78c344d56efddb96f07bebb76a613df6ed71da332e5b35af971d547e570d1a0b6d28f5a72a2282f0815a2aa71ce1ddf7627537f7ed79221766b0109c2afdeb3dcae18a50c0e68548859712896349283519dc9d29e1dc0d5a67cdb053111f173aff3508e0894f3af6a3999ff711e5f2cd6512bead9d456d5f3ddb973a3b69cdbf769ee505abec3f3d298650b63921efa555175fefefad569a550c54b6dd4a9b76bdbfd21b1954f7a5c88a1800c1f92fec7e64a60edfef71d12d1bbb32001e232ecd3332ecce20d6176488e0ba85f14a9fbde105a9a6669c31da10016fc2462a0e983",
      "5dc4c96990b9600319dfb5a23e11751fb74792ca969c0a26c3c52b709a116e3bdbce1f2a228035dd050000",
    ],
    [
      "ETag",
      "QiDSW2J8hEGtVCN7bD22XA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 18:03:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1594749797480"
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
      "6b",
      "db",
      "30",
      "10",
      "c7",
      "df",
      "fd5704ed35816673f363d00767cb5a5337e91c17022304d53abb6a65cb95e4b4a1e47f9f24bb8d5f3a0c0bf8c5d2ddf7a40fbe43776f4eaf879e684ed0f71ebaa7e9730962ff2505f5db6c42902553522f05cf25a0be89068553137db7f683e89b00b59e5c87f3701dc5a3d79977715145c9f80132ace3deb4a5ed84022352db7facddabfd56cb7106e6c698b332cbb7d6ec1f65b52facbc8a427f71d954324eacb2b80b026f16cc512d1dfa9f430856786baffc3f845d374e0d438ffc3e840404e4311cffba10fc1162e5dbf44a9c150c06929722065943ccc14a4e052f0b2c381f68d76038189e4fddb13b1d4fc7eee4ec3d9af1182bca735b8015fac02bae300bf98bc9301a7ead6a202abbcaf87b2a50d2284233435ada99d394a00fdfa1ff8f407f118ddc466cbddb388d93ada909155255a56f47af4b75223cc35dd2f54ba1ac13720a3901d1099a165b4c880029bbc173b9c545d1923d5b2e835391714e04a7a423fa8e7641656ad792fa2b587a27ec2bbaddb77dd33fbd687e2aac54bad9b7e446fecd7c157937b79fc2f577736cf3b3bd02792bb81e2212ece8189eb993f3f1a89a1266a2fce066d42833899428c1ba63ac47f21555da976026c139387f01f504e132fe070000",
    ],
    [
      "ETag",
      "UXILT3retX8KRERXTc6xBA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 18:03:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT * FROM `profiles` ORDER BY `stamp` ASC LIMIT 100 OFFSET 0",
        types: [],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1594749797480",
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
      "53",
      "5b",
      "6f",
      "9b",
      "30",
      "14",
      "7e",
      "ef",
      "af40ec6d5a02045242a56a4b533221a56103b2ad4f8d710ecc2dc1d436bda8ea7f9f0d2421ead4edd13ee7bb9cdbcb89a6e977a4dce8679a9e92fcbe06f6fce196a6fa271501817215793002ffd1c6ae1bce63effae9d7c5d770f3343d3f6fb34883e6685b1530e0b46618f8d92a1ee68cd61562940e24e16034b0c69ee33a9eebb9cec46ca11c8a6c41ca3b45f05b888a9f19c6cec630a7342f0055840f31ddeeff8d879151317a0b5870e358d59042dc7857f7734131128496e7abb8f550736037b045a4502e0ee04dfae5987d48d07698cbec078201614ceb5228672d0da66546f29a35e492e9457ecaefc6f2fed9fbd0637fe1cf12eda3368fc22b6d2d4bca48017cad85d1a51f6917d7da9a0b6960ad4de399b608ae8244b34c530be7f3d84fb4b6830de506b82065239ca0b4809e9c8c76bd0afe32a53d8522410271e8d26e5cf3145913d34bb3d4c5d9c41ea79909693a49dd31b253137b0e389b14509f4128ed168f4a5a5a2e427696d936b26c2b3b9d381976b12b296c0fb2d3d1d8410e429250ef185ef7f53c3222e092f08a72d27553ff1905897f9344abe56c9af8fdda335417e2b2757f5cf951494236a9eff6bdb6bc71543142a5a9666ec132f1a3e92c097ef46cc8255a408ef0737cafd628430587031a31b40501ec8a6ed470f46f611c2441b89c2e5aa94e4897fb9a3c574dcaf7951f5dab6813539108326050e2c378ff63b40ad886ff7d8d327b771c0a20ef632f2f175110b964981fc4318376e5c8b671dc114ecc9169ba3b420964e26d86e53abb",
      "8c3707a2b4600ba5d8b5a23d94ae534796ea9e9d06a6d2e58a2c83e5d7c6fcc9ebc91f5602efd6e3040000",
    ],
    [
      "ETag",
      "v/IEw3c77OFS9YxXBGOdxA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 18:03:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1594749797480"
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
      "ffd5995d6f1a391486eff915d1ec6db0c6f33d2b555a924c12bae4a384aada5d45919931606230b10ddd6c95ffbeb621940b5a9dd930eaf62201dbafcf19f93c3e3e1ebeb48e8ebc4736afbc5f8fbc211b3f2da97cfe654cf507fba54fd5926b653e1662aea8776cd55493b155f7ffd47f0c22fa94df965a5ffe43579fb2f3a70fefdead55aa9cd01931ba2fa665da234679a54cfb2fd73edaf4bbb13999516b91556eeea6573f2f5c6ff77a505c14fddda199a8dcd0f5c75eaf73d22bbccdd0cbf1b78d8f9854fac1b5f638b91bf4bbd7176ff5c149e32ecca232de9cf9319d575436679f2d1e485549aa54833e847a208bc53e07273737bda273fd560f645e49c1aa86bdac5893d6b95eedb37edebbe90cde6abb227aef1638eb0c8ab7da569accf6aecba07b55dc0d3a57b7200feef3beb5f1e54dc5b04f4754d27949bf26ad8514535aeaaecb8ecaf8e5b4adc45296f4155f3b713d3c9662b9205288b6e96a076d1ce7511ae5699e4699ffaae6a2249a89b99df0f1cedbbad74213de179f6d82f4f05aeec9757b9d305f57c21bede4d0dd0532432b37dbdb76bd1c7f4757484681d2f754ae045340359daee5fe6ff46fb764a81433e0dc2bc2a10f85631444290a339406c0295a2ea1d647842ba8b686d920ce11863e6ee0077edb0fda3e34a418c5991fc739cea322df99b3f976dfdab100e609fab4a7a4641c8c546133044c5a52a3c5ff01a673735682710ae210e1284111460178c11ba2a48ed93c4261521728684c1d504964903a205021d0f985a49a72b0582c4b513e02e5e3f1461f34ce15c628339b1efb0887d14f93a8922443d0406db1824e7058a521ce0f8915746d3b33a20934a7094dd548c80aa827e5eb84b069ae701ea2dc9c80bef983eeff1af16f461a999de0d7a50a1a58475586b3f09054c540e73d26a150bd1793b9d2a60684c9f974a38f9a46ca9e80895d4594e73f36",
      "fbd4319b05f6b1eb42058dab832af7a3f49050419ff68cce19507a5712cea00456caa9e3c6739429ce71884d5d658af49fe7ec0b52935ab3ba444183ba262ac7072dd253a0f34bcac7504a7ee7147ce79b3c5a71d2345099bdf365c8501543e3f3e3cf3c3f45e074b3a5091a504b13f6d3f4a0153a746d2fa8d4e01bdfe972c8b486d6e7a553a78d6728737804716cb294ada31a483b0da5a8cc5c53a3da5041e3eaa0c24978d0fa1c5a52f49692530aad8e4ea4f84c39f496c8876b79d6f8adcf9e7a718e0c5a11f456d4d0c157479b98ed00bea46eb18246d66115c4fe410b740cbd4f9c09a927cf4071b746815e312bce9b462ab2671f464964aa5d2852ff83f23cc87d14d77d93000eaa432a0c93ef97e7e6fffdd7d7ec27cfe68e7e2b454995a2eed5fde67dfb540c4f850da1b63f01d8f570dd252927f492e94d5feba5f52ff22c05f1351d0000",
    ],
    [
      "ETag",
      "RZtYT4eq9PcttHzevW8FqQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 18:03:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00000002ff1dcfe17243300000e077c9efb66728b57f13e63486cc8ed33f2e93d4c250098addde7dbd7d6ff0fd0052964cca62ec1bd68167b012d53a9407d49f6ce54ed305bb64bf4c5087ae60e2bd4b0c940e88c127998dd8b789b070adb8bcede150ba6d3c247950a8dfe79c7f4145a8b1f7b95f3518faa2374b8ff4bda10bae7f38dca732c1b88b66be1da32b3bcf2197a136c8b872a6d4bfd3825fbacb3598c3a6b169e605b687de3c6c6c2f2e3597388960b16809ca1c8b567e3b6cb596cea7f6756c61b999f564d00ad11cec005b6e5c3059f0c74c3b5ad60efc378b71bdb1c7d566e49102bf7f2f09749205010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 18:03:22 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-3-1594749797480",
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
      "9b",
      "30",
      "10",
      "fd",
      "9e",
      "5f",
      "81",
      "d8d726908414a8146d514ad74c09d980b49aa609d9c650b7802936ada22aff7d3690842c55b76f70f7debb7777b6df7a8aa23e913c52af141592e4b9c2e5f6d32385ea85cc600e129979bd1c63f42d08b427f0003dbc8d1e6d2b9b4da70d8ad46c06b222c57d46ab126176b5f1074949ab029494f685607fdc1f4e6cc3346cd3360d4b6fa80ca7f192e44f52e081f3825d69dadec620a134493128081b209a1de2dacb482b4afa881167da69554d1462da87753fa714014e683eddf88d878ae132c41920a974712447f0cba9fa80806c9008f40b41182044ab9c4b678d0ca2794c92aaacc585d29b088a706df9f0db09a8beb374e68182685a657998830c5f2811e020e4db022b37de7aa52cdc9bb5b79a058bb51bfaf35b67351bccd7cbcdcaf595fb5bc773140e608a6bae3255bed47faef8a91dd5d522cc38c96b4f81cc769c886c3bc6c53b0b3c484811e18ae116169afa25185aba0d6368a2d81a4f60ac63082d684ec018eac836b011410cba0ab5b3860f729a0b2cd0adc9288c6c330a0d0b18a185463034858a0187f11021a0b6ecdda197d792707c4d5841196987acde7b8bc009036fe3ce6781d3ed3b0655caaf1be7a75d9fb4c3c580ba4e3f1ac999a3a2245498aad7b97003c79bcd83c55dc786385b4b9c00b4f59fe5e98a41caf0910d4ab12b8ecb158de4625477b672ae8fe4faa47cdf839840fc3af83cb6238072ff752f67fb3fad13888375328a66374d54f5036fe1",
      "7e553bc9ddfb327720added17969c3728431498ff3aaa57a7f7ffdee754aa8e2a6b6eed41f1bc7fb29b9754e663c1ce312e7e858f43f4eae2436e97fbf4302bd7f162441bc0c87f28c8bb0b843881d8ba31237378a34736f052d7d64ebd65e50104b7e86180f8de11e71f634c85a38c339df8fa279229a39ee4e2c551d3b354dc2c52d70db15ee7abbde1fc705b092dd050000",
    ],
    [
      "ETag",
      "w63ecJTT/kahbReydj98mA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 18:03:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1594749797480"
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
      "4e",
      "e3301086ef798aca1c6925ca064257e2d02e65b752684b1b24245455269e04b34eecb59d5615eabbafed049a0b28129572893df3cff8536664cf9bd7e9a0bf3427e867073dd3f45f0172779282beb79b05a882696516c17305a86ba341e3d44627290d1ec798f46f8a17c14ee7dbdbd3fb6d7a7d5d46a9f805326ce2de8c65ec840223cad84fceee547ea7e538037b62cc5991e56b67760fb2de09272fa3c564fabbae649c3865fa1086c351384695b4ef7e0e2158e3b53bf27b08b7aebc0a865ef9f302129090c770f86b21f92bc47ae2caab702618f4142f640caa82d8c4524e252f04969cf78cabf7a3d7bf18f8813f0806817f75f61ecd788c35e5b94d7858a20fbce61ab305dfda0aa3fe79d90359da65c5df4b81925a13ea1532d2c66653823e7cfbee1781936974e9d762abddcaab6536a626542a5db6be19bd6ad591f00cb749373785b256c829e404642b682ad69810094ab583e76a8d8568c81ecd66e1b1c838279253d2127d43dba032bd6948bd0d67c323be2be6b96f7aa76f86d1f85858a5cd63df901b4deec6cb687837ff146ebeabc3333fda695073c9cd1051e04647ffccbfba082ecb296127ca2f6e478db69348cb029c3bc66624ffa1daf812cc14787bef3f0ebdf1a2fe070000",
    ],
    [
      "ETag",
      "fgi7XEad1Duhpl+PwF+Qwg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 18:03:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT * FROM `profiles` WHERE `stamp` >= ? ORDER BY `stamp` ASC LIMIT 100 OFFSET 0",
        types: ["TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-07T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-4-1594749797480",
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
      "4f",
      "a3",
      "40",
      "187defaf98b06fab6d874ba53469dcaae892f4b64035ee257618863a0a0c32831b63fadf77805ee86adc7d83ef72cef92ef3bdb600501e691a2a03a00474f55490fce5d3030b94e3d243045a951e9a1e9df562edc9492647b91f5e89f47e3e1f0d877514adb2394ab298b4392b724cf860e17556392b329433d696806da3adf62cc3342cd3328d3eac533989a3314d1f4b807b21323ee876b7323a2bc656314119e51dcc929dbdfbac75b39c3d102c78f790b52b8978f743ded3986124284b870bafd6507092df9104d1b854b14f0e832f87e81d8a92ce4a463f534c10c6ac4845a9ac86c12c8de8aac82b7089f42a8dd25c49defd360c8a678fed731f7c0697ee6c0296b2a488c6842fc1cd57dbb5c1920bc9be043f0b08753204a760e65ed82e38bbddb946de39183b13c7072a84607679e9d93ea83b5b5185840b9a56827c14c4a421437a373d74de99de0ea204410271b209bb33e10952fbd00aa2c0c4515fef05112441d00fcc1ed203882d8318614050134194dc753e4a59aa85278186612f0a55cdd43039b1b0162202fb86ae5a3ad4b015e2084681b24158efeaf99d53412e28cf18a79b2e2b37aee3db77bebb989e8f7cbb597b848a585cd4ea0f2b3f2849c82635d57ed496378ab29c3229aa9aa733f56d7774ee3bd70d1972b9c66485f08bf754ae5784624ef6d928470911249fb0b01c8e329f798eefcca6a3f11ea1da97f93692cbb01f3bb1fb9a9a68fe4b7638ea7a0ab555f19d89edf9a3c95c69f8d7c7ef225da3b87807ea79635634a8c136d4dad0f4556da0ea03d5e84008bf1f40b7fefefad56a502af28d6e042bdf16b67b5be656bed2e3",
      "9288e424c57b11ffb1b66562edfef70592d1db835026c89bb0a3978f4c50f98030df93e39cd4cf892695e20d601f1aa6ae6d0165622ede46583d7d1bf1e628945c2421a9d8b6a23e0e751fd707928a869c2aad0c97eb3f75a65795f8d6baf507e35c70dbd7050000",
    ],
    [
      "ETag",
      "in+B5l2qImM+rTdGtnhPPA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 18:03:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1594749797480"
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
      "57df4fe240107ee7af20bdc793a63f697b89c981a27287e8213e5d8c59daa1ae2edddeee1645e3ff7ebb0b280f9c5982cdbdd0ceec37f391996f87e1a5d16c5a0fb8c8ac6f4d6b82f33f15b0c5971cc42ff532025e11c1e5a3a40507eb40a141a05ca173ffbc7f3d78fada7de64fdee3f3903997e58fc7c3c3258aa777304312f7222d694f31908c4bfbb7b69b2bbf3e2bd00c54469ce9d895572c4aeded0fc7bdd3de68f36846337d34bc1e0c3add41cf5a1dbd1efc3bf914332e6eb5b585e46a3cea0f4ff7e520a8760a59544cea4b9f439101ab2f3f2e6f519631e0bc460eca6f51596e23e85e5c0c7a9de1be0ca8c818c559cd2c735c677622e6dbb29f0c2e3ae37d7367486cbd02c79d716fdfdc5ca0d9d6ba8cfbe7bdab71e7fcd288413f6f1a2b2eeb9e4e46300506450aef43ab64f41e52d1d7d3914b5e022d4e2b96c25abe2a70799c335a958851da92ae56d072c3248882244aa22076d668425324302d54c0f595f5462fa84064441fd580b482e504654b73392fd785b0a61b2374b33ef268ae8223ebcdf57af001ee0c488e0cb13f09606e88bd7b50e0f67778d2e5b2533a338c3c91a38d8021380e6d2f88edd876c3d83044b0ca347b3dd0c0896c2734047b8ee7b41cafe59836d4b5c3d875a248caae976cc4acde6e1a1b198cd5645adb5360029bd6e1a89a60210cc179aad151dd82723ddff6c2d0767d472acb30688a083725d805bb83a8e2c0b5839d4565da572d2ab7ed279f29aac4907c5031025018a2bb725e022186683259c2e3ba75e5f9ae9c51892da515f89fdffeba14d896d7c137bd066fb232edac9695173afe67caca750cd98f2913770b43709f0b6a2ac10c2b7052b7a402f5dbe7daedc09637f3ff4e9f5dd27a896387a6df772d29e3a66a49f97e3bfa5052f2f3e67de1ea2e04f04b46e53ac7412f",
      "71cb454d2d754754b550a86550d543bb5324ffd49e61b1f2355e1b7f0126a49f203f0f0000",
    ],
    [
      "ETag",
      "g3MIULx+Bzsx2wzNr0PpJw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 18:03:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "cfd17643300000d07fc973f53858c7de4a8b95aa9ab5595f1c25885a44826067ffbe9edd3fb83f20cd32c479d2b70f44c01b9853c558676bafd54d5914cb63bf89ba7cd49afede88404fe4f05670e37ce28444cb7420ce21b38513d495a97e7d6e6a490483dbb0da976083c31d1da9769cad89f4b15f25860a0b2517c75768c2b8f0fc88e88e888ced3e1f2e5d5b8e1f5549f37bbd0cb59d48b8fb56883815b97acd3493c76cd9de96f4e2c2898c163e6fe9e4b628b54202598baecc933ba924aa0cc980277bf71e6019ac009a28668827f839535f0c6305fe9b493f53f4bc9a28658881df3f3be68cdd05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 18:03:25 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-5-1594749797480",
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
      "9b",
      "30",
      "10",
      "fe",
      "9e",
      "5f81d8d736212914a814ad514ad74809590969554d1332cec1dc124c6dd3b5aaf2df670349c85275fb0677f73cf7dc8befbda369fa13c957fa85a6c7247d2e81bd7d79a4b17ea23c2050aa3c3874add73b76fbea3b0ff1f4d1be19ac2c231d0eeb2852a1395a17199c725a320cfc62b9e8a68c960562949e4ac253ebb46fb9a66dbab66b9b8e51433964c994e44f8ae0971005bfe8f5b632ba29a56906a820bc8be97a67efbd0c7a05a38f8005ef1d66edc944bcf769deaf19c548109a0f978b5a43c98145b04624532af6e0557c79c8de2568dd4d65f40bc18030a6652e94b29a06d33c2169c92a72c9f42e8dd25c49defdb60cfac29b7ae350c3342bd77994a3359c682b245024de0ad0ae83f94c9bf8d7f360360a27733f5a8c6fbcd9a83b9e4f97337fa1dddf7881a70914675061b5a17659fdf9f2a75254655b011724af3485cadb5222bd4d1b271f0c7047a148a42a0e4d58641be7a8ef186e9cc4364e9c332b4e0c886327b62d74161bd835c15cc580da0c95b21a8f729a9b768250e2c69189fb4964da861b210770641aaed9078078600ef406bdd9d5f29b11015784179493a6c9fa7d3009bd280c96fe78147aedba135466e2aa567e58f541394236a8adf4b3961c292a18a1525435ce891f7ac1681c4eee5a32e46e4d2145f86df1acb62b4119873d1a31392b016c46576a30ba3f9a79577b70b529dfb7415c46fcd8e9dc972303d5fcab5a8ee67f9827948b75d08a7a36b5555f84c1c4ffa6b79c9b8f69ee50567ec0f3d298550b1392edfb555175fefefa",
      "d969a5d0e54b6dd4e9b74b2f7850d8caa73c0124c020c7fba4ffb1b90a58bbff7d8764f4f62c2880bc0cbbf45c48b37c4398ef936306f58b2275df1b42c7b02c63b0259440268e23cecf9d6dc4d16950b9600db9d8b6a23e11751f370792ca969c0aa6c2e52bf09b116e3a9bce1fddb5bbeddd050000",
    ],
    [
      "ETag",
      "cT95xVrQxN8YbLj7H2d50g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 18:03:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1594749797480"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffc595c16ee2301086ef790ae41e17a4b20aa554ea21b46c1b6d0a2c84435521e4c693d4ad13676d870a21de7d6d272db9b48ab448b9c49ef967fc2933b267ef743ae88d66045d75d0334dfe1620766709a83f66b300593025f592f34c02ea9a68503831d1e0dd8fe7a17a5b8da6b7bffdc71b481f073fbcebeb324a462f90621db7d796b6630a8c486d3f59bb53f9ad96e114cc891167459a6dacd93dca6a975b79192efce95d5d4939b1ca741504de3898a04a3a74bf8610acf0c61ef97f08bbae9d0a865ef9f3026210904570fceb5cf05788946fcb2b719a33e8495e880864053189a59c085ee45870ded3aedea0d71f8cdca13b1a8e86eee5f94734e3115694672661b5449f78c515660bfe6e2a8cfa3fcb1e88d22e2bfe510a14d79a50af9096b6269b12f4e93b74bf09f4a7e1855b8bad766ba796d9981a532155d9fa66f4aa5527c233dc265ddf14ca5a2127901110ada069bec1840890b21d3c971b9ce70dd9e3d92c3815196744704a5aa26f691b54a6b60da9bf829977c277453ff74deff4ad174e4e85954a3ff60db9a1ff305986dec3fc4bb8feae8fcffc78a740ce05d74344821d1dfd73f77230bc28a784992837dc8c1a6526911205587784f548bea74afb62cc243807e71f2f93b4d4fe070000",
    ],
    [
      "ETag",
      "eAHBPTtkU9NDKIYCemY5+A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 18:03:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT * FROM `profiles` WHERE `stamp` >= ? ORDER BY `stamp` ASC LIMIT 100 OFFSET 0",
        types: ["TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-11T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-6-1594749797480",
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
      "00000002ff8d545b6f9b30187dcfafb0d8dbd424865c80485197a67443caad405ab5dbd4d8c430b704536c3a4555fefb0c2484ac55b78748e4bb9c73be8bbfd70600ca138dd7ca00289886cf1949b79f1e1956ce720f1128cc3dc9fc79dacf2e607f466fec7b7d11f2fbedddf5705846d1229ba34d1291266759ea133e58baad3065598252c69a12b0d96faa3db3ab774dddd4bb062c53398982098d9f72805f42247cd06e1f64b442c6c288a084f296cf3695bdfda2b593943d125ff0f6296b5b12f1f687bce711f391a02c1e2edd5243c649fa40368846b98a63f21a7f39456f51b4698532fa85fa04f93ecb62912b2b617c160734ccd2025c22bd4aa3341792abbf3583e25a136bec81cfe0ca994fc14a9614d088f015b8fd663916587121d957e0470661870cc139983b9796032eee2ad7c81d83893db53da04208e65757aee581b2b305d59a7041e342908770446a32a477df43fb9de9551039081288937dd8830efb4835a08903acfb81d1e9e100128c0dacf7500743dfec92ee1a135447103977998f621677a1d9d791a162dc0d7010181a0ed05ad5cd1e560da275b4befc05d80c943dc2aeaae7774a05b9a43c619ceebbacdc3ab6673d78ce72361e7956bdf6006591b82cd59f567e5292904daaabfda82d6f142529655254314f7be659ce68ecd937351972b9262444fed67dced72b401127c76c94a20d11249db2753e1c6531776dcf9ecf46932342b12f8b43249761df2bb1c79aea68de36391d753985d2aa78f6d472bdd174a1d4fcbbb377916e5094bd03f5b2372b1ad460136a4d55f5546da076066ab70521bc3f816efcfdf5b351a354e41bdd0b56ae97967397e716bedce39080a424f68f22fe636df3c4d2fdef0b24a30f07214f9037a1a2978f4c50f9807c7e24f753523e27ba2914ef010dd8d77bbd03a04c4cc5db08d3ac28df1c859c8b6c482c0ead288f43d9c7dd89a4ac26a748cbc3e5facfecd9d7427c63d7f8038202f171d7050000",
    ],
    [
      "ETag",
      "pOqM6uB06NiVIZ7PgsZyYQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 18:03:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1594749797480"
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
      "b5",
      "94",
      "cb",
      "4e",
      "c3",
      "30",
      "1045f7fd8a2a2ca1e2a14229128b144229a40fd2809010aa4c3c0d2e6926d893a252f1efd86e782c8284546565cfbde37b2c2b9955ad5e775e44ca9d93baf324e2d71ce4722b06ba319b00549e90d24b86a90267c77403b1d8741f6c5fdd130667c19dbb7bc5d5f5ebc17bd6774f4fd75d2a7a8639d37d2b5de97a2a20e14ad70fb6ae17baf55236079328b83d5ba8b4ccacda1b845ed70b7e5b73e4d61adcfabedbf13da7b03e76fe0e9f0aa96862ab12c8380c7a83eea68c84558ed08f2a92eae2634839c8eaf24536619c4b50aa4206aa09cbb232406738f43d77b02981a55ca2e0155316a2caf4841665e917fed00d37cde68c4a7f817337f436cd56c4e6a5ef12f6fade3874fba37f11ecfa582b58ce0c9f0298828434829fa195499c41443d3b1d95e626d05098cb08be3e5f73706dc712f38c49c486961a478dfdc376b3d56cb7daade6f1de577782112381a939703b76bef184c49200dfcc8074d6dd6badb3245023899aa880ff7235e40ccd85c8dc97640e568e989ebb97820aadf651fb04728558b9e2050000",
    ],
    [
      "ETag",
      "2+JXtoRCRVA/JdsKq2zpMA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 18:03:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "02ff1dcfd96e82401400d07f9967352022d0379681d29126959d1782c30d50916d086530fdf79a9e3f384f54500a8ce5737f870ebd215e1cb5033d905e35841fe0d355345ddae75b3e3b4e504f5a155e9732d5faf7d91ffd6611b276eface3c9b9519b87c9d2b5636fa9c13101bef9b48cd5388c67c777334b0cc33a1dcfd8985233fa7e5c6dca4cc333124bd22abc3fa941473ec78bccd301df3e4a75bcafd45337a50abef4c12dc06e95884245328f9f7d5c17c40df44861175c4606694a091876d687d0923e90457d8395a11d827568266079f39a49b2a6edd07f339ff900afab01c50413fafd03d0e3b90e05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 18:03:27 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-7-1594749797480",
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
      "54616f9b3010fd9e5f81d8d726210d0d50295aa384ae9112d212d26a9a26648c616e0153dbb4aaaafcf7da862464a9ba7d83bbf7debdbbb3fdded134fd0917b17ea9e9114e9f2b44dfbe3d92483f9319c4412a33b76432dcac4c62ce58f490dfdd1974b6c2afe3718dc28acd405e66a8cb48452162979b752fa5a42a0125a42b04bb567770e19896e9588e65da464d65284b16b87892027f382fd965bfbfb3d14b094933044acc7a90e4fb78ffe5bc5f52f2882067fde3aa7d5188f5bfacfb3d2310704c8af1665d7ba818a221ca01cea48b03398eae8ed57b18e4bd54a05f3044004252155c3aab652029129c5654890ba5771114616579ffdb0ae86b77e14e030d92acca8bb000393ad362c041c8df4aa45dfbaba536f7ae57fe7212cc575eb89edeb8cb496fba5a6c96de5a7bb8717d57e320ca90e26a63ed4afd79e2473952d562c4382e94a740665b4e44b619e3fc9305ee25a48870c550030b2d630406b6e1444964c1c41e5e448981a2c88eac0b308c0ce898c88c2304da0aca59cd07052986c874e238b6c37367e084026f85b6190fc2e4dc8a47d6c8b2ed04e80d7bbbefe595628e66989584e166c8fa833f0fdc30f037de7412b8edbe1350657c563b3feefaa81d2e06d476fad5484e1c951413614aad73ee05ae3f9906f3fb960d71b6162805f06dfd2c4f570232860e6c40c5ae38a24b12cbc5e8de64e9ce0e6475526e77202610bff63e0fed08a0dcbfeae564ffc7750271b08e4651efa68eeaebc09f7b3ff45672fbb9cc3dc8aa4f745e9ab01c6182b3c3bc9454e7efafdf9d56095ddcd4c69d7eb771fd9f92ab7232e3a3045154c043d1ff38b99258a7fffd0e09f4ee599004f132eccb332ec2e20e4176280e29aa6f14aee7de08da8635b29d9da020527e8ab04d6b8738791a642d94a382ef46513f11f51cb7",
      "4796aa961d459370710bbc6685dbceb6f301c409681bdd050000",
    ],
    [
      "ETag",
      "PoA3UO4o4DsbWmQQ0rDOiw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 18:03:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1594749797480"
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
      "ffc595516fda3010c7dff32990f70a124ca12993fa1036ba21a5d042ba874d0899f8929939b16b3baca8e2bbcf76d292974e91869497d877ff3bff943bd9f7e2f57ae8372d08fad4433b9a3d95208f1f32d00f76b3025532adcc2278a100f56d34689cd9e887fded73347bdad1f0fbf1879c8a6c387e86ece6a68a52c92fc8b1897b3196b1530a8c2863ff7476aff63badc039d81313cecabcd83ab37f96f55138791dafe68baf4d25e7c4298bc7280aa7d10cd5d2a9ff3e84608db7eec8ff43b875e3d530b4e7bb15a420a148e0fcd742f23d247aeecaab702e180c142f6502aa86d8c44ace242f05969c0f8c6b100c46e3891ff8936012f8d7c3d768c613ac292f6cc2e31abde135d798adf81f5b6134fa58f540567655f1d752a0b4d18466858c74b0d994a037dfa9ff8fc0f922bef21bb1f56ee335325b53532a95ae5adf8e5eb7ea427886bba49b9b425927e40c0a02b21334155b4c8804a5bac173b5c542b4644f97cbe852645c10c929e9887ea05d50993eb4a4de46cbf082ef8a79eedbdee92f613cbb145669f3d8b7e4c6f3bbd93a0eefeedf859befe6fccc4f8f1ad4bde466882870a36334f4afc7c1553525ec44f9cceda8d176126959827327d88ce46f541b5f8a9902efe4fd0574e01665fe070000",
    ],
    [
      "ETag",
      "QjFxLEqbiAVyZrBpg05xeg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 18:03:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query: "SELECT * FROM `profiles` ORDER BY `stamp` ASC LIMIT 4 OFFSET 0",
        types: [],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-8-1594749797480",
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
      "000002ff8d535b6f9b30147eefaf40ec6d5b022424984ad596a574454b930ec8a6eea531e6c0dc124cb1e99455fdefb32117a24edd1eed73becbb93d9d689a7e4f8b443fd5f498660f35549b37772cd6dfab08089ca908fab1993d26efeead4b449733f7fa0bb116bfb3b3b3368b36688ed7650e3dceea8a003f5d86fdac6275892bc67a92b0877ad6c8b51ddb755cc746660be590a7335adc2b829f4294fcd4307636fa1963590eb8a4bc4fd87aff6f3c0e8cb262774004378e550d29c48d57753fe48c60415971b60c5b0f3587ea16d698e6cac5019cc41f8fd9fb14affb99cc7ea4043021ac2e8472d6d21056a434abab865c323dc94ff9dd58de3f3b1f7ae8cdbc69a4bdd52e82c595b69225a53407bed216c1b917689f6eb41517d2c04a9b84536de65ff991666b8b8b8bd08bb4b67f0d61025cd0a2918d709c43474c46b79df2ff32a33d8522c10273d8a6dd3ae6185bc874e33476488a86a33835218e51ec8cf03036896b839dc480bb0c4269b7785cb002c6c3c1d81a8dd1109099a281092871101e418ab03d48dcc41eb84e3c30f52dc3f3be9e5f1515704e79c938ddf652ff1ef891771b05cbf9741279ddda535ce7e2bc757f5cf951494236a9ebf6b5b6bc705456944953cdd4fc79e4059369e47febd8902b34830c934df8a09628c53987031a57780d02aa2b96a8e1e8d78bd08ffcc57c326ba5b642badcd6685336295f975e70a3a24d4c450248a182821cc6fb1fa355c036fcef5b94d9bbd35000791d7b79b98682ca2523fc204e2a68578eae1bc75b426499aee5ec0825b0122f322c13a15dc68bf3505ab08642ec5ad19ec9b6534796ea8e9d06a6d2e58accfdf9e7c6fcc9f3c91f79bbc435e1040000",
    ],
    [
      "ETag",
      "8ZyLvd+k1H8iUL9PKc1Ozg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 18:03:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1594749797480"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ffd557df6fda30107ee7af40d96bb1e2c4816452a58536eda8f8d1512a4d9aaaca4d4ce636c4cc766851d5ffbd8e135a1e586546f3b00748eeeebbbb70f7f9723cb7da6deb81e689f5b56dddd1f44f41f8fa4b4ae48ff2664a449149a12e4b960b621d956822715aa2a76bf8249d09fa79525cc8d3a77e7ff488aec3e3e30a25e2df648115ee59494a9e53922542c9bfb4dcaef5da96e3052923d244fbd65ab95e6aed603c8bcea3e9b669c1126d1a5f0f87617f1859b5e9e5e8efc1e7940b79aba51d49ae66d3c1f8fcd01c196e3c852a2acd9a0b9f923c21bcb9f874798b938413211accc1c42d5e2e7725e84f26c3281c1f9a01e70967346938cb8a36193d93ab5dd1cf8693707668ec04cb9d47e0349c4587c616122f76d66536184557b370746994415f6f5a752eeb9edd4dc99c7092c7e47d682d39bb27b11ce8e92854de8c74042b784c36f42d1d2b73ca59b1c49cb18e5275fc0ef402d443412fe821dfdea033166349595e3a5c5f596fe92593389bb2c772405aa89aa0bc12ab79b9298435df1aa1dbf551a655e90cad37d5cbd107b888536208bd207cc5a8304493fb0a6e7f234fba6220660b43df11ce4c1f0a7ac0413de0faa0e718ba485e98469fe34c9862f708eb780180a68febd88eddb19d8e6dda52083cdff6bc0006280ab67ceabb9bd65604633e993eed098e69664ca9a81c1066d098282cfc07329da957a5319d1ccf0510750182c0312e78432cd9276c8080dbdd9750a63dd584ea2245a94f24946b98fc9c13493263302b62163f18c2d3b4c63b8df30a42e0ab430f6d005df4df0caa6ed707a68d7aa395a983a655cf85c167d2cab4b6e1024b6c3ad3982462ce786288c7f1c6c16d9a57307041a0de80b6fa989eff3dfadf0c14a99360efcb2ad3c66a56f9d0773f6495fabe79dfb8fa6bd5af4bced43e2788dee2aa4daddcea4e58d93f596e83e54fd4ea18ab7fb5dfa9ac75ad97d62beda8606d400f0000",
    ],
    [
      "ETag",
      "Ry1xt2O4XCuJtDxBBMw4UA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 18:03:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "7fe9b39a5281c0de4622e33ec40bc20b295d59b12008e5baecdf6776fee0fc004c08edfb4c349c3ec01b5830d27764e7369a01278a836544d7f1dd46a7416c6920258af8c8478682c8499aaa108fbb19475b2b37b4413e3c57aec6a6853da6ce2ec54f2d2886235b995e486e9bcb168cfc10f9f3ede64a6acc4ea50dcf99c9497a9c5d5353ef5d6a3409cc2f5f95327b431346da90d4fda55ae20932c1a7b34de3e653e6df6c45fcdad744728895ae869607651d278a351f9cd0f22338ee53df836003e8dc961dedb3f235db2bbabe01ffcd4c2c2d7d5d0d8a3bda81df3f831e8af005010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 18:03:31 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-9-1594749797480",
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
      "7df75710f6b52a2a166862b6c6d2ad5bc52d629bcd66438661a0d3228333439ba6f1bfefcc808a6bd3dd37b8f79e73cffd9af796a6e9cf388ff50b4d8f70ba29117dfbf24422fd4c7a1007a9f450eee40fd69dc36764787bfb38f8be990c82d7d1a88ac20acdc0bac8509b919242c42e56cb4e4a4959004a485b10b69d766fe89896e9588e65da460565284b66387f96048f9c17eca2dbddc9e8a484a4190205661d48d67b7bf7a5df2d28794290b3ee71d6ae48c4ba9fe6fd9a11083826f968b5ac34940cd110ad01cea48a03388e2e8fd93b18ac3ba9887ec1100108499973a9aca281244f705a52452e98de85519895e4fd6fc3a02fdd993b093448b2729d873958a3332d061c84fcad40dab5bf986b53ef7ae1cfc7c174e185cbc98d3b1f77268bd96aee2db5871bd777350ea20c29ac36d22ed59f277e9422952d468ce35c690aa4b7a14478eb364e3f18e09e429208550cd561a1659c839e6d3851125930b107c328315014d991350483c8808e89cc3842a0c9a094557890931c0ccfcf616c1961df4c50681a7d27b46dd80b8d9e60898dc470c482d4e8edbe96578a39bac2ac200cd74dd61ffc69e08681bff226e3c06dd69d8032e35795f2e3aa8fcae1a2414da59fb5e44451413111a2d438a75ee0fae34930bd6fc810bb354329806fcb8ddcae04640c1dd0808a597144e7249683d1bdf1dcbd3a80d5a6fcd8053111f16baff3508e0894f357b59cccff384f2016eba815d56c2aabbe0cfca9f74d6f38b71fd3dc83acfc80e7a536cb1626383bf44b51b5fefefadd6aa4d0c5a5d6eaf4bb95ebff9458e5931e1f2588a2",
      "1c1e92fec7e64a60e5fef73b24a277cf82048897619f9e7161163704d92139a4a8ba285cf5bd26b47be22cac1da100527e12d13786fd5dc4c9d32073a135caf9ae15d51351f5717b24a96cc85130192eaec0ab47b86d6d5b7f0051b0a710dd050000",
    ],
    [
      "ETag",
      "rt9nW7Q9tLo5KKh3JqC3Tw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 18:03:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1594749797480"
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
      "0000000002ffc595516fda3010c7dff32990f75890a04a0b4cea4368e986960608a9f63021e4c697cc9d1367b643852abefb6c272d79e914a94879897df7bff34fb9937daf4eaf87fed09ca0af3df444d3bf2588c39714d4da6c42902553522f05cf25a0be8906855313ed7a3f87cb1f17e2657d1184c170b25acbbbf9fae6a68a92f16fc8b08e7bd596b6130a8c486dffb276aff65b2dc719981363ceca2cdf59b37f92d5a1b0f2260a17c1b7a692716295e0d1f7bd993f47b574ec7f0c2158e19d3df27308bb6e9d1a869ef953080908c86338fd7521f833c46a61cb2b71563018485e8a18640d3189959c0a5e1658703ed0aec17430ba9aba63773a9e8eddc9f02d9af1182bca7393f0b841ef78c51566217f311546a3cbaa07a2b2ab8abf9502258d26342ba4a5bdc9a604bdfb8efdff042e82e8da6dc4d6bbadd3c86c4d4da890aa6a7d3b7addaa33e119ee92ae6f0a659d9053c809884ed0b4d861420448d90d9ecb1d2e8a96ecd972e99f8b8c732238251dd1f7b40b2a53fb96d47b7fe99df15dd1cf7ddb3b7de745f37361a5d28f7d4b6eb478986f22ef61f5215c7fb7a7677e7650205782eb2122c18e8ed1d09d5c8dafab296126ca2d37a3469949a44409d61d633d92bf53a57d0966129ca3f30f40d4a4c4fe070000",
    ],
    [
      "ETag",
      "4AW0OK+rwQ+NRN08PQsDEQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 18:03:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT * FROM `profiles` WHERE `stamp` >= ? ORDER BY `stamp` ASC LIMIT 4 OFFSET 0",
        types: ["TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-04T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-10-1594749797480",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d545b6f9b30187dcfafb0d8dbd424262109448aba34a51d5b2e1d9056dd458d6d0cf34a30c5a65355e5bfcf402e64adaabec17739e77c177fcf0d00b47b9604da106898450f39cd9e3efce1583b293c54a2a8f04cbe2efa37bd2c882ecf96d7ec9ecff42ff6ed7834aaa258992dd03a8d6953f03c23540c975e2bca789ea28cf3a6026ceab0a9f72c636058036b6098b0ca15340ea72cb92f107e4b998a61bbbdd3d18a388f628a52265a84aff7f6f663a79d66fc0f2552b48f69db8a49b4df263e8d394192f164b4f42a11b9a0d91d5d231617320ed901fe740cdf6268dd8a54f423231411c2f34416d22a18c29390457956822ba4676554e652f3feb766d03c7b6a4f7cf0115cb88b1958a99a421653b102379f6dd7062b2115fb0afccc21ecd21138050bf7dc76c1d9edde35f62660eacc1c1f18607171e1d93ea81a5b120554489694727c84635a13a1bcdb163aaf4c6f0f5180208904dd86dd0d601fe926b47088072434bb3d1c428ab189073dd4c590580635024c511d4116dc553e4a78622173a0eb141b2accc4012201097b26c166d02516ee5b9db06fea1dd8d5b6089b7d3d7f3326e9391329176cdb63edc6757cfbce7797f3c9d8b7ebb587288fe579a5feb8f2a392a46a525ded5b6d79a128cd1857a2ca693a73df76c713dfb9aec950ab35a511224fde43b15c218a053d64a30cada9a4d98c07c570b4ab85e7f8ce623e9e1e10ca6db9da450a15f6632ff650531dcd7f4a8f475d4da1b26abe33b33d7f3cbbd26afecdc9ab48d728ce5f817adc9ab50eecc026ec34a1e1eb9da1de1dea460b42f8fd08baf1ffd7af468d52534f742b58fbb6b4dddb22b7f4151e978634a309398878c7da168995fb1d174885efee4191a14ec29e5fbd31c9d40b22e2c04e325abd27b62e256f014dbda7f7ad1da04acce4cb0843d777112f6e42c145d73491bb5e54b7a16ae4e648525e9353a615e16affe7cefcb214dfd834fe017fd97464d8050000",
    ],
    [
      "ETag",
      "CKO6W5rdgGBUVikoM1JEYA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 18:03:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1594749797480"
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
      "57",
      "df",
      "53",
      "e2",
      "30",
      "10",
      "7e",
      "e7",
      "af607aafd2e94fdbdc8c33875a953b44057cba719cd8040c86a626018f71fcdf2f498bf2c03961b0730fd066f7dbfd4af6cb76796db5dbce132990f3bded3c90e9f302f3d5b7299637fa6688c5824aa12e252b04760e341a4b38d5e82101cbf099af1ed8c988a1334a48703abb393aaa50227fc473a870af6aa5d6138229126afddbacdbb5ddf80a38c73a234126b6b6ca5569acbdc1383bcf869bae3943c635b8edf7bbc7fdcca95d6f07ff4e3e215cc87bb3da42321a0f7b83f37d39286c9c426d2aa1cda59fe20261de5c7e52de43843816a2410e26ee61596e2338bebaea67ddc1be0cb0409c11d430cb9234999dcae5b6ec67fdabee78dfdc08caad47e0b43bcef6cd2d249c6fdd9771ef321b8dbb97d7560ce67ad7aab99c197b18e209e6b8c8f147d32a399be15cf64c77148a97e28e600b9ee3b57c7560e59e72b6282167aca34c1ddfebf831889208242089526f0da72c8792b04247dc8e9c777ec924a443f6a23ba413552d9457cbaa61ae77c2996cf4d0cd0d52ae6515fc6e7a3bf804d79d43092db1274c6231611c59e261be0e087fe03f66dfdc9ccd2da3cf548fa3d812ec83d0056e1079ea73681923f9c2367d33d02805ae67890dbcc0eb7841c7b32dacefc6a997fa6908a20c6cc4d47777ad8d0cd6aa8a2dc9fb84db8aea277b2c845447c10e4e67353e6a5a5271e8fa877a175d002c4326908a0674b24bda34d08fbdaba86ceb6a4405bc28f94a51d93eed292e88257494434a6c15888441c78df7a83075fdd077fd287513db63dc904c76481b24",
      "aab5a6bb2acab6a895a280ef7fa5a2124bf20b4ca7b62af945311196d8c7270d3e6c5a5069acde76a9ab5415dbd6e7ffbff3bcc4b56e37ef6ab22da85693ef2549fca99ad4f7ddc7b875bc5243ca35676a9a13d8cc70d598a667ba13a6eb27f52ca87fa331e750fda7bd20b2b6b5de5a7f01b4d8b11d3e0f0000",
    ],
    [
      "ETag",
      "Ri9v3qryboCSodFlii2DjQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 18:03:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "83300000d0bb645d3b2030803b60682d9f4a6df86e3248620a488909d0b48e779771f3f6ef07d44d438440d3d8932b7801f7fad9de36db70b45ce586f1795f0734f1be320b97dfc84917b298486fb0807c21e741b68b80b50ab9b6ab225d11f0987a6e7a1c749e4b95e6879bfa60159c21e4594e3f0c7f29e0ce4c9ac2e759e87887742863b33aad7430d90f1dec25f9d45e8dc01b6d9a5146437135deabe9f2d48f4867dd09d771f8e8b062518b9495110dad53cc38bacca926a9647184b9fb36abc1a9f21db00144b2961381da75a619b6bd01ff4d34dd1959af2ea939e1e0f70ff3b265bc05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 18:03:35 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-11-1594749797480",
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
      "a2",
      "40107ff75310eeb52a542cd2c45c8da55713c52b629bcbe5429675a06b91a5ece2a569fceeb7bba0e2d9347d8399f9fd9999dd7d6f699afe42b2957eade911495e4b28debead69a45fc80c7094c88c57ba30c0c1739f8d1fd633efde36d7af56321c565544a119dae429b4192d0b0cec7ab9e824052d735450da16846dd36c9b7dc7b22dc7766c6b60545806693c25d98b6478e63c67d7ddeede4727a1344901e5847530dd1ce2dded65372fe81a3067dd53d9ae5062ddcf85bfa714234e68365c2e2a13258322840d22a9b47144afa29b53fa0e419b4e22aab70403c298961997d62a1a4cb3982465a1c805d3bb088ab0f27cf86d04f4853b75c78186695a6eb230431bb8d05688a390bfe5a0ddf9f39936f1eee6fe6c144ce65eb818dfbbb351673c9f2e67de427bba777d57e3284a4161b5a176a3fe3cf1a31c29b515304e32e52990d9861391ade738f96085070a49225c31a8cb42dbb842e6c070a238b2713ce8f5a3d880281a44761ff522033b1658ab0850934139abf028a399dd730cabd7ef87bd95d30bad4be48411603bb4e23e020b998e61c77a8dde1d7af95b100eb784e594917ac8fa933f09dc30f097de7814b8cdbe6354a6fcb6727edaf5493b5c0ca8e9f4b3919c39ca0b428529b5ce8917b8fe681c4c1e1b36c4d99a4282f0dbe2559eae18a50c8e6854885d7128667405eaa28d66eeed11ac4ecacf7d111315bf0f3e8fed8842b97fd5cbd9fe4f750271b04e4651eda68aea8bc09f783ff44672f731cd234acb0f78b675588e3026e9715e8aaaf5ffd79f5643421757b576a73f2c5dff97c4aa9cccf8104301193e8a7ee1e44a6095fec24b24caf7ef824488a7e1a0cfb8088b4b84d951",
      "1d17505d29520dbe261c98578665ee0905b0e0e715a67d903c7b1ba4166c20e3fb59546f4435c8dd89a5b26147c164b9b8065ebdc35d6bd7fa07c22ffa7ee0050000",
    ],
    [
      "ETag",
      "NuEe8cTh5sCQjMNH71jq4g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 18:03:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1594749797480"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffc595c16ee2301086ef790ae41e0b52b34a9bb2520fb0a50529856e08a715426e3c49cd3a71d67640a8e2dd6b3b69c9a5ab4845ca25f6cc3fe34f99913d6f4eaf87fed29ca09f3df442d37f2588c3450aeab7d984204ba6a45e0a9e4b407d130d0aa7263a9e8a6d0eabcbec315ac06eb20f8bc09feeefeeaa2819bf428675dc9bb6b49d5060446afb8fb57bb5df6a39cec09ec85999e51b6bf64fb23a14565e46e16cfed854324eac325f05c1681c4c502d1dfb5f43085678638ffc1ec2ae6ba786a12d7f09210101790ca7bf2e04df42ac66b6bc1267058381e4a58841d6109358c9a9e0658105e703ed1ab8eec0bd1e7abe37f487be777bf511ce788c15e5b9c9582dd1275f718559c8f7a6c4c8fd513541547655f28f5aa0a4d1856689b4b433d994a04fdfb1ff9fc0d93cbaf11ab1f56eed34325b53132aa4aa7adf8e5ef7ea4c7886bba4ebab425927e4147202a213342d36981001527683e772838ba2257bbc5804e722e39c084e4947f41ded82cad4ae25f521588ccef8aee8f7beed9dbe1f45937361a5d2af7d4b6e347b9a2ca3d1d3f39770fd5d9f9ef9f141817c165c4f11097676b857deedb57f534d0933527e71336b9419454a9460dd31d633794a95f6259849708ece3b0bf5cadfff070000",
    ],
    [
      "ETag",
      "cHrjneU+mGTOevEwRpL7Hw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 18:03:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT * FROM `profiles` WHERE `stamp` >= ? ORDER BY `stamp` ASC LIMIT 4 OFFSET 0",
        types: ["TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-07T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-12-1594749797480",
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
      "00000002ff8d54db6ea330107dcf5758ecdbaa49cca585448aba694a7691726981b4ea5ed418c7b06e09a6d8a4aaaafcfb1a4808d95655df6066ce993317cf6b0b00e591262ba50f9480464f39c95ebe3cb04039293c44a0a8f420cb746930bfb6e16634be4887d7da62fe3c185451b44473b44e63d2e62ccf30e1fd85d7893296a72863ac2d09dbaad6564f7b8669f4cc9e6958b0c2721287139a3c160c7f854879bfdbddebe8448c45314129e51dccd6b5bdbbd1ba69c61e0816bc7b9cb62b33f1eec789cf638691a02c192cbc4a44ce49764fd688c6858c037a157c3ba6ef50b4ee44327a43314118b33c1185b48a06b324a4519e95e492e9551aa5b9d45cff360c8a674fec910fbe82b13b9f82a5ac29a431e14b70fbc3766db0e442665f82df39843a19807330772f6d175cdcd5aea137021367eaf8c000f3f1d8b37d5035b64cb4225cd0a494e3a320260d11d2bb6ba1f3cef46a8a820409c4c92eecde846748b5602f08031387967e1a849004811598a7480f20ee19c458050435194491bbc2a38425c8502d5d02a185747ca687a1d55355b2425047a72480a8a7ab324253951dc3b6aee739a3825c529e324e773d566e5dc7b7ef7d77311b0d7dbb597b88f2585c56ea8f2b3f2a49c82635d57ed496378ad28c3229aa9ca633f36d7738f29d9b860cb95a131221fce23d15cb15a29893031a65684d04c9a66c550c47b99a7b8eefcc67c3c981a1dc96ab7d249761bf6ab1879a9a6cfe4b7a3cea6a0a9555f19da9edf9c3e995d2f06f4fde65ba4171fe0ed566675634a8c136d4dad0f455adafea7dd5e840087f1e51b7fefffad36aa454e413dd0956ae17b67b57604b5fe17149483292e083884fac6d01acdc9fb840327c7f0f0a843c09757ef9c604952f08f343769c91ea3dd1752979476869508735a10466e26d84691afb883737a1c845d62411fb5e54b7a16ae4f64852de9053c28a70b9ff3367f6bd14dfdab6fe01ac646fffd8050000",
    ],
    [
      "ETag",
      "ba87RibOQE0vCFBpAQ2UOw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 18:03:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1594749797480"
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
      "000002ffc5576d4fdb3010fede5f51655f6994d7269984b4160a740b054ad1264d08b9c9b518dc38b31d5887f8efb3dd17faa143ae4ab42f4deefcdc3dd5dde3ebf5a5d16c5a8fb8c8adcf4d6b8ca7bf2a60f34f531057ea6508bc2282cb47490b0ed68142834053858edd715a767ed0e39b92565fbfff813e5cb1e7c3c3058a67f7304312f7222d694f30909c4bfba7b69b4bbf3e2bd00c54469cebd8a557cc4beded0f46bdd3de70f36846737d34b849d34e37ed59cba3d7837f279f60c6c59db6b6905c8f86fdc1e9be1c04d54e218b8a497de9a750e4c0eacb8fcb3b94e70c38af9183f23b5496db08ba171769af33d897011539a338af99e509d7999d88a76dd94fd28bce68dfdc39125bafc07167d4db37371768b6b52ea3fe79ef7ad439bf3462d0cfdbc692cb7aa0e3214c804191c1dbd02a197d804cf4f574e49297408bd38a65b092af0a5c1c4f19ad4ac4286d4957cbf55a6e98045190444914c4ce0a4e688604a6858ab8b9b6d6fc820a4486f4594d482b588c50b63017037355096bb23143370b248f9e547064ad5daf07efe0ce804c9121f61b01cc0db1f78f0adcfe02bf75bdec8cce0c234fe46c2360088e43db0b623bb6dd30360c11ac32cd5e0f347022db090dc19ee3392dc76b39a60d75ed30769d2892b2eb251b31cbb7dbc64606633599d6f61498c0a67538aac6580843f034d3e8a86e41b99e6f7b6168bbbe239565183441849b12ec82dd415471e0dac1cea232edab1695dbf6938f145562489e568c001486e8ae9c974088219a8c17f0b86e5d79be2b6754624b6905fec7b7bf2e05b6e575f04dafc15a56a69dd5b2f242c7ff4859b98e21fb3165e27e6e08ee73414d259863054eea9654a07efb5cbb1dd8f266fedfe9b34b5a2f71ecd0f4fbae2465dc542d29df6f47ef4a4a7edebe2d5cddb9007ec9a8dce738e82d6eb1a8a9adee88aa160ab50daa7a687786e4bfda332c96bec66be32fb4c391e5400f0000",
    ],
    [
      "ETag",
      "81bLpAXoDUpouJWzeIeQrw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 18:03:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
