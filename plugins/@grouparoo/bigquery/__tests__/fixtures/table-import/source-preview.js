const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1640212611972";

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
      "d0497282401400d0bbf45a2c4b9b293ba050a620065bc54d17428384a9f90a02a9dc3d568ef0de0f8a93843d1ef4d996ac411f688ad7ea3259de56da6558cdc7cf0bc9e12cf7b31935b565b8b53af4dbe19c1f9bca0d032a41091aab0c51ddc856e4c00455aa601f7b2410258d1826c10337e73c6d1a4bd60f35c95e07a9bc1642fc5aeb21bddfb74e27c5e9d9f3b7be3d9e2c43853a9bb35ce182dd79462f616cdac5fe957c9dbedd09e0b67f96f135d272273de83b4183bda7d0d11c2bb7dbf0568e14a7cd1c8bfabce43314662446bb36ec899cdbd21a67060e3be28c45c093162d101b7901ec418bb77b23aaea02fd27d0e7c4d97b4267313040bf7f8caebb9e23010000",
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
      "Wed, 22 Dec 2021 22:36:52 GMT",
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
      jobId: "grouparoo-job-1-1640212611972",
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
      "525b6fda3014fe2bc87b5b0bb9101282843644b3352a6502c26e2fd4764e529710a7b1d38955fcf79d2494b5aad4be25fe6ee7f648b6228fc9883091de5750ee3fdc4946ce09689ae2eb6ac6b6d3bf72f15b5d9e5d5dc63f178e73b69d8cc7c810b54ad15d914157c9aae4a046eb552f2d6555d052ca2e1a75adaee53aa66dd9ae65f99e8d3205593213f916c5b75a176a64184fd1bd54ca34035a08d5e372777a371e6ca328e51d70ad8c9789068628e3cdcc4f99e4540b998fd72bccaf14941bd851916105ff8531fbfcd2b927e8ae9722f94170a09ccb2ad7755568c1659e88b42a1b57327a244d95cf3ec82a9805d3a8f3b1f365f9edba7353a0e32d55a06e3ab3f03a8c3a96893631282df2c624a22c83dae0d866f87ab6b5806a3469c18d67bad41a9a3e4b98c793617fc01213181b326f40fbcce4be034ecc80a24ed7ee8d8ae632f71d0bc0f65d9f739c8eefd8be4501783c30c18e2d877b7e6c816dbae4704efe9442c385508554a26d96fc588651b08996ebf97412054d1b09ad327dd1165737f1bc4e8d4d6e4cd342e21bbd1d6a54484caba717cea360399946e1f7a05dd80c52caf7ab7b5c5942330548c74547fb02674616eb60f98bb44f4b48a0849cbf3f4b2437c07be7fa743c48c5f3c114a5f11f17c7559dc14b68172876752d27b56dbb03d2904bfd0aeb7b2e62a7a3a91d6107b93e36d41e0f391cc32a75222188739f87f3af88fe030752801eba030000",
    ],
    [
      "ETag",
      "SLbkCzoQZsH+KHdXQ44+kA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1640212611972"
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
      "51",
      "6f",
      "da",
      "30",
      "10",
      "c7",
      "bf",
      "8bf74a989dc40946ea03d0d02151d642aa3d54d5641243d3419cda4e29427cf7396e4542e7b1d117725cfe3fff7d77703bf02bcb53d005f36cf95c32b1fdb264eab60aa64c962b25f5a3e0b964a00598a24badc4cf8397c1abd71f7e6578586c2e673ff221bebdb8d00a993cb23505dd1d58646c954ad0bddf819cae99c6b2540bd4b6a8e2d1248eaea2a94eac795a252677e371af3f8ec0be7500044bb8487f9ecd15a5481ea9b9f13b368ba7a3c9d5698aae7999ab9a198ebff7e2d3484a55c3e4b21747a7f552d1755103f1e83a9ac5bdeb1b1bf5b06f81273e9fb205132c4f58d5d342f02796a851352ea98f5a3147725d2c93c088cd8ba5e0654105e78ece38c841810f5de4060891d0d5ba154fa8ca78aea577337d3ba0b8a2ab29dfe8610104b54298580f6e613e5f74de33651c473325e866ce84d81e526e1bd63174a1035d07d6046ae30e0c3d44888f23626a6c9aa01ac6e7ba34d8ca05795e1012df66127ebe94066b4c888fb0d5045b0ae9157a5eb5771bf97fb60a1fb78a405f178183d056875be3e7783438530386c45e03229f342047062e42be6737a8757f395ff39626a1e326614c90f5fcf09ff7b79fff61c8300cb1194287584c3a965fd3ff98748e4d50e0117b936ad63fc7a0c11983a0e31ea6f0f0fe9fef6f15933782ebfd2159b53ae0db1a19f06ab5e8d5d655a2642d9050bdd5bf65eaedfbfe3762a822e232060000",
    ],
    [
      "ETag",
      "5qCvCx3BF/e5FpwDSWnF5Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
