const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1625785973647";

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
      "ff1dd04b7282300000d0bb64ed38948f4a7730552408e523bf6e9898a41011840410ecf4ee757a84f77e00c2980a510cf79ab6e01d2c48d6d778ed743bd37c9471232cc59e263ffd5cbcb47c360f8515fb925b59eb5e0f767c8ac272e3c5c6d349fbd191ae4ac90dd6ca4f179621d3927a5e0c13b5b419bdbb368c39cdd5da3f719dee6344aee76da35b03b3c5db2d804a10612d372b955698882975efe44232cbee6040747f4a9c8dec3442cedc9b8d7be9ac7d9d0535a6630a3717d84a6e3db8fea22695da7e1cfaddbc6770bcd941946913243e27c7fadbd98e21da8215a073c73815057b71154dd757e0df5e0c4b475f0126459c72f0fb070cb630851a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:12:58 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-1-1625785973647",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b6fda3014fd2b91f7b590f0080424b422483736085b08adaa698a1c7393b90d711a3b9d50c57fdfb55358ab4aeda7d8bee7dc73ee234fe49e173b322609cf1e6aa80e9fee44422e08289ae1ab925bfbfbcd1ccaf0feb08cd637a17f7bfd2d9b4c10c1354bd27d99434b8aba6220c7db4d3bab445dd24a8816266a755a9d41d71d7aee68d81bf487489390a74b5edc23f98f52a51cdbf649ba9d0991e5404b2edb4ceccfeff663d72e2b71074c49fbb5a28d22d27e57f3732e18555c1493ed06f56b09550c7bca7374f09fb84b2e5f676e73ba6f67087ee40c2863a22e947685299828529ed595c94ac64fc4b87c71201b7fe9cf228b89bcde177141f77061eda8a2b13a94605d85eb95b508aed6e16a1a2dd641bc997df557d3f66cbddcae828d75f3d50f7d4bd12407c3b526d6a5b9057841fd1d48c50ba31ee967adfcdc9fc5dba168024a4b6882f1d019d08ee78c923419b2d4ebb949ea409278c9d0a5bdc461a33ef4770950e41951c3a285281c87767ad41bc4e968348cfbaeebc523b707714a993be8ee3a09755272bc207f2bae60ce6529246f3a446ec245e4c751b80d66d3c83725a4b4ced5bc31a60b78e9516181087aa7a6a38e72814abadd8b20f2c3e92c5a5cfbcd8497905176d83ce08c539a4b4034adb0790aaa95d861c348305df973049b89fd38052519ff7a22bae7dac58b969fe9110e50db55e64b3651b808be183b27c435cd6b03796c0eba8c94e7daf4f1370271459b24e4e7d60f6f49f314420a1514ece36122d8043efad14e6b8f505c7c54910aefb8394c6a0d5641b341dc147b667b5dcf21065ca937b1fe7074ea99cea133c21e0af55c50b3f658672356cb33088338fcc0f4eaf80fa78a74d174040000",
    ],
    [
      "ETag",
      "tsU/KWDepRkyLTOWREYVJg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:12:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1625785973647"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "8b",
      "f7",
      "728956dafc1b525f902ddd9068d2017d3555c8b10fe6cef8986db26551be7b0fda66d33a89be81bbf3efc4dde38703fbae8c6421dbaaea470b76ffa602ffa50b5270adf68e5e0d1a076cc4c0f38ac85fe75529de35d374f1fb6d7cc54d906d318b2e2f8970e21bd49c8507562ad0d2b1f0eb81195e03b509d46d6d8a3e1b31bf6fba6296a7f1fa13e535ca2e5fdf2649b44c56ec383a354aee79d1f3af68bb3b8ed83d6e5328c18211d0cdd258bc07e1e36e4dc7eb46c3d8616b0538d6c3fd4165b16db8451c53651c8c83d9f974be98be9f5fcc2673e2340aee151a426f331a8f79f45ca7f8939664c10511b68f69e1b27feea8ae64bf4817c6eb7c36e9e7fb1be042606b7c310896ca3aff28de33f824c2bfa4e6af04e9a6941e822a3012ec10a59a824b69c1b941125dc19be6842d379be4a52a465a547218dca90140fbdd09b84a36d1ffa4257ffdd1ea6394af5e10ce936b4e481e5fafb23cbabee9b8bb27232cf71edc8d45329583ce4fc1d964319dcfce1e2df6013bdbd177426f5b1831c1e94ff9ac3c0b4bae1d1c1f00f4ab63f087030000",
    ],
    [
      "ETag",
      "x2gfc/p5R8z+IFan1SboSA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:12:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
        query: "SELECT COUNT (*) AS __count FROM `profiles` WHERE `stamp` > ?",
        types: ["TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-2-1625785973647",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "7b6f9b3010ff2ac8fb678f263185842452d56529ed98f2680969b59712630ee696608a4db7aaca77df014d1faad44a96b0ee7e8fbbf37147ae441691210945725d4271fbee5286648f806609464de728e7c7f6b1fde5ccfff6e59373422ffec1d9c1012244c5526c93a7d052b22c38a8e172d14e0a59e6ac90b28542adfd96d9dbef3afdeec0b17ab6833405693c11d91592ff689dab61a7b3b36e27522629b05ca836979b8778e766bf9317f212b8569de78e1d34519d573d0f53c99916323b582ed0bf5450ac60c3448a153c12a3f0f373e5b6609b7682e01bc181712ecb4c5755a10497592c92b2a855c9f08ed4553eb990853b71c781319e2f6781f1fee30763b43056ab5ac338f6e753638dfdc42205b5362ebebabe6bac9546fbb5f1aba4d402e3106d22505a64b549c0c2142a83fb31782f675f1198660a9ae4caa13d66f6e9208c4387c77dab1bc614c2b01f3a5d6685940f6cb0a31018f274a55eb358263327b61c731f2cee744373c0ad88f52d9b469c0e620c86bd08fa7164f763b2dd237f0ba1e148a85c2ad10c835cf85ee0ae027f391b8f02b76e236665aa8f9ae2aa269ed6a9b14904bdd2d7b6ca0a894ed564bd59e0faa371e09dbbcd634e2061fc76718dcf19b35401a259c136a0a198ca0887464ee70b2ff0e6b3d10419f50b9dee108a0c7fde3d1282dbbc9eb2aebf24f0a6ee22184d4feb1a76a073969635eaa6b91073e0d01635f104940eebd3a694fe20dbed6f24e24a36bae46ce9fadf4913f221860232fef6ab22b84ebcf563edd61ca1b8e8e8821ba505ae105795072fa05925b1a98bdeb10796d92535b8d02f7276d7d9cdacd2a814610399be6fa85973ecb3312bd5030893b801336f7682d9ffa09bccb564040000",
    ],
    [
      "ETag",
      "17DpcF4F4BQRJB+7G0WxeQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:12:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1625785973647"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff2d90cb6ec2301045ff65ba2512505e8dc402aad02251da86c7a642c83893349078527b528a10ffde71da8d3dba3ef63df2154eb9492084439e7dd5682f7719f2bb1f627475c14eb68a8c436801b2ca844ca2c9cb32ee9d4633f3ba3da5dbd94f19adcfe3b1104e7f62a920bc429a639138083fae605489726dbfd7541b168a2f950fe6cb75f414c5129494f860b9592c26d34504b7ddad05473ac498a245a3d1bf58593aa2e6b99775aaac0a0c1cd556a383066e0e324b75a52c512049d00d3a836e7f38ea3f0cef07bda1700569c5391941372b90162656454c6751858e00b619c53a6dd66f1fb7bdd0ee9f9d5e18dd9b25e975e82b47edbffe47f24e2cae6c6b6c8156f219cf394398aac2e1ed177dfc96cc6a010000",
    ],
    [
      "ETag",
      "dEAMNR4k8FnOVkfVFxmETw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:12:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      jobId: "grouparoo-job-3-1625785973647",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85535d6f9b3014fd2bc87b6d425a088448d11aa5748d94908e9056dd34210317ea16708a4daaaaca7fdfb569b27693ba276cdf73ee39f78357f2c8ea8c8c49c28aa7169a972f0f3c212704242df0f5c72ebf5a3edf55dece6ceea59f3f84b6775d4c2688608a2568b52da12778dba420c69b75bf6878bba50de73d4cd4b37aa7ced9d01d0d3dd7726c176902ca7cc1ea4724df4bb91563d33c48f70bce8b12e896897ecaabe3bbb93b33b70d7f80540af3a3a28922c2fc54f36bc9532a19af279b35eab7029a182aca4a74f0879825e71f33f719adfa0582772c059aa6bcada5728529525ee7ac681b9d958c5f8976f9ee40d6fec29f4546cacbb6aae39a5670626454d258be6cc1b80c574b631e5caec2e5349aaf82783dbbf297d3fe6cb5d82c83b5717be587be21695282e61a13e35cdf02bca07e0642b25aab47ea5929bff567feef501401a50574c1d81d38f47434f0923c71d37c640d937c0049324adc21b59241ead960670950e46951cda235afa9e5029cc128b69d5327b6ddcc8ae92887d8c93c8b0e1d27b52d20fb13f2dc3009174c6cb9605d87c86d388ffc380a37c16c1af9ba849cb6a5bce88ca902de7b945820823ea969afa28ca3926af73c88fc703a8be6377e37e10514347d593fe18c735a0a40346db079129a25cfb06124982efd0b04eb895d1f82828c7fbe12d573e5e25dcb8ff40807a8ec4afd25eb289c07dfb49d03e28696ad86ecba832a2367a532bdff85405cd12e09f9bef1c33bd23d8590430375faff61225807fef7a31dd61ea1b8f8a82224de717352a134d206ba0d62bad823dbf32c9b687023ff8a8d0603db39f44ce55019a1825abe15d4ad3dd6d989b5e208c2200e3fd0bddaff067847abe974040000",
    ],
    [
      "ETag",
      "ZvfHMwYm9v/rhtEfjR49Pg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:13:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1625785973647"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d93db6edb300c86df45bb9c0334cb71067ae174691ac0cdc1712f8aa1305489f6d4c99226c9d98220ef3ecaedd2611de0ded824f511267ffd3e92ef427112934751fd68c01e3e54e0b721c8c035d23b7c19ad1c908880a71592bf16d38f8667834d767d7f75b39d2fb2addc2597974838f60d6a4ae223290548ee48fcf54814ad01db98964dad8a368b883f9850dce5d972b5c0bcd63ce4abbb344d66e99c9ca27323a79e162dff8eb68753449ef463062558500cc22cc6ea27607e19d674b436127a4e379681232ddc1e545637865aad7b58e90d7afdf1a7d1643afa3c198c8713e4a466d40bad10bddbe178c46b4f65a67fe292a43f40c2b6312e5cb6cf3dd6056f1709e172958f87ed7c7f039431dd285f7482a5b0ce3f8bf7077c11e15f52d27782785342764115280eb68b12a6a09c5b70ae93d4aea0c69cb1d97a9dbe554571ab05ef06f7a203907e7f06aed375f23f69d15faf5a7d49f2f91bc27974cd19c997b7f35d9edc6e02f7f06284d9c183db588da67210fcd4bf184e4793f1c5b3c5ae74b01d7e27f6b68188308a7fca8df0242ea97470fa0d73a05e3a87030000",
    ],
    [
      "ETag",
      "xG8+pdR3PRFYCHQEGRQlSA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:13:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT (*) AS __count FROM `profiles` WHERE `stamp` > ? AND  `id` > ? AND  `id` < ?",
        types: ["TIMESTAMP", "INT64", "INT64"],
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-4-1625785973647",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "54",
      "5b",
      "6f",
      "a2",
      "40",
      "14",
      "fe",
      "2b",
      "64",
      "f6",
      "6577531511044c9aaeb1ec2e89a22bd8ee353ae0819d16196586364de37fdfc3507b49d3f6611312c89cef726ec32db964c59a0c48ccb25d05e5cdbb0b1e9323029266780aeef5d70a66557611ce82ef60ee442677d9f1312258cd1274b3cda12578552620068bb09d95bcdad292f3160ab5cc56b76f58b663b976af6fda481390a763565c22f9af945b31e8740ed6ed8cf32c07ba65a29df0cdfd79e7cae86c4b7e0189149da78e1d34119d573d4f729e50c97871bc08d1bf12502e6143598e193c10d7f1a7a7ca6d4637ed0cc1572c019a24bc2a649d154a24bc485956954a950c6e89caf2d10709bdb1378ab4d1741144dafb8f1fb461a82d974a43fb3c9f4eb415d693b21cc44a3bffeacd3d6d2524daafb4df95aef7403bd186c1a9a6add8fae5a3443bc164d620242b542a118d73a8d3b86b96ff7c4235814a2aa0092e6dbd4fbb8eeec6696c27a9d3b3e25487387662dba2bd584f5c13cc750c1479b256572c5af0a2e7f64d636d776942add48c7b768fd2d4b00c833ae03a7dc3767a66ea5a06d91f91eb9249386562cb056b5a46cee77ee42da3f922180d234f9591d22a97a74d7275118ff3945824825ea96b5f471947a7baff7e1079f3e128f2cfbc66e463c8687213ee70e829cd05209a96740312ca095f63d3c86c1afa913f0d866364a839ce0e084106bf6e1f08d1cd567559aa3789fc891746c3c94ce570009dd1bc52a8abe683745d5b6fe95d7c225d1fa8a7adebfa4fb2df1fbd2c8e85f4cdd785cdff56b051e10f22f0f23464f26de1cd7f90e6",
      "680e299450246f6f168255e0ad5fc0e1422214af24bae0ee4b866b9c88da2329a15967b6518dbb633bba6d5844814bf92ce6d8ee616eb546ad081b28e45d41cd85ac3ba54295b8076110b730f0832f18fd079eb6e6210e050000",
    ],
    [
      "ETag",
      "e9wHuePugjSPNXe4qsgtqg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:13:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1625785973647"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d14ec2301486dfe578294b04d9c0255c881224595086c40b4348e9cee670db19ed1966217b774fa737edc9dfaffdbff40adf79954008c73c3b3768da9b0c79e386186d53b095ada6ca220c00596542963a3ade267cbe6cdbe5d47f5d7ed4537edecc664258fd85a582f00a698e456221fcbc42a54a946b8783a6a662a1b8ad5db05abf2f968b5882921217ac7751f4388f16d0edbb019ce818638a062b8deec5dad00935af9cac55655da067a9311a2df4707f90196a6a65883c49bcb1370c46fe64ea3f4cee83f144b882b4e29c2a41775b90162656454c3fa20a43014c3f8a75daaf178947ce67ff8fce5b46fb66486a2dbac66170f7d7ff44ce89c5954d8303d04a3ee3256708535558ec7e01a34748856a010000",
    ],
    [
      "ETag",
      "mcLb+dtqvSyG85OGWp8tDQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:13:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "1d",
      "d0",
      "4b7282300000d0bb64ad0e88f2e98ea868a0b43210a56e1808c19260c480fc3abd7b9d1ee1bd1f9012429b2669ef9c0af006c674692dc8c2ab4d08fb6f543ec3dea6de14c80c77627cd7d50f1dd7a3b28571bebbe4c6da79d89652152ae545b5cd0b8d7026058da61b32560fd19ddc0467a1e94b9ea5d2766cc65afeac6271bdb69b33da38033ade369ecb1bb60df9bd08cdc77888922f4fd8bc513baf3f981a2178de7b6da00c67de627462238ff03cfaf4773e445d1c9451001953b9bb1ff4a3b2427065d8e1d495f7bd46963ad20ec74b1ea0bdcf5cec4f6006e85097923649f9e26a6bcb9a817f7bd28e357d05409a4a2ac1ef1fe50966c51a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:13:01 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-5-1625785973647",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fd2b91f7b5bc210948686534ac4c10d610da55d31439ce4de636c4103b5455c57fdfb553ba5695da4fb17dcfb9e7dc479ec83d2f12322231cff615948f5fee444cce08289ae16bef070bbfcd7ecd6e6797577bff6eeab0bdbb7f188f11c1354bd2ed2e87861455c9408e36eb66568a6a474b211a98a8316874eceec0710743a767f71da449c8d3052fee91fc57a99d1cb55a27e96626449603dd71d96462fbf2de3a745bbb52dc0153b2f556b18522b2f5a1e6d75c30aab828c69b35ea5712ca08b694e7e8e03f3189cfdf666e72ba6d66083e7006943151154abbc2144c1429cfaad26425a327625cbe3a90b5b7f0a6a1c5445e6d8ba8a05b38b312aa68a41e7760cd82d5d29afbb355b09c84f3951fada797de72d29cae169ba5bfb66e2ebdc0b3148d73305c6b6c9d9b9b8f17d44f402a5e18f5503f6be5e7feccdf0f4513505a421d8c9cb64d3b6e7b18a7b1c352b73788d336c4b11b3b03da8bdb6cd8877e1203459e11352c5a886200ed2ea39d6ed477872cea33bb13d1a4d78efa436a439fda8c255d723c230f255770c1e54e485e7788dc04f3d08bc260e34f27a1674a486995ab8bda982ee0b547850522e8839a8e3aca052ae976cffdd00b26d3707eedd5135e4046d9e37a8f334e692e01d1b4c4e629289722c186117fb2f42e106c26f6f3149464f4fb89e89e6b17af5afe420f7180daae325fb20e83b9ffddd83921ae695e19c8a13ee832529e6bd3c73f08c415ad9390ab8d17dc92fa2980144a28d8e7c344b0097cf6a39dd61ea1b8f8a82215de717398d41aac847a83b829f6c4763b03bb4b0cb854ef62b6d33bf54ce7d019610b857a2ea85e7bacb316abe40b0883387cdff4eaf80f",
      "1cf3b68274040000",
    ],
    [
      "ETag",
      "3JcTBFXFYFHQqNjC7cq8qw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:13:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1625785973647"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "936f4fdb3010c6bf8bf736955ae81f88c48b762ba35268a10d121242916b5f828be3cb6ca753a9fadd770eaca03129bc49eecebf53ee1e3fd9b36765248bd95a15bf6ab0bb6f05f8db102cc1d5da3b7a55681cb08881e705919cef945abff427f7ca9ecbcde5139e74a7b717174438f1042567f19ee50ab4742c7ed833c34ba03681ba2e4dd66411f3bb2a1457e97236ff49798932e4f3bb24194f92293b44c746c93dcf1afe0b6d8f87886d70bd841c2c18016196cae206849f85351d2f2b0d1d87b515e05803370785c5bae216b14395cea0d31b9e0c466783f3d1e9b03f224ea3e05ea121f46e45e3318f9eeb25fea62559ef9408dbc4b470de3cb75457b2592484b3793aec37f37d04b810581b9fb582b9b2cebf8af7177c13e15f52f32f8274534ab741051809b68d5255c6a5b4e05c2b892ee35575c4268b45f25915232d2ad90e6e550ba0fdf6085c268bf1ffa4257fbd6bf5639c4e3f11ce936b8e483abb9eaed2f1f54de01edf8c30d979703716c9540e829f7addfed96034ecbe5aec3b06dbd177626f6b8898e0f4a75c29cfe29c6b07873ffd68e46d87030000",
    ],
    [
      "ETag",
      "aayiibz4BXir9djFho20EQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:13:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
        query: "SELECT COUNT (*) AS __count FROM `profiles`",
        types: [],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-6-1625785973647",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8552db4edb4010fd9568fbd256240e497c8b84da28b8d428246decf4f2147637b3ee06db6b76d75408f1ef1d3b978290e0cdde39973933f3406e64b92163c264765b83be7fb7558c9c10b034c3d7a45ad1406f6388bf4efb175bfbebb2bc1965676788900dcbd0a2caa16b54ad3998f12ae9655ad515d54a7551a8eb754fbd81eb076ee80fbd918f3403b998c9f206c97facadccd8710ed6bd4ca92c075a49d3e3aa38be3b7703a7d26a0bdc1ae7b9a38326c679d5f353ae38b5529567ab04fd6b037a0d05953976f09fb8619f9f2bf7242d7a1982ef2407cab9aa4bdb7485125c954266b56e55c9f881b45d3ef92049348ba66967ba58cdd3cefb8f1f3a93a4b35eb71a9d2fcbc555e71af3089983b946bd0d182bcb562da52c8746699f377e39e486402d35b02baefdbe474f837ec804f3b908862e137d602c60be4b87accfc3118c360c28f26ca3deb268a94a36e833e1c160e4bbde70200415d4a728c046fe307437a1108117786e481e4fc85f2d2d9c4b53292377a9c9cf659c46eb74b99a4f2769d4c610b4ceedf9aeb926c4d33e2d8644d02bb91e9baa54e8d48c309ea7d172324de31fd16e6b33c828bf4f6e716f82e606104d352dc082be521b1c1af9b648e2345ecc27b3460b4f21bdaf9af7efab68f97bffb404011a4afef69011dc16de3ae8c37921140f0c5d8cc57fdc28378d07d7b0dbac2c9a5e0eec60e0851e69c1dabea805a743ac1dcfaa5184024abb0fb43b2ff2b837abcd1184455cc83c9e5f60f51f8229fffedc030000",
    ],
    [
      "ETag",
      "SpUa8rjIeIHC0GjtXJnk4g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:13:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1625785973647"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff2d905d4fc2301486ffcbf1129680f2a14bb800452541a253628c21a4746773d8ed8cf6144316febba7d39bf6e4edd3be4fdac07751a510c3aec80f1eede922477e094382ce1b76b2d55439842e20ab5cc8fb59f131a8dfb36367773069a77cbaf3e97e3a9908e1f417960ae206b2024dea20fe6ca05225cab5ed5693af58283ed52158acdee60ff3448292d210acd6cbe574b69cc37973eec29e76096668b1d2185eac2ded51f322c83a55d6062347de6a74d0c2ed416ec9d7ca12459244a3a83fba1c8eaf8737e3abd1602c9c21adb8a04ad0f52b480b132b93d08fa8425f00db8e629db5eb31c4bd20b4f967672746f76c497a1d86cade5ffd2d05251655b61ebba095fcc563c11067ca383cff02c83fae9669010000",
    ],
    [
      "ETag",
      "FBiY4pWfv+bqld+mMDudjA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:13:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
