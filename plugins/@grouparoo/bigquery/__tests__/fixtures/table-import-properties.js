const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1625184933653";

nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", { grant_type: /.+/g, assertion: /.+/g })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff1dd0db6e82300000d07fe9b331dc44bb374040908b42098c970648651da0d08202cbfe7d669f70ce0f28aa8a708ec74743eee0032c8504b7d5f6dc1f74bda6dc6857763c29777b90229491b8f682a7aa65f34d9b95da7d599d811eca24e662434cbdfce27b6cca0f442bbf81cbecb6610ad15e2adbb60ceddd2d1ec33ed4a01c5b2aa2c139723a2fa09e6b1a652cd0082784df7cdf19d5d549f667411cac5317d55a6a43f4cccb742e78ac5e5f781587b933bf5112b868facc2faa9d18d5e13e3d2fee09eb813372aa14574db372d8060d4f5876742a697599c704076c00997bca08c7f4cd9577106ec0bf1d8f4b4fde013a291861e0f70fe2ed5c3f1a010000",
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
      "Fri, 02 Jul 2021 00:15:35 GMT",
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
      jobId: "grouparoo-job-1-1625184933653",
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
      "000002ff85535d4fdb3014fd2b91f738da26b469da4ad5e84a808a3665690a9aa62972dc9bcc90c425769800f5bfefdaa11d08099e62fb9e73cfb91f792677bcdc90114978765f43f5f8e55624e48880a219be5e464f570b512cafe960fdf5c9ee9e4feebe3b93f118115cb3242db639b4a4a82b0672b45eb5b34ad45b5a09d1c2442da7e5f48f5d67d01b76bb7db78b3409793ae7e51d92ff28b595a34e672fddce84c872a05b2edb4c1487f7cec371675b895b604a76de2a765044763ed4fc960b461517e578bd42fd5a42154341798e0efe1337c9c9dbcc6d4e8b7686e007ce803226ea52695798828932e5595d99ac64f44c8ccb5707b2f2e7fe34b298c8eba28c4b5ac091b5a18ac6ea710bd659b85c58b3e06c192e26d16c19c4abe985bf98b4a7cbf97a11acac9b0b3ff42d45931c0cd71a5b27e616e005f53720152f8d7aa49fb5f24b7f66ef87a209282da109c69edda7cec01e2669e2b174d07593d4862419249e4bbb89cd863de86d12a0c833a286454b51bac77ddb495d3b1ed89e1df75277180f3d8fc509d8a937703dd7d950b23b227f2baee094cbad90bce910b90967911f47e13a984e22df9490d23a57a78d315dc06b8f0a0b44d00735ed74940b54d2ed9e05911f4ea6d1ecda6f263c878cb2c7d53dce38a5b90444d30a9ba7a05a880d368c0493857f8a6033b1ab7d5092d1af67a27bae5dbc6af9811ee100b55d65be641585b3e0dcd8d923ae695e1bc84373d065a43cd7a677bf11882bda24213fd67ef893344f21a45041c93e1f26824de0b31f6dbff608c5c54715a9f08e9bc3a4d66015341bc44db10776bf3b34bfa9a2957a17737beebe673a87ce080594eaa5a066edb1ce46ac9607100671f881e9d5ee1f7a2afde274040000",
    ],
    [
      "ETag",
      "KTzPMomOVa8U+z03GAkB1A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:36 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1625184933653"
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
      "936f6fd33010c6bf8b799b8a86fea144da8b14ca1a91b6a3cd10129a22d7be641e4e2ed84e5155f5bb73ce46410c297b93dc9d7fa7dc3d7e7262df552d59c4f6aafcd18239be2ac17df6c1166cab9da55783b505163070bc2472b477afef314cbe5c2f972b21279f66f075185f5d1161c53d549c45275628d0d2b2e8db89d5bc026a13a8dbaacebb2c60eed8f8e22edb26eb6bca2b943e5fdfa6693c4f17ec1c5c1a25773ceff817b4dd9d03f680fb2d1460a016e067690c3e8070895fd3f2aad130b0d81a0196757077501a6c1b6e10075419848370fa6612cec6ef46a3e964449c46c19dc29ad0db1d8dc71c3aaeb7f8939664a1274c17d3c245f73c505dc96e111f26eb6c3aeee6fb1be042605bbbbc172c94b1ee51bcdfe09308ff929abf10a49b52ba0f2aa19660fa28d5e45c4a03d6f6926873de34176cbed9a4cf55a9a54125fbc183ea01b43b5c808fe926fe9fb4e4af3f5a7d88b3c533c23a72cd05c992d56297c5ab1bcfdd3d19617e74606f0c92a92c783f85c3f16cf2763a7cb4d87bf4b6a3ef44ceb41030c1e94f592ac7a2826b0be75fc1606cb487030000",
    ],
    [
      "ETag",
      "3bt/ho1IVGHHMcd5K8eX0A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:37 GMT",
      "Server",
      "ESF",
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
          "SELECT `first_name` as __result, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `first_name`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1625184933653",
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
      "3014fd2b91f76593fa4e93269510eb4a06914a5ad214c6a6a9755c2733a471b01d5885fadf77e350a04302a9526adf73ee39f7e14774cbf2351aa298a5772515db4f373c460d44154ee1764a3a7331cb7e4eee7e9c09351ea489f5f7f2e2e80810ac6249bc2932da94bc1484cae162de4a052f0b2c386f42a266afd9b57b56d7e9bba6695b26d024cd9209cb6f81fc47a9420edbedbd742be53ccd282e986c11be79be6fdff7da85e0379428d93e546c83886cbfab799c718215e3f9d1620efaa5a46249379865e0e085b88ebf1e666e31bc69a500be678462427899abca15a4203c4f585a0a9d150d1f9176f9ea0f9a7b136f1c19ab8409a99639ded09581a5b15c0a2acb4c358c155b3fdd14b7c6f7707a6eaca0c2846554ae8cab332ff48c1ae307c62208bc79647c3efe629c86d3c5ccf876ad638d83fce06b4da562b97615e138a395a3a7bef96f875511b0c292d6c1e5a063e3aed371e3241e90c431ad38e9d03876e28185cdb843dc3eedaf638a81a7aaec9a85739e5b34e95abd5e62f51da763e2aeeb90d8ec996b6c992ec61dea62c7b66db38f760df42098a2274c165cb2ba7be82af4236f19858b603c8a3c5d4682a14927b5b9aa88d73e151409a077eada5551c641a91a851f445e381a47fea5574f7f42534cb6f33b987f823349018d0574505171ced7d034349bcefdc89f06a30930f448677b8444c35f8f2f84685be82e2bfd45a3301c5d03070b81b7ffc5c0870d2dd8bd92bbc459a9211aaf4f75fefb3a80ba50cbcba97770b2d1eef70e7e0d043b5f6ba18b85175ea3fa2aa4091534271f6f018075e0a397bb7f47008597042a52c119568ec84a83085aaf1edb68ef7bf6c0ecbb4883857a13ebbbdd7d8fab1c5546baa1b97a2aa87e47ba",
      "6b55a894cf2008c2c6047e700ad17f50410410c5040000",
    ],
    [
      "ETag",
      "Oc0SrPlZLqXHrtC7gf5xVQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:37 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1625184933653"
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
      "00000002ff6d51614fc23010fd2fe7d72d61c05097f04160c125b8e080f8c11052ca6d14b675b61d6612febbd7699444bfb477f7debbbe979ee128ca1d04b015d95b8daab9c9d03cdb22415de746d355c9522338808665c47ceac49348ed4b7d3b7d199ffc8f6a319a77b2e190189aefb160109c211598ef3404af6728598124db6c54bb9168a6a9ec64b14ca2784a7d2177b68f57b3d9c36816c2c5b95255c75f45142fc36998fc27595f1c38c86d82292a2c395a13959207e426b2f9342baa1c5d2d6bc551434b6e814cc9ba624a4a97266ed7f5065ddfbbebdff77a03bf47bc5c7266842c89ba5a903530d2b03c91ef940e2c41b525054ddbf344e350096c53d8c66bcd5dc3132cc50f3cf8038f1917f9d582ae65acbf1f1e3506f55c490aa1d1faf7fcfe579ab1b4090d2537aa460738a3df7814068294e51a2f9fd4f676fbeb010000",
    ],
    [
      "ETag",
      "M0NDIrhns7GWCv5zpSBP0g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:38 GMT",
      "Server",
      "ESF",
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
      "0000000002ff1dd0497282400000c0bfcc59adb04b6e80c31a089b1472a15826030c5b800868e5efb1f284ee27c88a02cd73ba0c04f5e01dec192d9e8a93359e65196364f592fc10822cd630f5c3189c972f9f784ac8c0eae54ae02675907394906814838a2250505734f7b66282dd54ccd011ac2012938a94a125846ff0d830c9dd67459bc0daef6cc807db179dbba2e97e283535389ec1aba5802ee77855d36693ecaa6e718c7d0fb73dd507259c765ac9b8638cae44f78d96bdd055c4c3adcdbdebadd5b864ad69d5d477778939fb3b77f4878e89b2a454a466b77410a80e1c00dac67a42735abfb80c278a07f06f4f977d44af001965139ac0ef1f752586471a010000",
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
      "Fri, 02 Jul 2021 00:15:38 GMT",
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
      jobId: "grouparoo-job-3-1625184933653",
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
      "ff85535d6f9b3014fd2bc87b6d4212208148d11aa574cd94901648ab699a903186b925986293aaaaf2df776d9aac55a5f609dbf79c7bcefde0053db02a435394b2e2b1a5cdf3b77b9ea23344252ee0d5dd5f72d3f2f7d6dddebee6b9f3f3a61e5d3fcd6680608a25f0ae2e694ff0b621544cb751bf68785be386f31e24ea59bde178e40c5ddbb3acb163014dd0325fb1ea01c87fa5acc5d4348fd2fd82f3a2a4b866a24ff8eef46eee4766ddf07b4aa430df2b9a2022cc4f35bf979c60c97835db46a0df0ada24748759090efe13b3f4fc7de63ec3bb7e01e03d231413c2db4a2a579082f02a6745dbe8ac68fa82b4cb370714f92b7f111b8497edae4a2abca3674686254ee4734d8dcb70b33696c1e5265ccfe3e52648a2c595bf9ef7179bd5761d44c6dd951ffa86c4694935d79819e7fa16c005f4332a24abb47aac9e95f26b7f961f87a208202d68174c2683311eba032fcdd309c95dcb49f3014d53379d38d84a07c4b3a99da514034f8b6a16ae7885bd6c9c63db4e46f9304f6c371b24ded8b5936ce2654e967a43dbc1e870869e1a26e905133517aceb10ba0b97b19fc4e13658cc635f9790e3b694179d3155c05b8f120a04d027351d5494715052ed5e06b11fce17f1f2d6ef26bca20526cfd123cc38c7a5a080c60d344fd266cd3368180ae66bff02c07a62d7c7a040d3df2f48f55cb978d3f2133d86012abb527f511487cbe087b67344dce2b2d5907d775065e4ac54a60f7f00082bda2541375b3ffc85baa790e6b4a115f97a9800d681af7eb4e3da0314161f5484843b6c0e114a8334b4db20a68b3db15dcb1a200d6ee48798ad339fd65d65a43b5ac9d782bab5873a3bb1569c401084e107ba57877f59271f8c74040000",
    ],
    [
      "ETag",
      "8vFo/3Ev3Wv4Pof5JQp2Pw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:38 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1625184933653"
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
      "000002ff8d93516fda3010c7bf8bf71a3428907691fa002deb9052e842fa3455916b5f32778e2fb51d10437cf79dd38e4deba4f425b93bff4eb9fbfb9f03fba18c64097b54d5730b76ffa102ff350419b8567b47af068d031631f0bc22522ef4f5fae7eae6ecea63164f9ffd1077e7e9eef2920827be43cd597260a5022d1d4bbe1d98e135509b40ddd6a6e8b288f97d138a9b3c5bae6e28af51867c759fa6b379ba60c7e8d428b9e745c7bfa3ede118b1277ccca0040b464098a5b1f804c22fc39a8ed78d8681c3d60a70ac83bb83ca62db708b38a0ca603c18c567d3d1c5e4d3781c4fc7c46914dc2b3484de6f683ce6d1739de18e9664a340d82ea685cbeeb9a5ba92dd22215caef278d2cdf737c085c0d6f8a2172c9575fe45bcdfe0ab08ff929abf13a49b52ba0faac048b07d946a0a2ea505e77a4974056f9a13365fafd3b7aa186951c97e70ab7a00edb727e073ba9efd4f5af2d71fadae67f9e20de13cb9e684e4cbdbc5269fddde05eee1d508f3bd077767914ce520f869349c5c4ccfe3e18bc5ae30d88ebe9378db42c404a73fe58bf22c29b97670fc057612c2a987030000",
    ],
    [
      "ETag",
      "dElDOzNG2C/R65qt0ow7Lw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:39 GMT",
      "Server",
      "ESF",
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
          "SELECT `ltv` as __result, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `ltv`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-4-1625184933653",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8553fd6fda3010fd5722ef974de323902f40aa3ad6665b261aba10faa169022738994b12a7b6438b2afef75d9c52da556a25a460bff7eede9def1ed09a162b3442114d6f2bc2b71f6e58845a88489cc2ede77b8bdedffce446bebddd3857833bb9bea2774747c0a0b54ae0bccc485bb08ac7448ce6b34eca595562ce581b02b5cd76cfee5bbd8139340cdb32402648964c68b106f15f294b31ea76f7a93b296369467049452766f9d37d77d3ef969cdd90588aeecb8c5d4822ba6fe63cce588c2565c5d17c06f92b41f882e49866e0e0205c455f5e46ee509c7752206f684c701cb3aa90b52b0811b322a169c55554347a40cae5b33f68e64edc93505b6672b3d4b0d0160b4e4495c996b6a4abc79b72ad7d0ba667da124a4b6846c452bbfce106aed6703c5f9bfbbe3b0bb58fc79fb4efc1747eae7dbd5658ab090c4e5644485a281f218e32527b78ec94f7fa796a01965890065c38ba8d7b037d182591132703c38a129d44d120722c6c447a3c3489b98a08069daca32b152ea07a071b38b16c7368eabd7e8fe87acfb06cc7301d67655871440ca76f1a7a0fed5ae88e53494ea92899a04dbfd065e085ee220ce6fec9387455190986ee9c36e6ea229efb94502490dea86b57a39441a6baf99e1fbac1f824f42edce6bd2724c5f176760b2f9ee04c1060638e7322093f632b681a3a9fcebcd09bfae30928d4239eef19028d7e3f1c04e1b6545d96ea8bc64130be060de61c6fffc3c0876da2ddee59ba0b9c558aa2f8ead4c4df3400aa5b7638f55f9c6cb4fbb3835f0bc19437b9d0afb91b5ca3e62a2009e1a488df9f02202be0bd5ddd6f0e506177208b907086918b459d23e6a4193d9a2bef7bf5d0d01da4c85cbec24ce849ebb03175449293423e16d46c8eea5a0d55e28904204c8ceff9df01fd075b721c37b7040000",
    ],
    [
      "ETag",
      "+x5ixjJr3myqv7X8wtkXiw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:39 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1625184933653"
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
      "df",
      "4fc2301080ff97f3d18d38f603b684073153891375c29321a46cb739d8d6d1761224fcef5ea7418dbeb4bdbbefdafbd2036c8a3a85005645be6d51eccf72544ffa10a36c4b25696b782d110c40c57222cfd783f9d6f1de533714f27e73e7976e66ef46232264f28a1583e0005981652a21783940cd2aa4b6e552743712a6f68dce5c470f97330a2b9eea703a8fa2cb7114c2d1f8d1d46cbe1b26d3597813c6ffb52c8e06acf92ac60c05d609ea191ac1d798a889d693ac6a4a34256f4582123ab82be482b70d139c9b94311dd3f2faae35747cdbf65c9bb892274c15bc2674fe4ca381e28a9531df911c68407447f2ccbaf58dd27dd7ef59fdce43875637de2f6060f7fce109f0fe00bed3b3bd53bdafeb8bafa7c77b85f25170d290a80d2cefe2d3e78a6b4745ee4ab46840c2e83b6e0b0541c64a89c70fb26250a7ec010000",
    ],
    [
      "ETag",
      "+j7Uq46zd5ErsMkK9l5f3w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:40 GMT",
      "Server",
      "ESF",
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
      "8b08000000000002ff1dd0db6e82300000d07fe9b333208ecbde28ea2020daa8119e1a84ca4da0b4c55696fdfbcc3ee19c1f90e539e11c8ba1253df802af6ce52cf365486d08cbba38cbfad657523ff03c5c3b290b3b7f0c062170258f2657db5b3c9f8d03ae903bd195eb7edb54d32f8f5678fd462f8bf9d5c69e6a9be8d8797a9732da5833432682be35473cf21f9edc7d6c8bf209dd754ad954172e0ec464c45a5ee5579ab6aacf8c5314503199d5063eed5ea389e2eb66907b784936195fedbc5853ca52f13c875d02aff8b42fd2fad42374485088c69471c790f7c886f7f1b8c7600188a235231cd76faef1e9380bf06fc7e245c93b00928c11067eff009d4809ed1a010000",
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
      "Fri, 02 Jul 2021 00:15:40 GMT",
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
      jobId: "grouparoo-job-5-1625184933653",
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
      "0002ff85536b6f9b3014fd2bc8fbda3cc983448ad628a56ba4846c84a4daa609d9e6c2dc12ccb0e95a55f9efbb364dd7aa52fb09dbf79c7bce7df0486e459190296122fb5343f5f0e94632724640d30c5f035a05e98f3e2bf67b39b989ee699add17d96c860861588a1eca1c5a4ad6150735dd6ddb5925eb925652b630516bd8ea8dfac39e3798b8ee68e8224d419eae44718be4df5a976adae99ca4db9994590eb414aacde5e1f9bd73d7ef9495bc01ae55e7b562074554e75dcdcfb9e4540b59cc765bd4af1554311ca8c8d1c17f62c2ce5f676e0b7a686708be131c28e7b22eb4718529b82c5291d595cd4aa68fc4ba7c71205b7fe52f2287cbbc3e1471410f70e62454d3583f94e05c869bb5b30c2e37e17a1e2d3741bc5d5cf9eb797bb159edd6c1d6b9bef243dfd194e560b9cecc39b7b7002fa89f80d2a2b0ea917936ca4ffd59be1d8a21a0b48226188fbb23daf3ba1396b2314f3d77c8d22e30e6b1f190baaccb270318240c28f2aca865d142168c33e6a6e0c583311fc703eaf5626fe2f1b83f602e24bcef26ae4b8e67e46f25345c08554a259a0e91eb7019f97114ee82c53cf26d0929ad737dd1183305bcf4a8b14004bd53d3d144854425d3ee6510f9e17c112df77e33e11564943f6cffe08c539a2b4034adb0791aaab54cc02cf67ced5f20d84eeceb29a8c8f4e723313d372e5eb4fc991ee1008d5d6dbf641b85cbe08bb57342ec695e5bc85d733065a42237a68fbf10882bda2421df767ef89d344f21a45041c13f1e26826de0a31fedb4f608c5c54715a5f18e9bc395d1e015341b246cb127f6a0eb4e86c4822bfd26369c8c4e3d33394c463840a19f0a6ad61eeb6cc46af50cc2200e3fb0bd3afe0340e4983574040000",
    ],
    [
      "ETag",
      "NarNfZ2bnVVo9jTxafgxng==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:40 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1625184933653"
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
      "02ff8d93616fda301086ff8bf735486540d646ea07d2b10e29400ba93469aa22635f32778e2fb31d5684f8ef3ba71d9bda4ae997e4eefc9c72f7facd81fd5446b2846d55f5ab05bbff5081bf0dc11a5cabbda35783c6018b18785e11799bd6fe315e3c7edba6572bedf0623636d7d5e525114efc809ab3e4c04a055a3a967c3f30c36ba03681baad4dd16511f3fb261437f97abebca6bc4619f2e55d964dd36cc68ed1a95172cf8b8e7f47dbfd31620fb85d4309168c80304b63f101849f87351daf1b0d0387ad15e05807770795c5b6e116714095c164308c3f4e86e7e38bd1289e8c88d328b8576808bddbd078cca3e77a8dbf6949360c84ed625ab8ec9e3baa2bd92d12c2f9328fc7dd7cff035c086c8d2f7ac15259e79fc4fb0b3e8bf092d4fc9d20dd94d27d50054682eda3545370292d38d74ba22b78d39cb074b5ca5eab62a44525fbc19dea01b4df9d802fd96afa96b4e4af7f5a7d9ee6b35784f3e49a1392cf17b34d3e5ddc04eefed908e9de83bbb148a67210fc343c1b9f4f3ec5674f16bbc2603bfa4ee26d0b11139cfe94afcab3a4e4dac1f10f7c4b25a287030000",
    ],
    [
      "ETag",
      "QBmtx6MxXbBCOlso9E4nGg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:41 GMT",
      "Server",
      "ESF",
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
          "SELECT `ios_app` as __result, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `ios_app`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-6-1625184933653",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6fda3014fd2b91f76553792540784855c7da8c46a28186d0aa9b26709c9bcc6b8843ecb44315ff7d37099476955a0929f89e73eeb90ffb89dcf3242043e2f3689343b6fdf447f8a44640d108a302acd9f8f1afdbdab89769ae9f8c4f36fcc7f5e9293278a192749dc6509722cf18c8e162de883291a73413a28e89ea665d378daedeef0cda6db3db469984389cf0e41ec5bf954ae5b0d93c58372221a21868ca658389f573bcf96034d34cfc01a664f3b563134d64f35dcfb35830aab8484e1773f4cf25644b58531e63054761e07f7d9db9c1e9ba1121f98133a08c893c51455598828924e4519e9559c9f0899455bef843e6d6c43af7b415177249d374a551a92d9719c83c56350c07fb487aaf7d77a757da0adb0b790c72a5dd5e5aaea5551cdbd1168e63cd3dedf3d9176dec4e1733eddb5d89d58ec9b1a200a4e249598f47fd188a5af613b3dfaea91050452554e0b2d732a9de6f0dfcd0efb1b0dfeefa610b7cbfeff7bab4edb7d8a0039dc0078a3a55642f553411096d758d80fa8c9aacad338376986fe826f480f66960f66060f841df347db2ab91c78c2bb8e0321592577323b7aeed594bcf5d38e723cf2adb08294ee8a22aae68e2659d0a9b44d23b7ded0a940b742a96603b9ee58ece3dfbc6aaf63e8188b2ed7c839b0f692c01d934a36b50905d8900874666d3b9edd95367344145b9ccd98121c9f0e7d351e06dd372caaafc9291eb8eee5043b38c6effc3b00eb34376bb17763734ce4b4ac92f4f55fe870a203af6723c19af4e26d9fddae1af46f0b6575ee47a61b977a40ab910420609fbf81620b9043e7ab3871784547c43e822159ef1ca315978b00caaabc7d765ed7b7547ef182d529233f506eb9ac661c6458e2223ac2151fb86aa17544ead8072f94c42106f8c633b6344ff01ce2b6577bf040000",
    ],
    [
      "ETag",
      "oeEPGwxR0qRHpu1+G+qiZQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:41 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1625184933653"
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
      "75",
      "51",
      "5d",
      "4f",
      "c23014fd2fd747b744984c59c203e882240bc890c4c41052c6ed1c74eb6c3bcd20fc776fab0926ea4b3fcec7ed39e911f645b585083645fed6a06a2f7234737b485137c268da6a5969040fd0b09c9409cfeb9bc965b13888863fb7f7f3314f0ef960400a9dbd62c9203a022f506c35442f47a85889645baf959b4832d3d61619cd66493c9c1250caad05a6cb24198e92184ede0f5bbd3f5b26d3a7781ca77f5956270f76729322478555863645ade40e3333b105352b6b81be968dca5083133b2257b2a99992d227c40ffd4ed8ed756eaffb4110f602d209993153c88aa4cb054503230d13a9fca07a6005ca1da92977eb3bc14635e85ad84bc785fb970e7fd19c097de6bb965f7d3f3b6a0dea4725a982469bbe7ff555e54eda7a866adbe11e648cfee2a13010b969a74f8a81d691e9010000",
    ],
    [
      "ETag",
      "Lfgp7I+iSzlufXyDQGfLzg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:42 GMT",
      "Server",
      "ESF",
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
      "0000000002ff1dd04b7282300000d0bb646d1c0545e8ce00421430e058a01b26c5f0910281508d767af73a3dc27b3f80e63913229bfa8675e00d3ca862ccf3f981eb08955558a9c2849e83f6edb05a06827f255cf34ec455777dbf09a35057ccc415663d3c9d8bb5c11cd6281930fd743592125cac556d71c82eb1e117b2eac68af84f38207a949e16f9bd382f0efbcb201bd766f5caed8a2d2fca2b2a26dd746c9cdc482f608aa6fc3da1c1354ab6f629ad98e90424b4ad5debe38e7878fa8e23e57625ea9de3b28f45f8815b28cb65d0144a93e9cd191eb3c12aa5a46d073d026680495e8f4c64f58babae0d6306feedd9f4e0ec1580181dd9087eff004c73f6d81a010000",
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
      "Fri, 02 Jul 2021 00:15:42 GMT",
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
      jobId: "grouparoo-job-7-1625184933653",
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
      "0002ff85536b4fdb3014fd2b91f795367de4d54ad5a84ad8a2b5294d52d8344d91e33899218d4becc018ea7fdfb5431908093ec5f63de79e731f794437acced11465acbc6d69f3f0e99a67e80451894b78bd49f23f7f3726db5c6caeeebf59934b627fc79bd90c104cb104deed2bda13bc6d0815d36ddc2f1bdeee71c3790f12f5dcded019d943cf9a8cc78e3d069aa055b164f50d907f4bb91753d33c4af74bcecb8ae23d137dc277cfefe6ddc8dc37fc9a1229ccd78a268808f35dcdcf152758325ecfb631e8b7823629dd61568183ffc43c3b7d9db9cff0ae5f02f88e118a09e16d2d952b4841785db0b26d7456347d44dae58b038afda5bf480cc2ab7657a735ded11323c712a7f2614f8df368bd3282f07c1dade649b00ed378f1d55fcdfb8bf572bb0a63e3eaab1ff986c4594535d79819a7fa16c205f4732a24abb57aa29e95f2537f82b74351049016b40ba6eec0c1436f30c98acc258537b6b36240b3cccb5c1b8fb3019958d4ca338a81a745350bd7bc768a9c0eb0374a33372f52cb25a374e20d9cd4f56ca7f07066613b47871374df3049cf98d873c1ba0ea1ab2848fc3489b6e1629ef8ba8402b7953ceb8ca9025e7a94502080dea9e9a0a28c83926a7710267e345f24c1a5df4d78494b4c1ee25b9871812b41018d1b689ea4cd8ae7d03014ce57fe1980f5c42e8e4181a63f1f91eab972f1a2e5cff40406a8ec4afd45711205e1176de788b8c455ab2177dd419551b04a993efc0220ac6897046db67ef403754f112d68436bf2f13001ac031ffd68c7b507282c3ea8080977d81c2294066968b7414c177b645b236be8220d6ee49b98ed38c79ea91c2a23ddd15a3e15d4ad3dd4d989b5e2190441187ea87b75f807825bcd2874040000",
    ],
    [
      "ETag",
      "kTdxzQ/iQPQWwK49Vc5XaQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:42 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1625184933653"
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
      "8d936f6fd33010c6bf8b799b8a96fec988b4172d9451296bbb369d90d01479f625783839633b85aaea77e79c6d0531a4ec4d7277fe9d72f7f8c9917d57b56409bb57e58f06ece14d09fe26041b708df68e5e066b072c62e07949e4aceaff8a6f6f44fce52a8bf766bc2b71fdb6bcbc24c2896f5071961c59a1404bc792af4756f30aa84da06eaa3a6fb388f98309c56db6592caf28af50867cb94bd3e92c9db353746e94dcf3bce55fd176778ad803de6fa0000bb580308bb1f800c22fc29a8e574643cf61630538d6c2ed4169b131dc22f6a8d28b7b83c9bbf1e062f47e389c8c87c46914dc2bac09dd6d693ce6d173bdc19fb4241b04c2b6312d5cb4cf3dd5956c1709e162994d46ed7c7f035c086c6a9f778285b2ce3f8af70c3e89f02fa9f92b41ba29a5bba0126a09b68b5226e7525a70ae9344977363ced86cb54a5faa524b8b4a76837bd50168bf3f039fd2d5f47fd292bffe68f5719acd5f10ce936bce48b6b89e6fb3e9f53a70774f46981d3cb8b545329583e0a7417f74318e27fd478b7dc0603bfa4ee26d0311139cfe94cfcab3a4e0dac1e937ba43187887030000",
    ],
    [
      "ETag",
      "Bm0x7VQc7XGT7vp5UgoP/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:43 GMT",
      "Server",
      "ESF",
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
          "SELECT `date` as __result, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `date`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-8-1625184933653",
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
      "0000000002ff8553fd6f9b3010fd5790f7cb26e50302212452d56529db9052d21192aa9aa6c480616e0153dbb4cbaafcef3b4cd28f556aa548c4bef7eebd3bdf3da01b5a266882229addd684ef3e5cb3087510913883dbbfd8e156ea9beb3fb1b7f679621633797b7f720208dab0042eaa9c7405ab794cc464b5ec659cd515e68c752151d7e91af6606838d6d834eda1093441f2744ecb1b20ff96b212937eff28ddcb18cb72822b2a7a312b1eeffb77837ec5d93589a5e8bf54ec8388e8bfa9799ab3184bcaca93d512f46b41f8861498e6e0e08998449f5f66ee515cf43200dfd198e0386675291b57902266654ab39aabac68f28094cb677fd0d29dbbb350db265892ad8685b6d97022ea5c76b42d4d0e37d58df635589c6b5ba82da539115bedf2bb1bb85a8bf17c6de5fbee32d43e9e7ed2be058bd585f6e54ac53a87cce0252142d2523909719493c6c5a157deeb076a08586241dae066a4dbd870f4719446a33875cc6194ea248a9c6834c466a4c7638b58494430f064935db170c9ca91ed388683d331768616c6a911e1583722c3d06dc736070ed1c7fa281d8dd0be83ee3995e48c8a8a09da760c5d065ee86ec260e5cfa6a1abca4831b4e7ac35d714f1dca7842201f4465dfb264a192835edf7fcd00da6b3d05bbbed8bcf4986e3ddf216de3cc5b92080c61c1744127ece12681aba582cbdd05bf8d33930d4335e1c11024d7e3e3c11c25da5ba2cd5174d83607a051ccc39defd17031fb685f6fb67726b9cd70aa2f0ead4e6bf6b03c8805a9e4e8317271bed7fede1d74130e7ad16fab172832bd45e0524259c94f1fb53006015786f5b8fbb0350d81e501112ce3072b16834624edad1a385f27e605b30013a52602e5fc52c637cec7193a3c9480a52ca4341edeea8ae35a15a3c82200813e37bfe3788fe030249d9d5b9040000",
    ],
    [
      "ETag",
      "za8r4fN3VxcIVNrd3mCtqw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:43 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1625184933653"
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
      "02ff7591516f82301485ffcbdd2b24808330121f6423cec598c93459b21853f1c250a0d8160d31fef7dd768bdb837b69ef3dfd6e734e7b867dd96c21824d591c3a14fd5d816aae8b14655729495bcb1b8960012a5668328cf377bf1a67fdfe25f44f394b0fc7603e1c1221b34fac194467c84bacb612a28f3334ac461a5baf85b99130d5b75a791a2d12ea6abed5dd6c399d8ee2690217ebcf4cbbffe527b345324ed25b23ab8b053bbe493147814d86da422bf80e3335d1e924abdb0a6dc93b91a104039b8342f0ae6582739b143bb4ddc0f3ddf0fe613008fc017115cf982a7943e8f28dac81e28a55293f5136d0803025c5cccd7a24d9733cc7763cdb714d162db9c6e24d28b842c1ff9077853c0dad7e7cc4bd42f92a386592a8e3b881f31dee91ebc08a1e42890e2dc8187dcd73a920ca5925f1f20502620e73f8010000",
    ],
    [
      "ETag",
      "b8BfX5lGcykJ85wfaRqv6Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:43 GMT",
      "Server",
      "ESF",
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
      "08000000000002ff1dd0d15682300000d07fd9b3789a10077a63488102031b4abc70268e4423c60643ecf4ef79fa847b7f00ad2a2665397457f60d5ec04c57f6b25a6eb985d0e7f932eb30d76713afbc643c5c79bfd726a3a8cdc63826d397377965d3676f21520121b31f0b77ca6b4a24840cbba84c88e128d2fb3c2eb40467977dbd3b516d102176ee32a3c1c681a896ef29d4217c3ab9ba65612120e22cbd471fe6384463a3cefb8c7415ec3ddeb29a59e832727b878e9192c762b2da369fe016ab9614d4f30fa1d9bfc66ece76dda64c7b15f9d85c6b6b350421ad440a03a3030bc06ebc114c96cd83ab3fdbf602fcdbcb61e6ec118018154c80df3faa517ff71a010000",
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
      "Fri, 02 Jul 2021 00:15:44 GMT",
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
      jobId: "grouparoo-job-9-1625184933653",
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
      "6f",
      "da",
      "30",
      "10",
      "fd",
      "2b",
      "91",
      "f7b18510122820a115d1744583b086d06a9ba6c83197cc6d88d3d8a1ea2afefbce4e41ad2ab59f62fbdebb77f7eef24cee79b1212392f0eca186eae9cb9d48c8290145337ccd3adf3dbb3c39c9fdeb5fc37f79c465bebbba1e8f11c1354bd26d99434b8aba622047eb553bab445dd24a8816266a0d5b4ebfdb7306ded075fb3d176912f274ce8b7b24ff55aa9423db3e48b73321b21c68c9659b89edf1ddde75edb21277c094b4df2ada2822ed0f35bfe68251c545315eaf50bf9650c5b0a53cd7ed1d899be4fc6de636a7db7686e01d6740191375a1745598828922e5595d99ac64f44c4c95af0e64e5cffd69643191d7db222ee8164ead0d5534564f255897e17261cd82cb65b89844b36510afa657fe62d29e2ee7eb45b0b26eaffcd0b7144d72305c6b6c9d9b5b8017d4df8054bc30ea917ed6ca2ffeccde0f4513505a42138ccf3a7dea0c3ac3244dce583a707b49da81241924673dea261d36f4c0db24409167440d8b16a2801e73003c88dd147ab1e750371eb8837edc4d1dd649874eb7b7a1647f4a1e2baee082cb5248de38446ec359e4c751b80ea693c8372da4b4ced54553986ee0758d0a1b44d0073ded75940b54d276cf82c80f27d36876e337139e4346d9d3ea01679cd25c02a26985e629a8166283869160b2f02f106c26f6e3109464f4fb9968cf7515af2c3fd2231ca02e57992f5945e12cf866ca39206e685e1bc8ae39e836529eeba2f77f10882bda2421d76b3ffc499aa71052a8a0609f0f13c126f0d98f76587b84e2e2a38a5478c7cd61526bb00a9a0de2a6d903dbf31c",
      "af430cb852ef62dd61f7e099cea133c2160af5d250b3f6d8672356cb23088338fcc078b5ff0f400a8f9774040000",
    ],
    [
      "ETag",
      "g0K4/p++lEQZ9zlTislvHQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:44 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1625184933653"
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
      "dd",
      "6e",
      "db",
      "30",
      "0c",
      "85",
      "df",
      "45bb758066f9596aa0174e97761edca44bdc8b75280c55a23db5b2e84972b620c8bb8f72bb745807b83736497d84c9a3e33d7b5446b298ddabea470b76f7ae02ff25046b70adf68e5e0d1a072c62e0794524d4b79f67e7e9fcd2e417cdafafede30eb548cece8870e23bd49cc57b562ad0d2b1f8db9e195e03b509d46d6d8a2e8b98df35a1b8c9d7e9f292f21a65c897375996ccb3053b44c746c93d2f3afe0d6d7787883de0fd1a4ab0600484591a8b0f207c1ad674bc6e340c1cb65680631ddc1d5416db865bc4015506a783e1f4fd64381b9f8e46d3c988388d827b8586d09b0d8dc73c7aaed7f8939664c340d82ea685cbeeb9a5ba92dd22214c97f974dccdf737c085c0d6f8a2172c9575fe49bc3fe0b308ff929abf11a49b52ba0faac048b07d946a0a2ea505e77a4974056f9a23365fadb2d7aa186951c97e70ab7a00edb747e0225b25ff9396fcf5a2d5c7245fbc229c27d71c913cbd5a6cf2e4ea3a7077cf4698ef3cb86b8b642a07c14fc393f16cf2617af264b1730cb6a3efc4deb61031c1e94ff9a43c8b4bae1d1c7e03d986f25587030000",
    ],
    [
      "ETag",
      "emZJ8CIBGnTFpxYukyolcA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:45 GMT",
      "Server",
      "ESF",
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
          "SELECT `stamp` as __result, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `stamp`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-10-1625184933653",
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
      "6f",
      "da",
      "3010fd5722ef974da24042081f52d5319a759168a021b46aa7091ce792b90d31b51d2654f1bfef92403f36a99590827defbd7b77be7b220f3c8fc990443c7d2c40ee3edd8b883408689ae2ad354bf5e8eeae90c5786cc9ed95ccd9da4f4f4f11c14b96a2eb4d06274a1492811a2ee6cd548a6243a51027287462b64f4cc7ea9a7d7bd0e938dd0ef21464c984e70fc8feadf5460d5bad63ee662a449a01dd70d56462fd7cdfda5aad8d14f7c0b46abd4dd9c22caaf57ed2b34c30aab9c84f1773345028904b58539ea18517661c7d7d2bdde474dd4c11bce50c2863a2c875690b2598c8139e16b25225c32752d97cf587ccdd893b0e8d95d2a8b932a832964b09aac874c358f1f870b37930be07d34b6385d5253c03b5326e7eb8816bd418cf3716beefce43e3f3d917e322982e66c6b7db2ad6384aa39b1894e679e525a45106a58f43bbbcff1fa924504d15d4c165afed50b3df1e4449d46349bfd38d923644513fea7569276ab3810d761c01459e2ed52b16cd451e771de8526a43cfb14c30db0e03a74f9d0e8bc1a2cc0673105bfdb81d917d83fc915cc339571ba178dd33721378a1bb0c83853f1e856e554642b13fe7b5b9b288d73e351689a077eada97512e3053f9009e1fbac1681c7ad76efde6134829dbcd1ff1d5139a29403495740d1ae4a588b16964369d7ba137f5471364540f393b221419fe7c7a2184bb4dd5655d7dc9280846b7c8a152d2dd3f31f4e1d864bf7f95ee9a664505a9f0d5a9d6dfd60162622d2f27ebcdc921fb5f7bfc35088e7a9d8b5c2ddce096d45701242021671f4f0182abc0871b7b5c1fc4e202611a9c3ccd71e6982a933009f5ecf17565fec0b6bbdd7eb5ef9a4afd5fac67d9c726971aa522ac21d7878aeaf5a9da56860af50cc2208e8cef",
      "f91718fd0b1be40fecbe040000",
    ],
    [
      "ETag",
      "2PgtAZZuruCC2rvQrncmNg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:45 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1625184933653"
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
      "6f",
      "82",
      "30",
      "14",
      "85",
      "ffcbddab2ca04284c407b7113553e3101fb6c5988a174481b2b6cc18e37fdf6db7642ef3a56d4ebf73734e7b86435e6d21804d9e7d34284e7719aa177d8850368592b4d5bc92082d40c53222a7c7e7b768376343f564c7b6e8cdedd7e368d0ef1321931d960c8233a439165b09c1fb192a5622d9d66b612612a64eb556e2f1345cc483e99ca4926fb5345b4e268387490897d695b13efc9ac6b3381c86d12dcbead2823ddf4498a2c02a419da3167c8f891aeb8a9295758196e48d48508281cd4526785333c1b9458ae5d896e3b55da7d7f53b1dcfed1058f084a99c57c42e17940d1457ac88f8911a8206843952d9d4ac9f243bf76ecf765ddff1bba16ffa18d5c4fcc7f9bef397f36e735e97265e736dcdad7e023d9c14cab9e0d44ea22ee678f677cd47aeab2b7a12251a6c41c2e8a746b982206585c4cb1750a30db607020000",
    ],
    [
      "ETag",
      "MwKZRhNaGtD0T0r8P0YwHA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:46 GMT",
      "Server",
      "ESF",
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
      "ff",
      "1d",
      "d0",
      "cb",
      "7282301400d07fc95a1dc192f676472405012b965775c3841845118480f2e8f4dfebf413cef9418c73d134497bcb4589ded1c05498f19953bd11723a7b7e0366ab993854241de1b126605fbd11f22177b1f938355557922249c70d7f51bbf87070d7d5724b95488f24fd2a3fc8f7d61c195f657d0e5e5cda403cb7a3a3a7406c58e1430b3c8bd9b57c2de27aa9a70e38c12736dc6b3425b04f77d8f5f7aa9fdd42659addb9aeafa00fe8715e0c92de479bf79652775a04d26222f76dbb2115bd0e6db853e678a11a61868fccaa717ac92f456c6c368ea21ed00489be3a4bd124e72777a1014cd0bf3d69874a3c0388605248f4fb07b9dd1e331a010000",
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
      "Fri, 02 Jul 2021 00:15:46 GMT",
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
      jobId: "grouparoo-job-11-1625184933653",
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
      "000002ff85536b6f9b3014fd2bc8fbda8490405e52b446295da2356405d2eea1091973616e094eb1e95455f9efbb364dd7aa52fb09dbf79c7bce7df0486e79959129497971d740fdf0e946a4e48480a205be2eb703c8e2efcbb11b655f7bd9cf4bcf76e262364304d72c4977fb123a5234350339dd46dda216cd9ed642743051c7713aceb0ef39637732180cbd01f22494f905af6e91fd47a9bd9cdaf651bb5b08519440f75c7699d83dbfdbf77d7b5f8b1b604adaaf256d5491f6fba29f4bc1a8e2a29a6d2334d048a813d8515ea285ffcc2c3d7d9dbacbe9ae5b20f89e33a08c89a652da16a660a2ca79d1d4262b993e1263f3c58144fe85bf882d26ca66572515ddc18995514513f5b007eb3cdcacad5570be09d7f378b5099268b1f4d7f3ee6273b15d079175bdf443df52342dc170ad99756a6e015e503f03a97865d463fdac959f1ab47a3b164d4069096d3019f586d419f726699e8e583e1e7869de83341da7238f0ed21e9bb8e0662950e41951c3a295a832afefb8cce9271ea3c3c4cd7a34193bbd51e278ae33eebb7996d33e399c90bf355770c6e55e48de76885c87abd84fe2701b2ce6b16f4ac86953aab3d6982ee0a547850522e89d9a0e3aca052ae976af82d80fe78b7875e5b713be8082b287e80e679cd35202a2698dcd5350af45860d23c17ced9f21d84cecdb3128c9f4d723d13dd72e5eb4fc991ee300b55d65be248ac355f0c5d83922ae68d918c87d7bd065e4bcd4a60fbf11883bda2621975b3ffc41daa71072a8a1621f0f13c126f0e1af76dc7bc4e2e6a38c5478c7d561528bb01ada15e2a6da23db1d0ebd2131e05abd898dbcc9b1693a87ce083ba8d45345edde63a1ad58239f4118c4e907a659877ff05dffa177040000",
    ],
    [
      "ETag",
      "HU3edTXH84SdK0dZQ5/1Tg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:46 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1625184933653"
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
      "db",
      "6e",
      "db",
      "300c86df45bb75807839ac33d08b64cbba606e8eee5551188a44bb6a65d193e4144190772fe57659b10e706f6c92fa0893bf7e1fd9a33292256ca7cadf0dd8c3a712fc3a041b708df68e5e351a072c62e07949e476d0d4310ee35ddf3fadaf56fc71766f7ead2f2f8970e21e2ace92232b1468e958727b648657406d02755399bccd22e60f75286eb3cd7c7145798532e48b9b349d4cd3193b45e746c93dcf5bfe036d77a7883de06e0305583002c22cb5c507107e1ed674bcaa35f41c365680632ddc1e94169b9a5bc41e557a71dc8bc79f47f1c5f0eb60301e0d08d428b8576888bdd9d27ccca3e77a834fb4258b0361db98362edae79eea4ab69b8470bec8c6c376c0b70017021be3f34eb050d6f917f5fe80af2afc4b6afe4190ae4ae92ea80423c17651aaceb994169ceb24d1e5bcaecfd874b94cdfab62a44525bbc1bdea00b4df9f811fe972f23f69c9607fb5fa3ec966ef08e7c93667249b5fcfb6d9e47a15b8bb57234c0f1edcca22b9ca413054dc1f5e8cbe8cfb2f1efb86c177f49dc4db06222638fd2a3f956749c1b583d33302b0e45688030000",
    ],
    [
      "ETag",
      "S3up1o41b0twQGPakEhnKQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:47 GMT",
      "Server",
      "ESF",
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
                { value: "another@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-12-1625184933653",
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
      "a3",
      "40",
      "10",
      "fd",
      "2a",
      "64ef9fbba42da514699b18ad8a5e13ad4aa9c65c2eedb21d7095b2b8bbe835a6dffd86c5aa3d739a9000fbde9b79f3639fc93dcf176440629e3e942057dfee444c1a04344df1b4b02f1cfbf8323e60a9f6ae57da2be9a4fdb4bb8b0c5ea9145d1619349528250335984e5aa9146541a5104d0cd4743a4d67a7e339bd6edf75773c17750ab2e494e7f7a8bed5ba5003dbdee46ea542a419d082ab1613cbd773fbb1631752dc01d3cade4e696316657f9e742f138c6a2ef2dde9040d940ae40c96946768e14db988f7b743b7385db652243f7206943151e6bab2852198c8139e96d244258367626cbefb2093e034388cac79c2a5d2b39c2e616e5165cd66125499e98635370e5e0e8b7beb383c3fb3e65865c2335073ebfa671006d62b6d34b6a6e3713089acef7b3fac93f07c7a611ddc6ce0c6562234b800a5796eec4534cea0b2f6d2c1d1c7b95502aaa9821a9cf9ed1deaf4dafd38897d96f45c2f4eda10c7bdd8f7a81bb759bf0bdd450c1475ba8a6e54341779a7d3711d96f88c7613c7e9f7bd4587e1085c9af87ee27a9da407b1ef328fac1be449720d475c1542f1ba8de43a1c45c12c0aa7e3c361149832128add3aaacd5545bcf7a9b148247d52d7ba42b9c04cd54c46e328088787d1e82aa8d7e01452ca5693075c8484660a904d257650833c130b6c1ab9389f8ca2d1f978788a0a33db8b0d4391c1afe73741b42a4c97b5799361180e6f5043a5a4ab7fb049148ec62764bd7e97ef8a66a5e11881f9ab133cd600813b5c44c1557b1ffe9822cd2aae1b6f0c5c520dce7f619c8fbe05b98dff5ee3d320786b6a8fe4721a8437a43e0a21",
      "010939fb7a7b906c802f2fffe6262217ef22a6511aff715799aa923009f5cef2656566a3eefa3b7e8f18b2d41f30bfdfdd0ca78a51458425e4faa5a2fa269a6e5750a95e4908e2aa8deb59fc05e49de5af09050000",
    ],
    [
      "ETag",
      "p/P1/FQbBcgt5Wyt5uaS0w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:47 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1625184933653"
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
      "000002ff8d91514fc2301485ff4b7d74336e08b2252402599464213ae445434829777363db9d6d375c08ffdddbea03f1c997b6f7f63bed39ed891df27acf42b6cbb3cf16647f95817e318b04545b6a455383b502e630d03c23b28b82b7581f87985d37d17d7728fa7a3c9a4e264428f1011567e189a539947bc5c2f713ab790524db6ea53d9130dd37a6b37a4d16cb47aa2bdc9b7ab98ee3e92c8ed8d9b9503587ff2836678715b84b200509b500e3a1915880d00b134ff1aa29c155d84a018a59d86e6412db864b44973aaee7bbdec81f7ae3bb6030180d07049628b8ceb12676bd226b4ca3e66582474ac77c02a45d52d0d48e1db52399834d610a28407698abdb07f8b22e6e0456d6f1a564ce455e5ea804700dde5fc9e6f7fa59af413d4ba42c0a4c0c3f087e42cdd1f09a1e40cb161c2638fdc953ae5998f252c1f91b4bffd2e5f1010000",
    ],
    [
      "ETag",
      "vE9ZLtw5og+pE7vkjyn86A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:48 GMT",
      "Server",
      "ESF",
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
      "000000000002ff1dd04b7282300000d0bb642d8e4035d29d20ff026a0569370cc418322004820de0f4ee757a84f79e204708739e0d6d851bf00ea65cd19668e9b3adae13d2e55799dd87b61c8ba2689b10a2954b2b48c25d332655d4c8fbb498362826ea3de06629f4b752e399e9d486841c8378bd4884e41641775bbb2b47868e340d516c79ad65a5a371500f3f8ac3523f795841a9cf9f8a31433fb563999e8e58f850a65b55b1e70b799cb58098c9a1de4b68dc770913677eef37b6e926b5773c8bd0d9b12882a7565ca1b8f5df5e236826372ebd84ebeaf2f5514f827a565772b0007864b4c73ca32faebad6b405f8b767c3c4f02b40c7798f7bf0fb074427f0a61a010000",
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
      "Fri, 02 Jul 2021 00:15:48 GMT",
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
      jobId: "grouparoo-job-13-1625184933653",
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
      "00000002ff85536b6f9b3014fd2bc8fbda843c80a491a2354b681b29211b9076d33421e35c983bc02936adba2aff7dd7a6e95a556a3f61fb9e73cfb90f1ec91f5eedc884a43cbf6da07ef8742352724240d11c5f178be6e252f46fc41777c6f3ca6b8aef7f67f7d32922b866495aee0be848d1d40ce4641b75f35a347b5a0bd1c1449dfeb0d3f7066e7fec9c0e879e3b449e84225bf1ea0fb27f2bb59713db3e6a777321f202e89ecb2e13e5f3bb7d37b0f7b5b801a6a4fd5ad2461569bf2ffab9108c2a2eaae93642038d843a8192f2022dfc67eed2b3d7a9bb9c96dd1cc1779c01654c3495d2b630051355c6f3a63659c9e491189b2f0e24f257fe3cb698289ab24a2a5ac289b5a38a26ea610fd679b8595bcbe07c13ae67f1721324d1fcd25fcfbaf3cd6abb0e22ebfad20f7d4bd1b400c3b5a6d699b9057841fd1d48c52ba31eeb67adfcd4a0e5dbb168024a4b6883c9a8e7d1feb8779a66e98865e3a19b663d48d3713a72e930edb153079c5d0a147946d4b06825aac188c1ceeb67899b8db2c419312f4961ec24cc1d62c4edf5fa0e90c309b9afb98205977b2179db21721d2e633f89c36d309fc5be2921a34da116ad315dc04b8f0a0b44d03b351d74940b54d2ed5e06b11fcee6f1f2ca6f27bc829cb287e816679cd14202a2698dcd5350afc50e1b4682d9da5f20d84ceceb3128c9e4e723d13dd72e5eb4fc991ee300b55d65be248ac3657061ec1c1157b4680ce4ae3de832325e68d3875f08c41d6d93906f5b3ffc41daa71032a8a1621f0f13c126f0e1af76dc7bc4e2e6a38c5478c7d561528bb01ada15e2a6da23db19bbce801870addec43ccf3b364de7d019a1844a3d55d4ee3d16da8a35f21984419c7e609a75f807630fb95977040000",
    ],
    [
      "ETag",
      "DDuGHo1joB5Aign6ulXzAw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:48 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1625184933653"
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
      "d33010c6bf8b799b8a85fe6144da8b163a1691b55b9b6912688a5cfb12bc39be603b45a5ea77e79c6d0531a4ec4d7277fe9d72f7f8c99e3d282359c236aafad182ddbda9c05f876005aed5ded1ab41e380450c3caf88dcaaaf6ed394f070fdf6b6965feafafce2575a9d9d11e1c477a8394bf6ac54a0a563c9b73d33bc066a13a8dbda145d1631bf6b42719dafd2c567ca6b94215fdc64d97496cdd9213a364aee79d1f1af68bb3b44ec1e372b28c182111066692cde83f06958d3f1bad13070d85a018e75707750596c1b6e11075419c4c3413c79378e4f471f86c3c97848a046c1bd4243eccd9ae6631e3dd72bfc495bb23810b68b69e3b27b6ea9ae64b74908d3453e197503fe0d7021b035bee8054b659d7f54ef197c52e15f52f3578274554af741151809b68f524dc1a5b4e05c2f89aee04d73c466cb65f65215232d2ad90f6e550fa0fdf6089c67cbe9ffa42583fdd1ead3349fbf209c27db1c913cbd9caff3e9e555e0ee9e8c30db79705716c9550e82a1e293d1e9f8fde4e4d1631f31f88ebe9378db42c404a75fe5427996945c3b38fc061316f30788030000",
    ],
    [
      "ETag",
      "viZsbpfekQ/WmdKmmFHzIg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:49 GMT",
      "Server",
      "ESF",
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
                { value: "another@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-14-1625184933653",
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
      "e2",
      "40",
      "14",
      "fd",
      "2b",
      "cdec97dd048152ca2b318ada751b11dc5234bad9c074b8ed0e960ece4c5162f8ef7b3b151f6b569326b473ceb9f7dcc7f0486e7936273d12f1e42e07b9f9b21011a910d034c1d3b3fecd99f330388a5833630b6eb74f831bef7e7f1f19bc5029ba5ca5b0a7442e19a8de645c4da4c857540ab18781f6ece69edd6ab876a7d9759c96eba04e411a0f78768bea3f5aaf54af56dbe5ae26422429d01557552696cfe7b575a3b69262014cabdadb9435cca26a1f273d4805a39a8b6c7f324603b902398525e5295a7851cea3c3b7a1ab9c2eab0992d79c01654ce4992e6c610826b29827b9345149ef91189baf5ec8d81b78c7a1354bf57a6651654da712549eea8a3533a99f0e57b7d6f760746ecdb0bc98a7a066d6d50f2ff0ac679a3fb426c3a1370eadaf07dfacd36034b9b08eae7770a5cc8096e6a034cf8ca190462914669e7ae6bf9f5421a09a2a28c169bbdea276a7de8de2a8cde28ee346711da2a813b55dea4475d66d42731e01459d2ea21b15cd4446dbf356dd751b73701a9d56cbae375cda72db8e633b0d16530ce680d3b66db2ad907bc9359c70b5128a978d2357811f7ad330980c8ffba167ca8829b6e9a4345714f1daa7c62291f4415ddb02e502331553f087a117f48f43ffd22b073f8084b2cdf80e471fd35401b2a9a44bd020cfc51c9b462e46633ff447c3fe0015669a173b8622bd5f8f2f8270b3325dd6e697f483a07f8d1a2a25ddfc838dc3c01f9e92edf655be4b9ae6866304e6ab4cb02e01020b5c3dc155fd101e4c9166f9b6951706aea506fbbf30ce47ff01f916ffbdc5a742f09e941ec9cf89175c93f22880",
      "182464ecf3ed41b2013ebdeebbbb875cbc7d984669fcc65d65aa48c224943bcb9785999dbad96dd9e6cf4253a9df61ed6e63379c224611119690e9a78acabb67ba5d40b97a262188ab362c67f117a1c7e0ddfb040000",
    ],
    [
      "ETag",
      "KAZK3xLBbc4ncji17GRZEw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:49 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-14-1625184933653"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff6d915f4fc23014c5bfcbf57543c618b825248201242188e3cf8b21a48cbb31d8d6d97620217c776fab51627c697b6f7fa73da7bdc0212db610c0264dde2b14e7bb04d5ab5e8428ab4c499a4a5e48040b50b184c8793e740e697bb02b457fd9f607cbfbe969d7ed748890d10e7306c105e214b3ad84e0ed0205cb9164ebb5302712a6cea5ee0cc62fdd399539dfea72b2188fbbbd711faed68da83cfc0a66f3703419fea7585d2dd8f34d88310a2c22d4164ac1f718a9914e27595e66684b5e89082518d86c24825725139cdbd4b19da6edb41a9ef3d0f45db7e5b904663c622ae505b18b195903c515cb427ea270d020409825e58ccd78d46dcfaf390d934397b84771e4a9ac3fe287f1518b786e3cdf8afc66cd6dfd6822640a9dbf82d5f7f5bdb34239159cb248d431dcbaf715ea896b5ed1032851a10511a32f794e150431cb245e3f0165abf063f0010000",
    ],
    [
      "ETag",
      "TmG1ki7FhprEV79FV/PwhA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:50 GMT",
      "Server",
      "ESF",
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
      "ff",
      "1d",
      "d0",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0bb64ad0e8a3fba13128b80fc4a8576c300864f00892420b1d3bbd7e911defb01499661c662ded5f806de804856ca225b9874afaa45d914acdb55b946cfbe975e78ae1b24b7eafa3e5d906a9d1d41a0d31cceba1898263da22e9c1322093d37a38ccb0d5caf3cf109e91ab68367e586a6d87ac40a1b8d9cef2af7fb768ce6b487a68cb4c63af9aed3efdf2b290ac2ad2fa3fbfa94e9c6650a6b7ce4631ba08717f2e7572702489a71d2b5c2ddac1c66ba062992d6c2577b12a4426c331474ebb6076a0fc187ff48d3f88acae5b2ac9ff079f03c300378a2558f595cbdb8f2465166e0df1e7341f12b40c5498f7bf0fb077cb255e91a010000",
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
      "Fri, 02 Jul 2021 00:15:50 GMT",
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
      jobId: "grouparoo-job-15-1625184933653",
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
      "5d4fdb3014fd2b91f74a9ba66d425ba91a5509d0d1a62c4941d334458e73130c695c628709a1fef75d3b948190e029b6ef39f79cfb916772cfab8c4c48ca8b8706eaa76f7722254704142df0d50eecf381b42f7fccaf6eb2dbfb73b8f4e2a8984e11c1354bd2edae848e144dcd404e3651b7a845b3a3b5101d4cd471dc8ee3f55d67341c0f069e3b409e84325ff2ea1ed9b74aede4c4b60fdadd4288a204bae3b2cbc4f6f5dd7eecdbbb5adc0153d27e2f69a38ab43f17fd5e0a461517d57413a18146429dc096f2122dfc6766e9c9fbd45d4eb7dd02c18f9c01654c3495d2b630051355ce8ba63659c9e499189b6f0e24f297fe3cb698289b6d9554740b475646154dd4d30eacb370bdb216c1d93a5ccde2c53a48a2f985bf9a75e7ebe5661544d6cd851ffa96a26909866b4dad13730bf082fa1948c52ba31eeb67adfcd2a0c5c7b168024a4b6883c971cfa3cea8374ef3f498e5a3819be63d48d3517aecd241da63e3210cb31428f28ca861d10a6bce81d2014d130f3c2f198e69968c1ccf499c71da7318f33cd7ed93fd11f95b7305a75cee84e46d87c84db888fd240e37c17c16fba6849c36a53a6d8de902de7a545820823ea969afa35ca0926ef72288fd70368f17d77e3be12514943d450f38e39c9612104d6b6c9e827a25326c1809662bff14c166625787a02493dfcf44f75cbb78d3f2577a8c03d47695f992280e17c1b9b173405cd3b23190c7f6a0cbc879a94defff201077b44d427e6efcf017699f42c8a1868a7d3d4c049bc097bfda61ef118b9b8f3252e11d5787492dc26a6857889b6a0f6cb7e78efbc4806bf52176dcef1f9aa673e88cb0854abd54d4ee3d16da8a35f21584419c7e609ab5ff079f2f51d277040000",
    ],
    [
      "ETag",
      "/N/G3s/KJCPWdhkGeK6TSg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:50 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-15-1625184933653"
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
      "3010c7bf8b794d25b2b6a18bc443cb0a5484b6b481874d2832f125b8737c99ed147555bffbce8175d398145e92bbf3ef94bbbfffd9b3ef520b16b32759fe68c0ec4e4a70773e58816d94b3f4aa515b600103c74b22b5195ddd7cbd681e5edca67fb33c8be0e78328cfcf89b0f933549cc57b564850c2b2f8db9e695e01b5e5a89a4a676d1630b7ab7d719dae66f32bca2b143e9fdf27c978924cd92138360aee78d6f21f687b3c046c834f2b28c080cec1cf521bdc40ee667e4dcbab5a41cf626372b0ac85db83d260537383d8a34a2f1cf6c2e8d3301c0d3ef7fbd1b04fa0c29c3b899ad8fb35cdc71c3aae56f8425bb2d013a68d69e3a27d6ea92e45bb890f67f3341ab403fe0df03cc746bbac132ca4b1ee55bddfe09b0aff928a7f10a4ab92aa0b2a410b305d94ac332e84016b3b49b419afeb2336592c92f7aa6861508a6e702b3b00e5b647e032598cff272d19ec8f565fc6e9f41d611dd9e688a4b3dbe93a1ddf2e3df7f86684c9ce815d1a245759f0860a4f07a3e15974faeab10bf4bea3efc4ce3410b09cd3af722d1d8b0bae2c1c7e0126b66e0388030000",
    ],
    [
      "ETag",
      "nr8GKZCuVwtj3KP76ezVdg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:51 GMT",
      "Server",
      "ESF",
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
                { value: "another@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-16-1625184933653",
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
      "7f6f9b3010fd2ac8fb6793d224e41749a4aacd5ad621a5a403d22a9aa6c4c0419d124c6dd32eaaf2dd7798a669576d959000bff7eeddf9ee9ec81dcb633226214bef4b10db4f6b1e92060145533cbdea72f7763d3b5facad50f865f9184ba1d2e36364b04a25e9a6c8e048f2524420c773bf990a5e1654707e84818ecc013e9dbe39ec8dbadd41bf8b3a09593265f91daa6f952ae4b8d5da7b3753ced30c68c16433e29b97f3d643a75508be8648c9d65bcb16bac8d6ff4d4f321e51c5787e3cf73181528258c286b20c533828e3f0f46de826a39b668ae40716018d225ee6aa4a0b43443c4f585a0a1d958c9f884ef3d507f1eda97d16182bc6e59216c5caa0d2582e05c832530d63a5ed9f0f8b3be39b37bb34565862c232902be3e6bbedd9c60bcd718db9ebda7e607c3ef9625c78b3f995f175b1871b07174c2d06a958ae130b68984195d4f3dd39ef3b5609a8a2126a7069b507d41cb64761125a5132ecf6c3a40d61380cad3eed86ed68d4835e1c02459daaa26b15cd794ec3517f40ada4ddef99dd0eedb5e33e98a3616fd0e9d0e1c032479169757ab145760df228988273260b2e597d81e4c673027b197873f76c12d8ba8c84e2559dd7c95545bcce53619148fa4f5dbb0a651c9daa6e386e607b93b3c0b9b6eb0198424aa3ad7f8f2390d04c02b2a9a01b50202e790cd5e4cf7c277066ee648a0addd5ab3d4392f1cfa78320d816fa96957e9389e74d16a8a142d0ed5f981f788e7b4176bb577ed7342b35470bf45f6df0500304d638829cc9f629fcd645ea21dc350e0c1c4f05e63f61ec8fba05f116ffb5c3a741705fea1cc98fb9ed2d487de4410202f2e8e3e941b2063e5cfbfd0e2217b7106da4c27f9cd548562691807a66d9a64a66afee9b3dcb249a2cd43b6cd0b5f6cda96254116103b97aaea8de417ddb1554ca171282386a6edd8b3f73fcef8e",
      "03050000",
    ],
    [
      "ETag",
      "P3oNhjODYj7brSuuwdsrtg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:51 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-16-1625184933653"
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
      "6b",
      "c2",
      "30",
      "1485ffcbdd6b1dab9da282302bc50945679d2f0e9198de76d1b6e992d4cd89ff7d37d9c03106a1bd3dfd4e720e39c34154290c6027f2b706d5e92647b3b04382ba298ca6572d2b8de0011a961399f6d67d31f6ab75144682676b3309179fa3e19008cd5fb16430384326b048350c5ece50b112c9b6dd2ab72361e6545b259ccfe3683423a194a91566ab381e85710417ef97ad3e5c2dcbe7643a9bfce7d85c3cd8cb5d82192aac38da10b5927be4666afb6956d605b6b46c14470d0e763f72259b9a29295ba4b4fc2ead76c7efddf783a0db09082c246746c88ad8d592a281918615897ca77ad02640b9919a66ee7924d9a8065d0bfb817b544729f4dd037eb814b75c962ef16f4bc60a7df5706406fdbf86cdcfe1e1c9a07e52929a68b425da41e7bbd2585ade507d1bc103cee84a1e858181dbfff2057099d555f0010000",
    ],
    [
      "ETag",
      "d8Z9iC1nZEBEicfZtGBQzA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:52 GMT",
      "Server",
      "ESF",
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
      "ff",
      "1dd04b7282300000d0bb642d0e5521d09d5040c152915f65e3044881a012120ac14eef5ea74778ef07a0a2c09c5f86aec577f00a66b4d297c5d2a39a61544dd26b10469c3c6e622e99f780f440bd362b954c83adb63d5add261e779311574a88f4d8ecca42d48e4d06b7820d531a946f6b8f1943d6218cdf93510a1ff2680587a8916b3dc6a7496c86d9c99215af6d722e7a1386e6e7be0a1c3ee58a9ad9473fb8550e798bfc752aae5212892eb82bc72df59145cfbbabdcbf84694ddc5cf5bf25529238ed2d98bb2c3f890fbb6af9d75e52999a4ef9417749b28902b00058d086617e699edcb5a2eb0bf06fbf0c33c5cf0003238619f8fd034c753f981a010000",
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
      "Fri, 02 Jul 2021 00:15:52 GMT",
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
      jobId: "grouparoo-job-17-1625184933653",
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
      "9b3014fd2bc87b5c939010208d14ad514a5ba4846c84b4aba6091963981bc0149b4c5195ffbe6bd374ad2ab54fd8bee7dc73ee074f68c7aa144d51c2f2c79636872f0f3c4167884a9cc3abef9476c3ae77e5ee6aeddcefbffef45aeb763e9b01822996c0655dd09ee06d43a8986e37fdbce16d8d1bce7b90a837747b4367640f27e373cb726c0b788216d992553b60ff91b216d3c1e0a4ddcf39cf0b8a6b26fa84972fef83fd685037fc811229066f2507a022061f8b7e2b38c192f16ab6dd808156d026a625660558f8cf4c938bb7a9fb0c97fd1cc07b46282684b79554b62005e155c6f2b6d159d1f409699baf0e68e32dbd4564105eb4651557b8a467468a258ee5a1a6c655b85e197e70b50e57f3c85f07f16671e3ade6fdc57ab95d051be3eec60b3d43e2a4a09a6bcc8c0b7d0be002fa291592555a3d52cf4af9b941fefbb12802480bda0563d774f070629e2759e2926c62d94966d2249924ae8dadc424e7633a4e138a81a745350b57bc32c719715242629398693c26ee289ee004c7a9e5a6a969bbe970e2a2e319fadb30492f99a8b9605d87d05de8475e1c85db60318f3c5d4286db425e76c65401af3d4a2810401fd4745451c64149b5db0f222f9c2f22ffd6eb26bca4392687cd23cc38c385a080c60d344fd266c55368180ae62bef12c07a62df4f4181a6bf9e90eab972f1aae52ff40806a8ec4afd459b28f4836b6de784b8c545ab21fbeea0cac858a14c1f7f031076b44b827e6cbdf01e754f21cd68432bf2f93001ac039ffe6aa7bd072c6c3ec8080977581d2294086968b7424c577b62db23c71a210d6ee4bb986bdba7a6a91c2a232d69259f2beaf61e0aedc45af10282204c3fd0cd3afe03eee98fde77040000",
    ],
    [
      "ETag",
      "I6m5riGkmkFO6Yv+XEu3VA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:52 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-17-1625184933653"
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
      "00000002ff8d936f6f9b3010c6bf8bfb96a8a5f9d721f545e8b20d8d868ed017d35421c73e98336353db64caa27cf79d69974d6b25fa06eecebf13778f1f0ee487509c446423eac70eccfeac06f7c50739d84e3a8baf562b0b2420e0688d649c6dc3d5fc3cf9facb6626ce379fe5e3e5bcbebe46c2b2efd050121d482540724ba26f07a26803d8c6b4ec1a55f65940dcbef5c5759127ab8f98379afb7c759fa68b385d9263706ae4d4d1b2e7dfd0f6700cc8566f72a8c08062e067698dde0273895fd3d2a69530b2ba330c2ce9e1fea036ba6ba9d17a849551381f85b3cb69783579371ecfa66304a566d409ad90bd5fe37cc4694765ae7fe29624f484e963dcb8ea9f3bac0bde6fe2c36455cc26fd80ff029431dd29570e829530d63da9f7077c56e17f52d237827855420e4135280e6688126d49393760ed20a96d49dbf684c55996be544571a3051f06776200906e77023ea4d9e23569d1607fb57abf28962f08ebd03627a4486e97eb62717be7b9876723c47b07f6ce687495056fa8f06272359dcf2e9e3c76a3bdeff03b91331d048451fc553e0947a28a4a0bc7df541f09a288030000",
    ],
    [
      "ETag",
      "BOj1N7/IYzsOrBRbKlq27g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:53 GMT",
      "Server",
      "ESF",
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
                { value: "another@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-18-1625184933653",
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
      "da",
      "30",
      "14",
      "fd",
      "2b91f765937884421240aa5ada661b1285368476ed3481636ea8db10a7b6c3462bfefb6e1ce863d55a2912c4e79c7bcf7d388fe48ea773d225115fdce720d79f6e45442a04345de0e964f4e3267d500ff36b6094ad8ed4f9b59b9defef2383172a45975902552572c9407527e3da428a3ca352882a06aa36dad586bbe734daad4eb3e93a4dd42948e2014fef507da375a6baf5fa2e776d21c422019a71556362f9745e5fedd533296e8169557f9db28e5954fdfda4078960547391ee4fc668205720a7b0a43c410bcfca7974f83a748dd3656d81e4156740191379aa0b5b18828934e68b5c9aa8a4fb488ccd177fc8d81ff8c7a1359b530d338b2a6b3a95a0f24457ac99c9bd3dcceeacafc1e8d49a617d314f40cdaccbef7ee05b4fb4fed09a0c87fe38b43e1f7cb1be05a3c9997574b5832bdb14686a0e4af3d4580a6994406167dbb5fedb591502aaa982129c7ab64b1b6dbb13c591c7e276d389621ba2a81d790e6d4636ebb4a0358f80a24e17d18d8aa6226d80ed442d3a6fb9aeeb79b1c76c7bcf6d351d7c6c16b79c0eb81e75e6403615f25b720d275c6542f1b275e432e887fe340c26c3e35ee89b32628a7d3a29cd1545bcf4a9b14824bd53d7a640b9c04cc51cfac3d00f7ac761ffc22f473f800565ebf13d0e3fa6890264534997a0419e0a74d92567a3713fec8f86bd012acc3ccf760c45ba3f1f9f05e13a335dd6e697f482a077851a2a255dff838dc3a03ffc46369b17f92e68921b8e1198b732c1aa0408dce2f209aeec43f8638a34ebb7a93c3370313534fe0be37cf40dc8d7f8af0d3e158237a5f448ce277e7045caa300629090b28fb707c906",
      "f8f0c2ef6e5ff13919176994c677dc55a68a244c42b9b37c5998d9a99da6db68104396fa0de6799ddd708a1845445842aab71595b7cf74bb8072f5444210576d58cee22fc0626bc8fd040000",
    ],
    [
      "ETag",
      "UOXhnzszdZecacvBsQZ6pQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:53 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-18-1625184933653"
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
      "6d916f4fc23010c6bf4b7dbb99fd11824b4804244a24440604d11052ca6d0eb6dd6c3b9110bebbd76ad418deb477d7dfd33c4f7b64bbacdcb088adb3f4ad0679b848418f4d1183aa73ad68abb054c01c069aa7442e7aade7c57c8c0fe1749e14f2098abd5ea4ed36114abc42c15974644906f946b1e8e5c84a5e00c9562b696f244c1f2a33b9ed4cfbd415b831dd68361c76bac33e3b397f34d5ee979f4ce3c1e8ee9c627972d816d7312420a114601c5412b720f4c08453bca8727015d652806216b607a9c4bae212d1a589ebb75cbf1934fcd6d57518361b2181390aae332c899d4dc81ad3a8791ee39eb2b18000694b8a99d8f5dd8cbdc073bdc0f57c9bc58c600bf21d33e5ddc087f57229b0b0becf0a831fa100aec1ffaf5a7efbe81e34a84789144a81c9137a8daf743d34bca697d0b20687094e5f739f6916253c5770fa04885170b4f8010000",
    ],
    [
      "ETag",
      "YC8ZYWQoK3TWfmrXemwtYg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:54 GMT",
      "Server",
      "ESF",
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
      "000002ff1dd04b7282300000d0bb642d8e8806e9ce202a04f9c9087593011a3ea229041442a777afd323bcf703922ca35d47faef9a32f00144b2d4e6d91c371b848a6a604ee7c2820cc597ed8f135777f9e1aa474ed2371e7e152c46ce0dd67df9a9e808494a747f2c56f2ab09bb9b79929e569cba1692bbb4aad3c00c8f02aa817669ad20a24feb309df44dfb107ecebdab89377858372a6c39595da039f06555ee32fbe52a6725d80e3d5c4c8641c243bc558c49de97ae66db22b9da2b9c26b51e8a059e3847a5c42592a7fe9ad78f88d1bd3732ebc8d4f3ce60771433a1e66006e8d8549c76a47a7395b5a6cdc0bf9df4a2a1ef0044134e39f8fd03e214bfcf1a010000",
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
      "Fri, 02 Jul 2021 00:15:54 GMT",
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
      jobId: "grouparoo-job-19-1625184933653",
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
      "db3014fd2b91f795be93bea46a546d804a6d3ad214c6a629b2dd9b6096c42576d810ea7fdfb5431908093ec5f63de79e731f7922bf45b12363c2447a5f41f9f8e54e32724240d3145f2fe1d6fb31389f566d95ff9dafbe2f6fe4a0339d4c10210c4bd17c9f4143c9aae4a0c6db4d332d65b5a7a5940d4cd4e88c1a9d7ed7eb0cdd51afd7f77ac85390254b51fc46f6add67b356eb58edacd54ca3403ba17aac965fef2de7ae8b6f6a5bc03ae55ebad640b5554eb63d1af99e4540b594cb61b3450292863c8a9c8d0c27fe68e9dbe4ddd14346fa6087e101c28e7b22ab4b18529b82c129156a5cd4ac64fc4da7c75201b7fe9cf2287cbacca8bb8a0399c383baa69ac1ff7e09c85eb95b308ced6e16a1a2dd641bc995df8ab6973b65e6e57c1c6b9bef043dfd1946560b9cec439b5b7002fa8bf03a54561d523f36c949f1bb4783f164340690575301eb4fbb4336c8f58c2063c19f63c96b481b1211b78b4c7da7ce482bb63409167452d8b16b260fd91eb795d376ef3ce30464c2f667d8fc7434e7709f368e2269c1c4ec89f5268980bb5974ad41d22d7e122f2e328dc06b369e4db12125a657a5e1b3305bcf6a8b140047d50d3c144854425d3ee4510f9e174162daefc7ac24b48297fdcdce38c139a2940342db1791aca95dc61c348305df97304db897d3b061519ff7c22a6e7c6c5ab96bfd0231ca0b1abed976ca270119c5b3b47c415cd2a0b79a80fa68c4464c6f4e117027147eb24e472eb8737a47e0a2181120afef930116c039ffe6ac7bd472c6e3eca288d775c1dae8c082fa15e2161ab3db23dd71d76880597fa5dacdf6d1f9b6672988c9043a19f2baaf71e0badc52af502c2204e3fb0cd3afc0388d5d17977040000",
    ],
    [
      "ETag",
      "Qeh5Z7GAu0smxDMXLYo71A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:54 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-19-1625184933653"
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
      "4f",
      "db",
      "30",
      "10",
      "c6",
      "bf",
      "8bf7369508fdb3128917ede8b68eb4656de0cd8422635f3233c7176ca7a8aafadd770e50a68114de2477e7df29778f9fecd91f65244bd89d2a1f1ab0bb4f25f89f2158836bb477f4aad138601103cf4b222f6fb274b718a7f2211d2c6f447c793ad63f1ecfcf8970e237549c257b5628d0d2b1e4d79e195e01b509d44d65f2368b98dfd5a1b8c9d6f3e537ca2b94215f5ea7e9649aced8213a364aee79def21f68bb3d44ec1eefd65080052320cc525bbc07e1e7614dc7ab5a43cf61630538d6c2ed4169b1a9b945ec51a5179ff5e2d1e9301e0fcefafdd1b04fa046c1bd4243ecf586e6631e3dd76b7ca42d591c08dbc6b471d13eb75457b2dd2484f365361ab403fe0b7021b0313eef040b659d7f52ef057c56e17f52f30f8274554a7741251809b68b5275cea5b4e05c27892ee7757dc4a6ab55fa5615232d2ad90d6e5507a0fdf6087c4d5793f7a42583bd6a7531c9666f08e7c93647249b2f669b6cb2b80adcedb311a63b0feeca22b9ca4130547c32180f3f8f4e9e3cf60583efe83b89b70d444c70fa55be2bcf92826b0787bffa3f62ac88030000",
    ],
    [
      "ETag",
      "KVTLyM8LdqL4NVc1K28lJw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:55 GMT",
      "Server",
      "ESF",
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
                { value: "another@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-20-1625184933653",
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
      "6fda3014fd2b91f765937824840041aa5a46d32e1a852e84566c9ac00937a9db1053dbe98a2afefb6e9cd2c7aab51212e073ce3df7f9406e58be227d12b1f4b600b1fd74cd235223a0688aaf57c9f71349efb7a6974743339d9b3fbd813f383840062b5592ae3719d4252f440cb23f9b3652c18b0d159cd73150bd65d6ad4ecbb17a6dd7b63b8e8d3a09593262f94d195da98dec379b7bef46ca799a01dd30d988f9fae9bd79d76a6e04bf8658c9e66bcb26bac8e6fba687198fa9623c3f984d3181428258c09ab20c537856aea2a3d7a11b8cae1b2992ef580c348e7991ab322d0c11f33c6169217454d27f203acd173fc8d41b79c3d0584a8531970695c66221401699aa194b6dfef8b8b9314e82c999b1c4021396815c1a97dfbcc0339e68fed8988dc7de34343e1f7e314e83c9ecdcf83adfc3b5bd07a6b502a958ae930a69944199d063dffcb7d32a0554510915b8e89a1d6af54c374aa26e9cf46c274a4c88a25ed475a81d99b1db86f62a028a3a5546d72a9af3bcdd72dd9eb56a755ba66dbaa6d572ad0e746dd3816ecf6e5b0e4da8eb9a4e427635f2473005c74c6eb86455f3c865e087de220c66e3e120f4741909c5461d57c99545bccc536191487aa7ae5d89328e4ee524fc71e8058361e85f78d5f04790d2783bbdc5f1273493806c2ae81a148833bec2a691f3c9d40ffdc9783042859ee8f99e2149ffd7c3b320dc6e749795fe26832018cc514385a0db7fb06918f8e353b2dbbdf0bba059a1395aa0ff5506771540e01ad78f33691ec1bd2e522fe0aef6ccc0d55460fd17c6f9a82b10aff1df3bfcd408de4a9523f931f38239a99e024840401e7fbc3d48d6c08727bfbf3fe4e205a20d6eac62b8abb12c4d6201d5ceb27599cc5eed3876ab4d3459a83758dbb1f6c329639411610db97aaca8ba3fdded122ae413",
      "09415cb571358bbfa063df71ff040000",
    ],
    [
      "ETag",
      "hfKFsaxy0EnbC0gY0ZEAIA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:55 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-20-1625184933653"
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
      "0000000002ff6d91516bc2301485ff4bf6da4a6b6db1823015710e95add5970d91186f6bb5eded92d44dc4ffbedb6c30d9f6925c4ece17ce492eec98953bd663db2c7dab419eef52d0cfcd1081aa73ad68abb054c02c069aa7e4dc977e7d827818a4c1e831c463bc1abd4cd27e9f1c4aeca1e0ac77614906f94eb1deeb8595bc00c2361b696e249b3e578db29ccec7f172307f22a9c05d232d56b3d960381bb3ab750356c71f285e46d3c5e43f627db5d801b7112420a114d0c4a8241e40e869d350f1a2cac156584b018a19b3394825d6159788362976dbb1dda0edbbdd4ee87981ef913147c175862579573145631a35cf237ca782ac4d066946ea9a98f544b2dbf2bb8eef876ed81987a64ea3c201e40933e5dcc38789d3125898e87fd8a043f42d2b806b707f83ebef34c3b306f52491aa29685a798effd571848d5fd37b685983c504a75f7ac834eb253c5770fd041dcd8f1703020000",
    ],
    [
      "ETag",
      "hn5uveSB6g6CJ9okSUCZGg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:56 GMT",
      "Server",
      "ESF",
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
      "7fc9d9710065496f04440b8552d9bd6410239b2c421488d37fafd34f78ef05d22c23e388695793167c802515e03a5b5bbd82505e55aad4c791c174ec545291745bf9860673d3b59acb6e7ba4f1391a3e153c13ffd26a741f9d0b78f09fcb6c04472fbe8b7932a9053e7531f233238caf5be8f8dfaa4531a28d24f14a2e3632b3dbca6641392b67c7ba60ea3edd2e9c383173aa6017b22a1985941e6ace4e77f249645ffcc81e07996f263b6ce43e30bc5438ca647a3eeefba454b548575a21f4a3877035bb78316f3aac71e8c11fcedd26ae005680cc7d399011976fee46847005feed982e3d790720920e6400bf7fe54d8ea81a010000",
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
      "Fri, 02 Jul 2021 00:15:56 GMT",
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
      jobId: "grouparoo-job-21-1625184933653",
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
      "000002ff85536b6f9b3014fd2bc8fbda0448027948d11a2574430a6403d2ae9b26648ca16e01536c5a4555fefb2ea6e95a556a3f61fb9e73cfb90f9ed01dab52b44009cbef5bda1cbedcf2049d212a710eaf8762736ddb332fbb5cffb67e5d89e985d7dc3d2e9780601d4be0b22ee840f0b621542cf6e1306f785be386f301241a8ccc81698f2c7336998fc7b635069ea045b665d51db06fa4acc542d74fdac39cf3bca0b866624878f9f2ae3f8cf4bae1b79448a1bf95d44145e81f8b7e2d38c192f16ab90fc1402b6813d312b3022cfc67a6c9f9dbd44386cb610ee00746282684b795ec6c410ac2ab8ce56da3b2a2c51352365f1d50e86c9d75a4115eb4651557b8a4675a8a258ee5a1a6da45b0f334d7bfd805de2a72777e1caebf3bde6ab8de6df79e1f6a57df9dc0d1244e0aaab8da523b57371f2ea09f522159a5d4a3eeb9537e6e90fb7e2c1d01a405ed83f1d4b0b13933e649964c49361b5b4966d0249925530b8f1383cc2774922614034f892a16ae78959a784a2c3c8ab32cb3e3c98858f19c18f338334d7b6ccc0dd39c9ae878861e1b26e986899a0bd677085d056ee4c451b0f7d7abc8512564b82de4a637d615f0daa3840201f4414dc72eca382875ed76fdc80956ebc8bd74fa096f698ec921bc871967b81014d0b881e649da783c8586217fe5391b00ab89fd3805055afc79425dcf3b17af5afe428f60809d5da9be288c02d7ffa6ec9c1097b86815e4a13fa01a2cdf406de0faf81790b0a47d16f473ef04d7a87f0a68461b5a91cfa7096015f8f45f3b2d3e6061f5414648b8c3ee10d1899086f63bc454b927b605c39c22056ee4bbd8c4b44e5deb72741969492bf95c51bff850682fd68a17100461fcbeead6f11f2241502178040000",
    ],
    [
      "ETag",
      "ylDY668MfVCZ5XWs7FMrkw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:56 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-21-1625184933653"
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
      "0000000002ff8d92414fc2401085ffcb782d8142a9d884435154222296120f8690a59d4271dbadbb5b9110febbb315d1a8895eda99e937dbf75ebb83a7348fc18345ba7c2e516e4f96a8ef4d11a02ab956742b44ae102c40cd9644b246731ddcb875a96cbfd17975560f659d6fba5d2254b4c28c81b78324451e2bf01e7790b30c692d12bcccf279d559a0b785194ec26030baa23e13b1e947d3e1d0ef0dfbb0b78e8b31d36c5ef1ff589bed2d588b4580094acc23345a0a29d618e981b1a9585670ac2951ca08155470f5602945593029448d26b5a65db3dd66dbee3867ad96db6e11c845c4742a7262a713d2075a68c603b12197e01220ab920c27d5f585c6695c1931e56014ba4ea5ef2b40d29294e3fc6f90f4ae187d860fec10c1778e65a2ccf591ba1cdef9bf1d47997e1e75e187fd1f84d294d4110907b7fd49e8df8e0d373b78ef6d35aab11414a44293a1dd703aed53b7f11eebb93051d37b3c2d4bb42062f4775ca71abc847185fb3752e7b5ba7b020000",
    ],
    [
      "ETag",
      "a02jRK6/rs1A08x4hWu/lw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:57 GMT",
      "Server",
      "ESF",
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
          "SELECT COALESCE(AVG(`amount`), 0) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-22-1625184933653",
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
      "0002ff85537f6f9b3010fd2ac8fba795d20412203fa4aacb529a31a5a403d22a9aa6c41843dd124c6d9329aaf2dd7740d336abb44a9188fddebb7b77be7b468f2c8fd108452c7d2aa9d87d79e0116a21aa700ab7f6d25b9ac5727b65fd88a7a6492d1c84617a7e0e0c56a924de14193d93bc1484cad12268a7829705169c9f41a0b36ef7ccb0bb96313087bd9e6df540276996cc58fe08ea7ba50a39ea740eb9db29e7694671c1649bf0cdeb7d67dbed14823f50a264e7386507b2c8ceff935e649c60c5787ebe08c04029a958d10d6619587853c6d1d7e3d06d8637ed14c85b4628268497b9aa6c4108c2f384a5a5a8a3a2d133aa6dbefb830267e64c426d321fcf9c60e29c8c6fa7276bbca962ac4f5b9a7eaa61a9ad5682ca32532d6d0de5252ca32b16af1ba478d4aefcf9352060e61e4b2ad7dadd77c777b463b2eb690bcf7382503bb938d5a6fe7c71a37d5b1e71c0704ca562796d37c451462bab2f1d753fbe6325c00a7236e0aaafdbd818e8c32889fa2419f4ac28d169140da2be857b914e862635e38862d0a92a7aadc239cf0dda3586436b18e36e7f8893080f4cddb00d82ed18dba69124e6801884f6d1be85fe08a6e825930597ac692bbaf3ddd05985fec29b8c43a72e23c1d0afcbc65c55c47b9f0a8a04d27feada5728e390a97a23d70b1d7f3c09dd5ba7198b194d31d9054f301809ce2405361678431515d73c86a6a19b79e086eedc1bcf4051bff5cd8121d1e8d7f39b20dc15759755fd4563df1f2f418385c0bb7f30f0619b68bf7f97ee1667654da9f9f5a989bf6d0064402d6fa7eed1c946fbdf7bf8b5106c43930bfd5c38fe1235573e4da8a039f97c0a805c039f2ef561c3800b3b0669a48233cc1c9155122268337b6c539b7f515b7d53d7514d16ea036699faa1c9558c2a22ddd05cbd54d46c58ddb60a2ae52b09401819cff5a680fe0575b5f78ee1040000",
    ],
    [
      "ETag",
      "6YNY4pYvF5JdG44e5aSTTg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:57 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-22-1625184933653"
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
      "02ff6d905b4fc2401085ffcbf8686b682b174978008348d2a05448348690a54c4ba1edd4dd6d0509ffddd96a0226eec35e66beb37bce1e6197e46be8c22a893f4a9487ab18f5d46c025465aa152f05e50ac102d42266f26db689b1339ad3f66bdf28af83d77d554da7bd1e132adc6026a07b8428c174ada0fb7e845c64c8b2e552d63732a60f85a93cf84ffd191f335a9be364eefbfd813f849375212a7667c178321b8e86c17f92c5c9822dad028c50621ea2f15048da62a8c7269e125991a2ada894212aa8e1ba114b2a0b21896caed8ae6b3b2db7e9746eef3cafd5f4184c29143aa19cd9f90b7b034d5aa4017d723a701990f5968346f55c71d9b9e9b45b8d8be1d5a1aa5a61bcfe85dbe7b663da8bdf4706078dea59123b5668cc7a6ee3c7fa3d99389a636a59a205a1e09f7f4c347423912a3c7d03d550020fd7010000",
    ],
    [
      "ETag",
      "YThge8GUojzx0u+RXxvvQQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:58 GMT",
      "Server",
      "ESF",
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
      "ff1dd04b7282300000d0bb642d4ec5f2497722c8cfa00855e82643d3080104090846a777afd323bcf7041921b4eff1d056b4011f4064329c93b97fd50d236744125d5dfa1b273573936af69917ba67e756acee2b3c5a1ef2ea139756a65d853794435edd0e51cb8f87641774451c3f26d23fdc095b49ebaa22cf46a7f6891e978ba3e1c2912f93d37a8cbec7a45cc39693addaa59a9d9c1cea176f9683dee5a6ea421579da435e25c6c474d981380b9500851753fa69fac845413d6c77b21aba77d65cc43d5a98763f6c0d24ca150b5365b2f8ad6c375fa9cdcef1a7b2073340ef57c6698fd98bbb54209c817f3b1ec495be020c9a71cac1ef1f416637151a010000",
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
      "Fri, 02 Jul 2021 00:15:58 GMT",
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
      jobId: "grouparoo-job-23-1625184933653",
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
      "9b3014fd2bc8fbda8484bc48a4688d52ba444ac806a4d5344dc8980b750b98629329abf2df77314dd7aa52fb09dbf79c7bce7df0441e781193198978fa584375fc722f22724140d1145fc7e6c3beecadb64b2bff7befd793eb43c057e97c8e08deb024cdcb0c3a52d4150339dbfbddb41275492b213a98a8630d3afdb135eadbc3e960301e0d9027214b36bc7840f69d52a59c99e659bb9b0a9166404b2ebb4ce42fefe6c132cb4adc0353d27c2b69a28a343f16fd9a09461517c57cefa3815a4215424e798616fe33e3e8f26dea2ea7793745f08133a08c89ba508d2d4cc14491f0b4ae7456327b22dae6ab03f19d8db30c0c26b23a2fc282e67061c454d1501d4b30aebdddd658bbd73b6fbb08d63b37f4972b67bbe82e779bfdd6f58ddb95e33986a251069a6bcc8d4b7d73f182fa3148c50bad1e34cf8df27383d6efc7d210505a421b0c27bd31eddbbd6994441396d8835194f4208aec6832a283a8c7a64318c61150e46951cda28528e209b07894b0905ad35e384cec7118d181154e6d1a8d7a18b06d8b9c2ec89f8a2bb8e2b21492b71d22b7de3a70c2c0dbbbcb45e0e812125a67eaaa35d614f0daa3c20211f4414da726ca052a35ed5ebb81e32d96c1fac66927bc8194b2a3ff88334e682601d1b4c2e629a8b622c6861177b175ae10ac27f6fd1c9464f6eb89343d6f5cbc6af90b3dc001367695fe123ff0d6ee376de78cb8a159ad2187f6404ab47c87b5a1ebd36f44e292b659c88fbde3fd24ed9307095450b0cfa789601df8f45f3b2f3e6271f551462abce3ee30d988b00ada1de2badc337b640fed31d1e04abd8b8dfbfd73d79a1c4d46c8a150cf15b58b8f85b662b57c016110c7efea6e9dfe01996a2c0b78040000",
    ],
    [
      "ETag",
      "6/kUp0HMC2mzjSu7FvTiHg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:58 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-23-1625184933653"
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
      "0000000002ff8d92dd6e82401085df657a594cfda596c40bb4da92a8b58849d3c69815064481c5ddc5c618dfbdb3d4daa66dd2dec0ccf0cd72ce81036ce22c000b9671b42d50ec2f22548fba705116899274cb7926110c40c52222fbfed3a0b7bb7c76c20d8eab6aabd2f42ab03b1d22a4bfc29481758030c6249060bd1c206329d29acf9322cd16656780dae77a38f55c677c477dca03dd8f67c3a1dd1df6e1689c1703a6d8a2e4ffb1363f1ab0e64b17431498f9a8b5e482afd1578eb629599a275891bc103e4a28e1f24124789133c1798526957aa35233ebad5abb79d36898ad068109f7998a7946ec6c4afa4071c51297bf924b300910654986c3f2baa3711c944674e98c3db359eafb0a90b4304e70f137487a578c3ec307768ae03bc7525e64ea4c0d860ff66fc751a69f47ddda5eff0721152575463c67d49f7af668a2b9f9c97b77af504e04a72025ea0c6bd566bb756d56df63ed711d35bdc752a240037c467fc77dacc00a5922f1f8067f5c4d227b020000",
    ],
    [
      "ETag",
      "EcXFCv+ZIfkeN0tqtmm/dA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:59 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-24-1625184933653",
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
      "00000002ff85537f4fa34010fd2a64ef1f4d6ae90fa0d0c478b5727724952aa51a73b9b40b0cb8165864172f8de977bf01acda33d1a409dd7defcdbc999d79261b9647644c02963c56506ebf3df0807408489ae06d258bbeba993f78936a701d6d82f33ee474727a8a0c56ab04cd8a144e04afca10c478b9e82625af0a5a727e82814e06da49df18e87d53b38643431fa24e401acf58be41f5bd948518abea3e7737e13c4981164c74439ebddeab4f03b528f9038452a8872955cc22d4cf939ea53ca492f1fc74b94003958072051965295a785346c1f7c3d05d46b36e82e42716020d435ee5b2b68521429ec72ca9ca262a193f93c6e6bb3f6461cfeca9af4ce74bd73f5ad3ac16af8f152a94d5aa0451a5b2a3acb1a698a5b062d1ba458a8df2c39b5f22820eeea900b1566e7fd99ead1c921d5759baaebdf095a3b363e5a7375f5e29e777071c741981902c6f3cfa3448a1f6f7d246e7e3e3d5022a31670bae463d83f6cd9e15c4c1288ccda11ec43d08023318e97418f4424b032d0a80a24ed6d11b15cd790e7a48213075cd0a2223eee97460c4d4ec1966a0995668c1501fc514e211d975c8df9249b860a2e082b5bd24b79ee3db2bdf5bbad3896f3765c414fb75d19aab8b78ef53629148faa4ae5d8d328e99ea87715cdff62653dfb9b1db59984142c3ede211a721a6a90064d3926620a1bce411368d5ccd178eefccddc90c15cd035fed19828c7f3fbf09fc6dd17459365f32f1bcc91d6a6859d2ed7f18fa3034b2dbbd4b7743d3aaa134fce6d4c67f6a01d2c75ade4e83839341767f76f8eb105c813617b95edade1d69af3c88a1843cfc7a0a90dc005f6ef27ead908b8b856984c433ce5c28ea246109edecb1ac31ffa2d62d4d1f90865cca0f986e99fb26d731ea8890412e5f2a6ad7aa695b0d55e29584208e8cebb83f11fd07057d8895d6040000",
    ],
    [
      "ETag",
      "utp1/kOjRAu2QdkbB1enaA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:15:59 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-24-1625184933653"
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
      "1085ffcbf4d884d6c4581bf050455a21884d2b084564934cd268924977378a15ffbbb3db523cf6b2bbbcf7cdf0de9e60573619849094c55787f27853a07e358f18555769c5574b8d427000b528985c95d9f76a394982e1ed4374b74fa2245d7887d18809957e622d203c415e629529083f4ed0881a796cb391762363fad81a65367f9f3e4f63166aca8c305f46d1d3389ac2d9b91a6b77ff1a599f1dd85212638e129b144d8a56d216533d330595a8db0a5d459d4c518185ad5148ea5a21895c565cafeff6065ed01bf61f7d7f10f80c56940a5d52c3ecf28db381262daa980edc0f3c06a47d72d5dc9e7b9603db616f0113edda1bfc793de3ad7f178e8f1ad54212a7536882f9defd4fcc0999e89a2b69d9a103a9e07f7e293584b9a8149e2f83c3c610c5010000",
    ],
    [
      "ETag",
      "XidzXUCb58+7L/vbLbcP2w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:00 GMT",
      "Server",
      "ESF",
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
      "ff",
      "1d",
      "d0",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00d0bb642d0e91f04977fc46018b8058944d26d2f0a9688144053abd7b9d1ee1bd1f408b82714ec4f785ddc01b98e80a2f8b65d0199655d59947b5227e3a1ba7175984ab58e885bef9d4e713a6efae36a7f6219155f448735b5b29dbb1869d8f8efcd895d76dd8dfdbc379975bf72f6ede8e91118fd5c6f53598045acd1deff18188e9c7aeac8643acd728c3521df0b04f11b94b4ec86a28bc9e59d576b26120765822b6da5f257d4dcfb94c1a292b8c28da8920563cdc867a79827b88682bb4cb0ccd1332db149595b14e922172d62eca6798c32758003676cdc038695e5c45c57801feed444c1d7b05588c0e6c00bf7fc2a0f9071a010000",
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
      "Fri, 02 Jul 2021 00:16:00 GMT",
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
      jobId: "grouparoo-job-25-1625184933653",
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
      "4014fd2b64f6716da985b6b449b3d68a2b6b4b9552cdee664386e9054781416670634cfffb5e06eb6a4cf48999b9e7dc73ee074fe48e175b3221314fef6ba81ebfdc8a981c105034c5d7bcf81a38ce8ff3e35fe76c3e6461e8a98be3cbe91411bc61499a971974a4a82b0672b25977d34ad425ad84e860a24e7fd0391cf607878e3db6ace1c0429e842c59f0e20ed9374a9572629a7bed6e2a449a012db9ec3291bfbc9b0f7db3acc42d3025cdb79226aa48f363d16f99605471514c376b34504ba822c829cfd0c27fe6363e7a9bbacb69de4d11fcc01950c6445da8c616a660a248785a573a2b993c116df3d581acdd853b0f0d26b23a2fa282e670606ca9a2917a2cc1380d564bc3f34f57c172167a2b3f5acfcfdce5ac3b5f2d364b7f6d5c9fb9816b281a67a0b9c6d438d2371f2fa8bf05a978a1d5c3e6b9517e6e90f77e2c0d01a525b4c168d41bd243a7378e9378c412c71ac4490fe2d88947036ac53d36b6c1dec64091a745358b16a2183b7d3ba16047fd1e7522db61e328b6611b8d4716d8147a344e80ec0ec8df8a2b38e1b21492b71d22d78117ba51186cfcf92c74750909ad3375d21a6b0a78ed51618108faa0a65d13e502959a767b7ee806b379e85db9ed84179052f6b8bec71927349380685a61f314544bb1c586117fb6744f10ac2776b10f4a32f9fd449a9e372e5eb5fc851ee2001bbb4a7fc93a0c3cffbbb6b3475cd1acd69087f6404ab47c83b5a1ebdd1f44e292b659c8e5c60d7e92f62980042a28d8e7d344b00e7cfaafed171fb1b8fa282315de7177986c445805ed0e715dee9e3dec8d2cfda72a5aa97731c71aefbbd6e46832420e857aaea85d7c2cb415abe50b0883387e5f776bf70f7906a1eb78040000",
    ],
    [
      "ETag",
      "mn+R88JKBZKcC6cTTItPBQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:00 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-25-1625184933653"
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
      "000002ff8d925b4f83401085ffcbf84a636f6025e903d5aa98dea4f4c198a6d9c240a9c0e2eed2a636fdefce62ad464df40566866f96730eece139c943b06199c42f258add598cea41171eca3255926e05cf258201a8584ce4761967e5e356a8f666eb9edf8f8793d77ae274bb44c8608519037b0f51826928c17eda43ce32a4b580a765962faace00b52bf470ea7beee896fa8c87ba1fcd0603a737e8c3c1382d864cb145c5ff636d7e3060cd971e4628300f506b29045f63a05c6d53b2ac48b1267929029450c1d58358f0b26082f31a4d6a4db3d6b09a66a3d3be6cb52cb34560ca03a6129e133b9b923e505cb1d4e35b72091601a22ac970545d37344ec2ca882edd916fb52b7d5f01921625292efe0649ef8ad167f8c08e117ce758c6cb5c9da89bc1d8f9ed38caf4f3a86bc7efff20a4a2a44e88ef0efb53df194e34373f7aefed14ca89e014a4449d61a3deee981756fd3dd62baea3a6f7d84a946840c0e8efb84b14d8114b251ede00efc0cded7b020000",
    ],
    [
      "ETag",
      "wbgmuYwrt4vwI/JOMPz0iA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:01 GMT",
      "Server",
      "ESF",
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
          "SELECT COALESCE(SUM(`amount`), 0) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-26-1625184933653",
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
      "6f",
      "9b",
      "30",
      "10",
      "fd",
      "2ac8fba795d204f20348a4aacb52b6b1a5a40592aa9aa6c43886ba054c6d9329abf2dd7740d336abd44a9188fddebb7b77be7b44f72c5fa3118a58f25052b1fd74c723d44254e1046eef16962bd8df70115d3b3fbd685384e9f0c7d5e9293058a592382b527a2279290895a379d04e042f0b2c383f8140275df3c430bb03c3ee0f7b3d73d0039da4693c65f93da86f952ae4a8d3d9e76e279c2729c505936dc2b3e7fbcea6db2904bfa344c9ce61ca0e64919df7939ea59c60c5787e3a0fc04029a958d20cb3142cbc28d7d1e7c3d06d86b37602e40d231413c2cb5c55b62004e179cc9252d451d1e811d5365ffd4181337526a136998da74e30718e82f9c5d10a67558cd5714bd38f352cb5e5525059a6aaa5ada0bc98a574c9d6ab0629eeb5affeec021030738b25952bedfabbe33bda21d9f5b4b9e73941a81d9d1d6bdffcd9fc52fb7273c001c36b2a15cb6bbb218e525a597deaa8fbf61d2b015690b30197966e62c3d687511c5924b67b8328d66914d99135c0bd4827c33eedaf238a41a7aae8b50ae73c5fc75d1d1b98f6ad01a1bad9d74dbd4f6c4bb786832ec6bd9e8d63dbd0e321dab5d01fc1143d67b2e092356d45d7be1b3acbd09f7b9371e8d465c418fa75de98ab8a78ed534191407aa7ae5d85320e99aa3772bdd0f1c793d05d38cd584c6982c9367880c188712a29b0b1c01955545cf035340d5dce02377467de780a8afaad2ff70c8946bf1e5f04e1b6a8bbacea2f1afbfef806345808bcfd0f031f661fed76afd22d705ad6949a5f9f9af89b064006d4f272ea1e9c4cb4fbbd835f0bc13634b9d0d5dcf16f5073e5d3980a9a938fa700",
      "c835f0e152ef370cb8b06390462a38c3cc115925218236b3c7b2dafc93da344cc3423559a83798adf7f74dae625411694673f55451b36175db2aa894cf240061643cd7fb06e83fc37c0714e1040000",
    ],
    [
      "ETag",
      "jV7IrizTVbWEKNbvpTl9JQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:01 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-26-1625184933653"
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
      "4f",
      "c2",
      "30",
      "14",
      "85ffcbf575236c83094b78008302595007bc600829e36e0cb675b61d0a84ffee6d35ca837d686f7bbfd39ed30b1cb2720b016cb2f4bd4671ba4b51bdea224259e74ad252f1522258808aa5447627c778e2b6f2f3e748ed9ce5cc5ff6c7e7d75e8f0819efb060105c20c930df4a08de2e50b20249b65e0b732361ea54e993c7f0b93fa76dc1b77a3b5d84617f100ee16add88aac39f603c9d0f9f86d17f92d5d5823ddf4498a0c03246eda1127c8fb11aeb789215558eb6e4b5885182814d2315bcae98e0dca613dbf56dc777db4ea7d5f53cbfed1198f398a98c97c42e66e40d14572c8ff807a5039700614a0a9a98f9a8bfa8e1dd776f87c97434026df596759a0daff3db77747ff5f3c8e0a450be084e8e256ab39edbfcb6fec0751c453195a8d18298d1cf8f320541c27289d72f0dbc4074d7010000",
    ],
    [
      "ETag",
      "9JvcJ24lzxHth1ZS6ZAIzQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:02 GMT",
      "Server",
      "ESF",
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
      "ff",
      "1dd04b7282300000d0bb642d8e4810e80e502c3f21801fba6120068cfc02d116dae9ddebf408effd801c63c279f6e86bd2813730e76b6d89972e530da3a2dcdda3ae921557779e8adfaed959600cb5d6530feea88c0b731e93fbf62124fcf47156a7dda654662d6cade43a5881fd19bb1baffebe65060d63f14243f8b5b586e6d4f4926afae9ce467d2b136417895c0ed4ae615db5818ad2ad7ce8f14ac49537c77e1f949124b6cabb00d15144b1c02186bbbdff341d7a2d4967f2e4e01d895330585fb8ad13c948a309df5018a671ee3bd459194530347a1485d0030b40264647c233fae24ab2a62dc0bf3d7bcc8cbc020c928f6404bf7fe416f2f71a010000",
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
      "Fri, 02 Jul 2021 00:16:02 GMT",
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
      jobId: "grouparoo-job-27-1625184933653",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85535d6f9b3014fd2bc87b6d4212924022456b9ad2355a423620adb66942c65ca85b822936d9aa2aff7d17d374ad2ab54fd8bee7dc73ee078fe48e170999929867f735540f9f6e454c4e08289a35afc9757df6b56f26fbb3cd5f37b81adfb93fe57c3643046f5892eeca1c3a52d4150339dd06ddac1275492b213a98a833b03bfdf160d4778613cb1a8f2ce449c8d3152fee907da35429a7a679d4ee66426439d092cb2e13bbe777733f30cb4adc0253d27c2d69a28a34df17fd9c0b461517c56c1ba0815a4215c18ef21c2dfc6726f1e9ebd45d4e77dd0cc17bce803226ea4235b630051345cab3bad259c9f491689b2f0e247057ee223498c8eb5d11157407274642158dd44309c685bf591b4bef62e3afe7e172e345c1e2d25dcfbb8bcd6abbf602e3fad2f55d43d13807cd3566c6a9be797841fd04a4e285560f9be746f9a941cbb7636908282da10d46766f4cfb4e6f12a7b1cd52c71ac5690fe2d889ed11b5e21e9b0c6198c44091a745358b16a2b0009261ecf4222b61c36808e920a2605bd1c08927e3bed51f0dfb0e399c903f155770ce6529246f3b44aefd65e846a1bff516f3d0d525a4b4ced5796bac29e0a547850522e89d9a0e4d940b546adabdf442d79f2fc2e595db4e780519650fc13dce38a5b90444d30a9ba7a05a8b041b46bcf9da3d47b09ed8b7635092e9af47d2f4bc71f1a2e5cff41007d8d855fa4b82d05f7a5fb49d23e28ae6b586ecdb0329d1f20dd686ae0fbf11894bda6621dfb7aeff83b44f3ea45041c13e9e268275e0c37fedb8f888c5d54719a9f08ebbc36423c22a687788eb728fecf1c01edb44832bf526e6d89363d79a1c4d46d841a19e2a6a171f0b6dc56af90cc2208edfd3dd3afc03729fec6178040000",
    ],
    [
      "ETag",
      "bdWuBK1/dvBOxESV6kEZsA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:02 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-27-1625184933653"
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
      "6f",
      "82",
      "40",
      "1085ffcbf41512ad8296c4076dbd2578436c1f1a635618100b2cdd5dda18e37fef2cb5b6699bb42f30337cb39c73e0084f491e8203db247e2e511cae62540b5d7828cb5449ba153c970806a06231910fd9dc1a2c46c3617d560c56b84d96bdfb43dce91021831d660c9c234409a6a104e7f10839cb90d6029e9659bea93a03d4a1d0c3a5ef8da743ea331eea7eba72dd6ecfedc3c9b82c864cb14dc5ff636d7d3260cfb71e4628300f506b2904df63a0c6daa6645991a2297929029450c1d58358f0b26082739326e675cbacdbd756bdddbc69346cab4160ca03a6129e13bb5a923e505cb1d4e3afe4126c02445592e1a8babed038092b23ba1c4f7dbb59e9fb0a90b4284971f337487a778c3ec307768ee03bc7325ee6ea420ddc59f7b7e328d3cfa3eeba7eff072115257541fcf1a4bff4bb93b9e6d667efbd834239179c8294a833acd79a6dab65d7de63bde53a6a7a8fa3448906048cfe8e51a2c089582af1f406d672fbab7b020000",
    ],
    [
      "ETag",
      "WmP5FQHGG1OpFUebiSBVyg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:03 GMT",
      "Server",
      "ESF",
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
          "SELECT MIN(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-28-1625184933653",
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
      "53fd6f9b3010fd5790f74b2be58b90f011a9ead294754c09e90869554d536283a14e01536c326555fef71dd0b4cd2ab5522462df7bf7de9def9ed003cb42344284c58f252d765f369ca016a212c7707bfff7c23006dbbb38e1939bcdccfeb1d9de0fe3b33340b08a25709a27b42d785904548c968b4e5cf032c705e76d48d4ee9b6d55ef0f557360699a3ed4802768124d59f65065973217a36ef7a0dd89398f138a73263a014f5feebbdb7e372ff8860652748f25bba022ba1f8b9e273cc092f1ec6cb90003a5a0c58aa6982560e1951992afc7a93b0ca79d18c05b16501c04bccc64650b52043c8b585c167556347a42b5cd377fd0c29eda135f9939eec91aa715757daa60a1ac56051565225bca1a2a8a5842572c5c3791fc41f9e6cd671001fd7b2ca8582bb7df6dcf568ec18eab2c5dd75ef8cac9f9a972e5cd97d7cac5dd11063c86544896d50e7d4c125ab97b6ea2f3fee92a0296a0d90457464fc7aad9b348448c2032b521897a9410931843ac915e600de8202414034f56d96b16ce78a6f6745d352ddc1f5a2a0902a367102dc49aa99ac40acdbe4a89119ab467a07d0bfd2998a4974ce45cb0a693e8d6737c7be57b4b7732f6edba8c0843bf2e1b7355116f7d4a2812401fd4b5afa28c8352f52c8eebdbde78e23b37763309531ae360b778845988702228a07181532a6931e321340d5dcf178eefccddf11418f5f35e1f10028d7e3dbd12fc5d5e7759d65f34f6bcf11d707051e0dd7f31f0a10fd07eff46ee0627650da9f1f5a9c9bf6d0248855a5e4ffda3938ef6bff7f06b215880460bfd5cdade1d6aae3c1ad18266c1e75300e03af0e91e1f960ab0b0562023249c61e602518904056d668fa5b5f967b6ae1986856a7021dfc52cb57f687295a3ca48539ac9e78a9aa5aadb56854af10282208c8cebb85710fd077843fa70d4040000",
    ],
    [
      "ETag",
      "hzB774vYgloCVjMEJjvh5g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:03 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-28-1625184933653"
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
      "ff6d90d14fc23010c6ff97f375236c03c4253c0001252ea813e28321a48cdb1c6c6b6d3bc820fcef5eab511e7c697b77bfeff27d3dc33eafb610c226cf3e6b94cd4d86fac53c625475a1155d82570ac101d42c23f2edd43c1ec653e4b3a2c253fd1688dd491c07032254f2812583f00c698ec55641f87e868a9548b2f55ada8d84e94698ce347a1a2ea82cf9d694f365140d47d1042ece9548ecff04b3f962723f89ff93ac2e0eecf826c6142556091a0f42f21d267a66e229568a025dc56b99a0020bdb4126792d98e4dca58eebf75dafe777bd7ee72e087add80c082274ce7bc2276f94ade4073cd8a981f291df80448fba4a0a93d0fd46eb76efb36c6c132c6ddf5d86b75fcdfb167c6ab9fb5a346a37a969c3c2a34f602bffd6d76cc4d004dc1b4acd18184d15f3fe41ac294150a2f5f38716b20c9010000",
    ],
    [
      "ETag",
      "WzyKvCFeoIlnezuW3pjzpw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:04 GMT",
      "Server",
      "ESF",
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
      "00000002ff1dd04b7282300000d0bb64ad8e1faaa6bb529456a81faa01b2c98490f215d30092a4d3bbd7e911defb019431deb6a4bb55bc01cf40d3399cb08927d6b69d654a7e9bbb65257556217afa3a6974188a4ebdef8ef3fdfa451f1dc73a0c89c90c0cdaa0d76e59a4a154f6f53e5e5d5224b0c736dd82697176fb0156ee0c6ecf66df86c950eb4b366d2025c1ad9c0ac3ab4b13bcb1e3501722525ae0cf452de22d1efb83ec53af1b5718a33877954cfb56427fb68f7cf44a18dce1282d7be594f9320a1b63e74e6d4534c34b239a3844d78df561cfe315a47797e439416004b81285e42d291edcc5138423f06f279d16fc1160732ab904bf7f17d8a1ab1a010000",
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
      "Fri, 02 Jul 2021 00:16:04 GMT",
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
      jobId: "grouparoo-job-29-1625184933653",
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
      "fbb8e64d1e448a5696d035524236425a4dd3846c73a16e09a6d8a4aaaafcf75d4cd3b5aad47ec2f63de79e731f3c913b91c7644a9848ef2b281fbfdc4a46ce08689ae26b0fdc87d01bba8bf862acbedeb28137ffbe73673344889aa5e8bec8a0a564557250d3ddb69d96b22a6829650b13b5fa4eab37ea0f7b13db190c46c301f21464c94ae477c8bed1ba50d34ee7a4dd4ea54c33a085506d2ef72fef9d43bf5394f216b8569db7921d54519d8f45bf6592532d643edb6dd140a5a08c604f458616fe336376fe36755bd07d3b45f04170a09ccb2ad7b52d4cc1659e88b42a4d56327d22c6e6ab03d97a2b6f1e5a5c66d53e8f72ba87332ba69a46fab100eb22d8acada57fb109d66eb8dcf8d1767ee9adddf67cb3daadfdad757de9059ea529cbc070ad99756e6e3e5e503f06a5456ed4c3fab9567e6ed0f2fd586a024a2b6882d1b83ba2bd49d761091bf3643218b2a40b8c4dd8784807accb1d1bec9801459e11352c9acbbc3b66719fda71148fc08e6ca7674713062c622c19414227633aec92e3197928858685508554a2e910b90e96a11785c1ce9fbba1674a486895e94563ac2ee0b5478d0522e8839a8e75544854aadbbdf4432f70e7e1f2ca6b26bc8294f2c7ed3dce38a1990244d3129ba7a15ccb181b467c77ed2d106c26f6f3145464fae789d43daf5dbc6af90b3dc401d676b5f9926d182cfd1fc6ce097145b3ca400ecd811468f9066b43d7c7bf88c4256db2905f3b2ff84d9aa700122821e79f4f13c126f0e9bf765a7cc4e2eaa38cd278c7dde1aa16e125343b244cb927f6",
      "c81e3b0e31e052bf8b3903e7d4b53a479d11f690ebe78a9ac5c7421bb14abd803088e3f74db78eff00a238909978040000",
    ],
    [
      "ETag",
      "1eAwTE5ADdF7s+jb3ECBUA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:05 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-29-1625184933653"
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
      "65",
      "bc85f49fb624bda0da2a495b95c285314db385815281c5dd45d3347d7767b156a3267a0333c337cb39070ef0941611d8b04993e70ac5fe224175af0b0f65952949b7921712c100542c21b2dd60c1d4cb93067a7e6a2541d5df6d1e9cd18808196e3167601f204e318b24d88f0728588eb416f2acca8b75dd19a0f6a51e2e7dcf5d5c539ff348f78b603673c6b3091c8df362c4145bd7fc3fd6564703767ce3618c028b10b59652f01d86cad53625cbcb0c4dc92b11a2841aae1f24825725139c9b3431db43b365b57bad4177d8e958bd0e81190f994a79416cb0247da0b86299c75fc925580488ba24c3717d7da1711ad54674e92e7cab5bebfb0a90b438cd70fd37487ab78c3ec307768ae03bc7725e15ea4c4d67b7ce6fc751a69f475d39fee40721152575467c773e59facefc4e73ab93f7f15ea1bc139c8294a8336c35bb835edf6abec77ac975d4f41e5b890a0d0819fd1d37a9023b6699c4e31b7c89ec617b020000",
    ],
    [
      "ETag",
      "2/aUFRmg/eRTi6gUu7jbYA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:05 GMT",
      "Server",
      "ESF",
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
          "SELECT MAX(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-30-1625184933653",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8553fd4fdb3010fd5722ef17904a9bf423fd9010eb2063d1da94a529ac9ba6d6712ec1238943ec1455a8fffb2e09053a24902aa5f6bd77efddf9ee91dcf1342023e2f3e8be807cfbe9aff0498380a211deeac6d2dd24b671ed7cd7fbd38b5ff7532b7b884e4f11c14b96a44916c3891445ce408e16f366948b22a3b9102798e8a4a39f1866bb670cbac34ec7ec759027210e273cbd43f6ad52991cb55a7bed6624441403cdb86c32913cdfb736ed56968bbfc0946c1d4ab65045b6de173d8b05a38a8bf47431470385847c0509e5315a786106fee7c3d44d4e936684e00d6740191345aa4a5b98828934e451915759c9e89154365ffd21736b629d7bda74fcf3684d9392ba3ed6a8d456ab1c6411ab86b6c68a421ec38a07eb3a92dd695fddd91423a87f4b25c8b576f3cd722ded106c3bdac271acb9a71d9d1d6b97ee6c71a57d591e60d0630052f1b472e8513f86d2dd5313edb74f5712a842cd3ab8eaeb263506fad00ffd3e0b079d9e1feae0fb03bfdfa31d5f67c32e74031f28f25499bd62d154a4e00ffd0ee886690e83360403d66db320845e180e431af48dc0a0dd8eae0764d7200f395770c1652624af3b496e5cdbb3569ebb70cec79e55951152ecd7456dae2ce2b54f854522e89dba7665940b542a9fc5763ccb1d9f7bf6b5554fc20422cab6f37b9c8590c612104d739a80827c2a026c1ab99acd6dcf9e39e30932aae7bdda232419fd7e7c2178dbaceab2aabe64ecbae32572689ed3ed7f31f46176c96ef74aee9ac64505a9f0d5a9cebfa903c4c05a5e4eed839349767f76f86b105c805a8bfc5858ee92d4572e849043ca3e9e020457810ff778bf5488c5b54219a9f08c33c76429c272a8678f2795f927b6d9eb1b26a9c0b97a131b74cd7d93cb1c65464820554f15d54b55b5ad0c15f21984411c19c7762e31fa0f57ddda6ad4040000",
    ],
    [
      "ETag",
      "01YRvmI1VNK07MDZqMEpwg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:05 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-30-1625184933653"
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
      "c1",
      "4ec24010fd97f1da92b60b284d3880a2121bd40a07630859cab416da4edddd6208e1df9dad463978d99d99f7dee4bd39c22eaf3610c23acf3e1a54878b0ccdb32d62d44d61347f35551ac10134326366d0bf7c0d0673cf0f6e1e1aeae5a9271649361c324327ef584a088f90e6586c34846f47a864892c5bad54bb9169e650dbc96df4389a735bd2c6b6b345148dc6d1044ece99a8defd09a6b3f9e46e12ff27599e1cd8d23ac6141556095a0fb5a22d26666ae36959d605ba9a1a95a08696dc0299a2a6968ac8e5892b3cd7ef073dffaa3b10a2df134c2c289126a78ab98b17f606868c2c62fad4f6164c506dc941d3f6ddf35874fc6e1b63df72acbb7338e804e217f62dbcfc593b3e18d44f8ad8a3466b4f04deb7d96bb2010c0733aa410712c9b7becf0d84a92c349ebe00bcd9a5d7c9010000",
    ],
    [
      "ETag",
      "267Y29T012DKuo5if03Ucg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:06 GMT",
      "Server",
      "ESF",
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
      "08000000000002ff1dd0db6e82300000d07fe9b3334045e91e8bd201e3121756d90be1520b058470936af6ef33fb84739e20cd73368ec9d4d5ec06de814c35b4cdb76e6f60ccb9e9e696e9fb96d837176a3ae5493e2231256f54cfc43e2e1cb7abe080f1cf11116e5ba7329523aeee4141a484935e2f8b656477efa0e268978cb0b8869cce63137ab6b2c0b377b99aa12a6c9666a1cb355f3a99d00242e4ba708b53b5c1a55c1189bb9274b243d581412333666a43faf54962c56b50c2304606ab1b337a105fe9bfdb5998eadc20d95bf171d7ea54dc32c9f5f55c05f3e383b76003d8da57031b93eac5853a421bf06f4f26d9b3570066e9c006f0fb078f425dfa1a010000",
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
      "Fri, 02 Jul 2021 00:16:06 GMT",
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
      jobId: "grouparoo-job-31-1625184933653",
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
      "3014fd2bc8fbda04121e7948d19aa5748d94900d48ab699a906d0c754b30c5266b55e5bfef629aac55a5f613b6ef39f79cfbe019ddf33245534478fed0b0fae9cb9d20e80c318573788da89b3f2e54434693a163668fdf6ef842cc673340f09625f1ae2a584f8aa6a64c4eb7513faf4553e15a881e24ead983dec01bba83b133b16dcfb581275991ad78790fec5ba52a3935cda3763f17222f18aeb8ec53b13bbd9bfba159d5e28e5125cdb79226a848f363d1af85a0587151ceb611186824ab13b6c3bc000bff9929397f9bbacff1ae9f0378cf29c3948aa654ad2d48414599f1bca97556347d46dae6ab038afc95bf880d2a8a66572625deb13323c50a27eaa962c665b8591bcbe07213aee7f1721324d1e2ca5fcffb8bcd6abb0e22e3e6ca0f7d43615230cd3566c6b9be057001fd9449c54bad1eb7cfadf24b8396efc7d212405ab22e988c2c0f0fc6d684646444b3b1ed92cc62848cc9c8c536b1e8c4614e4a18069e16d52c5c8a927803d7f2284d6c676825ced04d9309855366e19143c870924d327438437f6baed805979590bceb10ba0997b19fc4e13658cc635f9790e1a650179db1b680d71e151408a00f6a3ab4512e40a96df73288fd70be8897d77e37e115cb317d8a1e60c6192e240334aea1798ad56b9142c350305ffb1700d613fb710c4a34fdfd8cda9eb72e5eb5fc448f6180ad5da5bf288ac365f05ddb3922ae71d168c8be3ba00a2cdf426de0faf00790b0a45d16f473eb87bf50f714b28cd5aca49f4f13c03af0e9bf765c7cc0c2ea838c547087dda1b215a135eb7688eb728f6ccf736c0f6970addec55c1d3b2d7c9b91ed58a95e2aea161f0aedc41a79024110c61fe86e1dfe0153ebdef978040000",
    ],
    [
      "ETag",
      "Sc5gxCtub7924/fxBWiCoA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:06 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-31-1625184933653"
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
      "10",
      "c6ff97ed1566249494191f30ad2c35437c6a1ce7844551e0f0eeb01cc7ffbd3d326baa997a81dde5b7c7f77d70804d9247e0c222596e4b14fb8b25aa275df828cb5449ba153c970806a0624b2277aded65e6e70bbf1bc807db7f6d58f79b9ad76e1321c315660cdc03c409a69104f7f90039cb90d6429e96593eaf3a03d4bed0c349e0f747b7d4673cd2fd683a18789d410f8ec67931628acd2bfe1f6bb3a3016bbef031468179885a4b21f81a43d5d73625cb8a144dc94b11a2840aae1e2c052f0b2638376962da966939970dab596fd9b6d3b0094c79c854c27362a713d2078a2b96fafc855c824380a84a321c57d71d8d93a832a2cbfe2870ea95beaf00498b9314e77f83a477c5e8337c60a708be732ce365aeced4cde0d1fbed38caf4f3a8ae17f47e105251526724e80f7b93c01b8e35373b79efec15cab1e014a4449da155ab371b574eed3dd66baea3a6f7b84a946840c8e8efb84b14b8314b251edf00842604c17b020000",
    ],
    [
      "ETag",
      "v9q2mRnbRDTsK3Rx51Jk0A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:07 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`date`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-32-1625184933653",
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
      "f1",
      "6f",
      "a2",
      "3018fd5748ef972d514144149365e739ee8ec4a143d8b2bb5cb494c2ba0165b478318bfffb7dc0dce62dd912136ddf7bdf7bdfd7d627f4c0f2084d50c892c78a96bb2ff73c441d44254e6037c05796917335dbfd5afa4574bdbdb1b4697276060c56ab04ce8a947605af4a42c52458f5929257052e39ef42a1ee40eff64d7dd81f1bd660600e07a013348de72c7f00f59d948598a8eac1bb97709ea414174cf408cf5ef6d5adae1625bfa7440af5d8520517a17e6c7a9e728225e3f959b0820095a0e59a6698a510e15519855f8f4bf718ce7a0990b78c504c08af7259c7821284e7314baab2a98a264fa889f9e6075ad9737be62bb345e0fa279b084bba3955b050d6eb928a2a951d65031dc52ca56b166d5aa47850be7b8b4b40c0ff0e0b2a36cacd4fdbb39563b2e32a81ebda2b5f39393f557e788b60a97cbb3de240c6880ac9f226a18fc394d6e99e87e8bc3fba5a802578b6e07aa499b83fd6ac300e47241e0f8661acd1301c87a3211e841ab10c6a4421c5a09375f54685739e9b1109c36184715f3323c3d0c7238b4464ac99b4dfb7b0668ca885e3b1aea17d07fd2d99a4174c145cb07692e8c6737c7bed7b813b9bfa76d3468c615e176db8ba89b739253409a40ffadad728e3e0541f8be3fab6379df9ceb5ddde84394d30d9ad1ee12ec4381514d8b8c41995b4bce4110c0d2d172bc77716ee740e8ae6789707864093df4faf027f57345396cd379a7adef41634b82cf1ee3f0c729806daefdfd85de3b46a280dbf59b5f5b72d80fad0cbeb4a3f5a9968ff670f9f0e8207d07aa1abc0f66e51bbe5d1989634279fdf022037c0a7eff8f0a8ea7f89556d2324ace1ce11519b9092b6778f654df867b539d2471a6ac8a57c8719fae030e4ba465d91663497cf1db58faa",
      "195b0d55e28504205c19d7717f00fa0fc507845cd4040000",
    ],
    [
      "ETag",
      "UaQ94no/myZPTpdVvW90Ag==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:07 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-32-1625184933653"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d90414fc2401085ffcb78b44da015a24d380821824102450ec610b2b4d35ad876eaee1682a4ffddd9d5188e5e7637ef7d33796f2f7028aa1422d815f96783ea7c93a359da478cba9146f35553a5113c40237226579345d0794b875f237954c1edcbfcf9b44b978301133af9c052407481ac40996a88de2f508912796cbb556e2363e65c5b653a7f1d3f8d63164a4aad305fcf668fc3d9185aef6aac3efc6b64d37ab0a75d8c192aac12b4296a457b4cccd416d4a2ac25fa9a1a95a006073b2357d4d44211f9acf861e077fb41af7b7ff71086fd5ec8a0a44498822a66d72bce06868c90319db81f040c28f7e4aa993b8f2cf75c87a3036cb46bafffe775adb7f95d383c1bd40b459c4ea30d16069d9f9823b2d10d5732aa410f12c1ff3c290c4499901adb6fc0a82b6ac5010000",
    ],
    [
      "ETag",
      "SHP20YdBzClvr2+MNJwbdQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:07 GMT",
      "Server",
      "ESF",
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
      "8b08000000000002ff1dd04b7282300000d0bb64ad8e25584377fcfc40e457b5d00d0331421049c01405a777afd323bcf7041921f4764b25bfd0067c802153b41999b9021946c1f050267daed3e61cb68dc257cef7f212e981f986cf7917bcabe9e065a53dd8e8fa680e7d017d227b89dd9dbf97c53a2d60e0e13ab60c74af9cd35eadd6c2c6229f221cc2e5a58e5a6f34f97677addd8ddccee71cd58ba3b5f1ee82c43fa32a52c884c7b4762cc98a8756858ebe82929ce5115c7d16fb2669eb64f4f0976b2a2794350ba676e1bc1f6515393cb40f875a37d538e26d7824814fca296ca10326803e04ebe82d652f2e5c68da04fcdb533908fa0a3068d6d10efcfe01cca164f41a010000",
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
      "Fri, 02 Jul 2021 00:16:08 GMT",
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
      jobId: "grouparoo-job-33-1625184933653",
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
      "14fd2b64f6ab6d69e9039a346bb7e24a6ca90b5463361b324c2f384a1964068d6bfadff732585763a29f98997bce3de73e782677bcd892294978765f43f5f4ed5624e48880a219be7ae7cedd39ffbb1c241723fac3837ae45dd78fb3192278c3927457e6d091a2ae18c8e926ec6695a84b5a09d1c1441dcbeaf4c78351df1e3a96351e59c89390a74b5edc21fb46a9524e7bbd8376371322cb81965c7699d8bdbef71e06bdb212b7c094ecbd97eca18aec7d2efa3d178c2a2e8ad9264403b5842a861de5395af8cfdc26c7ef537739dd7533043f700694315117aab185299828529ed595ce4aa6cf44db7c7320a1bb741791c1445eef8ab8a03b3832b654d1583d95609c06eb95e1f9a7eb60358fbcb51f878b337735ef2ed6cbcdca0f8dab3337700d45931c34d79819c7fae6e305f5b720152fb47ad43c37ca2f0df23e8ea521a0b48436184fcc31eddba693a4c984a5b6354a521392c44e26236a2526738630dc264091a745358b16a2a0e3c9d0b4fb56ec3800f1d0e9d3d84e6c2b1e6c874e3a988cfaa63926fb23f2587105275c9642f2b643e42af022378e828dbf9847ae2e21a575ae4e5a634d016f3d2a2c10419fd4b46fa25ca052d36ecf8fdc60be88bc4bb79df01232ca9ec27b9c714a730988a615364f41b5125b6c18f1e72bf704c17a621787a024d3dfcfa4e979e3e24dcb5fe9110eb0b1abf4978451e0f93fb59d03e292e6b5863cb40752a2e51bac0d5defff201297b4cd427e6ddce09ab44f01a45041c1be9e268275e0cb7fedb0f888c5d54719a9f08ebbc36423c22a687788eb720fecb16d9913a2c195fa101b5afd43d79a1c4d46d841a15e2a6a171f0b6dc56af90ac2208edfd7dddaff03dd9cc34878040000",
    ],
    [
      "ETag",
      "IK9kKizL2bP5aBIeu5IYuw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:08 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-33-1625184933653"
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
      "83",
      "40",
      "1045ff657ca5492b2d2a491fa8562569515b9a684cd36c61a054607077d1344dffdd59acd5a889bec0cc7066b9f7c2169eb23206179659fa5ca3dc1ca5a8ef4c314155e75af1ada2522158805aa44c1ecb713af3c5fae4fe214b038ace82b5374dfb7d2654b4c24280bb8524c33c56e03e6ea11405f25a44795d948ba6b3406f2a339c86133fb8e2bea0d8f4c16c34f206a321ecacc3622cb45834fc3fd6e63b0bd6b49c608212cb088d964ad21a23ed1b9b4a14558e2d45b58c504103370f5249752524518b272ddb6e759ce35ee7b47b66db4ecf6630a748e88c4a666753d6079ab4c827f4ca2ec1614036251b4e9aeb0b8fb3b831624a3f089d6ea3ef2bc0d2922cc7c5df20eb5d09fe0c1fd83e82ef9c28a82ef581ba1cdd78bf1dc7997e1e75e185c31f84d29cd40109fdf1701a7ae35bc3cdf7de071b8dea561207a9d064d869774f7b274efb3dd6733251f37b5c2d6bb42012fc775c671adc44e40a776fae0d2fbb7b020000",
    ],
    [
      "ETag",
      "2rMgUIaj7XYigNoc9NjASg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:09 GMT",
      "Server",
      "ESF",
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
          "SELECT MIN(`date`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-34-1625184933653",
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
      "ff8553fd4fa34010fd57c8de2f9af41b4a3f12e3f52a2a494b95524d73b9b40b0cb84a59dc5dbceb99feef3780557b269a98d4e5bd37efcdecec337960694886c467f1630e62fbed9efba44640d118bf8677d333fe67729e8d29f32ec3e5cd39fcbd8e4f4e90c10a95a49b2c81bae4b908400e17f3462c789e51c1791d0bd575a3de363bdd76df18e8bad9d551272189262c7d40f59d52991c369b7bef46cc799c00cd986c047cf3fabdf9d4696682df43a064f3d0b2892eb2f9b9e969c203aa184f4f16730c904b102bd8509660843765e87f3f2cdd6074d38891fcc402a041c0f35415b1b044c0d388c5b928ab92e1332963befb87ccad8935f6b4a9ed1cad43aa607dac51a9ad5602649ea89ab6c67e2296c08a85eb0ac91eb47377364504ddefa804b9d66e2f2dd7d20ec9b6a32d1cc79a7bdad1e9b176e1ce1657da8fe50107138620154bcb7c1ef51328b2bd8cd0fe787185802af4acc055af65d276bf35f023bf17447dbdeb472df0fdbedfeb52dd6f0503038cd0078a3a55542f5534e5a91e991098d0ef058330ec52df809edfed87adbe1151c03b810874b36d00d9d5c86fc1149c319971c9aa39925bd7f6ac95e72e9cf1c8b3ca36228af33aabc2154dbccfa9b049247dd2d7ae401947a7e2526cc7b3dcd1d8b36fac6a0f2610d3603b7fc44d88682201d954d00d2810531ee2d0c8d56c6e7bf6cc194d50515eeed59e21c9f0e7f39bc0db66e59455f94b46ae3b5aa2860a41b7ff6198c334c86ef7ceee8626794929f9e5a9aaff5401a48dbdbc9d3a072793ec7eedf0af4670fd2b2f72bdb0dc25a93eb938760169f0f51620b904be7cc5fb27855c7c546823159e71e70259980402aadd639b32fc8bda1cb4060629c9427dc03afa603fe4a24651113690aa978eaa27558ead8072f94a421057c6b19d0b44ff0161661199d2040000",
    ],
    [
      "ETag",
      "dhMDoxLFpCaiTHdYVFezQg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:09 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-34-1625184933653"
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
      "5f4bc33014c5bfcbf5b585fed9c62cec61d3a2933ab46e82c81859775bbba54d4dd2491dfdeede44511f0621b939f9dde49c9ce050d63b88605b16ef2dcaeea240fd688a1455cbb5a2a511b5427000352b88bcebee9f5992864599b7dd7cfce9f197ea584c2644a8ec0d2b06d109f212f94e41f47a829a55486d9b8db43712a6bbc628d7d3654cbb4aeccc6eb14a92e92c89a177fef534873f7ebe58c637717aae65dd3bb017db1473945867682c3452ec31d373934eb1aae1e82ad1ca0c1558d81e1452b40d9342b8a4b8e1c0f547c1d01f0f2ec370340c09e42263ba1435b1ab27f2065a68c653f141e1202040da9272e6763e1ad90b3cd70b68d83056b21ecf42fe2fe41b68fdf3c4acd3a81ea420bf0a8dd530f0be8d5f09134653482d5b742063f4edb7a58628675c61ff0545d4e103d4010000",
    ],
    [
      "ETag",
      "JyMVaLR3gifuyI8z0lYmvg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:09 GMT",
      "Server",
      "ESF",
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
      "ff",
      "1d",
      "d0",
      "49",
      "7282401400d0bbf45aad04b581ecba11194425c8241b0bdb2f6380d04001a9dc3d568ef0de0f8a1903ce6f5d5d40853ed0140bf28aad0e8d446992d23931679d5fd76d1dbe5f7cae68700dd3afb3e2315a4825f9764b1e020893ca056f304c3b74b7b93973cdf01daab061f4efa4eaf7e370b4755751ab5d758e4a5da99d4c9074719487e864a9018ecc46dcd9472bea587200cf6c63bebff61beae6c293c6e26c9060434fbbecd3c49ce60995f4bee0842edfacaed4024d5e2a9ae64d1ec1593d71fcc4d83192ae83f40277c6082e1eaebaad4b323e085a20189bac057ecb5edcf5569617e8df7eeba6065e0114e2165af4fb07832d6d8c1a010000",
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
      "Fri, 02 Jul 2021 00:16:09 GMT",
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
      jobId: "grouparoo-job-35-1625184933653",
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
      "4fdb3014fd2b91f771f499471f121a5d09a3529b8e34a51ad314d9ee4d30a471881da60af5bfefc6a10c84049f62fb9e73cfb98f3c917b916fc99830913e5450eebfdc49464e08689ae2ab9c6e0abbb8bbfe7ae564dfc5c6bff16ff6a3abd35344889aa5e8aec8a0a564557250e3f5aa9d96b22a6829650b13b56cb7d5f3fa6e6fe88c6cdb736de429c892b9c8ef917dab75a1c69dce51bb9d4a9966400ba1da5cee5ede3b8ffd4e51ca3be05a75de4a765045753e16fd96494eb590f9e97a85062a05650c3b2a32b4f09fb965676f53b705ddb553043f0a0e947359e5bab68529b8cc139156a5c94ac64fc4d87c75202b7fee4f238bcbacdae5714e7770626da9a6b1de17605d84cb85350b2e96e16212cd9641bc9a5efa8b497bba9caf17c1cada5cfaa16f69ca32305cebd43a33b7002fa8bf05a5456ed4a3fab9567e6ed0ecfd586a024a2b6882f1a0ebd1deb03b62091bf06468bb2ce90263433670a9cdba7ce480b365409167440d8be6321fba2e1b41af177b8ec762c7f5bc983248e2fec8b59d9ee3c1c01b90c309f95b0a0de742155289a6436413ce223f8ec275309d44be2921a155a6cf1b637501af3d6a2c10411fd474a8a342a252ddee5910f9e1641acdaefd66c2734829dfaf1e70c609cd14209a96d83c0de5426eb16124982cfc73049b89fd3c061519ff7e2275cf6b17af5afe428f7080b55d6dbe641585b3e087b173445cd3ac3290c7e6400ab47c8bb5a1ebc31f44e2923659c8d5da0f7f91e62984044ac8f9e7d344b0097cfaaf1d171fb1b8fa28a334de7177b8aa457809cd0e0953ee913de876bd1131e052bf8bf5fbbd63d7ea1c7546d841ae9f2b6a161f0b6dc42af502c2208e3f30dd3afc031ab3a95e78040000",
    ],
    [
      "ETag",
      "oCWp3pjV+Q4lBiWEZEZy9Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:10 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-35-1625184933653"
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
      "00000002ff8d92dd6e82401085df657a8b8916a196c40bb46a4dfcabe285698c596150ecc2d2dda5d618dfbdb3d4daa66dd2dec0ccf0cd72ce81233c2559041eac93cd7381f270b541fd608a29aa826b45b75c640ac102d46c43e4be97767cbc76dbc938eff24596bf2e868edf6c12a1c22da60cbc23c409f24881f778848ca5486ba1e0459aadcace027dc8cd70164cfba31ef5a9884c3f9a0f067e6bd0819375598c9866ab92ffc7daf264c14eaca718a3c42c44a325976287a1ee1b9b8aa539c78a12850c514109970f365214399342546852b19d4acdbd766a8dfaad6dbb8e4d201721d389c8889dcf481f68a1199f8a3db9049700599664382eaf2f344ea2d28829fba3c0ad97fabe02242d4e38aefe0649ef96d167f8c0ce117ce7582a8a4c5fa8ee60ecff761c65fa79d49d1f747e104a53521724e80f3bb3c01f4e0cb73c7b6f1d34aa891414a4429361ad5a6f38376ef53dd6b63051d37b3c2d0bb42064f477dc271abc987185a7377cf241487b020000",
    ],
    [
      "ETag",
      "wGmEAe26CiOpFlYnpxYM5A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:10 GMT",
      "Server",
      "ESF",
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
          "SELECT MAX(`date`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-36-1625184933653",
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
      "6f",
      "da",
      "30",
      "14",
      "fc2a91f74f2b5108bf42825475accd5834082c8476dd34819d38a94712a7b6d38a567cf7bd24a52dabd44a20b0efeeddf9f9f9116d5816a221222cbe2da8d87efacb096a20aa700cbbbfc4d87d986fbeebcb144f2d32de5eb61ff0fde9293058a99238cd137a227921022a87cb453316bcc8b1e0fc040a9d748d93b6d1e9b7cd9ed5ed1afd2ee8244da209cb36a0be512a97c3566befdd8c398f138a73269b014f9ff75b779d562ef85f1a28d93ab46c818b6cbd6f7a96f0002bc6b3d3e5020214928a154d314b20c28b32249f0f4b37194e9b3190ef58407110f02253652c2811f02c627121aaaa68f888aa98affea0853db1cf7d6d3afa79b40eb1a2eb630d4b6db5125416896a686b384fc412ba62e1ba46f28df6d59b4d0101f71b2ca95c6b57df6ccfd60ec98eab2d5dd75ef8dad1d9b136f666cbb9f6e5fa800309432a15cbaa7c3e26092db33db5d0797b71a5002bf0acc1d5403770dbd42d1291411099dd3e89744a8849067ddc257a60f5682f2414834e95d52b15ce78460926a16e46a1d1ee51ab131062b57b1d530f7b1d0c5fd324fdd00210ed1ae85e30452f98ccb964751fd195e7f8f6caf796eef9c8b7ab634418fa7551872b0ff13aa7824302e99d73ed4a9471702a2fc5717ddb1b9dfbcea55dcfc184c638d82e6e6112229c480a6c2c704a1515531e42d3d07cb6707c67e68e26a0a82e77be674834fcfdf822f0b779d56555fda291e78dae418385c0dbff30c861f4d06ef7caee12274545a9f8d5aaae7f5703a86cd9cbaa73b032d0eecf0e3e0d04e35f7ba11f4bdbbb46f59647232a68167c3c0540ae800f5ff1fe4901171e15d848056b98b940962681a0f5ecb1b40affa41ee8",
      "66df441559a837986519fb269735ca8a34a5997a3a51fda4aab69550219f4900c2c8b88e3b06f41f34b1ccded2040000",
    ],
    [
      "ETag",
      "ZrGNzPkK0UmaM9bGyV1zaw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:11 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-36-1625184933653"
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
      "000002ff6d904f4fc24010c5bfcb78b44dfa471a21e1005291a422563819429632ad85b65376b71a42f8eece6e8c7ae0b23bf3f637bbefed190e65b383016ccbe2d8a13cdd14a85f4d91a2ea2aad786ba951080ea0160593747caea6079faadbc7be7859ec8349b4488ae19009957d602d607086bcc46aa760f07e8646d4c8639b8db43732a64fad5126a365cc5d4d3bd3cd5749321a27315c9c7f33ede18f9fcd97f1344eaf8dac2f0eec699b628e129b0c8d8556d21e333d33e994a8db0a5d459dcc508185ed4121a96b8524725971c3c8f5a3a0e7dfdff5c330ea850c5694095d52c3ecea8dbd81262daa94be381c040c485b72cedcae9f46f602cff502d7efdb3056b21eaf4181f70bf9065aff3c313e69540b49ec57a1b11a32698d3f9009a339a4961d3a9009fef6a752c3201795c2cb37176fa2abd4010000",
    ],
    [
      "ETag",
      "oqMlGk1ol+F9aOPj2D6PLg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:11 GMT",
      "Server",
      "ESF",
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
      "08000000000002ff1dd0417282301400d0bb646d1d11a1a13b228248a123b548d830483f1a8940121cc04eef5ea74778ef071565094ae57d5b4383ded0542cad79390f3a4cc899a964a134580fd7f0ba7ab9bf33bbccaaa8228366a6fb4d9a9ae3a14ac3c6584e7b6ff820c09b8619001177e88e52518853bb89795bd8d4c2edf67c1f8e1a56b73d96c23f0eb757a14b473b1b752504d1431df37e129c2e2eddc9d5b36dad45e006994559d186818af2980f551c27cdf8a08cfb07e31178bedcee2e1eb7bf1cde79bcabd6353613fc98fc7e6d262b0b3e5b2c0ecdf5dbb5ef8124fed245330463c724a89c3db9ba615933f46fcffba983670081428244bf7f800c9a6b1a010000",
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
      "Fri, 02 Jul 2021 00:16:11 GMT",
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
      jobId: "grouparoo-job-37-1625184933653",
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
      "0002ff85536b4fdb3014fd2b91f771f491a66fa91a5d09a352938e3485a1698a1cf73a18d238c40e8fa1fef7dd38b40321c1a7d8bee7dc73ee23cfe456641b3226b148ee4a289ebedcc8981c11d034c1574f3fa8afe7173efbfeebefe39a7bfe15776e1e261344888aa5e8364fa1a164593050e3f5aa9914b2cc6921650313359c41c3ee777af6b03b729c7ecf419e82942f44768bec6bad73356eb5f6dacd44ca24059a0bd564727b786fdd775a79216f8069d57a2bd94215d5fa58f45b2a19d5426693f50a0d940a8a08b654a468e13f73131fbf4ddd1474db4c107c2f1850c66499e9ca16a66032e322290b93958c9f89b1f9ea4056eec29d85169369b9cda28c6ee1c8da504d23fd9483751a2c3d6bee9f2e036f1ace977eb49a9db9deb4395b2ed69ebfb22ecfdcc0b5348d53305c6b621d9b9b8f17d4df80d22233ea61f55c29bf3468fe7e2c1501a515d4c168d0ee537bd81ec53c1e303e747a316f431c0fe3418f3a719b8dbad0ddc4409167440d8b6632eb7260ed5e3c8a78dc77a26e978fa2d8b1211af1f6c0a6dc1ef07e87ec8ec84321349c08954b25ea0e91cb601eba5118acfdd934744d099c96a93ea98d5505bcf6a8b140047d50d3ae8a0a894a55bbe77ee806d35938bf70eb092f20a1ec69758733e6345580685a60f334149edc60c3883ff5dc13049b89fddc071519ff7e2655cf2b17af5a7ea08738c0caae365fb20a83b9ffc3d8d9232e685a1ac87d7d20395abec6dad0f5ee0f227149eb2ce47ced0657a47e0a80430119fb7c9a0836814fffb5fde22316571f6594c63bee0e5395082ba0de2161caddb3079db6dd23065ce87731db643e2c7c9511b690e9978aeac5c7426bb1521d4018c4f1fba65bbb7fdee7ead478040000",
    ],
    [
      "ETag",
      "Mtws+QVNcBXzxUfMNYf3jw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:12 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-37-1625184933653"
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
      "401045ff657cb4242050a0090f45419b00222d4a620c59da2914b7ddbabbc510c2bf3b5b118d9ae84b3b333db3bdf7b67b784eb2081c5826ab9702e5ee6c85face14535405d78a6eb9c8148205a8d98ac8dee6dcbf975b7c98279d81eba1f4e71cdd6e970815ae3165e0ec214e90470a9cc73d642c455a0b052fd26c517616e85d6e867e30f5c6d7d4a72232fd78361cbabd611f0ed66931629a2d4afe1f6b4f070b366239c5182566211a2db9141b0cb5676c2a96e61c2b4a14324405255c3e584951e44c0a51a149a5deaad4ec8b66addde8d4eb76b34e201721d389c8889df9a40fb4d08c4fc52bb9049b00599664382eaf5b1a275169c494de38b01ba5beaf00498b138e8bbf41d2bb66f4193eb06304df39968a22d3276a30bc757f3b8e32fd3ceaca0dfa3f08a529a9131278a3be1fb8a389e19e8ede7b3b8d6a220505a9d06458ab36dacd965d7d8ff55298a8e93d8e96055a1032fa3b6e120d4eccb8c2c31b4893918a7b020000",
    ],
    [
      "ETag",
      "Bj+SVrveWXi9FAIerSXleA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:12 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `id` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-38-1625184933653",
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
      "61",
      "6f",
      "9b",
      "30",
      "10",
      "fd",
      "2b",
      "c8",
      "fb",
      "d24a494842482052d46509db9052d21168d44d53628ca16e01536c5a4555fefb0e68da66eb5a0909ec7befdebbf3994774cbb2108d51c0e2bb9216bb4f373c402d44258e61d70a54f767ef7cbd5e78738dec463d7de43b0f93092058c51238cd13da16bc2c0815637fd5890b5ee6b8e0bc0d89da9ad1ee0dfb7acf18989a36d435e0099a440b96dd02fb5aca5c8c55f5a0dd89398f138a73263a84a7cffbea7d5fcd0b7e438914eab1a40a2a427d5ff42ce1044bc6b389bf0203a5a0c586a6982560e18519069f8f5377184e3b3180ef19a198105e66b2b2052908cf221697459d158d1f516df3d5075a590b6be629b3a5ef78275b9c56e4eda98285b2d9145494896c295ba8296209ddb070db44f25be5abbb3c870838b8c6828aadb2fe6eb996a26c2bd0443953a6ce5c39a6da8ee23b8eb5f29493b353e59bbbf42f942f574718f01c522159563bf67090d0caed5353ed7f8fb22260090e9ae066d41de29ed13583281891c8d0f420ead2203082918eb5a04bcc011d8401c5c09355f69a85339e115def1afd9116104337896986b41f767b58c3031cd188e8813108867d42d1be851e0a26e99c899c0bd67416ad5ddbb3369eeb3bb3a967d5654418ba376fcc5545bcf629a14800bd53d7be8a320e4ad531d98e67b9d399675f5acd642c688cc96e7507b311e1445040e302a754d2e29c87d03474b15cd99ebd74a60b60d4c77d71400834fef5f842f07679dd6559bf2bade1a0d63f002e7152d688fbe603f574b4dfb7fe9f62eabad32b90c54581776fa77f337f8daf57",
      "8dc5673d54a91d56fda3d510ed7fefe16921b8538d16fae15bee156ab65c1ad18266e4e34102701df8f0d770b8a780859b0a3242c21ac696884a8414b4195f96d6e69fd8a3be39ac7f2c1217f2ef98d635b5c3395539aa8c34a5997caaa8b9a775dbaa50299e411084a9736ce71b44ff006b4c7a0027050000",
    ],
    [
      "ETag",
      "Eb/RZ1MWWLTD3cy7157UNw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:13 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-38-1625184933653"
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
      "00000002ff8d90514f83301485ffcbf515a2c82093640f4e175d32a7a05317b32c1dbb200cb8b52d9ab9f0dfbdc53df8e84b7b73fa9df69c1e6057345b886053e41f2daafd498e26b64382baad8ce64d52a3111c402372265ffc6b791706c1e9b78a977ebe7c7e2d17f7f168c4844edfb116101d202bb0da6a88de0ed0881ad9b65eabfe46c6cc5e5a653a7f9adc4c12166ada5a61be98cd2ec7b30974ce1f9bdcfdcbb2ea1c28699360860a9b146d0aa9a8c4d44c6d412d6a59a1aba955296ae8e1fe2057d44aa1885c565c7fe87ae179e00d0717be1f063e8315a5c214d430bb78e46c60c8882aa12fee071e03aa1fb96ad6af9fbd6c3b1ca755b73a9ac67b83fa411127d0681f1f0ccf7ea35c918d6738b6512d3a900afecbdbc24094894a63f703d3c77137a9010000",
    ],
    [
      "ETag",
      "W3DpM655/zrQY3gYVXjUOQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:13 GMT",
      "Server",
      "ESF",
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
      "ff",
      "1d",
      "d0",
      "4d",
      "72",
      "82",
      "30",
      "18",
      "00",
      "d0",
      "bb64adce1450a43b022818ff8a80c82683e1aba215688281d0e9ddebf408effda09c311082b6f51d2af48e54ae59133621cd1ce3cb252db538f487bbbba80fc7f5eee49b098f81386525fdbd5db2f0dcb837b1db2e89d23a3d78c68f99ee38d1d9503d14b4d0bf129185104b97ef968e300208f7346fd4f79b4ca3aa5fcf14d81121f4419c5b820f0c5fed33374f38cd3a92767485a5a5cb148f3daeb5d34ab3179bfa618cbd41cee5d5fad8aa3ede58fcb307d2d66996b87eb98992f9936d67383688791f9867fa435b54eb4038767d54b04223047d537210b47c71f5a9658dd0bf9db6aa815700869c0347bf7fbba91b9e1a010000",
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
      "Fri, 02 Jul 2021 00:16:13 GMT",
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
      jobId: "grouparoo-job-39-1625184933653",
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
      "0000000002ff85535d6f9b3014fd2bc87b6d1352200991a2354ae9ca9490859076d53421e35ca85bc0149b6e5595ffbe8b69ba7693da276cdf73ee39f7832772c7cb1d99908467f70dd48f9f6e45428e08289ae16b33db3acbdf0bf7ab7f6516ebefaeb88ed6f57a3a45046f599216550ec75234350339d96e7a592d9a8ad6421c63a263cb3d1e0c4f9cc1d8762d6be858c89390a70b5ede21fb46a94a4efafd83762f1322cb81565cf698285edefb0f27fdaa16b7c094ecbf95eca38aecbf2ffa39178c2a2ecae97683061a09750c05e5395af8cbdc25a76f53f7382d7a19821f3803ca98684ad5dac2144c9429cf9a5a67259327a26dbe3a908db7f0e691c144de14655cd2028e8c1d5534568f1518e7e16a69f8c1f92a5cce227f15c49bf985b79cf5e6abc576196c8cab0b2ff40c45931c34d7981aa7fa16e005f57720152fb57ad43eb7cacf0df2ff1f4b4b4069095d301e99433a189b6e922623968e2d27494d4892713272a89598ccb5c1de254091a745358b96a2741c8b31db1ac523db66b13d7459ec5a03274e06261db2f1c0845d4af647e457cd159c715909c9bb0e91abd08fbc380ab7c17c1679ba849436b93aeb8cb505bcf6a8b04004bd53d3be8d72814a6dbbfd20f2c2d93cf22fbd6ec20bc8287bdcdce38c539a4b4034adb1790aeaa5d861c348305b7a6708d613fb76084a32f9f144da9eb72e5eb5fc851ee1005bbb4a7fc9260afde08bb673405cd2bcd19087ee402ab47c83b5a1ebfd4f44e2927659c87aeb85d7a47b0a21851a4af6f13411ac031ffe6b87c5472cae3eca488577dc1d265b115643b7435c977b608f2c7730241a5cab7f63b679621dbad6e668334201a57aaea85b7c2cb4136be40b088338fe40776bff07053d193178040000",
    ],
    [
      "ETag",
      "uAU5MxL9JIW0mQX9oYTQrQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:14 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-39-1625184933653"
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
      "00000002ff8d92d16e82401045ff65fa0a89564525f101adb624482b62d2a431668541b1c0d2ddc5c618ffbdb3d4daa66dd2bec0cc7066b9f7c2119ed322061bd6e9e6a54271b8daa09ae9224059654ad2ade48544300015db10a9c249de1fb5ddd4f1e359d7e9ecad61f8381b0c8890d1167306f6119214b35882fd748482e5486b11cfaabc58d59d01ea50eae13c0c5cff96fa9cc7baf7179ee70cbd319c8ccb62cc145bd5fc3fd6962703767c1d6082028b08b59652f01d46cad53625cbcb0c4dc92b11a1841aae1f6c04af4a2638376962b6fa66d3baee347bed7eab65755a04663c622ae505b18b39e903c515cb02fe4a2ec12240d425194eeaeb9ec6695c1bd1a5eb8756bbd6f7152069499ae1ea6f90f46e197d860fec1cc1778ee5bc2ad4859a78f7ce6fc751a69f47dd38e1f807211525754142773a9e87cef44173cbb3f7e141a17c109c8294a8336c36dabd4ed76abcc73ae23a6a7a8fad448506448cfe8ebb54819db04ce2e90dee8b2db17b020000",
    ],
    [
      "ETag",
      "tTFm9C4IiANdQ7A5v6BTXQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:14 GMT",
      "Server",
      "ESF",
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
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-40-1625184933653",
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
      "0000000002ff8554fd6f9b3010fd5790f74b2b25e12b5f448a3a96b28c29252d21adaa694a0c31d42b608a4dabaccaffbec3346db36ead8804f6bd77efddf99c47744bf30d1aa19026771529b79f7eb110b5101138815df78aa586f5309dfebeb92b749ada6af87d7a311e0382d62c8eb322256dceaa32227cb45c74929255052e196b43a276576beb7da3a70fbb9669f67b26f03849e319cd6f817d2344c147aabad7ee248c2529c105e59d8865cffbeabda11625fb4522c1d543491554b8fabee849ca222c28cbc7cb0518a838295724c334050b2fcc4df8f9307587e2ac9300f89e46044711ab7251db821411cb639a54a5cc8a468f48da7cf58116cecc9904ca64bef482a335ce6af2fa58c15c59ad4ac2ab54b49435d414d394ace866dd448a5be5ab3f3f830838b8c19cf0b572f5cdf11de5656bad8c9513c5f64e95c304aea72c3dcf5904cad1c9b132f5e7cb73e5cbf501069c6f08173497be031ca6a4f6fcd45af7ed81d6042c40b409ae065a1feb43cd0ae37010c543b317c61a09c36138e86133d422ab4bba9b9060e0893abb64e19ce556dcd7742d322c389761d734016a7507c37e34e86931310c32c05afda05d0b3d94549053ca0bc669d35f74e5bb81b30afca537b10347961163e8e16963ae2ee2b54f014502e89dba7675943250aa0fcbf502c7b727817be934f33123098eb68b3b989018a79c001a9738238294676c034d43e7f3851bb873cf9e01431efaf91ec1d1e8c7e30b21d816b2cb42bed122f05d6f2a0dec119738ad24e4bef94076015ed16ed7fa7f1adbf7ed6b90c66589b77fc5a09c7eb7a6ff4342e2e5aab1b997d451adb65f1907ab3edafddcc1af85e076355ae862e9f8d7a8d9f2494c4a92471f0f138065e0c33f89fd8d052cdc5990e102d630ba11af45a29234234c3369fe893de8e9ba8624b8146f628669edcfaace51672419c9c55345cd8d956dab43157f06411026cf93c7b6fb03dba36a4631050000",
    ],
    [
      "ETag",
      "IWol29wGGzhqp1ilA/bJGQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:15 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-40-1625184933653"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d90416bc2401085ffcbf4d8041aa3d6063c44b1ad20a2a99e8ac81a27319a64b6bb1b2588ffbdb3db523cf6b2bbbcf7cdf0de5ee154d47b886057e45f0daaf62147b3b48f0475531acd97a45a23788046e44cceb3c7761cc74bda2d643c3e1cd4e535a0cb70c8844e0f580988ae901558ee35449f57a845853cb6dd2ab79131d34aab4ce7abc9db2461a1a2bd15e6ebd92c1ecd2670f3eec6e4e95f239b9b0747da2598a1c23a459b422a3a626aa6b6a016952cd1d7d4a8143538d819b9a2460a45e4b3e2779ffca0dfe90583ee4b18f67b218325a5c2145433bbfee06c60c88832a10bf7830e03ca3db96ae6ce33cba1eb7076808d76ef75febcc07a9bdf85a3d6a05e28e2741a6db0eee0f927e6986c74c3958c6ad08354f03fbf1706a24c941a6fdf238f2ed1c5010000",
    ],
    [
      "ETag",
      "Nf+yCAAQobPpAChhrwF1ow==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:15 GMT",
      "Server",
      "ESF",
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
      "08000000000002ff1dd04b7282300000d0bb64ad0e467ee9ce50208ac84f8ab0613221557e150215984eef5ea74778ef0750c6f830e4e3a3e65fe00d2c14a20ddb389d8ef1ad6c3bfcdd4b4bd7cd07d4c483638a700fa5ed64aeaf81510fd9d178705dbcb3b511915d76460c6fabd178b6b5221a4f0b328c70a6c98f74fc38db32a50569e45827f569fcf49a065b157df6adab5ea4220c35a4b6ae994e770cfd9b749abc1eba3e99ee427293488de0165e48e849cac5597433bac744c8699038416f1fe8ec8be46ae9b3e26bb3830b3b6f2dc2aab2c6e692d244f6e608def6f591e91558013e77a5e0435ebeb83b05a115f8b7e7e3d2f15700e65470017eff00a8ca70be1a010000",
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
      "Fri, 02 Jul 2021 00:16:15 GMT",
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
      jobId: "grouparoo-job-41-1625184933653",
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
      "535d6f9b3014fd2bc87b5c939040028914ad514ad76809590949354d1332e642dd124cb1e9d456f9efbb98a66b55a97dc2f63de79e733f7822b7bc48c884c43cbbaba17af8722362724240d10c5fedc7bb47a0456eee763f86fe5701e9607779399d2282372c49f7650e1d29ea8a819c6c37ddac1275492b213a98a863f73bfdd160d877edb1658d8616f224e4e99217b7c8be56aa94935eefa8ddcd84c872a025975d26f62fefbdfb41afacc40d30257b6f257ba8227b1f8b7ecb05a38a8b62badda0815a4215c19ef21c2dfc6726f1e9dbd45d4ef7dd0cc1f79c01654cd4856a6c610a268a946775a5b392c913d1365f1dc8c65b7af3d06022aff74554d03d9c18095534520f2518e7c17a652cfcf375b09a858bb51f6de617de6ad69daf97db95bf31ae2ebcc033148d73d05c636a9cea9b8f17d44f402a5e68f5b0796e949f1bb4783f968680d212da60e49823da77cd719cc60e4b5d6b18a726c4b11b3b436ac5261bdb60273150e46951cda285284630341ddbb5a2819bd891ed0cc6d1384d59d4775dc71a3bfd914919399c90bf155770c66529246f3b44ae8245e84561b0f5e7b3d0d325a4b4ced5596bac29e0b547850522e8839a0e4d940b546adabdf0432f98cdc3c5ce6b27bc848cb287cd1dce38a5b90444d30a9ba7a05a89041b46fcd9ca3b43b09ed8cf635092c9ef27d2f4bc71f1aae52ff41007d8d855fa4b3661b0f0bf6b3b47c48ee6b586dcb70752a2e56bac0d5d1ffe201297b4cd422eb75ef08bb44f01a45041c13e9f268275e0d37fedb8f888c5d54719a9f08ebbc36423c22a687788eb728f6c67d4376da2c1957a171b0c47c7ae35399a8cb087423d57d42e3e16da8ad5f20584411cbfafbb75f807302dca1378040000",
    ],
    [
      "ETag",
      "4zqzeanl0VVK5N+oef2VQQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:16 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-41-1625184933653"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d92dd4e83401085df65bca549b12d5a925e545b95a4d6fe50bd304db38501d185c1dd456d9abebbb3a8d5a889dec0ccf0cd72ce812d3c64450c3eacb3f4b142b53948d14c6d31435d49a3f95652a1111c40235226f5cdb59c446a3c7c093aeee394bc6a70d44d7b3d26747487b9007f0b498632d6e0df6ea11039f25a44b2ca8b55dd396036a51dcec359303ee73ea7d8f6e3c568d43f190d61e7ec176361c4aae6ffb1b6dc39704feb1926a8b088d06a2915dd6364026b538bbc94d8d054a90835d470fd2055549542113578d268bb0dd73becb8c7ed6eabe5755a0c4a8a84c9a8607631677d60c80839a36776091e03aa2ed970525f9f789cc5b5115b06e3d06bd7fabe022c2dc924aefe0659ef9de0cff081bd47f09d13395585d95367a3abfe6fc771a69f470dfae1f007a10d27b547c2e072380ffb9713cb2ddfbd9f6c0cea89220e52a3cdd06db68f3b475ef32dd653b251f37b7ca32a742012fc775c6406fc44488dbb57111807087b020000",
    ],
    [
      "ETag",
      "sWVlPcrNExI51qQo6uD79g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:17 GMT",
      "Server",
      "ESF",
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
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-42-1625184933653",
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
      "0002ff8554fd6fda3010fd5722ef9756e32340f80812ea28641d130d2c84a26a9ac0711cea368953dbe9842afef75d9cd296756ba548897defdd7b773ee711ddb134447d14b0ed7d4ec5eed32d0f50055185b7b04be67663bcba18e6a1c0fcf36a796e8d57df8783012058c19238c9625a953c1784cafe7251db0a9e6758705e854455ab596d749aed46cfb25bad4ebb053c49e368cad23b60df2895c97ebd7ed0ae6d39dfc614674cd6084f9ef7eb0fcd7a26f82d254ad68f25eba022ebef8b9ec59c60c5783a582ec0402ea958d304b3182cbc30c3e0cb71ea1ac3496d0be00746282684e7a92a6c410ac2d3886d73a1b3a2fe23d2365f7da085337546be319a2d5dff64839382bc3935b034d66b41651eab8ab1819a2216d3350b376524bb33be7ab34b8880831b2ca9dc18ab6f8ee7182f5b1b63609c1943776c1c2798b8c6d2759d856f9c9c9d1a17de6c3937ceaf8f30e03ca452b154fbf67110d3c2f3536b276f0fb4206005a26570dd353bb8d133ed200aba24eab5da4164d220e805dd366e0526b12d6a8501c5c0534576cdc2294fad2030c35ed3b66cbbd52421b1ba1d9398a4dd6e853d6a464160db4d93e01eda57d06fc1141d339971c9cafea29537f19db5ef2dddd1d077741911861e8e4b734511af7d2a281240efd4b52fa28c8352715813d777bce1c89f5c39e57c4ce91693dde21e2624c2b1a480c60227545171c943681a9acf16137f3273875360e8439f1f1012f57f3ebe10fc5da6bbacf41b2d7c6fe25e680307c4158e730d79283f10cec02bdaef2bff4f33f4bce135486321f0eeaf1894d3b10afa3f24345eaf4a9b07c9062ad40eabe6d1aa83f6bff6f05410dcae520bfd583ade352ab73c1a514153f2f1300158073efc491c6e2c60e1ce828c54b086d125b21021829623cc126dfe89dded364d0b69b0506f62ad6ee37056458e22234d68aa9e2a2a6fac6e5b11cae53308823079ae3eb6fd1f1e61fc6031050000",
    ],
    [
      "ETag",
      "cP91DWGAudrao+WUB4DWJA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:17 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-42-1625184933653"
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
      "4f834010c5bfcb7885d402fd23490fd660db84b416edc99866bb0c0805067797984afadd9d450f1e3dedee9bdfbc79b33d9c8b2685104e45fed1a1badce468f6f692a0ee2aa3f968a9d1080ea0113993a5b75a8f669e3cecc65f7e5ae6a3a678dced170b26b47cc75a40d8435660956a085f7b68448ddc763caac191317369adb2d9be44ab2861a1a6d40adb431cdf2fe308aece9fb6f6fcaf96b7ab03259d12cc506123d1a668159528cdc62ea845dd56e86aea94440d033c1472455d2b1491cb8a1b78ee78ea4dc6f3e0cef7a7139fc18aa4300535cc1e9e391b1832a24ae893f7835bf87d2f2f06f5932236d7687d83f9ec67ca03d9c9861319d5a10352f037ad0b0361262a8dd76f029f8e2f84010000",
    ],
    [
      "ETag",
      "j2GH/72cUO1z3djg/niFOQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:17 GMT",
      "Server",
      "ESF",
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
      "ff",
      "1d",
      "d0",
      "c9",
      "72",
      "82",
      "30",
      "0080e177c9591c65537a13046cd982d2b25c3294046451c004043b7df7323dfde7efff016996114a116b6b72076f604e79659dadad6eafaa45814559905d9a789ede7c49751042df49c7774e462369f40d8b90020f74d031a63117f4c9686318a2d8a3a4507074ef5f0e7f4b2f4b356bb6aea5914d5b34970381513e7e4747c711756eaccb5388adfad8f3d8ad2c582b7360c442ca91a4f14f55d1422dbec1e0c976283f6fda6630ec0bb3ab26747a269167d1f37be1b3dbd9db413306f17ae6fce4c36c734133db01a2179da60a89d6a1a666ee7a6005c8d4950f4251b97005495156e0df8ed8dc9165804ad2077980df3f5d73c2011a010000",
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
      "Fri, 02 Jul 2021 00:16:18 GMT",
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
      jobId: "grouparoo-job-43-1625184933653",
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
      "da04f284448ad628a16daa846c84b49aa6091973a16e01336cda7555fefb2ea6e95a556a3f61fb9e73cfb90f9ec81d2f623225114f7fd7503d7eb915113921a0688aaf6569cdefb23fbdcbbef7f0f7ec1caccbded24c673344f08625695e66d091a2ae18c8e97ed74d2b5197b412a283893ac341a737ee8f7ace7032188c4703e449c892352fee907da35429a7a679d4eea642a419d092cb2e13f9cbbb79df37cb4adc0253d27c2b69a28a343f16fd9a09461517c56cbf4303b5842a849cf20c2dfc67c6d1e9dbd45d4ef36e8ae07bce803226ea4235b630051345c2d3bad259c9f489689baf0e64e7aedd45603091d579111634871323a68a86eab104e3ccdf6e8c9577b6f537f360b5f5c2dde2c2ddccbb8bed7abff176c6f585ebbb86a251069a6bcc8c537df3f082fa3148c50bad1e34cf8df2738356efc7d210505a421b0c6d6b4c7b8e358992c86689331845890551e444f6880e228b4d86308c23a0c8d3a29a450b510c13cb1a0f693f9c20211cda711c3a603b610f9f138b46b1dd77c8e1843c545cc192cb5248de76885cfbabc00d037fef2de681ab4b48689da9656bac29e0b547850522e8839a0e4d940b546adabdf202d79f2f82d595db4e780d29658fbbdf38e3846612104d2b6c9e826a23626c18f1e61b7789603db16fc7a024d39f4fa4e979e3e255cb5fe8010eb0b1abf497ec027fe59d6b3b47c415cd6a0db96f0fa444cb37581bba3efc42242e699b857cdfbbfe0fd23ef990400505fb7c9a08d6814fffb5e3e22316571f65a4c23bee",
      "0e938d08aba0dd21aecb3db26da73fd67faaa2957a171b4cec63d79a1c4d46c8a150cf15b58b8f85b662b57c016110c7efe96e1dfe01c73d54bf78040000",
    ],
    [
      "ETag",
      "pp0Aklx1J2NwzFGe0J1D/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:18 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-43-1625184933653"
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
      "bc2d5168a9d0840b105412447eca95216469a750683b6577ab41c2bb3b5b118d9ae84d3b33fd667bce690fb08db3103c58c6ab5d81727fb1423d36c504559168c5b79c328560016ab162f2b2a16bf5fdaeeb4f899a9b9effba73b6f6b8d56242056b4c05780788624c4205ded301329122af05941469b6283b0bf43e37c3a93fe90fefb84f2934fd703618b43b831e1cadf36228b45894fc3fd6e6470b36b49c608412b3008d965cd20603dd37369548f3042b8a0a19a082122e1fac2415b99044159e541cbb52756bf56ac369dab65bb7194c28103aa68cd9d994f581262d9209bdb04b70199065c986a3f2facce3382c8d98b23ff45da7d4f7156069519ce0e26f90f5ae057f860fec14c1774ea45464fa4cdd0e1edbbf1dc7997e1ed56dfbbd1f84d29cd419f1fb0fbda9df7e18196e7ef2ded96b5423491ca4429361f5ca69d4afddabf7586fc844cdeff1b42cd08240f0df711f6bf02291283cbe01cdd68e747b020000",
    ],
    [
      "ETag",
      "/8t25yqDTSoo9jETzq4k3Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:18 GMT",
      "Server",
      "ESF",
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
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-44-1625184933653",
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
      "30",
      "10",
      "fd",
      "2a91f74f2bf133010248a86390764c347421b442d3048e73a16e93186207c42abefb2e4969cbbaad52a4c4bef7eebd3b9ff3441e79ec932ef1f86a9342b2fff4203c5222a0e80a77e7bbcdb781b1f5766cd28feef9e6f2d7809abb5e0f113c63491aad43284b91260c647736adac1291ae6922441913951b8d72bda537ebed46c7305a4d037912c260cce34764df2bb596dd6af5a85d5909b10a81aeb9ac3011bdec57b77a759d8807604a564f25aba822abff17bd0805a38a8bb8379ba2815442b28088f2102dbc327deff369ea0aa7516585e02d6740191369ac325b98828938e0ab34c9b392ee13c96dbef920536b6c0d5c6d3099d9eed99246197979ae51a92d1609c83454256d8935053c8405f7974564fda85d3a936b8ca0837b2a412eb5bbaf966369dad2a70a965a4fbbd0faf6503b258f6c6d66dbd6d4d5ce2eceb52b6732bbd1becc4f30e8da07a9789c7b76a91742e6f7b9ada3f7879911a8420f457061d65ab4deae75bcc03359d0369a5e5003cf6b7b66931a5e8d751ad0f03da0c85359f69c4563119bccf3f4b669b296d9f47dc3f48d80f978304660521f589bea0c5a6dd0c9a14476095730e4722d242f7a4bee9c916b2d5c67660ffaae95971150ecdfb0309715f1d6a7c22211f49fba0e59940b54ca0e6a64bb96d31fb8a35bab988d31ac28db4f37381d010d25209a26340205c9b5f0b169e466321db9a389dd1f23233ff09b234292ee8fa75782bb5fe75d56f99b0cb3020e6f12ded230cd01dbe283e835bd56aee9e57a931c0ea57f67ea3b4e7f8eea3449e8fe8f1856d46a64f4bfe8e4f87c55383dead649a6f6e2e264d522879f077c4a042f57a1",
      "45becf2c674e8a2d07024820661fcf1382f3c087ff88e385452c5e5994910ad738bd4c66222c81628a79949b7f669b9d7aad417270a2dec5f48e713cae2c4796112288d57345c585cddb968552f902c2200e9f3db2af30fa1be40f163530050000",
    ],
    [
      "ETag",
      "YwqJC3vbwcOAmhiqFzCa7w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:19 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-44-1625184933653"
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
      "51",
      "6f",
      "82",
      "30",
      "14",
      "85",
      "ff",
      "cbdd2b2473a261243ea8236ac6cc86fab285980a178602b7b6658b31fcf7dd321ff6b897f6e6f43bed39bdc2a96c3208e05016e716d5e5ae40f3668718755b19cd9ba44623388046144c86345b6e0fa797ec299bfbeff979bc791e2da69309133afdc45a407085bcc42ad3107c5ca11135b26dbf57fd8d8c998bb4ca6abd0d1761cc424d9915d6bb289acea2103ae78f4d9efe65493a078e74883147854d8a36855474c4d4ac6c412d6a59a1aba955296ae8e1fea050d44aa1885c565ccf7307e387d1c0f71e87c3f168c86045a9302535ccee369c0d0c1951c5f4cdfd60c080ea47ae9af7eb572fdb0eb729e9929b697631a85f1571028df671cfbfff8d32271bcf706ca35a742015fc97cbd240908b4a63f7032bf751f0a9010000",
    ],
    [
      "ETag",
      "EoBHTbkMdDdC8Zfq6SK5GA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:19 GMT",
      "Server",
      "ESF",
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
      "ff",
      "1d",
      "d0",
      "cb",
      "8e",
      "82",
      "301400d07fe9da31a8a0303beb2868353c8c40dc34402f0f0d9652aa5533ff3e663ee19c37ca8a02a4a403bfc20d7da3673675c6c5987436c6556d525b1d2351417da23b2fcb6bfd20ed85f9c752a5913debe58a940d13c25f3564b032026588b9b976d72ea3671c195e1b5ee5973b549ce7741f58428572a91fb6b34c587f87e5536bbf2d6ebc65f9c39b4f9b400449dc9886dab05d194d0672d82f209c2eb4c123021beda6713eef83c98b18c94267db17aece7ae36cd73fac3c8b3489f3ba5ac1e1622865de65e21bf414130c8721710457c1ae432304ba6b7a90b4f9706796e38cd0bf9d0ecf0e3e0118b21e7af4fb07306e46b11a010000",
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
      "Fri, 02 Jul 2021 00:16:19 GMT",
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
      jobId: "grouparoo-job-45-1625184933653",
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
      "fd2bc8fbda84bcc84b8ad628a56ba686ac84b4daa609d9e6429d02a6d8648aaafcf75d4cd3b59bd47ec2f63de79e731f3c91079147644a98481e2b280f9f76929133029a26f86a177171a5d6f3ddee6bb67f88ef0e37fa079bcf668810354bd1ac48a1a564557250d3eda69d94b22a6829650b13b5064eab3bec39ddf160d2ef0f9d3ef214a4f1b5c81f907daf75a1a6b67dd26e27522629d042a83697d9cbbbbdefd9452977c0b5b2df4adaa8a2ecf7453fa792532d643edb6ed040a5a00c21a322450b7f99113b7f9bba2d68d64e10bc171c28e7b2ca756d0b537099c722a94a93954c9f88b1f9ea4036eeb5bb082c2ed32acbc39c6670664554d3501f0ab02efdf5ca5a7a976b7f350f966b2fdc2caedcd5bcbd585f6f57dec6babb727dd7d294a560b8d6cc3a37370f2fa81f81d22237ea41fd5c2b3f3768f9ff586a024a2b6882e1a833a4dd7167c26236e2f1b8efb0b8038c8dd9c8a17dd6e193010c2206147946d4b0682ef3d164e238ce200e7ba35e371c44bc13d21e8bc278cc27fde12402c6bbe478467e9742c385508554a2e910b9f397811b06fed65bcc03d79410d32ad5178db1ba80d71e351688a0776a3ad6512151a96ef7d20b5c7fbe0896b76e33e16b48283f6c1e71c6314d15209a96d83c0de54a46d830e2cd57ee0582cdc4be9d828a4c7f3e91bae7b58b572d7fa10738c0daae365fb209fca5f7c5d839216e695a19c8be3990022ddf636de8faf80b91b8a44d1672b375fdefa479f221861272fef134116c021ffe6ba7c5472cae3eca288d77dc1dae6a115e42b343c2947b62e398470e31e052ff131b773ae3e1a96b758e3a236490ebe78a9ac5c7421bb14abd803088e3f74c",
      "b78e7f004f5a82d278040000",
    ],
    [
      "ETag",
      "/pfpHsOAjjJmvkfWyQtZbA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:20 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-45-1625184933653"
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
      "00000002ff8d92dd6e82401085df657a0b8956414be205b6b4dae03f266d1a635618140596ee2e6d8cf1dd3b4bad6dda26ed0dcc0cdf2ce71c38c02ec923706095ac9f4b14fb8b35aa892ea628cb5449ba153c970806a0626b22b7a39d72997abcef79a5df6bb1b9356a3f4c3a1d2264b8c18c81738038c13492e03c1d206719d25ac8d332cb97556780da177a380ba6fde11df5198f743f9cfbbedbf53d381ae7c58829b6acf87fac2d8e066cf96a8a310acc43d45a0ac1b718aabeb6295956a4684a5e8a10255470f5602d785930c1b94913b3699975fbd2aab79b578d866d35084c79c854c27362e733d2078a2b964ef92bb9049b0051956438aeae2f344ea2ca882efbc3c06e56fabe02242d4e525cfe0d92de0da3cff0819d22f8ceb18c97b93a53b7fec8fded38caf4f3a81b37f07e105251526724e80fbc59e00ec69a5b9cbc77f70ae558700a52a2ceb05e6bb6ad965d7b8ff59aeba8e93d8e12251a1032fa3b7a89022766a9c4e31b9db4fd407b020000",
    ],
    [
      "ETag",
      "jOktAatYJHEuLH7aU5O8XQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:20 GMT",
      "Server",
      "ESF",
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
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-46-1625184933653",
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
      "000002ff85546b6f9b4010fc2be8fa25916cf3c60fc94a5d87b648367631244aabca3ee02097608e7047222bf27fef027112a76d225932dcccecceeeedf2886e691ea3110a697a579172f7e98685a88388c0299cdab66504d5edf5b08a97c583584c2ee4b89f8ec7c0a0b58ae36d91912e675519113e0a56bdb46455814bc6ba10a86b585dd5d24c75600c75dd3275d0719225339adf82fa5a88828f64f990bb97329666041794f722b67d3e97ef35b928d90d8904978f53ca9085cbef273dcb58840565f9385881818a93724db6986660e14519879f8f43f728def65220dfd388e02862552e6a5b1022627942d3aa6ca2a2d1236a6cbe7a402b7b664f7d69ba085cff6483b7b578732a612eadd725e155263ad2066a4a6846d634deb448712b7df5167340c0c135e6846fa4cbefb6674bd2860b70b791c6d2993471cfa563b5e34a81ebda2b5f3a393b95be798b60297db93ae280ed987041f3c6b48fc38cd4869ffaeafc7d9bb5000b30d182ebbe626175a00cc324ec47c94037c34421613808fb26d643251a1ac48843824127eae88d0ae72cef131d106d3034342b3107b18563dd305465680e0d4b8d6245d7b09e0c12b4efa087920a724e79c1386d9b8b2e3dc7b7d7be17b8d3896f376524181a78de9aab8b78ed534091407aa7ae7d8d520699ea9b725cdff62653dfb9b0dbe198911447bbd51d8c4782334e808d4bbc258294731643d3d072b1727c67e14e66a0686e7c79607034faf5f822f07745d365d1fc23df99c31d4de6cbc6c3817481b3aa61ddb70f485334a5ab685dd5f4556da4ea23d5e8298af213edf79dff079f78dee40a0ce1b2c4bb3718146919b5fc1f591b7ef3d69a3fb850519dedd9d3d19b85f6bff7f0eb2058b83617fa11d8de156a8f3c929092e4d1c72306e406f8f0bb715862e0c21a431a58084161a0235e27894ad20e36dd36e69fd430afa6821a7229de62aaaa98871bac63d411c996e4e2a9a276899bb6d550c59f4900c23cba8efb0dd03fdb830e8244050000",
    ],
    [
      "ETag",
      "EE64Uukh9udPpwtOAV/d7g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:21 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-46-1625184933653"
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
      "10c5bfcb786d13913f62130e80458904a5c08118429632ad0b6da7ee4e3584f4bb3b5b3978f4b23b79fb7bbbefed054eba3840007b9d7e5668ce3729f2c20d11da2a632b5b498545f00059a5429e747713bef2f0252d26e395de3ce6f793e5623010c2c61f982b082e9068cc0e1682f70b142a47b1ed76a6b951303e974e99ce57e153188990d3c109f3f56c361ccd42a8bd3fb6f2f42fcbb6f6e048fb08133458c4e85294868e18f3d415b42a2f33f42d5526460b0ddc1ca486aa5219225f14bfd3f35bbdbb6eabdf7968b77bddb68019c58a3515c2ae97920d985865117d4b3f6809609a51aa26cdfad5c8aec375dad6dbab697466b46f86248145f778a77ffb1b654c2e1e4b6c36157a102bf9cb67cd10242ab358ff00b25fec27a9010000",
    ],
    [
      "ETag",
      "ki5YEOtAKgnFCTiYDm7FSQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:21 GMT",
      "Server",
      "ESF",
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
      "1f8b08000000000002ff1dd04b5283300000d0bb645d3b424a09ee401a2080486728e0860931a57c0a918f0d75bcbb1d8ff0de0fa08cf1692ae6a1e53d78012b558d2ddbfa02595675f1c8a15872023d58a01d59b05f8af81a3acba55533eda69a6953930965bc492d4ad967b6f65ec4b52c7c4e9c36f072ddc6ed591e258e05f4171ab33324b20dea317790ec9619b66eda31970a0cf793a69a4d702ac5974f76f6be3056a6bbd700074317da330e2aedfb5e0b64bba84ab0c248fc1e47a33544262e51af2bc9e089e4e9e81ee6cc1ce50d291f6f39126b4295ee24b944663ccdc3ab0a36804b518f7c2aea07176a86b101fff6625e057f04589c8e7c04bf7f2fb28dd61a010000",
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
      "Fri, 02 Jul 2021 00:16:22 GMT",
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
      jobId: "grouparoo-job-47-1625184933653",
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
      "6b4fa34014fd2b64f6ab2da550fb489ab5a9b8365ba852aafbc8860cc305c7050699c15d63fadff732585763a29f98997bce3de73e7824bf79999019897976d740fdf0e956c4e48880a219beba931fdfbcbfd9575a9ac5f9b55a5e8567eb8bcbf91c11bc65495a5439f4a4686a0672b6dbf6b35a3415ad85e861a29e33ee59c7c3913571a6b67d3cb29127214fd7bcfc8dec1ba52a3933cd83763f1322cb81565cf699289edfcdfba159d5e2169892e66b491355a4f9bee8e75c30aab828e7bb2d1a6824d4111494e768e13f33894f5ea7ee735af43304df73069431d194aab585299828539e35b5ce4a668f44db7c71205b77ed2e438389bc29caa8a4051c19095534520f151867c1c63356fed926f016e16ae347dbe5b9eb2dfacbcd7ae7f95be3fadc0d5c43d13807cd35e6c689bef97841fd04a4e2a5560fdbe756f9a941abb7636909282da10b46e3c131b52683699cc663964eec519c0e208e27f17844ed78c0a60e38490c14795a54b36829cad81eb3211db32849d33472609044538b2511d8437be058a9634d86647f44fed45cc129979590bceb10b90e56a11b85c1ce5f2e42579790d22657a79db1b680971e151688a0776adab7512e50a96df7ca0fdd60b10c57576e37e13564943d6cef70c629cd25209ad6d83c05b527126c18f1179e7b8a603db18b435092d9cf47d2f6bc75f1a2e5cff41007d8da55fa4bb661b0f2bf683b07c415cd1b0db9ef0ea442cb37581bbadeff42242e6997855ceedce03be99e0248a186927d3c4d04ebc087ffda61f1118bab8f3252e11d7787c95684d5d0ed10d7e51ed893e1d01a110daed59b98ed5887aeb539da8c5040a99e2aea161f0bedc41af90cc2208edfd7dddaff031436734678040000",
    ],
    [
      "ETag",
      "E8ZXMxgKan/mHWtCVTFLPQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:22 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-47-1625184933653"
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
      "4fc2401085ffcbf8688920a560131eca452529c8a53c194296ed148a6db7ee6e350de1bf3b5b118d9ae84b3b33fd667bce690ff0146721b8b089b7cf05caf2628b7a668a39aa22d18a6eb9c8148205a8d996c861ff2af47bbec32fb1954e7919ab813df3ba5d2214df61cac03d401463122a701f0f90b114698d8ba448b375d559a0cbdc0c17c17c34b9a33e15a1e9274bdff77afe108ed67931649aad2bfe1f6baba3057bb199638412338e464b2ec51eb91e199b8aa5798235250ac9514105570fb65214399342d46852b3dbb58673dd6a74ec9b66d36935094c04673a1619b1cb05e9032d344be6e2955c824380ac4a321c55d7171ac76165c494a349e0d895beaf00498be204d77f83a477c7e8337c60a708be732c1545a6cfd4adffe0fd761c65fa79d4c00b863f08a529a933128cc6c345e08da7865b9dbcf74a8d6a2a0505a9d064d8a8db9d56dba9bfc7da17266a7a8fab65811670467fc77dacc18d58a2f0f806543edf9a7b020000",
    ],
    [
      "ETag",
      "EC/dLBL6c+e5mPcyisD4QA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:22 GMT",
      "Server",
      "ESF",
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
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-48-1625184933653",
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
      "6f9b3010fd2ac8fba795f283244048a4a8cb12da454a494748bb6a9a120347ea16708a4dabacca77df619ab659b7554202fbdebbf7ee7ce689dcb12c227d12b0f57d01f9f6d32d0f488d80a46bdc1dff925c4fa1d7bd6e27f753eb3689be3f448f83012258c91234dd245017bcc84310fdc5bcb1ce79b1a139e7754c5437ec7acb6a9b2ddbe8753a96d9419e80249eb2ec0ed937526e44bfd9dc6b37d69caf13a01b261a214f5ff69b0fede626e7b7104ad13c946ca28a68fe5ff424e121958c6783c51c0d1402f225a4942568e19519059f0f5337184d1b6b043fb0106818f22293a52d4c11f22c66eb22575949ff89289b6f3ec8dc993a235f1bcd16ae7fb4a269495e1d6b5468cb650ea248644d5b614d314b60c9a25515d9dc69a7deec1c23e8e0860a102bedeaabe3399ab6cfa10db4136de88eb543fac4d516aeebcc7dede8e4583bf3668b0bedcbf501067d472024cb946b9f0609948e9f1b3b797f9c25814a745105975ddda22d5bef0571d00d63bb6306b10e4160075d9376023dec1960440150e4c932bb62d18c6760da76dbb64cbd4bcd8e1d04265821c4816182ae5b7a3beac660b4a811915d8d3ce64cc298890d17acea2eb9f226beb3f4bd853b1afa8e2a23a6d8c17165ae2ce2ad4f894522e83f75edca28e3a8541ed5c4f51d6f38f227974e351d5358d3703bbfc7f988692200d134a72948c8cf79844d2317b3f9c49fccdce11419eac82ff60841fa3f9e5e09fe76a3ba2cd59b9c4e6743df3294833de4922685c23c541fa4d53011b1abfd3bcdd0f386d7284df39c6eff88613996a2ff4541e1d5aab2f9a2484ab5fdaa7db0b2c8eee70e9f1ac1bb5569916f0bc7bb26d5960731e490851f0f138255e0c35fc4febe22166f2cca08896b1cdd509422610ed508b354997f66db9db6d1260a9ccb7731a3d5d99f5599",
      "a3cc082964f2b9a2eabeaab695a142bc80308893e74edc338cfe0636fce2462f050000",
    ],
    [
      "ETag",
      "Dzto0me97Y2lqL6jldXvdw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:23 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-48-1625184933653"
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
      "85ffcbf49a4093a868c0436da515a2adb14aa188acc9248d2699b8bb6911c97fefecb6148fbdec0eefbd59beb7173816750a21ec8bfcd4a23cdfe4a897668851b5a5567c35542b0407508bdc24d70fdef309e7a74d3ec279fab619ad305d8ec79c50c9075602c20b640596a982f0fd02b5a890d7763b695fe4983e3746992d5ea78fd398858a52232cd651743789a6d039576bcdf15f2bdbce8103ed63cc50629da0a168241d30d133535089aa29d155d4ca0415d8b03572496d232491cb8adb1bbadec0ef7bc3de280806fd808325254217547376bd6236d0a44519d317f7039f03d28e5c35b3e7a7954d07337916eddaf3fe3cdf78dbdf0727678dea4512d3293460817ffb83794f065d73252d5b742011fccf4f85863013a5c2ee1b552d1f5fc5010000",
    ],
    [
      "ETag",
      "bUD1OqeMqVg9eMdXV9SedQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:23 GMT",
      "Server",
      "ESF",
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
      "0002ff1dd04b7282300000d0bb64ad0ef211d21d60f90a8e182de9261342141b81c847a59ddebd4e8ff0de0fa08cf1be27432b7803dec04455b8608b585a8e73aea86f608ce1541bbc2894f4a17da1c4c3da63937568293254dfe3a5d02f1bc7204573536264b5538733f51be5ae4cf31e9ecdc3b670dc925431927ca423deadea7bee07e9b5184af8087b52256b5fdec8751d65ad793c5157bd7f5afb39325418e513f575d5f65c4f89e6e9b082b82977cf903622dc1d046ca148940f288370acd7eec86d3b7a5fb68c11d37e9a015178b2cd585bda737fefeef553371dc10cf0a7bc74bc2797175733209c817f3b1926c95f010ea71defc0ef1f387ffd971a010000",
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
      "Fri, 02 Jul 2021 00:16:24 GMT",
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
      jobId: "grouparoo-job-49-1625184933653",
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
      "fd2bc8fbdabc803c8814ad514ad74c09e90869b54d1332e642dd02a6d8b4caaafcf75d4cd3b5aad47ec2f63de79e731f3c913b5ec4644a229eded750edbfdc8a889c105034c557b0ef192dadfdf7bffd5f43335833d85bf9e36c8608deb024cdcb0c3a52d4150339dd6dbb6925ea925642743051c7763a8391391c4c6cc7b246430b7912b264c58b3b64df2855ca69af77d4eea642a419d092cb2e13f9cb7befc1ec9595b805a664efad640f5564ef63d1af9960547151cc765b34504ba842c829cfd0c27f661c9dbe4ddde534efa6087ee00c2863a22e54630b533051243cad2b9d954c9f88b6f9ea40b6eeca5d040613599d17614173383162aa68a8f62518e7fe666d2cbdf38dbf9e07cb8d176e1717ee7ade5d6c56bbb5b735ae2f5cdf35148d32d05c63669cea9b8717d48f412a5e68f5a0796e949f1bb47c3f968680d212da6038ee8fe860d277a2241ab364620da3a40f513489c6436a457de6d860c71150e46951cda28528c6039b526627e1644c93d01ec671384922271c9b268d628739b1d9278713f2587105675c9642f2b643e4da5f066e18f83b6f310f5c5d4242eb4c9db5c69a025e7b545820823ea8e9d044b940a5a6dd4b2f70fdf922585eb9ed84579052b6dfdee38c139a494034adb0790aaab588b161c49bafdd3304eb895d1e83924c7f3f91a6e78d8b572d7fa10738c0c6aed25fb20dfca5f74ddb3922ae68566bc8437b20255abec1dad0f5e10f227149db2ce4c7cef57f92f6c987042a28d8e7d344b00e7cfaaf1d171fb1b8fa282315de7177986c445805ed0e715dee913db14dcb211a5ca977316b641ebbd6e46832420e857aaea85d7c2cb415abe50b0883387e4f77ebf00f",
      "6587db9578040000",
    ],
    [
      "ETag",
      "e4qcap3yJz0Z52TMcey3mw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:24 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-49-1625184933653"
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
      "10",
      "85",
      "ff",
      "cbf8684940a040131faaa2362988a5265e42c8da4ea1b8edd6bd4808e1bf3b5b158d9ae84b7766fbcdee39a7ddc2535ea6e0c163be78362837070bd4d7b6885019ae152d9528158203a8d982c89c4ff8fdb27d797877777b910e7a611418b33e3e2642254b2c18785bc872e4a902ef610b252b90c612c14d51ceebce01bda9ece6348e82f105f585486d3fbe0943ff241cc2ced90fa64cb379cdff636cb67360251e23cc506299a0d55249b1c24407d6a66245c5b1a18491092aa8e1fac5420a5331294483761a9d41a3e51e755bfdcea0dd76bb6d02b94898ce4549eccd94f481169af148acc925b804c8ba24c359fd7cb151a5b5115b06e3d8edd4fabe02242dcb39ceff0649ef92d167f8c0de23f8ceb1429852efa9f3f0caffed38caf4f3a8333f1efe2094a6a4f6481c8c86d3d81f4d2c377bf77eb2d1a8265250900a6d86ad66a7dfedb9cdb7584f858d9aeef1b434e840c2e8efb8cc357819e30a77afd240488e7b020000",
    ],
    [
      "ETag",
      "ilPlZh3H+YYXGd97LRIuuw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:25 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `id` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-50-1625184933653",
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
      "4f",
      "db3010fd2a99f70f48fd9da64d2b55ac2b19542a294bd322344dade35e8221898bedb055a8df7d978402150ca448897defdd7b773ee791dcf1744dfa24e0d17d0672fbf55604a44240d30877fd73736145a7139544adbb852da5bab9ff1b0d0688e0394bd164134355894c3250fdf9ac1649916da814a28a89aa56a3daecb4aca6ddee9966c73291a7200e273cbd43f68dd61bd5afd7f7dab548882806bae1aac644f2bc5f7f68d53752dc02d3aa7e2859471555ff58f424168c6a2ed2c17c86063205720909e5315a7861ae836f87a96b9c26b508c10f9c01654c64a9ce6d610a26d29047992cb292fe23296cbefa203367e28c7c63349dbbfed18a263979756c50652c97125416eb8ab1c29a421ec392af5765647367fcf0a6171841073754815a1957e78ee718c62a077d191827c6d03d350eb963d798bbae33f38da39363e3cc9bce2f8defd7071834bd06a5795a58f66910436ef7a9abe3b7679913a8460b6570d96d7468d36ef48230e8b2d036ad206c4010d841d7a266d060bd36b4d70150e4e93c7bc1a2a948c1ee9816ed34a0cb28b34db367438b050c0fa6d7edf4cc206c355ad06d856457217f24d770cad546285eb6965c7963df59fadedc1d0d7da72823a4d8bed3d25c5ec46b9f1a8b44d00775edf22817a8949fd3d8f51d6f38f2c70ba71c8d0944946d67f7381c218d15209a4a9a80067921d6d83472399d8dfdf1d41d4e90519cf7e51ea148ffd7e30bc1df6e8a2eebe29d6b75da85fe1eb0a07156201eca0fd2b4c86e57f97f8aa1e70daf51964a49b7efa77f377f812f56a5c5673d92abed57ad835587ec7eeff0a910bc54a516f93977bc6b526e79108284947d3e48082e029ffe1bf61715b178555146695ce3d832958b3009e5f8f2a430ffc4b6ad66bb4d0ab0d46f62a6d9dc9f53",
      "9e23cf0809a4faa9a2f2a2166dcb43997a066110a7ce1dbb6718fd07c0524eb828050000",
    ],
    [
      "ETag",
      "TH3V5gDLsmg2kV8rrshqxg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:25 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-50-1625184933653"
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
      "00000002ff8d904f6fc2300cc5bf8b776d25a02d6295388c3f1a480c6ddd7a614228b46e5768eb2c494108f1dde7643becb0c32e89f5fcb3f59eaf70acda1c62d857e56787ea7257a279b14582baab8de64f52ab113c40234a269f82c330ec545a04d37c31c3d9426ed2d1793c6642671fd80888af505458e71ae2f72bb4a2411edbed94dbc898b948ab2cd76ff3c779c24243b915d6e96af53059cde1e6fd1a93c77f8d6c6f1e1c689f60810adb0cad0ba9e8809959da805a34b2465f53a732d4e060d72815755228229f153feaf9fde120ea8fc2fb20184601833565c254d4329bbeb2373064449dd099f3c18001e54a8e5ab8f7c472e4329c1c60adfdddebdbdef667e1e462503f2b62771aadb170d4fbb639256bdd7024a33af420137ce74565202e44adf1f605f978e401c5010000",
    ],
    [
      "ETag",
      "M3j64urUf3CdHDeDHpZU8w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:25 GMT",
      "Server",
      "ESF",
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
      "ff",
      "1d",
      "d0",
      "4b",
      "72",
      "82300000d0bb642d0e8844d31d48fdc1085442a49b0c0d01d4062241113abd7b9d1ee1bd1f9031c695a25d73e53578034336435336f5e4d271ca2a130586e5dda52865c836f7d22ffdca4e4d4f1b1f74936bdfcab3b48019f7f21228bb0943631c0c8a8b83bbc7acfaba342bfb916a6a7b24ce89ee8e09f437878d9336de0247a7617d8bab21a12a0b5d78ea5baf2663abbd1321ae3c8dbce55dc49fa42f4659cf1131fab9bb0ab8bfd4612775fc91609f11e1d0dbba7a4a6858cc94312b38cf8d0b268b923fc96e9c75309d637d57e4111cb6220c620b4c007fca73cb153dbfb8a685d004fcdb693748fe0a7078d6f216fcfe01f89335b11a010000",
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
      "Fri, 02 Jul 2021 00:16:26 GMT",
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
      jobId: "grouparoo-job-51-1625184933653",
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
      "000000000002ff85536b6f9b3014fd2bc8fbda3c08799048d11aa574454ac80624d5344dc8980b754b30c5265554e5bfef629aae55a5f613b6ef39f79cfbe0993cf022213312f3ecb186eaf8ed5ec4e48280a219be5af4c077a1e524d7d5ae74d31b7e4c0367319f2382372c49f7650e1d29ea8a819c6d836e5689baa495101d4cd419991d733c1899f6706a59e391853c0979bae2c503b2ef942ae5acd73b6b773321b21c68c9659789fdeb7bef30e89595b807a664efbd640f5564ef73d1efb960547151ccb7011aa8255411ec29cfd1c27f66125fbe4fdde574dfcd107ce00c2863a22e54630b533051a43cab2b9d95cc9e89b6f9e6400267e52c438389bcde175141f770612454d1481d4b30aefdcdda70bdeb8dbf5e84eec68b82e58db35e74979bd576ed05c6ed8de33b86a2710e9a6bcc8d4b7df3f082fa0948c50bad1e36cf8df24b83dc8f636908282da10d4693fe989a767f1aa7f184a5b6358ad33ec4b11d4f46d48afb6c3a84611203459e16d52c5a88820efbe36942e3c84ccd381ada763f9aa663884c6651b33f82e1641093d30579aab8822b2e4b2179db2172ebbba11385fed65b2e42479790d23a5757adb1a680b71e151688a04f6a3a35512e50a969b7eb858ebf5886eece6927bc828cb263f088334e692e01d1b4c2e629a8d622c186116fb176ae10ac27f6f31c9464f6e799343d6f5cbc69f92b3dc401367695fe9220f45def87b67346ec685e6bc8a13d90122ddf616de8faf41791b8a46d16f26bebf8bf49fbe4430a1514eceb69225807befcd7ce8b8f585c7d94910aefb83b4c3622ac827687b82ef7ccb6c783b14d34b8521f62d6d43c77adc9d164843d14eaa5a276f1b1d056ac96af200ce2f83dddadd33f27f8cf0678040000",
    ],
    [
      "ETag",
      "3aviVT3EdFrVpIfHiyfSEA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:26 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-51-1625184933653"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92d14ec2401045ff657c2d5104aa36e1a1282a09a0944a620c214b3badd56da7ee6e2584f0efce5644a326fad2ce4ccf6cefbded069eb322060f9659fa52a15a1fa46826b6085057d268be9554680407d08894c9e959b09af937f23ebbcc69323b3c9ebd54bdb4db6542478f980bf036906428630ddec3060a9123af4524abbc58d49d03665ddae1340c06e32bee738a6d3fbe1b0efddeb00f5b67bf180b231635ff8fb5f9d681275a0698a0c22242aba554f4849119589b5ae4a5c486a64a45a8a186eb07a9a2aa148aa8c19346a7d968bac79de669fbacd5723b2d062545c26454307b37657d60c80819d08a5d82cb80aa4b369cd4d7571e67716dc4968371e8b66b7d5f0196966412177f83acf751f067f8c076117ce7444e5561f6d4e5f0c6ffed38cef4f3a80b3fecff20b4e1a4f6483818f5a7a13fbab5dc7ce7bdb736a86f1571901a6d86cda3f669e7c43d7a8ff59c6cd4fc1ecfa80a1d8804ff1dd799012f1152e3f60d4eb7a2fc7b020000",
    ],
    [
      "ETag",
      "S9RwVAOlYiFmoQV/2VquBg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:26 GMT",
      "Server",
      "ESF",
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
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-52-1625184933653",
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
      "000002ff85546b4fdb3014fd2b99f705a4bed23cfa902ad641609d4a0a690a62d3d43aae130c491c6c8709a1fef7dd3814e8d8408a94d8f79c7bcebdbece23ba65f91a0d51c492bb928a87cf373c420d44154e60f7f4c7f177871e9f13d7cd4578756fabf6cd20198d00c12a96c45991d2a6e4a520540e17f35622785960c1791312359d6ed374bb8ed9b70796e53a16f0244de329cb6f817dad542187edf656bb95709ea414174cb608cf9ef7dbf7dd7621f80d254ab67725dba022dbef8b1ea49c60c5783e5accc14029a958d20cb3142cbc30d7d197ddd42d86b35602e07b4628268497b9aa6c410ac2f39825a5d059d1f011699baf3ed0dc9b7a87a171385bf8e1de0a671579b56f60692c9782ca32550d630535c52ca54bb65ed591e2d6380e66a7100107d75852b9322ebf798167bc6cad8c4f23e3c018fb47c66e86896f2c7cdf9b87c6dec1be7112cc1667c6d7ab1d0c585f53a958ae8d87384a6965faa9b793b7275a11b002d53ab8ec755c6cf63b83288e7a24ee5b4e14776814f5a39e83ada8430636b5d711c5c0535576cdc239cf1dd7347b03d7a634b606b169f6ad388ae3aed3b508e9d8ae1d753a7dcb3623b469a0df82297ac464c125ab1b8c2e8349e82dc360e11f8e434f97116368e2516dae2ae2b54f054502e89dba3655947150aa4e6be2875e303e0c27175e3d20539a60f230bf831189712a29a0b1c01955549cf235340d9dcde6937032f3c75360e8533fdb22241afe7c7c21840f85eeb2d26f340f83897fa20d6c1117382d35e4befe40e302bca2cda6f1ff34e320185f813416023ffc1583725cbba2ff4342e3f5aab6b9953451a5b65d7577562edafcdac0d34070bd6a2d74bef0822b546f0534a682e6e4e36102b00e7cf897d85e59c0c2a50519a9600da34b64254204ad479865dafc13bbdfeb761da4c142bd8941eeed595539aa8c34a3b97aaaa8beb2ba6d55a894cf2008c2e4f9fad8367f00543e484032050000",
    ],
    [
      "ETag",
      "MZFJ5eFQc66nrTYv4t/j9g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:27 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-52-1625184933653"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d905b4fc2401085ffcbf8da26f40262131ec4a0a204a54aa231842c655a4b2f5377b76843f8efceaec6f0e8cbeee49c339befec018abcde42049b3cfb6851766719ea851962546da9155f0dd50ac101d422e3645bece9ae377fd8dff75e3cbf2b7aaf5fd5f56234e2844adeb112101d20cdb1dc2a88de0e508b0a796dbd96f6458ee9ae31ca74fe3cb999c42c54b435c27c399b5d8e6713383a276b4df1af95d5d1811d6d624c51629da0a16824ed30d153535089aa29d155d4ca0415d8b03532496d232491cb8adbf75d6fe0f7bd61781104837ec0c19212a173aa39bb7c6236d0a44519d327f7039f03d28e5c35b5e79ee5d076309367d14e3dffcff38db7fa7d70dc69548f92984ea1010b87e73f985764d03557d2b2450712c1ff7c9b6b8852512a3c7e030d50b5cbc5010000",
    ],
    [
      "ETag",
      "ukvoJ0NOvK0X12yk0YxmFQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:27 GMT",
      "Server",
      "ESF",
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
      "ff",
      "1d",
      "d0",
      "4b",
      "72",
      "82",
      "30",
      "0000d0bb64adce00f2eb8ea850fe554061c5400810b080091fb1d3bbd7e911defb01194298b174ec5bdc810fb066bcba433b7b5020ac9aa3e4ed0f54e5b8460b89cf0bb5e45a6828913da730944d327bdb3ab849c3375da31e4d997e4c0892746e1f09bc73ba04ec8a9eafd8ed8be0165e1b0f9693a3b075d6453f98610a490ccbd7d8fa6a27ba09c386f73895af9c2df73a29cc075fb5d3a3aae2e43248dccd40b6652c87308fd4ad45bbe6903bb2e5b1c0d6c8b937aaad4df6505072bdbc9ccd9c969f81f6bc1789d6b68bdd17e4ab1e15c99705b001f839108a594ade5c4154d50df8b7a7e33ae07700c419c514fcfe01f89d5f281a010000",
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
      "Fri, 02 Jul 2021 00:16:28 GMT",
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
      jobId: "grouparoo-job-53-1625184933653",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6f9b3014fd2bc8fbb82624e51112295aa394ae9112b211d2aa9a26648ca16e00536c125555fefbae4dd3b5aad47ec2f63de79e731f3ca31dab52344109cb1f5bda3c7d7be0093a4354e21c5eefefccc3f5e8ae292dbc2b83dde361cfbfb787e914104cb1042eeb82f6046f1b42c564bbe9e70d6f6bdc70de83443dc7ea0ddd7367e8d963cb721d0b788216d992553b955dca5a4c4cf3a4ddcf39cf0b8a6b26fa8497afefe6fedcac1bfe408914e67b49135484f9b9e88f82132c19afa6db0d1868056d625a62568085ffcc34b9789fbacf70d9cf01bc67846242785b49650b52105e652c6f1b9d154d9e91b6f9e68036fed29f4706e1455b5671854b7a66a458e2583ed5d4b80ad72b63115cadc3d52c5aac837833bff657b3fe7cbddcae828d717bed87be21715250cd35a6c685be057001fd940ac92aad1ea967a5fcd2a0c5c7b12802480bda05e3d1c0c5436f304eb2644432cf72926c4093c44b460eb6920119dbd44e138a81a745350b57bc1a8e6d37cbc624765dcb8e6ddb71e3b19dbaf10027ce70e825f6283d47c733746898a4974cd45cb0ae43e8365c447e1c85db603e8b7c5d4286db425e76c654016f3d4a2810409fd4745451c64149b57b11447e389b478b1bbf9bf092e6983c6d1e61c6192e0405346ea07992362b9e42c350305bf99700d613fb750a0a34f9f38c54cf958b372d7fa54730406557ea2fda44e122f8a9ed9c1037b8683564df1d500d96efa136707dfc0b4858d22e0bfabdf5c33bd43d8534a30dadc8d7d304b00e7cf9af9d161fb0b0fa202324dc6177885022a4a1dd0e315dee89ed79b6e5200d6ee48798e30c4f5d533954465ad24abe54d42d3e14da89b5e2150441187fa0bb75fc07e57267ac78040000",
    ],
    [
      "ETag",
      "hY/wH7Yrm3akmNkqwvo+uw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:28 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-53-1625184933653"
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
      "02ff8d92414fc2401085ffcb782d0908546cc2a120484d412ce5640c59da69296ebb75772b2184ffee6c45346aa2977666facdf6bdd71ee0392b6270609da52f15cafd458afac11401aa8a6b45b752140ac102d42c2592f94b6c4dfc7130dcb9e311d3eedd8eefdc7e9f08156d3067e01c20c990c70a9cc703142c475a8b04aff262557716e87d69868b30f066b7d4e72236fd6ce9fbeec01fc1d13a2fc64cb355cdff63ede968c156ac034c506211a1d1524ab1c5487bc6a66279c9b1a14425235450c3f583548aaa645288064d1add76a3655f765bbdce75bb6d77db047211319d8982d8e582f481169af140ecc825d804c8ba24c3497d7da57116d7464ce9cd42bb53ebfb0a90b424e3b8fa1b24bd1b469fe1033b45f09d63b9a80a7da6c6febdfbdb7194e9e751376e38fa41284d499d91d09b8e16a13b9d1beee9e47db0d7a8e65250900a4d86ad66a7d7bdb29befb10e85899adee36859a10511a3bf6392697012c6151edf006e5489687b020000",
    ],
    [
      "ETag",
      "aLUe1HLFRCwAFEatAJwlwA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:29 GMT",
      "Server",
      "ESF",
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
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-54-1625184933653",
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
      "0000000002ff8554fd6f9b3010fd5798f7cb26e5fb8384485197b5748bd4928e9055d53425b639a85b82a96d3a7555fef71da669977d4a4860df7bf7de9dcf3c925b91c764429848ef4a500faf6f24230d0286a6b89b9ccede0f59f49d9e5e2e6eba86fa1d75eda7d3292244c5d2745b64d0d4b2541cf464b56ca54a9605555236315173386876dddeb03b1e78fdbe3bec234f43969c89fc16d9d7c6147ad26eefb55ba9946906b410bac5e5f679bf7ddf6b174ade0037ba7d28d94615ddfeb7e85126393542e6d3d5120d941ad41ab6546468e18519b37787a95b826e5b2982ef0507cab92c7353d9c2145ce689484b65b392c923b1367ffa204bffcc3f8e9ce3c52a88de6ce8b6226fde3a543bebb5025d66a6e16cb0a64464b016f1a68e14b7ce69b838c7083ab8a61af4c6b9fce887bef3b2b5715e4d9d2367169c388719e681b30a027f19396f8ede3a1fc2c5eac2797f758041eb316823726b3ca22c83caf4536fe7bf9f6845a00655ebe07ad4716977dcf158c2463c19f7872ce9006363361ad23eeb706f00839801459ea9b25b16cd65ee0d7b6397c6e0ba3c89876e8f79e041cc58d773638f53ca92fea033e040760df24d0903274217528bbac1e4329c47fe3a0a57c1f12cf26d1909c5269ed4e6aa227ef669b04804fda3ae5d15151295aad39a07911fce8ea3f967bf1e903348297f58dee1882434d38068aae8160ca8731963d3c8c562398fe68b6076860c7bea177b8426932f8f2f84e8a1b05d36f64d9651380f3e58037bc4679a9516725f7f105aa057b2db35fe9e661686b32b94a64ad1875f62588e3ba8e87f90b078bbaa6dee25bba452dbaf7a072b97ecbeeef06910bc5eb516f9b4f2c32b526f859080829cff7f98106c03fffd4becaf2c62f1d2a28c36b8c6d1e5ba12e10aea11165b6bfe893df67ade8858b032bfc506ddf1feacaa1c5546d8426e9e2aaaafac6d5b152af53308833879813db6dd0fa6d044c332050000",
    ],
    [
      "ETag",
      "fFAB5bTzaFWOj1taE0rhEg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:29 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-54-1625184933653"
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
      "ff8d904f4fc24010c5bfcb786d13e91fc4261cc4344ad210ad120e8690a59dd642db29bb5b84347c77675763387ad9ddbcf79bc97b3bc0be6a7388605b95871ee5f9a644fd6a1e29aabed68aaf8e5a85e0006a5132294ea11fdc2e0f8b6de151b29a1f6755712aa7532654f6898d806880a2c23a57107d0cd08a06796cb391762363fadc1965be788f9fe294858672232c9649f2304b62b8385763ddfe5f23eb8b033bdaa658a0c4364393a293b4c34ccf4d41259aae4657512f335460616b9492fa4e48229715370cdcd1d80b4793e0def7c7a1cf604d99d015b5cc2edf381b68d2a24ee98bfb81c780b44fae5ad8f3c872683b1c2d60a25d7be33f6f64bcf5efc2d959a37a91c4e9149a60c1e4ee27e62399e89a2b69d9a30399e07f7eae344485a8155ebe011e8b58c3c5010000",
    ],
    [
      "ETag",
      "ax5340UqNbf2oLWIvBifxg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:29 GMT",
      "Server",
      "ESF",
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
      "ff",
      "1d",
      "d0",
      "cb",
      "7282300040d17fc95a1c40b1d29dc118a4149a018cac3240a3400c6f14ecf4dfeb747d57e7fe8024cb78dfb3a116bc02ef604e7473992d3f9a2d84d7f2b1c1d95d773be315c95128a7722519dc3e3546939d94221561e556559dd832d0d01713a6f316437f1765ebf0d317626d76853a2339b6cf2b33e8e650e8da8852f562c1d6516183ef434ac584c6a3964f3e7aee6d49ad3b1d6a898582543fee91559bd76f19cd654b3d25f12827a45d17fb32c731c6ce39bf69d325bac5d1a0a9a31f9cb1773a6c7b7659d584ba849150578a4071d0d90e1ec40ac102f0a9293adeb3e2c55d19a6b900ff7636cc0d7f0d803ce978077eff00a878a6ea1a010000",
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
      "Fri, 02 Jul 2021 00:16:29 GMT",
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
      jobId: "grouparoo-job-55-1625184933653",
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
      "fd",
      "2b64f6ab7dd096963669d66e4565d3529752cd66b321c370c1516090197cc4f4bfef65b0aec6443f3133f79c7bce7df04c6e7911931989787a5743f5f4ed4644e48880a229be3ec63f9c918c733e2aeebc8b8765faf3ccf617f3392278c392342f33e84851570ce46cb7eda695a84b5a09d1c1441dcbea98e38165daa3e97038b686c89390252b5edc22fb5aa952ce7abd8376371522cd80965c7699c85fdf7bf7835e59891b604af6de4bf65045f63e17fd9e09461517c57cb74503b5842a849cf20c2dfc67c6d1f1fbd45d4ef36e8ae07bce803226ea4235b630051345c2d3bad259c9ec99689b6f0e64ebac9c65603091d579111634872323a68a86eaa904e3d4dfac0dd73bddf8eb45e06ebc70bb3c77d68bee72b3daadbdad7175eef88ea1689481e61a73e358df3cbca07e0c52f142ab07cd73a3fcd220f7e3581a024a4b6883e1a43fa6a6dd9f46493461893db4a2a40f516447138b0ea33e9b8e6014474091a745358b16a2184f313c65566899260d479098a19d4ce270920c07303669323107647f441e2aaee084cb5248de76885cf96ee08481bff3968bc0d12524b4ced4496bac29e0ad47850522e8939af64d940b546adaed7a81e32f96817be9b4135e414ad9d3f60e679cd04c02a26985cd5350ad458c0d23de62ed9c20584fece2109464f6e799343d6f5cbc69f92b3dc001367695fe926de0bbde99b673405cd2acd690fbf6404ab47c8db5a1ebfd5f44e292b659c8af9de3ff26ed930f095450b0afa789601df8f25f3b2c3e6271f551462abce3ee30d988b00ada1de2badc037bdaef4f6ca2c195fa101bf40787ae35399a8c9043a15e",
      "2a6a171f0b6dc56af90ac2208edfd3dddaff035e3043b578040000",
    ],
    [
      "ETag",
      "xdBE4sdmi4nqNPwCgJG8RA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:30 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-55-1625184933653"
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
      "4fc2401085ffcb78b42420b460130ea0559b948a504e8690a59d4261dbadbb5b0c21fc77672ba25113bdb433d36fb6efbdf600dbac48c08565b67aa950ee2f56a89f4c31415571ade8568a422158809aad881c1779cbb9f2b85326bbf032d832ee75dbaffd3e112a5e63cec03d409a214f14b8cf0728588eb4160b5ee5c5a2ee2cd0fbd20ca7d1c40fefa9cf4562fa7016048361e0c1d13a2f264cb345cdff636d7eb4602396134c516211a3d1524ab1c158fbc6a66279c9b1a14425635450c3f583951455c9a4100d9a346cbb411eed56af73dd6e3b769b402e62a63351103b9b923ed042333e11afe4121c02645d92e1b4beee689c25b51153fa61e4746a7d5f019296661c177f83a477cde8337c60a708be732c1755a1cfd45df038f8ed38caf4f3a8db41e4fd2094a6a4ce48e48fbc6934188d0d373f791fee35aab11414a4429361abd9e9d95da7f91eeb8d3051d37b5c2d2bb42066f4773c641adc947185c7375b1fc4467b020000",
    ],
    [
      "ETag",
      "Pnm162El6pdvN+LkalE73w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:31 GMT",
      "Server",
      "ESF",
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
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-56-1625184933653",
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
      "f4",
      "fa",
      "2591fce0e107b614a5ae4d535207a718a78daaca3e60219700e77047222bf27fef027112376d2221c1ddceeccceeedf1406e58169221f1597c5b40bef978cd7dd22020698cbbcefde9f8aa9746f1b753bd33a3f2a70393fefdd1112258c912345d27d014bcc80310c3c5bc15e7bc58d39cf326266a767b4dada77735b333308c5ed7409e80249ab2ec06d95752aec5b0ddde69b762cee304e89a8956c0d3a7fdf69dde5ee7fc1a0229dafb926d5411edb7458f131e50c97876b498a3814240be8494b2042d3c3343ffd37eea16a3692b46f01d0b8006012f3259dac21401cf2216177995950c1f4865f3c507995b536bec29e3d9c2f10e56342dc9ab43850a65b9cc4114896c282bac2962092c59b8aa23eb1be58b3b3bc3083ab8a202c44af9f1d5722d45598554c24af970a41c2b2367a2ecb36d4759388e35f79483e343e5c49d2dce95cf977b18b41d82902cab4c7bd44fa034fcd857fbf56996042ad1441d5cf6d51ed54c75e0477e3f884ca3eb472af8bee9f7bbd4f0d560d0814ee803459e2cb3572c9af14c0d3bfa203422c3d40d330c6934a07dddef043d5d35cd0e842668aad6853ed936c87dce244c985873c1eae6921faeed594bcf5d38e39167556544141b38a9cd9545bcf429b14804bd51d7b68c328e4ae549d98e67b9a3b1675f58f5704c21a6c1667e8be311d14400a2694e5390909ff1109b46ce6773dbb367ce688a8ceac4cf77084186bf1e9e09de665d7559566f32290bd8be48784193a202dcd51f445775b5a9ea4dad4bb6dbc6ff338d5c7774",
      "89ea34cfe9e6af1856d4eb94f47fe854f86a553bdde96aa4547b72b1b7ea91edef2d3e0d82b7abd622df17967b49ea2d1722c8210bde9f27045781777f12bb1b8b58bcb3282324ae717a03518a0439d453ccd2cafc237ba069ba462a702e5fc50cb5bb3bae3247991152c8e46345f58dadda56860af104c2200e9f633b2718fd03e8448fb931050000",
    ],
    [
      "ETag",
      "NwJCh6mfgKJ24OatXNeD7w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:31 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-56-1625184933653"
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
      "ff8d904f4fc24010c5bfcb786d13f953529b70104300258855628c216469676ba1edd4dd6d0921fdeeceae1e3c78f0b23b79f39bc97b7381635ea510c13ecf3e1b54e7ab0ccd932d62d44d61347f35551ac103342263528ab07d5ccbf07e3f7f486787b7d742b6c1693c6642271f580a882e20732c520dd1fb052a51228fed76ca6d64cc9c6bab2c562fd3d93466a1a4d40aabcd72793b594ea1f37e8dd5c77f8d6c3b0f0eb48f51a2c22a41eba25674c0c42c6c402dcaba405f53a312d4e060d7c81435b550443e2b7e30f27ba37ed00b873783c12818305850224c4e15b39b67f606868c28623a713ee833a05cc951a57b5b960397a17580b5f677af677bdb9f8593b341bd56c4ee345a63c3f0fadbe61d59eb862319d5a00789e03bcf7303911485c6ee0b372f242dc5010000",
    ],
    [
      "ETag",
      "fa8vOPf8JbHKdGjYWlfv5w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:31 GMT",
      "Server",
      "ESF",
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
      "0002ff1dd0417282301400d0bb642d0e4d544c77a2825a8d2058b11b26e2470262229001dae9ddebf408effd209e2450d771230b78a077d4734c87c9f0434d6dfb262ef9b50cee57c09b70993ab7eddcf3758113b58cd82ccc8e74e1e7b149ce276f8757e54aee612d1d239d2c18e37d5bc4d0ba534749aaac5cb0c8a6a4c7266f5339cb5dad2707e2ce7c67675a413517f59c4d28988264df9bb720fb327a28b45c4585ed3eb73a7cec126aeccfe6a1b30edd3960a7a71f856dc0e5280081a575f7eccbd1d37c3a5aa6448d4f1923f59a2eae4ea925e6d1a5fcdc364663196880a053a2823a162f2e19533a40fff6b8e915bc026ce01554e8f70f4dc1a0a41a010000",
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
      "Fri, 02 Jul 2021 00:16:31 GMT",
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
      jobId: "grouparoo-job-57-1625184933653",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b4fdb3014fd2b91f7953669fa4a2b55a32a61746ad32d4d41d33445b673130c691c62078650fffb6e1cca4048f029b6ef39f79cfbc813b9154542a68489ecae86eaf1cb8d64e48480a619be3eb81b7911de95e2faefd5c60ef877f72660d96c8608d1b014dd97397494ac2b0e6abadb76b34ad625ada4ec60a2ce70dce98ddc61cf1b4cfafdd1b08f3c0579ba12c52db2afb52ed5d4b68fdadd4cca2c075a0ad5e572fff26edfbb7659c91be05ad96f256d5451f6c7a25f73c9a916b298edb668a05650c5b0a722470bff99093b7d9bba2be8be9b21f85e70a09ccbbad08d2d4cc165918aacae4c56327d22c6e6ab03d9fa2b7f11595ce6f5be880bba87132ba19ac6fab104eb3cdcacad6570be09d7f368b909e2ede2c25fcfbb8bcd6ab70eb6d6d5851ffa96a62c07c3b566d6a9b9057841fd04941685518f9ae746f9b941cbf763690828ada00dc66367447b9e3361291bf3d4eb0f59ea00631e1b0f699f397c328041c28022cf881a162d6401030663970de3244d86f1a0e7b0d81b78bd98b1114d1ceaf67a2c218713f250090d6742955289b643e42a5c467e1c85bb60318f7c53424aeb5c9fb5c69a025e7bd45820823ea8e9d0448544a5a6ddcb20f2c3f9225a5efaed84579051feb8bdc319a7345780685a61f334546b9960c348305ffb67083613fb710c2a32fdfd449a9e372e5eb5fc851ee1001bbbda7cc9360a97c13763e788b8a4796d20f7ed819468f91a6b43d7873f88c4256db3909f3b3ffc45daa71052a8a0e09f4f13c126f0e9bf765c7cc4e2eaa38cd278c7dde1aa11e115b43b244cb947f6c475c60362c0957e17731defd8b526479311f650e8e78adac5c7425bb15abd803088e30f4cb70eff00e4cea05178040000",
    ],
    [
      "ETag",
      "w2OoHRqpihxWO/NcJ2jNbg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:32 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-57-1625184933653"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92614f82501486ffcbe92b6e9a80c6e607342a363453dcdc5a73573820065cbaf79273ceffdeb964d6aaadbec03987e75cdef785033c67650c0eacb3f4a546b1bf48513de86286b2ce95a45bc54b8960002a9612b95cee366c9caefb7eec5596e9b9fb65367207032264b4c18281738024c33c96e03c1ea06405d25ac4f3ba28574d6780da577a380f67fee496fa82c7ba9f2c82c01d061e1c8df362cc145b35fc3fd69e8e066cf97a86090a2c23d45a2ac1b718295fdb94aca8726c495e8b08253470f32015bcae98e0bc459396d56b75ec4babd337afba5ddbea1298f388a98c97c42ee6a40f14572c9ff11db9049b00d194643869aeaf34cee2c6882efd49689b8dbeaf00494bb21c577f83a477c3e8337c60a708be73ace075a9ced44d70effe761c65fa79d4b51b7a3f08a928a93312fa636f1ebae3a9e69e4ede877b85722a3805295167d8699b7dab67b7df631d711d35bdc751a2460322467fc75da6c049582ef1f806f3fc00547b020000",
    ],
    [
      "ETag",
      "XXwhaMgb8IdEp54EAyXiCA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:32 GMT",
      "Server",
      "ESF",
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
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-58-1625184933653",
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
      "547f6f9b3010fd2accfba795f203484842a4a86329ed98129212d2aa9ba6c480a16e01a7b6e91455f9ee3ba0699b756ba54801df7bf7de9def784477348fd0100534b92f08df7ebe65016a20227102a70bebea4c5c703fd91683b3effe6289ef92f8623402042d5902679b9434052b7848c470b968259c151bcc196b42a2a631686a3dddd0065db3d3e9191de00992c6139adf01fb46ca8d18b6db7bed56c2589212bca1a215b2ecf9bcfda0b7379cdd92508af6a1641b5444fb7dd19394855852968f960b305008c25724c334050b2fcc28f87298ba4571d64a00fc404382c39015b92c6d418a90e5314d0a5e6545c34754d97cf58016f6c41efbca78b674fda335ce4af2fa58c14259ad3811452a1bca1a6a8a694a56345ad791cd9d72e6cda6100107375810b156aebed99ead286b21c1dd5af934524e14cb3d550ee98eab2c5dd75ef8cad1c9b172eecd9673e5ebf501067c4744489a57ae7d1ca4a474fcd458e7ed7596042cc1451d5cf5d51ed606aa19c4413f8c071d238855120483a06fe04ea086669774a38060e0c9327bc5c239cb4dd20b0611eec77ac7d4896a447dc3d4032dd48d2eeef53131b16ec47d2346bb06facda924a7546c98a07577d195e7f8f6caf796eed8f2edaa8c1843074f6b736511af7d4a281240efd4b52ba394815279558eebdb9e35f69d4bbb9e8e094970b85ddcc37cc4381504d098e38c48c2a72c82a6a1f96ce1f8ceccb526c0a8ae7cbe470834fcf9f842f0b79baacbb2fa47be33853bb2a6f3cac31e7489d3a2423dd40f485775b5a9ea4dcdf0357da875865ab7a5aaea0fb4db35fe9fdcf23ceb1a0c61cef1f6af1814d9eb96f47fa856f8eaad36bf77a1a152edd9d3c15b0fed7eede0d740b071b516ba58dade35aa8f3c12134ef2f0e311037015f8f0c3b1df62c0c21e830c6c84a430d0a12845424eeac1a65965fe896d7654dd401598cb3731ad6bee6fb0cc51662419",
      "c9e55345f516576d2b438578064110e6d175dc7388fe016f94e22145050000",
    ],
    [
      "ETag",
      "SAWFsQrTgyu8FJTSUakgfQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:33 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-58-1625184933653"
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
      "4fc2401085ffcb786da3404bb00907305548804895831a4296edb414da4edddda284f0df9d5d3d78f0e06577f2e69bc97b73864351a710c1b6c8df5b54a7ab1ccdd21609eab6349abf866a8de0011a913319179faff3a50a83c9ae952f7b5c5c8fefe7a3e190092d77580988ce901558a61aa2b733d4a2421edb6c94dbc898393556992e9ee3873861a1a2d40a8bd56c361acf62b878bfc69ac3bf46d6170ff6b44d304385b544eba251b44769a636a0165553a2afa955123538d83572456d231491cf8a1f0efc4ebf1b7606c16dafd70f7b0c96248529a86676f5c4dec0901165421f9c0fba0c285772d4ccbd47964397e1e8006bedef5ec7f6d63f0bc72783fa5111bbd3688d05839b6f9b7764ad1b8e64548b1e48c1779e1406a24c941a2f5fa80dd690c5010000",
    ],
    [
      "ETag",
      "EixZMQr54HhucYjeN/BFMA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:33 GMT",
      "Server",
      "ESF",
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
      "ad8e1010e8ced4820a289128850d133141ca471a40c8747af73a3dc27b3f806619ebbab47f94ac016f4052d55a640bb73511cabf64b8c9b7300d3fbc846fb1038f42dda29b16374ce38e13d44cf19a03d52683dfc894eecbf48c45d755f125380d3b4b213a9b7322ae7885fbf55db1333a24f2693691d00c2392e572a790230caa6ad7e42db297a1c3088faf15524f8a3f422f72a52de9791e58b77b7f31144fffd41bc7bf066d4223b7540fd01ee77c24e67dc0f1b0f4b957c0b87a904aea35de478715d2377ca2f9b721ccf7b115f51acc009bda42b02e2d5e5ca85bd60cfcdbd35eb6ec158018154c80df3f8bdd1ef61a010000",
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
      "Fri, 02 Jul 2021 00:16:34 GMT",
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
      jobId: "grouparoo-job-59-1625184933653",
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
      "0000000002ff85536b4fdb3014fd2b91f7953e93a64da56a542540b5366569cad8a629b2dd9b6048e3103b2086fadf77e3500642824fb17dcfb9e7dc479ec8adc8b7644c9848ef2a281fbfdc48468e08689ae2eb99ec5f3957dfceae82dbf3f24214bfec87bf553a992042d42c457745062d25ab92831a6fd6edb49455414b295b98a835f05a3db73fe88d1ccfb6dd818d3c0559b210f92db2afb52ed4b8d33968b75329d30c6821549bcbddcb7be7bedf294a79035cabce5bc90eaaa8cec7a25f33c9a916329f6cd668a05250c6b0a322430bff995b76fc36755bd05d3b45f0bde040399755ae6b5b9882cb3c1169559aac64fc448ccd5707b2f617fe2cb2b8ccaa5d1ee7740747d6966a1aebc702acd370b5b4e6c1e92a5c4ea3f92a88d7b3737f396dcf568bcd32585b3fcefdd0b734651918ae35b18ecd2dc00bea6f4169911bf5a87eae959f1b347f3f969a80d20a9a603cecbab437ea7a2c61439e8cec014bbac0d8880d07d4665dee39e06c1950e41951c3a2b9ccfb7d978e5cde8d813b2c76a8e3c6acdf63310c3d48a047bbbd2125fb23f2500a0d2742155289a643e447388ffc380a37c16c1af9a6848456993e698cd505bcf6a8b140047d50d3be8e0a894a75bbe741e487d35934bff49b092f20a5fc717d87334e68a600d1b4c4e6692897728b0d23c174e99f20d84cece2105464fcfb89d43daf5dbc6af90b3dc201d676b5f9927514ce833363e780b8a4596520f7cd811468f91a6b43d7fb3f88c4256db290ef1b3ffc499aa7107b5842ce3f9f26824de0d37fedb0f888c5d54719a5f18ebbc3552dc24b68764898720f6ccfe98f06c4804bfd2e667beea16b758e3a23ec20d7cf15358b8f853662957a016110c71f986eedff012a943d7978040000",
    ],
    [
      "ETag",
      "Go2X4XKGXNkHrPipZ3wzug==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:34 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-59-1625184933653"
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
      "c1",
      "6e",
      "82",
      "401086df657b85448b5025f180d5b6246815f1601b631618100596ee2e35c6f8ee9da5d6366d93f6b2cc0cdf0cfffcec91ecb232263609b3f4a5067eb84a41ce54e083a87329f051b15200d108489a2269f9cb68166c9eb6bb61385c9606ccf661b8eff79110d1060a4aec234932c86341ece723296901d816b1bc2eca759369441e2a559c07be3bb9c7bc60b1ca270bcf7306de889cb44b634c255d37fc3fda56278d6c59e843021cca0894968ab32d44d2556b0a5a5439e882d53c02411ab879917256579433a66345377b7adbba36dbdd4ecf302cd34030671195192b915dcc511f914cd2dc677ba13c418037212e9c34e72b96b3b8594485ee24b03a8dbeaf004a4bb21cd67f83a87743f1377c60670bbe73b46075292fd49df7e8fc360e3dfd1c357482d10f424874ea8204ee78340f9cf15471abf3ee83830431e50c8d14a03c6cb73a5df3c66abddb7acb94d5f81d5bf21a341251bc1d0f992476427301a737b14a98ba7b020000",
    ],
    [
      "ETag",
      "6RYcQThZjkDbDYn3eQwbbw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:34 GMT",
      "Server",
      "ESF",
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
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-60-1625184933653",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8554fd6f9b3010fd5798f74b2be58384403ea4a86329ed98529211d2aa9aa6c480a16e01136c5a6555fef71da6699b756b2514b0efbd7befcee73ca23b9a8568847c1a6f4a526c3fdf321f3510113886dd73f3fbe6cc996b4992df3ea89df2f7264ba2783c0604ad581ca779429a9c954540f868b968c5052b735c30d684444d436d768caede19f4869a66e81af03849a229cdee807d2344ce47edf65ebb1533162704e794b702963eefb7efbbedbc60b72410bc7d28d90615de7e5ff4246101169465e3e5020c949c142b92629a80851766e87f394cdda2386dc500bea701c141c0ca4c54b62045c0b288c66521b3a2d12392365f7da08535b5269e32992d1def688dd38abc3e56305756ab82f032110d650d354534212b1aaeeb487ea79cb9b30b8880831bcc095f2b57df2cd752947d0ee5d35839514ce75439e4db8eb2741c6be1294727c7cab93b5bce95afd70718301e122e68266d7bd84f4865f9a9b3f6dbf3ac0858808d3ab8eaab06ee0cd4a11ff9fd201a68ba1fa9c4f7077e5fc79aaf06c31ee9853ec1c0135576c9c219cbba51d08d7a3a1e18781869381af435dc1f765563a0123dec847aa4f68c000fd0ae811e0a2ac829e539e3b46e2fba726dcf5a79eed299989e25cb8830b4f0b4365715f1daa7802201f44e5dbb2a4a19285567653b9ee59a13cfbeb4eaf198921807dbc5060624c2092780c6054e8920c5050ba169683e5bd89e3d73cc2930e499cff7088e463f1f5f08de36975d16f28dcea633d3337ad2c11e7289935262eeeb0fd469e980d835fe9fc6745df31aa47151e0ed5f3128c790f47f2848bc5cd5369f1551a5b65f750f5606dafddac1d34070b96a2df46369b9d7a8de7249440a92051f0f138065e0c3ff88fd85052c5c5990e102d630ba01af448282d4234c5369fe893d845f15497021dec434b5b73fab2a479591a424134f15d51756b6ad0a95fc190441983cc776ce21fa078c9ce33430050000",
    ],
    [
      "ETag",
      "GAJqFNP3llpjw01uzqnlfg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:35 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-60-1625184933653"
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
      "1085ffcb786d236d01b5090741229006b5cac910b2b4d35a683bebee162584ffeeeceac183072fbb9337df4cde9b13ecab368718b655f9dea13a5e94689e6c91a2ee6aa3f993d46a040fd08892c97d2016779f57c98a4279b9c867e9e46131791a8d98d0d91b3602e2131415d6b986f8f504ad6890c7361be53632668ed22af3e5cbf47e9ab2d0506e85e52a496ec7c914cedeaf31b9ffd7c8faecc18eb62916a8b0cdd0ba908a769899b90da845236bf435752a430d0e768d5251278522f259f1873d3f188683e0ba7f1345c341c4604d993015b5ccae9ed91b1832a24ee983f341c8807225472ddc7b60b9ef321c1c60adfddd0b6c6ffdb3707c34a81f15b13b8dd65814f6be6d4ec85a371cc9a80e3dc804df795619880b516b3c7f010943ae9fc5010000",
    ],
    [
      "ETag",
      "k1aJDx7LUo2p/JdHRCOJCQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:35 GMT",
      "Server",
      "ESF",
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
      "e9",
      "b3984d2a94bd094510279718147931502a20417a53c465ff3eb34f38e70714845029cf6ae8e80d7c81a958587332df3264dbf5f584bfc747ca21ba4fb0ac46ec4663e91fcc4cb65221dfae8c214eee5e2988c978e7ae16479fedcde3d2191f9bfd4aa88b6784fc51b3f5c6aa069445e2d597f6a7df4546a5e0a02f0693e7c92e82dae4e8b26a64fdc42f747048d790acd8f6fece4638f33a2c70a0cc945f5c746cd722f404e1b97e6b5689cb135e5b711e436d896fd769136829ecd9c72977423f08495c2218a82a39b9b8d4fb40db8119a04fd60a2acfed9bab2f2d6b06feed673531fa0eb06921a800bf7fe480e3221a010000",
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
      "Fri, 02 Jul 2021 00:16:36 GMT",
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
      jobId: "grouparoo-job-61-1625184933653",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85535d6fa24014fd2b64f671ab082a8a89d9ba966e4d147711db6c361b320c173a2d3294196a4ce37fdfcb50bb6d9ab4e10166ee39f79cfbc113b9e745422624e6d9430dd5e1cb9d88c919014533bcfd1a7ee75666bb752ed787fa865620f6fbfd748a08deb024dd953974a4a82b0672b2dd74b34ad425ad84e860a28e63752cc71e5ae381dbef3bc33ef224e4e99217f7c8be55aa9413d33c69773321b21c68c9659789ddcbbdf9689b6525ee802969be953451459a1f8b7ecb05a38a8b62badda0815a4215c18ef21c2dfc6726f1f9dbd45d4e77dd0cc18f9c01654cd4856a6c610a268a946775a5b392c913d1365f7d908db7f4e6a1c1445eef8aa8a03b383312aa68a40e251897c17a652cfccb75b09a858bb51f6de657de6ad69daf97db95bf316eaebcc033148d73d05c636a9ceb938f07d44f402a5e68f5b0b96e949f1bb4783f968680d212da6034ea39d41af7dc388d472c1df78771da83381ec7a321edc73de60e6090c44091a745358b16a218dba3d4c227b252c78e0616b0c88dad41e4c423cb19a7233be901399e917dc5155c70590ac9db0e919b60117a51186cfdf92cf4740929ad7375d11a6b0a78ed51618108faa0a66313e502959a762ffcd00b66f37071edb5135e4246d961f380334e692e01d1b4c2e629a85622c186117fb6f22e10ac27f6f3149464f2e789343d6f5cbc6af90b3dc4013676957e934d182cfc1fdace09714df35a431edb0f52a2e55bac0d5d1fff221297b4cd427e6dbde03769af0248a182827d3e4d04ebc0a7ffda69f1118bab8f3252e1197787c9468455d0ee10d7e59ed8ae638f2da2c1957a17ebbbf6a96b4d8e2623eca050cf15b58b8f85b662b57c016110c7efeb6e1dff01778d4fbb78040000",
    ],
    [
      "ETag",
      "+TBi1g29ulsOyuWareowww==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:36 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-61-1625184933653"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92515382501085ffcbf68a339a4ac68c0f58663464a9f8d438ce1516c580a57b2f15e3f8dfdb4b664d35532fb0bb7c7b39e7c00e1e933c020756c9faa944599dac514f4c314555a65af1ada05c2158805aac997ca589ff7c73b7a9cea972db93b1b7f2474f937e9f09156e3013e0ec204e308d14380f3bc84586bc16525a66f9b2ee2cd0556186b360ea8d47dc6714997e3cf77d77e00f616f1d1723a1c5b2e6ffb1b6d85bb0a5d5146394988768b41492b6186acfd854222b526c282a65880a6ab87eb096541642123578d2b05b8d967dda6df53ae7edb6dd6d33985228744239b3f319eb034d5aa4537a6197603320eb920dc7f5f599c749541b31a5370eec4eadef2bc0d2e224c5e5df20ebdd08fe0c1fd82182ef9cc8a8ccf591baf2efdcdf8ee34c3f8fba7483e10f42694eea8804deed7016b8b7f7865b1cbc0f2a8dea5e1207a9d064d86a767add33bbf91eeb0599a8f93d8e96255a100afe3bae130d4e2c5285fb37badee43a7b020000",
    ],
    [
      "ETag",
      "xoQLvJOhy9oyA3QNIbLGqQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:36 GMT",
      "Server",
      "ESF",
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
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-62-1625184933653",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ffc5547f4fdb3010fd2a96270448fd410b2db4126205b22d5a49bb24a5aa26d4b8891b0c491c6c07d4a17ef79d1d02abe8d89f9322e5cef7eedef3dd25cff89e6511eee3058b1f0a2a569feef802d73055248653a96e7b4ff92f77da591e4ccf736fdacb4fae9e4e4f01c1749624699ed0bae48508a9ec4fbc462c789113c1791d0ad5bbed7aabdbeeb44e8e7a8787ddce21e4499a2c872cbb87ec5ba572d96f362bee46cc799c509233d90879fa7ade7c6c3773c1ef68a8647393b2092cb2f931e959c243a218cf4e271e08282415739a12968084b7cc68f179b3748391b41103f891859484212f32a565418990674b1617c254c5fd676c64fe6160cf1a5a173eba184d1c7f2f20a94e0ef61191683e17541689aaa100eeb464099db3282823f93dfae28eae20020a6e89a43240d36f966b21341c4d2d772f00e83e1adadf2d748606ce25da2c623b68e23896e7a3bdb37df4d51d4dc6e87cb68101f5115d12107049143028ad3a2a4d5b8f5451a900f4d26ffbfd94f15a4719174ce99bda8e6fb9830bdfbeb6cae60e694cc295f700ed5d92445240134152aaa8b8e2118594f1c8b37d7be40c8690613a36ae1012f77f3ebf25f8ab9c6a81cabc3557f7c8f057806b921406f1581a78a7d5d9c1eb75edef4506ae3b9801311182acb6136c653078e395222bc616d66c95d7def0ba787db386a78661314b2efc6362b9335c1eb9744905cd4243f041cb0dd804fef97d55cb0e585877a0910a7ca95828354928a809fb2c35e25fb27bc7edce013660a1dec78e3bfa9f90455b232f1c85a94f85e0c2351bae5d6093460bcba027f0cfa8e1944a49625d6692c14d24258b8422b306e8b5eb280810cb901e0b0afcd9d89a9bd10435744e2288a8ee11324dee233df1caded5ceae5664749483fa4f1a6ecab66892cb9163c156fd06f373789d6d050000",
    ],
    [
      "ETag",
      "sth9wpzRW5f0WBpSW9p8Mw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:37 GMT",
      "Server",
      "ESF",
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
      "ff",
      "1d",
      "d0",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0bb642d8e55a9a6bbf21702968fc6b261008340000121123abd7b9d1ee1bd1f10a729793ca2e14e49033e008fd770992ead762f49b73c9175f55c3979f04477d80c4109799796e527aa723ab29a773e73d086ae91ae347a8477a89b2b6e3a8a5188bed0b83c436cd5e4868755a605d7fdfc25ec549b43baf304ab4fe26f3ab9aeec468c0ed50973018eeed934e3151f4d9c049361cfdbbde31db04a36b3722bad2c23c8bdd8b5daeb256b0fd32a1c8f583cd71d7c8fca705bdcf07cc19a225f997dd5b1f3a6197aa651e1444ccd4f8fa18c43b000646a8b9e3ca2e2c5dd88102ec0bf3d1a784b5e0112897bd283df3f6546a4ed1a010000",
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
      "Fri, 02 Jul 2021 00:16:37 GMT",
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
      jobId: "grouparoo-job-63-1625184933653",
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
      "000000000002ff85535d4fdb3014fd2b91f74a9bb66992a652354a09ac124d599ac2a6698a6cf72618d2b8c40e08a1fef7dd38948190e029b6ef39f79cfb91677227ca0d191326f2fb1aaaa76fb7929123029ae6f84a2f295bb09393de2d65bf9ceb3039f76cef7132418468588a6e77057494ac2b0e6abc5e75f34ad63b5a49d9c1441dcfe9f4bd81db1f0d03c7f15c07790a8aec429477c8bed17aa7c6b67dd0eee652e605d09d505d2eb7afeff6c3c0de55f216b856f67b491b5594fdb9e8f74272aa852c27eb151aa81554296ca928d0c27fe6861dbf4fdd1574dbcd11fc203850ce655deac616a6e0b2cc445e57262b193f1363f3cd81acc28b7096585c16f5b64c4bba85236b43354df5d30eacb378b9b0e6d1d9325e4c93f9324a57b31fe162da9d2d2fd68b68655dff08e3d0d2941560b8d6c43a36b7082fa8bf01a54569d493e6b9517e69d0fce3581a024a2b6883a9dff3687fd40b58c67c9e8d1c97653d606cc47c973aacc783210c370c28f28ca861d1529623cec075032f056fc0d32177fd94ba433f1d50d7c9fac170e00703b23f228f95d0702ad44e2ad176885cc7f3244c93781dcda649684ac8685de8d3d65853c05b8f1a0b44d02735ed9ba890a8d4b47b1e25613c9d25f3abb09df005e4943fadee71c6192d14209a56d83c0dd5426eb061249a2ec253049b895d1e828a8cff3c93a6e78d8b372d7fa52738c0c6ae365fb24ae279746eec1c1057b4a80de4a13d901d5abec1dad0f5fe2f227149db2ce4e73a8c7f93f629860c2a28f9d7d344b0097cf9af1d161fb1b8fa28a334de7177b86a447805ed0e0953ee811df89eef1303aef487981f0487ae35399a8cb08552bf54d42e3e16da8ad5ea1584411c7f64bab5ff07ab36341678040000",
    ],
    [
      "ETag",
      "aPabMbBB0jabX3WETG6/6w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:37 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-63-1625184933653"
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
      "df65bcb44d8042c1265c80a292941fa1dc680859da69296ebb75772b21847777b6221a35d19b7666facdf69cd31ee039cd23f0609d262f25cafd4582fac114335425d78a6e85c8158205a85942246bebf892475759c79fc8475e3a8d513cd875bb44a870831903ef00718a3c52e03d1d206719d25a287899e5abaab340ef0b339c07b3e1f88efa4c44a61f2f7cbfd7f70770b4ce8b11d36c55f1ff585b1e2dd88af50c6394988768b414526c31d4436353b1ace0682b51ca10155470f52091a22c9814c2a689ed3a76dd6db4ea9de695e3b82d87402e42a6539113bb98933ed042333e133b72092e01b22ac9705c5d5f699c469511530ec781dbacf47d05485a9c725cfd0d92de0da3cff0819d22f8ceb14c94b93e53b7fea4f7db7194e9e75137bd60f083509a923a23c170349807bdd1d470cb93f7fe5ea39a4a41412a3419d66bcd4eabedd6de63bd16266a7a8fa7658916848cfe8efb54831733aef0f8065378d6007b020000",
    ],
    [
      "ETag",
      "a7tf+ld9m8LOrZlu32MfEw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:38 GMT",
      "Server",
      "ESF",
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
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-64-1625184933653",
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
      "0000000002ff85540d6fda3010fd2b91a74a9dc4372401a4aa6334eba2b1d085d0ae9a2670cc85790d711a3bdd58c57fdfd9296dd9a78444ec7befdebbf3d9f7e486672b3224315fdf96506c5f7c1531a91150748dbb73672cf9545ebffe9e8fda837377f543851fbf9d9c20826b96a49b3c85ba1465c1400ee7b3c6ba10654e0b21ea98a8eef4ea6da763b7fbbd41b7ebd85de449489309cf6e90fd45a95c0e9bcdbd76632dc43a059a73d96062f3b8dfbceb34f3427c05a664f350b2892ab2f96fd1d35430aab8c84ee63334504a2816b0a13c450b4fcc55fcea307583d34d638de03bce803226ca4c695b9882892ce1ebb23059c9f09e189bcf3ec8cc9b78e3c81a4fe74174bca41b4d5ebeb4a8b4168b026499aa9ab5c49a129ec282af965524bfb1de84d3f71841075fa804b9b4aede7aa1675993e995171e3f0630d7c47fe759a7d62838b30e53f981350f026f1659c7a72fadf3703abfb05e5f1f60b0861548c533534144e314b4fb8726fbbf1fad265085c25570e1b61cdaeeb7067112bb2ce977ed3869411cf763d7a6ddb8c5063de8ad62a0c8533abb61d14c64006e0cb69d7418b8835eab35e8bbfd966b3306838edd6dd98e43c1a52b97ec6ae45bc1159c71990bc9ab4e93abd08fbc4514ce83f128f24c1909c56e9e55e67411cf7d2a2c1241ffa86ba7a35ca0923e363f88bc70348efc4baf9a9409ac29dbce6e7156129a4a40342de8061414efc50a9b462ea6333ff2a7c168820c73fc177b8424c34ff74f84689b9b2e2bf34f6651e807e7c6c01e7149d3d240eeaa0f7244f3fc88ec76b5bfa71985e1e81aa56951d0ed2f312cc7e969fa1f240cdeac2a9b7bc936d16afb55e760e590dde71dfe6a04ef59a5453eccbdf09a545b21245040c6fe3f4c083681ff3e17fbbbab1fa39996910ad738ba4c6a11564035c27c63cc3fb0077da7671e1b450bf55bcc753bfbb3d2397446d840a61e2aaaeeae699b0e95f21184419cbcc01cdbee276108c1633b050000",
    ],
    [
      "ETag",
      "U6CsiOsYBxpA19G7dztRXw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:38 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-64-1625184933653"
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
      "5f6bc23014c5bfcbdde35a505bfface0838a4c99c8ece6c6182231bdedaa6d6f97a48a88df7d37d9187bdc4b12cef9ddcb39b9c021af12886097679f0daaf34d8666651f31eaa6309aaf9a2a8de0011a9131399bacde5ab29f62f8420fad53a656c9edeb68386442cb0f2c05441748732c120dd1fb052a51228f6db7ca6d64cc9c6babcc97cfd3fb69cc4249891596ebc562345e4ce1eafd19ab0fff1ad95c3dd8d32ec6141556126d8a5ad11ea599db825a947581bea64649d4e06067648a9a5a28229f15bf17faed5ea7db1e847741d0eb060c162485c9a96276fdc4d9c09011454c27ee071d06947b72d5d49d479603d7e1e8001bedafd7f9f5dad6dbfc2c1c9f0dea47459c4ea30d160efadf312764a31bae6454831e48c1ff3ccb0d44a928345ebf00991240c5c5010000",
    ],
    [
      "ETag",
      "HCQY0c7fe4VoK0wgrQd+WA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:39 GMT",
      "Server",
      "ESF",
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
      "ff",
      "1d",
      "d0",
      "4b7282300000d0bb642d0e5fc5ee9a2a028222a2809b0cc41403adc1f0d1a4d3bbd7e911defb0105c6a4eb50cf1a72036f4014fa628aa79bd686b0baced27c8edd9ba12c717fc998ab2f45e8408f5d9c729d0ebee25323084d96ab235e85d04db092f133554277cb7d81ec5dac2b5ee06697a3847dd08a3615aa67fb7949bf0314b2a3bc76cd074af67358d98cc5875ac69bbb236ec4cc5c4bf27ba6d22d49c5ee1d937bd9587c405635aeab8d4ac2759f98a755a47d9987cf72bc3a1e3e9d35a946c5ae7c3c1ba1e7431269f1431eccbad6b6683e2335558d259800f26c29271da22fae612d1613f06f47bd68c92b009282130e7eff0061750f5d1a010000",
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
      "Fri, 02 Jul 2021 00:16:39 GMT",
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
      jobId: "grouparoo-job-65-1625184933653",
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
      "14fd2bc8fbd826e40d448ad62ca56bb4846c40524dd3848cb950b704536c5a5555fefb2ea6e95a556a3f61fb9e73cfb90f9ec82d2f12322531cfee6aa81ebfdc88989c125034c3d71f277dbb1c71659e24bbc14371ad8677df760fb3192278c392745fe6d091a2ae18c8e936e86695a84b5a09d1c1449dc9b8d39f0cc67d7be40c8793f1107912f274c58b5b645f2b55caa9691eb5bb9910590eb4e4b2cbc4fee5ddbc1f9865256e802969be953451459a1f8b7ecd05a38a8b62b60dd0402da18a604f798e16fe3393f8ec6dea2ea7fb6e86e07bce803226ea4235b630051345cab3bad259c9f489689baf0e247057ee223498c8eb7d1115740fa74642158dd46309c685bf591b4bef62e3afe7e172e345c1e2d25dcfbb8bcd6abbf602e3ead2f55d43d13807cd3566c699be797841fd04a4e285560f9be746f9b941cbf7636908282da10d46566f42fb76cf89d3d862a93d1cc7690fe2d88ead311dc63de68c6094c44091a745358b16a288c17646b6c3a2980dac68d46378b200a284d9169d58d664d477c8e1943c545cc13997a590bced10b9f297a11b85fed65bcc43579790d23a57e7adb1a680d71e151688a00f6a3a34512e50a969f7d20b5d7fbe08973bb79df00a32ca1e833b9c714a730988a615364f41b51609368c78f3b57b8e603db19fc7a024d33f4fa4e979e3e255cb5fe8210eb0b1abf49704a1bff4be6b3b47c48ee6b586dcb70752a2e56bac0d5d1ffe221297b4cd427e6d5dff37699f7c48a182827d3e4d04ebc0a7ffda71f1118bab8f3252e11d7787c9468455d0ee10d7e51ed98e634df49faa68a5dec56c6b70ec5a93a3c9087b28d47345ede263a1ad582d5f4018c4f17bba5b877f01815d7978040000",
    ],
    [
      "ETag",
      "K+18p4it/+dV2wnht3qBVw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:39 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-65-1625184933653"
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
      "00000002ff8d92dd4e83401085df65bc85c45a4025f1a255d49a5a5b8a89c634cd1606dc1658dc1f4dd3f4dd9d45ad464df40666866f96730e6c60c5eb0c4258f0e2c9a05cef15a827b6885199522bba35a256080ea0660591cdca4cee575ec48df1b9a7e283c9f8eaeee5e48408953e62c520dc40ceb1cc14840f1ba85985b4968ad254f5bced1cd0ebc60ea7493c185d505f89ccf6a3dbe1b0d71f46b075768b19d36cdef2ff589b6d1d588a458c394aac53b45a1a299698ea81b5a958d594e82a61648a0a5ab87d5048611a26857069e206bedb090efcce9177dced067e97c052a44c7351137b3b257da08566652c5ec8250404c8b624c3797b7da631cf5a23b61c8c92c06bf57d05485ace4b9cff0d92de47469fe1037b8fe03bc72a616abda3ce8737bddf8ea34c3f8f3aeb25d10f42694a6a872483eb689af4aec7969bbd7befaf35aab11414a4429b6167df3bf20f83fdb7584f858d9ade136a69d08194d1df71c93584392b156e5f010848adaa7b020000",
    ],
    [
      "ETag",
      "pkuQYk4Eiuu5i4sR2QPJXw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:40 GMT",
      "Server",
      "ESF",
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
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-66-1625184933653",
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
      "ff8554816eda3010fd95c8d3a44ea290024900a9ea18cdb66834b421b4aaa6091c7361a621ce6ca75d57f1efbb38a31bebd64a9112fbdebbf7ee7cce03b9e1f9920c48c257df4a90f7afd622210d029aae70b7732ed7dce94c2ef88f75b01ef97793efed4f17c7c788e0154bd14d91c1a112a564a006b369732545595029c421263a74ddc323b7ed1cf5bafd4ec7753ac85390a5639edf20fbabd6851ab45a3bede64a885506b4e0aac9c4e671bf75db6e1552ac8169d5da976ca18a6a3d2f7a9209463517f9f16c8a064a05720e1bca33b4f09bb94cdeeea76e72ba69ae107ccb1950c64499ebca16a660224ff9aa94262b193c1063f38f0f32f5c7fe28b6469359181f2ce8a6222fde585459f3b9045566ba612db0a6946730e7cb451d296eacf7d1e40c23e8e02b55a016d6d5473ff22d6b3cb9f2a383c700e61a079f7cebc41a86a7d67eaa20b46661e84f63ebe0e48df5219acccead77d77b18ac61094af3dc5410d32483cafdaf26074f8fb622508dc27570eed92e3dead9fd244d3c96f63a4e92da9024bdc4736827b159bf0bdd65021479baca6e58341739809780e3a46d065ebf6bdbfd9ed7b33d8731e8b79d8eedb82e058f2e3db26d903bc9359c725508c5eb4e93ab2888fd791ccdc2d130f64d1929c56e9ed6e6aa22fef4a9b148043d53d7b68a72814ad5b10561ec47c3511c5cfaf5a48c6145d9fdf41bce4a4a330588a6926e40833c134b6c1a399f4c83389884c33132ccf19fef108a0c3e3ffc26c4f785e9b2366f328da320fc600cec1097342b0de4b6fe20af6951bc26db6de3ff69865134bc46692a25bdff2b86e5b8dd8afe0f098337abdae64ef288546abb557b6fe592ed972d3e0d82f7acd62217333fba26f556042948c8d9cbc384601378f177b1bbbb88c5db8b324ae31a4797a94a8449a847986f8c79c3766c1b07a94f0c58ea2731b7efeeceaaca5165840de4fa5745f5dd356dab42a57a046110272f34c7b6fd0941d821cc3b050000",
    ],
    [
      "ETag",
      "3Prji53OQizjIjCEwOx2KQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:40 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-66-1625184933653"
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
      "8d90414fc2401085ffcb786d23b4d22809074b88d03404abc44443c852865a683b75775bc586ffeeec620c472fbbb36fbe99bcb71d1cf26a0b43d8e4d94783f27895a17e344582aa29b4e2aba64a2138805a644caae82bbcee85f1fc355fb4e397cd328aa6dfd968c4844adfb11430ec609763b155307ceba01225f2d87a2ded46c6f4b136ca6cfe3c7998242c94b435c27c19c7f7613c81937331561ffe35b23a39b0a74d823b9458a5685cd492f698ea9909a8445917e82a6a648a0a2c6c1b99a4a61692c865c50d02b71f7883feedcd9def07039fc18252a173aa985d3eb137d0a44591d027e7038f01694b8ebab367cbb26f33b41630d62e7bde5faf6f7aabdf85e151a35a4862770a8db1ded9e4988c71cd81b46cd08154f02f4f737d7e9f7e00d8ec5a9cc2010000",
    ],
    [
      "ETag",
      "sJxB/0BLNZiPvCWbUJJHzg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:41 GMT",
      "Server",
      "ESF",
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
      "c9591d965a486f0443d92c8c228b1786868c446491508238fdf73afd84f79ea02084729e8f5d4d5bf0011e85023764e3f53a421756fab3dffa5e8b9bf95622b1279f7452e2c55934bdc4b65c25235eeeb2816db321daba926676126c674928886d44de7bad4b13898820c82144c7d037bcfd7cf89ae4e6db4c33c5ceb724cacce15e926e69e2ccb114e1ba4e226e7981cf3d64d06971c8efa72ecc4ac48feaa078970a27e72090ae75ea4e611ce9dae4ac0d7aad6d1fcaddc8aab03f44f60fe7ed9b518e19dbc1ac11ddda15ea694e060bac009d7b36509eb31757dd42b802fff67c7cf4f415806831d001fcfe017138dda71a010000",
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
      "Fri, 02 Jul 2021 00:16:41 GMT",
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
      jobId: "grouparoo-job-67-1625184933653",
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
      "2b64f6d5166a4b0b4d9ab5a9b83669e90a54b3bbd990617ac151609019348de97fdfcb605d8d893e3133f79c7bcefde099dcf37247a624e1d94303f5fedb9d48c8090145337c7d70b2cd85f9bbb82d16f678af2a71f3645d65b3192278cb92b4a872e849d1d40ce4741bf6b35a3415ad85e861a2de78d21b8c4fed81337287c3b13d449e843c5df1f21ed9b74a55726a9a47ed7e26449603adb8ec3351bcbe9b8fa766558b3b604a9aef254d5491e6e7a2df73c1a8e2a29c6d4334d048a8632828cfd1c27fe62e397b9fbacf69d1cf10fcc81950c64453aad616a660a24c79d6d43a2b993e136df3cd8184deca5b44061379539471490b38317654d158ed2b302e82cdda58fa179b603d8f961b3f0e1797de7ade5f6c56dbb51f1a37975ee0198a263968ae3133cef4cdc70beaef402a5e6af5a87d6e955f1ab4fc38969680d212ba603cb1c674e0586e922613963a433b492d48122799d8749858cc1dc1689700459e16d52c5a62cdc9a9e530378953c7a2f1082693d81dbb56cc604431e76ee80c5c7238214f355770ce652524ef3a446e8265e4c551b0f517f3c8d325a4b4c9d57967ac2de0ad47850522e8939a0e6d940b546adbbdf4232f982fa2e5b5d74d78051965fbf001679cd25c02a2698dcd5350afc50e1b46fcf9da3b47b09ed8cf635092e99f67d2f6bc75f1a6e5aff40807d8da55fa4bc22858fa3fb49d23e29ae68d863c760752a1e55bac0d5d1ffe221297b4cb42aeb65ef08b744f01a45043c9be9e268275e0cb7fedb8f888c5d54719a9f08ebbc3642bc26ae87688eb723bb66d5983d1d8211a5cab0f31dbb58f5d6b73b419a18052bd54",
      "d42d3e16da8935f21584411cbfafbb75f807a0ec5f2578040000",
    ],
    [
      "ETag",
      "q8gOF/ZmhmC56ytpoWw0Qg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:41 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-67-1625184933653"
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
      "401085ffcb782d091558a0090750501240847232842ced140aed6ed9dd4a80f0df9dad88464df4d2ce4cbfd9bef7da136c63118207cb78b5cb511d6e56689e6d31419d2746d32d934223388086af8874774c60cf30263a38adeeb7c763dc74f7ad16113a5863cac13b411463126af05e4e20788ab416c8244fc5a2e81c3087cc0ea7fea43f7aa03e95a1ed47b3c1a0dd1974e1ec5c17436ef8a2e0ffb1363f3bb091cb0946a8500468b5644a6e30307d6b53f3344bb0a465ae02d450c0c583959279c69594259a9458bde4b2db9adba8362b1556ab1098c8809b580a626753d207461a9e4ce49e5c0223401525198e8aeb2b8de3b03062cbfec867d542df5780a44571828bbf41d2bbe6f4193eb04b04df399eca5c982bd51b3cb57f3b8e32fd3ceabeed777f10da505257c4ef0fbb53bf3d1c5b6e7ef1de3918d4632529488d3643b75c6dd4eaacfc1eeb9db451d37b3ca3727420e0f4773cc606bc88271acf6f7a63c2397b020000",
    ],
    [
      "ETag",
      "1q6neFt66nBeS4wkzzi91w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:42 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`stamp`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-68-1625184933653",
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
      "d553616fda3010fd2b96f7a59580145a2863aa3ada665b344868125aa1aa029398e0368953dbe9842afefbce0e94b16edde74948c4bef7eebd3bdfbde04796c7b887e72c792aa9587d78e0735cc35491046eaf47ab536b69cdbda4db94fdb66bdf5acdc98fb3334030cd92242b525a97bc141195bd71d048042f0b2238af43a27aa75b6f765aed66f7e4e3f171a77d0c3c49d3c580e58fc05e2a55c89e656db51b09e7494a49c16423e2d9ebbdf5dcb20ac11f68a4a4b52f69818ab4de173d4f794414e3f9d9380003a5a4624a33c252b0b063c6f3cffba91b8c648d04c0cf2ca2248a78992b6d0b52443c5fb0a414262beebd6063f3970f1cd803fb324497ded80d0f6624d3e4d92122124da782ca32553534839a162ca55316cfaa48f188bef8de1022e0604924953374fbcdf66d8406deaded1fcca4028f9068e07cb7d139eabb57683f8fe3a2b1ebda41880ece0fd157df1b8fd0c5640f0305c47441c0c3155120a2b4f1b8fa74f4ab2a2a1580362d77de3e345eeb28e382295dace386b6dfbf0c9d1bbbeaef8026245a054fd0e105492505341124a38a8a218f2950465ee0848ee7f607c0304d1b6d1112f7ee5e76847055506d50997f1c3a4328ae3f1ce1f5baf67758dff7fb13484d8420abdf6260b773a2e93bf60d494b03317873aa6c3c5701dcc45a6d7b6aed9d3a787dbf865f0dc3f4555af87a6cfb135c5df9744105cd2323f04e530dd804feb944db89062ccc34c8c05c2826158ba416890435e19065c6bc61b78f8e5a275db3828a08f526d63e6de9c5cfe33f46361aa5c94f85e0c23763ac8fa0268d1796434f587c6d9660cfe5d3e62aa3529244a77739ca888a962c4f9064490eb905450b2ed0a2cc234dab66de5c11919419cd15d24f287be8750a1a28288b820b45e35d160054eb1284bee37e3dfcb4395e4c423b802554e8aed9ebb6ee7551a694eaadffdf32eeabc7d17eae3cd786d9fe092fa2d7a5d8050000",
    ],
    [
      "ETag",
      "QPy7/h/bOg81sA5NEW/1Yw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:42 GMT",
      "Server",
      "ESF",
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
      "ff",
      "1dd04b7282300000d0bb64ed38410848778002827c0c14d04d064950aa0803b1013bbd7b9d1ee1bd1f5056151b47c2bb1b7b800f30972b7d592dfd7e6d9a97a6ac264b32ba1ab9528c906814d10a5dd0671135775bb373b869b0d1a6d151f561cd35a78fcfb69fc1b61c327157bba8365c9ca637e6fbc641d9d7684a8bc083aa454f89e15dbdc2c3f324db825e5ebaa75e11f6614cb8a876b95554376c7118206a85e75d9646cf33a9654e5717e286f9e18bac5ac74c8a30d4624c134dde14f4198c393f7d1bb3931c1fd156b88f0167d671de4b5705669fdb75a4ddc102b0a96f063692e6cd9591ae2fc0bf9df0b967ef009395031bc0ef1f119957c81a010000",
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
      "Fri, 02 Jul 2021 00:16:42 GMT",
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
      jobId: "grouparoo-job-69-1625184933653",
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
      "c8fbda2440de91a2354a691b2d211b9074eb3421632ed41d608a4db7aaca7fdfc5345dab4aed276cdf73ee39f7c123f9cd8b98cc48c4d3bb1aaa874fb722222704144df1f54bb5bcc86fce9d24b8defffd7ebdb7f3dbc5209dcf11c11b96a4799941478aba6220673bbf9b56a22e69254407137546d38e35b287d66430edf747c33ef22464c99a17bf917da3542967bdde51bb9b0a9166404b2ebb4ce4cfefbd7bbb5756e2169892bdd7923d5491bdf7453f678251c54531dff968a096508590539ea185ffcc383a7d9dbacb69de4d117ccf1950c6445da8c616a660a248785a573a2b993d126df3c581f8ceda59060613599d17614173383162aa68a81e4a30cebdedc658b9e75b6fb308565b37f49797ce66d15d6ed7bb8deb1b57978ee7188a461968ae31374ef5cdc50beac720152fb47ad03c37ca4f0d5abd1d4b434069096d301c9b236a4dcc69944463964cfac32831218a26d17848fb91c9a60318c41150e46951cda285282c935a605b2cb407911d0ec643338ca81987361bc503302d30fb16399c903f155770c66529246f3b44aebc55e08481b773978bc0d12524b4ced4596bac29e0a547850522e89d9a0e4d940b546adabd7203c75b2c83d5de6927bc8694b207ff0e679cd04c02a26985cd53506d448c0d23ee62e39c21584feceb3128c9ece723697adeb878d1f2677a80036cec2afd257ee0addc0b6de788d8d3acd690fbf6404ab47c83b5a1ebc32f44e292b659c8b79de3fd20ed9307095450b08fa789601df8f05f3b2e3e6271f551462abce3ee30d988b00ada1de2badc963d34cdbe698f880657ea4dcc",
      "1a4d8e5d6b7234192187423d55d42e3e16da8ad5f21984411cbfabbb75f8076bfea41a78040000",
    ],
    [
      "ETag",
      "KrCGmhFEfTZVxXZV2mjA4g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:43 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-69-1625184933653"
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
      "45ff657c2d09085468c20328285a104a31268690a59d42b1ddadbb5b1b42f877672ba251137d6967a667b6f7de760fcf310fc18155bc7ec951eeced6a8a7a6f050e5895674cb04570816a0666b22f95c3d0ca2222ba6d3f9e3ed8adfd901d345a743840a36983270f610c598840a9ca73d709622ad0522c953be2c3b0bf42e33c399ef0dc7d7d4a72234fd78eebadd9edb8783755a0c9966cb92ffc7dae260c156ac3c8c50220fd068c9a4d862a087c6a66269966045895c06a8a084cb076b29f28c49212a34a9d8ed4acd3e6fd65a8d76bd6e37eb0426826cc682133b9f913ed042b3c41305b9049b00599664382aafaf348ec3d288298763df6e94fabe02242d8a135cfe0d92de0da3cff0811d23f8ceb154e45c9fa8817bdffded38caf4f3a8abaedfff41284d499d107f38eacffcee6862b8c5d17b6fa7514da4a020159a0c6bd546ab796157df63bd14266a7a8fa3658e16048cfe8e9b588313b144e1e10d395534727b020000",
    ],
    [
      "ETag",
      "nUsVFfwpwQQUXJbnK6catw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:43 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`stamp`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-70-1625184933653",
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
      "ef",
      "4f",
      "db",
      "3010fd572cef0b48fd5de84a27c4026410ad4d4b92823a845a93b8a9218983ed54aa50fff79d9d96ae63639f27556aec7befdebbf3dd2b7e6659847bf891c52f0515ab4f4ffc1157305524865bf72e685db3e50f6fb438b1aca5b4dca108e2d3534030cd9224cd135a95bc102195bdb15f8b052f722238af42a2eae746b5d9691d37bb4727ed76e7b80d3c4993799f65cfc05e2895cb5ebdbed5aec59cc709253993b590a76ff7f565ab9e0bfe444325ebfb92755091f58f45cf121e12c578763af6c14021a998d294b0042cec98d1e3d7fdd43546d25a0ce0250b2909435e644adb821421cfe62c2e84c98a7bafd8d8fce503fb76dfbe08d0c570ec060733926af2ec101189a653416591a80a9a414d7396d0298b6665247f46dfbce10022e0604124953374776d7b3642fde19ded1dcca4028f90a8ef7cb7d119b2dc4bb49fc771d1d8756d3f40076787e8ca1b8e47e87cb2878102223a27e0e192281051da78547e3afa5515950a409b963bef1f1aaf759471c1942ed67103dbb32e02e7d62efbdba7310957fe0b74784e1249014d0449a9a262c0230a94d1d0770267e85a7d6098a68db608897bf7af3b42b0caa936a8cc3f0e9c0114670d4678bdaefc1d66799e3581d44408b2fa2d06763b479abe63df92a430108337a7d2c6b20ce026d66adb536befd4c1eb8735fc2a18a6afd4c23763db9be0f2caa3732a68161a810f9a6ac026f0cf25da4e346061a64106e64231a95828b54828a809072c35e60dfbb8d16877bb0d6cc042bd8b9d74ba7af1b3e88f918d4661f25321b8f0cc18eb23a849e38565d01316dd9825d873f9b2b94aa99424d6e95d8e52a2c205cb6224599c416e41d19c0b342fb250d3ca99375744c4454a3385f413ca1e7a9b821af28b3ce742d16897",
      "0500e5baf881e7b857875f36c7f34960fbb0840add377bddd6832eca9452bef5ff5bc643f938dacfe5d0b561b67f02f662c032d8050000",
    ],
    [
      "ETag",
      "NWT2HivZRPh9AAvsANOrTg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:44 GMT",
      "Server",
      "ESF",
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
      "ff",
      "1d",
      "d0",
      "db",
      "7243400000d07fd9e7c844d6baf42d2e615c8252d69311562c89caba0ce9f4df9be9279cf3038ab224e3984fdf1de9c107d88aa3b22ff7ce20abea8d66966064c2e2f5addb6d8269e4ab53c941604f95f1c5d58be9b290e1120b5436ab4ec26670e30e9e90dc5513a552c3a9e919e2284c4a239c4fad7e8211f6fab989cc766c1a5ca603dae6dbe5d1c4f034c475cd57fa62134d79f254bffaf4d34716e4eec72bd69e092fe14324a0979855fc794476ff881ce905752b1739c32fea54444c855e6405491c9f5d8dd24eebe8ba28173f349ca5be4c761d280cec005907cac898d337172245d9817f7b3e6d037907a8a4608481df3fa89660ce1a010000",
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
      "Fri, 02 Jul 2021 00:16:44 GMT",
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
      jobId: "grouparoo-job-71-1625184933653",
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
      "fd",
      "2b",
      "64",
      "f6ab6da194479b342ba9b83669a902d598cd860cc380a3944166d0744dfffb5e06eb6a4cf4133373cfb9e7dc072fe88155199aa194158f2d6df63fee798a4e1095b88057cfd85fb34d7ca1df16b6737f6579ad31fefb3c9f0382752c817775490782b70da162b68d8645c3db1a379c0f20d1c03106863db60c7732354ddb3281276899af58f500ec3b296b311b8d8edac382f3a2a4b8666248f8eeed7df4341ed50dbfa7448ad147c911a888d1d7a23f4b4eb064bc9a6f2330d00ada247487590916fe33b3f4f463ea21c3bb6101e02746282684b795ec6c410ac2ab9c156da3b2a2d90b5236df1d50e4affc45ac115eb6bb2aa9f08e9e6819963891fb9a6ae7e166ad2d83f34db8f6e2e52648a2c585bff6868bcd6abb0e22ede6c20f7d4de2b4a48aabcdb553750be002fa191592554a3dee9e3be5d7062d3f8fa52380b4a07d3071741b1bae3e4df3d421b96b5a69aed3347553c7c266aa93e9844eb29462e02951c5c215af74c732b09d8f13d74c7132193b3871276e9a8cf36ce2e88e31b5898d0e27e8b961929e315173c1fa0ea19b7019fb491c6e838517fbaa841cb7a53ceb8d7505bcf728a140007d51d3a18b320e4a5dbb9741ec87de225e5efbfd8457b4c0641f3dc28c735c0a0a68dc40f3246dd63c8386a1c05bfb67005613bb3c06059afd7e415dcf3b17ef5afe468f61809d5da9be288ac365f04bd93922ae71d92ac8537f403558be83dac0f5e10f206149fb2ce86aeb87b7a87f0a694e1b5a91efa7096015f8f65f3b2e3e6061f5414648b8c3ee10d1899086f63bc454b93ddbd2f5",
      "89695948811bf9296659f6b16b5d8e2e23ddd14abe56d42f3e14da8bb5e20d0441187fa0ba75f8078ea836d478040000",
    ],
    [
      "ETag",
      "A1yViOTH0Yg67jQ5Au12zw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:44 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-71-1625184933653"
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
      "83",
      "40",
      "10",
      "45",
      "ff657c94c6625b54923eb45ab58ab5528c31c6345b1810050677179534fd776751ab51137d8199e1cc72ef85253ca445042e2cd2e4b142596f24a82f4ce1a3aa32adf85652a1102c402d12269f7a275b545fd779fbe5203a3ff5ecabcdc24ffa7d26547887b9007709718a59a4c0bd59422172e4b590b22a2fe64d6781ae4b339c05fe7872c47d4e91e927979e37187a235859ebc54868316ff87facddae2cb8a7858f314a2c42345a4a49f718eab1b1a9445e66d85254c910153470f3209154954212b578d2dab15bb6b3ddb377bb7b9d8ed3eb30985128744a05b39733d6079ab4c87c7a6697e030209b920dc7cdf589c769d41831e5781238dd46df5780a5c56986f3bf41d67b27f8337c60ef117ce7444e55a1d7d4a1773ef8ed38cef4f3a8834130fa4128cd49ad91607c369a0583b3a9e16edfbd0f6b8d6a2a8983546832b4dbddddde8ed37e8b759f4cd4fc1e57cb0a2d0805ff1dc7a906371699c2d52b121d98917b020000",
    ],
    [
      "ETag",
      "v5J/oyYym0xDdOKL1W+nRg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:45 GMT",
      "Server",
      "ESF",
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
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-72-1625184933653",
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
      "547f4fe24010fd2a9bbd1835c70f414024311e6af59aab2d570a865c0c5ddaa5aeb65ddcdd9210c377bfd9ada89c9ef7e72524ececbc37efedccc0137e60798c7b78c692c7828ad5977b3ec3154c1549e0964c44b7f9b5e550d9188fbbadc1d1f07899f44f4e00c1344b926c91d2aae48588a8ec8d86b544f0624104e75528543d6a561b9d66bbd16d1d1f1e76da87c093349d3b2c7f00f69d520bd9abd737dab584f324a564c1642de2d9cb7d7dd9ac2f04bfa79192f56dc93aa8c8fae7a2a7298f88623c3f190dc14021a998d28cb0142cbc32e3d9b7edd23546b25a02e0258b2889225ee44adb821211cfe72c2984a98a7b4fd8d87c73c043cbb1ce0374ee8ddc602f24992687fb8848349d0a2a8b545550086f9ab3944e591c9699c503baf4bd6bc880833b22a90cd1cd77cbb71072bc1bcb7f53c9b17f58e814f5dd0bb45dc876d1c875ad6180f64ef7d195ef8d06e86cb2858117c4744ec0c40551a0a2b4f3b83cda7aac8a4a05a0e79edbef278dd73acbb8604abfd67603cbef9f07f6d82a1becd08444abe123b4784e5249014d04c9a8a2e29ac71428036f6807b6e7f61d6098ae0d3608897bbf9e5e09c16a41b54165bef1a5e3f5834ecb38d840c6242d0c66591ef04ea3d66eede0f5baf2f7427ddfef4f409c0841567fe4e0415ae2430d8337516974a3d9c05a6d1335b7a20e5edfaee153c1b0a0a516fe39b2fc092eaf7c3aa782e69111f8a4ed066c12fffc9d6d961eb0b0f6202315c452b1486a914850930e5866cc1b76fbe0a07dd4ec620316ea7dce54a679fc61e659a330f5a9105cf866d375086ad2786139f404fe3b2a38a35292449719e5f01249c92ca5c8ac027ae93a0a43c472a4c782c26032b0a6cff30f2be88cc428e68566993ef75039f64db45b86bbda98b153ceebff5ab92d9ba4b52e3cd7821dfb0d7da9d29f83050000",
    ],
    [
      "ETag",
      "aYr82+4Les1VV84P7S9vgA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:45 GMT",
      "Server",
      "ESF",
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
      "ff",
      "1d",
      "d0",
      "4b",
      "72",
      "82",
      "300000d0bb646d1c208a4d77040d154641bee22683346309559060003bbd7b9d1ee1bd1f5094259792f54dcd6fe01d4c8581e7e5dc6bdf08b9884cd48e4c5d11d1a0731afef46339f5f7d518e30479470d3af6a98ea81bdd234b5bac3e7c4da822ffc6250ae17930635f1f73b4a1d7c0fa5ae77a6d86824f3011a34554755a36fd829a7240a730136ada185b63b4d6016faf6b4a528f1a92414fcf739191db2ea0dd7ef768d4c1b633b74eec4f882b4387fbed5935c360d1146fbade364de6ab47c518b190911ee5e1702e61ae2ed113d7473dbb0f4b30037c6cab8e4b56bdb86889f10cfcdb593fb5fc154078d1f10efcfe012ad76c751a010000",
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
      "Fri, 02 Jul 2021 00:16:45 GMT",
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
      jobId: "grouparoo-job-73-1625184933653",
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
      "000000000002ff85536b6f9b3014fd2bc8fbda0412f22252b446295d33256423a4d5344dc8980b750b9862932eaaf2df77314dd7aa52fb09dbf79c7bce7df044ee791193298978fa504375f8722722724640d1145ff3fbbe75b57e8c878b43c96fccbfdf5950bbe96c8608deb024cdcb0c3a52d4150339dd6dbb6925ea925642743051676c777aa3feb0371938b63d1adac89390252b5edc23fb56a9524e4df3a4dd4d854833a025975d26f2977773df37cb4adc0153d27c2b69a28a343f16fd9a09461517c56cb74503b5842a849cf20c2dfc67c6d1f9dbd45d4ef36e8ae03d6740191375a11a5b98828922e1695de9ac64fa44b4cd5707b27557ee223098c8eabc080b9ac399115345437528c1b8f4376b63e95d6efcf53c586ebc70bbb872d7f3ee62b3daadbdad7173e5faaea1689481e61a33e35cdf3cbca07e0c52f142ab07cd73a3fcdca0e5fbb134049496d006c3b135a2bd89e544493466c9c41e468905513489c6436a47167306308823a0c8d3a29a450b518c267dcb01c6c2d871ec10515648935e128e92388e2c67e08c6d20c733f2587105175c9642f2b643e4c65f066e18f83b6f310f5c5d4242eb4c5db4c69a025e7b545820823ea8e9d844b940a5a6dd4b2f70fdf922585ebbed8457905276d83ee08c139a494034adb0790aaab588b161c49bafdd0b04eb89fd38052599fe7e224dcf1b17af5afe420f70808d5da5bf641bf84bef9bb673425cd3acd6907d7b20255abec5dad0f5f10f227149db2ce4e7cef57f91f6c987042a28d8e7d344b00e7cfaaf9d161fb1b8fa282315de7177986c445805ed0e715d6ecb1e5ad6a8d71b130daed4bb587fd43b75adc9d164841c0af55c51bbf858682b56cb17100671fc9eeed6f11f4992548378040000",
    ],
    [
      "ETag",
      "mk20HMwd5CypiW/xJcTuEg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:46 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-73-1625184933653"
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
      "6f",
      "82401085ffcbf40a8916454be241ab6d49102de2a9316685015160e9eed2c618ff7b67a9b54ddba4bdc0ccf0cdf2de8323ecb33206073659fa5ca3385ca5a81e7511a0ac7325e956f1522218808aa544ce5ccb9e6e7699556d46de56fafb602c9274302042465b2c1838474832cc6309ced3114a5620ad453caf8b72dd7406a843a5878b3070fd7bea0b1eebde5f7ade70e44de0645c1663a6d8bae1ffb1b63a19b0e39b0013145846a8b55482ef3052aeb6295951e5684a5e8b08253470f32015bcae98e0dca489d9b3ccb67ddd6df73b379665772d02731e3195f192d8e582f481e28ae5017f25976013209a920c27cdf585c659dc18d1a5eb8776a7d1f71520694996e3fa6f90f46e197d860fec1cc1778e15bc2ed585baf366c3df8ea34c3f8f1a0fc3c90f422a4aea8284ee74b20887d3b9e65667efa3834239179c8294a8336cb73afd6ecf6ebdc77acb75d4f41e47891a0d8818fd1d0f99022761b9c4d31bc549921e7b020000",
    ],
    [
      "ETag",
      "OI36Mbji3pbBLhsNkRDrfg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:47 GMT",
      "Server",
      "ESF",
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
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-74-1625184933653",
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
      "ffc5546b4fdb3014fd2b962704487dd0f7a88458818c4594a44b53589950e3266e304de2603b4c15ea7fdfb54361158c7d9c1429bebee7de73ee2379c24b9645b88fe72c7e28a8587dbae7735cc15491186e6f16ad8b87f9ea82f63c72d3681efe708af9f9afa32340301d25499a27b42a7921422afb93712d16bcc889e0bc0a89aabd76b5d16d761a9fdb87ad56b7d382384993c590654b88be532a97fd7a7dc35d8b398f134a72266b214f5feeeb8fcd7a2ef83d0d95ac6f53d68145d63f263d4e784814e3d9d1640c020a49c58ca6842520e135329a7fd94e5d6324adc5007e64212561c88b4c69599022e4d982c585305971ff091b997f1cf0d81a5aa73e3a75278ebf1790540707fb8848349b092a8b44555000352d5842672c0a4a4fbe445f3df7123ca0e08e482a0374fdcdf22c8486eeb5e5ed0500dd478eeba3a17d61a1633470ced07622db4113c7b1c63eda3bde47e79e3b19a193e916062a88e882808833a2804569e55179b4f55815950a40cf3db7df4e1aafb59771c194aed6767ccb1b9cfaf695553678486312aec60fd0e205492405341124a58a8a4b1e510819b963dbb75d67308408d3b5d1062171ffe7d36b80bfcaa916a8cc5b7375db867f03b8224961108fe501ef343a3b78bdaefc3dc9c0f3065320264290d5fb04ef3218bcb14a911bc606d66c1babb96575f1fa760d4f05c372965cf8fbc4f2a6b8bcf2e8820a9a8586e083961bb071fcf31bdb2c3c6061e581462ab0a562a1d424a1a0c6edb3d48837d19d83835ea37d880d58a8b7be5e43ff17b2e85dcf334761f25321b8f0cc966b13d8a4d1c232e809fc372a38a5529258a799645089a4649e5064d600bd741d05016219d26341813f1d5933339aa0824e48041ed56d23d3e43ed213df9c77b5b1ab15191de5a0fe9386dbb22d9ae4cc752cd8aadf0b02ec7b71050000",
    ],
    [
      "ETag",
      "Zf3KqbyKe7RaZ129XNubGw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:47 GMT",
      "Server",
      "ESF",
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
      "0002ff1dd04b7282300000d0bb646d1d2d5aa53b7e4521b5110c41360cc694f2915f22019cdebd4e8ff0de03249432ce635117ac02ef604c5ed5399dbbcd56d7d34c3a0217719e4801edcd3abf9060894db7710f1c6ba4ede37b847e70605d29fa923ed985d57ea952a29adb85a70f2b293dc915cf31aaf2b4cf0c3cec11bfd9f88c3df2217a51c51d6c6881df7a157bbe380a2843b4239398364aeb48193a515a06f60b3add37a6185de4e70b3a317a2994914d16ec91be0a2fb0fde6354b9016d822bd9a963f0e354f890cd2c367d861bf8d76d50a9667433bdf8e10cc001b9aac633cce9e5c65adaa33f06f8fc5d8b06780ce928e75e0f70ff8097de41a010000",
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
      "Fri, 02 Jul 2021 00:16:47 GMT",
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
      jobId: "grouparoo-job-75-1625184933653",
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
      "000002ff85536b4fa34014fd2b64f6ab6da9405f49b33615579296ae94ea9acd86cc0c038e0283cca06b4cfffbde19acab31d12fc0cc3de79e731f3ca33b5ea5688608cfef5bd63c7dbb15041d21a6700eb7f77f2b77713d4a6f1e0b3cbebbf8d54cbd965ecce780e09a25715917ac2745db502667bb6d3f6f445be346881e24ea8dbdde7074ec0d27eed471469e033cc98a6cc5ab3b60df2855cbd96070d0eee742e405c335977d2acad7fbc1c3f1a06ec42da34a0ede4b0e40450e3e17fd5e088a1517d57cb70503ad644dc24acc0bb0f09f999293f7a9fb1c97fd1cc00f9c324ca9682ba56d410a2aaa8ce76d63b2a2d9333236df7ca0adbff297b14545d1965552e1921d59295638514f35b3cea2cdda0ac2b34db45ec4c1264cb6cb737fbde82f37abdd3adc5a57e77ee45b0a938219ae35b74ecc298403e8a74c2a5e19f5585f6be59706051fc7a209202d59174cc6f6080f27f69464644cb389e391cc66844cc8d8c30eb1e9d4656e4a18069e11352c5c898a1c0f6d7b92a6898b330f1e749a90347512d71b3b23e24c9d8c78687f841e1baed82997b590bceb10ba8a82d84fe268172e17b16f4ac8705ba8d3ce982ee0ad47050502e8939af63aca0528e9760761ec478b651c5cfadd84572cc7f4697b0f33ce702119a07103cd53ac598b141a86c2c5da3f05b099d8cf4350a2d9ef67a47bae5dbc69f92b3d86016abbcabcd1368e82f087b173405ce2a2359087ee03d560f9066a03d7fb3f808425edb2a08b9d1f5da3ee2a62196b5845bf9e26804de0cb7fedb0f88085d50719a9e00cbb43a516a10deb76889b723bb667db6377e421036ed4879837720f5dd339744656b24abd54d42d3e14da89b5f2150441187f68bab5ff07e9b6775a78040000",
    ],
    [
      "ETag",
      "qxn4AY6dhwla7kQXr95ucQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:47 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-75-1625184933653"
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
      "bc2d491128d8848b22a83580fc941b0d214b3b2d856db7ee6e3584f0eece5644a3267ad3ce4cbfd99e73da03ecd23c0217d669f25ca2dc5f24a8a7a698a12ab956742b44ae102c40cd1222793b597be36cbd794c32d6dfd9aff718dad36e9708156e3063e01e204e91470adca703e42c435a0b052fb37c557516e87d6186f360e68f6fa9cf4464faf16238f47ac3011cadf362c4345b55fc3fd696470bb6623dc31825e6211a2d85145b0cb56f6c2a96151c6b4a94324405155c3d48a4280b2685a8d1a4d66ed5eace65abde695e351a4eab41201721d3a9c8895dcc491f68a1199f895772090e01b22ac9705c5d5f689c46951153fae3c06956fabe02242d4e39aefe0649ef86d167f8c04e117ce75826ca5c9fa99be183f7db7194e9e7517d2f18fc2094a6a4ce48e08f06f3c01b4d0cb73c79efed35aa891414a4429361dd6e765a6dc77e8ff55a98a8e93dae96255a1032fa3bee520d6eccb8c2e31bf924fe317b020000",
    ],
    [
      "ETag",
      "l7gbANmbhZgmaDk0wJec0Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:48 GMT",
      "Server",
      "ESF",
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
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-76-1625184933653",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85540b4fdb3010fe2b912724d0fa4869d2a69510ebda8c452b29a429a89aa6d6719de291c4c176983ad4ffbe8b43818e0da448897ddfe3ee7cce03ba65d90af551c4d67705159b0f3f79846a882abc86dd91c4fcdc9c4be7e3ef9bf9d89c8f926e8c2f4f4e00c14a96c4699ed0bae4852054f667d3c65af022c782f33a08d5bb9d7aab736cb71cabd76e77ec36f0244de231cb6e817da3542efbcde6cebbb1e67c9d509c33d9203c7dda6fde1f3773c17f52a26473dfb2092eb2f9b6e969c209568c6727b3292450482a1634c52c81149e99abe8d3be7483e1b4b106f03d231413c28b4c95698104e159ccd685d0aaa8ff80749a2f3ed0d41dbbc3d0184e667e78b8c469495e1e19581a8b85a0b24854cd58424d314be882ad965524bf35be049373884006375852b934aebfba816b18e3c9b51b1c3e0540cb9f84c6d8fbe61aa7c6c01f19fb729e6fcc7cdf9d86c6e1e99171164c6617c6e7f91e06ea5851a958a6ab087194d0b282c7467baf8fb7246005e65570d1353bb8e598bd288eba2476da76149b348a9ca86be37664929e45ad554431f054a9ae5938e319ee3ab61dd1d822566452829d1e893a8ed38be1bcb0d3ea992d9bc611eea16d0dfd124cd111933997acea36ba0ebcd05d84c1cc1f0e4257971163e8e8a84aae2ce2659e0a8a04d01b756dcb28e3e0541e9de7876e301886de955b4dcb98ae31d94cef605e629c480a682c704a1515e77c054d431793a9177a137f3006861e818b1d42a2fef7876742b8c97597957ea3691878fe994e6087b8c249a121f7d5073ae002670768bbadfd5f6710048339786321f0e6af18d4d3b14afa3f3c345eafaa3c779e2d54baed56c77bab0edafed8c2534370d92a2f7439738339aab6021a534133f2fe34015807defd67ec2e3060e10a838d54b086d925b23421825633cc529dbc66dba6e91c5b36d260a15ec5da8eb53bac52a354a429cdd46345d505d66d2b43857c02411046cfd7e7b6fd0395c3028140050000",
    ],
    [
      "ETag",
      "DsaoM0Ys8+zhYL0YDl7faQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:48 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-76-1625184933653"
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
      "904f4fc24010c5bfcb786d130b2dd4261c80a09260a3454ec690a54c6ba1ed94fd8312c27777763586a397ddcd7bbf99bcb767d857ed1612d854e5c1a03cdd94a85fec2343656aadf8eaa855081ea016259372999ad44cf1fef6e91007716436e1573c1e8d9850f907360292331415d65b05c9db195ad1208fadd7d26d644c9f3aabccd3d7d9c32c63a1a1ad15d2d562319e2c6670f1aec6bafdbf46de2f1eec6893618112db1c6d8a4ed20e733db7059568ba1a7d4546e6a8c0c1ce2825994e48229f157f38f083412f0ae2f0aedf1f447d066bca85aea86576b5e46ca0498b3aa34fee073d06a47b72d5c29d479623d7e1e8001bedda0bffbcc07aefbf0b27278dea5912a753688385f1f027e6946c74cd95b434e8412ef89f1f2b0d49216a85976f30f75c4ec5010000",
    ],
    [
      "ETag",
      "rSNuNuCeF0Mq8185ub4x8A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:48 GMT",
      "Server",
      "ESF",
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
      "02ff1dd04b7282300000d0bb64ed387c44a0bb0444040b8269d56c188488fc220410a4d3bbd7e911defb017192d0ae8bfa474919f800af58d297c9d26d3484b2c2203bce265590aa4da35c1089ead1bfb55e2240cee9e9fe84ee9ac8e1941ae2e88585b683b7d1a88597dc57aefa9da50e832a564773f42b7b8d83688b9cb4f5ce5fe610c2363f56cdd3296cce4e25d4ed62f390513ff89e5223219bc8f612b340d207accdc8d0eede67261e200fb14856f6753eeccfaa7bb6d80aba703671f398136e1f052b44973ec46435ef3b33b8123fb58ca0ac628ed95354ee920516804e4dce6917e56faeace8fa02fcdba3fed5d07700a231a71cfcfe0188ee49c11a010000",
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
      "Fri, 02 Jul 2021 00:16:49 GMT",
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
      jobId: "grouparoo-job-77-1625184933653",
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
      "000002ff85546b6f9b3014fd2bc8fbda3c2181448ad628256bd4846c84b47b6842b631d42dc1049b545595ffbe6bd374ad2ab59fc0bee7dc73ee039ed03d2f1234468467fb9a558f5fee04416788299cc16d587a97dbee415dcdf73faf9698fcbeca9cf9c3640208ae5912efca9cb5a4a82bcae478bb696795a84b5c09d182442dd76df586fd41cf7346b63d1cd8c0932c4f97bcb807f6ad52a51c773a27ed76264496335c72d9a662f772df39f43b6525ee1855b2f356b2032ab2f3b1e8d75c50acb82826db0d18a825ab62b6c33c070bff9909397f9bbacdf1ae9d01f8c029c3948aba50da16a4a0a248795657262b1a3f2163f3d50bdaf84b7f165954e4f5ae880bbc63675682158ed563c9ac79b85e598b60be0e57d368b10ee2cdecd25f4ddbb3f572bb0a36d6cda51ffa96c22467866b4dac73730ae000fa09938a17463dd2d75af9b9418bf763d1049096ac09c66e77887b5e774452e2d2d4b30724ed32423ce20eb04dba74e43027210c03cf881a162e44e1917e32f25c374eed84c50e4ded18f7864eec7964948c1cd74efa0e3a9ea1878a2b76c16529246f3a846ec245e4c751b80d66d3c83725a4b8ced545634c17f0daa3820201f4414d471de5029474bb1741e487d359b4b8f69b092f5986e9e3660f334e712e19a07105cd53ac5a89041a8682e9cabf00b099d8f75350a2f19f27a47bae5dbc6af90b3d82016abbca3cd1260a17c13763e784b8c6796d2087e6059560f9166a03d7c7bf8084256db2a01f5b3ffc859aab90a5ac6205fd7c9a0036814fbfb5d3e20316561f64a48233ec0e955a8456acd9216eca6dd8836e77d4b7cd97aa70a5dec56cdb3b754de7d019d98e15eab9a266f1a1d046ac962f20fd3bd90681e9d6f11f9908b9f678040000",
    ],
    [
      "ETag",
      "Rp8HU0vtKFqXKLabZKg4Fw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:49 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-77-1625184933653"
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
      "0000000002ff8d92615382401086ffcbf6319c34158b193f6859514a8a58d3348e73c28218707877d498e37f6f8fcc9a6aa6bec0eef2ecf1be2f6ce029ce02b0601e47ab02c5fa204235d2858bb24894a45bce338960002a1611791879f6e8fac1f5965de7e6e875b46accefef46ed3611d25f60cac0da4018631248b01e3790b11469cde7499166b3b23340ad733d1c7baeed5c529ff240f7cea4dfef74fb3dd81afbc58029362bf97fac4db7062cf9dcc51005663e6a2db9e04bf495ad6d4a96e60956242f848f124ab87c10095ee44c705ea149a5d5aad4cce366eda4715aaf9bcd3a8109f7998a7946ec644cfa4071c51297bf904b300910654986c3f2fa4ce338288de8d2763cb351eafb0a90b4304e70f637487a178c3ec307b68be03bc7525e646a4f5df46f3bbf1d47997e1e75def17a3f08a928a93de2d983ded8eb0c869a9beebc77d70ae550700a52a2ceb0566d9c345b66f53dd633aea3a6f7584a146880cfe8efb88a1558214b246edf00a76a4fc17b020000",
    ],
    [
      "ETag",
      "+gTIQJYRTjBNK/zQq4bWVQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:49 GMT",
      "Server",
      "ESF",
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
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-78-1625184933653",
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
      "540b6fda3010fe2b91a74aad04243c0201a9ea18cdd668907421b442d3048e71a8db1053db294315ff7d17a7b465dd5a295262dff7b83b9ff388ee58b6403d14b3e57d4ec5f6d32d8f5105518597b0dbd85c8ca6c1d6defe76d4862cf28498d3d1e6f41410ac6049bc5aa7b42a792e0895bdc9b8b6143c5f63c1791584aa1da75a6f37ecbad3ea369b6dbb093c49d364c8b23b60df28b5963dd3dc7bd7969c2f538ad74cd6085f3def9b0f0d732df82d254a9a879626b848f37dd3b39413ac18cf4e276348209754cce80ab3145278612ee2cf87d2358657b525801f18a198109e67aa480b2408cf12b6cc855645bd47a4d37cf581c6eed01d44c62098f8d1f11caf0af2fcc4c0d298cd049579aa2ac61c6a4a584a676c312f23eb3be36b188c200219dc6049e5dcb8be7043d73086c1b51b1e3f0740cb0f2263e87d778d33a3ef9f1b87729e6f4c7cdf1d47c6f1d989f12d0c2697c697e90106ea5850a958a6ab88709cd2a282a7467b6f8fb7206005e66570d6b1dab8ee58dd38893b24719a769c58348e9db863e3666c916e8bb61631c5c05385ba66e18c67b8e3d8764c931669c51625d8e992b8ed38dd04ce0b3bf5ae55b76912e32eda55d0463045cf995c73c9ca6ea3ebd08bdc59144efc413f72751909868e9e97c91545bcce534191007aa7ae5d11651c9c8aa3f3fcc80dfb83c8bb72cb6919d22526dbf13dcc4b825349018d055e5145c5882fa069e832187b9117f8fd2130f4085cee1112f57e3ebe10a2ed5a7759e9371a47a1e77fd309ec115738cd35e4a1fc40475ce0ec08ed7695ffebf4c3b03f056f2c04defe15837adaad82fe0f0f8dd7ab32cfbd671d156efb55e360d546bb5f3b782a082e5be9857e4cdc708acaad902654d08c7c3c4d00d6810fff19fb0b0c58b8c2602315ac6176892c4c88a0e50cb3954e5eb36dab6e59760369b0506f6275a7b33fac42a350a42b9aa9a78a",
      "ca0bacdb568472f90c82208c9eafcf6df707a13322e740050000",
    ],
    [
      "ETag",
      "2wHMYOy5yx8twcdufc/YMw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:50 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-78-1625184933653"
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
      "dd",
      "4e",
      "c2",
      "40",
      "1085df65bcb44d0a05a44db8104384d810ada2268690a50cb5d076eaee165348dfddd9c5182ebdd99f39df4cce9913ecb3720321acb3f4ab46d95ca5a89fcc234655e75af15551a9101c402d5226fbf2ba91f846c17eee055ef4fefa303d0ed2d18809957c6221203cc136c37ca320fc3841290ae4b6d54ada898ce9a63295d9fc65723f89b950d0c614e68b28ba1d4713689d8bb66affaf9665ebc08ed6316e516299a0715149da61a26726a0124595a3aba896092ab0b015524975252491cb15f766e87606dd7e67d80b7c7fd0f719cc29113aa392d9c5337b034d5ae4317d733ee83220ed93a36eed79304bb2190e1630d62eb5de9fd631daf277e0b8d1a81e25b13b85c69877367947c6b8e6405ad6e8402278cbd34c9fffed0fb13d49dcc2010000",
    ],
    [
      "ETag",
      "5r+yreWo9kN090LXVKHz6g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:50 GMT",
      "Server",
      "ESF",
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
      "02ff1dd0c97282300000d07fc9d93a068b406f208b886ccaea85410c6ba9240121edf4dfebf413defb017951204ab3f1d1a12ff00158ce49eb626d0da2a25495a95bb4c5cd1409bbb218fc9c386a280be7600fa92d3aa22d56ef2685f2b0c7f3b5adbd7e9eb548c0a49f2e5e84bb7b5a779e7f46816cf30e7468cf6e87324da5c727e3ef7a9af15ae5bbfeb75d627c60230713be7e0bae810fa72bdfb6d43d85d6dc5c42a28bc946d53064b0c40d7caafe5626e7ba71637354e21bdb10435ef4ac4eaab49bd96eb96446822482e920e4c649754e9ce18ed3313e6a960956002d434310cd9a1777cb4bd20afcdbb3910de815a0a09c20027eff003f42a7b61a010000",
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
      "Fri, 02 Jul 2021 00:16:50 GMT",
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
      jobId: "grouparoo-job-79-1625184933653",
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
      "536b4fdb3014fd2b91f771b44dd2963e2434aa1246a4361d690a63d314d9ce4d30a471881d1842fdefbb71280321c1a7d8bee7dc73ee234fe4561409991226b2bb1aaac72f37929103029a66f8ba5a24bf9c1cbefedc9cbbc5cd1dbb72fffaf6c3d1112244c352745be6d051b2ae38a8e966ddcd2a5997b492b283893aa349c7397487ce7830e9f70f877de429c8d385286e917dad75a9a6bdde5ebb9b4999e5404ba1ba5c6e5fde7bf76eaface40d70ad7a6f257ba8a27a1f8b7ecb25a75ac8e268b34603b5822a862d15395af8cf4cd8f1dbd45d41b7dd0cc1f78203e55cd6856e6c610a2e8b54647565b292e91331365f1dc8da5b78f3c8e232afb7455cd02d1c5809d534d68f2558a7e16a69f9c1e92a5cce227f15c4ebf999b79c75e7abc56619acadcb332ff42c4d590e866b1d59c7e616e005f513505a14463d6a9e1be5e706f9efc7d210505a411b8c47f62175c6f684a56cc4d3717fc8521b181bb3d190f699cd270318240c28f28ca861d1421689e3248e6dbb317707763c48dd614c193871ca1c668f0760bb699fec0ec84325349c08554a25da0e91cbd08fbc380a37c17c1679a68494d6b93e698d3505bcf6a8b140047d50d3ae890a894a4dbbfd20f2c2d93cf22fbc76c20bc8287f5cdfe18c539a2b4034adb0791aaaa54cb06124982dbd13049b89fdd8071599fe7e224dcf1b17af5afe428f70808d5d6dbe641d857ef0ddd8d9232e685e1bc87d7b20255abec6dad0f5ee0f227149db2ce47ce38557a47d0a21850a0afef934116c029ffe6bfbc5472cae3eca288d77dc1dae1a115e41bb43c294dbb287b6638ffb0e31e04abf8b4d06e37dd79a1c4d46d842a19f2b6a171f0b6dc56af502c2208e3f30dddafd032cf2465278040000",
    ],
    [
      "ETag",
      "OLdZ1le+XUQ2njqbY2xI0w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:51 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-79-1625184933653"
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
      "4ec2401085df65bcb444f92bd0840b50942605b194c4c410b2b453286ebb75772b41c2bb3b5b118d9ae84d3b33fd667bce69f7f094641138b04c56cf05caddd90af5bd297c5405d78a6eb9c8148205a8d98ac8ce45ade5f9f5feebda1db666d9f63c58f2876db74b840ad7983270f61027c82305cee31e329622ad85821769b6283b0bf42e37c369e0bbe35bea5311997e3cf3bc5edf1bc0c13a2d464cb345c9ff636d7eb06023963ec628310bd168c9a5d860a85d6353b134e75851a290212a28e1f2c14a8a226752880a4d2aad4ea56ad79ad576a353afdbcd3a815c844c2722237636257da08566dc175b72093601b22cc9705c5e5f689c44a51153bae3c06e94fabe02242d4e382efe0649ef9ad167f8c08e117ce7582a8a4c9fa81befaef7db7194e9e751d7bd60f083509a923a21813b1a4c83de6862b8f9d17b7fa7514da4a020159a0cab978d76b3655fbec77a254cd4f41e47cb022d0819fd1dc344831333aef0f006ba5d74c97b020000",
    ],
    [
      "ETag",
      "9/27LR3BzhIH7Unw+TblXw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:51 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`date`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "DATE" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-80-1625184933653",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffd553614fdb3010fd2b96f705a4d2d2424be984582961cb16124852508750eb264e302471b01da40af5bfefecb4eb3a36f67952d5f67cefdd7b67dfbde22756c47880e72c7daea8587c78e473dcc05491144ee5b1633917c9777af4f562d81a75e78e28c5f0e404104cb324c9cb8cee495e8988cac13868a6825725119cef41a1bdfefe5ebbd7e9b6fb87c70707bdee01f024cd1287154fc07e50aa9483566baddd4c394f334a4a269b11cf7f9eb75e3aad52f0471a29d9da966c818a6cbd2f7a9af18828c68b937100062a49c594e684656061c38ce79fb64b3719c99b29805f58444914f1aa50da1694887891b0b412a62a1ebc6263f3973f38b01c6b14a2913776c39d19c93579b68b8844d3a9a0b2ca5403cda0a7846574cae2599d299fd085ef5d42061c3c1049e50cdd7eb17c0b21c7bbb5fc9d594c14853aae1722c7fe66a1533474cfd17629db4563d7b58210ed9ceea2cfbe37be4267932d0cf410d384808d73a2404769ef71fdd7d60faba854005addbafdf6adf1526719174ce97e6d37b4fce128b46facfa8a1d9a9268113cc32527249314d044909c2a2a2e794c8172e50576687beed00186b9b7ab3542e2c1ddeb86102e4aaa0d2af38bcf87a18597cbc6df1143df1f4ea02a11822c7ecb81d3dea1a66fd83724ab0cc4e04d543b78a913b88db5da3aea6c453dbcbc5fc2a78161f66a2d7c3db6fc09ae8f7c9a50418bc808bc739f066c12ff5ca1f53c0316261a64a482582a16492d12096ad221cb8d79c3eeeeb7e1ab8f0d58a837b9e3f6915efb22fe6366a55199fa54082e7c33c43a043569bcb002ee84c5d76605b65c3eaf8e722a2549757997a39ca8e8811529922c2da0b6a028e102255511695a3df1e68888b4ca69a1907e4239407a009a28a8ca920b45e34d01c8d57b1284beed7edefdb80acf26a115c0f62974d71ef43bf7ba1fd345fdccff6507f7f5939885f05cbd103f002f676ec4cc050000",
    ],
    [
      "ETag",
      "s9LELFfZe7JFA/C5bLrprA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:51 GMT",
      "Server",
      "ESF",
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
      "0000000002ff1dd0db6e82300000d07fe9b3332294cbde402c72b31033ed9e1aac55b10e0a256035fbf7997dc2392f5031c695a2432b78033e81ae96de9ccd53e906c1e56ae13d778456fecf83f9195a8cd66484254fc31453033aa67da3ee2ad5f6d4d5eb4888f4646875244a94d70fab64f4e63c82dacfbe0cb23b90725138088a7cfd0c0ab5e9ada6b551dbc3f1ac95d1c5ae17f1cedd56074b86c93a16cc24be134d506ec6c251457069efb28b318e9227b48ff96a87d119864ce8fd1062629bb540f76420d24a5a597859697fe7316ab6dd32d298aaa8b91e6f283f996006f843d63d57b47e734de87933f06fa78396fc1d10f0aae73df8fd03800f42041a010000",
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
      "Fri, 02 Jul 2021 00:16:52 GMT",
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
      jobId: "grouparoo-job-81-1625184933653",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85535d6f9b3014fd2bc87b6d02241048a46845296da912b20169554d13328ea14e0966d864aaaafcf75d4cd3b5aad43e61fb9e73cfb91f3ca347566dd10c65acf8d3d2e6e9db8e67e80c51890b7835bde4fe26d4afae1dcb248bddcda1584c76de7c0e08d6b104ded7251d08de36848ad9261e160d6f6bdc703e804403d71c9893916dbad6743c9ed863e0095ae64b563d02fb41ca5acc74fda43d2c382f4a8a6b268684ef5fdff5c348af1bbea3440afdbda40e2a42ff5cf47bc909968c57f34d0c065a419b94ee312bc1c27fe6363b7f9f7ac8f07e5800f8c008c584f0b6929d2d48417895b3a26d5456347b46cae69b038afda5bf4834c2cb765fa515ded3336d8b254ee5534db5cb68bdd282f0721dadbc24588769bcb8f657de70b15e6e5661acdd5dfb91af499c955471b5b976ae6e215c407f4b856495524fbae74ef9a541c1c7b174049016b40fa68e31c1a66b4cb33c7348ee8eed2c376896b99963e3716690a945ad6d4631f094a862e18a57238b38b98bed746458796a39632375b1e9a4c430466e669a53036fd1f10cfd6d98a4174cd45cb0be43e82e0a123f4da24db8f0125f9590e3b69417bdb1ae80b71e251408a04f6a3a7651c641a96b7710267ee42d92e0d6ef27bca405264ff11f98718e4b41018d1b689ea4cd8a6fa16128f456fe0580d5c47e9c8202cd7e3da3aee79d8b372d7fa52730c0ceae545f142751105e293b27c42d2e5b0539f4075483e507a80d5c1f7f031296b4cf827e6efce81ef54f11cd69432bf2f53401ac025ffe6ba7c5072cac3ec8080977d81d223a11d2d07e87982ab767db8639b24613a4c08dfc10b32de7d4b52e479791ee69255f2aea171f0aedc55af10a82208c3f54dd3afe0309735a0478040000",
    ],
    [
      "ETag",
      "1ATYJN/GH741cCjJvgC6jA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:52 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-81-1625184933653"
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
      "5b4f83401085ffcbf828c4d20bb6247da05ab5495b7ba1be98a65960a05460e9eea2364dffbbb358ab51137d8199e19be59c037b784af2101cf093785ba2d89dc5a8a6ba98a12c5325e956f05c2218808ac5444edd4e6d73d1f6eb0faf9ded79cc22bf975c4ebb5d2264b0c68c81b38728c13494e03cee216719d25ac0d332cb57556780da157a38f76683f12df5190f753f5e0c876e6fd88783715a0c9962ab8affc7daf260c086fb338c50601ea0d65208bec1400db44dc9b2224553f2520428a182ab07b1e065c104e7264dccb6655a76bd65b59b9d46c36e35084c79c054c273621773d2078a2b96cef80bb9049b0051956438aaaecf344ec2ca882e0763cf6e56fabe02242d4a525cfd0d92de35a3cff0811d23f8ceb18c97b93a5137c37bf7b7e328d3cfa3ae5dafff83908a923a21de60d49f7bee68a2b9e5d17b6fa7504e04a72025ea0cad5ab3ddbab46befb15e711d35bdc751a2440302467fc75da2c089582af1f006d4c3514b7b020000",
    ],
    [
      "ETag",
      "QA90j/8b2Vx9q+gafbBi7Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:53 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`stamp`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-82-1625184933653",
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
      "0002ffd553616fda3010fd2b96f7a595280c28b463aa3a4ab3361a243409ad505581499cd46d1207dba9842afefbce0e94b16edde74948c4bef7eebd3bdfbde2679647b887172c599654ac3e3df105ae61aa4802b7245f66621a3f5d8b113bb9e824cb74b0e8f6cfce00c1344b92ac48e991e4a508a9ec4dfc7a22785910c1f911243a3a6d1d35bbad4ef3f4f84bbbddedb48127691a0f59fe0cec47a50ad96b34b6daf584f324a5a460b21ef2ecedbef1d26a14823fd150c9c6be64035464e363d1f3948744319e9f4d7c30504a2a6634232c050b3b66b4f8b69fbace48564f00fcc2424ac29097b9d2b62045c8f39825a5305971ef151b9bbf7c60df1a5a83000ddc89131ccc49a6c9f34344249acd049565aa6a680e35c52ca53316cdab48f18cbe7bee0822e0e091482ae7e8eedaf22c8486ee9de51dcca5028f90c8710334b47f58e81cf59d4bb49fcb76d0c4712c3f4007e787e8ca7327637431ddc34011118d09f8b8240a8494361f559fb67e5945a502d0a6edf6fbc7c66b1d655c30a50bb69dc0f2fa83c0beb5aa1e0f6942c295bf842ec7249514d044908c2a2a463ca24019bbbe1dd8aed31f02c3346ebc4548dcbb7fdd11825541b54165fe71608fa0b8fe688cd7ebdadf617dcfeb4f21351182ac7e8b81ddeeb1a6efd8b7242d0dc4e0cda9b2f1520570136bb5eda9b577eae2f5c31a7e350c135869e19b89e54d7175e5d1980a9a8746e083a61ab009fc7391b6530d58986b9081d9504c2a164a2d120a6ac201cb8c79c3ee7c6eb69b272d6cc042bd8bb5a029b0fc79f4c7c846a334f9a9105c786694f511d4a4f1c272e8098b6ecc22ecb95c6eae322a2549747a87a38ca8f091e509922cc921b7a028e602c5651e6a5a35f7e68a88a4cc68ae907e42d9436f5350477e59145c281aedb200a05a193ff06ce7eaf0ebe678310d2c1f1651a1fb66efb4f5a08b32a5546ffdff96f1503d8ef673e93a16ccf64f0d0e0d5edc050000",
    ],
    [
      "ETag",
      "anqmrYfjHrMi7B5gqlCb6A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:53 GMT",
      "Server",
      "ESF",
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
      "ff",
      "1d",
      "d0",
      "4b7282300000d0bb64ad8e10be5da615341282a8a5b861628c0828d2f091d8e9ddebf408effd00c6b968dbacbb57a2066f4031dd9df1d9ba7110ca4b5dc3853734a9bbd5aec735c6668207ff204c3abf52489e71e2452265effd74e927e6f49858a6792b38b403def6a412e4e1c09b217761e9d704fb942a876606a972b95a285b588a79b6f73c27c3bd7b2848978ff192faf69eb2e69c079135bf6f64f0814ec39e3fc37c9c6a867fe8c61397ed27ee609cba990aebd6354afc6559ab6d7341f64177163b94b2a8af72baac8b188d7a9668db101d1db2f9166002c4d81452b459f1e242d37527e0df9e75aa11af0024981412fcfe01ef02040c1a010000",
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
      "Fri, 02 Jul 2021 00:16:53 GMT",
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
      jobId: "grouparoo-job-83-1625184933653",
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
      "6b4fa34014fd2b64f6ab2da50f4b9b346bd3e24ad2d24aa966b3d99061b8e02830c80c9ac6f4bfef65b0aec6443f3133f79c7bce7df0421e781193298978fa584375f8712f22724640d1145f6f2eb779611db6e678bb8937eef532890ffc793643046f5892e665061d29ea8a819cee77ddb41275492b213a98a8630f3ad6797f64d9c3c960703e1a204f4296ac78f180ec3ba54a3935cd9376371522cd80965c7699c8dfdecda7be5956e21e9892e647491355a4f9b5e8cf4c30aab82866fb1d1aa8255421e4946768e13f338e2e3ea6ee729a7753043f710694315117aab185299828129ed695ce4aa62f44db7c77203b67e52c028389acce8bb0a0399c193155345487128c4b7fb3365cef72e3afe781bbf1c2dde2ca59cfbb8bcd6abff676c6ed95e33b86a251069a6bcc8c0b7df3f082fa3148c50bad1e34cf8df26b83dccf636908282da10d86e3de39b5ecde244aa2314becc1284a7a104576341ed141d46393210ce30828f2b4a866d14214e3f1008660d1700cfd281cf68185f6d04ec284f6697f34ec8185133e9e91e78a2b5872590ac9db0e915bdf0d9c30f0f7de621e38ba8484d6995ab6c69a02de7b54582082bea8e9d844b940a5a6ddae1738fe7c11b8374e3be115a4941d768f38e3846612104d2b6c9e826a2d626c18f1e66b6789603db1ed2928c9f4cf0b697adeb878d7f2377a80036cec2afd25bbc077bd5fdace097143b35a439eda0329d1f21dd686ae8f7f11894bda6621d77bc7ff4dda271f12a8a060df4f13c13af0edbf765a7cc4e2eaa38c5478c7dd61b2116115b43bc475b92d7bd4b3903d211a5ca94f31db1a9fbad6e46832420e857aada85d7c2cb415abe51b0883387e4f77ebf80f15ae9e5e78040000",
    ],
    [
      "ETag",
      "VFPmn1yP/7POdOIQDfdyiw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:53 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-83-1625184933653"
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
      "c2401085df65bc2d09085468c2057f2a092096e28d216469a7a5d876caee5625847777b6221a35d19b7666facdf69cd31ee029ce0270601d47bb02e5fe22427d6f0a17559168c5b79c328560016a113139184ca289ab28a8beee1efad9abddb6ed76d4e930a1fc0da6029c038431268102e7f100994891d77c4a8a345b959d057a9f9be1dc7347d31bee530a4c3f5d8cc7ddde780847ebbc18082d5625ff8fb5e5d1822dad5d0c5162e6a3d1924bdaa2af47c6a612699e604551217d5450c2e5834852910b4954e149a555afd4eccb66add568d7eb76b3ce6042bed03165cc2ee6ac0f346991b8f4c22ec1664096251b0ecbeb338fe3a03462cad1d4b31ba5beaf004b0be304577f83ac7723f8337c60a708be7322a522d367ea7a7cd7fded38cef4f3a841d71bfe2094e6a4ce88379a0ce75e773233dcf2e4bdb7d7a8669238488526c35ab5d16a5ed9d5f758fb64a2e6f7385a1668812ff8efb88d3538a148141edf009f1dc50f7b020000",
    ],
    [
      "ETag",
      "DDMgMRsod0xqVCnx69669g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:54 GMT",
      "Server",
      "ESF",
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
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-84-1625184933653",
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
      "db3010fd2b96270488b6a1d076ac12620502440b4949535035a1c64ddc6048e2623bd52ad4ffbeb343810ec63e4eaa549fefbd7bcf77d73ee1075624b88b272c7d2ca9587cb9e7135cc35491146eadddddde9c5f915f3be7d9ddd750ecb889d54f0f0f01c1344b927c96d1bae4a588a9ec0e078d54f0724604e77528543f68d59b9dbd76f3a0f56d7fbfd3de079ea4d9d465c503b0ef949ac9ae65adb41b29e76946c98cc946ccf3977b6bbe67cd04bfa7b192d6baa4052ad2fa5cf428e331518c1787c30118282515639a13968185576632f9be5ebac148de48013c67312571cccb42695b5022e6c594a5a5305571f7091b9b6f0e7860bbf649884efca1176e4524d7e4681b1189c663416599a91a8ae04d5396d1314ba22a337b4067817f0919707047249511bab9b0031b21d7bfb18337953c3f44aef3c34647a8e79da2f5628e87869e670f42b475b48dce037fd847c7a3350cbc22a15302464e890225a5dd27d5d1d1a355542a003df7dd793f6dbcd459c60553fac58e17da41ef2474aeedaac92e4d49bc183c429ba7249314d044909c2a2a2e794281d2f7074ee8f85ecf0586e95c7f8590b8fbf3e995102e66541b54e61b9fb97e2fecb48c8315e49a64a5c1ccab03de6836daad0dbc5cd6fe5ea81704bd11881321c8e28f1c3c484b7ca861f026aa8cae349b58abada2bdb5a88397b74bf8d4302c69a585af867630c2d55540a754d02236029fb4dd804de29fbfb5d5e20316561f64a482582a164b2d120b6ad221cb8d79c36eef365bed4e071bb050ef7307ba322d920f33cf1aa5a94f85e02230dbae435093c60b2ba027f0ff51c3399592a4baccb08097484a2619456615d04bd751142156203d161485a3be3d7e9e7f5443c72441092f35cbf4b98baab1afa2cd2adcd4c68c9d6a5effd7ca6d",
      "d524ad75ea7b36ecd86f2c1967bd87050000",
    ],
    [
      "ETag",
      "/00AvoQax+Glh7Tr+Ld/Pg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:54 GMT",
      "Server",
      "ESF",
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
      "ff",
      "1d",
      "d0",
      "dd",
      "72",
      "43",
      "40",
      "00",
      "40",
      "e1",
      "77",
      "d9ebc82815ab7774acbfae2091841bc3dac85ac22024edf4dd6bfa0267e63b3f2027848e6336759cdec10778e592b6255baf87865155625b5d0ebe27bb3329bdaf7466c3e184ba6c0e932ac46e79cfda42d48fb1ac41ad46c412da200debf26adb7a0451c4b27dc593b188906de6487007a4895832319df7cc7dcc187b7cc6b57b2369fb36954aab9e9c068a0f210ee1b97c574903f5608955ab890a2e06707756153d0e7cafb8e56b52393edb1d862cb12fdffeb2f4068f2b09a13ef012240ecc31dd70541b87632b66dda7cff8355712b001f4d9b3818e195bb9b2a2691bf06fcfa6574fd70106cd073a80df3fe0747e7a1a010000",
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
      "Fri, 02 Jul 2021 00:16:54 GMT",
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
      jobId: "grouparoo-job-85-1625184933653",
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
      "02ff85536b6f9b3014fd2bc8fbda3c09098914ad514257a6846c84b4aba6091973a16e01536c3a5555fefb2ea6e952556a3f61fb9e73cfb90f9ec93d2f623223114f1f6aa89ebedc89889c115034c557a54c73b5b9ce6eaeb8f9ebfb5d2d8b8b7b7f319f2382372c49f332838e1475c540cef6bb6e5a89baa495101d4cd4b1adce603cb406f6686a9a63cb449e842c59f3e21ed9b74a9572d6eb1db5bba9106906b4e4b2cb44fefade7b1cf6ca4adc0153b2f756b2872ab2f7b1e8d74c30aab828e6fb1d1aa8255421e4946768e13f338ecedfa6ee729a7753043f720694315117aab185299828129ed695ce4a66cf44db3c39909db3769681c14456e74558d01cce8c982a1aaaa7128c0b7fbb315cef62eb6f1681bbf5c2ddf2d2d92cbacbed7abff176c6f5a5e33b86a251069a6bcc8d737df3f082fa3148c50bad1e34cf8df24b83dcf7636908282da10d8693fe980eecfe344aa2094b6cd38a923e44911d4d2c6a467d361dc1288e80224f8b6a162d4461262318db741a0ea76c188ea2d1249cdaa61d9aa369dcb72336b02990c319f95b71052b2e4b2179db2172edbb811306fede5b2e02479790d03a53abd65853c0a947850522e8839a0e4d940b546adaed7a81e32f96817be5b4135e434ad9d3ee01679cd04c02a26985cd53506d448c0d23de62e3ac10ac27f6e3189464f6fb99343d6f5c9cb4fc951ee0001bbb4a7fc92ef05def9bb673445cd1acd690c7f6404ab47c8bb5a1ebc31f44e292b659c8cfbde3df90f6c987042a28d8e7d344b00e7cfaaf1d171fb1b8fa282315de7177986c445805ed0e715d6ecbb6fa03ab6fea3f55d14abd8b0dc68363d79a1c4d46c8a1502f15b58b8f85b662b57c056110c7efe96e1dfe014d53e16f78040000",
    ],
    [
      "ETag",
      "tt33DMWlYVi3XJjusnFkRA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:55 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-85-1625184933653"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92414f83401085ffcb7894c6d6b658493ca0a292d2aa2d8d07639a2d0c140586ee2e9aa6e97f7716b51a35d10bcc0cdf2cef3dd8c05356c6e0c0224b5735caf55e8afad614135475ae15df2a2a158205a845ca64181e04c97078b7ef7b83e7d875672b1297eec909132a5a6221c0d94092611e2b70ee37508a02792da2bc2eca79d359a0d795194ec3893fbee4bea0d8f4e35910b8a781075b6bb7180b2de60dff8fb587ad058fb498608212cb088d964ad22346da37369528aa1c5b8a6a19a182066e1ea492ea4a48a2164f5a837eab631ff63b83de71b76bf7bb0ce614099d51c9ec6ccafa409316f9845ed825d80cc8a664c349737de6711637464ce98f43bbd7e8fb0ab0b424cb71fe37c87a97823fc307f61ec1774e1454977a475d04d7ee6fc771a69f479dbba1f783509a93da21a13ff2a6a13bba31dcc3bbf7d3b54675238983546832ecb47b83fe91dd7e8bf58c4cd4fc1e47cb1a2d8804ff1d5799062711b9c2ed2b5a93f4917b020000",
    ],
    [
      "ETag",
      "TT/LfKKW+IE8vdAAUqoaGA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:55 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `id` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-86-1625184933653",
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
      "4fa34010fd2a64ef1fcdf537854293c6abca795c2a554a35cde5d22ecb5257814576d134a6dffd86c5aa8d9e2624b03befcd7b333bcb13ba635984862864ebfb92169b6fb73c440d44255ec3ae75a3277674fc785ffa8b99f97bd34eafbe772f472340b08a25709a27b4297859102a86f3596b5df032c705e74d48d4b4cc66d7ec195dab6febba69e8c0133489272cbb03f68d94b918b6db3bedd69af3754271ce448bf0f465bffdd06be705bfa5448af6be641b5444fb73d1a384132c19cf46f3191828052d9634c52c010bafcc28fcb19fbac570da5a03f881118a09e165262b5b9082f02c66ebb25059d1f009299b6f3ed0cc9938278176329d7bc1c10aa7157975a861a12d97051565221bda0a6a8a5942972c5ad591fc4efbe94fcf21020e6eb0a062a55dff727c47d3561568a41d6963ef54dba7ba9e36f73c671668074787da993f9d5f68c78b3d0c788ea8902c538e031c26b472fbdc54f7fd5156042cc1411d5c0e3a26ee5a1d3b8cc301892ddd08e30e0d432b1c18580f3bc4eed37e14520c3c5965572c9cf18c1846c7ea0df49058864d6c3ba2bda8d3c53aeee398c6c408ad7e68f60845db067a2c98a4a74ce45cb0bab3e8da77036719f873ef641c38aa8c1843f74e6b7355116f7d4a2812409fd4b5ada28c8352754cae1738fef82470af9c7a3226748dc966760fb311e3445040e302a754d2e29c47d03474319db9813bf5c61360a8e3bed821041afe797a25049b5c7559aa77a565f695fe0e70859352211eea0fd435d076dbf87f8ab1ef8f17208b8b026f3e4eff617e8557abdae28b1eaad476abdedeca44dbbf5b781a08ee54ad852ee78ebf40f5964f635ad08c7c3d480056812f7f0dbb7b0a58b8a9202324ac616c89a8444841ebf165a932afd846a76b76fa03a4c0857c17ebdafaee9caa1c55469ad24c3e5754df53d5",
      "b62a548a17100461ea3cd73b83e83fb831480b27050000",
    ],
    [
      "ETag",
      "8h3l9dBwquRYS6Jy/mV+1Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:56 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-86-1625184933653"
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
      "ff8d90414fc2401085ffcb786da350406cc201b0112212ace0c510b2b4d352e876eaee56834dffbbb38583472fddd9d7efedbeb7359cb222061ff659fa59a13adfa4685eed10a2ae72a37929a9d0080ea01129933fc7932ca6cf2f136ffd2e0fb7bdd5fdacfb381e8d98d0d101a500bf8624c33cd6e07fd45008896cdbed547b2263e65c5a65be5c074f41c882a4d80acbcd62319e2c02689c3fb6f2f42fcbb671e048fb10135458446853948a8e1899b92da8852c737435552a420d2ddcfe481555a550442e2bee70e07606dd7e67d87bf0bc41df6330a748988c0a66376f9c0d0c199187f4cdfda0c3806a47ae9ab4dfaf56b61daed3b6d95e4d93b341bd52c40934dacbef2e41a664c3190e6d54850e44825f729699cbbef90519975544a6010000",
    ],
    [
      "ETag",
      "zjkmnCKMB3TVmh/4P7H2DA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:56 GMT",
      "Server",
      "ESF",
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
      "ff",
      "1d",
      "d0",
      "cb",
      "72",
      "82",
      "30",
      "1840e177c9da710c0848772244b4e0140d72d9fc43212a8102265a814edfbd4c1fe02cbef383b23c6752c2a3ad5883ded09029e63c9fbf772bcbba72a3e75f9fe05c74eaef6bffa91a711fc62db8846f86be25e3b358b0238026e9fa92f465294bd74c15bd53778ac913c3de9ee83a38f4230db56bd960ca6dec11cdf21c9a761077e48cc34d10f98d7d6aef9558c5861b2c5f7791f2cb4689a1724e7437e0bbdc9d3d01f6a2de92e47b0a601f5b372515e1c7d22b5435f2b1538763602faaaa265a914008c90347c761304191fa18bc24b4b714578700cd10ebbb523009e5c45535d39ca17f3b3c868e4d032c960926d0ef1f378581741a010000",
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
      "Fri, 02 Jul 2021 00:16:56 GMT",
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
      jobId: "grouparoo-job-87-1625184933653",
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
      "6f9b3014fd2bc8fbb8262421908714ad514a57b4846c40da55d3848c31d40d608a4dabaaca7fdfb569ba5695da4fd8bee7dc73ee8327b467558ae62861f95d4b9bc72fb73c4127884a9cc3ebcd6f079bbbfac7d741e945bbf0dab1f757fb87c502104cb1042eeb82f6046f1b42c57c17f6f386b7356e38ef41a2de74d21b3a237b381dcf2ccbb12de0095a646b56ed5576296b3137cda3763fe73c2f28ae99e8135ebebc9bf723b36ef82d2552986f254d5011e6c7a2df0a4eb064bc5aec4230d00adac4b4c4ac000bff996972fa36759fe1b29f03f89e118a09e16d25952d48417895b1bc6d7456347f42dae6ab030addb5bb8a0cc28bb6ace20a97f4c448b1c4b17caca9711e6c3786e79f6f83cd32f2b67e1cae2edccdb2bfdaae771b3f34ae2edcc035244e0aaab9c6c238d5371f2ea09f522159a5d523f5ac949f1be4bd1f8b2280b4a05d309e0c1c3c9c0e6649964c4836b5ec241bd0249926131b5bc980ccc6749c2614034f8b6a16ae7845206a117b1ad3c9d889c77884e3596a4fe274426716b6c62362117438410f0d93f48c899a0bd675085d055ee4c651b0f357cbc8d52564b82de459674c15f0daa3840201f4414d0715651c9454bb3d3f7283e52af22edd6ec26b9a63f218dec18c335c080a68dc40f3246d363c8586217fb971cf00ac27f6f3181468fee709a99e2b17af5afe428f6080caaed45f144681e77fd7768e884b5cb41a72df1d500d966fa036707df80b4858d22e0bfab573836bd43d0534a30dadc8e7d304b00e7cfaaf1d171fb0b0fa202324dc6177885022a4a1dd0e315d6ec7b6074367ea8c900637f25d6ce6cc8e5d533954465ad24a3e57d42d3e14da89b5e205044118bfafbb75f8074132a3b178040000",
    ],
    [
      "ETag",
      "hX6a/UpK+0mITUSY65kWkw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:57 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-87-1625184933653"
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
      "df65bc85a47fd096a4176dad4aa455298d17a669b630502ab0b8bbd4344ddfdd59acd5a889dec0ccf0cd72ce81033ca745040eacd3e4a542b1bf48503de8c24759654ad2ade485443000154b888cac562b0adadb448dfbf96367d7dfdc565e32181021c30de60c9c03c429669104e7e90005cb91d6429e5579b1aa3b03d4bed4c379e0bbb36bea731ee97eb6f0bce1c89bc0d1382f464cb155cdff636d793460cbd73ec628b008516b2905df62a85c6d53b2bcccd094bc12214aa8e1fa4122785532c1b94913b3d7359b76cb6af63afd76dbb6da04663c642ae505b18b39e903c515cb7cfe4a2ec12640d425198eebeb8ec669541bd1a53b0bec4eadef2b40d2e234c3d5df20e9dd30fa0c1fd82982ef1ccb7955a83375e5dd0d7f3b8e32fd3cea72184c7e10525152672470a79379309cde6b6e79f23eda2b94f7825390127586cd46a76775edc67bac63aea3a6f7384a546840c8e8efb849153831cb241edf00e645631f7b020000",
    ],
    [
      "ETag",
      "d522dT3jgtC9mW4v9hKuLg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:58 GMT",
      "Server",
      "ESF",
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
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-88-1625184933653",
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
      "0000000002ff8554614fe24010fd2bcdde174d9096164a21211e424f7bc1a2a568bccb05b6658bab6db7ee6e35c4f0df6fba1595f3ee4c49dadd796fde9bd9599ed13dcd57a88f22ba7e2809df7cb963116a2022f11a76cf4e9ef0b865eae3bb4bfffabcf7c33ae39bef9783012068c512382b52722458c96322faf35973cd595960ced811243a729ca3966d765a4ebb675976c7029e206932a1f93db06fa52c445fd777dacd3563eb94e0828a66ccb2d77dfdd1d40bceee482c85be2fa9838ad0ff2f7a9cb2184bcaf2c17c06064a41f8826498a660e18db98abeeea76e529c35d7007ea431c171ccca5c56b62045ccf284ae4baeb2a2fe335236df7da0993b7147a1369acefdf06089b38abc3cd4b0d0160b4e4499ca86b6849a129a92055d2deb4871af7d0ba6e7100107b75810b1d4aecfdcc0d5deb696da403bd686fe58db4fe0f9dadcf7dd59a81d1c1f6aa7c1747ea19ddcec61c0f98a084973e53bc4514a2acf2fadf53e1e6845c01244ebe0a26bd8b8e518bd2889ba71e2589d283148143951b783adc8887b6dd25e4504034f56d9150be72cef25b6d13262b307e7e2b42d0ba0bd76d7b1e36ec7488869922e36aa076d1be8895349c654144cd0babfe83af042771106737f340c5d554682a187e3da5c55c47b9f128a04d07feada5651ca40a93a2ccf0fdd60380abd2bb79e8f0959e378337b800949702a08a031c71991849fb315340d5d4c675ee84dfde10418ead02f760881fa3f9fdf08e1a6505d96ea8d6661e0f9a7cac00e7185d352411eeb0f342cc02bda6e1bff4e330c82e10d4863cef1e68f189463b72bfa5f24145ead6a9b3bc916aad4762b736f65a3edaf2dfc1a086e57ad852ee76e7083eaad802484933cfe7c9800ac029ffe49ec6e2c60e1ce828c90b086d18d45251273528f30cd9479c5ee182dc7346ca4c05c7e885966677756558e2a23c9482e5f2aaa6fac6a5b152ac52b08823079be3ab6ed6fc33eed7d31050000",
    ],
    [
      "ETag",
      "HBwaD12/DjQNWM9Z3HryJQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:58 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-88-1625184933653"
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
      "8d90416fc2300c85ff8b776da5d10263481c60aa065ac55807172684d2d694425b77490a6288ff8e13a689e32e89f3fcd97a2f67d8e7550a7d88f3ecbb41797ac8507f982242d5145af15553a5101c402d32267f8eefdbd1d48b8be5d3b8bd0c87f3d9fef0361c0c9850c9164b01fd336c722c5205fdaf3354a2441e5bafa5ddc8983ed546994ce7c16b10b150526a84e9220c87a330808b733756efff35b2ba38b0a338c20d4aac12342e6a493b4cf4c40454a2ac0b74153532410516b68d4c52530b49e4b2e2f67a6eabeb755abdf6b3ef773b3e83052542e75431bbf8646fa0498b22a223e7038f01694b8ebab1e78165df663858c058bbef797fbd96e9ad7e178e4e1ad54c12bb53688c3dde4cbe9031ae3990960d3a9008fee571ae6fefcb15d49f88acc2010000",
    ],
    [
      "ETag",
      "zwOhBN2blZ7H4ZLATPkvKA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:58 GMT",
      "Server",
      "ESF",
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
      "ff",
      "1dd04b7282300000d0bb642d8efc04bae3537e11152a1abac920068ca086002dd0e9ddebf408effd80bc2848d7e1fe5993077803532e19cb6209996e59d5cd703d4d19d0367e367c94958aceae864a7b43fc44706cd5b932d1c6d1be381766c8db71a3cceb87b78e1ae75ac34b0cf71976c38844011cc5e7ca2c3157359821aec543ab1f07867a9d98b7159a5261a654ca8b1b13c46d4351b7df2509e5a29f12a50f295c1fbce0981041e797461eeee91d7fbcf3ba6279290fb150f71df44ecd6c9628f8f4cd0c4a9a378a0a3ce970ccbefdc32434c3eeebd2ced1192c001919e5a4c3f4c59555c358807f3bee27465e0116c939e1e0f70f7088a0261a010000",
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
      "Fri, 02 Jul 2021 00:16:58 GMT",
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
      jobId: "grouparoo-job-89-1625184933653",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85535d6f9b3014fd2bc87b6d1212920291a2354a69cb96908d9056d33421e35ca83bc0149b465595ffbe8b69ba7693da276cdf73ee39f78327f29b973b322509cfee1ba81f3fdd89849c105034c3d73dbb2b96ae1fd02f30ce2f965fddcb7d99ee673344f096256951e5d093a2a919c8e976d3cf6ad154b416a287897a8edb1b9e8e264367ec5ad6e9c4429e843c5df2f237b26f95aae47430386af73321b21c68c5659f89e2e57df0301a54b5b803a6e4e0ade40055e4e07dd1cfb960547151ceb61b34d048a8632828cfd1c25fe62e397b9bbacf69d1cf10fcc01950c64453aad616a660a24c79d6d43a2b993e116df3d5816cbca5b7880c26f2a628e392167062eca8a2b17aacc0b808d72bc30f2ed6e16a1ef9eb20de2caebcd5bcbf582fb7ab6063dc5c79a167289ae4a0b9c6cc38d3b7002fa8bf03a978a9d5a3f6b9557e6e90ffff585a024a4be882b16d9ed2a163ba499ad82c75ac49929a90244e624fa89598cc1dc3789700459e16d52c5a8ad2a6139a5a168d29b3c6f1d83559ecd88e1b9f5a6c678f9068db400e27645f7305e75c5642f2ae43e426f4232f8ec26db098479e2e21a54daece3b636d01af3d2a2c1041efd47468a35ca052db6e3f88bc70be88fc6baf9bf01232ca1e37f738e394e612104d6b6c9e827a2576d83012cc57de3982f5c4be1d83924c7f3e91b6e7ad8b572d7fa14738c0d6aed25fb289423fb8d4768e886b9a371af2d01d4885966fb136747df885485cd22e0bf9bef5c21fa47b0a21851a4af6f13411ac031ffe6bc7c5472cae3eca488577dc1d265b115643b7435c97dbb127e6d071cd11d1e05afd1b73cdb17bec5a9ba3cd080594eab9a26ef1b1d04eac912f200ce2f803ddadc31f655087a878040000",
    ],
    [
      "ETag",
      "wcjmL9INaJe4lFLK9Gwnfw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:59 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-89-1625184933653"
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
      "92dd6e82401085df657a8b89bf5449bcd0d656225a8bd89bc6981506c4024b779756627cf7ce526b9bb6497b0333c337cb39070ef014670158b089a3e702457911a1bad7858bb24894a45bce338960002a161129f6cde504c3c943533ab37d142fc665eabcf6fb44487f8b2903eb00618c4920c17a3c40c652a4359f27459aadabce0055e67ab8f05c7b764b7dca03ddcf968e33183a23381ae7c58029b6aef87facad8e06ecf8c6c51005663e6a2db9e03bf495ad6d4a96e609d6242f848f122ab87a10095ee44c705ea349addbab35cc66a7d16df75a2db3d32230e13e5331cf885d2e481f28ae58e2f25772092601a22ac970585d5f681c0795115dda33cf6c57fabe02242d8c135cff0d92de2da3cff0819d22f8ceb19417993a5337cedde0b7e328d3cfa3ae07dee80721152575463c7b3a5a7883e95c73ab93f761a950ce05a72025ea0c1bf576b77369d6df63bde23a6a7a8fa5448106f88cfe8e71acc00a5922f1f8067f6a2b477b020000",
    ],
    [
      "ETag",
      "rx2UKefKV2sLNxgiSHymLw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:59 GMT",
      "Server",
      "ESF",
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
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-90-1625184933653",
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
      "9b3010fd5790f74b2be5837c43a4a8cb12b6a1a524232455354d893186ba014cb1691555f9df7798a66dd6ad9590c0bef7eebd3b9f79443b960668887c16dd1534df7fbae53eaa212a7104bb74b1d6cde9e47672b930689bac0be7c78e3f8c468060254be0248b695df02227540c57cb4694f322c339e775485437f57aabdfeeb58caed9e9f47b1de0091a873396ee807d23652686cde651bb11711ec514674c34084f9ef79bf7ed6696f35b4aa4689e4a36414534df17bd8839c192f174b45a828142d07c4313cc62b0f0c20cfccfa7a91b0c278d08c0f78c504c082f5259da821484a7218b8a5c6545c347a46cbefa404b6b664d3c6d325f39ded9162725797bae61a16d363915452c6bda166a0a594c372cd856916ca77d75e797100107375850b1d5aebe5baea5bd6c6db59176a18d9da9769ac076b495e3584b4f3bbb38d7beb9f3d542fb727d8201e7011592a5cab787fd98969e9f5a6bbf3dd09280258856c1cd40efe396a19b7ee80f4868747a7ea853df37fc410f777c9d985dda0d7c8a8127cbec8a85539e767d5f0f8cb6d935cd4e9b04a43be8eb4427bd5e2730a81efabe69b675820d74a8a1879c493a6522e38255fd4557aeed591bcf5d3993b167a932420c3d9c56e6ca225efb94502480dea9eb50461907a5f2b06cc7b3dcf1c4b3d756351f331a61b25fdec18484381614d038c7099534bfe401340d2de64bdbb3e7ce78060c75e88b2342a0e1afc71782b7cf5497a57aa3a5e7dace3765e08858e3b85090fbea03e10cbca2c3a1f6ff3463d71d5f8334ce73bcff2b06e5f4bb25fd1f120aaf5695cda3640b956ac755fb64d54787df07786a086e57a5857eae2cf71a555b2e0d694e53f2f1300158053efc491c6f2c60e1ce828c90b086d125a2142139ad469825cabc62f7f49639e8ea488173",
      "f9266618e6f1acca1c65469ad0543e5554dd58d5b632548867100461f21c756c873f79fd82d031050000",
    ],
    [
      "ETag",
      "ePV09DCjCMP8e2cVuNKkow==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:16:59 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-90-1625184933653"
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
      "416f82401085ffcbf45848549454120fd0103521a6a57a328d5961a02830dbdda52d25fcf70ed4438f3dedce9b6fdebed90eae459d8207e7227f6f50b577399ae7e112a36e4aa3f990546b040bd0889cc90bf9c1f74c6ca4eb67ee7c7dbffffa1095bf5a31a19337ac04781d640596a906efd8412d2ae4b1d3498d8e8c99560eca76b70fd761cc4245e920ec0e51e4075108bdf5674c5eff35f2da5b1ced1c63860aeb04871452d10513b31d16d4a29225da9a1a95a086111e1bb9a2460a4564b3622f27f6d49d2da60ff3a5e3b80b87c19212610aaa993dbc703630644419d327ef0713b8d5416b503f2962738de9adc38e8f34bc6b388f510d5a9008fea44d617eebfe0780f822f381010000",
    ],
    [
      "ETag",
      "joABz2aHp6Af64G+TxvamA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:00 GMT",
      "Server",
      "ESF",
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
      "8b08000000000002ff1dd04b5283300000d0bb645d3b110a823b09df60b1a58d15360c9f502903868420e078773b1ee1bd1f90972515221bbf5ada8367b0e48ab92db721332ceb7a6b8b03f77359d0431898b94b505a0e09d60644ec7479e746fcb946d9f15559e069357a563bf315937eeaa2a7f59c14080d6d18fbd06e7469748182abc6a69e92b9c4f3d7f391fb785f74d2845a3040c7fae6dadb7a3326825d35ad5488260c9970fa1ac5f294ae4a64675dc57bc63ef87e27dd876467751d11717b996c4f8413267a30c7ec282e8343217d741945b2ae493cea0619c4f8220b8b810da0336b38155973e7aa9a696ec0bf3d1b1746ef0116cd39e5e0f70f199bcd261a010000",
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
      "Fri, 02 Jul 2021 00:17:00 GMT",
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
      jobId: "grouparoo-job-91-1625184933653",
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
      "02ff85535d4fa34014fd2b64f6d5b6b494169a346b53519bb4d405aa59371b324c2f384a1964861a63fadff732585763a24fcccc3de79e733f78210fbcd892094978f65843f5fce35e24e48480a219bee691280a9e3fdab7d12ddc84175757d63ec8a65344f08625e9aecca123455d3190934dd8cd2a5197b412a283893a6ebfd31f0decbe33742d6b645bc89390a74b5e3c20fb4ea9524e7abda376371322cb81965c7699d8bdbdf7f6835e59897b604af63e4af65045f6be16fd990b461517c57413a2815a4215c38ef21c2dfc676e93d38fa9bb9ceeba1982f79c01654cd4856a6c610a268a946775a5b392c90bd136df1d48e82dbd79643091d7bb222ee80e4e8c2d553456cf2518e7c17a652cfcf375b09a458bb51f87f34b6f35ebced7cbcdca0f8d9b4b2ff00c45931c34d7981aa7fae6e305f5b720152fb47ad43c37caaf0d5a7c1e4b434069096d301e9b23da774c374993314b1dcb4e521392c449c636b51293b943186e13a0c8d3a29a450b518c1de6b2719fc57dc71ec543ca86b1ebd0719cdaeed01ad1a169595b7238214f155770c66529246f3b446e8245e4c551b0f1e7b3c8d325a4b4ced5596bac29e0bd47850522e88b9a0e4d940b546adabdf0232f98cda3c5b5d74e78091965cfe123ce38a5b90444d30a9ba7a05a892d368cf8b3957786603db1ab635092c99f17d2f4bc71f1aee56ff40807d8d855fa4bc22858f817dace11714df35a43f6ed819468f90e6b43d787bf88c4256db3905f1b2ff84ddaa70052a8a060df4f13c13af0edbf765c7cc4e2eaa38c5478c7dd61b2116115b43bc475b92ddb3607a66dba44832bf529361af48f5d6b7234196107857aada85d7c2cb415abe51b0883387e5f77ebf00fcbbcb3a778040000",
    ],
    [
      "ETag",
      "lTonnilq5ZTZeWSGPP3vRg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:00 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-91-1625184933653"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d925b4fc2401085ffcbf85a22d70a4d78288a4a522e9662348690653b8542dbadbb5b0d21fc77672ba251137d6967a6df6ccf39ed1eb671168203cb78f55ca0dc9dad50df99c24755245ad12d179942b000355b11a9bddee89c8fb70f77dcf7a3ba3f761fef83d76e9708c5d7983270f610c598840a9ca73d642c455ae32229d26c517616e85d6e86d3c01f8c6ea84f4568fad1ccf3dc9ed78783755a0c99668b92ffc7dafc60c1462c7d8c5062c6d168c9a5d820d7036353b1344fb0a24421392a28e1f2c14a8a226752880a4d2a9d5aa566d75bb576b3d368d8ad068189e04cc722237636257da08566892f5ec925d804c8b224c351797da1711c96464c39180576b3d4f7152069519ce0e26f90f4ae197d860fec18c1778ea5a2c8f489baf6c6ee6fc751a69f475db941ff07a13425754282c1b03f0ddce1c470f3a3f7de4ea39a4841412a3419d6aacd76ebc2aebec77a294cd4f41e47cb022de08cfe8edb588313b144e1e10da7d431227b020000",
    ],
    [
      "ETag",
      "tLBN/cOkXQcRRf2ROAYVTw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:01 GMT",
      "Server",
      "ESF",
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
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-92-1625184933653",
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
      "02ff85547f6f9b3010fd2ac8fba795f213924022455dd6b036534a32425a75d3941873503704536c3a5555befb0e68da66dd5a0909ec7befdebbf39947b2e1494006c4e7d15d0ed9c3a75be1931a014523dcbd1bf5d3cee6daff36673fc6eef9782323d71b0d8788e0054bd26d1a435d8a3c632007cb4523ca449ed24c883a26aaf7f57abba777db56a76f18bdae813c097138e5c906d9374aa572d06ceeb51b9110510c34e5b2c1c4f679bf79af37d34cdc0253b27928d94415d97c5ff424168c2a2e92e17281067209d90ab694c768e18519f89f0f533738dd362204df730694319127aab085299848421ee55999950c1e4969f3d50759d853fbd4d34e674bc73b5ad36d415e1f6b546aab5506328f554d5b634d218f61c58375154937da577776811174704325c8b576756ebbb6a6ad03aa60ad0db5136de48cb543f2c4d1968e632f3cede8e4583b7367cbb9f6e5fa0083ae03908a27a5678ffa31147e9fda3a797b9805812af450055766ab47db56abef87bec942cbe8fa610b7cdff2cd2e35fc16eb77a013f84091a78aec258b26223199efeb9669b29ed90d02c30c8c900578304668d200984575063d0b74b2ab91df195730e632159257bd2557eec4b3579ebb744e479e5d961152ecdfb8325714f1daa7c22211f44e5dbb22ca052a150735713cdb1d9d7a934bbb9a8d2944943d2cee703a421a4b4034cde81614641722c0a691f96c31f126336734454679e0f33d4292c1cfc71782f790965d56e59b8c8b0276af125ed2382f01f7d507d15b7aabdec2f9ed92ddaef6ff4c23d71d5da33acd32faf0570c2bea750afa3f744a7cb9aa9cee75dba4507b7671b0ea91ddaf1d3e358297abd222df97b67b4daa2d1742c820611fcf1382cbc087ff88fd85452c5e5994910ad738bd4c16222c836a8af9b6345fb2bb2dbdad5be51f46d14cbd891996be3fae22479111b690a8a78aaa0b5bb6ad08e5f21984411c3e67e29c61f40f3bae0bea30050000",
    ],
    [
      "ETag",
      "qA9p4kYbJPcZDRHDksgRTA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:01 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-92-1625184933653"
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
      "8d90514fc2301485ffcbf5d12d1126444878005d1043884c5013b390d25de660dbad6da75996fd776f070f3efab2de9e7da73da70d9cb2328131ecb3f4ab425d5fa568d76e88d054b935bc282a0d82076845caa4dabe4d870fef79ffb5d4d7f5482622983fad2713268cfcc442c0b8814386796260fcd140290a64db6ea7bb1319b3b572ca62b509e761c44241891356dbe5723a5b86d07a7f6ceaf42f4bdc7a70a47d8407d4584a742994a6234abb70058d28548ebea14a4b34d0c1dd8f5453a58426f259f1477dbf37ec0f7a77b7a320180e02067392c2665432bb7de16c60c98a3ca21fee073d06743772d543f7fdee64d7e132c56d7c31cd6a8be659132730e82ebf3907b92717ce7268ab2bf4400a7ec9c7cc9ef7ed2f5a89ece4a6010000",
    ],
    [
      "ETag",
      "pUWA6DXl2Vnr+y9cda3GJQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:01 GMT",
      "Server",
      "ESF",
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
      "ff",
      "1d",
      "d0",
      "dd",
      "96",
      "42",
      "40",
      "00",
      "00e07799ebea8488bd33212df29be4c611d30f0ec35066f6ecbb6f671fe1fb7e405e1488906cec6ad4822f40735e59152b0bcb10deefd52cfab7ded127c9706115ad4fd145f037249147d1e1dec7e9655657e8e1876a27a44afc6d3d2b8ceb49b98defe6e3bd93a743792601bb3ced8225d4e5456fe305fda9cb6cbee1c44e382c6d18b16b1d5b4348e21b0ab57dba4d55233355aedd89348546abeab26e7669bbc44bb76fe6a0ec26ad395b56e054ae2f9778cf0d1a2b4c27aabe253624a796c77a57983acd7d4772429f86c789c1f54b981b5a830540337e0e8864cf0f5710156501feedd94831fa0440940f6800bf7f4982c5061a010000",
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
      "Fri, 02 Jul 2021 00:17:01 GMT",
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
      jobId: "grouparoo-job-93-1625184933653",
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
      "000000000002ff85536b6f9b3014fd2bc8fbd8262181340f295aa394b64809590969554d1332e642dd0266d8648baafcf75d4cd3b59bd47ec2f63de79e731f3c93275ec4644a229efeaca1da7f7914113925a0688aafeed5839d9b6a7db24eb7f7bbfdef6b7972226f663344f08625695e66d091a2ae18c8e976d34d2b5197b412a283893a13abd33f1b0cfb637b625967430b7912b264c98b27643f2855ca69af77d4eea642a419d092cb2e13f9eb7b6f37e895957804a664efbd640f5564ef63d1af9960547151ccb61b34504ba842c829cfd0c25f661c9dbf4fdde534efa608de710694315117aab185299828129ed695ce4aa6cf44db7c73201b67e92c028389acce8bb0a0399c1a31553454fb128c4b7fbd325cef72edafe681bbf6c2cde2da59cdbb8bf572bbf236c6ddb5e33b86a251069a6bcc8c737df3f082fa3148c50bad1e34cf8df24b83dcffc7d210505a421b0c47e619ed8fcd49944423968cad6194981045e36834a45664b2890d761c01459e16d52c5a88c2ec8f6380c9209c806d877664d9e1d8667168c188527b105be668480ea7e457c5155c70590ac9db0e913bdf0d9c30f0b7de621e38ba8484d699ba688d3505bcf5a8b040047d50d3a18972814a4dbb5d2f70fcf922706f9d76c24b4829db6f7ee28c139a494034adb0790aaa9588b161c49baf9c0b04eb897d3b0625997e7f264dcf1b176f5afe4a0f70808d5da5bf6413f8ae77a5ed1c11b734ab3564d71e4889961fb036747df881485cd2360bb9d93afe3d699f7c48a082827d3e4d04ebc0a7ffda71f1118bab8f3252e11d7787c9468455d0ee10d7e5b6eca139e84ffa7da2c195fa3736306df3d8b5264793117228d44b45ede263a1ad582d5f4118c4f17bba5b873f0f94dc7d78040000",
    ],
    [
      "ETag",
      "IGh4m0tO+OgUYvyxHs++sQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:02 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-93-1625184933653"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d92dd6e82401085df657a0b8956a44ae285b65a6dfc07639ac6981506c5024b77971a35be7b67a9b54ddba4bd8199e19be59c0347788ed2001c5845eb971cc5fe6a8d6aa28b29ca3c56926e194f258201a8d85a9387394ed8e3888d0ed58edbee761fe696b56b348890fe061306ce11c208e34082f374849425486b3e8ff3245d169d016a9fe9a1eb4d7bc37bea131ee87e38ebf79bad7e1b4ec66531608a2d0bfe1f6b8b93015bbe9a628802531fb5964cf02dfaaaa76d4a9664319a92e7c24709055c3c580b9e674c706ed2c4ac57ccb27d5d2dd7ac7aa562572b04c6dc672ae229b13397f481e28ac553be23976013208a920c87c5f595c6515018d1656fe8d956a1ef2b40d2c228c6e5df20e9dd30fa0c1fd83982ef1c4b789eaa0bd5e98f9abf1d47997e1e75d7f4da3f08a928a90be2f5066dd76b0ec69a5b9cbdb7f60ae558700a52a2ceb05cb26ad51bbbf41eeb2dd751d37b1c257234c067f4777423054ec86289a7372b312f237b020000",
    ],
    [
      "ETag",
      "bzWeQaYOaOz5FSEHHJW44w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:02 GMT",
      "Server",
      "ESF",
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
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-94-1625184933653",
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
      "da",
      "30",
      "10",
      "fd",
      "57",
      "22ef9756e323df04a4aa63345b3341e84268d54d133889435d429cc64e2754f1bfefe294b6ac5b2b2191f8bd77f7ee7c9707b4a679820628a2abbb8a94db0fb72c422d44045ec1e9b976e9c6df7a93e2a3a1cf9c2d49d6b63d1e9e9c0083d62a8e374546da9c55654cf8603eebac4a5615b864ac0d81da7db3add9baa53966df306ccb001d27593aa6f91ad43742147cd0edee7377568cad32820bca3b31db3c9d77eff56e51b25b120bde3d4cd9852cbcfb76d2d38cc55850969fcc6760a0e2a45c900da61958785626d1a7c3d01d8a379d1590ef694c701cb32a17b52d0811b33ca5abaa9451d1e001499b2f1ed0cc1dbba350194de77e78b4c49b5abc3c563057168b92f02a132d650935a534230b9a2c1ba4582b5f82e9041070708339e14be5eadc0d5c45597201ee96ca8972aa0cfd33e550edf9cadcf7dd59a81c9d1e2b5f83e9fc42f97c7dc001db09e182e6d27488a38cd4861ffbeabdbecd5a80059868c0454fb5b1e6a8fd288d7a71ea185694aa248a9ca867612352e3be49cc24221874a28e2e553867798f1880e84edfd4edd472121b2786696a6adfea9bb61627aaa163237552b46ba1df2515e48cf28271da34175d055ee82ec260ee8f86a12bcb483134f0ac315717f1d2a7802281f4465dbb1aa50c32d537e5f9a11b0c47a177e936c331262b1c6f6777301e29ce3801362ef18608524e58024d4317d399177a537f380685bcf18b3d83a3c1cf876741b82d649785fc47a137813b1a4e2ea4873de912679564dd370f485775b5adea6dcd0a357da01903cdeca8aafa03ed76adff071f06c1f01a0ce1b2c4dbbf3028d2366bf93f",
      "b24abe7c6bccef5d68a8cef6e4e9e0cd46bb5f3bf8b5102c5c930b7d9fbbc1356a8e02929292e4f1fb23066409bcfbddd82f3170618d210d2c84a030d031af93c42569069b6ea479a9b6545def991692e452bcc21cabbfbfc13a461d916c482e1e2b6a9658b6ad862afe440210e6d1f7fcaf80fe011bab010f44050000",
    ],
    [
      "ETag",
      "H1VEcJ7Mp+32S8yedk66LA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:02 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-94-1625184933653"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d90416f82401085ffcbf40a691131d5c4436d4821b1b6c57a6a8c5961a020307477d110c27fef2c7ae8b11776f6f1bdddf7b687535e27b080639efdb428bbbb0cf5871922546da9152f0dd50ac102d42263d27b0b7789708a209c6c2feef955ddbb41992d974ca8f81b2b018b1ed21ccb44c1e2ab875a54c8b6c3418e2732a6bbc628e1e6d37ff123162a4a8cb0d9add74fabb50f83f5c7d69cfe65d90f1614748c304589758c264523a9c05887a6a0125553a2ada895312a18e1f14726a96d8424b259b1e753db994d3ce7713a77dd99e73258522c744e35b3bb2d67034d5a94115db81f380cc871e4aae9f83d8fb2e9709bf6c3fe665a751ad5bb244ea0d05cfe700df24c269ce6d05ab668412cf825835c5ff7c32fab29d139a6010000",
    ],
    [
      "ETag",
      "5OIUda1jHI2Sw3vMs/3Hlg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:03 GMT",
      "Server",
      "ESF",
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
      "8b08000000000002ff1dd0516e82300000d0bbf45b8c54ab747f4284094d616682f243baaeb06ad762610831bbfbcc8ef0de0330ce45d755bdb90a0d5ec0c4209ef379d27abedf5cc6657926df17759275e81207e9984f5288a020f7787014f67b1519ecf1cc5554b34459bfcc0a94c1cf53e25ef390d7dec6657065d0e2d896669b4ca47d7b1d77b461aee18bdbfad89dc67d44b0b8d5e9d860e58636eb29a75307ed8ebc67cc41431ec2205f87268e23ad36451f38bafaf1697b17e86c3eb69eaed333adca941eb23dd2268c0638602856f96d2438fd6af8ee1e30191d2e525a0666408cadb4a2abe493bb4418cfc0bfbdeaa7563c037cc1acb0e0f70f8afd983d1a010000",
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
      "Fri, 02 Jul 2021 00:17:03 GMT",
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
      jobId: "grouparoo-job-95-1625184933653",
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
      "64f6d5b6b494169a346b5351bb69e90a54b3d96cc830bde028659019ea1ad3ffbe97c1ba1a137d6266ee39f79cfbc133b9e7c5964c48c2b3871aaaa76f772221270414cdf0f522bdbdcaeef63ffe6eae220bb20773bdbfcf67d3292278c3927457e6d091a2ae18c8c926ec6695a84b5a09d1c1441dd7eef44703bbef0c5dcb1ad916f224e4e99217f7c8be55aa94935eefa8ddcd84c872a025975d2676afefbdfda05756e20e9892bdf7923d5491bdcf45bfe78251c54531dd8468a09650c5b0a33c470bff99dbe4f47dea2ea7bb6e86e03d6740191375a11a5b98828922e5595de9ac64f24cb4cd3707127a4b6f1e194ce4f5ae880bba8313634b158dd55309c679b05e190bff7c1dac66d162edc7e1fcd25bcdbaf3f572b3f243e3e6d20b3c43d12407cd35a6c6a9bef97841fd2d48c50bad1e35cf8df24b83161fc7d210505a421b8cc7e688f61dd34dd264cc52c7b293d484247192b14dadc464ee1086db0428f2b4a866d14214cc1ef5b7488e99935af170cc46311dba4e9c98e0423a66e391db278713f2587105675c9642f2b643e42658445e1c051b7f3e8b3c5d424aeb5c9db5c69a02de7a545820823ea9e9d044b940a5a6dd0b3ff282d93c5a5c7bed84979051f6143ee08c539a4b4034adb0790aaa95d862c3883f5b796708d613fb790c4a32f9fd4c9a9e372edeb4fc951ee1001bbb4a7f4918050bff42db3922ae695e6bc8be3d90122ddf626de8faf00791b8a46d1672b5f1825fa47d0a20850a0af6f53411ac035ffe6bc7c5472cae3eca488577dc1d261b115641bb435c97dbb26d7360d943876870a53ec4c6d6e0d8b52647931176",
      "50a8978adac5c7425bb15abe823088e3f775b70eff009dda1aad78040000",
    ],
    [
      "ETag",
      "GfhQgjvJxUQT3egq0OvklA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:03 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-95-1625184933653"
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
      "0000000002ff8d92414fc2401085ffcb78b42420b442130e05114800a5142f8690a59d4271dbadbb5b0821fc77672ba25113bdb433d36fb6efbdf6082f4916810bab64fd5aa03c5cad514f4de1a32ab85674cb45a6102c40cdd64472678add7d1c54bdeb7cb07b9292f56d6fda6e13a1c20da60cdc23c409f24881fb7c848ca5486ba1e0459a2dcbce027dc8cd7016f8c3499ffa5444a69fcc4723af33eac1c9ba2c464cb365c9ff636d71b2602b563ec628310bd168c9a5d862a887c6a66269ceb1a24421435450c2e583b51445cea410159a545a76a5e6dcd8b566a355af3b769d402e42a61391113b9f913ed04233ee8b3db9048700599664382eaf3b1a275169c494c349e0344a7d5f019216271c977f83a477c3e8337c60e708be732c1545a62fd4fde8c1fbed38caf4f3a83b2fe8fd2094a6a42e48301cf76681377e34dce2ecbd73d0a81ea5a020159a0c6bd546d3be75aaefb17685899adee36a59a00521a3bf6390687063c6159ede00e7e2175f7b020000",
    ],
    [
      "ETag",
      "l6QeCwfT0A+pHvVrraG5AQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:04 GMT",
      "Server",
      "ESF",
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
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-96-1625184933653",
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
      "0000000002ff8554614fdb3010fd2b91f705a4d2a66d92a69510eb4a189dba14d21484a6a975d24b312471663b4c15ea7fdfc5a140c70652a4c4bef7eebd3b9ff348ee59be220312b1f5af12c4e6d31d8f488380a26bdcfd76fe506e8a3e7537bc9d8d2efbe21cb83d3c3e4604ab589266450a47929722063998cf9a6bc1cb820ace8f30d151df396a3b1dbbed5afd6ed7b1bbc89390261396df23fb56a9420e5aad9d7673cdf93a055a30d98c79f6bcdf7ae8b40ac1ef2056b2b52fd94215d97a5ff424e531558ce7c7f3191a282588056494a568e185b98a3eefa76e329a35d7087e6031d038e665ae2a5b9822e679c2d6a5d059c9e091689baf3ec8cc9b78a3d0184de77e78b0a459455e1e1a541a8b850059a6aa612cb1a684a5b060ab651d29ee8db360fa1d23e8e0964a904be3fadc0b3cc3d8e5308e8d1363e89f1afbf4b16fcc7ddf9b85c6c1c9a1f13598ce2f8c2f377b18f4bd02a958ae5d87344aa172fcd4d8f1dbe3ac0854a18b3ab8e8990e6dbb663f4aa25e9cb85d3b4a4c882237ead9b41b9971df026b1501459eaab26b16cd790eb6eb765cc7367bd4eeba516483134312593698a6637656bd04ac36b55664db20bf055370ca64c125abbb4bae8371e82dc260ee8f86a1a7cb482876f0b4365715f1daa7c22211f44e5ddb2aca382a554735f6432f188ec2f195574fc704d634decc7ee17c24349580682a68060ac477bec2a6918be96c1c8ea7fe70820c7de4173b8424831f8f2f847053e82e2bfd266793e930742ced6007b9a269a9310ff50769376d446c1bff4f330c82e10d4a5321e8e6af1896e368fa3f14345eaf6a9bcf8aa452dbad3a7b2b876c7f6ef16910bc5bb516b99c7bc10da9b7024840401e7f3c4c08d6810f7f11bbfb8a58bcb1282315ae7174635989c402ea11669936afd9b6d9b12cbb4d3458a837319cb3dd595539aa8c9041ae9e2aaaefab6e5b152ae53308833879fed8ff8ad13ff08093592f050000",
    ],
    [
      "ETag",
      "JHvuyp9a8yo1mCQ9rHeo5A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:04 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-96-1625184933653"
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
      "50",
      "4d",
      "6bc24010fd2fd3631368120d2a78d012ac2052d37a1291358e319a64d2dd4945c4ffded9b5148fbdeccebe8fe1bdbdc2a9a87730806d917fb5a82f4f39f2c20e299ab664235743b541f00059e5a25c8493e4797e4ed343ef108fa69d65d49b703e1c8ac26407ac140caeb02fb0dc1918acae50ab0ac5b6d968b751647c692c329d7f26932415a0a29d05e6cbd96c349e2570f31e6ccde95f96f5cd83236d53dca3c63a439ba2d174c48ca7b6a0515553a26fa8d5191a706247e49ada4669225f10bf1ffb411c76835ea71f45713712614999e2826ad12e3f241b30b12a533a4b3f0845a0dd2855f7eefc76b0ed60a7c0457be4823f2eb4dcfa77e1f8c268de35493a8336d8cb3de42bd9e02c8558b7e841a6e497df0abebf6f3f2cdb1b62c2010000",
    ],
    [
      "ETag",
      "Q2GE+NwRRh8h6AI4U38Gtg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:05 GMT",
      "Server",
      "ESF",
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
      "ff",
      "1dd04b7282300000d0bb64ad8e4260a03b5143f8aa7c5aeb86092142a4d8183e829ddebd4e8ff0de0f2094b2b6cdbaef9addc01b9888622ee8c2138665951c8963fa89f09184f9b6d8396e82e352d198db3dd7d86649126cd0f343335bdf13796395589177a3df77752d699e2c83e93dba78153d5bf17eb5e678a587417420e7471a464c680754ca5db2756f481aeabc40f9f8850713c94b908d5d01879b2e7c51d18b1df03e3a6d1218c33e0ff52d14e5f5b4e2cda846b9098f8fb159a70535ec09b9c57d1850a51007a784b790554b07fa311e6c65ae5c19173d9801360a2e599bf11757d54c7306feed593709f60ab018914c82df3f3c1a67e91a010000",
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
      "Fri, 02 Jul 2021 00:17:05 GMT",
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
      jobId: "grouparoo-job-97-1625184933653",
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
      "0000000002ff85546b6f9b3014fd2bc8fbda3c49c8438ad628a169a6846c84b49aa609d9e642dd104cb1691555f9efbb98a66b55a9fd04f63de79e731ff04cf6228bc89830913c94501cbfdd4b462e08689ae0ad7f23f562ef2ccae382064ef7c7f13e9eef93c90411a262297ac853682859161cd478b76d26852c735a48d9c0448dd1a0d171bafdceb037b26da76f234f411aaf44b647f69dd6b91ab75a67ed6622659202cd856a727978bd6f3d765b7921ef816bd57a2fd94215d5fa5cf47b2a39d5426693dd160d940a8a100e54a468e13f336297ef5337053d3413043f0a0e94735966bab28529b8cc62919485c94ac6cfc4d87cf342b6eeca9d0516976979c8c28c1ee0c28aa8a6a13ee6605df99bb5b5f4ae36fe7a1a2c375eb89d5dbbeb6973b659edd6ded6babd767dd7d294a560b8d6c4ba34270f0fa81f81d22233ea41755d29bf3468f9712c1501a515d4c170d0766867d81eb1980d783cb4fb2c6e03634336e8539bb5f9a807bd8801459e11352c9ac9acd7637dc62208019c28ec511685cc1edaa1d319466dce9d281a8dc8e9823c1542c35ca85c2a517788dcfacbc00d037fe7cda6816b4a886999ea796dac2ae0ad478d0522e8939a4e55544854aadabdf402d79fce82e58d5b4f780509e5c7ed03ce38a6a90244d3029ba7a158cb081b46bce9da9d23d84cece739a8c8f8cf33a97a5eb978d3f2577a8003acec6af324dbc05f7a0b63e78cb8a16969208ff50bc9d1f21dd686ae4f7f11894b5a6721bf76aeff9bd4573ec45040c6bf9e26824de0cb6fedbcf888c5d54719a5f18cbbc35525c20ba8774898726b76bfdded0f6df3a56a5ae80fb191ed9cbb56e5a832c20132fd5251bdf858682d56aa5750f53bd9799ee9d6e91fd5d7317878040000",
    ],
    [
      "ETag",
      "RVotGk6GuyGaT62JyjfDkg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:05 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-97-1625184933653"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d925b4fc2401085ffcbf85a12ae059af0005ab50937a124268690653b2dc5b65b76b72221fc77672ba251137d6967a6df6ccf39ed119ee32c0007d671b42b501eae22d40fa698a12a12ade8968b4c2158809a45447afb5736e093f5ee71c2f3fab4cd766e3d8e7a3d2214df60cac0394218631228709e8e90b114698d8ba448b355d959a00fb919cefd9937bea33e1581e9c78be1b03f18ba70b22e8b01d36c55f2ff585b9e2cd88af50c43949871345a7229b6c8b5676c2a96e609569428244705255c3e88a428722685a8d0a4d26d576a76bd55eb34bb8d86dd6a109808ce742c32621773d2075a6896ccc49e5c824d802c4b321c96d7171ac74169c494ded8b79ba5beaf00490be304577f83a477c3e8337c60e708be732c1545a62fd4ed70d2ffed38caf4f3a89bbeeffe2094a6a42e88ef8ddcb9df1f4d0db73c7b1f1c34aaa91414a4429361addaecb4da76f53dd66b61a2a6f7385a16680167f477dcc71a9c90250a4f6f8e1dda217b020000",
    ],
    [
      "ETag",
      "IwxaBcObqXOcp2P7aqE2ig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:06 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `id` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-98-1625184933653",
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
      "0002ff85546b6f9b3014fd2bc8fbd26a7912202152d56529eb9052d21168973d941863a85b5ec5a65d54e5bfef629aae51bb564202fb9e73cfb9d7d73ca01b9685688c0216df56b4dc7cb8ce03d44254e0187687a7cb223c190d89bf9c553fcc7bf7fbe0cfc7f8e80810ac66719c16096df3bc2a09e5637fd189cbbc2a7099e76d48d43647edbea1eafd91660e06863e001ea7493463d90db0af8428f8b8dbdd6977e23c8f138a0bc63b244f9ff6bb776ab728f36b4a04efee4b76418577df163d4e728205cbb3237f01062a4ecb154d314bc0c23f66187cda4fdd6138edc400be63846242f22a13b52d4841f22c627155caac68fc80a4cd671f6861cdaca9a74ce7bee31dac715a93d7870ae6ca6a55525e25a2a5aca1a6882574c5c27513296e942feefc0c22e0e00a73cad7cae557cbb514655d837e55bdde802ac7cac43951f6f9b6a3f88e632d3ce5e0f8503975e7feb9f279b98701e321e58265d2b6878384d6961f3b6bbf3ccf9a8005d86882ab61cfc0fd51cf0ca26048a2d1400fa21e0d825130d4f120e81153a35a18500c3c5167972c9c41b3d44883212244071655431a993d63a86b5a1ff77110696a186ad85431dab6d07dc9043d61bcc8396bda8b2e5ddbb3569eeb3bd38967c932220c2d3c69ccd5453cf729a04800bd51d7b68eb21c94eab3b21dcf722753cfbeb09af198d11893cde2160624c209a780c6254ea9a0e5591e42d3d0f97c617bf6dc99cc8021cffc7c87e068fcf3e11fc1db14b2cb42be6b2d4393fa3bc0054e2a89b86b3e505f47db6debff2926ae3b59822c2e4bbc793dfdabf9255eae1a8b4f7aa856dbadd4bd9581b6bfb7f0b4105cac460b7df32d77899a2d9746b4a419797f90002c03effe1f769715b0705d41860b58c3d8125e8b909236e3cb52695eb2f59e6a18a6fcbb085c8a17b151dfdc9d539da3ce48539a89c78a9acb2adb56872afe0482204c9d633ba710fd0b8c7baefd2c050000",
    ],
    [
      "ETag",
      "7GYpdD87cUYLuZ9wRX3x+g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:06 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-98-1625184933653"
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
      "ffcb786d134b0b42130e6088622ad1551213d390a59d9642dba9bb5b4943f8efcc560e1e3c78d97d79f3cde6bd3dc1a1a85308615be45f2daaee2647f36a8540dd9646f3d550ad111c40237326db9d38567e5e7869f4f42cf0637097066a369d32a1931d5612c213640596a986f0f304b5ac90d7361bd5bfc898e91aeb2c57ef8b878560a3a2d41aab7514cde6d102ceceafb5e6f0af95f8ecc09eb602335458276853348af69898a52da865d594e86a6a55821a7ab81fe48ada462a22971d773276bdd160e88d8389ef8f863e832525d2145433bb7ee36c60c8c852d091fbc18001d54bae9af5e7776fdb0e57155bfdd7ccb3b3f8fae0bc33a85f14713a8d365830befd89794f36bae14a46b5e84022f99f1f0b0361264b8de70be5e963aac5010000",
    ],
    [
      "ETag",
      "uhRwm3gi1dLJMReX27d4rA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:07 GMT",
      "Server",
      "ESF",
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
      "00000002ff1dd04b7282300000d0bb642d0e42ada63b123e55d1e02f881b266010aa42868442ecf4ee757a84f77e00cb732e65aa9a1bafc107d0cc82e37cbc127384aed7ec481b9be59f976732f4aa522eb9c4c779a0cf4ed21f7c3d89e9ca309605da79c152dc125a369de609f19294bd6565deee99e1eb3545be980ce1692067f4cdfd99c4baa81fe42b11b6dac7a13d8db4c0dcbcbbdeb6ea9bf74db7289ef3e6ecdfc812f6f1b68f5061390ebcb66b330b362e5411e90fe6823d2ce75e1288f9acbee0706599a79365d1a6346a7cec6654edb14ce5006b1a76014672106e0446800fa26ab94cab17d79e423802fff65469c15f0188b396b7e0f70f74fc93df1a010000",
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
      "Fri, 02 Jul 2021 00:17:07 GMT",
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
      jobId: "grouparoo-job-99-1625184933653",
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
      "fd",
      "2b",
      "64f6ab2d2d2df691346bb7a23669a902d598cd86cc0c171ca50ccb0c1a63fadff732585763a29f98997bce3de73e78210fa248c8943091fdada17afe712f193922a06986af75d83ff32fb3a1b2fb4fabdbf33b27bc98ffba9acd10211a96a2bb32878e9275c5414db76137ab645dd24aca0e26ea4c269dfeb1e3f6c7c3c96070ec0e90a7204f57a27840f69dd6a59adaf641bb9b4999e5404ba1ba5ceededeed47c72e2b790f5c2bfba3a48d2acafe5af4672e39d54216b36d88066a05550c3b2a72b4f09f99b0938fa9bb82eeba19821f0507cab9ac0bddd8c2145c16a9c8eaca6425d317626cbe3b90d05b798bc8e232af77455cd01d1c5909d534d6cf255867c1666d2dfdb34db09e47cb8d1f878b0b6f3def2e36abedda0fad9b0b2ff02c4d590e866bcdac1373f3f182fa09282d0aa31e35cf8df26b83969fc7d210505a411b8c47bd63da1ff7262c65239e8e072e4b7bc0d8988d5c3a603d3e19c23061409167440d8b16b2a0e9908d9ca11bbb0387c54318a73173f8713c82f1888293f4792f21fb23f254090da742955289b643e42658465e1c055b7f318f3c53424aeb5c9fb6c69a02de7bd4582082bea869df448544a5a6dd4b3ff282f9225a5e7bed84579051fe1cfec519a7345780685a61f334546b9960c3883f5f7ba7083613bb3c041599fe7e214dcf1b17ef5afe468f70808d5d6dbe248c82a57f6eec1c10d734af0de4b13d90122ddf616de87aff0791b8a46d1672b5f5825bd23e0590420505ff7e9a0836816fffb5c3e22316571f6594c63bee0e578d08afa0dd2161ca6dd96ecf198d1df3a76a5ae94fb1",
      "89eb1ebad6e46832c20e0afd5a51bbf858682b56ab37100671fcbee9d6fe1f99b9371878040000",
    ],
    [
      "ETag",
      "uS1FNPg4s/1wLYGh2SHABQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:07 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-99-1625184933653"
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
      "6f",
      "82",
      "40",
      "10",
      "85",
      "ff",
      "cb",
      "f48a8956a44ae201ab560d5a453c348d312b0c880596ee2e6d8cf1bf77965adbb44dda0bcc0cdf2cef3d38c253928760c336899f4b1487ab18d542171eca3255926e05cf258201a8584ce462d87e588d5c7f91ed593f9c74cac9decc9c6e970819ec3063601f214a300d25d88f47c85986b416f0b4ccf24dd519a00e851e2e7d6f3cbba33ee3a1ee672bd7757aee004ec66531648a6d2afe1f6beb93017bbef530428179805a4b21f81e0335d63625cb8a146b9297224009155c3d88052f0b2638afd1a4d6e9d41ad675abd1363bcda6d56a1298f280a984e7c4ae96a40f14572cf5f82bb9048b0051956438aaae2f344ec2ca882ec733df322b7d5f01921625296efe0649ef8ed167f8c0ce117ce758c6cb5c5da8a17beffc761c65fa7954dff1073f08a928a90be28fa783a5ef4ce79a5b9fbdf70e0ae55c700a52a2ceb05137dbad1babfe1eeb2dd751d37b6c254a342060f4778c120576c45289a73746a9ac787b020000",
    ],
    [
      "ETag",
      "QF8YUHLTQmjaDdJ9uJj4mA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:08 GMT",
      "Server",
      "ESF",
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
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-100-1625184933653",
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
      "4fdb3014fd2b91f705a43e92a68fb41262a564ac5349599a82d843aded3ac190c6c176982ad4ffbe1b87021ddb902ab5f63de79e731fee23bae3d90a0d10e1c97dc1e4e6c3ad20a88698c609dc4eaeeedb53924be59d7c99af72415dfffc5b727404085eb2145ee729ab2b5148cad4603e6b245214399642d42151ddb1edbad36d751cafdd77dd6ec705a262693ce1d91dd06fb4ced5a0d9dc893712219294e19cab0615ebe7fbe643ab994b71cba856cd7dcd26c8a8e63baac7a9a05873911dcd67e0a0504c2ed81af3143cbc5057e4e37eee06c7eb4602e0074e19a65414992e7d410a2ab29827853459d1e011199faf7ea0993ff14791359ace83e86089d72579796861652d1692a922d5356b0945c53c650bbe5a5691fccefa144ecf21020e6eb0626a695d7df643df7ab95a5a3f0adb7699756c0d83536b3fcb38b0e641e0cf22ebe0f8d03a0ba7f30bebe47a0f03f6574c699e19f31126292b8d3f3578fc76ae25016b50ae828b9eddc58e67f7494c7a34f6dc0e896d4688477a1dec129bf6dbacbd220c034f97d90d0b6722630ef1bc98f4316ed9eeca758947dbd4c15d1851cbf388edf5a9cd1c07a36d0dfd925cb353ae72a178d56474158e237f1185f360348c7c53468ca191a795b9b288d73e351409a0ffd4b52da35c805239b17110f9e170148d2ffd6a49262cc17433bb87358971aa18a0b1c46ba6993c172b681aba98cec6d1781a0c27c03093bfd821141a7c7f7c21449bdc74599b6f348bc27170660cec1097382d0ce4a1fa8186397845db6deddf69866138bc06692c25defc118372baed92fe17098337a7cae64ed241a5daeed4da3b75d1f6e7163e35046facd2425fe77e788daaab90c54cb28cbebf4c003681f7ff2b76ef16c0f07241476938c3ee5255aa50c9aa1de66be3deb03b76cbebb61c64c052bf89f5daddddb0ca1c",
      "6546b666997e2aa97ab7a66f65a850cf2008c2ea05666edbdf9f66b04339050000",
    ],
    [
      "ETag",
      "LWq4Obprs8BJUdpoc3EMZg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:08 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-100-1625184933653"
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
      "02ff8d905f4fc23014c5bfcbf5758b6cfc1196f800862886a00e79504348e9eee660dbad6da72184efee6d3586475fda9b73ce6d7ea747d8974d06096ccbe2a3457db828d03eb92145d356d6f0a5a8310801a01505278b87d732bf342f8d1c8e2662795fab559c8dafaf3961e43bd6029223e425569981e4ed088da891d7361bed5fe4983d28a7cc16cfd3db69ca424d991316abf97c3c994fe1149cada9fdbf56d6a70076b44d31478d8d4447a134ed50da992b6844ad2a0c0db55aa2011ff646a1a955421385ac8451a7134683b81f0d7ba36e77d0ef72b222296c490d87574b86034b5654297d71418839a0fdc85d737f7eb2dcf325dc1479b6732ffef362e7ad7f1f9c1c2c9a474d8c67d091f586573f9c37e4d82d77b2bac500a4e08fbe2b2d24b9a80c9ebe016ec161e0c6010000",
    ],
    [
      "ETag",
      "gOZif/sYnc89BaSJmpU2dA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:09 GMT",
      "Server",
      "ESF",
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
      "00000002ff1dd0dd7643300000e077c975d78316b54beab4f487b693981bc78888205962c6d9d9bbaf678ff07d3fa0284bac543e728607f00a96c270d6e5fa2476ae4bda7e5b1deb336da3612fba2aa9949afcbe2f53c8e72fad93f383d82c096335b6f08c20a2f46ea4ec3bf6781b5c4b7c8892c4a8cb96cc96e4a9bbaf4c72944cd3b607e11401a9e126ebacb346deae69a1fb95ee5c9882774baff9dc7c24c87538557e3becb2d8e4f582c3c983019ad8c3bf784b6a7f66c878a8b0211ab11174d94b864e3aeebc9ceec57cb563719ba2e686e4a889e23d12e692c313012b8067412556397d7237a6e3acc0bf3d1f17819f012e2e2496e0f70f04c5ae761a010000",
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
      "Fri, 02 Jul 2021 00:17:09 GMT",
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
      jobId: "grouparoo-job-101-1625184933653",
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
      "fd2bc87b6d0209219048d11a25748d94900d48ab6d9a906d0c754b30c5265554e5bfef629aae55a5f509dbf79c7bcefde0193df03245534478fed8b0faf8e55e10748198c239bc3e9991b2af17e2d7243d2e8fd9687c77bb183ecd6680e02d4be27d55b09e144d4d999ceea27e5e8ba6c2b5103d48d41b5883de603c7406de6862db63c706a26445b6e6e503d0ef94aae4d434cfe2fd5c88bc60b8e2b24fc5fef5dd3c0ccdaa16f78c2a69bed73441469a9fa87e2d04c58a8b72b68bc04123599db03de60578f8474dc9e5fbdc7d8ef7fd1cc0074e19a65434a56a7d410a2aca8ce74dadb3a2e933d23edf1c50e4affd456c505134fb3229f19e5d1829563851c78a1957e17663ac82ab6db899c7ab6d90448b6b7f33ef2fb6ebdd26888cdb6b3ff40d8549c134d7981997fa16c005f45326152fb57adc3eb7ca2f1d5a7d1c4c4b0069c9ba60e25a633cf0ac09c9884b33cf76486631423ce23ad826169d8cd828250c034f8b6a162e453926d8a38c66c9d87347c9c87149421c6c2536b62d97b8596a8d87e874819e6aaed892cb4a48de7508dd86abd84fe270172ce6b1af4bc87053a86567ac2de0ad47050502e83f359dda2817a0d4b67b15c47e385fc4ab1bbf9bf09ae5981ea3479871860bc9008d6b689e62f546a4d03014cc37fe12c07a62dfcf4189a6bf9f51dbf3d6c59b96bfd26318606b57e92f8ae270157cd376ce881b5c341a72e80ea802cb77501bb83efd01246c699705fdd8f9e14fd43d852c63352be9e7d304b00e7cfeb79d371fc0b0fba02315dc6179a86c5568cdba25e2bade8eed58c389ebb848836bf521e639a373dbda1c6d46b667a57a29a9db7ca8b4136be42b",
      "088230ff40b7ebf417f915e1b07b040000",
    ],
    [
      "ETag",
      "w/St3HCoZ9dyDyf46hWC2w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:09 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-101-1625184933653"
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
      "ff8d92dd6e82401085df657a0b8954a596c40bad5a49fc2be245db18b3c2a05860e9ee52438defde596a6dd336696f6066f86639e7c0019ee22c0407d6f1e6b940515e6c50dde9c24359244ad22de79944300015db103928e7f7c37ded4135d6bdd79770da9fb8c2ddb7db44c8608b2903e700518c4928c1793c40c652a4b58027459aadaace0055e67a38f73d77724b7dca43dd4f16a351a73beac3d1382f864cb155c5ff636d793460c7d71e4628300b506bc905df61a05c6d53b2344fd094bc10014aa8e0eac146f0226782739326a655b34ccbbe6c5aadc675bd6e37eb44263c602ae619c18b390904c5154b3cbe279b601320aa921c47d5f585c6715839d1a53bf1ed4625f02b40daa238c1d5df2009de32fa0e1fd82983ef1c4b7991a93335184d3bbf1d47a17e1ed5ebf8fd1f845414d519f1dd717fee77c633cd2d4fdebba54239139c9294a843b46a8d56f3caaebde77ac375d6f41e4789020d0818fd1ec3588113b144e2f10db479041c7c020000",
    ],
    [
      "ETag",
      "FySYHw0Zt4bDzvdOENIrIw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:10 GMT",
      "Server",
      "ESF",
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
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-102-1625184933653",
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
      "0002ff85546b4fdb3014fd2b91f705a43ed2a64d1f12625d09ac5249214d61689b5ac7bd2e86340eb10343a8ff7d370e053ab621556aed7bce3de73edc27722b9225e99348acee72c81e3fddc888540868bac2db6f8e7b16b9e73c7c181f2f7fdd4c5b9c9f76cf0f0e10210a96a2eb3486aa9279c640f567d3da2a93794a3329ab98a8dab09bd586db6c37baad9ee3b86d07890a623e16c92dd2afb54e55bf5edf8ad75652ae62a0a9503526d72ff7f5fb663dcde40d30adeabb9a759451f50f540f63c9a8163239984dd141ae209bc39a8a183dbc5297d1e7dddc3541d7b51582ef0503ca98cc135df8c2144c265cacf2cc6425fd27627cbef941a6ded81b86d67032f3c3bd055d17e4c5be4595359f67a0f25857ac0516c5450c73b15c9491f4d63a0e26a7184107d754815a58975fbdc0b35eaf16d68fdcb61db00ead817f64ed6619f9d6ccf7bd6968ed1dee5b27c16476667db9dac1a0fd25282d12633ea4510c85f1e7068fdecfb520508dca6570deb15ddae8dabd88471dc6bb4e3be236445137eab4a913d9acd782d632028a3c5d64372c9ac8a40d8ec3393496cd9ed3ec367b8c47bcdda03640afc53b8ecb1cd6711b1d976c2ae421131a8e844aa5126593c965300abd7918ccfce120f44c199c62238f4a7345116f7d6a2c1241ffa96b53448544a56262233ff482c1301c5d78e5928c6145d9e3f40ed784d35801a26946d7a0213b954b6c1a399b4c47e168e20fc6c830933fdb2214e97f7f7a25848fa9e9b236df641a0623ffc418d8222e689c1bc87df983d014bd92cda6f2ef348320185ca134cd32faf8470ccb715b05fd2f12066f4ea5cdad6483146adb5373e78453f9b9c14f85e01b2bb5c8f9cc0bae48791500870c12f6f13221d8043efeafd8be5b04e3cb451da5f18cbbcb54a1c232287758ac8d7bc36edb8edd69f6880167fa5dacebbadb6115398a8cb086443f9754be5bd3b72294ab17100671f57c33b7cd6f9b88b45139050000",
    ],
    [
      "ETag",
      "X36Pb6QfTwLFdxjS4ffM8Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:10 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-102-1625184933653"
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
      "85ffcb78b48d850242130e401a25418205121363c8d24e6b61dba9bbdb486dfadf9d450f1e3dedee9b6fdebcd916ce79994000c73cfba8513537199a677b8950d7d2683e2a2a3582036844c6e497986c5e2e97cbad5ce06edcdc9d365ef9349b4e99d0f13b16028216d21c65a221786da1140572dbe1a0ae8e8c99a6b2ca72bd0b1fc2888582122bacf7abd56cbe0aa173feb455e77fb5bc750e9ce818618a0acb186d8a4ad10963b3b40b6a5154125d4db58a51c315be16324575251491cb8adbf3fa6e6fd41ff6c68389ef8f863e93926261722a19de6f391c18324246f4c90b8207bfef7963506f14b1bb466b3c18dfff8c59901d6d389251353a100bfea7c7dc40900aa9b1fb0629bb709285010000",
    ],
    [
      "ETag",
      "za9PXxxx+lCeT8y/jP0nMA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:11 GMT",
      "Server",
      "ESF",
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
      "ff1dd04b5283300000d0bb645d3a08ed94b8239544a9a560112d1b26a4190c5008844fd0f1ee763cc27b3f8032c695ca86b6e20d78040bb5e09aad0fd241a81048b4ead0b9e2e62bdd10c73c5d3bf9f206675af2b0c55315ef51ea22db18f340e2483f04a3c2d7dca4ce9551f26cb991e98f429fd55137e938110309fcae2f7593387e6d73dcc66634a2a345b0fa2a17bbca69128662b765196176e4c5ee6d1398242f100d04ac61337fabae2fa3a700ea2dc98c79f7511745f9d9266e674089a7b1e74b7d925553a8e17589d5cd3a58e7d40fbdc8f0bc4b32ef376005b896a2e72a1377aebd857005feedd9b0487e0f409cf6bc07bf7f6762f8681a010000",
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
      "Fri, 02 Jul 2021 00:17:11 GMT",
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
      jobId: "grouparoo-job-103-1625184933653",
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
      "ff85536b6f9b3014fd2bc8fbda2424e44122456b96d23553423a208db66942c65ca853820936adaa2affbd17d374ad2aad9fb07dcfb9e7dc074fe48ee731999088a7870acac72f3b119133028aa6f8badb76e1f7e1db6e7bb8aeac6cbdf27f98d6fc613a4504af5992ee8b0c5a5254250339d9f8edb41455414b215a98a8d535ad5677d81b74edfed8b286030b8912b264c9f33ba4df2a55c849a773126fa742a419d082cb3613fbd7f7ce7daf539462074cc9ce7bcd0ecac8ce27aa5f33c1a8e2229f6e7c7450492843d8539ea1877fd4383a7f9fbbcde9be9d22f89e33a08c892a57b52f4cc1449ef0b42a7556327922dae79b03f19da5330f0c26b26a9f8739ddc39911534543f5588071e9ad57c6c2bd5c7bab59b058bba13fbf7256b3f67cbddcac5cdfd85e399e63281a65a0b9c6d438d737172fa81f83543cd7ea41fd5c2bbf7468f171303501a52534c170640e69d736c751128d58625b832831218aec6834a05664b2711ffa710414795a54b3682ef2516f64421f6898248328ecc78c8611ebd96142d93836935ed7a263723c230f255770c16521246f3a44b6de2270c2c0dbb8f359e0e812125a65eaa2315617f0d6a3c20211f49f9a8e75940b54aadbbd7003c79bcd83c58dd34c780929658ffe01679cd04c02a26989cd5350ae448c0d23ee6ce55c20584fecfa149464f2e789d43daf5dbc69f92b3dc001d67695fe123ff016ee776de784b8a159a521f7cd811468f9166b43d7c7bf88c42d6db2909f1bc7fb459a270f122821679f4f13c13af0f9df76da7c04e3eea38e5478c7e561b2566125344bc475bd0d7b605add8169130d2ed587d8b06f9fda56e7a833c21e72f55252b3f958692356c957100671feae6ed7f119f296d2687b040000",
    ],
    [
      "ETag",
      "jW1eZqBjWqPu3lOMSJ03Cw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:11 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-103-1625184933653"
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
      "0000000002ff8d92d14e83401045ff657c94264528b6243e945ab5b1d6dad244634cb3c24051607077d1344dffdd59d46ad4445f606638b3dc7b61038f5919830ff759fa54a35cefa5a8af4c314355e75af1ada2522158805aa44cf6aeedc580c2f4e5c60992c5feb98b4f32488f8e9850d10a0b01fe06920cf358817fbb815214c86b11e575512e9bce02bdaecc701ece469353ee0b8a4d3f598cc7fd603c84adb55b8c8516cb86ffc7daddd68207ba9f618212cb088d964ad203467a646c2a515439b614d53242050ddc3c4825d59590442d9eb4ecb6d3b2bd838edd757b8ee3751c26738a84cea86478316781a0498b7c462f6c133c066453b2e3a4b93ef3388b1b27a61c4d42cf6d047e05585b92e5b8fc1b64c12bc1dfe1037bcfe03b270aaa4bbda34ec697fddf8ee3503f8f3aee87c31f84d21cd50e094717c379d8bf981aeeeedd7bb0d6a8a6923849852644bbed763b875efb2dd70199acf93dbe96355a1009fe3dce320d7e227285db57cd26be0a7c020000",
    ],
    [
      "ETag",
      "9X1UCoTgwY3BfU+K4eqrBg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:12 GMT",
      "Server",
      "ESF",
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
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-104-1625184933653",
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
      "2591fce06130b614a5ae4d532407a718274d1fb20f589c4b3047b8236d14f9bf778138899bb69190e06e677666f7f67820372c8bc990846c7d5b4271ffee9a87a44540d235ee1a9adb3fcbbf7cfd1418a9c67b17aa75fd6b313a3a4204ab58826ef214da8297450462b89877d6052f735a70dec6446d4dedb5354b3735bb37300ccb349028204da62cbb41fa9594b91876bb3bf1ce9af3750a3467a213f1cdd37ef74eefe605bf86488aeebe66176544f70dd5e3944754329e1d2de6e8a014502c6143598a1e9ea971f87e3f7787d14d678de03b16018d225e66b2f28529229e256c5d167556327c20b5cf171f64ee4c9d71a08c670b2f3858d14d455e1d2a5428cb6501a24c654b596151094b61c9e25513c96f948ffeec1423e8e08a0a102be5e293e33b8ab28aa98495f2bd545503946365e44d94fd0caea72c3ccf9907cac1f1a172e2cf1667ca87cb3d0c5a8f414896d5c6031aa650997e6caefbfa4c2b029568a4092efbaa45355b1d8449d88f12db30c3448530b4c3be498d508d063de8c52150e4c92a7bcda219cf74d38ed4d8d63463a0daa6a99ba60de1c002ddeef706b16e52534bac6860936d8bfc2c988409133917ac6930b9f0ddc05906fec21b8f02a72e23a1d8c44963ae2ae2a54f894522e83f756dab28e3a8549d96eb058e3f1a07eeb9d30cc814d634ba9fdfe28824341580685ad00d48284e798c4d2367b3b91bb8336f3445467dea673b8420c36f0fcf84e03eafbb2ceb379954056c5f243ca7695903ee9a0fa2abbada56f5b66692edb6f5ef",
      "4c23df1f5da23a2d0a7aff470c2bb27a15fd2f3a35be5e354e77ba1aa9d49e5cecad2cb2fdb1c5a745f08a355ae4f3c2f12f49b3e543020564d1dbf384e03af0f6af62776d118c17177584c4358e6f242a95a880668cd9a6765fb34dd5d07b96496a70215fc5cc81ba3baf2a4795113690c9c7929a6b5bf7ad0a95e20984419c3ecff54e30fa1bca305abc38050000",
    ],
    [
      "ETag",
      "31I7PpXZHT3l1o4W06jxUA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:12 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-104-1625184933653"
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
      "0002ff8d90c16ec2301044ff657b4d24020141240e05452d5244dbb41c1042c8844d1a70b2c6764014f1ef5da71c7ae8a1177b34fbd69af1150e65bd8308b665716c505f1e0ab46f4ea4681a690d5f8a6a83e0015a5130f9d25749704ca6a74969bafb2f198f9683e5793c66c2649f580988ae9097287706a2d5156a5121af6d36ba7d91317b51ce99cd3fe2a73865a3a29d33e68b24799c2431dcbc5f6beaf0af95f5cd833d6d53cc51639da14ba134ed31b33357d0884a49f40d353a43032ddc0e0a4d8d129ac867c70f3aa11f0cbafd60188e7abd41bfc7a4a44cd8926a8617ef1c0e2c5921533a7341e832a05bc95df3f63cb5b62b71576ba7ff9a056eb6be3f38b95834af9a389e41972c1c767e724ec965b7dcc9ea063dc8047ff4736921ca853478fb063c9e3fb4c6010000",
    ],
    [
      "ETag",
      "O5pL1qLCvBis2jzlE9Y6Yw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:12 GMT",
      "Server",
      "ESF",
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
      "08000000000002ff1dd0c95283300000d07fc9b97494ea14bc1129140ab2048cf5c29490b2a484252c05c77fb7e327bcf7032e84502192a161948337b05c64754bb6a7568130affc343891bdccaba829348ebccccaa65c370e4323a1b3c355d4ede88e3bf142a49258743ccc0c56b5d9e071c4a5a79be132c1fc298b5e6a7fd0dfe57871ca0f8c300a2d17e234b46365ba8962edea2bb2f756a178d866b95368995847351e7d7a8c58e10a8d5fe36f3b9d049b4f37141a1a9452c561abec168619e46c4507c1ab73278ddd541d8d106629615f911f3c5baa3b5b2b2c653f63e66762830da0f7b6eca948ca0777f7aaaa1bf06f4f86a5a58f00482f3dedc1ef1fa0bdafce1a010000",
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
      "Fri, 02 Jul 2021 00:17:13 GMT",
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
      jobId: "grouparoo-job-105-1625184933653",
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
      "000000000002ff85536b6f9b3014fd2bc8fbb8269010f292a2354ae8c69a908d9056d53421632ed42dc1149b4e5195ffbe8b69ba5695d64fd8bee7dc73ee832772cf8b844c49ccb3871aaac3a73b119333028a66f87a6353f3f377b37653b11c5e1e2e839d77bd9ecf6688e00d4bd27d9943478aba6220a7bb6d37ab445dd24a880e26eaf42ca7d31bf69dde7830b1eda1632351429eae78718ff45ba54a3935cd9378371322cb81965c7699d8bfbc9b8f7db3acc41d3025cdb79a26ca48f303d52fb960547151cc765b74504ba822d8539ea3877fd4243e7f9bbbcbe9be9b21f89133a08c89ba508d2f4cc14491f2acae7456327d22dae7ab03d9ba2b77111a4ce4f5be880aba873323a18a46ea508271116cd686e75f6c82f53cf4367eb45d7c73d7f3ee62b3daadfdad71fdcd0d5c43d13807cd3566c6b9bef97841fd04a4e285560f9be746f9b943defbc134049496d006a39135a4bdb13589d378c4d2b1edc4a905713c8e470eb5638b4d06304862a0c8d3a29a450b51f427a3948e862c4a13cb8a06c3712f8ac18128b52643db4a7b2c85841ccfc89f8a2b5872590ac9db0e91ebc00bdd280c76fe621ebaba8494d6b95ab6c69a025e7b54582082fe53d3b18972814a4dbb3d3f7483f922f4aedc76c22bc8283b6c1f70c629cd25209a56d83c05d55a24d830e2cfd7ee12c17a623f4e4149a6bf9e48d3f3c6c5ab96bfd0431c606357e92fd98681e77fd5764e882b9ad71af2d81e4889966fb136747dfc8d48dcd2360bf9b973831bd23e0590420505fb789a08d6818fffb6d3e62318771f75a4c23b2e0f938d0aaba05d22aeeb6dd98e65dbfd894334b852ef6203db39b5adc9d164843d14eab9a476f3b1d256ac962f200ce2fc7dddaee35f04f3f4257b040000",
    ],
    [
      "ETag",
      "Y3a/+J/uEfoD6KyKRUIWMA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:13 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-105-1625184933653"
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
      "0002ff8d92dd6e82401085df657a8b8954414be205b6b635c19f2a9a348d312b0c88051677975a637cf7ce526b9bb6497b0333c337cb39070ef09ce42138b04ae26d89627f11a37ad0c50465992a49b782e712c100542c2672eb9ba328f74771eb51bc96a167cde7bbbadbe910218335660c9c034409a6a104e7e90039cb90d6029e9659beac3a03d4bed0c3a93fe90fefa8cf78a8fbe1ccf3dcaed783a3715e0c9962cb8affc7dae268c086af2618a1c03c40ada5107c8381ea6b9b9265458a35c94b11a0840aae1ec4829705139cd7685233eb56cdb42f2db3ddbc6a346cab4164ca03a6129e133c9b9240505cb174c27764136c02445592e3a8babed038092b27baec0f7dbb5909fc0a90b6284971f9374882d78cbec30776cae03bc7325ee6ea4cdd7a23f7b7e328d4cfa36e5cbff783908aa23a237e7fd09bfaee60acb9c5c97b77af508e05a72425ea10cd7ab36db5ecfa7baed75c674def719428d18080d1ef719f287022964a3cbe01c11017397c020000",
    ],
    [
      "ETag",
      "qT1OfnTOg7YrxudL5VVw0A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:14 GMT",
      "Server",
      "ESF",
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
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-106-1625184933653",
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
      "30",
      "14fd2bc8fbd2697998574222555dd6b20ea9251d219dba8712630cf30a38c1a65555e5bfef62966ed9ab52a480ef39f79c7b7d2f8fe89657299aa284e7db86d50f2fbe8904f510532487d3f2dcdc7a0bbcbdcf3edaaf6c47f9dc8daef3e36340f0962549b929585f8aa6a64c4e978b415e8b66436a21fa90a86fe251df1c59aee93913db1eb93610252bb20b5edd02fdab521b391d0ef7e2835c88bc6064c3e5808af2e97c78670d37b5f8c6a892c343cd21c8c8e133aa2785a04471511d2f17e0a091ac5eb192f0023cfca4a6c9ebc3dc034eca410ee03b4e19a15434956a7d410a2aaa8ce74dadb3a2e923d23e7f79400bffc23f8d8dd3f9328c8fd6a46cc9eb970691c66a5533d914aa67aca1a88c176cc5d37517d9dc1a6fa3f92544c0c15722995c1b1fdef9916f186ba9c0dddaf8dc606c33e3c4988567c6618a20349661e82f62e3e8e4a5711ecd9757c69b9b030c784f9954bcd2ce639214ac75fda3bbc19f97da128802275d7035c623627a789264c998669eed26196649e2256397d809a613873969c208f0549b5db34825aad1783271ed3135b19750ea9874424793311edb9ee531377598354ed2c44ed1ae87ee6baed819971b2179d761f4210a627f1547cbf07416fbba8c8c4017cf3a736d11bffa54502480fe53d7ae8d72014aed750561ec47b3d338b8f6bb09b96039a10f8b2dcc48460ac9004d6a5232c5ea4b9142d3d0d57c11c4c13c9c5d00435ffbd51e21d1f4d3e34f42fcb0d15d56fa1fc5c125dcd1ecf24a7bd883ae49d168d45df7802c6ce13eb6faa61b9bd6d4b4a7a633c0187f44bb5defdfc9675134bb0143a4aec9c36f312872e4b4f4bfa86abc7eebccef5d98a8557bf274f03642bb2f3bf8f510ac5da785",
      "de2ffde806754711cb58cd2afafc880158079eff7cec5719c0b0cca0036ba1384c3495ad0aad5937d9bcd4ee35dbc5b6637926d2e05afd11736c677f856d8e36232b59a57e94d4adb2ee5b1b6ae4130882309061109e43f43bab2452f44c050000",
    ],
    [
      "ETag",
      "mG1q8S0qwfZ3+34tEi5RVg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:14 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-106-1625184933653"
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
      "000002ff8d904f6bc24010c5bfcbf49aa0897fb0010f5a4215446c5aa1b488aceb248d2699b83b6911f1bb7736f5d0430fbdec3edefc66796f2f70ccab3d44b0cbb35383e67c97213f3991a06d0ab672d55459040f90552664bc0eb51ed9c389571dabdf66cbfee4b533198f85b0fa034b05d105d21c8bbd85e8fd02952a51d6b65bd3be28189f6be7cc972ff1639c8851d2de19cbf56231992e62b87abfd6eae3bf5636570f0eb44b304583954697a2367440cd7357d0aab22ed0b7d4188d165ab81d64869a5a19225f1c3fe80efd60180e8251ffbed71b0e7a4216a415e75409bc7e9670c0c4aa48e84b0a42288069a5744ddbf3b3b55d899bda38fdd72c70b3cdedc1e999d1ae0c493c8b2e597fd4fdc9f9402e3b4b27360d7aa0957cf42c6788525558bc7e0390d13be5c6010000",
    ],
    [
      "ETag",
      "EU2cc8sjqtP/scZHN4AX/A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:15 GMT",
      "Server",
      "ESF",
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
      "bb64ad4e850990ee0c583ea622a185ca260324fc14413e15e8f4ee757a84f77e409ca6a2efd9d05cc40dbc823996d026dd1c5a0de3bc32a8546b05fc26f5718bec481ea70efb36bbcb78df446e63b681c23b7dd6ea690cdf77b78cc3ebc9f249376398f86abb3eb8964a2f55a22615b64575afda6494ccc9118602f562d4656968782a7beb61c8b9e99ff08266df7117517e1e6bc8716f0667f2015d4e949ae64481a6db94065d7695d7cbd6c3b3bc8c065bf5acb304a1f02be2b591d96889af45afa9cb1b240e1df7f10bb506e6b3531863b002626acb4ef4ac7c726588d00afcdbd930b7e2198045dc890efcfe0140d526911a010000",
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
      "Fri, 02 Jul 2021 00:17:15 GMT",
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
      jobId: "grouparoo-job-107-1625184933653",
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
      "c8fbda3c20909048d19aa674cd94900d48bb8726649c0b754b30c5a65155e5bfef629aae55a5f513b6ef39f79cfbe089dcf1624b2624e1d97d0dd5e3a75b919013028a66f87a7f135a17bfb24bd87bb039b3fcb31f5ff7d67e3a45046f5892eeca1c3a52d4150339d984ddac1275492b213a98a863f6471d736839a66b8f0783a13340a2843c5df2e20ee9374a9572d2eb1dc5bb9910590eb4e4b2cbc4eee5bdf760f5ca4adc0253b2f756b38732b2f781eae75c30aab828a69b101dd412aa187694e7e8e11f759b9cbecddde574d7cd10fcc01950c6445da8c617a660a2487956573a2b993c11edf3d58184ded29b47061379bd2be282eee0c4d8524563f558827111ac57c6c2bf5807ab59b458fb7138bff456b3ee7cbddcacfcd0b8bef402cf5034c941738da971aa6f3e5e507f0b52f142ab47cd73a3fcdca1c5fbc134049496d006e3517f484db73f4ed264c45277e024691f92c44d460e1d247d36b6c1de264091a745358b16a270c174194bcd78649b696c0f2d374ec019c58e3d1ea6767fb875a9450e27645f7105e75c9642f2b643e43a58445e1c051b7f3e8b3c5d424aeb5c9db7c69a025e7b54582082fe53d3a18972814a4dbb177ee405b379b4b8f2da092f21a3ec31bcc719a7349780685a61f314542bb1c586117fb6f2ce11ac27f6ed189464f2fb89343d6f5cbc6af90b3dc201367695fe92300a16fe176de788b8a279ad210fed819468f9066b43d7873f88c42d6db390ef1b2ff849daa70052a8a0601f4f13c13af0f1df76dc7c04e3eea38e5478c7e561b2516115b44bc475bd2ddbe90f1cdb1a110daed4bb98e3dac7b635",
      "399a8cb083423d97d46e3e56da8ad5f20584419cbfafdb75f80b455ab27c7b040000",
    ],
    [
      "ETag",
      "qhS2FZgHewEeUB2NBXJw2w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:15 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-107-1625184933653"
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
      "30",
      "10c7bf4b7d744b98c0c0253c0c0525c2806d3c184348d96e63d8adb3ed5442f8ee5e27a251137de9ee6ebfbbfdefbfeec96356c4c421eb2c7daa40ecce5250731df8202ba6243e4a5e48200601455324edd93c383fbfcfd97cfdea59c3bba9ef59aedbeb2121a30de494387b9264c062499c873d29680ed8167156e5c5aace0ca276a52e06a13ff26e30cf79ac736f311ebbfdf1801c8c53634c155dd5fc3fda9607836cf9da8704041411682da5e05b88d448af29695e323025af440492d470fd2215bc2aa9e0dcc48a69353aa6655fb4ad6eebb2d9b4db4d24198fa8ca7881f022408144714599cf5fa43605015187b871529fcf58cee27a131d8ebcd06ed502bf02a82dc918acfe0651f086e27ff8c08e1e7ce768ceab429da8e178eafe360e4dfd1c75ed86831f845468d5090947934110ba9399e696c7ddfb3b057226383a29419b68355add76c76ebcfb7ac5b5d7f81d47890a0c1251bc1eb799224e429984c31bf011d1867c020000",
    ],
    [
      "ETag",
      "6PQS++YmlQbxN1FKORN1AA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:16 GMT",
      "Server",
      "ESF",
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
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-108-1625184933653",
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
      "0000000002ff8554fd4fdb3010fd5722ef1790fa91365fa51262a50416ada490a620b44dade33ac590c4c5764015eaffbe8b43818e6d489112fbdebbf7ee7cce33ba67c502f551c2960f2515eb2f773c410d44155ec2ee786ddfe1ef810a2fafbb627c2646c761f4ede9f01010ac62499caf32da94bc1484cafe74d25a0a5eaeb0e0bc09899a1db3d7ecb85da7d3b30f2ccb752c204a9aa52356dc03fd56a995ecb7db5bf1d692f36546f18ac916e1f9eb7efbb1db5e097e478992ed5dcd36c8c8f627aa47192758315e1c4e27e0a09454cc688e59061edea88be4eb6eee16c3796b09e047462826849785aa7c410ac28b942d4ba1b3a2fe33d23edf7da0893ff287b1311c4fc3786f8ef38a3cdf37b0346633416599a9863187a25296d1195bccebc8eade388dc6e7100107b758523937aebff9916f18db1cc6cfd2342d6a1c1983f0c4d8cd1184c6340cfd496cec1ded1b67d1787a611cdfec60c0fc824ac50a6d3dc649462bdb2fed0d3e9e6a45c00aacd4c19967bab8d3330f9234f148dab39c24356992f412cfc1566292039bda8b8462e0a92abb66e18217a6673ab84bbbc4f25c2fb5ec05ee3a6ea7875d82edc4ee919eedda9ee77868d3404f82297ac2e48a4b56b7185d4741eccfe2681a0e07b1afcb4831b4f1a4365715f1dea7822201f49fba3655947150aace2b08633f1a0ce3e0caaf4764449798ac270f302429ce2405341638a78a8a73be80a6a18bf124888371381801439ffbc5162151ffc7f31b215eaf7497957ea3d3d17810bbb676b0855ce1acd498c7fa03755a0e20368d7fa71944d1e006a4b11078fd470cca7135fd2f0a1aaf57b5cd574554a96d57dd9d958b36bf36f03410dcb05a0b5d4efde806d55b114da9a005f97c9800ac039fff29b6b716c0706f41472a58c3ec1259a91041eb1966b976afd98e69b9dd8e833458a80f310be6abf1765bab8c34a7857a29a9beb5ba6f55a894af2008c2e885417806d1dfb262155037050000",
    ],
    [
      "ETag",
      "Oy4jaKItNQW2rOGrLBNRHw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:16 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-108-1625184933653"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d90416f82401085ffcbf40a89801a25f1800d515b625a5a9b98869815078a024377971a6bfcefce520f3df4d0cbeecb9b6f36efed190e45bd031fb645fed9a23cdde5a89f8d8851b5a5567c35542b040b508b9cc9fe2c0c82ef4794c3b678785be7d1713d1f079309132afdc04a807f86acc072a7c07f3f432d2ae4b5cd46762f32a64f8d7116cbd77016c66c54b433c6721545c1340ae162fd5a6b0eff5a492e16ec691b638612eb144d8a46d21e53bd300595a89a126d45ad4c51410777835c52db084964b3633bbd91ed0cdd8133ea8f3d6f38f0982c2915baa09ae1d50b87034d5a94311db920b80cc84e72d7ac3bbf3adb94b8a9c4e8bf668e9925b707a7278dea4912c7536892796eef27e73d99ec9a3b69d9a205a9e08f9e171afc4c940a2f5743cb36a8c6010000",
    ],
    [
      "ETag",
      "4GEAAzKer6uiJVYgLwYH9A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:16 GMT",
      "Server",
      "ESF",
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
      "1f8b08000000000002ff1dd04b7282300000d0bb642d0e3f2d74170ada692822b505dc641c8840302140a4904eef5ea74778ef075c8a828c23965d4b387806cbc574d7c51a09c7f3aa461c100b0fb172cdaab48fd6be99037a8e0239769abea3aa42346a35d5dbefe16efff674ba326348fc7be16a43844997bd2ad334a5836a28919605fb052606ed5a6f688245621b5bbd03119c18e48cb2b0e29c6eabd6f03fe2faa676aa48b7a91d0431c34e29fc74a355b59513ae6c6e1d3799d09dbca4443a3985bc852fe1d7f4fd99c0932e0a7866754f6ff7492f4ba3193d7f1622ecfc924d57b0026416cd4046dc3cb8d6c67557e0df8ee522c823c02397810ce0f70f83b038d21a010000",
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
      "Fri, 02 Jul 2021 00:17:17 GMT",
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
      jobId: "grouparoo-job-109-1625184933653",
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
      "00000002ff85535d6f9b3014fd2bc87b6d0281909048d11aa5748d94900d48bb699a903117ea9660864da7aaca7fdfc5345dab4aeb13b6ef39f79cfbc113b9e75546e624e5c5ef169ac74f7722256704142df0752d3ce1de45a5dc5d2ecd7bbe3243f77b502c1688e01d4bd2435dc2408ab66120e7fb685834a2ad6923c400130d46d66c309ad8eec81bcf1c67e23a489450e61b5edd23fd56a95ace4df3243e2c84284aa0359743260e2fefe6836dd68db803a6a4f956d34419697ea0fab9148c2a2eaac53e4207ad84268103e5257af847cdd2f3b7b9879c1e8605821f3803ca98682bd5f9c2144c54392fda466725f327a27dbe3a90c8dff8abd860a26c0f5552d1039c19195534518f351897e16e6bac83cb5db85dc6eb5d9044ab2b7fbb1cae769bfd36888c9b2b3ff40d45d31234d75818e7fa16e005f533908a575a3dee9e3be5e70eaddf0fa623a0b4843e984cad091d79d62ccdd329cb3dc74d730bd2d44ba72e75528bcdc630ce52a0c8d3a29a452b51c1cc76613671922ccbad649cdb79928e523b81e96832f12cdb1e318f1ccfc89f862bb8e0b21692f71d2237e13af69338dc07ab65eceb1272da96eaa237d615f0daa3c20211f49f9a8e5d940b54eadabd0e623f5caee2f5b5df4f780305658fd16f9c714e4b0988a60d364f41b31519368c04cbad7f81603db1afa7a024f39f4fa4eb79e7e255cb5fe8310eb0b3abf4974471b80ebe683b27c4352d5b0d79e80fa446cbb7581bba3efe42246e699f857cdbfbe10fd23f8590430315fb789a08d6818fffb6d3e62318771f75a4c23b2e0f939d0a6ba05f22aeebedd9aee54c6dcf221adca87731c7f34e6deb727419e100957a2ea9df7cacb4176be50b088338ff40b7ebf81783f506e27b040000",
    ],
    [
      "ETag",
      "Io8o5jSlsOFA/kiC/R5XNg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:17 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-109-1625184933653"
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
      "02ff8d92414fc2401085ffcb782d0915a8d08443415414104af1620859da2914b6ddbabb9510c27f77b6221a35d14b3b33fd66fbde6b0fb04db2085c5826ab9702e5fe62857a620a1f55c1b5a25b2e328560016ab62292e597f77937dad4245fc6dcdb4e5a4f0ff6aedd2642856b4c19b8078813e49102f7f900194b91d642c18b345b949d057a9f9be134f0fba35bea5311997e341b0cbccea00747ebbc1831cd1625ff8fb5f9d1828d58fa18a3c42c44a325976283a1ee1b9b8aa539c78a12850c514109970f565214399342546852b1abad8aed5c36ec66bd55ab398d1a915c844c27222378362581a08566dc173bb2090e01b22cc9715c5e5f699c44a51353f64781532f057e05485b9c705cfc0d92e035a3eff0819d32f8ceb15414993e53378347efb7e328d4cfa3aebda0f783509aa23a23417fd89b06de706cb8f9c97b67af518da5a024159a10ed6abdd9b872aaefb97685c99adee36a59a00521a3dfe32ed1e0c68c2b3cbe0176046aa07c020000",
    ],
    [
      "ETag",
      "ap2JpCdj3rlbflAkQ9VK1w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:17 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `id` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-110-1625184933653",
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
      "00000002ff8554fd4fdb3010fd5722ef17d0fa91a64d9b5642ac2b81652a29a429acfb50ebb84e312471881da60af57fdfd9a140c536a448897defdd7b773ee711ddb16c85062862ebfb92169b0fb73c423544255ec36e765a4689205fbf07f36ef931b6c79df137eff2e808104cb1044ef384d6052f0b42c560366dac0b5ee6b8e0bc0e89eaad96596f752dbbe574faed76d76e0351d0241eb3ec0ee83752e662d06ceec41b6bced709c539130dc2d3e7fde683d5cc0b7e4b8914cd7dcd26c888e63baac7092758329e1dcda6e0a014b458d014b3043cbc5057d1a7fddc0d86d3c61ac00f8c504c082f33a97c410ac2b398adcb4267458347a47dbefa405377ec8e42633499f9e1c112a78abc3c34b030168b828a329135630945c52ca10bb65a5691fcce380d26e7100107375850b134aebfb8816b184b05fa599a669b18c7c6d03f31f6f99e6fcc7cdf9d86c6c1f1a171164c6617c6e7f91e068cafa8902cd3b6431c2554597e6aadf7f64415014bb05105173db38b5b8ed98fe2a84762a76d47b149a3c8897a366e4726e977686715510c3ca9b26b16ce78463b66b4ea5b2bc7ea59b86b75fad4c118f7ecc822b6e374b04dac762f6ef5d1b6867e174cd21326722e58d55e741d78a1bb0883993f1a86ae2e23c6d0c293ca9c2ae2b54f094502e83f756d559471505267e5f9a11b0c47a177e556e331a66b4c36d37b1890182782021a1738a59216e77c054d431793a9177a137f3806863ef38b1d42a0c18fc71742b8c97597a57e2bad6e47ebef0057382935e2a1fa402d1b6db7b57fa71806c1700eb2b828f0e6efe9ff9a5fe3f5aab2f8ac8794da6e65edadba68fb6b0b4f0dc1cdaab4d0e5cc0de6a8da0a684c0b9a91f70709c03af0fe1f62775b010cf71574848435cc2d114a8514b49a5f966af79a6d9b6da7655948830bf9266639ceeea0540e9591a634934f2555b755f74d854af10c82208c9deff96710fd039fe86ba62f050000",
    ],
    [
      "ETag",
      "nFublscJZRY6u+f5L4LXIQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:18 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-110-1625184933653"
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
      "0000000002ff8d904f6fc2300cc5bf8b776d254af9b74a1c60aa36a40a6ddde0b009a150dc52489b2e714115e2bbcfc976d861875d12ebf967eb3d5fe154d67b886057169f2deaeeae407ab1458aa69564f86b546d103c401205933419afc5fb6546324ec6cb431c1c56f3ee329d3261b2035602a22be425cabd81e8e30ab5a890c7b65bed3632465d6395c5f22d7e8c53162ab5b7c2729524b37912c3cdfb35d69cfe35b2b9797054bb1473d45867685d345a1d31a3850d6844d548f48d6a7586061cec1a85566d23b4523e2b7e10f4fc60d41f0693c17d188e8621935265824a5533bc7a6573408a844cd58503429f01ed4ace9abbf7cc72e8429c1d60bdfddd0b6c6ff3b370de119a67add89e41eb6c30e97dfb7c50d63b7126d22d7a90093ef4534910e5421abc7d011c10b35fc6010000",
    ],
    [
      "ETag",
      "t87VaZwAtlEL7NhE1hUByw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:18 GMT",
      "Server",
      "ESF",
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
      "64ed382822a43b3e22a2028aa4e08609180115051202b1d3bbd7e911defb0138cf09a5297bddc9137c0181e7709a4fb78d661845751cc6cbabf0547d974427cb2c935bb2875c23e143768397157525c396a32ec44cc6d230362de6fc9045cf62c4acdc2c8c7afd3c4bbacb63b3ff56499f8ac11fe8cacf787213893c5feeef5d6da0cd8a4ace8944427ebc3513450f3e17aea36cf51db6dd7a08a0d6fa0ec4eb3cd81595c7ae47daf311e1b7519225bdea08b70859f0caec383fabb3583f5c58dc45214a795c513fcebc70bf34eb5171421b4c00199baa2334ad3e5c59817002feed29130df904180477a403bf7ffbfeb7f71a010000",
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
      "Fri, 02 Jul 2021 00:17:19 GMT",
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
      jobId: "grouparoo-job-111-1625184933653",
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
      "000002ff85536b6f9b3014fd2bc8fbda84f0cc438ad628a52b5b423a20ada66942c618ea0e30c5a65557e5bfef629aae55a5f513b6ef39f79cfbe009fd667586162865c55d47dbc74fb73c4527884a5cc06b36f3be464c772ff55bdb0e38f7db3fdfc8c3720908d6b304ae9a928e04ef5a42c5621f8d8b96770d6e391f41a291611823c3351d6366cf2dcb752c200a5ae61b56ff06fa8d948d58e8fa517c5c705e9414374c8c09af5edef57b536f5a7e4b8914fa5b4d1d6484fe81eae792132c19af97fb081c7482b609ad302bc1c33f6a969ebecd3d66b81a1700be678462427857cbde17a420bcce59d1b52a2b5a3c21e5f3d50145dec65bc71ae16557d5498d2b7aa26558e2443e36543b0f775bcd0fce77e17615fbbb2089d617de76355eef36fb6d1069d7175ee86912a725555c6da99daa5b0017d0cfa890ac56ea71ffdc2b3f77c87f3f989e00d2820ec1643a71b1319bccd33c9d927c6639693ea1693a4ba70eb6d20999dbd4ce528a81a744150bd7bca6666e3bb66924f93cc3893d757132778899602737dd9995e6b6e1a2c3097a6899a4674c345cb0a143e83af4632f89c37db05ec59e2a21c75d29cf06637d01af3d4a281040ffa9e9d0471907a5bedd7e107be16a1dfb57de30e10d2d30798cee60c6392e0505346ea17992b65b9e41c350b0da7a67005613bb3c06055afc7c427dcf7b17af5afe428f6180bd5da9be288a433ff8a2ec1c1157b8ec14e47e38a0062cdf406de0faf00b90b0a54316f47def853fd0f014d29cb6b4261f4f13c02af0f1df76dc7c00c3ee838e907087e521a257212d1d9688a97a07b633b1e6966b22056ee5bb98ed4e8f6deb73f41969456bf95cd2b0f950e920d68917100461fe816ad7e12fbd7ae4477b040000",
    ],
    [
      "ETag",
      "d8EJSi/6P/j44NooIrzKcw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:19 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-111-1625184933653"
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
      "8d92614f82501486ffcbe92b6e918ac6e6074c331d59216e6dadb92b1c0c030edd7bc939e77fef5c326bd5565fe09cc3732eeffbc20e9ed322061796e9eaa542b93d59a1be334580aacab4e25b498542b000b5583139d8d8a3c96b273813037ab99fccfdfb56bfdaf47a4ca8e8097301ee0e9214b35881fbb08342e4c86b1165555e2ceace02bd2dcd701606e3e988fb9c62d34fe7beeff5fd21ecade3622cb458d4fc3fd61ef716ac69196082128b088d9652d21a233d363695c8cb0c1b8a2a19a1821aae1fac2455a590440d9e346cdb6ed8ce59dbeeb6ce9b4da7dd6432a348e8940a86e73316089ab4c802dab04d70189075c98e93fafacae334ae9d98723c0d9d562df02bc0da9234c3c5df200b7e12fc1d3eb04306df39915355e82375e9df78bf1dc7a17e1e35f0c2e10f42698eea8884e3ebe12cf4ae6f0df778f0dedf6a54b7923849852644fbb4d56d779cd3f75c2fc864cdef71b5acd08248f0ef71956a70139129dcbf019ddbabbf7c020000",
    ],
    [
      "ETag",
      "Dw1GJv7R2aDoqXJULX4Buw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:20 GMT",
      "Server",
      "ESF",
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
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-112-1625184933653",
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
      "30",
      "14",
      "fd",
      "2b",
      "c8fbd24a690221908754752ca11d5a4a3220adaa6d4a8c63a81b5ec5a65b54e5bfef629ab6e91e9590c0bee7dc73eef5358f68c3b2351aa190c5f7152db71feef210b510153886dd19497ef99be4f366685dcef5dbe9c5e4fc8b699d9e0282d52c8ed322a1273caf4a42f968e1b7e332af0a5ce6f909243ad1b4ee8966760d6dd01beaba69e840e43489a62cdb00fd5688828f3a9dbd783bcef338a1b860bc4df2f479bff3d0ed14657e4789e09d43cd0ec8f0ce3baa67494eb0607976baf0c141c569b9a42966097878a1aec38f87b9db0ca7ed18c00f8c504c485e65a2f60529489e452cae4a99158d1e91f4f9ea03f9f6d41e07ca78b67083a3154e6bf2ea58c15c592e4bcaab44b494151415b1842ed97ad5448a8d72eecd2e21020e6e31a77ca55c7fb63d5b79d95a29df2b55d58972a658ee4439cce2b8cac2756d3f508ece8e950b6fb6982b9f6e0e30607f4db96099341fe030a1b5f1a7063b7f9e6b4dc002949be0b2af9a581ba8c3300afb241ae84618a9340c0761dfc07aa892618ff6d621c5c0137576c9c219b44c373443eff6081e52e0a97dad6fea66a419d05c55d3bb3a35c36e6460b46ba19f251374c2789173d634195d7b4e602f036fe18eadc0966544181a3969ccd545bcf629a04800fda7ae5d1d653928d527e6b881ed59e3c0b9b29b2199d21893ad7f0f6312e1845340e312a754d0f2325f43d3d07ce63b813373ad2930e4c9cff7088e46df1e5f08c1b6905d16f28dfcc073dc0b69608fb8c24925210fcd07b20af08a76bbd6bfd3589e67dd80342e4bbc7d138372cc5e4dff8b84c4cb5563732fa9a15a",
      "6dbfea1eac4cb4fbb183a785e08e355ae8ebc2f66e50b3e5d188963423ef0f138065e0fd7fc5fede02186e2ee870016b985dc26b1552d26686592add4bb6a1f6d4614ffe69042ec5db98a69ac6feb0ea1c75469ad24c3c95d4dc5bd9b73a54f167100461f45c796ebbdf8e9107b239050000",
    ],
    [
      "ETag",
      "OclxSklHk9AMP3hLGDFK6A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:21 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-112-1625184933653"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d904f4fc3300cc5bf8bb9b612ddd6fda9b4c3061514558315764268ca32b7744beb92a44365da77c7291c38724af2fcf3f373ce702ceb3d44b02b8b8f16757755a05dbb4b86a655d6f0d1506d103c402b0a261f06b3c5e94b49ba9d148fc52929bb20c4f57cce8491ef580988ce9097a8f606a2d733d4a2426edb6e75efc898ed1aa724ab97f82ece58a868ef84d5264d17cb34868bf7a7ad39feabe5ede2c1817619e6a8b196e852349a0e286de21634a26a14fa865a2dd1400ff7854253db084de4b3e207c1c00fc68330988e66c3e1381c32a9480a5b52cdf0e699c381252b54469fbc205cc3ef7bd959344f9ad8dda0331e4d273f636ec88db61cc9ea163d9082ffe9beb410e54219bc7c03faf0338685010000",
    ],
    [
      "ETag",
      "J29AvzlcoD7gOgvIiy15eQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:21 GMT",
      "Server",
      "ESF",
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
      "08000000000002ff1dd0cb7282301840e177c95a9d165049972125a2910a5a113719c0bf687024868ba19dbe7b9daecfea3b3f282b0a681ad1d615dcd01b1a320b4f8ac94ab98494728599ba1f6f8de94c4525253166d7f1756b2c31b716454de9cead3a9e4f93fdcd39f4e43caec240c7223acba37de27eb258f6915bebb8b6138778a7b07f804e77e60041f21d6de93df299ce72a917c1e7f4c33c038e7631a4f90cfad0843ef75e573ce8d69ec5366d593a257b5cf9f261f332f358157411b4e9458afd86d58ecbb32fb0fd4e6dcbd4e6c4172fe3307f9fcfd451563456783dcca8bca31102a32e1a1a717972ed29c623f46f17eda0e0398040a641a3df3f8ef15fa71a010000",
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
      "Fri, 02 Jul 2021 00:17:21 GMT",
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
      jobId: "grouparoo-job-113-1625184933653",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85535d6fda3014fd2b91f75a2010a080845644d33513096d08ada6698a6c7393ba0d71889d76ace2bfefc6295dbb49eb536cdf73ee39f723cfe441e41b32214ca4bb0acafda77bc9c809014d537c9d7f7ddae517be7b77d54bbd706fef7e45f9cfebe91411a26629ba2d32682959951cd464bd6aa7a5ac0a5a4ad9c244ad6ed7697587bd4177d41f3bce70e0205141962c44fe80f43bad0b35e9748ee2ed54ca34035a08d5e672fbfade79ec758a52de03d7aaf35eb38332aaf381eae74c72aa85cca7eb153aa81494316ca9c8d0c31fea869dbdcfdd1674db4e11fc283850ce6595ebda17a6e0324f445a95262b993c13e3f3cd81acdc853b8f2c2eb36a9bc739ddc289b5a19ac67a5f8075112e7dcb0b2e96a13f8bbc6510afe697ae3f6bcf978bb51facacdb4b37742d4d5906866b4dad33730bf082fa1b505ae4463daa9f6be5970e79ff0ea626a0b48226189fda43da1dd96396b0539e8c9c014b6c606cc44e07d461361ff7a1bf61409167440d8be632ef0f073d06492f6630b4e3fe004f88ddc494417f3cec8d46769793c309792a858673a10aa944d321721b7a911b47e13a98cf22d79490d02ad3e78db1ba80b71e351688a0ffd474a8a342a252dd6e2f88dc70368fbc1bb799f00252caf7ab1dce38a1990244d3129ba7a1f4e5061b468299ef9e23d84cecea185464f2fd99d43daf5dbc69f92b3dc201d676b5f99255147ac11763e788b8a15965208fcd811468f90e6b43d7871f88c42d6db290ebb51b7e23cd5308099490f38fa7896013f8f86f3b6e3e8271f7514769bce3f27055abf0129a2512a6de863db0fbddb16d13032ef5dfb19eed38c7b6d539ea8cb0855cbf94d46c3e56da8855ea1584419c7f60da75f80d1e3bd3aa7b040000",
    ],
    [
      "ETag",
      "CJwqnFMEhP2gIRy0qzTnxQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:22 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-113-1625184933653"
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
      "1085df65bc2d910a546cc24541d42680fc94c4c410b2b453286cbb75772b01c2bb3b5b118d9ae84d3b33fd667bce690fb049b2085c5824cb9702e5ee62897a648a31aa826b45b75c640ac102d46c49645f2bdf1b6da7ed7de7a92373b6d8f0fde5b6d52242852b4c19b8078813e49102f7f900194b91d642c18b349b979d057a979be12418fb837bea5311997e30edf5bc76af0b47ebbc1831cde625ff8fb5d9d182b5588c3146895988464b2ec51a43ed1b9b8aa539c78a12850c514109970f965214399342546852b1ed5ac576ae1a76b37e53ab398d1a915c844c272223783a2181a085667c2cb664131c02645992e3b8bcbed238894a27a6f40781532f057e05485b9c709cff0d92e015a3eff0819d32f8ceb15414993e5377bd47efb7e328d4cfa36ebda0fb83509aa23a2381dfef4e02af3f34dcece4bdbdd3a8865250920a4d8876b5de6c5c3bd5f75c3bc2644def71b52cd08290d1eff190687063c6151edf00a78057887c020000",
    ],
    [
      "ETag",
      "MtsIAQwUBzCXCrpabklz/w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:22 GMT",
      "Server",
      "ESF",
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
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-114-1625184933653",
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
      "02ff85546b4fa34014fd2b64f68b267df02a9626c6ad9575492a7529d534bb9b7680a18e02439941b79afef7bd0c56adfb302181997bce3de7deb9c313baa3798c0628a4ab7545cacda75b16a2162202af60776dcd4ebfaae7f3b1176bfd5fba7efeb8c68f0fc7c780a0358be3ac48499bb3aa8c081fcca69d55c9aa02978cb521515bd3ccb666e93dad6fda8661f50c20729226639adf01fd4688820fbadd9d7867c5d82a25b8a0bc13b1ec65bf7baf778b92dd9248f0eebe66176478f703d59394455850961fcfa6e0a0e2a45c900cd3143cbc52e3f0f37eee0ec5596705e07b1a111c45acca45ed0b52442c4fe8aa2a6556347842d2e79b0f3475c6ce2850469399171c2c71569397870ae6ca6251125ea5a2a52ca1a884a66441e3651329ee942ffee40222e0e00673c297caf557c77794d7ada5f2a3525523524e94a177a6ec67713d65e679ce34500e4e0e95737f32bb544ee77b18b01f132e682ecd07384c496dfcb9c1ee9fe75a13b000e526b838522dacf5553b4cc2a328e91bbd30514918f6c3a31e364235b24d62c621c1c0137576c9c239cb352326b68a01675b8696e87664c6660fc7bdd826aa695b618c753d49fa68db420f2515e48cf28271da34195dfb6ee02c027fe68d868123cb483034f2ac315717f1d6a7802201f49fbab675943250aa4fccf502c71f8e02f7ca6986644c5638da4cd73026094e3901342e714604292f580c4d439793a91bb8136f3806863cf9cb1d82a3c1f7a75742b0296497857ca369e0bbdeb934b0435ce1b49290fbe603e102bca2edb6f5ef3443df1fce411a9725debc8b41399659d3ff2221f172d5d8dc496aa856dbadf4bd9585b63fb7f0b410dcb1460b7d9b39fe1c355b3e494849f2e8e36102b00c7cfcafd8dd5b00c3cd051d2e600db31bf15a252a4933c33493ee25bba79a7adfee23092ec5fb98a16af6eeb0ea1c754692915c3c97d4dc5bd9b73a54f117100461f43c796edbdf30b6dcb539050000",
    ],
    [
      "ETag",
      "q6UBH0GYLNd18x22Gzqazw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:23 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-114-1625184933653"
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
      "0000000002ff8d90414fc2401085ffcb786d0f8516a10907304421885ae1600c214b3bad856da7ee6e1142f8efceaec670f4b2bb79ef9bc97b7b867d596710c3b62c3e5b54a79b02cd8b7d24a85b69345f0dd51ac10334a26072279f6687a89a2d07dbac288ff2ad0c8f8fa3e190099d7e6025203e435ea2cc34c4ef67a845853cb6d928b79131736aac325d2c27f79384858a322b2c56f3f9683c9fc0c5bb1a6bf6ff1a595f3cd8d136c11c15d629da148da21da6666a0b6a5135127d4dad4a5183839d51286a1ba1887c56fc2008fda0d789827e38e8767b51974949a93025d50caf5e391c18324226f4c505a1c380724fee9abbf3c072e44a1c1c60b35d7bbd3f2fb0defa77e1f864503f2be2781a6db2b07ffb93f38e6c76c39d8c6ad18354f0473f9406e25c488d976f48e53888c6010000",
    ],
    [
      "ETag",
      "jlOJv5mJT9bdgixlYi4xMA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:23 GMT",
      "Server",
      "ESF",
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
      "2d8e8a08e90e101828a13a08c56e9808e14f0a845fecf4ee757a84f77e004e12c2583c7ed7848237c0f1016e93ed7ba7685a5e5d9bd061225d5a0bf6ac62883dec76af1de63c876524140e3b437e6af5b473c4ec1e0996cb53ef260e8a91a2ac53d3291b9d66e61ac5ae7377bd159dbfae52aee01617118b562ff6e5c90ce7671daec592b771782b827a42263c7981aa624defc7c68e3ea61ec672d0ec4cdf535170c9f6a5dc8af352ea93694d153ee6975aa61409d678f139c91e9f54c28a1328aac105dbe810ea8f57da2f879d6f810d206b570e84c5e58b2b4a106ec0bf3d1e79475e011ac10319c0ef1f857d04401a010000",
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
      "Fri, 02 Jul 2021 00:17:23 GMT",
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
      jobId: "grouparoo-job-115-1625184933653",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b6f9b3014fd2bc8fbda3c810422456b94d03552423620adb66942c6b950b704536c524555fefb2ea6e95a555a3f61fb9e73cfb90f9ec9032f766442129e3dd6501dbfdc8b845c105034c3d7caeca74f79611db78751cdd9cdafd1c2bbcfa65344f08625e9becca123455d3190936dd8cd2a5197b412a283893a8381dd198c86f6c0b15cd31cd9261225e4e98a170f48bf53aa94935eef2cdecd84c872a025975d26f6afefbdc3b05756e21e9892bdf79a3d9491bd4f54bfe68251c54531dd86e8a09650c5b0a73c470fffa8bbe4f27dee2ea7fb6e86e0036740191375a11a5f98828922e5595de9ac64f24cb4cf3707127a2b6f1e194ce4f5be880bba870b6347158dd5b104e32ad8ac8da57fb509d6b368b9f1e3707eedad67ddf966b55dfba1717bed059ea1689283e61a53e352df7cbca0fe0ea4e285568f9ae746f9a543cb8f836908282da10dc6e3fe880e9cbe9ba4c998a58e6927691f92c449c63635933e732db0760950e46951cda28528e838352d87393185c130b668df895d3319c60e38091db90387ba0e395d90a78a2b5870590ac9db0e91db60197971146cfdf92cf2740929ad73b5688d3505bcf5a8b04004fda7a65313e502959a762ffdc80b66f36879e3b5135e4146d9317cc419a7349780685a61f314546bb1c386117fb6f61608d613fb7e0e4a32f9fd4c9a9e372edeb4fc951ee1001bbb4a7f4918054bff9bb67346dcd0bcd690437b20255abec3dad0f5e90f22714bdb2ce4c7d60b7e92f62980142a28d8e7d344b00e7cfeb79d371fc1b8fba82315de7179986c545805ed12715d6fcbb6fb96e9d816d1e04a7d88b9ae7d6e5b93a3c9087b28d44b49ede663a5ad582d5f4118c4f9fbba5da7bff2d8748d7b040000",
    ],
    [
      "ETag",
      "r30fwln4yUv6uicVZ6DEjg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:24 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-115-1625184933653"
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
      "bcb444ca4fc5265c802236026229578690a59d9662b75b77b712427877672ba25113bd6967a6df6ccf39ed1e9ed33c02175669f252a2dc9d25a81f4de1a32a33ade856885c2158809a25447acd6de322bc1ff2b8b59d045c16fc7cbc4aba5d2254b846cec0dd439c621629709ff690338eb4168aace4f9b2ea2cd0bbc20c6781ef4d86d47311997e321f8d7afdd1000ed66931629a2d2bfe1f6b8b83051bb1f23146897988464b21c50643ed199b8af122c39a12a50c514105570f1229ca8249216a34a9d976bb663b8db6dd695d359b4ebb49642642a65391133c9f9140d042b3cc175bb2090e01b22ac9715c5d5f699c469513537a93c0695502bf02a42d4e335cfe0d92e035a3eff0811d33f8ce312eca5c9fa8dbd143efb7e328d4cfa36e7ac1e007a134457542026f3c9805bdf1d4708ba3f7fe4ea39a4a41492a3421daf556a77de9d4df73bd16266b7a8fab658916848c7e8fbb54831bb34ce1e10d594ae8017c020000",
    ],
    [
      "ETag",
      "I3w2/cKGmf4wNTmrpm+Mbg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:24 GMT",
      "Server",
      "ESF",
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
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-116-1625184933653",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8554fd4fdb3010fd5722ef1790fa918f266d2a21d641c62a9594a629086d53eb38976248e2123b4c08f57fdf25a140c736a448897defdd7b773ee789dcf13c264312f1f57d09c5e3a75b1191160145d7b87b7be78ad9ed2cb667d937d15553182d26bdd9d1112278c59234dba4d096a22c18c8e162de5917a2dcd0428836266a1b86d3361cd336063dd7b21cdb42a2843499f0fc0ee9374a6de4b0dbdd8977d642ac53a01b2e3b4c642ffbdd07b3bb29c42d3025bbfb9a5d9491dd0f548f53c1a8e2223f5accd14129a1584246798a1e5ea971f4793f7787d3acb346f0036740191365ae2a5f9882893ce1ebb2a8b392e113a97dbef920736fe29d84dac974e187072b9a55e4d5a146a5b65c1620cb54b5b4151695f014963c5e3591cd9df635989e63041ddc500972a55d7df3024fd3563155b0d27e94ba6e31ed581bf9a7da7e86b1af2d7cdf9b87dac1f1a176164c1717da97eb3d0c5a8f412a9ed7c6431aa550997e6eeef8fd995604aad048135cf675871a03dd8d92a8cf92816547890e513488fa36b5229db93de8c51150e4a92a7bcda2b9c84d2bee27fd416c997664eb114416338c185ca76f32c7750d3b1e24405d46b62df2abe00a4eb9dc08c99b0693ab601c7acb3058f827a3d0abcb482836f1b4315715f1d6a7c22211f49fbab655940b54aa4e6bec875e303a09c7975e3320135853f638bfc71149682a01d1b4a0192828ce458c4d2317d3f9381c4ffdd10419f5a95fec10920cbf3fbd12c2c74ddd6555bfc96955c0f64dc24b9a9635e0a1f920a66eea6ddd6c1b36d96e5bffce340a82d135aad3a2a08f7fc4b022a757d1ffa253e3eb55e374a76b904aedc5c5deca21db9f5b7c5a04af58a345660b2fb826cd5600091490b38fe709c175e0e35fc5eeda22182f2eea48856b1c5f262b15564033c63cabddd76c5beff5fa8e416a70a1dec55cd3da9d5795a3ca0819e4eab9a4e6dad67dab42a57c016110a7cf1ffb6718fd0d5884f46638050000",
    ],
    [
      "ETag",
      "jk9oQjQd5QmHo/tOeAUL4Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:24 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-116-1625184933653"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d90414fc2401085ffcb786d134a8160130e621ac520d12a0734842cdb6929b49dbabb0581f0df9d5d3d78f0e06577f2e69bc97b73865d51a710c1bac83f5a54c7ab1ccdb32d12d46d69347f0dd51ac10334226772f3f0b8790b679dd3d8f43e1781ac8675ff74188d98d072839580e80c598165aa217a3f432d2ae4b1d54ab98d8c99636395c9ec35be8b13162a4aad309b4fa737e3690c17efd758b3fbd7c8f2e2c196d60966a8b096685d348ab628cdc406d4a26a4af435b54aa20607bb46aea86d8422f259f18360e007836e3f18f6aec370d00f992c490a5350cdf0fc85cd812123ca840e1c10ba0c285772d6ccbd7b96431762ef00ebedef5e607bcb9f85e3a341fda488ed69b4ce7ac3ceb7cf5bb2de0d6732aa450fa4e043df1706a24c941a2f5f21add65ac6010000",
    ],
    [
      "ETag",
      "hJMhZ3N0zBt4xY1cm8n5zw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:25 GMT",
      "Server",
      "ESF",
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
      "ff",
      "1d",
      "d0",
      "db",
      "6e",
      "82",
      "30",
      "0000d07fe9b39a0023cade402ee53ec094e80ba9d841914b2db7eab27f9fd9279cf303705992712ca6e14e7af0099e58d676e5ce6707c3a89a8e6471e897e613b69ecad987f35aa1ec9215aab31f668c59b6b720e920d7436733a2a057aec981756bd11e0a94dc1d9a04557cc99d13ad9ac4ffa6f99ec319dff283a5e3af6db368c295aef8ca90dea78f28aa97e1ac6d455bb7957b76b288aec6a498b578082f983032a0933af6455afb82c5c190710c3b3dcdc3d55e8474bc7134cc4876954eefc97152fd443e15af315503e3bad4e1109a4910810d2082514ec682beb98aaa691bf06f2fa62723ef0083604e38f8fd03733595021a010000",
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
      "Fri, 02 Jul 2021 00:17:25 GMT",
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
      jobId: "grouparoo-job-117-1625184933653",
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
      "000000000002ff85536b6f9b3014fd2b91f7b50910c8538ad628a56bb48474405aadd3846c73a16e09a6d8a4eaaafcf75da0e9da4d5a3f61fb9e73cfb90f9ec9bdc86332254ca40f15944f9fee24232704344df1d573821be3eb1eee4dfd50dcc8cb20befc653dce668810354bd15d914157c9aae4a0a6dba09796b22a6829651713752d6bd4b586fd81357626b63d1cd8485490252b91df23fd56eb424d0de328de4ba54c33a085503d2e77afefc6be6f14a5bc03ae95f15ed34019657ca0fa39939c6a21f3d9364007958232821d15197af8438dd9e9fbdc3d4177bd14c17bc181722eab5cd7be3005977922d2aa6cb292e933697cbe3990c05db98bb0c36556edf228a73b38e9c454d3483f15d039f737ebced23bdff8eb79b8dc7851b0b870d7f3de62b3daaebda0737de1fa6e47539641c3edcc3aa7cdcdc30beac7a0b4c81bf5b07eae955f3ab4fc77303501a515b4c168640ea93536272c61239e8ced014b4c606ccc46036a33934f1c70620614798d68c3a2b9ccc1b6c68c2793a83fb658e4984316b1c44e2227b147c0fbac1f0f137238218fa5d07026542195683b44aefd65e846a1bff516f3d06d4a486895e9b3d6585dc05b8f1a0b44d07f6a3ad4512151a96ef7d20b5d7fbe0897576e3be115a4943f050f38e384660a104d4b6c9e86722d63a8977bbe76cf10dc4cecf2185464fae399d43daf5dbc69f92b3dc401d67675f32541e82fbd2f8d9d23e28a665503d9b70752a0e55bac0d5d1f7e2212b7b4cd42be6d5dff3b699f7c48a0849c7f3c4d0437818fffb6e3e62318771f7594c63b2e0f57b50a2fa15d22d1d4dbb207a63398580e69c0a5fe3b363407c363dbea1c7546d841ae5f4a6a371f2b6dc52af50ac220cedf6bda75f80d73de295a7b040000",
    ],
    [
      "ETag",
      "N4SZ/Kvek0tqpZoPSdPz1w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:26 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-117-1625184933653"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d925b4fc2401085ffcbf86889944bc1263c144424e15a8a98184296760ac5b65b77b71a42f8efce5644a326fad2ce4cbfd99e73da033c45690036aca3cd738e627fb14135d5858b328f95a45bc6538960002ab621f2723c6f3f4c1661c5e9dd678b8e351926d3ab69ab4584f4b79830b00f1046180712ecc703a42c415af3799c27e9aae80c50fb4c0f679edb1ff5a84f78a0fbd17c3070da832e1c8df362c0145b15fc3fd6964703767ced628802531fb5964cf01dfaaaaf6d4a9664319624cf858f120ab878b0113ccf98e0bc44939269364aa655a99bcdda75b56ad5ab44c6dc672ae229c1f3190904c5158b5dfe4a36c122401425390e8beb0b8da3a070a2cbfec8b36a85c0af00690ba318577f832478cbe83b7c60a70cbe732ce179aaced4ed60ecfc761c85fa79d48de3757f1052515467c4eb0fbb33cf194e34b73c796fef15ca89e094a4441da259ae35eb0dabfc9e6b87ebace93db612391ae033fa3dee220576c86289c7377675eee37c020000",
    ],
    [
      "ETag",
      "+OUBXPWf2AGVpWC6PMmQ/Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:26 GMT",
      "Server",
      "ESF",
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
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-118-1625184933653",
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
      "da",
      "30",
      "10",
      "fd5722ef9756e2c3092104a4aa6334eba241a021b46ab709ece050b721a6b1d3a9abf8df77714a5bba8f0a2412bff7eede9def7844b73c5ba21ea27c7557b0fce1c38da0a88698222b383dfb754acfaf04f99a8d8759483b27f7b4ef9f1d1d0183972a49d69b94d5a528f298c9de6cda58e5a2d8905c883a04aa9ba65b371dab6dba76b7d572da2d104a9626439edd82fc5aa98dec359bbbe48d9510ab94910d978d58ac9fcf9bf75673938b1b162bd9dccfd98434b2f94ed6e354c44471911dcda6e0a0902c9fb335e1297878912ee9c7fdd80d4ed68d1590ef79cc481c8b2253a52f08118b2ce1ab22d75151ef11699faf1ed0d41b7a83c8188c674174b020eb52bc38348834e6f39cc9225535630145253c6573be5c54c8e6d6f81c8e478080836b22995c18175fbcd0338c8554e06e617c2f306ec5c6b1d10f4e8cfd107e60cc82c09b46c6c1f1a1711a8e6713e3d3e51e07bc2f99543cd3ce23425356ba7eeaaeffe7a59602a2c04905ce3bd821a68bbb34a19d38715b6d9a6046a94b3b6dd2a238eedacc5e524640a7cae85a453291d9b6ebdac4a2b64d3ab86b5a4bcb669d2e7c62d3c16ed76eb949424dc2d0b6867ee65cb1132e3742f2aac3e822f4236f1e85b360d08f3c5d4642a08b2795b9b288d73e151409a4ffd4b52d512e2053795d7e1079617f10f9e75e352143b622f1c3f40e662421a964c026395933c5f2915842d3d0643cf5237f1cf487a0d0d73ed93124ea7d7b7c11440f1bdd65a57f51e48fe08efaa389f6b0239d93b4d0acfbea0159d8c2756cd5cd76645a3db3d533ed06c6f80a6db7b57f07ef8761ff120c913c270f6f3028d2b14bf95fb26abe7eabccef5c98a8ccf6ec69ef",
      "cd41db1f5bf8d610ac5d950b9dcdbcf0125547214b58ceb2f8fd1103b206defffbd8ad32906199210fac85e230d1b12cb3c439ab269bafb57bad6e63db711c176972aede621d8ceddd159631ca886ccd32f55452b5caba6f2554c86712803090811f9c02fa1b26a02d5d4c050000",
    ],
    [
      "ETag",
      "QzGbVZoaKnOLnRb7DvbAIQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:27 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-118-1625184933653"
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
      "6fc2300c85ff8b776d254a01759538c0d46d4c80b602a709a150dc5268eb2c49992ac47f9f93edb0c30ebb24d6f367eb3d5fe15c360788615f161f2daaeeae40f3668b14755b19cd9fa44623788046144c2e8e32ef3dee8bbc7d51ab4954268b4bd74ec663267476c45a407c85bcc4eaa0217ebf42236ae4b1dd4eb98d8c994e5a65b65c274f49ca424d072b2c37f3f9643a4fe0e6fd1a93e77f8d6c6f1e9c689f628e0a9b0cad0ba9e8849999d9805ad4b2425f53ab32d4e060d72814b55228229f153f08223f18f5874134b80fc3d13064b2a24c98921a86372b3607868ca852fae480d06740b992b3e6eebdb01cba101707586f7ff702dbdbfe2c9c7606f5ab22b6a7d13a1b44bd6f9f0f64bd1bce64548b1e64820ffd5c1a88735169bc7d01e6832193c6010000",
    ],
    [
      "ETag",
      "Mhpf0FbgfuJrSA8iEMvyuA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:27 GMT",
      "Server",
      "ESF",
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
      "ff",
      "1d",
      "d0",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00d0bb642d0e024ea0bbd0a87c14aa411a56190ce157c5c8cf42a777afd323bcf70352ce45d7b1fefe251af006a654b3967ce94bd3b68b12efa50ce373a0d575e1581be3d928a3054d95e2cd23503afe98379a7b4dbcd8f251b2a3fb21f138133b5d1bbb28d4720a9d608b35a3f10ec5709e86aaae723d2262751f7afd9a9d88824b1525f71aa7b7d5364b7364dee2e307ac6bdaa945c0cab07f7a2debe793a198038e4d388f50962e92cde1c89f679811f7e24c99b3a7175d612a19a4fdde14f4762450d24f9fcc109216a113327c525551b9060b20be65d58a8e552faebeb6ac05f8b7b37e92e215608bb4152df8fd03b018b5d41a010000",
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
      "Fri, 02 Jul 2021 00:17:27 GMT",
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
      jobId: "grouparoo-job-119-1625184933653",
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
      "9b3014fd2bc8fbb8e6096942a4688d52ba464ac84648ab759a906d2ed429608a4dabaaca7fdfc5345dbb49ab8404f63de79e731f3c933b51c4644a9848ef6ba89e3eed25232704344df1f6e646ef17e926df33fe39dd89d84f27fdc7c7d90c11a261299a97197494ac2b0e6abadb76d34ad625ada4ec60a2ce60e07606a7c3d160e2b8b67d3ab291a8204b56a2b843faadd6a59af67a47f16e2a659a012d85ea7299bfdef71e86bdb2927be05af5de6bf65046f53e50fd92494eb590c56cb74507b5822a829c8a0c3dfca1c6ecec7deeaea0793745f083e040399775a11b5f9882cb2211695d99ac64fa4c8ccf371f64ebadbc45687199d57911153487132ba69a46faa904eb22d8acada57fb109d6f370b9f1a3ede2d25bcfbb8bcd6ab7f6b7d6f5a5177896a62c03c3b566d69939f97840fd18941685510f9beb46f9a543cb7f07d310505a411b8cc6fd533a98f45d96b0314f26f688257d606cc2c6236ab33e771d706206147946d4b068210bce46fda13bb1a3388993c8198c87910b098b064e62f3913b741c07c8e1843c5642c3b950a554a2ed10b90e96a11785c1ce5fcc43cf9490d03ad3e7adb1a680b71e351688a0ffd47468a242a252d3eea51f7ac17c112eafbc76c22b48297fdadee38c139a294034adb0791aaab58cb161c49fafbd73049b897d3b061599fe7c264dcf1b176f5afe4a0f71808d5d6dde641b064bffabb173445cd1ac369087f6839468f9166b43d7875f88c42d6db390ef3b2ff841daab0012a8a0e01f4f13c126f0f1df76dc7c04e3eea38ed278c6e5e1aa51e115b44b244cbd2d7bd477c6ae3d26065ce9bf63137c8e6d6b723419218742bf94d46e3e56da8ad5ea1584419cbf6fda75f80d61a166a97b040000",
    ],
    [
      "ETag",
      "ZZtjCgOmjbc+gUidNg80ww==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:28 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-119-1625184933653"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d92615382401086ffcbf61527512165c60f5866366aa6384d358e73c28218707477e498e37f6f8fcc9a6aa6bec0eef2ecf1be2fece029ce0270601947cf058aed4984ea5617139445a224dd729e49040350b188c8ad6536eabed5bcde3cacd5ebe9bddbbbabada2769b08e9af3065e0ec208c310924388f3bc8588ab4e6f3a448b345d919a0b6b91e4ebd497fd4a33ee581ee47b3c1c0ed0cbab0378e8b01536c51f2ff589bef0d58f3e504431498f9a8b5e482afd1577d6d53b2344fb02279217c9450c2e58348f0226782f30a4d2aa6d9aa9876cd329b8d56bd6e5b752213ee3315f38ce0d9940482e28a2513be219b601320ca921c87e5f585c671503ad1657fe4d98d52e05780b48571828bbf4112bc62f41d3eb04306df3996f2225347ea7270e3fe761c85fa79d485eb757f1052515447c4eb0fbb53cf1d8e35373f78ef6c15cab1e094a4441da2596d34ad33bbfa9eeb39d759d37b1c250a34c067f47b5cc50a9c902512f76f03ef97167c020000",
    ],
    [
      "ETag",
      "y5143c58JwZjtz/YAGW2hg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:28 GMT",
      "Server",
      "ESF",
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
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-120-1625184933653",
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
      "9b3010fd2ac8fba795f283000112a9eab294b64c29e90869d76e536288a16e01536cba4555befb0ed3b4cdbaad1212d8f7debd77e7338fe88ee62b3444214dee2b52ae3fdcb210b510113881ddf5f5afdb53e338feeac6d6674725c5f57d6f9a1c1c0082d62c8eb322256dceaa32227c389f75929255052e196b43a2764f53db3d53ebf76c63a0eb665f072227693ca1f91dd06f8428f8b0dbdd8a7712c69294e082f24ec4b2e7fdee83d62d4a764b22c1bbbb9a5d90e1dd77540f53166141597e309f81838a937241324c53f0f0425d851f77737728ce3a09801f68447014b12a17b52f4811b13ca64955caac68f888a4cf571f68e64c9c71a08ca7732fd85be2ac262ff715cc95c5a224bc4a454b594251314dc982ae964da4b8538efde91944c0c10de6842f95cb53c77714659b43f95ea9aa1e2987cac83b527673b89e32f73c6716287b87fbca893f9d9f2b9fae7630607e45b8a0b9b41ee03025b5eda7f6ba6f4fb5266001569ae0c2524ddcb3d54118875614db7a3f8c5512867668f5b11eaad1c020c62a241878a2ce2e59386779a819b10e084bb3f581155b9a69c5833ebc2d6c63dd5a8586159aa1d1439b16fa5952418e282f18a74d8bd1a5ef06ce22f0e7de781438b28c18431b8f1a737511af7d0a281240ffa96b53472903a5fabc5c2f70fcd138702f9c66442624c1d17a760f4312e3941340e312674490f28cada069e87c3a730377ea8d26c090e77ebe457034fcf6f84208d685ecb2906f743c998e02d3900eb6900b9c5612f3d07ca05ea70f884debdf6946be3fba02695c9678fd470cca3125fd2f0a122f578dcd674554ab6d57daceca449b1f1b785a086e58a385becc1dff0a355b3e894949f2e8fd6102b00cbcffa7d8de5a00c3bd051d2e600db31bf15a252a4933c33493ee25bbaf1ab6",
      "a56b48824bf12666f7cded61d539ea8c2423b9782aa9b9b5b26f75a8e2cf2008c2e879ae7702d1df436ce46e37050000",
    ],
    [
      "ETag",
      "yZxjH4FfXIf7JE0epZq1Og==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:28 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-120-1625184933653"
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
      "00000002ff8d90414fc2401085ffcb786d13da0ac1261ec434486c508b181343c876999642dba9bb5b0821fc7767570f1e3c78d99dbc7933f9de9c615fb51b8821afcacf1ed5e9aa44f3628b0c755f1bcd5f47ad46f0008d28d9192d0f8b84e47b3e8ef2c1d3289dbe3db6dbe3ed2d3bb4dc6223203e435161bdd1107f9ca1150df2d87aaddc46b699536795d9fc359926190b0d6dac305fa6e9dd244de0e2fd1aebf6ff1a595d3cd8519e61810a5b8996a253b443696636a0164d57a3afa957123538b36b948afa4e28229f153f08077e300a87c1f8fa268a46c3889d3549612a6ad9bc5c301c1832a2cee8c8012164837225672ddc7b70b20d61abc0b1fddd0b6d6ff5b3707232a89f15319e464b1685836fce7bb2ec863319d5a30752f0a11f2a0371216a8d972f09c049b5c6010000",
    ],
    [
      "ETag",
      "3UvSEocXb83b0O6LGVKnhw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:29 GMT",
      "Server",
      "ESF",
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
      "ff",
      "1d",
      "d0",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0bb646d1d2828d09de11784e800e1e786a110117008f2abe0f4ee757a84f75e20cb733a0ce9c81ada822fb0649fca36dfda9d0c61593ab415ace6aab8672c3bda54071ee7a91eecd39d4703f568150f234d1a53d374366182d85e2c54e454f1e9760a248a8ee288a481d82491b503825c287861104e381033d84dc5ecabcf2e20038cbf73c7e161ed5c78f527bc85fa8419bea39a45176b8fe75578d8253faffa4a2a9fe9896f70a2ef6a8c88d63552c841f0ec998ebe211018cf918db3de90ca9e2113decf212edacc329691ff709909c106d06757f57448ab3757d829ca06fcdbd371e9e83b00d2aca73df8fd03d0c9e5bd1a010000",
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
      "Fri, 02 Jul 2021 00:17:29 GMT",
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
      jobId: "grouparoo-job-121-1625184933653",
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
      "fd2bc8fbda2490172452b446296da305b20269b54d13b28d616e01536cd25655fefb2ea6e9da4d5a3f61fb9e73cfb90f9ed11d2f1334478467f70dab9f3edd0a824e10533883d7abe1f7e997873db9b8a2cda3777e9d3a0197cbc50210bc65495c5439eb49d1d494c9f92eec67b5682a5c0bd183443d6b68f5ace9706239e3d968349d8c8028599e6e787907f45f4a55723e181cc5fb991059ce70c5659f8ae2f57db01f0eaa5adc32aae4e0bde60064e4e003d5cfb9a05871512e7621386824ab6356609e83873fd4849cbecfdde7b8e86700de73ca30a5a22955eb0b525051a63c6b6a9d15cd9f91f6f9e6804277e3ae22838abc29cab8c4053b3112ac70ac9e2a669c075bcf58fbe7dbc05b46ebad1f87ab4bd75bf657dbcdcef343e3e6d20d5c43619233cd3516c6a9bef97001fd8449c54bad1eb5cfadf24b87d6ff0ea62580b4645d30b6cd29b61c73465262d3d4194d486a32421c624ff08898743666e384300c3c2daa59b814a5958e877662a77192ccac783c35cdd899c26938b2886d139a626b8a0e27e8a1e68a9d715909c9bb0ea19b601db97114ecfcd532727509296e7275d6196b0b78eb51418100fa4f4d8736ca0528b5ed5efb911b2c57d1fadaed26bc6119a64fe13dcc38c5b96480c635344fb1da1309340cf94bcf3d03b09ed8d76350a2f98f67d4f6bc75f1a6e5aff40806d8da55fa8bc22858fb17dace11718df34643f6dd01bd2c0f983efc04202c6997045deddce01bea9e0296b29a95f4e3610258073efed98e8b0f60587dd0910aeeb03b54b62ab466dd0e715d6ec79e98e399e3d848836bf5576c629a967dec5a9ba3cdc80a56aa9792bac5874a3bb146be822008e3",
      "f775b70ebf01be40ec5d7a040000",
    ],
    [
      "ETag",
      "Q2Z6KwvbGQcuxMFVf8RisA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:30 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-121-1625184933653"
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
      "0000000002ff8d91514fc23010c7bfcbf9e816183084253c801a2412a203e28321a474b731ec76b3ed5042f8eeb6158d313ef8b2dedd7e97fc7fed115ef23281083679f65aa33c5c64a81f6d11a3aa8556e6a8a854081ea06699219327de0887c1e5cd4e6df7ef8dfb799f8f5bc3c1c0108a6fb160101d21cd51240aa2e72394ac40b3c649d445b9769d07fa50d9e17c114f6663d31794d87eb69c4e87a3e92d9cbcefc58469b676fc3fd656270f76b48931458925479ba592b443ae275653b1a212e82baa2547050e763f324975c524916f267ed00afca0db0a835ea7df6e77c3b6210571a6732a0dbc9c9b80a0493311d39bd1040b48571ae3d47df7669c27cec49693d9a2db71017f02cef10b396bfd662ac1ca3f98d539c1e8a0513d48323e0aad4ad0ecf4c2ab6ef3d3ee9aacb13637a1658d1e70661ee92ed710a54c283c7d00305cc65c02020000",
    ],
    [
      "ETag",
      "dWc/5A1+Djshvx/KS9cG2A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:30 GMT",
      "Server",
      "ESF",
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
      "000002ff1dd04b7282300000d0bb642d8e8280e9ce282a25654410031b26c5f0110a2141449ddebd4e8ff0de0bd0346552267d5bb1067c800755e1349d3a7c89509e6b191a552388bc279f8f242eba3058c114eff26aed909bbc0ddd6547086e37a7ef4c09c33b8d1dbae622512f6610d9db26dacdaaa1ee2da88e99e48b11e9c84d866019f0b04be6037d7e59e9c1fbd49f32eeea2dae7d039edd9858bc8277ac5f67aa2051595435c73fcd0aef07e16a074f1e8d9b9bd19698ce55ea91e39f8ffb62a1a8fedcb2a0775c9e9a8cb4b910ccb67353f16d8e34d86cacfc6294184c001b7929984cca3757d3219c807f7bd23f387b0720460513e0f70fbd38ca221a010000",
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
      "Fri, 02 Jul 2021 00:17:30 GMT",
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
      jobId: "grouparoo-job-122-1625184933653",
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
      "da2410425e52b446295d3325a425d0aa9b2664cc85b92598629329aaf2df77314dd7aad2fa09dbf79c7bce7df04c1e799190298979f6544375f8f22062724640d10c5fdd07eaabcd8feff7e595797f5784d772131e6e663344f08625e9aecca123455d3190d370dbcd2a5197b412a283893a56bfdfb1867dc71a0f26b63d746c244ac8d3152f1e91fe5ba9524e7bbd9378371322cb81965c7699d8bdbef7f6fd5e598907604af6de6bf65046f63e51fd9a0b461517c52cdca2835a4215c18ef21c3dfca326f1f9fbdc5d4e77dd0cc17bce803226ea4235be30051345cab3bad259c9f499689f6f0e64ebaedc45603091d7bb222ae80ece8c842a1aa94309c6a5bf591b4bef72e3afe7c172e345dbc595bb9e77179b55b8f6b6c6dd95ebbb86a2710e9a6bcc8c737df3f082fa0948c50bad1e34cf8df24b87961f07d310505a421b8c46e6905a637312a7f188a563db895313e2781c8f1c6ac7269b0c6090c44091a745358b16a24886a33e654912d9d6c08e0663e644e364388c46b1634e683c606330c9f18cfca9b8820b2e4b2179db2172e72f03370afcd05bcc03579790d23a5717adb1a680b71e151688a0ffd4746ca25ca052d3eea517b8fe7c112c6fdd76c22bc8283b6c9f70c629cd25209a56d83c05d55a24d830e2cdd7ee0582f5c4ae4f4149a63f9f49d3f3c6c59b96bfd2031c606357e92fd906fed2fba6ed9c10b734af3564df1ec8cbf2a0e9e32f04e292b649c84de8faf7a47df221850a0af6f93011ac039fff6ca7c54730ae3eea488577dc",
      "1d261b155641bb435c97dbb21dd3b1cca14534b8521f62d6c43975adc9d164841d14eaa5a476f1b1d256ac96af200ce2f83dddade35f77905ada7a040000",
    ],
    [
      "ETag",
      "EjaRtOZJYpH0YWnUPsOUyQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:31 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-122-1625184933653"
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
      "4d",
      "4f",
      "83",
      "40",
      "1086ffcb7885a4948295a407d1469b60adfd3818d3345b18907661e9eea2214dffbbb36b35c678f0c2ce0ccf24efb37b847d596710c1b62c0e2dcaeea240fd648a39aa966b4547236a85e0006a56109925cfcbfd8e05fe637c7898555d7e3b8e0fc56844844a5fb162101d212f91670aa29723d4ac425a4b056fab7a633b0774d798e162399f4cefa8af4466fae92a49aee3640c27e77b31639a6d2cff8fb5f5c9819dd8ce314789758a264b23c50e533d319a8a550d47578956a6a8c0c2f6472145db3029844b13d7ebf75d2fec07de7070e5fb61e013c945ca74296a82570b0a085a68c6e7e29d34c100d296649cdbef1b8dcbcc9a9872325d86031bf027601dbf90b3d66fa6e1acfe83599f13c49d463593827c141a15af3718069761efd3ee4618634d37a1658b0ea48c1ee9bed410e58c2b3c7d003816e06102020000",
    ],
    [
      "ETag",
      "dLYTkja53OBqMPmyfDEBqg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:31 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-123-1625184933653",
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
      "6e",
      "9b",
      "30",
      "14",
      "7e15e4fdd9a4344008b9495597b6ac454a494748ab6a9a12630c730b98daa66d54e5dd7730496f93560985e0ef72be736c3fa33b562668826296ddd7546cbedcf218751055388355dba4e7ee3dae9cdb22a0a7e7c74ff5937df67878080cd6a8242eaa9c1e485e0b42e564b9e86682d715169c1f80d181dd730eec41cfb547fdb1e30c5c078492e6e98c957720ffa3542527a6b92fdecd38cf728a2b26bb84172febe643cfac04bfa54449f37d4d13ca48f393aa47392758315e1e2e1790a09654ac6881590e195ea549fcfdbd7797e1a29b01f981118a09e175a99a5c60417899b2ac16da154d9e91cef9e60f5a7833ef2432d6252ee8dac0d258ad049575ae3ac69a25bb95eacef811ce2f8cf5ce5dae8deb732ff48c96e307c63208bc45647c3dfa669c85f3e5a5717ca3b1cece19b224542a56ea24118e73daa4d84dcbff77931a015658d2165c0dad01b647d6384ee32149478e1ba7168de3513c74b1135b64dca7fd24a61874aa71d72a5cf2d2c6d426bdd4b6931813c7b65cd71da6567f34e825384dc638b52c321c260eda76d0a3608a9e325971c9da89a1ebd08fbc55142e839369e4e936520ce3396dc3354dbccda9a04920fda7af6d83320e959af1fb41e485d393c8bff2da1d9fd10c93cde21ef63cc5b9a4c0c60226a8a8b8e0090c0d5dce177ee4cf83e90c147a1b2ff70c8926bf9e5f05d1a6d25356fa8da66138bd010d16026f3e609063d047dbed9b725738af3545f3f557ebffd002c846dbdf5b783a084e73eb877e2ebdf006b54b214da9a025f97ca781ac81cf6fe5fe860019ee08d4910abee16011d9542182b6078c153aa156bb16fc8c86489385fa88f5ac9ebb9f64e3d138d28296",
      "6ad7527b43f46c1aa8962f2400e15c047e7006e85fb9d9845aa3040000",
    ],
    [
      "ETag",
      "1/eH5qap3jmNeDHBxux1Gw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:32 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-123-1625184933653"
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
      "c2300c85ff8b776d0fa5836d953800420c09a1d1c22e085521b8a5d0d62149993ac47f9fd34dda0ebb24b1f33de7bddce05cd40788605fe4970675fb90a35db9438ca629ade14d516d103c402b7226db532de9fd33992459bcba1c93508eacce8743268c3c622520ba4156607930106d6f508b0a5996a6ba9bc8986d95eb24eb78be9c715dd1c1d5cbcd62311a2fa670f7fea8d4f957315faea7b369fc9f6477f7e044fb1833d4584b742694a6134a3b77f98ca85489bea1464b34d0c1dd45aea9514213f9dcf1835ee807835e3f787e7c09c3413f64b224296c4135c39b84cd81252bca983e381f040ce8eec851b36ebdbae71a853aad3017a924adba48d70e67a7bb9f11e3d6a279d3c4860c3a2f83a76f631372662d87b0ba410fa4e08f7d2d2c4499280ddebf00c29498c1b6010000",
    ],
    [
      "ETag",
      "yjncoVzSCSfRQqhS3cAtrg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:32 GMT",
      "Server",
      "ESF",
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
      "ff",
      "1d",
      "d0",
      "db",
      "72",
      "43",
      "40",
      "00",
      "00",
      "d07fd9e7c81421f48da14d4a29128c971d763716715b9720d37f6fa69f70ce13a408916180635b9106bc833515d43dda5b9da2eb39c5716c5445ad34e2718c526f383c603ce76b4fe36829434d28af8b65c287a24fd052b3d2a583a5bbfc74a905f9eedc83cfa6653dbf899ef8519bb6806d3fbbc5cd77541a92fe70b975f67d4e3d4dc91133d90a053b097833af185eecd62bbbb993b8ad3bdc34c4fcb3a499d4b84c5230a73fb38cb3af108d265a1b277f5b695b54672ff1a69312e34230dd7ea1895287bc8c36c76b459c4616e5a0515d07b00364e90a460658bcb8a2a4aa3bf06f87e3da9157804e524618f8fd03f0b09f841a010000",
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
      "Fri, 02 Jul 2021 00:17:32 GMT",
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
      jobId: "grouparoo-job-124-1625184933653",
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
      "db",
      "30",
      "14",
      "fd",
      "2b",
      "91",
      "f74adba469daa65235aa12a0529b6e490adaa62972dc9b6048e3123b2086fadf77ed5006421a4fb17dcfb9e7dc8f3c933b5e6dc98464bcb86fa07efa722b32724240d1025f6ffe6cf2b8be803076966ec96ee0f6a72c66d32922b86649badb97d091a2a919c8c926ee16b568f6b416a283893a4e7fd071867dcf190f7cd71d7a2e122594f99257773abd527b39e9f58ee2dd4288a204bae7b2cbc4eef5bdf7d0efed6b710b4cc9de7bcd1ecac8de27aa5f4bc1a8e2a29a6e6274d048a853d8515ea2877fd46d76fa3e7797d35db740f003674019134da5b42f4cc14495f3a2a94d56327926c6e79b03898365304f2c26ca6657a515ddc189b5a58aa6ea690fd679b45e598bf07c1dad66c9621da6f1fc3258cdbaf3f572b30a63ebfa3288024bd1ac04c3b5a6d6a9b9857841fd2d48c52ba39ee867adfcd2a1c5c7c168024a4b6883e9c81e52676cfb599e8d583e76bd2cb721cbc6d9c8a36e66337f00836d06147946d4b068252a9b3a2ef3bc3ccdec919f0ef28ca5fe908d52b099bdf598cb7cdf238713f2587305675cee85e46d87c875b44882348936e17c9604a6849c36a53a6b8de902de7a54582082fe53d34147b94025ddee459804d16c9e2cae8276c24b28287b8aef71c6392d25209ad6d83c05f54a6cb161249cad8233049b897d3b062599fc7a26bae7dac59b96bfd2131ca0b6abcc97c449b4082f8c9d23e28a968d813cb4075d46ce4b6dfaf01b81b8a46d12f27d13443f48fb14410e3554ecf36122d8043effd98e8b8f605c7dd4910aefb83b4c6a155643bb43dc94dbb23ddb73eda14f0cb8561f62",
      "7dc73b764de7d0196107957a29a95d7cacb4156be42b088338fed074ebf0172c0380da7a040000",
    ],
    [
      "ETag",
      "hzUfSrGeNS1L3lchejZsgA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:33 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-124-1625184933653"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d93616f9b301086ff8bf731442b0d611d523f246db645a24997d04ad35421d73e9853c331dba48ba2fcf79d699b4deb24fa05eececf89bbd72f7bf6a06ac91276afca9f2d98ddbb12dc571facc0b6da597a35585b600103c74b223730185cc4ef2fe52002f96bb0b99d3d7c2bcbf37322acf8011567c99e150ab4b42cf9be6735af80da04eab6aaf32e0b98db35beb8ce56f3c567ca2b943e5fdca4e9649aced82138364aee78def16f68bb3b046c83f72b28c0402dc0cfd218dc807073bfa6e555a36168b135022cebe0eea034d836dc200ea9320c4fa361189f8ec3b3e8e368148f47446a14dc29ac09be59d380cca1e37a858fb4260b3d61ba98562ebae796ea4a76abf870bec8e2a89bf06f800b816dedf25eb050c6ba27f95ec06719fe25357f234877a5741f54422dc1f451aac9b99406aced25d1e6bc698ed874b94c5fab524b834af6835bd50368b73d029fd2e5e47fd292c3fe687539c966af08ebc83747249b5fcdd6d9e4eada7377cf4698ee1cd86b83642b0bde51e1497436fe109f3c99ec02bdf1e83b89332d044c70fa57be28c792826b0b87dff4aad29389030000",
    ],
    [
      "ETag",
      "je++C6/Dd+4edx+jVEkYgg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:33 GMT",
      "Server",
      "ESF",
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
      "02ff1dd04d7282301800d0bb642d4ef9d3d29d61305a056b55a26e32483e626484340129747af73a3dc27b3f28cb733086357509157a437de604e37cbc52af180bc136b58d07f1a58975b0ad7a4888f9f47cff5addf4a1e56b072f83d3bce2220dfd540e6501e416eda8bda526e4758107e0b2f46977f4f28d9e556bef3417712c6079d94f9c4a308b6c9982bd0fd3dc72af0f6342dac55e77ff1ae28fb05153a1a473b25f92477ba6e9421370cdb9982e661b4a5bfe1e29fe081a2c93cb4e45651bcfcf649b64fcb84aa3ec40ee71b79bf0864dfa99db5fa1503c97ab3d1a21f856528361f2c975fd2018a17f3b6b7a05cf000c99068d7eff004d943a901a010000",
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
      "Fri, 02 Jul 2021 00:17:34 GMT",
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
      jobId: "grouparoo-job-125-1625184933653",
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
      "000000000002ff85535d4fdb3014fd2b91f74adb346d20a9548dae845189a6234d41d33445b6739319d2b88b1d3686fadf77ed5006421a4fb17dcfb9e7dc8f3c923b51e7644298287fb6d03c7cb8958c1c11d0b4c4d74f4c6c57bf7d51fc917994b86d99e86579359d22421896a2db5d053d25db86839a6cd6fdb291ed8e3652f630516fe8f9bde1b1e70f8371381a1dfb23242aa88a4b51df21fd87d63b35190c0ee2fd52cab202ba13aacfe5f6f97d70ef0d768dbc05aed5e0b5e60065d4e01dd58f95e4540b594f376b74d02a6832d85251a1877fd49c9dbecedd1774db2f117c2f3850ce655b6be30b53705917a26c1b9b954c1e89f5f9e240d6d165344f1d2eab765b6735ddc29193534d33fdb003e73c592d9d457cbe4a96b374b18ab3f5fc225acefaf3d5e56619af9d9b8b28891c4d590596eb4c9d537b8bf182fa39282d6aab9e9a67a3fcd4a1c5dbc118024a2be882d9897b4c87811bb2829df02218f9ac7081b1809df874c45c1e8e619c33a0c8b3a296456b597b005e1e502f1b7a6c948d01200bc63cccf221e33c0c9917f821d91f915f8dd07026d44e2ad17588dc248b34cad26413cf6769644b28685be9b3ce9829e0a5478d0522e83f35ed4d54485432ed5ec46994cce6e9e23aea267c0925e50feb9f38e382560a104d1b6c9e866629736c188967cbe80cc176625f0e414526df1e89e9b971f1a2e5cff4140768ec6afb25eb3459c49fad9d03e29a56ad85dc77075346212a637aff1d81b8a45d1272b58992afa47b4aa080066afefe30116c03efff6c87c54730ae3eea288d77dc1dae8c0a6fa0db2161cbedd8beeb8f87a14b2cb8d16f6223373874cde43019610bb57e2aa95b7cacb4136bd533088338fed8766bff17436af8457a040000",
    ],
    [
      "ETag",
      "BbimOx5ifzodER0ugRtMgQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:34 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-125-1625184933653"
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
      "516f9b3010c7bf8bf738229526641d521f922ddb22d1d012f2d2aa422e3e983b6333fb489b45f9ee3bd32eabd649f405eecebf13777fffd9b31f520b16b33b59ffecc0eeded580573ec8c0750a1dbd5aa31db08001f29ac8f4fd43b6e9ae20daf0eb7485bf1ef13a49ebf373225cf91d1acee23dab2428e1587cb3679a37406da5515da38b3e0b18ee5a5f5ce7d972f595f2c6089faf3649329b270b76088e8d82232f7afe0d6db78780dd9bbb0c2ab0a04bf0b3b4d6dc43894bbfa6e34dab60e44c674b70ac87fb83da9aaee5d698115546e169340aa7a7517836f9381e4fa33191ca941ca5d1046fd6342043835c65e681d664a1276c1fd3ca55ffdc525d8a7e151f2e57f974d24ff812e065693a8dc5205849ebf049be3fe0b30cff928abf11a4bb926a08aa410bb043946c0b2e8405e70649e30adeb6476c9ea6c96b55b4b0468a61702b070085db23f0254967ff93961cf657abcfb37cf18a7048be3922f9f262b1ce6717979ebb7d36c27c87e02ead215b39f08e0a4f2667d187e9c993c93e196f3cfa4e8cb68380959cfe956f12595c71e5e0f01b5b4a1bf289030000",
    ],
    [
      "ETag",
      "O+wRUuQe5UaZONtzxtZLOg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 02 Jul 2021 00:17:34 GMT",
      "Server",
      "ESF",
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
