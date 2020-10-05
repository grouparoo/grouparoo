const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1601915913779";

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
      "8b08000000000002ff1dcfe17243300000e077c9efaea758b17fd2b9542945ccd51f67599aa9969250b1dbbbcfed0dbeef07948450ce0bd1d6b4016f4096aab5266baf35a1f62487d37b6785aeefed6d81735dba26dc79ea44f4f802d93cd5fe1623bcbda08f9e9f101d0741936f05dfb3236ae90d732807f992f00809e52bcd4236659accc4cdd39283be2306e43d1367660701521d2f8fa254793a883dbb845ced419f731e9ef7359f63559561e5c63855373e4b3776abc40bd3eed078bf3686f5c96adde99a2430baf138face506253466005e8f4a87aca8b6a9969af96b502ffcd42c8075dae90963dedc1ef1f49ec5fc305010000",
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
      "Mon, 05 Oct 2020 16:38:33 GMT",
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
      jobId: "grouparoo-job-1-1601915913779",
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
      "fd2bc8fbda3c48421322456b94d23552423620ada66942c65ca853c0149b445595ffbe8b69b25695da4fd8bee7dc73ee8317f2c88b984c49c4d3a71aaae76f3b11910b028aa6f86aefc442d15bb1a2db82ef0efbe0a6bc1b1c663344f08625695e66d091a2ae18c8e9d6efa695a84b5a09d1c1441db3635ef64ddbb46c73381edb489390252b5e3c22f941a9524e7bbd9374371522cd80965c7699c8cfefbdfda0575662074cc9de7bc51e8ac8dea79adf33c1a8e2a2986d7dd4af255421e49467e8e03f318eaede67ee729a775304ef3903ca98a80bd5b8c2144c14094feb4a6725d317a25dbe3910df59398bc06022abf3222c680e17464c150dd57309c68db7591b4bf766e3ade7c172e386fee2d659cfbb8bcd6abb767de3fed6f11c43d12803cd3566c695beb97841fd18a4e285560f9ae746f9b53fcb8f436908282da10d86e3fe2535277d3b4aa2314b26432b4afa104593686cd161d467f60846710414795a54b368210ab0ec845943338411c4e128b120b4e3240a81999669d1f1646003395e9043c5155c73590ac9db0e917b6f193861e06dddc53c70740909ad3375dd1a6b0a78eb51618108faa4a66313e502959a762fddc0f1e68b6079e7b4135e414ad9b3ff84334e682601d1b4c2e629a8d622c6861177be76ae11ac27f6f3149464fae785343d6f5cbc69f9991ee0001bbb4a7f891f784bf787b67342dcd1acd6907d7b20255a7ec0dad0f5f12f227147db2ce4d7d6f17e93f6c983042a28d8d7d344b00e7cf5a79df61ea1b8f9a82215de7175986c345805ed0a715ded993deadb63a2c195fa101b0d06a7a635",
      "399a8c9043a15e0b6af71eeb6cc56a79066110a7efea661dff01082b690975040000",
    ],
    [
      "ETag",
      "9joCtaHoLaUnijwvTFpV2w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:38:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1601915913779"
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
      "0002ff8d92dd6e82401085df657a8b89a4fe92788196aa895aab78d518b3c2a0d885c5dda5c61adfbdb35b6b9bb6497b0333c337cb39074ef09ce63178b04e37fb12e5f16683fad114335425d78a6e85c8158203a8d986c89aec6dddbcc5d53e6866c7d7783a58f7db874e8708156d3163e09d204991c70abca713e42c435a8b042fb37c653b07f4b130c379381b4efad4672236fd64311af9dd510067e7ba1833cd5696ffc7daf2ecc04eac6798a0c43c42a3a5906287911e1a9b8a6505c78a12a58c508185ed838d1465c1a410159a54dc8adba8ba6db7de766f9bcd36715c444ca7222774312779a085667c260e64121a04485b92dfc45e5f689cc6d687298793b051b3f2be02a42c4939aefe0649ee96d157f8c02e097ce75826ca5c5fa9fbd183ffdb7114e9e751777e18fc2094a6a0ae48381c07f3d01f4f0db7bc78ef1e35aaa91494a34213a15badb5eacd46f53dd59e3049d37b3c2d4b742062f4730c520d5ec2b8c2f31bfc4619c57a020000",
    ],
    [
      "ETag",
      "4rCh1n8lsqE7myzdPHbG9w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:38:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
        query: "SELECT * FROM `purchases` LIMIT 10",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1601915913779",
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
      "000000000002ff85526d6f9b3010fe2b91f76d6a02841042a4688b52362125994ac8baed4b6a9b833a054cb1c91455f9ef3b20cd5a556abf81ef79b9e7ee9ec883286232254ca48f3554c74f7bc9c815014d537c3ddea4bf6af1c7daeb958c0ef984f9c7e0763e9b2142342c45f33283be9275c5414db79b415ac9baa495947d14ea0ffbd6d8b43ccbf12cdb753da429c892a5281e907caf75a9a686f16c3d48a54c33a0a550032ef3cbbb71181a6525f7c0b5325e3b1a68a28c773dbf6492532d6431db6ed0bf5650ed20a722c30efe1363f6f5b5f240d07c9022f8203850ce655de8a62b94e0b248445a57ad2a993e91b6cb171f64e32ffd45d4fbdcfb16fe58f5ee4a54bca70ad45d6f19ac82a86799281383d2a2684522ca326804ce3183b7b36d0854a34857dcb9e6985a13d36309737932b11d9698c0d884b90eb599c9bd118c62061479ba516f59b490c570c46ce65293519e8c1d67e28c4d3b763d7047e678388c6dcf19595e3266e47445fe5642c3b550a554a20b4b6ec320f27751b85d2fe691dfc648689de9ebaeb926c4cb3e358644d03bb94e4d5548746a2617ac233f9c2fa2e0a7df2d6b0929e5c7cd23ae2ba1990284e392a36389f322375b3ffc4dbaa71012a8a0e01fcf11c16de1a3537d3e1c84e2e9a08bd2f88f4be3aaf1e01574cb1379d3cb85ede054490baef49b9a6737ca978369142187429f037587434e67b35a5d4058c499af83f577acfe033b7c5abfb6030000",
    ],
    [
      "ETag",
      "yQgXuiZ1jtMoTvm8bEyIWA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:38:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1601915913779"
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
      "6d",
      "6f",
      "da",
      "30",
      "10",
      "c7",
      "bf",
      "8bf796503b0f0423f545baa61d12651da49ab6a99a4c30342cc4c1765a6588efbe4b5691b01936fa26395dee777fdf9d735bf423c9e6688066c972537059be5b72fda932265c15a956f0ca45a638ea20aed91222bfe2702937ce68635fac7e7e714b7573fdf922b8bc8408153ff13543832d5a243c9d2b34f8b645195b73c0923904e832afece1380a6fc30938d6625e39c60fa35170350ad1aeb30772291649cabf9f0f16327e62f5915fb16934198e6f4f536c2d8a4c37cccde863109d46e64cb744ae83283c1daf345be70d100defc26914dcdd9ba8c75d07adc46cc2175cf22ce65553a1232b1eeb61352f05a9526e2901c57285eae0fac3528a226752080b3c966d911e2694789438be4f212e1531d389c820f4610aa7435a68964ec40b4c0b110c11b2b661728bfaf90c7ea72ee3d09a6ac95e665cca72efb2bbb8b1b18d2d6c5bb82148d7eb63df2194ba21ad4b6c6b9086f5ce1569b19508719c9e6f16f1df5e498bad45a80b6d3589788642821cc6d5687789fb77a7bcc34e51ec1e29c26ed873045a5c5d8087a9b90042df28400f046c425cc72cd0c41dc90fbca143e4b0431e5c6b637eff9fe737e7ff63c2d8f7cd0dea1b6ed1ffe4ef1fe6273de7c8bfd0b0ee39022dae16e8f5edfd001e5f7ff5ab5273752f05ac0dc5ab8d417bfeeffdf15e543b0576da40cb827750cc609f7f48341a2c58aaf8ee1783576ac12d060000",
    ],
    [
      "ETag",
      "Z0Egrq3Lq2/jzY4ysFDW/A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:38:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
