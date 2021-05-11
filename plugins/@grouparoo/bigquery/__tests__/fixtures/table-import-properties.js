const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1620693471142";

nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcwNzMsImlhdCI6MTYyMDY5MzQ3M30.C0DbB-1AnlE3aFPbEu3PfcmeJ-5jhKbg6i6J-8TsdQX25eW4SRPR99HGHOlOKyAW-1WUX3ceW_U4hL_qrmVWls4utuc-nquFBD6Tb_yQxrAumxjpRf2DNtAmeZOn5ygENXe3CcHJX3RCP5Xe6K732Cm4y0uK7tsD7R92XClUSp5rWAbjPhDauK6IzpES28HlCN6PXWpLUJMXI7gWvTBDdts4av3rnhHozPoyEnYFMfs_VEofiXHA7YcJJZPIFDNz238g6JWnaqaedE98ZMTPCQ2oNo0i7weaN_U7U6urF08LG5u57Zb_Q7pclN9bPr0_YsdH5s46Km3TyNNzAcRNbg"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff1dd0d15282401400d07fd9677310232f3d62b119a0984af0b483b0cb1202eb0564a9e9df73fa84737e489a65bceb58df56bc21cf644a4d7b9ecd3d050e2b042e32332d37e961277a285640fb6ab0c090fc63e9018abac20074bc4a78d3e50c6b4441a7b325afc9e8b872bd4575fe3a36218acbde9137bc149c0d5c7f6a5f8c34180bf7adc654944fb7ef24349dc86facf3e0c0e81f0b2f521b1abb30cafab0e476bccdcc9c810e9287c7b6ddebc193bbd788be48aad4c9087df06f9159bb95012791237def164693ede250f643a42598a0c5755cb7855f9219e15a95c83b56deb94bcbb667e4dfcefa49f17b80c353e4487eff001d197c711a010000",
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
      "Tue, 11 May 2021 00:37:53 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-1-1620693471142",
    },
  })
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
      "2b",
      "91",
      "f7",
      "71f4111a9ab65235aa1246a5361d690a9ba629b29d9bcc90c625768a10ea7fdfb5433b10127c8aed7bce3de73ef24cee4599921161227fa8a17afa7227193921a0698eaf4bdd1facdd9bd0dffde45f7bf3d8efc314aec7634408c35274b32da0a5645d7150a3f5aa9d57b2ded24aca16266ab92db77fdaed0f7b9eefbade29d21414d95c94f748feabf5568d3a9d83743b97322f806e856a73b939be7776a79d6d25ef806bd579abd84111d5f950f35b2139d54296e3f50af56b0555021b2a0a74f09f98b2f3b799db826eda3982778203e55cd6a536ae3005976526f2bab259c9e8995897af0e6415cc8369ec7059d49b3229e9064e9c946a9ae8a72d3897d172e1ccc2cb65b498c4b36598aca657c162d29e2ee7eb45b8726eaf82287034650558ae3376ceed2dc40beaa7a0b428ad7a6c9e8df24b7f66ef87620828ada009267eb74fdd4177c832e6f36cd03b635917181b30ff8cf658970f3df05206147956d4b268294bee31d7a3032ff1fade30f1bc2c4d86bed74b3c465d4ebb59ca1925fb13f258090d17426da5124d87c86d348b83248ed6e1741207b6848cd685be688c99025e7bd45820823ea8696fa242a29269f72c8c8368328d67374133e139e4943fad1e70c6192d14209a56d83c0dd542a6d830124e16c10582edc47e1c828a8c7e3f13d373e3e255cb8ff4180768ec6afb25ab389a85dfad9d03e28616b585ec9a832923138531bdff83405cd12609b95e07d12fd23c4590410525ff7c9808b681cf7eb4c3da2314171f5594c63b6e0e57468357d06c90b0c51ed93d6f70462cb8d2ef62feb07fe899c96132c2064afd",
      "5250b3f658672356ab23088338fcd0f66aff0f7b21f18974040000",
    ],
    [
      "ETag",
      "Ot68U1VN7vXc+3LT76eCeQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:37:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1620693471142"
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
      "00000002ff8d93514fdb3010c7bf8bf79a4a0994b245e2a16585750a2d348107108a8c7d092e4e2eb39da2aaea77df39b08260527849eecebf53eefefe67cb9e542d59cc1e54f9a705b3f95682bbf2c1126cab9da55783b505163070bc2412c39bb369ba0e1f9f6ecf4dfabc3a52bf6f93ab931322ac78848ab378cb0a055a5a16df6d59cd2ba03681baadeabccb02e6368d2fa6d972363fa7bc42e9f3f975928c27c994ed827da3e48ee71dff85b6fb5dc056f8b084020cd402fc2c8dc1150837f36b5a5e351a06165b23c0b20eee0e4a836dc30de2802a8368108d0ec2d18fc3e171140d0f88d328b85358137a9dd278cca1e37a89cfb4248b0e89305d4c0b17dd734d7525bb457c389b67a36137df7b800b816dedf25eb050c6ba17f1fe81af227c2435ff224837a5741f54422dc1f451aac9b99406aced25d1e6bc69f6d864b1483eab524b834af6836bd50368b7de0367c962fc3f69c95f6f5afd1c67d34f8475e49a3d92cd2ea66936beb8f4dcfdab11261b07f6d22099ca82f753140ebf1f1d8fc2178b9da2b71d7d2776a68580094e7fca2fe5585c706d61f717b91a3c1787030000",
    ],
    [
      "ETag",
      "o0VFESv0hkZGrSwj5iJZLQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:37:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `first_name` as __result, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `first_name`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1620693471142",
    },
  })
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
      "eb",
      "4e",
      "db",
      "30",
      "14",
      "7e95c8fbb369bda669d35642ac40c6229500690a82696a1de7a418d238d80e5385faee3b71289721815429b5bfcbb9f93c923b9e27644c62beba2f416ebedc8a98340868bac2db2028e26b1a070793dbc89e7ebfb90637999cefed2183572a45d745064d254ac9408de7b3d64a8ab2a05288261a35ed6677607706a39ee376bb8e8d3205593ae5f91d8a6fb42ed4b8ddde856ead845865400bae5a4cac9fefdb0f76bb90e2169856edb711db1844b53f8cb99f09463517f9de7c86f14b0572016bca33cce04598c43fde3ab7385db756487ee00c2863a2cc7595155a3091a77c554ae34ac68fc464f9ea0f997953ef30b29629974a2f72ba86a54595b558485065a61bd692274f37c59df5333c3db1965861ca33504bebf297177a56cdf1036b1e04de2cb2beee7fb38ec3d3f999757065b0c61b7fcc2b01a5796eb28a689c4195d153dffcf7c3aa0454530535b8703b03da1d7646711abb2c1df6fa71da81381ec66e9ff6e20e1b39e0243150d4e9cadda8682e72970eba0e0a1da7df770683c44e6dd61f0ed3e1c819753a762fe982cdec7844b60df257720d475c1542f1ba7be432f4236f1185f3e0701279a68c9462938eeae4aa225ee7a9b148247d50d7b642b9c048d528fc20f2c2c961e45f78f5f4a7b0a26c33bbc7f9a73453806c2ab1831ae48948b069e4ec74e647fe693099a2c28cf46cc75064fcfbf145106d0ad3656dbe641286932bd45029e9e63f0cf3183864bb7d15ee8266a5a118be39d5fe0f3540ba58cbcbc926db3f5bfc3508bef2da9d9ccfbdf08ad45721a42021679fcf1dc906f86c57779b8354dc1d8ca2349ef1913155c56012eac7c6d726db9ddae98f5c62c852bfc3dc9eb3eb6ae55139c21a72fd5450bd39a64f1554aa671282f846023f",
      "3846f41fc6da83dbb7040000",
    ],
    [
      "ETag",
      "NNpbZabNBAjT2L+hZe7dAQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:37:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1620693471142"
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
      "90",
      "5f",
      "4f",
      "c2",
      "30",
      "14",
      "c5",
      "bf",
      "cb",
      "f5758b6c22c6253c00994842161890f827849472370bdb3adb4e9984efee6d3591075fda7b6f7fe7e69c9ee020aa1d44b015f97b83aabdcad1cc6d91a26e0aa3e9aa65a5113c40c37222af9fcae741d36e5f661d314f8e0f5f9a9be3a0df2742f3372c194427c804163b0dd1eb092a5622c9361be5361266dada4e16cb74928ca92fe5cef6c96a3a1d0ca7319cbd0b557df8534c92653c8ed3ff24ebb3077bb94d31438515476ba256728fdc4c6c3ecdcaba405fcb4671d4e060f7902bd9d44c49e9d3c40ffda017767af737ddbb20e886c4159233236445e86a41d6c048c38a547e523ab080722505cddcf941e3580974296c13387397cf23c6457141849658ff6e1eb606f54c4972a9d11a0c6ebb3f7647d2463014cda8063de08cbefb5118883256683c7f034a9027a7cc010000",
    ],
    [
      "ETag",
      "/XmYAuybZP0iQNxFzsctxA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:37:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcwNzUsImlhdCI6MTYyMDY5MzQ3NX0.DmbS8pyCr5HB9Xo-wQIC6nPCTGjpB17CQoLxWRs9bycB_7xfhXnhE6iRaOjrReOBvAvewa5nMP5W04LfE2i1NUYxuxJBJmJ-oUnTT7gMJw3zwjzYb0Fp4OAoOJMCv30oDVLc89vCx6znkF0DmSkci7_38E6GNGQZU2WGfLDIjRcTeb0_0xNPs9KRo4gq7BtmeeOp-kjT95dPqdyMnlqZ1ocDyaVhQzAsINGp2MP7vs3c5lVVYmroEb9QEQsQQSVCWIlscpdsnM1C2W5F1QeNHbWAP6eKO8uzlzIhkEOOWr6DAuq_ghdyffX_28cmsOBzKxns0jjyU7rpMvZ8K9tScQ"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "00d0bb642d0e4229497780915f110bc4aa1b26421211d4c847c54eef5ea74778ef07d0a2605d97f7979a9dc10718a986a6c53494d0ce05474d12e12e3829a4fc7e56d83dd06cd6a46f18777ebc719e6465f67337e3dc6c44a088382ca4a16f936cb34e2d6b25586022dcb7f5bb7babeccc10e4e8f8d5f5261b7efc7420694bda847332f80bd6874fda5f4b9269bb21baccb5b5d89f91efcd568ead5a98a7f0e05590e5c5d239733550308a4cc2d4eb9609558e7be42f150cd1bdd36d352197e8e195c642db068a0de969f7a807f2e5f2f5ad96310413c01eb26a5997572fae6e203401fff6bc1f257b05d88cb6ac05bf7f16e5d0c61a010000",
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
      "Tue, 11 May 2021 00:37:55 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-3-1620693471142",
    },
  })
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
      "6f",
      "9b",
      "30",
      "10",
      "fd",
      "5790f771cd0f020d2152b446295d23256425a4d5344dc89883ba2538c5a65357e57fdfd93459ab4aed276cdf7bf7eedd1dcfe49e5719199394170f0dd44f5fee444a4e08285ae06bd8b0acf87af7f037ba7121cc6be7d65557c5648208ae59926e772574a4686a0672bc59778b5a343b5a0bd1c1441da7630f07fda1efb89e6dbb03a44928f305afee917cabd44e8e7bbd8374b710a22881eeb8ec32b13dbef71e07bd5d2dee8029d97babd84311d9fb50f35b2918555c5493cd1af51b0975025bca4bace03f314bcfde66ee72baed16087ee40c2863a2a994ae0a533051e5bc686a93958c9f89a9f2d581ac8345308b2d26ca665b2515ddc28995514513f5b403eb225a2dad7978b18a96d378be0a93f5ec32584ebbb3d562b30cd7d6cd65100596a26909866b4dac33730bf182fa1948c52ba31eeb67adfcd29ff9fba168024a4b688389d71f527bd4f7d33cf5583e724ed3bc0f693a4abd53eaa47de6bbe0662950e41951c3a2157a4e1d7fd41fa4899f792c717dea27a9edfb09326c67e0bb5eeed8647f42fed45cc139973b2179db217213cde32089a34d389bc681b190d3a654e76d61dac0eb1a151a44d0079ef63aca052ae976cfc33888a6b3787e1db4135e4041d9d3fa01679cd35202a2698dcd53502f45067ab1a7cbe01cc166623f0e4149c6bf9e89eeb9aee255cb8ff41807a8cb55e64bd671340fbf9b720e886b5a3606f2d81eb48d9c97bae8fd6f04e28ab649c8d526887e92f629821c6aa8d8e7c344b0097cf6a31dd61ea1b8f8a82215de717398d41aac867683b8317b649f0e873631e05abd8b7923ffd0339d4367842d54eac550bbf6e8b3156be41184411c7e687ab5ff070c2ffa1974040000",
    ],
    [
      "ETag",
      "Nucdg+jqzRW4eNfr3h4tQg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:37:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1620693471142"
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
      "d3",
      "30",
      "10",
      "c6",
      "bf",
      "8b",
      "79",
      "492a9ab66425d25eb4ac814a593bd2ec054253e4d997e0e1d8c17f8a4ad5efce391b0531a4ec4d7277fe9d72f7f8c9917c138a9394dc8be6bb077378d580fb148202ac97cee2abd3ca02890838da20996f329565369b179fc5cf37c9eb89f7f3abe6f21209cbbe424b497a24b500c92d49bf1c89a22d601bd3d2b7aaeab388b843178abbb2586f3e60de6a1ef2cd6d9e2f96f98a9ca27323a78e563dff82b6bb53441ef47d013518500cc22c9dd10fc0dc3aac6969db491859ed0d034b7ab83f688cf61d355a8fb0329a8ee264324ede4d6717713c9b202735a34e6885e8ed0ec7234e3b2a0bfd039724f11409d3c7b870dd3ff75817bc5f2484eb4d99ccfaf9fe062863da2b570d82b530d63d8af71b7c12e15f52d217827853420e410d280e6688125d45393760ed20a96d45bbee8c2db7dbfcb92a8a1b2df830b817038074fb3390e5dbc5ffa4457ffdd1ea6a51ae9e11d6a16bce48b9be5eedcac5f54de0ee9e8cb03c38b03746a3a92c043fc5e3d9fced45327eb4d87b1d6c87df499df1101146f14ff9281c496b2a2d9c7e01152c821c87030000",
    ],
    [
      "ETag",
      "LNFnFFsF8RYiz/6+2uu8Dg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:37:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ltv` as __result, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `ltv`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-4-1620693471142",
    },
  })
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
      "eb6e9b30147e15e4fdd9b42490844b1aa9eab296654829c980b4aba6293170606e09a6d8a4caaabcfb0ed0f4b24aad1489d8dfe57ce7d8be27372c8fc998842cbdada0dc7db8e621e9109034c5ddcf537d76a7aaa3a1bfcc773f8753ffafb5f0d2e36364b05a25e8a6c8a02b78554620c64bbf9796bc2a68c979178dba7ab76f0e34f368a85bfdbe3e4099802c99b1fc06c57fa42cc458550fa57b29e76906b460a217f1cde3beba1da845c9af2192427d5951c522427db3e649c6232a19cf8f973ed6af04942bd85096618227611c7e79e9dc6374d34b91bc6511d028e2552eeb546811f13c61695536ae647c4f9a94cffe10df9ed9a781b2cee476ad50a1ac5625882a931d65cde2879de246f9e6cdcf9535b696b00cc45ab9fc6e7bb6d2721c5759baaeed07cac7934fcad49b2f17cad7ab06ebb4c69824062159dee4086898419de16152ceebe3a9055452012db8b23493f647da51988456948c864698681086a3d032e830d4a2231df438048a3a59bb372a9af3dcd286436d00a665c4161896a6255162e80935750a31840308f5c8185193ec3be4ae6412ce9828b860edbcc8a5e704f62af096eee924b09b36128ad3396bc3d54d3ccf29b14924bdd1d7be4619c74af5f01d37b0bdc969e05cd8ed79cf20a5d1cebfc5134f682600d9b4a41b90509ef31887461673df099cb93b99a1a239c4c58121c8f8d7fd9320d815cd9465f32513cf9b5ca1869625ddfd87610e5327fbfdb3721734ab1a4ac36f56adffb605481f7b795a0dc8fef71e7f1d82f7ba75273f96b67745da2d0f1228218fde3f772437c07baff3f056908aaf05ab08896bbc6491a86b4425b4978d6d9ab407b5a9eb7dd2904bf90a330cfd30d5daa376840de4f2a1a1f6ad3473aaa14a3c9210c43be23aee14d17f3d8be04fa9040000",
    ],
    [
      "ETag",
      "+G4Lw//83SUnyX3GSz7PRg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:37:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1620693471142"
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
      "6d90d14fc23010c6ff97f375236c8cc196f00006059da8134c8c21a48cdb1c6ceb6c3bcd42f8dfbd56a33cf8d2f6ee7edfe5fb7a84435eed20846d9ebd3728da8b0cd5a37ec4289b4249ba6a5e49040b50b18cc8e7e1be7f9bbd0c6f66833b77d0066ae61ffad96844844cdeb064101e21cdb1d849085f8f50b11249b6d908b39130d5d6ba7315dd8f9754967ca7cbc52a8ac693680a27eb4c541ffe04f3c5727a3d8dff93ac4f16ecf936c6140556096a0fb5e07b4cd45cc793acac0bb4256f4482120c6c0699e04dcd04e736756ccf767cb7eb073d6fe0389e4b5cc113a6725e11ba7a226ba0b86245cc3f291c68409827e54ccdf9a1dbfda0e3b826872e1d63ef1c08bc4ecfff9dbb7abefed93c6915ca07c1c9a5446dd0f1bbdf762fb98ea0289a120d5a9030faed59ae204c5921f1f405cef333d7cb010000",
    ],
    [
      "ETag",
      "V8j5KgY8JH7M27y9tH6k5g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:37:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcwNzcsImlhdCI6MTYyMDY5MzQ3N30.NT9bL6du1HddMaDqIUiqq7V_Iqey-3Ab1qovxS76xIYLfvtXtFtf-ZiXVBSAcFSqqTZfblaYF_q8CGksEIXbNsReRMSlIeyDmhn-g42t7PqQ4ffrRmeqBISRHLGm2yHx1H3n4s7Bf_y2avoZl0jOZPciBPCs9IfTNI_4ZsbtANhaDwK_Deu2Im4Ln5jK4_bihu-SdVw4nQmGial3tdZpf9bWOKR8mrVWQDceO3X3exAGtHwUZM9TloLPF7AKUgcECw5s9_VXDXh65zvDSCpQgNxE6S7ra0knTSxCG28DxoZ4ng3vGpILf9kRgLqfzFBt2AeNJmY-voEJMjxR_OpZGw"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff1dd0db6e82300080e177e9b51a0e016577764257088a560e72d3d45a117450a08abaecdd47f6047fbeff0730ce45df53d55c450d3ec08b19ce8ccf02b980b4e0e81e9dd1e21def48f2368729d18e769d9ef619c9070766f631086357ddbc5dc3a3baac503c50e71208896034cf429906c65dc260b9ad243299bbc9a9cadf0519be4fc9ca8891953ce2f521ec978d5b11af1df0267f1eabddb65a127aeb6d17325cb4b60e57634ed3cc2ee1354ba0173e0e38137b2bd37d4cdb29090fba11685f3536f1b55038cafcbe3659149ddb3952a9d561cfffbca4f19a77080d6002c453969de86939724dcb7126e0df4ed54b8a710014ac131df8fd030986f12e1a010000",
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
      "Tue, 11 May 2021 00:37:57 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-5-1620693471142",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6fda3014fd2b91f771e51d1a40422ba3e98a06a10da1689ba6c8716e52d324a6b1c35455fcf75d3b85b5aab47e8aed7bce3de73ef24c1e781193118978fa5841f9f4692b22724640d1145f73dbbb8fb73fb7cef79b5e3efdbaa19f37fbfbdbf118115cb324cd771934a4a84a0672b45e35d352543b5a0ad1c0448d7ea373de6d9f0f7bb6d3e9d85da449c892392f1e907cafd44e8e5aada374331522cd80eeb86c32919fde5bfb6e6b578a2d30255b6f155b28225bffd5fc9209461517c578bd42fd4a4219424e79860efe11e3e8e26de626a7793345f09e33a08c89aa50da15a660a248785a95262b193d13e3f2d581acdcb93b0d2c26b22a2fc282e67066c554d1503dedc0baf2970b6be65d2dfdc524982dbd7035bd761793e674395f2fbc95b5b9767dd75234cac070adb175616e1e5e503f06a97861d403fdac955ffa337b3f144d406909753074dae7b433680fa324725832e8f5a3a40d5134889c3eed456d36b4c18e23a0c833a286450b5138ed7e3ba65d085992b0d01e3a4e1839834ee87469d48f6d27b659871ccec89f922bb8e4722724af3b4436fe2c70c3c05f7bd349e09a12125a65eab236a60b78ed51618108fa4f4d071de5029574bb675ee0fa936930bb73eb09cf21a5ec69f588334e682601d1b4c4e629281722c686116fb2702f116c2676730c4a32faf54c74cfb58b572d3fd1031ca0b6abcc97ac027fe67d33768e883b9a5506b2af0fba8c8467daf4e137027145eb24e476edfa3f48fde443022514ece36122d8043efad18e6b8f505c7c54910aefb8394c6a0d5642bd41dc147b623bbd618f1870a9dec5fa5dfbd8339d4367841c0af55250bdf658672d56c9130883387ccff4eaf01767489a9a74040000",
    ],
    [
      "ETag",
      "m4NhdjZj7KP3mCBWa+WvhQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:37:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1620693471142"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d93616fda301086ff8bf7354884a6b045ea0758d9c694420b419a3655916b5f32778e2fb51d2a84f8ef3da71d9bd649e997e4eefc9c72f7facd81fd5246b294dda9eaa105bb7f5781bf09c11a5cabbda35783c6018b18785e11b9b95c6d27df66fa6bf51d5b394af21d3e3edc5c5c10e1c44fa8394b0fac54a0a563e98f0333bc066a13a8dbda145d1631bf6f427193af17cbcf94d72843bedc66d97496cdd9313a354aee79d1f16f68bb3d46ec1eefd65082052320ccd258bc07e117614dc7eb46c3c0616b0538d6c1dd4165b16db8451c5065703e88c7a3e1f8c3593289e364449c46c1bd4243e87643e3318f9eeb353ed2922c3e23c276312d5c76cf1dd595ec1609e162998f936ebebf012e04b6c617bd60a9acf3cfe2fd065f44f897d4fc8d20dd94d27d50054682eda3545370292d38d74ba22b78d39cb0d96a95bd56c5488b4af6833bd50368bf3b019fb2d5f47fd292bffe687539cde7af08e7c93527245f5ccd37f9f4ea3a70b72f4698ed3db86b8b642a07c14ff130797f3e190f9f2df61183ede83ba9b72d444c70fa53be28cfd2926b07c727fa383d8787030000",
    ],
    [
      "ETag",
      "SDOU7XBlJgZoud24TvowqQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:37:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ios_app` as __result, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `ios_app`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-6-1620693471142",
    },
  })
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
      "7d",
      "6f",
      "9a",
      "4018ff2ae4f6cf965845444493a6732deb482c768835cdb2e8713cd0abc851eeb0318ddf7d0f506bbb266d628277bf97e7ed9e27b2e659444624e4c94309c5eecbbd08498b80a209deaa617fcda3359f28b158dc6d6f2201f1f4f1f41419bc5249bac9533891a22c18c8d17cd64e0a51e6b410e2048d4eac93ae65e8d6b0670eba5dd3409984349ef06c8de23ba57239ea740ea1db8910490a34e7b2cdc4e6e5beb3353a7921ee8129d9791bb1834164e7c39867a9605471919dce6718bf94502c6143798a191c8551f8fdad739bd34d3b41f29633a08c893253555668c14416f3a42c6a57327a227596affe90993371ce036dc5855cd23c5f69546acb6501b24c550bafa3e79b7cadfdf4a757da0acb8b790a72a52d7e39bea3351cd7d3e69ee7cc02edebd937edd29fceafb51fb735d63a9a63461148c5b33a9f80862954b93c77cc7d3fa64a401595d080cb816ed1aead0fc3381cb0d8eef5c3588730b4c3419ff6429d0d4d30a31028ea54e55eab6826323becc703cb605ddba0604466bf6f4560ea60d95648753beaea360c18eb927d8b3c165cc10597b990bce91b59f86ee02c037fee9d8f03a72e23a6d8a18b26b9aa88d7792a2c12491fd4b5af502e30523504d70b1c7f7c1eb8374e33f7092494ed660f38f998a612904d0bba0105c59588b069e47a3a730377ea8d27a8a887797d604832faf3741404bbbceeb2aabf64ecfbe35bd4d0a2a0bbff30ccc332c97eff2adc0d4dcb9a52f3eb53e3bf6d0052b5ec7832c8feef1e7f2d82efbb7127bfe78e7f4b9a2b1f622820639fcf1dc935f0d9961e7606a9b83518452a3ce32363b28ac10a681e1bdfd4d91ed4b639a8775cd142bdc32ca377e86ae55139c20632f55c50b333759f2aa8942f2404f18d78ae7789e83fb6c92608b1040000",
    ],
    [
      "ETag",
      "t95kidkiLtoWWhvVdoefOw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:37:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1620693471142"
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
      "d1",
      "4e",
      "c2",
      "4010fc97f5d136a1488a34e101b422a68256f14143c851b6b5d076ebdd556d08ffeede69020fbedcedcdce4c666e0fbbbcda4000eb3cfb6850b66719ea4733c4a89a422bbe6aaa148203a845c6cc89f26f64bb3defdf37d7e20ebf5f1797f8321a0e99a192772c05047b48732c360a82b73d54a24496ad56d23a324db7b541c6f379148e660c94b431c06c1145a37114c2c13991d5bba3643a7b0e2761fc9f647970604beb18539458256852d492b698e8a929a8445917e82a6a64820a2cd92e32494d2d2491cb88ebbb9edfedf8838b5edff37a5de61594089d53c5d4c51347034d5a14317d713d300469476e9adaf393612d1bb42dccc3b3e14ed7a928d471df35fbe59fefb8d5a81e2471468526dea0f39bf58a4c7ecdbd8cb90389e0cfbecd3504d6edf003f437bb5cca010000",
    ],
    [
      "ETag",
      "Gs6Fryj+7MuDaJexZU8eVA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:37:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcwNzksImlhdCI6MTYyMDY5MzQ3OX0.ewmnQkgpqKH7yYfnC8ywRwpqxUBuWQkMwWZRh_EjSUt0jTNJOwjYSvO1eV3w2Gtl3LxrJJHHwvnsx2daKiykry9jrnlZBVDLUvnk6nVt7iYP40y5EvA46uXopjvhjikYWpo2N_Y2wVMflVkGRb15CPDVzgm9-L7dhIqbWESfqMIQwBeBcbisEKNNOTfngXlgedznUPPnhqs3XLSAKZUqPRzIRcWafBlosBsoeMjQ7EMzL7Dls4fXxJdK6Wuujhvl85dAkhea4-JmFmsnP7_l2VUrJqtT9vsNKqXYaYYP6qrbAnw0VAyLfceoz8eawxZrZwAvX3uwfZx8SncsLKZaBA"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "7282300000d0bb642d0e8888e9ce00116809fe18950d13421094082658c54eef5ea74778ef0750c6b85259df5ef8157c80814ee0988d3fbb39ca4e8c53ff7214830bc9f669a8cd3e6261697bd7d710532c6be674910b9916ae2739cf5b614e7d8b1a1b7cd3d1ba8c5d2dd773fd5e46276b6157f388e1aa3e1fe07dd541313d2724f593c9d424b75c1a37a3498abbc1636f463ccf21c7fe1a06cb6fd7c1b3209ed94d111cc45eed5e15b107ced243916dd157e8eba8f1c9433b236922230f9c55dfb2c613c22a7761d5522d1c44a5f4c732ad31b6d40261998011e0cfae965c65f59b6b5a108ec0bf3deb878ebf0310a7924bf0fb07fd6403a81a010000",
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
      "Tue, 11 May 2021 00:37:59 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-7-1620693471142",
    },
  })
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
      "85536b6f9b3014fd2bc8fbda3cc89b48d19aa5748b14c84648bb699a903117ea96608a4da6a8ca7fdfb569b25695da4fd8bee7dc73ee8327f2c08b844c49ccb3c71aaac3a77b11930b028a66f83afc597a07db965f808f6f69cce0cecbf6f3d90c115cb324dd9539b4a4a82b0672baddb4b34ad425ad846861a2d6b8658f7add91d31f8c6d7bd0439a843c5df1e201c9774a9572dae99ca4db9910590eb4e4b2cdc4eefcded9f73a6525ee8129d979add84111d97957f3732e18555c14b3ed06f56b0955043bca7374f09f98c497af33b739ddb53304ef3903ca98a80ba55d610a268a94677565b292e913312e5f1cc8c65db98bd06222af774554d01d5c58095534528712aceb60ed594bff7a1d78f370b9f6a3cde29bebcddb8bf56aebf91bebf69b1bb896a2710e866bcdac4b73f3f182fa0948c50ba31eea67adfcdc9fe5dba168024a4b6882d1b83ba2f6a4ebc4693c66e9a43f8cd32ec4f1241e0f693fee3267008324068a3c236a58b4c09aa99d4e26c35194dabd7e3448ba4e143bc0a2be435346bbbd41df4ec9f182fcadb8822b2e4b2179d321721b2c43370a83adbf9887ae2921a575aeae1a63ba80971e151688a0776a3aea2817a8a4dbbdf44337982fc2e58ddb4c7805196587cd23ce38a5b90444d30a9ba7a0f244820d23fedc73af106c26f6fd149464fafb89e89e6b172f5a7ea68738406d57992fd984c1d2ff6aec9c103734af0d64df1c741929cfb5e9e31f04e28a3649c88fad1bfc22cd5300295450b08f87896013f8e8473bad3d4271f151452abce3e630a9355805cd067153ec99ed8c473631e04abd894d469353cf740e9d117650a8e7829ab5c73a1bb15a9e4118c4e1fba657c77fea740e6874040000",
    ],
    [
      "ETag",
      "5XpMy11sBei7WabcehMgvA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:37:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1620693471142"
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
      "8bf71a245218b0487d082bdb905260903e4d5564ec4be6cec979b6c38a10dfbde7b463d33a297d49eecebf53eefefee7c47ea846b284ed55f5b3057b7c5781ff1a822db8567b472f838d031631f0bc22b26e4790cee454db2cdb6f66b079bc7934d5f535114e7c879ab3e4c44a055a3a967c3bb186d7406d02755b37459745cc1f4d28eef2ed72f599f21a65c857775996ceb3053b479746c93d2f3afe0d6df7e7883de07e0b2558680484598cc507107e19d674bc361a060e5b2bc0b10eee0e2a8bade116714095c174104fae86930fa3f1348ec757c46914dc2b6c08bddbd178cca3e77a8bbf6849168f88b05d4c0b97ddf3407525bb4542b85ce5937137dfdf001702dbc617bd60a9acf3cfe2fd065f44f897d4fc8d20dd94d27d50058d04db47295370292d38d74ba22bb831176cbe5e67af5569a44525fbc183ea01b43f5c804fd93afd9fb4e4af3f5adda4f9e215e13cb9e682e4cbdbc52e4f6f3781bb7f31c2fce8c16d2c92a91c043fc5c3f1ecfd74327cb6d8470cb6a3ef24deb61031c1e94ff9a23c4b4aae1d9c9f009bf976f287030000",
    ],
    [
      "ETag",
      "mu3eA8d7lrLLbP8ePxDxpg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `date` as __result, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `date`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-8-1620693471142",
    },
  })
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
      "eb",
      "6eda30147e95c8fbb3495c92104240aa3a68d32e1a0d5d08adaa6902c771329710a7b643852ade7d2709f4b24aad8400fbbb9cef1cdb4f68cdf2188d50c4d287928add977b1ea116a20aa7b0db9f3c5e4cfcf5cff98539b5c86012783fc4767c72020c56a924de14196d4b5e0a42e56831efa4829705169cb7c1a8edb40ddbd4ed61cf1a188665824cd22c99b27c0de2bf4a1572d4ed1e4b7752ced38ce282c90ee19be7fdeed6ec1682df53a264f76dc52e1491dd0f6b9e669c60c5787eb29843fd5252b1a41bcc3248f0228ca3ef6f9d3b0c6f3a2990b78c504c082f7355a5020bc2f384a5a5a85dd1e809d5295ffd417377ea9e85da2ac68aae342cb5e552505966aaa5ad587cd829d6da4530bbd256d05bc2322a57daed0f3770b586e3f9dac2f7dd79a87d3dfda65d06b3c5b536b9abb1d6c119b2c4542a96d749421c65b44a719895f7fe802a015658d2065c0e741b1b8e3e8c92684012a7d78f129d4691130dfab817e96468512b8e28069daadc6b15ce796e258e1d1b3d3d89130a5fd81e9a7d4a886d4643ddd289d1732cec58d600ed5be8513045cf992cb864cdc4d06de085ee320c16fed93874eb36120ce3396fc2554dbccea9a049207dd0d7be4219874ad5f83d3f7483f159e8ddb8cd894f698ac96efe00679ee04c5260638137545171c563181aba9ecdbdd09bf9e32928ea63bc3e32241afd7e7a1184bba29eb2aa7fd13808c677a0c142e0dd7f18e4b02db4dfbf2a7783b3b2a6d4fc7ad5f86f1b0019d0cbcbca44fb3f7bf8b410dcecc61dfd5ab8c11d6ab6029a504173f2f9b903b9063e7b9fc7d70254782f50452a58c32523b2aa41046d2e1bdbd4690f6a47b7ec21aac942bdc36cc33c4eb5f2a81ce986e6ead050f35aea395550299f4900c21df13dff12d07fe0263df2ab040000",
    ],
    [
      "ETag",
      "5BwFBNkKSF2L4c7BRIHrvA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1620693471142"
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
      "90",
      "51",
      "4f83301485ffcbf5514800179c247bd894e8928528db0cd12c4bc72e082b14dbe25c96fd776fab511ff6d2de7bfaddf69c1e6157b55b88605395ef3dcac34589fac91429aa9e6b455b275a85e0006a56123954f397cb30c3fa39f9cc329e64fb7a90ee47232254fe860d83e80845857cab207a3d42cb1aa4b1f55ada1b09d387ce2877e3454c5d23b6a64b96b3d978328be1e4fc9be9767ffc3459c4f7717a6e647572a0169b140b94d8e6682c7452d498eba949a758d3717495e8658e0a2c6c0f4a29fa8e49215c52dca1eb878117de5c0dae7d7f1010c745ce74255a429773b2065a68c653b1a76c6000694b8a59d8f5c3c85ee0b95ee07abecd6224df5a3c0b05bf5060a0d5cf13938346f52805d955689cfaa1f7edfb56982c9a326ad9a30339a35f7fa8344405e30a4f5fa6418141d3010000",
    ],
    [
      "ETag",
      "8sSZ+6XejVNxXXlNXwj4Rw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcwODEsImlhdCI6MTYyMDY5MzQ4MX0.MnTbXMKnCEolnRCOUnSBwaJI0Nc3sEjfjqRrD1iNv1UV_piP_Z6Cjazup2XM-0wouDgJF21uKXUJ0D6PzFhZNpoQSMYR1kCaSPuKY9hLpZXeZe7JSZOJjjqD60eLVH2UlYwJ2P5ID61PjBRbn9cPQfRmfQm3ziXXaBuHdeGtM-VpuedreBY08wE3BeUV49un2p3gWCXjUt128eejAtstfV4qkOSYzU7eEge--V5PkSahe99-_IfDpVVhE_reSFkun-Awt-HMfK3tbgv8eMq76WDnkW_-KEg8osIjVto4xOvEyNI-9joJgRtiqyOIa6y0yDfg1jd_iUlRJkoTvHS_8Q"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "dd",
      "96",
      "42",
      "400000e07799eb742a61ed25111bf92b3437ce60461323351475f6ddb7b38ff07d6f808a02739ef5d71ab7e01b4c68a5ce8bf9aefbd2b2aa48864621e738254f495590cc92577974fc7a9d2789c5f87a6a4733ac1706a62951acc1390766fdd2cc83653732679a67f29f857554fca5e15e3c1df29b885efdcd5cb89b6d9436023b4d4ed9041743f78748dd870c6efdfc29c882c88d735f75132c0725d6c9b57adc1e1eb7982b434a36c1480da923d1ee200d1077473bf6fbdab5ed350a68be72d470442bb3d74b012695982edbdce6eedea6a7f1c03c300378ece81df38c7eb8a2a4aa33f06fcffaa9c39f000da33bbe83df3f9078247e1a010000",
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
      "Tue, 11 May 2021 00:38:01 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-9-1620693471142",
    },
  })
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
      "6f",
      "da3010fd5722ef6bf911080490d08a68ba2241e84268d74d53649b4bea36c43476a8aa8aff7d67a774ad2ab59f62fbdebb77f7eef24cee45b12123c244f65041f9f4ed4e32724240d30c5f1f97bf6e7fcf7bfecd1caefc5eff92dd5d548fd9788c0861588a6e77393494ac4a0e6ab45e35b352563b5a4ad9c0448d61c3ed77dafd61d7f35dd7eb204d419ece45718fe45bad776ad46a1da59b9994590e74275493cbedeb7b6bdf69ed4a79075cabd67bc5168aa8d6a79adf73c9a916b218af57a85f292813d852916305ff891b76fa3e7353d06d3343f05e70a09ccbaad0a62a4cc165918aac2a6d56327a26b6ca3707b20ae6c13476b8ccab6d9114740b27ce866a9ae8a71d38e7d172e1ccc2f365b498c4b36598aca617c162d29c2ee7eb45b872ae2f82287034653958ae33764eed2dc40bea6f40695158f5d83c1be5177f661f87620828ada00e267ebb4fdd417bc852e6f374d0edb1b40d8c0d98dfa35dd6e6430fbc0d038a3c2b6a59b49085b7e9a71ea56ec2da4337f1788726b4d7f512f4baeba57ea7ebbb8c1c4ec86329349c09b5934ad40e91eb681607491cadc3e9240e6c0b29ad727d5617661a785ba3c60611f4494f07131512958cddb3300ea2c9349e5d05f584e79051feb47ac019a7345780685aa2791aca85dca061249c2c823304db895d1e838a8cfe3c13e3b9a9e28de5aff4180768cad5f64b5671340b7fd8728e882b9a5716b2af0fa68d54e4a6e8c35f04e28ad649c8cf7510dd90fa2982144a28f8d7c344b00d7cf5a31dd71ea1b8f8a8a234de7173b8321abc847a83846df6c81eb87dcf23165cea0f317fe81f3d33394c46d842a15f1aaad71efbacc52af50ac2200e3fb45e1dfe01b8ca1b6c74040000",
    ],
    [
      "ETag",
      "wOXhZL57YLeV756PbjHuwg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1620693471142"
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
      "da",
      "30",
      "10",
      "86",
      "ff",
      "8bf77141222da56ba47e808d6d9152a021a8d2a62a32f625b8736cd7769818e2bfef9c76745a27a55f92bbf373caddeb3707f243284e12b211f5630b76ffae067f1b821c5c2bbdc397d1ca018908785a234997f9f6db564ddfafefe25f72935fa4f2d1dc5e5f23e1d8161a4a9203a90448ee48f2fd40146d00db98966da3ca2e8b88df9b505c15793aff8279a379c8e7eb2c9b4cb3193946a7464e3d2d3bfe0d6df7c7883ce84d0e1558500cc22cc6ea07603e0d6b3ada180903a75bcbc0910eee0e6aab5b43add603ac0cae06f1f86c38be3a1f5dc6f1e80c39a919f5422b44d72b1c8f78eda9ccf54f5c92c4e748d82ec685abeeb9c3bae0dd22214ce7c578d4cdf7374019d3adf2652f5809ebfc93787fc06711fe25257d23883725641f5483e260fb28614acab905e77a49ed4a6acc099b2e16d96b5514b75af07e70277a00e97727e073b698fc4f5af4d78b569f26c5ec15e13cbae68414e9cd6c554c6e9681bb7f36c274efc12dad465339087e8a87a30f1797e3e193c53eea603bfc4ee26d0b116114ff94afc293a4a2d2c1f1372ced0c0487030000",
    ],
    [
      "ETag",
      "aPRhZhnB+UW1zlbR5IlqpQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `stamp` as __result, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `stamp`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-10-1620693471142",
    },
  })
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
      "fbb249798740885475694b5bb4947484b48aa629318e616e0113dbb48baafcf75d4cd2c72ab52812c1f79c73cf7df809ddb37c8d462862c9a6a462fbe58e47a881a8c2099cf6cd93e8fc0779bcb72fff5e2c429589cd64931c1d0182552c89b322a54dc94b41a81ccd67ad44f0b2c082f3260835bb9d66d7ea752ca76fdaddaed9039ea4693c61f93db0ff2855c851bb7dc8dd4a384f528a0b265b8467cfe7ed875ebb10fc8e1225db6f53b6218b6c7f9cf438e5042bc6f3a3f90c0c94928a25cd304bc1c20b731d7d7f2bdd62386b25007e608462427899abca1648109ec72c29855645a327a46dbefa8366eec43d0d8d9554a0b932b034964b416599aa86b162ebfd49716f9c07d32b6305d5c52ca57265dc5eba816bd418cf37e6beefce42e3ebf137e32298ceaf8d93858e350ed2e0664da562b9f612e228a5958f7dbbbcf743aa08586149ebe0d2ee58b83bec38511cd9241ef60751dca151348cec01ee471de298d45c4714034f55ea9a85739ee3a16d457d82a96939f0d87ddb349d614c8845cdc1a0839d410f104e17ed1ae8513045cf982cb86475cfd06de085ee320ce6fee9387475193186fe9cd5e6aa225efb545024803ea86b574519874cd5003c3f7483f169e8ddb8f5cc2734c1643bdbc0d4639c4a0a682c70461515577c0d4d43d7d399177a537f3c01861ee4f50121d1e8d7d30b21dc16bacb4abfd13808c60be06021f0f6bf18f8b04cb4dbbd4a7783d35243345e7fd5fa0f7500552d7bf9eaa1ddef1dfc1a0896bb56473fe76eb040f55140632a684e3e9f3b8075e0d33b7ab83080852b036960d714832d23b24a4204adb78d65daee9e3decd9a685",
      "3458a87731c71e1cda5a69548a34a3b9da57545f18dda82a54ca67100461497ccfbf80e83fdd75d88db0040000",
    ],
    [
      "ETag",
      "34BbFKcwk7HxGYTtmrqLqg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1620693471142"
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
      "0002ff6d91516f82301485ffcbdd2b2ca08042e2832e642351a34cb36c8b31152f8802656d9921c6ffbe5bb66426db4b7b73fa9df69cf402a7bcda4300bb3cfb6850b47719aaa51e62944da1246d35af248201a85846a4ea1f86c3fa65b098448337e77c3cbcb6a9b51c8d8890c9014b06c105d21c8bbd84e0fd02152b916cdbade86e244cb5b55656d12c7c5e8d670b924abed7d27c3d9d8e27d310aec68db13efd9aa2f92a7c0ce3ff2c9bab0147be8b31458155823a472df8111315e98a92957581a6e48d48504207770799e04dcd04e72629a66d99b6d7b33cbfef0c6cdbe91158f084a99c57c4ae9f291b28ae5811f33335040d886ea4b269b77e926cdfbb43cb757ddb7742bfebd3a95dcc3f9ce710e9b837604f839b9f9726ad42b9109c624bd4896dcffaceffc07527455d9568d08084d1173ce50a82941512af5facd60f8de0010000",
    ],
    [
      "ETag",
      "t3h88pW7PBI7Z4wjhYyf0Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcwODQsImlhdCI6MTYyMDY5MzQ4NH0.AKNkY6ZHyMYFJfbSC-L8sbL75duqgqmCJBKlV0qPE-OPKlOjKJdLUTWyV0hGOs_ZA0q8He8Nch5-g6BdtTzbxseAkjTSgignHYt2kidq4y3HDegQpdRI3maQN7t_nN6YOy0HfQZxT-WQ9m9EPHJeFfc2ZodMAB4bwJcXlBFOE1XD9lF-OzK-deu1nW6eEymN_ZHUv8HTw7cAxHVhgvFQ-7iRPLtrxwoBokpiXzUQSLE3UeigzN4TXmSkcdpCkvqZFjCy34eeftVoQwArG_YGnpfMXo15UdsqqLI7s12qf_3kGcgoR_i1irntXMyNM0lrbyjfziKpoHCrHgyPD3is1w"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "1dd0417282301400d0bb64ed382858a53b11859202a29050367f28041a150c0415707af73a3dc27b4f9466199312baeb99d5e81d0de95c9f66532c56069485a7265b5533bb60413db2dd38801f0f25dc176a5dbe7df756949cb35c92ea1a9f05df12ac4778bc7825cc4e4d60e49ae5ed9d9d88eb644d4f8177c7f75657c6c7f5e00f749913df68dc63b70a4fc4b4cad151361f3c87aaf95137309f853e44da00518c87ce7265364f3891ec00b5a956fb362cd6dc2f9a1b4912f88c03d7ee894d5379b323b06f5ff458694b73179a42b3fafac2f92a1b1daa51c315184d10eb056f9904fee2aa0b5d9fa07f3b748360af0083a52d6bd1ef1fd2739bc11a010000",
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
      "Tue, 11 May 2021 00:38:04 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-11-1620693471142",
    },
  })
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
      "4f",
      "db",
      "30",
      "10",
      "fe",
      "2b91f795bea4097d93aad1b561546ad22d4d61689a22c7b904431a97d8e165a8ff7d67873210127c8aed7bee9ee79ebb3c911b5ea6644c129edfd6503d7eb916093922a0688eafeee5c679c858e1cf4757a7146e56eedf5fdfee271344709d25e97657404b8aba6220c79b753baf44bda395102d2cd4b2ed96ddef75fb23c71dd8b6dbc33c0945b6e4e50d665f29b593e34ee7c0ddce85c80ba03b2edb4c6c5fde3b77bdceae12d7c094ecbca5ec208bec7c4cfab5108c2a2ecac9668d026a09550c5bca0b94f03f334d4ede966e73ba6de708bee30c2863a22e959685259828339ed795a94ac64fc4c87c75206b6fe9cd228b89a2de967149b77064a554d1583deec03a0d57beb5084e57a13f8d16ab205ecfce3c7fda9ead961b3f585b17675ee8598a2605985c6b629d985b8017e44f412a5e1af6483f6be6678316efc7a213905a42138c07dd3eb587dd51922503960d9de324eb42920c93c13175922e1bb9e0a60950cc33a4268b96a2047434718fd3d84dfb59ec3a368b475d87c568f2c84edc51b7d707b23f22f7155730e77227246f1c2217e122f2e228dc04b369e49916325a176ade08d30dbcd6a8b041047dd0d35e47b940266df72288bc703a8b16e75e33e125e4943dae6f71c6192d24209a56689e82ca17291a4682a9efcd116c26f6e3109464fcfb8968cfb58a5796bfa44738402d57992f5947e122f86ee41c10e7b4a80de4ae39e836325e68d1fb3f08c41d6d8a909f1b2fbc24cd5308195450b2cf87896013f8f4573bec3d6271f391462abce3ea30a9495805cd0a71d3ed217be83a8ef95115add4bb983b181c4cd3357445d842a99e3b6af61e1b6dc86af902c2204e3f3066edff0142ab4b2c7704",
      "0000",
    ],
    [
      "ETag",
      "4YU3xfclMD9hFaekO4zXBw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1620693471142"
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
      "f79a4a4d290122f190b2b2550a2d6bc3c334a1c8d89760e6f882ed74aaaa7e77ce8175d398145e92bbf3ef94bbbfffd9b39fca4896b207553f7760779f6af0df42b006d769efe8d5a271c022069ed74436c9b2ba78beda7693ebefdc67e76af278baab2f2f8970e2111aced23dab1468e958fa63cf0c6f80da04eaae31659f45ccefda50dc14ebc5f20be50dca902feff23c9be57376888e8d927b5ef6fc07daee0f117bc287355460c10808b3b4169f40f84558d3f1a6d53072d859018ef5707f505bec5a6e11475419c5f1284e26e3e4e2647a16c7d309811a05f70a0db1771b9a8f79f45caff1176dc9e213226c1fd3c655ffdc525dc97e93102e964532ed07fc1be04260677c390856ca3affaade6ff04d857f49cd3f08d255293d04d56024d8214ab52597d282738324ba92b7ed119bad56f97b558cb4a8e430b8550380f6db23709dafb2ff494b06fba3d5e7ac98bf239c27db1c91627133df14d9cd6de0eedf8c30db7970b716c9550e82a1e2f1f4fcf42c19bf7aec0a83efe83ba9b71d444c70fa55be2acfd28a6b078717342e6ecb88030000",
    ],
    [
      "ETag",
      "m6Nf9qCvu2FYatA8i2h5yg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `first_name` as __result, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `first_name`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-12-1620693471142",
    },
  })
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
      "000002ff8554fd4fdb3010fd5722ef974dea47d2ef5642d04106dd4a0b690a62d3d43ace251892b8d80e50a1feefbb3814e890408ad4c4efbdbb77e7bb3e915b9e856440021edfe520d75f6e44402a04348df1f4e477d849af4fc3f8c15ff7d3c75fe7ede6cff3786f0f19bc50299aae12a82a914b066a309fd56229f2159542543150d569549d4ec3eef49badaee3b41aa8539044639edda2fa5aeb951ad4ebdbdcb558883801bae2aac644fa725ebf6fd45752dc00d3aabe9bb28e5954fde3a4fb8960547391edcd67682057201790529ea0855765181cec86ae719ad66224df730694319167bab0852198c8221ee7d244258327626cbe79213377ec1efad632e252e9454653585a54598b85049527ba622d8d83e7c3d5adf5c39b9e5a4bac32e209a8a57579e27aaef5421b4dacf964e2ce7cebebfe37ebd89bcecfacef575bb8b293080d86a034cf8c3d9f060914d69e3b387a7f6f85806aaaa004175dbb439d9edd0fa2a0cba25eb31d443604412fe8b66933b059bf05ad30008a3a5d44372a9a892ce884762f88186d451174a1dd0fed46abe7b056c018b4830e745b0eb3a32ed954c883e41a8eb85a09c5cb36924b6fe4bb0bdf9b4f0e87be6bca882876eba8345714f1d6a7c62291f4415d9b02e502331577329af8ae373cf447176e39066388295bcfee7010229a28403695d8410df25484d83472369d8dfcd174321ca3c2dcedd996a1c8e0cfd3abc05faf4c97b5f92543cf1b5ea1864a49d7ff6133df1b4d8ec966f326df054d72c33102f35526b82f0102373888822bfb001e4d916614379557060ea9066717febbc1a742702b4a0fe47cee7a57a43cf220020919fb7c3a906c804f977bbb69c8c55dc3344ae337ce2253451226a19c499e1666b6ea5eb7d1367f0d9a4afd0e6bdbceb6f9458c2222a490e9e78aca4d33dd2ca05cbd9010c4519a94bdfe070a7922b2e9040000",
    ],
    [
      "ETag",
      "HZd6mhMdgwTy9mxKQ53JQg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1620693471142"
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
      "cd6ec2301084df657b4d2a12101548950a08a54894b6219c2a848cb3490d4936b51d7e8478f7aed31e504fbdd8def537f68c7d81bdaa5218c256e55f0deaf35d8ef6dd2d62344d610d4f355506c103b42267b29f442f9d991c6749aaa26e2f3945afa3d5f1f19109233fb11430bc40a6b0480d0c3f2e50891259b6d9e8f644c6ecb9769d6512cf1611d725a5ae5eace6f3d1783e85ab77a3aaf7ff51acaf1eec681b63861a2b89ce43ad6987d2ce5c3c23caba40df50a3251a68e17623d7d4d44213f9dcf183d00ffa61a73fe8f61e82a017325890145651c5ec6ac9d6c09215454c474e070ed0ed928366ed78e0f6542b6c53b80277a80fa44ce7094fad8b7b4965ebf85632115215372a89c262f057b2febd7e7cb668de347116832e463818fc849a90e32d3f80d50d7a2005ffc9b3b230cc4461f0fa0d20cb01dcf1010000",
    ],
    [
      "ETag",
      "6TGM0IcBfTdiG34TxGOAUw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcwODgsImlhdCI6MTYyMDY5MzQ4OH0.QbTZGxsfOXPy6zDz07_Wu_73MxKKEie6UltJx4Xc52Ps-duC3-I__RRjN4C7c2-CwmctrVjmza0-iV1YkCsKhu-GA4CCNWdGgSZhhoNPS_UBMYtDITSQg3w_cxyVQJABel2RFzsKwrw-9hoqlW1VuL_YgcuG89vFh1AW15gB3IdriI1W6A-vrxVQq4j1cilw-qzkhOSM0pUrLKgrlTaSNjJ5AtE_nPh-7vmO-KT07HgoBoU22jepJPTaXKcPJizFdJqhtghyOdYwFm3alEP78kM7VJW9b0f0FT3vcX_Axr8ZS8EcG37994cM4Fb-cFVu87GntOwBJtiBqMkgwD6V-A"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "7282300040d1bb64ad8e10d24277a48018b50a826837991003454110a2449cdebd4ef77ff3fe1330ce45d751599fc5057c8007d3ad099f2c1a13d39cdf5cabc7c998b02f18e165f35668d139bf73e22459da136898fef664b4b95f292ce3cce7484bdba44c8b4f152fbe2f874a37a834a62b8b609e95b3eb6151788e1b0de383a24bc4f04c9201da69c5f96ab78f9517ff54f3d25d9bf45e3f10ccf7f5f1e4045a07d5651df6fdfb1007c7c1c4652defc46ce3ec558581dad8d93cf46c1f12ee997a3d8d06e38aaceb0d6b257337d10e3114da6ebfe5be5cea6004846a8a5674b4787121b2ac11f8b753f968c46b0016ac152df8fd03ece604251a010000",
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
      "Tue, 11 May 2021 00:38:08 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-13-1620693471142",
    },
  })
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
      "00000002ff85536b6f9b3014fd2bc8fbda3c78242191a2354ae98694901548a36d9a903186b9054cb1695555f9efbb364dd7aa52fb09dbf79c7bce7df0846e599da1054a5971d7d1f6f1cb0d4fd119a21217f01a39cd5de53ff05f137eb89a90ddedc1da9b0fcb25209862095c35251d08deb5848ac53e1a162def1adc723e804403d31e98536b3c9ddbcecc341d0b788296f986d5b7c0fe2b652316a3d1497b58705e9414374c0c09af5ede47f7d6a869f90d25528cde4a8e40458c3e16fd5a728225e3f5721f81814ed036a115662558f8cfccd2f3b7a9870c57c302c0f78c504c08ef6aa96c410ac2eb9c155dabb3a2c513d2365f1d50e46dbc756c105e76559dd4b8a2674686254ee463438dcb70b735fce072176e57b1bf0b9268fddddbae86ebdd66bf0d22e3f0dd0b3d43e2b4a49a6b2c8d737d0be002fa191592d55a3d56cf4af9b941fefbb12802480bda0793d9788a4d773c4ff3744672d79ea4f998a6a99bce26d84ec764ee50274b29069e16d52c5cf3da4a27a66d9bb3c4c9304d1c6c59896bcdecc49d8c210d1d5bcedc44c733f4d032492f9868b8607d87d021f4632f89c37db05ec59e2e21c75d292f7a63aa80d71e251408a00f6a3aaa28e3a0a4daed07b117aed6b17fedf513ded00293c7e80e669ce3525040e3169a2769bbe519340c05abad7701603db11fa7a0408bdf4f48f55cb978d5f2177a0c035476a5fea2280efde09bb673425ce3b2d390fbfea0cac859a94c1fff001076b44f82aef65ef813f54f21cd694b6bf2f93001ac039ffe6aa7bd072c6c3ec8080977581d2294086969bf424c577b62bbeed499220d6ee5bb986b9aa7a6a91c2a23ad682d9f2beaf71e0aedc53af10282204c3fd0cd3afe03b22775ba77040000",
    ],
    [
      "ETag",
      "S4pqmIwoZ5oWQ5cOkW2U1w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1620693471142"
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
      "6fd3301086ff8bf9482a356b4947a47d48a18ca2ac1d6d3609d01479f62578737cc176824ad5ffce25db0a6248d997e4eefc9c72f7facd9edd2b2359cc6e55f9a301bb7b5582ffdc051b708df68e5e351a072c60e07949a4f9b5fef255e9536caf8bd751767ffea99df9e4ec8c0827be43c559bc6785022d1d8bbfed99e115509b40dd5426efb380f95ddd15b7d966b93aa7bc42d9e5abab344de6e9821d8263a3e49ee73dff82b69b43c0eef0760305583002ba596a8b7720fcb25bd3f1aad63072d858018ef5707f505a6c6a6e11475419859351189d8ca3b793e92c0ca727046a14dc2b34c45e6d693ee6d173bdc19fb4250b2744d83ea68d8bfed9525dc97e932e5caeb268da0ff837c085c0c6f87c102c9475fe41bd27f051857f49cd5f08d255293d04956024d8214ad53997d282738324ba9cd7f5119bafd7e973558cb4a8e430d8aa0140fbf6087c48d7c9ffa42583fdd1ea7d922d9e11ce936d8e48b6bc586cb3e4e2b2e36e1e8d30df79709716c9550e3a4385e3e9e99b59347ef0d83bec7c47df89bd6d206082d3aff2517916175c3b38fc064969193e88030000",
    ],
    [
      "ETag",
      "nzOYZil8ovVf+6TkGJv7tA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ltv` as __result, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `ltv`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-14-1620693471142",
    },
  })
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
      "546b6f9b4010fc2be8faa555fd00fcb614254e425b2407a718278aaaca3e60a197608edc1d4edcc8ffbdcb11e7d148898464b89dd999dddbf503b961794cc62464e96d0962fbe99a87a44140d1144fd9b53afefa57a4cab9eff4a6bc73e764597e7770800856b1245d171934252f450472bc98b752c1cb820ace9b98a869759b56df36fba34e7760595d1b7912b264caf21b64ff51aa90e3767bafdd4a394f33a00593ad88af9fcedb1bbb5d087e0d9192edd7926d5491edf7450f331e51c5787eb098a381528258c29ab20c2d3c33e3f0e875ea16a3eb568ae00d8b8046112f7355d9c21411cf139696426725e307a26dbe78217367ea9c04c62a539b9541a5b15c0a9065a61ac64a4b3f1e1637c6377f7666acb0bc84652057c6e50fc7778c2798eb190bcf73e681f1f9f08bf1dd9f2dce8de3ab7db8512ba0a518a462b93614d03083cacc63cfdcb7375511a8a212eae07260f6a935344761120ea264d8e985890961380c073dda09cd68d4856e1c02459eaab26b16cd796e43dcb1636a0ecc5e6cf722e8d0b06f77077d9a4018c77664d19e354c6897ec1ae44e3005a74c165cb2ba71e4d277036719f80bef641238ba8c84629b4e6b7355112f7d2a2c1241efd4b5aba28ca352750bae1738fee424702f9cfae2a790d2683bbfc5ab4f682601d154d0352810673cc6a691f3d9dc0ddc9937992243dfe6f91e21c9f8d7c33321d816bacb4aff9289ef4fae904385a0dbff62f3c077bdef64b77ba17741b3526334417fd5029b3a40e01a478f33691ec1bd2e520fdfaef18cc0b15460bd0effdee1d320b807b507f273e1f857a43ef221010179f4f1742058073e5ce7fd6e2116b70b65a4c26f9cc548562291807a26d9ba32b3670f47034bff19282ad49bd8b063ee9b5fe5a832c21a72f55851bd5bba9b55a8944f200ce2287975afff0130873014db040000",
    ],
    [
      "ETag",
      "ijtB+zrgtEx35Lo3wEllnw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-14-1620693471142"
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
      "6d",
      "4f",
      "c2",
      "30",
      "1485ff4bfdba11f602ba2524820a922c280312134348297763b0edceb60327e1bfdb56a3c4f8a5edbd7d4e7b4e7b22fbacdc9090acb3f4ad06de5ca520a77a1183a87329d4546129805804244d15c98e1f0ddfcb787b331906e962f4e2b9f7d1b4d75384605b2828094f24c920df0812be9e48490b50b2d58a9b1315269b4a7786d1537faeca0237ba9c2ca2a83f881ec8d9ba1055fb5fc16c1e8f27a3ff14cbb34576b88e21010e25036da1e2b80326c73a9da04595832db0e60c0431b0d94839d615e588b6ead88e6f3b5db7dd0d3cffda717c578139322a332c15bb98296b44a2a4798c47158e68809ba5ca9998f1a0db9da0e5b826872e6107fc809968dfc2bbf1d1625818cf97a2c06f79dd1f0d032ac1f92b587e5f3f682488678e2a8b001dc36b77be42dda1e6a57a00c96bb008a3ea4b1e3349c284e602ce9f1a0e86a5f0010000",
    ],
    [
      "ETag",
      "cwzyrktRh8NF9gUGX32DLQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcwOTAsImlhdCI6MTYyMDY5MzQ5MH0.QaPFZ06M7QBPThGFXjem_tJ63QPQLPbjjTcJcVj8_PJPJJAl8ui2We7mDTzWBzbleYnAE5s5IBGbo90wbLN9CIeKJPmBbVtma4R3EEuUihc3GMLBVPWvpgNxsW0LsmzzCwDArmBp7zhhgCvUS-GzJgqofboIVG04OF_GP4EC9vAYRe5mlUurnU5Yf8extE6r0OiVO2EbuE18we5qfManJNVCNQIwapaFU0qrD94iQYdgPjfp67lTSIKoub3MJOAcigjmQQKj7anTJdQlMK86sdJv9rWRNJ1-UJ4Id_LOS32zJAjlnmGAzrAdKq80QeJei4uGyPZAKG9tooNxRE5dsA"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "30",
      "00",
      "00",
      "d0",
      "7f",
      "e9b31a1414ba370a080a23a24c425f1a8482c0b815585accfe7d669f70ce0b24694ac7914c5d4d5bf00144b2839b74e3f61a2245263d67467875b4c2ae9f76355dfa13d1a372c05580e5812bf16dab6009debc4f47a898e6be14355593d839a927433009e2bda1dbd578bdda7a62c56e13b78677c41ae6974e7dd8b1e2fa9de6ebb3d31df6dfe6026758f99328d099fba1fc65225b702b2d44424a4ee03a0b9893c37aebaa07effeb4b40b0a95f0cc6c74fa299135ba41e4de27523cee6638ec34c31fc46249f9ba95b3c688d5d61ca208ac00e57dc9e848ca3757de43b802ff7632899ebe03104d1865e0f70f3b2aa4ee1a010000",
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
      "Tue, 11 May 2021 00:38:10 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-15-1620693471142",
    },
  })
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
      "db3014fd2b91f795b649dfa9548daa84b5134d479a82d03445b6739319d2b8c40e08a1fef75d3b94c126c1a7d8bee7dc73ee23cfe44e9429991026f2fb1aaaa72fb7929113029ae6f81aae16f741f5fda6bc74bf5f066c365accd2ebc7e91411c2b014dded0b682959571cd464bb69e795acf7b492b285895adea0e50dbbeed0eff5479ed7ef224f41915d88f20ed9bfb5deab49a773d46ee752e605d0bd506d2e77afef9d876e675fc95be05a75de4b765045753e16fd5a484eb590e574bb4103b5822a811d15055af8cb4cd9e9fbd46d4177ed1cc10f8203e55cd6a536b63005976526f2bab259c9e499589b6f0e64135c04f3d8e1b2a8776552d21d9c3829d534d14f7b70cea3f5ca5986e7eb68358b97eb30d9cc17c16ad69eaf2fb6ab70e35c2f82287034650558ae33754eed2dc40beaa7a0b428ad7a6c9e8df24b8396ff8fc510505a41134c46ee907a63d767191bf16cdc1bb0cc05c6c66c34a03de672bf0ffd9401459e15b52c5acad2ebd1bedff5d3c41f7237e9b36c9050df1f25ae9f66781b7b5dcec8e1843c5642c399507ba944d321721d2de32089a36d389fc5812d21a375a1cf1a63a680b71e351688a00f6a3a98a890a864dabd0ce3209acde3e555d04cf80272ca9f36f738e38c160a104d2b6c9e866a255330ab3d5b056708b613fb710c2a32f9f94c4ccf8d8b372d7fa5c738406357db2fd9c4d132fc66ed1c1157b4a82de4a1399832325118d3875f08c41d6d9290cb6d10dd90e629820c2a28f9e7c344b00d7cfaab1df71eb1b8f928a334de7175b83222bc82668584adf6c8f6ddf178442cb8d2ffc63cb7eb1d9b6672988cb08352bf54d4ec3d16da88d5ea1584419c7e689b75f8033ac6ebbf77040000",
    ],
    [
      "ETag",
      "NMHqErJYnQ0JQEbA7HAdWw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-15-1620693471142"
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
      "d3",
      "30",
      "10",
      "c6",
      "bf",
      "8b",
      "799b4a4d977510692fda5158a5ac7f330984a6c8b32fc1c5c919db295455bf3be76c14c490b237c9ddf977cadde32747f64d3592a5ec5155df5bb0873715f8750836e05aed1dbd0c360e58c4c0f38ac8cf23c8d69f56e627deb6e52ee1d3e10daed7d7d74438f1156aced2232b1568e958fae5c81a5e03b509d46ddd145d16317f30a1b8cd37f3c547ca6b94215fdc67d9649acdd8293a374aee79d1f1af687b38456c878f1b28c1422320cc622cee40f87958d3f1da6818386cad00c73ab83ba82cb6865bc4015506f1e5201e8f86e37717c9551c272302350aee1536c4de6f693ee6d173bdc11fb4258b2f88b05d4c1b97dd734f7525bb4d42385fe4e3a41bf06f800b816de38b5eb054d6f927f57e83cf2afc4b6afe4a90ae4ae93ea8824682eda39429b894169ceb25d115dc9833365d2eb397aa34d2a292fde05ef500daefcfc0876c39f99fb464b03f5abd9fe4b31784f3649b3392cfef66db7c72b70adcc3b311a6070f6e65915ce520182a1e266f2fafc6c3278fdd60f01d7d27f5b68588094ebfcaadf22c2db97670fa05b2a7607e88030000",
    ],
    [
      "ETag",
      "Y2eLQXPpxoHufj4aB0CoQQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ios_app` as __result, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `ios_app`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-16-1620693471142",
    },
  })
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
      "4f",
      "db",
      "30",
      "10",
      "fd2a91f7cf2695b669fa2b951014c84aa4d276490a63d3d43aee2598a671881db60af5bbefe2500a431a52a424bef7eebd3bdf3d91354f576440421e3f14906f3fdd8b90d408281ae3a96faf47abb3f8bbbbb52f67ed1f77a3914ca3f8f81811bc6449bac9123892a2c819c8c1dcafc7b928329a0b7184898ecc2e3ead66d7b6da3dd36cb790272189c63c5d23fb4ea94c0e1a8dbd763d16224e80665cd699d8bc9c371e5b8d2c17f7c0946cbc956ca08a6cfc5ff424118c2a2ed2e3b98f060a09f90236942768e1c05c85a76f53d739ddd463043f7206943151a4aab485299848231e17b9ce4a064f44db7cf5417c67ec9c07c6920bb9a059b634a834168b1c6491a89ab1d4f2cf87d9daf8ea4daf8c259618f104e4d2b8b9743cc77881b913633e99387e607c3ef9628cbce97c669cddeec3b5830a5a5b81543cd5c6021a26509a7aee9dfbfec64a02555442155cf49a5d6af69b7618853d16f5ad4e1835210cfb61af43adb0c9ec36b4572150e4a932bb66d154a42cea80d5b5c0b47a60377b2babcd3a26f4c20eb3fbcc0cad8842d8eab6fa645723bf73aee082cb4c485e3590dc786ee02c026f3e391f068e2e23a2d8aa8bca5c59c46b9f0a8b44d07feada95512e50a9bc0d771238def03c70af9d6a00c61053b6f51f7004229a484034cde90614e45762854d23b3a9ef06ee74321c2343dfea6c8f9064f0f3e94008b699eeb2d26f32f4bce12d72689ed3ed3f313ff0dcc988ec76aff4ae6952688c26e8bf4ae0b10a10b8c711145c364fe18f2e520fe1ae7640e0782a30df867fedf0a911dc87ca03f93677bc5b521d7910410e29fb783a10ac031faef57ec7108b5b863252e13fce2293a508cba19a49be29cdecd9b6d933bb448373f52e669bed7d",
      "f3cb1c6546d840aa9e2baa764c77b30c15f20584411ca549d5ebbf4fddec70e3040000",
    ],
    [
      "ETag",
      "S9kGdBgXIy9HP4ZhGGsnfg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-16-1620693471142"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff6d91514fc2301485ffcbf5751806886109894c5149167043c28331a46c7773b0edceb64391f0dfbdad261063d26c7767df69cf490fb0cdab043c58e7d97b83727f91a10ecd10a16a0aadf85553a5101c402d322685d2ed64be1cdcfb092eb3af20bcdb85321c0e9950f11b9602bc03a439168902efe5009528916dab95b43b32a6f7b551fcd92c188fa62c94941861ba0882911f8ce1e89cd9eaedc9327f8e26d387ff1caf470736b48e304589558c26442d6983b19e987e4a9475812d458d8c518185ed8f4c52530b49d462a5e5f67975dafd41b777edbabd0e8305c542e75431bb987334d0a44511d107d70303483b72d3d43e772c6bd9a06d613e70837247b96adfe0a74d71195369139f5b5251a8932746a1d1fd6b78fd3ddcdf6b544f92b8894253a2d3bdfaa9744b86d75cdf447020167c258fb906cfee7ffc0644486f38f0010000",
    ],
    [
      "ETag",
      "ast0dSW9FBdeWgzLQDvQrQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcwOTIsImlhdCI6MTYyMDY5MzQ5Mn0.gR2K4fnX6fN92W7P62mxeAcJjpf_6mmEanf4gQ6DONZ8KLiMyX6z1etVzqgKiCzGMI8yXZpVfCtJjioUCLnJLkJ_YAIbcJFyRACcnqJt1FfHLNyiWCsL8xF1tLieqRSkrwxaPHtTK-6FSGqEhWF-mbUTe3YU5y1c6s6B2WO0FINblxzB-tHZIgKu5kDzP4Q0q0bDe11jDdiw0eU0sBP3OIyM8tYVt4O0jfyqrag02i1K-WITj0XsxH56p9DHXpIKEvoTcz-pi16gMfPvgM2nM3N4ckZ4WpY-jNZn3VNDs4WY3gxpFZ1E9JY508QXJzMR6fwFOQzzPv1pn_Vw4lYS4w"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff1dd04b7282300000d0bb642d0e1508a63bb1f8093fa12d58360c4af808863401043abd7b9d1ee1bd1f905eaf4488a46b6b42c12b98d2155a5e97165b1b4991d5c3711e25c71205d3853c15063e0935b49c20c6ce2c69d525a26223473626d2ed205656daa9d9ccbab302576830e0cd2f0da9a44573101e31c38d9c430f0d76af6470dc7a814a918321efa3246fcbe17460fc83f98c731c5f902bd8bacaf07b34ef34babdb8f68ea32f5defb4dcf5b777ddceead08c86b999e4e33e28605fb2aae134dd0777f914b9f411670d79f90e69eb9cfbb711cb796d6af0b3010b404656712292eac955348416e0df9e741323cf0083a49c70f0fb0717b9ba921a010000",
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
      "Tue, 11 May 2021 00:38:12 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-17-1620693471142",
    },
  })
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
      "fbb8e6414808448ad62ca52b52423a42da4dd3846c63985bc02936ddaa2aff7dd7a6e9da4d5a3f61fb9e73cfb90f1ed12daf3334438417772d6b1ededd08824e1053b880d72fef49217958b93b7b4d6e77c9ddedc75f978bf91c105cb324aef625eb49d13694c9d96edb2f1ad1ee7123440f12f5ec69cf764743d777c653db1e8f80275999af787d0bec1f4aede56c30386af70b218a92e13d977d2aaae7f7c1fd68b06fc40da34a0e5e4b0e40450efe2ffaa114142b2eeaf96e0b065ac99a9455989760e10f3323a7af53f739aefa0580ef39659852d1d64adb821454d4392fdac66445b347646cbe38a06db00a96894545d956755ae38a9d58195638550f7b669dc79bb51546e79b78bd48c24d946e9717c17ad15f6e56bb75b4b5ae2f8238b0142625335c6b6e9d9a5b0417d0cf9854bc36ea897ed6ca4f0d0aff1d8b2680b4645d309d0e5d6c7b439fe4644a73cf99907cc808f1c874821d32a4fe988d33c230f08ca861e15ad4c477b3a9ef78a94326593ace7d37f5a62e4989e70f596ee76cc21c7438413f1baed819977b2179d721741d87499026f12e5a2e92c09490e3b654679d315dc04b8f0a0a04d07f6a3ae82817a0a4db1d4649102f9649781574135eb102d387ed1dcc38c7a56480c60d344fb1662d3268188a16ebe00cc0666297c7a044b36f8f48f75cbb78d1f2677a0203d47695f9a26d1287d12763e788b8c2656b20f7dd419791f3529b3e7c0720ec6897047dde05f157d43dc52c670dabe9dbc304b009bcf9ab1df71eb0b0f9202315dc6175a8d422b461dd0a7153ed91ed8f3ccf4506dca8bf63ced0b18f4dd339744656b15a",
      "3d55d4ed3d14da89b5f2190441987e649a75f80d4abd312177040000",
    ],
    [
      "ETag",
      "X+bgsiIm6U1MbkUTqkBxPA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-17-1620693471142"
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
      "ff8d93516f9b3010c7bf8bf74aa4d064c986d407d2651b13256d42f73255c8b10feace70d43659a328df7d67da65533b89bec0ddf977e2eeef3f07f6533592456cabaa870eccfe5d05eeda076bb09d76965e2d361658c0c0f18ac85df6387928b7dfaec76989fbc7bbcc7d4f36f1f9391156dc41cd597460a5022d2d8b7e1c58c36ba03681baab9ba2cf02e6f6ad2f6ef275927da1bc46e9f3ec264de345ba64c7e0d428b9e345cfbfa1edf618b07bdcaea104038d003f4b6bf01e844bfc9a96d7ad8691c5ce08b0ac87fb83ca60d7728338a2ca289c8fc2d9d978f671329d87e1f48c408d823b850db1371b9a8f39745caff1176dc9c20911a68f69e3b27feea8ae64bf890f932c9f4dfb01ff05b810d835ae18044b65ac7b52ef0ff8acc24b52f3378274554a0f41153412cc10a5da824b69c0da41126dc1dbf6842d56abf4b52a8d34a8e430b853038076bb13f0395dc5ff93960cf657ab4f71be7c455847b639217972b9dce4f1e595e76e9f8db0d83bb05706c95516bca1c2f1f4c3fbf96cfce4b10bf4bea3ef44ce741030c1e957f9aa1c8b4aae2d1c7f031b7bd2ca88030000",
    ],
    [
      "ETag",
      "vNx3qfbJQ0LfoyxhNtVISA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `date` as __result, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `date`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-18-1620693471142",
    },
  })
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
      "40",
      "10",
      "fc",
      "2b",
      "e8faa595fc003fc15294b80949dd3a38c138a95555f6712cf412cc39dc91d48afcdfbb1c761e8d944848c0edccceecdeee23b9e559440624e4c95d01f9e6d38d08498d80a2099e8e3be2d48e7fb699c51e3a89f7fd075ccddb97070788e0254bd2d53a85ba1445ce400e66d346928b624d7321ea98a86ed975abd7327b4ebbd3b7ac4e0b7912d278ccb35b64ff516a2d07cde65ebb910891a440d75c3698583d9d37ef5bcd752e6e8029d97c2dd94415d97c5ff430158c2a2eb283d9140d1412f205ac284fd1c233330a8f5ea76e70ba6a2408bee70c2863a2c854690b533091c53c29729d950c1e89b6f9e2834cddb17b1c18cb882a581a541a8b450eb24855cd586aeddde1fad638f527e7c612eb8b790a72695c7f737dd778828d3c63e679ee34303e1f7e31cefcc9ecc2f83adf876b3b09341581543cd396021aa650dad9756df4f6ae4a02555442155cf4cd1eb56cd309e3b0cf62bbdd0d6313c2d00efb5dda0e4de674a013854091a7caec9a45339101c431ebb6acb0db09a34ee4d8edb6dd8f9cbe63864e97d2989a603ab60d645b230f395770c2e55a485eb58e5cfba3c05d04fecc3b1e06ae2e23a6d8a793ca5c59c44b9f0a8b44d03b756dcb2817a854dec3c80b5c7f781c8caedceaeac79050b699dee1e5c7349580689ad31528c8cf45844d231793e928184dbce11819fa3e2ff6084906bf1e9f09c166adbbacf49b0c7d7f38470ecd73baf92f360dfc917746b6db177a57342d344613f45f25705f0508dce0f0092ecd23f8ab8bd4e3b7ad3d2370301558afc3bfb7f8d4086e42e5815cce5c7f4eaa231f62c821631f4f078275e0c385de6f176271bf50462afcc75964b21461395433c957",
      "a5993ddb69f71c876870aedec4ec5e7fdffc324799115690a95d45d576e96e96a1423e813088a3e455bdfe07180e3dc9dd040000",
    ],
    [
      "ETag",
      "L4oF8fX3c1cw4gNJKeVY3Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-18-1620693471142"
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
      "51",
      "4f",
      "c2",
      "30",
      "14",
      "85",
      "ff",
      "cbf57533db40d0252482a2621622031ed41052cadd1c6cbbb3ed40b2f0df6dab51637869efbdfd4e734edbc0362bd710c22a4bdf6b1487b314d5c41431ca3a57526f159512c101542cd5e418cb8875bbd5e4ae46e9bf4c9e1f5b34dff77a9a90fc0d0b0661034986f95a42f8da40c90ad4b2e552d81b35a60e9599dcf66743dd15b436dd781e45fd413484a3f347536d7ff9e92c1e8def4f2916470736b48a3141812547e3a012b441ae46269c644595a32ba9161c2558d81ea482ea8a0922574f5cffd2f53b81d7b96ab5bbbedf0e349813672aa352b3f3a9b6068a14cb63daeb6c6000614b1d33b1ebce8cbdc073bdc0f57c9bc58c7083624799f4aef1c37a39e75458df2785c18f902353e8ff572dbe7d0c0e0ae593201d4aa2c9d3f22ebed2dd90e1957e09256a748033fd350f99823061b9c4e327f20cc6baf8010000",
    ],
    [
      "ETag",
      "NenLa77pQFues1ZQYJ3oUw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcwOTQsImlhdCI6MTYyMDY5MzQ5NH0.MrGrN-NJu8oTJ293gT4iflwY6m96DXspLiQCfSs18CTRJqfCZ-yd_bwM-EP9nGbuYBS1IjCVE6yiiZ9u90cVWUoW-dGB-sGY5rFbSTEdvXcXYo36mRQy0nxEl6JVFfClGkQBBJbxMp6YqOvOPNZ429DJAXh4CdjQBI8Mo1UNsYByOYrVUzAJPuMPpZ6U2ADppI_EEo_FwHsXa94dDRr1VBeO-xl2Jhg8EeLALY5hhwXkGezDxhxPZlcot5_tpLeOn6DOYVY5WADSDrnF8E-gI5TsQs1j3hn1bNwL5FXu7_kqmDM6xei4D811TzK3S4ldpwsZcszLRN9WaQKDRJuYaQ"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff1dd0d17243401400d07fd9e724630489be910ab1d2b49ac17a316bdd45116295d0e9bf37d34f38e70751c6408864682bb8a117345359dfb00deef66692f330bdc8e989c14dd614ef31614bde6767bf62d6ec1991640d1d0f70ff4672de846cd47b4c9c6b8df3e87b817aa07c99ee2a7efde85a56ecc752f2e7a0239fa54bfd3ca621361cf3249974d616057b5f6d7534e3e6e064a4686d283988dd911cd25c56da3bb9ae9bbb0a4695c1b82e8413e5646b2d7dd5d075edaa3c0d775ec6337be2cc08655fa3d85e5cb8c54204972049ea5992decf6e6d293c5cd00ac1a32b7b1049f9e46e555d5fa17f7b32cc1d3c034ca03df4e8f70ff8ee0ff31a010000",
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
      "Tue, 11 May 2021 00:38:14 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-19-1620693471142",
    },
  })
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
      "536b6f9b3014fd2bc8fbda2490470391a2354be81629212b9056d33421e35c985bc02936ada22aff7dd7a6e9da4d6a3f61fb9e73cfb90f9ec81daf766442529edf37501f3edd8a949c115034c7d7391bd55f2266dff7a2d23df085a2d7dbc7abe914115cb3242df70574a4686a0672b28dba792d9a3dad85e860a28ee3759cf3be7dee0d8663c719f69127a1c856bcba43f66fa5f672d2eb9db4bbb910790174cf659789f2e5bdf7d0efed6b710b4cc9de5bc91eaac8defba29f0bc1a8e2a29a6e2334d048a81328292fd0c25fe62ebd789bbacb69d9cd11fcc01950c64453296d0b533051653c6f6a93954c9e88b1f9ea40227fe5cf638b89a229aba4a2259c593baa68a20e7bb02ec3cdda5a06979b703d8b979b2089e6dffcf5ac3bdfacb6eb20b26ebef9a16f299a1660b8d6d4ba30b7002fa8bf03a97865d463fdac959f1bb4fc7f2c9a80d212da6032b6cfa9e3da5e9aa56396b983519ad990a66e3a1ed1416a336f08c35d0a147946d4b068252aaf6fdb7448d3848ebd4132ec3b76e2b2fe28c9520780c26eec787d723c238f3557b0e0722f246f3b446ec265ec2771b80de6b3d8372564b429d4a235a60b78ed516181087aa7a6a38e72814abaddcb20f6c3d93c5e5efbed845790537688ee71c6192d24209ad6d83c05f55aecb0612498adfd0582cdc4be9f82924c7e3e11dd73ede255cb5fe8310e50db55e64ba2385c065f8d9d13e29a168d813cb4075d46c60b6dfaf80b81b8a36d1272b5f5c31fa47d0a21831a2af6f130116c021ffe6aa7bd472c6e3eca4885775c1d26b508aba15d216eaa3db1bda1ebb9c4806bf56f6c640fdc53d3740e9d114aa8d47345edde63a1ad58235f4018c4e907a659c73fe687b7cb77040000",
    ],
    [
      "ETag",
      "Cc5rBSc0q/Sm8yiDtaVUwQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-19-1620693471142"
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
      "8b",
      "f79548a161e98ad40fa4cbba4c24e908952a4d1572ed83b9331cb34dda2cca7fdf9976e9b44ea25fe0eefc9cb87bfdb2673f542359ccee54f5b303b37b5781fbea830c6ca79da5578b8d05163070bc22f2717273913d7c59c2faf1571809d9f1ec72969c9f1361c577a8398bf7ac54a0a565f1b73d6b780dd42650777553f459c0dcaef5c54d9e2d569794d7287dbeba4ed36496ced92138364aee78d1f36f68bb3d04ec1eef3228c14023c0cfd21abc07e1167e4dcbeb56c3c862670458d6c3fd4165b06bb9411c5165149e8dc2e9c9787a36894ec3303a2150a3e04e6143ecf586e6630e1dd7193ed0962c9c1061fa98362efbe796ea4af69bf870b1caa7513fe0df001702bbc6158360a98c754feafd019f55f897d4fc8d205d95d24350058d043344a9b6e0521ab07690445bf0b63d62b3f53a7dad4a230d2a390c6ed500a0ddf6087c4ad7c9ffa42583bd68f531c9e7af08ebc83647245f2ce79b3c595e79eef6d908b39d037b65905c65c11b2a1c471fde9f4ec74f1ebb40ef3bfa4eec4c0701139c7e95cfcab1b8e4dac2e1372f5188dc88030000",
    ],
    [
      "ETag",
      "x3XCRwJMeOxz14cduaRGBA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `stamp` as __result, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `stamp`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-20-1620693471142",
    },
  })
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
      "4010fc2be8faa595fc00e31796a2c4496882e4601be3a45155d9072ceec59823dce1d489fcdfbb1c715e951a0909b89dd999dddb7d226b9646644002b6ba2f20df7db9e301a911907485a7a7edb5f778fbc31c3f86f3c9f4617dba9d5ede4f8f8e10c14a96a09b2c81bae0451e8218cc678d55ce8b8ce69cd73151bda5d78d6e4bef5a66bb6718ed16f20424f188a56b64ff9632138366f3a0dd5871be4a80664c3442be79396f6e5bcd2ce777104ad17c2fd94415d1fcbfe871c2432a194f8fe633345008c817b0a12c410bafcc2838799fbac1e8a6b142f0968540c39017a92c6d618a90a7315b15b9ca4a064f44d97cf34166f6c83ef3b5a5909873a951a12d1639882291356da9c49f0fb3b5f6dd1b5f694b2c30660988a57673697bb6f602735c6deebaf6ccd7be1e7fd32ebcf17ca29dde1ec2b58306da8a4048962a533e0d12280d3df7cdf9f7b64a02955440155cf4f42e35faba15c4412f8cfb6627887508827ed0eb5033d043ab0ded28008a3c5966572c9af2b41bf7e3208ea24e3fa4f86151dd882c6ac4d0866e27ea196614991dbd13937d8d3ce44cc239131917ac6a1eb9f11cdf5ef8dedc3d1bfab62a23a6d8a8f3ca5c59c45b9f128b44d07feada9751c651a9bc09c7f56d6f78e63bd77675f92358d17037bbc7eb8f692200d134a71b90905ff1089b4626e399e33b6377384286bad1c90121c8e0e7d32bc1df65aacb52bdc9d0f386b7c8a1794e771f6233df73dc0bb2dfbfd1bba649a1308aa0fe2a816d15207087e3c799d04fe08f2a520de0bef68ac0d19460bc0fffdae35323b80b9507329ddbde2da98e3c88218734fc7c3a10ac029faef461bf108b1b8632389192e12c86a2140973a866926d4a3307b6d5e95b2651e05c7e8c7575d33a34bfcc5166840da4f2b9a26abf5437cb50215e",
      "4018c45172ab5eff050b9fa64adf040000",
    ],
    [
      "ETag",
      "B4kRzYX3OzcUPQwkBvQHqQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-20-1620693471142"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff6d91516bc2301485ff4bf6382badb6dd5a10a65236418babf5610c91186fbb6adb7449aa13f1bfef261b4cb6bd249793f385739233d917f596846453e4ef2d88d34d0eea590f09c8b65412b786d712488780a2393a0fa317ba71f771cb52fbd6f59b711437ed71304087646f5051129e495640b995247c3d939a5680d87a2dcc8d6853a7462be964162dd2e16c8e52c5b75a8a97d3e970348dc8a5730536fb1f68912693f8f13f6275e9901ddf249081809a818ed108be03a626baa1a455538225792b184862cce62017bc6da8e0dc42c5ead996e3f76c3fe8bb778ee3f6d058724655c16bf42e17188d28ae6899f0231624da20cc885d33b31e5076badebded798113b85160ea681576200ebc90f6037c98385dc62b13fd0febbb48bbde15cc802a707e93abef38a3930239171cbb49d0b5fab6f75572ccb55fe18328d14287308adff454281266b49470f9040e397f9304020000",
    ],
    [
      "ETag",
      "vBYab4kNucT0+46pCENpuw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxMDAsImlhdCI6MTYyMDY5MzUwMH0.ArYQQBV-VLHxgPKlM7sAnMH1opS84hcbOYsi-IxoJnK9cXrZ1kPV0z9HMIEjtqe93oeGSyoQ8kInyuNuIwwl2fYZaZhAoZvpZkXBOygZQoOER-aaZs2Hm0M3WyH8I3W7yCGJfVbFdimlbTgu7XAXRHUH8B3kmQdnvfGlhrBUWZsdhronYTxMJmcLr2Kv2R5KhxVFTa7IG-6URfl1_4zBSe9NjNtNt4IEq9Km7fh3NBLrd88Mvd8DESxFF4m5FJkh5pTu2ArRMUYzUA0fVgFrLnUsDmJ5Is1KlDfiedCxQ2kdHon1Ovi5ovIhpGrQvjyEUxG-BtsdH2dctak2uQsJmQ"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6e82300000d07fe9b39a50b20cf6569cc86d053480f2d2945a0a725328b72dfbf7997dc2393f8032c68781c8aee22df8002b85fa8eeddc876610c1e8729904f57257942d71822e4481895351757b6b895073a862251a052e3015895edb86a392fc2e6b13dae7d4bc99fe8cfb88d4d7a7ea17f208836cd82edfd060894b9e08d5a2e72c6df3d94d8a58096e50ba4e3c4984e9fe30613b2c8e21d7caf3e1fe6e5d4f48c5fe57a94db961c57596d9b1218b7dd86041abb267db4fff995c70ae4efa38b120e4a7d41b56d4acf302c5d5d3dd5181a6e67b3ed800be3cca9e0fa47c71d5375ddf807f3b91eb83bf020c4e7bde83df3fe8bea57e1a010000",
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
      "Tue, 11 May 2021 00:38:20 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-21-1620693471142",
    },
  })
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
      "fbb82684843ca568cd52ba444ac84a48ab6a9a903117ea1630c1265555e5bfef629aae55a5f613b6ef39f79cfbe0993cf03c221312f2645f41f9f4ed5e84e48c80a209be2e36fb9ff7df17a979353ea8ea76273657a3ea713a4504af599266450a2d29aa92819cecb6eda41455414b215a98a8d5b55ad6a0db198c7bf6d0b2ec2ef224a4f18ae70fc8be53aa9013d33c69b71321921468c1659b89ecf5dd3c74cda214f7c09434df4b9aa822cdcf457fa48251c5453edd6dd14025a10c20a33c450bff995178fe3e759bd3ac9d20f8c01950c64495abda16a660228f7952953a2b993c136df3cd816c9d9533f70d26d22acb839c6670664454d1403d15605c7a9bb5b1742f37de7ae62f376eb09d2f9cf5ac3ddfac766b776bdc2c1ccf31140d53d05c636a9ceb9b8b17d48f402a9e6b75bf7eae955f1ab4fc38969a80d2129a6030ec0ca835ea8cc3381cb278d4eb877107c270140efbb41776d8d8063b0a81224f8b6a16cd456e5b7438b47a5110511807764cc3603ce85b41c47ae1201a0dac288ec8f18c3c965cc105978590bce910b9f196be13f8dece9dcf7c479710d32a55178db1ba80b71e151688a04f6a3ad6512e50a96ef7d2f51d6f36f797d74e33e11524943d6df738e398a612104d4b6c9e82722d226c1871676be702c17a62bf4f4149267f9e49ddf3dac59b96bfd27d1c606d57e92fd9faded2fda5ed9c10d734ad34e4d01c488196efb036747dfc8b485cd2260bb9da39de2d699e3c88a1849c7d3d4d04ebc097ffda69f1118bab8f3252e11d7787c95a8495d0ec10d7e5beb0fb9d4eb73f221a5caa0f31dbb24e5dab73d41921835c",
      "bd54d42c3e16da8855f21584411cbfabbb75fc079c035e6078040000",
    ],
    [
      "ETag",
      "HOqBj+Hl/Q9vtuYUoOQ8uw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-21-1620693471142"
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
      "82",
      "50",
      "14",
      "86",
      "ff",
      "cb",
      "e92b2c31a262f30396a985668a5bad39778583a2c0c57b2f39e7fcef9d4b66addaea0b9c7378cee57d5fd8c12ac923706196ccd7258aedc91cd5a32e8628cb5449ba153c970806a062732257776b55c8d3a776677dff9c0f8a519b95bd4da341840c17983170771027984612dc971de42c435a0b795a66f9b4ea0c50db420f47c1b0db6f539ff148f7fdb1ef7b4dbf057be3b81831c5a615ff8fb5c9de80259f0d31468179885a4b21f81243d5d53625cb8a144dc94b11a2840aae1ecc052f0b2638376962d62dd372ea35e7eaccbeb02cbb4e60ca43a6129e133b1e913e505cb174c837e4121c02445592e1b8babed238892a23baecf603c7aef47d05485a9ca438fd1b24bd0b469fe1033b44f09d63192f7375a46efd07efb7e328d3cfa36ebca0f583908a923a2241b7d71a055e6fa0b9c9c17b73ab500e04a72025ea0cad9a7d797ee1d4de63bde63a6a7a8fab448906848cfe8e4ea2c08d592a71ff06caf0f8a37b020000",
    ],
    [
      "ETag",
      "kJqtps/XGHqKYnPpSGauMw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COALESCE(AVG(`amount`), 0) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-22-1620693471142",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85537d4fa33018ff2aa4f78f267b01c65e13e3e1e43c92b9296333dee5b29552b00a14db326f31fbeef7004edd9968b284b5bf97e7f73c6d9fd103cb423442018b1f0b2ab6dfee79801a882a1cc36ebacdedbf9bb6f5547893eb739127faf2d7997d72020c56aa244ef38436252f04a172b498b762c18b1c0bce9b60d434cda6d133f5deb063f50dc332412769124d58f600ea3ba572396ab7f7b55b31e7714271ce648bf0f475bfbd31dbb9e0f79428d93e2cd9862ab2fd79d1d38413ac18cf4e16730850482a5634c52c81086fca30f87e68dd62386dc540de30423121bcc854190b2c08cf221617a27245a36754c57cf707cd9d8933f6b5f1cc9e38f3b173642f2f8ed6382d3dd6c70d4d3fd6b0d4562b416591a886b686f62296d0150bd735923f683fbcd9252010e60e4b2ad7dacd4fc773b443b23bd516d3a933f7b5a3d363edc29b2daeb4b3db030e040ea9542cabe2fa38486819f565a2eec7732c055841cd1a5cf5f51e3606fa3088823e89069d6e10e934080641bf8b3b814e8616b5c28062d0a9d2bd52e18c673d1c0438225d330a436af4753cec18b83308f09046e1b06f5262f5c082a05d033d09a6e839933997ac1e2bbaf15cdf59f9de623ab67da76a23c230aff33a5cd9c4fb9c0a9a04d2277ded4a9471a8549e913bf51dcf1efbeed2a9afc584c6986ce78f7031229c480a6c2c704a1515973c84a1a1abd9dcf5ddd9d49e80a23aebab3d43a2d1efe73781bfcdab29abea8b6ccfb36f418385c0dbff30c8d1b3d06ef7aedc12274545a9f8d5aaf6dfd40032a097b79589767f76f06b20b8ffb53bba5e38de2daab73c1a514133f2f5b903b902be7cc6fb37055c785550462a58c32d23b22c4204ad6f1b4babb8b5baab1b1d63882ab2501f30cbeaecc75a7a948e34a5997ae9a87e53d5a04aa890af2400e1924cdde905a0ff00d448b51cd3040000",
    ],
    [
      "ETag",
      "mypAxv/4wuRLQDrpl0VZBA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-22-1620693471142"
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
      "000002ff6d905b6f82401085ffcbf4b150010d5a121fd45a6b426c4bf5a93166c5015160e95e3468fcef9da54db449f7612f33dfd93d67cfb0cfca0d04b0ced22f8da2be4b51bd9b4d8452e74ad252f1522258808aa544e6875adf9f74d25b6c1d1f27fb566bf4a48ffd3e1132de62c12038439261be91107c9ea16405926cb512cd8d84a9ba3295e7f07530a763c137e6385b84e160188ee162dd88aafd55309dcdc79371f49f6479b160c7d7112628b08cd178a804df61aca6269e644595a32db916314a68e0a6910aae2b2638b7a9627b9eedfa9ee33fb63b5dd7ed7804e63c662ae325b18b0ff2068a2b9647fc48e9c000a2d952d0a4990f54761f7a5ddfb919ed26d4a15118af7fe1eeb5ed9af6f2f79161ad50be094e8e251ab36dcff9b13ee2268ea2984a68b42066f4f32f99822061b9c4cb37a9dea5c5d7010000",
    ],
    [
      "ETag",
      "lvyu+zuf8Uh06eGk//CDuw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxMDIsImlhdCI6MTYyMDY5MzUwMn0.HUdTLiPSKW9IyclXxTB3DcKE8Oln0oZN91HjR6i9wp2Q3FJnhxPacOG-FXQ684itToUWY725RQEBwkCPpJAYevapH4hGnUh2m-KVINQA2mCmsjGMkD0RXvRZvNca3LHDQRij99BJuBI6SbirlEQkPhQaEonV5tIPIwok-A0Jk3uFueDAjpF73HMI0gdXO6W_4bwWO1xWTPiTNJEk4b8DZlGHXyYz_m-DA3TNLcfyEuMX01j_ANcHcuTo3Z2eErti8sggfeqqy55K_jG4GV0fINtGeVZTQ8RpCdJvqUOmBnokn-4JOt4FLSKETGFaMF0kR06uiOYeMLNHPweVZ-3g5w"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d04b7282300000d0bb646d1d229f91ee040d280854a88a9b4c1a8322053349f8767af73a3dc27b3f8050caa4c4ea59b106bc83912cec399d077ce9e01b7564d63486e00486c2bb0d3befb4469a764a63f766b977945b1647db00e59b209dd22373f68f902763bf378c16fa9702574921a94161ecd2cb3787f7a1afd2b3b9f18537e56f5e2697ab649b8f07aa2cb1fb1207365451dc74add79066a7a0269fe642afb5ab2ae356bb7e1ea77bd0ae37b85e45b521a1af4cbbef1ff8a3a85bb3db8748465d1a76dc35b27e0b1315ba41ad900ed70fafac1021637c266006d8c04bc1242e5f5cddb4ed19f8b7633572f60a7018114c80df3f5d4e987e1a010000",
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
      "Tue, 11 May 2021 00:38:22 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-23-1620693471142",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85536b4fdb3014fd2b91f7953e539ab65235aa368c4a341d490a9ba629b29d9b6048e2103ba00af5bfefc6a10c84049f62fb9e73cfb98f3c937b51c4644698481f6aa8f6dfee24232704344df135c8077be7c6b93fff950275e2f06995c8c5d57c8e08d1b014cdcb0c3a4ad6150735db05ddb49275492b293b98a833b43b83f1b03f9eda236730180d91a7204b2e45718fec5bad4b35ebf58edadd54ca34035a0ad5e5327f7def3d0e7b6525ef806bd57b2fd94315d5fb5cf47b2639d54216f35d80066a0555043915195af8cf8cd9d9fbd45d41f36e8ae047c181722eeb4237b63005974522d2ba3259c9ec99189b6f0e24702fdd65687199d57911153487132ba69a467a5f8275ee6f37d6da3bdffa9b45b8de7a51b0bc70378bee727bb9db78817573e1faaea529cbc070adb975666e1e5e503f06a54561d4c3e6b9517e69d0fae3581a024a2b688391d31fd3c1a43f6509737832b14f59d207c626cc39a536ebf3e9084631038a3c236a58b490058b69c2c0e1913301271ad9cc89a6c96810d9767f0c6c08034c420e27e4a9121a5642955289b643e4c65f876e14fa3b6fb9085d534242eb4caf5a634d016f3d6a2c10419fd47468a242a252d3eeb517bafe6219aeafdd76c2979052be0f1e70c609cd14209a56d83c0dd546c6d830e22d36ee0ac166623f8f4145667f9e49d3f3c6c59b96bfd2431c6063579b2f09427fedfd30768e886b9ad506f2d81e4889966fb136747df88b485cd2360bb9dab9fe6fd23ef990400505ff7a9a0836812fffb5e3e22316571f6594c63bee0e578d08afa0dd2161ca7d619ff687c3914d0cb8d21f6298fcd8b5264793117228f44b45ede263a1ad58ad5e4118c4f17ba65b877f204eeed678040000",
    ],
    [
      "ETag",
      "Sm1y7W7kFXgea7dTwDfoAQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-23-1620693471142"
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
      "414fc2401085ffcb782d09052cd28403282211104af1620859da69296ebb7577aba984ffee6c45346aa2977666facdf6bdd7eee131c942706193c44f05caf22c463d378587aae05ad12d179942b000358b89ccc369cc78cc979decbebc2d1a9e5d1fbecebb5d2254b0c59481bb8728411e2a701ff690b114692d10bc48b375d559a0cbdc0c17be379a0ea94f4568fae9723ceef5c7033858a7c59069b6aef87facad0e16ecc4c6c3082566011a2db9143b0cf4c8d8542ccd39d6942864800a2ab87a104b51e44c0a51a349add1acd94ea3ee749aadb66db71a047211309d888cd8e582f481169a714fbc904b700890554986a3eafa4ce324ac8c987234f59d56a5ef2b40d2a284e3fa6f90f46e197d860fec18c1778ea5a2c8f489ba1edff57e3b8e32fd3ceaaae70f7e104a535227c41f4d060bbf3799196e75f4de2f35aa991414a44293a15d6f5d9cb79dfa7bac97c2444def71b52cd08280d1df7193687023c6151ede00fb0e28267b020000",
    ],
    [
      "ETag",
      "pdNgalglU9nVyKu2R10GzQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-24-1620693471142",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8553fd4fdb3010fd5722ef1790fa91af7e4a88752563d1da14d214d44d53eba476302471b01d5087fabfef9250a04302a9526abff7eede9def9ed01dcb3668884216df17446cbfdcf21035105138865b39497c6e5f5e873fffd23c9b2e7f914df1189f9c0083952a89d33c214dc90b1111395ccc5bb1e0458e05e74d08d434eda6d135f5eec0b27b86619ba09324a11396dd81fa46a95c0edbed7dee56cc799c109c33d98a78fa72df7e30dbb9e0b72452b27d98b20d5964fbe3a4a7098fb0623c3b59ccc1402189589114b3042cbc2a37e1d7c3d02d86d3560ce40716111c45bcc854690b42443ca32c2e4415150d9f5065f3cd1f347726ce38d0c6b385171cad715a8ad7c71a96da6a25882c12d5d0d65013650959b1cdba46f23bedbb3f9b02020e6eb02472ad5dff707c473b24bb9eb6f03c671e6847a7c7dab93f5b5c68df96071c70b92152b1acf218e03021a5bfe736baef1faf146005396b70d5d3bbd8e8eb839086bd88f6ad4e48751286fdb0d7c156a847039bd89b9060d0a9327aa5c219cf4c9d523dd42d8c6d6a7588d1b56c1bf70cdd1e9806a5380aa9d537a96da15d033d0aa6c819933997acee25baf6ddc05905fec21b8f02a72a8362e8d7596dae2ce2ad4f054502e983ba7625ca38642a1fc6f502c71f8d03f7caa9676142621c6de7f7300d142792001b0b9c1245c4946fa069e86236770377e68d26a0a81ef862cf9068f8fbe955106cf3aacbaafaa291ef8f96a0c142e0ed7f18f8e8da68b77b93ee0a274545a9f8d5a98eff5003c8805a5e4f26dafdd9c1af8160e8ebe8e872e1f84b545ff9841241b2e8f3770772057cbabbfb45022eac12a4910ace3065912c934482d4d3c6d2ca6eadeee896d5d5514516ea1d06c1f76d2d639411494a32f55c51bd4855a34aa8902f240061483cd73b07f41fab114209c8040000",
    ],
    [
      "ETag",
      "sLlRo4QWbKzfpnMYZeduwg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-24-1620693471142"
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
      "ff8d904f4fc24010c5bfcb786d232d7f8c4d3850431443002b9c0c21cb765a0b6da7ee6e41247c77675763387ad9ddbcf79bc97b7b867d51a710c1b6c83f5a54a79b1ccd8b7d24a8dbd268be1aaa3582076844ce64759cdff63f9fe5aeb38897f3afe3ac1af5e3d170c88496ef580988ce901558a61aa2b733d4a2421edb6c94dbc89839355699cc96e3c771c24245a91566abe974144fc770f1aec69afdbf46d6170f76b44d304385b5449ba251b4436926b6a0165553a2afa955123538d819b9a2b6118ac867c50f7b7e30083b83fb6eef2e087a21832549610aaa995dbd723630644499d091fb8105947b72d5cc9d0796fbaec3c10136dab537f8f302ebad7f17c627837aa188d369b4c1ba61e727e603d9e8862b19d5a20752f03f3f1506a24c941a2fdff010c1dcc5010000",
    ],
    [
      "ETag",
      "mwO/5xJcj0PBTOzwNmA5BA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxMDQsImlhdCI6MTYyMDY5MzUwNH0.OsKdFvQubVgBoc1qrZKue5xGVISHKvSWj0y7UHxQYRBkhcL8P6MMO3gBKSBWwgNyd8BpaeNC872SJcmLNCGqtf4s-x-_AibOnADq0d5u-tQIbtox2zXn_r6-xPRIKBcC9KXDHo4fN1uu5p_qrE40cJnb9xVVTOTIQwRZd8TWFakFEPw0oyb3e1DDBht2SYD8s1mBdiUy8T90uC5AaaXLzakIJt17FMUb7GNsBKET5Mi0ijoRBPmLkHkJCAEbBDwkETXtY4yst01JEKUQye9FCTJh8ljPYd4GilIKE_E3PZQOuoDawZsbbckT4ahOcTvuIiUmUqRStDz2kL-nGo4Tgg"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "82300000d0bb642d0e2088746744181ad40e3fc32a831830201f0322c1e9ddebf408efbd419a65b4efc9d056b4015f40a4aab9cc96a8db4052e455d1876671a3cff1be591fcf9626e670a532e9a9af8be8676b78ac76d939dbb43bf7f5e84b15f24cefec003b86d08516eee1eb105df6fe2c5d4d94b8a9976fef6be974332826c293f118bb22901ce4cec21ef078ca3d148c2a2b35d98ff9d962ad8bdb7a6ccac4272419bc4b05cbf4991879a0451abaa634b627a5d9d50a99a7d94136519be688b18da27257d7d03acaafc7413970631a0afb5bf66f21040b40a78e71da13f6e1ae74d35c807f3b1944473f0190a69c72f0fb0796a0033c1a010000",
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
      "Tue, 11 May 2021 00:38:24 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-25-1620693471142",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85535d6fa24014fd2b64f6b52a288a9a98adb1b43551b4806d9acd860ce3854e8b0c65061bd3f8dff732d46e9b26ed133373cfb9e7dc0f5ec913cfb7644c629e3e57501e7e3d8a989c115034c5d7f5cdd5d57d962aeb20e0b91bf075cf5cdfbc4c2688e0354bd25d91414b8aaa6420c79ba09d96a22a6829440b13b5bafd9635e89a8351cf762ccbee224f42962c78fe84ec07a50a39ee744edaed548834035a70d96662f7feded9773b45291e8129d9f92cd94115d9f95ef4772618555ce4934d80062a0965043bca33b4f09fb98dcf3fa76e73ba6ba708de7306943151e5aab6852998c8139e56a5ce4ac6af44dbfc702081bb7067a1c14456edf228a73b3833b654d1481d0a302efdd5d2987b972b7f390de72b2f0a66d7ee72da9ead169ba5171877d7aeef1a8ac61968ae3131cef5cdc30bea6f412a9e6bf5b07eae95df1a34ff3a969a80d2129a60e498036a0dcd519cc40e4b86bd7e9c9810c7c3d8e9d35e6cb2910df636068a3c2daa593417f9880dcc7edf49228af8c88ea9150d13d3897a493cb4acde08e2a1438e67e4a5e40a2eb82c84e44d87c89d3f0fdd28f437de6c1ababa84845699ba688cd5057cf4a8b040047d53d3b18e72814a75bbe75ee8fad35938bf759b092f20a5ec103ce38c139a4940342db1790acaa5d862c388375dba1708d6135b9f82928cffbc92bae7b58b0f2d7fa78738c0daaed25f1284fedcbbd2764e885b9a551ab26f0ea440cb0f581bba3efe45242e699385dc6c5cff9e344f3e245042ce7e9e268275e0c77fedb4f888c5d54719a9f08ebbc3642dc24a687688eb72dfd87dd3b6bb26d1e0527d89f56de7d4b53a479d117690abb78a9ac5c7421bb14abe833088e3f774b78eff003b7a8dee78040000",
    ],
    [
      "ETag",
      "PQGGYlgt1yoeq2SiP30PQw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-25-1620693471142"
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
      "00000002ff8d925b4fc2401085ffcbf85a12caa560131e00416bb849cb0331842cedb414db6eddddaa48f8efce5644a326fad2ce4cbfd99e73da033cc45900366ce2e8b140b1bf8850dde9628eb24894a45bce338960002a1611f95217af9ba95f376bcc1db2c1b27f3b692fa34e8708e96f3165601f208c310924d8f707c8588ab4e6f3a448b375d919a0f6b91ebadedc995c539ff240f793c568d4ed8d067034ce8b01536c5df2ff585b1d0dd8f1cd1c431498f9a8b5e482efd0578eb629599a275891bc103e4a28e1f24124789133c1798526955ab3625ab5aa75596fb44cb3512330e13e5331cf885db8a40f14572c99f36772091601a22cc970585e9f681c07a5115d3a13cf6a94fabe02242d8c135cff0d92de2da3cff0819d22f8ceb19417993a53c3d1b4fbdb7194e9e751575d6ff083908a923a239e331eb85e773cd3dceae4bdb757286782539012758666b5d16eb6acea7bac7daea3a6f7d84a146880cfe8efb88915d8214b241edf00c2eb86f87b020000",
    ],
    [
      "ETag",
      "x3rzbOc312aSFaEYCJN8Yg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COALESCE(SUM(`amount`), 0) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-26-1620693471142",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85537d4fe23018ff2a4bef1f4d7819630c46623cc49db70b0c6f1b1a73b94057ba591deb6c3b3ccef0ddefd9262a67a209c9687f2fcfef79da3ea17b96add010452c7928a8d87eb9e3116a20aa7002bbde5962256eb69dfdc59be98fee9f9ca7dfbdc7931360b05225f13a4f6953f242102a87f3a095085ee45870de04a3a661353b96a15b76d7ec773aa6013a49d378c2b27b50df2a95cb61bbbdafdd4a384f528a73265b84af5ff6db1ba39d0b7e478992edc3926da822db1f173d4d39c18af1ec641e40804252b1a06bcc5288f0aa5c455f0fad5b0caf5b0990378c504c082f3255c6020bc2b3982585a85cd1f0095531dffc41813371c6a1369e8d264e30768e82f9f46889d7a5c7f2b8a1e9c71a96da6221a82c52d5d096d05ecc52ba60ab658de4f7da377f360504c2dc6249e552bbfeeef88e7648763d6dee794e106a47a7c7da853f9b5f6a6737071c08bca252b1ac8a1be228a565d4e789baefcfb1146005356b70d1d72ddc19e87614477d120fbabd28d669140da27e0f77239dd826355711c5a053a57ba5c219cf2c6b100d30ee111b770cdcb76d83f4696fa077a38e1953db8c22ba32c008ed1ae8513045cf99ccb964f558d1b5ef86ce22f4e7de78143a551b3186799dd7e1ca26dee654d024903ee86b57a28c43a5f28c5c2f74fcd13874af9cfa5a4c6882c93678808b11e35452606381d7545131e52b181aba9c056ee8cebcd10414d5595fee19120d7f3dbd0ac26d5e4d59555f34f2fdd10d68b01078fb1f06392c13ed766fca5de1b4a82815bf5ad5fe9b1a401de8e57565a0ddef1dfc1a08ee7fed8e7ece1dff06d55b3e8da9a019f9fcdc815c019f3ee3fd9b022ebc2a282315ace1961159162182d6b78dadabb8b5baa7f7baba8d2ab250ef307360edc75a7a948e744d33f5dc51fda6aa419550215f4800c225f15cef02d07f9ea6ea6cd3040000",
    ],
    [
      "ETag",
      "NBg6gInyOzavMJ3xpolHNw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-26-1620693471142"
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
      "6d905d4fc2301486ffcbf1d20df781632ce1020c2a6699382031318494713607db3adb0e2484ffeee934ca85bde8c739cfdbbe6f4fb0cbab0d04b0ceb38f06c5f12a43f5a23731caa65092969a5712c100542c23722e0e3babf2a7b3d79be8e9fad6f7f2ee6774180c8890c93b960c8213a439161b09c1db092a5622c9562bd1de48983ad6ba721f3e0fe7742cf9461fa345180e47e118cec685a8defd0926d17cfc308eff932ccf066cf93ac6140556096a0fb5e05b4cd444c793acac0b34256f4482125ab86d64823735139c9b54311dcfb43dc7f2fa6eb767db5d87c082274ce5bc227631236fa0b86245cc0f940e3420da2d054ddb794fe57ec7edf52f479b69df0ab4d54bd6b63aaeffdbb7757ff9f3c8e8a8504e0527c712b559d7b1beaddf711d47514c251a342061f4f38fb982206585c4f3170f582631d7010000",
    ],
    [
      "ETag",
      "Trwk0n8PSX/NJ+586i4xNw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxMDYsImlhdCI6MTYyMDY5MzUwNn0.IR0ZFJ7QdJIdw4-fzEevd45KhlHSdZA2aY4Bwk0Ex2Af-mhCwDAAwV9WO4OnZyUO1bMT0o9BA-0ZSeKFehfNZ-aoP5Kxd98_6_ogRNXBzgt7g6-q0uAPutaM3r7f8O1nrRNgHJ259X5n6GDvEOJPvbyLXflg6ebi9IpwUt6AiypkWajW8zYxNd97LFt9bfF1Oc-a3ypXZweKRlW20oWQpzosUqALsGSOJVIhnEwQb6tygJ4ET5O55nOcjgh05Tjl13378e7TtGak_L61Kg60DsIsaFKkqQIBD6m30xRSr8Z-oUdXncALQMPa-PFe43przqvgH4gaOXoM6rLtS_vjow"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "40",
      "00",
      "00",
      "d0",
      "7f",
      "d9",
      "e734231b84beb95622b406d17831ac8d48046b57b09dfe7b33fd84737e408e10a63463dd1db7e01d2c3954d768edf68a9e5517bfb3bfb6b138d28d6689bea9a50dd2d0e66009662c93f15e34c1be331f27656f06b58eb24162fe00cf6315246449a6dd41e46ee425855284cfa4eb7b5fda97a7e5f3d8f98ef731b3b90c98d61e7a72f5b86fbc19d4b165569d62bb8cf075bc38f3ad9592398d5421840c4e8f507fc24690b6f2c6d5ec90a09d771d6f459e167439439eb647477ad292a74a12bb5c24b09147a24ef058f06f23d8b9b553596005f0dcd703a659fde26e25555d817f7bc6961ebf02749c0f7800bf7f3664c11c1a010000",
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
      "Tue, 11 May 2021 00:38:26 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-27-1620693471142",
    },
  })
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
      "02ff85536b4fdb3014fd2b91f79536e92b692b55a32a61ad44d32d4d816d9a22dbbd0986240eb1c38450fffb6e1cca4048f029b6ef39f79cfbc813b913c59e4c0913e97d0dd5e3975bc9c809014d537cf597a99db9bf68763ddeb06bb9acfddc76d2d90c11a261299a97197494ac2b0e6abadb76d34ad625ada4ec60a24edfebf4dcbee34e0643afd71bf691a7204b2e447187ec1bad4b35b5eda376379532cd80964275b9cc5fdeed87be5d56f216b856f65b491b5594fdb1e8d74c72aa852c66bb2d1aa8155431e4546468e13f73cf4edfa6ee0a9a7753043f080e94735917bab18529b82c1291d695c94aa64fc4d87c75205bffc25f441697599d1771417338b1f654d3583f96609d879bb5b50ace37e17a1ead3641bc5d2cfdf5bcbbd85cecd6c1d6ba5afaa16f69ca32305c6b669d9a5b8017d4df83d2a230ea51f3dc283f3768f57e2c0d01a515b4c1d8735cda1b3b1396308f27e3c188250e303666de880e98c3274318ee1950e41951c3a2852cf61e7360307463601e8d878e338a270e40ec7a3d4ce3614eee90c309f95b090d6742955289b643e42a5c457e1c85bb60318f7c534242eb4c9fb5c69a025e7bd45820823ea8e9d0448544a5a6ddab20f2c3f9225a5dfaed842f20a5fc717b8f334e68a600d1b4c2e669a8d6728f0d23c17ced9f21d84cecfb31a8c8f4f713697adeb878d5f2177a84036cec6af325db285c05df8c9d23e29266b5813cb40752a2e51bac0d5d1ffe201297b4cd427eecfcf027699f4248a082827f3e4d049bc0a7ffda71f1118bab8f324ae31d7787ab468457d0ee9030e53eb3478e3bea993f55d34abf8bb9c3c9b16b4d8e2623e450e8e78adac5c7425bb15abd803088e30f4cb70eff001e80e02d78040000",
    ],
    [
      "ETag",
      "EHg/l6ZalX8ObXoHuEm/0g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-27-1620693471142"
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
      "d1",
      "4e",
      "c2",
      "40",
      "10",
      "45",
      "ff",
      "65",
      "7c",
      "2d0920146cc243415462412c25460d214b3b85e2b65b77b72821fcbbb315d1a889beb433d333db7b6fbb83a7248bc08145b27c2e506e4f96a86f4de1a32ab85674cb45a6102c40cd9644f615d699be6b0fbd35de5ff3d7f3cd43b3e7763a44a870852903670771823c52e03cee206329d25a28789166f3b2b3406f73339c04fe6074497d2a22d38fa69ee776bd3eecade362c4349b97fc3fd6667b0bd662e1638c12b3108d965c8a35867a606c2a96e61c2b4a14324405255c3e584a51e44c0a51a149a5deaad4ec7ad53e3b6db46ab5469d402e42a61391113b9d903ed04233ee8b1772093601b22cc9705c5e37344ea2d2882907a3c06e94fabe02242d4e38ceff0649ef8ad167f8c00e117ce7582a8a4c1fa90befc6fded38caf4f3a87337e8ff2094a6a48e483018f627813b1c1b6e76f0dedd6a54632928488526c35ab5d16eb6ecea7bac3d61a2a6f7385a166841c8e8efb84a343831e30af76f17d41fd87b020000",
    ],
    [
      "ETag",
      "Ese2atW8MLjeYKlxDvZ5CA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MIN(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-28-1620693471142",
    },
  })
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
      "fd",
      "2b",
      "91",
      "f705a4d2a6699ab49510eb2063914acad21484a6a9751c27189238d80eac42fdefbb3814e890865429b5df7b77efce77cfe89e95099aa098650f35159b2f773c461d4415cee056ce8777fde5f0360db37851944aa4ec8ff5747c0c0cd6a8242eaa9c1e495e0b42e564b9e86682d715169c1f41a0236b74d4772cd3190f6cb7dfb72dd0499aa73356de83fa56a94a4e7abd5dee6ec67996535c31d925bc78bdef3d5abd4af03b4a94eceda7ec4116d9fb7fd2939c13ac182f8f970b30504b2a56b4c02c070b6fca24feba1fbacb70d1cd80fcc808c584f0ba548d2d08417899b2ac163a2a9a3c236df3dd1fb4f066de69645cf8c1c11a178d747d686069ac5682ca3a571d630d15a52ca72b96ac5ba4ba37be87f30b4020ff2d9654ae8deb1f5ee819fb643f309641e02d22e3e0e4d0380fe7cb4be3dbcd1e073c26542a566a87118e73dab87b69a2fff1e91a015690b30557aee9e0fec81cc769ec92743418c6a949e37814bb433c884d32b6a99dc414834e35d1b50a97bcb4ac5142cd3449c6b1450743c77447566c0f808c53d24f1c88e912d71ea36d073d09a6e819931597aced24ba0efdc85b45e132389d469e2e23c5d0afb3d65c53c47b9f0a8a04d27feada3628e390a979163f88bc707a1af9575e3b09339a61b2593cc02ca4389714d858e0822a2a2e78024d4397f3851ff9f3603a03857edecb1d43a2c9afe73741b4a9749795fea269184e6f408385c09b7f30f0e1d868bb7d97ee0ae7b5a668be3eb5f11f5b00f5a196b79385b6bfb7f0eb2018f9363afab9f4c21bd45e8534a58296e4f37707b2063edddcdd1a01171609d24805679832",
      "229b2444d076da58a1edb6eaa1e93af61069b2501f30d775766d6d62341169414bf55251bb46ba510d54cb5712803024811f9c03fa17262cfe83c6040000",
    ],
    [
      "ETag",
      "sO5j1U5hfRgbSmntrfix2w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-28-1620693471142"
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
      "90",
      "41",
      "6f",
      "c2",
      "30",
      "0c",
      "85",
      "ff8b775ccb6841c02a710054185ac5466117268442704ba16dba24654288ff3e27db340ebb24b1fd3debbd5ce098953b08609ba51f35caf35d8a7a6e1e31aa3ad78aae4a940ac101d42c25b23d9b44735e2eefc72bb658edc3e787d16a3ceff789507c8f0583e0024986f94e41f07e81921548b2cd46da8d84e973653ae3e865b0a4b2103b53cedea268308c42b83a37a2eaf82798ce96e1248cff93acaf0e1cc436c60425961c8d874a8a03723d35f1142baa1c5d256ac9518185ed2095a2ae9814c2a58eebf75cafe3373b8fad76d7f3da3e81b9e04c67a224f66d41de400bcdf2587c523a3080b44f0a9ad8f344ed66a3dbb3314e9631ee6ec75e8336ff8e3d335effac1d9e35aa5729c8a34263afe537bfcd8e8409a0299896353ac019fdf553a6214858aef0fa05a7496e9bc9010000",
    ],
    [
      "ETag",
      "4NGLQcnT+FZaSZhEK/CZFQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxMDgsImlhdCI6MTYyMDY5MzUwOH0.iU9AHyKWLimcXfsiS-qNrZgAp_V9lGlu7OUZyAA_-peXTXGiXw4Q84r8nlxHwYlqhs56qdQPreC2likQcLAdmUsdNHSxQdi0s4-RNBlsJTXhcuhZxbDNvJ9XuvbWDObXv8qFf6OmljJWwAGP6hOq70_2KHsX9r6MS4LGqlKySdJeIoMbWU7LJONmMIrNJm1HKHhlRfrn2-1Rp7kOPg9Yg7d7seglSX28ELudCjkyeRIpJnOrdO7KUYjeUkcGoM3e-wCd9FOi46mRYmPfq2Zy3BS-l_5YbktlasRLa6JOR-ir8TWw-wY1q_sMjIkc3-FjLiCH-VLPBrWd9I0sNs274w"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff1dd0db7243401800e077d9ebc8a810f48e20754831119adcec08bfc36a58561274faeecdf411beef07a559068ce1b16ba045ef684e05759dad5daae8b8ccb4cb7ed171be34becfeed75a26a5b90896b5d3b8a3d4c20608e57c1c94f55624c2c7b106a97ddb5a0636bfe42197f9874b8a4ab2da6280d89e5964148ed75dfafe207309566ffee8909849a5dd6779e1516aa4cf31f1a24c0ff982eca8f8197bdc7275ba52dc9b33b0aad1927adae6a65e39fef3703af161826fb6c87371a1ec30795497c0751ccdcf2598dc288826e1713ff3c1d908bed3c614aea1a82b688560a2f5000cd72fee4652d515fab7e371a6f00ad0211d6040bf7f6de4927d1a010000",
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
      "Tue, 11 May 2021 00:38:28 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-29-1620693471142",
    },
  })
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
      "000002ff85535d6f9b3014fd2bc87b6d9390924022456b44e8ca9690959056d33421632ed42dc1149b4c5d95ffbe8b69ba5695d6276cdf73ee39f7832772cfcb944c49c2f38706eac74f772221270414cdf1d51e4a37b216dcd97ffb53b8fe95fbd55a5ccd673344f09625e9ae2ae0548aa66620a7db4d2faf4553d15a88534c743a9c9c9ae3e1603c39b36cd3b486c89350644b5ede23fb56a94a4efbfda3762f17222f80565cf698d8bdbcf7f7c37e558b3b604af6df4af65145f6ff2ffab9108c2a2ecad97683061a09750c3bca0bb4f08f9926e76f53f738ddf57204ef3903ca98684ad5dac2144c9419cf9b5a6725d327a26dbe3a908db7f4dcc860a26876655cd21d9c18295534568f151817e17a65f8c1c53a5ccd237f1dc41bf7d25bcd7bee7ab95d051be3e6d20b3d43d1a400cd3566c6b9be057841fd14a4e2a5568fdae756f9b941fefbb1b4049496d005637b30a6a63398245962b3cc391b25d90092c449ec113d4b066c628195264091a745358b96a2b4c6e9d0016b10db163363cb32cd78626634ce284ded09cdb2916391c309f95d73050b2e2b2179d7217213fa911747e13670e791a74bc86853a84567ac2de0b547850522e83f351dda2817a8d4b6db0f222f9cbb917fed75135e424ed9e3e601679cd14202a2698dcd5350af448a0d23c17ce52d10ac27f6fd189464faf389b43d6f5dbc6af90b3dc201b67695fe924d14fac1176de788b8a645a321fbee402ab47c8bb5a1ebc32f44e2927659c8d5d60b7f90ee29840c6a28d9c7d344b00e7cf8af1d171fb1b8fa282315de7177986c45580ddd0e715dee337b34704613876870addec5ecb179ec5a9ba3cd083b28d57345dde263a19d58235f4018c4f107ba5b87bfa892c6c178040000",
    ],
    [
      "ETag",
      "72sCT4Di8vKzlCIQCJ4DQA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-29-1620693471142"
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
      "8d92dd4ec2401085df65bca444402cd2840b5050127e4bb932842ced1416b6ddbabb9510c2bb3b5b118d9ae84d3b33fd667bce698fb0e369041eacf8fa254775b85aa399dac2479d0ba3e996c95423388086ad892cf576828f79701dd666d300579dad52a57dab45840e379830f08e1073149106eff908294b90d64229f2245d169d03e690d9e12cf0fba347ea1319d97e341f0cda9d41174ece653162862d0bfe1f6b8b93035bb9f23146856988564ba6e41643d3b736354b3281652d7315a286022e1eac95cc33a6a42cd3a45c6b96ab6eade2366fea8d6ab55e2350c890192e5362e733d207461a267cb92797e012a08a920cc7c5f595c63c2a8cd8b23f0adc7aa1ef2b40d2622e70f937487a378c3ec307768ee03bc71299a7e642f506e3f66fc751a69f473db483ee0f421b4aea8204fd617716b48713cb2dcede3b07837aa22405a9d16658add4ef6e1b6ee53dd67b69a3a6f77846e5e840c8e8ef78e206bc98098da737c44a37517b020000",
    ],
    [
      "ETag",
      "+FkliOiT/c2SQTebBjrr+w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MAX(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-30-1620693471142",
    },
  })
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
      "53fd4fdb3010fd5722ef17d0fa917e24692b21d6410699da50d21486a6a9751c27982671b01d5885fabfef9250a04302a9526abff7eede9def9ed09a65211aa180c5f705159b2f773c400d44158ee1f6f2ce3d97c2f7bfdefe0dbaf7b3c1dafee94f1f8f8e80c14a95c4699ed0a6e48520548e16f3562c789163c1791302357b7ab363767573d8eb5b9d4ebf0b3a499368c2b235a86f95cae5a8dddee56ec59cc709c539932dc2d397fbf643b79d0b7e478992edfd946dc822db1f273d4e38c18af1ec6831070385a4624953cc12b0f0aa0c836ffba15b0ca7ad18c80f8c504c082f3255da82108467118b0b514545a32754d97cf307cded897de26bd3f1af83154e4be9ea50c3525b2e059545a21ada0a2a8a5842972c5cd548bed67e7817534020ff2d9654aeb4eb73dbb3b57db2e36a0bd7b5e7be76707ca89d79178b99f6fd668f031e432a15cb2a873e0e125aba7b6ea2f3fee94a015690b30697966ee2ce401f0651609168d0338248a74130082c03f7029d0cfbb41f0614834e95d12b15ce78165a61d4b7f44e7f40028392d00843dd0af41e36495f374c13134c4c0313b46da047c1143d6532e792d59d44d79ee3db4bdf5bb82763dfaeca8830f4ebb4365716f1d6a7822281f4415ddb12651c3295cfe2b8beed8d4f7ce7caae276142634c36f37b9885082792021b0b9c5245c59487d03434bb983bbe73e18e27a0a89e77b6634834fafdf42af03779d565557dd1d8f3c637a0c142e0cd7f18f830fb68bb7d93ee0a274545a9f8d5a98eff5003a803b5bc9eba68fb670bbf068291afa3a3cb85eddda0facaa3111534239fbf3b902be0d3cdddad11706191208d5470862923b24c4204ada78da595dd5a6de84363d8411559a87798d5ebedda5ac62823d29466eab9a27a8daa469550215f4800c290b88e7b06e83f4513fe6ac6040000",
    ],
    [
      "ETag",
      "QjNHsrTT+hxb2qP8kEJTMw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-30-1620693471142"
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
      "00000002ff6d90414fc2401085ffcb78a425b445d4261c4051310d62053d1842b6db6929b4ddbabb8500e1bf3b5b8d72f0b2bb33f3bdc97b7b844d56c6e04394a59f35cafd458afac53c425475ae155d9528158205a8594ae4d3dde5b57c9f46bb56b4dac551ebedc0eb62d0ef13a1f80a0b06fe11920cf35881ff7184921548b2e552361b09d3fbca74ee83e7c18cca42c4a69ccc8360300c4670b2ce44d5e64f309ecc460fa3f03fc9e264c15a44212628b1e4683c5452ac91ebb189a75851e5682b514b8e0a1ab819a452d4159342d8d4b1bd8eedf4dc4eefc6eb5e394ed72530179ce94c94c4ce5fc91b68a1591e8a1da50303c8e6494193e6dc52db6b3bdd26c6b6618cbbf3b1db76bddfb163c68b9fb5c3bd463595823c2a34f63cb7f36df65698009a826959a3059cd15f3f661afc84e50a4f5ff407962ec9010000",
    ],
    [
      "ETag",
      "JD58rWPbw+bhwdb+VzcumA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxMTAsImlhdCI6MTYyMDY5MzUxMH0.GCkeOs0Wn-ItdRSwu8NOPuomHYlRrbZHKCBQ3tn3DcwBDy2ZeEg6hcOIJ-WeHyk1OwyQ5Rc1OwMftmCZnCK994Jn2JcQI6dspL9frS37pIMKacRdejDrP3_SObpip3RM_Yf21LBfxmnlelOK_Lj-Yv79gKx8wgi5p4joLkjFkZJr1CbuYy2x45dviYhhq2LBDSpazAvJbJQkkG4M9LsZEIcJeQSYhGaTUEBfjXxEADQJSj-dc7aGpkB_Ihmhbqz5B8m4JAE6MqkTRvhE2FwkHE8gL916ZVYrEA3_2_jJFVKf3pVYOcYoQx8EepPKq8aTcCGhCq240oD5PJxtUQlbjg"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "bbf45b0d2004ba3f10998a1366d9b4fd694ad74a05a52b8cc096dd7d664778ef0730ce45d7d1beadc51d3c81893970c117a90e227a11e1ddf1871d85d7e7c2b5722f8bcf6c88619d613a475f11b454d0a30fb8962597a85bea2acbf70921b5b32d4c3e25378f954b3fe3e14bb962af352527b951d131e0857d30a90ac6adc4d670ac2e34a4493ab63ecacf7253191dce6132d92d8cbd6f726d6a6d5471586f54d35ca3834710f6125c914fd273767ed72933adb5c2fb203e25299670dc215bf67768ed5295577375736fc445b87ccb62bf07332046ad8ce8a87a70971e8433f06fa7fda4c5232012cc08037eff00be075a391a010000",
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
      "Tue, 11 May 2021 00:38:30 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-31-1620693471142",
    },
  })
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
      "6f",
      "9b",
      "30",
      "10",
      "fd",
      "57",
      "90",
      "f7714d8084fc94a2354b681729212b21ada66942c61cd42d608a4dabaecaffbec3345dab4aed276cdfbb7befde1d4fe4961731999288a77735548f5f6e44444e08289ae2ebd73dcbc77f37cbabedf70bd3190d20393f3f7b98cd10c19b2c49f332838e1475c5404ef7bb6e5a89baa495101d2cd4e9db1d7bd8b38693be33b26da7877912b264cd8b5bccbe56aa9453d33c72775321d20c68c9659789fce5ddbcef9965256e802969bea53491459a1f937ecb04a38a8b62b6dfa1805a4215424e798612fe67c6d1e9dbd25d4ef36e8ae07bce803226ea4235b2b0041345c2d3bad255c9f4896899af0e64e7aedd45603091d579111634871323a68a86eab104e3ccdf6e8c9577b6f537f360b5f5c2dde287bb997717dbf57ee3ed8cab1faeef1a8a4619e85c63669cea9b8717e48f412a5e68f6a0796e989f0d5abd1f4b9380d412da6038b286d41e5b932889462c19f707516241148da3d180f6238b4d1c70e20828e669529d450b51c403f435b187e1384e06a133b47a21a56085a3e16432e9d1a143239b1c4ec843c5152cb92c85e4ad43e4ca5f056e18f87b6f310f5cdd4242eb4c2d5b614d03af352a6c10411ff47468a25c205363f7ca0b5c7fbe0856976e3be135a4943deeee70c609cd24209a56689e826a2362348c78f38dbb44b09ed8cf635092e9ef27d278dea87865f94b7a80036ce42afd25bbc05f79e75ace117149b35a43eedb032951f235f686aa0f7f10894bda5621177bd7ff45da271f12a8a0609f4f13c13af0e9bf765c7cc4e2ea238d5478c7dd61b2216115b43bc475bbcfd903db1af4f49faa68a5dec54613e7e85a53a3a9083914eab9a3",
      "76f1b1d196ac962f200ce2f83dedd6e11f2d60e60678040000",
    ],
    [
      "ETag",
      "+Ucm8zMDWOBQ/475efGGFw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-31-1620693471142"
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
      "8d92416f82401085ffcbf48aa928624be241ab5552b516f1d418b3c2805860e9eea231c6ffde596a6dd336692f30337cb3bcf7e0082f491e8203eb247e2d511cae62544fbaf05096a992742b782e110c40c562221fc5a2b119eeaf5bbb7ed97e38a8381aade7fb4e8708196c3063e01c214a300d2538cf47c85986b416f0b4ccf255d519a00e851ece7dcf9d0ea9cf78a8fbe9623ceef6c603381997c59029b6aaf87fac2d4f066cf9dac30805e6016a2d85e05b0c94ab6d4a961529d6242f4580122ab87a100b5e164c705ea349ad69d64cbb51b76f9b56db34ad0681290f984a784eec624efa4071c5528fefc925d80488aa24c35175ddd138092b23ba74a7be6d55fabe02242d4a525cfd0d92de0da3cff0819d23f8ceb18c97b9ba50f7e3c7ee6fc751a69f47f5bbfee00721152575417c773298fbddc94c73cbb3f7de41a19c094e414ad4199a75eba6d5b6ebefb1de711d35bdc751a2440302467fc72851e0442c95787a033f3a52797b020000",
    ],
    [
      "ETag",
      "OrU2hGw/5vDu7KytgfHbSw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`date`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-32-1620693471142",
    },
  })
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
      "a3",
      "40",
      "10",
      "fd",
      "2b",
      "64",
      "ef",
      "8b26b5054a4bdbc478b5721e49a51ea57ae672697761c055ca22bb78d798fef71bc0aa3d134d4896ddf7decc9bd9d92772cfb3888c08e3c94309c5e6cb9d60a44540d1044f2756f87dda3bb7edd39fd6c39dcffece604dc7c7c7c8e0954ad2759ec291146511821c2de6eda410654e0b218e30d051d73c32faa6de1f762ddb302c137512d278cab37b54df2a95cb51a7b3cbdd4e844852a03997ed50ac5fce3b8f66272fc41d844a76f65376308bec7c9cf4241521555c64c78b391a2825144b2c83a768e15519b1affba1db9caedb09921f7908340c4599a9ca1686084516f3a42ceaa864f4446a9b6f7ec8dc993a93409bcc165e70b08aa882d5a146a5b65c1620cb54b5b4155614f314963c5a35487eaf7df367178860fe5b2a41aeb4ebef8eef68fb64d7d3169ee7cc03ede0e4503bf7678b4bedf4668f831e23908a67b5c380b2142a77cf4d74df5f5d25a00a7336e0d2d6fbd418e84316333b8c07dd1e8b75606cc0ec1eed323d1c5a60450c28ea5415bd56d14c64bd810da6a5335b8f28b06ed467961e574b6832daa7080d0d069645b62df2a7e00aceb8cc85e44d27c9b5ef06ce32f017de641c38751931c57e9d35e6aa22defa545824923ea86b5ba15c60a6ea5a5c2f70fcf12470af9c6612a690d070337fc05988692a01d9b4a06b50505c88089b462e6773377067de788a8afa7a2f770c4946bf9e5e05c126afbbacea958c7d7f7c831a5a1474f31f863efad882ed9b7457342d6b4acdaf774dfcc7062006d6f2ba33c9f6f716bf16c1916fa2931f0bc7bf21cd910f311490859fdf3b926be0d397bb7b46c8c58784",
      "69a4c23d4e5928ab246101cdb4f1756db751f70cc3366d52930bf50e1bf47abbb65631aa88b0864c3d57d43ca3ba511554ca17128238249eeb9d23fa0f94e0b2a3c6040000",
    ],
    [
      "ETag",
      "C4cHL5G77BX4qjRbxOemaA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-32-1620693471142"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d90dd6ac2401085df657a9b80897f34e04553825a4434ad4229226b9ca4894926dddd28127cf7ce6e4bf1b237bbcb39df0ce76c07a7bc3e4200873cfb6a515e1f32d46bf38851b5a5567c35542b0407508b8cc9f7742b702dfda2c0cb389bbeac66c3285c4f264ca8e4132b014107698ee55141f0d1412d2ae4b1fd5eda8d8ce96b6394f9f22d9a46310b151d8db0dc2c164fe122829b7337d69cfe35b2bb3950d021c61425d6099a148da402133d370595a89a125d45ad4c508185ad91496a1b21895c56dcbeef7a23bf377aec0fc69e37f0192c29113aa79ad9cd2b67034d5a94315db81f1840da27574ded796679683b9c2d60a2dd7ba33fcf33deee776178d5a85692389d4213aceff77e623e9389aeb992962d3a9008fee759ae214845a9f0f60db37748afc5010000",
    ],
    [
      "ETag",
      "YfVaeQr2jjew7gGJPH5EBQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxMTIsImlhdCI6MTYyMDY5MzUxMn0.GMul9yWRyiPiUe22c-ArzWqD5zLGNGP3nDk3E8ZoqPSGWfKlAlaQZJrg9eJZdMCv51vSKLxqqkK4jrfXKM58aInysVFESQkP_Ok-bYKfK_lcL5fGkwys1eKkyYl0_oSU0rqqjfav7I3IJKL3J7gJE2FTtVNd6w0AZfZFnCd8_Cg3pq-KB0-HLoLG74vPze4TB_VLsfMP8spAceg3Q5lreKziSAXdiYGKzNV2D6lY50J5orT6HGWGwy8R3vGzLDiNnWrW35H6h9U0vLfVJuShAhsW4ezf-By1_ibtfqdIHxDSAyjNV-g5yBGrqq7-r_ncgdtRfNb2ze2UzZQgjOLgVg"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d9",
      "72",
      "82",
      "30",
      "0040d17fc9b33a6115fa880151a04405015f32c084a56c619b829dfe7b99fec13df707c4694ac7914c5d455bf001d698570fe9c1628a46f20ccbee1a16151a460c458db3b1d1f4aaefb5f76f2fcca3d869eff4ebc120e4cba3467b33b1ed952722d7a011fa135b7ad97695a07def5324d5af107f9629f776af437d519cdad2d97c822f37cc7ddc78e7875ae9aa399b7718585956285b01e64533c71db9f9676244029c821cddf4c626d750ea8c683104af0af48b560bc8661546439f654927f7c5387147099ed63e7174e19979349845e8efd7670376802eac1ce848ca8d2b48aaba03ff7632ad8c6e03341a0f7400bf7f22a1fd5d1a010000",
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
      "Tue, 11 May 2021 00:38:32 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-33-1620693471142",
    },
  })
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
      "ff85535d4fa34014fd2b64f6d5b6b4505a9a346bada8ddb47405aad96c3664661870141864068d6bfadff732585763a24fcccc3de79e733f784677bc4cd00c119edd37ac7efa762b083a424ce10c5edd203939595a99ef3899f5b7f851e5c5f9f4723e07046f59121755ce7a5234356572b60bfb592d9a0ad742f42051cfb27a4367643aae654f86437b043cc9f274cdcb3b60df2855c9d96070d0ee67426439c315977d2a8ad7f7c1c36850d5e296512507ef2507a022079f8b7ecf05c58a8b72be0bc14023591db302f31c2cfc6726e4f87dea3ec7453f03f003a70c532a9a52b5b620051565cab3a6d659d1ec19699b6f0e28f4d6de3232a8c89ba28c4b5cb02323c10ac7eaa962c659b0dd182bff6c1b6c16d16aebc7e1f2c2db2cfacbed7ab7f143e3fac20b3c43619233cd35e6c6b1bef97001fd8449c54bad1eb5cfadf24b83561fc7d212405ab22e184f4c070fa7a64b5232a1e9d41a93d464844cc9648c2d6252d766764218069e16d52c5c8a3249c7c4b66c27c62e99c6f63835637732c531b15d3a1c51425d13a3fd117aacb962a75c5642f2ae43e83a58455e1c053b7fb9883c5d428a9b5c9d76c6da02de7a545020803ea969df46b900a5b6dd2b3ff282c5325a5d79dd84d72cc3f429bc8719a738970cd0b886e629566f44020d43fe62e39d02584fece72128d1ecf7336a7bdeba78d3f2577a04036ced2afd456114acfc736de780b8c279a3210fdd015560f9066a03d7fb3f808425edb2a0cb9d17fc42dd53c05256b3927e3d4d00ebc097ffda61f1010bab0f3252c11d7687ca5684d6acdb21aecb7d618f87a3b1abff54856bf5213671cc43d7da1c6d4656b052bd54d42d3e14da8935f215044118bfafbbb5ff07d7a6c87878040000",
    ],
    [
      "ETag",
      "9RdBBC3gN66g3zmJplmG8Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-33-1620693471142"
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
      "925b4fc2401085ffcbf86809578b34e101049588c8a5245e42c8d24e4b71dbadbb5bb521fc77672ba251137d6967a6df6ccf39ed161ea3c407075651f894a1cc8f42d413534c51655c2bbaa522510816a0662191dd59d0bb6ad9e3e37299cff3dbbb7b57bed626ed3611ca5b63ccc0d9421021f715380f5b48588cb4e6099ec5c9b2e82cd0796a8633773a185d501f0bdff4a3f970d8e90efbb0b30e8b3ed36c59f0ff585bec2cd888d5140394987868b4a4526cd0d3036353b138e5585222931e2a28e0e2412845963229448926a57abd54b56b15bb556f34abd5468d402e3ca62391103b9f913ed042333e152fe4126c02645192e1a0b83ed338f20b23a61c8c5cbb51e8fb0a90b420e2b8fc1b24bd6b469fe103db47f09d63b1c8127da0ce87379ddf8ea34c3f8fea75dcfe0f42694aea80b883ebfecced5c8f0db7d87befe61ad5580a0a52a1c9b05a699c9e34edca7bac67c2444def71b4ccd0028fd1df7119697002c615eede00b9383b587b020000",
    ],
    [
      "ETag",
      "BSfDK96P+//lUyXYZTrx2Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MIN(`date`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-34-1620693471142",
    },
  })
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
      "3010fd5722ef1710fd48fa91b49510eb20b04825edd21484a6a9b51d2718d238b51da60af57fdf25a140870452a5d47eefddbd3bdf3da3479e456884084f360593db6f0f82a006621a27709b6e9c87133a9f8913e25d8a10dbddcb743c3e3d05062f550aaff39435952824656ab498b712298a1c4b219a10a8d9ed352dbb63dac36ecfb1ac5e07748aa5f184678fa0bed73a57a3767b9fbb950891a40ce75cb5a858bfdeb79f3aed5c8a0746b56a1fa66c4316d5fe3ce9592a28d65c64a78b39182814934bb6c63c050b6fca887c3f0cdde278dd4a80fcc429c3948a22d3a52d08414516f3a4905554347a4695cd777fd0dc9db8e7a171edf947ab086bb63a36b032964bc95491ea86b1827a629eb2258f5635923f1a97c1f41a10c87e8f15532be3f6a71bb8c621d9f38d85efbbf3d0383a3b36ae82e96266fcb83be080c38829cdb3ca5f8849ca4a6f2f2df43e3e5c29c01a72d6e0d2316d6c0dcc21898943e341b74f62931132204e1f778949873dd68b08c3a0d365f44a8533919971e438716c513cc4566cf5bb1de2746db36fc69875faa4e3109b0c4cdc47bb06fa2bb966175ce542f1ba8fe836f0427719060bff7c1cba551931867e5dd4e6ca22defbd45024903ea96b57a25c40a6f2513c3f7483f179e8ddb8f51c4c5882e976be81498871aa18b0b1c46ba699bc1611340dcda6732ff4a6fe78028aea71677b8642a3dfcf6f82709b575dd6d5178d83607c071a2c25defe87810fbb8776bb77e96e705a54948a5f9deaf84f35802ca8e5edd441bb3f3bf835100c7c1d1dfd5ab8c11daaaf021633c932faf5bb03b902bedcdbfd120117d608d2280d679832aaca2454b27adaf8bab25babfb56cfb4aaadd758ea0f98650ff66d2d639411d99a65faa5a27a89aa469550a15e4900c290f89e7f05e83f588b1463c4040000",
    ],
    [
      "ETag",
      "lq7j+cSPo+bIFoTa63FlAA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-34-1620693471142"
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
      "90",
      "5f",
      "4f",
      "c2",
      "30",
      "14c5bfcbf5754bf64f0c4b7818329188a0131e8c21a494bb39d8d6d9761242f8eede56a33e9034edede9efb6e7f404fbb2d9420c9bb2f8e8501eaf0ad4cfa6c850759556b4b4a251080ea066059187c728782db8b8decddbf943381e25f95d3f190c8850fc1d6b06f109f212abad82f8ed040dab91dad66b696f244c1f5ba38c92454abb5a6ccd6eb69c4e93e13485b3f3afa7ddfff193d9221da7d9a596d5d9819dd86498a3c486a3b1d04ab143ae27269d62755ba1ab4427392ab0b03d28a4e85a2685704971c3c8f57b81d7eb87d18def47018195e04c97a22176f942de400bcdaa4c1c281c1840da9272e676fe34b21778ae17d0b061ac643d5e84fc5fc837d0eae789e151a37a9282fc2a3456c3c0fb367e2b4c184d21b5ecd001cee8dbef4b0d71ce2a85e72f1762cca1d4010000",
    ],
    [
      "ETag",
      "wM42Ygco5jOpOK3GDAfF9A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxMTQsImlhdCI6MTYyMDY5MzUxNH0.EJkJjaEDEknVSiSLA_qD-H8p2cuc_B9Iy05NoJHIpjqINQaBnbSYHMn5PZtgFUnWOA7QFH8DBmjjNdfhA0r5titjxxRFBSWsBGb4-L2UTUMn7qxQQ7_TU82HkMFuX5PDV5LJ1GB1Ez-rqa5khO7ELyjoeri0QC78Og_iVxmYf9Sa2zwxpKGC-Z1NmWBRB3hfhwaHVMXcxkDbXUtbsek5ZR7ZjjoSIHjqmPafisT3Jplz6_d4bijhG2Ikit6tDjf5lt7ezf9n8bCuknflA6jrbK-6C6KZL4teC_1L9DSRX9OTKTjhWKOSLk38DLbndMucniCAVkkNqrsnVI9Zgn4bqg"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "1dd0db6e82300000d07fe9b31a1529746fd64155c0a08269fbd254a85c26ae520ce8b27f9fd9279cf3036496296344f7fda56ee0033ce51c4db249a05d2c8a5c3af6b981bed63d637447644dc78fd3797188519c0ee16c456feb26aced618c6bc7ce779a2e7855f630daa6f30e5e36a58ec8deb7481e5c61a81d4664a66924721fbda6eb1a27fcbee550dd9dc2a0861dcef1ebca8bf098faa9b5315dabfca6a08b4d2f6a6bc6f8f4142c9515504b7b5e10e375c54982614bbdb2dc237e5936f535a1de3419b388e452f07e655a28dcc83db2ecb320f96330858bc108a84157ad32a27a732d1ba111f8b78beea9d53b002bd9aa16fcfe01c2baca201a010000",
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
      "Tue, 11 May 2021 00:38:34 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-35-1620693471142",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85535d6f9b3014fd2bc87b6d4248484922456b96d20629211b21ada66942c65ca85bc00c9b6e5d95ffbe8b69ba7693da276cdf73ee39f7834772c7cb84cc48ccb31f0dd40f1f6e454c4e08289ae1abf5a95cfe6e7c777fb9f256b99d5c5f0de4afc57c8e08deb2242daa1c7a5234350339dbeffa592d9a8ad642f430516f34ee59a7c3c1e974643b96650f9127214fd7bcbc43f68d52959c99e651bb9f0991e5402b2efb4c14cfefe6fdd0ac6a710b4c49f3b5a4892ad27c5bf4632e18555c94f3fd0e0d3412ea080aca73b4f09799c467af53f7392dfa1982ef3903ca98684ad5dac2144c9429cf9a5a6725b347a26dbe38909dbb7697a1c144de146554d2024e8c842a1aa9870a8c8b60bb313cff621b6c16a1b7f5a3dd72e56e16fde576bddff83be37ae506aea1689c83e61a73e34cdf7cbca07e0252f152ab87ed73abfcd420efffb1b4049496d0052367704aadc9601aa7b1c3d2c9681ca70388e349ec8ce9281eb0a90d761203459e16d52c5a8a3219da0e584e1c4da6a37164537b18d1893389e2111d328b32c7b229399c909f355770ce652524ef3a44ae032f74a330d8fbcb45e8ea1252dae4eabc33d616f0d2a3c20211f4464d8736ca052ab5edf6fcd00d16cbd0bb72bb09af21a3ec61f703679cd25c02a2698dcd53506f44820d23fe62e39e23584fecf33128c9ecdb23697bdeba78d1f2677a88036ced2afd25bb30f0fc4b6de788b8a279a321f7dd815468f9066b43d787ef88c425edb2902f7b37f84abaa70052a8a164ef4f13c13af0eebf765c7cc4e2eaa38c5478c7dd61b2156135743bc475b94fecb1654fbb3f55d15afd1b1b0f6ce7d8b536479b110a28d55345dde263a19d58239f4118c4f1fbba5b873feddaefd678040000",
    ],
    [
      "ETag",
      "1BnCzuNEUGHIHl4dWV0sxA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-35-1620693471142"
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
      "ff8d92dd6e82401085df657a8b09f8832d89176ad5d2a055c1a44963cc0a836281a5bb8b8d31be7b67a9b54ddba4bd8199e19be59c0347784ef2081c58279b9712c5e16a836aa68b39ca3255926e05cf258201a8d886c8fd74118feecd49e3d1ae0f477ebdd1b7c7c5acd32142865bcc18384788134c2309ced311729621ad853c2db37c557506a843a1877e30772723ea331ee97eb2f0bc6ecf1bc0c9b82c464cb155c5ff636d793260c7d7738c51601ea2d65208bec350b9daa6645991624df2528428a182ab071bc1cb8209ce6b34a9355a35cbae9bf64da3d9b6ac669dc094874c253c2776e1933e505cb174ce5fc925d80488aa24c37175ddd338892a23ba742781ddacf47d05485a9ca4b8fa1b24bd5b469fe1033b47f09d63192f7375a186de43f7b7e328d3cfa36ebbc1e007211525754102773cf083ee78aab9e5d97befa0504e05a72025ea0c2db379dd6adbe67bac7daea3a6f7384a946840c8e8efb84b1438314b259ede00ce18dced7b020000",
    ],
    [
      "ETag",
      "vPUfGJ0N3X62FGS23C6MpQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MAX(`date`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-36-1620693471142",
    },
  })
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
      "a3",
      "40",
      "10",
      "fd",
      "57",
      "c8",
      "de",
      "2f9af40328426d623c544eb954aa94fa91cba5dd850557298bbb8ba631fddf6f00abf64c34694277df7b336f66675ed0032b12344284658f1515ab1ff79ca00ea20a6770abdcbb9bb3dfee51561c85e48c0c2e75ff59ba0707c060b54ae26599d3aee49588a91ccda6bd4cf0aac482f32e04ea0eecae619bbabd3fb01cc3b04cd0499aa763563c80fa4ea9528efafd4dee5ec67996535c32d98bf9f2edbeff64f64bc1ef69ac647f3b651fb2c8fed7490f731e63c57871309b82814a5231a74bcc72b0f0ae4cc8cfedd03d8697bd0cc84f2ca6388e7955a8da1684887991b2ac124d54347a418dcd0f7fd0d41b7bc79176eedeec2c12ace86257c3529bcf059555ae3ada02ea49594ee72c59b448f9a0fd0a27e78040f63b2ca95c68d7675ee869db643fd06641e04d236de770573b0d27b30bede8768b030e132a152b1a7f112639adbdbdb6d0fffc70b5002bc8d9827347b7b131d4f7494a9c381d0ef648aa534286c4d9c303a2c7fb16b5124231e8541dbd51e18217896359469aa689491227b54cd31c3a981a8e6913474f74328c6dcbb2631dad3be85930454f982cb9646d1fd175e847de3c0a67c1b11b794d1929867e9db4e6ea223efa54502490bea86b5da38c43a6fa51fc20f242f738f2afbc760ec634c3f16afa089390e25c5260638197545171ce13681aba984cfdc89f04ee1814cde35e6c18128dfebcbc0ba255d97459355fe486a17b0b1a2c045efd87810fdb42ebf587745738af1a4ac36f4e6dfca7164006d4f27e32d1faef1a7e1d0403df464797332fbc45ed5548532a68117fffee406e806ff776b344c08535",
      "823452c119a62c96759258d076dad8b2b1dbaaf70c5b770cd49085fa8499a6b1696b1da38e4897b450af15b54bd434aa862af94602108624f0835340ff019b2a04acc4040000",
    ],
    [
      "ETag",
      "tAhXHJABgnBRbHb3Q0IwsA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-36-1620693471142"
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
      "90",
      "cd",
      "6e",
      "c2",
      "301084df657b4da4fc200a913840895a04a26d0aa70a21936cd240920db6538410efdeb585da1eb8d8bbe36fed195fe050361944b02b8b6387f2fc50a07e374582aaabb4e2ada5462138805a144c2683e93c4b68b2f3f3c16b581e49fbf1fc341a31a1d22fac054417c84bac3205d1e7051a51238f6db7d2dec8983eb746998e5731773565a65bae178bf16411c3d5f937d31efef8d972153fc7c9bd91cdd5813ded12cc516293a2b1d04ada63aa67269d12755ba1aba893292ab0b03d282475ad90442e2b6ed877fd7ee0f58761efd1f77b018315a54297d430bbfe606fa0498b2aa113870303485b72cedcaedf46f602cff502d71fda3056b21eef4181f70bf906dadc9e989c35aa3749ec57a1b11a32698d3f9109a339a4961d3a900afef6975243948b4ae1f5070e06573ad4010000",
    ],
    [
      "ETag",
      "R8DKdRoBb1f8O3iqot1EKw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxMTYsImlhdCI6MTYyMDY5MzUxNn0.hlP6NKR4IMFoQVtYqjvJgNgoCu7WpbHmjyOodWFqUndM57SpFUIxmmVotezTtlstFDwXe_QRQeuSbnsw2XrRDBWx4nCLX0MDxZJNz3bgY-YlQcqowUxl3vwQHshuxHYyjjV87lWjaE16bx18giEiHZvTb7cHoz41eMTnphjRbf5G-Bt0QiCM_jJSiGWj0LJ0yCav9az5eIIlFkVazZiwTFDfmmV9CVHtzErZCbC40_Rw-6XGmpj3kmFpF5B7OYUwOriGnAeEHnLYK3HVyQNouP4vLRFI6MU2rXP9Zek7awQCWsmylLKwR07_VE9bQzKfqDi3AJ-ir7s6xQqqaLWjzg"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "43400000d07fd9e724435c42df2c52ac84ba85be98c5d625cdba0bd3e9bf37d34f38e707e03c27e3984eed9d50f006367c940ff90175124c4ba2b8dc13ab429c21a83281cee89c4e2a71c9deddf9b22c76bba0dab8c6172d7988b57774fdcaec67018e0f784b7070aea2c0c114d2c67b62ed86364d41f7de4a060de5f2e064feda94acabe990b40d1f66225c9b936238a53d77d37ed8876c0cd5b867bd42350c9fd642ca994b873e4b8558896406e70fc47f61cf1c2d8b469c5cb5354713e1dbc88bad38398c2c5e0bc8db46283591d24dbcdd90554cc00e90b5ab0732a6f58bcb09b2bc03fff674da3af20a80040f6400bf7f51c4963f1a010000",
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
      "Tue, 11 May 2021 00:38:37 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-37-1620693471142",
    },
  })
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
      "14fd2b64f6b52a28829a98adabb43551dc22b6d96c3664182e745a64283374631afffb5e86da6dd3a47d6266ee39f79cfbc13379e045422624e6d9630dd5e1dbbd88c9190145337cf5cd2c548bc355b277373f66e1f2c6b9f62e67d3292278c392745fe6d091a2ae18c8c96edbcd2a5197b412a283893a03b763397dd3190f6cd7b2ec3ef224e4e98a170fc8be53aa94935eefa4ddcd84c872a025975d26f6afefbda77eafacc43d30257bef257ba8227b9f8b7ecf05a38a8b62badba2815a4215c19ef21c2dfc6726f1f9fbd45d4ef7dd0cc14f9c01654cd4856a6c610a268a946775a5b392c933d136df1cc8d65b79f3d06022aff74554d03d9c190955345287128c8b60b33696fec526586353377eb49d5f79eb5977be59edd6fed6b8bdf202cf5034ce41738da971ae6f3e5e503f01a978a1d5c3e6b9517e69d0f2e3581a024a4b6883916b3ad41a99e3388d5d968e06c33835218e47b13ba483d864631bec24068a3c2daa59b4c09ae3bec59cbe135170c691eda656344a4d16f59d64341e9aae6d824d8e67e46fc5152cb82c85e46d87c86db00cbd280c76fe7c167aba8494d6b95ab4c69a02de7a545820823ea9e9d844b940a5a6dd4b3ff482d91c17d46b27bc828cb2c3f611679cd25c02a26985cd5350ad4502cd6acfd6de02c17a623f4f414926bf9f49d3f3c6c59b96bfd2431c606357e92fd986c1d2bfd4764e881b9ad71af2d41e488996efb036747dfc83485cd2360bb9de79c12fd23e0590420505fb7a9a08d6812fffb5d3e22316571f65a4c23bee0e938d08aba0dd21aecb7d610f2dd71a8c890657ea43ac3fb04f5d6b723419610f857aa9a85d7c2cb415abe52b0883387e5f77ebf80fab1f65db78040000",
    ],
    [
      "ETag",
      "N0gTtDyHdm7OBATIV6QEGA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-37-1620693471142"
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
      "85",
      "df",
      "65bca549ff0425e905d5aa346dad401313d3345b18281558dc5d34d8f4dd9dc55a8d9ae80dcc0cdf2ce71cd8c1635a4460c33a4d9e2a14f54982ea4e171eca2a53926e252f248201a85842e4cc0b5fad393a8be0bef2db3d1c277e3d4e06032264b8c19c81bd8338c52c92603feca06039d25ac8b32a2f564d6780aa4b3df403cf9d5d539ff348f7b3c564e20c2723d81bc7c58829b66af87fac2df7066cf9dac3180516216a2da5e05b0c95ab6d4a969719b624af4488121ab87990085e954c70dea249ab67b53a66b76d9ef7fa56a7d3ef1298f190a99417c42e7cd2078a2b9679fc855c824980684a321c37d7671aa751634497ee2c30fb8dbeaf00498bd30c577f83a477c3e8337c608708be732ce755a18ed4d5e4d6f9ed38caf4f3a84b2718fd20a4a2a48e48e04e477ee04ce79a5b1ebc0f6b85722e3805295167d869f7cf4e2db3fd1eeb05d751d37b6c252a342064f477dca40aec986512f76f87cb9c257b020000",
    ],
    [
      "ETag",
      "NRcz7PeAUTXuS03eJgSyJg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `id` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-38-1620693471142",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8554fd6f9b3010fd5790f74b2be58b84900f29eab294766809e90869554d5362e0a06e09a6b6499555f9df7740d30fb55b2524b0efbd7befce671ec91d4b4332243e8bef7310bb2fb7dc2735028ac6b82be652dc1b3d7be68cb7b3b473f3c7fcf170168f468860054bd24d96405df25c042087cb4523163ccfa8e0bc8e89ea9d7e5d37db2d73d0317aba6eb491272189a62cbd43f68d52991c369b07ed46cc799c00cd986c047cf3bcdfdcb69b99e0b71028d97c2bd94415d9fcbfe849c203aa184f47cb051ac82588156c284bd0c20b33f4bfbe4ddd6074d38811bc6501d020e079aa0a5b9822e069c4e25c9459c9f09194365f7d908535b5269e36992f1def684d3705797dac51a9ad5602649ea89ab6c69a2296c08a85eb2a92dd6967ee7c861174704325c8b576f5dd722d4d5b17a09176a28d9d53ed2dd576b4a5e3580b4f3b3a39d6ceddf9f242fb76fd06839e43908aa5a5638ffa09146e9f9a6abf3fca8240153aa882ab5ecba47abf35f023bf1744fd4ed78f5ae0fb7dbfd7a51dbf150c0c30421f28f25491bd64d194a726506afa1d1dda7acfa083b03d30fc10ba035d0fa0d701daa751d86a1940f635f22098825326332e59d55972e5da9eb5f2dca533197b56594644b17ba795b9a288d73e151689a0ffd4b52fa28ca352714cb6e359ee78e2d997563519538869b05bdce36c44349180682ae8061488190fb169e462beb03d7bee8ca7c8288ffbe2809064f8ebf185e0edb2b2cbaa7c175aa651ea1f009734c94bc4b6fa207a97ecf7b57fa718bbeef81a65a91074f771fa0ff397f87255597cd62385da61d526fbdf7b7c6a046f51959dfc5c5aee35a9b65c8840401a7c3e3a082e039ffe0c0e3713b1783751462a5ce3a006b21009045403cb36a5dd8addd5fbbaae93122cd4bb58bb671e4ea6c85164840da4eaa9a2ea66968d2a42b97c066110e7ccb19d738cfe0576d9cb0419050000",
    ],
    [
      "ETag",
      "rOsrq47IMNAvMn3hz6KwFg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-38-1620693471142"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d90414fc2401085ffcb78b48d141ac0261cc4a0420881225e0c214b99d642dba9bb530c36fdefce560e1ebdec4ede7e6ff7bdade194160708609f269f15eacb4d82bcb24388a6cad8c8565261101c40568990835b7fa66677ec9ba7788ccbf3db77b713ae4623214cf481b982a08638c5ec602078afa150398a6db7d3ed8d82f1a5b4ca74f13a799e8422e474b0c262339f3f8ce713689c3fb6f2f42fcbb671e048fb1063d458446853949a8e18f1d416342a2f33740d553a42032ddc1e249aaa5269225714b73774bd7eb7d3bfeff903cff3bb026614294ea91076b3966cc0c42a0be94bfa8127806e47a91ab7ebb9956d87ebb46db657d3f8c268969a248141fbb83fecfc4679241b8f2536eb0a1d8894fce54bca10c42a33d8fc00fb4ae8c1a9010000",
    ],
    [
      "ETag",
      "7+4JaJ/t4sFfBePvVz20RQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxMTksImlhdCI6MTYyMDY5MzUxOX0.ZAKMEtErzy5QSJVah2TC4I6OtIbIYMRxEA6bkHuwfEwj0p53THY_MqcAZdYoiePBfzdiIuiriNwaA8dJvl3ud_8D8QmjG_ivjM8ry6o9Lksh0fAQauasp7cvxDifJxiJt8UOwA3qhcawKqxO_45moDhuyZswTpztxbJ4f8llqXMh-ta-W4q6f2n8zycM7fgLCd5FUM-YNY8Me7jEGOxOHJ0ILuoBzBOIx2cxraxeFuLKNcpSfjCRplGMe6OoEHiTRlnr3Ool9v5MvtXuHPLHuBoYiqYP7ukL9ah2LdzIpOxErmFX23v7ALRXK6CeLhqef57brkEE1xsNXAtzEQbmUw"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "dd",
      "6e",
      "82",
      "30",
      "18",
      "80",
      "e1",
      "7be9b1352002b2b355f9491065d3e2f084d4fa094c0a08485a96ddfbcceee07dde1fc43887becf86e60e357a438a2d9c399f87ed8a6439374f4972244e532e844a13b1d3d4c03d038fa2ba423c50659ffc09be3ed235a556a5c72c94716e459a84d60a462bd6aba8c1f47819ddde1e8a1b29086cfdddaac7ee13d67ac38cbb88d687a71af3737b0d46eee3b3cceb8ba1e360afdf741b6be7e6d3b36d9607d46a6a6656386d83f78dbdc94349b7e677ea4ea7a42b0db1acbda0d81c8bf05010f55832910ef1be0f1fbe940e15e071f2aaa793443304b22d3be8b3f2c5354cc799a17f7b36a8165e0308b00e3af4fb07a1c47c411a010000",
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
      "Tue, 11 May 2021 00:38:39 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-39-1620693471142",
    },
  })
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
      "00000002ff85536b6f9b3014fd2bc8fbda8447421222456b9ad20d29211b21adba6942b663a85bc0149b745595ffbe8b69ba7693da4fd8bee7dc73ee832774c7cb1d9a22c2b3fb86d58f9f6e05412788299cc16b504e1eaee7f6d91949fd1f4ee1eee3df0f61369b0182b72c898b2a673d299a9a3239dd6efa592d9a0ad742f420516fe0f5ec91638dbcc1706cdb43077892e5e9929777c0be51aa9253d33c6af73321b29ce18acb3e15c5cbbbb977ccaa16b78c2a69be953441459aef8b7ece05c58a8b72b6dd808146b23a6105e63958f8cbdc91d3b7a9fb1c17fd0cc07b4e19a65434a56a6d410a2aca94674dadb3a2e913d2365f1dd0c65ffa8bd8a0226f8a322971c14e8c1d5638518f15332ea2f5ca08c28b75b49ac7c13a4c368baffe6ade5fac97db55b831aebefa916f284c72a6b9c6cc38d5b7102ea0bf6352f152abc7ed73abfcdca0e0ffb1b4049096ac0b26636b84ed89e591948c693a19b824b51821133276f18058d41bb2e18e300c3c2daa59b814a5e5d91337b58789439c513224e35d421c8c13cbb61dd71a7b831149d1e1043dd45cb1732e2b2179d721741505b19fc4d1365ccc635f9790e22657e79db1b680d71e151408a0776a3ab4512e40a96d7710c67e345fc4c1a5df4d78c9324c1f37f730e314e792011ad7d03cc5ea95d841c350385ff9e700d613fb760c4a34fdf984da9eb72e5eb5fc851ec3005bbb4a7fd1268e82f08bb673445ce2bcd1907d77401558be81dac0f5e117206149bb2ce8fbd68fae51f714b194d5aca41f4f13c03af0e1bf765c7cc0c2ea838c547087dda1b215a135eb7688eb729fd9aeed798e8b34b856ffc41ccb1a0d8e5d6b73b41959c14af55c51b7f8506827d6c817100461fca1eed6e10f6b82a58378040000",
    ],
    [
      "ETag",
      "In8wYA1BBbfEZ2m5vTxwNg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-39-1620693471142"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92614f82501486ffcbe92b6e9a84c9e6072c2d169a21aeade6dc150e8a0197eebdd8c8f9df3b97cc5ab5d51738e7f09ccbfbbeb083a7248fc08665b27a2e5154272b5477baf05196a992742b782e110c40c556446e97c56628a3eaf5def41e64e58ae2c6944eaf47840cd79831b0771027984612ecc71de42c435a0b795a66f9a2ee0c5055a187d3c077c757d4673cd2fd78e6794edf1bc0de382e464cb145cdff636dbe3760c3973ec628300f516b2904df60a85c6d53b2ac48b1217929429450c3f58395e065c104e70d9a34dadd46cb3a6d5addb6d969b5cc5302531e3295f09cd8d994f481e28aa53e7f2197601120ea920cc7f5754be324aa8de8d21d079659ebfb0a90b4384971f137487ad78c3ec3077688e03bc7325ee6ea480dbd5be7b7e328d3cfa32e9d60f083908a923a22813b1a4c036734d1dcfce0bd5f299413c12948893ac356d33c3feb58cdf7582fb88e9ade632b51a20121a3bfe33a5160c72c95b87f03625767547b020000",
    ],
    [
      "ETag",
      "vbpjFsdyzW4LZsyIrpK4sA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-40-1620693471142",
    },
  })
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
      "00000002ff8554614fa34010fd2b64ef8b26b5054a0b6dd278bd965362a54aa9c6bb5cda852ebd55607177d134a6fffd86c5aa3def342181dd796fde9bd9599ed01dcd57a88f22babe2f09df7cb965116a2022f11a7647a4701ecf4e4f6e73ffba638c4fcff82aff7139180082562c81b322254782953c26a23f9f35d79c9505e68c1d41a2234b3f32baa6deedb52ddb302c137882a4c984e677c0fe2d6521faadd64ebbb9666c9d125c50d18c59f6b2df7a305b0567b72496a2b52fd90215d1fa58f43865319694e583f90c0c9482f005c9304dc1c22b73157ddd4fdda4386bae01fc406382e39895b9ac6c418a98e5095d975c6545fd27a46cbef9403377e28e426d349dfbe1c11267157979a861a12d169c8832950d6d09352534250bba5ad691e24efb1e4ccf21020e7e6341c452bb3e7503577bdd5a6a03ed581bfa636d3f81e76b73df7767a176707ca89d04d3f985f6ed660f03ce5744489a2bdf218e5252797e6eadf7fe402b0296205a0717b6dec586a3f7a224b2e3c46977a2442751e4447607b7233dee59c45a4504034f56d9150be72cd7cdb64eda363c1dd3b262cbc4760f786d27693bba93f474c724b66374d1b6811e3995644c45c104adfb8bae032f74176130f747c3d0556524187a38aecd5545bcf529a148007d50d7b68a52064ad561797ee806c351e85db9f57c4cc81ac79bd93d4c48825341008d39ce8824fc9cada069e8623af3426fea0f27c050877eb14308d4fff9f44a083785eab2546f340b03cf3f510676882b9c960af2507fa061015ed176dbf87f9a61100c6f401a738e377fc5a09cae55d1ff21a1f06a55dbdc491aa852dbad4cb4fdb585a781e03ed5d9d1e5dc0d6e50bd1590847092c79f8f0f8055e0d3dfc2ee8e02166e29c808096b18d65854223127f5d0d24cd9add91dd3e8380652602edfc56cd3da9d4e95a3ca483292cbe78aea3baa1a55854af1028220cc9aaf0e6afb07a6b32c5823050000",
    ],
    [
      "ETag",
      "Cep8wKHGjnNW51DHKrdnZQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-40-1620693471142"
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
      "4f",
      "c2",
      "40",
      "10",
      "85",
      "ff",
      "cb786d635b2a60130ea28d1209912289d110b2b4d35a683b75778b12c27f77763586a397ddcd7bdf4cdedb23ecca2683083665f1d1a13c5c14a8e7e691a0ea2aadf86aa951080ea01685212fb158ccbc72b8f90a5eaf1ed58bd7dd79f3d1880995be632d203a425e62952988de8ed0881a796cbd96762363fad01a65327b8eefe384859a3223cc96d3e9cd781ac3c9391b6b77ff1a599d1cd8d226c11c2536299a14ada42da67a620a2a51b715ba8a3a99a2020b5ba390d4b54212b9acb8a1e7fafdc0eb5ff7c281ef87018315a54297d430bb5c7036d0a44595d027f7030348fbe4aab93df72cf76c87bd054cb4732ff8f37ce3ad7e178e0f1ad593244ea7d0040b87839f98b764a26baea465870ea482fff9a1d410e5a25278fa06afbd24afc5010000",
    ],
    [
      "ETag",
      "b/egSN0i8bx2Z5KsX0uD0Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxMjIsImlhdCI6MTYyMDY5MzUyMn0.KZ4KD4xKdNNPOzZVwroB7ToA1fd8P3a0f2XWzu_R6Dz53RhGJOSNoEiC64R7Y931RSbkqjT99MR5XYH3C9AGCn09doYCWXACm6hDeyqXXaaoTeT41Zlf_LfgiL88kn9z67CPfybmr8UHjGPkIaWHyGcTND0oFCmJn8udtpQMzv2t_5ZamO7eNkkhWIUpSpq5ji11g_FtoXhdLzPcJBhdxM7mvP88XUpgbqyX58AgmeGqD0oSWQECvztPEwZGlFOhkCtOnb7qGjYo1LgjmQJ9JkCa0oGLPTbdu6l2bgmjtsuiYvaVE-xAc-9eeiCv-K34LsfEDNLxPF8y-Sxl-4rDhA"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d9",
      "7282301400d07fc9b3e330580ce91b56a4c6b294c5851706d22b8b801102069dfe7b9d7ec2394f9432067d9f88eb055af48ea654257336df717d95e4406920fa8769781b97d8c7e810875cf597388e4f662c349cbb7bcd714aef74a6741df463b8728da545f7bb7370c836915ee441e1d70fee0ea3188d01130a3f4725c732ddb68d2d5bcbf2593965d3971e0fadce2acfd82a5e157e469a5cf8d6750dac2e48b490f0b66b3a761f45c670aed8957f8ba2505d364a2a06d53e5d08763c9972ab4bf61fdbca2cc6332dc1cb702faf9d64d95d96cef70da0b6399a2190bceca04fca1777a1113243fff6444c1c5e012b483be8d0ef1f27d3dc441a010000",
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
      "Tue, 11 May 2021 00:38:42 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-41-1620693471142",
    },
  })
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
      "6f9b3014fd2bc87b5c13202109448ad628a52b52425620adba6942b663a85b822936a9aa2aff7d17d374ad2ab54fd8bee7dc73ee07cfe89e975b344584e70f0dab9fbedd09824e1053388757ef32fe6ed55b67e2e3e0bab8e1b7fea3f33b9fcd00c15b96c4bbaa603d299a9a3239ddc4fdbc164d856b217a90a8e7d83d7b3cb0c6ded099d8b633009e6445b6e4e53db06f95aae4d4348fdafd5c88bc60b8e2b24fc5eef5dddc0fccaa16778c2a69be973441459a9f8bfe2804c58a8b72b689c14023599db21de60558f8cfdc92d3f7a9fb1ceffa3980f79c324ca9684ad5da8214549419cf9b5a6745d367a46dbe39a0d85ffa8bc4a0a26876655ae21d3b31b658e1543d55cc388fd62b2308cfd7d16a9e04eb308d1717fe6ade5fac979b55181bd7177ee41b0a938269ae31334ef52d840be86f9954bcd4ea49fbdc2abf3428f838969600d29275c174628db1ed5a1ec9c88466ee7044328b11e292c9080f89453d87395bc230f0b4a866e152942e217830b2b3d4c5969b3a6362a5ae674f52d72596654f86180f87e870821e6baed819979590bceb10ba8e82c44f9368132ee689af4bc87053a8b3ce585bc05b8f0a0a04d027351dda2817a0d4b63b08133f9a2f92e0caef26bc6439a64ff103cc38c3856480c635344fb17a25b6d03014ce57fe1980f5c47e1d83124dff3ca3b6e7ad8b372d7fa52730c0d6aed25f14275110fed4768e882b5c341ab2ef0ea802cbb7501bb83efc05242c6997055d6efce806754f11cb58cd4afaf53401ac035ffe6bc7c5072cac3ec8480577d81d2a5b115ab36e87b82ef7853d1a0c5ccb451a5cab0f316fe01dbbd6e66833b21d2bd54b45dde243a19d58235f411084f187ba5b877f126d718878040000",
    ],
    [
      "ETag",
      "9QS+0rd47EaIWlYihEw4Zg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-41-1620693471142"
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
      "d153824010c6ff97ed1567c01093191fb0a818d152f1a9719c1316c580a3bba3c61cfff7f6c8aca966ea057697df1edff7c11e1eb332011756d9faa946b13b5ba39ae8628ab2ce95a45bc54b8960002ab626729325dbc9e8b59398dba1dfa9e6bda19d465ebf4f848c37583070f79066982712dc873d94ac405a8b795e17e5b2e90c50bb4a0f67d13418df505ff044f7e379187a83d08783715a4c9862cb86ffc7dae260c096afa698a2c03246ada5127c8bb10ab44dc98a2ac796e4b588514203370fd682d715139cb768d2b2ad96e5b44da7776e772dcb6e1398f398a98c97c4ce67a40f14572c9ff21772090e01a229c970da5c9f699c258d115d06e3c8b11b7d5f01929666392eff0649ef86d167f8c08e117ce758c1eb529da8ebf0cefbed38caf4f3a82b2ff27f1052515227240a46fe2cf246f79a5b1cbd0f760ae5bde014a4449da165da179dae63bec77ac975d4f41e57891a0d8819fd1db799023765b9c4c31b38298e077b020000",
    ],
    [
      "ETag",
      "hidjQMz5d0jKE5pU9K4fTA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-42-1620693471142",
    },
  })
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
      "00000002ff85547f6fda3010fd2a91f74fab01f9090124d431c83a261aba24b4aaa6099ce0509710a7b1034215df7d17a794d26dad1429b1efbd7befcee73ca1154d17a88b42ba7c2c48befbf4c042544344e025ec0ed3ad6f2d065bfbf390acb4ed26f332f547bfd703042d591cafb384d4392bf288f0eed46f2c7356643867ac0e89ea9651d75b86d6ea9896adeb96013c4e92784cd315b0ef85c87857550fda8d2563cb84e08cf246c4d62ffbeac650b39c3d904870f554520515aebe2f7a91b0080bcad2ded407030527f98cac314dc0c291b908bf9ca66e50bc6e2c01bca111c151c48a5494b62045c4d2982e8b5c6645dd27246dbefa40be3376068132984cdde06c8ed725797eae60aecc6639e145226aca1c6a8a6942667431af22d94af9e64dae20020eee31277caedc7e773c47396ecd959e72a1f4dda1729a60e42a53d775fc4039bb38572ebdc9f45af97a778201e70bc2054da5ef008709293d3fb776f4f78196042c40b40ace6cad85f5b6d609e3d08ee2b6d90c638d84613bb49bd80cb5a863116b11120c3c5166972c9cb214028686313163a36dd886ded42d536f2df4a66db44c3b8c23cd6e9b515347fb1adae6549021e519e3b4ea2fbaf54681330bbca93be8078e2c23c6d0c36165ae2ce2b54f014502e89dbaf6659432502a0f6be4068ed71f04a31ba79a8f3159e268e73fc284c438e104d038c76b22487ec516d034743df147c168e2f6c7c090877e7d4070d4fdf5742404bb4c7659c837f2036fe45e4a0307c40d4e0a09d9541f0867e015edf7b5ffa7e97b5eff0ea4719ee3dd9b1894d3b24afa3f24245eae2a9b07c9b2f3c79581f6bff7f0d410dca72a3bfa3975bc3b546d7924263949a38fc707c032f0e16fe17047010bb71464b880350c6bc44b912827d5d0d2b5b45bb19b86d9313b488273f1366669edf6e174ca1c6546b226a978aea8baa3b25165a8e02f2008c2acb9f2a0f67f004ad11f6a23050000",
    ],
    [
      "ETag",
      "DnwS4dCw7+Dek0wvpRp/JA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-42-1620693471142"
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
      "00000002ff8d904f6fc2300cc5bf8b776d35e82afe54e230363490101b054ed38442305da1ad4bec6aaa10df7d0edb61c79d923cfffcfc9c0b9cf26a0f09ecf2ecdca06bef3294a5bfa4c84d21ac474d1523048062322507c3f533dba8b51176eef93c95c1ab592d472325d87e626920b9c021c762cf90bc5fa032256adb76eb6e8e8a495b7b65b6584f5e26a90a25edbdb0d8cce78fe3f904aec19fb6faf4af968f6b0047daa578408795459fa27674442b33bf209bb22e30646a9c45861b7c2b648e9ada38a25095308ec26e2feaf4860f71bfdb8d23050bb24672aa94ddac341b08892952fad2fda003bfef712bc86f8ed49cd1fbc683fecf9427f2934513896b30006bf49ba6b940723005e3f51b7f523bd184010000",
    ],
    [
      "ETag",
      "89TDsc2yc2e0/sqHt8OaSQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxMjQsImlhdCI6MTYyMDY5MzUyNH0.eXw6BI7QKXB4UCeJglVa9veGDq06XejLgRK3mht-BHS6lH7_9bmULugYjvBwOD1wk6oMFsAf7AHCwJp5-lD57EQnRr8F0oksKtuyScTfNTnPfiewJue4JWR5zFVHgqRw4OFzIYUyPUJwoT-i0UmTQ3DE_sYasWQ9vXVxCiu0yxdnKaUuZiET5yctqrFDN6w4Ucybvkg7hf1VmGvWwswaIP_hUxTynh3N9z0wbUQoBeiwaM3beXNbN_AoYWuxHAOocCkd66PVwaVbTaMcJpEESFyC1QPc8onX86kdd27pR6xlLuLiigYqml5Lfc5aR_G4uQhHnmc2_DNuqicW87saNg"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff1dd0db6e82300000d07fe9b331722f7be4b20245543616e4a5294d410782b482d565ff3eb34f38e70750c6b894e436767c006fe0417577cdd6f80a3dd23216a7d1d346b23e5779834d18c1938e86fa24b6489b6721b0410db8547a6c24c4ee0d8d3643bc294d7b695305dff3a2acc290c53639582a3b7595bc6496e3ca0f1f6ddc7b324f8e87a0991deb71ca3b8543aceda81d54f35c399f5faaa8c9042172d5c128cbe5396e51d13b7bafbddd8b400676be64feb8f4563db226142a997a76f18625f2bfb5fdceac3592a68d8cb6f480f11df99804417aec205801aeae67c12539bfb886e5ba2bf06f27b7c795bf023c4e0517e0f70f4399097f1a010000",
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
      "Tue, 11 May 2021 00:38:45 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-43-1620693471142",
    },
  })
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
      "9b3014fd2bc87b6d120284a491a2354be98a94901548db699a90710c750b98d8265b55e5bfef629aae55a5f609dbf79c7bcefde0093db06a8ba62865f9aea1e2f1cb3d4fd109a20ae7f0fa579493b0be5d17fbdbc6131b7fa7bec9e06a3603046b59129775417b9237825039dd44fd5cf0a6c682f31e24ea39766fe85aa67b6a3be3e1d0b1802769912d59f500ec3ba56a391d0c8edafd9cf3bca0b866b24f78f9f23ed85b835af07b4a941cbc951c808a1c7c2cfab5e0042bc6abd92602038da422a125660558f8cfdca6676f53f7192efb3980f78c504c086f2ad5da8214845719cb1ba1b3a2e913d2365f1d50e42dbd456c105e34659554b8a427c6162b9ca8c79a1a17e17a65f8c1c53a5ccd637f1d24d1e2d25bcdfb8bf572b30a22e3e6d20b3d43e1b4a09a6bcc8c337d0be002fa5b2a15abb47adc3eb7cacf0df2df8fa52580b4a45d30199b2e1e4eccd3344bc7249bd8a33433699a4ed2f108dba9494e1dea6c538a81a745350b57bcb2868e3dde62373127d8491ccbb213c88193d43233d71d59b63b72d1e104fd114cd173266b2e59d7217413fab197c4e12658cc634f9790e1a650e79db1b680d71e151408a00f6a3ab451c641a96db71fc45e385fc4feb5d74d7849734c1ea31dcc38c385a480c6029aa7a858f12d340c05f395770e603db11fc7a044d35f4fa8ed79ebe255cb5fe8310cb0b5abf4174571e807dfb59d23e21a178d86ecbb03aac1f21dd406ae0fbf01094bda6541571b2ffc89baa7906654d08a7c3e4d00ebc0a7ffda71f1010bab0f3252c11d7687c8568408daed10d3e53eb347d668688f90060bf52e660fed63d7da1c6d465ad24a3d57d42d3e14da8935f2050441187fa0bb75f8077fafd5eb78040000",
    ],
    [
      "ETag",
      "xrm8RpXOlvXuErUIqtBsNQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-43-1620693471142"
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
      "000002ff8d92414fc2401085ffcb782d91422dda844351540c2042391843c8d24ea1b8ddadbb5b0c21fc77672ba25113bdb433d36fb6efbd7607cf9948208045b67c29516d4f96681e6c31465d72a3e95648a1111c40c396446e565b76b7791c8a0b979fa6859b2a2d2661bb4d848e57983308769066c8130dc1d30e04cb91d662c9cb5cccabce01b32dec70128d7bc31bea7399d87e38edf7c34ebf0b7be7b89830c3e615ff8fb5d9de81b55c8c3145852246aba550728db1e9599b9ae505c79a96a58a514305570f964a96055352d66852f39a35d76fd4fd8ba6d7725daf41209731339914c44e27a40f8c348c8fe52bb9049f0055956438adae1b1a674965c496bd61e47b95beaf00494b338ef3bf41d2bb62f4193eb04304df3996cb52982375ddbf0f7f3b8e32fd3cea2a8cba3f086d28a92312f506dd49140e46969b1dbc77b606f548490a52a3cdd0ad7be7672dbffe1eeba5b451d37b02a34a742066f477dc66068294718dfb3752ba53ad7b020000",
    ],
    [
      "ETag",
      "vhyaJvYNn91l/fp1frsnSA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `date` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-44-1620693471142",
    },
  })
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
      "f705441f79357d4815ebda0c229594a529a84c53eb384e30a471881da60af5bfef26a140c70652a4c4bee7dc73eef5759ed03d4b433440018b1f0a9a6fbfdcf1003510953886dd13b138bfb183edd89a5c9de0a928f0f2e662341c0282952c813759429b821739a162b098b7e29c1719ce396f42a2a66936354b57adbe617635cdd4812768124d597a0fec5b29333168b7f7daad98f338a13863a245f8e665bffda8b7b39cdf512245fb50b20d2aa2fdb1e869c209968ca7c3c51c0c1482e62bbac12c010bafcc30f87a98bac5f0a61503f891118a09e1452a4b5b9082f0346271915759d1e0095536df7ca0b93db5c7be329e2d5cff688d3725797dac60a1ac56391545221bca1a6a8a5842572c5cd791ec5ef9eecd2e20020e6eb1a062ad5c9fdb9ead28eb104bba5686caa9327227ca21d9719585ebda735f393a3d56cebcd9e252f9b63cc080eb900ac9d2cab38f8384967e9fdbeabc3fcc92802578a883abae6a61ada7f68328e892a867748248a541d00bba1d6c042ae99bd40c038a8127cbec150ba73ced69916104964168cf308865d09ed527a4d30dba61a863cd30cdc88c3afd10ed1ae877ce249d309171c1eadea26bcff1ed95ef2ddcf1c8b7ab32220cfd9bd4e6ca22defa945024803ea86b57461907a5f2a01cd7b7bdd1d877aeec7a36a634c6643b7f80e988702228a0718e3754d2fc8287d03474399b3bbe337347536054077eb9470834f8f9f44af0b759d56559bdd1a42c60f726e1154e8a0af0587f205dd5d5a6aa37b50edaed1affcf34f2bcd112d4719ee3ed5f31a8c8324bfa3f742a7cb5aa9dee753554aabdb840bb5f3b781a08",
      "ae539d1dfd58d8de12d55b1e8d684e53f2f90401b80a7cfa57d85f51c0c225051921610df34a442942725acf2ddb54766b7647b7f49e862a702edfc53a96ba3fa0324799916e682a9f2baaaf68d5a832548817100461dc5cc73d83e81fc2d9901322050000",
    ],
    [
      "ETag",
      "+sUHZEbyC6DV+aLsuaYZMA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-44-1620693471142"
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
      "5f",
      "6f",
      "82",
      "30",
      "14c5bfcbdd2b24e2987f487cd0cd6c66c46ca8d16421a6d60b4381cbdab28518bebbb7cc873deea5bd39fd9df69c5ee09c954708e090a55f35aae62e45f36e8708759d1bcd5b45a54670008d48992c46e375d13c4cb7af34de0db7bb503ea5abe964c284969f5808082e9064981f35041f172845816cdbef55772363a6a9acb258aee7cff38885828e56586ec2703a0be7d03a7f6cd5f95f96b875e04487081354584ab4292a45279466610b6a515439ba9a6a255143077707a9a2ba128ac865c5f57dd71bf47b83f1bd3ff43cbfcf604e52988c4a66372bce06868cc823fae17ee031a0ba91ab26ddfaddc9b6c36d8adbf8669a3506f59b224ea0d13eee8f7abf511ec9c6331cdba81a1d9082fff22533102422d7d85e0155b791aaa9010000",
    ],
    [
      "ETag",
      "m89Tmy5AWKo9X7WXLcDgSA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxMjcsImlhdCI6MTYyMDY5MzUyN30.E2rTHNHkjQ9XS7YvJI5aE3KWj15LOdUOHqgfuqyHp4_zZjhYBdDYrCFXvcP4rRJYL8r1ruL98EBMCu_PK6h4BLRvDOHn4t99V1pjUo-7mjKWhiKi5qtY0r47sg6yICrjcQmQNI9_QTeHQ6aPEHLD777L-1thvl_gBFk6nxng_9pjPJBVfBuN-3LKNSEkE0H0J1ONVGvimyOEMWw30iCFVF90yUMX0j5CKMZolqbUnWMC6Z8wIZ73OHWsJfSleH-uHdDoAHA4QlTaWDAsF9Aj7sranD2zW_8kY3ziDND1bboY_mmtYRLMpJldlH3KZqqX4ZAcP5c4sr87av-UWBWXyw"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff1dd0db6e82300000d07fe9b31ab4b4e0de4420130882c066f6d234a5ac80dcaf75d9bfcfec13cef90194313e0c646c4a5e833720e9e1b8633bb7d50df29d529a8442a904346ad18c8f365ff6c98326beaa36ce7050109ca59e37965d7c94ae99e25e3aed0d2dcbf3d9403945a4eac87aebb480b9d3ea54f6bb5a87eae8af04f6db002a624ebaee4b3fdbba8c4ea9e714b1cdf7770d7705b99a17b79c59c6a2b029ef86599cb44c065b5c570b17480f54031b7840ed3dcc103e09eb3af961ec7a04d254e0b3872cbfb8e9b357d44f930607062769599fb14d2f6003f8dae63d1f48fee242743c6ec0bf9d8cb2e5af0083d39ef7e0f70f2bd017e11a010000",
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
      "Tue, 11 May 2021 00:38:47 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-45-1620693471142",
    },
  })
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
      "14fd2bc8fbdabc28048814ad514a57a6846c84b49ba60919e742dd01a6d874aaaafcf75d4cd3b5aad47ec2f63de79e731f3c923fbcda931949797ed742f3f0e956a4e48480a239be5a34b697938bb2fd11e481e9165f03efb65ecce788e01d4bd2b22e602045db3090b3dd769837a2ad6923c400130d2c7b30999ae3a9776a39938965224f4291ad78f507d9374ad572361a1db587b9107901b4e672c844f9fc3eba374775236e8129397a2d394215397a5ff4732118555c54f3dd160db4129a044aca0bb4f09fb94fcf5ea71e725a0e7304df73069431d156aab3852998a8329eb78dce4a668f44db7c71205b7fe52f638389a22daba4a2259c187baa68a21e6a302ea2cdda08c28b4db45ec4c1264cb6cb4b7fbd182e37abdd3adc1ad7977ee41b8aa60568ae3137cef42dc40beaef412a5e69f5b87bee949f1a14bc1d4b474069097d3071c6533a71c75e9aa50ecbdc533bcdc690a66eead8f4341d33cf026b9f02459e16d52c5a89caa1a665c2c44b26e0b2c4a26396789e6727f6d4a11e739805d331399c90bf0d5770ce652d24ef3b44aea320f69338da85cb45eceb1232da16eabc37d615f0d2a3c20211f44e4d872eca052a75ed0ec2d88f16cb38b8f2fb09af20a7ec617b8733ce682101d1b4c1e62968d6628f0d23e162ed9f23584fecdb3128c9ecd723e97adeb978d1f2677a8c03ecec2afd25db380ac22fdace1171458b5643eefb03a9d1f20dd686ae0fbf11894bda6721df777ef493f44f1164d040c53e9e268275e0c37fedb8f888c5d54719a9f08ebbc36427c21ae87788eb729fd8b6e94ca7fa4f55b4516f62aee31ebbd6e5e8324209957aaaa85f7c2cb4176be533088338fe5077ebf00fdf4b5d9b78040000",
    ],
    [
      "ETag",
      "4aT5C1FmuXIgI28lJI9jpA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-45-1620693471142"
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
      "d1",
      "53",
      "82",
      "40",
      "10c6ff97ed1567d4908a191fd0ac6cd454f0a9719c1316c40e8eee8e1c72fcdfdb23b3a69aa917d85d7e7b7cdf077b784af3085c58a7c97389b23a4b50cf4c31475572ade856885c2158809a2544e27de84f77c9abf732ae7a55bbcf2b7f67cfba5d2254b8c18c81bb8738451e29701ff790b30c692d14bcccf255dd59a0abc20cfd603e9cdc529f89c8f493c568e4f546033858a7c58869b6aaf97fac2d0f166cc57a8e314acc43345a0a29b618eaa1b1a95856706c2851ca1015d470fd2091a22c9814a2419386dd69b49c76d3b93ab72f5a2dbb4d201721d3a9c8895df8a40fb4d08ccfc58e5c824380ac4b321cd7d7171aa7516dc494c349e0d8b5beaf00498b538eabbf41d2bb61f4193eb06304df39968932d727ea66f4e0fd761c65fa79d4b5170c7e104a53522724188e077ee08da7865b1ebdf72a8d6a2a0505a9d064d86ada979d0ba7f91e6b5f98a8e93dae96255a1032fa3bee520d6eccb8c2c31bd7d7f3637b020000",
    ],
    [
      "ETag",
      "eJcSPwgzAvMyBy2ClySw4Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `stamp` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-46-1620693471142",
    },
  })
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
      "40",
      "10",
      "fc",
      "2b",
      "e8",
      "fa",
      "2551fd000c185b8a529ad014c9c60ec689d2aab20fbc389700e770472a2bf27fef02715e6d1309097c33b33bbbb7eb0772cbf215199288adef4a28b69f6e78445a04245de3e9ddb5e5a473679a6493d175f0d9e2378ee79d1f1d2183552a41b34d0a6dc1cb2206319ccf3aeb82971b5a70dec6406dc36a6b96ae5a839ed1d73443479d803419b1fc16d5d7526ec4b0dbdde7eeac395fa740374c74629e3d9d77eff5eea6e037104bd17d9db28b5944f7fda4c7298fa9643c3f9acfd04029a0584046598a169e95abe8cbebd01d46b3ce1ac9f72c061ac7bccc65650b43c43c4fd8ba2ceaa864f8406a9b2f3ec8cc1db927a1723299fbe1c19266957879a850a12c16058832952d658935252c85055b2d1b6473ab7c0b266344d0c135152096cae577377015652924ba5b2a47cab1e2f8a7ca6bb5e72b73df7767a172707ca89c0593f954f97af58a83b6572024cb6bd3218d52a80c3ff6d5fbfb362b019568a201177dd5a29aad0ea224eac789dd33a3448528b2a3be497b911a0f0c30561150d4c92a7aada239cffb71df06b56f5a96011124facaa0a606aa6626bd28ee599a6e43d2b3e98aec5ae477c1249c32b1e18235cd25978117ba8b3098fb274ee8d66524141b78da98ab8a78e9536291487aa7ae5d85328e99aa9bf2fcd00d9c93d0bb709be118c19ac6dbd91d8e47425301c8a605cd404231e62b6c1a994e665ee84d7c67848afac6a77b8620c39f0fcf8270bba9bb2ceb3709bd31de91339ed61ef6a40b9a9635ebbef920baaaab6d556f6b66a8e943ad37d48c8eaaaa3fc86ed7fa7f7027089c2b34448b826edf6058a465",
      "54f27f64adf9f5afc6fcde8546aa6c4f9ec8eed70e9f16c1156ba293f3b91b5c91e62880040ac8e38f870ac935f0e13fc57e6d918b8b8b69700524c3118e4595242ea0196596d5761bb5a9dbb63d2035b9906fb1816af6f67756c5a8224206b97caca859dbba5115548a2712823881bee79f21fa073bfd47cd36050000",
    ],
    [
      "ETag",
      "qh6AlUAPfmOLhR+6ojAIIQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-46-1620693471142"
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
      "ff8d90414fc2401085ffcb786d13161ad4261cc4a092102215488c216469a7a5d076eaee1421a4ffddd9eac1a397ddc9dbefedbeb75738e6550221ecf2ecb34173b9c990176e88d036055bd96aaa2c8207c83a13f29c24d3f76a7ddea9a5e2f37af5741aa8fd623412c2c67b2c35845748732c120be1c7152a5da2d8b65bd3dd28185f6aa74ce7cbc9f32412a1a4c409f3d56cf6309e4da0f5fed8eae3bf2c9bd68303ed224cd16015a34b511b3a60cc5357d0eab22ed0b7d498182d74707790196a6a6d887c51fc60e8ab61bf37bc1f04b74a057d010b8a35e75409bb7a936cc0c4ba88e84bfa8112c074a3544dbbf5d4c9aec3efb46937bfa6f185d1be1a920416dde3c15def27ca23b9782cb1d934e841ace52f5f728630d585c5f61b9e65edf2a9010000",
    ],
    [
      "ETag",
      "xddIYnVxb1T1txVUFv31hQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxMjksImlhdCI6MTYyMDY5MzUyOX0.kQR2rTePtlCY8_y7l0k7Jfc7EE6CKjGIANByt3NXYBOjz1vXZjZBKx-kyWWtUMeOEZ761pPA5J6QZeWSV_gzHXISS5UkdxDdpBK7pDOsKx81mBQlV6FZZ9Lgk3MFYYp-mcL-urXxF3FeLAtPa31nfC5tMmarZz7kJS7XdOIdeHbHseke2UBgKR9ownq44thZVGSQKqB4PrSaFsW7QhocZARQspaL4W7mDY2Pp59So65LLkfTcAJSxljl0cgvKD21S0Hc5dmoZCewEO4Qyu5nNnqioq1-xzazE7os14FaNJurkjrdnLW9uyxwzCq-_js6EX6VL4oJVpmBwx2nonwvhg"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "82300000d0bb646d1d4be4d71d69228a1685f2296c9888916a82c40005dae9ddebf408effd005a96ac6d8baee1ec065ec044357b5eceb7d24245c5c82eced425340c324027ca8df160dfd4f19cf5493e065e9d478730e1c5f12eb5fd59a5791e9adc2516960656d1f6e80ba20743e892b729ccc4b2b39a8443a8cb8c2e68976dbe3e121f938588aa2695dfe6123baf683562189c06add6a7fb75df2b74b6612f48e70ac1a7932752eaef2a4795c1f3c8d3f8b3b95e9f7a0f0f504ea871c55a25bbed1eb1b4ac0f3218ccf81d9b01eac3d5a6503c665dbd0633c0467951ac2d2e0f2ed46d7b06feed453749f608408c2aa6c0ef1fca6754481a010000",
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
      "Tue, 11 May 2021 00:38:49 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-47-1620693471142",
    },
  })
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
      "85536b6f9b3014fd2bc8fbda2424e445a4688d12b2462aa405d26a9b26643b97d42dc1149b565195ffbe8b69ba5695ba4fd8bee7dc73ee8317f220f22d991026768f1594876ff7929133029aeef0d5112c1c47a1db9b1fae1757e1e097ef2f97cfd3292244cd52745f64d052b22a39a8c9266aef4a5915b494b285895afd51ab3becd943d7e98fbadd7e0f790ab2f452e40fc8bed3ba50934ee7a4ddde49b9cb801642b5b9dcbfbd779e7a9da294f7c0b5ea7c94eca08aea7c2dfa3d939c6a21f3e9264203958232813d15195af8c7dcb2f38fa9db82eedb3b043f090e947359e5bab68529b8cc53b1ab4a93954c5e88b1f9ee4022efd29bc7169759b5cf939ceee1ccda524d137d28c05a866bdf5a05cb75e8cfe2d53a48a2f985e7cfdaf3f5e5c60f22ebf6c20b3d4b539681e15a53ebdcdc02bca0fe169416b9518febe75af9b541abcf63a90928ada00926237b48bb63db65291bf174ec0c586a036363361a5087d9dced437fcb8022cf881a16cd656e8f016c3ee009eb6e59d2ef819b30870d931e1ba58edb73edae6d93e319792e858685508554a2e910b90d57b197c4e12698cf62cf9490d22ad38bc6585dc07b8f1a0b44d017351deba890a854b77b15c45e389bc7ab1baf99f025ec283f448f38e394660a104d4b6c9e86d2975b6c180966beb740b099d8d529a8c8e4f70ba97b5ebb78d7f2377a8c03aced6af325511cae821fc6ce097143b3ca409e9a0329d0f21dd686ae8f7f10894bda6421d71b2ffc499aa710522821e7ff9f26824de0bfffda69f1118bab8f324ae31d7787ab5a8497d0ec9030e5beb2078e6d8ffac4804bfd29e674dd53d7ea1c7546d843ae5f2b6a161f0b6dc42af506c2208e3f30dd3afe0519dc375178040000",
    ],
    [
      "ETag",
      "3ibR8SR92CyQDPR5ZMMFFw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-47-1620693471142"
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
      "ff8d92dd4ec2401085df65bc2d096029da840bd02244407e8a378690a59d42b1edd4dd2d8610deddd98a68d4446fda99e937db734e7b80e7380bc18555bc7e2950ee2fd6a827a698a22a12adf89653a6102c402dd64cde377cb1dfe58f1b3f431576bae4f5843769b59850c1065301ee01a218935081fb74804ca4c86b0125459a2dcbce02bdcfcd70e64ffba33bee530a4d3f9a0f06edcec083a3755e0c8516cb92ffc7dae268c19656538c506216a0d1924bda62a0fbc6a612699e60455121035450c2e583b5a4221792a8c2938addacd49c7ad5b9beb49bb59a5d6730a140e8983266e733d6079ab448a6f4ca2ec1614096251b8ecaeb8ec771581a31657fe43b76a9ef2bc0d2a238c1e5df20ebdd08fe0c1fd82982ef9c48a9c8f499ea0e1edabf1dc7997e1e75dbf6bd1f84d29cd419f1fb436fe6b78763c32d4ede3b7b8d6a2c8983546832ac55edab46d3a9bec77a43266a7e8fab6581160482ff8e5eacc18d44a2f0f8068b97c6cc7b020000",
    ],
    [
      "ETag",
      "K5TayvpVhTnesdBFoEHaEQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `amount` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-48-1620693471142",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85546b6f9b3014fd2bc8fbd24a794078e421455d96d20e2925198156d934258698d42dc1d4369da22aff7d17d3b4cdbaad1212d8f79c7bcebdbee609ddd37c8d0628a69b8792f0dda73b16a30622126f6077b7b0bcebc208b9b8b99b9976f43d96a43b1a0e01412b96c0db22234dc14a9e103188e6ad0d67658139634d48d4b47a4dc3e9e84edfb4ba866175802748964e687e0fec5b290b3168b70fdaad0d639b8ce0828a56c2b62ffbedc74ebbe0ec8e2452b48f25dba022daff173dcb58822565f9309a83815210be245b4c33b0f0ca5cc79f8f53b728deb636007ea409c149c2ca5c56b62045c2f2946e4aaeb2a2c1135236df7ca0b93b71c7a1369e467e78b2c2db8abc3ad5b0d0964b4e4499c986b6829a529a91255dafea4871af5d04d32b8880835b2c885869375fddc0d5b4430e6da89d6923ff5c3ba67bbe16f9be3b0fb593b353ed32984633edcbe20803bed744489a2bd7218e3352397e6eacf7fe382b0296e0a20e2ebbba838d9ede8fd3b89ba43dd38e539dc4712feedad88cf5a46f116b1d130c3c5965572c9cb3bc675a7d6c77ecc4360cdb58f7753d31acd8c1a6d9b5ec7527ed923e3162bb87f60df48b5349cea92898a07577d14de085ee320c227f3c0a5d55468aa183e7b5b9aa88b73e251409a0ffd4b5afa294815275549e1fbac1681c7ad76e3d1d13b2c1c96efe00f391e24c1040638eb744127ec5d6d034349bcebdd09bfaa30930d491cf0e0881063f9e5e09e1ae505d96ea8d2e26d351e858cac101728db352611eeb0f64b46c40ec1bff4e330a82d102a431e778f7470cca7114fd2f0a0aaf56b5cd174554a91d561db4ffb987a781e036d5d9d1b7c80d16a8de0a484a38c9938fc707c02af0e14fe17043010b7714648484350c6b222a9184937a68e956d9add9b669e896831498cb77b18e631e4ea7ca5165245b92cbe78aea1baa1a55854af1028220cc9aeff99710fd0d2e95cfd221050000",
    ],
    [
      "ETag",
      "yY4IVp1TrsWjP35UZbte7A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-48-1620693471142"
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
      "4f",
      "4f",
      "c2",
      "40",
      "10",
      "c5",
      "bf",
      "cb78b44d6821804d380821404250abc483216429d35afa67eaee542584efceec6a0c472fbb93f7de6c7e6f4f50e4f51e22d8e5d9478bfa7893213fd92146d3966ce46aa836081e20ab4c92f3c97032be2d86c5ebe0a11bcce6dff56ac1d968240993bc63a5203a419a63b93710bd9da05615cada76abdd8b12e3636395c5ea653a9bc62254b4b7c26abd5cde8f9753387b576b4df1af95cdd98303ed624c51639da0a568341d30e1852d6854d594e81b6a7582065cd81999a6b6519ac817c5ef0dfda01f76fa77ddde20087aa1044b4a14e7544b76fd2c6cc0c4aa8ce94bfa810d68374ad5d49d9f4eb61dec1438b46b2ff8f342eb6d7e1f1c1f19cda326a13368c1ba61e7077342169da512eb163d4894fcf33c678852551a3c5f0087ac62c6c5010000",
    ],
    [
      "ETag",
      "HC8CB+k8kW7O31GHxnNItg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxMzEsImlhdCI6MTYyMDY5MzUzMX0.OYERQPTs7Y7r1xjvuyqX-9TG-p0tUaEslf7eDyZZfMdHMuobJguxSItcop9pna_KY-AiwODH35UTumbQcGs1MRKffg4Uq6TJgxDVL3Tpjqi2C1dFUqLj_yYl91b8jWJ82bmy7hdv6OG74aZf5DE9fqAdn1X3r_fb2jyT9_fWhYti5QrO8HFYUkMrKabaXuM_i5w2Riu-Uc4SWATONzecEtLiAwnd53dwA59PUqXv5w6Zj3jhoS-Tt4el1Ab7Mchx0_GHpVR2M1N2aA2SJCSrP3GEjcQT0TR1UrnBfuuMJlkwECs2mrqq7lpwJzQbDM25u4vkTaeQBS-Tcvb4FtQoGg"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff1dd04b7282300000d0bb64ad4e486991eec01f869f7c8ac886410c8808048841707af73a3dc27b2f90a429e9fb983525a9c1371813242fd2854e976a9c5f12a5332b0c356ed29c79d269174411cef74bf90772e298fd89ad56e1d94083735c8745d0eeb82fda77efb255143d1f5aeb2b98e6fc4932137363ddddbcbd113ec661e31378a077a3d490e8ee157795bb3dc24c168e3c8d920142c746c596265ba6c060ba05e243b9da87ba0e27418dda86aba1be3126e25a455659bbd467d41e44ef4a61868967a1920ef3582b3de971ee294615d7b2a8f22701c78d0466803c69d1913e2ededc8f4f599e817f7bcc464ade012a493ad281df3f9005d4dc1a010000",
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
      "Tue, 11 May 2021 00:38:52 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-49-1620693471142",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85535d6f9b3014fd2bc87b6d0221248448d11a25748b96900d48ab699a90712ed42dc1149b6e5595ffbe8b69ba5695da276cdf73ee39f7834772cbcb3d999294e7770dd40f9f6e444ace08289ae3ab69afafadb91dfdb53677c332504bfe6db19ecf6688e02d4bd24355404f8aa66620a7bba89fd7a2a9682d440f13f51caf3718dbd6d81b3aee60e0d8c89350646b5ede22fb5aa94a4e4df3a4ddcf85c80ba015977d260ecfefe6bd6d56b5b801a6a4f95ad2441569be2ffab9108c2a2ecad92e42038d843a8103e5055af8cfdca7e7af53f7393df47304df73069431d194aab585299828339e37b5ce4aa68f44db7c712091bff617b1c144d11ccaa4a4073833f654d1443d54605c84db8db10a2eb6e1661eafb641122dbefa9b797fb15def3641645c7df543df50342d40738d9971ae6f015e507f0f52f152abc7ed73abfcd4a0d5dbb1b4049496d00513d71ad3c1c4f2d22c755936198ed2cc82349da4ee880e538b790e38fb1428f2b4a866d152943074f7ee68ec2419f5dcc4a1de2049ede13861f668923996edd9239b1ccfc89f9a2b58725909c9bb0e91ab7015fb491cee82c53cf67509196d0ab5ec8cb505bcf4a8b04004bd53d3b18d72814a6dbb5741ec87f345bcbaf4bb09af21a7ec21bac31967b49080685a63f314d41bb1c7869160bef19708d613fb7e0a4a32fdf548da9eb72e5eb4fc991ee3005bbb4a7f491487abe08bb673425cd2a2d190fbee402ab47c8db5a1ebe36f44e2927659c88f9d1ffe24dd530819d450b28fa789601df8f05f3b2d3e6271f551462abce3ee30d98ab01aba1de2badc27f668685b9e4b34b8566f62f6c83a75adcdd166840394eaa9a26ef1b1d04eac91cf200ce2f803ddade33fd7c42d3778040000",
    ],
    [
      "ETag",
      "/2Lh0A2Sx0Mq3nNtDiKCLA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-49-1620693471142"
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
      "41",
      "4f",
      "83",
      "40",
      "10",
      "85",
      "ff",
      "cb",
      "78a50955a44ad243abb59260554a4fa669b630201618dc5dd4b6e97f7716b51a35d10bcc0cdf2cef3dd8c22aaf12f06099678f0dcaf54186fad61421aaa6d08a6f35550ac102d42263b209c7c16a33a2d9465d2fc72fb3383c423bebf79950f13d9602bc2da439168902ef6e0b952891d7622a9ab25ab49d057a5d9be1340afdc998fb9212d34f664130180623d859fbc54468b168f97faccd77163cd032c4142556311a2db5a4078cb56f6c2a51d6057614353246052ddc3ec82435b590441d9e749cd34ed73db4ddd323a7d7ed3a870c16140b9d53c5ec6ccafa4093164548cfec125c06645bb2e1b4bd3ef1384f5a23a6f42791ebb4fabe022c2dcd0b5cfc0db2de7bc19fe1037b8fe03b274a6a2abda72e82ebc16fc771a69f479d0fa2d10f42694e6a8f44fed5681a0dae6e0c377ff73e5c6b54379238488526c3aeed9c1cf75cfb2dd6333251f37b3c2d1bb42016fc775ce61abc54140a77af23b516977b020000",
    ],
    [
      "ETag",
      "uRGLkzEoUzsObGxUcR3e0g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `id` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-50-1620693471142",
    },
  })
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
      "9b",
      "30",
      "10fd2accfba79592000904881475594a37aa947484b4aaa6293160885bc0149b565995efbe039afed8ba564202fbdebbf7ee7ce601ddd03c422314d0e4b622e5f6f3350b5007118113d83df5b7bfa756c2b6f313f7e2fa74b6b1e4cde27e3c0604ad591c67454aba9c556548f868b9e82525ab0a5c32d685445d5de9aac3be32b4069aa1aa5a1f789ca4f18ce637c0de0851f0912cefb57b0963494a7041792f64d9d3be7cd7978b925d935070f9b5a40c2a5c7e5ff42865211694e5e3e5020c549c942b92619a82856766147c799dba4771d64b007c474382c39055b9a86d418a90e5314daab2c98a460fa8b1f9e2032dec993df5a5e97ce9fa076b9cd5e4f5a184b9b45a958457a9e8486ba829a62959d168dd468a1be9c49b9f41041c6c30277c2d5d7eb73d5b92d635e8d3583a9226eeb1f49aebb8d2d275ed852f1d1c1d4adfbcf9f25cfa7af50a03a623c205cd1bcb3e0e5252db7decaaf3ef59d6042cc0421b5c19ca10aba66205716084b139d0835821416006868e0781125a1ad1a28060e0893a7bc3c239cbcdc834fa46847523b674cd52869aa959aa61a866df32e0802cac5a44b722b4eba0fb920a724c79c1386d5b8b2e3dc7b757beb774a713df6eca8831b4efb8355717f1d2a7802201f44e5dbb3a4a1928d5e7e4b8beed4da6be7361b7a33123090eb78b5b188e18a79c001a9738238294672c82a6a1f3f9c2f19db93b9901a339eff33d82a3d1cf876782bf2d9a2e8be65d6b0db5467f0fb8c069d520eeda0fa4ea68b7ebfc3fc5c4f32657208bcb126fdf4eff66fe06dfac5a8b4f7aa856dbaffa68f76b074f07c1356ab3a31f4bdbbb42ed96476252923cfc787400dc043efc1becaf2660e172820c17b086410d792d1296a41d589a35765bb63ee85b83216ac0a5f83b36504c",
      "6d7f32758e3a23c9482e1e2b6aaf66d3a83a54f127100461ce5cc7fd06d13f1b19bd241a050000",
    ],
    [
      "ETag",
      "JTyzC9goyOFNVjJLh9/hSw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-50-1620693471142"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d90416bc2401085ffcbf49a80b11a35e0a1965005b19a2ab41491354ed26892d9ee6e0c22fef7ce6e7be8a1875e768737df0cefcd154e457d8008f645fed9a0badce56856b6485037a5d1fc49aa3582076844cee472a0c337791a8975b77a7e5db4c359db4e57e331133afdc04a407485acc0f2a0217abf422d2ae4b1dd4eb98d8c998bb4ca6cb18e9fe284858a0e56586ce6f387c93c869bf76b4c9efe35b2bd7970a47d82192aac53b42ea4a223a66666036a51c9127d4d8d4a5183835d2357d448a1887c56fc7ec70fc26e271cddf70641d0eb3258522a4c4135b39b17f606868c28136a391f5840b992a366ee3db3dc7719ce0eb0d6feee05b6b7fd5938b918d44b45ec4ea335d61b76be6d3e92b56e3892510d7a900abef3b4301065a2d478fb02cba21de7c5010000",
    ],
    [
      "ETag",
      "P7s6Ypk9aT2mOXNw8IwwHQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxMzQsImlhdCI6MTYyMDY5MzUzNH0.Tpp7J6yxQjYE8NaeB48k1Zr18vwzPd9Rzj0LYeMNDZ1fBbSnFzBQKVKIOe8nQPqPYBXOstv0Vw3kmJ_wdkot6-1jzZvrxt6Vn2fumoVwObpbH0ttdDMC5TnPSIfHsuAT9u2PCtQrhpyZ10NHxo2MPTXAFWsJ248GaU4eQIJ0re5Z-wNYesMexsN7-t3Ig_QrgFlkJIkBgxhptDM1SzJTXq-b83WhUxSEm9OHFkkGSKkRhBs-d-xL9a7FjseNdiWXluZ5hadbwpg7dNc54IbjntpxviNRay4Uz6-VPxyxzSdfZK64WsoLqn37kmqsudnq_Eg8ERLUMk5WKt1H6HyXJw"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff1dd04b7282300000d0bb646d1d8402d29d74e463a0600a0a6c3224048b847faa42a777afd323bcf703724ad93461d1d5ac056f60ce65634dd7b0df9af8c26e2ec9d303d7ba82546ee0444178dd2249322f6190b92742b8a185c3a16c9718e93d71720213c7d791bfd077a4cb4953283afbdc3906dcbcb61fee9ef2cb35b39b588bc35ebcc01dbeed307b94538da1518df37150ac6a732c2d1e5d9def58e7a35818b2cc809a756aa9c1a9a07a18217fe462937c45b357291c95c77d5c3ce40e6e3b9cd8ad9798839a9cbdc6939da53b4349118327084cfd3a6bec3b5801f6e8ab914db87a7215d53056e0df8ec5dcb36780c9f2918de0f70f7288b5391a010000",
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
      "Tue, 11 May 2021 00:38:54 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-51-1620693471142",
    },
  })
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
      "2bc87b6d1242202491a2354a691b29211b9056d33421632ed42dc10c9b4e5995ffbe8b69ba5695da276cdf73ee39f78327f2c0cb94cc48c2f3df0dd4872ff72221670414cdf1d53e34cda148ef587e75bb05fb90944cfccde77344f09625e9be2aa02745533390b35dd8cf6bd154b416a287897aceb0371c5be6783ab2dde1d0b69027a1c8d6bc7c40f69d52959c0d0627ed7e2e445e00adb8ec33b17f791f3c5a83aa16f7c0941cbc951ca08a1c7c2cfab5108c2a2ecaf92e44038d843a863de5055af8cf4c93f3b7a9fb9ceefb39821f3903ca98684ad5dac2144c9419cf9b5a6725b327a26dbe3a90d05b7bcbc860a268f6655cd23d9c1929553456870a8ccb60bb3156fee536d82ca2d5d68fc3e5b5b759f497dbf56ee387c6edb5177886a249019a6bcc8d737df3f182fa2948c54bad1eb5cfadf2738356efc7d212505a42178c5d734c8713739a6489cbb2c9c8493213926492b80e1d25269bda60a70950e46951cda2a528199b9863cb72e334a54e6cb371124fa7ae1d5be0b2b139724c6665e47846fed45cc105979590bceb10b90d56911747c1ce5f2e224f9790d1a650179db1b680d71e151688a00f6a3ab6512e50a96df7ca8fbc60b18c56375e37e135e4941dc2df38e38c1612104d6b6c9e827a23526c18f1171bef02c17a62df4e4149663f9f48dbf3d6c5ab96bfd0231c606b57e92f09a360e55f693b27c40d2d1a0d79ec0ea442cb77581bba3efe42242e6997857cdf79c10fd23d0590410d25fb7c9a08d6814fffb5d3e22316571f65a4c23bee0e93ad08aba1db21aecb7d663b237b643a44836bf52e66bbe353d7da1c6d46d843a99e2bea161f0bedc41af902c2208edfd7dd3afe0340e0950478040000",
    ],
    [
      "ETag",
      "4yuuyldhcgGWOe4ybncozg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-51-1620693471142"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d92414f83401085ffcb78a50928a54ad243d55a89b5d6423d684cb38501a9cb2eee2e9aa6e97f7716b51a35d10bcc0cdf2cef3dd8c0632932086159164f0daaf55e81e6da1633d40d379a6eb5141ac10134ac20d29b0affea422c47455cdfb86e216ef97956f4fb44e8f4012b06e106f21279a621bcdb806015d25a2a79538945db3960d6b51dc6c92c9a8ca8af6466fbc97c3c1e1c8f87b075768b19336cd1f2ff58bbdf3ab092cb19e6a850a468b5d44aae303591b5a9595573ec68d9a81435b470fba050b2a99992b243934ed7eb78c1be1b1c1df83dcff3f709e43265a69482d8794cfac048c3f84cbe904b0808506d4986f3f6fa4ce3326b8dd8329a2481dfeafb0a90b4bce4b8f81b24bd0f8c3ec307f61ec1778e55b21166479d8daf06bf1d47997e1e753a48863f086d28a91d924497c338195c4e2d77ffeefd786d504f95a42035da0c3dd73fecf602f72dd61369a3a6f7844635e840cae8ef382f0d8439e31ab7af786bb26d7b020000",
    ],
    [
      "ETag",
      "1Pn4OKnbGgSpV00gnZlHdg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-52-1620693471142",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8554fd6f9b3010fd5798f74b2be513f245a4a86329eb90529212d2aa9aa6c41843dd02a6d8b48aaafcef3b4cd336ebd64a4860df7bf7de9dcf3ca13b9685688c0216df97b4d87ebde5016a202a710cbba6358a2f66c3a1b1084dcb9996a7dd3cbf789c4c00c12a96c0699ed0a6e06541a818af96adb8e0658e0bce9b90a8d9d79bdd81de1998466fd8edf674e0099a443396dd01fb46ca5c8cdbedbd762be63c4e28ce9968119ebeecb71ff4765ef05b4aa4681f4ab64145b43f163d4938c192f16cb25a828152d0624d53cc12b0f0ca0c836f87a95b0ca7ad18c00f8c504c082f3359d982148467118bcb426545e327a46cbef9404b7b664f7d6d3a5fb9fed106a7157973ac61a1add7051565221bda066a8a5842d72cdcd491fc4efbe1cdcf21020e6eb0a062a35dfdb43d5b7bddda685f26da8966b9a7da6106c7d556ae6b2f7dede8e4583bf3e6ab85f6fdfa0003d6432a24cb94711f0709ad4c3ff7d6797fa215014b50ad83eb616780bba38e1944c1904423a31f441d1a04a360d8c746d021668ff6c28062e0c92abb62e18c67411086d8340273149a7dd23146513f0c07a111623a0c71a8539dd0809826da35d063c1243d6522e782d50d46579ee3db6bdf5bb953cbb755191186269ed6e6aa22defa945024803ea86b57451907a5eab41cd7b73d6bea3b97763d20331a63b25ddec38844381114d0b8c02995b438e721340d2de64bc777e6ae3503863af5c51e21d0f8d7d32bc1dfe6aacb52bdd1d2f71cf74c19d8232e71522ac843fd81ac1cbca2ddaef1ff3496e759d7208d8b026fff8a4139835e45ff8784c2ab556d732fd94595da7ea5a3ddef1d3c0d0417aace8e2e56b6778dea2d8f46b4a019f97c7c00ac029ffe17f69714b0704d41464858c3b01251899082d643cb5265b766f78d7e5737910217f25dcce88df6a753e5a832d29466f2b9a2fa92aa4655a152bc802008b3e6aa83dafd01b3ce7f4624050000",
    ],
    [
      "ETag",
      "9A8gQL773Pd9AICuD1ppQw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-52-1620693471142"
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
      "ff8d90514fc2301485ffcbf5d12d7163822ee141cc8204823a2431318494713707db6e693b0921fbefde566378f4a5bd39e7dce63b3dc3be6cb610c3a62c0e2daad35581e6d50e29eab6329a2f498d46f0008d2838d94ea7744c0ef2799f0ed4b8c6eb1e8ddf8be190133afbc45a407c86bcc46aab21fe3843236ae4b5f55ab91739664ed22a93f95b324e52166ada5a61be9ccd1e46b3043aef624deeffb5b2ea3cd8d126c51c1536195a0aa968879999d8825ad4b2425f53ab32d4e0c2ce2814b55228229f15ff36f4837e78d3bfef45832088420e5694095352c3d9e582d9c09011554a47ee0736a0dcc85573777eb11cb90e760a1cdaa517fe79a1f556bf0f8e4e06f58b22a6d368c1a2bbc10fe6235974c3958c6ad1834cf03f3f9506e25c541abb6f78bab72ac5010000",
    ],
    [
      "ETag",
      "uKKowEqpOkR7rGme+3oGXg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxMzYsImlhdCI6MTYyMDY5MzUzNn0.X284ajaIolPzdhn_YLK1W-ySU5qh7sD_zvxGTDERaTw848btTvWyCc8dtRiPcbvSz6ePbLx9K8fWGv27WAmfrm6FJYst9Ke6e76MZ_TVEFxpiH74SzZLJ3M_9t9mqhW1WwPky-MgbNbnGqAWIhN78t8N1Sq0AGs-GgqhDk6m-hqwCB492WqlXVofq6SQKo0ZqWU1tww1XsxIHnjK4MthCZhJi1jMkaWzkMLgcKe8C18pskSGOm2np8_3Jq5LZ7nwX7Hrn7HKbvJXhsm8jCMsue0EeCZ1p_Rs5JjGJRcJRbyzq0ixzuDw8faKFkQtExJYEBjFOct6jIdgIyNSzJ-wAg"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d0dd4e83301800d077e9f5b6e08651bc1b13e52790d63170bb21503fa01628940ee88cefeee2239cf383724a611c33253874e805e97c6b6de826e89fedaca28177f1f2639d4a5893c60522d70f9c4dcd60f0f4baa44ed1fbdfee938889608e9bc3b5d2b649dbda7f15f01191e534739e18860a2dc9059e5d3d86d3ed1a7fb268d65e56769aecdba1e85cd5e2646b46dd3131fd9642119e2b2f6816e5ef13476fab7370da0b3c95cc6ef5b9347c270b7b184815bcc96ac6356bf1419dbc746203af636ce2b57bf08bd0de3141d460e1774c895997fde56b3406b442b0f44cc298b13b77f768592bf46fcf94eee11e60432e41a2df3facd10b761a010000",
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
      "Tue, 11 May 2021 00:38:56 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-53-1620693471142",
    },
  })
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
      "7b6d4208848448d11aa5748d96900d48ab699a90712ed42dc1149b6e5d95ffbe8b69ba5695da276cdf73ee39f7834772cbcb1d999294e7770dd40f9f6e444a4e08289ae3ebdf6663a577b607ee158dbf9a7f2e069b75389fcd10c15b96a4fbaa809e144dcd404eb7513faf4553d15a881e26ea8dec9ee50e07ae673b63cb7286c89350642b5ede22fb5aa94a4e4df3a8ddcf85c80ba015977d26f6cfefe6fdd0ac6a71034c49f3b5a4892ad27c5ff4732118555c94b36d84061a0975027bca0bb4f09fb94b4f5fa7ee73baefe708bee70c2863a229556b0b533051663c6f6a9d954c1f89b6f9e240227fe52f628389a2d9974949f77062eca8a2897aa8c0380f376b63199c6fc2f53c5e6e82245a5cf8eb797fb1596dd741645c5df8a16f289a16a0b9c6cc38d5b7002fa8bf03a978a9d5e3f6b9557e6ad0f2ed585a024a4be882c978e0526b32f0d22c1db36c628fd26c00693a49c7236aa703e639e0ec52a0c8d3a29a454b5182c71cdbf59c64e7795982479a506076e25acca2e381ed5a238b1c4ec8ef9a2b38e3b21292771d2257e132f69338dc068b79eceb1232da14eaac33d616f0d2a3c20211f44e4d8736ca052ab5ed5e06b11fce17f1f2d2ef26bc829cb287e80e679cd14202a2698dcd5350afc50e1b4682f9da3f43b09ed8b7635092e9cf47d2f6bc75f1a2e5cff41807d8da55fa4ba2385c065fb49d23e292168d86dc770752a1e56bac0d5d1f7e211297b4cb42be6ffdf007e99e42c8a086927d3c4d04ebc087ffda71f1118bab8f3252e11d7787c95684d5d0ed10d7e53eb147b6eb782ed1e05abd89b943f7d8b536479b11f650aaa7",
      "8abac5c7423bb1463e833088e30f74b70eff00b4f6a1d278040000",
    ],
    [
      "ETag",
      "zuO1bq39e6WaTK/xH0OMRA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-53-1620693471142"
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
      "5b",
      "4f",
      "83",
      "40",
      "10",
      "85",
      "ff",
      "cb",
      "f8",
      "4a63af5449fa406d6d31f44e13a331cd1686961658dc5d34a4e97f77166b356aa22f30337cb39c73e000fb280dc08275b479ce5114171b54335dcc51e6b19274cb782a110c40c53644ba77ce7db11f74870fbdd665d61834cc6236b13b1d22a4bfc58481758030c23890603d1e206509d29acfe33c49576567802a323d5c7873673ca03ee181eec74bd7b5bb6e1f8ec67931608aad4afe1f6b4f4703767c3dc71005a63e6a2d99e03bf495a36d4a9664315624cf858f124ab87cb0113ccf98e0bc42934aab51a999f5aa79dd68b66bb5669dc098fb4c453c2576b9207da0b862f19cbf924b300910654986c3f2fa42e328288de8d2197b66b3d4f71520696114e3ea6f90f46e197d860fec14c1778e253c4fd599ba7527f66fc751a69f47f56cafff83908a923a239e33ea2f3c7b34d5dcd3c97bb75028a7825390127586b56af3aad536abefb1de701d35bdc7522247037c467fc7305260852c96787c03c890605c7b020000",
    ],
    [
      "ETag",
      "LJIXykGBHZD5/p3G36yQOA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-54-1620693471142",
    },
  })
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
      "7d",
      "6f",
      "9a",
      "40",
      "18",
      "ff",
      "2a",
      "ec",
      "f64f9bf882888826a673ca3a128b2d629b6659f4c0835e458ede1ded5ce377dfc351dbba6e6d6222dcf37b7b9ebbe311ad69b6427d14d2e4ae207cfbf99685a88688c409acc638edfe92d9a9edafc7b6fdfb21748acb6f1783012068c9127893a7a42e58c12322faf35923e1acc83167ac0e42f58e596f59866ef5da66b7d5320de00992c6139aad817d23652efacde6debb913096a404e7543422b6795e6fde1bcd9cb35b1249d13cb46c828b68be6f7a92b2084bcab2c17c06010a41f8826c304d21c20b73157e39946e50bc692400bea711c151c48a4c96b1402262594c93822b55d47f442ae6ab07347326ce28d046d3b9171c2df1a6242f8f352cb4c5821351a4b2a62da1a798a6644157cbaa92afb56ffef40c2a90e0060b2296dad577c777b497a5a5f669a09d68436fac1d2ab89e36f73c6716684727c7daa93f9d9f6b5faf0f30107d4584a4990a1ee0302565e8a7d9ba6f77b4246009ae5571d1d52ddcb2f55e1887dd28b6db9d30d64918da61b783dba11ef54c62ae428281274b75c5c219cbda84985dd3c6a11d770d1d045696dec3a0665ba16d5b4668b730b1230bed6ae8815349c654e44cd06ac0e8ca77036711f8736f340c1cd5468c6188e32a5cd9c4eb9c129a04d03b7dedca2a65e054ee96eb058e3f1c05eea5531d90094970b49dddc111812b2008a031c71b22093f632b181a3a9fcedcc09d7ac30930d4ae9fef1102f57f3cbe10826daea62cd53f9a05beeb9daa007bc4254e0b05b9af1e10ce212bdaed6aff9719fafef01aac31e778fb570ddab1cc92fe0f0b85576f55ccbd650b956efb3703ed7eeee0574370a12a75743177fc6b542df92426",
      "9c64d1c7c707c0aaf0e177617f49010bd7146c84847738ac91284d224eaa434b372a6ec5eeb46dbd652105e6f24dcd30ccfdee941aa522d9904c3e75545d5235a8b25488671014e1ac796aa3767f00c375e9bd24050000",
    ],
    [
      "ETag",
      "fal7xtnG8RkD88zwbEuVFQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-54-1620693471142"
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
      "8d90414fc2401085ffcb786d138ba560130e60aa9210a215f4600859da69296c3b65778b2184ffeeec6a0c472fbb9bf7be99bcb767d8574d0e316caaf2d0a13add94685eed2345dd49a3f96aa9d1081ea01125937974588c071f320ab6a95a103dbe4f87f3f168c484ceb6580b88cf505428730df1e7191a51238fadd7ca6d64cc9c5aab4ce78be4294959a829b7c27c399b8d27b3042eded558bbffd7c8eae2c18e362916a8b0c9d0a66815ed3033535b508bba95e86bea54861a1cec8c5251d70a45e4b3e2f7433f887ab7d1fd5d380882b0c7a0a44c988a1a66976f9c0d0c192153fae27e6001e59e5cb570e791e5beeb7074808d76ed457f5e60bdd5efc2c9c9a07e51c4e934da60e170f013f3816c74c3958cead0834cf03f3f5706e242488d976f031a00cfc5010000",
    ],
    [
      "ETag",
      "d6qTA7Wl61hRrTooFVI8NA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxMzksImlhdCI6MTYyMDY5MzUzOX0.emHD--MP2aa7lvrBKHX2PCaCxZanouRskq3ZnvjnLtjBQQb8sjZ1c0Zv7M2nTNMZvmewzOopr58flwbqtg0C-EXrZJS5JGOilqEa3Ul5tOM3DGDEUP4cVG9YHw6C-gFrDPqluRq05JyxWqofKcmHG3Z_9KTSdsmePpEaLVHmqFOziMt-QHZSfA7wmiNo2RXEv6fdqT4LwFS1ol37vw-KkRlGjQbZ7llRdw-r-Ixs92IFH3vfV6edcvN8EJIGbtsWuJY2b3aSbTP3jNwI1ZmDT0tM_FoFOv40bE_p3xMmaA7iEmi9-B0zmAcTK7JXrm0mW4nUggLBMuGoVrLYVI6Kvw"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff1dd04b7282300000d0bb646d1d0151e88ef037404514473699c0c408a840402338bd7b9d1ee1bd37204541fb1e0f4d4defe01b8c44d6e7c51cb51ac4ec2c46515c90de7527fea2447b441d157a328a84a995417aa536b5bdb87bf295596e3ac5cad23e3c127b99a7e86495bb6673c36b3f1c79009f5e164c538a366717963b031ffd4bea594f0cb76bb86461c50dee609ae52abb8d9294d8dd31e2dab0ba2cbe5c6664f1cd1acca45a79b163f26bd4422e9a2d95dac24d36b2f2e31c86fbca1ca45caf04911b6486d73e6253f04218c5a8f2a574411e7bdb33f7359801fa6a4b4e7b5c7eb88aaaeb33f06fc7c3d8d24f00a484530e7eff00ccd2e9521a010000",
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
      "Tue, 11 May 2021 00:38:59 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-55-1620693471142",
    },
  })
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
      "535d6fda3014fd2b91f75a2010420009ad88a62b2b842e8476d334458e7393ba0d711a3b6cace2bfefc6295dab4aed536cdf73ee39f7238fe49ee731199388a70f1594fb4f7722222704144df1f5f262b4daedcbafc5e5d97470fde72afffbbd67a793092278cd92745b64d092a22a19c8f166dd4e4b5115b414a285895ab6ddea0e7ae66064f59d6eb7df439e842c59f0fc1ed9b74a1572dce91cb5dba9106906b4e0b2cdc4f6f9bdb3eb758a52dc0153b2f35ab2832ab2f3bee8e74c30aab8c8279b351aa82494216c29cfd0c27f661c9dbe4edde674db4e11bce30c2863a2ca556d0b533091273cad4a9d958c1f89b6f9e240d6eec29d05061359b5cdc39c6ee1c488a9a2a1da17609cfbaba531f7ce57fe721acc575eb89e5db8cb697bb65a6c96dedab8b9707dd75034ca40738d8971aa6f1e5e503f06a978aed583fab9567e6ad0fced586a024a4b6882a1630e6877688ea224725832b4ec2831218a869163532b32d9a80ffd38028a3c2daa593417b9e538d1c0a6716846110bfb89350a4731ed8760c7032701c74acc3e399c90df255770c66521246f3a446efc79e08681bff166d3c0d52524b4cad45963ac2ee0a547850522e89d9a0e75940b54aadb3df702d79fce82f9b5db4c78012965fbf503ce38a1990444d3129ba7a05c8a181b46bce9d23d43b09ed8d53128c9f8e723a97b5ebb78d1f2677a8003aced2afd25ebc09f7b5fb49d23e29a669586ec9a0329d0f22dd686ae0fbf10894bda6421df36aeff83344f3e245042ce3e9e268275e0c37fedb8f888c5d54719a9f08ebbc3642dc24a687688eb729fd8b635b24cfda72a5aaa37317bd83d76adce5167842de4eaa9a266f1b1d046ac92cf200ce2f83dddadc33f67b34d1378040000",
    ],
    [
      "ETag",
      "KH9OvyrJpKDA6VxPnzX25g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:38:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-55-1620693471142"
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
      "d1",
      "4e",
      "c2",
      "40",
      "10",
      "45",
      "ff",
      "65",
      "7c6d2320146cc24351c426805a4aa231842ced148adb6edddd8a84f0efce5644a326fad2ce4ccf6cefbded0e9ed23c061716e9f2b944b93d59a2be334580aae45ad1ad10b942b000355b1289e3a048f9a273ef646dfdd01ee857df3bdd74bb44a8688519037707498a3c56e03eee206719d25a247899e5f3aab3406f0b339c84813f1e509f89d8f4e3e970e8f5867dd85bc7c5986936aff87faccdf616acc522c00425e6111a2d85146b8cb46f6c2a96151c6d254a19a1820aae1e2ca5280b2685b06962b75a76dd69d49cf3b366bb5e6f3608e422623a1539b1d309e9032d34e381d8904b70089055498693eafa42e334ae8c98d21f874eb3d2f715206949ca71fe37487a578c3ec3077688e03bc73251e6fa485d0d6fbcdf8ea34c3f8fbaf4c2fe0f42694aea8884fea83f09bdd1ade16607efbdad46752b0505a9d06458af353badb6537b8ff54298a8e93dae96255a1031fa3bae530d6ec2b8c2fd1bd93ce3bc7b020000",
    ],
    [
      "ETag",
      "eNRpilb8X6m7tY7GtxIA/w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `date` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-56-1620693471142",
    },
  })
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
      "fd6f9b3010fd5798f74b2be503022469a4a84b13d631a5a423a455354d898123750b38b54dbbaacaffbe039a7eac5b2b21817defbd7b773ef340ae591e930109d9faa60071fff98a87a44140d135eeeabde9e94ce4bfbf5b922fbaae95b3a319bd1b0e11c14a96a4d92685a6e48588400e16f3d65af0624305e74d146adadda6d1ede8dd03d3ea1986d5419e843499b2fc1ad9974a6de4a0dddee56ead395fa740374cb6229e3dedb76f3bed8de0571029d97e9db28d5964fbfda487298fa8623c1f2ee668a0902096905196a28567661c7e792ddd62346bad117ccb22a051c48b5c95b65022e279c2d685a854c9e08154365f7c90b93375c681369e2dbc606f45b392bcdad7a8d4964b01b24855435b614d094b61c9e2551dd95c6b5ffdd90946d0c125952057daf937c777346d1553052bedd3503bd446de447bcd763d6de179ce3cd0f60ef7b5637fb638d58e2e5e61d0760c52b1bc321dd03085d2f0635fddb7a75912a842137570d9d3bbd4e8eb076112f6a2a46fda61a24318f6c39e4dcd508f0e2cb0e21028f254a95eb168cef34edfb6e3c4367b0710eb269886191a76a8c7bd2806cb8a0c33818e4e6d836c1be44e30051326375cb2bab9e4dc77036719f80b6f3c0a9caa8c84620327b5b9b288973e151689a077eada9651c631537952ae1738fe681cb8674e3d1c5358d3e87e7e83e391d05402a2a9a0192810273cc6a691d3d9dc0ddc99379a22a33af1d31d4292c1cf87674270bfa9baacaa379994056c5f089ed1b4a800b7f507e9e81dbda9779a864db6dbc6ff9546be3fbac0ec54087aff570c2bea5a25fd1f792a7cb5aa9deef296cd7fe1826c7f6df16910bc4fb53af9b170fc0b526ff99080803cfa7882105c053efc2decee2862f196621aa9708df31ac9324924a09e5b9655766bb66de9b669910a2cd49b58b7d7df1d50a9512a4206b97aaca8bea355a3ca50219f4018c471f35cef18a37f00cf48845223050000",
    ],
    [
      "ETag",
      "07LPOrnxJ4soU6I4niBOaw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-56-1620693471142"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d90414fc2401085ffcb786d135a2962130e808d903444aa5c34842ccbb416da4edddd4290f0df9d5d3d78f0e06577f2e69bc97b738143d9ec20866d597c74a8ce37059aa52d32d45d65347f2d351ac10334a260329dcad3eb308cb66538cbf54336c64fd55b8e464c68f98eb580f8027989d54e43fc768146d4c8639b8d721b1933e7d62af3c54bf298642cd4b4b3c26295a6e3499ac0d5fb35d61efe35b2be7ab0a76d86392a6c245a17ada23d4a33b701b5a8db0a7d4d9d92a8c1c1ae5128ea5aa1887c56fc68e00783b037b8bfeddf05413f64b022294c490db3ab67f606868ca8323a713eb080722547cddd7b643972198e0eb0d6feee05b6b7fe5938391bd44f8ad89d466bac3fec7ddb9c92b56e3892511d7a2005df79561a88735169bc7e01f53e13f3c5010000",
    ],
    [
      "ETag",
      "LCcwZ825bi2HfsDRAezr0Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxNDEsImlhdCI6MTYyMDY5MzU0MX0.GSovPhfhG4xv_LYUz75CIarHizwVcdjBPvsKVl4yXc7i3LTmZMyDet2UCxo4QJFB2s_9mMi0o9iPdkajlunq_nMqDvuxCBZQpHhA2eIJoLy6oxQYUlxzcZ2fBK09dY_a7f9D0oKR4tXKcrHFhyRsqJcpCpDzQpxVfOpFUyQ3HFm1943rS38wwaTjD3EtVAfkskmngXXCIMEBtcVdTXPtUUYZcG35iJvI1FInat9yMcIV7uL8wlKvKuSpKObgoGZGqHeKl04YdilYBKMM7_49S8cbhMGOiCG2R5UNbA0FERLlogCBZrp8uIKmCZUZER5rbINPC5JC9q8QbGc8YMN4LQ"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff1dd0cb7282301400d07fc95a1c2a0a4d7722140858417cc126037879d4409880a074faef75fa09e7fca024cba0eb68cf6fd0a00ff44c16789ecdddf65da745262fd7ae30e4a266a55d415e24da747313eb0a74545c4664c38138dd1d3b65bde88375e1b03a8a89cf53deeacd7456e571b4e152fbb98a1bcf55232a555a7dd7f54dc0bf398d2a7b10bb3d6f06123fba2cdc772c328d0d232be1edf0049f8135c45e449e1793918730b4ca22a671cd7dffb85145589fb68b900754ca4ad9549c06a787f4dc7c0da37d3a7816c07d28dd5053d96d29bdf9db167bf74342d00cc1a3ad0474b47a719515c633f46fa7fdb38557800e8900817eff008026c3a01a010000",
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
      "Tue, 11 May 2021 00:39:01 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-57-1620693471142",
    },
  })
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
      "ff85536b6f9b3014fd2bc8fbda249010f290a2354be91629212d21adba6942c65ca85bc0149b6c5595ffbe8b69ba7693da4fd8bee7dc73ee832772cf8b984c49c4d3871aaac74f7722222704144df175187fff12ffbec947d1fefed6712e0239c9f9e56c8608deb024cdcb0c3a52d4150339dd6dbb6925ea9256427430516738ea584edf7426037b6459761f7912b264c58b7b64df2a55ca69af77d4eea642a419d092cb2e13f9cb7b6fdfef9595b803a664efad640f5564ef7dd1cf9960547151cc765b34504ba842c829cfd0c25f661c9dbe4ddde534efa608de730694315117aab185299828129ed695ce4aa64f44db7c75205b77e52e028389acce8bb0a0399c18315534548f2518e7fe666d2cbdf38dbf9e07cb8d176e17dfdcf5bcbbd8ac766b6f6b5c7f737dd75034ca40738d9971aa6f1e5e503f06a978a1d583e6b9517e6ed0f2ffb134049496d006c391e9506b6c4ea2241ab1643c1846890951348e46433a884c36b1c18e23a0c8d3a29a450b5158fd241a3bc9388438ee87b695c4e1c4499c70608d618c296cdb66e470427e555cc11997a590bced10b9f697811b06fece5bcc03579790d03a5367adb1a680d71e151688a0776a3a34512e50a969f7d20b5c7fbe0896576e3be115a4943d6e1f70c609cd24209a56d83c05d55ac4d830e2cdd7ee1982f5c42e8e4149a63f9e48d3f3c6c5ab96bfd0031c606357e92fd906fed2fbaaed1c115734ab3564df1e4889966fb136747df889485cd2360bb9dcb9fe0d699f7c48a082827d3c4d04ebc087ffda71f1118bab8f3252e11d7787c9468455d0ee10d7e53eb387b6351a9944832bf56fac6f9af6b16b4d8e2623e450a8e78adac5c7425bb15abe803088e3f774b70e7f0099eea60c78040000",
    ],
    [
      "ETag",
      "5dZBdxYm7bvkh66PTs9miQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-57-1620693471142"
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
      "41",
      "4f",
      "83",
      "40",
      "10",
      "85",
      "ffcb78a549a9942a490f6d6d9558ab029e8c69b630200a0cdd5dd4a6e97f7716b51a35d10bcc0cdf2cef3dd8c2635e25e0c12acfd60dcacd4186fada1401aaa6d08a6f35550ac102d422637221f3a69ad1cb6a16ae27e7be7c0cf4532f1b0e9950f13d9602bc2da439168902ef760b952891d7622a9ab25ab69d057a539b611805fee294fb9212d32f6ee6f3d1783e859db55f4c8416cb96ffc7daddce82075a0598a2c42a46a3a596f480b1f68d4d25cabac08ea246c6a8a085db0799a4a61692a8c3934e7fd0b1dd5ed73d3e7406b6edf4182c28163aa78ad99b90f581262d8a809ed925b80cc8b664c3697b7de2719eb4464ce92f22d769f57d05585a9a17b8fc1b64bdf7823fc307f61ec1774e94d4547a4fcde697a3df8ee34c3f8f3a1945d31f84d29cd41e89fc8b69188d2eae0c77f7ee7dbcd1a8ae2471900a4d8676d739ea0fdcee5bac133251f37b3c2d1bb42016fc779ce51abc54140a77af6178df457b020000",
    ],
    [
      "ETag",
      "NriunFoxbFSqCKIrkRtv2g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `stamp` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-58-1620693471142",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8554fd4fdb3010fd5732ef17d0fa91cf36ad8458818c65a229a42908a6a9b513a778a471b01d5085fabfef9250beb6811429a9df7b77efce777d40372c4fd01011b6bc2da9587ffecd096a21aaf0124e71665dd9e3eb2ff7ebd9c1d1682dee2ef21fc5d9de1e3058a592785564b42d7929622a87b3696729785960c1791b02b51db76df44cbd37b0ecbe61d826e824cdd21396df80fa5aa9420ebbdd6deece92f3654671c16427e6aba7f3ee9dd92d04ff4d6325bbaf5376218becbe9f743fe331568ce77bb3291828251573bac22c030bcfca847c7d1dbac3f0aab304f21d8b298e635ee6aab20521629ea76c598a3a2a1a3ea0dae68b0f34f54ebcc3483b9ccc82686781579578b1ab61a9cde782ca32532d6d0135a52ca373962c1aa4b8d1be85933120e0e01a4b2a17dac5772ff4346d2115b85b689ff6b47d6d141c69afe57ea0cd82c09b46dacefeae761c4e66a7dac1e52b0ef84ea8542caf5d479864b472fcd858ffefebac0458818b069cf7f51e365c7d4052d28f53d77248aa53425cd277b045f47860533b2114834e55d16b15ce799e24b6e1f4077d030f6c37c1aed5230383d8bae33a964b2c622606e9a70e469b16ba174cd123260b2e59d35d7411fa91378fc25970388abcba8c1443078f1a7355112f7d2a281248efd4b5a950c6215375557e1079e1e830f2cfbd663a4ee812c7ebe92dcc478a3349818d055e5145c59827d034743a99fa913f094627a0a8affc74cb9068f8f3e15910ad8bbacbaa7ea3c81fc31d8dc6a7b5872de91c6765cdba6b3e90a99b7a5b37db861319e6d0b08686ddd175fd0a6d36adff071f85e1e8120c6121f0fa0d0645f6ec4afe8fac35bffed598dfba305095edc913dafcdac0d342b0634d747436f3c24bd41c8534a582e6f1c74305e41af8f0af62bbb7c085cd8534b0038ac108c7b24a120bda8c325bd5761bb5639b0377806ab2506f31cb34dced9d5531aa88744573f55851b3b775a32aa8944f24006102033f3806f40f2615d02437050000",
    ],
    [
      "ETag",
      "al3Z4Mh+wyUBDAyrvWnJpQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-58-1620693471142"
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
      "6f",
      "c2",
      "30",
      "0c",
      "85",
      "ff",
      "8b",
      "776d25ca80b14a1cd6090da40a8d0e0e684228b46e5748eb2c494108f1dfe7643becb0c32e89f5fcd97acf5738d66d0131ecebeab3437db9abd02e5d91a1e9a435fc296a0d42006845c5643493c71e259d4a8bcd797868f38456d5723261c2e41fd80888af50d6280b03f1fb155ad1208fed76da6f64cc5e9453e68bd5f4659ab1d050e184c53a4d9f92740ab7e0d7983afe6b647b0be040fb0c4bd4d8e6e85c284d07cceddc0534a2511243439dced180877da3d2d429a1894256c2e1388c46fddee8f17ef01045833e839272616b6a995dbfb137b06485cce8ccf9c001da971cb5f4ef89e5a1cf70f280b3f6772f72bdedcfc2e462d1bc6a6277069db1c1b8f76df3999c75cb91acee30805cf09d67b585b814d2e0ed0b4b3fbdacc5010000",
    ],
    [
      "ETag",
      "1Hlk0oBupLdYw5jncBoTgQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxNDQsImlhdCI6MTYyMDY5MzU0NH0.SeCe43I_zZtAdEh37I9R9jpthLfYhTcRO3OdloCEJipeqq2jzwrtq7Ql0ClSO_O_CFE_MMiuel0mDgXLB1ynpVMIdmAoeSEZMqu2kxIMxPf0fBU-kqUMAa0bpASSl9tdKUBh2IH6-Vw18w1xI73aYNBN9cs1ONEOLB13Af71vmSw4ogK4RdNkaKFxgfFDfmpaWST3-KrgL-M3HpnwW5Wd5NU62LxkeMngE7pFNPNAggGJeEpTBZD2r9Jq5zFanJM4G1p6HSn0wnb5qYuS3aYoJ-7G_tyvqVc0z8Jk9iMb-XCkeBUwn9Zi81cJF79lVZXNAj-M67LzUfPAXpr8mzxxQ"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "8e",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "74ad46be23b36b31480650918fca86f0a982105a68a58299bb8f9923bcf706595160c6524e1adc816f3065b2b12a560edda0f47e6b29727501b767786e7d645b5cfe5ac6e2ac7a886cb84ecc123afd358ae72ac207262e3bc7b583f022e344ce949c7873e7a6299d8a2941524773e18cbd28fd13596aa3f540793fef9ebd1295962b9ac3c63ed57c1d588a563c4618244746ba24845e1ca95e6bde9104cdf2e5485bbd44553094a166c6aa14d698c37567501c543edb133d7956d7e076d8ffb0576d995bd5233811a8391a13cf0c8b9ec002e017ad07ccd2fac35534c358807f7bca278a3f010867031ec0ef1f0d1af8f41a010000",
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
      "Tue, 11 May 2021 00:39:04 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-59-1620693471142",
    },
  })
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
      "85536b4fdb3014fd2b91f795b6699a3ea56a74258c6e6d3ad2b4689aa6c8766e82218d43ec3031d4ffbe1b873210127c8aed7bce3de73ef2486e451e93096122bdaba07cf87423193921a0698aaf83fecefeeb0cbea7bc9885dfc25deaf12f9dcbe91411a26629ba2f32682959951cd464bb69a7a5ac0a5a4ad9c244adfeb8d51d38f660dc7387ddaeeb204f41962c457e8bec6bad0b35e9748edaed54ca34035a08d5e672fffcdeb9773a45296f806bd5792dd94115d5795ff4732639d542e6d3ed060d540aca08f6546468e13f3366a7af53b705ddb75304df0b0e947359e5bab68529b8cc139156a5c94a268fc4d87c71201b6fe9cd438bcbacdae7514ef77062c554d3483f14609d07eb95b5f0cfd7c16a162ed67eb4995f78ab597bbe5e6e57fec6babaf002cfd2946560b8d6d43a35371f2fa81f83d22237ea61fd5c2b3f3568f1762c3501a51534c168680f6877648f59c2863c19f5fa2cb181b1111bf6698fd97cec821b33a0c833a286457399dbe31e63cc71a3811343e40eed7144398d23eeb83de8d9f19081430e27e44f29349c095548259a0e91ab60117a51186cfdf92cf44c0909ad327dd618ab0b78e9516381087aa7a6431d151295ea762ffcd00b66f370b1f39a092f21a5fc617387334e68a600d1b4c4e669285732c686117fb6f2ce106c26f6e3185464f2eb91d43daf5dbc68f9333dc401d676b5f9924d182cfcafc6ce11b1a3596520f7cd811468f91a6b43d787df88c4256db290cbad17fc24cd5300099490f38fa7896013f8f05f3b2e3e6271f5514669bce3ee70558bf0129a1d12a6dc2776df7547f6881870a9dfc4c643e7d8b53a479d11f690eba78a9ac5c7421bb14a3d833088e3f74db70eff00decfc01378040000",
    ],
    [
      "ETag",
      "65V0z26KgcpATJTVgEcB/Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-59-1620693471142"
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
      "401085df65bc2d096029d2848ba2a0908202c5f8134296765a8a6db7ee6e35407877672ba25113bd6967a6df6ccf39ed0e9ee22c001b9671f45ca0d89c44a8c6ba98a02c1225e996f34c2218808a45440e5a7230d8dec7ebde4374e74683616373bb1db7db44487f8529037b07618c4920c17edc41c652a4359f27459a2dcace00b5c9f570ea4dfaa34bea531ee87e34735da7e376616f1c1703a6d8a2e4ffb136df1bb0e6cb09862830f3516bc9055fa3affadaa664699e6045f242f828a184cb0791e045ce04e7159a541aad4acdaa57add6a9d9acd5cc3a8109f7998a7946ec6c4afa4071c592097f2597601120ca920c87e5f585c671501ad1657fe45966a9ef2b40d2c238c1c5df20e95d31fa0c1fd82182ef1c4b7991a923d573af9ddf8ea34c3f8fba70bcee0f422a4aea8878fd6177ea39c31bcdcd0fde3b1b85f246700a52a2ceb05635cf1a4dabfa1eeb39d751d37b6c250a34c067f4775cc50aec902512f76f76a0d9827b020000",
    ],
    [
      "ETag",
      "J9sJJzYijFZgXLgJM5yVzQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `amount` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-60-1620693471142",
    },
  })
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
      "3010fd5732ef1790fa95344dd34a152b25b06e258534e543d3d43ac9a518d2b8c40e5387fabfefe250a06303295262df7bf7de9dcf7924772c8d4897046c719f43b6fe7ccb03522120e902774f8cf5556e38f46a7c3b999cffbefc7ee8ca6ffd5e0f11ac6009ba5c2550153ccf4210dde9a4b6c878bea219e7554c54b51a55dd321a56a769b675dd3490272089472cbd43f68d942bd1add7b7dab505e78b04e88a895ac897cffbf507a3becaf82d8452d47725eba822eaef8b1e243ca492f1b4379da0815c4036832565095a786146c197ddd4354697b505821f5808340c799ecac216a608791ab3459ea9aca4fb4894cd571f64e28c9c81af0dc653d7df9bd365419eef6b5468b35906224f64459b634d314b60c6a2791959dd69c7def81423e8e0860a1073edf2abe3399ab6cda17dea69075adf3dd276f943579bbaae33f1b5bd837dedc41b4fcfb4c3eb1d0c1a8f4048962adb3e0d12282c3f7576f8f63c0b029568a30cceda0d8bea76a313c4413b8ced662b881b100476d06ed166d0083b269851001479b2c8ae5834e5a90596d5b03b6dd3d01b46dc02ab4569188596ad531b741d8228687522d3269b0af9953109474cacb860657bc9a537f49d99ef4ddd41df77541931c5161e95e68a225efb94582482dea96b53441947a5e2ac86aeef78fd813fbc70caf118c18286ebc93d0e484c130188a6195d8284ec9447d83472369e0cfde1d8ed8f90a1cefc6c8b10a4fbe3f185e0af57aacb52bdc9f168dcf72d5339d8422e68922bcc43f941f45a0b119bcaffd3f43daf7f8dd234cbe8faaf18966329fa3f14145ead4a9bcf8aa450dbae0cb2f9b9c1a742f03a95d9c9f9d4f1ae49b9e5410c19a4e1c7e3836015f8f0afb0bda288c54b8a3242e21a8735148548984139b46ca9ec96ec96d96aeb4da2c0997c13b3dbc6f6748a1c45",
      "4658422a9f2a2aafa86a5411cac5330883386beed03dc1e81fc8763d1422050000",
    ],
    [
      "ETag",
      "G2yXu2EaXOjSSQzWKBNtJA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-60-1620693471142"
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
      "02ff8d90414fc2401085ffcb78a44d5a203536e1400d2a09215225620c21cb32ad85b65377b79886f4bf3bbb7af0e0c1cbeee4cd3793f7e602a7a23e400cfb22ff68517557399a952d52d46d69347f0dd51ac10334226732596f5ed241d025ab7aa05ea3e551de6dd474326142cb77ac04c417c80a2c0f1ae2b70bd4a2421edbed94dbc898e91aabcc97cfb3fb59ca4245072b2cd78bc53459cca0f77e8d35a77f8d6c7b0f8eb44f314385b544eba251744469e636a0165553a2afa955123538d83572456d231491cf8a1f057e180d83e86634be0ec3f190c192a43005d5ccae9fd81b1832a24ce993f38105942b396ae6de33cb6397e1ec006bedef5e687bdb9f854967503f2a62771aadb1d130f8b6794bd6bae14846b5e881147ce787c2409c895263ff05686be091c5010000",
    ],
    [
      "ETag",
      "BUXWR+0yBQn+rY6NjcFXrA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxNDcsImlhdCI6MTYyMDY5MzU0N30.NtA18gXzY4TtIDfMU5JLjs-9uPFcodk6idFJHKynEvha4UyeBCRU3r6b38ExMGstHGoitU06c4VKxak3REc49Z3d3Ued8LKnDX_C3R2aIyRz0HAOBL1OSGzb_ibKr6IaGUcfP4p3kiAXbIV4QmSLZYSRYGOZ1SEsRNO41jf8TaZlIdI7M4MXq3xTIICbyJWwrAw24mluYAiWtyNM_3BfXZawYgaFPoBx7B1SjShmGcLvzuZGcMnoMP84-ZNABA5nGQVG90gMMzZmX7Soi6MITd68XeWT5gvPlxbcZfeUdxjU2K7QGN3HRZL8N-hbpBHjXw4Kv-I8tzXXntLx-L4iNQ"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "7282300000d0bb642d8ec8bfbb2a5611513e02854d26930405c680315083d3bbd7e911de7b0184317d3ca0e85acac0079068e9ccf1dcefed15bc54cdfec2eab37b0dd1c6d59c3549d54883723a9736b4dd663082c4926d51b5d55d2db64185310ea7bed87742277efee346fe2deed6d3549f9ef16774b009f36592ed8730c4c5e18a045f30452c75af2ddb74c8a083955898c12db446430da0d57931ba0aa50f54389cbcc1cc6eeab7e4b8e5b9c1f474348daf6c6bf5324bee393ec609d9705666233d9afa487772776ebccac577c114d52497a652162e0133409f7dcde903d66fae6638ce0cfcdba1903d7d07ac28e29483df3f3fd587761a010000",
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
      "Tue, 11 May 2021 00:39:07 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-61-1620693471142",
    },
  })
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
      "2bc8fbb8e64120218914ad514a57a4846c405a4dd3848cb950b704336c5a4555fefb2ea6e95a556a3f61fb9e73cfb90f9ec83d2f53322709cfff36501fbedc89849c115034c757c73d948f4535fb9a4ef8ca341fbd0375cbe5628108deb224dd5705f4a4686a0672be0bfb792d9a8ad642f430516f62f6ccc968389959b6639af60879128a6ccdcb7b64df2a55c9f96070d2eee742e405d08acb3e13fb97f7c1c36850d5e20e989283b792035491838f45bf158251c545b9d88568a09150c7b0a7bc400bff996972fe36759fd37d3f47f003674019134da95a5b98828932e37953ebac64fe44b4cd570712ba6b7715194c14cdbe8c4bba873323a58ac6ea508171196c3786e75f6e83cd32f2b67e1caeaedccdb2bfdaae771b3f346eaedcc035144d0ad05c63619ceb9b8f17d44f412a5e6af5a87d6e959f1be4bd1f4b4b4069095d307686136a4e87b3244b1c964dad71920d2149a68933a6563264331bec34018a3c2daa59b414a5699bd68ca5b3988e1327b69d59124f9d911d33188145279665a78c1ccfc863cd155c705909c9bb0e919bc08bdc380a76fe6a19b9ba848c3685bae88cb505bcf6a8b040047d50d3b18d72814a6dbb3d3f7283e52af2aedd6ec26bc8293b847f71c6192d24209ad6d83c05f546a4d830e22f37ee0582f5c47e9c8292cc7f3f91b6e7ad8b572d7fa14738c0d6aed25f124681e77fd7764e886b5a341af2d01d4885966fb136747dfc83485cd22e0bf9b973835fa47b0a20831a4af6f93411ac039ffe6ba7c5472cae3eca488577dc1d265b115643b7435c97fbcc1edb0e0e956870addec5a6e3f1a96b6d8e3623eca154cf15758b8f8576628d7c016110c7efeb6e1dff01f267244c78",
      "040000",
    ],
    [
      "ETag",
      "7Eynwlp9+d6iC11wIyaEnA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-61-1620693471142"
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
      "8d925b4fc2401085ffcbf86849286291263c949b3401e4521283316469a750dc76ebee564308ffddd98a68d4445fda99e937db734e7b80a7248bc08575b2792e50ee2f36a8a7a698a12ab85674cb45a6102c40cd3644eeee1b81d7acfacde99277d37e67d0bc5ceebc568b08156e3165e01e204e90470adc8703642c455a0b052fd26c557616e87d6e86f360e68f6fa94f4564faf16238f4dac31e1cadf362c4345b95fc3fd61e8f16ecc47a86314acc42345a722976186adfd8542ccd3956942864880a4ab87cb091a2c89914a242938a63576ca756759a57f5866dd76b047211329d888cd8c59cf481169af199782597e01020cb920cc7e5f585c649541a31a53f0e9c7aa9ef2b40d2e284e3ea6f90f46e197d860fec14c1778ea5a2c8f499ea0fefbcdf8ea34c3f8fea7a41ef07a134257546027fd49b07de6862b8c793f7f65ea39a4841412a3419dad5facd75c3a9bec7da11266a7a8fab658116848cfe8e41a2c18d1957787c032a819bcd7b020000",
    ],
    [
      "ETag",
      "jX7TA90I9QZlDmFCH9+ZjA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`id`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: "%15%" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-62-1620693471142",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffc5547f4fdb3010fd2a96270448fd414b296a25c40acdb6686ddaa529ac9a50e326d76048e2623b4815ea77dfd9a1b00ac6fe9c14293edfbbf79eef9c3cd17b9ec7b44b173c792840ae3fdd8905ad50d02cc1dd61205b32d347c745479ff64efbfeb0f8a97b676788e0a64ab16c954255894246a0bad3492d91a2583129441589aaed66b5d16e1eb53bc7add346a3d5c43a05e972c0f37bacbed57aa5baf5fa56bb960891a4c0565cd52291bdecd71f9bf5951477106955df95aca38aaa7f2c7a9e8a88692ef2b3e9040d140ae41c32c653b4f05a192f3eef52d738cb6a09821f79042c8a44916b630b2922912f795248cb4abb4fd4dafc634127cec0b90cc8e568ea050721cb4c7178489822f3b90455a4ba42423cd392a730e771586656f7e48b3f1a62061ddc32052a24d7df1cdf216430ba76fc8310a18764e07e77c839e9797db24be27a64ea79ce242007e787e4ab3f9a8ec9c56c0783ee63583234d0671a15b4711d974bd78c5483d2087aeeb7fb76ca7463b25c48aecd495d2f70fcde65e05e3965730790b0683d79c0f62e59aa00d14cb20c34c8a188014bc6a3891bb823af37c00adbb1f116a168f7d7d36b41b05e8131a8eddb68b55b567f0bb8626961118fe582ee354ef6e86653f93b49cff77b33146652b2f5fb02ef2a58bc8d4a935bc506356adba84937371b7c2a14af62c94e7f4c1d7f46cb2d1f9620218f2ce5074db6609bf8e717b5bdde88c50b8e324a63ac348f94118924d874c0336bb7ac3e69758e3b6d6ac152bfc9b51a47e62f90c7ef669e350acb0f520ae9db3b6d425453d60bcfb127f897a8d00c946289a199e67812056c9102b183272f7d266148784ecc204818ccc6cedc0e23ac900b166346b75bc436b94bcc8cb7eb7d13ec1b47d647399affe4e1a66c8b11e98f3c07efd16f9e286eb95f050000",
    ],
    [
      "ETag",
      "MTr4rmt03u9t7A7DRMuXtA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxNDksImlhdCI6MTYyMDY5MzU0OX0.IRb1vBfCbSmIr1sf0ekdZtJyTO2PmqnEbFpz9cIqYoZ8uo6cPnBi--zLitGgTjakMan7_SvHMlOUviILkeaqYbIXPw5QIZnIHvxcxIk50xGhG8j57BPim5bmJJGiuOUiG92QQw_fnLLCiDCTFhrPwTSmRSMlsC6wtetMtXYiKIXLoXkZauKfqQKSj3GS4ojPH91Fayf3UAp-KUc_QwH3zTPcvhvko-NVClPB26RQ9wHSKRMiN0W0ePPdO80ZRQz_woJYJxD2JP4Tuvsj3uvZb7-zZbSlHtW4v0SfMvB5_uRZZwY_3xMUWISiRMF4eYSv69r2iX5nIAIErK61LxgUOQ"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff1dd04b7282300000d0bb646d9c104a0add913a5aa6e5a30151364c088152141054084eef5ea74778ef01b8107218d26b5bcb06bc01c5b1b514cbcfcea4695964bc09dc6970b5dd6e9fe1a4d2d80cfd5744b2e1437769cd6bded74ef5a31c2f42f6ed1d39a638c7796ab4a7c62fa2833df3a321728484398d101352e10391ca830c26f748ee6f187aa225148dba166d3413bab11a4f85a6c26c537a897531f50c43b5dbb22ff3c05ef4761d180e4a6b5ef897209f274d24ab98d004767158d6743e92f12ea761730e598cede3b9bccf4dbeda8a06f5fa4caedf6b0616404e5dd5cb21ad9e5cddb0ac05f8b7a757d5c9670095bc973df8fd0345bd1fc61a010000",
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
      "Tue, 11 May 2021 00:39:09 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-63-1620693471142",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536b4fa34014fd2b64f6ab7dd3169a346bb7452569e92e508dbbd99061b8e02865901934c6f4bfef65b0aec6443f3133f79c7bce7df04cee789190198979765f43f5f4ed56c4e48480a219bed637dec272ef2ece7fafe8fdeac72e585dfbe6623e47046f5892eecb1c3a52d4150339db05ddac1275492b213a98a83319750693617f628fcce960600e9127214fd7bcb843f68d52a59cf57a47ed6e264496032db9ec32b17f7def3d0c7b65256e8129d97b2fd94315d9fb5cf47b2e18555c14f35d80066a0955047bca73b4f09f99c4a7ef537739dd7733043f700694315117aab185299828529ed595ce4a66cf44db7c732081b37696a1c1445eef8ba8a07b383112aa68a49e4a30cefcedc670bdb3adbf5984eed68b82e585b3597497dbf56ee305c6d585e33b86a2710e9a6bcc8d537df3f082fa0948c50bad1e36cf8df24b83dc8f636908282da10d46d3fe840eacbe1da7f194a5d6681ca77d88632b9e8ee928ee33db04338981224f8b6a162d44d18f139ac09045769aa69169411cd1d49a46236b60a7c33e50733c228713f25871052b2e4b2179db2172e5bba11385fece5b2e42479790d23a57abd65853c05b8f0a0b44d027351d9a2817a8d4b4dbf542c75f2c43f7d26927bc868cb2a7e01e679cd25c02a26985cd53506d44820d23de62e3ac10ac27f6f3189464f6e799343d6f5cbc69f92b3dc401367695fe9220f45def5cdb39222e695e6bc8437b20255abec1dad0f5e12f227149db2ce4d7cef1af49fbe4430a1514eceb69225807befcd78e8b8f585c7d94910aefb83b4c3622ac827687b82ef7853d36ed8965110daed4879835b68f5d6b723419610f857aa9a85d7c2cb415abe52b0883387e4f77ebf00ff96c5efb78040000",
    ],
    [
      "ETag",
      "uhNA8IkHGZDaqDBUSDYR4A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-63-1620693471142"
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
      "83401085df65bca5b13f4895a417546b6d825501af8c69b630200a0cee2e6d6ad3777716b51a35d11b9819be59ce39b085a7bc4ac085659e3d3728370719ea1b5304a89a422bbed55429040b508b8c490ad77a981ffaabf5cbd2de3c2f57c9d374ea8d464ca8f8014b01ee16d21c8b44817bb7854a94c86b31154d592ddace02bda9cd308c82d97cca7d4989e9e7b7beef8dfd09ecacfd6222b458b4fc3fd6ee77163cd232c0142556311a2db5a4478cf5ccd854a2ac0bec286a648c0a5ab87d90496a6a21893a3ce938834ecfe9779d93813decf5ec3e8305c542e754317b1bb23ed0a44511d09a5d82c3806c4b369cb6d7158ff3a43562cad93c72ec56df5780a5a579818bbf41d6fb20f8337c60ef117ce744494da5f7d4b97fe5fd761c67fa79d499174d7e104a73527b249a5d4ec2c8bbbc36dcfdbbf7f146a3ba96c4412a3419f6baf6f1d1d0e9bec57a4a266a7e8fab658316c482ff8e8b5c839b8a42e1ee152d2fd9a77b020000",
    ],
    [
      "ETag",
      "oSwt7i/Lvwzb4yqbvdkGGA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%app%" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-64-1620693471142",
    },
  })
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
      "02ff8554094fdb3014fe2b912724907aa6479a4a88953663192565690a42d3d43aae134cd338d80e5b85fadff7e250a06303a952e3bcef7897f388562c5da23e0a597c9f53b1f974c743544154e118de8a46d00979a87eafbedd3bcee9b91a39ae151f1f0382152c89d75942ab92e78250d99f4d6bb1e0798605e75510aa76dbd566d76c74ed56db6a36db26f0244da2314b57c0be552a93fd7a7de75d8b398f138a33266b84af9fdfd71fcc7a26f81d254ad6f72debe022ebef9b9e249c60c5787a3c9b4202b9a4624ed7982590c20b73197ede97ae31bcaec5007e60846242789eaa222d90203c8d589c0bad8afa8f48a7f9ea014d9db1330c8ce164e605870bbc2ec88b23034b633e1754e689aa180ba82962099db3e5a28c642be38b3fb9800864708b25950be3faabe33b86319e5c3bfee17300b4c6eeb9639c18036f64ec4bb99e31f33c671a18872747c6993f995d1aa7377b18a86149a562a9ae20c061428bec9f9aecbe1d6d41c00a8ccbe0dc6a7471b3d7b0c328b448d46b75c2a841c3b0175a1ddc0a1bc46ed3f632a41878aa50d72c9cf2d4ea2c23d2365bb68589bd0ccda869f74293364c6c53627561689d28c2a48bb615f44b3045474c665cb2b2d3e8da7703671ef8336f38081c5d4684a19ba332b9a288d7792a281240efd4b52da28c83533136d70b1c7f300cdc2ba7dc94318d31d94cef6157229c480a682cf09a2a2a2ef8129a862e2753377027de600c0c3dfecb1d42a2fe8fc71742b0c9749795fe47d3c077bd339dc00e7185935c431eca077480b3ec006db795ffcb0c7c7f7003d65808bcf92b06e574db05fd1f161aaf4f659a3bcb262adc7627136d7f6ee1574170b34a75f47de6f837a87ce5d3880a9a928fd707c03af0e10762775b010bf7156ca482332c2b91850911b45c5ab6d6e996ec4ea7619936d260a1dec47ab6bd9b4ea15128d2354dd55345e56dd58d2a42b97c06411076cdd383dafe013ce570232d050000",
    ],
    [
      "ETag",
      "r0T5bobtxkJqEEBKtDEI7g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-64-1620693471142"
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
      "4f",
      "c2401085ffcb78b44d2c54d0261cc010c51022558cd110b294692db49dba3b0591f0df9d5d8de1e86577f3de3793f7f6009bbc5a4104cb3cfb6850efcf32e4a97dc4689a828d5c355506c103649509b93b8fefbfd4eb4b5a7df2f3ecd2f4aff3d24c7b3d214cf28ea582e800698ec5ca40f476804a9528638b85761b05e37d6d95d1e469783b8c4528696585c96c3cee0fc643387a2763f5e65f23f3a3076b5ac698a2c62a419ba2d6b4c68447b6a051655da06fa8d1091a70b033324d4dad34912f8adf09fda0d3bae85cb7c36e10842d010b4a14e754093b7b946cc0c4aa886927fdc002da3da56aeaceadc86dd761eb001bedd46bfd7981f5e6bf0b077b46f3a049d219b4c1c2abee4fcc1bb2d1592ab16ed08344c93fdfe50c51aa0a83c76ffc47f32dc5010000",
    ],
    [
      "ETag",
      "w+RJzaZXfnxtVU5sA9imsQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxNTEsImlhdCI6MTYyMDY5MzU1MX0.CAl4N5-GARZ8_W4H3xWkksZssEOnU3y6j19DNsGBhLfPp38_cqgH2_tT_4nBi0yjgRDqaiiYQ8on8Wm8K9R_XznNnJj2JrQTsBG9SbHdCraCSxWBHIxdrl7_vhvgZHpFnRpvcWcYFvzjAKrQYxkxyXc72vIKDzmsYvkJgPqOYRtefSM30atSLAbG81-p7Oa2UVfy5433ADcrjjRey2bgqv2OGrNlCjrOiL4xOD9O2MRj_6DnsdXzKAbFW8mnv-dSvAU6tWwNBMlf9s5Bvok-32xE3L5sbsKrW_Gk4vcRHdQjABIvu9pOPf0k5Ex6x5gH71DEIzeZ313YBIHKJ-1znw"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "7282300000d0bb646d1c5023497732b6a912141005bbc984102902965ff9757af73a3dc27b3f4048a99a86b75f997a8017308a0599cbb95562932771ae16b2209677542b48287193268eedf0c0e11265d969bfbf6b21c310e1a983c3d8fad339fc369a6acd368c22af3c59b022ab7731f4fe63b2965dcc74e7c3899adec62dbde86b783b185e9ff8d79ce2e0ecadded8a848943347df6d0bdb16eb8bef1cb72228ee458c426de7b866abe15c048614bcbd5d93f2d3aea47fbd7b939b0635c7271a45a9d6d71b99f08119a246678af60bab17afd4a74530766006d450a6b56a78fae42e112133f06fe7ed58aa6780a944ad6af0fb0756f896f21a010000",
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
      "Tue, 11 May 2021 00:39:12 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-65-1620693471142",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85535d6fa24014fd2b64f6b52a280a9a98adb174cb46718bd8a6d96cc8305ee854642833b8691afffb5e86da6dd3a47d6266ee39f79cfbc133d9f1624b2624e1d9630dd5d3b707919033028a66f8ead50f5722b893fe234bef7fba7267ef06e6f5748a08deb024dd973974a4a82b0672b25977b34ad425ad84e860a2ce68d8b1467d73341ed88e65d97de449c8d3052f76c8be57aa94935eefa4ddcd84c872a025975d26f6afefbd43bf5756e2019892bdf7923d5491bdcf45bfe78251c54531ddacd1402da18a614f798e16fe33b7c9f9fbd45d4ef7dd0cc107ce803226ea4235b630051345cab3bad259c9e499689b6f0e64ed2dbc79643091d7fb222ee81ece8c2d5534564f251897e16a69f8c1e52a5cce227f15c4ebf995b79c75e7abc56619ac8ddb2b2ff40c45931c34d7981ae7fa16e005f5b720152fb47ad43c37ca2f0df23f8ea521a0b48436183be6885aae394ed2c461a93b1826a90949e226ce900e12938d6db0b70950e46951cda28528c072ad746c429c3a233bb6b7fd419cd87d88c70377e09894d9ee9092e319f95b7105175c9642f2b643e436f4232f8ec24d309f459e2e21a575ae2e5a634d016f3d2a2c10419fd4746ca25ca052d36e3f88bc70368ffc1baf9df00232ca9ed68f38e394e612104d2b6c9e826a29b6d83012cc96de0582f5c47e9d82924c7e3f93a6e78d8b372d7fa54738c0c6aed25fb28e423ff8a1ed9c103734af35e4d01e488996efb136747dfc83485cd2360bb9de78e11d699f4248a182827d3d4d04ebc097ffda69f1118bab8f3252e11d7787c9468455d0ee10d7e5beb087c3be653944832bf521d677c6a7ae35399a8cb08742bd54d42e3e16da8ad5f21584411c7fa0bb75fc07d9c3baa178040000",
    ],
    [
      "ETag",
      "EujHoNYsIqcfhJ8sk4k30Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-65-1620693471142"
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
      "92dd4e83401085df65bc94266da554497a41b55a12fa23d0c4c434cd16064a051677174dd3f4dd9dc55a8d9ae80d3bb37cb37bce813d3c65650c36acb3f4b946b13b4b51ddebc24759e74ad252f1522218808aa544665e1c06e759b898756b558c8ae40193713a181021a30d160cec3d2419e6b104fb710f252b90c6229ed745b96a3a03d4aed29b41e8bbd33bea0b1eeb7ebaf03c67e88de0609c0663a6d8aae1ff31b63c18b0e56b1f13145846a8b554826f3152aeb6295951e5d892bc16114a68e0e6452a785d31c1798b765a56afd5b1ba6debeac2ec773a6697c09c474c65bc247611903e505cb1dce7afe4122c02445392e1a479bee8a8e2c6882edd6968998dbeaf00494bb21c577f83a477c3e8337c60c708be73ace075a94ed4ad37737e3b8e32fd3ceac609473f08a928a91312ba9351103a93b9e69647efc39d4239179c8294a833ecb4cdcb5edf6abfc77acd75d4748fad448d06448cfe8e71a6c04e582ef1f006964233dc7b020000",
    ],
    [
      "ETag",
      "iLdTS+iTUO2utmEmfXefHg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%app%" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-66-1620693471142",
    },
  })
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
      "0d4f9b4018fe2be416134dfa056d6969625cad4cc92a75406bccb2b4c771d49bc02177681ad3ffbe97c3aa9d9b264dcaf13e1fefd7f184ee5816a1110ad9fabea4c5e6cb6f1ea206a212afe12de50c3f127d21ac457651fad9f9290b82f1f1312058c51238cd13da14bc2c0815a3b9df5a17bccc71c17913849aa6d9d44da3635addde40d77b06f0044de229cbee807d2b652e46edf6cebbb5e67c9d509c33d1223c7d79df7e30da79c17f5322457bdfb20d2ea2fdb1e949c209968c67c7731f1228052d9634c52c81145e9951f8755fbac570da5a03f881118a09e16526abb44082f02c66ebb250aa68f484549a6f1e906f4fed49a04d667337385ce1b422af8e342cb4e5b2a0a24c64435b414d314be89245ab3a92df69dfbcd9254420835b2ca85869d717b6676bda74766d7b872f01d09a3adf6ded441bbb67dabe94e36a73d7b5fd403b3c39d2cebdd9fc4a3bbdd9c3400d11159265aa82008709adb27f6eb2f37eb415014b30ae83cb41c7c4fab06385713820f1b0db0fe30e0dc36138e8e36ed821568ff6a29062e0c94a5db170c6b3413f8a49cfe85a034cac283462dd1a8606ed18d8a26460c2d0fa718c8989b60df4583049cf98c8b96075a7d1b5e704f632f0e6ee641cd8aa8c184337cfeae4aa22dee629a148007d50d7b68a320e4ed5d81c37b0bdf124701676bd2953bac664e3dfc3aec4381114d0b8c02995b4b8e411340d5dcd7c277066ee780a0c35feab1d42a0d1cfa75742b0c95597a5fa477ee039eeb94a608758e0a4549087fa011de03c3f40db6de3ff3263cf1bdf80352e0abcf92b06e598bd8afe0f0b8557a73acd9da58e2ab7ddc940db5f5bf83510dcac5a1dfd98dbde0daa5f7934a605cdc8e7eb036015f8f403b1bbad8085fb0a3642c219969588ca8414b45e5a96aa746b76bfdfd57b5da4c0857c17332c6b379d4aa352a429cde47345f56d558daa42a57801411076cd5583dafe",
      "019cf98ae92d050000",
    ],
    [
      "ETag",
      "eoiawc1Vs9VnHuSnGBiTTA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-66-1620693471142"
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
      "d1",
      "6bc23010c6ff97db6b0b56a563820fabb84d70323b65832112d36b576d7b5d92b638f17fdf258ee1e35e92cb77bf3bbe2f2738e4550223d8e5d95783ea7893a159da2246dd1446f35553a5113c40233226dfdb49f7b6c23294bbe84144df4dd776cfcbf198092d3fb114303a419a639168187d9ca01225f2d876abdc46c6ccb1b6ca6cb19a3e4e63164a4aacb058cfe7f7d17c0a67ef6aac3efc6b6473f6604fbb1853545849b42e6a457b946666036a51d605fa9a1a255183835d2353d4d44211f9acf861e80761bf17de0d86b74130ec3358901426a78ad9f52b7b0343461431759c0f2ca05cc9515377b62c0f5c86d601d6da75afffd70b6c6ff3bb303a1ad42f8ad89d466bac773139216bdc7020a31af4400afee5a7dc5cdee71f7538e4c2c2010000",
    ],
    [
      "ETag",
      "XvCwWTem6cbBFaBzuwvwMQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxNTMsImlhdCI6MTYyMDY5MzU1M30.BGCw5cb3upfGO0SzwMSyz3UuRHlcjazSfxIsrYs81sOwisffY-ayAxMZCSL_dmp20CDLD0QQZYiP48zRKmPFyZa7IdoFllLGvU_ELwIrhK9sgsYnAK8tn91ukoxYhqydjE6zwhMyOLWDemLmtB1hFjql9SQjxOj71SkyR82k-F3lCTmi2y6ddWT0yhD5yn9572Ebrw07qgpCyLSEBlne8MFcFULvI9E3Th01DxOE9ErxRZrbJ68HkhulmxUinqI1ctz8tJ6MzJWadebZfxwf949JDRL2gjpJGCRCR5vtOggievKYcsG2LbqHoDBxBWobaAACqPYl3bflnBGkRZ-SWQ"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "52",
      "83",
      "30",
      "00",
      "00",
      "d0",
      "7f",
      "c9b976d8176f60a1d082800688bd6418125b9642580b38febb1d3fe1bd1f90e5391d063cb6156dc02b583341dfe7fb33d34c7c2538a4650cf1170c8ac3745757a1da0addeae044163b0a4e1c8af8856fe28f41ad4d83dc1ccb0995449c82637f91d468e3d26d558898e67181845890e7ab67413d4a0fc6a73aa4c15ca2ad838b933cc8bda9c630e8b578e3e497b67e5b647b50c86a5b6708f36fe45f24e9663f78347b4926e2dae765372829a2bce67a84213e392945c6b64c935b437767bb4553c389c72965891239debb1f63266ab0033b401756f474c0c5932bcababe03ff763cae8c3e034c9af5b407bf7f1a266b271a010000",
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
      "Tue, 11 May 2021 00:39:13 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-67-1620693471142",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b4fa34014fd2b64f6ab6de9034a9b346badb892b45429d56c361b324c2f380a0c32438d31fdef7b19acabbb897e6266ee39f79cfbe0853cf06247a624e6e9630dd5f3b77b119313028aa6f87a56246e625fefcfa85d0f6ccfba1ddd3c5da5b3192278c392342f33e84851570ce474bbe9a695a84b5a09d1c1441d7bdce9db03d39e0c47e37e7f34409e842c59f2e201d9774a9572daeb1db5bba9106906b4e4b2cb44fef6dedb0f7a6525ee8129d9fb28d94315d9fb5cf47b2618555c14b3ed060dd412aa0872ca33b4f097b98b4f3fa6ee729a775304ef3903ca98a80bd5d8c2144c14094feb4a6725d317a26dbe3b908dbb7417a1c14456e74554d01c4e8c1d553452cf251817c17a6578fec53a58cd436fed479bc5a5bb9a7717ebe576e56f8cdb4b37700d45e30c34d79819a7fae6e305f57720152fb47ad83c37caaf0df2fe1f4b434069096d301a9b36ed3be6244ee2314b9ca1152726c4b1138f2d3a8c4d3619c1681703459e16d52c5a8802c613d38ced7ee40c86108d12368c1ccbb223db1a5016f7c176d88e1c4ec853c5159c73590ac9db0e91dbc00bdd280cb6fe621ebaba8484d6993a6f8d3505bcf7a8b040047d52d3a18972814a4dbb3d3f7483f922f46edc76c24b48297bde3ce28c139a494034adb0790aaa95d861c3883f5fb9e708d613bb3a062599fe7a214dcf1b17ef5afe460f71808d5da5bf6413069eff43db39226e68566bc8be3d90122ddf616de8faf01b91b8a46d1672bd75839fa47d0a20810a0af6f53411ac035ffe6bc7c5472cae3eca488577dc1d261b115641bb435c97fbcab6aca1630f890657eadfd8c89c38c7ae35399a8c9043a15e2b6a171f0b6dc56af906c2208edfd7dd3afc01d24245c978040000",
    ],
    [
      "ETag",
      "BnfEf6QvBa6u26I5W4VwPg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-67-1620693471142"
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
      "0000000002ff8d92414f83401085ffcb78a5495b2bb5241eb056dba4ad95d28bc6342b0c485d18dc5d34d8f4bf3b8b5a8d9ae80566866f96f71e6ce1212b62f0e02e4b1f2b54f5418ae6ca1601ea4a1acdb7920a8de0001a913229eb603314033f1c17f54b49c378753d1ea627274ce8e81e7301de16920c65acc1bbd9422172e4b588649517eba673c0d4a51d2ec36032bfe03ea7d8f6f3d574ea9f4e47b073f68bb13062ddf0ff58bbdd39b0a1bb001354584468b5948a36189989b5a9455e4a6c69aa54841a1ab879902aaa4aa1885a3c69b9fd56c7edb6ddc161afdfe9f4ba0c4a8a84c9a86076b5647d60c80819d033bb049701d5946c3869ae4f3ccee2c6882d27f3d0ed35fabe022c2dc924aeff0659efbde0cff081bd47f09d13395585d953e7d34bffb7e338d3cfa3cefc70f483d08693da23e164365a86fe6c61b9db77efa7b541bd50c4416ab41976dabde3a3bedb7e8b7548366a7e8f6754850e4482ff8e7166c04b84d4b87b050e5e78b37b020000",
    ],
    [
      "ETag",
      "lyRjCa9ATHnyzpoCdUZHCg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`stamp`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-68-1620693471142",
    },
  })
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
      "d5536b6fda3014fd2b96f7a59578144a59cb5475699b755121d02450b1aa029398d4258983ed544215ff7dd70e94b16edde74948c4bee79c7beec3af78c1b20877f08cc5cb828ad5a7673ec3154c1589e176a4460b72bb1c5ac578d668fc885654f5acf8fc1c104cb32449f38456252f44486567e8d762c18b9c08ceab20546d9f561bede651fbecb8f5b9d1683581276932efb26c01ec27a572d9a9d7b7b96b31e7714249ce642de4e9db7dfda559cf057fa6a192f5fd9475c822eb1f27bd48784814e3d9f9d0070385a4624253c212b0b06346b3affbd23546d25a0ce01716521286bcc894b6051221cfe62c2e8451c59d576c6cfef2817dbb6b5f05e8aa3f748383294935797a8888449389a0b24854054da1a6394be88445d332922fd037afdf830838782292ca29baff6e7b3642ddfebded1d4ca5028f20d4756e6d74812cf71aedeb382e1abaaeed07e8e0e210dd78fde1005d8ef730504044e7043c5c13054994361e959f8e9eaaa2520168d372e7fda0f15a4719174ce9621d37b03deb2a704676d9df2e8d49b8f297d0e139492405341124a58a8a1e8f2850067ddf099cbe6b7581619a36d82224ee3cbcee08c12aa7daa032ff38707a509cd51be0f5baf27798e579d618a4891064f55b0cecb65b9abe638f48521888c19b5369e3a50ce006d6d9b6a7265e3faee157c1b06fa53abe1bdade1897571e9d5341b3d0487ed0460336817f3e9bed0e0316b618d2c0262826150ba54e120a6ac2014b8ddd927d72d23a3d69600316ea5dececf8483ff52cfa636493a330fa54082e3cb3b8fa08d9a4f1c232e8098beeccdaefb95c6eae522a2589b5bccb514a54f8c4b218491667a02d289a7381e645166a5ab9e5e68a88b84869a6901e9aeca0b7b9d7905fe439178a463b1500940fc40f3cc7bd39fcb2395e8e03db8767a7d043a373da7cd4459952cae9febf653c96c3d17eaefbae0ddbfc13379cb423ca050000",
    ],
    [
      "ETag",
      "VtVkaKqUAuYb11ZdyetMAg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxNTQsImlhdCI6MTYyMDY5MzU1NH0.O_Qd8P7k6asnY9gS4BVoeSwEgrTM9CEdHTFcuWdffiHGcTuA6FD8W0_AxqM8Bu-25tMJDdgUdcFVqZ-xBcyr8QzIHNCaN-2bofPo206lRFQO9QwgcpUo7FCFrRLlBe3GEtltXSrcVh1zaVyRtxX4ZkuOw_7RGNG5Ui8XhxOf86z4G2bOQsw11LKtM4tMGBH4pdTp8Aih8OyHvHTBo1fApN4WTGgoZpIXaRm0CB2oV56gdfT3wxgxtQxTUibXp3jm_cpvyZSu39UA8XTE_NgqpfCxNCs5c_7qAFWif8wVCMGHcyZH3QODFXwovsLsd98lDcRp1CA0Lb0dbHvr0MVm_w"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "7f",
      "c9",
      "599c12164b6f8651d68a20ca72c9c4100169590265d1e9bfd7e927bcf7048452d6f778682a56830fb010a8ade9da69df11ceb34dd40f0e893829c6b9f773011bf9f6146fc7748ffdee5bf08ab6f3c4c66a02432de2901e82e3446c9d77c870ab50c4c81e7189ad4a1645d866d54e542dafd953dd44f65dcbd5affea1c31a9d43932919f3eb69de98245eaebb00dec2c85c4e72a748ed2cf9f4f103892477461139c41b4d373e06c8b46a57b87fc62455e534291237e1d3c5b9ca29aba2e3a23bcbed52b8e7f0a05489a0bb699d72e70d821560735b72d6e3f2c595144d5b817f3b1e9696bd0210239c71f0fb07246b87201a010000",
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
      "Tue, 11 May 2021 00:39:15 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-69-1620693471142",
    },
  })
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
      "00000002ff85535d6fa24014fd2b66f6b52a885035315bab746ba2d8456cb3d96cc8305ce8b4c0506670631afffb5e86da6dd3a47d6266ee39f79cfbc13379e4454c2624e2e9530dd5e1db8388c8190145537c750ed78bd518aa24babc3cdcd855bebf72693a9d2282372c49f33283ae1475c5404e76db5e5a89baa495105d4cd475c65dd31918ced81a9e9be670803c0959b2e2c523b2ef952ae5a4df3f69f75221d20c68c9658f89fcf5bdbf1ff4cb4a3c0053b2ff5eb28f2ab2ffb9e8f74c30aab828a6bb2d1aa8255421e4946768e13f338e2edea7ee719af75204ef3903ca98a80bd5d8c2144c14094feb4a67259367a26dbe3990adbb72e7418789acce8bb0a0399c7562aa68a80e2574aefccdbab3f4ae36fe7a162c375eb89d5fbbeb596fbe59edd6deb67377edfa6e47d12803cded4c3b17fae6e105f563908a175a3d689e1be597062d3f8ea521a0b48436189e1b0e3547c6384aa273968c2c3b4a0c88a251746e532b32d87808c338028a3c2daa59b410c5c03692a1ed9821b32d2b1c0244211d58c3d0888d64108f1ccb894c723c237f2bae60c16529246f3b44eefc65e08681bff3e6b3c0d52524b4ced4a235d614f0d6a3c20211f4494dc726ca052a35ed5e7a81ebcfe6c1f2d66d27bc8294b2c3f609679cd04c02a26985cd5350ad458c0d23de6ced2e10ac2776730a4a32f9fd4c9a9e372edeb4fc951ee0001bbb4a7fc936f097de0f6de784b8a559ad21fbf6404ab47c8fb5a1ebe31f44e292b659c8cf9debff22ed930f095450b0afa789601df8f25f3b2d3e6271f551462abce3ee30d988b00ada1de2badc17b66ddbe6784434b8521f6296393e75adc9d164841c0af55251bbf858682b56cb57100671fc9eeed6f11f3ee4486d78040000",
    ],
    [
      "ETag",
      "6yHDL9erfbBByP5rmvFEag==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-69-1620693471142"
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
      "d1",
      "4e",
      "c2",
      "40",
      "10",
      "45",
      "ff",
      "65",
      "7c2d49512cd2848722a02405b12d31c610b2b453286ebb6577ab21847f77b6221a35d19776667a667bef6df7f09c1509b8b0cc56db0ae5ee6c85fade1401aa8a6b45b752140ac102d46c45643ff2ed50960f8f25b767b6c3b64e3adc7add2e112a5e63cec0dd439a214f14b84f7b28588eb4160b5ee5c5a2ee2cd0bbd20cc328184d6ea8cf4562fac9ccf7bd9e3f8083755a4c98668b9affc7dafc60c1462c034c516211a3d1524ab1c1588f8c4dc5f2926343894ac6a8a086eb072b29aa9249211a3469389d46d339b79dce45abdd6cb6ce09e422663a1305b1b390f481169af140bc924b700890754986d3fafa42e32ca98d987234899c56adef2b40d2d28ce3e26f90f4ae197d860fec18c1778ee5a22af4891afa77de6fc751a69f47f5bd68f083509a923a21d1683c08236f3c35dcfce8bdb7d3a8a65250900a4d864dbb7575d976ecf758af85899adee36a59a10531a3bfe336d3e0a68c2b3cbc011e2a68857b020000",
    ],
    [
      "ETag",
      "DTL0SrpWYpl0U06aq6fFqA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`stamp`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-70-1620693471142",
    },
  })
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
      "5d",
      "6f",
      "da",
      "30",
      "14",
      "fd",
      "2b",
      "96f7d24a140aa34099aa8ed2b4cd068126a115ab2a701327759bc4c1762aa18affbe6b07ca58b7ee791212b1ef39e79efbe157fcccb21077f1038b170515cb4f4ffc0157305524865bde3a7c3afe76db77afda8b1f516778b1f01be1f5c9092098664992e6093d90bc100195dd89578d052f7222383f00a183f6e141bdd5386c1d7f6eb6ebf56603789226d18065cfc07e542a97dd5a6d93bb1a731e2794e44c56039ebeddd75e1ab55cf0271a2859db4d59832cb2f671d2d3840744319e9d4c3c3050482a6634252c010b5b66f8f07557baca485a8d01fcc2024a82801799d2b64022e059c4e2421855dc7dc5c6e62f1fd8b30656df47fdd1c4f1f7e624d5e4f93e2212cd6682ca22511534879a2296d0190be765247f4617ee68081170f048249573747b65b9164283d1ade5eecda5028f2034b0bf5be814f59c73b4ab633b68e23896e7a3bdd37d74e98e26637436ddc14001218d087838270a92286d3c2c3f6d3d5545a502d0bae5f6fb41e3958e322e98d2c5da8e6fb9bdbe6fdf58657f073426c1d25b40872392480a6822484a1515431e52a08c479eeddb23a737008669da788390b87bf7ba25f8cb9c6a83cafc63df1e4271bde118af5695bfc37aaedb9b823411822c7f8b81dd5653d3b7ec1b92140662f0e654da782903b88e75b6cda98157f72bf85530ec5ba98eaf27963bc5e5954b232a681618c90fda68c026f0cf67b3d961c0c216431ad804c5a46281d44902414dd867a9b15bb28f8e5aed4e131bb050ef629d4e4b3ff52cfc63649da330fa54082e5cb3b8fa08d9a4f1c232e8090bafcddaefb85cacaf522a2589b5bcc3514a54f0c8b218491667a02d288ab8",
      "405191059a566eb9b922222e529a29a48726bbe86dee55e41579ce85a2e1560500e503f17cd7762ef7bfac8f6753dff2e0d9297457ef761af7ba28534a39ddffb78cfb7238dacff9c8b1609b7f025b863f35ca050000",
    ],
    [
      "ETag",
      "o60j9JWCRH7qZf8MFqT2dQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxNTYsImlhdCI6MTYyMDY5MzU1Nn0.Mngz6OMsVddTIAUJuHnFn2CPubPD3M_fJVMC50c9VwEvqt6Rnq0zrGqP_5NKlFgoxApNqRvO1nTBsLJia8rSmySx3Gz860sQYXqWUPz4xCh9pmOiUERoFr3nC-juITvshI0rs9r6AT0c-WXfXEIdvNuuXuqDkDfbJ3wd-qjAxC_mDT_ywrDqGnZ0k40LSBIn8NP_xRnvSkm-tf6zzvXQ0GNEsAILl8Ovtkc5nQ1ON5J7jY_G8Das_HbcFT--WQrGELVfoHkTkCwPtKNUOCZ1A6QnDdyZN5-lJSVwdGbM3Wl9a0pAUT1e9uRZQK1DrGEnyQm9-jA1PM6CEmAbiRXdXQ"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff1dd04b7282300000d0bb642d8e2041e80e4705830d52c40137194cc2474b8c8818e8f4ee757a84f77e404e297f3c4877bb72013ec0901bce944e03692f4959e016c9fc999421d358ce90d4b5eebe541ba8a55a1f5f5d633b983b75387d8ef93016678e71d8a416f55096b8b4ef57f454a6c573c7c42c22610005922ab20946f26a3609da1881ab1833d96e1fedfd816c4b7f1ebdccf3a8437ae8e0a5d36dbc161e7e2111c3403bf7f7d5bdf21c635cb4e2a2c3af6c0c17dfe6ec191f5fc7ca1071e35a61eae3cacaaa431137269bd5b775a43202bb55adecc64b5c0826802b59b7fc41ea37770e1d6702feeda41b247f072c79def216fcfe013a7ef9b81a010000",
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
      "Tue, 11 May 2021 00:39:17 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-71-1620693471142",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85536b4fdb3014fd2b91f711fa4c4b9a4ad5a84a60d5da744b52d0344d91eddc04431a87d88121d4ffbe1b873210127c8aed7bce3de73ef2446e459190296122bbaba17afc7223193926a06986afeef701cbe8f0af5d5e5c1cf947f373361ffa0fb3192244c3527457e6d051b2ae38a8e936ec6695ac4b5a49d9c1441d67d0199c0cfb27ae3d720683d110790af274258a5b645f6b5daa69af77d0ee66526639d052a82e97bb97f7defdb05756f206b856bdb7923d5451bd8f45bfe692532d6431db8668a05650c5b0a322470bff99093b7d9bba2be8ae9b21f85e70a09ccbbad08d2d4cc165918aacae4c56327d22c6e6ab0309bd95b7882c2ef37a57c405ddc1b195504d63fd5882751e6cd6d6d23fdf04eb79b4dcf871b8f8e6ade7ddc566b55dfba175f5cd0b3c4b539683e15a33ebd4dc7cbca07e024a8bc2a847cd73a3fcdca0e5fbb134049456d00663a77f420793becb52e6f074628f59da07c626cc19539bf5b93b8251c28022cf881a162db06636eadbe37410bbd077e391ed42ec4e9c344e5277ec4cec94268943f6c7e4a1121ace842aa5126d87c855b08cbc380ab6fe621e79a68494d6b93e6b8d3505bcf6a8b140047d50d3be890a894a4dbb977ee405f345b4bcf4da09af20a3fc31bcc319a7345780685a61f334546b9960c3883f5f7b67083613fb71082a32fdfd449a9e372e5eb5fc851ee1001bbbda7c4918054bffc2d839202e695e1bc87d7b20255abec6dad0f5fe0f227149db2ce4e7d60b7e91f62980142a28f8e7d344b0097cfaaf1d161fb1b8fa28a334de7177b86a447805ed0e0953ee337b3c7686b6f95335adf4bb98ed4e0e5d6b7234196107857eaea85d7c2cb415abd50b0883387edf746bff0f6dd41a9d78040000",
    ],
    [
      "ETag",
      "9K1bga2x3pGG+N+AFbA2Nw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-71-1620693471142"
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
      "41",
      "4f",
      "c2",
      "40",
      "10",
      "85ffcb782d094528da84032808b12094e2c510b2b453586cbb65772b12c27f77b6221a35d14b3b33fd66fbde6b0ff0ccb3085c58f2d5b640b9bf58a19e98c24755245ad12d179942b000355b1179bfe9c86aff5535bc5d9f716fcb7b8fb5c9a4d52242856b4c19b8078839269102f7e900194b91d642911469b6283b0bf43e37c369e00f4677d4a72232fd68e679ed8ed785a3755e8c98668b92ffc7dafc68c1462c7d8c516216a2d1924bb1c1500f8c4dc5d23cc18a12850c514109970f56521439934254685269da15dba9559debcb7ad3b6eb3502131132cd4546ec6c4afa400bcd125fecc8253804c8b224c371797da1318f4a23a61c8c02a75eeafb0a90b49827b8f81b24bd6b469fe1033b45f09d63a928327da67ade43fbb7e328d3cfa36edb41f707a13425754682c1b03b0ddac3b1e1e627ef9dbd4635968282546832b4abf5ab46d3a9bec77a234cd4f41e57cb022d0819fd1d7daec18d59a2f0f8065c9f16ae7b020000",
    ],
    [
      "ETag",
      "KjBr0Hxs5LwHaiLqiFV2QQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`amount`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "%1.54%" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-72-1620693471142",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffc554614fe24010fd2b9bbd18350754109523311e4abd6bac2d96a22117439776a9ab6d1777b724c4f0df6f762b2aa7e77dbc84849d9d37efbd995978c20fac4870174f59fa5852b1fc72cfa7b886a92229dceeb5d2cb8bb07f9536dd45ebead13afddae9e4e9f1312098ae92249f67b42e7929622abba3612315bc9c13c1791d88ea47ad7af3b0b577f86dbf7dd46cb65b502769367359f100d5774acd65d7b2d6da8d94f334a364ce6423e6f9cbbdb5685973c1ef69aca4b52969818ab43e173dc9784c14e3c5f16808064a49c584e6846560e1b532997edfa46e30923752002f584c491cf3b250da1650c4bc98b1b4148615779fb0b1f9e68087b66b9f85e8cc1f79e14e44725d1ced2222d16422a82c33554311f43463199db024aa32f307741ef89790010777445219a19b9f766023e4fa3776f086c9752e6c74827a5e1f6d12391e1a799e3d0cd1cec92efa11f8a3013a1d6f60a08384ce0898e813052a4a3b4faaa3a3d7aaa854007a9eb9f37ed378a5b38c0ba674b78e17da41ef2c74aeed6ac02e4d49bc1c3ec28867249314d044909c2a2a2e7942a164e00f9dd0f1bd9e0b15666a833542e2eeafa7d7827039a7daa032dff8dcf57be161db385843ae49561acca23ae0ad66e3a0bd8557abdadf897a41d01b833811822cffc841435ae2430d8337516574add9c45a6d1db5f0ea76059f1a862759b1e3ab911d8c717515d01915b4880de52783366093f8e72f6bfdcc010b0f1d64a482582a164b2d120b6ad221cb8dddaafae0a0b37fb48f0d58a8f7b98e66a645f261e659a334fc54082e02f3b675086ad2786105cc04fe2d6a38a7529254d38c0ae8445232cd2832cb472f734651845881f42250148e07f6e479e3510d9d920425bcd45566ce5d542d7a1d6d57e1b63666ec541bfabf566eab2169adbeefd9f0aa7e03cedb0b9775050000",
    ],
    [
      "ETag",
      "02gMKTDQg1Lv2Qq/B+88mg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxNTgsImlhdCI6MTYyMDY5MzU1OH0.gve-GMrOAghsyX_VvRx0dxiXR4_zQ44-BlLBSpInJ7Ub-hq63YdH8fQjk3sKSHWTtLC1FFfumFVsK6PUSHlr08rYbndOP8p30xSBnDbi50VxuM3Jl-fPoDipvwtnrDcPnL5QEeZWyC7qsFx5n4AQk8m5yMKI0eR9BxNFAqucKTw9C72oqMwYYjDUbUOEzH4miVeM39tL9u374az2MEspF7h7I0xSvGE-KkfevlZ4I9sqgGahsxSsAcGOy_eSkNkD7SqkMU9fDkTkZSiWxDS_dKrzGQeFqqJvzRJu1MpRa8LI0MfTEfX73ojVscENKTKh9Hb1Nttn95wDXXlF1m9W1Q"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "90",
      "cb",
      "72",
      "82",
      "300000ff256771502a90de040121a228b61db8309426343191b7113afdf7323def65777f405e14b8ebb2bebae13b780563be86cb62896ad3ca4a1c950dbc0d681b4abbde4be63f616d7f07034902aeaab844a3ed927b57e916872692e2617f4ca4d536ea0be3e1d519d84a5f57637f75348eb941768e6740d8f9444e4771b845ee29628e7212acc887b2dc2592ee0723fc0ce834504f319b46e17e8a5a43616e2af6b11ea6f0681279484411a8ef04fadae46defeb2e4e7a79b6c6d99957f88d5e049d391648891f6ca5a866f875c851aef18b0cc002e0674d5bdc6574ced536102ec07f7bd68f359e0758386f710b7eff00c6b53b5d1a010000",
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
      "Tue, 11 May 2021 00:39:18 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-73-1620693471142",
    },
  })
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
      "02ff85535d6f9b3014fd2bc87b6d0209219048d19aa5b48dd4908e9076d33421e35ca81b8229369db22aff7d17d374ad2ab54fd8bee7dc73ee074f64cb8b0d199384670f3554fb2ff72221270414cdf0f55b7261a6fb8b60cb039bffbdfbb1b5a36b6f3a992082372c4977650e1d29ea8a811caf57ddac1275492b213a98a8e3da9ddeb06f0d47f6c0edf5067de449c8d32b5e6c917da75429c7a679d4ee66426439d092cb2e13bb9777f3b16f9695b807a6a4f956d24415697e2cfa35178c2a2e8ac97a85066a09550c3bca73b4f09fb9494edfa6ee72baeb66087ee40c2863a22e54630b533051a43cab2b9d958c9f88b6f9ea4056fe953f8b0c26f27a57c405ddc189b1a18ac66a5f82711e2e17c63c385f868b69345f06f16a76e92fa6ddd9f26abd0856c6eda51ffa86a2490e9a6b4c8c537d0bf082fa1b908a175a3d6a9e1be5e706cddf8fa521a0b4843618bbd690f63c6b94a489cb52cf7692d48224f112d7a17662b1d100069b0428f2b4a866d14214905ab6e338fdd8ee8dac7830da58b197da6eccb0cf43ea8da863b9e47042fe545cc11997a590bced10b90de7911f47e13a984d235f9790d23a5767adb1a680d71e151688a00f6a3a34512e50a969f73c88fc703a8be6377e3be12bc828dbaf1e70c629cd25209a56d83c05d5426cb06124982efc3304eb895d1f83928c7f3d91a6e78d8b572d7fa14738c0c6aed25fb28ac27970a1ed1c113734af35e4b13d90122ddf616de8faf01b91b8a46d16f27ded873f49fb14420a1514ecf3692258073efdd78e8b8f585c7d94910aefb83b4c3622ac827687b82ef799ed38de70e8100daed4bb98e7dac7ae35399a8cb083423d57d42e3e16da8ad5f20584411c7fa0bb75f807f6a155b378040000",
    ],
    [
      "ETag",
      "BbG/fyGNkiN3izhXk3TP8A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-73-1620693471142"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92dd4ec2401085df65bc2d097f166dc24511949a025aca95216469a750dc76cbee5624847777b6221a35d19b7666facdf69cd31ee039cd63706099aeb625cafdc50af5a329025425d78a6e85c8158205a8d98a48b7c997c3d7721678713071fbdbb8739ff9bb6e970815ad3163e01c204991c70a9ca703e42c435a8b042fb37c517516e87d6186d330f0c677d4672236fd78e6fb6ecf1fc0d13a2fc64cb345c5ff636d7eb4602396012628318fd06829a4d860a43d6353b1ace05853a294112aa8e0eac14a8ab26052881a4d6a9d56ad6137ebf675abdd6934da4d02b988984e454eec6c4afa400bcd782076e4126c02645592e1a4babed0388d2b23a6f4c6a1ddaef47d05485a92725cfc0d92de35a3cff0819d22f8ceb14c94b93e53b7fec4fded38caf4f3a8be1b0e7e104a53526724f4468369e88e1e0c373f79efed35aa072928488526c346bd7d75d9b1ebefb1de081335bdc7d1b2440b22467fc730d5e0248c2b3cbe014e26d2127b020000",
    ],
    [
      "ETag",
      "A2lbHxuURIdROADqd7JmLw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`id`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: "%15%" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-74-1620693471142",
    },
  })
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
      "54",
      "61",
      "4f",
      "db",
      "30",
      "10",
      "fd",
      "2b",
      "96",
      "27",
      "04486d43bbb4a895102b906d819294340155136adcc40d86242eb68354a1fef79d1d0aab60ece3a448f1f9debdf77ce7e4193fb032c5033c67d96345c5eacb3d9fe306a68a64b07b727f110e2f78e25ef50bd613e7e7fdef997d75740408a6ab242996396d4a5e8984ca4134696582574b22386f0251f3d06eb67b9d835effab7dd86edb1da893345f8c58f900d5774a2de5c0b236daad8cf32ca764c9642be1c5ebbef5d4b19682dfd344496b5bd20215697d2e7a9cf38428c6cba36802062a49c58c1684e560e1ad329d7fdba66e3152b432003fb1849224e155a9b42da04878b96059250c2b1e3c6363f38f059e3823e73444a77ee4857b31297471bc8f8844b399a0b2ca5503c570a605cbe98ca5719d593ea0ef817f0919707047249531baf9e9040e4223ffc609f66280ee23cf0fd1c8bd70d0311a7a67689bc8f550e479ce24447bc7fbe847e047637432ddc2c00952ba2060e28c285051da795a2f5d3d5645a502d04bcfddf793c66b9d655c30a54feb7aa1130c4f43f7daa91b3ca2194956934768f182e492029a08525045c5254f29948cfd891bbabe371c4185e9da78839078f0ebf9ad205c2da936a8cc5b6bf56ca3bf015c93bc3288a77a8177dadd1dbc5e37fe4e320c82e11484891064f5b1c0870a066fa2dae446b18db5da26eae0f5ed1a9e0686eb58b3e3abc809a6b8de0ae8820a5a2686f293261bb049fcf3abda5c71c0c2250719a920968a25528b24829a74c80a63b7aeee76fb87f6013660a1dee7bab6fe1394e98799178dcaf05321b808ccbdd621a849e38595d013f853347041a52499a6894a38",
      "89a4649e5364068f5efb8ce218b112e941a0389c8e9d991946dc402724858cead9c8347980f48c37eb5d1dec6a47c6473d9affe4e1b66e8b1639f33d07eed16fdd9d6f0263050000",
    ],
    [
      "ETag",
      "BjKTAKocIQ9mi6rJJ9Fg4Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxNTksImlhdCI6MTYyMDY5MzU1OX0.OPwIG7KjxIMXRdVBwY2aUJKEjaZJayiGQkmz1C8drKQtiEznhqM2RbwqoQYXqicosLdInfZN6UsndiZdZP4nPTbrot8EZFg8MWu3wYKQrKnqYeP3PeBHDLpSLZnkfCnuITkhZbRgEutM0v2JTjJpvr4BaGT0CvuXOfbBwRcw8RmWxQrzABngWpkRvKJh-GRHI4EVIZDcESH8SG6ycBrapg4ZlqlK2yRVHyp8_-gDg432D6durr1kC8KpdQejEYq60zW-G677geQxJffjornA3NHws0r69840ltEk30Z6X81SC5omMzsY-JLfjOOjWkBOgIqp0hnxK3ROjWf-edaZqA"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff1dd0c16e82300080e177e9d9181151ba1b35a5022a4250c00be95881a2d8069814ccde7d6ec7fff8fd2f40f39c755dd68b1b7b800f30d2259ce7734f9a282b19ba4ba412c8f9943c229c414d845c4bed41f02d4d579f34eebd9d98902bd4717975c3b64a50e26d46712a6ff15f5528d617e660288d1afec5db349a39964550379e65f33eb44917b4d353b7fa602b5557064d644ac327d2c24e41eadadc4bbc86fcfa6da1ab26572bec94e933bd1f0ea3bfb813d67c69210e17644ba258e7103a46ea72bcab7b4bec2fd1ba1a462a54814f916d1ecfce14d9fb339801a6246f5997f1375737209c817f7bd68f92bd0720465bd6829f5f68fc9f4e1a010000",
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
      "Tue, 11 May 2021 00:39:19 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-75-1620693471142",
    },
  })
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
      "85536b6f9b3014fd2bc8fbb82610c85b8ad628a12b524236425a4dd3846ce742dd12ccb0e95655f9efbb98a66b55a9fd84ed7bce3de73e782477a2d893296122fb5d43f5f0e95632724640d30c5fe38b45e105f1a6487bbcbabe592e3fbb7fafb2d90c11a261297a2873e82859571cd474b7ed6695ac4b5a49d9c1449dd1a0d31bbace70e2f547bd5edf459e823c5d89e20ed9375a976a6adb27ed6e266596032d85ea7279787eb7ef5dbbace42d70adecd79236aa28fb7dd12fb9e4540b59cc765b34502ba812385091a385ffcc3d3b7f9dba2be8a19b21f85e70a09ccbbad08d2d4cc165918aacae4c56327d24c6e68b03d9fa2b7f115b5ce6f5a1480a7a80336b4f354df44309d645b4595b4178b189d6f338d884c97671e9afe7ddc566b55b875bebfad28f7c4b539683e15a33ebdcdc42bca0fe1e941685518f9be746f9a941c1dbb134049456d006939133a4bdb13361291bf174ec0d58ea006363361a508f397cd287fe9e01459e11352c5ac8023c36197bd44d3cc71d247d77324e18efa709a30367d273599f8f18399e913f95d0b014aa944ab41d22d75110fb491cedc2c53cf64d0929ad73bd6c8d3505bcf4a8b14004bd53d3b1890a894a4dbb8330f6a3f9220eaefc76c22bc8287fd8fec619a7345780685a61f334546bb9c7869170bef697083613fb760a2a32fdf9489a9e372e5eb4fc991ee3001bbbda7cc9368e82f0abb173425cd1bc3690fbf6404ab47c83b5a1ebe32f44e292b659c8f79d1ffd20ed5304295450f08fa7896013f8f05f3b2d3e6271f5514669bce3ee70d588f00ada1d12a6dc27f660e8209d1870a5dfc45c6f70ea5a93a3c9080728f45345ede263a1ad58ad9e4118c4f187a65bc77fbd5cad7a78040000",
    ],
    [
      "ETag",
      "TFCn3ITOnf1crWhDD+2xVg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-75-1620693471142"
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
      "65bc2d09c552b4891745503180fc94c4680c59da2916db4edddd8a84f0eece5644a3267ad3ce4cbfd99e73da2d3c2579041e2c92e573897273b4443d36c50455996ac5b782728560016ab164b2bdbeeb84cef5f134a675bb31b057afa57f3b3e3b6342858f9809f0b6102798460abcfb2de422435e0b292db37c5e7516e84d6186d360d21b5e729f5164fae1acdff7dbfd2eecacc36224b49857fc3fd61e7616ac6831c11825e6211a2d85a41586ba676c2a911529d61495324405155c3d584a2a0b21896a3ca9b59a35db6dd4ddd363a765db4e83c19442a113ca999d4d591f68d2229dd09a5d82cb80ac4a361c57d7171e275165c494bd61e03a95beaf004b8b9314e77f83acf751f067f8c0f6117ce7444665ae0fd445ffc6ffed38cef4f3a88e1f747f104a73520724e80dbad3c01f8c0cf7b0f7dede685423491ca44293a15d774e9a2db7fe1eeb3999a8f93d9e96255a100afe3bae120d5e2c5285bb37d30535f87b020000",
    ],
    [
      "ETag",
      "BwZDc4J3SfowB2M1jxuAXQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%oran%" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-76-1620693471142",
    },
  })
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
      "ff85540d4fdb3010fd2b912724904a9b26fd9610eb2063112565690a43d3d4daae530c491c6c07d4a1fef75d1c5a606c20454aecf7debdbbf3398fe896670b3440842fef0a26579f6e044135c4345ec2ae7bfcbb485b223feddfd207df7f48dd1ffaeee1e00018bc54299ce609db57a29094a9c174525f4a51e4580ab10f81f6bb9dfd66c7b13b7db7d56d365b0ee8144be211cf6e417dad75ae068dc6c6bbbe146299309c7355a722ddee37ee9d462ec50da35a355e5b36c04535de373d4c04c59a8bec603a81040ac5e48ca5982790c2b372413ebf0e5de738ad2f817ccf29c3948a22d3655a10828a2ce6cb429aa868f0884c9a2f3ed0c41b79479175349e06d1ee1ca7a578be676165cd6692a922d1356b0e35c53c6133be9857487e6b7d0dc767804006d7583135b72ebf79a16759a3f1a517ee6e0188158c236be49f7ad6a1350c8eadd7e1fcc09a06813789acddc33deb241c4fcfad2f57af3850c78229cd3353458449c2ca0a9e1aedbf3dde5280359857e0ac6b7770b367f7494cba34eeb96d12db8c901ee9b6b14b6cda6fb1d682300c3a5d46372a9c89acdfee631ac73da74d5ddb8989dd6dc70bdb618412e2369d3e21d875ed1646eb1a7a905cb363ae72a178d56d7419fa91378bc26970348c3c53468ca1a3c7557265112ff3d4502490dea96b5da25c805379747e1079e1f028f22fbc6a5a466c89e96a7207f312e3443160638953a6993c130b681a3a1f4ffcc81f07c31128cc089c6f180a0d7e3e3e0ba2556ebaaccd1b4da2d00f4e4c021bc6054e0a43b9af3ed08e9038db41eb75edff71866138bc026f2c255efd85413d9d5629ff8787e19b5595e7c6b3894ab7cdca41eb5f6b786a08ae57151d7d9f7ae115aab6421633c932faf1fc00d9001ffe25365716b87069c1466958c3b452559a50c9aaa9e5a949b752b73b4dc7ee214396fa0dd631d8f6aa961159ca32fd545175654da34aa8505b1280306c8139a9f51fb4f2672a32050000",
    ],
    [
      "ETag",
      "3Dzum4opK9kcwIIwm3Xtqw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-76-1620693471142"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d90514fc2301485ffcbf5754b1c0ed0253c8812c5209121316a0829e56e0ebaddd1761042f8efde566378f4a56dcef9eecd393dc2a6a85690c0b2c8b70deac3458e76e21e299a4659c3574d95410800adc8997c9f6de3e1c7f3a434eba7d65b7ba9ee2323f7bd1e13467e612920394256a05a19483e8f508912796cb1d07e2363f6503b65387e1d3c0c52164a5a39613c1b8d6efba3019c82b3b17af3af91f92980352d53cc506325d1a5a835ad51daa12b6844592b0c0d355aa2010f7b23d7d4d4421385ac84dd4e18755a979d9babb81b45718b414552d8822a666753ce0696ac5029edb91f3840fb2757cdfcb963b9ed3bec3ce0a29d7bf19f17396ffebbb07fb0685e34713a832e587cddfd8979472ebae54a5637188014fccf8f85852413cae0e91bb157b6c9c5010000",
    ],
    [
      "ETag",
      "YUq4IZMQmsjJ2W5blD1scw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxNjIsImlhdCI6MTYyMDY5MzU2Mn0.asVUY8TXKLx-aFjV26adgsgkYu41p1SlMMC1N3W4rJwYnOHIG5QSmmcA0qBHAhCIOjNKMC3KzdbF0hNxZ8ZphkgIC4BT1qnnrQ1SteOGeZlttDwbxsA_WWVGm-GH3Vtf5bwMWjYo_Q17SsbzmOVt7ncfFiJlWHcgG_yxe8mL8lYBmS6kyHJt8a-GsNbhoTVRZNUD9oqtst9LVcM8dAsfDdPe7hlBEEp3Y9Pa_O7F-HNfSS7TXvafPXM_EuQpI4vgVKw0W-NqLbtrPw3xBm_81WJ3UpZcWN7_e9hK5FdFVJzgqqh7cLn5evIJeN7H9nkRmlyeDGRIV5djV97KIuNvaw"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff1dd0516e82300000d0bbf45b0d2030bb3f182e521d7574c0ca0f29b5544aa658195297dd7d664778ef0730cec5f55a0de74e9cc03330cc810bbed8f6abb0928d269f3433ef7971947ca90efeb75c23d63513542d81b9356a577bf588237833756c24c689c9c238bc046c251b910ce85e1f74de13b733225213effdbd31cec0ab16dbc7d285ddf2836e524ad28d67bf549149ec717bc64372a1c47abaef89e0255654445999a7895fe48ce82176d0ae38d11bf2d65fd83253d0d9e737073385a6ad9c0ebbcd6e0ce6e8a6bc5437a679d5d61c62ebe897198d29033320a6bed5e25ab50feed2837006feedd5607af1080805d34283df3f5e51743e1a010000",
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
      "Tue, 11 May 2021 00:39:22 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-77-1620693471142",
    },
  })
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
      "00000002ff85535d4fa34014fd2b64f6d5b6d0d2629b346bd3e24ad2529752cdee664386e182a3c02033688ce97fdfcb605d8d893e3133f79c7bcefde099dcf132213312f3ecbe81fae9dbad88c9090145337cb55665f99827b0be4d7ed75781773136d3e2713e47046f599216550e3d299a9a819ced77fdac164d456b217a98a8e7383d6b323427d391ed58963d449e843c5df3f20ed9374a557236181cb5fb9910590eb4e2b2cf44f1fa3e78180eaa5adc025372f05e72802a72f0b9e8f75c30aab828e7fb1d1a6824d4111494e768e13f3389cfdea7ee735af433043f70069431d194aab585299828539e35b5ce4a66cf44db7c73203b77ed2e438389bc29caa8a4059c18095534524f1518e7c1766378fef936d82c426feb47bbe585bb59f497dbf57ee3ef8ceb0b37700d45e31c34d7981b67fae6e305f513908a975a3d6c9f5be59706791fc7d212505a42178c1c7342ad53731aa7b1c3d2d3d1384e4d88e3d3d819d3516cb2a90d761203459e16d52c5a8a9252c74cd2741425091b45364bec2866cc8c868965c7784a6d6b4c0e27e4b1e60a565c5642f2ae43e43af042370a83bdbf5c84ae2e21a54dae569db1b680b71e151688a04f6a3ab4512e50a96db7e7876eb05886de95db4d780d19654fbb7b9c714a730988a635364f41bd1109368cf88b8dbb42b09ed8e53128c9eccf33697bdeba78d3f2577a88036ced2afd25bb30f0fc1fdace117145f346431eba03a9d0f20dd686ae0f7f11894bda65213ff76ef08b744f01a45043c9be9e268275e0cb7fedb8f888c5d54719a9f08ebbc3642bc26ae87688eb725fd8e3c970625b44836bf521e64ccd63d7da1c6d4628a0542f15758b8f8576628d7c056110c7efeb6e1dfe015106a0b178040000",
    ],
    [
      "ETag",
      "1DnnwldeLjdZrVRIH50fmw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-77-1620693471142"
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
      "5f",
      "53",
      "82",
      "50",
      "10c5bfcbf68ae39f148a191f34ad98d014f1a9719c2b2c880197eebd54eaf8dddb4b664d35532fb0bbfcf672ce813d3c26790836ac92f8a944b13d8b514d75e1a12c5325e956f05c2218808ac54486c324db8d59147706aeaabfdeed76756ffad2ed12218335660cec3d4409a6a104fb610f39cb90d6029e9659beac3a03d4b6d0c399ef39e31bea331eea7e3c77dd5edf1dc2c1382d864cb165c5ff636d713060c3571e4628300f506b2904df60a01c6d53b2ac48b1267929029450c1d58358f0b26082f31a4d6a96556b9aad867979deb69acd768bc094074c253c27763e237da0b862a9c75fc825980488aa24c351757da67112564674e98c7db35de9fb0a90b4284971f937487ad78c3ec307768ce03bc7325ee6ea445dbbf7bddf8ea34c3f8f1af4fce10f422a4aea84f8ce6838f37ba389e61647effdad4239119c8294a8336c36da171dcb6cbcc77ac575d4f41e5b89120d0818fd1db789023b62a9c4c31b31b44e4e7b020000",
    ],
    [
      "ETag",
      "dEimzNafg5DLt/xKzz/RQw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%oran%" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-78-1620693471142",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85540b4fdb3010fe2b912724904a9b3ed2978458573216ada42c4da9d834b5b6e304431a07db61ab50fffb2e0ee53136902225f67d8fbbf339f7e88667111a22c293db82c9cd876b41500d318d13d80d9d508d753c6bfad1efa89f7f9f17ce74911c1d0182972c85d779ca0e952824656a389fd513298a1c4b210e41e8b0d73f6c765b7677d0eef49acd4e0b788aa5f1846737c0bed23a57c34663e75d4f8448528673aeea54ac1ff71b77ad462ec535a35a355e5a36c04535de363d4e05c59a8bec683e83040ac5e492ad314f21852766443ebe94ae73bcae2700bee394614a4591e9322d90a0228b795248a38a86f7c8a4f9ec03cddc893b0eadf174ee87fb2bbc2ec9ab030b2b6bb9944c15a9ae592ba829e6295bf2685545f21beb73303d830864708515532b6bf1c50d5ccb9a4c176eb0ff18002d7f1a5a13efab6b1d5b23ffc47a29e7f9d6dcf7dd5968ed1f1f58a7c1747e6e7dba7c81813a22a634cf4c152126292b2b7868b4f7fa784b02d6605e05973dbb8b9b7d7b4062d2a371bfed90d86684f449cfc16d62d341877522c230f074a96e583813d9c019601ac7fd9643db762b2676cf8923bbc50825a4dd6c0d08c1edb6ddc1685b43bf24d7ec84ab5c285e751b2d022f74976130f7c7a3d03565c4183a7a52255716f13c4f0d4502e88dbab665940b702a8fcef34337188d43efc2ada665c2124c37b35b989718a78a011a4bbc669ac9331141d3d0f974e685ded41f4d806146e07c875068f8e3fe89106e72d3656dde6816069e7f6a12d8212e705a18c85df581f684c4d91eda6e6bffd71905c1e812bcb19478f3570ceae9764afa3f3c0cdeacaa3c779e4d54baed562db4fdb985a786e07a55eae8dbdc0d2e51b515b0984996d1f7e707c026f0ee5f627765010b97166c9486354c2b55a50995ac9a5abe36e9566ca7db766c1b19b0d4af62dd6e6f773ca546a9c8d62cd30f155557d634aa0c15ea1104411836df9cd4f60f9b87e17232050000",
    ],
    [
      "ETag",
      "T5TsCtfS1Ndxd8pZUu5OWg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-78-1620693471142"
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
      "90d14fc23010c6ff97f3d12d6180a0243c805994841099121f0c2165dce6c6baab6d079984ffdd6b3186475fdaeb77bfbb7c5f4fb02fea1d8c605be45f0deaf62647bb744582a6a9ace14b516d1002402b722655dc9387492ee5f7116f8f59f98eb1e92ec763264cfa8952c0e8045981d5cec0e8e304b590c8639b8df61b19b3ad72ca6cf1163fc5090b92764e58ace6f3c9741ec339b81a53fb7f8daccf0194b44d30438d758ace85d254626a672ea0115255181a6a748a063cec1bb9a646094d14b2120eefc368d0ed0c1e7afd6114f5bb0c56940a5b50cdecea95bd81252baa848e9c0f1ca07dc951337f1e58bef3190e1e70d6ae7bfdbf5ee47aebdf85d3d6a279d1c4ee0c3a639d8bc94772c62d07b2bac10052c1bffc5cd8cbfbfc0369391d8fc2010000",
    ],
    [
      "ETag",
      "pE3mvAgmmzwe+wfjWeEs2Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxNjMsImlhdCI6MTYyMDY5MzU2M30.CBhuNBvML1RLtvog0Qu-7PBDbpcTGPGqamfACnom36t7QH2rbcHtqySF7Y7wt-_qNBr8fX1oBwGg5znthm2W_Mn-c9zFxOqbtFhDJN5WkHElOUPvEcpRft9MOsNyg2nWXLZUb9bzu75uM7OFTfKWpbRW2Wa0hmT-vKTg4FR5tMYNZ3n0zcZl2rqRp7K3Are1fTCUUYwS6T4QQUh1pHypY0KSbmKVkboV1Cx4ko_5EFlAE8BXwvCbT79P9p-xZTYH9EJR_w5siAk9KA9I_lIJn1qUsGGr16LUEthTAMeM106uWXkDS6EnCzo8fe34e4S967oaeA5vgv1585c95mB01w"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "417282301400d0bb642d4e4145e9aea88310151101759389f8090444268496e0f4ee757a84f75e88a629b42d91cf126af4891435ac713ac6cdc2262cf3f36e50df0e59527c4d05591eb0e645b5b9606cb78956dc1a8e5a39cbbaa09bae758c6939e9a73ef5ed95e4270f0cfe5840fe089d530ca18c32795e3b5ba3a0ce5c2aee995adfb96a1bc81c43e12657479855ae4df558c2c0e4b2f56e26713be65d8a63ac0dbaa2f21e7fc8a7571ff026480ce8b8b9d34b2eaadabacf2bb5dbdf210b7d373f27b355a86b5f75dfb2ea969cdb9fb84c2e3ae369a0f6048d10f44d21a025c59b3b9959d608fddb89540dbc036ca00204fafd03ee62741f1a010000",
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
      "Tue, 11 May 2021 00:39:24 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-79-1620693471142",
    },
  })
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
      "2b",
      "91",
      "f7",
      "95bed3a6a9548dae8451a94d214941d33445b673130c691c628709a1fef7dd38948190e0536cdf73ee39f79167722f8a84cc0813d9430dd5d3b73bc9c809014d337cbd178bd10494fbe33ca8e4e50d9b6866d757f3392244c352745fe6d051b2ae38a8d92eec6695ac4b5a49d9c1441dc7ed0c26c3fec41dd9ce60600f91a7204fd7a2b847f6add6a59af57a47ed6e266596032d85ea72b97f7def3d0e7b6525ef806bd57b2fd94315d5fb5cf47b2e39d54216f35d88066a05550c7b2a72b4f09f99b0d3f7a9bb82eebb19821f0507cab9ac0bddd8c2145c16a9c8eaca6425b367626cbe3990d05b7bcbc8e232aff7455cd03d9c5809d534d64f2558e7c17663adfcf36db05944abad1f87cb0b6fb3e82eb7ebddc60fad9b0b2ff02c4d590e866bcdad5373f3f182fa09282d0aa31e35cf8df24b83561fc7d210505a411b8c9dfe840ea67d97a5cce1e9743466691f189b32674c47accf5d1bec8401459e11352c5ac8c29da42c61d4899384f2d8761d3776613c8e53ca29b339e7c9704c0e27e46f25349c09554a25da0e919b6015797114ecfce522f24c0929ad737dd61a6b0a78eb51638108faa4a643131512959a76affcc80b16cb6875edb5135e4346f953f880334e69ae00d1b4c2e669a83632c186117fb1f1ce106c2676790c2a32fbfd4c9a9e372edeb4fc951ee1001bbbda7c4918052bffa7b173445cd3bc3690c7f6404ab47c8bb5a1ebc31f44e292b659c8d5ce0b7e91f62980142a28f8d7d344b0097cf9af1d171fb1b8fa28a334de7177b86a447805ed0e0953ee0b7b3cb1078e4b0cb8d21f62a3a97bec5a93a3c9087b28f4",
      "4b45ede263a1ad58ad5e4118c4f1fba65b877f74a412f878040000",
    ],
    [
      "ETag",
      "kiA36es9BFRroPWb6tb4uQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-79-1620693471142"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92dd6e82401085df657a0b893f8895c40b6cb53551ab82bd698c596150ecc2e2eed2c618dfbdb3d4daa66dd2dec0ccf0cd72ce81233ca7790c1eacd3cdbe4479b8daa09e99628eaae45ad1ad10b942b00035db10a91e271dde71b6b37d396db6e3220e06cd96dfed12a1a22d660cbc232429f25881f774849c65486b91e06596afaace027d28cc3008e7c3c91df599884d3f598c467e6fd4879375598c9966ab8affc7daf264c14eace798a0c43c42a3a5906287911e1a9b8a6505475b895246a8a082ab071b29ca8249216c9ad8ed8e5d771b35b7d374daf5bad320908b88e954e4c42e02d2075a68c6e7e2955c824b80ac4a329c54d7171aa77165c494c349e83a95beaf00494b528eabbf41d2bb65f4193eb07304df39968932d7176a307af07f3b8e32fd3cead60ffb3f08a529a90b120ec7fd20f4c753c32dcfde7b078d6a2a0505a9d06458af39d7adb65b7b8ff54698a8e93d9e96255a1031fa3bee530d5ec2b8c2d31b93aeabe57b020000",
    ],
    [
      "ETag",
      "sVN9l94hQquP37dpdSF35A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`date`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "DATE" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-80-1620693471142",
    },
  })
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
      "6b",
      "4f",
      "db",
      "30",
      "14",
      "fd",
      "2b96f705a4d217944127c40a8491ada490a4a00aa1d624b7c190c4c1763a55a8ff7dd74ebbae63639f27556aec7bceb9e73efc4a9f791ed32e7de0c94b0972fee1493cd01a05cd12bc3d91b17ce9ec7e6d9ecf2e5bfca657888bccfd7e7484086e588a65450a3b4a943202d51d06f5448ab26052881d14da3968eeb4f6dbcdfdc3ddbd8fadd65e1b790ad2699fe7cfc87ed4ba50dd466395bb9e0891a4c00aaeea91c87ede3766ed4621c513445a35365336308b6abc9ff4381511d35ce447c3000d940ae41832c653b4b066c60f9f37a5eb9c65f504c1331e018b2251e6dad8428948e4539e94d2aad2ee2bb5367ff9a081d3774e43723a187ae1d68465863cd9264c91f158822a535d2313ac69ca5318f37852458a6772ee0f2e31820e1e99023521b7178eef10d21fdc3afed624661a50c71b84a4ef7e73c831e979676453caf5c8d0f39c20245bc7dbe48b3f185e9193d106066b8861cad0c619d398471bef71f5e99ac16a501a41cbaebb6f674d1726ca85e4dad4eb7aa1e3f74e43f7c6a95adc878445f3e0059b3c65a9024433c932d0202f450c48b91a046ee80ebc5e1f19b66f572b84a2ddbbd735219c17600c6afb4fcf7aa143178bdadf113ddfef8d509549c9e6bfc5d0e9fe9ea1afd9372c2d2dc4e2eda97230ab02b4454db6d5a94d17f70bfcd5286e5ba54eaf878e3fa2d5950f5390904756f29d0e5ab00dfcf3d1ac3618b1b8c39846693c2bcd23659244126c38e499b55bb13bfb9de6c121b560a9dfc45a1da30c79fcc7c8324769f5414a217dbbb6e688d994f5c273ec098fafedd26fb87c595e65a0144b8cbc2748c674f4c8f384289ee4a82d814c8524d3328f0cadda717bc5645266906b6286a6bac48cbc4e82",
      "b22884d410af053056bd8c20f45defcbf6a7e5f164143a01be374dee5add83f6bda9c756510df6bface0be1a897d0203cf3c811fd58657b5be050000",
    ],
    [
      "ETag",
      "Brdrq53J0FvM1iVApoHmIw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxNjUsImlhdCI6MTYyMDY5MzU2NX0.aN_MEU67_Fq1MTeWGUOnjFW1IuvpDOwygcwodlEQL5X87NiCKmJ3JdU2WP97TsH8vE6P2uFD5TK6SOAgBPfebiCqLFsnRkHO_a_T3SAfvX5M0ofBg8F3stPEgsFZW6w0mK86PQsLJPHziqLgtEzUPFNe4L9Lzd0hNaAZ9ndPkXnkN2M0JUwNEBkGo7Wu-SjO5B2ljYwLxMfiySOHwPHriXxj5pxfy1ahM_7yt3s6erMjvjI_Fn9HTFh480MayOnTKtSC6nlLBssW6mdiQwVYhrvsJRi0tDIkWx5oGDJuLuU-5hmRykp3_je9ZvDmA823dX09Vr2yXj9fmnyisduEzQ"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff1dd04d8e82300040e1bb742d26a045989dc89f2215c4eac8a6412ca4d511a4580133771f321778c9f73e20cb732a0469ab1b7d802fd0679a39cda7416d58a4a4ebb0f5e069fef6e6cb8168a2969d8db02d4bed6591f5edc00cff6977552705237efb44fbe298bc3d2e7a27c532d397df52ad1e6778c2b37bd1a16b14579e911e1d260a7ec5d9c63d346817eb43afe34510ab972a4412565b142c84c1b9f213861836d68a328d259745e4aa0ad57d67af293b3eb8ce9d178cb6a5d8a2c73ddcc6ab7a93bced2c8533d53e3ac1ca426768aaa586d730e95f1667631d4660026857b3860ac246ee0c9ae604fcdb49dbd7741c60d1aca10df8fd03b11c30d11a010000",
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
      "Tue, 11 May 2021 00:39:25 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-81-1620693471142",
    },
  })
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
      "ff85546b6f9b3014fd2bc8fbda2490405e52b446295d2325a423a455354dc83817ea9660824da6aeca7fdfb569ba5695da4f60df73ee39f701cfe491175b322609cff635544fdf1e4442ce08289ae16de8f1bffe65b85f6cefeceb4756eded7d08d9648208ae5992eeca1c5a52d4150339deacdb5925ea925642b430516be8b49c7ed7ee8f7aeec071dc2ef224e4e982178fc8be57aa94e34ee7a4ddce84c872a025976d2676aff79d43b75356e20198929df7921d54919dcf45bfe78251c54531d9acd1402da18a6147798e16fe33b7c9f9fbd46d4e77ed0cc107ce803226ea42695b98828922e5595d99ac64fc4c8ccd372f64ed2ffc59643191d7bb222ee80eceac2d5534564f255897e16a69cd83cb55b89c46f35510af6757fe72da9ead169b65b0b66eaffcd0b7144d72305c6b629d9b538007d4df8254bc30ea91bed6ca2f0d9a7f1c8b26a0b48426180fec3e7586f6284993014b873d2f496d48926132f0682fb1d9c805779b00459e11352c5a8882a5b6edb9692f06d71ec5aedd73639ad2514c07ce60d41d78bd9e6393e319f9537105175c9642f2a643e4369c477e1c859b60368d7c53424aeb5c5d34c674016f3d2a2c10419fd474d4512e5049b77b1e447e389d45f31bbf99f00232ca9ed67b9c714a730988a615364f41b5145b6c1809a64bff02c16662d7a7a024e35fcf44f75cbb78d3f2577a8403d4769579927514ce831fc6ce097143f3da400ecd0b29d1f23dd686ae8fbf11894bda64213f377e78479aab1052a8a0605f4f13c126f0e5b7765a7cc4e2eaa38c5478c6dd61528bb00a9a1de2a6dc17b6d7f75cc77ca98a56ea43cc73faa7aee91c3a23eca0502f15358b8f853662b57c05e9dfc926084cb78eff008bc651cc78040000",
    ],
    [
      "ETag",
      "R5izEFRqLdY0Pkcrq0qReg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-81-1620693471142"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92dd4ec2401085df65bc2d9122166cc245115412fe848217c690653b2d85b65b77b710427877672ba25113bd6967a6df6ccf39ed01367116800bcb387a2d50ee2f22d48fa698a02a12ade8968b4c2158809a45440e469beda0cd77f36a277ae297f36d0355e0b55a4428bec294817b8030c62450e03e1f206329d21a174991668bb2b340ef73339cfa93def09efa5404a61fcefa7dafddefc2d13a2f064cb345c9ff63ede568c15a2c2718a2c48ca3d1924bb146ae7bc6a662699e60458942725450c2e583488a226752880a4d2a4dbb623bb5aa7373556fd876bd46602238d3b1c8889d4d491f68a15932113b72090e01b22cc970585eb7348e83d288297b43dfa997fabe02242d8c135cfc0d92de15a3cff0819d22f8ceb15414993e5377fd91f7db7194e9e7511dcfeffe2094a6a4ce88df1b74a7be37181beee5e4bdbdd7a8c65250900a4d8676b5debc6e38d5f7586f85899adee36a59a0059cd1dff1106b704396283cbe01c6ee4e9e7b020000",
    ],
    [
      "ETag",
      "MOkvMBcwV0DgWc/Vv7esdA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`stamp`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-82-1620693471142",
    },
  })
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
      "6b",
      "4f",
      "db3014fd2b96f705a43ed6aceba01362a5642ca24d4a92c21842ad49dc6048e2d4768a2ad4ffbe6ba7a5ebd8d8e749951afb9e73eeb90f3fe34796c7b88bef58322fa958be7be077b886a92209dc3e2d3a73371b1e7e77cffb3ff28b27b14c4787c9d11120986649921529ad4b5e8a88caee386824829705119cd741a87e60d55b1deb7de7f043fb53abd5b68027693a1bb0fc11d8f74a15b2db6c6e723712ce93949282c946c4b397fbe6c26a16823fd048c9e66eca266491cdb7931ea73c228af1fc681c8081525231a119612958d832e3bb2fbbd20d46b24602e0058b2889225ee64adb028988e7339694c2a8e2ee3336367ff9c0813db0fb21ea7b6337dc9b924c93a7fb88483499082acb54d5d0146a9ab1944e583cad22c523faea7b438880837b22a99ca2ab6fb66f2334f0ae6c7f6f2a15780421d70bd1c039b7d131eab9a76857cb71d1d875ed20447bc7fbe8ccf7c6237472bd838122623a23e0e3942848a4b4f9b8fa74f46415950a40ebb63baf878d573acab8604a17ecb8a1edf7faa17369573d1ed08444cb600e5d9e91545240134132aaa818f2980265e4054ee8786e6f000cd3b8d1062171f7e6794b089705d50695f9c7a13384e27ac3115ead6a7f87f57cbf770dd24408b2fc2d06763b6d4ddfb22f495a1a88c19b5365635105700beb6c9b938557b72bf8d530ec5ca58e2fc6b67f8dab2b9fcea8a0796424df68a3019bc03f9fce668f010b9b0c69601b14938a455227890435e19065c66ec5fed8e958561b1bb050af62a0ae9f7b1eff31b2ce511a7d2a0417be595e7d846cd2786139f484c51766f5775cced757199592245adee528232aba677982244b72d01614cdb840b3328f34adda7473454452663457480f4d76d1cbdc1b28288b820b45e3ad0a00aa471284bee39eed7f5e1f4fae433b80a7a7d04dab7b60ddeaa24c29d574ffdf326e",
      "abe1683fa79e6bc336ff045db661a6ce050000",
    ],
    [
      "ETag",
      "wv6qNmM9XNKCZnQwrylP9g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxNjYsImlhdCI6MTYyMDY5MzU2Nn0.TxVwkT1aXr8oAgBMtHKHvHHZVPpyFjcFP25CSBjWTGnG29owke32aJxQ4Hfz9rt6YmCxItSRZhSmWnNssdRmQZc45JIQpJIWwIpJo1ZHYVkw64lso0bifQdTe0fUbS2Q4FYTsUJDEJmwsPPjgTnSyRRVmLD39TkzKNjtlVX4BzAHcDEC3e-RtU6Z5wjPsqqe2J58Hwxzok5ylW0j0ybYhqkYdiFzhi3mF3ulVHdxXbxjBBgbpNusdcTV2tJDYlzf5tv6uJGRmTcy7mnYT0r9vRcjLBv_USkMGth1oyQtglvcC1-ynZESBMI0Y69Ai0F-69-meQ_Mi9uHcl2FyBZ6Dw"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff1dd0cb7282300040d17fc95a1c018dc45d191e02a3220f013799c004ca3b104a854effbd4ed77775ee0f20594639c7535fd30e9cc04224b4cdb60e53545ce4bc345c51ad1a67a4833129039475f1351b9a663b6d031f9969bbb1112d6268c09d2ce1efe0b947d774e52a0f3bfd23a4edbd36bd60e0858d758c67e4b6911e57c4beced0f702afb6c43cf4055e2664d71d094c89b432eb2b6ea123cacc64e2b9a94606796f95074d67c57165d3a294c1d96f538a1f103f53e40cc27e41cd2418e415255488facb046ddb2d2e7aa2a8392e3be5c6b53abfb35bfd59810da02f568e94bf0338c9078436e0df8ea785d1f7009592918ee0f70f48589e2a1a010000",
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
      "Tue, 11 May 2021 00:39:26 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-83-1620693471142",
    },
  })
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
      "00000002ff85536b6f9b3014fd2bc8fbda2490072191a2354a691729211b218daa6942b6b950b704536c3a5555fefb2ea6e95a556a3f61fb9e73cfb90f9ec9bd281232254c640f35544fdfee2423670434cdf0d5be0567050b6f5f25d9843f0457c97c7f93cd6688100d4bd143994347c9bae2a0a6bb6d37ab645dd24aca0e26ea78838ee3f66d7732188e1d67d8479e823c5d89e21ed9b75a976adaeb9db4bb9994590eb414aacbe5e1f5bdf7d8ef9595bc03ae55efbd640f5554ef73d1efb9e4540b59cc765b34502ba862385091a385ffcc849dbf4fdd15f4d0cd10fc283850ce655de8c616a6e0b248455657262b993e1363f3cd816cfd95bf882c2ef3fa50c4053dc09995504d63fd548275196ed6d632b8dc84eb79b4dc04f176f1c35fcfbb8bcd6ab70eb6d6fe871ffa96a62c07c3b566d6b9b9057841fd04941685518f9ae746f9a541cb8f63690828ada00dc663dba58e674f58cac63cf5062396dac098c7c6233a60369f0c619830a0c833a286450b59b89c31d74927b13be14e3cecdb5eccfaa334b659e238341d639b18399e91bf95d07021542995683b44f6e132f2e328dc058b79e49b12525ae7faa235d614f0d6a3c60211f4494dc7262a242a35ed5e06911fce17d1f2da6f27bc828cf2a7ed03ce38a5b90244d30a9ba7a15acb041b4682f9dabf40b099d8cf535091e9ef67d2f4bc71f1a6e5aff40807d8d8d5e64bb651b80cae8c9d13e29ae6b5813cb60752a2e55bac0d5d1fff201297b4cd427eedfcf086b44f21a45041c1bf9e26824de0cb7fedb4f888c5d54719a5f18ebbc35523c22b68774898725fd823d775c71362c095fe10f33ce7d4b5264793110e50e8978adac5c7425bb15abd823088e30f4cb78eff00fa49488078040000",
    ],
    [
      "ETag",
      "0he1LeC8Wrdg9cqNGdAWYg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-83-1620693471142"
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
      "dd6e82401085df657a594cfca16849bc506bd5442d0aa64d1b635618100b2cdd5d6a8cf1dd3b4bad6dda26ed0dcc0cdf2ce71c38c0739c0560c33a8e5e0a14fb8b08d54c17739445a224dd729e49040350b188c887cbe1bd339b3c5adda2a706a61b0aa7eaecda6d22a4bfc194817d8030c62490603f1d206329d29acf9322cd56656780dae77ae87af3d174407dca03dd4f17e371a73beec3d1382f064cb155c9ff636d793460cbd7730c5160e6a3d6920bbe455f8db44dc9d23cc18ae485f0514209970f22c18b9c09ce2b34a9b41a959a55af5ad70db359ab99750213ee3315f38cd8854bfa4071c59239df914bb00810654986c3f2fa4ae338288de87234f52cb3d4f7152069619ce0ea6f90f46e187d860fec14c1778ea5bcc8d499ba1ddf757e3b8e32fd3ceaa6e3f57f1052515267c41b4dfaaed799389a5b9ebc77f70aa523380529516758ab9aadaba6557d8fb5c775d4f41e5b89020df019fd1dc358811db244e2f10dc0fcad697b020000",
    ],
    [
      "ETag",
      "X+HWPQMZ6BuCtG4SfrP0Pw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`amount`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "%1.54%" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-84-1620693471142",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffc5547f4fdb3010fd2a96270448fdb196525825c44a092ca24d4a9a80aa09356ee206431207db41ab50bffbce0e053a18fb7352a4f87cefde7bbe73f284ef591ee31e9eb3e4a1a462f9e58ecf710d534512d86d9d5fdc0dceca45d9be2f46417b541e0e7e91cba32340305d254956a4b42e7929222a7bc1a491085e1644705e07a2fa61a7deeab6bf76bfed750e5aad4e1bea244d174396df43f5ad5285ec359b6bed46c27992525230d98878f6b2df7c6c370bc1ef68a4647353b2092ab2f9b9e871ca23a218cf8f820918282515339a11968285d7ca78fe7d93bac148d64800fcc8224aa28897b9d2b68022e2f98225a530acb8f7848dcd370b3cb186d6c047033770fc9d9064ba38dc4544a2d94c5059a6aa864238d382a574c6e2b0ca14f7e8cc7347900107b7445219a2eb1f9667213474af2def0d93e3fa68685f58e818f59d53b449663b28701c6be2a39de35d74eeb9c1189d4c3730708a982e081839250a9494761f574b5b8f5651a900f4dc77fbfdb4f14a6719174ce913db8e6f79fd816f5f595593873421d172f2006d5e90545240134132aaa818f19842c9d89dd8beed3afd215498ce8dd708897b3f9f5e0bfc6541b54165def86ce8f6fd6ec7385843ae485a1acc63b5c05badc67e670baf56b5bf13f53daf3f0571220459fe91830369890f350cde4495d1b5660b6bb575d4c6ab9b153c350cd7b262c79781e54d71b5e5d10515348f0ce5278d366093f8e7d7b5beea8085cb0e3252412c158ba416890435699f65c66e55bddf3de8ee996f5311a1dee73a87fa8f90c71f669e354ac34f85e0c233f75b87a0268d1796434fe08f51c3199592249a26c8e1249292794a91193e7ae9330a43c472a40781427f3ab666cf130f6be884c428e6a5ae327deea16ad0eb68bb0ab7b53163a79ad0ffb5725335496b9dba8e05b7ea37a88e53c879050000",
    ],
    [
      "ETag",
      "1GKjCFufu2kpMU2Mu8CxaQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxNjcsImlhdCI6MTYyMDY5MzU2N30.JfLl84FUvnFuHHgBa3P-YCcegi3X533aOOr2CLCSqhyy1VofHMnQ-Oxr5uMVvGgsNAmInWF-SjWtn5DL85wl3O0ewU5Jrbjhf1N7I4jYmV5hodp5S1-ZywIhwf9MEMO0mYHDx7spe0f_FHYavNXMi5NnU68LyDHFg-yaBVEJEPHpoVFdw94aF4WI49RCCdE6wtPJcf9BX0-jzRH3FHazNtNocqMDCVJ19d_jo-gZaSU0pum9iU5hEh6YbMSW4wJP7SG0PIfWMn42l7SfIxIuMA-6MSqMCKXXIlefnFDOLyWztr7S321AS0FIHv9WTCM3pBJK1o4hG2dXF7tgSzX_1A"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "82300000d07fe9b3985140e8dec4822018342235bc10281d17196281d8b2ecdf67f609e7fc809c52368ed9f4b8b31e7c029943b4a6eb60b0ecac62cd3620726fbbd5d7a9313e029826e7224d1f0964338b77fbd00d423adbfe22be7dcfd68f11c7af1c2ba1622a2d72ba82464b7c2dac4a18421fa5860791d0dc3c7a4cf5a6c9ba8d7a2768732e497873b0eb9ad0aa9de0d020fd8e961e8d857f22ee85744962bdc8a6ecda5a8d4a684d913fc11c7bf892452ee1447ae95312434b0f586b1df525cc1d215bcea1bcf2337b6e705f865cab6d14d7b302568089a1e16ccc9a375733105a817f7b36c981bd036c9673c6c1ef1fa8a3c6741a010000",
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
      "Tue, 11 May 2021 00:39:27 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-85-1620693471142",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6f9b3014fd2bc8fbda3c08249048d11aa5748d96908d9076d33421632ed41dc1149b766995ffbe8b69ba7693da2f807dcfb9e7dc078fe4172f12322131cf6e6ba8f61f6e444c4e08289ae1ed7e74917ddbdf97d27e4806d6e7dfdedc7eb066d3292278c3927457e6d091a2ae18c8c976d3cd2a5197b412a283893aeeb0638e06fdd1d8b21dd3b407c89390a74b5efc42f6b552a59cf47a47ed6e264496032db9ec32b17bbeefdd0d7a65256e8029d97b2dd94315d97b5bf4632e18555c14d3ed060dd412aa087694e768e12f33894f5fa7ee72baeb6608bee30c2863a22e54630b533051a43cab2b9d954c1e89b6f9e2836cbca5370f0d26f27a574405ddc18991504523b52fc1380fd62b63e19faf83d52c5cacfd6833bff056b3ee7cbddcaefc8d7175e1059ea1689c83e61a53e3549f7c3ca07e0252f142ab87cd75a3fcd4a0c5ff636908282da10d464e7f444db73f8ed3d861a96b0de3b40f71ecc6ce905a719f8d6db0931828f2b4a866d14214a6eb32d7b5c6913976acc81ef647910bccc1873336139a0e9234268713725f7105675c9642f2b643e42a58845e14065b7f3e0b3d5d424aeb5c9db5c69a025e7a54582082dea8e9d044b940a5a6dd0b3ff482d93c5c5c7aed84979051b6dfdce28c539a4b4034adb0790aaa9548b061c49fadbc3304eb897d39062599fc78244dcf1b172f5afe4c0f71808d5da5df6413060bff93b673445cd2bcd690bbf6839468f91a6b43d7879f88c4256db390af5b2ff84edaab0052a8a060ef4f13c13af0eebf765c7cc4e2eaa38c5478c6dd61b2116115b43bc475b94fece1c8c107d1e04afd1b73cdfee8d8b5264793117650a8a78adac5c7425bb15a3e833088e3f775b70e7f00c77e11cd78040000",
    ],
    [
      "ETag",
      "y6HgXywps4zd23KxEC4z3A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-85-1620693471142"
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
      "8d92d14ec2401045ff657c2d11b0146cc203685512402d2526184296760ac56db7ec6e250de1df9dad88464df4a59d999ed9de7bdb3dbc2459042e2c93d5b640599ead503f9ac2475570ade8968b4c2158809aad88dcb66633cf0fa3f3dda86c4e9f26fd9ce7f6aedb2542856b4c19b87b8813e49102f7790f194b91d642c18b345b549d05bacccd7012f883f12df5a9884c3f9e0e87bdfed08383755a8c98668b8affc7dafc60c1462c7d8c516216a2d1924bb1c1500f8c4dc5d29c634d894286a8a082ab072b298a9c49216a34a9755ab586d3ac3b971776bbd1b09b047211329d888cd8e984f481169a715fecc8253804c8aa24c371757da5711255464c3918078e5de9fb0a90b438e1b8f81b24bd6b469fe1033b46f09d63a928327da26e86f7bddf8ea34c3f8fbaee05de0f42694aea8404839137097aa307c3cd8fdefba546f5200505a9d064d8a8db9d56dba9bfc77a254cd4f41e57cb022d0819fd1d77890637665ce1e10d164630e17b020000",
    ],
    [
      "ETag",
      "q5ZZERcd/wMy2UWSBplp4w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `id` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-86-1620693471142",
    },
  })
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
      "02ff8554fd4fa34010fd57c8de2f9af4035a4a3f92c6e32ade9154ea51aa692e9776810157298bec52d398feef3780551b3d4d486077de9bf76676962772cfd2908c88cfe28702f2ddb73bee9306014963dc35cd78602db7b3a23bbb78b01e07a951e8ae391e2382952c413759024dc18b3c00315acc5b71ce8b8ce69c37315173603435a3a31ac3aeded734bd833c01493465e93db26fa5ccc4a8dd3e68b762cee30468c6442be09b97fdf6b6d3ce727e078114ed63c936aa88f6e7a267090fa8643c1d2fe668a01090af60435982165e99a1fffd38758bd14d2b46f0960540838017a92c6d618a80a7118b8bbcca4a464fa4b2f9e683ccada935f194c96ce178276bba29c9eb53850a65b5ca4114896c286bac296209ac58b8ae23d9bd72e1ce2e31820e6ea900b1566e7e59aea528eb123456ce14d339578ea9b6a32c1cc79a7bcac9d9a9f2d39d2dae941fcb230c7a0e414896568e3dea2750ba7d6eaafdfe284b0295e8a00eaefaaa41b5813af423bf1f44836ecf8f54f0fd81dfefd1aeaf06431df4d0078a3c5966af5834e5a901941a7e57838ed6d7e930ec0c753f84de50d302e877810e6814aaaa0e64df208f399370ce44c605ab3b4b6e5cdbb3569ebb7026a66755654414bb775e9b2b8b78eb53629108faa4ae7d19651c95ca63b21dcf72cd89675f5bf5644c21a6c16efe80b311d14400a2694e372021bfe421368d5ccde6b667cf1c738a8ceab8af0e0841467f9e5e09de2eabba2cab77a965e895fe01704d93a2426ceb0fa2f5c87edff87f0ad375cd25cad23ca7bb8fd37f98bfc257abdae28b1e29d50eab0ed9ffdde3d320788beaece4f7c27297a4de7221821cd2e0ebd1417015f8f26770b89988c5bb893242e21a073510a54890433db06c53d9add93d63d0d787a402e7f25d6ca8ea8793297394196103a97caea8be9955a3ca50215e4018c439736ce72746ff0192362f3619050000",
    ],
    [
      "ETag",
      "AAg8EYvOu3OFqEw8n6u4RA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-86-1620693471142"
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
      "0000000002ff8d90416f82401085ffcbf40a8958435b120f6a6d6b628cc5d2431b62d675401018babb68ade1bf77163df4d80b3bfbf8deee7b7b867d566d21804d967e35a84e37299a573b84a89bc2685e6aaa3482036844cae4f17bb79a3d46fdcdf229ff48de7f7a913c4c46c321135aeeb014109c21c9b0d86a083ecf508912d9b65eabee44c6cca9b6ca6cf1367d9e862c94b4b5c2229acf47e3f9145ae78faddeffcb12b70ee4b40931418595449ba25694a334335b508bb22ed0d5d428891a3ab8fb912a6a6aa1885c56dc7bdff5fc7ecf7fb81ddc79dea0cf604152988c2a66a3156703434614211db91f780ca86ee4aa49f73d74b2ed709de236be9ac627837aa9881368b497f72e412664c3190e6d54830e48c12ff99299cbbefd057aa4fd81a6010000",
    ],
    [
      "ETag",
      "wxhSIDU2bPFjZfVz0UcvCA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxNjksImlhdCI6MTYyMDY5MzU2OX0.UvBFExDq91enj1K3Aw5ZityRNJp6uuq124ars34ZvTs0zpaLqDDjaqolIavkKzvvP5LsgHynYN56xXjq-ZsOpT-kdc2itPxEQQ5-oOwvjM5vc8O1hb8MO54z0RWRamW8lxsN0I0rOMgD9scgTbpSnmKWVD8TtXkX7Ziqx3x-xotB9qhgEn2qGRS_wXgGbngRIawEUZvKO3L5VE_ymnNHU-q9KsyABIHq1phYm1I8gSsXZ9-H6oI4G7c2JTIcC-8GZBli-bQkrihv9FMPMmtHdj0jEEEqLAUAWsXbJw0RaOTRsJSwaPmdKa5Mc9TtcceRe29DauYUUWbPeTNHoQNARQ"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff1dd04d7282300040e1bb642d0e0882e90ea280a04ccb4f85558686988202698012e9f4ee757a83f7bd1f50124287018ffd8d76e0053cca0d5c9375c8770e660451ebac0cac0ebda5915372407d6b7ded91118d15d2e4b7b36b3543712e64c65a9ad8422aaa6c3b7bfe087de573a92a16f2b7b35f799580ce21289653632ec7c490f114b4851acddb49eb50b099f92b5cf45a94b2d967387343b6f43e69903ef6b048fafc249f291825059d29b44beef9516c171eccf37bfbae532c346845374be4229a5da6ddbba3b8c0c1bd66a69f5a2a8b956634af4697f2b1002b4025af051d70fde4ea5b0857e0df8ec707a7cf010e2d0515e0f70fe4b9ecfd1a010000",
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
      "Tue, 11 May 2021 00:39:29 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-87-1620693471142",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85535d6fa24014fd2b64f6b52a568a6862b64671eb46718bd866b3d99061b8d06981a1cc60631afffb5e86da6dd3a47d6266ee39f79cfbc13379e0454cc624e2e9630dd5e1dbbd88c8190145537c0df2bdf9f3a9108bfefdea66319fd7fbe9e13a9d4c10c11b96a4799941478aba6220c7bb6d37ad445dd24a880e26ea38c34edf3e37edd1c01af6fbd639f22464c98a170fc8be53aa94e35eefa4dd4d854833a025975d26f2d7f7defebc5756e21e9892bdf7923d5491bdcf45bf678251c54531d96dd1402da10a21a73c430bff997174f93e7597d3bc9b2278cf1950c6445da8c616a660a248785a573a2b193f136df3cd816cdd953b0b0c26b23a2fc282e67066c454d1501d4a3016fe666d2cbdc5c65f4f83e5c60bb7b32b773dedce36abdddadb1ab757aeef1a8a461968ae31312ef5cdc30beac720152fb47ad03c37ca2f0d5a7e1c4b434069096d301c9a36ed3be6284aa2214b9cc145949810454e34bca083c864230bac38028a3c2daa59b4108563c7a6635b6608a378145af6050d1dc7b142b06cdbb112db722890e31979aab8823997a590bced10b9f597811b06fece9b4d03579790d03a53f3d65853c05b8f0a0b44d027351d9b2817a8d4b47be905ae3f9d05cb1bb79df00a52ca0edb479c7142330988a615364f41b51631368c78d3b53b47b09ed8af535092f19f67d2f4bc71f1a6e5aff40007d8d855fa4bb681bff47e683b27c40dcd6a0dd9b70752a2e53bac0d5d1fff221297b4cd42ae77aeff9bb44f3e245041c1be9e268275e0cb7fedb4f888c5d54719a9f08ebbc36423c22a687788eb725fd817f668d837890657ea43cc190c4e5d6b723419218742bd54d42e3e16da8ad5f21584411cbfa7bb75fc071479a23778040000",
    ],
    [
      "ETag",
      "Tmv0JwnoF1jLVFDDuvAyQg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-87-1620693471142"
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
      "5b",
      "4fc2401085ffcbf85a12c05ab0090fe5a2360222142f31842cedb414da6edddda284f0df9dad88464df4a53bb3fd66f79cd3ee601d6701d8b088a3e702c5f6244275ab8b31ca225192969c6712c100542c22327e5d2bab738dde287cbc972e6e7add873ba7d52242fa4b4c19d83b08634c0209f6d30e3296228df93c29d26c5e7606a86dae3727ded81d5e529ff240f7c369bfefb4fb3dd81bc7c18029362ff97f8ccdf606acf8628c210acc7cd45a72c157e82b57db942ccd13ac485e081f259470f92212bcc899e0bc423b9566a352b3ea55ebfcd46cd46a669dc084fb4cc53c23763a217da0b862c998bf904bb00810654986c3f2b9d15105a5115dba43cf324b7d5f019216c609ceff0649ef92d167f8c00e117ce758ca8b4c1da98bfe8df3db7194e9e7515dc7ebfd20a4a2a48e88e70e7a13cf198c34373b786f6f15ca91e014a4449d61ad6a36cf1a56f53dd60ed751d33db612051ae033fa3bae620576c81289fb37a6a709a97b020000",
    ],
    [
      "ETag",
      "ixkt6CKeTPfYWsIevEDXVA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-88-1620693471142",
    },
  })
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
      "02ff8554616f9b3010fd2bc8fbd24a694208092452d46529eb9052d211d2289aa6c41043dd00a6b6699555f9ef3b4cd336ebb64a4860df7bf7de9dcf3ca12dcd376880429adc9784ef3eddb1103510913881ddc7787bb7e8a645bcc08bacc7b74b51fcba7a1c0e01412b96c059919233c14a1e113198cf9a0967658139636790e8ccb6cfda3d43eff53ba6d56e9b06f00449e309cdb7c0be95b2108356eba0dd4c184b52820b2a9a11cb5ef65b0f46abe0ec8e4452b48e255ba0225aff173d4f59842565f9703e0303a5207c45324c53b0f0cadc849f8f533729ce9a09801f68447014b13297952d4811b13ca649c95556347842cae69b0f347326ce38d0c6d3b9179cac715691d7a71a16da6ac5892853d9d0d650534c53b2a29b751d29b6da577f7a051170708b05116b6df1cdf11ded756bad0db5736de45d68c7095c4f9b7b9e330bb493f353edd29fceafb52fcb230c38df102169ae7c07384c49e5f9b9b5eefb03ad085882681d5c597a0fb76dbd1fc6a115c576a71bc63a09433bb4bab813ea51df24e626241878b2caae583867b96e7474d2b1e0e91aa6199906b6fac0ebd871c7d6edb8afdb06b1ec760fed1be89153492ea82898a0757fd1c277036715f8736f3c0a1c55468ca18717b5b9aa88b73e251409a0ffd4b5afa29481527558ae1738fe681cb8374e3d1f1392e06837bb870989712a08a031c71991845fb10d340d5d4f676ee04ebdd10418ead0af0f0881063f9e5e09c1ae505d96ea8d6681ef7a97cac0017183d352411eea0f342ac02bdaef1bff4e33f2fdd112a431e778f7470ccae99915fd2f120aaf56b5cd83641b556a879581f63ff7f03410dca73a3bfa3e77fc25aab77c12134ef2e8e3f101b00a7cf85b38dc51c0c22d051921610dc31a894a24e2a41e5a9a29bb35bb6be996d9450acce5bb585fef1e4ea7ca51652419c9e57345f51d558daa42a57801411066cd5307b5ff0d2736a24223050000",
    ],
    [
      "ETag",
      "wfkjW5lpfWaWm6rkYspzMw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-88-1620693471142"
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
      "d1",
      "6b",
      "c2",
      "30",
      "10c6ff97dbe35ab0d53957f0418738a1c8ece6c31822b19e5d35cdd5247514f17fdf258ee1e35e92cb77bf3bbe2f6738946a0b096ccae2d8a06eef0ab40b5764681a690d5f35298310005a5130795f88e9873ca5e5e02153a36394ca56a58be19009937f61252039c3ae44b935907c9e41890a796cbdd67e2363b6ad9d329bbf4fa6938c858ab64e982fd374344e2770096ec6eac3bf46569700f6b4c970871a558ece45ad698fb99db9804654b5c4d050a37334e061df283435b5d044212be1601046fdb8d37feaf61ea3a81733282917b624c5ecf28dbd81252b6446df9c0f1ca07dc95177fe3cb1dcf5194e1e70d66e7bf15f2f72bdd5efc2716bd1bc6a6277069db1ced5e43339e3960359dd6000b9e05f7e29edf57df90119ae0a6ac2010000",
    ],
    [
      "ETag",
      "+gaGYlvLi85RnAq1LlynLQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxNzEsImlhdCI6MTYyMDY5MzU3MX0.JJjSgjUuHGRhi4qqyHQG498nx1TZ865lruOYT5LCbXQjTZMOFNgmU57WyLG9INYT4pip3Vgp-CqQHpZnmnA2JcuI7oEqP6_zkIi49jiCzLW36r3KpBoZ_uHJ3CgantTSVngWTmJHVBPuCL7V6QanPJJyQy_RUqSxhwvP0YDBPNR-sUO18WgA2mxVBjUtNdVdzNxHZzWyuYAOqnkbdmiqHO80wnVqpj4O-ylpba8Z6MKsePMMr7b2zRswmfYFsAqpmThxS8iQkiJxGmxa7y3vZvjV-P9MPDvkjocvhCwAieJqw9kOl0-SNeqTygskHixRNyR_y7czdanJu_5n4x86lQ"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff1dd0d97282301400d07fc9b3718a4880be892d0ac5159796974cc06b86c518026ac0e9bfd7e9279cf3442ccba069687b2d41a077d4b1913bcc865fd2f12887fa0387ded2317a7f649394370fd147eb1273c710d3594a41923eadf77117edc56995d3f6ecad131b270a573d1f8bdd443ae7939e54b39d5754f3a0b8ca683b2fb8c8c26943f8656c1d570712f66fa67ddd9a5a69c57858e5ebd0edeac0adfd328020dd90e5e306e71f324932a1991fe898dd2ce545765414f400fad8ba6475ff8c09c4c25f18f8607cdfb1ecc39ba9f576b361023b8d8fe3c565561e633440a065aea0a1f98b6b5aae3b40ff76da76125e011e30050afdfe017bce77b31a010000",
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
      "Tue, 11 May 2021 00:39:31 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-89-1620693471142",
    },
  })
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
      "b82621097910295ab3942e9112b20169b54d1332e642dd124cb149d756f9efbb98a66b55a9fd84ed7bce3de73e7824373c8fc984443cbdada0bcff742d22724240d1145f1ffefeba33e1c1b1178bc578fef5e633b5823c9d4e11c16b96a4bb2283961455c9404eb67e3b2d4555d0528816266a8ded5677d8338776df1a75bb560f7912b264c5f31b645f2955c849a773d46ea742a419d082cb3613bbe7f7cebed7294a710d4cc9ce6bc90eaac8cefba25f32c1a8e2229f6e7d3450492843d8519ea185ffcc383a7d9dbacde9ae9d2278cf1950c64495abda16a660224f785a953a2b993c126df3c581f8ceca9907061359b5cbc39ceee0c488a9a2a1ba2fc038f7366b63e99e6fbcf52c586edcd09f2f9cf5ac3ddfacb66bd7372e178ee7188a461968ae31354ef5cdc50beac72015cfb57a503fd7ca4f0d5abe1d4b4d4069094d301c9943da1d9b76944423968cfb832831218ac6d16840fb91c96c0bac38028a3c2daa59341779dfb647e3a165873d248756dc8b439b997138a05194503007bd7e9f1c4ec85dc9159c715908c99b0e914b6f193861e06dddf92c70740909ad3275d618ab0b78e9516181087aa7a6431de50295ea762fddc0f166f36079e134135e414ad9bd7f8b334e682601d1b4c4e62928d722c6861177b676ce10ac27f6fd189464f2fb91d43daf5dbc68f9333dc001d67695fe123ff096ee376de788b8a059a521fbe6400ab47c85b5a1ebc31f44e2923659c88fade3fd24cd9307099490b38fa789601df8f05f3b2e3e6271f551462abce3ee30598bb0129a1de2badc27f66084e431d1e052bd890d",
      "06f6b16b758e3a23ec20574f15358b8f853662957c066110c7efea6e1dfe01a7ca873278040000",
    ],
    [
      "ETag",
      "zxZw0ezE9HHH8CBk+a4Tng==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-89-1620693471142"
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
      "00000002ff8d92dd4ec2401085df65bcb4248058a0091745501b01f929266a0859da6929b6ddb2bb1508e1dd9dad88464df4a69d997eb33de7b47b7889521f2c5844e13a47b13b0b518d74314699c74ad22de3a9443000150b89dc6e07dbcee355bf3d5266b07e38bf63a1f3b469b58890de121306d61e8208635f82f5bc879425486b1e8ff3249d179d016a97e9e1c41d3b831bea13eeeb7e30edf5ec76af0b07e3b4e833c5e605ff8fb5d9c180155f8c314081a9875a4b26f80a3de5689b9225598c25c973e1a184022e1e8482e719139c9768526a344b15b35a369b17b57aa552ab1218738fa988a7c44e27a40f14572c1ef30db90493005194643828aeaf348efcc2882e9d816bd60a7d5f0192164431ceff0649ef92d167f8c08e117ce758c2f3549da8ebdebdfddb7194e9e7511ddbedfe20a4a2a44e88ebf4bb13d7ee0f35373b7a6fef14caa1e014a4449d61a55c6b5cd6cdf27bac575c474defb194c8d1008fd1df711b29b002164b3cbc01fded72ed7b020000",
    ],
    [
      "ETag",
      "xxNxDYCMBQt6fqV+KagIZw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-90-1620693471142",
    },
  })
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
      "fd",
      "57",
      "90",
      "f74babe5838f242491a22e4d598794921448bb6e9a120326750b9862d329aaf2bfef304dd3ac5b2b21817defdd7b773ef384ee6916a1210ae8faa124c5e6d31d0b50031181d7b09b7c778373a179dc89a6eaf5e96731effe38bf1c8d00412b16c7699e9026676511123e5c78ad75c1ca1c178c35215173a036b59eaef60646c7d4b48e0e3c4e92784ab37b60df0a91f361bbbdd36ead195b2704e794b74296beecb71ff5765eb03b120ade3e946c830a6fbf2f7a92b0100bcab2d1c203032527c592a498266061cf8c822f87a95b14a7ad35801f69487018b23213952d4811b22ca6ebb29059d1f009499baf3e90674dad89af4c660bc73f5ae1b422af8e15cc95e5b220bc4c444359414d314dc89246ab3a92df2b5fddd90544c0c12de684af94eb6f966b29fbad9532524e94b173a61c26b01d65e13896e72b4727c7cab93b5bcc95d39b030c388f08173493be7d1c24a4f2fcdc5afbed8156042c40b40e2e4db587b5be3a08e2c00ce3bed10d629504413f30bbd808d470d0219d28201878a2ca2e593863190474156362c47a5f3775adab750cad17695d53ef19661087aad937c2ae86b60df4bba0829c519e334eebfea26bd7f6ada5ef2e9cc9d8b7641931861e9ed5e6aa225efb14502480dea96b5b452903a5eab06cc7b7dcf1c4b7afac7a3ea6648dc38df7001312e3841340e302a74490e28245d034349f79b66fcf9cf11418f2d0e73b0447c39f4f7b82bfc96597857c23cf776de75c1ad821ae70524ac863fd81700e5ed176dbf87f9ab1eb8e6f401a1705defc1583727a9d8afe0f098997abdae64eb2eafc7ea5a3edaf2d3c0d04f7",
      "a9ce8e2e17967b83ea2d97c4a42059f8f1f80058063efc2decee2860e196820c17b086610d79251216a41e5a9a4abb351bc647373524c1857813330683dde95439aa8c24259978aea8bea3b25155a8e42f2008c2ac39f2a0b67f0064e896f123050000",
    ],
    [
      "ETag",
      "lXRbGt1SsNdL0WB+tP5ZGQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-90-1620693471142"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d904f4f834010c5bfcb7885044a2dd2a407ab446a48a3d8c68331cd769922e5cfd0dd258610bebb03f6e0d1d3eebcf9cddb37db4391d7292ce198679716557793a1791d2f09eab6349a8f866a8d60011a913189b75e57047974499fef1e3d11f955f8ee67ab15135a7e612560d9c329c732d5b0fce8a11615f2d8e1a02647c64cd78cca66bb0b9fc284858ad251d8eee3f87e1d8730587fc69ae25f239f8305673a26784285b5c43145a3e88cd26cc605b5a89a126d4dad92a86182a746a6a86d8422b259b103c776173367117873df75e733064b92c2e45433bb7fe36c60c88832a16fde0f1cb8d6ebcea07e51c4e61ad36b871d1f687cd7701ea35ab4400afea42837bff5f003412b155081010000",
    ],
    [
      "ETag",
      "e53yk9iHqdJ8D3aH7mEW7g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxNzIsImlhdCI6MTYyMDY5MzU3Mn0.OFkUjHyvfrquXc63X1XKxsVEjsnd7lm202BsMEFCEnEp8TOvLq6AMtTTEtp0SLGJIvjj8iySJoWQyOpOjhOE5zb_geFWm1HAxFF36iVEIjWMWEdsH_cy7yIKn1JxnpyEA30l9hUGTuWEfTa6cwhvWVexgSlYG99irxG97aBC0zBoi5CzTWlv-zalyLZZq0wy91hria7ez9Xu_IbgWTWmBdjgnly9PycyMYKmkYqEtU5PfWz2LvJLVi2uyPrk9ygHBSuE8YMuTg7A5PfO02jAcgEsKC5TR4rcl368QG_RlhK_OXPyY6juoT2F6V063U4LMaq6OLOitlP0EsPk7PswpA"
  )
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff1dd04b7282300000d0bb64ad0ea5b403dd41501050898054379908e1231f53921a63a777afd323bcf703485150ceb1b87674041f4011dd5a148b90990eaecb4312c897d2f0915b05c242dc8bfdc7ba0c8d78b85ab23dd4e6010f7dc5a5931f1fdeb6b09b8d24cc836c778f4dd5f270a94e598a247423a32751e2ef7c15b1dc28bc399b3b18a32e7bacb573c24c5f9f82edcd9dda3667c9370e46e87b4d95d671c0ba77915cce3bb5ba6e6e470853828a74556751a8e76868a03d1fb57a9ff30c9f3c47a8b8dbea7b52865213fa1dd94be95e0c0ec5ea33ffb2cbde043340efac9d28c7ed93fbfa665933f06fc74231fa0c702899e8047eff00398f2e431a010000",
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
      "Tue, 11 May 2021 00:39:32 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-91-1620693471142",
    },
  })
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
      "db",
      "40",
      "10",
      "fd",
      "156bfb4a123b37c791a21205532211a7380e505595b5bb1e9b05c7eb7ad7148af2ef1daf090521c153bc33e7cc3973c913b9134542a68489ec770dd5e3975bc9c811014d338cca07e1ccaf1942aef2e10338c9353bfd7b319b2142342c4577650e1d25eb8a839a6e37ddac9275492b293b58a8e3391d67dcb7c7de60e83aceb08f3c05797a2e8a3b64df685daa69af77d0ee66526639d052a82e97bb9778efbedf2b2b790b5cabde5bc91eaaa8dec7a25f73c9a916b2986d3768a05650c5b0a322470bff99093b7e5bba2be8ae9b21f85e70a09ccbbad08d2d2cc165918aacae4c55327d22c6e6ab0fb2f1cffd45647199d7bb222ee80e8eac846a1aebc712acd370bdb296c1e93a5ccda3e53a88378b337f35ef2ed6e7db55b0b1aecefcd0b734653918ae35b38ecd2bc007ea27a0b4288c7ad4841be5e7012ddfafa521a0b4823619bbf6983a13db632973793a198c586a036313e68ee880d9dc1bc23061409167440d8b16b2489cbecdfb891733db1dc6c309a3311d8fd2983aee8873dbf33044f647e44f25349c08554a25da0991ab7019f971146e83c53cf24d0b29ad737dd21a6b1a78ed51638308faa0a77d931512959a712f83c80fe78b6879e9b71b3e878cf2c7cd6fdc714a730588a6150e4f43b592090e8c04f3957f8260b3b1ef87a422d39f4fa49979e3e2d5c85fe8112eb0b1abcd2fd944e132f866ec1c109734af0de4befd20255abec1ded0f5fe1722f148db2ae462eb873f481b0a21850a0afef936116c129ffed70e878f583c7d94511adf783b5c3522bc82f6868469f7993d7207b6ed1103aef4bb9ce3ba87a935359a8ab083423f77d41e3e36da8ad5ea0584495c7f60a6b5ff075f8d2db878040000",
    ],
    [
      "ETag",
      "oxi1AXbindWl4xe1dXbFzQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-91-1620693471142"
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
      "00000002ff8d92d14e83401045ff657c9426c522ad243e50adb5b1adb5a0899aa6596168a9c0e0eea2699afebbb3a8d5a889bec0cc7066b9f7c2061ed322060f1ed2c5538572bdb7407d658a29aa2ad38a6f25150ac102d462c16467d25d3aad7e8ffa17457013dfdd9e05fbca3f3e6642454bcc05781b4852cc6205defd060a9123af4594557931af3b0bf4ba34c3209c0ec67dee738a4d3fbe1e0efdeeb0075b6bb7180b2de635ff8fb5d9d682153d4c3141894584464b296985911e189b4ae465860d45958c50410dd70f1692aa5248a2064f1a4776c3760f9aee51cb69dbb673c0604691d02915cc5e07ac0f3469914de9855d82cb80ac4b369cd4d7671ea7716dc4948371e83ab5beaf004b4bd20ce77f83ac7729f8337c60ef117ce7444e55a177d4d9f0d2ffed38cef4f3a8533fecfd2094e6a476483818f582d01f4d0c377bf7de5d6b5413491ca44293a1dd743a876db7f916eb0999a8f93d9e96155a1009fe3bce530d5e223285db574c761c1a7b020000",
    ],
    [
      "ETag",
      "8PBh43GEoGKnSVdZYFS+sA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `date` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-92-1620693471142",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8554fd6f9b3010fd5790f74babe58300211f52d465096d91529212d2aa9da6c41893ba054cb0e99455f9df7740d336ddd64a4860df7bf7de9dcf3ca1079604a88f7cb6dee434db7eb9e73eaa212af11a76bfde92d3cdada7ff9e05c9f9d8c4e9cd86689783012058c112384e235a173ccf0815fdc5bcb1ce789ee28cf33a24aaf7b47acbd454b3a71b9d56cbd0802768144e58f200ec3b2953d16f36f7da8d35e7eb88e2948906e1f1cb7ef3516ba619bfa7448ae6a164135444f363d19388132c194f068b3918c805cd9634c62c020bafccc0ff7698bac170dc5803f891118a09e179220b5b9082f02464eb3c2bb3a2fe132a6dbef940736b628d3c65345d38ded10ac7057975ac60a12c97191579246bca0a6a0a5944972c585591f4413975a717100107775850b152aecf2dd752945580255d2903e544193a63e5906c3bcac271acb9a71c9d1c2b67ee743153bedf1c60c07540856449e9d9c37e440bbfcf6db5ff3ecc82802578a882cb8e6ae25657edf9a1df2161576ffba14a7dbfeb77da58f755d233a811f814034f16d94b164e78d26d85baee9b3aa15d5d27a64ebb668f9076c7ef0481865bba618446d8ee05685743bf3226e99889940b56f5165dbbb6672d3d77e18c869e55961162e8dfb8325714f1d6a7842201f4415dbb22ca38281507653b9ee50e479e7d6555b331a16b4cb6f30d4c47882341018d331c5349b30b1e40d3d06c3ab73d7bea0c27c0280f7cb64708d4fff1f44af0b669d96559bed1b82860f726e1158ef212f0587d204dd5d4ba0af3db46bb5dedff9986ae3bbc01759c6578fb2e0615994641ff874e892f5795d3bd6e0b156a2f2ed0eee70e9e1a82eb546547970bcbbd41d5964b439ad1847c3e41002e039ffe15f65714b0704941464858c3bc125188908c5673cbe2d26ec56e77f46eb78d4a7026dfc70c5537f60754e42832d29826f2b9a2ea8a968d2a42b978014110c6cdb19d3388fe0159bf73fc22050000",
    ],
    [
      "ETag",
      "+ZcFqZT3zPdnHD6apYqc2Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-92-1620693471142"
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
      "ff8d90c16ec2301044ff657b4d24121015481c4a15b551a394a670420899b0b801c71b6ca71542f9f7ae03871e7b89d79337f68caf70aaf41ea6b0abe4b945737990e83efc50a06d95b3bc34a42d4200e8846452a5ef723159e65a0dcf3279d375a66a94b31913b6fcc25ac0f40a870ad5dec2747d052d6a64db766bfa13197397c62b69be4c5e9282859af65ec85759f634cf12e8823fb6e6f42fcba60be048bb020f685097e85334868e58bad417b4a26e1486965a53a2851eee7f48436d230c51c84a3889c3681c0fc693e1e8318a4631838a4ae12ad2ccae3e391b38724215f4c3fd2062c0f423573df4dfef5ef61deed3a6dbdc4df38b43bb30c4092cfacb07b720cfe4c3390eed4c8b0194825ff2b572b77df70b6c261b14a6010000",
    ],
    [
      "ETag",
      "lIOgP9TNnl3qgEKnmLlmeg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxNzQsImlhdCI6MTYyMDY5MzU3NH0.VBbp2twuIpS2o36C6qNO2uxP5ASQrhmITbPP7ZoxQdD5ODb8_C3LDp4g-5BLAuP_LgFNllGMhgDg59YDbAhEIybMVGZbV8XyuCAGMMpqmT98HaLbFRQ9N1yZbyL8_y1sfrvuAQ7WmwUpfTQ30aohQ56vHRCkDECFB6c4dGlqhdc1JFq38WiKBujjcNv2B908PGSztZLiH1zqM4jnmIVnay5qur4bh_5tU0pN0KrWXwOs_0sNYWYlFx7K_qaZGeXANno_WtFkOcxBzTMicYl7U0S3Tnxyli1E-U_UkldVNFhJSu96C5uXB_AI9jx6n-h2SEV3AhbfvUADi-rK0DbumA"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff1dd04b7282300000d0bb642d8e8818d21d7f0b141ca814d9302104448c869fa04eef5ea74778ef053021b4efb3e1d6d02bf8000fbc464bb274b9a265551914b5ed9437f3b6a977f98fa2c1a162feacf9aab4fdca1226bac4fe165ac794aca93c69216407ecc1620a4559c288639c1ce2860b66d4b323894a7ad12a31bccbeb6721136c47094b15b3ad736335fad825a3713e177185854e87c22ccf0a54cbe6ba627a30ec315a0d2a335223476b310df5f3e6103c5ac3df595b7bdb5af7fddebee8413f7aba3042077a4cf99c764ec0abd36426cf26ce986ee747a3020b40675e77b4cfea375792115a807f7b363c387d07681477b403bf7f7d22c7801a010000",
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
      "Tue, 11 May 2021 00:39:34 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-93-1620693471142",
    },
  })
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
      "02ff85535d6f9b3014fd2b91f7da8440202491a2354ae992a9211b21a9a66942c65ca85b822936e9aa2aff7d17d374ad2ab54fd8bee7dc73ee074fe48e170999909867f735548f5f6e454cce08289ae1ebc2f3b9612dacddf7f93cbe5cf1dd41fdbd7b984e11c11b96a4fb3287ae1475c5404eb69b5e5689baa495105d4cd41d0fbae6d0ea0fc703db354ddb429e843cbde2c51db26f942ae5c4304edabd4c882c075a72d96362fff26e1c2ca3acc42d30258db79206aa48e363d1afb9605471514cb71b34504ba822d8539ea385ffcc243e7f9bbac7e9be9721f8c01950c6445da8c616a660a2487956573a2b993c116df3d5816cbc2b6f1e7698c8eb7d1115740f679d842a1aa9c7123a97c17ad559fa97eb60350b976b3fdacc17de6ad69bafafb62b7fd3b95e7881d75134ce41733bd3ceb9bef97841fd04a4e285560f9be746f9b941cbf7636908282da10d466e7f48cd517f1ca7b1cbd2d1c089d33ec4f128761d3a88fb6c6c839dc44091a745358b16a2b0ace1d0b6dd244ac04c23db719d68e4503372acc4198f800d4d7b448e67e4a1e20a2eb82c85e46d87c875b00cbd280cb6fe7c167aba8494d6b9ba688d3505bcf6a8b040047d50d3b18972814a4dbb977ee805b379b8dc79ed84af20a3ec71738f334e692e01d1b4c2e629a85622c186117fb6f22e10ac27f6e3149464f2fb89343d6f5cbc6af90b3dc401367695fe924d182cfd6fdace09b1a379ad2187f6404ab47c83b5a1ebe31f44e292b659c8cfad17fc22ed5300295450b0cfa789601df8f45f3b2d3e6271f551462abce3ee30d988b00ada1de2badc67b6e3da8e35201a5ca977b1a16b9ebad6e46832c21e0af55c51bbf858682b56cb17100671fcbeeed6f11f8fd6c3df78040000",
    ],
    [
      "ETag",
      "HENi/2H2VJCCbFMiVvtxkw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-93-1620693471142"
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
      "82",
      "50",
      "14",
      "86",
      "ff",
      "cb",
      "e9",
      "63b8440d93cd0f9866343543dc6acdb92b1c14032edd7bc99cf3bf772e99b56aab2f70cee13997f77d61074f7116820d8b78f95ca0d89e2c51dde9c24359244ad22de799443000155b1239751f64ffde3c6b399b9b7afff4b5b0c26ec769b78990c10a5306f60ea218935082fdb8838ca5486b014f8a349b979d016a9bebe1c4f7dc519ffa9487ba1f4d0703a733e8c1de382e864cb179c9ff636db63760cd171e4628300b506bc9055f63a05c6d53b2344fb0227921029450c2e583a5e045ce04e7159a545af58a69d5aa56abde689a66a34660c203a6629ee90426a40f14572cf1f8865c824580284b321c95d7171ac761694497eec8b71aa5beaf00498be204e77f83a477c5e8337c608708be732ce545a68ed4d5e0d6f9ed38caf4f3a8aee3f77e1052515247c47787bd89ef0cc79a9b1dbc77b60ae558700a52a2ced0ac362ece9b56f53dd64baea3a6f7d84a146840c0e8efb88e15d8114b24eedf00e5389dad7b020000",
    ],
    [
      "ETag",
      "UIYsGX1/9AwJ3G+xu6dDBA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `stamp` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-94-1620693471142",
    },
  })
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
      "0002ff8554696fda4010fd2bd6f64b2271d8c69c124a29715b4b6088314993aa82b53d269b182ff1ae4951c47fefac1d72346d222161ef7b6fe6cdb17e20b72c8d488f046c759743b6fb74c303522120e90a4fe7b9751518c92efdf17b3bbed7c767d155e4dff7fbc8604a25e87a934055f03c0b41f4e6b3da2ae3f986669c573150b56b558d96a9b7ba0dab6d1896893a01493c62e92daaafa5dc885ebd7ec85d5b71be4a806e98a8857cfd745edf9af54dc66f2094a2fe3a651db388fafb494f121e52c978da9fcfd0402e205bc09ab2042d3c2ba3e0f3ebd03546d7b51592b72c041a863c4fa5b28521429ec66c95674554d27b2085cd170f64668feca1af0d2773d73f5ad2b5122f8f352ab4c522039127b2a22db1a69825b060d1b24436b7da576f3246041d5c530162a95d7cb73d5bd39642a2bba5d6d74eb4817baabd563bae36775d7be66b4727c7da376f329f6a5f2e5f71d0760442b2b430edd3200165f8b1afcedb692a019568a204176dbd458d8ede0de2a01dc69d4633887508824ed06ed246a0875d0bac28008a3aa9a2172a9af2b41db63ba0b79bad960501c46664d1a601bad18c1b41d868196607e2468746645f21f7199370cac4860b5636975c788e6f2f7c6fee0e07be5d9411536ce069694e15f1d2a7c42291f44e5d7b85328e99d4a41cd7b7bdc1d077ceed723946b0a2e16e7687eb11d34400b26946d720211bf3089b46a69399e33b137730424531f1e9812148efe7c3b3c0df6d8a2ecbe29ff8ce186734184f0b0f07d2394df282b52d1f88a99b7a5537ab46d337cc9ed1e819564dd7f52bb2df57fe1f7ce079834b3444b38ceefec2b0c896a5e4ffc85af08bb7d2fcc1854154b6274f64ff6b8fbf0ac12b5646276773dbbb24e59107316490861f2f15920be0c32fc5e1daaaefd04ca5c12b2019ae7028549230837295d9bab05baa9beda6d9e890829cc93718aedb61662a868a086b48e56345e5b52d1aa5a05c3c9110c40d741df71ba27f007bfbfd2336050000",
    ],
    [
      "ETag",
      "Uu4Zb1lynXxvMw0MQdZdTw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-94-1620693471142"
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
      "4f4f834010c5bfcb7885a4545243931e8aa94a42aa529b684cd36c618a943f83bb83a6367c7767690f1ebdb0b38fdfdb7d6f4f50164d0653d815f96787fa7895233fdb2141d3556c6469a931080e20ab5cc8d72c88c3c82fee56e123535356d1eaed673e9b0961d20fac154c4fb02fb0ca0c4cdf4fd0a81ac5b6ddeae144c1f8d85a255abe2cee17890835655658aee3781ec60be89d3fb6b6fc9765d33b70a05d827bd4d8a46853b49a0e9872640b1a55b715ba863a9da281011e7ee49aba566922571437f05d6f321e4d826bffc6f3fcb18015a58a0b6a845daf241b30b1aa12fa967ee009a08751aaee87efd720db0e9769d36f2ea6f0c8689e34490283f6f2d139c82dd9702ca15977e840aae4251f0a3eeffb5f166c84e0a6010000",
    ],
    [
      "ETag",
      "Xd9LBI4iFSBOtonklISYzA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxNzUsImlhdCI6MTYyMDY5MzU3NX0.R1wCw7EAxVaOZK19zy7Mll1VTMCpdMpXyYJ3OESTPk6pNzGeBe8X9IfbC3IFBO5j8a-G8GdULtZ-hep9QZy4jLvG8qqa8xpO9N0Sp_kST8Jyn1kmbuwg_ACiNYS9ddmXvtnJvMFJJR99RLH9LYCTD9mdy8R0S05ZHY-1Fc_uRpj13lBaeW2T1p6SfAgfb5FyQPk8oXLUr8n40XUbo3wLM2FN6ZagXiCX26caqq7KqXYv4FjthiKthSHW6Aa-H0jJ8TxsCIhlt27-nryG5DdYrb2EhM_qUiR-IBkCqEgjbUGTDb8vwffFrF7JrWg_DYVVisab-FhFvOe4whBo7g-ovQ"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff1dd04b7282300000d0bb64ad0ea206d31d2888c491ff6057192411624c4041043bbd7b9d1ee1bd1f9017056b5bd2d58229f005c65c47b362869bb545ca2277e009aaa08fa6d7931986c2b1e6afed657771318289e730295389e4d81a958951763435adb78de3eb70887668c35f3c52fdf28e53de46492355ce3327d488af3cd9c2623fc5e26ee8b46a1292f090c267f8bd24d7727b91030eb0b95f67ac7abb14f734564d6d2fa53ed2d4c7d9f3a625eba14c868d4f2a759c7b6a118bcddb0eba39afee9ee6b2953897dcc59d1fa6b7d83e0b0fd6a4a4469d5130016c68f883b5847fb88b154213f06f27ddd8b04f80c5f2077b80df3f73f7d98a1a010000",
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
      "Tue, 11 May 2021 00:39:35 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-95-1620693471142",
    },
  })
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
      "536b6f9b3014fd2bc8fbda3cc80b8814ad5142d64809d980b49ba6091973a16e0966d874caaafcf75d4cd3b59bd47ec2f63de79e731f3c927b5e24644a629efdaca13a7eb81331b920a06886af75122e8f5570bfb2379bc9efc9ea7a197f2db2d90c11bc61497a2873e84851570ce4741f74b34ad425ad84e860a28e33ee9893417fe20c4796698e06c89390a71b5edc23fb56a9524e7bbdb376371322cb81965c7699383cbff71e06bdb21277c094ecbd96eca18aecbd2dfa31178c2a2e8ad93e4003b5842a8203e5395af8cb4ce2cbd7a9bb9c1eba19821f3803ca98a80bd5d8c2144c1429cfea4a6725d347a26dbe3890c0ddb88bd06022af0f4554d0035c1809553452c7128c95bfdb1a6b6fb5f3b7f370bdf3a26071e56ee7ddc56eb3df7a817173e5faaea1689c83e61a33e352df3cbca07e0252f142ab87cd73a3fcd4a0f5ff636908282da10d46567f424dbbefc4696cb1d41e8ee3b40f716cc7d6980ee33e7346304a62a0c8d3a29a450b513889690f18ed47963d34a391e9a491630d2032a99d30cb4eac218cc8e982fcaab8822597a590bced10b9f1d7a11b85fede5bcc43579790d23a57cbd65853c04b8f0a0b44d01b359d9a2817a8d4b47bed85ae3f5f84eb6bb79df00632ca8ec14f9c714a730988a615364f41b51509368c78f3adbb44b09ed8e7735092e9f747d2f4bc71f1a2e5cff41007d8d855fa4b82d05f7b9fb49d33e29ae6b5863cb40752a2e55bac0d5d9f7e201297b4cd42beec5dff1b699f7c48a18282bd3f4d04ebc0bbffda79f1118bab8f3252e11d7787c9468455d0ee10d7e53eb1c7d6d81e8f890657eadfd8a43fb0cf5d6b723419e100857aaaa85d7c2cb415abe5330883387e4f77ebf40721f3d80178040000",
    ],
    [
      "ETag",
      "udTDyrSkF8LL6z6FVDbXng==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-95-1620693471142"
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
      "6e",
      "82",
      "40",
      "10",
      "85",
      "df",
      "65",
      "7a8ba9f8834ae205a86d4dd42ae25563cc0a036281a5bb4b5b637cf7ce526b9bb6497b0333c337cb39078ef098e421d8b04de2a712c5e12a46b5d08587b24c95a45bc1738960002a1613b9182c5cd3f57a6eb7e90d4537cc46d7afb1d3ef1321831d660cec234409a6a104fbe10839cb90d6029e9659bea93a03d4a1d0c3a5ef8d67b7d4673cd4fd6c359938ee640427e3b21832c53615ff8fb5f5c9803ddf7a18a1c03c40ada5107c8f811a6b9b9265458a35c94b11a0840aae1ec4829705139cd76852ebb56ba6d5a85bbd66ab639aad0681290f984a784eec6a49fa4071c5528fbf904bb00810554986a3eafa4ce324ac8ce8723cf3ad56a5ef2b40d2a224c5cddf20e9dd31fa0c1fd83982ef1ccb7899ab0b7533b9777e3b8e32fd3c6ae8f8a31f845494d405f1c7d3d1d277a673cdadcfdedd834239179c8294a83334ebad6ebb63d5df631d701d35bdc756a2440302467fc75da2c08e582af1f4069cc983b97b020000",
    ],
    [
      "ETag",
      "QCQB1BR9B83RDr8dmE/xgA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `amount` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-96-1620693471142",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85547f6f9b3010fd2ac8fba7d5f20392908448514753baa1a5a423a455344d890143dd02a6d8a4caaa7cf71da6699b756b2524b0efbd7befce671ed11dcd4234423e8def4b526c3fdd321f3510113886ddcf1b3dffedcc791acebf9fc70fc995589e0ecdf11810b462719ce6096972561601e1a3c5bc1517accc71c1581312358d7e53eb77d4bed1ed0d34add7011e274934a5d91db06f84c8f9a8ddde6bb762c6e284e09cf256c0d2e7fdf6a6d3ce0b764b02c1db87926d50e1edf7454f1216604159365eccc140c949b12229a60958786186fe97c3d42d8ad3560ce00d0d080e025666a2b20529029645342e0b99158d1e91b4f9ea03cdada935f194c96ce178476b9c56e4f5b182b9b25a1584978968286ba829a20959d1705d47f23be5dc9d5d40041cdc604ef85ab9fe66b996a2ec732863e544319d33e5906e3bcac271acb9a71c9d1c2b5fddd9e252395d1e60c07748b8a09974ed613f2195e3a7c6da6f8fb32260012eeae06aa0f6b136540d3ff2074134ecea7ea412df1ffa031d777d35307aa417fa04034f54d9250b672c1b767b06d63b7aa06b9aae8586aa065acfefe36e77d0d3c34e342006d17c7d88760df4505041ce28cf19a77577d1b56b7bd6ca7317cec4f42c594684a18367b5b9aa88d73e051409a077eada5551ca40a93a2adbf12cd79c78f695554fc794c438d8ceef613e229c7002685ce09408525cb0109a862e6773dbb3678e3905863cf2cb3d82a3d1cfc71782b7cd6597857ca3f3e9ccf4fa3de9600fb9c24929319bfa03692d1d10bbc6ffd398ae6b2e411a1705defe158372fa92fe0f058997abdae6b322aad4f6ab0edafddac1d340709beaece8c7c27297a8de7249440a92051f8f0f8065e0c39fc2fe860216ee28c870016b18d68057224141eaa1a5a9b45bb3f5c14035ba48820bf126d631f4fde95439aa8c24259978aaa8bea1b25155a8e4cf2008c2ac39b6f315a27f00e5b1670d21050000",
    ],
    [
      "ETag",
      "+v5pzNSsmdSKFgwlVtYB8A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-96-1620693471142"
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
      "0002ff8d504d4fc24010fd2fe3d136a1156b20e120a6514c2552404c0c214b99d642dba9bb5b1a42f8efcc2ec670f4b23bfb3e26efed117679b5813eacf3eca74179b8c9504fcc10a36a0aadf8aaa952080ea016192ba78b491abc966f8bcf59d8ee3ff6ed6d16dd4f060356a8e41b4b01fd23a439161b05fdaf2354a244b6ad56d26e64993ed406198d67e173183350d2c600e379143d0ea3104ece95addefdcbb23c39b0a5758c294aac1234296a495b4cf4c81454a2ac0b741535324105566c894c52530b49e432e2f602d70bfc4ed0bbeb3e785ed767614189d03955ac9d4f391b68d2a288a9e57e6004d28e5c35b5e7dec2a683993c1bed9af3fe38df70cbdf85c38346f52e89d32934c13a97904f64826b2ea465830e24827ff925d797f7e90c8efe4c4dc2010000",
    ],
    [
      "ETag",
      "SWQf6JmMWXTEwvVvw+gL5Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxNzcsImlhdCI6MTYyMDY5MzU3N30.PnopXQ3xgCTcA_ffgXxcsjp9v9h2VTjGGv0ikt0GQ8zuqkes4AnUimbhFb4PevFQqbUC5zZPzBgqrVV06hpAE6LjE_hNcSurET_aNj2oOjIOgnfezY6r2GLSgTyMLFaSPjVBWERyV76nH6U8JcdoDJpW3f72wN6tujiJ3Tiegpv6iJhSMX8yfKJWj0KrAdQo3Ea1CYpXHcdqWTQt9rW-wYFIqsota4hZS7uwxIhwP2iaDdptDDH6-H55rmm8rOTO8EfCf9EIZjzd-NVsQbxmL_7FmPPUr2w0NBRhDdaU2NX3RboRQGl6PJXeuWvsAlnQqb54miy5uY3DkEwBPQva8A"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "7243400000d07fd9e7c80c426ddfc8ac60552a2e4dbc1865dd09bbea924cffbd997ec2394f90a429612c9eee0de9c13bd81201eed33d1e142d2e485050c30f95b32144d2597010d7c3b252e32acca40beb3192cd6e8d95c8c8ddeb68e94c33aa2eb35c2463b9c86c99d3512eba9b1d7521ebd149d3cdb614c5f960d5b24f95cc593b0ff388154bea3ed496b37d226c4e8abe34ae6cdeec31353d13d359cff80f7cfa59e8760caf2d0a9cc94c1ede05d6f95c179f6a160a68f9e66fe346b4dc6be0c56a8de4261f7888862359a6bbc255c8097aace040ccc10e9075a8286171f5e28a12843bf06f8fa76d20af008d249450f0fb07d44b09f71a010000",
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
      "Tue, 11 May 2021 00:39:37 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-97-1620693471142",
    },
  })
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
      "0002ff85535d6f9b3014fd2bc87b6d0249088448d11aa5748d96908d9046d33421632ed42dc1149b4e5595ffbe8b69ba5695da276cdf73ee39f7832772c7cb944c49c2f3fb06eac72fb72221670414cdf1355a14237b31ba8b6e837d63e64ef87d6ceee7b3192278cb92f45015d093a2a919c8e96edbcf6bd154b416a287897a9edb1b3843cbf146b63b18d843e44928b2152fef907da35425a7a679d2eee742e405d08acb3e13879777f3616856b5b805a6a4f956d24415697e2cfab5108c2a2ecad96e8b061a09750c07ca0bb4f09f9926e76f53f7393df473043f70069431d194aab585299828339e37b5ce4aa64f44db7c75205b7fe52f228389a2399471490f7066a454d1583d56605c869bb5b10c2e37e17a1e2d3741bc5d5cf9eb797fb159edd6c1d6d85ff9a16f289a14a0b9c6cc38d7b7002fa89f8254bcd4ea51fbdc2a3f3768f97e2c2d01a52574c1d8b51c3a98585e92252ecb26a3719259902493c41dd3516231cf063b4d80224f8b6a162d454927e9900edd2cb6c6de28b62d7b124f0619c436780e64900c3cf0c8f18cfcadb9820b2e2b2179d721b20f97911f47e12e58cc235f9790d1a650179db1b680d71e151688a00f6a3ab6512e50a96df73288fc70be8896d77e37e115e4943d6eef71c6192d24209ad6d83c05f55aa4d83012ccd7fe0582f5c47e9c82924c7f3f91b6e7ad8b572d7fa14738c0d6aed25fb28dc265f04ddb3921ae69d168c8437720155abec1dad0f5f10f227149bb2ce4e7ce0f7f91ee29c416d650b2cfa789601df8f45f3b2d3e6271f551462abce3ee30d98ab01aba1de2badc67f6d8755dc7221a5cab7731cf724e5d6b73b419e100a57aaea85b7c2cb4136be40b088338fe4077ebf80fcfc3863178040000",
    ],
    [
      "ETag",
      "TCl34C3kTjNWu/g6RK5/WA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-97-1620693471142"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d925b6f82401085ffcbf4b19878a1a8243e606b2b095e8af8d418b3c2a028b07477a935c6ffde596a6dd336695f6066f86639e7c01176491e810dab64fd5ca2385cad513deac24759a64ad2ade0b9443000155b13b993c3feeb2e37f76e6b729d79cebc3b9e76f6bd1e1132dc60c6c03e429c601a49b09f8e90b30c692de46999e5cbaa33401d0a3d9c05be3b7ea03ee391eec773cf73fade004ec66531628a2d2bfe1f6b8b93015bbef231468179885a4b21f81643e56a9b9265458a35c94b11a2840aae1eac052f0b2638afd1a4d66dd71a56b36e755b66bbd1309b04a63c642ae139b1f319e903c5154b7dbe2797601120aa920cc7d5f585c6495419d1a53b0e2cb3d2f71520697192e2f26f90f46e187d860fec1cc1778e65bcccd585baf726ce6fc751a69f47dd39c1e00721152575410277349805ce68aab9c5d97bffa0504e05a72025ea0c1b75b373d3b6eaefb1de721d35bdc756a2440342467fc7305160c72c95787a03226399407b020000",
    ],
    [
      "ETag",
      "ksHBxkn4wI3O+mLAU9NP8w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `id` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-98-1620693471142",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8554fd4fa34010fd57c8de2f1afb41cb57dbc4783de53c924a2b058db9bbb4cbb2d45560915d7ad798feef3780551b3d4d486077de9bf76676964774cfb2088d50c8560f252d365fee78885a884abc82dd23fd7a666b991a1d45b6b9b69220fc9b6597c7c78060154be0344f685bf0b220548c82796755f032c705e76d48d41e0eda3db3af9a434db77a3dbd0f3c419378c2b27b60df4a998b51b7bbd3eeac385f2514e74c74084f9ff7bbeb7e372ff81d255274f725bba022ba1f8b9e249c60c978761cccc1402968b1a029660958786146e1d7fdd41d86d3ce0ac06b462826849799ac6c410ac2b398adcaa2ce8a468fa8b6f9ea03cded897dea2ba7d3c0f50f9638adc8cb43050b65b128a82813d952965053cc12ba60d1b289e4f7ca776f7a011170708b05154be5fa87edd98ab2ac40bf4a55d5a872a28cdd33659fefb84ae0baf6dc570e4e0e95736f1acc946f377b18301e51215956dbf67198d0caf253679db7e75911b0041b4d7061a926ee0dd46118871689079a11c62a0dc3416819580b5532d4a91e8514034f56d96b16ce78a651233607911a86ea7068f488a10dfbba6e6033a691ae61551f981ab12c0d6d5be84fc1243d6322e78235ed45d79ee3db0bdf0bdcd3b16fd765c4185a78d698ab8a78ed53429100faa0ae6d15651c94aab3725cdff6c6a7be736537e331a12b4c36f3071890182782021a1738a59216173c82a6a1d974eef8ced41d4f80519ff96c871068f4f3f185e06ff2bacbb27e575aa65eebef005738296bc4baf9403d036db7adffa7187bdef806647151e0cdfbe9dfcd5fe3eb5563f1590f556abb551f6d7f6fe16921b84a4d767419d8de0d6ab63c1ad38266e4f3d101701df8f48fb0bb9e80850b0a3242c21a0695884a8414b4195896d6761bb6610d0c434535b8906f62a669ee4ea6ca5165a429cde45345cdf5ac1b55854af10c8220cc99ebb8e710fd07bcad55631e050000",
    ],
    [
      "ETag",
      "+4WPE3n0d+dE6v7lUbxnnQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-98-1620693471142"
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
      "416bc2401085ffcbf4d8048c15ab010f5aa40a566c6ca05044d66492463799747752b1e27fef6ceaa1871e7ad97dbcf966796fcf7028aa1442d815f94783e67493233f3b11a16d345bb96aaa2c8207c82a1732b525bdeed643ce66eab6dbe8f8eb69bc3a8e4642d8e41d4b05e119b202756a217c3b43a54a94b5edd6b42f0ac6a7da39f3e5cbf4711a895152ea8c65bc588c278b295cbc5f6bf5e15f2b9b8b077bda4598a1c12a4197a236b4c784e7aea05565add1b7d498042db4703bc80d35b53244be38fe70e007fd6ea73fbcebdd0741af2ba0a644714195b0f15ab201132b1dd151fa81034c2ba56ad69e9faded3a5cd5c6e9bf66819b6dae0f4e4e8c766548d25974c17a83ce4fcc0772d1592ab169d08344c93fcf0a863053dae2e51ba438b93bc5010000",
    ],
    [
      "ETag",
      "dsmoXbS9tfHa+2ulUzMAPw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxNzksImlhdCI6MTYyMDY5MzU3OX0.fcPpopkOhQSnyHEFRUpTW7StHozawTTRPsQ3FYafdIIoF_Wt-F9moF8fe2txaR6A9lsr8rO_DCzBcXMBKX40uD5f_H5OA82_0dPHbZIBvLtJMjECBgaXuZS7OIbcT6laE2Arbm6HmyIRXvsktNd0BeYFCmLSaV01S4UtgyLzbEmPMUdQ8aKThk8P-X-2yja5oHP63yATSx2FC9n-iZwAosHby3iCQOS6MPYlxI8e_2xeq0sL15e7-LnJpJRV8-GOe2qQcsE6njjI8gZ42KyzexJh_z_hgW_QTucjchy-Oodw2tgBYa3nkSt7YF7_cSrELoYKI1--0jEB1fpZCINwpQ"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "300000d0bb642d0e9f9048777c825215d4888a1b264dd30e5281f231844eef5ea74778ef0730ce45d7e57d5d8a0abc00c54c67cee7eb66e1e59f7c43398ba9da26abc1efa831b0b5daeb1c55874076dba37ebbb91e5a9734cbada9b6b1344332e173e2a7c4e49376e82a7cb7a7a0a41f890a4fb574cdb074a117a64b3b61d9e5abd528c4abab2933e71de362e0225d92e63a2a368c6f16cb5054dd09829e21c5dd3ab13e80f83b8686db44c306129b28a46d94f1d8c58f8b4c32a79ee2de680c6dc912827667fd750b8f17bf5c5041fce01aeeb4e8148119106353b4a2cb8b27d7b21d6706feed79af1af10cf0046b450b7eff006a795b3d1a010000",
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
      "Tue, 11 May 2021 00:39:40 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-99-1620693471142",
    },
  })
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
      "fd2b64f6ab7d50e88326cddab4b8b2b1d4a554e36e3664182e384a1964064d63fadff732585763a29f98997bce3de73e7826f7bc48c894c43c7ba8a1da7fbb13313921a06886afe93e4c0aefa773935fde06e3e553fafba1673ecd6688e00d4bd25d9943478aba6220a7db4d37ab445dd24a880e26ea384ec71c0dfa23c7b2c7a6690f9027214f2f78718fec5ba54a39edf58edadd4c882c075a72d96562f7fade7b1cf4ca4adc0153b2f75eb2872ab2f7b9e8f75c30aab82866db0d1aa8255411ec28cfd1c27f66129fbe4fdde574d7cd10fcc81950c6445da8c616a660a2487956573a2b993e136df3cd816cdc0b77111a4ce4f5ae880aba831323a18a466a5f827116ac5786e79fad83d53cf4d67eb4599cbbab7977b1bed8aefc8d717dee06aea1689c83e61a33e354df7cbca07e0252f142ab87cd73a3fcd220efe3581a024a4b6883d1b83fa2e6a4efc4693c66e9c41ac6691fe278128f87d48afbccb1c14e62a0c8d3a29a450b51986032cb1a5911b30734b21d3389267d2b8968ca1236644e0cb6430e27e4a9e20a965c9642f2b643e43af042370a83adbf9887ae2e21a575ae96adb1a680b71e151688a04f6a3a34512e50a969b7e7876e305f84de95db4ef80232caf69b079c714a730988a615364f41b51209368cf8f395bb44b09ed8e53128c9f4cf33697adeb878d3f2577a88036cec2afd259b30f0fc1fdace117145f35a431edb0329d1f22dd686ae0f7f11894bda6621bfb66e7043daa70052a8a0605f4f13c13af0e5bf765c7cc4e2eaa38c5478c7dd61b2116115b43bc475b92fece1a46f0e6da2c195fa10b386d6b16b4d8e2623eca0502f15b58b8f85b662b57c056110c7efeb6e1dfe010a46656178040000",
    ],
    [
      "ETag",
      "fyTdnIJ9YlPhR7DwfZq/1w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-99-1620693471142"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92414fc2401085ffcb78b42414a140130e1551490011ca4543c8d24e4bb1edd4ddad8610febbb315d1a8895eda99e937dbf75ebb87a7240fc18575123f9728776731ea7b53cc5095a9567c2b28570816a01631936a6e7b6162af1fda8d4eb708db7daa9fb7e25e8f09156c3013e0ee214a300d15b88f7bc84586bc16505a66f9aaea2cd0bbc20ce7fe6c38b9e13ea3d0f493c568e45d8e0670b04e8ba1d06255f1ff585b1e2cd8d27a86114acc03345a0a495b0cf4d0d854222b52ac292a65800a2ab87a104b2a0b21896a3ca975bb35db69d49dee45b36ddbcd0683290542279433bb98b33ed0a4453aa35776090e03b22ad970545d5f789c849511530e27bed3acf47d05585a94a4b8fa1b64bd1bc19fe1033b46f09d131995b93e51d7a33befb7e338d3cfa3ae3c7ff083509a933a21fe703c98fbde786ab8e5d1fbe54ea39a4ae220159a0ced7ab3d36a3bf5f758fb64a2e6f7b85a96684120f8efb84d34b89148151ede00f93d30107b020000",
    ],
    [
      "ETag",
      "sS1Adi1bZ7289pd7Co0+5g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-100-1620693471142",
    },
  })
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
      "000002ff85546b6f9b3014fd2bc8fbd24a69803cc843aa3a96b20e29251d217deca1c480a16e0053db748aaafcf75d4cd336ebb64a4860df73ee39f7fa9a47b4a6458cc628a4e97d45f8e6c31d0b510b118953d8adaebe55c52408ce13fbba3fbab64a7d9d53fbf81810b466099c97193912ace21111e3c5bc9d72569598337604898e4cc33832ad8e618dbabd8169f63a4014244ba6b45803fd56ca528c757d27de4e194b33824b2ada11cb9ff7f5878e5e7276472229f47d4d1d6484fe8eea49c6222c292b8e1773705009c29724c734030f2fd438fcb89fbb4d71de4e01fc402382a3885585ac7d418a8815094d2baeb2a2f123523e5f7da0b93375268136992dbce06085f39abc3ad4b0d0964b4e4495c996b682a2129a91258d574da45c6b9ffdd93944c0c12d1644acb4ab2f8eef682f5b2bed4765185da29d68b677aaed67713d6de179ce3cd00e4e0eb5337fb6b8d03eddec61c07e4c84a485321fe03023b5f1a706bb6fcfb5266009ca4d7039302c6c0e8d51988483281976fb616290301c86833eee864634ea915e1c120c3c5967572c5cb062800dcb8c3be0dd8cbbc408cd1e86c60e07a324eaf78c611c5b6632b0ac1edab6d02f4e2539a5a26482364d4657be1b38cbc05f78133b7054190986469e36e6ea225efb94502480fe53d7b68e52064af589b95ee0f8f624702f9d6648a624c5d1667e0f6392e04c1040638e7322093f6731340d5dcce66ee0ce3c7b0a0c75f2173b8440e3ef8f2f846053aa2e4bf546f3c077bd33656087b8c459a5200fcd07b24bf08ab6dbd6bfd3d8be6fdf8034e61c6ffe8841397527ff2aa1f06ad5d8dc499aa856dbad3a68fb730b4f0bc1ad6ab2a3af0bc7bf41cd964f12c24911bd3f3e005681f7ff0ebb9b0a60b8aba02324ac615a2351ab449c34534b73e5b761f787a601b52a30976f629daeb13b9e3a479d91e4a4904f2535375575aa0e55e219044118364f9dd4f637490ce09c2b050000",
    ],
    [
      "ETag",
      "uWZunCTTMfAX59X6p/kmiA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-100-1620693471142"
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
      "8d90dd6ac2401085df657a9b4092a6fe04bca825b482481b6b5b2c226b3289d1241377371511dfbdb3db52bceccdee70ce99e53b7b867dd96410c1a62c0e1dcad34d81fac50c09aaaed28aaf961a85e0006a517032de0ee71f4b257010dcbde3725bc46f07ef381a7142a55bac054467c84bac3205d1e7191a5123afadd7d2bec8317d6a8d3299bdc68f71c2424d9911668be9f47e3c8de1e25cadb5fb7fadac2e0eec6893608e129b140d452b6987a99e98824ad46d85aea24ea6a8c086ad5148ea5a21895c565cdff35cbf1778bde16dd8f7fd30e06445a9d025351c5ecc190e3469512574e4826002d28edc35b7e717cba12d6126dfb25d7bc19f17186ff5fbe0f8a4513d4b623c85862c1cf47f381fc8b06beea465870ea4823ffaa9d410e5a25278f906fae7fdc3c6010000",
    ],
    [
      "ETag",
      "Eh9SXZsae825WeZhgEVq0w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxODEsImlhdCI6MTYyMDY5MzU4MX0.cRsDCDC_EOyLy_7sOkOQ5ksuswUmCE2vjK8jyK-0aPi8Qy2f_hIUmdqrCIuijghH8YWxiiDo6bW9_4utEEvgtzX_x-ysRJFUo6Vp1Rn1ezQXuYgueXIH9SYnsE6amiR0iGXv5-QKkfGl7kwBoRgPcEqCVVh4YdmaoVG-wR4pQoCjHCVDyuuzl816q5vRcr2Vtml3LMHc8frUTTHn-AWfXKnNKI_XOd8Z2BGKXGMC4xa_cdJDS-kXK-L1tMQSr3hThcYxLPrJ2xYTJPBtUiYd1LLdZsuiFBqU0zsvHRkUeCoA4y4-6LAZeHfGCdmT80nzcK0AUOJ3FGZI7taMoJarbQ"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "dd",
      "9642400000e07799eb749ab1a1bd23440c2744b97118b39a6c197f257bf6ddb7b38ff07d3f202784f67d363435bd834ff0cad16649960e57b4ac2a13ee0ced35f2545dc2e325697adfb0cbefb14e5fd84a51355cfc338eb42061f5d32f9b5068121749b6fe88d3f6438276103afb275258581f0fed3c55ab0052d12cb0fb080d64d5d3fc382a82689ce53ddde9f8644aec8b6f55d6c148833721f53abe76551b8e8e7b284854d0e3ced248cde6b85a8db22f5f0be4a668b88be2565088e51cd42228e200cb0ec76cea9a56d97b9190c43732f725bc79d03c8105a013671ded33f6e68aebcd6601feedd9f0e2f41da0d1bca31df8fd038564c3ed1a010000",
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
      "Tue, 11 May 2021 00:39:41 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-101-1620693471142",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85535d6f9b3014fd2bc87b6d8221342191a2354ae99a29212b9056d33421db31d42dc1149b745595ffbe8b69ba5695d6276cdf73ee39f78367742fca2d9a202af28786d74f5fee244527886b92c32b76239fae5859ddc795fa23bfdbb76ef478359d0242b42c457655c17b4a3635e36ab289fb792d9b8ad452f62051cfc14ecf19ba78381e7823c7f15c202a5e644b51de03fd56eb4a4d6cfb28decfa5cc0b4e2aa1fa4cee5edfedbd6b57b5bce34c2bfbbda60d32cafe44f56b2119d14296d34d0c0e1ac5eb94ef8828c0c33fea969ebdcfdd1764d7cf01bc178c13c66453ead617a460b2cc44ded4262b9a3c23e3f3cd01c5c1329827169345b32bd392ecf889b5259aa4faa9e2d645b45e598bf0621dad66c9621da6f1fc3258cdfaf3f572b30a63ebe63288024b135a70c3b5a6d699b9857001fd2d575a94463d699f5be5970e2d3e0ea62580b4e25d301de121717c3ca6191db1cc1f9cd20c734a7d3a3a25038ad9d8e3de9672023c236a58a494e51863d7f58997129af9a9877d27f5879e93bae30cb3e160e0e18ca2c3097aac85e6e742555289ae43e8265a24419a449b703e4b025342469a429f77c6da02de7ad4502080fe53d3a18d0a094a6dbb17611244b379b2b80eba092f794ed853fc0033ce48a138a0490dcdd3bc5ec92d340c85b355700e6033b11fc7a042935fcfa8ed79ebe24dcb5fe9090cb0b5abcd17c549b408bf193b47c435291a03d977075481e55ba80d5c1f7e0312b6b4cb82ae3641f413754f11cf78cd4bf6f934016c029fff6dc7cd0730ec3ee8280d77581ea65a1556f36e8984a9f7857deabbd8c5c8806bfd21e68cf1b16d6d8e3623dff152bf94d46d3e54da8935ea150441987f68da75f80b65e43e027b040000",
    ],
    [
      "ETag",
      "02R8bMcnpkSpsxoJ/h2RwQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-101-1620693471142"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d92dd4e83401085df65bc9426c552aa24bda05ab5a656a534fea569b63050eac2e2eea2364ddfdd59d46ad4446f6066f86639e7c01a1eb222060fe659fa58a15ceda4a8af4c11a0aab856742b45a1102c40cd5222afefdafca577d39a745abbcc79496f4f83fdb3ab6e9708152d3067e0ad21c990c70abcfb35142c475a8b04aff262567716e8556986e330188c4ea8cf456cfad16438f47bc33e6caced62cc349bd5fc3fd6a61b0b96621e6082128b088d96528a25467a606c2a96971c1b4a54324205355c3f48a5a84a268568d0a46137ed86edee35dd8396d3b16d678f482e22a63351103c199340d042331e8867b2092e01b22ec971525f9f689cc5b513530e46a1ebd402bf02a42dc938cefe0649f082d177f8c0de33f8ceb15c5485de52c7c30bffb7e328d4cfa38efcb0ff83509aa2da22e1e0bc3f0efdf34bc34ddfbdf7561ad5a51494a44213a2dd74f6db1db7f996eba13059d37b3c2d2bb42062f47b9c661abc8471859b572ada56d17c020000",
    ],
    [
      "ETag",
      "WZ5lxBX3U73+a4xgYHR8JQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-102-1620693471142",
    },
  })
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
      "9b",
      "30",
      "10fd2ac8fba7959200f94922555d96b28e29252d21adaa6d4a0c395227802936dda22adf7d8769da66dd560909ec7befdebbf39947b261e9920c48c056f705e4db0f6b1e901a014957b8bbbebbd914fde4d77af2393c8f0b7af5f5cad78727278860254bd0248ba12e7891872006b3696395f322a339e7754c54378d66ddec368d6ebfd5ee9966bb894401713466e906e977526662a0eb7bf1c68af3550c3463a211f2e4795f7f68ea59ced7104aa11f6aea2823f477544f631e52c9787a329ba28342403e8784b2183dbc5097c1c7c3dc0d4693c60ac10f2c041a86bc4865e90b53843c8dd8aac85556327824cae7ab0f32b5c7f6c8d7469399eb1f2d68529217c71a15da7c9e83286259d3165854c46298b3e5a28a641bedb337b9c0083ab8a302c442bbf9627bb6f6b2b5d0be1786d102ed541bba67da6116c7d566ae6b4f7dede8f4583bf726b34bedd3ed0106ed2f4148962af33e0d62288d3f35d8797bae25814a54ae82f39ed1a5a665f48328e88591d5ea049101416005bd0e6d0546d86f437b1900459e2cb32b164d796a1a3d1a76cc00cc2ed0360dba96b904ab15506875fb01b4a1d98f8c660bc8ae467ee64cc219131917ac6a32b9f11cdf9efbdecc1d0d7d5b9511516ce45965ae2ce2b54f894522e83f75edca28e3a8549e98e3fab6371cf9ceb55d0dc9185634dc4eef714c221a0b4034cd690212f20bbec4a691cbc9d4f19d893b1c23439dfce51e21c8e0dbe30bc1df66aacb52bdc9d4f71cf75c19d823ae695c28c843f54168865ec96e57fb779aa1e70d6f519ae639ddfe11c372baed92fe17098557abcae65ed224a5da7ed524bb1f3b7c6a046f55959d5ccd6cef96545b1e4490431abe3f3e085681f7ff0efb9b8a60bcaba82324ae715a4351aa84395453cb",
      "12e5b76277aca6d552ff164973f926d6ef58fbe3297394192181543e9554dd54d5a932548867100671d85c7552bbdf30fb68972b050000",
    ],
    [
      "ETag",
      "jhWku9mxjOFcGluaQJQT/A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-102-1620693471142"
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
      "4f",
      "c2401085ffcb786d931611b40907300448086a153918439676a8a5dbceba3b8d214dffbbb3e8c1a3a7dd7df3cd9b37db415536392470288bcf16edf9aa407ef297145dabd9c961a871080120ab42c8ea307dc85bc7bb78b918e9d9a27e3537bb623211c2651f582b483a3896a87307c95b078daa51daf67b7b71148ccfc62babcdcb7c314f45a829f7c266bb5e4f67eb39f4c19f3653fdabe5bd0fe04487148f68b1c9d0a730964e98f1ca2fe8546d34868e5a9ba1830b7c2914965aa32c51284a184783301e0da2d1ddf5701cc7c381909a32c52535026f9f251c30b1d2297dc98210c1ef7b7666748f96c4dda1371ede8e7fc6dc931fcd12896d8b01644afe6959322447a51df6df1ee5bb8385010000",
    ],
    [
      "ETag",
      "kbAOdustW1HG6lBGmVp5Wg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxODMsImlhdCI6MTYyMDY5MzU4M30.OXfqYlcwTLTlOCC792W2ab1Z8v2nVO8s3UBtlb-fRdcz4f4q1Rku26JUKtfu1gVStcB0MC2iWYU2jH66ZXyS5zjYv7jDJYk_FPPZkZot6U25ZJIDefbfBdtQ5JmJZlwHM9LK7XEEBxX91gN98cMrfFc6-RegXLDo1ifuShQ26AWwdApqoNvYbuFypINW0JyOVgrS1arZfXmIpgLTauE8p1eruWAROQs3JxX_-jEjYA9qKZaEoThroWWsInAVbAgBjQo1aw2wfL-2hB9HCw-7Isf-pzHVa2rwGseLnBO3oLw--aISyX-FS3AFFlHRzy-DMwGW4GzctmVIxvzDLqZ_8A"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff1dd04b7282300000d0bb642d0e51c3a73bd14405b4a080a51b2662a4e13f10f939bd7b9d1ee1bd17a071ccda361255c64af00146bad0e7f1dcaa35234a18362574e6ee0e0b892e26591c73f9b395283e15c62aac3d75839ca79bda05923116680f9788fa8183d3ebbda397b3087854b9974c28aadc9735e562ad8d8adfee3c3350b670731dc823bd37c7be8378ea1f89dfb9a52d3c523963b0cfadac23de304088c8f7b85f0d5fa5793afa8c6ccde9c6463d74c26bc3cc341f7ed2b5dc85c4e285747b26846b6bd5b44352a9a7ce8f57ec6085b98e745870681cc00cb0a1e60d6b23fee62e91aecfc0bf3d1263cdde0106a30d6bc0ef1f61c0aba71a010000",
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
      "Tue, 11 May 2021 00:39:43 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-103-1620693471142",
    },
  })
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
      "0002ff85535d6f9b3014fd2bc87b6d1212121222456b94d2365a425620edaa6942c6b950b7802936a9aa2aff7d17d374ed26ad4fd8bee7dc73ee072fe481173b3225314f1f6ba89ebfdc8b989c105034c5d7905d24e5b7ec6afb6355d9d6adff647af7ced56c8608deb024cdcb0c3a52d4150339dd06ddb41275492b213a98a8d337ad4edf1e98b6630dc7fdfe7080440959b2e2c503d2ef942ae5b4d73b8a775321d20c68c9659789fcedbdb71ff4ca4adc0353b2f751b38732b2f789ead74c30aab82866db001dd412aa0872ca33f4f087ba8b4f3fe6ee729a775304ef3903ca98a80bd5f8c2144c14094feb4a6725d317a27dbe3b90c05db98bd06022abf3222a680e27c68e2a1aa9e7128c737fb33696def9c65fcfc3e5c68b82c5a5bb9e77179bd576ed05c6cda5ebbb86a271069a6bcc8c537df3f082fa3b908a175a3d6c9e1be5d70e2dff1d4c434069096d301a9b36ed4f4c274ee2314b26d6284e4c88e3493c1e512b36993384e12e068a3c2daa59b410c52e71cce188419438233b1a0ec6349a606722669900e62836edd8268713f2547105675c9642f2b643e4c65f866e14fa5b6f310f5d5d4242eb4c9db5c69a02de7b54582082fe53d3a18972814a4dbb975ee8faf345b8bc76db09af20a5ec3978c41927349380685a61f314546bb1c386116fbe76cf10ac27f6fd189464faf385343d6f5cbc6bf91b3dc401367695fe9220f497de85b673445cd3acd6907d7b20255abec3dad0f5e11722714bdb2ce46aebfab7a47df221810a0af6f93411ac039fff6dc7cd4730ee3eea4885775c1e261b155641bb445cd7fbca1e4d2cc71a130daed4dfb161bf6f1ddbd6e46832420e857a2da9dd7cacb415abe51b0883387f4fb7ebf01b603297177b040000",
    ],
    [
      "ETag",
      "TcGfpKlQUXLr63YRw0Nj9Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-103-1620693471142"
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
      "92dd4ec2401085df65bca4242d3f459b705114950410a178630859da69296ebb7577ab6908efee6c45346aa237edccf49bed39a7ddc3539a47e0c1264d9e4b94d55982fade14735425d78a6e85c8158205a85942649e066155da558337b6dd380978573f547ebf4f840ab79831f0f610a7c82305dee31e729621ad85829759beae3b0b745598e122988fa637d4672232fd74391efb83f1100ed66931629aad6bfe1f6bab83053bb199638c12f3108d96428a1d867a646c2a96151c9b4a94324405355c3f48a4280b268568d2a4e9d8eda6e3b66cf7a2dde9394ea745241721d3a9c8095e2e482068a1199f8b57b2092e01b22ec9715c5f5f689c46b513538ea681dba9057e05485b9c725cff0d92e02da3eff0811d33f8ceb14c94b93e51d7e33bffb7e328d4cfa3aefc60f883509aa23a21c168325c04fe6466b8d5d1fba0d2a8665250920a4d888edd39eff65cfb3dd74b61b2a6f7785a966841c8e8f7b84d357831e30a0f6f3c0de1ec7c020000",
    ],
    [
      "ETag",
      "niTcyu0y+l+h5fgTl5tVyA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `date` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-104-1620693471142",
    },
  })
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
      "79",
      "4f",
      "db",
      "30",
      "14",
      "ff",
      "2a91f70f683d72f692102b6d06954acad20484b6a9751c2718d238d80e1b43fdee7b4928d70ea44a4dfc7ed77bb6f3806e581ea3118a587a5b5271ffe19a47a885a8c229ac3a27bf7ae1c9d01257eecfa35e1cf2e2eae34d7a70000856b124de14196d4b5e0a42e5285c7652c1cb020bcedb20d43674bb6df44cbd37b4ecbe61d8261025cd9239cb6f807ea5542147ddeecebc93729e6614174c7608df3cad77efcc6e21f835254a765f7b76c14676df713dcc38c18af1fc205c42825252b1a21bcc32c8f04c8da34fafb53b0c6f3a2980ef18a198105ee6aaca051284e7094b4b51aba2d103aa73be78404b77ee4e026db208bd606f8d371579bdaf61a9ad5682ca32532d6d0d4d252ca32b16af9b4a71a37df617a7508104575852b9d62e4e5cdfd5b4758c155d6bdf4a5db7a876a88dbda9f65a61e669a1e7b9cb40db3bdcd78efd4578a61d5dbec240f4984ac5f23a7880a38c56a11f873bfb734f2b025610a429aefa7a0f1b037d1825519f2403cb89129d46d120ea3bd88a7432b4a91d4714034f55ea350be73cb76d636019b165983decf41d622566625263a8eba46fe94e1cc743c7202446db16fa2198a253260b2e59336074e1cf027715f8a13719076edd46826188d3265cd5c4cb9c0a9a04d07ffada5655c6c1a9daad9917b8fe7812cccedde680cc698ac9fdf2168e48823349018d05de5045c5298f6168e86cb19c05b385379e03a3def5b31d42a2d1d7876742705fd45356f53f9a560d6c5f089ee3acac0177cd033275536feb66db70d076dbfab7d2d8f7c797e08e85c0f76f6ad051cfaee87ff1a9f1f55b9374e76ba0caed2905da7edfc2af85e05235eae84be8fa97a859f2694205cdc9fb2708c075e1fd8fc3",
      "eea20218ae2af84805ef706089ac5c88a0cdc1659b3a6fc37606f6d0e9a31a2cd4db9aa30f7bbb1daa342a45baa1b97a6ca9b9a8f5a4aa52299f405084f3e6cdbc63a8fe06863377c12a050000",
    ],
    [
      "ETag",
      "5Hz6UH93rhExB6dUoph+kg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-104-1620693471142"
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
      "00000002ff8d90414f83401085ffcb7885042a6995a4076bb056b1b1d4c68321cd0203d202437717b521fdefce620f1e3c78d97d79f3cde6bded615f3619f89094c5a14379bc2850af8c88507595567cb5d428040b508b82c9dd8353bc4edcc743f27477d87f6dc2c6f1e6abe9940995be632dc0ef212fb1ca14f86f3d34a2465edb6ee5f02263fad81a67b17c09e641c4464d9931969b30bc9985019cac5f6bedfe5f2bf1c9821d2511e628b149d1a46825ed30d50b535089baadd056d4c914150cf030282475ad9044363bb6eb78b63b1e39e3eb4b6fe2bade88c98a52a14b6a18deac391c68d2a28ae8930b8201e420b96b3e9c1f836d4a9c556cf45f33d7cce2f383b3a346f52c89e32934c9bc2be727e72d99ec9a3b69d9a105a9e08fbe2f35f8b9a8149ebe01df0391cfc6010000",
    ],
    [
      "ETag",
      "jJ0gW71KqbMFqkxULn04GQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxODUsImlhdCI6MTYyMDY5MzU4NX0.gKsdz25kZwJJed4HYFeACixDU_O-IxVACvaR_BeUoKH1ZP83prOqcuqasq3PhC1pJGq3aLZiHPjtjlRZ-40Z4yy5I-3aT_IBFHGJrJkcZhRTnCeZz8fuvV9qLMvKyLeLDUdm5Tk1CKaieTjaH85uZZQsLk9zrF5GZ2z7p88ooUAT2g7Y2NagGSJabwfLk3pRiI1UTns4KiAEDlw0zNhcsTA511KDxcVfDIsRJQxngvELzgskJXllMFsHCIO_f7YRfXqiuxNa8lf0zndzuMyIi0TS7kkFZf3_pKU-MddRuxNCTFHoZQH5N6HvhW04ati13YKZtQ-7VfRYCZtvknU88A"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff1dd0c97282300000d07fc9591d95c5a4b782580571630b5e32d960ac081452163bfdf73afd84f77e00e55cb62d51d55d96e00d8c7489667ce6d5d022b9b81ea8b26d4d395b9fe8293c1aac8d91919cf6fe123e7094aa6946427971db5d887899ada3b327b4adb8ac2abcaaa93e9695abb1bca77c0cd4c62ebaa20e71fc2d30a6a399389b7261315638f30d42a1be8efd4feeb3e003a587621be4485d8debde1da294749656c348c0a3791222b14bfcfe84a23f25c1a2cfdbe73d6c62619b69076537bd14387b1895336f7037644f2361817dfef2c65da1331371300172a86f8d6cc9edc5d50c8426e0df4ed458cb57802569231bf0fb079f6db94a1a010000",
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
      "Tue, 11 May 2021 00:39:45 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-105-1620693471142",
    },
  })
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
      "4014fd2b64f6ab6d690b7d25cdda545c6b5aaa4035bb9b0d19860b8e0283cca0694cfffb5e06eb6a4cd64fcccc3de79e731fbc90075ec46446229e3ed650edbfdd8b889c105034c5d7bb8b5fea520c9e6134b8ce61efdf5faea74e3a9f2382372c49f332838e1475c540ce767e37ad445dd24a880e26eaf44dbbd31f0dccd174688dfb7d6b80440959b2e6c543935ea952ce7abda378371522cd80965c7699c8dfde7b4f835e59897b604af63e6af65046f6be50fd9e09461517c57ce7a3835a4215424e79861efe51e3e8f463ee2ea7793745f0136740191375a11a5f98828922e1695de9ac64f642b4cf7707e23b6b6719184c64755e8405cde1c488a9a2a1da97609c7bdb8db172cfb7de6611acb66ee82f2f9ccda2bbdcae771bd7376e2f1ccf31148d32d05c636e9cea9b8b17d48f412a5e68f5a0796e945f3bb4fa3c988680d212da60383647b43f31a751128d593219da516242144da2b14d8791c9a61658710414795a54b368218a681adbf6289984d1304a426b105b21ed5b10c22831ed41df66c9744c0e27e4b9e20aceb82c85e46d87c8adb70a9c30f076ee721138ba8484d6993a6b8d3505bcf7a8b04004fda7a64313e502959a76afdcc0f116cb6075e3b4135e434ad9de7fc41927349380685a61f314541b1163c388bbd8386708d613bb3a062599fd7e214dcf1b17ef5afe460f70808d5da5bfc40fbc95fb43db39226e68566bc8537b20255abec3dad0f5e10f22714bdb2ce47ae7783f49fbe441021514eceb69225807befedb8e9b8f60dc7dd4910aefb83c4c362aac827689b8aef7956d4fec8965120daed4a7d874621edbd6e46832420e857a2da9dd7cacb415abe51b0883387f57b7ebf0174a5a5bfb7b040000",
    ],
    [
      "ETag",
      "hHZtJo2we62QmeySjJL9Eg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-105-1620693471142"
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
      "8d92d153824010c6ff97ed1567a4108b191f344d293445eca5719c13164581a3bb23c771fcdfdb23b3a69aa917d85d7e7b7cdf0707d82679040e2c93d54b89627fb14235d1858fb24c95a45bc1738960002ab622f2de73b7aebb8db287ee7060f9b3fe584d9e76ad1611325c63c6c039409c601a49709e0f90b30c692de46999e58baa3340ed0b3d9c06be3bea539ff148f7a399e7b53b5e0f8ec67931628a2d2afe1f6bf3a3011bbef431468179885a4b21f80643e56a9b9265458a35c94b11a2840aae1eac042f0b2638afd1a466d61b35d3beacdb375756d334ad4b22531e3295f09ce0d9940482e28aa53edf914db0091055498ee3eafa4ae324aa9ce8d21d05b65509fc0a90b6384971f1374882d78cbec30776cae03bc7325ee6ea4cdd798feddf8ea3503f8feab683de0f422a8aea8c04eeb0370ddac3b1e6e627ef9dbd4239169c9294a84334ebd675a369d7df73bde53a6b7a8fa3448906848c7e8f41a2c089592af1f8066a0f13307c020000",
    ],
    [
      "ETag",
      "JLIkIIkdmKDMH4RUGPtQVw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `stamp` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-106-1620693471142",
    },
  })
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
      "00000002ff8554696f9b4010fd2b68fb25917c0036f890a2d475684a65e304e344e9217bc183b335b0845ddcb891ff7b078893b8691b0909bcf3de9b37c7fa81ac59b2247de2b3d55d0ed9f6dd0fee931a014957789acc7ed930b95f7f1e5daf27e98607da3d1d5e9e9c2082152c41e33482bae0791680e8cfa68d55c6f394669cd751a8aea9665d3375d5ecb5da1d4d6beb481410852396ac917e2b652afacde63e7963c5f92a029a32d10878fc74dedce8cd34e33f2090a27998b3896944f38daca7110fa8643c39994dd1412e209b434c59841e9ea94bfffda17683d1b8b142f08605408380e7892c7ca144c09390adf2ac5425fd0752fa7cf141a6d6c81a7aca703273bca3058d0bf2e258a14299cf331079246bca028b0a590473b65c549174ad7c7427638ca0835b2a402c94eb4f966b29ca424874b750bee5aada02e554193867caa184ed2833c7b1a69e72747aac9cbb93d985f2e1e60083de9720244b4ae71ef523285c3f76d77e3dd48240253aa982f38e6a52adabf6fcd0ef0461b765f8a10abedff53b066df96ad06b437be903459e2cd44b164d78d2090dd3a01d4d5de2680c68414b353bbda5a69b466876c33080b04dcd5e97ec6ae467c6249c319172c1aa0e936bd7f6acb9e7ce9ce1c0b3ca32428a5d3cabcc1545bcf429b14804fda7ae5d11651c3315e3b21dcf720743cfbeb2aa0d19c18a06dbe91dee4848230188a6198d414236e64b6c1ab9984c6dcf9e38831132cab15fec1182f4bf3e3c13bc6d5a7659966fe2d9639cd1607c517ad883ae689497a84df541745557ebaa5ed70c4fd3fb5aabafb51baaaa7e21bb5deddfe203d71ddca0219a6574fb470c8b34db05fd2f594b7cf9ab32bf77a19122db9327b2fbbec3a746f0a255eae47266b937a43a7221840c92e0eda542701978fb0f637f79118cd717f3e045900c773810459620836a97595cfaadd846b7d336baa40467f255ccd45bfba1151a8522c490c8c792aacb5b76aa08e5e20984415c41c776ce31fa1b878249313e050000",
    ],
    [
      "ETag",
      "nUzIeOxkJLWkOpvoc1xaCQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-106-1620693471142"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d90414fc2401085ffcb78b44d28226a130e60aaa20d6a950331842ccbb416b69dbabba5210dffddd9cac183072fbb2f6fbed9bcb72decf2720321acf3ecab467d38cbd0be3a91a0a995357c55541a040fd08acc918b6df3a89e6a7bb97896713337fbfcee7c3c1a3161e4271602c216d21cd5c640f8d142290ae4b5d54a772f32660f9573a6b3f7e83e4ad82868e38cd93c8ec7933882a3f76baddafd6b6579f4604beb0453d4584a74292a4d5b9476ea0a1a51540a7d43b59668a083bb41a6a9ae8426f2d9f183ded00f86fddef0e662701504833e938aa4b039950ccfdf381c58b24225d470417080ee24774dbb73dfd9aec4492d9dfe6b16b8d9f2f4e0e460d1bc68e278065db2c175ef27e72db9ec963b595da30752f0473fe416c2542883c76f19668186c6010000",
    ],
    [
      "ETag",
      "bYjwJlKut5YOcLwUsviF+A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxODgsImlhdCI6MTYyMDY5MzU4OH0.HpkqHtoN0l_SfZhyoYsgUg92WH3qqvKYgEci2fH2kB-nRYz7POt9hlydeusHyFgT3Out36yJ0IR2a_Ih8fG-0gk-PTXqhJu3dTHVezs58a7zFp31yH5DKFC8bX-H0OyVy5C3LwHgO0z7jW787YY992sCDFhWOWbUUfQawX3JefiVHeAwJGUc7q1rdsPup_WFQLa0J4lydMitntuXf3NGllAZv_Rh3EXeFVfqmBEOOotqTPvmoKNuT3zZ61NxpepxVFAJPuP37kOpbSxZ2uI0wcBs3KEBAR0tNmfB0FIPCFgeYt07xLpVxVL4M3hr4o8ZQm-lnxYsiUR9sGrsvCpbNw"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff1dd0d15682300000d07fd9b378624883de460412c9012d145f76064e24c6986c05d8e9dff3f409f7fe005a554c29a2fb9609f004660add65b58ca5e391fa64a2d224f2ca29b2ca64fd7d10d3b43e431fbf4ba15176533b3126a2cee755c0a81197e38c226c08dca5aefa4a3beec9d98928e7cd4eebed0322720b2f7bfa6906f0742c9f1b0cfbb03ddbb7bac2508647d4a68f48246f51e7bd8e7c368fba7478d88e3cc3728c05b5090d22cc5f70b33a6d8a1e51c58b7ca0494594f6acd00e864279cdc180fe549fd52a5e5f3e8ce1bae9c92d8f4727b1b27def830560936c06a64873e75ab6eb2ec0bf9de859b27b80c7e8c006f0fb0788d0215f1a010000",
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
      "Tue, 11 May 2021 00:39:48 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-107-1620693471142",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b6f9b3014fd2bc8fbda04c893468ad634a51b52425620eda66942365ca85b822936dda22aff7d17d374ad2aad9fb07dcfb9e7dc074fe49e97299911c6f38706eafda73bc1c8090145737c1d98deed9febefe7dcdd7825eccdf2eafc617c359f2382b72c497755013d299a3a0139db86fdbc164d456b217a98a8675bd39e3d195893d3e1686adba301122514d98a97f748bf55aa9233d33c8af77321f20268c5653f11bb9777f3716056b5b8834449f3ada68932d2fc40f5732112aab828e7db101d3412ea18769417e8e11f3565676f73f739ddf573043ff204689288a654ad2f4c918832e37953ebac64f644b4cf570712ba2b77191989289a5d1997740727464a158dd5be02e332d8ac0dcfbfdc04eb45e46dfc385c7e75d78bfe72b3daaefdd0b8f9ea06aea1282b40738db971a66f3e5e503f05a978a9d5a3f6b9557eee90f77e302d01a52574c1786a4da8ed58a72c63d3247386639659c098c3a6633a6456723a8251ca80224f8b6a162d4539b5c643660fac78ead8c378948e59cc26133b7620cd1c9ba5d96408e470427ed75cc105979590bceb10b909bcc88da360eb2f1791ab4bc86853a88bce585bc06b8f0a0b44d07f6a3ab4512e50a96db7e7476eb05846deb5db4d7805394df6e103ce38a3850444d31a9ba7a05e8b141b46fcc5dabd40b09ed8b7635092d9cf27d2f6bc75f1aae52ff40807d8da55fa4bc228f0fc2fdace11714d8b46431ebb03a9d0f22dd686ae0fbf10895bda6521575b37f841baa70032a8a14c3e9e268275e0e3bfedb8f908c6dd471da9f08ecb93c85625a9a15b22aeeb7d668f1d67643b44836bf52e361e39c7b6b539da8cb083523d97d46d3e56da8935f20584419cbfafdb75f80b36e9ebe47b040000",
    ],
    [
      "ETag",
      "2/IhxVXBiEOIney/nQBq5Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-107-1620693471142"
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
      "92dd4ec2401085df65bc2d9122166dc205200811909f72650859da6929b49dbabbd510c2bb3b5b118d9ae84d3b33fd667bce690fb08bb3005c58c7d17381727f11a19e9a6286aa48b4e25b4e9942b000b588987c4877baaf1791e75c3a1976a8b7cdc57cda6c32a1fc0da602dc038431268102f7e900994891d77c4a8a345b959d057a9f9be1dc9b0dc6f7dca714987ebc180e5bed61178ed67931105aac4afe1f6bcba3055b5acf304489998f464b2e698bbe1e189b4aa47982154585f4514109970f2249452e2451852715bbdaa8d84eadeadc5ed51bb65daf3199902f744c19c38b390b044d5a24337a659be03020cb921d87e5f585c771503a31e560ec39f552e05780b5857182abbf4116bc11fc1d3eb05306df39915291e933d51b3eb67e3b8e43fd3ceaaee5757f104a735467c41b8cba73af359a186e79f2dede6b5413499ca44213a25daddf5c379cea7bae1d3259f37b5c2d0bb4c017fc7bf4630d6e281285c73735ae332f7c020000",
    ],
    [
      "ETag",
      "KmktHtUgT6/6neCoFjpaSQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `amount` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-108-1620693471142",
    },
  })
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
      "db3010fd5722ef17904a9ba61f492b21d64160dd4acad21486b6a9b51d2798a671b01d3684fabfefe2503ec636a448897defbd7b773ee71ead781ea321223cbd2999bc7b772d086a20a6710abbc1d1af322d3e0f3e05f9c54a7e2d4ae7f4a693eeef0382572c85d745c6f6942825656a389f355329ca024b21f64068af6d7b7bedbe63f7079daedb6e771d202a9625139eaf807ea575a186add63679331522cd182eb86a52b17edc6fdd3aad428a6b46b56abdccd98234aaf546d6834c50acb9c8f7e73370502a26176c8d79061e9ea83179ff52bbc9f1ba9902f8965386291565ae2b5f2041459ef0b49446150def91f1f9ec03cdfc897f185987d37910ed2cf1ba222f772dacacc542325566ba612da1a884676cc1e3651d2956d671383d850838b8c28aa9a575f1d10f7dcbda6a58df4bdbee30ebc01a0547d64b8d7160cd83c09f45d6cec1ae75124ee767d687cb1718301f33a5796eac479864acb2fdd0def1eb53ad085883953ab870ed3e6e7bf68024c4a589d7e991c4668478c4ede10eb1e9a0cbba31611878ba52372c9c8b9c3a5e87f488c73c27ee2724eed9c44dda0387d8b1e7d10e65ddbe6bbbed186d1ae8a7e49a1d715508c5eb16a38b701cf98b289c0787a3c837652418da78549bab8a78ee53439100fa4f5d9b2aca0564aace6b1c447e383a8cc6e77e3d221396627a37bb81214970a618a0b1c46ba6993c1531340d9d4d67e3683c0d46136098733fdb22141a7ebb7f22447785e9b2366f743c998ea27ed738d842ce71561acc6dfd81dacd1e20368d7fcb8cc2707409a9b194f8ee8f1894d337f4bf643078b3aa6d3e664455b6edca419b1f1b781a08ee54ad8ebeccfdf012d55b214b9864397d7b7c006c026fff1bb6f714c07053218fd2b08669a5aaca4225aba796af8ddf9addf3068ee3220396fa55ac3370b7c75369548a6ccd72fd50",
      "527d4f4da7aa50a91e411084610bc6c109447f038c82b9dd29050000",
    ],
    [
      "ETag",
      "NDxugpK9JNnWkrXpu2Mq3g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-108-1620693471142"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d904f4fc24010c5bfcb78b44d5a40d4261cac214a24558af5620859cab414da4ed93f2a69fadd9dad1c3c78f0b2fbf2e6379bf7b68543516f21804d911f0dcad3458e7a61458cca945af1d550ad101c402d724b3e1b935c2d2e0f5fa13ceeaa308e9edef6f964c2844a775809085ac80a2cb70a82f7166a5121afadd7b27f91317d6aac338b5ea70fd3988d8ab6d68892f9fc2e9c4fa1737ead35877fadac3a07f6b489314389758a364523698fa99ed9824a544d89ae22235354d0c3fd2097641a21895c765cdfbb71fdf1c01bdf0e47d7be3f1a3059522a744135c3c992c381262dca983eb9205840f692bb66fdf9d1dbb6c459adacfe6be6dbd9eafc6078d2a85e24713c8536d970e0fde4bc279b5d73272d0d3a900afee8c7424390895261f70d41d9d630c6010000",
    ],
    [
      "ETag",
      "bOuuU5Q+kxBrqhmBRNKVjg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxOTAsImlhdCI6MTYyMDY5MzU5MH0.HMR9HauNaALoIrwKusXDMEVESZrTLCJv3qWvA3ETrEo6GAk3NmmXdg2Tp3roLpzVPL3RQ3nbkluO_q04q-mz-ZuJ0U50Q2RUBpRisJlnnBJIh8ek9NyDKbspcJRm7OQarSffHReneiqcDY8OzO9eFZYaD15DT7m1TebLYaq4CSy9lavvIPkydMl4lLkEBQguw4zzLGX0mR8087W6UAFw8GZdoZSPhhbiXAbm8WSBrRH-YvATC03pwUim5_u_pTClucm_30YTEr3pAcVHZKZththM-N4iwPY8AU9koZZVZr6zYkHycaBdod-2-CH510f4JAdCQ9znZyEhmvRPcERZtg"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "40",
      "00",
      "00",
      "d07fd9e7c8b86d87be09520da3960af56258cb0a625d42e9f4df9be9279cf303328cc934a573df903b78055b26aa477cb499724aab527ed74ca3b88a1d0793a4ee1774e3298af6a0f38c456df81e7d2d128cade85a0a50f7e525c7a85bf4f133b3e7cad8f4c48daff076ce49f5589b8b645b82e325036bb395125f2869ad28ada9884d11bd0d02fd40aa19b567dc0e9c69f47e5059e55eb87c15bf508ea7050cd70d07e1c38136f3088738ead570f4a9cc896c774343c1ae0a679151e2b8e2ac4173cefbd1bdfb030e2f496b691d9c900f0e807cb37a24535a3fb91254d503f8b7a7f3c6c833e044b2918ce0f70f21ab01cf1a010000",
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
      "Tue, 11 May 2021 00:39:50 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-109-1620693471142",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85535d6fda3014fd2b91f75a20844009125a194d3724085b08adb6698a6c73939a26711a3b5455c57fdf8d53ba5695d6a7d8bee7dc73ee479ec89d287664429848ef6ba81e3fed25236704344df15567bf58d8bfda1ffa5f6645a86ff7f943a4d2e91411a261299a97197494ac2b0e6ab2dd74d34ad625ada4ec60a24edff63afd91638fbc817bdeefbb0e121564c952147748bfd5ba54935eef24de4da54c33a0a5505d2ef397f7dec1e99595dc03d7aaf756b38732aaf781eae74c72aa852ca6db0d3aa8155431e45464e8e11f75c72edee6ee0a9a7753041f0407cab9ac0bddf8c2145c168948ebca64259327627cbe3a908dbff4e791c56556e7455cd01cceac1dd534d68f255857e17a652d82ab75b89a458b75106fe6dffcd5ac3b5f2fb7ab6063dd7cf343dfd2946560b8d6d4ba30b7002fa8bf03a54561d4a3e6b9517eeed0e2fd601a024a2b6883f1b93da2fdb1edb1849df3643c18b2c406c6c6ec7c4807cce69e0bee8e01459e11352c5ac882259ecb06232f066f94c4ae637b3175864eec7ae3d1686cbbc39de392e31979a884864ba14aa944db2172132e223f8ec26d309f45be2921a175a62f5b634d01af3d6a2c1041ffa9e9d8448544a5a6dd8b20f2c3d93c5a5cfbed84979052feb8b9c71927345380685a61f334542bb9c3869160b6f22f116c26f6fd145464f2fb89343d6f5cbc6af90b3dc2013676b5f9924d142e82afc6ce09714db3da400eed819468f9166b43d7c73f88c42d6db3901f5b3ffc49daa71012a8a0e01f4f13c126f0f1df76da7c04e3eea38ed278c7e5e1aa51e115b44b244cbdcfeca1673b9ef95735adf4bb18263fb5adc9d164841c0afd5c52bbf958692b56ab17100671fe8169d7f12f623517417b040000",
    ],
    [
      "ETag",
      "tlZbR1Fjv1BAnRthjmwTsg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-109-1620693471142"
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
      "8d925f53825010c5bfcbf618ce881a1a333e6059d1a0f9077b691ce70a0ba2c0a57b2f96e3f8dddb4b664d35532fb0bbfcf672ce813d6c923c041b9649fc5ca2d89dc5a8c6ba98a02c5325e956f05c2218808ac5447aeea613f69ba3c7f5fd78e6e179f2da8bb671b74b840c569831b0f71025988612eca73de42c435a0b785a66f9a2ea0c50bb420fa7fec41dde529ff150f7c399e7393daf0f07e3b41832c51615ff8fb5f9c180355f4e30428179805a4b21f81a03e56a9b9265458a35c94b11a0840aae1ec4829705139cd7685233eb9735d36ad4adcb66ab6d9aad0691290f984a784ef06c4a024171c5d2097f219b601120aa921c47d5754be324ac9ce8d21dfa56ab12f815206d5192e2e26f9004af187d870fec98c1778e65bcccd589baf11e9cdf8ea3503f8fba76fcfe0f422a8aea84f8eea03ff59dc14873f3a3f7de4ea11c094e494ad4219af556e7a26dd5df73bde23a6b7a8fad448906048c7e8fbb44811db154e2e10df06e55cc7c020000",
    ],
    [
      "ETag",
      "LIk8dE3PVjJQULe+ixBfvg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `id` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-110-1620693471142",
    },
  })
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
      "3010fd2a91f74f2bf12321100252d56534eb9068e84268556d1338ce257509318d9d56a8e2bbef9294b66cdd2a2161fbdebbf7ee7cce1359f12c224312f2e4be807cfbe94e84a44140d1044f3b2e776670b1baea16dbd16d3c7032ae92c7931344f09225e97a9342538a22672087f3592bc945b1a1b9104d4cd4340cbd69581ddd1a98ddbe61743b489490c6139ead907eabd4460edbedbd782b112249816eb86c31b17e396f3f74da9b5cdc0153b27da8d94619d9fe40f534158c2a2eb293f90c1d1412f205ac294fd1c32b350a3f1fe66e71ba6e25087ee00c2863a2c854e90b533091c53c29f22a2b193e91cae79b0599b913771468a3e9dc0b8e96745d9297c71a95da6291832c52d5d0965854cc5358f0685947362bedab3fbdc0083ab8a512e452bbfee6faaea62d4bd0cf42d74da69d6a8e77a61df2c79e36f73c77166847a7c7dab93f9d5f6a5f6e0e30683c02a97856d90e68984269f9b9b5e3bf6fb424508536eae0a2af5bd4b0f54118877d16db662f8c7508433becf7a819ea6cd0856e1402459e2ab3572c9a892cb4635b8f4cb08cc80623366d0a6c6059b61d5b08b7fb56cc6cb30f26d935c863ce159c71b91192d7ed25d7fe387017813ff7464ee05665c4145b78569b2b8b78eb53619108fa4f5dbb32ca052a957735f602d77746c1f8caadc763020965dbd93d0e484c530988a6395d8382fc4244d83472399d8d83f1d47326c8a8eefc728f9064f8e3e995106c37559755f55f6a59dd4a7f0fb8a26951211eea05317a64b76bfc3b85e3fbce0dcad23ca7dbf7d3bf9bbfc257bbdae28b1e29d5f6bb0ed9fddae1af41f02dd5d9c9f7b9ebdf90fac8871872c8d8c7a383e02af0f13761ff3e118c2f1475a4c23d4e2a93a50acba19e58beaefcd6ecdec0189803528173f567ac83abfdd59439ca8c",
      "b0864c3d9754bfcfaa5365a8902f200ce2a07963ef1ca3bf01dd43942421050000",
    ],
    [
      "ETag",
      "2EiASeMkV4uyChf9Anitgw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-110-1620693471142"
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
      "00000002ff8d90414fc2401085ffcb78b48d140868130e604089844891c4c410b294692d6c3b75778a2184ffeeeceac183072fbb9337df4cde9b331c8a6a07316c8bfca34173baca9117ae48d0369aad7c355516210064950bc9955a65afd7bdc368a26f54399c649da7fe623010c2a6ef582a88cf9015a87716e2b73354aa4419db6c8cdf28189f6aa74ce72fe387712242493b27cc57b3d970341bc325f835561ffe35b2be04b0a76d82191aac52742e6a437b4c79ea025a55d61a434b8d49d182877d2337d4d4ca1085a28451d40aa35ebbd5bbeb74fb51d46d0ba929555c5025f06a29e68089954ee8530282038c2f256be6dfa3c81d1fe2e801e7edef5ee47aeb9f85a313a37d3624f62c3a67dddbd6b7cf7b72de5932b169308054c9a11f0b863853dae2e50bb36e9105c6010000",
    ],
    [
      "ETag",
      "tnaUfX+6kBFl/amAFf3K7Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxOTIsImlhdCI6MTYyMDY5MzU5Mn0.aewpLJlojeoNL6nQpBpYbNiaPMqD9ggrlgNA0vaN27YL8b0sJZ_ht8FQ-aKZTl9og_x5HkhBCCiyqvdqLRqaw0mmhmB8q9TQ5OJHHJhiW6-kqsU4-d3bW4mNJznHEv6vES8Ajn2MAlGCWtcSri52MUoCzDeVuRcPBIAxV-HXpd7VonqAq9_xOijaqqQ6R4lSB4uS7t86w0Jcl27wEMmGKzcaT3jq46yft0EUuqe8CICusJiJVbNQRkJs-LzAVKAIb0XrUVWI-d9_0J5NYnX00m5lRu6FMXS6jYwpyKEzDYm4Wpc-EcTdQMuH37pF5sk4DWWywuDrOu4Q-N5WmLXqxw"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff1dd0db6e82300000d07fe9b3315c2685bdc9601341604020f2d2602d8e4ba140b99afdfbcc3ee19c27c83026c380785b9106bc833593b43ddedb4cd5d1038bf67d6aca48a106dbe6ad5303df99b3334e439149b4960b3577aae32c0577d591637d1dc7ab468dafb75b20b830ff9990f2bd3a283d5e1a852b9b39a5b1c1156239adc587e6615ead962d49dafb753bf8dc16a253159de9b14e281760c2ea82f24fe4d55505118d543885ee8add54c402bb719e95289c55642206bb84fb41c960b694f0607bbdd5c465af8ce6788937b96dc4fcc3133ae80d6174023b401656f46440c58b2b1f346d07feed88af8cbc027492f5a407bf7f009e48ce1a010000",
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
      "Tue, 11 May 2021 00:39:52 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-111-1620693471142",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85535d4fdb3014fd2b91f70a4dd3a66d5aa91a5509a3539b6e690a9aa629b29d9b6048e3103ba082fadf77e35006421a4fb17dcfb9e7dc8f3c933b5124644298c8ee6ba8f65f6e2523270434cdf035d5fbebef974ffb606907bd42ea27b7ccd8e3748a08d1b014dd95399c2a59571cd464bbe96495ac4b5a49798a894e1dc7397586bdee70dc77478ee3f690a8204f97a2b843fa8dd6a59ad8f651bc934999e5404ba13a5cee5edfed879e5d56f216b856f67b4d1b6594fd89ead75c72aa852ca6db0d3aa8155431eca8c8d1c33f6ac2cedee7ee08baeb64087e101c28e7b22e74e30b537059a422ab2b93954c9e89f1f9e64036fed29f47169779bd2be282eee0c44aa8a6b1de97605d84eb95b5082ed6e16a162dd641bc995ffaab5967be5e6e57c1c6babef443dfd294e560b8d6d43a33b7002fa89f80d2a230ea51f3dc28bf7468f171300d01a515b4c178d41d52c7eb8e59ca463cf5fa03967681318f8d06b4cfba7cec829b30a0c833a286450b590c1878ce384d63ea7ac3d875dd7e3c660e8f931e4d60ec8e3c3e74c8e1843c5642c3b950a554a2ed10b90e17911f47e13698cf22df9490d23ad7e7adb1a680b71e351688a0ffd47468a242a252d3ee4510f9e16c1e2daefc76c24bc828df6fee71c629cd15209a56d83c0dd54a26d83012cc56fe3982cdc47e1c838a4c7e3f93a6e78d8b372d7fa54738c0c6ae365fb289c245f0cdd83922ae685e1bc8437b20255abec1dad0f5e10f22714bdb2ce4e7d60f7f91f62984142a28f8e7d344b0097cfeb71d371fc1b8fba8a334de7179b86a547805ed120953ef0b7b30ee77071e31e04a7f88f5bdc1b16d4d8e2623eca0d02f25b59b8f95b662b57a056110e71f98761dfe02d2e0e8bc7b040000",
    ],
    [
      "ETag",
      "ftyWJHzyNL/N2notz4pgbw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-111-1620693471142"
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
      "92414f83401085ffcb78a549a91595c4036aad24b4564abd18d3ac305074617077d1344dffbbb3a8d5a8895e6066f86679efc1061ecb3a031feecbe2a945b5de2bd05cdb2246dd4aa3f9d650ad111c40230a26495e8fe3c54d53503eea5f4dc228cb5a139c9c30a1d3155602fc0de425ca4c837fbb815a54c86b29c9b6aa975de780593776384fe2703ae6bea2ccf6d3451405a7d108b6ce6e3113462c3bfe1f6b775b071ee83ec61c15d6295a2d8da2074c4d686d6a5135127b9a5a95a2860eee1e148ada4628a21e4f7aaeebf65c6fd0f78ef78787ae3b1c30292915a6a49ae1c59c05822123644c2f6c133c065457b2e3bcbb3ef3b8cc3a27b60ca78937ec047e05585b5e4a5cfe0db2e095e0eff081bd67f09d1315b5b5d95117d155f0db711ceae751e74132fa4168c351ed90249c8ce649309959eeeeddfbe9daa09e29e22435da10ddfef0e8e0d0ebbfe57a46366b7e8f6f548b0ea4827f8fcbd2809f0ba971fb0aaa6aba5e7c020000",
    ],
    [
      "ETag",
      "olQGRUVpgofE0OMILddutA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-112-1620693471142",
    },
  })
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
      "7d",
      "6f9a4018ff2ae4f64f9b5805447c499ace2aeb482c3ac436cdb6e8711cf62a70943bdab8c6efbe87a3b675ddd6c444b8e7f7f63c77c713dab02c420314b2f57d498beda73b1ea206a212af61b5735e3a463cb31fc77cd3b637e9f92f576e1e4f4f01c12a96c0699ed013c1cb82503158cc9beb8297392e383f01a113c3304f0cdbd4ed7edbea1a86650251d0249eb06c03f45b29733168b5f6e6cd35e7eb84e29c8926e1e9cb7aebc16ce505bfa3448ad6a1670b6c44eb03d7b384132c19cf4e177348500a5a2c698a5902195ea951f8f950bbc970da5c03f881118a09e16526ab5c20417816b3755928553478422ae79b07347726ce28d046d385171cad705a9157c71a16da7259505126b2a1ada0a9982574c9a2555dc937da177f7a091548708b05152bedfaabe33bdaebd24afb51ea7a9b6867dad01b6b872aaea72d3ccf9907dad1d9b176e14f1733edfce60003f1232a24cb54f8008709ad823f0fd87dbfaf15014b70ae8bcbae6e63a3a7f7c338ec92b8d7ee84b14ec3b017763bb81deaa46f512b0a29069eacd4150b673ceb9a6114912e2666d48b6c12f5f56ec7d44d1bc704347b96056a766874d0ae811e0b26e998899c0b560f195dfb6ee02c037fe18d8681a3da88310c725c87ab9a789b53429300fa4f5fbbaaca3838553be67a81e30f47817be5d4876442d7986ce7f7704c629c080a685ce0944a5a5cf208868666d3b91bb8536f380186daf9d91e21d0e0fbd32b21d8e66aca52fda379e0bbde850ab0475ce1a4549087fa010d73c88a76bbc6bf6586be3fbc016b5c1478fb470ddab1ad8afe170b85576f75ccbda5812ab7fd9b89763f77f06b20b855b53afab670fc1b542ff934a605cdc8c7c707c0aaf0f1d7617f53010c77157c84847738ad44542ea4a0f5a965a9ca5bb33b7dabd3b3900217f25dad6b9afbeda9342a459ad24c3eb754df5435a9aa548a171014e1b0796aa776bf01f4",
      "8197392b050000",
    ],
    [
      "ETag",
      "5BuE1fP6wDok36kmBzItkw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-112-1620693471142"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d90414f83401085ffcb7885a4605394a4076b501b095a6cd318639a2d0c48bb30b8bbc450c27f77b67af0e86977df7cf3e6cd0e70ac9a1c42d857e56787aabf28d1acec2545dd49a3f968a9d1080ea01125937ee23f6df74d11c9d3e3f1751ba813de79abf99c099d7d602d201ca0a850e61ac2b7011a5123b7ed76eaecc898e95bab2c9375741fa52cd4945b21d9c4f1cd228e6074feb4b5c77fb5bc8f0e1c689f62810a9b0c6d8a56d10133b3b40b6a51b7125d4d9dca50c3193e174a455d2b1491cb8aeb79beebcdfcc9ecfa721a78ded4675252264c450dc39b170e07868c90297df1823081dff7a237a89f15b1bb466b3cbd0a7ec6dc921d6d3892511d3a9009fea787ca405808a971fc065c19fc9885010000",
    ],
    [
      "ETag",
      "2N2OWbnfElzKkYW7rzeF1Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxOTUsImlhdCI6MTYyMDY5MzU5NX0.a-YgM1JJgfbPTas8F479MQEa42pv9mB4xGYcYjz4MuOPSZKslqIs_1RPDJgEhY1sLFfnNMlkSLGkWmGqQLvBEx3mpeebz7lBkOwWN9DSKIANlGSQwsAhlOMrghStVaur0zJ3pJFepNZobuYDaIKSIV_if53aLYNl1CSLFJ3g5-_0ZCtVlVqKwS6OSgm2maE74jj8SbAMd98S6-9DfKYuartZhaYgqUCMeMGRdXp9T5Jblt5He7KbxLVcG_1zsgk0j3-Va9MLJaBd8UfTqxrVcu5Vm99pHCIjVWadv3MQehcvx3QwSKaPdqDPKp_DTSfJcaa7STg7bZrM68JCEzzK3Q"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff1dd0c98e82300000d07fe9590cabc2dc000911866d4840bd34d0965db6a216ccfcfb98f984f7de204388500a97a1253df8026b266a7bb47747d58025a9d47ac6a1e5feb41ed39812f398330cd4e7fca32e36bd38a80c2a323bdcb6709a35942d9c902226bc369edf88ee04b5e9d0b246c5e89fa928c5278235be94171a9cbae99bf8094e275dbff4726edc2f70ab9aa24d8e89f8f2998feded9c06a541a5d47683aabd0ebd3a5469700cc5a10998176515525a76bd477caa67f1d3e3243b767ad37d749e748b2c6985cc111cdc2d398b8427793526c7f06a811d206cac674261fde14a8aa6edc0bf1d2eeb483e0106c9663283df3f69c7c3271a010000",
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
      "Tue, 11 May 2021 00:39:55 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-113-1620693471142",
    },
  })
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
      "000002ff85536b4fdb3014fd2b91f771f411daa469a56a5425ac95da94a529689aa6c8766e82218d43ecc010ea7fdf8d431908697c8aed7bce3de73ef24cee449190096122bbafa17afa722b193921a06986afd78fb79709a376757ff735f9b30817f2bb0c1ea753448886a5e8becca1a3645d715093ddb69b55b22e6925650713756c7bd0b1ddd3be3b1e0c47b63d3c45a2823c5d89e20ee9375a976ad2eb1dc5bb9994590eb414aacbe5fef5bdf770da2b2b790b5cabde7bcd1ecaa8de27aadf72c9a916b298eeb6e8a05650c5b0a722470fffa8093b7b9fbb2be8be9b21f84170a09ccbbad08d2f4cc165918aacae4c56327926c6e79b03d9fa2b7f1e595ce6f5be880bba87132ba19ac6faa904eb22dcacad6570b109d7b368b909e2ed7ce1af67ddf966b55b075beb7ae187bea529cbc170ada975666e015e503f01a54561d4a3e6b9517ee9d0f2e3601a024a2b6883f1a8ef52dbeb8f59ca463cf5060e4bfbc098c7460e1db03e1f0f619830a0c833a286450bac394dd2fe888d6237197af1d076bc98392c895dcf75a1ef398ecb28399c90c74a683817aa944ab41d22d7e132f2e328dc05f359e49b12525ae7fabc35d614f0d6a3c60211f49f9a0e4d5448546adabd0c223f9ccda3e595df4e780519e54fdb7b9c714a730588a615364f43b59609368c04b3b57f8e6033b1cb635091c9af67d2f4bc71f1a6e5aff40807d8d8d5e64bb651b80cbe1b3b47c415cd6b0379680fa444cb37581bba3efc46246e699b85fcd8f9e14fd23e8590420505ff7c9a083681cfffb6e3e62318771f7594c63b2e0f578d0aafa05d2261ea7d613b636764bbc4802bfd21e6d9f6b16d4d8e2623eca1d02f25b59b8f95b662b57a056110e71f98761dfe021c4db7a47b040000",
    ],
    [
      "ETag",
      "WwjPdba1rqk+dxHRHoGoNw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-113-1620693471142"
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
      "000002ff8d92dd4ec2401085df65bc2d492b58b40917a0882405f929176a0c59db2914db4ed9dd8a84f0eece5644a3267ad3ce4cbfd99e73da1d3c2779041e3c258b7589727bb2403d36c50455996ac5b782728560016ab160b21bdb763296f7bd57ff72ade45d275a5ed1a6d56242854bcc04783b88134c2305dec30e729121af859496593eaf3a0bf4b630c36930e90f7bdc6714997e38f3fd76c7efc2de3a2e46428b79c5ff63ed716fc18a9e2618a3c43c44a3a590b4c250f78d4d25b222c59aa25286a8a082ab070b49652124518d2735c7a9d71cf7d4762fea8da6e3344e994c29143aa19ce1d9940582262dd2096dd826b80cc8aa64c771757de17112554e4cd91f066ea312f815606d7192e2fc6f90052f057f870fec90c1774e6454e6fa485dfbb7eddf8ee3503f8fba6a07dd1f84d21cd51109fa83ee34680f46867b3c78ef6c35aa91244e52a109d1b11be7674dd77ecff5924cd6fc1e4fcb122d0805ff1e3789062f16a9c2fd1b004c98587c020000",
    ],
    [
      "ETag",
      "Ef00iQrZGxLCqsrYBdhDow==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-114-1620693471142",
    },
  })
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
      "a3",
      "4010fd57c8de2f9af493d20f9a18afb6e871a9542968ccdda55d960557814576d134a6fffb0d8b557bde9d0909ecce7bf3deeccef08cee5916a2310a58fc50d262f3e58e07a881a8c431ec5eb4fde9fc249a199713d23df5f5f4617ef7fde9e80810ac62099ce6096d0a5e16848ab1bf6cc5052f735c70de8444cd6ed76876077a6760f68c212c74200a9a447396dd03fd56ca5c8cdbed9d782be63c4e28ce9968119ebeeeb71ff5765ef03b4aa468ef6bb64146b43f513d4e38c192f1ecc85f828352d0624553cc12f0f0460d83affbb95b0ca7ad18c08f8c504c082f3359f982148467118bcb426545e367a47cbefb404b6b6e4d3d6dbaf01def608dd38abc3ed4b0d056ab828a32910d6d0d45452ca12b16aeeb487eaf9dba8b738880835b2ca8586bd7df2cd7d2deb6d6dacfb2d3e911ed589b38336d3f8bed68bee3584b4f3b383ed4cedc857fa19ddcec61c07e4885649932efe120a195f19703b63fde6b45c01294ebe06ad819e0eea86306513024d1a8d70fa20e0d825130ece35ed021a6418d30a01878b2caae5838e39919e04e7f18521202aa1f1a44378c8119e88161ea3d3ce80ff5e1a81be9146d1be8a96092ce98c8b960f521a36bd7f6ac95e7face74e259aa8c08c341ce6a735511ef7d4a281240ffa96b5b451907a5eac66cc7b3dcc9d4b3afacba49e634c664b37c803689702228a07181532a6971ce435acdc762697bf6c299cc81a16efe62871068fce3f98de06d7275ca52bdd1d2736de74c19d821ae70522ac863fd81700e5ed176dbf8779a89eb4e6e401a1705defc118372064645ff8b84c2ab556d7327d94595da6ea5a3edaf2d3c0d045355674797bee5dea07acba5112d68463e6f1f00abc0e77f87dda40218661574848435742b11950a2968ddb52c557e6b76df1cf44cf56f91b890",
      "1f62fdbebebb9e2a479591a634932f25d593aa4eaa0a95e2150441683647ddd4f63705aa52682b050000",
    ],
    [
      "ETag",
      "P/UCLBfD4QAc1FU2mqLjJw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-114-1620693471142"
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
      "4fc2401085ffcb786d130bb568130e62504908d1225e0c21cb765a0b6da7ee4e210de1bf3b5b8de1e86577f6cd3793f7f604fba24e21866d917fb568baab1cf9d51509dab6642b5743b545f00059e5421ef5f69d6d118593ba7bcc86e960a9133e8ec74258fd899582f8045981656a21fe3841ad2a94b1cdc6f41b05e3ae71ca6cf1367d9a262254943a61b19acfef27f3299cbd8bb166ffaf91f5d9831d6d13ccd060add1b9680ced50f3cc05b4aa6a4af42db546a3851eee1bb9a1b65186c817c50f82d00fa2c17574370c47f218085992565c502df06a29e680895599d0510282034c5f4ad6ac3f0f22dff4210e3de0bc5df6a2bf5ee07aebdf85938ed1be18127b169db3f076f4e3f3819c77964c6c5af4402bf9e8e78221ce5469f1fc0dc19b9310c6010000",
    ],
    [
      "ETag",
      "wcbVtsi64BnyFf3d2ScRtw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxOTcsImlhdCI6MTYyMDY5MzU5N30.KZNi-5PEn9dYqeGQdzGdC82fB553txkSwvxt4tOeyxd1kK27fTKGfgVmYVoHKDpkkCCOix0qnD8YbqvLqMwKpq1cu7bzcHSQnIoeqmgbYJPaZHpjmtXgWJTiTk5UcKZkY1UmFQYrBQD0SDT8hXklKCOpqFU-Svi390z9G4X_FDyl-KdXe4h1Hzp_9780_b7zbKAghFhI24OGnerzc1v3BQFIUqkphYe1bpOBvjSMeJXfv_ZLjo6kqpqjxYFDq2pZEurZ-A3SopXV68w4pNnqMHfB11WLIUdI--515mnrIxOmiGJtAUhZnzQpn1ZPujiWfGjBYhi0yKv4Pn99Cx28jQ"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff1dd04b7282300000d0bb646d1d14f9a4bb504b33a2ad4cea8f0d4320420c8690606de8f4ee757a84f77e405196cc987ce80493e019d8620ea7e534516194d70c279c1b3ef2b26e637f7f22f0f31ea357480a6f15867a97dabd5c3a90af768264b8595cebb7069a08e9439713f981b08ca314b6944317198cb67b1b8cc15a454123fb41dc3135b6a34f8871b756bc3b1f084ae96546db8b5538bb1acff7a11766f3d9787c8f454fab4cebaef2fb8d10bdbc7dd5d876ba3c87a746aea1da16e2b650d2316e0cf95d8eda21042f584297bd3bac5f36b40ae3d3114c00fb565c3393f307d7f5209c807f7b3e58c51e01112b34d3e0f70f136d7d851a010000",
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
      "Tue, 11 May 2021 00:39:57 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-115-1620693471142",
    },
  })
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
      "535d6f9b3014fd2bc87b6c13a0104222456b94d21629211b9056d33421630c750b9860d3aaaaf2df77314dd76ed2fa84ed7bce3de77ef0821e589da1394a59b1ef68fbfce59ea7e81451890b78bdba9f9193fd7e1bfa726a9d74b53573c549b1580082f52c81aba6a423c1bb965031df45e3a2e55d835bce479068649a9391e99c19ceccb2a7a6699f0151d0325fb3fa01e877523662aeeb47f171c1795152dc303126bc7a7bd71fcff4a6e5f79448a17fd4d44146e89fa87e2d39c192f17ab18bc04127689bd00ab3123cfca166e9f9c7dc6386ab7101e0474628268477b5ec7d410ac2eb9c155dabb2a2f90b523edf1d50e4adbd55ac115e76559dd4b8a2a75a86254ee47343b5cb70bbd1fce0721b6e96b1bf0d926875ed6d96e3d576bddb0491767bed859e26715a52c5d516dab9ba057001fd8c0ac96aa51ef7cfbdf26b87fc7f07d313405ad021984c0d079bae314bf3744a72d79aa4b941d3d44da7136ca50699d9d4ce528a81a744150bd7bcce0cd3349ddc4a5cec6489eda679822d6c25c4342dc7c6c4ce0c071d4ed153cb24bd60a2e1820d1d42b7a11f7b491cee82d532f6540939ee4a793118eb0b78ef51428100fa4f4d873eca3828f5edf683d80b97abd8bff18609af6981c973b48719e7b81414d0b885e649da6e78060d43c172e35d00584decdb3128d0fce70bea7bdebb78d7f2377a0c03eced4af545511cfac195b27344dce0b25390c7e1801ab07c07b581ebc32f40c2960e59d0f79d17fe40c3534873dad29a7c3e4d00abc0e77fdb71f3010cbb0f3a42c21d9687885e85b4745822a6ea7d654f6653c7b59102b7f2ef986b4cdc63dbfa1c7d465ad15abe96346c3e543a8875e20d0441987fa0da75f80d11099e057b040000",
    ],
    [
      "ETag",
      "Gj9c+qqORIt73+un398s+g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-115-1620693471142"
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
      "0002ff8d92dd4e83401085df65bca549a90896a41768abb6a1ffd4c418d36c61a054607177a9a94ddfdd59d46ad4446f6066f86639e7c01e1ed32202175669f254a1d89d24a8a6ba98a1ac3225e956f2422218808a2544fa5d27196ca76d4c5e9cb673970f6e136bec753a44c8708d3903770f718a5924c1bddf43c172a4b59067555e2cebce00b52bf5701eccfaa36bea731ee97eb4f07defc2efc1c1382e464cb165cdff63ede160c086af6618a3c02244ada5147c83a1ea6b9b92e565860dc92b11a2841aae1f24825725139c3768d230cdb38669b79a76fbd4724cd36a1199f190a99417042fe6241014572c9bf167b2093601a22ec9715c5fb7344ea3da892efba3c0b66a815f01d216a7192eff0649f09ad177f8c0de33f8ceb19c57853a5257fed8fbed380af5f3a8ae17f47e105251544724e80f7bf3c01b4e34f7f0eefd62a7504e04a72425ea10cda6757ee6d8cdb75c2fb9ce9adee32a51a10121a3dfe32655e0c62c93787805512d2db27c020000",
    ],
    [
      "ETag",
      "LD7gJvQ9egz797YmJVg4OA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `date` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-116-1620693471142",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8554ff4f9b4014ff57c8ed1797f40b506ca1897155992351aa94ba986d698feb839d520eef0e5d63fabfef01d6e9be993429dcfb7c7befee7824b7bc5891314978765781dcbcbb1109e910d034c3d549569aee1148ffc79d3cba0c36d955319b3c1c1c2082d72c45d7650e5d252ac9408de7b35e2645555229441785ba9635ec5a43db1c7a036764598e8d4405797ac68b5ba47fd7ba54e37e7f67decb84c872a025573d26d6cfebfd7bbb5f4a71034cabfe6bcf3edaa8fe1bae87b9605473511ccc6798a0522017b0a63cc70cbfa8abe4c36bed1ea7eb5e86e07bce803226aa42d7b950828922e559251b55327e244dce170f64e69ff9c7b1713c9d87f1de92ae6bf2f2bd4195b158485055ae3bc6129b4a790e0bbe5ab695f2d6f8184dcfb18209be53056a697cfee447be612c5754c3d2f85a99e6801987c6243c315e2b04a1310f437f161b7b87ef8dd3683abf308eae5f6130fa0a94e645133ca6490e75e8a7e1067fee694da01a83b4c5c5c81c52cb35bd244d462c7507fb496a4292b8c9689f0e1293790e38ab0428f274addeb068210a36b43c303de60d12e67ae026b60bc341e28c1cc7c25597da2863598c6c3be441720d275c9542f176c0e47314c4fe228ee6e1f124f69b36528a433c69c3d54dbccca9b14904fda7af6d5de5029deadd0ac2d88f26c77170e5b707e40c32ca36b33b3c2229cd15209a4aba060df25cac7068e4623a0be2601a4ece90d1ecfac50ea1c8f8cbe32f42bc299b29ebe69f9cd40d6c5f085ed1bc6a00f7ed03b14ddbec9a76d7da27db6de7df4a93289a5ca33b95926e7eab614743a7a6ffc5a7c1376f6dd29daf456ab7e71464fb6d8bbf0ec14bd5aa93cbb91f5d93762982142414eced1384e0a6f0f6c7617751118c57157d94c6773cb04cd52e4c427b70f9bac9dbb2f73dcf725cd280a5fea3667bce6e876a8d5a11d650e8a796da8bda4caa2e55ea1984453c6f61109e62f527f26b21392a050000",
    ],
    [
      "ETag",
      "Agp08BerExqrBQIygVnSAw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-116-1620693471142"
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
      "0000000002ff8d90414fc2401085ffcb786d130a4dc5261c44889234448a7831846ccbb416b69dbabb8520e97f7776f5e0c18397ddc99b6f26efcd158e55b38718b2aafce8505d6e4a342b5ba4a83b69347f2d351ac10334a264723a0ec399ccce9faf426db2f52ce9f4a25a4d264ce8fc1d6b01f1158a0ae55e43fc768546d4c863bb9d721b193397d62a8be5cbfc719eb250d3de0acb4d92dc4f9339f4deafb1f6f8af916defc181b2140b54d8e4685db48a0e989b850da845dd4af435752a470d0e768d5251d70a45e4b3e20741e407d17010dd8dc2db2008874c4aca85a9a86178b3667360c80899d299038205942b396be1de13cb2317e2e400ebedef5e607bdb9f85d38b41fdac88ed69b4cec2f1e0dbe70359ef863319d5a107b9e0433f5506e242488dfd17e50c98d4c6010000",
    ],
    [
      "ETag",
      "B844DlbwzVarUbSDLusIiQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:39:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcxOTksImlhdCI6MTYyMDY5MzU5OX0.Iw3-igMSqXcBZfG77_o5WPFkhkFFL0JGwLZvGxCUDb9EsqvSFk42v5RSnNay33d4BGz0pZsQ72Fj90FlYgYXGwjGxWSXuXlMxg3BQRM-XASQtOFvxrqZ94qNHXf5ePS3gPmUx9_9EbcXTe_7pyR4vrZRA88j2cy2f_zPy-Sh64GpyiyJZmB6-RArNCb71_f9VW_l8fBoE7xIV3R37TTmiFf01SloDjNNZhU2xAYhZVQTVMtCytzu9p7c0CI-Z_3YaDfEbuoJJZ6ebbp6k4gWbhVMeUhCK3EgW-94UK2kHOVytDb9W7nlcePc7csQ1YtMemZM-Ai1qyiIIvH3NR6nlQ"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff1dd04d7282301800d0bb642d8e4222d29d01944a95f0a7960d13e11353a94602a2767af73a3dc27b3f8817052895b797139cd11b7a70dd1a16435f4e695e1584a4cbee3c0a231c64cfa9b812d9db756182cd3113f6684ba55ef725e870f70d93c5fbbe31fbd97ab6f26edf646787a9b7a82f3dcfb0d20e4ed85886c2b98a21dd97657c6b8ea92ccd394fb34375a451473e371fcc4c42574658f745ac5399441bd7d102512e2a6f35f71ca2b5aefba55cc629156b47158fabdab2c4e137f5eed5271fc6e3a9c6d4812d2710e03d74d9c4d94dba19365574aabaa78dd100c15d8a06542e5e5c8358d600fddbf3f621e115408137d0a0df3f2bd329271a010000",
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
      "Tue, 11 May 2021 00:39:59 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-117-1620693471142",
    },
  })
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
      "6f9b3014fd2bc87b6d1248484822456b94d21535901648ab699a906d0c75039861d3a9aaf2df77314dd76ad2fa84ed7bce3de77ef0820ebc4ad112119eff6a59f3fce55110748698c239bc3efab737242dc6d787c3ae0dcb7dbeb5eaebf56a0508deb1242eeb820da4681bcae4721f0df346b4356e841840a2816539036b3636678b89ed58963d06a26445b6e5d501e80f4ad572391a9dc487b91079c170cde5908af2ed7df4341ed58d786454c9d147cd11c8c8d127aa5f0b41b1e2a25aed2370d04ad624acc4bc000f7fa92939ff987bc87139cc01fcc429c3948ab6529d2f48414595f1bc6d7456b47c41dae7bb038adcadbb890d2a8ab6ac920a97eccc48b1c2897aae997119ee7cc30b2e77a1bf8ebd5d90449b2bd75f0f37bbedde0f22e3feca0d5d43615230cd3556c6b9be057001fd9449c52bad1e77cf9df26b87bc7f07d311405ab23e9838e60c5b73734132e2d06c3e9992cc6484cc8933c51362d285cdec94300c3c2daa59b812154eb1454cdb4ec6d3cc4ceca94d123c5d58c98c39f3d45938e6c4a4e878867e375cb10b2e6b2179df21741f7ab19bc4e13ed8ac63579790e1b65017bdb1ae80f71e151408a0ffd474eca25c8052d76e2f88dd70bd89bd3bb79ff096e5983e47bf60c6192e2403346ea0798a35be48a1612858fbee0580f5c46e4e4189963f5e50d7f3cec5bb96bfd16318606757e92f8ae2d00bbe693b27c41d2e5a0d79ea0fa806cb0f501bb83efe04246c699f05ddeeddf03bea9f4296b18655f4f3690258073effdb4e9b0f60d87dd0910aeeb03c54762ab461fd12715def2b7bba58c02c910637ea636c669a96353fb5adcbd1656425abd46b49fde643a5bd582bdf401084f907ba5dc73fa05017d37b040000",
    ],
    [
      "ETag",
      "jMQPbdl2KkkOuRmUgL1pKA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:40:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-117-1620693471142"
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
      "5b",
      "4f",
      "c2",
      "40",
      "1085ffcbf85a12caa568131e402e92006229f2600859da69296cbb7577ab2184ffee6c45346aa22fedccf49bed39a73dc23ec942706193c4cf05cac3558cfac1141eaa826b45b75c640ac102d42c2672d9dc73d91bd4bb8ff9d0d7cd656d1e2c5fe3769b08156c3165e01e214a90870adca723642c455a0b042fd26c5d7616e8436e8673df1b4d87d4a72234fd74311e77bae33e9caccb62c8345b97fc3fd656270b7662e3618412b3008d965c8a1d067a646c2a96e61c2b4a14324005255c3e88a528722685a8d0a462dbad8aedd4aace4dbdd1b2ed468d482e02a6139111bc989340d04233ee8957b2090e01b22cc971545e5f689c84a513538ea6bed328057e05485b94705cff0d92e02da3eff0819d33f8ceb1541499be5083f17de7b7e328d4cfa37a1dbfff83509aa2ba20fe68d29ffb9dc9cc70abb3f7ee41a39a4941492a3421dad5c675b3e554df73bd15266b7a8fab658116048c7e8fbb44831b31aef0f4061142ce6b7c020000",
    ],
    [
      "ETag",
      "W5klrDF3BVpGTt5W2ScWwg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:40:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `stamp` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-118-1620693471142",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8554fd4fdb3010fd5722ef1790fae1b4a15f126259092ca24dbb3405c136b58ee314431287d8e9a850fff75d120a746c438a94d4f7debb77e7bb3ea17b9e0468807cbe7ac859b6f974277c54434c91159c5e48cb7cc4b78f1777e9cd3a76fd33f930f3cce36340f08225499c46ac2e459e512607f3596395893c2599107510aaeb7aafae775ab8d36f1b5d5d375a40942c0a473cb907faad52a91c349bbbe48d9510ab889194cb0615f1cb7973dd6aa699b86354c9e67ece26a491cd0fb29e448212c545723c9f81835cb26cc162c223f0f04a0dfccffbda0d4ee2c60ac06b4e19a154e4892a7c81041549c8577956aaa2c1132a7dbef940336b640d3d6d38993bdec192c4057979a811a92d16199379a46ada128a0a79c4163c585691f45e3b7327638880835b22995c6a575f2dd7d2b4a554e06ea9fdc8316e53ed44339d536d5fc276b4b9e358334f3b3839d4ceddc97caa7db9dec380f78049c593d2b947fc8815ae9fbb6bbfbfd482401438a9828b2eee10bd87fb7ee87769d86b1ff92166bedff3bb47a4ed63da379811f88c004f15ea258b2422212d8c7b9d1e65f8c82798f8462f20b84749a7db3782c0277dac7782be6ea06d0dfdcab862a75ca642f2aac3e8cab53d6be1b97367687a56594648a08ba795b9a288b73e151409a0ffd4b52da25c40a6e2ba6cc7b35c73e8d99756352123b62274337b801909492419a0494662a658361601340d4d2733dbb3278e39024679edd31d42a2c1f7a75782b749cb2eabf28d3c7b0c77648ea7a5871de8924479895a571fa8855bb88e5b75fdc8d35b03bd3dd08d06c6f8066db7b57f8b9bae6b5e8321926564f3470c8aec1805fd2f594b7cf9ab32bf73a1a322db8b27b4fdb985a78660d12a75f46d6eb9d7a83a7259c83296d08f870ac065e0e33f8cddf20218d617f2c022280e334c65918566ac9a651e977e2b7607e3aed147253853ef627da3bdbbb442a35064314bd47349d5f2969d2a42b97c01411046d0b19d7388fe061ff8ad753e050000",
    ],
    [
      "ETag",
      "KsEAx0hxKjpZvmRbFsqSTA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:40:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-118-1620693471142"
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
      "f4d8048c8ada80872ad24a83d6d440a188acc92446934cdcdd28a9f8df3bbbeda1871e7ad91dde7c33bc375738e655023eecf2ecd4a06cef32d42b5384a89a422bfe6aaa148203a845c664b0ef5ca69feb641f0d4ecbe5cbf0fdbe6c77abf1980915efb114e05f21cdb14814f81f57a844893cb6dd4abb9131ddd646992fd6b3a759c8424989111651103c4e8219dc9c5f63f5f15f239b9b0307da8598a2c42a46e3a29674c058cf4d4025caba4057512363546061dbc82435b590442e2baee78d5c6fd0ed0c1e7afda1e7f5bb4c16140b9d53c570f4c6e64093164548170e080690b6e4aca97dcf2cf76c88b3058cb7bf7b9ee96d7e164e5a8dea5512db53689cf5479d6f9f5332de3567d2b2410762c1877ece35f8a92814debe00ba706662c6010000",
    ],
    [
      "ETag",
      "Lh0wCzTdhU6qOOK7X+mybQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:40:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcyMDEsImlhdCI6MTYyMDY5MzYwMX0.agGGcBTF5BZih9ulR8GoJRkJMHOlDc5KnteFs0YYkJt8YB5pB55XxBi606hvMdJP9d65Ml-mlKqaaSL1QVdr15OJwLUSnQ8ommPufXnHVnfXk_ui5Sz1UfZoJD-qSBTQe3yBr1TyPCVekyGY3aWwjccGZq3KOCudgSS_hMNqssA1Ofcs6-lmaDzBzZYqGQ7Zemo57fWsdJZW3fRnprlYTHAs_HtC-iURVnKmz4DtwTHPVPKqN_IGXRkRNEzjgLXgDTjREp3iOY6LNG1Wyg3P8Con4LTdgU5bbxuMjQO8EZItx2EjCnzm5Oy5c1Fu4ySPkxfi7gr8KUYwC4I5luoRrg"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "82300040d17fc95a9d2a20d29d01aa82caa361d46e32312610b018c3db4effbd4c3fe02ecefd0184525655b87e14ac04ef60200b6b4667be5c419c322d4ac3532c0adcf0b63e25216a6f54a8e58b777b6debf245e75f13dc658e583d44fb16ccf954773f9109cfbeeb6df0d31bfa78a939ed2e94394efc79f0c56cb39f5b07caec2c389304eee3953e36f00917ba594a03d90c16538d6770fdd11f4a311cab8ca7b94ed68f23d38a6fc7344c226f0a9d821e5dcdeded3844f75d13c1dcc5a48b0aec069eba0c7613de2f48a5b47a79723df6f9a688b272db820960bd148a55588c5ccdb0ac09f8b7e37a906c1c0019514c81df3f4bfa97841a010000",
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
      "Tue, 11 May 2021 00:40:01 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-119-1620693471142",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536b4fdb3014fd2b91f7159a471f692b55a32a012ab5294b53aa699a22dbbd098634ce620754a1fef7dd3894c1268d4fb17dcfb9e7dc475ec8a32876644c98c87ed5501dbe3c4846ce08689ae1eb75f8bc55b757770bf660178fdbe1cdc129b26c32418468588aeecb1cce95ac2b0e6abc5977b24ad625ada43cc744e7ae3b3a77079e3318757bbeebf63c242ac8d385281e917eaf75a9c6b67d12ef64526639d052a80e97fbb777fbc9b3cb4a3e00d7cafea869a38cb23f51fd9a4b4eb590c564b34607b5822a813d15397af843ddb18b8fb93b82ee3b19829f0407cab9ac0bddf8c2145c16a9c8eaca6425e317627cbe3b9075b00866b1c5655eef8ba4a07b38b37654d3441f4ab0aea2d5d29a8757ab68398de7ab3059cf6e82e5b4335b2d36cb706d6d6f8228b034653918ae35b12ecc2dc40beaef40695118f5b8796e945f3b34ff77300d01a515b4c1c47706d41d3a2396329fa7c36e9fa50e3036647e9f7699c3473de8ed1850e41951c3a2852cc0f35d3ae8ba89cbba34e971a79f30af3f4a7ae0bb7ddf1f32cc478e67e4b9121a2e852aa5126d87c8369ac74112479b70368d0353424aeb5c5fb6c69a02de7bd4582082fe53d3b1890a894a4dbbe7611c44d3593cbf0bda092f20a3fcb0fe85334e69ae00d1b4c2e669a89672870d23e174195c22d84cecf6145464fce385343d6f5cbc6bf91b3dc6013676b5f992751ccdc36b63e784b8a3796d204fed819468f91e6b43d7c79f88c42d6db3906f9b20fa4edaa70852a8a0e09f4f13c126f0f9df76da7c04e3eea38ed278c7e5e1aa51e115b44b244cbdafec81e38e460362c095fe3be6795ef7d4b626479311f650e8d792dacdc74a5bb15abd813088f30f4dbb8ebf019e55c48a7b040000",
    ],
    [
      "ETag",
      "GNwWsPFVLbj/nkW8Hy0ngg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:40:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-119-1620693471142"
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
      "d14ec2401045ff657cb42414b06a131e50518988484b241a4396768ad56da7ee6e2184f0efce5644a326fad2ce4ccf6cefbded1a5ed23c061f66e9fcb544b5da9ba3b9b5c50875298de65b41b94670008d983359d6459036f6eff627d49cdc2f17b208ae86cb769b091d3d6126c05f4392a28c35f80f6bc84586bc16912cb37c5a750e985561874138ea0d2eb8cf28b6fd60dcef774efa5dd838bbc5581831adf87fac3d6e1c78a6d9081354984768b5148a9e31323d6b538bac9058d354aa08355470f560aea82c8422aaf1a4e6bac735d76bd4bde366ebd0755b0d262545c2a494333c0e58201832428e68c936c1634055253b4eaaeb82c7695c39b1656f107aad4ae05780b525a9c4e9df200b7e12fc1d3eb06d06df399151999b1d75debfe9fc761c87fa79d45927ecfe20b4e1a87648d8bbee0661e77a68b9c7adf79395413d54c4496ab421baf5d6d1c1a1577fcff5946cd6fc1edfa8121d8804ff1e97a9013f1152e3e60da7fdd1197c020000",
    ],
    [
      "ETag",
      "u0aSi2+W+Xo3XZwvlpSKPw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:40:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `amount` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-120-1620693471142",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8554fd6f9b3010fd5790f74bab26e12bdf52d56529ddd852d21268556d5362c050b7802936ada22afffb0ed364cdbaad1212d8f7debb77e733cfe89ee6111aa380260f1529d71fee58805a88089cc06e82ada3afd1916f0ee797dfa64f9ea5ea57d5e5f1312068cde2382b52d2e6ac2a43c2c7fea29394ac2a70c9581b84dabaa1b5f5bea1f5476677a0eb5d03889ca4f18ce6f740bf15a2e06355dd26ef248c2529c105e59d9065bb7df5d1508b92dd915070753fa70a69b8fa4ed69394855850961ffb0b705071522e4986695a97b8a346c1c77ded0ec5592701f0230d090e4356e5a2f6051221cb639a54a55445e367247dbefa400b6b664d3d653af71def6085b39abc3a54305796cb92f02a152d650545c534254b1aad9a4871af9cb9f3738880835bcc095f29d75f2cd75294ad86f2a3d23433544e948973aaec6bd88ee23b8eb5f094839343e5b33bf72f944f377b18301f112e682ead7b3848496dfba5bdf6db53ad0958809526b81c687dac0fb551100783301e9abd20d648100c83410f9b81168ebaa41b0504034fd4ea928573968f201844913ed2482f0eba5a7f1805ba31c0b1190f0373d4ebc6e130328d1edab4d053490539a5bc609c362d46d7aeed594bcff59de9c4b364193186369e36e6ea225efb14502480fe53d7a68e520699eaf3b21dcf722753cfbeb29a1199910487ebc5030c498c534e008d4b9c1141ca731641d3d0c57c617bf6dc99cc8021cffd628be068fcfdf937c15b17b2cb42bed1d96c3ef1fa5de9600bb9c26925318fcd07d23b3d406c5aff9699b8eee40652e3b2c4eb3f62504e5fd2ff9241e2e5aab1b9cb88ea6cdb9581363f37f0b410dca9461d5dfa967b839a2d97c4a42479f8fef8005806deff376cef2980e1a6421e2e600dd31af23a4b5892666a6926fd36ecbe66ea031d497029dec44cd3d81e4fad512b928ce4e2a5a4e69eca4ed5a18aef40108461736ce733447f0154711bd629050000",
    ],
    [
      "ETag",
      "gaE+Jd+U38OQKCwTE/1VuQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:40:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-120-1620693471142"
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
      "02ff8d904f4fc24010c5bfcb78b48db4108c4d3880a9d2a4215ac5480c21cb32ada57fa6ee6e2584f0dd9d5d3d78f0e06577f2e6cde4f7e60455d9ee20826d597cf4a88e17059a475b64a8fbda68fe3a6a3582076844c1ce6a71591d56872b4c92e06e95ce5fabf8454e27137668f98e8d80e8047989f54e43f476825634c8639b8d721bd9668e9d5592c5737c1f672c34b4b3c26299a6d3591ac3d9fb35d655ff1a599f3dd8d336c31c15b6122d45a7688fd22436a0164d57a3afa957123538b36b148afa4e28229f153f08077e300e07e39be1e83a0846213b6b92c294d4b279f9c47060c8883aa30307046b50aee4acb97b3f9d6c43d82a706c7ff742db5bff2c9c1d0dea07458ca7d1920dc3c137e72d5976c3998cead10329f8d0f3d240948b5ae3f90bbb9ead36c6010000",
    ],
    [
      "ETag",
      "kN+kwYw/eII1FYLHXkEVcA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:40:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcyMDQsImlhdCI6MTYyMDY5MzYwNH0.BleRAMitmGidST2SN9AvGgdMd6h6hyn6yg898zuUd9JWPPZD6TfvYiBoT5Deg8xX3NVxwmO6yfGtiV832To41LAYYXdE8NrXNMa3VljKhjsIcZ_xxYbK0BxYghqRq0Tsv1y5zAO1p9xxW_RYcNq3E-aLVZKQ9gkdgSk5b0jIZsxEVRMwHvW6UFe8C5droE29f1O-_flMOi6MRxqO0poHeUjHTXnKOgap0dx06s7ErHT3we5BTT2c-6NTtJx1Z_VSWL9Hhc7hIjK0Alnj0_YeIEvfxrp3k3CaPxKtEgbjAQiA0qcnlk9fZ27iKH1ET2OssG0W1XURc-Z6Oahr_K88uw"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "40",
      "00",
      "00",
      "d0",
      "7f",
      "d9",
      "e734e3524adf5877123412d6cb0eba444d64b18276faefcdf413cef90145559169c2ecde911ebc83ad10d47db5f7a9a2e3a66e3deb32dbc11227d0561ce88bba8383ab2e899cc304c1d08cc2713d1ec9ae898eae8a1b924caf3d4cccce601f72788b7bf1854a5f0b57149a56654366283086d6314a121399bd3218f2f6903f1ff6b7189688c36f3375693e6dfc61bdce76eef87e2ac145139d309eab33ae243e6b8814050a859d911e16de2f4fcc1fe4b1f54899eba31da0a44648606978cbd4cb2447db9addcd8841ae3f596a79aec10e9095b6239970fbe48a92aaeec0bf1db38d9267804e8a918ce0f70f040e8ce11a010000",
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
      "Tue, 11 May 2021 00:40:04 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
            parameterValue: { value: "accounts" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-121-1620693471142",
    },
  })
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
      "6f9b3014fd2bc87b6d1208249048d11aa574654b480ba455374dc818c3dc02a6d8b4aaaafcf75d4cd2b59bb43e61fb9e73cfb91fbca07b56a5688e12963fb4b479fe74c7137482a8c439bcaea3c8332fd9edd377fbdb8d9f7dbdbaf4fdf26ab10004eb58029775410782b70da162be0b8779c3db1a379c0f20d1c0181b03633ad6a733d3b20dc31a0351d0225bb3ea1ee8bfa4acc57c343a8a0f73cef382e29a8921e1e5ebfbe8713caa1b7e478914a3f79a239011a30f543f179c60c978b5d885e0a015b489698959011efe50d3e4f47dee21c3e53007f023231413c2db4a76be2005e155c6f2b65159d1fc05299f6f0e2874d7ee2ad2082fdab28a2b5cd2132dc512c7f2b9a6da79b0dd689e7fbe0d36cbc8dbfa71b8ba7037cbe16abbde6dfc50bbb9700357933829a8e26a0bed54dd7cb8807e4a856495528fbae74ef9d021efdfc174049016b40fc6b63ec586a3cf922cb149e6989324d3699238893dc166a2939945ad34a118784a54b170c5ab899d617d6ca5b1ed38566c59d334766c93c6ba63664eeaa469364bd0fe043d354cd233266a2e58df21741378911b47c1ce5f2d23579590e1b69067bdb1ae80b71e251408a0ffd4b4efa28c8352d76ecf8fdc60b98abc6bb79ff09ae6983c870f30e30c1782021a37d03c499b0d4fa161c85f6edc3300ab895d1e8302cd7fbca0aee79d8b372d7fa54730c0ceae545f144681e77f51768e886b5cb40af2d81fd06179c0f4fe27006149fb24e86ae706b7a87f0a68461b5a918f87096015f8f8673b2e3e8061f5414748b8c3ee10d1a99086f63bc454b907f654b726a68e14b8917fc72686651cbbd6e5e832d29256f25052bff850692fd68a57100461fcbeead6fe377821e5587a040000",
    ],
    [
      "ETag",
      "LTTI3PiYwZ7KWNfJQPNNmQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:40:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-121-1620693471142"
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
      "00000002ff8d91514bc33010c7bfcbf9dac2bad5ce15f6a0a2b33087ed3611648cacbdd6ce34a949ea1863dfdd4b9c22e2832fcdddf577f0ff250778ad4501316ceaeaad43b53fabd0a4b6c85077dc683a5a29348207685845e493c827a3b0bc4fdbb47cdc6d6e03aed2241d8f89d0f90b360ce2039435f24243fc7c00c11aa4b55cf2ae116bd77960f6ad1dce1759329b50dfc8c2f6b3e5747a7935bd81a3f7bd5830c3d68effc7daeae8c1566e322c51a1c8d1666995dc626e12aba959d372f4b5ec548e1a1cec7e544a762d5352fa34f1837ee00751bf178d06e13008c23e915ce6ccd45210bc9c534030d2309ec91d69c28000e54a322eddf79dc675e14c6c99cc1651e802fe049ce31772d2facdb49c893f98d529c1d5dea07e50927c345a95a0175e9c0fa3dea7ddb5b4c6866ec2a80e3dc8193dd25d6d202e19d778fc005f91406d02020000",
    ],
    [
      "ETag",
      "XncG94fMQpQfVwbF1lrQIQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:40:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcyMDYsImlhdCI6MTYyMDY5MzYwNn0.Nui9GCUPMseI9Ba3cs2A5WuN-NohjIDp0n6E1Oq82OG3F4hIW57nPbV9EcHZTQ90ui3RDttqBYoi60nbBF1bOuPrlXcA9tcD6pLtV43WcoevCWjS7lzcYvOHf_hwzRgy1ygfW-3Jewp1_kEg14D1iqfY_UaaDQJqd3bqy_NwcR9hyT99ZPrC68YC27XzticwMbFlltI0--NntkaaIxKwNWUg0pwSdCU9hABnr7umSRgZwAWwjlR38SDR6Ksnc0TdOd1MxI01hBDReJbO_tJLozvBDFq80ej2kuh9v2psB4Mm4rs8ntlWsGy_2_hi4GMPnZgkgmY5SEsb5UzYiB2-OA"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff1dd0516e82300000d0bbf45b0db628767f768a30180ac504f6d354281de080018382d9dd677684f71e802789e83ad6d7a5a8c00b9838c4ab64e5343bc264b6bbc6f464468e5f534f573cf4643d99747c4fcf14c556eb16c105c3d7cf6f62e55cf3f876267e504586376aa92951b99c92e2f4e6740a4b764374d2bff4228bf64b7450fa9559974de1f890329ada565059513e52629b5a99c1dc3838504e52eb3bd7801f6181cfd9bde46173e9f77570d406cbbd0a82e2e1a799394773be4e0665ac8b5b44d910624242e8b6d44defb3caf6a53d6e2be9368a7947b0004235792b3a963fb96883f102fcdb593f35e21940046f450b7eff0039262b2f1a010000",
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
      "Tue, 11 May 2021 00:40:06 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
            parameterValue: { value: "accounts" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-122-1620693471142",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8553ef4fe24010fd579abdaf022d540a24e42458b51e94b3148d77b934bbcbb4b75abad8ddea19c3ff7ed32d781a93f313dd99f7e6bdf9c10bb917c59a8c0813d94305e5f3973bc9c811014d338c5efef9e18737e7dfd68ba734b89c84c09e7ab757e3312244cd5274b3cda1a564557250a3d5b29d95b2dad252ca16166a39dd6ecbe977edfeb0e77a8ee37691a8204f67a2b847fa6fadb76ad4e91cc4db9994590e742b549bcbcd6bbcf3d8ed6c4b79075cabce7bcd0ecaa8ce27aa5f73c9a916b218af96e8a0525026b0a122470fffa86b76f2be765bd04d3b43f0a3e040399755a16b5f5882cb221559559aaa64f4428ccf371f64e9cffc696c7199579b2229e8068eac35d534d1cf5bb0cea2c5dc0ac2b345349fc4c1224c96d30b7f3e694f17b3d53c5c5a37177ee45b9ab21c0cd71a5b27e615e203f5d7a0b4288c7a5c876be5fd84828f8ba90928ada049269edda7cec01eb294793c1df48e596a036303e61dd31eb3f9d00577cd8022cf881a162d6431ec399e9d7a2ca1c7ae9bb8ccb693c1b1e72618e383be37183a3d4e7647e4a9141a4e85da4a259a09919b2888fd248e56e17412fba6859456b93e6d8cd50dbcf5a8b14104fda7a75d9d151295ea710761ec4793691c5cfbcd86679051febc7cc01da7345780685ae2f0349473b9c681917032f74f116c36f6fd905464f4f385d433af5dbc19f92b3dc605d676b5f925cb380ac27363e780b8a67965208fcd07d91f0f9adefd42201e6953845cadfce89634a1085228a1e09f2f13c126f1f99fed70f808c6d3471da5f18db7c355adc24b686e489876f7ecbeddefba4362c0a5fe9073bbce616a758dba226ca0d0fb969ac3c74e1bb14abd823089eb0fcdb4767f01ecd37c9e7a040000",
    ],
    [
      "ETag",
      "JxZENWGKdOwfIJANebw3YQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:40:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-122-1620693471142"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d91514f833010c7bfcbf90ac9608c29c91e869a49b22c0adb126316d3c181cc42b12deab2ecbb7badd318e3832ff4eef85df2ffb50778aedb0222d8d6d54b8f727f56a1be33458aaae75ad1d189562138809a5544bec7ab5027572a0b66ebd13aebb2f03ed6d3c98408953f61c3203a4059232f14440f07685983b4960bde37eda3ed1cd0fbce0cb3659a2c66d437a230fd62359f4fe3f9351c9defc58269f668f97fac6d8e0eecc436c51225b6399a2c9d143bcc756234156b3a8eae12bdcc518185ed8f4a8abe6352089726aee7fbae17fa83f062188c3d2ff089e42267ba162dc1ab8c0282169af154bc91260c0990b624e3d27e5f695c17d6c494c962190636e04fc03a7e2127addf4cc759fb07b3392588f71ad5ad14e4a3d0a87883e07c340e079f7697c2186bba092d7b742067f44837b586a8645ce1f1039c88427f02020000",
    ],
    [
      "ETag",
      "xBU6tIDsS4GV5VSpS6YBtA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:40:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `name` as __result, `id` as __pk FROM `accounts` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `name`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-123-1620693471142",
    },
  })
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
      "7f6f9b3010fd2ac8fb67939200090949a4aa4b5b9621a5a425a455354d893186b92198da265b54e5bbef30e9af555a2524c0f7debb7777be47b4614582c62866d94345c5fed33d8f510b5185b3fa74a8363b92f69dfd9f6c3a9cd27c9a3e9c5d9f9c0082d52c89b7654edb92578250395e2e3a99e0558905e76d106adbdd5edb1e74adc1a8e7b8b6ed748128699ece58b101fa2fa54a3936cda7e49d8cf32ca7b864b243f8f6f9dcdc75cd52f07b4a9434dfe634218d343fc87a9a738215e3c5c972010e2a49c58a6e31cbc1c30b3589bfbed5ee30bced6400de31423121bc2a54ed0b24082f52965542aba2f123d23e5f7da08537f3ce23635de02d5d1b581aab95a0b2ca55cb58b3e478526e8c6fe1fcd2581fd5e5dab8fdee859ed160fcc0580681b7888ccfa75f8c69385f5e1967773ad63a2a8397844ac50aed24c2714e6b17c76ef9ef875413b0c29236c1956b0db03db446711abb241df6fa716ad1381ec66e1ff7628b8c1cea2431c5c053b5ba66e1821736a636e9a6b69dc498f46cabdfefbba9e50c07dd04a7c908a796455c37e9a1430bfd164cd10b264b2e59d331741bfa91b78ac265703e893c5d468aa13d178db9ba88d73e151409a0ffd475a8a38c43a6bafd7e1079e1e43cf26fbc66e2339a61b25f3cc0cc539c4b0a682ca0838a8a4b9e40d3d0d57ce147fe3c98cc80a1c778f5849068fce3f18510ed4bdd65a5df681286933be06021f0fe9f18f81838e8707895ee06e7958668bcfe6bf4774d00d9e8f0f3004f0bc16d6ef4d0f5d20bef507314d2940a5a908f270d601df8782b9f3604c0b02390472af8878b45649d8508da5c30b6d50e1bf6c072bbae853458a87731072a6fbd6c46ad48b7b450c7929a0dd1bda943957c064110ee45e0075388fe05a8413341a3040000",
    ],
    [
      "ETag",
      "b8tkvcf54yxgG8GelGfqBQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:40:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-123-1620693471142"
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
      "90d14fc23010c6ff97f3912dba410097f00086e012823ac09818b294ed3637b65d6d3b0821fcef5ea7893ef8d2f6aebfeffa7dbdc0a1685208605fe49f2daaf34d8ee6c51e22d46d65346f921a8de0001a91333978f5a74d6ac21e956f55d91bf79fc6a7db7c326142271f580b082e901558a51a82f70b34a24696c5b1ea263266ced276d69b285c2db8ae29b5f56abb5c4e67cb395c9d3f2a79f85584abcd7c318ffe93ecae0e94b48f3043854d82d68454546262429b4f8b5a56e86a6a55821a3ab8bbc815b5522822973baee7f75d6fe8df0deffb8391e70d7c262b4a8429a86178bb667360c8882aa213e7038f01d51d396ad6ad47fb5c2b51c535e6224e48c92ed2b1c3d9e9ee67c4ec6c503f2b62431aad97e1e8dbd80359b3864318d5a20389e08f7d2c0c0499a8345ebf0072236f60b6010000",
    ],
    [
      "ETag",
      "4V2AndtI+ojXlj+83O8w/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:40:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcyMDgsImlhdCI6MTYyMDY5MzYwOH0.APhMUKIC3GHR9GKXnDCp7S57fTUmo3Wt2PBybGAb3QJejbgrG44V7btYZEFeev7QciAHLZ2x2D5Ur6nPhHSePOn6qhZvDcb5tGTxqiMJZvbpl5qRb3FU8HsINUsfi5rrMUXvMjfxW_St3799AO1lFQ8fdNtLKFTqFQbNQTgSkd9VkLA7T0BYohtYSxv33g_WuhAm-aRgZuC_NE6wNnh-061wXzR3tKkaTCvG0nbzgxdZ86HNVCv41zSRfnmOW9wn-nSMNj7nTJZcP3UQ_dw2mMlUit-I6E5ZBEFE4LqL98PVAqLD67mJfYq4Z8x2yxdPy2bQYwQTkAVv3VPjy-COuA"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "dd",
      "76",
      "43",
      "30",
      "00",
      "00",
      "e0",
      "77",
      "c975f52855b13b7f2b3533748a9b9cc80953459a742d76f6eeebd9237cdf0fc0845021d06dece8005ec08c15634dd60183166aeaf964849120e5c3d92f5222ac10b759ea9951be2876110c3023a5a67c21d844ba1a19aadd2764da16fd60ed7c6fd742ba3dbe8bd78f44cf9dba1e6d4d6ae27913bee919ae67360e6a5526ae702beec05aa96c815010e3f67e6e64ea3aa7a2f3b4747a989bc04862cb91f1c0be7971bc506c2eca35856c1ff2c53e9c096613167976bd3b974a44bed413e9003fcf3a16c95519c83822f970f72597975d0056804eace554a0f6c95535c358817f3bbacd8c3e032c8a39e5e0f70f21e6dd7c1a010000",
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
      "Tue, 11 May 2021 00:40:08 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-124-1620693471142",
    },
  })
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
      "536b4fdb3014fd2b91f795b679d197548daa04a846d391a620344d91edde6486342eb1c38650fffbae1dca4048e3536cdf73ee39f79167722faa0d1913268a8706eaa72f77929123029a16f8fa2de63ae857251dfa33b8f5fe54e75e3cbd9a4c10210c4bd1edae848e924dcd418dd7ab6e51cb66476b293b98a8e3f961c7ebfb6e7f148403cf0b7d242a28f34b51dd23fd97d63b35eef50ee2dd42caa204ba13aacbe5f6f5bdf7e8f776b5bc03ae55efbd660f6554ef13d5afa5e4540b594dd62b74d028a833d85251a2877fd40d3b799fbb2be8b65b20f85170a09ccba6d2c617a6e0b2ca45d1d4362b193f13ebf3cd81aca2cb68963a5c96cdb6ca2aba8523674335cdf4d30e9cb364b970e6f1d932594cd3f932ce56b38b6831edce9697eb45bc726e2ea2247234652558ae33714eec2dc60bea6f40695159f5d43c1be5970ecd3f0ec610505a411bcc066e9f7a4377c47236e0f9303866b90b8c0dd9e09806cce5a310c20d038a3c2b6a59b4921577bdc0cb3d96e5a39c67218cfa19738fc30c78e06eb8cfbc20f0c9fe88fcae858653a1765289b643e42699a7519626eb78364d235b424e9b529fb6c64c016f3d6a2c1041ffa9696fa242a29269f73c4ea3643a4be7d7513be14b28287f5a3de08c735a2a4034adb1791aea85dc60c3483c5d44a708b613fb7e082a32fef14c4ccf8d8b372d7fa5a738406357db2f59a5c93c3eb7760e886b5a3616f2d81e4c19b9288de9fd4f04e292b649c8d53a4a6e49fb94400e3554fcf36122d8063effd90e8b8f605c7dd4511aefb83b5c19155e43bb43c296fbc2eebb433f18120baef58758180487ae991c26236ca1d22f25b58b8f95b6628d7a056110c71fdb6eedff02c55ec29d7a040000",
    ],
    [
      "ETag",
      "KNct36nla82CeY1xnG1NAQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:40:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-124-1620693471142"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d93616f9b301086ff8bf795482165c986d40fc946db6834b409d5a44d1572ed833933b66b9b545194ffbe33edb2699d44bfc0ddf93971f7fae5407e0ac5494a1e44f3d881ddbf6bc0df86600dae93dee1cb68e58044043c6d902c2e1fbf6db68bd995f89ac5b74526d985f9d29c9f23e1d80f6829490fa41620b923e9f70351b4056c635a76adaafa2c227e6f427153ae97ab4bcc5bcd43bebacbf3f922cfc8313a3572ea69d5f36f68bb3f4664ab1fd6508305c520cc62acde02f3cbb0a6a3ad913072bab30c1ce9e1fea0b1ba33d46a3dc2ca289e24a3783a194f3f9e25b3384e26484acda8175a217cb7c10189d79ecab57ec235497c8684ed635cb9ee9f3bac0bdeaf12c2e5aa9c26fd847f039431dd295f0d82b5b0ce3fcbf71b7c91e15f52d237827857420e410d280e768812a6a29c5b706e90d4aea2c69cb04551e4af5551dc6ac187c19d1800a4df9d808bbc98ff4f5a74d81fad3ecfcbec15e13cfae68494cbeb6c53ceaf6f0277ff6284c5de83bbb11a6de520382a1e271fdecfa6e367937dd2c178f89dd4db0e22c228fe2b57c293b4a6d2c1f117646ac36889030000",
    ],
    [
      "ETag",
      "OGqZSjB7HiWE1QOElcFpKg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:40:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTcyMTAsImlhdCI6MTYyMDY5MzYxMH0.iP9aAYfb8DZdSLeLDVQy7SThePFGxqcETgTHdoMrIoqYG-Kmn-bGMdYfwNCrfQXP4-RCQBdnckmYWbGXuhUDBLvqOlDKQ-K1PWDXr9jtyWlJgiuKE37Q2aifyYU01CErxW9L-Ac9cbnLlgJi4Tyu7iFGJ_Gha9yd__kcmwKdrJxXGFjdPrzRR53FpR8ymCAE9LNLz1rbJDsxfRSQNx6KSEGDifdX1KlUZYSmBG_O2YAhICSC4oECvtj5zFm6oqD7qwvxqt1HUWJoEUcZp1bMbvQO084v4SaMUMbQ0_vHuqRfi5ktJ11Zh40d7n6hD03X-iMhTonDiUMJ6_ru6wyr2w"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff1dd0c97282300000d07fc9d938b235d09b540a082814ca76616226c32242d864e9f4dfebf413defb0198103a0cd9d8de6903dec18a79654ff61693d52c27e649d4a77851172aa0d32097f6f0bcfafad9ba70ca834ff220408b4d9f5d7ab30a1c59a42a1b48174912b0674cdd5c68abe54efa918bd2da0c90dc866ab81eea6f41d702f10b7169c8fb71e0583262e59909b939473737f471c5a6ab43ecb4e960a7d5f6a278ece1c6786cd010f30e2c61e3216ea6ecf36098c6756d1312de8b4e868996c0ade8eccdac36a9baf834f2e3b7293e429e4d50f24477fe003b401756f674c8ca175790146507feedd9b832fa0a5029ee690f7eff00cf1fafb31a010000",
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
      "Tue, 11 May 2021 00:40:10 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-125-1620693471142",
    },
  })
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
      "2bc8fbda2410c88348d19aa6748b94900d48ab699a906d0c730b9862d3a9aaf2df776d9aaedda4f513b6ef39f79cfbe009ddf13a430b447871dfb1f6f1c3ad20e80c31850b78bd70033aaed5cc99c82b59fa17f7aeb86e56cb2520b866495c35251b48d1b594c9c5211e16ade81adc0a31804403673c1938d3b13df55d6fe638de18889295f996d77740ffa9542317a3d1497c580851940c375c0ea9a85ede470fe351d38a5b46951cbdd51c818c1cbda3fab114142b2eeae52106079d646dca2acc4bf0f0879a91f3b7b9871c57c302c00f9c324ca9e86aa57d410a2aea9c175d6bb2a2c513323e5f1d501c6c837562515176559dd6b862675686154ed563c3acab68bfb336e1d53edaad92cd3e4ce3f5e760b71aaef7dbc32e8cad9bcf4114580a939219aeb5b4cecd2d840be8674c2a5e1bf5443f6be5e70e6dfe1d8c2680b4647d309dd953eccc6d9fe46446f3b93b21b9cd089993d904bbc4a6bec7bc8c300c3c236a58b81635f172826986d3a9eb78a987fd714a66999fba64e6e7d4f572c7f5d1f10cfd6ab962975c3642f2be43e826da24419a448770bd4a0253428ebb525df6c67401af3d2a281040ffa9e9a8a35c80926ef7264c8268b54e36d7413fe12d2b307d8cef61c6392e2503346ea1798ab53b9141c350b8da0597003613fb720a4ab4f8fe8474cfb58b572d7fa12730406d57992f8a9368137e32764e886b5c7606f2d01f7419392fb5e9e30f00c292f649d0d743107d43fd53c472d6b29abe3f4c009bc0fb3fdb69f1010cab0f3a52c11d76874aad425bd6ef1037e53eb3a78e3d77ccafaa70abfe8e39f6d439754de7d01959c56af55c52bff850692fd6c917100461fca1e9d6f1376f1bbc157a040000",
    ],
    [
      "ETag",
      "B3Ec2nt715sFsl9Bq3oVpA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:40:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-125-1620693471142"
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
      "6f9b301086ff8bf79548214de986d40f64cbb64834c908d1544d1572ec83b9331cb34dba28ca7fdf9976e9b44ea25fe0eefc9cb87bfd72643f542359cc76aafad98139bca9c07df14106b6d3ced2abc5c6020b18385e11395fdfee26ea6b1aee7f4546d5cbed268b1e92eb6b22acf80e3567f191950ab4b42cfe76640daf81da04eaae6e8a3e0b983bb4beb8c9b3c5f213e5354a9f2fb7699accd2393b05e746c91d2f7afe156d77a780dde32e83120c3402fc2cadc17b106ee1d7b4bc6e358c2c764680653ddc1f5406bb961bc4115546e1e47214469371f4ee627a1586d309911a05770a1b82b71b1a9039745c67f8406bb2f08208d3c7b472d93ff75457b25fc5878b651e4dfb09ff06b810d835ae18044b65ac7b94ef0ff824c3bfa4e6af04e9ae941e822a682498214ab50597d280b58324da82b7ed199bad56e94b551a6950c96170af0600edf667e063ba4afe272d39ec59ab0f493e7f415847be3923f9e266bec9939bb5e7ee9e8c303b38b06b83642b0bde51e178faf6f22a1a3f9aec3d7ae3d17762673a0898e0f4af7c568ec525d7164ebf01cd90c4cc89030000",
    ],
    [
      "ETag",
      "EPYb2iWL1vx6rimNUSR6wA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:40:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
