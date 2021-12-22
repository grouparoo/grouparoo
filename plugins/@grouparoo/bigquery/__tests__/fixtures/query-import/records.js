const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1640201475256";

nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", { grant_type: /.+/g, assertion: /.+/g })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffedd34b7282300000d0bb64ad8e0a28746727a201040141649389107f848f4110e2f4ee757a8dfaeef05e802409ad6bfc28335a802fd093a9364a46c7f1226ac762b739dfc8a98113759664f17651a8105bdcc86017a55aa850481b43a88ab42948b03599029da4496d591234b7bc9ececbb1770b54e2f9e7e59ccfadd87771e11e65fd1ebbee9ec8edb34f75fdc4d0bac1b5b70a7d21a15d55b1ee029b5c9e081d1d18ce212f6775aa9a8839eefdf05cb0a81d72db7ae208a3cb727814b7d5767a2a862c3cec45e03ace1edb52be33d7419c996166b6e882ec0e0a4fe9bcaa740c7f6af072f4f1f1ef8001a05d75e5b4c6d7f77649d1b401f8ab8f1f7d45dfffbf29e194839f5ff2c9a23c19040000",
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
      "Wed, 22 Dec 2021 19:31:16 GMT",
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
        query: "SELECT id FROM records ORDER BY id ASC LIMIT 1000 OFFSET 0",
        defaultDataset: { datasetId: "test_001" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-1-1640201475256",
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
      "a3",
      "40",
      "14",
      "fe",
      "2b",
      "64f6716d192a97b689d9d58a866cad594a77e35333331cd8516090196a1ae37ff700dad598e81bcc773bb7477227ab94cc0997f97d0bcdfedbade2e488806139bede6ce254c6e5ddbe08573be7ecd76271997f7f38394186ec549a95750123adda46809e6fd6e3bc516dcd1aa546683472468eefd20975dcc09b783eca3414d952567728fe674cade7b6fd1a3dce95ca0b60b5d463a1cac3bbbd9bd875a36e41186dbf4fb43144db9f66fe28946046aaea64b3c6fc5643b38592c9022bf82f4cf9cff7ce63c9ca718ee49d14c084506d65baaad042a82a9379dbf4ae64fe48fa2adf7c9075b80c17892553eb22bebeb21a10aa49b5751d9f87b17576d301a7eb85b58caea2c47228a5d6f5c5c53a4c2c8af6296823abde3c61bc80cef8a5fde8e3cc3b01334cc3006e03ea33674a673ce381c8a6c71ecf28703ee581c78e39153317dc9403439de9dc7b15ab54e50681ef3b3327a022984c268c06a9a0cc4fc1610ee31e4d3d374dbd19254f47e4a19106cea5ae9596c310c8df384ac26d126f568bd324ecdbc8585b98f3a1b8ae89b7751a6c724ba983c44f7a7bea50a930ad9b6ab44ac2f87491447fc261914bc899d8afef7195192b34201d0f20d9d73833f27b13c63764788a2183062af1f52c91dc035f9df1eb512115cf0a53b4c17f5c9cd05d86686058a02cbb5a0e6a3f70a7a42737e603360d02c40ec7d439420995796968382af2f412d6ea0309419cfb2a5a5d22fa0c3c17a176d2030000",
    ],
    [
      "ETag",
      "YURdiRmkylENv1BKCCGg+w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1640201475256"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff65915f4f833014c5bfcbf5754498ec8f247b7086e8222e1bbac4c4eca1830b6302b7b6c5b92cfbeedea20f267d694f7e3d6d4f4fcff051b53944b0abcacf0ed5e9aa44b3b62245ddd546f324a9d5080340234aebfcdeafa47c7e5ae964f1b6b92edb697e5c1f673376e86c8f8d80e80c458575ae217a3f432b1ae46d55ce067392562f96aff1439c326828b760b94992bb7912c3657b19c081762916a8b0cdd01e26151d30330b9b538b46d6e869ea54861a7a73bf502aeaa450441e132ff08271e80ffd209c8c86a331fb6aca84a9a865ebe605f8164346d4291d3925043e3b54af3971d18f5f96f781fe93a1436e1c123a64e490b143260e993ae4d6219c9cd1f6ef39f39341bd52c4d568b4ad4cfddf8aeec9d666b84ea33a1c4026f8ab1e2b0351216a8d971f6565f3e708020000",
    ],
    [
      "ETag",
      "bxhPppMKPsLIXU/gn8dwQw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "8b08000000000002ffedd34b7282300000d0bb64ad0ec847e84e41444199921a299b4cc45490140304213abd7b9d5ea3be3bbc07205946db168b6b492bf0062499da936c7254e6c94db97f6cf75a1fa596771ef7f1bb2c2f5734c5f9899b9f963e2f50ca721f47e72cdd1d5c9345aa7b2cb6a574bbfa8e50382b2fd5ae3404afee07a82e7a01d7a7392fac69b043aa2bb536e7ce8a082b824ea7b87b9336be878ed00b74baa6c16908bd9ad5c9d884225178cd8cd6ef6ca2cfcc1a927d973b371d0a499a6b68a65a19b3743324fc50fbf12276963af4c200b3eeab571a6db9c6c67865e18d106876db468c1bfa77367979f977c008d081170d6d71f1dcae19b63d027ff5b1909c3eff2f286968037e7e01ffd8d03f19040000",
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
      "Wed, 22 Dec 2021 19:31:17 GMT",
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
        query: "SELECT id FROM records ORDER BY id ASC LIMIT 100 OFFSET 9999",
        defaultDataset: { datasetId: "test_001" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1640201475256",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85526d4fdb3010fe2b91f771b4796d9356421b94b0154a6169ba894f95ed5c32431a07db015588ffbe4b021d6c12f453ea7b5eee9ebb47722baa8c4c0913c55d036af7e946327240c0d0025fcf46df3f67f2bc3ace76e2fa4a5ca9e6f6cc3c1c1e2242b42c4db77509032d1bc5414fd7ab61a164535325e5008506dec01d078ee7b84138f24663a46928f385a86e91fcdb985a4f6dfbc57a58485994406ba1875c6ef7eff6bd67d74ade0037da7eeb68a389b6dff5fc524a4e8d90d5e17a85fe8d06b5812d152576f09798b1af6f9587826e870582ef0507cab96c2ad37685125c56b9281ad5a992e923e9ba7cf54156f1229ea596c8acd3e4f2c252c0a5cab475999cc489757cdd168e56336b31bf98a796eb38d6e5e9e92a4ead09fed020036d44d5c9a79495d04a3f0730ff3ff596400dd5d01737a133a66ee44c58ce429e47fe88e50e3016b170447de6f0490041c68022cfb4ea1d8b56b20a80078e0bb94f7d6fec7b593666d4f1717a9685c1c489c2c80b5c3fcac8d3017950c2c089d0b5d4a28f81fc4ae669bc4993f5727694c6dd18396d4a73d237d70ef1ba4f83436e1cc745e03bb33db55521d1adcd75be4ce3e46896ce7fc6fd2a175050be5bdde132735a6a40389e40baab3133f2631d27d7a47f4a20070515ff384b0477858f0ef9e5ac108a87852edae07f5c1cd7ad0757d02f506cdb5ef6ec70e206a4032bf36f2d0a8356797f4ead226ca132cf03f567459e9ecd1abd076111735fce97dfb0fa07878142b2d4030000",
    ],
    [
      "ETag",
      "J5H+doKnBdyiYPiPrukJtw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1640201475256"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff2d8f514f83301485ffcbf5151246b66948f6e00c713348045d881a1fba7261ccc2c5b664c185ffeeede6536f4fbf9e73ee19be9bae8408f64dfd33a01e6f6ab4991b723483b2868f9e3a83e0015a51335964c5c7a6ed0e6956e8df4c3dbd3f9f92b15ead9830f280ad80e80c5583aa34107d9ea1132df2b7a664c08ebd9bb7e95bfc18e72cb4543a21dd25c9fd3a8961fa9a3c38d23ec70a3576129d59afe988d26e5d4f23da5ea16f68d0120d5ce0cb43ad69e88526f259f1437fb69c0761309bdf2ec2c592394552d8863a4677afc02996ac50399db82504f07f5f8f16cd8b26f636e86cef826bc603b95ccb7dac1ed0032978d74d6321aa843238fd011e407f2849010000",
    ],
    [
      "ETag",
      "WQWZHmnhNQWrzQlJYMwLyg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "edd34b7282300000d0bbb0360e9a464c775a04b42dbf40453619c824228a447e029ddebd4eaf51df1ddeb79230c6eb9a36e5995f95576548e678caa6a9ba8a3a750c6c8de81bfb45d796562bda2ed0c4ecc636747ddd068e0a58c14d7019dda6803cbf440eb4b3bed6eda355c220b12136914096fa1eafd25a521cd385b847d2090b1f5a8144f3c0302a40fd233776b2ebc81d0fe2c31cada16d43639d8725f68a8300ac44568bfb7938f8fdc1c519b089fb69ed8099369c8cee56f7e08e204401df33efcb916fa4c996f64d8c694ed459126ffb64712691a3f9e77191675e1cef39f0a64f4fff8e3251782f4f15afe9e9b11d228c27ca5f7dda0c923ffeaf7952f14af9f905b257f09519040000",
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
      "Wed, 22 Dec 2021 19:31:19 GMT",
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
        query: "SELECT id FROM records ORDER BY id ASC LIMIT 4 OFFSET 0",
        defaultDataset: { datasetId: "test_001" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-3-1640201475256",
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
      "02ff85525b4fdb3014fe2b91f738da5c9a266925b475254c11a5d5d29489a7ca764e32431a07db614288ffbe93043a1012bc25fe6ee7f6486e459d933961a2bc6b413d7cb9918c9c1030b4c4d70b2e36c9dd6446272b75bbb9597c752ebcabc5e9293244a7d2f4d05430d2b2551cf47cb71d974ab60d55528ed0683419b981ef788eeb87536f1aa04c4355ac447d8be23fc6347a6edb2fd1e352cab202da083de6f2707cb7ef3dbb51f206b8d1f6db441b43b4fd61e6b74a726a84ac4f775bcc6f35a83d1ca8a8b082ffc29c7d7feb3c16f4302e917c2f3850ce655b9bae2ab4e0b22e44d9aade95cc1f495fe5ab0fb28d57f132b3446e9da79b4b4b01972ad7d6263d8b53ebc775072cb64b6b955c2699e55b9bf3f36d9c590e7ae7a08da87be78cb20a3ad7e7de93f703ef04d4500d03b80f9d80ba913363050b79114da6ac7080b18885533a610e9ff9e0e70c28ea4ce7deab682d6b3f60ae1b028f1c9846bee7b13080b060d4a5d48b78ce21e0fe240f19793a217f953070267423b51826407ea74916efb374b75e2eb2b86fa3a06d65ce86e2ba265ed769b0c9bde3b848fca0b7a70e1512d3ba9126eb2c4e17cb2cb98a872daea0a4fc617b877b2c68a501e9b8fdeca1c199915fbb38bd26c3530a0528a8f9e7b344720f7c76c32f178554bc294cd106ff71715c77195cc1b04071e86a39aa674130233d599977581845881d2fa9738403d4e6b9a1e1a2c8d37358ab8f240471eeeb64fd13d17fabd28978cf030000",
    ],
    [
      "ETag",
      "KciOIq39a3LrkOjA+0K2VA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1640201475256"
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
      "51",
      "6b",
      "c2",
      "30",
      "10",
      "c7",
      "bf",
      "cb",
      "ed",
      "d582adad1b051f74749b209deb26830d1f627bad75692f26a922e277dfa5ee61e04b72fcf24bee7f39c34fdd1610c3a6aef61dead35d85f6cd15199a4e5ac39ba2d6200c00ada8d84ccd6b17aca2edd7b4fd1c49b57f3a2c37e23899b061f22d3602e2339435cac240fc7d865634c8d7ea82057b52ae9ea71fc973923168a870205d2d16d3d92281cbfa32801d6d322c51639ba37b4c69da616ee72ea7118d92e819ea748e067ab93fa834754a68228f8937f2fc71380c867e781f05d1983d49b9b035b5acaede81bb58b2426674e49410b2a0fb920397fd7a60ecf779fe93e0868c6e48e8c8faafc1ec64d12c357158832ee7c3f01afa91dc209607b4bac301e4823fefa5b61097421abcfc02d42e7b4a9a010000",
    ],
    [
      "ETag",
      "NsOu2U5hZAnW3lpqFvPbaw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "ff1dd0dd9642400000e07799eb74d4d664f68e0e42281ce1c66176fc14c20ca1b3efbe9d7d84ef7b8304634269cc9e0fd2806f30275bb4c6eb941783915f3c2b42a9639a120b3daa8b8b8686e3b6851c5115ad3fec6ab3d6a111ce8d1bd8297b32c73d3b6e98e99876a725d3a2904ffd5751b24ecd02890afe082b1d16c9a189a1b21972bbabfdaa18cdfe357287ccda1be529849be8342f7c2ec84e165d7f5a786d85db533ad2411e2e083d6c5a1962f8e21c53f4a6877f942d59f5777e3db99da528bbc528705e58e82edcabfec2655b0fdd84511bb53d2fa85a53e3c0f4ec33cb31580132b5654f685c7edc5f7b8456e03f2166734b3e1312497ad283df3f6a6f509123010000",
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
      "Wed, 22 Dec 2021 19:31:20 GMT",
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
        query: "SELECT id FROM records ORDER BY id ASC LIMIT 4 OFFSET 4",
        defaultDataset: { datasetId: "test_001" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-4-1640201475256",
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
      "52ed4f9b4018ff5708fb385b28058e36315b57d190d4ba51bac54fcdddf1c04e8143eed054e3ffbee78a3a8d897e83fbbd3d6f0ff6b568727b6e3351def4d0edbf5c49661fd9a06989afbfee0915c557a7ae81858bb3fdcfd213d1ddf131328451295ab7158c94ec3b0e6abedd8ccb4ef62deda41ca1d1c81f4d42dff5dc894f022f0851a6a02a56a2b946f15fad5b35779ce7e871296559016d851a7359bfbc3bb79ed376f20ab856cedb44074394f361e6b74a72aa856c8eb71bccef15743ba8a9a8b082ffc29c7d7feb3c16b41e9748be151c28e7b26fb4a90a2db86c0a51f6ddc1d59e3fd8872a5f7dd89b78152f334be4d6697a716e75c065972beb223d8953ebc7a501169ba5b54ace93ccf2ad8bd3d34d8c1fe89d83d2a23938679455605c9f7a4fde0fdc08a8a60a067047dc904e2277c60a4678114d0356b8c058c44840a7cce5331ffc9c01459d36ee07156d64437ccf9d12af0881901999ce3c12e594f02060bce061100434029715a1fd7864df7542c38950ad54629880fd274db27897a5dbf57291c587360ada57fa6428ce34f1ba4e8d4dee5c7782c40f7a7b34a8909866469aacb3385d2cb3e4773c6c710525e5fbcd0deeb1a09502a4e3f6b37d0be66eb7717a690f4f2914d041c33f9f25920fc06737fc7c5148c59bc214a5f11f17c795c9e01d0c0b14b5a9e5591db9d3c0ac18c99d7e87f90141ece5928c23d4d0e8a786868bb21f9fc27af5424210e7be4ed66788fe038c8c5828cf030000",
    ],
    [
      "ETag",
      "Qz7aif+/mmeb6AGyPg2i8w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1640201475256"
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
      "ff6590c16ec2300c86dfc5bb52a9b01658250e032160548875eb2e138790ba5d21adbb241d4388779fd3ed30894b627df912ffce058e659d4104fbb2f86c519fef0ab4cfae48d0b4ca1ade1aaa0d420fd08a82cdfcfe7bfdb649674ffe310ed55a6e1787e5c3693261c3c80fac044417c84b549981e8fd02b5a890af95190bf6dcb87ab5799d2fe609838a320736691c3f4ee3395c77d71e1c689f608e1a6b89eeb146d301a55db99c46548d42cf50ab251ae8e4eea0d0d4364213794cbcc0eb0f037fe0f78351380887ec2992c29654b39abe0077b164854ae8c429216041772507cebbf58b71d8e5f94f8637647443c68eecfe1a4ccf16cd56138735e8728efddfd0337283581ed0ea167b20057fdeb2b410e54219bcfe0099f5a6969a010000",
    ],
    [
      "ETag",
      "f3xKVNUCJ0kL5lKcPGjH9w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "0002ffedd34b7282300000d0bb642d4e0a924077e0b4280641c101b261620cf829080401edf4ee757a8dfaeef0be01e35c489975d78ba8c03bb833d59cf2e91e5a490f1f91afe631e5235a31b35fb4b8c90f342bf4b5b5fd1c7047ba06e7e79d57d8876a2657cb8fdc186c45b12e33c487d0d76e44618a1b8f3a42739d754eb27509b137db593297015ae1c0e70ea71e3c5e1385d7fed7f2ad8e366e23b5306c0ec28408139ae234be050a7dec1368246159947410f1a3976767df750ef1593a86917d5aec3c0ba3f27cbc947dee9a544db2620dbd0ac9aba852184486da5755a5ed96613092c898bebcfc3b6002c4589f5a21b3d373bba69be604fcd5cfba7b2d9eff6dc15ad1829f5ff8be98a819040000",
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
      "Wed, 22 Dec 2021 19:31:21 GMT",
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
        query: "SELECT id FROM records ORDER BY id ASC LIMIT 4 OFFSET 8",
        defaultDataset: { datasetId: "test_001" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-5-1640201475256",
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
      "a3",
      "40",
      "14",
      "fe2b64f6d5964ba1a54dccaedbd20d496d23a5bbf1a999190eec28303833681ae37fdf03a8ab31d13798ef766e8fe456d4195910268abb16d4e9db8d64e48c80a105bebafe76b53ef8c9a96a9c72557a026ab5ba3a3f4786e8549a564d09232d5bc5412f0efb71a164db5025e5088d46c1c89dfa8ee7b8fe2cf08229ca3494f946d4b728fe6b4ca317b6fd123d2ea42c4aa08dd0632eabd777fbdeb31b256f801b6dbf4fb43144db9f667e2f25a746c8fafcb0c7fc56833a4245458915fc1766ecc77be7b1a0d5b840f2bde04039976d6dbaaad082cb3a1745ab7a57b278247d956f3ec83eda44cbd41299b54e769796022e55a6ad5db28a12ebe775075cec97d626be8c53cbb776ebf53e4aad10bd33d046d4bd734a59099deb73eff1c78177026aa886013cce9c29754367ce7236e379380958ee0063219b0574c21c3ef7c1cf1850d499cebd57d15ad653d761130621f73c8786b3c93c0f19a7ded40d32c7f729b83ee5ee7c1e90a733f2a0848195d08dd4629800f993c469744c93c3767991467d1b396d4bb31a8aeb9a785ba7c1268f8ee322f193de9e3a54484ceb461a6fd328b958a6f1ef68d8e2060aca4ffb3bdc634e4b0d48c7eda7a7066746ae0e51724d86a704725050f3af6789e41ef8ea865f2e0aa9785398a20dfee3e2b8ee32b8826181a2ea6a795187aee74e484f56e603369976d8eb25758e50416d9e1b1a2e8a3c3d87b5fa958420ce7d1b6f7f21fa0fabe6564ccf030000",
    ],
    [
      "ETag",
      "14NDFU4Rymp0lDl2ienrDQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1640201475256"
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
      "ff4d90cb6e83301045ff65ba0509a23c91b20808b551a3a8a5cda655160e0cd4a961a86d1a50947fef9876d18d7d757dc63ef2153e6553400427597d75a887bb0aedb30b199a4e59c35b4b8d41f000ada8981ce49b491e138c57c962d9f7e525edcb7eb35e3361f20fac0544572825aac240f47e8546d4c863b260c00eadcbdbfd6b7a9f665cd454b8627fd8ed36f12e85dbf1e6c1994e1996a8b1c9d15dd66a3a636eb7ced388ba55e81bea748e0646783ca83475add0443e37fecc0fe7d3601284d3c56c329b33a728175652c3e8e105f8154b56a88c2e6c091306f41859b81cd76fae57a3cfff260c5c75fc9b8e078be649139b187412cbe0d728216769d9deea0e3dc805ffcc83b410954219bcfd0075b6b02177010000",
    ],
    [
      "ETag",
      "yiZsCKCeB9C78xxfwExfxA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
