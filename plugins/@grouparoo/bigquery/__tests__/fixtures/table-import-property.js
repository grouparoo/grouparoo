const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1602380499267";

nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf4b5283300000d0bb64dd76841408ee0a864fe99f1618370c83094230e11b01c7bbdbf1dde0fd802ccf49dfa783608483573067aab9c9378140d676f7c1e81bd4518744309b420b77cea427f7c98bb7d919333c6a458179c2c949661edd578e3b362c55ec7548b3567e23cf70e7475c0f8941d3fd0b8fa9fa79f714a4bedfb0c3d5b65f24ba21bb7c2c498b9bf120174fcf735c10ff02c5811ab2aa221aab61ed97d79a413e057ae04a8b6930a751c9ace8aaf5e4e89f6d6997a23e5dbed6b23634032a496ce9d311ac00999ab2237d5a3e675033cd15f86fa6c3dc90e7d52259473af0fb0727673b3f05010000",
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
      "Sun, 11 Oct 2020 01:41:46 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-1-1602380499267",
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
      "00000002ff85536b6fda3014fd2b91f7b590f00809486865345d9120ac21b4aaa629b21d27731b621a3b74ace2bfefda291d55a5f6536cdf73ee39f79167f4c0cb148d10e1f963cdaafd977b41d019620ae7f0fad7a67f1e07cea47ca8f7d56efff4ad23efeeafc7634070cd9278b32d584b8abaa24c8ed6ab765e897a8b2b215a90a8d56975064eb7e73bfde1b03bf080265991cd79f900e4df4a6de5c8b68fd2ed5c88bc6078cb659b8acdebbbbdebdadb4adc33aaa4fd56d10611697fa8f9b510142b2ecaf17a05fab56455c2369817e0e03f3125e76f33b739deb47300ef3865985251974abb8214549419cfebca6445a367645c9e1cd02a9807d3d8a2a2a8376552e20d3bb352ac70a2f65b665d46cb85350b2f97d16212cf9661b29a5e058b497bba9caf17e1cababd0aa2c0529814cc70adb1756e6e215c403f6552f1d2a8c7fa592bbff467f67e289a00d29235c1c47306b8e33b4392118f667ecf2599c308f189e7e21e71e8b0cffa2961187846d4b07029ca6e9a31cf77dd241b1092f41dea26d887536fe091a1e3bb5ee674d1e10c3d555cb10b2eb742f2a643e8369ac5411247eb703a8903534286eb425d34c67401a71e151408a00f6a3ae82817a0a4db3d0be3209a4ce3d94dd04c78ce724cf7ab479871860bc9008d2b689e62d542a4d030144e16c10580cdc47e1c83128d7e3e23dd73ede2a4e5aff41806a8ed2af345ab389a85df8d9d23e20617b581ec9a832e23e385367df8054058d12609ba5e07d11d6a9e2296b18a95f4f36102d8043efbd18e6b0f50587c50910aeeb039546a0d5ab16683b829f685ed3a036fe82303aed4bbd8b0ef1d7ba673e88c6cc34af55250b3f650672356cb57100461f8a1e9d5e11f63ec18d274040000",
    ],
    [
      "ETag",
      "z/cxq60AnkuyrvywB1sYjQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:41:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1602380499267"
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
      "4fdb400cc6bf8bf792546a4b5768245ea4a36c45e99fb5419a845075e49c7070c985f3a5a8abfadde70bac9bc6a4f026b19d9f757e7c4ff6f0a44a0921dcabfcb946bbfb94a3fbee831552ad1df1ab32252104804ee44c467642cbe8c7f5c3569dccf29f32db8d96f87271c104a50f580808f79029d49220bcdd43290ae4b6d4e8ba28374d1680db55beb84e56d3f957ce0b237d3ebf89e3681c4fe0101c1ba57062d3f01f68bb3b04f068ee5798a1c532453f4b65cd23a66eea6592282a8d1d32b54d91a0819b0fb9357525ac311dae747a9ddeb0db3f3def0e46a3fef08c396d52e1942919bd59f378e08c137a655e5824f4fa4cd82666c159f3dc725dc946880fa7f3643868e6fb1bc89425f7ba93dfe09bb67f492d3e08f20528dd06e5584ab46d94aa36424a8b44ada4a18da8aa23365e2ce2779028a5354ab6835bd50268b73d0257f122fadf6ad9367f767519259377043936c31149a6b3c93a89664bcfddbdddef78e79096d6b05708bd4d7addc1f9e7b361f7d5395f8c77139f133a5b6300a9e01fe09b72106642131e7e011825d2435e030000",
    ],
    [
      "ETag",
      "ArEsPAXJhvi+Mgzdfy9Pew==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:41:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `first_name` as __result FROM `records` WHERE  `id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1602380499267",
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
      "da",
      "30",
      "10",
      "fd",
      "57",
      "22",
      "ef6b8110200948a8436db645a2d04268b54e13d8ce257309716a3b5455c5ffbe4b52fa4395da4f717cefddbb77777e225b91c764449848ef4b508fdfee242327040c4df1f62ab8a2d378bb0d693149e7abc9ed2df0bb87f11811a26269ba2b326869592a0e7ab45ab65325cb822a295b98a8e5b4baaeedf47cbb3f1c3aae87340d593215f916c9ff8c29f4a8d3394ab75329d30c6821749bcbddcb7d67ef740a25ef801bdd79afd84111ddf954f334939c1a21f3f16a89faa506b5861d151956f04a8cd9f7f799db82eeda2982f78203e55c96b9a9aac2145ce689484b556725a3275257f9e64096c134388bac4d229436eb9cee6063516dadd70a749919ebc7627e616dd0532232d01bebe657b0082c6b23e28d35b64ead697811465617b562d046e4b55244590695ca732fc28f03a808d4500d4d70edd92eedfaf69025cce389df1bb0c406c67ce60d688fd97cd8877ecc8022cf54d96b16cdd19f37801ef569e281e351f01336187a3c76d9a06733b0870e8bfd9ee302399c9007250c9c0b5d482d9a8e909b451805eb68b19a9d4da2a0b69150347ede145799785ba7419308fac4d7a18a0a894a557bc359142c266751781d34139d424af9e3f21e679ad04c03a2a9c2ae1b501732c6a691cbf9328cc2f96c3245463da6cb234293d19fa75742f458d45d36f5b7d272fbb5fe11704db3b246ec9b03e992c3e12f2270f91a32b95a058bdfa4b95a40020a72fef5e8105c07be7a42c7854628ae34aa6883ffb8275c571a5c41b3",
      "2f625757d7b007b6e7ba36a9c1ca7c88f9fdfeb131558e2a23ec2037cf869a85469f8d58a95f4018c431cfc2d94f8cfe0754087d634e040000",
    ],
    [
      "ETag",
      "QEQaLdkkIapAgOUAZZecjw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:41:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1602380499267"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff2d90514fc2400c80ff4b7d94c531cd14121ec410251202833d19428e5b19c36d1d779d662efbeff4862f776def6bfbe55af8ceca04c670c8d24b8da6b94b91d72e88d0d6395bb92a2a2dc20090552ae45fbc8d96a956e1eaf3e13ee0d33a4c2efe7a3211c2ea13160ac62d1c33cc130be3af164a55a0b4edf7a69f28183795ab6cb6d17cf92e794189cb97f162f13a5dcca0db750338d321c2231a2c35ba8995a1336a9e3b59ab8a2a47cf526d345ae8e1fe21355457ca107952f1026f18fac1e38bff341a05e1b3703969c5199582c61b902d4cacf2887e45158602983e14eb637ffe48796632744abb7f7ada30da9521d96cd12df56f026fe4a45864d9d43800ade4373e32bee5dd15e0f2368c6a010000",
    ],
    [
      "ETag",
      "zUTRNgca6PK/+2thQ6dq0Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:41:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "c9",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "7fc9591cb0e090de0c03b204692b03b5970c6280b0857d73faef75fafee03d4114c7b4efc9c00b5a8377b04607b88ff70e57917c4a9a1b54a7ba1a0d47a3992e5785f39557beca131f3742255a9850d9b525d78585377075d482e30782b8f15048cbb391a2ef62491313a9b0c9e2fca4ebe5c1ef2df5d88a3acd24aee0dbbdff744df1e2a287954e8ebff5d7b07c10a7c85a3b5564361b172c6d967d0f4e44c61366670e276b13aea25c6fa1b16a813f7bf9c2e685fd90da6b052f4a99319a2b8ec10ed0a5611ded097bcdde140877e0bf4986b5a1af2ba251473bf0fb079dc3343605010000",
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
      "Sun, 11 Oct 2020 01:41:48 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-3-1602380499267",
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
      "000002ff85535d6fda3014fd2b91f75a2010200109ad8ca62b1384358476d334458eb949dd86388d9d56a8e2bfefda295dab4aed536cdf73ee39f7234fe48e175b322609cfee6ba8f65f6e45424e08289ae12bffe6ed6faef7b355e1ffa8b759f7f2d78db3bf9c4c10c1354bd25d99434b8aba6220c79b753bab445dd24a8816266a39adeed0ee399edd1f8d7a43176912f274c18b3b24df2855ca71a773946e67426439d092cb3613bb97f7ce43af5356e21698929db78a1d14919d0f35bfe68251c54531d9ac51bf9650c5b0a33c4707ff89dbe4f46de636a7bb7686e007ce803226ea42695798828922e5595d99ac64fc448ccb5707b2f617fe2cb298c8eb5d1117740727d6962a1aab7d09d679b85a5af3e07c152ea7d17c15c4ebd985bf9cb667abc56619acadeb0b3ff42d45931c0cd79a58a7e616e005f5b720152f8c7aa49fb5f2737fe6ef87a209282da109c6ae3da45dcf1e2569e2b2d47306496a439278893ba04e62b3511ffadb0428f28ca861d14214fdd4a63d1bdc187ab61bf7bd613f4e12eac4f67038606eb74b5d1bc8e1843c565cc11997a590bce910b90ee7911f47e126984d23df9490d23a57678d315dc06b8f0a0b44d007351d74940b54d2ed9e07911f4e67d1fcca6f26bc808cb2fdfa1e679cd25c02a26985cd53502dc5161b4682e9d23f43b099d8cf635092f19f27a27bae5dbc6af90b3dc2016abbca7cc93a0ae7c17763e788b8a2796d200fcd419791f25c9b3efc4520ae6893845c6efcf037699e4248a182827d3e4c049bc0673fda71ed118a8b8f2a52e11d378749adc12a6836889b629fd903db1b3ae63755b452ef629ed33df64ce7d0196107857a2ea8597bacb311abe50b088338fcc0f4eaf00f27cafec874040000",
    ],
    [
      "ETag",
      "iB8yhWyCOnEJudg1QXh3yQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:41:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1602380499267"
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
      "dd4ee3301085dfc57b9b4ae90fa18dc445bbedee76092da4e162b542951b4fb206270e1ea75555f5dd19072868410a37c9cce41b79cef8e4c01e642958c836327facc1ecbfe5606f5c1003d6ca22bd2a5d22308f81e5399197fe2e18e4fde11f2ca69b6dbc1a4d1f7e17bb8b0b2230fd070567e1816512944016fe3db09217406da9567551ae9bcc63765fb9e22a89e78b9f94175ab87c711b45e349346347efd428b8e5eb86ff42dbddd163f77a13430606ca14dc2c95d1f790dab99389bca8147450d72605640ddc7cc88dae2b6eb4ee50a5d3ef7403bfd71ffa83d1a8179c13a774caadd425a1b72b1a8f596db98af58e44b26e8f08d3c424386b9e5baa4bd10871e17c91048366bef740260ddae79dbc822fdafe2715ff22481720551b944329c0b451b25a73210c20b6921ad7bcaa4ed864b98c3e40bc14464bd10e6e650ba0ecf604fc8896e3cf564bb679dbd5749ccc3e1068c90c2724995fcd56c9f8eada71772ff73bd95bc06ba3c92b08ce265d7f303c3b0ffc67e77cd7ce4d744e684d0d1e4b39fd00bfa46561c615c2f1093de111085e030000",
    ],
    [
      "ETag",
      "K0w64g38YsmDbvRS9DkJmw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:41:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ltv` as __result FROM `records` WHERE  `id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-4-1602380499267",
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
      "0002ff8553ef6f9b3010fd5790f7714d80044288147559cb36a434ed12d26a9ba6c43607730b986293a9abf2bfef80a63f54a9fd84f1bd77efdeddf99edc88222613c2447a5b4375f7e15a32724440d3146f69ee1589e97dbef8b963ff3e5ed1f96c11edd2e91411a261299a9719f494ac2b0e6ab25ef5d34ad625ada4ec61a29ed3b347d66038b61cdf1f8c3ca429c892b9286e90fc47eb524d4cf320dd4fa54c33a0a5507d2ef3c77b733730cb4a5e03d7ca7ca968a28832dfd43cce24a75ac862ba5ea17eada0da404e4586153c1163f6e965e6bea0793f45f04e70a09ccbbad04d559882cb2211695db559c9e49eb4553e3b9055300f4e22639be9ddd6a0cad86c2a5075a68d2fcbf333638b66129181da1a57df826560185b116f8da9716cccc3b330326c1489416951b41211651934e91f9a10beee7c43a09a2ae8821bcf1a517b6cf92c611e4fc6439725163036669e4b87cce2be034ecc80224f37d95b162d64e18dc6ae6dc5cc1d0e86b6eff9aee33137a1a364e8fadec0a36083cd2dd721fb23f2b7121a4e852aa5125d2bc8d5328c824db45c2f4e6651d0da48281a3fed8a6b4c3caf53a34904bde16bdf448544a5a6afe1220a96b39328bc0cba51ce21a5fc6e758bc34c68a600d1b4a23968a8ce648c4d2317e7ab300acf17b33932daf95c1c108a4c7edd3f11a2bbb2edb26ebf8dd6a8b5f908b8a459dd2276dd81d864bfff8d08dcba8e4cbeaf83e50fd25d2d21810a0afefee810dc06de7b3b874d4628ee32aa288dffb8275c351abc826e5f44de56d7b15dcb773d9fb4e04abf8a79cef8d098264793117228f483a16e93d1672756ab47100671cc8b70f115a3ff01dcf1159b47040000",
    ],
    [
      "ETag",
      "am7nf/7BPZvbz+WaLANTvg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:41:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1602380499267"
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
      "2d906d4fc2400c80ff4bfdca14260e47c287613462a6028a8931841cb76e0eb775de8b6459f6dfe90dbfdcb5bda7ed936be127af1298c23ecf7e2daae62243b372c11ab52d8ce6aba64a230c008dc898fc8ce538785e465747fb31211b254fc1225dcd664c68f98da580690b698e45a261fad542254ae4b6dd4ef51319334ded2a0ff16bf4ce6949894b5f36711ccde37be8b6dd000eb45f638a0a2b896e60ade880d22c9cab16655da0a7c92a891a7ab87fc814d95a28228f2bded81b0543fffa76380e433f983057901426a78ad1cd1bf0164346146b3ab2298c18507dc8d2697ffe71d9bf092f47be93dafef3f3c6a05e2ae2dd1adddae159e18e9c96615da32c0e400afe8ec7dc9cf3ee041e7bc4286b010000",
    ],
    [
      "ETag",
      "YLc46MPA/wuV7ouAdJ6IfQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:41:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "c9",
      "52",
      "83",
      "30",
      "00",
      "00",
      "d0",
      "7fc9b9e9b076c01babaca5200a72c9d018981481b009b4e3bfdbf1fdc17b801263324d68ee1bd28117b097827ac447bf577449234e97d3c1df7ef66ac86f1f92f0b6fadf78719a7eee96d0dcf32ea40c26a678c1555a068878cbdc136e927c31c2ea3d1eddf5955e235e15e03b836b79aa5844b4bd0d4fdb390f5cfd2a2bc9985a9785e7608cdac992789705ade278669fca916d72a65d1b190de0fdb3d9e020588696685f43ad16ade40db71aa23344999115459c4eabdd6f4ad3f2c2c8b04b2d70006463742413a2cf9928abea01fc37d1bc33f2bceaa41cc9087eff00abc286db05010000",
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
      "Sun, 11 Oct 2020 01:41:50 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-5-1602380499267",
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
      "9b",
      "30",
      "10",
      "fd",
      "2bc8fbda0442421322456b96d01629212b9056d53421630c730b38c5265354e5bfef6c9aae55a5f60b60df7bf7eede1dcfe891d5199aa294154f2d6d0edf1e788ace1095b880db45f4237bca0edb1b7f30b8bd6fefccf2aa5adecc6680608a2570b52b694ff0b621544cb751bf6878bbc30de73d48d4737a8373cb1e4eac91ebdae763a0095ae62b563f02f98f943b3135cd9374bfe0bc2829de31d127bc7abd37f7b6b96bf803255298ef154d1011e6a79adf4b4eb064bc9e6d23d06f056d125a61564205ff89597af13e739fe1aa5f0078cf08c584f0b696aa2a4841789db3a26d7456347d46baca371f28f256de2236082fdbaa4e6a5cd13323c31227f2b0a3c665b8591b7e70b909d7f3d8df0449b4b8f6d6f3fe62b3daae83c8b8bbf642cf90382da9e61a33e3429f0238807e468564b5568fd5b5527ef1c7ff381445006941bb6032b6cef16062b9699e8e493e193a696ed1349da463070f538bb8233aca528a81a745350bd7bc765c6c0fc613277152cb4d46769e25ee80da896bc333c38ee58cc6e87886fe364cd225133b2e58e710ba0bfdd84be2701b2ce6b1a75bc8715bca6557986ae06d8d121a04d0273d1d559471505276fb41ec85f345ecdf7add8457b4c0e4103dc18c735c0a0a68dc807992366b9e81612898afbd2580f5c47e9e82024d7f3d23e5b9aae28de5aff41806a8ca95fa8da238f4832b5dce09718bcb5643f6dd876a2367a52afaf81b80b0a25d1274b3f5c27bd45d8534a70dadc9d7c304b00e7cf5a39dd61ea0b0f8a022249c617388501aa4a1dd06",
      "31ddec0bdb195843d7411adcc80f3167649f3c533954465ad15abe34d4ad3df4d989b5e2150441187ea0bd3afe03a18cb96d74040000",
    ],
    [
      "ETag",
      "CSBdqdyUQI11VYuW/lGmDQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:41:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1602380499267"
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
      "40",
      "0c",
      "c7",
      "bf",
      "8b",
      "f7d82001034a23f5013ada22a5d086a03d5415bae69cecba4b9cdd5d5811e2bbcf9776ac5a2ba52f89edfcacf3dff7cf1e7eaa5242088f2aff55a3d97dc9d1ddf920465b6b67f9555169110240277226e39393e7cbf1f44aaa61e17aebfe3856dfafefcecf99b0e90f2c04847bc8146a6921bcdf43290ae4b694745d949b260bc0ed2a5f5c25f17c71c57941d2e78b75144da6d10c0ec1b1510a27360dff89b68743004ff418638606cb14fd2c95a1274cdddccbb4a2a834762cd526450b0ddc7cc80dd59530441dae74869ddea8dbff3aee0ececefaa353e634a5c2292a195daf783c70e4848ee9378b845e9f09d3c42c386b9e5bae2bd908f1e17c918c06cd7c6f814c19eb5e76f2177cd5f63fa9c52741be00a5dba01c4b89a68d52d5464869d0da5692ec4654d5119b2e97d13b4894d29092ede056b500da6d8fc065b49c7cb45ab6cdbf5d7d9b24b37784756c862392cc6f66ab647273ebb987d7fb9dee1cda5b43ec158bde26bdee603c3c1d755f9c7341de4d7c4ee84c8d01a4827f806be520cc84b678f8036a4b5bff5e030000",
    ],
    [
      "ETag",
      "R++xF8BGdi5mt1U28RiWHQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:41:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ios_app` as __result FROM `records` WHERE  `id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-6-1602380499267",
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
      "6e",
      "9b",
      "4010fd15b47d6c6c2e067c91ac344d688be4d809c6b1a2aab297f54037c12cd95d925a91ffbd03c4b92852f2c4b273ce9c3933b38fe496171b322209cfee2a90bb2f372221470434cdf0f65a4eaf96544cbedefcfbbe88289f5d2e8b5d361e2382d72c45b7650e1d252ac9408d16f36e264555522944071375fc8eed5b4e6f60b9c3a1e3f791a6204f27bcb845f25fad4b3532cd8374371322cb81965c7599d83edf9bf78e594a71034c2bf3ada28922cafc50f338178c6a2e8af1628efa9502b9822de53956f042dc24dfde66ee72baed6608bee70c2863a22a745d15a660a2487956c9262b193d92a6ca5707320f26c1696cacb9502b5a966b832a63b592a0aa5c1b3fa2d9b9b1464329cf41ad8de5af200a0c046fd6c6d8383626e179181b360a6d40695e3432314d72a8259e1a11beef7e4da09a2a6883abbee5537b600d9334e9b374d0f392d4822419247d8ff6128b0d5d70370950e4e93a7bc3a285287c4afdfed0b29d7460d9a9e77803cf75fc21d8b6dbeff7586aa5094bbd0190fd1179905cc31957a550bc6d075946611cace268313d3d8983c6464ad1f8595b5c6de2759d1a4d22e8035ffb3aca052ad5bd0da771109d9cc6e155d08e73021965bbf91d0e34a5b902445349b7a0419e8b0d368d5ccce6611ccea62713643433ba38201419fd7e7c21c4bbb2e9b26ebeb596ef36fa07c015cdab0671df1e884df6fb3f88c0cd6bc9e4721144d7a4bd8a20050905fb7c74086e029fbd9fc3362314f7195594c67fdc13a66a0d26a1dd17be6daa6bd99e6df76c873460a9dfc55cc73d34a6ce5167842d14fac950bbcde8b315abd433088338e66938fd89d1ff1ba8dbc94b040000",
    ],
    [
      "ETag",
      "YrNVWaoL+jxBURaiOQWnyg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:41:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1602380499267"
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
      "2d90db6a83401086df657a5905631bdb08b9d01068417230048412c246476baa8edd5d13447cf7ce9adeece1df6f663e76809fb2c9c0874b59fc7628fba702f5de1c62545da5156f2d350ac102d4a260727e5b85494beaf95e247377d724627f50c172c9844abfb116e00f909758650afcaf011a5123979dcf72eac898ee5b9384db6db40e361cd4949960738ca2208cd6309e460bae74893147894d8aa6652be98aa9fe34b64ad46d85b6a24ea6a86082a7874252d70a496473627bf6cc73dc9777e775b170bd37e62a4a852ea961f478009ea2498b2aa63bbbc28c01391d593b9fd61bc75a7668944eff74d86b543b493c59a119ea3c045664a434cb9a0a0b52c1dff151eac77dfc03b13701ef6b010000",
    ],
    [
      "ETag",
      "5vCBXpos+wgX52PnXaQSsA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:41:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff1dcfc95283300000d07fc9b976b0ecdea0adac16b194ed928934b1100c612f38febb1ddf1fbc1f808a02f73d1c1a8a1978010bdae9db62eb359a2919a4a96a272957b93be621bdade4cd8786e846013b9afb2027b31a5c7a63672ecc59974c2d6005e740f3c429b5a2331e4ff0d59be3c813bed7e73df52949263d56f5cf7020f4c947524dd406aa295fcfb2b6c6cd9094b442ccb24e2e6e29c1d1cdb6b3f6925d75360ab53068a9f291b1f73477ba94875a348d95b26b9032b591ed7adccfee07762d652ec12fff50496003f09d971dee61f99889b2ae6fc07f130e0bc78fab8951873bf0fb07312ff3e605010000",
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
      "Sun, 11 Oct 2020 01:41:51 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-7-1602380499267",
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
      "6f9b3014fd2bc8fbda2484d0bca468cd52bab2256423a4d5364dc8980b734b708a4da6b4ca7fdfb569ba5695da4fd8bee7dc73ee830772cbcb948c49c2f3bb1aaafd871b919013028ae6f81aec3e7df959c87b7759da55beb7efd75f7b513e9920826b96a49b6d012d29ea8a811caf57edbc12f5965642b430516bd0eaf66da737b4ddd1c8e90f9026a1c8e6bcbc45f21fa5b672dce91ca5dbb910790174cb659b89cdd37b67e774b695b801a664e7a562074564e74dcd8f85605471514ed62bd4af2554316c282fd0c17f629a9cbdccdce674d3ce11bce30c2863a22e957685299828339ed795c94ac60fc4b87c76202b6feecd228b89a2de947149377062a554d158edb7605d84cb85e50717cb70318dfc6510af6697de62da9e2de7eb45b0b2ae2fbdd0b3144d0a305c6b629d995b8017d44f412a5e1af5483f6be5c7fef8af87a209282da109c603bb4fbb437b9464c98065c3de6992d99024c364704a7b89cd462eb86902147946d4b0688935bb145cbb9bc68cf587b19b8dec98da7d16839bd1a44b5367e438e47042fe565cc139975b2179d321721dfa911747e13a984d23cf9490d1ba50e78d315dc0738f0a0b44d01b351d74940b54d2edf683c80ba7b3c8bff29a09cf21a76cbfbac31967b49080685a61f314540b91825eece9c23b47b099d8b7635092f1af07a27bae5d3c6bf9133dc2016abbca7cc92a0afde0b3b173445cd1a236905d73d06564bcd0a60fbf11882bda2421dfd75ef883344f21645041c9de1f26824de0bd1fedb8f608c5c54715a9f08e9bc3a4d66015341bc44db18fecd3ae8319880157ea55acd71b1e7ba673e88cb081523d16d4ac3dd6d988d5f20984411c7e607a75f80769eb348074040000",
    ],
    [
      "ETag",
      "NvBJZlsz4On0rgy0zUK3Tg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:41:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1602380499267"
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
      "40",
      "0c",
      "c7bf8bf71a246034d0487d80966d6c297490aa0f53858e9c935d7b89b3bb0b1d437cf7f9d28e4e6da5f425b19d9f75fefbfed9c3bd2a2544b051f9af1acdee438eeebb0f96686bed2cbf2a2a2d4200e844cee4ef64717f72f32d2c5c2c46a3af72b0f9a3d287b333266cfa130b01d11e32855a5a887eeca11405725b4aba2eca759305e076952fae92e56cfe99f382a4cfe7d7713c9ec4533804c746299c5837fc3bda6e0f01dcd16689191a2c53f4b35486ee3075332fd38aa2d2d8b1549b142d3470f321375457c21075b8d219767a61b7ff71d41d9c9ef6c321739a52e114958c5eaf783c70e4845ed2038b845e9f09d3c42c386b9e5bae2bd908f1e16c9e848366beff814c19eb1e77f20f7cd2f692d4e29d205f80d26d508ea544d346a96a2da434686d2b49762daaea884d168bf815244a6948c97670ab5a00edb647e053bc18bfb55ab6cdf3ae2ec6c9f415611d9be18824b3cbe92a195f5e79eef6e97e273b87f6ca107bc5a2b749af3b189d0cc3eea373cec9bb89cf899ca9318054f00ff045398832a12d1efe02a01c6dbd5e030000",
    ],
    [
      "ETag",
      "xTOk5WK6mtLa88Jd4bzicw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:41:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `date` as __result FROM `records` WHERE  `id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-8-1602380499267",
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
      "000000000002ff85535b6f9b3014fe2bc87b6d02248190485157b56c634bd38e9056d33425c61c985bc0c436e9aa2aff7d07687a51a5f609e3f35dcecd0fe496970999929867db1ae4fda71b119323029a66785b7a3fd85d20cb64e544fa1fdb66dff96e95cd6688e00d4bd1a2caa1a7442d19a8e96ad9cfa4a82b2a85e8a150cfebd9ae35187ad6683219b863a429c8d3392f6f91fc57eb4a4d4df360ddcf84c872a015577d268aa77b7337302b296e806965be7634d14499ef7a1ee78251cd45395b2dd1bf5620d750509e6306cfc424fefc5ab9cf69d1cf10bce30c2863a22e7593154a3051a63cab65ab4aa60fa4cdf2c5812cfdb97f1a199b846ad8185419ebb50455e7daf8125e9c1b1bac26e539a88d71fdcd0f7dc3d8f06463cc8c63631e9c079161a34b024af3b2f588689c43a3ffd885e06deb1b02d55441175c8f2d97da9e3589d378cc526fe8c4a90571ecc563870e638b4d46304a62a0c8d38d7acba2a5282d3771dd31b32065c9d84e52c74a264e6a8d1cdba3031853d701462d70c8fe88dc49aee18cab4a28def5825c8741e4afa370b5383d89fcb68c9462e1675d724d112ff3d4582482dea96bdf44b940a7a6b1c122f2c393d328b8f2bb59ce21a3ec7eb9c569a6345780682a69011ae4b948b069e4f2621944c1c5e2648e8c764097078422d3df0fcf84e8be6abbacdb6fe3e58e5aff03e08ae6758bd875076293fdfe0f2270ed3a32f9b9f2c35fa4bb0a21050925fb7874086e031f3d9ec32a231497195d94c67fdc13a61a0f26a1db175eb4d9756cc71e5a5eb3510896fa4d6ce03987c6341a8d221450eac782ba55c63a3bb35a3d813088635e048baf18fd0f97a9eff248040000",
    ],
    [
      "ETag",
      "n8KcwIrndU5TtxcqgJivUg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:41:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1602380499267"
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
      "51",
      "6b",
      "83",
      "30",
      "10",
      "80",
      "ff",
      "cb",
      "ed",
      "b5424c47570b7db09ba503195bbb52c62825eae96cd57349dc90e27fdfc5ee25b9bb7c77f7912b5cca2683052465f1dda1eeef0ab46f2ed8a2e92a6bf86aa931081340ab0a2603b5f9b8ecd68990919eee3269c283bf0e974b264cfa85b582c515f212abccc0e2f30a8daa91db4e273d4e64ccf6adab3c85ef116735652e7bd9c771b88a23188ec304ce946c31478d4d8a6e5eabe98ca97d76aa46d56d859ea14ea7686084c7874253d72a4de471c59b7bfe4cc8e95cdc07819c3d305751aa6c490da3fb1df0164b56555bfa6551f019d063c8cef978fe70590a293c213de13bb1e37fcfaab7685e35f17e836eb5b8693c9253b3ac6c7587134815ffc8a6b4b77cf8039aa072d86e010000",
    ],
    [
      "ETag",
      "9aHYkSFb02Er3Sd2sAW1FA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:41:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff1dcf4b7282300000d0bb642d0ee153437784d12105b4464c4b370c845890864fc002767af73a7d37783f20e35c0c433ab6b568c0335832c359f375d0226cb9c520d1e6a09cc34bc1a22a7173183a94728bceb9e4093ff386c7d4378c3d7635d8c64c1afdabe97ddc8c00797044c4d2273bf02da77bcacfb98beefe8e49b8db9a519533f606fd69a3e9487aad4eb58c145f41b3c7b377290989756f3ba929ca2e0a66aa305cf449249dae98114f0bcb38c5c7631d5ed97b6f2dd3a2c7b66febe1776f25250bfa1339a9fa76042b20e6ae526248abc7ccb41d6705fe9be9b874e271c522534281df3f630e2c3d05010000",
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
      "Sun, 11 Oct 2020 01:41:53 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-9-1602380499267",
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
      "da",
      "30",
      "14",
      "fd",
      "2b91f7b59000e11124b422eaae4810b6105a4dd31439e626751b621a3b4c5dc57fdfb553ba5695da4fb17dcfb9e7dc479ec8bd28b7644c52913fd4503d7eb993293923a0598eaf59560419a5ab82c6b57f456fafff0a574c27134408c3526cb72fa0a5645d7150e3cdba9d57b2deb34aca16266a05adcec0ebf6469e1f04ddc110690a8a6c21ca7b24df6abd5763d73d49b77329f302d85ea83697bb9777f7d075f795bc03ae95fb56d14511e57ea8f9b5909c6921cbc9668dfab5822a811d13053af84fdca6e76f33b705dbb573041f0407c6b9ac4b6d5c610a2ecb4ce47565b392f113b12e5f1dc89a2ee82c76b82cea5d99946c0767ce966996e8c73d3897d16ae9ccc3cb55b49cc6f35598ac675774396dcf568bcd325c3b375734a28e66690196eb4c9c737b0bf182fa5b505a94563d36cf46f9b93ff3f74331049456d00493a137609d9117a4593ae4d9a8d74f330fd274940efbac977a3cf0c1dfa6c09067452d8b95b2f4531e6c477d3fc97a5e27f17dc69351da1b257e7fe0e3b71b40d627c733f2a7121a2e84da4b259a0e919b681ed3248e36e16c1a535b42c6ea425f34c64c01af3d6a2c10411fd47434512151c9b47b1ec6349acee2f9356d26bc809cf1c7f503ce3863850244b30a9ba7a15aca2d368c84d325bd40b09dd8f7535091f1af27627a6e5cbc6af90b3dc6011abbda7ec93a8ee6e1376be784b866456d2187e660cac844614c1f7f231057b449427e6c68f493344f11645041c93f1f26826de0b31fedb4f608c5c54715a5f18e9bc395d1e015341b246cb1cfec7e",
      "c7f73a3d62c1957e17eb0c87a79e991c2623eca0d4cf05356b8f753662b57a016110871fda5e1dff01be1a34c374040000",
    ],
    [
      "ETag",
      "ffl9fEEOlETu4HEhVzi/iA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:41:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1602380499267"
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
      "000002ff8d93516fda3010c7bf8bf71a24608c42a43e900d36a4001da4da43552137be646e1d9f673b5429e2bbef9c76745a27a52fc9dde577f2fdcfff1cd983d482c5ec4e96bf6ab0cd8712fcf7106cc1d5ca3b7a19d40e58c4c0f392c8649ec8c7057f689eb0d16651fd9814abaabcbc24c2e53fa1e22c3eb24282128ec53747a67905d496a3aa2bbd6fb388f9c684e22edb2ed75f29af50847c7d9da6b3249db353746e14dcf37dcbbfa3edf614b17bbcdb420116740e611663f11e72bf0c321daf8c829ec3dae6e0580bb71f4a8bb5e116b14795deb43718f7871f27fdd1743a1c5f10a730e75ea226f47a47e3318f9eab2d3e924836181261db980417edf34075295a21215caeb3f1a89def6fa090d6f9e79dfc015fb4fd4b2afe4e902e40aa2ea8042dc07651d2ecb910169ceb24d1edb931672cd96cd23710d7c2a214dde0417600ca1fcec022ddccfeb75ab2cdebaebeccb2f91bc27932c319c996abf92e9badae0277fb72bf49e3c15d5924af38083619f447934f17e3feb3733e6370139d137b5b43c4724e3fc037e9595c70e5e0f41bae7b28995e030000",
    ],
    [
      "ETag",
      "BEBiwFakyzoynpFmW8fMmg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:41:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `stamp` as __result FROM `records` WHERE  `id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-10-1602380499267",
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
      "6f",
      "9b",
      "30",
      "10fe2bc8fbda2440de2052d4752d5b91d2b44b48a36a9a12db9c995bc0149b4e5995ffbe039abe6c52fb29c8f7bcdc7377792477328fc9843099dc5750ee3edd2a468e08189ae06b76b5766e66b73b9f65f96af667bdfa9264e7c9748a0859b334cd8a143a5a5525073d592dbb49a9aa82964a7550a8e3d81d6764bb7dcf1ef8be3b1a234f432a6632bf43f62f630a3de9f50ededd44a924055a48dde52a7b7eef3db8bda254b7c08deebdb5eca18beebd6f7a9c2a4e8d54f974b5c4062a0de506322a536ce18519b3cf6fa5bb9266dd04c10f9203e55c55b9a9db4209ae722193aa6c54c9e491346dbefa20cb60169c46d6561bd4dc5a545b9b4d09ba4a8df5757179616d318f9029e8adb53e0f1681656d65bcb5a6d6b1350b2fc2c872d026066d64de984494a5501b3ccd21fc7ffa35811aaaa12d6ec6f6883a9eed33c1c65c78fd21133630e6b1f190f699cdfd010c62061479a6566f583457b92b288fc5a8ef8bb1e7b9ae3f1482419fdabcefc210559d816d8f851793fd11f95d4a036752174acb761864bd08a360132d56f3d393286862088ac1cfdae6ea10affb34181241efe4dad755a9d0a99e6c388f82c5c969145e07ed32679050be5bdee33a054d35209a96340303e5858a7168e4ea721946e1e5fc64868c664357078426931f8f2f846857345336cd6fed351a34fe07c0354dab06f1d07e1087ecf73f118187d792c9f755b0b821edd302049490f38f5787e0a6f0e1ffe770cc88c573461b3c3123f150b8ae4d7809edc1c8ac69af650f9d81e78d48032ecdbfb5a16d0f0f93a9356a45c820374f89da63c6a0ad59a59f4158c43dcfc3f937ac",
      "fe05f69295024c040000",
    ],
    [
      "ETag",
      "mPW1YLjy9bmnULzWUBgmHg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:41:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1602380499267"
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
      "000002ff2d90dd6e82401046df657a2b0da8a89878a10d49adda08e84d1b63561ce95a60e8eed2d610debdb3d89bfdf9f6ccccc936f029cb334ce124b3af1ad5ed214313d9438cbace8de6ada25223f4008dc8989422c9bc6bb51afb910cdff6f1cbef601545b319133afdc042c0b4818bc4fcac61fade40290ae4b2e351751d1933b7ca26bbe5264c76f3cd96a382ce367addafd7f3c53a84f6d0f6e04aa7182fa8b04cd136ad145d31354bebab4551e5e868aa558a1a3ab87bc814d59550440e278ee73adec8ed0f26ee3008faa3318339a5c2482a99dd27c0630c1991c7f4c3bae031a0ba239b5fbaf5dbc68ffec4f5fdc00b866160e50eff658b9b41bd55c40e1aed78f7aef24456cfb0b65135f62015fc35cfd2dcefed1f64fe79b477010000",
    ],
    [
      "ETag",
      "iaSg1jpK75QiEZURJx3KQQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:41:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "dd",
      "76",
      "43",
      "30",
      "00",
      "00e077c975f56c48b1bb445a8ab68a6d9d1b27221ccd362ad4cfcede7d3dfbdee0fb0194312e65d637827f83173053d55ab3b5df985847ecb69130aed4d3521e8d03fc881da2c4ec923125c041a90797254fc2621a9c5223fbdc0f945a16c445b2509402ab39ef451a3e6dc4248ecbfb57b24b174688cf8385232accc28d68e8fa683ae4cd693843d22179b53d7ba759d083d1eb67dd11d80c727410798e705af52dc76d1889f3f60aefb4dfab234fecdb36ada431d121340de959f35b7df7b03ecaac022bc0a7b6eeb8cceac74c8396b502ffcdac9f5bfeb8624e3bde81df3fb973892905010000",
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
      "Sun, 11 Oct 2020 01:41:55 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-11-1602380499267",
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
      "000000000002ff85536b4fdb3014fd2b91f711fa7ea4ad548dae0d235a9bb23485b1698a6cc7c90c691c6c07c450fffbae1dca4048f029b6ef39f79cfbc823bae145822688f0ecb662f2e1d3b520e818318d33785d8c7f7cbbfaf9f7f63c39925f8eced4d5bdf4cbd9740a086e580aefca9c3594a824656ab2dd343329aa124b211a90a8d1e9343ac376b7376af7c7e3eed0059e6279bae4c50db0ff685daa49ab75d06e66426439c325574d2a76cfefadbb6eab94e29a51ad5aaf255ba0a25aef8b7ece05c59a8b62badd80814a3119b31de63958f8cf4cc8c9ebd44d8e77cd0cc0779c324ca9a80a6d6c410a2a8a946795b459d1e411599b2f0e68e32dbd79e4509157bb222ef08e1d3b09d638d60f25734ec3f5caf183d375b89a45fe3a8837f3336f356bced7cbed2ad83897675ee8391a939c59ae33754eec2d800be8274c695e58f5c83c1be5a706f96fc7620820ad581d8cddf6107746ed3149894bd3516f40d236236444dc01ee91361df7593f210c03cf8a5a162e4441ddb13bec8f713c206e37ee773b6e4c0849e241e2f66877d476fb3445fb63742fb9660bae4aa178dd217419fa911747e13698cf22cf9690e22ad78bda9829e0a5470d0502e89d9af626ca05289976fb41e485b379e45f78f584972cc3f461730b334e71ae18a0b184e6692657228186a160b6f21600b6133b3f04159afc7a44a6e7c6c58b963fd32318a0b1abed176da2d00fbe5a3b07c405ce2b0bb9ab0fa68c94e7c6f4fe37006147eb24e8fbd60baf50fd14b2944956d08f8709601bf8f0573bec3d6061f3414669b8c3ea506544a864f50a715bed137bd0190c071d64c152bf89b9a3fea1692687c9c876acd04f15d57b0f85d662957a064110a61fd866edff01c8880d8e77040000",
    ],
    [
      "ETag",
      "D9XKYZzqPd+rB+HsYwrIpA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:41:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1602380499267"
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
      "ff8d93516f9b3010c7bf8bfb4a24c8d2b445ea03e9d22e1a4dda84bc6caa22071fd49df131db244251befbceb4cba675127d81bbe377f2fdcf7f0eec87d482c56c2bcb9f0d98f6ac04f7e88325d846394baf1ab505163070bc2432d4a6da7e9dd6376dd5dea1899266ff6dbdbfbe26c2e6cf5071161f58214109cbe2ef07a67905d496a36a2abde9b280b9b6f6c555b69ccdef28af50f87cbe4ed364924ed93138350aeef8a6e33fd0f6740cd80b6e975080019d839fa536f802b99b79999657b58281c5c6e4605907771f4a834dcd0de2802a83281a44e370f8e9321c5d5d0dc717042accb993a8895daf683ee6d071b5c43da964d19008d3c5a4b8e89e3baa4bd129f1e16c9e8d47dd807f038534d6bd2ee537f826ee5f52f10f82740352f541256801a68f92f5860b61c0da5e12ed86d7f5099b2c16e93b886b61508a7e70277b00e57627e0365d24ff5b2df9e6cfae3e27d9f41d611db9e18464b3fbe92a4bee1f3cf7f476bf93d6817d304866b1e07d1285a3cbf38b71f86a9d1bf476a27362671a0858cee90ff8221d8b0bae2c1c7f01edda9d655f030000",
    ],
    [
      "ETag",
      "0nrmbKEpCymyGor1AuwZUw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:41:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `first_name` as __result FROM `records` WHERE  `email` = ? LIMIT 1",
        types: ["STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "ejervois0@example.com" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-12-1602380499267",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6fda3014fd2b91f7710542782420a1b66ad32d13d0368456d53481636e32d31007dbe98a2afefb6e9cd2872ab59fe2f89e73cfb90f3f917b9eafc890c43cdd962077dfd622264704344df1f6629dec7e957737f1ed76f7b8f5b66954c8efd7a3112278c552745364d050a2940cd4703e6ba65294059542343051a3ed34da7ddbe97876773070fa2ef21464c998e7f7c8feab75a186add641bb990a9166400bae9a4c6c5eee5b0f4eab90620d4cabd67bc916aaa8d6e7a2c799605473918fe63334502a900bd8509ea18557e62a3e799fbac9e9a69922f88133a08c8932d7952d4cc1449ef0b494262b193e1163f3cd81ccfcb17f1659cb844ba51739ddc0d2a2ca5a2c24a832d3d6457839b1965854c233504bebf6a71ffa96b534be96d6c83ab6c6c12488ac36caad40699e1bb188c6195442cffd083e4ea122504d15d4c1856bf769dbb3077112bb2cf13abd38b1218ebdd8edd14e6cb34117baab1828f27495ddb0682ef29ee7d80978cc06c74decd81ef4bbe00c1ceaf63a94ad06ddb6eb391ec409d91f917f926b38e7aa108ad74d21b76110f98b289c4fcf4e23df949150acfdbc365715f1d6a7c62211f4495dfb2aca052a551d0ea6911f9e9e45c18d5f0f750c2965bbd916c79ad04c01a2a9c4c66b9013b1c2a691abcb59100597d3d33132cca4ae0e084586bf9f5e09d1ae305dd6e64b6651184c7f180307c40dcd4a0379a80f04d6b829822bfb041e8d6fb32bfbfd1f64e156d619c9f5dc0fef487d1542021272f6f53c116c025f3eaec3a62316771d6594c67fdc1ea62a1126a1de22bea9cc3cb37bed7ecfe9130396fa43acdf710fedaa7254196103b97eaea8de742cb4162bd50b088338fca9e9dcfe3f8411167669040000",
    ],
    [
      "ETag",
      "FjfyJuYVbWqyxq8qgTpr+Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:41:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1602380499267"
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
      "c1",
      "6e",
      "c2",
      "30",
      "0c",
      "40",
      "ff",
      "c5",
      "3b",
      "ae95806d309038d0813624845881cb268442ea76616ddd25ee18aaf8779cb24b623bcff6531af8366502233898eca7467bbecb90df7d10a3ab73767255543a84009055266434e3fbe96035314f7f1b1ddbf4231a4ca3d3782c84d35f58281835901acc1307a3cf064a55a0b4edf7b69d28189f2b5f596fe2f9f255f282129f2fb78bc5245acce0b2bb0470a4438c295a2c35fa8995a5236a9e7b59a78a2ac7d0516d353a68e1f621b35457ca12855209bbbdb0dbeff41e9e3b8fc361af3f103027add85029ec760db28689551ed3495ca12b806d43d14edbf357ca336bd03bedfee9e8cce8569664b543bfb5733378216fc562cbb6c600b492ef78337ccb2f574d6517746b010000",
    ],
    [
      "ETag",
      "BEt+D7PAi5xTcRrfZB7DBw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:41:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff1dcf4b7282300000d0bb646d9d50a898eea0fcac7614011536190c41324a800414e2f4ee75fa6ef09e2027844a89fbe64a39f80453fe8ee664be6e96b66195e6a10c1e8ee6e963062f9bed8e392b1cb9aa3fd0f47cbba90b2f2b5b4afdcd0f215b85b177576ee574181d159f2c4c020d46e6608e0db4aac3edc4826dd4c22e51c6b4ead48948c51ad9d7cc43c9bddbf8e971f15de6e7b580be4bb27dc81f72385ab476e22dcfa6e8c7ded7288cdd6810a6a76d8add97d0164e41f4aba1d7166a97175e353c1179c9e3e20a533003746c99a012b3d74cff406806fe9bb89f5afabada34175480df3f719b1b9805010000",
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
      "Sun, 11 Oct 2020 01:41:57 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-13-1602380499267",
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
      "64f6ab2dd3276d93666d2aae4d0a55a09acd66438661c05160901934c6f4bfef9dc1ba1a13fdc4ccdc73ee39f7c10bbae7558a1628e1f943cb9ae71f77224127882992c36b291b627bde2dd9d6618e8b4b7c1b4ef0d3720908ae59929475c17a52b40d6572b10ffb7923da9a3442f420516f30ea0da678389ae1f17c3e9c3ac093acc8b6bcba07f6ad52b55cd8f651bb9f0b91178cd45cf6a928dfdeedc7a15d37e28e5125ed8f9236a848fb6bd19f85a04471512df7211868256b6256125e8085ffcc3439fd98bacf49d9cf01fcc82923948ab652da16a4a0a2ca78de36262b5abc2063f3dd0185eed65d471615455b5671454a7662a54491583dd7cc3a0f769eb5f1cf7781b78a363b3f0ed717aeb7eaaf77dbbde787d6cd851bb8962249c10cd75a5aa7e6e6c305f4532615af8c7aa49fb5f26b83369fc7a209202d59178c1d3c2583199e2759e2d06c369a24196649324b9c09192598cec76c9c268c00cf881a16a94485673387a43489078e83e3f1dc19c64936c5f1804c529c01054f083a9ca0a7862b76c6652d24ef3a846e824de4c651b0f7d7abc8352564a42dd459674c17f0dea3820201f4454d071de5029474bb377ee406ab75b4b976bb096f594ee873f80033ce482119a04903cd53acf1440a0d43feca73cf006c2676790c4ab4f8f38274cfb58b772d7fa34730406d57992f0aa360e3ff32768e886b52b406f2d81d7419192fb4e9c35f00c28e7649d0d5de0d7ea3ee2960196b5845bf1f26804de0db5fedb8f78085cd0719a9e00eab43a516",
      "a10deb56889b6a5fd99381339ccf910137ea536c8c9d63d3740e9d9195ac52af15757b0f857662ad7c034110a6ef9b661dfe01a1668f5f77040000",
    ],
    [
      "ETag",
      "msra/MMhaLpSg0lP0hS50w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:41:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1602380499267"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d93614fa3401086ffcbdec7a309b4b52a891fa8d7bb23c15629265e8c69b6ecc0adb730b8bbd4344dffbbb3a8f5a226f805668667b2f3cebeecd83f590b16b2b52c1f5ad0db6f25d82b17a4605a650dbd1aac0d308f81e525917e1aaf315a6fe468142c6f8e1eec1ffd7d5b9e9d1161f2bf507116ee58214109c3c2db1dab7905d496a36aab7ad5651eb3dbc61597591acf7f515ea170f9fc3a49a26932637befd028b8e5ab8eff42dbddde63f7b84ea1000d750e6e9646e33de43676320daf1a050383adcec1b00eee3e941adb866bc4015506c168104cfce1e8c41f9f9e0e27c7042accb99558137bbda4f99845cb558a8fa492054322741793e2a27b6ea82e45a7c485f13c9b8cbb01ff070aa98d7d5eca2bf822ee3da9f81741ba01a9faa0126a01ba8f92cd8a0ba1c1985e12cd8a37cd019b2e16c90788d742a314fde046f600ca6e0ec0cf64117db65af2cddbae7e44d9ec03612cb9e18064f1c56c994517978ebb7bb9dfe9d682b9d4486631e07c12f8e393a3e389ff6c9d737476a27342ab5bf058cee90ff82d2d0b0bae0cec9f00b14761af5f030000",
    ],
    [
      "ETag",
      "0RIboAbvi331SX5qtYr+yg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:41:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ltv` as __result FROM `records` WHERE  `email` = ? LIMIT 1",
        types: ["STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "ejervois0@example.com" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-14-1602380499267",
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
      "536b4fa34014fd2b64f6ab2d504a699b346a2abb4b52ab52aa71379b76667ac151ca5466a81ad3ffbe97c1fa888926240c73cfb9e7dc07cfe44e142b32244c64f715944f3f6e2523070434cdeadbb15fcdb7e7d737c5e0fecf4da0b3f4e2813f8c468810354bd1f52687969255c9410de7b37656ca6a434b295b98a8e5765b6ecfe9787da73b18747a01f214e4e9441477c8bed17aa386b6bdd76e67526639d08d506d2ed7aff7f6b6636f4a790b5c2bfba3a48d2acafe5af430979c6a218bd17c86062a05e502d654e468e18db962471f53b7055db733046f0507cab9ac0a5ddbc2145c16a9c8aad26425c367626cbe3b90593809c789b5ccf5766951652d1625a82ad7d6cff8ecd45a6235a9c8412dadabdf611c5ad6d2185a5a23ebd09a44a75162b9a8b302a545615412ca72a8155e1a117d6e7f4da09a2a68828bc0e951b7ef0c58ca029ef63d9fa50e30d667814f3de6f04117ba2b061479bace6e58b49045df717a2b083cc63dcc008c77038f727c38f720edb0811bf4fc80fb6477401e4aa1e144a88d54a2e906b98aa3245c24f17c3a3e4e4253464ab1f693c65c5dc47b9f1a8b44d01775edeaa890a854b7369a26617c3c4ea2cbb099e60432ca9f66f738cf94e60a104d4bba060de5a95c61d3c8f9d92c4aa2b3e9f104196644e77b8422c3bfcf6f84e46963baaccd9bcc92389afe3206f6884b9a5706b26d0e046e7145a450ce113c1adf664976bb7fc8c2756c32928b79185f93e62a86144a28f8f7f344b0097cfb57ed571cb1b8e428a3347ee3f670558bf0129a2d12ebdacc0bdb77fb6ecf27065cea4f31afe3eddb55e7a833c21a0afd5251b3e258682356a957100671f853d3b9dd7fd22953d662040000",
    ],
    [
      "ETag",
      "bC5uUvPYhn9qZh7tgfQwcw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:41:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-14-1602380499267"
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
      "ff2d90514f83400c80ff4b7d050338e720d903331a8d44b7e94cd42ccb0d0a0381e2dde144c27fb7c77cb96b7b5fdb2fd7c3675e2710c03ecfbe5a94dd59867a658235aab6d48aaf866a8560016a9131592c0f9544a7f51ab57a7b9fbdfefe3c1cfd703e6742c507ac04043da439968982e0a3875a54c86dbb9d1c2732a6bbc6546ea3a7f085d38a12933e6ea2285c4437306c070b0adaaf314589758c666023a9c058df1b5725aaa6445b512b635430c2e34326a96d8424b2b962bb13db9d3adec5cc99f8be37bd62b0a458e89c6a6637cfc06b346951aee9c8aae03220c790add3f1fce6b277e99fbb9eb1dafef38b4ea35a4ae2e50acd5ee7e4704dc64bb3af962d5a100bfe8fbb5c9ff2e10f008f11c66c010000",
    ],
    [
      "ETag",
      "jPhmre0u2psQYZ8VzxKw9A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:41:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff1dcf4b7282300000d0bb646d1d2af2eb0ee42b5825d45ad83021440185c44091d0e9ddebf4dde0fd008431e9fb7ca057d2813720d0ca58e26548756b6de24cb37a81db77e9ba9be9743fc876aa8491a476b63b91bc5455640630f8eefcc8d1749fe595bb8eb3bbb7d73f473222b86b67022fc551c60567b7398171d32715668dd21cdd644e2bb1e5671e362566c371a36cc26abe98991aa5625b0e50a22b9d8e4e9072afb6b0d766aff647195b54c47b3a9e4e0f489c9a372f4547e54064041d6e9a712e64e9eb61f88eab83052013ab39e9f3fa399315c35880ff663e08469e578b204e38f8fd031aeac49605010000",
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
      "Sun, 11 Oct 2020 01:41:58 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-15-1602380499267",
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
      "000002ff85536b6f9b3014fd2bc8fbb826813c08448ad628a56bb4847484b49ba60919e742dd114cb1e95455f9efbb364dd76e52fb09dbf79c7bce7df0487ef172472624e5f95d03f5c3875b919213028ae6f8faed8bfa78c1af2e83323f8ff9e8e6b22fd7fd7c3a4504d72c49f755011d299a9a819c6c37ddbc164d456b213a98a8e38c3a8e6bf7079e3df4fdbe3b469e84225bf2f217b26f94aae4a4d73b6a777321f20268c5659789fdf37befbedfab6a710b4cc9de6bc91eaac8dedba29f0ac1a8e2a29c6e3768a0915027b0a7bc400b7f99bbf4f475ea2ea7fb6e8ee07bce8032269a52695b98828932e379539bac64f2488ccd1707b20996c13cb698289a7d9994740f27d68e2a9aa8870aacf368bdb216e1f93a5acde2c53a4c36f38b6035ebced7cbed2adc58d7174114588aa60518ae35b54ecd2dc40beaef402a5e1af5583f6be5a7062dfe1f8b26a0b48436988c6d973a9eeda7593a66993718a5990d69eaa5e3111da436f38730dca5409167440d8b9658b333cc5c7f304e86f66e900c0120a1aeed24d92075862e4ddd81e790c309f95d7305675c5642f2b643e43a5ac4411247db703e8b035342469b429db5c674012f3d2a2c10416fd474d0512e5049b77b11c641349bc78baba09df01272ca1e367738e38c1612104d6b6c9e827a2576d83012ce56c11982cdc42e8f4149263f1e89eeb976f1a2e5cff41807a8ed2af3259b385a849f8d9d23e28a168d81dcb7075d46c60b6dfaf01381b8a36d12f2751b44df49fb1441063594ecfd6122d804defdd58e7b8f58dc7c94910aefb83a4c6a115643bb42dc54fbc41e399eef79c4806bf56fcc77faeeb1693a87ce087b28d55345edde63a1ad58239f4118c4e987a659873f708a3f2f77040000",
    ],
    [
      "ETag",
      "XKt+HiVPEngFTi5hP2sO2g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:41:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-15-1602380499267"
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
      "e24010c7bfcbde6b898088d2c40750bc23a9a0507d3184acdd695ddceef476b7700de1bbdf6cf5382326f5a59d99fe263bffd97f77ec556ac142f62cb3df2598ea4706eede0773b0a572965e056a0b2c60e07846e49f6abb3d8938d78ff757af3703f7525daf1fb3cb4b226cf2023967e18ea51294b02c7cda31cd73a0b6045599eb559d05cc55852f2ee2f964fa93f21c85cfa70f51341c4563b60f0e8d823bbeaaf96fb42df7015be3f31c5230a013f0b31406d790b8899769795e2868592c4d0296d570fd21335816dc20b6a8d2ea9cb53afd76f7f4a2dd1b0cbafd73021526dc49d4c43e2c683ee6d07135c72da9649d2e11a68e49715a3f375497a256e2c3c934eef7ea013f02a934d6bd2de51ff82eee33a9f83741ba01a99aa00cb400d344c962c58530606d238976c58be2808d66b3e808e25a1894a219dcc80640b9cd01b88966c3af564bbef9bfabeb613c3e22ac23371c9078723b5ec4c3db3bcf2ddfef775439b07706c92c16bc4f3aeddec5d979bffd669d2bf476a27342674a0858c2e90ff8251d0b53ae2cecff02a9b675875f030000",
    ],
    [
      "ETag",
      "xyww/LaanVQCkF9thyDjVg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:41:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ios_app` as __result FROM `records` WHERE  `email` = ? LIMIT 1",
        types: ["STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "ejervois0@example.com" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-16-1602380499267",
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
      "fbda26242184448adaa8651b5b4a3b20ada6694a8cb950b7802936d9ba2aff7d17d3f4b149ad8484f13de79e731f3c905b5e266446629edd3550df7fb811313920a06886b7a1f7875b967d515c7fbd5dacb6a1ef57d6976c3e47046f599216550e8752343503395b85bdac164d456b210e31d1e1c0c6c71c8e1cd39a4e87f6047912f274c9cb5b645f2b55c959bfbfd7ee65426439d08acb1e13c5d37d7f3bec57b5b801a664ffb5641f5564ff6dd1a35c30aab828e7ab100d3412ea351494e768e19999c4c7af53f7382d7a1982b79c01654c34a56a6d610a26ca94674dadb392d903d1365f1c48e82edd93c8d87021d7b4aa360695c67a5d836c72657c0ccecf8c0d5694f21ce4c6b8faec06ae616cb4a98d31378e8ca577e645c600b512908a975a29a2710eadca6333bcff47d012a8a212bae07a62da74e098d3388d272c7546e33835218e9d7832a6a3d864530bac24068a3cd566d72c5a8a9259139a401a0fd22499308b4dedf120613673d2943ac3d801ea38a93d88c9ee80fcaab982532e2b2179d71172157891bb8e82957fb2885c5d464ab1f6d3ce5c5bc44b9f0a8b44d01b75edda2817a8d4b6d7f32337589c44dea5db4d74091965f7e11dce34a5b90444d39a16a0a03e1309368d5c9c875ee49dfb8b2532f4982ef60849663f1e9e09d17da5bbacf49b8451e0f99fb4813de292e68d866cbb03811b5c13c1a5790cbfb56fbd28bbdd4f64e14a7619c9b7951b7c27dd550029d450b2f7e789601d78f7cfda",
      "af396271d151462afcc6ed61b2156135745bc48bd6cc237b3c40fa886870adfe890d4dd31eefdbd5e668334201a57aaca85b732cb4136be4130883387c5f776ef7179e3f60b366040000",
    ],
    [
      "ETag",
      "SIzi446PmhKkAUvSNNp4Jg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-16-1602380499267"
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
      "0002ff2d90616b83301086ffcbedab056d47b70afd5087b081b49bc57d19a5a4f67476ea65c9b922e27fdfc5164272f7e6b9bb3719e0a76acf10c2a92a7f3b34fd4389fce182146d57b39543536b113c4056a590c135e875e04765a313de2f3e9759b18a37ebb51036ffc64641384051617db6107e0dd0aa06a5ec78345347c1b8d74e8976bb24de6c4568e8ec846d96249b2889613c8c1e5ce894628106db1c5d4b6de88239bf39b75635bac699a5cee4686182a78bd250a795219a89320b96b2fcf9e2d97f5cade6cb27016bca1557d40a9bed41c630b1aa53ba5af73401cc148aef62daff4466d3a1f374b8d351cf68df0dc9688b6eaa7f73f042ce158b5b57e141aee43f5e2bbee5e33f9ed528386c010000",
    ],
    [
      "ETag",
      "1w1yp10BgmpLtS3V6Uf9EA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "6d7343300000e0ff92cf6def1895ec9bdc7a354cd994f1254704c1bc24aa6cb7ffbede9e7ff0fc808c522625998796f5e0196c998a0ef4e00c106b2625517887a734eacc58b114a3bc5365ac62d44d2faad77883eb3ae374bd0bffe31a26b2f1f796354d9a0dd1806be20bb65651780ee276ca13a8cca4c7fe57c85f4f9e6a601af4f9d02c5872d5395ad52d5a0a8fb7a65b2605956e817bb7968c5ca8ba19fe5187b554f6192c95a575f58b81ece6fd56db4b5f8b2acb8b5896ebf2d91bbc73b8e969a9967e9f8337b0036c1db96092f0c7ec49476807fe9b64de46f6b862960926c0ef1f1088e8a405010000",
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
      "Sun, 11 Oct 2020 01:42:00 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-17-1602380499267",
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
      "85535d6f9b3014fd2bc87b5c9390848410295aa394ae9112b20169344d1332c630b780a96d5a5555fefbae4dd3b5aad43e61fb9e73cfb91f3ca15b5667688e5256dcb5543c7eb9e1293a4354e1025e69c3aec9a1e095187d5daac817c581860f8b05209866495c3525ed49de0a42e57c1ff50bc1db060bce7b90a837747bc3a93d1acf6cc7f3465317789296f986d5b7c0feab5423e783c149bb5f705e9414374cf609af5ede07f7a34123f80d254a0ede4a0e40450e3e16fd56728215e3f5621f8181565291d00ab3122cfc6766e9f9dbd47d86ab7e01e07b46282684b7b5d2b62005e175ce8a5698ac68fe848ccd570714f91b7f155b84976d552735aee89995618513f5d850eb32dc6dad7570b90bb7cb78bd0b926875e56f97fdd56eb3df069175b8f243df52382da9e15a0bebdcdc02b8807e46a562b5518ff5b3567e6ed0fafd583401a425ed82896b4ff170667b699eba249f8d27696ed3349da5ee048f539b780e75b29462e01951c3c235afc7d9c81ebac44926999d278ee30d136f8cf3249d796936cbf3a93376d1f10c3d08a6e805930d97aceb103a84ebd84fe2701fac96b16f4ac8715baa8bce982ee0b547050502e8839a8e3aca3828e976af83d80f97ab787ded7713ded00293c7e80e669ce35252406301cd53546c79060d43c172eb5f00d84cecc72928d1fcf713d23dd72e5eb5fc851ec300b55d65be288ac375f0ddd83921ae71d91ac87d77d065e4acd4a68f7f00083bda25413ff77ef80b754f21cda9a035f97c980036814f7fb5d3de0316361f64a4823bac0e915a8408daad1033d53eb32723dbed7e5485857a17f36ce7d4349d4367a415add57345ddde43a19d582b5f401084e907a659c77f641e142577040000",
    ],
    [
      "ETag",
      "epiVcWgomr2+AtSErgWeRw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-17-1602380499267"
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
      "02ff8d93516f9b3010c7bf8bf74a24c8529222f5816cd91a89261d217b99aac8c1077166386a9b545194efbe33edd26a9d445fe0eef89d7cfff39f13fb2d6bc122b695e5630bfaf8a904fbc3052998565943af066b03cc63607949e4d5e3226d637f17e2e4761794ebf8e7beda3edddc1061f21d549c4527564850c2b0e8d789d5bc026acb51b555bde9328fd963e38aab2c9d2fbe535ea170f9629d24f13499b1b3776914dcf24dc77fa0ede1ecb13d6e532840439d839ba5d1b887dcce9d4cc3ab46c1c060ab7330ac83bb0fa5c6b6e11a71409541301e04a13ffc3cf147d7d7c3704ca0c29c5b8935b1eb15cdc72c5aae527c22952c1812a1bb981417ddf34075293a252e9c2fb270d40df81628a436f679297fc11771ff928a7f10a41b90aa0f2aa116a0fb28d96cb8101a8ce925d16c78d35cb0e97299bc83782d344ad10f1e640fa0ece1027c4b96f1ff564bbe79ddd5d7389bbd238c25375c906c7e375b65f1ddbde31e5eee777ab460ee3592590c389f04fe6872350efd67eb7c4167273a27b2ba058fe59cfe805b6959547065e0fc075317787e5f030000",
    ],
    [
      "ETag",
      "5qNRuA0h6o8Hh1gUAVjmbw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `date` as __result FROM `records` WHERE  `email` = ? LIMIT 1",
        types: ["STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "ejervois0@example.com" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-18-1602380499267",
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
      "02ff8553614fa34010fd2b64efab2db4165a9a34da54ee8ea456a5d4cbe572697797815b0516d9c5d398fef71b16eb694cf413b0f3debcf7668727722bca844c0913d95d03f5e3971bc9c811014d333ccdae5777155bc0950a59261ef2211d3557f3d90c11a265295a5439f4946c6a0e6aba59f7b35a3615ada5ec61a3de60d21b78cef078e28c7c7fe88d91a7204f97a2bc45f61fad2b35b5ed83763f9332cb815642f5b92c5eceedfba15dd5f206b856f65b491b5594fdb1e8492e39d54296b3cd1a0d340aea2d1454e46dc01766c24edfb6ee0b5af43304df0b0e9473d994bab5852db82c539135b5e94aa64fc4d87cf542d6c13258c4d62ea11a761655d6765b836a726d7d8d2ecead1dc649450e6a67fdf81e448165ed8ca39d35b34eac65781ec6d6008512505a944626a62c8756e27912e1fbf9b704aaa982aeb81d3b1e1d4c1c9fa56cccd3c9b1cb5207189bb0b14b8f99c3fd118c12061479baed6e58b49425c605e029d23c9f25433761dc1f8c19e39e9fba63cf49469c7197b9647f44fed642c399509554a21b07f9118571b08da3cd6a318f031323a598fdac33d78678ed536348047d906bdf568544a576b6e12a0ea2f9220eaf83ee3a979051feb8bec30b4d69ae00d1b4a60568a8cf658243239717eb300e2f56f32532cc1d5d1e108a4c7f3dfd27c48f9599b2364fb28ea370f5cd183820ae69de18c87df742e00677440ae59cc283f16db664bfff8d2cdcc7ae23b9da04d14fd21d4590420d25fffc3e116c0a9ffe56871d472c6e39ca288ddfb83d5cb522bc866e8b44d19a7966bbc381eb8d8801d7fa5dcd1b7b8771b53dda8e5040a99f13753b8e413bb146bd80b08897bf3293dbff030c173efd63040000",
    ],
    [
      "ETag",
      "gVNqpbCeQsIbgixl2a4uQA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-18-1602380499267"
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
      "db",
      "6e",
      "c2",
      "30",
      "0c40ffc57ba5529a6d0c9078e0a65d84362ee3651342a175bb766ddd252e5385f8f739652f89ed1cdb4739c37756c530826396fe3468db9b1479ed830dbaa66027574d9543e801b24985742fabfb50db53fe317f7cd33ccba7f9ae5c8fc742b8e80b4b03a333241916b183d1e7192a53a2b41d0eb69b2818b7b5afcc27ef0bc94a8a7df6ba5b2e27d3e5022efb4b0f723a6e30418b55847e5e6d29c7889fbdaa33655d60e0a8b1113ae8e0ee21b5d4d4c612055209c24110f695be1da8bbe150f71f042c28329c5125ec6e0bb286894db1a15f31855000db85229d74e749ca5a6915281da8d09bedff7ba62da35b591201877eb7ba7accc8bbb138b36db00791912f79caf89a5ffe00793951356f010000",
    ],
    [
      "ETag",
      "sJP512rvjZDGO2tCjBjUmQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "4b6e82400000d0bbcc5a0c7fa13b46c10f05a380a01b324c870650980f54c0f4ee357d37782f80302642e47dd790167c8009a9f6122ffdce82ba830774d8983a3ba628b551a5443f61b1ee4625c9c26a927574896b1acfb3b2db4fde5c2a6dd153d844eee133bf9c259e40497257d7e8e8ec15064b5f4c78303d2f645a963c14b6456136074f690aa899a68f1375c29455ed46a54f39865653f0ce8bf4a765c45f013fd7ee16e36f79adae4ac262c8137f77c3c2a8e5ec3444a37bbf2599ac4271471af72b385f47072c001969c589c8abf74c336c7b01fe9b793f51f2be428238e1e0f70f2f8ba38105010000",
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
      "Sun, 11 Oct 2020 01:42:02 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-19-1602380499267",
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
      "000002ff85536b4fdb3014fd2b91f795be4bdb54aa4657c2e8d4a65b9282a6698a1ce726332471b19da20af5bfefdaa10c84343e25f63de79e731f7e22f7bc4ac994243c7fa8411e3edd89849c11d034c7db6dfead7edc1fd2b2f832e452aec74105c3c7d90c11dcb0142d7705b494a8250335dd86ed5c8a7a47a5102d4cd4eab9addea8db1f4cba43d7ed8fc6c85350642b5edd23fb8fd63b35ed744edaed5c88bc00bae3aacd44f972dfd9f73b3b29ee8069d5792bd94115d5f9bfe8e74230aab9a866db100dd40a640c25e5055af8c74c938bb7a9db9c96ed1cc17bce803226ea4a1b5b9882892ae3792d6d56327d22d6e6ab1f127a2b6f11394c147559c5152de1cc49a9a6b13eecc0b90a366b67e95f6d82f53c5a6efc385c5c7beb797bb1596dd77ee8dc5e7b81e7689a1460b9ceccb9b0271f0fa89f82d2bcb2ea91b936cacf0d5abe1f8b21a0b48226188fbb23da9b74dd244bc62c9b0cce93ac0b493249c6e7749074993b84619a00459e15b52c5a896aec226ae2d2b807d9281eb2de284e60d88b597f3048a90b034813723c238f926bb8e46a27146f3a446e8365e4c551b0f517f3c8b32564b42ef46563cc14f0daa3c60211f49f9a8e26ca052a99762ffdc80be68b6879e335135e414ed9217cc01967b45080682ab1791ae45aa4d830e2cfd7de2582edc4be9f828a4c7f3d11d373e3e255cb5fe8110ed0d8d5f64bc22858fa5fad9d13e28616b585ec9b1f5346c60b63faf81b81b8a34d12f263eb053f4973154006122af6f130116c031f3eb5d3de9b871c1a19a5f18cabc3941161129a15e2b6da67f679bfdf1bdb87aaa9d4ef627d77726a9ac961324209957eaea8d97b2cb411abd50b0883387ddf36ebf817fc97771e77040000",
    ],
    [
      "ETag",
      "UgJuwvydmlB4irrM7Rne4w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-19-1602380499267"
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
      "8b",
      "f7",
      "1aa440692091fa001bdd90027490eea5aa901b5f523327f67c0e15457cf79dd38e55eba4f425b9bbfc4ebefff99f23fb296bc112f620cb5f0dd8c3a712dc771fac011be5905e46d7082c60e07849e4f8b0bb0e9be7c8549b8bf133c63cfe315a3c5d5d1181f923549c2547564850025972776435af80da72ad9aaadeb659c0dcc1f8e2265bcf975f29afb4f0f9f2364d27d374c64ec1b95170c7b72dff81b6fb53c076fa610d0558a873f0b318ab7790bbb99789bc320a7aa81b9b03b2166e3f945637865bad7b54e9f5e35e3f0a0717e37018c7836844a0d2397752d7c4de6e683ee6b4e36aad9f4825eb0f88b06d4c8a8bf6b9a7ba14ad121fce9759346c077c0b14d2a27b59ca1ff055dcbfa4e21f04e906a4ea824aa805d82e4a9a2d17c2026227a971cb8d3963d3d52a7d07f15a582d4537b8971d8072fb33709dae26ff5b2df9e6efaebe4cb2d93b021db9e18c64f3c56c934d16379ebb7fbddfe9c101de584d6641f03ee987c3f1e5280a5facf3597b3bd13989b30d042ce7f4077c938e25055708a7df2f2056355f030000",
    ],
    [
      "ETag",
      "8yjF0uz6pmS38zs9a9V7Mw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `stamp` as __result FROM `records` WHERE  `email` = ? LIMIT 1",
        types: ["STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "ejervois0@example.com" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-20-1602380499267",
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
      "6f",
      "da",
      "30",
      "14fe2b91f7b80281000948a8adda6c8b04b40ba1d5344d603b27996912d3d8614515ff7d274ee94595da27229fef762e3c923b51c4644c9848ef2b28f75f36929113029aa6f89a7155cd453467fb41feb5eff69ccd833f4b271344889aa568becda0a564557250e3e5a29d96b2dad252ca160ab57a76ab3bb47b8e67f747a3ded0459e822c998ae20ed97fb5deaa71a773f46ea752a619d0ad506d2ef3e7f7ceaed7d99672035cabce5bcb0ebaa8cec7a6a799e4540b594c960b0c5029285790539161841766cccede4ab705cddb2982778203e55c5685ae63a104974522d2aa34aa64fc484ccc571f64e14ffd8bc85a2b8d9a6b8b2a6bb52a415599b6be8557336b8dfd242203b5b66e7ff8a16f596b13696d4dac536b1acc82c8eaa2530c4a8bc2f8449465507b3c8d2278bf809a403555d01457ae3da45dcf1eb184b93cf19c014b6c60cc63ee803acce6a33ef463061479ba56372c5ac8c21eda8351ec0dc0e973dee7a361ec39cc4521da75c08e5dc6fa90b86e4c0e27e45f29345c0ab5954a34f320b76110f9ab285cce2fce23dfb49150ecfdb2095737f13aa7c62611f4415f87ba2a243ad5c30de6911f9e5f44c18ddfec730a29e5fbc53d6e34a1990244d392e6a0a19cc9188746aeaf1641145ccdcfa7c8304bba3e221419ff7e7c2144fbad99b236bf641185c1fcbb097044dcd0ac32905df3416083472285b2cfe0c1e436677238fc41161e64a3487e2efdf017699e4248a084827fbe4f049bc2a7ffabe3912316cf1c6df0f4b4c0ebe1aa36e125345724f23acc137bd0736ccf23065cea77b59ed33d8eabd6a8152187423f75d41c3936da9855ea198445",
      "5cfedc4ceef01fcc4b1d6c64040000",
    ],
    [
      "ETag",
      "lcsuNiTNby5m+4723jxEMg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-20-1602380499267"
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
      "2d90db6e82401086df657a59a840d58a8917da9a68a2ade221691a63d675a05860e8eea231c477ef2cf6660fff7e33f3656bf8498b23f4e19026bf15aaeb438266690f11ea2a339ab7920a8de0001a9130b9cacead53bc9db4ded69fdb00e5c7e3b4ed5f060326b4fcc65c40bf8638c5eca8a1ff55432172e4b2fd5e351d1933d7d226ebe97cbc5a0fe70b8e723adae87d339b0d47b331dc7637074e74883046858544dbb454744269a6d6578bbcccd0d55429891a1ab879481455a550442e276ee0b97ed70b9e7b5e3b0c83ee0b83194961522a98ddac80c71832228be8c2bae033a09a239bc7cd7ab6f153a7e7753aa11fb6c7a195dbfd978dae06f542113b68b4e3bdbbca2b593dc3da4655e88014fc3593d4dcefb73f83d89ca777010000",
    ],
    [
      "ETag",
      "Slv/jfVH/DTYV2ecO+I41w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf4b7282300000d0bb64ad4e875f49774410055a404042370c60d0d409f21148707af73a7d37784f5054151986fc71bf91067c00514870536ddcbb8e14e38c2ed6ec345dc485df94b81badefc6968ac0d654c8add4f58c23d31bb35da69852ec1c6596ed5d0c97720a12adc48cf0d9ab7dd74e75ea94cb9b55a43a32b75f7380bdb015b14a695c5f0c182e783daaca2931cadb2e4aeb3a2f78a455d28fef4bbc555802e3731206bd7638ac13245cba87d9347e766c7b15ba8d067ec52c35118bdf8d30cd72b925f1ee54811520bca53d1972fa9ac92a842bf0dfcc1fa225af2b22454f7af0fb07bd69152a05010000",
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
      "Sun, 11 Oct 2020 01:42:03 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-21-1602380499267",
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
      "0000000002ff85536b6f9b3014fd2bc8fbb82690172491a2354ae91a29211d9076d33421632ecc29c1149b545595ffbe8b69ba5695da4fd8bee7dc73ee832772c78b844c49ccb3fb1aaac72f3b119333028a66f81adcd9bb437e590ec734b9befdb9dbdc7cdd5d3dcc6688e00d4bd27d9943478aba6220a7dba09b55a22e692544071375fabd4ecfb6fa83b1359c4cfab6833c0979bae2c51db2ff2a55caa9699eb4bb9910590eb4e4b2cbc4fee5dd3cf4cdb2123b604a9a6f254d5491e6c7a2df72c1a8e2a2986d0334504ba822d8539ea385ffcc243e7f9bbacbe9be9b21f8c01950c6445da8c616a660a2487956573a2b993e116df3d58104eeca5d84061379bd2fa282eee1cc48a8a2917a2cc1b8f4376b63e95d6efcf53c5c6ebc28585cb9eb7977b1596dd75e60dc5eb9be6b281ae7a0b9c6cc38d7370f2fa89f8054bcd0ea61f3dc283f3768f97e2c0d01a525b4c1c8b16cda1b5b93388d1d968e07a338b5208ec7b133a283d86293210c931828f2b4a866d142148e0d716a3b83c8eab351341c5bbd88f61d3b1aa5a35e3a0116c7498f1ccfc843c5155c70590ac9db0e915b7f19ba51e86fbdc53c74750929ad7375d11a6b0a78ed51618108faa0a66313e502959a762fbdd0f5e78b7079e3b6135e4146d963708f334e692e01d1b4c2e629a8d622c186116fbe762f10ac27767d0a4a32fdfd449a9e372e5eb5fc851ee2001bbb4a7f4910fa4befbbb67342dcd0bcd690437b20255afe8bb5a1ebe31f44e292b659c88fadebff22ed930f295450b0cfa789601df8f45f3b2d3e6271f551462abce3ee30d988b00ada1de2badc67f6a83f702623a2c1957a179b58f6a96b4d8e2623eca150cf15b58b8f85b662b57c016110c7efe96e1dff01c61259ac78040000",
    ],
    [
      "ETag",
      "Sk6jvlFp48adPWXjOV+jHw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-21-1602380499267"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92dd6e82401085df657a8b095a8b4ae2855adbd288f50793a68d312b0c88051677178d35be7b67a9b54ddba4bd8199e19be59c03077889b3006c58c6d1a640b1bf88508d75314159244ad22de799443000158b88dc8ddde8f1357b728bab70e3f56af71bcfdd8edb6d22a4bfc294817d8030c62490603f1f206329d29acf9322cd16656780dae77a38f526cef096fa9407ba1fce06834e77d087a3715e0c98628b92ffc7dafc68c09a2f2718a2c0cc47ad25177c8dbe72b44dc9d23cc18ae485f0514209970f22c18b9c09ce2b34a9d4aa95aa65d62e9b66bdd5aa590d0213ee3315f38cd8d994f481e28a2513be2397601120ca920c87e5754be338288de8d2197a56bdd4f7152069619ce0e26f90f4ae187d860fec14c1778ea5bcc8d499ba193c747e3b8e32fd3ceabae3f57f1052515267c473dcfed4ebb823cdcd4fdebb7b85722438052951675835ebcdab8665bec7dae33a6a7a8fad448106f88cfe8ebb58811db244e2f10d1425e19c7b020000",
    ],
    [
      "ETag",
      "wQMgXznZMu5fqTC2JqTMvQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COALESCE(AVG(`amount`), 0) as __result FROM `purchases` WHERE  `record_id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-22-1602380499267",
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
      "6f",
      "a2",
      "40",
      "14",
      "fe",
      "2b64f6a54daaa208a289e91a4bbb2454bb8a36ddcd4687e140a705863243bba6f1bfef016a2f69d27d02cef92ee7c633b9e759484624e0f14309c5eedb9d08c8090145638c9edfef76b7c67af2e4f0bf8657fef26fce9368321e2382572c49d33c81961465c1408e56cb765c8832a785102d146af57aadaea5f70c5bef0f873d6b803c0949e4f1ec1ed9b74ae572d4e91cbcdbb110710234e7b2cd44fa1aef3cf63a7921ee8029d9f968d94117d9f9daf434118c2a2eb2f16a890594128a0da4942758c21b330cbe7f946e739ab663043f720694315166aa2a0b2598c8221e9745ad4a46cfa42ef3dd0b593a9e33f5b5e97ce239cba97334595f1c6d695a696c8f4f34fd58a352db6c0a9065a2b4f3c5fc52dbe6687b4b25c8ad76fdc359381a860a11f104363cdc6a63ed54f3dc4bd7d7ba58420852f1ac2ec0a7410295f9cb8cdccf9ba90854a17693dc0c748b766d7d1844c18045b66106910e41600703931a81ce867de8870150e4a94abd66d14c64e6d0002bea77c136a361100e6c839afa5067b66e99183707a11576436a90fd09792ab882332e732179332872bd707d67e32f56b3e9c477ea36228a13386b8aab9a785fa7c22611f4455ffb2acb053a55537767beb3984c7d77ed348bf620a66cb77cc05547349180685ad01414149722c4a191abf9d2f5ddf96ce221a3deded50121c9e8f7f31bc1dfe5f59455fdacbcac7eed7f00ac6952d688c7e68574c97eff071178940d99fc5c398b1bd2841610410119fbffea105c27fefb6f1d0e1db178ea6823157ee3a1305999b0",
      "029a83e1695d5ec3367bfd81d12335b8509f72b6d53d4ca6d2a81421854cbd74d41c3a36da9895f2158449dcf3cc9d5d60f61fc11a216268040000",
    ],
    [
      "ETag",
      "Fkyyh3VAwEix3LuZTYFlfA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-22-1602380499267"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff2d90516f82301080ffcbed1516c445d4c4075cb6a8217363f361598ca9e5401870ac2d5b08e1bf7bc5bdb477d7efeebeb487efbc4e6009e73cfb69517577199a371bc4a8dbd268be1aaa3582036844c6641114bbe632dfcbac4b8bf81313b9ddecc2d58a092d2f580958f690e658261a965f3dd4a2426e3b9dd4389131d335b6f21cedc30f4e2b4a6cfa7288a2701d3dc1701c1c28e81c638a0a6b897660a3a84069b6d6558baa29d1d5d42a891a46787cc814b58d50442e575cdf772733cf9fcebd87c5c29f050c962485c9a966f6f00ebcc69011654c7fac0a1306d418b2753a9ebfb67c1f4cadd3f19f5e7706f5ab225eadd16ef56e068f64ad0cdb1ad5a20352f06f6c7273cb872b935adf986a010000",
    ],
    [
      "ETag",
      "j7jJph8OcgyfjRYedcIHJA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff1dcf417282301400d0bb64ad0e50e8407795812aa0c60aa86c982f04025402095442a777afd37783f78320cb8810e9c01ad2a2372441b356d9ca67e65a7fcfc5d8465925f301f081a8a9f97062c52b35f5d8166e58cb464062869813c993879d6a9e4b3dbb9fc0aa2f27d97decaabcae4071f012201c6f5bbd9d347a6e0b3ff20387b3efe853c4e939c9d8c4b8021e35f088672aa3afebade4fa4675ed7a56d461bff52836f734dbc4cbd275edd32c54737cbd9481ad798172ec4206467f8023f445c3b46b4b92ddfdced00291a9ab381169f59cbd1896b540ffcd74901d795ed70438e1e8f70f6aa852e305010000",
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
      "Sun, 11 Oct 2020 01:42:05 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-23-1602380499267",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6f9b3014fd2bc8fbb8e60d09448ad628a16bd484ac84b49aa60919b850a704536c5a4555fefbae4dd3b5aad47ec2f63de79e731f3c937b5624644c22963dd4501dbeed7844ce08489ae1ab37eff7a6957375695ec1acffb0febe3b5cefae27134430c512745fe6d012bcae6210e3eda69d55bc2e69c5790b13b5fa83566fd8ed0fecaee938fde1087902f274c98a7b64df49598a71a773d26e679c6739d0928976ccf7afef9dc77ea7acf80e62293aef253ba8223a9f8bfec8794c25e3c564bb4103b5802a843d65395af8cf4ca2f3f7a9db8ceedb19821f590c348e795d48650b53c4bc485956573a2b193f136df3cd816cdca53b0b8c98e7f5be080bba873323a19286f2508271e1af57c6c2bb58fbab69b0587be16676e9aea6edd97ab95d791be3f6d2f55d43d22807cd3526c6b9be797841fd04846485560fd4b3527e69d0e2e3581401a50534c170d41dd29edd75a2341ac5a93db0a2b40b516447238b0ea26eec9860261150e46951cda2052fcc113547bda11df66c8b86662f81903a0e5ead61426d3be95a3020c733f254310973264a2e58d32172eb2f02370cfcad379b06ae2e21a5752ee78d3155c05b8f120b44d027351d5594715452ed5e7881eb4f67c1e2c66d26bc848cc687cd03ce38a5b90044d30a9b27a15af104d46a4f57ee1cc17a62bf4e4141c67f9e89eab972f1a6e5aff40007a8ec4afd259bc05f783fb59d13e286e6b5863c360752a2e53bac0d5d1fff221297b4c942aeb7aeff9b344f3ea45041117f3d4d04ebc097ffda69f1118bab8f3242e21d7727164a24aea0d921a6cb7d615b7dcb321da2c195fc101b8e7aa7aea91c2a23eca1902f15358b8f853662b578056110c7efe96e1dff0123e60d2078040000",
    ],
    [
      "ETag",
      "ND21Ar9KH4KeC2qO+jyQjQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-23-1602380499267"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92dd6e82401085df657a0b09fe1495c40badb635455a152f4c63cc0a036281c5dda5ad31be7b67a9b54ddba4bd8199e19be59c0307784af2101c5827f1ae44b1bf88514d74314559a64ad2ade0b9443000158b89f406c3783c9814eddde2d5676dcfbdab2fc2b8db2542061bcc18380788124c4309cee301729621ad053c2db37c557506a87da187337f3af26ea8cf78a87b6feebabdbe3b84a3715e0c9962ab8affc7daf268c096afa718a1c03c40ada5107c8b811a699b9265458aa6e4a508504205570f62c1cb8209ce4d9a98f58659b3ad7aa36d353b9dbadd2230e5015309cf899dcf481f28ae583ae52fe4126c02445592e1a8ba3ed338092b23ba1c79beddacf47d05485a94a4b8fa1b24bd1b469fe1033b45f09d63192f7375a6aeddfbde6fc751a69f470d7afef0072115257546fcd17838f37be307cd2d4fdefb7b85f241700a52a2ceb06635db972ddb7a8ff58aeba8e93d8e12251a1030fa3b6e13054ec45289c737130487d27b020000",
    ],
    [
      "ETag",
      "NDEgMDQp8qYxTa8NLK2Ydg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-24-1602380499267",
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
      "000000000002ff85535b6fa24014fe2b64f66537a982082826a6db58b64b62b5456cb3d96c74180e745a602833b8318dff7d0f507b4993ee93e339dfe5dc78220fbc88c984443c7daca1da7fb917113921a0688ad1814e1d2bbc72ebfd4552c32e1bb1dcde5f4fa788e00d4bd2bccca027455d319093f5aa9f56a22e6925440f857aa6d51b3886391c1b96eb9ace087912b264ce8b0764df2955ca89ae1fbdfba9106906b4e4b2cf44fe12d777a65e56e21e9892fa7b4b1d5da4feb9e9692618555c14d3f50a0ba825541bc829cfb08457661c7d7f2fdde734efa708de710694315117aa290b259828129ed655ab4a264fa42df3cd83acbcb9370bb5d972bd08bf6e69de90b7df342ab5cda60259674afb112c2fb56d895e775482dc6ab73fbdc0d33054898467b0e1f1569b6aa7dadcbff4436d80be3148c58bd635a451068de3f360fc8feb680854a17697dc8c0c870ec6861b25d18825e3a11d250644d1381ad9741819ccb5c08a23a0c8538d7acba285282293198e6b1a31008ba3d1c0a434628ee9da3431f1e53a896558c3814d0e27e46fc5159c73590ac9bbe990dbc00fbd4d18ac17b3b3d06bdb48284ee0bc2bae69e26d9d0a9b44d0277d1d9a2c17e8d48cda5f845e70360bfd1bafdbee1c52caf6ab47dc6f42330988a615cd41417529621c1ab95aaefcd05f2ecee6c868577675444832f9fdf44a08f7653b65d5fe365e8ed5fa1f013734ab5bc4ae7b9001391cfe20022fb12393ebb517fc225d2880042a28d8ff5787e036f1df0fea78dd88c5fb461ba9f03f1e0a938d09aba03b189eb7e5756cdb746c7b485a70a53ee446a67d9c4ca3d128420e857aeea8bb6e6cb433abe50b0893b8e785bfb8c0ec3fb27fd02c5d040000",
    ],
    [
      "ETag",
      "1/a64TP9uyGfuevl7cm5yQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-24-1602380499267"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff2d90414f83401085ffcb782d9162454bd243ab4d4b4462510ec634cd02035281c1dd454308ffdd59ea6567f6edb7f35e6680afb2c9c083a42cbe3b94fd5581fa609a08555769c5a5a54621cc00b528980c7767ffda4fdee3c7c3e2b676f3be78da3faf572b2654fa89b5006f80bcc42a53e07d0cd0881af9dbe924a7898ce9be358a1fbe6d77db88859a3223847110ac37c116c6e33883332511e628b149d18c6c259d31d5be49ab44dd566829ea648a0a26787a282475ad9044162b96b3b0e6aeeddcdcdb8be5d271ef18ac2815baa486d9f815d84693165544bf1c16e60cc8a9e5dcf974feb0ec9a40c77f74d36b542f92d857a1b1b42ff60f6422698eaa65873348052f635feacb7dfc036abf2b9569010000",
    ],
    [
      "ETag",
      "NGjI/IbYUDQ45m6fygKHMA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff1dcf4b7282300000d0bb642d8ee54f7720a580091187eac8264349a884af01cba7d3bbd7e9bbc1fb01599eb361206357b116bc822593ad6dbe3d74a6a3da7486ebb914299f88522197d758ae5b1c4a28367665f542a3aa454ee2cf5771b6a3f85241cb140cdaab7f9f863df65419f677fc8682a2be499e718b1aa42bfef742b57947fcb67cb8a34a59fb9ec293bb3cbe82a3eecbd99a86dd07e605f444c175d769887a99a486d1081f89d8bbcd9a3c4c9e5f5114a6ea6972e4f840a59e197926b178567d278658e3c967003680cd7d29d840cae74cd12c6b03fe9b645c7af6bc3a2c134c80df3fed323f9505010000",
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
      "Sun, 11 Oct 2020 01:42:07 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-25-1602380499267",
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
      "000000000002ff85535d6fa24014fd2b64f6b58a22889a98ad51baa551ec02b6d96c3664800b9d16199619da98c6ffbe97a176db34699f98997bce3de77ef04c1e589992198959feb781faf0ed9ec7e48c80a439be06b12be8cd9515ea3e5c0dafa6d7aeb73a3ccde788602d4bd07d55404ff0a64e40cc76413faf7953d19af31e26ea19566f381e18a3c9c09c4e8db18d3c0145b666e503b2efa4acc44cd74fdafd9cf3bc005a31d14ff8fef55d7f34f4aae6f79048a1bf97d45145e89f8b7e2f784225e3e57c17a08146401dc19eb2022dfc67a6f1f9fbd47d46f7fd1cc18f2c019a24bc29656b0b5324bccc58ded42a2b993d1365f3cd8104ceda59865ac28b665f4625ddc3999652492379a840bbf0b71bcdf52eb6fe6611ba5b2f0a9697ce66d15f6ed7bb8d1768b7978eef6892c60528ae36d7ced5cdc30beaa720242b957ad83eb7ca2f0d723f8ea525a0b4802e18d983311d4e06d3388bed249b8cac381b401c4f62dba2a378904c4d30d31828f294a862d19297837434b686b61d19e6348e4cd34ea38949214a132b03dba0002925c733f25433092b262a2e58d72172ebbba11385fece5b2e42479590d1a690abce585bc05b8f120b44d027351ddb28e3a8d4b6dbf542c75f2c43f7c6e926bc869c2687e02fce38a3850044d31a9b27a1def0141b46bcc5c65921584decfa141464f6fb99b43d6f5dbc69f92b3dc401b676a5fa9220f45def87b27342dcd0a25190c7ee402ab47c87b5a1ebe31f44e2927659c8cf9de3ff22dd930f19d450265f4f13c12af0e5bf765a7cc4e2eaa38c9078c7dd49442b92d4d0ed1053e5beb02dc3360d8b28702d3fc42cd33875adcdd166843d94f2a5a26ef1b1d04eac11af200ce2f83dd5ade33ff92112c478040000",
    ],
    [
      "ETag",
      "SbIsaVJ5T/ReJ1J9PINDyw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-25-1602380499267"
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
      "02ff8d92416f82401085ffcbf48a095a4525f180ad5612b416f1d418b3c2a028b0747769438dffbdb3d4daa66dd25e6066f86679efc1110e491e810d9b64fb54a2a8aeb6a81e74e1a32c5325e956f05c2218808a6d890cf021a972d7dcc8c3be9a35c7536fe2bf3a83011132dc61c6c03e429c601a49b01f8f90b30c692de46999e5ebba334055851e2e02df9ddd519ff148f7b3a5e739436f0427e3b21831c5d635ff8fb5d5c9803ddff818a3c03c44ada5107c8fa172b54dc9b222c586e4a50851420dd70fb6829705139c3768d268751a4dcb6c5df7cc76bfdfb2ba04a63c642ae139b1cb05e903c5154b7dfe422ec12240d425198eebeb338d93a836a24b771658ed5adf5780a4c5498aebbf41d2bb63f4193eb07304df3996f13257176aecdd3bbf1d47997e1e75eb04a31f845494d40509dce9681138d3b9e65667efc34aa19c0b4e414ad41936cd76afd3b5ccf7586fb88e9ade632b51a20121a3bf639228b063964a3cbd01a93c237d7b020000",
    ],
    [
      "ETag",
      "TeQiynI0bskjyN1FMLHRzA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COALESCE(SUM(`amount`), 0) as __result FROM `purchases` WHERE  `record_id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-26-1602380499267",
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
      "4f",
      "a3",
      "40",
      "14",
      "fe2b64f645132d2d94d23669dca6a2cba617b750cd66b3696786038ea50c32831b63fadff700d64b4cf40938e7bb9c1b4f642bb2880c0913c97d09c5e3b73bc9c809014d138c9ac1857d29839feeb677b92d62fb4af63b61321a2142542c4577790aa74a960507355c05ada490654e0b294f51e8d4ea9d767a6dcbeeb7bb8381d57391a7208da722db22fb56eb5c0d4df3e0dd4aa44c52a0b9502d2e772f71f3c132f342de01d7ca7c6f69a28b323f373d4b25a75ac86cb40ab0805241b1861d152996f0ca8cd8f7f7d22d4177ad04c10f8203e55c9699aeca42092eb358246551ab92e113a9cb7cf342026fea4d4263b2184fbd60e21d05abd9d186ee2a8dcdf189d13e36a832d6eb0254996ae362b998199b1c6d6fa902b5316e7e784bcfc050216391c25a441b63649c19537fe68746074b88406991d5058494a550993fcfc8ffb8998a40356a37c9b5dbeed14ebf3d60317379dcb71d16b781b13e731d6ab3361f74a11b31a0c8d3957acda299cc1c87411cf5bb0337628edde516b5c08e19b558e470a7c72d06dd182022fb13f2af101ace85caa512cda0c8cdd20fbd75b85ccd27e3d0abdb88294ee0bc29ae6ae26d9d1a9b44d0277dedabac90e8544ddd9f87de723c09fd6baf59f41412ca1f837b5c754c530588a605dd81866226231c1ab95a047ee82fe6e32932eaed5d1d108a0cff3cbd12c2c7bc9eb2ae9f9557af5bfb1f00d7342d6bc443f3423a64bfff8b083cca864c7eadbce56fd2849610430119ff7a7508ae135ffe5b8743472c9e3ada288ddf78285c5526bc80e660c4ae2eaf613b56bfdbb149",
      "0d2ef4879ce3ba87c9541a9522ec20d3cf1d35878e8d3666a57a016112f73cf7e79798fd0fcf4fce8968040000",
    ],
    [
      "ETag",
      "/SF3GoSJ7k6Gkrf3Po81Tg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-26-1602380499267"
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
      "000002ff2d90514f83400c80ff4b7d1dcac0b08d640fc36830213a708b8966596e50900d28de1dd385f0dfed315feedaded7f6cbf5702a9b0c7c3894c57787f27253a08e4d90a0ea2aadf86aa9510813402d0a26ddd31d3ae7f023fe0d6d7b1654ce623d7f8f974b2654fa85b500bf87bcc42a53e07ff6d0881ab96dbf97e344c6f4a53595a7e875b5e1b4a6cca42fdb285a05d1230cbb6102473a2498a3c4264533b09574c4543f1b5725eab6424b5127535430c2e34321a96b8524b2b862399e35f56cc79ddbf78b85e3cd18ac2815baa486d9ed1bf01a4d5a5409fdb02a4c199063c8d6f9789e4dd9be75e7466af78f07178d6a2d89772b346bedabc203192dcdba5a76388154f07784a5bee6c31fd897081c6b010000",
    ],
    [
      "ETag",
      "3k/e2vHZQxH007Bl29P8WQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff1dcfc97282300000d07fc9591d40b6f4c652ca2eda08e285811802560910075ca6ff5ea7ef0fde0b941813ce8b1bfb211df8008f52822bbc0a986eca06b6a7564556984c39dad06faf74bd59d273172d99337ba2c3c93eca69902648a6e935cdc5a0abe9c0e756e54cb3f5ade1e8dd977616e2e7603be3493248334293b91be5f3100d36b58e427f82fb0899f0ecc59559a9735a87992552d9daee2454d03abbac339d358e2fd2d048b08fefad18b37a77e182d93a153edacdbd42fe41d386700923fb1a28be3a3db302830520f7be1d092fdaf76cad40b800ffcde2f6e8c9fb6a92722423f8fd030da1944705010000",
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
      "Sun, 11 Oct 2020 01:42:09 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-27-1602380499267",
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
      "9b3014fd2bc87b6d0221908448d11aa5748d9490959076d33421632ed429c1149b4e5595ffbe8b69ba5695ba276cdf73ee39f7836772cfcb944c49c2f38706eaa72f7b919033028ae6f8eae4f3b577b55afcc8c37abfc98673776f9ad7b3192278cb92f45015d093a2a919c8e96edbcf6bd154b416a287897af6b8371859f67062399e678fc6c89350642b5ede23fb4ea94a4e4df3a4ddcf85c80ba015977d260eafefe6a36d56b5d80353d27c2f69a28a343f17fd5a08461517e56cb745038d843a8603e5055af8c74c93f3f7a9fb9c1efa39821f3903ca98684ad5dac2144c9419cf9b5a6725d367a26dbe3990adbff21791c144d11ccab8a407383352aa68ac9e2a302ec3cdda5806979b703d8f969b20de2eaefcf5bcbfd8ac76eb606bdc5ef9a16f289a14a0b9c6cc38d7b7002fa89f8254bcd4ea51fbdc2abf3468f9712c2d01a52574c1786c8de860627949968c593619ba496641924c92b14b8789c53c079c34018a3c2daa59b414a56b79e9686c65b1678fb3d871981b2703db8bc165433a1931666536399e913f355770c1652524ef3a446ec365e4c751b80b16f3c8d72564b429d44567ac2de0ad47850522e8939a8e6d940b546adbbd0c223f9c2fa2e58ddf4d780539654fdb079c71460b0988a635364f41bd1629368c04f3b57f81603db1efa7a024d35fcfa4ed79ebe24dcb5fe9110eb0b5abf4976ca370197cd3764e881b5a341af2d81d488596efb036747dfc8d485cd22e0bb9def9e14fd23d8590410d25fbff3411ac03fffdd74e8b8f585c7d94910aefb83b4cb622ac866e87b82ef785edda9eed0e8806d7ea436ce878a7aeb539da8c708052bd54d42d3e16da8935f21584411c7fa0bb75fc",
      "0b7b295a6a78040000",
    ],
    [
      "ETag",
      "4gAM9HLCXgRrjOf3A5j//Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-27-1602380499267"
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
      "0000000002ff8d925b4f83401085ffcbf84a63ad9556121f50ab12dbda0b3ea8699a15864a5d18dc8ba669fadf9d45ad464df40566866f96730eace1312f5308e03e5f3c5954ab9d059ab12b26a8ad349a6f15951ac1033462c1e46e7149a3d4de8c551e8e2b5b44b74329c3a3232674f2808580600d598e32d510dcada11405f25a42d216e5bcee3c30abca0da7f1241a9e735f50eafae175bf1f1ef77bb0f1b68ba930625ef3ff589b6d3c58d2fd0433545826e8b4548a969898c8d9d4a2a82436345995a0861aae1f2c14d94a28a2064f1aad4e63cf6fb6f6bbcdf6e161cbef3028291126a792d9eb29eb034346c809bdb04bf0195075c986b3fafacce33cad8db8321ac67ebbd6f7156069592e71fe37c87a1f047f860fec3d82ef9c28c896664b9df5afc2df8ee34c3f8f3a0de3de0f421b4e6a8bc4d1a0378dc3c1c871b377efc72b837aa48883d4e832dc6bb6bb071dbff916eb09b9a8f93d8151163d4804ff1d17b981201352e3e615f0d7fbeb7b020000",
    ],
    [
      "ETag",
      "/mKoPduYQriAQpumIZNllA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MIN(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-28-1602380499267",
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
      "000000000002ff8553ed4f9b4018ff57c8edcb96d9164adf68d2385399236ba9b654b32c4b7b773ce029e5f0ee7031a6fffb1ec04e8d897e029ee7f7f2bcf1486e451e93316122bd2b413d7cba918c1c113034c5a8bbea9d4dafa81a5c73befaf915c2050bd5c564820851b134dd1519b4b42c15073d5eafdaa992654195942d146a75472d676077dd91ddf3bcee60883c0d593213f92db2af8d29f4b8d33978b75329d30c6821749bcbddff78e7bedb2994bc016e74e7b565075d74e77dd3e34c726a84cc27eb1516506a501bd851916109cfcc987d7b2ddd1674d74e117c2f3850ce65999baa2c94e0324f445aaa5a958c1f495de68b17b2f267fe34b2e641f8794b771575fbc5a2dada6c14e83233d6f7e5626e6d0b74baa61af4d6bafae12f7d0b434a2622838d88b7d6c43ab666c13c882c075d63d046e4b56744590695dfd35882b7cba808d4a07693dc0ced017546b6c71236e4c9c8edb3c406c6466cd8a72eb3b9d7835ecc8022cf54ea358be632b75d9eb82eb5c1193acc1b42d2b539ef7b0366f79837e80e47f12889790c647f44fe2a61e054e8426ad1cc865c2d83c8df44cb75383d89fcba8d84e2044e9be2aa265ed669b04904bdd3d7beca0a894ed5a08330f29727d328b8f49bddce20a5fc617587db4d68a601d154d11d18507389558ec9f9621544c1223c9921a35ed8f901a1c9f8f7e333217a28ea299bfa59790d7ab5ff017049b3b246dc372fc421fbfd1f44e01d366472b1f697bf48135a42020a72fef1ea105c273efc9d0eb78d58bc6eb4d106bff150b8ae4cb882e660c4ae2eaf61f75ddbeedba4062bf326e778ce61329546a5083bc8cd5347cd6d63a38d59a9ff8330897b0e83f00cb3ff00caa22e495b040000",
    ],
    [
      "ETag",
      "3S4GCWar6hccSK+eNObNrQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-28-1602380499267"
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
      "90514f83301080ffcbf9e8300cc9dc48f6b019174d88734ce2835996520e6402c7daa241c27fdf95f9d2de5dbfbbfbd21ebe8b3a850092223fb7a8ba9b1ccdce0611eab6349aaf866a8d30013422675292efee3769a29bedf936ef3ee25d57fee5cb25135a7e612520e8212bb04c35049f3dd4a2426e3b1ed5389131d335b6b209b7ab774e2b4a6dfa1a87e16a1d3ec170182670a224c20c15d612edc046d109a579b1ae5a544d898ea65649d430c2e343aea86d842272b8e27873673a73bdfbb9eb2f16deec81c192a43005d5ccc67be035868c2823fa65559832a0c690adb3f1fcb1e53bdfb34e877f7add19d46f8a78b546bbd5bd1a3c92b5326c6b548b1390827fe3b930d77cb8007d1897426a010000",
    ],
    [
      "ETag",
      "co40SFdbspOq+gyWUQylzg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff1dcf4b7282300000d0bb642d4e919fe98e8f1561400c44850d432194846f4110e8f4ee75fa6ef07e4092a66418e2475b9206bc8325d9c16dbab5dbbd26aaf945b471c48ece554ba4307773ad0ec6330f2dce73b071f01c75bc50b92efd25d08dd5bceef8551965a951fd490ef4b62a4c73d6adf337c6c9aa2c45539b28732a1bcd4c710f3ab6e36277a2f02e58b011a223299f6d1a74be7a639f3911a70fa79c591fbae1d74412b98d9139f3a13f042781a378e416968972042d845a9a59c69eddf59b12557693aa4defa137b00164ee684f8698be668204e106fc37e3c7d291d75523494f7af0fb0797e2583205010000",
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
      "Sun, 11 Oct 2020 01:42:10 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-29-1602380499267",
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
      "536b4fdb3014fd2b91f795b6e92b8f4ad5a8da0091da149214344d5364bb4e302471881d1043fdefbb7128834d824fb17dcfb9e7dc475ed03d2ff7688608cf1e1a563f7fbb13049d20a67006afab49715e9398f94f7cbaf8ed5d96e3fa825ecde780e02d4be2a2ca594f8aa6a64cce76513fab4553e15a881e24ea8ddcded0324763c79cb8eec8b28127599eae79790fec5ba52a391b0c8edafd4c882c67b8e2b24f45f1f63e781c0daa5adc31aae4e0a3e40054e4e073d1efb9a0587151ce7711186824ab1356609e8385bfcc3d39fd98bacf71d1cf00fcc829c3948aa654ad2d48414599f2aca97556347b41dae6bb038abcb5b78c0d2af2a628931217ecc4d8638513f55c31e32cdc6e0c3f38db869b45ec6f83245a5e789b457fb95def364164dc5c78a167284c72a6b9c6dc38d5b7002ea0bf6752f152abc7ed73abfcda20ffffb1b4049096ac0b26b669e1a163ba2425364d9df194a42623c421f6148f8949dd099bec09c3c0d3a29a854b511266d953879024756c339958633bc1d68426e688b8d3a13376896ba1c3097aaab9622b2e2b2179d7217413fab197c4e12e582e624f9790e22657abce585bc07b8f0a0a04d027351dda2817a0d4b6db0f622f5c2c63ffdaeb26bc6619a6cfd103cc38c5b96480c635344fb17a23f6d030142c36de0ac07a6297c7a044b39f2fa8ed79ebe25dcbdfe8310cb0b5abf4174571e807e7dace11718df346431ebb03aac0f22dd406ae0fbf00094bda6541573b2ffc81baa790a5ac6625fd7a9a00d6812fffb5e3e20316561f64a4823bec0e95ad08ad59b7435c97fbca9e8e4dc7769106d7eadfd8d01c5ac7aeb539da8cac60a57aada85b7c28b4136be41b088230fe4077ebf007b9680a2278040000",
    ],
    [
      "ETag",
      "D4mGrbTeIwi5AzEPn3rHcQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-29-1602380499267"
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
      "4ec2401085df65bc2d09bf059a705114950410a178630859da6929b69db2bb9510c2bb3b5b118d9ae84d3b33fd667bce698ff012670138b08ea35d81f27015a17e34c50c559168c5b79c328560016a113159a8d678b7affbd178fad48e9a71ea3568b1eff59850fe065301ce11c218934081f37c844ca4c86b3e25459aadcace027dc8cd70eecd86933bee530a4c3f598c466e7f34809375590c8416ab92ffc7daf264c196d6330c5162e6a3d1924bdaa2af87c6a612699e604551217d5450c2e5834852910b4954e149a5deadd4ec6abdd1a936bbddbadd6630215fe89832661773d6079ab44866b46797603320cb920d87e5f595c771501a31e570e2d9cd52df5780a5857182abbf41d6bb11fc193eb07304df39915291e90b753b7a707f3b8e33fd3ceac6f5063f08a539a90be20dc783b9e78ea7865b9ebdf70f1ad5541207a9d06458ab363badb65d7d8ff59a4cd4fc1e47cb022df005ff1df7b106271489c2d31bd7f4ce5e7b020000",
    ],
    [
      "ETag",
      "us5Mqw2cgMPV7g4imT3oUw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MAX(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-30-1602380499267",
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
      "6f",
      "9a",
      "50",
      "14fe2be4eecb96b48aa08226a6732d5b59d4768a6d9765d1cbe5406f0b5c7aefa5ce34fef71da0f6254dda4fc039cfcb79e381dcf23c224312f2e4ae04b9fd742342724040d304a33f379babd3642b36039546e37fdf3a8913e79bd10811bc62299a15291c2a514a066ab85cb41229ca824a210e51e8d0360f3b7dd3b25db33b18587d07790ad278c2f35b645f6b5da861bbbdf76e25422429d082ab1613d953bc7d6fb50b296e8069d57e6dd94617d57edff428158c6a2ef2d1728105940ae40a32ca532ce19919855f5f4bb738cd5a0982ef3903ca9828735d9585124ce4314f4a59ab92e103a9cb7cf14216dec43b0e8ce9f8eaf39a661575fdc5a0ca58ad24a832d5c6f7f9d9d45817e8744d15a8b57179eacd3d034352c43c85158fd6c6c8383226fed40f8c0eba46a034cf6bcf808629547e8f63f1df2ea322508dda4d72e5987dda71cd4118870e8b5dbb17c62684a11b3a3d6a87261b74a11b854091a72bf59a4573915b3d665b611c47aec32cdb317ba16b75c1b6cc08ecd0edf4ed0858d7b4fb64774036926b38e1aa108a37b32197733ff056c17c393b1e075edd464c7102274d7155132febd4d82482dee96b5765b940a76ad0fe2cf0e6e3e3c0bff09add4e20a16cbbb8c3edc6345580682a69061ae454443834727eb6f003ff6c369e20a35ed8f91ea1c8f0cfc33321d816f59475fdacbcfaddda7f0fb8a0695923ee9b17d221bbdd5f44e01d3664f26be9cd7f932634871824e4ece3d521b84e7cf83bed6f1bb178dd68a3347ee3a13055993009cdc1f0ac2eaf61f7ec8ee356278560a9dfe4065d6b3f994aa352840c72fdd85173dbd8",
      "686356aa27102671cf337ff603b3ff01e4cae7115b040000",
    ],
    [
      "ETag",
      "JwwXHgyow9sldAxB1g7fnw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-30-1602380499267"
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
      "6d",
      "4f",
      "83400c80ff4bfd3a0c2f3a85641f36e3a209ca441733cdb2dca0201b50bc3b5c90f0dfed31bfdcb5bda7ed93ebe158d42904b02ff2ef16657791a37e31418caa2db5e2aba15a214c00b5c899ecfca3d35e477ef4b42936bff5f2fd238c57a7d98c09957c612520e8212bb04c15049f3dd4a2426edbede4389131dd35a6b20ca3f91ba715a5267d5e87e17c11dec3b01d2670a07d8c194aac1334031b49074cf4a37155a26a4ab414b5324105233c3ee492da4648228b2b96675bced476bd5bfbcaf7dde90d83252542175433bb7e055ea3498b32a613ab82c3801c43b6cec6f387cbeea5eb19a7ed3fbde834aa95245eadd06cb5cf067764ac34db6ad9e20412c1bff150e8733efc01348e0baa6a010000",
    ],
    [
      "ETag",
      "y9k1u5O9OMYiYznFWZLRPw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "4b",
      "6f",
      "82300000e0ffd2b39894c784dd2c430654468c3c2f843635a040cb4b01b3ff3eb2fb77f9dea0a0940d433ef2076bc127580ad9d8d3bdc775a41e6902d75145c499b208eaec6627e4ab617c909fcef251c4ed7c30270f95fc182e5031952e5dad366e9bf000ed461349437c4cd25e7d89e9ae7996a2b9aac03eb7ed93e144c51adcbbfe82f1d320f85297b5ac6ad98644f38a28f4d2d477d7f2d471944921892b3d38bbc1c26af31af3476587428e24e8cde45676984a3fc8862dbe9e534e8a5c40345adf14ec009b45d5b321afb699a219c60efc37f371116cbb2256f4ac07bf7f356f7d5c05010000",
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
      "Sun, 11 Oct 2020 01:42:12 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-31-1602380499267",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85535d4fa34014fd2b64f6d5b694b6d03669d6a6a23669e90a5463361b3233bde028659019dc18d3ffbe97c1ba1a137d6266ee39f79cfbc10b7910c58e4c0913d9630dd5f38f7bc9c809014d337c052fdaccebdbc185b8cb6fafa99bfbee5594cd6688100d4bd17d994347c9bae2a0a6dba89b55b22e69256507137506fd4edfb59dc1d81e4e268eeb214f419eae44f180ec3bad4b35edf58edadd4cca2c075a0ad5e572fff6de7b727a6525ef816bd5fb28d94315d5fb5af4672e39d54216b36d84066a0555027b2a72b4f09fb963a71f537705dd7733043f090e94735917bab18529b82c5291d595c94aa62fc4d87c772091bff217b1c5655eef8ba4a07b38b17654d3443f97609d879bb5b50cce37e17a1e2f3741122d2efdf5bcbbd8acb6eb20b26e2efdd0b734653918ae35b34ecd2dc00beaef40695118f5b8796e945f1bb4fc3c968680d20ada60e2d92eed8fed094b99c7d3f160c4521b181b336f4407cce693210c770c28f28ca861d1026b763cb03de62476df1d27c3417f97300e5ec239a32ee523d7715c7238217f2ba1e14ca8522ad17688dc84cbd84fe2701b2ce6b16f4a48699debb3d65853c07b8f1a0b44d017351d9aa890a8d4b47b19c47e385fc4cb6bbf9df00a32ca9fa3479c714a730588a615364f43b5963b6c1809e66bff0cc16662bf8e4145a6bf5f48d3f3c6c5bb96bfd1631c6063579b2f89e270195c183b47c435cd6b03796a0fa444cb77581bba3efc41242e699b855c6dfdf096b44f21a45041c1bf9f26824de0db7fedb8f888c5d54719a5f18ebbc35523c22b68774898725fd9a381331cdbc4802bfd2936f226c7ae35399a8cb08742bf56d42e3e16da8ad5ea0d84411c7f60ba75f8074ecb6f3878040000",
    ],
    [
      "ETag",
      "e7SOAuY3GihlYVa6lE6QSg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-31-1602380499267"
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
      "82401085ffcbf41512ad1695c4076dbd907a2b62fad018b3c2805860e9ee52a3c6ffde596a6dd336695f6066f86639e7c0119ee32c001bd671f452a0d85f45a81e74e1a22c1225e996f34c2218808a45440e95b3391c1ea7fd71b3e9de57078b7c86db5dbb4d84f4379832b08f10c6980412eca723642c455af37952a4d9aaec0c50fb5c0fe79eeb4c06d4a73cd0fd64311a75baa31e9c8ccb62c0145b95fc3fd6962703b67ced628802331fb5965cf02dfacad136254bf3044dc90be1a384122e1f44821739139c9b34316b55b36a55ae6bcd4abdd5bab61a0426dc672ae619b18b39e903c5154b5cbe2397601120ca920c87e5f595c671501ad1a533f1ac7aa9ef2b40d2c238c1d5df20e9dd30fa0c1fd83982ef1c4b7991a90bd51f4d3bbf1d47997e1e75d7f17a3f08a928a90be239e3dedceb8c679a5b9ebd77f70ae54c700a52a2ceb05aa9376f1a56e53dd65baea3a6f7d84a146880cfe8ef18c60aec9025124f6f5e982d7b7b020000",
    ],
    [
      "ETag",
      "HtIhzzWOFM88RK1GUpPejw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`date`) as __result FROM `purchases` WHERE  `record_id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-32-1602380499267",
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
      "85535b4fa34014fe2b64f66537b1e5567a4b1ab75b7197a4b64aa966b3d9b4c370c051609019348de97ff700d64b4cf40938e7bb9c1b8fe496e71119939027771594bb6f3722244704144d306a3e78d33ce017b9ff6b75c2a47dbad3ed2c994c10c16b96a4599142478aaa6420c7eb5537294555d052880e0a756cab63f60dcb1e1abdd1c8ea0f9027218de73cbf45f6b552851cebfac1bb9b0891a4400b2ebb4c642f71fdded28b52dc0053527f6fa9a38bd43f373d4e05a38a8b7cb25e61019584720319e52996f0ca8cc29fefa5bb9c66dd04c1f79c01654c54b9aacb420926f2982755d9a892f12369ca7cf34256eedc9d05da6cb95e04dfb71155b0fda151a96d3625c82a55daa9bf3cd3b6053a5d530972ab5dfd717d57c35029629ec286475b6da21d6b73efcc0b34135d23908ae78d6740c3146abfe7b1781f975113a842ed36b919187d6a0e8d51188703160f6d278c0d08c3613870a81d1a6cd4835e1402459eaad51b16cd456e388ee1f4ad118d0c07c0a4361d3263609aa63d702c83865648e3613f32c8fe883c945cc109978590bc9d0db9f2bdc0dd04fe7a319b066ed3464c7102276d7175136feb54d824823ee96b5f67b940a77ad0de2270fde92cf02edd76b7734828dbadee70bb314d25209a96340305e599887068e47cb9f2026fb998ce91d12cecfc809064fceff19510ec8a66caaa79d65efd5ee37f005cd2b46a10f7ed0b31c97eff1f1178872d995cac5dff2f69433ec45042cebe5e1d829bc497bfd3e1b6118bd78d3652e1371e0a93b5092ba13d189e35e5b56cc7b6add18834e0527dc8f54cfb30995aa356840c72f5dc517bdbd8686b56c917102671cf0b6ff11bb34f6891f0345b040000",
    ],
    [
      "ETag",
      "1wIAnTiQnRBSDcs3Fy/3mg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-32-1602380499267"
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
      "2d90dd6ec2300c85dfc5bb6d355a263690b8181302b40a6d1d5c218442eb7661695df2335a21de7d4ed94dec9c7cf139f2157e649dc3048eb23c3bd4dd4389f6d337291aa7ace1d2506d1002402b4a2665fbe81ab75cb65a759bf3a26aa3d37b72994e9930d937560226572824aadcc06477855a54c8df0e07dd4f64cc768d5756ebcd7c314f59a828f7c27a9b24afb3640eb7fd2d80131d532c50639da11fd9683a6166573ead1155a33034e47486067ab87f2835b94668a29095701887d168100f5f064fe3713c7a66505126aca49ad9ed17b08d252b544a170e0b1103ba6f3977d19fbf2c8f7ca0fd3f3aeb2c9a0f4dec6bd05b0eeef66fe423598e6ab5c30032c1cb584a7bbfdffe001a1b49e969010000",
    ],
    [
      "ETag",
      "ix/upuHHxrlyTqGmx1jKLw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff1dcf4b7282300000d0bb646d1dfc40a13ba820080191018b1b26848001cb278905747af73a7d37784f8030269c67a26b480b3ec08cd6da122fdd4e35b63a4ea07a4f193576a7b5911019b78fc6f5c252cfc5e0e7a31f983868e60245e2ec6a4a5d9fe2c9baa138b27b3fe7e5044bc7f2cae0077db3ec2215da17bd0e890ec5f05073b1cdaf4a6ae2bd45372d948b15bf7c96de9d75981ecf4397c570c486c2dd343271be2f341ba6073b8c25faee0d4ee7b5d5d81f4ec1caa948390663e139f4184e367a4b92fab6e3ac912ab00064ea29233ca3afd946d6b405f86f6662eec9eb6a10c40803bf7f58d859a405010000",
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
      "Sun, 11 Oct 2020 01:42:13 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-33-1602380499267",
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
      "536b4fdb3014fd2b91f771f499bea56a742540a536dd92b4689ba6c8766f82691287d88101ea7fdf8d431908897d8aed7bce3de73ef244f622db91096122be2da178f87423193921a0698caf3fb7e5fea2ab1eb79fe7c9e3fefecfc555ea7fbd9f4e11212a96a2699e4043c9b2e0a0261bbf1917b2cc6921650313356cbbd119b4bbf6a8dd1b8fbb8321f21424d152647b645f6b9dab49ab75d46ec652c609d05ca82697e9cb7bebaedbca0b79035cabd65bc916aaa8d6c7a25f12c9a916329b6e7c34502a284248a948d0c23fe68e9dbe4ddd14346dc608be131c28e7b2cc74650b53709945222e0b93954c9e88b1f9ea407c67e9cc038bcba44cb330a3299c583baa69a81f72b0cebdf5ca5ab8e76b6f350b166b37f4e797ce6ad69caf979b95eb5b57978ee7589ab2040cd79a5aa7e6e6e205f577a0b4c88c7a503d57cacf0d5abc1f4b4540690575301cb607b4336a8f59c4863c1ad97d16b581b1111bf6a9cdda7cdc83de8e01459e11352c9a61cd9cf6a27ed40987a30e84bdfed00e994dbb788a181ff5863b1675c9e184dc1742c39950b954a2ee10b9f216811306dec69dcf02c79410d132d167b5b1aa80d71e351688a00f6a3a54512151a96af7c20d1c6f360f165ba79ef01262ca1ffc5b9c7144130588a605364f43b1923b6c1871672be70cc16662df8e414526bf9e48d5f3cac5ab96bfd0031c6065579b2ff1036fe15e183b47c49626a581dcd50792a3e56bac0d5d1f7e231297b4ce42be6f1cef07a99f3c88a0808cff7f9a083681fffe6bc7c5472cae3eca288d77dc1dae2a115e40bd43c294fbcceedbbdf660400cb8d0ef62b839c7ae5539aa8c9042a69f2baa171f0badc54af502c2208edf35dd3afc05d01392d978040000",
    ],
    [
      "ETag",
      "ZVukG2szV+ClzkwxGWmSBw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-33-1602380499267"
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
      "8d925b4fc2401085ffcbf85a22370b34e1a1286813402e253131842ced148adb6edddd421ac27f77b6221a35d1977666facdf69cd31ee1254e4370601d6f5e7394c5d506f5d414335439d78a6e9948158205a8d986488fc7e3c26351b43fd8c5a853044fd7e960daed12a1822d260c9c234431f25081f37c849425486b81e07992aecace025d646638f767def89efa4484a61f2f8643b737ecc3c9ba2c864cb355c9ff636d79b26027d6338c50621aa0d19249b1c3407bc6a66249c6b1a2442e035450c2e5838d1479c6a410159a541a8d4acdaed61bed6ab3d3a9db2d02b908988e454aec624efa400bcdf84c1cc825d804c8b224c35179ddd3380e4b23a6f4c6bedd2cf57d05485a14735cfd0d92de2da3cff0819d23f8ceb144e4a9be5083e1a3fbdb7194e9e75177aedfff41284d495d10df1bf5e7be3b9a186e79f6de2b34aa891414a4429361adda6cdfb4ecea7bacb7c2444def71b4ccd18280d1dff1106b7022c6159ede008bc70b577b020000",
    ],
    [
      "ETag",
      "IliNyIaffvw6yM9ycX/nFQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MIN(`date`) as __result FROM `purchases` WHERE  `record_id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-34-1602380499267",
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
      "85535b6f9b3014fe2bc87bd9a4264002b9495157b5ac434a684748ab699a12630ed42d606a9b4c5595ffbe0334bda852fb84f1f92ee7e64772c7cb84cc48ccb3fb1ae4c3975b119323029a66789bea292b426754818c3d33180565a9ceb3f91c11bc61295a5439f494a82503355baffa99147545a5103d14ea0d9d9e3db206c389e54ca783d118790af274c1cb3b64df685da999691ebcfb9910590eb4e2aacf44f17c6fee066625c52d30adccb79626ba28f363d3e35c30aab928e7eb1526502b901b2828cf31851766127f7f2bdde7b4e86708de710694315197ba490b259828539ed5b25525b347d2a6f9ea4056dec23b8d8ca51f7cdd2654c3f69b4195b1d9485075ae8d1fe1c5d2d856e8734315a8ad71fdd30b3d03afa448790e1b9e6c8db9716c2cfca51f19367a26a0342f5bc788c639346e4f4df1df8fa221508dda5d7033b646d49e58d3388dc72c9d0cdd38b5208e27f1d8a5c3d86253079c24068a3cdda8b72c5a8ad21d3286dcc9789c523c3a533bb607ee244e87b6ed3a8e6d4dc603c71d24647f44fe49aee18cab4a28de75865c877ee46da2701d9c9e445e5b464ab103675d724d11aff3d45824823ea86bdf44b940a7a6cd7e1079e1c969e45f79dd64179051f6b0bac7d9a6345780682a69011ae45224d8347279b1f223ff22385920a31dd7e501a1c8eccfe30b217aa8da2eebf6db788d9cd6ff00b8a279dd2276dd81d864bfff8b08dcc28e4c7eadbdf037e9ae42484142c93e1f1d82dbc0a78fe9b0d988c5dd461ba5f11f1785a9c68449e81686176d7a1ddb1dba96db3e454da57e171bd8a343671a8d46110a28f55345dd6663a19d59ad9e4118c439077e708ed1ff84f543eb59040000",
    ],
    [
      "ETag",
      "ft9cmR46perbE/N6NnnsGg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-34-1602380499267"
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
      "51",
      "4f",
      "c2400c80ff4b7d65f1180461090fa0184dd000ca9321e438bab9b9adf3ae4307d97fb7377cb96b7b5fdb2f7781afb43c42048734f9aed1363709f2da071b7475ce4eae8a4a87d003649d08f93246b39adfbaf36a7d7a246e7ee33a3bafa753219cf9c44243748138c5fce820fab840a90b94b6fdde761305e3a6f29587d9fb42b2828e3e7bdd2e97b3f97201edaeed4146870dc668b134e8e755963234fcec559d2eaa1c0347b535e8a083bb87c4525d694b144825180c83fe488583b11a4e26e1e84ec09c8ce6944a61b76f206b9858e71bfa1153e80b60bb50a4e3ee3c493954a10a5418a8be37dbfdf7cc1b46b7b224020efd6e75f5b827efc6e2ccb6c61e182d5ff294f2356fff0008c5d13d6f010000",
    ],
    [
      "ETag",
      "M8ecPB/szPQvFotyxfujzQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff1dcfcb7282301400d07fc95a1d4440e80eb074008b555ee28689f152288f4020023afdf73a3d7f709e0813027d9f0eb48406bda1198bda8aac5caa1a927ef3a2dcfd5a6fe2d8f041b61c83053ccaf2090aea39ce0fef1b532482b03ecb0e8125f832001ea69657db6ba23b027c2ac3e3429761fb3d47453c9f02e57615c0e149985caab2cbd4edbde9d4c368053cf155468fa7182b1d9c4b89e76556dd99384ab12fed7898b6b1ccdca1d6ed83a034fb2ce326ee23cf4ceb2e8b3e4848e9f87e3c5af5ceae1f3e71f15eb3d102c1d4160cfab478cd36b2a62dd07f331de6165e57033003867eff00989f558605010000",
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
      "Sun, 11 Oct 2020 01:42:15 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-35-1602380499267",
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
      "3014fd2bc8fbda0412f28048d19aa574454a4807a4d5364dc83686ba25986293aaabf2df77314dd7aa52fb09dbf79c7bce7df084ee7899a219223cbf6f58fdf8e55610748298c239bc0e9697953fe11bbce07f7f99e36f1eb5b7f1c37c0e08deb224de5505eb49d1d494c9d936eae7b5682a5c0bd183443d7bdc1b4caca1ed5823d71d4ea6c093acc856bcbc03f68d52959c99e651bb9f0b91170c575cf6a9d8bdbc9bfba159d5e2965125cdb79226a848f363d1af85a0587151ceb711186824ab13b6c3bc000bff9929397d9bbacff1ae9f0378cf29c3948aa654ad2d48414599f1bca97556347b42dae6ab038abc95b78c0d2a8a66572625deb11323c50a27eab162c679b8591b7e70be09d78bd8df0449b4bcf0d68bfe72b3daae83c8b8bef042cf5098144c738db971aa6f015c403f6552f152abc7ed73abfcdc20fffd585a02484bd60593a935c103c7724946a63473ec31c92c468843a6636c138bba23364a09c3c0d3a29a854b514e1c17b0b69ba4539726a36c9825c4b271321d0d29190e2c87582e3a9ca0879a2b76c6652524ef3a84ae433ff69238dc06cb45ece91232dc14eaac33d616f0daa3820201f4414d8736ca0528b5edf683d80b17cbd8bff2ba09af588ee963740f33ce702119a0710dcd53ac5e8b141a8682c5da3b03b09ed8e53128d1ecf7136a7bdeba78d5f2177a0c036ced2afd45511cfac1776de788b8c245a321fbee802ab07c03b581ebc31f40c2927659d08fad17fe44dd53c83256b3927e3e4d00ebc0a7ffda71f1010bab0f3252c11d7687ca5684d6acdb21aecb7d668fedf17464230daed5bb98e30c8e5d6b73b419d98e95eab9a26ef1a1d04eac912f20",
      "08c2f803ddadc33fda7b45da78040000",
    ],
    [
      "ETag",
      "1CPpI6iOaAizZ/5BEc3UTw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-35-1602380499267"
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
      "45ff657c6d13042cd0c4878aa88d15112a893186acdb2916b6ddbabb8510c2bf3b5b118d9ae84b3b333db3bdf7b65b586645023e3c67f3d70ad5e6688ee6ce1663d495309a6ea52c34820368d89cc869341df2e6b2f5308a79d0bf0e75d85f89f5e929119abf60cec0df429aa14834f88f5b28588eb4c6a5a8f26256770e984d698793781c0e2fa9cf6562fbe17d140567d10076ce61316186cd6afe1f6b4f3b0716f2798c292a2c385a2da5920be426b43635cb4b81ae9695e2a8a186eb077325ab9229295d9ab8ad13f7d86b345bdd46bbd76b7a1d0285e4cc64b220f67e42fac048c3c458aec9257804a8ba24c3697d5dd1384b6a23b60c87b1d7aef57d05485a9a099cfd0d92de17469fe103db47f09d63b9ac0a73a02ea2dbe0b7e328d3cfa3ce8378f083d086923a2071783398c4c1cdc8724f7bef671b837aa42405a9d16678dc68774f3a5ee33dd6beb451d37b7ca32a748033fa3bae32037eca84c6dd1b60b1b2137b020000",
    ],
    [
      "ETag",
      "VLVNc2k3YPTcACKIsICvlw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MAX(`date`) as __result FROM `purchases` WHERE  `record_id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-36-1602380499267",
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
      "ed",
      "4f",
      "9b",
      "40",
      "18",
      "ff",
      "57",
      "c8",
      "edcb96d916e80bb489718db28da4ad8e529d5b96f6ee78c053cae1dde1624cfff73d80551713fdc471cfefe579830772238a844c0813d96d05eafec3b564e48080a119de469f99b83c29a76119bad9ca755911fe52d9e1212244cdd2745be6d0d1b2521cf464b5ec664a562555527650a8d31f759c91edf67d7b301ebb230f791af274268a1b645f1953ea49afb7f7ee66526639d052e82e97dba7fbde9ddb2b95bc066e74ef7fcb1ebae8dedba647b9e4d408591cae969840a541ad614b458e293c3313f6e57fe9aea0db6e86e03bc181722eabc2d469a10497452ab24a35aa64f2409a345f1cc8329805c7b1359ffefcb849a881cd278b6a6bbd56a0abdc585fa3d3b9b529d1e78a6ad01bebe27b1005165e29998a1cd622d95887d691350be7616c39e8998036a2681c63ca72a8dd1e9b12be1e454da006b5dbe0dab347d4f1ed314b99c753bf3f64a90d8cf9cc1bd23eb3f97800838401459ea9d51b162d6431b07d970dc7d41b78fed8e5b6e3f77dc776123f49810e6dc76389cda9df27bb03f2570903274297528bb633e4220ae3601d47abc5f1340e9a32528a1d386993ab8b7899a7c12211f4465dbb3a2a243ad56d0e1771104d8fe3f03c68273b838cf2fbe52dce36a5b906445345b76040cd65824d2367a7cb300e4f17d319329a719ded119a4c7e3f3c13e2fbb2e9b2699eb5d768d0f8ef01e734af1ac45d7b200ed9edfe2002b7b025931fab20ba24ed5504292828f8fba343701378f763da6f366271b7d1461b7c",
      "c745e1ba36e10ada8511db26bd963dec8f46ae4d1ab032af62dec0dd77a6d6a815610b8579aca8dd6c2cb435abf413a8fe5fac168b70f10da3ff00abce30bf59040000",
    ],
    [
      "ETag",
      "R+biYDpAIpI2gU22bnIZrg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-36-1602380499267"
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
      "ff2d906d4bc3301080ffcbf9b585ac93690bfbd0bd8093225aed40648c2cbbd5ceb69725a932cbfebb97ce2fc9dde5b9bb87f4f055b57b48605795a70ecdf9a644f7e2831c6d573bcb97a6d62204804e964caecb55f9889dd6f355b1aeece2f41effaa743a65c2aa4f6c24243d1c2aacf716928f1e5ad920b76db76698c8983b6b5f59a46f4bce1adafbeca9c8b274962de1b2b90470a45d8e0734d82af4f3b4a1232ab7f2aa5636bac6d05267145a18e0e1a134d469698842ae84e349389a88687c2f6ee3389adc31589392aea296d9e215788d2327eb9c7ed814460c982164e9c3707e7339129108451446c29b6dfe7b666787f6d9100b58f4bbc5d5634edecdb1b3331d06a0247fc943e5aef9e50fb99a3d396f010000",
    ],
    [
      "ETag",
      "VgIgJeuppCIUVisDqY9zcA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff1dcfc95283300000d07fc9b9ed60d9bdd18280089665c272611012d6b2060c75fc773bbe3f783f20cb73b42c29195ad48357b06767f9949fac41ba700a0e10cef8c6bc212db7fa647313969cb1d6c55daaba7e7c1ffd00e7675b503f200d442aebc717a2b4f322390683d5c99830b4bf56252bb798a97a44e3a2a84ad75154fcb64d65c8ee30daa0551d5b3e62249a6b6b445926741cb3a921bf2ed2ce0da8b4910c3d5d54c5109370ab9b8724187e712daf2286de435d6f65ddddf984bc73a66eb29fa6dd7b829bfadfe000101deb192d69fd9cb1bc2c1fc07f3325fb889ed70bca663483df3f2bd6491205010000",
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
      "Sun, 11 Oct 2020 01:42:17 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-37-1602380499267",
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
      "6e",
      "a33010fd15e47d6d12722791a26d94d26da48434405a55ab153266a06e01536cb28aa2fcfb0ea6e9b6aad43e617bce9973e6c2913cf33c225312f2e4a582f2f0e34984e48280a209becaad9fd9a51345fd87c36ece167787eded7e3b9b2182d72c49b32285961455c9404e775e3b294555d0528816266af5c7adeec8ecf52d733099f44663e44948e315cf9f91fda85421a79dce59bb9d0891a4400b2edb4c646fef9d7daf5394e20998929d8f921d54919daf457fa68251c5453edb7968a092500690519ea285ffcc28bcfc98bacd69d64e10bce70c2863a2ca556d0b533091c73ca94a9d954c8f44db7c77209ebdb217bec1445a657990d30c2e8c882a1aa84301c6b5bb591b4be77ae3aee7fe72e304dee2c65ecfdb8bcd6ab7763ce3fec6766d43d13005cd3566c6a5be397841fd08a4e2b956f7ebe75af9b541cbcf63a909282da10906637344bb963909e370cc62ab3f0c6313c2d00ac743da0f4d3619c0200a81224f8b6a16cd453e3287348ea25e100d275630307b10846c640571bfcb463d16c793b84b4e17e46fc9155c715908c99b0e917b77e9db81efee9cc5dcb7750931ad5275d518ab0b78ef51618108faa2a6531de50295ea762f1ddf76e70b7f796737135e4142d9c17bc119c7349580685a62f314946b1161c388335fdb5708d613bb3d072599fe3e92bae7b58b772d7fa3fb38c0daaed25fe2f9eed2f9a5ed9c117734ad3464df1c4881961fb136747dfa83485cd2260bd9ee6cf781344f2ec45042cebe9f268275e0db7fedbcf888c5d54719a9f08ebbc3642dc24a687688eb725fd9c3feb86775890697ea536c6076cf5dab73d41921835cbd56d42c3e16da8855f20d84411cbfa3bb75fa07499d",
      "e30c78040000",
    ],
    [
      "ETag",
      "sQTmErNdd3YyUAcCVyQPvQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-37-1602380499267"
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
      "85",
      "ffcb782d09602dd08403681512402cf5608c216b3b2d8bed6edddd6a1ac27f77b6221a35d14b3b33fd66fbde6b77f0c445023e3cf2ecb942559f64686e6c11a2ae72a3e9564aa1111c40c3322237c1c0f5e6b51edcb9131421e741dd15d97048848e375830f0779072cc130dfefd0e042b90d66299578558379d03a62eed701585d3c515f5854c6cbfb89dcd46e359007be7b89830c3d60dff8fb587bd035bf918628a0a458c564ba9e4166333b536352bca1c5b5a562a460d0ddc3cc894ac4aa6a46cd1a475da6b75bc76f7b4df760783aed723309731335c0a626f57a40f8c342c0fe52bb9048f00d59464386dae2f34e64963c496d345e4b98dbeaf00494b798eebbf41d2bb61f4193eb04304df3956c84a98237539bb1efd761c65fa79d4c5280a7e10da505247249ace8355349a2f2df770f03eae0deaa59214a4469b61a7edf6cf7a5efb3dd67369a3a6f7f84655e840cce8ef9870037eca728dfb3795251d467b020000",
    ],
    [
      "ETag",
      "hE946Mys9Y4HenRiiEy2ng==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `id` = ? LIMIT 1",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-38-1602380499267",
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
      "5b",
      "6f",
      "9b",
      "30",
      "14",
      "fe2bc87bd9b426211002891475694237a45cda84b49ba629b18da16e0153db74aaaafcf71da0e94595da873d61cef92ee7623fa01b9e476888084f6e4b26ef3f5d0b828e10d3388168efe46b163a3f4fa7f6c992887eb7f82ec5fc7c340204af580a6745ca5a4a94923235dcacdb89146581a5102d106ad95eabdb372ddb337b8381d57781a7581acf787e03ec2bad0b35ec740edeed44882465b8e0aa4d45f614efdc599d428a6b46b5eabcb6ec808beabc6f7a9c0a8a3517f968b386024ac5e4966598a750c2333322df5e4bb739ceda0980ef3865985251e6ba2a0b24a8c8639e94b25645c3075497f9e280d6fecc9f84c664b959849f7738abc8bb2f0656c6762b992a536d9cae9673635780d715564ced8ccb1ffeca37202445cc53b6e5d1ce1819c7c6783185e8e16f16cc83d0e8421511539ae7750d212629abfc1fc714bc5d4e45c01a9c9ae4d635fbb8eb9903121397c69eed90d8648478c475b04d4c3ae8b15e4418069eaed46b16cea17342222fb6ac2876d80054688f386614454ee4590e8d89e7da2476cd18ed8fd05fc9359b725508c59b59a1cb5510fadb70b5594cc6a15fb7116398c7b429ae6ae2659d1a9a04d03b7dedab2c17e0540d3e5884fe6a3c09830bbfd9f58c2598deaf6f61db314e1503349638639ac9b9886068e86cb90ec260b918cf80512ff0ec805068f8fbe19910de17f59475fdadbcfabddaff00b8c0695923ee9a03eaa2fdfee8ff141c90f80310b8da0d1b9d6ffcd52fd484562c6692e5f4e3ed03b84e7cf8420fcf05b0f060c04669f887bb46556542256bee1ccfeafa1a",
      "b6637b5dd7443558ea3739dbb60ec3ad342a4596b15c3f76d43c976a5675aa544f2048c25559048bef90fd07e4cb06e9ae040000",
    ],
    [
      "ETag",
      "4B+mT5XFD3BObo61pGroMQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-38-1602380499267"
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
      "dd",
      "4e",
      "c2",
      "40",
      "10",
      "85",
      "df",
      "65",
      "bcb48dd01a84265c88218a418245bcd010b22c432db63b657f304dd37767b678b33b7bf69b3967b781df5ced21815d9e9d1ceafa2643fbee8b148d2bace1ad22651002402b3226d7b5fb545ff1ad38bd9ae57935ba3baae82d1b8f9930f2074b014903871c8bbd81e4bb01254ae4b6ed56771319b375e595d9e263fa3c4d592869ef85c57a3e7f9ccca7d06eda008eb44bf1801a95443fb2d2744469673ead1165556068c86989063ab8bbc834b94a68a29095301e86fd412f8a87bdfbd1281a3c305890143627e51fb202b6b1644591d21f87853e03ba2b39f7a15bcf9dcc8136ffe8a4b668969ad8d7a0b7ec5ded9fc847b21cd56a870148c19ff192dbebb9bd00a4758bb169010000",
    ],
    [
      "ETag",
      "UyuVnZ3+aqJsPvS9/jn2Mg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "64ad0e1f434977e5232048a54011360c62b07c6a224120747af73a7d37783fa0284bcc583e9016dfc02be0858436e5c625aab67dab2492930a53ff4a214b98d29424cc541d8be6b0dc35970699b8e8c211af438b88463c8c3dd4caf4bc86a67331ba5372f0f239326347e67cef1c2b3f7a5f7827186d73c0d07b10c54f95af816f53ea65e375ba15b24163cf36e1e3e1dc77567169a57c42b550ef2d3b199bef13f36ca58890d8e1a90d5534eb6e8982807d6acbb99d6c182e4962911d7fe1f387d58215c033ad7bccf2fa399321422bf0dfcc074ef1f3aae1a2c73df8fd03156fd4c805010000",
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
      "Sun, 11 Oct 2020 01:42:18 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-39-1602380499267",
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
      "000000000002ff85536b6f9b3014fd2bc8fbda2414c88348d11aa574cd94908d9056d33421db5ca85b821936ada2aaff7d17d374ad2ab59fb07dcfb9e7dc078fe44e9429991226f2bf0dd4872fb7929113029ae6f85a8cecc3ede8bbcee3caf59452d1e1eafa613e9b2142b42c45f755013d259b9a839aeeb6fdbc964d456b297b98a8e7fabdd391edb813dbf37d6734469e82225b89f20ed9375a576a3a181cb5fbb9947901b412aacfe5fee57d70ef0caa5ade02d76af05672802a6af0b1e8d74272aa852c67bb2d1a6814d409eca928d0c27f66cacedea6ee0bbaefe708be171c28e7b229756b0b53705966226f6a93954c1f89b1f9ea40b6c12a58c4169745b32f9392eee1c44aa9a6893e54605d449bb5b50c2f36d17a1e2f3761b25d5c06eb797fb159edd6e1d6babe0ca2c0d2941560b8d6cc3a33b7102fa89f82d2a234ea71fbdc2a3f3768f97e2c2d01a51574c1646c8fe8e9c4f659c6c63c9bb84396d9c0d8848d87d46536f73df05206147946d4b06889357b2387519824ce10b2c41bb334f1f9a99f648eeb31183b6e9a31f274421e6aa1e15ca84a2ad175885c47cb3848e268172ee671604ac86853e8f3ce585bc06b8f1a0b44d007353db5512151a96df7328c8368be8897574137e115e4941fb67f71c6192d14209ad6d83c0df55aa6d83012ced7c13982cdc47e1c838a4c7f3f92b6e7ad8b572d7fa1c738c0d6ae365fb28da365f8cdd83922ae68d118c87d7720155abec1dad0f5d31f44e2927659c8cf5d10fd22dd530419d450f2cfa7896013f8f45f3b2e3e6271f5514669bce3ee70d58af01aba1d12a6dc67f6d0f5edb1470cb8d6ef628eed1fbbd6e66833c21e4afd5c51b7f8586827d6a817100671fca1e9d6d33fcbaa7a4978040000",
    ],
    [
      "ETag",
      "l60yj6JtgTp34sssRyVWwA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-39-1602380499267"
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
      "ff8d92dd4ec2401085df65bc2d49112cd0848ba2550805f9291a630859da2914da6edddd6a90f0eece5644a3267ad3ce4cbfd99e73da3d6ce32c041b96f1eaa940b13b5ba11aeb6282b24894a45bce338960002ab6223262917bdf9541bf9ebef61be6c3f6ce6a74c6ed3611325863cac0de431463124ab01ff790b114692de04991668bb23340ed723d9cfa93def086fa9487ba1fce3ccfe9782e1c8cd362c8145b94fc3fd6e60703367c39c1080566016a2db9e01b0c544fdb942ccd13ac485e8800259470f96025789133c1798526955aab52b5ccf35ad3acb75ae75683c084074cc53c237636257da0b862c984bf904bb00810654986a3f2fa4ce3382c8de8b237f4ad7aa9ef2b40d2a238c1c5df20e95d33fa0c1fd83182ef1c4b7991a91375eddd3abf1d47997e1e75e5f8ee0f422a4aea84f8bd813bf59dc14873f3a3f7ce4ea11c094e414ad41956cd7af3a26199efb15e721d35bdc756a2400302467f47375660472c917878032ea87b227b020000",
    ],
    [
      "ETag",
      "fafEWHscK4mzK70YkV67BQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` = ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-40-1602380499267",
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
      "0000000002ff85536d6f9b3010fe2bc8fbb2496d4280241029eaa294ad4869d20269b54e5362cc41dd02a6d874aaaafcf71dd0f465d3da4f98bbe7e5ee7c7e24b7bc88c984443cbdaba17af8742322724040d114a35727b951ac175630b3af8c7c105cc0e502cea75344f08625695e667028455d31909375d04b2b5197b412e210850e2dfd7030d20dd3d62dc7314663e449c892052f6e917dad542927fdfedebb970a9166404b2e7b4ce4cff1febdd12f2b71034cc9fe5bcb3ebac8fefba64799605471514cd70116504ba83690539e61092fcc38fafa56bac769de4b117ccf1950c6445da8a62c9460a248785a57ad2a993c92b6cc570712b80b771e6af3d57a197eded2bc216fbf68546a9b4d05b2ce94f6cd5f9d6adb12bdaea904b9d52e4f5cdfd53054898467b0e1f1569b6a47da6c79acbd00bbd8c23bf5426d80b5c420152fda4a421a65d054f1342cefdf2b6a0854a14c97dc8cf5111dd8ba1325d19825b6398c121da2c88ec6436a463a732cb0e20828f254a3deb268210a3319daba6e1aced002c3a10c9869c5261dc64c07031c73043175981d93dd01f95d7105c75c9642f26e62e4d2f7427713faebe57c16ba6d1b09c5a91c77c5354dbcae536193087aa7af5d93e5029d9af17bcbd0f567f3d0bb70bb1b5f404ad9437087779ed04c02a269457350509d8a188746ce5681177aabe56c818cf61acff60849263f1f5f08e143d94e59b5dfc66b64b5fe7bc005cdea1671df1dc880ec7607ff570842df5b7e7f5f625662b728f30b51b8e49d02395fbbfe0fd2857c48a082827dbc01086e131fbed5fdc3412c3e1db4910aff71df986c4c5805dddef1bcedb2630f4dc7311dd2822bf557ced2f5b1bd1f70a3d128420e857aeaa87b38cdbcda542d9f4198c47559b693dafd0152bec0fbb8040000",
    ],
    [
      "ETag",
      "ZHm2nUL4SA8Z2m1SVeWLeQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-40-1602380499267"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff2d90614fc2301086ffcbf9754b0612744bf800665192813241130d215d779b9b5b6fb69d8610fe3bd7e197def5edd37bdfdc09be2b9543045955fef4a88f3725da8d6b52347d630d978e9441f000ad2899ecf47b98acb6f55c861fab6795bd151b25cad98c0923bfb015109da0a8b0c90d449f2750a245fe7638e8612263f6d83965b9dec68f71ca424bb913d6bb24992f9218cefbb30735652916a8514974233b4d354abb74698d68bb067d43bd9668608087875253df094de4b3e24f027f340dc6b7f7c1240cc7d33b061b92c256a498ddbd02db58b2a249e98fc3c288013db49cbb18ce5f96c72ed0fe1f5d1c2d9a174dec6bd0590657fb0772912c47b5ba470fa4e0653c55f67a3f5f00fbc3dc6469010000",
    ],
    [
      "ETag",
      "prW9LMTjAc9ZMOnbVfQnag==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "1dcf4b7282300000d0bb642d0e60c3a7bbf089b415ac516965c3048c88d4103e82c1e9ddebf4dde03d00cd73d675695f578c835720a96ecff3f9476d392f28274588a7abc7355e0686494a253abb9a69e1640a8f8e1faee97d672a937295b50f6dd48e5febc218aa55dcdc926114cd221422283e33cbe3898d30798342dd970691393602586135c68608b6b77213d35c2a18615dcb7658dd34a23950e64dfafb409607fbdb3cf15375c97ab7b19273b44ac641ba8eba45c54f110b8c969c49c8a31e928bf08f569b5644db8319607751b6ac4bcbe76c016d7b06fe9b692f057b5e1d465bd682df3f34940dca05010000",
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
      "Sun, 11 Oct 2020 01:42:20 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-41-1602380499267",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85535d6f9b3014fd2bc87b6d1212484822456b96d03555423620eda66942c6b950b7802936adaa2aff7d17d374ad2ab54fd8bee7dc73ee074fe496177b3225314fef6aa81ebfdc88989c105034c5d7d0bbb818e5891b7c2bd6ebe1af817fb634fbe96c8608deb024cdcb0c3a52d4150339dd05ddb41275492b213a98a863f73bfd9139b0c6a63d990c460ef22464c99a17b7c8be56aa94d35eefa8dd4d854833a025975d26f297f7defda05756e2069892bdb7923d5491bd8f45bf668251c54531db0568a096504590539ea185ffcc7d7cfa367597d3bc9b22f89e33a08c89ba508d2d4cc14491f0b4ae7456327d22dae6ab0309dcb5bb080d26b23a2fa282e67062eca9a2917a2cc138f3b71b63e59d6dfdcd3c5c6dbd28589cbb9b7977b15def365e605c9dbbbe6b281a67a0b9c6cc38d5370f2fa8bf07a978a1d5c3e6b9517e6ed0eafd581a024a4b688391638e687f6c4ee224765832b6867162421c8f636748add864131bec7d0c14795a54b368210a6764c5fba1358e620afdc8662c8926966546230bc07412db1c02238713f25071054b2e4b2179db2172e5af42370afd9db79887ae2e21a175a696adb1a680d71e151688a00f6a3a34512e50a969f7ca0b5d7fbe0857976e3be135a4943d067738e3846612104d2b6c9e826a23f6d830e2cd37ee12c17a623f8e4149a67f9e48d3f3c6c5ab96bfd0431c606357e92f09427fe57dd7768e884b9ad51a72df1e488996afb136747df88b485cd2360bf9b973fddfa47df221810a0af6f93411ac039ffe6bc7c5472cae3eca488577dc1d261b115641bb435c97fbcc1edae66830211a5ca97731c7191cbbd6e46832420e857aaea85d7c2cb415abe50b0883387e4f77ebf00febf53d1178040000",
    ],
    [
      "ETag",
      "TNJJ6mfESBnLL5X2RFD01g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-41-1602380499267"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92dd6e82401085df657a594cfd2b2a8917586d6ba25611ae1a635618100516779736c4f8ee9da5d6366d93f60666866f96730e1c611f670158b089a34381a2bc8a502d74e1a02c1225e996f34c2218808a4544de989e6a0dd8e2e0975e74edeccde16bd7b3fb7d22a4bfc59481758430c62490603d1f216329d29acf9322cdd65567802a733d5cbace78f6407dca03ddcfbcc9c41e4c4670322e8b01536c5df1ff585b9d0cd8f18d83210acc7cd45a72c177e8abb1b629599a275893bc103e4aa8e0ea4124789133c1798d26b576a3d630ebcd56b7deeef59a6687c084fb4cc53c23d65b923e505cb1c4e1afe4124c02445592e1b0babed0380e2a23ba1ccf5cb35de9fb0a90b4304e70fd37487ab78c3ec307768ee03bc7525e64ea42dd4f9eecdf8ea34c3f8f1adaeee8072115257541dcf174b474ede95c73abb3f741a950ce05a72025ea0c1bf576f7b663d6df63bde33a6a7a8fa5448106f88cfe8ec7588115b244e2e90d83e533aa7b020000",
    ],
    [
      "ETag",
      "/6Ut3BaQqcyUg+Rk6Dw8UA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` = ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-42-1602380499267",
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
      "85536d6f9b3010fe2bc8fbb2694d42421248a4a88b52b621a5a403d26e9aa6c49883ba054cb1495755f9ef3ba0e98baab59f3077cfcbddf97c4fae791e9129097972534179f7e14a84e48880a209469dbf6ef6d99b4734dcfddc19cca4b13f10b7b3192278cd92342b52e84851950ce474ed77935254052d85e8a0506738e8f4c7fac0b0f4e16432189bc89390c64b9e5f23fb52a9424e7bbd83773711224981165c7699c81ee3bddda05794e20a9892bd97963d7491bdb74d8f53c1a8e2229fad7d2ca092506e20a33cc5129e9851f8e5a57497d3ac9b2078c71950c64495abba2c9460228f7952958d2a99de93a6cc6707e2db4b7b11688bd5da0d3e6e695693b79f342ab5cda60459a54afbeaad4eb56d815e975482dc6a17df6dcfd630548a98a7b0e1d1569b69c7dadc3dd19e806d6ce99c3a81d6c75a22908ae74d25010d53a8ab781896f3fa8a6a025528d32637a63ea67d4b9f847168b2d8324661ac43185aa139a246a8b3c9108651081479aa566f583417398d8cc8180c4d3a8cf44964318b994638b1606030bd6f41d8d72db0304bf647e4b6e40a4eb82c84e4edc4c885e704f626f0d6ee621ed84d1b31c5a99cb4c5d54d3caf536193087aa3af7d9de5029deaf13b6e607bf345e09cdbed8d2f21a1eccebfc13b8f692a01d1b4a41928284f45844323672bdf099c953b5f22a3b9c6b3034292e9effb27427057345356cdb7f61a376d3e02ce695a35885d7b207db2df1ffd5fc10f3cc7fdf6b6042db05b94f983285cf25681fc58dbde2fd2863c88a1849cbdbf01086e12efbed5c3c3412c3e1db4910aff71df98ac4d5809eddef1ace9b2658f86fd91516f26824bf52a3736c78701d71ab5226490ab878eda8753cfab4955f21184495c17b799d4fe1f485a6660b8040000",
    ],
    [
      "ETag",
      "IxNm+RAdabvXv3c7afS2ow==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-42-1602380499267"
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
      "5b",
      "6b",
      "c2",
      "401085ffcbf4d5404cc51bf8504bd25a44dab482a588ac9b491a7399742f8a48fe7b67b77dd99d3df3cd9cc3dea02adb0ce6702c8b1f8bea7a57a07973458adad646f3d551ab11068046144c2609e6d17972a9ec2e895e8a6ad76da79fc562c18496dfd80898df202fb1ce34ccbf6ed08a0679ec70507e2363e6da3965b5f9889fe294858632276cb6ebf5c3721d43bfef0770a2638a392a6c25ba959da2134ab37269b568ba1a034d5649d4e061df2814d94e28a28095601405c37118dd4fc3d16c168d270cd6248529a96576fb0e6c63c8883aa50b87852103ca979c3bf7e799e5d005daffa3cbab41fdaa887d3566beebed1fc945321cd5288b0390823fe3b9347feffe174d9173e069010000",
    ],
    [
      "ETag",
      "FFef2v7wkuXF2JgkXpU8Yg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "49",
      "6e83300000c0bff81c45805b30bd010592b0a3462c17cb10b7ec21d88825eadf1b757e304f40ca923286f9bda503f8001b91d4637974ee487fd3e824c0818982abf099ed09eecf81597638efc5794cb8238c49a5d6d018e2953c4eb62343e42b0d9a758b4a4e5b30987e9f2b42b4bc97af822dae24892d2fc399e9e4f365c709cea2f0e6565caccd3536704348400b688f5f122c8ccaffec2c5bcbd2947abc5dc649868b8f68e8ec01921a5158c3db09f9f9e67a5152785bd4cd5b79551ee9c5fd6192672d263800ba8ef54419ae5f33f8aeaa07f0dfc47c1be9ebaa5332d109fcfe015520267a05010000",
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
      "Sun, 11 Oct 2020 01:42:22 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-43-1602380499267",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6f9b3014fd2bc8fbda2490900791a2354ae91a29211d9056dd3421db31d42d608a4db6aaca7fdfb569a25695da4fd8bee7dc73ee8317f4c8cb1d9a22c2b3a786d5cfdf1e04416788299cc16b86e7fee41776a2fdb8bebbf6ffd98fc526cb66334070cd92b8a872d691a2a92993d36dd4cd6ad154b816a203893aeea0e38cecfe6062bb9ed71f8d8127599eae78f908ec7ba52a39edf58edadd4c882c67b8e2b24b45717aefedfbbdaa160f8c2ad97b2fd90315d9fb5cf47b2e28565c94b36d04061ac9ea841598e7bac0137347cedfa7ee725c743300ef39659852d1944adb8214549429cf9ada6445d317646cbe39a0c85ff98bd8a2226f8a322971c1ceac1d563851cf15b32ec3cdda5a06979b703d8f979b20891657fe7ade5d6c56db751059b7577ee85b0a939c19ae35b3cecd2d800be8ef9854bc34eab17ed6caaf0d5a7e1c8b2680b4646d3019db23ec4c6c8fa4644cd3c96048529b113221e3211e109b7a2e73778461e01951c3c2a5288774321ab9c44b487f304e5cc7c109f69c7e4208865443e6ec6c0f1dced0df9a2b76c16525246f3b846ec365ec2771b80d16f3d83725a4b8c9d5456b4c17f0d6a3820201f4494d071de5029474bb9741ec87f345bcbcf1db09af5886e973f404334e712e19a0710dcd53ac5e8b1d340c05f3b57f016033b1eb6350a2e9ef17a47bae5dbc69f9891ec300b55d65be288ac365f0c3d839226e70de18c8be3da00a2cdf436de0faf00790b0a46d16f473eb8777a87d0a59ca6a56d2afa7096013f8f25f3b2e3e6061f541462ab8c3ee50a94568cdda1de2a6dc57f6d0edc3789101d7ea436ce03ac7aee91c3a232b58a95e2b6a171f0a6dc51a79024110c61f986e1dfe03c7d03b8478040000",
    ],
    [
      "ETag",
      "gaAE8Za1Sv7rYPEx0kmOgg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-43-1602380499267"
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
      "1085df65bcb4447e4a81265c14052502229478610859da69296ebb7577ab21847777b6221a35d19b7666facdf69cd3eee129c94270619dc4cf05cadd598cfade14335405d78a6eb9c8148205a8594ce426bc78680f3aebba17a78bf3c9c65e37f96ddced12a1820da60cdc3d4409f25081fbb8878ca5486b81e0459aadcace02bdcbcd70eecf86936bea53119a7eb2188dbcdea80f07ebb41832cd5625ff8fb5e5c182ad58cf3042895980464b2ec516033d3436154b738e15250a19a082122e1fc45214399342546852b11b959a53ad37da55bbd3a93b2d02b908984e4446ec624efa400bcdf84cbc924b700890654986a3f2fa42e3242c8d987238f11dbbd4f715206951c271f537487a378c3ec307768ce03bc7525164fa440d4677de6fc751a69f475d797eff07a134257542fce1b83ff7bdf1d470cba3f7de4ea39a4a41412a3419d6aa76bbd972aaefb15e0a1335bdc7d5b2400b02467fc74da2c18d18577878033ea5a04b7b020000",
    ],
    [
      "ETag",
      "hd/W8F9b2AgmU+Nh4b5lKg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `date` = ? LIMIT 1",
        types: ["INT64", "DATE"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-44-1602380499267",
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
      "6f",
      "9b",
      "30",
      "10fe2bc8fbb2494d0284bc4a5117256c434b933621edba694a6c7330b7802936ddb22aff7d07347d51b5f613e6ee79b93b9fefc8b5480332244c443705e4bb7757929123029a4618ed7cfdee1461aabce89a66bbcb3f6757c5df6fd168840851b2144db2181a4a163907355caf9a512e8b8ce6523650a8e1380dab6bdaedbee90c0676b7873c05713813e935b27f699da961ab75f06e46524631d04ca82697c943bc756bb7b25c5e01d7aaf5dcb2852eaaf5bae9712c39d542a6a3f50a0b2814e41b48a888b1844766c03e3e976e0a9a342304df0a0e947359a4ba2c0b25b84c43111579a54a8677a42af3c981acdc993bf18dc9623df7df6f695292b71f0caa8ccd260755c4daf8b45c9c18db0cbd7e51056a6b5c7c7197ae81a15c8622868d08b6c6c83836c6f3294603aaa1fe9f79279e6f585847004a8bb4aac2a72c86b282fb41792fafa724508d5e7572d333bbd4ea9b0316b21e0ffbed0e0b4d60accf7a1dda66261f38e0040c28f274a95eb1682ad3419b32da0e686899211b30da1f7459cf0c838e0d9609b4135a41d76c734ef647e4772e344c85caa412f5b4c8c5d2f3dd8dbf5ccf2763dfadda08294e645a175736f1b44e8d4d22e895bef6655648742a47efcd7d77399ef8deb95bdff60c22ca77ab1bbcef90c60a104d739a8086fc4406383472ba5879beb7988f67c8a8aef0f4805064f8e3ee91e0efb26acabafa965e5da7f23f00ce695c5488dbfa402cb2df1ffd5f615a8ee05501dbb4cd866937ac0e2afd4428ee782d42ced6eef292d4a125849043cadf5e02045789379feae1dd20165f0eda288dffb8725c95263c877af5",
      "4452355ab33b4edbecd8a402e7fa45ceb67a8719971aa5222490eafb8eea77538eac4a15ea018449dc98b937ff8cd97fdc7423d4b7040000",
    ],
    [
      "ETag",
      "5KZ4ufnsIgkapyYxQjuzXg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-44-1602380499267"
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
      "41",
      "6f",
      "82",
      "40",
      "10",
      "85",
      "ffcbf40a095a6295c4436d686b4a49c57a6a8c5971a42830b83bd450c27fef2cf6b233fbf6db792fd3c139af0e10c03ecf2e0deaf62e435ed92641d3146ca4d454190407905526e4fbda5b5f9ee3ab0aa7bf09bf351885e6bc9acf8530e937960a820e8e39160703c15707952a51beed767a982818b7b55596f167f81226229474b042bc89a2c7451442bfed1d38d13ec1236aac52b4236b4d274c7969d31a55d605ba861a9da281011e1e324d4dad34912b8aebfbee68e28defa79e3f9b8d270f0216942acea91276b306b1616255247495b03012400fade43e0ee7cf204ba0ed3fba6819cd8726f135682dbd9bfd13d9482c515937e840aa6419af39dfeefd1fe28299fe69010000",
    ],
    [
      "ETag",
      "MS0SqFNwaE8zRtKueLEskQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff1dcf4b7282300000d0bb646d1d1a404c7710ca0c9fa2a0e1b3620244442cdf08864eef5ea7ef06ef07d0a260d394f1ae612df8008242b42db66eb73714bd2c8f3e6f7be71d5f7d82e3e66c6b4b5cfad2ba7eefe79460480226d1548942dd0fa4c0731a918caa77d6e02eee0b6ce51ca5ede9911b502cc9533e2af695ce03478b54098214473aa4d6e4f9a1931f168eef6d9945aec8bdc4a76b843393b0b983e2ad1d4635d58b9d282ee6d7ade75cab3e07286eeaa5ab4c3213d98e2c7b16237d201987736357eebdee2bb001ecd9d7239bb2fa3593558436e0bf9971d1b3d7d560746423f8fd03db8b0e2805010000",
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
      "Sun, 11 Oct 2020 01:42:23 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-45-1602380499267",
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
      "3014fd2b91f795367da54d2b55a32a61446ad391a620344d91eddc04431a87d86143a8ff7d370e652024f814dbf79c7bce7de499dc8b222133c244f65043f5f4ed4e32724240d30c5fdd1bbbfabbe64eeafa0fcbcb739a8aa24f17f3392244c352745fe6d051b2ae38a8d96edbcd2a5997b492b283893a23a7d31ff70643b7379a4e07e309f214e4e94a14f7c8bed5ba5433db3e6a773329b31c68295497cbfdebbbfd38b0cb4ade01d7ca7e2f69a38ab23f17fd9e4b4eb590c57cb74503b5822a863d15395af8cf4cd8e9fbd45d41f7dd0cc18f8203e55cd6856e6c610a2e8b54647565b292d9333136df1cc8d65b79cbc8e232aff7455cd03d9c5809d534d64f2558e7e1666df9c1f9265c2f227f13c4dbe585b75e74979bd56e1d6cadeb0b2ff42c4d590e866bcdad53730bf082fa09282d0aa31e35cf8df24b83fc8f63690828ada00dc693de98f6ddde94a56cc25377e8b0b4078cb96ce2d021ebf1e9084609038a3c236a58b490058784ba2e73639727693c729c5e3c1d0c79ec70c7edf719a3e37e9f1c4ec89f4a683813aa944ab41d22d7a11f797114ee82e522f24c0929ad737dd61a6b0a78eb51638108faa4a643131512959a76fb41e4858b65e45f79ed84579051feb47dc019a7345780685a61f334546b9960c348b0587b67083613fb790c2a32fbf54c9a9e372edeb4fc951ee1001bbbda7cc9360afde087b173445cd1bc3690c7f6404ab47c8bb5a1ebc36f44e292b659c8e5ce0b6f48fb14420a156093bf9c26824de0cb7fedb8f888c5d54719a5f18ebbc35523c22b68774898725fd8ce68e80ea7c4802bfd21361d8e8e5d6b723419610f857ea9a85d7c2cb415abd52b088338fec0",
      "74ebf00f7ec2757178040000",
    ],
    [
      "ETag",
      "8Y/rxMc5f8IqCQFafin1aA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-45-1602380499267"
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
      "65bca511956225e905d5aa24b5f607bd314db3c280b4c0e0eea2d6a6efee2cd66ad4446f6066f86639e7c01a9659198307f759fa58a35ceda5a8c7a698a0aa73adf85651a9102c402d5243a6c16b36bddd97a5b86c777a4b9be86534ee769950d1031602bc352419e6b102ef6e0da52890d722caeba29c379d057a5599e1349c04c30bee0b8a4d3fbc190cfcdea00f1b6bb7180b2de60dff8fb5d9c68205dd4f3041896584464b256981910e8c4d258a2ac796a25a46a8a0819b07a9a4ba1292a8c59396d36e1db8f6e151c7764e4e0edd6306738a84cea864f666cafa409316f9849ed925b80cc8a664c349737de2711637464c190c43d769f47d05585a92e538ff1b64bd0f823fc307b68de03b270aaa4bbda3ce07d7fe6fc771a69f479df961ff07a13427b543c2e0aa3f0dfdab91e1665befbd95463592c4412a34191ed84ea77decdaefb19e92899adfe36959a30591e0bfe332d3e0252257b879039f8b03777b020000",
    ],
    [
      "ETag",
      "bgIziSV/rnaH58Bk0ooxPQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `stamp` = ? LIMIT 1",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-46-1602380499267",
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
      "000000000002ff85535b6f9b3014fe2bc87bd9b426e1162091a22e6ae986964b9738edd6694a0c18ea1630b54db6a8ca7fdf019a5e54ad7b029df35dcecdf7e89615311aa290a5771515bb77373c4447882a9242f46b7a83abb38fb6fcb39b7bb1ffddcb8cab6d3a1a0182d52c49f232a31dc92b1151395c2dbba9e0554904e71d10ead84ec77074d3f2747b30301d17789266c98415b7c0be56aa94c35eefe0dd4d394f334a4a26bb11cf1fe3bdadd92b05bfa19192bd97963d7091bdb74d8f331e11c578315a2da1804a52b1a639611994f0c48cc34f2fa5bb8ce4dd14c05b16511245bc2a545d164844bc48585a8946150def5153e6b31fb4f427fe09d64ee6ab197ebf21794dde7cd088d4d66b41659529ed6c319f6a9b12bcae89a472a35d7ef117be0621c11396d1358b37da483bd6c6b353884a05d5b58149300db066402131958a154d19988419ad4b789854f07a3f358128306b936b577788e1e9833009dd28f1ac7e98e8340cbdd0ed132bd4a3814ded38a40478aa566f58a4e085db77fa8e695849e279b11b1bb16d7ab6e50ee28165c1c86dc3746d9bf61db43f42bf0553f494c9924bd68e0b5d2e02ecaff162353b1963bf6923213092d3b6b8ba89e7752a6812406ff4b5afb38c83533dfb6086fdc5f80407177ebbee094d49b45bdec1c21392490a6822484e1515531ec3d0d0f97c19e0603e1b4f80d1ecf0fc809068f8f3fe898077653365d57c6b2fc76efc0f800b92550d62dbfe2003edf747ff56c0c1d45fe2f1f4fc6d155337f58e6e768c3e36cca1610d0dbbabebfa1588ff0222dc7dab8bbeadfcc50fd4861634a18216d1ffef02c04de2bfcff7f096000baf096ce02e15832b8c646d1209da5e23cb9bde5b76dfb61d6f801ab050af729e611dc65e6bd48a34a7857ae8a87d4bf5149b54251f419084239a05b3cf90fd0bd3c91c62cb040000",
    ],
    [
      "ETag",
      "KgjTuF+4sxyO8dEX8l1Zvg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-46-1602380499267"
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
      "61",
      "6f",
      "82301086ffcbede32041256c9af8612e46cd98196c264b16630a1e88038eb5c58511febbd7ba2fbdebdba7f7beb91ebe8bfa0833488afca745d9dde5a823d3c4a8da522b2e0dd50ac101d42267320a5e5ed7f70bfff2979f92ca9f74b4f23fa3f99c09959eb01230eb212bb03c2a987df5508b0af9dbe120ed44c674d71865b3fd58ae96310b151d8db0dd85e1d3225cc2b01f1c385312638612eb14cdc846d21953bd316995a89a125d45ad4c518185ed432ea96d8424725971fdc01d05de78f2e8f9d3e9387860b0a454e8826a6677efc0369ab42863fae5b0306240da967367f6bc589903edffd145a751bd49625f85c6d2bbd93f9389a439aa962d3a900a5ec6bad0b7fb7005c6a4520369010000",
    ],
    [
      "ETag",
      "Q6KMH+B4vzghbm43yoG4XQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff1dcfdb4e83301800e077e9f5b2d0321878070ca4a07298ab8e1b52e08f219cba520c68f6ee2e7e6ff0fd225ed730cfa59a3a18d113da38b1f7f53e9e2cf7e040d4122b2afd97201c88dc583e2dea4bc7a67f9b4d252e0c8461e2ee449d4fed26dc9635708d14acd6f35a0d09a6a200ee112e32ec777d95eb63ace23151a68dafc6aa1556eab1b5a0a5361d43cce922a38f0d0325837621df4d331e485a17efe4c882aa49cf225bcd210837fcc3e4b8f8747082f635394f519727a73875d99ba6fa24ebddcd2e6acf830eed10aca2953097ed63a61bb6bd43ffcd526d021e5717b80489ee7fa6f0d96605010000",
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
      "Sun, 11 Oct 2020 01:42:25 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-47-1602380499267",
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
      "2bc8fbda3c1a484222456b94d22552425620adb66942c65ca853c0049b565595ffbe8b69ba5695da4fd8bee7dc73ee836772cf8b984c49c4d3430dd5d3b7bd88c8190145537cdd5cd9de727fb8934e7a98bbe65efc7696f9f56c8608deb024cdcb0c3a52d4150339ddf9ddb41275492b213a98a8638d3be7a3fec0b4fbd66432188d9127214bd6bcb847f69d52a59cf67a27ed6e2a449a012db9ec3291bfbef71e06bdb2127b604af6de4bf65045f63e17fd9e09461517c56ce7a3815a4215424e798616fe33e3e8e27dea2ea7793745f0036740191375a11a5b98828922e1695de9ac64fa4cb4cd3707e23b6b6711184c64755e8405cde1cc88a9a2a17a2ac1b8f2b61b63e55e6dbdcd3c586dddd05f2c9dcdbcbbd8ae771bd7376e978ee7188a461968ae31332ef4cdc50beac720152fb47ad03c37ca2f0d5a7d1c4b434069096d301cf747f4dcee4fa2241ab3c4368751d28728b2a3f1909a519f4d2cb0e20828f2b4a866d14214437342ed416c8711c4666859c0421a25a3d03607664c27e364301c90e31979acb8824b2e4b2179db2172ebad02270cbc9dbb98078e2e21a175a62e5b634d016f3d2a2c10419fd4746ca25ca052d3ee951b38de7c11ac6e9c76c26b48297bf20f38e3846612104d2b6c9e826a23626c1871e71be712c17a623f4f4149a67f9e49d3f3c6c59b96bfd2031c606357e92ff1036fe5fed0764e881b9ad51af2d01e488996efb036747dfc8b485cd2360bb9de39de2fd23e7990400505fb7a9a08d6812fffb5d3e22316571f65a4c23bee0e938d08ab",
      "a0dd21aecb7d610fada1659e130daed487d8d0ee9fbad6e46832420e857aa9a85d7c2cb415abe52b0883387e5777ebf80f284d125678040000",
    ],
    [
      "ETag",
      "MF8RHjqhsEgqAN3joZEHmQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-47-1602380499267"
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
      "4fc2401085ffcbf85a12c052a0090f2017318058ca93216469a7a5d076eb5e5442f8efce5644a326fad2ce4cbfd99e73da23ec933c04173649fca4511cae62540fa6f050ea5449ba153c970816a0623191afa37d53cf1a9eea0f071b61ebbb78f31ac59d0e1132d862c6c03d4294601a4a701f8f90b30c692de0a9cef275d959a00e85192e7c6f3c1b519ff1d0f4b3e564d2ed4d0670b22e8b21536c5df2ff585b9d2cd8f18d87110acc03345a0ac17718a8b1b1295956a458915c8b00259470f920165c174c705ea149c56e566a4eb57eddaadaed76dd691298f280a984e7c42e17a40f14572cf5f80bb9048700519664382aafcf344ec2d28829c733dfb14b7d5f0192162529aeff0649ef96d167f8c0ce117ce758c675ae2ed47072dffded38caf4f3a87ed71ffc20a4a2a42e883f9e0e167e773a37dceaecbd775028e7825390124d86b5aadd6a349dea7bac37dc444def7195d06841c0e8efb84d14b8114b259ede00b4c28c7c7b020000",
    ],
    [
      "ETag",
      "xGk7uN5RtDFEbr4uJgbxfg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `amount` = ? LIMIT 1",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-48-1602380499267",
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
      "00000002ff85536d4fe24010fe2bcdde97bb9c4081b61412e211a8da88a0503497cb05b6db695d6dbba5bbd5f30cfffda6adf81273fa8932f3bccdecee23b9e5694006c4e7d1b680fce1cb8df0c901014523acfe094f4f274910677f2fb7d727fcf8fb89176c2f864344f092256992c5d090a2c819c8c16ad98c7251643417a281420dc36eb42dbdd3b575a3dfef583de44988c3294f6f917dad542607add6debb190911c540332e9b4c24cff5d65da795e5e2069892adb7962d7491ad8f4d0f63c1a8e2221dae9618a09090af21a13cc6082fccc0fff156bac969d28c107cc71950c64491aa32164a3091863c2af24a950c1e4915f3d507593a5367ec69e3f96ae67dddd0a4246fbe69546aeb750eb2889576b4989f699b0cbdaea904b9d1ae4e9c85a3612917218f61cd838d36d40eb5d16c82d5278daa3275cf5c4f6b639200a4e26995c3a37e0c6586a755b9ef0fa82450856e7573ddd32ddab6f5be1ffa3d16da5dd30f75f07ddbef99b4ebebac6f8011f84091a74af58a45539196bbedf54df0a1eb33dfe804768705ddae61d18051bb6f9b6647b72ce893dd01b9cfb98209979990bcde17b95ab89eb3f616abd978e439d51821c59d4cea70e510af732a1c12411fccb52bbb5ca053b97c77e6398bd1d8732f9dfabca71051f6b0dce28987349680689ad30414e46722c0a591f3f9d2f5dcf96c3445467588e77b8424835f8f2f04ef21abb6acaadfd2cb322aff3de092c64585b8ab3f489bec7607ff57389ace479f6b344d44ec7e2308af78ad402e56cee227a94b0b082187947d7e03105c353e7da9fb6783587c38682315fec7fbc66469c272a8ef1d4faa8435db34ac6ebb432a70aedef50cdddc2fb8d428152181543d4d543f9b725f55ab90cf206ce27599b9b363ecfe03342306dbb6040000",
    ],
    [
      "ETag",
      "xfKKDmdlpzVqhHiG+HTdqQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-48-1602380499267"
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
      "41",
      "6f",
      "c2",
      "30",
      "0c",
      "85",
      "ff8b77a58232c40a1207983a86d4a1ad83cb2684426bb2425b7789bbad42fdef386597d879f9e2f7e40b9cb33285291c32fd5da369ee34f29b6b62b475ce564a45a545e801b2d242bea4e947300f17c1d22ffacb277dde9cfa7f7a3613c2265f5828985ee098619e5a987e5ea05405cab7fdde741305e3a672ca6abd0997612c4241a913d6db289a2fa210da5ddb83131d623ca2c1324137b23274c284572ead554595a367a936095ae8e0ee411baa2b65883c51bc51e0f9e3c1f03e188c2693e1f841c09c12c51995c26edf416c9858e531fd4a58f005305d2bb98fddf923f2d005dafda38b86d1be1a125f8bce7270b37f241789252a9b1a7b902859c673c6b77b7b0524eb6db669010000",
    ],
    [
      "ETag",
      "MddZ8AEB8G1m/GFgkTj/xg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb642d8e2208e98e3f28b4fc4537199a6450f9c4022ac1e9ddebf4dde0bd4089311d0634b29a76e003f052844bbcdc33559734621b2d17dc341bc8dcb87a9458522615f4681afecee2f867659e94320c609a568c8575aedf932d69c5baea9cef537df43e6368db9beb84dd27d535c10d26336fa2871726398a260447b522e79cb60ee4e9647bd55cb061bb76aec6d7618a65e81343ec0ab7500f350e1ae2677015cf11da774815ee165bc7a3a80967e5a9f60f1c294547766df318052e732b41182c009d6e979e0ee8f29e6d640817e0bf89467ea3efab4ecb9ef6e0f70feed086cb05010000",
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
      "Sun, 11 Oct 2020 01:42:26 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-49-1602380499267",
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
      "0002ff85535d4fdb3014fd2b91f74adbd0366d5aa91a5d0950a94d599282b6698a6cf72618d238c44e1943fdefbb71280321c14b12fb9e73cfb91f79227722df90316122bdafa07cfc722b193922a0698ab7bd3ffdddb79f97c7f7f222b9fc7b4e87c0aee574324184a8598a6e8b0c5a4a562507355e87edb49455414b295b98a8d51fb58e0776b7e7dafdd1a83b18224f41962c447e87ec1bad0b35ee740edaed54ca34035a08d5e672fb72dfd9753b45296f816bd5792bd94115d5f958f46b2639d542e6937588062a05650c5b2a32b4f09fb961276f53b705ddb65304ef0407cab9ac725ddbc2145ce68948abd26425e327626cbefa20a1b7f06691c565566df338a75b38b23654d3583f16609d05aba535f7cf56c1721acd577e1cce2ebce5b43d5b2dd64b3fb4ae2fbcc0b334651918ae35b14eccc9c703ea6f4069911bf5a8beae959f1b347f3f969a80d20a9a603cb407f4d8b5472c61439eb83d87253630e6b2a1437bcce6a33ef4370c28f28ca861d15ce6cec075803316f7dd013eb83388a9c39d78e4d061176c87268e4bf647e4a1141a4e852aa4124d87c875308fbc380ad6fe6c1a79a6848456993e6d8cd505bcf6a8b140047d50d3be8e0a894a75bbe77ee405d35934bff29a092f20a5fc31bcc71927345380685a62f334944bb9c186117fbaf44e116c267679082a32fef544ea9ed72e5eb5fc851ee1006bbbdabc49180573ffdcd83920ae685619c8aef920055abec1dad0f5fe372271499b2ce4fbda0b7e90e62a80044ac8f9e7d344b0097cfaaf1d161fb1b8fa28a3349e7177b8aa457809cd0e0953ee33dbe90f6dd721065cea77b1eec03974adce5167842de4fab9a266f1b1d046ac522f200ce2f87dd3adfd3fef06ee2378040000",
    ],
    [
      "ETag",
      "3x4vBZP1qoHfPzGa7ebWoA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-49-1602380499267"
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
      "00000002ff8d92d14ec2401045ff657c2d49d15aa0090f80a8c48a588a211a4396765aaadb6edddd4a08e1df9dad88464df4a59d999ed9de7bdb2d3c67450c1e2cb3f4a542b9394a51df9a22405571ade8568a422158809aa544fa932b87dda5f966795f727b10ccb3f98dbdee768950d10a7306de16920c79acc07bd842c172a4b548f02a2f16756781de9466380d83d1f882fa5cc4a61fcf7cbfd7f787b0b30e8b31d36c51f3ff587bdc59f02496012628b188d06829a578c2488f8c4dc5f2926343894a46a8a086eb07a91455c9a4100d9a349c4ea3e9dac7276ddbe9748edd16815c444c67a2207636257da085663c106b72092e01b22ec970525f5f699cc5b511538ec6a1ebd4fabe02242dc9382efe0649ef8ad167f8c0f6117ce7582eaa421fa873ffa6f7db7194e9e75167bd70f883509a923a20e1e87a380d7bd713c33deebdf7371ad5440a0a52a1c9b0693bedd3966bbfc73a10266a7a8fa7658516448cfe8ecb4c839730ae70f70680d27ec37b020000",
    ],
    [
      "ETag",
      "LPK4aVgmybZpl0CRXiXO0w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `id` != ? LIMIT 1",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-50-1602380499267",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ffa5545d6f9b4010fc2bf4fad24ab10dd8c660c94a2d87b6a80e4e6c9ca8ad2afb80055f0a1ce18e5469e4ffde3d88f3a148c9439fccedceeccceedef98efc66454cc62464e9750dd5edfb2b1e92230292a6185d5f58f15fbf67daab1fdf82f54e1feee6d2399f4c10c1144bd0bccca023785d4520c6eb5537ad785dd28af30e16ea0cf58e61e966dfd6078e635a23e409c892392b7e237b276529c6bdde41bb9b729e66404b26ba11cf1fe2bd1bb35756fc0a22297acf257ba8227aaf8b1e673ca292f162b25ea1815a40b5819cb20c2d3c32e3f0d3f3d25d46f36e8ae01b16018d225e1752d9c212112f1296d65553958cef4863f3c90759b973771668b3c5da0f3e6c69aec8db8f1a15da665381a833a97d5e2e4eb56d895a3b2a406cb5cbafeed2d53054f18465b061f1569b68c7dad43fc1a83abd53c7b977ea059a8136621092158d898086192803f773f25e6e4711a844a936b919e916356cdd0993701425767f18263a84a11d8e86b41fea913380411c02459e54d51b162db0f53e0588633bb612cbd093241a5a091883be9ee87d53771c6ada16354703b23f227f2a26e18489920bd60e8b5c2ebdc0dd04cbb53f9b066ed34642712027ad39d5c4539f129b44d02b7ded559671545293f7fcc05d4e678177e1b6cb9e434aa3dbd535ae3ba1990044d38ae620a13ae5310e8d9c2d565ee02dfce91c19cd06cf0e0841c63fef1e09c16dd94c5936bf4acb6ada7c005cd0ac6e1037ed0731c87e7ff47f158658e21742f06eb76c72be7697df491b5a42021514d1dbdb47709378f3891ede8bfa0358291921f18c772d124a24aaa0bd732c6ffcb5ece1c0366c9334e04abec8f50de7305c554355841c0a79df51fb5ed4ac9a542d1e4098c4abe27bfe17ccfe031149409eaf040000",
    ],
    [
      "ETag",
      "UV6dzN/28SZKTUh05hLt9Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-50-1602380499267"
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
      "4e83401045ff657c6c89b4da6a9bf44114b509692cda98689a6681815281c1ddc14a48ffdd59eacbceecddb3736fa683afbc4a600e519e7d37a8db8b0c796d9b104d53b091525365108680ac322107de03fd6aefe3e8310e2edfa3fdda1d3c668b851026de63a960de419a639118987f7650a912e5db6ea7fb8982715b5b65b97af39ffc508492122bac364170e7053e9cb6a7211c280a31458d558c7664ade980312f6d5aa3caba40c750a36334d0c3fd43a6a9a9952672447126ae339abae3ab5bf77a361b4f6f042c28569c5325ece615c486895511d251c2c24800ddb7923bedcf1f912736d0f61ff55a46f3a2497c0d5a4bf76c7f4f36124b54d60d0e2156b28ce79ccff7d31fdff9394a69010000",
    ],
    [
      "ETag",
      "+BDoxrBZwBte+/WbhQ0+Fg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "4b",
      "52",
      "83",
      "30",
      "00",
      "00",
      "d0bb645d3b247c0477c1aa948e502001ec86c1348580141a60083adedd8eef06ef07948cf1712ca6bee557f004d612395bb63df4b66b60f6c151309e4bb7d497ce6e5674fd9e3565b92cf6ea24a5a34ae7069de65b4543dced96a192c757e2d8301af60b33269429d5d7c67b7c13710815cd0efb07df846c55729e08f666e815ed905feaa3ffd8551d91d83ddb22d02c48927eda45115eb4d0694c5432f8a57bb62f8f4d62512cf4f4594084f2ace5979844167d338a939fd382eaeb58119b05d1e70bd800ae0621f95888fb4c371d6703fe9bc5b40efc7e757929b904bf7f7b19d3aa05010000",
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
      "Sun, 11 Oct 2020 01:42:28 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-51-1602380499267",
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
      "f795b6e9bba9548d52c2286ad32d4d41db3445b673130c499cc60e1342fdefbb71280321c1a7d8bee7dc73ee234fe45ee411991226927d05e5e3973bc9c809014d137cbd4a29444e7a7649f757bfa27ce8669bb349329b2142d42c45b32285969255c9414d77db7652caaaa0a5942d4cd41a765bdd91ddeb4fec81e3f44663e42948e395c8ef917dab75a1a69dce51bb9d4899a4400ba1da5c662fef9d875ea728e51d70ad3a6f253ba8a23a1f8b7e4d25a75ac87cb6dba2814a41194246458a16fe332376fa36755bd0ac9d20f84170a09ccb2ad7b52d4cc1651e8ba42a4d56327d22c6e6ab03d9ba2b7711585ca655968739cde0c48aa8a6a17e2cc0baf0376b6be95d6cfcf53c586ebc70bbb874d7f3f662b3daadbdad7573e9faaea5294bc170ad99756a6e1e5e503f02a5456ed483fab9567e6ed0f2fd586a024a2b6882e1d81ed1eec47658ccc63c9ef4872cb681b1091b0f699fd9dc19c02062409167440d8be63277787f14f5c771188d06e37040bb2c6491d30fd98832db7668df610e399c90bfa5d0702e542195683a446efc65e08681bff316f3c03525c4b44af57963ac2ee0b5478d0522e8839a0e75544854aadbbdf402d79f2f82e5b5db4c780509e58fdb3dce38a6a90244d3129ba7a15ccb081b46bcf9da3d47b099d8f7635091e9ef2752f7bc76f1aae52ff4000758dbd5e64bb681bff4be193b47c4354d2b0379680ea440cbb7581bba3efc41242e699385fcd8b9fe4fd23cf910430939ff7c9a0836814fffb5e3e223",
      "16571f6594c63bee0e57b5082fa1d92161ca7d660f078edd1b10032ef5bb58d7718e5dab73d41921835c3f57d42c3e16da8855ea0584411cbf67ba75f8074c94ae1878040000",
    ],
    [
      "ETag",
      "Jlaed9lBHaqJZdn5EmOB8g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-51-1602380499267"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92dd4ec2401085df65bc2d09bf459b70018a5a038850ae0c214b3b85c2b65377b712427877672ba25113bd6967a6df6ccf39ed01b649168107cb64f552a0da5facd03cd96282ba9046f32da74c23388046ac981cca7d4f6c6a692bdb91cafd6de3215f6f779d0e133a5c632ac03b409ca08c3478cf07c8448abc16922cd26c51760e987d6e87d360e28feeb84f29b2fd683618747b833e1c9df362248c5894fc3fd6e6470736b49c608c0ab310ad965cd10643e35b9b5aa4b9c48aa64285a8a184cb072b45452e145185279556ad5273abf5c665b579755577db0c4a0a854928637636657d60c80839a11dbb04970155966c382eafaf3c4ea2d2882dfd51e0364b7d5f0196162712177f83ac772df8337c60a708be7322a5223367ea76f0d8fded38cef4f3a89b6ed0ff4168c3499d91c01ff6a7417738b6dcfce4bdb737a8c78a38488d36c35ab579d96abbd5f758afc946cdeff18c2ad08150f0df719f18f06221351edf002361fabb7b020000",
    ],
    [
      "ETag",
      "MlyBaj1m5nworpIk3Jphkw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` != ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-52-1602380499267",
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
      "6f",
      "9b3010fe2bccfbb2694d4202242452d44529dd50f3d211d26e9aa6c498837a054cb1495555f9ef3ba0e98baab59f3077cfcbddf97c4fae7916921109787c534271f7f1af08c8110145638cfa83ddfcacb02ed63f7b5fceecebf0360af3d3c9788c085eb1244df3045a52940503395aafda7121ca9c1642b450a865f55addbede336cdd1c0e7bfd01f22424d18c67d7c8be522a97a34ee7e0dd8e858813a039976d26d2c77867d7ebe485f80b4cc9ce4bcb0ebac8cedba6c789605471918dd72b2ca094506c20a53cc1129e9861f0f5a5749bd3b41d2378c71950c64499a9aa2c9460228b785c16b52a19dd93bacc6707b27266ced4d7a6cbf5c2ffb4a56945de7ed6a8d4369b02649928edd45bceb56d8e5e575482dc6a97df1dcfd13054888827b0e1e1561b6bc7da6471a23d01b7da872a3873e7aeaf75b19810a4e2595d8a4f8304aa321ea6e5bebea38a4015ea34c9cd40efd3aead0f832818b0c836ac20d22108ec60605123d0d9d004330c80224f55ea358b6622d3fb5d3be81b43845a43ab6b0d6ccb30580f02d302cb080c9bda60b27040f647e4b6e00a4eb8cc85e4cdc8c8a5e7facec6f7d68be9c477ea36228a6339698aab9a785ea7c22611f4465ffb2acb053a55f37717bee34da6be7be134573e8398b2bbd50d5e7a44130988a6054d41413117210e8d9c2f57aeef2e17931932ea7b3c3f202419fdbe7f22f877793d65557f2bafbe59fb1f001734296bc4ae39902ed9ef8ffeafb0f23d77f1ed6d89498edda2cc1f44e196370ae4c7daf17e9126e441040564ecfd0d40709d78f7b11e5e0e62f1eda08d54f88ffbc66465c20a68f68ea775970ddbb2745d37490d2ed4ab5cd7b40f03ae342a454821530f1d",
      "352fa79a579d2ae5230893b82e8b7a52fb7f6043ce36b9040000",
    ],
    [
      "ETag",
      "T7vMKr5VUX2+K8kdwfdpFA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-52-1602380499267"
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
      "ff2d90d14e83401045ff657c8504b0d696a40fd6a036210da24d4c4cd32c3020080cee2e1a4af8f7ce525f7666ef9e9d7b33237c976d063e2465f1d3a31c6e0ad4afa68951f5b5565c3a6a158205a845c1a443e766e525ee2aef06ef2912e7aafa888acd8609957e6123c01f212fb1ce14f89f23b4a241fe763ac97922637ae88cb2dbbf07cf41cc42439911f687307cd886014cc7c9828a92187394d8a6684676922a4cf5cea455a2e96ab415f5324505333c3f1492fa4e48229b15fbceb3dda5e3ddae9cc57aed2def19ac2915baa496d9c31bb08d262dea98fe382cb80cc8b9e5dcf97cfeb2bc30818effe876d0a82249ecabd0583a57fb4732913447d5b2470b52c1cb7829f5f53e5d007316253969010000",
    ],
    [
      "ETag",
      "0ozm82b18fpy2FPazjjXPg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff1dcfc95283300000d07fc9b9ed2865f5c656246cd62203bd302c81a16c090998d6f1dfedf8fee0fd80a2aa10a5399b7b348137702f04ed501dbc593544bd91123edb0d8b5b944e1ee337188cdb7bc8ad94eecdd6d18939a6393e5b315274d9c38356af4af54112ed1284e5eb5637dc75a06d04e635db32c12cd12338ee334857099dfca5a53d198678edadc51f3f13b12f226570ab90abe4565ee0fa7272e3ac491ceccab89395401df6424d66c8385cbf48d43d446ff4c3949aa12d986c14a67cbed2391abe2572eeb108760071dc2d88e6dd737694346d07fe9b39bb63f4bc1aa858d0027eff0064b34f5105010000",
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
      "Sun, 11 Oct 2020 01:42:30 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-53-1602380499267",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b4fdb3014fd2b91f795be1f492a55a32a61746ad32d4d41689a22c7bd092e491c6207c650fffbae1dca4048f029b6ef39f79cfbc813b9e5c58e4c48ccd3bb1aaac72f7b119313028aa6f8eaaf1feaebfddf3fd97737dce7cbebf1757f1ca6d32922b866499a9719b4a4a82b0672b2ddb4d34ad425ad846861a2d668d0ea8dbbfd81d31dba6e7f6c234f42962c79718bec1ba54a39e9748edaed548834035a72d966227f79efdcf73b6525f6c094ecbc95eca08aec7c2cfa35138c2a2e8ae97683066a09550439e5195af8cfdcc5a76f53b739cddb2982ef3903ca98a80ba56d610a268a84a77565b292c91331365f1dc8c65b7af3d06222abf3222a680e27d68e2a1aa9c712acf360bdb216fef93a58cdc2c5da8f36f30b6f356bcfd7cbedcadf5857175ee0598ac61918ae35b54ecdcdc70beaef402a5e18f5503f6be5e7062dde8f4513505a42138cecee98f69cae1b27b1cd1267308a932ec4b113db233a88bbcc1dc2701703459e11352c5a60cd3173181df6a25edf1d4543e63851ec523b726cd74ec6bdc17097d8e470421e2aaee08ccb5248de74885c058bd08bc260ebcf67a1674a48689da9b3c6982ee0b547850522e8839a0e3aca052ae9762ffcd00b66f37071e935135e424ad9e3e60e679cd04c02a26985cd5350adc40ef46acf56de1982cdc47e1c83924c7e3d11dd73ede255cb5fe8210e50db55e64b3661b0f0bf193b47c425cd6a03b96f0ea444cb37581bba3efc46242e699385fcdc7ac135699e0248a082827d3e4d049bc0a7ffda71f1118bab8f3252e11d7787492dc22a6876889b729fd9a351d71e0f880157ea5dcced0d8f5dd3397446c8a150cf15358b8f853662b57c016110c7ef9b6e1dfe01331ef0ab78040000",
    ],
    [
      "ETag",
      "NOwuYjzxlJ9TjmLY6Y26Tg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-53-1602380499267"
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
      "0002ff8d92dd4ec2401085df65bcb44df82dd8848b16503180504ad4184296760ac5b65b77b71a427877672ba25113bd6967a6df6ccf39ed1e9ee22c041b56f1fab940b13b5ba39aeac24359244ad22de799443000155b13e9a949eac6396637b587ae7b7ed753beb89f763a44c8608329037b0f518c4928c17edc43c652a4b58027459a2dcbce00b5cbf570e67b83f115f5290f753f9e0f878e3becc3c1382d864cb165c9ff636d713060cb571e4628300b506bc905df62a006daa664699ea0297921029450c2e583b5e045ce04e7264dcc66ddac5a955abd5d695c5cd4ac1681090f988a7946ec7c46fa4071c5128fbf924bb00810654986a3f2fa42e3382c8de87230f6ad46a9ef2b40d2a238c1e5df20e9dd30fa0c1fd83182ef1c4b7991a9137539bc757e3b8e32fd3caae7f8fd1f845494d409f107a3fecc774613cd2d8ededd9d4239119c8294a833ac561aed66cbaabcc7dae53a6a7a8fad448106048cfe8eeb58811db144e2e10d7855f3287b020000",
    ],
    [
      "ETag",
      "RtPmBipenJ2YCB+WDtTrXQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` != ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-54-1602380499267",
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
      "ff85536d6f9b3010fe2bccfbb2494d020d2f49a4a88b52ba22a5a423a4d5344d898183ba034c6d93a9aaf2df7740d317556b3f61ee9e97bbf3f981fc616542262462d95d0de2fef32d8fc8110145338ceef48525ca75747e766edcac86e6a5bd5bdf65d3292258c392b4a872e8495e8b18e464bdea6782d715159cf750a867993dc3d68f8723dd1c8f8f6d077912f274c1ca3fc8be51aa9293c1e0e0ddcf38cf72a01593fd98174ff1c1ee7850097e0bb19283d79603749183f74d4f721e53c578395dafb0805a82d84041598e253c3393e8db6be93ea3453f43f08ec540e398d7a56aca4289989729cb6ad1aa92c90369cb7c71202b77e1ce436dbe5cfbe1972d2d1af2f6ab46a5b6d9089075aeb4b36079a16d2bf4baa112e456bb3e770357c390e029cb61c392ad36d54eb4997faa3d03b7daa726b8f02ebc5033b09804a462655b4a48a31c9a321ea7e5bdbda3864015ea74c98da3dbd418e9e3288d9c381d0dad28d5218a469163d161a4c76313cc24028a3cd5a8b72c5af212c6ba454d67088663833306739498b66919463a362323710c538f532b1a91fd11f92b988253262b2e593732721d78a1bb0983b53f9f856edb464a712ca75d714d132feb54d82482dee96bdf641947a766fe9e1fbac16c1e7a576e77e50bc8687cbfbac34b4f692e01d154d00214880b9ee0d0c8e572e585ded29f2d90d1dee3e50121c9e4d7c33321bcafda29abf6db78d966eb7f005cd1bc6e11bbee400cb2df1ffd5f6115069efffd7d095a61b728f31b51b8e59d02f9b176839fa40b0590828032fe780310dc263e7cac879783587c3b682315fee3bec5b2318905747bc78ab6cb8e6d59866d59a4050bf5263772f4c3801b8d46110a28d56347ddcb69e6d5a66af904c224ae8bdf4e6aff0f3a38e564b9040000",
    ],
    [
      "ETag",
      "v0L5rnUbHFH1hS34P6vUqg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-54-1602380499267"
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
      "0002ff2d906f6f823010c6bfcbed2d24fe1b4e125fcc8da88b310e67966531a69683e10ac7da324308df7d57dc9bf6faf477f73c6d0bdf79994008e73cfba951377719da5757c4686a650d6f159506c103b4226332789e5ccf97f12a78df152ff1874a96fb787a9dcf9930f20b0b01610b698e2a31107eb6508a02b9ed74d2fd44c66c533965bd7d8b9651cc42418913b687cde671b189a03b761e5ce81c638a1a4b896e64a5e982d2ae5d5a238a4aa16fa8d6120df4707f9169aa2ba1897c56fcfb893f0c06a3f1c360329b8d8229838aa4b03995cc1ef6c03696ac50315d392c0c19d07dc9b9d37efd752f76818effe8a2b168769ad8d7a0b31cdcec9fc845b21cd5ea1a3d90823f6395dbdbb9fb0307ad4f5b69010000",
    ],
    [
      "ETag",
      "6D4wbj3H6WPmJRYldGSR7w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff1dcfc97282300000d07fc9591c2581426f2c15176a41a0d45e3211c222b2070874faef75fafee0fd001245b4ef31ab0b5a81573013515d47eb53ade8484b70b637bc2fc8a77d5649aea148f7e6700ba7c5685e8a76cb665b4d49385c45d1c4d04749ce3fb93cea57c4a7528c1f28e8e340b64c875bd8e3ce90245a677742cc7c4296d1b9b54514c77db373662362def15dc3d5a936cb6314a8817a966357e7d244b68c22681c840dc4be8d140a97b79a055650b06c1437a5f73df3b3f9210cd3ee7e491f59da8663225e4217ac00e54dded11ee7cf1994547505fe9b98cd0d7d5e754a3ada81df3f2873169d05010000",
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
      "Sun, 11 Oct 2020 01:42:32 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-55-1602380499267",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6f9b3014fd2bc8fbb8262104f292a2354ae98a96908d9056d53421632ed40dc1149b565d95ffbe8b69ba5695da4fd8bee7dc73ee8327b2e34542a624e6d95d0dd5e3975b119313028a66f8dacf4df9f7c77635908972bf52be9b5feeae1f663344f08625e9becca123455d3190d3eda69b55a22e6925440713751ca7d31f9ad6606cda9389351c214f429e2e79b143f68d52a59cf67a47ed6e264496032db9ec32b17f79efdd5bbdb212b7c094ecbd95eca18aec7d2cfa2d178c2a2e8ad97683066a0955047bca73b4f09f99c4a76f537739dd773304df730694315117aab185299828529ed595ce4aa64f44db7c75201b77e92e428389bcde175141f770622454d1483d96609c07eb95e1f9e7eb60350fbdb51f6d1617ee6ade5dac97db95bf31ae2edcc035148d73d05c63669cea9b8f17d44f402a5e68f5b0796e949f1be4bd1f4b434069096d301a9943da1f9b93388d472c1d0f9c3835218ec7f1c8a183d864131bec24068a3c2daa59b41085e58ccc84dac328b62d88ec6442a3c9301945639bb17e9258711f46e470421e2aaee08ccb5248de76885c055ee84661b0f517f3d0d525a4b4ced5596bac29e0b547850522e8839a0e4d940b546adaedf9a11bcc17a177e9b6135e4246d9e3e60e679cd25c02a26985cd5350ad44820d23fe7ce59e21584fece73128c9f4f713697adeb878d5f2177a88036cec2afd259b30f0fcefdace117149f35a43eedb0329d1f20dd686ae0f7f10894bda6621bfb66e704ddaa70052a8a0609f4f13c13af0e9bf765c7cc4e2eaa38c5478c7dd61b2116115b43bc475b9cf6cc7b19cbe4d34b852ef62c3e1f8d8b526479311f650a8e78adac5c7425bb15abe803088e3f775b70eff009cc86d6578040000",
    ],
    [
      "ETag",
      "1l0szKUM3sdtE+aikAVkYw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-55-1602380499267"
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
      "02ff8d92dd4ec2401085df65bcb42405a140132e40ab1201f9295786906d3b2d85b65b77b71a427877675744a3267ad3ce4cbfd99e73da03ecd2220217823479ae50ec2f1254335dcc51569992742b7921112c40c5122245b47fb81c2cec681078b39968ef82b8a1925e8f08196e3067e01e204e318b24b84f0728588eb416f2acca8bb5e92c50fb520f17fe7c38b9a33ee791ee27cbd1a83f187970b4ce8b11536c6df87facad8e166c7930c7180516216a2da5e05b0cd550db942c2f33ac495e89102518d83c4804af4a2638afd1a4d66ad5ea8eddb8ead8cd6eb7e1b409cc78c854ca0b62970bd2078a2b96cdf92bb9048700614a321c9beb0b8dd3c818d1e570e23b4da3ef2b40d2e234c3f5df20e9dd30fa0c1fd82982ef1ccb7955a833753b7aecff761c65fa79d44ddff77e1052515267c41f8ebd85df1f4f35b73a791fec15caa9e014a4449d61dd6e765a6dc77e8ff59aeba8e93dae12155a1032fa3bee53056ecc3289c737166126c97b020000",
    ],
    [
      "ETag",
      "rdyK+BS0dBbEQQr7kbf2tg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `date` != ? LIMIT 1",
        types: ["INT64", "DATE"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-56-1602380499267",
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
      "6f",
      "9b3010fe2bccfbb2494d020448881475514237a494b484b4daa62931c650b78029369daa2aff7d6768faa26aed27ccddf372773e3fa01b562668826296dd36b4beff7ccd637484a8c41944497aee0b273b3f719d916f98b331fbc5c3d9740a08a6580217554e7b823735a162b259f7b39a3715ae39ef8150cf767a86a39bc3b16eb9aee98c8027689e2e597903ec2b292b31190c0edefd8cf32ca7b862a24f78f1141fdc9983aae6d7944831786d3900173178dff438e7044bc6cbe9660d053482d65b5a60964309cfcc24fef65abacf70d1cf007cc708c584f0a694aa2c9020bc4c59d6d4ad2a9a3ca0b6cc1707b4f696de3cd2e6ab4d107dd9e14291775f352cb4edb6a6a2c9a57612ae4eb55d055e575850b1d32e7f78a1a741a8e629cbe996253b6daa1d6bb36001d1044bbad33ea9c0d23ff523cd8042122a242bdb32221ce75495f03829ffedfd28029660d625b723ddc1c65877e3341e91743cb4e354a7713c8e47361ec63a712d6a2531c5c0934abd65e192979633b44dd74c5d5bc7564a62cb4cecd4198fb1eb18568c63e210d3740c8cf647e86fcd245d305171c1ba71a1cbd08fbc6d146e82f92cf2da36520c235974c5a9265ed629a14900bdd3d75e65190727357b3f88bc70368ffc0bafbbee25cd30b95fdfc285a7381714d0b8c60595b43ee5090c0d9dadd67ee4af82d91218ed1d9e1d10024d7e3f3c13a2fbaa9db26cbfcacbb15aff03e002e74d8bb8eb0ec840fbfdd1ff15166a04ef0a98baa9f774b367d8a0f407a0b0e49d083adf78e14fd485429ad29a96e4e32500709bf8f0ad1e1e0e60e1e9808d90f00f2b4784322135ed568f156da31ddbb68743db452db8966f72d6c83dcc586928455ad0523e76d43d",
      "1c35b236d5882710246163023ff80ed97fe7167575b8040000",
    ],
    [
      "ETag",
      "cfQIs6gQF967I12A8iZoRA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-56-1602380499267"
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
      "2d90dd6e83300c85dfc5bb5c91fa47b722f5624c684342554bd7aba9aad2e0325ac02c319b10eabbcfa1bb899d932f3e47eee15ad41904702af2ef164df790236f5d93a26d4bb6521aaa2dc20890552e24fb2699ec36f379b4f7e359a8db6bfe986e572b21acfec24a41d0c3b9c032b3107cf650ab0ae5dbf16886898271d738255e7f446f512a42459913d6fb24790993086e87db082e744af18c066b8d6e6463e8829a6397d6aaaa29d1b3d41a8d16067878c80db58d32449e289ebff0268bf174f63c9e2f97d3c593802569c505d5c2ee7720364cacca947e252c4c0430432bb9cfc3f923b2ef021dfed1b063b41b43e26bd1598eeff6afe422b14465d3e208b49265bc177cbfdffe00e149ff3069010000",
    ],
    [
      "ETag",
      "t5rL1SP44EU5I3Bcukg+RQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cfdb6e82300000d07fe9b3337448a07b1310b94cc7d826d817529a222005a4ad2b59f6ef333b7f707e00a1940951caf1ca06f00216f28cd6749d8c8ebbd952dcf981ff4e65eaeca7a7486e0e3ed1dcbd87f511f658156a207538538c9b3269b2ac3ec7de1787a8888c4a7955d7e1144f6932852d0cd20c87b2b19add2916d5e70796f4b868c3319d1b6786be977b3508b20d76f696cfb8d0f01a5f9097b97ce056a2926f282c642bec3bbacfc7f9b0d8367b3bbf9edc30ea026552530c8dba193a2fc71a5ef25e70658015607a6a6726caf631332d8456e0bf59ca65628fabcbc8cc66f0fb071d70120a05010000",
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
      "Sun, 11 Oct 2020 01:42:34 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-57-1602380499267",
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
      "000000000002ff85536b4fa34014fd2b64f6ab2db4a5cfa4599b8adaa4a52ea59acd664366860b8e0283cca031a6ff7d2f83753526fa8999b9e7dc73ee8317722f8a98cc0813e9430dd5f38f3bc9c809014d537cbdd3eee27ea8c278f430b607a19cae737df1349f2342342c45f332838e9275c541cdf6bb6e5ac9baa495941d4cd4198e3bbd91d31f4c1c773aed8fc6c85390256b51dc23fb56eb52cd6cfba8dd4da54c33a0a5505d2ef3b777fbb16f9795bc03ae95fd51d24615657f2dfa33939c6a218bf97e87066a0555043915195af8cf8cd9e9c7d45d41f36e8ae047c181722eeb4237b63005974522d2ba3259c9ec85189bef0e64e7adbd65687199d57911153487132ba69a46fab904eb3cd86eac957fbe0d368b70b5f5a3ddf2d2db2cbacbed7abff177d6cda5177896a62c03c3b5e6d6a9b9f97841fd18941685510f9be746f9b541abcf63690828ada00d466367447b1367ca1236e6c964306489038c4dd8784807cce15317dc9801459e11352c5ac862d2633d0e0051021422b797b8111db810f178cae8804f98032e399c90a74a683813aa944ab41d2237c12af4a230d8fbcb45e89912125a67faac35d614f0dea3c60211f4454d87262a242a35ed5ef9a1172c96e1eada6b27bc8694f2e7dd03ce38a1990244d30a9ba7a1dac8181b46fcc5c63b43b099d8d531a8c8eccf0b697adeb878d7f2377a88036cec6af325bb3058f917c6ce11714db3da401edb0329d1f22dd686ae0f7f11894bda6621bff65ef09bb44f01245041c1bf9f26824de0db7fedb8f888c5d54719a5f18ebbc35523c22b68774898725fd9c3a13b70fac4802bfd293674dc63d79a1c4d46c8a1d0af15b58b8f85b662b57a036110c7ef9b6e1dfe0168a91acd78040000",
    ],
    [
      "ETag",
      "jt4Ak5sTd6q7/3To9LmtGw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-57-1602380499267"
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
      "925b6f82401085ffcbf4b19850aaa8243e60bd9478a9154c9a34c6ac30281658babbb431c6ffde596a6dd336695f6066f86639e7c0019e923c0207d6c9e6b944b1bfd8a0bad7c51c65992a49b782e712c100546c43a4ebda62b02e2d6beaf7a41a5d0eebc1c3c8ed748890e1163306ce01e204d34882f378809c65486b214fcb2c5f559d016a5fe8a11fccbde990fa8c47ba9f2ec663b73beec3d1382f464cb155c5ff636d793460c7d7738c51601ea2d65208bec35079daa6645991624df2528428a182ab071bc1cb8209ce6b34a9359ab52bdbb4ae5b66bdddb6ec2681290f994a784eecc2277da0b862e99cbf924bb00910554986e3eafa42e324aa8ce8d29b0676bdd2f71520697192e2ea6f90f46e197d860fec14c1778e65bcccd5991a8cefdcdf8ea34c3f8feab941ff072115257546026fd2f7037732d3dcf2e4bdbb5728678253901275865766bdd568dae67bac375c474def719428d18090d1df719b287062964a3cbe01d27ce4d87b020000",
    ],
    [
      "ETag",
      "AA6rFbu22NSDstK+G4TXKA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `stamp` != ? LIMIT 1",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-58-1602380499267",
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
      "000002ff8553e96f9b3014ff5798f765d39a700472495117a57443cad125a4d5364d893186ba034c6d93b5abf2bfef199a1eaad67e02bdf73bdee53bf49b15311aa288a5d71515b7efaf78848e10553885e827e54bf726af4ecfcb1bf2772cf9ccbcdc8d47234030cd92382f33da92bc1284cae17ad54e05af4a2c386f8150cbebb7ecaee574fa963b1838dd1ef024cd92292b7e03fb52a9520e4df3e0dd4e394f338a4b26db84e70f7173e798a5e0579428693eb734c1459aaf9b1e679c60c578315aafa0804a52b1a139661994f0c88ca3cfcfa5db0ce7ed14c03b462826845785d2658104e145c2d24ad4aa687887ea329ffca0953ff527a13159ace7e1872dce3579fbd1c0d2d86c049555a68cd3e562666c4bf0bac492caad71f1d55ffa0684044f5846372cde1a23e3d818cf4f202a1554b735dee9c8349805a161432531958a15751d218e32aa6bb81f55f072419a8015b835c94dcfea62bb6f0da224ea91a4dff1a2c4a251d48f7a1eee441619b8d48d238a81a7b47acdc2052fbcd88aac5e1c7b766c030b27306b872409c6b8eb2403c7e9b991637563b43f427f0453f484c9924bd6cc0b5d2c83d0df84cbf57c320efdba8d04c34c4e9ae274134feb54d024805ee96bafb38c83931e7e300ffde5781206e77eb3ef294d31b95d5dc3c6139c490a682c704e1515331ec3d0d0d9621584c1623e9e02a35ee2d90121d1f0e7dd2321bc2deb29abfaabbdba6eed7f009ce3acaa11bbe607d968bf3ffabf4218ccfc55389e9dbdaee2588ed5b29c96ed85b633b43b43db6d5b96f503c47f01110ebfd145dfd6fef23b6a424b9a50410bf2f65d00b84ebcf97e0f8f09b0f09cc0060e5331b84222b50911b4b94696d7bd376ccff31ccf453558a817b9cec03d8c5d6b68459ad342dd77d43c263dc53a55c9071024e188e6c1fc0b64ff01e7b77a19cc040000",
    ],
    [
      "ETag",
      "+tEs4xmuFVpxczAsoM/hvA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-58-1602380499267"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff2d90dd4ec2401085df65bca509a0209070614da3249568950b620859b6435d683bebfe884dd37777b678b3337bf6db3927d3c259d5392ce0a08a6f8fa6b929d0bd852643eb4b67b968aa2dc200d08982498afd6ce24f7adba46ab4d5e9ef4b519d2fcb2513567e612560d1c25161995b587cb6508b0af9db7e6ffa898cb9460765b5fe489e928c858af220ac3769fa10a70974bb6e00273a64784483b5c430521b3aa174ab90d68a4a971859f246a2851eee1f0a435e0b4314b1124d66d1683a1cdfce8677f3f9787acf604952384535b39b77601b474e94195d382c8c18307dcbb98ffdf9c3f22404dafda371e3d0be1a625f8bc17278b57fa410c97154673c0e400a5ec6b372d77bf707d9fef0fd69010000",
    ],
    [
      "ETag",
      "oBu85ujpYyLi1YpLxMgmkw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff1dcf4b7282300000d0bb646d9d09124aba03b496828a40a4b8c940081f917f68d44eef5ea7ef06ef07248cf169a2a2ab790bdec03d51f0922d9d4e375583c320d573e61ee83a0e2d7e94c33632592ff47d06edacdd14ced9b7fb6183ded33a0f894665231df97d2a10fac06a785153c58bbf1e82132bd0a35d31b8535dd6a812ed6ba1c0bd3eb42b629fc3e4202adacf02c3ada75cc33425bb21b69aa0d3d0959652bdcd974f6acccad0c4ba55baf0117b8c19763e36a6f26262e8a7917a83a35f6ba73521139ca5666547b000fcd657239f68f59cad10c60bf0dfa4e2def3e7d5e4c9c847f0fb07d745731d05010000",
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
      "Sun, 11 Oct 2020 01:42:35 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-59-1602380499267",
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
      "5d6f9b3014fd2bc87b6d0281908448d11aa574a50aa423a4dd344dc8760c754a30c5a65555e5bfef629aae55a5f609dbf79c7bcefde019ddf1728ba688f0fcbe61f5d3b79d20e804318573784de68e6bdffd722e77570dde59fefd65e898f96c0608deb224de5705eb49d1d494c9e966ddcf6bd154b816a207897aaed71b8c2cdb995843cfb34763e04956644b5ede01fb56a94a4e4df3a8ddcf85c80b862b2efb54ec5fdfcd07dbac6ab1635449f3bda4092ad2fc5cf47b2128565c94b3cd1a0c3492d529db635e8085ffcc2d397d9fbacff1be9f03f881538629154da95a5b90828a32e37953ebac68fa8cb4cd3707b4f697fe2231a8289a7d999678cf4e8c2d5638554f1533cee3556804d1f92a0ee749b08ad2f5e2c20fe7fdc56ab909a3b57173e1c7bea1302998e61a33e354df22b880fe9649c54bad9eb4cfadf24b83828f636909202d59174cc7d6080f2696473232a6d9c471496631422664ec628758d41bb2e196300c3c2daa59b814e584649e3bca86e9c41d3be9d01bbb2999d8c3744c06d4f62c2bb35c8a0e27e8b1e68a9d715909c9bb0ea19b3848fc348937d1629ef8ba840c37853aeb8cb505bcf5a8a040007d52d3a18d72014a6dbb8328f1e3f92209aefd6ec24b9663fab4be871967b8900cd0b886e6295687620b0d43d13cf4cf00ac2776750c4a34fdf38cda9eb72edeb4fc959ec0005bbb4a7fd13a8983e887b673445ce3a2d19087ee802ab07c0bb581ebc35f40c2927659d0cf8d1fff46dd53cc3256b3927e3d4d00ebc097ffda71f1010bab0f3252c11d7687ca5684d6acdb21aecb7d61bbee6830709106d7ea43cc1ed9c7aeb539da8c6ccf4af55251b7f8506827d6c857100461fc91eed6e11f2618bdf878040000",
    ],
    [
      "ETag",
      "TA352kX3JjPuaj0EqJM3/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-59-1602380499267"
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
      "c2401085df65bcb4444028d0848b8288287f9672650859da292cb6ddbabbc510c2bb3b5b118d9ae84d3b33fd667bce690ff0ccd3101c58f1f54b8e727fb146fd680a0f551e6b45b74ca40ac102d46c4d64fd7237e1dd87ede4eabe51e523cfdd70d977db6d2254b0c18481738088631c2a709e0e90b204692d10719ea4cba2b340ef33339cf9de60dca73e11a1e9c7f3e1d0ed0c7b70b4ce8b21d36c59f0ff585b1c2dd88a9587114a4c03345a3229b618e881b1a95892c558522297012a28e0e2c15a8a3c635288124d4af556a96297abd7cd72add5aada0d02631130cd454aec7c46fa400bcd624fbc924bb00990454986a3e2baa3310f0b23a61c8c7dbb56e8fb0a90b488c7b8fc1b24bd1b469fe1033b45f09d6389c8537da66e8713f7b7e328d3cfa36e5cbff783509a923a23fe60d49bf9ee686ab8c5c97b67af514da5a020159a0c2be55ab3deb0cbefb17685899adee36899a30501a3bfe38e6b7022162b3cbe014bffed347b020000",
    ],
    [
      "ETag",
      "5+vOiCKjO/J72iMRAhirGA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `amount` != ? LIMIT 1",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-60-1602380499267",
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
      "000002ff85536d4fdb3010fe2b99f76593689bb6e9ab54b1aa0416a9b490a6b0699a5ac7b904431207db0121d4ffbe734279111a7c6a7af7bcdc9def1ec90dcf233226214f6e4b900f5faf45480e08689a60545dd181eb9cd8bf02a9dca9be494791bf3c9f4c10c10d4bd1ac48a1a1442919a8f17ad54ca4280b2a8568a050a36f37da7dbbd31ddace68d4e90f90a7208de73cbf41f695d6851ab75a7bef66224492022db86a32913dc75b779d5621c53530ad5a6f2d5be8a25a1f9b1ea68251cd453e59afb0805281dc4046798a25bc30a3f0c75be926a7593341f01d6740191365ae4d5928c1441ef3a494952a193f92aacc571f64e5cedd5960cd96eb45f06d4b3343de7eb7a8b2361b09aa4cb575ec2f4fad6d815e575481da5a973f5ddfb5302445cc53d8f0686b4dac436bba38c2e89386f5c584e6dea917586d2c2502a5795e1512d0300553c4d3acbcf72f640854a35d9ddc0cec3e6d0fed51188703160fbbbd30b6210c87e1a047bba1cd460e3851081479daa8572c9a8b9cc6341ada00fd619bb6c3b8db8b23c7e9da71d71940b7c362a0763b8c00c8ee80dc4baee188ab42285e0f8c5cfa5ee06e027fbd984d03b76a23a63894a3ba38d3c4eb3a353689a00ffada992c17e864a6ef2d02d79fce02efc2ad1f7c0e09650fab5b7cf298a60a104d25cd40833c15110e8d9c2d575ee02d17d33932aa573cdb231419ff797c21040f4535655dfd1aafbe53f9ef0117342d2bc45dfd41da64b73bf8bfc2f17c39fd5ca3d943c4ee2f8270c76b0572be76fddfa40ef91083849c7dbe0108ae129f9eeafe6e108b9783364ae37fdc37a68c099350ef1dcfaa0a6b76af37b03bd5a16b2af5bb5ca7e3ec076c348c226490eba78eeabb31f3aa52a57a066112d765e12d4e30fb0f7a3690cab7040000",
    ],
    [
      "ETag",
      "sha7E4G0XTrsEAtkl9dROQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-60-1602380499267"
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
      "d16ac2401045ff65fa6a205a1b63c0872a4185a06dac201491358e696c924977279610f2ef9d8d7dd999bd7b76ee655af8ceca0b0470ced29f1a75f39422bfdb264653e76ca454541a840120ab54c8e57d72780971e16d2377b5ddb1bfdc347e3a9b0961922f2c14042d5c33cc2f0682cf164a55a07c3b9d743f51306e2aabac371fe1328c4528e86285cd3e8a5ee75108ddb11bc08dce315e516399a01d5969ba61c26b9bd6a8a2cad13154eb040df470ff906aaa2ba5891c511ccf75869e3b7af6ddf1743af22602e69428cea81476bf03b1616295c7f42b61612880ee5bc97dedcfbbc8631be8f88fce1b46f3a6497c0d5a4bf761bf201b89252aeb1a07902859c62ae3c7bdfb03e1ff55cb69010000",
    ],
    [
      "ETag",
      "Gv7X5EeC6OL0HOSt8GNy8g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "4b",
      "7282300000d0bb642d0ea854e9ae8920142552a67cb2c9200441be09a9423bbd7b9dbe1bbc1f9066191b472afb9a75e015cce9ca58664bb7dfc1cd5bb145866f99b5251b53b7a363c2077ec5303b7dee627e6b8a6a73898808bb3295a6b9274c06fdf7e1ace40339be38483552993fba7cbad6b6f2e563250a2a2a907fd7dc5255e346539129d73a415e19403c058ec35bdb9bb8776f4f22b6e6aa2be6f0d172f8c16bf2ee9a07795e612374509f6c2d38a31b1e29ce52a17944aa0a772e894ef725263228f5311fc102b069a8041b69f59cad75c35880ff2695f3c09e57c852c104f8fd03add4ca8f05010000",
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
      "Sun, 11 Oct 2020 01:42:37 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-61-1602380499267",
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
      "c8fbda24e4098914ad514a57b684ac405a55d3848cb950b78029369daa2aff7d17d374ed26ad9fb07dcfb9e7dc07cfe49e9709599098670f0dd44f9fee444c4e08289ae1eba5f866ef6a61dd3874c503f86ab13b4b66cb252278cb92b4a872e849d1d40ce4621ff4b35a3415ad85e861a2de6cd81bceccd1d83627f3f96866214f429e6e78798fec5ba52ab9180c8edafd4c882c075a71d967a2787d1f3c8e06552dee802939782f39401539f8bfe8e75c30aab82897fb000d3412ea080aca73b4f08799c4a7ef53f7392dfa19821f3903ca98684ad5dac2144c9429cf9a5a67258b67a26dbe3990c0d938ebd060226f8a322a6901274642158dd45305c6b9bfdb1aae77bef3b7abd0dd7951b0be70b6abfe7ab7d96fbdc0b8be707cc75034ce41738da571aa6f1e5e503f01a978a9d5c3f6b9557e6990fbef585a024a4be8829165cee8d036e7711a5b2cb5c7d33835218eedd89ad2716cb2f90426490c14795a54b36829ca218b67636049340648a2c998b1c81e8d68446dd31cce137308744a0e27e457cd159c715909c9bb0e916bdf0d9d28f4f7de7a153aba849436b93aeb8cb505bcf5a8b04004fda7a6431be50295da76bb5ee8f8ab75e85e39dd84379051f6143ce08c539a4b4034adb1790aeaad48b061c45b6d9d3304eb897d3f062559fc78266dcf5b176f5afe4a0f7180ad5da5bf24087dd7fba2ed1c1157346f34e4b13b900a2ddf626de8faf01391b8a45d1672b977fc1bd23df990420d25fb789a08d6810fffb5e3e22316571f65a4c23bee0e93",
      "ad08aba1db21aecb7d614fa7d67c32211a5cabbf63b66959c7aeb539da8c5040a95e2aea161f0bedc41af90ac2208edfd3dd3afc0655deba3278040000",
    ],
    [
      "ETag",
      "QoK8Oro7YEaAiSeJ7cj7sg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-61-1602380499267"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d925b4fc2401085ffcbf86889dc2cd08487a2a8248008e54543c8d24ea1b8edd6bd601ac27f77b6221a35d1977666facdf69cd3eee139c922f06095ac5f0ccae26c8dfac1165354866b45b75c640ac101d46c4da439bf28466df7b1b353269945fe8af71bf77eb74b840a379832f0f61027c82305ded31e329622ad85829b345b969d03bac8ed70164c07e35bea5311d97e3c1f0efddeb00f07e7b41831cd9625ff8fb5c5c181ad584d3146895988564b2ec516433db036154b738e15258c0c514109970fd652989c49212a34a9b8b54acdadd61bed6ab3d3a9bb2d02b908994e4446ec7c46fa400bcdf854bc924b700990654986e3f2baa3711295466c3918076eb3d4f715206971c271f937487a378c3ec307768ce03bc75261327da26e86f7fe6fc751a69f475dfb41ff07a13425754282c1a83f0bfcd1c4728ba3f75ea1514da4a02015da0c6bd566fbb2e556df63bd12366a7a8fa7a5410742467fc75da2c18b1957787803c256e03e7b020000",
    ],
    [
      "ETag",
      "u+/yM86Z9vsuiSdAblE3OA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`id`) LIKE ? LIMIT 1",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: "%15%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-62-1602380499267",
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
      "53",
      "614fdb3010fd2b962704686d43bb52a052c558c9b488b4853485a109356e720d86244e6d870921fefbce0e852126f6611ff629cedd7bf75e9e2f0ff4961709edd3054f5715c8fb0f3762411b14344bb13afa7832d2f262c8f3e22c98e4dfc7ab3de5fc1c0c10c10d4bb1bccca0a944256350fdd9b4954a51954c0ad1c441cd5ea7d9eeed743eedef740f0e3abd3de429c8963e2f6e917dad75a9fa8eb3d66ea542a419b092ab562cf2e7ba73d7714a296e20d6ca792de9a08a72de173dcc44cc3417c560364503950239879cf10c2dbc3093c5e7d7a35b9ce5ad14c1773c0616c7a22ab4b1852362512c795a493b95f61fa8b5f9db814e5ddf1d866438998dc3ad88e5861c6d13a6c87c2e415599265f83c98844256a5d33052a2217dfdcc025589262c93398f324220372488ec6c784f8930b37d88ab0b64d7cefc4c5baef8dbc90b4d14f024b86238f99c649daf848eaa3672e4983d2087a4ad07b7b6ff4d174b9905c1befde387483a361e89dbb755c3ea42cbe9fae30b025cb14209a4996830639120920e57432f5426f323ef2916133385d2314edff78782184f7251883da3e8d56af6bf5d7807396551671571f689b3e3e36fe69c2467b7703875c2108f7a3e6d3b3991b5cd2ba14c0122414b165bd939305dbc65fd77cbd7388c5ad4319a5f15d691e2b23124bb0ed90e7f61b6bf6eeeefe7ef7805ab0d46f7b7b3be6d72c923f769e342a3b1fa41432b08b665e514d592fbcc050f0d76dd01c9462a919332bf04b14b04506c4de1d798e924411e10531519328bc3c75e736eea841beb0043bbad72536e53e3121afcf9be665d338b23eea15f84f1eaeea588cc8f164ece21efc02aaaa5e9ef4040000",
    ],
    [
      "ETag",
      "M+KMtrWCimnQROmXNq7s/w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "db",
      "72",
      "43",
      "40",
      "0000d07fd9e7c8c42e157da31d62dc6a828817a36bd52221ebba32fdf7667afee03c418e3119866cec1a7207ef80e750dde3bddd1d7549c354aaeab0774d88659eeb28a6693a4bcc59b28f98a4bc1f238578298df4463cf1ab37fa1c6144cb9a0ff3ad5a936a75f2ed8c3b371861a82033e8606918cbe4fb91f655049305675851ede606dfa578b96fe2e783294288b6471d9beb86cea79fb97d73ce077a18849216ed94380286d59688ac9a26e85f16cf12706c9b46a417b27dc53d75cba6b58e7ac716b00364ed292343465f3324abea0efc37b391f7e475d549ce0803bf7f19922a2f05010000",
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
      "Sun, 11 Oct 2020 01:42:39 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-63-1602380499267",
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
      "85536b6f9b3014fd2bc8fbda2424904022456b96d035534236207d689a90712ed42dc1149b6e5595ffbe8b69ba5695ba4fd8bee7dc73ee832772c78b1d99908467f735548f9f6e45424e08289ae1ebadfa165ec9aafe632f66e1f555f8e5d285f16c3a45046f5892eecb1c3a52d4150339d986ddac1275492b213a98a833b23afd9139b05cd31e8f0723077912f274c58b3b64df2855ca49af77d4ee66426439d092cb2e13fb97f7dec3a05756e2169892bdb7923d5491bd8f453fe78251c54531dd8668a09650c5b0a73c470bff98bbe4f46dea2ea7fb6e86e007ce803226ea4235b630051345cab3bad259c9e489689baf0e24f456de3c3298c8eb7d1117740f27c68e2a1aabc7128cb360b33696fed92658cfa2e5c68fc3f9b9b79e75e79bd576ed87c6e5b9177886a2490e9a6b4c8d537df3f182fa3b908a175a3d6a9e1be5e7062ddf8fa521a0b48436183be688f65d739ca489c352d71a26a90949e226ce905a89c9c636d8bb0428f2b4a866d14214bba169c1c07663875a2cb613e6c6ee90f5631b1cd7b61c13eca14d0e27e477c5152cb82c85e46d87c865b08cbc380ab6fe7c1679ba8494d6b95ab4c69a025e7b545820823ea8e9d044b940a5a6dd4b3ff282d93c5a5e78ed84579051f618dee38c539a4b4034adb0790aaab5d861c3883f5b7b0b04eb897d3f062599fc7c224dcf1b17af5afe428f70808d5da5bf248c82a5ff55db39222e685e6bc8437b20255abec1dad0f5e117227149db2ce4c7d60bae49fb14400a1514ecffd344b00efcf75f3b2e3e6271f551462abce3ee30d988b00ada1de2badc67f670381e387da2c1957a17b35cf7d8b526479311f650a8e78adac5c7425bb15abe803088e3f775b70e7f01b8efedf778040000",
    ],
    [
      "ETag",
      "jtJSXsrux4DASYXSBW8e9A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-63-1602380499267"
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
      "1085ffcbf8284d7a93b6247d6815b509adbdd0c4c498660b03a55d58dc5d34d8f4bf3b8bb51a35d1179819be59ce39b0875d9285e0c03a899f0a94e5598c7a668a39aa826b45b75c640ac102d42c26f2bedc713f5b4f749b79d8f5dcd77364db59bf4f840a36983270f61025c84305cec31e329622ad05821769b6aa3a0b74999be1c29f8f2637d4a72234fd64e97983a1e7c2c13a2d864cb355c5ff63edf160c156ace718a1c42c40a32597628b811e199b8aa539c79a12850c504105570f62298a9c49216a34a9d9ad5ac3ae375bdd7abbd76bda1d02b908984e4446ec7241fa400bcdf85cbc904bb00990554986a3eafa4ce324ac8c987234f1ed76a5ef2b40d2a284e3ea6f90f46e187d860fec18c1778ea5a2c8f489baf6ee06bf1d47997e1e7535f0dd1f84d294d409f1476377e10fc653c33d1ebd0f4b8d6a2a0505a9d064d8a8b7bb171dbbfe1eeba53051d37b1c2d0bb42060f477dc261a9c887185873735e302037b020000",
    ],
    [
      "ETag",
      "XyklTnbNt4aLe8LEz+eajQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`purchase`) LIKE ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%app%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-64-1602380499267",
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
      "000002ff8553794fa34014ff2a6436266e625b4a293d92c6ad95dd65adad52aa7b64d30ef0c0516090193cd6f4bbef1bb0eac6acfec530ef77bc6b1ec815cb4232243e8baf4b28ee3f5c729fec11903456b7b7dfeeeefe8caff29f7272901d2ce3ef47343b1d8d10c1144bd0344fa0217859042086cb45332e7899d382f3060a352cb3d1b674a3d3d7cdc1c0b07ac813904453965d21fb42ca5c0c5badad7733e63c4e80e64c34039e3eddb76e8c565ef04b08a468fd6bd94217d17adb743fe101958c67a3e502132805142b48294b30856766e87ffa57bac968da8c117cc302a041c0cb4caab45022e059c4e2b2a854c9f0815469be3890853db5279e36992f67deee9aa68abcfea851a1ad5605883291da67777eacad73f4baa002c45a3bff6abbb68657058f58022b16aeb591b6af8d67879a369d9fdbeeee131cb5a6ce918dd1a973ec785a1bb30a414896553979d44f40e5f3d836e7f5b014814a94aa83ab9e6ed1765f1ff891df0ba27ea7eb473af87edfef7569c7d783810966e803459e54ea158b663ceb1814f4a8d33721b4a2b06df946601803c380a81b52dfece87abf3fd0c31ed9ec91db8249386422e782d5bd23e7aee3d92bcf5dce2663cfaeca8828f6e7b04e4e15f1324f894522e88dba362aca383aa9413833cf76c713cf39b3ebd94f21a6c1fde21aa71fd14400a269415390501cf3109b464ee60bc773e6b3f11419d5404fb6084186bf1e9e09de7d5e7559565fe5659995ff16704693b242dcd407d2269bcddeff15169eebccbebc2db143f37c07657e230ad7bd5620a74bdbfd41ea2b172228200bdedf00045781775fedf60921161f11da0889ffb86f8150264101f5deb1b4aab266772dbd63a8cd4470215fc54cabbd6db0d2508a9042261f2baa9f90ea57152ac5130883b82eb3aa539bbf04153fb2c2040000",
    ],
    [
      "ETag",
      "bwJxxzAkpZtCBnBUgXKanQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-64-1602380499267"
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
      "41",
      "6f",
      "82",
      "40",
      "10",
      "85",
      "ff",
      "cb",
      "f4",
      "584940ad56120fb521d684184beba931665907c4024377871a42fcef9dc55e7666df7e3bef657af82eea13849016f94f8ba67bc891df5d93a06d4bb6521aaa2dc20890552ee43c9a3caa38f02b7dbdac59a7d83dedcef9722984d567ac14843d640596270be1570fb5aa50be1d8f66982818778d5336dbcf681d2522547472c2761fc72fab3882dbe136820ba5096668b0d6e84636862ea879e3d25a5535257a965aa3d1c2000f0fb9a1b65186c813c59b4dbd60e68f27cffe74b118cfe60296a41517540bbbff00b1616255267495b010086086567267c3f92bf2d8053afca3ab8ed1ee0c89af4567e9dfed5fc9456289caa6c5116825cb782bf87ebffd01dcee8df169010000",
    ],
    [
      "ETag",
      "7E3+aL10mcwjGtcbey5Phg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff1dcf496e83300000c0bff81c456dd94c6f66a789921208315c9005c6b5d9d73644fd7ba3ce0fe601489ed369cae6aea22d780777f2a6eff3fda183868ce8e9d5d6425571d21b34e016a74e43315b9417e1a99a9f58b6878cb898d79856e3c1b58b683187faa8aef5107e8bb610aef0af956326620e8f4a69a244cacfa44266fde984fc242e08c6bc0b1843227771c9f2618b99640c7aaa0cd1d2ce1f5f90ac56b9b4db4d93e9d45748b64cec639e70d864b8bf9ec34b709d286c8240727012ca24f2f85ae3c86e35067680fef47ca453c69f3349d1f51df86f66f3bda7cfab41c94847f0fb071a64c12d05010000",
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
      "Sun, 11 Oct 2020 01:42:40 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-65-1602380499267",
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
      "536b6f9b3014fd2bc8fbda24e44548a468cd52ba660a6423a451354dc8980b750b986293a9aaf2df77314dd7aa52fb09dbf79c7bce7df044ee791193198978fa5043f5f8e54e44e48c80a229beee07f90fcb15a9a2ebcb6f376c9fc206443a9f2382372c49f332838e1475c540ce76db6e5a89baa495101d4cd4b1c69dbe650e86b6399a4e07d6047912b264cd8b7b64df2a55ca59af77d2eea642a419d092cb2e13f9cb7bef30e89595b803a664efad640f5564ef63d1af9960547151cc775b34504ba842c829cfd0c27f661c9dbf4ddde534efa6083e700694315117aab185299828129ed695ce4a664f44db7c75205b67ed2c038389acce8bb0a0399c19315534548f251897fec63556dee5c67717c16ae385dbe595e32ebacbcd7ae77a5b637fe5f88ea1689481e61a73e35cdf3cbca07e0c52f142ab07cd73a3fcdca0d5fbb134049496d006c38969d1be6d4ea3249ab0c41e8ea3c48428b2a3c9980e23934d47308a23a0c8d3a29a450b51c4d4b6626b340de37ec4c2d1746886b63da561d41fc4743cee2796cdc8f18cfcadb8820b2e4b2179db21b2f757811306fece5b2e02479790d03a5317adb1a680d71e151688a00f6a3a36512e50a969f7ca0b1c7fb10c56d74e3be135a4943d6e1f70c609cd24209a56d83c05952b626c18f116ae7381603db19fa7a024b3df4fa4e979e3e255cb5fe8010eb0b1abf4976c037fe57dd7764e886b9ad51a72680fa444cbb7581bba3efe41242e699b85fcda39fe0d699f7c48a082827d3e4d04ebc0a7ffda69f1118bab8f3252e11d7787c9468455d0ee10d7e53eb3c756dfb48744832bf52e3630c7a7ae35399a8c9043a19e2b6a171f0b6dc56af902c2208edfd3dd3afe034844860878040000",
    ],
    [
      "ETag",
      "W2mJ6MogtaLFBYcWgeOeog==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-65-1602380499267"
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
      "8d92414f83401085ffcb78a50928d296a407d4aa24b5ad2dd58331cd16068a5d58dc5d6c48d3ffee2c6a356aa2179819be59de7bb0834d5e26e0c32acf9e6b94cd5186fad614335435d78a6e9528158205a85946a4b3699c6a9a2553f76ec2efc3cd7db35dbbc16040848ad75830f07790e6c81305fec30e4a5620adc582d745b96c3b0b745399e13c9a85e32bea0b91987ebc188d82b3d110f6d66131619a2d5bfe1f6b8f7b0b9ec46a86294a2c63345a2a299e30d6a1b1a9585171ec2851cb1815b470fb2093a2ae9814a243938e77da713cfbf8a467bbfdfeb1d725908b98e95c94c42ee6a40fb4d08ccfc4965c8247806c4b329cb6d7171ae7496bc494e138f2dc56df5780a4a539c7e5df20e95d33fa0c1fd87b04df395688bad407ea7234097e3b8e32fd3cea2288863f08a529a903128537c37914dc4c0df7f8eefdacd1a8a65250900a4d868eedf64ebb9efd16ebb93051d37b7c2d6bb42066f4775ce71afc947185fb57db0175d57b020000",
    ],
    [
      "ETag",
      "1ky1pPgdP4VOlWIkWywh4A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`purchase`) LIKE ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%app%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-66-1602380499267",
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
      "40",
      "18",
      "ff",
      "2a",
      "e4",
      "96",
      "265d521551114c4c679475a48a2d629b6659f480077a2d70943bba99c6efbe07a87dd9b2ee2f8e7b7e2fcfdb3d917b968564447c163f9450ec3edd719f9c109034c6db597077e6a8ceafcb9bf370b79838c25aabee643c4604ab5882a679022dc1cb2200315aafda71c1cb9c169cb750a8a5ebadaeae6a3d43ed9ba6a60f91272089e62cbb47f6ad94b918753a07ef76cc799c00cd9968073c7db9ef3c6a9dbce0771048d1796fd94117d1f9d8f434e101958c67e3f50a132805141b48294b30855766e87f792fdd66346dc7087e6401d020e06526abb45022e059c4e2b2a855c9e889d469be39909535b7a69e325dae1def784bd38abcfdac50a16c3605883291ca5777b950b6397add520162ab5c7fb35c4bc1ab82472c810d0bb7ca58395526ce4c51e6cb6bcb3d7e81a3d6dc3eb7303ab717b6a77431ab108464599d9347fd04aa7c9edb66ff3dac8a40254a35c1cd50d569d7504d3ff2874164f4067ea482ef1bfe70407bbe1a987de8873e50e4c94abd66d18c673d8d821af58c3e847a1476755f0b34cdd434880621f5fb3d55350c530d87647f427e164cc28c899c0bd6f48e5cbbb6676d3c77ed4c279e55971151eccfac49ae2ae26d9e128b44d00775edab28e3e8540dc2763ccb9d4c3dfbca6a663f879806bbd5034e3fa2890044d382a620a158f0109b462e962bdbb397ce648e8c7aa017078420a3ef4faf046f97d75d96f5b7f2d2fbb5ff01704593b2463c3607d225fbfdc9bf15569e6b3b",
      "671f4b1cd13c3f42991f88c2756f14c8e5da726f4873e542040564c1ff3700c175e0bfaff6f084108b8f086d84c47fdcb74054264101cddeb1b4aeb2610ff4ae6998a40617f2cf98d6557b8706571a9522a490c9e78a9a2754f5ab0e95e20584415c17a7eed4fe37ac8629e6c2040000",
    ],
    [
      "ETag",
      "DcjGN0NxQYKdyMANsEU0RA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-66-1602380499267"
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
      "41",
      "4f",
      "83",
      "40",
      "10",
      "85",
      "ff",
      "cb",
      "788504d0a025e9811aa235a4b1d81ed434cd16064a0586ee2e1242f8efce522f3bb36fbf9df73223fc944d06019ccae2daa11cee0ad45bd324a8ba4a2b2e2d350ac102d4a260f2eaf62274519c3f57dedbd72ef643ccb6fd72c9844acf580b0846c84bac3205c1f7088da891bf1d8f729ec8981e5aa3ac37bbe8254a58a82933c2661fc7e12a8e603a4c165ce894608e129b14cdc856d20553bd366995a8db0a6d459d4c51c10ccf0f85a4ae1592c866c5f67ddbf51deffec979582c3cff91c18a52a14b6a98dd7f00db68d2a24aa8e7b0e03220e79673e7f3f9cbb267021dfed1d5a051bd4b625f85c6d2b9d93f9389a439aa961d5a900a5ec66ba96ff7e90feb5880f569010000",
    ],
    [
      "ETag",
      "q1waA1eahYB2JZTL6AedQw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff1dcfc97282300000d07fc9599c4290a5b7229b2c62a8d0a117064250896c019960a7ff5ea7ef0fde0f283026d394cf3d251d78076b21e95bbcf57bcd903f6a79b1301985c317ba8648c52ab7395da6da3b1793190d5276e4d64aca48a08f528a3dffeadc1b1f1a0cb93271229a7c276104eb5c457c304443a1d6a7768ecd34105b1d57d163df396f81206696766f0248d7a155158195cd93394711b9d568eb95275b88a3253e8955a236566d96c9696f7ab41b6c78b9ecc6b11248d8bb2dacfd794979e6550a4fc34c7a1cc006103edc1899f2db6b0677babe01ffcd7c5e07f2ba1aa4608481df3f0b2930ed05010000",
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
      "Sun, 11 Oct 2020 01:42:42 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-67-1602380499267",
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
      "91f795be92b6692a55a32a01bab5294b53d0344d91eddc04431a87d86142a8ff7d370e652024f629b6ef39f79cfbc833b9174542a68489eca186eae9cb9d64e48480a619bea64e3e5c2d92d266174e58dbdfddab8dfe369fcd10211a96a2fb32878e9275c5414d77db6e56c9baa495941d4cd419bb9dc1b86f3b93fed0f3ecb18b3c0579ba12c53db26fb52ed5b4d73b6a773329b31c68295497cbfdeb7befd1ee9595bc03ae55efbd640f5554ef73d1afb9e4540b59cc765b34502ba862d85391a3857fcc849dbe4fdd1574dfcd10fc283850ce655de8c616a6e0b248455657262b993e1363f3cd816cfd95bf882c2ef37a5fc405ddc38995504d63fd5482751e6ed6d63238df84eb79b4dc04f17671e9afe7ddc566b55b075bebe6d20f7d4b539683e15a33ebd4dc02bca07e024a8bc2a847cd73a3fcd2a0e5c7b134049456d00663b73fa68349df632973793a71462ced036313e68ea8c3fadc1bc23061409167440d8b16b2b03d0e03cf61b1e325763c1c8c9c984e6c88a963b3a13b18bb2c4dc9e184fca9848633a14aa944db2172132e233f8ec25db09847be2921a575aecf5a634d016f3d6a2c10419fd47468a242a252d3ee6510f9e17c112daffd76c22bc8287fda3ee08c539a2b4034adb0791aaab54cb0612498affd33049b895d1d838a4c7f3d93a6e78d8b372d7fa54738c0c6ae365fb28dc2657061ec1c11d734af0de4b13d90122ddf626de8faf01b91b8a46d16f263e7873f49fb14420a1514fcffd344b009fcf75f3b2e3e6271",
      "f5514669bce3ee70d588f00ada1d12a6dc17f6686cbb7df3a76a5ae98f316f72ec5a93a3c9087b28f44b45ede263a1ad58ad5e4118c4f107a65b87bf3b1c3c9878040000",
    ],
    [
      "ETag",
      "f3l4LCdp2bG3Ru2K7POtJA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-67-1602380499267"
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
      "10c6ff97ed1526330565c6072c2b2734449c1e1ac73961511438ba3b6a1cc7ffbd3d326baa997a81dde5b7c7f77db0876d5ac4e0c0325d3d572876672b54135d0428ab4c49ba95bc900806a0622b2207aae36f8347bb9316f751dbeae7e2dc57935e8f0819ad3167e0ec2149318b25384f7b28588eb416f1acca8b45dd19a076a51e4ec36038bea53ee7b1eec733cf73fbde000ec66931668a2d6afe1f6bf383011bbe0c30418145845a4b29f8062335d43625cbcb0c4dc92b11a1841aae1fac04af4a26383769625ab67961359a979d46abdb6d5a3681198f984a7941ec6c4afa4071c5b280bf924bb0081075498693fafa42e334ae8de872380ead56adef2b40d29234c3c5df20e95d33fa0c1fd83182ef1ccb7955a81375e33db8bf1d47997e1e75ed86831f845494d4090987a3c1347447bee6e647effd9d42e90b4e414ad4195e345a9db66d35de63bde23a6a7a8fa3448506448cfe8ebb548193b04ce2e10d727a0d837b020000",
    ],
    [
      "ETag",
      "Et8PkRW78inKc56Bmr/PtQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`stamp`) LIKE ? LIMIT 1",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-68-1602380499267",
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
      "6d",
      "4f",
      "db3010fe2b96f70524dad2c2b2d2a96285665bb4be4092c21042ad492ec1348983ed746288ffbeb3d3c2101bfbbc4f49ee9e379f2f0f74c98b98f6e8354fef2a90f7ef6ec535dda1a0598ad573f17d79b4fc39e04367151cf1c23f8d43f1a3df4704372cc5f232838612958c40f566413395a22a9914a281420da7db683bbb9dbdeeeefec141c7f9803c055932e2c512d9375a97aad76a6dbc9ba9106906ace4aa1989fca9de5a755aa514b71069d57a69d94217d57adbf4301311d35c14fd5980012a05720e39e319467866c6d79f5e4a3739cb9b2982573c021645a22ab48985129128129e56d2aad2de03b5317f7ba1813b728f43723c9d4dc2ad05cb0d79b14d9822f3b90455659a7cf6a763b228d1eb8629500b72fed5f55d822529129ec19cc70bd2278764301912329a9ebbfed64269cc884223ef9b8bad9137f642d2c64831240c55874ca3983651e2fad533f7a4416904ad87e8bdbe3afa68ba5c48ae4d7c6f12bafee038f4cedc7a62234859741fdce1cc1296294034932c070d722c6240cac934f0426f3a198c9061c770b24128dabb7c782684f7259880da3e8d97b36ffd378033965516b1aa5f689b3e3eeefc5d21f4c66e100ec62708bb42215c821a414f67ae7f41eb920f09482822cb7c6312166c1bffdce5cd622116570b6df07a34579a47ca9844126c3be4b93d45cd7eefecbdef76a8054bfdaae7385df3ff15f11f3b6b8fcaea839442fa769bcc27ba299b851738381e9fda5d7c91f26e5dca4129961af9892039d3d10d2f52a2785aa0b60492084992aa880cad5e3d5b6232ad7228343183573df234f82609aab2145243fcac82807a6b83d0f7265fb63fae3f8f2e4237c07f4193cb76afdbb93287b247a9f7e4ff3d",
      "c6557d3926cf703a71711b7f018b8926065f050000",
    ],
    [
      "ETag",
      "WoXkBkzAiD6vSBinRQdTow==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "1dcfdb6e82301800e077e9b5184044d85d0b8e53148368023704ea0feb70726841c0ecdd67f6bdc1f74239a5c079269a1a1ee803cdb96aaee93a680ca261ea9898e174a995381f14bb6d0c4515be21f1298ccf01242a37facd3724b41e4bdb0b3e8be4c17de1c4f66901ebecd8d7bb88e66af1e4781a8db0b07fea82085aeebdb233940397b4203ceeb63712a5a1cfb43893bd247deae3ee995c3a750a3be1577e55ee5bb7b238c3850cfa81d499e30d5e8a4b2db9ceba7b4abf3893b046f1dd921d332623dcdccb7188385a21985ad603cfd87bb6d99ae60afd373331b7f0be12c87be8d1ef1f5247cf5a05010000",
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
      "Sun, 11 Oct 2020 01:42:43 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-69-1602380499267",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b4fa34014fd2b64f6e3da42297d26cdda545c492c554a359bcd86cc4c2f384a196406378de97fdfcb605d8d897e2a73ef39f79cfbe8337910c5964c0913d9630dd5fedbbd64e48480a619467d1041b87c94f6d8cebf3b577b0ce7e5f56c8608d1b014dd95397494ac2b0e6aba5977b34ad625ada4ec60a1ce70d2e90d1db73f76bcc9c41d8e90a7204f2f45f180ec3bad4b35b5eda376379332cb81964275b9dcbdc6ed27d72e2b790f5c2bfbbda48d2acafe5cf4472e39d54216b3cd1a0dd40aaa047654e468e13f73cb4edf97ee0abaeb66087e121c28e7b22e74630b4b7059a422ab2b53954c9f89b1f9e683acfd4b7f115b5ce6f5ae480aba83136b4b354df4be04eb3c5a2dad203c5f45cb791cacc264bdb8f097f3ee6275b959866bebf6c28f7c4b539683e15a33ebd4bc427ca0fe16941685518f9b70a3fc32a0e0e35a1a024a2b6893c9c819d2ded899b0948d783aee0f58ea006363361ad03e73f8c4036fcb8022cf881a162d64e16e0774ecb93cf1faee28f1bc942563707b09637d67e470d7190e18399c90bf95d070265429956827446ea320f69338da848b79ec9b16525ae7faac35d634f0d6a3c60611f4494f87262b242a35e30ec2d88fe68b38b8f1db0d5f4246f97efd883b4e69ae00d1b4c2e169a896728b0323e17ce99f21d86cecea985464fafb9934336f5cbc19f92b3dc6053676b5f925eb380ac29fc6ce117143f3da409eda0f52a2e53bec0d5d1ffe20128fb4ad42ae377ef48bb4a10852a8a0e05f6f13c126f1e57fed78f888c5d34719a5f18db7c35523c22b686f4898765fd883a1e78c3c62c095fe90eb4d86c7a935359a8ab08342bf74d41e3e36da8ad5ea1584495c7f68a675f8079f0abae278040000",
    ],
    [
      "ETag",
      "EeiINMqo/8/l+0PyetalpQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-69-1602380499267"
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
      "02ff8d92414fc2401085ffcb782d495128d08403280a092096e2c510b2b4d3526c3b6577ab2184ffee6c45346aa2977666facdf6bdd71ee039c94370619dc4bb12e5fe2246fd600a0f55996ac5b782728560016a1133193b32df695b0fa92f82e62336db2ad9c7dd2e132ad86026c03d4094601a2a709f0e908b0c792da0b4ccf255d559a0f78519ce7d6f34bde33ea3d0f4d3c578dceb8f0770b4ce8ba1d06255f1ff585b1e2dd8d2dac30825e6011a2d85a42d067a646c2a911529d61495324005155c3d882595859044359ed49c4eadeed897576dbbd1e95c3a2d06530a844e28677631677da0498bd4a35776090e03b22ad970545d5f789c849511538ea6bed3a8f47d05585a94a4b8fa1b64bd1bc19fe1033b45f09d131995b93e53b7e3fbde6fc771a69f47ddf4fcc10f42694eea8cf8a3c960eef72633c32d4fdefb7b8d6a268983546832acdb8d76b3e5d8efb15e93899adfe36a59a20581e0bf6398687023912a3cbe01936f7d547b020000",
    ],
    [
      "ETag",
      "g6rnqt0tHoBac5Ve58siyg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`stamp`) LIKE ? LIMIT 1",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-70-1602380499267",
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
      "5b",
      "4f",
      "db",
      "30",
      "14",
      "fe",
      "2b",
      "56",
      "f6",
      "0212bd02053a55ac836c8b482f24290821d49ae42418123bb59d4a0cf1df77ecb4307661cf7b4a72ce77f3f1c993f3c078e2f49d5b962d2b908f1feec5adb3e380a619567bcb00b26ecef9e8fbd9b0372dceb94bfd6c304004332c458b32878612958c41f567613393a22aa914a281428d8376a3d36b77770fdb7b4747ddde01f214e4a9cff803b2efb42e55bfd5da78373321b21c68c9543316c54bbdb5eab64a29ee21d6aaf5d6b2852eaaf5bee9712e62aa99e0835988012a05720e05653946786526b79fde4a37192d9a1982572c061ac7a2e2dac4428958f0946595b4aa4effc9b1317f7a7142d7774f227232998da3ad052d0c79b14da822f3b90455e59a7c092623b228d1eb8e2a500b72f9cd0d5c8225295296c39c250b3220c764383e25c49f5cbac1d64269cc8842be77e662cbf7465e443a18298194a2ea29d528a64d94a47ef5cc3d69501a41eb217abf5f9df36cba4c48a64d7c6f1cb9c1f024f22edc7a623e64347e0c9738b394e60a104d252d40831c890490329d845ee44dc6431f19760cd30d4239fdeba75742f4588209a8edd378f5f6acff067041f3ca2256f58bd3719e9f77feae107923378c86a329c26e500897a04638e73337b872ea52002948e0b165be33090bb68d7feef266b1108bab8536783d9a29cd62654c6209b61db1c29ea266eff790bfeb58b0d4bff6f6bbedaef9ff78f2c7cedaa3b2fa20a59081dd26f3896eca66611c07c79273bb8b6f522e",
      "d7a50294a299911f0b52501ddf319e11c5328eda12482a24492b1e1b5abd7ab644655615c0353183577df232f82609abb2145243f2aa82807a6bc328f0c65fb73fae3f3f5f456e88ff8226d79dfe61f7c61cca1ea5de93fff71837f5e5983ca793b18bdbf803ba8b15905f050000",
    ],
    [
      "ETag",
      "6qReg2lnnMzKA6PmQnEaLg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff1dcf4b7282300000d0bb642d0ef251e88e08e55bbe42d14d06620a1a0708c10a767af73a7d37783fa0c298708ea69e920ebc81a592f4355efbbd0615e3bccf97da3005d69abd46b4230d72e8e6aa54d796e3ecbdee1a7a0d8acfb0995824903ab063ed5949df191d2441346f092b4f36720e383233630a930156cc2e9d632af87a38f2fceed1d12eb632f96c3d1e39ac53a3ed7b8c9b24b2908baee9090f1f4ab279d034f00f5fb5a88773208aed4eddb598b1a5a0047abec50b12dfe359956ebda23e8d2c68e4d26d3614ac009987cb4838babc66b2aaeb2bf0df44d33290d715926a2423f8fd03b7461f3d05010000",
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
      "Sun, 11 Oct 2020 01:42:45 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-71-1602380499267",
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
      "6fa24014fd2b64f6b52a2a889a98adb1b83551dc02b6d96c3664182e745a642833b8691bfffb5e86da6dd3a47d6266ee39f79cfbc133b9e74542a624e6d9430dd5e3b73b119333028a66f8bab59eee96ec3ab62a2ed699b70cd683dba7abd90c11bc6149ba2f73e84851570ce4741774b34ad425ad84e860a28ed3eff447e6603836adc96430729027214fd7bcb847f6ad52a59cf67a27ed6e264496032db9ec32b17f7def1d06bdb21277c094ecbd97eca18aec7d2efa3d178c2a2e8ad92e4003b5842a823de5395af8cf4ce2f3f7a9bb9ceebb19820f9c01654cd4856a6c610a268a946775a5b392e933d136df1c48e0aedd45683091d7fb222ae81ece8c842a1aa9c7128ca5bfdd182b6fb9f537f370b5f5a26071e96ee6ddc576bddb78817173e9faaea1689c83e61a33e35cdf3cbca07e0252f142ab87cd73a3fcd2a0d5c7b134049496d00623c71cd1fed89cc469ecb0743cb4e3d484381ec78e4d87b1c9261658490c14795a54b368210a66daa6e3a4fdc81e5a1059c3513f8acd41124dcce168042933613820c733f2b7e20a2eb82c85e46d87c88dbf0add28f477de621ebaba8494d6b9ba688d3505bcf5a8b040047d52d3b18972814a4dbb575ee8faf345b8ba76db09af21a3ec3178c019a7349780685a61f314541b9160c38837dfb81708d613fb790a4a32fdfd4c9a9e372edeb4fc951ee2001bbb4a7f4910fa2bef87b673425cd3bcd690437b20255abec5dad0f5f10f227149db2ce46ae7fabf48fbe4430a1514eceb69225807befcd74e8b8f585c7d94910aefb83b4c3622ac827687b82ef7856d8f6c7b32201a5ca90f31c7b44e5d6b723419610f857aa9a85d7c2cb415abe52b0883387e4f77ebf80f1fa3ea8578040000",
    ],
    [
      "ETag",
      "O4zjFcVb4rioLgNFSL2hzQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-71-1602380499267"
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
      "ff8d92414f83401085ffcb78a509b59556921eaad68aa955294d0fc6345b18105d18dc5d344dd3ffee2cd66ad4442f30337cb3bcf760034f7999800fab3c7bae51ad0f3234b7b60851d7d268be55546a0407d0888c497a9669ddc179d02b71115e8eddc5657f950d064ce8f8010b01fe06d21c65a2c1bfdb40290ae4b598645d94cba673c0ac2b3b9c4561301d735f5062fbe97c32199e4c46b075f68b893062d9f0ff58bbdf3af048ab10535458c668b5548a1e313681b5a94551496c69aa558c1a1ab8799029aa2ba1885a3c69f5daadb6e71e76fa6ef7f8f8d0eb3128291626a792d9f98cf58121236448afec123c065453b2e1b4b9bef0384f1a23b60ca691d76df47d05585a9a4b5cfe0db2de07c19fe103db45f09d1305d5a5d953e793ebe16fc771a69f479d0da3d10f421b4e6a8f44c1d568160daf6e2c77bff37eb236a86f1471901a6d866db7db3fea79ee7baca764a3e6f7f846d5e8402cf8efb8c80df8a9901ab76fcbb5d1527b020000",
    ],
    [
      "ETag",
      "oqlfu3eUI7neWRJG0WJ8bg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`amount`) LIKE ? LIMIT 1",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "%1.54%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-72-1602380499267",
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
      "53",
      "6b",
      "4f",
      "db",
      "3014fd2b9627c4a6f5414b29a352c53a1ab468a12d690a42136adce436189238d84eb50ef1df77ed501e62838ffb14dbf7dc738e8f6feee80dcf63daa30b9edc9620d71faec582d628689698d329ec9ffe1e7deeacf8c55a0c2791bb38fb35e8f711c14d97625991425d895246a07ab3692391a22c9814a28e44f5fd76bdd5dd69ef7ed9e91c1cb4bbfbd8a7205d7a3cbfc1ee2bad0bd56b3637da8d448824055670d58844f678de5cb59b8514d71069d57c29d94415d57c5bf4301511d35ce4fdd9140d940ae41c32c653b4f0d4192fbebea46e7096351204af78042c8a44996b630b2922912f79524acb4a7b77d4da7cb6a053c7738e0272349e8d828f21cb4c73f8893045e67309aa4c3539f6c727242c50eb8a29502139ffeef80ec12329963c85398f43d2278764301a12e28dcf1dff1993e7fe70b0e6b9276e405ae829862543da21d3c8a68d97b85abae6a134288da08714ddd76f47ef4d950bc9b5f1ef8e02c71f1c05ee995345e641c2a2f5f416435bb25401a299641968902722066c998ca76ee08e47030f3b6c0e930d42d1decfbba786605d8031a8edd768753b567f033863696911ab6a415bf4febef66f86636f3c789763abd5d8eb6c21d125c2704e2a0e7a3a73fc0b5a1df9b004097964fbdec8ca826de1dd71dfcc1e6271fa504669dc2bcd2365442209b61cf0ccdeb3eadeeb76f75a07d482a57e5ddbdd31bf681effb5f2a0515a7e905248df0e9cd9a29ab25e788eb1e02f5ca31928c5124333cbf1260ad8220562df8f3c8649c290f09c98b849185c4c9cf943e4618d7c6331894569ba6cd43d5225bdd96d57db6d63ccdaa9a6e1ff5ab9ac42325ac3f1c8c1a9",
      "f80338def6b20a050000",
    ],
    [
      "ETag",
      "bSe7QzN+4viYyoDPcIbVxA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff1dcf516e82300000d0bbf4db182960607fc8c0d5410256c2da1f82a5651d2a8556062ebbfbccde0dde0fa819e35a57a6eff80dbc80a586fe9aaddf7b6fe704bc1cf629be7b863e54942dea12c87b2065dd0b0423482ca7c9f5647d9dbdf22acac97b8587824f9f38a3646f951ff3402ece461e4c9e1bb134a91b90361c1f5592ba0d156fb04cb2a38427674148ab0dc28c12ef665b269ba9753c5989aee2866ee704a3fc3a167166db088adeccc289233b9c643d2cdb0e2703646917bb218938fe2e72dc14fcdcaa968115e0b39223d7957cce6cd7f757e0bf599945f1e775c7eb918fe0f70f929366de05010000",
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
      "Sun, 11 Oct 2020 01:42:46 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-73-1602380499267",
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
      "da04f20e91a2354ae99a2d211b21adaa6942c65ca85b82a96d324555fefb2ea6e95a556a3f61fb9e73cfb90f9ec8032f12322131cf1e2b90872ff72226670434cdf0f5f63bbb975a1ce4ddcdcde5de3ea81ffb6d954da788e0354bd15d99434b894a325093eda69d495195540ad1c244ad51afd5193addded8e9bb6e7738429e823c5df2e201d9775a976a62db27ed76264496032db96a33b17b79b7f75dbb94e21e9856f65b491b5594fdb1e8d75c30aab928a6db0d1aa814c8087694e768e13f3389cfdfa66e73ba6b6708de730694315115bab685299828529e55d264259327626cbe3a908db7f4e6a1c5445eed8aa8a03b38b312aa69a40f255897c17a652dfccb75b09a858bb51f6de657de6ad69eaf97db95bfb16eaebcc0b3348d73305c6b6a9d9b9b8f17d44f40695e18f5b07eae959f1bb4783f969a80d20a9a60347286b43376dc388d472c1df70671ea401c8fe3d180f66287b97de8273150e41951c3a285287add0eeb3883247260e844fdaed389dc94255167e8f607fd71d2731d468e67e4afe41a2eb82a85e24d87c84db008bd280cb6fe7c167aa6849456b9be688cd505bcf6a8b140047d50d3b18e72814a75bb177ee805b379b8b8f69a092f21a3ecb079c419a7345780682ab1791ae44a24d830e2cf56de0582cdc47e9e828a4c7e3f91bae7b58b572d7fa18738c0daae365fb2098385ffcdd83921ae695e19c8be3990122ddf616de8faf80791b8a44d16f26b",
      "eb05b7a4790a20050905fb7c9a0836814fffb5d3e22316571f6594c63bee0e53b50893d0ec1037e53eb307c3e1b83326062cf5bb98db1b9dba56e7a833c20e0afd5c51b3f858682356a917100671fcbee9d6f11f5b6b4f4a78040000",
    ],
    [
      "ETag",
      "YJcjrtoyrhWWFv/ysKvUug==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-73-1602380499267"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d925b4fc2401085ffcbf86849b81668c203c84512aea53c194296760ac56db7ee6e4524fc77672ba251137d6967a6df6ccf39ed091ea324000736d1f6294379bcd9a29e9bc2459571ade8968a442158809a6d89e49dea74d3bdc5c1abdb9ff3eecbeda156b2e7ad1611cadf61ccc0394118210f14380f2748588cb4e60b9ec5c93aef2cd0c7d40c179e3b9c0ca88f4560fac972346a77463d385bd7c58069b6cef97facadce16ecc5c6c51025263e1a2da9147bf4f5d0d8542c4e391694c8a48f0a72387fb095224b9914a2409342bd5228d9c572a551ac369b65bb4e20173ed39148885d2e481f68a11977c5815c824d80cc4b321ce6d7671a47416ec494c3896757737d5f019216461cd77f83a477c7e8337c609708be732c1659a2af547f346dff761c65fa7954b7edf57e104a535257c41b8e7b0baf3d9e196e75f1de396a54332928488526c352b1daa8d5ede27bac77c2444def71b4ccd0029fd1df711f697042c6159edf002a656ca27b020000",
    ],
    [
      "ETag",
      "lB4ObD+eGzRFQlDx+w516Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`id`) NOT LIKE ? LIMIT 1",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: "%15%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-74-1602380499267",
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
      "000002ffc5535d4fdb3014fd2b962704486d43bbd242a58a159a8a6ca5e9da14c426d4b8c96d302471b01d2484f8efbb76280c31b1873dec29b6ef3d1f3ebe79a4b73c8f698fae787257827cf8742356b44641b3044f7f9cc6c3e961f7a07bac476a9d7d1d2c46ab51d2ef63073728c5b22285ba12a58c40f516f3462245593029441d89eadd76bdd9d96b7d3ed86b1f1eb63a5dc42948d7639edf22fa5aeb42f51c67a3dd488448526005578d48642fe7ce7dcb29a4b881482be7ada4832acaf958f4281511d35ce4fdc51c0d940ae41232c653b4f08a8c575fde523738cb1a0936dff30858148932d7c6165244225ff3a4949695f61ea9b5f9db82ceddb17b1290137f31097642961970b84b9822cba50455a69a8c66fe19090bd4ba660a54482e4edd994bf0488a354f61c9e390f4c911194c86848cfd0b77b613e2d92e99f801197bdf5cac8dbd332f204df414c39a21ed906964d3c64b5c2d3df3501a94c6a6e714bdf76f479f4c950bc9b5f1ef4d0277363809bc73b78a6c0c098b1ee67718da9aa50ab09b4996810679266240c8d49f7b81e74f066344d81ca69b0e457b3f1f5f01c14301c6a0b65fa3d5695bfd4dc3394b4bdb715f2d68933e3dd5fe8961abb9bf852457d8843352e1e9f7853bbba4d5d10cd620218f2cea839c6cb32dfc75d4377387bd387928a334ee95e691322291045b0e7866ef58a1f73bdd833dfba36826f5fb5acb3c36e4f11f2bcf1aa5e50729859cd961335b5453d60bcf3114fc7d6b3403a55862681639de44015ba540ecdb9197284918129e1313350983cba9bbb471873572cc62ace84e9bd8947bc484bc596f9bcdb671647d5423f09f3c5c55b11891a13f71710e7e01aa6d11d5f8040000",
    ],
    [
      "ETag",
      "ZHdDP9787BtFsfmJAUFbFg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff1dcfdf5682301c00e077d9b57912215d77fc1542311d1274c319f03327e5746cc0eaf4ee79fadee0fb41b4aea1eb4ac95bb8a067a4a981a7f534e64bc7b49b592d79990539238759141c37a6eec1e0a124708657ab3bb97cdfa47d6a16fdca8d8c2f9515434c321c7849c1f3c43a05eabd5aaf52154a7ba39b3af6a5e5313b76fc9b761ebfa9b7dca96a8c42a25c617a44cfe327cd3a7c1b8e4d61bc7dc6f441287393512860ab02189d8f941f12d9ecc9d974b7c36591db492b46d94415735f86f582b872c0ad66be5f0f688260bc32015dc9eeb3b985f104fd374ba9af70bf3a400508f4fb076e1af10405010000",
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
      "Sun, 11 Oct 2020 01:42:48 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-75-1602380499267",
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
      "5d6f9b3014fd2bc87b6d0249484222456b94d2365a202b9076d33421db18ea8e608a4da7aaca7fdfb569ba5695da276cdf73ee39f78327f48757199a23c28bfb96358f5fee04412788295cc0ebadb257df5c9514439929f923186737f6c5d5620108ae5912efeb92f5a4681bcae47c17f78b46b4356e84e841a2de74dc1b4c9ce1c873dcd96c3899024fb232dff0ea8fc9ae6a39b7eda376bf10a22819aeb9ec53b17f79b71f8676dd883b4695b4df4adaa022ed8f45bf968262c545b5d8c560a095ac49d91ef3122cfc6766e4f46dea3ec7fb7e01e0074e19a654b495d2b620051555ce8bb63159d1fc09199baf0e28f637fe2ab1a828db7d955678cf4eac0c2b9caac79a59e7d136b0d6e1f9360a96c97a1ba6f1ead20f96fdd576b30bc2d8bab9f423df529894cc70ad85756a6e215c403f6352f1caa827fa592b3f3768fd7e2c9a00d29275c174ea4cf0c073662427539a7ba331c91d468847a6633c220e9db9cccd08c3c033a286852b5179f9840eb0374d47136f96bacec44d0971a62975477946ddd98050071d4ed0df862b76c6652d24ef3a846ea275e2a749b40b57cbc43725e4b82dd559674c17f0daa3820201f4414d071de5029474bbd761e247cb55b2bef6bb096f5881e9637c0f33ce712919a07103cd53ac0944060d43e132f0cf006c26f6fd189468feeb09e99e6b17af5afe424f6080daae325f1427d13abc30768e886b5cb606f2d01d500d966fa136707df80d4858d22e0bbadaf9d14fd43d452c670dabe8e7d304b0097cfaaf1d171fb0b0fa202315dc6177a8d422b461dd0e7153ee337b3cf106ee101970a3dec586e3f1b16b3a87cec8f6ac52cf15758b0f857662ad7c014110c61f9a6e1dfe01cdb21acd78040000",
    ],
    [
      "ETag",
      "ht/CK4tTg2sdtsXM5dW/GQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-75-1602380499267"
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
      "00000002ff8d92614f82501486ffcbe92b2e344565f30315959b92016e6ecdb92b1c10032edd7ba939e77fef5c326bd5565fe09cc3732eeffbc21e9eb232061bd659fa5ca3d89da5a81e74e1a3ac7325e956f1522218808aa59a0c7bed732b743d1178850ccc41b4580867342242461b2c18d87b4832cc6309f6e31e4a5620ad453caf8b72d57406a85da58741e88fbd5bea0b1eebde9b4f26cee5c48583715a8c9962ab86ffc7daf260c096af7d4c506019a1d65209bec5488db54dc98a2ac796e4b588504203370f52c1eb8a09ce5b3469f57badb665762e06667738ec587d02731e3195f192d87940fa4071c5729fbf924bb008104d498693e6fa42e32c6e8ce872ec8556b7d1f71520694996e3ea6f90f46e187d860fec18c1778e15bc2ed589ba99dc3bbf1d47997e1e75ed84ee0f422a4aea8484e3a91b84ce74a6b9e5d1fbe54ea19c094e414ad419b6cdeea0d7b7ccf758afb88e9ade632b51a30111a3bfe32e5360272c977878034c01b43b7b020000",
    ],
    [
      "ETag",
      "bT51/6TENrSNmsS08cXXrA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`purchase`) NOT LIKE ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%oran%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-76-1602380499267",
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
      "7b",
      "4f",
      "db",
      "30",
      "10",
      "ff",
      "2a",
      "91272426d1367d246d2a55ac8330a29514d214344d53ebb8976048e2603b4c08f5bbef92501e4283bfe2dcfd1e77e7f323b9e5f9868c49c493bb12e4c3971b119103029a2618e5278a3ad65de89c9ef7fb8b41796a7ebfbeb8984c10c12b96a25991424b89523250e3e5a29d485116540ad142a1d6d06e756db3d71f9903c7e9d943e42948e319cf6f917dad75a1c69dcecebb9d0891a4400baeda4c64cff1ce7daf534871034cabce5bcb0ebaa8cec7a687a9605473914f960b2ca054205790519e62092fcc4df4edad749bd3ac9d20f89e33a08c8932d7555928c1441ef3a494b52a193f92bacc5707b27067ee51681ccd977eb8bfa659455e7f35a832562b09aa4cb57112cccf8c75815ed754815a1b57a76ee01a189222e629acf8666d4c8c4363ea1f1bc66c7ee506fbcf70d4f2e7a131f37eba889879675e6874b1b20d28cdf3baae90462954353d8dce7b7f6115816a946b92aba169d3eec874a2381ab278d4b7a2d884281a45438bf623933903186c22a0c8d3957acda2b9c81dea8c1c66821d0fe3783380ae3318750716b320a6dd88daa689bf8e45c9f680fc955cc331578550bc991fb90abcd05d85c1d23f9a866edd464c7146c74d715513afebd4d824823ee86b5b65b940a7ea323c3f7483e951e85dbacdfdcf20a1ec6171871b10d35401a2a9a41968906762834323e7f385177a737f3a43467da9e73b8422e3df8f2f84f0a1a8a7aceb6fe5650f6aff1de092a6658db86f0ea44bb6db83ff2b2cc2c0f37f7c2cb12724cdf750e70fc270",
      "e71b0972b174835fa409051083849c7dbe0208ae139f3edddd3b422cbe24b4511aff71e198aa4c988466f17856b7d9b02ddb31ad6a35112cf5bb5cafdfdb4db8d2a81421835c3f75d4bca36a6075aa54cf204ce2bef8f5a8b6ff0082f58e6cc7040000",
    ],
    [
      "ETag",
      "iFsa95qT9HP33S4uH0BhQQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-76-1602380499267"
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
      "2d90416fc2300c85ff8b77844ad0213a90388c0d31a60ad10e2e9b100ac5edcadaba24ce36a8f8ef73ca2eb1f3f2c5efc90d7ce5d501c6b0cfb393457dbecb9023d7c4686cc1464a4d9541e802b2ca84bc64c7ceab5d4769305f3ddbdfd385dffd4e34990861924f2c158c1b48732c0e06c61f0d54aa44f9b6dbe976a2607cae9db258ae67f3592c424907272c3761f8380d6770dd5ebb70a47d8c296aac1274236b4d474c78e1d21a55d6057a86ac4ed0400bb70f99265b2b4de489e20543af3fecf9f70fbdc168e40f03010b4a14e75409bb7903b1616255c4f42361a12f806e5bc99db6e7b7c8031768fb8f4ecf8c66a5497c0d3acbdecdfe895c2496a8ac2d762151b28c979c6ff7eb1fb427d1bb69010000",
    ],
    [
      "ETag",
      "zgj+JuTQf7GPDuxqztZ2+Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff1dcfc97282300000d07fc9599d5404a137762ad4611965b930218d86b2044344b1d37f2fd3fbbbbc1f803026e3580ad6901ebc83196db50ddef84c3576fac50e729bc3bd4d1fcdd489a0eb42256f206307071b53f6782a89296517e3634afc42cd326a999a8cd31351d637fb1c1e83c1719bf6d4f2b2fdf610222f4ad3e88eee5dc05f6ef716c3330d75af8a6f6a65c6dc725935533d2a452f73e858188fe2a06c7931d33e1dc3eb0cfdc94a8f9f09fc120124b564554852bc2b96fd7dcb92b86681b1c075c19368c773b002e439d49c8c65bdcc2459d356e0bf598a7920cbd52088130e7eff0071bc764b05010000",
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
      "Sun, 11 Oct 2020 01:42:49 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-77-1602380499267",
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
      "0002ff85536b4fa34014fd2b64f6ab6da96d793469d6a6e24ad2d29552cdbad99061b8e028659019748de97fdfcb605d8d897e6266ee39f79cfbe099dcf132255392f0fcbe81fae9dbad48c8110145737cbdbebe86aaf0abfa06b6f9f2eaa282f4ef623e9b2182b72c497755013d299a9a819c6e37fdbc164d456b217a98a867dbbda1651e8f1c73ecbac7968d3c0945b6e4e51db26f94aae474303868f77321f20268c5659f89ddebfbe0e17850d5e216989283f79203549183cf45bf178251c54539db6ed04023a18e6147798116fe33d3e4e47dea3ea7bb7e8ee007ce8032269a52b5b630051365c6f3a6d659c9f499689b6f0e64e32dbd4564305134bb322ee90e8e8c942a1aaba70a8cb370bd32fce06c1daee691bf0ee2cde2dc5bcdfb8bf572bb0a36c6d5b9177a86a249019a6bcc8c137d0bf082fa2948c54bad1eb5cfadf24b83fc8f636909282da10bc6b669d1a163ba4996d82c734693243321499cc49ed0516232770ce334018a3c2daa59b414e5c44eb3211dd9716a83198f93cc8a1dc71ac57602963972191d8149f647e4b1e60a4eb9ac84e45d87c855e8475e1c85db60318f3c5d42469b429d76c6da02de7a545820823ea969df46b940a5b6dd7e1079e17c11f9975e37e125e4943d6dee71c6192d24209ad6d83c05f54aa4d83012cc57de2982f5c47e1e82924c7f3f93b6e7ad8b372d7fa54738c0d6aed25fb289423ff8a1ed1c1097b46834e4a13b900a2ddf606de87aff0791b8a45d1672b1f5c25fa47b0a21831a4af6f53411ac035ffe6b87c5472cae3eca488577dc1d265b115643b7435c97fbc29e58aeed3a44836bf521e60ead43d7da1c6d46d841a95e2aea161f0bedc41af90ac2208e3fd0dddaff037f1ef46b78040000",
    ],
    [
      "ETag",
      "ZZZeplIprheUgLWQpedxCA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-77-1602380499267"
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
      "ff657c2db1281668e203282a8a08b4c41863c8d24e4bb5edd4ddad0608ffee6c45346aa22fedccf4ccf6dedbaee129c94370619ec4cf25cae55e8c7a6c8a09aa32d58a6f05e50ac102d42266b2bde8eed7c7f3dbd51dad281c7b76ebeab28c8f8f9950c1023301ee1aa204d350817bbf865c64c86b01a56596cfaace02bd2cccd0f327fde139f71985a61f4e07834e77d0838db55b0c8516b38affc7dac3c682479a4f3042897980464b21e91103dd373695c88a146b8a4a19a0820aae1ec492ca4248a21a4f6acd66adeed807872dbbd16e1f384d06530a844e286776eab13ed0a4453aa15776090e03b22ad970545d5f789c84951153f687bed3a8f47d05585a94a438fb1b64bd0bc19fe103db46f09d131995b9de5167839bce6fc771a69f479d76fcde0f42694e6a87f8fdeb9ee777ae47867bd87aef2e35aa91240e52a1c9b06e375a474dc77e8ff5844cd4fc1e57cb122d0804ff1d1789063712a9c2cd1b4d0f86137b020000",
    ],
    [
      "ETag",
      "9hB/1QbWzYozodQS08KJug==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`purchase`) NOT LIKE ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%oran%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-78-1602380499267",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536d4fa34010fe2b642f265e625b5a6981268dd75454ee2a554a3597cba55de880abc0e2ee52634cfffb0d607d8939fdc432f3bcccccce3e913b96afc990842cb92f413c7ebbe5213920a06882d1cde4e7991ac8934bf7d4be531b488cf06cfe301a2182552c49b3228596e4a588400e17f37622785950c1790b855aa6d5ea0ef4dea1a51bb6dd1b98c89390c65396df21fb46a9420e3b9d9d773be13c4981164cb6239ebdc43b9b5ea710fc1622253bef2d3be8223b9f9b1ea53ca28af17cb4986301a504b1848cb2144b7865aec31fefa5db8c66ed04c11b16018d225ee6aa2a0b25229ec72c2945ad4a864fa42ef3cd81cc9da93309b4c96ce105fb2b9a55e4d5778d4a6db91420cb546927feec5c5b15e8754325c895767de6f88e8621c16396c292ad57da483bd2c6deb1a64d67d78ebfff02472d6f166853f7978388a97bee065a172b5b83542cafeb0a68984255d3f3e8dc8f175611a842b926b934f501ed5aba1dc6a119c5d6613f8c7508432b34fbf430d423db00631d02459eaad46b16cd796e53dbb2231d06b119c76b03bab661758d7ed4879876433ad075fcb5fb946c0fc883600a8e992cb864cdfcc8b5ef06ce32f017de641c38751b31c5191d37c5554dbcad53619308faa4af6d95651c9daacb70bdc0f1c793c0bd729afb9f4242a3c7f93d6e404c530988a68266a0409cf3350e8d5ccce66ee0cebcf11419f5a55eec10920cff3cbd1282c7a29eb2aabf95d7c0a8fd77802b9a963562d31c48976cb707ff579807beeb9d7e2eb1c705cdf750e72fc270e71b0972b970fcdfa409f91083803cfa7a05105c27be7cbabb7784587c49682315fee3c245b2328904348bc7b2bacd86dd3775b357ad268285fa90b3fac66ec29546a50819e4eab9a3e61d5503ab53a57c016112f7c5ab47b5fd07256cf14ec7040000",
    ],
    [
      "ETag",
      "vCJHt6sFQIG9ktveg4bHSw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-78-1602380499267"
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
      "000002ff2d90dd4ec2401085df65bc9426050914122ea8416dac448a181343c8b24c6bb1ed94fdd1344ddfddd9e2cdceecd96fe79c4c0bdf797582391cf3ec62513537199a8d6b12d4b6309a4b4d954618001a9131197e04fef6e5f659c98734b82cd3891fbddbcd62c184965f580a98b790e6589c34cc3f5ba84489fced7050fd44c64c533b255abfad1e57090b259d9cb0dec5f1328c57d0edbb019ce998608a0a2b896e64ade88cd2442ead16655da0a7c92a891a7ab87fc814d95a28228f156f1a78c3893fba0bfcf16c369a4c192c480a9353c5ec6e0b6c63c88822a15f0e0b430654df72eeb43f7f581ebb40fb7f346c0cea5745ecabd159fa57fb7b72910c4735cae200a4e0653ce5e67aeffe000d612dfc69010000",
    ],
    [
      "ETag",
      "BX80SM+KrcFf8qAf60IVuQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "db7243400000d07fd9e72423a596be2141232e4b084fc665dd96885bd9c9f4df9be9f983f3024996e1698ae79ee007f80234f9100fd9c1e8059993f2a3de24f719524356e116dd54a20b8fa1b449b1f0b1133a5452745e436848e9d479f6b567f2d55c3adb869a828ae4ced457ab11ad7d8b4aabd50d5dbd45b0f3f8537f54c28cab4cce410bbbc7972ad4c54675cfa59f7e5be92ab42e676f19d62872e1861d86a8b4fac916df5bd8319a0b68fba755dab83640da85fa791a18e96a0ea53bb5c46902d521228467b003787bd6239ee2fa3d633f457107fe9bf14c9ff87d957132e211fcfe0186cbe88205010000",
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
      "Sun, 11 Oct 2020 01:42:51 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-79-1602380499267",
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
      "0002ff85536d4fdb3010fe2b91f795bea5ef95aad19530a2b5e94852aa6d9a22dbb904431a87d80121d4ffbe8b431908093ec5f63d77cf73cf5d9ec8adc86332234ca47715948f5f6e24232704344df1759265d9aadab8e7df92bbdfdeeec7ee52a9553a9f2342d4598aee8b0c5a4a56250735db06edb49455414b295b58a8359eb67aa3aedd9f7407d3a93d1a639e822c5989fc16b3afb52ed4acd33972b75329d30c6821549bcbfdcb7be7deee14a5bc01ae55e72d65075954e763d2af99e4540b99cfb7010aa8149411eca9c850c2ffcc989dbe2ddd1674df4e117c2f3850ce6595eb5a1696e0324f445a95a62a993d1123f3d58104ceca5986169759b5cfa39ceee1c48aa9a6917e2cc03af7376bcbf5ce37fe7a11ba1b2f0a9617ce7ad15e6e56dbb51758bb0bc7772c4d590626d79a5ba7e6e6e105f963505ae4863dac9f6be66783dcf763a913905a41138cc6dd11ed4dba5396b0314f26fd214bbac0d8848d87b4cfba7c3a8041cc80629e2135593497b9dd454b993d88fabd248e06d41e46349eb02819d0a11d739b8d06400e27e4a1141ace842aa4128d4364e7bba11385fed65b2e42c7b490d02ad3678db0ba81d71a353688a00f7a3ad4512191a9b6dbf542c75f2c43f7ca6926bc8294f2c7e00e679cd04c01a26989e66928d73246c388b7583b67083613fb790c2a32fbf3446acf6b15af2c7f490f7180b55c6dbe24087dd7fb6ee41c115734ab0ce4be399002255f636fa8faf01791b8a44d1572b975fc5fa479f221811272fef934116c029ffe6bc7c5472cae3ed2288d77dc1dae6a125e42b343c2b4fb9c3d1cf78643f3a76a5aea77b1d1a47774adae5157843de4fab9a366f1b1d186ac522f200ce2f83de3d6e11faa49a77678040000",
    ],
    [
      "ETag",
      "8lllLuOIFBfqZNWKWQssLg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-79-1602380499267"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92dd4ec2401085df65bc2de1472cd0840b40149282584a8c31842cedb414db6ed9dd8a407877672ba25113bd6967a6df6ccf39ed019ea3d4070b9651b8c951ec2e4254f7ba7050e6b19274cb782a110c40c54222c39ef92094bdd9bf26a23c701ef7dbfeae1cb6db44486f850903eb004184b12fc17a3a40ca12a4358fc779922e8ace00b5cbf470ea3ac3f12df509f7753f9ed976a76bf7e1689c177da6d8a2e0ffb1363f1ab0e64b070314987aa8b56482afd153436d53b2248bb124792e3c9450c0c58350f03c6382f3124d4a8d56a96a566a97cd4abdd5aa990d0263ee3115f194d8d994f481e28ac50edf924b30091045498683e2fa42e3c82f8ce8723876cd7aa1ef2b40d28228c6c5df20e95d31fa0c1fd82982ef1c4b789eaa337563df757e3b8e32fd3ceabae3f67f1052515267c41d8efa53b7339a686e7ef2dedd299413c12948893ac36aa5debc6a9895f7587b5c474defb194c8d1008fd1df31881458018b251edf005cd1b0077b020000",
    ],
    [
      "ETag",
      "gC6WrtLqzxmr/HRYzwEy/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`date`) NOT LIKE ? LIMIT 1",
        types: ["INT64", "DATE"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "DATE" }, parameterValue: {} },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-80-1602380499267",
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
      "30",
      "10fd572cef0b48f4e7a040a78a7534db224a0a490a4208b526b9a486240eb6d35121fef79d9d760cb1b1cffb14fbeedd7b77e797277acf8b98f6e92d4f1f2a90ab0f77e296ee50d02c35d1955c4c7fb892f51e9dcec9b2adc2473d3a1f0c10c14d956279994143894a46a0fad3a0994a51954c0ad140a2c641bbd1e9b5bb1f0fdabb8787ddde3ed629c892312feeb17aa175a9faadd646bb990a9166c04aae9a91c87fc55bcb6eab94e20e22ad5aaf255ba8a25aef8b1e6522629a8b62300db0814a819c41ce78862dbc54c6b79f5f533739cb9b2982973c021645a22ab4690b292251243cada465a5fd276adbfced400367ec1c87e47832f5c2ad39cb4df17c9b3045663309aaca34f9ea4f4ec9bc44ad0553a0e6e4f2bbe33b044352243c83198fe764408ec8d01b11329e5c3afed63c661a90c79b8464ec9e38981dbba76e483ad8550c0943e211d3c8a74d37717d74cd5369501a41eb3dba6f5f8f3e9b2c17926b3381eb858e3f3c0edd0ba75eda185216ad82075c5bc23205886692e5a0419e8a18b0e46c12b8a13bf18663acb09b38db2014ed5f3fbd1484ab124c83da7e8d566fd7ea6f00172cab2c62591f68873e3feffc9d61340c1d44dc20075aa04ed2f3a9e35fd13ae44302128ac816bdb3040bb6897f3a79632bc4a2b1504669bc2bcd2365442209361df2dc0e5057efed77f7da3d6ac152bfc9f5f676cddf57c47fccac352acb0f520ae95b2f992baa29db0b2f70673c3eb74e7cd5e5c33a9483522c35f49e2039d3d1821729513c2d905b02498424495544a6ac369e0d31995639149a989dab3e313b6f92a02a4b2135c42f0498",
      "abed1a84beeb7ddbfeb4be7eb90a9d007f024dae3bfd83ee8d99c74e51bbe3bf9ce0a67e12ebc189673cf8132c3c582b53050000",
    ],
    [
      "ETag",
      "byrhUwIra6xE1Kv0sTxtDQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff1dcfdb7243400000d07fd9e7c8a0d9c6f6cd250c754b10262f46b7cb228b2c12d2e9bf37d3f307e70714189371cca7be251df8006b21a32dde7ef68ab653896035c9cd50e1bb2ed4bb4b431f07a92c83eadad7f76f8b3da8d5aed2c1aebeb06d9e976726326f3d2b22e692cbf4e724868adf17018ad0045798e457db9091cc73a81d4f2952d4aaa2c35cf08b2a095d2cfbf9b4c81e1f5cda61a734fca3a9060c1b1e8581c69c09b5e15dcf98379b094289db85cc5fef5134efd94d748e759c3534a5490c8d792fa5e62c246003c832d49c8c79fd9abd418436e0bf994feb405e578d149c70f0fb07dec0767d05010000",
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
      "Sun, 11 Oct 2020 01:42:52 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-81-1602380499267",
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
      "fd2bc8fbda04f20422456b94d215a9212b21ada66942c65ca85b82293699a22aff7d17d374ed26b55f00fb9e73cfb90f9ec9232f53322309cf9f1aa80f5f1e4442ce08289ae3edd58d95527818957eedde1c566663ee2f878bf91c11bc6549baab0ae849d1d40ce46cbbe9e7b5682a5a0bd1c3443d67d01b4cade1c8b1c6ae3b9cdac8935064d7bc7c44f6bd52959c99e649bb9f0b9117402b2efb4cec5eefcdfdd0ac6af1004c49f3bda4892ad2fc58f46b2118555c94f3ed060d3412ea1876941768e12f334dcedfa7ee73baebe708de73069431d194aab585299828339e37b5ce4a66cf44db7cf34136deb5b78c0c268a6657c625ddc1999152456375a8c0b80cd72bc30f2ed7e16a11f9eb20de2cafbcd5a2bf5c5f6f57c1c6b8bbf242cf50342940738db971ae4f011e503f05a978a9d5a3f6ba557e6990ffff585a024a4be882b16d4de9c0b1dc244b6c9639a349925990244e624fe828b1983b86719a00459e16d52c5a8a327518d85966c7c970c2e2f1c099c6893dc6873b70dd499a4d3367488e67e477cd155c705909c9bb0e91bbd08fbc380ab7c1721179ba848c3685bae88cb505bcf5a8b040047d50d3b18d72814a6dbbfd20f2c2c532f26fbd6ec2d7905376d83ce18c335a484034adb1790aea9548b1612458acbc0b04eb897d3f052599fd7c266dcf5b176f5afe4a8f7080ad5da5df6413857ef04ddb39216e69d168c8befb20155abec7dad0f5f117227149bb2ce466eb853f48771542063594ecf3692258073efdd74e8b8f585c7d94910acfb83b4cb622ac866e87b82ef7853db187aeadff54456b",
      "f56f6c6439e353d7da1c6d46d841a95e2aea161f0bedc41af90ac2208e3fd0dd3afe011afeb71278040000",
    ],
    [
      "ETag",
      "HQ0daej3nIr9QyM/u/vF2A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-81-1602380499267"
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
      "82401085df657a8b09fe1495c40b6cadd2aab58a3736c6ac30201658babb688cf1dd3b4bad6dda26ed0dcc0cdf2ce71c38c24b9c0560c33a8e5e0b1487ab08d5932ea6288b4449bae53c930806a0621191fd7bd92cbcbc1f3c2cead16eb0ab5a9374b1ef748890fe065306f611c218934082fd7c848ca5486b3e4f8a345b959d01ea90ebe1cc9bbae33ef5290f743f9e0f874e77d8839371590c9862ab92ffc7daf264c096afa718a2c0cc47ad25177c8bbe72b54dc9d23cc18ae485f0514209970f22c18b9c09ce2b34a9b4aa95aa65d6ea2db3d16ed7ac268109f7998a7946ec7c46fa4071c59229df934bb00810654986c3f2baa3711c944674e98e3dab51eafb0a90b4304e70f537487a378c3ec307768ee03bc7525e64ea42dd0d1f9ddf8ea34c3f8fba75bcde0f422a4aea8278eea837f39cd14473cbb3f7ee41a19c084e414ad41956cd46ebba6999efb1de701d35bdc756a240037c467fc7205660872c91787a03ded3e0ce7b020000",
    ],
    [
      "ETag",
      "GJs7uTpGdKZ3gvHv16PmZw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`stamp`) NOT LIKE ? LIMIT 1",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-82-1602380499267",
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
      "000000000002ffd5535f4fdb3010ff2a56f602126d6981523a55aca3d988d62690a43084506b924b6a48e2d4762a5588efbeb3d3c2101b7bde5392bbdf3f9f2f4fd6232b62ab6fddb3745981587f7ae0f7d69e058aa65875aff2901f95abe562b44e7bdeb9eb1efd64978301229866499a97193424af4404b23f0d9aa9e0554905e70d146af43a8d7677bf73d0db3f3c39e9748f9127214bc6ac7844f642a952f65badad7733e53ccd80964c36239ebfd45bab4eab14fc0122255b6f2d5be8225b1f9b9e663ca28af162300d30402541cc20a72cc308afccf8fecb5be926a3793345f08a4540a3885785d2b15022e245c2d24a1855abff649998bfbd58813db6cf4272e64ddd70674e734d9eef122ac96c2640569922df7c6f42e6257a2da8043927d7e7b66f132c099eb00c662c9e93013925437744c8d8bbb6fd9db9549811855c2f2463e7878dedb1337142d2c658312414954754a1a0d271e2fad5d177a5402a046d06e9bcbf3eeb597719174ce923386e68fbc3b3d0b9b2eba98d21a5d13a58e2dc129a4940341534070562c26340ca851738a1e3b9c33132cc282eb60869f56f9f5e09e1ba041d5099a7f6ea1e1aff2de08a669541acea17ab6d3d3feffd5d21742676100e271708bb43215c841a615d4e6dffc6aa4b3e2420a0880cf3834918b069fc739fb7cb85585c2fb4c12b524c2a16496d120930ed90e5e61435fbe8f8a0d73bb00c58a877bd93c3aefe078bf88f9d8d4765f441082e7cb351fa13dda4c9c20a1c1c8b2fcd3ebe49b9dc94729092a65adee524a72a5ab0222592a5056a0b20091724a98a48d3eaf533252ad22a8742113d78d9272f836f92a02a4b2e14c4af2a08a83737087dc7fdbefb79f3f9f526b403fc1f14b96df77b9d3b7d2873947a4ffedf63dcd597a3f38c3cd7c66dfc05fe96c1c663050000",
    ],
    [
      "ETag",
      "NVmTo5pvqhDyg8OHNN5XiQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff1dcfdb7243400000d07fd9e7c8ec7649e91bad4bdd8aa078312e9bd286750f32fdf7667afee0dc415614641cd389fe9016bc802d7b128ec5d1a0bcc48a17bc97fa7bec2e1d962295b7fbc8306f721fa8ba1eee95c39d34ebc661663092de6da9645e153b8f53ed0ac3af8a15c7adb59e7b58c2d779617cd450ec94a279563e11b213d830fdfa2d146a1da92d42bbfe21a7deb9d8e0c47ba6010767cbd5311a3b5779631bdd0d2505c5d6092739d4c240f1bbc02c381e6b3bc561255c1a93b3e9203b33efafa2eecd52bf50700064edea818c69fd98614e100ee0bf994e5b471e5789640319c0ef1fe1f83ad805010000",
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
      "Sun, 11 Oct 2020 01:42:54 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-83-1602380499267",
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
      "000002ff85535d6f9b3014fd2bc87b6d1292400291a2354ac88a96900d48ab6a9a903186ba259862932cabf2df77314dd7aa52fb84ed7bce3de77ef0841e5891a0098a59f658d3eaf8e59ec7e80251893378fd3b3497df978760e11e92fccfe860677c7f7b984e01c11a96c0bb32a71dc1eb8a5031d906ddace275892bce3b90a8630d3bfd913e185aba61db83d1187882e6e98a150fc0be93b214935eefacddcd38cf728a4b26ba84ef5ede7bfb41afacf83d2552f4de4af64045f43e16fd9a738225e3c5741b80815ad02aa23bcc72b0f09f99c4976f537719de753300ef19a198105e17b2b10529082f5296d595ca8a264f48d97c754081b372e6a146785eef8aa8c03b7aa12558e2481e4baa2dfdcd5a73bde5c65fcf4277e345c1fcca59cfbaf3cd6abbf602ede6caf11d4de238a78aab4db54b75f3e002fa091592154a3d6c9e1be5e706b9efc7d210405ad036188df511ee5bba1da7f198a4d6d08c539dc6b1158f4d3c8c75621bd448628a81a744150b17bce8e3948c478619197d538f0c6aa791d5b7ed683448d3241e8c4c7380d1e9021d2a26e98289920bd67608ddf86ee844a1bff5e6b3d05125a4b8cee5a235d614f0daa3840201f4414da726ca382835ed76bdd0f167f3d0bd76da09af6886c931788419a7381714d0b882e6495aad79020d43de6ced2c00ac26f6e31c1468f2eb09353d6f5cbc6af90b3d84013676a5faa220f45def9bb273465ce3bc56907d7b402558be83dac0f5e937206149db2ce8e7d6f16f51fbe4d39456b4209f4f13c02af0e9bf765e7cc0c2ea838c907087dd21a21121156d7788a9729fd9e6d8185843a4c0957c1733fafab96b4d8e2623ddd1423e57d42e3e14da8ad5e205044118bfa7ba75fa07835b1c2a78040000",
    ],
    [
      "ETag",
      "z35FKFwSDIwdlx6w9govYw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-83-1602380499267"
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
      "ff8d925b6f82401085ffcbf415136f4525f141ab6d6df0869834698c5961402cb0b8bbd850e37fef2cb5b6699bb42f30337cb39c73e008cf51ea83059b28dce7288aab10d55c170eca3c56926e194f258201a85848e4f6f0900ca783fdfcb15348e98476f03a9b85dd2e11d2db62c2c03a421061ec4bb09e8e90b20469cde3719ea4ebb2334015991e2e5c6734b9a33ee1beee274bdbeef5ed219c8ccba2cf145b97fc3fd6562703767ce3608002530fb5964cf01d7a6aa46d4a9664315624cf8587124ab87c100a9e674c705ea149a5dda8d4cc6abdd1ae363b9dbad92230e61e53114f895d2e481f28ae58ecf01772092601a22cc970505e0f348efcd2882e4713d76c96fabe02242d88625cff0d92de2da3cff0819d23f8ceb184e7a9ba50b7f6b4f7db7194e9e751839e3bfc414845495d1077341e2edcde78a6b9d5d97bbf502867825390127586b56ab37ddd32abefb1de701d35bdc7522247033c467fc77da4c00a582cf1f40692e98f477b020000",
    ],
    [
      "ETag",
      "hvJmEODqQX9yssRgLfzPPg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`amount`) NOT LIKE ? LIMIT 1",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "%1.54%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-84-1602380499267",
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
      "53",
      "5b4fdb3014fe2b9627c426f5424b2950a96205c2c8169aae4d4168428d9b9c064312a7b6d30921fefb8e1dca456cf0b8a7d83ee7bbf8f3c93dbde5794c7b74ce936509f2eed38d98d31a05cd123cedba87cb9bd3e9f9b7edd6e8fb6411f16095b9bffb7dece006a55856a45057a29411a8de74d248a4280b2685a823517daf536f75b7dadb7b5b9dfdfd767717710ad285c7f35b445f6b5da85eb3b9d66e24422429b082ab4624b2a7f3e6aadd2ca4b88148abe66bc926aaa8e6fba207a98898e622ef4f2768a054206790319ea28567643cfffa9abac159d648b079c523605124ca5c1b5b4811897cc193525a56dabba7d6e68b059d389e731490237f3a0c3e872c33e0f00b618acc661254996a7232f6cf4858a0d63553a0427271ea8c1d8247522c780a331e87a44f0ec860784c88e75f38e3174c433f209efbc3c1bae79eb90169a1af18160ca98f9946466dfcc4d5d2358fa541696c7a4cd27dfb7ef4c154b9905c9b3bb8c3c0190f8e02f7dca962f32061d1dd6489c12d58aa00bb9964196890672206848cfc891bb8fe70e021c266315a7728dafb75ff0c08ee0a3006b5fd1aad6ec7eaaf1bce595ada8e55b5a02dfaf050fb37c389e70f3ee4d86835763a1b4874856d382b1507fd3975c697b43a1ac30224e491c5bd93956db6850f477e3d7fd88b1388324ae35e691e29231249b0e58067f69e157a6777a7d56a53db2cf5dbdaf696f94df3f8af95478dd2f28394428eedd0992daa29eb85e7180bfec6359a81522c3134d31c6fa280cd5320f6fdc85398240c09cf89899b84c1e5c8993d461ed6c8218b492c4a83b251f74895f47ab7596d378d316ba79a86ff6be5aa0ac9681dfb4307a7e20fbedbb88a0e050000",
    ],
    [
      "ETag",
      "6IBqjHUVG31PJSfciTvmIw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb64ad0e4502a4bb428b0ce12ba8e0261335fc0b4a028a9ddebd4edf0dde0fa0e733e39c88be611d78073395d1eabcc2bd6e281fb966c6dca9d16d7da1619dea9f507854b3f8d60cf79b59fff2b5d390e0d819e35850e359a4c256e8940f6a87e149ee7cc773df2e444fa4e7c1c6de6e8370ab751dc9483fcd8f0c63d7f5fc6813a40573f9d209eedfad92adcbda2ce13e2ac69d6f596d7753a1a4ce42bfde12121d532c31bb92f2c826eea90ec7e5c53a945b214f47a88e7aa335c233104a0201776001d8e35a0d8c93ea355b438416e0bf49c47c65afabc1e8c006f0fb07279daa2b05010000",
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
      "Sun, 11 Oct 2020 01:42:55 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-85-1602380499267",
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
      "5d6f9b3014fd2bc87b6d1202212491a2354ae98616c84648ab699a906d0c750b9862d3aaadf2df77314dd7aa52fb84ed7bce3de77ef0846e7895a205223cbf6d59f3f0e55a10748298c239bc3ad6ad1d091a3a8f65715f843fa641f878912f9780e01d4be2b22ed8408ab6a14c2ef6bb61de88b6c68d10034834983983f1d4b4ec993999cfada90b3cc98a6cc3ab1b605f2955cbc56874d41ee642e405c33597432aca97f7d19d35aa1b71cda892a3b792235091a38f45bf168262c545b5dcefc0402b5993b012f3022cfc67a6e4f46dea21c7e53007f01da70c532ada4a75b620051555c6f3b6d159d1e209699baf0e68e76dbc756c5051b4659554b86427468a154ed443cd8cf3681b187e78be8d8255ec6fc364b7feee05abe17abbd907e1ceb8fcee459ea1302998e61a4be354df42b8807ecaa4e295568fbbe74ef9b941fefbb174049096ac0f26ae39c5e399392719716936b31d92998c9019711d6c1393ce276c92128681a745350b57a29a98f638b5529298f674924cc663929099e52494b8ae6d8d530619d1e104dd375cb1332e6b2179df217419f9b197c4d13e5caf624f9790e1b65067bdb1ae80d71e151408a00f6a3a74512e40a96bb71fc65eb45ac7fe85d74f78c3724c1f76b730e30c1792011a37d03cc59a40a4d03014ae02ef0cc07a623f8f4189167f9e50d7f3cec5ab96bfd06318606757e92fdac5911f7ed3768e880b5cb41a72d71f500d96afa036707df80b4858d23e0bfab5f7a2dfa87f8a58c61a56d1cfa709601df8f45f3b2e3e6061f541462ab8c3ee50d989d086f53bc475b9cf6cc7751c6b8634b851ef62ae631ebbd6e5e832b29255eab9a27ef1a1d05eac952f2008c2f843ddadc33fcc886fa578040000",
    ],
    [
      "ETag",
      "52q3RocN5zmlwlNK6MNzVg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-85-1602380499267"
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
      "6e82401085df657a0b895a4525f1025b5a6dfc45bc681a635618100b2cdd5d6a8cf1dd3b4bad6dda26ed0dcc0cdf2ce71c38c273928760c326895f4a1487ab18d55c171eca3255926e05cf258201a8584ce4d26151d379746f5d3698b365e7619ae5d9bed72342065bcc18d84788124c4309f6d311729621ad053c2db37c5d7506a843a1870bdf1b4eeea9cf78a8fbc9723472fa23174ec66531648aad2bfe1f6bab93013bbef130428179805a4b21f80e0335d43625cb8a144dc94b11a0840aae1ec4829705139c9b34313b2db36ed51ad79d5ab3db6d586d02531e3095f05c27b0207da0b862a9c7f7e4122c02445592e1a8babed238092b23ba1c4e7cab59e9fb0a90b4284971fd37487ab78c3ec307768ee03bc7325ee6ea42dd8da6ce6fc751a69f47dd3abefb83908a92ba20fe70ec2e7c673cd3dceaecbd7f502867825390127586f55ab3d36a5bb5f7586fb88e9ade632b51a20101a3bf639028b023964a3cbd011dd224747b020000",
    ],
    [
      "ETag",
      "UAaf4AYEDEaHQaU8JOmnmw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `id` = ? LIMIT 1",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-86-1602380499267",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffa5535b6f9b3014fe2bc87bd9a42610126e91a22e4ad9c696262d21ada6694a6c63a853c0149b4e5195ffbe03346bab4aedc39e30e77c9773b11fd02d2f62344684a77735abf61f7682a013c4144e21ea467497fcb0bdfdd28bccefe1cd6a77abf4cbc90410bc61499c9719eb49515794c9f17ad54f2b5197b812a207423dd7ee0d6cc31cbac6c8f34cdb019e645932e7c52db06f942ae558d78fdefd54883463b8e4b24f45fe2faedf9b7a59891da34aea2f2d757091fadba6a799a05871514cd62b28a096acdab01cf30c4a7862c6e4f34be93ec7793f05f03da70c532aea42356581041545c2d3ba6a55d1f801b5653e3ba0953ff76791365bae17d1c72dce1bf2f69386a5b6d9544cd699d2be84cb736d5b82d70d964c6eb5eb6f7ee86b10aa44c233b6e1f1569b68a7da747106d1e3df3c380f226d0055c44c2a5eb435449864acf17f1c53f07a390d012b70ea921bc7b0f1c0353c92108726eed02289c108718963e12131a83762a398300c3cd5a8b72c5c40e784c46e629a7162310f54e88858461cc756ec9a164d88eb0c49e218093a9ca03f1557ec8ccb5248decd0a5d8741e46fa270bd984d23bf6d23c1308fb3aeb8a689e7752a6812406ff47568b25c805333f86011f9e1741605577eb7eb394b31ddafee60db09ce240334ae70ce14abce450c434317cb551005cbc5740e8c768117478444e35f0f4f84685fb65356edb7f1b247adff117085b3ba45dc7707344087c3c9ff295820f11b2070b53b36ba5cfbe14fd4854296b08a15f4fded03b84dbcfb428fcf05b0f060c0462af887bb466563422bd6dd399eb7f5756ccbb12d73845a70a55ee5eca1771c6ea3d128b29c15eab1a3eeb934b36a53b5fc0782245c9545b0f80ad9bfa116bdd0ae040000",
    ],
    [
      "ETag",
      "8TcjfK69yO9T2JRhSjkt/Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-86-1602380499267"
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
      "41",
      "6f",
      "82",
      "40",
      "10",
      "85",
      "ff",
      "cbf45848505baa241eb421d6c69816eba58d310b0c880586ee0e6d2ce1bf77167bd9997dfbedbc97e9e0b3a85308202ef2af16f5e526477eb54d84a62dd94869a836080e20ab5cc8b13e9949bc6baa75fefeccab7bff771add2ee673214c72c24a41d0415660991a083e3aa85585f2ed78d4c344c1f8d25865bd7d0b5761244245a915b6fbcd66b1dc84d01f7a07ce144798a1c63a413bb2d174c684d736ad515553a26ba8d5091a18e0e121d7d4364a13b9a2b853df1df9de7832f5ee66b3b1ff20604989e2826a61f73b101b265665443f12164602e8a195dcd9707e0fb2043afca3cb0ba379d124be06ada577b57f241b89252aeb161d48942ce3a9e0ebbdff03a197b41569010000",
    ],
    [
      "ETag",
      "2rhs3bSpmIgZJtG56z8R+A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff1dcfd97282301400d07fc9b33a906895be41952a5a56b7fa7227c48b254c30108b4ba7ff5ea7e70fce0fe142a03170395758935772e7d41988c1f23cf186ae50cd509610e0e6db9fa935aec2435ad332ca29e3081d6ab6762d8877520d8309b39358ea5972f49a5547e3b1a1e09c16db83d72f680e3c3acca10fa1786f7c35a6b27999b2962bdd2d7615ece828d8345f7a19ecc3faa33f5a16e1494a5b4935cd5cbc4e1fd7a8c3ed5b923e9c2ce401f870ccecda94793ae734698b39b34c15733bb5f6ccfdec72298aa8223d82375db668a07cced8c8717ae4bf0997bbc6e7d543de624b7eff00d456236405010000",
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
      "Sun, 11 Oct 2020 01:42:57 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-87-1602380499267",
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
      "02ff85535d4fa34014fd2b64f6d5164a694b9b346bb7a292b474a554b3d96cc8305c709432c80c6e8ce97fdfcb605d8d893e3133f79c7bcefde099dcf332253392f0fca181fae9db9d48c8090145737cbdb8dee43fac4a987c67676e7979eef25bff6a3e47046f5992eeab027a5234350339db6dfb792d9a8ad642f43051cf9df40663cb1eba96339ddae309f22414d98a97f7c8be55aa9233d33c6af77321f20268c5659f89fdebbbf9689b552dee802969be973451459a9f8b7e2f04a38a8b72bedba28146421dc39ef2022dfc67a6c9e9fbd47d4ef7fd1cc18f9c01654c34a56a6d610a26ca8ce74dadb392d933d136df1cc8d65b79cbc860a268f6655cd23d9c18295534564f1518e7e1666df8c1f9265c2f227f13c4dbe5a5b75ef4979bd56e1d6c8d9b4b2ff40c45930234d7981ba7fa16e005f553908a975a3d6a9f5be59706f91fc7d212505a42178c27d6980e5c6b9a64c98465ee7094641624899b4c467498586cea8093264091a745358b96a2b4a6f6c80687c52e58c3d871591227835116bb2c4b9dd1381d529b92c309f95b7305675c5642f2ae43e426f4232f8ec25db05c449e2e21a34da1ce3a636d016f3d2a2c10419fd47468a35ca052db6e3f88bc70b18cfc6baf9bf00a72ca9eb60f38e38c1612104d6b6c9e827a2d526c1809166bef0cc17a623f8f414966bf9f49dbf3d6c59b96bfd2231c606b57e92fd946a11f5c683b47c4352d1a0d79ec0ea442cbb7581bba3efc41242e6997855cedbcf017e99e42c8a086927d3d4d04ebc097ffda71f1118bab8f3252e11d7787c95684d5d0ed10d7e5beb04793c9c0b18806d7ea43cc76ec63d7da1c6d46d843a95e2aea161f0bedc41af90ac2208e3fd0dd3afc03bf73dd8f78040000",
    ],
    [
      "ETag",
      "GVOgB0po/iU2f8nHF8ihIQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-87-1602380499267"
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
      "53824010c6ff97ed3198413354667cd0b2c25153c0a7c6714e5814058eee8eca1cfff7f6c8aca966ea057697df1edff7c11eb6491e8103cb64f558a2d89dad504d75e1a12c5325e956f05c2218808aad88942f5e6be2bfb22b1cc4b3413bb0ead9f976dae91021c335660c9c3dc409a69104e7610f39cb90d6429e9659bea83a03d4aed0433ff0dcf12df5198f743f9e0d87dddeb00f07e3b41831c51615ff8fb5f9c1800d5f7a18a3c03c44ada5107c83a172b54dc9b2224553f2528428a182ab072bc1cb8209ce4d9a98ada659b3adfa45cb6ab4db75bb4960ca43a6129e133bf3491f28ae58eaf16772093601a22ac9705c5d9f689c4495115dbae3c06e54fabe02242d4e525cfc0d92de35a3cff0811d23f8ceb18c97b93a5137c3fbee6fc751a69f475d7783fe0f422a4aea8404eea8ef07ddd14473f3a3f7de4ea19c084e414ad419d6ac46ebb2695befb15e711d35bdc751a2440342467fc75da2c089592af1f006723bab967b020000",
    ],
    [
      "ETag",
      "sxR8PSzaCeJfUJ9T02m+kQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` = ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-88-1602380499267",
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
      "ff85536d6f9b3010fe2bc8fbb2494d42425e2052d44529db90d22423a4dd344d893107750b98d8a65b55e5bfef80a62f9bd67ec2dc3d2f77e7f33db9e17944c624e4c9be0479f7ee5a84e48480a60946fbe18d95c066f41bbecd972bbe5f89202f92c90411bc62299a1529b49428250335deacdb89146541a5102d146ad976ab3b347b966df61da7371c214f411acf797e83ec2bad0b35ee748edeed448824055a70d566227b8c776e7b9d428a6b605a755e5a76d045755e373d4d05a39a8b7cb2596301a502b9858cf2144b786246e1c797d26d4eb37682e05bce803226ca5c5765a1041379cc9352d6aa647c4fea329f1dc8da9dbbb3c0982d378be0fd8e661579f7c1a0cad86e25a832d5c6277f796eec0af4baa20ad4ceb8fce2faae812129629ec296473b63629c1ad3c599f1046c6273efdc0b8c2ed61281d23caf2b0968984255c5c3b0bc7fafa822508d324d723b3287b46b9b4e18872316dbd6208c4d08433b1c0da8159acce9433f0a81224f57ea358be622b7e2816d9a56cf19f4a1e75006ccea47161d44cc841e38d61022ea303b228713f24b720d675c1542f16662e4d2f702771bf89bc56c1ab8751b31c5a99c35c5554d3caf536393087aa5af4395e5029daaf17b8bc0f5a7b3c0bb709b1b9f4342d9dd7a8f771ed35401a2a9a4196890e722c2a191d572ed05de72319d23a3bec6d511a1c8f8c7fd1321b82bea29ebfa5b790dfbb5ff117041d3b246dc3607d22587c3c9ff15d681ef2d3ebf2e312db05b94f989285cf246817cddb8fe77d2847c884142cedede0004d78937dfeaf1e120169f0eda288dffb86f4c55264c42b3773cabbb6cd883d1c819daa4064bfd77ce36edc171c09546a50819e4faa1a3e6e154f3aa53a57a046112d765514feaf007b043f3b5b8040000",
    ],
    [
      "ETag",
      "4bk3geU7xeXLOPiqPoTnpg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-88-1602380499267"
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
      "0002ff2d90414f83401085ffcb782db145454ad283354489b5516abd98a6d9c240a9c0e0ee2021a4ffdd59ea6567f6edb7f35e6680efa24e21804391ffb4a8fbab1cf9dd36319ab66423a5a1da204c0059e54212772fd77cfc8cbcd073738af45dc8afdd622184498e58290806c80a2c5303c1d700b5aa50beedf77a9c2818f78d55a2f547f814c62254945a61bd5dad1e96ab10cebbf3044e748831438d75827664a3e984094736ad515553a263a8d5091a18e1f121d7d4364a1339a238beefccbca97be34f6fe773d7bb17b0a4447141b5b0db0d880d13ab32a64ec2c24c003db6923b1bcf5f915d1b68f78f2e7b46f3a6497c0d5acbe9c5fe916c2496a8ac5b9c40a26419cf055feee73f905c0c2469010000",
    ],
    [
      "ETag",
      "otwK/thVI6E62goIr5EtMw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "db",
      "6e",
      "82300000d07fe9b318a6adc0de208a4cb0a20323be10ec2a965bb12d116bf6ef333b7f705ea020844a992b5ed30e7c82673173a6641a72db83eef52c498ea1c4c6c36d89ae752c5647cec837f7e300b72b74584ab287281bd0cf585a5d75f1b6559699a7991f0d96896096c850c313694d2389a05bb6587b4a5c2c1ae35ecda385312eb7dc5fd7ecb6d7c9b06b2a55239d6cae87fbaef32d1444edbef46e212b53219b825a6384ec58a8280c46a15296d9047f89fab1361aee761ff763bd3857b9de4822680a26808e3d1354e6ec3d9b23c79980ff66ae9e3d7d5f3d5a082ac0ef1f1dee729405010000",
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
      "Sun, 11 Oct 2020 01:42:58 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-89-1602380499267",
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
      "4014fd2b64f6b52a2a2a9898ad51dc9a28b6806d369b0d19c60b9d1619ca0c36a6f1bfef65a8dd364dda2766e69e73cfb91fbc90479eefc898c43c7daaa03cfe781031b920a0688aaf73ffbefb701d2f922abc3b5c558ba35c3f7bd3c90411bc6649ba2f32684951950ce4781bb4d35254052d856861a296edb4ba43b3d7b74dcb717ac311f22464c98ae78fc8be57aa90e34ee7acdd4e854833a005976d26f66fef9d43af5394e20198929d8f921d54919daf457f668251c5453ed90668a0925046b0a73c430bff99bbf8f263ea36a7fb768ae0036740191355ae6a5b9882893ce16955eaac64fc42b4cd770712b82b77161a4c64d53e8f72ba870b6347158dd4b10063e16fd6c6d25b6cfcf5345c6ebc28985db9eb697bb6596dd75e60dc5db9be6b281a67a0b9c6c4b8d4370f2fa8bf03a978aed5c3fab9567e6dd0f2f3586a024a4b6882d1c81cd2ae6d3a71128f5862f7077162421cdbf16840fbb1c91c0bac5d0c14795a54b3682e728bf5e3eed0e945a665b1c83213889c813d882cbb67f64dd349863690d305792eb98239978590bce910b9f397a11b85fed69b4d43579790d02a53f3c6585dc07b8f0a0b44d017359dea2817a854b77be985ae3f9d85cb5bb799f00a52ca8ec113ce38a1990444d3129ba7a05c8b1d368c78d3b53b47b09ed8f53928c9f8cf0ba97b5ebb78d7f2377a8803aced2afd2541e82fbd5fdace19714bb34a430ecd811468f91e6b43d7a7bf88c4256db2909badebff26cd930f099490b3efa789601df8f65f3b2f3e6271f551462abce3ee30598bb0129a1de2badc57f660640f9d21d1e0527d8ad9bdfeb96b758e3a23ec2157af15358b8f853662957c036110c7",
      "efe96e9dfe01c3001e0878040000",
    ],
    [
      "ETag",
      "DRh1jPbFfuTWvHuFysMwNA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-89-1602380499267"
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
      "000002ff8d92414fc2401085ffcb782d49512cd0844351d4260511ca4543c8d24e4b61db2dbb5b0c21fc77672ba25113bdb433d36fb6efbdf6009bac88c18565966e2b94fb8b14f5932926a82aae15dd4a5128040b50b39448adf8e6799be1ba33f537bbfe32196d82d0ebf58850d10a7306ee01920c79acc07d3940c172a4b548f02a2f16756781de9766380d27fee89efa5cc4a61fcd82c0eb0703385ae7c59869b6a8f97faccd8f16acc57282094a2c22345a4a29d61869dfd8542c2f393694a864840a6ab87e904a51954c0ad1a049a3d36d341dfbf2aa63b7badd4ba74d201711d39928889d4d491f68a1199f885772090e01b22ec970525f7734cee2da8829fd51e8b46a7d5f019296641c177f83a477c5e8337c60a708be732c1755a1cfd45df0e8fd761c65fa79d4ad170e7e104a53526724f4878369e80dc7869b9fbcf7f71ad5580a0a52a1c9b069b73ad76dc77e8ff54698a8e93dae96155a1031fa3b1e320d6ec2b8c2e31b3fd9d3897b020000",
    ],
    [
      "ETag",
      "tslkZqiej8SIkvBbfNkLTA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` = ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-90-1602380499267",
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
      "6f",
      "9b",
      "30",
      "10",
      "ff",
      "57",
      "90",
      "f7",
      "65539b40de2452d44529ddd0f2e80869374d5362cc41dd02a6b6495555f9df7740d387aab5e20370f77bdc9dcf0fe4866721199180c7b705c8fb4fd72220c704348d31ca8bd9529ea9a3ae394997f39dbd3cfa71f72b1e8f11c14b96a2699e404389423250a3f5aa194b51e4540ad140a1c6d06ab4fa56bb635bdde1b0dd1f204f4112cd787683ec2bad733532cd83773316224e80e65c3599489fe2e6ae6de6525c03d3ca7c6d69a28b32df373d4904a39a8b6cbc5e61018502b98194f2044b786686c1d7d7d24d4ed3668ce01d6740191345a6cbb25082892ce271212b55327a2055992f3ec8ca993953df982ed70bfff396a62579fbc5a0cad86c24a822d1c699b79c1bdb1cbdaea802b5352ebf3b9e6360488a8827b0e1e1d6181b27c664716a3c03ebd8cc9dbbbed1c25a42509a6755253e0d1228ab781c96fbf6884a02d52853273703ab4f5bb6350ca260c022bbd30b220b82c00e063dda092c36ec42370c80224f97ea158b6622a36127ecb4bb03da0dad6168339b0d3ac1d0867687592d1b829665838d59b23f2677926b38e52a178ad71323979eeb3b1bdf5b2fa613dfa9da88284ee5b42eae6ce2659d1a9b44d03b7dedcb2c17e8548edf5df88e3799faee85539ff80c62caee57b778e6114d14209a4a9a82063917210e8d9c2f57aeef2e17931932aa633c3f201419fd797826f8f77935655dbd4baf7ed5e613e082264585d8d51fa445f6fbe3ff2bac7ccf5d7c7b5f82",
      "e6d82dcafc45142e79ad407eae1def37a9431e442021631f6f0082abc48777f57071108b57076d94c67fdc37a64a1326a1de3b9e565dd6ecde60d86ff5480596fa4d0e9fc3804b8d521152c8f46347f5c529e755a50af504c224aecba29ad4fe1fdaac0f42b8040000",
    ],
    [
      "ETag",
      "iuLOrFs+4/AmOMv8O+KwXg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:42:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-90-1602380499267"
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
      "02ff2d90414fc2401085ffcb7884260515a5090750a224046d152f8690a59dd662db5976a79a4afadf9d5dbdeccebef966decb9ee1b36c3288e05016a7164d775120c7ae48d0b6155bb93435166108c8aa10321ff07558d962f576afe7d993fee9e2d3209ecd84b0e907d60aa233e425569985e8fd0c8daa51c6f67be3370ac69d76ca6af3ba7c582622d4943961b35dafe78bf512fa5d3f84231d12ccd16093a25ba90d1d31e5954b6b55ad2b0c2cb526450b1ef68dc250ab95210a4409a661309a84e3cbdbf06a3a1d4f6e04ac28555c5223ecf605c486895595d0b784859100c697923bf7e797c8a10bb4fb47171da37d3624be1633dff5f677e422b14465d3e21052259ff158f2dfbbff0516587c9969010000",
    ],
    [
      "ETag",
      "f+t50lsgIVDpAdOpzyQq+Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "db",
      "6e",
      "82",
      "300000d07fe9b333c02893bd81462e869b4023bc90060ac86596960175d9bfcfecfcc1f901b82c09e7c5fce8c917f804022bfabedc5f1e0753356a575b9524521741206238e906d270cfabaecef32c8e136f431405b71af7ada2d8e7a58db2584bf8733cf13eb7672d9fb32184d38764e6f946e34c6c70d6341af3ce1f9734ac1d1b79064da1d05427570dc47499d29a1da5a671d62b8b74c9957d713ad0a48bded0a877eedcd937470925981749675a4555597e386c7e5b227c116b5239d634a5b2117c0725d801b2d13b23bcb8bf66ef50d777e0bf59cc8292d7d5249811067eff00dbb9abb505010000",
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
      "Sun, 11 Oct 2020 01:43:00 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-91-1602380499267",
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
      "9b3014fd2bc8fbda243425e421456b94d21529211b9046d53421db18ea1630c5a65b56e5bfefda345dab4aed276cdf73ee39f7c113bae7558a6688f0fca165cdfecb9d20e8043185737815f7f61f7c13f2c9657df5772f475bb52b768bf91c105cb3242eeb82f5a4681bcae46c1bf5f346b4356e84e841a2def4b477eadac3b389ed4ca743770c3cc98a6cc5ab7b60df2a55cbd96070d4eee742e405c335977d2aca97f7c1e3705037e28e5125076f2507a022071f8b7e2d04c58a8b6abe8dc0402b5993b012f3022cfc67a6e4fc6dea3ec7653f07f023a70c532ada4a695b90828a2ae379db98ac68f6848ccd570714792b6f195b54146d5925152ed98995628513b5af9975196ed6961f5c6ec2f522f63741122dafbcf5a2bfdcacb6eb20b276575ee8590a938219ae35b7cecd2d800be8a74c2a5e19f5583f6be5e706f9efc7a209202d59174cc6b68b4f27f69464644cb3c9d9886436236442c6237c466c3a75989312868167440d0b57a21aa6a99b39639ce021711387e22c9962ea2484d88e033c77ec12743841bf1baed80597b590bceb10da857eec2571b80d968bd8332564b82dd445674c17f0daa3820201f4414d071de5029474bbfd20f6c2c532f6afbd6ec22b9663ba8f1e60c6192e2403346ea0798a356b9142c350b0587b17003613fb7e0c4a34fbf98474cfb58b572d7fa1c730406d57992f8ae2d00fbe193b47c4352e5a0379ec0ea806cbb7501bb83efc02242c699705fdd87ae10dea9e4296b18655f4f36902d8043efdd78e8b0f58587d90910aeeb03b546a11dab06e87b829f7993d82048ef953156ed4bb986bdbc7aee91c3a232b59a59e2bea161f0aedc45af90282208c3f30dd3afc032ab49e",
      "2a78040000",
    ],
    [
      "ETag",
      "ok0xaYRi8FpHzys5UtWlWA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-91-1602380499267"
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
      "4f83401085ffcbf8284d7a9316923ea056ade9cd169f4cd3ac3050da85c5dda5159bfe776751ab51137d8199e19be59c037bd82459082e3c26f15381b23c8951df996286aae05ad12d179942b000358b89dcb66c6777bb9ef48bc0e39b489f3acf2f65dceb11a18215a60cdc3d4409f25081fbb0878ca5486b81e0459a2dabce025de66638f76783f135f5a9084d3fbe1f0ebdf3611f0ed67131649a2d2bfe1f6b8b83056bf138c3082566011a2db9146b0cf4c0d8542ccd39d6942864800a2ab87a104b51e44c0a51a349cd69d41a76bdd9ead6db8ed3b43b047211309d888cd8fb39e9032d34e333b12397601320ab920c47d5754be324ac8c987230f6ed76a5ef2b40d2a284e3f26f90f4ae187d860fec3d82ef1c4b4591e92375359c78bf1d47997e1e75e9f9fd1f84d294d411f107a3fedcf74653c32ddebd9f971ad5540a0a52a1c9b0516f77cf3a76fd2dd60b61a2a6f7b85a166841c0e8efb84934b811e30a0faf7e4011d77b020000",
    ],
    [
      "ETag",
      "v369wJjOEucAlkft+9xzyg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `date` = ? LIMIT 1",
        types: ["INT64", "DATE"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-92-1602380499267",
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
      "85536d6f9b3010fe2bc8fbb2494d0221212152d46509db90f2d211d26a9ba6c43607750b38c5a65d55e5bfef80beaa5afb0973f7bcdc9dcf77e452e41119112692ab128adb0f17929123029a26181daebefce28be0bbb8f86bab9b75e8f4a59a27e3312244c55234dba7d052b22c38a8d166dd4e0a59ee6921650b855a6eb7653966d71e9a3dd7ed3a03e42948e3b9c82f917daef55e8d3a9d07ef7622659202dd0bd5e6327b8c77aebb9d7d212f806bd57969d94117d579dbf438959c6a21f3f1668d05940a8a2d6454a458c21333629f5f4ab705cdda0982af0507cab92c735d9585125ce6b148caa25625a33b5297f9ec40d6dedc9b86c674b559861f7734abc8bb4f0655c6765b802a536d7c0d560b63b747af73aa40ed8cb3ef5ee019182a642c52d88a68678c8d6363b29c6134a21a9affb9bff043c3c23a22505ae475152165295415dc0fca7f7d3d15816af46a92db81e9506b68ba2c66031e0fed3e8b4d606cc8067d6a3393bb3de8450c28f274a55eb3682e73d7a68cda118d2d33662ea343d76103338efa5db04ca0fdd88a1cd3e69c1c8ec84d2134cc84da4b259a6991b3c00fbd6d186c96d349e8d56dc41427326b8aab9a785ea7c62611f4465f872a2b243a55a3f797a1174ca6a17fea35b73d8784f2dbf515de774c530588a605cd4043b190110e8d9cacd67ee8af96933932ea2b3c79402832fa7df744086ff7f59475fdadbc9c5eedff0038a5695923ae9b03b1c8e170f47f855935823705ba66d76c99b8d37d54fa8350dcf14684fcd878c14fd2840288a1809cbfbf0408ae13ef3ed5877783587c3968a334fee3ca715599f0029ad51359dd68c3ee0f2dbbe7901a5ce857b95e9d7b7c2f95226490ebfb8e9a77538dac4e95ea118449dc98a5bffc86d97fd6b6522eb7040000",
    ],
    [
      "ETag",
      "8OBZcMRHijx3swST65osLg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-92-1602380499267"
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
      "41",
      "6f",
      "82",
      "40",
      "10",
      "85",
      "ffcbf40a29d2c60a8987da906a2446693db48d312b0c08050677170d21fcf7ce622f3bb36fbf9df7323dfce675023e9cf2ecd2a2ec1e32d43bd344a8da522b2e0dd50ac102d42263f27b4bf9ee5a3c8a7553ae97de6576feeaeadb7cce848acf5809f07b48732c1305fe4f0fb5a890bf1d8f729cc898ee1aa3ac369fc17b10b150516284cd3e0c5f176100c361b0a0a05384294aac6334231b4905c67a65d22a513525da8a5a19a382111e1f32496d232491cd8aedb9f664eab84f33e7d9f3dce90b8325c542e75433bbff00b6d1a44519d18dc3c2840139b69c3b1dcfeb2873a0c33fbae834aaad24f655682c9dbbfd1b99489aa36ad9a205b1e0652c737dbf0f7f5369529a69010000",
    ],
    [
      "ETag",
      "ZPoiQvj/aKplKH9q8hYynw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "c1",
      "6e",
      "82",
      "30",
      "00",
      "00",
      "d07fe9598c765db1bbd9667484280c10b35d9a520a634ec0165430fbf791dddfe53d80544a5b2bfaf6a41bf0024609c9522d837643d1b62ccaa0e23b21b14af38fa130eee8c4efa2097f74793da226ef94e3ad14a593c1813dd191069b4b141728c05c1ed874e775aa60c47c5d20c25cb5321af1375dbbfd80f9a45ed32c229fe774efb90c3b93bffbc61ed722b3e79c40675bfa635b4cfe751fddaa1b8a0f300939ab144421957ca6c70eaef34ae081d94b426298555e52faeb2fd33a2c6a2bb000faded5465b51cfb3a7674216e0bf29fab1d3f3956a69b401bf7f0b71e86a05010000",
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
      "Sun, 11 Oct 2020 01:43:01 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-93-1602380499267",
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
      "14fd2bc8fbda049a27448ad62ca52b52423a1eadaa6942b631d42d608a4dbbaaca7fdfc5345dbb49ed17c0bee7dc73ee836774c7ab142d10e1f97dcb9aa72fb782a023c414cee1d61effbe302b1a5f7f7bdcb98f71bebe1084af964b40f08e257159176c2045db5026177138cc1bd1d6b81162008906ce78703cb34663db9a38ce6836079e6445b6e1d51db06f94aae5c2340fdac35c88bc60b8e6724845f97a6f3e8cccba11b78c2a69be973441459a1f8b7e2d04c58a8b6a198760a095ac495889790116fe325372f23ef590e3729803f881538629156da53a5b90828a2ae379dbe8ac68f18cb4cd371f287437ee3a32a828dab24a2a5cb22323c50a27eaa966c659b0db1a9e7fb60bb6abc8dbf949b83e77b7abe17ab789b77e685c9dbb816b284c0aa6b9c6d238d1271f0ea09f32a978a5d5a3eeba537e6990f7ff583a02484bd60793b935c3c7b6e5908ccc69668fa724b3182136994ff19858d499b0494a18069e16d52c5c892a75e88cce47569239a9954cacd44ea0bf694266643ac65378628cf647e8b1e18a9d72590bc9fb0ea1abc08bdc240a627fbd8a5c5d4286db429df6c6ba02de7a545020803ea869df45b900a5aedd9e1fb9c16a1d79976e3fe10dcb317d0aef61c6192e2403346ea0798a355b9142c390bfdabaa700d613bb3804255afc7c465dcf3b176f5afe4a8f60809d5da5df288c02cfffaeed1c1097b86835e4a1ff403558be81dac0f5fe17206149fb2ce847ec06d7a8bf0a58c61a56d1cfa709601df8f45f3b2c3e6061f541462a38c3ee50d989d086f53bc475b92feca97dec4c6748831bf56f6c64cdad43d7ba1c5d4656b24abd54d42f3e",
      "14da8bb5f215044118bfafbbb5ff0366ba838d78040000",
    ],
    [
      "ETag",
      "83xP/ncUYBwOEwUgCPobiA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-93-1602380499267"
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
      "401085df65bc2d09081668c205082a097f9692180d214b3b2dc5b65376b71a427877672ba25113bd6967a6df6ccf39ed019ee32c0007d671b42b50ee2f22d4f7a670511589567ccb29530816a01611933a7fc8dcfdf451d30cfb3e79d3b5bd9351a7c384f237980a700e10c698040a9ca7036422455ef32929d26c557616e87d6e8673cf1d4e6eb94f2930fd64311a757ba3011cadf36220b45895fc3fd696470bb6b476314489998f464b2e698bbe1e1a9b4aa47982154585f4514109970f2249452e245185279576bd52b3ab97f556b5d16e5fda4d0613f2858e29637631677da0498bc4a55776093603b22cd970585e5f781c07a511530e279edd28f57d05585a1827b8fa1b64bd1bc19fe1033b45f09d132915993e5337a369f7b7e338d3cfa3fa5d6ff083509a933a23de703c987bddf1cc70cb93f7de5ea39a49e220159a0c6bd546ebaa6957df63bd261335bfc7d1b2400b7cc17fc75dacc10945a2f0f8065e9452ea7b020000",
    ],
    [
      "ETag",
      "tpXnRyOZtoPeDcoTOb6qrg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `stamp` = ? LIMIT 1",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-94-1602380499267",
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
      "6f",
      "9b4010fe2b68fbd24ab1b9cd2159a9e5d006d5476ae3446d55d90b2c641360c9ee92288afcdf3b409c43519327d0cc77ccb50fe89a5629f2514cf39b86f0fb4f572c464788489c43b4cc6ad3a4f18fd9a9ba5ce777f8863bf46e321e0382b62c81cbba2003c11a9e10e16fd6c39cb3a6c69cb101080d3c6ba08f34c37435cbf38c91033c418a6c46ab6b605f4a590b5f550fdec39cb1bc20b8a66298b0f229aede1a6acdd91549a4505f5baae022d4f74d8f0b9660495935deaca1804610be2525a60594f0cc4ce3afafa5871497c31cc0b7342138495853c9b62c90485895d1bce19d2af21f5057e68b1fb40e66c13452a6cbcd22fabcc3654bde7d51b050b65b4e445348e5db6a39577635785d6241c44eb9380d56810221ce325a902d4d77ca583956268b13880a09d5f58159380f23458742522224adba32221c17a42de17152e1dbfdb4042cc1ac4f6e1d6d847557f3e22c7692cc35ed38d3481cbbb1636333d612cf22561a130c3cd9aa772c5cb1cab147f6c8d0cd2c73ddd449f5d4325ccb74bcd4334d18b9a51b8e65117b84f647e88e53494ea8a899a0fdb8d0c52a8c826db4da2ca69328e8dac8308ce4a42fae6de2659d129a04d03b7deddb2c65e0d4ce3e5c44c16a328dc2f3a05ff78ce438b95fdfc0c2335c080268cc714924e17396c2d0d0d9721d46e172319901a3dbe1d9012190ffe7e19910ddd7dd9465f76dbd4656e77f009ce3a2e910b7fd0fd2d17e7ff47f85289c07eb68323f7b5fc5d00c6da01903dd8e74c3d74d5fb7869aa6fd06f1bf4084bbef75d1cf4db0fa85fad08a6484932af9f82e00dc253e7cbe87b70458784d60037729295c61225a938493fe1a69d9f5deb36dd78033431d98cb37",
      "394f730e636f355a4552924a3e76d4bfa5768a5daa114f2048c2112dc2c577c8fe03401dc527cb040000",
    ],
    [
      "ETag",
      "mfp33ibKLH/OSgwaqr7iwA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-94-1602380499267"
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
      "00000002ff2d90416f82401085ffcbf42a095a4295c48336a4b5a1a6c5921e1a639665a02830b8bbd45ac37f77167bd9997dfbedbc97b9c0a16c3208202d8b6387ea7c57a079b74d8cbaab8ce6d252a311468046144c1e92d734f3fd0837bfde69b3f83ccae9cbdf623e6742cb6fac050417c84bac320dc1d7051a51237fdbedd4309131736eadb25a7f844f61cc424d9915d649142d965108fdb61fc19ed2187354d848b4235b457b946665d36a51b7153a9a3a2551c3000f0f85a2ae158ac861c59979ced87727f753d79bcd26fe03831549614a6a984d36c036868ca8623a71581833a0869673e7c3f933c81c68fb8f2ecf06f59b22f6d5682ddd9bfd23d94886a31ad5e108a4e0653c97e676efaff02f974869010000",
    ],
    [
      "ETag",
      "kUMbd66LeSx4wSAWqc8JzA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff1dcf4b5283300000d0bb64dde994848271072ac5d650a396df261348680294bf1da8e3ddedf86ef07e00cf73398e6c6a2bd98047b07088d7f9fad03eb8a623fb5a25989ae1f539a9fc3345c3116e6d3f35a26fcb2943cde72c9ea9d814bd6320f94233f64a2b36587ed0a3c2d428aea3b9fb826aa407bb8a02445089ec512cf8f4c409be7c10463395220a45722b2366638f980dec58734c1d6fe2306e59bda3e8a6ced62878535d3e7d72da4f6ef02e76595c30afba1e9530f67d18eb3a71b13d756f99a6ca22d8d980159073a70739327d9fa12dc62bf0df64d3d2c9fbd5957c9003f8fd031aede2fe05010000",
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
      "Sun, 11 Oct 2020 01:43:03 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-95-1602380499267",
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
      "f6ab6d91bea049b33615954d4b5d4a3566b321c370c15160901934c6f4bfef65b0aec6443f3133f79c7bce7df042ee799990198979f6d040fdfce34ec4e48880a219be9a53b9fb757b6e7b42c1e5f8a630cfefae374ff3392278cb92b4a872e849d1d40ce46cb7ed67b5682a5a0bd1c3443d67dc3b9e98d6d036478e634da6c89390a72b5ede23fb56a94ace068383763f1322cb81565cf69928dede078fd6a0aac51d3025071f2507a822075f8bfecc05a38a8b72bedba28146421d4141798e16fe3393f8e463ea3ea7453f43f023674019134da95a5b98828932e55953ebac64f642b4cd7707b27557ee323498c89ba28c4a5ac09191504523f55c8171166cd686e79f6d82f522f4367eb45d5eb8eb457fb959edd6fed6b8be7003d75034ce41738db971a26f3e5e503f01a978a9d5c3f6b9557e6d90f7792c2d01a52574c1686a4ee8b16d3a711a4f596a0fc7716a421cdbf1744c87b1c99c118c921828f2b4a866d1529413ea306a4fe328010ba2d178e244f67414472ca5f6c46189650d2db23f224f355770ca652524ef3a44ae032f74a330d8f9cb45e8ea1252dae4eab433d616f0dea3c20211f4454dfb36ca052ab5edf6fcd00d16cbd0bb72bb09af20a3ec79fb80334e692e01d1b4c6e629a8d722c186117fb1764f11ac277679084a32fbf342da9eb72edeb5fc8d1ee2005bbb4a7fc9360c3cff5cdb3920ae68de68c8637720155abec5dad0f5fe2f227149bb2ce4f7ce0d6e48f714400a3594ecfb69225807befdd70e8b8f58",
      "5c7d94910aefb83b4cb622ac866e87b82ef7953db68793ee4f55b4569f62b6353e74adcdd16684024af55a51b7f8586827d6c837100671fcbeeed6fe1f2001e5a778040000",
    ],
    [
      "ETag",
      "07sUJhG8IoteP5Ym0GjWOw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-95-1602380499267"
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
      "bc2de14728d0840b10902680588ad1184296765a8a6db7ee6e5524bcbbb315d1a889deb433d36fb6e79c760f0f51ea8305eb287ccc51ecce4254d7ba7050e6b19274cb782a110c40c542226f58bd7cbb7dedaf07778d66b585a397e9b01c763a44486f8309036b0f4184b12fc1badf43ca12a4358fc77992ae8ace00b5cbf470ee3af6f492fa84fbba9f2ec6e36e6f3c8083715af49962ab82ffc7daf260c096af1d0c5060eaa1d69209be454fd9daa66449166349f25c7828a1808b07a1e079c604e7259a94da8d52d5acd4ce5b957abb5d339b04c6dc632ae229b18b39e903c5158b1dfe4c2ec124401425190e8aeb138d23bf30a24b7bea9af542df5780a405518cabbf41d2bb61f4193eb06304df3996f03c55276a38beeafe761c65fa7954bfeb0e7e1052515227c4b52783b9db9dcc34b73c7aefed14ca99e014a4449d61b5526f359a66e53dd60baea3a6f7584ae46880c7e8ef18450aac80c5120f6fb21ced587b020000",
    ],
    [
      "ETag",
      "Va4/XjzDbEY5718eHxNF/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `amount` = ? LIMIT 1",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-96-1602380499267",
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
      "00000002ff85536d6fda3010fe2b91f765530b84b79020a18e41b645a2a185d06a9a26709c4bea36c4a9edb46215ff7d97a4f445d5da4f84bbe7edcef603b9e159448624e4c96d0172f7e95a84e49880a609562f26e1d9d14cfab7bbe924fa76c4ffcae03e3f1f8d10c14b96a2db3c8586128564a086ab653391a2c8a914a281420dc76ab42db3d3b5cd9ee374ac01f214a4f18c6737c8bed23a57c356ebe0dd4c844852a039574d26b64ff5d65da7954b710d4cabd66bcb16baa8d6fba627a9605473918d564b0c5028906bd8529e62846766147e7d2ddde474db4c107cc71950c64491e932164a3091c53c2964a54a860fa48af9e2832cdd993b098cc97ce5079f37745b92375f0caa8cf55a822a526d7c5fcc4f8d4d8e5e575481da18973fdd856b60498a98a7b0e6d1c6181927c6d89f62f551a3aaccbc532f30da982402a57956e50868984299e17155dedb032a0954a35bdd5c0f4c8bb66dd309e370c062bbdb0f6313c2d00e077dda0d4de6f4a017854091a74bf58a45339195bb1d387d08a11bb2b0d789ec0e8bbadd9e4523466dc7eef73ba6658143f6c7e45e720d53ae72a178bd2f72b9f002771d2c56fe641cb8d51831c59d4ceb70e5102f736a1c1241efccb52fbb5ca053b97ccf0fdcc5781278176e7dde334828db2d6ff1c4639a2a403495740b1ae4a9887069e46cbef4026fee8f67c8a80ef1ec805064f8fbe19910ecf26acbbafa2dbdac5ee57f005cd0b4a81077f5076993fdfef8ff0adf67f3f1c71acd3e22f67f108457bc5620e72b77f18bd4a505c42021631fdf0004578d0f5feae1d920161f0eda288dfff1be31559a3009f5bde3db2a61cdeedb3dab6d920a2cf59bdea0d33e2cb8d42815610b997e9ca87e36e5beaa56a19e40d8c4ebe27bfe0fecfe03b46436b2b6040000",
    ],
    [
      "ETag",
      "VCbP+LrNqyDCdB+izrTwpQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-96-1602380499267"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff2d90414fc2401085ffcb78a509144520e1205a950828550ec610b22cd35a6c3b657756531bfebbb3c5cbceecdb6fe7bd4c035f59b98731ecb2f4e8d0d41729f2ca37315a97b395525169113a80ac52217f17f78b72f8d47fa6e3955ebdc7778973493a990861f527160ac60d2419e67b0be38f064a55a07cdb6e4d3b5130ae2bafcc966fd143148b50d0de0bcbf57c7e339d4770da9c3a70a05d8c091a2c35fa9195a1036a9ef9b45615558e812567345a68e1f62135e42a6588025182d120e80dba617fd8bd1c8dc2c1b5803969c51995c2ae5f416c9858e531fd4858e80960da567227edf92d72e8036dfed169cd685f0c89af456fd93ddbdf928fc412958dc30e6825cb78ccf87c3ffd01bff3bcd369010000",
    ],
    [
      "ETag",
      "zMFMn8K3Ooq5cQYRDfuufg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "64",
      "2d0ea0b1a4bba005f928f229856e18882941914f8203e8f4ee75fa6ef09e2027840a910ded9536e01dccb98a9664e9b49abec6e46108bf3283b496c2007f31a31c030f6efba4ff2c9b2940d579d3a0a257aef78d124692d886ddbe9661ab8d0d975d16f3e2632c844733c4261a9626537d2653fd389793370ad74af7bbf3c14ffc1bac9cc1702c9baaadbdfa41a37b1a90ceac937c3ccc177c8b4c0e03e5112783f3768954c9e1196c3064d63cae35e55ba769cc234df6ccdd84eb0c37fc6e130216804e5dc5a9c8aad76c05115a80ff6636cc1d7d5d759a73cac1ef1f1891d27505010000",
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
      "Sun, 11 Oct 2020 01:43:05 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-97-1602380499267",
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
      "00000002ff85535d6fda3014fd2b91f75a2040020109ad08d28d09c21642ab769a22c7b9490d214e63a713aaf8efbb714ad7aa52fb14dbf79c7bcefdc813d9f33c266312f1f4a182f2f8652722724140d1145fcdf20eee8eb73f76bb629665fbfddd94cfbbe96482085eb3243d1419b4a4a84a0672bcddb4d35254052d856861a2d668d8ea0ecc5edf31add1a83718224f42962c79be47f6bd52851c773a67ed762a449a012db86c33717879ef3cf63a452976c094ecbc95eca08aec7c2cfa35138c2a2ef2c97683062a09650807ca33b4f09f1947976f53b7393db453043f7206943151e5aab6852998c8139e56a5ce4ac64f44db7c75201b77e9ce028389ac3ae4614e0f7061c454d1501d0b30aefcf5ca5878576b7f350d166b2fdcccbebbab697bb65e6e57dec6b8f9eefaaea1689481e61a13e352df3cbca07e0c52f15cab07f573adfcdca0c5fbb1d4049496d004c3a139a05dc71c4549346489d3b7a3c4842872a2a14dfb91c9461658710414795a54b3682e72db8eadd88e7a61d4b39cd0327b66482ddb09c132fb0e8033b49301395d90bf255730e7b21092371d2237fe2270c3c0df7ab369e0ea12125a656ade18ab0b78ed51618108faa0a6531de50295ea762fbcc0f5a7b36071ed36135e424ad971f380334e682601d1b4c4e629285722c686116fba72e708d613fb790e4a32fefd44ea9ed72e5eb5fc851ee0006bbb4a7fc926f017de376de78cb8a659a5218fcd811468f91e6b43d7a73f88c4256db2905f5bd7bf25cd930f099490b3cfa789601df8f45f3b2f3e6271f551462abce3ee30598bb0129a1de2badc67b6edd8d6d0241a5caa77b141b77fee5a9da3ce0807c8d57345cde263a18d58255f4018c4f17bba5ba77f59c6a0c778040000",
    ],
    [
      "ETag",
      "0rZeZyYJjjpCllkkZAiD1g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-97-1602380499267"
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
      "00000002ff8d92614f82501486ffcbe92b2c354565f30396a59b9a0aaeb6e6dc150e880197eebdd4c8f9df3b97cc5ab5d51738e7f09ccbfbbeb087c7380bc0864d1c3d1528cab308d55c170b9445a224dd729e49040350b188c87b773b5c9ebfde2debada9cb046b36cac099f77a44487f8b29037b0f618c4920c17ed843c652a4359f27459aadabce0055e67ae87a8bd1f486fa9407ba9f2ec763a73f1ec0c1382d064cb175c5ff636d753060c7370b0c5160e6a3d6920bbe435f8db44dc9d23c4153f242f828a182ab0791e045ce04e7264dcc6edbac5bb5c645a7d6ec761b569bc084fb4cc53c2376e9923e505cb164c15fc825580488aa24c361757da6711c544674399a7a56b3d2f7152069619ce0fa6f90f46e197d860fec18c1778ea5bcc8d489ba1edf3abf1d47997e1e75e578831f845494d409f1469381eb399399e65647effd52a19c094e414ad419d66bcd4eab6dd5de63bde43a6a7a8fad448106f88cfe8e61acc00e5922f1f006d4f78eef7b020000",
    ],
    [
      "ETag",
      "XShHU/zWU15NSara42ydAQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `id` > ? LIMIT 1",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-98-1602380499267",
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
      "5b",
      "6f",
      "9b",
      "30",
      "14",
      "fe",
      "2b",
      "c87bd9a436901b81485117a56c454a932e21adaa6d4a6c73a06e01536c524555fefb0ed0f4a24aedc39e30e77c9773b11fc99dc84232244cc4f72514bb2fb7929123029ac618dd9ab7676319ed6cc78b97417aa9e1eafaec61344284a8588aa67902c74a960507355c2d5b7121cb9c16521ea3d0b1eb1cb76dabd375ac9eeb76ec01f21424d1546477c8bed13a5743d33c78b76229e304682e548bcbf4396e6e3b665ec85be05a996f2d4d7451e6c7a62789e4540b998d564b2ca05450ac21a522c1125e9821fbfe56ba2568da8a11bc151c28e7b2cc7455164a709945222e8b5a950c1f495de6ab03597a536f121893f96a167cddd0b4226fbe195419eb7501aa4cb4f163313f3736397add50056a635c9d790bcfc050212391c05a841b63649c18e3d92946abbf3fa56575014353ffdc0f8c36961282d222ab0b09284ba02ae26956fefb0d5504aad1ae49ae07964ddb8ee5b2880d78e474fb2cb28031870dfab4cb2ceef6a01732a0c8d3957acda299ccc2367368c7e9f5792fb45c3bb4071dd70197b241c8acee8071863296cdc8fe883c1442c3a950b954a21918b95af881b70e16abd9641c78751b11c5a19c36c5554dbcae53639308faa0af7d9515129daae9fbb3c05b8c27817fe9350b9f424cf96e798f2b8f68a200d1b4a0296828ce6588432317f3a51ff8f3d9788a8c7a8b17078422c3df8f2f846097d753d6f5b7f2b27bb5ff01704993b2466c9b036993fdfee8ff14fa28f1172178bf1b36f9b5f216d7a4092d20820232fef9f6115c",
      "273e7da6873783587c3568a334fee35de3aa32e10534774ea4757d0dbbefd85ddb2235b8d0ef723da77f186ea55129420a997eeaa87933d5acea54a99e4198c4ab32f3673f31fb0f3ecd0beab3040000",
    ],
    [
      "ETag",
      "v/jHAofy68EgSTmVteWYHw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-98-1602380499267"
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
      "614f83301086ffcbf91522438383641f9c21ba84cc0d87899a65e9e04066e1b02d1ab2f0dfbd32bff4ae6f9fdefbe6cef055b7054470acabef1ed57055a1d9da2645dd4ba3b974d46a0407d0888ac94d91bd95adb70be4abac9fb3a0bf7e1f86ed62c184ce3fb111109da1ac51161aa28f33b4a241fe7638a869226366e8acb25aefe2c73865a1a1c20aeb2c49ee97490ce37e74e044c7144b54d8e66847768a4e989b954dab45d3497435f52a470d133c3d548afa4e28229715379cbbb3c0f36fe6de6d18fac11d839272616a6a99cd5e806d0c192153fae5b03063404d2de72ea7f38765df06daffa3cbc1a0de28625f8dd6d2bbd83f908d6438aa513d3a900b5ec6536d2ef7f10fe34d69a969010000",
    ],
    [
      "ETag",
      "PdUYfn0T6lVliOU6u/ZyyQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb64ad8e1045e80e285331520163a36c323484f01362c01f9ddebd4edf0dde0f4819e37d4f87aee62d7803cf54b7666c863ad359d88c08031a322cd6b61521d27c187a73ca1cdad07d7ec3ba60ed56c7575a0b374601c323e25576f684adf51b849bae746ce9c581b6f9c40f8894bc1c3d61c641100ed5da6b6353087cdf7d633c9faf6e461229781edc42c9fa9e8ce1692a3ca10a41490f2199f22feed6b7dd3b890ed7cc4fba95cfeca37435eae7fe68a2c525d788c912b51ca5d95463b6cd0e6002f843968af7b47ccde0d2b226e0bf4987a7e4afabc353c515f8fd032ecec6d005010000",
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
      "Sun, 11 Oct 2020 01:43:06 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-99-1602380499267",
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
      "9b3010fd5790f7714d427e9040a4688d52b231256403d26a9a2664cc41dd124cb1e95455f9df7798a66b37a9fd84ed7b77efddbbe391dcf232257392f0fcae81fae1c38d48c8190145737cfd1addf826b5d643c783f547beb4b6cc0ef3c50211bccd92f45015d093a2a919c8f93eece7b5682a5a0bd1c3423dc7e90da7e6686c9b13c7194d679827a1c836bcbcc5ec6ba52a391f0c4edcfd5c88bc005a71d967e2f0fc3eb81f0daa5adc005372f09a72802c72f036e9a74230aab82817fb10053412ea180e941728e16f669a9cbf2edde7f4d0cf117ccf1950c64453aa56169660a2cc78ded4ba2a993f122df3c58184eec65d450613457328e3921ee0cc48a9a2b17aa8c05807bbade1f9eb5db05d46dece8fc3d51777bbecaf769bfdd60f8dab2f6ee01a8a2605e85c63619ceb9b8f17e44f412a5e6af6a87d6e999f0cf2fe1f4b9b80d412ba603c33a774689b4e92253396d9632bc94c48123b9959749c98cc99c0244d80629e26d559b414e5249b98d3a963c5436764c793e1d889d16033b6d3d1845999655b494a8e67e477cd155c705909c93b87c855e0456e1c057b7fb58c5cdd42469b425d74c2da065e6a54d82082dee8e9d846b940a6d66ecf8fdc60b98abc4bb79bf00672ca1ec23b9c71460b0988a6359aa7a0de8a140d23fe72eb5e20584fecdb2928c9fce723693d6f55bcb0fc393dc201b67295fe92300a3cffb39673425cd2a2d190fbee402a947c8dbda1eae32f44e2927655c8f7bd1bfc20dd530019d450b2f7a789601d78f75f3b2d3e6271f591462abce3ee30d992b01aba1de2badda76ccb9e3a8efe5315add5bfb1d9d0744eaeb535da8a7080523d75d42d3e36da9135f21984411cbfafdd3a",
      "fe014bf9c7f078040000",
    ],
    [
      "ETag",
      "JTjN0a5F19IeF+iA5Mc8Sg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-99-1602380499267"
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
      "02ff8d92dd6e82401085df657a8b895a8a4ae2857f5512b516316dd218b3c28028b07477a935c677ef2cb5b6699bb43730337cb39c73e008bb380bc086751c3d17280e5711aa7b5db8288b4449bae53c930806a0621191a361af9b3e98f574e1bceefa8fb5852bbaf9bedd2642fa1b4c19d84708634c0209f6d311329622adf93c29d26c557606a843ae8773cf75a643ea531ee87eba188f3bddf1004ec66531608aad4afe1f6bcb93015bbe76314481998f5a4b2ef8167de5689b92a5798215c90be1a384122e1f44821739139c57685269b52a35ab5abf6e56cd56ab6e35084cb8cf54cc33621773d2078a2b96b87c4f2ec122409425190ecbeb0b8de3a034a24b67ea5966a9ef2b40d2c238c1d5df20e9dd30fa0c1fd83982ef1c4b7991a90b753bbeebfc761c65fa7954bfe30d7e1052515217c4732683b9d799cc34b73c7bef1e14ca99e014a4449d61ad6a366f1a56f53dd61ed751d37b6c250a34c067f4778c620576c81289a737144906d67b020000",
    ],
    [
      "ETag",
      "HGCBmW42mUIxkDX1URrBpw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` > ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-100-1602380499267",
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
      "6f9b3014fe2bc87bd9a4268124051229eaa2946d48b9b484b49bb62931e640dd0226d8a4adaafcf71da0e945d5da278ccf7739373f901b9e856448021e6f4b28ee3f5d8b801c115034c65bbbf4b6bbd9dd4dd8ffc926e7aab7bd6569371e8d10c12b96a4699e404b8ab2602087ab653b2e4499d34288160ab50c5d6f19a6deedd97a7f30e89a16122524d194673748bf522a97c34ee760de8e858813a039976d26d2a7fbceaedbc90b710d4cc9ce6bcf0edac8ce07ae2789605471918d564bcca09450ac21a53cc11c9ea961f0f5b5769bd3b41d2378c71950c64499a92a2f9460228b785c16b52a193e903acf1707b274a6cec4d7268bd5dcffbca16945de7cd1a8d4d6eb02649928ed9bb798699b1cbdaea804b9d12e7f389ea3e15521229ec09a871b6da49d68e3f9a9f60cdc687f4a5def0106a6eeccf53503130a412a9ed5e9f83448a04ae5b165eedb495504aa50ab09ae2ddda486ad0f8228b05864f78e83488720b003eb98f6029d0dfad00f03a0c853957acda21936012cbb6fd28111521af5acc034981e758db06fea060bada0876388743a20fb23725b7005a75ce642f2a66de4d2737d67ed7babf964ec3b751911c5d69c36c95545bccc536191087aa7ae7d15e5029daa19b873dff1c613dfbd709ab14f21a6ec7eb9c5c147349180685ad0141414331162d3c8d962e9faee623e9e22a39ee5d90121c9f0f7c333c1bfcfeb2eabfa5b7999fddaff00b8a049592376cd811864bf3ffabfc2d2f7dcf9f7f725c639568b327f1185abde2890f395e3fd22cd9507111490b18f3700c175e0e3277b783e08c607843e52e13f2e1c93950b2ba0593c9ed66536ec63dbb28d6a35115ca837b1816d1e3a5c69548a9042a61e4b6a9e4fd5b03a54ca271006",
      "715fe675abf6ff004f391a2ec0040000",
    ],
    [
      "ETag",
      "8uRqvMxkd4XcCQt3qwcm2g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-100-1602380499267"
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
      "41",
      "4f83401085ffcb781412a8046d931e5a838a218d627b324db3c040a9c0e0eed20609ffbdb3d4cbceecdb6fe7bdcc003f6593c10292b2f8ed50f67705ea4fd3c4a8ba4a2b2e2d350ac102d4a260b27712378cbdcbbdeb0b794ee865fbfe775c2d974ca8f488b580c500798955a660f13d40236ae46f87839c2632a6fbd628e1661bbc06310b356546d8eca268b58e0218f7a305274a62cc516293a219d94a3a61aa43935689baadd056d4c914154cf0f45048ea5a21896c566cd7716cd777660f4f8e379fcffc47262b4a852ea96178f705eca3498b2aa60ba705970139b51c3c9fce33cb9e49b4ff47d7bd46f521898d151a4fe7e6ff4c2693e6ac5a7668412a781b6fa5beddc72beabc6beb6a010000",
    ],
    [
      "ETag",
      "y0b1IR4w+16arvboFTJzhA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "1dcf4b5283300000d0bb645d3a34264adc092ddf02a67480ba61f86420440409da50c7bbdbf1dde0fd80b2ae9994c5320af6019ec15a42b2adb7c16898e8a50e2cf331b7f709d6f3ab335886c89ac6e67830d42c591fec2e9cc6af87a736d71c5746961f35142bde7ee14a13d76b56bcdd509fec960cc1d45667c28932044ef75e4bddae0b63ff7430a97fe4be8e1cf70c29f29712c1f17dba44fac0033a78d5adc3d52ca270497a3d249a5dd97268213c2aeac9e87b4cd744cf15b4c458ab6e09356d8ca9efaa4fb27a6003989af8cc64c1efb3074cc806fc378b659dd8fd6ab2726633f8fd03751323a305010000",
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
      "Sun, 11 Oct 2020 01:43:08 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-101-1602380499267",
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
      "02ff85536b6f9b3014fd2bc8fbda2490172452b4a6295d23256403926a9a26649c0b750b986293adabf2df77314dd7aad2fa09dbf79c7bce7df044ee79b1275312f3f4a186eaf1d39d88c9190145537cbd0816d6efedc6dded2eaa3f5b2f57f36bb99ecf6688e00d4bd2bccca023455d3190d36dd04d2b5197b412a283893a966975acb1d91f38e67032e98f6d244ac892152fee917eab5429a7bdde49bc9b0a9166404b2ebb4ce42fefbd43bf5756e20e9892bdb79a3d9491bd0f543f678251c54531db06e8a096504590539ea1877fd47d7cfe367797d3bc9b22f8c01950c6445da8c617a660a248785a573a2b993e11edf3d58104eeca5d840613599d175141733833f654d1483d96605cf99bb5b1f4ae36fe7a1e2e375e142caeddf5bcbbd8acb66b2f306eae5ddf35148d33d05c63669ceb9b8717d4df8354bcd0ea61f3dc283f7768f97e300d01a525b4c1c836c7d472cc499cc4364b9cc1284e4c886327b64774109b6c3284e13e068a3c2daa59b410c5d01cd9a3018c23d3ea0fa2a1653a11a57d271a4ce8089c983ab66d91e319f9557105975c9642f2b643e4c65f866e14fa5b6f310f5d5d4242eb4c5db6c69a025e7b54582082fe53d3b18972814a4dbb975ee8faf345b8dcb9ed84579052f6183ce08c139a494034adb0790aaab5d863c388375fbb9708d613fb7a0a4a32fdf1449a9e372e5eb5fc851ee2001bbb4a7f4910fa4bef8bb67342ec68566bc8a13d90122ddf626de8faf81391b8a56d16f26debfadf49fbe443021514ece3692258073efedb4e9b8f60dc7dd4910aefb83c4c362aac827689b8aef7993d729c9165110daed4bbd8d81e9edad6e46832420e857a2ea9dd7cacb415abe50b0883387f4fb7ebf817eb88d1d37b040000",
    ],
    [
      "ETag",
      "BSC1xUOEVVBrzUNmtAHsMA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-101-1602380499267"
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
      "dd4e83401085df65bc9426542b5a122f5aad4ac4fe507aa331cd16864a050677170d367d7767b156a3267a0333c337cb3907d6f0981631b8b048974f15ca7a6f897a628a00559569c5b7920a8560016ab164d21fbc96f13e4d436f12dc86abd199735daf26a7a74ca8e8017301ee1a9214b358817bb78642e4c86b1165555ecc9bce025d9766380d036f78c97d4eb1e98733dfeff5fd016cacdd622cb49837fc3fd6ee3716ac68116082128b088d9652d20a23ed199b4ae465862d45958c504103370f9692aa5248a2164f5a6dbbdd6a3bf6c1e189dde9760f9c6326338a844ea96078366581a0498b2ca017b6090e03b229d971d25c9f799cc68d13537ac3d0e93402bf02ac2d49339cff0db2e007c1dfe103db66f09d13395585de5117fea8f7db711ceae751e7bd70f083509aa3da21a177339886bd9bb1e1eeb7defbb5463596c4492a3421b6edcec9d1b163bfe77a46266b7e8fab65851644827f8fab54839b884ce1e60d22ebd9157c020000",
    ],
    [
      "ETag",
      "LEzpd+oSTIQRZTjOC6KyjQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` > ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-102-1602380499267",
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
      "6f",
      "9b",
      "30",
      "14",
      "fe",
      "2b",
      "c8",
      "7bd9a4265c032452d445296ba8d2a425a4d5b44d8931867a054cb1691555f9ef3b40d38baab54f189fef726e7e44b7ac88d108452cbdab69b5fbf29747e808518953b8bd3c2de4d9993aac6603763923d1ce98ddf287f11810ac61099c9719ed095e57848ad17ad54f2b5e97b8e2bc07423d5d337abaad19a6ab59c3a1613b4014344be6acb805fa8d94a518a9eac1bc9f729e6614974cf409cf9fefd57b432d2bfe971229d4b79e2ad808f513d7e38c132c192fc6eb1564500b5a6d688e590639bc50e3e8fb5bed3ec3793f05f03d231413c2eb4236798104e145c2d2ba6a55d1e811b579be3aa09537f7a6a1325dae17e1d72dce1bf2f69b8285b2d95454d499547e04cb73655b82d70d16546c95eb9917780a5c553c6119ddb078ab8c956365b238515e805be577ad692685c0dc3ff743458784622a242bda74421c65b449e5a965fefb4935042c41ab0b6e1ccdc6baab0da3247248e29a8328d16814b99133c066a491a145ad38a21878b2516f59b8e0856d59a69be85a6c0d0d9726ba61c7a6a63986ab91c48a12d33135ddb60606da1fa1878a497ac244c905ebda86ae033ff43661b05e4c27a1d796916068cd49975c53c4eb3c251409a00feada3751c6c1a99981bf08bd60320dfd2baf1bfb9ca698ec567730f8046782021a5738a79256e73c86a6a18be5ca0ffde5623207463bcb8b0342a0d1afc71742b82bdb2ecbf6db78d956eb7f005ce1ac6e11f7dd01e968bf3ffabfc22a0cfcc5e9c712b8846a41e60fa060d53b",
      "0574b9f6829fa8bb0a68422b5a90cf3700c06de0f3277b783e008607043e42c23f2c1c118d0ba968b7782c6fcbecd8037738b034d4822bf92e663bcea1c38d46a348735ac8a792bae7d334ac0dd5e2190441d89745dbaafd3fdce343fbc0040000",
    ],
    [
      "ETag",
      "QGntJJ/9rH5iQHcby2Hkow==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-102-1602380499267"
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
      "2d90dd4ec3300c85dfc5dcae52dba1fd49bbe8508149d380c22e109aa62c75bb94b62e49caa8a6bd3b4ee026718e3ffb1ce5029faacd610147557ef5a8879b12ed8b2b32347d6d0d5f1db50661046845c964b39a9e927bb52d7fc6c92c7c8f9ee20afbf372c98491276c042c2e5028ac73038b8f0bb4a2411e3b1cb4dfc8981d3aa7acb76fe9439ab1d050ee84ed6eb349569b14aefbeb082a3a6658a0c656a25bd969aa50dab54b6b44d3d51818eab544031ef68d5253df094d14b01244611c4493301ecfc2dbf93c9e4c99ac490aaba86578f70aec63c98a3aa333a7858801ed4b0e5ef8f39be5d025daffa3abc1a279d6c4c60673dff5fe77e43259ce6a758f2390827fe351d9bff7f51731f7f5ac6a010000",
    ],
    [
      "ETag",
      "mB7hAFiNgx3A80Y1O2jeuw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff1dcf4b7282300000d0bb64ad0e954fa03b70548202a21d3e6e9800b10205342434a1d3bbd7e9bbc1fb01b82cc938e66c68490fde81c46b6b55ae0e83e968f6ad0f859d908007087a101d662d61857aa2bdcb6b4cee7186f8599d832fe3badc1a231d04dc5f98ae875e6eb1a6f53fe6662c9e4b3d542e592161524c9e50c8bad288e6ba516c0ec13a55f86dde9461846d799c70c7d3863bb9b19d8648fa3b8a428eee6f5564ec3a1b5bedf73e3cca93709ebd8e7d5ba9e24f0f091e155d0a59be39abfdd5845e3d43b32bfd0c2c00118f9a9231af5f3355b7ac05f86fe64c3ec8ebea104c0905bf7fd86d66a705010000",
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
      "Sun, 11 Oct 2020 01:43:10 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-103-1602380499267",
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
      "0002ff85536b6f9b3014fd2bc8fbda24248490448a5694d23552423642fad03421632ed42d608a4db7aaca7fdfc5345dab4aeb276cdf73ee39f7c133b9e76542e624e6d94303f5d3973b119313028a66f8eab29bdb6b719d0e65f0e7ee0a4ccbe771e12e1688e02d4bd2a2caa12745533390f3fdae9fd5a2a9682d440f13f586a6d51b4ecc913535c7b3d968e22051429eae79798ff45ba52a391f0c8ee2fd4c882c075a71d967a2787d1f3c8e06552dee80293978af39401939f844f56b2e18555c948bfd0e1d3412ea080aca73f4f08f9ac4a7ef73f7392dfa19821f3903ca98684ad5fac2144c9429cf9a5a6725f367a27dbe39909db7f696a1c144de146554d2024e8c842a1aa9a70a8cf360bb3156fef936d8b8e16aeb47bbe585b771fbcbed7abff177c6d585177886a2710e9a6b2c8c537df3f182fa0948c54bad1eb6cfadf24b87561f07d312505a42178c1c734287537316a7b1c3d2a965c7a909713c8d1d9b5ab1c9666318273150e46951cda2a528990d23b0533b8a311a8dc70e44b3a99544330653ead8cc19d2941c4ec8ef9a2b38e3b21292771d2257c12af4a230d8fb4b37f47409296d7275d6196b0b78eb51618108fa4f4d8736ca052ab5ed5ef9a117b8cb7075e975135e4346d9d3ee01679cd25c02a2698dcd53506f44820d23bebbf1ce10ac27f6fd189464fef399b43d6f5dbc69f92b3dc401b67695fe925d18acfc6fdace117149f346431ebb03a9d0f22dd686ae0fbf10895bda65213ff65e7043baa70052a8a1649f4f13c13af0f9df76dc7c04e3eea38e5478c7e561b2556135744bc475bd2f6c7b668e2613a2c1b5fa10b39cd1b16d6d8e36231450aa9792bacdc74a3bb146be823088f3f775bb0e7f01870290067b040000",
    ],
    [
      "ETag",
      "AcYhXoXf1sRxjWe03NibmA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-103-1602380499267"
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
      "02ff8d92414f83401085ffcb78a509ad155b120fad5625a155293d18d3345b18e8eac2e2eea2d6a6ffdd59acd5a8895e6066f86679efc1061e7899820f4b9e3fd6a8d607399a1b5b44a86b6134dd2a596a0407d0b09cc8db4eb72cb2d5f3b8d7590da362c6f9eb8bc84f4e88d0c90a0b06fe06328e22d5e0df6da06405d25a22455d948ba673c0ac2b3b9cc65130b9a0be90a9ed27b3301c0cc3116c9dfd62ca0c5b34fc3fd6e65b07eee532c20c1596095a2d9592f79898c0dad4aca804b6b4ac55821a1ab879902b59574c49d9a249abed1eb6da9edb39ecb9dd7ebfe31d132964c20c9725c1b3290904230d13917c269be011a09a921c67cdf589c63c6d9cd83298c45eb711f815206d1917b8f81b24c12b46dfe103db65f09d6385ac4bb3a7cec3abc16fc751a89f479d0de2d10f421b8a6a8fc4c178348d07e36bcbcd77de876b83fa5a494a52a30db1ed767b47c79efb9eeba9b459d37b7ca36a742061f47b5c72037ec684c6ed1b7fad2b6d7c020000",
    ],
    [
      "ETag",
      "Y24nmfhwM82hBRmUiizxlg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `date` > ? LIMIT 1",
        types: ["INT64", "DATE"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-104-1602380499267",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536d6f9b400cfe2b887dd9b42681908410a9eaa284b54809e90869376d53721c865e0b1cbd3b5a5555fffb0c347d51b5f65388fdbcd83efb5ebf6245ac4ff488a5d71588bb4f973cd20f745024c568cefd2c38b66e23414e7e2e8bf9d7721ae7b787878860354b92bccca023792528c8c966dd4d05af4a2238efa050c734061d7364f4adb131709cfec846a2842c59b0e20ae9174a9572d2ebedcdbb29e76906a464b24b79fe14efddf47ba5e0974095ecbdf6eca18dec7de07a94714a14e3c5e1668d155412c41672c232ace1991a47df5e6b7719c9bb29826f18054229af0a55d785129417094b2bd1a8ea937bbda9f3c587be7617ee2cd466ab8d1f7ede91bc26efbe68446adbad0059654afb1eac96daae44af0b2241eeb4f3133770350c099eb00cb62cde6987da9136f5e7188d89829df6a7320c0b30b8f0965ea899584c0c52b1a2292524510675198fe3f2debe524d200a0ddbe4d63646c41c1b4e9444364dc6d6304a0c88a271640f891519d419c0208e80204fd5ea0d8b14bcb0fb940c0cdb76c01cc7100f63c7b00643271e24b61d3909b5223bb68760ea0f07faad600ae64c965cb27664fa79e085ee360c36fe6c1aba4d1b09c1b1ccdbe2ea265ed6a9b04904bdd3d7439d651c9deaf97b7ee806d359e89db9ed932f2025f46e7d8d8f9e904c02a289203928104b1ee3d0f4d3d5da0bbd953f5d20a379c7d33d42ea93dff7cf84f0ae6ca6ac9adfda6b3468fcf7803392550de2a6fdd0710a0f07ff5798d7237857a06ff48d8ed1ef984354fa8b50dcf45644ffb171835f7a1b0a20010105fd780910dc243ebed8fdf52018ef077da4c2ffb87354d62e5440bb7b2c6f3a6dd943c7348ce6de1511ea4dceb4ccfd906b8d5a117228d4634bedf5d4336b52957c02611257c6f7fc63ccfe03a941d158bf040000",
    ],
    [
      "ETag",
      "moNlRG3wbraHXMnD+pAdmw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-104-1602380499267"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff2d90416f83300c85ff8b7705897688ad957aa015da2aa16a63ab76a8aa2a0d86d1018624ac6388ff3e87ee123b2f5ffc9e3cc05751a7b0847391b71daafe2e47f36a9b0475571acda5a15a23388046e44cc691ec75e8ff6eae5efb23b2f603fd20cc572b26b4fcc44ac07280acc032d5b03c0c508b0af9dbe9a4a6898c99beb1ca76f71e3d45090b15a556d8ede3385cc7118cc7d1810b9d13cc50612dd18e6c145d509aad4dab45d594e86aea94440d133c3de48aba462822971577e6f9ee2cf0e6f78f9ebf58cc8307264b92c2145433bc7f03f631644499d095d3c28c0135b51c3c9bce6f96e736d1f11f5df706f58b2236d6683dbd9bff866c26c3598dead00129781bcf85b9ddc73fd9a827b66a010000",
    ],
    [
      "ETag",
      "LEcysA4zCw0qxafqWe46Ag==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "c9",
      "72",
      "82300000d07fc9d9388042a53716a1d34030ecf5924921388045d66171faef75fafee03d01cb323e0c747cd4bc01ef606592bacff6e871d28f5a111a92009dce751121d60d7f2c070de3fa8ebdae2bc849f67a1cdb26f2025fada63caf50154e4a9ae58a456c2420e5bc12835fde52f83d6f95c5f2e06c4ffa203a70be8494bb654521aedbe04b481cd9523fafdb2d485213494131863049fc55224521b7dc2a82887674131d356ecc833639114f47a15da77b822272b5227b26319ba026b2e66721d858fd23d801beb465cf075abe6607595577e0bf49c7b5e5afabce59cf7bf0fb07f1d306ec05010000",
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
      "Sun, 11 Oct 2020 01:43:11 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-105-1602380499267",
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
      "535d6f9b3014fd2bc87b6d0221818448d11aa574430a6405d2aa9a26648ca16e01536cb25555fefb2ea6e95a555a9fb07dcfb9e7dc0f9ed103ab33b444292b1e3bda3e7db9e7293a4354e2025e1b6157cd25bb6dc99f3bfde057f29110eb6ab50204eb5902574d494782772da162b98fc645cbbb06b79c8f20d1686258a3896d98d38531731cd39e0351d032dfb2fa01e877523662a9eb27f171c1795152dc303126bc7a7dd70fa6deb4fc9e1229f4f79a3ac808fd13d5af252758325eaff61138e8046d135a615682877fd42c3d7f9f7bcc70352e007c608462427857cbde17a420bcce59d1b52a2b5a3e23e5f3cd0145eed6ddc41ae16557d5498d2b7aa66558e2443e3554bb0c77bee60597bbd05fc7de2e48a2cd77d75f8f37bbedde0f22ede6bb1bba9ac4694915575b69e7ea16c005f4332a24ab957adc3ff7ca2f1df23e0ea62780b4a04330991b369e2c0c27cdd339c917532bcd0d9aa68b746ee1696a10674667594a31f094a862e19ad769664d72dbb19369bab093993d33133c358dc4b4cd9999cfa7c49adbe878867eb74cd20b261a2ed8d02174137ab19bc4e13ed8ac63579590e3ae941783b1be80b71e251408a0ffd474eca38c8352df6e2f88dd70bd89bd6b7798f09616983c458f30e31c9782021ab7d03c495b9f67d03014ac7df702c06a623f4e4181963f9f51dff3dec59b96bfd26318606f57aa2f8ae2d00bbe293b27c4352e3b05390c07d480e53ba80d5c1f7f0112b674c882aef66e788b86a790e6b4a535f97c9a005681cfffb6d3e60318761f7484843b2c0f11bd0a69e9b0444cd5fbc2b69c896d3a48815bf921365fd8a7b6f539fa8cb4a2b57c2969d87ca87410ebc42b088230ff40b5ebf817f79ba7067b040000",
    ],
    [
      "ETag",
      "ps6mpFiYrcxh/vMmtqcc5Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-105-1602380499267"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92dd4ec2401085df65bcb42405a140132e0a162502f25362a2216469a75068bb75772b41c2bb3b5b118d9ae84d3b33fd667bce690fb08dd2006c5846abe71cc5fe62856aac8b09ca3c56926e194f258201a8d88ac8dd6bfeb8ad3e74db9dbbcbaedb1dbbe6d6a938ad1611d25f63c2c03e4018611c48b09f0e90b20469cde7719ea48ba23340ed333d9c7a93def086fa8407ba1fcefa7da7dd77e1689c1703a6d8a2e0ffb1363f1ab0e1cb09862830f5516bc904dfa0af7adaa66449166349f25cf828a1808b072bc1f38c09ce4b342995cd5aa96c9995ab86596d362b569dc898fb4c453c2578362581a0b862f184efc826580488a224c761717da17114144e74d91b7a56b510f815206d6114e3e26f9004af197d870fec94c1778e253c4fd599eaf6ef9ddf8ea3503f8fba763cf7072115457546bcdec09d7ace60a4b9f9c97b7baf508e04a72425ea10cb66b551ab5be67bae1daeb3a6f7d84ae46880cfe8f7b88d14d8218b251edf00b71855f37c020000",
    ],
    [
      "ETag",
      "wzuZk4WFBCK+FEFQE0kA2A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `stamp` > ? LIMIT 1",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-106-1602380499267",
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
      "6f",
      "9b",
      "30",
      "14",
      "fe",
      "2b",
      "c8",
      "7bd9b42631100889147551ca3ab65c3a425aeda6c480a16e0113db74aaaafcf71da0e945d5da27d039dfe5dc7c87ae5911a3110a59baaba8b87d77c5437484a8222944bf9d49b2f64f9d2fe6cedaad9c8fc2fc7aa1d2f11810ac6649929719ed485e8988cad17ad54d05af4a2238ef805047c77647b7b1613ab83f1c1af600889266c98c15d740bf54aa94a35eef60de4d394f334a4a26bb11cf1fe2bd1ba3570a7e4523257bcf3d7b60237b6fb81e673c228af162bc5e410595a4624373c232a8e1911a879f9e6b7719c9bb29806f58444914f1aa50755d2011f1226169251a5534ba434d9d4f7ed0ca9db9d3409b2ed78be0fd96e43579fb412352db6c049555a6b4cffe72ae6d4bf0ba2492caad76f1c5f55d0d4282272ca31b166fb5b176ac4d162710950aaadb6abf2b8c4d0ad19937f7024d876a622a152b9a5a021266b4aee37e5edecb35d504a2c0b14d6e06d826ba838761120ea2c431ad30c1340c9d70601133c4d1b04ffb714809f054addeb048c18ba141ed244aac3eb1e2414862b31fea9663f7136c105b1f0eac8193c4c409d1fe08fd154cd113264b2e593b3374e17b81bb09fcf5623a09dca68d84c05c4edae2ea269ed6a9a04900bdd2d7bece320e4ef502bc45e0fa9369e09dbbedce673425d1ed6a075b4f482629a08920395554cc790c434367cb951778cbc564068c669167078444a35f778f84e0b66ca6ac9a6fed65f71bff03e09c645583b8697f908ef6fba3ff2b04dedc5d0593f9d9eb2a063670071b1ddd0a",
      "7463a49b23bddfc518ff04f13f4084eb6f75d1f7b5ebff406dc8a70915b488debe0b003789b75ff1e1450118de14f8c0752a066718c9da2512b43d479637cdb76c6b6858467db00016ea45ce76f061eeb546ad48735aa8fb96da17558fb14955f2010449b8a285b73885ec3fe465e7d5d3040000",
    ],
    [
      "ETag",
      "KPsaURG8H3q5qS8+r3JWtg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-106-1602380499267"
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
      "90416f82401085ffcbf42a0962632b890769482521a4c5d28b316685015160e8ee528384ffde59ec6567f6edb7f35e66806bd964e0c2a92c7e3a94fd5381fad33431aaaed28a4b4b8d4298016a5130195c76d12abfdee384ee672fbb45db45fdbd59af9950e9196b01ee00798955a6c0dd0fd0881af9dbf128a7898ce9be354a107df9ef7ecc424d9911a2240c375ee8c378186770a1538c394a6c5234235b49174c7560d22a51b7155a8a3a99a282099e1e0a495d2b2491c58a35b797d67c693b8b57fb79b572962f4c56940a5d52c370b203f6d1a44515d38dd3c29c0139b51c3c9fce5f961d93e8f08f7abd46f521898d151a4ffbe1ff462693e6ac5a76388354f036b6a57edcc73f671cd70b6a010000",
    ],
    [
      "ETag",
      "IjSN9fkzRUozhBdwNH3mVA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00d0bb642d0e5a40e82e204434a8a5c2809b0c8450109a209fe1d3e9ddebf4dde0fd808452d675a41715e3e01dccc9d658d3f549e8a60229af615a3a576acaf2d07b0596e34b181def55856a77a775212f14e19501d31d294df2213aa08f7df6086cc14de6a9ae780e7763e29726b58b6b177dc3e1947d597e1d3c1a51c0db24cda4f8acab58435473bc10c3e333c6be946f9cd84d93d15f760d8ff7e70513c79869562f3c9cf4b393deb085ac8d3dfa1d1ad93608e9827d5d6b54cbe639820795094614b0026c6aca9675a47ccdde54c35881ff26e9e786bdae264b5ad682df3feaf29a0f05010000",
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
      "Sun, 11 Oct 2020 01:43:13 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-107-1602380499267",
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
      "536b6f9b3014fd2bc8fbda2484bc2052b446295d3305b212d26a9a2664cc85ba054cb1695755f9efbb98a66b5569fd84ed7bce3de73e782677bc4cc89cc43cbb6fa07efa722b62724240d10c5fedc94d28abe23c8bff543c09ebef85b2bdcbc50211bc65495a5439f4a4686a0672bedff5b35a3415ad85e861a2ded09cf58653d31ad9e6d871ace90c8912f274c3cb3ba4df2855c9f9607014ef67426439d08acb3e13c5ebfbe0c11a54b5b805a6e4e0bde60065e4e013d5afb9605471512ef63b74d048a8232828cfd1c33f6a129fbecfdde7b4e867087ee00c2863a22955eb0b533051a63c6b6a9d95cc9f89f6f9e64076eec65d85061379539451490b383112aa68a49e2a30ce83ad67acfdf36de02dc3f5d68f76ab0bd75bf657dbcddef377c6f5851bb886a2710e9a6b2c8c537df3f182fa0948c54bad1eb6cfadf24b87d61f07d312505a42178c66e6940e6dd389d378c6527b34895313e2d88e67133a8a4de68c619cc44091a745358b96a2b460ec58d69046690293683c022bb26d7318319b322b658e630ea7e470421e6baee08ccb4a48de75885c07ebd08dc260efaf96a1ab4b486993abb3ce585bc05b8f0a0b44d07f6a3ab4512e50a96df7da0fdd60b90ad7576e37e10d64943dedee71c629cd25209ad6d83c05b527126c18f1979e7b86603db11fc7a024f35fcfa4ed79ebe24dcb5fe9210eb0b5abf497ecc260ed7fd3768e882b9a371af2d01d4885966fb036747df88d48dcd22e0bb9dcbbc14fd23d0590420d25fb7c9a08d681cfffb6e3e62318771f75a4c23b2e0f93ad0aaba15b22aeeb7d614f9c91351d120daed587d868363db6adcdd16684024af55252b7f9586927d6c857100671febe6ed7e12f6d9827697b040000",
    ],
    [
      "ETag",
      "85hTspmFgbxpidTrJmt8MQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-107-1602380499267"
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
      "7c2d49412cd2848782a83588522a8931842cedb454b7ddb2bb9520e1df9dad8a464df4a59d999ed9de7bdb1d3c65450c2e2cb3745da1dc1ea5a827a60850555c2bba95a2500816a066299157dbd9269d5c6d9c17eeccd6837be72cf0d75eaf47848a56983370779064c86305eec30e0a9623ad45825779b1a83b0bf4b634c36918f8e30bea73119b7e7c371a79fdd110f6d66131669a2d6afe1f6bf3bd058f62196082128b088d96528a478cb46f6c2a96971c1b4a54324205355c3f48a5a84a268568d0a4d1b43b8da663b78e4fed76b7db723a447211319d8982e0bb2909042d34e381d8904d70089075498e93fafa4ce32cae9d98d21f874ebb16f815206d49c671f1374882578cbec307f69ec1778ee5a22af4813a1fdd78bf1d47a17e1e75e685c31f84d214d50109fdebe134f4ae6f0d377ff7dedf6a54b75250920a4d884dbb7d7ad271ecb75c07c2644def71b5acd08288d1ef7199697013c615ee5f01faa423a47c020000",
    ],
    [
      "ETag",
      "JyVwgQJw6zl6VqCY6DRIqA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `amount` > ? LIMIT 1",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-108-1602380499267",
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
      "0002ff8553eb6fa24010ff57c8de97bba40a288a9a989e517a25f1d1436c73afe8b20c745b6029bbb4691afff71ba0f691e6ce4f2c33bfc7ecccec13b9e559484624e0f15d09c5e3a71b119013028ac6185d789bd9cfded9b967af8341e0c801cdf5f9c3788c085eb1244df3045a5294050339daacdb7121ca9c1642b450a8651a8396d9373add81610d879dbe8d44094934e7d92dd2af95cae548d70fe6ed588838019a73d966227d89ebf71d3d2fc40d3025f5f79e3ada48fd88eb692218555c64e3cd1a2b2825145b48294fb086576a187c7dafdde6346dc708bee70c2863a2cc5455174a3091453c2e8b5a958c9e485de79b03593b7367ea6bd3d566e97fded1b422efbe68546adb6d01b24c9476e6ad16da2e47af6b2a41eeb4ab73c773340c1522e2096c79b8d3c6daa93659ce30faaca1fd2e0da30b189ebb0bd7d74c2c2704a9785617e3d32081aa90e786b91fe75411a842cb26b9b58d3e3507c63088029b45836e2f880c0870e0768f7603830d2db0c20028f254a55eb36826b20e744c082c6a836576fb006664d341cfb0f1c8428b5a26b6add30d42b23f210f055730e3321792374d23579eeb3b5bdfdb2ca713dfa9af11516cccac29aebac4db3a155e1241ffb9d7beca72814ed504dca5ef7893a9ef5e3acdd0e71053f6b8bec3b147349180685ad01414140b1162d3c8c56aedfaee6a399923a39ee4c50121c9e8d7d32bc17fcceb2eabfa5b79f5addaff00b8a4495923ee9b0331c97e7ff26f85b3f96a725ca3dd43c4fe0f8270d11b05f27de3783f4813f220820232767c03105c278e3fd8c3e341303e1ff4910aff71e198ac5c5801cde2f1b42eb161f786b81206a9c185fa90ebf4cc43872b8d4a1152c8d4f3959ac75335ac4e95f2058449dc97a5bbfc86d9bfa4abc8f6be040000",
    ],
    [
      "ETag",
      "MRUDZ5FHR7Sb8bEs8ap/Lw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-108-1602380499267"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff2d90614f83301086ffcbf9d1118119b691ec835b50979065a24b8c6659baee4066e1b02d2a21fbef5e995f7ad7b74fef7d733d7c96f511623894c5578bbabb2ad03eb92643d32a6bb834541b8411a01505936554f8c15ba3aee5fd66f13b4997af379371319f3361e4075602e21ef212d5d140fcde432d2ae46ffbbd1e263266bbc629abf54bf290642c547474c27a9ba6778b3481f3ee3c82131d32cc51632dd18d6c349d50da954b6b44d528f40cb55aa281011e1e0a4d6d233491c78a17f8532f88fc703cf56f67b3309a30a9480a5b52cdf0f619d8c792152aa31f4e0b01037a6839783e9cdf2c872ed1ee1f5d7416cd46131b1b749efec57f492e93e5ac56b7380229781b8fa5bddccf7f1f9c0da96a010000",
    ],
    [
      "ETag",
      "i6g01Zpl+cFPBx7LCX/73g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "db",
      "6e",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "7fe9b31a048ab0378464110483d0cef0d25428aec2caa50c0acbfe7d66e70fce0fa045c1a424635b3301dec042756757ecc2d63e9a6eb9851f49cafd73e2a6563f14622f22285a7998cfcacc5aebb69581a6594d95d5b1b5869eefd587ace6ef1675af5939792e624d22fc0a3fa79869f9759feb89c7e378e5a1aeabe8229075473d1b66033343605b7fa80b8f93a9e923bb9114a9329ab168a12de80993ef052b7b31f48a208c8c2f3fc681198ea49bd6c73387f0de62fe79ba2919a08ea645043680a98e0f4c12fe9a19d07136e0bf49c6a563afeb91d1810de0f70f8ebdf47405010000",
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
      "Sun, 11 Oct 2020 01:43:14 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-109-1602380499267",
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
      "00000002ff85535d6f9b3014fd2bc87b5c9390842410295a334ab74809e90869d54d1332e642dd124cb1699555f9efbb98a66b55697dc2f63de79e733f782277bc48c894c43cbbafa1da7fba15313921a06886afc3afb96bff4cc777fee3f5c57ee57e0efe78f0389b2182372c4977650e1d29ea8a819c6e37ddac1275492b213a98a8d3379d4e7f6c0e86b66939ce603c41a2843c5df2e20ee9374a9572daeb1dc5bb9910590eb4e4b2cbc4eee5bdf730e89595b805a664efad660f6564ef03d52fb960547151ccb61b74504ba822d8519ea3877fd4243e7d9bbbcbe9ae9b21f88133a08c89ba508d2f4cc14491f2acae7456327d22dae7ab03d9784bcf0d0d26f27a574405ddc18991504523b52fc1380fd62b63e19faf83d53c5cacfd68e37ef756f3aebb5e6e57fec6b8faee059ea1689c83e61a33e354df7cbca07e0252f142ab87cd73a3fcdca1c5fbc134049496d006a38939a67ddb74e2349eb0d41e8ee2d48438b6e3c9880e6393391658490c14795a54b368218a716a8f1370586431731259cec08ea83db6a22165344e691f686293c30979acb882332e4b2179db2172152c422f0a83adefce434f9790d23a5767adb1a680d71e151688a0ffd47468a25ca052d3ee851f7ac1dc0d17975e3be1256494ed37f738e394e612104d2b6c9e826a25126c18f1e72bef0cc17a6217c7a024d35f4fa4e979e3e255cb5fe8210eb0b1abf4976cc260e17fd3768e884b9ad71af2d01e4889966fb036747df88d48dcd2360bf9b1f5826bd23e0590420505fb789a08d6818fffb6e3e62318771f75a4c23b2e0f938d0aaba05d22aeeb7d668f1ccb6eff55452bf52ee68c86c7b635399a8cb083423d97d46e3e56da8ad5f20584419cbfafdb75f80b03b923f77b040000",
    ],
    [
      "ETag",
      "3BlC8Zf6kNwYPyMC+RzEew==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-109-1602380499267"
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
      "c6",
      "ff",
      "97",
      "ed1567d00c95191fb4cc68d00cf1a1691ce7844551e0f0eea8c8f17f6f8fcc9a6aa65e6077f9edf17d1fec611b6721d8b08c57bb024579b64275af0b0f65912849b79c6712c100546c45e4701cbfeeb6edce839c66b79ee80f5f1cb77cee768990c11a5306f61ea218935082fdb8878ca5486b014f8a345b549d01aaccf570ea7bce78487dca43dd8f67aedbebbb033818a7c59029b6a8f87faccd0f066cf8d2c3080566016a2db9e01b0c94a36d4a96e609d6242f4480122ab87ab012bcc899e0bc46935addecd4ea96d9386f9bcd4ea761b5884c78c054cc3382675312088a2b9678fc996c824580a84a721c55d7271ac761e54497ced8b79a95c0af00698be204177f832478cde83b7c60c70cbe732ce545a64ed4b57bd7fbed380af5f3a8ab9e3ff8414845519d10df190da67e6f34d1dcfce8bd5f2a9413c12949893ac4bad96c5fb42cf33dd74baeb3a6f7d84a146840c0e8f7b88915d8114b241ede0098d9b2c87c020000",
    ],
    [
      "ETag",
      "GNizqk89YsSnJRrBGxILyw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `id` < ? LIMIT 1",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-110-1602380499267",
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
      "5d",
      "6f",
      "9b",
      "40",
      "10",
      "fc",
      "2b",
      "e8",
      "fad24a890dc61863c94a2d9bb6548e1ddb3851d456f6712ce41ce00877b84a23fff72e10e743919a873e71ecceeccceede3d905b9e856440021edf9550dc7fd889809c105034c6e8f5ee7af17dbf98fc5948d3f2ee764eaee69378384404af5892a67902a7529405033958af5a7121ca9c16429c62a153c3d04f8d9ede31fb7ad7713a3d1b89129268cab35ba4df2895cb41bb7d146fc542c409d09ccb1613e953bcbdefb4f342ec8029d97eadd94619d97e47f52c118c2a2eb2e17a850e4a09c50652ca13f4f04c0d83cfaf6bb7384d5b3182f79c01654c9499aa7c610926b288c765515725830752fb7c71202b77ea8e7d6d3c5fcffc8f5b9a56e4ed278d4a6db329409689d2be2ce7e7da3647ad1b2a416eb5ab6feed2d53054888827b0e1e1561b6a67da6836c168f5f7b3d475936168ea9d7bbe66a09510a4e2596dc4a741029589c761796f775411a842b926b9b1f51e35faba134481cda2be6905910e41d00f6c8b9a81ce9c2e74c30028f25455bd66d14c6456b76738fda063191098d4647d068e6d863a5861e844a6d185006c6a87e470427e175cc184cb5c48de0c8c5c2d3ddfddf8cbf56c3cf2ddba8d88e250268db9aa89973e153689a07ff475a8b25ca052357d6fe6bbcbd1d8f72edd66e1538829bb5fdde1ca239a4840342d680a0a8a7311e2d0c8c57ce5f9de7c369a22a3dee2c51121c9e0c7c333c1bfcfeb29abfa5b69f5bab5fe11704993b246ec9b0331c8e170f27f152c2cf10b2178c11b3659ac",
      "dde53569424b88a0808cbdbf7d04d789f71feaf1d120189f0dea4885ff78d998ac545801cda5e3696db0615b8ed5b37ba40617ea4daedfe91ea75bd5a82a420a997a6ca97934d5b0ea54299f4098c4bb32f3665f31fb17b41e85abb6040000",
    ],
    [
      "ETag",
      "YjYQJvQDzQs35Iqj9ptODg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-110-1602380499267"
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
      "6e",
      "82",
      "40",
      "10",
      "45",
      "ff",
      "65fa5848001b5b497c90c6545ba3166b9ab43166c5816281a1bb438d21fc7b67b12f3bb377cfcebd9916bef3ea08211cf2eca7417db9c9905f6d13a3690a36526aaa0c8203c82a13723933c1e9235d9f79f5ee552f65f4bc3adc4ec663214cf285a582b08534c7e26820fc6ca15225cab7fd5ef71305e34b6d95f9f26dfa348d4528e96885e576b198448b2974bbce81131d624c516395a01d596b3a61c2739bd6a8b22ed035d4e8040df470ff90696a6aa5895c515cdff75c7fe8058307ef6e340a86f742169428cea91278bb01f1616255c47496b4e00ba0fb5682a7fdf92bf2c026dafda3d185d1ac3589b141ebe95dfd1fc96662c9caba41071225db98e57cbd777f8d5351c06a010000",
    ],
    [
      "ETag",
      "NHs2jZfPwtOW0nKmBJOb+A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "db6e82300000d07fe9b31886ed94bdd18004288ccb0ce00be152412eb683c260cbfe7d66e70fce0fc8cb924e532658471fe00d6cb9a2eecbbdc34e186a1412529f534d1ee89730924ed2f46b33b5a93b1ffdb97c81695db8f172f214d1b2d80898eecf56efc918fbb8b238b2cd36b850bd3e2bc16bd944438ae6c122a4dc22cde376d5f95b95b1e5564c51ef99868662cb0dafd9daf1c72c9b99657f33dcbf3b07356842a713dcfc10a242475c91d0960cda688d975e20493e43960485011551b0142abdb4dcd03a746007e8caef239db2fb737640aaba03ffcd4c6c9c3eaf98e6231dc1ef1f3388a19205010000",
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
      "Sun, 11 Oct 2020 01:43:16 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-111-1602380499267",
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
      "7b5c13a00909448ad628a56db4846c84b4daa6091973a16e09a6d864aaaafcf75d4cd3b5aab43e61fb9e73cfb91f3c917b5ea66442129e3f34503f7eba13093921a0688eafab6bebf3577bb49496dc9a97eae7fcc277b2d9748a08deb224dd5505f4a4686a0672b2ddf4f35a3415ad85e861a29e6ddb3d7b649d0e5c6be879a7a331122514d99297f748bf55aa9213d33c8af77321f20268c5659f89ddcbbbb93f35ab5adc0153d27cab69a28c343f50fd5208461517e574bb41078d843a861de5057af8474d93b3b7b9fb9ceefa3982f79c01654c34a56a7d610a26ca8ce74dadb392c913d13e5f1dc8c65ffaf3c860a26876655cd21d9c18295534568f151817e17a652c828b75b89a458b75106fe657fe6ad69faf97db55b0316eaefcd037144d0ad05c636a9ce95b8017d44f412a5e6af5a87d6e959f3bb4783f989680d212ba603cb646d4762d2fc99231cbdc8193641624899b8c1d3a482ce60d6198264091a745358b96a21c3a8e37483d160f46691a0f136b10bb6ce0c60e0570906d7b994b0e27e44fcd159c735909c9bb0e919b7011f971146e83f92cf27509196d0a75de196b0b78ed51618108fa4f4d8736ca052ab5ed5e04911fcee6d1e2daef26bc849cb2c7cd03ce38a3850444d31a9ba7a05e89141b4682d9ca3f47b09ed8b7635092c9af27d2f6bc75f1aae52ff40807d8da55fa4b3651b8082eb59d23e29a168d86ecbb03a9d0f22dd686ae0fbf11895bda6521dfb77ef883744f21645043c93e9e268275e0",
      "e3bfedb8f908c6dd471da9f08ecbc364abc26ae89688eb7a9fd98e37722c8f6870addec546e3e1b16d6d8e3623eca054cf25759b8f9576628d7c016110e71fe8761dfe02901372be7b040000",
    ],
    [
      "ETag",
      "MV0+K16Ls0sU/GtZCFE5fA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-111-1602380499267"
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
      "000002ff8d92d14e83401045ff657ca549d14a95c407d4aad55a2ba56a624cb3c280d885c1dd45ad4dffdd59d46ad4445f606638b3dc7b6101b3bc4cc087db3c7ba851cdd73234e7b60851d7d268be55546a0407d0888cc9eec5613c9bc8972b3af64ec6c17338ba4c67d9ce0e133abec34280bf8034479968f0af17508a02792d265917e5b4e91c30f3ca0ec751d81f1e725f5062fbe164300876073d583aabc54418316df87facdd2c1db8a7db10535458c668b5548aee31367d6b538ba292d8d254ab18353470f3205354574211b578d2725db7e57aedf58dad76677b7bddeb3229291626a792e1c9980582212364484f6c133c065453b2e3b4b93ef2384f1a27b6ec0f23afd308fc0ab0b6349738fd1b64c17782bfc307f69ec1774e14549766451d0cce82df8ee3503f8fda0fa2de0f421b8e6a8544fdd3de380a4e4796bb79f7be3b37a8478a38498d3644b7ddd9daec7aedb75cf7c866cdeff18daad18158f0ef71941bf05321352e5f019c7be64d7c020000",
    ],
    [
      "ETag",
      "7VGckUlzXoJ6KSAxRPWfkg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` < ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-112-1602380499267",
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
      "4f",
      "db",
      "30",
      "14",
      "fe2b91f7b269b44d9bde5209b1aa645ba4d2b23405eda6d6714e82218983ed8010ea7fdf8943b9080d9ee2f87c9773f33db9e2454c2624e2e97505f2eec3a588c801014d53bcbd2d15779dfe72d557ea179b5d9dc79f67e3e9e1212278cd52342f3368295149066ab25eb55329aa924a215a28d4ea767badeed0ee3963bbefbabde108890ab264ce8b2ba45f685daa49a7b3376fa742a419d092ab3613f9e37de7a6d729a5b804a655e7a567076d54e71dd7a34c30aab9280ed72bcca052203790539e610e4fd438faf252bbcd69de4e117cc31950c64455e83a2f9460a248785a49a34a26f7c4e4f9ec4056dedc9b85d66cb95e841fb734afc9db4f1655d66623415599b6be06cb136b5ba2d70555a0b6d6f9772ff02cbc9222e1196c78bcb50ead236bba38b69e805beb4f65db0ec3c0dc3ff143ab8b09c5a0342f4c3a218d32a853796899ff7a5235816ad46a829b913da4ddb1ed46493462c9d81944890d51348e4603ea443673fbd08f23a0c8d3b5ba61d14214311dc2a0df034699db83c8013b49a8ed240eeb8ec67410d900d1980d466477406e25d770cc5529146fda46ce033ff43661b05ecca6a167ca4828b6e6b849ae2ee2799e1a8b44d01b75edea2817e854cfc05f845e309d85fe99d78c7d0e296577ab6b1c7c42330588a692e6a0419e88189b464e972b3ff4978be91c196696a77b842293dff74f84f0ae345dd6e65b7b0dfbc67f0f38a359651037cd8174c96e77f07f855518f88b6f6f4b4c4bac1665fe220a57bd51203fd65ef0933457012420a160ef6f00824de0fd27bb7f3e08c607843e4ae33f2e1c53b50b93d02c",
      "1ecf4d990d7be08e1cd721062cf5abd8c01eee3b5c6bd48a9043a11f4a6a9e4fdd3013aad4230883b82f0bd3aadd3f37eee2aac0040000",
    ],
    [
      "ETag",
      "wpsi934OS4ssZcCkWd+C8A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-112-1602380499267"
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
      "dd",
      "6a",
      "c2",
      "40",
      "10",
      "85",
      "df",
      "65",
      "7a6bc044b12a78a125b4829536555a2822eb661263934cba3fda10f2ee9dddf66677f6cc37730edbc15751a7308753917f5b54ed5d8ee6d515096a5b1acd5743b54618001a9133795363bbfd997e4cdbf7e7dd79744dcefb6cbd5c2c98d0f28c95807907598165aa61fed9412d2ae4b1e351f98d8c99b671ca7abb8b1fe384858a52276cf79bcd72b589a13ff403b8d029c10c15d612ddca46d105a559bbb45a544d898126ab246af0b06fe48a6c231451c04a108651104e86d1683a1ccf66d1e49ec992a43005d50cefdf807d0c19512674e3b41032a07cc9c1337f5e591eba44877f74d51ad42f8ad85863eabbdeff815c26c3598db2380029f8379e0af3f7ee7f01eeee07536a010000",
    ],
    [
      "ETag",
      "wr4uNx8X8yWMTh3vRhUfIA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "db6e82300000d07fe9b3186281c2dec0a022036162505e1a0a05412695722bcbfe7d66e70fce0f48b38c728efbf6419fe003887463acb3b5dbea9662e68ab4f03161fba59652d33b38f8a42218b26b86cc4533f4562fe6220f64bd7263021bf81ddb714d1a5b2691b81c98249e05aa9d40382132f8686ecbd8be872fdbe57ef9ba21b424744afde16a0ec238369a060735fbf431dcd7e5b1671bf4404a925441a29db6241fab61772ea6a451e1dd13bb406e2e5fcb14c516ee5814cad16dc87aef4c8a68ee7a924e8e075680ceacea28c7d57b0655c35881ff26ee05a3efab45d38e76e0f70fa6be130205010000",
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
      "Sun, 11 Oct 2020 01:43:17 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-113-1602380499267",
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
      "0002ff85536b6f9b3014fd2bc8fbb82640429e52b446296d22256425a4d5364dc8980b754b30c5265354e5bfef629a2e55a5f513b6ef39f79cfbe0853cf13c266312f1f4b982f2f0e55144e48280a229be3eccbb8e9aef8599560fd961fa75f9d3bcb9b99d4c10c16b96a4bb2283961455c9408eb79b765a8aaaa0a5102d4cd4b2ed6ecbee5b9deed07246a34e7f80440959b2e4f9539d5ea9428e4df324de4e854833a005976d26766fefe6be6316a57804a6a4f95ed34419697ea2fa2d138c2a2ef2c976830e2a0965083bca33f4f08f1a4797ef73b739ddb55304ef3903ca98a87255fbc2144ce4094fab526725e317a27d9e1dc8c65dbab3c06022ab767998d31d5c183155345487028c6b7fbd3216def5da5f4d83c5da0b37b3b9bb9ab667ebe576e56d8cfbb9ebbb86a251069a6b4c8c4b7df3f082fa3148c573ad1ed4cfb5f26b87161f075313505a42130c07569fda436b1425d18025c36e2f4a2c88a26134e8d16e64b191034e1c01459e16d52c9a8bbc1b3b7602fd4ed81bb138743a1d08a91d5961af6739036bd47758df26c70bf2a7e40aaeb82c84e44d87c8bdbf08dc30f0b7de6c1ab8ba84845699ba6a8cd5059c7b54582082fe53d3b18e72814a75bb175ee0fad359b0b8739b092f21a5ecb079c61927349380685a62f314942b1163c388375db95708d613fb7e0a4a32fef542ea9ed72ece5afe460f7080b55da5bf6413f80bef46db3921ee685669c8be3990022d3f606de8faf81b91b8a54d1672bb75fd1fa479f221811272f6f93411ac039fff6da7cd4730ee3eea4885775c1e266b155642b3445cd7fbcaee8d86d6b04734b8541f621ddb3ab5adce5167841de4eab5a466f3b1d246ac926f200ce2fc3dddaee35f78d999897b040000",
    ],
    [
      "ETag",
      "hH34tHvo/guhlyA+LZ/GGQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-113-1602380499267"
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
      "4ec2401085df65bc2d09281668e245414412407eaa311a4396760ac56da7ec6e3584f0eece5644a3267ad3ce4cbfd99e73da1d3c2759041e2c92e5a640b53d59a299d8628aba9046f32da74c233880462c997ce86cdcab8d1aca3b8d9dfbe4aee82de8617271c1840e57980af076102728230ddee30e329122af85248b349b979d03669bdbe12c98f6473dee538a6c3fba1d0cfcf6a00b7be7b8180923e625ff8fb5a7bd036b5a4c3146855988564bae688da1e95b9b5aa4b9c48aa64285a8a184cb074b45452e14518527955aedac5273aba767cd6abdd53a751b4c4a0a85492863f876c602c19011724aaf6c135c065459b2e3b8bcbef038894a27b6ec8f02b75e0afc0ab0b6389138ff1b64c12bc1dfe1033b64f09d13291599395257831bffb7e338d4cfa32efda0fb83d086a33a22417fd89d05fe706cb9a783f7f6d6a01e2be22435da106bd57af3bce156df73ed90cd9adfe31955a003a1e0dfe33a31e0c5426adcbf0172a890017c020000",
    ],
    [
      "ETag",
      "ZCq6FqrMlVseCXiVuGboZQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` < ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-114-1602380499267",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85535b6f9b3014fe2bc87bd9a436404808448aba2ca51b529a7484b4aab62931ce81ba034cb1c99455f9ef3b40d3cba6b54f189fef726ebe273f79be214312f1e4ae8272f7ee5644e48880a209defeb676997f76cdfbbded2e330bdd390b2e3e25a3112278cd92342b523896a22a19c8e172d1494a5115b414e218858e4db3776cda46d7728c9eeb76ed011225a4f194e73f917ea3542187ba7e30ef24422429d082cb0e13d9e3bdbeedea45296e8129a9bff4d4d146ea6fb89ea48251c5453e5a2e30834a42b9828cf2147378a26ea28f2fb53b9c669d04c15bce803226aa5cd579a1041379cc93aa6c54c9f09e34793e3b908537f526a136992f67e1fb35cd6af2fa8346a5b65a9520ab546967c1fc5c5b17e8754325c8b576f5c50b3c0daf4a11f314567cb3d646da89369e9d6a4fc0b5f6bd320c8b6160ea9ffba16662421b908ae74d3a218d52a853796899ffefa46a0255a8d5065703c3a6a663b8511c0d58ec58fd2836208a9c68d0a7566430b707bd4d041479aa566f583417397521ee76fbe0c48615d96e97b19852dbb129440eb34cb31f451b7b60f4c9fe88fc2ab982532e0b2179db367215f8a1b70a83e56c320ebda68c98626b4edbe4ea229ee7a9b04804bd52d7be8e72814ef50cfc59e805e349e85f7aedd8a79050b65bdce1e0639a4a40342d69060aca73b1c1a6918bf9c20ffdf96c3c454633cb8b034292e1b7fb2742b82b9a2eabe65b7bd9bdc6ff00b8a469d520b6ed819864bf3ffabfc2220cfcd9e7d7256881d5a2cc0f44e1aab70ae4ebd20bae497b15400c25e4eced0d40701378fbc91e9e0f82f101a18f54f88f0bc764edc24a68178f674d992dbbef3aae6d91065caabf63ae69b8870ed71ab5226490ab8792dae75337ac0955f2118441dc9759d3aafd1f7e4781ebc0040000",
    ],
    [
      "ETag",
      "z3ymIFYi54vym1p/8FRPBg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-114-1602380499267"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff2d90416f82401085ffcbf42a895883c5c48336c6da58da52eda53166c501b1c0d0dd414b09ffdd59ec6567f6edb7f35ea681efb438c018f669f253a1aeef12e477db8468aa8c8d94920a83d003649508a9a66971f65f9ecbe3efdffa7554711d7c2e2e938910263a62ae60dc409c62763030fe6aa05039cab7dd4e771305e3bab4ca3258cf17f350849c0e560836abd574b69a43bb6d7b70a27d88316a2c22b4234b4d278c7869d31a9597193a862a1da1810eee1e124d55a93491238ae3ba43c7f5fa83fb87fed0f707de48c88c22c52915026f3e407c985865215d242db802e8ae95e071779e45f66ca2ed3f3aab19cd9b263136683dfb37ff47b29958b2b2aeb00791926d3ca57cbbb757db72125c6a010000",
    ],
    [
      "ETag",
      "aAinv9MJphxzTO7utyNVGw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "51",
      "6e",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bbf45b0d4310ba3f142b0442104718fb215dad8cc05ada52525876f799bd1bbc1f8009a14a3513ef2903af60c136dc915dc2fda313d0cc1c5c1f8ab2a87186981b5e1c3129ce6bdd18a11326850e5ee622ea2f0295aaa27d9ae64b3eedb91fa1b5752dc78e03945f3f45bdd4447b492dfb39d6b69bb371306b5410667c1232789ade8314655724aaf3f6fed558f08179bcfd5094df93d8f0e2ed7aba79032caae43cf070d57d20c3b4d60f14f3d9dcd6540c0a4bfbbb55874e3624d265eb596003a8193b4955d33d677b17c20df86f36d332d2e7f548b1a412fcfe011e7eac1a05010000",
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
      "Sun, 11 Oct 2020 01:43:19 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-115-1602380499267",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85535d4fa34014fd2b64f6d51668292d4d9ab569712569a902d598cd860cc380a3c02033d418d3ffbe97c1ba1a93f58999b9e7dc73ee07afe89155299aa384e54f2d6d5e7e3cf0049d212a710eafcfcb6ae7dd4dfcdc7cb8bf25cfd3a7e8b05e5d2f1680601d4be0b22ee840f0b62154ccf7e1306f785be386f301241a98e66460dac6683c332cc719d953200a5a641b563d02fd5eca5acc75fd243ecc39cf0b8a6b26868497efeffa61a4d70d7fa0440afdb3a60e3242ff46f567c109968c578b7d080e5a419b98969815e0e11f354dce3fe71e325c0e73001f18a19810de56b2f3052908af3296b78dca8ae6af48f9fc7040a1bb7157914678d196555ce1929e69299638962f35d52e82dd56f3fc8b5db05d46dece8fc3d5a5bb5d0e57bbcd7eeb87daeda51bb89ac4494115575b68e7eae6c305f4532a24ab947ad43d77ca6f1df2be0ea62380b4a07d309e1a363667869364c99464b3f124c90c9a24b3643ac1e3c4208e45ad34a118784a54b170c52b6b34c2a9631bb1654fadd8b2d2598c4d27892756928d1d9b18a63d46c733f4dc3049d74cd45cb0be43e836f022378e82bdbf5a46ae2a21c36d21d7bdb1ae808f1e251408a0ffd474eca28c8352d76ecf8fdc60b98abc1bb79ff086e698bc844f30e30c1782021a37d03c499b2d4fa161c85f6edd3580d5c4ae4e4181e6bf5f51d7f3cec58796bfd32318606757aa2f0aa3c0f37f293b27c40d2e5a0539f4075483e57ba80d5c1fff0012b6b4cf82aef76e7087faa78066b4a115f97e9a005681efffb6d3e60318761f7484843b2c0f119d0a6968bf444cd5fbc69e388eed5848811bf9253633ad53dbba1c5d465ad24abe95d46f3e54da8bb5e21d044198bfafda75fc0ba4c55d657b040000",
    ],
    [
      "ETag",
      "wAnOIY5Ng1jhWcw7qTvDCQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-115-1602380499267"
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
      "92dd6e82401085df657a0ba9584525f1425b6b49d4fa83696263cc0a03a2c0d2dda58d35be7b67a9b54ddba4bd8199e19be59c0307d8c559000eace3e8a940b1bf88504d74314559244ad22de799443000158b887cb0acf922b75efb9bddba7f595dd4c66e184fda6d22a4bfc19481738030c62490e03c1e206329d29acf9322cd56656780dae77a38f3a6eea84f7dca03dd8fe68341a73be8c1d1382f064cb155c9ff636d793460cbd7530c5160e6a3d6920bbe455fb9daa664699ea02979217c9450c2e58348f0226782739326a665d54dcbae54af9a955aab55b51b4426dc672ae619c1f3190904c5154ba6fc856c824d80284b721c96d7671ac741e94497eec8b36ba5c0af00690be304577f832478c3e83b7c60a70cbe732ce545a6ced4ede0bef3db7114eae751371daff783908aa23a239e3beccdbcce70acb9e5c97b77af508e05a72425ea10ad4aad596fd895f75cafb9ce9adee32851a0013ea3dfe32e56e0842c91787c0384c819b37c020000",
    ],
    [
      "ETag",
      "W11UZp1zGhkbG/2Z4PIfiQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `date` < ? LIMIT 1",
        types: ["INT64", "DATE"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-116-1602380499267",
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
      "7b",
      "6f",
      "9b3010ff2ac8fb67939a60f2802452d44509eb90d2a44b48aabd941863a85bc0d4369daa2adf7d6768d656d55a0909b8fb3deecee70774c38b188d50c4d3db8ac9fb0fd722422788699242b4d8fe9850b72c965bbb3aeb1459c5f1854cc7634070c352242f33d652a29294a9d166dd4ea5a84a2285688150cb71dc96e3e24e77807bc361c7f580a85896cc797103f42bad4b35b2eda3793b1522cd1829b96a5391ff8bdb771dbb94e29a51adec979e36d828fb1dd7d34c50a2b928c69b3554502926772c273c831a9ea871f4f9a5769b93bc9d02f88e5346281555a14d5d20414591f0b492b52a1a3da0bace671f68edcffd69684d979b45f8714f7243de7fb288b2763bc9549569ebcb6a796eed4bf0ba228aa9bd75f9d55ff91684a44878c6763cde5b63ebd49a2c66108d89667beb5785719742701e9c07a1e5403131539a17752921893266ca781c57f0fa940c8168306c923b0fbbc419e06194441e4d06dd7e9460164583c8eb936e84e9b0c77a71c408f0b451af59a41045ec3809e9f792846042bc68107b0cc75e8f7459427a5dd7259e17514c303a9ca03f926b36e3aa148a37234397ab20f477e16ab3984e42bf6e2321309659539c69e2799d1a9a04d01b7d1d4c960b7032f30f16a1bf9a4cc360eb37473e6729a1f7eb5b38f484648a019a489233cde4b9886168e862b90ec260b998cc81519fe3c511a1d0e8e7c31321bc2feb29ebfa6dbcdc5eed7f046c4956d588bbe60339e87038f9bfc2cc8ce04d810eeee016eeb49c3e28fd06286c7a2382be6dfcd577d484562c619215f4fd2500709d78ffc61e6f0f80e1fe808fd2f00f3b479571a19235bbc7f3bad386ed62f3a01a2cf5ebdc70781cb2d1308a2c",
      "67857e6ca9b93d666675aa52ff4090849559048b33c8fe056140b01ebf040000",
    ],
    [
      "ETag",
      "nVZAc6pnOV/uG2nlui0Prg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-116-1602380499267"
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
      "000002ff2d90416fc2300c85ff8b775c2b51d81854e230101a4c0c8d763d4d0885d474656ddd25ee2654f5bfe3945d62e7e58bdf935bf8ceab144238e6d94f83e6729721ef5c13a16d0ab6526aaa2c8207c82a1372715cbdd5ab4912458f9a83f8f53e4e55b19bcd84b0fa0b4b05610ba71c8bd442f8d942a54a946f8783e9270ac697da29ebedc7f26519895052ea846db2d93ccf374be8f69d07673a46784283954637b2367446cd6b97d6aab22ed0b7d4188d167ab87fc80c35b53244be287e108cfd603c188e268387e974387e12b220ad38a74ae02406f161625544f427692110c0f4ad043ff5e7afc8239768ff8fce2f8cf6dd90185b749e839bff825c2696ac6c1af4402bd9c62ae7dbbdbb0254dfaca76a010000",
    ],
    [
      "ETag",
      "CbHMpH8URR5ct1SJ+SdalQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "db",
      "6e82300000d07fe9b39a0dead6ee4d3013c6d5800e7921a474dcdbae306d31fbf7999d3f3877501242a7a998794f197803ba34f0866c3c8e2cb823c1f53b28bccad91fdb6cc068187528961c26cb2d31b3cac0fae2441277080ab7af6c2cd77eca4f2a17a2d0a7668e5be309857353ebddb84818f863d63d73b30b0fac35b4247211b1a2f999452809c7cfb4fe715fb03bdce286251f2861ea8bdba6ae6de8ab244adb7703f333851e593b64768efbece041124c976dcfb915a86befcca58e5e1bc9586e35135801aa442be954b48f99b9c57805fe9bc5ac057d5c2d5a4a2ac1ef1fd5044df605010000",
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
      "Sun, 11 Oct 2020 01:43:21 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-117-1602380499267",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85536b6f9b3014fd2bc8fbda249027448a5694d03552423a20adaa6942c618ea1630c1a6535be5bfefda345dab4aeb276cdf73ee39f7c10b7a60558ae62861f9a1a5cdd3b77b9ea0334425cee1757f18bbe5ca76cde7db541ecce787abd584ba8b05209862095cd605ed09de36848af93eece70d6f6bdc70de83443dcb9af5aca9391cd9e6d87186d31910052db20dab1e807e27652de683c149bc9f739e1714d74cf4092fdfde078fc341ddf07b4aa4187cd41c808c187ca1fabde0044bc6abc53e0407ada04d4c4bcc0af0f08f9a26e71f73f7192efb39801f19a19810de5652f98214845719cbdb466745f317a47dbe3ba0d0db78cbc820bc68cb2aae7049cf8c144b1ccba79a1a17c16e6bacfd8b5db075a3f5ce8fc3e5a5b775fbcbdd66bff543e3e6d20b3c43e2a4a09a6b2c8c737df3e102fa291592555a3d52cf4af9b543ebcf8351049016b40bc633738a2ddb74922c9991cc1e4d92cca4496227b3091e252671c6749c2614034f8b6a16ae7845edd4b2cccc8987d84ce2f138b3633cb2add89c65ce304b6d274d6d743c437f1a26e98a899a0bd67508dd04ebc88ba360ef2fddc8d32564b82de4aa33a60a78ef51428100fa4f4d4715651c9454bbd77ee405ee325a5f7bdd843734c7e4293cc08c335c080a68dc40f3246db63c858621dfdd7a2b00eb895d9d8202cd7fbd20d573e5e25dcbdfe8110c50d995fa8bc22858fb3fb49d13e21a17ad863c76075483e53ba80d5c1f7f0312b6b4cb827eeebde016754f01cd68432bf2f53401ac035fff6da7cd573f73a87484843b2c0f114a8534b45b22a6eb7d654f4d6b34b5910637f2536c32764e6d533954465ad24abe96d46d3e54da89b5e20d044198bfafdb75fc0b518f666d7b040000",
    ],
    [
      "ETag",
      "Uq4AmD8A0zYdtq0zkPD5eA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-117-1602380499267"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92dd4ec2401085df65bc2db128166cc205084a13407eea95316469a7a5baedd4ddad8610deddd98a68d4446fda99e937db734ebb83a7ac88c18775963e57a8b627299ab92d16a82b6934df4a2a3482036844ca244dd4a85a1bf96cdce1e960f414cc271b4cbb5d2674b4c15c80bf832443196bf0ef7750881c792d2259e5c5aaee1c30dbd20e97e12298de709f536cfbe9dd78dceb8f87b0778e8bb1306255f3ff587bd83bf048eb0526a8b088d06a29153d6264026b538bbc94d8d054a90835d470fd2055549542113578d26836db8da6e79e9d77dcd6e5e599d7665252244c4605c3774b1608868c900b7a659be031a0ea921d27f5f585c7595c3bb165300dbd562df02bc0da924ce2ea6f90056f047f870fec90c1774ee45415e6485d8f6f7bbf1dc7a17e1e35e885c31f84361cd5110983c97019f62633cb3d1cbcf7b706f54c1127a9d186d8745b9d8bb6e7bee77a45366b7e8f6f54850e44827f8f5166c04f84d4b87f03afcf03947c020000",
    ],
    [
      "ETag",
      "oMrHubtlqt0E/DHkIQMheg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `stamp` < ? LIMIT 1",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-118-1602380499267",
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
      "0002ff85535b6fda3014fe2b91f7b249059c4b1382843a06d99a094207a1dd55e01827f548e234765a5515ff7d2749e945d5da074474ce773937dfa11dcfb76880229e5c55acbc7df75744e80831451288e6c945b00b4f47cb53fdeb84a753f1097fdfdd0c8780e0354b92ac4859478aaaa44c0e56cb6e528aaa20a5101d10eae87abfa3dbd830fbd8725dc3768028591a4f79be03faa552851cf47a07f36e224492325270d9a5227b88f7ae8d5e518abf8c2ad97beed9031bd97bc3f5241594282ef2e16a09155492956b96119e420d8fd46df4f1b9769793ac9b00f89a5346281555aeeaba40828a3ce6495536aa6870879a3a9f7ca0a537f5c6a1369eaf82f0fd86643579f34123525baf4b26ab54699f17f399b629c0eb92482637dac5a9b7f034089522e6295bf3ed461b6a27da289840542aa86ea3fdae30362944a7fecc0f351daad932a978ded412922865751df7f3f25faea92610058e6d72ed609be87dec4671e4d0b86f1e47316651d48f9c63624698ba16b3b61123c053b57ac322b9c82daa63ecd0881e5b7dcb325cf81187daaeed9816b6e328b2756a31d341fb23745372c5265c1642f27666e862e187de3a5cac82f128f49a3662027399b4c5d54d3cad534193007aa5af7d9de5029cea05f841e82d46e3d03ff7da9d4f5942e8edf20ab61e935432409392644cb17226b6303474365ffaa13f0f465360348b3c3b20241afcba7b2484b7453365d5fcd75eb6d5f81f00e724ad1ac475fb8174b4df1ffd5f21f467de321ccdce5e5731b0813bd8e8e8c7a16e0c7473a05b5d8cf14f10ff0344b8fe56177d5b798b1fa80d2d58cc4a96d3b7ef02c04de2ed577c7851008637053e709d8ac3195259bbd092b5e7c8b3a6f9966d63d3705dd4804bf52267e9fdc3dc6b8d5a91652c57f72db52faa1e6393aae40308927045811f7c81ec3fd730c6c2d3040000",
    ],
    [
      "ETag",
      "ngWNkTHASH1JDilLoB0Xkw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-118-1602380499267"
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
      "dd",
      "6e",
      "c2",
      "30",
      "0c85dfc5bba51285f12b710153c72a756c2be3629a100aa9db95b575e7a44308f5dde794ddc4cec9179f235fe13baf1298c331cf7e1ae4cb5d86f6cd35319aa6b0464a4d9541e8015a9509a99fcb6d58ad6b7e2c137a19f179f4c193e5622184d15f582a985f21cdb1480ccc3faf50a912e5dbe1c0dd44c1eca5764ab8790fd6412c4249891336bb285aaea200da7ddb83131d634c91b1d2e846d64c27d43674698d2aeb023d430d6b34d0c1dd43c6d4d48a893c513cdf9f7afeb83f184efbf7b3d9603c11b220ad6c4e95c0bb2d888f25ab8a98ce92167c01b86b2578da9dbf220f5da2fd3fbaba5834af4c626cd079f66ffe0fe43259c96ab9c11e6825db78caededdefe018cee1ea16a010000",
    ],
    [
      "ETag",
      "cMmSInGprFmdoO5rw5Yr7A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff1dcf4b5283300000d0bb645d3b1190127720d0f2298ac448bbc960088885041398963adedd8eef06ef07548c71ade9244f5c8047b054065ab375221dcf7239aa91e19a85af37a82ff953982d5d93ccdf469b5f23bf1becd0ddab6331638704e941c2d6ca85f04a65b690b44243067718d26d8ceb97d1934a6a735736290de51777113d5cefe7e1394f93f15cf7f16b7b81f07d682cbc2cd9f856a03bc244639613fef0336dc39e54a7cf241882236fe61ae3d01b6c8744348e38749d648bf7390d3236f4e98608651a0cac00bf8c9de29a76b799f980d00afc37e9b48cfc76f578a5b802bf7f8811e35405010000",
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
      "Sun, 11 Oct 2020 01:43:23 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-119-1602380499267",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85535d6f9b3014fd2bc87b6d02210448a4688d52b2664ac806a4e9344dc8760c754730c5a65354e5bfef629aae55a5f509dbf79c7bcefde009fde6e51e4d10e1f943c3eae3a77b41d005620ae7f07a3bdab8ee22181e4bf366b14b369177bbfb9a4fa780e02d4be24355b09e144d4d999c6ce37e5e8ba6c2b5103d48d41b0cc6bd816bd943df72c663dbf580285991ad78f91be8774a5572629a67f17e2e445e305c71d9a7e2f0f26e3eda66558b7b469534df6a9a2023cd0f543f178262c54539ddc6e0a091ac4ed901f3023cfca3eec9e5dbdc7d8e0ffd1cc08f9c324ca9684ad5fa8214549419cf9b5a67459327a47dbe3aa0385805f3c4a0a2680e655ae203bb30f658e1541d2b662ca2cdda58868b4db49e25cb4d98c6f3eb603debcf37abed3a8c8ddd75100586c2a4609a6b4c8d4b7d0be102fa7b26152fb57ad23eb7cacf1d5abe1f4c4b0069c9ba60ea592e1ef8d69864c4a3993f1c91cc6284f8c41be121b1e8d861ce9e300c3c2daa59b814a5ebbb7bea647eea79233b757c42527f3818a78e47eca14bd8c0ce7c74ba407f6aaed815979590bceb10da45cb244893681bce6749a04bc87053a8abce585bc06b8f0a0a04d07f6a3ab5512e40a96df7324c8268364f96374137e115cb313dc60f30e30c1792011ad7d03cc5eab5d843c350385b075700d613fb760e4a34f9f984da9eb72e5eb5fc859ec0005bbb4a7f519c44cbf08bb67346dce0a2d190c7ee802ab07c07b581ebd32f40c2967659d0f76d10fd40dd53c43256b3927e3c4d00ebc0c77fdb79f3010cbb0f3a52c11d9687ca5685d6ac5b22aeeb7d66bb9663d9fa5f55b856ef62b6e39ddbd6e66833b2032bd57349dde643a59d58235f401084f987ba5da7bfa990774f7b040000",
    ],
    [
      "ETag",
      "X5O66FE3yn/VFWTOR7XWJg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-119-1602380499267"
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
      "cb",
      "f8",
      "6849b859a0090fa0dc12402ce50543c8d24ea1b8ed96ddad8884ffee6c45346aa22fedccf49bed39a73dc2539404e0c02a5aef329487ab35ea0753b8a832ae15dd529128040b50b3b521aff90ee3ca66fbf2da1ecff7fd70deedb5f7cd2611cadf60ccc0394218210f14388f4748588cb4e60b9ec5c932ef2cd087d40ca79e3b18f7a88f4560faf16c386cb5871d385997c58069b6ccf97fac2d4e166cc5cac51025263e1a2da9145bf4f5c0d8542c4e391694c8a48f0a72387fb096224b9914a2409342a9d42894ec62b9522f561b8db25d23920b9fe9482404cfa62410b4d08cbb624f36c12640e625390ef3eb338da3207762cac1d8b3abb9c0af00690b238ecbbf4112bc61f41d3eb07306df39168b2cd117aa3bbc6ffd761c85fa79d45dcbebfc2094a6a82e88371875a65e6b3431dce2ecbd7dd0a8265250920a4d88a562b57e53b38befb9de0a9335bdc7d132430b7c46bf473fd2e0848c2b3cbd01e341910e7c020000",
    ],
    [
      "ETag",
      "b+lqem3hjxzBNZwHfZFGBw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `amount` < ? LIMIT 1",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-120-1602380499267",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8553596fda4010fe2bd6f6a55503becd21a1148169ad1248c124aada0ad6cb986c627b1def3a6d14f1df3bb6430e452d4f9899ef986b1fc80dcfb6a44f22bebb2da1b87f772d22724240d11d463ba139915fc74c37ae938933bcbaf9b3d43f0e070344f08a25699a27d092a22c18c8fe6ad9de15a2cc6921440b855aa665b44ccfb0ecaee1f47a96d741a284249ef2ec06e9574ae5b2afeb07f3f64e885d0234e7b2cd44fa14d7ef2c3d2fc4353025f5d79e3ada48fd88eb692218555c6483d5122b2825146b48294fb08667ea36faf45abbcd69dade21f88e33a08c893253555d28c14416f35d59d4aaa4ff40ea3a5f7c90a53ff547a1369aaf66e1fb0d4d2bf2e68346a5b65e1720cb446993c5fc4cdbe4e8754525c88d76f9c55ff81a860a11f304d67cbbd106daa9369c8d31faa8a1fd2c0dc366189e066741a89958ce16a4e2595d4c48a304aa421e0716bcdd5345a00a2d9be4ba6378d4ec1abd288e3a2ceeda6e141b1045dda8e3523b3258cf01671b01459eaad46b16cd446677cdae03b6c9cc8e4d3ddb76c1750cdba1b665d9b16bd3ade578aee5f5c8fe84fc2eb8823197b990bc191ab95c04a1bf0e17abd96818fa751b31c5c18c9be2aa265ed6a9b04904fda7af7d95e5029daa0d04b3d05f0c476170e1374b9fc28eb2fbe52dae3da6890444d382a6a0a038135b1c1a399f2f833098cf865364d49b3c3f2024e9ff78782684f7793d6555ff565e9e53fb1f001734296bc45df3414cb2df9ffc5b61329d0f8f6bb45d44ec7f21080fbd5120df56fee23b69420b88a1808c1dbf0004d789e30ff6f078108ccf077da4c2ff78704c562eac80e6f0785a97d8b03dc3350c8bd4e042bdc9994ef730e14aa352841432f5d852f378aa81d5a9523e813089f7320b669f31fb170fdeca86be040000",
    ],
    [
      "ETag",
      "7T1FsKDc/0jlF4AhkxS/+A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-120-1602380499267"
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
      "00000002ff2d90416f82401085ffcbf40a0960ab95c4436d4c3531d6d2da4b63ccba0e140a0cee0e3586f0df3b8bbdecccbefd76decb74f093d72788e19867e716cdf52e437e734d82b62dd94a69a8b6081e20ab4cc873f6b9e4aa7878559a92b42aca683b195d663321acfec64a41dc419a6379b2107f7550ab0ae5dbe160868982f1b571ca6af3b178592422547472c266b75e3fcdd70be8f7bd07051d134cd160add18d6c0c15a879e5d25a553525fa965aa3d1c2000f0f99a1b65186c817c50fa3c00fc741347a0ceea7d3683c11b224ad38a75ae0dd3b880f13ab32a18ba485500033b4123c1dce5f91239768ff8fceaf8c766b488c2d3acfe0e6ff4c2e134b56362d7aa0956c6399f3eddeff01d09a73826a010000",
    ],
    [
      "ETag",
      "qgVHtmj5OacoRfmjl2P73w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:43:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
