const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1621728286300";

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
      "000002ff1dd04b7282300000d0bb64ed382050a0bb602a7f29a023ae327ca2092a46122ce0f4ee757a84f75ea0ac6b220496f70be9c02798ca95bdac9721b71c08296b9d318ee6e822051d6cda453b536bf38ad7f3c665fef1941db8e6ea8c6c86a068ce064bab440691a16ca9e7e78d1eae459b7ac9686bd26ad2077ccae3003171276476e4fb464f98a945567dd4fb09f534b814584933f210419d150633579aa287b6d21cac2f6d6776562cb6f38fa7a215d95714329486cfcc6df1fa1cc31b1ac7a9e3b90eef731e6daf689469427d8be733c5ea3da9f0155a10c56001c8c8594f04666fae66d8f602fcdbb19c38790738a4ec490f7eff00d9a5b2741a010000",
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
      "Sun, 23 May 2021 00:04:50 GMT",
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
        query: "SELECT id FROM records ORDER BY id ASC LIMIT 1000 OFFSET 0",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-1-1621728286300",
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
      "53",
      "9b4014fe2bccf6d5040844203399d6466c99c63812d28e4fceee72c055c222bbc4aae37fef593056c7197d0bfb9def722e792437a2cec98c3051de76d0de7fb9968c1c10d0b4c4d768b3fa6b5f9dee7e3dd0701730f9d3691efcf3f91c2b846129ba6d2a1829d9b51cd46cb31e97adec1ada4a3942a1913b720f276e300927e1a1e738485350154b51df20f94aeb46cd6c7b6f3d2ea52c2ba08d50632eb72feff66e6237adbc06ae95fdd6d14613657fe8f9b5929c6a21ebf9668dfe9d82f612b6545498e03f3167dfde2a8f05dd8e4b2cde090e9473d9d5daa442092eeb42945ddbab92d923e953befa41d6f1325e6496c8ad93f4ecd4c2f085a8405967e9719c5adf2f0c72b45e58cbe434c92cd7711cebece4641d679619510e4a8bba57cf28abc0283ff79fbc1fba21504d150ce065e01c5237742256b08017a1376585038c852c98528f393cf2c1cf1950e469a3deb3682d6bf0a3c07302af98d028cf3d377499475df003a318b16852f8aee34f43f27440ee5aa1e158a8462a314c81fc49932cbeccd2cd6a7194c57d1b05ed2a7d3c84334dbccea9b1492cfaa0af27830a894e66a4c92a8bd3a34596fc8e872d2ea1a4fc7e7d8b7b2c68a500cb71fbd97d83f322e79b38bd20c3530a05b450f3cfe788c53df0d90def2f0a4bf1a6d04569fcc6a571653c780bc3f2c4d664d9b32367eaf5ff004d5bfd0e0bbc08b1974b328ab0855a3f37345c14797a36ebd44b118238f355b2fa81e83f3bcc28f8cf030000",
    ],
    [
      "ETag",
      "9UNx/hMvKza8v7boH0pz4Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 23 May 2021 00:04:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1621728286300"
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
      "6591514f83301485ffcbf57524c09421c91e9821ba049789ce17b3870e2ec8042eb6c5b990fd776fd10793beb4275f4fdbd3d3113eeaae80080e75f539a03c5f55a89f8cc8500d8d563cf5d4298419a016153be3c738cd4a396cabeed53fa6df9b58f9c969b96487cadfb115108d50d6d8140aa2b7113ad1226fab0b36e8736ff47af392dc271983960a0336bb348d57690297fd6506473a6458a2c42e4773582fe988b95e9b9c4ab47d838ea241e6a860324f0b95a4a11792c861e2788e17f8dec20ffd3098bb2efb1aca85aea963ebee19f8164d5a34199d382578c62127cd89cb69fc327c0af49ff816995be4da223716092cb2b04868915b8b707246fbbfe7acce1ad5561257a3d0b412babf15dd91a94d739d5a0e38835cf0573dd41aa252340a2f3f1161517e08020000",
    ],
    [
      "ETag",
      "AMALRfruPgnV2jLxNAs2Ew==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 23 May 2021 00:04:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "00000002ff1dd0db6e82300000d07fe9b333dc91bd415bc325d22c0e055f9a02e53aa0a31a8165ff3eb34f38e707b0a2e052d2fbd4f311bc839569cebed847e2e0b96ea7a8e27851e6a6c669abe81db14864fb5c57b7e4596c10975b38068d8548ec39324f60a80597b399e0089a1aa3852d89676c8b4aa60ccda65f1f9d2e5c54e823acf6d0cd8c48a75ff84d96b0c79b11d8a889b3ab5d39722c90c94432a176f824597b516fb52f63bf7bf0744a4f4bb590249fade8b66ac3ea3e98b76234d1bc4d07a32c33b3aea793fc20b9fc16763f2c013c5f05b6e1b33934460576802fa29db9a4ed8bab9b8eb303ff767a5f057f05789ccd7c06bf7f9b4cc9711a010000",
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
      "Sun, 23 May 2021 00:04:51 GMT",
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
        query: "SELECT id FROM records ORDER BY id ASC LIMIT 100 OFFSET 9999",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1621728286300",
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
      "5b",
      "6f",
      "a2",
      "4014fe2b64f6b5ca4d114c9a5d57e92e89d588d8a64fcdcc7060a7224399a11bd3f8dff700b6dba649eb13ce773bb767b217654aa68489fcb181faf8ed4132724140d31c5f9b706dd5b7bfd3d9cdc6b5f6c795b994abe5e6f21219a255297aa80a1828d9d41cd474b71de6b56c2a5a4b3940a38133b03dc79e38bee37bae65a14c41912d45b947f11fad2b3535cd97e8612e655e00ad841a7279787d379f1cb3aae50370adccf789268628f3d3ccef85e4540b595eeeb698df28a8efe140458115fc17a6ecc77be7a1a087618ee427c181722e9b52b755a105976526f2a6ee5cc9f4997455bef920db7019ce1343a4c655bcbe36b0f84c14a08c75bc0863e3e75d8bccb67363195d4789615b96b1bebada868911e00f1352505a949d7f425901adf77902d1c7b1b702aaa9821ebc9f581eb57d2b60199bf0cc77c72cb380319f4dc6d465160f46304a1950d4e9d6bd53d15296a32cb03236e6963372fd8c831dd88e473deedb23c74f03d70198a41e1d93d305f95b0b0d0ba12aa9443f07721b4749789fc4bbd57c96845d1b196d0abde88b6b9b785ba7c62691f4495fa716151293daa146ab248c67f324ba09fb3d2e21a7fcb87dc44d66b4508074dc7f72ac705e64b30be33bd23fc590410d25ff7a8e48ee80afaef8e5a6908a5785294ae37f5c1a576d06afa15f9e38b4b5bca803dbb35dd2916bfd019bf863c45e6fa975840394fadc507f53e4740e6bd42b09419cf92a5afd42f41fd328bca0d1030000",
    ],
    [
      "ETag",
      "uEO0rWHdAVQ30kyN/LoNLQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 23 May 2021 00:04:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1621728286300"
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
      "8f",
      "41",
      "4f",
      "83",
      "40",
      "1085ffcb7885b4c5a436243d502515258d627b30c6c3961de8526070778941c27f77163dedcc9b6fdfbc19e1aa5a09219c55f9d5a31e6e4ab4afaec8d0f4b535fc74d41a040fd08a92c92719258b87eab8d78bebcf45ca77a59f8b68bb65c2e4176c048423140a6b6920fc18a1150df2372519b043e7eae4708cf771c64243d20987539a46bb3486e973f2a0a27386056a6c7374669da60a739bb89c46345d8dbea15ee7686086e741a9a9ef8426f259f1037fb50e5677c126d8ac6f974be66aca8555d4327a7a03de62c98a3aa36f4e090e98fbdd60d1bc68626f83f27fc286f7e4d65a8e63758f1ee4824f7d54f6af9f7e013e0e696d47010000",
    ],
    [
      "ETag",
      "JdAI/DjTGr/kzhddYirKfA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 23 May 2021 00:04:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "417282300000c0bfe42c0e6022a6b7201402a2858a945306639068d580a8c44eff5ea74fd8fd0115e7e27a65fde528cee00de8cac6633e8ed5cc25e4e0ed73ebb8284d9fecf23ebcad88c5dad6402a2e3155b4565940276e96cc4f9d919bb7b688d9ee0145f2d998a13e6e2c7d58c2a99346d3e802115e3929d2a9333c8c0ccb60a3266c2dbd1425df35f433dba3f3f788ee60bb49d6b5b1b2c8763f0fa975e17d61161da555c41d5b67305f3682081c7b6df3a1b9339c1e4b12e14537cbeb48c2b01e025e0577f43cb3a6f442687edde516f9d2e6b7e234f3c1088841c94e5c997c712708e311f8b7b35e2bf10a7045d5890efcfe011c83cfb01a010000",
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
      "Sun, 23 May 2021 00:04:52 GMT",
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
        query: "SELECT id FROM records ORDER BY id ASC LIMIT 4 OFFSET 0",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-3-1621728286300",
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
      "5b",
      "4f",
      "db3014fe2b91f74a9b5b9b3495d0c6dab0452a45a4e9269e90ed9c04431a87d88131c47fdf71523a1012bc25fe6ee7f6446e459d933961a2bceba07dfc7223193922a06989af8e73173ee4d7b6ce22f5f7275bde677f2ea03c3e4686302a45774d052325bb96839a6f37e3b2955d435b29476834f2476ee0b9a137f36681ef38285350152b51dfa2f85aeb46cd6dfb257a5c4a5956401ba1c65cee0eeff6bd6737adbc01ae95fd36d1c610657f98f9b5929c6a21ebe3ed06f33b05ed15eca8a8b082ffc29c7d7beb3c1674372e917c2f3850ce65576b53155a705917a2ecdade95cc9f485fe5ab0fb28957f122b3446e9da6e76716165f880a94759e2ee3d4fa7e699093cdc25a256749664dacf3d3d34d9c59663e39282deade3aa3ac0263bb6f3e793f7123a09a2a18c0abd009a83b732256b09017337fca0a07189bb1704a7de6f06802939c01459d36eebd8ad6b2f6022f8008207773d7c92170fd20087d775ae4451ed162e2447e317159449e8fc8432b342c856aa412c308c8ef34c9e2ab2cddae172759dcb751d0aed2cba138d3c4eb3a353689a40ffa7a36a8909864e699acb3383d5964c9af7858e10a4aca1f3777b8c482560a908eabcf1e1b9c17b9d8c6e925199e5228a0859a7f3e4724f7c06707fc724e48c583c214a5f11f97c695c9e02d0ccb133b53cb8b3af226d388f4e456bfc382d0608733328eb0835aef1b1ace893cefc33a75202188335f27eb1f88fe036e7b86d6cc030000",
    ],
    [
      "ETag",
      "00q7wdh/tT9szHbDvTxQeg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 23 May 2021 00:04:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1621728286300"
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
      "0002ff6590514fc23010c7bfcbf9ba256323884b7810b22886204c171f0c0f653b6a71dbcdb6439785efee75f860c24b7bfdf5d7debfede153d505c4b057f2ab45dddd48b45b57a468dad21a9e1aaa0d820768856473b368558693f247be754fc97324e5dda9d8ce666c98fc032b01710f07856561207eefa11615f23155b060bbc6d5cbf56bf290a40c2a2a1c5867abd5fd7c95c07977f6e048fb140fa8b1ced15dd6683a626e972ea7115553a26fa8d5391a18e461436a6a1ba1897c267ee48f26e1e8369c86d3491404ec95940baba866357b01ee62c98a32a56f4e096316f45072e0c3309e188f863cff497845a22b327664f7d760de59341b4d1cd6a0cb195c322fc8bdc3f2fbac6ed1835cf0df3d2a7b599f7f01b35590ed98010000",
    ],
    [
      "ETag",
      "PCuiUe6lxgWyJEO3gg9vdQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 23 May 2021 00:04:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
  .post("/oauth2/v4/token", { grant_type: /.+/g, assertion: /.+/g })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff1dd0495283401400d0bbf43aa422488aef0e242404c22cb46e28c0cf58346306b0bcbb298ff0de0f49b20ca7299ebb061979234bc2c336db1abda4c8723dbf0e4de06a1a0a52de07abbf8674e28d3d18bec8b852cd3f56aed57786cb8a2b5720a38e2e4515fa71a1420c83603bf6454e41573d39a27ed88970b1565be2e1453872b353d66df36e265ad3971eccc0cb69a7f4cb43f5bb7b703c5127b04a50ea220f34cf8d9947056b6fcde9f18eaa1bd46531864cbae60bde91d6375022f3b36a92b63defcc9cde1a9ed387db7238ec19af64d7f3f757629f2c8d6c083efa6ac429ae9e5c4104d8907f7b3c2f3d3e03144c461cc9ef1f73386a5d1a010000",
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
      "Sun, 23 May 2021 00:04:53 GMT",
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
        query: "SELECT id FROM records ORDER BY id ASC LIMIT 4 OFFSET 4",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-4-1621728286300",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85525b6f9b3014fe2bc87b5c1320099744aab68cd08929493542b6f6a9b29d03730b9862d329aafadf770c6dd7aa52fb063edfed5ceec98da80f644198286e3b688f9fae25232704342df0556e2eaae847b48ac28bcf9d473717974171589e9e22421896a25553c248c9aee5a016fbddb86865d7d056ca110a8d6623d79fb8c1249c84fed47190a6a0ccd7a2be41f21fad1bb5b0ed27eb71216551026d841a73593dbfdb7713bb69e53570adecd78e369a28fb5dcf2fa5e4540b599fee77e8df2968afa0a2a2c404ff8907f6f5b5f258d06a5c20f84e70a09ccbaed626154a7059e7a2e8da5e952cee499ff2c507d9c5eb38ca2c71b0ced2f38d85e1735182b2ced3559c5adf2e4d65b98bac75b249326b669d9f9ded62fc40f103282dea5e3aa3ac0423fbd87cf276e2864035553014af02c7a76ee8cc59ce029e87538fe50e3016b2c0a353e6f0f90c6607061479daa8f72c5acbda0fc309cb399bcd7ce620ca9b075ee8050e841c02eafa9c33140e5df27042feb642c34aa8462a318c80fc4e932cbecad2fd365a6671df464ebb52af8670a6899739353689a077fa7a305521d1c9cc33d96671ba8cb2e4573cac700d05e5c7dd2d2e31a7a50284e3eab36383f3223ff7717a4986a7147268a1e61fcf11c17de1a3037e3a2784e241a18bd2f88f4be3ca78f01686e589ca647962cfa753df253db8d56f6a9e6b949fcfc8284205b57e6c683827f2f068d6a967101671e6db64fb1dabff00261618b1cc030000",
    ],
    [
      "ETag",
      "oMXmCJCDC8X+u5aMXY7gdA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 23 May 2021 00:04:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1621728286300"
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
      "65",
      "90",
      "5d",
      "6b",
      "c2",
      "30",
      "14",
      "86",
      "ffcbd9ad85dad50f0a5ee89029885bbb8983e1454c4fbb68dbd325a9a348fffb4eea2e06de24274f9ee4bcc915ceaa4a2182a3cabf1bd4ed438e36764582a629ace1a9a6ca200c00adc8d92c3e5e2eab739e842adeefe2ea148ee6933c9ecdd830f20b4b01d1153285456a20fabc42254ae4632a65c1b6b5abd7dbf7e5f332615052eac076b7d9cc179b2574876e00273a2698a1c64aa2bbacd6744269d72ea711655da067a8d1120df472bf916b6a6aa1893c265ee80dc7c170124c83e9f8d1f7d92b480aaba86275f706dcc5921545423f9c124216745f72e0ac1f2f8c477d9eff647c47267764eac8e1afc1a2b5685e357158832ea77fcbfc44ee1d96df677583039082ff6ea5ec6dddfd026988918798010000",
    ],
    [
      "ETag",
      "lXOvHkgR4iQWUQnj45A7gQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 23 May 2021 00:04:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "49",
      "52",
      "83401400d0bbf43aa422488aef0e242404c22cb46e28c0cf58346306b0bcbb298ff0de0f49b20ca7299ebb061979234bc2c336db1abda4c8723dbf0e4de06a1a0a52de07abbf8674e28d3d18bec8b852cd3f56aed57786cb8a2b5720a38e2e4515fa71a1420c83603bf6454e41573d39a27ed88970b1565be2e1453872b353d66df36e265ad3971eccc0cb69a7f4cb43f5bb7b703c5127b04a50ea220f34cf8d9947056b6fcde9f18eaa1bd46531864cbae60bde91d6375022f3b36a92b63defcc9cde1a9ed387db7238ec19af64d7f3f757629f2c8d6c083efa6ac429ae9e5c4104d8907f7b3c2f3d3e03144c461cc9ef1f73386a5d1a010000",
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
      "Sun, 23 May 2021 00:04:53 GMT",
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
        query: "SELECT id FROM records ORDER BY id ASC LIMIT 4 OFFSET 8",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-5-1621728286300",
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
      "000000000002ff85525b6f9b3014fe2bc87b6d0238909b546d5d4226a434d108e9d4a7ca3607e68660824daba8ca7fdf0192ae55a5f60dfcddceed85ec64919029e1323bd4501dbf3d2a4eae081896e1ebedbc64892317e5961ed7d91d3d4c76f5f2f9fa1a19b25169b62f73e869555702f474bbe96795aa4b5629d543a39edf7387d41dd1311d0f078e83320d79ba94c50ec57f8d29f5d4b62fd1fd4ca92c07564add176afffa6e3f51bbacd42308a3edf789368668fbd3ccefb912cc48555c6f37985f6ba81e60cf648e15fc1726fcc77be7be64fb7e86e427298009a1eac23455a18550452ab3ba6a5dc9f485b455bef9209b6019cc624b26d6225adf5a587c2a73d0d63a9a0791f5f3be416e36336b19de86b1e559ebc56213c4d618cd13d04616ad75cc780e8dedb9f9f0e3c41b01334c43073e8c9c2173c7ce84a77c24d2f1c0e7a9039c8ff9c86703ee8889075ec281a1ce34eead8a15aaf05d97391e13548891f0dc81009e004d284d86e08e129f7a03cadc9493d31579aea481b9d4a5d2b21b01f9138571f01047dbd5ec260eda365256e766de15d734f1b64e834d22e993be4e0d2a152635f30c577110ddcce2f02ee856b8848c89e3e6804b4c59ae01e9b8faf858e2bcc8ef6d10dd93ee2982142a28c4d77344720b7c75c09773422a1e14a66883ffb834a19b0c5141b73cb96f6ab9a8279e331c92965c990f18f57dc45ecfa871843d14e6dc50774ee4740eabf52b09419cf92a5cfd42f41fa3d54c33cc030000",
    ],
    [
      "ETag",
      "MDpad0iFpU2yOgV2q9kuLw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 23 May 2021 00:04:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1621728286300"
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
      "00000002ff4d90516f823010c7bfcbed5512c0288ec487b91167c2dc445d962c3e543810058eb5658c18befbaeb887bdb4d77f7f77fda557b8e455023e1cf3ecab41d9dd65a837a68850358556bcd554298411a0161993db72d3b4e3d789e7784fa7f063f9bef9b9bcb4f339132a3e6129c0bf429a639128f03faf508912b92d4f18d05d6dead57a172c838883921213acf761f8b00803e80ffd08ce748c304589558c66582de98cb15e194f25caba404b5123635430c0c34526a9a98524b238b1269633751dcf9db9b3e9d8b6992b28163aa78ad1fd16f8154d5a1411b56c092e03722859381dd66f8eef079fff89639be8f0d7bde834aa37496ca2d048d837a14732929ae5b56c7004b1e08f79cef5eddcff0223a5f89d75010000",
    ],
    [
      "ETag",
      "SmQuw3O5717DhLXGVQxkMw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 23 May 2021 00:04:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
