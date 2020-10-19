const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1603144935474";

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
      "82300000d0bb646d9d160892eea4824260100345b26120a648f91344a1d3bbd7e9bbc1fb0129635c88646c4bde807730a7125ab3356e355df1b9ef95df2ae7edce76a0726c78e2561ead0c682cf3e65cbc3a479865028f9753306f5211b928c6b88bb217947bd1e93ec290161df1eb4f5c1399955a635b4d212f93fee622785554e1d0831e76b2cb905f912436f6f9a47ee5694058e54a8152d29de90b96a3ed1d2ffd479e0596ba70d3263d2c0e8fd0a8edf99a6e63b3df9f25db6a27734be96d20975b44660dac007f74c5c045523c6732446805fe9bc93877fc79d5793af001fcfe01e8b2e6e805010000",
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
      "Mon, 19 Oct 2020 22:02:19 GMT",
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
            parameterValue: { value: "profiles" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-1-1603144935474",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b6f9b3014fd2bc8fbb83ca0214f295a2342b74809e980b49aa609d9c650b780536c5a5555fefbae4d93b69bd47ec2f63de79e731f3ca33b5ea5688608cfef1b563f7db915047510533887d72dbbf396bb4bea6de232fe8abd9b627b7ff9389f03826b96c4e5be605d299a9a3239db45bdbc16cd1ed742742151d7e93a237be0b8ee743074c72ed0242bb235afee807ca3d45ecefafda3742f17222f18de73d9a3a23cbdf71fcefafb5adc32aa64ffbd621f4464ff43cd6f85a0587151cd7711e83792d5092b312fc0c12b3125e7ef33f7382e7b39801f38659852d1544abb8214545419cf9bda6445b367645cbe39a0c85ffb5e6c515134659554b8641d2bc50a27ea69cfac8b70bbb156c1c536dc2ce2d5364822ef87bf59f4bced7ab70922ebfa871ffa96c2a460866bcdad73730be002fa29938a57463dd6cf5af9a53fabff87a209202d591b4cc6f6083b137b4a3232a6d964302499cd089990f1100f884da72e7353c230f08ca861e14a54a3333b4deda193a4646427eed968904c307193cc9dba439266d419bae8d0418f35576cc9e55e48de76085d87abd84fe27017788bd8372564b829d4b235a60b78eb51418100faa0a6838e72014abaddab20f6c38517afaefc76c26b9663fa14ddc38c335c4806685c43f314ab37228586a160b1f197003613bb3c06259afd7e46bae7dac59b969fe8310c50db55e68ba2385c05df8d9d23e20a178d813cb4075d46c60b6dfaf00780b0a26d12f473e787bf50fb14b28cd5aca29f0f13c026f0d98f765c7b80c2e2838a547087cda1526bd09ab51bc44db127f6743c709001d7ea9f986beb09775ed75d676425abd44b41edda439dad58234f2008c2f003d3abc35fba4ec22d74040000",
    ],
    [
      "ETag",
      "OekCDUPcCMTmT+aChlOqPw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:02:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1603144935474"
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
      "02ff8d93c14ee3301086dfc57b4da56609858dc42185d2ad94b4d086bd2054197b120c4e266b3b5d5555df9d71802e02a470496626dfc8f38fffecd893aa258bd9bd2affb660b63f4a70d73e58826db5b3f46ab0b6c002068e97442e26232eff6453dc886934ce9ccd44915c9f9d1161c503549cc53b5628d0d2b2f876c76a5e01b509d46d55afbb2c606edbf8e22a5fcee653ca2b943e9fdfa469324e276c1f1c1a25777cddf1df68bbdb07ec11ef975080815a809fa531f808c2cdbc4ccbab46c3c0626b0458d6c1dd87d260db708338a0ca201c84a3e1511845bf8e8ea39388388d823b8535a1372b1a8f39745c2ff11f8964e14f224c1793e0a27b6ea8ae6427c487b3793e8abaf9de038532d6bdece40d7cd5f691d4fc9b205d80d27d5009b504d347a966cda534606d2f8976cd9be6808d178bf413c46b6950c97e70a37a00ed3607e0325d245fad966cf37f5717493ef9445847663820f92c9bacf224bbf2dcddebfd8eb70eec9541f28a056f9370189d1e9f8c862fce3947ef263a2776a68580094e3fc06fe5585c706d61ff0cb82194415e030000",
    ],
    [
      "ETag",
      "OE6adVMGovcG4BMtsMcfAQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:02:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hmw` FROM `profiles` ORDER BY `stamp` ASC, `id` ASC LIMIT 100 OFFSET 0",
        types: [],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1603144935474",
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
      "0000000002ff8553db6e9b4010fd15445f7ab10d36d8d896a2d6757085e44b0b38699eccb20c64136009bb244da3fc7b67b19d268a94bcad66ce9973e6b20ffa352b137daac72cbb69a0beff70c563bda383241946efcea9f873f93bce1ce617b3abbf6783c9f597ece404114cb10429aa1cba8237350531dd06bdace64d456acebb58a83be8f647a6d5b7ed8935b41d1b6902f274c9ca6b245f4a5989a9611ca57b19e7590ea462a24779f114376e074655f32ba052182f150d1411c69b9a5f734e8964bc3cd906a8df08a877501096a383ffc424fef6b2728f91a29721f896512094f2a694ca1596a0bc4c59d6d46d557dfaa0b72e9f3df4c05dbaf350fbdcd182d9c2ddcd6741f831121205228d082d087d6ffde3937a46bbdd657117690b7fb3d222ec3265398848dbf8a7aeaf7dbfd08eb45930ef68114bda97b6f4565ea8f54d53db2c16811b6a26fa4a404856b6ae4212e7a01c1de6e6bd5e9622104904ec933bc71c91fed89cc469ecd0746c0de3d484381ec7ce9058b1492736d8490c047952556f59a4e4a5999a634068dfa290da091d382485e120b11d2b1e59436768f62dd3b22cfdb1a3dfd54cc2291315176c3f3dfddcf7427717fadbf57c16ba6d1b29697279ba37a79a78ee536293087aa3af4795651c95d42abc75e8fab379e89db9fbed2f2123f43eb8c1fda72417806852930224d42b9ee0d0f49f9bc00bbdcd7ab654b5f0a4c2fb4ac57f6d5dffe210f221851a4afafe9011dc26defb18c73345281e2aaae0e225c38d52a134680dfbcdb2427939b2edbe39b1f4165ccb57b9d144ddc5d379aa8a5040290f0dedcf547f3c8835e20984495cc81aaf14b3ff0074ba9dbf24040000",
    ],
    [
      "ETag",
      "wWcsxhXbg7iRmAjzV29k+g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:02:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1603144935474"
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
      "02ff9d97db6edb3810865f65a1bd6c2c902275325060ed444dd33a873aeed5a2301889b699d0a697a2930641de7d876aa2432d0b722f926886f33bf3718623fac579109bcc193a7762f9df8eebe7bf97dc7cb30f539eefa4c9e1cf566d72ee9c38dcb0254412cae86476938f4f27b3af89fc70b6da6e9fbe7dfc081179bae26be60c5f9c85e032cb9de1bf2fce86ad39c8440601e6796b9f2fae66c9793205c75a65d671f57d32198d2789f37a520a1642e7665e18a5f07636bdb83aefd649f64732485cc8e3244bbec9b83e4e23b67396659ae7f9913a95cfd9765b89c6d7d7936474d5ad629b4c2b91fd81f2511cab90e6b1527c9a5c8f66ddf11933b5129d8d6649777c6ed8ba96d3ece232b99d8d2e6fba55f3f96afdd467ab7fbc9e38f7ea6eca175cf34dca6d176fb5bae7a9b9b0072487ff2ef920573b9d725b3c082e16965aedb64c2b3500cfc01be000114c694c7c1a5288932a6546a80d847ebf85d41ca30c9353f504c7c3c1082274f10c476551fc7eb4fe82c13e255af0d2f8c2f5a3127969f3fb5f0ef40fff59e4e7a66a5dae5e325949b1ef7a347449e4865ee9347a57452c98cc79fb92e7c72eae641ef2d000790354a5895d3f42be1fe39826714be05fd81b6232c4f40342c566d769ab4f3e65a99035e0c436c9bb9172b0702bea2738beb29e2f71310d5c8a5daf966407617329a62e09f629bc266e4001b815d7ebc425a5e05c73c365cd54bb54a50fa563b97cf378bda83176232814462e26f4e8220741e4927d16d2840e098edba149277495cf68cd0cab2aae0ccf174a67a587a5ef2ed2871ac7c48da1b711fc04ed64870d0afb85f651689339c2116967a69dcc7e2998085d217f51ab4d6e6022bc3be4fd9b87f601b6bd1dd8bcdc38ee53d7e652e459f93e89df448e110ddb91fd4ee4ea93cff84694c66dcaa4a87620cb0bdbef555f1859986038cf30ba8eef6a2f84f688f63182df78637c6074059dbc",
      "6129f8cce5b222fc2a796d4eaf1eac19f4c18dec9c8e5c60f6a376a28e6e46a15b2b6489103658310ac303732bec64adf239e7dad4a6f4e9ee4e18534dadb4b0c35ed58576f47c1f2a6ccfef818276943782114f5b90a326320ec881a91575225782c94e4bceab333b86b73697d5ec9677bf1c51af496dfb19dea9004e493b58d70e04b069b5015fb2c44d68cf4707c656dc098dab8978a6b4593d97e645636c65c29a711f606abb1abb0185d943fad4b5b9e4c5c8f5f7df4db5440b604282f6a185d1efc03fdeee61e36778d7dc680577ba9cdbeb5c0cf91597bb5365a1e0fa31b4899d3829836f379f857186456eafff038a92f76e3b0d0000",
    ],
    [
      "ETag",
      "34a4LTPsBCLTKEl+DhppwQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:02:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "0002ff1dcf417282300000c0bfe4ac4e0304a137a822189506156c2f0c860441904c880a74faf73add1fec0fc828655d97aaf6ca6ee01d0c9966cfe80cb7966b109630e3d3cdce4d25323f3295d7595a6dab0f08e725e33dd61d3377def87c6c6f7961853b6ae37e111adba4080db9a2a70bd5e5ddc5fe31eeb8775fef49b5143841ed46ece486bafb2759e568b16623bf0edfb6669e2bdfc423cf4591ab0747d5d47a60f275800d3c4507de9488e25a79c9b48de39a30e1381aa417a411489643720f3aff284954a2661b24010113c07a514ad6a5e56ba623db9e80ff66aa06c15e5797659249f0fb072448565f05010000",
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
      "Mon, 19 Oct 2020 22:02:22 GMT",
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
            parameterValue: { value: "profiles" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-3-1603144935474",
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
      "ff85536b4fdb3014fd2b91f771f499d097548dae8451a94d214d41d33445b673931992b8c40e5385fadf77ed500642824fb17dcfb9e7dc479ec8bd281332214c640f3554fb2f77929113029a66f8faf0d5d7577dd91fdf48ef7bb64fee8a79ed5d4fa7881086a568b1cba1a5645d715093eda69d55b2ded14aca16266ab9addea0ebf63c6fec9e7a430f690af27429ca7b24ffd17aa7269dce51ba9d4999e5407742b5b92c5ede3b8ffdceae9277c0b5eabc55eca088ea7ca8f92d979c6a21cbe97683fab5822a86828a1c1dfc2726ecec6de6b6a0453b43f0a3e040399775a98d2b4cc165998aacae6c56327922d6e5ab03d9f84b7f1e395ce67551c6252de0c449a8a6b1deefc0b908d72b67115cacc3d52c5aac837833bff457b3f67cbddcae828d737be987bea329cbc1729da973666f015e503f01a54569d523f36c949ffbb3783f14434069054d301e7607b437ea8e59ca863c1db9a72ced026323363ca52eebf2b1075ec28022cf8a5a162d6509d0f75c361ec4d4ebf563afdb4f62d64d46f118062ca1ee80f391470e27e46f25349c0bb5934a341d22b7e122f2e328dc06f359e4db12525ae7fabc31660a78ed51638108faa0a683890a894aa6dd8b20f2c3d93c5adcf8cd84979051bedf3ce08c539a2b4034adb0791aaa954cb0612498adfc7304db895d1d838a4c7e3d11d373e3e255cb5fe8110ed0d8d5f64b3651b8087e583b47c40dcd6b0b796c0ea68c54e4c6f4e1370271459b24e47aeb873f49f314420a1594fcf36122d8063efbd18e6b8f505c7c54511aefb8395c190d5e41b341c2167b647bfd81e7120baef4bbd8a8373af6cce43019a180523f17d4ac3dd6d988d5ea0584411c7e607b75f807e58ac0c574040000",
    ],
    [
      "ETag",
      "q+EtP2o29Vo4BgydjmCu4Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:02:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1603144935474"
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
      "02ff8d93516fda400cc7bf8bf71a2428297491fa001beb22a550207da8aa0a5d734e76ec126777172a84f8eef5a52d9bda49e94b623b3febfcf7fd7380dfaa9210c1a32afe3468f65f0a744b1facd036da597ed554598400d08982c9f1159d2dc3e5fa49ea7078d757f1f8622b8acb4b266cf60b4b01d10172855a5a88ee0f508912b92d23dd94d5a6cd0270fbda17d7e92a9e5f715e92f4f9fc364926d36406c7e0d42885139b96ff44dbc331802d3dae30478355867e96dad01633177b995694b5c69ea5c66468a185db0f85a1a61686a8c795deb03718f5878330fc3a3c0fc721739a32e114558cdeae793c70e4845ed1138b84c11913a68d5970de3e775c57b215e2c3789e8ec276be7f815c19eb5e76f206be6a7b4f6af149902f40e92ea8c04aa2e9a254bd11521ab4b69324bb11757dc2a68b45f201129534a46437b8531d8076bb13f023594cfeb75ab6cddf5d7d9fa4b30f84756c861392c6d7b3753ab9bef1dcc3ebfd4ef70eed8d21f68a456f93413fbc381f8ffa2fcef946de4d7c4ee44c830164827f809fca41940b6df1f80cbb4a52ec5e030000",
    ],
    [
      "ETag",
      "7Go2Q4QSwdl43Y0iI78jag==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:02:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hmw` FROM `profiles` WHERE `stamp` >= ? ORDER BY `stamp` ASC, `id` ASC LIMIT 100 OFFSET 0",
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
      jobId: "grouparoo-job-4-1603144935474",
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
      "000002ff8553694fe33010fd2b91f7cbee8ab6ced153aad850d2ddac7a40e296650fb54ee214431297d82942a8ff7d2709e510127cb2e5796fde9bf1cc03bae159840628e09bdb82e5f79fae45808e10537403afede9c98cefe8d2189dff32a3ef93a5fc492c7b3804042f5992a6db8435a428f290c9c1c26f6e72516c692e44031235ac86dec1a66e597db36d752da04996c4139edd00f94aa9ad1cb45a07e9e646884dc2e896cb6628d2a7f7d6ce686d7371cd42255baf155b20225bef6a1e2722a48a8b6cb8f041bf902c5fb194f2041c3c13a3e0dbebcc4d4ed3e606c03b1e321a86a2c854e90a5284228bf9a6c8abac68f0802a972f2ec87726ce88685f8f34df1e3bab91ed93cf6ba94060ad51a9f9c47367dfbf94d7f56a7595deadb5b1379f6a6ba832e609936bede287e339da81f3b7c0d86443ed589b7ba78ea79d5c3e856c7f74a4ad7954ddb4893b7589a663accdc763df211a06bf11938a67955b428384954e1ffbe9befdc492401595ac0eaebab843f51eee0771d00de39ed90e62cc82a01774dbd40c70d8b79815058c024f95d92b16cd44468d8ed1b5f4c0ecb72dcba4b4c398deef05118d02530f22d3a4166b873444fb23749773c54eb9dc0ac9ebaea20bcf25ce8a788bd9c8264e55464c8b449dd6e6ca225efa54502480dea96b5f46b900a5f28bdc19713c7b44dca5534fc5846d6878efdfc25cc434910cd034a729532c9f8a089a86cee6be4bdcf9cc9e00a3faeab30342a2c19f876702b9df565d56d589883b757c624fcf2a0f07d092264585dad51764600337b0d1c05da21b03dd1ce8561363fc1bedf7ff8008b35de745e70bc7bb44f593c76296b32cfcf857015c053edad0c3be001436065460d21487110a65a911e6ac1e259e965e0e6ccbecb47ba802e7ea4dacaf770e3d2b73941959ca32f55850bd2f50672d56c8271004610266b02e10fd0f7315533fad040000",
    ],
    [
      "ETag",
      "5MBNivaV2CQX3dGLVsJT4A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:02:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1603144935474"
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
      "6f",
      "6f",
      "da3010c6bfcae4bd1c4476e240825469d0d2168dd216e8a669aa90498ee0d6c499edb44355bffb9c6c0ab0b208fa26f173be47b9dff94f5ed0234f63d441739efccc41ad3f26606e8bc118742e8cb6af4ca61a5003816189cdd42627cf8fd977fd75946032d120c7dfd2db93139ba1a325ac18eabca00507116bd4f9f18252b6026be3b14d30ebac180f46d3fe457f6c032b191781d1dd70d8ed0dfbe8b55119165c69332b45659c4cc783d145bd4fb077d96ce15c1c6749208d411de7e1d98cc5b102ad8ff4493d6359b631f5aeaf87fdeea8dec5d258491ebfc3f9c48f7508f3b4719c0fafbbd3fafc9899ad253aeb4efbf5f9dab0d5564dd3c1557f32ed5eddd4bb66b3e5eaf99056dfbf36d0839c8f61010ad2088a5d9c29f9009119140744dbaf0b686a99ab088ac5b3c9e544a2649e312565d3469ab4495ad82394869e4fdbd4e6091931c3656a53ef26b63464a461622c9fedf14045822a87f6a42ccae7930db74b84627409226195fa2280eb4a2d1f0bd9fa0cbfcada9c48aeaab973bb9f055432f01d97064ee0103fa88246e57080a0b8ed60bf922e767113bb4dbc2992387e4070bbed87b41fee49fc40dc0ef13a847ec2b8ecf436eba69e0b50866fbe7b9acfb931954ca252b70fc125aee7b8beef100f5bee2abc6042c37fd40e72408943f72007bbc8a4e585fb91835ae48d61982b019056ba67370308516931ff13080ea1763d62d737742c38f5f683d575a0659be6d1b72ce12eb4eb636f3f74580b4d70e53893ca2cd7951c6823372d887921c3438069b1ab89d3a28e5d8943d67577ca0db1e37b6f38b60a2d813dafd5de0b4cf0bfc0f77f4f776f6d40df28696f0a0dc52511dafaca2be3541650f6",
      "e6eb14853550c4ec3ff3921bd4296b7bfd0d3781383d91070000",
    ],
    [
      "ETag",
      "stu1wkpYsVNg01SseoRWnQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:02:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "00000002ff1dcfdb7244300000d07fc9f3dab1091a7dab2a76a2cb5eaaec8b4909c2b8c5a5e8f4dfbbd3f307e707d02461c3108f6dc51af00c560af57db2272d369473aa14ad2f7dba3364262651cc122fbfa05ab38d421ab48929dedc041e0ab75b7a38dcda86085adad4c2967bec2b75d82e9378e21949d5c5cf617a775fea400465a0923a77c81cc84b984925f76aae437d727a1b9afcca1d0341e9eb2ed66b54bd7a09da9ad33992e5e868beb5e9a9e83f68a07c6fa5cdb0086358e3d0ea278d6eef938f1dd66dd930d66a87f233d801b6745cb021e68f1952757d07fe9bf1b876ec713518154c80df3fd0cf37f305010000",
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
      "Mon, 19 Oct 2020 22:02:24 GMT",
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
            parameterValue: { value: "profiles" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-5-1603144935474",
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
      "0000000002ff85536b6f9b3014fd2bc8fbda04321e7948d19aa5748d96908d9076d33421e35c985b822936adaa2aff7dd7a6e9da4d5a3f61fb9e73cfb90f1ec90daf766442325edcb6d03cbcbb16193921a06881afaeb2bf715a7e5c39a54f23f939b01b2fba9f4e11c1354bd27d5d424f8ab6612027db4dbf68445bd346881e26eaf9bd41e0b803cf1bbbbe37f49026a1cc97bcba41f22fa56a39b1eda374bf10a22881d65cf699d83fbfdb77efedba11d7c094b45f2bda2822edff6a7e2805a38a8b6abadda07e2ba149614f79890efe1077d9e9ebcc7d4ef7fd02c1779c01654cb495d2ae30051355ce8bb63159c9e49118972f0e64132ec379623151b6fb2aade81e4eac1d5534550f3558e7f17a652da2f375bc9a258b75946ee617e16ad69faf97db55b4b1ae2ec238b414cd4a305c6b6a9d9a5b8417d4df8154bc32ea897ed6ca4ffd59fc3b144d4069095d301d3a011d8c9c71966743968f5c3fcb1dc8b25136f4a99b396cec81b7cb8022cf881a16ad44e5fa630cb2711a0cc679eae541908e1ceaa40e0b20c818cbddb14f0e27e4bee10aceb8ac85e45d87c855bc48c23489b7d17c9684a6849cb6a53aeb8ce9025e7a54582082fe53d34147b94025ddee459484f16c9e2c2ec36ec24b28287bd8dce28c735a4a40346db0790a9a95d861c348345b8567083613fb720c4a32f9f14874cfb58b172d7fa62738406d57992fd924f122fa64ec1c1197b46c0de4ae3be832725e6ad3879f08c415ed9290afdb30fe4ebaa7187268a0626f0f13c126f0d68f765c7b84e2e2a38a5478c7cd61526bb006ba0de2a6d823dbf346814b0cb8517fc77c27181c7ba673e88cb0874a3d15d4ad3dd6d989b5f21984411c7e647a75f80dbcac49de74040000",
    ],
    [
      "ETag",
      "3t/XialBM0l5aNsK6/r4Nw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:02:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1603144935474"
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
      "8f",
      "93",
      "40",
      "10c7bfcbf84a63f168ab24f7d07a5589b43d5b2e3e984bb36507dcba30b8bbf4d234fdeece7267359e09f70233c36f60feb37f4ef043d51262d8a9f2678be6f8aa44f7c5076bb4ad76966f0dd516210074a26492be2ef26c9d64a14876fb9be8409f5f279387eb6b266cfe1d2b01f1090a855a5a88bf9da01615725b4ebaadea6d9705e08e8d2f6ef845cb8f9c57247dbebc4bd3e92c9dc339b8344ae1c4b6e35fd0767f0e604fbb351668b0ced1cfd218da63ee122fd38aaad138b0d49a1c2d7470f7a034d436c2100db832180dc2f1f02a8ca27757a3681231a729174e51cde8dd86c703474ee8353db04808df3061ba980517ddf5c075253b213e4c96d938eae6fb1b2894b1ee7127bfc1276dff925abc10e40350ba0f2ab19668fa28d56c859406aded25c96e45d35cb0d96a953e83442d0d29d90f1e540fa0dde1027c4857d3ffad966df3675737d36cfe8cb08ecd7041b26431df64d3c5ade7ee9fce777674686f0db1572c7a9b84c3e8ed68321e3e3ae73d7937f17762675a0c2017fc037c520ee242688be75fbbf5cf135e030000",
    ],
    [
      "ETag",
      "oWMcTRIT1aIbjD4voK/I7w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:02:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hmw` FROM `profiles` WHERE `stamp` >= ? ORDER BY `stamp` ASC, `id` ASC LIMIT 100 OFFSET 0",
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
      jobId: "grouparoo-job-6-1603144935474",
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
      "85536d6fd33010fe2b91f902686d9d97b66ba5094a9b41a4be91b89bc68b5ac7b914431a97d8e934a6fe772ec93a0648f0c996ef79ee79ee7c774fbec93c214312cbedf7128abb675f554cce0818bec557369ec7aeb39c4cc151831f87895875f8f5edc5052264c5d27cb7cfa0a5555908d0c355d4de16aadcf342a916266af55a768fbab6e70ddcaed7f790a6214ba732ff86e42fc6ecf5b0d33949b7b74a6d33e07ba9db42ed1edf3b07a7b32fd4571046777e57eca088eefc53f355a6043752e517ab08f54b0dc51a765c66e8e01731895fff9eb92df9aebd45f0410ae042a83237952b4c21549eca6d59d459c9f09ed42e9f5c48e44ffd31b35e9e59d1e8d25f8f47117bbed106053616d756c4c260fef64575ddacd75f76b71beb325cccac0d5699ca0cf4c6ba7ee787be75e27c2a2975e1c27a652dc2891f5a6f6e1e43a3687c666d6452dfac69300b9865536a2d2e2f239f5914fd26a08dcc6bb78cc719544e1ffa19fcfd8915811baea109aefbb4c7ed733a88d3b82fd273b71ba714e2f83cee77b91b5331f0c04b62e0c83355f69ac573954337496cea0ae8f521e5a9eb02249ee78a24e55dda1df41327491d3e70c9f18cdc16d2c044eabdd2b2e92ab90e03e6af59b89a8f47ccafcb487999994963ae2ae2a94f834522e81f751daba854a8547d5130677e381ab3e0ca6fa6620a5b2eeea2ef381729cf34209a177c07068a994ab06964b98802162ce6a32932eaaf5e9e109a0c3fdeff22b0bb7ddd65539f8405333f62a3d9b2f670025df1acac5187e6421cead016755ab6cd6c6768bb43db6b534a3f90e3f1331271b69bbce4fdca0f6f48f314420a05e4e2ffbf8ae03af0bf0d3ded0b427163500527cd481c21a12b0d5140334a72577939b1bdee80daa40617e6cf58cfa6cea967558e2a23ec20370f0535fb82753662a57e04611027608eeb82d19f599cef8e",
      "ad040000",
    ],
    [
      "ETag",
      "TCNb32PDLe2o9zvDcU/aWw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:02:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1603144935474"
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
      "93df4fc23010c7ff97fa0a09040459e2c3d0a924e3d7d8f4c198a5aec72876eb686f2821fcefded0a04f8bf8d4ebf5fbb9bbdcf5f6ec4de68239ec55a69b12ccee22059c574600b65468e928746e813518204f49d9e7ab478c66c3a7683e78bac2cdedc76a1dcdafaf49619315649c397bb694a08465cef39ee53c03c2a42001ee8aca1e4d42efde0bc8916951392691efbb43df6387c609584a63313e5e4ee0220c4693fb7a4ef17f6154b854e72129e402cc798c2c622e84016bcfe4b48d7951fc40c3e9d4f7dc493dc57361b414ff20b7f25c42e1f687b8f3a76e58af171c7f8de8d60dbd7abd459efdaa291c8dbd45e88e67f5541cafb2f7bfb4fae5d0606bfd1ac0120ce40954bfb8307a0d098eaa05b1945d41d3ead224500d8fc4c787d4e8b2e046eb26799abd66bbd7eab4bbdd41e7b2dbef924ee984a3d43949a30595c6502357817ea7f5602df67d1fee10eccc688a6da10a3be875be92dce82a31f5ca41534283259cb6ec412273965c59387c020a6de605c3030000",
    ],
    [
      "ETag",
      "7ahVtUPBWUQ9W8tqDxhjUQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:02:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "02ff1dcfdb6e82300000d07fe9b3310b94dbde24729106102ac2f6d2002ba263d0d22a17b37f9fd9f983f304655d5321881cbe690fdec1522ad6b6dea2c1b46142d3a3a9da302adb8cc360556c88bb7d8a53ed8336531ddde1ecc9be7b088b687e5bf8bda697cec817af3daa4ad92505869ffe8a761239d1c86ad7cff9a2558cdc1ab710f9e93087785213b9b667a797b7d45d04e7ae7e7edb2f95b850949380154e6bea060c7f78c4c3de93eb4937ee419c89fc307d29e861f3d8acd486a00766d98e0e4686edf882d3d99ac006d0995d472ac8f5355335cbda80ff26910ba3afab4dcb918ee0f70fcd09a99f05010000",
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
      "Mon, 19 Oct 2020 22:02:27 GMT",
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
            parameterValue: { value: "profiles" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-7-1603144935474",
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
      "0002ff85536b6f9b3014fd2bc8fbdabc082949a4688d52baa2356405d2ae9b26649c0b730b38c5265b57e5bfefda345dab4aeb276cdf73ee39f7c123b9e3d5864c49caf3fb06ea870fb72225470414cdf175127c6e829bf2f66b945eddfbe7dffe54d1efdde56c8608ae599296db023a52343503395d47ddbc16cd96d642743051c7ed0c8efbc381e34c8623c7759026a1c82e787587e49f4a6de5b4d73b48777321f202e896cb2e13e5f37b6f67f7b6b5b805a664efb5620f4564efbf9a1f0bc1a8e2a29aad23d46f24d409949417e8e01f71939ebccedce5b4ece608de71069431d1544abbc2144c5419cf9bda6425d347625cbe3890c8bbf016b1c544d1945552d1128eac0d5534510f5bb0cec2d5d2f283b355b89cc7fe2a48a2c5b9b79c7717ab8bf53288aceb732ff42c45d3020cd79a5927e616e005f5372015af8c7aac9fb5f2537ffcb743d1049496d00613b77f4c07e3fe24cd529765e3e128cdfa90a6e3d41dd161da6713079c4d0a147946d4b068252a668f8603174649e60ced04319b84529be17532718f999d513621fb23f2abe60a4eb9dc0ac9db0e91ebd08fbd240ed7c1621e7ba6848c36853a6d8de9025e7a54582082fe53d35e47b94025dd6e3f88bd70be88fd2baf9df005e4943d44f738e38c1612104d6b6c9e827a2936d83012cc97de2982cdc4be1c82924cbf3f12dd73ede245cb9fe9310e50db55e64ba238f4834fc6ce0171458bc64076ed419791f1429bdeff4020ae689b845caebdf086b44f21645043c5de1f26824de0bd1fedb0f608c5c54715a9f08e9bc3a4d66035b41bc44db107b633eedb2e31e05abd89d97dfbd0339d436784122af55450bbf658672bd6c867100671f881e9d5fe2f24e705d674040000",
    ],
    [
      "ETag",
      "9NKuNYmjXSbVqIHZznSxvQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:02:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1603144935474"
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
      "d1",
      "4e",
      "ea",
      "40",
      "1086df65bd2d091c0b789a70d12a0a4901817a7562c8da9dd6d56da7ee6e2184f0eece56c51335a937edccf49becfcb37f0fec59968205ec41e62f35e8fd590e76e98215985a5943af0a4b03cc6360794ee42e9aa83cc39bb08f7c59777713338bb6cbd18808933e42c15970609904250c0bfe1d58c90ba0b614555d949b26f398dd57aeb84e56d3f90de5050a97cfefe2388ce2313b7aa746c12ddf34fc2fdaee8f1e7bc2871564a0a14cc1cd52697c82d44e9d4cc38b4a41c760ad5330ac819b0fb9c6bae21ab14395ceb0d31b74cf7bbefff7bcef0f7de214a6dc4a2c09bd5bd378cca2e56a853b12c97a7f88d04d4c82b3e6b9a5ba148d10174ee7c9c06fe6fb1fc8a436f66d271fe0bbb6afa4e2bf04e902a46a83722805e8364a561b2e8406635a49341b5e55272c5a2ce26f102f854629dac1ad6c0194dd9e80eb7811feb45ab2cde7aeaec264fc8d3096cc704292e96cbc4ec2d9ade3eedfef37da5b30b71ac92b069c4d7a5dffa23f1c74df9c7389ce4d744e60750d1e4b39fd00136959907165e0f80a3204602b5e030000",
    ],
    [
      "ETag",
      "wBHlgfoGA5oaQu0wHsMBvQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:02:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hmw` FROM `profiles` ORDER BY `stamp` ASC, `id` ASC LIMIT 4 OFFSET 0",
        types: [],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-8-1603144935474",
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
      "00000002ff85535d4fdb3014fd2b51f6b28d7ea4246dda4a68eb4a3a452aed96b89b786a6de7261892b8d80ea842fcf75db7948190e0cdf23de79e737dae1fdc1b5167eed865a2b86d40ed3e5d4be6b65c30b4c0db939319319c78494fee941994c130ecabe2ec0c11c2b234adb625b4b56c14073d5ea59d42c9664b95946d6cd41eb67b03cfef05c1c8ef076180340d653e17f50d92af8cd9ea71b77b94ee14521625d0add01d2eabe7fbeedd6977abe43570a3bbaf15bb28a2bbef6a7e2b25a746c8fa6c95a27ea341ada1a2a24407ff8919fbfeba7347d0aa5320f84e70a09ccba636d615b6e0b2ce45d1a87d5777fce0ee5dbe38b869348fa6c4f9da72d2c92c5a4f2729f9bcd10605360ed54e4a9278f1f38b3d6ed6ebabea7ee3cc92e585b3c129735182de38cbe43c4a9c1f97ce913649a72d6723b2fdc999c71731710267399ba511713c74958136a2de7b22949560fd3cbd5afc362a4ba0866a3814d7a137a0bda13762390b793ef4fb2cf780b1210bfbd4671e1f0510640c28f28cedbe67d15ad608a561bfd7cf43e6653e0fc3613f043e60033e1a80779a71168297b381fbd872ef9530702ef4566a71783bf76f1293684d92d5623a21d17e8c9c36a5393f98b343bcf469704804bd33d7a3ad0a894a36887841a2643225f19fe890fd1c0aca77e92da69fd35203a2a9a21518501732c347737f2dd398c4cbc5646e7be14291ddd6deff5e45c9e5d355023928a8f9c78f8ce07de1a36f715c5284e29aa20ac66e0426cab5d5e00a0ec98aca7a39b28351cfb7d92358993735dff7b1f6bc9cb62354509ba7810e4bea3e3e8935fa1984450c64813b8ad57f835e0b5222040000",
    ],
    [
      "ETag",
      "++FTtcT0R1oyrt6l4875rg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:02:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1603144935474"
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
      "02ff9d95f14fa33014c7ff954befc7db08a51d031293631e7abbcce9cd194d2e66a9f09828acd8765363fcdfafa0023b39e2fc61aceff5fb1defd3d7764fe8365945c84357c9f26e0de2f1eb12d4ef623003b94e95d45f395f49403d048a2db5f23a1ba98b7309b757d95d7c0193fcfc6c84fdbd3dad90e135640c794f284e208d24f2fe3ca115cb40db92480bd4635e8cc7d3797018cc7422e35191989e4d26fe6812a0e75e65881321d5a20c2ae3e97c369e1e76fb52f6299b2e3c4977b32c611581d8cd93e40b164502a4dcd1c7e582e5796d1a1d1f4f027fdaed62ab48f024fa847393ecea48d5a6761c4c8efd79b73e62aad1a21ffe3ce8d64bc5b2464df3f151703af78f4eba5d8bc57576ff91a5be7ceea11b7e35831804ac422876712ef80d846a5c1c10a9df9e425ff2b508a1689e1697134bc1d739139cf775a6eff4b16d124ca94b067448b52ee52153095f69e9d9a92e0d29ae583ae3f7fa78a04220caa13e2971f9dce8342e118a512012a8825f20363c91550c372f09f33b3c94e51921cfaad92396d6563c302c3a3488630cad2aa9c4ba56c42c95d03e650d5c03d736cbb4ccbe69f5cdba4c6c0c1c733070b14b03b745f8055b1e261ea6df4cb35ceb266dfdcbfb2c4cd2067050ec91b720041de156d4037d7ad366bdc4c0d4362836ac46911d84db532e3588fd9ec2dac6b5a9066ec5b53a7149653814a0206d847c1df2f0b64a2c97af19eb43d4181b8e6e14360d4ce8ce4db66dc720ef59c836f49060b71d9a7442d7f5f81953acee385720632ea22ac3c2b714f908357689e1eabd6dea8fdd4ef6ff80eaf532dfa3d06d66073ba49d99fecb7cf97abc478f9ae144707d5548286e09d7262f77c63e2f88f4b6f68a4a7a2864fa4ff367a29057f6e6f92f61b66a7492070000",
    ],
    [
      "ETag",
      "hmBtXWsekbmqfXeLpWUB1A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:02:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "000000000002ff1dcf4b5283300000d0bb64dd76a408047704cb2f4aa5583eab0cc4c8af211428141cef6ec77783f703324ad930905134ac052f60c9f6fa8eeeb080e839f86a51e80cd4f4104c556d6c8afde5cd3e84769bfba7d5b56927dd3eb9ca55a3d2ace9fcee148a640e392a6b2f7ce56d38e3302028312e3cf593f896d45731671832cd72fc65aa0f107b863209e8c8a94f4921e6b2c2dd2998cd27eecdd1d692239313739bb958a2411ec30f9420d96dcc20b193b48c1a77d2b523150b26aba791e5daac71d4afb7eff3bc7a47013680ddbbaa6703a91e3359d1f50df86f9271e9d8e38a58d6b31efcfe017f76c60205010000",
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
      "Mon, 19 Oct 2020 22:02:29 GMT",
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
            parameterValue: { value: "profiles" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-9-1603144935474",
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
      "2b91f771b44d9b843ea46a742540a536ddd21484a629729c9bcc90c42576982ad4ffbe6b873210127c8aed7bce3de73ef244ee799592094978fed040bdff722712724240d11c5f1df89a9deefbc3ddd5e5b014b7d9f7f486bbb3e914115cb3242d770574a4686a0672b2dd74f35a343b5a0bd1c1449d71a77f6a3b7dd71d3b9e3b749126a1c896bcba47f21fa57672d2eb1da5bbb910790174c7659789f2e5bdf738e8ed6a71074cc9de5bc51e8ac8de879adf0ac1a8e2a29a6e37a8df48a86328292fd0c17f629a9cbdcddce5b4ece6087ee40c2863a2a99476852998a8329e37b5c94a264fc4b87c75201b7fe9cf238b89a229abb8a2259c5829553456fb1d5817e17a652d828b75b89a458b75106fe657fe6ad69daf97db55b0b16eaefcd0b7144d0a305c6b6a9d995b8017d44f412a5e19f5483f6be5e7fe2cde0f4513505a421b8c87f629ed8fec71922543968d1c2fc96c48925132f4a893d86cec829b26409167440d8b56a24a19f306947ab1eb4216bb2ce9c7633ae8c78e6d3b9ee38c4eb3cc258713f2b7e60aceb9dc09c9db0e919b7011f971146e83f92cf24d09196d0a75de1ad305bcf6a8b040047d50d34147b94025ddee4510f9e16c1e2daefd76c24bc829db6f1e70c6192d24209ad6d83c05f54aa4d83012cc56fe3982cdc47e1c83924c7e3d11dd73ede255cb5fe8110e50db55e64b3651b8082e8d9d23e29a168d813cb6075d46c60b6dfaf01b81b8a26d12f273eb87b7a47d0a21831a2af6f930116c029ffd68c7b547282e3eaa488577dc1c26b506aba1dd206e8a3db23ddbf686",
      "c4806bf52e36e88f8f3dd339744628a152cf05b56b8f75b6628d7c016110871f985e1dfe014b61b74a74040000",
    ],
    [
      "ETag",
      "3e+f6y17pHG7moYfBdWi4A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:02:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1603144935474"
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
      "d3",
      "30",
      "10",
      "86",
      "ff",
      "8b",
      "f9",
      "9a8a96651d8db40f291408cada916662054d951b5f320f27676ca7a3aafadf3967a3430c29fb92dc5d9e93ef3dbfd9b31fb2112c621b59fd6cc1ec5e55e0bef82003db2a67e9a5b1b1c002068e574466a6c4af63fce636c9f5e7c94aaf7ebd5eddc6e7e744d8e2166acea23d2b25286159f47dcf1a5e03b515a8daba597759c0dc4efbe232cf92f947ca6b143e9f5fa5693c4d67ec101c1b05777cddf12f68bb3904ec0e37199460a029c0cfa20dde41e1122fd3f25a2b18586c4d01967570f7a132d86a6e100754194c06a3f1f06414869393d3f02c244e61c19dc486d0ab258dc71c3aae32bc27916cf48608d3c524b8ec9e5baa4bd109f16132cfc76137dfdf40298d750f3bf9033e6afb9754fc85205d80547d50058d00d34749bde64218b0b69744bbe65a1fb1e962913e8378230c4ad10f6e650fa0dcf6087c4817f1ff564bb679dad5fb389f3d23ac23331c913cb9982df3f8e2d273378ff73bdd39b09706c92b16bc4d46c3f0ede9d978f8e09c77e8dd44e744ceb410b082d30ff0493a16955c5938fc06111ffab55e030000",
    ],
    [
      "ETag",
      "RrfoW6oZtbIXJ9YpYx/YhA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:02:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hmw` FROM `profiles` WHERE `stamp` >= ? ORDER BY `stamp` ASC, `id` ASC LIMIT 4 OFFSET 0",
        types: ["TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-04T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-10-1603144935474",
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
      "8553d96edb3010fc15817d690bdba20ecb0760a4aa2db72a7ca4929c20690b9ba22887890e47a41c0481ffbd2b29ce8100c91309eeccceec72f701ddf02c424314f2ed6dc98afb4fd779885a8849b285578bfc48af223adeabe665f26b32d66f17fac21e8d00c12b9620e92e616d9197056562b8f23bdb222f77a4c8f336246a6bb8ad59d8d04c736074cd9e093cc19278c6b31b605f49b91343553d6a77b679be4d18d971d1a179faf4aeee757557e4d78c4aa1be96544145a8ef8b9e24392592e7d968e5838152b062cd52c213b0f0cc8cc26faf537738493b5b00ef396584d2bccc64650b52d03c8bf9b62ceaac68f8806a9b2f2ec87766ce3850beb614df9e3aebb1ed079f374282c0462142f103cf5dfcf8525d37ebf5557ab751a6de72ae6ca0cc98274c6c94f39f8ee72847cedf1263838d941365e94d1c4ff97ef114b2fd714bd9f0a8be293377ee068aa92ca753df09140c6e232624cf6aaf01091356f97c6ca7fbf6132b029144b026b8ee618b687d3c08e3b047e3bed10d63ccc2b01ff6bac408311d98cc8c42468027abec358b64d0a1ee8045d80a8d1e1ee01ec074a219b86f529d9856b717475adc35636ca1430bdd155cb20917bb5cf0a6a7e8dc7303671d78abc5d80e9cba8c9894899c34e6aa225efa94502480dea9eb5045790e4ad507b98bc0f1ec71e09e39cd4cccd896d07bff16a622268960802605499964c53c8fa069e874e9bb81bb5cd83360d41f7d7a440834fcf3f04c08ee777597657da2c09d3b7e60cf4f6b0f47d01949ca1ab56f2e48c73a6e63bd8dcd40d3879a31d4cc0ec6f8121d0eff8008a3dde445bf578e77819a278fc5ac6019fdf857015c073edcd0e3ba001616066460d0248719a2a212a1056b6689a7959923bbab99030bd5e042be89597d7c6c5a95a3cac85296c9c78a9a7581421bb1523c81200823b0806d81e87f8d",
      "630e2eae040000",
    ],
    [
      "ETag",
      "6aGmhdcCv/4ZlJDC2qN2NA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:02:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1603144935474"
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
      "6d6fda3010c7bfcae4bd2c44769e13a9d2d2366dd92874405f545385dcc480691267b66987aa7ef7d9599b40cb22e80b82ef7c7f723fdf9d79060fb4484108eee9fcf78af0f5d739913ff56244c42a93427d95ac100474009178ae227b39b78ed0ed7268b9bd554ec8dabf4deea3e36315219205c931089fc18c922c1520fcf50c0a9c1325a3a90a90eb52af7b83497c118f942367a9760c6efafde8a41f83974e2d98512ee4b4326ae17832ea0d2eda7519fe944c254eb3c3247352a4841fa6a1e514a72927421ca863628acbb2119d0c87fd381ab4ab70917246d34f281fe9a18a4c3e368af3fe309ab4c7a7586e94e82c9ac4edf142e27c23a749ef2a1e4fa2abeb76d574bac89ff639eabb970e58b2fb1199114e8a84e82e2e395b9244f6f48008f5f68c74055bf184e8e2a9e06a63ced9aac49cb1aef27411ec22175ac8b603cbb13d5b05662cc192b242c5de8c556e403289b3117b52f3017400af966a5466d5f3b1726b06bd8a722c716d9d3249c48cf1b4f6e0e4cd657d237faa248d84e5f5feb96aec8cd4260a2c23304c1baa8f5b7b255f913d0cdb0f0c585b263461179a5dd8248b0cc7873ef2adc08e831d815f9019222b44f61184d5916f323bb5a04f7983fc9d2d0a21d5f1bd39b2e5abc7de07d8b10ce4eabc8ca0c9688633f11fc6ed2ddfd4f28f24ce3672006d6f37b2d38adcfcf21929686d8c139cd1e6045251d9ce5ef5b57c0359c840b66f78f63e885b5ba6a7dac3ff88e1bee30d10dacdebb6f27ab5e09264f386f04746a8a8adc58336dd7d707d47f5b16f2866c7df4dd4d2cdd033360a5923785bac087a9eb39bd57bcf7af73adb276b3592d79ca98b42107d4704aef5efc638659a485d7ca14ea50312acfe322fa90461559497bf0cb7389390070000",
    ],
    [
      "ETag",
      "Imr3+1YjO36Iumeey8YcbA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:02:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "642d0ee59390ee842948414a456b60c340888a220408bf717af73a7d37784f9051cafa3e15cd9dd5e01d2c9982d774ed3586a97d17cb4e3d7e9a4ea7f77a9ce0223a8df2dd36c2edb18af71e5e6a140eb0cda8815c0bf622e155e82d6ce45e1223eeb29b9fffa84a460e73fa2157aa3d58c7b922ce75e824176efc4a0b1f17974432397b56998b9206056e27d45a36b46fa5ae17cbe91c20965cbe68ee20ccf1ae258dd55ef7763dbe55522ba0a348021eca51c385168d28d810ffc1a5789cb664022bc0665e76ac4fcbd74cd5315e81ff662a16ce5e5793651debc0ef1f0f1ac62a05010000",
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
      "Mon, 19 Oct 2020 22:02:32 GMT",
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
            parameterValue: { value: "profiles" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-11-1603144935474",
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
      "85535d6f9b3014fd2bc87b6d1252a00991a2354be99a35211b9076d33421db18e694608a4db7aaca7fdfb569ba7693da276cdf73ee39f7830774c3ab0c4d10e1c56dcb9afb775b41d011620a17f0ea7f08edede5a7cc5bc6b7feefed5540a3afd96c3a0504d72c897775c97a52b40d6572b289fb4523da1a3742f420516f38ec0d4f6c67e8babee3b92317789295f9925737c0fea9542d2783c141bb5f0851940cd75cf6a9d83dbd0fee8e077523b68c2a39782939001539785df47d2928565c54d34d0c065ac99a94ed302fc1c25f66464e5fa6ee73bceb1700bee394614a455b296d0b525051e5bc681b93154d1e90b1f9ec80e26019cc138b8ab2dd55698577ecc8cab0c2a9baaf99751ead57d6223c5f47ab59b25887693cbf0856b3fe7cbddcacc2d8babe08a2c0529894cc70ada9756a6e215c403f6352f1caa827fa592b3f3668f1ff583401a425eb82e9c83ec1c3b1ed939c8c683e763c92db8c90311979d82136f55de6668461e01951c3c295a8b221f1866eeea6c4274eea0239f57d8ad36c34ca30f69c2c77c7687f847e355cb1332e6b2179d721741d2d92204da24d389f25812921c76da9ce3a63ba80e71e151408a0576adaeb2817a0a4dbbd0893209acd93c555d04d78c90a4cefe35b98718e4bc9008d1b689e62cd4a64d03014ce56c11980cdc43e1f82124dbe3f20dd73ede259cb9fe8090c50db55e68be2245a841f8d9d03e20a97ad81dc75075d46ce4b6d7aff0380b0a35d12f4651344df50f714b19c35aca26f0f13c026f0e6af76d87bc0c2e6838c547087d5a1528bd086752bc44db507b6773cb6c7c8801bf56fccb18f9d43d3740e9d91ed58a51e2beaf61e0aedc45af90482204c3f34cddaff011f61b4a677040000",
    ],
    [
      "ETag",
      "9BN0jKJd5LSq9xjVEcRXdA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:02:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1603144935474"
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
      "9b",
      "40",
      "0c",
      "c7",
      "bf",
      "cb",
      "ed",
      "954861256987d407b2b12d124dba84f465aaa22b67e87507a6e7235d14e5bbcf47bb6c5a27d117b0cdcf3aff7d7f0ee2876e9488c59dae1e3bb0fb7715b86f3e580175c611bf5a6c084420c0c98a49ca1e237373310e9348d1e4679ade57379ba7cb4b26a8b8875a8af8204a0d469188bf1f44236be0b6024d5737db3e0b84dbb7beb8ce57f3c517ce6b543e5f6cb22c9965a93806a746259ddcf6fc1bda6e8f8178c0bb159460a129c0cfd25a7c80c2cdbd4c92756b6044d8d90248f470ffa1b2d8b5d2228eb8320ac351381d9f8551f4e16c129d470c1a2ca4d3d830bb59f37cc2a19366854fac5284ef99b07dcc8acbfeb9e3ba56bd121fce17f934ea07fc1b28b525f7bc94dfe08bb87f4923df08f20d68330455d028b043946eb752290b448324d256b6ed099b2d97d92b4836caa256c3e04e0f00c6ed4ec0e76c99fc6fb5ec9b3fbbfa94e4e92b821cbbe184e4f3ab749d2757d79ebb7db9dfd9de015d5b64b310789f84e3e862723e1d3f5be7237a3bf139b1b31d04a290fc077cd54ec4a53404c75f076cea085f030000",
    ],
    [
      "ETag",
      "sLq4lV801A4ds5xEEhgVUw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:02:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hmw` FROM `profiles` WHERE `stamp` >= ? ORDER BY `stamp` ASC, `id` ASC LIMIT 4 OFFSET 0",
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
      jobId: "grouparoo-job-12-1603144935474",
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
      "4f",
      "db",
      "30",
      "10",
      "fe",
      "2b",
      "91f7659b68ebe6a56d2a21164a6091fac2921404dbd43ae92518d2b8c40ea820fefb2e09652024f864cbf73cf73c77be7b24373c5f912189787a5b42b1fd722d22b24740b1145f0767f374e56c0e9dcbc1c98377f9b0f52f5deaecef2382572cc9d69b0c5a5294450c72380fda6921ca0d2b846861a256576f757bd4e89aa66d5866df449e842c19f3fc06d9574a6de4b0d3d969b75321d20cd886cb762cd62fef9d3bbdb329c435c44a76de4a765045763e163dc844cc1417f9fe3c4003a58462016bc633b4f09fb98a7ebc4ddde66cdd4e117cc76360712cca5c55b630452cf284a765516725c34752db7c7521813b7647a1f67d4f0b9c6377317282f0eb522a14586a4c6a41e87bd3936fd575b9585cadef97dab13f9b684b2c33e119c8a576fed3f55d6dc7f953526ac0be76a0cdfc23d7d70e2f5e424e30dad3967c55dfb4b137f142cdd466c7c7811b6a14ddae402a9ed75e43166550f97c6ea7f7fe132b02534c42135cf4698f7507d48e92a81f2703c38a120a513488fa1633221adb2698ab0818f25495bd66b15ce406a530306d9bad7a5614f57b3ddbd27516d960f4c0ee595dcb80c88a4d9b3ced91fb822b38e27223246f7a4ace7d2f7417a13f9f8e9cd0adcb485899a9a3c65c55c46b9f0a8b44d007753d55512e50a9fa206f1ababe330abd33b7998931a42cde06b7381509cb24209a156c0d0a8a895861d3c8e92cf0426f3675c6c8a83ffa74879064f8fbf13f21dc6eea2eabfa24a1377183d0999cd61e76a033969535eaaeb9109deab445f5",
      "16ed875d7dd835865db34d29bd244f4f7f9188a3dde425bfe6ae7f419a271f1228208f3fff5504d7814f3774b72e88c58541191c34c57186625989c40534b3c4d795991ddb3269cf2035b850ef62966eed9a56e5a832c21a72f55c51b32e58682356ca1710067104a6b82d18fd071e778535ae040000",
    ],
    [
      "ETag",
      "8VUgdApBAZ8GzIZzyRZE0A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:02:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1603144935474"
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
      "955d6fda301486ffcae45d0e223b712041aa3468698b46a1a5e9d55421931c825b1353dba14355fffb9c6c0ab0b2087a93f83d3eaf729ee38fbca1679e25a883663c7dc9416dbea660ee8ac104742e8cb6af95cc34a00602c3529b09e3a54763331acbd98b1a3d0491ec6593bbb3339ba1e3052c19eabca139079168d4f9f98632b6046be3894d309b55311e8ca2fe557f62034b991481d1c370d8ed0dfbe8bd5119e65c69332d4565bc8f2683d155bd4fb04fd96ce15c9c6649214b409de6e1ab294b12055a9fe8937aca56abada9371e0ffbdd51bd8b6589923cf98473cd4f7508b3de3a2e87e36e549f9f30b3b34417dda85f9faf0d5beed4140d6efaf751f7e6b6de359d2e96afc7b4faf1bd819ee46c02735090c550ece295924f109b417140b4fdba80a696b98aa1583c9b5c4ea44ae62ba6a46cda4893b84dd2c21ea134f47cdaa63651c898192e339bfb706f6b43461a2626f2d59e0f5424a872688fcabc7cae6db85d3214a36b1029abd40f015c576af15cc8d677f85516e7c47259cd5dda0d2da09281efb834700287f84115342a872304c56d07fb9574b18b9bd86de26d91c4f10382db6d3fa4fdf040e217e27688d721f41bc665ab7759b7f55c81327cfbddf37cc68da9641a97ba7d0c2e713dc7f57d8778d87257e139131afea3f690034a1c7a0039d847262d2f3c8c1cd4226f0dc35c0980acd23dbb1940884a8bd99f40700cb5eb11bbbea163c1a97718acae032ddb348f7e6409f7a15d1f7b87a1c35a68822bc7855466b1a9e4401bb96d41c20b191e034c8b5d4d9c1675ec4a1cb3aefb536e881ddffbc0b1536809ec79adf6416082ff057efc7bba7b1b03fa56497b5568286e89d0d657de19e7b280b2575fa728ac8162667f9ad7dca04e59dbfb6f68c2738c92070000",
    ],
    [
      "ETag",
      "eOm34ctNOobqrNU8ToBnRQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:02:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
