const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1642551508772";

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
      "00000002ffedd3cb7282300040d17fc95a1d34c586ee925407aaa88487e086893428229204f039fdf73afd8d7ad6777b1f806799689ab4ad4b71021fe0c647d6201b6c0d1c9f8d7bb018171296beb59e38d5814cae98bfad14f3a764afe0a6d3954dab700c997e06a7feda69cc606b2e933c56163ac6bbfdbb174705a50567e350d2a53af8565bad87cd7c44fbabcbbc3150ee6f38548589d1cdc67ebbc0bba866ad9dd8069dc34d1ec6323b47d2f6667b34b3c9ac220b524a27b99f2f2af9c6ccd4ddf173e7761c4d4b2e9dfc2be87721ed5c724581b71d9d865043cf9da03b55cb688a21ab5d927256a3c1cbcbbf037a405c65a1459316cfdba169593df0b77edadea478fe4f04d742839f5f900e36ef19040000",
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
      "Wed, 19 Jan 2022 00:18:30 GMT",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-1-1642551508772",
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
      "14fd2bc87b2d90102080845604e98a04610da1d5344d91eddca46e434c6da75355f1df77e394ae55a5f629b6ef39f79cfb9167722fca944c0813f94305eae9db9d64e48c80a139beaaf96218783bcfbf71b2f0b6182d1ef8437a359d2242d42c4df78702da5a568a839eecb69d5cc9ea4095946d4cd476dbeeb0df1b0cdc8133f2fd1ed23414d94a94f748be35e6a027ddee49ba934b9917400f4277b8dcbfbe771f7bdd839277c08deebe57eca288ee7eaaf9bd909c1a21cbe96e8bfa950695c09e8a021dfc27a6ecfc7de68ea0fb4e8ee047c181722eabd2d4ae3005976526f24ad9ac64f24caccb3707b20d56c13c6e715954fb3229e91ece5a293534314f07685d449b756b195e6ca2f52c5e6ec2643bbf0cd6b3ce7cb3daadc36debe632888296a1ac00cb6d4d5be7f616e205f553d04694563dae9f6be597fe2c3f0ea526a0b4862698f8ce90ba2367cc32e6f36ce40d58e6006323e60fa8c71c3eee433f65409167452d8b96b21c3b7ce08f7a5e32e83b5ed2cfa09730cebc64c8b21ef3593a76fc31399e91bf4a1858087d905a341d2237d1320e9238da85f3591cd812325a1566d118ab0b78ebd1608108faa4a6631d151295ea762fc3388866f378791d34135e414ef9d3f601679cd14203a2a9c2e619506b9962c348385b070b04db89fd3c053599fc7e2675cf6b176f5afe4a8f7180b55d63bf641b47cbf087b573425cd3a2b290c7e6401470a952f47cfc8338dcd02607b9da05d12fd23c45908182927f3d4b04dbc057ffd969eb118a7b8f2adae01d1787eb5a832b681648d85a4f6cd7753c9f58b0321f62eed03db5acce5167843d94e6a5a066ebb1ce46acd2af200ce2ec43dbaae33fbcbbed3e73040000",
    ],
    [
      "ETag",
      "rCD6E3U37W0fNhl8DqcqdQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1642551508772"
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
      "000002ff8d936f4fdb3010c6bf8bf792546a58ffa048bc4859b7550a2db401214d2832f62533737cc1763a5555bffbce811534268537c9ddf977cadde3277bf64b19c912f6a0aaa716ecee5305fe3a046b70adf68e5e0d1a072c62e07945e4c9ddedd3cc889336bec8372b995fce37a9bf3e3f27c2899f507396ec59a9404bc7921f7b66780dd42650b7b529ba2c627ed784e2265f2f96df28af51867c799365e92c9bb343746c94dcf3a2e33fd0767f88d8233eaca1040b464098a5b1f808c22fc29a8ed78d8681c3d60a70ac83bb83ca62db708b38a0ca201ec493d1e9781c8f8767d3e929711a05f70a0da1371b1a8f79f45caff1372dc9e2cf44d82ea685cbeeb9a5ba92dd22215c2cf3c9a89bef2dc085c0d6f8a2172c9575fe59bcbfe08b08ff929a7f10a49b52ba0faac048b07d946a0a2ea505e77a4974056f9a23365badb2f7aa186951c97e70ab7a00edb747e06bb64aff272df9eb55ab2f693e7f47384fae3922f9821c9fa7975781bb7f31c26ce7c15d59245339087e8a87a3b3f174327cb6d80506dbd177126f5b8898e0f4a77c579e2525d70e0e7f00098fedd187030000",
    ],
    [
      "ETag",
      "+XVqBnc+u1CTSOdTMESAtQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `records` ORDER BY `stamp` ASC, `id` ASC LIMIT 100 OFFSET 0",
        types: [],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1642551508772",
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
      "02ff8553db6e9b4010fd15445fdaca178c8dc196a2d6757085e44b03386d9eec6519c826c03abb4bdc28cabf7716db69a248c9db6ae69c39672efb68deb22a35c766c2f2bb1ac4c3a71b9e982d1314c9315a913f956b5dddfcbdb88cf7d682f38c5d437e768608a6599294bb02da92d782821cafa34e2e78bd2382f336166adbedde70603b4ecfb13cd7b59126a1c8e6acba45f2b5523b39ee764fd29d9cf3bc00b263b24379f91cefdedbdd9de0374095ecbe56eca288ecbeabf9ade09428c6abb37584fab504b18192b0021dfc27a6c9f7d7953b8c949d1cc1f78c02a194d795d2aeb004e555c6f25a3455cdf1a3d9b87cf130237fee4f63e36bcb8826337f339d44f1e7ad5428b0358834a2380c963fbfe8e776b3b9de975b6316ae16c65600e522955b63159efba1f1e3ca38b126d1b4656c59dabc8c79b00862a36759c66a368bfcd8b0d0560a52b1aa311593a4006de838b6e0edae34812822e190dcb8d690f43c6b9464894b33afef24990549e225ae43fa8945470318a40910e4295dbd61918a57a937180c5ddb7220ed7b6edf73469643094d20f1ec0110c846bd6c68f56df3a965ee055370cee48e4b76189ef93b0c627f1387ebe57412fb4d1b19a90b757e30a79b78e9536193087aa7af279d651c95f4268265ec8793691c5cfa87e5cf2127f421bac3f567a49080682248090ac482a73834f3d72a0ae260b59ccc752dbca8f861a7e3176b3fbc3a8642c84040453f1e32829bc447ffe274a508c53b45155cbc62b8512ab5061570d82c2bb59713bb67f72cd76cc042bdc9d97d7d17cfd7a92b4209953a3674b852f3e92856cb67102671214b3c52ccfe036ff4ba7323040000",
    ],
    [
      "ETag",
      "naXn70YjxQVTw0Moofiheg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1642551508772"
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
      "02ff9d976d4fe33810c7bfca29f7126ad989f3e04a2b5d812c0b5760af94177ba7556512b70da471cf71cb5688ef7e930079d89a5cba2f4a33e31931bfffd89ef4d97a4cb2d81a5af7c9e2df8d50bbdf1742ff553c4c44be49750e5f6b99e5c23ab684e60b88dc1e5dcabbb3d3bf9fc2c9e468f46dfe6d9247bbd1a74f1091474bb1e2d6f0d99a27228d736bf8cfb395f19580b4248600bd5b17cf17d7d3f03c9c806325e3c2717d371e8f4ec6a1f5725c25f028929b4ccf0e4e9c272ad7b3d2a8126fa7938bebf3eebc94ff521a1027e961290b91c5421d9693ac673c8e95c8f303f3643ee3eb759d747273330e47d7ff237e162b99c4bf90b94d0ecd48f5b6cef83cbe194dbbe363ae1b2d3a1b4dc3eef85cf355a3a6e9c555783b1d5d7dedce9acd964fab3e527f7f39b61ee4fd44cc851259248aedbf56f24144faa2385939fcf7540c72b95191289a07c1e5c242c9cd9a2b2907e019d803e251db75898b03dfb7212e9511d789cc20f4ee164ab3b4d43c9dc827385716c110a1ca673863f3f2efb6f0970ceda75025a2322e85daca24af6cf1f0eac07f881f65a52892ab6af58aa7752a71914d7de40408ea7b776ab5a923e63ccd8579c9761922759a8d6d3cc0f600370a466e805d971146436608fc8dd843e20c093dc2b894bdc96d1bb84f7994a40df4b0d838ef4624c02246e8cf70a4d366e50e22d4439420bb516e076b7b8951e478fb3c761bdca3804e5d13b95d9123176313bd63a03f57428bb461ca4d24a3c7cab158bc79ec5e22108202e820c18838f4e0ee7b5e809c7d32a7ad81ef10061a78be4905a7a182e79b54a00615462bae79bd23a416f95caab8f2f0e8dde5f491813007313805183e9e19f563838280781f8cb6450848e09422042615684b85c0bc1ddc3aaf7a1a27aad6e1522eb35cc3d5f2ee481fde3cb48f0ac581f08a6211637dbadf5e0aec227d1fcd6debc030f55f75602621dcb610cc28846710e24c644965dc463c4d6a5de2bcb4dd5e5b01ee41e210b81ae03e3cfc44d83eeca4609fcbfb4905463eb80fbdcefbd037907f11e9a266fd3315",
      "8d31b07c2c4caf0f78508c810001bd1b98d93a8e00f651a3d1158cdfa226d8f75d33b5df491d18a8cf85d28d2170bab94fb4ae6fc1a8b4fd5e1d878d0b131aba5e1cff0f9adcd1f200260835c0076d78e239cc0c1f74c23303fc78a35221ea737e02af0c22ada7427affea087acd8062b7c3180709a86346ecd2c203f91aa3a3a2626d7cdbc58e199f75e293fa6aad8b3b934a2f779579d1baf4e2a430591f745aec79823c0a3797d3a7d7ed259b61e4eecfbf46c925bae378be119de09fd1bfbfbd0e9eec607c7d55125e2d73119732406fca97cc535950c12bcfb0a8ecd88a38fc3cfb92686b5816f7f21f993f0630fc0d0000",
    ],
    [
      "ETag",
      "v+JoUDCZwERR+AYfYRscyA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "ffedd34b7282300080e1bb64ad4e4081d01d8fb1a814a1a0029b0ca50179870451ecf4eeb5bd46fd4ef06ffe2f90a429e11c0f5d455af002a6445417e9e2036ae108ef817bd8aaeff98a5d75a4691849b224b56727f68926f6cb7a5f0b4ea8d406f5cdde1ecb287a2d52ca5a53c75d5bd96be8193ada41c9670dcb43e4cad98977899cad9558cbc3e1ad1c0e5d944cb4236d70a9a1209e2662a3e27e954f96e379563f0f2a27b5c72099ce3d6b04ae47bf0d172f8be1dd9af3b2a1c50a7d6293efb263a6adc34d2352f7b611b1b02b47115dacabab78fb3aab0c6379dc6f619563c557d27309bbc5d3d3bf036680dc68c108c7c5e3f6a5a4aa33f0b73e1e264a1effeb24618481ef1f0779d1bb19040000",
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
      "Wed, 19 Jan 2022 00:18:32 GMT",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-3-1642551508772",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8553ef4fdb3010fd5722ef2bb4e98f346da56a742540b5361d690a9aa629b29d4b6648e3623b2086fabfefe2500642824fb17defddbb7b777922b7a24cc9983091df55a01ebfdc48468e08189ae36be7e1dbb988aa4b3ff8fbfd6c14a790cde3209f4c10216a96a6db5d01c75a568a831e6fd6ad5cc96a479594c798e8b877dc19f4bb9ed7f1dca1ef7791a6a1c816a2bc45f21f63767adc6e1fa45bb99479017427748bcbedcb7bfbbedbde297903dce8f65bc5368ae8f6879a5f0bc9a911b29c6cd6a85f6950096ca928b082ffc4949dbccddc1274dbca117c2f3850ce65559aba2a4cc1659989bc52362b193f115be5ab0359078b60163b5c16d5b64c4aba852327a58626e67107ce59b45a3af3f06c152da7f17c1526ebd945b09cb666abc56619ae9deb8b200a1c43590196eb4c9c137b0bf182fa2968234aab1ed7cfb5f2b33ff3f743a90928ada10926be3ba09da13b6219f37936ec792c7381b121f33dda632e1ff5a19f32a0c8b3a296454b590e3d9f77dd613f19f5d820e973f013ca522ff15397f6e8005c9679647f441e9430702af44e6ad13844ae235c9b248e36e16c1a07b6858c5685396d0aab1b785da3c10611f4414ffb3a2a242ad576cfc33888a6b3787e1534135e404ef9e3fa0e679cd14203a2a942f30ca8a54cd130124e97c12982edc47e1c829a8c7f3d91daf3ba8a5796bfd0631c605daeb15fb28ea379786ecb3920ae685159c87d73200ab85429d6bcff8d38dcd02607b9dc04d14fd23c45908182927f3e4b04dbc067ffd961eb118a7b8f2adae01d1787eb5a832b681648d85e0fec4ecfedfac482957917eb78838365758e3a236ca134cf0d355b8f7d3662957e016110671f5aabf6ff0081ca867f73040000",
    ],
    [
      "ETag",
      "1wBGiRuQ7EzKF9TdefITEg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1642551508772"
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
      "8bf71a34a0014aa43e848e75482950080fd55445ae7dc9dc39becc769810e2bbf79276ac5a27a52fc9ddf977cadddfff1cd94f65248bd8a32a7ed5600f9f0af0774db001576befe855a171c002069e17444e6fa69fc3a4b0d3dd7a5ddf0fe7e1d45ddfc557574438f1034acea223cb1568e958f4fdc80c2f81da04eaba34599b05cc1faaa6b84d378be50de525ca265fee92249e2573760ace8d927b9eb5fc07da1e4e017bc2c70de460c1086866a92c3e81f08b664dc7cb4a43cf616d0538d6c2ed4161b1aeb845ec51a577d11b8cc3e1683418f52f279321711a05f70a0da1bb2d8dc73c7aae37f89b9664830b226c1bd3c279fbdc535dc97691265c2cd371d8cef716e042606d7cd609e6ca3aff22de1ff055847f49cd3f08d24d29dd05156024d82e4a551997d282739d24ba8c57d5199bad56c97b558cb4a86437b8571d80f6fb33f03559c5ff9396fcf557ab2f713a7f47384fae3923e9e276be4de3db75c33dbc1a6176f0e0d616c9540e1a3f0dfae1e56832eebf58ec1a1bdbd177226f6b0898e0f4a77c539e4539d70e4ecfa9f26fde87030000",
    ],
    [
      "ETag",
      "9G9/4Lgr9UPPuY2E49sCQA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `records` WHERE `stamp` >= ? ORDER BY `stamp` ASC, `id` ASC LIMIT 100 OFFSET 0",
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
      jobId: "grouparoo-job-4-1642551508772",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536d6f9b3010fe2bc8fbb24d4d6208842452d4b1946c4879e980b46ab72931c6a46e01a7d834abaafcf71dd0f46593da4fb67ccf73cf73e7bb0774c3f3180d51c437b7252bee3f5c8b081d21a6c8065e7bb35db29bceced39e8bf5a50c2effa4df7467340204af589264db94b5a4280bcae47019b4378528b7a410a205895a664bef998665e916eedbb60134c9d264caf31b205f29b595c34ee720ddde08b14919d972d9a6227b7aefdc199d6d21ae1955b2f35ab10322b2f3a6e6712a28515ce4a36500faa564c58a6584a7e0e09918475f5e676e7392b53700bee394114a4599abca15a4a0224ff8a62ceaac68f8806a972f2e2870a7ee38d43e1f69813371576327083faea50281b546a41684be37fff6a9baae57abab5db6d626fe62a6ad0b464511cbb576feddf55ded40f95562dc6523ed585bf827aeaf7dbd780a39c1f8485bf3b8be69536fe6859a8eb1b6984c0237d430d88d99543cafcd86244a5965f4b19ddeff7f581188229235c1958d7b44efe3419444364dfa5d2b4a308ba27e645ba41b613a309919478c004f55d96b16c9454e62a34f689498ddc4886cd3ead98cf4a26e7f605aa66eb298eaba49ad6480f647685770c54eb8dc0ac99ba6a273df0bdd55e82fe7632774eb321252a6eaa4315715f1d2a7822201f4465dfb2aca0528553fe4cd43d777c6a177e6364331651b42ef835b188b84a492019a1424638a15331143d3d0e922f0426f3177a6c0a87ffaf4809068f8f3e19910de6feb2eabfa44a1377383d0999dd61e0ea033929635eaaeb920031bb8858d16b643dd18eadda16eb631c69768bfff0d4418ed262ffab174fd0bd43cf92c6105cbe9fbbf0ae03af0de821ed605a0b030a00293a6388c109595062d58334a3cabbc1cd87ab7dfb3500d2ed4bf3113dbfaa167558e2a23cb58ae1e0b6ad605ea6cc44af90482204cc01cb605a27f015fa0dcd6ac040000",
    ],
    [
      "ETag",
      "6MwfwLMWl6E01UsSZxlG1A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1642551508772"
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
      "956f6fda3010c6bfcae4bd1c4476fe9004a9d2424b5b364a19a5d2b4a9422639c0ad8933db6987aa7ef739d994c09a31e81bf073be47dcefce36cfe881a509eaa2395bfec8416ede2f417f2916135039d7ca7c652255805a08345d9acc616735fe8abf5d3ef1abf1a7d388e930c8e2e8e4c464a878056b8abacf68c180270a75bf3fa394aec1d8586212f4262bd683d1b47fd19f98c05a244560743b1c46bd611fbdb42a038d6391a77a76b471c1a4d2b35254c69be96430bad8efe3f44d3643ccf8719625a409c8e33c2c9bd12491a0d4913ea16634cb6a53effa7ad88f46ff697e9a48c19237381fd9b10eae1f6bc7f9f03a9aeecf4fa8de1ad15934edefcf579aaeb76a9a0eaefa37d3e86abcdf359bad9ed687b4faeea585eec57c020b9090c6501cff4c8a7b88f5a0b859cafc3a87b612b98ca1189e492e379652e4199542b44da4edb649c7b53d8f7838f07ddbe4711153cd446a526f6f4c69480b4df9443c997b855c9320cba5b9628bf2f3d184fd12a158d9d5ea12f89256ea3307a62ab57a2864e723fc2cabb462b1aef6cecdc9e650c9c0b36c37b0028b784115d4328703848b7d0b7b756dd8c66d6cb7715d2eb1bc8060dff742b71f3624be237697385de27ec0b8ecf93675d0407d0152b3ba82d37cceb4aee4322eb57f0838b11dcb0cc6220e361da8c20bca15fc43edc0072eb1dc06f860179e749cb0193ed80b1f36c00f73c901d24af7cc5101ce2bcde7bf03c121fcb643cccc43cbb4c0759a11f7f5a263dae7b8afa9c25d7cdbc34e337eb8179fe0ca51177726a45e6d2a39505ad4cd485821c343d0dde2cc13abe35a663a87cc7a77cb0eb1e539af88b64a2ed11da7e337a213fc37fadd9f57a0b7d1a0c6529817454152b6c1cca67c5b4e4541659ec86e51590bc5d4fc2b5f328dba65712fbf00ce665ea6f3070000",
    ],
    [
      "ETag",
      "L6hPX0ZHwlMPJCAit98pcA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "08000000000002ffedd34b7282300000d0bbb0564745c074273f2362296a00b36102448c802201d4747af73abd467d7778df124953ca79dc5e0b7a913ea4279982513a4ac68ba81f8bbd87d6b9ead073ca055dbb08b3b2dae054ac4e6eb30d3625d3ad3087c9c4bf85332c1c1d18722d1b4b852bd6b27e1c76e074f0e1dc6f6cfbd0659a99065ad1ee92f862176a6519e133379902f87548f030c2106a7118f99e654e6fc8e94286cba8f5d0b52cee6d4f3287d5e74ee48f6ee21e6d06aae58a7dc9bd4addd2241a423b3d51f9027f7ad67c5b41025bf31c5499f0ef604f5179f48591b5fbd911c1beee03b119bdbdfd3bd240a28f9a3594c7ecb55d560018487ff5e3f659d3d77f9d928636d2cf2fac3cbc9519040000",
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
      "Wed, 19 Jan 2022 00:18:34 GMT",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-5-1642551508772",
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
      "fd2bc87b6d124820a491a2354be91a29212b9056d33421db18e616706a9b4e5195ffbe8b69b27693da276cdf73ee39f78367f4c0eb0c4d11e1c563c3e4fed3bd20e80c318d0b785d865f69b8fc4282bb4d5ef1f9b52b37d9f0663603046f590a57bb92f5946824656aba8dfb8514cd0e4b217a90a8e7f59cb13bf43cc7b327be3f049a6265bee2f503907f69bd53d3c1e028dd2f84284a86775cf5a9a84eef83a7e16027c53da35a0dde2a0e40440dded5fc5c0a8a3517f56c1b837ea3984c598579090efe123372f136739fe3aa5f00f889538629154dad5b5790828a3ae745234d56347d46c6e5ab038a8355b0482c2acaa6aad31a57eccccab0c6a9deef9875156dd6d632bcda44eb79b2dc8469bcb80ed6f3fe62b3daaec3d8babb0ea2c0d29894cc70ad9975616e215c403f634af3daa827ed73abfcd29fe5ff43690920ad58174c7d7b8c9d897d4e72e2d37c32f2486e334226c4f7f088d8f4dc656e4618069e11352c5c8b1a53cf1f4eb2519afbee287589e3a698d82c75c68e33f6b38c8ca98b0e67e8b7e49a5d72b5138a771d4277d13209d224da868b7912981272dc94fab233d616f0daa3860201f44e4d8736ca0528edcd962641345f24cbdba09bf08a1598eee34798718e4bc5008d25344f33b91619340c85f37570096033b16fc7a042d31fcfa8ed79ebe255cb4ff40406d8dad5e68be224825fc4d839226e71d918c853774092512133f07cf80938d8d02e07bad906d177d43d452c6792d5f4e35902d8043efacf8e5b0f50d87b50511aeeb03854b51a54b26e81b8a9f5c876dc73db46062cf5bf31cf36b1d3b6b71959c56afd5250b7f5506727d6a813088230fbd0b4eaf007a654df2373040000",
    ],
    [
      "ETag",
      "INGcNIBbEWOfmiAH4rOd2Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1642551508772"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d93616fda301086ff8bf73568d0116091fa21b474454a81412ab59aaac8d897cc9d934b6d870921fefbce6947ab7552fa25b93b3fa7dcbd7e7360bf542559c4b6aa786ac0ec3f15e0befb600db6d1ced2abc6ca020b18385e10693f6feb277e7f3dc5d5d5d7d166b2dfea3b1b9f9f1361c54f28398b0e2c57a0a565d18f03ab7809d42650376595b559c0dcbef6c54dba9e2fbe515ea2f4f9e23649e2693263c7e0d428b9e359cb7fa0ede118b047dcae21070395003f4b6df011849bfb352d2f6b0d3d8b8d1160590bb70785c1a6e606b147955ed81b8c8667613808fb93f1f88c388d823b8515a1b71b1a8f39745caff1372dc9065f88306d4c0be7ed73477525db457c385fa4a3613bdf5b800b814de5b24e3057c6ba67f1fe822f22fc4b6afe41906e4ae92ea8804a82e9a2549d71290d58db49a2cd785d9fb0e97299bc57a5920695ec0677aa03d06e7702ae9265fc3f69c95faf5a5dc6e9ec1d611db9e684a4f39bd9268d6f569e7b7831c274efc0ae0c92a92c783f0dfac349381ef59f2d7681de76f49dc89906022638fd29d7cab128e7dac2f10f7e1566f787030000",
    ],
    [
      "ETag",
      "s/bpqaYHBoPF96S8yblXsA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `records` WHERE `stamp` >= ? ORDER BY `stamp` ASC, `id` ASC LIMIT 100 OFFSET 0",
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
      jobId: "grouparoo-job-6-1642551508772",
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
      "ff8553696f9b4010fd2b68fba5ad7c2cd85c96a2d4b5718ae423059c343d642fb0d89b00ebb04bac28f27fef00718e564a3eed6ae7bd796f66671ed00dcb63344021dbdc96b4b8ff70cd43d44254920dbcfeb88acf46db2ddfb2d0c9f664dbe7a3b1bd3f390104ab588264bb94b6052f8b888ac1d2ef6c0a5eee48c1791b12b58db66af4355d57756c99a6063441d364caf21b206fa5dc8941b77b94ee6c38dfa494ec98e8443c7b7aefde69dd5dc1af692445f7b562174444f74dcdd3944744329e9f2c7dd02f052d5634232c0507cfc438fcf23a738791acb301f01d8b2889225ee6b2720529229e276c53167556347840b5cb1717e43b536714289f5b8a3f9c38abd1d00f3eae850481b54284e2079e3b3ffb545dd7abd5769fad9589b79829eb8246bc88c55ab9fce6788e72a4fc2e31eed113e554597863c753be5e3d8586fea8a5ac595cdf94a93b730345c558594c26be132818ecc6544896d7660312a6b432fad84ef7ff3fac084412419be0cac406512d6c8749684689d5d3c304d330b4425327bd1047769ff6e39012e0c92a7bcd2239cf89d6c7566ce906314dc33635a36f693136f49e65f674bb4f9248b3434d35d0a185f6059374ccc48e0bd634155d7a6ee0ac026f391f0d03a72e2321652ac78db9aa88973e251409a037ea3a5451c641a9fa21771e38de7014b8174e331453ba21d1bd7f0b63919054504093826454d262c663681a3a5ff86ee02ee6c32930ea9f3e3f22041afc7a782604f7bbbacbb23e51e0ce1c3f18cece6b0f47d00549cb1a75d75c908635dcc65a5b5503551ba8bd81daef608c7fa2c3e10f1061b49bbce8fbd2f1ae50f3e4d18416348fdeff5500d781f716f4b82e00858501159834c9608422516944056d4689659597235bd56dad5e6f490af96fccc09a7dec5995a3ca48339acbc7829a75813a1bb1523c8120081330876d81e85f3049661cac040000",
    ],
    [
      "ETag",
      "XYdGChhohibEmwah4oCD9w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1642551508772"
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
      "93514fc23010c7bf4b7d850410d42cf161e844e20419239118b394f618d56e37db0e4208dfdd9b1ae5099d4fbd5effbfbbebb5b763af2a97cc630b95be9560b62729b8496544604bed2c2d05e616588381e32929fb776632989f8aee6235decc5e279df5e3dd7c7279490a2b569071e6edd852819696794f3b96f30c085392046e5b54f67014078320224786b2728c6661e8f7c380ed1bdf001702cbdc25b5c1a532d6251f9b6f701a47c3d1e038a7f9bf30bab1d2f590147209a61ea38a844b69c0da9a1cda8417c50fd41f8fc3c01ffdd2fc5c1a54f21fe45ad525b45bff1037e1d88f8feb2577074f74edc7c171bd753c3ba8291ede07d3d8bf7f384e25c96a93fda5d5cffb067bc145044b30900ba8be7f61f005841b56936529bb86a6c5d208a81e8fc41f07a9c1b2e006b1499ee659b37dd6edf47aed5eebe2fcbc433a8d823b85394967532a8d39745c47b8a1b9622df6b5ef6f1dd8078314db4215b6ddea9e7e66b9c22a3335cb73a68406139ce6f35639e62db9b6b07f0717536717fd030000",
    ],
    [
      "ETag",
      "BKrQGY3c4bhOwUkQ2vXKYQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "0002ffedd34b7282300000d0bb64ed3810b04077a0563e4a2c4549d964628c56611048a004a777afd36bd47787770794312e0491b78257e015280a9d299b1e3417f7da98c6f98bcaec79858ad37edb38f2b04b0dba68825978937eb1903063998f78347321368d3472d8b57e0b8d15bd96b915433d2f381dd111a754b4a23e869f89a6e6db700f5d8feb4d8f92919b3be2e901dc9dab956d19cbe5e66c6e212a930e598154dc5ce2efb5668778eded7dfdb071bb5ac4c8754f54a8bc7362b688abfc4b5e02ab1cb242274a4f935aa1c81f36dd3c60436e5d9b5b8bed08939e9cdfe3dea41f46694f9f9efe1d30017ca82f2d17e4f2d86ecc1c6702feea13a96afef8ef71daf216fcfc021ab958ca19040000",
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
      "Wed, 19 Jan 2022 00:18:36 GMT",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-7-1642551508772",
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
      "fd5790f7b509214dc80f295aa384ae9102e90869374d1332e6606e09a6b6c95455f9df7798a66b55a9fd84ed7befdeddbbe389dcf332255392f0fca106f9f8e54e24e48c80a639be026522292ec166e5f5327bf0eb1fee8d9dcf6688e00d4bd17d554047895a3250d3ddb69b4b5157540ad1c1449d51c77107fde1d019f6c6a3511f690a8a6ccdcb7b24ffd1ba5253db3e49777321f20268c5559789fdcbbb7de8db951477c0b4b2df2ada28a2ec0f35bf168251cd4539db6d51bf562063d8535e6005ff896972f1367397d37d3747f08133748189bad44d5598828932e3792d4d56327d22a6ca5707b2f5d6de22b29828ea7d1997740f67564a358df56305d665b8f1ad5570b909fd79b4da04f17671e5f9f3ee62b3def9c1d6babdf242cfd23429c070ad9975616e015e503f05a57969d4a3e6b9517ef667f57e280d01a515b4c178d473a933ee4d922c19b16c7c3e4cb21e24c938190de979d26393010cd20428f28ca861d15294b4e7303a71b2384d46593c70531a4fa8ebc68cb25ed687c1046d27c733f257720d4bae2aa178eb10b90d57911747e12e58cc23cfb490d1bad0cbb6b0a681d7356a6c10411ff4746ca25ca05263f72a88bc70be8856375e3be135e4943d6e1f70c6192d14209a4a344f83f4458a869160ee7b4b049b895d9f828a4c7f3d91c6f3a68a5796bfd0231c6053ae365fb28dc255f0cd947342dcd0a23690437b2012989029d67cfc8d38dcd03607f9bef3c29fa47d0a21030925fb7c96083681cffeb3d3d62314f71e5594c63b2e0e538d0693d02e1037bd9ed88e3b76c6c480a57e179bf48727cb9a1c4d46d843a99f1b6ab71efb6cc56af502c220ce3e30561dff01ca37086573040000",
    ],
    [
      "ETag",
      "eacoblFe/cnPDfqMuX6V/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1642551508772"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d93dd6edb300c85df45bb9c03245d7e0a03bd70b66c0be0249de35c144361a812eda99345579233a441de7d94dba5c33ac0bd9149fa234c1e1f1dd94f65248bd99daa1e5ab0877715f86f21c8c0b5da3b7a34681cb08881e71591eabdf0374932dcd8c7fd0a77d9f8e1a0d2e4ea8a08277e40cd597c64a5022d1d8bbf1f99e135509b40ddd6a6e8b288f943138adb3c5baebf505ea30cf97a97a6c93c5db053746e94dcf3a2e3dfd0767b8ad83dde655082052320ccd258bc07e197614dc7eb46c3c0616b0538d6c1dd8bca62db708b38a0ca6036184dc71793c96832bc9ccd2e88d328b8576808dd6d693ce6d1739de12f5a928d3e1061bb98162ebb731fa492dd22215caef3e9b89bef6f800b81adf1452f582aebfc93787fc06711fe25357f23487f4ae93ea80223c1f651aa29b894169ceb25d115bc69ced87cb3495fab62a44525fbc1bdea01b4df9f81cfe926f99fb4e4af17ad3e25f9e215e13cb9e68ce4cbd5629b27abebc0dd3e1b617ef0e0ae2d92a91c043f8d86e3cbc96c3a7cb2d8470cb6a3efc4deb61031c1e9a67c559ec525d70e4ebf01acc8d1db87030000",
    ],
    [
      "ETag",
      "i+ctYAA0OrzvMoUR4qyiLA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `records` ORDER BY `stamp` ASC, `id` ASC LIMIT 4 OFFSET 0",
        types: [],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-8-1642551508772",
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
      "6f9b4010fe2b88bef4f0013618db52d4ba0e6ea91cbb05dc2a79b19765209b00ebec2e89dc28ffbdb3d84e13454ade5633f31d73ecbd79cdaad41c9b09cb6f6a10bb77573c315b2628926314ca5b90d68fded5f4bbb8187dfabbcbaa8b797e7282154ca32429b705b425af0505395e459d5cf07a4b04e76d246a0fdbf6c0e9b9aeed5a43cfeb214c4291cd59758de04ba5b672dced1ea53b39e7790164cb6487f2f231debded75b7825f0155b2fb5cb18b22b2fbaae6e78253a218af4e5611ead712c41a4ac20a74f01f98265f9e337718293b3916df320a84525e574abb420acaab8ce5b56858cdf1bdd9b87cf230237fee4f63e363cb8826337f3d9d44f1fb8d5428b0318834a2380c16df3ee8e766bdbebc2b37c62c5c9e191b01948b546e8c6578ea87c6d773e3889a44d396b16169f332e6c159101b8eb19ccd223f362c34958254ac6a2cc5242940db390c2d78b9290d208a48d827d79e3520f6d01a2559e2d16cd87793cc822419269e4bfa8945470e38690204714ab3372852f1caee0f1c6be4e19c87f8722cbb07699fb880601bd9a89b680287980f2df34e3005a74c6eb964fbd1997fc220f6d771b85a4c27b1dfb49191ba50a77b73ba89a73e15368945aff4f5a0b38ca392de43b088fd70328d83dffe7ef573c809dd4537b8fc8c1412b09a0852820271c6531c9af973190571b05c4ce69a0bef29de6d75fcd7ca0fcf0fa110321050d1b7878cc54de2ad5f71bc512cc52b45155cbb62b8512ab50615b0df2c2bb59723daf606ae6336c542bdc80d6d0f738fb7a919a1844a1d1adadfa8f97010abe563112671210b3c51ccfe03b45772ec21040000",
    ],
    [
      "ETag",
      "emves0J2jCHrZ9+zyfnZLg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1642551508772"
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
      "55",
      "61",
      "4f",
      "db3010fd2b93f771ad65274e9a44425a6101ca4a81523e4da832895b02495c6ca75021fefb2e01d254641de5431adff93df5de3b9ff38cee933c4601ba49e60f8550abef73612ecac558e822351a5e0b996b813a48183e07243fb9581dfb0fd96ac8c9ad5ffc8edd51da7bdcdb03848e6e45c651f08c668948638d823fcf28e799005a1203c0ac16e57a309a8447e11812998ccbc4e86a38ecef0f43f4d2a9093c8a64919be9cec459a2b49956414dbc9c8c07a3a3edbc947f89068a937437ca5ce4b150bb7192c594c7b1125aefc8937aca178b3569ffec6c18f647ff313f8f954ce22f3097c9ae8cd42cd78cc3e1597fb21d1f73d368d1affe24dc8ed786678d9a2683d3f072d23f3ddfce9a4e6f1fb3cf587dfdd24177f2662c6642893c12e5f15f287927223328274bc3bfa7a2ab65a12251360fc0d5c65cc962c195945dc874bd2e7599e538d4215eaf67012e95113789cc017a7509a521230d4fc7f211e60a3100a86a092336ab7e9790a69584cd55a812510727422d65a2eb58dcbd26c84ff154158a2399d5bba73c5d53a9832dd6c3b687a1bcf7a451c51a31e3a916ed5b96e363baa659c4225d627549a360ec78c4717ceab3d06f017ea35640ed80b21f8454ae37755b2dba0f7894a40de961796ede834840445b451fc244a7cdca6d4c998b19c556a3dc2d5a37b77c866df7a31e6b53b8cb403a73da945bb572ec10d2a6de6e517fa484116923944524a3fb3a319fbf65ac4f994029f6a08394606ab39dbbefba1eb63f2ab3373de8d9d4070fdc5e9b0b76c305b7d7e6026b71a19f71c3d727421aa16752c5758647ef29fb333650dfc63e4c0181c76d97faef808181e4a330b66982473dbb32c16b73816db8e0d5c7e1faed76d85f819c7325e1a6d1a2bc642861f6eb9d73204b75300241595507451cbed6c7894141d5b897bf118a7b100b080000",
    ],
    [
      "ETag",
      "aJQyH9qmyLa0h9uKd6Nl7w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "bb64ad0e8244e84e192a3082898a15374c12d312fc51484962a777afd36bd47787f70d0863bceb4a793bf12b780186d8fe888da835dbf7d67d8b447d485296f8e49029d3193a6f2298b5fbcc6c5499c736ed4bf72d2eec3078c547ac71e431b68689f9f44448bcf50251585351a85a569369833224e499558793b44cbd5c2888a219b6234a90516667475ce285091cda9f7528978caf922e9f63f758906dd0c0e1ca96a9e9c857751baffc3a6c77c87bafc4789daad6270dec3757279e4e55af35a1f026af0a8797733a5313935443b81ff3adfb11eb8b0ebd7cf4f4f4ef8001e0ba112def4af1d8eeb8be3f007ff54b691afef83fe7a4e52df8f905ffe91d0d19040000",
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
      "Wed, 19 Jan 2022 00:18:38 GMT",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-9-1642551508772",
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
      "000000000002ff85535d4fa34014fd2b64f6d5b6b494169a346b537165d3d295528dd96cc8305c7094329519345dd3ffbe97c1ba1a137d6266ee39f79cfbc133b9e7654a2624e1f9430dd5fedb9d48c8090145737cdd0f6f92ebbfbe55df664f3f871c827c337aba9c4e11c11b96a4db5d011d29ea8a819c6cd6ddbc12f58e5642743051c7edf447c3816df76dd3198f07489350640b5ede23f956a99d9cf47a47e96e2e445e00dd71d96562fbfade7b1cf47695b803a664efbd620f4564ef53cdef85605471514e376bd4af2554316c292fd0c17f629a9cbecfdce574dbcd11fcc81950c6445daac615a660a2cc785e573a2b993c13edf2cd81acbd85378f0c268a7a5bc625ddc28991524563b5df81711eae96861f9cafc2e52cf25741bc9e5f78cb5977be5a6c96c1dab8bef042cf50342940738da971aa6f015e503f05a978a9d5a3e6b9517ee98fff71280d01a525b4c1786c8e68df31dd244bc62c732c3bc94c48122719dbd44a4ce60e6198264091a745358b96a2b42c1346a693c6b6c9d278980edcd81dc1301ed87dcbb56c87baa9450e27e4a9e20aceb8dc09c9db0e91ebd08fbc380a37c17c1679ba848cd6853a6b8d3505bcf5a8b040047d52d3a18972814a4dbbfd20f2c2d93cf2afbc76c20bc829dbaf1f70c6192d24209a56d83c05d552a4d83012cc96de1982f5c47e1d83924c7e3f93a6e78d8b372d7fa54738c0c6aed25fb28e423ff8a1ed1c1157b4a835e4b13d900a98a852f47cf88338dcd03607b9dc78e10d699f42c8a082927d3d4b04ebc057ffd971eb118a7b8f2a52e11d1787c9468355d02e10d7b51ed97d673470880657ea436cecb8c79635399a8cb08552bd14d46e3dd6d98ad5f21584419c7da05b75f807f5021d0e73040000",
    ],
    [
      "ETag",
      "y4YbWzI3uhfwJ4ieNgU6wQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1642551508772"
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
      "301086ff8bf771444aba906448fd4032d645a2499b50a9ea5421171fcc9df151dba48aa2fcf79d69974deb24fa05eececf89bbd72f07f6536ac122f620aba716ccfe4305eeda071bb0ad72965e0d6a0b2c60e07845e4ed473d9e0d6fa7170b11564f36491677d777f1f93911b6f8013567d181951294b02cfa7e609ad7406d05aab6d6799705cced1b5fdc669be5ea82f21a85cf5737691acfd3841d8353a3e08ee71dff8eb6fb63c01ef161032518d005f8591a838f50b8a55fd3f2ba5130b0d89a022cebe0eea032d836dc200ea832f83c184dc66761380a87b3e9f48c388505771235a1375b1a8f39745c6df0999664a34f44982ea685cbeeb9a3ba14dd223e5caeb2c9b89bef6f801705b6dae5bd60298d752fe2fd065f45f89754fc9d20dd94547d50055a80e9a3649373210c58db4ba2cd79d39cb0f97a9dbe55450b8352f4833bd90328b73b015fd375fc3f69c95f7fb4fa1267c91bc23a72cd09c99697c9368b2faf3c77ff6a84f9de81bd3248a6b2e0fd341a8e67e174327cb1d802bdede83b91332d04ace0f4a77c938e452557168ebf001f69c03687030000",
    ],
    [
      "ETag",
      "X+n480X7GCd5gqsEECZQZA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `records` WHERE `stamp` >= ? ORDER BY `stamp` ASC, `id` ASC LIMIT 4 OFFSET 0",
        types: ["TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-04T12:13:14.567Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-10-1642551508772",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536d6f9b3010fe2bc8fbb24d493004921029eab2946c54796981346ab7293160985bc02936adba2aff7d07347d51a5f6932ddff3dcf3dcf9ee015db33c424314b0e4a6a4c5fda72b1ea016a29224f0ba9e2e4fce26ebfe597179f5af9b5a4b52aa27c968040856b104c976296d0b5e162115c395d7490a5eee48c1791b12b535dcd67a866e9a9a8907fdbe0e3c41d378c6f26b60ff95722786aa7ad0ee249c2729253b263a21cf9eded55b5ddd15fc8a8652a8af25555011eafba247290f89643c1fad3c30500a5a6c6846580a169e9951f0ed75ea0e23592701f02d0b2909435ee6b2b20529429ec72c298b3a2b1a3ea0dae68b0bf2ec993df195af2dc51b4fedcd64ecf99fb74282c0562142f17cd759fcf8525db79bcddfbb6cab4cdde55cd91634e44524b6cafaa7eddaca81f2bbc4b84b47ca91b2748f6d57f97ef1141a7b9396b265517d5366cedcf11543594ea79eed2b18cc46544896d7567d12a4b4b2f9d84de7ed1f56042289a04d70d3c73da20db015c4413f8c075d3388310d8241d0374937c0a16550230a28019eacb2d72c92f3dcea75350c8d1b50338a2cbd878181758c71140791417b26312dddea5a68df42770593f498891d17ac69295abb8e6f6f7c77b5988c7dbb2e2326652a8f1b7355112f7d4a281240efd4b5afa28c8352f53fcec2b7ddf1c477ceed6624663421e1bd770343119354504093826454d262ce23681a3a5d7a8eef2c17e31930ea7f3e3d20041afe7a7826f8f7bbbacbb23e91efcc6dcf1fcf4f6b0f07d03949cb1a75db5c900edd6963bd8d0d5fd3875a77a8191db3d7bf44fbfd1f20c2643779d1d9ca762f50f3e4d29816340f3ffe5500d7810f17f4b02d80857d01191834c9608642518984056d6689659599035bb38c81896a7021dfc47a583f34adca5165a419cde56345cdb640a18d58299e4010841158c0b240f43f368abf29ad040000",
    ],
    [
      "ETag",
      "WFOJQCW7QrZjz3l9Oau/Jg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1642551508772"
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
      "02ff9d555d4fdb3014fd2b93f7b836b2f39d48480b10a05b29d096a7095526715b431207db8131c47f9f1d206921eb5a1e9ade7b7d4e73cfb1affb046e699182105cd3c55d45f8e3d70591173a1813516552a8af921582801e20122f14f20fb1aa71802fe3137a618e22699fc607770f7b7b0a219225c931089fc09c922c1520fcf5040a9c1345a3a902c8c752c783d1343e8ec7aa90b354174697c361b43f8cc173af21e024615521673b13e7940b39ab938638998e07a3e3cdbc0c7f8aa614d36c37ca821429e1bb716839c369ca89103bf29898e1b26c49fb6767c3381afdc7fc22e58ca69f60ded35d1999bc6f1947c3b368ba199f62b9b24587d134de8c1712e72b3d4d07a7f1641a9d9e6f66cd66cb877c1babaf9e7be0865d8fc99c705224441fff92b31b92c8819e2ca1de9e91be60154f88de3c05ae17169c5525e68cf555a58f601fb9b6e938c881bee7990a98b1044bca0a85bd9ca8de8064126763f6a0060bd80ac0eb50cdd8bc7eded765ad4147a889a21c4bdc64074c1231673c6d2a38792b59dfc9efba5d236179b37ea48e7846da1f0e2c23304c1baa8fdb5425afc81689ed07066c32139ab00fcd3e5c69db707ce823df0a6cc7f5fc38e8007f416688ac10d9868640f80dc27a1f568d705a5e130d296f7df8c1968590caddb74276f35ab1b771c1b10ce4ea668da06d718e33f10fe1eb4bbea9e91fa539eb3e04d0f65e7c08ba8c70d68d083a8d703b8c3824056d92498233dafa928a3a77b63a0a966f200b19c8f60dcfde46f8da92e9a993e47fd4e5be73214028b0bb0c701b03ba947b1dca4f48b668b5fecc08154db6bcd5a9bb8d70df5187df37947ac7efd6b66104a067ac6c7423c65b538da0e739ddaabdf7aaaf5eaf86fd4735c7e79ca97b46107dc520685b2f37ce01d392d4c519ea5e7a20c1eabffa844a10d6fbf3fc17591cf2ac09080000",
    ],
    [
      "ETag",
      "ze3uR9aUEHiQ2NAt4MECqw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "edd34b7282300000d0bb642d4c40194877327c04152d88d06e321003463e918f2238bd7b9d5ea3be3bbc274808a15d877b5ed01a7c8031919148c4142ee33b9c0ebb02e26cb40584a06f34dc9a67b9e3f461480c2cb4db333ebaec284869068ba692245971b4e5443e6f43ad48e676adb3f360bacc60e1a92a899dd6266df061b2db681fba7ba417521e70d6b5d5c9ac96d4f7f0907a6194c8971809eb5a2b8655690944cbd7fd065a3773f8bed8fec8dd5e7d94ae14f8cdaee22bcf89c8dd8fa9b6b07806bf1ef542991a95e3203ee86974f4909defea527652210bd5d2331cacd9d96621bebdfd3b6006e8e3ca5ada61f6da3e57109a81bffab81faff4f55fa7494b5bf0f30bbb93c97919040000",
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
      "Wed, 19 Jan 2022 00:18:40 GMT",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-11-1642551508772",
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
      "0002ff85535d4fa34014fd2b64f6d596524aa94d9ab5a9a8242d55a09acd664386e182a394a9cca06b4cfffb5e06eb6a4cf48999b9e7dc73ee072fe49e5719999294170f0dd4cf3fee444a8e08285ae0ebdf71f9242f4b6659be7d67aea3e5c5d5f9ed7c3643046f59926e7725f4a4686a0672ba89fa452d9a1dad85e861a29e65f5acf168e838963398b8ee107912ca7cc9ab7b64df2ab59353d33c68f70b218a12e88ecb3e13dbb777f37168ee6a71074c49f3a3a4892ad2fc5af4672918555c54b34d84061a0975025bca4bb4f09f99a5271f53f739ddf60b043f72069431d154aab5852998a8725e34b5ce4aa62f44db7c772091b7f416b1c144d96caba4a25b383232aa68a29e77609c85eb95e10767eb70358ffd7590448b0b6f35ef2fd6cbcd2a888c9b0b2ff40c45d31234d7981927fa16e005f533908a575a3d6e9f5be5d706f99fc7d212505a42174cdcc1985a93c1719aa72ecb27b693e60348d349ea3ad44e07ec7804a32c058a3c2daa59b412558aed746060274337a7c9c81db164c26c2b391e52d7b1d26ce46636d91f91a79a2b38e5722724ef3a446e423ff69238dc048b79ece91272da94eab433d616f0dea3c20211f4454dfb36ca052ab5edf683d80be78bd8bff6ba092fa1a0ec397ac019e7b49480685a63f314d42b9161c348305f79a708d613bb3c042599fe7e216dcf5b17ef5afe468f7180ad5da5bf248a433f38d7760e886b5a361af2d81d480d4cd4197adeff411cae6897835c6dbcf017e99e42c8a1868a7d3f4b04ebc0b77fda61ed118b8b8f3252e11d3787c95684d5d06d10d7c51ed8c381edd844836bf5293672c7879eb539da8cb0854abd56d4ad3d16da8935f20d84411c7ea07bb5ff072f862c4076040000",
    ],
    [
      "ETag",
      "x6lwsPlc11I3j/OSLHQGhA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1642551508772"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d93616f9b301086ff8bf79548d0252442ea07b2a55b269ab409ad2a4d1572ed83b9331cb54da628ca7fef9976d9b44ea25fe0eefc9cb87bfd72603f552359c21e54f5d481d97fa8c05dfb6003b6d3ced2abc5c6020b18385e119986e1f8f6f6a92ebbacbe8bab6ff1c5dd4c5e9f9f1361c50fa8394b0eac54a0a565c9f7036b780dd42650777553f459c0dcbef5c56dbe59aebe505ea3f4f9ea26cbd279b660c7e0d428b9e345cfbfa3edfe18b0477cd84009061a017e96d6e02308b7f46b5a5eb71a46163b23c0b21eee0f2a835dcb0de2882aa3281a45f1f86c328926e16c3a3d2350a3e04e6143eccd96e6630e1dd71bfc455bb2e82311a68f69e3b27feea8ae64bf890f97ab3c1ef703fe0d7021b06b5c310896ca58f7a2de6ff055857f49cddf09d255293d0455d0483043946a0b2ea5016b0749b4056fdb13365fafb3b7aa34d2a092c3e04e0d00daed4ec045b64eff272d19ec8f569fd37cf186b08e6c7342f2e5e5629ba797579ebb7f35c27cefc05e19245759f0868ac2f16c328dc3178f7d42ef3bfa4ee24c0701139c7e95afcab1a4e4dac2f119b5a3790288030000",
    ],
    [
      "ETag",
      "A004VVqmfuLmX6gJ6FX8dQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `records` WHERE `stamp` >= ? ORDER BY `stamp` ASC, `id` ASC LIMIT 4 OFFSET 0",
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
      jobId: "grouparoo-job-12-1642551508772",
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
      "69",
      "6f",
      "9b4010fd2b68fba5878f0583712c59a9ebe016d5470aebb8495bd90bacc926c03aece2288afcdf3b409c439112f181d1ce7b336fae7b74cdb308f551c0e39b82e5771fae44801a88291ac36b5e2c53b2fbb2b4dddf1753ef6aecba3fcf93dbc10010bc64499a6e13d694a2c84326fb0bbf15e7a2d8d25c8826046aea4653ef9a8665e916eed9b6013cc992cd8467d7c0be546a2bfbedf621772b16224e18dd72d90a45faf8dede19ed6d2eae58a864fb65ca366491edb7931e2722a48a8b6cb0f041402159be6229e50948786246c1d797a15b9ca6ad18c03b1e321a86a2c854290b428422dbf0b8c8aba8a87f8f2a99cf0ce43b136744b4cf0dcd1f8e9dd568e8938f6ba920c15aa352f389e7cebe7f2acdf56a75799baeb5b1379f6aeb9c85228fe45a5bfe703c473b50fe161877d8403bd6e6de89e369dfce1f5d437fd4d0d63caa2c6de24e5da299da7c3cf61da261101b31a97856492534485829f3a19beeeb199604aaa864b57365e32ed57bf828d80476b8e975ac60835910f402dba29d0087472633a38051e0a9327ac5a299c8b085b1c9a87514e866644636eb595187c2671866c46caac378c26e17a37d03dde65cb1132eb742f2baa568e9b9c459116f311b0d895395b1a145a24e6a716511cf752a2812406fd4b52fbd5c40a6723eee8c38de7044dc33a75e89098b6978e7dfc0526c682219a0694e53a6583e1511340d9dce7d97b8f3d970028c6acea7078444fd3ff74f0472b7adbaacaa3f22eed4f1c9707a5a693880ce685254a85d6d20031bb8898d26b6896ef4f54e5f375b18e30bb4dfff03226c761d17fd5a38de39aa9f3cb66139cbc2f7a70ae0caf1ee811eae05b0702f9006164d71d8a1509649c29cd5bbc4d352cc816de866a73a6f4573f5ca67599d43d3ca18654496b24c3d54545f0b145a272be423089cb002333816f0fe074af0be7aad040000",
    ],
    [
      "ETag",
      "ruWmTv+W7IXZMRjFIIKYlw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1642551508772"
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
      "95",
      "6b",
      "6f",
      "da",
      "30",
      "14",
      "86ffcae47d1c44762ee422551ab494a251e8b84cd3a60a99e4006e4dcc6c870e55fdef73b229c09a31e817f07b7c5e719e736cf38c1e599aa008cdd8e2470672fb7e01fa73be1882cab856e66b2d5205a88640d385c98c7b37db4938f9d6ffda9481ef7ed98c18ee342f2e4c868a97b0a2287a4673063c5128fafe8c52ba0263638949d0db75beeef6c7ed4e7b68022b91e481fea4d76bb67a6df4522b0d348e4596eae9d9c639934a4f0b511a47e361b7df39eee3f44d3643ccf8799605a409c8f33c6c3da5492241a9337d424de97abd33b506835ebbd9ff4ff3d3440a96bcc1b961e73ab8deec1cd7bd41737c3c3fa17a6f4457cd71fb78bed274b557d3b87bdb1e8d9bb777c75dd3e9f269754aabef5f6ae841cc86300709690cf9f15f4bf100b1eee6374b995fe75057229331e4c333c9c5c6428a6c4da5107513a913bb4e1aaeed79c4c381efdb26918b986a2652933b1999da90169af2a17832170bb92641164b73c7e6c5e7c684fd82215fd9e5ea06f88296ea1307a64ab57ccc65e323fc2ccab462b12af7aecdd1e650cac0b36c37b0028b784119d4328313848b7d0b7bbbdab08debd8aee35db9c4f202827ddf0bdd765891f88ed8117122e27ec0b868fa3e755041dd01a9d9ae82cb6cc6b42ee5222eb47f0a38b11dcb0cc6220e361d28c373ca15fc431dc0072eb1dc0af8e0109e349cb01a3e380a1f56c0f732c901d252b7cc5101ce4bcd67bf03c129fcb643cccc43cbb4c075aa118ff5a261dae7b8afa9c2437cdbc34e357e78149fe0d2b12bee4a48bddc96b2abb4d8352361b90c4f4177f3334fac866b99e99c32ebc32d3bc496e7bc22da2bb940779c865f894ef0dfe8f77f5e81d65683ba93c23c290a92a20d6636c5e37229722af346467965351453f3b77cc3348a",
      "8ae25e7e01c3aeb626f4070000",
    ],
    [
      "ETag",
      "cLHyU9UZNXAr874VvSi0GA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "000000000002ffedd3516e82300000d0bbf0ed0c62caecfe6453d4028aa22bfe90b654a9a014ca4ce9b2bbcfec1af3dde17d5b8431ae54d6d525bf596f564f1c3864436a4ff1dd3649081b8cc86829a1925e40de538116ec10fbd28961515c9707d7072af5d3669dfb82260695f6eaac82f3d1b3ab60ca08fbda2d92904fca2d6a3e8cd6781f1da74e8ca3d6735673d5b62f3188aa60851bb64155bff31855a981a7cba5e6b50632123396545744cdd5e9432147667cd4854009a88bcebf393ebd6d1be45267d67dae37af49ef9ef2f96872a2124e70382733628759eed23887fa0e6c8e8c06e5fe8ef7c3a7a77fc71a585c4bd1729589c7f631807060fdd5cfba5ef2c77f8f9396b7d6cf2f26aaeb5319040000",
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
      "Wed, 19 Jan 2022 00:18:42 GMT",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-13-1642551508772",
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
      "f795b6e93bad548dae84d1a94d214941d33445b6e36486340eb6438550ff3bd70e652024f894d8f79c7bce7d244fe88e97299a22c2f3fb9ac9c76fb782a013c434cee136cc7fe8dbabcb68b3d7e3c95eee7f55eebc9fcf6680e086a5f0ae2a584b895a52a6a6dba89d4b5157580ad18244ad6ebfd51d0d7ac36177e87ae3710f788a15d98a9777c0fea775a5a69dce51bb9d0b91170c575cb5a9d8bdde771e7a9d4a8a5b46b5eabc97ec808aea7c2efabd10146b2ecad9360203b56232613bcc0bb0f09f9992d3f7a9db1cefda39801f386598525197dad88214549419cf6b69b3a2e913b236dfbca0c85ff98bd8a1a2a8776552e21d3b7152ac71a21f2be69c879bb5b30cce37e17a1e2f3741122d2efcf5bcbdd8acb6eb20726e2efcd077342605b35c67e69cda530007d04f99d2bcb4eab1b936ca2f0d5a7e1c8b2180b4624d3019bb23dcf5dc09c9c898665e7f48329711e291f110f7894b2703364809c3c0b3a296854b517a937432f2529c906c489281ebf59209a5a384608c07291dbbd0257438417bc9353be3aa128a371d4237e132f69338dc068b79ecdb12325c17faac31660a78eb51438100faa4a6838972014aa6ddcb20f6c3f9225e5efbcd84572cc7f431ba871967b8500cd05842f334936b9142c350305ffb6700b613bb3c06159afe7942a6e7c6c59b96bfd26318a0b1abed134571b80c7e5a3b47c4352e6a0b79685e906454c8143c1ffe020e56b4c981aeb67ef81b355721cb986425fd7a9600b6812fbfb4e3da0316161f649486336c0e5546844ad66c10b7c51ed9bddea0db47162cf587d870d03bf6cce43019d98e95faa5a266eda1d046",
      "ac56af20f333d90681edd5e119bf890ca476040000",
    ],
    [
      "ETag",
      "RgBtjQPSOwt79wrwJp0A3g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1642551508772"
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
      "4f",
      "db",
      "30",
      "10",
      "86",
      "ff",
      "8b",
      "f99a4a4ddbb428121fd2ad1b95420b6d9090261499f892191c5fb09da2aaea7fe71ca09bc6a4f025b93b3fa7dcbd7e73604f520b16b307593db760f66715b81b1f6cc0b6ca597a35a82db08081e31591b73777e368249e79a6dbe1d3cb7656a5a32ab9b820c216bfa1e62c3eb052821296c5bf0e4cf31aa8ad40d5d63aefb280b97de38bdb6cb35cfda4bc46e1f3d56d9a26f374c18ec1a95170c7f38eff42dbfd31608ff8b081120ce802fc2c8dc14728dcd2af6979dd2818586c4d019675707750196c1b6e1007541984e341389d8ca2288c86e7b3d9884085057712b557604bf331878eab0dbed0962c1c1361ba98362ebbe78eea52749bf870b9caa6936ec0bf015e14d86a97f782a534d6bda9f701beabf02fa9f81741ba2aa9faa00ab400d347c926e74218b0b697449bf3a63961f3f53afdac8a1606a5e80777b207506e77027ea4ebe47fd292c1fe68f53dc9169f08ebc83627245b5e2db6597275edb9fb7723ccf70eecb5417295056fa87038398f66d3e19bc7bea1f71d7d2776a68580159c7e954be9585c7265e1f80a1d835c2b88030000",
    ],
    [
      "ETag",
      "UQX352dqaTnu0kwS7gL2gA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `records` WHERE  `id` > ? AND  `id` < ? ORDER BY `stamp` ASC, `id` ASC LIMIT 100 OFFSET 0",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 4 } },
          { parameterType: { type: "INT64" }, parameterValue: { value: 7 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-14-1642551508772",
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
      "000002ffa5535d4fdb3014fd2b96f7b24d6df3d1b4692b2156da74642a2d2429086d53e3b84e302471891d5085f8efbb49281f4282873dd9f23de79e73afef7dc0373cdfe0118e78725bb262f7e55a44b885992209bc662be7f83c71ed5f83050bdc6bfb6877f3533b3b380004af589264db94b5a5280bcae468e5779242945b5208d186446dc36a1b7dcbecf58c9e3eb06d137892a5f19ce737c0be526a2b479ab6d7ee24422429235b2e3b5464cfefda9da96d0b71cda892da5b490d54a4f6b1e8612a28515ce4072b1f0c9492156b96119e828517e626faf136758793ac9300f88e5346281565ae2a5b90828a3ce64959d459f1e801d7365f5db0efcc9d4980beb7903f9e39ebc9d80fbe865281408888447ee0b98b9fdfaa6bb85e5fdd67219a79cb1314168c8a6223437471ec780e4221df84e84fa9eb5d860ed178317dfd44e169e94d1d0f1d5da27df6b13f693518b8a1b97be206c8d075b49ccd7c27403ad8df30a9785e9b0f4894b2caf8537fddf7bf5a1188229235c1b5adf78931d087511cd9341e747b51acb3281a44768f74239d0e2d666d224680a7aaec358be42237fb766c47564c0c8bb141cfa68661e9b165daf650ef0e07c32131a9d5a5317e6ce1fb822b36e5722b246f9a8c2f3c3770d681b75a4cc681539711933255d3c65c55c46b9f0a8a04d007753d56512e40a9fa31771138de7812b8e74e3324739610baf36f614c62924a066852908c29569c880d340d9f2e7d3770978bf11c18f5cf9fee11128f7e3fbc1082ddb6eeb2aacf4aab6fd5fa7bc03949cb1a71d75c30841f5bff95c1860c7f01012bd190f1d9caf12e71f3e4b198152ca79f7f3e80ebc0a79bbd5f33c0c2a2810c4ca4e2306a545622b460cdc8f1ac32b3679b5d53b7700d2ed4bb58d732f7bdad72541959c672f55451b36655abea50299f4110844959c09641f41fe434ab5ae6040000",
    ],
    [
      "ETag",
      "mUEHVgI7J8NeTIj7BykG/Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-14-1642551508772"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff9d545d6fda3014fd2b93f73892c6f9802452a5c19a764c015aa04f53854c62c0348953dba130c47f9f9dd1846d8c415f92fb718e73eff1bdd9826792c5c00753327f2930db7c9c63f1a08c21e64522b87ce534e318340016682e91573f7a74bd18bd3c4faf0a06d78609d71df6707d2d113c5ae014017f0b6604273107fef72dc8508a258dc4122036b9b2bbfd7170170c6520a5b10af41fc3b0dd0903b06b54041445b4c8c4e462e28c302e26a5531147e361b77f779a97a077d164c724b98c32c7598cd9651c924f501c33ccf9853cca2728cf6b526730088376ff3fe26731a3247e0773452e65246255336ec3417b7c1a1f2371704537ed71701acf054a0f6a1a777bc168dceedd9f664d268bd7f41ca99f760db0a4d3219e6186b308abf1cf195de24874d56671f9f5046b9c162cc2eaf224b84ccc192d72c428d5644483b6069bb6e938d031dc56cb94c0844648109a49ece348d60604152819d257b95840015869ca1d9b95cf950c3b650fab12f0668584a1caf946171917f2d0b740b2dc47eccf785dd6aa4734add2b772be135cb98ea5c326d41d57f7bc2a384309af218215f81f29d754f4ba44c33434c3d48cba6a75b4e11976cbb39d66cbf502ef08fa03347d68f9d0d64b8cf1c930ca7b3814a27944881b9c91ca19452821b52e312f7de71c11a0e5ead0823ab45dbd659fd3f86f29b365e99efb775fcd3f54f020f4ec6302342b01f69d3fed67a3b31198df332a078d633563d0b0ad5f23f785aaaee4e6f8aa96068890fc597f2502f865a5bb9feba2c9ed0a060000",
    ],
    [
      "ETag",
      "/zMoxhSqkb/ur1x021xBrQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "edd3417282300000c0bfe42c8e5603a637455488d29492885e9890661452222560c14eff5ea7dfa8fb87fd065c08694cda5c94d4e019f4fc090dc5301bcd93ebe81687e2f87e5ced4858f14aae3f8b7d9a08b472a6274efc04facbe39ca6876de9e9597e6096fc2859ab4decdab3b03125896ef8bc0822ee5f7ac3ad608232ea505bedf6ee61b3f7d90a66a7b557a8b2fd2258280f9e0935851db116f5f4d55741e661145df9123bd71abb63a5c76c8b5eea88cd3f7382142ead6d6fb5c5147941a297b07358fe264813ae45bcc1aee89a526f603183851b0438ae8a2e82596c6baa723a7c78f877c000c8aeca6b69d2fcbe7d02111a80bffa69d357f2fe7f21792d6bf0f30b2e57e39d19040000",
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
      "Wed, 19 Jan 2022 00:18:43 GMT",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-15-1642551508772",
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
      "0000000002ff85535d6f9b3014fd2bc87b6d1242424822456b94d2152d212b9076d33421632ed42dc12936a9ba2aff7d17d374ad2ab54fd8bee7dc73ee074fe48e9729999284e7f735548f5f6e45424e08289ae36be194ab9bf964f33dbc5c5f9a7fbdf267b8b7e6b3192278c39274bb2ba023455d3190d34dd8cd2b51ef682544071375fa76a73f1a5ab6ddb7cdb1e358c89350644b5ede21fb46a99d9cf67a47ed6e2e445e00dd71d96562fbf2dedb5bbd5d256e8129d97b2bd94315d9fb58f46b2118555c94b34d88066a09550c5bca0bb4f09f9926a76f537739dd767304ef3903ca98a84bd5d8c2144c9419cfeb4a6725d327a26dbe3a90d05dba8bc860a2a8b7655cd22d9c18295534568f3b30ce83f5caf0fcf375b09a47deda8fc3c585bb9a7717ebe566e587c6f5851bb886a249019a6bcc8c537df3f182fa2948c54bad1e35cf8df27383bcf7636908282da10dc68e39a2fdb13949b2c461d9786027990949324e1c9b0e12934d86304c13a0c8d3a29a454b51a6839193f44d2bb62c73120f87a61d4f6000b1c392c9b8cf521898941c4ec843c5159c71b91392b71d22d78117b971146cfcc53c72750919ad0b75d61a6b0a78ed51618108faa0a64313e502959a767b7ee406f345e45db9ed84979053f618dee38c335a484034adb0790aaa9548b161c49fafdc3304eb89fd38062599fe7e224dcf1b17af5afe428f70808d5da5bf248c02cfffa6ed1c1157b4a83564df1e48054c54297a3efc411cae689b835c6edce017699f02c8a082927d3e4b04ebc0a77fda71ed118b8b8f3252e11d3787c9468455d06e10d7c51ed9d6d0746ca2c1957a17eb8fec63cf9a1c4d46d842a99e2b6ad71e0b6dc56af902c2200edfd7bd3afc03bbaadb9676040000",
    ],
    [
      "ETag",
      "l7nMhA9UKSQOQ0zInXSv2A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-15-1642551508772"
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
      "0000000002ff8d93516fda3010c7bf8bf71a24d212a822f50156b6b2a5d086f465531519fb929939b66b3b2084f8ee3ba71d9bd649e94b7277fe9d72f7f73f47f253284e52b211f5730bf6f0a106ff10821c5c2bbdc397d1ca018908785a23f9d5ce2e6f6ec1ecbfc16a977dd96ef6f9f8b9bebe46c2b11fd050921e4925407247d2ef47a26803d8c6b46c1b55765944fcc184e2bac817cbcf98379a877cf99865d3593627a7e8dcc8a9a765c7bfa3ede91491addee4508105c520cc62acde02f38bb0a6a38d913070bab50c1ce9e0eea0b6ba35d46a3dc0ca204e06f1787491247132bc9a4c2e10949a512fb442f6718df311af3d95b9dee39624be44c276316e5c75cf1dd605ef3609e162598c47dd807f039431dd2a5ff68295b0cebfa8f71b7c55e15f52d27782785542f64135280eb68f12a6a49c5b70ae97d4aea4c69cb1d96a95bd554571ab05ef0777a207907e77063e65abe9ffa44583fdd1ea665accdf10cea36dce48b1b89baf8be9dd7de09e5e8d303b7870f756a3ab1c0443c5c3d15532190f5f3cf65107dfe177526f5b8808a3f8abdc0a4fd28a4a07a75fe1f280ac88030000",
    ],
    [
      "ETag",
      "KrB3DHepwZeOvLJjbwR6qg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `records` ORDER BY `stamp` ASC, `id` ASC LIMIT 4 OFFSET 0",
        types: [],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-16-1642551508772",
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
      "ff8553db6e9b4010fd15445f7a710cb6b1b12d45adebe00ad5b11bc06dd317b32c03d90458b2bb244aa3fc7b67b19d268a94483c8c76e65ce6c2bd79c5aad49c9a09cbaf1b1077ef2e7962764c5024c7d73fb77fa15af5cf7a97a3c195f57bbcf2be7f3a3f3b3ec60aa6519294750147923782829c6ec26e2e785313c1f911121df546f839fde1b037b4c7aedb479c84225bb2ea0ad1174ad5726a5907ed6ece795e00a999ec525e3ebe5b377dab16fc12a892d673490b55a4f5bae8e78253a218af8e37211a6824882d94841568e13f324dbe3ca7ee325276732cbe611408a5bca994b68514945719cb1bd1b29ad37bb3b5f92430436fe9cd23e363c708670b6f3b9f85d1fb582a14880d228d300afcd5b70f3a8cb7db8bdb323616c1fad48805502e52191bebe0c40b8cafe7c601350be71d2366691b194bffd48f0cc7582f16a11719369a4a412a56b596229214a0edeca7e6bfdc9506104524ec925bd71e91ded89e2459e2d26c3c1826990d49324edc211924369d38e0a40910c429cddea248c5abde60e4d81317e73cc6c8b17b7d4807640808ee211b1d269ac021e643c7bc154cc1099335976c373af357e047de360a36abf92cf2da3632d214ea64674e37f1d4a7c226b1e895be1e74967154d27bf0579117cce691ffd3dbad7e0939a177e1352e3f238504ac268294a0409cf2148766fe58877ee4af57b3a5e6c2838aee6afd7eb6f182f3fd53001908a8e8db43c6e236f1e67f713852acc5334519dcbb62b8522ab50815b05b2d2bb59903baefb89381d9160bf52237e98f30f7789c9a114aa8d4bea3dd919a0f7bb1463e16611237b2c21bc5ec3fe9076dd924040000",
    ],
    [
      "ETag",
      "ZwzenN2Q1j63k/X8NEK+YQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-16-1642551508772"
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
      "55",
      "61",
      "4f",
      "db",
      "30",
      "10",
      "fd",
      "2b",
      "53",
      "f671ad65274e9a54425a6181756b0b2b659a34a1ca246e7149e2cc760a08f1df770990a622eb2852d3faceef29f79eefdc07eb4664b1d5b7aec4f24fc1d5fdc725373fcac594eb22311a7e7299696e752c6ed81290a9e87d9f84e39fbf023d0bd52abbe0ec26bf3d3800848eae79caacfe83b5103c89b5d5fffd60652ce540133100cc7d5eae87935978124e2191cab84c4c2e46a3c1e128b41e3b358145912c3233df9bb8104a9b7915d4c4f3d9743839d9cd4bd8bb68a05824fb51963c8bb9da8f23f2398b63c5b5de9327f59ce5f98674787a3a0a0793ff989fc54a8af81dccb5d8979198f586713c3a1dcc76e363661a47f465300b77e3b56169a3a6d9701c9ecf06e3b3ddacf9fcfa367d8bd5978f1d6b25afa67cc115cf225eb67faee48a4766584e9686b727bcab65a1225e1e1e80ab8da59245ce94945dc87489071f6abb2e71b1dfebd9004c64c48c9019602fcea136cb48c392a9bc85c1b2280054b584195b54df6b48934ac3f62a5482d7c137aed652e83ae6aba704feccefaa4a5124d37a77cc920d95b8c8a63de4f808ca7b491a556c100b9668debe65bb01221b9a8d6ddcc57617370a46ae8f5d3720010d8316e00762f789d327f413c695ed4ddd768bee231689a4213d2c1be725883844a455f4318c74d2acdc41847a88126437cadda1757b2ba0c8f15eebb1b7857b14a453b74db95d2b472ec66dea9d16f5278a1b9e3442594432baa913cbe573c67e930984201f4e9060441cbaf7e97b9e8f9cd7ca9c6d0f7a0e09c003afd7e682d370c1ebb5b9405b5c18a4ccb04d4748c3f542aab8ceb0e825e5bcc5061238288029c0f078ed52ff1d503010bf1646b74df089ef",
      "5426f86d2ed02d17fcba1d2e9f6f87c37b9073a6245c359a97b70c7eba718e64290dfabf5f96d4b12206ffd55f85798a1fff026e2e7f7208080000",
    ],
    [
      "ETag",
      "mi7KNEMVX9sTErjnUeakpw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "300000d0bb642d4e24b54a770631688ba14029b061f884ca481412e4d7e9ddebf41af5dde17d8324cb9894717b3db30b780163a26af36c9ec24dd0c1c9b39240e3ef86388c019cb68d39781f82c559b2f17273dabb0d32c6edb83e9edce3a556abc38e5acf91bea4eeaa80ee1263b5272d77160b811ae2d51e7542540c3a0a70eeebd198f2ccb6e8d9edf24a0f7cad4f777ce2d61b9de8956275828dada84eb55a0d3d76a1e9c8fe5492169ab59d767e69200baeb954a482ae49b4ef14bfbce5a96d97da314ffdcf4b657cec0aa70f43f155988454faf646c227b520afd11973397f78f877c00cb0a12e05937179df8e969a36037ff5e376acd9fd3f66896002fcfc024cd6bd8719040000",
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
      "Wed, 19 Jan 2022 00:18:45 GMT",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-17-1642551508772",
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
      "6b4fdb3014fd2b91f7953e92366d53a91a551ba0124db73485b1698a1ce72633a471b11d5087fadf77e3500642824fb17dcfb9e7dc479ec81d2f53322609cfef2b90fb2fb72221270434cdf1757f23bdaeadcfa31f7fe753e7ee31f879717e964f2688e0354bd1edae8096129564a0c69b753b97a2da5129440b13b5ec61cb1ef41dd7b5ddee68387490a7a0c82e797987ec3f5aefd4b8d3396ab77321f202e88eab3613db97f7ce83d3d949710b4cabce5bc90eaaa8cec7a25f0bc1a8e6a29c6cd668a0522063d8525ea085ffcc34397d9bbacde9b69d23f88133a08c89aad4b52d4cc14499f1bc92262b193f1163f3d581acfd4b7f16594c14d5b68c4bba85132ba59ac67abf03eb2c5c2dad4570b60a97d368b10ae2f5ecc25f4edbb3d5e56619acadeb0b3ff42d4d93020cd79a58a7e616e005f553509a97463daa9f6be5e7062dde8fa526a0b48226180fbb036a8fba5e922543968d7a6e9275214946c9d0a5bda4cbbc3ef4d30428f28ca861d15294ac4733461d2f86a1e7c5fd5ee2c4344d07b10b030f5c6f441d37238713f228b98639573ba178d321721d2e223f8ec24d309b46be2921a355a1e78db1ba80d71e351688a00f6a3ad4512e50a96ef72288fc703a8b16577e33e14bc829dbafef71c6192d14209a4a6c9e06b91429368c04d3a53f47b099d8b7635091f1af2752f7bc76f1aae52ff4080758dbd5e64bd651b808ce8d9d23e28a1695813c340722810999a2e7c36fc4e18a3639c8f78d1fde90e629840c2494ecf35922d8043efdd38e6b8f585c7c94511aefb8394cd5224c42b341dc147b643b6edfb689014bfd2ee6dadd63cfea1c7546d842a99f2b6ad61e0b6dc42af502c2200e3f30bd3afc0357d3efb676040000",
    ],
    [
      "ETag",
      "yYr901tGTXzDA2kwNZHGFg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-17-1642551508772"
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
      "0002ff8d93516fda3010c7bf8bf7b8a0918e008ad487b0b28d29850ec25ea62a72ed4b66eae432dba1a288efbe73dab1699d94be2477e7df29777fff7364f7aa962c6677aafcd98239bc29c17df5c11a6cab9da55783b505163070bc2472f765bcb28f723adbf2fb36b9faf6367a579887cb4b22acf8011567f191150ab4b42cfe7e6435af80da04eab6aaf32e0b983b34beb8c9d68be527ca2b943e5f6ed33499a573760ace8d923b9e77fc2bda6e4f01dbe1dd1a0a30500bf0b334067720dcc2af6979d56818586c8d00cb3ab83b280db60d378803aa0cc2c9201c8f2ea2288c86d3c9e482408d823b8535b1db0dcdc71c3aaed7f8405bb2f03d11a68b69e3a27beea9ae64b7890f17cb6c3cea06fc1be042605bbbbc172c94b1ee49bddfe0b30aff929abf12a4ab52ba0f2aa19660fa28d5e45c4a03d6f6926873de34676cb65aa52f55a9a54125fbc1bdea01b4db9f818fe92af99fb464b03f5a5d25d9fc05611dd9e68c648bebf9264bae6f3c77fb6c84d9c181bd3148aeb2e00d150e47d368321e3e79ec037adfd17762675a0898e0f4ab7c568ec505d7164ebf00760e6e0288030000",
    ],
    [
      "ETag",
      "jJ6Oszd8BUakuADV+5/frw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `records` ORDER BY `stamp` ASC, `id` ASC LIMIT 4 OFFSET 4",
        types: [],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-18-1642551508772",
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
      "02ff8553db6eda4010fd15cb7d692bc0173018a4a8a5c4448e08b4b66993bec07a3d7636b1bd66779d288af2ef1d1b4813454ade463be7cc3973d947fd9695893ed16396ed6a100f9f6e78ac77745024c3d74b1846c5ee6cbcdb05e797e737e5df4bdb1ade9f9c2082352c498a2a87aee4b5a02027ebb097095e574470dec5425dcbed5ac381ed389663baa3918d3c0979ba60e52db2af95aae4c4308edabd8cf32c075231d9a3bc787e37ee6ca312fc06a892c66b490355a4f1bee8b79c53a2182f4fd6211aa825880d1484e568e13f3389bfbf2edd63a4e86508be631408a5bc2e55630b4b505ea62cab455b559f3ceaadcd17811e7a0b6f16695f3b5a389d7b9bd9348c3e6fa54281ad46a4164681bf3cfbd284dbcde6fabed86af36075a16d05502e12b9d556c1a917683faeb4236b1ace3ada96256da42dfc0b3fd206da6a3e0f3d0cd0540252b1b2b514913887c6ce616afedb5d3504a288847d72333287c472cd719cc6239aba7d274e4d8863371e39a41f9b743c80411203419e6aaab72c52f2d2751288a9edda8e6bbb94a4a3b169111cd8c082914d0080ba66dc1f3afa5347bf174cc1299315976c3f3afd4fe047de260ad6cbd934f2da365252e7ea746fae69e2a54f854d22e89dbe9e9a2ce3a8d4ecc15f465e309d45fe6f6fbffa0564843e843b5c7e4a720988268214a0405cf00487a6ff5c857ee4af96d345530b0f2a7aa89af75f6b2fb83a3c05908280927e3c6404b7890fffc5f148118b678a32b877c570a554362254c07eb5ac68cc1cd9f61023bd050bf526d7374dcc3d1f6753110a28d5a1a3fd91ea4f07b15a3e8330891b59e28d62f61fb6c77ca724040000",
    ],
    [
      "ETag",
      "Xe6TmqG9qqRJXJjnZX216w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-18-1642551508772"
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
      "0002ff9d555d6fda3014fd2b93f73888e2906fa9d2a04d291b8516d2a7a9426e6282db1067b64387aafef7dd645d42bb94415f129feb73c23df7da9727f4c0b218f9e88e253f0b2ab69f13aaaecbc58cca2255125e39cf24451d44154980896ff287617f136e97eb78e0d89e6e06747a7d72020c19ade89a20ff092d194d6389fc1f4f28236b0a321603416df3723d9a84c130984160cde33230b9198ffb8371809e3bb58044112f32b5385ab86442aa45056ae13c9c8d26c3fdba947c48068e597a9c24a1594cc5711a962f481c0b2ae5913a2e1724cf1bd1603a1d07fdc97f8a9fc582b3f803ca0d3b5691aa4da3381f4ffbe17e7e4cd44e8bcefa61b09f2f1559efe4148e2e8379d8bfbcdaaf5a2c568feb434a7dfbdc41f7fc6e469754d02ca2e5f1cf05bfa7911a95374bc2afa7b42b7921225a360fc8d54622789113c17917225dec76b16d1a96852ddd751c0388298f88623c03eecd1c72438a2b92cef8235c2c640241544bb863cbeab981b05579285746bd1a33416af08daf32a9e0a37f03e9fd4bc4fc4a7f55b96a115fd7dbe770be535a43aba7611b6b96ab795e1d5c92543614250aface966b94f22645ddd0bbbad1d59baccb4feb30531ccfb46cc7f502af85fd091b3eeef9d8d42a8efe45d7ab3eec16c26e29c419cd580de611495953975856d83aa408b8e76ab887356cba9a631e62fcd596e1f434cffdd797fda60a1ec69ed95600bb2e409b73a7c5f9054d93c6ebf7943259a3d54309ed438cbb96668067706fb9eddede07a6ee683b8daecd38af5c63dd71ac76d7ce5ed76e8beb21158a35199c16774ca91a2651859d833a0e0717ee26745d870abcd3e43d2d774dac992de6ddd7e6b1ddf3dacdbb6fcddfbe8c83c15651792538cc1649cbb18275b3f767ca9cf2d2160c4bbfcca5832202ffcf174c21bfcaf4f937de24dafcfd070000",
    ],
    [
      "ETag",
      "1UpkGAvTyfmdB76904EeOQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "0000000002ffedd3417282300000c0bfe46c1d41a4a437c0a814044d89221706302aa804091063a77fafd36fd4fdc37e8334cf29e749cbceb4021f40a62a1ce6c36c6446fde811aecc438d4a76bbeff68aa96c8338241b99b34bb8f49d715cf89cb7f3af0897477274ed07d2379150f7de4d366f8ec9170b83b352b8171b7f9afad4ab6480a4bb11a45d42da916d61b90e4c6714230c359665c6313ead794ba7f2da938970fc6624d4bbd47c0c3d66428ddab2d32cd59f63fdc1d27ced862a3fddbade3ba39dcd11298359f35e55dd242ca6ad50e688eb355b1fe2d4c019bd1a9ea56834a89282ec5662f8f2f2ef8001a0f7ba68284f8ae7f6f104c201f8ab9fb4b2a6cfff164d1bda809f5f57e230ed19040000",
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
      "Wed, 19 Jan 2022 00:18:46 GMT",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-19-1642551508772",
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
      "0000000002ff85536b6fda3014fd2b91f7b510088f00125a19841609421742bb699a22c7b9c9dc8698da4e2b56f1df77e394ae55a5f6536cdf73ee39f7912772c78b848c48ccb3fb12e4e1cbad88c919014d337ceddab13d2b7ecc0f17e1e430f0d7dd79ffefb7c7f11811bc6229badbe7d050a2940cd468bb696652947b2a856860a2467bd868f7bb4eafd7eeb506aeeb204f419e2e797187ec3f5aefd5c8b64fdacd4c882c07bae7aac9c4eee5dd7e70ecbd14b7c0b4b2df4adaa8a2ec8f45bfe68251cd4531de6ed040a94046b0a33c470bff99497cfe367593d35d3343f0036740191365a12b5b98828922e559294d56327a22c6e6ab03d9784b6f1a5a4ce4e5ae880aba83332ba19a46fab0076b1eac57d6c29faf83d5245cacfd6833bdf45693e674bddcaefc8d7573e9059ea5699c83e15a63ebdcdc7cbca07e024af3c2a887d573a5fcdca0c5fbb154049456500723b7d5a7ed416b18a7b1cbd241a717a72d88e341ecf668276eb16117ba490c147946d4b068210ada6349c2dc4e84d424ead264185177d08e9cc4e95246fba94b7be478461e25d730e36a2f14af3b446e8245e84561b0f5a793d03325a4b4ccf5ac365615f0daa3c60211f4414dc72aca052a55ed5ef8a1174ca6e1e2daab27bc848cb2c3e61e679cd25c01a2a9c4e669902b9160c3883f597933049b895d9d828a8c7e3d91aae7958b572d7fa18738c0caae365fb20983857f61ec9c10d7342f0de4a13e10094cc8043d1f7f230e57b4ce41be6fbde027a99f02484142c13e9f25824de0d33fedb4f688c5c54719a5f18e9bc35425c224d41bc44db127b6e3b6862d62c052bf8b391de7d4b32a4795117650e8e78aeab5c7426bb152bd803088c3f74daf8eff002b2204cb76040000",
    ],
    [
      "ETag",
      "4/b/DnXFyGTAy8NO4F6zBw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-19-1642551508772"
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
      "8bf79648a1257f86d41749976d916868133aa99a2ae4da07736a386a9b4c5994efbe33edd2699d44dfc0ddf977e2eef1c3813daa5ab2983da8f2a905b3ff5082bbf1c11a6cab9da55783b505163070bc24f2fce992a7f3f65734e5d5b7ed6309fbbb34bab9b820c28a1f5071161f58a1404bcbe2ef0756f30aa84da06eab3aefb280b97de38b9b6cbd5c7da1bc42e9f3d56d92cce6c9821d8353a3e48ee71dff8eb6fb63c0b6f8b086020cd402fc2c8dc12d08b7f46b5a5e351a06165b23c0b20eee0e4a836dc30de2802a83f0e3201c4767a351381a4e27933302350aee14d6c4de6e683ee6d071bdc69fb4250bcf89305d4c1b17dd73477525bb4d7cb85c65e3a81bf06f800b816dedf25eb050c6ba67f5fe802f2afc4b6afe4e90ae4ae93ea8845a82e9a3549373290d58db4ba2cd79d39cb0799a266f55a9a54125fbc19dea01b4db9d80cf493afb9fb464b057ad3ecdb2c51bc23ab2cd09c996578b4d36bbbaf6dcfd8b11e67b07f6da20b9ca823754388ca6a3c978f8ecb14bf4bea3efc4ceb41030c1e957f9aa1c8b0bae2d1c7f038c5f018488030000",
    ],
    [
      "ETag",
      "3qCaOBuz48amVjkgeyYO4Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `records` ORDER BY `stamp` ASC, `id` ASC LIMIT 4 OFFSET 8",
        types: [],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-20-1642551508772",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8553db6e9b4010fd15445fdaca176ce3402c45adebe014c9970470ab3c99dd65209b004b76975c14e5df3b603b4d1429917858cdcc997366cef064def032312726e5d96d0df2f1cbb5a066c7044d328c3e9065e89dfd3e7fb85faf3629bf0cf5d9a8be3839c10adea01429aa1cba4ad492819a6cc25e26455d112944171b7587567770640fc7e3c1d8721d6788380579bae0e50da2afb4aed4a4df3f70f73221b21c48c5558f89e225debf1bf62b29ae8169d57f4bd94716d5ff98f4472e18d15c94279b1005d40ae4160ac27394f01f99d09f6f5bf738297a1916df710684315197ba91852d9828539ed5b2ed6a4e9ecc56e6ab87197a0b6f1619df3b46389d7bdbd9348cbec64a23416c10658451e0afcebe35cf78bbbdba2f62631eac97462c810999a8d85807a75e60fcba340ea86938eb18314fda97b1f0977e64d8c67a3e0fbdc8705154024af3b29514119a432367bf35ffbd570d8068a26097dc3ad61119b8d6314da9c3527734a6a90594bad4199311b5d8b10d764281204e37dd5b1429454993145c07527b08e9808eed81633b84b2845a90a40ec52f49063625e673c7bc975cc3295795507cb73af36fe047de360a36abd934f2da315252e7fa7427ae19e2b54e8d4362d107733d37592e90a9f1c15f455e309d45fe1f6f67fd0232c21ec35b343f25b902ac269214a0412e45824b33cfd7a11ff9ebd574d1f4c2838a1eab267eb1f182cb7d2880142494ecf32563719bf8f4bf381c29d6e299220dfaae395aca5443c224ecace54523e6801eba03d736db62a9dfe546e311e65e8eb3e90805947a3fd1ee48cde73d59ad5e8a30898eacf04631fb0f0845a5bc24040000",
    ],
    [
      "ETag",
      "xaMSEGHPxwONUfiYStG3uQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-20-1642551508772"
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
      "000002ff9d545d6f9b3014fd2b93f7b884613e9280546964a519529a7409edcb5421072e299dc1cc3649a328ff7d866d106d6dd6f4057cafcf31e75cdfcb1e7dcf8a04b96895ad7f54c077efd720bfd68b05888a4aa15e252b04a01e0249d60a590d2d7f5c6e3fe655904e82bb6ac32777817771a110227e809c20778fd20c682290fb6d8f0a9283a2658902c85d59af8359e84ffc854ae42ca913b3dbe9d41b4f7d74e8b50412c7ac2a64743631cdb8905113b4c465b8086693d33c4ade44538e337a1e650d4502fc3c4e56462449380871268f89889465471acfe753df9bfda7f845c25996bc81b9c9ce6550b9e91857d3b9179ec627441e5dd1a517faa7f14292fc4853185cfbcbd0bbbe39cd8aa2876dfe9a52df1f7ae891ad169002872286bafd4bce1e2196413d59427d9d425fb08ac7505f9e02371b6bceaa9270c6fa2ad337f43e1e58866d635b1f0d87860252161399b142616f974a1b924c12ba605b3558a806f066a9662c6d9e1b95761a0f9b06f06735ad380528da78ac7840691bd3d5afc4e8133c3562b598e5edee956a700addb126d6b0ed68b6ad59669b95bcea2029a1e2a56860989a6975a7e9cab76ef4f54e37d6ec11366cdd742cdf7906f80e1b2e365d6c7dd0f5a6fac7f6b1de323a71978ccb875d1b0642b2ae18495687ce6bac5bb66658581b581a1e982ff83b5108c3d135dbfcc7d191e4c6ba690e86cf5ac7fadfd6ef7fb7c4782741dc70a6fa4b40d29441dd4dd3699f59ed4a0d8c5b2beba198a87ff4974c22b71177f809c3f4047e01060000",
    ],
    [
      "ETag",
      "u74EBpw/muIfGIVuvrGVIA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "000002ffedd3597282300000d0bbe45b195141e81f208b356c03e2f2c39010905596a880d3bbd7e935eabbc37b810863d2f721bd15a4065f608c96228319b4904e8fc5e45bd1bc106ed778f5d86268eba21193894ede8ed73615a4690c15e5aa0f7eb279da9532dfe7567be0a453eb63ee3b0deeeda6d41dc51402d419506e47768758aeca2309939223ad52c181ef0ec6ad7cf2b847638f9263d888e7ede0f91ead8f962ed786dd612cbb5bc32b7913af93345511bab84536a54bdc9b1781da522e25aa4af40394d932bfe3641f6b82d8124807591d5dcd8f83a27204c70ad7535536e3dad1ea33f3f1f1ef801920439375a40fb3f7f615278a33f0573fa46343deff651275a4033fbfe1ea3b4b19040000",
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
      "Wed, 19 Jan 2022 00:18:48 GMT",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-21-1642551508772",
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
      "3014fd2bc8fbda2440f396a2354ae98a94908d9066eb3421632ed41de0d4369dba2aff7d17d374ad2ab59fb07dcfb9e7dc078fe437af52322509cfef6a900f9f6e45424e08689ae32be5bbd4f7e16f7ef13d9c9483b4bebeb9dee5b3192278c352b4dc17d051a2960cd474bbe9e652d47b2a85e860a28eeb749c61df1d0c9c813d1e8d5ce42928b225af7e23fb46ebbd9af67a47ed6e2e445e00dd73d565a27c7eefddbbbdbd14b7c0b4eabd96eca18aeabd2ffab9108c6a2eaad97683066a05328692f2022dfc67a6c9d9ebd45d4ecb6e8ee07bce803226ea4a37b630051355c6f35a9aac64fa488ccd1707b2f196de22b29828eab28a2b5ac28995524d63fdb007eb225caf2c3fb85887ab79e4af8378b3b8f456f3ee62bddcae828db5bbf442cfd23429c070ad9975666e015e503f05a57965d4a3e6b9517e6a90ff762c0d01a515b4c178640fa933b62749968c58363e1d24990d49324e46037a9ad86cd2877e9a00459e11352c5a892a990c9963f7933875593fee83edc663b09dd8c604ee3875c68943c9e184fc915cc339577ba178db21b20bfdc88ba3701b2ce691674ac8685de8f3d65853c04b8f1a0b44d03b351d9a2817a8d4b4db0f222f9c2f22ffca6b27bc849cb287cd1dce38a38502445389cdd3205722c5869160bef2ce116c26f6f5185464faf391343d6f5cbc68f9333dc2013676b5f9924d14fac11763e788b8a2456d20f7ed81486042a6e8f9f00b71b8a26d0ef26deb853f48fb144206122af6f12c116c021ffe69c7b5472c2e3eca288d77dc1ca61a1126a1dd206e8a3db2dd893d1a120396fa4dcc99f48f3d6b723419a1844a3f55d4ae3d16da8ad5ea1984411c7e607a75f807e55908f376040000",
    ],
    [
      "ETag",
      "aiWdIIezgFXR9m5duZhZWg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-21-1642551508772"
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
      "0000000002ff8d936f4fa34010c6bfcbfa9626a5d73f86c417d4eb29176c2dc557c690951d70bd6587db5d7ad6a6dfdd01bd6ace4bf00dccccfe26cc3cfbb067bfa4162c60f7b2fcdd80d99d94e0d66d90806d94b3f4aa515b601e03c74b22d74fd143b82d673f0524105df0e7353e3d97676744d8fc012ace823d2b2428615970bb679a57406d39aaa6d2599779ccedeab6b849936879417985a2cd9737711ccee3053b78c746c11dcf3afe0b6d77078f3de27d020518d039b4b3d4061f217751bba6e555ad6060b1313958d6c1dd4169b0a9b9411c506530f207fe743c9a4cfcc9f074361b11a830e74ea226f66643f331878eab04ffd096ccff4684e962dab8e89e5baa4bd16dd286d1329d8ebb013f023ccfb1d12eeb050b69ac7b55ef2ff8a6c2bfa4e25f04e9aaa4ea834ad0024c1f25eb8c0b61c0da5e126dc6ebfa88cd57abf8b32a5a1894a21fdcca1e40b9ed11f811afc2ff494b067bd7ea7b982e3e11d6916d8e481a5d2d36697875dd72776f4698ef1cd86b83e42a0bada1fce1f874329b0e5f3d768eadefe83b81330d782ce7f4ab5c4ac782822b0b871749662da788030000",
    ],
    [
      "ETag",
      "QxIhAvg7JdeReIGazQoxzg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `records` WHERE  `id` > ? AND  `id` < ? ORDER BY `stamp` ASC, `id` ASC LIMIT 100 OFFSET 0",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 4 } },
          { parameterType: { type: "INT64" }, parameterValue: { value: 7 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-22-1642551508772",
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
      "eb6f9b3010ff572cefcb1e791042028954752c211d551e1d9076d53625c631d42de0149b5451d5ff7d07346bbb49ed87f105ebeef7389fefeef10dcf367888431edf162cdfbfbb16216e60a6480cd1f474917fda65a77b393bb1bfcb499f7595131f1d0182972c49d26dc29a5214396572b8f45b712e8a2dc98568825053d79b9dbea1f77a9d9e6699a60e3cc99268cab31b605f29b595c376fbe0dd8a85881346b65cb6a848ffc4db3bbdbdcdc535a34ab65f5ab6c145b65f373d4e04258a8bec68e943018564f98aa5842750c21373137e7e29dde2246dc500de71ca08a5a2c8545916485091453c2ef24a150fef7155e6b303f69da9330ad0c706f2ed89b31ad97ef07e2d1518ac1191c80f3c777ef2a13cae57ababbb748d26de6286d639a322dfc835baf8ea780e426bbe59a39f85a675193a46f67cfc3c4421b4f0c68e87be5ca283baed8f1a35064e68eacedc0075340d2d2613df099006e56f98543cab8a0f4898b0b2f0c7febaffbe6a49208a48562757a6d6271d4b1b845168d2c8eaf6c24863616885668f74438d0e0c666c424680a74af58a453291e97d33324323221d8331ab67d24ec7d0224337cd81d61d588301d1a9d1a5117e68e0bb9c2b36e6722b24af9b8c2f3c37705681b79c8fecc0a9ae11912251e3bab8f212cfeb54704900bd72af8732cb0538952fe6ce03c7b347817beed443326531a17bff16c624228964802639499962f94c6ca069f86ce1bb81bb98db5360542f7f7640483cfc71ff4408f6dbaacbaafa975e7da3f23f00ce495254885d7dc0907e68fc9782090abf00012b5193f1b7a5e35de23ae4b188e52ca36f3f3e80abc49b9b7d5833c0c2a2810d4ca4e2306a5496263467f5c8f1b42ce6c0d60756cfc21538577fe5ba1a7c87de961aa5224b59a61e6f54af59d9aa2a55c83f2048c2a4cc61cb20fb1b6678659fe6040000",
    ],
    [
      "ETag",
      "mJOr+vnJysMGAXsF6e3tEg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-22-1642551508772"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff9d545d6fda3014fd2b93f73812c521211f52a5853665742974813e4d15721d07cc429cd90e1421fefb9c9406b631067d49eec739cebdc7f766037ed03c013e78a6d39f25e1eb8f5322bf55464c449949a15e05cb05012d40249a2a64711db95fd73d9c96e9b060467217c538585d5d2984c033b240c0df8094922c11c0ffbe01395a1045a38902c87551d9fdc138ec85b10a2c585205068f511474a3106c5b0d0161ccca5c4e2e26a6940b39a99d86381ac7fd41ef342f43efa2a98e697619654af284f0cb38b498a024e144880b794c4c5051ec49dde1300a83c17fc4cf13ce68f20ee6925ecac8e472cfb88d86c1f8343e41f2e08a6e8271781a2f245a1cd434eedf87a37170ff709a3599cc568b73a47edab6c09c3dc724259ce49854e35f70362758f6abcd12eaeb19d1042b3926d5e529709d987256168833a6a988669a1aec58a66d43db701dc754c08c612429cb15f671a46a03924994c56ca5160b54005e9b6ac7d2fab95461bbee615903deac8872d438776c960ba90e7d0b64f35dc4fa4c5eea5a75cc164dfa56cd77461ad76eebb00375dbd53daf09a628137b88e425f947ca352bfabe44c33434c3d48c7dd5d5d18667588e67d91dc7f542ef08fa03347dd8f6a1a5d718e39361d4f7702844e788103724a78d33c228a37b5d1251fbf63922c0b6abc336d4a1e5ea8e754ee3bfa54ca7ad7beedf7d75fe50c183d0b38e09d06904d875feb49b8dee5a12f1c0991a3441aa19335ee7ed9a552da9b5f1ab425a0023f5a7fe42e5abbffd05653f57f606060000",
    ],
    [
      "ETag",
      "pCL8KyGcfufOpo0dJLRcAw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:18:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
