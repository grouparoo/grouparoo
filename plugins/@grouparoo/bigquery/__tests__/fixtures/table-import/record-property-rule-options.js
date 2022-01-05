const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1640212607491";

nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", { grant_type: /.+/g, assertion: /.+/g })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff1dd0c97282300000d07fc9599c804a9bdedc683a918e2c8d89974cc0d4896cb219a0d37fafd34f78ef07c834556d2bba2a53257803a374d03c9d2770cd1e708a3f9723db26f0b049a983f7b684bdc965102f6b61ed1ff226719841e2049d895c22cb41608fb3b31538ab3a1cbecd304c45b4cd69b09017c88f45fe65ad6aecdba9bd3cd645c13a35bcc7dc752add5f778656a117dbb9db63d7473419b7858ffc3ba7ed896058d2b14ab2fc42d706354c1b2fd70d8952199face0d698244c88c7b391f1572ea252c6bd2d5f902e845e7735c9ae8bf2b0114cee2029f179faa82a30036ab8eb46b5423fdd8b154233f09f20baf1ae9e131b251bd580df3ffb1a91d123010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
        query: "SELECT * FROM `purchases` LIMIT 10",
        defaultDataset: { datasetId: "test_001" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-1-1640212607491",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85525b6fa24014fe2b66f66d53e5228a6362768db2bb24d66e1177b34f76180e742a309419da98c6ffbe07b0b64d93f60de6bb9ddb13d98b2226531289f4be86eaf0e54e46e482806629bed62a57736a05c9d5efe5af51bc5f6d93727e3d9b2143342ac5f23283be9275c5414db79b415ac9ba6495947d34ea5b7d6bec98b6658f4dd7a116ca1464c94a147b14df6a5daaa9613c470f5229d30c5829d480cbfcfc6e3cd84659c93be05a196f130d0c51c68799df32c99916b2986d37985f2ba87690339161052fc238fafed67920583e4891fc203830ce655de8a62ab4e0b248445a57ad2b993e91b6ca571f64e3adbc45d8fbdafb115c5df66e4a74bc650ad44d6fe55ffa61cf32d12606a545d19a842ccaa03138b5e9bf9f6d23601a4d3a70e79a63664d4c1a2591cb93c97014252644d12472476c18999c3ae0c41130d4e9c6bd55b14216d4b1006c3aa69c53d7a68e4d2d06c0e39109766c39dca5b105b63926c70bf258090d4ba14aa944d72cf91bf8a1b70b83ed7a310fbdb68d84d5995e76c5354dbcae5363933bd36c36ff416fc7061512d39ae9f9ebd00be68bd0ffe3750b5b41caf861738f2b4b58a600e9b8e8f050e2ccc8f5d60bfe91ee2980042a28f8e7b344720b7c76aecfc783543c1f4c511aff71715c3519bc826e81226f6a7951bbd4212db9d2ef303a74113b1f4de3083914fad450773ce4780aabd5998420ce7dedaf7f22fa1f0d9daf66ba030000",
    ],
    [
      "ETag",
      "usmsA91RfOPDH5dkLUfpAQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1640212607491"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff9d94616fda301086ff8bf77184d9499c60a47e48b7aca3a2b40b61aa345593490c4d4be2d4715651c47f9fe35624b41e1bfd428ecbfbf8f5ddc16dc07d56a46008e6d9f2a16662fd61c9e4f726885855af64a51e252f2a067a8049ba54caa7eb1ff2fcfae37d7efee9290e670f9741368d9627274a5125b72ca760b8018b8cadd20a0c7f6e404173a6b02c5502b92e9b783489c3b33052899ca74d62321b8f83d37108b6bd1d2058c245faeb68aeac45724bf58d5fb0691c8d266787299af3ba902df3757c19c4879194ca8ec997200e0feb2b49f3b205e2d145388d838b2b1375b3ed813b3e8fd882095624ace96929f81d4be4a81957a58e5a31abe2aa5856012dd62f9682d725159c5b2a63210b792eb491ed41df2548e9563ca132e38592cea6ea7640724957117f54c302082a85d0b11adc427ffe56794797b11f4da5a08f7326c47a97b2fbb08da10d2d685bb025501f0fa0ef20425c1c125d63d704b5303ed6a5c3362ec8713c9fb82613fffda574586d425c848d26d8504850aa79b5de7de4be6d15de6f1581ae2a027bbea90ebbc58ff1e870ba060c89b90644de6940f60c6c845cc76cd0eafe72bee20d4d42fb4dc29820e3f9fe3fef6f3effd590a1ef633d840131980c0cbfa6ff3119ec9b20cf21e626b5ac7b8c4187d306dec0de4de1e6e53f7fba96acba125ced8f8a35ab033eaf91cfbc592d6ab50da5a8590f24546df56f997cfebefd0376b08e1432060000",
    ],
    [
      "ETag",
      "zXVtJX+kmJ/zTEUqOAiSRg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "ed",
      "d3",
      "41",
      "72",
      "82",
      "301400d0bb64ad0e0414d35db008a5a5c51928899b4cc0af40ab2020109ddebd4eaf51df1dde0dc92c83b6155df50527f48494c46496cd528db25ebb46c18eebf56acbfc8f8cadb0139dc580933d29bd3961e3ee92f424d9883e7a933e10ea0a6eebebd073dc26074d1fbc4f871e982715f815139b957b34f1d8713fe75c65693e549538dae138f292db5a6fb1b96725eb80e8a1193e5fc3d3e9bd80efa5d1ee52ac613b5056e9c9b3197247e796b15c4893423c6831ef8657633be545e92a41a96e078beb054f79671c14ecdde58b93d3ba1584e5d22fe2edde4a835ac4b387877f074d108c75d1402b8afb76634ec804fdd5179daae1fedf06d940837e7e01f4c2be7719040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
        query: "SELECT * FROM `purchases` LIMIT 10",
        defaultDataset: { datasetId: "test_001" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1640212607491",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85525d6f9b4010fc2bd6f5ad8dcd8731184b561b39b445b21d19e3567d728e632197608e7087232bf27fcf1e386ea248c91bdcecccececee13b9e7654a2624e1f94303f5e1cb9d48c805014573fd5aad56cee2a189c4e6db232dae57cdefbd974fa758c1354bd25d55405f8aa66620279bf520af4553d15a883e0af5edbee53aa66dd9aee939be8534094536e7e53d926f95aae4c4305eac07b9107901b4e272c0c4eefc6eec6da3aac51d30258db78e069a48e343cfef85605471514e376bf46f24d45bd8515e6007ff8969f2e3adf280d3dd20c7e23d674019134da9745728c14499f1bca95b553279226d97af3ec83a9807b3b8f7b5f733ba5ef46e2a54bca512e44d6f1e2ec2b8679928938254bc6c45629a14a0054e31c3f7b3d504aa50a403b79ee9526b6cfa4996782c1b0f47496642928c136f448789c97c079c34018a3ca5d55b162d45e93b1680edbb3e63be67fb8eed5b1480a52313ecd47298e7a716d8a64b8e17e4b1e60aaeb8ac84e45d58f2370ae3601b479be5ec320eda18196d0a75d535a743bcee5361c8ad69eacd7f90eda8512ed04d4f2f5cc64174398bc33f41b7b039e4941dd60fb8b28c1612b01c171d1f2a9c19596d82e81fe99e22c8a086927d3e4b2c6e81cfcef5e578b014cf075da4c27f5c1c93da83d5d02d90ef742f67f678d446c6e25abdc35c7b88d8f968b422eca054a740ddf190e3c9ac91e7220471eecb70f90bd1678e5808f0ba030000",
    ],
    [
      "ETag",
      "bpQQ4MquRoU+walOQuHv7g==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1640212607491"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "94",
      "61",
      "6fda301086ff8bf77104d9499c60a47ea02c6348d0752195264dd564120369499cd9ce1042fcf7396e45c2e6b1d12fe4b8bc8f5fdf1ddc013ce76506866099af7fd44cecdfad99fad2043193f55649fda8782919e801a6e85a2bb365f0ec8f83af9e9bcde3f9a61c17e9fbc9eee6462b64ba610505c30358e56c9b4930fc7600252d98c6f24c0bd4be6ae2e95d124da258270a9e3589bb87d96c743b8bc0b17702044bb9c8be5fcd55b54837d4dcf8155b24f1f46e7299a205af4bd5321f679f47c96524a3aa63f261944497f552d1a26a81643a8f16c9687e6fa31e8f3df0c497315b31c1ca94353dad047f62a99a36e392faa82d7324d7c532098cd8bc580b5e575470eee88ce33a28f0a18bdc00863e415ab7e52955392fb5f461a16f071457741bf39d1e1640502b8489f5e056e6f3a7ce7ba68cf368a104dd2d9910fb53caedc336862e74a0ebc096407d3c80a18708f171444c8d5d13d4c2f85a970edbb820cf0b42e2db4cc2b797d2618d09f111b69a604b21a34acfabf5ee23ffcf56e1f35611e8eb227010daea705bfc1a8f0e676ac090d86b40e48d06e4ccc045c8f7ec06adee2fe76bded22474de248c09b29e1ffef3fef6f37f1b320c436c863020169381e5d7f43f268373131478c4dea496f5af31e870c62018b8a7293cbefee76ff78ac97bc1f5fe90ac591df0658d8c79b35af46a1b2a51b31e48a9deea9f72f5f2fdf80b1d5f5eb332060000",
    ],
    [
      "ETag",
      "db6k4C6X32dMRMhnCmc+Gw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
