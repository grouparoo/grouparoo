const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1640201729937";

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
      "ff1dd04b7282300000d0bb646d1d8242a5bbf0a98a8d11812a6c9890a6ca47048268d2e9ddebf408effd00ca1817221bae156fc01b9054b7a66c9a6be8386a2ac22bcbfd74decd6ec4c75adc28a4f3fc7b832e5738578dd923073e56c2fd3ab5e33e894913d48fce86ba79c8dbc8803ae30517c809627821a4896cee2dc880a899e6c81cad193f877140dac38bb1d90d35dc535b23616a5562eda15215a194a6d2934bd0f94691b805dc85779c47edb68e91bc63b94c3db4517eb63006bc737cc1ca90a8ea363b2edd53f66a489695e7bc0ac91e8f1febce636ebdc5bedeab54955b0c26803fdaa2e7222b9eee99615913f09f900db2e5cf099bd39ef7e0f70f2d6fbeaf23010000",
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
      "Wed, 22 Dec 2021 19:35:31 GMT",
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
      jobId: "grouparoo-job-1-1640201729937",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8553614fa34010fd2b64efab2dd0a22d4d9ab3a9a84d5aea51aa392f17b22c03b70a6cdd5dbc18d3ff7ec3623d8d897e6277e7bd79336f866772cfeb8c4c48ca8b8706e4d3b73b919223029a16f83ab36fae6e6f47e7b9bcf0aeb97b31a24556cda65344f096a568b52ba1a7442319a8c976d32fa46876540ad1c3443db7e79e78cec0714703df1f8e90a6a0cc97bcbe47f21fad776a62db07e97e21445102dd71d567a27a7db71f07f64e8a3b605ad9ef156d1451f6a79adf4bc1a8e6a29e6e37a8df28900954949758c17f62969ebecfdce7b4ea17087ee40c2863a2a9755b15a660a2ce79d14893954c9e89a9f2cd816c8265308f2d26caa6aa939a5670646554d3443fedc03a8fd62b6b119eafa3d52c5eacc36433bf0c56b3fe7cbddcaec28d7573194481a5695a82e15a53ebd4dc42bca07e064af3daa8c7ed73abfce2cfe2e3505a024a2be882c9c839a1eed8f1d33c1db17c3c3c4e7307d2749c8e8ee9307598ef8197a5409167440d8bd6a24e07c7d90973d3c4f75d3ff1304d42a94b13e4d18193536f38f6c9fe88fc955cc319573ba178e710b989167190c4d1369ccfe2c0b490d3a6d4675d616d036f6bd4d860e2382e023fe96bdf46b940b5d6f2451807d16c1e2fae836eca4b28287bda3ce09c735a2a40349568a006b912199a46c2d92a3843b099dad521a8c8e4d733697d6f2b7963fb2b3dc621b6256bf3259b385a8417a69c03e29a968d813c76072281099961cdfbdf88c32ded72901fdb20fa49baa708729050b3afe7896013f8ea5f3b6c3e4271f7514569bce3f230d56a3009dd1271d3eb813d74712988014bfd21e67bdec1b236479b112aa8f54b43dde6639f9d58a35e4118c4f987c6aafd3f7af81faa77040000",
    ],
    [
      "ETag",
      "A/WPZZ7FfrG4Vi1G7agdmA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1640201729937"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d93c14ee3301086dfc57b4d45534a4b237168770b048516da705aa1c8c49360703c59dbe9aaaafaee8c0314b4ac142ec9ccf81b65e6f79f1d7b965ab0883dc8f24f0366fba30477eb8315d846394baf1ab505163070bc24727e74f9acafdcd1f0a448068ff1f9e924d96079764684cd1fa1e22cdab14282129645bf774cf30aa82d47d5543a6bb380b96ded8beb74152f2e28af50f87c719724d3593267fbe0d028b8e359cb7fa3ed7e1fb0277c58410106740e7e96dae013e42ef66b5a5ed50a7a161b9383652ddc1e94069b9a1bc41e557a612f1c0dfb837e381e4c26c763e214e6dc49d484dead693ce6d071b5c2bfb4240b8f89306d4c0b17ed73437529da457c182fd2d1b09def33c0f31c1bedb24eb090c6ba57f1dec13711fe2515ff26483725551754821660ba2859675c0803d6769268335ed7076cb65c265f55d1c2a014dde0467600ca6d0ec079b29cfe4f5af2d78756bfa6e9fc0b611db9e680a4f1f57c9d4eaf6f3c77ff6684d9d681bd3148a6b2e0fd14f687a727e351ffd5623fd1db8ebe1339d340c0724e7fcaa5742c2ab8b2b07f0186f17ec987030000",
    ],
    [
      "ETag",
      "E/HknJt/45fL2hIF89Lvog==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT `first_name` as __result FROM `records` WHERE  `id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1640201729937",
    },
  })
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
      "db",
      "4e",
      "e33010fd95c8fb4a9ba44daf52c5b29085ac4a61d3148456abd47626c190c6c176ba42a8ffbe93847211123cc5f19c3367ceccf889dc8b222153c244f650817afc7627193920606886b7d79783d37075bbfd21c2335bb39b32fcc5b6d96c860851b334dd943974b4ac14073d5d2dbb9992554995941d4cd4e975dca1e7f41c77d49b4cfa23a469c8d3b928ee917c6b4ca9a7b6bd97ee66526639d052e82e979b977b7bdbb34b25ef801b6dbf57b45144db9f6a1ee692532364315b2d51bfd2a062d850916305afc4847d7f9fb92be8a69b21782b3850ce655598ba2a4cc165918aac524d56327d224d956f0e64e9cffde3c85aa74269131774036b8b6a2b8e15e82a37d6cff0e2dc5a2be052257a6d5d9ff9a16f596b91acad997568cd83f320b25c944a401b513442116539d422cfad083ef6bf26504335b4c178e40ca93b76262c65239e8efb03963ac0d8988d06b4cf1c3ef1c04b1850e4993a7bc3a205da73faae3b495dc7c570c2a8cb133aa07438e87b8ee78d3c6f980038d421bb03f24f0903274297528bb621e43a0c223f8ec2d5e2f828f21b1b2945df276d71b589b7751a34193b4eedf7136fbb3a2a24aad51d0e16911f1e1d47c195df0e750e19e58fcb071c6b4a730d88a60a1b6f409dcb041b472e2f9641145c2c8ee6c8682675b9476832fdf3f44a881ecba6d3a6f9d65a43afd1df03ae685e35886d7b202ed9edfe2202f7af2593df2b3fbc21ed5508292828f8d7e3437013f8ea15ed771aa1b8d5a8a20dfee3ae705d6b7005edce884d53dd33bbdf1b0dc7a4012bf321366926f0b2cb7546d840619e0db53b8d3e5bb14abf803088a35e048b538cfe07ea04757151040000",
    ],
    [
      "ETag",
      "WP5GRUhvBiRH/sbYpRJbvg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1640201729937"
  )
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
      "51",
      "4f",
      "c2",
      "40",
      "0c",
      "80",
      "ff4b7ddd920dc185253c082182922903121343c831ba39dcd671d7a973e1bfdb9bbedcb5bdafed97ebe023af4e10c231cf2e0deaf626435edb2046d3146ce4aaa932080e20ab4cc8d9ecf539f282a8be2cbe9faa1da7dbc79fd17a3211c224ef582a083b48732c4e06c2b70e2a55a2b41d0eba9f2818b7b5ad6cb6f1327a90bca493cda3dd6a753f5dcde1babf3a70a6638c296aac12b4136b4d674c7869658d2aeb025d438d4ed0400ff70f99a6a6569ac8958a3b70fdbba137f0fc60301edf06c2159428cea91274b701d9c2c4aa88e94b54c11740f7a158a7fdf929e5b9ced12aedffe969cb685e34c9668376a93f1afe29ccc86ab1e8b26ed08144c97f2c7286305585c1eb2faf7982ef6d010000",
    ],
    [
      "ETag",
      "CCXON07NpqHxKnUtfTJz5Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "64ed38108a91ee002ba820028ac14d864f5464801868009ddebd4eaf51df1dde13245946db96744d496bf009c6046ad36c9a4a3a16d263bf6b16e7631ce870355651704abad08996f06cc95e79d8e275868c58840bddc66e951ec62fb6713c6be033e6e6bdb5a63cd0ef96beb34b24c69d625a57ac16b630451130ff7b8f0a9f1f6f861a0b9c5d6123bb5afff04ff3ac342b45bdcc5a5a3fa2dc23768f58e1ec97eb8b81657857424137d56a7e51a281f37a3be3c9cd5349ee4afe612320cd4339d51264935a8c4d0ee35871f099f5e4030d3e2234ed6e733392fae9dbdbbf0326800eace0b425c56bbba26ada04fcd527ddc8e8ebbf41134e39f8f9053dd57be319040000",
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
      "Wed, 22 Dec 2021 19:35:33 GMT",
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
      jobId: "grouparoo-job-3-1640201729937",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6f9b3014fd2bc8fbda2424e445a4688d52ba22256423a455354dc8980b730b38b54daba8ca7fdfc5345dab4aed276cdf73ee39f7c133b9e7554a6624e1f9430df2f0ed4e24e48c80a639be46bbdb301a3bdaf5c2b53c2c990b4f79b698cf11c11b96a2e5be808e12b564a066bb6d3797a2de5329440713759c4e7f3cb407767f32705d6782340545b6e2d53d92ff6abd57b35eef24ddcd85c80ba07baeba4c94afefbdc7416f2fc51d30ad7aef157b28a27a9f6a7e2f04a39a8b6abedba27ead40c650525ea083ffc434397f9fb9cb69d9cd11fcc81950c6445de9c615a660a2ca785e4b9395cc9e8971f9e640b6deca5b461613455d5671454b38b352aa69ac0f7bb02ec3cddaf283cb4db85e44fe2688b7cb2b6fbde82e37abdd3ad85a37575ee8599a260518ae35b7cecd2dc00beaa7a034af8c7ad43c37ca2ffdf13f0ea521a0b48236184fec31ed4f6d37c99209cba6ce28c96c48926932195127b1993b84619a00459e11352c5a89ca4d9c29b519c483fe348987a3d489a943ed78e4ba43c7998c077d3622c733f224b9860baef642f1b643e426f4232f8ec25db05c449e2921a375a12f5a634d016f3d6a2c30b6ed3e023fa9ebd844b940b5a6e57e1079e16219f9d75e3be515e4941db60f38e78c160a104d253650835c8b149b4682c5dabb40b099dacf535091d9ef67d2f4bd71f2a6edaff40887d858d6e64bb651e8073f8c9d13e29a16b5813cb60722810999a2e7e31fc4e196b639c8af9d17de92f629840c2454eceb7922d804befad74e9b8f50dc7d54511aefb83c4c351a4c42bb44dcd47a62e32c1d9b18b0d41f62d3b1736a5993a3c9082554faa5a076f3b1ce56ac56af200ce2fc03d3aae33fc8879f5d77040000",
    ],
    [
      "ETag",
      "TUYRT63t9ERMryCc9ewgfA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1640201729937"
  )
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
      "10",
      "c7",
      "bf",
      "8bf71a245228ac91fa001b6c54297490aa0f5315b9f62533737c99ed8010e2bbef9c76ac5a27a52fc9ddf977cadddfff1cd94f65244bd8932a7f35600f1f4af0df42b006d768efe855a371c022069e9744ce2f41c6533117fb9b423f18636e966abbbfbe26c2891f5071961c59a1404bc792ef47667805d426503795c9db2c62fe5087e2265b2f965f28af50867c799fa693693a63a7e8dc28b9e779cbbfa3edf114b12d3eada1000b464098a5b6b805e117614dc7ab5a43cf61630538d6c2ed4169b1a9b945ec51a537e8c5a361ffa21f8f2faeae0663e2340aee151a42ef37341ef3e8b95ee39e9664f18008dbc6b470d13e775457b25d24848b65361ab6f3bd06b810d8189f778285b2ce3f8bf7077c11e15f52f3778274534a7741251809b68b5275cea5b4e05c27892ee7757dc6a6ab55fa5615232d2ad90dee5407a0fdee0cccd3d5e47fd292bffe6af57992cdde10ce936bce48b6b89d6db2c9ed5de01e5f8c303d78707716c9540e829fe2fef0e3e578d47fb6d8270cb6a3ef24de361031c1e94ff9aa3c4b0aae1d9c7e038845599187030000",
    ],
    [
      "ETag",
      "F5ed1BcFcwJflWnnnJNijw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT `ltv` as __result FROM `records` WHERE  `id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-4-1640201729937",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8553db4ee33010fd95c8fb4a9ba4b9b5952a9685ec12a9144853d06ab56a1d67120c695c6ca708a1fe3b93847211123cc5f19c3367e6ccf889dcf12a236392f2e2be06f9f8e356a4e48080a605de9eb201d5f497ed4dbdebbbcbcc81e18d553c4c2688e00d4bd1f5a6849e12b564a0c68b79bf90a2de5029440f13f5dc9eedbbd6c0b283c168e404485350e6535edd21f946eb8d1a9be65eba5f08519440375cf59958bfde9bdb81b991e2169856e64745134594f9a5e6612918d55c5493c51cf56b0572096bca4bace08d98a53f3f66ee73baee1708de720694315157baa90a533051e5bca8659b958c9f485be5bb039987d3f0383156a5deae0caa8ce55282aa4b6dfc8ecfcf8c95042664a656c6f569188786b1e2d9ca981887c6343a8b12c3468d0c94e655ab90d0b48426fb8b07d167e31b02ce4941175c06964feda1354af33460f9d0f1d2dc82341da681479dd4622317dc2c058a3cdd646f59b41215759c21f506169a87c3f6069915f8a311a5beede7a99752d7011af8594e7607e441720d275c6d84e29d13e43a8e927099c48bd9f15112b66de414fb3ee98a6b9a785fa7c62697a885c02f7adb35512e50adb1369a25617c749c44576137cd2914943dceef719e392d15209a4aba060df24c64681cb9389f4749743e3b9a22a31dd1c51ea1c8f8dfd31b2179dcb44eebf6db68f96eabbf075cd1b26e11dbee406cb2dbfd47042e5e4726978b30fe4bbaab18729050b1efc787e036f0ddf3d92f3342719d514569fcc75d61aad16012ba9de1ebb6ba17b6e37a6ee33282a5fe14f3fd606f4c93a3c9086ba8f44b43dd32639f9d58ad5e4118c451cfa2d91f8c3e03804c436d4a040000",
    ],
    [
      "ETag",
      "Hc2ataB15L5WkQd3e8h0gw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1640201729937"
  )
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
      "2d90514fc2301080ffcbf9ba996d22644b780083623215d1f9620829dd6d0cbadd683bcc42f8ef5ea72fedddf5bbbb2fbdc0b16a7248605795a70e757f53a27d77c11a4da7ace1aba5c620788056944c2e57c7e3fe45e993fc7acad478714efb5c95d3291346eeb116905ca0a850e50692ef0b34a2466edb6ef5309131dbb7aef298becd3e39ad2977e96b96a6b379ba80ebe6eac181766b2c506323d10d6c351d50da67e76a44dd2af40d755aa281011e1e4a4d5d2b3491cf157fe487e3511005e1248ae3bb09738aa4b015358c661fc05b2c59a1d6f4c3a61032a08790a58be13c7339ba8f6fc3c8496dfef9796fd1ac34f16e836e6d380efe241ec8895916b6ba430fa4e00f59561692422883d75f41a3efb36e010000",
    ],
    [
      "ETag",
      "HPkkhMlrqcVGUl6EvLydlg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "08000000000002ff1dd0c97282300000d07fc9591d2022a537422a9b4bcb62810b03316ac4259290163afdf73afd84f77e404d0815a292f796dec02b186ac39e9159a339b9d2c6744b23ff72be9c5ca98eabf4e09ce0f22061b74ed84bb620ee23cf7a8392dbaab5a718af76e221fca96c9477a471ed2aaf501c319fe4e516b5d161fc806c9aa0938bd83db4fd30d7e333b6e785310f441c5589a7ddae4d6a625a58f32e10240b429d0f42930e66ce5ee18db3c0efe9e60c43fe69955a71bd785fe67ab374c71dcade0269919af0a0b72c0daaa44c134317bb01466b63b18f5b021bd4eb4cf03ebf86888009a0df9c755454ece986a66d4fc07f4225074e9f1388d61dedc0ef1f7f2f48af23010000",
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
      "Wed, 22 Dec 2021 19:35:35 GMT",
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
      jobId: "grouparoo-job-5-1640201729937",
    },
  })
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
      "9b3014fd2bc8fbda04f2209048d11a25748d96901548ab699a903117ea96e0149b3e54e5bfef629aae55a5f613b6ef39f79cfbe099dcf232251392f0fcae86eae9db8d48c8090145737c3d0b44e1fe840b79cd1315ce37f6e3829a0fd3292278c39274b72fa023455d3190936dd8cd2b51ef692544071375ec4e6f34b4fa56cfe98fc7030769128a6cc5cb5b245f2bb59713d33c4a777321f202e89ecb2e13bbd777f3be6fee2b71034c49f3bda28922d2fc54f37b2118555c94d36d88fab5842a861de5053af84f4c93d3f799bb9ceeba3982ef3903ca98a84bd5b8c2144c9419cfeb4a67259367a25dbe3990d05b79f3c860a2a877655cd21d9c18295534564f7b30ce82cdda58fa679b603d8b961b3f0ee7e7de7ad69d6f56dbb51f1a57e75ee0198a260568ae31354ef5cdc70beaa720152fb57ad43c37ca2ffd597e1c4a434069096d3076ac11edb9d638c9128765eec04e320b92c44d1c9b0e128b8d87304c13a0c8d3a29a454b51f66104a96d6731b84e1a0f9933881397baf1c04d5d3bb3fb4e3f1b91c30979a8b88205977b2179db2172152c232f8e82ad3f9f459e2e21a375a116adb1a680b71e1516185b560f819fd47568a25ca05ad3f2a51f79c16c1e2d2fbd76ca2bc8297b0aef70ce192d24209a56d84005d55aa4d834e2cfd6de02c17a6abf8e4149267f9e49d3f7c6c99bb6bfd2231c626359e92f09a360e9ffd0768e884b5ad41a72df1e48054c54297a3efc451c6e699b835c6cbde037699f02c8a082927d3d4f04ebc057ffda71f3118abb8f2a52e11d9787c9468355d02e11d7b51ed9037b60db44832bf521361c8e8f2d6b7234196107a57a29a8dd7cacb315abe52b0883387f5fb7eaf00fcbc502f777040000",
    ],
    [
      "ETag",
      "FRol8KeQshibtSCO5xDa/w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1640201729937"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d93516fda3010c7bf8bf71aa45028b491fa001beba2a5c042e8cb5445ae7dc9cc1cdbb31d2a84f8ee3ba71dabd649e94b7277fe9d72f7f73f47f253284e12f228ea5f2dd8c3871afcb710e4e05ae91dbe8c560e4844c0d31ac96a1d1f9ed2ddd77cbfb8bf1a6d6363f82daf6f6e9070ec0734942447520990dc91e4fb9128da00b6312ddb46955d16117f30a1b829f274798b79a379c897db2c9bcdb3053945e7464e3d2d3bfe1d6d0fa788ecf4630e1558500cc22cc6ea1d309f86351d6d8c8481d3ad65e048077707b5d5ada156eb0156069783e1641c5fc4c3e9c5f5f5688a9cd48c7aa115a2db0d8e47bcf654e6fa099724c31112b68b71e1aa7beeb12e78b74808d365311977f3bd062863ba55beec052b619d7f16ef0ff822c2bfa4a4ef04f1a684ec836a501c6c1f254c4939b7e05c2fa95d498d3963f3d52a7bab8ae2560bde0fee450f20fdfe0c7cce56b3ff498bfefaabd5a759b17843388fae3923457ab7d814b3bb75e01e5e8c303f78706babd1540e829f86f1f8ea723a899f2df65107dbe177126f5b8808a3f8a77c119e2415950e4ebf01b04a3adf87030000",
    ],
    [
      "ETag",
      "fP0ywIjKRvEV83U0ppdGdg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT `ios_app` as __result FROM `records` WHERE  `id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-6-1640201729937",
    },
  })
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
      "30",
      "10",
      "fd",
      "57",
      "22",
      "ef2b6dd32669da4a1563256c914a616dca0f4d536b3b97cc90c4c1766008f57fdf25a10c84049fe2f8debb77efeefc446e451193096122bdab403d7eb9918c1c103034c5db6347dc5e5dfffdf63863fed5c99ae53789ef3c4ca78810354bd3bccca0a365a538e8c97ad54d95ac4aaaa4ec60a2ceb0d31fbaf6c0eefb83f1d8f191a6214be6a2b845f21f634a3de9f5f6d2dd54ca34035a0adde5327fb9efdd0f7aa59237c08deebd55eca188ee7da87998494e8d90c574bd42fd4a83da404e458615fc27c6ecebdbcc5d41f36e8ae07bc181722eabc2d455610a2e8b44a4956ab292c91369aa7c7520ab601ecc226b2ba4ded0b2dc5a545b9b8d025d65c63a599e9d5a5b055caa586fadcb1fc132b0101b6fada97568cdc3d330b2faa8138336a2685422ca32a8159efb10be6f7e4da0866a68831bdf1ed2fec81eb384f93c19391e4b6c606cc47c8f3acce66317dc9801459ea9b3372c5ac8c2f31336f246e0ba9c723fe676328c5d9f79238f8d3dd71bb9781cb8d423bb03f2a0848163a14ba945db0d72b90ca360132dd78bd951143436128abe8fdbe26a13afeb34687263dbb5df0fbcedeaa890a856b7375c44c1f268168517413bd139a4943faeee70a609cd34209a2a9a8301752a636c1c393f5b855178b6389a23a319d3f91ea1c9e4d7d37f42f458369d36cdb7d61aba8dfe1e7041b3aa41dcb707d227bbdd6f44e0f2b564f2731d2caf497bb584041414fcf3f121b8097cf684f60b8d505c6954d106ff7157b8ae35b882766744de54f7cc76468e5b7719c1cabc8b798eb36f4c9da3ce083914e6d950bbd0e8b315abf40b088338ea45b8f88ed17f559aa2894e040000",
    ],
    [
      "ETag",
      "D3ikXYxByCb7XFUbmjf73w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1640201729937"
  )
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
      "51",
      "6f",
      "82",
      "30",
      "10",
      "c7",
      "bfcbed1512d44d03890fb2906c91c9c4f96016636a3d180e38d6966d84f0ddbdb2bdb4977f7f77f74b7bf82cea0b04702ef2af16557797a3d9da2245dd9646f3d550ad111c402372260fc9dbfafa40dd219afdaed29774ededa276bb5c32a1e5075602821eb202cb8b86e0bd875a54c86da7931a273266bac6266192c4d16ac34145171b6cf671bc0ae30886e3e0c095ce2966a8b0966847368aae28cdb3b5d5a26a4a7435b54aa286111e1f72456d231491cb893b7727f37b6fea4d1653df9f2d982b490a5350cde87e07bcc59011654a3fec0a1306d458b276369edf1c1bd5a2553afed3616750bf2ae2cd1aed52dffb3378246b65d8d6b6382005ffc7536120c844a971b801f58530016d010000",
    ],
    [
      "ETag",
      "YOTKj5oyYE3xARMRK0SEuQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "bb",
      "f45b0da8a0ec6f2850033a11a2e24f83b53a5b2a4d4b6b71d9dd677684f77e408d31510a752d230ff001fa7a1c8cf0e8ec7c1e8df32abfc8ab851b0f69033babab7c4723d324978dd06c3a64f37c75bdc65e0687410af92db2f9963f6d9daf939822c1dc97bf37b690d766d699ac17725f382bcbbefdda5f049ead7d955304f742b7cb27e55ed1a07231ed879cb954ce383b5de0814a333eca032a62c2bdf49014ebf1aed5e5639bce5d9576e82c271bccb41f65b80f27f79be639345873d99e8e5955a58ec03a5a85377749146d662ad82a5e95543ec100102bee9228747fbb275e100cc07f02ea7a41de1321a92591e0f70f6372012923010000",
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
      "Wed, 22 Dec 2021 19:35:39 GMT",
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
      jobId: "grouparoo-job-7-1640201729937",
    },
  })
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
      "536b6f9b3014fd2bc8fbda2424900791a2354a698394908e9056d53421632ecc2dc1a96d3a5555fefb2ea6e95a55ea3e61fb9e73cfb90f5ec803af323225292f1e6b90cfdfee454ace08685ae0ebd25b5683ddcd6db4babeba2b36e5fdd5e5a428663344f086a5e8fe504247895a3250d3ddb65b48511fa814a283893ae34e7fe4da03bb3f1e789e33469a82325ff1ea01c9bfb53ea869af7792ee16421425d003575d26f66fefbda741ef20c53d30ad7a1f157b28a27a5f6a7e2f05a39a8b6ab6dba27ead4026b0a7bc4407ff88597afe317397d37db740f0136740191375a51b579882892ae7452d4d56327d21c6e5bb03d9fa2b7f115b4c94f5be4a2aba87332ba39a26faf900d665b4595b4178b989d6f338d884c976b1f4d7f3ee62b3daadc3ad75bbf423dfd2342dc170ad99756e6e215e503f03a57965d4e3e6b9517eed4ff079280d01a515b4c1646c8f687f627b699e8e593e7186696e439a4ed2f1903aa9cd3c17dc2c058a3c236a58b4121543ac93b141e28e6c27715dea2634f368e266c351d6cf533a184dc8f18cfc915cc3055707a178db21721b05b19fc4d12e5ccc63df9490d3bad417adb1a680f71e351698d8761f815fd4756ca25ca05ad3f2208cfd68be88831bbf9df20a0aca9eb78f38e79c960a104d253650835c8b0c9b46c2f9dabf40b099daf529a8c8f4e70b69fade3879d7f6377a8c436c2c6bf325db380ac22b63e784b8a1656d204fed8148604266e8f9f80b71b8a56d0ef263e74777a47d8a20070915fbff3c116c02fffbd74e9b8f50dc7d54511aefb83c4c351a4c42bb44dcd47a623b9e3bf288014bfd2936f49c53cb9a1c4d46d843a55f0b6a371feb6cc56af506c220ce3f34ad3afe0579a9f1ca77040000",
    ],
    [
      "ETag",
      "H9Hn2UVWRLPGYgOljGF8gg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1640201729937"
  )
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
      "9a4a6de95a88c4430b1d744a5bd68607865064ec4b3038becc763a5555bf3be700058d49e125b93bff4eb9fbfb9f1d7b5246b298ddabe24f0d76fbad00ff2b042b70b5f68e5e151a072c62e0794164fa737139bf994f1ece6f6cffc95cb8df757e5c9c9e12e1c403949cc53b962bd0d2b1f876c70c2f81da04eaba34599345cc6fab505ca7abd9e282f21265c817d749329e2453b68f0e8d927b9e35fc17daeef6117bc4fb15e460c10808b354161f41f85958d3f1b2d2d071585b018e3570735058ac2b6e113b54e98c3abde1a0dbeff646fd9393a311711a05f70a0da1d76b1a8f79f45caff02f2dc97a4744d826a685f3e6b9a1ba92cd22219c2dd2e1a099ef23c085c0daf8ac15cc9575fe45bc37f055847f49cdbf08d24d29dd06156024d8364a551997d28273ad24ba8c57d5019b2c97c967558cb4a8643bb8512d80f69b03f023598eff272df9eb5dabf3713afd44384fae3920e96c3e5da7e3f955e0ee5e8d30d97a705716c9540e829f7addc1f1f7d1b0fb62b1330cb6a3efc4ded61031c1e94fb9549ec539d70ef6cf8c2b7a8f87030000",
    ],
    [
      "ETag",
      "TJNHMYMBhDYr2knGsZuf8g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT `date` as __result FROM `records` WHERE  `id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-8-1640201729937",
    },
  })
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
      "ff85535b4fa34014fe2b64f6d5b6406981268d6b2abb4bb6ad2ea51ab3d9b4c370c051cae0cca031a6ff7d0f60bdc4449f18e67c97739b2772cbcb944c48c2f3bb1ae4e3b71b919023029ae678ebbbd9a5fd3b9af18bf2dacdaaab50295b3c4ca788e00d4bd15d55404f895a325093f5aa9f4b5157540ad143a19ed7b3c68e699b966bfbfed0459a82229bf3f216c9d75a576a32181cacfbb9107901b4e2aacfc4eee57e706f0f2a296e80693578ef38401335f8d4f3b8108c6a2ecae97a85feb502b9811de50566f04a4c93efef95fb9ceefa3982ef3903ca98a84bdd6485124c9419cf6bd9aa92c91369b37c7320ab601ecc62639b520d5b832a63b391a0ea421b3fa2b385b195c0844cd5d6b8fc154481616c79ba35a6c6b1310f17616c58689282d2bc6c2d629a14d0c83f3721fcd8f986403555d00537ae39a69667fa4996b82cf386a324332149bcc41dd1616232df01274d80224f37ea2d8b96a28451e2dbccf632f09cd4a32c732c2f757c0ba897586099908d86ccb1c6647f441e24d770ca552514ef5a412ea3300e3671b45ece4ee2a02d23a358f769975c53c4db3c3516b931cda6de4f6adb37512ed0ade96db88c83e8641687174137ce39e4943daeee70a0192d14209a4aba030d7221526c1c393f5b857178b63c9923a39dd1f901a1c8e4efd32b217eacda4eebf6db788d9dd6ff00b8a045dd22eebb03b1c87eff0f11b8791d99fc5907d115e9ae22c84042c9be1e1f82dbc057efe7b0cd08c57d4617a5f11f7785a9c68349e87686efdaec9ed98e39b43dd282a5fe10735cefd09846a351841d94fab9a06e9bb1ceceac562f200ce2a897e1f22746ff030fef51a34b040000",
    ],
    [
      "ETag",
      "97fW2KRCiVnh7fpYIss2ow==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1640201729937"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff2d90514fc2400c80ff4b7d65c93615dc121e404924a21184076308398e6e0c6febbceb2093f0dfe94d5feedaded7f6cb9de1bba87690c2b6c87f1ab4ed4d8e3cf7c1025d63d8c95553e5107a80ac722193d3f4f3f730ce5e8c5ef2f135d9dfb783d57c3814c2e93d960ad23364059a9d83f4eb0c952a51da361bdb4d148cdbda579e46cb896425ed7cf6b69acd46e3d9042eeb4b0f0eb45d6086162b8d7e5e6de9809aa75ed5a9b23618386aac46071ddc3de4969a5a59a2402ac14310f5efc2388c067192dc0e8433a415175409bafa00d9c2c4ca2ce824a2100960bb509cb3ee3c4a39960941180761e4c5d6ff3de396d1bd5b92fd0efdeaa81ffe893c9297639166db600fb4923f792e18d24c1987972b6f809ecd71010000",
    ],
    [
      "ETag",
      "9wIYzjBfKlcTtvM9h5y7UQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "0002ff1dd0dd6e82300040e177e9b51aac15e9ee80884681c1c4417b4380160551b0e5d765ef3eb31738c9f97e4092655ccab8ad6ffc013ec09440bcc816a9a247bdf20a1c64f1bcbbe4b6b33f171a9c0b2a7db55eb1921b8798e00e3e6bcef43b7a941116ad936ba420785955a8d4f62227e6a5baba08f9fe2eeb9ec7c1e99331d485493677dc2f0b6ad6d7f3781ce16df3f224e5a75c8d489d840aa556a3b02ff66af1b24b19de9724ecd65aa650e6551e525bc7c7b6abda680a0625358af1db2207f999ace5fcb033dd2172a7510fb5a345bd6dba25eabb047b18dced2676b670cee28d0f66808f4d21b88c8bf7f76a8df10cfc23c4edd4f0b784c113c105f8fd03ae08cf1023010000",
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
      "Wed, 22 Dec 2021 19:35:41 GMT",
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
      jobId: "grouparoo-job-9-1640201729937",
    },
  })
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
      "db",
      "4e",
      "e3",
      "30",
      "10",
      "fd",
      "95",
      "c8",
      "fb",
      "b8b449daf4924ad552950095da7449d3b217ad22c79d640d695c6c078450ff7d270e654148f014db73ce9c33973c915b5e6ec988a43cbfab403e7eb911293921a0698eaff1fc627935fd156fa21fb71bcf05f6f5fac1b91a8f11c16b96a2bb7d012d252ac9408dd6ab762e45b5a7528816266af92db7ef391dc71d747cbf3b409a82229bf3f216c97fb5deab916d1fa5dbb910790174cf559b89ddcbbb7ddfb1f752dc00d3ca7eab68a388b23fd4fc5608463517e578bd42fd4a814c604779810efe13b7e9e9dbcc6d4e77ed1cc1f79c01654c54a5ae5d610a26ca8ce7953459c9e8891897af0e6415cc83696c315154bb3229e90e4eac2dd534d18f7bb0cea3e5c29a85e7cb68318967cb30594d2f83c5a43d5dced78b70655d5f065160699a1660b8d6d83a35b7102fa8bf05a57969d4e3fab9567eeecfecfd506a024a2b6882c9c0e95377e8f869960e5836ecf6d2cc81341da6831eeda60ef33df0b62950e41951c3a2a528a18b44bfd74f3a3ef889d7779d24edf59dc41f0cb35ecfefbb9e9f92c30979905cc319577ba178d321721dcde22089a375389dc4812921a355a1cf1a637501af3d6a2c30711c17811fd475a8a35ca05addf2591807d1641acf364133e539e4943daeee70ce192d14209a4a6ca006b9105b6c1a09278be00cc1666adf8f414546bf9f48ddf7dac9abb6bfd0631c626d599b2f59c5d12cbc30768e880d2d2a03b96f0e440213728b9e0f7f10875bdae42057eb20fa499aa708329050b2cfe7896013f8ec5f3b6e3e4271f7514569bce3f230556b3009cd127153eb91edb95db7470c58ea7731afdb3fb6acce5167",
      "841d94fab9a066f3b1ce46ac522f200ce2fc43d3aac33fe01f918f77040000",
    ],
    [
      "ETag",
      "TLGOQCZTVRXkV41ec+Ww0Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1640201729937"
  )
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
      "ff8d93614fdb301086ff8bf99a4a2d74ed1a890f2974102db4a50d9a044291b12fc1ccf165b653d455fdefbb0456a68114be2477e7e794bbd76f76eca7329285ec4115bf6ab0dba302fc7513acc0d5da3b7a55681cb08081e7059167dfebebf2c762babcb87d34f07c3ec4dfb3383a3d25c2894728390b772c57a0a563e1dd8e195e02b509d47569b2360b98df564d719daee2f905e525ca269fdf2449344d666c1f1c1a25f73c6bf94fb4ddef03f6840f2bc8c18211d0cc52597c02e1e3664dc7cb4a43cf616d0538d6c2ed4161b1aeb845ec51a537e90d46c3fe717f303e9e4c4ec6c46914dc2b3484deac693ce6d173bdc2675a920d4e88b06d4c0be7ed73437525db459a309ea7a3613bdfbf0017026be3b34e3057d6f917f1fe82af22fc4f6afe49906e4ae92ea80023c17651aacab894169ceb24d165bcaa0ed874b148deab62a44525bbc18dea00b4df1c806fc922fa485af2d79b56e7513a7b47384fae3920697c355ba7d1d5b2e1ee5f8d30dd7a704b8b642a078d9f06fde1d72fe351ffc56267d8d88ebe137a5b43c004a73fe5527916e65c3bd8ff015f080eeb87030000",
    ],
    [
      "ETag",
      "CKuQmWOBPGZhnewD4ozEIA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT `stamp` as __result FROM `records` WHERE  `id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-10-1640201729937",
    },
  })
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
      "5b",
      "4f",
      "e2",
      "40",
      "14",
      "fe",
      "2b",
      "cd",
      "ec",
      "abd01bd29684b8ac56b709a05b8ac66c36309d9e76474b0766a66e8ce1bfef692b5e62a24f3473becbb97c3c917b5e656444525eec6a908fdfee444a8e08685ae0eb953abbd8ddcea83b092ec224bd2abcecc7f9643c46046f588a6eb625f494a82503355a2efa8514f5964a217a28d4b3ad9e3d1c588e657b4e10b81ef21494f99457f7c8feabf5568d4cf3e0dd2f84284aa05baefa4c6c5edecd07c7dc4a71074c2bf3bda5892ecafcdcf4a4148c6a2eaaf172810dd40ae40a369497d8c22b334bbfbf97ee73bae917087ee00c2863a2ae74d3164a3051e5bca865ab4a464fa46df3cd075984d3f03431d64aa3e6daa0ca58ad24a8bad4c6797c3933d6129890995a1b373fc338348c35cfd6c6d83831a6d12c4a0c1b5d32509a57ad4742d3121afde735441f97df10a8a60abae2cab386d4f6ad20cd538fe5be7b9ce616a4a99f7ac7d44d2d160c6090a54091a71bf596452b51b9be17e4b99f7956e0e7c3c0f16d0872177ce6042e0c5d6718b839b50639d91f917f926b38e36a2b14ef76416ee228095749bc9c9f4e92b01d23a738f759d75c33c4db3e350eb9b2ac66de4f66db37552ed0ad596e344fc278729a44d76177cf2914943d2e7678d19c960a104d25dd80063913193441be5c444974399f4c91d11ee9ea805064f4fbe995903c6edb4debf6b7f11a0e5aff03e09a96758b78e83e884df6fb3f88c0ec7564f26b19c6b7a47b8a21070915fbfa7c086e0b5ffe850e79462c261a6d30659a6358986a4c98842e347cd3b6f7cc1e38b6ed90162cf5879ae37987cd341a8d226ca0d2cf137579c6413bb35abd80b088b79e",
      "47f30bacfe0768bc67b94f040000",
    ],
    [
      "ETag",
      "PsDGqYMa3A9GETbPg7dBFA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1640201729937"
  )
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
      "90dd6e82401046df657a2b2d58c142e205b624b55163fde94d63cc0a03852e0cee2e6d8cf1dd9da5bdd99d7c7b66e6642ff05d361944702c8b5387ea7c57a079b7c51a75278de6aba546230c008d28988c655205a7eaa482e58b1c3f7c046f01e6f164c2844ebfb016105d202f51661aa2cf0b34a2466e3b1c543f9131736e6db29d2d92cd365eac38aa29b3d172379fc7d37902d7fd7500151dd798a3c226453bb45554616a66d6578bba95e868ea548a1a7ab87f281475ad50440e278ee73a5e307287ae371e86e1e3984149a9302535ccee36c06b0c1921d7f4cbbae031a0fa92cdf3fefcb1f1bdffe4fa7ee885a324b472fbffb6e9d9a05e2962078d76bd17b87f32cf64050d8b1bd5e10052c19ff35a1a887221355e6f540671e17a010000",
    ],
    [
      "ETag",
      "AlEj6qjqr6NDl7/V6J6efA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "d0dd5682300000e077d9b5790041a23b7f52170c348620373b8b3618534158c2eaf4ee797a84effb01b42858df13d54876052f4053cb9b16d30f6391dd8d6f8c485cf74e7a2cc3265ec475fd34e62712928c9f351dcda61588d6de505f9ee7ebc1f7eff6deadfa5287b24776ab651ef869b774a94f0369a998bb5985b9125fcb6a37cbd801416298d5c8f61d1e2a7e4c08125b1bca03b4e69eb309cc8b54c9c936936dfedace383cf3ab4f6f46eee4d7e1b0e3e5061f637cb33ea344be85a250e21df5c1ce9bdb51baaf536dbb306ad080ad6058ada053c108a97285d65ff824b40413c0c65674ac27e2e19e399e3701ff0944e9963d26968c76ac03bf7f2ce0d88623010000",
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
      "Wed, 22 Dec 2021 19:35:43 GMT",
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
      jobId: "grouparoo-job-11-1640201729937",
    },
  })
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
      "536b4fdb3014fd2b91f795b6495bfa92aa5195009dda74a429689ba6c8766e82591a07dbe98450fffb6e1cca4048f029b6ef39f79cfbc813f9238a844c0813d94305eaf1cbbd64e48480a119becee6e5b7d05b4aef6a9fdefd4cbabe48ae2fafa75344889aa5e9aecca1a565a538e8c976d3ce94ac4aaaa46c61a296e7b5bc41dfedbadeb03b1ef786c8d390a74b51fc41f69d31a59e743a47ed76266596032d856e73b97b79efecbb9d52c97be04677de4a765045773e16fd9a4b4e8d90c574bb4103950615c38e8a1c2dfc6726ecec6deab6a0bb7686e0bde040399755616a5b9882cb221559a56c56327922d6e6ab03d9f84b7f1e395ce6d5ae880bba831327a186c6e6b104e7225caf9c4570b10e57b368b10ee2cdfcca5fcddaf3f572bb0a36ceed951ffa8ea12c07cb75a6ce99bd057841fd04b41185558feae75af9b9418bf763a90928ada109c6437740bd913b66291bf274d43b65a90b8c8dd8f094f698cbc77de8270c28f2aca865d142162c195018521a03f7c6711f52371e79836e3c4e46de887b8c757b8c1c4ec85f250c9c0b5d4a2d9a0e91db7011f971146e83f92cf26d0929ad7273de18ab0b78edd16081b1eb7a08fca0ae431d1512d5ea962f82c80f67f36871e337535e4246f9e3e601e79cd25c03a2a9c2061a502b9960d348305bf9e708b653fb7e0c6a32f9f544eabed74e5eb5fd851ee1106bcbc67ec9260a17c1a5b57344dcd0bcb2907d73200ab854097a3efc461cae6993835c6ffdf007699e42484141c13f9f27826de0d3bfedb8fa88c5e547196df08edbc3752dc215345b246cb14776bfe70d07c482957917eb798363cfea1c7546d841619e2b6a561f0b6dc42afd02c2202e40607b75f80774a8d0f67a040000",
    ],
    [
      "ETag",
      "ACpJR1Lo1HvfhZd2EidQGQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1640201729937"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d93516fda3010c7bf8bf71aa484525823f5015aca90026490beacaa2237bea406c797d90e13457cf75dd28e55eba4f425b93bff4eb9fbfb9f23db492d58c89e64f1b30673f85280fbde046bb0b572965e156a0bcc63e07841e4c2e26e7bfbb2d8c5f1dda6ff6376837e3c2baeaf89b0d933949c8547964b50c2b2f0e1c8342f81da325475a9d336f3983b544d7193ace7cb19e5258a265fde47d178124dd9c93b370aee78daf29f687b3c796c8b4f6bc8c180cea099a532b885cccd9b352d2f2b053d8bb5c9c0b2166e0f0a8375c50d628f2abd20e805c381dff78351ffeaea6244a0c28c3b899ad8fb0dcdc71c3aaed6f88bb664c10511a68d69e3bc7deea92e45bb4913ce97c970d00ef81ee05986b5766927984b63ddab7a7fc03715fe2515ff24485725551754801660ba2859a55c0803d6769268535e55676cb25a451f55d1c2a014dde05e7600caedcfc05db41aff4f5a32d85fad6ec7c9f403611dd9e68c24f3c574938c1771c33dbe19617270606383e42a0b8da1027ff0f57234f45f3d76838defe83ba13335782ce3f4ab7c938e853957164ebf01bbcbaa4488030000",
    ],
    [
      "ETag",
      "MsokjDzMkPPFS2ZGCo0PGg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT `first_name` as __result FROM `records` WHERE  `email` = ? LIMIT 1",
        types: ["STRING"],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-12-1640201729937",
    },
  })
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
      "00000002ff85536b4fdb3014fd2b91f7953669da92a45205083216a9b42c4d61689a5ac7b9c90c695c6c0756a1fef7dd3894c726c1a7d8bee7dc73ee234fe48e571919919417f735c8ed975b919203029a16f8fac37727e7b6144e6ac7dbd093e2d1b9891ec76344f086a5e87a534247895a3250a3c5bc5b48516fa814a283893a3db7d33b1c38aed3f3dc20e87bc85350e6135edd21fbb7d61b35b2edbd76b710a228816eb8ea32b17e79b71f5c7b23c52d30adecf79236aa28fb63d1a35230aab9a8c68b391aa815c825ac292fd1c22b334b8fdfa7ee72baee16087ee00c2863a2ae74630b533051e5bca8a5c94a464fc4d87c7320f370129e26d62ae752e96545d7b0b2a8b2964b09aa2eb5f5359e5d582b094cc84cadaceb6f611c5ad6cad85a5963ebc89a44175162f5502d03a57965b4129a96d0e83cb723fa7f080d816aaaa00d2e3de790f67c2748f3d463b9df1fa6b90369eaa7de90f65387050318642950e4e926bb61d14a54c31479aed3cffc1c7a7d0faf01f5dc6ce80e7c3ff7dc3ef6c41ffaec90ec0ec8a3e41aceb8da08c5db9e90eb384ac265122fa6a7274968cac829967ed69a6b8a78eb5363914bc769eafda0b65d13e502d59a2647d3248c4f4e93e82a6ce73a8182b2edfc1e279bd35201a2a9c4de6b901722c3c691cbd93c4aa2d9f464820c33accb3d4291d1cfa75742b2dd984e6bf325f3248ea6e7c6c01e7145cbda401eda03815b5c16c195730c7f8c6fb32ebbdd2f64e162b619c9f74518df90f629861c2454ecf39922d8043efdbff6cb8e585c7794511aefb8414c35224c42bb497cdd98d9b307fd200888014bfd6f6ce004febe5d4d8e2623aca1d2cf15b5cb8e85b662b57a01611017606a3ab7fb0bdd1f14926c040000",
    ],
    [
      "ETag",
      "X82LG/ro0b/RyE7row0YIw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1640201729937"
  )
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
      "ff2d90514f83301080ffcbf90a11a61147b207a7539710e2987b32cbd2950399c0415b5c90f0df7765beb477d7efeebe74809fa24e21846391b71daafe2647b3b14182ba2b8de6aba15a23388046e44c7a8f742e637af1db26507d7b9bfc6de46bbe5830a1e5375602c201b202cb5443f835402d2ae4b6c3414d1319337d632bdbcf641dbf715e516af37817454fcb6805e37e74e044c7043354584bb4131b452794666d65b5a89a125d4d9d92a86182a7875c51d70845e472c5f567aeff70efcd3c3f98cde77701832549610aaa99dd6d81d71832a24ce8ccaee033a0a690b5b3e9fce5f24a15689df6fff4b237a83f14f16a8d76ab773578266b65d8d6a80e1d9082bfe3bd30d77cbc00ad104a6f6b010000",
    ],
    [
      "ETag",
      "08owlNoD1qp7ryq/RzQcFg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "d04b7282300000d0bb642d0e1514d21da02958285f8bb26122442a08c104b0a4d3bbd7e911defb01b82808e7f9401bd2815730e3155c16cbb36c1c2759245ea830847c5587e1b1b563b5d3664ab3032feb2a583f36c6dcf08a37dbca922c33ac650e3df890bccfdd700b92a1aaa2d952e9a5d44cd727225e6d90707a47b859a750e1a9a2d6a940d2fd1d77b06426e9ef2f452d5a6f0a6f4e230f69b4ab3fc6ad3795810de1a9d0b3f33a998c408c23d59cfdde95b223ea574eec30a2bf9da6ba1967cb609b44fe422d25a98cfca8b5250bb3264c4fb6e15ef23e9d228c5dda1ec00290effeca08cfaf4fb7b2867001fe13f261eec973c2249811067eff0014d8411e23010000",
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
      "Wed, 22 Dec 2021 19:35:44 GMT",
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
      jobId: "grouparoo-job-13-1640201729937",
    },
  })
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
      "000002ff85535d6f9b3014fd2bc87b5c9340a0498814ad514ad74809c90869554d1332e6c2dc124cb1c99455f9efbb86a66b55a97dc2f63de79e733f78220fbc48c898c43c7baca13a7cb917313923a06886afeeddcddadcb31246fbf5d7c541ddaf87e5dfe9648208ae5992eeca1c3a52d4150339de6eba5925ea925642743051c7b23bd6c031fba635ecbbae3d449e843c5df0e201d9bf952ae5b8d73b69773321b21c68c9659789ddcb7b6fdfef9595b807a664efad640f5564ef63d16fb9605471514cb61b34504ba822d8519ea385ffcc24be789bbacbe9ae9b2178cf1950c6445d286d0b533051a43cabab262b193f91c6e6ab03d9780b6f161a4ce4f5ae880aba833323a18a46ea50827115ac96c6dcbf5a05cb69385ff9d16676ed2da7ddd96ab15dfa1be3f6da0b3c43d13887866b4c8c8be6e6e305f513908a178d7aa89fb5f27383e6efc7a209282da10d46437340ad91e9c6693c64e9c83e8f5313e278140fcfa91d9bcc75c04962a0c86b441b162d44e1da3072a99d44b165db913348fa11a52388683f6626752c702c971ccfc89f8a2bb8e4b21492b71d22b7c13cf4a230d8fab369e83525a4b4ced5656b4c17f0daa3c20223d3b410f8415d471de502d574cbe77ee805d35938bff1da292f20a3ecb079c439a7349780685a610315544b9160d3883f5d7a97086ea6b63e052519ff7c22baefdac9abb6bfd0431ca2b6ac9a2fd984c1dcffded839216e685e37907d7b2015305125e8f9f80b71b8a66d0ef263eb0577a47d0a20850a0af6f93c11dc043efddb4eab8f585c7e94910aefb83d4c6a115641bb45bc29f6c4769c81a57b8fe04abd8b0dfb8353cf740e9d117650a8e78adad5c7425bb15abe8030880be037bd3afe03f2c61f997a040000",
    ],
    [
      "ETag",
      "9YVP0vcpe8vP+LytjP7pzA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1640201729937"
  )
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
      "79",
      "4d45b2869646da430a1d14656d49b30784a6c8b52fc1c5893ddb292a55bf3be76c14c490b297e4eefc3be5eeef7f4ee4bb683949c84ed40f1d98e3ab1adc671fe4603be92cbeb46a2d908080a33592b378f7e541bfe64dbeff1417ec677873dcecd2eb6b242cfb060d25c989540224b724f97a222d6d00db98925dd3967d161077d4beb82df2e5ea03e68de23e5fdd65593acf16e41c5c1a3975b4ecf917b4dd9f03b257bb1c2a30d032f0b368a3f6c0dcd2af6969a3258cacea0c034b7ab83fa88dea34354a8db0328ac6a3681287576134bd9acdc65304a562d409d5227bb7c5f988538eca5cfdc02d493446c2f4316e5cf5cf03d605ef37f1e172554ce27ec0bf01ca98ea5a570e829530d63daaf71b7c52e15f52d217827855420e4135b41ccc10257449393760ed20a96c49b5be60f3f53a7bae4acb8d127c183c880140bac305b8c9d6e9ffa44583fdd1ea7d5a2c9e11d6a16d2e48b1bc5d6c8bf476e3b9fb2723cc8f0eecc6287495056fa8288cdfbe994ec2478fbd53de77f89dc4990e02c228fe2a1f85234945a585f32fc446c78488030000",
    ],
    [
      "ETag",
      "94bYqp/dmRjJ4Tcz0FyPbA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT `ltv` as __result FROM `records` WHERE  `email` = ? LIMIT 1",
        types: ["STRING"],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-14-1640201729937",
    },
  })
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
      "e3",
      "3010fc2b91ef2b6dd336e94baa0095dc11a9b490a6a0bbd3a9b59d4dce90c6c576ca21d4ff7e1b87f210127c4ae29dd9991d6f9ec89d281232224c64f725a8c76fb7929123028666781a00f3afd9dd155d2657fad7e5f9f96eb2731fc66344888aa5e9669b4343cb5271d0a3e5a29929596ea992b2818d1a6dafd1ee796ec76df73bc361b78f3c0d793a15c51db2ff1ab3d5a356eba0ddcca4cc72a05ba19b5c6e5ece5bbb4e6babe42d70a35bef255ba8a25b9f8b1ee792532364315e2ed040a941ad6043458e165e99093b79dfba29e8a6992178273850ce655998ca16b6e0b24845562adb958c9e88b5f9e6852c826930899d756e766b876a67b552a0cbdc38dfa3f985b356c0a54af4dab9390fa2c071d6d6cfda193bc7ce34bc0863a78d320968230a2b1253964325f09c43f831fd8a400dd55017577db747db0377c852d6e7e9a0ebb3d405c606acefd32e73f9d0032f61409167aaee96450b5950dea15ebb97bafe204991d3033ee018679f0d52b733f03bbd4ed74dbb3ed91f9107250c9c09bd955ad461909b288c83551c2d6793d338b063a414473fabcd5543bcf56970c895eb56f37e32dbbeaa0a896a55bae12c0ea2d3491c5e07f5854e21a3fc71718f579ad25c03a2a9a21b30a02e6482c191cbf9228cc3f9ec748a0c7b4b97078426a3df4faf84f8716b9336f649167114ce7e580307c435cd4b0bd9d52f046e714ba4d0ee09fcb3beed9eecf77f90851b59772457cb20fa49eaa308525050f0afef14c1b6f0e58f75d872c4e29ea38c36f88d1bc47525c215d49b2436959903dbf33daf472c58990f35bfd73ec455f5a83ac2060af33c51bde538682d56ea17101671016636b9fd7ff87714c965040000",
    ],
    [
      "ETag",
      "Eeb5VbkQaUdQsZPHHvCv0w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-14-1640201729937"
  )
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
      "db",
      "6e",
      "c2",
      "30",
      "0c",
      "40",
      "ffc57ba5132d30d44a3cc02edaa40ac6a54f1342a1754b595a97c41d43887fc7e9f692d8ceb17d942b7c97750611eccbe2d4a2b93c14c84b17acd0b69aad5c0dd516a107c8aa1072f49b9c378bd9a12c7468c6fc325fe7d96939990861d303560aa22be425eacc42f475855a55286dbb9de9260ac697c655dee2c574236945994be7491c4f67f12bdcb6b71e1c69bfc21c0dd629ba818da123a6fce15cadaa1a8d9ea5d6a468a183bb87c250db2843e449c5f3879eff34ec077d7f1c84e1602ca0a6547149b5b0c91a640d132bbda2b3a8822f80e942b1cebbf347cac1287cf40367b5fde7671746fb6948965b747b07fdd19fc53339331663362df62055f223ef2543942b6df1760740360bc66f010000",
    ],
    [
      "ETag",
      "5xUwTOBhigl9r7tDNSfdqQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "08000000000002ff1dd0dd9642400000e07799ebea0c83cdde11cd969595dfdc3868c8511a63243afbeedbd947f8be17c88a82f47dcaef0d69c1279832515d15ab1c6af103cebe9de11b453b26cde171bac85b2b2dbb0fe329fa2e2f3187a5e957553c080c69c268ab7517e026d1daa6c6736745937391a88aa1675ce3fd0163b3b269a74ceb1e49631b6a432417d4e2db78cd846b74437be83a5fce3241e6c62f8dfc9e4e04079be53683e18fda2073548e46726bb3f9a243aa0fa7386adb43e350cd79848197084c24767ed2e3f3ce0f7a17ddd3213f8bdfc42a956296377ce9859ec807490b586dbb6001c893d68cf469fd7623595517e03f21e51325ef099d648c30f0fb07c719aca323010000",
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
      "Wed, 22 Dec 2021 19:35:46 GMT",
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
      jobId: "grouparoo-job-15-1640201729937",
    },
  })
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
      "db4ee33010fd95c8fb4adbb44daf52b5546d80486dcaa62908ad5691ed4cb286242eb6538450ff7d2709654148f014db73ce9c3397bc900751c4644a98481f4b50cf3fee252367040c4df1b50cef96cbebee6372339ee7fe4571b90c3cf5349b2142542c4df37d062d2d4bc5414f77db76aa64b9a74aca16266a7507adeed0b17b7677d49b4cfa23e469c89295281e90fdd798bd9e763a27ed762a659a01dd0bdde6327f7bef1c7a9dbd92f7c08dee7c94eca08aee7c2dfa33939c1a218bd96e8b064a0d2a829c8a0c2dfc67c6ecfc63eab6a0793b45f04170a09ccbb230952d4cc1659188b4547556327d21b5cd7707b27557ee22b4b8cccabc880a9ac39915534323f3bc07eb22d8ac2dcfbfd804eb79e86dfc68bbb872d7f3f662b3daadfdad757be506ae6528cba0e65a33ebbcbef97841fd18b41145ad1e56cf95f26b83bccf63a90828ada10946237b48bb637bc21236e2c9b83f60890d8c8dd96840fbcce613079c9801455e2d5ab368210bd6e543968c7b9133e293c889633b1af77b4e040cb83decf729e303723c234f4a18580abd975a341d22b78117ba5118ecfcc53c74eb12125a6666d918ab0a78efd16081916d7711f8455dc72a2a24aa552df7fcd00de68bd0bb719b29af20a5fc79fb88734e68a601d15461030da8b58cb169c49fafdd2582eba95d9f829a4c7fbf90aaef9593776d7fa38738c4cab2a9bf641b069e7f59db39216e6856d6904373200ab854317a3efe411cae699383fcdab9c11d699e02484041c1bf9f2782ebc0b77fdb69f5118bcb8f32dae01db787eb4a842b68b648d4c59ed8ced0e957bd47b0329f62437b70ea5995a3ca083914e6b5a266f5b1d046acd46f200ce202f875af8eff007ba7e3a47a040000",
    ],
    [
      "ETag",
      "uTYDDP1qfV8AmNFnGDRIrw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-15-1640201729937"
  )
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
      "8d93514fdb3010c7bf8bf79a4a09941622f190ae05328596b5297b402832f625983976b09d6e5dd5efbe73601d1a93c24b7277fe9d72f7f73f3bf25d284e62f220aae716ccf65305eeab0f96605be92cbe1aad2c908080a31592c32fcfebcbdb6f269ddc5617d3e9cf5fa769c893f373242c7b849a9278474a01925b12dfed88a235601bd3b2ad55d1650171dbc61757f9329d5f625e6beef3f93acb92493623fbe0d0c8a9a345c77fa0ed7e1f9027fdb084120c28067e96c6e827602ef56b5a5a37120656b78681251ddc1d5446b70d355a0fb032884e06d168181e85d1f8e8ecec788ca0d48c3aa115b2eb15ce479c76542ef50fdc9244c748982ec68dcbeeb9c1bae0dd263e4ce7f968d80df816a08ce956b9a2172c85b1ee45bd3fe0ab0aff92927e10c4ab12b20faa4071307d94680acab9016b7b496d0bda34076cb25864ef5551dc68c1fbc18de801a4db1c808b6c91fc4f5a34d85fada6493e7b475887b63920797a3d5be5c9f58de7ee5f8d30d93ab03746a3ab2c784345e1f0f4643c0a5f3cf6597bdfe17762675a0808a3f8ab5c0947e2924a0bfbdfaaf3305088030000",
    ],
    [
      "ETag",
      "4JqUGVWrIBVgFDDxz8I0dA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT `ios_app` as __result FROM `records` WHERE  `email` = ? LIMIT 1",
        types: ["STRING"],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-16-1640201729937",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85537f4fa34010fd2a64ef5f6d29b4a56dd2a851ee24a9d503aa392f977659065ca52cee2ef51ad3ef7ec3623d8d8926242c3befcd9b1f8f67f2c0cb944c48c2f3c71ae4f6dbbd48c801014d73bccd6f6fee66ac5c6ccfa51d156e7ebb1db0cdd3748a08deb0145d57051c2a514b066ab2883ab9147545a5108798e8b037c4a76f3b76cf73c663d7439e82229bf1f201d9775a576ad2edeeb53bb9107901b4e2aac3c4faf5bebb71ba9514f7c0b4eabe97eca28aea7e2e7a5408463517e574116101b502b98435e545d3e02b334d8edfa7ee70baeee408de700694315197ba290b533051663cafa5c94a26cfc494f9e640227fe69fc6d68a0bb5a455b5b2a8b2964b09aa2eb4f53dbcbcb056129890a95a5937e77ee85bd6cad4b4b2a6d691350b2e82d8eaa1540a4af3d208c53429a011799945f071030d816aaaa00d2e3d7b487b237b9c6489c7b2913b48321b9264947803ea26361bf7a19f264091a79bec86454b51bacca51964433676a9930e87784e064ecf19a78e97b8d0b76d9a66aeed90dd0179925cc319579550bc1d08b90983d85fc6e1627e7a12fba68d8c62eb676d714d136febd4d8e4d2b69b7e3fe96dd744b940b566c2c13cf6c393d338b8f6dba5ce20a76c1b3de25a335a28403495740d1ae485487170e4ea320ae2e0727e324386d9d4d51ea1c8e4f7f37f42bcadcca4b57993280e83f90f53c01e714d8bda4036ed81c03d3a4570651fc35f53b7f1ca6ef70759e8ca3623f9b9f0c35fa4bd0a21030925fb7aa70836812f7faebdd3118b5e4719a5f11b1dc45423c224b44ee2eba6983dbbef0d3c9718b0d41f629e33da8fabc9d164843594faa5a3d6e9d8682b56ab571006d1007333b9dd3f6a16494d69040000",
    ],
    [
      "ETag",
      "gZWhLcnUyHr0Sl3gZy5cvw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-16-1640201729937"
  )
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
      "ff2d90616b83301086ffcbede314acddda55e8072d850dc46e96c2ca2825eae96cd573495c71e27fdfc50d4212de3c77f79001ae6593810749597c7528fbbb02f59bb9c4a8ba4a2b3e5a6a148205a845c1e42df971e2f8d8bff7f5627f8d364ff77977f4d76b2654fa89b5006f80bcc42a53e07d0cd0881ab9ec7c965347c674df9a24d8edc2ad1f7150536682e810867e106e613c8d165c28893147894d8aa6652be982a97e31b64ad46d85b6a24ea6a86082a7874252d70a49647362cf16bc1e1cd7992dddd56abe64b0a254e8921a660f7be0319ab4a862bab12ccc1890d395bdf369ffe658cb0e8dd3e99f0e7a8dea55128f5668a6baf3c73f870d192fcdbea6c68254f08f3c971abc5c540ac75f34519c516f010000",
    ],
    [
      "ETag",
      "wbz0RRYyXym6SkNC8+fuYA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "c7",
      "72",
      "82",
      "40",
      "00",
      "00",
      "d07fd9b3389410dddca459408ac0502e0c65e9ca0a1876c9e4dfe3e413defb01699ea3694ae6a1430ff00568cac36dbecdd843f8cdae9e85adb15c4c09e25d4faf9253856ac8d84dce145c79d5356a796da832eae068c7442bf4e149b43b218a15e0acf37739829254235790c2c7483e1ff62b3c13bec015273b85e107c11493325e33ab869d3bb7d91c6577063e1db521f2492f6f1a158736e596f334b3b21c3b427454ea4aae5ea92c7cac7aac6627ff42ed03c3197b732df0c818d414598ec749b4747bd4f32e37f717c56bf78aaff416bcd503cb2f712daa600310c1cd88a6a479bb0511c20df84f48668ad17b4242e98846f0fb07c724767a23010000",
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
      "Wed, 22 Dec 2021 19:35:48 GMT",
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
      jobId: "grouparoo-job-17-1640201729937",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85536b6f9b3014fd2bc8fbda04c88b10295aa394aea809e90869354d1332c650b780a96dda4555fefb2ea6e95a556a3f61fb9e73cfb90f9ed13dab52344309cb1f1a2af6dfee78824e1055388757ffefedede5e6c9bcd94fbd8b4b3c11c9d5e566319f0382b52c89cbbaa03dc91b41a89cedb6fd5cf0a6c682f31e24ead94ecf9e8cac81653b03d71d3ac093b4c856acba07f6ad52b59c99e651bb9f739e1714d74cf6092f5fdfcdc781590b7e478992e67b491354a4f9b9e8f78213ac18afe6bb2d18682415312d312bc0c27f669a9cbe4fdd67b8ece7007e648462427853a9d616a420bcca58de089d15cd9e91b6f9e680b6deca5b4606e145535671854b7a62a458e158ed6b6a9c879bb5e107e79b70bd88fc4d106f9717de7ad15f6e56bb75b0356e2ebcd033144e0aaab9c6dc38d5b7002ea09f52a958a5d5a3f6b9557e6990ff712c2d01a425ed82b1634db03db5dc244b1c924d87e324b368924c13678c878945dc111da509c5c0d3a29a852b5e8d07d49e8e5d374ec7033b1ed95912bb93491aa7b64bc64327b53026e870829e0453f48cc99a4bd67508dd847ee4c551b80b968bc8d32564b829d45967ac2de0ad470505c6966503f093ba0e6d9471506b5bee0791172e96917fed75535ed11c93fdf601e69ce142524063010d5454ac790a4d43c162ed9d01584fedea189468f6fb19b57d6f9dbc69fb2b3d8221b69695fea26d14fac10f6de788b8c645a3218fdd01094ab848c1f3e10fe0604dbb1ce8e7ce0b7fa1ee29a41915b4225fcf13c03af0e5df765c7dc0c2f2838c547087ed21b2152182765bc474b147f6683ab1c7488385fa107306ceb1676d8e36232d69a55e2aea561f0aedc41af90a82202c40a07b75f8079d5a77a27a040000",
    ],
    [
      "ETag",
      "IxhhKOw/Wy8EHKa6rbPKOA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-17-1640201729937"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d93614fdb301086ff8bf771a9d640d78e487c48a140a4d0421b344d08456e7cc9dc39becc763a5555fffbce8175d3400a5f92bbf373caddeb377bf6436ac122b696d5cf16ccee4305eede074bb0ad72965e0d6a0b2c60e07845647bf369bd6a301c7d83fbebaf36d95c7dd43c3e3f27c216dfa1e62cdab352821296458f7ba6790dd456a06a6b9d7759c0dcaef1c555b64ce6d794d7287c3e7f48d3789aced82138360aee78def1ef687b3a046c83eb2594604017e067690c6ea070895fd3f2ba5130b0d89a022cebe0eea032d836dc200ea832082783703c1a9e0cc3c9c9d9d9e984408505771235b10f2b9a8f39745c2df1176dc9c253224c17d3c665f7dc525d8a6e131f26f36c3cea06fc17e04581ad76792f584a63ddb37a7fc01715fe27157f27485725551f54811660fa28d9e45c0803d6f6926873de34476cba58a4af55d1c2a014fde056f600ca6d8fc055ba88df92960cf657abcb389bbd22ac23db1c912cb99dadb2f8f6ce734f2f4698ee1cd83b83e42a0bde50e170f4e5f3643c7cf6d8057adfd17722675a0858c1e957b9918e452557160ebf01c427c1a888030000",
    ],
    [
      "ETag",
      "uH/bSpo14YeQGWsIjF+naA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT `date` as __result FROM `records` WHERE  `email` = ? LIMIT 1",
        types: ["STRING"],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-18-1640201729937",
    },
  })
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
      "ff85535d4fa34014fd2b64f6d51668a14093468de22e495b5d4a35bb9b4d3b0c171c050667065d63fadf7718ac1f31d12760ee39f79c7be7f0846e699da1294a6971d7027ffc76c352748040e2429dbae5d9e93824f3a0b17f5f41642e5cf7fae261365308dab104ae9a120682b59c8098ae57c382b3b6c19cb1816a34b0fd813d71ac91657ba320187b8a27a0cce7b4be55ec6b291b3135cdbdf6b060ac280137540c09ab5ececdfb91d9707603440af3bda4a95484f9b9e861c9089694d5b3f54a196805f00d549896cac22b334b8fdeb71e525c0d0b05bea7043021acad65674bb520acce69d172dd154d9f90b6f9e605adc279789218db0c4bd81a58189b0d07d196d2388bcf17c69603613c135be3ea47188786b1d586b6c6cc3834e6d1224a0c5be9642024adb54a82d3123a85e745441fd7df11b0c402fae2c6b326d8f6ad20cd538fe4fed84d730bd2d44f3d178f538b040e38590a58f164d75db370cd6a0fc69eebdb8ee34d1cdf21be63612f9f78c1c84bf10863dff13392ba60a3dd017ae054c229150d13b4df06ba8aa324dc24f17a79729c847a8c1cabd14f7b73dd106f7d4a35e4c6b2ba793f996dd75529536add7aa36512c6c727497419f6373a870293c7d59dbad31c9702141a735c8104be60995a1cba385f454974be3c9e2b86bea68b3d42a0e99fa75742f2d8e84d4bfd44ab248e96dfb5813de21297ad86dcf72f086e544c1815d611fcd3be755076bbbf8aa522d977443fd761fc0bf54731e4c0a1265fdfa902ebc2977fd63ee60aab82ae648454df2a4144742284439f245a7566f66c2718fb01d2602e3fd45ccbdbafabebd175840a6af93c511f7335682fd68a17902aaa002cf5e676ff01348d6fa166040000",
    ],
    [
      "ETag",
      "5lFD3EcL9p1ZWeI/M55hPw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-18-1640201729937"
  )
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
      "2d90516f82301080ffcbed5512403727890fa2663331cb86bab82dc65438180cb8da161743f8ef5ed95edabbeb77775fdac24f5e2710c029cfce0daaeb5d86e6cd0611eaa6349a2f49b54618001a9131198ee493c4d5e7bed8bc6f23f7bcbf2c3ee6d974ca848ebfb11210b490e658261a82af166a5121b71d8faa9fc898b94a5b59ccb64bce2a4a6cf6b25baf67e17a09dda11b4041a708535458c768e7494505c6666555b5a864898ea646c5a8a187fb874c5123852272b8e2788f8ef730727dd71bfb93c970cc6049b13039d5ccee36c06b0c195146f4cba6e031a0fa90a5d3febc70d9e7098eeb3bae67cd0eff3de1d5a07e55c4021aedeea17bff6732276b67d8daa80607100bfe94e7dc40908a52637703b626647772010000",
    ],
    [
      "ETag",
      "B4pGpeIZXjSVTR0qXvDYCg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "0000d0bb646d9df013e92e0a0cd8111090c28a8118822202e18fd3bbd7e935eabbc37b820463d2b6715715e4013ec19cf0ca1aaf5388c2012ebeed9a566426b75ce1a8e4d61cdd467c7f2cf980bb7ab7ced16ab992fb8f8b568cd8bb679ed404d485ea36548f8d3da59b83939c2c26cddea3e913cf5260230b7b2fd04ef690a58c7774d53c87b46c1c5f5c2ead21dcbb3e47831598295515b7530764d882ed13a922e3229e4d34d67064fe17db54923844b35fd8e2fe0151504e933153a347481f734865c205df07a34c11c2875d78d732bd8aa71117f8b2c437ac77d1faededdf012b40a6faca481b5f5fdb05495156e0af7edccd3579fddf918411067e7e0183655a9419040000",
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
      "Wed, 22 Dec 2021 19:35:50 GMT",
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
      jobId: "grouparoo-job-19-1640201729937",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85535d6f9b3014fd2bc87b5c934008498814ad5142db4c09590969374d1332e6c2dc124cb1e9d655f9efbb98a66b55a97bc2f63de79e733f7824b7bc48c884c43cbbaba17af8702362724240d10c5fcf7fafbf8ae1f0a34f8be40f57971770f679914da788e00d4bd27d9943478aba622027bb6d37ab445dd24a880e26ea586ec71a0eccbe698dfaae6b8f9027214f57bcb845f64fa54a39e9f58edadd4c882c075a72d96562fffcdebbeff7ca4adc0053b2f75ab2872ab2f7bee8a75c30aab828a6bb2d1aa8255411ec29cfd1c23f66129fbe4edde574dfcd107ccf1950c6445da8c616a660a2487956573a2b993c126df3c5816cbd95370f0d26f27a5f4405ddc38991504523f5508271166cd6c6d23fdb04eb59b8dcf8d1767ee1ad67ddf966b55bfb5be3fac20b3c43d13807cd35a6c6a9bef97841fd04a4e285560f9be746f9a941cbb7636908282da10d46237348adb1e9c6693c62e9d876e2d484381ec72387dab1c9dc010c921828f2b4a866d1421483b14b9db1338a5ccb1c4703d33623ca2c886c665baee924fdb133208713f2abe20a165c9642f2b643e43a58865e14063b7f3e0b3d5d424aeb5c2d5a634d012f3d2a2c30324d0b81efd47568a25ca05ad3f2a51f7ac16c1e2eafbc76ca2bc8287bd8dee19c539a4b4034adb0810aaab548b069c49fadbd0582f5d4be1c83924cbe3f92a6ef8d93176d7fa68738c4c6b2d25fb20d83a57faeed1c115734af35e4be3d900a98a812f47cf881385cd33607b9dc79c137d23e0590420505fbff3c11ac03fffddb8eab8f585c7e94910aefb83d4c3622ac82768bb82ef6c876cc81dd271a5ca93731c7b68f3d6b723419610f857aaaa85d7d2cb415abe5330883b800beeed5e12fb2fc809b7a040000",
    ],
    [
      "ETag",
      "GxMXo66+NandzitQHeFJDg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-19-1640201729937"
  )
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
      "10",
      "86",
      "ff",
      "8b",
      "f99a8a662b2d89b40f2d14a894b55b9b760234455e7c091e8e2fd84e51a8fadf3967a3430c29fb92dc9d9f53ee5ebf39b0ef520b16b33b59fe68c0b4af4a70d73e58836d94b3f4aa515b600103c74b22ab9bb4dd45faf52fbb2d575f22b3dcb5bbcfe5c5051136ff061567f181151294b02cfe7a609a57406d39aaa6d2599705ccb5b52f6ed2f562f991f20a85cf97db2499ce92393b06a746c11dcf3afe056db7c780dde3dd1a0a30a073f0b3d406ef21770bbfa6e555ad6060b1313958d6c1dd4169b0a9b9411c5065104683703c1a9e0dc3c959149d4f08549873275113bbddd07ccca1e36a8d3f694b169e1361ba98362ebae79eea52749bf870b14cc7a36ec0bf019ee7d86897f5828534d63da8f7077c54e15f52f11782745552f541256801a68f9275c68530606d2f8936e3757dc266ab55f25c152d0c4ad10fee650fa0dcfe047c4856d3ff494b067bd2eafd349d3f23ac23db9c90747139dfa4d3cb2bcfdd3e1a61d63ab05706c95516bca1c2e1e8ed9bc978f8e0b177e87d47df899d69206039a75fe593742c2eb8b270fc0de16fe7bc88030000",
    ],
    [
      "ETag",
      "mWTyV9n/zsUgOZ9rNVyVYg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT `stamp` as __result FROM `records` WHERE  `email` = ? LIMIT 1",
        types: ["STRING"],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-20-1640201729937",
    },
  })
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
      "00000002ff85536b4fdb3014fd2b91f771b471d277a50a10645ba652589ac2c634b5b673d31992b8d80e0fa1fef7dd24748090e0532cdf73ee39f7fae4915ccb222163c2e5faa604fdf0e94a71b247c0b235deba7a68be5f96f7f94f69af2e3f7b9e70997f37992042562cc3f24d062da34a2dc08c17f3f65aab72c3b4522d6cd4f269cbeb77a94fbd813f1a7506c83390a553595c23fbafb51b3376dd9d767badd43a03b691a62d54feffdebdf5dd8d565720ac715f4bbaa862dcf745f733259895aa982ce668a034a097903399a1856766c20f5eb76e4b96b7d708be95029810aa2c6c650b5b0855a4725deaba2b193f92dae68b039907d3e0287656c662cf95c38cb35c6a3065669d2fd1e989b3d220944ecccab9f8164481e3ac6a472b67e2ec3bd3f0248c1d0f8512305616b54ccc780695c4d326c2b7fbaf08cc32034d7139a07de60de988a77c20d261a7c7530a9c0ff9a0c73a9c8a5117ba0907863c5b75af59ac500563432fed76c01f72ea77697f403bb4cbfbd4ef739ef4692f4dba9cf6694ab67be44e4b0bc7d26c9491cd3ac84514c6c1328e16b3a3c338a8c748198e7edc98ab8678e9d3e2904b4aab79df996d5b55a542b56abfe12c0ea2c3a3383c0f9a279dc29a8987f90d3e6aca320388669ae560419fa8041747ce4ee7611c9ece0ea7c8a8dfe96c873064fcfbf199103f6cea4ddbfa4be67114cebed606768873969535e4b63910b8c29c2869e801dcd7beeba46cb77f9085996c3a921f8b20fa459aab0852d050888fdf14c175e1c35f6b9773c462d25106d367252648984a4468689224f3cacc8eddf3bc6187d4606ddfd43a1eddadabea5175841c0afb345193731cb4112bcd7f10163100b37a73db7fd27644ac67040000",
    ],
    [
      "ETag",
      "/r8sJZuxmXitjZ+11c/a2w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-20-1640201729937"
  )
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
      "000002ff2d906f6f82301087bfcbedad2c803007892f7431d14417e79f986d31a6c0c170d0636d7171c4efbe2bdb9bf6f2eb73774fdac16729338821298baf16d5f5ae40f3628b0deab6329aaf86a44618001a513079a8dfcad13cbb24fe36783d48f3331f36b2188f99d0e907d602e20ef212ab4c43fcde81143572dbe9a4fa898c996b6393dd6235dbee26ab35473565367ade2f9793e97206b7e36d00674a3698a34299a21dda283a636a16d6578bbaa9d0d1d4aa1435f470ff50286a1ba1881c4e1cdf75bc87c0f55d6fe447d170c46045a930254966f75be035868ca836f4cdbae031a0fa92cdf3febcd8f83e7c74c330f2a2601659b9e37fdbf46a50af15b18346bb7ee8867f324f64050d8b1bd5e20052c19f332f0dc4b9a834de7e014f1139477a010000",
    ],
    [
      "ETag",
      "WmZi7Hdvb2S4YWntzH3png==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "300000d0bb64ad0e14b4437746fc101451849815032168082abf08d1e9ddebf408efbd4142296bdbb87b0876073f40255fd6844e526d7e7e6aaf9357f052327fe55df2fdfab67a89acd2746b0acb6fe25c82c2e9effd52f94a2f03fda0aea733dce2b123d7e14e23f280a1c7ca202774e8a3819b43e846598de15ee632e2320b5595d9c8edd6223f22b458d477c4234fa2242d66af7da8b0e33d887edc90ebce5fc61bfa14e33ad5763ed932575c69631929ece7811dea652bbb19f7394617f3e4e2e66c4f438378757b334581e63914347a9aa21f23bcac6776ec1a2d18013654bc616dcc3f6e636a5923f09f1077aa629f09c8928635e0f70f8117be3b23010000",
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
      "Wed, 22 Dec 2021 19:35:51 GMT",
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
      jobId: "grouparoo-job-21-1640201729937",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85536b4fdb3014fd2b91f79536cf366da56a74258c4a6dba25298c4d53e4384e30a471889da282fadf77e3500642824fb17dcfb9e7dc479ed01d2b53344109cbef1b5aefbfdcf2049d202a710eaf8366de5c59e6b5fdeb36757eef6f1e2bfff1dbc3740a08d6b204de5605ed09ded4848ac926ece7356f2a5c73de83443dcbec9943c7b00cd3b5c663db059ea045b664e51db06fa4acc444d78fdafd9cf3bca0b862a24ff8f6e55ddf597a55f35b4aa4d0df4aeaa022f48f45bf169c60c97839dd8460a011b48ee916b3022cfc67a6c9e9dbd47d86b7fd1cc03b4628268437a56c6d410ac2cb8ce54dadb2a2c91352365f1d50e82dbd79a4115e34db322ef1969e6829963896fb8a6ae7c17aa52dfcf375b09a458bb51f87f30b6f35ebcfd7cbcdca0fb5ab0b2ff0348993822aae36d54ed5cd870be8a75448562af5a87d6e959f1bb4783f969600d28276c1d83586d81c19e3244b5c928dec419219344946893bc0766290b1439d34a118784a54b170c94b7788879939c8e22449d3d871881d8fada111db8eeb103735ecd128458713f4503349cf98a8b8605d87d055b088bc380a36fe7c1679aa840c37853ceb8cb505bcf628a1c0d8304c007e50d7a18d320e6a6dcb177ee405b379b4b8f4ba292f698ec93ebc873967b81014d0b886064a5aaf780a4d43fe6ce59d01584dedc73128d0e4cf136afbde3a79d5f6177a04436c2d4bf54561142cfcefcace1171898b464176dd015560f906ea03d787bf808445edb2a09f1b2fb846dd5340335ad3927c3e5100abc0a7ffdb71f9010beb0f3242c21df687885684d4b4db23a6ca3db2079631b09002d7f25dcc1cdac7aeb539da8c744b4bf95c51b7fc506827d68817100461057cd5adc33fdc4091ae7c040000",
    ],
    [
      "ETag",
      "5uCuW21Y3Xjd4ZyhzpNzBw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-21-1640201729937"
  )
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
      "85df65bc2d0945fe6cc205202209209672610c21cb768042dba9bb5b0921bcbbb315d1a889de6c67a6df4ce79cee1176511a8207cb68fd92a33a5cadd13cdac0479dc746f323a35423388046ac9974a5df4c77cb65d0a7dad3645f714748dd7dabc584961b4c047847584518871abce723a422416e9314e749ba283207cc21b3c569e00fc67dce130a6d3e9e0d87edceb00727e7d2180a231605ff8fb6f9c9812d2d7d5ca1c254a2dd2553b445690656a6164916634953ae246a28e0e2c55a519e094554e24aa9e296dc7ab55c29bb8dcacdcd7583c198a43011a5cccea6bc1f183222f669cf2aa1ce802a4216bc2ace572e476121c486837150af16fb7d05144a52e1e24f2ee3753782ffc2077676e03b2712ca5373a1ee860feddfc6b1a59fa36edb41ef07a10d1b754182c1a8370ddaa389e5e667e99d83413d51c43e6ab416bae56ab3d6a897df5ded92759abfe31995a30352f0e5b88f0c782b116b3cbd01e6c6e0967a020000",
    ],
    [
      "ETag",
      "1cR8nkbbTGo5YPw21MeoCw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COALESCE(AVG(`amount`), 0) as __result FROM `purchases` WHERE  `record_id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-22-1640201729937",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85535b6f9b3014fe2bc87b69a5269084841029eaa294756834e90869554d5362cc81ba054cb1e99455f9ef3b40d3cb26754f189fef726e7e22f73c8fc884843c79a8a0dc7dba13213921a06882b7bbf49befd1ca8d6e7e2f2e575eee07ce4e9f4da788e0354bd2ac48a1234555329093f5aa9b94a22a68294407853afd7ea737328dbed1b3fab63db09027218d3d9edf23fb56a9424e74fde0dd4d844852a005975d26b2977bfdb1af17a5b803a6a4fede524717a97f6c7a9a0a461517f974bdc2042a09e50632ca534ce19519859fdf4b7739cdba09821f3903ca98a87255a785124ce4314faab251259327d2a4f9e640568ee7cc036dbe9c79ce6aee1ccdaece8fb634ab35b6c7279a71ac51a96d3625c82a55da177f79a16d0bb4bda512e456bbfeeaf88ea66d4b60a28c363cda6a53ed54f3dc0b37d07a98410452f1bcf10f689842edfddc22f7dfc1d404aa50ba0d6e2c63447b63c30ee3d062f178300c6303c2701c5a433a080d669b60462150e4a95abd61d11cab1e306b18f6469669c5f1d83007667f1cc1d0b447e3380e0dcbee990c46f698ec4fc8af922b38e3b21092b77d22d7be1b389bc05f2fe6b3c069ca882936e0ac4dae2ee26d9e0a8bdc18465def07b5edeb2817e85637de5d048e3f9b07ee95d3ceda8384b2ddea01a71dd35402a269493350505e88081b472e972b3770978b99878c668097078424931f4faf846057349d56cdb7f61a998dff017045d3aa413cb607d223fbfd4f44e05eb664f27dedf837a4bdf221861272f6fff121b809fcf7791d761db1b8ed682315fee3b230599bb012daa5e15993de337bd8b70d9b34e052fd1d1b1823e3d0995aa356840c72f55c51bbeb58686b56c917100671d60b77718ed13fde596f4a6b040000",
    ],
    [
      "ETag",
      "ylKRLauIdYzNPSLnRTEy/A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-22-1640201729937"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff3590db4ec3300c40ffc5bcae68cdca2e95f6b0a122902ad8069340689ab2d42ddddab82429a89af6ef38055e1cdb39768e728653a93388e150169f2d9aeeaa40b7f6c9066d5b39cb4743da220c009d2c987c3d69bd729968dfba642522b116c95615f33913567d602d213e435e62955988dfcfa0658d3cb6df9b7e2363ae6b7ce72e7d5abc705953e6cbc76d9a2e96690297dd6500473a6c3047835aa15fd8183aa2720fded5cabaa930b0d41a85167ab8bf280cb58d34440177022182701c0dc5309c88d96c3461b022255d499ad9ed33f0338e9cac36f4cdaa103260fa94adf33e7ef9f6f558dc4cc2484cffa337dcfdcd2e3b87766588452c7a87d178fa6b744bded2b1bd332d0e4049fe9dfbd2419ccbcae2e507e92cb4067b010000",
    ],
    [
      "ETag",
      "XknnPtd2uYyEP242Q2EUcg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "300000d0bb646d9d948f4277711c2a4d05c247289b4cc050232ae1a3043abd7b9d1ee1bd1fc0ca92f73d1d9a9adfc01b9898662fcb650151f68073ec058395258dd55504be2bebba2dce0871de9539c1bd760c54ebcf93bd0dfd99d1a4922d8d0d2394040dab1512b230a7646fc8438fd6ceac9d9d6cdce99f8d33d5772f3a419c682a7d90fba520e4b0c3c4a2abb5d7a29cba51a34baa98aa5f7980c7177b86e965da31086b7e2018875fb7a0f593ef4113751c46ebc67355a79f60aadfdd5c39c24fb4230f66537ee0230cf7d128361b5b5cbc6b95e37c64d762f02db0005c49d1f19e8aa75b376d7b01fe13e83049fe9cd870d6f10efcfe012239c62723010000",
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
      "Wed, 22 Dec 2021 19:35:53 GMT",
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
      jobId: "grouparoo-job-23-1640201729937",
    },
  })
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
      "85536b6f9b3014fd2bc8fbda04f2248914ad514a57a4846c405a4dd3848cb950b7802936ada22aff7d17d374ad2ab59fb07dcfb9e7dc07cfe49e9709599098670f0dd4876f772226670414cdf0b56c56f7813f9b669b74e60487a78d938d93a7e51211bc65495a5439f4a4686a0672b10ffa592d9a8ad642f430516f38ea0da6636b680dece17c3eb29127214f37bcbc47f6ad52955c98e649bb9f0991e5402b2efb4c14afefe6e3d0ac6a71074c49f3bda4892ad2fc5cf47b2e18555c94cb7d80061a09750405e5395af8cf4ce2f3f7a9fb9c16fd0cc18f9c01654c34a56a6d610a26ca94674dadb392c533d136df1c48e06c9c7568309137451995b4803323a18a46ea508171e9efb686eb5deefced2a74775e14acaf9cedaabfde6df65b2f306eae1cdf31148d73d05c63699ceb9b8717d44f402a5e6af5b07d6e955f1ae47e1c4b4b4069095d30b2ad291dccac799cc6364b67a3499c5a10c7b3d89ed0516cb1f918c6490c14795a54b36829cac48ee96092b2c84e991d8d879046740a348a21b1693a9f4f2c3625c733f2547305175c5642f2ae43e4c67743270afdbdb75e858e2e21a54dae2e3a636d016f3d2a2c30b2ac01023fa9ebd846b940b5b6e5ae173afe6a1dbad74e37e50d64941d82079c734a730988a635365041bd1509368d78abad7381603db59fa7a0248b3fcfa4ed7bebe44ddb5fe9210eb1b5acf49704a1ef7a3fb49d13e29ae68d863c760752a1e55bac0f5d1fff221217b5cb427eed1dff37e99e7c48a186927d3d5104ebc097ffdb69f9118beb8f3252e11df787c95684d5d0ed11d7e59ed893316e08d1e05a7d888d469353d7da1c6d4628a0542f1575cb8f8576628d7c05611057c0d3dd3afe033818d0807c040000",
    ],
    [
      "ETag",
      "nuAkSR86gLf8ESywLEg4dw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-23-1640201729937"
  )
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
      "85df65bca5498bfd51122f50ab6d03b5057aa331cd0a43a50283bb8ba669faeece62ad464df4669919be19e61c760b4f599980030fd9eab946b9395aa19e9b204055e75af1a3a2522158805aac98ec4da2c16862fb69781bf8b350cf7bfe5abd9e9d31a1e2472c04385b4833cc1305cedd164a5120b7c594d745b96c320bf4a632c5300ac6d36bce0b4a4c3e5d789e7bee0d61671d1a13a1c5b2e1ffd176bfb3604d0f01a628b18cd1ec52495a63acc746a6124595634b512d6354d0c0cd8b95a4ba1292a8c595967ddceaf4bb6dbbdd19d8a7a7c70306738a85cea8647611f27ea0498b3ca05756097d066413b2e0b4395fb89c258d10138ea751bfdbecf7159018934c967f7215affb28f82f7c607b07be73a2a0bad407eacabb717f1bc7967e8eba74a3e10f426936ea8044637f1846ae3f33dcfd5efaf946a39a49621f151a0b3bedee496fd06fbfbb7a41c669fe8ea3658d16c4822fc728d3e0a42257b87b036a68e98e7a020000",
    ],
    [
      "ETag",
      "5JT7HJ2MfSZRMPStQ5Mjsw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-24-1640201729937",
    },
  })
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
      "5b",
      "6f",
      "9b",
      "30",
      "14fe2bc87bd9a42601121288147555ca36a65cba8434daa62931e6409d124c6dd3a9abf2df7780a617556a9f303edfe5dc7c4fae791e932189787a5382bcfbb013113921a0698ab7ebf5ae137f0fc61efc9233f0afadf4df6e9a8e4688e0154bd17d91414b89523250c3d5b29d4a5116540ad142a196dd6b59fd9e699bd6c0f6bcee00790ab264c2f36b645f695da861a773f46ea742a419d082ab3613fbc7fbceaddd29a4d801d3aaf3d2b2832eaaf3b6e9692618d55ce4a3d512132815c80dec29cf308527661c7d7e29dde674df4e117ccb1950c64499eb2a2d9460224f785aca5a950cef499de6b30359fa137f1c1ae3f96a167edcd27d45de7e32a832361b09aaccb4f165319f1adb02bdaea802b535d6dffc856f185b094cc878c3e3ad31324e8d49300d42c342db1894e6796d1ad22883caf0a12fc1eb695404aa51ba096e06669f5aaee94549346089db75a2c4842872a38143bb91c9bc1ef4e20828f274a55eb3682e729bb9b6e33017dc6eec754dc7f6ba34a6a61bc78ee70eac64605a5d70a04b0e27e4afe41aceb92a84e24d73c87a1184fe265cac66e3b3d0afcb482836e0bc49ae2ae2799e1a8bdc986655ef1bb51daa2817e856753b9885fee26c1c06977e33e009a494dd2d6f70c409cd14209a4aba070d722a626c1cb9982f833098cfce26c8a8a77671442832fc7dff4408ef8abad3bafe565efd5eed7f045cd2acac11b7cd8158e470f883085cc6864c7eacfcc54fd25c2d200109397b7f7c08ae03efbea9e3822316571c6d94c67f5c16a62a1326a1591abeafd37b603b8e65baa4064bfd2a66f7ad63672a8d4a11f690eb878a9a05c7421bb3523d823088b39e05b3af18fd0fbac5df4f60040000",
    ],
    [
      "ETag",
      "WWj/dJIC9eZrNeEk1gzjMg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-24-1640201729937"
  )
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
      "61",
      "6b",
      "c2400c86ff4bf67116ac4ab5053fe828d321b275ca6043e43cd3aeda36dd5dea10e97f37d7edcb5d78f35cf2703738e7d5112238e4d94f83e6fa9021bfb92241db146ce5aaa9b2083d4056999093c54713eaf3706e38f80c2f93c79764b39d4da74258fd8da582e806698ec5d142f475834a9528cff67bd34d148cafb54b96eb4dfc1c2712947474c17abb5acde6ab18da5ddb83131d124cd160a5d18dac0d9d50f3d2d95a55d6057a961aa3d14207778dcc50532b43e449e20d469e1f8cfa83be3f1e84e1702c60415a714e95b0db7790354cac8a847e45167c014c578a77da9d1789c74e68f78fceaf8cf6d590ecb5e8560e83c99fc01339291659360df6402bf98e45ce10a5aab0d8de01728a6a886c010000",
    ],
    [
      "ETag",
      "8HWu9ck3Brt6Z9v8+JRTUA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "d0bb64ad0e8245d35d64a00441c4a0c56c18848c92a082417e4eef5ea7d7a8ef0eef0992346552c6f54db02bf8047da2c2493a392a286a9421f457d5626e687951b7cca887880f263a905072d79e5e89322fc49e07fed8456ab3f705e9f3c04febcce39799abe088ca6b968de9227c68d4e9076fa52086e7154cac1b16e76c2db1b713ed32a414a316e556ef54dfdbbdcecaa85917dd6df1654d057128b4acddc9b0670ad9c49e4be0a641dd609fa785bed2d7db4774c16a1992b87696813ff8e6494d4b888f153a1fb663cac523e09dcb3455726c1ec3d66c9cc44093b7b77f078c00ebcafcce649cbfb66b1f108ec05ffdb8ee4bf6fabf64c99dddc1cf2f75a381f419040000",
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
      "Wed, 22 Dec 2021 19:35:56 GMT",
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
      jobId: "grouparoo-job-25-1640201729937",
    },
  })
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
      "64f6d5b69496b63469d6a6c5956c4b15a8c66c366418061c05069941634cfffbde19acab31d12766e69e73cfb91fbca07b56a5688e12963fb4b479fe71c7137482a8c4b97a0dd7ec92bba1fddb779eeeadf0c64d03b25c2c00c1144be0b22e684ff0b62154ccf7613f6f785be386f31e24ea59766f38199b96399c5a8e339a024fd022dbb0ea1ed8b752d6623e181cb5fb39e7794171cd449ff0f2ed7df0680dea86df5122c5e0a3e40054c4e06bd19f052758325e2df6211868056d625a62568085ffcc3439fd98bacf70d9cf01fcc808c584f0b692ca16a420bcca58de363a2b9abf206df3dd0185eec65d4506e1455b5671854b7a62a458e2583ed7d4380b765bc3f3cf76c17619793b3f0e57e7ee76d95fed36fbad1f1ad7e76ee01a122705d55c63619cea9b0f17d04fa990acd2ea917a56caaf0df23e8f4511405ad02e184fcd091ece4c27c99229c966233bc94c9a24b3646ae3516212674cc7694231f0b4a866e18a578458a665e12c4e01178fb3218ef1c424f16c32b171968d9c5942d0e1043d354cd235133517aceb10ba0ebcc88da360efaf9691ab4bc8705bc875674c15f0dea3840263d31c02f08bba0e2aca38a8a9967b7ee406cb55e45db9dd943734c7e4397c803967b81014d0b881064ada6c790a4d43fe72ebae01aca776710c0a34fff38254df9593776d7fa34730446559ea2f0aa3c0f37f693b47c4152e5a0d79ec0ea806cbb7501fb83efc05242c6a97055deedde006754f01cd68432bf2fd4401ac03dffe6fc7e5072cac3fc8080977d81f2294086968b7474c977b64db9391ed200d6ee4a7d878ec1cbba672a88cb4a4957cada85b7e28b4136bc51b0882b002beeed6e11f",
      "1faa8f717c040000",
    ],
    [
      "ETag",
      "bSDiQoES5KN9wk2SYEdRcA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-25-1640201729937"
  )
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
      "000002ff8d92dd4ec2401085df65bc2d49417ea4091745514a00a1940b630859da018a6da7ee6e3584f0eece5644a3267ab39d997e339d73ba07788ab3081c58c59be702e5fe62837a6a021f559168c58f9c328560016ab16132eb4b591b2483d1c3dc6bef1a238d6ddb9f763a4ca8708ba900e700eb18934881f378804ca4c86d2125459a2dcbcc02bdcf4d7116f8def88ef39422938fe7c3a1db1df6e0689d1b23a1c5b2e4ffd1b6385ab0a3958f6b9498856876c925ed30d49e91a9449a27585154c810159470f96223a9c88524aa70a5526b54aacdba5db3abad5abb7dd96230a150e8983266e733de0f346991f8f4ca2aa1c9802c4316bc2ecf172ec75129c484de3868d6cbfdbe02124392d1f24f2ee775b782ffc2077672e03b27522a327da66e87f7ee6fe3d8d2cf51376ed0fb4128cd469d91c01bf566813b9a186e7192dedd6b541349eca3426361d5ae5f355a4dfbddd56b324ef3771c2d0bb420147c39fab106672d1285c737ede3b2ad7a020000",
    ],
    [
      "ETag",
      "nHrr2JlJMYUI9j5Mte90RQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COALESCE(SUM(`amount`), 0) as __result FROM `purchases` WHERE  `record_id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-26-1640201729937",
    },
  })
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
      "59",
      "6f",
      "9b",
      "4010fe2b68fb92a8b1398c0f2c45a9e3d016c94762e3445555d9cb32904d80c5ece2ca8afcdf3b409c4395922760e63be6e2893cf22c244312f0785b42b1fff22002724640d118a3975f85ad4f963bfd729b9adbd1d58d3edb1bf1f9392278c59234cd13684951160ce470b56cc78528735a08d142a196d56b993ddbb00cb36f394ea78f3c094934e1d923b2ef95cae550d78fdeed588838019a73d966227d89eb3b4bcf0bf1004c49fdbda58e2e52ffd8f422118c2a2eb2f3d5120b2825146b48294fb0845766187c7b2fdde6346dc708de710694315166aa2a0b2598c8221e9745ad4a864fa42ef3cd0b59ba1377ec6be3f968e22ec7eec972353dd9d0b4d2d89c9e69c6a946a5b65e1720cb4469df17f3a9b6c9d1f69e4a901bedeea7bb70356d53001345b8e6e1463bd72eb48937f57ccdc40a42908a67b5bf4f83042aefe71179ff2fa6225085d24d72dd377ad41c184e10057d160d3add203220080641bf4b3b81c11c1bec30008a3c55a9d72c9a89acc3ec30b2c310c29ed3b1c1b27a03c7ea420f30ee587dc3a6a1e93806258733f2b7e00aaeb8cc85e4cd9cc8ddc2f3ddb5bf58cdc623dfaddb88280ee0aa29ae6ae26d9d0a9b5c1b46d5ef07bd1daa2c17e8560dde9bf9ee6234f6bd5bb7d9f50462caf6cb2d6e3ba2890444d382a6a0a0988a100747aee74bcff7e6b3d10419f502af8f084986bf9f5e09fe3eaf27adea67e5d5b36bff23e09626658dd8352fc42487c31f44e05d366472b37217bf48135a40040564ecf3f521b84e7cfa7b1d6f1db178ed6823157ee3b1305999b0029aa3e1695dde33bbdb37bbd598115ca8ff721dd33a4ea6d2a81421854c3d77d4dc3a36da9895f2058449dcf5cc9bfdc0ec3fae4367146b040000",
    ],
    [
      "ETag",
      "B+o4/LSv/Bqm1qADQ/Ny0g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-26-1640201729937"
  )
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
      "90df6f82400c80ff97ee553690c51f243ea8719b19d926ead362cc09057140d95dd110e3ff6e8fede5aeed7d6dbfdc157ef22a81000e79f6dba06e1f32e4950d22344dc146ae9a2a83d003649509e9bab3f6307fd5bc7e7fba6caa65ba3c2eceabc94408131fb154105c21cdb1480c04df57a85489d2b6dfeb6ea260dcd6b6f2127e4e37929694d8f4631b86d359b880dbeed683131d224c516315a31d586b3a61cc4beb6a545917e8186a748c063ab87bc83435b5d2448e549cfec0f106cf6edff586fdf1d81f0a5850ac38a74ad8ed1a640d13ab22a28ba8822780ee42b14ebbf36ccbdea33fb252bb7f7cd6329a2f4db2dba05deb0f467f1273b2622cc2ac1bec41ace443de7286205585c1db1de9d618d86e010000",
    ],
    [
      "ETag",
      "00BybCGrtSK/wTnIfIhEvQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "7282300000d0bb64ad0e05a9a63b949f22120694cf268321209200022ae0f4ee757a84f7de202184761deeeb9256e0078c89081764711194f0294c3e7239cff4b9bac527ace91e37bd8b2928341ae1971c5e1bff18288f7295f5eb54b46e56e44b21aeafcee365063b3cedb7ce7ddf3f0c839de538d59136ccb5d7dcdd6223e2f66a3cddd4f039aa568d4a61ef1e21a1a22aada76329bae78a791983c6a1638cf8dff6ee62662c2f0ecf0dcc51502f333f77502f89c48e6f5e2bc7e13d65e5841889ee367774cb28f8727955f3216ce478a7044d3525eb5a937265482b8e1a968319a04353b4b4c3c5c72dc910cec07f02eec7867e26363469690b7eff00c30cbd5e23010000",
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
      "Wed, 22 Dec 2021 19:35:58 GMT",
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
      jobId: "grouparoo-job-27-1640201729937",
    },
  })
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
      "02ff85536b6f9b3014fd2bc8fbda0448484922456b94d29529908d90760f4dc83686ba054cb1e9d655f9efbb98a66b55a9fd84ed7bce3de73e784037bc4ad11c119edfb6acb9ff702d083a424ce11c5e8360f7a3629b3fd37019fcdddd7efbbc0e223f5f2c00c13b96c4655db081146d43999cefb6c3bc116d8d1b21069068307207f6b1638d2cdb1dcd666317789215d99a5737c0be52aa9673d33c680f7321f282e19acb2115e5d3bb793732eb465c33aaa4f952d2041569be2dfab110142b2eaac56e0b065ac99a8495981760e13f3325272f530f392e873980ef38659852d156aab30529a8a8329eb78dce8ae60f48db7c76405b6fedad62838aa22daba4c2253b3252ac70a2ee6b669c459bc0f0c3b34d142c637f1326dbd5b9172c87abcd7a17845be3f2dc8b3c43615230cd3516c689be857001fd9449c52bad1e77cf9df26383fcd763e908202d591f4c5ceb18db536b4632e2d26c3a9e90cc62844c893bc16362d199c39c94300c3c2daa59b812152193d4b68fd30453c74e9cd98c26d8b14842b289cb1c9ada935186f647e877c3153be5b21692f71d4297911f7b491cedc2d532f67409196e0b75da1beb0a78ee5141818965d9007ca3ae7d17e502d4ba96fb61ec45cb55ec5f78fd94d72cc7f47e7b0b73ce702119a071030d54ac09440a4d43b0d5de2980f5d4be1c8212cd7f3ea0aeef9d93676d7fa2c730c4ceb2d25fb48d233ffca4ed1c1017b86835e4ae3fa01a2c5f417de07aff0b90b0a87d16f475e745df51ff14b18c35aca2ef4f14c03af0eeff76587ec0c2fa838c547087fda1b213a10debf788eb720fecc9d49e3a48831bf52a36b6dd43d7ba1c5d4656b24a3d56d42f3f14da8bb5f2090441588150776bff0fac236a5f7c040000",
    ],
    [
      "ETag",
      "MMUZneOx8NAMzUqXJLMRIg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-27-1640201729937"
  )
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
      "0c",
      "c7",
      "bf",
      "4b7d85649b1394c407d44d17d954862f1ab39c50181b50bc3bd4b9ecbbdb439d464df4e568cbafa5ff3fb786655e25e0c17d9e3d3428573b19ea2b1384a89a422b7ed45429040b508b8cc9ea46e8be33749fdd621e3ae7e1cb452f58fa87874ca8788ea5006f0d698e45a2c0bb5d43254ae4b6988aa6ac666d66815ed5a6388dc2d1e494f39212934fae83c03f0a06b0b1b68d89d062d6f2ff68bbdb58b0a0fb10539458c56876a9252d30d623235389b22ed056d4c81815b470fb2293d4d44212d95cb17baedd75fa9d5ea7ebf60e0e765d060b8a85cea962f67acafb81262d8a909e5825380cc83664c1697b3e72394f5a21261c4d22a7dfeef7159018934c667f7235af3b17fc173eb07707be73a2a4a6d25b6a185cf8bf8d634b3f479df8d1e007a1341bb545a2d178308dfcf1a5e1eedea51fad34aa4b49eca3426361b7d3dfdf739dce9babc7649ce6ef785a3668412cf8729ce51abc54140a37af6aa8558b7a020000",
    ],
    [
      "ETag",
      "nZat46F7x7lhR6KRzO2LkA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT MIN(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-28-1640201729937",
    },
  })
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
      "5b",
      "4f",
      "a3",
      "4014fe2b64f66537b1057aa334695c537125db566da966b3d9b4c370c05160e8cca0694cfffb1ec07a89893e31ccf92ee7364fe49ee71119919027db12e4eedb9d08c911014d13bc5d9e4d4f577796d8fea66a175f4d96d9b979f6381e2382572c45b322859612a564a046ab653b91a22ca814a28542adceb0650f7a56c7b29d8eeb761de42948e329cfef917dab75a146a679f06e27422429d082ab3613d9cbbdf9d0310b29ee806965beb734d145999f9b1ea78251cd453e5e2d318152815c4346798a29bc32a3f0e77be936a7593b41f0036740191365aeabb45082893ce649296b55327a22759a6f0e64e94dbd4960ccfcf9f70dcd2aeae6874195b15e4b5065aa8db3c5c5ccd814e8744b15a88d7173ee2d3cc3d8486042466b1e6d8cb1716c4cfd991f18369a46a034cf6bcb8086295476cf5df13fcea222508dd24d70ed58036a0f2d378c4387c5c36e3f8c2d08c361e8f46937b498db835e1402459eaed46b16cd45ee326b30604346a30e848ed57787b66dc1c0096937eef4ac3e75991345e090fd1179945cc329578550bc690db959f881b70e16abf9e424f0ea32628a0d386d92ab8a789ba7c622d79655d5fb496dfb2aca05ba55bdf6e781b7389904feb5d78c770a0965bbe516071cd35401a2a9a4196890331161e3c8e5c5d20ffc8bf9c91419f5cc2e0f0845467f9f5e09c1aea83badeb6fe535e8d5fe07c0354dcb1af1d01c884df6fb7f88c0556cc8e46ae52dfe90e66a013148c8d9d7e343701df8f2451dd61bb1b8e068a334fee3b23055993009cdd2f0ac4eef99dd772da7476ab0d41f62b6db3d74a6d2a81421835c3f57d4ac3716da9895ea0584419cf5dc9fffc2e87f32f730645e040000",
    ],
    [
      "ETag",
      "SFLDUj0oqKasyfQCSmH/Fw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-28-1640201729937"
  )
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
      "6d4f83301080ffcbf975281b666324fbc08c46234ed99cc96296a56307030b876d716fe1bf7b45bfb477d7e7ee9ef4025f79b58300b679f6dda03a5d6568621bcc5137d268be6aaa34420fd0888cc9d83f5737e14bf1b138c6abc3f3ea3cf3e2fd61326142277b2c0504174873943b0dc1e7052a5122b76d36aa9bc89839d5b6f210bd86ef9c96b4b3e96c1945e134ba8776ddf6a0a0ed1c535458256807d68a0a4ccc9375d5a2ac253a9a1a95a0860eee1e32454d2d1491c31567e03bfde1ad3b70fba3c178ec8d189494089353c5ec7201bcc69011724e0756853e03aa0bd93aedce1f5bbe76add2fa1f9e9e0cea3745bc59a35dea0dfd3f853bb25a86758d6ab00789e0ef78cc0d04a9901adb5fe0d30e606c010000",
    ],
    [
      "ETag",
      "Q8zn/AMjVSxQYwKYzN3Qhw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:35:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "0002ff1dd04d7282300040e1bb64ad0e2848d21da1808a6011506093814c4ac11f304025e9f4ee757a80b778df0f2828657d4f86f6c2eee00d8862891674512a66faadc8f82049210ca9568d66efce51d20de9a6735b3e79d97cb75f11552d067c5a636bb775d71172e003325fa565eee84f799e7c1b660fcc47e1525ce68324db14ad627ecbcdce1424742a7f9dbc5f71671e896238796ac2a65d96fbe4158f9be6da6bc6d6ab9d2c0a42eb5279e557066fb51fcf61d82747691d5b3e0615a46eaf29f0f64c843716aa6f378155a79f52c3748e02dd10dc3192d303ddcb367437e7838862f1e1831960535773d693faf5bdd2119a817f0432888ebd24302b38e3e0f70f7389e75923010000",
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
      "Wed, 22 Dec 2021 19:35:59 GMT",
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
      jobId: "grouparoo-job-29-1640201729937",
    },
  })
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
      "b826813ca0448ad62ca55bb48474405a4dd3848cb950b704536c325555fefb2ea6e95a556a3f61fb9e73cfb90f1ec91d2f53322509cfef1ba81f3edd8a849c105034c7d7617e638efd3bdbcbd75f7f5cb3cbbdfd79c1e7b3192278cb92745715d093a2a919c8e936ece7b5682a5a0bd1c344bda1dbb3ecb139342d67e8ba230779128a6cc5cb3b64df2855c9e96070d4eee742e405d08acb3e13bbe7f7c17e38a86a710b4cc9c16bc901aac8c1fba25f0ac1a8e2a29c6d4334d048a863d8515ea085ffcc34397b9dbacfe9ae9f2378cf1950c64453aad616a660a2cc78ded43a2b993e126df3c58184deca5b44061345b32be392eee0c448a9a2b17aa8c0b808366b63e95f6c82f53c5a6efc385c7cf7d6f3fe62b3daaefdd0b8feee059ea1685280e61a33e34cdf7cbca07e0a52f152ab47ed73abfcd4a0e5dbb1b4049496d00563c7b4a9756aba4996382c3b1d4d92cc8424394d9c091d252673c7304e13a0c8d3a29a454b5152cb4a2d30214e92c9241e536714230b62d7b6dc74ec648e653be47042fed65cc139979590bceb10b90e96911747c1d65fcc234f9790d1a650e79db1b680971e1516189ba685c077ea3ab4512e50ad6df9d28fbc60be8896575e37e515e4943d84f738e78c1612104d6b6ca0827a2d526c1af1e76bef1cc17a6a97c7a024d3df8fa4ed7bebe445db9fe9110eb1b5acf4978451b0f4bf693b47c4152d1a0dd9770752a1e51bac0f5d1ffe201217b5cb427e6ebde017e99e02c8a086927d3c5104ebc087ffdb71f9118beb8f3252e11df787c95684d5d0ed11d7e51ed9b6699a36d1e05abd8959a673ec5a9ba3cd08",
      "3b28d55345ddf263a19d58239f4118c415f075b70eff0024eb5b237c040000",
    ],
    [
      "ETag",
      "2gh04Nk6EgMBKWcPv6+CiA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-29-1640201729937"
  )
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
      "6d13400469c205206a15919fe2858690653b40b1edd4ddad0609efee6c45346aa237db99e937d339a7bb85c7280dc18379b47cca516d8e9668863618a1ce63a3f99151aa111c4023964c9aa8a3ef84ef0f65a0a3abfbebeea4f2aa86cd26135aae3011e06d6111611c6af01eb6908a04b94d529c27e9acc81c309bcc16c7c1c8ef5f709e5068f3fea4d76bb57b5dd83987c65018312bf87fb44d770eac693ec2052a4c25da5d32456b94c6b732b548b2185d4db992a8a1808b174b4579261491cb15b7d270cbb56aa9522ad72b8dc6719dc198a43011a5cc4ec6bc1f1832221ed10bab841a03aa0859f0a2389fb91c8585101bfafda0562df6fb0a2894a4c2d99f5cc6ebae04ff850f6cefc0774e2494a7e6409df76e5bbf8d634b3f479db582ee0f421b36ea8004fe4d771cb46e06969beea5b73706f54011fba8d15a582e554f4feab5d2bbab1db24ef3773ca37274400abe1c9791016f21628dbb37c6bf50897a020000",
    ],
    [
      "ETag",
      "tiCsVaIIQcTsiJZKEU2zrQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT MAX(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-30-1640201729937",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85535b6f9b3014fe2bc87bd9b4254092861029eab296764849da25a4dd455362cc81ba054c6d932eaaf2df7780a617556a9f303edfe5dc7c4f6e781e91210979725b82dc7eb81621f94240d3046f3f5ffcfbed67b393d3cdb6f7cd5cc4e572e15edf8d4688e0154bd1ac48a1a5442919a8e172d14ea4280b2a8568a150ab6bb5ec7ecfea58b6d371ddae833c05693ce1f90db2afb42ed4d034f7deed448824055a70d566227bbc37371db390e21a9856e64b4b135d94f9b6e9612a18d55ce4a3e502132815c8156494a798c213330abfbe946e739ab513046f3803ca9828735da585124ce4314f4a59ab92e13da9d37c76200b6fe21d05c674fcf3e39a661575fdc9a0ca58ad24a832d5c6c9fc6c6aac0b74baa20ad4dab8fceecd3dc3584b6042462b1ead8d9171684cfca91f18369a46a034cf6bcb80862954760f5df15fcfa222508dd24d70e5587d6a0f2c378c4387c583ee41185b108683d039a0ddd0626e0f7a51081479ba52af59341779d87168ecba0e8471e452db8aa0dbefbb31f4acee606077a2381a3896eb32b2fb42ee24d770cc5521146f5a432ee77ee0ad82f97276340ebcba8c9862038e9be4aa229ee7a9b1c8956555f5be51dbae8a72816e55affd59e0cdc747817fe135e39d4042d976718b038e69aa00d154d20c34c8a988b071e4fc6ce107fed96c3c41463db3f33d4291e19ffb2742b02dea4eebfa5b79f57bb5ff1e7041d3b2466c9a03b1c96ef71711b88a0d99fc587af35fa4b99a430c1272f6fef8105c07de7d51fbf5462c2e38da288dffb82c4c55264c42b3343cabd37b60f72dc7b1480d96fa55ccb53bfbce541a95226490eb878a9af5c6421bb3523d823088b39ef9b3538cfe07c462974a5e040000",
    ],
    [
      "ETag",
      "+VxZImNFGvy4B/SfuUS9jw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-30-1640201729937"
  )
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
      "514f83301080ffcbf928980d7413923d30e37491e8365d8c31cbd2c1814ce0b03d5c70d97ff78abeb477d7af775f7b84cfa24e21845d917fb5a8bbb31c796983159ab664235b43b541700059e542ae17d1fc3cc8ee82b7ee81afe6cb9fd9f2353d4c264298e4032b05e111b202cbd440f87e845a5528d7b65bdd77148cbbc65666f153f4226945a94d1fd7711c4de35b386d4e0eec69b7c20c35d609da868da63d263cb7ae46554d89aea1562768a087fb835c53db284de44ac5f507ee707439f006c3b11704fe58c09212c505d5f619cf20639858952b3a882a0c05d07d28d659bf7e4bd9bbf07cebb4f9a7a71da3596892d106ed547f74fde77043d68bc597758b0e244afee3be600833551a3cfd021d4dd5c86d010000",
    ],
    [
      "ETag",
      "UPAI+9fG9YyKt5IQzFQWdw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "d0c97282300080e177c9591d2582a63750284b4187a13472611052960e4b08098bd3772fd3fb7ff9bf1748d29430160fed0f69c01b981309edd2dd73af62b15f025722c798f6a3aadc72c92e293d372317accfbba7738cec04d9e78239505afb82aa05f48ceea41ef23a1c73f83566f736c49381fd123feca89a25d75d6e10550efb28c89870c912da84ca833261a3d15adf93f576a0cc40166b0d323d866f2df72eef9f58e133ee7856f260eb8437231aa0459b25bdea33914f2cf5328b0755ed16d9f9919891be551a53f4f786c55b519b82a7e172bdcc14c6d15ef6174bafea1c6c0099bab2272c2ed76f2823b401ff08f130776495d048d2931efcfe01288b1eea23010000",
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
      "Wed, 22 Dec 2021 19:36:01 GMT",
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
      jobId: "grouparoo-job-31-1640201729937",
    },
  })
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
      "2bc8fbb826e1119212295aa394ae9102d980b49aa6091963a85bc00c9b6e5595ffbe6bd374ad2ab59fb07dcfb9e7dc078fe88e35395aa08c95bf7bda3d7cbae5193a4154e2125ef79f43f93758dd6e6bb70a84e35cbb0d89cae512104cb104aedb8a8e04ef3b42c5621f8fcb8ef72dee381f41a291638dacd9d4b44d6b6e7b9e33079ea055b165cd1db06fa46cc56232396a8f4bcecb8ae2968931e1f5f3fbe4de9eb41dbfa5448ac96bc909a888c9fba25f2a4eb064bc59ee6330d00bdaa5b4c6ac020bff997976f63af598e17a5c02f89e118a09e17d23952d48417853b0b2ef7456b47844dae68b038afdadbf4e0cc2abbe6ed206d7f4c4c8b1c4a97c68a97111ed0263135eeca260956c76611aaf2ffd60355eefb6fb208c8deb4b3ff20d89b38a6aaeb134cef42d840be8e75448d668f5443d2be5a7066dde8e4511405ad02198cecd19b64e4d2f2bb239294e1d372b4c9a65a7d9dcc54e66126f4aa7794631f0b4a866e1863753ec665337cf52b728f2746ac2c9b367f3d4c6ae6dd933c7f2cc1c1d4ed09f8e497ace44cb051b3a84aea34de2a749b40fd7abc4d72514b8afe4f9604c15f0d2a3840253d3b400f84e5d0715651cd454cb3761e247ab75b2b9f287296f6989c943fc1be65ce04a5040e30e1a286917f01c9a86c255e09f03584feddb3128d0e2e723527d574e5eb4fd999ec0109565a9bf284ea24df855db3922ae70d56bc8fd70402d58be81fac0f5e117206151872ce8fbde8f7ea0e129a205ed68433e9e288075e0c3ffedb8fcea6f8e958c907087fd214289908e0e7bc474b947f6cc9a7b36d2e04ebe8979b673ec9acaa132d29a36f2a9a261f9a1d041ac17cf2008c20a84ba5b877f655e50147c040000",
    ],
    [
      "ETag",
      "U+NtxMAjLm5lMs33W5ncRg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-31-1640201729937"
  )
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
      "4fc2400c86ff4bfde8483640d0257c183a14051418898931e4d8ba39ddd67977d310c27fb737118d9ae8975bdb3dedfabebb0d3ca545042eacd2e4b942b93e48504f4d304355655af1a3a4422158805a244cb6c68ea75bfe11ddaeaffc3899da879793c16bafc7840a1f3017e06e204e318b14b8771b28448edc165256e5c5b2ce2cd0ebd214e7c16c3839e73ca7c8e493c568e4f5473e6cad7d6324b458d6fc3fdaeeb7163cd26a86314a2c4234bb94921e31d443235389bcccb0a1a892212aa8e1fa4522a92a85246a70a5d1721a4ea76d376da7db3c39697519cc28143aa582d9c59cf7034d5a64337a6595d06140d6210b8eebf385cb69540b31e1701274daf57e5f018921c968f92757f2ba0f82ffc207b673e03b2772aa0abda706a36befb7716ce9e7a8332ff07f104ab3517b24188efd79e08d6f0c77bf93de5f6b543792d84785c642c76e1f1f753bf6bbaba7649ce6efb85a56684128f8725ca41adc58640ab76f9d24edab7a020000",
    ],
    [
      "ETag",
      "3M1At3E5oXyKEfgQ0+JNFw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`date`) as __result FROM `purchases` WHERE  `record_id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-32-1640201729937",
    },
  })
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
      "5b",
      "4f",
      "db",
      "30",
      "14",
      "fe",
      "2b",
      "91f7b249d0a64ddb34952a56956ccbd40bb429884d536b3b27c190c4c1769810ea7fdf49420708099ee2f87c9773f323b9157944468489e4ae04f5f0e946327244c0d0046fc3f0345e173f8b9b5fa67f35d7ac7f9e4db2f3f11811a262699a15291c6b592a0e7ab459b71225cb822a298f51e8d8e91e77063dbb6b77dcaee7392ef234a4f14ce4b7c8be36a6d0a376fbe0dd4aa44c52a085d02d2eb3fff7edfb6ebb50f206b8d1edd7966d74d1edf74d4f52c9a911321f6fd69840a9416d21a322c5149e9911fbfa5aba2568d64a107c2f3850ce65999b2a2d94e0328f4552aa5a958c1e499de68b0359fb337f1a5ad3e566117ede45d4c0ee8b45b5b5dd2ad0656aac6fabe5dcda15e8744d35e89d75f9c35ff996b553c0a58ab622da5963ebc49a05f320b43a681a813622af2d43ca52a8ec9eba12bc9d4545a006a59be0d6b507b433b43d163397c743a7cf621b181b32b74f1d6673af07bd8801459ea9d46b16cd65ee749c28ea7336741cc71ec260d8e9b281e731864abc1f752963008eeb91fd11f9ab848153a10ba945d31a72b90a427f1bae368be924f4eb32628a0d386d92ab8a7899a7c122b7b65dd5fb4e6dfb2a2a24ba55bd0e16a1bf9a4cc3e0c26fc63b8384f287f51d0e38a6a9064453453330a0e632c2c691b3e53a0883e5623243463db3b3034293d1efc76742f850d49d36f5b7f21af46aff03e082a6658db86f0ea443f6fb3f88c0556cc8e47ce3afae4873b5821814e4fce3f121b80e7cf8a20eeb8d585c70b4d106ff7159b8ae4cb88266694456a7f7c41e74fb9e476ab0326f62aee71e3a5369548a90416e9e2a6ad61b0b6dcc4afd1f84419cf522587cc7e83faccb93dc5e040000",
    ],
    [
      "ETag",
      "TTDfSpJpjZt5YMsb5QmAmQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-32-1640201729937"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff2d906f4fc2301087bfcbf95296f047982ce18528510c1298f2ca1052c66d0ebbde6cafe242f8ee5ea76fdacbef9ede3de9193e4b738004f665f1e5d1365705f23a14293aafd9c9559371081d4056859075cc8db91e3d0f877ee957fa65bd79303fa7c94408977d60a52039435ea23e3848decf605485f26cb7b3ed44c1b8a943325fbecd1e67a904151d42b0dc2c1677d3c50c2edb4b078eb44f31478b26c330b2b674c48ce7c1d6a9aad61839f23643072ddc360a4bbe56962892241af4a3dee8a6dbeff6e2fe783c8805d494292ec908bb790559c3c44aa7741259e80960db52bcf3f6fc96380e42db7f74da30ba9525d9eb30ac1c8c6eff04ee2948b1c8b2f5d8814cc9773c950c49aeb4c3cb2f05ec8e156c010000",
    ],
    [
      "ETag",
      "p7tyn+6J55uNuPlMQUDnxw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "00",
      "d0",
      "bb",
      "64",
      "2d4e1029a63b155a11d10c8a221b26c4b4d0208600e1e3f4ee757a84f79e8050caea3a691e9c95e01d0c6486a6749ac265a4e078da97b3058eba0c633d8357ffe2a9e3a1bd6d87d60d7bb2d651f9a54439a4e645db9a916620bb91fc9cd43fa4d27d6f73da655df061854852ca4b1138adabe67e3c62db29165a5af28e444817f12ec24259c577cc2deee0eb1808d89c2bdd0dba305d8ec3e61185c1da9f5b48390ddcdfbbb042a25e7aa28f4df2765fb956369385d4dab357b83dfea4dd8dcae26870fb68e4d2a87a5be5bbedea0e8383b8cd1b72586f209800d68b5cb23ac95f6ec3446802fe13926610ec35b1624432097eff00d58d67ce23010000",
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
      "Wed, 22 Dec 2021 19:36:03 GMT",
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
      jobId: "grouparoo-job-33-1640201729937",
    },
  })
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
      "2bc8fbda240e791022456b96d23553425620adb66942c618e21630c5265554e5bfef629aae55a5f613b6ef39f79cfbe009ddf322465314f1f4a166d5e1cb9d88d019628aa4f07a4d6335b14656b6fbf63be3a2defdc8f7dee36c0608deb024c9cb8c75a4a82bcae474eb77d34ad425a984e840a2ce60d0e98f87d8c47dcbb4ed81053cc9b264c58b7b60ef942ae5b4d73b69775321d28c9192cb2e15f9cb7b6f6ff6ca4adc31aa64efad640f5464ef63d1af99a0447151ccb63e18a825ab4296139e8185ffcc383a7f9bbacb49de4d01bce794114a455da8c616a4a0a248785a573a2b9a3e216df3d501f9ceca59040615599d176141727666c44491501d4a665c7a9bb5b1742f37de7a1e2c376ee82fae9cf5bcbbd8acb66bd7376eaf1ccf31148932a6b9c6cc38d737172ea01f33a978a1d583e6b9517e6ed0f2fd581a02484bd606430b8f497f82ed28892c9a4c06a328c12c8a269135228308537bc88671c408f0b4a866914214b6c9301e4fcc708c6d120e31b1c288da3834a3516c26b43f32fb181dcfd063c515bbe0b21492b71d42b7de3270c2c0dbba8b79e0e812125267eaa235d614f0daa38202438cfb00fca0ae6313e502d49a962fddc0f1e68b6079e3b4535eb194d083ff00734e482619a049050d54ac5a8b189a86dcf9dab900b09edacf5350a2e99f27d4f4bd71f2aaed2ff40086d85856fa8bfcc05bbadfb59d13e28664b586ecdb032ac1f20eea03d7c7bf8084456db3a0ebade3fd42ed93c71256b1827e3e5100ebc0a7ffdb69f9010beb0f3252c11df687ca468456acdd23aecb3db1c783311e210daed4bb9835b04f5d6b72341959ce0af55c51bbfc50682b56cb17100461055cddade33fead36d7a7c04",
      "0000",
    ],
    [
      "ETag",
      "Qcdt8757lhBZliouhJmvRw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-33-1640201729937"
  )
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
      "86",
      "ff",
      "4bfd3a920d1064891f26a26200618cc4c41872dc0a0cb775dedd3448f8eff6a6a25113fd726bbba75ddf77b78387248fc18745b27a2c516d8f56682636085197a9d1fc2828d7080ea0112b26bbd3a12727ebebae377bd9e2ad7075e68d83d35326b45c6326c0dfc132c134d6e0dfed201719729ba4b4ccf279953960b6852d4ea3b03fbae43ca3d8e6a3d960109c0d7ab0770e8db130625ef1ff68bbdf3bb0a145884b54984bb4bb148a36284ddfcad4222b52ac692a95440d155cbd58292a0ba1886a5ca9351a35afd574ebaed7ae773a8d368329496112ca999d4d793f3064441ad233ab841603aa0a59f0b23a9fb89cc495101bf64751ab59edf715502849c5f33fb982d75d0bfe0b1fd8bb03df399151999b037531b8097e1bc7967e8e3a0fa2de0f421b36ea8044fd616f1a05c3b1e5eedfa59f6d0deab122f651a3b5d0739b27c7ed96fbe66a97acd3fc1ddfa8121d90822fc75562c05f8a54e3fe15cc856d4d7a020000",
    ],
    [
      "ETag",
      "CSM1cQhJC1UzyeXa0sm1PA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT MIN(`date`) as __result FROM `purchases` WHERE  `record_id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-34-1640201729937",
    },
  })
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
      "00000002ff8553ed4f9b4018ff57c8edcb96d802a52da549e31a651b498baea5ba6559da3b78a0a794c3bb43a3a6fffb1ec04e8d897ee2b8e7f7f2bcdd23b9e64542c684f1eca60279ffe94a30724440d30c6f395d8626440f77a3edc354fe5a6d5906ea6e324104af598aeeca1c3a4a543206355e2dbb99145549a5101d14ea38fd8e3dec5b3dcb767b9ee7b8c85390a7335e5c237bab75a9c6a679f0ee66426439d092ab6e2c76ffefcddb9e594a7105b156e66b4b135d94f9bee9712e62aab92826ab25265029906bd8519e630acfcc847d7d2ddde574d7cd107ccb63a0712caa42d769a1442c8a9467956c54c9f8913469be3890a53ff34f22631e849f3709d5b0f9625065acd71254956be3dbe26c6e6c4af4d952056a635cfef017be616c24c442266b9e6c8c89716ccc82791019365a26a0342f1ac388b21c6ab3a79e046f275113a846e936b876ad21b54796c752e6c6e9c819b0d402c646cc1d508759b1d7877ec280224fd7ea0d8b16a2e851d7ee790e2268e2b809b3996b03ed39430786aed71b78c930b5475e42f647e44e720da75c9542f1b631e4721144fe3a5aacc29369e43765a4141b70da265717f1324f8d45ae2dabaef79ddaf675940b74ab3b1d8491bf989e44c185df0e7706198def973738de94e60a104d25dd8106391709368e9c9f2d8328380ba7336434133b3f201419ff797c2644f765d369dd7c6baf61bff13f002e685e3588dbf6406cb2dfff45042e624b263f57fee23769af1690828422fe787c086e021fbea7c3722316d71b6d94c67f5c9658d526b1847669f8ae49ef893decf7070e69c052bf890d46a343676a8d5a117650e8a78adae5c6425bb34afd076110671d06e1778cfe0386a787935c040000",
    ],
    [
      "ETag",
      "iaSN/eTzw8hzArXUhbgesw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-34-1640201729937"
  )
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
      "6d6bc2400c80ff4bf6b585be88ce821f745314cad874d2c110396b5a5bdba6bb4b37a4f8df97ebf6e52ec93d491eae876bd19c218253917f75a86f0f39f29b0db668ba8a8d5c2d3506c10164950bc9d9ae0c57c9e623b95c8bd59e972ac9d7f96c2684492f582b887ac80aacce06a2cf1e1a55a3b41d8f7a982818df5a5b799ebf2f25abe96cb3977d1ccf17f112ee87bb03259db698a1c626453bafd55462ca1bab6a54dd56e81aea748a06067878c83575add244ae54dc70e4fae3911778fe24984ec3898015a58a0b6a84ddef40d630b1aab6f423a6e00ba08750a4b3e1fc967220135c2f703ddf9a1dfe7b163746f3aa49040cdadde1f8f1cfe489ac1d8b35eb0e1d48957ccaba6088325519bcff029ce8561772010000",
    ],
    [
      "ETag",
      "tfSj3FWIXWhkiFUtEaWgHg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "0000d0bb64ad0e5f95ee688d80228280266e981022121490308238bd7b9d1ee1bd372094322192ae2e5905bec08b28c68cce52c9444f698cbc7b2187e95c90b3404b7e3bf2081d0852f1b029edbded360f7d5c6962ea2287ce8f6aff43bc8af6410df1156b519f436a7bc8c5d24eaeba397910194a94ee4b2d7e72116677d9daef524ac78d61632ce1857f3ac802aa56f0544a5638310a6fe6666bc39e2963a60ee7c66f7954b88ab20d2bff64c14e4fd6593f35fdce29601d5f38abeff86a26e2b23b2539ee170669c795129b61dec281afd12273f832f7d2630026800d4dd13291141fb7aa1bc604fc2724ddab619f896f465ad682df3f62e9af6423010000",
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
      "Wed, 22 Dec 2021 19:36:05 GMT",
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
      jobId: "grouparoo-job-35-1640201729937",
    },
  })
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
      "85536b6f9b3014fd2bc8fbda24e40d91a2354be81aa9212d9056d33421dbb950b704136c3a4555fefb2ea6e95a556a3f61fb9e73cfb90f9ec9a3c8b764429848f71594876f0f929133029aa6f87a7dfb23702ef607cd9c30ba5bec6722d83fdc4ca78810354bd15d91414bc9aae4a0269bb09d96b22a6829650b13b5fac3567734b07b7677dc73ddfe18790ab2e44ae48fc8bed7ba50934ee7a4dd4ea54c33a085506d2e77afef9da75ea728e50370ad3aef253ba8a23a9f8b7ecf24a75ac87cba09d140a5a08c6147458616fe33b7ecfc7deab6a0bb768ae027c181722eab5cd7b63005977922d2aa3459c9e499189b6f0e24f4aebc7964719955bb3ccee90eceac2dd534d68702ac8b60bdb296fec53a58cda2e5da8fc3f9a5b79ab5e7ebabcdca0fadbb4b2ff02c4d5906866b4dad7373f3f182fa5b505ae4463daa9f6be597062d3f8ea526a0b48226188fed11ed3ab6cb1236e689d31fb2c406c61c361ed23eb3b93b80c19601459e11352c9acbdc660eedf5476e4c5d87c7836d6f183bc33e8d81810dddb14d7b6e428e67e46f29342c842aa4124d87c85db08cbc380a36fe7c1679a6848456995e34c6ea02de7ad458606cdb5d047e52d7b18e0a896a75cb977ee405b379b4bcf59a295f414af921dce39c139a2940342db1811aca95dc62d3883f5b790b049ba95d9f828a4c7e3f93baefb593376d7fa54738c4dab2365f1246c1d2ff69ec9c10b734ab0ce4a93990022ddf637de8faf80791b8a84d1672b3f1825fa4790a20811272fef544116c025ffe6fa7e5472cae3fca288d77dc1fae6a115e42b347c2947b628f8603db25065cea0fb161d73975adce5167841de4faa5a266f9b1d046ac52af200ce20af8a65bc77fbb7c42087c040000",
    ],
    [
      "ETag",
      "PVBR8Fqytb8STWDqAiRqjQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-35-1640201729937"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92dd4ec2401085df65bc2d495128dac40b407e1a1015ca952164d94ea1d876eaee5683847777b62a1a35d19bedccf49be99cd3ddc3439247e0c32a593f96a876276b34773698a22e53a3f95150ae111c4023d64c0643cf8d47379e9c0cc4b6d97bc9475dafff7c79c984961bcc04f87b88134c230dfefd1e729121b7494acb2c5f5699036657d8e22c9c069301e71945369fccc7e37667dc8383736c8c8411cb8aff47dbe2e0c09656538c51612ed1ee5228daa2348195a94556a458d3542a891a2ab87ab15654164211d5b8523b6bd6ea5ec33d75ebadd38b8bb3168329496112ca999dcf783f3064443aa56756091e03aa0a59705c9d4f5c4ea24a880d8349e835aafdbe020a25a968f92757f0ba1bc17fe1037b77e03b27322a7373a4fae39bf66fe3d8d2cf5157edb0f783d0868d3a226170dd9b85edeb5bcb2ddea5777606f5ad22f651a3b5b0ee36ce9b2dcf7d73b54bd669fe8e6f54890e48c197639818f063916a3cbc026c0144b27a020000",
    ],
    [
      "ETag",
      "IH60fKO6cNGaj5EznKC6Fw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT MAX(`date`) as __result FROM `purchases` WHERE  `record_id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-36-1640201729937",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85535b4fdb3014fe2b91f7b269b4499a364d2a558c41c632b505da1498a6a9759c936248e3603b6508f5bfef24a15c84044f717cbecbb9f981dcf03c210312f3d56d09f2fed3b588c91e014d57783b1e7fdf887f93ae33ff75e49d99a3af97c7d6c5dd7088085eb1145d1719b4942825033598cfda2b29ca824a215a28d472dc96ed76ad8e65f73bbeeff491a7204b473cbf41f695d6851a98e6cebbbd126295012db86a33b17eba37371db390e21a9856e66b4b135d94f9bee97e2618d55ce4c3f90c132815c805ac29cf30856766127f7b2ddde674dd5e2178c31950c64499eb2a2d9460224ff9aa94b52a193c903acd1707320b46c161648c0f2e3f2f13aa61f9c5a0ca582c24a832d3c68fe9c9d85816e8734515a8a571f133980686b194c0844c163c591a4363df1885e330326cb44c40699ed786118d33a8cc1e7b12be9d4445a01aa59be0a26fb9d4f62c3f4ee33e4b3da717a716c4b117f77bd4892de677a19bc44091a72bf59a4573918367bbbd047a8e457ddb02df625d4a3d1bfa6e0f3a71cff5c1eed3c46364bb47ee24d770c45521146f1a432ea661142ca2e97c72781005751929c5061c35c95545bccc5363910bcbaaea7da7b66d15e502ddaa4e879328981e1c46e179d00c77042bcaee67b738de94660a104d255d8306391609368e9c9eccc2283c991c8c90514fec74875064f0e7e19910dd1775a775fdadbcdc6eedbf039cd3acac119be6406cb2ddfe45042e62432667f360fa9b345753484142ce3e1e1f82ebc087ef69b7dc88c5f5461ba5f11f9785a9ca8449689686afebf41ed9aeeb383ea9c152bf8975bdceae339546a5086bc8f56345cd7263a18d59a99e4018c4594fc2c93146ff031df1e1855c040000",
    ],
    [
      "ETag",
      "MMBvoxN43UJD8Q/L+XG0Ww==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-36-1640201729937"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff2d904d4fc3300c40ff8bb92ea21fa8639576d8a01293c6041bdb054d53d6ba5d475a97240595aaff1da770496ce7d97e4a0f1f659d410ce7b2f86c51773705da57176cd1b4ca1abe1aaa0dc204d0ca82c9db9f43d21cfc6267a2cbb3c2cdaaf3a6aa98cf9930e9052b09710f79892a3310bff750cb0ab9ed74d2e344c66cd7b8cae3e22de1aca2cc659bfd7abd58ae13188ec304ae74de628e1aeb14ddbc46d31553bb72aa46568d4261a8d5291a18e1f1a1d0d436521309ae8830127e74e7059e3f0d66b370caa0a254da926a66f73be03596ac545bfa6653f019d063c8d2f9787e7139e009c20b44e039b3e37fcfb2b3685e34b18041b73b8ceeff4c1ec8d959b6b6bac509a4923fe5a9b410e752191c7e01c1c8a34272010000",
    ],
    [
      "ETag",
      "/zVEpV1gSs6hMleNIy07lg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "1dd0516e82300000d0bbf4db180461b03f306e0c8aada342e1a74128082876503b74d9dd677684f77e4051967c9a98bcf67c00afe05ee8ceb25c1e35972aed4170cf365ceaba3605cde1a38291e91f6ebcb33b352bbab693cf4b84d59cb689a1b526f1bb15d639bbb6b74ca6cd9c046f16dca67e1431231fbe47529f5d973846b4c1c626c598ede3fdaa892df4421ac6ac93082075a1f0bd5b96236d2b91c8a994ea74dc09a6f7213997625c571777077365c10756fd654f2c2445e8c1dd36349b38615f1467755767e8bdf6ed21b029d51e1855a4e0b43a5af629c40112437c050bc067d18e7c62edd36d988eb300ff094cde057f4e78bc18f9087eff00cdb54ab423010000",
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
      "Wed, 22 Dec 2021 19:36:07 GMT",
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
      jobId: "grouparoo-job-37-1640201729937",
    },
  })
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
      "5d",
      "6f",
      "9b",
      "30",
      "14",
      "fd",
      "2b",
      "c8",
      "7b",
      "6d1212282491a2354ae98a94908d9056d33421e35ca85bc0149b6c6d95ffbe8b69ba5695da27b0ef39f79cfb014fe48e973b322509cfee1ba81fbedc8a849c105034c3dbb0fafbe8f89e5758f572efdb76058f4b773e9b2182b72c498b2a879e144dcd404eb79b7e568ba6a2b5103d4cd4b3dcded0b1cd913974479389e5224f429e2e797987ec1ba52a391d0c8edafd4c882c075a71d967a278b91fec4783aa16b7c0941cbc951ca08a1c7c2cfa35178c2a2ecad97683061a09750c05e5395af8cfdc25676f53f7392dfa1982f79c01654c34a56a6d610a26ca94674dadb392e913d1365fbd908db7f41691c144de14655cd2024e8c1d5534560f151817e17a65f8c1c53a5ccd237f1dc49bc5a5b79af717ebe576156c8ceb4b2ff40c45931c34d7981967fa14e001f57720152fb57ad45eb7cacf0df2df8fa525a0b4842e18bba64387637392a489cbd2b1759aa42624c938714fa995986c6283bd4b80224f8b6a162d45e9a6b6e5ec2c33b62dd3896d6a0fe3b163b178083658136b683aa78c1c4ec89f9a2b38e7b21292771d22d7a11f7971146e83c53cf27409296d7275de196b0b78ed516181b1690e11f8415d8736ca05aab52df783c80be78bc8bff2ba292f21a3ec61738f734e692e01d1b4c6062aa85762874d23c17ce59d23584fedfb3128c9f4d71369fbde3a79d5f6177a84436c2d2bfd249b28f4836fdace117145f34643f6dd0ba9d0f20dd687ae0fbf11898bda65213fb65ef893745721a45043c93e9f288275e0d3efedb8fc88c5f54719a9f08cfbc3642bc26ae8f688eb728f6cc7b54c9b6870addec56c737cec5a9ba3cd0805",
      "94eab9a26ef9b1d04eac912fa0f697b20d02ddadc33ff371c5ae7c040000",
    ],
    [
      "ETag",
      "Rpxz6IEEm3rLvI44pezL7A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-37-1640201729937"
  )
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
      "00000002ff8d92db4ec2401086df65bc2d0927419a7001028ae1642931c610b2b44329b69dbabb8520e1dd9dad88464df4663b33fd663affdf3dc07398f860c3320c5e3294fb8b00f5bd091c5459a4153f524a148205a845c0e47848afdb51d279d80dd5eeae372e458f8d6ed06c32a1bc35c602ec03ac428c7c05f6d301121123b779146571b2c8330bf43e35c5a9ebf447379cc7e49b7c341b0c5aed41178ed6b9d1175a2c72fe1f6df3a3051b5a3ab842898987669754d2063ddd37329588d3080b8a32e9a1821cce5f0492b25448a202570a957aa154ab16cbc552bddc6854ea0c46e4091d52c2ec6ccafb81262d228776ac126a0cc83c64c1abfcdc7239f4732126ec8fdc5a35dfef2b20d123e92ffee4525e772df82f7c602707be7322a62cd167aa3718b77e1bc7967e8eeab4dcee0f426936ea8cb8fd6177eab68613c3cd4fd2db7b8d6a22897d54682c2c15ab5797f55af1ddd56b324ef3776c2d33b4c0137c396e430df64a440a8f6f5bc602cd7a020000",
    ],
    [
      "ETag",
      "OMozvNnDWwMswJFO1lY9Eg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` IS NOT NULL  LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-38-1640201729937",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85535b6f9b3014fe2b96f7b2494d80900289147559c23aa494740969354d5362c0a66e0153dbb4aaaafcf71da0e94595daa710ce773b171ef10d2f533cc631cf6e6b2a1fbe5c8b181f61aa49066f4fa3636ab8f3686d30e3da9edffff0aa60369d4c00c11b96224595d39e12b54ca81a6fd6fd4c8aba2252881e08f56caf67394373605aee6034b25de0299ab3052f6f807da575a5c68671f0ee67426439251557fd4414cfef8dbb815149714d13ad8cb79606b828e363d3935c244473514e366b08502b2ab7b4203c87082fcc34fefe56bacf49d1cf007cc7134a9244d4a56e628144224ac6b35ab6aa78fc88db98af1ef0da5ff8b308cd969b30faba234543de7d4344a1ed565255e71afd5c2dcfd0ae02af2ba2a8daa1cb5ffeca476827692264bae5e90e4dd0099a8673f482dba1608dc26584c2cd6281d022380b226441a6942acdcb365144e29c36699e8616bc5f5543201af4bae2d6351d6279e62866b19b30cf3e8e9949e3d88bdd6362c766321ad2611a53023cdda8b72c528ad2b1868c31db662c2623e0bb710a32364b1dcf311961f160783c483c17ef8ff0bde49aceb9aa84e2dde4f0e52a88fc6db4da84b369e4b76d3002d39977e19a265ee7d4d0e4d6349b7e3fe86ddf54b900b766154118f9abe92c0a2efc6efb0b9a91e4617d0bfb67245714d04492826a2acf440a83c3e7cb751005cb70ba0046bbd2f30342e1f1dfc71742f450b593d6ed6fe3e50c5bff03e082e4758bb8eb1eb085f7fb7f80804bedc8f8f7c65ffdc1ddab156554d232f97c7d006e0b9f7e7087eb072cdc3fd8280dffe15812d59824927647c38b36de13dbf12cd3c12d58ea77b5816b1d26d368348ab4a0a57eeaa8bb7e68b433abd533088ab0eb30084fa1fa1fc88a0ef37d040000",
    ],
    [
      "ETag",
      "GT5e/7DTS/f/j3DwB8pICA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-38-1640201729937"
  )
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
      "00000002ff2d90dd6ac2401046df657a6bc0f89718f0a2166b04b16d5aa15044d67592264d32e9cea612c477ef6cda9bdde19bb33387bdc2575e9f2182539e7db768babb0ced8b2b12e4b6b42c574335230c00adca84d471b03671fc380b5a4ec3779e844fc5f4b25808c1fa132b05d115d21ccb3343f471855a5528cf8e47d34f14cc768d4b36bbb7d57a954850d1d905bbfd767bbfdcaee076b80da0a05382291aac35ba918da102b5dd385b565553a2c7d41a8d0c3ddc3732436da30c912789370e3d7f36198e867e309acfc7818025696573aa85ddbf82acb1645599d04564c117c0f4a578a7fdf923f1cc091dfed16567919f0dc95e46b7723a9dfc093c9093b2226b4d8b03d04abe23ce2d44a92a196fbf8accda326c010000",
    ],
    [
      "ETag",
      "cH7GrHHF67usf8Xs48Oj5w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "d04b7282300000d0bb646d1c10d1d05d5024955f4141db4d0648220c2d20a0129cdebd4e8ff0de13a479cefb9e0e4dc56bf00664ba30e6f93c53f0f9ae4c472f6efcd0bb5c6e93e67d460bffa68f2210c8a481e022892c7aac53ec6e766b1871a60706b1a8bfc2d5a12079b3b0ac776824f0ca273c3ec8a4d48ef61d06eededba8e3876ba3ec307827b156997eb2afedb235ddd6ae7771a9c183eb3b5f0e61b1bca2c64059543fb00ad932583a4328b6191ba5b09dfb1dca3d5b11e216a78e650aeb6567a6586fe273e20b19ab745d8984f83f8a0d7988b745817a345e12b6a508cc001fdbb2e33d2d5f6e4d378c19f84fa0836cf96bc2e469c73bf0fb07456928e623010000",
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
      "Wed, 22 Dec 2021 19:36:09 GMT",
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
      jobId: "grouparoo-job-39-1640201729937",
    },
  })
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
      "db",
      "4ee33010fd95c8fb4a9bb4e95daa96aa84a5529b429a8256ab5564bb936048e3603b2084faef3b71280b4282a7d89e73e69cb9e485dc8b6247268489eca102f5fce34e327242c0d00c5f0ba3fc91a461b9be737b57f36b5596b3eed3748a0851b334dd9739b4b4ac14073dd96eda9992554995942d4cd4f2c7adcea0e775bdceb03b1efb43e469c8d3a528ee917d6b4ca927ae7bd46e67526639d052e83697fbb777f7b1eb964ade0137dafd28e9a28a76bf16fd994b4e8d90c574bb4103950695c09e8a1c2dfc67eed8e9c7d46d41f7ed0cc18f8203e55c5685a96d610a2e8b546495b259c9e485589bef0e64132c8379ec709957fb2229e81e4e9c1d353431cf2538e7d17ae52cc2f375b49ac58b75986ce617c16ad69eaf97db55b8716e2e8228700c653958ae33754eed2dc40beaef401b5158f5b87eae955f1bb4f83c969a80d21a9a6032f406b433f2c62c65439e8efc3e4b3d606cc4867dea338f8f7bd0db31a0c8b3a296450b590c7c9652dea3c988f720e9d10e4b984f593218eeba3eef8fd8b83f208713f2a4848133a14ba945d32172132de22089a36d389fc5812d21a5556ece1a637501ef3d1a2c30f1bc0e02bfa8eb50478544b5bae58b300ea2d93c5e5c07cd94979051febc79c039a734d78068aab08106d44aeeb069249cad823304dba95d1e839a4cfebc90baefb593776d7fa3c738c4dab2b15fb289a345f8cbda3922ae695e59c8637320255abec5fad0f5e12f2271519b2ce46a1b44bf49f314410a0a0afefd44116c03dffe6fc7e5472cae3fca688377dc1fae6b11aea0d92361cb3db207e3ced0fead862af329e677bd63d7ea1c7546d843615e2b6a961f0b6dc42afd06c220ae4068bb75f8073b77c5f87c040000",
    ],
    [
      "ETag",
      "ntr38oaNpOj/4QCVrppA2w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-39-1640201729937"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92db4ec2401086df65bc2d493908d2840b4e2a04104a31318690a59d42b1edd4ddad8610deddd98a68d4446fb633d36fa6f3ffdd033c4569000eaca3cd738e727fb1413d33818b2a8fb5e24746a942b000b5d83069670ff718f66cb5efcaf9d05553dc25c359abc584f2b79808700e104618070a9cc703a422416ef329ce9374556416e87d668a73cf1d4c6e384f2830f964311ab53ba33e1cad736320b45815fc3fda96470b76b476314489a98f66974cd20e7d3d30329548b2184b8a72e9a382022e5e6c24e599904425ae94aacd52b95eb32b76b9516936ab0d0663f2858e28657631e7fd409316b14bafac12ea0cc82264c16171be70390a0a21261c4cbc7aadd8ef2b20d12719acfee4325e772bf82f7c602707be7322a13cd567ea7a74d7fe6d1c5bfa39aad7f6fa3f08a5d9a833e20dc6fdb9d71e4f0db73c49efec35aaa924f651a1b1b06cd7ae2e1b75fbddd52e19a7f93b8e96395ae00bbe1cb791062714b1c2e31b1ce52f847a020000",
    ],
    [
      "ETag",
      "0pYVefD0syCrSJRsPejmJQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` IS NULL  LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-40-1640201729937",
    },
  })
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
      "00000002ff85535d6f9b3014fd2b96f7b2496d42080949a4a88b52b62125a405d2ae9aa6c4980b750b38c5a65b55e5bfef02cddaaa52fb84f13de79e733ffc486f4511d3098d447a5741f9f0e94646f488826629de2e95995d25811f5dffec4356ac83b3fcaf713e9d2242d42cc5f25d06c74a5625073559079db494d58e95521e63a263cb38ee0d2dc3347ab6391ef76de429c89285286e917dadf54e4dbadd8376279532cd80ed84ea7099ffbfefde9bdd5d296f806bd57d2dd94515d57d5ff424939c69218be93a4003958272033913195a7866c6d1d7d7a93b82e59d14c1f78203e35c5685ae6d610a2e8b44a455d964a59347dad87c71a081b370e62199afd65ef879cbf29abcfd4298229b4d09aaca34f9e6af9664bb43ad6ba6406dc9e50fc77708d996c065196f44bc2553724266de2979c66d891b106fbd5810b270976e487ae82706a545d1b809599441ede4a961eedb31d504a631571bdcd8c690f546c6384a229b27a3fe204a0c88a251640f583f32f8d8022b8e80214fd7d91b162b64c1c791398cc69c1bac9724a6351af1512f1e98301e98033e021becc418c68cee8fe89f526838156a279568bb462f7d377436a1bff6e6b3d069ca481876e6b4355717f1d2a7c622378651d7fb4e6dfb3a2a24aad56370bdd0f167f3d0bd70dac92f2065fc21b8c3d9272c53806856b21c34944b1963e3e8d92a704377e5cd16c868c6797640283af9f5f84c081f764da775f3adb58656a37f005cb0ac6a10f7ed81f6e87eff1b11b8a52d999eaf1dff8ab6573e245042c13f1e1f829bc0878fedb0f988c5dd4719a5f11f9785ab5a8497d02e8dc81b7b4f6cdb30cd216dc0a57e13eb5bd6a133758e3a23e450e8a78adacdc7425bb14afd07611067edb9de778cfe03fa86cb9d79040000",
    ],
    [
      "ETag",
      "Ms2lYfSRbhX3elnUSPmx0Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-40-1640201729937"
  )
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
      "6e",
      "82",
      "40",
      "10",
      "45",
      "ff",
      "65",
      "fa0a0928d14ae2831ad29a8069694d6c1a635618280a0cdd5d30c4f0ef9dc5beecccde3d3bf766ee702dea147c3817f96f8bb27fca51bf9b2646d5965a7169a8560816a0163993338a3a6f5a75cf725344b743fc25af51b35a2e9950c90f5602fc3b640596a902fffb0eb5a890bf9d4e729cc898ee1ba36c779fc14b10b350516a84dd3e0c57eb3080e1385870a1738c194aac1334231b49174cf4d6a455a26a4ab415b5324105233c3ee492da4648229b15db736c77e63913c79d4f168be99cc19212a10baa99dd7f00db68d2a28ce9c661c165408e2de7cec6b31b650e74fc47d7bd46f526897d151a4be761bf21134973542d5bb42011bc8cd7423feec31f81a8360f69010000",
    ],
    [
      "ETag",
      "6oMv43mv8rCiMwXRYrkMpA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "497282400040d1bbf4da588499ec08328a82da0cbaa108e974332b8d4ca9dc3d56ae11df09fee67f8334cb10a549df96a8016f604e59659dad3f18351e9805ee719c298b83e5940f03d74b4900c7037f3763240bc5656b4dd45087c18ebc834b17bd56257329421f9b1b3f1d301154c7b36ad19e4738c126c71213734eecc85bd617ea36a9aa6374a85c23f413ee95571c463f46851607a772ce4402773bed649cad5b486eac033b781398973cb0216fe9778b913e6d969c370df1a21a72f4d4b7680cf0287ac8a44b30716d51e5acab19362ecd39ec6bc2f35fc6f5b2172cb67964af9f9efe1db00268bae61da249feb89d13146505fed64ffaf98a1effbfa3b4431df8f90518a0fa9219040000",
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
      "Wed, 22 Dec 2021 19:36:10 GMT",
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
      jobId: "grouparoo-job-41-1640201729937",
    },
  })
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
      "6b6f9b3014fd2bc8fbda04c88b10295aa394ae48095981b4eaa609d9c650b7801936ddaa2aff7d17d374ad2ab59fb07dcfb9e7dc074fe89e57295a20c2f3df2d6b1ebfdc09824e1053388757e18c6fa6dbc2599d47e2afc23f465717f3cbcbe51210bc63495cd6051b48d13694c9c53e1ae68d686bdc0831804483893db067136b64d9cec875c70ef0242bb20dafee817dab542d17a679d41ee642e405c33597432aca9777f36164d68db8635449f3ada4092ad2fc58f46b2128565c54cb7d04065ac99a8495981760e13f3325a76f530f392e8739801f38659852d156aab30529a8a8329eb78dce8a164f48db7c754091b7f1d6b14145d1965552e1929d18295638518f3533cec3ddd6f083f35db85dc5fe2e48a2f585b75d0dd7bbcd7e1b44c6f585177a86c2a4609a6b2c8d537d0be002fa29938a575a3dee9e3be5e706f9efc7d211405ab23e9838d60cdb73cb25197168361f4f49663142e6c499e231b1a83b619394300c3c2daa59b81295ebcea6ae9d668935b3c7c904639a60c719278e4bdcd4c5239b4c083a9ca03f0d57ec8ccb5a48de77085d877eec2571b80fd6abd8d32564b82dd4596fac2be0b547050526966503f083ba0e5d940b50eb5aee07b117aed6b17fe5f553deb01cd3c7e837cc39c3856480c60d3450b1662b52681a0a565bef0cc07a6adf8f4189163f9f50d7f7cec9abb6bfd06318626759e92f8ae2d00fbe693b47c4152e5a0d79e80fa806cbb7501fb83efc02242c6a9f055deebdf006f54f21cb58c32afaf94401ac039ffe6fc7e5072cac3fc8480577d81f2a3b11dab07e8fb82ef7c8766ccb9a230d6ed4bb983db58f5deb72741959c92af55c51bffc50682fd6ca171004610502ddadc33f0c00b7177c040000",
    ],
    [
      "ETag",
      "o73Y5Ml7AFSoxtaZ2VH8QQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-41-1640201729937"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d92614fc2400c86ff4bfd3a2220822ce1c310c4250c11466234841c5b07c36d9d77370921fc777b13d1a8897eb9b5ddd3aeefbbdbc3739c8560c3325ebd142877672bd4f72698a02a12adf89153a6102c402d564c2a6fe03d6ca365a81f5bd8f5bdf39e2bbbdb4e870915ac311560ef218a310915d84f7bc8448adc165052a4d9a2cc2cd0bbdc14a7fec41d0d384f2934f968361c3add611f0ed6a931145a2c4afe1f6df383051b5a4e304289598066975cd20603ed1a994aa479821545850c504109972f56928a5c48a20a572a8d5aa5d66c54ebd55aabde6e5fb4184c28103aa68cd9d994f7034d5a2413dab24a683220cb900547e5f9cae5382c8598d01df9cd46b9df57406240325cfcc9e5bcee5af05ff8c08e0e7ce7444a45a64fd4cdf0cef96d1c5bfa39aae7f8fd1f84d26cd409f15daf3ff51d6f6cb8f9517a77a7518d25b18f0a8d85b56ae3eab2d5acbebb7a4dc669fe8ead65811604822fc76dacc18e44a2f0f006a20f1e4c7a020000",
    ],
    [
      "ETag",
      "sMGMXwfbdtZ7eBTM/DIrBw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `id` = ? LIMIT 1",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-42-1640201729937",
    },
  })
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
      "53",
      "5b",
      "6f",
      "9b3014fe2bc87bd9b42610200122455d96b28d2a256d42da4dd3941830d41d606a9b565595ffbe63687ad9a4f6614f189fef726ebe47bf6995a2318a697edd107ef7ee8ac5e800118973b8fdbcfa7e66dfe2a135fca8cf42e11e1f9f5ef3b3c9041054b1042eeb82f4046b7842c478bdeae79c3535e68cf540a8679bbdc1c8364c63e0989e6739c013a4c8e6b4fa0dec4b296b31d6f5bd773f672c2f08aea9e827ac7cbcd76f4cbde6ec8a2452e82f2d757011faeba687054bb0a4ac9aac5790402308df9012d302527862a6f1a797d27d8acb7e0ee01b9a109c24aca9a44a0b24125665346f78ab8ac6f7a84df3d901adfcb93f8bb4d9621d46efb7b854e4ed070d0b6db3e1443485d4be2c1727dab606af4b2c88d86a17dffca5af695b4e12c6d30d4db7da443bd4a6e1115ceeffe6c14910690348222542d2aa4d21c2714194fd4397827f67a30858825117dc38c6080f5cc38bb3d84932d71ac69941e2d88d9d21b66223f16c62a731c1c0934abd65e18a5543cf70469eeb0d4d8b78232b755d2bcd5cd3362dcb89add8c49631c0698cd1ee00dd722ac911153513b46b15ba580691bf8996eb70368dfcb68c0c433b8ebae45411cff39450e4c63054bdafd4b65351cac04df53e08237f399d45c1b9df8d7b4e729cdcadae61e0192e040134e6b82492f0139642e3d0e9621544c1229cce81d1cef0748f1068fcf3fe8910ddd56da765fb555e23bbf5df03ce71d1b4889bee800668b73bf83f852148fc02086c77c746676b7ff90375574b92114eaae4ed0d00701b78f391ee5f0c60e1cd808d90f00ffb9608659270d2ed1d2ddbfc1ed8cec01da9490198cbbf63a661d8fbe62a0da5484a52c9878aba17a37ad5861af1088220ac4b18845f21fa074d7fb959b1040000",
    ],
    [
      "ETag",
      "BSXQ4wa535+/CNs8JJPqrQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-42-1640201729937"
  )
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
      "2d90dd6e82401085df657a0b095252a38917d590d6941a4acb4d1b635618100486ee8f8618debdb3d89b9dd9b3dfce39991b9cab2e87251cabf2d7a01c1e4ad41fb6495099462b2e3d750ac101d4a264f294bec76a28be8d89cf6f6d70d95ceba4beae564ca8ec84ad80e50d8a0a9b5cc1f2e7069d6891bf1d0e729ac8981e7aab6c775fe14b98b0d0526e855d1a45cfeb2884713f3a50d331c102257619da91bda41a33bdb5699568fb065d454666a86082a7875292e9852472597103df9d3d059eefcde6fe62f13867b0a14ce88a3a66d34f601b4d5a34095d392ccc189053cbb98be9bc4c3207daffa3eb41a38a25b1af426be9dded376423698eaaa5410732c1cb78adf4fd3efe01660d03fa69010000",
    ],
    [
      "ETag",
      "hUMPsyfZuuPkKm4vCwjRjw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "000000000002ff1dd04b7282300000d0bb642d0e85864f774128e240130b4aeb86811804410482e1d3e9ddebf408effd809452c67932dc2bd6803730a78ab9a6eb4c465f425e224c967ddee4aabbd9c61b3525028e5ed49018075a4d2c2d13350d6195458facd73f9993479dad2b0b9705ba11a31004bfb6986a14258f7052a20fd9330ab83174017730303c76c4077bbbcf5554ef5dbf9be729902c1a588e6b3bf1b07b4f9dee6e235e8495cff1b55bb2e146266469538892b34c4fa3151852f998c522da54eaf828d5379304e4641c99d787ac815579502e927efe1e8b97c26ffc6be4df2fb18b2bb0026c6acb9ef1a47cba55689a2bf09f900c73cb9e13164b7bd683df3f0641c08523010000",
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
      "Wed, 22 Dec 2021 19:36:12 GMT",
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
      jobId: "grouparoo-job-43-1640201729937",
    },
  })
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
      "85535d4fa34014fd2b64f6d5b6b4b4d23669d66e456dd2d295528dd96cc8cc70c15160901934c6f4bfef65b0aec6449f98997bce3de77ef042ee4511932961227da8a17afe7127193922a0698aafa3d1fcdc5f94210d6ec5afccbecc43f974f3349b2142342c45f332838e9275c5414d77db6e5ac9baa495941d4cd4193a9dfef1d01ed87d773099382ef21464c94a14f7c8bed5ba54d35eefa0dd4da54c33a0a5505d2ef3b7f7dee3a05756f20eb856bd8f923d5451bdaf457f6692532d6431db6dd140ada08a20a722430bff99313bf998ba2b68de4d11fc283850ce655de8c616a6e0b248445a57262b99be1063f3dd816cbd95b7082d2eb33a2fa282e67064c554d3483f97609d059bb5b5f4cf36c17a1e2e377eb45d5c78eb7977b159edd6fed6babef002cfd2946560b8d6cc3a31371f2fa81f83d2a230ea61f3dc28bf3668f9792c0d01a515b4c1c8b58f697f6c4f58c25c9e8c9d114b6c606cccdc117598cd274318c60c28f28ca861d14216fd3866317578c4c7ae130d07d48d587f3c8c92d8193823609cf184ec8fc85325349c0a554a25da0e91eb60197a5118ecfcc53cf44c0909ad337dda1a6b0a78ef516381916df711f8455dfb262a24aa352d5ffaa117cc17e1f2ca6ba7bc8294f2e7ed03ce39a1990244d30a1ba8a15acb189b46fcf9da3b45b099daef435091e99f17d2f4bd71f2aeed6ff41087d858d6e64bb661b0f4cf8d9d03e28a66b5813cb60752a2e55bac0f5defff221217b5cd422e775e7043daa70012a8a0e0df4f14c126f0edff76587ec4e2faa38cd278c7fde1aa11e115b47b244cb907b63b38b647c4802bfd29e63ac343d79a1c4d46c8a1d0af15b5cb8f85b662b57a03611057c037dddaff03960388337c040000",
    ],
    [
      "ETag",
      "55AGNCpTaRhiBl0QmTowYw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-43-1640201729937"
  )
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
      "000002ff8d92614f83400c86ff4bfd0a099bc826c93ea04eb76443ddd0b818b3dca04c36a07877689665ffdd1eea346aa25f8eb63c2d7d5f6e0bebac4cc08745b67caa516e0e96a8af4d304155e75af1a3a2522158805a2c990c079d74bc5ebb417776d75e6129c2dbd965d0eb31a1e2472c04f85b4833cc1305fefd164a5120b7c594d745396f320bf4a632c569341986179c1794983cbc198d8293511f76d6be31115acc1bfe1f6d0f3b0b56b498608a12cb18cd2e95a415c67a68642a515439da8a6a19a382066e5e2c25d595904436576cf7d06e79aed3765a9df6f1f16187c19c62a1332a99bd99f27ea0498b7c422fac123c066413b2e0b4399fb99c258d10130ec3c8739bfdbe02126392c9fc4faee2751f05ff850fecdd81ef9c28a82ef59e3a1f5d06bf8d634b3f479d0551ff07a1341bb547a2e1b83f8d82f195e11edea59f6c34aa2b49eca3426361cb71bb471dcf7973f5948cd3fc1d5fcb1a2d88055f8e41a6c14f45ae70f70ab3da56687a020000",
    ],
    [
      "ETag",
      "NH7fMkk4A8YX2jenaNVYOA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` = ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-44-1640201729937",
    },
  })
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
      "5b",
      "6f9b3014fe2bc87bd9a4360192901029eaa284b64809e90869374d53629b03750b98daa65355e5bfcf40d38baab54f189fef726e7e44b7ac88d1181196de55201ebedc70828e10289ceadbeb8be86c7ee3ac09b6e3d341f073795e70673a996804ab5912e76506c7925782821c6fd69d54f0aac482f3632d74dcef1f5b4edfb44d6b68bb6e6fa87912b264c18adb5a5da9528ebbdd837727e53ccd00974c7628cf9fefbbf776b714fc06a892ddb7965ded22bb1f9b9e649c62c57831d9ac75029504b1851cb34ca7f0c28cc9f7b7d21d86f34eaac1f78c02a6945785aad3d2129417094b2bd1a8a2f1236ad27c75406b6fe1cd2263b6da04d1d71dce6bf2ee9b81a5b1dd0a9055a68cd370b53476a5f6bac612e4ceb83af742cf3076022817f196c53b63629c18d3606ebce0dabb85bff423c3d2a9c420152b9a44224c32a89378ea95ff7e4235012b2dd306b743d3c1d6c8744942863419f5062431819011190e708f98d4ed433f2680354fd5ea0d0b17bc20b6053676a84321260ea6b69d8ca86b121abbee28b630c5d8b4c11da0fd11fa2b988239932597ac6d18ba0afdc8db46e126984d23af2923c1ba29f336b9ba88d7792a5de4d634eb7a3fa86d5f4719d76ef504fc20f2c2e92cf22fbd76e80b48317d58dfe9b1273893a0d158e01c1488258f75e3d0c56aed47fe2a982e34a399e4c50121d1f8f7e30b217a289b4eabe65b7b39fdc6ff00b8c459d520eedb03b2d07e7ff47f857514fac1d9c712d35257ab65fe6894def35601fdd878e12fd45e85908080827ebe051adc043e7dae87b7a3b1faf5681ba9f4bfde392a6b132aa0dd3d9637553eb1873dc7b2510316ea5d6cd81b1c1a5c6bd48a9043a19e2a6adf4eddaf2654c967900eea95099a4eedff014f72ad9cbb040000",
    ],
    [
      "ETag",
      "hPTGDj6Sba2dF5NXMHno6A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-44-1640201729937"
  )
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
      "ff2d90514f833010c7bfcbf90a7120db32923d385d848410874e1fccb274ec4066e1b02d4eb2f0dd77455fdacbff7ebdfba517f8aa9a238470a8caef0e557f53a2d9d82243dd49a3f96aa9d1080ea0112593512adedf66455ffd7a8f5244b77153f7e7cd72c984ce3fb116105ea0a8501e35841f1768448dfc6cbf57e344c64cdfda244e5fd74feb8c839a8e3648b74972bf4ad630ec06074e74c8b040854d8e7664abe884b989adad16752bd1d5d4a91c358cf0d8281575ad50442e276e10b8de2c98f8136fee2f1677730625e5c254d430bb7d015e63c80899d19965c163408d257b17e3f9c3b16f8576ffe8aa37a89f15f15e8d76e5741afc093c9095322c6b54870ee482bf23aa0c8485901a872b5f4a4f966c010000",
    ],
    [
      "ETag",
      "HNaWV6fyix1DlaH/InmywQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "4b7282300000d0bb64ad0e1f41d35d28688c15619416d9640462091a918fe1e3f4ee757a8dfaeef01ee09824acae69539cd915bc81fea8c149328915144a65d86fb36ec1143f1051f7bd369b72bdbe8810463d5aa66d70424644f4d46b5d8d38670979b343f4623ad874446835459cb7eef960ad64e92873ae537c1a675e3ad8665956c850f6f6259d91a8a71f024b3780b9ed4a1b6afccec5d6cde671d1262be370cbbfc8ea94d4dbc4ba13fae90f42c3bbda7aeff06c86a1936edaa9b24377ac2db1ee7bae4fca259143a166ca26cef3bed282abaa424f703484d7a9e49b6251aae3e9e4e5e5df0123c0ba1baf584df973bb6e4038027ff569d3dfd8f3bfc58e15abc0cf2fd24cfd7d19040000",
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
      "Wed, 22 Dec 2021 19:36:14 GMT",
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
      jobId: "grouparoo-job-45-1640201729937",
    },
  })
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
      "d84202044290d08a205dd9206c21b49da62972cc4dea36c469ecb46215ff7d374ee95a555a9f62fb9e73cfb91f7922773cdf921189797a5f41b9ff742b62724a40d1145f4fae4f6478fd2759f5bf657babf338cbafbf6e26e3312278cd92745764d092a22a19c8d166dd4e4b5115b414a285895a76bfd519d856d7ea385dd7ed39c89390250b9edf21fb46a9428e4cf3a8dd4e854833a005976d26762fefe643d72c4a710b4c49f3ada4892ad2fcbfe8e74c30aab8c8c79b351aa8249411ec28cfd0c23fe6363e7b9bbacde9ae9d22f88133a08c892a57b52d4cc1449ef0b42a7556327a22dae6ab03597b0b6f1a1a4c64d52e8f72ba8353634b158dd4be00e33c582d8db97fbe0a969370bef2a3f5f4c25b4edad3d562b3f4d7c6d585177886a271069a6b8c8d337df3f182fa5b908ae75a3dac9f6be5e706cddf8fa526a0b484261839d6807686961b27b1c39261af1f2716c4f13076fab4175bccb5c1dec64091a745358be622079b59db6e4223183a56643b0091db83616459f6c04d1277607706e4704a1e4bae60c66521246f3a44ae8279e84561b0f1a793d0d32524b4cad4ac315617f0daa3c202316d0781ffa9eb5047b940b5bae5733ff482c9349c5f7acd94179052b65fdfe39c139a4940342db1810acaa5d862d3883f597a3304eba97d3f062519fd7a2275df6b27afdafe420f7188b565a5bf641d0673ff8bb673445cd2acd29087e6400ab47c83f5a1ebc36f44e2a23659c88f8d17fc24cd5300099490b38f278a601df8f07f3b2e3f6271fd51462abce3fe30598bb0129a3de2badc23dbb1fb6e8f6870a9dec59c8e7dec5a9da3ce08",
      "3bc8d57345cdf263a18d58255f4018c415f075b70e7f01eee093937c040000",
    ],
    [
      "ETag",
      "+X+sTXzfO5Kly01wDnXJUA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-45-1640201729937"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92514fc23010c7bf4b7d748b800364090fa0a04b0011c69321a46cb7b1b9ed46db6106e1bb7b9d88464df4a5bdbbfeee7af76f0fec25ca7c66b375146e0b10e54508ea491b339045a2246d39661298c140f190c8961bc4fb7d2316cef82add27e1f072b72d5fbb5d22a4b7819433fbc08208125f32fbf9c0329e02a579981469b6aa3c83a932d7c1b93b7326f7e4a7e86b7fb2188d7afdd1801d8d73a2cf155f55fc3fd2964783c5b89e410002320f742fb9c0183ce5e831254ff3044c8985f040b20aae0e428145ce05a24911d36a9af596556bd4eaed46a773dd2630418fab0833621773ea8f29543c99e1abd49a10202a93060eaa7547e1c8af06d1a633715b56d5df57408087c25ffdc9e5d4ee86d32b7c602705be733cc52253676a387aecfd568e24fd2c75d773073f08a948a833e23ae3c1dced8da79a5b9e46ef970ae45420e928414b58af5937cd76abf6aeea2d6aa5e91e5b89020ce671fa1c0f916276c01309c73798b13b427a020000",
    ],
    [
      "ETag",
      "6Tfjzz2jrIM/mzlgF+vqyw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` = ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-46-1640201729937",
    },
  })
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
      "5b",
      "6f",
      "9b",
      "30",
      "14",
      "fe",
      "2bc87bd9a43681844b1229eaa2946d4c09690969354d53628ca16e0153db74aaaafcf71d4cd38baab54f189fef726e7e4037ac4ad104252cbf6da8b8ff74cd137484a8c239dca69b7019ce1a62da154fae4865fe0c727c3e9d0282b52c89cbbaa0c79237825039d9ac7bb9e04d8d05e7c720746cbbc7966b9b03d3f206e3f1d0039ea445b660d50db0af94aae5a4df3f78f772cef382e29ac91ee1e5d37dff6ed0af05bfa644c9fe6bcb3eb8c8fefba627052758315e4d376b48a091546c69895901293c33d3e4eb6be91ec3652f07f01d231413c29b4ab5698104e155c6f24668553479403acd1707b4f617fe3c36e6ab4d187fdee1b225efbe18581adbada0b22994f12d5a2d8d5d0d5e575852b9332e7ff8916f183b410917e996a53b636a9c18b3f0d478c675778b6019c48605a9a4542a56e944629c14b44de2b157c1db09b504ac40a60b6e3dd3c5d6c81c2759e2916c347492cca449324a3c070f13938c6d6aa709c5c053adba66e18a57c4b1526f98a426b1c79e9d0e06f6103bc421341d0f2c2f335dcb76edd41aa1fd11fa2b98a2a74cd65cb2ae61e8320a627f1b479b703e8b7d5d4686a129a75d726d112ff35450e4d634db7adfa96ddf461907b776024118fbd16c1e07177e37f405cd31b95fdfc2d8335c480a682c704915154b9e42e3d0d96a1dc4c12a9c2d80a1277976404834f9fdf04c88ef6bdd69a5bfad976b6bff03e002178d46dc750764a1fdfee8ff0aeb380ac2efef4be01aaa05993f80823def14d0f9c68f7ea1ee2aa21915b4221f6f018075e0c3e77a783b8085d7033652c13fec1c91ad0911b4db3d56ea2a1fd99ee33a0ed260a1dec43cd73d34b8d5681569492bf55851f776da7ee950239f401084",
      "950975a7f6ff0068773c94bb040000",
    ],
    [
      "ETag",
      "dUNMNAuc04nobhcn0JIgaQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-46-1640201729937"
  )
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
      "61",
      "4f",
      "c2301086ffcbf995250c0784257c005c948844a618a321a41bb759ec76b3ed8449f6dfbd4ebfb497f79ede3de9053e6579801012997fd5a89bab1cedc615319a5a59c35745a541e8015a9133f910dd0c7e4ef2fc3a43ff7e3d5bd42f6fc979339d3261d20f2c048417c824aa8381f0fd02a528909fedf7ba9bc8986d2a972cd7cfd16d147350d0c105ebed6a359baf2268776d0f8e94c498a1c6324537b2d274c4d42e9dad1145a5d03354eb140d7470d7c835d595d0441e275e30f2fc51d01ff4fdf16032b91e33a828155652c9ecf609788d252b544c2796059f01dd95ec9d75e737c77d27b4fb47e78d45f3a889f71a742b87c3e04f60414ecab2acd535f62015fc1d77d242980965b0fd0548d10d3a6c010000",
    ],
    [
      "ETag",
      "MED2zwixXAe1KNACuVZbxQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "1dd04b7282300000d0bb646d9c94824077161005ca47ad683619c244f94969c000e9f4ee757a84f77e4096e7acefc9f055b316bc813953cc65bea4687d16481e634b1c44125f546c9567c97903c33a4284ce4875a5b2114745f80fddadbeb71514507531349c8dd7567b125e85d10c93b7f563ac671a72b4a0bf3a655ae90db7a61a3b50a54979f70fa3c0239249379ddcad453f07c96464deaebe5ddc657daef44790c1e8e523f752c37ef4a4f002caca2637bb7407e3968621b7564aa17775dab488aec8c90e74e9b29d8a3d3e46ca1c1786b8611765485e365eb28f933dc40e5800367525673d299fee57cd3417e03f810c73c79e13ef2ce38c83df3f893f180423010000",
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
      "Wed, 22 Dec 2021 19:36:16 GMT",
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
      jobId: "grouparoo-job-47-1640201729937",
    },
  })
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
      "a34014fd2b64f6d5b6d422b44d9ab5415c9bb4741768cd66b321c370c15160901934c6f4bfef65b0aec6449f98997bce3de77ef04cee7895923949787edf42f3f4ed5624e48480a239beb6eefd186eca7d1384ebd2b14b779f41f9b8582082772c49cbba8081146dc340ce77e1306f445bd3468801261a58ce606c5be6a939764e67b389833c0945b6e6d51db26f94aae57c343a6a0f7321f20268cde59089f2f57df4703aaa1b710b4cc9d17bc911aac8d1e7a2df0bc1a8e2a25aec4234d04a686228292fd0c27f669a9cbf4f3de4b41ce6087ee00c2863a2ad54670b533051653c6f1b9d95cc9f89b6f9e640426fedb991c144d196555cd1124e8c942a1aaba71a8ccb60bb3156fee536d82ca3d5d68f43f7cadb2c87ee76bddbf8a1717de5059ea1685280e61a0be35cdf7cbca07e0a52f14aab47dd73a7fcd2a0d5c7b174049496d00763c7b4e9786ace922c7158369d9c25990949324d9c333a494c36b3c04a13a0c8d3a29a452b51a51366da6c3a8b1336a6b1e598594ca993c6f6d4369d3465569659e470421e1baee082cb5a48de77885c07abc88ba360e7bbcbc8d32564b42dd4456fac2be0ad478505c6a63946e027751dba2817a8d6b57ce5475eb074a3d5deeba7bc869cb2a7f01ee79cd14202a269830d54d06c448a4d23fe72e35d20584fede73128c9fccf33e9fade3979d3f6577a8443ec2c2bfd256114acfc1fdace11b1a745ab210ffd81d468f906eb43d787bf88c445edb3905f3b2ff84dfaa7003268a0625f4f14c13af0e5ff765c7ec4e2faa38c5478c7fd61b213610df47bc475b947b6639f5926d1e0467d88d9f6f4d8b52e4797114aa8d44b45fdf263a1bd582b5f4118c415f075b70eff0039552e2e7c040000",
    ],
    [
      "ETag",
      "uCq1ehmVrRSLm76mCVfemw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-47-1640201729937"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92514fc2400cc7bf4b7ddd124060b2848781a8184084f1640839b602836d1d77370910bebbbd8968d4445f6e6df76bd7ff7f77844d9486e0c23c5a6e7394fbab25ea67138c50e5b156fcc828550816a0164b26f120b635c71b2ada848f7e48ed83b799ef9a4d2654b0c244807b84458471a8c07d39422a12e4b680e23c4967456681de67a638f647ddc13de70985261f4c7a3dafd5ebc0c9ba3486428b59c1ffa36d7ab2604df3112e50621aa0d92593b4c640778d4c25922c465b512e035450c0c58ba5a43c1392c8e68a5d75ec72bd5aaa94ca4ea5d1b876188c29103aa294d9c998f7034d5ac423dab14aa833208b90052f8af395cb515808316177e0d7abc57e5f018901c970f62797f1ba2bc17fe1033b3bf09d1309e5a9be5077bd27efb7716ce9e7a85bcfeffc209466a32e88dfed77c6bed71f1a6e7a96deda6b544349eca3426361b954bda939f5d2bbab6d324ef3775c2d73b420107c391e220dee42c40a4f6f07a560a77a020000",
    ],
    [
      "ETag",
      "ezaq57APsokdJTdoCzAkbw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `date` = ? LIMIT 1",
        types: ["INT64", "DATE"],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-48-1640201729937",
    },
  })
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
      "6d6f9b3010fe2bc8fbb2494d7809812452d46509ddd0d2a44b48ab699a12630eea1630c5a65b55e5bfef80a62faad67ec2dc3d2f77e7f33db9e679444624e4c94d05e5dd872b119223028a26185d9e2cbfabf3133930bfe4333bca4e02fa579f8cc788e0354bd2ac48a12345553290a3cdba9b94a22a68294407853af6a0633ab66119a66b0d873d177912d278cef36b645f2a55c891ae1fbcbb8910490ab4e0b2cb44f618d76f2dbd28c5153025f597963aba48fd6dd3e35430aab8c8c79b3516504928b790519e62094fcc28fcfc52bacb69d64d107ccb1950c64495abba2c9460228f7952958d2a19dd93a6cc6707b2f6e6de34d0a6cbcd22f8b8a3594dde7dd2a8d4b6db1264952aed64b53cd576057a5d520972a75d7cf3569ea6ed4a60a28cb63cda6963ed589b2c66188ca882f67fee9ffa816662191148c5f3a688808629d4053cccc97f7d3b35812ab46a935bd770a8393086611cba2c1ef4fa616c40180e42b74f7ba1c18636d851081479aa566f583417790f864e640c0c2702dbe8c5ae6bdb96d577a238ee516a9aae6bbac0c062647f44fe945cc18ccb4248de0e8b5cacfcc0db06abcd623a09bca68d98e240666d717513cfeb54d8e4d630ea7edfe86d5f67b940b77afafe22f0569369e09f7bed85cf21a1ec6e7d83571ed35402a269493350509e8a080747ce966b3ff0978bc91c19cd2d9e1d10928c7edd3f1182bba299b46abeb5976337fe07c0394dab0671db1e8849f6fba3ff2bccea31bc2960e132770cab63f651e9374271cd5b11f263e3ad7e9236b482184ac8d9fb8b80e026f1ee6b3d3c1dc4e2e3411ba9f01fd78ec9da8495d0ae1fcf9a461fd8aedbb71cd2804bf52ae7d8ee61c6b546ad0819e4eaa1a3f6e9d4236b52957c046112b766e12fbe62f61f5689c8ceba040000",
    ],
    [
      "ETag",
      "OFOKtVFs81BnD4dmFTax/A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-48-1640201729937"
  )
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
      "c1",
      "6e82401086df657a8544acd642e2a136c4da1823b4f6d218b3c240b1c0e0eea021c477ef2cf6b23bf9e7db992fdbc36f51a710c0b1c8cf2deaee21478e6c11a3694b367235541b040790552ea4bffdeace97747a24a24d13469c5e97efd17c2e84497eb05210f4901558a60682ef1e6a55a13c3b1cf4305130ee1a9bac369fe1328c25a828b5c166b75ebf2cd621dcf637074e748c31438d75827664a3e98409afacad515553a26ba8d5091a18e0a1916b6a1ba5895c49dcc9b3eb3d4d46e391371bfbfee34cc09212c505d5c2ee3e40d630b12a63ba8a2c7802e8a114ef6c382f432c42fb7f74d1319aad26d96bd0ae9c4ec7778157b2522cb2ac5b742051f21d6f054390a9d2e0ed0f0847b5bf6c010000",
    ],
    [
      "ETag",
      "9PVyqvd5boooNpEQtdwGJQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "8b08000000000002ff1dd04b7282300000d0bb646d9d00a19aeef8c8a0401d3e0ab261120c0a229f801ae8f4ee757a84f77e00c973360cd9d8de5803bec04464bccc97146ac913ce91a758a92f4e90a50d5a479292869c09d856f7950ba1ab91d988547bdbc79e395a994e035113811a28244fbfd0a22d02af1581d9f04d65efee53789b9dda890d33e65742e8d6c1e490ac53f9722c253f86dfd5c61e425dae05357a915ad6cac28d169e434be498ef938293c7191d0fd275556bcfbdaf3c65b3094afb8c9d0f7582a8ea1ea2433bd7fc34676ab8f5e95ea3978e92d10fa5a22d9d36a57df4ead7cc9d72b0004c7425674356bedd8a8af102fc2764e3d4b1f784ce08671cfcfe017569bac223010000",
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
      "Wed, 22 Dec 2021 19:36:18 GMT",
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
      jobId: "grouparoo-job-49-1640201729937",
    },
  })
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
      "85535d4fe24014fd2bcdecab40a14829095959ac2b59286e291ab3d934d3e1b68e964eed4c31c4f0dff7ce545c8d893e7566ee39f79cfbd167f2c08b0d199184678f3554fb6ff72221270414cdf46b544c16c3fd5354653f6e9793bcf7ebca779ec6634470cd92745be6d092a2ae18c8d17ad5ce2a5197b412a285895a7dafd51df4ed9edd757b9ee7b8c89390a7735e3c20fb4ea9528e3a9da3763b1322cb81965cb699d8bebe7776bd4e59897b604a76de4b765045763e17fd9e0b461517c578bd4203b5842a862de5395af8cfdc2467ef53b739ddb63304ef3803ca98a80ba56d610a268a94677565b292d1333136df1cc8ca9ffbd3c86222afb7455cd02d9c581baa68acf6255817e17261cd828b65b89844b36510afa697fe62d29e2ee7eb45b0b26e2efdd0b7144d72305c6b6c9d995b8017d4df8054bc30ea917ed6ca2f0d9a7d1c8b26a0b4842618bbf6807687b697a489cbd2a1739aa43624c930714fa993d8cceb437f9300459e11352c5a88a2078e776a33881d3775e37ee2b1380180d81b383d4c368441da238713f2547105e75c9642f2a643e4269c457e1c85eb603a897c53424aeb5c9d37c674016f3d2a2c30b6ed2e023fa9eba0a35ca09a6ef92c88fc70328d66d77e33e5396494ed578f38e794e612104d2b6ca0826a2136d834124c16fe3982cdd4ae8e4149467f9e89eebb76f2a6edaff40887a82d2bf325ab289c053f8d9d23e29ae6b581ec9a0329d1f21dd687ae0f7f11898bda6421bfd77e784b9aa71052a8a0605f4f14c126f0e5ff765c7ec4e2faa38c5478c7fd61528bb00a9a3de2a6dc23db1d3a038f1870a53ec4faeef0d8359d4367842d14eaa5a266f9b1d046ac96af200ce20a04a65b877fc9e1487e7c040000",
    ],
    [
      "ETag",
      "bTnAM8ywTrgBYOAl2KPE3w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-49-1640201729937"
  )
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
      "000002ff8d92dd4e83401085df65bca5495b6bb124bd402d4a427fa478654cb38581a2c0e0eea2364ddfdd59d46ad4446f9699e19b61ce6177f090570938b0ceb3c706e5f628437d6d8210555368c58f9a2a8560016a9131697b41e6bd84f3a787b5bd59f81bbfef6dfbd7e331132ade6029c0d9419a639128706e77508912b92da6a229ab559b59a0b7b5292ea3d09f5d725e5262f2d94d10b867c104f6d6a131115aac5afe1f6d777b0bee691d628a12ab18cd2eb5a47b8cb56f642a51d6057614353246052ddcbec82435b590441dae7406a34e6f38e8f6bb3dbb3f1a1ddb0c16140b9d53c5eccd92f7034d5a14213db34a183220db9005a7edf9c4e53c698598d09f45c341bbdf5740624c3259fdc9d5bcee46f05ff8c0de1df8ce89929a4a1f282f98bbbf8d634b3f475db8d1e407a1341b7540227f3a5946ee7461b8bb77e9675b8d6a21897d54682cec7507a727f6b0fbe6ea3919a7f93b8e960d5a100bbe1c57b906271585c2fd2b2e882e0e7a020000",
    ],
    [
      "ETag",
      "7FLgFxROvkb7hPIhI2Fy2Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `stamp` = ? LIMIT 1",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-50-1640201729937",
    },
  })
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
      "da3010fe2b91f765d30a38091040421d836c8bc4db20b4eaa6091cc749dd2671b01d2a56f5bfef92f455d5da4f89ee9e97bbf3dd2dbae659880628e0f1be60f2f8e14a04e804314d6288aebf4ef6a3cde702ff35c75ef778c1f74bef70331c0282972c45d23c610d250a49991a6cd6cd588a222752880608353ab86176dbd8c2a663f5fbb6033cc59268cab36b605f6a9dab41abf5e0dd8c8588134672ae9a54a48ff1d6c16ae5525c31aa55eba5650b5c54eb6dd3d34450a2b9c8869b3514502826b72c253c81129e9861f0e5a5749393b41903f8c02923948a22d3655920414516f1b890952a1adca2aacc673f68ed4eddb16f8c179bb9ff7147d292bcfb6410656cb792a922d1c6b7d56266ec72f0ba248aa99d71fec35db986b1938c0a196e79b83386c6a9319a4f20a834145707a6deccf30d13ea0899d23cabaaf04990b0b282fb4179af9fa724100d5e7572ebe02e317bb81f448143a39edd0922cc82a017381d620798f6dbac1d068c004f97ea158b64220b2ddb769c6ec84c33c466006cab6d914ed873308691db563fb2fb3d6aa2bb137423b96613ae72a1783d2d74bef27c77ebaf36f3f1c877ab3622021399d4c5954d3caf5343935b8ccb7edfe8edaecc72016ee5f8bdb9efae4663df3b73eb179fb298d0e37a0f6f1e91443140134952a6999c89100687968bb5e77b8bf9680a8cea19970f088506bf6f9f08fe31af26adab6fe9d56d57fe0f8033921415e250ff2098c4ddc9ff157c6fe6aefdd16cf9b68a052bddc056c3ecf8a63530ed81d96e628c7f81f81f20c2ead7bae8e7c65d5da03ab46211932ca3efef0680abc4bb17fc704e808583021bd84dcd6113a92a4da864f546f2b4eafd9eedf44ddc411558ea5739abca3d9e51a9c85296e9fb8eea732aa758a50af50882242cd2dc9b7f87ec3f78576bfdce040000",
    ],
    [
      "ETag",
      "SBDqAU+u0z1CI6yYiqPIvw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-50-1640201729937"
  )
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
      "51",
      "4f",
      "c2",
      "30",
      "10",
      "c7bfcbf9288b0c45c2121ec44c59425027f88021a474b7b9d9ed66db69c8b2efeeb5fad25efef7ebdd2fede1b36c3288e054165f1deaf34581f6c515299a4e59c3574b8d4118015a5130794938df5fadea10df66db7d123f65f2a12a160b268cfcc05a40d4435ea2ca0c44ef3d34a2467e763c6a3f91317b6e5d926cb6f1639c725053e682cd6ebdbe5bae63180ec3082a3aa598a3c646a21bd96aaa50dac4d91a51b70a03439d9668c0c3be5168ea5aa189024e82e938086f6fc69371389bcce7d733061549614b6a98ddbd02afb164854ae98765216440fb92bd737f7efb98850effe8f26cd13c6be2bd06ddcae974f227704f4ecab2acd51d8e400afe8e556921ca853238fc02427b153d6c010000",
    ],
    [
      "ETag",
      "+oe9Z/Hm1eV7TZIEOdcFjg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "00",
      "d0",
      "bb",
      "64ad0e4a05d21d885a51143195904d268420bf0ae5a3904eef5ea74778ef0730ce45dbd2ae2ac41dbc83912de08ccf22c5c40f4522ef1869b2fdda7adae8c46fe4036316a9a7a09c07dd637a40a66a6b7ab4ff0cad291b0c7eb4b7a7f36ac87162a6f74b8e78c5fb361b7ccb59eba5c570d5c04112d10564818ba9d4d3153d144ff5d95417a34cecac836e45d18e8cbc5fcfdd9c4a5e86b74d4c3705d650cf6fee2893068576ddef0ff3ab9f90c109b16e2eebd8252146125b3df44b7a9457946f607265e7489cdd2ebc7cd70f6fbdd30d9fa446e0a9a550c00488a1ce1ad1d2ece55697104ec07f02edc65abc262cc11ad180df3fd282e87c23010000",
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
      "Wed, 22 Dec 2021 19:36:19 GMT",
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
      jobId: "grouparoo-job-51-1640201729937",
    },
  })
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
      "0002ff85536b4fdb3014fd2b91f771b44d4afa94aa5195302ab529a429689ba6c8766e82218d43ecb442a8ff7d370e652024f814dbf79c7bce7de4993c883c2663c244fa5841f9f4ed5e32724240d3145f6df5709dab3dfffdfde6aa9b5f42b5df5c78fbc90411a26629ba2d32682959951cd478b36ea7a5ac0a5a4ad9c244ad9ed372faaeddb59d4177343a1d204f41962c44fe80ec3bad0b35ee748edaed54ca34035a08d5e672fbfaded9753b4529ef816bd5792fd94115d5f95cf4472639d542e693cd1a0d540aca08b6546468e13f336667ef53b705ddb65304ef0407cab9ac725ddbc2145ce68948abd26425e367626cbe3990b5b7f066a1c565566df328a75b38b162aa69a49f0ab02e82d5d29afb17ab60390de72b3f5acf2ebde5b43d5b2d364b7f6ddd5e7a816769ca32305c6b629d999b8f17d48f4169911bf5b07eae955f1a34ff38969a80d20a9a6034b0fbd419da2396b0014f86a73d96d8c0d8900d7af494d97ce4821b33a0c833a286457399db31f6018311677d16b96e0cd190b94964834313ce7a8364e492c309d99742c3b9508554a2e910b90de6a11785c1c69f4d43cf9490d02ad3e78db1ba80b71e351618d9b683c04fea3ad4512151ad6ef9dc0fbd603a0be7375e33e505a4943fad1f71ce09cd14209a96d8400de552c6d834e24f97de3982cdd4ae8e4145c67f9e49ddf7dac99bb6bfd2431c626d599b2f5987c1dcff69ec1c113734ab0c64d71c488196efb03e747df88b485cd4260bb9de78c12fd23c0590400939ff7aa20836812fffb7e3f22316d71f6594c63bee0f57b5082fa1d92361ca3db287b6dd77890197fa43cc1938c7aed539ea8cb0855cbf54d42c3f16da8855ea1584415c01df74ebf00ff366a3f47c040000",
    ],
    [
      "ETag",
      "0skQnswcZ+VP2nHeuwUFEw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-51-1640201729937"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92514fc2400cc7bf4b7d1d91213059c203282a0920c27832841cb70e06db3aef6e1242f8eef626a251137db9b5ddaf5dffffdd01b67116820fcb78f552a0da5facd03cd96082ba488ce6474e994670008d5831b96ba8cd726922cfcd1aaef436dbed6538dcb5db4c68b9c654807f8028c624d4e03f1f201329729ba4a448b345993960f6b92d4e83497f74cf794aa1cd47b3c1a0d31df4e0e89c1b4361c4a2e4ffd1363f3ab0a1e50423549849b4bbe48a36284ddfcad422cd13ac682a94440d255cbe58292a72a1882a5ca934dc8adbac576b55d7abb55a571e8309496162ca989d4d793f30644432a11dab842603aa0c5970549eaf5c8ec352880dfba3a0592ff7fb0a2894a4c2c59f5cceebae05ff850fece4c0774ea45464e64cdd0d1e3bbf8d634b3f47dd7682de0f421b36ea8c04fd616f1a748663cbcd4fd2bb7b837aac887dd4682d74abf5eb86d7acbebb7a43d669fe8e6f54810e48c197e32136e04722d1787c036e2851be7a020000",
    ],
    [
      "ETag",
      "w5rjbbtf71n51c7jkk/dMw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `amount` = ? LIMIT 1",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-52-1640201729937",
    },
  })
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
      "6fda3010fe2b91f765930a24811040421da2614bc54b0ba1dd344de02497d46d12a7b6d30d55fcf75d12e8cba6b59f0877cfdb9ded4772c7b2900c88cfe2fb02c4eec32df7c909014563ac4eccc9e5e2dbeef7793c5b71bfd7552935daa3e11011ac64499ae60934242f440072b05e3563c18b9c0ace1b28d4b0cc86d1ede8a66ed866bfdfb691272189a62cbb43f68d52b91cb45a47ef66cc799c00cd996c063c7daab71ecc562ef82d044ab65e5bb6d045b6de363d4d784015e3d970bdc2008504b18194b204233c3343fff36be926a3693346f0030b8006012f3255c642898067118b0b51a992c123a962bef8202b67ea8c3d6dbc58cfbd8f5b9a96e4ed278d4a6db311208b446993e562a66d73f4baa112e456bbfeea2c1d4ddb0a08b808372cdc6a43ed541bcdcfb07890a82a5377e67a9a814142908a65550c8ffa0994110e9b72ff3d9f9240159ad5cd8dad77a9d1d3fb7ee4db41d46b5b7ea483eff77cdba26d5f0ffa1de8843e50e4a952bd62d18c67a6d5d121ea7723cb0e2dd3d6fb9619d16e5bf73b7daa5bbe052158d4306cb23f21bf045370c664ce25abd745ae97aee76cbce57a3e1e794e35464471256775b872889739150eb9d1f572de3766db975dc6d1addcbf3bf79ce568ecb9574e7de4538869b05bdde3a147349180682a680a0ac48c87b83872b158b99ebb988fa6c8a8cef1e2889064f0e3f199e0edf26ad3aafa2dbdba9dcaff08b8a24951211eea0f6290fdfee4ff0a93e962f4be46d342c4fe2782f096d70ae472ed2cbf93bab484080464c1fbb700c155e3ddc77a7c3988c5b7833652e17fbc73812c4d0201f5dd636995f0c0eee9bd5e875460a1feee19bad93d2eb8d4281521854c1d26aa5f4eb9afaa55c8271036f1caccddf917ecfe0159d327c4b9040000",
    ],
    [
      "ETag",
      "F2FQOXyxJgMSob86tma13A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-52-1640201729937"
  )
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
      "dd",
      "4a",
      "c3",
      "401046df65bc348176abfd09f4c24ad5622d9a5a10a4946d3289a94926ee4e0ca1e4dd3b1bbdd91dbe393b73d8337c67650c011cb3f4a746d35ea5c86fae08d1d6395bb92a2a2d8207c83a15f219b72d4f9a543dc41f0d29c6eb972935f3b91036fac24243708624c33cb6107c9ea1d405cab3c3c1f41305e3b672c96af3be7c5c86121414bb60b35bafef16eb2574fbce83131d434cd06019a11b59193a61c42b676b7551e5e85baa4d84167ab86fa486ea4a1b225f12ff56f9c3f1cd400d8613359b8d2602e61469cea81476b70559c3c43a0fa91159180a60fa52bc93fefc955839a1fd3fba6819edab21d96bd1ad1c8da77f02f7e4a45864d9d4e841a4e53b9e328620d1b9c5ee02420fc3ed6c010000",
    ],
    [
      "ETag",
      "KeSyt7wg2FdXwo2te+M8ow==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "1f8b08000000000002ff1dd04b7282300000d0bb642d0ea840e90e91a005d2163f40371912a366501202e5d7e9ddebf408effd808252d634b81525abc02b188b8533a773a2bb59a74f07845728447c2be32fc472c368e8e0118836d4a2cc15f0927ad64ae7e45124efdf1925b0655d96dcc511e9ad09abd40bec4ecb654feee73b0fec2139b8b7c5ee235b858bb72a14658837d9323d556badd6f0d5ae9b9cacdde45aed865aafcb259f24dd45515ff26bafc528353b751a3b37f0e5de13974f211f07d56fedd090b4deb308fb81718962326525896de33cfa304a2cb54d540e69ef3464a4484416bca9972398013648ae5883f9d3bd341d6706fe13703b4af69c58b34231057eff005ba7bf7523010000",
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
      "Wed, 22 Dec 2021 19:36:21 GMT",
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
      jobId: "grouparoo-job-53-1640201729937",
    },
  })
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
      "535d6f9b3014fd2bc87b6c134820098914ad594ad76809d980b49aa6091963a85bc0149b6c5595ffbe6bd374ad2ab54fd8bee7dc73ee078fe88e55299aa184e5f72d6d1e3eddf2049d222a71ae5ed7b6cc4f9a4b731ce6dffe9e7cf1594082c57c0e08a658029775417b82b70da162b60bfb79c3db1a379cf720516f64f70663c71a5a83c9703ab527c013b4c8d6acba03f68d94b59899e651bb9f739e1714d74cf4092f9fdfcdfdd0ac1b7e4b8914e66b49135484f9bee8e782132c19afe6bb100cb48236312d312bc0c27f669a9cbd4edd67b8ece700de33423121bcada4b2052908af3296b78dce8a668f48db7c7140a1b7f696914178d196555ce1929e1a299638960f35352e82edc658f917db60b388565b3f0e9797de66d15f6ed7bb8d1f1ad7975ee019122705d55c636e9ce99b0f17d04fa990acd2ea917a56ca4f0d5abd1d8b2280b4a05d309e58633c70ad6992251392b9f628c92c9a246e3219613bb1c8d4a14e9a500c3c2daa59b8e2d518a7d6606abbb19b59387686f628c64e66c5d81d6127a513c7492c7438457f1a26e939133517aceb10ba0e56911747c1ce5f2e224f9790e1b690e79d3155c04b8f120a8c2d6b00c077ea3aa828e3a0a65abef2232f582ca3d595d74d794d734c1ec27b9873860b41018d1b68a0a4cd86a7d034e42f36de3980f5d4be1f8302cd7e3d22d577e5e445db9fe9110c515996fa8bc22858f95fb59d23e20a17ad86ecbb03aac1f20dd407ae0fbf01098bda65413f765ef013754f01cd68432bf2f14401ac031ffe6fc7e5072cac3fc8080977d81f2294086968b7474c977b64bb03d719220d6ee49b18ecc0b16b2a87ca484b5ac9a78abae587423bb1563c8320082be0eb6e1dfe01b5019b287c040000",
    ],
    [
      "ETag",
      "bL3tg+rH/6SgKx+BNiRcRA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-53-1640201729937"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92dd4ec2401085df65bcb4447e8b34e1a2282849452ce5c2184396768ac5b65377b72221bcbbb355d1a889de6c67a6df4ce79cee0e1e933c020796c9eaa944b93d5aa1be31818faa4cb5e24741b942b000b55831798cbddba9fd3c8a9393d1e4fc657373ec4f3db7df6742850f98097076102798460a9cbb1de422436e0b292db37c516516e86d618ab3c01f4f2e38cf2832f964ee79eec01bc2de3a3446428b45c5ffa3ed7e6fc19a963ec628310fd1ec52485a63a8c746a6125991624d5129435450c1d58b95a4b21092a8c6955aa7556bd8ed7ab3dee8367bbd5697c19442a113ca999dcf783fd0a445ead3865582cd80ac42161c57e7339793a81262c2f124b0dbd57e5f018921c968f12757f0ba0f82ffc207f6eec0774e6454e6fa408dbc6bf7b7716ce9e7a8733718fe209466a30e4830be1ace02f76a6ab8fb77e983ad463595c43e2a341636eaedd34ed7aebfb97a46c669fe8ea365891684822fc765a2c18945aa70ff0a3866ac697a020000",
    ],
    [
      "ETag",
      "+e9YP6vFfi/FNDxwQ+RPLA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `id` != ? LIMIT 1",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-54-1640201729937",
    },
  })
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
      "53",
      "6d",
      "6f",
      "da3010fe2b99f765930a04482020551d83748b44a183d06e9a26709c4b7017e2d476a8aaaaff7de7a4f46593da0ffb94f8ee79b93b9fefc86f9ec76448229e5e97206fdf5f89881c11d034c56871f559df4ce436bd6181f37d7bbacf56991e1d1f23821b96a2bb22838612a564a086ab653395a22ca814a281420dd769b47b8eddb1dbfdce60d0ed234f41964c79fe1bd95bad0b356cb50edecd548834035a70d56462f7186fed3bad428a2b605ab55e5ab6d045b55e373dc904a39a8bfc78b5c4024a05720d3bca332ce18919479f5e4a3739dd355304ef3903ca9828736dca420926f284a7a5ac54c9f08e54653efb214b7fea8f436b3c5fcdc20f1bba33e4cd478b2a6bbd96a0ca4c5ba78bf999b529d06b4b15a88d75f9d55ff896b591c0848cd73cde58c7d689359a4d30684eefcc711a9c05a1d5c62a62509ae7550d218d3230fe0f630afebd1c43a01a9deae4ba6ff768dbb3075112f559e275dd28b1218abca8efd26e64b381034e1c01459e36ea158be62277bd41d2739228711cafdd77edbeddf7ba09746dd671019224ee40cc3caf4dee8fc88de41a265c1542f17a56e4721184fe3a5cac66e351e8576d2414e731a98b334d3caf5363936bdb36fdbed2dbbdc972816e66f8c12cf417a371185cf8f57d4f21a5ec76798d379ed04c01a2a9a43bd020cf448c8323e7f3651006f3d9688a8cea12cf0f0845863fef9e08e16d514d5a575fe3d5732aff03e082666585d8d73f0427717ff47f0a2e4afc4208ae77cd26df56fee207a9430b484042cedede00045789375fe9e1c920161f0dda288d67dc37a68c099350ef1ddf55f53db0bd8ee7b8a4024bfd77ae6bdbee61b846c328c20e72fdd051fd64ccacaa54a91e4198c4759905b32f98fd03f281b353b2040000",
    ],
    [
      "ETag",
      "pjBtwDrhgwcI4XhFvlUltA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-54-1640201729937"
  )
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
      "02ff2d90dd4ec2401046df65bca59122a5d0840b6a1ac420912a578690653badc56da7ee8f4a08efee6cf56677f2cdd99993bdc047dd1690c0b1ae3e1deaf34d8576eb8b1c8d53d6f0d5516b10068056544cbae1d3f2c73d4e6f652ac26954acb6711c2de673268c7cc746407281b246551848de2ed08a06f9d9e1a0fb898cd973e793d5e6355b6639070d153ed8ecd6eb45bacee0babf0ee044c71c4bd4d84af4233b4d279476e56d8d683a858121a7251ae8e1be5169729dd044012741340ec2c978381a86f16836bb8b19542485ada96576f702bcc692152aa76f96859001dd97ec5df6e717c7132fb4ff47d3b345f3ac89f71af42ba368f427704f5ecab2acd50e0720057fc7436d2129853278fd05e64f2e076c010000",
    ],
    [
      "ETag",
      "u0MGxuJ8/cBa185dIQ775A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "82300000d0bb64ad0e1251d21d946015f98d80d24d26a41118503101f938bd7b9d1ee1bd17a08c7129497baff80d7c8091aa68c11699629c9fca147982e116faf38ce2b41745bd5184ab1f57c4f33a565b69201ffe35e49a9b873f0ee165d7853d1dcecbb9da2fb31805ab64b4f4cc22957bd277758ba44a8c5d6512bc0dfc2bb9dca0997e6d4efda745b715f471dd5af69ea9eb7c58b3e24947bd8c1c430e53ae63e25d9cb51909e3a84547bcdd430741aab020280ecdd5c38f03b2f7958ddd78c3789a0487694cf09d6ab438c528c93b5bc0a87d24bdf31d875436680566800f4d29b824e5db0d358466e03f81b463c3df1326a7820bf0fb076baf22b323010000",
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
      "Wed, 22 Dec 2021 19:36:23 GMT",
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
      jobId: "grouparoo-job-55-1640201729937",
    },
  })
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
      "3014fd2bc87b5c9390842410295aa394b69112b20149554d1332e642dd124cb1c95455f9efbb98a66b37a97d32f63de79e733f78260fbc48c894c43c7baca17afa722f62724640d10c5fadab7e39a68f0b28765fafeb64e7a6f5ad399fcd10c11b96a4fb32878e1475c5404eb74137ab445dd24a880e26ea8c469dfed83207667f32709ce1047912f274c58b0764df2955ca69af77d2ee66426439d092cb2e13fbd7f7de61d02b2b710f4cc9de7bc91eaac8dec7a2df72c1a8e2a2986d0334504ba822d8539ea385bfcc243e7f9fbacbe9be9b21f8c01950c6445da8c616a660a2487956573a2b993e136df3cd0709dc95bb080d26f27a5f4405ddc39991504523f5548271e96fd6c6d2bbdcf8eb79b8dc7851b0b876d7f3ee62b3daaebdc0b8b9767dd75034ce41738d9971ae6f1e5e503f01a978a1d5c3e6b9517e69d0f2ffb134049496d006a38939a67ddb74e2349eb0d41e8ee2d48438b6e3c9880e6393391658490c14795a54b368210a7b4c0796630f22138fc81a0d4751dcb787910589635b71ea580cc8f18cfcaeb8820b2e4b2179db2172e32f43370afdadb79887ae2e21a575ae2e5a634d016f3d2a2c3032cd3e023fa8ebd844b940b5a6e54b2f74fdf9225ceedc76ca2bc8287b0a1e71ce29cd25209a56d84005d55a24d834e2cdd7ee0582f5d4be9f82924c7f3e93a6ef8d93376d7fa58738c4c6b2d22709427fe95d693b27c48ee6b5861cda0f52a2e53bac0f5d1f7f211217b5cd427e6c5dff96b44f3ea45041c13e9f288275e0d3ffedb4fc88c5f54719a9f08efbc36423c22a68f788eb724f6c7be898fa6f55b452ffc6f0989cbad6e46832c21e0af55251bbfc58682b56cb57100671053cddade31f8f8fb2ae7c040000",
    ],
    [
      "ETag",
      "4G1p6aqCenV+HudVEfuY0A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-55-1640201729937"
  )
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
      "0cc7bf4b7d74c4813064090f5350308008233e18438ead8ce1b6cebb9b8410bebbbd8968d4445f6e6df76bd7ff7fb783e7380bc185451cbd1428b72711ea7b134c50158956fcc829530816a01611930f9da1f66e6bebd96c3d76a26c533fed9dd99b769b0915ac3015e0ee601963122a701f77908914b92da0a448b3799959a0b7b9294efd497f74c3794aa1c947b3c1c0bb1c74616f1d1b43a1c5bce4ffd1f6b4b7604d8b092e516216a0d92597b4c640f78d4c25d23cc18aa24206a8a084cb1791a4221792a8c2954aa351a93a75bb66579bb556ebbcc9604281d03165cccea6bc1f68d22299d0865582c3802c4316bc2ccf572ec76129c484fd91efd4cbfdbe02120392e1fc4f2ee7755782ffc2077670e03b27522a327da4ae0777de6fe3d8d2cf511dcfeffe209466a38e88df1f76a7be371c1beee920fd72ab518d25b18f0a8d8555bb7ed1683af6bbab57649ce6efb85a16684120f872f4620dee52240af76f408cffef7a020000",
    ],
    [
      "ETag",
      "WDMtAJ2jUUjP6gnw4+H/0w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` != ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-56-1640201729937",
    },
  })
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
      "5b",
      "6f",
      "9b",
      "30",
      "14",
      "fe2bcc7bd9b42621372091aa2e4ae98694262d21adba694a6c73a06e01536c325555fefb0ed0f4a26aed13c6e7bb9c9b1fc8adc84232264cc4772514f79f6f24230704348df1d6b9b27e7deb4fb651efc79905b4b73c99f693f3c34344888aa5689a27d052b22c38a8f16ad98e0b59e6b490b28542ada1d5ea5a03b36776edde68d4b791a720896622bb45f6b5d6b91a773a7bef762c659c00cd856a73993edd77b6bd4e5ec81be05a755e5b76d04575de373d4a24a75ac8ec70b5c4044a05c51a522a124ce19919b2efafa5db82a6ed18c15bc181722ecb4c5769a104975924e2b2a855c9f881d469be3890a53b73a781315dace6c1970d4d2bf2e6ab4195b15e17a0ca441b27fee2d4d8e4e8754d15a88d71f9d3f55dc3d814c06511ae45b8310e8d2363323f369e711be3537539f34ebdc0e8622e21282db23a9380b204aa2c1e9be5bd1d5145a01a759ae0da362dda75cc118b98cd23a73f6491098c39cc1ed23e33f96800839001459eaed46b16cd64e6b0feb017318b0dfb60b2fe80218e3a8c0f2dce580861046c64826d92dd01f95b080dc742e55289a663e4d2f702771df8abf97412b8751911c5ae1c37c95545bccc5363916bd3acea7da7b65d151512ddaa1178f3c0f527d3c0bb709ba9cf20a6fc7e7987738f68a200d1b4a02968284e65888d23678ba517788bf964868c7a94677b8422e3df0fcf84e03eaf3badeb6fe5650d6aff3de08226658dd83607d225bbddc1ff159681efcd7fbc2f31c9b15a94f983285cf446819caf5cff8a34573e445040c63fde0204d7810fdfebfef120169f0fda288dffb8735c5526bc8066f7445a57f9c8760696e5901a5ce83731dbb6f70dae342a454821d38f15358fa7ea571d2ad5130883b832f3ba53bb7f2da367",
      "e2bc040000",
    ],
    [
      "ETag",
      "8Y6Z+3Avf2GP6ea2SFC3lQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-56-1640201729937"
  )
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
      "51",
      "6f823010c7bfcbed5512658081c487b1106762ccc6c6cb8c31150e86168eb545470cdf7d57b697f6f2bf5fef7ee91d2e755b4004a7bafaee510d0f159a375ba4a87b69345f1db51a61066844c5e4fad3cbae61111494c4324c2fadfbb32e6fab15133affc246407487b246596888f677684583fcec7854d344c6ccd0d964b3fb48d649ca4143850d76d976fb146f13180fe30cce744ab144856d8e7664a7e88cb9d9585b2d9a4ea2a3a957396a98e0a95129ea3ba1881c4e1c3f7016813777e78ba51b868f4b0625e5c2d4d4329bbd03af3164844ce9c6b2b060404d257b97d379e5d8b342877f341e0cea5745bc57a35de9fbde9fc0335929c3b246f538835cf077bcd406a252488de32fcda221116c010000",
    ],
    [
      "ETag",
      "GZ4Uv9d6doEBl9Rkn2xGfw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "0000d0bb642d4c8c824d7750cb4f7e2a33821b06621408f20b58a0d3bbd7e935eabbc3fb06092194f3b8af19adc03b9812844522a650091f700e9cf4d642598feecc2d639a636de7b5fa60313dcaea4bcd2aab4cdd74b91e36e59acb68f691af4a97085f13ef6bd4ab0f739d8ead44262daa23e2d6d2ca2804c4ccc683c8ed27ed62070ff50d2a0ebf67f2f92a19b18609b4b1b7ca8de539cb4eb665664b6af222acfcdb61ec8f6817c853f1d9eea9e6f04261bd591e4f87b09edb8de09f765835cea5a2eadd3ed98696ad6e5274771ae84f88555b4804fb06077b94a5d1115f5efe1db000746cf28ef2387f6e5f49182fc05ffdb89f1afafcafd2a4a31df8f905b0191e0c19040000",
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
      "Wed, 22 Dec 2021 19:36:25 GMT",
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
      jobId: "grouparoo-job-57-1640201729937",
    },
  })
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
      "64f6d516da62699b346bd3a2926da952aad96c3664182e384a1964861a63fadff732585763a24fcccc3de79e733f78210fbc48c884c43c7baca17afe712f62724240d10c5f6b73f9b8eed39b7dbeb8faa59eaa0b2fb1f3ebe91411bc6149ba2b73e84851570ce464bbe96695a84b5a09d1c1449d53a7d31bda56dfea39fdf178e0204f429e2e79f180ec3ba54a3931cda376371322cb81965c7699d8bdbd9bfbbe5956e21e9892e647491355a4f9b5e8cf5c30aab828a6db0d1aa8255411ec28cfd1c27f66129f7d4cdde574d7cd10bce70c2863a22e54630b533051a43cab2b9d954c5e88b6f9ee4036eed29d87061379bd2ba282eee0c448a8a2917a2ec1380fd62bc3f3cfd7c16a167a6b3fdacc2fddd5ac3b5f2fb72b7f63dc5eba816b281ae7a0b9c6d438d3371f2fa89f8054bcd0ea61f3dc28bf36c8fb3c968680d212da60e45843da1b59e3388d1d968e06a7716a411c8f62e7940e628b8d6db0931828f2b4a866d14214ce78600f1ccb8906894523db76fad138a656e400c4bdc168c846c311399c90a78a2b5870590ac9db0e91dbc00bdd280cb6fe7c16baba8494d6b95ab4c69a02de7b54586064593d047e51d7a18972816a4dcb3d3f7483d93cf46edc76ca4bc8287bde3ce29c539a4b4034adb0810aaa9548b069c49faddc0582f5d4ae8e4149267f5e48d3f7c6c9bbb6bfd1431c626359e92fd98481e75f683b47c40dcd6b0dd9b70752a2e53bac0f5d1ffe221217b5cd42aeb76ef09bb44f01a45041c1be9f288275e0dbffedb8fc88c5f54719a9f08efbc36423c22a68f788eb728fecd1e9d0b1880657ea53cc71ec63d79a1c4d46d841a15e2b6a971f0b6dc56af906c220ae80",
      "afbb75f807d97b7ca47c040000",
    ],
    [
      "ETag",
      "u/LqO2aVvlDPKtwrGId4lQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-57-1640201729937"
  )
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
      "ff8d92614fc2400c86ff4bfd3a12d0c164091f86a292002a8c18630c396f659b6eebbcbb6980f0dfed4d44a326fae5d6764fbbbeef6e034f6911810f0f69fc5ca15a1dc468ae6d30455d6546f3a3a44223388046c44c463a96b2edce937157b9b7c97a72bbbe6907bd1e135a26980bf037b04c318b34f8771b28448edc2629abf26251670e9855698bb3703a9c9c739e5364f3c97c340afaa3016c9d7d63248c58d4fc3fdaeeb70e3cd2c31497a8b090687729153da234432b538bbcccb0a1a9521235d470fd22565495421135b8d2687b8d56c76d1e365bde61b77be43198911426a582d9f98cf703434664537a6595d06140d5210b5ed6e70b97d3a81662c3e124ecb8f57e5f01859254b4f8932b79dd44f05ff8c0760e7ce7444e5561f6d4d9e832f86d1c5bfa39ea3408073f086dd8a83d120ec78359188caf2c77bf93de5f19d4578ad8478dd6c256d33d6e7b9de6bbab27649de6eff84655e880147c392e5203fe52641ab76f64d818287a020000",
    ],
    [
      "ETag",
      "dsgcc54UhM9r4YhzNYzW5A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` != ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-58-1640201729937",
    },
  })
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
      "535b6f9b3014fe2bcc7bd9a42601421288147559ca36a634690969354d53628ca16e0153db64aaaafcf71d43d38baab54f189fef726ebe4737ac4cd018c52cbbada9b8fb78cd637484a8c219dc7ac957a2ea50fcdc45ac9fd717f6b93a3bcf26134030cd92b8a872da91bc1684caf17ad5cd04af2b2c38ef805067e076aca163daa635b23daf3f029ea4793a67e50db0af94aae4b8d73b787733ceb39ce28ac92ee1c5e37d6f67f72ac1af2951b2f7d2b2072eb2f7b6e971ce09568c9793f50a12a825151b5a6096430a4fcc24fef252bacb70d1cd00bc63846242785d2a9d1648105ea62cab45a38ac6f7a849f3d901adfcb93f8b8cd972bd883e6d71a1c9dbcf0696c66623a8ac73657c0b97a7c6b602af2b2ca9dc1a973ffcd0378cada0848b64c392ad31318e8de9e2c478c26d8d0ffa721e9c069161412e09958a954d26118e73aab3786856f07a449a8015e8b4c1cdc81c62cb35bd388d472475fb833835691cbbf16880fbb1493c873a494c31f094566f58b8e4e528b19dd8eb3b43cb8ead24891dbb8f3d8fd8d84c0689353231f6866e8a1db43f427f0553f484c98a4bd6760c5d8641e46fa270bd984d23bf2923c5d0959336395dc4f33c1514b9314d5def1bb5ed75947170d3230816911f4e675170e1b7539fd30c93bbd52dcc3dc5b9a480c60217545171ca13681c3a5bae8228582ea6736034a33c3b20241affbe7f22447755d369d57cb5d7b029f5117081f3ba41ecda03b2d07e7ff47f855514068bef6f4be00aaa05993f8082456f15d0f9da0f7fa1f62aa42915b424ef6f01809bc0bbeff5f078000bcf076ca4827fd83922b50911b4dd3d5634553eb0dda1e3b8a8010bf52a36709d4383b58656a4052dd54345ede3d1fd6a42b57c0441105666d1746aff0f678d3ae7bc040000",
    ],
    [
      "ETag",
      "9dBctuRrJvTi3luV2QtPQg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-58-1640201729937"
  )
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
      "c1",
      "6e",
      "82",
      "40",
      "1086df657a950415b492785043d4c49816f5d034c6ac30201618ba3bd810e2bb7796f6b23bf9e7db992fdbc1575e2510c035cfbe1bd4ed4b86fc6e8b084d53b091aba6ca200c00596542960ff7ea2e56e1edb8e7cdda1b27878f51ba98cf8530f10d4b054107698e456220f8eca05225cab3cb45f71305e3b6b6c9767f0cd761244149890df6a7dd6eb1dc85f03c3f0770a76b84296aac62b4236b4d778c796b6d8d2aeb021d438d8ed1400ff78d4c53532b4de448e2f8afce70e2b92377381dcd66e3a98005c58a73aa843d1d40d630b12a22fa1159180aa0fb52bcd3fe7c483cb142e77f74d9329a374db2d7a05de9fbde9fc08aac148b2ceb0607102bf98e4dce10a4aa30f8fc0528db3b836c010000",
    ],
    [
      "ETag",
      "mv0b0ACEhTNtHG43dSY2fA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "82300000d0bbf45b0d6084b1bf024ec0a2b0a1037e9a520a1688580a8a2cbbfbcc8ef0de0f20943229f1d035ec0adec19368e68aae72052677658e83465cddaaa5818a1ae8ee4de81d97da548edf97756dcb51db3e5a4f3a9e9e07350efc5ab1fab39795f3014ab7f4235b48fe9517865a15c903db55871d23cbf8e6a8daa7cf3a53072478ba43b97078565375192a63c19c0819f0e330cd6dc8ef90ee23bd4531e9022ba69888a18d88318df23c6bf6c34fe2d0f286b457b46d7749f3e66d07ef656585275d2c09f7dd7e5f4cd6ecefaa0b72676407517e43c2cca0e1810560d38df74c62fe72af37a6b900ff097878ded86bc262a4673df8fd034df0b2ed23010000",
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
      "Wed, 22 Dec 2021 19:36:27 GMT",
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
      jobId: "grouparoo-job-59-1640201729937",
    },
  })
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
      "000002ff85546b6f9b3014fd2bc8fbda24e409448ad628a56bd6846c40da4dd3848c73a16e01136c5a5555fefb2ea6e95a556a3f817dcfb9e7dc073c913b5eecc894c43cddd7503d7eb915313921a0688ab7fec3f7cbcceccbbde75ffe9281535de6e34d3a9b2182372c49f332838e1475c5404eb74137ad445dd24a880e26ea8c9d4e7f32320766df1a38ced0429e842c59f1e20ed9374a9572daeb1db5bba9106906b4e4b2cb44fe72dfbb1ff4ca4adc0253b2f756b2872ab2f7b1e8d74c30aab82866db000dd412aa0872ca33b4f09fb98b4fdfa6ee729a775304df730694315117aab185299828129ed695ce4aa64f44db7cf5420277e52e428389acce8ba8a0399c183baa68a41e4b30cefdcdda587ae71b7f3d0f971b2f0a1617ee7ade5d6c56dbb51718d717aeef1a8ac61968ae31334ef5c9c303eaef402a5e68f5b0b96e949f1bb47c3f968680d212da60649913dab74d274e628b25f6701c2726c4b11d5b633a8c4de68c60b48b81224f8b6a162d446159341eda1327da4d6c3b1a39c938a230b623dbb41805b04603d6278713f2507105675c9642f2b643e4da5f866e14fa5b6f310f5d5d4242eb4c9db5c69a025e7b545860649a7d047e50d7a18972816a4dcb975ee8faf345b8bc72db29af20a5ec31d8e39c139a494034adb0810aaab5d861d388375fbb6708d653fb710c4a32fdf3449abe374e5eb5fd851ee2101bcb4a3f4910fa4bef9bb673445cd1acd690fbf6859468f906eb43d787bf88c4456db3909f5bd7ff4dda2b1f12a8a0609f4f14c13af0e9f7765c7ec4e2faa38c5478c6fd61b2116115b47bc475b947b66d0d8613a2c1957a171b4eac63d79a1c4d46c8a150cf15b5cb8f85b662b57c0135bf94ade7e96e1dfe018ce07d337c040000",
    ],
    [
      "ETag",
      "RwJKl01sqNRKXsS9rKm5Og==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-59-1640201729937"
  )
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
      "4ec2401086df65bc2d09200769c20587aa2405a1940b35842ced00c5b65376b71a24bcbbb315d1a889de6c67a6df4ce7ffbb07788ad2106c5846eb5d8e727fb1463d3181872a8fb5e24746a942b000b55833b977a8b7ecbf5677cbda7d553ba36158771f26ed36132ad86022c03ec02ac23854603f1e201509725b40719ea48b22b340ef33539cfade6074c37942a1c94733d7ed745d078ed6b931145a2c0afe1f6df3a3055b5a7ab84289698066974cd216033d30329548b2184b8a7219a082022e5eac25e599904425ae94eaad52a5512b57cb9566b5d5ba6c32185320744429b3b329ef079ab4883d7a6195d0604016210b5e15e73397a3b01062c2c1c86fd48afdbe02120392e1e24f2ee3753782ffc2077672e03b2712ca537da6aeddbbce6fe3d8d2cf51fd8eeffc209466a3ce883f183a53bf331c1b6e7e92dedd6b546349eca3426361a55cbbaa371be577577b649ce6efd85ae6684120f872dc461aec9588151edf00b7bf98a57a020000",
    ],
    [
      "ETag",
      "yEoCbDz2qb4Y2tENMd5LZQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `date` != ? LIMIT 1",
        types: ["INT64", "DATE"],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-60-1640201729937",
    },
  })
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
      "00000002ff85536d6f9b3010fe2bccfbb2494d0224812452d46529dbd0d2a44d48ab699a12630eea1630c5a65b57e5bfef0c4d5f54adfd84b97b5eeecee73b72c5f3888c48c893eb0acadbf79722240704144d309a26b3e11f79faddfeeb24f385fbd9afcec569321e23826b96a45991424b8aaa642047eb553b294555d05288160ab51cb365393dd3362dd71e0ebb2ef224a4f18ce757c8be50aa90a34e67efdd4e844852a005976d26b28778e7c6ee14a5b804a664e7b965075d64e775d3c35430aab8c8c7eb15165049283790519e62098fcc28fcf45cbacd69d64e107cc31950c644952b5d164a3091c73ca9ca5a958cee485de693035979336f1a18d3c57a1e7cd8d24c93b71f0d2a8dcda60459a5caf8b25c1c1bdb02bd2ea804b935cebf794bcf30b6253051461b1e6d8db171684ce647188ca882adf14e0766feb11f1816d61181543cafab08689882aee07e50fecbebd104aad0ab496e5cd3a1d6c01c8671e8b278d0ed87b109613808dd3eed86261bf6a017854091a7b47acda2b9c8692fb61ccb365d70ec2e1b58bdae1381e958bdd8748703b7d76760c65d2b26bb03f2bbe40a8eb82c84e4cdb4c8f9d20fbc4db05ccfa793c0abdb88294ee4a8294e37f1b44e854d6e4c53f7fb4a6f3b9de502ddf4f8fd79e02d27d3c03ff39a1b9f4142d9edea1aef3ca6a90444d39266a0a03c16110e8e9c2c567ee02fe6931932ea6b3cd9232419fdbc7b2404b7453d69557fb597d3abfdf780339a5635e2a639108bec7607ff5738d2637855c0c66d6e9976cbeaa3d22f84e29e3722e474ed2d7f9026b484184ac8d9db8b80e03af1e673ddbf1dc4e2eb411ba9f01fd78e496dc24a68d68f6775a3f7ec01ae5597d4e052bdc8d9667f3f63ada11521835cdd77d4bc1d3db23a55c9071026716be6fefc2b66ff019c79acdebb040000",
    ],
    [
      "ETag",
      "lgL9xsQK2z6gNO7BIuWoQg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-60-1640201729937"
  )
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
      "51",
      "4f",
      "c2",
      "30",
      "10",
      "c7",
      "bf",
      "cbf9e8960c84014b78708a824102531e8c21a474b739dc76a3ed30cbb2efee75fad25efef7ebdd2f6de13b2b6308e094a5971a557393a2d9d922425de746f35551a9111c4023522647d3f1cb4586d3ed6bfaf81437bb8f6b72bb4ce77326b4fcc24240d04292611e6b083e5b284581fcec7854fd44c64c53d964b5795f3c2f220e0a8a6db0d9afd7f7e17a01dda173e04ca7081354584ab4232b45679466656db528aa1c5d4db592a8a187fb46aaa8ae84227239717dcf1df8236fe80d26c3d9ec6ec2604e52988c4a66f76fc06b0c199147f4c3b2306040f5257b27fd79e5d8b742877f346c0ceaad22deabd1ae1c8f877f020f64a50ccb1a55a30352f0772c33034122728ddd2ff97124ca6c010000",
    ],
    [
      "ETag",
      "485JqcB8PMgDFdyQYvf+Hg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "000002ff1dd04b7282300000d0bb64ad0e9f9892ee048132544081c65d26c488fc04f9a3d3bbd7e911de7b01c6b9e83adad785b8834fb030056ff8269176e7517a46fe03db5198b824ea754dc9d527f7ac39f1897daa0f65c12e8d8e4d130d1fb0e432f6f429c20171e454097d963db61dc7e45621481c1178a536d6959b536beebc6d346857ea2a4c4dba2286b6915c863d8c656216b58e172945f97e3d95049a6a305baa9ddfe0301dfb7ab4f27b4adad830282a96ac37652e05211c7e425630c4e5f2bc3e52a8ef543439989ec6ea5b9bf81213495abeaece7342eb4365a67e7b398215107393b5a2a3d9dbad6e315e81ff04da2f8d784fe882b5a205bf7f5405e18023010000",
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
      "Wed, 22 Dec 2021 19:36:28 GMT",
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
      jobId: "grouparoo-job-61-1640201729937",
    },
  })
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
      "9b3014fd2bc87b6d1268428048d19aa5b4454d4807a4d5344dc83886ba054cb1e95455f9efbb364dd76e52fb84ed7bce3de77ef08cee59bd433394b1e2a1a3edd3973b9ea12344252ee0d56dec4af207bb5b6eaecebfb95ba7ad2f2f8bf91c104cb104ae9a920e04ef5a42c56c1b0f8b96770d6e391f40a2c1d41a58d389796c5aceb1e78d1de0095ae62b56df03fb56ca46cc46a383f6b0e0bc28296e9818125ebdbe8f1e8f474dcbef289162f45e72042a62f4b1e8d792132c19afe7db180c7482b629ad302bc1c25fe62e3b799f7ac870352c00fcc808c584f0ae96ca16a420bcce59d1b53a2b9a3d236df3cd01c5feca5f2606e16557d5698d2b7a64ecb0c4a97c6aa871166dd646109e6da2f5220936611a2f2ffcf562b8dcacb6eb30366e2efcc83724ce4aaab9c6dc38d1b7102ea0bfa342b25aab27ea5929bf3428f87f2c8a00d282f6c1d431a7d8724d2fcb3387e4eed8ce729366999b39361e6726f12674b2cb28069e16d52c5cf3da9e60cfc526496d279fa613776ca56e66e7a99359b6ba11d324687f847eb74cd253261a2e58df21741305899f26d1365c2e125f9790e3ae94a7bd3155c05b8f120a4c4dd302e00775ed55947150532d0fc2c48f16cb24b8f6fb29af6881c953fc0073ce712928a0710b0d94b45df31d340d858bb57f0a603db5ab4350a0d9cf67a4faae9cbc69fb2b3d81212acb527f519c444178aeed1c10d7b8ec34e4b13fa0062cdf427de07aff0b90b0a87d16f47deb473f50ff14d19cb6b4269f4f14c03af0e9ff76587ec0c2fa838c907087fd2142899096f67bc474b907b6eb7aee1869702bff8d79a63739744de5501969456bf95251bffc50682fd689571004610542ddadfd1fae8855827c040000",
    ],
    [
      "ETag",
      "8p5mtoq5uCOPGB8U7rnKKg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-61-1640201729937"
  )
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
      "02ff8d925d4fc2500c86ff4bbd74248038740917035149702a8c1835861cb63207db3acf874a08ffdd9e8968d4446fcedaee69d7f7dd59c3322d62f06096264f06e56a2f417d6d83112a9369c58f920a85e0006a9130799be820e8a93bb37fe3bfc666e21e2d0f32bfd36142458f980bf0d6304f318b1578f76b28448edc165166f2625a650ee855698be3703408ce38cf29b67930190efdeeb00f1b67d7180b2da615ff8fb6878d030b9a8d708e128b08ed2ea5a405467a60652a919719d6141919a1820aae5e24924c2924518d2b35b7516bb8ad7ab3de68378f8f0fda0c6614099d52c1ec64ccfb81262db211bdb04a70199055c882e7d5f9cce534ae84d87010846eabdaef2b203122194fffe44a5ef751f05ff8c0b60e7ce7444ea6d03bea7478e9ff368e2dfd1c75e287fd1f84d26cd40e090717fd71e85f5c59ee612bbdbbd2a8ae24b18f0aad858d7aebe8b0edd6df5ded91759abfe36969d08148f0e5384f3578739129dcbc01d7855dc37a020000",
    ],
    [
      "ETag",
      "YgtNNCsZu+WAxduU68k3lA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `stamp` != ? LIMIT 1",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-62-1640201729937",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536d6f9b3010fe2bccfbb2494d02840688147551ca3aa484740969d54e53621b43dc02a6d864abaafcf71dd0f445d5da4f20dff376e7f303bae579848688f0e4ae62e5fde71b41d011620a27701a6cf31f93edf575bc3cbbf26f8c33efef0e93f16804085eb324ce8a9475a4a84acae470b5ec26a5a80a5c0ad101a1cec0ec18034b3775c3365db76f034fb2349ef2fc16d85ba50a39ecf50ededd44882465b8e0b24b45f674dedb99bda214378c2ad97b6dd90317d97bdff42415142b2ef2d16a09012ac9ca35cb304f21c2333322df5e4b7739ceba0980779c324ca9a87255c702092af2982755d9a8a2e1036a62bef8414b6fea4d426d325f05e1970dce6af2e6ab86a5b65e974c56a9d2be2fe6336d5380d7164b2637dae50f6fe169daa6645494d19a471b6da49d68e3e0140ea582701bed537d32f5677ea81910246252f1bc89116292b23ac2e3a4fcb7f75313b002b3b6b8b6f501361cdd2531b169ecf48f49ac33421c621fe33ed1a96b312b220c034fd5ea0d0be722d759640e8849fa31c176ec58916edab6dbc73a669633a02eb6fa843a868bf647e84fc9153be5b21092b7e342970b3ff4d6e162154cc6a1d7b4116318c9691bae6ee2654e054dae75bdeef79ddef675950b70abe7ef07a1b7184f42ffc26baf7cca124cef977770e9314e2503342e71c6142b672282c1a1f3f9d20ffd79309e02a3b9c7f30342a2e1af876742785f349356cdb7f61a588dff017081d3aa41ecda1f64a0fdfee8ff0aa13ff396e17876febe8a093bddd161bb8f43c31c1afda16175755dbf06f1df4084dd6f75d1cf95b7b842edd182c5ac6439fd783700dc143e7cc287f7045878516003cba9386c2295b5092d59bb913c6b7a7f643bae63eba80197ea4dcd1d3887b1d71ab522cb58ae1e3b6adf533dc5a654c92710146191023f3883ea3f98c0c677cf040000",
    ],
    [
      "ETag",
      "NhnHChZZfSGYIj1GExvabA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-62-1640201729937"
  )
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
      "0002ff2d90dd4ec2401046df65bca511aa1469c2059846492a910a26c610b26da7b575db29fba341d27777b67ab33bf9e6ecccc95ee0b36a730821adca934575be2ad16c5d91a0b6d268be3a6a35c208d08892c9d7272a637d4ae5d6fad76f777639fe69ebed62c184ce3eb011105ea0a850e61ac2f70bb4a2417e763caa612263e6dcb964bdd9450f51c24143b90b36fb385eaee208fa433f829ad2040b54d866e846768a6accccdad96ad174123d4d5665a861808746a9c8764211799c7881ef4d82dbb13f9eccfcf9fc66c6a0a44c988a5a66f72fc06b0c192113fa66599830a08692bd8be1fce2387042877f747536a89f15f15e8d6ee574eaff09dc9393322c6b94c5116482bfe3b1321016426aec7f01233d61306c010000",
    ],
    [
      "ETag",
      "VMogLsqblQu2/Y8uA0znjQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "8b08000000000002ff1dd0cb7282300040d17fc9da3a08a59aee52501eada1c8db0d13626801110c08814effbd4cbfe0ce3d3f8050caba2eed9b8addc02b98880cd7749d49281ea4d9c79f2e9ef3d17e727939e0f7b0d81a86c52bc5088a97900f9e7941ad5547444cf1e32c17f072ca6b23cd35171fef3bdddb5b82def1756f259807e7e16bbcca19f21f8d993d9beab987c8fe76d0e6626eef726e8f6430f5b00aeaec805a3b0c76b3f2d1bb4b2dc21a64f8aa4b878d230968b54e3b2a49a4c6c7e656bb4909bb148f901cb34119a70e6d0a9b8471593335a6b230b56c2760798b7d4f345255799e43658b821560a22d38ebd262f956540857e01f21eda7962d126f8c70c6c1ef1f0df0f02323010000",
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
      "Wed, 22 Dec 2021 19:36:30 GMT",
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
      jobId: "grouparoo-job-63-1640201729937",
    },
  })
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
      "f7",
      "b54080f008125a114d5b24086d125a4dd314d9e626350d71163b9d58c57fdf8d53ba5695da4fb17dcfb9e7dc479ec9a3c8b7644298487f57501ebeed24236704344df1f5efcd6d44ef329bb9ab5db0bb72c3c7cbc372369d2242d42c45f745062d25ab92839a6cc2765acaaaa0a5942d4cd41af65bdda163f7eceea8e7bafd11f21464c952e48fc87ed0ba50934ee7a4dd4ea54c33a085506d2ef7afef9da75ea728e50eb8569df7921d54519dcf45bf6792532d643edd8468a05250c6b0a722430bff995b76fe3e755bd07d3b45f093e040399755ae6b5b9882cb3c1169559aac64f24c8ccd3707127a4b6f1e595c66d53e8f73ba87336b4b358df5a100eb3258afac857fb90e56b368b1f6e3707eedad66edf97ab959f9a1757fed059ea529cbc070ada9756e6e3e5e507f0b4a8bdca847f573adfcd2a0c5c7b1d4049456d004e3913da4ddb1edb2848d7832ee0f5862036363361ad03eb3b9eb80b365409167440d8be658331b7407c3218f07c3ae1d3ba34112bb7d671c3b7d0a3060e31e4d46e47846fe9442c385508554a2e910b90f16911747c1c69fcf22cf9490d02ad3178db1ba80b71e351618db7617819fd475aca342a25addf2851f79c16c1e2deebc66ca4b48293f84bf71ce09cd14209a96d8400de54a6eb169c49fadbc0b049ba9dd9c828a4c7e3e93baefb593376d7fa54738c4dab2365f1246c1c2bf32764e883b9a5506f2d41c4881961fb03e747dfc85485cd4260bb9dd78c10fd23c0590400939ff7aa20836812fffb7d3f22316d71f6594c63bee0f57b5082fa1d92361ca3db15d1b1310032ef587d8d8b14f5d",
      "ab73d419610fb97ea9a8597e2cb411abd42b0883b802bee9d6f11f6250ffb17c040000",
    ],
    [
      "ETag",
      "zPQTaVl0b9MjRjG9SkFyLA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-63-1640201729937"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d926f4fc2400cc6bf4b7dbb25fc73c0125e20a2900cd431888921e4d80a0cb775dedd2484f0dded4d44a326fae6d676bf767d9edd019ee32c021796f1faa540b9bf58a37e30818faa48b4e2474e9942b000b5583339db7ab3c7cd803cb5799cf9bdcbf6d46fd5779d0e132adc602ac03dc02ac62452e03e1d201329725b484991668b32b340ef73539c04fe707ccb794a91c9c753cfeb5e797d385ae7c64868b128f97fb4cd8f166c69e9e30a2566219a5d72495b0cf5d0c85422cd13b41515324405255cbe584b2a7221896caed84eddae3a8d4aad526dd6daed7a93c18442a163ca989d4e783fd0a445e2d38e5582c3802c4316bc2acf572ec75129c484c371e034cafdbe02124392d1e24f2ee7753782ffc2077672e03b27522a327da66ebcbbee6fe3d8d2cf51d7dda0ff83509a8d3a23c170d49f04ddd1bde1e627e9577b8dea5e12fba8d05858ad345a974da7f2ee6a8f8cd3fc1d57cb022d08055f8e41acc15d8944e1f10d86c848087a020000",
    ],
    [
      "ETag",
      "VjLVXhHoLshXVRC59UR83w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `amount` != ? LIMIT 1",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-64-1640201729937",
    },
  })
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
      "5b6fda3014fe2b99f7b2690512089020a10ed1748b4aa183b06a9a26709c93d46d12a7b1d3a9aaf8ef3b4ea017556b9fe29cf35dcec57e20373c8fc888843cb9ada0bcff782d42724440d104a333389b9efaf6e22c5bdf54bdebde1739edaf93f118115cb324cd8a145a52542503395aafda4929aa829642b450a835b05bd6c036bba635ecba6e6f883c09693ce3f90db2af942ae4a8d33978b71321921468c1659b89ec31deb9eb768a525c0353b2f3d2b2832eb2f3b6e9712a18555ce4e3f50a0ba824941bc8284fb1842766147e7d29dde6346b2708bee30c2863a2ca952e0b2598c8639e5465ad4a460fa42ef3d981acbc99370d8ce9623d0f3e6d69a6c9dbcf0695c6665382ac52659c2e17e7c6b640af2b2a416e8dcbefded2338c6d094c94d186475b636c1c1b93f90906f712c6071d9af9e77e605858490452f1bcae23a0610aba86fda8fcd70bd204aad0ad496e86e6805a8ee986713864b1d3eb87b10961e884c33eed8526736db0a31028f29456af593417b91332cbed833370a06bbb71c4aca1ade95d36e8e1afe344b41bf6598fec8ec8df922b38e1b2109237f322974b3ff036c1723d9f4e02af6e23a6389393a638ddc4f33a1536b9314dddef1bbded74960b74d30bf0e781b79c4c03ffa7d7ec7c060965f7ab5bdc7a4c530988a625cd4041792e221c1cb958acfcc05fcc273364d48bbc38202419fd7e782204f7453d69557fb5d7c0aefd0f809f34ad6ac45d732016d9ed8efeaf703a5b4cded768f711b1fb8320bce68d02f9b1f696bf48135a420c25e4ecfd5b80e03af1ee6b3d3c1dc4e2e3411ba9f01fef1c93da8495d0dc3d9ed515eed9ae65bb26a9c1a57a951b98c3c380b58656840c72b5efa8793a7a5e75aa928f204ce29599fbf36f98fd074718c6d9ba040000",
    ],
    [
      "ETag",
      "LeKCFI4OKmUku3j3+sC5Ug==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-64-1640201729937"
  )
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
      "61",
      "4f",
      "c2",
      "301086ffcbf99525c070c8123e884e5c32094c21268690d2dde670dbd5b6c300e1bf7b9d7e692fef3dbd7bd20b7c954d0621eccbe2bb457dba29d0ae5c91a2692b6bf852d418841ea015059362fee8bf28715e05f1317a8adeebcda659aea653268cfcc45a407881bcc42a33107e5ca01135f2b3dd4e771319b327e59278f116cda394839a32172cd649723f4b22b86eaf3d38d03ec51c353612dd48a5e980d2c6ced6885a55e8196ab544031ddc350a4dad129ac8e3c40b46de2018f587fdc1783899f863062b92c296d430bb7e055e63c98a2aa51f96850103ba2bd93befce23c7b74e68fb8fce4e16cd5213ef35e856fac1dd9fc0033929cbb256b7d80329f83b9e4b0b612e2a83d75f425ebd806c010000",
    ],
    [
      "ETag",
      "aGD3MpazQ6IvEFEXmVVnPQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "000002ff1dd04b7282300000d0bb64ed3811454d7720a2e5d3802260374c0c0946452104043bbd7b9d1ee1bd1f4028654d93a9c795ddc107188886c6747c8246dac15784eb52e0fb63ffb22687cd22dd2ac778a232c0cc69b3d9d925384e1f575d05fe6e8031dec7f05678e5c59c4c73ee0bc8d687ee5be8253a1671b842916607b7047a068ceab6b73a82b9140b6ec52eff9cb3c317accf837092ed6ab95d8a7286d4441388b7564e3ba9fa2aa74e51ebd1f2b2e676dee468389e3ce29bbe2dad0cf77cb372298b65720df7a40adb7bd8faa55f4402cf0def66a0d9ae7aba155541d26be1c90023c0fa4a48d664e2ed9eea088dc07f42a6868abd274c462493e0f70f6ed301c023010000",
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
      "Wed, 22 Dec 2021 19:36:32 GMT",
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
      jobId: "grouparoo-job-65-1640201729937",
    },
  })
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
      "2b91f771b449df4da56a546d189dda14d214b44d53e4b837c1348d43ec8010ea7fe7daa10c84049f62fb9e73cfb98f3c911dcfb76444629ede55503e7ebb15313921a0688aafbb3fd965debe7d98fc9a79d767bbef175709a497e33122b86649ba2f32684851950ce468b36ea6a5a80a5a0ad1c0448d7eafd1ea779db6d31ab45db733409e842c59f07c87ec1ba50a39b2eda376331522cd80165c3699d8bfbedbf76dbb28c52d3025edf79236aa48fb73d11f99605471918f376b3450492823d8539ea185ffcc6d7cfa3e7593d37d3345f03d6740191355aeb42d4cc1449ef0b42a4d56327a22c6e69b03597b0b6f1a5a4c64d53e8f72ba87136b4b158dd46301d659b05a5a73ff6c152c27e17ce547ebe9b9b79c34a7abc566e9afadeb732ff02c45e30c0cd71a5ba7e6e6e305f5b72015cf8d7aa89fb5f24b83e61fc7a209282da10e4603a74f5b43c78d9378c09261a717270ec4f1301ef468277698db85ee36068a3c236a583417b90bba9fed6e34ec413feaf63bad88b6da10d1a41327adad9b741c871c4ec843c915ccb82c84e47587c875300fbd280c36fe74127aa6848456999ad5c674016f3d2a2c30729c16023fa9eba0a35ca09a6ef9dc0fbd60320de7575e3de505a4943daeef70ce09cd24209a96d84005e5526cb169c49f2cbd1982cdd42e8e4149467f9f88eebb76f2a6edaff41087a82d2bf325eb3098fb3f8d9d23e28a669581dcd70752a0e51bac0f5d1ffe211217b5ce422e375ef09bd44f01245042cebe9e28824de0cbffedb8fc88c5f54719a9f08efbc3a4166125d47bc44db947b6dbeef41d62c0a5fa10ebbaceb16b3a87ce087bc8d54b45f5f263a1b558255f4118c415f04db70ecf6930d79a7c",
      "040000",
    ],
    [
      "ETag",
      "kZlQn2jwAJDEWFk+PVfegQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-65-1640201729937"
  )
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
      "0002ff8d92514fc2400cc7bf4b7d744b0071c8121e505131803ae6831a42cead9b87db3aef6e18247c777b53d1a889bedcdaeed7aeffff6e0d8fb288c1877b993e55a8563b299a2b1b04a8abcc687e9454680407d08894c9cec0dbf5f44b206fd53291d98df1843cbfeaf598d0d103e602fc352412b358837fb78642e4c86d1165555eccebcc01b32a6d711a06c3c929e739c5369f5c8f46fdc3d10036ceb6311646cc6bfe1f6db38d030bba0f3041854584769752d1022333b432b5c8cb0c5d4d958a50430dd72f524555291491cb15d7db779b5ebbd16a343bad6e77afc360469130920a66afa7bc1f1832220be8995582c780aa43169cd4e792cb32ae85d8703809bd76bddf574061442a9effc995bcee83e0bff081bd3bf09d13395585d95227a38bfe6fe3d8d2cf51c7fd70f083d0868dda22e1703c9886fdf1a5e566efd20f5706f5a522f651a3b5b0d9681fec77bcc69bab47649de6eff84655e84024f8729c49037e22328d9b57ee757df97a020000",
    ],
    [
      "ETag",
      "7E6+6szRiZrvfilYt6aiJQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`id`) LIKE ? LIMIT 1",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-66-1640201729937",
    },
  })
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
      "53",
      "6d",
      "4f",
      "db",
      "30",
      "10",
      "fe2b962704486dd396aea8952ad641a6454b1b96a63036a1c64daec190c4c176903ac47fdfd9a530c4c43eecc33ed5bebbe7258faff7f48697291dd225cf6e6b90eb77d762491b1434cbb09ae482e95a0c02bd0edabd9fd0ee7ff7be8d47239ce006a55851e5d054a29609a8e17cd6caa4a82b2685682251b3df6f76fabd76b7dd39ec0e060787885390af7c5ede20fa4aeb4a0d1d67abddca84c872601557ad44144f75e7aeeb54525c43a295f352d24115e5bc2d7a948b84692ecad17c86066a05720105e3395a7846a6cb0f2fa95b9c15ad0c87ef78022c49445d6a630b291251ae78564bcb4a87f7d4dafced4067aeef1e47e438984fa3bd9815061cef13a6c8622141d5b9269fc26042e20ab5ae98021593f3cf6ee812124b48844c173c8dc9881c91f1f484103f3877c3bd186bfbc4f7beb858f7bd8917910eda4961c590f1846924d2c646ba397ae68d3428bd68b7cde06388deeba7a30fa6cb85e4dad8f7a6911b8e8f23efccdd24e643c692f5ec16335bb15c014e33c90ad020272205849c06332ff282e9d847848de1743ba1e8f0c7fd33205a57604c6afb6bb4fa3dabbf1d3863796d27ee3607daa10f0f8d7f62d8e9bcdf41924b1cc215d9e0e9d7b91b5ed04d2984154828138b7a23273b6c1b7fddf4eddae12c2e1eca288d77a579a28c4822c1b6235ed86f7c440f0eba9d1eb5c352bfee596628d33f761e356acb0f520a19da5d33575453d60b2f3114fcf73668014ab1ccd0cc4bfc12056c9903b16f479ea224714c78494cd4248e2e4edd858d3b6e908f2cc58eeef7884d79484cc8dbf3aeb9ec1a47d6c76605fe9387cb4d2c46e42498bab807bf009f365005f7040000",
    ],
    [
      "ETag",
      "cloatuo9OtyO04ze06ZIXA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "ff1dd04b7282300000d0bb64ad0e15f975170d60a128060bca860918f90602518b747af73a3dc27b3f8064191522b975356dc13b7892a5b1c816a9044f0f693afa2e9eaa34da9daabef39c7893ee70e4afa92db073f150ac071c064dc1026bb5d5e34cb9bb1ffb20f2886a5e27cba9ad217f7cb7e3b2d843971cf9ad59a19dba99e6047f35470db15631bba2d20ead8ff4fab03e738949d8b6a07f0f90ce5493a38945956b2b73c357ebb03ca563ad34f614e66f760185656a520e69e33d5543ded6b6734974d1f790c57da93dbc1509f15cce73ebf3ba151d764687e70175cfacba2013cc001d79395091942fb7ac18c60cfc2724b727a7af893525031dc0ef1ffbd1c49423010000",
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
      "Wed, 22 Dec 2021 19:36:33 GMT",
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
      jobId: "grouparoo-job-67-1640201729937",
    },
  })
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
      "02ff85535d4fdb3014fd2b91f74adb94b64953a91a551ba0134db73405a1698a6ce72618d238c40e5b85fadf77e3500642624fb17dcfb9e7dc8f3c93075124644298c81e6ba8f65fee2523270434cdf095da897b9baef9032c2ee14f3dee7fbbd8bbd9748a08d1b014dd95397494ac2b0e6ab2dd74b34ad625ada4ec60a28ee376faced03eb5fbeea9e70d5ce429c8d32b513c20fb4eeb524d7abda376379332cb81964275b9dcbdbef79e4e7b6525ef816bd57b2fd94315d5fb5cf46b2e39d54216d3ed060dd40aaa187654e468e11f336167ef537705dd7533043f090e94735917bab18529b82c5291d595c94a26cfc4d87c73201bffca9f47169779bd2be282eee0c44aa8a6b1de97609d87eb95b50cced7e16a162dd741bc995ffaab5977bebedaae828d7573e987bea529cbc170ada975666e015e503f01a54561d4a3e6b9517e69d0f2e3581a024a2b6883b16b3bb43fb63d963297a7e3c188a536303666ee880e98cdbd210c1306147946d4b068210b667ba9eb78496c3b7c1c0f47741853606eec7066f779324ca89392c309f95d090d0ba14aa944db2172132e233f8ec26d309f45be2921a575ae17adb1a680b71e351618db761f819fd47568a242a25ad3f26510f9e16c1e2daffd76ca579051bedf3ce29c539a2b4034adb0811aaa954cb0692498adfc0582cdd4be1f838a4c7e3e93a6ef8d93376d7fa54738c4c6b2365fb289c2657061ec1c11d734af0de4a93d90122ddf617de8faf00b91b8a86d16f263eb87b7a47d0a21850a0afeff8922d804fefbbf1d971fb1b8fe28a334de717fb86a447805ed1e0953ee91ed0d46aef95b35adf48798e3f58f5d6b7234196107857ea9a85d7e2cb415abd52b0883b80281e9d6e12f7fe078267c040000",
    ],
    [
      "ETag",
      "a0d7YfOckeDHexu81JGy7g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-67-1640201729937"
  )
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
      "0002ff8d92db4ec2401086df65bc2d493958a40917a0802827a1c40b43c8d20e506c3b75772b22e1dd9dad88464df4663b33fd663affdfddc3639804e0c2225c3d652877672bd4772618a3ca22adf89152a2102c402d564c76b0ddb99f0e5f29b8ddee6e36cdf28b70ec6dbdce84f2d7180b70f7b00c310a14b80f7b48448cdce65394c5c93ccf2cd0bbd41427deb83be8701e5360f2c1b4d76b347b2d3858a7c6406831cff97fb4cd0e166c6831c6254a4c7c34bba49236e8ebae91a9449c46585094491f15e470fe6225294b85242a70a5e0540b45a76297ec62b554ab95ab0c46e40b1d52c2ec74c2fb81262da2316d5925380cc83c64c1cbfc7ce67218e4424cd81d784e25dfef2b20d12719ccffe4525e772df82f7c604707be7322a62cd127aadd1b367e1bc7967e8eba6a78ad1f84d26cd409f1bafdd6c46bf447869b1da537771ad54812fba8d05858b42b17e755c77e77f5928cd3fc1d57cb0c2df0055f8eeb5083bb1491c2c31b989654817a020000",
    ],
    [
      "ETag",
      "GeFGWUOzodKwyJjB3xa60w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`purchase`) LIKE ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-68-1640201729937",
    },
  })
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
      "ff6f9a4014ff57c82d4dbaa42a0a829a98ce28dbc8145bc436dbb2e8711cf42a70f4ee70691afff73da0f64b9ab53f89f73edfdebb770f68c7f2088d50c892bb928afb4fb73c4467882a9cc0a92776eec2d859ae9c45ceceb526bf262b79391e0382552c89b322a52dc94b41a81cad57ed44f0b2c082f31608b5ac41ab6b997a4fefdabde1d0b08127691acf59be03f68d52851c753a47ef76c27992525c30d9263c7b3aefec7b9d42f05b4a94ecbcb6ec808becbc6f7a9e728215e3f978bd8200a5a4624333cc5288f0cc8cc22fafa5db0c67ed04c07b4628268497b9aa628104e179cc9252d4aa68f480ea982f3ed0ca993bd3409b2ed75e70bac55945de7ed6b0d4361b4165992aedabbf5c68db02bc6eb0a472ab5d7f777c47d3b682122ea20d8bb6da583bd726de4cd3e6cb6bc73f7d4283d4dcfde14075ee2edc40eb42a8884ac5f23a5280c39456711ea7e6bebdab8a80154835c58dad5bb83bd087611cda241e18fd30d669180e42bb8f8d502743939a514831f054a55eb370cef39e61867ddd36fbba61dad820661c77291ec624c2ba6e44e1b0671b7ad8d5d1e10cfd154cd119930597ac191dbaf6ddc0d904feda9b4e02a76e23c6309e5913ae6ae2654e054d6e74bdeaf79dde0e55957170abeec2f502c79f4c03f7ca69ae7f4e134cee5777b000314e2505341638a38a8a058f6070e862b9720377e94de6c0a8eff4e2889068f4fbe19910dc17f5a455fd5b795966ed7f045ce1b4ac11fbe60375d1e170f67f8555e0bbdeb7f7254e70519c80cc1f40c1c6370ae872edf83f5173e4d3980a9a938fb700c075e1c3877b7c45808577043652c17fd839222b132268b37b2cabbb7c640f4da367a11a2cd49b9a69f58e03ae342a459ad15c3d76d4bca26a5e75a9944f2028c2ca78f5a40eff0094ff4f3ac5040000",
    ],
    [
      "ETag",
      "NrkIM3k6IsDdEkI6AZASsQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-68-1640201729937"
  )
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
      "c1",
      "4e",
      "83",
      "40",
      "10",
      "86df65bc422c08ad25e9a13544484863d11e8c699a2d0c48050677171b42787767d1cbeee49f6f67beec085f559b430097aafcee510e7725ea832952547dad155f1db50ac102d4a26432eec5b6f0e95d446912dd174917b7deedb0d930a1b24f6c0404231415d6b982e063845634c8cfce67394f644c0f9d49e2fd5bf81ca61c34949b607f4c92ed2e09613a4d165ce992628112db0ccdc84ed215331d1b5b259aae465b512f335430c373a394d4774212d99cd8cb47db597a0b77e1acdcf5fa61c5604d99d015b5cc1e5f81d768d2a24ee9c6b2e03020e792bd8bf9fce1d83542a77f743768542f9278af42b3d2f7bd3f812732529a65b5ecd1824cf077449586a010b5c2e917fa7eba8a6c010000",
    ],
    [
      "ETag",
      "IuaAf5oYaHRLH/fLpIn4wQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "4d",
      "8e",
      "82",
      "300040e1bb74ad068b0a9d9d204caba8351814370d42b5adca5f41c4c9dc7dccdce0bdef072469cab5664d71e339f8027d02d1281d9d8df9f169bcf75bb1c5b8331e77180a23c02b22d0c451ae5d5f7c4766eee160e947604ddecf4a99e951a349c4952ae6d41ee3f32aa94b173f960b93c6398ab6dfcc0ff6af3cdda92661c49f063b51e51b712dab35ea9ee2423b714133b5944de6f9a157117b7cb26c57f2ab13b36901bdb0a52aa05cd9fd9167ad086fd2d336ece52c6345f7a93ae188473489875ac4fa4e09d4a488215ae159686d86b7925063b184edbaf25b020680bf4a5973cde4e7db9c223400ff08ace94bfe91707852f31afcfe01ee48138e23010000",
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
      "Wed, 22 Dec 2021 19:36:35 GMT",
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
      jobId: "grouparoo-job-69-1640201729937",
    },
  })
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
      "a34014fd2b64f6ab6de90ba449b33615579296ee02d56c361b320c171c05069941634cfffb5e06eb6a4cf4133373cfb9e7dc07cfe48e5729599084e7f72d344fdf6e45424e08289ae3ab955ddc3b21df5e9a155889d39816f5d2c7e51211bc63495ad6050ca4681b0672b10f877923da9a36420c30d1c07206636b664eccb13d719ca98d3c0945b6e1d51db26f94aae562343a6a0f7321f20268cde59089f2f57df43019d58db805a6e4e8bde40855e4e873d1ef85605471512df7211a6825343194941768e13f334dcedea71e725a0e73043f70069431d156aab3852998a8329eb78dce4a16cf44db7c7320a1bb71d791c144d196555cd1124e8c942a1aaba71a8c8b60b7353cff62176c5791b7f3e3707de96e57c3f56eb3dffaa1717de906aea1685280e61a4be34cdf7cbca07e0a52f14aab47dd73a7fcd220efe3583a024a4be883b18d531c9f9a4e922536cb4ea7f3243321494e137b4ea789c99c19ccd20428f2b4a866d14a542958ce8ca5763c99672c9e4d6766ec3033892774ea64cc996716b3c8e1843c365cc13997b590bcef10b90ebcc88da360efaf5791ab4bc8685ba8f3de5857c05b8f0a0b8c4d738cc04fea3a74512e50ad6bb9e7476eb05a47de95db4f790339654fe13dce39a3850444d3061ba8a0d98a149b46fcd5d63d47b09edacf635092c59f67d2f5bd73f2a6edaff40887d85956fa4bc228f0fc1fdace1171458b56431efa03a9d1f20dd687ae0f7f11898bda6721bff66ef09bf44f0164d040c5be9e288275e0cbffedb8fc88c5f54719a9f08efbc36427c21ae8f788eb728f6c673eb11da2c18dfa109b3ae6b16b5d8e2e239450a9978afae5c7427bb156be8230882be0eb6e1dfe01f39a09f67c040000",
    ],
    [
      "ETag",
      "6fFq9SiMH0ne6b9r06aIdw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-69-1640201729937"
  )
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
      "8d92514fc2400cc7bf4b7d6444401cb2c487a1a84b60c218f1c110726e650cb775dedd3484f0dded4d45a326fa726bbb5fbbfeffbb1d3ca6450c0e3ca4c95385727b94a09e9a204055655af1a3a4422158805a244cfa8d3bd72b8f1b7d0c3a93b59fe6779424d3f3732654b4c65c80b383558a59acc0b9df412172e4b688b22a2f96756681de96a6380b03cfbfe63ca7d8e4fe7c347207a321ecad43632cb458d6fc3fda167b0b36f410e00a2516119a5d4a491b8cb467642a919719361555324205355cbf482455a590444dae34ed7eb36d775b9d56bbd7e9f74f7a0c6614099d52c1ec7cc6fb81262db2805e5825d80cc83a64c1abfa7ce6721ad7424ce8f9a1ddadf7fb0a488c48c6cb3fb992d75d0bfe0b1fd8bb03df39915355e8037535ba757f1bc7967e8eba74c3e10f426936ea8084de78380bddf1c4708b77e983ad463591c43e2a3416b65bddb3d39edd7a73f5828cd3fc1d47cb0a2d88045f8e9b5483b31299c2fd2b69b99a777a020000",
    ],
    [
      "ETag",
      "N+WAIp/+9eR2PhNimWoggQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`purchase`) LIKE ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-70-1640201729937",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85537b6f9b3010ff2ac853a54ecb0302092152d44509dbd0d2a425a455374d893186ba054c6d93a9aaf2dd7740d387aab57f85f87eaf3b9f1fd02dcb233442214bee4a2aee3fddf010b510553881d3ddf5da96abc9afd9f934e345791e5c5df12f93f11810ac62499c15296d4b5e0a42e568bdea24829705169cb741a86deb6d6360e93dddb07b8e63dac093348de72cbf05f6b552851c75bb07ef4ec27992525c30d9213c7b3aefee7add42f01b4a94ecbeb6ec828becbe6f7a92728215e3f978bd8200a5a4624333cc5288f0cc8cc2afafa53b0c679d04c03b4628268497b9aa628104e179cc9252d4aa68f480ea982f3ed0ca9dbbd3409b2ed78be0788bb38abcfdac61a96d3682ca3255da377f79aa6d0bf0bac692caad76f9c3f55d4ddb0a4ab888362cda6a63ed449b2c669a365f5ebafef1131aa4e6de4f17aa73efd40b34034245542a96d791021ca6b48af33835efed5d5504ac40aa296e6c7d808da1ee847168937868f6c358a761380ced3e36439d3816b5a29062e0a94abd66e19ce73dd30afbba6df575d3b2b149ac383628766212615d37a3d0e9d9a61e1a3adab7d05fc1149d315970c99ad1a14bdf0bdc4de0af17d349e0d66dc418c6336bc2554dbccca9a0c98dae57fdbed3dbbeaa320e6ed55d788bc0f527d3c0bb709beb9fd30493fbd51d2c408c5349018d05cea8a2e29447303874b65c7981b75c4ce6c0a8eff4ec809068f4fbe19910dc17f5a455fd5b790dacdaff00b8c069592376cd0732d07edffabfc22af0bdc5f7f7258e70511c81cc1f40c1c6370ae87cedfa57a839f2694c05cdc9c75b00e0baf0e1c33dbc22c0c23b021ba9e03fec1c91950911b4d93d96d55d3eb29d81613aa8060bf5a6d61b0c0f03ae342a459ad15c3d76d4bca26a5e75a9944f2028c2ca2cea49edff0137474856c5040000",
    ],
    [
      "ETag",
      "vhU7sSAZDQCmopuQTYYo+A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-70-1640201729937"
  )
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
      "90416f82401085ffcbf40a09da2a68e2411ad2921a53693d19631618281618ba3bb43586ffde59ec6567f6edb7f35ee60a9f559bc312d2aafcea515fee4ae49d6d12347dcd464a47ad41700059954206cdecd74b67713a0f4236d5cb2e3045bb5ead8430d907360a9657282aac7303cbc3155ad5a07c3b9df4385130be745689b7efd1539488d0506e85ed7eb359879b0886e3e0c099d2040bd4d8666847769ace98716cd31ad57435ba867a9da181111e1f4a4d7da734912b8aeb7bee64fee04dbd893f5d2cee7d016bca1457d40abb7f03b161625527f423616122801e5bc95d8ce7b7c8531be8f88f861746f3aa497c0d5a4bef66ff4836124b54d63d3a902959c673c5b7fbf0078e9c3d0569010000",
    ],
    [
      "ETag",
      "8m5x0b5Ib68BtsiKQ8sfnA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "7282300000c0bfe4ac0e0591d01b95a0564ac4a90a5e1881546204242021e9f4ef75fa8dba7fd86f70ca32d2b6495733528157204fba3dc926a9e644bda63e31ade7838bce1c65d5e643efd7885cd72296dbc279c13c0f37251b8beb40fb152c0472f1fd8eea8bacca29748c969fc501f9f5c1b73a43a8158c140ebd77b58a644345b92be6c5ce3132166126173ecbcdae099734f1ef530b61bb536514c39269033a0694cdd2ad3ed39a055e58c197cffcb4ab4bcb833df72cb98f87bdbacc789d1ff536d6946e41e8863bd3c663bd12b723f45c390d8cc3555b5e1437bdcd3ccc264f4fff0e180132dc28276d421fdb0dd3b647e0af7ed2c91b79fc7f23274e38f8f90512536c8c19040000",
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
      "Wed, 22 Dec 2021 19:36:36 GMT",
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
      jobId: "grouparoo-job-71-1640201729937",
    },
  })
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
      "85536b4fa34014fd2b64f6e3daf26829a549b3762bae4d5aaa40359bcd860cc380a3c02033d418d3ffbe97c1ba1a13fdc4ccdc73ee39f7c133ba67558a662861f9434b9ba76f773c4127884a9cc3ebcff36b275cec1fecddf73a5cae05df5ef2fdd57c0e08d6b1042eeb820e046f1b42c56c170ef386b7356e381f40a281630eccc9d8b00cd3b15c77e4004fd0225bb3ea1ed8b752d662a6eb47ed61ce795e505c333124bc7c7dd7f7965e37fc8e1229f4f7923aa808fd73d11f052758325ecd77211868056d625a62568085ffcc34397d9f7ac87039cc01bc67846242785bc9ce16a420bcca58de362a2b9a3d2365f3cd0185deda5b461ae1455b5671854b7aa2a558e2583ed5543b0fb61b6de59f6f83cd225a6dfd385c5e789bc570b95def367ea8dd5c7881a7499c145471b5b976aa6e3e5c403fa542b24aa947dd73a7fcd2a0d5c7b174049016b40fc68e31c1e6d470932c7148361dd94966d02499268e8d478941dc311da709c5c053a28a852b5ed9ae65a46e82638b246e3c4e27768c4dcb8e3377ec62db19e1d41ca1c3097a6c98a4674cd45cb0be43e82658455e1c053b7fb9883c554286db429ef5c6ba02de7a9450606c1826003fa9ebd0451907b5aee52b3ff282c5325a5d7bfd94d734c7e4297c803967b81014d0b881064ada6c780a4d43fe62e39d01584dedf2181468f6e719757def9cbc69fb2b3d82217696a5faa2300a56fe2f65e788b8c645ab20fbfe806ab07c0bf581ebc35f40c2a2f659d0d5ce0b7ea3fe29a0196d6845be9e288055e0cbffedb8fc8085f5071921e10efb434427421adaef1153e51ed9ee646a8d900237f243cc1d9bc7ae7539ba8cb4a4957ca9a85f7e28b4176bc52b0882b002beead6e11f10cf57337c040000",
    ],
    [
      "ETag",
      "BFV7SAvq5U+pSCLsoOPovQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-71-1640201729937"
  )
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
      "400cc6bf4b7dbb258008b2841743511706f267244643c8b115186eebbcbb4908e1bbdb9b88464df4cdaded7eedfa3cbb3d3cc759040e2ce2d54b817277b6423d32c118559168c58f9c328560016ab162b2156db7c3dda2b7ed3cf40623df7b8cdde962d46e33a1c235a6029c3d2c634c2205ced31e329122b785941469362f330bf42e37c54930f606b79ca714997c30f57db7e377e1609d1a23a1c5bce4ffd1363b58b0a1c5189728310bd1ec924bda60a83d235389344fd05654c810159470f96225a9c88524b2b96237ab76b551afd42ad566add53a6f32985028744c19b3d309ef079ab448c6b46595d0604096210b5e96e72b97e3a81462426f1034eae57e5f018921c968fe2797f3ba6bc17fe1033b3af09d132915993e5137febdfbdb38b6f473d4b51b747f104ab3512724f0fadd49e0f687869b1da577761ad55012fba8d05858add42f2f9a8dcabbab57649ce6ef385a16684128f872dcc51a9ca548141ede001a28b62f7a020000",
    ],
    [
      "ETag",
      "9dwwPybKwBXKNQLIZiAUbQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`stamp`) LIKE ? LIMIT 1",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-72-1640201729937",
    },
  })
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
      "5b",
      "4f",
      "db3014fe2b96f70212bd0eb5b453c50acdb668690a490a6208b56e721a0c491c6c87a942fcf71d3b0586d8d8f39ee2f87c371f1f3fd05b5e247448573cbdab406e3edc8815dda3a0598abb3faad58177e49f9665d1df44d574929703f973344204372cc5f232838612958c410de7613395a22a9914a281428d7eb7d1e9edb7bbed4ebf3b187cec234f41b6f678718bec6bad4b356cb59ebc9ba9106906ace4aa198bfc79bf75df6d9552dc40ac55ebb5650b5d54eb7dd3c34cc44c73518ce62106a814c805e48c6718e18599ac3ebf966e7296375304dff318581c8baad026164ac4a258f3b49256950e1fa88df9db82868ee71c47e47836f7a39d25cb0d79b94b98228b850455659a7c096653b22cd1eb9a29504b72fecd091c429612622193054f9664440ec9d89f10e2cdce9d6067a93446441dcffdee60c973a76e443a9828813543d109d3a8a54d92a45ebae69a3428bd68b70d70db47f7ededd14753e542726d4ee0fa91138c8f23f7cca99be641cae24d78876d5bb34c01a29964396890539100524e66a11bb9337fec21c376e2e409a1e8f0f2e185106d4a3021b5fd1aafdebef57f029cb1acb288fb7a413bf4f171efef0a913b75c2683c3d41d8150ae11cd4087a3a77820b5a6f05b00609456c99ef74c2826de19fe3fc345b88c5e9421bbc22cd95e6b13226b1045b8e786e4fb1650ffabd418f5ab0d46f6afdfec03cc122f96365eb51597d9052c8c00e94f9453765b3f0021bc793533b8eaf52de6db772508aa546de1724673abee6454a144f0bd49640d642927555c486568f9fdd6232ad722834318d5743f2dcf82609abb2145243f2a282807a72c32870fdafbb9fb6bf47179113e273d0e4b2333ce85c9943d9a3d473f2ff1ee3aabe1c936732f31d9cc65f4f0c559d62050000",
    ],
    [
      "ETag",
      "Zub8LBNQppn7yTuMDmp9rw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "00",
      "d0bb64ad0e131049772046850ac8d7b861000352955fa889747af73a3dc27b3f202b0aca583ab637da800ff0ca205a148b5cd24f4f690a5d9f69ced6637b047998d434be62cb3f6e129c5577bc6c38e6c3385a71581bbc3262cfef6e418822535786b5b8c01d1a97537e8eaabadc59f6b728b62e57cab60f481ceac6fcd9443d7e75ec9aa8de053e2657b65709919d836d68e9a5539e619a3bba421572809a55995120247852d4b622e82ebe56e5266a93127f0a1349577e5cc33d22263a6711768b3ca8547505b5fed1efe772d3117b22ce81793d1781500c0e66808aae1e284bebb75b5e223403ff09e9f8eae87bc2a0d94007f0fb0764577a7d23010000",
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
      "Wed, 22 Dec 2021 19:36:38 GMT",
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
      jobId: "grouparoo-job-73-1640201729937",
    },
  })
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
      "6b4fdb3014fd2b91f795b6e983a6a9548daa84d1ad4d214d41d33445b673130c691c62a708a1fef7dd38b40321c1a7d8bee7dc73ee232fe441e431191326d2c70acae76ff7929113029aa6f8eaffbcba57f193c7cec391a3fbbff28b24d85d4f268810354bd16d91414bc9aae4a0c69b753b2d6555d052ca16266a39fd567738b07b76d7e9b96edf419e822c5988fc01d9775a176adce91cb4dba9946906b410aacde5f6f8ded9f53a4529ef816bd5792fd94115d5f95cf47b2639d542e693cd1a0d540aca08b6546468e13f336667ef53b705ddb65304ef0407cab9ac725ddbc2145ce68948abd26425e317626cbe3990b5b7f066a1c565566df328a75b38b162aa69a49f0bb02e82d5d29afb17ab60390de72b3f5acf2ebde5b43d5b2d364b7f6ddd5e7a816769ca32305c6b629d999b8f17d48f4169911bf5b07eae955f1b34ff38969a80d20a9a60e4d843da1dd92e4b98c39351ff942536303662ce29ed339bbb0318c40c28f28ca861d15ce6c3aedb1d804da3e1a067470336e4d188bac3281eb98c42cf89939891fd09792a858673a10aa944d321721bcc432f0a838d3f9b869e2921a155a6cf1b6375016f3d6a2c30b2ed2e023fa96b5f478544b5bae5733ff482e92c9cdf78cd94179052febc7ec43927345380685a620335944b1943bdded3a5778e6033b5ab435091f19f1752f7bd76f2a6ed477a8843ac2d6bf325eb3098fb3f8c9d03e286669581ec9a0329d0f21dd687aef77f11898bda6421d71b2ff84d9aa700122821e75f4f14c126f0e5ff76587ec4e2faa38cd278c7fde1aa16e125347b244cb907b63bea0d6d62c0a5fe101b98c91c97bece085bc8f56b45cdf263a18d58a58e200ce20af8a65bfb7f30f396b67c040000",
    ],
    [
      "ETag",
      "NJPjsdwEbDT87t3KnFfRvQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-73-1640201729937"
  )
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
      "c6",
      "bf",
      "4b",
      "7d",
      "e948c61f4196f062082209a0c0305143c8b115186cebbcbb8984f0dded4d44a326fae6d676bf767d9edd1e3661128003f370f99ca1dc9d2d510f4d304295455af123a5442158805a2c991cbe9edb449b87a4ff283bad766b9b6defe76ea3c184f257180b70f6b008310a14384f7b48448cdce65394c5c92ccf2cd0bbd414c7dea83be8701e5360f2c1a4d7739bbd361cac536320b498e5fc3fdaa6070bd6341fe10225263e9a5d52496bf475d7c854224e232c28caa48f0a72387fb19494a5421215b852a8950bc56ac52ed9c55aa95e2fd7188cc8173aa484d9c998f7034d5a4423dab24aa83220f390052ff2f385cb61900b316177e0552bf97e5f01893ec960f62797f2ba2bc17fe1033b3af09d133165893e51d7bd5bf7b7716ce9e7a896ebb57f104ab35127c4ebf6db63cfeddf196e7a94dedc69547792d84785c6c2a25db9bca855ed7757afc838cddf71b4ccd0025ff0e5b80935380b11293cbc01cb4ff8387a020000",
    ],
    [
      "ETag",
      "Qx+0ookYnMZrGDEDwuwVbA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`stamp`) LIKE ? LIMIT 1",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-74-1640201729937",
    },
  })
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
      "5b",
      "4f",
      "db",
      "3014fe2b56f6021a6d9a5251daa9621dcdd66cbd40928200a1d64d4e83218983ed207588ffbe63a7852136f6bca7383edfcdc7c78fd61dcb63ab6b2d59725f82587fb8e54b6bcf024513dcbd742e1d3e5c7f5f0e7eda7973ec051ffd219cf67a88609a256956a45093bc1411c8ee2ca827829705159cd750a8d66ed59c8356a3d970dacd4e67bf8d3c09e96ac4f23b64df2855c8ae6d6fbdeb09e7490ab460b21ef1ec79df7e68da85e0b7102969bfb6b4d145daef9b1ea53ca28af1bc370b30402941cc21a32cc5082fcc78f9f9b5749dd1ac9e20f8814540a38897b9d2b15022e2f98a25a530aa56f7d132317f5b58813b728f43723c9d4dc29d05cd3479b14ba824f3b90059a68a7cf5a763b228d0eb864a900b723e747d97908580888b78cee205e99123d29f0c08194dcf5d7f67211546449d91f7c3c5d2c81b7b217130510c2b8aa203aa504be92471b5f4f43529906ade6868e0a68fdedbdbb39e749571c1943e8137095dbf7f1c7a676ed5b41124345a07f7d8b6154d25209a0a9a810231e63120e5641a78a1379df447c8309d38d922a4d5bd7a7c2184eb02744865bedaeba065fcb780339a9606f1502d2cc77a7adafbbb42e88ddd20ec8f4f10768d42380715c23a9db9fe85556df9b00201796498ef74c2804de19fe3bc9d2dc4e274a10d5e916252b1486a93488029872c33a7d8b03b1da77d6819b0506f6acdfd967e8279fcc7cac6a334fa200417be1928fd8b6ed2646139368ec5a7661c5fa5bcdf6c6520254db4fc84938caae886e509912cc9515b0059714156651e695a357e668b8aa4cc205744375e76c973e3eb24288b820b05f18b0a02aac90d42df9b7cdbfdb4f9fd7211ba013e0745ae9ceea173ad0f658e52cdc9ff7b8cebea72749ec174e2e234fe0209c5490062050000",
    ],
    [
      "ETag",
      "Z1Z1oHyJbDz/n2MIS+RHeQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "000002ffedd34b7282300000d0bb64ad4eca474c77526d05054d7194b0c920044b11c88404834eef5ea7d7a8ef0eef0ed22c635d47655bb106bc822135d0249b9ce03ceee16d1ff85cb60a51b448b4714dbb7303b75685de1033fb4d1e6433496d5d1f1a671c6cf71e9e9ab696fcdbc86181bb1a5537d7b444aa74d81c9a5ed4ca0fda3e63478ce1f4e2e8dcb792649587646360182f56856ef745b4daaa45a98ee388c82f6f5741275c0f8ab88db72bddeba65ceec8d87b57f5742da28e2f8fd82471e0baf17c7db3f969687d273a971d9a45f492c097f0e3c27b7afd8c679249abf00dee61410809264f4fff0e1801a679295847cbc776d3466804feea533970f6f8efb25430017e7e01da15591119040000",
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
      "Wed, 22 Dec 2021 19:36:39 GMT",
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
      jobId: "grouparoo-job-75-1640201729937",
    },
  })
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
      "9b3014fd2bc8fbda04c88b10295ab394b69102d980b49aa609d9c650b704536c52b555fefb2ea6e95a556a3f61fb9e73cfb90f9ed11d2f53344384e7f70dab1fbfdd0a824e10533887571a39173fc6b73e8b17fe951bae974f4f66fc309f0382b72c897755c17a5234356572b68dfa792d9a0ad742f42051cf19f7ecc9c81a58b63370dda1033cc98a6ccdcb3b60df2855c999691eb5fbb91079c170c5659f8addebbbb91f98552d6e1955d27c2f69828a343f17fd5e088a1517e57c1b818146b23a613bcc0bb0f09f9992d3f7a9fb1ceffa3980f79c324ca9684ad5da8214549419cf9b5a6745b367a46dbe39a0c85b7bcbd8a0a268766552e21d3b3152ac70a21e2b669c871bdf5805e79bd05fc4ab4d9044cb4bcf5ff4979bf5d60f22e3fad20b3d43615230cd35e6c6a9be057001fd9449c54bad1eb7cfadf24b83561fc7d212405ab22e9838d604db53cb25197168361d8e49663142a6c419e321b1a83b62a394300c3c2daa59b814a5c3d22121131b324c713222e92099ba0e49ece960322196334ae9081d4ed043cd153be3b21292771d42d7e12af69238dc06cb45ece91232dc14eaac33d616f0d6a3820213cbb201f8495d8736ca05a8b52d5f05b1172e96f1eacaeba6bc6639a68fd13dcc39c3856480c6353450b1da1729340d050bdf3b03b09edacf6350a2d99f67d4f6bd75f2a6edaff41886d85a56fa8ba2385c0517dace1171858b4643f6dd015560f906ea03d787bf808445edb2a05f5b2ffc8dbaa79065ac6625fd7aa200d6812fffb7e3f20316d61f64a4823bec0f95ad08ad59b7475c977b64bbeed81d200daed5879863bbc7aeb539da8c6cc74af55251b7fc506827d6c8571004610502ddadc33f4f4a6b347c040000",
    ],
    [
      "ETag",
      "cS7GB5jMeTAMV9RLCzz/Tw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-75-1640201729937"
  )
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
      "8d92dd4ec2401085df65bc2d1190df265e14452422682917c610b26c87526d3b7577ab41c2bb3b5b118d9ae8cd7666facd74cee96ee131ce42706119474f05aacd5184e6d6063eea22319a1f39651ac10134226232ec651dffeef5aa3711461f4baaf507548f4e4f99d0728da900770bab189350837bbf854ca4c86d929222cd1665e680d9e4b6380dfce178c0794aa1cdc7b3d1c8eb8dfab0730e8da1306251f2ff689bef1c78a0a58f2b549849b4bbe48a1e509aa195a9459a2758d15428891a4ab87c11292a72a1882a5ca9b49b955aab51ad576bed7ab77bd2663021294c4c19b3b329ef07868c487c7a6195d0624095210b5e95e73397e3b01462c3e1386835cafdbe020a25a970f12797f3ba6bc17fe103db3bf09d13291599395017a389f7db38b6f473d4b917f47f10dab0510724185ef7a781777d63b9f95e7a6f6350df28621f355a0b6bd546a7d96e55df5d3d23eb347fc735aa4007a4e0cb71191b705722d1b87b031680c9957a020000",
    ],
    [
      "ETag",
      "dBn8RYzKBOats/co1EGo2g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`amount`) LIKE ? LIMIT 1",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-76-1640201729937",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffc5535b4fdb3014fe2b9627c426f54e69a152c53a1ab688b465690a42136adce434189238d80e1342fcf71d3b948bd8e0714fb17dbecbf1e7937b7acdf3980ee88a273725c8bb4f5762456b14344bf0f4fb7e3f3a5d5f9fef8ef6fafe65ff78e2fbe3ceefe11011dcb014cb8a14ea4a9432023558cc1b891465c1a4107514aaf77bf576afdbeab4dafdcefefe4e1f790ad2b5c7f36b645f6a5da841b3b9f16e24422429b082ab4624b2a7f3e66da7594871059156cdd7964d7451cdf74d0f521131cd453e5cccb18152815c42c6788a2d3c33e3d5d7d7d20dceb24682e05b1e018b2251e6dab4851291c8d73c29a555a5837b6adb7cb1a073c7730e0372385b4c83cf21cb0c39fc429822cba50455a69a1cf9b309090bf4ba640a5448ce7e38be4348282112325ef2382443724046d33121deecccf15f0879eeb18335cf9db80169634b31ac19aa8e9946316d5a89aba56bde4983d2cb56cb001f8374df3e1f7d30552e24d7e60aee3470fcd161e09e3a556a1e242cba9bdf606e6b962a4034932c030d72226240cac96cee06ee6c3af29061a338d920141dfcba7f260477059826b5fd1aaf5ed7fa6f00a72c2d2de2b65ad0367d78a8fd5be1c89b8d3ed4d86a3776bb5b287481301c954a83fe5c38fe39ad8e7c5883843cb2bc77b2b2605bf870e237e387581c40b4511af74af348199348822d073cb3f7acd87badd64edfbc1782a57e5bdbeb99bf348fff5a79f428ad3e4829a46f67ce6cd14dd95e788eb1e05f5ca31928c51223b3c8f1260ad82a0562df8f3c8549c290f09c98b849189c9f38cbc7c8c31af9c662128bd2b06cd4035225bdd96d57db6dd3986da79a86ffdbca451592f11acfa60e4ec51f0bc19f000d050000",
    ],
    [
      "ETag",
      "G97cVfkY5A87Rh7KMRRD2w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "0000d0bb642d0e95a0d21dc8a760070415904d0668f888fc924c009ddebd4e8ff0de0ba4798e2945ac6f70073ec1926e9475bece4435e6e2f3e255edd609da641fd9becbb2927b32f761513b874659b4cc36af5de2669733134a9549e7721b6c62eeb913e7477e0f46639a87c7348745b2c82e8c8e4bc11ea1e37722df85d7461bd4e8641fe28a23771c7ae448d2ae513d974c21552c18cad1de50aaef4cb7e70822d431628de20d8bf9b3221f9cc21b34dba393d3b91a7b2d34d2586f04eb64b575ba70d5b405fbf970eea53e69a8d787f6cb0b883cf57b48c90fe9c10ae079a809a6a87ebb25595156e03f01b165c0ef090da70413f0fb07041bbcb923010000",
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
      "Wed, 22 Dec 2021 19:36:40 GMT",
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
      jobId: "grouparoo-job-77-1640201729937",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536b6f9b3014fd2bc8fbda04c8a32491a2354ae81a29212b9056d33421632ed42d60864da7acca7fdfc5345dab4aed276cdf73ee39f7c11379e065426624e6d9ef06eac3977b119333028a66f8fa1726879bb2289db2ceebabeb15988977b998cf11c15b96a44595434f8aa6662067fba09fd5a2a9682d440f13f51ca7679f8fac81653b83e974e8204f429e6e78f980ec3ba52a3933cd93763f1322cb81565cf699285edecdc78159d5e21e9892e65b491355a4f9b1e8d75c30aab828e7fb000d3412ea080aca73b4f09f99c4176f53f7392dfa19821f3903ca98684ad5dac2144c9429cf9a5a6725b327a26dbe3a90c0ddb8cbd060226f8a322a6901674642158dd4a102e3d2df6d8db577b9f3b78b70bdf3a26079e56e17fde56eb3df7a81717be5faaea1689c83e61a73e342df3cbca07e0252f152ab87ed73abfcdca0f5fbb1b4049496d00523c73aa7f6c49ac669ecb074321cc7a905713c899d311dc6169b8e6094c44091a745358b96a21cd2f118c98328a143271a5974144d683a8aecf3a9c50690daa30125c733f2a7e60a565c5642f2ae43e4d65f876e14fa7b6fb9085d5d424a9b5cad3a636d01af3d2a2c30b22c1b811fd4756ca35ca05adbf2b517bafe6219ae6fdc6eca1bc8283b04bf71ce29cd25209ad6d84005f55624d834e22db6ee0ac17a6adf4f4149663f9f48dbf7d6c9abb6bfd0431c626b59e92f09427fed7dd3764e881b9a371af2d81d488596efb03e747dfc85485cd42e0bb9debbfe0fd23df990420d25fb7ca208d6814fffb7d3f22316d71f65a4c23bee0f93ad08aba1db23aecb7d664f2ccbb1f5dfaa68addec52663fbd4b536479b110a28d57345ddf263a19d58235f4018c415f074b78eff002166bcbc7c040000",
    ],
    [
      "ETag",
      "ze8yVnmn7nrlrHQDe/dNFA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-77-1640201729937"
  )
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
      "000002ff8d926d4fc23010c7bf4b7d3b9281b8c9125e0c452002f2304c8c21a46c37186ebdd1761a247c77af13d1a889be69efaebfbbdefddb3d7b4a44c43cb64c56db02e4ee6c057a6c8c09a822d58ab61c85026631d07c45a473cfc568dbde8c6ffd87d7b89b6d469da518379b44a8700d1967de9ec509a49162dee39e099e01a58598169958949ec5f42e37c16930e90d3be46718197f38ebf7fd56bfcd0ed62931e29a2f4afe1f69f383c536b89c400c124408a6975ce20642dd33632a9ee5295414163204c54ab83c58492c722e112b14a9b86ea5ead4ed9a5d756b8dc6b94b608a21d7090a626753ea8f69d43c9de08b329a10204b93068ecbf599c249540e62ccde3070ea657f5f010921ca68f1279753bb6b4eaff0811d15f8cef10c0ba14fd44dffceffad1c49fa59eada0fda3f08a549a81312f406ed69e00f46869b1f476fed34a89144d2518191b06ad72f2f5cc77e57f50a8dd2748fa76501160b397d8e6ea29917f354c1e10d4c8bcf9f7a020000",
    ],
    [
      "ETag",
      "6VanPqEjQKAYzfHmjPGbnQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`id`) NOT LIKE ? LIMIT 1",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-78-1640201729937",
    },
  })
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
      "53",
      "5d",
      "4f",
      "db3014fd2b962704887ea58302952ac6daa0656b1b96a63034a1c64d6e8321898bed307588ffbe6b87c210137bd8c39e62fb9e73cff1f1cd3dbde14542bb74ced3db12e4eaddb598d31a05cd523c3d9bf49debf39d6f3badc1e7fca47f91f3d5e8e78f5e0f11dcb014cb9719d49528650caa3b9d345229ca259342d4b1517dffa0ee74765bed96b3df3e3c7cbf8f3c05d962c88b1b645f69bd54dd6673addd48854833604bae1ab1c89fce9b77ede6528a6b88b56abe946ca28a6abe2d7a948998692e8ade7482064a05720639e3195a786626f30f2f5b3738cb1b2982ef780c2c8e455968630b5bc4a258f0b494b62bedde536bf3b7059db843b71f92be3f1d875b11cb0d39da264c91d94c822a334d4e027f44a2256a5d31052a22e79fdcc0252492100b99cc7812911e3922c7e3012143ffdc0db6223cdb26633f2443ef8b8bb5a137f242e2a0a504160cbb0e98c666da5849aaa567de4983d2b356cb001f83f45e3f1f7d30552e24d7e60ade387483e37ee89db9556a434859bc9adc626e0b96294034932c070d72241240caa93ff142cf1f1f0f9161a3385d2314ed7ebf7f2684ab251893da7e8d5667d7eaaf01672c2b2de2ae5a50873e3cd4fea9c386b3b7814d2e11846352f1e9d7a91b5cd0ea288005482862cb7a23270bb685bf4efb7af4108bc387324ae35e691e2b23124bb0e590e7f68e15fba0e5ec1dec510b96fa55ade3b4cd1f5a247fac3c6a94b63f48296460e7cd6c514d592fbcc050f00faed11c9462a969332df0260ad83c0362df8e3c4549a288f08298a849145e9cba331b7754231f598215ddd92536e52e3121afd79b66b3691c591fd508fc270f97552c4664e08f5d9c835f243fa8defb040000",
    ],
    [
      "ETag",
      "VSC1jW+X+0DJmFCYmiyMzw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "4b7282300000d0bb64ad0e4de4d71d0868c980823a089b4cc09002ca5f149cdebd4eaf51df1dde13d024615d47faaa6025f8042385ea2259c482761a84e9e0e639970e500e10c49b62b3f2acc0f163a5b428b2e7a25d9df659839d24d73c9d20215b8658ab7d1eb727190af5a47f3b472c8bc7799ca65f4139205e7a2926d978be0518751752d5435949ebf07e36a39b1579430d83abb9dcd14992f7d0227865ec52b99c73737461abb0b5412fd783ed177eb6dd9a5d0359faa0aa183586ef71eedfdd3d2be2509144ecf4b0bb691b587165b45b57f990510f2bec5e9dbc701a235cbcbdfd3b6006d8a3ce5ad691ecb51d89aa3a037ff5493fd6ecf55f67b4652df8f9054ca1942a19040000",
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
      "Wed, 22 Dec 2021 19:36:41 GMT",
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
      jobId: "grouparoo-job-79-1640201729937",
    },
  })
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
      "a2",
      "40",
      "14",
      "fd",
      "2b",
      "64",
      "f6e35601511113b3354a5b12c52e62bb8f6cc8305ee8b4c8203374631afffb5ea076dbdda4fdc4ccdc73ee39f7c11379e0f9968c49ccd37d05e5e1d3bd88c9190145537cb518df1ffa0f9f2ff976ee5dfdf8664fd9fe7a3a992082d72c497745061d29aa92811c6fd6ddb41455414b213a98a8633b1d73d8377a8669f71cc7b29127214b163c7f40f69d52851cebfa49bb9b0a9166400b2ebb4cec5edef5c79e5e94e21e9892fa5b491d55a4febee8974c30aab8c8279b351aa8249411ec28cfd0c25fe6363e7f9bbacbe9ae9b22f89133a08c892a57b52d4cc1449ef0b42a9bac64fc441a9baf0e64ed2edc59a8319155bb3ccae90eceb42d5534528702b48b60b5d43cff62152ca7a1b7f2a3f5ecca5d4ebbb3d562b3f4d7daed951bb89aa271060d579b68e7cdcdc70bea6f412a9e37ea61fd5c2b3f37c8fb7f2c3501a525b4c1c83686d41c194e9cc4364b46d6204e0c88e3516c0fa8151bcce9437f1b03455e23dab0682e723a80646839fdc8b08756d4b7e238722c48227b64d906357b0318f6c8f18cfc2eb98239978590bced10b90dbcd08dc260e3cfa6a1db9490d02a53f3d6585dc06b8f0a0b8c0cc344e03b751deb2817a856b7dcf3433798ce42efc66da7bc8094b2c37a8f734e682601d1b4c4062a2897628b4d23fe74e9ce11dc4cedfa149464fcf389d47daf9dbc6afb0b3dc421d69655f325eb30f0fccbc6ce097143b3aa813cb60752a0e53bac0f5d1f7f211217b5cd42be6edce03b699f0248a0849c7d3c510437810fffb7d3f22316d71f65a4c23bee0f93b5082ba1dd23de94fbcc1e19a663d7dd4770a9fe8df54cd33c75adce5167841de4ea",
      "b9a276f9b1d056ac922f200ce20af84db78e7f006bbf124a7c040000",
    ],
    [
      "ETag",
      "3ciqy4k+GidDIHZX7AcqPA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-79-1640201729937"
  )
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
      "c2500c86ff4bbd1d1114992cf162282809a06e239a18430e5b19d36d1de7434308ffdd9e8968d4446fcedaee69d7f7ddd9c0735626e0c13c4b5706e5fa20457d6b830095c9b5e24745a5427000b548997457612f6cddfb776930e8bac6ccfbf3c353ffec8c09152fb110e06d6091619e28f01e36508a02b92da6dc14e5acce1cd0ebca16c328184e2e392f28b1f9643a1af9bd511fb6cebe31115acc6afe1f6d8f5b079e681ee002259631da5d2a494f18eba195a94451e5d85064648c0a6ab87e914a329590440dae34dc6ea3d569378f9a2df7a8db3d7619cc29163aa392d969c8fb81262df2805e592574189075c88217f5f9c2e52ca985d87038893aed7abfaf80c4986432fb93ab78dda5e0bff081ed1cf8ce89824ca9f7d46074edff368e2dfd1c75e147fd1f84d26cd41e8986e37e18f9e31bcb3deea4f7d61ad58d24f651a1b5b0d56c9f9eb89de6bbabe7649de6ef785a1a7420167c39ae320dde42e40ab76f218bc4ea7a020000",
    ],
    [
      "ETag",
      "7qSBS1XAWgRF97uubEb/8A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`purchase`) NOT LIKE ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-80-1640201729937",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536d6fda3010fe2b91a74a9d5420014a00a9ea104db77410ba10da4dd304b67350b7499cda4ea7aae2bfef9294be6c5afb89e07bdeee7c7e2037228bc99030b1b92d40dd7fb8968c1c10307483a763f7d44b7afae67be89e4dfd59fbac3780d1e8e80811a264699ae60934b42c14073d5ccc9b1b258b9c2a291b28d4e8db0da7d7b5dbb6e3b607838e8b3c0dc97a22b21b645f1993eb61abb5f36e6ea4dc244073a19b5ca64fe7adbb762b57f21ab8d1add7962d74d1adb74d8f13c9a911323b5acc3140a1412d21a522c108cfcc987d7a2ddd14346d6e107c273850ce65919932164a7099adc5a650952a193e902ae68b0f32f726de38b2c6b34510edaf685a92571f2daaade552812e12639d86b3a9b5cad1eb8a6ad02bebf28b177a96b552c0a58a97225e5947d6b1350a4e2c6b32bbf4c2fd27344a05b3c89af85f3d444cfca91f590e068b411b9155b122ca1228233d4ecefff7be4a023528571797aedda34edf1eb03573f9badf39646b1b18eb33f7907698cd075de8c60c28f24ca95eb1682633b0bb0e4ebac7591cbb0e0327e66e8fb22e657127668cba711b0e690c647b407e2b61e044e85c6a518f8f5c867ee42da370118c479157b5b1a638a2933a5cd9c4cb9c069b5cda76d9ef1bbd6dcbaa90e856de871f445e381a47fe8557afc0043694dfcf6f7109d634d18068aa680a06d45462d221399fcdfdc89f05a30932aa7b3ddf213419fe7c782644f779356953fd965ebd6ee5bf035cd0a4a81077f50771c8767bf07f857914fac1e7b725f6a4a2d91eeafc4218ae7d2d41be2dbcf007a98f425883828cbfbf0608ae0aefbededd53422c3e26b4d106ffe3d2715d9a7005f5f289b46ab366f7ed767f505e178295f9bbd6b1edee6ec2a546a9082964e6b1a3fa299503ab4a857e0261117726a846b5fd03a35fcb00ca040000",
    ],
    [
      "ETag",
      "C7FEl6skXR7JMIO2J69eAA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-80-1640201729937"
  )
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
      "ff2d90614f83301086ffcbf975240c99db48f64194e892654edc8c8959960e0e0481636d9130c27ff78a7e692fef3dbd7bd21ebeb32a060fce597a6950763729ea575384a89a422bbe6aaa14c204508b94c9f76bf8f218b4d9d58e9ddd4755fbf9a55bb4ab15132afac25280d7439261112bf03e7ba84489fcec7492e344c674579b64bddd074f41c84149b109b687cde6dedf04301c8709e4740e314189558466642d29c748af8dad12655da0a5a891112a18e1b1914a6a6a21892c4eac856d4def5cdbb1a77367b9bc9d33585024744615b38737e0359ab428426a5916a60cc8b164ef643c7f38768dd0f11ff53b8d6a2789f72a342b6733f74fe0818c9466592d1b9c4024f83b9e330d5e220a85c32f933a60bf6c010000",
    ],
    [
      "ETag",
      "VzRODEwiz0d2PXnpBjqy8w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "000000000002ffedd34b7282300000d0bb642d8e9608a53b012b1654128352360c8404c18a7c23d0e9ddebf41af5dde17d838852d634617bbbb002bc81217ad1a6741acf96be988d64b7b1bcfea8a7beeadb300faa363a1a9e36f7c676d82449acdc4deee59f88dce0d5e4730875979f0bc74db8882e29ea607018e8c996906b496152b8e3798c636a57c69c6e55559c31effc0c49a4927b4f725a23842a2e45b0da1b047fe42eae84552c61beb82bc46c0e2f6b2323f06a7b5f555f7292dbdb6086755abdef56af35372d352db70211758515b40f9c412eb172ea1259ca50ee8fb1ce1d4152d474325b5fa64f4fff0e9800d69759cd9a307b6c97179a36017ff5c37628d9e3bfcea29ad5e0e7172233d83319040000",
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
      "Wed, 22 Dec 2021 19:36:43 GMT",
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
      jobId: "grouparoo-job-81-1640201729937",
    },
  })
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
      "02ff85536b4fdb3014fd2b91f795b669d3572a55a32a012ab529a429689ba6c8766e82218d43ec7462a8ff7d370e652024f814dbf79c7bce7de4993c883c2613c244fa5841f9f4ed5e32724240d3145f67f77ff7f9cf90e92bcf5717d7abc7c4b99da7d3292244cd52745764d052b22a39a8c976d34e4b5915b494b285895ae36eab3becdb3dbb3beab9ae33429e822c598afc01d9775a176ad2e91cb5dba9946906b410aacde5eef5bdb3ef758a52de03d7aaf35eb2832aaaf3b9e8f74c72aa85cca7db0d1aa8149411eca8c8d0c27f66cc4edfa76e0bba6ba708de0b0e947359e5bab68529b8cc139156a5c94a26cfc4d87c73201b6fe9cd438bcbacdae5514e777062c554d3483f15609d07eb95b5f0cfd7c16a162ed67eb4995f7aab597bbe5e6e57fec6babdf402cfd2946560b8d6d43a35371f2fa81f83d22237ea61fd5c2bbf3468f1712c3501a51534c168640f69776cbb2c61239e8c9d014b6c606ccc4603ea309bbb7de8c70c28f28ca861d15ce68c83db1ff6ddc8e6e361d47712276203ee466eecc6bdd8ed2636a7e47042fe9442c399508554a2e910b90d16a11785c1d69fcf42cf9490d02ad3678db1ba80b71e351618d97617819fd475a8a342a25addf2851f7ac16c1e2e6ebc66ca4b48297fda3ce29c139a2940342db1811aca958cb169c49fadbc33049ba95d1d838a4c7e3d93baefb593376d7fa58738c4dab2365fb20983857f61ec1c113734ab0c64df1c488196efb03e747df88d485cd4260bb9de7ac10fd23c0590400939ff7aa20836812fffb7e3f22316d71f6594c63bee0f57b5082fa1d92361ca7d618f6d67e0f6890197fa436cd41d1ebb56e7a833c20e72fd5251b3fc58682356a957100671057cd3adc33f8f8961e87c040000",
    ],
    [
      "ETag",
      "AjzvnZTbtPENsGQMqf3WCg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-81-1640201729937"
  )
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
      "00000002ff8d926f4f83400cc6bf4b7d0b719bb84d92bd983ae722fb23c3a83166b941872850767768c8b2ef6e0f751a35d137475b7e2d7d1e6e034f491e810bcb245e9728abbd18f5a5097c5465aa153f0aca158205a845cca4bf3ff4075576e3ac13a735bfbef0a6b709c6bd1e132a7cc04c80bb81558269a4c0bddb402e32e4b690d232cb17756681ae0a539c07fe6832e43ca3c8e4932bcfeb1f7b03d85abbc64868b1a8f97fb4dd6f2d78a4a58f2b949887687629243d62a84746a6125991a2ada894212aa8e1fa452ca92c8424b2b962779b76b3ed345a8d66a7757474d06130a550e8847266afe6bc1f68d222f5e98555429b0159872c78559fcf5c4ea25a88094793a0edd4fb7d05248624a3c59f5cc1eb3e08fe0b1fd8bb03df39915199eb1d75e64dfbbf8d634b3f479df683c10f4269366a8704a3f1601ef4c733c3ddbf4b3fae34aa9924f651a1b1b0d970ba879d76e3cdd513324ef3775c2d4bb420147c39ce130dee4aa40ab7af4b161d0d7a020000",
    ],
    [
      "ETag",
      "R/GREymX4qi42SWKLOYieg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`purchase`) NOT LIKE ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-82-1640201729937",
    },
  })
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
      "000002ff85537b4fdb3010ff2a91272426d1367d3fa48a552563d1da14d21484a6a9b59d4b30a471b01d3684fadd7749280fa1c15f4d7dbfd79dcf8fe456a421191126e2bb1cd4c3971bc9c8110143633cbdba389d2efea6576e34775ae9b9e70f337a138fc78810054bd36d96404dcb5c71d0a3d5b21e2b996754495943a1daa0556bf63a76cb6ef65bc361bb8f3c0d493413e92db2af8dc9f4a8d1d87bd76329e3046826749dcbedf379e3bed5c894bc016e74e3ad65035d74e363d3e344726a844cc7ab2506c835a8356ca94830c20b3364dfde4ad705ddd66304df0b0e947399a7a68885125ca691887355aa92d1232963befa204b67e64c036bba5879c1e1866e0bf2e6ab45b5b55e2bd07962aceffe626e6d32f4baa61af4c6bafce1f88e656d1470a9c2b50837d6d83ab626de8965cd16978e7ff88c46296f115833f7a78388993b7703ab89c142d046a465ac80b2048a484f9373dfdf5741a006e5aae2ba6ff76873600f59c4fa3c1ab4bb2cb281b101eb77699bd97cd8814ec88022cf14ea258ba63205bbd3c449f7380bc37e934133e4fd1e651dcac276c818ed872de8d210c8ee88fc51c2c089d099d4a21a1fb9f4ddc05907feca9b4e02a76c23a238a2932a5cd1c4eb9c069b5cdb76d1ef07bded8aaa90e856dc87eb058e3f9906ee8553adc00c62ca1f9677b804114d34209a2aba05036a2e31e9889c2d966ee02ebcc90c19e5bd9eed119a8c7e3dbe108287ac9cb4297f0baf5ea7f4df032e68929788fbea8334c96e77f47f8565e0bbdee9c7120752d1f400757e230cd7be9220e72bc7bf22d5910f112848f9e76b80e0b2f0e9ebdd3f25c4e263421b6df03f2e1dd7850957502d9fd8966d56ec81dde9745ba4042bf3aed6ed76f7132e340a45d8426a9e3aaa9e5231b0b294eb6710167167bc7254bb7f2e00fd33ca040000",
    ],
    [
      "ETag",
      "YVGCOxnYIfME2nQNR9pajg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-82-1640201729937"
  )
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
      "41",
      "6f",
      "82",
      "401085ffcbf45848104dad241eb425d686588bb58736c6ac38200a0cee0e6d88f1bf77167bd9997dfbedbc97b9c029aff610c02ecfce0deaf62e437eb74d8ca629d848a9a932080e20ab4cc8fef973d6a4e1fd5bfff4b51c46cf9357f60ed9782c84490e582a082e90e658ec0d04df17a85489f26dbbd5dd44c1b8adad325f7c84b33016a1a4bd1516eb289a4ca310ae9bab0347dac598a2c62a413bb2d674c484e736ad51655da06ba8d1091ae8e0ee21d3d4d44a13b9a2b88fbedb7b1878bed71bfaa3517f28604189e29c2a61d72b101b2656454cbf12167a02e8ae95dc6977fe883cb08136ffe8b465344b4de26bd05a7a37fb27b29158a2b26ed08144c9325e72beddaf7f139ce0db69010000",
    ],
    [
      "ETag",
      "3qVGufE+O3kZP7LDAJt0hg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "02ff1dd04b7282300000d0bb64ad0e1f69b13b8214ad10e5a7b41b26848810351010834eef5ea74778ef093021b4ebb29e337a051f60c4da624666b962a583f28851beec996fe7985f6b381e5bc73374ebb63941ad08b7ee3918e7e5f0696a05c423324b2f90491ab36025e3248c6be2f07bd12a643b3d1ff0ae7a70a5591f19b6fd293fd6dc34a797426e10aeb48e570cf777e4bc61ee51b754766ab2bcd90796592d1265a6f622728c902810b55458d1b0d6df9b7ae9aa1045c6cf66b0749b9044acfc56ed43d9948184d7affde8cc85b63fa5a98c2edf944aff905d3c16aa5ca7908009a0b2a904edb2eae5d68dc56202fe13b27e6ce86b02522ca800bf7f58b0f7ce23010000",
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
      "Wed, 22 Dec 2021 19:36:44 GMT",
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
      jobId: "grouparoo-job-83-1640201729937",
    },
  })
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
      "535d6fda3014fd2b91f75a20402080845646d315a9842d8476d53445b6b949dd86388d1da6aae2bfefda295dab4aed536cdf73ee39f7234fe45e145b32214c640f35548f5fee2423270434cdf0f5867e837daec4f8fe225dfef2cb60a446f36c3a4584302c4577650e2d25eb8a839a6cd6edac9275492b295b98a835eab7ba43cfedb95dbf371ef77de429c8d34b51dc23fb56eb524d3a9da3763b9332cb819642b5b9dcbdbc77f6bd4e59c93be05a75de4a765045753e16fd9a4b4eb590c574b34603b5822a811d15395af8cfdcb2d3b7a9db82eeda1982f78203e55cd68536b6300597452ab2bab259c9e489589baf0e641d5c06f3d8e132af774552d01d9c385baa69a21f4b70cea3d5d25984e7ab68398b17ab3059cf2f82e5ac3d5f5d6e96e1dab9be08a2c0d194e560b9ced439b5b7102fa8bf05a54561d563f36c949f1bb4783f16434069054d30f1dd21ed8edc314b99cfd3517fc05217181b317f40fbcce5630fbc2d038a3c2b6a59b49045970e7a3e676932f4fb9078037f98308f0d3121f7d8361d785e9f91c309f95b090d6742955289a643e43a5ac44112479b703e8b035b424aeb5c9f35c64c01af3d6a2c3071dd2e023fa8eb60a242a29a69f9228c8368368f17574133e54bc8287f5c3fe09c539a2b4034adb0811aaaa5dc62d348385b066708b653fb710c2a32f9fd444cdf8d93576d7fa1c738446359db2f59c7d122fc6eed1c115734af2d64df1c4889966fb13e747df883485cd4260bf9b909a21bd23c4590420505ff7ca208b6814fffb7e3f22316d71f6594c63bee0f57468457d0ec91b0e53eb347eec01d9aee23b8d2ef625d7f78ec9ac96132c20e0afd5c51b3fc58682356ab171006710542dbadc33fb03b44a37c040000",
    ],
    [
      "ETag",
      "YaBevlsi9kHfMX7pE8s8Cg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-83-1640201729937"
  )
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
      "000002ff8d92dd4ec2401085df65bcb424fc59a0091745104900a5942b43c8d20ea5d876eaee564208efee6c45346aa237db99e937d339a77b84e7380bc181751cbd14280f5711ea99093c5445a2153f72ca148205a845c4240eaf6588c28f669adabadff13cbb27f6dd2e132ad8622ac039c226c62454e03c1d211329725b40499166ab32b3401f72539cfbde683ae43ca5d0e4d3c578ecf6c603385997c65068b12af97fb42d4f16ec68ede1062566019a5d72493b0cf4c8c85422cd13ac282a64800a4ab87c11492a7221892a5ca9b41b959addacd6abb556bdd369b4184c28103aa68cd9c59cf7034d5a241eed5925d80cc83264c19bf27ce5721c96424c389afa76b3dcef2b20312019aefee4725e772bf82f7c606707be7322a522d317ea6efce0fe368e2dfd1cd577fdc10f426936ea82f8a3c960eebb9347c32dcfd27b078dea5112fba8d05858ab36db372dbbfaeeea2d19a7f93b8e96055a1008be1cf7b10667231285a7375e54feaa7a020000",
    ],
    [
      "ETag",
      "eG+rdeaTgQto8tD9RR6Baw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`date`) NOT LIKE ? LIMIT 1",
        types: ["INT64", "DATE"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "DATE" }, parameterValue: {} },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-84-1640201729937",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ffd553ef4fdb3010fd57acec0b48f4e72a5a3a55aca301b28514921486106a8d730d86240eb6d30921fef79d9d760cb1b1cffb14fbeede7b77e79727e79e178933746e78fa50817cfc70276e9c1d07344d31fafda83aeb1ef78aaf6ce2e6bddeee4a0e0e831fa31156708352342f3368285149066a388b9aa9145549a5100d246a0c7a8dce6eafdd6d77faddbdbd8f7dc429c8963e2fee117dab75a986add646bb990a9166404bae9a4ce4bfe2ad55b7554a71074cabd66bc916aaa8d6fba2fb99605473518c66113650299073c829cfb085176472f3f9357593d3bc9962f18a33a08c89aad0a62da460a258f2b49296d5193e39b6cddf0e4ee4faee414c0ea6b320de5ad0dc8017db842a329f4b5055a6c961383d218b12b56ea902b52017c76ee812b290c0844ce63c599011d927e36042883fbd70c3ad454235204d308d89ef7d7331eb7b275e4c3ad854024b8abc13aa914e9b6692fae89997d2a0f4bcdd3685eb557a6f1fd07936592e24d766082f88dd707c107be76ebd371f52ca1ea307dcdc92660ab09a4a9a830679221240c8e934f2626f1a8c7d44d8659c6e2a9433bc7a7a01c48f259826b5fd1aaddd9ed5df149cd3acb215abfae0749ce7e79dbf334cc6b18b15d7c8812ea893ced9cc0d2f9d3a14c2122414cc82de59822db6897f9a79e32cac456fa18cd278579a33654498049b8e796e07a8d18376bfdbb6bf82a652bfcd0dcc234191fc31b3d6a82c3f48296468ed64aea8a66c2fbcc09df1e4cc9af155970feb500e4ad1d4d00782e454b35b5ea444f1b4406e0964292459560533b0da7c3644655ae550686276ae86c4ecbc49a2aa2c85d490bc1060aeb66c14875e70b4fd697dfd7219bb11fe079a5c758683ceb599c74e51bbe3bf9ce0ba7e12ebc169603cf813b09dcc5456050000",
    ],
    [
      "ETag",
      "XGuQ2H4nJcDEm446vr8FNw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "000000000002ffedd3497282401400d0bbf45a2c66243b09368a23b64460d305f8bb449419b44de5eeb1728df8eef0be519ca6d0b6b42b7328d007e2b16c8ed371224e83417c1eb62ca5c41826bcdf2d5de5b47f2a61cb6151255206bd7d557472760883c8bc4721b9b9f522775682d34ff0d0182cf1ccc10a85fca46b82df7ba413d5637daa8cc29b61f5e6b1d6d7345616cb899c89c976b79ea652075c343416627a94d75f8e2de48975f5cf3753edcbcd8a00481ceb851d666e40e6d4dd931d8d2ac967c1c63ebb73fcb818cf61abfba5d5d4ccf95ce7753a64a2aae2fb5426494d0abfbc1c38c3c16cfcf6f6efa01182479535d0d2ecb55dd14c7384feead38e57f0fa6f41dc40837e7e0188f8a2a819040000",
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
      "Wed, 22 Dec 2021 19:36:47 GMT",
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
      jobId: "grouparoo-job-85-1640201729937",
    },
  })
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
      "00000002ff8553db4ee33010fd95c8fb4a9bf49ab452b554252c95da14d21416ad5691ed4e82218d43ec802ad47fdf89435910123cc5f69c33e7cc252fe441e45b32264ca48f1594fb1ff7929113029aa6f8ba7c56fefe7626871beff12ab1ed7eeff743904e268810354bd15d91414bc9aae4a0c69b753b2d6555d052ca16266a79835667d877ba4ec7ed8e463d17790ab26421f20764df695da8b16d1fb5dba9946906b410aacde5eeeddd7eeada4529ef816b657f94b45145d95f8bfecc24a75ac87cb259a3814a4119c38e8a0c2dfc676ed9e9c7d46d4177ed14c14f8203e55c56b9ae6d610a2ef344a45569b292f10b3136df1dc8da5ff8b3c8e232ab76799cd31d9c585baa69acf70558e7e16a69cd83f355b89c46f35510af6717fe72da9ead169b65b0b66e2efcd0b734651918ae35b14ecd2dc00bea6f4169911bf5a87eae955f1b34ff3c969a80d20a9a60ec3a43daf19c114b98cb13af376089038c79cc1dd01e73f8a80ffd2d038a3c236a5834977927e927dd0165f190794edcef8dbc9802efc5c0dd91bbed7b9403238713f25c0a0d6742155289a643e4269c477e1c859b60368d7c534242ab4c9f35c6ea02de7bd45860ec381d047e51d7a18e0a896a75cbe741e487d35934bff69b292f20a57cbf7ec43927345380685a620335944bb9c5a69160baf4cf106ca676790c2a32fef342eabed74edeb5fd8d1ee1106bcbda7cc93a0ae7c12f63e788b8a65965204fcd811468f90eeb43d787bf88c4456db290ab8d1fde92e62984044ac8f9f71345b0097cfbbf1d971fb1b8fe28a334de717fb8aa457809cd1e0953ee2bdb73dce1a0470cb8d49f6238ee63d7ea1c7546d841ae5f2b6a961f0b6dc42af506c220ae4060ba75f807bb0198e17c040000",
    ],
    [
      "ETag",
      "MwsEyYCo6U8qQf//43XkNg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-85-1640201729937"
  )
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
      "4ec2401086df65bc2d09200769c245519426c8a19484c410b2b44329b69dbabbd520e1dd9dad88464df4663b33fd663affdf3dc0639c8560c33a8e9e0a94fb8b08f5d4041eaa22d18a1f39650ac102d42262b2e33b83e96b24eab3c55e4f33cf5d8c17f4d2ed32a1822da602ec036c624c4205f6c301329122b705941469b62a330bf43e37c599efb9a33bce530a4d3e9a0f874e6fd887a3756e0c8516ab92ff47dbf268c18ed61e6e506216a0d92597b4c340bb46a612699e60455121035450c2e58b4852910b4954e14ae5aa59a9b51ad57ab5d6ae773a976d06130a848e2963763ee3fd40931689472fac125a0cc83264c19bf27ce6721c96424ce88efc56a3dcef2b20312019aefee4725e772bf82f7c602707be7322a522d367ea7638767e1bc7967e8eba71fcfe0f426936ea8cf8ee7d7fe63bf713c32d4fd27b7b8d6a22897d54682cac551b57cd76abfaeeea3519a7f93bb696055a1008be1c835883bd1189c2e31b6f3d39b27a020000",
    ],
    [
      "ETag",
      "9TAHQzga2SXytQnRIXOXow==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`stamp`) NOT LIKE ? LIMIT 1",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-86-1640201729937",
    },
  })
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
      "5b",
      "4f",
      "db3014fe2b96f70212bdae94d2a9621dcd58b43481240521845ad77153431207db616288ffbe63a7852136f6bca7383edfcdc7c78ff89617091ee2254fef2a261f3edc8825dec34c931476852fd6623d99244b2fcb4fdc98eccb9fdd1fa31120b861299297196b285149cad47016355329aa9248211a20d418f41b9d7eafdd6d770eba87871f0f80a758b6f278710becb5d6a51ab65a5bef662a449a315272d5a4227fde6fdd775ba514378c6ad57a6dd90217d57adff4281394682e8ad12c8200956272ce72c23388f0c24c969f5f4b3739c99b2980ef396584525115dac402092a8a154f2b6955f1f011db98bf2d70e478ce718c8e83991fef2c486ec88b5d44149acf255355a6d1d73098a245095e6ba2985aa08b6f4ee820b4908c0a99cc79b240237484c6fe04212fb870c29d85d2101174fc20469efbdd81b2e74edd18752055c25604842744839e3669927ae99aabd24ce979bb6d809b5eba6f6f103f992a17926b730ad78f9d707c1cbbe74edd388fa5843e4477d0ba15c91403349124679ac9a94818504e83c88dddc01f7bc0b0dd38dd22141e5e3dbe10e287929990da7e8d57bf67fdb78073925516715f2f70073f3dedfd5d2176a74e148fa7a700bb062198851a81cf664e7889ebad90ad986405b5cc773a61c1b6f0cf91dece176061c2c006ae4973a53955c6844a66cb31cfed296af6a03de81df6b0054bfda6b6df1f986758247fac6c3c2aabcfa41432b443657ec14dd92cbc80c6f1e4cc8ee4ab94779bad9c29455223ef0b94134dd7bc4891e26901da92a19590685515d4d0ea11b45b44a655ce0a8d4ce3d5103d37be89a2aa2c85d42c795101403dbd511cbafec9eea7cdef97cbd889e0496874d5190e3ad7e650f628f59cfcbfc7b8ae2fc7e49904be03d3f80bc73b7a2c66050000",
    ],
    [
      "ETag",
      "oNohohDDdbLlmGITa5rz2w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "8b08000000000002ff1dd04b7282300000d0bb64ad4e44aca63b85c40fd20c48ab66938931520a08021182d3bbd7e911de7b0221a5aa6bde14a9ba8177608485467274868be303f691cf03d6172111dd3dc7fe26a0dd2c6b83b96e2f38c46c9abb2969b18efdf8c1cf31b9ec4cde505d898e3268f4353f31291cf6dd7b6e071dfc39b53e360b7bdd1d51dda2554a30cb3c2d20762243743cefcdf9909fcc5894e1f17ef565b07da3bbb1dd545fd96c1bfd4cf6aa5ccc899879cc6dfa21e2575baea2100edd7beb2c8d45b958679c1e6e7bee5769424f63b7b8158834933e2adac0aea1d05e8bac6d2263080640756552a99a272ff7648ad000fc27f0c694ea35b154a25215f8fd030131105723010000",
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
      "Wed, 22 Dec 2021 19:36:48 GMT",
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
      jobId: "grouparoo-job-87-1640201729937",
    },
  })
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
      "0002ff85536b6f9b3014fd2bc8fbda04f284448ad628a16bb6846c84b4daa6091973a16e09a6d8a4caaafcf75d4cd3b59bd47ec2f63de79e731f3c923b9ec7644c229ede57501e3edc8a889c115034c5d7fc96cdf9efc397d8afd8e0f3ccf9b12ecc7d3a992082d72c497745062d29aa92811c6f37edb41455414b215a98a8e5d8adceb06f75ad8edd1d8d7a36f22464c992e777c8be51aa9063d33c69b75321d20c68c1659b89ddf3bbb9ef9a45296e812969be963451459a6f8b7ecc04a38a8b7cb2dda0814a4219c28ef20c2dfc65c6d1f9ebd46d4e77ed14c17bce803226aa5cd5b630051379c2d3aad459c9f891689b2f0e64e32edd5960309155bb3ccce90ece8c982a1aaa4301c685bf5e190bef62edafa6c162ed859bd9a5bb9ab667ebe576e56d8ceb4bd7770d45a30c34d79818e7fae6e105f563908ae75a3da89f6be5a7062dfe1f4b4d4069094d30b4ad21ed38d6284a229b254e6f102516449113d903da8b2c36ea433f8e80224f8b6a16cd450ecce9f5ed612fb40186613fb1ed903a1d08b1cb36ebd2a103764c8e67e4a1e40ae65c1642f2a643e4da5f046e18f85b6f360d5c5d4242ab4ccd1b6375012f3d2a2c30b4ac0e02dfa8eb5847b940b5bae50b2f70fde92c585cb9cd9497905276d8dce39c139a4940342db1810aca9588b169c49baedc3982f5d4be9e82928c7f3e92baefb593176d7fa60738c4dab2d25fb209fc85f749db3921ae685669c8be3990022ddf607de8faf80b91b8a84d16f26debfadf49f3e4430225e4ecfd89225807defddf4ecb8f585c7f94910aefb83f4cd622ac84668fb82ef789ed58ce68d0271a5caa7f6323cbee9eba56e7a833c20e72f55451b3fc58682356c967100671053cddade31fa67551a77c040000",
    ],
    [
      "ETag",
      "njcDizyKdRuc5JC8ZOp/vg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-87-1640201729937"
  )
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
      "000002ff8d926d4fc23010c7bfcbf9d29100220f4b78018a4ac2e318c6871052b60306db6eb69d4008dfddeb44346aa26fdabbf677edfdffed1ed641ec830db360f192a2dc9d2d500f4de0a04a43ad784a28560816a0160b2603a1b7db841ec6f77d4c1ed74fe7adcd3a18d6eb4c286f8991007b0ff300435f81fdbc875844c8651e8569144fb3cc02bd4bcce2c875dabd5bce23f24dde1b773a8d66a70507eb54e80b2da619ff8fb2c9c18215cd1c9ca3c4d843d34b2269859e6e1b994a4449883945a9f4504106671b0b49692224518e5772d54aae502ee58bf942a558ab5d54180cc9133aa098d9f188fb034d5a840e6d582594199059c882e7d9f86aacf23321266cf7dc7229ebef2b20d123e94fffe4126e7729f8153eb0a303df3911511aeb1375d3e9377e3b8e2dfd3ceabae1b67e104ab35127c46d775b23b7d11d186e7294dedc69540349eca3426361215faa5e56caf97757afc838cdf7d85aa6688127f873dc051aecb908151ede00fc5da5287a020000",
    ],
    [
      "ETag",
      "iatxxpoXUVOepYkZ+EwkiQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`amount`) NOT LIKE ? LIMIT 1",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-88-1640201729937",
    },
  })
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
      "0002ffc5536d4fdb3010fe2b9627c426b54ddb75502a55ac2b01c242c3da148626d4b8c9351892b8d84e2784f8ef3b3b9417b1c1c77d8aedbbe7c58f2f77f49a1709edd1394f6f4a90b71faec49cd6286896e2e9e1d05924e9c1aafce92c96eae068f0b9288e7ef7fbd8c10d4ab17c99415d8952c6a07ad3492395a25c3229441d89eadd6ebdb5d569b69badedf6cecee76dc429c8163e2fae117da9f552f51c67addd48854833604bae1ab1c81fcf9d55db594a7105b156ce4b49075594f3b6e86e2662a6b928fad3091a2815c819e48c6768e10999ccbfbea46e709637526c5ef118581c8bb2d0c61652c4a258f0b4949695f6eea8b5f96c4127aeef0e43320ca6a3f063c472038e3e11a6c86c2641959926fbe3e098444bd4ba640a5444ce0eddb14b482421163299f124227db24b06a33d42fce0cc1d3f231a0521f1bdef2ed67defd80b490b6d25b060c8bcc734126a6327a9969e792b0d4acf9a4dd3f810a6f7fa09e9bda97221b936d7f046a13b1e0c43efd4ad92f32165f1ede406b35bb04c017633c972d0208f4502083909265ee805a3818f081bc7c9ba43d1deafbb274078bb046352dbafd1daea58fd75c329cb4adbb1aa16b445efef6bff66d8f783c1bb1c1badc697ce06125d601b8e4bc5417f4cddf139ad8ec6b00009456c716f64659b6de1dda95f8f20f6e210a28cd2b8579ac7ca88c4126c39e4b9bd6785ee3677ba9d36b5cd52bfae6d75cd9f5a247fad3c6894961fa414726ce7ce6c514d592fbcc058f04faed11c9462a9a199167813056c9e01b1ef471ec324514478414cdc240acf4fdcd943e4518d7c63094944695036ea1ea9925eef36abeda63166ed54d3f07fad5c542119adbd60e4e254fc01c7f7b74b11050000",
    ],
    [
      "ETag",
      "HC/fdgGvuX/fpsGJA3nnJw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "4d",
      "72",
      "82",
      "30",
      "18",
      "00d0bb64ad4eaa28a63b5a886915111146d830013e91410910fe3bbd7b9d1ee1bd1fc4e318a40c1b914381ded1c89764112f22ac5d3b3c5dac36d3dcc86c5cc32a14da51089da3afc8a17950afe8534dd82d8eafe2143a81da74273be82b4614556ebc61efbd55dd13720a4f49f745ea2ee7c1d906d23bc0b0edee183b586bfd328aa98fa07f18418c576eaa3245ecbfcfd7c95777c3368d6e9a7ff86422a18aec485294a68f6f73534f0cac5aed92c7eb9848ada804eb0cb36aea045a3cd0f4a8cf6fd946d39d2ffd2e079e5b81075e79dff869cef904d9718b66088632ab4186d9cbbd5a133243ff09613396f09af8005e438d7eff006471c9f123010000",
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
      "Wed, 22 Dec 2021 19:36:50 GMT",
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
      jobId: "grouparoo-job-89-1640201729937",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85535d4fa34014fd2b64f6d5b6d0620b4d9ab5a9b83669a952aad96c3664667ac1b1944166d018d3ffbe97c1ba1a137d0166ee39f79cfbc10bd989624bc68489eca186eaf9c7bd64e48480a619deee1e1c562c67d5d3655473bed31e5db0eba7c90411a26129ba2f73e82859571cd478b3ee6695ac4b5a49d9c1441dcfef3843d7eedbcea8effb8311f214e4e942143b64df695daa71af77d4ee66526639d052a82e97fbb7fbde63bf5756f21eb856bd8f923d5451bdaf457fe692532d6431d9acd140ada04a604f458e16fe33b7ecec63eaaea0fb6e86e047c181722eeb4237b6300597452ab2ba3259c9f885189bef3ec83a5804b3d8e232aff74552d03d9c585baa69a29f4bb02ea2d5d29a8717ab68398de7ab3059cf2e83e5b43b5b2d36cb706ddd5e06516069ca72305c6b629d99538807d4df82d2a230ea7173dd28bf3668fe792c0d01a515b4c164640fa9e3d93e4bd988a7dee094a53630e6b1d1291d309bfb2eb85b06147946d4b0688135fbe0faccf61227a5fdc475dd34f1fa7e3f71bc2d1bda8c5137b5c9e1843c5542c3b950a554a2ed10b98de67190c4d1269c4de3c09490d23ad7e7adb1a680f71e351698d8b683c02fea3a34512151ad69f93c8c83683a8be737413be50564943faf1f70ce29cd15209a56d8400dd5526eb169249c2e8373049ba95d1d838a8cffbc90a6ef8d93776d7fa3c738c4c6b2366fb28ea379f8cbd839226e685e1bc863fb414ab47c87f5a1ebc35f44e2a2b659c8f526887e93f62a82142a28f8f71345b0097cfbbf1d971fb1b8fe28a3349e717fb86a447805ed1e0953ee2bdb73f069fe564d2bfd2936f086c7ae35399a8cb08742bf56d42e3f16da8ad5ea0d84415c81d074ebf00fa4d1d4727c040000",
    ],
    [
      "ETag",
      "kq1bnMCrwHRucckt8aLbQw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-89-1640201729937"
  )
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
      "db4ec2401086df65bc2d09081668c205200ae10c25f1104296768062db29bb5b0921bcbbb315d1a889de6c67a6df4ce7ffbb477809621f1c5806eb5d8af270b5463d36c104551a6ac58f84628560016ab16672bf1bd96ddb7dec3e145b3aed56f64fcd6138aed59850de062301ce11560186be02e7f908b18890db3c0ad3285e649905fa9098e2d49d7406f79c47e49b7c30ebf5ea8d5e0b4ed6a5d1175a2c32fe1f6df393055b5a4e708512630fcd2e89a42d7aba63642a112521e614a5d24305199cbd584b4a132189725cc955aab9825dca5fe70be5eb6ab5586630244fe88062666753de0f3469114e68cf2ac1664066210b5e65e72b97033f1362c2cec0b54bd97e5f01891e497ff12797f0ba1bc17fe1033b3bf09d1311a5b1be5077bd61fdb7716ce9e7a8dbbadbfa4128cd465d10b7d36f4ddd7a7f64b8f9597ae3a0518d24b18f0a8d85857ca97253b6f3efae36c938cddf71b44cd1024ff0e568071a9c9508159ede0030c849f37a020000",
    ],
    [
      "ETag",
      "wqP6H6TYKX3EtuK8wZCOlQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `id` = ? LIMIT 1",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-90-1640201729937",
    },
  })
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
      "0002ffa553eb6f9b3010ff5790f765d39af0ca0322455d94b28e294d3a42da4dd394d860a85bc0c436a9ba2afffb0e68fa50a5f6c33e61ee7e8fbbf3f91eddb02246234458baada8b8fb70cd093a4254e114a2dbecf4a7f99dfca5179fa550951edc727d773b1e0382d52c89f332a31dc92b1151395a2dbba9e0558905e71d10eab846c71cf40ccb308796ebda43e0499a253356dc00fb4aa9528e74fde0dd4d394f338a4b26bb11cf1fe3faced24bc1af69a4a4fed2520717a9bf6d7a9cf1082bc68bf16a090554928a35cd31cba08427664cbebc94ee329c775300ef58447114f1aa5075592011f1226169251a5534ba474d99cf0e68e9cdbc69a84d17ab79f87183f39abcf9a461a9add782ca2a53dad76071a66d4af0bac292ca8d76f9cd0b3c4ddb081a7111af59bcd1c6dab136999f40f0f037f3cffc5033a188984ac58aa68410938cd6f60f53f25fdf4d4dc00a8cdae47a680cb0e9182e49c8304a1cbb4f128312e290611fdbc488dc1eedc58462e0a95abd61e182177dd7180e5cc7ed5b36750776ec38769c3856cfb2ed21b189856dc3c431c1687f846e0553f484c9924bd68e0a5d067ee8adc360359f4e42af6923c1308e93b6b8ba89e7752a68726d1875bf6ff4b6afb38c835b3d7b7f1e7ac1641afa175e7bdd339ae2e86eb9850b4f702629a0b1c03955549cf1180687ce174b3ff417f3c90c18cd1d9e1f10128d7edf3f11c2bbb299b46abeb5d7a0d7f81f001738ab1ac4ae3d2013edf747ffa7d007893f0081ed6ed9e8c7ca0b7ea13614d0840a5a44ef6f00809bc4bb8ff4f062000b6f066ca4827fd8b748d62691a0eddeb1bca9af653ba6695b166ac042bdcaf5fad661b8b546ad48735aa8878eda1753cfaa4955f21104495897b93f3f85ec3fa9b67d33b1040000",
    ],
    [
      "ETag",
      "qlGX1JbzeV+srtu/Rwo/vw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-90-1640201729937"
  )
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
      "414f83401085ffcb781422546303490fad416d4288627b30a669b6cb8050607077b12184ffee2cf5b233fbf6db792f33c2b96c3308e154163f3daae1a640f36e9b14755f1bcda5a35623388046144ca6def3e553de56bb7a9d2499efe1dd390a8ad58a092dbfb111108e909758671ac2af115ad1207f3b1ed53c9131337456d926bbe8254a596828b342b28fe3f5268e603a4c0e54744a314785ad443bb25354a1345b9b568ba6abd1d5d42b891a66787e2814f59d50442e2b6ee0b9fee383b7f0fce52208ee970cd6248529a96576ff016c63c8883aa50b87059f0135b79c3b9fcfdf59e640877f743318d46f8ad857a3b5f4aef64f6423198e6a548f0e48c1cb782dcdf53efd014ca46a5969010000",
    ],
    [
      "ETag",
      "R0FwYc+jTlANNd10e/kE9g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "72",
      "43",
      "400000d07fd9e724a3645dfa86891421087579314b96416bdd599dfe7b33fd84737e00ca733c8ee9441adc827740112b9df253c6c8d1c2ecbe532f74a356d9cd6293b33e0dd4a6967921a34c5fe9f975bf8fb7f8ccb2663da896661bf0932e8566b86f28738b39aaf407417a96116f2f57d18597a56f56bb8e3827b46b5b4dbbb01987824f13cf429e4466c353da2831da9b40eec9f5b9f3a54563183f37014f5c64077ea59063a89bb3efb917d151edb0d7faef22a22be9ced4643fc6d208322a23bf7197161aa2c932a94ebe9c9d894308db707e2c7b7b9ce3c1050780b7ae1af098562f370725e900fe13d28976f835a16034e001fcfe01fa0abd6123010000",
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
      "Wed, 22 Dec 2021 19:36:52 GMT",
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
      jobId: "grouparoo-job-91-1640201729937",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85536b4fa34014fd2b64f6ab6d79545b9a346badb825b174a554b3d96cc8305c709432c80cdd34a6ff7d2f83753526fa8999b9e7dc73ee8367f2c8cb944c48c2f3a706eafdb707919013028ae6f83a6c2e9e16d16e5f3821e4fee9cdc2ce2f1e67d3292278cb92745b15d093a2a919c8c966ddcf6bd154b416a287897aaed5b3ce86a66d5a23db759d11f22414d9352f1f917daf54252783c151bb9f0b9117402b2efb4c6c5fdf073b7b50d5e201989283f79203549183cf45bf178251c54539ddacd14023a18e614b798116fe33d3e4fc7dea3ea7db7e8ee01d674019134da95a5b98828932e37953ebac64f24cb4cd3707b2f6aebd7964305134db322ee9164e8c942a1aab7d05c655b85a1a7e70b50a97b3c85f05f17abef096b3fe7c75bd59066be36ee1859ea1685280e61a53e35cdf02bca07e0a52f152ab47ed73abfcd220ffe3585a024a4be882f1c83ca3d6d874932c19b16cec9c26990949324e46a7d4494ce60e6198264091a745358b96a24cb311b3c019c63673d378e8508813e6403cb65d1bc01c2799eb90c309f95b7305975c5642f2ae43e42ef4232f8ec24d309f459e2e21a34da12e3b636d016f3d2a2c30364d0b819fd47568a35ca05adb723f88bc70368ffc5baf9bf235e494edd74f38e78c1612104d6b6ca0827a29526c1a09664bef12c17a6a3f8f414926bf9f49dbf7d6c99bb6bfd2231c626b59e92f5947a11ffcd0768e885b5a341ab2eb0ea442cbf7581fba3efc41242e6a9785dc6cbcf017e99e42c8a086927d3d5104ebc097ffdb71f9118beb8f3252e11df787c95684d5d0ed11d7e5beb0c7966d5963a2c1b5fa10b32dfbd8b536479b11b650aa978abae5c7423bb146be8230882b10e86e1dfe01b91ec7757c040000",
    ],
    [
      "ETag",
      "4uBqHTvyl3RegI5QH2gBkA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-91-1640201729937"
  )
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
      "514fc2400cc7bf4b7d1dc9400459c2c350141240dc860f18428ead8ce1b6cebb9b8610bebbbd8968d4445f6e6df76bd7ff7fb787a7248fc08155123f9728776731ea7b1378a8ca542b7e14942b040b508b984951ceed9e288adef47a368f6d2f7d18f8bedbed32a1c20d66029c3dac134c2305cee31e729121b785949659beac320bf4ae30453ff086935bce338a4c3e998d466e6fd48783756a8c8416cb8aff47dbe260c196561eae51621ea2d9a590b4c5500f8d4c25b222c59aa25286a8a082ab17b1a4b21092a8c6955aa75eabb79a76c3aeb71b9dce799bc19442a113ca999df9bc1f68d222f5e89555428b0159852c785d9d2f5c4ea24a88098793a0d5acf6fb0a480c4946cb3fb982d7dd08fe0b1fd8d181ef9cc8a8ccf589ba19ddb9bf8d634b3f475dbb41ff07a1341b754282e1b8ef07ee786ab8c5517a6fa7514d25b18f0a8d8575bb7979d16ed9efae5e91719abfe36859a205a1e0cb314834386b912a3cbc01e789a6847a020000",
    ],
    [
      "ETag",
      "auZ0BappBPDUZg0RlVHSSA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` = ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-92-1640201729937",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85535b6f9b3014fe2bc87bd9a43601722552d44509eb9072e90869354d5362cc81ba054c6d93adabf2df7780666d37ad7dc2f87c9773f303b9e579444624e4c95d09f2fedd8d08c909014d13bcbde8d98bf3fc7ab5efcde4af89bf2f7efa054fc66344f08aa56856a470aa442919a8d166dd4aa4280b2a853845a153c73eb5fa5dd336ad81ed389d01f214a4f19ce7b7c8bed6ba50a376fbe8dd4a844852a005572d26b23ff7edbddd2ea4b801a655fba5651b5d54fb75d3b35430aab9c8c79b3526502a905bc8284f31852766147e7c29dde2346b2508de7306943151e6ba4a0b2598c8639e94b25625a30752a7f9ec40d6eedc9d06c674b55906ef7734abc8bb0f0655c6762b4195a9363ef9ab85b12bd0eb9a2a503be3eab3ebbb86b193c0848cb63cda1963e3cc982c67c613aeb99b7b0b2f302c4c2502a5795e2712d030852a89c75e79ff4ea822508d324d703b30fbd41a9a4e188703160f3bbd3036210c87e1a0473ba1c99c2e74a31028f274a55eb3682ef2d0b6c0a67dd66710857dca6c3b1e32c70c59e438c3c8a28c52d306a7470e27e487e41a665c1542f1a661e4caf702771bf89be57412b8751931c5a6cc9ae4aa229ee7a9b1c8ad6956f5be52dba18a72816ed504bc65e0fa9369e05dbacdd0e7905076bfbec3b1c7345580682a69061ae44244506dfb6aed05de6a399923a39ee4c511a1c8e8dbc31321b82fea4eebfa5b79f5bbb5ff117049d3b246ec9b03b1c8e170f27f8575e07bcbf3d7252605568b32df11857bde28902f1bd7ff4a9a2b1f629090b3b7b700c175e0cde77a7c3b88c5d783364ae33fee1c53950993d0ec1ecfea2a1bf6d0b21dab436ab0d47fc73a66d73936b8d2a81421835c3f56d4bc9daa5f75a8547f4018c49559d69d3afc064d2e1163bb040000",
    ],
    [
      "ETag",
      "P52MGnhOv5DrzARvpxRpig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-92-1640201729937"
  )
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
      "83",
      "40",
      "10",
      "45",
      "ff",
      "657c14128a4642933eb486680d36164b6c629a660b030581c1dd4545c2bf3b4b7dd999bd7b76eecd0cf0513429cce154e49f1dcafe2a47bd354d84aaabb4e2d252a3102c402d7226af77e7f0f9cdfbf57e96715a94dba7fd3e0fb78b05132a39632d603e405660952a98bf0fd0881af9dbf128a7898ce9be35ca7ab30b1e8288859a52236ce2305caec200c6c3684149a7083394d8246846b6924a4cf4daa455a26e2bb41575324105133c3de492ba5648229b15db77edd9ddade33a33cff5fd1b8fc18a12a10b6a988d5f816d34695145f4cd6161c6809c5ace9d4de717cbae0974f84757bd46f522897d151a4be7627f4f2692e6a85a7668412278198f85bedcc73fb074656569010000",
    ],
    [
      "ETag",
      "+ThLMW7z7xAUdijQJXXgLQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "ffedd3497282400000c0bfcc59298420436e82806c460cab9729060745d941362b7f8f956fc4fe433f4114c7a46d5157de49013ec1143102155398de043d3d3b073131e253a9edf530c875d9096d6ba39b04e51c56672629d3ee08ab933c7c28fd50d9086fa58c1baf90450dbf5d577b83b96b19a9ed333622096fcb9372ebeea2cb1ab26a5a4c105aedb23f4025f3a462743db44ccffdb2184c3e241cbd528f53ee4cf1d9d42fbcc79a5c7ff07377f2b1186b41344218a86ce5cabb952590715f1ba4686f0ff848d67cfd7555bcd45ab73b8df16bddf16da1e183cb6c483843df48cd7819526f6fff0e5800325669435a94beb6b39c202cc05f7dd44d1579fd1749d49006fcfc0245fea2ab19040000",
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
      "Wed, 22 Dec 2021 19:36:53 GMT",
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
      jobId: "grouparoo-job-93-1640201729937",
    },
  })
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
      "64",
      "f6b52a2a029a98adb5746ba2d802da6d361b320c039d1618ca0cee1ae37fdfcb50bb6d9ab44fcccc3de79e733f38a02756c4688222963ed7b4da7f7be4113a4354e2145e930bf653fcbd4977fbcd727b95df5edc5b5bff763a05046b5802e765463b82d715a162b2f1bb69c5eb12579c772051673cecf44d431fe87d6b301e0f2de0099a254b563c01fb41ca524c7abd937637e53ccd282e99e8129ebfbef776835e59f1474aa4e8bd97ec818ae87d2efa3de3044bc68be9c60703b5a0554873cc32b0f09f1947e7ef537719cebb2980778c504c08af0bd9d882148417094beb4a654593035236df1c90ef2c9d79a0119ed579111638a7675a8c250ee5bea4da95b75e690bf76aedad66c162ed86fefcda59cdbaf3f572b3727dedeedaf11c4de228a38aab4db5737573e102fa311592154a3d689e1be597062d3e8ea52180b4a06d30b47413f76d7d1c259145127b388a129d46911d59233c8c743236a8114714034f892a162e7811eb43d3eec749482c13874664da211e8dec30d6637dd0b7b131c0063a9ea13f1593f49289920bd67608dd798bc009036fe3ce6781a34a48709dc9cbd65853c05b8f120a0c75bd0fc04fea3a3651c641ad69f9c20d1c6f360f165ba79df292a698ecfd679873823341018d2b68a0a4d58ac7d034e4ce56ce2580d5d46e4e418126bf0ea8e97be3e44ddb5fe9010cb1b12cd517f981b7707f283b27c41667b582ecda032ac1f203d407ae8fbf01098bda6641b71bc7bb47ed9347135ad1827c3d5100abc097ffdb69f9010beb0f3242c21df68788468454b4dd23a6ca7d61dbfda1690c900257f243cc1a9aa7ae35399a8c34",
      "a7857ca9a85d7e28b415abc52b0882b002aeead6f11f7d8114d97c040000",
    ],
    [
      "ETag",
      "fBiXsxPgvyULVFmQBY7VSQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-93-1640201729937"
  )
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
      "ff8d926f4fc2400cc6bf4b7d3b9221ff64092f40519600228c44630839b63206db3aef6e9285f0dded4d44a326fae6d676bf767d9edd0176511a8003ab287cc951161721ea07134c51e5b156fcc828550816a0162193bd8692a37057cc1b8f4f763b5feddd6450ec3b1d2694bfc144807380758471a0c0793e402a12e4369fe23c49976566812e32539c7953777cc7794281c9c7f3e1b0db1bf6e1689d1b03a1c5b2e4ffd1b6385ab0a5d514d72831f5d1ec9249daa2af5d235389248bb1a228973e2a28e1f2452829cf8424aa70a5d2ae55aacdba7d69575b97ed76adc5604cbed011a5ccce67bc1f68d2229ed29e5542930159862c785d9eaf5c8e82528809ddb1d7ac97fb7d0524fa2483e59f5cc6eb6e04ff850fece4c0774e2494a7fa4cdd0eefbbbf8d634b3f47dd74bdfe0f426936ea8c78eea83ff3baa389e11627e9bd42a39a48621f151a0bab76fdaad16adaefae5e93719abfe36899a305bee0cb318834386b112b3cbe0177dcb7517a020000",
    ],
    [
      "ETag",
      "B5srMgkyU5XY09ubwImHyw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` = ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-94-1640201729937",
    },
  })
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
      "5b",
      "6f9b3014fe2bc87bd9a4368184841029eab2846e5429e90869354d53628ca16e0153db64aaaafcf71d43d38baab54fc039dfe55c6c1ed02d2b13344631cbee6a2aee3fddf0181d21aa7006d190c8ea7421af4341beede6673777c13a3b9b4e2680609a257151e5f458f25a102ac7eb552713bcaeb0e0fc18848e5dfbd81ada66cfb49c9eebf61de0499aa70b56de02fb5aa94a8ebbdd837727e33ccb29ae98ec105e3cc5bbbb5eb712fc861225bbaf2dbbe022bbef9b9ee49c60c5783959afa0805a52b1a105663994f0cc4ce2afafa53b0c179d0cc03b46282684d7a5d2658104e165cab25a34aa68fc809a325fbca095b7f06691315bae83e8f316179abcfd6260696c3682ca3a57c669b83c37b615785d6349e5d6b8fae1859e616c05255c241b966c8d8971624c83b9f18c6b630bffdc8f0c0b4a49a854ac6c0a89709c535dc4e3acfcb71bd204ac40a64d6e1c7388ad91e9c669ec9074d41fc4a949e378143b03dc8f4de2dad44e628a81a7b47ac3c2252fc9c04a9c7e9c98c4761d3be9f5ec3e1e9001a189dbb39cd41c5af6d04eac11da1fa1bf82293a67b2e292b5034357a11f799b285c07b369e4356da41886326f8bd34dbcac5341931bd3d4fdbed3db5e67190737bd013f88bc703a8bfc4baf5dfa826698dcafee60ed29ce25053416b8a08a8a739ec0e0d0c572e547fe32982e80d16cf2e2809068fcfbe19910dd57cda455f3d45e43bbf13f002e715e37885dfb822cb4df1ffd5f6115857ef0fd7d095c41b720f3075070ce5b05f473ed85bf501b0a694a052dc9c7a700c04de2c3eb7ab83b8085db033652c1379c3922b50911b43d7bac68ba6cd923cbeebb7a5b0016ea4d6e600d0f03d61a5a9116b4548f1db57747cfab49d5f209a4ff48eb206826b5ff077f4b1a21bb040000",
    ],
    [
      "ETag",
      "RcspFLshRrcBvDJjqNUgJA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-94-1640201729937"
  )
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
      "000002ff2d90614f83301086ffcbf91512188b0b24fbb01974cb705174266a96a52b3764030edba22e64ffdd6bf54b7b7defb97bdf748053d51690c0be2a3f7b54e7ab12cda32d72d47d6d345f1db51ac10334a26452e6ba17a7fb55f4f62a5773f913ddbe2c16b3e994092d3fb011900c70a8b02e3424ef03b4a2411edbed94dbc89839775659ae9fd3bb3467a1a1c20aeb4d96cde6590a97edc58323ed733ca0c256a25dd9293aa2344b9b568ba6abd1d7d42b891a1cec1aa5a2be138ac867c58fc77e783d0e46413819c5713461b026294c452db39b27601b4346d4397d7358081950aee4dc07777eb11cd840db7f747e36a81f14b1afc6c2759dfd0dd94886a31ad5a30752f0672c2af3f7befc02f62e984669010000",
    ],
    [
      "ETag",
      "cRsuakMK3ZYcKBcx3FVHHA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "8b08000000000002ffedd34b7282300000d0bbb05607e59bee4005c416b4135b64c3008d605012120c924eef5ea7d7a8ef0eef5bc9cb12719ef5a441adf2a28cf902ccca59a13a895025dc2de10d70e1def132f093c42907dce80ef2b9e8dff607c23d636a3695bc8e0432606b3019e8a22961e077aa2c6a13d70191e29ddd771b20a597f5fa667bf58b787aad0c1692b0c7ac75ecd3d7dcf6c675949ab617bb2b58fb7a8c46350c6962e34bbbf19bb489f40fcb0ae92a753b415268d1831459c5c411b3d5002edbd720a61139ece73b9dd679dd9958d3b69f5e5af5c7382d8c0cc8bd751aa2b2d3d6b7d6bdf1d9d3d3bfa34c1474a7678678767e6cd70c0026ca5ffdac1f297afc7751ce10537e7e013e69004719040000",
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
      "Wed, 22 Dec 2021 19:36:54 GMT",
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
      jobId: "grouparoo-job-95-1640201729937",
    },
  })
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
      "85536b6f9b3014fd2bc8fbb826409e10295aa384aed112b211d2aa9a26643b86ba034cb1495555f9efbb364dd7aa52fb09dbf79c7bce7df084fef2728f2688f0ecbe61f5e3973b41d019620a67f0da4fcbe8308c7e5c56dee2707d73b3c8bf3af8613a0504d72c898b2a671d299a9a3239d96dbb592d9a0ad742742051c71f76dcd1c0e939eeb8e7fbfd31f024cbd3152fff02fb56a94a4e6cfba4ddcd84c872862b2ebb54142feff6a16757b5b8635449fbada40d2ad2fe58f45b2e28565c94d3dd160c3492d5092b30cfc1c27fe69e9cbf4ddde5b8e866003e70ca30a5a22995b60529a828539e35b5c98a264fc8d87c7540db6015cc638b8abc29caa4c4053bb3f658e1443d56ccba88366b6b195e6ca2f52c5e6ec2643bbf0cd6b3ee7cb3daadc3ad757d194481a530c999e15a53ebdcdc42b880fe9e49c54ba31eeb67adfcdca0e5fbb16802484bd60693b133c2aee7f82425639a7afd21491d468847c643dc270ef5076cb0270c03cf881a162ea1668f8e30f57bc9d0f7c6c980f448427aae97d0516fd41fe00176471e3a9ea1879a2bb6e0b21292b71d42d7d1320e9238da85f3591c981252dce46ad11ad305bcf6a8a0c0c4715c007e50d75147b90035ddf2651807d16c1e2faf8276ca2b9661fab8bd8739a738970cd0b886062a56afc51e9a86c2d93a5800d84cede72928d1e4f713d27dd74e5eb5fd851ec310b56565be681b47cbf0bbb173425ce1bc3190437b401558be85fac0f5f10f206151db2ce8d72e886e50fb14b194d5aca49f4f14c026f0e9ff765a7ec0c2fa838c547087fda1528bd09ab57bc44db9cf6ccf1d3a7d1f1970addec5dcc1e8d4359d436764052bd57345edf243a1ad58235f40108415084db78eff00a5ba80717c040000",
    ],
    [
      "ETag",
      "3fnRv5RKHp8DvWYYDl+0aw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-95-1640201729937"
  )
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
      "0002ff8d92db4ec2401086df65bc2de1200769c245511412400ee54643c8d24ea1b8edd4ddad8610deddd98a68d4446fb633d36fa6f3ffdd033cc569082eace3cd738e6a7fb14133b5c10c752e8de64746a94670008dd8303989122dcbd3a707551e85b2decf7cea37bc4e87091d6c3111e01e208a51861adcc703a422416e0b48e649ba2a3207cc3eb3c5b93f1b8cef384f28b4f978311c7add610f8eceb9311446ac0afe1f6dcba3033b5acf304285698076974cd10e0333b032b5483289254db90a504301172f368af24c28a212574aed46a9daac576a956aabd66e5fb6189414081353caec62cefb812123e48c5e592534195045c882a3e27ce1721c16426c3818fbcd7ab1df574061402a5cfdc965bcee56f05ff8c04e0e7ce74442796aced4edf0defb6d1c5bfa39eac6f37b3f086dd8a833e20f46bdb9ef8d26965b9ea477f706f54411fba8d15a58add4af1aad66e5ddd56bb24ef3775ca3727420107c39fab101371252e3f10db572427b7a020000",
    ],
    [
      "ETag",
      "Pfmsl/QkZr/Mdl4HpToH5A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `date` = ? LIMIT 1",
        types: ["INT64", "DATE"],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-96-1640201729937",
    },
  })
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
      "da",
      "30",
      "10",
      "fe",
      "2b91f765930a79011240421da3d91689420ba15d354de03897d46d8853db61aa2afefb2e49e9cba6b59fe2dc3d2f77e7f303b9e5794c8624e2e95d09f2fec38d88c811014d538c7eb9b67f78b6053b79beba5a99de9d348b341d8d10c12b96a2db22839612a564a086ab653b95a22ca814a28542ad81dbb2ddaee558b6e70c061d0f790ab264caf35b645f6b5da8a1691ebcdba9106906b4e0aacdc4f6296eee1cb390e2069856e66b4b135d94f9b6e9712618d55ce4a3d5120b2815c8356c29cfb08467661c7d7e2ddde674db4e11bce30c2863a2cc7555164a3091273c2d65ad4a860fa42ef3c5812cfda93f098dc97c350b3f6ee8b6226f3e195419ebb5045566daf8ba989f1a9b02bdaea902b5312ebffb0bdf3036129890f19ac71b63641c1be3d9090663aaa1f99f06a74168d858460c4af3bc2e22a4510655018f730afebd9d8a40355a35c9b567b9d4ee5b8328893c96f43bbd28b1208afa91d7a39dc862832e74e30828f274a55eb3682ef20e0cdcd8ea5b6e0c5dab93785eb7eb383d374e920ea5b6ed79b6070c1c46f647e4b7e41a4eb82a84e2cdb0c8e52208fd75b858cd26e3d0afdb48280ee4a429ae6ae2659d1a9b5c5b56d5ef1bbdedab2c17e8564d3f9885fe623c09830bbfb9f029a494dd2feff0ca139a29403495740b1ae4a9887170e46cbe0cc2603e1b4f9151dfe2d901a1c8f0e7c33321bc2fea49ebfa5b79b9dddaff00b8a059592376cd81d864bf3ffabfc249358637051c5ce696e5b4ec1e2afd4228ae792342ce57fee28a34a10524202167ef2f0282ebc4bbaff5f074108b8f076d94c67f5c3ba62a1326a1593fbead1b6dd87dbb37702c5283a5fe3be75aae759871a55129c21672fdd851f374aa91d5a9523d8130",
      "895b330b66df30fb072f4778b8ba040000",
    ],
    [
      "ETag",
      "Bh1X710evrQUYU/7qr/pgg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-96-1640201729937"
  )
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
      "ff2d90416f82401085ffcbf40aa958a391c44331c49aa0a9b49e8c312b8e140a0cee0ea5c4f0df3b8bbdecccbefd76decbdce13bab2ee0c3394b6f0deaee2945ded92646d3146ca4d45419040790552ae42ddc70b5f282df65fbbc6b9b3cde147ad22e164298e40b4b05fe1dae19161703fee10e952a51be9d4e7a98281877b555d6dbcf7015c6229474b1c2761f45af4114427fec1dc8e91ce315355609da91b5a61c135edbb446957581aea1462768608087875453532b4de48ae2cea7ae379d8cc6236f369ecf5f6602169428cea81276ff0162c3c4aa88a995b0e009a08756725f87f3679025d0f11f0d3a46f3ae497c0d5acbd1c37e4936124b54d60d3a902859c65bc68f7bff0764af07bf69010000",
    ],
    [
      "ETag",
      "qEMtnG1BxCw/QwujRMlr4w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "82",
      "30",
      "00",
      "00",
      "d0",
      "7fc9591d5cd87a63d12a564ccbce254342404421094a814effbd4e3fe1bd1f901142bb0e3dda9a36e00d8cd94a5f9005968cb897261f5aa2402daaa592eb8caf8e5dc1c34fa4ce997f6287c47f5e23d73d4b58282211252e4c4f878e5f4f4132a5303d27aed62e25945ae1781157655359d577969f7a3d0cdd47dbe1bb775b2698a0213348bccb9b0fe37070bddc8f84eabcb3f913b65f34960c54c49a936f76e9de360379cdb45c23dad0f31b5e7bdb2ac72a6fb6b67ce4a9024d68936aab5a8153f3262efbb30d035589b2a9bc444d333a77198dfbf97e68c10cd081558276a87ab9d7b2aecfc07f027a8c8cbe264c9a092ac0ef1fddecb57323010000",
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
      "Wed, 22 Dec 2021 19:36:56 GMT",
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
      jobId: "grouparoo-job-97-1640201729937",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85535d6f9b3014fd2bc87b5c132049438814ad514ad74809d90869354d1332e642dd02a6d8b4caaafcf75d4cd3b5aad43e61fb9e73cfb91f3c913b5e26644a629edd3750efbfdc8a989c105034c3d7bfc5305329c03d5ddd64c57ee873f87a3b9fcd10c15b96a44595434f8aa66620a7bb6d3fab4553d15a881e26eab94ecf1e8fac81653b03d71d3ac89390a72b5ede21fb46a94a4e4df3a8ddcf84c872a015977d268a9777f3616056b5b805a6a4f956d24415697e2cfa2d178c2a2ecad96e8b061a09750405e5395af8cf4ce2b3b7a9fb9c16fd0cc10f9c01654c34a56a6d610a26ca94674dadb392e913d1365f1dc8d65b798bd060226f8a322a6901274642158dd4be02e322d8ac8da57fb109d6f370b9f1a3ede2d25bcffb8bcd6ab7f6b7c6f5a5177886a2710e9a6bcc8c337df3f182fa0948c54bad1eb6cfadf2738396efc7d212505a42178c1c6b4ced89e5c669ecb074323c8d530be278123ba774185bcc1dc1288981224f8b6a162d45c9c076ad413a8c26c9388946d472a2094bad6810d3516c9dda1387d9e470421e6baee09ccb4a48de75885c07cbd08bc260e72fe6a1a74b486993abf3ce585bc06b8f0a0b8c2ccb46e007751dda2817a8d6b67ce9875e305f84cb2baf9bf20a32caf6db7b9c734a730988a635365041bd1609368df8f3b5778e603db51fc7a024d3df4fa4ed7bebe455db5fe8210eb1b5acf4976cc360e97fd7768e882b9a371af2d01d4885966fb03e747df883485cd42e0bf9b9f3825fa47b0a20851ab0d19f4e14c13af0e9ff765c7ec4e2faa38c5478c7fd61b2156135747bc475b9cfec893d765c976870addec5dcd1f8d8b536479b110a28d57345ddf263a19d58235f4018c415f075b70eff0063c988a67c040000",
    ],
    [
      "ETag",
      "zm3gtfeeqaLhgmy3Nie+jA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-97-1640201729937"
  )
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
      "000002ff8d92514fc2400cc7bf4b7d1d0920822ce161282a71208e111f0c21c7d68de1b6cebb9b4208dfddde44346aa22fb7b6fbb5ebffbfdbc153928760c332899f4b94db9318f5bd093c5465aa153f0aca158205a845cc6473b9da7437f124be7d889791ef8403d7934eafc7840a569809b077102598860aecc71de422436e0b282db37c516516e86d618a53df1b8eaf39cf2834f978e6ba4edf1dc0de3a3686428b45c5ffa36dbeb7604d4b0f2394980768762924ad31d043235389ac48b1a6a894012aa8e0ea452ca92c8424aa71a5d6edd41aed56bd596f749addee6987c19402a113ca999d4d793fd0a445ead12bab843603b20a5970549d2f5c4ec24a88098763bfddaaf6fb0a480c48868b3fb982d75d09fe0b1fd8c181ef9cc8a8ccf591ba72ef9cdfc6b1a59fa32e1d7ff083509a8d3a22fe703498face6862b8f9417a7fab514d24b18f0a8d858d7aebfcacd3aebfbb7a41c669fe8ead65891604822fc74da2c18e44aa70ff06bedacdc27a020000",
    ],
    [
      "ETag",
      "2bhx9xgPgKWgbfTAdELRrA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `stamp` = ? LIMIT 1",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-98-1640201729937",
    },
  })
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
      "5b",
      "6f",
      "9b",
      "30",
      "14",
      "fe",
      "2b",
      "c8",
      "7bd9a42618480289147551ca36a45cda84b4daa62931c650b780a96d527555fffb0ed0f4a26aed13c8e7bb9de3e37b74cd8b188d50c4d39b8ac9bb4f57224247886992c26961ce6ef7c13e62577ff7493fc597d92474cec66340f09aa5485e66aca344252953a3cdba9b4a5195440ad101a1ced0eb58831eb6b1e5dac3a1e3024fb12c99f1e21ad8975a976a649a07ef6e2a449a315272d5a5227f3a37f7b6594a71c5a856e66b4b135c94f9bee9712628d15c14e3cd1a02548ac92dcb09cf20c233338ebebe96ee7292775300ef396584525115ba8e05125414094f2bd9a8a2d13d6a62bef8416b7fe64f4363badc2cc2cf3b92d7e4dd17832863bb954c559936bead9673635782d725514ced8c8b1ffeca378c9d6454c878cbe39d31368e8dc9e2040e958670edc12c9807a161418e9829cd8b264548a28cd5091e0715bcbd9e9a403478b5c5ad8b07c4f2f0304a2297269ed38f12cca2c88bdc3e71224c873dd68b234680a76bf586450a51c4b6e3b8ee20669615632b02b6ddb3493ff65c8c61e48e3d4c9ca1472df470846e25d7ec84ab5228de4e0b5dac82d0df86abcd623a09fda68d84c0444eda7075132f736a68728b71ddef3bbd3dd4552ec0ad1e7fb008fdd5641a06e77e7be33396127ab7be813b4f48a618a0892439d34cce450c8343a7cb751006cbc564068ce61a4f0f088546bfef9f09e15dd94c5a37dfda6bd06bfc0f807392550d62dffe2098c4c3d1ff15c260eeafc3c9fcf47d151b56ba83ed8ed50f2d7b643923abd7c518ff02f13f4084d56f75d1d9c65ffd44edd18a254cb2827ebc1b006e0a1fbee0c373022c3c28b081ddd41c3691aada844ad66e24cf",
      "9bde5bb667b9ae6ba3062cf59b9ae77a87b1d71ab522cb59a11f3b6a9f533dc5a654a9271014619116c1e23b54ff011b0fe9c3ce040000",
    ],
    [
      "ETag",
      "n/LwvIvbejzvf5g0hlAT3Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-98-1640201729937"
  )
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
      "dd",
      "6ec2300c85dfc5bb6da5964dfc495cc08400a9eab6327633211452d395b57197b84315e2dde794ddc4cec9179f235fe1bb34394ce158163f2ddaeea1407ef34d86aeadd84969c838840090552164f492d8ed7c74beacf30f9d0cc766d5a9f4329b09e1f417d60aa657389558e50ea69f5730aa46f97638d87ea260dc355ed9a4efcbd53213a1a6dc0be92e49e68b6409b7fd2d80331d333ca145a3d18f6c2c9d51f3c6a775aa6e2a0c1db556a3831eee1f0a4b6da32c51284a381987f1f0291a44f16830993c8e04ac482b2ec908bbdb82d830b1aa32ba48588805b07d2bb94ffdf9dbcb1268ff8f2e3a46f76a497c1d7acbe86eff4c3e124b54b62d06a0952c635df2fd7efb0302d95ed469010000",
    ],
    [
      "ETag",
      "0OLrSA7jwHdVcL68nGyaNw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "00000002ffedd34b7282300000d0bb64ad0e906aa1bb18b17c1aa62894cf86010ca2150c498062a777afd36bd47787f70df2b2a44264f2fa495bf002a65c3316e5a250503c28b7805ce244c50787c016a2f3d12bd373a423dd93b8bccdadb63e9bb04d82b576a86c75c33e9e075fa87b624ae4f79c8b266595087b7f4fa5e2d8c394281ec7dc7a83b7b2b838c25f0538d3ae27bd2269b8324677eb886e203b59bd433f8e5c29823a5f2e2516d3eba6307b343f90b47345246b3a87ad3a22d7ac1bad57c7233e7266bb8ed3e4bc492b2fdce1caeebc621b276e84263459ddae26e1c88899f8d6d3c0f4c5c3c3bf0366807eb113a7223bddb7c3a561ccc05ffd4c4e8cdeffaf69ce29073fbf3957e86919040000",
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
      "Wed, 22 Dec 2021 19:36:58 GMT",
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
      jobId: "grouparoo-job-99-1640201729937",
    },
  })
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
      "14fd2bc8fbb82690272152b46629dd9812b211d2769b2664cc85ba259862d329aaf2df77314dd7aa52fb09dbf79c7bce7df0406e799190298979765743b5ff702362724240d10c5fcf3d197f5c9b9f6be95f8d7ed97978e5edbf65b3192278c3927457e6d091a2ae18c8e976d3cd2a5197b412a283893a8ed3e98d8756dfead97dc719d8c89390a74b5edc22fb5aa9524e4df3a8ddcd84c872a025975d26764fefe67ddf2c2b71034c49f3a5a4892ad27c5bf4532e18555c14b3ed060dd412aa087694e768e13f33894f5fa6ee72baeb6608bee70c2863a22e54630b533051a43cab2b9d954c1f88b6f9ec4036eed25d84061379bd2ba282eee0c448a8a291da97609c07eb95e1f9e7eb60350fbdb51f6d165fddd5bcbb582fb72b7f635c7e7503d75034ce41738d9971aa6f3e5e503f01a978a1d5c3e6b9517e6c90f77a2c0d01a525b4c1c8b6c6b437b19c388d6d964e06a338b5208e27b13da283d862ce1086490c14795a54b368210a2b49687f1cdbd1a00f9368381e8f236740211ad194f553e6a4108fc8e184fcadb882332e4b2179db21721978a11b85c1d65fcc43579790d23a5767adb1a680e71e15161859560f816fd47568a25ca05ad372cf0fdd60be08bd0bb79df21232caf69b3b9c734a730988a615365041b51209368df8f3957b86603db5efc7a024d3df0fa4e97be3e459db9fe8210eb1b1acf4976cc2c0f3bf683b47c405cd6b0db96f0fa444cbd7581fba3efc41242e6a9b85fcd8bac14fd23e05904205057b7fa208d68177ffb7e3f22316d71f65a4c23bee0f938d08aba0dd23aecb7d644f7a93517f4234b852af62e3c1f0d8b5264793117650a8c78adae5c7425bb15a3e8130882be0eb6e1dfe01001413117c040000",
    ],
    [
      "ETag",
      "FIsb+O/BusNX5Z7lTXIyJg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-99-1640201729937"
  )
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
      "926f4fc2400cc6bf4b7d3b12501cb2c417e38f4a02283023620c396f654e6febbcbb6908e1bbdb9b8a464df4cdaded7eedfa3cbb0d3ca6790c01dca5c953897abd97a09db8608aa654d6f0a3a0dc20788056244c2a5c5c7717b67972a5e47cd47b9a88b9ff921c1f3361e43d6602820dac5254b181e06603b9c890db24a932cb9755e6815d17ae388ba683f129e719c52e1f5f0e876167d887adb76b8c8515cb8aff47dbedd68307ba9be20a35e612dd2e85a6079476e0641a91150a6b864a2dd14005572f124d652134518d2bb576bbd6f09bf5fd7aa3b5df6e1fb4185424854d2967f672c6fb81252bd4945e5825f80ce82a64c1abea7ce6721a57425c3818477eb3daef2ba051928e977f7205af7b2ff82f7c60ef0e7ce74446656e77d4c9f03cfc6d1c5bfa39aa1746fd1f84b16cd40e8906a3fe2c0a47178ebb7d97de595b34179ad84783cec246bd7974d8f2eb6fae76c939cddf09ac2ed10329f8729ca51682955006b7af39e49fc87a020000",
    ],
    [
      "ETag",
      "leZYCZt4FWlcXMDqQaX6wg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `amount` = ? LIMIT 1",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-100-1640201729937",
    },
  })
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
      "000002ff85536d6fda3010fe2b91f765d30a24400841421d82748b44a185d06a9a26709c4bea368953db61aa2afefb2e49e98baaad9f0877cfdb9ded4772c7f3888c48c893fb12e4c3a75b119213029a2658fdea4cf7dcdb5bc9b2bc4deff86c58a697f3c9788c085eb114cd8a145a4a9492811a6dd6ed448ab2a05288160ab52cd36c5983bed9352da7ebba3d07890ad278cef33ba4df685da851a773346f27422429d082ab3613d973bdb3ef760a296e8169d579ebd9411bd5f9c0f534158c6a2ef2f1668d094a05720b19e5296678a146e1b7b7da6d4eb37682e03d6740191365aeab5c28c1441ef3a494b52a193d923ae7ab0fb2f6e6de3430a6cbcd22f8bca35945de7d31a832b65b09aa4cb571b65a9e1bbb02bd6ea802b533ae7f782bcf3076129890d196473b636c9c1a93c50c8b4f127565ee9ffb816161900894e6791d23a0610a5584a755f9ef4fa822508d664d73eb98036a0d4d378c4387c5c39e1dc62684e130746cda0b4de6f6a11f854091a72bf59a45739177edbe09b13b886d27b2bb8ee9dadd980e7a66d877a9698736446053cb72c8e184fc915cc38cab4228deac8b5caffcc0db06abcd623a09bc7a8c98e24a664db86a88d739350eb935cd6adeffcc76a8ba5ca05bb57f7f1178abc934f0afbce6c8e79050f6b0bec7438f69aa00d154d20c34c87311e1e2c8c572ed07fe72319923a33ec78b234291d1afc71742f050d49bd6f56fe535e8d7fe47c0154dcb1ab16f3e88450e87937f2b9ccd97938f35da36220ebf1184d7bc5120971b6ff59334a515c42021671fdf0204d78d8f9febf1e920181f0ffa288dfff1d23155b93009cde5e3591db1610f2db7e7daa4064bfdae6777ede3862b8d4a1132c8f5d348cdd3a91656b74af50cc226de9985bff88eddbf5b31844fbc040000",
    ],
    [
      "ETag",
      "+7CviEv1gOujlkiD8ulQLA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-100-1640201729937"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff2d90dd6e83300c85dfc5bb0509d8b4ae48bd6827d422a16aa33f375355a560180c304bc21842bcfb1cba9bd839f9e273e411be8a26051f6e45fedda11c1e72d4efa689517595565c5a6a148205a845cea428cfbf2a0cb6ebf0d078c7731fef5e64d1af564ca8e4136b01fe08598155aac0ff18a11135f2b7eb55ce1319d3436b94707f0cb641cc424da911f6a7285a6fa200a6cb644149b7183394d8246846b6924a4c7468d22a51b715da8a3a99a082199e1f72495d2b2491cd8aed3a8eed3e3f399ee32ebce5f271c1644589d005350c9f0ec03e9ab4a862ea392db80cc8b9e5e0d97cfeb0ec9944977f743368546f92d858a1f174eefeaf643269ceaa6587162482b7b12bf4fd3efd0171d7c3466a010000",
    ],
    [
      "ETag",
      "ajVxsIEGAISn2TVwRH8riw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:36:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "8b08000000000002ff1dd0d19642401800e077719d0ec658b377a4552a4e42cc8d63f5d38449a6dd62cfbefb76f611beef472aca1284c8efd706b8f42e8d8546e6e5fc53b1d26f658a7c6193dadc628de0e8a1650b19e38ff6928600ac9e6837b9f635ee2871d6eda658a2c63aa021f146a54b0e8e7f375caeeed992279de1d46bbb5de914b1fa84034b9f763e3cab8c65b25c2d641e78c7dd6183b0d8f81952f767d07a033341ddca069925d1579ab96793784d2acccce92ae15fca5d6e356fedc3588e31a75630dc169cc38d0121bad13d8f0f4a43deab65706db6fa296ce555128f2a4511553cf3124b33099e3d1b40e4ece546989099f49f90dfc71e5e133614030cd2ef1f66d2f6b523010000",
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
      "Wed, 22 Dec 2021 19:36:59 GMT",
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
      jobId: "grouparoo-job-101-1640201729937",
    },
  })
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
      "5d",
      "6f",
      "9b3014fd2bc87b6d1248484822456b94d2952a211d21ada66942b631d42dc1149b445595ffbe6bd374ad2aad4f60df73ee39f7035ed0232f53344584e74f0dab9fbf3d0882ce10533887db687e6ddfd4c1f5e2fa6e6b3fc693fd581d1687d90c105cb324de5505eb48d1d494c9e976d3cd6bd154b816a203893a8eed749c916bf76dc7eb4f26030f889215d992978f40bf57aa92d35eef24decd85c80b862b2ebb54ecdeee7bfb7eafaac503a34af63e6af64046f6be50fd5e088a1517e56cbb01078d6475c2769817e0e11f3525e71f737739de757300ef39659852d1944afb8214549419cf9bda6445d317647cbe7b411b7fe92f628b8aa2d995498977eccc4ab1c2897aae987519ad5756105eaea3d53c0ed661b2595cf9ab7977b15e6e57e1c6babbf223df529814cc70ad99756e4e211c403f6552f1d2a8c7fa5a2bbf7628f83c184d0069c9da60e2d923ec8ced09c98847b3f16048329b113226de100f884d272e7353c230f08ca861e152941e4046840c12377549e27afd613271463419e3d463ae4d68ea50743c43879a2b76c16525246f3b84eea220f69338da868b79ec9b1232dc14eaa235a60b78ef514181896d3b00fc4f5d471de502d474cb8330f6a3f9220e6efd76ca4b9663fabc79823967b8900cd0b886062a56af440a4d43e17ce55f00d84cede6149468fafb05e9be6b27efdafe468f6188dab2324fb489a320fc61ec9c10b7b8680c64dfbea00a2cdf437de0faf80790b0a96d16f473eb47bf507b15b18cd5aca45f4f14c026f0f51777da7e00c3fe838e54708605a252abd09ab58bc44dbdafec71dfb6dd2132e05a7d8a39a3f1a96d3a87cec876ac54af25b5db0f95b6628d7c03e9bfca360c4dbb8e7f0113c0261c7f040000",
    ],
    [
      "ETag",
      "RAJ0PrIJCJWU0kT9v8twCw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-101-1640201729937"
  )
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
      "8d92614fc2400c86ff4bfd3a920d71c8123f00a26206224c63620839b70ea7b775dedd2484f0dfed4d44a326fae5d6764fbbbeef6e03cf599140000fd9f2a542b53e58a2b9b6c11475258de64749854670008d5832995ccadcf4079d55783b4b9459dfe191ecad4e4e98d0f123e602820da419ca444370bf8142e4c86d31c92a2f1675e6805997b6388ba6c3f139e73925361fdf8461b7170e60ebec1b1361c4a2e6ffd136df3af0440f534c516111a3dda554f484b1195a995ae4a5c486a64ac5a8a186eb174b4555291451832b0dcff51a9edf729baed76e763a876d2625c5c26454307c33e305c19011724a2b96093e03aa0e59715a9faf5cce925a890d87e3c86fd50b7e0514c6a492c59f5cc9fb3e0afe0d1fd8ce82ef9cc8a92acc9e3a0bafbabf8d634f3f479d76a3c10f421b766a8f44c3d16016754713cbcd77d27b6b837aa2888dd4683df4dcd6f151db77df6ded93b59abf131855a103b1e0db719119085221356edf0019ae7b317b020000",
    ],
    [
      "ETag",
      "dJlmtCE9wLVSdrtyXe5lBw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `id` > ? LIMIT 1",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-102-1640201729937",
    },
  })
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
      "db",
      "6e",
      "9b",
      "40",
      "10",
      "fd",
      "15",
      "b4",
      "7d",
      "69a5d8e662f045b252cba60d9563a71827ea4df60283b30966c9ee92c88af2ef9d853817456a1efa04cc9c33e7cccc2ef7e49a15291992986d6f2a10fb0f573c26470414dd62342c7bd95e94a24a962783c5cfe89b35bd6077a31122986649ba2b7368495e8904e470b56c6f05af4a2a386f61a19665da2dcbeb9ab669f5ecc1c0e92151429ecd58718df44ba54a39ec740ee2ed2de7db1c68c9643be1bba778e7d6ee94825f41a264e7b566076564e71dd5e39c2754315e8c564b745049106bd85196a387676a1a7f7e5dbbcde8aebd45f02d4b802609af0aa57d6189841719db56a2ae4a86f7a4f6f9e2852cfd993f898cc962358f3e6ee84e93379f0c2a8df55a80ac72657c0917a7c6a644ad4b2a416e8c8b133ff40d632320e1225db374638c8c63633c9f62507ffdae4cd3010ccd82d320322c74928254aca87d4434ce417b789c55f076459a4015aa35c975cff4a8d537077116f792acefb87166421cf7e39e4b9dd84c065de8a63150e4295dbd66d18217d4ebba0e38a60bcec0b6cdbe096e9a9a9e97c56eea3896e7426cbb71ec9187237227988229932597ac9917b90883c85f47e16a3e19477edd46467126d3c69c6ee2a54f854dae4d53f7fb8fde1e74967154d30b08e6911f8e275170ee373b9fc19626fbe50d6e3da3b90444534177a0409cf2140747ce16cb200a16f3f10c19f522cf0e084986bfee9f09d1beac27adeaa7d6f2bab5fe01704ef3aa46dc362fc4220f0f47ff57c1c5127f108267bc6193ef2b3ffc419a500819082892f74f0082ebc4fb77f5706f108c370775a4c26f3c7089d42a8980e6e0b1",
      "5d6db061f76d0b4f04a9c142bdc9395deb305d5d4357841d14eab1a5e6dee861d5a94a3e81f4ff68359f07f3af98fd0bf456b696b9040000",
    ],
    [
      "ETag",
      "Rp7fyrprucSH9OZTJ1DWiw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-102-1640201729937"
  )
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
      "6f",
      "4f",
      "83",
      "301087bfcbf97644fe389791ecc530c42d2e8ba28b1ab32c5d3918081cb6c5b910bebb57f44d7bf9ddd3bb27ede1b3685208e158e45f1daacb558ee6c91609eaae329aaf961a8d300134226772fe9ebe35c92a3a9541f4e0495cbad73fafe7c582092d4f580b087bc80aac520de1470f8da8919f1d0e6a9cc898b9b436596f5fe2fb38e1a0a6d406dbdd66b38c36310cfb6102251d13cc506123d18e6c159528cddada6a51b7153a9a3a2551c3088f8d5c51d70a45e470e278aeef78b737aeef7a337f3e0f664c56248529a86178f70cbcc79011554267b6058f0135962c9e8de737c78135daffa3d1c5a07e54c48b35da9dd3a9ff677047d6cab0ad511d4e400afe8f556120cc44a571f80554a6c9d56d010000",
    ],
    [
      "ETag",
      "9YdXnRHBhj3BK1ceA0/xWw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "d04b7282300000d0bb646d1d24609aeef814153f0882809b8c6040454013bee9f4ee757a84f77ec0394d29e7a4a90b5a812f309e653c4da789a4459d24fced494bb268cbd6ae9d8bad57758e92c6b745efe472afe4619c3df4305ede3b341b5071791d37e1d54aa48121de336cd241a047ad8a7e47d63925c46d8bd6fad05cd886dc0c8e7745449a3e7ce2a33753af186a097e20dd086ac5c356a02e0f73955df68bf06598a119f00bb4bd94f96580471625d6ea840fa8e36b03ed45a6543c58adaecdce1ee371d1f8c36e5356ad7deaebf89b43b99c43ab2885d4416239f7ac78296002e8f0bc31cac9eded862ac613f09f409af149df133a3d33cac0ef1f4bd0bb5c23010000",
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
      "Wed, 22 Dec 2021 19:37:02 GMT",
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
      jobId: "grouparoo-job-103-1640201729937",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85536b4fa34014fd2b64f6ab2d8f568126cdda6d51495a6a29d5dd6c366418061c05069941d398fef7bd0cd6d598ac9f98997bce3de73e78410fac4ad104252c7f6c69b3ff76cf137482a8c439bc3e5c46973fecc2de678be7b9a96fb2d39f9bc5663a0504eb58029775410782b70da162b2db0ef386b7356e381f40a281698c06e6d9d8b00cd3b65c77640351d0225bb2ea01e87752d662a2eb47f161ce795e505c333124bc7c7bd79f2cbd6ef83d2552e81f35759011fa17aadf0b4eb064bc9aeeb6e0a015b489698959011efe51d3e4fc63ee21c3e53007f013231413c2db4a76be2005e155c6f2b65159d1e405299fef0e68eb2dbd79a4115eb4651557b8a4275a8a258ee5bea6da45b85e697e70b10e57b3c85f07f1767ee5ad66c3f97ab95b055bedf6ca0b3d4de2a4a08aab4db573750be002fa291592554a3dea9e3be5d70ef99f07d311405ad03e18dbc619361dc34db2c42699333a4d3283268993d8a7789418c41dd3719a500c3c25aa58b8e2959d9a26c176125bae99c6e39165c6eec8b4e2cc70a8e59824759d041d4ed073c3245d305173c1fa0ea1dbd08fbc380a77c17c1679aa840cb7855cf4c6ba02de7b9450606c182600ff53d7a18b320e6a5dcbfd20f2c2d93cf26fbc7eca4b9a63b2df3ec29c335c080a68dc4003256d563c85a6a160b6f216005653bb3e06059afc7e415ddf3b27efdafe468f60889d65a9be681b857e70a9ec1c1137b86815e4a93fa01a2cdf417de0faf00790b0a97d16b4d979e12fd43f8534a30dadc8d71305b00a7cfdc71db71fc0b0ffa02324dc618188e8544843fb4562aade57b66359a3b18314b8919f6263db3db6adcbd165a425ade46b49fdf643a5bd582bde4010841d0854bb0e7f01379337107f040000",
    ],
    [
      "ETag",
      "kGTGB7l7yfDwC1/Qf5XQDQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-103-1640201729937"
  )
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
      "4fc2400cc7bf4b7d74244370e8121fa6a29200ea180fc61072dc3a1c6eebb8bba948f8eef626a251137db9b5ddaf5dffffdd1a1ed322061f66e97c59a15aedcdd1dcda20445d6546f3a3a44223388046cc994c5ec783a3bb1799debeee5f54d975927b87cbe0e484092d1f3017e0af2149318b35f8f76b28448edc2629abf2625a670e9855698ba328ec0d2f39cf29b6f970dcef07a7fd2e6c9c5d632c8c98d6fc3fda261b0716340b3141858544bb4ba96881d2f4ac4c2df232c386a64a49d450c3f58bb9a2aa148aa8c19546d36d359a5edb3d709b9d83e3e35687c98ca43029150c8f47bc201832220be9996582c780aa43569cd4e71397d3b85662c3de30f2daf5825f018592543cfd932b79df07c1bfe103db5af09d13395585d95117fdebe0b771ece9e7a8f320eafe20b461a77648d41b74475130b8b1dc642bfd746550df286223355a0f9b6efbe8b0e3b9efb69e91b59abfe31b55a10352f0edb84a0df889c8346ede00a38830137b020000",
    ],
    [
      "ETag",
      "fzUM8YxciQz+FulOfm65qA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` > ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-104-1640201729937",
    },
  })
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
      "85535b6f9b3014fe2bc87bd9a42640202189146d59ca56a434690969576d53629c43ea1630b54db7aaca7fdf019a5e54ad7dc2f87c9773f33db9e6f9860c49ccb73725c8bb0f572226070434dde26d50d85fe72c0a2ed4d1f24762fae0fc2dce4f472344f08aa56856a4d052a2940cd470b9686fa5280b2a8568a150cbb6dc96dd73ad8e657b9dc1c0f190a8204da63cbf46faa5d6851a9ae6debcbd15629b022db86a33913dde9bb71db390e20a9856e64b4f136d94f98eebe75430aab9c847cb0566502a902bc8284f318727ea26fef252bbcd69d6de22f89633a08c8932d7555e28c1449ef06d296b5532bc27759ecf0e64e14ffd49644ce6cb59f4714db38abcfe645065ac561254996ae35b383f36d6057a5d52056a6d9c1ff9a16f186b094cc8cd8a6fd6c6c8f86c8c6787c6136e6dfc2a2dcb010c4c83e320326ccc67034af3bcce26a2710a55260f1d0b5e0faa22508d5a4d70e5593d6af7ad419cc41e4bfa4e374e2c88e37eec75a9135b6ce082bb8981224f57ea358be622ef3baed71b50f090c03a0eb0eec0ee76bcee2071fb8cb9b60bdd8479b1477607e48fe41a0eb92a84e24dd7c8791844fe2a0a97b3c938f2eb32128a9d396c92ab8a789ea7c622579655d5fb466dbb2aca05ba55630866911f8e275170e637939fc296b2bbc50dce3ea1a90244534933d0208fc5061b474ee68b200ae6b3f11419f5384ff60845863fef9f08d15d51775ad7dfcaabe7d6fe7bc0194dcb1a71db1c884d76bb83ff2b2ca230987d7f5b625c60b528f31b51b8ed8d02395dfae10569ae42484042cededf0204d781f75fedfe052118df10fa288dffb8744c552e4c42b37c3cabcb6cd8fd8e637b3d5283a57e15733af6bec39546a50819e4faa1a4e605550dab43a57a046110776656b76af70f55661615c3040000",
    ],
    [
      "ETag",
      "Ip1BOcTIYsHUXf/Ee3xpWQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-104-1640201729937"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff2d90c16e82401086df657a85542cd448e2411bb426d428ada7c69805060a0586ee2eb694f8eeced25e7627ff7c3bf36507f82c9a147c888bfcab43d9dfe5a80fa688507595567cb5d428040b508b9cc9f5fde5a5ecd3cd72ed6199ffecf6f1cafd3d2c164ca8e4036b01fe00598155aac07f1fa01135f2b3f3598e1319d37d6b92edee2dd804110735a526d81dc370b90a03b89eae1694144798a1c4264133b2955462a2b7c65689baadd056d4c904158cf0d8c82575ad90443627b633716de7d19d4c27ce6c3a9f3fcc98ac2811baa086e1e32bf01e4d5a54117db32d380cc8b164f16c3c2f1cbbc6e8f48fae7a8d6a2f89172b343b3dcffd33782263a5d956cb0e2d4804ffc773a1c1cf44a5f07a03798daea26d010000",
    ],
    [
      "ETag",
      "F/vMjydGAF5ejgxNPbB4zQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "02ff1dd0c97282300000d07fc9599c10d7f406290aad15b40cd05e322c912594c5009a38fdf73afd84f71e204e5326041d5ace1af002648cf03c9d27d08826a87ccfa3c78d475c4199800d0f03a456d2dfaa6c6d4ba1e445bbd842db37a8d89581435248b28374a2f7dd79ebe59ecf681fe2d1ffac4247afda7850777751bd0dd668060b780bbea78356359cda3822b2ef8f46f7cafc588d7b4a34bdc7ce5810936f58014dfe65924c3f8df99458cb656357dafae38c3b6e8527be2a9cfa47ba366a5179dfd4c85453cb4ea56a11ac5aa326cb28496a71b37237d0d363bc4b33ec5b39980176efca2b13b47cba172b8c67e03f810eb263cf0993c5577605bf7f2a0120af23010000",
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
      "Wed, 22 Dec 2021 19:37:04 GMT",
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
      jobId: "grouparoo-job-105-1640201729937",
    },
  })
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
      "535d6f9b3014fd2bc87b6d12201048a4688d52ba664ac84648bb699a90712ed42dc1149b565d95ffbe8b69ba5695d6276cdf73ee39f7832772cbcb1d999094e7770dd48f9f6e444a4e08289ae3ebdc9d8d9cf31f7faee9cddafdda08b18c73994fa788e02d4bd27d55404f8aa6662027db4d3faf4553d15a881e26ea59a6dbb3468e699b96678fc7430f89128a6cc9cb5ba45f2b55c9c9607014efe742e405d08acb3e13fb97f7c1bd3da86a71034cc9c15bcd01cac8c107aa9f0bc1a8e2a29c6e37e8a0915027b0a7bc400fffa8bbf4f46dee3ea7fb7e8ee07bce8032269a52b5be30051365c6f3a6d659c9e489689faf0e64132c83796c305134fb3229e91e4e8c1d5534518f1518e7d17a652cc2f375b49ac58b75986ce617c16ad69faf97db55b831ae2e822830144d0bd05c636a9cea5b8817d4df8154bcd4ea71fbdc2a3f7768f17e302d01a52574c1c43347d4f2cd719aa51ecbfca19b6626a4a99f7a2e1da6261b3be0ec52a0c8d3a29a454b513aa96bd9aecf12d3cbacc4b1767632f6c04f6c1899e3a1efd943cb258713f2507305675c5642f2ae43e42a5ac4411247db703e8b035d42469b429d75c6da025e7b545860629a1602ff53d7a18d72816a6dcb17611c44b379bcb80cba292f21a7ec71738773ce682101d1b4c6062aa85762874d23e16c159c21584feddb3128c9e4d71369fbde3a79d5f6177a8c436c2d2bfd259b385a845fb49d23e292168d86dc770752a1e56bac0f5d1f7e231237b5cb42be6f83e827e99e22c8a086927d3c5104ebc0c77fdc71fb118cfb8f3a52e11d1788c95685d5d02d12d7f53eb37ddbb15c876870addec56c7f786c5b9ba3cd087b28d57349ddf663a59d58235f4018c41d0875bb0e7f01529d9a357f040000",
    ],
    [
      "ETag",
      "C5A64FXzhajO5JuooLTgsg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-105-1640201729937"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92dd4ec2401085df65bc2d49417e9b7051b42a092042b932846cdb2914db4edddda284f0eece5644a3267ab39d997e339d73ba07784af2081c0892f57389727fb146fd608219aa32d58a1f05e50ac102d4626d4845016e03b7337fd5bbac475eb0d9751ffa7d2654b8c14c80738038c13452e03c1e201719725b486999e5ab2ab340ef0b539cfbb3e1e496f38c22934f16a3913b187970b4ce8d91d06255f1ff685b1e2dd85230c31825e6219a5d0a495b0cf5d0c854222b52ac292a65880a2ab87ab19654164212d5b852abdbad5abdddb41b76bdd3e8f52e3b4ca6140a9d50cef062ce0b82262dd219bdb04c683320ab9015c7d5b9e37212554a4c389cf8ed66b5e057406248325afdc915bcef46f06ff8c04e167ce7444665aecfd4cde8defd6d1c7bfa39eadaf5bd1f84d2ecd419f187636feebbe3a9e19627e983bd463595c4462a341ed6ed66b7d569dbefb65e91b19abfe36859a205a1e0db7197687062912a3cbe01ce6993797b020000",
    ],
    [
      "ETag",
      "bsobejbA7Sxtvm9oEbhv8Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` > ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-106-1640201729937",
    },
  })
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
      "5b",
      "6f",
      "9b",
      "30",
      "14",
      "fe2bc87bd9b4268184101229eaa2946d4cb9b48434da4d893186b9054c6dd329aaf2df770c4d2faad63e617cbecbb9f90e5db322462314b1f4a6a262ffee8a47e804518553b8cdcfae7e2cfbdf66d7f37cba493ec6d964a3f617e331209866499c97196d495e0942e568bd6aa7825725169cb740a865994ecb726cb36b5a83ee70d81b0051d22c99b1e21ae87f942ae5a8d3399ab753ced38ce292c936e1f9c37de7b6db2905bfa244c9ce73cf0ed8c8ce1baea7192758315e8cd72bc8a092546c698e5906393c52e3e8d373ed36c3793b05f02d231413c2ab42e9bc4082f0226169256a5534ba43759e4f0e68e5cdbc69684c97eb45f87e87734dde7d30b034b65b41659529e373b09c1bbb12bcfe6049e5ced87cf502cf307682122ee22d8b77c6d83835268b33e311b7337e55a6d9a31098f9733f342cc827a652b1a2ce26c451467526f71df35f0e4a13b002ad26b81d980eb65c731825d180246eaf1f25268d22371af4712f32c9d0a6761c510c3ca5d56b162e781163d78d6ddbb1fab639ec3a6e3719c6b6133b961d0f93b8eff6acbe69137b800e27e8af608a9e315972c99aaea14de087de360cd68be924f4ea32120c9d396b92d3453ccd5341915bd3d4f5be52db41471907373d067f117ac1641afa975e33f9194d31d9af6e60f609ce2405341638a78a8a398fa171e87cb9f2437fb998cc80518ff3fc889068f4f3ee9110eecbbad3aafe6a2fc7aefd8f804b9c5535e2b639200b1d0e27ff57588581bff8f2ba042ea15a90f90d28d8f646015dacbde03b6aae029a50410bf2f61600b80ebcfd6a8f2f08c0f086c0472af887a52352bb10419be563795d66c376bb7db3db433558a81731cb718e1dd61a5a91e6b450f725352f4837ac0e55f2010441d8",
      "9945ddaac33f8a814b43c3040000",
    ],
    [
      "ETag",
      "mDjZO5JLkMmCWf+dlAWtyQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-106-1640201729937"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff2d90516f823010c7bfcbed551270a291c40775c49118b3b1e91e16632a1c58058eb5658e19bebb57b697f6f2bf5fef7ee90d2eb24a2180a3ccbf1a54ed438ee6d51631eaa6309aaf9a2a8d3000342267f2b493f368b97bfaf52fc3f663f9a3336f555d6733267472c2524070834c62916a083e6f508912f9d9e1a0fa898c99b6b649b4790f5761cc4149a90d36dbf57abe5887d0edbb019ce91863860aab04edc85ad1191313595b2dcaba404753a312d4d0c37d2357d4d44211399c389e3b76bcf1c81dbade64389d3e4e982c28114652c5f0f60d788f21238a98ae6c0b1e03aa2f593cebcf6f8e5d6bb4ff4717ad41fda288176bb43b7d7ff467b0246b65d8d6a806079008fe8f676920c844a1b1bb0330c6c83b6d010000",
    ],
    [
      "ETag",
      "hViAICVDz5k2yWCxsf1Gnw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "00",
      "d0",
      "bb",
      "64",
      "ad4ee463a5bbf057b468a462ba61520816f91388a0d3bbd7e911de7b021ac78cf3a8af735681773051495bc48b6f882e023e828380c6d49ebbf92adfaff1c69baf6e52a507f218b2f9f20d0763e5c36417ef4ad38156c16dc3208c223f7f4825499286eb9ea865013f4d64d43ad9ca969b2a4e11bad7ccd91cef3f283dacadaf42fba8362d5ce3e3e58c9a53869512a6a52abc9beee1201df3b255a8830766df713fb805815cf289b467ca6811d7df7aa1433d554d83157512bb8dd0346071cdd3936246cbf2e15a439f4ff136f10f579c4d21f639afc10cb0b1c93ac6a3ece596554d9b81ff84a89f1af69ad019ed58077eff00de35771f23010000",
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
      "Wed, 22 Dec 2021 19:37:05 GMT",
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
      jobId: "grouparoo-job-107-1640201729937",
    },
  })
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
      "3014fd2bc8fbda2690900791a2354ae99a2d211b9056d33421632ed40dc1149b6c5995ffbe8b69ba5695d64fd8bee7dc73ee8347b2e545422624e6d9430dd5e1c3bd88c9190145337cbd555fc6bffb85fc6c59db3ff6364898dc1fb2e91411bc6149ba2b733897a2ae18c8c926e86495a84b5a09718e89ce2d73746e0d6db3675aa39ee3f447489490a74b5e6c917ea7542927ddee49bc930991e5404b2e3b4cec9edfbbfb5eb7acc43d3025bbaf35bb2823bbefa87ecc05a38a8b62ba09d0412da18a6047798e1efe5193f8e275ee0ea7bb4e86e03d6740191375a11a5f98828922e5595de9ac64f248b4cf170712b84b771e1a4ce4f5ae880aba833323a18a46ea508271e5af57c6c2bb5afbab59b8587b5130bf7657b3ce7cbddcacbcc0b8bd767dd75034ce41738da971a16f1e5e503f01a978a1d5c3e6b9517eead0e2ed601a024a4b6883d1c81c526b6c3a711a8f583aee0fe2d484381ec7a301edc726736cb0931828f2b4a866d14214f6c04a86a693462c1dda91edd84e149b3144307692989a7dabdf1b91e319f9557105975c9642f2b643e4d65f846e14fa1b6f3e0b5d5d424aeb5c5db6c69a025e7a545860649a1602ff53d7b18972816a4dcb175ee8fab379b8b871db292f21a3ec103ce09c539a4b4034adb0810aaa9548b069c49baddc4b04eba97d3d052599fc78244ddf1b272fdafe4c0f71888d65a5bf2408fd85f749db39216e685e6bc8be3d90122ddf617de8faf81391b8a96d16f26de3fadf49fbe4430a1514ecfd89225807deffe34edb8f60dc7fd4910aefb8404c362aac827691b8aef7893dee0d2d734034b8526f62bd81756a5b93a3c9083b28d45349edf663a5ad582d9f4118c41df074bb8e7f01d8f00d147f040000",
    ],
    [
      "ETag",
      "WtK8x3nsJ11kz4kSdcsvyg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-107-1640201729937"
  )
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
      "86",
      "ff",
      "4bfd3ae2500459e287a1a833880a238618438e5b3786db3aef6e1a42f8eff626a25113fd726bbba75ddf77b786a7b488c083799a3c57a8567b099a3b1b8c505799d1fc28a9d0080ea011099324e574be9c466778b488fce36eb57f7f15bc9e9c30a1e5027301de1ae214b34883f7b08642e4c86d92b22a2f6675e6805995b6380e47c1f082f39c229b0f278381df1bf461e3ec1a2361c4ace6ffd1f6b8716049f311c6a8b090687729152d519ac0cad4222f336c68aa94440d355cbf481455a550440dae349a6ea7d16cb7dc03b7d939e8760f3b4c66248549a9607832e605c19011d9885e5926b4195075c88ae3fa7ce1721ad54a6c180cc376ab5ef02ba050928a667f7225efbb10fc1b3eb0ad05df39915355981d753eb8f17f1bc79e7e8e3af3c3fe0f421b766a8784c1757f1cfad7b7967bdc4aefad0cea5b456ca446eb61d36d1d1f75daeebbada764ade6ef784655e880147c3b2e53035e2c328d9b37b58624087b020000",
    ],
    [
      "ETag",
      "occYbjYdDe5hdA89u/WJIw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `date` > ? LIMIT 1",
        types: ["INT64", "DATE"],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-108-1640201729937",
    },
  })
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
      "00000002ff8554eb6f9b3010ff5790f765d39a0408791029eaa2846d6879740969556d5362cc41dd02a6d8b4aaaafcef3b439f9ad67e02ee7e8fbbf3997b72c5f3888c48c893eb0acabb0f9722244704144d30ba5aa6ec22ca4e20e41904f0e37c517c66b7e33122b866499a1529b4a4a84a0672b4ddb4935254052d8568a150cb32872dabef98b6690d6cd7ed0e9028218de73cbf42fa8552851c753a8fe6ed448824055a70d966227b8a776eec4e518a4b604a765e7b76d04676de713d4e05a38a8b7cbcdd60059584720719e529d6f04c8dc22fafb5db9c66ed04c1379c01654c54b9d275a1041379cc93aaac55c9e89ed475be78211b6fee4d0363bada2e838f7b9a69f2fe9341a5b1db9520ab54195fd7ab85b12fd0eb824a907be3ecbbb7f60c635f021365b4e3d1de181bc7c66439c3604415ec8ddf9569760183737fe1078685b5442015cfeb4a021aa6a0ab789896ffef21690255e8d7247703b34fada1e986713860f1b0db0b6313c270180e7ab41b9acc75c08942a0c8535abd66d15ce47dd3756377d88f0696d3032b7619ebf61cd365a1cbba71bf6b86714c9dc8218723725b7205332e0b2179333172b6f6036f17acb7cbe924f0ea36628a539935c5e9265ed6a9b0c99d69ea7edfe8eda0b35ca09b3e027f1978ebc934f04fbde6d4e7905076b7b9c6738f692a01d1b4a41928281722c2c19193d5c60ffcd5723247467d94278f084946bfee9f09c15d514f5ad54fedd5af5b7d029cd2b4aa1137cd0bb1c8e170f47f85991ec39b02366e74cbb45b560f95fe201497bd11213fb7defa9c34a135c45042cede5f0404d789f72fede30542305e21f4910abf71ef98d42eac8466fff037a13b6dd8437b600f87a40697ea9f9c633b8f43d61a5a1132c8d5434bcd05d233ab53957c026112d766e92fbf61f62f55c6bd1bc2040000",
    ],
    [
      "ETag",
      "ONlchdmPebimeTeKYMp+cw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-108-1640201729937"
  )
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
      "c1",
      "6e",
      "82",
      "40",
      "10",
      "86",
      "df657a8504b0d642e24129ad26d458aca7c69815068a050677971a4a7cf7ced25e7627ff7c3bf36507f82a9b0c023895c5a543d9df15a8df4c91a0ea2aadf86aa9510816a0160593ceea69f7730d5fb39dbfbdf861e63959f9bc98cf9950e927d6028201f212ab4c41f03140236ae467c7a31c2732a6fbd624ebcd7bf412251cd4949960b38fe3c5328ee076b85970a65382394a6c5234235b49674cf5dad82a51b715da8a3a99a282111e1b85a4ae1592c8e6c4769d47db7db8773cc79d79be3f993159512a74490dc3fb1df01e4d5a54095dd9165c06e458b2783e9edf1c4f8cd1e11f5df61ad556122f5668764ea7de9f4148c64ab3ad961d5a900afe8f55a921c845a5f0f60bfb07f2b56d010000",
    ],
    [
      "ETag",
      "0HDSzwCMdS9Pq9Cd20diFA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "0002ff1dd04b7282300000d0bb64ad4e1ac868ba4311b1a80591ef868949b00a041b3e0a9ddebd4e8ff0de0fa08c89a6c9daba1012bc8381223263b33334e21e8e27d7f043756389ef48590ee6456d4cd1c7cf5b7c59a6c1b4fbacaabab1bcd53c41a550d10de2a4e1e9f7b1c39178938bda4268943d8d1c6fd79210937550941e72c27a61335dd55a718934bfd6c69c0f1ceef38a6946af7f9d18e23da126bc767bcc5d4a6187050d75f7be72d3e547410e53612fa4ef774d6e0d4fc476f23c2d786e611eb5d5dc862a2bbd24deb4479d413d4a71b75dd9a1f33082d1b18243a8e7eb2d9800f1bc5f9568b2ebcbad614226e03f216b87bb784d2c05554281df3fa8ac7e2f23010000",
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
      "Wed, 22 Dec 2021 19:37:08 GMT",
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
      jobId: "grouparoo-job-109-1640201729937",
    },
  })
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
      "000002ff85536b6f9b3014fd2bc8fbb826401e0522456b94d02d5a4236425a6dd3848c73a16e01536c3a4555fefb2ea6e95a555a3f61fb9e73cfb90f1ec91d2ff76442129edd37501f3edc8a849c115034c3d7af1fd7e6e6cafb995f87c5617153c9f3d57d399b4e11c15b96a44595434f8aa6662027bb6d3fab4553d15a881e26ead996d7b3cf47d6c0b29d81e70d1d244ac8d3152fef907ea3542527a67912ef67426439d08acb3e13c5f3bbf93030ab5adc0253d27cad69a28c34df51fd940b461517e574b745078d843a8682f21c3dfca3ee938bd7b9fb9c16fd0cc10f9c01654c34a56a7d610a26ca94674dadb392c923d13e5f1cc8d65ff9f3c860226f8a322e690167c69e2a1aab4305c665b8591bcbe07213ae67d17213c4dbf9177f3debcf37abdd3ad81ad75ffcd037144d72d05c636a5ce85b8017d4df8354bcd4ea51fbdc2a3f7568f976302d01a52574c1d8b1cea9ed5a5e92260e4bdde138492d48123771c6749858cc1bc1689f00459e16d52c5a8a9225d4b153ca62e68e9d78647b494c872e8dd978c860e4a6c301b5c9f18cfca9b98205979590bceb10b90e97911f47e12e98cf225f9790d226578bce585bc04b8f0a0b8c2dcb46e07fea3ab6512e50ad6df93288fc70368f96577e37e51564941db6f738e794e612104d6b6ca0827a2df6d83412ccd6fe02c17a6adf4e414926bf1e49dbf7d6c98bb63fd3231c626b59e92fd946e132f8aced9c1057346f34e4a13b900a2ddf607de8faf81b91b8a95d16f27de7873f48f714420a3594ecfd89225807deffe34edb8f60dc7fd4910aefb8404cb62aac866e91b8aef789ed0edc8137221a5cab37b191e59ddad6e668334201a57a2aa9db7eacb4136be4330883b803816ed7f12f77f9c38f7f040000",
    ],
    [
      "ETag",
      "K+M/OV9ZlWRmyDhps6LqnA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-109-1640201729937"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92514fc2400cc7bf4b7d744b86c290253e4c4525414418fa600c396edd986eebbcbb6908e1bbdb9b88464df4e5d676bf76fdff776b78caca18025864e9738d6ab597a2b9b1c104759d1bcd8f8a4a8de0001a91329987f14db1efdf766422e25739abc645fb2e3c3e6642cb25160282352419e6b186e07e0da52890db24e57551ce9bcc01b3aa6c711a4d06a30bce0b8a6d3e9a0d87e1c9b00f1b67d7180b23e60dff8fb6878d038fb49860820a4b8976974ad1234a33b032b528aa1c5d4db592a8a1819b17a9a2ba128ac8e58adbf27a6ecb6f7b075eab7bd0eb1d7699cc490a9351c9f06cca0b822123f209bdb24cf019504dc88a93e67ce17216374a6c3818457ebb59f02ba050928ae77f7215efbb14fc1b3eb0ad05df3951505d9a1d753ebc0e7f1bc79e7e8e3a0ba3fe0f421b766a874483abfe340aafc6967bd84a3f5919d463456ca446eb61cb6b1f75babef76eeb2959abf93b8151353a2005df8ecbcc4090885ce3e60d77eb26dd7b020000",
    ],
    [
      "ETag",
      "lAdQm+6V5cfadwcUpPm4WA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `stamp` > ? LIMIT 1",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-110-1640201729937",
    },
  })
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
      "ed",
      "4f",
      "9b",
      "40",
      "18ff57c8edcb96d8f6a0604b13e39a9639b6b66a4b35ba2ded713ce02970953b34cef8bfef01ac2f31d34f907b9edfcbf3764fae441e91010945725d4271f7e952866487806609beda07cbce58e5c9f8efd9cf65f663747ebbb8ea1eefed6186a8508a659b145a4a96050735582eda4921cb0d2ba46c2151cb3469cbdcb5a945cd9ee5badd1e0215a4f144e45708bfd07aa3069dce56bc9d4899a4c03642b5b9cc9ede3b37566753c84be05a755e6b765046753e50dd4f25675ac87c6fb94007a58262051913297a788646e1d7d7dc6dc1b27682c9378203e35c96b9ae7c210597792c92b2a859c9e09ed43e5ffc908537f14681313a5cce82cf6b9655e0f517832963b52a4095a936becd0fa7c67a835a174c815a1ba7dfbdb96718eb02b82ca29588d6c69eb16f0c67637c541acdad8ddf25a55dc0d7893ff503c3443311282df2da4ac0c2142a1b8fedf2df4ea902308d824d70d5a3bbccec53378cc31e8ffb5d278c2984613fec39ac1b52eeda60472130c4e98abd46b15ce676d7ed3b16b866cc4c6e5307586486344226cb757837749c18a2c8e4e46187dc1642c358a88d54a26919399dfb81b70ae6cbd9681878751931c3b68c1b7355112f7d6a2c72456955ef3bb53d54512151ad9a813f0bbcf97014f8275e33f609248cdf2dae71f0314b1560362b58061a8aa98cb071e4e870e107fee16c3841443dcba36d8622835ff7cf80e06e53775ad7df4a6bd7aef5b709272c2deb8c9be68798e4e161e7ff0c813ff516c1707af43e8b857bdda256cb7402d31a98dd8169b729a5e748fe078178000d2f395e7af333d23ccd21860272fef16e60721df8f890b74785c97856a8831baa05ae2257950a2fa0594991d5c537e8bee55aa643eae442bf89d996bbed7bc551314206b97e2ca939aaaa8d75",
      "a8544f4918c44d9af9b3038cfe0399f4abbbd6040000",
    ],
    [
      "ETag",
      "4GU/DsngDzYKUmJCZwSk3Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-110-1640201729937"
  )
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
      "2d90db4e83401086df65bc2c241c6c6b497a611bd446d228da78619a660b03520e83bb8b0d21bcbbb3e8cdeee49f6f67beec0065d1a410c0b9c8bf3b94fd4d8efad51431aaaed28aaf961a8560016a913339cbb7e83a0f8bb2fcc89fef667ed46669795daf9950c917d6028201b202ab5441f03940236ae467a7939c2632a6fbd624bbfd7bf818c61cd4949a607f88a2fb4d14c2781c2db8d039c60c2536099a91ada40b267a676c95a8db0a6d459d4c50c1044f8d5c52d70a49647362bbae63bb8b5bc773dca5b75af94b262b4a842ea861f8f006bc479316554c57b605970139952c9e4de70fc7be313afea39b5ea37a91c48b159a9df3b9f767b02563a5d956cb0e2d4804ffc753a121c844a570fc050515b5bf6d010000",
    ],
    [
      "ETag",
      "+gCe10F6kkWgK8+3Lpfdkw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "82300000d0bb64ad0e2848e92e8c51b4e153a088d930802122880a08249ddebd4eaf51df1dde3748b28cb66ddc5d4b5a8377c093b93ecb66a904a35e12813b3815a1531e1665b19baa2cb78f268ca078e365e046ab26f7fc8ba74a1923a85b9e68b956d46b8110b346cbb3820d9a47a1d1c97722394763793c04f739d9f243bfa934bb0dfa47dc8de24c982476b64c30827512da45443f4ca7da86ed55545a485478d7d30a3a182544ab53c4b86f327378c01b86fbfa3cac2e3835a90f17d442013e6177f04b4dff6a5db617bda74c43cfa1b95c6e724388ddbac776ce15eb73f6f2f2ef8009a0e3ad68681b17cfed0b55d727e0af7edcf11b7dfe3768d2d006fcfc02588f020c19040000",
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
      "Wed, 22 Dec 2021 19:37:10 GMT",
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
      jobId: "grouparoo-job-111-1640201729937",
    },
  })
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
      "14fd2b91f795b6495be843aa4657c25689a62c4941db3445b673130c491c628709a1fef75d3b948190c6a7d8bee79e73ee234fe44e5429991326f2fb169ac74fb7929123029ae6f87a13c9ac9c28ff8bdad122bbf8e96f2fe3bbe562810861b2142deb027a4ab60d0735df45fdbc916d4d1b297b48d4f33cafe79d8cdda1eb4d86b3d96882890a90495477865eeb5acd078383783f97322f80d642f5b92c5fde070fc341ddc85be05a0dde6a0e50460d3e50fd5c484eb590d56217a183564193404945811efea5a6ecf42d775fd0b29f23f84170a09ccbb6d2c61752705965226f1bcb4ae64fc4fa7c7520917fe1af6287cba22daba4a2251c3929d534d18f3538e7e176e3ac83f36db859c6eb6d9044ab6ffe66d95f6d2f769b2072aebff9a1ef68ca0ab0b9cec239b5b7002fa89f82d2a2b2eab17936cacf1d5abf1f8c494069055d3099b827d49bba3396b109cfa6a36396b9c0d8944d8ee988b97c368671ca80629e15b559b4c29ae9e8d8f5dc517232e469329e7196302f85640ac0814d87b349e691fd11f9d3080d6742d55289ae43e43a5cc77e1287bb60b58c7d5b4246db429f75c64c01af3d6a2c30715d0f81ffa96b6fa242a29a69f93a88fd70b98ad7577e37e50bc8297f8cee71ce192d14209a36d8400dcd46a6d834122c37fe1982edd42e0f4145e6bf9e88e9bb71f2aaed2fe9310ed158d6f64ba2385c075fad9d03e28a16ad853c740752a3e51bac0f5def7f231237b56321df777ef883744f2164d040c53f9e28826de0e33feeb0fd08c6fd471da5f18e0bc49551e10d748b246cbdcfd9d3913b9c0e890537fa5d6ceccd0e6d331c86114aa8f47349ddf663a59d58ab5e4018c41d086cbbf67f013fdbf0df7f040000",
    ],
    [
      "ETag",
      "hSofm7sEBsUalfLZEOPTkA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-111-1640201729937"
  )
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
      "0c",
      "c7",
      "bf",
      "4b",
      "7d942543e770247bd8147509ce8db1276396030aa240f1ee702ecbbebb3dd469d4445f8eb6fc5afaff735b78ccab045c88f2eca941b939c850cf4d10a06a0aadf85153a5102c402d3226e75eb0cea2f3d2396ca230b8f013279abd64c321132abec75280bb8534c72251e0de6ea11225725b4c455356ab36b3406f6a535c84c1647ac9794989c9a74bdf1f8d7d0f76d6be31115aac5afe1f6d773b0b1e280a304589558c66975ad203c67a62642a51d6057614353246052ddcbec82435b590441dae746cdbeed8fd5ef7a86b3b4783c1b1c36441b1d039550c2f17bc2068d2a20868cd32a1cf806c43569cb6e73397f3a45562c2c934ecf7da05bf02126392c9ea4faee67def05ff860fecdd82ef9c28a9a9f49ebaf06f46bf8d634f3f479d8f42ef07a1343bb547c2c9b5b70847d733c3ddbd4b1f6f34aa99243652a1f1d0eef64e4f9c7ef7cdd6333256f3775c2d1bb420167c3bae720d6e2a0a85bb57cb7505587b020000",
    ],
    [
      "ETag",
      "QERwgbDm7+ubTRFLd7bPxg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `amount` > ? LIMIT 1",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-112-1640201729937",
    },
  })
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
      "ed",
      "6f",
      "9a",
      "40",
      "18",
      "ff",
      "57",
      "c8edcb965401414113d3194b37168b9d629b655bf4380e7a15387a77b8b48dfffb1ea0f625cde627f1797e2fcfdb3da22d2b623442114bef2a2aee3fdcf2089d20aa700a51357bd0f5c103dbdad5ee6b7e9e6e03f52d998cc78060354be2bccc6847f24a102a47ab653715bc2ab1e0bc03421dd3ec75cc816df40cd3e90d8796034449b364c68a2dd06f942ae548d70fe6dd94f334a3b864b24b78fe1cd7773dbd14fc961225f5b79e3ad848fd88eb69c609568c17e3d5122aa824156b9a6396410d2fd438fafc56bbcb70de4d01bc638462427855a8ba2e9020bc48585a8946158d1e5153e7ab0fb4f466de34d4a6f355107edce0bc266f3e69586aebb5a0b2ca9476be985f689b12bc6eb0a472a35d7ff5169ea66d04255cc46b166fb4b176aa4d8233083e4968bf2ac3b0288467fe851f6a26541353a958d1d412e228a3751d4ff3f2dfafa92660058e6d72ed18036cbac6304a228724aed58f128346911b397d6c450619dad48e238a81a76af586850b5e587662e32189894bb06b458e31741ccb728da467da314e62ec606368b914ed4fd01fc1143d63b2e492b53343d70b3ff4d6e162154c27a1d7b4916098cb595b5cddc4eb3a1534b9368cbadffff4b6afb38c835bbd043f08bdc5641afa575ebbf7194d31b95fdec1e6139c490a682c704e1515173c86c1a1cbf9d20ffd79309901a359e6e50121d1e8e7e30b21bc2f9b49abe6b7f61ad88dff017085b3aa41ecda0f64a2fdfee4df0ae7b3f9e4b846b70f88fd6f00c1adb70ae8fbca5bfc406d6841132a68418e5f01809bc4f1377b783f008617043e52c17f383a226b1722687b7c2c6f4a6cd9ae659a4e1f3560a1dee57aeee030e15aa356a4392dd4534b",
      "edfba907d6a42af90c8224dc4ce0075f20fb174ac29fb5c1040000",
    ],
    [
      "ETag",
      "tLz//6zik4uvHmFgkNtJfA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-112-1640201729937"
  )
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
      "2d90614f83301086ffcbf951480698cd91ec8333c42d99b83117939965e9e04010386c8b0b12febb57f44b7b79efe9dd93f6f099d709f870c9b3af16657793a1de992242d5965af1d550ad102c402d3226e7c556466fe1edf5f9e8bd1c7fba7dbeba86bbc58209157f6025c0ef21cdb14c14f8ef3dd4a2427e763ecb712263ba6b4cb20e5f83a720e2a0a2c404e161b379586e02184e8305055d224c51621da319d9482a30d66b63ab44d594682b6a658c0a46786c6492da4648229b13db715cdb99de4ddc893373e7736fc66449b1d039d50c1ff6c07b3469514674655b70189063c9e2e9787e73ec1aa3d33fbaec34aaad245eacd0ecf4a6f77f068f64ac34db6ad9a205b1e0ff58e51afc54940a875f047a57b26d010000",
    ],
    [
      "ETag",
      "9jPrRWN+wMZ3OZzySiHwNQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "ffedd3cb7282300040d17fc95a9cf8a090ee00454530a020e02603184a545ef2a6d37fafd3dfa8677db7f71b045144ab8ad4f99d66e0130cc11c4da3690825af85a36de43b2fbc227b70229864751e98fde3e1c9beff7153ce5f8246b2b519e34c934915eb4dafd8bb3b6a7549ca6e9caef09b1c39acb978488ff2837a7beccab955ead815ba57665e9b6edc9e54d119ad90170ed26c794c4a3cebb471bb2aaebdb2be98c24c77998c430e2e6343a32d66c81c1cd96562cc65555b6a461be2d359953ab16bdc3ddc905af699bad83a2bc473496af9625a612361e5852c23cbd8a7739887224ae1f4ededdf011340fb823d6945d8ebf6058fd004fcad4feaa1a0afff651a3ce913fcfc0276b919b719040000",
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
      "Wed, 22 Dec 2021 19:37:12 GMT",
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
      jobId: "grouparoo-job-113-1640201729937",
    },
  })
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
      "ff85536b6f9b3014fd2bc8fbda0448425e52b446295da305b212d2aa9b2664cc85ba054cb1e95455f9efbb98a66b5569fd84ed7bce3de73e7826f7bc4cc89cc43c7b68a07efa722762724240d10c5f9737f4fba870bc7233767fe6c977dfbc5956978b052278cb92b4a872e849d1d40ce47cbfeb67b5682a5a0bd1c3443ddb1ef6ecf1c81a58f664309b0d27489490a71b5ede23fd56a94ace4df328decf84c872a015977d268ad777f3716056b5b803a6a4f95ed34419697ea2fa35178c2a2ecac57e870e1a09750405e5397af8474de2d3f7b9fb9c16fd0cc18f9c01654c34a56a7d610a26ca94674dadb392f933d13edf1cc8ceddb8abd060226f8a322a6901274642158dd45305c679b0f58cb57fbe0dbc65b8defad16e75e17acbfe6abbd97bfeceb8be7003d75034ce41738d8571aa6f3e5e503f01a978a9d5c3f6b9557ee9d0fae3605a024a4be882d1c41a537b6acde2349eb0743a74e2d482389ec613870e638bcd46304a62a0c8d3a29a454b513a1366a7d47622b0ed71344ae92c8a077418c52975a8354ee88439e47042fed45cc119979590bceb10b90ed6a11b85c1de5f2d43579790d22657679db1b680b71e15161859968dc0ffd47568a35ca05adbf2b51fbac17215aeafdc6eca1bc8287bda3de09c539a4b4034adb1810a6a4f24d834e22f3df70cc17a6a3f8e4149e6bf9e49dbf7d6c99bb6bfd2431c626b59e92fd985c1daffa6ed1c1157346f34e4b13b900a2ddf627de8faf01b91b8a95d1672b977831bd23d0590420d25fb7ca208d681cfffb8e3f62318f71f75a4c23b2e1093ad0aaba15b24aeeb7d614f8703db728806d7ea436c30181fdbd6e668334201a57a29a9db7eacb4136be42b0883b803be6ed7e12f5af539e97f040000",
    ],
    [
      "ETag",
      "AYaK4m5MnL6EZldKN/YApQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-113-1640201729937"
  )
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
      "65bc2d49cba148132f5051493828d498680859b64329b69dbabb5509e1dd9dad88464df4663b33fd663affdfddc263924710c022899f4a549ba318cd8d0d26a8cbd4687e14946b0407d08898c9d7fb7b6fecdfdd8c5d3ded1c97adfa7021757c72c284962bcc04045b582698461a82872de422436e939496593eaf3207cca6b0c56938e98f2e39cf28b2f9e87630e89e0e7ab0730e8d9130625ef1ff689bed1c58d362824b54984bb4bb148ad6284ddfcad4222b52ac692a95440d155cbd88159585504435aed43caf51f3fca65b77bd76bdd369b4994c490a9350cef0ed9417044346a4137a6199e033a0aa90152fabf399cb495429b1617f14facd6ac1af8042492a9affc915bcef4af06ff8c0f6167ce74446656e0ed4c560dcfd6d1c7bfa39eabc1bf67e10dab0530724ec0f7bd3b03bbcb6dc6c2ffd7463505f2b6223355a0f3db779dc6afbeebbad6764ade6ef044695e880147c3bae1203c152a41a776f2b1960007b020000",
    ],
    [
      "ETag",
      "xZZ1O6WQO0sS98u52Mbcsg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `id` < ? LIMIT 1",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-114-1640201729937",
    },
  })
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
      "53",
      "db",
      "6e",
      "9b",
      "40",
      "10fd15b47d69a5c406e30b58b252cba129922fa98d13556d652fcb8037c12cd95d9cba91ffbd03c4b9b452f3d027969973e69c99d97d20b73c8b489f843cb92b40eedfdd88909c10d034c1e8aff14f2f9aecddbb62e305c145eb3edbec66f783012278c952749ba770aa442119a8fe72d148a428722a8538c542a796d53eb5ba6db3655abd96ebda3d242a48e331cf6e91bed13a57fd66f328de48844852a039570d26b64ff1e6aed5cca5b801a655f3b566136554f30dd5b35430aab9c806cb053a2814c8156c294fd1c333350a3fbeaedde074db4810bce30c2863a2c874e90b4b3091c53c29645595f41f48e5f3c5812cbcb1370a8cd16c390ddeafe9b624af3f185419ab950455a4daf8349f4d8c758e5a1baa40ad8debcfdedc338cb5042664b4e2d1da181867c6707a8ec1f2ef7b619a36c3d0d89ff88161a1930894e659e523a0610aa587c759f97fafa824508d6a7572d533bbd4724c378cc31e8b1dbb13c62684a113f63ad40e4de6b6a11d854091a7cbea158b66227362b3dbee984ec41c376256e4c6566cb2306cd936b8e0003826631d13c8e184dc4baee19cab5c285ecf8b5ccffdc05b05f3e574340cbcaa8d98e24cce6b7365132f7d6a6c72659a65bfffe8ed5066b940b57201fe34f0e6c351e05f79f5cec79050b65fdce1d6639a2a403495740b1ae44444383872395bf8813f9b0ec7c8a81679794428d2fff6f04c08f67935695d7d4bad6ebbd23f02ae685a54885d7d2016391c4efeaf42074bfc4008def19a4dbe2cbdf9575287e61083848cbd7d03105c25de7eabc77783607c39a8a334fee38563aa546112ea8bc7b795c19aedd82db75a1582a5fe33675b4eeb38ddb2465911b690e9c796ea77530eab4a15ea098449bc2f537f7a81d9df50168484b9040000",
    ],
    [
      "ETag",
      "zLxEdMy9quhETTG2wnhvOw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-114-1640201729937"
  )
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
      "c1",
      "6e82401086df657a8544404b24f1505b524da851d44b1b63561c280a0cdd5d6c90f0eeced25e7627ff7c3bf3653bb8e6d5190238e5d94f83b27dca506f4c11a36a0aadf8aaa9520816a0161993d536f5c71fb778e1acaf7ebcfbf4eef7f66d339b31a1926f2c05041da439166705c157079528919f1d8f7298c8986e6b932c57bbf03d8c3928e96c82d53e8a5ee65108fda1b7e042a718539458256846d6922e98e8a5b155a2ac0bb41535324105033c3432494d2d2491cd89ed3863db791e8fdc91e3bbd3a9e733595022744e15c3fb2df01e4d5a1431fdb22d380cc8a164f174386f1c7bc6e8f08fce5b8d6a2d89172b343b2713f7cfe0958c95665b2d1bb42011fc1f8b5c43908a4261ff002b526abb6d010000",
    ],
    [
      "ETag",
      "nSf74MvRH1Pk7RTZ3zzyDQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "0000c0bfe46c1c35a134bd19040b1a54a48a5c321022a20894000374faf73a7dc2ee0f8884904af1a67cc8027c80215a90a998c6b365d0cd469f25a3caf06999c09eb0321d1f7c6d38c21ee9968ad25f3b1563f0daa434f7e93b0cfaae0874645d5b3d94b7e5a9333b2c2337a1f6798fd6390e7dac5b971ac6dae8099a7aaa204861ce70eb7a19b12cd795c9cdb2370ed9b7fd7c6e7f856de65bbb483f20931dbfd3b38d0e9b67da5c7233ac3469f0302fef9e5069337406dabeddc7556e7015d4b0ba21c738ea1c1f93682838fc8c578baeddc1eaba620bf3b913173001b2afb25a2a9ebddc48236402fe13783354f235416554cb1afcfe01fc30932f23010000",
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
      "Wed, 22 Dec 2021 19:37:13 GMT",
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
      jobId: "grouparoo-job-115-1640201729937",
    },
  })
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
      "0002ff85535d6f9b3014fd2bc87b5c9390900612295ab394b6d112b20169b74e13b28da16e01536c52a555fefb2ea6e95a555a9fb07dcfb9e7dc0f9ed01d2f62344184a7f735ab769f6e05414788299cc26b25d29d733dbade253fbf3d9e7ffeba53dbc7e2613a05046f5812e765c63a52d4156572b209ba6925ea125742742051a7df3feef447437360f6edc1786cd940942c4b96bcb803fa8d52a59cf47a07f16e2a449a315c72d9a5227f79ef6d07bdb212b78c2ad97babd90319d9fb40f54b2628565c14d34d000e6ac9aa88e59867e0e11f3526276f737739cebb2980b79c324ca9a80bd5f882145414094feb4a67459327a47dbe3aa0c05dbaf3d0a022abf3222a70ce8e8c182b1ca95dc98c337fbd3216ded9da5fcdc2c5da8b82f985bb9a75e7ebe566e505c6d585ebbb86c224639a6b4c8d137df3e002fa31938a175a3d6c9e1be5e70e2dde0fa62180b4646d30b2cd11ee3be69824c4a689631d93c4648438c43ec61631e978c886316118785a54b370210ac71ed95662e388e07e120d1ddb8ab089e388584e4286491243ebd1fe083d545cb1532e4b2179db2174e52f42370afd8d379f85ae2e21c175a64e5b634d01af3d2a283032cd3e00ff53d7be8972016a4dcb175ee8fab379b8b874db292f598ae92eb887392738930cd0b882062a56ad440c4d43de6ce59e02584fedfb2128d1e4f7136afade3879d5f6177a08436c2c2bfd4541e82fbc736de780b8c459ad21dbf6804ab07c03f581ebfd1f40c2a6b659d08f8debff42ed93cf1256b1827e3c5100ebc0c77fdc61fb010cfb0f3a52c11d1688ca468556ac5d24aeeb7d663b96e5d8fa7f55b852ef62e3f1e0d0b626479391e5ac50cf25b5db0f95b662b57c01411076c0d3eddaff05754d950d7f040000",
    ],
    [
      "ETag",
      "rogy8Z6ZyfXKzG+Bytvznw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-115-1640201729937"
  )
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
      "4b7d1d91210c5dc203202ac94085f1a221e4b815186cebbcbba984f0dded4d44a326fa726bbb5fbbfeffbb1d6ce22c021fe6f1f2a940b53d59a2b9b7c108759118cd8f9c328de0001ab16472b5c91ea449bae7c1e4f47533f0c6bdc670fed26a31a1e50a5301fe0e1631269106ff7107994891db2425459acdcacc01b3cd6d711c8efac36bce538a6c3e9c0441bb13f460ef1c1b2361c4ace4ffd136dd3bb0a6f90817a830936877c915ad519abe95a9459a2758d15428891a4ab87cb15454e4421155b85271dd46c5f5ead55ad56dd62e2ece9a4c2624858929637832e605c19011c9885e5826780ca83264c58bf27ce6721c954a6cd81f865ebd5cf02ba050928a667f7239efbb12fc1b3eb08305df3991529199237515dcb67f1bc79e7e8eba6c87bd1f8436ecd41109fb83de386c0fee2c373d48ef6c0dea3b456ca446eba15bad9f379a5ef5ddd62e59abf93bbe51053a2005df8e9bd880bf1089c6fd1b1f9c0f9c7b020000",
    ],
    [
      "ETag",
      "hknZctlC8LU/xkM6SE5Nbw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` < ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-116-1640201729937",
    },
  })
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
      "8553596f9b4010fe2b68fbd2aab10d3e005bb252cba12d9583538c13456d652fcb40360116b34baa28f27fef00710e454d9e8c77be63ce7b72c3f3884c48c8935d05e5dd876b119223028a26f81a8f2ee9cefb3ce2d6773d0b8d1f8bdd0983643a4504af599266450a1d29aa92819cac57dda41455414b213a28d4310cb3639843bdaf1b567f3c1e58489490c60b9edf20fd4aa9424e7abd83793711224981165c7699c81edf7bb7fd5e518a6b604af65e7af6d046f6de713d4e05a38a8b7cba5e61069584720319e529e6f0448dc22f2fb5bb9c66dd04c1b79c01654c54b9aaf3420926f2982755d9a892c93d69f27cf64156cec29907da7cb9f6828f5b9ad5e4ed278d4a6db3294156a9d2befacb536d5ba0d7159520b7dac577c777346d5b021365b4e1d1569b6ac7dacc3bd19e705bed77a5eb038681857bea069a81f9442015cf9b6c021aa65067f2d031f7f5a06a0255a8d50637966e52c3d6c7611c5a2cb607a330d6210cedd01ad141a8b3f1108651081479aa566f583417797f68b328ee4364502b8cfad1c004cb8ed8c8e883a587109be3d004dd1891fd11f95b7205275c1642f2b66be4c277036713f86b6f3e0b9ca68c9862674edae4ea229ee7a9b0c88daed7f5be51dbbe8e72816ef5185c2f70fcd93c70cf9d76f20b4828bb5bed70f6314d25209a96340305e5a988b071e46cb9720377e9cd16c868c67976404832f975ff4408ee8aa6d3aaf9adbdcc61e37f009cd3b46a10b7ed0731c87e7ff47f8555e0bbdeb7b7256605568b327f1085dbde2a909f6bc7bf24ed930f319490b3f7b700c14de0fdab3d5c1082f186d0472afc8f4bc764edc24a68978f674d992ddb1e0c4dbbb979454bf52a660ffb870ed71ab5226490ab8792da0baa1bd6842af908c220ee8cd7b46aff0fb741e999c3040000",
    ],
    [
      "ETag",
      "f5YaqN+5i7H0mb1JLqDceg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-116-1640201729937"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff2d90614f83301086ffcbf95188eb1c5b46b20fb22c3ac545d1658966593a3890091c6b8b0b21fc77afe897f6f2ded3bb27ede03baf12f0e19867e706557b95a179b54584ba298ce6aba64a23388046664c3ee5bbdde3b5b87c2ce71e9e6f442093d9f365b16042c75f584af03b48732c120dfe6707952c919f1d0e6a98c898696b9bac37efabfb55c44149890d36db30bc0bc215f4fbde81131d234c516115a31d592b3a616cd6d656cbb22ed0d5d4a818350cf0d0c81435b554442e27ae1053574c27a3f148ccc6f3f9ed8cc982626972aa18debe01ef31646411d1856d4130a08692c5d3e1fce178648df6ff68d01ad42f8a78b146bbd3f3267f064bb256866d8d6ad08158f27f3ce406fc54161afb5f603571d46d010000",
    ],
    [
      "ETag",
      "KiWWJ+1wZC95eq/1Bad7Mw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "000000000002ffedd34b7282300000d0bbb0b64c102dd89d10451a158588e086e11344c0402040a5d3bbd7e935eabbc3fb16c238266d1bf0aa2054f8101ee17421c66204965e0f467c4027153bf8cd8a91bd3adf0a7f4f3bc981400fdd5c9db3cb4319aaee3204925286265a9906f06d9dc97d71fa6c239e536ace0e1edc33a977db15ad14a843bc435b770bfa697966563ac4d05aa334c89248bb66c09113ce8c295a971b4d47393392d43b6b5692f2f13e93744c557e0fb2a0037d5417f510625e668a935bd8a49eb1e98fd7cebf64a1edbe235b55469f4772b6738e03c85935426ee21a2ffd0692ab2abebcfc3bc244205ff5ad216d707b6e97e78bc544f8ab1ff0474d9eff351236a4117e7e017b41a6fc19040000",
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
      "Wed, 22 Dec 2021 19:37:15 GMT",
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
      jobId: "grouparoo-job-117-1640201729937",
    },
  })
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
      "6b6f9b3014fd2bc8fbda24401e2491a2354ae98a9490959056d33421e35ca85b822936a9aa2aff7dd7a6e95a555a3f61fb9e73cfb90f5ec8032f77644a529e3f36503f7fbb17293923a0688eafe1ea108c25e38e1b3ac3cbab6b1fdca5f3349b21826b96a4fbaa808e144dcd404eb79b6e5e8ba6a2b5101d4cd4711cafe38c06b66b3b9e3b99f43d244a28b2252f1f907ea75425a7bdde49bc9b0b9117402b2ebb4cecdfde7b07b757d5e21e9892bd8f9a3d9491bd2f54bf178251c54539db6ed04123a14e604f79811efe5177e9f9c7dc5d4ef7dd1cc107ce8032269a52695f98828932e379539bac64fa428ccf7707b2f197fe22b698289a7d9994740f67d68e2a9aa8e70aaccb68bdb282f0721dade671b00e93cde2ca5fcdbb8bf572bb0a37d6ed951ff996a26901866bcdac73730bf182fa3b908a97463dd6cf5af9b543c1e7c168024a4b688389678fa833b62769967a2c1bf7876966439a8e536f48fba9cd260318ec52a0c833a286454b51bac309b3c7d928194cbc613218b97642d3cc4dec61dfeb8ffbd9007392e31979aab9820b2e2b2179db21721b05b19fc4d1365ccc63df9490d1a65017ad315dc07b8f0a0b4c6cdb41e07fea3aea2817a8a65b1e84b11fcd177170e3b7535e424ed9f3e611e79cd14202a2698d0d5450afc40ef482cf57fe0582cdd47e9e82924c7fbf10dd77ede45ddbdfe8310e515b56e64b367114843f8c9d13e286168d811cda03a9d0f21dd687ae8f7f10899bda6621d75b3ffa45daa70832a8a1645f4f14c126f0f51f77da7e04e3fea38e5478c7056252abb01ada45e2a6de57366ec570e01203aed5a7d8c8eb9fdaa673e88cb08752bd96d46e3f56da8a35f20d8441dc81d0b4ebf81709651de67f040000",
    ],
    [
      "ETag",
      "NMvI8sci12N15FHQEe2L1w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-117-1640201729937"
  )
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
      "02ff8d926f4fc2400cc6bf4b7de94898207f96f8021495088830121243c8b17563b8ade3ee2601c277b737118d9ae89b5bdbfddaf579767b7889521f1c5844e13a47b93d0b513f9960842a8fb5e24746a942b000b508997c98363a6bb538df057963da6fec427751e96faeae9850de121301ce1e8208635f81f3bc875424c86d1ec57992ce8bcc02bdcd4c71ec8eba833bce13f24d3e98f47aad76af0307ebd4e80b2de605ff8fb6d9c182152d4618a0c4d443b34b2669859eee1a994a24598c2545b9f4504101172f424979262451892b25dbae97ec5ab57c51b6eb17cd66a5ce644c9ed011a50c4fc6bc2068d2221ed18665428d015984ac3828ce572e477ea1c484dd815bab160b7e05247a24fdf99f5cc6fb2e05ff860fec68c1774e2494a7fa44ddf61e5bbf8d634f3f47ddb4dcce0f426976ea84b8dd7e67ecb6fa43c3cd8ed2db5b8d6a28898d54683cb4cbd5c665bd567eb7f59a8cd5fc1d47cb1c2df004df8efb4883138858e1e10d38ab3da07b020000",
    ],
    [
      "ETag",
      "KX8Eqsb+zfu8XM8zgTb3Mw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` < ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-118-1640201729937",
    },
  })
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
      "5b6f9b3014fe2bc87bd9a426e19690448aba2c651b52423a425a55db941863a85bc0d436a9a22aff7d07687a51b5f609e3f35dcecd0fe89615311aa388a5771515fb4f373c4227882a9cc2edceb8ea3bdf5424859bedfc3c5cdc8c0cf37e320104ab5912e765463b92578250395eafbaa9e0558905e71d10ea18c6b0630c6cddd40dc71c8d2c07889266c99c15b740bf56aa94e35eef68de4d394f338a4b26bb84e74ff7bd9dd92b05bfa144c9de6bcf1ed8c8de07aea7192758315e4cd62bc8a092546c688e5906393c53e3e8eb6bed2ec3793705f08e118a09e155a1eabc4082f0226169251a55347e404d9e2f0e68e5cedd59a8cd966b3ffcbcc5794dde7ed1b0d4361b41659529ed7bb05c68db12bcaeb1a472ab5dfe740357d3b682122ee20d8bb7da443bd5a6fe99f68cdb6a7f2a5db70804e6dec20b3503f289a954ac68b2097194d13a93c78e796f075513b002ad36b871f4013686fa284a22872443ab1f253a8da261e4f4b115e96464533b8e28069eaad51b162e78810de2508c236bd437091e9a7048ecc834faa63eb04dd34afa31366cc7418713742f98a2674c965cb2b66be832f0427713066b7f360ddda68c044367cedae4ea225ee6a9a0c88daed7f5be53dba18e320e6ef5183c3f7483e92cf42edc76f2739a62b25fddc1ec139c490a682c704e15150b1e43e3d0f972e585ded29fce81d18cf3fc889068fcfbe19910eecba6d3aaf9d65e03bbf13f022e705635885d7b40063a1c4efeafb00a03cffff1be042ea15a90f90b28d8f65601fd5abbc1156aaf029a50410bf2f11600b8097cfc6a8f2f08c0f086c0472af887a523b2762182b6cbc7f2a6cc963db406d6b079f30a0bf526d637ec63876b8d5a91e6b4508f25b52fa86e5813aae4130882b0337ed3aac33f5814cd37c3040000",
    ],
    [
      "ETag",
      "v1Y57BtbsrElvNmTMj912w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-118-1640201729937"
  )
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
      "90d16e82401045ff65fa2a09d8462b890fda90d6d6188b3569da18b3c2805860e8eea0a1847f7716fbb2337bf7ecdc9b69e1272b63f0e190a5bf35eae62e457eb74d88a6ced948a9a83408034056a990f5d1733733f3f9fac571f077de1e936afd76994e8530d1110b057e0b4986796cc0ff6ea15405cab7fd5ef71305e3a6b2ca62f5113c07a10805c556586d97cbd97c1940b7eb0670a24388096a2c23b4232b4d278c7861d31a5554393a866a1da1811eee1f524d75a53491238ae3798f8e377a7087ae371e4e26f76321738a1467540abcdd80f830b1ca43ba485af004d07d2bc193fe3c8b3cb28976ffe8bc61346b4d626cd07aba37ff27b29958b2b2ae710091926dbc647cbb77572c712dbc6a010000",
    ],
    [
      "ETag",
      "uh10SAsXJZtdEzvUhfpPKw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "300000d0bb64ad0e4614e82e7caa22457ea261c3484848062914b07c3abd7b9d1ee1bd1f702784765ddad725fd046f60ba436d455699846edfd21c79991b29845fceefba8cd6c9a380467f3a0b5796153f6ad2c964fc6189e163c4c230b1232d7d9c910a8dda334a3c9e1384d483ec0d9b0b7a5a84795da62a27734f79c163f88482cb81adc6580f4207779059ebd4ad5b1663758788cb6611935c3186f2d8c05054e5745579b3d596a8b03cf38aaa9ad4780a8a102338d15befdf585c1c45ef5728ce13bb8af6869dec54f6b519f5421e827ade1e72ad779dd09b7db000746c444bbb54bcdc9bada62dc07f42da4f0d7d4de8f4ded216fcfe01cb0edd3423010000",
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
      "Wed, 22 Dec 2021 19:37:17 GMT",
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
      jobId: "grouparoo-job-119-1640201729937",
    },
  })
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
      "85535d6fda3014fd2b91f75a20218100125a11a42d52095b08edaa698a1c7393ba0d71163b4c55c57fdfb553ba5695d6a7d8bee7dc73ee479ec9232f776442529eff6ea07efaf22052724640d11c5f67f925dcfcf03914073128624fcc1777fdd9748a08ae5992eeab023a5234350339d96eba792d9a8ad642743051c771c61d67e8d97ddbf1fbe3b1eb235142915df3f211e9f74a5572d2eb9dc4bbb9107901b4e2b2cbc4fef5bd77e8f7aa5a3c0053b2f75eb38732b2f789ead74230aab828a7db0d3a6824d409ec292fd0c33fea2e3d7f9fbbcbe9be9b23f8c01950c644532aed0b533051663c6f6a93954c9e89f1f9e64036c175308f2d268a665f2625ddc399b5a38a26eaa902eb225aafac6578b18e56b378b90e93cdfc2a58cdbaf3f5f576156eacdbab200a2c45d3020cd79a5ae7e616e205f57720152f8d7aac9fb5f24b87961f07a309282da10d26be3da4cec81ea759eab36ce40ed2cc86341da5fe80baa9cdc61e78bb1428f28ca861d1529463d74d3dd7cf1218d161e281632774e83989d3cf46f68081677b941ccfc89f9a2b58705909c9db0e91db681907491c6dc3f92c0e4c09196d0ab5688de902de7a54586062db0e02ff53d75147b94035ddf2651807d16c1e2f6f8276cad79053f6b4f98d73ce682101d1b4c6062aa85762874d23e16c152c106ca6f6ed149464f2f399e8be6b276fdafe4a8f7188dab2325fb289a3657869ec9c1037b4680ce4d01e488596efb13e747dfc8548dcd4360bf9be0da23bd23e4590410d25fb7ca2083681cfffb8d3f62318f71f75a4c23b2e10935a85d5d02e1237f5beb047aedf1feaf623b8561f62ae6f9fdaa673e88cb08752bd94d46e3f56da8a35f2158441dc81d0b4ebf81763feca2f7f040000",
    ],
    [
      "ETag",
      "AgGeVX7ielvo5lT4oCDY2A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-119-1640201729937"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92614f83400c86ff4bfdca92312738123f309d3a45d48d99a831cb0dca8602c5bb433397fd777ba8d3a8897e39daf2b4f47db9153c6465021eccb2f9638d72b935477d698211aa3ad78a1f15950ac102d462cea4d8ed5cbf146e70e396a7e1c9f2f12ab80a6d7f6f8f09152fb010e0ad20cd304f1478b72b284581dc16535e17e5b4c92cd0cbca14c7d168181e715e5062f27012047e3f18c0dada3426428b69c3ffa3ed6e6dc13dcd4698a2c43246b34b25e91e633d34329528aa1c5b8a6a19a382066e5ecc25d59590442daeb46cbbd7b29d6ebbd3b6dd4eafb7ed3299532c744625c393312f089ab4c847f4cc32c1614036212b4e9bf389cb59d22831e1308c9c6eb3e05740624c3299fec955bcef42f06ff8c0de2df8ce8982ea526fa8c3e0dcff6d1c7bfa39eac08f063f08a5d9a90d120dcf06e3c83fbb30dcddbbf4fe52a3ba90c4462a341edaedeeee8eebb4df6cdd2763357fc7d3b2460b62c1b7e338d3e0a52257b87e053de3b44b7b020000",
    ],
    [
      "ETag",
      "a82Yzm7LZ7nKNJyqVLVN1A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `date` < ? LIMIT 1",
        types: ["INT64", "DATE"],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-120-1640201729937",
    },
  })
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
      "535b6fda3014fe2b91f7b249855c208420a18e41d645a2d04168356d13388e93ba4de2d4763aa18affbee3a4acadaab54f8473becbb9f901ddb232412314b3ecaea662ffe186c7e8045185331d4d6ec57ac94c72669e79d11dfeb29f042a1b8f01c1344be2a2ca6947f25a102a479b753713bcaeb0e0bc03421ddbb13af6a06f3996ed39bedff38028699ece59790bf46ba52a3932cda37937e33ccb29ae98ec125efc8b9bf78e59097e438992e64b4f136ca4f98eeb69ce09568c97e3cd1a2aa825155b5a6096430d4fd424fefc52bbcb70d1cd007ccf08c584f0ba54ba2e9020bc4c59568b46158d1e5053e7b30fb40ee6c13432a6cbcd22fab8c38526ef3e19581adbada0b2ce95f175b53c377615785d6349e5ceb8fa16ac02c3d8094ab848b62cd91963e3d4982c66104cb0a23be3576d593d02c179781e46860db524542a5636954438cea9aee2715ae1eb25690256e0d726b79e35c0f6d0f2e334f6483aecb9716ad1381ec69e8b7bb145fc3eed2731c5c0535abd61e1929703ea24c4f2b0ef52dcf7d3840cfba91b3b89e5bb9e9f7aaeeffa963be825e87082fe08a6e88cc98a4bd64e0c5dadc228d846abcd623a8982a68d14c354666d71ba89e7752a68726b59badf377a3be82ce3e0a657102ea260359946e165d06e7d4e334cf6eb3bd87b8a7349018d052ea8a2e29c27303874b15c8751b85c4ce6c068567971444834faf9f04488f6553369d5fc6aaf41bff13f022e715e3788fbf603d9e87038f9bfc24c8fe14d01072eba63391ddb05a5df0085636f45d0f74db0fa81dad08aa654d092bc7f08006e12ef3fdae30302303c21f0910afec3dd11a95d88a0edfdb1a2e9b4650f7b43bbe7a2062cd4ab9ce30d8e43d61a5a9116b4548f2db50f48cfac49d5f21f089270368b707106d9bf603d6beec2040000",
    ],
    [
      "ETag",
      "bdkrSOi/cG/G7TqaByAEtg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-120-1640201729937"
  )
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
      "c1",
      "4e",
      "c2",
      "40",
      "10",
      "86",
      "df",
      "65",
      "bcb6b12d22b6090750a2248460b5170c214b99d6e2b65377b69a4a787767ab97ddc93fdfce7cd9337c54cd11123854e56787a6bf2ad13ebb2245eeb465b95a6a18c103b4aa14f22e78d86cafe987d3b8e6adc974d472379b4e85e0fc1d6b05c9198a0af59121793b43a36a9467fbbd19260a66fbd625cbf5ebe271914a50d3d105eb6cb59acd570bb8ec2e1e9ce8906281069b1cddc8d6d00973bb74b6acea56a3cfd4991c190678689486ba5619225f123f8c023fbcbd09a2209c44713c9a08a92957b6a246e0ec05648f25ab744adf620ba100662845bc18ce2f8947ce68f78fce7b8bbc31248b19ddcef138fa33b8276765c5d69a0e3dc895fcc7536521299466bcfc0254282c066d010000",
    ],
    [
      "ETag",
      "80DPZ/ozsR9msZrUl2psuA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "edd35d6e82300000e0bbf4590c0e95b037cdf81d858880e00b815a2888e05aa88565779fd935e67787ef1be40861c6b2a1bfe20ebc83297fd3966859c8bb84cb73089115a09d7b0c0c69a84ee4623567a164acd24d73970c913b5eb3b02cd0f415187eaca5c37a34f32ef2a81907a4df423c1e13df18adc0ed8c1b9165c80e23eb2c95c3551ab2b6b28dbe90f7364dda4d5597783a6fccd691662717fac136a43ebdac15e2f7da2c6e96cad232f02e68f6854f2bc6ef0a27ad67e75bf3811c8f1622ae75b52e3f52a612ed44780463586e957ad54947b7215034c5e83c24a93c7d165c5fbebcfc3b6001b0b8d714b3ac7e6e57369ab6007ff5b361bae3e7ff3dce29a6e0e7170ed2463419040000",
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
      "Wed, 22 Dec 2021 19:37:18 GMT",
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
      jobId: "grouparoo-job-121-1640201729937",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6f9b3014fd2bc8fbb82601f2208914ad514a57a48674405a55d3848cb950b704536c3a6555fefb2ea6e9da4d5a3f61fb9e73cfb90f9ec9032f53322709cf1f1ba8f79fee45424e08289ae3ebedd5f0d11affbadf06377b1a7e1e7b75b0bfce170b44f09625e9ae2aa02745533390f36dd8cf6bd154b416a287897a966df5acc9c8b44dcbb167b3a18344094576c9cb07a4df2955c9f9607014efe742e405d08acb3e13bbd7f7c1933da86a710f4cc9c17bcd01cac8c107aa5f0ac1a8e2a25c6c4374d048a863d8515ea0873fd434397d9fbbcfe9ae9f23f88933a08c89a654ad2f4cc14499f1bca97556327f26dae79b0309dd4b7715194c14cdae8c4bba831323a58ac66a5f81711e6cd686e79f6f82f532f2367e1cae2edcf5b2bfda5c6ed77e68dc5cb8816b289a14a0b9c6c238d5371f2fa89f8254bcd4ea51fbdc2abf74c8fb77302d01a52574c1d83127d49a9ab3244b1c964d87e324332149a68933a6c3c464b3118cd20428f2b4a866d152946962a6f6780ab13561341e596327a613278b33076ccb61264c324a0e27e467cd159c715909c9bb0e919bc08bdc380ab6fe6a19b9ba848c36853aeb8cb505bcf5a8b0c0d8342d04fea7ae431be502d5da967b7ee406cb55e45dbbdd942f21a76c1f3ee29c335a484034adb1810aeab548b169c45faedd3304eba95d1d8392ccbf3f93b6efad93376d7fa54738c4d6b2d25f124681e77fd5768e886b5a341af2d41d488596efb03e747df88148dcd42e0bf9b675835bd23d0590410d25fb78a208d6818fffb8e3f62318f71f75a4c23b2e1093ad0aaba15b24aeeb7d614f87d3996d130daed5dfb199698d8f6d6b73b4196107a57a29a9db7eacb4136be42b0883b803be6ed7e137e29d6c057f040000",
    ],
    [
      "ETag",
      "YP3q15zjURWyaS+5IrRyVg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-121-1640201729937"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92db4ec2401086df65bc6d138ac8a1091755510807b114bd3086aced0085b65377b71224bcbbb315d1a889de6c67a6df4ce7ffbb3b58c759042e3cc58be702e5f66481fad6043eaa22d18a1f39650ac102d462c1641234eefafdf5fdf4cc6fbe76a75eb4ad2ec5a6dd6642854b4c05b83b98c798440adc871d6422456e0b2929d26c566616e86d6e8a93c0ef8dae394f2932f9683a1878e7830eecad636324b49895fc3fda1ef716ace8c9c7394acc4234bbe4925618ea9e91a9449a27682b2a64880a4ab87cb19054e44212d95cb19daa633bf55aa55a711ad556ebb4c16442a1d031650c4f27bc2068d222f169c332a1ce802c43563c2fcf172ec751a9c484bd5150af950b7e05248624a3d99f5ccefb2e05ff860fec60c1774ea45464fa485d0d6ebcdfc6b1a79fa32ebda0f383509a9d3a22416fd89904de706cb8c783f4f3ad463596c4462a341e3a955af3ac51afbcdb7a41c66afe8eab65811684826f4737d6e0ce45a270ff06f74f77cf7b020000",
    ],
    [
      "ETag",
      "lT7VKKkWU5R8zHUAdy2haw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `stamp` < ? LIMIT 1",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-122-1640201729937",
    },
  })
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
      "ff85545b6fa24014fe2b64f66537a93a20a29898aeabec2e1b45abd8666fd16118e8b4c0506668631afffb1ea0f69266db27c99cf35dcecd7b74cdb3100d51c0e39b9215fb0f57224027882912c3eb7e1f1877a6f0ecb9a72f075f7ed0cd345d9c8d4690c12b9424699eb096146541991c6ed6edb810654e0a215a40d4d20da3a55b2636b0de376cbbdb07a0644934e3d935c02f95cae5b0d3398ab76321e284919ccb3615e9e37be7d6e8e485b86254c9ce4bcd0ec8c8ce3baaa789a04471918d366b70504a566c594a78021e9ea061f0f925779b93b41d43f22da78c502aca4c55be80828a2ce27159d4ac68788f6a9fcf3ed0da9939135f9b2c369eff7147d20abcfba411a96db7059365a2b4afabc55cdbe5a0754924933bede2bbb372346d57302a8a70cbc39d36d24eb5b1378547a9c0dc4efb5362dca5f03a73e7aeafe960266452f1acb6e2932061958d8776b9afa754018802c126b8ed638be8036c0751d0a7d1a0db0b22cc826010f47ba41b606a9bcc0c034600a72af61a453291d9916d5821d1b1ae0fa86e624270cfe819c4ec1996a11b26c1968d075d0b1d4ed05dc1159b72990bc99b96a18b95eb3b5b7fb5f12663dfa9cb8808b465da98ab8a78ee5341915b8cab7adfa8ed5045b900b56a06aee73babf1c477cf9d66ec331613ba5fdfc0e023924806d9a4202953ac988b101a87968bb5ebbb0b6f3c03443dcbe53143a2e1effb2780bfcfeb4eabfab7d2b2cc5aff98704e92b2ceb86d3e908e0e8793ff33f8eedc59fbe3f9f26d1603f6ba8561c37bbe6e0cf5ee5037db18e35f40fe178070000d2f3adb38ab9fa8795ab188152ca3efef0624d781f70ff97854900c67053ab0a18ac32a5259a9d082352bc9d3baf8063de8da7dabfe1b50a450af6236ee1ffb5e71548c2c65997a28a939aaaa8d75a8948f4910844df25cef1b44ff010851cb2fd6040000",
    ],
    [
      "ETag",
      "yyb2w4oN9MN1P8BJcUDmOQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-122-1640201729937"
  )
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
      "614f83301086ffcbf915e260ce6524fb301475c94214c5c49865e9e040107ad8160d21fc77afe897f6f2ded3bb271de1b392390470aecaaf1ed57051a279b24582ba6f8ce6ab23a9111c40234a26e34b51c9a17cadc3bbd48be56d182de4db6ebb6542671fd80a0846282a6c720dc1fb0852b4c8cf4e27354f64cc0c9d4df6f14b741f251cb494db204e0f875d7888603a4e0ed4744eb0408532433bb253546366f6d6568bb66bd0d5d4ab0c35ccf0dc2815f59d50442e27aee7fbae777db5f017dedadf6c966b261bca84a948329c3e03ef31644493d00fdb82c7809a4b162fe6f39be3a5353afea3e160503f2ae2c51aedced5caff33b8216b65d8d6a81e1dc804ffc74365202844a371fa053724201b6d010000",
    ],
    [
      "ETag",
      "N/ainygVjBFU1NnDBE0nYA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "08000000000002ff1dd0cb7282301400d07fc95a1dc243a43b6c2502a5a2323cdc64305e1022c84444a2d37fafd34f38e78572c6e076a3fd95438b3e90cc556bc66647c54e07e51905ca280e64a020b55ddfa9262fe47a1878957b72735e3daa6c8836448a2c39152bebacf9114ec3705ad6621cb5f6697ab1e2c6d848c83c3dcd093ef6b55100d9b23524dc2ebef84a48470dee41e39aec02422ff061f1cd9bab66ad554b294955d47a706df5328b1ddf65da59d7dd7a43b011994140b9694ceb3d2c9b237d84801dda74e5a7f1730893ed6591f96d9ae228f7bb7d2bc27d667b730f8b9d63df959af90c4d108c5d25e046abb75b332c6b82fe13682f3b784f2c211720d0ef1ff4733a2323010000",
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
      "Wed, 22 Dec 2021 19:37:20 GMT",
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
      jobId: "grouparoo-job-123-1640201729937",
    },
  })
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
      "da2440202f295aa394ae4809d90849354d1332ce85ba05ccb0695455f9efbb98a66b5569fd84ed7bce3de73e78260fbc3c90194978f6a781fae9cbbd48c8050145337cad8e8b62e7deae8ea6b94e8e7cb5778bfd75369f2382b72c498b2a879e144dcd40ce76db7e568ba6a2b5103d4cd4b3ec61cf1a39a66d5a637b3a1d8e9128214f57bc7c40fa9d52959c0d0667f17e26449603adb8ec3351bcbe0f1eed41558b7b604a0ede6b0e50460e3e51fd9a0b461517e57cb745078d843a8682f21c3dfca31e92cbf7b9fb9c16fd0cc18f9c01654c34a56a7d610a26ca94674dadb392d933d13edf1cc8d65b79cbc860226f8a322e690117c6812a1aaba70a8ceb70b336fce07a13ae1791bf09e2edf2c65b2ffacbcd6ab70eb6c6ed8d177a86a2490e9a6bcc8d4b7d0bf082fa07908a975a3d6a9f5be5970ef91f07d312505a42178cc7e6885a13739aa4c998a593a19ba42624c92419bb7498986cea80734880224f8b6a162d45e99a291bdace38b660348a9d649ac6743274f0e432db9d8e6dcba6e474418e355770c5652524ef3a446e433ff2e228dc05cb45e4e91252dae4eaaa33d616f0d6a3c20263d3b410f89fba4e6d940b546b5bee0791172e9691bff7ba29af20a3ec69fb07e79cd25c02a2698d0d5450afc5019b4682c5dabb42b09edaf7735092d9af67d2f6bd75f2a6edaff40887d85a56fa4bb651e807dfb49d33624ff346431ebb03a9d0f21dd687ae4fbf11899bda65213f765ef893744f21a45043c93e9f288275e0f33feebcfd08c6fd471da9f08e0bc464abc26ae81689eb7a5fd813c79cd82ed1e05a7d884d47d6b96d6d8e362314",
      "50aa9792baedc74a3bb146be8230883b10e8769dfe02729f63aa7f040000",
    ],
    [
      "ETag",
      "pwAmU5WLw00MbwiLV5mVFg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-123-1640201729937"
  )
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
      "400c86ff4bfd3a22300459c2878120240305466234841c5b81c9b6cebb9b0609ffddde44346aa25f6e6df7b4ebfbeef6b08dd2101c5846eba71ce5ee6c8d7a6c8209aa3cd68a1f19a50ac102d462cde4bd6b7b9dde364cfbd5ebd7f6793c7ab6efec71abc5840a36980870f6b08a300e15380f7b484582dc16509c27e9a2c82cd0bbcc14a7fe6430bae63ca1d0e4a399e7b96daf0b07ebd4180a2d1605ff8fb6f9c182475a4e708512d300cd2e99a4470cf4c0c85422c9622c29ca65800a0ab878b1969467421295b852aa54ed52a55e2b57cb9546b5d9b41b4cc614081d51caf06cca0b82262de209bdb04ca833208b9015af8af399cb51582831e160e4d76bc5825f018901c970f12797f1be1bc1bfe1033b5af09d1309e5a93e513defc6fd6d1c7bfa39eacaf5bb3f08a5d9a913e20f86dda9ef0e6f0d373f4a6fef34aa5b496ca442e361a55cbbbc68d4cbefb676c858cddf71b4ccd18240f0ede8471a9c9588151ede0014a35f3b7b020000",
    ],
    [
      "ETag",
      "ZA3LCFkdnH2GzB/lNv3X3Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `amount` < ? LIMIT 1",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-124-1640201729937",
    },
  })
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
      "5b",
      "6f",
      "9b",
      "3014fe2bc87bd9b426014242881475594a37a4346913d26adaa6c418439d01a6b6c9d455f9ef3b86a617555b1e1070ce773917fb01fd62458c862862e95d45c5fdbb2d8fd009a20aa710fdb8cdd9eec6b57def4fe28e3f6ffdd28daaabd108104cb324cecb8cb624af04a172b85ab653c1ab120bce5b20d4b26ca765f51dd3362dd7f6bcae0b4449b364ca8a5f40bf55aa94c34ee760de4e394f338a4b26db84e74ff1ceceee94826f2951b2f3dab30336b273c4f534e3042bc68bd16a091554928a35cd31cba086676a1c7d7aaddd66386fa700de31423121bc2a94ae0b24082f129656a25645c30754d7f9e2032dfda93f098dc97c350bdf6f70aec99b0f0696c67a2da8ac32659c2fe617c6a604af5b2ca9dc18375ffd856f181b410917f19ac51b63649c1ae3d919041f258c1f9569760984a7c145101a16541353a95851d712e228a3ba8ec779056fd7a409588163935cbb661f5b03d38b92c825c9a0db8b129346d120727bb81b99c473a8134714034f69f59a850b5e448ed71b4484c61625c08cfa163cd476ccd8f31cb79f10625b6410bb687f827e0ba6e819932597ac9919ba5904a1bf0e17abd9641cfa751b0986b99c35c5e9265ed6a9a0c9b569ea7effd3db5e67190737bd846016fa8bf1240caefd66ef539a6272bfbc83cd27389314d058e09c2a2a2e780c834397f3651006f3d9780a8c7a9997078444c3ef0fcf84f0beac27adeab7f6ea3bb5ff01708db3aa46ec9a0f64a1fdfee4df0ae7d3f9f8b846bb0788fd4f00c1596f14d0d5ca5f7c434d6841132a68418e9f0200d789e377f6707f000c37087ca4827f3874446a17226873f8585e97d8b0078ee55a7a5d0016ea4d6ed0b70f13d61a5a91e6b4508f2d35f7470fac4e55f20904493833b360f605b27f01435eb1fcc1040000",
    ],
    [
      "ETag",
      "+jmivW72E9zf7ABjEp7buQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-124-1640201729937"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff2d90514fc23010c7bfcbf9084b18234396f02066519209325d7c308494729bc36e37db0e5dc8bebbd7e94b7bf9dfaf77bff40a9f657d82088e65f1d5a2ee6e0ab43b57a4685a650d5f0dd506610c6845c1e46e933d6debb0fa915b7abb8c46eaac9aa4582e9930f2032b01d115f212d5c940f47e855a54c8cf0e073d4c64cc768d4bd69bd7f8214e39a8e8e4824d962477ab24867edf8fe14cc71473d4584b74231b4d679476ed6c8da81a859ea1564b3430c043a3d0d4364213799c78fe74e6f9e16c329df8f3e96211cc995424852da966387b01de63c90a95d237db82cf801e4a16cf87f3c271e08cf6ffe8aab3689e35f162836e6710defe19dc93b3b26c6b758b639082ffe3b1b410e54219ec7f01f88043a26d010000",
    ],
    [
      "ETag",
      "QNUMOn6mxcOoWv++ljlpLg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:37:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
