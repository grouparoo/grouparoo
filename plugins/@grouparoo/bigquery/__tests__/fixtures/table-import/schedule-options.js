const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1636335954542";

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
      "82300000d0bb64ad0ea280e90ea415903a8206c14d260d919f852818094eef5ea7d7a8ef0eef0108a5ac6d71d754ac066f4012154ee864cd17d647961501357d7775314fda5783f05dc409d26d1d8d61bf519ac8082b99439d2b432bdc012dd318ef39f14a57b2f01395719c26f50516fe61d3ebcdd917e5542107e2a89ddfa24a6edff1d11bee2b7776acfdf1d13087e5a2f1a89081350dd4b9969ef7a7e9321ad23c8d764679e76a483b5da7c8098ceded16d6446bb0cb4f73a592f372bd298a1d17d8924e1608b963959dad933aefc5def672f3e2c0ef28e4939797ff0b8c00eb7971652d2e9edb671a8423f0571f7792b3e77f8b912bbb829f5f13543a0319040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:54 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-1-1636335954542",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536b6f9b3014fd2bc8fbda0492401222456b94d236524336425a4dd3848c73a16e0966d8a4abaafcf75d9ba60f556a3f61fb9e73cfb90f9ec83d2fb76442529eff6da07efc762752724240d11c5fc3fadf43e93a45308e84afc2fd45682fcb7c3a4504d72c497755011d299a9a819c6cd6ddbc164d456b213a98a8d3ebf48683e160e0f99eebb97da44928b22b5ede23f956a94a4e6cfb28ddcd85c80ba015975d26762feff6be6f57b5b803a6a4fd5ed14611697faaf9bd108c2a2ecae9668dfa8d843a811de5053a78256ed3d3f799bb9ceeba3982f79c01654c34a5d2ae30051365c6f3a63659c9e48918976f0e641d5c05f3d862a268766552d21d9c585baa68a21e2bb0cea3d5d25a84e7ab68398b17ab3059cf2f83e5ac3b5f5d6d96e1dabab90ca2c052342dc070ada9756a6e215e507f0b52f1d2a8c7fa592b3ff767f171289a80d212da60327286b43776fc344b472c1b0fbc3473204dc7e9c8a383d461be0bee36058a3c236a58b414e5c8f11dd7edbb89c3bc51e20e3c9af843d74b7cc8bc51dfa5a39ebb258713f2507305675c5642f2b643e4265ac44112479b703e8b035342469b429db5c674016f3d2a2c10419fd474d0512e5049b77b11c641349bc78beba09df015e4943daeffe28c335a484034adb1790aeaa5d8825eecd9323843b099d88f635092c9ef27a27bae5dbc69f90b3dc6016abbca7cc93a8e16e185b173445cd3a231907d7b20155abec5dad0f5e10f227147db2ce4e726887e91f629820c6a28d9d7d344b0097cf5a71df71ea1b8f9a82215de717598d41aac867685b8a9f6953df61c62c0b5fa10f3bdfeb1693a87ce083b28d57341edde639dad58235f4018c4e987a65987ffa355c5e575040000",
    ],
    [
      "ETag",
      "Nrxwn40lE8Ro9tNvGN/Mng==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1636335954542"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "65bc2d091528da840b10d4865fa15ca821646987526c3b7577ab21847777b6221a35d19bedccf49be99cd3ddc3539c85e0c22a8e9e0b94bbb308f59d09a6a88a442b7ee49429040b508b88c9a6c07edf0f9df3cdc3583838ec36ef733b6ab59850c1065301ee1ed63126a102f7710f994891db024a8a345b9699057a979be2cc9f7aa31bce530a4d3e9a0f06edcea00707ebd4180a2d9625ff8fb6c5c1822dada6b84689598066975cd21603ed19994aa479821545850c504109972f2249452e2451852b15bb623b35a7566b5c36ea8dfa3973090542c794313a9ff17aa0498b644aaf2c121c066419b2de7579be70390e4b1d26f446be532fd7fb0a480c4886cb3fb99cb7dd08fe091fd8d180ef9c48a9c8f489ba1e8cdbbf8d63473f4775db7eef07a134fb74427c6fd89bf9ede1c4708ba3f4ce4ea39a48621b151a07ed6afda2d174aaefa65e91319abfe36a59a00581e0bb711b6b70d72251787803a4c85a3279020000",
    ],
    [
      "ETag",
      "7aeKKTd62hZOa6eMD7Yp1g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
        query: "SELECT * FROM `purchases` LIMIT 10",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1636335954542",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "db6e9b4010fd156bfb56c50683b959b25acba115a9e3aa18a76a5e9cddf540360196b04b2a2bf2bf7700c74d142979839d739933334fe45e943b32254c640f0dd4fb4f77929133029a66f89a7857de8f6b16cff7c1854a92eb0beb7c5966b3192244cb52b4a872182ad9d41cd474b31e65b56c2a5a4b3944a1a1351cbbb66bdb4ee04c9c8985340579ba14e53d926fb5aed4d4309ead479994590eb4126ac465717a371e2da3aae51d70ad8cd78e069a28e35dcf2fb9e4540b59ce366bf46f14d45b28a8c8b183ffc41dfbfa5a79246831ca10fc283850ce6553eab62b94e0b24c45d6d49d2a993e91aecb171f641d2ec34532f83cf816ffbc1cdc54a8784b15a89bc132ba8c92c1d844991d282dca4e24a12c8756e018337a3bdb9640358af4c5ad67ba74ec9b014b99c753df76586a02633ef31c6a3393071398ec1850e4e956bd63d15296f638307ddbb21dc7f5fd891d80c5c7d474ac31b31cea508f530e2ef75d7238237f6ba1e15ca84a2ad18725bfe32809b749bc592de649d8c5486993ebf3beb936c4cb3e358644d03bb90e6d5548746a2717ad92309e2f92e82aec97b5848cf2fdfa01d795d25c01c271c9c9bec279915f9b30fe43faa71852a8a1e41fcf11c15de1a3537d3e1c84e2e9a08bd2f88f4be3aaf5e035f4cb1345dbcb89edb8ae473a70addfd43cb7553e1d4cab080594fa18a83f1c72389a35ea04c222ce7c15adbe63f51f7a097b0eb6030000",
    ],
    [
      "ETag",
      "T7V7KZbRAy9JsTTZJ2DLng==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1636335954542"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff9d94616fda301086ff8bf795303b890946ea07baa61d1aa50cd249d3544d26316918c499e3b44288ffbe8b5b91b0796cf40b5c8e7bfcfabd23b7433fb23c4103b4c8d29f9550db77a9d09feb6026ca6aad4bf82a645e0ad44142f3142ac554dd4dbdf7f92772f575955c2fdd547ef1d38b0ba828e347b1e168b043cb4cac93120dbeed50ce3702b02c8102bd2dea783489c29b7006898d4ceac4e47e3c1e5e8e43b4ef1c002562a992ef677345a5e2476e6efc8acda3d96872739ae21b59e5ba61aec777c3e8349270dd12b91a46e1e9fa52f34dd100d1e8369c47c3dba98d7ad877d04a2e66622994c86351f7b4507225623daac755c2516be19412cc8a129962f343aa64557025a50319c77548cfeb791e65d4a7be0b756b19739dc91c4aefe7703ba4a5e6eb997c86612182a142991806b7349f4f90f78c8de368ae157f5e08a5b68794dbc54d8c5dec60d7c10d41bab48f038f30e6d390198f6d11d2c0f45c95165bab10cfeb05ccb789046fb7d2628d08f309b58a508b916101f36ab4bbc4ffb355f4b8550cfb6082f6029b0fb7c1cfd16871c603c5ccee81b0370ab023019710dfb30b34757f391f784b93c871932865c47a7ef0cffbdbcfff6dc83808a819429f5944fa967fd3ff88f48f45e02565f62635ac7f8e408b3302bdbe7b98c2c3eb3b7fb9d5a29c2a09fba314f5eac02f6be483ac570bacb6815695e8a098c356ff98e997e7fd2fb2a2d60832060000",
    ],
    [
      "ETag",
      "ePrOP3/nK1DYjdFf2goV4g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
