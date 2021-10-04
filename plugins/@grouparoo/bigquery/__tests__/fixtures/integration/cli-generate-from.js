const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1630609639087";

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
      "4b7282300000d0bb646d194044d21d080808884a5bea2613307c0a428420c64eef5ea7d7a8ef0eef1be02c23c38058579316bc028e652864c2866a86395541781179eb90b7e3ed4395eb7d20ea9a3f36b44425379aceafb234414d2e7b63ea1d1c66751dba77cec54efc49ca4cedaa4637251f0f916d3785ee9bf35a2e70f0b2f1788a93843058d9dac2d96da37ddbce272cb571ece44b4656534f711820dbaaf049140987e6b175e3ab4663a83aebce8b0b0b2fe8b6419ffaea6c4eeb5a8ab64c4964f7fdeca6c57a377e293cd572780a736ad56979a796328a285a0a4f4fff17980172a3554f06543db6cf1710cec05f7dc438258fff06c13de9c1cf2fcd6190b219040000",
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
      "Thu, 02 Sep 2021 19:07:20 GMT",
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
        query: 'SELECT "grouparoo" as message',
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-1-1630609639087",
    },
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
      "ed",
      "6b",
      "9b4018ff57caede39a68a2311a085b49dd1042a0c66c6c14c2ddf99cbb543de39d2da1e47fdfa326694ba1fda6f77b7bde9ec9832c5332234c66fb06eac3979d62e49a80a119befade6e31325f13fd8399bf6134d6e3fd22be9bcf91215b95a64595c340aba6e6a0679bf530ab5553d15aa9011a0d468391e7d89e1d784e60fb539469c8c552960f28fe674ca56796758e1e664a6539d04aea2157c5e5dd7a1c5b55ad76c08db6de265a18a2ad0f33bfe58a53235539dfac31bfd1506fa1a032c70a5e8429fbfed679286931cc90fc283950ce55539ab62ab4e0aa14326beace95cc9e4957e5ab0fb20e97e122b9ba7f09b82757545f15a035cd003d52d046969d4342590eadfad463f47eb0ad801aaaa107b753dba323df0e9860532e7c67c2840d8cf96c3aa10eb379e0829b32a0a833ad7ba7a2a52a3d21fc34757d3a9aa4b6ed4c0540ea32cf0df0631cd8c27138f37d141eafc9532d0ddc4a5d292dfb4ec9ef384ac26d126f568b9b24ecda10b4c9cd6d5f5cdbc4eb3a0d3689a40ffa3ab6a85498d48e2d5a25617cb348a25f61bfa92564941fd67bdc95a0b906a4e386934385f322779b30fe43faa71804d450f2cfe788e40ef8ec4ecf578354bc1b4cd106ff71695cb719bc867e79b2686b39ab5d7b1a38a423d7e61d168c6dc42ed7d23a4201a53935d45f0d399ec21a7d212188335f45ab9f88fe07eebc686eb3030000",
    ],
    [
      "ETag",
      "86jC1t+TsFbtZEI2s2qCRQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:07:20 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1630609639087"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff4d90414f83401085ffcb782d09a4090a490fd6988a2155a99c4c0f5b1828080cdd1d6a08e1bf3b4b3d78d99d997df3de979de0bbea7208e154959701f57857227fd8224133346ce4eaa933082b4056a528d94bdf2ebbd77474bb7a88ae84e7dc0bcacd4614263b63ab209ca0a8b0c90d845f1374aa45596bd118555a1f1e7b3b387c26d17e277d4bb9edf7691c3f6ee367988ff30a6a3a2558a0c62e436bd86baa31e3c8b21ad5f60d3a86069da18145bc3c949a865e692247268ee778fedaf5ddc05f07eec3bde81aca1457d489343d80a430b16a12fa1152f044a09752a08be5bcfef7b45cc7bf95edc868de3549bc419becde289ec892b110b31e700599921f79a9f8d6cfbf7aa61af96e010000",
    ],
    [
      "ETag",
      "t1UOqGJUy0njuIvoehd19g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:07:21 GMT",
      "Server",
      "ESF",
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
          "select count(catalog_name) as __count from INFORMATION_SCHEMA.SCHEMATA",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1630609639087",
    },
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
      "db6eda4014fc15b47d69a5800dbe8214b594b8ad25200a98567db276d7c7ce26b6d7f1aed3a2887fefb10d3451a4e409b3337366cee589dc8b322133c244f6d040bdff702719b920a06986afc66a59665f0be376bf742cfbaf4ab812decde5253244ab52b4a872182ad9d41cd46cb71d65b56c2a5a4b39c442c3c970ec5aa66b4e5d6b6afa1eca14e4e95294f728bed5ba5233c338598f3229b31c6825d488cbe2fc6e3c4e8caa9677c0b5325e3a1a68a28c373d3fe792532d6479b9dba27fa3a08ea1a022c704ff8509fbf2b2f248d0629421f95170a09ccba6d46d2a2cc165998aaca9bbaa64f644ba94cf3eda2631eca0137d44779acb2c2e69019f06540de2b80306692d8b41b8fe76bd59cda3f07a1d6f173f82d57cd4ff4473b44a4069517646116539b426c75184afe7df0ad04c410fc69ee9d2b16f4e59ca3c9efa96c3521318f399e7508b997c6a839d30a0a8d36df54e454b59dadcf22763f0e2b14b9dd87626494c99e3c49c7989455d9e3ae9841c2ec89f5a68b812aa924af4c320bf366114c4d166b75ecca3a06b21a54daeaffa606d03cf336a6c10496ff474685121d1a99d6cb88e82cd7c11853f837e994bc828df6f1f709d29cd15201d8f20da57382b72b30b36bf49ffb481146a28f9fb33447207bc77caa7c3422a9e16ba288dff71615cb51ebc867e71a268b39cd4f6d8b65dd2916bfd0a737c1fb1f341b515a180521f1bda06cb601191c3d1ac5167128238f375b8fe8ee83f75c7c94cd6030000",
    ],
    [
      "ETag",
      "/MLngBm/hyL534xsdcsi7Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:07:21 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1630609639087"
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
      "c2",
      "30",
      "14",
      "86",
      "df",
      "e578cb924d64c0122ec02c48b2109c122f0c21a59ccd41d733db4e9c8477f7747ad39efcfddaff4baf70aef411123854e5678ba6bb2bd13dfb2147db2a67796b485b8401a0132593f1b9b97c17f4368f74fa536cd468998dbbf96cc684951f580b48ae5054a88e1692f72b6851235fdbef25b5da31e5bac607abf56bba4c730e6a3afa60bdcdb2f9224be1b6bb0de044871c0b34a825fa171b4327946ee565ada81b8581a5d648b4d0c3fd4169a86d84210a3809ee83281e8671388d87d37032664e9114ae22cde8f605b8c591132aa70bab42c480e947b62efaf5ab8fd967f78f2e3a877663886b2dfac6287c988cc671f827f1485eccb1b0332d0e400afe91a7ca41520865f1f60be46048ba6f010000",
    ],
    [
      "ETag",
      "6kpwxfoWA1nEzfPl5GL7yA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:07:22 GMT",
      "Server",
      "ESF",
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
      "ffedd3597282300000d0bbe45b1d5621fd6b5ca8c4c10584c00f1349b40104342e0d9ddebd4eaf51df1dde37a045c1a5ccaf6dc51bf0061435e0a818e1ce45d38798447767ea6566325daebd39b735eaa03356e79acd297644eff6ba85839225385ba3c23465a46679f549b63167410219a11f9abaab302590c63035eeb6193a1d3c6654964c4e528f084856a7d649162e37f2f0d10c6fc5de207dca3262cba177d0eb26f1dff59cfbf5d6d08ed79d5393c46dfa60b5b4a25be1a9b23dc6cceb25130b8cdc72bc379762a3636b9d06e850c5bb5367771b345bb4bae187e3d1cbcbff0506807f75e2c2652e9edb4d1bc201f8ab9f5f55c79fff11a7177e013fbf4528271919040000",
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
      "Thu, 02 Sep 2021 19:07:22 GMT",
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
      "4b",
      "c3",
      "30",
      "14",
      "86",
      "ff",
      "4b",
      "bc55c9479b26855d280c1c1b083ad885c8c8b2b3aeda353549d131f6dfcda6db85132cb5bb0b276f1fcec339341bf49a977394a2599ebdd560d7175ecd0a18e5cea34b045e65e1ae7f6fe8c2b2c9c7e39dc6e37818bbc9709ef57a21b14f3b943e6d7e078548beab3ab5aa0ab872a6b61a5ceac1f96ba5b5a94bef0e980758808552034a37a8b2e605b41f9c7e1ce273e59583afcb1dea40d8178ed86da8aeab4043e39bdb513f84b405e573538ef3d5ae4c38c55c321a614a5888b770d0ca76ddff1ef977efb1a4440a4e2491b25def4b93bd2bebddb476d0b9c50f78131f8c71cc05178cb6f309cd2ef202ba3639629bee931411c3c9ff1c083e934500379885489284711161815b7a84f33274d3f9308edc2616824731891349e276165fb5e9b9644ef00d360c53ce084ba288b4dc305719dbf93ff71bda68b3c46ead284fc24c9e43de78550c3cacc22322b69fbd49e2d98f060000",
    ],
    [
      "ETag",
      "EOo2fr3WxSHc0T5K5sWKdg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:07:22 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-3-1630609639087",
    },
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
      "6f9b3010fd5790f7b5f94d08448ad628a56ba6846c40da4ed3840c1ccc2d608a4da6aacaffbeb369ba5695d64fd8bef7eeddbd3b9ec83dab52322731cb1f5a681e3fddf1989c119034c7d7f2d6b6d2e9ea0056e05b375fbd7a739b8d978b05229862095ad605f4046f9b04c47c1ff4f386b7356d38ef61a2dea437b226436be858136768cf9026a0c836acba47f26f296b311f0c4ed2fd9cf3bc005a33d14f78f9f23e388c0775c3ef209162f05671802262f05fcdcf054fa864bc5aec03d46f05341194941558c13f621a9fbfcddc67b4ece7083eb0046892f0b692aa2a4c91f02a6379dbe8ac64fe447495af0e247037ee2a34125eb4651555b4843323a59246f2b106e3d2df6d8db577b9f3b7cb70bdf3a26075e56e97fdd56eb3df7a817173e5faae21695c80e61a0be35cdf3cbca07e0a42b24aab87ea59293ffbb37e3f14454069015d309a0d2d3ab2874e9cc5b324b327d3381b421cdbf16c4a27f130714c30d31828f2b4a866d18a57d3696ada686c04e391139963d38e6c0b9c28a5a695382313734cc9f18cfc6998840b266a2e58e710b9f1d7a11b85fede5b2d4357b790d1b690175d61aa81d7354a6c1041ffe9e9a8a28ca392b27bed85aebf5c85eb6bb79bf006729a3c060f38e38c1602104d1b344f42b3e5291a46bce5d6bd40b09ed8b7535090f9cf27a23c5755bcb2fc851ee20055b9527f4910fa6bef8b2ee784b8a645ab2187eea0dac858a18a3efe4220ae6897847cdfbbfe0fd23df990410355f2f13011ac031ffd68a7b547282e3eaa088977dc9c44288da4816e83986ef6c436c75347ffa69236f25d6c663a27cf540e95114aa8e47343ddda639f9d582b5e4018c4e17bdaabe35fee658a5d74040000",
    ],
    [
      "ETag",
      "mX86d5Cve6SR6WJNpLXf2A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:07:22 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1630609639087"
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
      "8d93614fdb301086ff8bf99a6ae90a0122f1a1dd0acb145a96864d624291b12f9999e3cb6ca75555f5bfef125837c1a4f025b93b3fa7dcbd7eb3633f95912c660faafad582dd1e55e0bf744106aed5ded1ab41e380050c3caf88fc9627f5bb85b6ed5df9f9fdc957c5379becb2bab820c2891f507316ef58a9404bc7e2ef3b66780dd42650b7b529fa2c607edb74c5559e258b2bca6b945dbeb84dd3e92c9db37d706894dcf3a2e7dfd076bf0fd8233e6450820523a09ba5b1f808c227dd9a8ed78d8691c3d60a70ac87fb83ca62db708b38a2ca68321a4793300acfa3c97978764a9c46c1bd4243e8ed8ac6631e3dd7196e6849369e1061fb98162efbe79aea4af68b7461b2c8a3e37ebe7f012e04b6c6178360a9acf34fe2fd019f4578496afe46906e4ae921a80223c10e51aa29b894169c1b24d115bc690ed86cb94c5fab62a4452587c1b51a00b45f1f80cb7439fd9fb4e4afbf5a7d9ce6f35784f3e49a039227d7f3553ebdbee9b8fb6723ccb61edc8d45329583ce4fe3f0f8ece4340a9f2cf6013bdbd177626f5b0898e0f4a77c529ec525d70ef6bf014fafa8da87030000",
    ],
    [
      "ETag",
      "WTIm/NlruZfJ25ViawwRFg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:07:23 GMT",
      "Server",
      "ESF",
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
