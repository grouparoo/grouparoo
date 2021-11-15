const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1636475694233";

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
      "db6e82300000d07fe9b39a2097d2bd0d099722069139f5a5012cd251a5501a8666ff3eb3df98e71fce03e46549a52443dbd01b780353be448b721109dbf1c6ba6943e9606375525d575bd837af59b59d8bee129badeae67aaa1f62b213906dee4d3060a2fc7aaf957e9244be554b1d1e770217dd48648356b63bc5761eef48cc4b9566d3d04e17311a94f9f9013288985f614b79ef2a81b0f87433ef8b8f7777d06e7df1815bcb69a22bb3907ed91e6fe37ae0dd46a6dc9b343747e7f31ad7a45a27c13e832c0979636c6cc351a720eaafa9c90d5c2ccb9a663c548b9797ff0bcc00fd16aca792b0e776dd446806feea936112f4f9dfa1794f7bf0f30b1ec165d119040000",
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
      "Tue, 09 Nov 2021 16:34:54 GMT",
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
      jobId: "grouparoo-job-1-1636475694233",
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
      "db3010fd2b91f771b429a4b44da56a54258c4c6d0a690adaa62972dc4b302471881d1842fdef3b3bb40321c1a7d8bef7eeddbdbb3c933b5e6ec898243cbb6fa07efa722b12724040d10c5f33fbfcaf7de4fff8e5c3d78bd16da14a7a7ff9389920826b96a4459543478aa66620c7eb5537ab4553d15a880e26ea1c760e07cea03f3c1eb8fd23c7419a843c9df3f20ec9374a55726cdb3be96e26449603adb8ec3251ecdfed8723bbaac52d3025edb78a368a48fb43cd6fb9605471514ed62bd46f24d4311494e7babd3d71939cbccddce5b4e866087ee00c2863a22995ae0a533051a63c6b6a93958c9f89a9f2d581acbcb9378b2c26f2a628e3921670606da8a2b17aaac03a0b970bcb0fce96e1621af9cb205ecdcebdc5b43b5bced78b60655d9f7ba167299ae460b8d6c43a31b7002fa8bf01a97869d423fdac955ffcf1df0f4513505a421b8c87bd013d1cf5dc244d862c1d39c749da83241925c363ea243de6f6a1bf498022cf881a162d45e9f42902a91bbb8c0ee2bedba371926c9c78d41bba0c52709df4986c0fc863cd159c725909c95b87c875e8475e1c85eb60368d3cd3424a9b5c9db685e9065ed7a8b041047dd0d35647b940256db71f445e389d45fe95d74e780e19654fab7b9c714a730988a6359aa7a05e880d1a4682e9c23b45b099d8c52e28c9f8f733d19eeb2a5e59bea74738405dae325fb28a423ff86ecad921ae68de18c8437b2015967c83bd61d5db3f88c41d6db390cbb517fe24ed53880ed650b2cfa7896013f8ec4fdbed3d4271f351452abce3ea30a935580ded0a71d3ed7ff6a03724065cabf7b1d168679acea1334201a57a69a8dd7becb3156be41e84419c7e60ccdafe033f89eef375040000",
    ],
    [
      "ETag",
      "g/Hx/2IJZIe+P8jmtnaqQw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1636475694233"
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
      "3010c6bfcbf976441018ba841743511701f93334c61852b60386db6eb61d4808dfddeb44346aa26fdabbf677ed3d4fbb85e7280dc18169347fc9516e8ee6a8072618a2ca63ad78ca28550816a0167326a3f14d32bdbbb7f3636f5119100d1e5eddd5bad96442050b4c04385b984518870a9cc72da422412e0b28ce9374526416e84d661647fed0eb5d719e5068f2deb8d3715b9d36ecac436128b49814fc3fca9e76162c693ac4194a4c0334bd6492961868cfc85422c9622c29ca65800a0ab8d8984bca3321894abc52aa942a76d5ae35eaf659eda45a652ea640e8885246c7236e0f3469110f69cd22c166401621eb9d15e3ca3815163a4ce8f57cbb56b4f7159018900c277f721977bb10fc081fd8de80ef9c48284ff581baecdcbabf1dc78e7e1e75e1faed1f84d2ecd301f1bd6e7be4bbddbee19ef6d25b1b8daa2f896d54681cac946ba7f5865d7e37f59c8cd17c8fa3658e160482ffc675a4c1998958e1ee0d26bd157079020000",
    ],
    [
      "ETag",
      "iUKmbVW6u/Ih1QooQYxAvw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      jobId: "grouparoo-job-2-1636475694233",
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
      "0002ff85526d6f9b3010fe2b91f76d6b0281402052b445099b90d2742364d3f625b59d83ba014cb0691555f9ef3b208d5a556abf81ef79b9e7ee9ec85e143b32214ca4871aaae3a77bc9c815014d537c4d6beee4e11738a47b7391263fe93afff7389b4e11211a96a27999415fc9bae2a0269bf520ad645dd24aca3e0af5adfed0b5ddd1d871fd9165db485390254b51ec917ca775a92686f16c3d48a54c33a0a550032ef3cbbbf160196525ef816b65bc7634d04419ef7a7ecd24a75ac862ba59a37fada0da424e45d6c4bb1077ecdb6be581a0f92045f083e040399775a19bae5082cb2211695db5aa64f244da2e5f7c9075b00ce671ef73ef7b7473ddbb2d51f18e2a50b7bd65781dc6bda189323b505a14ad484c59068dc03966f876b60d816a14e98adbb1e9d2a167fa2c61639e78b6c3121318f3d8d8a13633b93f82d18e01459e6ed45b162d64610f7dd3b32ddb715ccf1bd93e587c484dc71a32cba10e1d73cac1e59e4b4e57e4b1121a16429552892e2cf9138571b08da3cd6a3e8b83364642eb4c2fbae69a102ffbd4181241efe43a355521d1a9995cb88a8368368fc3df41b7ac25a4941fd7075c5742330508c725c7c712e7457e6d82e82fe99e2248a082827f3c4704b7858f4ef5f970108aa7832e4ae33f2e8dabc68357d02d4fe44d2f17b663f963d2822bfda666fb1ed62e07d328420e853e07ea0e879cce66b5ba80b088335f85ab1f58fd0f159d9b85b6030000",
    ],
    [
      "ETag",
      "guc5mI+eqgk0DgfPaSmZwA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1636475694233"
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
      "6f",
      "da",
      "301086ff8bf795203b899318a91fd22ded9028eb20953655d5641243d3429cda4e2942fcf7396e4542e7b1d12f7039eef1ebf78edc163c16650e0660562c9e6a26369f164c7d6f820993f55249fd55f15232d0034cd185ae442fd145b5e6f291073fe74fde8ff499a93a3e3bd31532bb672b0a065b302fd832976070bb05255d318d15b92e509baa8987e334b94c263ab1e2799318df8c46f1f92801bbde1e102ce322ff753257d522bba7e6c66fd8349d0cc797c729bae275a95ae662f42d4e8f2339551d912f719a1caf978aaeaa16488757c9348dafae6dd4ddae071ef86cc2e64cb032634d4f2bc11f58a686cdb8a43e6ac91cc9b559268129363f2c04af2b2a387774c6711d1478811fe280f8aee7e9ba25cfa82a78a94b6fa6fa764071459713be96cd68a1ae1026d6839b9bcf679df78c8dc368aa045dcf98109b7dcaedc336862e74a0ebc096407d1cc1d04384f83821c6635704b5303e55a5c3362ac8f38290f83691f0e3563aac11213ec256116c3112577a5ead761ff97fb60a1fb68a405f9bc04168f3e1b6f8291a1dce78c090d83d20f241017220e022e47b7681b6ee2fe76bded22474d8248c09b29e1ffef3fef6f3df0d198621364388884524b2fc9bfe47243a14d12f29b137a965fd53043a9c110822773f85bbb777fe7ca398bc165cef0fc99ad5015fd7c867deac16bdda064ad4ac0732aab7fad742bd3eef7e030a8439e232060000",
    ],
    [
      "ETag",
      "1x8Fpwosko6Yfq3XTvetuA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
