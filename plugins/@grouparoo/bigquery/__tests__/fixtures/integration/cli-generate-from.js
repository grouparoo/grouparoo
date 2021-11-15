const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1636475677951";

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
      "000002ffedd34b7282300080e1bb642d0c15a4d09d5011104479a5bac90426066a24bc2a48a7772fd36bd4ef02ffeaff0638cf49d7a19e5f4905dec0032f75311777b56658433132578059767c10a5688f8dceb6e12509e28f57bcb3aca684c51ecb9bf496278d26c8052c7364e75299a44b9fb75c0b1c9e3a8965d2d409d7e79bfbf279e0a7e87d62d74a8e6f763599fe56f36ae6c58ee584ae6954e7dedd443841432d702370a04ff93ea1831936dee518c648caa4cb74678abd5d7db91ea6160c367e44f6a5aa7635f5ee3653e041ed35d69a6334077d4a7c04d5a1af4e93509dee547c7afabfc00290b12e5bd2a172be5d5ee9fa02fcad8ffa474de6ff0d825bd2829f5f726dfeb019040000",
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
      "Tue, 09 Nov 2021 16:34:38 GMT",
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
        query: 'SELECT "grouparoo" as message',
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-1-1636475677951",
    },
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
      "6d",
      "6b",
      "e2",
      "40",
      "10",
      "fe",
      "2b",
      "b2f7b1d5246ade04e9898622e70917e31d8582ec6e26e9b6493666371629fef79b24d6b614da6fc9cef332cfccbc902751c464429848f73554c71f8f92916b029aa6f87a552e0ecff3dffbdbc07d30ae16bf165e188c66d3292244c352342f33e82b59571cd464bb19a495ac4b5a49d947a1bed5b79c9133766dc7757ddb429a822c5989e209c90f5a976a6218afd68354ca34035a0a35e032bfbc1b87a15156f211b856c64747034d94f1a5e74d2639d54216d3ed06fd6b05d50e722a32ece08d18b39f1f950782e68314c107c181722eeb42375da104974522d2ba6a55c9e485b45dbefb209b6015cca3defd9bc13de951d5cb41299a026ac4a0b4285a8588b20c1af639e3f2f3601b02d5544157dcb9a6432dcff459c25c9e78239b252630e631d7a62366727f0ce39801459e6ed45b162d64e1d960d9b10f8e3f761c73e87bcca328627ab1e5fa438f5b8e33b229f8e4744d9e2ba16121542995e892927fe1320a7651b85dcf6751d0c648689de945d75c13e27d9f1a4322e88b5ca7a62a243a35635baea3209ccda3e5dfa0dbd40a52ca8f9b3dee2aa1990284e386a36389f3227fb6417847baa71012a8a0e0dfcf11c16de1bb3b7dbd1a84e2dda08bd2f88f4be3aaf1e01574cb1379d3cb85ed5bdd956b5ae94fb5a1ed60ed722d8d22e450e873a0ee6ac8e96c56ab0b088b38f3f5727d8bd5ff97a6ac37b3030000",
    ],
    [
      "ETag",
      "+pDvwCMqGE7h/+DKD8RE3A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1636475677951"
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
      "4d",
      "905b4f83401085ffcbf828c4122d04923e80f142248d521b35a60f5b182e1518babb6848c37f7796fae0cbeeccec9973beec09beea2e8700f675791c508e1725ea1753a4a886462bbe7aea148205a845c94a37f2e522bef2efabf1b28a87f0e9fde3ed18ae56ac505985ad80e004458d4dae20f83c41275ae4b5169512a5f1d1636f069bd7345e3f70df526efaf53649c228b98369375970a07d8a054aec323486bda403663a36ac4ab47d83b6a24166a86016cf0fa5a4a11792c8e689edd88e7bedde784bd7f3fca5c3ba8632a16bea58badd00a768d2a249e98749c108e45c3274319fdfff3d0dd7ee6f251a35aa67491cafd0242fce14b764c834136b39a00599e01f79acf5b99f7e01ca810fbc6e010000",
    ],
    [
      "ETag",
      "6B9r0I/9Fhy+hIuAKXYWqA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "select count(catalog_name) as __count from INFORMATION_SCHEMA.SCHEMATA",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1636475677951",
    },
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
      "db",
      "6eda4014fc15b47d69d58001df30126a29711a4b601430adf264ed2ec7ee26b6d7f1ae53a1887fefb14d68a248c9136667e6cc9ccb13b917c59e4c0913e9430dd5e1d39d64e48280a629be1ae2ab5b9b87d17a925c09c86e573fac7c79339b2143342a45f33283be9275c5414d77db415ac9baa495947d2cd41ff7478ee958aeedb8ae678f50a6204b96a2b847f11fad4b35358c67eb412a659a012d851a70999fdf8dc7b15156f20eb856c66b47034d94f1aee7b74c72aa852c66bb2dfad70aaa18722a324cf05fb867df5f571e089a0f52243f0a0e94735917ba498525b82c1291d6555b954c9f489bf2c547d32486edb5a2cfe84e3399c605cde14b8faa5e1cb7402fa964de0bc2abf566358f8275186f17d7fe6a3ee87ea2395aed416951b4461165193426a751046fe7df08d04c4107c6eed0a1a3c9d06309737932316d960c81b109736d6ab221f72cb0f60c28ea7453bd55d14216cce3cc734c886d6f64c796e3ed639a8c596c03735d3eb62c774cc9f182fcad84864ba14aa944370cf27b13447e1c6d76e1621ef96d0b09ad337dd9056b1a7899516383487aa7a763830a894ecd648330f237f34514fcf2bb652e21a5fcb07dc07526345380743c82e850e2acc8cdcedfdc92ee6903095450f08f6788e416f8e8949f0f0ba9785ae8a234fec78571d578f00abac589bcc972567beec8212db9d26fb0896922763ea8a622e450e853435b7fe92f22723c99d5ea4c4210671e06e14f44ff01f16f15dfd6030000",
    ],
    [
      "ETag",
      "/i+7u3y1O8fFielYMB4mLQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1636475677951"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff2d90d14ec2301486dfe578cb1240b6e9122e844cc020912957869052cec6e6b633da330912deddd3e94d7bf2f76bff2fbdc2575e1f20827d9e9d5a3497bb0c79ed86046d5bb295ada1da22f400596542ced2ea382d86a7b93936e7f9faa578ad9e7fb2f15808ab8f582988ae90e6581e2c449f57a85585726db7d3d4d62c145f1a172c561ff12c4e24a8e8e082d566b97c9a2c63b86d6f3d28689f608a066b8deec5c650819a174ed6aaaa29d1b3d41a8d163ab83bc80cb58d32449e24ded01b04f7c128f483307cf407c295a415e7540bba790769616255267416557080e946b14ebbf55be2a1f3d9fea3930ba37d3324b5165de3a03f7af0c3a0ff27312527c622cca6c51e68253f32cf19a25495166fbf460306b06f010000",
    ],
    [
      "ETag",
      "GfmhCj2qHrhpwHQJjMmFzg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "08000000000002ffedd34d7282301800d0bb642d8e434148778202162a50e547364c8c9f122811422cb59ddebd4eaf51df1dde372294c23094f2d20047cfe846543ca553bf332d6764ac2ec8a93d1c1df73c4011b0408a6bbcd81a9bde8a67eec8ec769eaf81db17e6e71a491d857aa59a8aac915dbf8fcc6a91e8a7e8b673791e3a6d14da89026e58bb8a612a2f751bac46eb5888f152fb9db73672b5d28e2e94ef8ed2e8cb6a4513f5f0e6b16ac7bd463d157d1a40c02269d9d17eb680319c8fd88f4d42529d1e70764d8419179bfe9cbf564bdc7e68ba8da5c61d2ef3afeb3633424c878c4f1f1efe2f3441f0d9310143c9eedb9f748c27e8af7e296f1ddcff5b400408f4f30b7b8a507019040000",
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
      "Tue, 09 Nov 2021 16:34:40 GMT",
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
  .get("/bigquery/v2/projects/sample-sources/datasets/test/tables")
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
      "b5",
      "95",
      "5d",
      "4f",
      "c2",
      "30",
      "1486ff4bbdf423fdd8ba76091768bc00b932245e1843ca2863b8ada3ed3448f8ef1e40d48889cb32ef96d3774fce93d3b36dd07356ce508ca659baaab55d9f7935cdf528731e5d20ed550a67e9035eaeea60988f86fd627973f732785b9cf77b3d48ecd30ec58f9bdf4110c97655a78a2ad797ced436d12ef6daf92b9524a62ebd3b62eef55c5b5d261ac51b5459b3d4891f9cbe0cf199f2cae9c3e10e7524ec0b9fd82d54d715d0d0b87f3dba855062b5f29929c759b12b134e31978c06981206f1160e89b25df7bf47fedd7b282991821349a46cd7fbc2a4afca7a37a99deedce207bc890fc638e4820b46dbf940b3f30c6e23c11dbb7c0337f0105114312e022c704b0f785e40375d8fe48bdb603318678c5119863c6a67617562ecac6b8723b5a941140821c3760687dae4bfc671826fe084296704a402d2722aae32b6f32fee07b4d16e88dd62501ec14c9e206fbcca075e17f00b11db7756e8dab38d060000",
    ],
    [
      "ETag",
      "gW0jqu4JlLJAmjCKvIzh+A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      jobId: "grouparoo-job-3-1636475677951",
    },
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
      "22efe368d3d25f69a56a746d80486dca9214b44d53e43897cc90c6c5764080fabfefe250069b049f62fbdebb77f7eef2446e7899920949787e5b817cf8742d12724440d31c5f6f1f175ef8f5f8e2478f6ffc4176e5db9fd5d9fd748a085eb314ddee0a68295149066ab209dbb914d58e4a215a98a8d56b7587bd617f34188e46e34117690a8a6cc9cb1b24ffd67aa726b67d906ee742e405d01d576d26b62feff6ddb1bd93e21a9856f65b451b4594fdaee6974230aab928a79b10f52b0532862de50556f0979826276f33b739ddb67304df710694315195baae0a533051663cafa4c94a264fc454f9ea404277e9ce238b89a2da967149b77064a554d3583fecc03a0dd62bcbf34fd7c16a16796b3f0ee7e7ee6ad69eaf979b951f5a57e76ee05a9a260518ae35b54ecccdc70beaa7a0342f8d7a543fd7cacffe78ff0fa526a0b48226188f3a43da753ae3244b462c737a8324eb409238c968407b49878dfbd04f13a0c833a286454b518e7be3be933a2ceeb0d489fb7d07e28439c3d819f606c068d2658c91fd11b9975cc382ab9d50bc71885c055ee4c651b0f1e7b3c8352d64b42af4a229ac6ee0758d1a1b44d03b3dedeb2817a854dbedf9911bcce69177e936135e424ed943788b33ce68a100d154a2791ae44aa46818f1672b77816033b18b435091c9cf27527b5e57f1caf2177a8403accbd5e64bc228f0fc3353ce0171498bca40ee9a0391c0844cb1e6fd2fc4e1863639c8b78d1b7c27cd5300194828d9c7b344b0097cf49f1db61ea1b8f7a8a234de717198aa3598846681b8e9f5c0c6bde8f489014bfd6facdbe90e0f96d539ea8cb085523f37d46c3df6d98855ea0584419cbd6facdaff",
      "01eb2bf4e473040000",
    ],
    [
      "ETag",
      "qzDISB2PZ3iUN5fWN/+sGw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1636475677951"
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
      "02ff8d93616fda301086ff8bf771410201618bd40fb0d21529401742a569aa22d7bea4664e2eb31d2a84f8ef3da72d9dd649e997e4eefc9c72f7facd91fd56956411bb57c59f06cce15301ee870f12b08d76965e35561658c0c0f182c89f57fd5d7fb94d6ff5674c6e97c3e452ead5e3c50511563c40c9597464b9022d2d8b7e1d59c54ba03681ba29abaccd02e60eb52f6ed264b1fa4e7989d2e7ab6d1c4f67f19c9d8273a3e48e672dff81b6bb53c076789f400e062a017e96dae00e845bf8352d2f6b0d3d8b8d1160590bb70785c1a6e606b14795deb0370887e168320e2793afe301711a05770a2b42b71b1a8f39745c27f8484bb2c19008d3c6b470de3ef75457b25dc4878b551a8edaf9fe06b810d8542eeb047365ac7b16ef157c11e15f52f30f8274534a77410554124c17a5ea8c4b69c0da4e126dc6ebfa8ccdd6ebf8bd2a9534a86437b8571d8076fb337015afa7ff9396fcf5a6d5e5349dbf23ac23d79c9174b19c6fd2e9f2c673772f46981d1cd81b83642a0bde4f83fee8cb7812f69f2df60dbdede83b91330d044c70fa53ae956351ceb585d3132ca5499787030000",
    ],
    [
      "ETag",
      "YF0j0MUTVl+oRVM3RDdlNw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
